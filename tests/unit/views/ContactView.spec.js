import { mount, shallowMount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import ContactView from '@/views/ContactView.vue'



describe('<ContactView/>', () => { 
    test('Probando que el router cargue la vista <ContactView/> ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/contact',
                name: 'contact',
                component: ContactView
            }],
        })
        router.push('/contact')
        await router.isReady()

        const wrapper = mount(ContactView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(ContactView).exists()).toBe(true)
    })
    
    test('ContactView debería tener un <h1> con el texto correcto',()=>{

        const wrapper = mount(ContactView);

        expect(wrapper.find('h1').text()).toBe('ContactView works');

    })
 })