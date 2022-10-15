import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ChainContext = React.createContext();

function ChainProvider(props) {
    const {
        item: datos,
        saveItem: saveDatos,
        loading,
        error,
      } = useLocalStorage('Datos_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openForm, setOpenForm] = React.useState(false);

      let searchedDatos = [];
      if (!searchValue.length >= 1) {
        searchedDatos= datos;
      } else {
        searchedDatos = datos.filter(dato => {
          const datoText = dato.Cedula.toLowerCase();
          const SearchText = searchValue.toLowerCase();
          return datoText.includes(SearchText);
        });
      }
    
      const addDato = (
        Cedula,
        Fecha,
        Cliente,
        Empresa_Envio,
        Tracking,
        Currier,
        Via,
        Cantidad_Pieza,
        Peso,
        Costo_Envio,
        Status,) => {
        const newDatos = [...datos];
        newDatos.push({
          Cedula,
          Fecha,
          Cliente,
          Empresa_Envio,
          Tracking,
          Currier,
          Via,
          Cantidad_Pieza,
          Peso,
          Costo_Envio,
          Status,
        });
        saveDatos(newDatos);
      };

      const deleteDato = (Cedula) => {
        const datoIndex = datos.findIndex(dato => dato.Cedula === Cedula);
        const newDatos = [...datos];
        newDatos.splice(datoIndex, 1);
        saveDatos(newDatos);
      };

    return (
    <ChainContext.Provider value={{
        loading,
        error,
        searchValue,
        setSearchValue,
        searchedDatos,
        addDato,
        deleteDato,
        openForm,
        setOpenForm,
    }}>
        {props.children}
    </ChainContext.Provider>
    );
}

export { ChainContext, ChainProvider };