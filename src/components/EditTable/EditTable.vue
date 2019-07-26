<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script>
import clonedeep from "clonedeep";
export default {
  name: "EditTable",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      insideColumns: [],
      edittingContent: "",
      edittingId: ""
    };
  },
  watch: {
    columns() {
      this.initColumns();
    }
  },
  methods: {
    handleEditClick({ row, column, index }) {
      if (this.edittingId === `${column.key}_${index}`) {
        const tableData = clonedeep(this.value);
        if (this.edittingContent) {
          tableData[index][column.key] = this.edittingContent;
        }
        this.$emit("input", tableData);
        this.$emit("on-edit", {
          row,
          column,
          index,
          newVal: this.edittingContent
        });
        this.edittingId = "";
        this.edittingContent = "";
      } else {
        this.edittingId = `${column.key}_${index}`;
      }
    },
    handleInput(val) {
      if (val) {
        this.edittingContent = val;
      }
    },
    initColumns() {
      const insideColumns = this.columns.map(item => {
        if (item.editable) {
          item.render = (h, { row, column, index }) => {
            const isEditting = this.edittingId === `${column.key}_${index}`;
            return (
              <div>
                {isEditting ? (
                  <i-input
                    size="small"
                    value={row[column.key]}
                    on-input={this.handleInput.bind(this)}
                  ></i-input>
                ) : (
                  <span>{row[column.key]}</span>
                )}

                <i-button
                  size="small"
                  on-click={this.handleEditClick.bind(this, {
                    row,
                    column,
                    index
                  })}
                >
                  {isEditting ? "保存" : "编辑"}
                </i-button>
              </div>
            );
          };
        }
        return item;
      });
      this.insideColumns = insideColumns;
    }
  },
  mounted() {
    this.initColumns();
  }
};
</script>

<style lang="scss" scoped></style>
