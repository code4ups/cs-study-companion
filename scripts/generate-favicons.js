import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');

// Read SVG
const svgBuffer = readFileSync(join(publicDir, 'favicon.svg'));

// Generate PNG files at various sizes
async function generateFavicons() {
  try {
    // Generate apple-touch-icon.png (180x180)
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ Created apple-touch-icon.png (180x180)');

    // Generate android-chrome-192x192.png
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile(join(publicDir, 'android-chrome-192x192.png'));
    console.log('✓ Created android-chrome-192x192.png (192x192)');

    // Generate android-chrome-512x512.png
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(join(publicDir, 'android-chrome-512x512.png'));
    console.log('✓ Created android-chrome-512x512.png (512x512)');

    // Generate favicon-16x16.png
    await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toFile(join(publicDir, 'favicon-16x16.png'));
    console.log('✓ Created favicon-16x16.png (16x16)');

    // Generate favicon-32x32.png
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(join(publicDir, 'favicon-32x32.png'));
    console.log('✓ Created favicon-32x32.png (32x32)');

    // Generate favicon-48x48.png for ICO
    await sharp(svgBuffer)
      .resize(48, 48)
      .png()
      .toFile(join(publicDir, 'favicon-48x48.png'));
    console.log('✓ Created favicon-48x48.png (48x48)');

    console.log('\n✓ All favicons generated successfully!');
    console.log('\nNote: For favicon.ico, you can use an online converter like:');
    console.log('- https://favicon.io/favicon-converter/');
    console.log('- Upload the generated PNG files (16x16, 32x32, 48x48)');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
