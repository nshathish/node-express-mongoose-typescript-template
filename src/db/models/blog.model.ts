import { Schema, model } from 'mongoose';

export interface Blog {
  title: string;
  body: string;
  datePosted: Date;
}

const blogSchema = new Schema<Blog>({
  title: String,
  body: String,
  datePosted: {
    type: Date,
    default: new Date(),
  },
});

export const BlogModel = model<Blog>('Blog', blogSchema);
