<template>
  <div>
    <div class="page-title">
      <h3>Дисциплины</h3>
      <button class="btn waves-effect waves-light" type="button" @click="addTest">
                Создать контрольную
                <i class="material-icons right">create</i>
        </button>
    </div>
    <Subjects />
    <!-- <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#" @click="addSubject">
        <i class="large material-icons">add</i>
      </a>
    </div> -->
  </div>
</template>

<script>
import Subjects from "@/components/app/Subjects.vue"
export default {
  
  name: 'home',
  data: () => ({
      subjects: [
        {title: 'Дискретная математика', url: '/catalogs'}
      ]
  }),
  methods: {
    addTest() {
      this.$router.push('/createTest')
    }
  },
  components: {

    Subjects
}
}
</script>

<style scoped>
.btn {
  background-color: #EC1946;
}
</style>