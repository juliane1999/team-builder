import React, {useState} from 'react'


const initalFormValues = {
  username: '',
  email: '', 
  role:'',
}
export default function Form(props) {
   
  const [formValues,setFormValues] = useState(initalFormValues)

    const handleChange = evt => {
    const { name, value } = evt.target
    setFormValues({...formValues, [name]: value})
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    addMember(formValues)
    setFormValues(initalFormValues)
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor='username'>Name
      <input
              id='username'
              type='text'
              name='username'
              onChange={handleChange}
              value={formValues.name}
            />
        </label>

        <label htmlFor='email'>Email
        <input
            id='email'
            type='email'
            name='email'
            onChange={handleChange}
            value={formValues.email}
          />
        </label>

        <label htmlFor='role'>Occupation
        <select 
        id='role'
        name='role' 
        onChange={handleChange} 
        value={formValues.role}>
            <option value=''>-- Select an Occupation --</option>
            <option value='Backend'>Backend Engineer</option>
            <option value='Frontend'>Frontend Engineer</option>
            <option value='Designer'>Designer</option>
            <option value=''>Others</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
    </form>
  )
}