import cors from "cors";

export const corsMiddleware = cors({
    origin: ["http://localhost:3000", "http://localhost:80"],
    methods: ["HEAD", "OPTIONS", "PUT", "PATCH", "POST", "GET"],
});
