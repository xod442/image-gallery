import React, { useState, useRef } from 'react';

// This is my first react component that I hacked into a 
// REACT application 05/28/2021 - RAK

// npm install primereact
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import PrimeReact from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

// npm install primeicons
import 'primeicons/primeicons.css';

//npm install primeflex
import 'primeflex/primeflex.css';


function Appx() {
  const [text, setText] = useState('');
  const toastRef = useRef();

  // active ripple effect
  PrimeReact.ripple = true;

  const onFormSubmit = (e) => {
    if (text) {
      toastRef.current.show({ severity: 'info', summary: text, life: 3000 });
    }

    // clear
    setText('');

    e.preventDefault();
  }

  return (
    <div className="Appx">

      <Toast ref={toastRef} />

      <header>
      <p> Damn the torpedos!</p>
      </header>

      <form className="p-d-flex p-jc-center p-mt-6" onSubmit={onFormSubmit}>
        <InputText value={text} onChange={(e) => setText(e.target.value)} />
        <Button type="submit" label="Do it!" icon="pi pi-check" className="p-ml-2"/>
      </form>
    </div>
  );
}

export default Appx;
