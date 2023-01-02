import React from "react"
import { TextInput, KeyboardTypeOptions } from "react-native"
import { s } from "react-native-wind"

type AutoCompleteValue =
	| "email"
	| "password"
	| "username"
	| "name"
	| "tel"
	| "off"

interface FormTextInputProps {
	value: string
	placeholder: string
	autoComplete?: AutoCompleteValue
	secureTextEntry?: boolean
	autoCapitalize?: "none" | "sentences" | "words" | "characters"
	keyboardType?: KeyboardTypeOptions
	direction?: "left" | "center" | "right"
	onChangeText: (text: string) => void
}

const FormTextInput = (props: FormTextInputProps) => {
	const direction = props.direction || "right"

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
			style={s`border-b border-indigo-400 py-3 mb-4 text-${direction} text-white font-semibold w-full px-1`}
		/>
	)
}
export default FormTextInput
