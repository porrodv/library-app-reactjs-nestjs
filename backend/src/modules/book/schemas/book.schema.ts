import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, SchemaTimestampsConfig } from 'mongoose';

export type BookDocument = Book & Document & SchemaTimestampsConfig;

@Schema({
  collection: 'books',
  timestamps: true,
})
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, default: 'Anónimo' })
  author: string;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  genre: string;

  @Prop({ default: '', trim: true })
  summary: string;

  @Prop({ default: 1 })
  copiesAvailable: number;

  //   rented: [Rental];
}

export const BookSchema = SchemaFactory.createForClass(Book);
