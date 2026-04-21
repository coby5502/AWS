// MLA-C01 전용 부가 콘텐츠: 헷갈리는 개념 / 키워드 / 함정 / 결정트리 / 용어집
// SAA/AIF의 COMPARES/KEYWORDS/TRAPS/DECISIONS/GLOSSARY와 동일한 스키마
// 스키마:
//   COMPARES  : {title, badge, cols, cards: [{name, dot, rows: [{k, v}]}], tip}
//   KEYWORDS  : {kw, services, tip}
//   TRAPS     : {icon, title, wrong, right}
//   DECISIONS : {title, icon, q, opts: [{label, answer}]}
//   GLOSSARY  : {cat, color, name, short, desc, tags}
// AWS 서비스·ML 기술 용어는 원어 유지

/* ─────── 헷갈리는 개념 비교 ─────── */
window.MLA_COMPARES = [
  {
    title: "SageMaker 학습 진입점 3가지",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "Built-in Algorithm",
        dot: "#7c6fff",
        rows: [
          { k: "목적", v: "빠른 표준 알고리즘 실행" },
          { k: "코드", v: "불필요 (하이퍼파라미터만)" },
          { k: "예시", v: "XGBoost, Linear Learner, BlazingText" },
          { k: "장점", v: "최소 엔지니어링으로 학습" },
          { k: "한계", v: "커스텀 로직 불가" }
        ]
      },
      {
        name: "Script Mode",
        dot: "#34d399",
        rows: [
          { k: "목적", v: "TF/PyTorch/Sklearn 커스텀 스크립트" },
          { k: "코드", v: "훈련 스크립트 (entry_point)" },
          { k: "예시", v: "PyTorchEstimator, TensorFlowEstimator" },
          { k: "장점", v: "프레임워크 컨테이너 재사용" },
          { k: "한계", v: "지원 프레임워크 내" }
        ]
      },
      {
        name: "BYOC (Bring Your Own Container)",
        dot: "#f59e0b",
        rows: [
          { k: "목적", v: "완전 커스텀 런타임" },
          { k: "코드", v: "Dockerfile + 이미지" },
          { k: "예시", v: "자체 R/Julia 환경, 특수 CUDA" },
          { k: "장점", v: "무엇이든 가능" },
          { k: "한계", v: "운영 부담 최대" }
        ]
      }
    ],
    tip: "💡 요구사항 적합 시 Built-in → 프레임워크로 커스텀 코드면 Script Mode → 전혀 다른 환경만 BYOC"
  },
  {
    title: "SageMaker 배포 4가지",
    badge: "자주 출제",
    cols: 2,
    cards: [
      {
        name: "Real-time Endpoint",
        dot: "#7c6fff",
        rows: [
          { k: "지연", v: "ms 단위" },
          { k: "트래픽", v: "상시 요청" },
          { k: "과금", v: "인스턴스 시간 과금" },
          { k: "사용 예", v: "웹/모바일 실시간 추론" }
        ]
      },
      {
        name: "Serverless Inference",
        dot: "#34d399",
        rows: [
          { k: "지연", v: "cold start 있음" },
          { k: "트래픽", v: "간헐적/예측 불가" },
          { k: "과금", v: "실행 시간만" },
          { k: "사용 예", v: "트래픽 변동 큰 API" }
        ]
      },
      {
        name: "Async Inference",
        dot: "#f59e0b",
        rows: [
          { k: "지연", v: "분 단위 허용" },
          { k: "트래픽", v: "큰 페이로드" },
          { k: "과금", v: "인스턴스 + 큐" },
          { k: "사용 예", v: "대용량 이미지/비디오 추론" }
        ]
      },
      {
        name: "Batch Transform",
        dot: "#ef4444",
        rows: [
          { k: "지연", v: "일괄 처리" },
          { k: "트래픽", v: "엔드포인트 없음" },
          { k: "과금", v: "작업 시간만" },
          { k: "사용 예", v: "야간 일괄 스코어링" }
        ]
      }
    ],
    tip: "💡 실시간 & 저지연 = Real-time / 간헐적·저비용 = Serverless / 큰 입력·분 지연 OK = Async / 주기적 오프라인 = Batch"
  },
  {
    title: "데이터 분할 전략 (Time-series 주의)",
    badge: "함정",
    cols: 2,
    cards: [
      {
        name: "일반 Random Split",
        dot: "#34d399",
        rows: [
          { k: "방식", v: "무작위 분할" },
          { k: "Train/Val/Test", v: "보통 70/15/15" },
          { k: "유효 상황", v: "IID 데이터 (이미지 분류 등)" },
          { k: "리스크", v: "시계열에선 data leakage" }
        ]
      },
      {
        name: "Time-based Split",
        dot: "#f59e0b",
        rows: [
          { k: "방식", v: "시간 순서대로 과거→미래" },
          { k: "Train/Val/Test", v: "과거 80% / 중간 10% / 최신 10%" },
          { k: "유효 상황", v: "예측·수요·금융 시계열" },
          { k: "리스크", v: "분포 드리프트 감지 중요" }
        ]
      }
    ],
    tip: "💡 시계열에서는 무조건 시간 순서 기반 분할. 랜덤 분할 시 과거가 미래를 참조해 과대평가됨."
  },
  {
    title: "모델 해석 도구 (Explainability)",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "SHAP (Shapley)",
        dot: "#7c6fff",
        rows: [
          { k: "목적", v: "피처별 예측 기여도" },
          { k: "범위", v: "로컬 + 글로벌" },
          { k: "통합", v: "SageMaker Clarify 내장" }
        ]
      },
      {
        name: "PDP",
        dot: "#34d399",
        rows: [
          { k: "목적", v: "피처 값 변화에 따른 예측 변화" },
          { k: "범위", v: "글로벌" },
          { k: "통합", v: "sklearn.inspection 등" }
        ]
      },
      {
        name: "LIME",
        dot: "#f59e0b",
        rows: [
          { k: "목적", v: "개별 예측 주변 선형 근사" },
          { k: "범위", v: "로컬" },
          { k: "통합", v: "라이브러리 별도" }
        ]
      }
    ],
    tip: "💡 전체 추세 = PDP / 개별 예측 이유 = LIME / 둘 다 + AWS 통합 = SHAP (Clarify)"
  },
  {
    title: "데이터 준비: Data Wrangler vs Glue vs EMR",
    badge: "자주 출제",
    cols: 3,
    cards: [
      {
        name: "Data Wrangler",
        dot: "#7c6fff",
        rows: [
          { k: "대상", v: "ML 전처리 (피처 엔지니어링)" },
          { k: "UI", v: "Studio 비주얼 UI" },
          { k: "출력", v: "Feature Store, S3, 파이프라인" },
          { k: "규모", v: "중소규모" }
        ]
      },
      {
        name: "AWS Glue",
        dot: "#34d399",
        rows: [
          { k: "대상", v: "서버리스 ETL" },
          { k: "UI", v: "코드 또는 Studio" },
          { k: "출력", v: "Data Catalog + S3" },
          { k: "규모", v: "대규모 스케줄 ETL" }
        ]
      },
      {
        name: "Amazon EMR",
        dot: "#f59e0b",
        rows: [
          { k: "대상", v: "Spark/Hadoop 빅데이터" },
          { k: "UI", v: "클러스터 관리" },
          { k: "출력", v: "다양" },
          { k: "규모", v: "초대규모·고성능" }
        ]
      }
    ],
    tip: "💡 ML 피처 엔지니어링 UI = Data Wrangler / 서버리스 ETL = Glue / Spark 대규모 = EMR"
  }
];

/* ─────── 시험 빈출 키워드 ─────── */
window.MLA_KEYWORDS = [
  { kw: "LEAST operational overhead",
    services: "SageMaker Model Registry · Feature Store · Pipelines · Clarify · JumpStart",
    tip: "운영 부담 최소화 = 관리형 SageMaker 내장 서비스 우선" },
  { kw: "central model registry · versioning",
    services: "SageMaker Model Registry + Model Groups",
    tip: "ECR은 컨테이너 저장소. 모델 버전은 Model Group이 자동 증가" },
  { kw: "drift detection · monitor production model",
    services: "SageMaker Model Monitor",
    tip: "데이터 품질 / 모델 품질 / 편향 / 설명 가능성 4가지 드리프트 감지" },
  { kw: "bias · explainability · SHAP",
    services: "SageMaker Clarify",
    tip: "학습 전·후·배포 후 편향 감지 + SHAP 기반 해석" },
  { kw: "feature reuse · online + offline",
    services: "SageMaker Feature Store",
    tip: "학습-추론 피처 일관성. 온라인(저지연) + 오프라인(대용량)" },
  { kw: "low-latency batch · no endpoint",
    services: "Batch Transform",
    tip: "S3 입력 → S3 출력. 엔드포인트 비용 없음" },
  { kw: "multi-model · low cost",
    services: "Multi-Model Endpoint (MME)",
    tip: "하나의 컨테이너에 다수 모델. 사용 빈도 낮은 모델 저비용 운영" },
  { kw: "A/B test · canary · shadow",
    services: "Production Variants · Shadow Variant",
    tip: "엔드포인트 내 트래픽 분기. Shadow는 무영향 테스트" },
  { kw: "automation pipeline · CI/CD",
    services: "SageMaker Pipelines",
    tip: "ML 워크플로 전용 DAG. Step Functions보다 ML 특화" },
  { kw: "hyperparameter tuning",
    services: "Automatic Model Tuning (HPO)",
    tip: "Bayesian (권장) · Random · Grid. 메트릭 목표 기반 자동 튜닝" },
  { kw: "imbalanced data · minority class",
    services: "SMOTE · class_weight · focal loss",
    tip: "소수 클래스 오버샘플링(SMOTE) 또는 손실 함수 가중치" },
  { kw: "data leakage",
    services: "분리 후 스케일링 · 시간 순서 split",
    tip: "Train/Val 분리 전에 정규화하면 leakage. fit on train only" },
  { kw: "minimize infrastructure startup time",
    services: "SageMaker managed warm pools",
    tip: "연속 학습 작업에서 인스턴스 재사용으로 프로비저닝 시간 절약" },
  { kw: "cost-effective training · fault-tolerant",
    services: "Managed Spot Training",
    tip: "최대 90% 할인. 체크포인트 활성화 필수" },
  { kw: "manual approval workflow · production",
    services: "SageMaker Pipelines + Model Registry Approval Status",
    tip: "PendingManualApproval → Approved → 배포. AWS SDK로 상태 변경" },
  { kw: "edge · IoT inference",
    services: "SageMaker Neo + Edge Manager",
    tip: "Neo는 하드웨어 최적화 컴파일, Edge Manager는 엣지 디바이스 관리" },
  { kw: "distributed training · multi-instance",
    services: "SageMaker Distributed Training (SMDDP · SMP)",
    tip: "데이터 병렬(SMDDP) · 모델 병렬(SMP) · 대규모 학습 가속" },
  { kw: "GPU utilization · optimize",
    services: "SageMaker Training Compiler",
    tip: "학습 코드를 자동으로 하드웨어 최적화 컴파일" },
  { kw: "private S3 access from SageMaker",
    services: "VPC Endpoint (S3 Gateway / Interface) + IAM",
    tip: "인터넷 우회 + 최소 권한. 민감 데이터 격리" },
  { kw: "encrypt training data · at rest",
    services: "KMS + S3 SSE-KMS",
    tip: "학습·추론·아티팩트 전반에 KMS CMK 통합" }
];

/* ─────── 출제 함정 ─────── */
window.MLA_TRAPS = [
  { icon: "🗂️", title: "\"central registry\"에서 ECR을 고르는 함정",
    wrong: "ECR은 컨테이너 이미지 저장소이지 모델 레지스트리가 아님",
    right: "모델 버전 관리 = <strong>SageMaker Model Registry + Model Groups</strong>" },
  { icon: "⏳", title: "Time-series를 Random Split하는 함정",
    wrong: "무작위 분할 시 미래 데이터가 학습에 포함 → 과대평가",
    right: "시간 순서 기반 split (앞 80% train, 뒤 20% test). <strong>data leakage 주의</strong>" },
  { icon: "🔀", title: "Pipeline vs Step Functions",
    wrong: "ML 워크플로인데 Step Functions를 먼저 고르는 실수",
    right: "ML 전용은 <strong>SageMaker Pipelines</strong>가 네이티브·운영 부담 최소" },
  { icon: "📦", title: "Batch Transform과 Async Inference 혼동",
    wrong: "\"대량 처리\"만 보고 Batch Transform 선택",
    right: "엔드포인트 필요 여부 확인: <strong>필요 없으면 Batch, 필요하면 Async</strong>" },
  { icon: "📊", title: "정규화를 데이터 분리 전에 하는 함정",
    wrong: "전체 데이터로 평균/분산 계산 후 분리 → leakage",
    right: "<strong>분리 후 train 통계로만</strong> 스케일링 (fit on train, transform on val/test)" },
  { icon: "🖥️", title: "\"LEAST operational overhead\"에서 EC2 기반을 고르는 함정",
    wrong: "EC2 + 직접 설치는 운영 부담 최대",
    right: "<strong>관리형 (SageMaker · Glue · Bedrock)</strong> 우선 고려" },
  { icon: "🚨", title: "Drift 발생 시 자동 재학습을 먼저 고르는 함정",
    wrong: "즉시 재학습은 비용·안정성 리스크",
    right: "<strong>Model Monitor로 먼저 감지</strong> + Pipelines로 승인 기반 재학습" },
  { icon: "🎯", title: "소량 라벨 데이터 = Fine-tuning 먼저 고르는 함정",
    wrong: "수백 샘플로 Fine-tuning → overfitting",
    right: "<strong>Few-shot Prompting 또는 Data Augmentation</strong> 우선" },
  { icon: "💸", title: "비용 질문에서 무조건 GPU 인스턴스 고르는 함정",
    wrong: "성능이 필요 없는데 GPU 선택 → 과금 낭비",
    right: "경량 추론 = <strong>CPU · Inferentia · Serverless · Spot</strong> 고려" },
  { icon: "🔐", title: "S3 접근 제어에서 IAM만 의존하는 함정",
    wrong: "프라이빗 트래픽이 요구될 때 IAM만으로 해결 시도",
    right: "<strong>VPC Interface/Gateway Endpoint + IAM 조건</strong> 병행" },
  { icon: "🏷️", title: "Feature Store 없이 CSV로만 관리하는 함정",
    wrong: "학습·추론 피처 일관성이 깨져도 CSV로 해결 시도",
    right: "<strong>SageMaker Feature Store</strong>로 온라인·오프라인 일관성 자동 보장" },
  { icon: "⚖️", title: "불균형 데이터에서 Accuracy만 보는 함정",
    wrong: "Accuracy 95%만 보고 좋은 모델로 판단",
    right: "<strong>F1 / Precision / Recall / AUC-ROC</strong>로 소수 클래스 성능 확인" }
];

/* ─────── 시나리오 결정 트리 ─────── */
window.MLA_DECISIONS = [
  {
    title: "배포 방식 선택",
    icon: "🚀",
    q: "추론 특성은?",
    opts: [
      { label: "실시간(ms)·상시 트래픽", answer: "→ <strong>Real-time Endpoint</strong>" },
      { label: "간헐적·cold start 허용", answer: "→ <strong>Serverless Inference</strong>" },
      { label: "큰 입력·분 단위 지연 OK", answer: "→ <strong>Async Inference</strong>" },
      { label: "주기적 대량 오프라인", answer: "→ <strong>Batch Transform</strong>" },
      { label: "많은 모델 저비용 운영", answer: "→ <strong>Multi-Model Endpoint</strong>" },
      { label: "엣지(IoT 디바이스) 추론", answer: "→ <strong>SageMaker Neo + Edge Manager</strong>" }
    ]
  },
  {
    title: "학습 방식 결정",
    icon: "🧪",
    q: "요구되는 자유도는?",
    opts: [
      { label: "표준 알고리즘으로 충분", answer: "→ <strong>Built-in Algorithm</strong>" },
      { label: "TF/PyTorch 커스텀 스크립트", answer: "→ <strong>Script Mode (DLC)</strong>" },
      { label: "완전 커스텀 런타임/라이브러리", answer: "→ <strong>BYOC (Docker)</strong>" },
      { label: "하이퍼파라미터 최적화 자동화", answer: "→ <strong>Automatic Model Tuning (HPO)</strong>" },
      { label: "분산 학습(데이터/모델 병렬)", answer: "→ <strong>SageMaker Distributed Training</strong>" }
    ]
  },
  {
    title: "데이터 전처리 도구",
    icon: "🧹",
    q: "전처리 상황은?",
    opts: [
      { label: "ML 피처 엔지니어링 UI 중심", answer: "→ <strong>SageMaker Data Wrangler</strong>" },
      { label: "서버리스 대규모 ETL", answer: "→ <strong>AWS Glue</strong>" },
      { label: "Spark/Hadoop 초대규모", answer: "→ <strong>Amazon EMR</strong>" },
      { label: "간단한 변환·람다 수준", answer: "→ <strong>Lambda + S3</strong>" },
      { label: "PII 마스킹·민감정보", answer: "→ <strong>Macie + Glue DataBrew</strong>" }
    ]
  },
  {
    title: "모니터링·운영 선택",
    icon: "📊",
    q: "모니터링 대상은?",
    opts: [
      { label: "데이터/모델 품질 드리프트", answer: "→ <strong>SageMaker Model Monitor</strong>" },
      { label: "편향(Bias)·설명 가능성", answer: "→ <strong>SageMaker Clarify</strong>" },
      { label: "엔드포인트 지표·트래픽", answer: "→ <strong>CloudWatch + Endpoint Metrics</strong>" },
      { label: "로그 분석·디버그", answer: "→ <strong>CloudWatch Logs Insights</strong>" },
      { label: "학습 프로파일링", answer: "→ <strong>SageMaker Debugger / Profiler</strong>" }
    ]
  },
  {
    title: "모델 커스터마이징 (Generative)",
    icon: "🪄",
    q: "원하는 변경 수준은?",
    opts: [
      { label: "외부/사내 지식만 참조", answer: "→ <strong>RAG (Knowledge Bases for Bedrock)</strong>" },
      { label: "톤·스타일·태스크 특화", answer: "→ <strong>Fine-tuning</strong>" },
      { label: "도메인 언어 내재화", answer: "→ <strong>Continued Pre-training</strong>" },
      { label: "다단계 판단·도구 호출", answer: "→ <strong>Agents for Bedrock</strong>" }
    ]
  }
];

/* ─────── 용어집 ─────── */
window.MLA_GLOSSARY = [
  // ============ SageMaker 핵심 ============
  { cat: "SageMaker 핵심", color: "#7c6fff", name: "Amazon SageMaker", short: "AWS 관리형 ML 플랫폼",
    desc: "ML 수명주기 전반(데이터 준비 → 학습 → 튜닝 → 배포 → 모니터링)을 지원하는 통합 서비스. Studio UI, SDK, CLI 제공.", tags: ["핵심"] },
  { cat: "SageMaker 핵심", color: "#7c6fff", name: "SageMaker Studio", short: "웹 IDE",
    desc: "Jupyter 기반 통합 ML IDE. 코드·노트북·실험·모델·배포를 단일 화면에서 관리.", tags: ["UI"] },
  { cat: "SageMaker 핵심", color: "#7c6fff", name: "SageMaker Canvas", short: "노코드 ML",
    desc: "비즈니스 분석가를 위한 드래그앤드롭 모델링 도구. 코드 없이 분류·회귀·예측·이미지 모델 생성.", tags: ["노코드"] },
  { cat: "SageMaker 핵심", color: "#7c6fff", name: "SageMaker JumpStart", short: "사전 학습 모델 카탈로그",
    desc: "FM·사전 학습 모델·솔루션 템플릿 원클릭 배포. Hugging Face·Stable Diffusion·Llama·Falcon 등 포함.", tags: ["템플릿"] },
  { cat: "SageMaker 핵심", color: "#7c6fff", name: "SageMaker Autopilot", short: "AutoML",
    desc: "CSV 지정만으로 자동 전처리·알고리즘 선택·튜닝. 분류·회귀·시계열 지원.", tags: ["AutoML"] },

  // ============ 데이터 준비 ============
  { cat: "데이터 준비", color: "#0ea5e9", name: "SageMaker Data Wrangler", short: "비주얼 피처 엔지니어링",
    desc: "Studio 내 300+ 내장 변환을 비주얼 UI로 적용. Feature Store/Pipelines로 내보내기 가능.", tags: ["전처리"] },
  { cat: "데이터 준비", color: "#0ea5e9", name: "SageMaker Feature Store", short: "온라인+오프라인 피처 저장소",
    desc: "학습용 오프라인(S3) + 추론용 온라인(저지연) 스토어. 학습-추론 피처 일관성 보장.", tags: ["피처"] },
  { cat: "데이터 준비", color: "#0ea5e9", name: "SageMaker Ground Truth", short: "데이터 라벨링",
    desc: "사람(Mechanical Turk/내부/벤더) + Auto-labeling 혼합 라벨링 서비스. 텍스트·이미지·3D·비디오 지원.", tags: ["라벨링"] },
  { cat: "데이터 준비", color: "#0ea5e9", name: "AWS Glue", short: "서버리스 ETL",
    desc: "Spark 기반 서버리스 ETL + Data Catalog. 스케줄·크롤러·Studio UI 포함.", tags: ["ETL"] },
  { cat: "데이터 준비", color: "#0ea5e9", name: "AWS Glue DataBrew", short: "노코드 데이터 전처리",
    desc: "250+ 내장 변환, 노코드 UI로 데이터 정제·결측값 처리·타입 변환.", tags: ["노코드"] },
  { cat: "데이터 준비", color: "#0ea5e9", name: "Amazon EMR", short: "관리형 Spark/Hadoop",
    desc: "Hadoop·Spark·Hive·Presto·HBase 클러스터. 초대규모 빅데이터 처리.", tags: ["빅데이터"] },
  { cat: "데이터 준비", color: "#0ea5e9", name: "Amazon Athena", short: "S3 서버리스 SQL",
    desc: "S3 위에 Presto 기반 SQL. 스키마 온 리드, 쿼리당 과금.", tags: ["SQL"] },
  { cat: "데이터 준비", color: "#0ea5e9", name: "AWS Lake Formation", short: "데이터 레이크 거버넌스",
    desc: "세분화된 테이블·행·열 수준 권한, 감사, 중앙 Glue Catalog 기반 통합 관리.", tags: ["거버넌스"] },

  // ============ 학습 & 튜닝 ============
  { cat: "학습·튜닝", color: "#10b981", name: "SageMaker Training Job", short: "학습 작업",
    desc: "인스턴스 프로비저닝 → 컨테이너 실행 → S3 아티팩트 저장. Built-in / Script / BYOC 모드.", tags: ["학습"] },
  { cat: "학습·튜닝", color: "#10b981", name: "Built-in Algorithm", short: "기본 내장 알고리즘",
    desc: "XGBoost, Linear Learner, BlazingText, DeepAR, RCF 등. 코드 없이 하이퍼파라미터만 지정.", tags: ["알고리즘"] },
  { cat: "학습·튜닝", color: "#10b981", name: "Script Mode", short: "프레임워크 커스텀 스크립트",
    desc: "TensorFlow/PyTorch/Sklearn 컨테이너에 entry_point 스크립트 주입하여 학습.", tags: ["프레임워크"] },
  { cat: "학습·튜닝", color: "#10b981", name: "BYOC", short: "커스텀 컨테이너",
    desc: "Dockerfile로 자체 이미지 빌드 후 ECR 푸시. 완전 커스텀 런타임.", tags: ["컨테이너"] },
  { cat: "학습·튜닝", color: "#10b981", name: "Automatic Model Tuning (HPO)", short: "하이퍼파라미터 최적화",
    desc: "Bayesian(권장) · Random · Grid · Hyperband 전략. 목표 메트릭으로 최적 조합 탐색.", tags: ["HPO"] },
  { cat: "학습·튜닝", color: "#10b981", name: "Managed Spot Training", short: "Spot 학습",
    desc: "최대 90% 할인. 체크포인트 S3 저장 활성화 필요. 중단 허용 워크로드용.", tags: ["비용"] },
  { cat: "학습·튜닝", color: "#10b981", name: "Managed Warm Pools", short: "학습 인스턴스 재사용",
    desc: "학습 작업 완료 후 인스턴스 유지로 연속 작업 시 프로비저닝 시간 단축.", tags: ["성능"] },
  { cat: "학습·튜닝", color: "#10b981", name: "SageMaker Distributed Training", short: "분산 학습",
    desc: "SMDDP(데이터 병렬) + SMP(모델 병렬). 대규모 모델·데이터 가속.", tags: ["분산"] },
  { cat: "학습·튜닝", color: "#10b981", name: "SageMaker Training Compiler", short: "학습 컴파일 최적화",
    desc: "학습 코드를 하드웨어 최적화 IR로 자동 컴파일. GPU 활용률 향상.", tags: ["최적화"] },
  { cat: "학습·튜닝", color: "#10b981", name: "SageMaker Debugger / Profiler", short: "학습 디버그",
    desc: "학습 중 텐서 캡처, 그래디언트 소실·폭발 자동 규칙 탐지, 시스템 자원 프로파일링.", tags: ["디버그"] },

  // ============ 모델 관리 ============
  { cat: "모델 관리", color: "#f59e0b", name: "SageMaker Model Registry", short: "모델 중앙 레지스트리",
    desc: "Model Group 아래 Model Package(버전) 관리. 승인/거부 워크플로, 배포 추적.", tags: ["핵심"] },
  { cat: "모델 관리", color: "#f59e0b", name: "Model Group", short: "모델 버전 묶음",
    desc: "동일 목적 모델의 버전 모음. 새 Model Package 추가 시 버전 1,2,3… 자동 증가.", tags: ["버전"] },
  { cat: "모델 관리", color: "#f59e0b", name: "SageMaker Pipelines", short: "ML 전용 CI/CD",
    desc: "데이터 처리 → 학습 → 평가 → 등록 → 배포를 DAG로 선언. condition step 지원.", tags: ["CI/CD"] },
  { cat: "모델 관리", color: "#f59e0b", name: "ML Lineage Tracking", short: "계보 추적",
    desc: "학습 작업·데이터셋·모델 간의 계보 자동 기록. 감사·재현성 용도.", tags: ["감사"] },
  { cat: "모델 관리", color: "#f59e0b", name: "SageMaker Experiments", short: "실험 추적",
    desc: "학습 실험·trial·하이퍼파라미터·메트릭 비교. 노트북·SDK 연동.", tags: ["실험"] },

  // ============ 배포 ============
  { cat: "배포", color: "#ec4899", name: "Real-time Endpoint", short: "실시간 엔드포인트",
    desc: "상시 가동 추론. ms 단위 지연. 인스턴스 시간 과금.", tags: ["실시간"] },
  { cat: "배포", color: "#ec4899", name: "Serverless Inference", short: "서버리스 추론",
    desc: "요청 시에만 스케일 업. cold start 존재. 트래픽 0일 때 비용 0.", tags: ["서버리스"] },
  { cat: "배포", color: "#ec4899", name: "Async Inference", short: "비동기 추론",
    desc: "큐 기반. 큰 페이로드·긴 처리 시간 지원. S3 입출력.", tags: ["비동기"] },
  { cat: "배포", color: "#ec4899", name: "Batch Transform", short: "배치 추론",
    desc: "엔드포인트 없이 S3 → S3 일괄 추론. 오프라인 스코어링.", tags: ["배치"] },
  { cat: "배포", color: "#ec4899", name: "Multi-Model Endpoint (MME)", short: "멀티 모델 엔드포인트",
    desc: "하나의 컨테이너에 여러 모델 동적 로드. 사용 빈도 낮은 모델 저비용.", tags: ["비용"] },
  { cat: "배포", color: "#ec4899", name: "Production Variants", short: "트래픽 분기",
    desc: "엔드포인트 내 여러 모델 변형에 가중치로 트래픽 분산. A/B·Canary 배포.", tags: ["A/B"] },
  { cat: "배포", color: "#ec4899", name: "Shadow Variant", short: "Shadow 테스트",
    desc: "실트래픽의 복사본을 신규 모델에 보내 실제 사용자 영향 없이 비교.", tags: ["테스트"] },
  { cat: "배포", color: "#ec4899", name: "Inference Recommender", short: "인스턴스 추천",
    desc: "모델·워크로드 특성 기반 최적 인스턴스 타입·크기 자동 추천.", tags: ["최적화"] },
  { cat: "배포", color: "#ec4899", name: "SageMaker Neo", short: "하드웨어 최적화 컴파일",
    desc: "모델을 특정 GPU/CPU/엣지 디바이스용으로 최적화 컴파일. 추론 속도 가속.", tags: ["엣지"] },

  // ============ 모니터링·설명 ============
  { cat: "모니터링·설명", color: "#06b6d4", name: "SageMaker Model Monitor", short: "드리프트 감지",
    desc: "데이터 품질·모델 품질·편향(bias)·설명 가능성 4가지 드리프트 자동 탐지.", tags: ["드리프트"] },
  { cat: "모니터링·설명", color: "#06b6d4", name: "SageMaker Clarify", short: "편향·설명 가능성",
    desc: "학습 전·후·배포 후 편향 탐지 + SHAP 기반 해석. Model Monitor와 연동.", tags: ["Bias"] },
  { cat: "모니터링·설명", color: "#06b6d4", name: "SHAP (Shapley Values)", short: "피처 기여도",
    desc: "게임이론 기반으로 각 피처가 예측에 기여한 정도를 로컬·글로벌로 정량화.", tags: ["해석"] },
  { cat: "모니터링·설명", color: "#06b6d4", name: "PDP (Partial Dependence Plot)", short: "피처 영향 시각화",
    desc: "특정 피처 값 변화에 따른 예측의 평균적 변화를 그래프화. 글로벌 해석.", tags: ["시각화"] },
  { cat: "모니터링·설명", color: "#06b6d4", name: "LIME", short: "로컬 선형 근사 해석",
    desc: "개별 예측 주변을 단순 선형 모델로 근사. 한 건 단위 설명에 적합.", tags: ["해석"] },
  { cat: "모니터링·설명", color: "#06b6d4", name: "CloudWatch Metrics", short: "엔드포인트 지표",
    desc: "Invocations, Latency, ModelLatency, 4XX/5XX, CPU/Memory 사용률 모니터링.", tags: ["모니터링"] },

  // ============ ML 기초 개념 ============
  { cat: "ML 기초", color: "#8b5cf6", name: "Supervised Learning", short: "지도 학습",
    desc: "(입력, 라벨) 쌍으로 학습. 분류·회귀 대표. F1/Precision/Recall/RMSE 등으로 평가.", tags: ["기본"] },
  { cat: "ML 기초", color: "#8b5cf6", name: "Unsupervised Learning", short: "비지도 학습",
    desc: "라벨 없음. 클러스터링(K-Means), 이상 탐지(RCF), 차원 축소(PCA).", tags: ["기본"] },
  { cat: "ML 기초", color: "#8b5cf6", name: "Reinforcement Learning", short: "강화 학습",
    desc: "에이전트가 환경과 상호작용하며 보상 최대화. RL Coach, Ray RLlib 지원.", tags: ["RL"] },
  { cat: "ML 기초", color: "#8b5cf6", name: "Overfitting", short: "과적합",
    desc: "학습 데이터엔 맞지만 일반화 실패. 해결: 정규화(L1/L2), Dropout, 더 많은 데이터, Early Stopping.", tags: ["진단"] },
  { cat: "ML 기초", color: "#8b5cf6", name: "Underfitting", short: "과소적합",
    desc: "모델이 너무 단순해 학습/검증 모두 성능 낮음. 해결: 복잡도·피처 추가.", tags: ["진단"] },
  { cat: "ML 기초", color: "#8b5cf6", name: "Regularization (L1/L2)", short: "정규화",
    desc: "L1=Lasso(희소해, 피처 선택) · L2=Ridge(가중치 축소). 과적합 방지.", tags: ["정규화"] },
  { cat: "ML 기초", color: "#8b5cf6", name: "Dropout", short: "드롭아웃",
    desc: "학습 중 뉴런 일부 무작위 비활성화로 과적합 방지. 추론 시 전체 사용.", tags: ["딥러닝"] },
  { cat: "ML 기초", color: "#8b5cf6", name: "Batch Normalization", short: "배치 정규화",
    desc: "미니배치 단위로 정규화 → 학습 안정·가속·내부 covariate shift 감소.", tags: ["딥러닝"] },
  { cat: "ML 기초", color: "#8b5cf6", name: "Learning Rate", short: "학습률",
    desc: "가중치 업데이트 크기. 너무 크면 발산, 작으면 수렴 느림. 스케줄링 권장.", tags: ["하이퍼파라미터"] },
  { cat: "ML 기초", color: "#8b5cf6", name: "Early Stopping", short: "조기 종료",
    desc: "검증 손실이 개선되지 않으면 학습 중단. 과적합 방지의 기본 장치.", tags: ["정규화"] },

  // ============ 평가 지표 ============
  { cat: "평가 지표", color: "#ef4444", name: "Confusion Matrix", short: "혼동 행렬",
    desc: "TP/FP/FN/TN 표. 분류 모델 성능 분석의 출발점.", tags: ["분류"] },
  { cat: "평가 지표", color: "#ef4444", name: "Precision · Recall · F1", short: "분류 지표",
    desc: "Precision=TP/(TP+FP) · Recall=TP/(TP+FN) · F1=조화평균. 불균형에 민감.", tags: ["분류"] },
  { cat: "평가 지표", color: "#ef4444", name: "AUC-ROC", short: "ROC 곡선 아래 면적",
    desc: "임계값 변화에 따른 TPR vs FPR. 1에 가까울수록 좋음. 확률 출력 모델 평가.", tags: ["분류"] },
  { cat: "평가 지표", color: "#ef4444", name: "RMSE · MAE", short: "회귀 오차",
    desc: "RMSE는 큰 오차에 민감, MAE는 이상치에 둔감. 목적에 맞게 선택.", tags: ["회귀"] },
  { cat: "평가 지표", color: "#ef4444", name: "R² (결정계수)", short: "설명력",
    desc: "1에 가까울수록 좋음. 음수면 평균 예측보다 나쁨.", tags: ["회귀"] },
  { cat: "평가 지표", color: "#ef4444", name: "Silhouette Score", short: "클러스터링 평가",
    desc: "-1~1. 1에 가까울수록 잘 분리된 클러스터.", tags: ["클러스터링"] },

  // ============ 피처 엔지니어링 ============
  { cat: "피처 엔지니어링", color: "#f97316", name: "One-hot Encoding", short: "원핫 인코딩",
    desc: "범주형 → 0/1 벡터. 카테고리 많으면 차원 폭발 주의.", tags: ["범주형"] },
  { cat: "피처 엔지니어링", color: "#f97316", name: "Label Encoding", short: "라벨 인코딩",
    desc: "범주형 → 정수. 순서형(ordinal) 데이터에만 권장.", tags: ["범주형"] },
  { cat: "피처 엔지니어링", color: "#f97316", name: "Target Encoding", short: "타깃 인코딩",
    desc: "범주를 타깃 평균으로 대체. data leakage 주의, train 세트에서만 계산.", tags: ["고급"] },
  { cat: "피처 엔지니어링", color: "#f97316", name: "Embedding", short: "임베딩",
    desc: "고차원 범주/텍스트를 저차원 벡터로. Word2Vec, BERT 등. 의미 보존.", tags: ["딥러닝"] },
  { cat: "피처 엔지니어링", color: "#f97316", name: "Standardization · Normalization", short: "스케일링",
    desc: "Standard=평균 0·표준편차 1 · Min-Max=0~1 범위. 분리 후 train 통계로만.", tags: ["전처리"] },
  { cat: "피처 엔지니어링", color: "#f97316", name: "SMOTE", short: "소수 클래스 오버샘플링",
    desc: "Synthetic Minority Oversampling. 합성 샘플 생성으로 불균형 해소.", tags: ["불균형"] },
  { cat: "피처 엔지니어링", color: "#f97316", name: "Class Weights", short: "클래스 가중치",
    desc: "손실 함수에 클래스별 가중치 부여. 불균형 대응, 데이터 증강 없이도 적용.", tags: ["불균형"] },

  // ============ 내장 알고리즘 ============
  { cat: "내장 알고리즘", color: "#22c55e", name: "XGBoost", short: "Gradient Boosting",
    desc: "대표 부스팅 트리. 정형 데이터에 강함. SageMaker Built-in 포함.", tags: ["분류·회귀"] },
  { cat: "내장 알고리즘", color: "#22c55e", name: "Linear Learner", short: "선형 모델",
    desc: "선형 회귀/분류 Built-in. L1/L2 정규화 지원.", tags: ["분류·회귀"] },
  { cat: "내장 알고리즘", color: "#22c55e", name: "BlazingText", short: "Word2Vec/텍스트 분류",
    desc: "FastText 기반 텍스트 분류·Word2Vec 임베딩 학습.", tags: ["텍스트"] },
  { cat: "내장 알고리즘", color: "#22c55e", name: "DeepAR", short: "시계열 예측",
    desc: "RNN 기반 확률적 시계열 예측. 다중 시계열 동시 학습.", tags: ["시계열"] },
  { cat: "내장 알고리즘", color: "#22c55e", name: "Object2Vec", short: "범용 임베딩",
    desc: "두 객체 간 유사도를 학습한 임베딩 생성 Built-in.", tags: ["임베딩"] },
  { cat: "내장 알고리즘", color: "#22c55e", name: "IP Insights", short: "IP-엔티티 연관성",
    desc: "IP와 엔티티(사용자/계정) 쌍의 비정상 패턴 탐지. 사기 탐지용.", tags: ["이상탐지"] },
  { cat: "내장 알고리즘", color: "#22c55e", name: "Random Cut Forest (RCF)", short: "이상 탐지",
    desc: "비지도 이상 탐지 알고리즘. 스트리밍 데이터에도 적용 가능.", tags: ["이상탐지"] },
  { cat: "내장 알고리즘", color: "#22c55e", name: "K-Means", short: "군집화",
    desc: "K개 클러스터 비지도 군집. 미리 K 지정 필요.", tags: ["클러스터링"] },
  { cat: "내장 알고리즘", color: "#22c55e", name: "Seq2Seq", short: "시퀀스 투 시퀀스",
    desc: "RNN encoder-decoder. 번역·요약 등 시퀀스 변환 태스크.", tags: ["딥러닝"] },
  { cat: "내장 알고리즘", color: "#22c55e", name: "Image Classification / Object Detection / Semantic Segmentation", short: "비전 Built-in",
    desc: "ResNet·SSD 기반 이미지 분류·객체 탐지·픽셀 단위 분할 Built-in.", tags: ["비전"] },

  // ============ 보안·인프라 ============
  { cat: "보안·인프라", color: "#64748b", name: "VPC Interface/Gateway Endpoint", short: "프라이빗 액세스",
    desc: "SageMaker·S3 등을 프라이빗 네트워크에서 직접 접근. 인터넷 우회.", tags: ["네트워크"] },
  { cat: "보안·인프라", color: "#64748b", name: "IAM Role for SageMaker", short: "최소 권한 원칙",
    desc: "학습·배포 작업별 권한 부여. 최소 권한(least privilege) 원칙.", tags: ["IAM"] },
  { cat: "보안·인프라", color: "#64748b", name: "AWS KMS", short: "키 관리 서비스",
    desc: "학습 데이터·모델 아티팩트·EBS 볼륨 암호화. SageMaker 전반 통합.", tags: ["암호화"] },
  { cat: "보안·인프라", color: "#64748b", name: "Network Isolation", short: "네트워크 격리",
    desc: "학습 컨테이너를 외부 네트워크에서 차단. 높은 보안 요구 시.", tags: ["보안"] },
  { cat: "보안·인프라", color: "#64748b", name: "Amazon S3 + Intelligent-Tiering", short: "데이터 저장소",
    desc: "ML 학습 데이터 저장소. Intelligent-Tiering은 접근 패턴 기반 자동 계층화.", tags: ["스토리지"] },
  { cat: "보안·인프라", color: "#64748b", name: "Amazon FSx for Lustre", short: "고성능 파일 시스템",
    desc: "병렬 파일 시스템. 대용량 ML 학습 데이터 고속 로드.", tags: ["스토리지"] },
  { cat: "보안·인프라", color: "#64748b", name: "Amazon EFS", short: "공유 파일 스토리지",
    desc: "여러 학습 작업에서 코드·데이터 공유. NFS 기반.", tags: ["스토리지"] },
  { cat: "보안·인프라", color: "#64748b", name: "Inferentia / Trainium", short: "AWS 전용 ML 칩",
    desc: "Inferentia(추론) · Trainium(학습). 비용 대비 효율 최적.", tags: ["가속"] },

  // ============ 생성형 AI ============
  { cat: "생성형 AI", color: "#a855f7", name: "Amazon Bedrock", short: "FM API 플랫폼",
    desc: "Claude, Titan, Llama, Cohere 등 여러 FM을 단일 API로 제공. Agents/KB/Guardrails 포함.", tags: ["FM"] },
  { cat: "생성형 AI", color: "#a855f7", name: "Knowledge Bases for Bedrock", short: "RAG 관리형",
    desc: "OpenSearch·Aurora pgvector 등 벡터 DB 자동 관리. 검색 증강 생성 즉시 구축.", tags: ["RAG"] },
  { cat: "생성형 AI", color: "#a855f7", name: "Agents for Bedrock", short: "에이전트",
    desc: "함수 호출·다단계 판단을 수행하는 LLM 에이전트. Lambda 통합으로 액션 실행.", tags: ["에이전트"] },
  { cat: "생성형 AI", color: "#a855f7", name: "Vector DB (OpenSearch Serverless / pgvector / Kendra)", short: "임베딩 검색",
    desc: "RAG의 Retrieval 담당. 임베딩을 저장·유사도 검색.", tags: ["벡터"] },
  { cat: "생성형 AI", color: "#a855f7", name: "Prompt Engineering", short: "프롬프트 설계",
    desc: "Zero-shot, Few-shot, Chain-of-Thought 등 프롬프트 기법. 성능 크게 좌우.", tags: ["LLM"] },
  { cat: "생성형 AI", color: "#a855f7", name: "Fine-tuning", short: "미세 조정",
    desc: "라벨 데이터로 FM 가중치 업데이트. 톤·스타일·태스크 특화. 데이터 부족 시 overfit 주의.", tags: ["커스터마이징"] },
  { cat: "생성형 AI", color: "#a855f7", name: "Continued Pre-training", short: "도메인 내재화",
    desc: "비라벨 대규모 도메인 텍스트로 추가 사전학습. 전문 용어 이해 강화.", tags: ["커스터마이징"] },

  // ============ 데이터 스트리밍 ============
  { cat: "데이터 스트리밍", color: "#14b8a6", name: "Kinesis Data Streams", short: "실시간 스트림",
    desc: "실시간 데이터 수집·재소비. 샤드 기반. 여러 컨슈머 동시 읽기.", tags: ["스트리밍"] },
  { cat: "데이터 스트리밍", color: "#14b8a6", name: "Kinesis Firehose", short: "스트림 적재",
    desc: "S3·Redshift·OpenSearch로 스트림 자동 전달. 배치·변환 가능.", tags: ["스트리밍"] },
  { cat: "데이터 스트리밍", color: "#14b8a6", name: "Amazon MSK", short: "관리형 Kafka",
    desc: "관리형 Apache Kafka. 기존 Kafka 에코시스템 호환.", tags: ["Kafka"] },
  { cat: "데이터 스트리밍", color: "#14b8a6", name: "AWS Step Functions", short: "일반 워크플로",
    desc: "일반 서비스 오케스트레이션. ML 전용은 SageMaker Pipelines가 우선.", tags: ["워크플로"] }
];
