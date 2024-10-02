import { createWriteStream } from "fs";
import { stdin } from "process";

const write = async (file) => {
  const writeableFile = createWriteStream(file);
  stdin.pipe(writeableFile);
};

await write("./files/fileToWrite.txt");
