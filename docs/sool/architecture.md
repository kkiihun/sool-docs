# SOOL Architecture

## 목적
SOOL은 한국 전통주 데이터를 정형화하여
탐색·분석·확장이 가능한 데이터 중심 서비스로 제공하는 것을 목표로 한다.

## 구성 요소
- Database: SQLite (MVP)
- Backend: FastAPI
- Frontend: Next.js

## 데이터 흐름
1. CSV / Raw 데이터 수집
2. SQLite 적재
3. FastAPI API 제공
4. Next.js UI 렌더링
