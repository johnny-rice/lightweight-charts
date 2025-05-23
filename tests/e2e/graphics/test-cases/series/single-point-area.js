function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container, {
		timeScale: {
			rightOffset: 7,
			barSpacing: 50,
		},
		layout: { attributionLogo: false },
	});

	const mainSeries = chart.addSeries(LightweightCharts.AreaSeries, {
		lineWidth: 1,
		color: '#ff0000',
		priceLineVisible: false,
		lastValueVisible: false,
		autoscaleInfoProvider: () => ({
			priceRange: {
				minValue: 0,
				maxValue: 200,
			},
		}),
	});

	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0)).getTime() / 1000;
	mainSeries.setData([{ time: time, value: 100 }]);
}
