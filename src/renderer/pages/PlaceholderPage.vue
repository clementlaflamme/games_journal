<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="px-12 py-10">
    <h2 class="text-4xl font-bold">{{ route.meta.title }}</h2>
    <p class="mt-4 text-muted">Cette page arrive bientôt.</p>
  </div>
</template>
