import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Download, Check } from "lucide-react"

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardHeader heading="Billing" text="Manage your subscription and billing information." />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
            <Badge>Free</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0/month</div>
            <p className="text-xs text-muted-foreground">Basic features with limited usage</p>
            <Button className="mt-4 w-full">Upgrade Plan</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Payment Method</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">None</div>
            <p className="text-xs text-muted-foreground">No payment method on file</p>
            <Button variant="outline" className="mt-4 w-full">
              Add Payment Method
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usage</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2/5</div>
            <p className="text-xs text-muted-foreground">Active links (Free plan limit)</p>
            <div className="mt-4 h-2 w-full rounded-full bg-muted">
              <div className="h-2 w-2/5 rounded-full bg-primary"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="plans" className="space-y-4">
        <TabsList>
          <TabsTrigger value="plans">Available Plans</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>

        <TabsContent value="plans">
          <Card>
            <CardHeader>
              <CardTitle>Choose a Plan</CardTitle>
              <CardDescription>Select the plan that best fits your needs.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Free</CardTitle>
                    <CardDescription>For personal use</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$0</div>
                    <p className="text-sm text-muted-foreground">per month</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>5 social links</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Basic analytics</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>1 profile page</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="mt-6 w-full">
                      Current Plan
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-primary">
                  <CardHeader>
                    <Badge className="absolute right-4 top-4">Popular</Badge>
                    <CardTitle>Pro</CardTitle>
                    <CardDescription>For creators and professionals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$9</div>
                    <p className="text-sm text-muted-foreground">per month</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Unlimited social links</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Advanced analytics</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Custom domain</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>AI chatbot</span>
                      </li>
                    </ul>
                    <Button className="mt-6 w-full">Upgrade to Pro</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Business</CardTitle>
                    <CardDescription>For teams and organizations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$29</div>
                    <p className="text-sm text-muted-foreground">per month</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Everything in Pro</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Team collaboration</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>Advanced integrations</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="mt-6 w-full">
                      Upgrade to Business
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices">
          <Card>
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>View and download your invoices.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-muted-foreground">No invoices available on the Free plan.</p>
                <Button variant="outline" className="mt-4">
                  Upgrade to Pro
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

