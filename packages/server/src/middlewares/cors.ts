import cors from "cors";

export const corsMiddleware = cors({
    origin: ["http://localhost:3000", "http://54.237.12.36:3000"],
    methods: ["HEAD", "OPTIONS", "PUT", "PATCH", "POST", "GET"],
});
