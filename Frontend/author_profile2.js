const followBtn = document.querySelector('.follow-btn');
followBtn.addEventListener('click', () => {
  followBtn.textContent = followBtn.textContent === 'Follow' ? 'Following' : 'Follow';
});