import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const compress = async (file, gzipFile) => {
  const readableStream = createReadStream(file);
  const writeableStream = createWriteStream(gzipFile);
  const gzip = createGzip();
  try {
    readableStream.pipe(gzip).pipe(writeableStream);
    console.log("Successfully gzipped");
  } catch (error) {
    console.log(error);
  }
};

await compress("./files/fileToCompress.txt", "./files/archive.gz");
