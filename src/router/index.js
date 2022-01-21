import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GalleriesByYear from '../views/GalleriesByYear.vue'
import Gallery_2022 from '../views/2022.vue'
import Gallery_2021 from '../views/2021.vue'
import Gallery_2020 from '../views/2020.vue'
import Gallery_2019 from '../views/2019.vue'
import Gallery_2018 from '../views/2018.vue'
import FullsizePhoto from '../views/FullsizePhoto'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/years',
    Name: 'Galleries_By_Year',
    component: GalleriesByYear
  },
  {
    path: '/2022',
    Name: '2022_Gallery',
    component: Gallery_2022
  },
  {
    path: '/2021',
    Name: '2021_Gallery',
    component: Gallery_2021
  },
  {
    path: '/2020',
    Name: '2020_Gallery',
    component: Gallery_2020
  },
  {
    path: '/2019',
    Name: '2019_Gallery',
    component: Gallery_2019
  },
  {
    path: '/2018',
    Name: '2018_Gallery',
    component: Gallery_2018
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
