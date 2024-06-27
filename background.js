chrome.action.onClicked.addListener(function(tab) {
	if (new URL(tab.url).hostname.indexOf('github') !== -1) {
		var re = /\[[A-Z]*-\d*\]/;
  		var found = tab.title.match(re)
  		if (found.length > 0) {
  			chrome.tabs.create({
  				url: 'https://buzzvil.atlassian.net/browse/' + found[0].slice(1, -1)
  			});
  		}
  	}
});
