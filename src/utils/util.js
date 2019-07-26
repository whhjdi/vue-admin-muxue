import clonedeep from "clonedeep";
import Cookies from "js-cookie";
import { routes } from "@/router/routes.js";

export const setTitle = title => {
  window.document.title = title || "vue-admin-muxue";
};
export const setToken = (token, tokenName = "token") => {
  Cookies.set(tokenName, token);
};
export const getToken = (tokenName = "token") => {
  return Cookies.get(tokenName);
};
export const putFileToFolder = (folderList, fileList) => {
  const folderListCloned = clonedeep(folderList);
  const fileListCloned = clonedeep(fileList);

  return folderListCloned.map(item => {
    const folderId = item.id;
    let index = fileListCloned.length;
    while (--index >= 0) {
      const fileItem = fileListCloned[index];
      if (fileItem.folder_id === folderId) {
        const file = fileListCloned.splice(index, 1)[0];
        file.title = file.name;
        if (item.children) {
          item.children.push(file);
        } else {
          item.children = [file];
        }
      }
    }
    item.type = "folder";
    return item;
  });
};

export const putFolderToTree = folderList => {
  if (!folderList.length) return [];
  const folderListCloned = clonedeep(folderList);
  const handle = id => {
    let arr = [];
    folderListCloned.forEach(item => {
      if (item.folder_id === id) {
        const children = handle(item.id);
        if (item.children) {
          item.children = [].concat(item.children, children);
        } else {
          item.children = children;
        }

        item.title = item.name;
        arr.push(item);
      }
    });
    return arr;
  };

  return handle(0);
};

export const expandFolder = (folderTree, id) => {
  return folderTree.map(item => {
    if (item.type === "folder") {
      if (item.id === id) {
        item.expand = true;
      } else {
        if (item.children && item.children.length) {
          //递归
          item.children = expandFolder(item.children, id);
          if (
            item.children.some(child => {
              return child.expand;
            })
          ) {
            item.expand = true;
          }
        }
      }
    }
    return item;
  });
};

export const getAccessRoutes = (routesMap, rules) => {
  return routesMap.filter(item => {
    if (rules[item.name]) {
      if (item.children) {
        item.children = getAccessRoutes(item.children, rules);
      }
      return true;
    } else {
      return false;
    }
  });
};

//获取openNames
export const getOpenArrByName = (name, routerList) => {
  let arr = [];
  routerList.some(item => {
    if (item.name === name) {
      arr.push(item.name);
      return true;
    }
    if (item.children && item.children.length) {
      let childArr = getOpenArrByName(name, item.children);
      if (childArr.length) {
        arr = arr.concat(item.name, childArr);
      }
    }
  });
  return arr;
};

export const doCustomTimes = (times, callback) => {
  let i = -1;
  while (++i < times) {
    callback(i);
  }
};

//判断tabList中的路由是否已经存在

export const routeHasExist = (list, item) => {
  let len = list.length;
  let result = false;
  doCustomTimes(len, index => {
    if (routeEqual(list[index], item)) {
      result = true;
    }
  });
  return result;
};

export const routeEqual = (route1, route2) => {
  const params1 = route1.parmas || {};
  const params2 = route2.parmas || {};
  const query1 = route1.parmas || {};
  const query2 = route2.parmas || {};

  return (
    route1.name === route2.name &&
    objEqual(params1, params2) &&
    objEqual(query1, query2)
  );
};

export const objEqual = (obj1, obj2) => {
  const keyArr1 = Object.keys(obj1);
  const keyArr2 = Object.keys(obj2);
  if (!keyArr1.length === keyArr2.length) return false;
  else if (keyArr1.length === 0 && keyArr2.length === 0) return true;
  else {
    return !keyArr1.some(key => {
      return obj1[key] !== obj2[key];
    });
  }
};

//从route中获取tabName
export const getTabNameFromRoute = route => {
  const { name, parmas, query } = route;
  let result = name;
  if (parmas && Object.keys(parmas).length) {
    result += ":" + getKeyValArr(parmas).join("_");
  }
  if (query && Object.keys(query).length) {
    result += "&" + getKeyValArr(query).join("_");
  }

  return result;
};

const getKeyValArr = obj => {
  let arr = [];
  Object.entries(obj)
    .sort((a, b) => {
      return a[0] - b[0];
    })
    .forEach(([_key, _val]) => {
      arr.push(_key, _val);
    });

  return arr;
};

//获取route对象通过id
export const getRouteNameFromTabList = id => {
  let result = {};
  if (id.includes("&", "&")) {
    result.query = getObjBySplit(id);
    id = id.split("&")[0];
  }

  if (id.includes(":")) {
    result.params = getObjBySplit(id, ":");
    id = id.split(":")[0];
  }
  result.name = id;
  return result;
};

const getObjBySplit = (id, splitStr) => {
  let arr = id.split(splitStr);
  let str = arr[arr.length - 1];
  let keyValArr = str.split("_");
  let obj = {};
  let i = 0;
  let len = keyValArr.length;
  while (i < len) {
    obj[keyValArr[i]] = keyValArr[i + 1];
    i += 2;
  }
};

//存储路由信息

export const localSave = (name, value) => {
  return localStorage.setItem(name, value);
};

export const localRead = name => {
  return localStorage.getItem(name);
};

//排除一些路由
export const excludeRouteFromTabs = route => {
  return routes.every(item => {
    return item.name !== route.name;
  });
};
