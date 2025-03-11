"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { LinkItem } from "@/components/dashboard/link-item"
import { AddLinkDialog } from "@/components/dashboard/add-link-dialog"

// Sample data for demonstration
const initialLinks = [
  {
    id: "1",
    title: "Twitter",
    url: "https://twitter.com/username",
    icon: "Twitter",
    clicks: 123,
    active: true,
  },
  {
    id: "2",
    title: "Instagram",
    url: "https://instagram.com/username",
    icon: "Instagram",
    clicks: 456,
    active: true,
  },
  {
    id: "3",
    title: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "Linkedin",
    clicks: 78,
    active: true,
  },
  {
    id: "4",
    title: "GitHub",
    url: "https://github.com/username",
    icon: "Github",
    clicks: 92,
    active: false,
  },
]

export default function LinksPage() {
  const [links, setLinks] = useState(initialLinks)
  const [isAddLinkOpen, setIsAddLinkOpen] = useState(false)

  const addLink = (link: any) => {
    setLinks([...links, { ...link, id: Date.now().toString(), clicks: 0, active: true }])
  }

  const updateLink = (id: string, updatedLink: any) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, ...updatedLink } : link)))
  }

  const deleteLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id))
  }

  const toggleLinkActive = (id: string) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, active: !link.active } : link)))
  }

  return (
    <div className="flex flex-col gap-4">
      <DashboardHeader heading="Links" text="Manage your social media links.">
        <Button onClick={() => setIsAddLinkOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Link
        </Button>
      </DashboardHeader>

      <Card>
        <CardContent className="p-6">
          {links.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <h3 className="text-lg font-medium">No links added yet</h3>
              <p className="text-muted-foreground mt-1">Click the "Add Link" button to add your first link.</p>
              <Button onClick={() => setIsAddLinkOpen(true)} className="mt-4">
                <Plus className="mr-2 h-4 w-4" /> Add Link
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {links.map((link) => (
                <LinkItem
                  key={link.id}
                  link={link}
                  onUpdate={(updatedLink) => updateLink(link.id, updatedLink)}
                  onDelete={() => deleteLink(link.id)}
                  onToggleActive={() => toggleLinkActive(link.id)}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <AddLinkDialog open={isAddLinkOpen} onOpenChange={setIsAddLinkOpen} onAdd={addLink} />
    </div>
  )
}

