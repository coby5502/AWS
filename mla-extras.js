// MLA-C01 전용 부가 콘텐츠: 헷갈리는 개념 / 키워드 / 함정 / 결정트리 / 용어집
// SAA/AIF의 COMPARES/KEYWORDS/TRAPS/DECISIONS/GLOSSARY와 동일한 스키마
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
    cols: 4,
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
  {
    title: "\"LEAST operational overhead\" → 관리형 서비스",
    desc: "운영 부담 최소화 키워드가 나오면 SageMaker Model Registry, Feature Store, Pipelines, Clarify 등 내장 서비스 선택."
  },
  {
    title: "\"drift detection\" → SageMaker Model Monitor",
    desc: "데이터/모델 드리프트 탐지 = Model Monitor. 데이터 품질/모델 품질/바이어스/설명 가능성 4가지 모니터링 지원."
  },
  {
    title: "\"bias\" / \"explainability\" → SageMaker Clarify",
    desc: "편향 탐지와 SHAP 기반 설명. 학습 전, 학습 후, 배포 후 모든 단계에서 사용."
  },
  {
    title: "\"central model registry\" → SageMaker Model Registry",
    desc: "모델 버전/승인/배포를 중앙 관리. Model Group = 동일 목적 모델 버전 모음."
  },
  {
    title: "\"feature reuse\" → SageMaker Feature Store",
    desc: "온라인(저지연) + 오프라인(대용량) 스토어. 학습-추론 피처 일관성 보장."
  },
  {
    title: "\"low-latency batch\" → Batch Transform",
    desc: "엔드포인트 없이 대량 추론. S3 입력→S3 출력."
  },
  {
    title: "\"multi-model\" / \"cost\" → Multi-Model Endpoint (MME)",
    desc: "하나의 컨테이너에 여러 모델 로드. 사용 빈도 낮은 다수 모델을 저비용 운영."
  },
  {
    title: "\"A/B testing\" / \"shadow\" → Production Variants",
    desc: "Endpoint 내 트래픽 분기. Shadow Variant로 무영향 테스트."
  },
  {
    title: "\"automation pipeline\" → SageMaker Pipelines",
    desc: "ML 워크플로 CI/CD. Step Functions보다 ML 특화."
  },
  {
    title: "\"hyperparameter tuning\" → Automatic Model Tuning (HPO)",
    desc: "Bayesian/Random/Grid. 메트릭 목표 기준 자동 튜닝."
  },
  {
    title: "\"imbalanced data\" → SMOTE / class weights",
    desc: "소수 클래스 오버샘플링(SMOTE) 또는 손실 함수 가중치."
  },
  {
    title: "\"data leakage\" → 시간순 분할 / 변환 후 분할 금지",
    desc: "Train/Val 분리 이전에 정규화하면 leakage 발생. 분리 후 학습 세트 통계로만 스케일링."
  }
];

/* ─────── 출제 함정 ─────── */
window.MLA_TRAPS = [
  {
    title: "\"central registry\"에서 ECR을 고르는 함정",
    wrong: "ECR은 컨테이너 이미지 저장소이지 모델 레지스트리가 아님.",
    right: "모델 버전 관리 = SageMaker Model Registry + Model Groups."
  },
  {
    title: "Time-series를 Random Split하는 함정",
    wrong: "무작위 분할 시 미래 데이터가 학습에 포함 → 과대평가.",
    right: "시간 순서 기반 split (앞 80% train, 뒤 20% test)."
  },
  {
    title: "Pipeline vs Step Functions",
    wrong: "ML 전용이지만 Step Functions를 먼저 고르는 실수.",
    right: "ML 워크플로는 SageMaker Pipelines가 네이티브·운영 부담 최소."
  },
  {
    title: "Batch Transform과 Async Inference 혼동",
    wrong: "\"대량 처리\"만 보고 Batch Transform 선택.",
    right: "엔드포인트 필요 여부 확인: 필요 없으면 Batch, 필요하면 Async."
  },
  {
    title: "정규화를 데이터 분리 전에 하는 함정",
    wrong: "전체 데이터에서 평균/분산을 구해 스케일링 후 분리 → leakage.",
    right: "분리 후 train 통계로만 스케일링 (fit on train, transform on val/test)."
  },
  {
    title: "\"LEAST operational overhead\"에서 EC2 기반을 고르는 함정",
    wrong: "EC2 + 직접 설치는 운영 부담 최대.",
    right: "관리형(SageMaker/Glue/Bedrock 등) 우선."
  },
  {
    title: "Drift 발생 시 자동 재학습을 먼저 고르는 함정",
    wrong: "즉시 재학습은 비용·안정성 리스크.",
    right: "Model Monitor로 먼저 감지 + Pipelines로 승인 기반 재학습."
  },
  {
    title: "소량 라벨 데이터 = Fine-tuning 먼저 선택하는 함정",
    wrong: "수백 샘플로 Fine-tuning → overfitting.",
    right: "Few-shot Prompting 또는 Data Augmentation 우선 고려."
  },
  {
    title: "비용 질문에서 GPU 인스턴스를 고르는 함정",
    wrong: "성능이 필요 없는데 GPU를 선택.",
    right: "추론 경량화 시 CPU/Inferentia, Serverless, Spot 고려."
  },
  {
    title: "S3 접근 제어에서 IAM만 의존하는 함정",
    wrong: "프라이빗 트래픽이 요구될 때 IAM만으로 해결하려 함.",
    right: "VPC Interface Endpoint (S3 Gateway) + IAM 조건 병행."
  }
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
  { term: "SageMaker Model Registry", desc: "ML 모델의 중앙 저장소. Model Group 아래 여러 버전(Model Package)을 관리하며 승인/거부 워크플로 지원." },
  { term: "Model Group", desc: "동일한 목적의 모델 버전 묶음. 버전 1,2,3… 자동 증가." },
  { term: "SageMaker Pipelines", desc: "ML 전용 CI/CD 워크플로. 데이터 처리→학습→평가→등록→배포를 DAG로 선언." },
  { term: "SageMaker Feature Store", desc: "온라인(저지연)+오프라인(대용량) 피처 저장소. 학습·추론 간 피처 일관성 보장." },
  { term: "SageMaker Data Wrangler", desc: "Studio 내 비주얼 피처 엔지니어링 도구. 300+ 내장 변환, Feature Store/Pipelines로 내보내기." },
  { term: "SageMaker Clarify", desc: "편향(bias) 탐지 및 SHAP 기반 설명 가능성 분석. 학습 전·후·배포 후 사용." },
  { term: "SageMaker Model Monitor", desc: "배포된 모델의 데이터 품질·모델 품질·편향·설명 가능성 드리프트 탐지." },
  { term: "SageMaker Ground Truth", desc: "데이터 라벨링 서비스. 사람(Mechanical Turk/자체팀/벤더) + Auto-labeling 혼합." },
  { term: "SageMaker JumpStart", desc: "사전 학습된 모델과 솔루션 템플릿 카탈로그. 원클릭 배포." },
  { term: "SageMaker Autopilot", desc: "AutoML. CSV 지정하면 자동으로 여러 알고리즘 시도·최적 모델 선택." },
  { term: "SageMaker Neo", desc: "모델을 특정 하드웨어(엣지/GPU/CPU)에 최적화 컴파일." },
  { term: "Edge Manager", desc: "엣지 디바이스에 배포된 모델 관리·모니터링. (2024년 종료 예정이지만 시험 출제 가능)" },
  { term: "SageMaker Debugger", desc: "학습 중 텐서 캡처, 그래디언트 소실·폭발 등 자동 규칙 탐지." },
  { term: "Automatic Model Tuning (HPO)", desc: "하이퍼파라미터 최적화. Bayesian(권장)/Random/Grid 전략." },
  { term: "Real-time Endpoint", desc: "상시 가동 추론 엔드포인트. 인스턴스 시간 과금. 초저지연." },
  { term: "Serverless Inference", desc: "사용량 기반 과금. 트래픽 없을 때 0원이지만 cold start 발생." },
  { term: "Async Inference", desc: "큐 기반 비동기 추론. 대형 페이로드·긴 처리 시간 지원." },
  { term: "Batch Transform", desc: "엔드포인트 없이 S3→S3 일괄 추론. 오프라인 스코어링." },
  { term: "Multi-Model Endpoint (MME)", desc: "하나의 컨테이너에 여러 모델을 동적으로 로드. 비용 절감." },
  { term: "Production Variants", desc: "엔드포인트 내 트래픽 분기. A/B 테스트·Canary 배포." },
  { term: "Shadow Variant", desc: "실트래픽의 복사본을 신규 모델에 보내 무영향 비교." },
  { term: "Inference Recommender", desc: "적합한 인스턴스 타입·크기 자동 추천." },
  { term: "XGBoost", desc: "대표 gradient boosting 알고리즘. SageMaker Built-in 포함." },
  { term: "Linear Learner", desc: "SageMaker Built-in 선형 회귀/분류 알고리즘." },
  { term: "BlazingText", desc: "Word2Vec/텍스트 분류를 위한 SageMaker Built-in." },
  { term: "DeepAR", desc: "시계열 예측을 위한 RNN 기반 SageMaker Built-in." },
  { term: "Object2Vec", desc: "범용 임베딩 학습 Built-in." },
  { term: "IP Insights", desc: "IP-엔티티 연관성(사기 탐지) Built-in." },
  { term: "Random Cut Forest (RCF)", desc: "이상 탐지 Built-in 알고리즘." },
  { term: "K-Means", desc: "군집화 Built-in." },
  { term: "Seq2Seq", desc: "시퀀스-투-시퀀스 Built-in (번역 등)." },
  { term: "Image Classification", desc: "ResNet 기반 이미지 분류 Built-in." },
  { term: "Semantic Segmentation", desc: "픽셀 단위 분류 Built-in." },
  { term: "Object Detection", desc: "SSD 기반 객체 탐지 Built-in." },
  { term: "Drift (Data/Model)", desc: "입력 분포 또는 예측-실측 관계가 학습 때와 달라지는 현상." },
  { term: "SHAP (Shapley)", desc: "게임이론 기반 피처 기여도. 로컬+글로벌 설명." },
  { term: "PDP (Partial Dependence Plot)", desc: "피처 값 변화에 따른 예측 변화 시각화. 글로벌 설명." },
  { term: "LIME", desc: "개별 예측 주변을 선형 근사로 설명. 로컬 설명." },
  { term: "Confusion Matrix", desc: "TP/FP/FN/TN 표. 분류 모델 성능 분석 기본." },
  { term: "Precision / Recall / F1", desc: "Precision=TP/(TP+FP), Recall=TP/(TP+FN), F1=조화평균." },
  { term: "AUC-ROC", desc: "임계값 변화에 따른 TPR vs FPR 면적. 분류 성능 종합 지표." },
  { term: "RMSE / MAE", desc: "회귀 오차 지표. RMSE는 큰 오차에 민감, MAE는 이상치 둔감." },
  { term: "Overfitting", desc: "학습 데이터엔 맞지만 일반화 실패. 해결: 정규화, 드롭아웃, 더 많은 데이터." },
  { term: "Underfitting", desc: "모델이 너무 단순해 학습/검증 모두 성능 낮음. 해결: 복잡도 증가, 피처 추가." },
  { term: "Regularization (L1/L2)", desc: "L1=Lasso(희소해 피처 선택), L2=Ridge(가중치 축소)." },
  { term: "Dropout", desc: "학습 중 뉴런 일부를 무작위 비활성화 → 과적합 방지." },
  { term: "Batch Normalization", desc: "미니배치 단위로 정규화 → 학습 안정·가속." },
  { term: "Gradient Descent / SGD / Adam", desc: "SGD=확률적 경사하강, Adam=적응적 학습률(기본 권장)." },
  { term: "Learning Rate", desc: "가중치 업데이트 크기. 너무 크면 발산, 너무 작으면 수렴 느림." },
  { term: "Early Stopping", desc: "검증 손실이 개선되지 않으면 학습 조기 중단. 과적합 방지." },
  { term: "One-hot Encoding", desc: "범주형 → 0/1 벡터. 카테고리 수 많으면 차원 폭발." },
  { term: "Label Encoding", desc: "범주형 → 정수. 순서형(ordinal) 데이터에만 권장." },
  { term: "Target Encoding", desc: "범주를 타깃 평균값으로 대체. data leakage 주의." },
  { term: "Embedding", desc: "고차원 범주/텍스트를 저차원 벡터로. Word2Vec, BERT 등." },
  { term: "Feature Scaling (Standardization/Normalization)", desc: "Standard=평균 0·표준편차 1, Min-Max=0~1 범위." },
  { term: "SMOTE", desc: "Synthetic Minority Oversampling. 불균형 데이터의 소수 클래스를 합성 샘플로 보강." },
  { term: "Class Weights", desc: "손실 함수에 클래스별 가중치 부여. 불균형 대응." },
  { term: "Train/Val/Test Split", desc: "학습·검증·테스트 분리. 시계열은 시간 순서 유지." },
  { term: "K-Fold Cross Validation", desc: "K개 fold로 나눠 돌아가며 검증. 작은 데이터 일반화 추정." },
  { term: "Hyperparameter", desc: "모델이 학습하지 않고 사람이 정하는 값 (learning rate, depth 등)." },
  { term: "Bayesian Optimization", desc: "과거 시행 결과로 다음 탐색점 선택. SageMaker HPO 기본 전략." },
  { term: "Amazon Bedrock", desc: "FM(Foundation Model) API 서비스. Claude, Titan, Llama 등 호스팅." },
  { term: "Knowledge Bases for Bedrock", desc: "RAG 관리형. OpenSearch·벡터 DB 자동 관리." },
  { term: "Agents for Bedrock", desc: "함수 호출·다단계 판단을 수행하는 LLM 에이전트." },
  { term: "Vector DB (OpenSearch Serverless, Aurora pgvector, Kendra)", desc: "임베딩 검색용. RAG의 Retrieval 담당." },
  { term: "AWS Glue", desc: "서버리스 ETL + Data Catalog. Spark 기반 작업·크롤러 포함." },
  { term: "Glue DataBrew", desc: "노코드 데이터 전처리 UI. 250+ 변환." },
  { term: "Amazon EMR", desc: "관리형 Hadoop/Spark/Hive/Presto 클러스터." },
  { term: "Amazon Athena", desc: "S3 위에 서버리스 SQL. Presto 기반." },
  { term: "AWS Lake Formation", desc: "데이터 레이크 거버넌스. 세분화된 권한·감사." },
  { term: "AWS Step Functions", desc: "일반 워크플로 오케스트레이션. ML 전용은 Pipelines가 우선." },
  { term: "Amazon Kinesis Data Streams", desc: "실시간 스트림 수집·재소비." },
  { term: "Amazon Kinesis Firehose", desc: "S3/Redshift로 스트림 자동 전달." },
  { term: "Amazon MSK", desc: "관리형 Apache Kafka." },
  { term: "Amazon S3 + Intelligent-Tiering", desc: "ML 학습 데이터 저장소. Intelligent-Tiering은 자동 계층화." },
  { term: "VPC Interface Endpoint", desc: "SageMaker·S3 등을 프라이빗 네트워크로 접근. 인터넷 우회." },
  { term: "IAM Role for SageMaker", desc: "학습·배포 작업 권한. 최소 권한 원칙(least privilege) 필수." },
  { term: "KMS", desc: "학습 데이터·모델 아티팩트 암호화. SageMaker 전반에 통합." },
  { term: "Inferentia / Trainium", desc: "AWS 전용 ML 추론/학습 가속 칩. 비용 대비 효율 최적." },
  { term: "Spot Instance (학습)", desc: "최대 90% 할인. 체크포인트 활성화 필요." },
  { term: "Warm Pool", desc: "학습 인스턴스 재사용으로 start-up 시간 단축." },
  { term: "Network Isolation", desc: "학습 컨테이너를 외부 네트워크에서 차단. 높은 보안 요구 시." },
  { term: "Amazon FSx for Lustre", desc: "고성능 병렬 파일 시스템. 대용량 ML 학습 데이터 가속." },
  { term: "Amazon EFS", desc: "공유 파일 스토리지. 여러 학습 작업에서 코드/데이터 공유." }
];
