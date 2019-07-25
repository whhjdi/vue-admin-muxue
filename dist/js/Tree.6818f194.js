(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Tree"],{"0398":function(t,e,n){"use strict";var i=n("9f7d"),r=n.n(i);r.a},"044a":function(t,e,n){"use strict";var i=n("c132"),r=n.n(i);r.a},"5ddc":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-tree-wrapper"},[n("my-tree",{attrs:{folderList:t.folderList,fileList:t.fileList,folderDrop:t.folderDrop,fileDrop:t.fileDrop},on:{"update:folderList":function(e){t.folderList=e},"update:folder-list":function(e){t.folderList=e},"update:fileList":function(e){t.fileList=e},"update:file-list":function(e){t.fileList=e}}})],1)},r=[],o=(n("ac6a"),n("5df3"),n("7e1e")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Tree",{attrs:{data:t.treeList,render:t.renderContent}})],1)},a=[],l=(n("7f7f"),n("ca00")),c=n("da0a"),d=n.n(c),u={name:"MyTree",props:{folderList:{type:Array,default:function(){return[]}},fileList:{type:Array,default:function(){return[]}},folderDrop:Array,fileDrop:Array},data:function(){return{treeList:[],currentRenameId:"",currentContent:""}},watch:{folderList:function(){this.handleTreeList()},fileList:function(){this.handleTreeList()}},methods:{renderContent:function(t,e){var n=e.data,i="folder"===n.type?this.folderDrop:this.fileDrop,r=i&&i.map(function(e){return t("DropdownItem",{attrs:{name:e.name}},[e.title])}),o=this.currentRenameId==="".concat(n.type||"file","_{").concat(n.id,"}");return t("div",{class:"my-folder-wrapper"},["folder"===n.type?t("Icon",{attrs:{type:"ios-folder"},class:"my-icon"}):t("Icon",{attrs:{type:"logo-apple"},class:"my-icon"}),t("span",o?[t("i-input",{attrs:{value:n.title},on:{input:this.handleInput.bind(this)},class:"rename-input"}),t("i-button",{attrs:{size:"small",type:"text"},on:{click:this.handleSaveInput.bind(this,n)}},[t("Icon",{attrs:{type:"md-checkmark",color:"green"}})]),t("i-button",{attrs:{size:"small",type:"text"},on:{click:this.handleCloseInput.bind(this)}},[t("Icon",{attrs:{type:"md-close",color:"red"}})])]:[n.title]),i&&!o?t("dropdown",{attrs:{placement:"right-start"},on:{"on-click":this.handleDropItemClick.bind(this,n)}},[t("i-button",{attrs:{size:"small",type:"text"},class:"my-folder-button"},[t("Icon",{attrs:{type:"md-more",size:"12"}})]),t("DropdownMenu",{slot:"list"},[r])]):""])},handleTreeList:function(){var t=Object(l["i"])(this.folderList,this.fileList),e=Object(l["j"])(t);this.treeList=e},handleDropItemClick:function(t,e){var n=this,i=t.folder_id;"rename"===e?this.currentRenameId="".concat(t.type||"file","_{").concat(t.id,"}"):"delete"===e&&this.$Modal.confirm({title:"提示",content:"您确定要删除这个".concat(t.type?"文件夹":"文件","吗?"),onOk:function(){n.handleDeleteFolder(t),n.$nextTick(function(){Object(l["a"])(n.treeList,i)})}})},handleDeleteFolder:function(t){var e="folder"===t.type,n=e?"folderList":"fileList",i=e?d()(this.folderList):d()(this.fileList);i=i.filter(function(e){return e.id!==t.id}),this.$emit("update:".concat(n),i)},handleInput:function(t){this.currentContent=t},handleSaveInput:function(t){var e=t.id,n=t.type;if("folder"===n){var i=this.updateList(d()(this.folderList),e);this.$emit("update:folderList",i)}else{var r=this.updateList(d()(this.fileList),e);this.$emit("update:fileList",r)}this.currentRenameId=""},updateList:function(t,e){var n=-1;while(++n<t.length){var i=t[n];if(i.id===e){i.name=this.currentContent,t.splice(n,1,i);break}}return t},handleCloseInput:function(){this.currentRenameId=""}},mounted:function(){this.handleTreeList()}},f=u,p=(n("044a"),n("2877")),h=Object(p["a"])(f,s,a,!1,null,null,null),m=h.exports,L=m,y={name:"TreePage",components:{MyTree:L},data:function(){return{folderList:[],fileList:[],folderDrop:[{name:"rename",title:"重命名"},{name:"delete",title:"删除"}],fileDrop:[{name:"rename",title:"重命名"},{name:"delete",title:"删除"}]}},methods:{},mounted:function(){var t=this;Promise.all([Object(o["b"])(),Object(o["a"])()]).then(function(e){t.folderList=e[0].data,t.fileList=e[1].data})}},v=y,b=(n("0398"),Object(p["a"])(v,i,r,!1,null,null,null));e["default"]=b.exports},"5df3":function(t,e,n){"use strict";var i=n("02f4")(!0);n("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},"7e1e":function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return s});var i=n("365c"),r=function(){return i["a"].request({url:"/getTableData",method:"get"})},o=function(){return i["a"].request({url:"/getFolderList",method:"get"})},s=function(){return i["a"].request({url:"/getFileList",method:"get"})}},"9f7d":function(t,e,n){},c132:function(t,e,n){}}]);