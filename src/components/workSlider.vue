<script setup lang="ts">
const images = [
    "./src/assets/media/images/workSlides/workSlide_1.png",
    "./src/assets/media/images/workSlides/workSlide_2.png",
    "./src/assets/media/images/workSlides/workSlide_3.png",
    "./src/assets/media/images/workSlides/workSlide_4.png",
    "./src/assets/media/images/workSlides/workSlide_5.png",    
    "./src/assets/media/images/workSlides/workSlide_11.png",
    // Add more image URLs if you have them
];

const bottomImages = [
    "./src/assets/media/images/workSlides/workSlide_6.png",
    "./src/assets/media/images/workSlides/workSlide_7.png",
    "./src/assets/media/images/workSlides/workSlide_8.png",
    "./src/assets/media/images/workSlides/workSlide_9.png",
    "./src/assets/media/images/workSlides/workSlide_10.png",
    "./src/assets/media/images/workSlides/workSlide_12.png",
    
    // Add more image URLs if you have them
];
</script>

<template>
    <section class="work-slider w-full bg-orange-500 overflow-hidden flex flex-col mb-[40px] gap-5 py-20">
        <div class="recent-work-top slider-wrapper">
            <div class="slider">
                <template v-for="i in 4">
                    <img
                        v-for="(img, idx) in images"
                        :key="`${i}-${idx}`"
                        :src="img"
                        alt=""
                        class="work-example px-2 rounded-[2rem]"
                        style="height: 160px; width: auto; object-fit: cover; aspect-ratio: 16/9;"
                    />
                </template>
            </div>
        </div>
        <!-- You can repeat for bottom if needed -->

        <div class="recent-work-bottom slider-wrapper">
            <div class="slider bottom" style="margin-left:-50%">
            <template v-for="i in 4">
                <img
                v-for="(img, idx) in bottomImages"
                :key="`bottom-${i}-${idx}`"
                :src="img"
                alt=""
                class="work-example px-2 rounded-[2rem]"
                style="height: 160px; width: auto; object-fit: cover; aspect-ratio: 16/9;"
                />
            </template>
            </div>
        </div>
    </section>
</template>

<style scoped>

.slider-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.slider {
    display: flex;
    width: max-content;
    animation: slide-left 60s linear infinite;
}
.slider.bottom {
    animation: slide-left 69s linear infinite;
}

@keyframes slide-left {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

</style>