<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th colspan="1" class="text-left">
                        Nome
                    </th>
                    <th colspan="2" class="text-left">
                        Link
                    </th>
                    <th colspan="3" class="text-left">
                        Descrição
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="link in links"
                    :key="link.id"
                >
                    <td >{{ link.nome}}</td>
                    <td >
                        <v-avatar size="20">
                            <img :src="link.imagem" :alt="link.categoria" href="link.link"/>
                        </v-avatar>
                        <span>{{ "   " + time.nome }}</span>
                    </td>
                    <td></td>
                    <td>{{ link.descricao }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>    
</template>

<script>
export default {
    name: 'SuporteTabela',
    props: {
        times: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

</style>