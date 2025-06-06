function generateBar(i, startValue, target) {
	const step = (i % 20) / 1000;
	const base = i + startValue;
	target.open = base * (1 - step);
	target.high = base * (1 + 2 * step);
	target.low = base * (1 - 2 * step);
	target.close = base * (1 + step);
}

function generateData(startValue) {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 5000; ++i) {
		const item = {
			time: time.getTime() / 1000,
		};
		time.setUTCDate(time.getUTCDate() + 1);

		generateBar(i, startValue, item);
		res.push(item);
	}
	return res;
}

function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container, {
		timeScale: {
			minBarSpacing: 0.001,
		},
		layout: { attributionLogo: false },
	});

	const mainSeries = chart.addSeries(LightweightCharts.BarSeries);

	const data = generateData(0);
	mainSeries.setData(data);

	chart.timeScale().setVisibleLogicalRange({ from: 0, to: data.length });

	return new Promise(resolve => {
		setTimeout(() => {
			chart.timeScale().applyOptions({
				barSpacing: 20,
				minBarSpacing: 10,
			});

			resolve();
		}, 200);
	});
}
