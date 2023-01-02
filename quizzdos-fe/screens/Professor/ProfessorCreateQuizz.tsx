import { useState } from "react"
import { View } from "react-native"
import { s } from "react-native-wind"
import AuthForm from "../../components/auth-form/AuthForm"
import FormTextInput from "../../components/common/FormTextInput"
import HeaderTitle from "../../components/common/Header"
import NavBar from "../../components/layouts/navigation/NavBar"

const CreateQuizz = ({ navigation }: ICreateQuizzProps) => {
	const [quizzName, setQuizzName] = useState("")
	const [duration, setDuration] = useState("")

	return (
		<NavBar navigation={navigation} selected={"ProfessorHome"}>
			<HeaderTitle title="Quizzes" />
			<AuthForm
				title="Create Quizz"
				buttonTitle="Create"
				onSubmit={() => {}}
				navigation={navigation}
				navigateTo="ProfessorHome"
			>
				<View style={s`h-4`} />
				<FormTextInput
					placeholder="Quizz Name"
					autoCapitalize="words"
					value={quizzName}
					onChangeText={(text) => setQuizzName(text)}
				/>
				<View style={s`h-4`} />
				<FormTextInput
					placeholder="Duration"
					keyboardType="number-pad"
					value={duration}
					onChangeText={(text) => setDuration(text)}
				/>
				<View style={s`h-4`} />
			</AuthForm>
		</NavBar>
	)
}

interface ICreateQuizzProps {
	navigation: any
}

export default CreateQuizz
