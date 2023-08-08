import { useNavigate } from 'react-router-dom';
import './login.scss';

function Login () {

  const navigate = useNavigate();
  const handleClick = () => navigate('/main');

  return (
  <>
    <div className="row mt-5">
      <div className="col-xs-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
        <img src='/icons menu/logoBurger.png' className="mx-auto d-block" style={{width: "100%"}}/>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <h3>Access</h3>
      </div>
    </div>
   
    <div className="row">
      <div className="form-group">
        <input placeholder="User"></input>
      </div>

      <div className="form-group">
        <input placeholder="Password" type='password'></input>
      </div>
    </div>

    <div className="form-group">
        <button onClick={handleClick} className="btn btn-mustard">Login</button>
    </div>
    
  </>
  );
}



export default Login;