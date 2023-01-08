import "dotenv/config";

function parseEnvStr(env: string, defaultEnv?: string): string {
    return process.env[env] || defaultEnv;
}

function parseEnvInt(env: string, defaultEnv?: number): number {
    if (env in process.env) {
        return parseInt(process.env[env], 10);
    }
    return defaultEnv;
}

interface ServerConfig {
    application: {
        port: number;
    };
    database: {
        typeorm: {
            username: string;
            password: string;
            port: number;
            database: string;
            host: string;
            entities: string[];
            migrations: string[];
        };
    };
    jwtSecret: string;
}

export const serverConfig: ServerConfig = {
    application: {
        port: 8080,
    },
    database: {
        typeorm: {
            username: parseEnvStr("TYPEORM_USERNAME", "root"),
            password: parseEnvStr(
                "TYPEORM_PASSWORD",
                "platform_passwd_UeB1n831",
            ),
            port: parseEnvInt("TYPEORM_PORT", 3306),
            database: parseEnvStr("TYPEORM_DATABASE", "platform_db"),
            host: parseEnvStr("TYPEORM_HOST", "localhost"),
            entities: [
                parseEnvStr(
                    "TYPEORM_ENTITIES",
                    "src/databases/typeorm/entities/**/*.ts",
                ),
            ],
            migrations: [
                parseEnvStr(
                    "TYPEORM_MIGRATIONS",
                    "src/databases/typeorm/migrations/**/*.ts",
                ),
            ],
        },
    },
    jwtSecret: "QB5MQx1tskc6uzw2KZ",
};
