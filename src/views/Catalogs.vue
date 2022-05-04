<template>
  <div>
    <div class="page-title">
      <h3>Каталоги</h3>
      <button class="btn waves-effect waves-light btn-small" @click="addCatalog()">
        <i class="material-icons">add</i>
      </button>
    </div>
    <ul>
      <li>Дискретная математика</li>
    </ul>

    

  </div>
</template>


<script>
export default {

  methods: {
    addCatalog() {
      this.$router.push('/createSubject')
    }
  }

}
</script>

<style scoped>
li {
  font-size: 25px;
}
li:hover {
  color: blue;
}
</style>