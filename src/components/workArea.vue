<script setup lang="ts">
import { ref } from 'vue'

const activeModal = ref<string | null>(null)

const openModal = (id: string) => {
  activeModal.value = id
}

const closeModal = () => {
  activeModal.value = null
}
</script>

<template>
<section class="bg-white py-16 px-6 sm:px-12">
  <div class="max-w-7xl mx-auto space-y-12">
    
    <!-- Heading -->
    <h2 class="text-3xl font-bold text-orange-500 text-center">
      No Filler, All Killer Projects
    </h2>

    <!-- Top Row -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
   
      <!-- Card 1 -->
      <div
        @click="openModal('douglas-adjustable')"
        class="bg-orange-50 rounded-4xl shadow-md overflow-hidden cursor-pointer transition duration-300 ease-out hover:shadow-xl hover:scale-[1.01] hover:-rotate-1"
      >
        <div class="pt-6 px-5 pb-3">
          <img src="../assets/media/images/logos/mattress-reviews-logo.png" alt="Mattress Reviews" class="h-10">
          <div class="flex flex-wrap gap-2 mt-2">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-300 text-orange-900 shadow">
              UX Wireframes
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-200 text-yellow-900 shadow">
              Web Design
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-lime-200 text-lime-900 shadow">
              Development
            </span>
          </div>
        </div>
        <div class="flex justify-center product-image-container">
          <img src="../assets/media/images/projects/compare-tool/comparisonTool.png" alt="Douglas Project image" class="h-64 w-3/4 object-cover product-image">
        </div>
      </div>

      <!-- Modal: MR Comparison Tool -->
      <transition name="fade-scale">
      <div v-if="activeModal === 'douglas-adjustable'" class="fixed inset-0 bg-orange-50/80 z-50 flex justify-center overflow-y-auto h-screen">
        <div class="modal-content h-fit w-full bg-white mx-auto rounded-4xl shadow-2xl p-4">
          <div class="sticky top-7 z-10 flex justify-end m-0">
              <button
                @click="closeModal"
                class="bg-orange-500 text-white rounded-full w-10 h-10 flex justify-center text-2xl pt-0.5 font-bold shadow hover:bg-orange-600"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          <div class="w-full max-w-6xl mx-auto">
            <div class="w-full mt-[-10px] space-y-6">
              <img src="../assets/media/images/projects/compare-tool/comparisonTool.png" alt="Full brick image" class="w-full rounded-lg border-1 border-gray-200 shadow-lg"></img>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">
                <div>
                  <h3 class="text-2xl sm:text-left font-bold text-gray-900">Mattress Comparison Tool</h3>
                  <p class="text-gray-700 sm:text-left text-sm">Built for clarity. Designed for decision-making. Developed from the ground up.</p>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-orange-500 mb-2">Software Used</h4>
                  <div class="flex flex-wrap gap-3 justify-center items-center">
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg" alt="Figma" width="24" height="24" />
                      <span class="text-xs mt-1">Figma</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visualstudiocode.svg" alt="VS Code" width="24" height="24" />
                      <span class="text-xs mt-1">VS Code</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/semanticui.svg" alt="Smartsheet" width="24" height="24" />
                      <span class="text-xs mt-1">Smartsheets</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-orange-500 mb-2">Languages Used</h4>
                  <div class="flex flex-wrap gap-4 justify-center items-center">
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/php.svg" alt="PHP" width="24" height="24" />
                      <span class="text-xs mt-1">PHP</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/json.svg" alt="JSON" width="24" height="24" />
                      <span class="text-xs mt-1">JSON</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/html5.svg" alt="HTML5" width="24" height="24" />
                      <span class="text-xs mt-1">HTML/CSS</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/javascript.svg" alt="JavaScript" width="24" height="24" />
                      <span class="text-xs mt-1">JavaScript</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <!-- Left: Image (larger column) -->
                <div class="md:col-span-2">
                  <img src="../assets/media/images/projects/compare-tool/comparisonMain.png" alt="Main project image" class="w-full rounded-lg shadow mb-4">
                </div>
                <!-- Right: Text (smaller column) -->
                <div class="md:col-span-1">
                  <h4 class="text-xl font-semibold text-orange-500 mb-2 mt-4">Project Details</h4>
                  <p>After the MR website was launched, the first major addition was the comparison tool. Mattress Reviews has all their content powered by an in-house developed CMS using Smartsheets. This was a project that I was required to both design and develop.</p>
                  <h5 class="text-lg font-bold text-gray-800 mb-1 mt-4">Overview</h5>
                    <p class="text-gray-600 text-sm">
                    This project centered on building a robust mattress comparison tool for Mattress Reviews. The tool enables users to easily compare multiple products side-by-side, highlighting key differences and similarities. Special attention was given to data clarity, responsive design, and accessibility, ensuring a seamless experience across all devices. The solution integrates with a custom CMS and presents complex product data in a user-friendly, visually engaging format.
                    </p>
                </div>
              </div>

              <!-- Main Paragraph -->
              <div class="my-8">
                <p class="text-base md:text-lg text-gray-700">
                  The comparison tool was a unique challenge, requiring a blend of technical expertise and creative problem-solving. The goal was to make complex product data easily digestible for users, while maintaining a visually engaging and accessible interface.
                </p>
              </div>

              <!-- Collage of Images (asymmetric layout) -->
              <div class="flex flex-col md:flex-row gap-4 my-6">
                <div class="flex-1 flex flex-col gap-4">
                  <img src="../assets/media/images/projects/compare-tool/comparisonC1.png" alt="Collage 1" class="rounded-lg shadow-md object-cover w-full">
                  <img src="../assets/media/images/projects/compare-tool/comparisonC2.png" alt="Collage 2" class="rounded-lg shadow-md object-cover w-full">
                </div>
                <div class="flex-1 flex flex-col gap-4 justify-center">
                  <img src="../assets/media/images/projects/compare-tool/comparisonMiddle.png" alt="Collage 3" class="rounded-lg shadow-md object-cover w-full h-full">
                </div>
                <div class="flex-1 flex flex-col gap-4">
                  <img src="../assets/media/images/projects/compare-tool/comparisonC3.png" alt="Collage 4" class="rounded-lg shadow-md object-cover w-full">
                  <img src="../assets/media/images/projects/compare-tool/comparisonC4.png" alt="Collage 5" class="rounded-lg shadow-md object-cover object-left h-full w-full">
                </div>
              </div>
      <!-- Call to Action -->
              <div class="mt-10 bg-orange-100 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center space-y-4">
                <p class="text-lg md:text-xl font-semibold text-orange-700">
                  Ready to see the full project in action? Dive deeper into the details, explore the live tool, and experience the design for yourself.
                </p>
                <a
                  href="https://www.mattressreviews.ca/comparisons/"
                  target="_blank"
                  rel="noopener"
                  class="inline-block bg-orange-600 text-white text-base font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-700 transition hover:scale-105"
                >
                  View Live Project &rarr;
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      </transition>

      <!-- Card 2 -->
      <div
        @click="openModal('trackMyOrder')"
        class="bg-orange-50 rounded-4xl shadow-md overflow-hidden cursor-pointer transition duration-300 ease-out hover:shadow-xl hover:scale-[1.01] hover:rotate-1"
      >
        <div class="pt-6 px-5 pb-3">
          <img src="../assets/media/images/logos/douglas-logo.svg" alt="The Brick Logo" class="h-max">
          <div class="flex flex-wrap gap-2 mt-2">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-300 text-orange-900 shadow">
              Branding
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-200 text-yellow-900 shadow">
              Web Design
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-lime-200 text-lime-900 shadow">
              Illustrations
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-200 text-cyan-900 shadow">
              Development
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-200 text-blue-900 shadow">
              Vue.js &amp; API Integration
            </span>
          </div>
        </div>
        <div class="flex justify-center product-image-container">
          <img src="../assets/media/images/projects/track-my-order/trackMyOrderMain.png" alt="Douglas Project image" class="h-64 w-3/4 object-cover product-image">
        </div>
      </div>

      <!-- Modal: MR Comparison Tool -->
      <transition name="fade-scale">
      <div v-if="activeModal === 'trackMyOrder'" class="fixed inset-0 bg-orange-50/80 z-50 flex justify-center overflow-y-auto h-screen">
        <div class="modal-content h-fit w-full bg-white mx-auto rounded-4xl shadow-2xl p-4">
          <div class="sticky top-7 z-10 flex justify-end m-0">
              <button
                @click="closeModal"
                class="bg-orange-500 text-white rounded-full w-10 h-10 flex justify-center text-2xl pt-0.5 font-bold shadow hover:bg-orange-600"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          <div class="w-full max-w-6xl mx-auto">
            <div class="w-full mt-[-10px] space-y-6">
              <img src="../assets/media/images/projects/track-my-order/trackMyOrderMain.png" alt="Full brick image" class="w-full rounded-lg border-1 border-gray-200 shadow-lg"></img>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">
                <div>
                  <h3 class="text-2xl sm:text-left font-bold text-gray-900">Track My Order</h3>
                  <p class="text-gray-700 sm:text-left text-sm">Buy it, ship it, track it, and manage it all in one place.</p>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-orange-500 mb-2">Software Used</h4>
                  <div class="flex flex-wrap gap-3 justify-center items-center">
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg" alt="Figma" width="24" height="24" />
                      <span class="text-xs mt-1">Figma</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visualstudiocode.svg" alt="VS Code" width="24" height="24" />
                      <span class="text-xs mt-1">VS Code</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-orange-500 mb-2">Languages Used</h4>
                  <div class="flex flex-wrap gap-4 justify-center items-center">
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vuedotjs.svg" alt="Vue.js" width="24" height="24" />
                      <span class="text-xs mt-1">Vue.js</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/typescript.svg" alt="TypeScript" width="24" height="24" />
                      <span class="text-xs mt-1">TypeScript</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/html5.svg" alt="HTML5" width="24" height="24" />
                      <span class="text-xs mt-1">HTML/CSS</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/javascript.svg" alt="JavaScript" width="24" height="24" />
                      <span class="text-xs mt-1">JavaScript</span>
                    </div>
                  </div>
                </div>
              </div>
              

              <div class="mt-8 grid items-start">
                <!-- Left: Image (larger column) -->
                
                  <h4 class="text-xl font-semibold text-orange-500 mb-2 mt-4">Project Details</h4>
                  <p class="mb-2">
                    Starting this process was a difficult one. A whole new tech stack had to be built for our WordPress. The current Track My Order was just a simple PHP process. The new system is using Vue.js so we can start shifting towards a more client side environment.  
                  </p>
                  <p class="mb-2">
                    Once I had set up the initial application, got it working, embedded into the site, and all those fiddly bits. I was tasked to bring this up to where the user can find their order, select their orders, and get them ready for the returns.
                  </p>
                  <p class="mb-2">
                    Once the app was online and stable, I worked with one of our Jr. Developers to finish off this project. Getting the API to send and receive the payloads required. Allowing for the user to upload images, and send them back to our servers, and get that payload to also start up a return in our systems.
                  </p>
                </div>

              <!-- Main Paragraph -->
              <div class="my-8">
                <p class="text-base md:text-lg text-gray-700">
                  This was a rather large project, and it was a major win for our department. It was the first of it’s kind, it asked us to do things far outside our comfort zone, but like Purolator, we always deliver.  
                </p>
              </div>
      <!-- Call to Action -->
              <div class="mt-10 bg-orange-100 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center space-y-4">
                <p class="text-lg md:text-xl font-semibold text-orange-700">
                  Ready to see the full project in action? Dive deeper into the details, explore the live tool, and experience the design for yourself.
                </p>
                <a
                  href="https://www.douglas.ca/my-order"
                  target="_blank"
                  rel="noopener"
                  class="inline-block bg-orange-600 text-white text-base font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-700 transition hover:scale-105"
                >
                  View Live Project &rarr;
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      </transition>
    </div>

    <!-- Bottom Row -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div
        @click="openModal('blogPost')"
        class="bg-orange-50 rounded-4xl shadow-md md:col-span-2 overflow-hidden cursor-pointer transition duration-300 ease-out hover:shadow-xl hover:scale-[1.01] hover:rotate-1"
      >
        <div class="pt-6 px-5 pb-3">
          <img src="../assets/media/images/logos/douglas-logo.svg" alt="The Brick Logo" class="h-max">
          <div class="flex flex-wrap gap-2 mt-2">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-300 text-orange-900 shadow">
              UX Wireframes
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-200 text-yellow-900 shadow">
              Web Design
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-lime-200 text-lime-900 shadow">
              Development
            </span>
          </div>
        </div>
        <div class="flex justify-center product-image-container">
          <img src="../assets/media/images/projects/blogPost/blogPostMain.png" alt="Douglas Project image" class="h-64 w-3/4 object-cover product-image object-top">
        </div>
      </div>

      <div class="md:col-span-1 bg-gray-50 rounded-4xl shadow-md overflow-hidden flex flex-col justify-center items-center">
        <div class="p-6 space-y-2 text-center">
          <h3 class="text-lg font-semibold text-gray-800">Stay Tuned!</h3>
          <p class="text-sm text-gray-600">More projects are coming soon. Check back for updates.</p>
        </div>
      </div>
    </div>

    
      <!-- Modal: MR Comparison Tool -->
      <transition name="fade-scale">
      <div v-if="activeModal === 'blogPost'" class="fixed inset-0 bg-orange-50/80 z-50 flex justify-center overflow-y-auto h-screen">
        <div class="modal-content h-fit w-full bg-white mx-auto rounded-4xl shadow-2xl p-4">
          <div class="sticky top-7 z-10 flex justify-end m-0">
              <button
                @click="closeModal"
                class="bg-orange-500 text-white rounded-full w-10 h-10 flex justify-center text-2xl pt-0.5 font-bold shadow hover:bg-orange-600"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          <div class="w-full max-w-6xl mx-auto">
            <div class="w-full mt-[-10px] space-y-6">
              <img src="../assets/media/images/projects/blogPost/blogPostMain.png" alt="Full brick image" class="w-full rounded-lg border-1 border-gray-200 shadow-lg"></img>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">
                <div>
                  <h3 class="text-2xl sm:text-left font-bold text-gray-900">Track My Order</h3>
                  <p class="text-gray-700 sm:text-left text-sm">Buy it, ship it, track it, and manage it all in one place.</p>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-orange-500 mb-2">Software Used</h4>
                  <div class="flex flex-wrap gap-3 justify-center items-center">
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg" alt="Figma" width="24" height="24" />
                      <span class="text-xs mt-1">Figma</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visualstudiocode.svg" alt="VS Code" width="24" height="24" />
                      <span class="text-xs mt-1">VS Code</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-orange-500 mb-2">Languages Used</h4>
                  <div class="flex flex-wrap gap-4 justify-center items-center">
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/php.svg" alt="PHP" width="24" height="24" />
                      <span class="text-xs mt-1">PHP</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/html5.svg" alt="HTML5" width="24" height="24" />
                      <span class="text-xs mt-1">HTML/CSS</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/javascript.svg" alt="JavaScript" width="24" height="24" />
                      <span class="text-xs mt-1">JavaScript</span>
                    </div>
                    <div class="flex flex-col items-center">
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/json.svg" alt="JSON" width="24" height="24" />
                      <span class="text-xs mt-1">JSON</span>
                    </div>
                  </div>
                </div>
              </div>
              

              <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <!-- Left: Image (larger column) -->
                <div class="md:col-span-2">
                  <img src="../assets/media/images/projects/blogPost/blogMain.png" alt="Main project image" class="w-full rounded-lg shadow mb-4">
                </div>
                <!-- Right: Text (smaller column) -->
                <div class="md:col-span-1">
                  <h4 class="text-xl font-semibold text-orange-500 mb-2 mt-4">Project Details</h4>
                  <p class="mb-2">
                    Starting this process was a difficult one. A whole new tech stack had to be built for our WordPress. The current Track My Order was just a simple PHP process. The new system is using Vue.js so we can start shifting towards a more client side environment.  
                  </p>
                  <p class="mb-2">
                    Once I had set up the initial application, got it working, embedded into the site, and all those fiddly bits. I was tasked to bring this up to where the user can find their order, select their orders, and get them ready for the returns.
                  </p>
                  <p class="mb-2">
                    Once the app was online and stable, I worked with one of our Jr. Developers to finish off this project. Getting the API to send and receive the payloads required. Allowing for the user to upload images, and send them back to our servers, and get that payload to also start up a return in our systems.
                  </p>
                </div>
              </div>

              <!-- Main Paragraph -->
              <div class="my-8">
                <p class="text-base md:text-lg text-gray-700">
                  This was a rather large project, and it was a major win for our department. It was the first of it’s kind, it asked us to do things far outside our comfort zone, but like Purolator, we always deliver.  
                </p>
              </div>

              <!-- Collage of Images (asymmetric layout) -->
              <div class="flex flex-col md:flex-row gap-4 my-6">
                                <div class="flex-1 flex flex-col gap-4 justify-center">
                  <img src="../assets/media/images/projects/blogPost/blogCMain.png" alt="Collage 3" class="rounded-lg shadow-md object-cover w-full h-full">
                </div>
                <div class="flex-1 flex flex-col gap-4">
                  <img src="../assets/media/images/projects/blogPost/blogC1.png" alt="Collage 1" class="rounded-lg shadow-md object-cover w-full h-65">
                  <img src="../assets/media/images/projects/blogPost/BlogC2.png" alt="Collage 2" class="rounded-lg shadow-md object-cover w-full h-30 object-top">
                </div>
                <div class="flex-1 flex flex-col gap-4">
                  <img src="../assets/media/images/projects/blogPost/blogC4.png" alt="Collage 5" class="rounded-lg shadow-md object-cover w-full h-100 object-bottom">
                </div>
              </div>

      <!-- Call to Action -->
              <div class="mt-10 bg-orange-100 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center space-y-4">
                <p class="text-lg md:text-xl font-semibold text-orange-700">
                  Ready to see the full project in action? Dive deeper into the details, explore the live tool, and experience the design for yourself.
                </p>
                <a
                  href="https://www.douglas.ca/canadians-love-douglas/"
                  target="_blank"
                  rel="noopener"
                  class="inline-block bg-orange-600 text-white text-base font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-700 transition hover:scale-105"
                >
                  View Live Project &rarr;
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      </transition>
  </div>
</section>

</template>

<style scoped>
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all 0.3s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.product-image-container {
  position: relative;
  top: 10%;
  transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Slide up image when parent card is hovered */
.bg-orange-50:hover .product-image-container {
  top: 0;
}
.project-image {
    transform: rotate(2deg);
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.12) -8px 16px 12px 0px;
    position: relative;
    top: 30%;
}

</style>