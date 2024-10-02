import fs from "fs";

const remove = async (file) => {
  fs.exists(file, (status) => {
    if (status) {
      fs.rm(file, (err) => {
        if (err) {
          throw new Error("FS operation failed");
        } else {
          console.log(`${file} deleted!`);
        }
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await remove("files/fileToRemove.txt");
