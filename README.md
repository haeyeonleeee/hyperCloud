# 커뮤니티 어플리케이션 만들기

## 📌 팀원

- [김민지](https://github.com/enddl3224)
- [오지호](https://github.com/jeehooh)
- [이해연](https://github.com/haeyeonleeee)

<br/>

## 📌 서비스 개요

커뮤니티 어플리케이션 앱

<br/>

## 📌 제작 기간

2022.10.12 ~

<br/>

## 📌 적용 기술

- 사용언어 : Typescript
- 런타임 환경 : Node.js
- 프레임워크 : nest.js
- 데이터베이스 : MySQL

- DB선택 이유 : 

<br/>

## 📌 요구사항 분석 및 구현

### 유저

**1. 회원가입**

- 회원은 중복된 email로 가입할 수 없습니다.

**2. 로그인**

- DB에 저장된 password와 클라이언트가 입력한 password를 비교 후 일치하면 토큰을 발급해줍니다.


---

### 포스트

**1. 포스트 작성**

- 

<br/>

## 📌 DB Modeling

**[🔗 dbdiagram](https://dbdiagram.io/d/63452bedf0018a1c5fd9aa2e)**

<br>

## 📌 API DOCS

**[🔗 API DOCS]()**


<br/>

## 📌 Commit Convention

- Init : 프로젝트 초기 세팅
- Add : 새로운 기능 추가
- Update : 원래도 정상적으로 동작하고 있었지만 수정, 추가, 보완 했을 때
- Fix : 올바르지 않은 동작을 고친 경우 (버그 수정)
- Chore : 빌드 업무 수정, 패키지 매니저 수정, 그 외 자잘한 수정에 대한 커밋
- Docs : 문서 작성, 수정
- Refactor : 코드 리팩토링
- Test : 테스트 코드 추가
- Style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우, linting
