export function formatMessageTime(date){
    return new Date(date).toLocaleTimeString("en-US",{
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    })
}

export function getApiErrorMessage(error) {
    if (!error?.response) {
        return "Unable to connect to the server. Please try again later.";
    }

    return error.response.data?.message || error.message || "Something went wrong.";
}
