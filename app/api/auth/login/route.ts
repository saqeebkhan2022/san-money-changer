export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASS
  ) {
    return Response.json({ success: true });
  }

  return Response.json({ error: "Invalid credentials" }, { status: 401 });
}
