const parseArgs = () => {
  const args = process.argv.slice(2);
  args.map((arg, index) => {
    if (index % 2) {
      console.log(`${args[index - 1].replace("--", "")} is ${arg}`);
    }
  });
};

parseArgs();
