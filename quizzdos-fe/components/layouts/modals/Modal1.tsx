import { Modal, View } from "react-native"
import { s } from "react-native-wind"

interface Modal1Props {
    children: React.ReactNode
    visible: boolean
    onRequestClose: () => void
}

const Modal1 = ({ children, visible, onRequestClose }: Modal1Props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <View style={[s`h-full flex flex-col justify-center items-center`, { backgroundColor: '#000000dd' }]}>
                <View style={s`px-8 py-6 bg-gray-800 rounded-3xl`}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

export default Modal1