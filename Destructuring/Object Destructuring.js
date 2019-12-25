const settings = {
	notifications: {
		follow: true,
		alerts: true,
		unfollow: false
	},
	
	color: {
		theme: "dark"
	}
};

/*
if (settings.notifications.follow) {
	// send email
}
*/

const { notifications: { follow = false } = {} } = settings;

console.log(follow);