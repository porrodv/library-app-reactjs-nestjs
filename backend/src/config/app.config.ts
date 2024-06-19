import { ConfigModuleOptions } from '@nestjs/config';
import config from './env.config';

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  load: [config],
  envFilePath: '../.env',
};
