'use strict';

var App = require('./App');

var _require = require('./../package.json'),
    version = _require.version;

module.exports = global.Clarifai = {
  version: version,
  App: App,
  GENERAL_MODEL: 'aaa03c23b3724a16a56b629203edc62c',
  FOOD_MODEL: 'bd367be194cf45149e75f01d59f77ba7',
  TRAVEL_MODEL: 'eee28c313d69466f836ab83287a54ed9',
  NSFW_MODEL: 'e9576d86d2004ed1a38ba0cf39ecb4b1',
  WEDDINGS_MODEL: 'c386b7a870114f4a87477c0824499348',
  WEDDING_MODEL: 'c386b7a870114f4a87477c0824499348',
  COLOR_MODEL: 'eeed0b6733a644cea07cf4c60f87ebb7',
  CLUSTER_MODEL: 'cccbe437d6e54e2bb911c6aa292fb072',
  FACE_DETECT_MODEL: 'a403429f2ddf4b49b307e318f00e528b',
  FOCUS_MODEL: 'c2cf7cecd8a6427da375b9f35fcd2381',
  LOGO_MODEL: 'c443119bf2ed4da98487520d01a0b1e3',
  DEMOGRAPHICS_MODEL: 'c0c0ac362b03416da06ab3fa36fb58e3',
  GENERAL_EMBED_MODEL: 'bbb5f41425b8468d9b7a554ff10f8581',
  FACE_EMBED_MODEL: 'd02b4508df58432fbb84e800597b8959'
};