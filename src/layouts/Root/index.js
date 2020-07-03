import { connect } from 'react-redux'

import Layout from './Layout'

/**
 * mapStateToProps
 * @param {Object} state - state
 * @returns {Object} state as props
 */
const mapStateToProps = ({ routes }) => ({ routes })

export default connect(mapStateToProps)(Layout)
