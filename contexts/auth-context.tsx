"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type User = {
  id: string
  name: string
  email: string
  username: string
  accountType: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: RegisterData) => Promise<boolean>
  logout: () => void
}

type RegisterData = {
  name: string
  email: string
  username: string
  password: string
  accountType: string
}

// Create a default demo user
const demoUser = {
  id: "demo-123",
  name: "Demo User",
  email: "demo@example.com",
  username: "demouser",
  accountType: "personal",
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  // Initialize with demo user for easier testing
  const [user, setUser] = useState<User | null>(demoUser)
  const [isLoading, setIsLoading] = useState(false)

  // Simple login function that always succeeds
  const login = async (email: string, password: string) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    const loggedInUser = {
      id: "user-123",
      name: "John Doe",
      email,
      username: email.split("@")[0],
      accountType: "personal",
    }

    setUser(loggedInUser)
    localStorage.setItem("user", JSON.stringify(loggedInUser))
    setIsLoading(false)
    return true
  }

  // Simple register function that always succeeds
  const register = async (userData: RegisterData) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    const newUser = {
      id: "user-" + Date.now(),
      name: userData.name,
      email: userData.email,
      username: userData.username,
      accountType: userData.accountType,
    }

    // For demo purposes, automatically log in the user
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))

    setIsLoading(false)
    return true
  }

  const logout = () => {
    // For demo purposes, set back to demo user instead of null
    setUser(demoUser)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

