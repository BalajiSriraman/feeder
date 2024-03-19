
export default defineEventHandler(async (event) => {

    console.info("Gemini API is called")

    const req = await readBody(event);

    if (!req) {
        console.error("Invalid request")

        setResponseStatus(event, 500)

        return {
            data: "Invalid request",
            status: 400
        }
    }


    // console.log("Data: ", req)

    const data = JSON.parse(req.data)

    if (!data) {
        console.error("Invalid request")

        setResponseStatus(event, 400)

        return {
            data: "Invalid JSON MF!",
            status: 400
        }
    }

    // console.log("Data: ", data)

    const questions = await parseQuestionsAndOptions(data)

    if (!questions?.success || questions.issues) {
        return {
            data: "Error parsing questions and options",
            status: 400
        }
    }

    const result = await getGeminiResponce(questions.output)

    if (!result.success || result.data === null || result.data === undefined) {
        return {
            data: "Error generating content",
            status: 500
        }
    }

    return {
        data: result.data,
        status: 200
    }
})
