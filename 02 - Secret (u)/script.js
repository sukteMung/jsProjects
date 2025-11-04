
const memory_box = document.querySelector('.memory_container');
const in_game_box = document.querySelector('.in_game_container');
const quotes_box = document.querySelector('.quotes_container'); 
const date_box = document.querySelector('.date_container');

const main_container = document.querySelector('.box_container');

const memories_menu = document.querySelector('.memories_menu');
const in_games_menu = document.querySelector('.in_games_menu');
const quotes_menu = document.querySelector('.quotes_menu');
const dates_menu = document.querySelector('.dates_menu');

const add_memory_btn = document.getElementById('add_memory_btn');
const add_in_game_btn = document.getElementById('add_in_game_btn');
const add_quote_btn = document.getElementById('add_quote_btn');
const add_date_btn = document.getElementById('add_date_btn');

const memories_add_btn = document.getElementById('memories_add_btn');
const in_games_add_btn = document.getElementById('in_games_add_btn');
const quotes_add_btn = document.getElementById('quotes_add_btn');
const dates_add_btn = document.getElementById('dates_add_btn');

const memories_url_input = document.getElementById('memories_url_input');
const in_games_url_input = document.getElementById('in_games_url_input');
const quotes_url_input = document.getElementById('quotes_url_input');
const dates_url_input = document.getElementById('dates_url_input');

const memories_gallery = document.getElementById('memories_gallery');


let memories = JSON.parse(localStorage.getItem('memories')) || [];
let in_games = JSON.parse(localStorage.getItem('in_games')) || [];
let quotes = JSON.parse(localStorage.getItem('quotes')) || [];
let dates = JSON.parse(localStorage.getItem('dates')) || [];


let cur_menu = 0;

function hide_main() {
    main_container.style.display = 'none';
    memory_box.style.display = 'none';
    in_game_box.style.display = 'none';
    quotes_box.style.display = 'none';
    date_box.style.display = 'none';
}

function show_main() {
    main_container.style.display = 'flex';
    memory_box.style.display = 'block';
    in_game_box.style.display = 'block';
    quotes_box.style.display = 'block';
    date_box.style.display = 'block';
    if (memories_menu) memories_menu.style.display = 'none';
    if (in_games_menu) in_games_menu.style.display = 'none';
    if (quotes_menu) quotes_menu.style.display = 'none';
    if (dates_menu) dates_menu.style.display = 'none';
}

function update_memories_gallery() {
    if (!memories_gallery) return;
    
    // Clear existing images
    memories_gallery.innerHTML = '';
    
    // Get memories from localStorage
    const gallery = JSON.parse(localStorage.getItem('memories')) || [];
    
    // Add each image to the gallery
    gallery.forEach(picture => {
        const img = document.createElement('img');
        img.src = picture.url;
        img.classList.add('image'); // Add the image class for styling
        memories_gallery.appendChild(img);
    });
}

add_memory_btn.addEventListener('click', () => {
    hide_main();
    if (memories_menu) memories_menu.style.display = 'block';
    update_memories_gallery();
});
add_in_game_btn.addEventListener('click', () => {
    hide_main();
    if (in_games_menu) in_games_menu.style.display = 'block';
});
add_quote_btn.addEventListener('click', () => {
    hide_main();
    if (quotes_menu) quotes_menu.style.display = 'block';
});
add_date_btn.addEventListener('click', () => {
    hide_main();
    if (dates_menu) dates_menu.style.display = 'block';
});

// Return to main for all menus
document.querySelectorAll('.return_main_btn').forEach(btn => {
    btn.addEventListener('click', show_main);
});


// Add new memory
if (memories_add_btn) {
    memories_add_btn.addEventListener('click', () => {
        const url = memories_url_input.value.trim();
        if (url) {
            const id = Date.now();
            memories.push({ id, url });
            localStorage.setItem('memories', JSON.stringify(memories));
            memories_url_input.value = '';
            alert('Memory added!');

            update_memories_gallery(); // Update the entire gallery
        }
    });
}

// Add new in-game
if (in_games_add_btn) {
    in_games_add_btn.addEventListener('click', () => {
        const url = in_games_url_input.value.trim();
        if (url) {
            const id = Date.now();
            in_games.push({ id, url });
            localStorage.setItem('in_games', JSON.stringify(in_games));
            in_games_url_input.value = '';
            alert('In-Game added!');
        }
    });
}

// Add new quote
if (quotes_add_btn) {
    quotes_add_btn.addEventListener('click', () => {
        const url = quotes_url_input.value.trim();
        if (url) {
            const id = Date.now();
            quotes.push({ id, url });
            localStorage.setItem('quotes', JSON.stringify(quotes));
            quotes_url_input.value = '';
            alert('Quote added!');
        }
    });
}

// Add new date
if (dates_add_btn) {
    dates_add_btn.addEventListener('click', () => {
        const url = dates_url_input.value.trim();
        if (url) {
            const id = Date.now();
            dates.push({ id, url });
            localStorage.setItem('dates', JSON.stringify(dates));
            dates_url_input.value = '';
            alert('Date added!');
        }
    });
}