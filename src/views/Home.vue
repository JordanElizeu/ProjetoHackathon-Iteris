<template>
  <div class="home">
    <v-img src="../assets/setembroAmarelo_img.jpg" />
    <h1 class="texto-informativo">Setembro Amarelo</h1>
    <p class="texto-informativo">
      Desde 2014, a Associação Brasileira de Psiquiatria – ABP, em parceria com
      o Conselho Federal de Medicina – CFM, organiza nacionalmente o Setembro
      Amarelo®. O dia 10 deste mês é, oficialmente, o Dia Mundial de Prevenção
      ao Suicídio, mas a campanha acontece durante todo o ano.
    </p>
    <v-img src="https://media1.giphy.com/media/McakAWU5WMglyoyk7h/source.gif"/>
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
        >Cartilha Suicídio Informando para Prevenir</a>
      e todo o material para a imprensa.
    </p>
    <v-img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9fff4388604987.5ddbc7846738d.gif"/>
    <p class="texto-informativo">
      Contudo, tratando-se de prevenção, necessário se atentar também a medidas 
      paliativas, especialmente no período de pandemia. Ou seja, em decorrência do 
      isolamento social, é salutar que se pratique atividades que ocupem o cérebro,
      dada a ausência de interação social presencial. Portanto o site também busca lhes 
      apresenta passatempos, como jogos e animes.
    </p>
    <p class="texto-informativo">
      Portanto, recomenda-se fortemente o estímulo da tecnologia como mecanismo de
      interação social, desde que de forma salutar. Acaso venha tendo pensamentos de 
      autolesão, destaca-se a guia "Iniciativas de Apoio", em que são indicados 
      profissionais e sites para conscientização.
    </p>
    <v-btn
      depressed
      color="yellow"
      class="btn-support"
      to="/siteslista"
    >
      <strong>Apoio</strong>
    </v-btn>
    <v-btn
      depressed
      color="primary"
      class="btn-games"
      to="/jogos"
    >
      Games
    </v-btn>
    <v-btn
      depressed
      color="error"
      class="btn-animes"
      to="/animes"
    >
      Animes
    </v-btn>
    <br/><br/>
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
.btn-games{
  margin-left: 9%;
  transform: scale(1.2);
}
.btn-animes{
  margin-left: 9%;
  transform: scale(1.2);
}
.btn-support{
  margin-left: 5%;
  transform: scale(1.2);
}
</style>
