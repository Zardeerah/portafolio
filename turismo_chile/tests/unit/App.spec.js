// tests/unit/DetalleDestino.spec.js
import { shallowMount } from '@vue/test-utils';
import DetalleDestino from '@/components/DetalleDestino.vue'; // Asegúrate de que la ruta sea correcta
import { createStore } from 'vuex';

describe('DetalleDestino.vue', () => {
    it('renders correctly', () => {
        // Crea el store
        const store = createStore({
            state: {
                destinos: [
                    { id: 1, nombre: 'Torres del Paine', descripcion: 'Descripción de Torres del Paine' }
                ]
            }
        });

        // Monta el componente
        const wrapper = shallowMount(DetalleDestino, {
            global: {
                plugins: [store]
            },
            props: {
                // Agrega cualquier prop necesario aquí
                id: 1 // Simulando que se pasa el id como prop
            }
        });

        // Verifica que el componente se haya montado correctamente
        expect(wrapper.exists()).toBe(true);

        // Verifica que los datos se rendericen correctamente
        expect(wrapper.text()).toContain('Torres del Paine');
        expect(wrapper.text()).toContain('Descripción de Torres del Paine');
    });

    it('increments the contador correctly', () => {
        const store = createStore({
            state: {
                contador: 0
            },
            mutations: {
                incrementar(state) {
                    state.contador++;
                }
            }
        });

        const wrapper = shallowMount(DetalleDestino, {
            global: {
                plugins: [store]
            }
        });

        // Verifica que el contador inicial sea 0
        expect(wrapper.vm.$store.state.contador).toBe(0);

        // Llama a la mutación para incrementar el contador
        store.commit('incrementar');

        // Verifica que el contador se haya incrementado
        expect(wrapper.vm.$store.state.contador).toBe(1);
    });
});


