import axios from "axios";
import { baseURL } from "@/config";
class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }
  getConfig() {
    const config = {
      //全局配置
      baseURL: this.baseUrl,
      headers: {}
    };
    return config;
  }
  interceptors(instance, url) {
    instance.interceptors.request.use(
      config => {
        //todo
        if (!Object.keys(this.queue).length) {
          // Spin.show();
        }
        this.queue[url] = true;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    instance.interceptors.response.use(
      res => {
        //todo
        delete this.queue[url];
        const { data, status } = res;
        return { data, status };
      },
      error => {
        delete this.queue[url];
        return Promise.reject(error);
      }
    );
  }
  request(options) {
    options = Object.assign(this.getConfig(), options);
    const instance = axios.create(options);
    this.interceptors(instance, options.url);
    return instance;
  }
}

export default HttpRequest;
