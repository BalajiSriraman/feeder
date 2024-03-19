<template>
  <div>
    <div v-if="value.loading">
      <div class="py-4 mx-auto flex justify-center">Asking Bard...</div>
      <USkeleton class="h-40" />
    </div>

    <div v-else-if="value.ouptutText !== ''" class="text-white">
      <div class="py-3">Answers</div>
      <div>
        {{ value.ouptutText }}
      </div>
    </div>
    <pre></pre>
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
