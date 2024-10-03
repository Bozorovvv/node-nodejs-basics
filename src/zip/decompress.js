import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const decompress = async (gzipFile, file) => {
  const readableStream = createReadStream(gzipFile);
  const writeableStream = createWriteStream(file);
  const gunzip = createGunzip();

  try {
    readableStream.pipe(gunzip).pipe(writeableStream);
  } catch (error) {
    console.log(error);
  }
};
await decompress("./files/archive.gz", "./files/fileToCompress.txt");
