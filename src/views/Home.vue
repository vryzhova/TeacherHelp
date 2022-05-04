<template>
  <div>
    <div class="page-title">
      <h3>Дисциплины</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#" @click="addSubject">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  methods: {
    addSubject() {
      this.$router.push('/createSubject')
    }
  }

}
</script>
