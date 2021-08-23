import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/index";
import NewRoom from "./pages/NewRoom/index";
import Room from "./pages/Room";

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
        </Switch>
      </AuthContextProvide>
    </BrowserRouter>
  );
}