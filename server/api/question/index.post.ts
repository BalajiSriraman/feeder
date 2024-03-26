
export default defineEventHandler(async (event) => {

    console.info("Gemini API is called")

    const req = await readBody(event);

    if (!req) {
        console.error("Invalid request", req)

        setResponseStatus(event, 500)

        return {
            data: "Invalid request",
            status: 400
        }
    }

    const data = JSON.parse(req.data)


    if (!data) {
        console.error("Invalid request")

        setResponseStatus(event, 400)

        return {
            data: "Invalid JSON MF!",
            status: 400
        }
    }

    const questions = await parseQuestionsAndOptions(data)

    if (!questions?.success || questions.issues) {
        return {
            data: "Error parsing questions and options",
            status: 400
        }
    }



    return {
        data: {
            questionAndOptions: questions.output,
            prompt: " of the questions and option in the above key value answer me the correct option of the given options."
        },
        status: 200
    }
})
