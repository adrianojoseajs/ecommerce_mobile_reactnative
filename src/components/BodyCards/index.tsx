import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
    BodyCardsContainer,
    // ScrollView,
    Cards,
    Title,
    Img,
    Description,
    Price,
} from "./styles"

const BodyCards = ({

} ) => {

    const { navigate } = useNavigation()

    return (
        <>
            <BodyCardsContainer>
                {/* <ScrollView> */}
                    <Cards>
                        <Title></Title>
                        <Img />
                        <Description></Description>
                        <Price></Price>
                    </Cards>

                    <Cards>
                        <Title></Title>
                        <Img />
                        <Description></Description>
                        <Price></Price>
                    </Cards>
                {/* </ScrollView> */}
            </BodyCardsContainer>
        </>
    )
}

export default BodyCards;