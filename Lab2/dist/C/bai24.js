"use strict";
async function postData(url = '', data = {}) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.error('Error in postData:', error);
        throw error;
    }
}
async function bai24() {
    try {
        const data = await postData('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        });
        console.log('Response:', data);
    }
    catch (error) {
        console.error('Failed to post data:', error);
    }
}
bai24();
