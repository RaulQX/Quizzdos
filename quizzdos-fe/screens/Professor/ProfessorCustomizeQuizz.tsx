import { useState } from "react"
import { ScrollView, View, Text, Image } from "react-native"
import { s } from "react-native-wind"
import ButtonImportant from "../../components/common/buttons/ButtonImportant"
import FormTextInput from "../../components/common/FormTextInput"
import HeaderTitle from "../../components/common/Header"
import Pagination from "../../components/common/Pagination"
import NavBar from "../../components/layouts/NavLayout"

const CustomizeQuizz = ({ navigation, route }: ICustomizeQuizzProps) => {
	// const {quizzId, quizzName, duration} = route.params
	const [score, setScore] = useState("")
	const [questionTitle, setQuestionTitle] = useState("")
	const [questionImage, setQuestionImage] = useState("")
	const [questionAnswers, setQuestionAnswer] = useState<string[]>([])
	const [questionOptions, setQuestionOptions] = useState<string[]>([])

	return (
		<NavBar navigation={navigation} selected={"ProfessorHome"}>
			<HeaderTitle title="Quizz Name" />
			<ScrollView style={s`flex flex-col px-4`}>
				<View style={s`flex flex-col justify-between`}>
					<View style={s`flex flex-row justify-between`}>
						<View style={s`flex w-1/4`}>
							<FormTextInput
								placeholder="Score"
								value={score}
								keyboardType="number-pad"
								onChangeText={(text) => {
									setScore(text)
								}}
							/>
						</View>
						<View style={s`flex flex-col bg-red w-1/4 `}>
							<ButtonImportant
								size="small"
								text="Save"
								onPress={() => { }}
							/>
							<ButtonImportant
								size="small"
								text="Add Image"
								onPress={() => {
									setQuestionImage(
										"https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png"
									)
								}}
							/>
						</View>
					</View>
					<View style={s`mt-4 w-3/4 self-center items-center`}>
						<FormTextInput
							placeholder="Question"
							value={questionTitle}
							onChangeText={(text) => {
								setQuestionTitle(text)
							}}
							direction="center"
						/>
						<Text style={s`text-1xl text-white text-center`}>
							{questionTitle}
						</Text>
					</View>
					<View style={s`w-full items-center my-4`}>
						{questionImage !== "" && (
							<Image
								source={{ uri: questionImage }}
								style={s`w-64 h-64`}
							/>
						)}
					</View>
				</View>
			</ScrollView>
			<Pagination pages={9} index={1} setIndex={() => { }} />
		</NavBar>
	)
}

interface ICustomizeQuizzProps {
	navigation: any
	route: any
}

export default CustomizeQuizz
