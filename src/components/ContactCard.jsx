import { Link, useNavigate } from "react-router-dom";
import { deleteContact } from "../services/APIservices";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ContactCard = ({ contact }) => {
    const navigate = useNavigate();
    const {store,dispatch} = useGlobalReducer()
    

      const handleSubmit = async (e)=>{
          e.preventDefault();
          // llamar a la funcion que crea el contacto de en la API
          await createContact(dispatch, newContact)
      
           alert("User has been succesfully created")
           navigate("/")
          
        }
    return (
        <div className="card mx-auto" key={contact.id}>
            <div className=" contacts">

                <div className="">
                    <img
                        className="imagen mt-1"
                        src={contact.photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbySPOVJMWqKXXDjw9zQLk4k7k7T2xDXjzsw&s"}
                        alt="CONTACT PHOTO"
                    />

                    <div className="info">
                        <h4>{contact.name}</h4>
                        <p><i className="fa-solid fa-mobile"></i> Phone: {contact.countryCode} {contact.phone}</p>
                        <p><i className="fa-solid fa-envelope"></i> Email: {contact.email}</p>
                        <p><i className="fa-solid fa-location-dot"></i> Address: {contact.address}</p>
                    </div>
                </div>
            
                <div className="botons">

                   <Link to={`/formular/${contact.id}`}><button className="btn" ><i className="fa-solid fa-pen-to-square"></i>
                    </button> </Link>

                    <button
                        className="btn"
                        onClick={() => deleteContact(contact,dispatch)}><i className="fa-solid fa-trash"></i>
                    </button>
                    
                </div>

            </div>
        </div>
    );
};
