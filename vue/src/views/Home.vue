<template>
    <div>
        <h3>Tester thing</h3>
        <button class='login' @click="onClick()">Login</button>

        <router-link to='/about'>About</router-link>
        <router-link to='/test'>Test</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        methods:{
            onClick(){
              this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    .login{
        color: red;
    }
</style>