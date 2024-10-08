function submitData(name, email) {
    const url = 'http://localhost:3000/users';

    const data = {
        name: name,
        email: email,
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {

        const newId =data.id;

        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(idElement);

        console.log('Success:', data);
    })
    .catch(error => {
        const errorMessage = error.errorMessage

        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${errorMessage}`;
        errorElement.style.color = 'red';
        document.body.appendChild(errorElement);

        console.log('Error:' error);
    });
}
