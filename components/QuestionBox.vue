<template>
  <div>
    <div class="py-3">Paste Here</div>
    <UTextarea
      v-model="value.inputText"
      color="gray"
      :rows="15"
      variant="outline"
    />

    <UButton
      :label="value.loading ? 'Asking Gemini...' : 'Spank it!'"
      class="mt-5 mx-auto relative flex items-center text-gray-900 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      :loading="value.loading"
      @click="$emit('post')"
    />
  </div>
</template>

<script setup lang="ts">
const value = defineModel<{
  inputText: string;
  loading: boolean;
}>({
  required: true,
});

defineEmits(["post"]);
</script>
