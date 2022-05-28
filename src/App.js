import {useState,useEffect} from 'react'
import {Link,Route,Routes,Outlet} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Addlist from  './components/Addlist'
import Countlist from  './components/Countlist'
import Displaylist from  './components/Displaylist'
import Contact from './components/Contact'
import Html from './components/Html'
import Java from './components/Java'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import './App.css';
import Mainlist  from './components/Main'

function App() {
  let [name,setname]=useState('Keerthana')
  let[data1,setdata1]=useState('')
  let[data2,setdata2]=useState('')
  
  const getdatafromchild1=(datafromchild1)=>{
    setdata1(datafromchild1)
  }

  const getdatafromchild2=(datafromchild2)=>{
    setdata2(datafromchild2)
  }
  return (
    <div>
   <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand text-light m-2" href="#">MyApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <Link className="nav-link active text-light m-2" to="addlist" >Addlist</Link>
        <Link className="nav-link text-light m-2" to="countlist">Countlist</Link>
        <Link className="nav-link text-light m-2" to="displaylist" >Displaylist</Link>
        <Link className="nav-link text-light m-2" to='contact'>Contact Us</Link>
      </div>
    </div>
  </div>
</nav>
    <h2 className=" text-primary display-3 m-2 text-center">Root Component</h2>
    <div className='row'>
      <div className='col-sm-6'>
       <Child1   name={name} getdatafromchild1={getdatafromchild1} />
      </div>
      <div className='col-sm-6'>
     <Child2    name={name} getdatafromchild2={getdatafromchild2}/>
      </div>
    </div>
    <h3  className='text-primary  m-2 text-center'>{data1}</h3>
    <h3  className='text-primary  m-2 text-center'>{data2}</h3>

   <Routes>
     <Route path="/addlist" element={<Addlist></Addlist>}/>
     <Route path="/countlist" element={<Countlist></Countlist>}/>
     <Route path="/displaylist" element={<Displaylist></Displaylist>}/>
     <Route path='/contact' element={<Contact></Contact>}>
       <Route path='html' element={<Html></Html>}/>
     </Route>
   </Routes></div> 
)


}

export default App;
