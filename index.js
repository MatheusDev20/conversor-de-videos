
import FFmpeg from './ffmpeg';
try {
	var process = new FFmpeg('./videos/video.mp4').getInstance()
	process.then(function (video) {
		// Video metadata
		console.log(video.metadata);
		// // FFmpeg configuration
		// console.log(video.info_configuration);
	}, function (err) {
		console.log('Error: ' + err);
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}