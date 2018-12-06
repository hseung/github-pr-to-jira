(function() {
  const titles = document.getElementsByClassName('gh-header-title');
  if (titles.length > 0) {
    const title = titles[0];
    title.innerHTML = title.innerHTML.replace(/\[([A-Z]*-\d*)\]/g, '<a href="https://buzzvil.atlassian.net/browse/$1" target="_blank" rel="noopener">[$1]</a>');
  }
})();
