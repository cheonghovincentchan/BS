export const addTwo = (a: number, b: number) => {
  return a + b;
};

/**
 * 校验val是否为邮箱
 * @param {string} val 需要校验的邮箱
 * @returns {boolean} 是否为邮箱
 */
export const isEmail = (val: string) => {
  const reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
  return reg.test(val);
};
