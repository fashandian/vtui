<template>
    <button class="v-btn" :class="[type, size]">
        <slot />
    </button>
</template>

<script>
export default {
    name: "VButton",
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
    size: {
        required: false,
        type: String,
        default: 'default'
    }
});

const type = computed(() => props.type === 'default' ? '' : 'v-btn-' + props.type);
const size = computed(() => ({ large: 'v-btn-lg', 'default': '', 'small': 'v-btn-sm' }[props.size]));
</script>

