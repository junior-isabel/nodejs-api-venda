import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1652368351768 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    return await queryRunner.createTable(new Table({
      name: "Products",
      columns: [
        {
          name: "id",
          type: "int",
          generationStrategy: "increment",

        },
        {
          name: "name",
          type: "varchar"
        },
        {
          name: "price",
          type: "decimal",
          precision: 10,
          scale: 2
        },
        {
          name: "quantity",
          type: "int"
        },
        {
          name: "created_at",
          type: "datetime",
          default: "now()"
        },
        {
          name: "updated_at",
          type: "datetime",
          default: "now()"
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    return await queryRunner.dropTable("Products")
  }

}
