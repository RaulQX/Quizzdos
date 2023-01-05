import { View, Text } from "react-native"
import { s } from "react-native-wind"
import { IGradeChartProps } from "./GradeChart"

const Legend = ({ subjects }: IGradeChartProps) => {
	return (
		<View style={s`flex flex-col self-end mr-4`}>
			{subjects.map((subject) => (
				<View
					style={s`flex flex-row items-center`}
					key={subject.subject}
				>
					<View
						style={[
							s`w-4 h-4 rounded-full mx-2 my-1`,
							{ backgroundColor: subject.color },
						]}
					/>
					<Text style={s`text-white`}>{subject.subject}</Text>
				</View>
			))}
		</View>
	)
}

export default Legend
