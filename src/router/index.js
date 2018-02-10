import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/components/Rhymesaurus'
import AdjectiveGenerator from '@/components/AdjectiveGenerator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/adjective-generator',
      name: 'AdjectiveGenerator',
      component: AdjectiveGenerator
    }
  ]
})
