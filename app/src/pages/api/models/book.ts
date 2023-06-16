import { Schema, model, models } from 'mongoose';

const bookSchema = new Schema({
  title: String,
  author: String
});

const Book = models.Book || model('Book', bookSchema);

export default Book;