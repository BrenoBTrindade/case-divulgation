import Link from '@/components/Link'
import { Inter } from 'next/font/google'
import Title from '@/components/Title'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <Title as='h1'>Alura cases - Home</Title>
        <Link href='/faq'>
           Ir para a página do FAQ
        </Link>
    </div>
  )
}
