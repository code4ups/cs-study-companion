import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');

// Simple ICO generator (creates ICO with embedded PNG)
async function generateIco() {
  try {
    // Generate 32x32 PNG for ICO (most common size)
    const png32Buffer = await sharp(readFileSync(join(publicDir, 'favicon.svg')))
      .resize(32, 32)
      .png()
      .toBuffer();

    // ICO file structure:
    // ICONDIR header (6 bytes)
    // ICONDIRENTRY (16 bytes)
    // PNG data

    const iconDir = Buffer.alloc(6);
    iconDir.writeUInt16LE(0, 0);      // Reserved (must be 0)
    iconDir.writeUInt16LE(1, 2);      // Type (1 = ICO)
    iconDir.writeUInt16LE(1, 4);      // Number of images

    const iconDirEntry = Buffer.alloc(16);
    iconDirEntry.writeUInt8(32, 0);           // Width (32px)
    iconDirEntry.writeUInt8(32, 1);           // Height (32px)
    iconDirEntry.writeUInt8(0, 2);            // Color palette
    iconDirEntry.writeUInt8(0, 3);            // Reserved
    iconDirEntry.writeUInt16LE(1, 4);         // Color planes
    iconDirEntry.writeUInt16LE(32, 6);        // Bits per pixel
    iconDirEntry.writeUInt32LE(png32Buffer.length, 8);  // Size of image data
    iconDirEntry.writeUInt32LE(22, 12);       // Offset to image data (6+16)

    const icoBuffer = Buffer.concat([iconDir, iconDirEntry, png32Buffer]);
    writeFileSync(join(publicDir, 'favicon.ico'), icoBuffer);

    console.log('✓ Created favicon.ico (32x32 embedded PNG)');
  } catch (error) {
    console.error('Error generating ICO:', error);
    process.exit(1);
  }
}

generateIco();
