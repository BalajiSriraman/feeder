
export default defineEventHandler(async (event) => {

    const fds = event

    if (!fds) {
        return {
            data: "Invalid request",
            status: 400
        }
    }
    const questions = await parseQuestionsAndOptions(fds)

    if (!questions?.success || questions.issues) {
        return {
            data: "Error parsing questions and options",
            status: 400
        }
    }

    const result = await getGeminiResponce(questions.output)


    return {
        data: result,
        status: 200

    }
})
