import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { createContact, Getcontacts } from "../services/APIservices.js";
import { ContactCard } from "../components/ContactCard.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	console.log(store);

	const [contact, setContact] = useState({

		"name": "Israel Quintero",
		"photo": 'https://img.freepik.com/premium-photo/smiling-cartoon-illustration-black-man_1282444-264454.jpg',
		"phone": "155398768",
		"email": "israelquint3ro@atx.de",
		"address": "Schlostr. 6 80593 Reichertshausen",
	})

	useEffect(() => {
		Getcontacts(dispatch)
	}, [])



	return (
		<div className="text-center homepage">
			<h1>Contact List</h1>
			<h3>Here you can edit or delete your current contacts</h3>
			<div className="contacts text-dark">

				{store.contacts.map(contact => {
					return (<div key={contact.id} >
						<ContactCard contact={contact} />
					</div>
					)
				})
				}
			</div>
			{/* onClick={() => createContact(dispatch, contact)} */}
		<Link to="formnewcontact"><button className="btn  button-54 mt-3" >Create contact</button></Link>

		</div>
	);
}; 