"use client"
import { Card } from "@/components/ui/card"
import { Users, Phone, Scissors } from "lucide-react"

interface LifelinesProps {
  lifelines: {
    fiftyFifty: boolean
    askAudience: boolean
    phoneAFriend: boolean
  }
  onFiftyFifty: () => void
  onAskAudience: () => void
  onPhoneAFriend: () => void
  disabled: boolean
}

export default function Lifelines({
  lifelines,
  onFiftyFifty,
  onAskAudience,
  onPhoneAFriend,
  disabled,
}: LifelinesProps) {
  return (
    <Card className="hexagon-border p-6 bg-secondary/30 glow-effect">
      <h2 className="text-2xl font-bold mb-4 text-primary text-glow">Lifelines</h2>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={onFiftyFifty}
          disabled={!lifelines.fiftyFifty || disabled}
          className={cn(
            "flex-1 min-w-[140px] hexagon-border p-4 transition-all duration-300",
            "disabled:opacity-30 disabled:cursor-not-allowed",
            lifelines.fiftyFifty && !disabled
              ? "bg-gradient-to-br from-primary to-primary/70 hover:scale-105 hover:glow-effect cursor-pointer"
              : "bg-muted/30",
          )}
        >
          <div className="flex items-center justify-center gap-2">
            <Scissors
              className={cn("w-5 h-5", lifelines.fiftyFifty ? "text-primary-foreground" : "text-muted-foreground")}
            />
            <span
              className={cn(
                "font-bold text-lg",
                lifelines.fiftyFifty ? "text-primary-foreground" : "text-muted-foreground",
              )}
            >
              50/50
            </span>
          </div>
        </button>
        <button
          onClick={onAskAudience}
          disabled={!lifelines.askAudience || disabled}
          className={cn(
            "flex-1 min-w-[140px] hexagon-border p-4 transition-all duration-300",
            "disabled:opacity-30 disabled:cursor-not-allowed",
            lifelines.askAudience && !disabled
              ? "bg-gradient-to-br from-primary to-primary/70 hover:scale-105 hover:glow-effect cursor-pointer"
              : "bg-muted/30",
          )}
        >
          <div className="flex items-center justify-center gap-2">
            <Users
              className={cn("w-5 h-5", lifelines.askAudience ? "text-primary-foreground" : "text-muted-foreground")}
            />
            <span
              className={cn(
                "font-bold text-lg",
                lifelines.askAudience ? "text-primary-foreground" : "text-muted-foreground",
              )}
            >
              Ask Audience
            </span>
          </div>
        </button>
        <button
          onClick={onPhoneAFriend}
          disabled={!lifelines.phoneAFriend || disabled}
          className={cn(
            "flex-1 min-w-[140px] hexagon-border p-4 transition-all duration-300",
            "disabled:opacity-30 disabled:cursor-not-allowed",
            lifelines.phoneAFriend && !disabled
              ? "bg-gradient-to-br from-primary to-primary/70 hover:scale-105 hover:glow-effect cursor-pointer"
              : "bg-muted/30",
          )}
        >
          <div className="flex items-center justify-center gap-2">
            <Phone
              className={cn("w-5 h-5", lifelines.phoneAFriend ? "text-primary-foreground" : "text-muted-foreground")}
            />
            <span
              className={cn(
                "font-bold text-lg",
                lifelines.phoneAFriend ? "text-primary-foreground" : "text-muted-foreground",
              )}
            >
              Phone Friend
            </span>
          </div>
        </button>
      </div>
    </Card>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
