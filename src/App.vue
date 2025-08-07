<script setup lang="ts">
import Hero from './components/hero.vue'
import HeroLogoBar from './components/heroLogoBar.vue'
import WorkSlider from './components/workSlider.vue'
import Skills from './components/skills.vue'
import SeoWords from './components/seoWords.vue'
import WorkArea from './components/workArea.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <section class="hero-section">
    <Hero />
    <HeroLogoBar />
  </section>
  <WorkSlider />
  <Skills />
  <SeoWords />
  <WorkArea />
  <Footer />

</template>

<style scoped>
.hero-section {
  background-color: #fff; /* Light background for the hero section */
  position: relative;
}

</style>