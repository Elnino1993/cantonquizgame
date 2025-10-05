"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"
import type { Question } from "./quiz-game"

interface QuestionDisplayProps {
  question: Question
  selectedAnswer: string | null
  onAnswer: (answer: string) => void
  showExplanation: boolean
  removedOptions: string[]
  audienceResults: Record<string, number> | null
  friendSuggestion: string | null
}

export default function QuestionDisplay({
  question,
  selectedAnswer,
  onAnswer,
  showExplanation,
  removedOptions,
  audienceResults,
  friendSuggestion,
}: QuestionDisplayProps) {
  return (
    <div className="space-y-6">
      <div className="relative">
        {/* Question number circle with glow */}
        <div className="flex justify-center mb-8">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary to-primary/60 glow-effect animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-secondary" />
            <span className="relative text-4xl font-bold text-primary text-glow z-10">{question.id}</span>
          </div>
        </div>

        {/* Question text with hexagonal frame */}
        <div className="relative mb-8">
          <div className="hexagon-border bg-gradient-to-r from-secondary via-secondary/80 to-secondary p-6 glow-effect">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-center text-balance leading-relaxed">
              {question.question}
            </h2>
          </div>
        </div>

        {/* Answer options in 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option) => {
            const isRemoved = removedOptions.includes(option.label)
            const isSelected = selectedAnswer === option.label
            const isCorrect = question.correct === option.label
            const showResult = showExplanation && isSelected

            return (
              <button
                key={option.label}
                onClick={() => !selectedAnswer && !isRemoved && onAnswer(option.label)}
                disabled={selectedAnswer !== null || isRemoved}
                className={cn(
                  "relative hexagon-border p-4 text-left transition-all duration-300",
                  "disabled:cursor-not-allowed",
                  isRemoved && "opacity-20",
                  !isRemoved && !selectedAnswer && "hover:scale-105 hover:glow-effect cursor-pointer",
                  isSelected && !showExplanation && "scale-105 glow-effect",
                  showResult && isCorrect && "scale-105",
                  showResult && !isCorrect && "scale-105",
                )}
                style={{
                  background: isRemoved
                    ? "oklch(0.15 0.08 265)"
                    : showResult && isCorrect
                      ? "linear-gradient(135deg, oklch(0.5 0.2 145) 0%, oklch(0.4 0.18 145) 100%)"
                      : showResult && !isCorrect
                        ? "linear-gradient(135deg, oklch(0.45 0.22 25) 0%, oklch(0.35 0.2 25) 100%)"
                        : isSelected
                          ? "linear-gradient(135deg, oklch(0.75 0.15 85) 0%, oklch(0.65 0.13 85) 100%)"
                          : "linear-gradient(135deg, oklch(0.2 0.1 265) 0%, oklch(0.15 0.08 265) 100%)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "text-2xl font-bold flex-shrink-0",
                      showResult && isCorrect
                        ? "text-white"
                        : showResult && !isCorrect
                          ? "text-white"
                          : isSelected
                            ? "text-primary-foreground"
                            : "text-primary",
                    )}
                  >
                    {option.label}:
                  </span>
                  <span
                    className={cn(
                      "text-base md:text-lg font-medium flex-1",
                      showResult && isCorrect
                        ? "text-white"
                        : showResult && !isCorrect
                          ? "text-white"
                          : isSelected
                            ? "text-primary-foreground"
                            : "text-foreground",
                    )}
                  >
                    {option.text}
                  </span>
                  {showResult && isCorrect && <Check className="w-6 h-6 text-white flex-shrink-0" />}
                  {showResult && !isCorrect && <X className="w-6 h-6 text-white flex-shrink-0" />}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {audienceResults && (
        <Card className="hexagon-border p-6 bg-secondary/50 glow-effect">
          <h3 className="font-bold text-xl mb-4 text-primary text-glow">Audience Results:</h3>
          <div className="space-y-3">
            {Object.entries(audienceResults).map(([label, percentage]) => (
              <div key={label} className="flex items-center gap-4">
                <span className="font-bold text-xl w-8 text-primary">{label}:</span>
                <div className="flex-1 bg-muted/50 h-8 overflow-hidden hexagon-border">
                  <div
                    className="bg-gradient-to-r from-primary to-primary/70 h-full flex items-center justify-end pr-3 text-sm font-bold text-primary-foreground transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  >
                    {percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {friendSuggestion && (
        <Card className="hexagon-border p-6 bg-secondary/50 glow-effect">
          <h3 className="font-bold text-xl mb-3 text-primary text-glow">Your Friend Says:</h3>
          <p className="text-foreground text-lg italic leading-relaxed">"{friendSuggestion}"</p>
        </Card>
      )}

      {showExplanation && (
        <Card className="hexagon-border p-6 bg-gradient-to-br from-secondary to-secondary/70 glow-effect">
          <h3 className="font-bold text-xl mb-3 text-primary text-glow">Explanation:</h3>
          <p className="text-foreground text-lg leading-relaxed">{question.explanation}</p>
        </Card>
      )}
    </div>
  )
}
