<template>
  <v-container id="animes">
    <v-card
      class="mx-auto mb-4"
      max-width="344"
      v-for="item of animesLista"
      :key="item.id"
    >
      <v-img :src="item.photo" height="200px"></v-img>

      <v-card-title>
        {{ item.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ item.genre }}
      </v-card-subtitle>

      <v-card-text>
        {{ item.description }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Animes",
  data() {
    return {
      animesLista: [],
      show: [],
    };
  },
  mounted(){
    fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json")
      .then((res) => res.json())
      .then((json) => {
        this.animesLista = json;
        console.log(json);
        this.animesLista.map((el) => {
          this.show[el.id] = false;
        });
        console.log(this.show);
      });
  },

  methods: {
    testes(num) {
      console.log(this.show);
      console.log(num);
    },
  },
};
</script>

<style scoped>
</style>