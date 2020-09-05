window.chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)"
};

config = {
    type: "line",
    data: {
        labels: [
            // array dati y
        ],
        datasets: [
            {
                label: "BTC in USD",
                backgroundColor: "#b26f10",
                borderColor: "#b26f10",
                fill: false,
                data: [
                    // array dati x
                ]
            },
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: "1 BTC in USD"
        },
        scales: {
            xAxes: [
                {
                    display: true
                }
            ],
            yAxes: [
                {
                    display: true
                    // type: 'logarithmic',
                }
            ]
        }
    }
};
$(async () => {
    var ctx = document.getElementById("grafico").getContext("2d");

    var got = await $.get("http://localhost:3000/history")//non può che essere hard-coded: il dns interno di docker non viene richiamato dal browser dellutente
    config.data.labels = Object.keys(got)
    config.data.datasets[0].data = Object.values(got)
    window.mioGrafico = new Chart(ctx, config);

});

