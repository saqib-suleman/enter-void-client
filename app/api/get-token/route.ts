import { auth, clerkClient } from "@clerk/nextjs/server";

export async function GET() {
  const { sessionId } = await auth();

  console.log("sessionId", sessionId);

  if (!sessionId) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const template = "enter-void-jwt";

  const client = await clerkClient();

  const token = await client.sessions.getToken(sessionId, template);

  return Response.json({ token: token.jwt });
}
