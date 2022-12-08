# music-blog

![image](https://user-images.githubusercontent.com/110578739/205653837-76f39a9f-7008-4e45-a730-df59b0f7151f.png)

## 🔍 프로젝트 소개

스마일게이트 윈터 데브캠프에서 팀 프로젝트 전 진행하는 1인 프로젝트입니다.  
좋아하는 노래를 추천해주고 몰랐던 노래를 추천받을 수 있는 노래 추천 블로그입니다.

## 🎯 프로젝트 목표

> 프론트엔드 목표

1. jest, testing library를 이용한 프론트엔드 테스트연습으로 테스트 대상 및 방법 구체화 하기
2. 팀프로젝트에서 사용할 기술 스택 및 라이브러리 익히기 2-1. Redux를 사용한 상태관리 라이브러리 익히기 2-2. React query를 사용하여 sever data, client data 분리 연습 2-3. tailwind css로 빠르게 디자인 구현하는 연습
3. 컴포넌트 구조 설계 패턴들에대해 공부하고 적절한 패턴 선택하는 안목 향상시키기
4. 리렌더링 또는 렌더링 시간 최소화 시키는 성능 개선 시도하기

> 백엔드 목표

1. 백엔드와 협업시 필요한 용어 및 기본지식 익히기
2. 혼자서도 풀스택으로 간단한 웹앱을 만들 수 있는 능력 기르기 2-1. MYSQL을 사용하여 표준 SQL 문법 익히기 2-2. Node.js(Express.js)사용하여 DB에 연결, 미들웨어 정의 등에 대하여 학습하기
3. 백엔드와 협업시 구체적으로 어떤 부분에서 어떻게 소통을 하면 좋을지 경험해보고 기록하기

> 그 외 목표

1. 구체적이고 명확한 기능 정의로 기획/설계 단계의 중요성 깨닫기
2. 비즈니스 로직과 View의 구분 기준에 대해 고민하고 2개를 명확히 분리하는 아키텍처 설계 및 코드 작성하기
3. 프로젝트를 하면서 겪은 문제점 및 에러사항과 해결방법 기록하면서 진행하기

## 🔧 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=black"><img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=black"> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=React Query&logoColor=black"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=black"> <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=yellow"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=black">

## 📂 디렉토리 구조

## ✏️ 아키텍처

## 📱 기능 정의

- 기본적으로 로그인 없이 익명으로 구현
- 글 작성
  - 제목에 추천할 노래제목과 가수 입력으로 썸네일 추천 기능(네이버 이미지 검색 api이용)
- 글 삭제, 수정
  - 글 수정, 삭제 권한을 위해 글 작성시 클라이언트의 ip와 동일해야함
- 글 추천기능
- 홈 화면에서 글 목록 불러오기
  - default 값으로 최근 글 순으로 정렬
  - 추천순으로 정렬 기능
  - 글 목록 페이지네이션
- 댓글 달기
  - 해당 글의 글쓴이인 경우에만 글쓴이 표시
- 댓글 삭제
  - 해당 댓글 작성한 ip와 동일한 경우에만 삭제 가능
- 관리자 페이지
  - 관리자 페이지에서 글, 댓글 삭제가능
  - 페이지당 글 목록 갯수 조정가능

## 📚 UI/UX

## 📖 배운점 및 후기
