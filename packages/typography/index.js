import VTypography from './Typography.vue';

VTypography.install = app => {
    app.component(VTypography.name, VTypography);
}

export const Typrography = VTypography;

export default VTypography;