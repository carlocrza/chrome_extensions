let url = window.location.href;
let i = url.indexOf("v=");

if (i == -1 && url !== "https://www.youtube.com/") {
	let body = `
	<style>
		body {
			font-family: Arial;
			padding: 10px;
		}
		button {
			border: none;
			padding: 7px;
			text-decoration: none;
			color: white;
			background-color: #2B65EC;
			outline: none;
		}
		button:active {
			background-color: cornflowerblue;
		}
		input {
			padding: 6px;
			margin: 2px;
			outline: none;
		}
	</style>
	<span id="no_video_found">
	<h3>No video found.</h3>

	<p>Requested url: <code>${url}</code></p>

	<p>Retry with a valid URL of a youtube video or enter the desired video ID below:</p>

	<input type="text" id="youtubeID" value=""><button onclick="reloadPageWithID()">Submit</button>
	</span>
	<script>
	function reloadPageWithID() {
		let id = document.getElementById("youtubeID").value;
		if (id.indexOf("v=") != -1) {
			id = id.substr(id.indexOf("v=") + 2, 11);
		}
		window.location.href = "http://youtube.com/watch?v=" + id;
	}
	</script>
	`;
	reload(body);
} else if (i > -1) {
	let youtube_id = url.substr(i + 2, 11);
	let body = `<iframe width="728" height="410" src="https://www.youtube.com/embed/${youtube_id}?&autoplay=1" frameborder="0" allowfullscreen=""></iframe>`;
	reload(body);
}

function reload(body) {
	let newContent =
	`
	<html>
		<head>
			<title>${document.title}</title>
		</head>
		<body>
			${body}
		</body>

	</html>
	`

	document.open();
	document.write(newContent);
	document.close();
}