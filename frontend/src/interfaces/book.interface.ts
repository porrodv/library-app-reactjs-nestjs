import { IGlobalAttributes } from './responseData.interface';

export interface IBook extends IGlobalAttributes {
  title: string;
  author: string;
  year: number;
  genre: string;
  summary: string;
  image: string;
  copiesAvailable: number;
}

export interface ICreateBook extends IBook {}

export interface IUpdateBook extends Partial<IBook> {}
