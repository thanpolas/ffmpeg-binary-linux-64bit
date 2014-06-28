# ffmpeg-binary-linux-64bit

> Provides staticly compiled binaries for linux environments.

## Install

Install the module using NPM:

```
npm install ffmpeg-binary-linux-64bit --save
```

## Overview

Usage:

```js
var ffmpegBin = require('ffmpeg-binary-linux-64bit');


console.log(ffmpegBin());
// prints the full path to the "ffmpeg" binary


console.log(ffmpegBin.ffprobe());
// prints the full path to the "ffmprobe" binary
```

## Credits

The build was provided by John Vansickle and fetched using the url: `http://bensbit.co.uk/ffmpeg-2.1.3-64bit-static.tar.bz2`. The included `readme.txt` follows:


    ______ ______                                  __            _  __     __
   / ____// ____/____ ___   ____   ___   ____ _   / /_   __  __ (_)/ /____/ /
  / /_   / /_   / __ `__ \ / __ \ / _ \ / __ `/  / __ \ / / / // // // __  / 
 / __/  / __/  / / / / / // /_/ //  __// /_/ /  / /_/ // /_/ // // // /_/ /  
/_/    /_/    /_/ /_/ /_// .___/ \___/ \__, /  /_.___/ \__,_//_//_/ \__,_/   
                        /_/           /____/                                 


                build: ffmpeg-2.1.3-64bit-static.tar.bz2
              version: 2.1.3

 
                  gcc: 4.8.2
                 yasm: 1.2.0

               libvpx: v1.3.0-772-geb4cb43
              libx264: 0.142.14 956c8d8
              libxvid: 2:1.3.2-9
             libspeex: 1.2~rc1.1-1
            libvorbis: 1.3.2-1.3
            libtheora: 1.1.1+dfsg.1-3.1
           libmp3lame: 3.99.5+repack1-3 
          libfreetype: 2.5.2-1
          libopenjpeg: 1.3+dfsg-4.7+b1
         libvo-aacenc: 0.1.3-1
       libvo-amrwbenc: 0.1.3-1
    libopencore-amrnb: 0.1.3-2
    libopencore-amrwb: 0.1.3-2

Note: ffmpeg now uses libx264's internal presets with the -preset flag.
      Look at `ffmpeg -h encoder=libx264 | less` for a complete list of libx264 options.


      This build should be stable but if you do run into problems *DO NOT* file a bug report against           
      it! You should first check out the source from git://source.ffmpeg.org/ffmpeg.git, build it and           
      see if the problem persists. If so, then and only then should you file a bug report using the
      version you compiled.

      The source code for FFmpeg and all libs can be downloaded here.
      http://dl.dropbox.com/u/24633983/static-sources.7z

      Donate a few bucks via paypal if you've found this build helpful. 
      Donation link: http://goo.gl/1Ol8N

      Questions? Comments?
      email: john.vansickle@gmail.com
        irc: irc://irc.freenode.net #ffmpeg #libav nickname: relaxed
  build url:  http://johnvansickle.com/ffmpeg


## Release History

- **v0.0.1**, *28-Jun-2014*
    - Big Bang

## License

Copyright (c) 2014 Thanasis Polychronakis. Licensed under the MIT license.
