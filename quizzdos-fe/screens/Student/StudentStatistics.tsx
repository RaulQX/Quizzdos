import { Dimensions, View, Text, ScrollView } from "react-native"
import HeaderTitle from "../../components/common/Header"
import NavBar from "../../components/layouts/navigation/NavBar"
import { s } from "react-native-wind"
import { Colors } from "../../Constants/Constants"
import GradeChart, {
	SubjectStatistics,
} from "../../components/grade-chart/GradeChart"
import Legend from "../../components/grade-chart/Legend"
import GradesList from "../../components/grade-chart/GradesList"

const subjects: SubjectStatistics[] = [
	{
		subject: "Math",
		grades: [7, 8, 10, 8.5, 9, 9],
		average: 8.58,
		color: Colors.magenta,
	},
	{
		subject: "English",
		grades: [4, 5, 6, 2.5, 1],
		average: 3.7,
		color: Colors.armyGreen,
	},
	{
		subject: "History",
		grades: [8, 9, 8, 7],
		average: 8,
		color: Colors.babyBlue,
	},
]

const StudentStatistics = ({ navigation }: IStudentStatisticsProps) => {
	return (
		<NavBar navigation={navigation} selected="Account">
			<ScrollView style={s`bg-Coolgray-800`}>
				<HeaderTitle title="Statistics" />

				<View style={s`flex items-center w-11/12 self-center`}>
					<Text style={s`text-3xl text-white text-center my-4`}>
						Grades
					</Text>
					<GradeChart subjects={subjects} />
				</View>
				<GradesList subjects={subjects} />
			</ScrollView>
		</NavBar>
	)
}

interface IStudentStatisticsProps {
	navigation: any
}

export default StudentStatistics
