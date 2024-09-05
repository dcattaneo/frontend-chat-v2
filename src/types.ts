// import { Socket } from 'socket.io-client'

export type RegisterInputs = {
  username: string;
  email: string;
  password: string;
};

export type LoginInputs = {
  email: string;
  password: string;
};

export type UserData = {
  username: string;
  email: string;
  id: string;
  _id: string;
  profilePic: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProviderProps = {
  children: React.ReactNode;
};



export type AuthProviderHookProps = {
  signUp?: (arg: RegisterInputs | LoginInputs) => void;
  user?: UserData | null;
  setUser?: React.Dispatch<React.SetStateAction<string | null>>;
  loading?: boolean;
};

// export type SocketHookProps = {
//   socket?: Socket;
//   onlineUsers?: Socket[]
// };

export type Messages = {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
};

export type StoreProps = {
  selectedConversation: UserData | null;
  setSelectedConversation: (arg: UserData | null) => void;
  messages: Messages[];
  setMessages: (arg: Array<Messages>) => void;
};
