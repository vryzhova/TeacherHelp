<template>
<div>
    <div class="page-title">
        <h3>Создать каталог</h3>
    </div>
    <form @submit.prevent="submitHandler">
    <div class="input-field">
        <label for="subjectName">Имя каталога</label>
    <input
    id="subjectName"
    type="text"
    v-model.trim="title"
    :class="{invalid: ($v.title.$dirty && !$v.title.required)}"
    >
    <small class="helper-text invalid"
    v-if="$v.title.$dirty && !$v.title.required"
    >Введите название каталога</small>
    </div>
    
    <div class="file-field input-field">
        <div class="btn">
        <span>File</span>
        <input id="images" type="file" @change="handleFilesUpload()" ref="files" multiple
        >
        </div>
        <div class="file-path-wrapper">
        <input class="file-path validate" type="text" placeholder="Выберите фотографии для каталога">
        </div>
    </div>
        
    <button class="btn waves-effect waves-light blue darken-4" type="submit" name="action">Добавить каталог
    <i class="material-icons right">add</i>
    </button>
    </form>
    
    
</div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
    name: 'createCatalog',
    data: () => ({
        title: '',
        files: ''
    }),
    validations:  {
        title: {required}
    },
    methods: {
        handleFilesUpload() {
        this.files = this.$refs.files.files 
    },
        submitHandler() {
            if (this.$v.$invalid) {
            this.$v.$touch()
            return
        }
        const formData = {
            title: this.title,
            images: this.images
        }
        console.log(formData)
        } 
    }
}
</script>




<style scoped>
form {
    display: flex;
    flex-direction: column;
    width: 40vw;
}
#add_img {
    padding: 20px;
}
</style>