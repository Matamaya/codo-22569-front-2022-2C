function Users(users) {
    console.log(users)
  
    Pagination(users.info.next, users.info.prev);
  
    const html = 
    `
      ${users.results.map(e => UserEach(e)).join('')}
      
    `
    document.getElementById('users').innerHTML = html
  }
  
  function UserEach(e) {
    const html = 
    `
      <div class="card col-3 m-3 p-1" style="width: 18rem;">
        <img src="${e.image}" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title text-center">${e.name}</h3>
          <p class="card-text"><b>Especie:</b> ${e.species}</p>
          <p class="card-text"><b>Género:</b> ${e.species}</p>
          <p class="card-text"><b>Estado:</b> ${e.status}</p>
        </div>
      </div>
    `;
    return html;
  }
  
  