import FFmpeg from '../../ffmpeg';

class MP4Converter {
  constructor(video_path) {
    this.path = video_path
  }
    async convert() {
      let process = new FFmpeg(this.path).getInstance()
      return process
    }
  
}


export default MP4Converter