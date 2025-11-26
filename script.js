document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const closeModal = document.getElementById('closeModal');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get data from the clicked item
            const imgSrc = item.querySelector('img').src;
            const title = item.querySelector('h3').textContent;
            const date = item.querySelector('p').textContent;

            // Populate and show the modal
            modalImage.src = imgSrc;
            modalTitle.textContent = title;
            modalDate.textContent = date;
            modal.style.display = 'flex';
        });
    });

    // Function to hide the modal
    const hideModal = () => {
        modal.style.display = 'none';
    };

    // Close modal events
    closeModal.addEventListener('click', hideModal);
    modal.addEventListener('click', (e) => {
        // If the click is on the overlay itself (not the content), close it
        if (e.target === modal) {
            hideModal();
        }
    });
});
