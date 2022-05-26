import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

var name = "홍길동";
// var message = name + '님 환영합니다.'
var message = `${name}님 환영합니다.`;

// var getMessage = (name: string) => `${name}님 환영합니다.`;

// getMessage('홍길동')
// var getMessage = (str: TemplateStringsArray) => `${str[0]}님 환영합니다.`;

// getMessage`홍길동`

interface ChartNum {
	possible: number;
	labels: string;
}
function Chart({ possible, labels }: ChartNum) {
	const [state, setState] = useState({
		series: [possible],

		options: {
			chart: {
				height: 250,
				type: "radialBar",
				foreColor: "#fff",
			},
			plotOptions: {
				radialBar: {
					hollow: {
						size: "50%",
					},
				},
			},
			labels: [labels],
		},
	});
	return (
		<>
			{
				<ReactApexChart
					options={state.options}
					series={state.series}
					type="radialBar"
					width={300}
					height={200}
				/>
			}
		</>
	);
}

export default Chart;
