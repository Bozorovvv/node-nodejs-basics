import fs from "fs";

const copy = async (folder) => {
  fs.exists(folder, (status) => {
    if (status) {
      fs.exists(`${folder}_copy`, (status) => {
        if (status) {
          throw new Error(`${folder}_copy folder already exists!`);
        } else {
          fs.readdir(folder, (err, data) => {
            if (err) {
              throw new Error("FS operation failed");
            } else {
              data.forEach((file) => {
                fs.cp(`${folder}/${file}`, `${folder}_copy/${file}`, () => {});
              });
              console.log("Files copied successfully!");
            }
          });
        }
      });
    } else {
      throw new Error(`${folder} does not exists!`);
    }
  });
};

await copy("files");
