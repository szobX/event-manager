<template>
  <div>
    <Navbar />
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Layout/Navbar'
export default {
  components: {
    Navbar
  },
  data() {
    return {}
  }
}
</script>
