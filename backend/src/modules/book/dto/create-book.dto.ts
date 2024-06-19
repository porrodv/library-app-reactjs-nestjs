import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  Min,
} from 'class-validator';

export class CreateBookDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNumber()
  year: number;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsString()
  summary: string;

  @IsNumber()
  @Min(1)
  @IsOptional()
  copiesAvailable: number;
}
