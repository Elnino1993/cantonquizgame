import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Shield } from "lucide-react"

interface MoneyLevel {
  level: number
  amount: string
  safe: boolean
}

interface MoneyLadderProps {
  ladder: MoneyLevel[]
  currentLevel: number
}

export default function MoneyLadder({ ladder, currentLevel }: MoneyLadderProps) {
  return (
    <Card className="hexagon-border p-6 bg-secondary/30 glow-effect">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary text-glow">Money Ladder</h2>
      <div className="space-y-2">
        {[...ladder].reverse().map((level) => (
          <div
            key={level.level}
            className={cn(
              "relative hexagon-border p-3 transition-all duration-300",
              level.level === currentLevel &&
                "scale-110 glow-effect bg-gradient-to-r from-primary via-primary to-primary/80",
              level.level < currentLevel && "bg-muted/30 opacity-60",
              level.level > currentLevel && "bg-secondary/20",
            )}
          >
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "text-sm font-bold",
                  level.level === currentLevel ? "text-primary-foreground" : "text-muted-foreground",
                )}
              >
                {level.level}
              </span>
              <span
                className={cn(
                  "font-bold text-lg",
                  level.level === currentLevel ? "text-primary-foreground text-glow" : "text-foreground",
                )}
              >
                {level.amount}
              </span>
              {level.safe && (
                <Shield
                  className={cn("w-5 h-5", level.level === currentLevel ? "text-primary-foreground" : "text-primary")}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
