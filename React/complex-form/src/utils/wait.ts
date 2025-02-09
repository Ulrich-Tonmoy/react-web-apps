const wait = async () =>
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * (2000 - 500 + 1)) + 500)
  );

export { wait };
