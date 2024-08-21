// import { useEffect } from 'react'
// import { useSocketContext } from '../context/SocketContext'
// import { useConversation } from '../store/useConversation'
// import jakesFartNotification from '/sounds/jakes_fart.mp3'



// export function useListenMessages() {
//     const { socket } = useSocketContext()
//     const { messages, setMessages } = useConversation()


//     useEffect(() => {

//         socket?.on("newMessage", (newMessage) => {
//             const sound = new Audio(jakesFartNotification)
//             sound.play()
//             setMessages([...messages, newMessage])
//         })

//         return () => {
//             socket?.off("newMessage")
//         }
//     }, [socket, messages, setMessages])

// }