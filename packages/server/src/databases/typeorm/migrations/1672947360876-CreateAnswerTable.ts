import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateAnswerTable1672947360876 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "answers",
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
                        name: "question_fk",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "teacher_fk",
                        type: "varchar",
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    new TableForeignKey({
                        columnNames: ["teacher_fk"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "users",
                    }),
                    new TableForeignKey({
                        columnNames: ["question_fk"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "questions",
                    }),
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("answers", true, true);
    }
}
