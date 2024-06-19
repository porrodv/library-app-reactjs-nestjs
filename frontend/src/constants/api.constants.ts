export enum ApiModule {
  BOOK = 'book',
}

export enum BookService {
  GET_BY_ID = '',
  GET_ALL = 'all',
  CREATE = 'create',
  UPDATE = 'update',
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const requestHeaders = {
  'Content-Type': 'application/json',
};
