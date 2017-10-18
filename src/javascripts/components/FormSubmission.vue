<template lang="pug">
div
    section.uk-section
        div.uk-container.uk-container-small
            slot(
                name="content"
            )
                h1 Thank You!
</template>

<script>
export default {
    name: 'FormSubmission',
    props: ['payload']
}
</script>

<style lang="scss" scoped>
    @import "./../../stylesheets/settings/variables";
</style>
