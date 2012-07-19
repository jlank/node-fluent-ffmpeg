var Ffmpeg = require('../index'),
  path = require('path'),
  fs = require('fs');

      var testFile = __dirname + '/assets/testConvertToStream.mp3';
      var outstream = fs.createWriteStream(testFile);
      new Ffmpeg({ source: this.testfileEscaped, nolog: true })
        .withAudioBitrate('128k')
        .withAudioCodec('libmp3lame')
        .withAudioChannels('2')
        .toFormat('mp3')
        .writeToStream(outstream, function(code, stderr) {
          console.log(outstream);
        });

