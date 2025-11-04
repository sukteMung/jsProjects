import React from 'react'

interface SquareProps {
    value: string;
    onClick: () => void
}

function Square ( { value, onClick } : SquareProps ) {

    return (
        <button
        className="square"
        onClick={onClick}
        disabled={value !== ""}
        >
            {value}
        </button>
    )
}

export default Square;