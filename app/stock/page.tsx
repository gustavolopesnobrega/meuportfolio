
'use client'
import { useEffect, useState } from 'react';
import api from '@/pages/api/clientes';

function Stock() {

    const [clientes, setClientes] = useState([])
    const getClientes = async () => {
        try {
            const response = await api.get("cliente");
            const data = response.data;

            setClientes(data)

        } catch {
            console.log("ERROR  ")
        }
    }

    useEffect(() => {
        getClientes();
    }, [])
    return (
        <div className="container" >
            <h1>Todos os clientes.</h1>
            {clientes.length === 0 ? <p>carregando...</p> : (
                clientes.map((clientes) => (
                    <div className='clientes' key={clientes}>
                        <h2>{clientes.nome}</h2>
                    </div>
                ))
            )}
        </div>
    );

}
export default Stock;