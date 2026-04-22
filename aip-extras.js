// AIP-C01 (AWS Certified Generative AI Developer - Professional) 전용 부가 콘텐츠

/* ─────── 헷갈리는 개념 비교 ─────── */
window.AIP_COMPARES = [
  {
    title: "Bedrock 모델 커스터마이징 3방식",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "RAG (Knowledge Bases)",
        dot: "#7c6fff",
        rows: [
          { k: "목적", v: "최신/사내 지식 주입" },
          { k: "학습", v: "없음 (검색만)" },
          { k: "비용", v: "가장 저렴" },
          { k: "속도", v: "즉시 반영" },
          { k: "Provisioned TP", v: "불필요" }
        ]
      },
      {
        name: "Fine-tuning",
        dot: "#34d399",
        rows: [
          { k: "목적", v: "톤·스타일·태스크 특화" },
          { k: "학습", v: "라벨 (prompt, completion)" },
          { k: "비용", v: "중간 (학습 + PT)" },
          { k: "속도", v: "학습 후 반영" },
          { k: "Provisioned TP", v: "**필수** (커스텀 모델)" }
        ]
      },
      {
        name: "Continued Pre-training",
        dot: "#f59e0b",
        rows: [
          { k: "목적", v: "도메인 언어 내재화" },
          { k: "학습", v: "비라벨 대규모 텍스트" },
          { k: "비용", v: "가장 비쌈" },
          { k: "속도", v: "수 시간~일" },
          { k: "Provisioned TP", v: "**필수**" }
        ]
      }
    ],
    tip: "💡 외부 지식 = RAG / 톤·행동 변경 = Fine-tuning / 도메인 언어 = Continued pre-training. 커스텀 모델 추론 = Provisioned Throughput 필수"
  },
  {
    title: "Bedrock 인퍼런스 모드: On-Demand vs Provisioned Throughput",
    badge: "자주 출제",
    cols: 2,
    cards: [
      {
        name: "On-Demand",
        dot: "#7c6fff",
        rows: [
          { k: "과금", v: "요청당 (토큰 수 기반)" },
          { k: "대상", v: "기본 FM (Claude, Titan 등)" },
          { k: "커스텀 모델", v: "지원 안 함" },
          { k: "스케일", v: "즉시" },
          { k: "용도", v: "가변·저볼륨 워크로드" }
        ]
      },
      {
        name: "Provisioned Throughput",
        dot: "#34d399",
        rows: [
          { k: "과금", v: "시간당 MU (Model Unit)" },
          { k: "대상", v: "기본 FM + 커스텀 모델" },
          { k: "커스텀 모델", v: "**필수**" },
          { k: "스케일", v: "예약 용량 고정" },
          { k: "용도", v: "고볼륨·fine-tuned 모델" }
        ]
      }
    ],
    tip: "💡 fine-tuned/continued pre-trained 모델 추론 = **Provisioned Throughput 필수**"
  },
  {
    title: "Agents vs Prompt Flow vs Lambda Tool Use",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "Agents for Bedrock",
        dot: "#7c6fff",
        rows: [
          { k: "목적", v: "다단계 판단 + 도구 호출" },
          { k: "구성", v: "Action Groups + Knowledge Bases" },
          { k: "실행", v: "Bedrock이 오케스트레이션" },
          { k: "용도", v: "복합 의사결정·API 자동화" }
        ]
      },
      {
        name: "Prompt Flow (Prompt Management)",
        dot: "#34d399",
        rows: [
          { k: "목적", v: "시각적 프롬프트 워크플로" },
          { k: "구성", v: "Node: prompt / KB / Lambda" },
          { k: "실행", v: "단순 DAG" },
          { k: "용도", v: "정형 멀티스텝 프롬프트" }
        ]
      },
      {
        name: "Lambda + Tool Use API",
        dot: "#f59e0b",
        rows: [
          { k: "목적", v: "직접 함수 호출 제어" },
          { k: "구성", v: "Lambda 함수 + API 호출" },
          { k: "실행", v: "개발자가 오케스트레이션" },
          { k: "용도", v: "커스텀 로직·세밀 제어" }
        ]
      }
    ],
    tip: "💡 판단·자율 = Agents / 시각적 플로 = Prompt Flow / 커스텀 제어 = Lambda Tool Use"
  },
  {
    title: "벡터 DB 선택: OpenSearch vs Aurora pgvector vs Kendra vs Neptune",
    badge: "자주 출제",
    cols: 4,
    cards: [
      {
        name: "OpenSearch Serverless",
        dot: "#7c6fff",
        rows: [
          { k: "유형", v: "벡터 + 키워드 검색" },
          { k: "규모", v: "대규모·확장 우수" },
          { k: "Hybrid", v: "지원" },
          { k: "용도", v: "Knowledge Bases 기본 권장" }
        ]
      },
      {
        name: "Aurora PostgreSQL (pgvector)",
        dot: "#34d399",
        rows: [
          { k: "유형", v: "RDB + 벡터 확장" },
          { k: "규모", v: "중소 규모" },
          { k: "Hybrid", v: "SQL 조인 가능" },
          { k: "용도", v: "기존 Aurora + 간단 벡터" }
        ]
      },
      {
        name: "Amazon Kendra",
        dot: "#f59e0b",
        rows: [
          { k: "유형", v: "엔터프라이즈 검색" },
          { k: "규모", v: "다양한 소스 커넥터" },
          { k: "Hybrid", v: "의미·키워드 혼합" },
          { k: "용도", v: "비정형 사내 문서 검색" }
        ]
      },
      {
        name: "Neptune (Graph RAG)",
        dot: "#ec4899",
        rows: [
          { k: "유형", v: "그래프 + 벡터" },
          { k: "규모", v: "관계 중심" },
          { k: "Hybrid", v: "그래프 탐색 + 임베딩" },
          { k: "용도", v: "지식 그래프·관계 질의" }
        ]
      }
    ],
    tip: "💡 Bedrock KB 기본 = OpenSearch Serverless / 기존 RDB = Aurora pgvector / 문서 검색 = Kendra / 관계형 = Neptune Graph RAG"
  },
  {
    title: "Guardrails: 필터 종류",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "Content Filters",
        dot: "#ef4444",
        rows: [
          { k: "대상", v: "혐오·폭력·성·불법 행위" },
          { k: "레벨", v: "Low/Medium/High 차단 강도" },
          { k: "작동", v: "요청·응답 모두 스캔" },
          { k: "용도", v: "기본 안전 필터" }
        ]
      },
      {
        name: "Denied Topics",
        dot: "#7c6fff",
        rows: [
          { k: "대상", v: "사용자 지정 금지 주제" },
          { k: "레벨", v: "주제별 정의" },
          { k: "작동", v: "LLM 기반 주제 감지" },
          { k: "용도", v: "금융 조언·법률 자문 차단" }
        ]
      },
      {
        name: "Sensitive Info (PII)",
        dot: "#f59e0b",
        rows: [
          { k: "대상", v: "이메일·전화번호·계좌·SSN 등" },
          { k: "레벨", v: "Block / Anonymize" },
          { k: "작동", v: "정규식·LLM 결합" },
          { k: "용도", v: "개인정보 노출 방지" }
        ]
      }
    ],
    tip: "💡 안전성 = Content Filter / 비즈니스 규칙 = Denied Topics / 개인정보 = Sensitive Info Filter"
  }
];

/* ─────── 시험 빈출 키워드 ─────── */
window.AIP_KEYWORDS = [
  { kw: "bring latest/private knowledge to LLM",
    services: "Bedrock Knowledge Bases (RAG)",
    tip: "벡터 DB 자동 관리. Chunking·임베딩 내장" },
  { kw: "change model tone/style · labeled data",
    services: "Fine-tuning + Provisioned Throughput",
    tip: "(prompt, completion) 쌍. 커스텀 모델은 Provisioned 필수" },
  { kw: "domain language · unlabeled corpus",
    services: "Continued Pre-training",
    tip: "전문 용어·업계 언어 내재화. PT 필수" },
  { kw: "multi-step decision · tool use · API calls",
    services: "Agents for Bedrock + Action Groups",
    tip: "Lambda 함수 호출·Knowledge Bases 통합 오케스트레이션" },
  { kw: "visual prompt chain",
    services: "Bedrock Prompt Flows (Prompt Management)",
    tip: "Node 기반 DAG. prompt/KB/Lambda 연결" },
  { kw: "block harmful output · PII mask",
    services: "Bedrock Guardrails (Content/Denied/Sensitive)",
    tip: "요청·응답 모두 스캔. 정책별 ARN" },
  { kw: "evaluate LLM accuracy/bias",
    services: "Bedrock Model Evaluation (Automatic / Human)",
    tip: "LLM-as-judge 또는 human workforce" },
  { kw: "version prompt · rollback",
    services: "Bedrock Prompt Management (Prompts)",
    tip: "프롬프트 버전·별칭. CloudFormation 배포" },
  { kw: "streaming response · lower perceived latency",
    services: "InvokeModelWithResponseStream + WebSocket API Gateway",
    tip: "클라이언트가 토큰 단위로 수신" },
  { kw: "hybrid search (keyword + semantic)",
    services: "OpenSearch Serverless hybrid query",
    tip: "BM25 + kNN 조합. RRF 결합" },
  { kw: "graph + vector RAG",
    services: "Neptune + Bedrock Knowledge Bases (Graph RAG)",
    tip: "관계·엔티티·임베딩 결합" },
  { kw: "enterprise document search across SaaS",
    services: "Amazon Kendra (+ Q Business)",
    tip: "40+ 커넥터. 의미·ACL 기반" },
  { kw: "internal business assistant",
    services: "Amazon Q Business (+ Data sources)",
    tip: "매니지드 RAG + 권한 상속" },
  { kw: "code/IDE assistant",
    services: "Amazon Q Developer",
    tip: "코드 생성·리팩터·IaC 제안" },
  { kw: "deploy FM endpoint with scaling",
    services: "SageMaker JumpStart + Endpoint",
    tip: "Bedrock에 없는 FM 배포. Auto Scaling 지원" },
  { kw: "cross-region failover for Bedrock",
    services: "Cross-Region Inference (Bedrock)",
    tip: "요청을 여러 리전에 분산" },
  { kw: "reduce cost for high-volume inference",
    services: "Provisioned Throughput + Batch Inference",
    tip: "대량 비실시간 = Batch / 실시간 상시 = PT" },
  { kw: "input token limit · long context",
    services: "Chunking strategy + Context window management",
    tip: "KB는 고정/문장/semantic chunking 선택" },
  { kw: "data not leave region · compliance",
    services: "VPC Endpoint (Interface) + Bedrock CMK",
    tip: "프라이빗 네트워크 + KMS 암호화" },
  { kw: "monitor prompt costs · tokens",
    services: "CloudWatch Logs + Metrics (Bedrock invocation logging)",
    tip: "Logs S3 저장·Athena 분석" },
  { kw: "retrieval grounded answer with citations",
    services: "Knowledge Bases RetrieveAndGenerate API",
    tip: "응답에 출처 URL·청크 자동 포함" },
  { kw: "prompt injection defense",
    services: "Guardrails + Input validation + system prompt hardening",
    tip: "Denied Topics + PII filter + prompt layering" },
  { kw: "multi-modal (image + text)",
    services: "Claude 3/3.5 · Nova · Titan Multimodal Embeddings",
    tip: "Bedrock에서 이미지 입력 지원 모델 선택" }
];

/* ─────── 출제 함정 ─────── */
window.AIP_TRAPS = [
  { icon: "🎯", title: "커스텀 모델을 On-Demand로 호출하려는 함정",
    wrong: "Fine-tuned/Continued pre-trained 모델을 On-Demand API로 호출",
    right: "커스텀 모델은 <strong>Provisioned Throughput 필수</strong>. 기본 FM만 On-Demand" },
  { icon: "📚", title: "소량 문서로 Fine-tuning 하는 함정",
    wrong: "사내 문서 10개를 Fine-tuning 데이터로",
    right: "문서 지식 주입은 <strong>RAG (Knowledge Bases)</strong>. Fine-tuning은 톤·태스크 변경용" },
  { icon: "🛡️", title: "Content Filter만으로 금지 주제 차단하는 함정",
    wrong: "Denied Topics 없이 Content Filter만 설정",
    right: "비즈니스 정책 주제는 <strong>Denied Topics</strong>로 별도 지정" },
  { icon: "🔒", title: "PII Filter 없이 S3에 로그 저장하는 함정",
    wrong: "Bedrock invocation logs에 원시 PII 포함",
    right: "<strong>Sensitive Info Guardrail</strong>로 anonymize 후 로깅" },
  { icon: "🔍", title: "단순 키워드 검색으로 RAG 구축하는 함정",
    wrong: "ElasticSearch BM25 only",
    right: "<strong>Vector embedding + Hybrid search</strong> (OpenSearch Serverless k-NN)" },
  { icon: "🔗", title: "복잡한 판단 로직을 Prompt Chain에 넣으려는 함정",
    wrong: "Prompt Flow로 무리한 조건 분기·도구 호출",
    right: "판단·도구 호출 = <strong>Agents for Bedrock</strong>" },
  { icon: "💸", title: "저볼륨에 Provisioned Throughput 구매하는 함정",
    wrong: "테스트/개발 단계에 PT 구매 → 비용 과다",
    right: "저볼륨·가변 = <strong>On-Demand</strong>. PT는 고볼륨 예측 가능할 때" },
  { icon: "📊", title: "Model Evaluation을 Human만 쓰려는 함정",
    wrong: "모든 평가에 human workforce 사용",
    right: "정확도·독성 같은 표준 지표 = <strong>Automatic Evaluation (LLM-as-judge)</strong>" },
  { icon: "🌐", title: "Bedrock 프라이빗 접근에 NAT Gateway만 쓰는 함정",
    wrong: "퍼블릭 인터넷 경유 + NAT",
    right: "<strong>VPC Interface Endpoint (PrivateLink)</strong>로 완전 프라이빗" },
  { icon: "📎", title: "긴 문서를 한 청크로 넣는 함정",
    wrong: "10,000 토큰 문서 전체를 단일 임베딩",
    right: "<strong>Chunking</strong> (고정·문장·semantic)으로 검색 정확도 향상" },
  { icon: "🔑", title: "에이전트 Action Group에 IAM 과다 권한 부여",
    wrong: "Lambda에 Admin 권한",
    right: "<strong>최소 권한 Lambda Role</strong> + 액션별 필요 권한만" },
  { icon: "🎤", title: "스트리밍 응답에 기본 Invoke API 쓰는 함정",
    wrong: "대화형 UX인데 InvokeModel로 대기",
    right: "<strong>InvokeModelWithResponseStream</strong> + WebSocket/SSE" },
  { icon: "🗄️", title: "Knowledge Base 업데이트를 수동 ingestion 반복",
    wrong: "매번 수동 재색인",
    right: "<strong>Data Source Sync (스케줄·이벤트)</strong>로 자동" },
  { icon: "📝", title: "Prompt 버전 관리를 코드 리포지토리로만 하는 함정",
    wrong: "Git에만 프롬프트 저장",
    right: "<strong>Bedrock Prompt Management</strong>로 버전·별칭·배포" },
  { icon: "🔎", title: "RAG 응답에 출처 표시를 수동 구현하는 함정",
    wrong: "클라이언트 코드로 chunk 매핑",
    right: "<strong>RetrieveAndGenerate API</strong>가 citations 자동 반환" }
];

/* ─────── 시나리오 결정 트리 ─────── */
window.AIP_DECISIONS = [
  {
    title: "커스터마이징 방식 선택",
    icon: "🧩",
    q: "원하는 변경은?",
    opts: [
      { label: "외부/사내 최신 지식 주입", answer: "→ <strong>RAG (Knowledge Bases)</strong>" },
      { label: "톤·스타일·특정 태스크", answer: "→ <strong>Fine-tuning + Provisioned Throughput</strong>" },
      { label: "도메인 언어 내재화", answer: "→ <strong>Continued Pre-training + PT</strong>" },
      { label: "판단·도구 호출·다단계", answer: "→ <strong>Agents for Bedrock</strong>" },
      { label: "시각적 프롬프트 워크플로", answer: "→ <strong>Prompt Flows</strong>" }
    ]
  },
  {
    title: "벡터 DB / 검색 엔진",
    icon: "🗂️",
    q: "요구사항은?",
    opts: [
      { label: "Bedrock KB 기본 · 확장성", answer: "→ <strong>OpenSearch Serverless</strong>" },
      { label: "기존 Aurora + 벡터", answer: "→ <strong>Aurora PostgreSQL (pgvector)</strong>" },
      { label: "엔터프라이즈 문서 검색", answer: "→ <strong>Amazon Kendra</strong>" },
      { label: "지식 그래프 + 임베딩", answer: "→ <strong>Neptune Graph RAG</strong>" },
      { label: "매니지드 기업용 Q&A", answer: "→ <strong>Amazon Q Business</strong>" }
    ]
  },
  {
    title: "안전성·거버넌스",
    icon: "🛡️",
    q: "필요한 보호는?",
    opts: [
      { label: "혐오·폭력·성적 콘텐츠 차단", answer: "→ <strong>Content Filters</strong>" },
      { label: "특정 주제 금지 (법률·금융 조언)", answer: "→ <strong>Denied Topics</strong>" },
      { label: "PII 마스킹·차단", answer: "→ <strong>Sensitive Info Filter</strong>" },
      { label: "프롬프트 인젝션 방어", answer: "→ <strong>Guardrails + Input validation + System prompt</strong>" },
      { label: "정확도·편향 평가", answer: "→ <strong>Bedrock Model Evaluation</strong>" }
    ]
  },
  {
    title: "인퍼런스 모드",
    icon: "🚀",
    q: "워크로드 특성은?",
    opts: [
      { label: "가변·저볼륨·테스트", answer: "→ <strong>On-Demand</strong>" },
      { label: "고볼륨·예측 가능", answer: "→ <strong>Provisioned Throughput</strong>" },
      { label: "커스텀 모델 추론", answer: "→ <strong>Provisioned Throughput 필수</strong>" },
      { label: "대량 비실시간 처리", answer: "→ <strong>Batch Inference</strong>" },
      { label: "글로벌 failover", answer: "→ <strong>Cross-Region Inference</strong>" },
      { label: "실시간 UX 스트리밍", answer: "→ <strong>InvokeModelWithResponseStream</strong>" }
    ]
  },
  {
    title: "통합·오케스트레이션",
    icon: "🔗",
    q: "애플리케이션 유형은?",
    opts: [
      { label: "API 뒷단 생성형 앱", answer: "→ <strong>API Gateway + Lambda + Bedrock</strong>" },
      { label: "실시간 대화형", answer: "→ <strong>WebSocket API + Streaming</strong>" },
      { label: "복잡 자율 태스크", answer: "→ <strong>Agents + Action Groups + Step Functions</strong>" },
      { label: "배치 대량 처리", answer: "→ <strong>Batch Inference + S3</strong>" },
      { label: "기업 Q&A 봇", answer: "→ <strong>Amazon Q Business</strong>" }
    ]
  }
];

/* ─────── 용어집 ─────── */
window.AIP_GLOSSARY = [
  // Bedrock Core
  { cat: "Bedrock 코어", color: "#7c6fff", name: "Amazon Bedrock", short: "FM API 플랫폼",
    desc: "Claude·Titan·Nova·Llama·Cohere·Mistral·Stability 등 여러 FM을 단일 API로. Agents·Knowledge Bases·Guardrails·Prompt Management·Model Evaluation 포함.", tags: ["핵심"] },
  { cat: "Bedrock 코어", color: "#7c6fff", name: "Foundation Model (FM)", short: "사전학습 범용 모델",
    desc: "방대한 데이터로 학습된 범용 모델. LLM은 FM의 한 종류.", tags: ["기본"] },
  { cat: "Bedrock 코어", color: "#7c6fff", name: "Claude (Anthropic)", short: "고성능 LLM",
    desc: "Claude 3 (Haiku/Sonnet/Opus), 3.5 (Sonnet), multimodal 지원. Bedrock 대표 모델.", tags: ["모델"] },
  { cat: "Bedrock 코어", color: "#7c6fff", name: "Amazon Titan / Nova", short: "AWS 자체 FM",
    desc: "Titan Text/Embed/Image · Nova Pro/Lite/Micro (멀티모달).", tags: ["모델"] },
  { cat: "Bedrock 코어", color: "#7c6fff", name: "On-Demand Inference", short: "요청당 과금",
    desc: "기본 FM만 지원. 토큰 수 기반 과금. 커스텀 모델 불가.", tags: ["과금"] },
  { cat: "Bedrock 코어", color: "#7c6fff", name: "Provisioned Throughput (PT)", short: "예약 용량",
    desc: "Model Unit 시간당 과금. 커스텀 모델(fine-tuned/CPT) 추론 필수. 고볼륨 상시.", tags: ["과금"] },
  { cat: "Bedrock 코어", color: "#7c6fff", name: "Batch Inference", short: "대량 비동기",
    desc: "S3 입력 → S3 출력. 상시 엔드포인트 불필요. 대량 비실시간.", tags: ["배치"] },
  { cat: "Bedrock 코어", color: "#7c6fff", name: "Cross-Region Inference", short: "리전 간 라우팅",
    desc: "요청을 여러 리전에 자동 분산. 스로틀링 완화·가용성 향상.", tags: ["확장"] },
  { cat: "Bedrock 코어", color: "#7c6fff", name: "InvokeModelWithResponseStream", short: "스트리밍 API",
    desc: "토큰 단위 응답 전송. 대화형 UX 대기 시간 체감 단축.", tags: ["API"] },

  // RAG & Knowledge
  { cat: "RAG·Knowledge", color: "#34d399", name: "Knowledge Bases for Bedrock", short: "매니지드 RAG",
    desc: "Data Source(S3 등) → Chunking → Embedding → 벡터 DB. Retrieve / RetrieveAndGenerate API.", tags: ["RAG"] },
  { cat: "RAG·Knowledge", color: "#34d399", name: "Retrieve API", short: "검색만",
    desc: "쿼리 → 관련 청크 반환. LLM 응답 생성은 클라이언트.", tags: ["API"] },
  { cat: "RAG·Knowledge", color: "#34d399", name: "RetrieveAndGenerate API", short: "검색+생성",
    desc: "검색된 청크를 컨텍스트로 응답 생성. citations 자동 포함.", tags: ["API"] },
  { cat: "RAG·Knowledge", color: "#34d399", name: "Chunking Strategy", short: "문서 분할 방식",
    desc: "Fixed size, Sentence, Semantic. 검색 정확도·LLM 컨텍스트 크기 영향.", tags: ["전처리"] },
  { cat: "RAG·Knowledge", color: "#34d399", name: "Data Source Sync", short: "자동 재색인",
    desc: "S3·웹·Confluence 등 주기적 재색인. 증분 업데이트.", tags: ["운영"] },
  { cat: "RAG·Knowledge", color: "#34d399", name: "OpenSearch Serverless (vector)", short: "벡터 DB",
    desc: "Bedrock KB 기본 추천. Hybrid search (k-NN + BM25). 자동 확장.", tags: ["벡터DB"] },
  { cat: "RAG·Knowledge", color: "#34d399", name: "Aurora PostgreSQL pgvector", short: "RDB 벡터",
    desc: "기존 Aurora에 pgvector 확장 추가. SQL 조인·필터 결합 가능.", tags: ["벡터DB"] },
  { cat: "RAG·Knowledge", color: "#34d399", name: "Amazon Neptune (Graph RAG)", short: "그래프 벡터",
    desc: "엔티티·관계 + 임베딩. 복잡한 지식 네트워크 질의.", tags: ["그래프"] },
  { cat: "RAG·Knowledge", color: "#34d399", name: "Amazon Kendra", short: "엔터프라이즈 검색",
    desc: "40+ SaaS 커넥터. ACL 인식. 매니지드 의미 검색.", tags: ["검색"] },
  { cat: "RAG·Knowledge", color: "#34d399", name: "Embedding Model", short: "텍스트 → 벡터",
    desc: "Titan Embed·Cohere Embed·Jina 등. 차원·토큰 한도 확인 필수.", tags: ["임베딩"] },
  { cat: "RAG·Knowledge", color: "#34d399", name: "Hybrid Search", short: "키워드+의미 결합",
    desc: "BM25 + Vector k-NN. RRF로 결합 순위. 정확도 향상.", tags: ["검색"] },

  // Agents & Orchestration
  { cat: "Agents·오케스트레이션", color: "#f59e0b", name: "Agents for Bedrock", short: "자율 에이전트",
    desc: "LLM이 판단·Lambda 호출·Knowledge Bases 조회 자율 오케스트레이션.", tags: ["핵심"] },
  { cat: "Agents·오케스트레이션", color: "#f59e0b", name: "Action Groups", short: "API/Lambda 도구",
    desc: "에이전트가 호출할 API 스키마 + Lambda 매핑. OpenAPI 기반.", tags: ["도구"] },
  { cat: "Agents·오케스트레이션", color: "#f59e0b", name: "Agent Session State", short: "세션 상태",
    desc: "대화 기억. sessionId로 이전 턴 맥락 유지.", tags: ["상태"] },
  { cat: "Agents·오케스트레이션", color: "#f59e0b", name: "Prompt Flows", short: "시각적 프롬프트 DAG",
    desc: "Node: prompt / KB / Lambda / S3 Retrieve. 조건 분기·병렬 지원.", tags: ["워크플로"] },
  { cat: "Agents·오케스트레이션", color: "#f59e0b", name: "Prompt Management", short: "프롬프트 버전 관리",
    desc: "Prompts · Variants · Versions · Aliases. CloudFormation 배포.", tags: ["관리"] },
  { cat: "Agents·오케스트레이션", color: "#f59e0b", name: "AWS Step Functions + Bedrock", short: "복잡 워크플로",
    desc: "Bedrock 작업을 Step Functions 상태 머신에 통합. 장기 실행·에러 처리.", tags: ["오케스트레이션"] },
  { cat: "Agents·오케스트레이션", color: "#f59e0b", name: "AWS Lambda + Bedrock", short: "서버리스 통합",
    desc: "이벤트 기반 호출. 전처리·후처리·도구 실행.", tags: ["서버리스"] },

  // Safety / Guardrails
  { cat: "안전·거버넌스", color: "#ef4444", name: "Bedrock Guardrails", short: "안전 정책",
    desc: "Content Filter · Denied Topics · Sensitive Info · Word Filter. 요청·응답 모두 스캔.", tags: ["핵심"] },
  { cat: "안전·거버넌스", color: "#ef4444", name: "Content Filters", short: "유해 콘텐츠",
    desc: "혐오·폭력·성·불법 행위. Low/Medium/High 차단 강도.", tags: ["안전"] },
  { cat: "안전·거버넌스", color: "#ef4444", name: "Denied Topics", short: "금지 주제",
    desc: "사용자 정의 주제 차단 (법률·의료·금융 조언 등).", tags: ["비즈니스"] },
  { cat: "안전·거버넌스", color: "#ef4444", name: "Sensitive Information Filter", short: "PII 필터",
    desc: "이메일·전화·계좌·SSN 등 Block 또는 Anonymize.", tags: ["PII"] },
  { cat: "안전·거버넌스", color: "#ef4444", name: "Word Filter", short: "단어 차단",
    desc: "특정 단어·정규식 기반 필터.", tags: ["필터"] },
  { cat: "안전·거버넌스", color: "#ef4444", name: "Contextual Grounding", short: "환각 방지",
    desc: "RAG 결과와 LLM 응답의 일관성 검증. 비관련·근거 없는 응답 필터.", tags: ["품질"] },
  { cat: "안전·거버넌스", color: "#ef4444", name: "Model Evaluation", short: "성능 평가",
    desc: "Automatic (LLM-as-judge) + Human Workforce. 정확도·독성·편향.", tags: ["평가"] },
  { cat: "안전·거버넌스", color: "#ef4444", name: "Responsible AI", short: "AI 윤리",
    desc: "공정성·설명 가능성·프라이버시·안전성·견고성·거버넌스 6원칙.", tags: ["원칙"] },

  // Tooling
  { cat: "개발·도구", color: "#ec4899", name: "Amazon Q Business", short: "기업 Q&A",
    desc: "매니지드 RAG + 인증·ACL. 40+ 데이터 소스 커넥터.", tags: ["Q"] },
  { cat: "개발·도구", color: "#ec4899", name: "Amazon Q Developer", short: "개발자 AI",
    desc: "IDE 코드 생성·리팩터·IaC. 이전 CodeWhisperer.", tags: ["Q"] },
  { cat: "개발·도구", color: "#ec4899", name: "Amazon Q Apps", short: "노코드 앱 생성",
    desc: "프롬프트로 내부 앱 빌드·공유.", tags: ["Q"] },
  { cat: "개발·도구", color: "#ec4899", name: "SageMaker JumpStart", short: "FM 배포",
    desc: "Bedrock 외 오픈소스 FM (Llama, Falcon, Stable Diffusion 등) 원클릭 배포.", tags: ["SageMaker"] },
  { cat: "개발·도구", color: "#ec4899", name: "SageMaker Endpoint", short: "FM 추론",
    desc: "JumpStart 모델 Real-time / Serverless / Async / Batch 엔드포인트.", tags: ["배포"] },
  { cat: "개발·도구", color: "#ec4899", name: "Bedrock Studio", short: "앱 개발 UI",
    desc: "생성형 AI 앱 비주얼 빌더. 팀 협업·배포.", tags: ["UI"] },
  { cat: "개발·도구", color: "#ec4899", name: "PartyRock", short: "체험 플레이그라운드",
    desc: "코드 없이 Bedrock 기반 앱 빌드·공유.", tags: ["데모"] },

  // Data / Embeddings
  { cat: "데이터·임베딩", color: "#0ea5e9", name: "Titan Text Embeddings", short: "텍스트 임베딩",
    desc: "v1 / v2 (multilingual). 1536/1024 차원.", tags: ["임베딩"] },
  { cat: "데이터·임베딩", color: "#0ea5e9", name: "Titan Multimodal Embeddings", short: "이미지+텍스트",
    desc: "이미지·텍스트 공통 벡터 공간. 이미지 검색에 사용.", tags: ["멀티모달"] },
  { cat: "데이터·임베딩", color: "#0ea5e9", name: "Cohere Embed", short: "다국어 임베딩",
    desc: "Embed English / Multilingual. RAG용 고성능.", tags: ["임베딩"] },
  { cat: "데이터·임베딩", color: "#0ea5e9", name: "AWS Glue + Bedrock", short: "ETL + 생성",
    desc: "ETL 파이프라인에 FM 호출 (분류·요약·변환).", tags: ["ETL"] },
  { cat: "데이터·임베딩", color: "#0ea5e9", name: "S3 + Bedrock", short: "문서 저장소",
    desc: "Knowledge Base Data Source. Event로 자동 재색인 트리거.", tags: ["스토리지"] },

  // Security / Ops
  { cat: "보안·운영", color: "#64748b", name: "VPC Interface Endpoint (PrivateLink)", short: "프라이빗 Bedrock",
    desc: "인터넷 우회. 엔터프라이즈 컴플라이언스.", tags: ["네트워크"] },
  { cat: "보안·운영", color: "#64748b", name: "AWS KMS + Bedrock", short: "암호화",
    desc: "커스텀 모델 아티팩트·KB 데이터 CMK 암호화.", tags: ["암호화"] },
  { cat: "보안·운영", color: "#64748b", name: "IAM + Bedrock", short: "접근 제어",
    desc: "모델·에이전트·KB별 리소스 정책. Service Role 필수.", tags: ["IAM"] },
  { cat: "보안·운영", color: "#64748b", name: "Bedrock Invocation Logging", short: "감사 로그",
    desc: "프롬프트·응답 CloudWatch Logs 또는 S3 저장. 모니터링·감사.", tags: ["로그"] },
  { cat: "보안·운영", color: "#64748b", name: "CloudWatch Metrics (Bedrock)", short: "사용량 지표",
    desc: "InvocationCount·InvocationLatency·InputTokens·OutputTokens.", tags: ["모니터링"] },
  { cat: "보안·운영", color: "#64748b", name: "CloudTrail (Bedrock)", short: "API 감사",
    desc: "모든 Bedrock API 호출 기록. 보안 조사·컴플라이언스.", tags: ["감사"] },
  { cat: "보안·운영", color: "#64748b", name: "AWS PrivateLink to SaaS", short: "SaaS 프라이빗",
    desc: "Anthropic/Cohere 등 외부 FM 공급자와의 프라이빗 연결.", tags: ["네트워크"] },

  // Advanced
  { cat: "고급·패턴", color: "#a855f7", name: "Prompt Engineering", short: "프롬프트 설계",
    desc: "Zero-shot·Few-shot·Chain-of-Thought·ReAct·Self-consistency.", tags: ["패턴"] },
  { cat: "고급·패턴", color: "#a855f7", name: "Few-Shot Prompting", short: "예시 포함",
    desc: "프롬프트에 (입력, 출력) 예시 제공. 추론 품질 향상.", tags: ["패턴"] },
  { cat: "고급·패턴", color: "#a855f7", name: "Chain-of-Thought (CoT)", short: "단계적 추론",
    desc: "'let's think step by step' → 중간 추론 과정 유도.", tags: ["패턴"] },
  { cat: "고급·패턴", color: "#a855f7", name: "System Prompt", short: "역할 지정",
    desc: "LLM의 페르소나·제약·톤 정의. 프롬프트 인젝션 방어 1차선.", tags: ["프롬프트"] },
  { cat: "고급·패턴", color: "#a855f7", name: "Prompt Injection", short: "공격 기법",
    desc: "사용자 입력으로 system prompt 우회. Guardrails·System prompt hardening 필수.", tags: ["보안"] },
  { cat: "고급·패턴", color: "#a855f7", name: "Hallucination", short: "환각",
    desc: "LLM이 근거 없이 생성한 잘못된 정보. RAG + Contextual Grounding으로 완화.", tags: ["품질"] },
  { cat: "고급·패턴", color: "#a855f7", name: "Context Window", short: "컨텍스트 한도",
    desc: "모델이 한 번에 처리 가능한 토큰 수. Claude 3.5 Sonnet = 200K." , tags: ["제한"] },
  { cat: "고급·패턴", color: "#a855f7", name: "Model Parameters", short: "생성 조절",
    desc: "Temperature (창의성)·Top-K/Top-P (다양성)·Max Tokens.", tags: ["파라미터"] }
];
