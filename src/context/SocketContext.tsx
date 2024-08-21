// import { createContext, useContext, useState, useEffect } from "react";
// import { useAuth } from '../context/AuthContext'
// import { ProviderProps } from "../types";
// import { SocketHookProps } from "../types";
// import { io, Socket } from 'socket.io-client'







// const SocketContext = createContext({})

// export function useSocketContext(): SocketHookProps {
//     const context = useContext(SocketContext);
//     if (!context) {
//         throw new Error("useSocketContext must be used within a SocketContextProvider");
//     }
//     return context;
// }


// export const SocketContextProvider = ({ children }: ProviderProps) => {
//     const [socket, setSocket] = useState<null | Socket>(null)
//     const [onlineUsers, setOnlineUsers] = useState<Socket[]>([])
//     const { user } = useAuth();


//     useEffect((): any => {
//         if (user) {
//             const socket: Socket = io("http://localhost:8080", {
//                 query: {
//                     userId: user.id
//                 }
//             })
//             setSocket(socket)

//             // socket.on() is used to listen to the events both on client and server side. 
//             socket.on("getOnlineUsers", (users) => {
//                 setOnlineUsers(users)
//             })

//             return () => socket.close();
//         } else {
//             if (socket) {
//                 socket.close();
//                 setSocket(null)
//             }
//         }

//     }, [user])


//     return <SocketContext.Provider value={{ socket, onlineUsers }}> {children} </SocketContext.Provider>
// }