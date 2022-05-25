<template>
    <div>
        <ul class="collapsible expandable subjectList " ref="list">
            <li class="subjectItems"
    v-for="subject in subjects"
    :key="subject"> 
    <div class="collapsible-header"><h6>{{subject}}</h6></div>
    <div class="collapsible-body">
        <div class="row">
            <div class="col s6">
                <h5>Сети петри</h5>
            <div class="teor">Теоретические вопросы <div class="add-button">+</div></div>
            <ul class="teor-tasks_list list">
                <li class="listteor"
                v-for="petriteor in petriteors"
                :key="petriteor.id"
                >- {{petriteor.name}} <div class="delete-button"  >-</div> </li>
            </ul>
            <div class="prac">Практические задачи <div class="add-button">+</div></div>
            <ul class="teor-tasks_list list">
                <li class="listteor"
                v-for="petriprac in petripracs"
                :key="petriprac.id"
                >- {{petriprac.name}} <div class="delete-button">-</div></li>
            </ul>
            </div>
            <div class="col s6">
                <h5>Транспортные сети </h5>
                <ul class="teor-tasks_list list">
                <div class="teor">Теоретические вопросы <div class="add-button">+</div></div>
            <ul class="teor-tasks_list list">
                <li class="listteor"
                v-for="transteor in transteors"
                :key="transteor.id"
                >- {{transteor.name}} <div class="delete-button">-</div></li>
            </ul>
            <div class="prac">Практические задачи <div class="add-button">+</div></div>
            <ul class="teor-tasks_list list">
                <li class="listteor"
                v-for="transprac in transpracs"
                :key="transprac.id"
                >- {{transprac.name}} <div class="delete-button">-</div></li>
            </ul>
            </ul>
            </div>
            <div class="col s6">
                <h5>Транспортные сети </h5>
                <ul class="teor-tasks_list list">
                <div class="teor">Теоретические вопросы <div class="add-button">+</div></div>
            <ul class="teor-tasks_list list">
                <li class="listteor"
                v-for="neurteor in neurteors"
                :key="neurteor.id"
                >- {{neurteor.name}}<div class="delete-button">-</div></li>
            </ul>
            <div class="prac">Практические задачи <div class="add-button">+</div></div>
            <ul class="teor-tasks_list list">
                <li class="listteor"
                v-for="neurprac in neurpracs"
                :key="neurprac.id"
                >- {{neurprac.name}} <div class="delete-button">-</div></li>
            </ul>
            </ul>
            </div>
        </div>
        
    </div>
    </li>
    </ul>
    
    </div>
</template>


<script>
import {getSubjects} from "@/api/api"
export default {
data: () => ({
    subjects: [],
    chapters: [{chapterName:'Теория Сетей'}],
    petriteors:[{id:1, name:'Докажите, что данная сеть Петри является ограниченной и живой.'},
    {id:2 , name:'Докажите, что данная сеть Петри является живой.'}],
    petripracs:[{id:1, name:'Преобразуйте с помощью алгоритма данную сеть Петри к ординарной сети.'},
    {id:2 ,name:'Постройте покрывающее дерево для данной сети Петри'}],
    transteors: [{id:1, name:'Найдите полный поток для следующей транспортной сети и докажите, что он максимален.'}],
    transpracs: [{id:1, name:'Постройте с помощью алгоритма полный поток в данной транспортной сети.'}],
    neurteors: [{id:1, name:'Докажите, что для данной нейронной сети требуется обучение.'}],
    neurpracs: [{id:1, name:'Определите входные и выходные сигналы нейронов в данной сети.'}],
    icon:'expand_more'
}),
async mounted() {
    const token = localStorage.getItem("token")
        await getSubjects(token).then(data => {
        console.log(data)
            for(let i = 0; i < data.length; i++){
            this.subjects.push(data[i].name)
        }
    }).catch(error => console.log(error));

    this.list = M.Collapsible.init(this.$refs.list, {
        accordion: false
    })
    this.chapterList = M.Collapsible.init(this.$refs.chapterList)
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
.list{
    list-style-type: disc;
}
.teor ,.prac{
    display: flex;
    justify-content: space-between;
    padding: 5px;
    background-color: #1946BA;
    color: white;
}
.delete-button{
    width: 20px;
    height: 20px;
    text-align: center;
    line-height:20px;
    display: none;
    color: white;
    background-color: #EC1946;
}
.delete-button:hover{
    display: block;
}
.add-button {
    width: 30px;
    text-align: center;
    line-height:30px;
    height: 30px;
    font-size: 30px;
}
.listteor {
    display: flex;
    justify-content: space-between;
}
</style>

