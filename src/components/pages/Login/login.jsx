import './login.scss';
import { handleSubmit } from './loginActions.jsx';


const Login = () => {

  return (
  <>
    <div className='align-middle d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
      <div className='row' >
        <div className=''>
          <img src='/icons menu/logoBurger.png' className='mx-auto d-block' style={{width: '100%'}}/>
        </div>

        <div className='row'>
          <div className='col d-flex justify-content-center my-3'>
            <h3>Access</h3>
          </div>
        </div>
      
        <form method="post" onSubmit={handleSubmit}>
          <div className='form-group d-flex justify-content-center mt-3 mb-3'>
            <input id='user' name='user' placeholder='User' className='w-50'></input>
          </div>

          <div className='form-group d-flex justify-content-center mt-2 mb-3'>
            <input id='password' name='password' defaultValue='' placeholder='Password' type='password' className='w-50'></input>
          </div>

          <div className='form-group d-flex justify-content-center my-3'>
            <button type='submit' defaultValue='' className='btn btn-mustard w-25'>Login</button>
          </div>
        </form>

      </div>
    </div>
  </>
  );
}

export default Login;