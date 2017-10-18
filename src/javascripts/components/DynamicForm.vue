<template lang="pug">
div
    form.uk-form-stacked(
        enctype="multipart/form-data"
        v-if="!formSubmitted"
        :class="{'is-submitted' : formSubmitted }"
    )
        div.uk-grid-small( uk-grid)
            div.uk-width-1-1(
                v-if="payload.formFields"
                v-for="field in payload.formFields"
                :class="field.width"
            )
                label.uk-form-label( v-if="field.label && field.type != 'checkbox'" ) {{ field.label }}
                div.uk-form-controls
                    select.uk-select(
                        v-if="field.type == 'select' && field.required"
                        v-model="field.value"
                        v-validate="'required'"
                        :name="field.label"
                        :class="{'uk-form-danger': errors.has(field.label) }"
                    )
                        option(
                            v-for="option in field.values"
                            :value="option.value"
                        ) {{ option.label }}

                    select.uk-select(
                        v-if="field.type == 'select' && !field.required"
                        v-model="field.value"
                    )
                        option(
                            v-for="option in field.values"
                            :value="option.value"
                        ) {{ option.label }}

                    input.uk-input(
                        v-if="field.type == 'text' && !field.required"
                        type="text"
                        v-model="field.value"
                    )
                    input.uk-input(
                        v-if="field.type == 'text' && field.required"
                        type="text"
                        v-model="field.value"
                        v-validate="'required'"
                        :name="field.label"
                        :class="{'uk-form-danger': errors.has(field.label) }"
                    )

                    input.uk-input(
                        v-if="field.type == 'email' && !field.required"
                        type="email"
                        v-model="field.value"
                    )

                    input.uk-input(
                        v-if="field.type == 'email' && field.required"
                        type="email"
                        v-model="field.value"
                        v-validate="'required'"
                        :name="field.label"
                        :class="{'uk-form-danger': errors.has(field.label) }"
                    )

                    textarea.uk-textarea.uk-width-1-1(
                        v-if="field.type == 'textarea'"
                        v-model="field.value"
                        rows="8"
                    )

                    label.uk-form-label( v-if="field.type == 'checkbox' && !field.required")
                        input.uk-checkbox(
                            type="checkbox"
                            v-model="field.value"
                        )
                        |  {{ field.label }}

                    label.uk-form-label( v-if="field.type == 'checkbox' && field.required")
                        input.uk-checkbox(
                            type="checkbox"
                            v-model="field.value"
                            v-validate="'required'"
                            :name="field.label"
                            :class="{'uk-form-danger': errors.has(field.label) }"
                        )
                        |  {{ field.label }}

                    label.uk-form-label(
                        v-if="field.type == 'checkbox-group' && !field.required"
                        v-for="option in field.values"
                    )
                        input.uk-checkbox.uk-margin-small-right(
                            type="checkbox"
                            :value="option.value"
                            v-model="option.selected"
                        )
                        |  {{ option.label }}

                    label.uk-form-label(
                        v-if="field.type == 'checkbox-group' && field.required"
                        v-for="option in field.values"
                    )
                        input.uk-checkbox.uk-margin-small-right(
                            type="checkbox"
                            :value="option.value"
                            v-model="option.selected"
                            v-validate="'required'"
                            :name="field.label"
                            :class="{'uk-form-danger': errors.has(field.label) }"
                        )
                        |  {{ option.label }}


                    label.uk-form-label(
                        v-if="field.type == 'radio-group' && !field.required"
                        v-for="option in field.values"
                    )
                        input.uk-radio.uk-margin-small-right(
                            type="radio"
                            :name="field.name"
                            :value="option.value"
                            v-model="option.selected"
                        )
                        |  {{ option.label }}

                    label.uk-form-label(
                        v-if="field.type == 'radio-group' && field.required"
                        v-for="option in field.values"
                    )
                        input.uk-radio.uk-margin-small-right(
                            type="radio"
                            :value="option.value"
                            v-model="option.selected"
                            v-validate="'required'"
                            :name="field.label"
                            :class="{'uk-form-danger': errors.has(field.label) }"
                        )
                        |  {{ option.label }}

                    span.uk-text-danger( v-show="errors.has(field.label)" ) {{ errors.first(field.label) }}

        div.uk-margin
            div.uk-form-controls
                invisible-recaptcha#do-something-btn.uk-button.uk-button-primary.uk-button-large.uk-text-large(
                    sitekey="6Ld2jikUAAAAACAc5rnB77zIyMur5WmbB0S99MpI"
                    :callback="submitForm"
                    type="submit"
                    :disabled="loading"
                ) Submit


    transition( name="fade")
        form-submission( v-if="formSubmitted")
</template>

<script>
import InvisibleRecaptcha from 'vue-invisible-recaptcha';
import FormSubmission from './FormSubmission.vue';
export default {
    name: 'DynamicForm',
    props: ['payload'],
    components: {
        InvisibleRecaptcha,
        FormSubmission
    },
    data() {
        return {
            formSubmitted: false,
            loading: false,
            formData: this.payload
        }
    },
    methods:{
        captchaVerified(recaptchaToken){
            this.submitForm()
        },
        submitForm(recaptchaToken){
            this.$validator.validateAll().then(valid => {
                if(valid){
                    this.formSubmitted = true
                    this.$http.post(this.payload.formProcessUrl, this.formData)
                }
            })
        }
    }
}
</script>