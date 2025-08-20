import { setupActions } from "./setup_actions";

const deletables: Deletable[] = [];

BBPlugin.register('my_plugin', {
    title: 'My Plugin',
    author: 'My Name',
    icon: 'icon.png',
    version: '1.0.0',
    description: 'Hello World',
    variant: 'both',
    min_version: '4.10.0',
    has_changelog: true,
    repository: 'https://github.com/JannisX11/bb-plugin-template-esbuild',
    onload() {

        // Set up actions, settings, etc. synchronusly in onload to ensure they are associated with the plugin automatically
        // Actions etc. can be defined here directly, but this example shows how to do it across different files
        let actions = setupActions();
        // Track anything that can be deleted
        deletables.push(...actions);
        
    },
    onunload() {
        // Delete actions etc. when reloading or uninstalling the plugin
        for (let deletable of deletables) {
            deletable.delete();
        }
        deletables.empty();
    }
})
