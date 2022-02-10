import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='mainDiv'>
      <div className='centerDiv'>
      <div className='nameDiv'>J GEETHA KIRAN</div>
     
    </div>
    <p> <a href="#popup1" className="button">CLICK ME</a></p>
   
    
   <p>
   <div className='popup' id ="popup1">
  <a className="close" href="#">&times;</a>
  <iframe className="embed-responsive-item frame" allow="fullscreen" src="https://www.google.com/search?igu=1" ></iframe>
  </div>
   </p>

    </div>
  );
}
//just added p then the target thing started working

export default App;
