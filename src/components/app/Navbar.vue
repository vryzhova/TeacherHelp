<template>
    <nav class="navbar blue darken-4  ">
        <div class="nav-wrapper">
        <div class="navbar-left">
            <a href="#" @click.prevent="$emit('click')">
                <i class="material-icons white-text">dehaze</i>
            </a>
            <span class="white-text">{{date | date('date')}}</span>
        </div>
        <div id="logo">
            <img src="@/assets/logo.png">
        </div>
        <ul class="right hide-on-small-and-down">
            <li>
            <a
                class="dropdown-triggerwhite-text"
                href="#"
                data-target="dropdown"
                ref="dropdown"
            >
                {{name}}
                <i class="material-icons right">arrow_drop_down</i>
            </a>

            <ul id='dropdown' class='dropdown-content'>
                <li>
                <router-link to="/profile" class="black-text">
                    <i class="material-icons">account_circle</i>Профиль
                </router-link>
                    </li>
                <li class="divider" tabindex="-1"></li>
                <li>
                <a href="#" class="black-text" @click.prevent="logout">
                    <i class="material-icons">assignment_return</i>Выйти
                </a>
                </li>
            </ul>
            </li>
        </ul>
        </div>
    </nav>

</template>

<script>
export default {
    data: () => ({
        date: new Date(),
        interval: null,
        dropdoun: null,
        name: 'иван Иванов'
    }),
    methods: {
        logout() {
            console.log('Logout')
            this.$router.push('/?messege=logout')
        }
    },
    mounted(){
        this.interval = setInterval(() => {
            this.date = new Date()
        } , 1000 )
        this.dropdown = M.Dropdown.init(this.$refs.dropdown,{
            constrainWidth: false
        })
        const token = localStorage.getItem("token") 
        },

    beforeDestroy() {
        clearInterval(this.interval)
        if (this.dropdown && this.dropdown.destroy) {
            this.dropdown.destroy()
        }
    }
}
</script>

<style scoped>
img {
    width: 300px;
    /* height: 60px; */
    display: flex;

}

#logo {
    object-fit: cover;
}
</style>