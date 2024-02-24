import { registerBlockType } from "@wordpress/blocks";
import Edit from "./components/edit";

registerBlockType("wp-filtered-latest-posts/bloc1", {
    title: "WP filtered latest posts",
    description: "Plugin WP permettant d'afficher les derniers articles, selon les critères de filtration renseignés",
    icon: "editor-table",
    category: "design",
    keywords: [
        "filtered",
        "latest",
        "posts"
    ],
    // edit: () => <div>Code HTML dans l'éditeur</div>,
    save: () => <div>Code HTML dans le navigateur</div>,
    attributes: {
        mediaId: {
            type: 'number',
            // other props as needed
        },
        title: {
            type: 'string',
            // other props as needed
        },
        content: {
            type: 'string',
            // other props as needed
        }
    },
    edit: Edit
});
