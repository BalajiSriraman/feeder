<template>
  <div>
    <div class="p-5">
      <ThemeButton class="absolute top-0 right-0 m-5" />
      <!-- v-if="!bind.ouptutText" -->
      <QuestionBox v-model="bind" @post="post" />
      <Output v-model="bind" />
      <UNotifications />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as v from "valibot";
import { answerSchema } from "~/lib/types";

const toast = useToast();

const bind: {
  inputText: string;
  loading: boolean;
  ouptutText: any;
} = reactive({
  inputText: "",
  loading: false,
  ouptutText: "",
});

const post = async () => {
  // console.info(`Your Text: ${bind.inputText}`);

  bind.loading = true;

  // validate input for a json
  try {
    JSON.parse(bind.inputText);
  } catch (error) {
    bind.loading = false;
    console.error("Please enter a valid JSON object.");
    toast.add({
      title: "Error",
      color: "red",
      description: "Please enter a valid JSON object.",
      timeout: 3000,
    });
    return;
  }

  const res = await $fetch("/api/gemini", {
    method: "POST",
    body: {
      data: bind.inputText,
    },
  });

  if (res.status !== 200) {
    bind.loading = false;
    bind.ouptutText = "Error";
    toast.add({
      title: "Error",
      color: "red",
      description: "Bastard pls enter the object correct",
      timeout: 3000,
    });
    return;
  }

  bind.loading = false;

  // @ts-expect-error
  const ouptutText = JSON.parse(res.data);

  // Validate the input object against the schema
  const validationResult = v.safeParse(answerSchema, ouptutText);

  if (validationResult.issues || !validationResult.success) {
    console.error("Validation failed", validationResult);

    bind.ouptutText = {
      success: validationResult.success,
      data: res.data,
    };

    return;
  }

  bind.ouptutText = {
    success: validationResult.success,
    data: validationResult.output,
  };

  toast.add({
    title: "Success",
    description: "Data fetched",
    timeout: 3000,
  });
};
</script>
