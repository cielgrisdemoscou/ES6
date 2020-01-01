/*
function saveSettings({follow, alert, color = "blue"}) {
	console.log(color);
}

saveSettings({
	follow: true,
	alert: true,
	mkt: true
});
*/

function saveSettings({ notifications, color: { theme } }) {
	console.log(color);
}

saveSettings({
	notifications :{
		follow: true,
		alert: true,
		mkt: true
	}
	color: {
		theme:"blue";
	}	
});