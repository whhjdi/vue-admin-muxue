import Mock from "mockjs";
import { baseURL } from "@/config";
import { getUserInfo, authorization, login } from "./response/user";
import { getTableData, getFolderList, getFileList } from "./response/data";

Mock.mock(baseURL + "/getUserInfo", getUserInfo);
Mock.mock(baseURL + "/authorization", authorization);
Mock.mock(baseURL + "/login", login);

Mock.mock(baseURL + "/getTableData", getTableData);
Mock.mock(baseURL + "/getFolderList", getFolderList);
Mock.mock(baseURL + "/getFileList", getFileList);

export default Mock;
