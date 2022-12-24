# music-blog

![image](https://user-images.githubusercontent.com/110578739/207832308-fdeb54f6-43ac-4f13-919c-7f0bae533f8c.png)

## 📆 프로젝트 완료 여부

2022-12-24, 20시 1차 완료 단, hooks 사용한 성능 개선 필요 + 에러사항 및 배운점 정리 필요

## 🔍 프로젝트 소개

스마일게이트 윈터 데브캠프에서 팀 프로젝트 전 진행하는 1인 프로젝트입니다.  
좋아하는 노래를 추천해주고 몰랐던 노래를 추천받을 수 있는 노래 추천 블로그입니다.

## 💻 시작하기

react : v18.2.0  
nodejs : v18.12.1

**MySQL**

```sql
CREATE DATABASE bbs;

USE bbs;
CREATE TABLE postInfo (
	postId int not null auto_increment primary key,
    title nvarchar(30),
    singer nvarchar(30),
	content nvarchar(500),
    image nvarchar(500),
    userIp nvarchar(20),
    registerDate DATETIME DEFAULT now(),

);

USE bbs;
CREATE TABLE replyInfo (
	replyId int not null auto_increment primary key,
    postId int,
	content nvarchar(100),
    userIp nvarchar(20),
    registerDate DATETIME DEFAULT now()
);
```

**db setting**

```java script
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'bbs',
  multipleStatements: true,
});
```

**Clone the project and access the folder**

```bash
$ git clone https://github.com/Jeongseulho/music-blog.git

$ cd music-blog
```

**using naver search open api key**  
네이버 검색 api 이용 신청 : https://developers.naver.com/products/service-api/search/search.md

```bash
$ cd back
$ touch .env
```

```
// .env
NAVERIMG_API_ID="YOUR_CLIENT_ID" NAVERIMG_API_SECRET="YOUR_CLIENT_SECRET"
```

**install and run server**

```bash
$ cd back
$ npm i
$ npm run dev

$ cd front
$ npm i
$ npm start
```

## 🎯 프로젝트 목표

❗️표시로 추가적인 정보 표시

> 프론트엔드 목표

1. jest, testing library를 이용한 프론트엔드 테스트연습으로 테스트 대상 및 방법 구체화 하기  
   ❗️ **Unit Test만 시행, 비즈니스 로직에 대해서만 시행**
2. 팀프로젝트에서 사용할 기술 스택 및 라이브러리 익히기
   1. Redux를 사용한 상태관리 라이브러리 익히기  
      ❗️ **Redux 대신 Redux-Toolkit 사용**
   2. React query를 사용하여 sever data, client data 분리 연습  
      ❗️ **프로젝트가 작아 RTK-thunk로 userIp만 관리**
   3. tailwind css로 빠르게 디자인 구현하는 연습
3. 컴포넌트 구조 설계 패턴들에대해 공부하고 적절한 패턴 선택하는 안목 향상시키기
4. 리렌더링 또는 렌더링 시간 최소화 시키는 성능 개선 시도하기  
   ❗️ **hooks공부가 부족하여 후에 수정 예정**

> 백엔드 목표

1. 백엔드와 협업시 필요한 용어 및 기본지식 익히기  
   ❗️ **mysql사용으로 table구조 간단하게 파악, rest api 실습, req.body vs req.params vs req.query 방법의 데이터 보내는 방법 공부, cors에러 해결 방법, proxy 설정 등**
2. 혼자서도 풀스택으로 간단한 웹앱을 만들 수 있는 능력 기르기
   1. MYSQL을 사용하여 표준 SQL 문법 익히기
   2. Node.js(Express.js)사용하여 DB에 연결, 미들웨어 정의 등에 대하여 학습하기
3. 백엔드와 협업시 구체적으로 어떤 부분에서 어떻게 소통을 하면 좋을지 경험해보고 기록하기  
   ❗️ **mysql table 열 이름을 프론트에서 사용하는 변수 이름과 통일하면 편할 것 같다, 변수명을 카멜케이스/스네이크케이스 중에서 정하기**

> 그 외 목표

1. 비즈니스 로직과 View의 구분 기준에 대해 고민하고 2개를 명확히 분리하는 아키텍처 설계 및 코드 작성하기  
   ❗️ **custom hooks으로 page의 뷰와 로직 분리**
2. 프로젝트를 하면서 겪은 문제점 및 에러사항과 해결방법 기록하면서 진행하기  
   ❗️ **맨 하단 velog에 따로 기록**

## 🔧 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=React Router&logoColor=black"> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=black"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=black"> <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=yellow"> <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=black">

## 📂 front의 src 디렉토리 구조

📦src  
 ┣ 📂api  
 ┃ ┣ 📂etc  
 ┃ ┣ 📂post  
 ┃ ┗ 📂reply  
 ┣ 📂components  
 ┃ ┣ 📂admin  
 ┃ ┣ 📂etc  
 ┃ ┗ 📂Home  
 ┣ 📂hooks  
 ┃ ┣ 📂etc  
 ┃ ┣ 📂useComponents  
 ┃ ┗ 📂usePages  
 ┣ 📂pages  
 ┣ 📂redux  
 ┣ 📂utils  
 ┣ 📂**tests**  
 ┃ ┣ 📂apiTest  
 ┃ ┗ 📜utilsTest.js

## ✏️ 아키텍처

![아키텍처](https://user-images.githubusercontent.com/110578739/209423200-691bb24b-6549-4fca-bd16-e85b947d5a4b.JPG)

## 📱 기능 정의

- 글 작성  
  ![글작성 - Clipchamp로 제작](https://user-images.githubusercontent.com/110578739/209432340-ebcc0510-a4da-4951-9d94-99d4ff15c7e5.gif)

  - 제목에 추천할 노래제목과 가수 입력으로 썸네일 검색 기능(네이버 이미지 검색 api이용)
  - 10개의 이미지 중 선택가능  
    <br>

- dark mode 토글  
  ![dark mode - Clipchamp로 제작](https://user-images.githubusercontent.com/110578739/209432333-5ca33669-365d-4bb4-b2cf-55bad5244834.gif)  
  <br>

- 로그인 대신 ip 사용  
  ![custom ip - Clipchamp로 제작](https://user-images.githubusercontent.com/110578739/209432334-67faa1aa-0ee4-429f-be9b-1d3edae924cf.gif)

  - default 값으로 실제 ip 사용
  - ip 설정하기로 ip custom 가능  
    <br>

- 글 삭제, 수정  
  ![글 수정 삭제 권한 - Clipchamp로 제작](https://user-images.githubusercontent.com/110578739/209432329-ae2c6886-1683-4f38-8a5d-7625b2cac944.gif)

  - 글 수정, 삭제 권한을 위해 글 작성시 ip와 동일해야함
  - 글 삭제시 해당 댓글 정보 같이 삭제  
    <br>

- 홈 화면에서 글 목록 불러오기  
  ![페이지네이션 - Clipchamp로 제작](https://user-images.githubusercontent.com/110578739/209432335-d509f42d-f7de-4108-82a1-b47827ccb86b.gif)

  - default 값으로 최근 글 순으로 정렬
  - 글 목록 페이지네이션  
    <br>

- 댓글 달기  
  ![작성자 댓글 달기 - Clipchamp로 제작](https://user-images.githubusercontent.com/110578739/209432338-0e64c3c0-2b4e-4921-94b9-8d138448c080.gif)

  - 해당 글의 글쓴이인 경우에만 글쓴이 표시
  - 나머지 댓글 작성자들은 익명으로 표시  
    <br>

- 댓글 삭제  
  ![댓글 달기 삭제 - Clipchamp로 제작](https://user-images.githubusercontent.com/110578739/209432339-a187b95d-6484-4414-9415-5b7d9aa563cd.gif)

  - 해당 댓글 작성한 ip와 동일한 경우에만 삭제 가능  
    <br>

- 관리자 페이지에서 댓글 삭제  
  ![제목 없는 동영상 - Clipchamp로 제작](https://user-images.githubusercontent.com/110578739/209432331-da0efb88-d9de-4cb2-aaa4-d832c0be72c0.gif)  
   <br>

- 관리자 페이지에서 글 미리보기 및 삭제  
  ![관리자페이지 글삭제 - Clipchamp로 제작](https://user-images.githubusercontent.com/110578739/209432332-e12b68c3-7507-4130-b4de-97d1ae141472.gif)  
   <br>

- 차트로 최근 7일간 등록된 댓글 수, 글 수 보여주기  
  <img width="1280" alt="image" src="https://user-images.githubusercontent.com/110578739/209432716-15331d1f-2f20-47a2-b0f5-e4e61aac18b5.png"> <br>

## ❓ 코드 중 확인받고 싶은 부분

📌tests - apiTest폴더에 axios를 테스트 하는 코드를 작성 했는데 이런식으로 테스트 하는게 맞는지

📌댓글을 post하는데 주소를 `/reply`  
댓글 리스트를 get하는데 주소를 `/reply/:postId`  
이라 정했는데 댓글 처럼 글에 종속된 정보를 rest api 기준으로 어떻게 정할지 ex) `/post/:postId/reply`

📌components폴더의 PaginationBtn보면 로직이 간단하고 코드가 짧다고 생각해서 view <-> logic을 use훅으로 빼지 않았는데 이렇게 짧고 간단한 코드의 경우도 일관성을 위해 logic을 분리하는지

```java script
// 페이지네이션 버튼에서 각 버튼(1,2,3...)을 만드는 부분
{Array.from({ length: totalPage }, (_, i) => i + 1).map((pageNum) => (
          <li key={pageNum}>
            <button
              type="button"
              className={
                currentPage === pageNum
                  ? 'h-10 w-10 rounded-full border border-r-0 border-indigo-600 bg-indigo-600 text-white transition-colors duration-150'
                  : 'h-10 w-10 rounded-full text-indigo-600 transition-colors duration-150 hover:bg-indigo-100'
              }
              onClick={() => setCurrentPage(pageNum)}
            >
              {pageNum}
            </button>
          </li>
))}
```

📌usePages의 useAddPost, useEditPost, useViewPost를 보면 비슷한 부분이 많으면서 조금씩 다른데 더 작게 훅을 만들어 재사용해야 할지

## ❓ 개발 관련 과정에서 궁금했던 부분

📌폴더 구조에 대해 분류하기 애매하면 etc폴더 만들고 한곳에 모았는데 etc폴더보다 여러 종류로 다 나누는게 나은지

📌주석을 달지 안달지 기준점, 고려사항

📌글 목록(서버로부터 데이터)을 받아와서 useState(내부 데이터)로 사용하는데 이런 로직이 일반적인지?  
ex) 삭제 기능에서 삭제 버튼을 누른후 백엔드에 삭제를 요청 한 후

1. 자체적인 글목록(내부 state데이터)에서 삭제를 해서 리렌더링 한다(이경우 밑에서 언급할 server date <-> client date 구분 문제 발생)
2. 삭제된 새 글목록(백엔드 서버로부터 데이터)를 받아와서 리렌더링 한다

📌server date <-> client date 구분 문제  
상태관리를 3가지로 분류해보려하는데

1. useState : 내부 데이터 (props전달 많지 않은 경우)
2. redux store : 내부 데이터 (props전달이 많아 전역적으로 사용해야할 경우)
3. rtk query 또는 react query : 서버 데이터  
   서버로 부터의 데이터글 목록(백엔드 서버로부터 데이터)을 받아와서 useState(내부 데이터)로 만드니 서버데이터 / 내부데이터 구분을 어떻게 해야할지 모르겠습니다.

또한, 정한 3가지로 분류하는 이런식으로 상태관리를 나누는게 맞는지

📌view<->logic 구분하는 hooks을 사용하는 컴포넌트, 페이지에 대응하게 이름을 지었는데(ViewPost.jsx - useViewPost.js) 재사용성을 생각해서 hooks 이름을 다르게 짓는게 나을지

## 📖 배운점 및 후기

- 업로드 예정
