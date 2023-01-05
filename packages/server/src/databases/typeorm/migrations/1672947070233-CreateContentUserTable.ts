import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateContentUserTable1672947070233 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "contents_users",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "content_fk",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "user_fk",
                        type: "varchar",
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    new TableForeignKey({
                        columnNames: ["content_fk"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "contents",
                    }),
                    new TableForeignKey({
                        columnNames: ["user_fk"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "users",
                    }),
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("contents_users", true, true);
    }
}
