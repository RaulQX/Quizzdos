import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import { s } from "react-native-wind"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <View style={s`bg-gray-900 h-full`}>
            <StatusBar
                style="light"
            />
            <View style={[s`flex-1`, { marginTop: 44 }]}>
                {children}
            </View>
        </View >
    )
}

export default Layout