import { Link, useNavigate} from "react-router-dom"
import { createContact } from "../services/APIservices"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useState } from "react"

export const FormNewContact = ()=> {
      const { store, dispatch } = useGlobalReducer()
      const navigate = useNavigate()

    const [newContact, setNewContact] = useState({
      name: "",
      phone: "",
      email:"",
      address:"",
    })
    
    const handelInputchange = (e)=> {
        setNewContact({
           ...newContact,
          [e.target.name] : e.target.value
        })
       
        console.log(e.target.name);
        
    }

    const handleSubmit = async (e)=>{
      e.preventDefault();
      // llamar a la funcion que crea el contacto de en la API
      await createContact(dispatch, newContact)
  
       alert("User has been succesfully created")
       navigate("/")
      
    }


    return(
<div>
  <form onSubmit={handleSubmit}>
    <h1>Create new contact</h1>
         <Link to="/"> <button className="btn btn-success"><i className="fa-solid fa-arrow-left"></i> Go back to contact List</button></Link>

    <p>Please fill the following fields to add your contact</p>
      <div className=" mb-3">
        <label htmlFor="floatingInput">Name</label>

        <input type="text" className="form-control" id="Name" name="name" value={newContact.name} onChange={handelInputchange}/>
      </div>
      <div className="form">
                <label htmlFor="floatingPassword">Phone</label>

        <input type="text" className="form-control" id="Phone" name="phone" value={newContact.phone} onChange={handelInputchange}/>
      </div>
      <div className="form">
                <label htmlFor="floatingPassword">Email</label>

        <input type="text" className="form-control" id="Email" name="email" value={newContact.email} onChange={handelInputchange} />
      </div>
         <div className="form">
                  <label htmlFor="floatingPassword">Address</label>

        <input type="text" className="form-control" id="Address" name="address" value={newContact.address} onChange={handelInputchange} />
      <button className="btn btn-success" >Create new contact</button>
      </div>
      </form>
</div>
    )
}