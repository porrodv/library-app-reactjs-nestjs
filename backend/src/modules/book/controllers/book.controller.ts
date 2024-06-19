import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';

import { BookDocument } from '../schemas/book.schema';
import { CreateBookDTO } from '../dto/create-book.dto';
import { UpdateBookDTO } from '../dto/update-book.dto';
import { BookService } from '../services/book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('all')
  async findAll(): Promise<BookDocument[]> {
    return await this.bookService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') bookId: string): Promise<BookDocument> {
    return await this.bookService.findOne(bookId);
  }

  @Post('create')
  async create(@Body() book: CreateBookDTO): Promise<BookDocument> {
    console.log('hola');
    return await this.bookService.create(book);
  }

  @Put('update/:id')
  async update(@Param('id') bookId: string, @Body() data: UpdateBookDTO) {
    return await this.bookService.update(bookId, data);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bookService.remove(+id);
  // }
}
