import logo from './logo.svg';
import './App.css';

function App() {
  function mouseOverEvent(e){
    e.target.classList.add("hoveredClass");
    

  }
  function onClickEvent(e){
   // console.log(Array.from(e.target.childNodes).find(DIV => {DIV.classList}));
  //  var arr = Array.from(e.target.childNodes);
  //  if(arr.length>1)
  //  console.log(arr[1].classList);
  var targetClass = e.target.classList;
 
  console.log(targetClass);
    var iDiv = document.createElement('div');
     iDiv.className = 'DIV';
     const element1 = '<div class="ee-widget" pid="a6529b3e-29c6-4886-aade-32685bd048f7" ></div>';
     const element2 = '<script type="module" src="https://media.embedeasy.com/static/widget.js" defer></script>';
     const element3 = '<link rel="stylesheet" href="https://media.embedeasy.com/static/widget.css"/>';
    //  <script type="module" src="https://media.embedeasy.com/static/widget.js" defer></script>
    //  <link rel="stylesheet" href="https://media.embedeasy.com/static/widget.css"/> </>;
     iDiv.insertAdjacentHTML('beforeend',element1);
     iDiv.insertAdjacentHTML('beforeend',element2);
     iDiv.insertAdjacentHTML('beforeend',element3);
     if(Array.from(targetClass).find(div=> div=='DIVAdded')==undefined && Array.from(targetClass).find(div=> div=='DIV')==undefined){
      e.target.appendChild(iDiv);
      targetClass.add('DIVAdded');
     //console.log()
     }

    
   // console.log(e.target.appendChild(iDiv))
    
    
  }
  function mouseOutEvent(e){
    e.target.classList.remove("hoveredClass");

   
    
  }

  return (
    <div className='mainDiv' onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} onClick={onClickEvent} >
      <div className='centerDiv'>
        <div className='nameDiv'>J GEETHA KIRAN</div>
        <div>
        <div class="ee-widget" pid="a6529b3e-29c6-4886-aade-32685bd048f7" ></div>
  <script type="module" src="https://media.embedeasy.com/static/widget.js" defer></script>
  <link rel="stylesheet" href="https://media.embedeasy.com/static/widget.css"/> 
            
        </div> 
        </div>
    </div>
  );
}
//just added p then the target thing started working

export default App;
