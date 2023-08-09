import { useNavigate } from 'react-router-dom';
import { useState } from "react"

// Al presionar el botón "Login" inicia sesión
export const handleSubmit = (event) => {
  // Previene que el browser recargue la página
  event.preventDefault(); // no hagas el submit

  // Read the form data
  const form = event.target;
  const formData = new FormData(form);
  
  // Mostrar contendido del form por la consola
  for (var [key, value] of formData.entries()) { 
    console.log(key, value);
  }

  // Falta...

  // Consumir API, método "login"

  // Revisar la respuesta, si es correcta, guardarla en localStorage y enviar a "página siguiente"

  // Si la respuesta es incorrecta, decirle al usuario que hay un error.
  
}

// Como ir a otra pantalla
// const navigate = useNavigate();