<template>
  <div>
    <div class="page-title">
      <h3>Каталоги</h3>
      <button class="btn waves-effect waves-light btn-small" @click="addCatalog()">
        <i class="material-icons">add</i>
      </button>
    </div>
    <div class="row">
      <div class="col s3 catalog-items" v-for="catalog in catalogs"
      :key="catalog.name"
      >
      <i class="medium material-icons">folder</i><div class="catalog_size">{{catalog.size}}</div> <span>{{catalog.name}}</span>
      </div>
    </div>
      

    

  </div>
</template>


<script>
export default {
  data: ()=> ({
    catalogs: [
      {name:'Сети Петри',size:7},
      {name:'Транспортные сети',size:10},
      {name:'Нейронные сети',size:1}
      ]
  }),
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
.btn {
  background-color: #EC1946;
}
.catalog-items {
  display: flex;
  align-items: center;
  position: relative;
}
.catalog_size {
position: absolute;
color:white;
z-index: 1000;
left: 36px;
}
</style>