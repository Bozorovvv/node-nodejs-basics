import fs from "fs";

const copy = async (folder) => {
  fs.exists(folder, (err) => {
    if (err) {
      fs.exists(`${folder}_copy`, (err) => {
        if (err) {
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
