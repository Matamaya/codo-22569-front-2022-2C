function FetchApi(firstPage) {
    // debugger
    fetch(firstPage)
    .then((response) => response.json())
    .then((data) => Users(data));
}