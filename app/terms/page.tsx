import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Coffee className="h-5 w-5" />
              <span className="font-bold sm:inline-block">Link&Cafe</span>
            </Link>
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
      <main className="flex-1 container py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

          <div className="prose prose-sm">
            <p className="text-muted-foreground mb-4">Last updated: March 11, 2024</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to Link&Cafe. These Terms and Conditions govern your use of our website and services. By accessing
              or using Link&Cafe, you agree to be bound by these Terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Definitions</h2>
            <p>"Service" refers to the Link&Cafe website and platform.</p>
            <p>"User" refers to any individual who accesses or uses the Service.</p>
            <p>
              "Content" refers to any information, text, graphics, photos, or other materials uploaded, downloaded, or
              appearing on the Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Account Registration</h2>
            <p>
              To use certain features of the Service, you must register for an account. You agree to provide accurate,
              current, and complete information during the registration process and to update such information to keep
              it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding your password and for all activities that occur under your account.
              You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. User Content</h2>
            <p>
              You retain ownership of any Content you submit, post, or display on or through the Service. By submitting,
              posting, or displaying Content on or through the Service, you grant us a worldwide, non-exclusive,
              royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and
              distribute such Content.
            </p>
            <p>
              You represent and warrant that you have all the rights, power, and authority necessary to grant the rights
              granted herein to any Content that you submit.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Prohibited Conduct</h2>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violating any laws, regulations, or third-party rights</li>
              <li>
                Posting or transmitting harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable
                content
              </li>
              <li>Impersonating any person or entity</li>
              <li>Interfering with or disrupting the Service or servers or networks connected to the Service</li>
              <li>Attempting to gain unauthorized access to the Service or other users' accounts</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account and access to the Service at any time, with or
              without cause, and with or without notice.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
              INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING
              FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
              provide at least 30 days' notice prior to any new terms taking effect.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at support@linkcafe.com.</p>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Link&Cafe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

