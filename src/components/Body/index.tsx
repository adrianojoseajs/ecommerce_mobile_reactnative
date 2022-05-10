import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
    BodyContainer,
} from "./styles"

const Body = ({

} ) => {

    const { navigate } = useNavigation()

    return (
        <>
            <BodyContainer></BodyContainer>
        </>
    )
}

export default Body;