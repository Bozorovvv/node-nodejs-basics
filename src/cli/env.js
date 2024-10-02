const parseEnv = () => {
  const envVars = process.env;
  Object.keys(envVars)
    .filter((key) => key.startsWith("RSS_"))
    .map((key) => console.log(`${key}=${envVars[key]}`));
};

parseEnv();
