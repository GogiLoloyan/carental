import { connect } from 'react-redux'

import RightNav from './RightNav'

/**
 * mapStateToProps
 * @param {Object} state - state
 * @returns {Object} state as props
 */
const mapStateToProps = ({
	routes: {
		currentPath: { path }
	}
}) => ({ path })

export default connect(mapStateToProps)(RightNav)
