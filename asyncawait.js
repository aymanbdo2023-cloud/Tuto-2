async function fetchData() {
    setTimeout(() => {
        console.log("Data has been successfully fetched!");
    }, 2000);
}

console.log("Fetching data....");
await fetchData();