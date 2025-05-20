import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NebulaModule } from './nebula/nebula.module';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './env.validation';
import { appConfig } from './config/app.config';
import nebulaConfig from './config/nebula.config';

void ConfigModule.forRoot({
  envFilePath: ['.env.development.local', '.env.development'],
});

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [nebulaConfig, appConfig],
      isGlobal: true,
      validationSchema,
    }),
    NebulaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
