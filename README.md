# 회의실 예약 및 일정관리 플랫폼 - 미티(Meeti)
### 🗓️ 2023.03 ~ 2023.11.20

<br/>

[ 🏆 2023학년도 교내 스마트 SW 개발 경진대회 최우수상 🏆 ]

<br/>

> 나의 일정을 친구, 동료들과 공유하고 관리할 수 있는 플랫폼으로 기업회원의 경우 서로의 일정 조회를 통해 더욱 수월하게 미팅을 잡을 수 있다. 미팅 날짜가 확정되면 해당 날짜와 시간에 대여 가능한 회의실을 예약할 수 있고 회의 내용을 음성인식으로 녹음하는 기록 서비스를 제공한다. 이 플랫폼 하나로 개인과 기업 회원 모두 일정을 관리하고 공유 오피스를 대여할 수 있는 서비스를 구현한다.


<br/><br/>

## 👨🏻‍💻 **팀구성**

<table>
  <tr>
    <td>
      <a href="https://github.com/oudindiny">
        <img src="https://avatars.githubusercontent.com/u/89007102?v=4" width="120px" height="120px"/>
      </a>  
    </td>
    <td>
      <a href="https://github.com/mintmin0320">
        <img src="https://avatars.githubusercontent.com/u/114549939?s=96&v=4" width="120px" height="120px"/>
      </a>  
    </td>
        <td>
      <a href="https://github.com/zuhii">
        <img src="https://avatars.githubusercontent.com/u/98836390?v=4" width="120px" height="120px"/>
      </a>  
    </td>
    <td>
      <a href="https://github.com/jjinwo0">
        <img src="https://avatars.githubusercontent.com/u/86451515?v=4" width="120px" height="120px"/>
      </a>  
    </td>
  </tr>
  <tr>
    <th>
      전유진(FE)
    </th>
      <th>
	    박하민(FE)
    </th>
     <th>
      설주희(FE)
    </th>
    <th>
	    박진우(BE)
    </th>
  </tr>
</table>

<br/><br/>

## 📚 기술 스택
<div>
 <code><img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
 <code><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
 <code><img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568851518/noticon/lwj3hr9v1yoheimtwc1w.png" alt="styled components" title="styled components"/></code>
 <code><img width="50" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1631622784/noticon/zwush4y3u0mgamlck9bq.png" alt="react query" title="react query"/></code>
</div>

<br/><br/>

<h2>주요 기능</h2>

- 일정 관리 <br/>
- 공유 오피스 예약 (카카오페이 결제, 일정 및 결재와 연동) <br/>
- 미팅 결재 (회사 상사에게 결재, 일정 및 오피스 예약과 연동) <br/>
- 연락처 관리 (친구 일정 확인) <br/>
- 회의록 관리 (녹음, 수정, 프린트 및 PDF 내보내기) <br/>

<br/><br/>

<h2> 😃 시연 동영상</h2><br>

https://github.com/mintmin0320/meeti-front-deploy/assets/114549939/6b285f9d-bbdb-441b-bb8a-15816ebd936b

<br/><br/>

<h1>주요 작업</h2>

### <사용자 경험 향상을 위한 노력>
#### React-Query + Suspense + SkeletonUI 적용

![](https://velog.velcdn.com/images/mintmin0320/post/13311030-8bcb-47eb-a586-2e0f8c89b007/image.png)

1. 연락처 페이지의 경우 4개의 GET 메서드 API 데이터 렌더링 과정에서 발생하는 폭포 현상을 <br/>
React-Query + Suspense 적용으로 병렬 처리 및 4개의 요청 동시 종료 설정

<br/>

![](https://velog.velcdn.com/images/mintmin0320/post/ff94e314-41ca-4825-a426-fdb456e3fa41/image.gif)

2. 연락처 페이지 API 요청 과정 중 SkeletonUI 적용으로 사용자에게 안정적인 사용자 경험 제공

<br/>

### 관련 상세 내용
[Suspense + SkeletonUI 적용 기록](https://mintmin-dev-world.vercel.app/blog/20231111)

<br/><hr/>

### <성능 최적화>
#### 1. React.lazy
- 각 page 컴포넌트에 동적 import 적용으로 bundle 크기 감소 ( 3.5MB -> 1.2MB ) <br/>
👉 초기 bundle 크기 감소로 초기 로드 시간 단축

<br/>

#### 2. react-icons -> @react-icons/all-files 라이브러리 변경
- 모든 아이콘 파일을 빌드 하는 react-icons 라이브러리를 개별 파일로 아이콘을 빌드 하는 @react-icons/all-files라이브러리로 변경
- react-icons를 포함하는 chunks 및 bundle 크기 감소 ( 1.2MB → 4.5KB )

<br/>

#### 최적화 전 bundle 크기

![](https://velog.velcdn.com/images/mintmin0320/post/8c78acec-248d-43c7-a836-b8f9ad89c6ee/image.png)

#### 최적화 후 bundle 크기

![](https://velog.velcdn.com/images/mintmin0320/post/d4cbb445-5e52-4c8b-9609-ae92c6e4c56a/image.png)

<br/>

#### 연락처 페이지 기준 Lighthouse

![](https://velog.velcdn.com/images/mintmin0320/post/1d324b0b-b55c-4d0d-ac26-69cea780039d/image.png)

<br/>

### 관련 상세 내용
[성능 최적화](https://mintmin-dev-world.vercel.app/blog/20231119)

<br/>
