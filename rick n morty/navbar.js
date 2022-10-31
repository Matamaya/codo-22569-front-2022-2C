function Navbar() {
    const html =
      `
      <nav class="navbar bg-success">
        <div class="container-fluid">
          <a class="navbar-brand">Rick & Morty API</a>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-light" type="button">Buscar</button>
          </form>
        </div>
      </nav>
      `;
    return html;
  }