import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import { Oft } from 'src/oft/entities/oft.entity';
import { OftPeer } from 'src/oft/entities/oftPeers.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DB_CONNECTION_STRING,
  entities: [Oft, OftPeer],
  synchronize: false,
  migrations: ['dist/db/migrations/*{.ts,.js}'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
