function findUsers() {
    //resuelve
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => console.log(data));
}

async function findUsersAsync(){
    //invoca a otra que retorna un Promise
    return fetch('https://reqres.in/api/users');
}

async function invoke() {
    const users = await findUsersAsync();
    
    const promise = users.json();

    promise.then(data => console.log(data))
}

async function findUsersAsyncAxios() {
    try {
        const response = await axios.get('https://reqres.in/api/users');
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
}
//invocar
//findUsers();
//invoke();
findUsersAsyncAxios();