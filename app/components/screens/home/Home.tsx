import Layout from '@/components/layout/Layout'
import { FC } from 'react'
import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>Hi</h1>
		</Layout>
	)
}

export default Home
