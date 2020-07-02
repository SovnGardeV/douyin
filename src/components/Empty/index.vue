<template>
  <div class="empty-container">
    <div class="empty-content">
      <img src="../../assets/empty.png" alt="" width="120px">
      <div class="empty-tips">
        暂无数据
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.empty-container{
    width: 100%;
    padding: 30px 0;
    .empty-content{
        text-align: center;
        .empty-tips{
            letter-spacing: 2px;
            color: #ccc;
        }
    }
}
</style>
