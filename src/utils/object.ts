// eslint-disable-next-line
export const recursiveParseBigint = (obj) => Object.entries(obj).reduce(
    (acum, [key, val]) => {
      if (val instanceof Object) {
        const res = Array.isArray(val)
          ? val.map(el => recursiveParseBigint(el))
          : recursiveParseBigint(val);
        return { ...acum, [key]: res };
      }
      if (typeof val === 'bigint') {
        return { ...acum, [key]: parseInt(val.toString(), 10) };
      }
      return { ...acum, [key]: val };
    },
    { ...obj }
  );