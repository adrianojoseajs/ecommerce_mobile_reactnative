import { useNavigation } from "@react-navigation/native"
import React from "react"
import BodyCards from "../CardsGames";
import {
    BodyContainer,
} from "./styles"

const Body = ({

} ) => {

    const { navigate } = useNavigation()

    return (
        <>
            <BodyContainer>
                <BodyCards></BodyCards>
            </BodyContainer>
        </>
    )
}

export default Body;