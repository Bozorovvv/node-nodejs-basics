import { createReadStream } from "fs";
import { stdout } from "process";

const read = async (file) => {
  const readableFile = createReadStream(file);
  readableFile.pipe(stdout);
};

await read("./files/fileToRead.txt");
