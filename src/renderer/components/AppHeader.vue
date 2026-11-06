<script setup lang="ts">
import { ref } from 'vue';
import { UserButton } from '@clerk/vue';
import logo from '../assets/logo.png';

const query = ref('');

// La recherche IGDB sera branchée dans une prochaine tâche.
function onSearch() {
  query.value = query.value.trim();
}
</script>

<template>
  <header
    class="grid h-24 grid-cols-[6rem_1fr_6rem] items-center border-b-2 border-divider bg-linear-to-r from-ratey-violet to-ratey-magenta"
  >
    <RouterLink
      to="/"
      class="flex justify-center rounded-xl focus-visible:outline-2 focus-visible:outline-white"
      aria-label="Ratey, accueil"
    >
      <img :src="logo" alt="Ratey" class="size-18 object-contain" />
    </RouterLink>

    <form
      role="search"
      class="mx-auto w-full max-w-xl px-6"
      @submit.prevent="onSearch"
    >
      <label class="relative block">
        <span class="sr-only">Rechercher un jeu</span>
        <input
          v-model="query"
          type="search"
          placeholder="Recherchez un jeu..."
          class="h-11 w-full rounded-full bg-white pr-12 pl-5 text-sm text-neutral-900 shadow-md placeholder:text-neutral-400 focus:ring-4 focus:ring-white/40 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Lancer la recherche"
          class="absolute inset-y-0 right-1 grid w-10 place-items-center rounded-full text-neutral-700 hover:text-ratey-violet"
        >
          <svg
            viewBox="0 0 24 24"
            class="size-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </button>
      </label>
    </form>

    <div class="flex justify-center">
      <UserButton
        :appearance="{
          elements: {
            avatarBox: {
              width: '3.5rem',
              height: '3.5rem',
              boxShadow: '0 0 0 3px rgb(255 255 255 / 0.7)',
            },
          },
        }"
      />
    </div>
  </header>
</template>
