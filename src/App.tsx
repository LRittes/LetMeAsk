import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import NewRoom from "./pages/NewRoom/index";

import './styles/global.scss'
import { AuthContextProvide } from "./context/AuthContext";

export default function App() {
    return (
    <BrowserRouter>
      <AuthContextProvide>
        <Route path='/' exact component= {Home}/>   
        <Route path='/rooms/new' component= {NewRoom}/>   
      </AuthContextProvide>
    </BrowserRouter>
  );
}