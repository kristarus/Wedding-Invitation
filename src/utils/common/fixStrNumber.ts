const fixStrNumber = (value: string) => {
  return value.replace(/,/g, '.');
};

export default fixStrNumber;
