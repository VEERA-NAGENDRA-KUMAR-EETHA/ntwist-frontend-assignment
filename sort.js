document.addEventListener('DOMContentLoaded', () => {
    const sortButton = document.getElementById('sortButton');
    const nameList = document.getElementById('nameList');

    sortButton.addEventListener('click', () => {
        const names = Array.from(nameList.children);
        names.sort((a, b) => a.textContent.localeCompare(b.textContent));
        nameList.innerHTML = ''; // Clear the list
        names.forEach(name => nameList.appendChild(name)); // Re-populate
    });
}); 