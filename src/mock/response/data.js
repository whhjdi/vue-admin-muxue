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

export const getFolderList = () => {
  const temp1 = {
    "id|+1": 1,
    folder_id: 0,
    "name|1": "@word",
    "create_time ": "@datetime"
  };
  const temp2 = {
    "id|+1": 4,
    "folder_id|+1": 1,
    "name|1": "@word",
    "create_time ": "@datetime"
  };
  const arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(Mock.mock(temp1));
  }
  for (let i = 0; i < 2; i++) {
    arr.push(Mock.mock(temp2));
  }
  return arr;
};

export const getFileList = () => {
  const temp = {
    "id|+1": 10000,
    "folder_id|1-5": 0,
    "name|5": "@cword",
    "create_time ": "@datetime"
  };
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(Mock.mock(temp));
  }
  return arr;
};
