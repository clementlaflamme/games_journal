<script setup lang="ts">
import { computed, onUnmounted, ref, watch, watchEffect } from 'vue';
import type { RatedGame } from '../../shared/types';
import { coverUrl } from '../../shared/ratings';
import GameCard from './GameCard.vue';

const props = withDefaults(
  defineProps<{
    games: RatedGame[];
    label: string;
    /** Délai avant de passer au jeu suivant (ms) ; 0 désactive le défilement. */
    autoplayMs?: number;
  }>(),
  { autoplayMs: 15_000 },
);

const index = ref(0);
watch(
  () => props.games,
  () => (index.value = 0),
);

// Défilement automatique : en pause au survol ou au focus clavier,
// et le minuteur repart de zéro à chaque changement de jeu.
const hovered = ref(false);
const focused = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

watchEffect(() => {
  clearTimeout(timer);
  const paused = hovered.value || focused.value;
  if (props.autoplayMs > 0 && props.games.length > 1 && !paused) {
    void index.value; // dépendance : relance le minuteur à chaque changement
    timer = setTimeout(() => go(1), props.autoplayMs);
  }
});
onUnmounted(() => clearTimeout(timer));

// Seul un focus clavier met en pause (pas le focus laissé par un clic).
function onFocusIn(event: FocusEvent) {
  focused.value = (event.target as HTMLElement).matches(':focus-visible');
}

const current = computed(() => props.games[index.value]);
const backdrop = computed(() =>
  current.value ? coverUrl(current.value.coverImageId) : null,
);

function go(step: number) {
  const n = props.games.length;
  index.value = (index.value + step + n) % n;
}
</script>

<template>
  <section
    :aria-label="label"
    aria-roledescription="carrousel"
    class="relative isolate overflow-hidden rounded-[2rem] bg-black/20 px-8 py-10"
    tabindex="0"
    @keydown.left.prevent="go(-1)"
    @keydown.right.prevent="go(1)"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @focusin="onFocusIn"
    @focusout="focused = false"
  >
    <!-- Fond flouté tiré de la pochette courante -->
    <Transition name="fade">
      <div
        v-if="backdrop"
        :key="backdrop"
        class="absolute inset-0 -z-10 scale-110 bg-cover bg-center opacity-35 blur-3xl"
        :style="{ backgroundImage: `url(${backdrop})` }"
        aria-hidden="true"
      />
    </Transition>

    <div class="flex items-center justify-center gap-6">
      <button
        v-if="games.length > 1"
        type="button"
        class="arrow"
        aria-label="Jeu précédent"
        @click="go(-1)"
      >
        <svg viewBox="0 0 24 24" class="size-8" aria-hidden="true">
          <path
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div class="grid" aria-live="polite">
        <Transition name="fade" mode="out-in">
          <GameCard
            v-if="current"
            :key="current.id"
            :game="current"
            variant="large"
            aria-roledescription="diapositive"
          />
        </Transition>
      </div>

      <button
        v-if="games.length > 1"
        type="button"
        class="arrow"
        aria-label="Jeu suivant"
        @click="go(1)"
      >
        <svg viewBox="0 0 24 24" class="size-8" aria-hidden="true">
          <path
            d="M4 11h12.17l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13H4z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="games.length > 1"
      class="mt-8 flex justify-center gap-2"
      role="group"
      aria-label="Choisir un jeu"
    >
      <button
        v-for="(game, i) in games"
        :key="game.id"
        type="button"
        class="h-2.5 rounded-full transition-all"
        :class="
          i === index ? 'w-7 bg-white' : 'w-2.5 bg-muted hover:bg-white/70'
        "
        :aria-label="`${i + 1}. ${game.name}`"
        :aria-current="i === index ? 'true' : undefined"
        @click="index = i"
      />
    </div>
  </section>
</template>

<style scoped>
@reference '../index.css';

.arrow {
  @apply grid size-12 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
