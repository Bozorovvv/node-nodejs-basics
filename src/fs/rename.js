import fs from "fs";
const rename = async (oldFile, newFile) => {
  fs.exists(oldFile, (status) => {
    if (status) {
      fs.exists(newFile, (status) => {
        if (status) {
          throw new Error(`${newFile} already exists!`);
        } else {
          fs.rename(oldFile, newFile, (err) => {
            if (err) {
              throw new Error("FS operation failed");
            } else {
              console.log(`${oldFile} renamed to ${newFile}`);
            }
          });
        }
      });
    } else {
      throw new Error(`${oldFile} does not exists!`);
    }
  });
};

await rename("files/wrongFilename.txt", "files/properFilename.md");
