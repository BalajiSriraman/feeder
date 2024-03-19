<template>
  <div>
    <div v-if="value.loading" class="mt-5">
      <div class="flex items-center justify-center h-32">
        <i class="loader --6" />
      </div>
    </div>

    <div v-else-if="value.ouptutText !== ''" class="text-white">
      <div class="py-3">Answers</div>
      <div>
        {{ value.ouptutText }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const value = defineModel<{
  loading: boolean;
  [key: string]: any;
}>({
  required: true,
});
</script>

<style scoped>
/* https://codepen.io/jenning/pen/YzNmzaV */

.loader {
  --color: rgb(255, 255, 255);
  --size-mid: 6vmin;
  --size-dot: 1.5vmin;
  --size-bar: 0.4vmin;
  --size-square: 3vmin;

  display: block;
  position: relative;
  width: 50%;
  display: grid;
  place-items: center;
}

.loader::before,
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
}

/**
    loader --6
**/
.loader.--6::before {
  width: var(--size-square);
  height: var(--size-square);
  background-color: var(--color);
  top: calc(50% - var(--size-square));
  left: calc(50% - var(--size-square));
  animation: loader-6 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
}

@keyframes loader-6 {
  0%,
  100% {
    transform: none;
  }

  25% {
    transform: translateX(100%);
  }

  50% {
    transform: translateX(100%) translateY(100%);
  }

  75% {
    transform: translateY(100%);
  }
}
</style>
