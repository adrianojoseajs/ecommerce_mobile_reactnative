import { useNavigation } from "@react-navigation/native"
import React from "react"
import logo_ecommerce from "../../assets/logo_ecommerce.jpg";
import {
    HeaderContainer, 
    Logo,
    Title,
} from "./styles"

const Header = ({

} ) => {

    const { navigate } = useNavigation()

    return (
        <>
            <HeaderContainer>
                <Logo source={logo_ecommerce}
            />
                    <Title>Slim</Title>
            </HeaderContainer>
        </>
    )
}

export default Header;