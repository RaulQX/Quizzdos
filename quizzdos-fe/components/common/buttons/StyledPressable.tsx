import React, { useState } from "react"
import { Pressable, StyleProp } from "react-native"

interface StyledPressableProps extends React.ComponentProps<typeof Pressable> {
    stylePressed?: StyleProp<any>
    styleSelected?: StyleProp<any>
    children?: React.ReactNode
}

const StyledPressable = ({ style, stylePressed, styleSelected, children }: StyledPressableProps) => {
    const [pressed, setPressed] = useState(false)
    const [selected, setSelected] = useState(false)

    const onPressIn = () => {
        setPressed(true)
    }

    const onPressOut = () => {
        setPressed(false)
        setSelected(!selected)
    }

    return (
        <Pressable style={[style,
            pressed && stylePressed,
            selected && styleSelected
        ]}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
        >
            {children}
        </Pressable >
    )
}

export default StyledPressable