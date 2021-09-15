import { Request, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';

import { BlogModel } from '../../db/models/blog.model';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const blogs = await BlogModel.find({});
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post(
  '/',
  body('title').not().isEmpty().isLength({ max: 20 }),
  body('body').not().isEmpty().trim().escape(),
  async (req: Request, res: Response) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({ error: validationErrors.array() });
    }

    const blog = new BlogModel(req);
    try {
      await blog.save();
      res.status(201).json(blog);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
);

export default router;
