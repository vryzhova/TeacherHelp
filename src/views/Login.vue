<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Система управления контрольными работами</span>
      <div class="input-field">
        <input
            id="login"
            type="text"
            v-model.trim="login"
            :class="{invalid: ($v.login.$dirty && !$v.login.required) }">

        <label for="login">Логин</label>
        <small class="helper-text invalid"
        v-if="$v.login.$dirty && !$v.login.required"
        >Поле login не должно быть пустым</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid"
        v-if="$v.password.$dirty && !$v.password.required"
        >Введите пароль</small>

        <small class="helper-text invalid"
        v-if="$v.password.$dirty && !$v.password.minLength"
        >Пароль должен быть не меньше {{$v.password.$params.minLength.min}} символов.Сейчас он {{password.length}}</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit blue darken-4"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <!-- <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p> -->
    </div>
  </form>
</template>


<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
import messages from '@/utils/messages'

export default {
  name: 'login',
  data: () => ({
    login: '',
    password: ''
  }),
  validations: {
    login: { required},
    password: {required, minLength: minLength(3)}
  },
  mounted(){
    if(messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        username: this.login,
        password: this.password
      }
    fetch("http://194.58.107.109:5000/Users/Authenticate",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        }).then((response) => {
          if(response.ok) {
            this.$router.push('/home')
            return response.json()
            
          }
          }).then(user => {
          localStorage.setItem("token",user.token)
          }).catch(error => {
            console.log(error)
          });  
    }
  }
}
</script>
