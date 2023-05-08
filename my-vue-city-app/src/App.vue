<template>
  <div id="app">
    <TopArea />
    <MainArea />
    <InfoArea />
  </div>
</template>

<script>
import TopArea from "./components/TopComp";
import MainArea from "./components/MainComp";
import InfoArea from "./components/InfoComp";

export default {
  name: "App",
  components: {
    TopArea,
    MainArea,
    InfoArea
  }
};
</script>

<style>
#app {
    width: 500px;
    margin: 0 auto;
}
</style>
