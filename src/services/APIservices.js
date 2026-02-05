export const Getcontacts = async (dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Israel/contacts`)
    console.log(response);
    if (!response.ok) {
        CreateAgenda()
        return
    }
    const data = await response.json()
    console.log(data)
    dispatch({ type: 'set_contacts', payload: data.contacts })
}

export const CreateAgenda = async (params) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Israel`, {
        method: 'POST'
    })
    console.log(response)
}

// Nombre de las funciones debe ir el minuscula la primera letra 

export const createContact = async (dispatch, contact) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Israel/contacts`, {
        method: 'POST',
        body: JSON.stringify({
            "name": contact.name,
            "phone": contact.phone,
            "email": contact.email,
            "address": contact.address
        }
        ),
        headers: {
            "Content-type": "application/json"

        }

    })
    const data = await response.json()
    console.log(data);
    dispatch({ type: 'add_contacts', payload: data })

}



export const deleteContact = async (contact, dispatch) => {
    console.log("Israel Quintero", contact);
    console.log(contact.id)

    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Israel/contacts/${contact.id}`, {
        method: 'DELETE'
    })
    console.log();
    dispatch({ type: 'delete_contacts', payload: contact.id })


}

export const updateContact = async(contact,dispatch,navigate) => {
    const response = await fetch (`https://playground.4geeks.com/agendas/Israel/contacts/${contact.id}`,{
          method: 'PUT',
          body: JSON.stringify(contact),
          headers: {"Content-type": "application/json"}
    })
    if(response.ok){
      await Getcontacts(dispatch)
     navigate("/")
    }
         
         
        //   dispatch({ type: 'update_contacts', payload: contact.id})
           }
        