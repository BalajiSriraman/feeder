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
        { text: "of the options in the question just choose one correct answer and  return it in a JSON where it goes like record of question with value being an object cantaining the answer string and the option number " },
        { text: "format of output should be [ {question} : { option :{option number} , value: {answer} }, .........] only json outpu" },
        { text: " it can be a complex text and there will be 5 questions and options " },
        {
            text: ` { questionId: 'OS_L8_Q15',
    question: 'Why is the concept of threads essential in an Operating System?',
    options:
     [ 'Optimizing keyboard input processing',
       'Enhancing the graphical rendering of system interfaces',
       'Facilitating inter-process communication and synchronization',
       'Streamlining printer management functionalities' ] },
  { questionId: 'OS_L8_Q13',
    question:
     'How has the capability of computers regarding process execution evolved over time, as mentioned?',
    options:
     [ 'Computers could execute multiple processes from the beginning.',
       'Initially, only one process could run at a time, but modern computers support multiple processes simultaneously.',
       'The concept of processes did not exist in the early days of computers.',
       "Today's computers can only execute a single program with one process." ] },
  { questionId: 'OS_L8_Q10',
    question: 'Why is it essential for an operating system to handle a PCB?',
    options:
     [ 'To design programs',
       'To schedule processes',
       'To compile high-level languages',
       'To model business processes' ] },
  { questionId: 'OS_L8_Q8',
    question: 'Explain the significance of a PCB in an operating system.',
    options:
     [ 'Manages hardware resources',
       'Allocates memory',
       'Keeps track of process information',
       'Executes programs' ] },
  { questionId: 'OS_L8_Q7',
    question:
     'Which of the following options is applicable for the given statement? The process state in a PCB indicates the next instruction that the process will execute.',
    options: [ 'True', 'False' ]
    
    
    above is a sample input
    
    output should be like
    
    { "Question 1": { "option": { "option number": 3 }, "value": { "answer": "Facilitating inter-process communication and synchronization" } }, "Question 2": { "option": { "option number": 2 }, "value": { "answer": "Initially, only one process could run at a time, but modern computers support multiple processes simultaneously." } }, "Question 3": { "option": { "option number": 2 }, "value": { "answer": "To schedule processes" } }, "Question 4": { "option": { "option number": 3 }, "value": { "answer": "Keeps track of process information" } }, "Question 5": { "option": { "option number": 1 }, "value": { "answer": "True" } } }
    
    
    it should always be a json output and the output should be in the above format`},
        ...data.map((d) => {
            return {
                text: `Question: ${d.question} \nOptions: ${d.options.map((o, i) => `${i + 1}. ${o}`).join(", ")}\n
                `
            }
        })
    ];

    try {
        const result = await model.generateContent({
            contents: [{ role: "user", parts }],
            generationConfig,
            safetySettings,
        });

        // handle the result
        if (result.response === null || result == null) {
            console.error("Error generating content [try]: ", result);
            return {
                success: false,
                data: result,
            };
        }

        const response = result.response;

        return {
            success: true,
            data: response.text(),
        }
    } catch (error) {
        console.error("Error generating content: ", error);
        return {
            success: false,
            data: error,
        };
    }
}

