import React, { useState } from "react"
import Square from "./Square"
import "/src/styles/styles.css"

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(""))
  const [xIsNext, setXIsNext] = useState(true)
  const [winner, setWinner] = useState<string | null>(null)

  const handleClick = (index: number) => {
    if (squares[index] !== "" || winner) return

    const nextSquares = [...squares]
    nextSquares[index] = xIsNext ? "X" : "O"

    const winResult = calculateWinner(nextSquares)
    if (winResult) setWinner(winResult)
    else if (!nextSquares.includes("")) setWinner("draw")

    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "#39ff14" }}>
        {winner
          ? winner === "draw"
            ? "It's a draw!"
            : `Winner: ${winner}`
          : `Turn: ${xIsNext ? "X" : "O"}`}
      </h2>

      <div className="board">
        {squares.map((value, i) => (
          <Square key={i} value={value} onClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  )
}

// --- helper function ---
function calculateWinner(squares: string[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}
