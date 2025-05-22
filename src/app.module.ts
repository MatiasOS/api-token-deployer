import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NebulaModule } from './nebula/nebula.module';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './env.validation';
import { appConfig } from './config/app.config';
import { TokenValueService } from './token-value/token-value.service';
import { EstimatesModule } from './estimates/estimates.module';
import nebulaConfig from './config/nebula.config';
import coingreckoConfig from './config/coingrecko.config';
import { OftModule } from './oft/oft.module';
import rpcConfig from './config/rpc.config';
import wallets from './config/wallets.config'
@Module({
  imports: [
    NebulaModule,
    ConfigModule.forRoot({
      load: [nebulaConfig, appConfig, coingreckoConfig, rpcConfig, wallets],
      isGlobal: true,
      validationSchema, // comment to prvent env validation
      envFilePath: ['.env.development.local'],
    }),
    EstimatesModule,
    OftModule,
  ],
  controllers: [AppController],
  providers: [AppService, TokenValueService],
})
export class AppModule {}
