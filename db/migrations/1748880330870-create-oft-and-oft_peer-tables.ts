import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateOftOftPeerTables1748880330870 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ofts',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'symbol',
            type: 'varchar',
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'oft_peers',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'deployTxHash',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'chainId',
            type: 'varchar',
          },
          {
            name: 'distributor',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'distributorDeployTxHash',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'tree',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'oftId',
            type: 'integer',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'oft_peers',
      new TableForeignKey({
        columnNames: ['oftId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'ofts',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('oft_peers', true);
    await queryRunner.dropTable('ofts', true);
  }
}
