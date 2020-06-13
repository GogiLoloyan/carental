import { connect } from 'react-redux';

import LeftNav from './LeftNav';

/**
 * mapStateToProps
 * @param {Object} state - state
 * @returns {Object} state as props
 */
const mapStateToProps = ({
	routes: {
		currentPath: { id }
	}
}) => ({ currentPageNumber: id });

export default connect(mapStateToProps)(LeftNav);
