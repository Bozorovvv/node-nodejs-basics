import fs from "fs";

const create = async (file, content) => {
  fs.exists(file, (status) => {
    if (status) {
      throw new Error("FS operation failed");
    } else {
      fs.writeFile(file, content, (err) => {
        if (err) {
          throw new Error("FS operation failed");
        } else {
          console.log("File created!");
        }
      });
    }
  });
};

await create("fresh.txt", "I am fresh and young");
