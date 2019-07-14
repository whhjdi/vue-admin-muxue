import Mock from "mockjs";
import { baseURL } from "@/config";
import { getUserInfo } from "./response/user";
Mock.mock(baseURL + "/getUserInfo", getUserInfo);

export default Mock;
