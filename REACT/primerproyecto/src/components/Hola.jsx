import React, {Fragment} from 'react';

function Hola(){
    let saludo = 'Variable saludo!'
    return(
        <Fragment>
            <h2>Primer Componente Hola! {saludo}</h2>
            <p>Segundo texto</p>
        </Fragment>
    )
}

export default Hola