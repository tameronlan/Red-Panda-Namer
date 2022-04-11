<template>
    <div class="app">
        <Form></Form>
    </div>
</template>

<script>
    import Form from "@/components/main/Form";
    export default {
        name: 'app',
        components: {Form},
        data(){
            return { }
        },
        computed: {
        },
        created(){
            console.log("APP::STARTED")
        },
    };
</script>
