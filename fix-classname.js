import fs from "fs";
import path from "path";

const ROOT = "./src";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

function getFiles(dir) {
  let files = [];

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      files = files.concat(getFiles(fullPath));
    } else if (extensions.includes(path.extname(item.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

function fixClassNames(content) {
  return content.replace(
    /className=\{`([\s\S]*?)`\}/g,
    (_, className) => {
      const cleaned = className
        .replace(/\s+/g, " ")
        .trim();

      return `className={\`${cleaned}\`}`;
    }
  );
}

const files = getFiles(ROOT);

let changed = 0;

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  const updated = fixClassNames(original);

  if (original !== updated) {
    fs.writeFileSync(file, updated, "utf8");
    console.log(`✓ ${file}`);
    changed++;
  }
}

console.log(`\nDone! Changed ${changed} file(s).`);