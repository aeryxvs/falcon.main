function openModal(img) {
    const modal = document.getElementById("imageModal");
    const expandedImg = document.getElementById("expandedImg");
    expandedImg.src = img.src;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

document.querySelectorAll('.gallery-img').forEach(item => {
    item.addEventListener('click', function() {
        openModal(item);
    });
});