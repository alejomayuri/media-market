export const formatDate = (seconds) => {
    const date = new Date(seconds * 1000)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day} / ${month < 10 ? `0${month}` : month} / ${year}`
}