import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const jsonDirectory = path.join(process.cwd(), "public");
    const fileContents = await fs.readFile(
      `${jsonDirectory}/new_cars.json`,
      "utf8"
    );

    return new NextResponse(fileContents, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600",
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
