import fs from "fs/promises";

async function readFile(path) {
  try {
    const data = await fs.readFile(path, "utf8");
    return data;
  } catch (err) {
    throw err;
  }
}

async function writeFile(path, content) {
  try {
    await fs.writeFile(path, content, "utf8");
  } catch (err) {
    throw err;
  }
}

export { readFile, writeFile };
