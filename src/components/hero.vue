<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useApiDataStore } from '../stores/apiData'

const { heroData } = storeToRefs(useApiDataStore())

function getTitleText() {
  const block = heroData.value?.mainHeadline?.[0]
  if (!block || !block.children) return ''

  return block.children.map(child => {
    return child.text ?? ''
  }).join('')
}

function getParagraphHtml() {
  const block = heroData.value?.mainHeadline?.[1]
  if (!block || !block.children) return ''

  return block.children.map(child => {
    if (child.type === 'text') {
      return child.text
    }

    if (child.type === 'link') {
      const linkText = child.children?.map(c => c.text).join('') ?? ''
      return `<a href="${child.url}" class="text-orange-600 underline">${linkText}</a>`
    }

    return ''
  }).join('')
}

function getHeroImageUrl() {
    const url = heroData.value?.image?.url
    return url ? `http://localhost:1337${url}` : ''
}

function getCtaData() {
  return {
    label: heroData.value?.ctaLabel ?? '',
    url: heroData.value?.ctaUrl ?? '#'
  }
}

</script>

<template>
  <section class="bg-white hero-gradient px-4 pt-16 pb-0 sm:pt-6 lg:px-8">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

      <div class="lg:order-first">
        <img
          src="../assets/media/images/heroDylanCorporon.png"
          alt="Dylan Corporon Web Designer/Developer"
          class="rounded-[8rem] shadow-xl w-full max-h-[32rem] max-w-[22rem] lg:max-h-[40rem] lg:max-w-md mx-auto"
        />
      </div>
      
      <div>
        <h1 class="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-6 break-words">👋 I'm a <span class="font-extrabold">Web Designer &amp; Developer</span>🦄 by day, a father by night, and a <span class="font-extrabold hat-wearer">multiple hat wearer</span> around the clock.
        </h1>

        <p class="text-lg text-gray-600 mb-8" v-html="getParagraphHtml()" />
        <div class="flex justify-center md:justify-start">
            <a
              href="#contact"
              class="inline-block bg-orange-600 text-white text-base font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-700 transition hover:scale-105"
            >
            Lets Work Together
            </a>
        </div>

      </div>

    </div>
  </section>
</template>
