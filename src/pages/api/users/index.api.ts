// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

/** Cookies no Next */
import { setCookie } from 'nookies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    /**
     *  .status(405) = method nos allower
     *  .end() = termina a resposta, envia a resposta sem nenhum corpo
     */
    return res.status(405).end()
  }

  const { name, username } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) {
    return res.status(400).json({
      message: 'Username already taken.',
    })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  /** Cookies no Next */
  setCookie({ res }, '@ignitecall:userId', user.id, {
    // expires: new Date(), // com uma data de expriração, pq o cookie não é infinito.
    maxAge: 60 * 60 * 24 * 7, // (7 days) // expiração em segundos, quantos segundo eu quero que esse cookie fique disponível.

    /** Cookies são categorizados entre uma rota */
    path: '/', // raiz, todas as rotas da aplicação podem acessar.
  })

  /* .status(201) = foi criado */
  return res.status(201).json(user)
}
