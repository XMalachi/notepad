import React from 'react'
import AddnotesForm from '../AddNoteForm/AddnotesForm'
import Layout from '../Layout/Layout'
import Welcome from '../WelcomePage/Welcome'
import Notes from '../Notes/Notes'
import UpdateForm from '../UpdateForm/UpdateForm'
import Favourites from '../Favourites/Favourites'


const NotepadScreen = () => {
  return (
    <div>
      <Layout>
          <div>
            <Welcome />
            <AddnotesForm />
            <Notes />
            <UpdateForm />
            <Favourites />
          </div>
      </Layout>
        
        
    </div>
  )
}

export default NotepadScreen