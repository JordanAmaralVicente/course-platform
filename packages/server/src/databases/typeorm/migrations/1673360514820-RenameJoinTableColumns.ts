import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameJoinTableColumns1673360514820 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE contents_users RENAME COLUMN user_fk TO usersId`,
        );

        await queryRunner.query(
            `ALTER TABLE contents_users RENAME COLUMN content_fk TO contentsId`,
        );
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE contents_users RENAME COLUMN usersId TO user_fk`,
        );

        await queryRunner.query(
            `ALTER TABLE contents_users RENAME COLUMN contentsId TO content_fk`,
        );
    }
}
