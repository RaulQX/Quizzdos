import { TextInput, View, Text } from "react-native"
import { s } from "react-native-wind"
import QuestionLayout from "./QuestionLayout"

interface QuestionWriteProps {
    question: string
}

const QuestionWrite = ({ question }: QuestionWriteProps) => {
    return (
        <QuestionLayout question={question}>
            <TextInput
                style={s`border-2 rounded-xl border-coolGray-500 px-4 py-2 my-2 bg-coolGray-700 text-white`}
                placeholder="Write your answer here"
                placeholderTextColor="gray"
                multiline={true}
                numberOfLines={8}
            />
        </QuestionLayout>
    )
}

export default QuestionWrite