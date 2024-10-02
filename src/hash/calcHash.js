import crypto from "crypto";

const calculateHash = async (file) => {
  const hash = crypto.createHash("sha256");
  console.log(hash.update(file).digest("hex"));
};

await calculateHash("./files/fileToCalculateHashFor.txt");
