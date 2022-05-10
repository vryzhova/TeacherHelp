<template>
    <div>
    <router-link
    v-for="subject in subjects"
    :key="subject.url"
    tag="li"
    :to="subject.url"
    >
    <a href="#">{{subject.title}}</a>
    </router-link>
    </div>
</template>


<script>
// import axios from 'axios'
export default {
data: () => ({
    subjects: [
        {title: 'Дискретная математика', url: '/catalogs'}
    ]
})
}
</script>