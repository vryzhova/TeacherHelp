<template>
<div>
    <div class="page-title">
        <h3>Преподаватели</h3>
    </div>
    <form @submit.prevent="submitHandler">
        <div class="input-field">
            <label for="teacherName">ФИО преподавателя</label>
            <input id="teacherName" type="text"
            v-model.trim="name"
            :class="{invalid: $v.name.$dirty && !$v.name.required}"
            >
            <small class="helper-text invalid" v-if="$v.name.$dirty && !$v.name.required">Введите имя преподавателя</small>
        </div>
        <div class="input-field">
            <label for="teacherEmail">Email</label>
            <input id="teacherEmail" type="text"
            v-model.trim="email"
            :class="{invalid:($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
            >
        <small class="helper-text invalid"
        v-if="$v.email.$dirty && !$v.email.required"
        >Поле Email не должно быть пустым</small>
        <small class="helper-text invalid"
        v-else-if="$v.email.$dirty && !$v.email.email"
        >Введите корректный Email</small>
        </div>
        <div class="input-field col s12 subject">
            <select ref="select" multiple
            v-model="myselect"
            :class="{invalid: ($v.myselect.$dirty && !$v.myselect.required)}"
            >
                <option value="" disabled >Выберите предмет</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <small class="helper-text invalid"
            v-if="$v.myselect.$dirty && !$v.myselect.required"
            >Вы не выбрали ни одного предмета</small>
        </div>

            <button  type="submit" class="btn waves-effect waves-light blue darken-4">Добавить преподавателя</button>
    </form>
    
</div>
</template>



<script>
import { required, email } from "vuelidate/lib/validators";
export default {
    data: () => ({
        name: '',
        email: '',
        myselect: '',
        select: null
    }),
    validations:  {
        name: {required},
        email: {required,email},
        myselect: {required}
        
    },
    methods: {
        submitHandler() {
            if (this.$v.$invalid) {
            this.$v.$touch()
            return
            }
        }
    },
    mounted() {
        this.select = M.FormSelect.init(this.$refs.select)
    },
    destroyed() {
        if(this.select && this.select.destroy){
            this.select.destroy()
        }
    }
}
</script>


<style scoped>
form {
    display: flex;
    flex-direction: column;
}
input {
    width: 40vw;
}
.btn {
    width: 300px;
}
.subject{
    width: 35vw;
}

</style>