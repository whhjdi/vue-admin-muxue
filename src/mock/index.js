import Mock from "mockjs";
import { baseURL } from "@/config";
import { getUserInfo } from "./response/user";
import { getTableData } from "./response/table";

Mock.mock(baseURL + "/getUserInfo", getUserInfo);
Mock.mock(baseURL + "/getTableData", getTableData);

export default Mock;
