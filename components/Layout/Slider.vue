<template>
  <div :class="'type-' + type" class="swiper">
    <div ref="container" :style="style" class="swiper-container">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>

      <!-- <div class="swiper-pagination"></div> -->

      <div ref="prevEl" class="swiper-button-prev"></div>
      <div ref="nextEl" class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  props: {
    itemCount: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: 'default'
    },
    height: {
      type: String,
      default: null
    },
    navigation: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      style: {
        height: this.height ? this.height : null
      },
      swiper: null,
      typeOptions: {}
    }
  },

  watch: {
    itemCount() {
      this.initialize()
    }
  },

  mounted() {
    this.initialize()
  },

  destroy() {
    if (this.swiper !== null && this.swiper !== undefined) {
      this.swiper.destroy()
    }
  },

  methods: {
    initialize() {
      if (this.swiper !== null) {
        this.swiper.destroy()
      }

      this.swiper = new Swiper(this.$refs.container, {
        slidesPerView: 6,
        spaceBetween: 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;
  height: 190px;
}
.swiper-slide-active {
  background: red !important;
}
.swiper-button-prev,
.swiper-button-next {
  width: 45px;
  height: 45px;
  background: #fff;
  border-radius: 45px;
  color: #000;
  transition: background-color 0.3s, color 0.3s;

  &:after {
    font-size: 13px;
  }

  &:hover {
    background: $blue;
    color: #fff;
  }
}

.type-offer-photos {
  .swiper-container,
  .swiper-slide {
    height: 84px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 21px;
    height: 21px;

    margin-top: 0;
    top: 31px;

    &:after {
      font-size: 6px;
    }
  }

  .swiper-button-prev {
    left: 5px;
  }
  .swiper-button-next {
    right: 5px;
  }

  .swiper-slide {
    width: 156px;
    background: #c4c4c4;
    height: 84px;
    border-radius: 4px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.type-search-result {
  .swiper-container {
    height: 100%;
  }
  .swiper-button-next,
  .swiper-button-prev {
    background: transparent;
    width: 15px;

    &:after {
      color: #fff;
    }
  }
}
</style>
