<template>
    <div class="postArea">
        <h1> Enter a post! </h1>
        <div>
            <input type="text" placeholder="Enter a title!" :value="NewPost.title"/>
            <input type="textarea" placeholder="Enter some details!" :value="NewPost.info"/>
            <input type="button" value="Submit!" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewPost",
        props: {
            NewPost: {
                type: Object,
                required: true,
                default: () => ({ id: '', title: '', info: '', date: ''}),
                validator: NewPost => ['id', 'title', 'info', 'date'].every(key => key in task),
            },
        },
    }
</script>

<style scoped>
.postArea {
    background-color: lightblue;
    outline-style: solid;
    outline-color: black;
    padding: 10px;
    margin: 5px;
    display: block;
}
</style>