module.exports = {
  "gifsicle": { "optimizationLevel": 2, "interlaced": true },
  "mozjpeg": { "progressive": true, "quality": 80 },
  "pngquant": { "quality": 85 },
  "svgo": {
    "plugins": [
      { "removeViewBox": false }
    ]
  }
}