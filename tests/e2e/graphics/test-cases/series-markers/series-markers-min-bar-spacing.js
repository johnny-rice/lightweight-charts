function generateData() {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 500; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: i,
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}
	return res;
}

function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container, { layout: { attributionLogo: false } });

	const mainSeries = chart.addSeries(LightweightCharts.LineSeries);

	const data = generateData();
	mainSeries.setData(data);

	const markers = [
		{ time: data[data.length - 40].time, position: 'inBar', color: 'red', shape: 'square' },
		{ time: data[data.length - 30].time, position: 'inBar', color: 'red', shape: 'circle' },
		{ time: data[data.length - 20].time, position: 'inBar', color: 'red', shape: 'arrowDown' },
		{ time: data[data.length - 10].time, position: 'inBar', color: 'red', shape: 'arrowUp' },
	];

	LightweightCharts.createSeriesMarkers(
		mainSeries,
		markers
	);
	chart.applyOptions({
		timeScale: {
			barSpacing: 0.01, // will be corrected to min available bar spacing
		},
	});
}
