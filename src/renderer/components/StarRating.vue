<script setup lang="ts">
import { computed } from 'vue';
import { ratingLabel, starFills } from '../../shared/stars';

const props = withDefaults(
  defineProps<{ rating: number; size?: 'sm' | 'lg' }>(),
  { size: 'sm' },
);

const fills = computed(() => starFills(props.rating));
const starSize = computed(() => (props.size === 'lg' ? 'size-9' : 'size-6'));

// Étoile pleine Material (star_filled de la maquette)
const STAR_PATH =
  'm12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z';
</script>

<template>
  <div class="flex gap-1" role="img" :aria-label="ratingLabel(rating)">
    <span
      v-for="(fill, i) in fills"
      :key="i"
      class="relative"
      :class="starSize"
    >
      <svg viewBox="0 0 24 24" class="absolute inset-0 size-full fill-white/20">
        <path :d="STAR_PATH" />
      </svg>
      <span
        class="absolute inset-y-0 left-0 overflow-hidden"
        :style="{ width: `${fill * 100}%` }"
      >
        <svg viewBox="0 0 24 24" class="fill-white" :class="starSize">
          <path :d="STAR_PATH" />
        </svg>
      </span>
    </span>
  </div>
</template>
