import React from 'react'
import './contact.scss'
import {
  FormGroup,
  InputGroup,
  TextArea,
  Button,
} from '@blueprintjs/core'
import { useFormFields } from 'src/hooks'

interface InputFieldProps {
  name: string;
  email: string;
  message: string;
  password: string;
}

export default () => {
  const [fields, handleFieldChange, resetFields] = useFormFields<InputFieldProps>({
    name: "",
    email: "",
    message: "",
    password: "",
  })

  async function handleSubmit() {
    event.preventDefault()
    const formData = JSON.stringify({
      name: fields.name,
      email: fields.email,
      message: fields.message,
      password: fields.password,
    })

    try {
      await fetch(' https://rx9q9o2l18.execute-api.us-west-2.amazonaws.com/dev/mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData,
      }).then(res => {
        if(!res.ok) {
          throw Error()
        }
      })
      console.log('Success')
      resetFields()
    } catch(e) {
      console.log('An error has occured')
    }
  }

  function validateInputs(): boolean {
    return fields.name.length > 0 && fields.email.length > 0 && fields.message.length > 0
  }

  return (
    <div className='contact'>
      <h3>Want to get in Touch?</h3>
      <p>
        Feel free to reach out! I'm excited about opportunities to connect and collaborate. I offer free initial healthcare tech and 340B consultations.
      </p>
      <form onSubmit={handleSubmit}>
        <FormGroup
          helperText='Enter your full name'
          label="Name"
          labelFor='name'
          labelInfo='(required)'
        >
          <InputGroup
            id='name'
            value={fields.name}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup
          helperText='Enter your email address'
          label='Email'
          labelFor='email'
          labelInfo='(required)'
        >
          <InputGroup
            id='email'
            type='email'
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup
          helperText='Please enter your message'
          label='Message'
          labelFor='message'
          labelInfo='(required)'
        >
          <TextArea
            id='message'
            style={{'height': '200px'}}
            fill
            value={fields.message}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <Button
          type='submit'
          fill
          disabled={!validateInputs()}
        >
          Send
        </Button>
        <input
          className='password'
          type='text'
          id='password'
          tabIndex={-1}
          autoComplete='off'
          value={fields.password}
          onChange={handleFieldChange}
        />
      </form>
    </div>
  )
}
