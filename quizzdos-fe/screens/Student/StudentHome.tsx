import Home from "../Home"

const StudentHome = ({ navigation }: IStudentHomeProps) => {
	return <Home navigation={navigation} isProfessor={false} />
}

interface IStudentHomeProps {
	navigation: any
}

export default StudentHome
