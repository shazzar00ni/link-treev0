import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import * as Icons from "lucide-react"

export default function DemoPage() {
  // Demo profile data
  const profile = {
    username: "demouser",
    name: "Demo User",
    bio: "Digital creator and web developer",
    image: "/placeholder.svg?height=96&width=96",
    backgroundColor: "#ffffff",
    accentColor: "#3b82f6",
    links: [
      { id: "1", title: "Twitter", url: "https://twitter.com/username", icon: "Twitter" },
      { id: "2", title: "Instagram", url: "https://instagram.com/username", icon: "Instagram" },
      { id: "3", title: "LinkedIn", url: "https://linkedin.com/in/username", icon: "Linkedin" },
      { id: "4", title: "GitHub", url: "https://github.com/username", icon: "Github" },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.Coffee className="h-5 w-5" />
            <span className="font-bold">Link&Cafe</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center py-12">
        <div className="container max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Demo Profile</h1>
            <p className="text-muted-foreground">
              This is how your profile will look to visitors. Create your own by signing up!
            </p>
          </div>

          <div className="w-full max-w-md rounded-lg border p-6 shadow-md">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={profile.image} alt={profile.name} />
                <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="text-sm text-muted-foreground mb-2">@{profile.username}</p>
              <p className="mb-6">{profile.bio}</p>

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
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4">Ready to create your own profile?</p>
            <Link href="/register">
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Link&Cafe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

