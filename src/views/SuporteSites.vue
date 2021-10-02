<template>
    <v-container>
        <h2 class="Titulo">
            Sites de Apoio
        </h2>
        <p>
            Precisa de ajuda? Clique na imagem
        </p>
        <SuporteTabela :links="SitesOrdenados"/>
    </v-container>
</template>

<script>
import SuporteTabela from '../components/SuporteTabela.vue'

export default {
    name: 'SitesLista',
    components: {
        SuporteTabela
    },
    data() {
        return {
            SitesLista: []
        }
    },
    created() {
        fetch('https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json')
        .then(response => response.json())
        .then(json => {
            this.SitesLista = json
        })
    },
    computed: {
        SitesOrdenados (){
            const listaComputada = this.SitesLista;
            return listaComputada;
        }
    }
}
</script>