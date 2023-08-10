import { useNavigate } from 'react-router-dom';
import endpointRequest from '../../utils/api-request';

export const loginActions = () => {

  const navigate = useNavigate();

    // Al presionar el botón "Login" inicia sesión
    const handleSubmit = (event) => {
      
      event.preventDefault(); // Previene que el browser recargue la página

      // Read the form data
      const form = event.target;
      const formData = new FormData(form);

      let object = {};
      formData.forEach(function(value, key){
        object[key] = value;
      });

      let json = JSON.stringify(object);

      // Consumir API, método "login" con el body del formulario
      const result = endpointRequest('post', 'login', json);
      console.log(result)

      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', result.accessToken);
      navigate('/waiter/create-orders');

      // Revisar la respuesta, si es correcta, guardarla en localStorage y enviar a "página siguiente"

      // Si la respuesta es incorrecta, decirle al usuario que hay un error.
      
    }

  return { handleSubmit };
}

export default loginActions;



// Como ir a otra pantalla
// const navigate = useNavigate();