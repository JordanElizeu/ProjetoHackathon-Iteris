<template>
  <div class="home">
    <v-img src="../assets/setembroAmarelo_img.jpg" />
    <h1 class="texto-informativo">{{setembroAmarelo[0].nome}}</h1>
    <p class="texto-informativo">
      Desde 2014, a Associação Brasileira de Psiquiatria – ABP, em parceria com
      o Conselho Federal de Medicina – CFM, organiza nacionalmente o Setembro
      Amarelo®. O dia 10 deste mês é, oficialmente, o Dia Mundial de Prevenção
      ao Suicídio, mas a campanha acontece durante todo o ano.
    </p>
    <p class="texto-informativo">
      São registrados mais de 13 mil suicídios todos os anos no Brasil e mais de
      01 milhão no mundo. Trata-se de uma triste realidade, que registra cada
      vez mais casos, principalmente entre os jovens. Cerca de 96,8% dos casos
      de suicídio estavam relacionados a transtornos mentais. Em primeiro lugar
      está a depressão, seguida do transtorno bipolar e abuso de substâncias.
    </p>
    <p class="texto-informativo">
      São diversos materiais de uso público: Diretrizes para a Divulgação e
      Participação da Campanha Setembro Amarelo®, materiais online para
      download, a
      <a href="http://www.flip3d.com.br/web/pub/cfm/index9/?numero=14"
        >Cartilha Suicídio Informando para Prevenir</a
      >
      e todo o material para a imprensa.
    </p>
    <p class="texto-informativo">{{setembroAmarelo[0].descricao}}</p>
    <p class="texto-informativo"></p>
    <h4 class="texto-informativo">{{setembroAmarelo[1].nome}}</h4>
    <p class="texto-informativo">
      {{ setembroAmarelo[1].descricao }} <a>{{setembroAmarelo[1].link}}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      setembroAmarelo: [],
    };
  },
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json")
      .then((resultado) => resultado.json())
      .then((json) => {
        this.setembroAmarelo = json;
      });
  },
};
</script>

<style>
.texto-informativo {
  margin: 10px;
}
</style>