import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
    ButtonContainer,
} from "./styles"

const Button = ({

} ) => {

    const { navigate } = useNavigation()

    return (
        <>
            <ButtonContainer>
            </ButtonContainer>
        </>
    )
}

export default Button;