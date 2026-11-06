<script setup lang="ts">
defineProps<{ title: string; message: string }>();
</script>

<template>
  <div
    class="flex flex-col items-center gap-2 rounded-3xl border-2 border-dashed border-white/15 px-8 py-10 text-center"
  >
    <svg
      viewBox="0 0 24 24"
      class="mb-2 size-10 fill-ratey-magenta"
      aria-hidden="true"
    >
      <path
        d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
    <p class="text-xl font-bold">{{ title }}</p>
    <p class="max-w-md text-muted">{{ message }}</p>
  </div>
</template>
