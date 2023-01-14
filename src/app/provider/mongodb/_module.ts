import { Module } from '@nestjs/common';
import { MongoService } from './_service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([])],
  exports: [MongoService],
  providers: [MongoService],
})
export class MongoModule {}
