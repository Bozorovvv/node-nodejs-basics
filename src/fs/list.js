import fs from "fs";

const list = async (folder) => {
  fs.exists(folder, (status) => {
    if (status) {
      fs.readdir(folder, (err, data) => {
        if (err) {
          throw new Error("FS operation failed");
        } else {
          data.forEach((file) => {
            console.log(file);
          });
        }
      });
    } else {
      throw new Error(`FS operation failed`);
    }
  });
};

await list("files");
