import { View, Text } from "react-native"
import { s } from "react-native-wind"
import { IGradeChartProps } from "./GradeChart"

const GradesList = ({ subjects }: IGradeChartProps) => {
	return (
		<View style={s`flex flex-row justify-center flex-wrap mt-8`}>
			{subjects.map((subject) => (
				<View
					style={s`flex flex-col items-center mx-4`}
					key={subject.subject}
				>
					<Text style={[s`mb-2`, { color: subject.color }]}>
						{subject.subject}
					</Text>
					{subject.grades.map((grade) => (
						<View>
							<Text
								style={s`text-${
									grade < 5 ? "red-500" : "white"
								}`}
								key={grade}
							>
								{grade}
							</Text>
						</View>
					))}
					<View style={s`border-t border-white w-8 mt-2`}>
						<Text
							style={s`text-${
								subject.average < 5 ? "red" : "green"
							}-400 text-center`}
						>
							{subject.average}
						</Text>
					</View>
				</View>
			))}
		</View>
	)
}

export default GradesList
