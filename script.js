// Selecionar todos os cartões
const flashcards = document.querySelectorAll('.flashcard');

flashcards.forEach(card => {
  card.addEventListener('click', () => {
    // Alternar classe para mostrar a resposta
    card.classList.toggle('revealed');
  });
});
