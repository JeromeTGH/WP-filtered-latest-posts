import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { TextControl } from '@wordpress/components';
import { Deux } from './deux';
const { Fragment } = wp.element;

export function Edit(props) {

    console.log("Media = " + props.media); // media contains the returned value of applyWithSelect

    /* Set Constants */
    const {
       title,
       content
    } = props.attributes;

    return (
        <Fragment>
            {/* <Deux { ...{setAttributes, ...this.props} }/> */}
            <Deux />
            <TextControl
                value={title}
                label="Title"
                onChange={(value) => props.setAttributes({ title: value })}
            />
        </Fragment>
    )
}

const applyWithSelect = withSelect((select, props) => {
    // media is the name of the returned value
    return { media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined };
});

/**
* Use compose to return the result of withSelect to Edit({...})
* @see https://developer.wordpress.org/block-editor/packages/packages-compose/
*/
export default compose(
    applyWithSelect,
) (Edit);
