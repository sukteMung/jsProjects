import { useState } from 'react'
import Board from "./components/Board.tsx"

function App() {

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#39ff14" }}>Tic Tac Toe</h1>
      <Board />
    </div>
  )
}

export default App
