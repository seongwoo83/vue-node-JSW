import Vue from "vue";
import App from "./App";
// 뷰엑스 스토어 JS 불러오기
import store from "./store.js";

/* 뷰 인스턴스 생성하기 */
new Vue({
  el: "#app",
  store, //스토어 사용 인스턴스 등록
  components: { App },
  template: "<App/>",
  created() {
    // 스토어에 있는 initSet  메서드는 어떻게 호출 하나?
    // 스토어 호출 메서드
    // store.commit("메서드명", 파라미터 값)
    // 1. 메서드명은 반드시 문자형으로 입력함
    // 2. 파라미터는 단일값 또는 객체형식으로 입력함
    // 인스턴스 내부 부를 때 $ 표시 없음
    store.commit("initSet")
    // store.commit("initSet", "https://img.freepik.com/premium-vector/city-illustration_23-2147514701.jpg");
    // store.commit("initSet", {
    //   url:
    //     "https://img.freepik.com/premium-vector/city-illustration_23-2147514701.jpg",
    //   txt: "도시소개에 오신 것을 환영합니다."
    // });
    // actions메서드 호출하기: dispatch("메서드명", 전달변수)
    // store.dispatch("myAct", "나야나");
  }
  // 데이터 세팅은 언제 하면 좋을까?
  // created? mounted?
  // DOM에 직접 관여하는 데이터가 아니고 순수 데이터일 때는 처음 뷰 인스턴스가 생성된 후인 created 메서드 구역에 세팅하자
});
