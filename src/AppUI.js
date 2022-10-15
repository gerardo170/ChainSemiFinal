import React from 'react';
import { ChainContext } from '../src/Context/ChainContext';
import { ChainSearch } from '../src/Search/ChainSearch';
import { ChainList } from '../src/Item/ChainList';
import { ChainItem } from '../src/Item/ChainItem';
import { ChainButton } from '../src/Button/ChainButton';
import { ChainForm }  from '../src/Form/ChainForm';
import { ChainTable } from '../src/Form/ChainTable';

function AppUI(){
 const { error,
         loading, 
         searchedDatos, 
         deleteDato,
         openForm,
         setOpenForm,
        } = React.useContext(ChainContext);

    return (
    <React.Fragment>
    <ChainSearch />

    
    <ChainList>
    {error && <p>hubo un error...</p>}
    {loading && <p>Estamos cargando...</p>}

      {searchedDatos.map(dato => (
    <ChainItem
      key={dato.Cedula} 
      {...dato}
      onDelete={() => deleteDato(dato.Cedula)}
      />
      ))},
    </ChainList> 

 {!!openForm && (
   <ChainForm>
    <ChainTable />
   </ChainForm>
 )}

    <ChainButton 
      setOpenForm={setOpenForm}
    />
    </React.Fragment>
    );
}

export { AppUI };