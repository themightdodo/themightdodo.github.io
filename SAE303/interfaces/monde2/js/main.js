// Récupération du contexte d'affichage du canvas d'id chart
Chart.defaults.elements.line.borderWidth = 4;

console.log(data[1].usages);
console.log(data[1].prelevements);

const ctx = document.getElementById("chart");
const chart = new Chart(ctx, {
  type: "bar",
  data: {
  datasets: [{
    data: data[1].prelevements,
    label: "Volume d'eau",
    backgroundColor: [
      'rgba(255, 99, 132, 1.0)',
      'rgba(255, 159, 64, 1.0)',
      'rgba(255, 205, 86, 1.0)',
      'rgba(75, 192, 192, 1.0)',
      'rgba(54, 162, 235, 1.0)',
      'rgba(153, 102, 255, 1.0)',
      'rgba(201, 203, 207, 1.0)'
    ],
    axis: 'y',
  }],
  labels: data[1].usages,
  },
  options: {
    indexAxis: 'y',
  },
});

console.log(data[0].secteurs);
console.log(data[0].consommation);

const ctx1 = document.getElementById("chart1");
const chart1 = new Chart(ctx1, {
  type: "pie",
  data: {
    datasets: [{
      data: data[0].consommation,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(200, 134, 32)'
      ]
    }],
    labels: data[0].secteurs
  }
});

console.log(data[2].lieuxconsommation);
console.log(data[2].eaupotable);

const ctx2 = document.getElementById("chart2");
const chart2 = new Chart(ctx2, {
  type: "pie",
  data: {
    datasets: [{
      data: data[2].eaupotable,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(200, 134, 32)',
        'red',
        'gray',
        'lightgreen',
        'lightblue',
      ],
      borderColor: '#ffffff',
    }],
    labels: data[2].lieuxconsommation
  }
});



