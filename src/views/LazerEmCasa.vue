<template>
  <v-container>
    <v-img src="../assets/setembroAmarelo_img.jpg" />
    <h1 class="texto-informativo">O lazer e o suicídio</h1>
    <p class="texto-informativo">
      Para combater o suicídio, muitas atitudes são necessárias, essas incluem uma boa alimentação, boas noites de sono, exercícios físicos e etc. Mas não é só isso, atividades de lazer não devem ser deixadas de lado. Durante a pandemia, tem sido um grande desafio para muitos encontrar formas criativas de passar tempo em casa. O uso de jogos eletrônicos, programas televisivos, desenhos e animes e outras formas de lazer, estão sendo muito usadas como "passa tempo" nesse período. Sabendo disso, fizemos uma lista de jogos e animes que podem ser um bom "passa tempo".
    </p>
    <p>Clique em um dos botões abaixo e veja alguns games e animes que separamos para vocês:</p>
    <v-btn
      depressed
      color="#0092E3"
      class="btn-games"
      to="/jogos"
    >
      Games
    </v-btn>
    <v-btn
      depressed
      color="#E9BE0E"
      class="btn-animes"
      to="/animes"
    >
      Animes
    </v-btn>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-games{
  margin-left: 10%;
  transform: scale(1.4);
}
.btn-animes{
  margin-left: 25%;
  transform: scale(1.4);
}
</style>