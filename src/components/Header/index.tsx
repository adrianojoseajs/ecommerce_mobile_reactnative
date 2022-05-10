import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
    HeaderContainer, 
    Navbar,
    Logo,
    Title,
} from "./styles"

const Header = ({

} ) => {

    const { navigate } = useNavigation()

    return (
        <>
            <HeaderContainer>
                <Navbar>
                    <Logo></Logo>
                    <Title></Title>
                </Navbar>
            </HeaderContainer>
        </>
    )
}

export default Header;