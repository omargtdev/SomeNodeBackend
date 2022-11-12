export default {
    missingParameters: (parameters?: string) => {
        let message: string = "Parameters are missing."
        message += parameters ? ` We need ${parameters}.` : "";

        return {
            message,
            success: false
        }
    },
    sqlError: {
        message: "Error while processing SQL query",
        success: false
    },
    notFound: (description?: string) => ({
        message: description ? description : "Not found resource",
        success: false
    }),
    resultFound: (data: any, message?: string) => ({
        message: message ? message : "Request successfully!",
        data,
        success: true
    })
}