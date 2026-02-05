export const initialStore = () => {
  return {


    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
   
    case 'set_contacts':
      return {
        ...store,
        contacts: action.payload
      } 
    case 'add_contacts':
      return{
       ...store,
       contacts :[...store.contacts, action.payload]
      }
      case 'delete_contacts':
        console.log(store.contacts.filter(contact => contact.id !== action.payload));
        const newContacts = store.contacts.filter(contact => contact.id !== action.payload)
        return{
          ...store,
          contacts: newContacts
          
        }
     
    default:
      throw Error('Unknown action.');

      // Crear caso de creary borrar
  }
}
