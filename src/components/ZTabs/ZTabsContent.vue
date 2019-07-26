 <template>
  <div class="z-tabs-Content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ZTabsContent",
  inject: ["eventBus"]
};
</script>

<style lang="less" scoped>
.z-tabs-Content {
  min-height: 50px;
  margin-top: 2em;
  text-align: left;
  padding: 0 2em;
}
</style>