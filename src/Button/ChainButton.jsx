import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import './ChainButton.css'

function ChainButton(props) {
 const onClickButton = () => {
    props.setOpenForm(prevState => !prevState);
 };

    return (
        <Button 
        className="ChainButton"
        onClick={onClickButton}
        color="primary">
        Ingresar nuevo usuario
        </Button>
    );
}

export { ChainButton };