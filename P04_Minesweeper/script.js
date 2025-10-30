const restart_btn = document.getElementById('restart_btn');

const icon = document.getElementById('smiley');

restart_btn.addEventListener('click', () => {
    // make icon happy after restarting
    if (icon) icon.src = '/happy_face.png';

    // find the gameboard each time (don't rely on the top-level selector)
    const board = document.querySelector('.gameboard');
    if (!board) {
        console.error('No .gameboard element found');
        return;
    }

    // clear previous board
    board.innerHTML = '';

    // make 9x9 tiles
    for (let x = 1; x <= 9; x++) {
        for (let y = 1; y <= 9; y++) {
            const tileBtn = document.createElement('button');
            tileBtn.className = 'tile';
            tileBtn.type = 'button';
            tileBtn.style.gridArea = `${x} / ${y} / span 1 / span 1`;
            board.appendChild(tileBtn);
        }
    }
});