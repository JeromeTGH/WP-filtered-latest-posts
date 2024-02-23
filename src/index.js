import { registerBlockType } from "@wordpress/blocks";

registerBlockType("wp-filtered-latest-posts/bloc1", {
    title: "WP filtered latest posts",
    icon: "editor-table",
    category: "design",
    edit: () => <div>Code HTML dans l'éditeur</div>,
    save: () => <div>Code HTML dans le navigateur</div>
});
