import './login.scss';
import LoginActions from './loginActions.jsx';
import Input from '../../element/Input/Input';


const Login = () => {

  const {
    handleSubmit
  } = LoginActions();

  return (
  <>
    <div className='align-middle d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
      <div className='row' >
        <div className=''>
          <img src='/proyectImages/logoBurger.png' className='mx-auto d-block' style={{width: '100%'}}/>
        </div>

        <div className='row'>
          <div className='col d-flex justify-content-center my-3'>
            <h3>Access</h3>
          </div>
        </div>
      
        <form method="post" onSubmit={handleSubmit} className='col-6 offset-3'>
    
          <Input inputId={'email'} inputText={'E-mail'} inputType={'text'} placeHolderText={'E-mail'} divClass='form-group mt-3' />

          <Input inputId={'password'} inputText={'Password'} inputType={'password'} placeHolderText={'Password'} divClass='form-group mt-3' />

          <div className='form-group d-flex justify-content-center mt-5'>
            <button type='submit' defaultValue='' className='btn btn-mustard w-50'>Login</button>
          </div>
        </form>

      </div>
    </div>
  </>
  );
}

export default Login;