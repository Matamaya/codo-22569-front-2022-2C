function Paginador(json) {

    const {page, per_page, total, total_pages} = json;

    const html = `
    <nav aria-label="...">
        <ul class="pagination">
            ${Page(page,total,total_pages)}
        </ul>
    </nav>`;

    document.getElementById('paginador').innerHTML = html;

    /*
    return render(
        html
    );
    */
}

function Page(page,total,total_pages) {

    const prev = `<li class="page-item disabled ${page === total}">
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>`;

    let lis = '';
    for(let i=1;i <= (total_pages);i++) {
        lis += `
        <li class="page-item ${i === page ? 'active' : ''}" aria-current="page">
            <a class="page-link" href="javascript:void()" onclick="buscarEnServicioRest(${i})">${i}</a>
        </li>
        `
    };

    const next = `<li class="page-item">
        <a class="page-link" href="#">Next</a>
        </li>`;
         
    return prev + lis + next;
}

