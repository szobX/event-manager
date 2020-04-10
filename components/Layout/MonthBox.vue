<template>
  <div class="box" :class="{ active }" @click="active = !active">
    <div class="month">{{ month.month.slice(0, 3) }}</div>
    <div class="year">{{ month.year }}</div>
  </div>
</template>

<script>
export default {
  props: {
    month: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      active: false
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  position: absolute;
  padding: 55px 0 30px;
  width: 100%;
  font-size: 40px;
  text-align: center;
  display: inline-block;
  color: #b3b3b3;
  border: none;
  background: #fdfdfd;
  border-top: 1px solid #f8f8f8;
  border-right: 1px solid #fcfcfc;
  border-bottom: 1px solid #f8f8f8;
  border-radius: 0;
  margin: 0;
  text-transform: uppercase;
  transition: 0.2s linear;

  &:hover {
    background: #fff;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
    color: $black;
    z-index: 999;
    transition: 0.2s linear;
  }
}
.active {
  transition: 0.2s linear;

  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
  color: $black;
  z-index: 999;
}
.month {
  font-weight: 200;
}
.year {
  font-size: 18px;
  margin: 35px 0 0;
  font-weight: 300;
  font-family: 'Montserrat';
  color: #b3b3b3;
}
</style>
