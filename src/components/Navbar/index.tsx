import { useNavigation } from "@react-navigation/native"
import React from "react"
import { TextInput } from "react-native"
import {
    NavbarContainer,
    TextSearch,
    BtnsEntrada,
    BtnLogin,
    BtnCadastro,
    Text,
} from "./styles"

const Navbar = ({

} ) => {

    const { navigate } = useNavigation()

    return (
        <>
            <NavbarContainer>
                        <TextSearch>Buscar...</TextSearch>
                        <BtnsEntrada>
                        <BtnLogin><Text>Login</Text></BtnLogin>
                        <BtnCadastro><Text>Cadastro</Text></BtnCadastro>
                        </BtnsEntrada>
            </NavbarContainer>
        </>
    )
}

export default Navbar;