import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee } from "lucide-react"

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <div className="prose prose-sm">
            <p className="text-muted-foreground mb-4">Last updated: March 11, 2024</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              This Privacy Policy describes how Link&Cafe ("we", "us", or "our") collects, uses, and discloses your
              personal information when you use our website and services. We are committed to protecting your privacy
              and ensuring the security of your personal information.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>We collect several types of information from and about users of our Service, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Personal Information:</strong> This includes information that can be used to identify you, such
                as your name, email address, username, and profile picture.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect information about how you interact with our Service, including
                the pages you visit, the time and date of your visits, and the time spent on those pages.
              </li>
              <li>
                <strong>Device Information:</strong> We collect information about the device you use to access our
                Service, including the device type, operating system, and browser type.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Service and hold certain
              information. Cookies are files with a small amount of data which may include an anonymous unique
              identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Sharing and Disclosure</h2>
            <p>We may share your personal information in the following situations:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>With Service Providers:</strong> We may share your information with third-party service
                providers to perform services on our behalf.
              </li>
              <li>
                <strong>For Business Transfers:</strong> We may share or transfer your information in connection with,
                or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a
                portion of our business.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with
                your consent.
              </li>
              <li>
                <strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in
                response to valid requests by public authorities.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the
              Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
              means to protect your personal information, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access, update, or delete your information</li>
              <li>The right to rectification</li>
              <li>The right to object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Children's Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally
              identifiable information from anyone under the age of 13. If you are a parent or guardian and you are
              aware that your child has provided us with personal information, please contact us.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@linkcafe.com.</p>
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

