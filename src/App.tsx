import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TimeLock from "./components/TimeLock/TimeLock";

function App() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<TransactionHistory/>}/>
                    <Route path="/transactions" element={<TransactionHistory/>}/>
                    <Route path="/timeLock" element={<TimeLock/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
