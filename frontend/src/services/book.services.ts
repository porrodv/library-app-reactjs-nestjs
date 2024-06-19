import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import {
  ApiModule,
  BookService,
  HttpMethod,
  requestHeaders,
} from '../constants/api.constants';

import { IBook, ICreateBook } from '../interfaces/book.interface';
import { getApiUrl } from '../utils/api.utils';

export const bookService = async (bookId: string): Promise<IBook> => {
  const request: AxiosRequestConfig = {
    headers: requestHeaders,
    url: `${getApiUrl(ApiModule.BOOK, BookService.GET_BY_ID)}/${bookId}`,
    method: HttpMethod.GET,
  };

  const response: AxiosResponse = await axios(request);

  return response.data;
};

export const booksService = async (): Promise<IBook[]> => {
  const request: AxiosRequestConfig = {
    headers: requestHeaders,
    url: getApiUrl(ApiModule.BOOK, BookService.GET_ALL),
    method: HttpMethod.GET,
  };

  const response: AxiosResponse = await axios(request);

  return response.data;
};

export const createBookService = async (
  book: ICreateBook,
): Promise<IBook[]> => {
  const request: AxiosRequestConfig = {
    headers: requestHeaders,
    url: getApiUrl(ApiModule.BOOK, BookService.CREATE),
    method: HttpMethod.POST,
    data: book,
  };

  const response: AxiosResponse = await axios(request);

  return response.data;
};
