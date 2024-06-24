// Ejemplo de datos iniciales
const clientes = [
  { nombre: 'JARET', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'DIO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CAMACHO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'YOBANA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'RODRIGUEZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CHIFA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'NINFA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'EDSON', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'JASMIM', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SONIA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'JUAQUIN', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'WILMER', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ROSITA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'VARELY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SR MERY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'AILA ARIAS', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CIELO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CMR JENNY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CALIN', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CMR MELY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BODEGA LUZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BODEGA TAYARI', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SRA CECILIA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SRA CARMEN', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SRA PATTY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SR JAIME', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SRA MAGALY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'LURDEZ ERRERA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MARIA LINO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BEATRIZ RIVERA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'GINO AYALA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SEMUTRE', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SAMY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BODEGA NAVIL', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CARLOS CHAVELA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ALEJANDRINA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'DAVID FLOREZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'YOCY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'GUSTOBSON', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'TECHI', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SUSY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MAMA GLORIA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SR DIAZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'TIXE', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ANITA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ALEJANDRO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'JUAN JOSE', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'PAMELA CHAVEZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'GELEN CHAVEZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'IRMA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BETSY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'YONY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'LESLY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MARICRUZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BODEGUITA MARY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'TIZON LUNA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ANY (TIZON)', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CLARIBEL', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BODEGA MERY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ERROR', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'DEYSY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ANITA ALAMEDA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MIRELLA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MUCHA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'FLOR', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ESQUINA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MARGARITA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BODEGA JOSE', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'IRIS', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'PANDURO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'TITO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SRA OBREGON', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BARRIO BODEGA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'OSORIO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CAMILA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BODEGA LUANA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'JUGUERIA JANET', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ANDRE YUPANQUI', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'AMES(MUYENBRUK)', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CHARO SALAS', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CHAMORRO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CHAVITODO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BLANCO(DESAYUNOS)', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'HECTOR DESAYUNOS', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ALVARO JUGUERIA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'NAYIT(MARISCAL)', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'EVA(CARRETA)', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'WILMER(DESAYUNO)', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'PORKY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ROSITA(EMOLIENTE)', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'HOSPEDAJE PRADERA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'HOSPEDAJE CAROLINA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'HOSPEDAJE TUNKY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'AGATA(PRECOCIDOS)', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CLIENTES', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, punta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },

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
