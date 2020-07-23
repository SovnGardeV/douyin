<template>
  <div class="disabled-mask" />
</template>

<script>
export default {
  mounted() {
    const parentEle = document.querySelector('.disabled-mask').parentElement
    const self = document.querySelector('.disabled-mask')
    debugger
    self.style.height = parentEle.offsetHeight + 'px'
  }
}
</script>

<style lang="scss" scoped>
.disabled-mask{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    z-index: 2;
}
</style>
