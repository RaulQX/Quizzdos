import { createRef, useState } from "react"
import { Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { s } from "react-native-wind"
import { AcademicIcon, ClipboardIcon, PencilIcon, PlusCircleIcon } from "../../assets/icons/outline"
import HeaderTitle from "../../components/common/Header"
import Layout from "../../components/layouts/Layout"
import Modal1 from "../../components/layouts/modals/Modal1"


interface EditCourseProps {
	navigation: any
}

const EditCourse = ({ navigation }: EditCourseProps) => {
	const [course, setCourse] = useState(dummyData)

	// create section modal
	const [sectionModalVisible, setSectionModalVisible] = useState(false)
	const [sectionName, setSectionName] = useState('')
	const [sectionSummary, setSectionSummary] = useState('')
	const summaryRef = createRef<TextInput>()

	const onPressNewSection = () => {
		setSectionModalVisible(true)
	}

	const onPressSaveNewSection = () => {
		if (sectionName.length === 0) return

		const newSection = {
			name: sectionName,
			summary: sectionSummary,
			quizzes: []
		}

		// setCourse([
		// 	...course,
		// 	newSection
		// ])
		setSectionModalVisible(false)
	}

	// create quiz modal
	const [quizModalVisible, setQuizModalVisible] = useState(false)
	const [sectionIndex, setSectionIndex] = useState(0)
	const [selectedType, setSelectedType] = useState<'task' | 'quiz' | 'exam' | ''>('')
	const [quizName, setQuizName] = useState('')

	const onPressNewQuiz = (index: number) => {
		setQuizModalVisible(true)
		setSectionIndex(index)
	}

	const onPressSaveNewQuiz = () => {
		if (quizName.length === 0) return
		if (selectedType.length === 0) return

		const newQuiz = {
			name: quizName,
			type: selectedType
		}

		const newSection = course[sectionIndex]
		newSection.quizzes.push(newQuiz)

		setCourse([...course])

		setQuizModalVisible(false)
	}

	return (
		<Layout>
			<Modal1 visible={sectionModalVisible} onRequestClose={() => setSectionModalVisible(false)}>
				<View style={s`flex flex-col align-stretch`}>
					<TextInput
						style={s`py-2 px-3 w-64 border-b-2 border-indigo-300 my-2 text-white`}
						autoCapitalize="words"
						placeholderTextColor="gray"
						placeholder="Section Name"
						maxLength={50}
						value={sectionName}
						onChangeText={setSectionName}
						onSubmitEditing={() => summaryRef.current?.focus()}
					/>
					<TextInput
						style={s`py-2 px-3 w-full border-b-2 border-indigo-300 my-2 text-white`}
						placeholderTextColor="gray"
						placeholder="Section Summary"
						multiline={true}
						numberOfLines={4}
						maxLength={200}
						value={sectionSummary}
						onChangeText={setSectionSummary}
						ref={summaryRef}
					/>

					<Pressable style={s`rounded-xl py-2 px-4 flex flex-row justify-center w-full bg-indigo-300 mt-4`}
						onPress={() => onPressSaveNewSection()}
					>
						<Text style={s`text-white font-bold text-xl`}>Save</Text>
					</Pressable>
				</View>
			</Modal1>

			<Modal1 visible={quizModalVisible} onRequestClose={() => setQuizModalVisible(false)}>
				<View style={s`flex flex-col align-stretch`}>
					<View style={s`flex flex-row justify-around my-2 `}>
						<Pressable style={s`rounded-full py-3 px-3 ${selectedType == 'exam' ? 'text-gray-900 bg-green-400' : 'bg-gray-900 text-green-400'}`}
							onPress={() => setSelectedType('task')}
						>
							<ClipboardIcon style={s`w-8 h-8`} />
						</Pressable>
						<Pressable style={s`rounded-full py-3 px-3 ${selectedType == 'exam' ? 'text-gray-900 bg-orange-400' : 'bg-gray-900 text-orange-400'}`}
							onPress={() => setSelectedType('quiz')}
						>
							<PencilIcon style={s`w-8 h-8`} />
						</Pressable>
						<Pressable style={s`rounded-full py-3 px-3 ${selectedType == 'exam' ? 'text-gray-900 bg-red-400' : 'bg-gray-900 text-red-400'}`}
							onPress={() => setSelectedType('exam')}
						>
							<AcademicIcon style={s`w-8 h-8`} />
						</Pressable>
					</View>
					<TextInput
						style={s`py-2 px-3 w-64 border-b-2 border-indigo-300 my-2 text-white`}
						autoCapitalize="words"
						placeholderTextColor="gray"
						placeholder="Quiz Name"
						maxLength={50}
						value={quizName}
						onChangeText={setQuizName}
					/>

					<Pressable style={s`rounded-xl py-2 px-4 flex flex-row justify-center w-full bg-indigo-300 mt-4`}
						onPress={() => onPressSaveNewQuiz()}
					>
						<Text style={s`text-white font-bold text-xl`}>Save</Text>
					</Pressable>
				</View>
			</Modal1>

			<HeaderTitle title="Course" />
			<View style={s`px-4 py-2 flex-1`}>
				<ScrollView style={s`flex flex-col`}>
					{course.map((section, key) => (
						<EditCourseSection index={key} key={key} {...section} onCreateQuiz={onPressNewQuiz} />
					))}
					<Pressable style={s`rounded-xl mb-4 py-2 px-4 flex flex-row items-center w-full bg-gray-700`}
						onPress={onPressNewSection}
					>
						<PlusCircleIcon style={s`w-10 h-10 text-white`} />
						<Text style={s`px-4 text-white font-bold text-xl`}>New Section</Text>
					</Pressable>
				</ScrollView>
				<Pressable style={s`rounded-xl py-2 px-4 flex flex-row justify-center w-full bg-indigo-300`}>
					<Text style={s`text-white font-bold text-xl`}>Save</Text>
				</Pressable>
			</View>
		</Layout >
	)
}

export default EditCourse

interface EditCourseSectionProps {
	index: number
	name: string
	summary: string
	quizzes: EditCourseQuizProps[]
	onCreateQuiz: (index: number) => void
}

const EditCourseSection = ({ index, name, summary, quizzes, onCreateQuiz }: EditCourseSectionProps) => {
	const [expanded, setExpanded] = useState(true)

	return (
		<View style={s`my-2 bg-gray-800 flex flex-col rounded-xl overflow-hidden`}>
			<Pressable style={s`flex flex-col px-4 py-1 bg-gray-700`}
				onPress={() => setExpanded(!expanded)}
			>
				<Text style={s`text-white font-bold text-xl`}>
					{name}
				</Text>
				<Text style={s`text-white`}>
					{summary}
				</Text>
			</Pressable>
			{expanded && <View style={s`flex flex-col px-4 py-2`}>
				{quizzes.map((quiz, key) => (
					<EditCourseQuiz key={key} {...quiz} />
				))}
				<Pressable style={s`flex flex-row justify-center w-full`}
					onPress={() => onCreateQuiz(index)}
				>
					<PlusCircleIcon style={s`w-10 h-10 text-white`} />
				</Pressable>
			</View>}
		</View>
	)
}

interface EditCourseQuizProps {
	type: "task" | "quiz" | "exam"
	name: string
}

const EditCourseQuiz = ({ type, name }: EditCourseQuizProps) => {
	return (
		<View style={s`flex flex-row items-center my-2`}>
			{{
				task: (<ClipboardIcon style={s`w-8 text-green-400`} />),
				quiz: (<PencilIcon style={s`w-8 text-orange-400`} />),
				exam: (<AcademicIcon style={s`w-8 text-red-400`} />),
			}[type]}
			<Text style={s`text-white font-bold text-xl px-2`}>
				{name}
			</Text>
		</View>
	)
}

const dummyData = [
	{
		name: "Section 1",
		summary: "This is the summary of the section",
		quizzes: [{
			type: "task",
			name: "Task 1"
		}, {
			type: "quiz",
			name: "Quiz 1"
		}, {
			type: "exam",
			name: "Exam 1"
		}]
	},
	{
		name: "Section 2",
		summary: "This is the summary of the section",
		quizzes: [{
			type: "task",
			name: "Task 1"
		}, {
			type: "quiz",
			name: "Quiz 1"
		}, {
			type: "exam",
			name: "Exam 1"
		}]
	},
	{
		name: "Section 2",
		summary: "This is the summary of the section",
		quizzes: [{
			type: "task",
			name: "Task 1"
		}, {
			type: "quiz",
			name: "Quiz 1"
		}, {
			type: "exam",
			name: "Exam 1"
		}]
	},
	{
		name: "Section 2",
		summary: "This is the summary of the section",
		quizzes: [{
			type: "task",
			name: "Task 1"
		}, {
			type: "quiz",
			name: "Quiz 1"
		}, {
			type: "exam",
			name: "Exam 1"
		}]
	}
]