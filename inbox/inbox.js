const replyModal = document.getElementById('reply-modal');
const closeReplyModal = document.getElementById('close-reply-modal');
const cancelReplyModal = document.getElementById('cancel-reply-modal');

function showModal() {
  if (!replyModal.classList.contains('is-active')) {
    replyModal.classList.add('is-active');
  }
}

window.onclick = function(event) {
  if (
    event.target === replyModal ||
    event.target === closeReplyModal ||
    event.target === cancelReplyModal
  ) {
    replyModal.classList.remove('is-active');
  }
};
