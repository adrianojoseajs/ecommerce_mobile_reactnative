import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
    AsideContainer,
} from "./styles"

const Aside = ({

} ) => {

    const { navigate } = useNavigation()

    return (
        <>
            <AsideContainer></AsideContainer>
        </>
    )
}

export default Aside;