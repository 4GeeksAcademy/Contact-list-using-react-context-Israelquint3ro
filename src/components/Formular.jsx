import { Link, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import { updateContact } from "../services/APIservices";


export const Formular = () => {
  const navigate = useNavigate()
  const {store,dispatch} = useGlobalReducer()

  const {id} = useParams()
  const contact = store.contacts.find(contact => contact.id == parseInt(id))
 const [editContact, setEditContact] = useState({
      name: "",
      phone: "",
      email:"",
      address:"",})

      useEffect(()=>{
      if(contact){
        setEditContact(contact)
      }
      },[id])
 

      const handelInputchange = async (e)=> {
        setEditContact({
           ...editContact,
          [e.target.name] : e.target.value
        })}

           const handleSubmit =  (e)=>{
                e.preventDefault();
                // llamar a la funcion que crea el contacto de en la API
               updateContact(editContact,dispatch,navigate);
            
                 alert("The contact has been succesfully updated")
                 navigate("/")
                
              }
          
  return (
    
    <div className="text-center">
      <form onSubmit={handleSubmit}>
      <h1>Update your contact details</h1>
      <Link to="/" ><button className="btn btn-success">Go back to your contact list</button> </Link>

      <div className=" mb-3">
        <label htmlFor="floatingInput">{contact.name}</label>

        <input type="text" className="form-control" id="Name" name="name" value={editContact.name} onChange={handelInputchange}/>
      </div>
      <div className="form">
        <label htmlFor="floatingPassword">Phone</label>

        <input type="text" className="form-control" id="Phone" name="phone" value={editContact.phone} onChange={handelInputchange} />
      </div>
      <div className="form">
        <label htmlFor="floatingPassword">Email</label>

        <input type="text" className="form-control" id="Email" name="email" value={editContact.email} onChange={handelInputchange}/>
      </div>
      <div className="form">
        <label htmlFor="floatingPassword">Address</label>

        <input type="text" className="form-control" id="Address" name="address" value={editContact.address} onChange={handelInputchange}/>
        <button className="btn btn-success">Submit changes</button>
      </div>
      </form>
    </div>
  )

}

