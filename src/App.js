import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Igra from './pages/Igra';

function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/statistika' element={<Statistika pokusaji={pokusaji} />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
