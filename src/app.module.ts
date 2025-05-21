import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NebulaModule } from './nebula/nebula.module';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './env.validation';
import { appConfig } from './config/app.config';
import { TokenValueService } from './token-value/token-value.service';
import nebulaConfig from './config/nebula.config';
import coingreckoConfig from './config/coingrecko.config';

@Module({
  imports: [
    NebulaModule,
    ConfigModule.forRoot({
      load: [nebulaConfig, appConfig, coingreckoConfig],
      isGlobal: true,
      validationSchema,
      envFilePath: ['.env.development.local'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, TokenValueService],
})
export class AppModule {}
