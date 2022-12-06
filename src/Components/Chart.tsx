import { isDarkAtom } from "../atom";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useRecoilValue } from "recoil";
interface ChartNum {
	possible: number;
	labels: string;
}
function Chart({ possible, labels }: ChartNum) {
	const isDark = useRecoilValue(isDarkAtom);
	const [state, setState] = useState({
		series: [possible],

		options: {
			labels: [labels],
			chart: {
				height: 350,
				type: "radialBar",
			},
			plotOptions: {
				radialBar: {
					hollow: {
						margin: 0,
						size: "70%",
						background: "#fff",
						image: undefined,
						imageOffsetX: 0,
						imageOffsetY: 0,
						position: "front",
						dropShadow: {
							enabled: true,
							top: 3,
							left: 0,
							blur: 4,
							opacity: 0.24,
						},
					},
					track: {
						background: "#fff",
						strokeWidth: "67%",
						margin: 0,
						dropShadow: {
							enabled: true,
							top: -3,
							left: 0,
							blur: 4,
							opacity: 0.35,
						},
					},

					dataLabels: {
						show: true,
						name: {
							offsetY: -10,
							show: true,
							color: "#888",
							fontSize: "17px",
						},
						value: {
							formatter: function (val: any) {
								return parseInt(val);
							},
							color: "blue",
							fontSize: "26px",
							show: true,
						},
					},
				},
			},
			fill: {
				type: "gradient",
				gradient: {
					shade: "dark",
					type: "horizontal",
					shadeIntensity: 0.5,
					gradientToColors: ["#ABE5A1"],
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 100],
				},
			},
			stroke: {
				lineCap: "round",
			},
		},
	});

	return (
		<>
			{
				<ReactApexChart
					options={state.options as any}
					series={state.series}
					type="radialBar"
					width={135}
					height={180}
				/>
			}
		</>
	);
}

export default Chart;
