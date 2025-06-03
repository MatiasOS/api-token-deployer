import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.development.local' });

import { Ofts, Oft_Peers } from 'src/oft/oft.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DB_CONNECTION_STRING,
  entities: [Ofts, Oft_Peers],
  synchronize: false,
  migrations: ['dist/db/migrations/*{.ts,.js}'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
