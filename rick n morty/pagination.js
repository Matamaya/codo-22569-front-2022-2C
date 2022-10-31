function Pagination(next, prev) {
    const html = 
      `
        <nav>
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link ${!prev ? 'disabled' : ''}" ${prev ? `onclick="FetchApi('${prev}')"` : ''} href="javascript:void()">Previous</a>
            </li>
            <!-- <li class="page-item active" aria-current="page"> -->
            <!--   <a class="page-link" href="#">2</a> -->
            <!-- </li> -->
            <li class="page-item">
              <a class="page-link" onclick="FetchApi('${next}')" href="javascript:void()">Next</a>
            </li>
          </ul>
        </nav>
      `
    document.getElementById('pagination').innerHTML = html;

    return html;
  }