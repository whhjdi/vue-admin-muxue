<template>
  <Card class="card-wrapper" :padding="0">
    <a :href="url" target="_blank" style="color:#000">
      <div class="content-con">
        <div class="left-area" :style="{ background: color, width: leftWidth }">
          <Icon :type="icon" size="36" color="#fff" class="card-icon" />
        </div>
        <div class="right-area" :style="{ width: rightWidth }">
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    </a>
  </Card>
</template>

<script>
export default {
  props: {
    icon: String,
    color: String,
    leftWidth: String,
    rightWidth: String,
    url: String
  }
};
</script>

<style lang="less">
.card-wrapper {
  width: 100%;
  height: 100%;
  > .ivu-card-body {
    width: 100%;
    height: 100%;
  }
  .content-con {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-area {
    height: 100%;
    display: table;
    text-align: center;
    & > .card-icon {
      width: 100%;
      display: table-cell;
      vertical-align: middle;
    }
  }
  .right-area {
    height: 100%;
    display: table;
    text-align: center;
    & > div {
      width: 100%;
      display: table-cell;
      vertical-align: middle;
    }
  }
}
</style>
