import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardsData } from "./CardsData";
import { Datajson } from "./Datajson";
import { Login } from "./Login";
import { Nav } from "./Nav";



export const Landings=()=>{
    return(
        <React.Fragment>
            <BrowserRouter>
            {/* <Nav/> */}
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/datajson" element={<Datajson/>} />
                <Route path="/cardsdata" element={<CardsData/>} />
                <Route path="/nav" element={<Nav/>} />
            </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}