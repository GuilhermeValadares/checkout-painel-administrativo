import "dotenv/config";
import { PrismaClient as GeneratedPrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

export class PrismaClient extends GeneratedPrismaClient {
    constructor() {
        super({ adapter });
    }
}
