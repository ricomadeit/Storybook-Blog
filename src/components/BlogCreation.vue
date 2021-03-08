<template>
    <div class="postArea">
        <h1> Enter a post! </h1>
        <div>
            <input class="titleStyle" type="text" placeholder="Enter a title!" v-model="NewPost.title" />
            <textarea class="textStyle"  placeholder="Enter some details!" v-model="NewPost.info" rows="5" />
            <input class="buttonStyle" type="button" value="Submit!" />
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
                validator: NewPost => ['id', 'title', 'info', 'date'].every(key => key in NewPost),
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
    position: relative;
    display: block;
}

.titleStyle {
    padding: 10px;
    margin: 5px;
    display: block;
}

.textStyle {
    padding: 10px;
    margin: 5px;
    width: 90%;
    display: block;
    font-family: Arial, Helvetica, sans-serif;
}

.buttonStyle {
    padding: 10px;
    margin: 5px;
    display: block;
}
</style>