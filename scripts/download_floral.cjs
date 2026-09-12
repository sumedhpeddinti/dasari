const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, '..', 'src', 'assets', 'floral');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const titles = [
  'File:Arabesque tailpiece from Serlio 1551.svg',
  'File:Arabesque headpiece from Serlio 1551.svg',
  'File:Ornamental Border with Leaf Motifs, Pune.svg',
  'File:Black and White Silhouette with Floral Border Motif.svg',
  'File:Chappell & Co fleuron.svg',
  'File:Art Nouveau fleuron.svg',
  'File:The Wish fleuron.svg',
  'File:Bullokar\'s A Short Introduction - fleuron with flowers.svg',
  'File:Abstract floral ornament, 1913.svg',
  'File:Floral border 01 corner by Paul Bürck.svg',
  'File:Floral border 02 element by Paul Bürck.svg',
  'File:Floral border 03 corner by Paul Bürck.svg'
];

const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles.join('|'))}&prop=imageinfo&iiprop=url&format=json`;

https.get(apiUrl, { headers: { 'User-Agent': 'DasariHeritageBot/1.0 (info@dasarifusiongrill.com)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    const pages = json.query.pages;
    for (const pageId in pages) {
      const page = pages[pageId];
      if (!page.imageinfo || !page.imageinfo[0]) continue;
      const fileUrl = page.imageinfo[0].url;
      const cleanName = page.title.replace(/^File:/, '').replace(/[^a-zA-Z0-9._-]/g, '_').toLowerCase();
      const dest = path.join(dir, cleanName);
      
      const cmd = `curl.exe -s -L -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" "${fileUrl}" -o "${dest}"`;
      try {
        execSync(cmd);
        const sz = fs.statSync(dest).size;
        console.log(`${cleanName}: ${sz} bytes (from ${page.title})`);
      } catch (e) {
        console.error(`Failed ${cleanName}:`, e.message);
      }
    }
  });
});
