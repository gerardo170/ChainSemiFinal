import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Table } from 'reactstrap';

function ChainItem(props) {
const {Fecha,Cedula,Cliente,Empresa_Envio,Tracking,Currier,Via,Cantidad_Pieza,Peso,Costo_Envio,Status} = props

    return (
        <>
        <Table>
            <tbody>
            <tr><th>{Fecha}</th>
            <th>{Cliente}</th>
            <th>{Cedula}</th>
            <th>{Empresa_Envio}</th>
            <th>{Tracking}</th>
            <th>{Currier}</th>
            <th>{Via}</th>
            <th>{Cantidad_Pieza}</th>
            <th>{Peso}</th>
            <th>{Costo_Envio}</th>
            <th>{Status}</th></tr>
            </tbody>
        </Table>
        <Button color="danger" onClick={props.onDelete}>Borrar</Button>
        </>
    );
}

export { ChainItem };