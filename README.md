# music-blog

![image](https://user-images.githubusercontent.com/110578739/207832308-fdeb54f6-43ac-4f13-919c-7f0bae533f8c.png)

## 🔍 프로젝트 소개

스마일게이트 윈터 데브캠프에서 팀 프로젝트 전 진행하는 1인 프로젝트입니다.  
좋아하는 노래를 추천해주고 몰랐던 노래를 추천받을 수 있는 노래 추천 블로그입니다.

## 💻 시작하기

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

**using naver open api**

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

> 백엔드 목표

1. 백엔드와 협업시 필요한 용어 및 기본지식 익히기
2. 혼자서도 풀스택으로 간단한 웹앱을 만들 수 있는 능력 기르기
   1. MYSQL을 사용하여 표준 SQL 문법 익히기
   2. Node.js(Express.js)사용하여 DB에 연결, 미들웨어 정의 등에 대하여 학습하기
3. 백엔드와 협업시 구체적으로 어떤 부분에서 어떻게 소통을 하면 좋을지 경험해보고 기록하기

> 그 외 목표

1. 구체적이고 명확한 기능 정의로 기획/설계 단계의 중요성 깨닫기
2. 비즈니스 로직과 View의 구분 기준에 대해 고민하고 2개를 명확히 분리하는 아키텍처 설계 및 코드 작성하기  
   ❗️ **custom hooks으로 page의 뷰와 로직 분리 하였음**
3. 프로젝트를 하면서 겪은 문제점 및 에러사항과 해결방법 기록하면서 진행하기

## 🔧 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=React Router&logoColor=black"> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=black"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=black"> <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=yellow"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=black">

## 📂 디렉토리 구조

## ✏️ 아키텍처

## 📱 기능 정의

- 기본적으로 로그인 없이 익명으로 구현
  - default 값으로 실제 ip 사용
  - ip 설정하기로 ip custome 가능
- 글 작성
  - 제목에 추천할 노래제목과 가수 입력으로 썸네일 추천 기능(네이버 이미지 검색 api이용)
- 글 삭제, 수정
  - 글 수정, 삭제 권한을 위해 글 작성시 클라이언트의 ip와 동일해야함
  - 글 삭제시 해당 댓글 정보 삭제
- 글 추천기능
- 홈 화면에서 글 목록 불러오기
  - default 값으로 최근 글 순으로 정렬
  - 추천순으로 정렬 기능
  - 글 목록 페이지네이션
- 댓글 달기
  - 해당 글의 글쓴이인 경우에만 글쓴이 표시
  - 나머지 댓글 작성자들은 익명으로 표시
- 댓글 삭제
  - 해당 댓글 작성한 ip와 동일한 경우에만 삭제 가능
- 관리자 페이지
  - 관리자 페이지에서 글, 댓글 삭제가능
  - 페이지당 글 목록 갯수 조정가능

## 📚 UI/UX

## ❓ 코드 중 확인받고 싶은 부분

axios를 테스트 하는 코드를 작성 했는데 이런식으로 테스트 하는게 맞는지  
mock으로 가상 axios를 만들어 테스트하는게 무슨 의미인지?

댓글 post주소를 `/reply`  
댓글 리스트를 get하는데 주소를 `/reply/:postId`  
이라 정했는데 댓글 처럼 글에 종속된 정보를 rest api 기준으로 어떻게 정할지 ex) `/post/:postId/reply`

useViewPost에서 onAddReply함수를 써서 댓글을 달고 댓글 리스트 정보를 다시 api를 호출할지 , api를 호출하지 않고 state로 자체적으로 업데이트 하는게 나은지

components폴더의 PaginationBtn보면 로직이 간단하고 코드가 짧다고 생각해서 view <-> logic을 use훅으로 빼지 않았는데 이렇게 짧고 간단한 코드의 경우도 일관성을 위해 logic을 분리하는지?

usePages의 useAddPost, useEditPost, useViewPost를 보면 비슷한 부분이 많으면서 조금씩 다른데 이러한 훅을 어디까지 쪼개어 재사용할지

재사용이 없다고 생각한 페이지는 컴포넌트로 분리하지 않았는데(pages폴더의 AddPost, EditPost) 재사용이 없어도 해당 페이지의 경우도 컴포넌트를 더 나눴어야 하는지?

## ❓ 개발 관련 과정에서 궁금했던 부분

테스트 코드에 관해  
unit test만 해보려고 최대한 함수를 작게만들고 하나씩 테스트했는데  
테스트 할 필요가 없다고 생각할 정도의 간단한 1줄짜리 함수에도 테스트를 해야할까

redux의 store로 관리할 상태 vs useState만 관리할 상태 어떤 기준으로 구분 하는지

폴더 구조에 대해 분류하기 애매하면 etc폴더 만들고 한곳에 모았는데 etc폴더보다 여러 종류로 다 나누는게 나은지

함수를 최대한 작게 쪼개서 짧고 간단한 기능을 하도록 나누면 여기에 대해서 unit test를 하는게 맞는지? 아니면 unit test보다 통합 테스트로 여러개의 함수에대해서 하는게 맞는지?

주석을 달지 안달지 기준점, 고려사항

## 📖 배운점 및 후기
