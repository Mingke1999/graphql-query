let games = [
  {id: '1', title: 'Zelda: Tears of the Kingdom', platform: ['Switch']},
  {id: '2', title: 'Final Fantasy VII Remake', platform: ['PS5', 'Xbox']},
  {id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC']},
  {id: '4', title: 'Mario Kart 8 Deluxe', platform: ['Switch']},
  {id: '5', title: 'Pokemon Scarlet', platform: ['Switch']},
];

let authors = [
  {id: '1', name: 'Mario', verified: true},
  {id: '2', name: 'Yoshi', verified: false},
  {id: '3', name: 'Peach', verified: true},
];

let reviews = [
  {id: '1', rating: 9, content: 'An incredible remake that captures the essence of the original while adding modern elements.', author_id: '1', game_id: '2'},
  {id: '2', rating: 10, content: 'A breathtaking adventure that surpasses all expectations.', author_id: '2', game_id: '1'},
  {id: '3', rating: 7, content: 'A vast, immersive world with challenging gameplay.', author_id: '3', game_id: '3'},
  {id: '4', rating: 5, content: 'Fun with friends, but can get repetitive quickly.', author_id: '2', game_id: '4'},
  {id: '5', rating: 8, content: 'A solid addition to the Pokemon series with a few innovative twists.', author_id: '2', game_id: '5'},
  {id: '6', rating: 7, content: 'Enjoyable but doesn’t quite reach the heights of the original.', author_id: '1', game_id: '2'},
  {id: '7', rating: 10, content: 'An epic adventure that is a must-play for Switch owners.', author_id: '3', game_id: '1'},
];

  
  export default { games, authors, reviews }