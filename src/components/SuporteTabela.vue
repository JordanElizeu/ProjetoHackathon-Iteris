<template>
  <v-simple-table class="suporte-tabela">
    <template v-slot:default>
        <center>
      <tbody>
        <tr v-for="link in links" :key="link.id" class="tabelas">
          <td></td>
          <v-card class="mx-auto" max-width="300">
              <a :href="link.link">
            <v-img
            class="imagem"
              :src="link.imagem"
              height="180px"
            ></v-img>
            </a>

            <h4 class="mt-4 ml-2 mr-2"> {{link.nome}} </h4>

            <v-card-subtitle class="mt-4 mb-4"> {{link.descricao}} </v-card-subtitle>
          </v-card>
        </tr>
      </tbody>
      </center>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "SuporteTabela",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.tabelas {
  margin-top: 20px;
}
.imagem{
    margin: 20px;
}
.suporte-tabela a{
        text-decoration: none;
}

</style>
