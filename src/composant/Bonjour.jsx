import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.png';


function Bonjour (){
    
    
      return (
        <div className="container ps-5 ms-5">
          <img src={logo} alt="Logo" width={400} />
          <h2>Bonjour, hereux de vous revoir 😊</h2>
        </div>
    );

}
export default Bonjour