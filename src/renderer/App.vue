<script setup lang="ts">
import { Show, SignIn } from '@clerk/vue';
import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/AppSidebar.vue';
</script>

<template>
  <Show when="signed-in">
    <div class="grid h-full grid-cols-[6rem_1fr] grid-rows-[auto_1fr]">
      <AppHeader class="col-span-2" />
      <AppSidebar />
      <main class="min-w-0 overflow-y-auto">
        <RouterView />
      </main>
    </div>
  </Show>

  <Show when="signed-out">
    <div class="grid h-full place-items-center">
      <SignIn />
    </div>
  </Show>
</template>
