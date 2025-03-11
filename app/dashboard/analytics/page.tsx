import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnalyticsOverview } from "@/components/dashboard/analytics-overview"
import { LinkAnalytics } from "@/components/dashboard/link-analytics"
import { VisitorAnalytics } from "@/components/dashboard/visitor-analytics"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardHeader heading="Analytics" text="Track your profile performance and visitor engagement." />

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="links">Links</TabsTrigger>
          <TabsTrigger value="visitors">Visitors</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>View your profile performance metrics over time.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <AnalyticsOverview />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="links">
          <Card>
            <CardHeader>
              <CardTitle>Link Performance</CardTitle>
              <CardDescription>Track which links are getting the most clicks.</CardDescription>
            </CardHeader>
            <CardContent>
              <LinkAnalytics />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visitors">
          <Card>
            <CardHeader>
              <CardTitle>Visitor Demographics</CardTitle>
              <CardDescription>Learn about your audience and where they're coming from.</CardDescription>
            </CardHeader>
            <CardContent>
              <VisitorAnalytics />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

