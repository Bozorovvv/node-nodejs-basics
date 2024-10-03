import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const decompress = async (gzipFile, file) => {
  const readableStream = createReadStream(gzipFile);
  const gunzip = createGunzip();
  const writeableStream = createWriteStream(file);
  try {
    readableStream.pipe(gunzip).pipe(writeableStream);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};
await decompress("./files/archive.gz", "./files/fileToCompress.txt");
