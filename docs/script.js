function filterContent() {
    let searchValue = document.getElementById("searchInput").value.toLowerCase();
    let categoryValue = document.getElementById("categoryFilter").value;

    let links = document.querySelectorAll('.sidebar-nav li a');

    links.forEach(link => {
        let text = link.innerText.toLowerCase();
        let href = link.getAttribute('href');

        let matchesSearch = searchValue === "" || text.includes(searchValue);
        let matchesCategory = categoryValue === "" || href.includes(categoryValue);

        console.log('link', link, 'text', text, 'href', href, 'matchesSearch', matchesSearch, 'matchesCategory', matchesCategory);

        link.style.display = matchesSearch && matchesCategory ? "block" : "none";
    });
}

// Espera a que docsify termine de renderizar antes de aplicar el filtrado
window.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("DOMContentLoaded", filterContent);
});

// Vuelve a aplicar el filtrado cuando se navegue entre páginas
window.addEventListener("hashchange", filterContent);
