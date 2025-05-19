import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NebulaModule } from './nebula/nebula.module';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './env.validation';
import { TokenModule } from './token/token.module';

void ConfigModule.forRoot({
  envFilePath: ['.env.development.local', '.env.development'],
});

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema,
    }),
    NebulaModule,
    TokenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
