interface DeckProps {
    name: string;
    description: string;
    cards: Card[];
}

type Card = {
    question: string;
    answer: string;
}
function Deck({ name, description, cards }: DeckProps) {
    return (
        <>
            <div className="card bg-primary" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                    <a href="#" className="btn btn-light">Go to deck</a>
                </div>
            </div>
        </>
    );
}

export default Deck;
