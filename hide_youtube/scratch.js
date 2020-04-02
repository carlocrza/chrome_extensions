let url = window.location.href;
let i = url.indexOf("watch?v=");

// let body = `<h3>No video found</h3>`;

// if (i > -1) {
// 	let youtube_id = url.substr(i + 8, i + 8 + 11);
// 	body = `<iframe width="728" height="410" src="https://www.youtube.com/embed/${youtube_id}" frameborder="0" allowfullscreen=""></iframe>`;
// }
var body = "hi";
let newContent =
`
<html>
	<head>
		<title>wow</title>
	</head>
	<body>
		hi${body}there
	</body>

</html>
`

document.open();
document.write(newContent);
document.close();