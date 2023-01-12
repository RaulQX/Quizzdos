import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import { s } from "react-native-wind"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <View style={s`bg-gray-900 h-full pb-4 pt-11`}>
            <StatusBar
                style="light"
            />
            <View style={s`h-full`}>
                {children}
            </View>
        </View >
    )
}

export default Layout