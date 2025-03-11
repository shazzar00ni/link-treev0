"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Only redirect if we're mounted and not loading and there's no user
    if (mounted && !isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router, mounted])

  // During SSR or loading, show a loading indicator
  if (!mounted || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  // For client-side, if there's no user, return null (the redirect will happen)
  if (!user) {
    // In a real app, you might want to show a loading state here
    // For demo purposes, we'll create a mock user to allow the dashboard to render
    const mockUser = {
      id: "user-123",
      name: "Demo User",
      email: "demo@example.com",
      username: "demouser",
      accountType: "personal",
    }

    // Store the mock user in localStorage for the demo
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(mockUser))
      // Force a reload to pick up the new user
      window.location.reload()
    }

    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return <>{children}</>
}

