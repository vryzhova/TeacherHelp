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
                <option value="Теория множеств">Теория множеств</option>
                <option value="Теория множеств">Теория множеств</option>
                <option value="Теория сетей">Теория сетей</option>
            </select>
        </div> 
        <div class="col s3">
            <label for="ThemeName">Темы</label>
            <select  ref="selectTheme" name="ThemeName" id="ThemeName" multiple v-model="theme">
                <option value="Сети Петри">Сети Петри</option>
                <option value="Транспортные сети">Транспортные сети</option>
                <option value="Нейронные сети">Нейронные сети</option>
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
    <button  type="submit" class="btn waves-effect waves-light blue darken-4 ">Добавить</button>
    </form>
    

    </div>
</template>

<script>
import {getSubjects} from "@/api/api"
export default {
    data: () => ({
    tasks: [],
    subject: '',
    chapter: '',
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
            console.log(formData)
        }
    },
    async mounted() {
        const token = localStorage.getItem("token")
        await getSubjects(token).then(data => {
        for(let i = 0; i < data.length; i++){
            this.tasks.push({'value': data[i].Name, 'text': data[i].Name})
        }
    }).catch(error => console.log(error));
    
    console.log(this.tasks)
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