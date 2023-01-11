import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Pengguna from "./pages/Pengguna";
import Home from "./pages/home";
import Pembayaran from "./pages/konfirmData/Pembayaran";
import Pendaftaran from "./pages/konfirmData/Pendaftaran";
import Dokumen from "./pages/konfirmData/Dokumen";
import DataDokumen from "./pages/dataPendaftar/DataDokumen";
import DataRincian from "./pages/dataPendaftar/DataRincian";
import IdentitasOrtu from "./pages/dataPendaftar/IdentitasOrtu";
import IdentitasPeserta from "./pages/dataPendaftar/IdentitasPeserta";
import IdentitasWali from "./pages/dataPendaftar/IdentitasWali";
import RiwayatPendidikan from "./pages/dataPendaftar/RiwayatPendidikan";
import Logout from "./pages/Logout";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/pembayaran' element={<Pembayaran/>}></Route>
                <Route path='/pendaftaran' element={<Pendaftaran/>}></Route>
                <Route path='/dokumen' element={<Dokumen/>}></Route>
                <Route path='/peserta' element={<IdentitasPeserta/>}></Route>
                <Route path='/ortu' element={<IdentitasOrtu/>}></Route>
                <Route path='/wali' element={<IdentitasWali/>}></Route>
                <Route path='/rincian' element={<DataRincian/>}></Route>
                <Route path='/pendidikan' element={<RiwayatPendidikan/>}></Route>
                <Route path='/dataDokumen' element={<DataDokumen/>}></Route>
                <Route path='/pengguna' element={<Pengguna/>}></Route>
                <Route path='/logout' element={<Logout/>}></Route>
            </Routes>
            {/*<Footer/>*/}
        </Router>
    );
}

export default App;