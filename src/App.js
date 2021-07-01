import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Userlist from './Components/Userlist';
import Formulario from './Components/Formulario';

function App() {
  const [usuario, setUsuario] = useState({
    nombre_usuario: '',
    cedula_usuario: 0,
    telefono_usuario: 0,
    mail_usuario: ''
  })
  const [usuarios, setUsuarios] = useState([])
  const [listUpdate, setListUpdated] = useState(false)
  useEffect(() => {
    const getUsuarios = () => {
      fetch('http://localhost:3001/api')
        .then(res => res.json())
        .then(res => setUsuarios(res))
    }
    getUsuarios()
    setListUpdated(false)

  }, [listUpdate])
  return (

    <Fragment>
      <Navbar brand='Usuarios'></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h3>Datos de Usuario</h3>
            <Userlist usuario={usuario} setUsuario={setUsuario} usuarios={usuarios} setListUpdated={setListUpdated}></Userlist>
          </div>
          <div className="col-5">
            <h3>Ingrese sus Datos</h3>
            <Formulario usuario={usuario} setUsuario={setUsuario}></Formulario>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
