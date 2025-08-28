// preload.js
const { contextBridge } = require("electron");

const fs = require("fs");
const path = require("path");

console.log("🔍 Preload script is running!");
console.log("🔍 Process type:", process.type);
console.log("🔍 Context isolation:", process.contextIsolated);

contextBridge.exposeInMainWorld("electronAPI", {
  saveFileToExe: async (fileName, blob) => {
    if (!blob || !blob.arrayBuffer) throw new Error("Invalid Blob");

    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const exeFolder = path.dirname(process.execPath);
    const filePath = path.join(exeFolder, fileName);
    fs.writeFileSync(filePath, buffer);

    return filePath;
  },
});
