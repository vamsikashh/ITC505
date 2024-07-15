document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        const readMoreLink = article.querySelector('a');

        readMoreLink.addEventListener('click', function(e) {
            e.preventDefault();

            const content = article.querySelector('p');
            const expanded = article.classList.toggle('expanded');

            if (expanded) {
                readMoreLink.textContent = 'Read Less';
                content.style.display = 'block';
            } else {
                readMoreLink.textContent = 'Read More';
                content.style.display = 'none';
            }
        });
    });
});