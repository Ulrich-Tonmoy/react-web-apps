export const exerciseApiOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};

export const youtubeApiOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};
