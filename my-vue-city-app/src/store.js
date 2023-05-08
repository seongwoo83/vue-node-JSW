// 뷰엑스 스토어 - 전역 뷰 데이터 저장소

import Vue from 'vue';
import Vuex from 'vuex';
import 'babel-polyfill';
import {myD0, myD1, myD2} from './jsData/cityData';

// Vuex 라이브러리를 Vue 프레임 워크에서 사용하려면?
// Vue.use(Vuex) -> 뷰에서 Vuex 사용 등록 필수!!
Vue.use(Vuex);
/*****************************************
    [ SPA 개발 환경에서 store를 내보낸 후 사용시 주의사항 ]
    -> vue확장자 파일에서 이를 사용시 일반 변수와 같이 store. 라고 호출하면 에러가 발생함
    - 왜 why? 일반 JS파일이 아니기 떄문
    따라서 this.$store. 라고 호출해야함
    여기서 this는 뷰인스턴스 객체 자신
    $store는 전역 뷰엑스 스토어에 등록된 변수를 지칭함 



*****************************************/

/* ******************************** 뷰엑스 스토어를 활용한 변수 세팅하기 ********************************/
// 1. 뷰엑스 스토어 인스턴스를 생성한다
const store = new Vuex.Store({
    // (1) 데이터 세팅구역
    state:{
        // 도시 데이터 셋업
        // 스프레드 연산자로 두개의 객체를 합친다
        // {...객체1, ...객체2}
        cityData: {...myD0, ...myD1, ...myD2},
        // 이미지정보 셋업변수
        imgsrc:"",
        // 도시설명정보 셋업변수
        desc:"",
    },
    // (2) 데이터 변경 메서드 구역 : 호출시 commit()사용
    mutations:{
        // 초기 데이터 셋업 메서드
        initSet(헐){
            console.log("데이터변경! 초기화", 헐);
            // 파라미터가 객체일 경우(데이터가 다수일때)
            
            // 이미지 데이터 셋업
            헐.imgsrc = 헐.cityData.인트로.이미지;
            // 이미지 설명 셋업
            헐.desc = 헐.cityData.인트로.설명;
        },
        // 데이터 변경 메서드
        chgData(헐, 슉){
            // 이 자리에서 바로 스토어변수를 업데이트 한다
            // 1. 이미지 변수: imgsrc
            헐.imgsrc = 헐.cityData[슉].이미지;
            // 2. 도시설명 변수: desc
            헐.desc = 헐.cityData[슉].설명;
        }
    },
    // (3) 백엔드 관련 코딩 비동기처리 메서드 구역 : 호출시 dispatch()사용
    actions:{
        myAct(헝, 벙){
            console.log("나의 액션", 헝, 벙);
        }
    }
})
export default store;