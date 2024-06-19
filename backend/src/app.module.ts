import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { configModuleOptions } from './config/app.config';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      autoIndex: true,
    }),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
