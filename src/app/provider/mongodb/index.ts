export * from './_module';
export * from './_service';

import { Config } from '@app';
import { ConfigType } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(@Inject(Config.KEY) private config: ConfigType<typeof Config>) {}

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.config.database.mongoUri,
    };
  }
}
