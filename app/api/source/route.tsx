import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const target = new URL(url);

    if (!["http:", "https:"].includes(target.protocol)) {
      return NextResponse.json({ error: "Only HTTP and HTTPS are allowed" }, { status: 400 });
    }

    const response = await fetch(target.href, {
      redirect: "follow",
      headers: { "User-Agent": "OpenSource/1.0" },
    });

    const source = await response.text();

    return NextResponse.json({
      source,
      status: response.status,
      contentType: response.headers.get("content-type"),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch source" },
      { status: 500 }
    );
  }
}
