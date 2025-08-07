<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const successMessage = ref('');

const handleSubmit = async () => {
  try {
    const response = await fetch('https://formspree.io/f/mwpqwkvl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    });

    if (response.ok) {
      successMessage.value = 'Message sent successfully!';
      form.value = { name: '', email: '', message: '' };
    } else {
      successMessage.value = 'Something went wrong. Please try again.';
    }
  } catch (error) {
    console.error('Error:', error);
    successMessage.value = 'Error sending message.';
  }
};
</script>

<template>
    <footer class="bg-orange-500 text-white py-16 px-6 sm:px-12">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <!-- Left Column: Footer Message & CTA -->
            <div class="space-y-8 text-center md:text-left">
                <h2 class="text-2xl font-semibold">🐬🧣 So long and thanks for all the scrolls!</h2>
                <p class="text-lg">
                    I appreciate you taking the time to explore my work.
                    If something sparked your interest, made you smile, or got you thinking, I’d love to hear from you.
                    Whether it’s kudos, questions, or collaboration ideas, send a message.
                </p>
            </div>

            <!-- Right Column: Contact Form -->
            <div class="bg-white text-orange-500 p-8 rounded-lg shadow-lg">
                <a id="contact"></a>
                <form v-if="!successMessage || successMessage !== 'Message sent successfully!'" @submit.prevent="handleSubmit" class="space-y-6">
                    <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                        <div class="flex-1">
                            <label class="block font-semibold mb-1">Name</label>
                            <input type="text" v-model="form.name" required class="w-full px-4 py-2 border rounded" />
                        </div>
                        <div class="flex-1">
                            <label class="block font-semibold mb-1">Email</label>
                            <input type="email" v-model="form.email" required class="w-full px-4 py-2 border rounded" />
                        </div>
                    </div>
                    <div>
                        <label class="block font-semibold mb-1">Message</label>
                        <textarea v-model="form.message" required class="w-full px-4 py-2 border rounded h-32"></textarea>
                    </div>
                    <button type="submit" class="bg-orange-500 text-white font-bold px-6 py-2 rounded hover:bg-orange-600 transition">
                        Send Message
                    </button>
                    <p v-if="successMessage && successMessage !== 'Message sent successfully!'" class="mt-4 text-green-600 font-semibold">{{ successMessage }}</p>
                </form>
                <div v-else class="flex flex-col items-center">
                    <p class="mt-4 text-green-600 font-semibold">{{ successMessage }}</p>
                    <img
                        src="https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif"
                        alt="Nyan Cat"
                        class="mt-4 w-48 h-auto rounded shadow-lg"
                    />
                </div>
            </div>
        </div>
    </footer>
</template>
