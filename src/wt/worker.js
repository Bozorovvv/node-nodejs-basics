import { parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.once("message", (count) => {
    try {
      const data = nthFibonacci(count);
      parentPort.postMessage({ status: "resolved", data });
    } catch (error) {
      parentPort.postMessage({ status: "error", data: null });
    }
  });
};

sendResult();
