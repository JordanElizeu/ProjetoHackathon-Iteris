<template>
  <v-container>
      <v-card
    class="mx-auto mb-4"
    max-width="344"
    v-for="item of jogosLista" :key="item.id"
  >
    <v-img
      :src="item.photo"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ item.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ item.genre }} - {{ item.year }}
    </v-card-subtitle>

  </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Jogos",
  data() {
    return {
      jogosLista: [],
    };
  },

  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json")
      .then((res) => res.json())
      .then((json) => {
        this.jogosLista = json;
        console.log(json);
      });
  },
};
</script>

<style scoped>
</style>