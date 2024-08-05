// Ejemplo de datos iniciales

  
let clientes = [
  { nombre: 'MARGARITAS', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SONIA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'JUAQUIN', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'luz maria', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SR WILMER', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'comercial mely', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'rosita', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'comercial jeny', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'calin', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'cecilia', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'bodega tayary', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'cielo', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ursula', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BODEGA LUZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SRA LILA ARIAS', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'yasmin', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SRA CARMEN', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SR JAIME', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MAGALY BLANCO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'YULIANA APAZA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'la esquina', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'FLOR', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MIRELLA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MUCHA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BODEGA MERY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'barrio bodega', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SRA ADA OBREGON', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'cocofri oso', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'cocapri oso lleva papa', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ANDRE yupangui', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'andre lo que lleva papa', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'indapend/gusta jesus', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'sucy', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'lurcer herrera bodega', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'TECHI', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SAMY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'RODRIGUES', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: '2 DE MAYO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CHIFA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'katty', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'SCHUTZE', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'porjy', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'bodega jaret', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'DIO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'camacho', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BEATRIS RIVERA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'maria ino', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ANITA MER ALAMEDA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'GELLEN CHAVEZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'JUAN JOSE', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ALEJANDRO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'PAMIELA CHAVEZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'TIZON (luna turquesa)', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ety', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ANI por TZON', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'YONY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'sra sonia', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'LESLY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CLARIBEL', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'rosita emolienters', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BODEGUITA MARY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'DIA RIVERA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'bodega YOCY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'DAVID FLOREZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'GUISELA ALEJANDRINA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'bodega MAVIL', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CARLOS (CHAVELA)', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'ANITA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'TIXE', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'MAMA GLORIA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'COMERCIAL DIAZ', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BODEGA LUANA (IVON)', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BODEGA CAMILA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'market gloria', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'PAULITO MULENBRU', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'yesica mariscal', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'mariscal nayit', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'DP SUMAC', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'EVA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CHARO SALAS', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CHAMORRO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'TUNKY', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'deysi', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'alvaro', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'HECTOR', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CAROLINA EGG', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'hospedaje holsen romero', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'CIENTES', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'BLANCO', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'hospedaje la pradera', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'chavitodo', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'REN MAYAMPAMPA', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'witzin', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'batica', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'walco', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
  { nombre: 'rosa ortiz', manteca: 3, frances: 6, maiz: 6, aniz: 13, yema: 3, ciabatta: 0, bagetino: 0, italiano: 0, serranito: 0, canela: 0, coliza: 0, mntcmaiz: 0, integral: 0, piso: 0, chavata: 0, total: 31, compras: 'detalle de compras marta', deudas: 'detalle de deudas marta' },
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

// Ejemplo de datos iniciales


// Función para guardar los datos en localStorage
function guardarDatos() {
  localStorage.setItem('clientes', JSON.stringify(clientes));
}

// Función para cargar los datos desde localStorage
function cargarDatos() {
  const datosGuardados = localStorage.getItem('clientes');
  if (datosGuardados) {
    clientes = JSON.parse(datosGuardados);
  }
}

// Llama a cargarDatos cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
  cargarDatos();
  actualizarTabla();
  const fechaTitulo = document.getElementById('fechaTitulo');
  const hoy = new Date().toISOString().split('T')[0];
  fechaTitulo.value = hoy;
});

// Función para actualizar la fecha
function actualizarFecha() {
  const fechaTitulo = document.getElementById('fechaTitulo');
  console.log("Fecha seleccionada: " + fechaTitulo.value);
}

// Función para mostrar detalles del cliente
function mostrarDetalles(index) {
  const cliente = clientes[index];
  document.getElementById('clienteNombre').innerText = `Cliente: ${cliente.nombre}`;
  document.getElementById('clienteNombre').setAttribute('data-index', index); // Guardar el índice
  document.getElementById('manteca').value = cliente.manteca;
  document.getElementById('frances').value = cliente.frances;
  document.getElementById('maiz').value = cliente.maiz;
  document.getElementById('aniz').value = cliente.aniz;
  document.getElementById('yema').value = cliente.yema;
  document.getElementById('ciabatta').value = cliente.ciabatta;
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
    cliente.ciabatta = parseInt(document.getElementById('ciabatta').value);
    cliente.bagetino = parseInt(document.getElementById('bagetino').value);
    cliente.italiano = parseInt(document.getElementById('italiano').value);
    cliente.serranito = parseInt(document.getElementById('serranito').value);
    cliente.canela = parseInt(document.getElementById('canela').value);
    cliente.coliza = parseInt(document.getElementById('coliza').value);
    cliente.mntcmaiz = parseInt(document.getElementById('mntcmaiz').value);
    cliente.integral = parseInt(document.getElementById('integral').value);
    cliente.piso = parseInt(document.getElementById('piso').value);
    cliente.chavata = parseInt(document.getElementById('chavata').value);
    cliente.total = cliente.manteca + cliente.frances + cliente.maiz + cliente.aniz + cliente.yema + cliente.ciabatta + cliente.bagetino + cliente.italiano + cliente.serranito + cliente.canela + cliente.coliza + cliente.mntcmaiz + cliente.integral + cliente.piso + cliente.chavata;

    actualizarTabla();
    guardarDatos();
    cerrarDetalles();
  };

  document.getElementById('clienteDetalles').style.display = 'block';
}

// Función para borrar el pedido de un cliente
function borrarPedido() {
  const clienteIndex = document.getElementById('clienteNombre').getAttribute('data-index');
  if (clienteIndex !== null) {
    const cliente = clientes[clienteIndex];
    cliente.manteca = 0;
    cliente.frances = 0;
    cliente.maiz = 0;
    cliente.aniz = 0;
    cliente.yema = 0;
    cliente.ciabatta = 0;
    cliente.bagetino = 0;
    cliente.italiano = 0;
    cliente.serranito = 0;
    cliente.canela = 0;
    cliente.coliza = 0;
    cliente.mntcmaiz = 0;
    cliente.integral = 0;
    cliente.piso = 0;
    cliente.chavata = 0;
    cliente.total = 0;

    actualizarTabla();
    guardarDatos();
    cerrarDetalles();
  }
}

// Función para cerrar el detalle del cliente
function cerrarDetalles() {
  document.getElementById('clienteDetalles').style.display = 'none';
}

// Función para actualizar la tabla
function actualizarTabla() {
  const tbody = document.querySelector('#clientesTable tbody');
  tbody.innerHTML = '';

  let totalManteca = 0;
  let totalFrances = 0;
  let totalMaiz = 0;
  let totalAniz = 0;
  let totalYema = 0;
  let totalCiabatta = 0;
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
      <td>${cliente.ciabatta}</td>
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
    totalCiabatta += cliente.ciabatta;
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
  document.getElementById('totalCiabatta').innerText = totalCiabatta;
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
// Función para guardar los datos en localStorage
function guardarDatos() {
  localStorage.setItem('clientes', JSON.stringify(clientes));
}

// Llama a guardarDatos cada vez que se modifiquen los datos
document.getElementById('editarForm').onsubmit = function(event) {
  event.preventDefault();
  cliente.manteca = parseInt(document.getElementById('manteca').value);
  cliente.frances = parseInt(document.getElementById('frances').value);
  cliente.maiz = parseInt(document.getElementById('maiz').value);
  cliente.aniz = parseInt(document.getElementById('aniz').value);
  cliente.yema= parseInt(document.getElementById('yema').value);
  cliente.ciabatta = parseInt(document.getElementById('ciabatta').value);
  cliente.bagetino = parseInt(document.getElementById('bagetino').value);
  cliente.italiano = parseInt(document.getElementById('italiano').value);
  cliente.serranito = parseInt(document.getElementById('serranito').value);
  cliente.canela = parseInt(document.getElementById('canela').value);
  cliente.coliza = parseInt(document.getElementById('coliza').value);
  cliente.mntcmaiz = parseInt(document.getElementById('mntcmaiz').value);
  cliente.integral = parseInt(document.getElementById('integral').value);
  cliente.piso = parseInt(document.getElementById('piso').value);
  cliente.chavata = parseInt(document.getElementById('chavata').value);
  cliente.total = cliente.manteca + cliente.frances + cliente.maiz + cliente.aniz + cliente.yema + cliente.ciabatta + cliente.bagetino + cliente.italiano + cliente.serranito + cliente.canela + cliente.coliza + cliente.mntcmaiz + cliente.integral + cliente.piso + cliente.chavata;

  actualizarTabla();
  guardarDatos();
  cerrarDetalles();
};
// Función para cargar los datos desde localStorage
function cargarDatos() {
  const datosGuardados = localStorage.getItem('clientes');
  if (datosGuardados) {
    clientes = JSON.parse(datosGuardados);
  }
}

// Llama a cargarDatos cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
  cargarDatos();
  actualizarTabla();
  const fechaTitulo = document.getElementById('fechaTitulo');
  const hoy = new Date().toISOString().split('T')[0];
  fechaTitulo.value = hoy;
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('formNuevoCliente').addEventListener('submit', function(event) {
      event.preventDefault();
      agregarNuevoCliente();
  });
  cargarDatos();
  actualizarTabla();
});

function agregarNuevoCliente() {
  const nombre = document.getElementById('nombre').value;
  const manteca = parseInt(document.getElementById('manteca').value);
  const frances = parseInt(document.getElementById('frances').value);
  const maiz = parseInt(document.getElementById('maiz').value);
  const aniz = parseInt(document.getElementById('aniz').value);
  const yema = parseInt(document.getElementById('yema').value);
  const ciabatta = parseInt(document.getElementById('ciabatta').value);
  const bagetino = parseInt(document.getElementById('bagetino').value);
  const italiano = parseInt(document.getElementById('italiano').value);
  const serranito = parseInt(document.getElementById('serranito').value);
  const canela = parseInt(document.getElementById('canela').value);
  const coliza = parseInt(document.getElementById('coliza').value);
  const mntcmaiz = parseInt(document.getElementById('mntcmaiz').value);
  const integral = parseInt(document.getElementById('integral').value);
  const piso = parseInt(document.getElementById('piso').value);
  const chavata = parseInt(document.getElementById('chavata').value);
  const total = manteca + frances + maiz + aniz + yema + ciabatta + bagetino + italiano + serranito + canela + coliza + mntcmaiz + integral + piso + chavata;

  const nuevoCliente = {
      nombre: nombre,
      manteca: manteca,
      frances: frances,
      maiz: maiz,
      aniz: aniz,
      yema: yema,
      ciabatta: ciabatta,
      bagetino: bagetino,
      italiano: italiano,
      serranito: serranito,
      canela: canela,
      coliza: coliza,
      mntcmaiz: mntcmaiz,
      integral: integral,
      piso: piso,
      chavata: chavata,
      total: total,
      compras: 'detalle de compras',
      deudas: 'detalle de deudas'
  };

  clientes.push(nuevoCliente);
  guardarDatos();
  actualizarTabla();
  document.getElementById('formNuevoCliente').reset();
}
