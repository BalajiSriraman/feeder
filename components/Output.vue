<template>
  <div>
    <div v-if="value.loading" class="mt-5">
      <div class="flex items-center justify-center h-32">
        <i class="loader --6" />
      </div>
    </div>

    <div v-else-if="value.ouptutText.success">
      <!-- <div class="py-3">Answers</div> -->

      <div class="flex gap-3 justify-center items-center p-5">
        <!-- @vue-expect-error -->
        <div
          v-for="(value, key) in value.ouptutText.data"
          :class="`nth-child-${key + 1}`"
        >
          <div
            class="text-lg px-10 py-6 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 background-animate"
          >
            {{ value.option }}
          </div>
        </div>
      </div>

      <div class="mt-5">
        <!-- @vue-expect-error -->
        <div v-for="(value, key) in value.ouptutText.data">
          <div class="flex justify-start">
            <div class="text-gray-400 mr-3">{{ key }}</div>
            <div class="flex gap-3 items-center justify-start">
              <!-- <span> {{ value.option }}</span> -->
              <span>{{ value.value }}</span>
            </div>
          </div>
          <hr class="my-2 border-gray-600" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Answer } from "~/lib/types";

const value = defineModel<{
  loading: boolean;
  ouptutText: {
    success: boolean;
    data: Answer;
  };
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

.background-animate {
  background-size: 400%;

  -webkit-animation: AnimationName 3s ease infinite;
  -moz-animation: AnimationName 3s ease infinite;
  animation: AnimationName 3s ease infinite;
}

@keyframes AnimationName {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
