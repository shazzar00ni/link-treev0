"use client"

import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ColorPicker } from "./color-picker"
import { Slider } from "@/components/ui/slider"

interface ChatbotSettingsProps {
  settings: {
    enabled: boolean
    name: string
    welcomeMessage: string
    primaryColor: string
    position: string
    autoOpen?: boolean
    responseDelay?: number
  }
  onSettingsChange: (settings: any) => void
}

export function ChatbotSettings({ settings, onSettingsChange }: ChatbotSettingsProps) {
  const handleChange = (key: string, value: any) => {
    onSettingsChange({
      ...settings,
      [key]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="chatbot-enabled">Enable Chatbot</Label>
          <p className="text-sm text-muted-foreground">Show the chatbot on your profile page.</p>
        </div>
        <Switch
          id="chatbot-enabled"
          checked={settings.enabled}
          onCheckedChange={(checked) => handleChange("enabled", checked)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="chatbot-name">Chatbot Name</Label>
        <Input
          id="chatbot-name"
          value={settings.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Assistant"
        />
        <p className="text-sm text-muted-foreground">The name that will be displayed in the chat window.</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="welcome-message">Welcome Message</Label>
        <Textarea
          id="welcome-message"
          value={settings.welcomeMessage}
          onChange={(e) => handleChange("welcomeMessage", e.target.value)}
          placeholder="Hi there! How can I help you today?"
          className="min-h-[100px]"
        />
        <p className="text-sm text-muted-foreground">The first message visitors will see when they open the chat.</p>
      </div>

      <div className="space-y-2">
        <Label>Chatbot Position</Label>
        <RadioGroup
          value={settings.position}
          onValueChange={(value) => handleChange("position", value)}
          className="grid grid-cols-2 gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bottom-right" id="bottom-right" />
            <Label htmlFor="bottom-right" className="font-normal">
              Bottom Right
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bottom-left" id="bottom-left" />
            <Label htmlFor="bottom-left" className="font-normal">
              Bottom Left
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Primary Color</Label>
        <ColorPicker color={settings.primaryColor} onChange={(color) => handleChange("primaryColor", color)} />
        <p className="text-sm text-muted-foreground">The main color used for the chatbot interface.</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="auto-open">Auto-Open Chat</Label>
          <p className="text-sm text-muted-foreground">Automatically open the chat after a few seconds.</p>
        </div>
        <Switch
          id="auto-open"
          checked={settings.autoOpen || false}
          onCheckedChange={(checked) => handleChange("autoOpen", checked)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="response-delay">Response Delay: {settings.responseDelay || 1000}ms</Label>
        <Slider
          id="response-delay"
          min={500}
          max={3000}
          step={100}
          value={[settings.responseDelay || 1000]}
          onValueChange={(value) => handleChange("responseDelay", value[0])}
        />
        <p className="text-sm text-muted-foreground">
          How long the chatbot waits before responding (simulates typing).
        </p>
      </div>
    </div>
  )
}

