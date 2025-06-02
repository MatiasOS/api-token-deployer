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
        name: 'oft',
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
        name: 'oft_peer',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'deployTxHash',
            type: 'varchar',
          },
          {
            name: 'address',
            type: 'varchar',
          },
          {
            name: 'chainId',
            type: 'varchar',
          },
          {
            name: 'distributor',
            type: 'varchar',
          },
          {
            name: 'distributorDeployTxHash',
            type: 'varchar',
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
      'oft_peer',
      new TableForeignKey({
        columnNames: ['oftId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'oft',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('oft_peer', true);
    await queryRunner.dropTable('oft', true);
  }
}
