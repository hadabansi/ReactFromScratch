import { createContext } from "react";

const userContext=createContext('Logistic')

const UserProvider=userContext.Provider
const UserConsumer=userContext.Consumer

export {UserProvider,UserConsumer}