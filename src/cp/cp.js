import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const childProcess = fork("./files/script.js", args, {
    silent: true,
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(["arg1", "arg2"]);
