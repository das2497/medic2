<!DOCTYPE html>
<html>
<head>
	<title>Accessing webcam using JavaScript</title>
</head>
<body>
	<video id="video" width="640" height="480" autoplay></video>
	<script>
		navigator.mediaDevices.getUserMedia({ video: true })
		.then(function(stream) {
			var video = document.querySelector('#video');
			video.srcObject = stream;
			video.play();
		})
		.catch(function(error) {
			console.log('Error accessing webcam:', error);
		});
	</script>
</body>
</html>
