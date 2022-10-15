import React from "react";
import { ChainContext } from "../Context/ChainContext";
import './ChainTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from "reactstrap";


function ChainTable(props) {
  const [newDatoValue, setNewDatoValue] = React.useState('');
  const {
    addDato,
  } = React.useContext(ChainContext)
    
  const onCancel = () => {
 //pendiente
  };

  const onChange = (event) => {
    setNewDatoValue(event.target.value);
     };

  const onSubmit = (event) => {
    event.preventDefault();
    addDato(newDatoValue);
     };
   
    return (
      <>
    <ModalHeader>
      <div><h3>Insertar registro</h3></div>
    </ModalHeader>

      <form onSubmit={onSubmit}>
    <FormGroup>
          Fecha:
        <input className="form-control" name='Fecha' value={newDatoValue}
          type="date"
          onChange={onChange}
        />
      </FormGroup>
      </form>
    
      <form onSubmit={onSubmit}>
    <FormGroup>
          Cedula:
        <input className="form-control" name='Cedula' value={newDatoValue}
          type="text"
          onChange={onChange}
        />
      </FormGroup>
      </form>
    
      <form onSubmit={onSubmit}>
      <FormGroup>
          Cliente:
        <input className="form-control" name='Cliente' value={newDatoValue}
          onChange={onChange}
          type="text"
        />
      </FormGroup>
      </form>
      
      <form onSubmit={onSubmit}>
      <FormGroup>
         Empresa_Envio:
        <select  name="Empresa_Envio" className="form-select" aria-label="Default select example" onChange={onChange}>
          <option selected value="Seleccione Empresa de envio"></option>
          <option value="Fedex">Fedex</option>
          <input  name="Empresa_Envio" type="select"  value={newDatoValue} onChange={onChange} />
        </select>
      </FormGroup>
      </form>
    
      <form onSubmit={onSubmit}>
      <FormGroup>
          Tracking:
        <input value={newDatoValue} name='Tracking' type="text" onChange={onChange}/>
      </FormGroup>
      </form>
    
      <form onSubmit={onSubmit}>
      <FormGroup>
        Currier:
        <select className="form-select" aria-label="Default select example" onChange={onChange}>
        <option selected value="Seleccione Currier"></option>
          <option value="Opcion 1">Opcion 1</option>
          <input  type="select" value={newDatoValue} onChange={onChange} />
        </select>
      </FormGroup>
      </form>
    
      <form onSubmit={onSubmit}>
      <FormGroup>
        Via:
        <select  className="form-select" aria-label="Default select example" onChange={onChange}>
        <option selected value="Seleccione Via"></option>
          <option value="Maritima">Maritima</option>
          <option value="Aerea">Aerea</option>
          <input type="select" value={newDatoValue} onChange={onChange} />
        </select>
      </FormGroup>
      </form>
    
      <form onSubmit={onSubmit}>
      <FormGroup>
          Cantidad_Pieza
        <input value={newDatoValue} type="Number" min={0} onChange={onChange}/>
      </FormGroup>
      </form>
    
      <form onSubmit={onSubmit}>
      <FormGroup>
          Peso:
        <input value={newDatoValue} name='Peso' type="Number" min={0} onChange={onChange} />
      </FormGroup>
      </form>

      <form onSubmit={onSubmit}>
      <FormGroup>
          Costo_Envio:
        <input value={newDatoValue} type="Number" min={0} onChange={onChange} />
      </FormGroup>
      </form>
    
      <form onSubmit={onSubmit}>
      <FormGroup>
        Status:
        <select className="form-select" aria-label="Default select example" onChange={onChange}>
        <option selected value="Status"></option>
          <option value="Sin Entregar"> Sin Entregar </option>
          <option value="Entregado"> Entregado </option>
          <input  type="select" value={newDatoValue} onChange={onChange} />
        </select>
      </FormGroup>
      </form>
      </>,
      
     <>
     <ModalFooter>
     <button onClick={onCancel}>Cancelar</button>
     <button onClick={onSubmit}>Agregar</button>
     </ModalFooter>
     </>
     
    );
}

export {ChainTable};