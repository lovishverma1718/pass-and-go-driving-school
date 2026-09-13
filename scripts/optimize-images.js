import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = process.cwd();
const outputDir = path.join(inputDir, 'public', 'images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imagesToProcess = [
  {
    input: '1 (1).jpg',
    baseName: 'hero-lesson',
    aliases: ['1 (1).jpg', '1.jpg'],
    maxWidth: 1920,
    quality: 84
  },
  {
    input: '2.png',
    baseName: 'road-test-assessment',
    aliases: ['2(4).png', '2.png'],
    maxWidth: 1600,
    quality: 84
  },
  {
    input: '3.png',
    baseName: 'instructor-vehicle',
    aliases: ['3(6).png', '3.png'],
    maxWidth: 1600,
    quality: 84
  },
  {
    input: '4.png',
    baseName: 'urban-street',
    aliases: ['4(8).png', '4.png'],
    maxWidth: 1600,
    quality: 84
  },
  {
    input: '5.jpg',
    baseName: 'sunset-highway',
    aliases: ['5.jpg'],
    maxWidth: 1920,
    quality: 84
  },
  {
    input: '6.jpg',
    baseName: 'steering-wheel',
    aliases: ['6.jpg'],
    maxWidth: 1600,
    quality: 84
  },
  {
    input: '7.jpg',
    baseName: 'instruction-guidance',
    aliases: ['7.jpg'],
    maxWidth: 1600,
    quality: 84
  },
  {
    input: 'logo.png',
    baseName: 'logo',
    aliases: ['logo.png'],
    maxWidth: 800,
    quality: 90,
    isPng: true
  }
];

async function run() {
  console.log('Optimizing images...');
  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const item of imagesToProcess) {
    const inputPath = path.join(inputDir, item.input);
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${item.input}`);
      continue;
    }

    const origStats = fs.statSync(inputPath);
    totalOriginal += origStats.size;

    const pipeline = sharp(inputPath).rotate(); // auto-rotate based on EXIF

    const metadata = await pipeline.metadata();
    const targetWidth = Math.min(metadata.width || item.maxWidth, item.maxWidth);

    // Create optimized WebP
    const webpOutput = path.join(outputDir, `${item.baseName}.webp`);
    await sharp(inputPath)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: item.quality, effort: 6 })
      .toFile(webpOutput);

    // Create optimized JPG/PNG for compatibility
    const compatOutput = path.join(
      outputDir,
      item.isPng ? `${item.baseName}.png` : `${item.baseName}.jpg`
    );
    if (item.isPng) {
      await sharp(inputPath)
        .resize({ width: targetWidth, withoutEnlargement: true })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(compatOutput);
    } else {
      await sharp(inputPath)
        .resize({ width: targetWidth, withoutEnlargement: true })
        .jpeg({ quality: item.quality, mozjpeg: true })
        .toFile(compatOutput);
    }

    // Copy aliases for direct references matching prompts
    for (const alias of item.aliases) {
      const aliasTarget = path.join(outputDir, alias);
      fs.copyFileSync(compatOutput, aliasTarget);
    }

    const newStats = fs.statSync(webpOutput);
    totalOptimized += newStats.size;

    console.log(
      `✓ ${item.input} (${(origStats.size / 1024 / 1024).toFixed(2)} MB) -> WebP (${(
        newStats.size / 1024
      ).toFixed(1)} KB) [-${Math.round(
        (1 - newStats.size / origStats.size) * 100
      )}%]`
    );
  }

  console.log('-------------------------------------------');
  console.log(`Original total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized total (WebP): ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(
    `Total bandwidth saved: ${Math.round((1 - totalOptimized / totalOriginal) * 100)}%`
  );
}

run().catch(console.error);
