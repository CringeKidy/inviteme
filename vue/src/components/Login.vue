<template>
    <div class='login-form'>
        <button  v-bind="onClick()" />
    </div>
</template>

<script>
    export default {
        name: 'Login',
        methods: {
            onClick(){
                console.log('test')
            }
        }
    }
</script>

<style scoped>
    #button {
        color: red
    }
</style>