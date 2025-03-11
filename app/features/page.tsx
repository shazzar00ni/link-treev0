import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">LinkHub</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/features" className="transition-colors hover:text-foreground/80 text-foreground">
                Features
              </Link>
              <Link href="/pricing" className="transition-colors hover:text-foreground/80">
                Pricing
              </Link>
              <Link href="/docs" className="transition-colors hover:text-foreground/80">
                Documentation
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center">
              <Link href="/login" className="mr-2">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Get Started</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[58rem] space-y-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl">Features</h1>
            <p className="text-muted-foreground md:text-xl">
              Everything you need to create your perfect online presence
            </p>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-16">
          <div className="mx-auto grid max-w-5xl gap-16">
            {/* Authentication */}
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="space-y-4">
                <h2 className="font-heading text-2xl md:text-3xl">Authentication System</h2>
                <p className="text-muted-foreground">
                  Secure and reliable authentication to protect your account and data.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Email and password registration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Secure login with session management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Password reset capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Profile management dashboard</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Authentication interface"
                  className="rounded-md"
                />
              </div>
            </div>

            {/* Link Management */}
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="order-2 md:order-1 rounded-lg border bg-card p-4">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Link management interface"
                  className="rounded-md"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h2 className="font-heading text-2xl md:text-3xl">Link Management</h2>
                <p className="text-muted-foreground">Easily manage all your social media links in one place.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Add, edit, and delete social media links</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Customize link appearance with icons and colors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Drag-and-drop link reordering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Toggle link visibility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Track link click analytics</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Profile Customization */}
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="space-y-4">
                <h2 className="font-heading text-2xl md:text-3xl">Profile Customization</h2>
                <p className="text-muted-foreground">
                  Make your profile stand out with extensive customization options.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Upload and crop profile picture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Customize background with colors or Unsplash images</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Select from premade themes or create your own</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Custom CSS options for advanced users</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Mobile-responsive design</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Profile customization interface"
                  className="rounded-md"
                />
              </div>
            </div>

            {/* Content Sections */}
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="order-2 md:order-1 rounded-lg border bg-card p-4">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Content sections interface"
                  className="rounded-md"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h2 className="font-heading text-2xl md:text-3xl">Content Sections</h2>
                <p className="text-muted-foreground">Create rich content to engage your audience.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Bio section with rich text formatting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Status updates with timestamp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Image gallery with grid/carousel options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Custom sections with markdown support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Interactive Chatbot */}
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="space-y-4">
                <h2 className="font-heading text-2xl md:text-3xl">Interactive Chatbot</h2>
                <p className="text-muted-foreground">Engage with your audience through an AI-powered chatbot.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>AI-powered conversational interface</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Customizable responses about profile owner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Training section to input personal FAQs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Chat history and analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Visitor interaction tracking</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <img src="/placeholder.svg?height=300&width=400" alt="Chatbot interface" className="rounded-md" />
              </div>
            </div>

            {/* Analytics */}
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="order-2 md:order-1 rounded-lg border bg-card p-4">
                <img src="/placeholder.svg?height=300&width=400" alt="Analytics dashboard" className="rounded-md" />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h2 className="font-heading text-2xl md:text-3xl">Analytics & SEO</h2>
                <p className="text-muted-foreground">Track performance and optimize your profile.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Comprehensive analytics dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Link click tracking and conversion rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Visitor demographics and sources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>SEO optimization for better discoverability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Social media preview cards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-16">
          <div className="mx-auto max-w-[58rem] space-y-6 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-4xl">Ready to get started?</h2>
            <p className="text-muted-foreground md:text-xl">
              Create your LinkHub profile today and connect with your audience.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/register">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} LinkHub. All rights reserved.
            <a
              href="https://github.com/shazzar00ni"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 ml-2"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

