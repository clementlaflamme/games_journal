<script setup lang="ts">
import type { RatedGame } from '../../shared/types';
import { formatRating } from '../../shared/stars';
import GameCover from './GameCover.vue';
import StarRating from './StarRating.vue';

withDefaults(
  defineProps<{ game: RatedGame; variant?: 'large' | 'compact' }>(),
  { variant: 'compact' },
);
</script>

<template>
  <article
    v-if="variant === 'large'"
    class="flex items-center gap-12"
    :aria-label="game.name"
  >
    <GameCover
      :cover-image-id="game.coverImageId"
      :name="game.name"
      class="w-64 shrink-0"
    />
    <div class="flex w-64 flex-col items-center gap-5 text-center">
      <h3 class="text-3xl font-bold text-balance">{{ game.name }}</h3>
      <StarRating :rating="game.rating" size="lg" />
      <p class="text-3xl font-bold">{{ formatRating(game.rating) }}</p>
    </div>
  </article>

  <article v-else class="flex items-center gap-5" :aria-label="game.name">
    <GameCover
      :cover-image-id="game.coverImageId"
      :name="game.name"
      class="w-28 shrink-0 rounded-2xl"
    />
    <div class="flex min-w-0 flex-col items-center gap-3 text-center">
      <h3 class="line-clamp-2 text-lg leading-snug font-bold">
        {{ game.name }}
      </h3>
      <StarRating :rating="game.rating" />
      <p class="text-xl font-bold">{{ formatRating(game.rating) }}</p>
    </div>
  </article>
</template>
