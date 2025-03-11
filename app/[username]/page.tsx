import { notFound } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import * as Icons from "lucide-react"

// This would be replaced with a database call in a real application
async function getProfile(username: string) {
  // For demo purposes, we'll return a mock profile for any username
  return {
    username,
    name: "John Doe",
    bio: "Digital creator and web developer",
    url: "https://example.com",
    image: null,
    backgroundColor: "#ffffff",
    accentColor: "#3b82f6",
    links: [
      { id: "1", title: "Twitter", url: "https://twitter.com/username", icon: "Twitter" },
      { id: "2", title: "Instagram", url: "https://instagram.com/username", icon: "Instagram" },
      { id: "3", title: "LinkedIn", url: "https://linkedin.com/in/username", icon: "Linkedin" },
      { id: "4", title: "GitHub", url: "https://github.com/username", icon: "Github" },
    ],
    chatbotEnabled: true,
  }
}

export default async function ProfilePage({ params }: { params: { username: string } }) {
  const profile = await getProfile(params.username)

  if (!profile) {
    notFound()
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center py-8 px-4"
      style={{ backgroundColor: profile.backgroundColor }}
    >
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={profile.image || "/placeholder.svg?height=96&width=96"} alt={profile.name} />
            <AvatarFallback className="text-2xl">{profile.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-sm text-muted-foreground mb-2">@{profile.username}</p>

          <p className="mb-6 max-w-xs">{profile.bio}</p>

          <div className="w-full space-y-3">
            {profile.links.map((link) => {
              const IconComponent = (Icons as any)[link.icon] || Icons.Link

              return (
                <Button
                  key={link.id}
                  variant="outline"
                  className="w-full justify-start"
                  style={{
                    borderColor: profile.accentColor,
                    color: profile.accentColor,
                  }}
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <IconComponent className="mr-2 h-4 w-4" />
                    {link.title}
                  </a>
                </Button>
              )
            })}
          </div>

          {profile.url && (
            <div className="mt-6 text-sm">
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:underline"
              >
                {new URL(profile.url).hostname}
              </a>
            </div>
          )}
        </div>
      </div>

      {profile.chatbotEnabled && (
        <div className="fixed bottom-4 right-4">
          <Button
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg"
            style={{ backgroundColor: profile.accentColor }}
          >
            <Icons.MessageSquare className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  )
}

