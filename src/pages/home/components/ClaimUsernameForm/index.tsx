import { Button, TextInput, Text } from '@kierico-ui/react'
import { Form, FormAnnotation } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

/** React Hook Form */
const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    /**
     *    //      = expressão regular;
     *    ^       = o texto deve começar contendo as regras;
     *    ([a-z]) = qualquer letra de A a Z;
     *    \\-     = hifen;
     *    +       = uma ou mais vezes;
     *    $       = o texto deve terminar contendo as regras;
     *    i       = case insensitível (letras maiúscula e minúscula).
     */
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
})

/** React Hook Form */
type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  /** React Hook Form */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    /** Validação do formulário com Resolver */
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          prefix="kierico.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />
        <Button size="md" type="submit">
          Reservar
          <ArrowRight />
        </Button>
      </Form>

      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário desejado!'}
        </Text>
      </FormAnnotation>
    </>
  )
}
