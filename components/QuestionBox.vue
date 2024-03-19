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
      class="mt-5 mx-auto relative flex"
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
