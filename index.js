// Add your code here
function submitData(userName, userEmail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(response => response.json())
    .then(object => document.querySelector("body").append(object.id))
    .catch(error => document.querySelector("body").append(error.message))

}

submitData("Enock", "elishakibet67@gmail.com");