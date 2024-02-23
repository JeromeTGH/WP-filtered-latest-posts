<?php

    /**
    * Plugin Name: WP-filtered-latest-posts
    * Plugin URI: https://github.com/JeromeTGH/WP-filtered-latest-posts
    * Description: Plugin WP permettant d'afficher les derniers articles, selon les critères de filtration renseignés
    * Author: Jérôme TOMSKI
    * Author URI: https://github.com/JeromeTGH
    * Version: 1.0.0
    * License: GPL3
    * License URI: https://www.gnu.org/licenses/quick-guide-gplv3.fr.html
    */

    function bloc1_creation_et_init() {

        $asset_file = include(plugin_dir_path( __FILE__ )."build/index.asset.php");

        wp_register_script(
            "bloc1",
            plugins_url("build/index.js", __FILE__ ),
            $asset_file["dependencies"],
            $asset_file["version"]
        );

        register_block_type("wp-filtered-latest-posts/bloc1", [
            "editor_script" => "bloc1"
        ]);

    }

    add_action("init", "bloc1_creation_et_init");

?>