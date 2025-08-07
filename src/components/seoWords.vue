<script setup lang="ts">
const bubbleLabels: string[] = [
  // Design & Visual
  "UI Design",
  "UX Strategy",
  "Wireframes",
  "Prototypes",
  "Accessibility",
  "Animation",

  // Dev & Technical
  "Frontend",
  "Backend",
  "HTML, CSS & JS",
  "Vue",
  "APIs",
  "Data Handling",
  "Testing",
  "DevOps",
  "CMS",
  "Performance",
  "Responsive",
  "SEO Optimization",

  // Output & Extras
  "Landing Pages",
  "Blog Post Design",
  "+ more"
];
</script>


<template>
  <section class="bg-white py-16 px-6 sm:px-12">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
        <span class="text-orange-600">&lt;html&gt; to &lt;/footer&gt; I've seen it all.</span>
      </h2>

      <div class="flex flex-wrap gap-6 justify-center">
        <div
          v-for="(label, index) in bubbleLabels"
          :key="index"
          class="bg-[rgba(250,89,9,0.1)] rounded-4xl px-6 py-6 text-sm hover:font-medium text-orange-700 transition-shadow duration-200 hover:shadow-md"
        >
          {{ label }}
        </div>
      </div>
    </div>
  </section>
</template>
