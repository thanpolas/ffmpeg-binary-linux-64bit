/*
 * ffmpeg-binary-linux-64bit
 * Provides staticly compiled binaries for linux environments.
 * https://github.com/thanpolas/ffmpeg-binary-linux-64bit
 *
 * Copyright (c) 2014 Thanasis Polychronakis
 * Licensed under the MIT license.
 */

/**
 * @fileOverview ffmpeg-binary-linux-64bit bootstrap module.
 */

var path = require('path');

var ffmpegPath = path.join(__dirname, '/ffmpeg');

/**
 * Returns the full path to the "ffmpeg" binary.
 *
 * @return {string} The full path to the "ffmpeg" binary.
 */
var ffmpegBin = module.exports = function() {
  return path.join(ffmpegPath, 'ffmpeg');
};

/**
 * Returns the full path to the "ffprobe" binary.
 *
 * @return {string} The full path to the "ffprobe" binary.
 */
ffmpegBin.ffprobe = function() {
  return path.join(ffmpegPath, 'ffprobe');
};
