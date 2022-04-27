<template>
<div>
    <div class="page-title">
        <h3>Преподаватели</h3>
    </div>
    <form>
        <label for="teacherName">ФИО преподавателя</label>
            <input id="teacherName" type="text">
        <label for="Email">Email</label>
            <input id="Email" type="text">
        <div class="input-field col s12 subject">
            <select ref="select" multiple>
                <option value="" disabled selected>Выберите предмет</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
        </div>

            <button class="btn blue darken-4">Добавить преподавателя</button>
    </form>
    
</div>
</template>


<!-- <select name="subjects" id="subjects">
            <option>Дискретная математика</option>
            <option>Дискретная математика</option>
    </select> -->

<script>
export default {
    data: () => ({
        select: null
    }),

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