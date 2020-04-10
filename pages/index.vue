<template>
  <div class="page">
    <section class="header-section">
      <div class="container">
        <h1 class="text">ALL UPCOMING EVENTS</h1>
      </div>
    </section>
    <section class="page-section">
      <div class="container">
        <Slider type="month-box">
          <div
            v-for="(month, idx) in monthOptions"
            :key="idx"
            class="swiper-slide"
          >
            <MonthBox :month="month" />
          </div>
        </Slider>
      </div>
    </section>
  </div>
</template>

<script>
import Slider from '@/components/Layout/Slider'
import MonthBox from '@/components/Layout/MonthBox'
export default {
  name: 'HomePage',

  components: { Slider, MonthBox },
  data() {
    return {
      date: new Date(),
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthOptions: null
    }
  },
  created() {
    this.generateMonth()
  },
  mounted() {},
  methods: {
    generateMonth() {
      let actYear = this.date.getFullYear()
      let month = this.date.getMonth()
      const options = []

      for (let i = 0; i < 12; i++) {
        options.push({
          month: this.months[month],
          year: actYear
        })
        month++
        if (month === 12) {
          month = 0
          actYear++
        }
      }
      console.log(options)
      this.monthOptions = options
    }
  }
}
</script>

<style lang="scss" scoped>
.page-section {
  padding-top: 45px;
}

.header-section {
  padding: 35px 0;
  background: #dbdbdb;
  text-align: center;
  border-bottom: 1px solid $black;
}
.text {
  margin: 0;
  font-weight: 700;
  opacity: 0.3;
}
</style>
