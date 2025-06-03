import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bullmq';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './env.validation';
import { appConfig } from './config/app.config';
import nebulaConfig from './config/nebula.config';
import alchemyConfig from './config/alchemy.config';
import rpcConfig from './config/rpc.config';
import wallets from './config/wallets.config';
import { OftModule } from './oft/oft.module';
import { NebulaModule } from './nebula/nebula.module';
import { EstimatesModule } from './estimates/estimates.module';
import { MerkleTreeModule } from './merkle-tree/merkle-tree.module';
import { SharedModule } from './shared/shared.module';
import { dataSourceOptions } from 'db/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [nebulaConfig, appConfig, alchemyConfig, rpcConfig, wallets],
      isGlobal: true,
      validationSchema, // comment to prevent env validation
      envFilePath: ['.env.development.local'],
    }),
    BullModule.forRoot({
      connection: {
        host: process.env.QUEUE_HOST || 'redis',
        port:
          (process.env.QUEUE_PORT && parseInt(process.env.QUEUE_PORT)) || 6379,
      },
    }),
    NebulaModule,
    EstimatesModule,
    OftModule,
    MerkleTreeModule,
    SharedModule,
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
})
export class AppModule {}
