"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChatbotClient } from "@/components/dashboard/chatbot-client"

export default function ChatbotPage() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardHeader heading="Chatbot" text="Configure your AI-powered chatbot assistant.">
        <Button>Save Changes</Button>
      </DashboardHeader>

      <Card>
        <CardHeader>
          <CardTitle>Chatbot Configuration</CardTitle>
          <CardDescription>Configure and train your AI chatbot to engage with your audience.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChatbotClient />
        </CardContent>
      </Card>
    </div>
  )
}

