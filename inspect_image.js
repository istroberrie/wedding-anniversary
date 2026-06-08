const sharp = require('sharp');

Promise.all([
  sharp('felix and edna (2).jfif').metadata(),
  sharp('felix and edna (2)-cropped.jfif').metadata(),
  sharp('felix and edna (2)-clean.jfif').metadata(),
])
  .then(([orig, cropped, clean]) => {
    console.log(JSON.stringify({ orig, cropped, clean }, null, 2));
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
