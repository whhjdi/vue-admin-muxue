(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Table"],{"7e1e":function(t,n,e){"use strict";e.d(n,"c",function(){return a}),e.d(n,"b",function(){return o}),e.d(n,"a",function(){return l});var i=e("365c"),a=function(){return i["a"].request({url:"/getTableData",method:"get"})},o=function(){return i["a"].request({url:"/getFolderList",method:"get"})},l=function(){return i["a"].request({url:"/getFileList",method:"get"})}},dd99:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("edit-table",{attrs:{columns:t.columns,value:t.tableData},on:{"on-edit":t.handleEdit},model:{value:t.tableData,callback:function(n){t.tableData=n},expression:"tableData"}})],1)},a=[],o=e("7e1e"),l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Table",{attrs:{columns:t.insideColumns,data:t.value}})},u=[],c=e("da0a"),d=e.n(c),r={name:"EditTable",props:{columns:{type:Array,default:function(){return[]}},value:{type:Array,default:function(){return[]}}},data:function(){return{insideColumns:[],edittingContent:"",edittingId:""}},watch:{columns:function(){this.initColumns()}},methods:{handleEditClick:function(t){var n=t.row,e=t.column,i=t.index;if(this.edittingId==="".concat(e.key,"_").concat(i)){var a=d()(this.value);this.edittingContent&&(a[i][e.key]=this.edittingContent),this.$emit("input",a),this.$emit("on-edit",{row:n,column:e,index:i,newVal:this.edittingContent}),this.edittingId="",this.edittingContent=""}else this.edittingId="".concat(e.key,"_").concat(i)},handleInput:function(t){t&&(this.edittingContent=t)},initColumns:function(){var t=this,n=(this.$createElement,this.columns.map(function(n){return n.editable&&(n.render=function(n,e){var i=e.row,a=e.column,o=e.index,l=t.edittingId==="".concat(a.key,"_").concat(o);return n("div",[l?n("i-input",{attrs:{size:"small",value:i[a.key]},on:{input:t.handleInput.bind(t)}}):n("span",{style:"margin-right:10px"},[i[a.key]]),n("i-button",{attrs:{size:"small",type:"info"},on:{click:t.handleEditClick.bind(t,{row:i,column:a,index:o})}},[l?"保存":"编辑"])])}),n}));this.insideColumns=n}},mounted:function(){this.initColumns()}},s=r,m=e("2877"),h=Object(m["a"])(s,l,u,!1,null,"2c140cd2",null),f=h.exports,b=f,g={name:"TablePage",components:{EditTable:b},data:function(){return{tableData:[],columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄",editable:!0},{key:"email",title:"邮箱",editable:!0}]}},methods:{handleEdit:function(t){var n=t.row,e=t.column,i=t.index,a=t.newVal;console.log({row:n,column:e,index:i,newVal:a})}},mounted:function(){var t=this;Object(o["c"])().then(function(n){t.tableData=n.data})}},p=g,v=Object(m["a"])(p,i,a,!1,null,"08c7e309",null);n["default"]=v.exports}}]);