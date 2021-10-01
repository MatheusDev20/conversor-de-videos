import ffmpeg from 'ffmpeg';

export default class FFmpeg {
  constructor(
    video_path
) {
  this.video_path = video_path
}
getInstance() {
  return new ffmpeg(this.video_path)
}
}
