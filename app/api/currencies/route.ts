import { db } from "../../../src/lib/db";

export async function GET() {
  const currencies = await db.currency.findMany();
  return Response.json(currencies);
}

export async function POST(req: Request) {
  const body = await req.json();

  const currency = await db.currency.create({
    data: body,
  });

  return Response.json(currency);
}
