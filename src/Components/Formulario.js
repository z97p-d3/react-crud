import React from 'react';

const Formulario = ({ usuario, setUsuario }) => {
    const handleChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })

    }
    let { nombre_usuario, telefono_usuario, cedula_usuario, mail_usuario } = usuario

    const handleSubmit = () => {
        telefono_usuario = parseInt(telefono_usuario, 10)
        if (nombre_usuario === '' || cedula_usuario === '' || mail_usuario === '') {

            alert('todos los campos son obligatoriaso')
            return
        }
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)

        }
        fetch('http://localhost:3001/api', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setUsuario({

            nombre_usuario: '',
            cedula_usuario: 0,
            telefono_usuario: 0,
            mail_usuario: ''

        })
    }
    return (
        <form className="form" onSubmit={handleSubmit} >
            <div className="mb-3">
                <label className="form-label" htmlFor="nombre_usuario">nombre_usuario</label>
                <input value={nombre_usuario} name="nombre_usuario" onChange={handleChange} className="form-control" type="text" id="nombre_usuario"></input>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="cedula_usuario">cedula</label>

                <input value={cedula_usuario} name="cedula_usuario" onChange={handleChange} className="form-control" type="number" id="cedula_usuario"></input>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="telefono_usuario">telefono</label>

                <input value={telefono_usuario} name="telefono_usuario" onChange={handleChange} className="form-control" type="number" id="telefono_usuario"></input>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="mail_usuario">mail</label>

                <input value={mail_usuario} name="mail_usuario" onChange={handleChange} className="form-control" type="email" id="mail_usuario"></input>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>

        </form>
    )
}
export default Formulario;