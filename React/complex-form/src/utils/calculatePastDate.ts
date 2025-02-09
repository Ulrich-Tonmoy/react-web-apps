const calculatePastDate = (years: number): Date => {
  const today = new Date();
  return new Date(
    today.getFullYear() - years,
    today.getMonth(),
    today.getDate()
  );
};

export { calculatePastDate };
