import { stdin, stdout } from "process";
import { Transform } from "stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split("").reverse().join("");
      callback(null, reversed);
    },
  });

  stdin.pipe(transformStream).pipe(stdout);
};

await transform();
