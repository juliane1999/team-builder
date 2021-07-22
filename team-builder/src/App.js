import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Form from './Form'



function App() {
 
  const [members,setMembers] = useState([])

  const addMember=(member => {
    setMembers([...members,member])
  })

  return (
    <div className="App">

      <h2>Team Member List</h2>

      {members.map((member,idx) => {
        return (
          <React.Fragment key={idx}>
        <p>{member.name}</p>
        <p>{member.email}</p>
        <p>{member.role}</p>
        </React.Fragment>
        )
      })}
    
      <Form addMember={addMembers}
      values={{}}
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
   
    </div>
  );
}

export default App;
