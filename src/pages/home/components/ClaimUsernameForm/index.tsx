import { Button, TextInput } from '@kierico-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput prefix="kierico.com/" placeholder="seu-usuario" />
      <Button size="md" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
