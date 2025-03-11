"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfilePreview } from "@/components/dashboard/profile-preview"
import { toast } from "@/hooks/use-toast"
import { ProfileImageUpload } from "@/components/dashboard/profile-image-upload"
import { ProfileCustomization } from "@/components/dashboard/profile-customization"
import { ProfileGallery } from "@/components/dashboard/profile-gallery"

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  bio: z.string().max(160, {
    message: "Bio must not be longer than 160 characters.",
  }),
  url: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional()
    .or(z.literal("")),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

const defaultValues: Partial<ProfileFormValues> = {
  username: "johndoe",
  name: "John Doe",
  bio: "Digital creator and web developer",
  url: "https://example.com",
}

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [profileImages, setProfileImages] = useState<any[]>([])
  const [theme, setTheme] = useState({
    backgroundColor: "#ffffff",
    accentColor: "#3b82f6",
    backgroundImage: null,
  })
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
    }, 1000)
  }

  const handleThemeChange = (newTheme: any) => {
    setTheme(newTheme)
  }

  return (
    <div className="flex flex-col gap-4">
      <DashboardHeader heading="Profile" text="Manage your profile information and appearance." />

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your profile information and bio.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="johndoe" {...field} />
                          </FormControl>
                          <FormDescription>This is your public username.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormDescription>This is your public display name.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bio</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us a little bit about yourself"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>Brief description for your profile. Maximum 160 characters.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="url"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com" {...field} />
                          </FormControl>
                          <FormDescription>Your personal website or portfolio.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Saving..." : "Save changes"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Primary Profile Image</CardTitle>
              <CardDescription>Upload a profile picture to personalize your profile.</CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileImageUpload value={profileImage} onChange={setProfileImage} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Gallery</CardTitle>
              <CardDescription>Manage multiple images for your profile.</CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileGallery images={profileImages} onChange={setProfileImages} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Appearance</CardTitle>
              <CardDescription>Customize the look and feel of your profile page.</CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileCustomization initialTheme={theme} onSave={handleThemeChange} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview">
          <Card>
            <CardHeader>
              <CardTitle>Profile Preview</CardTitle>
              <CardDescription>This is how your profile will look to visitors.</CardDescription>
            </CardHeader>
            <CardContent>
              <ProfilePreview
                profile={{
                  ...form.getValues(),
                  image: profileImage,
                  images: profileImages,
                  backgroundColor: theme.backgroundColor,
                  accentColor: theme.accentColor,
                  backgroundImage: theme.backgroundImage,
                  links: [
                    {
                      id: "1",
                      title: "Twitter",
                      url: "https://twitter.com",
                      icon: "Twitter",
                      showIcon: true,
                    },
                    {
                      id: "2",
                      title: "Instagram",
                      url: "https://instagram.com",
                      icon: "Instagram",
                      showIcon: true,
                    },
                    {
                      id: "3",
                      title: "GitHub",
                      url: "https://github.com",
                      icon: "Github",
                      showIcon: true,
                    },
                  ],
                }}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

