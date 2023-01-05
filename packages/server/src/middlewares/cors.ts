import cors from "cors";

export const corsMiddleware = cors({
    origin: ["http://localhost:3000"],
    methods: ["HEAD", "OPTIONS", "PUT", "PATCH", "POST", "GET"],
});
