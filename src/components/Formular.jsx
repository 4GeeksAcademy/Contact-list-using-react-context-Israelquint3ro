import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Formular = ({contact}) => {
  const {store,dispatch} = useGlobalReducer()

  const {id} = useParams()



  return (
    <div className="text-center">
      <h1>Update your contact details</h1>
      <div className=" mb-3">
        <label htmlFor="floatingInput">{contact.name}</label>

        <input type="text" className="form-control" id="Name" />
      </div>
      <div className="form">
        <label htmlFor="floatingPassword">Phone</label>

        <input type="text" className="form-control" id="Phone" />
      </div>
      <div className="form">
        <label htmlFor="floatingPassword">Email</label>

        <input type="text" className="form-control" id="Email" />
      </div>
      <div className="form">
        <label htmlFor="floatingPassword">Address</label>

        <input type="text" className="form-control" id="Address" />
        <Link to="/" ><button className="btn btn-success">Go back to your contact list</button> </Link>
      </div>
    </div>
  )

}

