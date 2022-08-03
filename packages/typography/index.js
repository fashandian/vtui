import VTypography from './Typography.vue';

VTypography.install = app => {
    app.component(VTypography.name, VTypography);
}

export const Typography = VTypography;

export default VTypography;