import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class RemoveIdColumnFromContentUsersTable1673213516748
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("contents_users", "id");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "contents_users",
            new TableColumn({
                name: "id",
                type: "varchar",
                isPrimary: true,
            }),
        );
    }
}
