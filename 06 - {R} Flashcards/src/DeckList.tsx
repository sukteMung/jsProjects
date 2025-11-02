import { useState } from 'react'
import Deck, { type DeckProps } from './Deck'

function DeckList() {
    // Sample decks
    const decks = [
        {
            id: 0,
            name: 'Deck 1',
            description: 'Description 1',
            cards: [{ question: 'Q1', answer: 'A1' }, { question: 'Q2', answer: 'A2' }]
        },
        {
            id: 1,
            name: 'Deck 2',
            description: 'Description 2',
            cards: [{ question: 'Q1', answer: 'A1' }]
        }
    ]

    // Track which deck is currently open; null = show all decks
    const [selectedDeck, setSelectedDeck] = useState<Omit<DeckProps, 'btn_text' | 'onSelect'> | null>(null)

    return (
        <>
            {selectedDeck ? (
                // Only render the selected deck
                <Deck
                    name={selectedDeck.name}
                    description={selectedDeck.description}
                    cards={selectedDeck.cards}
                    btn_text="Go Back"
                    onSelect={() => setSelectedDeck(null)} // Return to deck list
                />
            ) : (
                // Render deck list
                <div className="d-flex flex-wrap gap-3">
                    {decks.map(deck => (
                        <Deck
                            key={deck.id}
                            name={deck.name}
                            description={deck.description}
                            cards={deck.cards}
                            btn_text="Open Deck"
                            onSelect={() => setSelectedDeck(deck)}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default DeckList
