import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.development.local' });

import { Oft, Oft_Peer } from 'src/oft/oft.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DB_CONNECTION_STRING,
  entities: [Oft, Oft_Peer],
  synchronize: false,
  migrations: ['dist/db/migrations/*{.ts,.js}'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
