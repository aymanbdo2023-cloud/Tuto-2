const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data has been successfully fetched!"), 1000);
});

console.log("Fetching data....");
fetchData.then(data => {
    console.log(data)
    }).catch(error => console.log("An error occurred: " + error));


