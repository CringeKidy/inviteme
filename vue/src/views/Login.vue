<template>
    <div>
        <button @click="onClick()">click</button>
    </div>
</template>

<script>
    import axios from 'axios';
    import cookie from "vue3-cookies";

    export default {
        name: "Login",
        props: {
            Username: String,
            Password: String
        },
        methods: {
            async onClick(){
                window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=966248655277408317&redirect_uri=http%3A%2F%2Flocalhost%3A3030%2Fapi%2Fredirect&response_type=code&scope=identify%20email%20guilds'
            }
        },
    }
</script>