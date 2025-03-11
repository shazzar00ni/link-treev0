"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import * as Icons from "lucide-react"
import { ChatbotPreview } from "./chatbot-preview"

interface ProfilePreviewProps {
  profile: {
    username: string
    name: string
    bio: string
    url?: string
    image: string | null
    images?: Array<{
      id: string
      url: string
      title: string
      isPrimary: boolean
    }>
    backgroundColor: string
    accentColor: string
    backgroundImage: string | null
    links: {
      id: string
      title: string
      url: string
      icon: string
      showIcon: boolean
      backgroundColor?: string
      textColor?: string
      borderRadius?: number
      animation?: string
    }[]
  }
}

export function ProfilePreview({ profile }: ProfilePreviewProps) {
  const [showChatbot, setShowChatbot] = useState(false)

  // Find primary image or use the main image
  const primaryImage = profile.images?.find((img) => img.isPrimary)?.url || profile.image

  return (
    <div className="flex justify-center">
      <div
        className="w-full max-w-md rounded-lg p-6 shadow-lg"
        style={{
          backgroundColor: profile.backgroundColor,
          backgroundImage: profile.backgroundImage ? `url(${profile.backgroundImage})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={primaryImage || "/placeholder.svg?height=96&width=96"} alt={profile.name} />
            <AvatarFallback className="text-2xl">{profile.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <h2
            className="text-2xl font-bold"
            style={{
              color: profile.backgroundImage ? "#ffffff" : "inherit",
              textShadow: profile.backgroundImage ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
            }}
          >
            {profile.name}
          </h2>

          <p
            className="text-sm mb-2"
            style={{
              color: profile.backgroundImage ? "#ffffff" : "inherit",
              textShadow: profile.backgroundImage ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
            }}
          >
            @{profile.username}
          </p>

          <p
            className="mb-6 max-w-xs"
            style={{
              color: profile.backgroundImage ? "#ffffff" : "inherit",
              textShadow: profile.backgroundImage ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
            }}
          >
            {profile.bio}
          </p>

          {/* Image gallery preview (if there are multiple images) */}
          {profile.images && profile.images.length > 1 && (
            <div className="w-full mb-6">
              <div className="grid grid-cols-4 gap-2">
                {profile.images.slice(0, 4).map((image) => (
                  <div key={image.id} className="aspect-square rounded-md overflow-hidden">
                    <img
                      src={image.url || "/placeholder.svg"}
                      alt={image.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="w-full space-y-3">
            {profile.links.map((link) => {
              const IconComponent = link.showIcon ? (Icons as any)[link.icon] || Icons.Link : null

              return (
                <div
                  key={link.id}
                  className={`flex items-center justify-start p-3 rounded-md transition-all ${
                    link.animation === "pulse"
                      ? "animate-pulse"
                      : link.animation === "bounce"
                        ? "animate-bounce"
                        : link.animation === "shake"
                          ? "animate-[shake_0.5s_ease-in-out_infinite]"
                          : link.animation === "glow"
                            ? "animate-[glow_1.5s_ease-in-out_infinite]"
                            : ""
                  }`}
                  style={{
                    backgroundColor: link.backgroundColor || profile.backgroundColor,
                    color: link.textColor || profile.accentColor,
                    borderRadius: `${link.borderRadius || 4}px`,
                    border: `1px solid ${profile.accentColor}`,
                  }}
                >
                  {IconComponent && <IconComponent className="mr-2 h-4 w-4" />}
                  <span>{link.title}</span>
                </div>
              )
            })}
          </div>

          {profile.url && (
            <div className="mt-6 text-sm">
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{
                  color: profile.backgroundImage ? "#ffffff" : "inherit",
                  textShadow: profile.backgroundImage ? "0 1px 3px rgba(0,0,0,0.6)" : "none",
                }}
              >
                {new URL(profile.url).hostname}
              </a>
            </div>
          )}
        </div>

        {/* Chatbot toggle button */}
        <div className="fixed bottom-4 right-4">
          <Button
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg"
            style={{ backgroundColor: profile.accentColor }}
            onClick={() => setShowChatbot(!showChatbot)}
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        </div>

        {/* Chatbot preview */}
        {showChatbot && (
          <ChatbotPreview
            settings={{
              enabled: true,
              name: "Link&Cafe Assistant",
              welcomeMessage: "Hi there! I'm the assistant for this profile. How can I help you today?",
              primaryColor: profile.accentColor,
              position: "bottom-right",
            }}
            trainingData={[
              { question: "What do you do?", answer: "I'm a digital creator and web developer." },
              {
                question: "How can I contact you?",
                answer: "You can reach me through any of the social links on my profile.",
              },
            ]}
          />
        )}
      </div>
    </div>
  )
}

