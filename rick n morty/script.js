function render() {
  
    document.getElementById('navbar').innerHTML = Navbar();
    document.getElementById('pagination').innerHTML = Pagination();
    const firstPage = 'https://rickandmortyapi.com/api/character?page=1'
    
    FetchApi(firstPage);
  }
  
  render();
  