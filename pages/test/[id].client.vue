<template>
  <div>
    <div v-if="bind.loading" class="mt-5">
      <div class="flex items-center justify-center h-32">
        <i class="loader --6" />
      </div>
    </div>
    <Logger v-else v-model="bind" />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = ref(route.params.id);

const toast = useToast();

const { data: mongoRes, pending } = await useFetch(`/api/db/${id.value}`);

const bind: {
  inputText: string;
  loading: boolean;
  ouptutText: any;
} = reactive({
  inputText: "",
  loading: pending,
  ouptutText: "",
});

const regex = /\/([^\/]+)\/?$/;

// @ts-expect-error
const url = mongoRes.value?.data.quizUrl;
// @ts-expect-error
const token = mongoRes.value?.data.token;

const match = url.match(regex);

const callGemini = async () => {
  const res = await $fetch("/api/gemini", {
    method: "POST",
    body: {
      data: bind.inputText,
    },
  });

  if (res.status !== 200) {
    console.error("Error in processing the data");
  }

  toast.add({
    title: "Success",
    color: "green",
    description: "Data processed successfully",
    timeout: 3000,
  });

  bind.loading = false;

  bind.ouptutText = res;
};

if (match) {
  const lastPath = match[1];

  const data = await $fetch(
    `https://assessment-api.kalvium.community/api/assessments/${lastPath}/attempts`,
    {
      method: "POST",
      headers: {
        authorization: token,
      },
    }
  ).then((res) => JSON.stringify(res));

  bind.inputText = data;

  // validate input for a json
  try {
    JSON.parse(bind.inputText);
    await callGemini();
  } catch (error) {
    console.log("bind.inputText", bind.inputText);
    console.error("Please enter a valid JSON object.");
    throw new Error("Invalid JSON object");
  }
} else {
  console.log("No match found.");
}

// });
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
