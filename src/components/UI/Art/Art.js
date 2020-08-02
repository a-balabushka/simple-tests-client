import React from 'react'

import './Art.scss'
import FullLogoImg from '../../../assets/img/full-logo.png'
import BackgroundImg from '../../../assets/img/main-background.png'

const Art = () => (
	<div className="art-container">
		<img className="full-logo" src={FullLogoImg} alt="Main Logo" />
		<div className="background-img-container">
			<img className="background-img" src={BackgroundImg} alt="Background" />
		</div>
	</div>
)

export default Art
