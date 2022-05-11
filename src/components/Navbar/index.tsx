import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
    NavbarContainer,
    Btn,
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
                        <Btn><Text>Buscar</Text></Btn>
                        <BtnsEntrada>
                        <BtnLogin><Text>Login</Text></BtnLogin>
                        <BtnCadastro><Text>Cadastro</Text></BtnCadastro>
                        </BtnsEntrada>
            </NavbarContainer>
        </>
    )
}

export default Navbar;