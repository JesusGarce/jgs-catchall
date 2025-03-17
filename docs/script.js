function filterContent() {
    let searchValue = document.getElementById("searchInput").value.toLowerCase();
    let categoryValue = document.getElementById("categoryFilter").value;

    document.querySelectorAll('.sidebar-nav li a').forEach(link => {
      let text = link.innerText.toLowerCase();
      let href = link.getAttribute('href');

      let matchesSearch = searchValue === "" || text.includes(searchValue);
      let matchesCategory = categoryValue === "" || href.includes(categoryValue);

      link.style.display = matchesSearch && matchesCategory ? "block" : "none";
    });
  }