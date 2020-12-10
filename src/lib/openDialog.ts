import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options: dialogProps) => {
    const {title, content, closeOnclickOverlay, ok, cancel} = options;
    const div = document.createElement('div');
    const close = () => {
        app.unmount(div);
        div.remove();
    };
    document.body.appendChild(div);
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true, 'onUpdate:visible': (newVisible) => {
                    if (newVisible === false) {
                        close();
                    }
                }, closeOnclickOverlay, ok, cancel
            }, {title, content});
        }
    });
    app.mount(div);
};