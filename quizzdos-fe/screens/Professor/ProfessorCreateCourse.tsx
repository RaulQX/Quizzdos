import { useState } from "react"
import { TextInput, View } from "react-native"
import { s } from "react-native-wind"
import AuthForm from "../../components/auth-form/AuthForm"
import FormTextInput from "../../components/common/FormTextInput"
import HeaderTitle from "../../components/common/Header"
import NavBar from "../../components/layouts/navigation/NavBar"

const CreateCourse = ({ navigation }: ICreateCourseProps) => {
	const [courseName, setCourseName] = useState("")
	const [shortTitle, setShortTitle] = useState("")
	const [courseSummary, setCourseSummary] = useState("")
	return (
		<NavBar navigation={navigation} selected="ProfessorHome">
			<View style={s`flex`}>
				<HeaderTitle title="Courses" />
				<View style={s`my-10`}>
					<AuthForm
						title="Create Course"
						buttonTitle="Create"
						onSubmit={() => {}}
						navigation={navigation}
						navigateTo="ProfessorHome"
					>
						<View style={s`my-2`} />
						<FormTextInput
							placeholder="Course Name"
							value={courseName}
							onChangeText={(text) => setCourseName(text)}
						/>
						<View style={s`my-2`} />
						<FormTextInput
							placeholder="Short Title"
							value={shortTitle}
							onChangeText={(text) => setShortTitle(text)}
						/>
						<View style={s`my-2`} />
						<FormTextInput
							placeholder="Course Summary"
							value={courseSummary}
							onChangeText={(text) => setCourseSummary(text)}
						/>
					</AuthForm>
				</View>
			</View>
		</NavBar>
	)
}

interface ICreateCourseProps {
	navigation: any
}

export default CreateCourse
