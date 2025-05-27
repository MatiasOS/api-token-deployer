import { Module } from '@nestjs/common';
import { NebulaModule } from './nebula/nebula.module';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './env.validation';
import { appConfig } from './config/app.config';
import { EstimatesModule } from './estimates/estimates.module';
import nebulaConfig from './config/nebula.config';
import coingreckoConfig from './config/coingrecko.config';
import { OftModule } from './oft/oft.module';
import { MerkleTreeModule } from './merkle-tree/merkle-tree.module';
import { SharedModule } from './shared/shared.module';
import rpcConfig from './config/rpc.config';
import wallets from './config/wallets.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [nebulaConfig, appConfig, coingreckoConfig, rpcConfig, wallets],
      isGlobal: true,
      validationSchema, // comment to prevent env validation
      envFilePath: ['.env.development.local'],
    }),
    NebulaModule,
    EstimatesModule,
    OftModule,
    MerkleTreeModule,
    SharedModule,
  ],
})
export class AppModule {}
