<template>
  <v-container>
    <v-navigation-drawer v-model="drawer" app style="background-color:#FECF0A">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Setembro Amarelo
          </v-list-item-title>
          <v-list-item-subtitle>
            Combatendo o suicídio
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app style="background-color:#FECF0A">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Setembro Amarelo</v-toolbar-title>
    </v-app-bar>

  </v-container>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
        items: [
          { title: 'Home', icon: 'mdi-home', to:"/" },
          { title: 'Lazer em casa', icon: 'mdi-gamepad-variant-outline', to:"/lazer" },
          { title: 'Iniciativas de Apoio', icon: 'mdi-help-box', to:"/siteslista" },
        ],
        right: null,
        drawer: null
    };
  },
};
</script>

<style scoped>
</style>