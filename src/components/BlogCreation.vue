<template>
    <div class="postArea">
        <h1> Enter a post! </h1>
        <div>
            <input class="titleStyle" type="text" placeholder="Title here!" v-model="NewPost.title" />
            <textarea class="textStyle"  placeholder="Enter something about your day!" v-model="NewPost.content" rows="5" />
            <input class="buttonStyle" type="button" value="Submit!" @click="submit"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewPost",
        props: {
            NewPost: {
                type: Object,
                default: () => ({ id: null, title: null, content: null, liked: Boolean, complete: false, active: true}),
            },
        },
        methods: {
            checkForm() {
                if (this.NewPost.title && this.NewPost.content) {
                    return this.NewPost.complete = true
                }
                return this.NewPost.complete = false
            },
            submit() {
                if(this.checkForm()) {
                    // ... is the same as object.assign({}, )
                    this.$emit('upload-post', {...this.NewPost})
                }
                else {
                    alert("Please fill out all textboxes.")
                }
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