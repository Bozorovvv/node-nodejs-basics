import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
  const cpusCount = cpus();

  const workerPromises = [];

  for (let index = 0; index < cpusCount.length; index++) {
    const workerPromise = new Promise((resolve, reject) => {
      const worker = new Worker("./worker.js");
      worker.postMessage(10 + index);
      worker.on("message", (data) => resolve(data));
      worker.on("error", (data) => reject(data));
    });
    workerPromises.push(workerPromise);
  }
  await Promise.all(workerPromises).then((res) => console.log(res));
};

await performCalculations();
