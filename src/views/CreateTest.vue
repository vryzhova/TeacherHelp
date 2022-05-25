<template>
    <div>
        <div class="page-title">
            <h3>Создание контрольной работы</h3>
        </div>

    <form @submit.prevent="createTask">
        <div class="row">
        <div class="col s3">
        <label for="subjectName">Дисциплина</label>
            <select  ref="selectSubject" name="subjectName" id="subjectName" v-model="subject">
                <option v-for="(task, idx) in tasks" :key="idx" :value="idx"
                >
                {{task.text}}
                </option>
            </select>
        </div>
        <div class="col s3">
            <label for="razdelName">Раздел</label>
            <select  ref="select" name="razdelName" id="razdelName"  v-model="chapter">
                <option v-for="(chapter, idx) in chapters" :key="idx" :value="idx"
                >
                {{chapter.text}}
                </option>
            </select>
        </div> 
        <div class="col s3">
            <label for="ThemeName">Темы</label>
            <select  ref="selectTheme" name="ThemeName" id="ThemeName" multiple v-model="theme">
                <option
                v-for="(themese, idx) in themeses" :key="idx" :value="idx"
                >
                {{themese.name}}
                </option>
            </select>
        </div>
    </div>
    <div class="row">
        <div class="input-field col s6">
            <label>Название контрольной работы</label>
            <input id="taskName" type="text" v-model="taskName">
        </div>
        <div class="input-field col s3">
            <input type="number" id="timing">
            <label for="timing">Время выполнения работы(мин)</label>
        </div>
    </div>
    <div class="row">
        <div class="col12">
            <h5>Добавление теоретических вопросов</h5>
        </div>
        <div class="input-field col s3">
            <input type="number" id="teor_size">
            <label for="teor_size">Кол-во теоретических вопросов</label>
        </div>
        <div class="input-field col s1">
            <input type="text" id="prac_grade">
            <label for="prac_grade">баллы</label>
        </div>
    </div>
    <div class="row">
        <div class="file-field input-field col s4">
            <div class="btn">
        <span>File</span>
        <input id="images" type="file" multiple
        >
        </div>
        <div class="file-path-wrapper">
        <input class="file-path validate" type="text" placeholder="Иллюстрации к вопросам">
        </div>
        </div>
        <div class="file-field input-field col s4">
            <div class="btn">
        <span>File</span>
        <input id="images" type="file" multiple
        >
        </div>
        <div class="file-path-wrapper">
        <input class="file-path validate" type="text" placeholder="Помощь преподавателю">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col12">
            <h5>Добавление практических задач</h5>
        </div>
        <div class="input-field col s3">
            <input type="number" id="prac_size">
            <label for="prac_size">Кол-во практических задач</label>
        </div>
        <div class="input-field col s1">
            <input type="text" id="prac_grade">
            <label for="prac_grade">баллы</label>
        </div>

    </div>
    <div class="row">
        <div class="file-field input-field col s4">
            <div class="btn">
        <span>File</span>
        <input id="images" type="file" multiple
        >
        </div>
        <div class="file-path-wrapper">
        <input class="file-path validate" type="text" placeholder="Иллюстрации к вопросам">
        </div>
        </div>
        <div class="file-field input-field col s4">
            <div class="btn">
        <span>File</span>
        <input id="images" type="file" multiple
        >
        </div>
        <div class="file-path-wrapper">
        <input class="file-path validate" type="text" placeholder="Помощь преподавателю">
        </div>
        </div>
    </div>
    <button  type="submit" class="btn waves-effect waves-light blue darken-4 ">Добавить</button>
    </form>
    

    </div>
</template>

<script>
import {getSubjects} from "@/api/api"
import {getCapters} from "@/api/api"
import {getTheme} from "@/api/api"
export default {
    data: () => ({
    tasks: [],
    subject: '',
    chapters: [],
    chapter:'',
    themeses: '',
    theme: [] ,
    taskName: '',
    time: ''
}),
    methods: {
        createTask() {
            const formData = {
                name: this.taskName,
                subject: this.subject,
                chapter: this.chapter,
                theme: this.theme
            }
            
        }
    },
    async mounted() {
        const token = localStorage.getItem("token")
        await getSubjects(token).then(data => {
        for(let i = 0; i < data.length; i++){
            this.tasks.push({'value': data[i].name, 'text': data[i].name})
        }
    }).catch(error => console.log(error));
    await getCapters(token).then(data =>{
            for(let i = 0; i < data.length; i++) {
                this.chapters.push({'id': data[i].id,'value': data[i].name, 'text': data[i].name})
            }
            
        }).catch(error => console.log(error));

        await getTheme(token).then(themes => {
            this.themeses = themes
            console.log( this.themeses)
        })
        this.select = M.FormSelect.init(this.$refs.select)
        this.selectSubject = M.FormSelect.init(this.$refs.selectSubject)
        this.selectTheme = M.FormSelect.init(this.$refs.selectTheme)
    },
    destroyed() {
        if(this.select && this.select.destroy){
            this.select.destroy()
        }
        if(this.selectSubject && this.selectSubject.destroy){
            this.selectSubject.destroy()
        }
    }
}
</script>

    <!-- await fetch("http://194.58.107.109:5000/Catalog/GetUserCatalog", {
        method: "GET",
        headers: { "Content-Type": "application/json",Authorization: token }
    }).then(res => res.json()).then(data => {
        for(let i = 0; i < data.length; i++){
            this.tasks.push({'value': data[i].Name, 'text': data[i].Name})
        }
    }).catch(error => console.log(error)); -->


    