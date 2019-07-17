import Mock from "mockjs";
export const getTableData = () => {
  const temp = {
    name: "@name",
    "age|18-30": 0,
    email: "@email"
  };
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(Mock.mock(temp));
  }
  return arr;
};
