import styled from "styled-components/native";

export const NavbarContainer = styled.View`
    /* background: white;
    flex: 1; */

    width: 100%;
    height: 80px;
    margin: 0 auto 0 auto;
    flex-direction: row;

    background: #F27052;

    justify-content: space-around;
    align-items: center;
`;

export const TextSearch = styled.TextInput`
    width: 180px;
    height: 50px;
    padding: 10px;

    color: white;
    border: 1px solid white;
    border-radius: 10px;

    justify-content: center;
    align-items: center;
`;

export const BtnsEntrada = styled.View`
    flex-direction: row;
`;
export const BtnLogin = styled.TouchableOpacity`
    width: 100px;
    height: 50px;
    padding: 10px;

    border-right: 1px;
    border-left: 2px;
    border-bottom: 2px;
    border-top: 2px;
    border: solid white;
    border-top-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 0px;

    justify-content: center;
    align-items: center;
`;
export const BtnCadastro = styled.TouchableOpacity`
    background: #D95043;
    width: 100px;
    height: 50px;
    padding: 10px;

    border-right: 2px;
    border-left: 1px;
    border-bottom: 2px;
    border-top: 2px;
    border: solid white;
    border-top-left-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 10px;

    justify-content: center;
    align-items: center;
`;
export const Text = styled.Text`
    color: white;
`;