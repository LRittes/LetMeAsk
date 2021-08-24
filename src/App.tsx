import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";
import Room from "./pages/Room";
import AdmRoom from "./pages/AdmRoom";

import './styles/global.scss'
import { AuthContextProvide } from "./context/AuthContext";

export default function App() {
    return (
    <BrowserRouter>
      <AuthContextProvide>
        <Switch>
          <Route path='/' exact component= {Home}/>   
          <Route path='/rooms/new' component= {NewRoom}/> 
          <Route path='/rooms/:id' component= {Room}/> 
          <Route path='/admin/:id' component= {AdmRoom}/> 
        </Switch>
      </AuthContextProvide>
    </BrowserRouter>
  );
}