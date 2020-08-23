import React from 'react'
import Art from '../Art/Art'

import './ContainerWithArt.scss'

const ContainerWithArt = (props) => (
	<div className="container-with-art">
		<Art />
		<div className="right-side">{props.children}</div>
	</div>
)

export default ContainerWithArt
