import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"
import { Question } from "~/lib/types";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyDwaW_hvcOjb0qK0qj-J2T_Ek2kY38z_zY";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
};

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

export async function getGeminiResponce(data: Question[]) {

    const parts = [
        { text: " it can be a an array of text and there will be 5 questions and options  some time the user can give data along with some doc or reference regarding to the questions asked  in the array data which can be used as reference to answer the question" },
        { text: "of the options in the question just choose one correct answer and  return it in such a way where u tell the option number and the answer " },
        { text: " it can be a complex text and there will be 5 questions and options " },
        ...data.map((d) => {
            return {
                text: `Question: ${d.question} \nOptions: ${d.options.map((o, i) => `${i + 1}. ${o}`).join(", ")}\n
                `
            }
        })
    ];

    const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        safetySettings,
    });

    const response = result.response;

    return response.text()
}

