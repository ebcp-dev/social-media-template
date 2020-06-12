const profileModal = document.getElementById('profile-modal');
const closeProfileModal = document.getElementById('close-profile-modal');

function showModal() {
  if (!profileModal.classList.contains('is-active')) {
    profileModal.classList.add('is-active');
  }
}

window.onclick = function(event) {
  if (event.target === profileModal || event.target === closeProfileModal) {
    profileModal.classList.remove('is-active');
  }
};
