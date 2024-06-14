const getDublicates = <T>(items: T[]) => {
  const uniqueItems = new Set(items);

  return items.filter(item => {
    if (uniqueItems.has(item)) {
      uniqueItems.delete(item);
    } else {
      return item;
    }
  });
};

export default getDublicates;
