<template>
    <div>
        <ul class="collapsible expandable subjectList " ref="list">
            <li class="subjectItems"
    v-for="subject in subjects"
    :key="subject"> 
    <div class="collapsible-header"><h6>{{subject}}</h6></div>
    <div class="collapsible-body">
        <span>Разделы</span>
        <ul>
            <li>Теория множеств</li>
            <li>Теория графов</li>
            <li>Теория сетей</li>
        </ul>
    </div>
    </li>
    </ul>
    
    </div>
</template>


<script>
import {getSubjects} from "@/api/api"
export default {
data: () => ({
    subjects: []
}),
async mounted() {
    const token = localStorage.getItem("token")
        await getSubjects(token).then(data => {
        for(let i = 0; i < data.length; i++){
            this.subjects.push(data[i].Name)
        }
    }).catch(error => console.log(error));

    this.list = M.Collapsible.init(this.$refs.list, {
        accordion: false
    })
}
}
</script>

<style scoped>
/* .subjectList {
    background-color: #1946BA;
} */
.collapsible-header {
    background-color: #1946BA;
    color: white;
    border-bottom: 1px solid white;
}
.collapsible-body {
    border-bottom: 1px solid rgba(255, 255, 255, 0,1);
}
</style>

>