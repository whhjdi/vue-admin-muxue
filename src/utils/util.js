import clonedeep from "clonedeep";
export const setTitle = title => {
  window.document.title = title || "vue-admin-muxue";
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
