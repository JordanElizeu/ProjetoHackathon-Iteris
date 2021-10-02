<template>
  <v-footer padless style="background-color: #fecf0a">
    <v-col class="text-center" cols="12">
      <a href="https://github.com/JordanElizeu/ProjetoHackathon-Iteris" style="text-decoration:none; color:black"><p style="text-align: center">
        Link do projeto:
        <v-icon size="24px"> mdi-github </v-icon>
      </p></a>
      {{ new Date().getFullYear() }} — <strong>Time 3</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
</style>