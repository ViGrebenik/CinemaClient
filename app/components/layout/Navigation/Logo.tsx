import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '../../../assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<div className="px-layout mb-10 block">
				<Image
					src={logoImage}
					width={247}
					height={64}
					alt="Movie app"
					draggable={false}
				/>
			</div>
		</Link>
	)
}

export default Logo
