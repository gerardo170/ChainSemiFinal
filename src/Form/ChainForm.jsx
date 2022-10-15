import  ReactDOM from "react-dom";
import './ChainForm.css'

function ChainForm({children}) {
    return ReactDOM.createPortal(
     <div className="FormBackground">
     {children}
     </div>,
     document.getElementById('modal')
    );
}

export { ChainForm };