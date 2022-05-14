<template>
    <div>
        <h2>Test to see how websockets work</h2>
        <input v-model="GuildID" type="text" placeholder="put the guild id">
        <input v-model="Message" type='text' placeholder="put message here">
        
        <button @click="onClick(GuildID,Message)">Button</button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name:'Test',
        props: {
            GuildID: String,
            Message: String,
        },
        methods: {
            async onClick(GuildID, Message){

                const request = await axios.post('api/test', {
                    GuildID: GuildID,
                    Message: Message,
                })

                if(request.status === 204){
                    alert('Already Found the same in the database not pushing.')
                }

                console.log(request.data)
            }
        }
    }
</script>
