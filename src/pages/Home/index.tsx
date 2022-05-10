import React from "react";
import Aside from "../../components/Aside";
import Body from "../../components/Body";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import {
    Container,
} from "./styles"

function Home({ navigation: { navigate } }) {
    
    return (
        <Container>
            <Header></Header>
        </Container>
    );
}

export default Home;