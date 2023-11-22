import { PrismaClient } from "@prisma/client/edge";
import { NextResponse } from "next/server";
export async function GET(req, res) {
    try {
        const prisma = new PrismaClient();

        let result = await prisma.users.findMany({

        });

        return NextResponse.json({ status: "Success", data: result });
    } catch (e) {
        return NextResponse.json({ status: "Fail", data: e.toString() });
    }
}
