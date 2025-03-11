import { type NextRequest, NextResponse } from "next/server"

// This would be replaced with a database call in a real application
export async function GET(req: NextRequest) {
  // Get the user ID from the session or query parameter
  const userId = req.nextUrl.searchParams.get("userId") || "user123"

  // Mock data for demonstration
  const data = {
    totalClicks: 1234,
    totalViews: 5678,
    conversionRate: 21.7,
    linkAnalytics: [
      { id: "1", title: "Twitter", clicks: 456, views: 1824, ctr: 25 },
      { id: "2", title: "Instagram", clicks: 351, views: 1755, ctr: 20 },
      { id: "3", title: "LinkedIn", clicks: 271, views: 1506, ctr: 18 },
      { id: "4", title: "GitHub", clicks: 156, views: 593, ctr: 26 },
    ],
    dailyStats: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      views: Math.floor(Math.random() * 100) + 50,
      clicks: Math.floor(Math.random() * 50) + 10,
    })),
  }

  return NextResponse.json(data)
}

