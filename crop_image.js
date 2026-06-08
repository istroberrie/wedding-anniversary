const sharp = require('sharp');

sharp('felix and edna (2).jfif')
  .metadata()
  .then((meta) => {
    const cropWidth = Math.max(1, meta.width - 60);
    return sharp('felix and edna (2).jfif')
      .extract({ left: 0, top: 0, width: cropWidth, height: meta.height })
      .toFile('felix and edna (2)-cropped.jfif');
  })
  .then(() => console.log('cropped image created'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
