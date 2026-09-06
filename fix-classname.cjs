const fs = require("fs");
const path = require("path");

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  content = content.replace(
    /className\s*=\s*"([\s\S]*?)"/g,
    (match, className) => {
      const cleaned = className
        .replace(/\s+/g, " ")
        .trim();

      return `className="${cleaned}"`;
    }
  );

  fs.writeFileSync(filePath, content, "utf8");
  console.log("Fixed:", filePath);
}

function processDirectory(dir) {
  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !["node_modules", ".git", "dist"].includes(item)) {
      processDirectory(fullPath);
    } else if (/\.(jsx|tsx)$/.test(item)) {
      processFile(fullPath);
    }
  }
}

processDirectory(".");
console.log("✅ All multiline className values fixed!");