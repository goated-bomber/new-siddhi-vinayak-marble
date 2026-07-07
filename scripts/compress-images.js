import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_DIR = path.join(__dirname, "..", "public", "images");
const ROOT_DIR = path.join(__dirname, "..");

const IMAGE_EXTENSIONS = [".webp", ".webp", ".webp"];
const CODE_EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (!IMAGE_EXTENSIONS.includes(ext)) return;

  const output = filePath.replace(ext, ".webp");

  try {
    await sharp(filePath)
      .webp({
        quality: 82,
        effort: 6
      })
      .toFile(output);

    fs.unlinkSync(filePath);

    console.log("✓", output);
  } catch (err) {
    console.log("Failed:", filePath);
  }
}

async function walkImages(folder) {
  const files = fs.readdirSync(folder);

  for (const file of files) {
    const full = path.join(folder, file);

    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      await walkImages(full);
    } else {
      await convertImage(full);
    }
  }
}

function updateCode(file) {
  let code = fs.readFileSync(file, "utf8");

  const original = code;

  code = code

    .replace(/\.webp"/g, '.webp"')
    .replace(/\.webp"/g, '.webp"')
    .replace(/\.webp"/g, '.webp"')

    .replace(/\.webp'/g, ".webp'")
    .replace(/\.webp'/g, ".webp'")
    .replace(/\.webp'/g, ".webp'");

  if (code !== original) {
    fs.writeFileSync(file, code);

    console.log("Updated:", file);
  }
}

function walkProject(folder) {
  const files = fs.readdirSync(folder);

  for (const file of files) {
    if (
      file === "node_modules" ||
      file === ".git" ||
      file === "dist"
    )
      continue;

    const full = path.join(folder, file);

    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      walkProject(full);
    } else {
      if (
        CODE_EXTENSIONS.includes(
          path.extname(full)
        )
      ) {
        updateCode(full);
      }
    }
  }
}

(async () => {

  console.log("\nConverting Images...\n");

  await walkImages(IMAGE_DIR);

  console.log("\nUpdating Paths...\n");

  walkProject(ROOT_DIR);

  console.log("\nFinished!");

})();