<template>
  <div class="p-5">
    <!-- @vue-expect-error -->
    <QuestionBox v-model="bind" @post="post" />
    <Output v-model="bind" />
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
const dump = {
  id: "f68495d7-2bac-4321-9049-f897554f9fd5",
  assessment_id: "84dfa38c-53d5-4138-aef8-29634dd91c1d",
  user_id: "bf8424f1-2fe5-4753-a217-3f9bbcdc3f7b",
  start_time: "2024-03-17T09:11:35.413Z",
  end_time: "2024-03-17T10:11:35.413Z",
  remaining_time: 3599948,
  closed: false,
  created_at: "2024-03-17T09:11:35.408Z",
  updated_at: "2024-03-17T09:11:35.408Z",
  closed_at: null,
  attempt_info: [
    {
      question: {
        id: "e3177f65-f600-48c0-b358-4dd83f6e33b5",
        title: "language_preservation_technology_q5",
        content:
          "As per the lesson, which of the following has been an initiative taken by people of Africa to preserve their languages - especially Yuroba?",
        type: "mcq",
        difficulty: "easy",
        choices: [
          {
            content: "Organizing workshops",
            id: "e1625b00-132b-4b39-8128-5d1963492967",
          },
          {
            content: "Creating video tutorials on Youtube",
            id: "3bfa3dd4-644c-4439-bbb3-9c7a592d621f",
          },
          {
            content: "Organizing online lectures",
            id: "da0bbf83-cd67-43a4-a600-806a498646b7",
          },
          {
            content: "None of the given options",
            id: "b5b648bf-9a99-423b-b432-494a9782344d",
          },
        ],
      },
      attempt_id: "f68495d7-2bac-4321-9049-f897554f9fd5",
      question_id: "e3177f65-f600-48c0-b358-4dd83f6e33b5",
      sequence: 1,
      status: "unanswered",
    },
    {
      question: {
        id: "9452f55a-a266-4bfe-ba17-951593d12b11",
        title: "language_preservation_technology_q4",
        content:
          "Which of the following is the main reason why language loss occurs in the 21st century, as per the lesson?",
        type: "mcq",
        difficulty: "easy",
        choices: [
          {
            content: "Natural disasters",
            id: "85ce4630-8e91-460b-8ab2-55f6feaee61f",
          },
          {
            content: "Civil conflict",
            id: "53997a3d-b5ec-47e8-84c2-0e6a1cf4f07d",
          },
          {
            content: "Wars",
            id: "37c3120c-24b7-40c8-99df-afaeb8680626",
          },
          {
            content: "Lack of people speaking the languages",
            id: "fab86ba6-7af0-42d3-8255-0ded180f0c10",
          },
        ],
      },
      attempt_id: "f68495d7-2bac-4321-9049-f897554f9fd5",
      question_id: "9452f55a-a266-4bfe-ba17-951593d12b11",
      sequence: 2,
      status: "unanswered",
    },
    {
      question: {
        id: "d2f3d2ad-b7aa-4e85-ab8c-4744d72b750e",
        title: "language_preservation_technology_q3",
        content:
          "Which of the following is a Japanese language referenced in the lesson, which has its speakers posting phrases on X (formerly Twitter) regularly in order to preserve the language?",
        type: "mcq",
        difficulty: "easy",
        choices: [
          {
            content: "Yiddish",
            id: "c13082a4-e5db-4c9b-8200-594c20667163",
          },
          {
            content: "Ainu",
            id: "af24030c-2aa6-4b43-97a7-162fa776934d",
          },
          {
            content: "Iñupiat",
            id: "93c36217-60ce-48ba-b332-a633d31f3114",
          },
          {
            content: "Cherokee",
            id: "2207860a-1fac-4e2a-a2dc-fb266c5e63c4",
          },
        ],
      },
      attempt_id: "f68495d7-2bac-4321-9049-f897554f9fd5",
      question_id: "d2f3d2ad-b7aa-4e85-ab8c-4744d72b750e",
      sequence: 3,
      status: "unanswered",
    },
    {
      question: {
        id: "fca61e83-a321-44e7-96d8-6fd9d258bfcb",
        title: "language_preservation_technology_q2",
        content:
          "Which of the following is a language that was spoken by Jews, that went through near endangerment, but has been on the revival?",
        type: "mcq",
        difficulty: "easy",
        choices: [
          {
            content: "Yiddish",
            id: "37695a79-d10e-41cc-9a0d-6bef08c9a258",
          },
          {
            content: "Ainu",
            id: "081c592b-90a4-41b1-9159-654a348ccf0d",
          },
          {
            content: "Iñupiat",
            id: "0f80620c-d633-4d34-9583-79633ae94130",
          },
          {
            content: "Cherokee",
            id: "9660f1b8-0f35-496c-8099-350c0766509c",
          },
        ],
      },
      attempt_id: "f68495d7-2bac-4321-9049-f897554f9fd5",
      question_id: "fca61e83-a321-44e7-96d8-6fd9d258bfcb",
      sequence: 4,
      status: "unanswered",
    },
    {
      question: {
        id: "49b33a19-67f2-4966-a3b4-9027678ae032",
        title: "language_preservation_technology_q1",
        content:
          "Which of the following are potential reasons why a language may become endangered?",
        type: "mcq",
        difficulty: "easy",
        choices: [
          {
            content: "Natural disasters",
            id: "23ebe63f-7f5b-4943-bf7e-1ec000bc8259",
          },
          {
            content: "Civil conflict",
            id: "26a8c523-cdcc-4ff8-bcf3-507166f0a45e",
          },
          {
            content: "Wars",
            id: "82b9664d-7273-4e1a-869f-bd8f780e1441",
          },
          {
            content: "All of the given options are potential reasons",
            id: "c66166bf-bf5a-4200-a387-3b95a6568544",
          },
        ],
      },
      attempt_id: "f68495d7-2bac-4321-9049-f897554f9fd5",
      question_id: "49b33a19-67f2-4966-a3b4-9027678ae032",
      sequence: 5,
      status: "unanswered",
    },
  ],
  tags: ["Squad 43"],
  is_plagiarised: false,
  full_screen_mode: false,
  extras: {},
  report_available_after: null,
};

const toast = useToast();

const bind: {
  inputText: string;
  loading: boolean;
  ouptutText: string;
} = reactive({
  inputText: "",
  loading: false,
  ouptutText: "",
});

const post = async () => {
  console.info(`Your Text: ${bind.inputText}`);

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
  bind.ouptutText = res.data;

  toast.add({
    title: "Success",
    description: "Data fetched",
    timeout: 3000,
  });
};
</script>
