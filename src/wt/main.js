import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
  const worker = new Worker("./worker.js");

  const cpusCount = cpus();
  console.log(cpusCount.length);
  //   worker.postMessage(cpusCount.length);

  //   worker.once("message", (a) => console.log(a));
};

await performCalculations();
