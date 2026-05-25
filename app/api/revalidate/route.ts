import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-revalidate-secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }
  const body = await req.json().catch(() => ({})) as { slug?: string };
  revalidateTag("blog-posts");
  if (body.slug) revalidateTag(`blog-post-${body.slug}`);
  return NextResponse.json({ revalidated: true });
}
