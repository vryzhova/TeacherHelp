<template>
    <div>
        <div class="page-title">
        <h3>Создать PDF</h3>
    </div>
    <div class="parametrs">
        <div class="select_wrapper ">
        <label for="selectTestPDF">Выберите контрольную работу</label>
        <select id="selectTestPDF" ref="select">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <div class="input-field">
                <input
                    id="limit"
                    type="number"
                >
                <label for="limit">Лимит</label>
                <span class="helper-text invalid">Минимальная величина</span>
        </div>
        <button class="btn waves-effect waves-light blue darken-4" type="submit">
                Создать
                <i class="material-icons right">create</i>
        </button>
    </div>
    </div>
    
    
    </div>
</template>

<script>

export default {
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
.select_wrapper{
    width: 30vw;
}

</style>