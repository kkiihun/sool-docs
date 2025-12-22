---
title: SOOL Data Model
---

## 개요

SOOL의 데이터 모델은  
한국 전통주 정보를 **정형화·확장 가능**하게 관리하기 위한 구조로 설계되었다.

초기 MVP 단계에서는 **SQLite 단일 DB**를 사용하며,  
향후 사용자 리뷰·추천·통계 확장을 고려한 형태로 구성한다.

---

## 데이터 소스

- CSV 기반 전통주 원천 데이터
- 수동 정제 및 컬럼 표준화
- Python 스크립트를 통한 DB 적재

---

## 주요 테이블 구조

### 1. `sool` (전통주 기본 정보)

| 컬럼명 | 타입 | 설명 |
|------|------|------|
| id | INTEGER | Primary Key |
| name | TEXT | 전통주 이름 |
| type_topics | TEXT | 주종 (막걸리, 증류주 등) |
| alcohol | REAL | 도수 (%) |
| region | TEXT | 지역 |
| brewery | TEXT | 제조사 |
| description | TEXT | 설명 |

> 전통주 탐색·필터링의 기준이 되는 핵심 테이블

---

### 2. `review` (사용자 리뷰)

| 컬럼명 | 타입 | 설명 |
|------|------|------|
| id | INTEGER | Primary Key |
| sool_id | INTEGER | 전통주 ID (FK) |
| rating | INTEGER | 평점 (1~5) |
| comment | TEXT | 리뷰 내용 |
| created_at | DATETIME | 작성 시각 |

> 사용자 참여 기반 데이터 확장을 위한 테이블

---

## 테이블 관계


- 하나의 전통주 → 여러 리뷰 가능
- 향후 `user` 테이블 추가 예정

---

## 설계 의도

- **단순하지만 확장 가능**
- 분석 → 추천 → 커뮤니티로 자연스럽게 확장
- SQLite → MariaDB/MySQL 전환 용이

---

## 향후 확장 계획

- `user` 테이블 추가
- 감각 태그 (향, 바디감, 단맛 등)
- 추천 모델을 위한 파생 테이블
- 통계 전용 View / Materialized Table

---

## 요약

SOOL의 데이터 모델은  
단순한 정보 나열이 아닌,  
**데이터 분석과 서비스 확장을 동시에 고려한 구조**를 목표로 한다.
