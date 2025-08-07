function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownArrow = document.getElementById('dropdownArrow');
    
    dropdownMenu.classList.toggle('active');
    dropdownArrow.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const container = document.querySelector('.group-brands-container');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownArrow = document.getElementById('dropdownArrow');
    
    if (!container.contains(event.target)) {
        dropdownMenu.classList.remove('active');
        dropdownArrow.classList.remove('active');
    }
});
