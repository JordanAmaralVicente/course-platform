import cors from "cors";

export const corsMiddleware = cors({
    origin: ["http://localhost:3000", "http://34.207.222.57:3000"],
    methods: ["HEAD", "OPTIONS", "PUT", "PATCH", "POST", "GET"],
});
