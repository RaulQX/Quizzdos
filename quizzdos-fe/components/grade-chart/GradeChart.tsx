import { Dimensions, View } from "react-native"
import { LineChart } from "react-native-chart-kit"
import { s } from "react-native-wind"
import { Colors } from "react-native/Libraries/NewAppScreen"
import Legend from "./Legend"

export interface SubjectStatistics {
	subject: string
	grades: number[]
	average: number
	color: string
}
function assignLabels(subjects: SubjectStatistics[]): string[] {
	const maxGrades = Math.max(
		...subjects.map((subject) => subject.grades.length)
	)
	const labels = Array.from({ length: maxGrades }, (_, i) => `G${i + 1}`)

	return labels
}

const chartConfig = {
	backgroundColor: "#24262d",
	backgroundGradientFrom: "#24262d",
	backgroundGradientTo: "#24262d",
	decimalPlaces: 0,
	color: () => `rgba(255, 255, 255, ${0.1})`,
	labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
	style: {
		borderRadius: 16,
	},
	propsForDots: {
		r: "6",
		strokeWidth: "2",
		stroke: "#ffffff",
	},
	barPercentage: 3,
	groupSpace: 4,
}

const GradeChart = ({ subjects }: IGradeChartProps) => {
	const screenWidth = Dimensions.get("window").width
	const labels = assignLabels(subjects)
	const data = {
		labels: labels,
		datasets: subjects.map((subject) => ({
			data: subject.grades,
			color: () => subject.color,
			strokeWidth: 2,
		})),
	}

	return (
		<View
			style={{
				backgroundColor: "#24262d",
				borderRadius: 16,
				padding: "5px",
			}}
		>
			<LineChart
				data={data}
				width={(screenWidth * 11) / 12}
				height={220}
				chartConfig={chartConfig}
				bezier
				style={{
					marginVertical: 8,
					borderRadius: 16,
				}}
			/>
			<Legend subjects={subjects} />
		</View>
	)
}

export interface IGradeChartProps {
	subjects: SubjectStatistics[]
}

export default GradeChart
