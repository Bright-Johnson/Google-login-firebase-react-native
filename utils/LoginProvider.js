import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { firebase } from "@react-native-firebase/auth";

import React, { useState, useEffect } from "react";
import auth from '@react-native-firebase/auth';

interface {
    user: FirebaseAuthTypes | null;
    isLoading: boolean;
}

export const LoginContext = React.createContext({});

interface Props {
    children: React.ReactNode;
}

export default function LoginProvider(props) {
    const [user, setUser] = useState<FirebaseAuthTypes | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        setIsLoading(false);
    };

    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
        return subscribe;
    }, []);

    return (
        <LoginContext.Provider value = {{user, isLoading}}>
        {props.children}
        </LoginContext.Provider>
    );
}