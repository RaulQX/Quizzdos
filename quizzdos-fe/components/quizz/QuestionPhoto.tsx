import QuestionLayout from "./QuestionLayout"
import { Camera, CameraType } from "expo-camera"

interface QuestiopnPhotoProps {
    question: string
}

const QuestionPhoto = ({ question }: QuestiopnPhotoProps) => {
    const [permission, setPermission] = Camera.useCameraPermissions()

    return (
        <QuestionLayout question={question}>
            <Camera type={CameraType.back} />
        </QuestionLayout>
    )
}

export default QuestionPhoto