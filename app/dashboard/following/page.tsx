"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { FollowSystem } from "@/components/dashboard/follow-system"

export default function FollowingPage() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardHeader heading="Following" text="Discover and connect with other users on Link&Cafe." />

      <FollowSystem />
    </div>
  )
}

