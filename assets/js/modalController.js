function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

window.addEventListener('click', function (e) {
    const modals = document.querySelectorAll('[id^="modal"]');
    modals.forEach(modal => {
        if (!modal.classList.contains('hidden') && e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});