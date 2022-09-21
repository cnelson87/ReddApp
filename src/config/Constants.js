
const Constants = {

	isAndroid: /android/i.test(navigator.userAgent),
	isIOS: /iPad|iPhone|iPod/i.test(navigator.userAgent),

	// keyboard key codes
	keys: {
		enter: 13,
		escape: 27,
		space: 32,
		end: 35,
		home: 36,
		left: 37,
		up: 38,
		right: 39,
		down: 40
	},

	// reddit settings
	apiBaseUrl: 'https://www.reddit.com',
	postsLimit: 50,
	defaultSubreddit: 'popular', // 'all', 'popular'
	defaultSubredditPostsSort: 'hot',
	defaultUserPostsSort: 'new',
	subredditPostsSorting: ['hot', 'new', 'top', 'rising', 'controversial'],
	userPostsSorting: ['new', 'hot', 'top'],

	// footnote
	footnoteText: 'ReddApp by cnelson87@gmail.com',

};

export default Constants;
