// Ejemplo de datos iniciales
const clientes = [
  { nombre: 'MAFROX', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CHANA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MARIA POSTA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'PABLITO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ERORR', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MARIA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'LIZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MIGUEL', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ELSA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ARACELY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MARIELA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'AMANDA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MITZY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'YAQUI', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'NANCY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'LINA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'AQUINO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MARTHA GRAPA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'KATTY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MERLY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MARCIA CANO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ANTONIETA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CHINA GRAPA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'OLGA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'HILDA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SANTOS', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ADELA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BERTA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'YOLANDA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'JUAN', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'RINA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CARLOS', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'AYICO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ANDY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'PERLA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MELANIA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'LURDEZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MICHI', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BETZY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MILEBA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'LUCERO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'LIBRES', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MILAGROS', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'AMANDA Q.', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'DIANA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'PAMELA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MAGDALENA PRO.', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MARY LOPEZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'YILISA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'PILICHO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  
];

document.addEventListener('DOMContentLoaded', function() {
  const tbody = document.querySelector('#clientesTable tbody');
  actualizarTabla();
  const fechaTitulo = document.getElementById('fechaTitulo');
  const hoy = new Date().toISOString().split('T')[0];
  fechaTitulo.value = hoy;

});
function actualizarFecha() {
  const fechaTitulo = document.getElementById('fechaTitulo');
  console.log("Fecha seleccionada: " + fechaTitulo.value);
}

function mostrarDetalles(index) {
  const cliente = clientes[index];
  document.getElementById('clienteNombre').innerText = `Cliente: ${cliente.nombre}`;
  document.getElementById('manteca').value = cliente.manteca;
  document.getElementById('frances').value = cliente.frances;
  document.getElementById('maiz').value = cliente.maiz;
  document.getElementById('aniz').value = cliente.aniz;
  document.getElementById('yema').value = cliente.yema;
  document.getElementById('punta').value = cliente.punta;
  document.getElementById('bagetino').value = cliente.bagetino;
  document.getElementById('italiano').value = cliente.italiano;
  document.getElementById('serranito').value = cliente.serranito;
  document.getElementById('canela').value = cliente.canela;
  document.getElementById('coliza').value = cliente.coliza;
  document.getElementById('mntcmaiz').value = cliente.mntcmaiz;
  document.getElementById('integral').value = cliente.integral;
  document.getElementById('piso').value = cliente.piso;
  document.getElementById('chavata').value = cliente.chavata;
  document.getElementById('historialDeCompras').innerText = `Historial de Compras: ${cliente.compras}`;
  document.getElementById('historialDeDeudas').innerText = `Historial de Deudas: ${cliente.deudas}`;

  document.getElementById('editarForm').onsubmit = function(event) {
      event.preventDefault();
      cliente.manteca = parseInt(document.getElementById('manteca').value);
      cliente.frances = parseInt(document.getElementById('frances').value);
      cliente.maiz = parseInt(document.getElementById('maiz').value);
      cliente.aniz = parseInt(document.getElementById('aniz').value);
      cliente.yema = parseInt(document.getElementById('yema').value);
      cliente.punta = parseInt(document.getElementById('punta').value);
      cliente.bagetino = parseInt(document.getElementById('bagetino').value);
      cliente.italiano = parseInt(document.getElementById('italiano').value);
      cliente.serranito = parseInt(document.getElementById('serranito').value);
      cliente.canela = parseInt(document.getElementById('canela').value);
      cliente.coliza = parseInt(document.getElementById('coliza').value);
      cliente.mntcmaiz = parseInt(document.getElementById('mntcmaiz').value);
      cliente.integral = parseInt(document.getElementById('integral').value);
      cliente.piso = parseInt(document.getElementById('piso').value);
      cliente.chavata = parseInt(document.getElementById('chavata').value);
      cliente.total = cliente.manteca + cliente.frances + cliente.maiz + cliente.aniz + cliente.yema + cliente.punta + cliente.bagetino + cliente.italiano + cliente.serranito + cliente.canela + cliente.coliza + cliente.mntcmaiz + cliente.integral + cliente.piso + cliente.chavata;

      actualizarTabla();
      cerrarDetalles();
  };

  document.getElementById('clienteDetalles').style.display = 'block';
}

function cerrarDetalles() {
  document.getElementById('clienteDetalles').style.display = 'none';
}

function actualizarTabla() {
  const tbody = document.querySelector('#clientesTable tbody');
  tbody.innerHTML = '';

  let totalManteca = 0;
  let totalFrances = 0;
  let totalMaiz = 0;
  let totalAniz = 0;
  let totalYema = 0;
  let totalPunta = 0;
  let totalBagetino = 0;
  let totalItaliano = 0;
  let totalSerranito = 0;
  let totalCanela = 0;
  let totalColiza = 0;
  let totalMntcmaiz = 0;
  let totalIntegral = 0;
  let totalPiso = 0;
  let totalChavata = 0;
  
  let totalPedido = 0;
  clientes.forEach((cliente, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td><a href="#" onclick="mostrarDetalles(${index})">${cliente.nombre}</a></td>
          <td>${cliente.manteca}</td>
          <td>${cliente.frances}</td>
          <td>${cliente.maiz}</td>
          <td>${cliente.aniz}</td>
          <td>${cliente.yema}</td>
          <td>${cliente.punta}</td>
          <td>${cliente.bagetino}</td>
          <td>${cliente.italiano}</td>
          <td>${cliente.serranito}</td>
          <td>${cliente.canela}</td>
          <td>${cliente.coliza}</td>
          <td>${cliente.mntcmaiz}</td>
          <td>${cliente.integral}</td>
          <td>${cliente.piso}</td>
          <td>${cliente.chavata}</td>
          <td>${cliente.total}</td>
          
      `;
      tbody.appendChild(row);

      totalManteca += cliente.manteca;
      totalFrances += cliente.frances;
      totalMaiz += cliente.maiz;
      totalAniz += cliente.aniz;
      totalYema += cliente.yema;
      totalPunta += cliente.punta;
      totalBagetino += cliente.bagetino;
      totalItaliano += cliente.italiano;
      totalSerranito += cliente.serranito;
      totalCanela += cliente.canela;
      totalColiza += cliente.coliza;
      totalMntcmaiz += cliente.mntcmaiz;
      totalIntegral += cliente.integral;
      totalPiso += cliente.piso;
      totalChavata += cliente.chavata;
      totalPedido += cliente.total;
  });

  document.getElementById('totalManteca').innerText = totalManteca;
  document.getElementById('totalFrances').innerText = totalFrances;
  document.getElementById('totalMaiz').innerText = totalMaiz;
  document.getElementById('totalAniz').innerText = totalAniz;
  document.getElementById('totalYema').innerText = totalYema;
  document.getElementById('totalPunta').innerText = totalPunta;
  document.getElementById('totalBagetino').innerText = totalBagetino;
  document.getElementById('totalItaliano').innerText = totalItaliano;
  document.getElementById('totalSerranito').innerText = totalSerranito;
  document.getElementById('totalCanela').innerText = totalCanela;
  document.getElementById('totalColiza').innerText = totalColiza;
  document.getElementById('totalMntcmaiz').innerText = totalMntcmaiz;
  document.getElementById('totalIntegral').innerText = totalIntegral;
  document.getElementById('totalPiso').innerText = totalPiso;
  document.getElementById('totalChavata').innerText = totalChavata;
  document.getElementById('totalPedido').innerText = totalPedido;
}

function exportarAExcel() {
  // Obtener la tabla HTML
  const tabla = document.getElementById('clientesTable');
  
  // Convertir la tabla a un array de arrays
  const ws_data = [];
  const rows = tabla.querySelectorAll('tr');
  
  rows.forEach(row => {
      const rowData = [];
      row.querySelectorAll('td, th').forEach(cell => {
          rowData.push(cell.innerText);
      });
      ws_data.push(rowData);
  });

  // Crear una nueva hoja de trabajo
  const ws = XLSX.utils.aoa_to_sheet(ws_data);

  // Crear un nuevo libro de trabajo
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Clientes');

  // Exportar el libro de trabajo a un archivo Excel
  XLSX.writeFile(wb, 'clientes.xlsx');
}

function imprimirTabla() {
  const tabla = document.getElementById('clientesTable').outerHTML;
  const estilo = `
      <style>
          table {
              width: 100%;
              border-collapse: collapse;
          }
          th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: center;
          }
          th {
              background-color: #f2f2f2;
          }
      </style>
  `;
  
  const ventanaImpresion = window.open('', '', 'height=500, width=800');
  ventanaImpresion.document.write('<html><head><title>Imprimir Tabla</title>');
  ventanaImpresion.document.write(estilo);
  ventanaImpresion.document.write('</head><body>');
  ventanaImpresion.document.write(tabla);
  ventanaImpresion.document.write('</body></html>');
  ventanaImpresion.document.close();
  ventanaImpresion.print();
}
// Variable para almacenar los historiales de los clientes
let historiales = {};// Variable para almacenar los historiales de los clientes
document.getElementById('editarForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        const cliente = document.getElementById('clienteNombre').innerText.replace('Cliente: ', '');
        const datos = {
            manteca: parseInt(document.getElementById('manteca').value) || 0,
            frances: parseInt(document.getElementById('frances').value) || 0,
            maiz: parseInt(document.getElementById('maiz').value) || 0,
            aniz: parseInt(document.getElementById('aniz').value) || 0,
            yema: parseInt(document.getElementById('yema').value) || 0,
            punta: parseInt(document.getElementById('punta').value) || 0,
            bagetino: parseInt(document.getElementById('bagetino').value) || 0,
            italiano: parseInt(document.getElementById('italiano').value) || 0,
            serranito: parseInt(document.getElementById('serranito').value) || 0,
            canela: parseInt(document.getElementById('canela').value) || 0,
            coliza: parseInt(document.getElementById('coliza').value) || 0,
            mntcmaiz: parseInt(document.getElementById('mntcmaiz').value) || 0,
            integral: parseInt(document.getElementById('integral').value) || 0,
            piso: parseInt(document.getElementById('piso').value) || 0,
            chavata: parseInt(document.getElementById('chavata').value) || 0
        };

        actualizarDatosCliente(cliente, datos);
        alert('Datos guardados');
        cerrarDetalles();
        actualizarTabla();
    }
});


function validateForm() {
    const fields = ['manteca', 'frances', 'maiz', 'aniz', 'yema', 'punta', 'bagetino', 'italiano', 'serranito', 'canela', 'coliza', 'mntcmaiz', 'integral', 'piso', 'chavata'];
    for (let field of fields) {
        const value = document.getElementById(field).value;
        if (isNaN(value) || value < 0) {
            alert(`Por favor ingrese un valor válido para ${field}`);
            return false;
        }
    }
    return true;
}
function mostrarHistorial() {
    let historialHTML = `
        <html>
            <head>
                <title>Historial de Clientes</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        background-color: #f4f4f9;
                        color: #333;
                    }
                    h2 {
                        text-align: center;
                        color: #333;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        padding: 8px;
                        border: 1px solid #ddd;
                        text-align: center;
                    }
                    th {
                        background-color: #e4e4e9;
                        font-size: 16px;
                    }
                    .total-row td {
                        font-weight: bold;
                        background-color: #f9f9f9;
                        text-align: left; /* Ajuste para alinear texto a la izquierda en las celdas de totales */
                    }
                    .button {
                        padding: 10px 20px;
                        margin-top: 20px;
                        background-color: #4CAF50;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                </style>
            </head>
            <body>
                <h2>Historial de Clientes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Fecha</th>
                            <th>Manteca</th>
                            <th>Frances</th>
                            <th>Maiz</th>
                            <th>Aniz</th>
                            <th>Yema</th>
                            <th>Punta</th>
                            <th>Bagetino</th>
                            <th>Italiano</th>
                            <th>Serranito</th>
                            <th>Canela</th>
                            <th>Coliza</th>
                            <th>Mntc Maiz</th>
                            <th>Integral</th>
                            <th>Piso</th>
                            <th>Chavata</th>
                            <th>Total por Cliente</th>
                        </tr>
                    </thead>
                    <tbody>`;

    let totalGeneral = 0;

    for (let cliente in historiales) {
        let totalPorCliente = 0;
        historiales[cliente].forEach(entry => {
            const totalCliente = Object.values(entry).slice(1).reduce((a, b) => a + parseInt(b), 0);
            totalPorCliente += totalCliente;
            totalGeneral += totalCliente;

            historialHTML += `
                <tr>
                    <td>${cliente}</td>
                    <td>${entry.fecha}</td>
                    <td>${entry.manteca}</td>
                    <td>${entry.frances}</td>
                    <td>${entry.maiz}</td>
                    <td>${entry.aniz}</td>
                    <td>${entry.yema}</td>
                    <td>${entry.punta}</td>
                    <td>${entry.bagetino}</td>
                    <td>${entry.italiano}</td>
                    <td>${entry.serranito}</td>
                    <td>${entry.canela}</td>
                    <td>${entry.coliza}</td>
                    <td>${entry.mntcmaiz}</td>
                    <td>${entry.integral}</td>
                    <td>${entry.piso}</td>
                    <td>${entry.chavata}</td>
                    <td>${totalCliente}</td>
                </tr>
            `;
        });

        // Agregar fila de total por cliente
        historialHTML += `
            <tr class="total-row">
                <td colspan="17">Total de ${cliente}</td>
                <td>${totalPorCliente}</td>
            </tr>
        `;
    }

    // Agregar fila de total general
    historialHTML += `
        <tr class="total-row">
            <td colspan="17">Total General</td>
            <td>${totalGeneral}</td>
        </tr>
        </tbody>
        </table>
        <button class="button" onclick="exportarExcel()">Exportar a Excel</button>
        </body>
        </html>`;

    


    const nuevaVentana = window.open('', '_blank', 'width=1000,height=600');
    nuevaVentana.document.write('<html><head><title>Historial de Clientes</title><link rel="stylesheet" href="tu_estilo.css"></head><body>');
    nuevaVentana.document.write(historialHTML);
    nuevaVentana.document.write('</body></html>');
    nuevaVentana.document.close();
    
}
    
function actualizarDatosCliente(cliente, datos) {
    const fecha = new Date().toISOString().split('T')[0]; // Usar la fecha actual
    if (!historiales[cliente]) {
        historiales[cliente] = []; // Inicializar con un array si no existe
    }

    let entrada = historiales[cliente].find(entry => entry.fecha === fecha);
    if (!entrada) {
        entrada = { fecha: fecha, ...datos };
        historiales[cliente].push(entrada);
    } else {
        // Actualiza los datos existentes
        Object.keys(datos).forEach(key => {
            entrada[key] = datos[key];
        });
    }
}

const adminCredentials = {
    username: 'admin',
    password: 'admin123'
};

document.addEventListener('DOMContentLoaded', function() {
    // Resto de tu código existente

    // Manejar el formulario de login
    document.getElementById('formLogin').addEventListener('submit', function(event) {
        event.preventDefault();
        handleLogin();
    });
});

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        document.getElementById('loginForm').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('content').style.display = 'block';
            document.getElementById('content').style.opacity = 1;
        }, 300); // Transition time in milliseconds
    } else {
        alert('Credenciales incorrectas, por favor intente de nuevo.');
    }
}
function showSection(sectionId) {
    if (sectionId === 'videos') {
        window.location.href = 'oxapampa.html'; // Redirige a la página
    } else {
        // Aquí tu lógica existente para mostrar otras secciones
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.classList.remove('active'));

        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('active');
        }
    }
}
function guardarTabla() {
    var fecha = document.getElementById('fecha').value;
    if (!fecha) {
        alert('Por favor, seleccione una fecha.');
        return;
    }

    var tabla = document.getElementById('clientesTable');
    var datos = Array.from(tabla.querySelectorAll('tr')).map(row =>
        Array.from(row.querySelectorAll('td, th')).map(cell => cell.innerText)
    );

    fetch('/guardar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: datos, fecha })
    })
    .then(response => response.json())
    .then(result => alert(result.message))
    .catch(error => console.error('Error al guardar los datos:', error));
}
function guardarDatos() {
    const fecha = document.getElementById('fecha').value;
    const datos = Array.from(document.querySelectorAll('#clientesTable tr')).map(tr =>
        Array.from(tr.querySelectorAll('td')).map(td => td.textContent)
    );

    fetch('/guardar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data: datos, fecha})
    })
    .then(response => response.json())
    .then(result => alert(result.message))
    .catch(error => console.error('Error al guardar los datos:', error));
}

// scripts.js (en el lado del cliente)
function cargarDatos() {
    const fecha = document.getElementById('fecha').value;
    if (!fecha) {
        alert('Por favor, seleccione una fecha.');
        return;
    }

    fetch(`/cargar/${fecha}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la carga de datos: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const table = document.getElementById('clientesTable');
        const tbody = table.getElementsByTagName('tbody')[0];
        tbody.innerHTML = ''; // Limpiar la tabla antes de añadir nuevos datos

        data.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell; // Asegúrate de que solo texto sea insertado
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    })
    .catch(error => {
        console.error('Error al cargar los datos:', error);
        alert(error.message);
    });
}
// Este código debe estar en un archivo separado, como `scripts.js`, que se carga en tu HTML
function cargarDatosDesdeServidor() {
    const fecha = document.getElementById('fecha').value;
    fetch(`/cargar/${fecha}`)
    .then(response => {
        if (!response.ok) throw new Error('Fallo al cargar los datos');
        return response.json();
    })
    .then(data => {
        const tbody = document.getElementById('clientesTable').getElementsByTagName('tbody')[0];
        tbody.innerHTML = ''; // Limpiar la tabla
        data.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    })
    .catch(error => console.error('Error al cargar los datos:', error));
}
