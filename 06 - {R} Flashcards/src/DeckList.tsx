import Deck from './Deck'
function DeckList() {
    const decks = [
        {
            id: 0,
            name: 'Deck 1',
            description: 'Desc',
            cards: [{ question: 'Question', answer: 'Answer' }]
        },
        {
            id: 1,
            name: 'Deck 2',
            description: 'Desc',
            cards: [{ question: 'Question', answer: 'Answer' }]
        }
    ]

    return (
        <div className="d-flex flex-wrap gap-3">
            {decks.map((deck) => (
                <Deck key={deck.id} name={deck.name} description={deck.description} cards={deck.cards} />
            ))}
        </div>
    )
}

export default DeckList
