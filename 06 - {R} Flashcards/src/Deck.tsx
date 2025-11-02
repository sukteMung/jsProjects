import { useState, useEffect } from 'react'

export interface DeckProps {
    name: string
    description: string
    cards: Card[]
    btn_text: string
    onSelect: () => void
    initialStage?: 'deck' | 'cards' // new optional prop
}

type Card = {
    question: string
    answer: string
}

function Deck({ name, description, cards, btn_text, onSelect, initialStage }: DeckProps) {
    const [stage, setStage] = useState<'deck' | 'cards'>('deck')
    const [currentCard, setCurrentCard] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)

    // If parent wants to start Deck at 'deck' stage, set it once when component mounts
    useEffect(() => {
        if (initialStage) {
            setStage(initialStage)
        }
    }, [initialStage])

    function startDeck() {
        setStage('cards')
        setCurrentCard(0)
        setShowAnswer(false)
    }

    function nextCard() {
        if (currentCard < cards.length - 1) {
            setCurrentCard(currentCard + 1)
            setShowAnswer(false)
        } else {
            setStage('deck')
        }
    }

    function flipCard() {
        setShowAnswer(prev => !prev)
    }

    if (stage === 'deck') {
        return (
            <div className="card bg-primary" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-light me-2" onClick={startDeck}>
                        Start Deck
                    </button>
                    <button className="btn btn-light" onClick={onSelect}>
                        {btn_text}
                    </button>
                </div>
            </div>
        )
    } else {
        const card = cards[currentCard]
        return (
            <div className="card bg-primary" style={{ width: '18rem' }}>
                <div className="card-body">
                    <p className="card-text">{showAnswer ? card.answer : card.question}</p>
                    {!showAnswer ? (
                        <button className="btn btn-light me-2" onClick={flipCard}>
                            Show Answer
                        </button>
                    ) : (
                        <button className="btn btn-light me-2" onClick={nextCard}>
                            Next
                        </button>
                    )}
                    <button className="btn btn-light" onClick={onSelect}>
                        {btn_text}
                    </button>
                </div>
            </div>
        )
    }
}

export default Deck
