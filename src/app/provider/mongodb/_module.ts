import { Module } from '@nestjs/common';
import { MongoService } from './_service';

@Module({
  imports: [],
  exports: [MongoService],
  providers: [MongoService],
})
export class MongoModule {}
