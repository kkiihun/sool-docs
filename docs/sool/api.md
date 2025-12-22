---
title: SOOL API
---

## 개요

SOOL API는 전통주 데이터를 조회·분석·확장하기 위한
RESTful API로 설계되었다.

초기 MVP 단계에서는 **읽기 중심(Read-heavy)** 구조로 운영하며,
향후 사용자 리뷰 및 추천 기능 확장을 고려한다.

- Base URL: `/api`
- Format: JSON
- Framework: FastAPI

---

## API 설계 원칙

- 단순한 REST 구조
- 클라이언트 친화적인 응답
- 분석 확장을 고려한 필드 유지
- 인증 없는 공개 API (MVP 단계)

---

## 엔드포인트 목록

### 1️⃣ 전통주 목록 조회

GET /api/sool
#### Query Parameters

| 이름 | 타입 | 설명 |
|---|---|---|
| name | string | 이름 검색 (optional) |
| region | string | 지역 필터 |
| min_alcohol | number | 최소 도수 |
| max_alcohol | number | 최대 도수 |

#### Response 예시

```json
[
  {
    "id": 1,
    "name": "복순도가",
    "type_topics": "막걸리",
    "alcohol": 6.5,
    "region": "울산",
    "brewery": "복순도가"
  }
]


2️⃣ 전통주 상세 조회
GET /api/sool/{id}

Path Parameters
이름	타입	설명
id	integer	전통주 ID
Response 예시
{
  "id": 1,
  "name": "복순도가",
  "type_topics": "막걸리",
  "alcohol": 6.5,
  "region": "울산",
  "brewery": "복순도가",
  "description": "자연발효 탄산 막걸리"
}

3️⃣ 리뷰 목록 조회
GET /api/sool/{id}/reviews

Response 예시
[
  {
    "rating": 5,
    "comment": "탄산감이 인상적",
    "created_at": "2025-01-01T12:00:00"
  }
]

에러 처리 규칙
코드	의미
200	정상
404	리소스 없음
422	잘못된 요청 파라미터
500	서버 오류

