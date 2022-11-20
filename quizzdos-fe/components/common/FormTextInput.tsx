import React from "react"
import { TextInput, KeyboardTypeOptions } from "react-native"
import { s } from "react-native-wind"

type AutoCompleteValue = "email" | "password" | "username" | "name" | "tel" | "off"

interface FormTextInputProps {
    value: string
    placeholder: string
    autoComplete?: AutoCompleteValue
    secureTextEntry?: boolean
    autoCapitalize?: "none" | "sentences" | "words" | "characters"
    keyboardType?: KeyboardTypeOptions
    onChangeText: (text: string) => void
}

const FormTextInput = (props: FormTextInputProps) => {
    return (
        <TextInput
            value={props.value}
            placeholder={props.placeholder}
            autoComplete={props.autoComplete}
            onChangeText={props.onChangeText}
            placeholderTextColor="white"
            secureTextEntry={props.secureTextEntry}
            autoCapitalize={props.autoCapitalize}
            keyboardType={props.keyboardType}
            style={s`border-b border-indigo-400 py-3 mb-4 text-right text-white font-semibold`}
        />
    )
}
export default FormTextInput