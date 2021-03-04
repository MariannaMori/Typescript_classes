document.addEventListener('DOMContentLoaded', () => {
    const backend = 'http://localhost:5000/addNewPost';
    document.querySelector('[type="submit"]').addEventListener('click', (event) => { /*submit button on click makes fetch call.  */
        event.preventDefault();/*so page doesnt get refreshed */
        fetch(backend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: document.getElementById('title').value,
                content: document.getElementById('content').value
            })
        })
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    })
})