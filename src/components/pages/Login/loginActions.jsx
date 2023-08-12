import { useNavigate } from 'react-router-dom';
import endpointRequest from '../../utils/api-request';

export const loginActions = () => {

  const navigate = useNavigate();

    // Al presionar el botón "Login" inicia sesión
    const handleSubmit = async (event) => {
      
      event.preventDefault(); // Previene que el browser recargue la página

      // Read the form data
      const form = event.target;
      const formData = new FormData(form);

      let object = {};
      formData.forEach(function(value, key){
        object[key] = value;
      });

      let json = JSON.stringify(object);

      try {
        // Await the API call to get the response
        const result = await endpointRequest('post', 'login', json);
        console.log(result);
  
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('token', result.accessToken);
  
        if (result.user.role === 'Waiter') {
          navigate('/waiter/create-orders');
        } else if (result.user.role === 'Cook') {
          navigate('/cook/kitchen');
        } else {
          navigate('/admin/admin-panel');
        }
      } catch (error) {
        // Handle any errors that might occur during the API call
        console.error(error);
        // You can also provide feedback to the user about the error here
      }
    };
  
    return { handleSubmit };
  };

export default loginActions;



// Como ir a otra pantalla
// const navigate = useNavigate();