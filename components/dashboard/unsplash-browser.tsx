"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Loader2 } from "lucide-react"

interface UnsplashImage {
  id: string
  urls: {
    regular: string
    small: string
    thumb: string
  }
  alt_description: string
  user: {
    name: string
  }
}

interface UnsplashBrowserProps {
  onSelect: (imageUrl: string) => void
}

export function UnsplashBrowser({ onSelect }: UnsplashBrowserProps) {
  const [query, setQuery] = useState<string>("")
  const [images, setImages] = useState<UnsplashImage[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [hasMore, setHasMore] = useState<boolean>(true)

  // Mock Unsplash API call (in a real app, you would use the actual Unsplash API)
  const searchUnsplash = async (searchQuery: string, pageNum: number) => {
    setLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock data
      const mockImages: UnsplashImage[] = Array.from({ length: 12 }, (_, i) => ({
        id: `mock-${pageNum}-${i}`,
        urls: {
          regular: `/placeholder.svg?height=800&width=1200&text=${encodeURIComponent(searchQuery || "Unsplash")}`,
          small: `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(searchQuery || "Unsplash")}`,
          thumb: `/placeholder.svg?height=200&width=300&text=${encodeURIComponent(searchQuery || "Unsplash")}`,
        },
        alt_description: `${searchQuery || "Unsplash"} image ${i}`,
        user: {
          name: "Unsplash User",
        },
      }))

      if (pageNum === 1) {
        setImages(mockImages)
      } else {
        setImages((prev) => [...prev, ...mockImages])
      }

      setHasMore(pageNum < 3) // Limit to 3 pages for the mock
    } catch (error) {
      console.error("Error fetching images:", error)
    } finally {
      setLoading(false)
    }
  }

  // Initial load
  useEffect(() => {
    searchUnsplash("", 1)
  }, [])

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setPage(1)
    searchUnsplash(query, 1)
  }

  // Load more
  const loadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    searchUnsplash(query, nextPage)
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={loading}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
        </Button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative cursor-pointer rounded-md overflow-hidden group"
            onClick={() => onSelect(image.urls.regular)}
          >
            <img
              src={image.urls.small || "/placeholder.svg"}
              alt={image.alt_description || "Unsplash image"}
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button variant="secondary" size="sm">
                Select
              </Button>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button variant="outline" onClick={loadMore} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Load More"
            )}
          </Button>
        </div>
      )}

      <p className="text-xs text-muted-foreground text-center">
        Images provided by Unsplash. Please respect the Unsplash license when using these images.
      </p>
    </div>
  )
}

