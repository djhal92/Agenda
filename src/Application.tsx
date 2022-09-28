import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import AuthRoute from './components/AuthRoute';
import Aanmeld from './pages/Aanmeld';
import Afmeld from './pages/Afmeld';

initializeApp(config.firebaseConfig);

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AuthRoute>
                            <HomePage />
                        </AuthRoute>
                    }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/aanmeld" element={<Aanmeld />} />
                <Route path="/afmeld" element={<Afmeld />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
