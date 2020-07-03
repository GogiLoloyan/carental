/**
 * @typedef {Object} Variants - Different states for animating, almost like keyframes of motion elements
 * @property {Object<string, any>} initial - Default values styles
 * @property {Object<string, any>} animate - When a component mounts, it'll automatically animate to the values in animate if they're different from those defined in style or initial
 * @property {Object<string, any>} exit - A target to animate to when this component is removed from the tree
 * @property {Object<string, any>} hover - Properties to animate to while the hover gesture is recognised
 */

/**
 * @type {Variants} opacity - motion variants for opacity
 */
export const opacity = {
	initial: {
		opacity: 0
	},
	enter: {
		opacity: 1
	},
	exit: {
		opacity: 0
	}
};
