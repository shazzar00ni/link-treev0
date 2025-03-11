"use client"

import {
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

// Sample data for demonstration
const data = [
  { name: "Jan 1", views: 100, clicks: 40, visitors: 80 },
  { name: "Jan 2", views: 120, clicks: 45, visitors: 90 },
  { name: "Jan 3", views: 130, clicks: 50, visitors: 100 },
  { name: "Jan 4", views: 140, clicks: 55, visitors: 110 },
  { name: "Jan 5", views: 150, clicks: 60, visitors: 120 },
  { name: "Jan 6", views: 160, clicks: 65, visitors: 130 },
  { name: "Jan 7", views: 170, clicks: 70, visitors: 140 },
  { name: "Jan 8", views: 180, clicks: 75, visitors: 150 },
  { name: "Jan 9", views: 190, clicks: 80, visitors: 160 },
  { name: "Jan 10", views: 200, clicks: 85, visitors: 170 },
  { name: "Jan 11", views: 210, clicks: 90, visitors: 180 },
  { name: "Jan 12", views: 220, clicks: 95, visitors: 190 },
  { name: "Jan 13", views: 230, clicks: 100, visitors: 200 },
  { name: "Jan 14", views: 240, clicks: 105, visitors: 210 },
]

export function AnalyticsOverview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
        <Line type="monotone" dataKey="visitors" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  )
}

