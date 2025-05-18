import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NebulaModule } from './nebula/nebula.module';
import { ConfigModule } from '@nestjs/config';

void ConfigModule.forRoot({
  envFilePath: ['.env.development.local', '.env.development'],
});

@Module({
  imports: [ConfigModule.forRoot(), NebulaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
