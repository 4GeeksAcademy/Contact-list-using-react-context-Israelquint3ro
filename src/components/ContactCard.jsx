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
        <div key={contact.id}>
            <div className="mx-auto card">

                <div className="card-body contact">
                    <img
                        className="imagen"
                        src={contact.photo || "https://img.freepik.com/premium-photo/smiling-cartoon-illustration-black-man_1282444-264454.jpg"}
                        alt="CONTACT PHOTO"
                    />

                    <div className="info">
                        <h4>{contact.name}</h4>
                        <p><i className="fa-solid fa-mobile"></i> Phone: {contact.phone}</p>
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
