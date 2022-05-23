<template>
<div>
    <div class="page-title">
        <h3>Преподаватели</h3>
    </div>
    <form @submit.prevent="submitHandler">
    <div class="row"> 
        <div class="input-field col s6">
            <label for="teacherName">ФИО преподавателя</label>
            <input id="teacherName" type="text"
            v-model.trim="name"
            :class="{invalid: $v.name.$dirty && !$v.name.required}"
            >
            <small class="helper-text invalid" v-if="$v.name.$dirty && !$v.name.required">Введите имя преподавателя</small>
        </div>
        <div class="input-field col s6">
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
        <div class="input-field col s6">
            <label for="teacherLogin">Логин</label>
            <input id="teacherLogin" type="text"
            v-model.trim="login"
            :class="{invalid: $v.login.$dirty && !$v.login.required}"
            >
            <small class="helper-text invalid" 
            v-if="$v.login.$dirty && !$v.login.required">
            Поле Логин не должно быть пустым
        </small>
        </div>
        <div class="input-field col s6">
            <label for="teacherPassword">Пароль</label>
            <input id="teacherPassword" type="password"
            v-model="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}">
            <small class="helper-text invalid" 
            v-if="$v.password.$dirty && !$v.password.required"
            >
            Введите пароль
            </small>
            <small class="helper-text invalid" 
            v-if="$v.password.$dirty && !$v.password.minLength"
            >
            Пароль должен быть не меньше {{$v.password.$params.minLength.min}} символов.Сейчас он {{password.length}}
            </small>
        </div>
        <div class="input-field col 6 subject">
            <select ref="select" multiple
            v-model="myselect"
            :class="{invalid: ($v.myselect.$dirty && !$v.myselect.required)}"
            >
                <option value="" disabled >Выберите предмет</option>
                <option value="дискретка">Дискретная математика</option>
                <option value="2">Физика</option>
                <option value="3">Математика</option>
            </select>
            <small class="helper-text invalid"
            v-if="$v.myselect.$dirty && !$v.myselect.required"
            >Вы не выбрали ни одного предмета</small>
        </div></div>

            <button  type="submit" class="btn waves-effect waves-light blue darken-4 ">Добавить преподавателя</button>
    </form>
    
</div>
</template>



<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
    data: () => ({
        name: '',
        email: '',
        myselect: [],
        select: null,
        login: '',
        password: ''
    }),
    validations:  {
        name: {required},
        email: {required,email},
        myselect: {required},
        login: {required},
        password: {required, minLength: minLength(3)}
        
    },
    methods: {
        submitHandler() {
            if (this.$v.$invalid) {
            this.$v.$touch()
            return
            }
            const formData = {
                name: this.name,
                email: this.email,
                myselect: this.myselect,
                login: this.login,
                password: this.password
            }
            console.log(formData)
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