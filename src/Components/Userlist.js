import React from 'react';

const Userlist = ({ usuario, setUsuario ,usuarios, setListUpdated }) => {
    const handleDelete = id_usuario => {
        const requestInit = {
            method: 'delete'

        }
        fetch(' http://localhost:3001/api/' + id_usuario, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
        setListUpdated(true)

    }
    let {nombre_usuario,telefono_usuario,cedula_usuario,mail_usuario}=usuario
    const handleUpdate = id_usuario => {
        telefono_usuario = parseInt(telefono_usuario, 10)
        //validación de los datos
        if (nombre_usuario === '' || cedula_usuario === '' || telefono_usuario <= 0 || mail_usuario==="") {
            alert('Todos los campos son obligatorios')
            return
        }

        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)

        }
        fetch('http://localhost:3001/api/' + id_usuario, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))


            setUsuario({
    
                nombre_usuario:'',
                cedula_usuario:0,
                telefono_usuario:0,
                mail_usuario:''
                    
                  
                
             
            })
            setListUpdated(true)

    }



return (
    <div className="container">
    <table className="table">
        <thead>
            <tr>
                <th>id usuario</th>
                <th>nombre</th>
                <th>cedula</th>
                <th>telefono</th>
                <th>mail</th>
            </tr>
        </thead>
        <tbody>
            {usuarios.map(usuario => (
                <tr key={usuario.id_usuario}>
                    <td>{usuario.id_usuario}</td>
                    <td>{usuario.nombre_usuario}</td>
                    <td>{usuario.cedula_usuario}</td>
                    <td>{usuario.telefono_usuario}</td>
                    <td>{usuario.mail_usuario}</td>
                    <td>
                        <div className="mb-3">
                            <button onClick={() => handleDelete(usuario.id_usuario)} className="btn btn-info">Delete</button>
                        </div>
                        <div className="mb-3">
                            <button onClick={() => handleUpdate(usuario.id_usuario)} className="btn btn-dark">Actualizar</button>
                        </div>
                    </td>
                </tr>
            ))}


        </tbody>


    </table>
    </div>

)
}
export default Userlist;