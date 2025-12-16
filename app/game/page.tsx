"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { RetroNav } from "@/components/retro-nav"
import { RetroFooter } from "@/components/retro-footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

type Position = { x: number; y: number }
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT"

const GRID_SIZE = 20
const CELL_SIZE = 20
const INITIAL_SNAKE: Position[] = [{ x: 10, y: 10 }]
const INITIAL_DIRECTION: Direction = "RIGHT"
const GAME_SPEED = 150

export default function SnakeGamePage() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE)
  const [food, setFood] = useState<Position>({ x: 15, y: 10 })
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [highScore, setHighScore] = useState(0)
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null)
  const directionRef = useRef<Direction>(INITIAL_DIRECTION)

  // Load high score from localStorage
  useEffect(() => {
    const savedHighScore = localStorage.getItem("snakeHighScore")
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore))
    }
  }, [])

  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      }
    } while (currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y))
    return newFood
  }, [])

  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE)
    setDirection(INITIAL_DIRECTION)
    directionRef.current = INITIAL_DIRECTION
    setFood(generateFood(INITIAL_SNAKE))
    setGameOver(false)
    setScore(0)
    setGameStarted(true)
  }, [generateFood])

  const moveSnake = useCallback(() => {
    if (gameOver) return

    setSnake((prevSnake) => {
      const head = prevSnake[0]
      const currentDirection = directionRef.current
      let newHead: Position

      switch (currentDirection) {
        case "UP":
          newHead = { x: head.x, y: head.y - 1 }
          break
        case "DOWN":
          newHead = { x: head.x, y: head.y + 1 }
          break
        case "LEFT":
          newHead = { x: head.x - 1, y: head.y }
          break
        case "RIGHT":
          newHead = { x: head.x + 1, y: head.y }
          break
      }

      // Check wall collision
      if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
        setGameOver(true)
        setGameStarted(false)
        return prevSnake
      }

      // Check self collision
      if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true)
        setGameStarted(false)
        return prevSnake
      }

      const newSnake = [newHead, ...prevSnake]

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((prev) => {
          const newScore = prev + 10
          if (newScore > highScore) {
            setHighScore(newScore)
            localStorage.setItem("snakeHighScore", newScore.toString())
          }
          return newScore
        })
        setFood(generateFood(newSnake))
        return newSnake
      }

      // Remove tail if no food eaten
      newSnake.pop()
      return newSnake
    })
  }, [gameOver, food, generateFood, highScore])

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted && !gameOver && e.key.startsWith("Arrow")) {
        resetGame()
        return
      }

      if (gameOver && (e.key === "r" || e.key === "R")) {
        resetGame()
        return
      }

      const newDirection: Direction | null =
        e.key === "ArrowUp" && directionRef.current !== "DOWN"
          ? "UP"
          : e.key === "ArrowDown" && directionRef.current !== "UP"
            ? "DOWN"
            : e.key === "ArrowLeft" && directionRef.current !== "RIGHT"
              ? "LEFT"
              : e.key === "ArrowRight" && directionRef.current !== "LEFT"
                ? "RIGHT"
                : null

      if (newDirection) {
        e.preventDefault()
        directionRef.current = newDirection
        setDirection(newDirection)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [gameStarted, gameOver, resetGame])

  // Game loop
  useEffect(() => {
    if (gameStarted && !gameOver) {
      gameLoopRef.current = setInterval(moveSnake, GAME_SPEED)
    } else if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current)
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current)
      }
    }
  }, [gameStarted, gameOver, moveSnake])

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="paper-texture fixed inset-0 pointer-events-none" />
      <RetroNav />

      <main className="flex-1 pt-28 pb-16 grass-bg">
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-secondary text-[10px] tracking-wider hover:pixel-text-brown transition-all mb-8"
            >
              <ArrowLeft size={16} /> BACK_TO_HOME
            </Link>

            <div className="space-y-4 mb-8">
              <p className="text-primary text-base tracking-widest">~ Snake Game ~</p>
              <h1 className="font-[family-name:var(--font-pixel)] text-lg md:text-xl text-primary pixel-text-green">
                ASCII Snake
              </h1>
            </div>

            {/* Game Container */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border-4 border-primary p-6 shadow-[4px_4px_0_oklch(0.45_0.12_145)]">
                {/* Score Display */}
                <div className="flex justify-between items-center mb-4 pb-4 border-b-2 border-border">
                  <div className="font-[family-name:var(--font-pixel)] text-[10px] text-foreground">
                    SCORE: {score}
                  </div>
                  <div className="font-[family-name:var(--font-pixel)] text-[10px] text-accent">
                    HIGH SCORE: {highScore}
                  </div>
                </div>

                {/* Game Board */}
                <div
                  className="relative mx-auto bg-muted border-2 border-border"
                  style={{
                    width: GRID_SIZE * CELL_SIZE,
                    height: GRID_SIZE * CELL_SIZE,
                  }}
                >
                  {/* Snake */}
                  {snake.map((segment, index) => (
                    <div
                      key={index}
                      className={`absolute ${index === 0 ? "bg-primary" : "bg-primary/80"}`}
                      style={{
                        left: segment.x * CELL_SIZE,
                        top: segment.y * CELL_SIZE,
                        width: CELL_SIZE - 2,
                        height: CELL_SIZE - 2,
                      }}
                    />
                  ))}

                  {/* Food */}
                  <div
                    className="absolute bg-destructive"
                    style={{
                      left: food.x * CELL_SIZE,
                      top: food.y * CELL_SIZE,
                      width: CELL_SIZE - 2,
                      height: CELL_SIZE - 2,
                    }}
                  />

                  {/* Game Over Overlay */}
                  {gameOver && (
                    <div className="absolute inset-0 bg-background/90 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="font-[family-name:var(--font-pixel)] text-sm text-destructive">
                          GAME OVER
                        </div>
                        <div className="font-[family-name:var(--font-pixel)] text-[10px] text-foreground">
                          Final Score: {score}
                        </div>
                        <div className="text-muted-foreground text-sm">Press R to restart</div>
                      </div>
                    </div>
                  )}

                  {/* Start Overlay */}
                  {!gameStarted && !gameOver && (
                    <div className="absolute inset-0 bg-background/90 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="font-[family-name:var(--font-pixel)] text-sm text-primary">
                          SNAKE GAME
                        </div>
                        <div className="text-muted-foreground text-sm">Press any ARROW key to start</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Instructions */}
                <div className="mt-6 pt-4 border-t-2 border-border space-y-2">
                  <div className="font-[family-name:var(--font-pixel)] text-[8px] text-muted-foreground">
                    CONTROLS:
                  </div>
                  <div className="text-sm text-foreground space-y-1">
                    <div>↑ ↓ ← → : Move snake</div>
                    <div>R : Restart game</div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-4">
                    Eat the red squares to grow. Don't hit the walls or yourself!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <RetroFooter />
    </div>
  )
}
