import HeaderTitle from "../../components/common/Header"
import NavBar from "../../components/layouts/NavLayout"
import { Home } from "../.Screens"

const ProfessorHome = ({ navigation }: IProfessorHomeProps) => {
	return <Home navigation={navigation} isProfessor={true} />
}
interface IProfessorHomeProps {
	navigation: any
}
export default ProfessorHome
