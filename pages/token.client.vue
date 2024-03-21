<template>
  <div class="flex flex-col gap-3 justify-center items-center p-5">
    <div class="flex mx-auto items-center">Enter Your Gemini Token</div>
    <UInput
      v-model="apiToken"
      class="mt-5 flex mx-auto items-center w-56"
      size="sm"
      color="white"
      :trailing="false"
      placeholder="Search..."
    />

    <UButton
      label="Submit"
      class="mt-5 mx-auto relative flex"
      @click="savetolocal"
    />
  </div>
  <UNotifications />
</template>

<script lang="ts" setup>
const toast = useToast();

const token = localStorage.getItem("token");

const apiToken = ref(token ?? "");

const savetolocal = () => {
  toast.add({
    title: "Success",
    color: "green",
    description: "Token saved successfully",
    timeout: 3000,
  });

  localStorage.setItem("token", apiToken.value);
};
</script>
