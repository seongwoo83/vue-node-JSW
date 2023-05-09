<template>
  <header>
    <ul class="gnb">
      <!-- v는 값, i는 속성명 -->
      <!-- 리액티브 데이터인 뷰엑스 스토어 cityData변수를 컴포넌트 변수인 sdata에 할당하여 사용하면 처음에만 할당된 변수로 세팅이 되고 cityData가 변경될때 반영되지 않음
      따라서 리액티브 데이터를 직접 해당 자리에 사용해야한다 -->
      <li
        v-for="(v, i) in this.$store.state.cityData"
        v-bind:kdy="i"
        v-if="i !== '인트로'"
      >
        <a href="#" v-on:click="chgData(i)">{{ i }}</a>
      </li>
    </ul>
    <!-- 메뉴 선택 이동 링크 -->
    <div class="m2">
      <!-- v-on:이벤트명.prevent 라고 쓰면 event.preventDefault()와 같다 -->
      <a href="#" v-on:click.prevent="chgMenu(num)" v-text="'메뉴' + num"></a>
    </div>
  </header>
</template>

<script>
import $ from "jquery";
export default {
  name: "TopArea",
  data() {
    return {
      // 1. 도시정보 객체변수
      sdata: this.$store.state.cityData,
      // 2. 메뉴 번호 변수
      num: 2
    };
  },
  methods: {
    // 스토어 변수 업데이트 메서드
    chgData(pm) {
      console.log("업데이트", pm);
      // mutations 메서드 호출하기 :  commit()
      this.$store.commit("chgData", pm);
    },
    // 메뉴 변경하기 메서드
    chgMenu(n) {
      //n - 메뉴번호 전달
      console.log("메뉴변경", n);
      this.$store.commit("chgMenu", n);

      // 메뉴1/메뉴2 전환을 위한 변수 변경하기
      // 컴포넌트 변수인 num을 변경한다
      n === 1 ? (this.num = 2) : (this.num = 1);

      // 메뉴 변경시 DOM이 변경되므로 제이쿼리 메서드 호출하기
      // 단, 제이쿼리 코드블럭으로 싸서 호출함으로  DOM로드 후 실행 보장
      $(()=>this.setJQ());
    },
    // 제이쿼리 세팅 메서드
    setJQ() {
      // 링크 클릭시 a에 클래스 on주기
      $(".gnb a").on("click", function(e) {
        e.preventDefault();
        $(this)
          .addClass("on")
          .parent()
          .siblings()
          .find("a")
          .removeClass("on");

        // 박스 애니
        showBx();
      }); ////////// click ///////////

      function showBx() {
        // 이미지와 설명박스 순서대로 나타나기
        $("main img")
          .css({ opacity: 0 })
          .stop()
          .delay(500)
          .fadeTo(500, 1);

        $("main p")
          .css({ opacity: 0 })
          .stop()
          .delay(1000)
          .fadeTo(500, 1);
      } ////// showBx ////
    }
  },
  // DOM을 만들고 난후
  mounted(){
    // 제이쿼리 세팅 메서드 호출
    this.setJQ();
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  padding: 15px;
  border: 2px solid #ccc;
}
header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0 15px;
}
header a {
  font-size: 30px;
  color: #222;
  text-decoration: none;
}
header a:hover,
header a.on {
  color: orangered;
  text-decoration: overline;
  text-decoration-style: wavy;
}
.m2 {
  display: block;
  text-align: right;
}
.m2 a {
  font-size: 20px;
}
.m2 a:hover {
  text-decoration: underline;
  text-decoration-style: double;
  color: green;
}
</style>
