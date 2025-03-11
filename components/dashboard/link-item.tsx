"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Edit, Trash2, ExternalLink } from "lucide-react"
import { EditLinkDialog } from "./edit-link-dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import * as Icons from "lucide-react"

interface LinkItemProps {
  link: {
    id: string
    title: string
    url: string
    icon: string
    clicks: number
    active: boolean
  }
  onUpdate: (link: any) => void
  onDelete: () => void
  onToggleActive: () => void
}

export function LinkItem({ link, onUpdate, onDelete, onToggleActive }: LinkItemProps) {
  const [isEditOpen, setIsEditOpen] = useState(false)

  // Dynamically get the icon component
  const IconComponent = (Icons as any)[link.icon] || Icons.Link

  return (
    <div className={`flex items-center justify-between p-4 rounded-lg border ${!link.active ? "opacity-60" : ""}`}>
      <div className="flex items-center space-x-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <IconComponent className="h-5 w-5 text-primary" />
        </div>
        <div>
          <div className="font-medium">{link.title}</div>
          <div className="text-sm text-muted-foreground">{link.url}</div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Badge variant="outline" className="mr-2">
          {link.clicks} clicks
        </Badge>

        <Switch
          checked={link.active}
          onCheckedChange={onToggleActive}
          aria-label={`${link.active ? "Disable" : "Enable"} ${link.title} link`}
        />

        <Button variant="ghost" size="icon" onClick={() => setIsEditOpen(true)}>
          <Edit className="h-4 w-4" />
          <span className="sr-only">Edit {link.title}</span>
        </Button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete {link.title}</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete the link to {link.title}. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button variant="ghost" size="icon" asChild>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            <span className="sr-only">Open {link.title}</span>
          </a>
        </Button>
      </div>

      {/* In the EditLinkDialog component, use CustomLinkEditor instead of the basic form */}
      <EditLinkDialog open={isEditOpen} onOpenChange={setIsEditOpen} link={link} onUpdate={onUpdate} />
    </div>
  )
}

