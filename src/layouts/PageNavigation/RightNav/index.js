import { connect } from 'react-redux';

import RightNav from './RightNav';

/**
 * mapStateToProps
 * @param {Object} state - state
 * @returns {Object} state as props
 */
const mapStateToProps = ({
	routes: {
		currentPath: { path }
	}
}) => ({ isContactPage: path === 'contact-us' });

export default connect(mapStateToProps)(RightNav);
