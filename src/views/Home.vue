<template>
  <div>
    <div class="page-title">
      <h3>Дисциплины</h3>
    </div>
    <Subjects />
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#" @click="addSubject">
        <i class="large material-icons">add</i>
      </a>
    </div>
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
    addSubject() {
      this.$router.push('/createSubject')
    }
  },
  components: {

    Subjects
}
}
</script>

