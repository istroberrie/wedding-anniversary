const sharp = require('sharp');

sharp('felix and edna (2).jfif')
  .trim({ threshold: 25 })
  .toFile('felix and edna (2)-clean.jfif')
  .then(() => console.log('clean image created'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
