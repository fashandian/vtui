import VButton from './Button.vue';

VButton.install = app => {
    app.component(VButton.name, VButton);
}

export const Button = VButton;

export default VButton;
