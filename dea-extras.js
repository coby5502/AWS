// DEA-C01 전용 부가 콘텐츠: 헷갈리는 개념 / 키워드 / 함정 / 결정트리 / 용어집
// 스키마:
//   COMPARES  : {title, badge, cols, cards: [{name, dot, rows: [{k, v}]}], tip}
//   KEYWORDS  : {kw, services, tip}
//   TRAPS     : {icon, title, wrong, right}
//   DECISIONS : {title, icon, q, opts: [{label, answer}]}
//   GLOSSARY  : {cat, color, name, short, desc, tags}

/* ─────── 헷갈리는 개념 비교 ─────── */
window.DEA_COMPARES = [
  {
    title: "스트리밍 수집: Kinesis Data Streams vs Firehose vs MSK",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "Kinesis Data Streams",
        dot: "#7c6fff",
        rows: [
          { k: "목적", v: "실시간 스트림 처리·재소비" },
          { k: "보존", v: "1일~1년" },
          { k: "컨슈머", v: "다수 동시 재소비 가능" },
          { k: "관리", v: "샤드 수·확장 관리 필요" },
          { k: "용도", v: "실시간 분석·이벤트 처리" }
        ]
      },
      {
        name: "Kinesis Firehose",
        dot: "#34d399",
        rows: [
          { k: "목적", v: "서버리스 전달·적재" },
          { k: "보존", v: "버퍼 후 전달 (재소비 X)" },
          { k: "타겟", v: "S3·Redshift·OpenSearch·Splunk" },
          { k: "관리", v: "완전 관리형 (샤드 없음)" },
          { k: "용도", v: "데이터 레이크 적재·ETL 저부담" }
        ]
      },
      {
        name: "Amazon MSK",
        dot: "#f59e0b",
        rows: [
          { k: "목적", v: "관리형 Kafka" },
          { k: "보존", v: "구성 가능 (Kafka 설정)" },
          { k: "컨슈머", v: "Kafka 에코시스템 호환" },
          { k: "관리", v: "MSK Serverless 옵션" },
          { k: "용도", v: "기존 Kafka 앱·복잡한 스트리밍" }
        ]
      }
    ],
    tip: "💡 재소비 필요 = KDS / 단순 S3 적재 = Firehose / Kafka 호환 = MSK"
  },
  {
    title: "ETL/ELT 도구: Glue vs EMR vs Lambda",
    badge: "자주 출제",
    cols: 3,
    cards: [
      {
        name: "AWS Glue",
        dot: "#7c6fff",
        rows: [
          { k: "대상", v: "서버리스 Spark ETL" },
          { k: "규모", v: "중~대규모" },
          { k: "개발", v: "코드·Studio·DataBrew(노코드)" },
          { k: "부가", v: "Data Catalog·Crawler·Data Quality" },
          { k: "용도", v: "정기 ETL·스키마 추론" }
        ]
      },
      {
        name: "Amazon EMR",
        dot: "#34d399",
        rows: [
          { k: "대상", v: "Hadoop/Spark/Hive/Presto 클러스터" },
          { k: "규모", v: "초대규모·고성능" },
          { k: "개발", v: "Notebook·Studio·CLI" },
          { k: "부가", v: "EMR Serverless·EMR on EKS" },
          { k: "용도", v: "복잡·커스텀 프레임워크" }
        ]
      },
      {
        name: "AWS Lambda",
        dot: "#f59e0b",
        rows: [
          { k: "대상", v: "이벤트 기반 경량 변환" },
          { k: "규모", v: "소규모·초 단위" },
          { k: "개발", v: "Python/Node/Java 등" },
          { k: "제약", v: "15분·10GB 메모리" },
          { k: "용도", v: "단일 파일 변환·알림" }
        ]
      }
    ],
    tip: "💡 서버리스 ETL·스키마 추론 = Glue / 대규모·Spark 전문 = EMR / 이벤트 기반 경량 = Lambda"
  },
  {
    title: "분석·쿼리 엔진: Athena vs Redshift vs Redshift Spectrum",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "Amazon Athena",
        dot: "#7c6fff",
        rows: [
          { k: "유형", v: "서버리스 SQL on S3" },
          { k: "엔진", v: "Presto/Trino" },
          { k: "과금", v: "스캔 데이터 TB당" },
          { k: "용도", v: "Ad-hoc 분석·로그·데이터 레이크" },
          { k: "최적화", v: "Parquet·Partition·CTAS" }
        ]
      },
      {
        name: "Amazon Redshift",
        dot: "#34d399",
        rows: [
          { k: "유형", v: "열 기반 MPP 데이터 웨어하우스" },
          { k: "엔진", v: "PostgreSQL-like" },
          { k: "과금", v: "노드 시간 또는 RPU" },
          { k: "용도", v: "대규모 집계·BI·복잡 쿼리" },
          { k: "최적화", v: "Dist/Sort Key·Workload Mgmt" }
        ]
      },
      {
        name: "Redshift Spectrum",
        dot: "#f59e0b",
        rows: [
          { k: "유형", v: "Redshift에서 S3 직접 쿼리" },
          { k: "엔진", v: "Redshift + 외부 테이블" },
          { k: "과금", v: "스캔 데이터 TB당" },
          { k: "용도", v: "DW + 데이터 레이크 조인" },
          { k: "장점", v: "데이터 이동 없이 통합" }
        ]
      }
    ],
    tip: "💡 Ad-hoc·저비용 = Athena / 정기 BI·고성능 = Redshift / 두 세계 통합 = Spectrum"
  },
  {
    title: "데이터 포맷: CSV vs Parquet vs ORC vs Avro",
    badge: "자주 출제",
    cols: 4,
    cards: [
      {
        name: "CSV",
        dot: "#ef4444",
        rows: [
          { k: "형식", v: "행 기반 · 텍스트" },
          { k: "압축", v: "없음 (원본)" },
          { k: "스키마", v: "외부 정의" },
          { k: "용도", v: "상호 호환·단순" }
        ]
      },
      {
        name: "Parquet",
        dot: "#7c6fff",
        rows: [
          { k: "형식", v: "열 기반 · 바이너리" },
          { k: "압축", v: "우수 (Snappy·gzip)" },
          { k: "스키마", v: "내장·진화 지원" },
          { k: "용도", v: "Athena·Spark·Redshift (표준)" }
        ]
      },
      {
        name: "ORC",
        dot: "#34d399",
        rows: [
          { k: "형식", v: "열 기반 · 바이너리" },
          { k: "압축", v: "우수 (ACID 지원)" },
          { k: "스키마", v: "내장" },
          { k: "용도", v: "Hive·EMR 최적화" }
        ]
      },
      {
        name: "Avro",
        dot: "#f59e0b",
        rows: [
          { k: "형식", v: "행 기반 · 바이너리" },
          { k: "압축", v: "중간" },
          { k: "스키마", v: "강력한 스키마 진화" },
          { k: "용도", v: "Kafka·스트리밍·이벤트" }
        ]
      }
    ],
    tip: "💡 분석 쿼리 = Parquet/ORC (열 기반) / 스트리밍·스키마 진화 = Avro / 호환성 = CSV"
  },
  {
    title: "데이터 카탈로그·거버넌스",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "AWS Glue Data Catalog",
        dot: "#7c6fff",
        rows: [
          { k: "기능", v: "메타데이터 저장소 (Hive metastore 호환)" },
          { k: "소스", v: "Crawler·수동·API·Redshift·EMR" },
          { k: "통합", v: "Athena·Redshift·EMR·Spark" },
          { k: "특징", v: "모든 분석 서비스의 기본 카탈로그" }
        ]
      },
      {
        name: "AWS Lake Formation",
        dot: "#34d399",
        rows: [
          { k: "기능", v: "세분화 권한(테이블/행/열)·감사" },
          { k: "소스", v: "Glue Catalog 위에 권한 추가" },
          { k: "통합", v: "LF-Tags·중앙 권한 관리" },
          { k: "특징", v: "S3 데이터 레이크 거버넌스" }
        ]
      },
      {
        name: "Amazon DataZone",
        dot: "#f59e0b",
        rows: [
          { k: "기능", v: "데이터 메시·비즈니스 카탈로그" },
          { k: "소스", v: "Domain · Project · Glossary" },
          { k: "통합", v: "SageMaker·Redshift·Glue 프로비저닝" },
          { k: "특징", v: "셀프서비스 데이터 공유·탐색" }
        ]
      }
    ],
    tip: "💡 기술 메타데이터 = Glue Catalog / 세분화 권한 = Lake Formation / 비즈니스 공유 = DataZone"
  },
  {
    title: "마이그레이션·동기화",
    badge: "자주 출제",
    cols: 3,
    cards: [
      {
        name: "AWS DMS",
        dot: "#7c6fff",
        rows: [
          { k: "대상", v: "DB·DW 마이그레이션 + CDC" },
          { k: "이종", v: "SCT + DMS로 엔진 변경" },
          { k: "타겟", v: "RDS·Aurora·Redshift·Kinesis·S3" },
          { k: "용도", v: "온프레미스 → AWS, 실시간 복제" }
        ]
      },
      {
        name: "AWS DataSync",
        dot: "#34d399",
        rows: [
          { k: "대상", v: "파일 시스템 동기화" },
          { k: "소스", v: "NFS·SMB·HDFS·S3·EFS·FSx" },
          { k: "타겟", v: "S3·EFS·FSx" },
          { k: "용도", v: "대용량 온라인 파일 이동" }
        ]
      },
      {
        name: "AWS AppFlow",
        dot: "#f59e0b",
        rows: [
          { k: "대상", v: "SaaS 통합" },
          { k: "소스", v: "Salesforce·SAP·Slack·Zendesk" },
          { k: "타겟", v: "S3·Redshift·SnowFlake" },
          { k: "용도", v: "SaaS → AWS 데이터 전송" }
        ]
      }
    ],
    tip: "💡 DB·CDC = DMS / 파일 시스템 = DataSync / SaaS 앱 = AppFlow"
  }
];

/* ─────── 시험 빈출 키워드 ─────── */
window.DEA_KEYWORDS = [
  { kw: "real-time streaming · replayable",
    services: "Kinesis Data Streams",
    tip: "다수 컨슈머 재소비 지원. 샤드 관리 필요" },
  { kw: "serverless stream to S3/Redshift",
    services: "Kinesis Data Firehose",
    tip: "완전 관리형·배치 버퍼링. 재소비 불가" },
  { kw: "kafka compatible · existing app",
    services: "Amazon MSK",
    tip: "업스트림 Kafka. MSK Serverless 옵션" },
  { kw: "serverless ETL · schema inference",
    services: "AWS Glue + Crawler",
    tip: "Spark 기반. Data Catalog 자동 생성" },
  { kw: "no-code data prep",
    services: "Glue DataBrew",
    tip: "250+ 내장 변환. 비개발자용" },
  { kw: "large scale Spark/Hadoop",
    services: "Amazon EMR (+ EMR Serverless)",
    tip: "복잡한 빅데이터 프레임워크. Spot으로 비용 절감" },
  { kw: "SQL on S3 ad-hoc",
    services: "Amazon Athena",
    tip: "서버리스·스캔 과금. Parquet + Partition 필수" },
  { kw: "data warehouse · BI",
    services: "Amazon Redshift (+ Serverless)",
    tip: "Dist Key·Sort Key로 성능 최적화" },
  { kw: "query S3 from DW",
    services: "Redshift Spectrum",
    tip: "외부 테이블. DW + 데이터 레이크 통합" },
  { kw: "fine-grained access row/column",
    services: "AWS Lake Formation + LF-Tags",
    tip: "Glue Catalog 위에 권한·감사" },
  { kw: "central metadata catalog",
    services: "AWS Glue Data Catalog",
    tip: "Hive metastore 호환. Athena·Redshift·EMR 기본" },
  { kw: "data mesh · business catalog",
    services: "Amazon DataZone",
    tip: "Domain·Project·Glossary로 셀프서비스" },
  { kw: "heterogeneous DB migration",
    services: "AWS DMS + SCT",
    tip: "Oracle→PostgreSQL 등. CDC로 실시간 복제" },
  { kw: "bulk file transfer to S3",
    services: "AWS DataSync",
    tip: "NFS/SMB·온라인 전송. 온프레미스→AWS" },
  { kw: "saas integration to S3",
    services: "Amazon AppFlow",
    tip: "Salesforce·SAP·Slack 등 네이티브 통합" },
  { kw: "offline PB-scale transfer",
    services: "AWS Snowball Edge / Snowmobile",
    tip: "네트워크 대역폭 부족 시 물리 이송" },
  { kw: "workflow orchestration · python",
    services: "Managed Workflows for Apache Airflow (MWAA)",
    tip: "Airflow DAG 기반. Step Functions 대안" },
  { kw: "AWS-native orchestration",
    services: "AWS Step Functions",
    tip: "Standard(장기)·Express(고빈도)" },
  { kw: "event bus · schedule · SaaS",
    services: "Amazon EventBridge",
    tip: "Scheduler 포함. SaaS 이벤트 수신" },
  { kw: "columnar format · compression",
    services: "Parquet · ORC",
    tip: "Athena/Redshift 스캔 80%+ 절감" },
  { kw: "schema evolution · streaming",
    services: "Avro + Glue Schema Registry",
    tip: "Kafka·Kinesis 이벤트 스키마 관리" },
  { kw: "data lake partitioning",
    services: "S3 Hive-style partition (year=2025/month=...)",
    tip: "Athena 파티션 프루닝으로 스캔 최소화" },
  { kw: "S3 intelligent tiering",
    services: "S3 Intelligent-Tiering",
    tip: "접근 패턴 자동 계층. 예측 불가한 데이터" },
  { kw: "S3 bucket events to ETL",
    services: "S3 Event Notification → Lambda/EventBridge/SQS",
    tip: "객체 생성·삭제 실시간 트리거" },
  { kw: "redshift streaming ingestion",
    services: "Redshift Streaming Ingestion (from Kinesis/MSK)",
    tip: "materialized view로 실시간 수집" },
  { kw: "redshift zero-ETL from aurora",
    services: "Aurora zero-ETL to Redshift",
    tip: "OLTP→OLAP 자동 복제" },
  { kw: "incremental/CDC ingestion",
    services: "Glue Job Bookmarks · DMS CDC",
    tip: "변경분만 처리. 중복·재처리 방지" },
  { kw: "data quality automated",
    services: "AWS Glue Data Quality (DQDL)",
    tip: "Completeness·Uniqueness·Referential 규칙" },
  { kw: "encrypt data lake",
    services: "KMS + S3 SSE-KMS + Glue Security Configuration",
    tip: "EMR은 Security Configuration 필수" },
  { kw: "PII detection S3",
    services: "Amazon Macie",
    tip: "센서티브 데이터 분류·알림" },
  { kw: "table format ACID",
    services: "Apache Iceberg / Apache Hudi / Delta Lake",
    tip: "Athena·Glue·EMR에서 지원. MERGE·Time Travel" }
];

/* ─────── 출제 함정 ─────── */
window.DEA_TRAPS = [
  { icon: "🎞️", title: "재소비 요구에 Firehose 선택하는 함정",
    wrong: "여러 컨슈머가 재소비해야 하는데 Firehose 선택",
    right: "재소비 = <strong>Kinesis Data Streams</strong>. Firehose는 단방향 적재" },
  { icon: "⚡", title: "대용량 Spark 잡에 Lambda 고르는 함정",
    wrong: "대용량 병렬 처리를 Lambda로 시도 → 15분/10GB 제약",
    right: "대규모 ETL = <strong>Glue</strong> 또는 <strong>EMR</strong>" },
  { icon: "📊", title: "Ad-hoc S3 쿼리에 Redshift 선택하는 함정",
    wrong: "간헐적 분석을 위해 Redshift 클러스터 가동",
    right: "Ad-hoc = <strong>Athena</strong> (서버리스·스캔 과금)" },
  { icon: "🗃️", title: "CSV 그대로 Athena 쿼리하는 함정",
    wrong: "스캔 비용 폭증 + 느림",
    right: "<strong>Parquet + Partition + Compression</strong>으로 80%+ 절감" },
  { icon: "🔐", title: "세분화 권한을 IAM으로만 처리하는 함정",
    wrong: "IAM Policy로 테이블·행·열 권한 관리 시도",
    right: "Data Lake = <strong>Lake Formation + LF-Tags</strong>" },
  { icon: "🔄", title: "이종 DB 마이그레이션에 DMS만 쓰는 함정",
    wrong: "엔진이 다른데 DMS만으로 스키마 변환 기대",
    right: "<strong>SCT (스키마 변환) + DMS (데이터 이동)</strong> 병행" },
  { icon: "🕰️", title: "시계열 데이터를 Random Split하는 함정",
    wrong: "테스트/훈련 데이터 무작위 분할",
    right: "Time-based split. Athena에서 파티션 프루닝" },
  { icon: "📁", title: "스키마 진화 필요한데 Parquet만 쓰는 함정",
    wrong: "Kafka 이벤트에 Parquet 사용 → 스키마 변경 어려움",
    right: "스트리밍 스키마 진화 = <strong>Avro + Schema Registry</strong>" },
  { icon: "🔁", title: "CDC 없이 전체 재적재하는 함정",
    wrong: "매번 전체 데이터 재복제 → 비용·지연",
    right: "<strong>DMS CDC 또는 Glue Job Bookmarks</strong>로 증분 처리" },
  { icon: "🚚", title: "PB급 데이터를 네트워크로 전송하는 함정",
    wrong: "DX/VPN으로 PB 전송 시도 → 수개월",
    right: "<strong>Snowball Edge / Snowmobile</strong> 오프라인 이송" },
  { icon: "🪣", title: "S3 Lifecycle 없이 수동으로 Glacier 이동하는 함정",
    wrong: "스크립트로 객체 이동 관리",
    right: "<strong>S3 Lifecycle Policy</strong>로 자동 전환" },
  { icon: "📈", title: "Redshift 노드를 성능 때문에 무조건 늘리는 함정",
    wrong: "쿼리 느림 → 노드 추가",
    right: "<strong>Dist Key·Sort Key·VACUUM·WLM</strong>으로 먼저 최적화" },
  { icon: "💾", title: "Redshift ETL에 Lambda 연결하는 함정",
    wrong: "Lambda로 Redshift 대량 INSERT",
    right: "<strong>COPY command (from S3)</strong> 또는 Redshift Data API" },
  { icon: "🔍", title: "Glue Crawler 없이 수동 테이블 생성하는 함정",
    wrong: "S3 스키마를 DDL로 수동 작성",
    right: "<strong>Glue Crawler</strong>로 자동 추론·카탈로그 업데이트" },
  { icon: "🌊", title: "스트리밍 분석을 Lambda로 처리하는 함정",
    wrong: "15분 제한·상태 저장 어려움",
    right: "<strong>Kinesis Data Analytics (Flink/SQL) 또는 MSK + Spark Streaming</strong>" },
  { icon: "🗝️", title: "Secret을 환경변수에 평문 저장하는 함정",
    wrong: "DB 비밀번호를 Lambda env var에 직접",
    right: "<strong>Secrets Manager + 자동 회전</strong>" },
  { icon: "🎯", title: "Data Quality를 애플리케이션 코드로 검증하는 함정",
    wrong: "ETL 스크립트에 검증 로직 섞음",
    right: "<strong>AWS Glue Data Quality (DQDL)</strong>로 선언적 규칙" },
  { icon: "📦", title: "Iceberg·Hudi 없이 MERGE 구현하는 함정",
    wrong: "Spark 코드로 수동 Upsert 로직 작성",
    right: "<strong>Apache Iceberg 테이블 형식</strong>으로 ACID MERGE·Time Travel" }
];

/* ─────── 시나리오 결정 트리 ─────── */
window.DEA_DECISIONS = [
  {
    title: "스트리밍 수집 선택",
    icon: "🌊",
    q: "데이터 특성은?",
    opts: [
      { label: "실시간·재소비·여러 소비자", answer: "→ <strong>Kinesis Data Streams</strong>" },
      { label: "서버리스·S3/Redshift 적재만", answer: "→ <strong>Kinesis Data Firehose</strong>" },
      { label: "Kafka 에코시스템·기존 앱", answer: "→ <strong>Amazon MSK</strong>" },
      { label: "실시간 SQL/Flink 분석", answer: "→ <strong>Kinesis Data Analytics</strong>" }
    ]
  },
  {
    title: "ETL·변환 도구",
    icon: "🔧",
    q: "요구사항은?",
    opts: [
      { label: "서버리스 Spark·스키마 추론", answer: "→ <strong>AWS Glue</strong>" },
      { label: "노코드 데이터 정제", answer: "→ <strong>Glue DataBrew</strong>" },
      { label: "대규모 Hadoop/Spark 커스텀", answer: "→ <strong>Amazon EMR (+ Serverless)</strong>" },
      { label: "이벤트 기반 경량 변환", answer: "→ <strong>AWS Lambda</strong>" },
      { label: "Airflow DAG 오케스트레이션", answer: "→ <strong>MWAA</strong>" },
      { label: "AWS 네이티브 워크플로", answer: "→ <strong>AWS Step Functions</strong>" }
    ]
  },
  {
    title: "분석 쿼리 엔진",
    icon: "📊",
    q: "쿼리 패턴은?",
    opts: [
      { label: "Ad-hoc S3 SQL·저비용", answer: "→ <strong>Amazon Athena</strong>" },
      { label: "정기 BI·복잡 집계", answer: "→ <strong>Amazon Redshift</strong>" },
      { label: "DW + S3 데이터 레이크 조인", answer: "→ <strong>Redshift Spectrum</strong>" },
      { label: "검색·로그 분석·실시간", answer: "→ <strong>OpenSearch Service</strong>" },
      { label: "BI 대시보드·임베딩", answer: "→ <strong>Amazon QuickSight</strong>" }
    ]
  },
  {
    title: "마이그레이션 도구",
    icon: "🚚",
    q: "소스 타입은?",
    opts: [
      { label: "RDB·DW · 동종", answer: "→ <strong>AWS DMS</strong>" },
      { label: "RDB · 엔진 변경 (이종)", answer: "→ <strong>AWS SCT + DMS</strong>" },
      { label: "파일 시스템 (NFS/SMB)", answer: "→ <strong>AWS DataSync</strong>" },
      { label: "SaaS (Salesforce·SAP 등)", answer: "→ <strong>AWS AppFlow</strong>" },
      { label: "PB급 오프라인", answer: "→ <strong>Snowball Edge · Snowmobile</strong>" }
    ]
  },
  {
    title: "데이터 거버넌스·카탈로그",
    icon: "📋",
    q: "필요한 기능은?",
    opts: [
      { label: "기술 메타데이터·스키마", answer: "→ <strong>AWS Glue Data Catalog</strong>" },
      { label: "세분화 권한 (테이블/행/열)", answer: "→ <strong>AWS Lake Formation + LF-Tags</strong>" },
      { label: "비즈니스 카탈로그·데이터 메시", answer: "→ <strong>Amazon DataZone</strong>" },
      { label: "PII/PHI 탐지·분류", answer: "→ <strong>Amazon Macie</strong>" },
      { label: "데이터 품질 자동 검증", answer: "→ <strong>Glue Data Quality (DQDL)</strong>" }
    ]
  },
  {
    title: "S3 스토리지 최적화",
    icon: "💾",
    q: "접근 패턴은?",
    opts: [
      { label: "패턴 예측 불가", answer: "→ <strong>S3 Intelligent-Tiering</strong>" },
      { label: "드문 접근·즉시 회수", answer: "→ <strong>S3 Standard-IA</strong>" },
      { label: "장기 아카이브 (12h OK)", answer: "→ <strong>S3 Glacier Deep Archive</strong>" },
      { label: "쿼리용 컬럼 포맷", answer: "→ <strong>Parquet/ORC + Partition</strong>" },
      { label: "ACID·MERGE·Time Travel", answer: "→ <strong>Apache Iceberg 테이블</strong>" }
    ]
  }
];

/* ─────── 용어집 ─────── */
window.DEA_GLOSSARY = [
  // ============ 데이터 수집·전송 ============
  { cat: "수집·전송", color: "#7c6fff", name: "Kinesis Data Streams", short: "실시간 스트림",
    desc: "샤드 기반 수집. 1일~1년 보존. 다수 컨슈머 동시 재소비. 샤드 분할·병합으로 확장.", tags: ["핵심"] },
  { cat: "수집·전송", color: "#7c6fff", name: "Kinesis Data Firehose", short: "스트림 적재",
    desc: "서버리스. S3/Redshift/OpenSearch/Splunk로 자동 전달. 버퍼·변환·포맷 변환 내장.", tags: ["핵심"] },
  { cat: "수집·전송", color: "#7c6fff", name: "Kinesis Data Analytics", short: "실시간 분석",
    desc: "Flink(Managed Flink) 또는 SQL 기반. 윈도우 집계·조인·실시간 감지.", tags: ["스트리밍"] },
  { cat: "수집·전송", color: "#7c6fff", name: "Amazon MSK", short: "관리형 Kafka",
    desc: "업스트림 Kafka 호환. MSK Connect·Serverless·Replicator(리전 간) 지원.", tags: ["Kafka"] },
  { cat: "수집·전송", color: "#7c6fff", name: "AWS DMS", short: "DB 마이그레이션",
    desc: "동종/이종 DB 복제 + CDC. 타겟: RDS·Aurora·Redshift·Kinesis·S3·DocumentDB·Neptune.", tags: ["마이그레이션"] },
  { cat: "수집·전송", color: "#7c6fff", name: "AWS Schema Conversion Tool (SCT)", short: "스키마 변환",
    desc: "Oracle→PostgreSQL, SQL Server→Aurora 등 이종 DB 스키마 자동 변환.", tags: ["마이그레이션"] },
  { cat: "수집·전송", color: "#7c6fff", name: "AWS DataSync", short: "파일 시스템 동기화",
    desc: "NFS/SMB/HDFS/S3/EFS/FSx 간 온라인 전송. 암호화·검증·스케줄.", tags: ["전송"] },
  { cat: "수집·전송", color: "#7c6fff", name: "Amazon AppFlow", short: "SaaS 통합",
    desc: "Salesforce·SAP·Slack·Zendesk 등 SaaS → S3/Redshift/Snowflake 자동 전송.", tags: ["SaaS"] },
  { cat: "수집·전송", color: "#7c6fff", name: "AWS Transfer Family", short: "SFTP/FTPS/FTP/AS2",
    desc: "기존 SFTP 워크플로를 S3 뒤에 노출. 레거시 파트너 연동.", tags: ["전송"] },
  { cat: "수집·전송", color: "#7c6fff", name: "AWS Snow Family", short: "오프라인 전송",
    desc: "Snowcone(8TB)·Snowball Edge(80TB)·Snowmobile(100PB). 네트워크 불가 시.", tags: ["이전"] },

  // ============ 저장소 ============
  { cat: "저장소", color: "#06b6d4", name: "Amazon S3", short: "객체 스토리지 (데이터 레이크)",
    desc: "무제한·11-9 내구성. 파티션 구조·스토리지 클래스·Event·Lifecycle로 최적화.", tags: ["핵심"] },
  { cat: "저장소", color: "#06b6d4", name: "S3 Intelligent-Tiering", short: "자동 계층화",
    desc: "접근 패턴 학습해 자동 이동. 예측 불가 워크로드에 최적.", tags: ["비용"] },
  { cat: "저장소", color: "#06b6d4", name: "S3 Lifecycle", short: "수명주기 정책",
    desc: "객체 자동 전환·만료. Standard → IA → Glacier → Deep Archive.", tags: ["비용"] },
  { cat: "저장소", color: "#06b6d4", name: "S3 Event Notifications", short: "객체 이벤트",
    desc: "생성·삭제 시 Lambda/SQS/SNS/EventBridge 트리거. 실시간 파이프라인.", tags: ["이벤트"] },
  { cat: "저장소", color: "#06b6d4", name: "S3 Storage Lens", short: "사용 분석",
    desc: "계정·버킷 수준 스토리지 사용 패턴·비용 인사이트.", tags: ["가시성"] },
  { cat: "저장소", color: "#06b6d4", name: "S3 Object Lock", short: "WORM 보호",
    desc: "Write Once Read Many. Governance(해제 가능)/Compliance(해제 불가).", tags: ["컴플라이언스"] },
  { cat: "저장소", color: "#06b6d4", name: "S3 Access Points", short: "버킷 멀티 뷰",
    desc: "버킷에 여러 액세스 포인트. 애플리케이션별 정책 분리.", tags: ["거버넌스"] },
  { cat: "저장소", color: "#06b6d4", name: "S3 Inventory", short: "객체 목록 보고서",
    desc: "CSV/Parquet 객체 목록을 지정 버킷에 생성. Athena 쿼리 가능.", tags: ["관리"] },
  { cat: "저장소", color: "#06b6d4", name: "Amazon EFS", short: "공유 NFS",
    desc: "여러 EC2·Lambda·컨테이너 동시 마운트. Lifecycle로 IA 계층 이동.", tags: ["파일"] },
  { cat: "저장소", color: "#06b6d4", name: "Amazon FSx for Lustre", short: "HPC 파일",
    desc: "S3 연동 병렬 파일 시스템. 대규모 ML/HPC 워크로드.", tags: ["HPC"] },

  // ============ 처리·ETL ============
  { cat: "처리·ETL", color: "#10b981", name: "AWS Glue", short: "서버리스 ETL",
    desc: "Spark 기반. Job·Crawler·Catalog·Studio·DataBrew·Data Quality 통합.", tags: ["핵심"] },
  { cat: "처리·ETL", color: "#10b981", name: "Glue Crawler", short: "스키마 자동 추론",
    desc: "S3/RDS/DynamoDB 등 스캔해 Catalog 테이블 생성·업데이트.", tags: ["메타데이터"] },
  { cat: "처리·ETL", color: "#10b981", name: "Glue Data Catalog", short: "중앙 메타데이터",
    desc: "Hive metastore 호환. Athena·Redshift·EMR·Spark 공통 카탈로그.", tags: ["카탈로그"] },
  { cat: "처리·ETL", color: "#10b981", name: "Glue DataBrew", short: "노코드 데이터 정제",
    desc: "250+ 내장 변환·프로파일링. 비개발자용 UI.", tags: ["노코드"] },
  { cat: "처리·ETL", color: "#10b981", name: "Glue Data Quality", short: "선언적 품질 규칙",
    desc: "DQDL로 Completeness·Uniqueness·Referential 등 검증.", tags: ["품질"] },
  { cat: "처리·ETL", color: "#10b981", name: "Glue Streaming", short: "스트리밍 ETL",
    desc: "Kinesis/MSK → Spark Structured Streaming. 연속 변환.", tags: ["스트리밍"] },
  { cat: "처리·ETL", color: "#10b981", name: "Glue Job Bookmarks", short: "증분 처리",
    desc: "이전 실행 이후 신규 데이터만 처리. 중복 방지.", tags: ["증분"] },
  { cat: "처리·ETL", color: "#10b981", name: "Glue Schema Registry", short: "스키마 관리",
    desc: "Avro/JSON/Protobuf 스키마 버전·진화. Kafka·Kinesis 통합.", tags: ["스키마"] },
  { cat: "처리·ETL", color: "#10b981", name: "Amazon EMR", short: "관리형 Hadoop/Spark",
    desc: "Spark/Hive/HBase/Presto 클러스터. EMR Serverless·EMR on EKS 옵션.", tags: ["빅데이터"] },
  { cat: "처리·ETL", color: "#10b981", name: "EMR Serverless", short: "서버리스 Spark/Hive",
    desc: "클러스터 관리 없이 Spark/Hive 실행. 초 단위 과금.", tags: ["서버리스"] },
  { cat: "처리·ETL", color: "#10b981", name: "EMR on EKS", short: "EKS 기반 EMR",
    desc: "Kubernetes에서 Spark 실행. 컨테이너 워크로드와 통합.", tags: ["컨테이너"] },
  { cat: "처리·ETL", color: "#10b981", name: "AWS Lambda", short: "이벤트 기반 경량 처리",
    desc: "15분·10GB 제약. 단일 객체 변환·알림·연결 용도.", tags: ["서버리스"] },

  // ============ 분석 ============
  { cat: "분석", color: "#f59e0b", name: "Amazon Athena", short: "S3 서버리스 SQL",
    desc: "Presto/Trino 엔진. 스캔 TB당 과금. Glue Catalog 통합. CTAS·Federated Query.", tags: ["핵심"] },
  { cat: "분석", color: "#f59e0b", name: "Athena Workgroups", short: "쿼리 격리",
    desc: "팀별 쿼리 한도·결과 위치·CMK 관리.", tags: ["관리"] },
  { cat: "분석", color: "#f59e0b", name: "Athena Federated Query", short: "외부 소스 쿼리",
    desc: "Lambda Connector로 RDS·Redshift·DynamoDB 등 직접 쿼리.", tags: ["통합"] },
  { cat: "분석", color: "#f59e0b", name: "Amazon Redshift", short: "데이터 웨어하우스",
    desc: "열 기반 MPP. Dist/Sort Key·WLM·Concurrency Scaling. Serverless 옵션.", tags: ["DW"] },
  { cat: "분석", color: "#f59e0b", name: "Redshift Serverless", short: "서버리스 DW",
    desc: "RPU 기반 자동 스케일링. 사용한 만큼만 과금.", tags: ["서버리스"] },
  { cat: "분석", color: "#f59e0b", name: "Redshift Spectrum", short: "S3 외부 테이블",
    desc: "Redshift에서 S3 직접 쿼리. DW + 데이터 레이크 조인.", tags: ["통합"] },
  { cat: "분석", color: "#f59e0b", name: "Redshift Streaming Ingestion", short: "실시간 수집",
    desc: "Kinesis/MSK를 Materialized View로 직접 수집.", tags: ["스트리밍"] },
  { cat: "분석", color: "#f59e0b", name: "Redshift Data Sharing", short: "클러스터 간 공유",
    desc: "소유자·컨슈머 클러스터 간 라이브 데이터 공유. 복사 없음.", tags: ["공유"] },
  { cat: "분석", color: "#f59e0b", name: "Aurora zero-ETL to Redshift", short: "자동 복제",
    desc: "Aurora OLTP 데이터를 Redshift에 거의 실시간 복제. 별도 ETL 불필요.", tags: ["통합"] },
  { cat: "분석", color: "#f59e0b", name: "Amazon OpenSearch Service", short: "검색·로그 분석",
    desc: "Elasticsearch fork. 로그·검색·벡터 DB·Dashboards.", tags: ["검색"] },
  { cat: "분석", color: "#f59e0b", name: "Amazon QuickSight", short: "BI 시각화",
    desc: "서버리스 BI. ML Insights·임베딩·Q 자연어 질의.", tags: ["BI"] },

  // ============ 거버넌스 ============
  { cat: "거버넌스", color: "#ef4444", name: "AWS Lake Formation", short: "데이터 레이크 권한",
    desc: "Glue Catalog 위에 테이블/행/열 수준 권한·LF-Tags·감사.", tags: ["핵심"] },
  { cat: "거버넌스", color: "#ef4444", name: "LF-Tags", short: "태그 기반 권한",
    desc: "리소스·사용자에 태그. 태그 매칭으로 권한 자동 부여.", tags: ["권한"] },
  { cat: "거버넌스", color: "#ef4444", name: "Amazon DataZone", short: "비즈니스 카탈로그·데이터 메시",
    desc: "Domain·Project·Glossary·Subscription. 셀프서비스 데이터 공유.", tags: ["메시"] },
  { cat: "거버넌스", color: "#ef4444", name: "Amazon Macie", short: "S3 PII/PHI 탐지",
    desc: "민감 데이터 자동 분류·알림. 관리형 센서티브 데이터 디스커버리.", tags: ["PII"] },
  { cat: "거버넌스", color: "#ef4444", name: "AWS KMS", short: "키 관리",
    desc: "CMK·Envelope Encryption. S3/Glue/Redshift 전반 통합.", tags: ["암호화"] },
  { cat: "거버넌스", color: "#ef4444", name: "AWS IAM", short: "접근 제어",
    desc: "User/Group/Role/Policy. 데이터 레이크에서는 Lake Formation과 병행.", tags: ["IAM"] },
  { cat: "거버넌스", color: "#ef4444", name: "AWS CloudTrail", short: "API 감사",
    desc: "모든 AWS API 호출 기록. S3 Data Events로 객체 수준 감사 가능.", tags: ["감사"] },
  { cat: "거버넌스", color: "#ef4444", name: "AWS Config", short: "리소스 구성 추적",
    desc: "리소스 변경 이력·컴플라이언스 평가. Conformance Pack 멀티 계정.", tags: ["컴플라이언스"] },

  // ============ 오케스트레이션 ============
  { cat: "오케스트레이션", color: "#a855f7", name: "AWS Step Functions", short: "워크플로",
    desc: "Standard(최대 1년)·Express(고빈도). 상태 기반. Map·Distributed Map 병렬.", tags: ["핵심"] },
  { cat: "오케스트레이션", color: "#a855f7", name: "Amazon MWAA", short: "관리형 Airflow",
    desc: "Managed Workflows for Apache Airflow. DAG 기반 Python 오케스트레이션.", tags: ["Airflow"] },
  { cat: "오케스트레이션", color: "#a855f7", name: "Amazon EventBridge", short: "이벤트 버스",
    desc: "SaaS·AWS·커스텀 이벤트 라우팅. Scheduler·Schema Registry 포함.", tags: ["이벤트"] },
  { cat: "오케스트레이션", color: "#a855f7", name: "Amazon EventBridge Scheduler", short: "스케줄러",
    desc: "cron·rate·one-time 스케줄. CloudWatch Events 대체.", tags: ["스케줄"] },
  { cat: "오케스트레이션", color: "#a855f7", name: "AWS Glue Workflows", short: "Glue 워크플로",
    desc: "Crawler·Job·Trigger를 하나의 워크플로로 묶음.", tags: ["Glue"] },

  // ============ 테이블 포맷·포맷 ============
  { cat: "포맷·테이블", color: "#14b8a6", name: "Apache Parquet", short: "열 기반 포맷",
    desc: "압축·쿼리 효율 최고. Athena/Redshift 표준. Snappy·gzip·LZO 지원.", tags: ["열 기반"] },
  { cat: "포맷·테이블", color: "#14b8a6", name: "Apache ORC", short: "열 기반 포맷",
    desc: "Hive 최적화. ACID 지원. Bloom filter·Stripe 구조.", tags: ["열 기반"] },
  { cat: "포맷·테이블", color: "#14b8a6", name: "Apache Avro", short: "행 기반 포맷",
    desc: "강력한 스키마 진화. Kafka·Kinesis 이벤트 표준.", tags: ["행 기반"] },
  { cat: "포맷·테이블", color: "#14b8a6", name: "Apache Iceberg", short: "ACID 테이블 포맷",
    desc: "Time Travel·MERGE·Schema Evolution·Partition Evolution. Athena/Glue/EMR 지원.", tags: ["ACID"] },
  { cat: "포맷·테이블", color: "#14b8a6", name: "Apache Hudi", short: "Upsert 테이블 포맷",
    desc: "효율적 Upsert·Delete·Incremental Pull. EMR·Glue 지원.", tags: ["ACID"] },
  { cat: "포맷·테이블", color: "#14b8a6", name: "Delta Lake", short: "Databricks 테이블 포맷",
    desc: "ACID·Time Travel·Optimize·Z-Order. EMR·Glue 호환.", tags: ["ACID"] },
  { cat: "포맷·테이블", color: "#14b8a6", name: "Hive-style Partition", short: "디렉터리 파티션",
    desc: "year=2025/month=04/day=21 구조. Athena·Glue 자동 인식.", tags: ["파티션"] },

  // ============ 부가 ============
  { cat: "부가", color: "#64748b", name: "Amazon DynamoDB", short: "NoSQL",
    desc: "서버리스 KV/Document. Streams로 변경 이벤트 · Global Tables 멀티 리전.", tags: ["NoSQL"] },
  { cat: "부가", color: "#64748b", name: "DynamoDB Streams", short: "변경 스트림",
    desc: "삽입·수정·삭제 이벤트 24h 보존. Lambda 트리거 용.", tags: ["이벤트"] },
  { cat: "부가", color: "#64748b", name: "DynamoDB TTL", short: "자동 만료",
    desc: "epoch 타임스탬프 속성 지정 → 자동 삭제 (무료).", tags: ["운영"] },
  { cat: "부가", color: "#64748b", name: "Aurora", short: "AWS 네이티브 RDB",
    desc: "MySQL/PostgreSQL 호환. Serverless v2·Global DB·zero-ETL to Redshift.", tags: ["RDB"] },
  { cat: "부가", color: "#64748b", name: "AWS Secrets Manager", short: "시크릿 관리",
    desc: "DB 자격증명·API 키 자동 회전. RDS/Redshift 내장 템플릿.", tags: ["시크릿"] },
  { cat: "부가", color: "#64748b", name: "Systems Manager Parameter Store", short: "구성 경량",
    desc: "Standard 무료. SecureString + KMS. 간단 구성 값.", tags: ["구성"] },
  { cat: "부가", color: "#64748b", name: "Amazon CloudWatch", short: "모니터링·로그",
    desc: "Metrics·Logs·Alarm·Logs Insights. Kinesis/Glue/Redshift 지표.", tags: ["모니터링"] },
  { cat: "부가", color: "#64748b", name: "AWS X-Ray", short: "분산 추적",
    desc: "Lambda·ECS·Glue 호출 흐름 시각화.", tags: ["APM"] },
  { cat: "부가", color: "#64748b", name: "AWS CloudFormation", short: "IaC",
    desc: "YAML/JSON 템플릿. StackSet으로 멀티 계정 배포.", tags: ["IaC"] },
  { cat: "부가", color: "#64748b", name: "AWS CDK", short: "프로그래밍 IaC",
    desc: "TypeScript/Python 등 언어로 CloudFormation 생성.", tags: ["IaC"] }
];
