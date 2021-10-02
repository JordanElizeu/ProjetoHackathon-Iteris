<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th colspan="1" class="text-left">
                        Link
                    </th>
                    <th colspan="2" class="text-left">
                        Descrição
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="link in links"
                    :key="link.id"
                    class="tabelas"
                >
                    <td >
                        {{ link.nome }}
                        <a :href="link.link">
                            <v-img
                                contain
                                max-height="102"
                                max-width="100"
                                :src="link.imagem"
                                :alt="link.categoria"
                            ></v-img>
                         </a>
                    </td>
                    <td></td>
                    <td class="margin">{{ link.descricao }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>    
</template>

<script>
export default {
    name: 'SuporteTabela',
    props: {
        links: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    .tabelas {
        margin-top: 20px;
    }
</style>
