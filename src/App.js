
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { NotFound } from './Pages/NotFound';
import { BusinessSubmit } from './Pages/BusinessSubmit';
import { Layout } from './Components/Layout';
import { Home } from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          
          {
            window.localStorage.getItem('Token') &&
            <Route path='business_submit' element={<BusinessSubmit/>}></Route>
          }
          </Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
