"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import MoneyLadder from "@/components/money-ladder"
import Lifelines from "@/components/lifelines"
import QuestionDisplay from "@/components/question-display"
import { Trophy, RotateCcw } from "lucide-react"

export interface Question {
  id: number
  question: string
  options: { label: string; text: string }[]
  correct: string
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is Canton Network?",
    options: [
      { label: "A", text: "A cryptocurrency exchange" },
      { label: "B", text: "A privacy-enabled blockchain for institutional finance" },
      { label: "C", text: "A digital wallet application" },
      { label: "D", text: "A payment processing company" },
    ],
    correct: "B",
    explanation:
      "Canton Network is a privacy-enabled public blockchain designed specifically for regulated institutional finance.",
  },
  {
    id: 2,
    question: "What type of institutions is Canton Network primarily designed for?",
    options: [
      { label: "A", text: "Retail consumers" },
      { label: "B", text: "Gaming companies" },
      { label: "C", text: "Regulated financial institutions" },
      { label: "D", text: "Social media platforms" },
    ],
    correct: "C",
    explanation:
      "Canton is built for regulated financial institutions that need privacy, control, and compliance while accessing blockchain benefits.",
  },
  {
    id: 3,
    question: "What smart contract language does Canton Network use?",
    options: [
      { label: "A", text: "Solidity" },
      { label: "B", text: "Rust" },
      { label: "C", text: "Daml" },
      { label: "D", text: "JavaScript" },
    ],
    correct: "C",
    explanation:
      "Canton uses Daml (Digital Asset Modeling Language), which enables private smart contracts with selective data sharing.",
  },
  {
    id: 4,
    question: "What is the Global Synchronizer in Canton Network?",
    options: [
      { label: "A", text: "A time-keeping protocol" },
      { label: "B", text: "A decentralized connectivity infrastructure for atomic transactions" },
      { label: "C", text: "A data backup system" },
      { label: "D", text: "A user authentication service" },
    ],
    correct: "B",
    explanation:
      "The Global Synchronizer is an optional decentralized infrastructure that enables seamless atomic transactions across various applications.",
  },
  {
    id: 5,
    question: "What is a key privacy feature of Canton Network?",
    options: [
      { label: "A", text: "All data is public by default" },
      { label: "B", text: "Selective data sharing with permissioned access" },
      { label: "C", text: "Complete anonymity for all users" },
      { label: "D", text: "No data encryption" },
    ],
    correct: "B",
    explanation:
      "Canton enables selective data sharing, ensuring participants only access data they're permissioned for, maintaining privacy while enabling collaboration.",
  },
  {
    id: 6,
    question: "Which company originally developed Canton Network?",
    options: [
      { label: "A", text: "IBM" },
      { label: "B", text: "Digital Asset" },
      { label: "C", text: "Microsoft" },
      { label: "D", text: "Goldman Sachs" },
    ],
    correct: "B",
    explanation:
      "Canton was originally developed by Digital Asset, a company specializing in distributed ledger technology for financial markets.",
  },
  {
    id: 7,
    question: "How is Canton Network's architecture best described?",
    options: [
      { label: "A", text: "A single blockchain" },
      { label: "B", text: "A network of blockchain networks" },
      { label: "C", text: "A centralized database" },
      { label: "D", text: "A peer-to-peer file system" },
    ],
    correct: "B",
    explanation:
      "Canton acts as a network of blockchain networks, fostering interoperability between previously siloed financial systems.",
  },
  {
    id: 8,
    question: "What does Canton Network enable between financial institutions?",
    options: [
      { label: "A", text: "Only data storage" },
      { label: "B", text: "Atomic settlement and interoperability" },
      { label: "C", text: "Email communication" },
      { label: "D", text: "Video conferencing" },
    ],
    correct: "B",
    explanation:
      "Canton enables atomic settlement and seamless interoperability, allowing institutions to transact securely across different systems.",
  },
  {
    id: 9,
    question: "How does Canton handle data sharing between participants?",
    options: [
      { label: "A", text: "All participants see all data" },
      { label: "B", text: "No data sharing is possible" },
      { label: "C", text: "Only permissioned participants access specific data" },
      { label: "D", text: "Data is randomly distributed" },
    ],
    correct: "C",
    explanation:
      "Canton's architecture ensures that only permissioned participants can access specific data, maintaining confidentiality while enabling necessary collaboration.",
  },
  {
    id: 10,
    question: "In Daml contracts, what defines who has read access to contract data?",
    options: [
      { label: "A", text: "Miners" },
      { label: "B", text: "Observers" },
      { label: "C", text: "Validators" },
      { label: "D", text: "Nodes" },
    ],
    correct: "B",
    explanation:
      "Daml contracts define observers who have read access to maintain data confidentiality, while signatories must agree to contract creation.",
  },
  {
    id: 11,
    question: "What type of settlement capability does Canton provide?",
    options: [
      { label: "A", text: "Delayed settlement only" },
      { label: "B", text: "Manual settlement" },
      { label: "C", text: "Atomic settlement across applications" },
      { label: "D", text: "No settlement capability" },
    ],
    correct: "C",
    explanation:
      "Canton enables atomic settlement, meaning transactions either complete entirely or not at all, ensuring consistency across the network.",
  },
  {
    id: 12,
    question: "What makes Canton unique among blockchain networks?",
    options: [
      { label: "A", text: "It's the fastest blockchain" },
      { label: "B", text: "It's the first privacy-enabled open blockchain network" },
      { label: "C", text: "It uses proof-of-work" },
      { label: "D", text: "It only supports one currency" },
    ],
    correct: "B",
    explanation:
      "Canton is the first privacy-enabled open blockchain network, combining institutional-grade privacy with public blockchain benefits.",
  },
  {
    id: 13,
    question: "What do Daml contracts specify to maintain security?",
    options: [
      { label: "A", text: "Only transaction fees" },
      { label: "B", text: "Signatories and observers with specific permissions" },
      { label: "C", text: "Mining rewards" },
      { label: "D", text: "Network bandwidth" },
    ],
    correct: "B",
    explanation:
      "Daml contracts specify signatories (who must agree to creation) and observers (who have read access), ensuring proper access control.",
  },
  {
    id: 14,
    question: "How does Canton connect previously siloed financial systems?",
    options: [
      { label: "A", text: "Through email integration" },
      { label: "B", text: "By replacing all existing systems" },
      { label: "C", text: "Through interoperable infrastructure and shared connectivity" },
      { label: "D", text: "It doesn't connect existing systems" },
    ],
    correct: "C",
    explanation:
      "Canton provides interoperable infrastructure that connects previously siloed financial systems while preserving their independence and privacy.",
  },
  {
    id: 15,
    question: "What infrastructure component enables seamless atomic transactions across Canton applications?",
    options: [
      { label: "A", text: "The Transaction Pool" },
      { label: "B", text: "The Global Synchronizer" },
      { label: "C", text: "The Consensus Engine" },
      { label: "D", text: "The Memory Cache" },
    ],
    correct: "B",
    explanation:
      "The Global Synchronizer is the decentralized public connectivity infrastructure that enables seamless atomic transactions across various Canton applications.",
  },
]

const moneyLadder = [
  { level: 1, amount: "$100", safe: false },
  { level: 2, amount: "$200", safe: false },
  { level: 3, amount: "$500", safe: false },
  { level: 4, amount: "$1,000", safe: false },
  { level: 5, amount: "$5,000", safe: true },
  { level: 6, amount: "$10,000", safe: false },
  { level: 7, amount: "$25,000", safe: false },
  { level: 8, amount: "$50,000", safe: false },
  { level: 9, amount: "$75,000", safe: false },
  { level: 10, amount: "$150,000", safe: true },
  { level: 11, amount: "$250,000", safe: false },
  { level: 12, amount: "$500,000", safe: false },
  { level: 13, amount: "$750,000", safe: false },
  { level: 14, amount: "$1,000,000", safe: false },
  { level: 15, amount: "$10,000,000", safe: false },
]

export default function QuizGame() {
  const [gameState, setGameState] = useState<"welcome" | "playing" | "won" | "lost">("welcome")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [lifelines, setLifelines] = useState({
    fiftyFifty: true,
    askAudience: true,
    phoneAFriend: true,
  })
  const [removedOptions, setRemovedOptions] = useState<string[]>([])
  const [audienceResults, setAudienceResults] = useState<Record<string, number> | null>(null)
  const [friendSuggestion, setFriendSuggestion] = useState<string | null>(null)
  const [winnings, setWinnings] = useState(0)

  const startGame = () => {
    setGameState("playing")
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setLifelines({ fiftyFifty: true, askAudience: true, phoneAFriend: true })
    setRemovedOptions([])
    setAudienceResults(null)
    setFriendSuggestion(null)
    setWinnings(0)
  }

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    const correct = questions[currentQuestion].correct === answer

    if (correct) {
      setWinnings(moneyLadder[currentQuestion].level)
      setShowExplanation(true)
    } else {
      // Find last safe level
      const safeLevel = moneyLadder
        .slice(0, currentQuestion)
        .reverse()
        .find((level) => level.safe)
      setWinnings(safeLevel ? safeLevel.level : 0)
      setShowExplanation(true)
    }
  }

  const handleNext = () => {
    const correct = questions[currentQuestion].correct === selectedAnswer

    if (!correct) {
      setGameState("lost")
      return
    }

    if (currentQuestion === questions.length - 1) {
      setGameState("won")
      return
    }

    setCurrentQuestion(currentQuestion + 1)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setRemovedOptions([])
    setAudienceResults(null)
    setFriendSuggestion(null)
  }

  const useFiftyFifty = () => {
    if (!lifelines.fiftyFifty) return

    const correctAnswer = questions[currentQuestion].correct
    const wrongOptions = questions[currentQuestion].options
      .filter((opt) => opt.label !== correctAnswer)
      .map((opt) => opt.label)

    // Remove 2 wrong answers
    const toRemove = wrongOptions.slice(0, 2)
    setRemovedOptions(toRemove)
    setLifelines({ ...lifelines, fiftyFifty: false })
  }

  const useAskAudience = () => {
    if (!lifelines.askAudience) return

    const correctAnswer = questions[currentQuestion].correct
    const results: Record<string, number> = {}

    // Generate audience percentages (correct answer gets most votes)
    questions[currentQuestion].options.forEach((opt) => {
      if (opt.label === correctAnswer) {
        results[opt.label] = 45 + Math.floor(Math.random() * 30)
      } else {
        results[opt.label] = Math.floor(Math.random() * 20)
      }
    })

    // Normalize to 100%
    const total = Object.values(results).reduce((a, b) => a + b, 0)
    Object.keys(results).forEach((key) => {
      results[key] = Math.round((results[key] / total) * 100)
    })

    setAudienceResults(results)
    setLifelines({ ...lifelines, askAudience: false })
  }

  const usePhoneAFriend = () => {
    if (!lifelines.phoneAFriend) return

    const correctAnswer = questions[currentQuestion].correct
    const correctOption = questions[currentQuestion].options.find((opt) => opt.label === correctAnswer)

    setFriendSuggestion(`I think the answer is ${correctAnswer}: ${correctOption?.text}`)
    setLifelines({ ...lifelines, phoneAFriend: false })
  }

  if (gameState === "welcome") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-3xl w-full hexagon-border bg-gradient-to-br from-secondary via-secondary/80 to-secondary/60 glow-effect">
          <div className="p-8 md:p-12 text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary text-glow text-balance leading-tight">
              Who Wants to Be a Cantonaire?
            </h1>
            <div className="space-y-6 text-foreground text-lg md:text-xl">
              <p className="text-pretty leading-relaxed">
                Welcome to the ultimate Canton Network quiz challenge! Test your knowledge about the revolutionary
                privacy-enabled blockchain for institutional finance.
              </p>
              <div className="hexagon-border bg-muted/30 p-6 space-y-4 text-left">
                <h2 className="font-bold text-primary text-2xl text-glow">How to Play:</h2>
                <ul className="space-y-3 text-base md:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Answer 15 questions correctly to win $10,000,000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Each correct answer increases your winnings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Safe levels at questions 5 ($5,000) and 10 ($150,000)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Wrong answer drops you to the last safe level</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0">•</span>
                    <span>Use 3 lifelines: 50/50, Ask the Audience, Phone a Friend</span>
                  </li>
                </ul>
              </div>
            </div>
            <button
              onClick={startGame}
              className="hexagon-border bg-gradient-to-r from-primary via-primary to-primary/80 hover:scale-105 transition-all duration-300 glow-effect px-12 py-6 cursor-pointer"
            >
              <span className="text-2xl font-bold text-primary-foreground">Start Game</span>
            </button>
          </div>
        </Card>
      </div>
    )
  }

  if (gameState === "won") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-3xl w-full hexagon-border bg-gradient-to-br from-primary/20 via-secondary to-secondary/60 glow-effect">
          <div className="p-8 md:p-12 text-center space-y-8">
            <Trophy className="w-32 h-32 mx-auto text-primary animate-bounce" />
            <h1 className="text-5xl md:text-7xl font-bold text-primary text-glow">Congratulations!</h1>
            <p className="text-3xl md:text-5xl font-bold text-primary text-glow">You won $10,000,000!</p>
            <p className="text-xl md:text-2xl text-foreground text-pretty leading-relaxed">
              You've mastered Canton Network knowledge! You're now a true Cantonaire with expert-level understanding of
              privacy-enabled institutional blockchain technology.
            </p>
            <button
              onClick={startGame}
              className="hexagon-border bg-gradient-to-r from-primary via-primary to-primary/80 hover:scale-105 transition-all duration-300 glow-effect px-12 py-6 cursor-pointer"
            >
              <div className="flex items-center justify-center gap-3">
                <RotateCcw className="w-6 h-6 text-primary-foreground" />
                <span className="text-2xl font-bold text-primary-foreground">Play Again</span>
              </div>
            </button>
          </div>
        </Card>
      </div>
    )
  }

  if (gameState === "lost") {
    const safeAmount = moneyLadder.find((level) => level.level === winnings)?.amount || "$0"

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-3xl w-full hexagon-border bg-gradient-to-br from-destructive/20 via-secondary to-secondary/60 glow-effect">
          <div className="p-8 md:p-12 text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-destructive">Game Over</h1>
            <p className="text-3xl md:text-5xl font-bold text-primary text-glow">You leave with {safeAmount}</p>
            <p className="text-xl md:text-2xl text-foreground text-pretty leading-relaxed">
              {winnings > 0
                ? "Good effort! You reached a safe level and secured your winnings. Keep learning about Canton Network and try again!"
                : "Don't worry! Every expert started as a beginner. Study Canton Network and come back stronger!"}
            </p>
            <button
              onClick={startGame}
              className="hexagon-border bg-gradient-to-r from-primary via-primary to-primary/80 hover:scale-105 transition-all duration-300 glow-effect px-12 py-6 cursor-pointer"
            >
              <div className="flex items-center justify-center gap-3">
                <RotateCcw className="w-6 h-6 text-primary-foreground" />
                <span className="text-2xl font-bold text-primary-foreground">Try Again</span>
              </div>
            </button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          <div className="space-y-6">
            <Lifelines
              lifelines={lifelines}
              onFiftyFifty={useFiftyFifty}
              onAskAudience={useAskAudience}
              onPhoneAFriend={usePhoneAFriend}
              disabled={selectedAnswer !== null}
            />

            <QuestionDisplay
              question={questions[currentQuestion]}
              selectedAnswer={selectedAnswer}
              onAnswer={handleAnswer}
              showExplanation={showExplanation}
              removedOptions={removedOptions}
              audienceResults={audienceResults}
              friendSuggestion={friendSuggestion}
            />

            {showExplanation && (
              <div className="flex justify-center">
                <button
                  onClick={handleNext}
                  className="hexagon-border bg-gradient-to-r from-primary via-primary to-primary/80 hover:scale-105 transition-all duration-300 glow-effect px-12 py-6 cursor-pointer"
                >
                  <span className="text-xl font-bold text-primary-foreground">
                    {currentQuestion === questions.length - 1 ? "Finish Game" : "Next Question"}
                  </span>
                </button>
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-8 h-fit">
            <MoneyLadder ladder={moneyLadder} currentLevel={currentQuestion + 1} />
          </div>
        </div>
      </div>
    </div>
  )
}
