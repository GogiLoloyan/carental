import { connect } from 'react-redux'

import Header from './Header'

/**
 * mapStateToProps
 * @param {Object} state - state
 * @returns {Object} state as props
 */
const mapStateToProps = ({ themes: { themes } }) => ({
	themes
})

export default connect(mapStateToProps)(Header)
