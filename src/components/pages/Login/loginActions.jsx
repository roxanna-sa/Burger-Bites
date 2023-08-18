import { useNavigate } from 'react-router-dom';
import endpointRequest from '../../utils/api-request';
import Swal from 'sweetalert2';

export const LoginActions = () => {

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
        //console.log(result);
  
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
        if (error.response) {
          const responseData= error.response.data
          if (responseData === 'Email and password are required') {
            Swal.fire({
              title: 'Error',
              text: 'Fill out all required fields',
              icon: 'warning',
              confirmButtonText: 'OK',
              confirmButtonColor: '#B2513C'
              
            });
          } else if (error.response.data === 'Cannot find user') {
            Swal.fire({
              title: 'Error',
              text: 'User not found',
              icon: 'error',
              confirmButtonText: 'OK',
              confirmButtonColor: '#B2513C'
            });
          } else if (error.response.data === 'Incorrect password') {
            Swal.fire({
              title: 'Error',
              text: 'Incorrect credentials',
              icon: 'error',
              confirmButtonText: 'OK',
              confirmButtonColor: '#B2513C'
            });
          }
        }
      }
    }
    return { handleSubmit };
  };

export default LoginActions;



