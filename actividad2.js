const actividad2 = () => {
  const mounth = prompt('Ingrese el número de un mes.');

  const seasons = {
    1: 'Invierno',
    2: 'Invierno',
    3: 'Primavera',
    4: 'Primavera',
    5: 'Primavera',
    6: 'Verano',
    7: 'Verano',
    8: 'Verano',
    9: 'Otoño',
    10: 'Otoño',
    11: 'Otoño',
    12: 'Invierno'
  };

  if (mounth > 12 || mounth < 1 || /[a-zA-Z]/.test(mounth)) {
    return alert('Por favor ingrese datos vÃ¡lidos');
  }

  alert(`Es ${seasons[mounth.replace(' ', '')]}`);

  alert('Bryan Guillermo Arévalo - 23002816');
};

actividad2();
