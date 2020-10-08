import {
  useState,
  ChangeEvent,
} from 'react'

export function useFormFields<T>(initialState: T) {
  const [fields, setValues] = useState(initialState)

  const resetFields = (): void => {
    setValues(initialState)
  }

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({
      ...fields,
      [event.target.id]: event.target.value
    })
  }

  return [
    fields,
    handleFieldChange,
    resetFields,
  ] as const
}
