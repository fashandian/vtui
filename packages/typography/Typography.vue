<template>
    <span class="v-typography" :class="[type]">
        <slot />
    </span>
</template>

<script>
export default {
    name: "VTypography",
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    type: {
        required: false,
        type: String,
        default: 'default'
    },
});

const type = computed(() => ({ secondary: 'v-typography-secondary', 'success': 'v-typography-success', 'default': '' }[props.type]));
</script>

