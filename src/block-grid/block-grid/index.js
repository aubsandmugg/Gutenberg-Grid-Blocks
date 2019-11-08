/**
 * WordPress dependencies
 */
const {
	registerBlockType,
} = wp.blocks;

const {
	InnerBlocks,
} = wp.blockEditor;



/**
 * Internal dependencies
 */
import settings from './settings';

import edit from './edit';

import getBlockGridClasses from './classes';

import getAlignmentClasses from '../../alignments';



registerBlockType('pb/block-grid', {
	...settings,

	edit: edit,

	save: (props) => {
		return (
			<div className={ ['o-block-grid', ...getBlockGridClasses(props.attributes), ...getAlignmentClasses(props.attributes)].join(' ') }>
				<InnerBlocks.Content />
			</div>
		);
	},
});
