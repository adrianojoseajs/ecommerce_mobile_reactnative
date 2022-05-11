import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    /* background: white;
    flex: 1; */

    width: 100%;
    height: 100px;
    margin: 0 auto 0 auto;
    flex-direction: row;

    background: #D95043;

    justify-content: space-around;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 60px;
    height: 60px;
`;

export const Title = styled.Text`
    font-size: 42px;
    color: #ffffff;
`;