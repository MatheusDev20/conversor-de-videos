import FFmpeg from '../../ffmpeg';

class MP4Converter {
  constructor(video_path) {
    this.path = video_path
  }
    async convert() {
      try {
        let process = new FFmpeg(this.path).getInstance()
        process.then((video) =>  {
          console.log(video.metadata)
          let metadata = video.metadata
          return metadata
          
        },(err) => {
          console.log('Error: ' + err);
        });
      } catch (e) {
        console.log(e.code);
        console.log(e.msg);
      }
    }
}

export default MP4Converter