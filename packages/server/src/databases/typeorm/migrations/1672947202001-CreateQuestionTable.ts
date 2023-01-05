import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateQuestionTable1672947202001 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "questions",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "text",
                        type: "text",
                        isNullable: false,
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
                        columnNames: ["user_fk"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "users",
                    }),
                    new TableForeignKey({
                        columnNames: ["content_fk"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "contents",
                    }),
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("questions", true, true);
    }
}
