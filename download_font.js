const fs = require('fs');
const https = require('https');
const { execSync } = require('child_process');

const url = 'https://get.fontspace.co/download/family/n9w47/35b8e18c68484f46825f85178693c3f6/weddingday-font.zip';
const zipPath = 'weddingday-font.zip';
const fontsDir = 'fonts';

function download(url, out) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(out);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, out).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error('HTTP ' + res.statusCode));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(out, () => reject(err));
    });
  });
}

(async () => {
  try {
    fs.mkdirSync(fontsDir, { recursive: true });
    await download(url, zipPath);
    console.log('DOWNLOADED', fs.statSync(zipPath).size);
    execSync("powershell -NoProfile -Command \"Expand-Archive -LiteralPath 'weddingday-font.zip' -DestinationPath 'fonts' -Force\"", { stdio: 'inherit' });
    console.log('EXTRACTED', fs.readdirSync(fontsDir));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
