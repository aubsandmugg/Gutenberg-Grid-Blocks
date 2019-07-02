/**
 * WordPress dependencies
 */
const {__, setLocaleData} = wp.i18n;

const {
	withDispatch,
	withSelect,
} = wp.data;

const {
	Fragment,
} = wp.element;

const {
	InnerBlocks,
	BlockControls,
} = wp.blockEditor;

const {
	Toolbar,
	IconButton,
} = wp.components;

const {
	compose,
} = wp.compose;



function GridBlockItemEdit({
	clientId,
	removeBlock,
	attributes,
	hasChildBlocks,
}) {
	return (
		<Fragment>
			<BlockControls>
				<Toolbar>
					<IconButton
						className="components-toolbar__control"
						label={ __('Delete block grid item', 'pb') }
						icon="trash"
						onClick={ () => removeBlock(clientId) }
					/>
				</Toolbar>
			</BlockControls>
			<div className="o-block-grid__item">
				<InnerBlocks
					templateLock={ false }
					renderAppender={ (
						hasChildBlocks ?
							undefined :
							() => <InnerBlocks.ButtonBlockAppender />
					) }
				/>
			</div>
		</Fragment>
	);
}

export default compose(
	withSelect((select, ownProps) => {
		const {
			clientId,
		} = ownProps;

		const {
			getBlockOrder,
		} = select('core/block-editor');

		return {
			hasChildBlocks: getBlockOrder(clientId).length > 0,
		};
	} ),
	withDispatch((dispatch) => {
		return {
			removeBlock: dispatch('core/block-editor').removeBlock,
		};
	})
)(GridBlockItemEdit);