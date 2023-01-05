import { sign, verify, VerifyOptions } from "jsonwebtoken";
import { serverConfig } from "../config";

const DEFAULT_EXPIRES_IN = "5 days";
const SECRET = serverConfig.jwtSecret;

interface TokenData {
    isValid: boolean;
    payload: any;
}

export function createJWT(
    payload: { [key: string]: any },
    expiresIn = DEFAULT_EXPIRES_IN,
): string {
    return sign(payload, SECRET, { expiresIn });
}

export function verifyJWT(token: string, options?: VerifyOptions): TokenData {
    try {
        const decodedToken = verify(token, SECRET, options);
        return {
            isValid: true,
            payload: decodedToken,
        };
    } catch (error) {
        return {
            isValid: false,
            payload: {},
        };
    }
}
