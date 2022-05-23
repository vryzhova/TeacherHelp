<template>
    <ul class="sidenav  app-sidenav" :class="{open: value}">
        <router-link
        v-for="link in links"
        :key="link.url"
        tag="li"
        active-class="active" :to="link.url"
        :exact="link.exact"
        >
            <a href="#" class="waves-effect waves-red pointer">{{link.title}}</a>
        </router-link>
    </ul>
</template>

<script>
export default {
    props: ['value'],
    data: () => ({
        links: [
            {title: 'Контрольные работы', url: '/home', exact: true},
            {title: 'Каталоги', url: '/catalogs'},
            {title: 'Создание PDF', url: '/createPDF'},
            {title: 'Преподаватели', url: '/admin/teachers'}
            
        ]
    })
}
</script>