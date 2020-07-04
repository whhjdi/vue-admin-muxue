<template>
  <div>
    <edit-table
      :columns="columns"
      :value="tableData"
      v-model="tableData"
      @on-edit="handleEdit"
    ></edit-table>
  </div>
</template>

<script>
import { getTableData } from "@/api/data";
import EditTable from "@/components/EditTable";

export default {
  name: "TablePage",
  components: {
    EditTable
  },
  data() {
    return {
      tableData: [],
      columns: [
        { key: "name", title: "姓名" },
        { key: "age", title: "年龄", editable: true },
        { key: "email", title: "邮箱", editable: true }
      ]
    };
  },
  methods: {
    handleEdit() {
      // console.log({ row, column, index, newVal });
    }
  },
  mounted() {
    getTableData().then(res => {
      this.tableData = res.data;
    });
  }
};
</script>

<style lang="scss" scoped></style>
