import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const TabTitle = ({ title }) => (
	<Helmet>
		<meta charSet="utf-8" />
		<title>Simple Tests | {title}</title>
	</Helmet>
)

TabTitle.propTypes = {
	title: PropTypes.string.isRequired,
}

export default TabTitle
