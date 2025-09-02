"use strict";
const fetchWithRetry = async (url, retries = 3) => {
    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Htttp Error! Failed to fetch!");
            }
            return response.json();
        }
        catch (error) {
            if (attempt == retries) {
                console.error(`All ${retries} attempts failed:`, error);
                throw error;
            }
            console.log(`Attemp ${attempt + 1} failed, retrying....`);
        }
    }
};
fetchWithRetry("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
