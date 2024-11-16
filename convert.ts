import sharp from "sharp";
import fs from "fs";
import path from "path";

// Define input and output directories
const inputDir = path.join(__dirname, "gifs");
const outputDirPng = path.join(__dirname, "images");

// Define the width and height for the output PNG images
// const WIDTH = 400;
// const HEIGHT = 400;

// Ensure the output directory exists
if (!fs.existsSync(outputDirPng)) {
  fs.mkdirSync(outputDirPng, { recursive: true });
}

// Read all files from the input directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Error reading input directory:", err);
    return;
  }

  // Filter out non-GIF files
  const gifFiles = files.filter(
    (file) => path.extname(file).toLowerCase() === ".gif"
  );

  if (gifFiles.length === 0) {
    console.log("No GIF files found in the input directory.");
    return;
  }

  console.log(
    `Found ${gifFiles.length} GIF files. Starting conversion to PNG...`
  );

  // Process each GIF file
  gifFiles.forEach((file, index) => {
    const inputPath = path.join(inputDir, file);
    const fileName = path.parse(file).name;
    const outputPath = path.join(outputDirPng, `${fileName}.png`);

    sharp(inputPath)
      .png() // or webp, tiff, avif, jpeg, etc.
    //   .resize(WIDTH, HEIGHT)
      .toFile(outputPath)
      .then(() => {
        console.log(
          `[${index + 1}/${
            gifFiles.length
          }] Converted: ${file} → ${fileName}.png`
        );
      })
      .catch((err) => {
        console.error(`Error converting ${file}:`, err);
      });
  });
});
