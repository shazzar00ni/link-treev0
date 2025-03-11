import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
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
              <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground">
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
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl">Pricing</h1>
            <p className="text-muted-foreground md:text-xl">Choose the perfect plan for your needs</p>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-16">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 lg:gap-8">
            {/* Free Plan */}
            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="font-heading text-xl">Free</h3>
                <p className="text-muted-foreground">Perfect for getting started with basic features.</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$0</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>1 profile page</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Up to 5 social links</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Standard themes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>LinkHub subdomain</span>
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <Link href="/register">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="relative flex flex-col rounded-lg border bg-card p-6 shadow-sm">
              <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Popular
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-xl">Pro</h3>
                <p className="text-muted-foreground">For creators who need more customization and features.</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$9</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>3 profile pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Unlimited social links</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Premium themes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Custom domain</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>AI chatbot</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Remove LinkHub branding</span>
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <Link href="/register">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>

            {/* Business Plan */}
            <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="font-heading text-xl">Business</h3>
                <p className="text-muted-foreground">For teams and businesses with advanced needs.</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$29</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>10 profile pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Unlimited social links</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Enterprise analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>All premium themes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Multiple custom domains</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Advanced AI chatbot</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Priority support</span>
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <Link href="/register">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-16">
          <div className="mx-auto max-w-[58rem] rounded-lg border bg-card p-8">
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="space-y-4">
                <h2 className="font-heading text-2xl md:text-3xl">Enterprise Plan</h2>
                <p className="text-muted-foreground">For large organizations with custom requirements.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Unlimited profile pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Custom integration with your systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Custom development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>SLA with 24/7 support</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-medium">Contact us for pricing</h3>
                  <p className="text-muted-foreground">Tailored solutions for your specific needs</p>
                </div>
                <Button size="lg" className="mx-auto">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-16">
          <div className="mx-auto max-w-[58rem] space-y-8">
            <h2 className="font-heading text-3xl leading-[1.1] text-center sm:text-3xl md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-medium">Can I upgrade or downgrade my plan?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your
                  next billing cycle.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Is there a free trial for paid plans?</h3>
                <p className="text-muted-foreground">
                  Yes, all paid plans come with a 14-day free trial so you can test all features before committing.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">How does billing work?</h3>
                <p className="text-muted-foreground">
                  We offer monthly and annual billing options. Annual plans come with a 20% discount.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Can I use my own domain?</h3>
                <p className="text-muted-foreground">
                  Yes, Pro and Business plans allow you to connect your own custom domain to your LinkHub profile.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Is there a refund policy?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.
                </p>
              </div>
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

