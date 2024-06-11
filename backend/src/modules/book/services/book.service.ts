import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

import { Book, BookDocument } from '../schemas/book.schema';
import { CreateBookDTO } from '../dto/create-book.dto';
import { UpdateBookDTO } from '../dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async findAll(): Promise<BookDocument[]> {
    return await this.bookModel.find();
  }

  async findOne(bookId: string): Promise<BookDocument> {
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      throw new NotFoundException('Libro no registrado');
    }

    const book = await this.bookModel.findById(bookId);

    if (!book) throw new NotFoundException('Libro no registrado');

    return book;
  }

  async create(book: CreateBookDTO): Promise<BookDocument> {
    try {
      const newBook = new this.bookModel(book);

      return await newBook.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Libro ya registrado');
      }
    }
  }

  async update(bookId: string, book: UpdateBookDTO): Promise<BookDocument> {
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      throw new NotFoundException('Libro no registrado');
    }

    return this.bookModel.findByIdAndUpdate(bookId, book, { new: true });
  }
}
