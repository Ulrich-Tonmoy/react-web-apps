const regex = {
  socialSecurityNumber: /^(?!000|666|9\d{2})\d{3}(?!00)\d{2}(?!0000)\d{4}$/,
  link: /^(https?:\/\/)?[\w-]+(\.[\w-]+)+[/#?]?.*$/,
};

export { regex };
