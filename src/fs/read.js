import fs from "fs";

const read = async (file) => {
  fs.exists(file, (status) => {
    if (status) {
      fs.readFile(file, "utf8", (err, data) => {
        if (err) {
          throw new Error("FS operation failed");
        } else {
          console.log(data);
        }
      });
    } else {
      throw new Error(`FS operation failed`);
    }
  });
};

await read("./files/fileToRead.txt");
