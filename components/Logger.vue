<template>
  <div>
    <div>
      <div class="flex gap-3 justify-center items-center p-5">
        <!-- @vue-expect-error -->
        <div
          v-for="(value, key) in JSON.parse(value.ouptutText.data)"
          :class="`nth-child-${key + 1}`"
        >
          <div
            class="text-lg px-10 py-6 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 background-animate hover:bg-blue-500 cursor-pointer"
          >
            {{ value.option }}
          </div>
        </div>
      </div>

      <div class="mt-5 p-5">
        <!-- @vue-expect-error -->
        <div v-for="(value, key) in JSON.parse(value.ouptutText.data)">
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

    <UNotifications />
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
