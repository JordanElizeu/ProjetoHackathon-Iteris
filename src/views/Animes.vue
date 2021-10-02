<template>
  <v-container>
      <v-card
    class="mx-auto mb-4"
    max-width="344"
    v-for="item of animesLista" :key="item.id"
  >
    <v-img
      :src="item.photo"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ item.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ item.genre }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ item.description }}
        </v-card-text>
      </div>
    </v-expand-transition>

  </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Animes",
  data() {
    return {
      animesLista: [],
      show: false
    };
  },

  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json")
      .then((res) => res.json())
      .then((json) => {
        this.animesLista = json;
        console.log(json);
      });
  },
};
</script>

<style scoped>
</style>