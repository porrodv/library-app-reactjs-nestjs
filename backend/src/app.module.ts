import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { configModuleOptions } from './config/app.config';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    MongooseModule.forRoot(
      'mongodb+srv://porrito:t6R7CnxVp312KFZB@cluster0.4douy49.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0',
      {
        autoIndex: true,
      },
    ),
    BookModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
