import HomeView from "@/views/HomeView.vue"
import { shallowMount } from "@vue/test-utils"

describe('<HomeView/>',()=>{
    test('el componente debe coincidir con el snapshot',()=>{

        const wrapper = shallowMount(HomeView);

        expect(wrapper.html()).toMatchSnapshot();

    })
})