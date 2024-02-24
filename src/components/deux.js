
import { Component } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import { TabPanel } from '@wordpress/components';

export class Deux extends Component {

    // constructor(props) {
    //     super(props);
    // }
    
    render() {

        // const {
        //     attributes: {

        //     },
        //     setAttributes
        // } = this.props;

        return (
            <InspectorControls key="inspector">
                <div>
                    <TabPanel
                        tabs={[
                            {
                                name: "layoutInspector",
                                title: "Layout",
                                className: "tab-panel"
                            },
                            {
                                name: "styleInspector",
                                title: "Style",
                                className: "tab-panel"
                            },
                            {
                                name: "aboutInspector",
                                title: "About",
                                className: "tab-panel"
                            }
                        ]}
                    >
                        {tab => {
                            let tabLayout;
                            tabLayout = <div>TestTab</div>;
                            return tabLayout;
                        }}
                    </TabPanel>
                </div>
            </InspectorControls>
        );
    }
};
