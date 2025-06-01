import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
import { Oft, Oft_Peer } from './oft/oft.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [nebulaConfig, appConfig, alchemyConfig, rpcConfig, wallets],
      isGlobal: true,
      validationSchema, // comment to prevent env validation
      envFilePath: ['.env.development.local'],
    }),
    NebulaModule,
    EstimatesModule,
    OftModule,
    MerkleTreeModule,
    SharedModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_CONNECTION_STRING,
      autoLoadEntities: false,
      entities: [Oft, Oft_Peer],
      synchronize: false,
    }),
  ],
})
export class AppModule {}
