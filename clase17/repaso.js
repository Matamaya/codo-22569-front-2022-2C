const ventas = [200,400,900,100];
const may = ventas.filter(Unaventa => Unaventa > 100);
console.log(may);
const suma = may.reduce((sumatotal, venta) => sumatotal+venta,0);
console.log(suma)
const mapeo=ventas.map(Unaventa=>'se vendio ' + Unaventa);
console.log(mapeo);