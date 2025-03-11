import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">LinkHub</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/features" className="transition-colors hover:text-foreground/80">
                Features
              </Link>
              <Link href="/pricing" className="transition-colors hover:text-foreground/80">
                Pricing
              </Link>
              <Link href="/docs" className="transition-colors hover:text-foreground/80 text-foreground">
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
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl">Documentation</h1>
            <p className="text-muted-foreground md:text-xl">Everything you need to know about using LinkHub</p>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-16">
          <Tabs defaultValue="users" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="users">User Guide</TabsTrigger>
              <TabsTrigger value="developers">Developer Documentation</TabsTrigger>
            </TabsList>
            <TabsContent value="users" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Guide</CardTitle>
                  <CardDescription>Learn how to use LinkHub to create and manage your profile</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Getting Started */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Getting Started</h2>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Creating Your Account</h3>
                      <p>
                        To get started with LinkHub, you'll need to create an account. Visit the registration page and
                        enter your email address and password. Once registered, you'll be able to log in and access your
                        dashboard.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Setting Up Your Profile</h3>
                      <p>
                        After logging in, you'll be directed to your dashboard. From here, you can navigate to the
                        Profile section to set up your basic information:
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Upload a profile picture</li>
                        <li>Add your name and username</li>
                        <li>Write a bio</li>
                        <li>Add your website URL</li>
                      </ul>
                    </div>
                  </div>

                  {/* Managing Links */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Managing Links</h2>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Adding Links</h3>
                      <p>To add social media links to your profile:</p>
                      <ol className="list-decimal pl-6 space-y-1">
                        <li>Go to the Links section in your dashboard</li>
                        <li>Click the "Add Link" button</li>
                        <li>Enter the title, URL, and select an icon for your link</li>
                        <li>Click "Add Link" to save</li>
                      </ol>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Editing and Deleting Links</h3>
                      <p>
                        To edit a link, click the edit icon next to the link you want to modify. To delete a link, click
                        the delete icon and confirm your action.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Toggling Link Visibility</h3>
                      <p>
                        You can toggle the visibility of any link using the switch next to it. This allows you to
                        temporarily hide links without deleting them.
                      </p>
                    </div>
                  </div>

                  {/* Customizing Your Profile */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Customizing Your Profile</h2>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Choosing a Theme</h3>
                      <p>LinkHub offers several premade themes to customize the look of your profile:</p>
                      <ol className="list-decimal pl-6 space-y-1">
                        <li>Go to the Profile section in your dashboard</li>
                        <li>Select the "Appearance" tab</li>
                        <li>Browse through available themes and select one</li>
                        <li>Click "Save appearance" to apply the changes</li>
                      </ol>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Custom Colors</h3>
                      <p>
                        You can customize the background and accent colors of your profile using the color picker in the
                        Appearance tab.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Using Unsplash Images</h3>
                      <p>To use an Unsplash image as your background:</p>
                      <ol className="list-decimal pl-6 space-y-1">
                        <li>Go to the Profile section in your dashboard</li>
                        <li>Select the "Appearance" tab</li>
                        <li>Click "Browse Unsplash" under the Background section</li>
                        <li>Search for and select an image</li>
                        <li>Click "Save appearance" to apply the changes</li>
                      </ol>
                    </div>
                  </div>

                  {/* Setting Up Your Chatbot */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Setting Up Your Chatbot</h2>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Configuring Chatbot Settings</h3>
                      <p>To configure your AI chatbot:</p>
                      <ol className="list-decimal pl-6 space-y-1">
                        <li>Go to the Chatbot section in your dashboard</li>
                        <li>Enable the chatbot using the toggle switch</li>
                        <li>Customize the chatbot name and welcome message</li>
                        <li>Choose the chatbot position and color</li>
                        <li>Click "Save Changes" to apply the settings</li>
                      </ol>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Training Your Chatbot</h3>
                      <p>To train your chatbot with custom responses:</p>
                      <ol className="list-decimal pl-6 space-y-1">
                        <li>Go to the Chatbot section in your dashboard</li>
                        <li>Select the "Training" tab</li>
                        <li>Click "Add Question" to create a new question-answer pair</li>
                        <li>Enter the question and the answer you want the chatbot to provide</li>
                        <li>Click "Add Question" to save</li>
                      </ol>
                      <p>
                        You can add as many question-answer pairs as you need to make your chatbot more helpful to your
                        visitors.
                      </p>
                    </div>
                  </div>

                  {/* Viewing Analytics */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Viewing Analytics</h2>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Dashboard Overview</h3>
                      <p>
                        The Dashboard provides an overview of your profile's performance, including total views, link
                        clicks, and conversion rate.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Detailed Analytics</h3>
                      <p>For more detailed analytics:</p>
                      <ol className="list-decimal pl-6 space-y-1">
                        <li>Go to the Analytics section in your dashboard</li>
                        <li>View the Overview tab for general performance metrics</li>
                        <li>Check the Links tab to see which links are getting the most clicks</li>
                        <li>Explore the Visitors tab to learn about your audience demographics</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="developers" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Developer Documentation</CardTitle>
                  <CardDescription>Technical documentation for developers integrating with LinkHub</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* API Overview */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">API Overview</h2>
                    <p>
                      LinkHub provides a RESTful API that allows developers to programmatically interact with their
                      LinkHub profiles. This API enables you to create, read, update, and delete links, manage profile
                      information, and access analytics data.
                    </p>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Authentication</h3>
                      <p>
                        All API requests require authentication using an API key. You can generate an API key in your
                        account settings.
                      </p>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code>
                          {`// Example API request with authentication
fetch('https://api.linkhub.com/v1/links', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  {/* Endpoints */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">API Endpoints</h2>

                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Profile Endpoints</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>
                          <code>GET /v1/profile</code> - Get profile information
                        </li>
                        <li>
                          <code>PUT /v1/profile</code> - Update profile information
                        </li>
                        <li>
                          <code>POST /v1/profile/image</code> - Upload profile image
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Link Endpoints</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>
                          <code>GET /v1/links</code> - Get all links
                        </li>
                        <li>
                          <code>POST /v1/links</code> - Create a new link
                        </li>
                        <li>
                          <code>GET /v1/links/:id</code> - Get a specific link
                        </li>
                        <li>
                          <code>PUT /v1/links/:id</code> - Update a link
                        </li>
                        <li>
                          <code>DELETE /v1/links/:id</code> - Delete a link
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Analytics Endpoints</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>
                          <code>GET /v1/analytics/overview</code> - Get overview analytics
                        </li>
                        <li>
                          <code>GET /v1/analytics/links</code> - Get link analytics
                        </li>
                        <li>
                          <code>GET /v1/analytics/visitors</code> - Get visitor analytics
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Chatbot Endpoints</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>
                          <code>GET /v1/chatbot/settings</code> - Get chatbot settings
                        </li>
                        <li>
                          <code>PUT /v1/chatbot/settings</code> - Update chatbot settings
                        </li>
                        <li>
                          <code>GET /v1/chatbot/training</code> - Get training data
                        </li>
                        <li>
                          <code>POST /v1/chatbot/training</code> - Add training data
                        </li>
                        <li>
                          <code>DELETE /v1/chatbot/training/:id</code> - Delete training data
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Webhooks */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Webhooks</h2>
                    <p>
                      LinkHub supports webhooks to notify your application when certain events occur. To set up a
                      webhook:
                    </p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Go to the Developer Settings in your dashboard</li>
                      <li>Click "Add Webhook"</li>
                      <li>Enter the URL where you want to receive webhook events</li>
                      <li>Select the events you want to subscribe to</li>
                      <li>Click "Save" to create the webhook</li>
                    </ol>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">Available Events</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>
                          <code>link.created</code> - Triggered when a new link is created
                        </li>
                        <li>
                          <code>link.updated</code> - Triggered when a link is updated
                        </li>
                        <li>
                          <code>link.deleted</code> - Triggered when a link is deleted
                        </li>
                        <li>
                          <code>link.clicked</code> - Triggered when a link is clicked
                        </li>
                        <li>
                          <code>profile.updated</code> - Triggered when profile information is updated
                        </li>
                        <li>
                          <code>chatbot.message</code> - Triggered when a visitor sends a message to the chatbot
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* SDKs */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">SDKs</h2>
                    <p>
                      We provide official SDKs for several programming languages to make it easier to integrate with the
                      LinkHub API:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        <a href="#" className="text-primary hover:underline">
                          JavaScript/TypeScript SDK
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:underline">
                          Python SDK
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:underline">
                          Ruby SDK
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:underline">
                          PHP SDK
                        </a>
                      </li>
                    </ul>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">JavaScript SDK Example</h3>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code>
                          {`// Install the SDK: npm install linkhub-sdk

import { LinkHub } from 'linkhub-sdk';

// Initialize the client
const linkhub = new LinkHub('YOUR_API_KEY');

// Get all links
const links = await linkhub.links.getAll();

// Create a new link
const newLink = await linkhub.links.create({
  title: 'My Website',
  url: 'https://example.com',
  icon: 'Globe'
});

// Update a link
await linkhub.links.update(newLink.id, {
  title: 'Updated Title'
});

// Delete a link
await linkhub.links.delete(newLink.id);`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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

