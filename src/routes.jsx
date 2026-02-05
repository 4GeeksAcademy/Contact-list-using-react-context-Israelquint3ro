import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import  {Formular} from "./components/Formular"
import { ContactCard } from "./components/ContactCard";
import { FormNewContact } from "./components/FormNewContact";
import { useParams } from "react-router-dom";



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      {/* Ruta por defecto */}
      <Route index element={<Home />} />

      {/* Rutas hijas */}
      <Route path="single/:theId" element={<Single />} />
      <Route path="demo" element={<Demo />} />
      <Route path="formular/:id" element={<Formular/>} />
      <Route path="contactcard" element={<ContactCard/>}/>
      <Route path="formnewcontact" element={<FormNewContact/>}/>
    
    </Route>
  )
);
