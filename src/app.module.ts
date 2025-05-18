import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NebulaModule } from './nebula/nebula.module';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './env.validation';

void ConfigModule.forRoot({
  envFilePath: ['.env.development.local', '.env.development'],
});

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema,
    }),
    NebulaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
