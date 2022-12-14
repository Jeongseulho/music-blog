# music-blog

![image](https://user-images.githubusercontent.com/110578739/207832308-fdeb54f6-43ac-4f13-919c-7f0bae533f8c.png)

## π νλ‘μ νΈ μλ£ μ¬λΆ

2022-12-25 22μ μ μΆ μλ£

## π νλ‘μ νΈ μκ°

μ€λ§μΌκ²μ΄νΈ μν° λ°λΈμΊ νμμ ν νλ‘μ νΈ μ  μ§ννλ 1μΈ νλ‘μ νΈμλλ€.  
μ’μνλ λΈλλ₯Ό μΆμ²ν΄μ£Όκ³  λͺ°λλ λΈλλ₯Ό μΆμ²λ°μ μ μλ λΈλ μΆμ² λΈλ‘κ·Έμλλ€.

## π» μμνκΈ°

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
λ€μ΄λ² κ²μ api μ΄μ© μ μ²­ : https://developers.naver.com/products/service-api/search/search.md

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

## π― νλ‘μ νΈ λͺ©ν

βοΈνμλ‘ μΆκ°μ μΈ μ λ³΄ νμ

> νλ‘ νΈμλ λͺ©ν

1. jest, testing libraryλ₯Ό μ΄μ©ν νλ‘ νΈμλ νμ€νΈμ°μ΅μΌλ‘ νμ€νΈ λμ λ° λ°©λ² κ΅¬μ²΄ν νκΈ°  
   βοΈ **Unit Testλ§ μν, λΉμ¦λμ€ λ‘μ§μ λν΄μλ§ μν**
2. ννλ‘μ νΈμμ μ¬μ©ν  κΈ°μ  μ€ν λ° λΌμ΄λΈλ¬λ¦¬ μ΅νκΈ°
   1. Reduxλ₯Ό μ¬μ©ν μνκ΄λ¦¬ λΌμ΄λΈλ¬λ¦¬ μ΅νκΈ°  
      βοΈ **Redux λμ  Redux-Toolkit μ¬μ©**
   2. React queryλ₯Ό μ¬μ©νμ¬ sever data, client data λΆλ¦¬ μ°μ΅  
      βοΈ **νλ‘μ νΈκ° μμ RTK-thunkλ‘ userIpλ§ κ΄λ¦¬**
   3. tailwind cssλ‘ λΉ λ₯΄κ² λμμΈ κ΅¬ννλ μ°μ΅
3. μ»΄ν¬λνΈ κ΅¬μ‘° μ€κ³ ν¨ν΄λ€μλν΄ κ³΅λΆνκ³  μ μ ν ν¨ν΄ μ ννλ μλͺ© ν₯μμν€κΈ°
4. λ¦¬λ λλ§ λλ λ λλ§ μκ° μ΅μν μν€λ μ±λ₯ κ°μ  μλνκΈ°

> λ°±μλ λͺ©ν

1. λ°±μλμ νμμ νμν μ©μ΄ λ° κΈ°λ³Έμ§μ μ΅νκΈ°  
   βοΈ **mysqlμ¬μ©μΌλ‘ tableκ΅¬μ‘° κ°λ¨νκ² νμ, rest api μ€μ΅, req.body vs req.params vs req.query λ°©λ²μ λ°μ΄ν° λ³΄λ΄λ λ°©λ² κ³΅λΆ, corsμλ¬ ν΄κ²° λ°©λ², proxy μ€μ  λ±**
2. νΌμμλ νμ€νμΌλ‘ κ°λ¨ν μΉμ±μ λ§λ€ μ μλ λ₯λ ₯ κΈ°λ₯΄κΈ°
   1. MYSQLμ μ¬μ©νμ¬ νμ€ SQL λ¬Έλ² μ΅νκΈ°
   2. Node.js(Express.js)μ¬μ©νμ¬ DBμ μ°κ²°, λ―Έλ€μ¨μ΄ μ μ λ±μ λνμ¬ νμ΅νκΈ°
3. λ°±μλμ νμμ κ΅¬μ²΄μ μΌλ‘ μ΄λ€ λΆλΆμμ μ΄λ»κ² μν΅μ νλ©΄ μ’μμ§ κ²½νν΄λ³΄κ³  κΈ°λ‘νκΈ°  
   βοΈ **mysql table μ΄ μ΄λ¦μ νλ‘ νΈμμ μ¬μ©νλ λ³μ μ΄λ¦κ³Ό ν΅μΌνλ©΄ νΈν  κ² κ°λ€, λ³μλͺμ μΉ΄λ©μΌμ΄μ€/μ€λ€μ΄ν¬μΌμ΄μ€ μ€μμ μ νκΈ°**

> κ·Έ μΈ λͺ©ν

1. λΉμ¦λμ€ λ‘μ§κ³Ό Viewμ κ΅¬λΆ κΈ°μ€μ λν΄ κ³ λ―Όνκ³  2κ°λ₯Ό λͺνν λΆλ¦¬νλ μν€νμ² μ€κ³ λ° μ½λ μμ±νκΈ°  
   βοΈ **custom hooksμΌλ‘ pageμ λ·°μ λ‘μ§ λΆλ¦¬**
2. νλ‘μ νΈλ₯Ό νλ©΄μ κ²ͺμ λ¬Έμ μ  λ° μλ¬μ¬ν­κ³Ό ν΄κ²°λ°©λ² κΈ°λ‘νλ©΄μ μ§ννκΈ°

## π§ κΈ°μ  μ€ν

<img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=React Router&logoColor=black"> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=black"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=black"> <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=yellow"> <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=black">

## π frontμ src λλ ν λ¦¬ κ΅¬μ‘°

π¦src  
 β£ πapi  
 β β£ πetc  
 β β£ πpost  
 β β πreply  
 β£ πcomponents  
 β β£ πadmin  
 β β£ πetc  
 β β πHome  
 β£ πhooks  
 β β£ πetc  
 β β£ πuseComponents  
 β β πusePages  
 β£ πpages  
 β£ πredux  
 β£ πutils  
 β£ π**tests**  
 β β£ πapiTest  
 β β πutilsTest.js

## βοΈ μν€νμ²

![μν€νμ²](https://user-images.githubusercontent.com/110578739/209423200-691bb24b-6549-4fca-bd16-e85b947d5a4b.JPG)

## π± κΈ°λ₯ μ μ

- κΈ μμ±  
  ![κΈμμ± - Clipchampλ‘ μ μ](https://user-images.githubusercontent.com/110578739/209432340-ebcc0510-a4da-4951-9d94-99d4ff15c7e5.gif)

  - μ λͺ©μ μΆμ²ν  λΈλμ λͺ©κ³Ό κ°μ μλ ₯μΌλ‘ μΈλ€μΌ κ²μ κΈ°λ₯(λ€μ΄λ² μ΄λ―Έμ§ κ²μ apiμ΄μ©)
  - 10κ°μ μ΄λ―Έμ§ μ€ μ νκ°λ₯  
    <br>

- dark mode ν κΈ  
  ![dark mode - Clipchampλ‘ μ μ](https://user-images.githubusercontent.com/110578739/209432333-5ca33669-365d-4bb4-b2cf-55bad5244834.gif)  
  <br>

- λ‘κ·ΈμΈ λμ  ip μ¬μ©  
  ![custom ip - Clipchampλ‘ μ μ](https://user-images.githubusercontent.com/110578739/209432334-67faa1aa-0ee4-429f-be9b-1d3edae924cf.gif)

  - default κ°μΌλ‘ μ€μ  ip μ¬μ©
  - ip μ€μ νκΈ°λ‘ ip custom κ°λ₯  
    <br>

- κΈ μ­μ , μμ   
  ![κΈ μμ  μ­μ  κΆν - Clipchampλ‘ μ μ](https://user-images.githubusercontent.com/110578739/209432329-ae2c6886-1683-4f38-8a5d-7625b2cac944.gif)

  - κΈ μμ , μ­μ  κΆνμ μν΄ κΈ μμ±μ ipμ λμΌν΄μΌν¨
  - κΈ μ­μ μ ν΄λΉ λκΈ μ λ³΄ κ°μ΄ μ­μ   
    <br>

- ν νλ©΄μμ κΈ λͺ©λ‘ λΆλ¬μ€κΈ°  
  ![νμ΄μ§λ€μ΄μ - Clipchampλ‘ μ μ](https://user-images.githubusercontent.com/110578739/209432335-d509f42d-f7de-4108-82a1-b47827ccb86b.gif)

  - default κ°μΌλ‘ μ΅κ·Ό κΈ μμΌλ‘ μ λ ¬
  - κΈ λͺ©λ‘ νμ΄μ§λ€μ΄μ  
    <br>

- λκΈ λ¬κΈ°  
  ![μμ±μ λκΈ λ¬κΈ° - Clipchampλ‘ μ μ](https://user-images.githubusercontent.com/110578739/209432338-0e64c3c0-2b4e-4921-94b9-8d138448c080.gif)

  - ν΄λΉ κΈμ κΈμ΄μ΄μΈ κ²½μ°μλ§ κΈμ΄μ΄ νμ
  - λλ¨Έμ§ λκΈ μμ±μλ€μ μ΅λͺμΌλ‘ νμ  
    <br>

- λκΈ μ­μ   
  ![λκΈ λ¬κΈ° μ­μ  - Clipchampλ‘ μ μ](https://user-images.githubusercontent.com/110578739/209432339-a187b95d-6484-4414-9415-5b7d9aa563cd.gif)

  - ν΄λΉ λκΈ μμ±ν ipμ λμΌν κ²½μ°μλ§ μ­μ  κ°λ₯  
    <br>

- κ΄λ¦¬μ νμ΄μ§μμ λκΈ μ­μ   
  ![μ λͺ© μλ λμμ - Clipchampλ‘ μ μ](https://user-images.githubusercontent.com/110578739/209432331-da0efb88-d9de-4cb2-aaa4-d832c0be72c0.gif)  
   <br>

- κ΄λ¦¬μ νμ΄μ§μμ κΈ λ―Έλ¦¬λ³΄κΈ° λ° μ­μ   
  ![κ΄λ¦¬μνμ΄μ§ κΈμ­μ  - Clipchampλ‘ μ μ](https://user-images.githubusercontent.com/110578739/209432332-e12b68c3-7507-4130-b4de-97d1ae141472.gif)  
   <br>

- μ°¨νΈλ‘ μ΅κ·Ό 7μΌκ° λ±λ‘λ λκΈ μ, κΈ μ λ³΄μ¬μ£ΌκΈ°  
  <img width="1280" alt="image" src="https://user-images.githubusercontent.com/110578739/209432716-15331d1f-2f20-47a2-b0f5-e4e61aac18b5.png"> <br>

## β μ½λ μ€ νμΈλ°κ³  μΆμ λΆλΆ

πtests - apiTestν΄λμ axiosλ₯Ό νμ€νΈ νλ μ½λλ₯Ό μμ± νλλ° μ λλ‘ μμ±νκ±΄μ§

πλκΈμ postνλλ° μ£Όμλ₯Ό `/reply`  
λκΈ λ¦¬μ€νΈλ₯Ό getνλλ° μ£Όμλ₯Ό `/reply/:postId`  
μ΄λΌ μ νλλ° λκΈ μ²λΌ κΈμ μ’μλ μ λ³΄λ₯Ό rest api κΈ°μ€μΌλ‘ μ΄λ»κ² μ ν μ§ ex) `/post/:postId/reply`

πcomponentsν΄λμ PaginationBtnλ³΄λ©΄ λ‘μ§μ΄ κ°λ¨νκ³  μ½λκ° μ§§λ€κ³  μκ°ν΄μ view <-> logicμ useνμΌλ‘ λΉΌμ§ μμλλ° μ΄λ κ² μ§§κ³  κ°λ¨ν μ½λμ κ²½μ°λ μΌκ΄μ±μ μν΄ logicμ λΆλ¦¬νλμ§

```java script
// νμ΄μ§λ€μ΄μ λ²νΌμμ κ° λ²νΌ(1,2,3...)μ λ§λλ λΆλΆ
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

πusePagesμ useAddPost, useEditPost, useViewPostλ₯Ό λ³΄λ©΄ λΉμ·ν λΆλΆμ΄ λ§μΌλ©΄μ μ‘°κΈμ© λ€λ₯Έλ° λ μκ² νμ λ§λ€μ΄ μ¬μ¬μ©ν΄μΌ ν μ§

## β κ°λ° κ΄λ ¨ κ³Όμ μμ κΆκΈνλ λΆλΆ

πν΄λ κ΅¬μ‘°μ λν΄ λΆλ₯νκΈ° μ λ§€νλ©΄ etcν΄λ λ§λ€κ³  νκ³³μ λͺ¨μλλ° etcν΄λλ³΄λ€ μ¬λ¬ μ’λ₯λ‘ λ€ λλλκ² λμμ§

πκΈ λͺ©λ‘(μλ²λ‘λΆν° λ°μ΄ν°)μ λ°μμμ useState(λ΄λΆ λ°μ΄ν°)λ‘ μ¬μ©νλλ° μ΄λ° λ‘μ§μ΄ μΌλ°μ μΈμ§  
ex) μ­μ  κΈ°λ₯μμ μ­μ  λ²νΌμ λλ₯Έν λ°±μλμ μ­μ λ₯Ό μμ²­ ν ν

1. μμ²΄μ μΈ κΈλͺ©λ‘(λ΄λΆ stateλ°μ΄ν°)μμ μ­μ λ₯Ό ν΄μ λ¦¬λ λλ§ νλ€(μ΄κ²½μ° λ°μμ μΈκΈν  server date <-> client date κ΅¬λΆ λ¬Έμ  λ°μ)
2. μ­μ λ μ κΈλͺ©λ‘(λ°±μλ μλ²λ‘λΆν° λ°μ΄ν°)λ₯Ό λ°μμμ λ¦¬λ λλ§ νλ€

πserver date <-> client date κ΅¬λΆ λ¬Έμ   
μνκ΄λ¦¬λ₯Ό 3κ°μ§λ‘ λΆλ₯ν΄λ³΄λ €νλλ°

1. useState : λ΄λΆ λ°μ΄ν° (propsμ λ¬ λ§μ§ μμ κ²½μ°)
2. redux store : λ΄λΆ λ°μ΄ν° (propsμ λ¬μ΄ λ§μ μ μ­μ μΌλ‘ μ¬μ©ν΄μΌν  κ²½μ°)
3. rtk query λλ react query : μλ² λ°μ΄ν°  
   μλ²λ‘ λΆν°μ λ°μ΄ν°κΈ λͺ©λ‘(λ°±μλ μλ²λ‘λΆν° λ°μ΄ν°)μ λ°μμμ useState(λ΄λΆ λ°μ΄ν°)λ‘ λ§λλ μλ²λ°μ΄ν° / λ΄λΆλ°μ΄ν° κ΅¬λΆμ μ΄λ»κ² ν΄μΌν μ§ λͺ¨λ₯΄κ² μ΅λλ€.

λν, μ ν 3κ°μ§λ‘ λΆλ₯νλ μ΄λ°μμΌλ‘ μνκ΄λ¦¬λ₯Ό λλλκ² λ§λμ§

πview<->logic κ΅¬λΆνλ hooksμ μ¬μ©νλ μ»΄ν¬λνΈ, νμ΄μ§μ λμνκ² μ΄λ¦μ μ§μλλ°(ViewPost.jsx - useViewPost.js) μ¬μ¬μ©μ±μ μκ°ν΄μ hooks μ΄λ¦μ λ€λ₯΄κ² μ§λκ² λμμ§

πλ³΅μ‘ν λ‘μ§μ΄ μμ΄μ useMemo, useCallback, React.memoλ±μ μ¬μ©νλ©΄ μ€νλ € μ±λ₯μ΄ μ ν λλ€κ³  μκ°νλλ° νΉμ λ λλ§, μ±λ₯ κ°μ ν  λΆλΆμ΄ μλμ§ νμΈλ°κ³  μΆμ΅λλ€.

## π λ°°μ΄μ  λ° νκΈ°

https://velog.io/@wjdtmfgh/music-blog-%EB%B0%B0%EC%9A%B4%EC%A0%90%ED%9B%84%EA%B8%B0
