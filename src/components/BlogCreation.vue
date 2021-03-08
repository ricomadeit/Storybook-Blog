<template>
    <div class="postArea">
        <h1> Enter a post! </h1>
        <!-- <p style="color: blue;"> Please make sure all the fields have been filled! </p> -->
        <div>
            <input class="titleStyle" type="text" placeholder="Title here!" v-model="NewPost.title" />
            <textarea class="textStyle"  placeholder="Enter something about your day!" v-model="NewPost.info" rows="5" />
            <input class="buttonStyle" type="button" value="Submit!" @click="$emit('upload-post', NewPost); checkForm;"/>
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
                default: () => ({ id: null, title: null, info: null, complete: false}),
            },
        },
        computed: {
            checkForm() {
                if (this.NewPost.title && this.NewPost.info) {
                    return this.NewPost.complete = true
                }
                return this.NewPost.complete = false
            }
        }
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
    width: 30%;
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