document.querySelectorAll('.note-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const textarea = button.nextElementSibling;
    textarea.style.display =
      textarea.style.display === 'block' ? 'none' : 'block';
  });
});