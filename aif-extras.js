// AIF-C01 전용 부가 콘텐츠: 헷갈리는 개념 / 키워드 / 함정 / 결정트리 / 용어집 / 플래시카드 소스
// SAA의 COMPARES/KEYWORDS/TRAPS/DECISIONS/GLOSSARY와 동일한 스키마
// AWS 서비스·기술 용어는 원어 유지

/* ─────── 헷갈리는 개념 비교 ─────── */
window.AIF_COMPARES = [
  {
    title: "모델 커스터마이징 3방식",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "RAG",
        dot: "#7c6fff",
        rows: [
          { k: "목적", v: "최신/사내 지식 주입" },
          { k: "학습", v: "없음 (검색만)" },
          { k: "비용", v: "가장 저렴" },
          { k: "속도", v: "즉시 반영" },
          { k: "한계", v: "검색 품질에 좌우" }
        ]
      },
      {
        name: "Fine-tuning",
        dot: "#34d399",
        rows: [
          { k: "목적", v: "톤·스타일·태스크 특화" },
          { k: "학습", v: "라벨 (prompt, completion)" },
          { k: "비용", v: "중간 (학습 + PT 필수)" },
          { k: "속도", v: "학습 후 반영" },
          { k: "한계", v: "데이터 부족 시 overfit" }
        ]
      },
      {
        name: "Continued Pre-training",
        dot: "#f59e0b",
        rows: [
          { k: "목적", v: "도메인 언어·어휘 내재화" },
          { k: "학습", v: "비라벨 대규모 텍스트" },
          { k: "비용", v: "가장 비쌈" },
          { k: "속도", v: "수 시간~일 단위" },
          { k: "한계", v: "과도할 수 있음" }
        ]
      }
    ],
    tip: "💡 외부 지식만 필요 = RAG / 행동 패턴 바꾸기 = Fine-tuning / 새 도메인 깊은 이해 = Continued pre-training"
  },
  {
    title: "Bedrock vs SageMaker",
    badge: "자주 출제",
    cols: 2,
    cards: [
      {
        name: "Amazon Bedrock",
        dot: "#7c6fff",
        rows: [
          { k: "주요 대상", v: "앱 개발자" },
          { k: "모델 접근", v: "Claude, Titan, Llama 등 FM API" },
          { k: "제공 형태", v: "관리형 서버리스" },
          { k: "학습", v: "Fine-tune / Continued pre-training" },
          { k: "배포", v: "Provisioned Throughput / On-Demand" }
        ]
      },
      {
        name: "Amazon SageMaker AI",
        dot: "#f59e0b",
        rows: [
          { k: "주요 대상", v: "ML 엔지니어·데이터 사이언티스트" },
          { k: "모델 접근", v: "JumpStart + 자체 학습 모두" },
          { k: "제공 형태", v: "노트북~Endpoint 풀스택" },
          { k: "학습", v: "처음부터 + fine-tune + 분산" },
          { k: "배포", v: "Real-time / Serverless / Async / Batch" }
        ]
      }
    ],
    tip: "💡 빠르게 FM 활용 앱 → Bedrock / ML 전주기 커스터마이징 → SageMaker. Bedrock의 fine-tuned 모델도 이후 SageMaker로 임포트 가능."
  },
  {
    title: "SageMaker 추론 옵션 4가지",
    badge: "시험 필수",
    cols: 2,
    cards: [
      {
        name: "Real-time Inference",
        dot: "#ef4444",
        rows: [
          { k: "지연", v: "<100ms" },
          { k: "페이로드", v: "≤ 6MB" },
          { k: "타임아웃", v: "60초" },
          { k: "언제", v: "실시간 챗·검색·추천" }
        ]
      },
      {
        name: "Serverless Inference",
        dot: "#8b5cf6",
        rows: [
          { k: "지연", v: "콜드스타트 있음" },
          { k: "페이로드", v: "≤ 6MB" },
          { k: "타임아웃", v: "60초" },
          { k: "언제", v: "간헐·예측 어려운 트래픽" }
        ]
      },
      {
        name: "Asynchronous Inference",
        dot: "#f59e0b",
        rows: [
          { k: "지연", v: "큐잉 (near-real-time)" },
          { k: "페이로드", v: "≤ 1GB" },
          { k: "타임아웃", v: "1시간" },
          { k: "언제", v: "대용량·긴 처리" }
        ]
      },
      {
        name: "Batch Transform",
        dot: "#10b981",
        rows: [
          { k: "지연", v: "분~시간 단위" },
          { k: "페이로드", v: "대용량" },
          { k: "타임아웃", v: "제한 없음" },
          { k: "언제", v: "오프라인 일괄 스코어링" }
        ]
      }
    ],
    tip: "💡 문제의 '페이로드 크기 + 응답 속도' 요구로 판별. 1GB·1시간·near-real-time → Async / 대용량 + 즉시성 불필요 → Batch."
  },
  {
    title: "프롬프트 기법 비교",
    badge: "빈출",
    cols: 2,
    cards: [
      {
        name: "Zero-shot",
        dot: "#06b6d4",
        rows: [
          { k: "예시", v: "0개" },
          { k: "적합", v: "일반 지식·간단 태스크" }
        ]
      },
      {
        name: "Few-shot",
        dot: "#7c6fff",
        rows: [
          { k: "예시", v: "2~여러 개 (라벨 포함)" },
          { k: "적합", v: "형식·분류·일관성" }
        ]
      },
      {
        name: "Chain-of-thought (CoT)",
        dot: "#f59e0b",
        rows: [
          { k: "예시", v: "단계별 사고 지시" },
          { k: "적합", v: "수학·논리·다단계 추론" }
        ]
      },
      {
        name: "ReAct",
        dot: "#ef4444",
        rows: [
          { k: "예시", v: "Reason + Act (도구 호출)" },
          { k: "적합", v: "실시간 API·DB 조회형 에이전트" }
        ]
      }
    ],
    tip: "💡 '예시 없이' → Zero / '형식 맞추기' → Few / '단계별로' → CoT / '외부 API 호출' → ReAct"
  },
  {
    title: "Bedrock Guardrails 필터 종류",
    badge: "안전성",
    cols: 2,
    cards: [
      {
        name: "Content Filters",
        dot: "#ef4444",
        rows: [
          { k: "대상", v: "Hate, Insults, Sexual, Violence, Misconduct, Prompt Attack" },
          { k: "단위", v: "강도 슬라이더 (None~High)" },
          { k: "예시", v: "폭력·혐오 차단" }
        ]
      },
      {
        name: "Denied Topics",
        dot: "#f59e0b",
        rows: [
          { k: "대상", v: "조직이 금지한 주제 커스텀" },
          { k: "단위", v: "자연어 설명 등록" },
          { k: "예시", v: "정치·의료 조언 거부" }
        ]
      },
      {
        name: "Sensitive Info Filter",
        dot: "#10b981",
        rows: [
          { k: "대상", v: "PII (SSN·카드·이메일·주소)" },
          { k: "단위", v: "마스킹·차단 선택" },
          { k: "예시", v: "출력에서 번호 ***로" }
        ]
      },
      {
        name: "Word Filters",
        dot: "#06b6d4",
        rows: [
          { k: "대상", v: "특정 단어·구문" },
          { k: "단위", v: "단어 리스트" },
          { k: "예시", v: "브랜드 금지어" }
        ]
      }
    ],
    tip: "💡 문제가 '증오·폭력' → Content / '특정 주제 금지' → Denied Topics / '개인정보' → Sensitive / '특정 단어' → Word"
  },
  {
    title: "평가 지표 한눈에",
    badge: "시험 단골",
    cols: 3,
    cards: [
      {
        name: "분류 (Classification)",
        dot: "#7c6fff",
        rows: [
          { k: "Accuracy", v: "전체 정분류 비율" },
          { k: "Precision", v: "양성 예측 중 실제 양성" },
          { k: "Recall", v: "실제 양성 중 맞게 잡은 비율" },
          { k: "F1", v: "Precision·Recall 조화평균 (불균형↔균형)" }
        ]
      },
      {
        name: "회귀 (Regression)",
        dot: "#f59e0b",
        rows: [
          { k: "MSE / RMSE", v: "오차 제곱 평균 (큰 오차 페널티)" },
          { k: "R²", v: "설명력 (0~1)" },
          { k: "MAE", v: "절대 오차 평균" }
        ]
      },
      {
        name: "텍스트 생성",
        dot: "#10b981",
        rows: [
          { k: "BLEU", v: "번역 품질 (n-gram 겹침)" },
          { k: "ROUGE", v: "요약 품질 (recall 중심)" },
          { k: "BERTScore", v: "의미 유사도 (임베딩 기반)" },
          { k: "Perplexity", v: "언어 모델 확률 난이도" }
        ]
      }
    ],
    tip: "💡 번역 = BLEU / 요약 = ROUGE / 의미 유사 (변형 포함) = BERTScore / 불균형 분류 = F1"
  }
];

/* ─────── 문제 공략 키워드 (SAA 스키마 호환) ─────── */
window.AIF_KEYWORDS = [
  { kw:"라벨 없는 그룹화", services:"K-means · Autoencoder · Clustering · Unsupervised Learning", tip:"'라벨 없음' + '그룹' = 비지도. 이상 탐지는 Autoencoder" },
  { kw:"라벨 있는 분류·예측", services:"Supervised Learning · Classification · Regression", tip:"(입력, 라벨) 쌍이 있으면 지도학습. 이진 분류 = F1/Precision/Recall" },
  { kw:"최신·사내 지식 즉시 반영", services:"Bedrock Knowledge Bases · RAG · OpenSearch(벡터 DB)", tip:"fine-tune보다 싸고 빠름. 자주 바뀌는 정책·FAQ·매뉴얼에 최적" },
  { kw:"톤·스타일·태스크 특화", services:"Bedrock Fine-tuning · SageMaker Training", tip:"(prompt, completion) 라벨 쌍 필수. 커스텀 모델 = Provisioned Throughput만" },
  { kw:"도메인 언어·어휘 심화", services:"Continued Pre-training", tip:"비라벨 대규모 텍스트로 사전학습 연장. 의학·법률·금융 도메인에 유용" },
  { kw:"대용량·즉시성 불필요", services:"SageMaker Batch Transform · Bedrock Batch Inference", tip:"월별 리포트·대량 합성 데이터 = Batch가 최저비용" },
  { kw:"1GB·1시간 near-real-time", services:"SageMaker Asynchronous Inference", tip:"큐잉 방식. Real-time은 6MB·60초 제한이라 큰 페이로드엔 불가" },
  { kw:"간헐·예측 어려운 트래픽", services:"SageMaker Serverless Inference · Bedrock On-Demand", tip:"트래픽 없으면 0으로 축소. 콜드스타트는 감수" },
  { kw:"실시간 저지연", services:"SageMaker Real-time Inference · Bedrock with low-latency FM", tip:"100ms 이하 목표면 작은 모델 선택, Inferentia 고려" },
  { kw:"단계별 사고·수학", services:"Chain-of-thought Prompting · Reasoning", tip:"'step by step으로 설명해' 한 줄 추가로 정확도 크게 향상" },
  { kw:"예시로 포맷 맞추기", services:"Few-shot Prompting · 2~10개 예시", tip:"분류·형식·톤 맞추기의 기본기. Zero-shot 부족할 때" },
  { kw:"외부 API·DB 조회", services:"Bedrock Agents · ReAct · Tools Configuration", tip:"LLM이 외부 호출 후 결과 조합. 예약·주문·조회 워크플로 자동화" },
  { kw:"편향 감지·설명", services:"SageMaker Clarify · SHAP · Model Cards", tip:"학습 전·중·후 편향 리포트 + 피처 기여도" },
  { kw:"프로덕션 드리프트", services:"SageMaker Model Monitor · CloudWatch Alarms", tip:"Clarify는 배포 전, Model Monitor는 배포 후 (둘 다 필요)" },
  { kw:"노코드 ML", services:"SageMaker Canvas · Amazon Q in QuickSight", tip:"Canvas는 예측/분류, Q in QuickSight는 BI 자연어 질의" },
  { kw:"사전학습 모델 카탈로그", services:"SageMaker JumpStart · Hugging Face · Bedrock Model Catalog", tip:"VPC 내부 격리 배포 + PrivateLink 지원" },
  { kw:"피처 팀 간 공유", services:"SageMaker Feature Store", tip:"온라인·오프라인 저장소 분리. 학습·추론 일관성" },
  { kw:"라벨링 아웃소싱", services:"SageMaker Ground Truth · Ground Truth Plus", tip:"Plus는 AWS가 전문 라벨러 풀 관리. 직접 관리 부담 0" },
  { kw:"HITL 검토 워크플로", services:"Amazon Augmented AI (A2I)", tip:"낮은 신뢰도 예측을 사람에게 라우팅. 임계값 조정 가능" },
  { kw:"음성 인식·자막", services:"Amazon Transcribe · HealthScribe(의료)", tip:"다국어, 화자 분리, 타임코드. Translate 붙이면 다국어 자막" },
  { kw:"텍스트 → 음성", services:"Amazon Polly", tip:"뉴럴 음성, SSML 지원. 더빙 파이프라인에 Translate+Polly" },
  { kw:"번역", services:"Amazon Translate", tip:"100+ 언어, 커스텀 용어집. 평가 지표 = BLEU" },
  { kw:"이미지·비디오 인식", services:"Amazon Rekognition", tip:"객체·얼굴·텍스트·모더레이션. 얼굴 수집·비식별 정책 주의" },
  { kw:"문서 OCR·표·폼", services:"Amazon Textract", tip:"스캔·PDF 처리 표준. Comprehend·Bedrock과 연계해 IDP 파이프라인" },
  { kw:"텍스트 감정·엔티티", services:"Amazon Comprehend · Comprehend Medical", tip:"관리형 NLP. Medical은 의료 엔티티·관계 특화" },
  { kw:"추천 엔진", services:"Amazon Personalize", tip:"사용자-아이템 상호작용 학습. 검색·콘텐츠·이커머스" },
  { kw:"엔터프라이즈 검색", services:"Amazon Kendra · Amazon Q Business", tip:"자연어 질의, 권한 인식 검색. ML 기반 랭킹" },
  { kw:"사내 AI 어시스턴트", services:"Amazon Q Business · Q in QuickSight", tip:"사내 문서 인덱싱 + 자연어. IAM·KMS 통합" },
  { kw:"IDE 코딩 도우미", services:"Amazon Q Developer · CodeWhisperer", tip:"코드 제안, 테스트·문서 자동 생성, 보안 스캔" },
  { kw:"그래프 기반 분석", services:"Amazon Neptune · Neptune ML", tip:"사기 탐지·SNS 관계·지식 그래프" },
  { kw:"벡터 DB·k-NN", services:"OpenSearch Service · Aurora PostgreSQL(pgvector)", tip:"Bedrock Knowledge Bases의 기본 벡터 스토어" },
  { kw:"API 감사 로그", services:"AWS CloudTrail · CloudTrail Lake", tip:"누가·언제·어떤 API. Lake는 변조 불가 SQL 쿼리 가능" },
  { kw:"컴플라이언스 리포트", services:"AWS Artifact · AWS Audit Manager", tip:"Artifact는 공식 리포트 다운로드, Audit Manager는 프레임워크 매핑" },
  { kw:"S3 민감 데이터 탐지", services:"Amazon Macie", tip:"ML 기반 PII 자동 분류. 학습셋 민감 정보 발견에 필수" },
  { kw:"프라이빗 네트워크 경로", services:"AWS PrivateLink · VPC Endpoint · VPC", tip:"Bedrock·SageMaker 트래픽이 인터넷 미경유" },
  { kw:"친환경 ML 학습", services:"AWS Trainium (Trn) · AWS Inferentia (Inf)", tip:"Trn=학습, Inf=추론. GPU 대비 전력 효율 우수" },
  { kw:"생성형 AI 실험·학습", services:"Bedrock PartyRock · Bedrock Playground", tip:"PartyRock은 AWS 계정 없이도 무료 실험 가능" },
  { kw:"이미지 생성", services:"Amazon Nova Canvas · Titan Image Generator · Stable Diffusion", tip:"Negative prompt로 특정 요소 배제" },
  { kw:"비디오 생성", services:"Amazon Nova Reel", tip:"프롬프트→짧은 비디오 직접 생성. 이미지+편집 조합보다 효율적" },
  { kw:"멀티모달 저비용 FM", services:"Amazon Nova Lite · Nova Micro (텍스트만)", tip:"Nova Pro=고성능, Lite=멀티모달 저비용, Micro=텍스트 전용 최저비용" },
  { kw:"책임 있는 AI 원칙", services:"Fairness · Explainability · Privacy · Safety · Controllability · Transparency", tip:"AWS Responsible AI 6대 원칙. Clarify + Guardrails + Model Cards 조합" }
];

/* ─────── 자주 나오는 함정 (SAA 스키마 호환: title/icon/wrong/right) ─────── */
window.AIF_TRAPS = [
  { title:"Bedrock 커스텀 모델은 On-Demand 불가", icon:"🛑",
    wrong:"fine-tuned 모델도 On-Demand로 바로 호출하면 된다",
    right:"Bedrock 커스텀 모델(fine-tuned / continued-pretrained)은 반드시 <strong>Provisioned Throughput</strong>로만 추론. On-Demand는 기본 FM만!" },
  { title:"Fine-tuning은 라벨 필수", icon:"🏷️",
    wrong:"회사 문서 뭉치를 그대로 넣으면 fine-tuning이 된다",
    right:"Bedrock fine-tuning은 <strong>(prompt, completion) JSONL 라벨 쌍</strong>이 필수. 비라벨 대규모 텍스트는 <strong>Continued pre-training</strong> 영역" },
  { title:"민감 데이터는 학습 후엔 못 뺌", icon:"🔒",
    wrong:"모델 출력에 마스킹·암호화만 걸면 학습한 기밀 정보도 안전하다",
    right:"모델 가중치에 내재화된 정보는 마스킹으로 제거 불가. <strong>데이터 제거 후 재학습</strong>이 근본 해결" },
  { title:"피처 제거 ≠ 편향 제거", icon:"⚖️",
    wrong:"연령 피처를 빼면 연령 편향이 사라진다",
    right:"소득·경력 등 상관된 피처가 암묵적 편향을 유지. <strong>데이터 다양화 + Clarify 감사</strong>로 근본적 접근" },
  { title:"Temperature ≠ 길이·언어 제어", icon:"🌡️",
    wrong:"응답을 짧게 하려면 Temperature를 낮추면 된다",
    right:"Temperature는 랜덤성만. 길이는 <strong>Max tokens</strong>, 언어는 <strong>프롬프트 명시</strong>" },
  { title:"CloudTrail로 응답 내용은 못 봄", icon:"📋",
    wrong:"Bedrock 응답 내용 감사는 CloudTrail로 하면 된다",
    right:"CloudTrail은 API 메타데이터만. 입·출력 내용 저장은 <strong>Bedrock Model Invocation Logging</strong> 활성화 (S3/CloudWatch)" },
  { title:"Guardrails 기본 필터 ≠ 정치·종교", icon:"🛡️",
    wrong:"Content Filter에 정치·종교 카테고리가 기본 제공된다",
    right:"기본 Content Filter는 Hate·Insults·Sexual·Violence·Misconduct·Prompt Attack. 정치·종교는 <strong>Denied Topics</strong>로 커스텀 등록" },
  { title:"모델 교체로 환각 해결 불가", icon:"🌀",
    wrong:"더 좋은 FM으로 바꾸면 환각이 사라진다",
    right:"환각 완전 제거 모델은 없음. <strong>RAG + 팩트체크 + Contextual Grounding + Temperature↓</strong> 조합이 현실적" },
  { title:"Rekognition은 이미지 생성 X", icon:"🖼️",
    wrong:"Amazon Rekognition으로 새 이미지를 생성할 수 있다",
    right:"Rekognition = 이미지·비디오 <strong>분석·인식</strong>. 생성은 <strong>Stable Diffusion / Titan Image / Nova Canvas</strong>" },
  { title:"책 요약 실패 = Context 초과", icon:"📚",
    wrong:"책 요약 실패는 Temperature나 Top P 때문이다",
    right:"대부분 <strong>입력이 context window 초과</strong>. 해결: 청킹(map-reduce) + RAG 또는 장컨텍스트 모델(Claude 200K 등)" },
  { title:"Personalize는 감정 분석 아님", icon:"⭐",
    wrong:"고객 감정 분석에 Personalize를 쓴다",
    right:"Personalize = <strong>추천 엔진</strong>. 감정 분석은 <strong>Comprehend</strong> 또는 <strong>Bedrock LLM</strong>" },
  { title:"Q Developer ≠ Q Business", icon:"🤖",
    wrong:"사내 문서 AI 어시스턴트로 Amazon Q Developer를 쓴다",
    right:"Q Developer = <strong>IDE 코딩 도우미</strong>. 사내 문서 AI = <strong>Amazon Q Business</strong>" },
  { title:"Clarify = 배포 전 / Model Monitor = 배포 후", icon:"🧪",
    wrong:"프로덕션 드리프트 감지를 SageMaker Clarify로 한다",
    right:"Clarify는 <strong>학습·검증 시점 편향·설명</strong>. 프로덕션 드리프트는 <strong>Model Monitor</strong> (보통 둘 다 사용)" },
  { title:"Few-shot은 학습이 아님", icon:"🎯",
    wrong:"Few-shot prompting은 모델을 학습시키는 것이다",
    right:"Few-shot = <strong>프롬프트에 예시 넣기</strong>(가중치 불변, 요청별 일시적). Fine-tuning이 진짜 학습" },
  { title:"Textract ≠ Transcribe", icon:"📝",
    wrong:"PDF 이력서를 텍스트로 추출할 때 Transcribe를 쓴다",
    right:"Textract = <strong>문서 OCR</strong>(PDF·이미지). Transcribe = <strong>음성 전사</strong>" },
  { title:"벡터 DB vs 관계형 DB", icon:"🧭",
    wrong:"벡터 임베딩은 DynamoDB나 RDS에 저장해 검색하면 된다",
    right:"유사도 검색은 <strong>k-NN 인덱스</strong> 필요. OpenSearch Service·Aurora PostgreSQL(pgvector)·Pinecone 등" },
  { title:"Nova Micro는 멀티모달이 아님", icon:"🪶",
    wrong:"Nova Micro는 이미지도 처리한다",
    right:"Nova <strong>Micro = 텍스트 전용(최저비용)</strong>, Lite/Pro = 멀티모달. Canvas = 이미지 생성, Reel = 비디오 생성" },
  { title:"HOTSPOT 문제 형식", icon:"🎛️",
    wrong:"HOTSPOT도 그냥 객관식과 같은 채점이다",
    right:"HOTSPOT은 <strong>드래그 매칭/순서 배치</strong> 문제. 각 항목을 모두 맞춰야 점수. 본 퀴즈에선 객관식 단순 버전으로 수록 — 원문 참고 권장" }
];

/* ─────── 서비스 선택 트리 (SAA 스키마: title/icon/q/opts[label,answer]) ─────── */
window.AIF_DECISIONS = [
  {
    title:"입력 데이터 타입으로 AI 서비스 선택",
    icon:"🔀",
    q:"어떤 데이터를 다루나요?",
    opts:[
      {label:"텍스트 분류·감정·엔티티", answer:"→ <strong>Amazon Comprehend</strong> (Medical은 의료)"},
      {label:"텍스트 생성·대화·요약·코드", answer:"→ <strong>Amazon Bedrock</strong> (Claude·Titan·Nova·Llama 등)"},
      {label:"다국어 번역", answer:"→ <strong>Amazon Translate</strong>"},
      {label:"이미지·비디오 분석·객체 탐지", answer:"→ <strong>Amazon Rekognition</strong>"},
      {label:"이미지 생성", answer:"→ <strong>Nova Canvas</strong> / Titan Image Generator / Stable Diffusion"},
      {label:"비디오 생성", answer:"→ <strong>Amazon Nova Reel</strong>"},
      {label:"음성 → 텍스트 (자막·전사)", answer:"→ <strong>Amazon Transcribe</strong> (임상은 HealthScribe)"},
      {label:"텍스트 → 음성 (더빙)", answer:"→ <strong>Amazon Polly</strong>"},
      {label:"PDF·스캔 문서 구조 추출", answer:"→ <strong>Amazon Textract</strong> + Comprehend/Bedrock"},
      {label:"사용자-아이템 추천", answer:"→ <strong>Amazon Personalize</strong>"},
      {label:"엔터프라이즈 검색", answer:"→ <strong>Amazon Kendra</strong> 또는 Amazon Q Business"}
    ]
  },
  {
    title:"FM 커스터마이징 방법 결정",
    icon:"🧬",
    q:"어떤 방식으로 모델을 맞춤화할까?",
    opts:[
      {label:"최신/사내 문서 지식 필요 (자주 바뀜)", answer:"→ <strong>Bedrock Knowledge Bases (RAG)</strong> — 학습 없이 즉시 반영"},
      {label:"라벨된 예시로 톤·태스크 특화", answer:"→ <strong>Bedrock Fine-tuning</strong> — (prompt, completion) JSONL 필요"},
      {label:"새 도메인 대규모 비라벨 텍스트 (의학·법률 등)", answer:"→ <strong>Continued Pre-training</strong>"},
      {label:"단순 지시·형식 조정만 필요", answer:"→ <strong>Prompt Engineering</strong> (Few-shot·CoT)"},
      {label:"외부 API·DB 호출 워크플로", answer:"→ <strong>Bedrock Agents</strong> + Tools / ReAct"}
    ]
  },
  {
    title:"추론 옵션 선택 (SageMaker)",
    icon:"⚡",
    q:"어떤 추론 방식을 쓸까?",
    opts:[
      {label:"실시간 저지연 응답 (≤60s, ≤6MB)", answer:"→ <strong>Real-time Inference</strong>"},
      {label:"간헐·예측 어려운 트래픽, 서버 관리 싫음", answer:"→ <strong>Serverless Inference</strong>"},
      {label:"대용량 입력(≤1GB) + 1시간 내, near real-time", answer:"→ <strong>Asynchronous Inference</strong>"},
      {label:"대량 데이터 일괄 스코어링·즉시성 불필요", answer:"→ <strong>Batch Transform</strong>"}
    ]
  },
  {
    title:"Responsible AI 체크리스트",
    icon:"🛡️",
    q:"어떤 Responsible AI 관심사인가?",
    opts:[
      {label:"편향 감지·완화", answer:"→ <strong>SageMaker Clarify</strong> + 다양한 학습 데이터 + Data Augmentation"},
      {label:"예측 설명성 (Explainability)", answer:"→ <strong>SHAP (Clarify 내장)</strong> / PDP / <strong>Model Cards</strong>"},
      {label:"유해·PII 출력 차단", answer:"→ <strong>Bedrock Guardrails</strong> (Content + Sensitive Info + Denied Topics)"},
      {label:"프로덕션 품질 드리프트 알림", answer:"→ <strong>SageMaker Model Monitor</strong> + CloudWatch Alarms"},
      {label:"감사·거버넌스", answer:"→ <strong>CloudTrail</strong> + <strong>Audit Manager</strong> + <strong>AWS Artifact</strong> + Model Cards"},
      {label:"HITL (사람 검토)", answer:"→ <strong>Amazon Augmented AI (A2I)</strong>"}
    ]
  },
  {
    title:"프롬프트 기법 선택",
    icon:"🎯",
    q:"어떤 프롬프트 기법이 맞을까?",
    opts:[
      {label:"일반 지식·단순 질문", answer:"→ <strong>Zero-shot</strong> (예시 없이)"},
      {label:"형식·톤·분류 정확도 향상", answer:"→ <strong>Few-shot</strong> (2~10개 예시)"},
      {label:"수학·논리·다단계 추론", answer:"→ <strong>Chain-of-thought (CoT)</strong> '단계별로 생각해'"},
      {label:"복잡 태스크를 작게 쪼개기", answer:"→ <strong>Prompt Chaining</strong> / Least-to-most"},
      {label:"외부 API·DB 실시간 조회", answer:"→ <strong>ReAct</strong> (Reason + Act)"},
      {label:"이미지 생성에서 요소 배제", answer:"→ <strong>Negative Prompt</strong>"}
    ]
  },
  {
    title:"벡터 DB·지식 저장소 선택",
    icon:"🧠",
    q:"임베딩·지식을 어디에 저장할까?",
    opts:[
      {label:"Bedrock 관리형 RAG (제로 관리)", answer:"→ <strong>Bedrock Knowledge Bases</strong> (내부적으로 OpenSearch Serverless 사용)"},
      {label:"검색·로그 분석·벡터 통합", answer:"→ <strong>Amazon OpenSearch Service</strong> (k-NN)"},
      {label:"관계형 DB + 벡터 통합", answer:"→ <strong>Aurora PostgreSQL</strong> (pgvector 확장)"},
      {label:"그래프 관계형 지식", answer:"→ <strong>Amazon Neptune</strong>"},
      {label:"엔터프라이즈 문서 검색 (ML 랭킹)", answer:"→ <strong>Amazon Kendra</strong>"}
    ]
  }
];

/* ─────── 용어집 ─────── */
window.AIF_GLOSSARY = [
  // === Bedrock / Foundation Models ===
  { cat: "Bedrock·FM", color: "#7c6fff", name: "Amazon Bedrock", short: "관리형 FM 플랫폼",
    desc: "Anthropic Claude, Amazon Titan·Nova, Meta Llama, Cohere 등 여러 벤더 FM을 단일 API로 제공. Knowledge Bases, Agents, Guardrails, Prompt Management 같은 엔터프라이즈 기능 통합.", tags: ["FM", "생성형 AI"] },
  { cat: "Bedrock·FM", color: "#7c6fff", name: "Foundation Model (FM)", short: "대규모 사전학습 범용 모델",
    desc: "방대한 데이터로 사전학습되어 다양한 태스크에 fine-tune 없이 적응 가능한 모델. LLM은 FM의 한 종류.", tags: ["기본 개념"] },
  { cat: "Bedrock·FM", color: "#7c6fff", name: "LLM (Large Language Model)", short: "대규모 언어 모델",
    desc: "수십억~수조 파라미터의 텍스트 기반 FM. Claude, GPT, Titan Text 등. 자연어 이해·생성·요약·번역·추론 광범위.", tags: ["텍스트"] },
  { cat: "Bedrock·FM", color: "#7c6fff", name: "Claude (Anthropic)", short: "Bedrock의 주력 LLM",
    desc: "긴 컨텍스트(200K 토큰), 안전성·정확도 강점. 3.5 Sonnet·Haiku·Opus 등 크기별 제공. Multimodal(텍스트+이미지) 지원.", tags: ["LLM"] },
  { cat: "Bedrock·FM", color: "#7c6fff", name: "Amazon Titan", short: "AWS 자체 FM 패밀리",
    desc: "Titan Text (생성), Titan Embeddings (벡터화), Titan Image Generator (이미지), Titan Multimodal Embeddings 등. AWS 생태계와 밀접.", tags: ["AWS FM"] },
  { cat: "Bedrock·FM", color: "#7c6fff", name: "Amazon Nova", short: "AWS 최신 멀티모달 FM",
    desc: "Nova Micro(텍스트, 최저비용) / Nova Lite(멀티모달) / Nova Pro(고성능) / Nova Canvas(이미지 생성) / Nova Reel(비디오 생성).", tags: ["Nova", "멀티모달"] },
  { cat: "Bedrock·FM", color: "#7c6fff", name: "Bedrock Knowledge Bases", short: "관리형 RAG",
    desc: "문서(S3·Confluence 등)를 자동 청킹·임베딩·벡터 DB 저장. 질의 시 관련 청크 검색해 FM 프롬프트에 주입. 벡터 DB는 OpenSearch Serverless 또는 Aurora.", tags: ["RAG"] },
  { cat: "Bedrock·FM", color: "#7c6fff", name: "Bedrock Agents", short: "다단계 액션 오케스트레이션",
    desc: "LLM이 사용자 요청을 분해 → 외부 API·Lambda 호출 → 결과 조합. ReAct 패턴 구현. 예약, 주문, 조회 워크플로 자동화.", tags: ["Agents", "ReAct"] },
  { cat: "Bedrock·FM", color: "#7c6fff", name: "Bedrock Guardrails", short: "입·출력 안전 필터",
    desc: "Content Filters(증오·폭력·성적·독성), Denied Topics(금지 주제), Sensitive Info(PII 마스킹), Word Filters(특정 단어), Contextual Grounding(환각 감지). 모델 무관 적용.", tags: ["Responsible AI"] },
  { cat: "Bedrock·FM", color: "#7c6fff", name: "Provisioned Throughput", short: "Bedrock 용량 약정 과금",
    desc: "일정 용량을 약정(1·6개월)으로 확보 → 단위당 비용 절감. 커스텀 모델(fine-tuned/continued) 추론은 필수. On-Demand는 기본 FM만.", tags: ["과금"] },
  { cat: "Bedrock·FM", color: "#7c6fff", name: "Bedrock PartyRock", short: "노코드 실험 플레이그라운드",
    desc: "AWS 계정 없이도 Bedrock FM으로 작은 앱을 만들 수 있는 플레이그라운드. 학습·프로토타이핑용.", tags: ["학습"] },

  // === SageMaker ===
  { cat: "SageMaker", color: "#f59e0b", name: "Amazon SageMaker AI", short: "ML 전주기 플랫폼",
    desc: "노트북, 학습, 튜닝, 배포, 모니터링, 라벨링, 피처 스토어 등 ML 전과정을 관리형으로 제공.", tags: ["기본"] },
  { cat: "SageMaker", color: "#f59e0b", name: "SageMaker JumpStart", short: "사전학습 모델 카탈로그",
    desc: "Hugging Face·Stable Diffusion·Llama 등 200+ 사전학습 모델을 원클릭 배포·fine-tune. VPC·PrivateLink 지원.", tags: ["FM 배포"] },
  { cat: "SageMaker", color: "#f59e0b", name: "SageMaker Canvas", short: "노코드 ML",
    desc: "드래그&드롭으로 분류·회귀·시계열 예측·생성형 AI 모델 생성. 비개발자 대상.", tags: ["노코드"] },
  { cat: "SageMaker", color: "#f59e0b", name: "SageMaker Clarify", short: "편향 탐지 + SHAP 설명",
    desc: "학습 전·중·후 편향 감지, 피처 기여도(SHAP) 리포트. Responsible AI 표준 도구.", tags: ["Responsible AI"] },
  { cat: "SageMaker", color: "#f59e0b", name: "SageMaker Model Monitor", short: "프로덕션 드리프트 감지",
    desc: "배포 모델의 데이터 품질·모델 품질·편향·피처 드리프트 자동 모니터링 + CloudWatch 알림.", tags: ["MLOps"] },
  { cat: "SageMaker", color: "#f59e0b", name: "SageMaker Model Cards", short: "모델 거버넌스 문서",
    desc: "모델의 목적·학습 데이터·성능·제약·Responsible AI 정보를 표준 양식으로 기록. 감사·컴플라이언스 필수.", tags: ["거버넌스"] },
  { cat: "SageMaker", color: "#f59e0b", name: "SageMaker Model Registry", short: "모델 버전 관리",
    desc: "모델 버전·메타데이터·승인 상태(Pending/Approved/Rejected) 관리. CI/CD 파이프라인 통합.", tags: ["MLOps"] },
  { cat: "SageMaker", color: "#f59e0b", name: "SageMaker Feature Store", short: "피처 중앙 저장소",
    desc: "학습·추론에서 일관된 피처 사용. 팀 간 피처 공유·재사용·버전 관리.", tags: ["피처"] },
  { cat: "SageMaker", color: "#f59e0b", name: "SageMaker Ground Truth", short: "데이터 라벨링 플랫폼",
    desc: "자체 라벨러·Mechanical Turk·벤더 라벨러 사용. Ground Truth Plus는 AWS가 전문 라벨러 팀을 관리.", tags: ["라벨링"] },
  { cat: "SageMaker", color: "#f59e0b", name: "SageMaker Data Wrangler", short: "시각 ETL",
    desc: "ML 학습 데이터 준비를 GUI로. 조인·변환·피처 엔지니어링을 코드 없이.", tags: ["전처리"] },
  { cat: "SageMaker", color: "#f59e0b", name: "SageMaker Debugger", short: "학습 문제 진단",
    desc: "학습 중 gradient·가중치·activation 이상을 감지 → 조기 중단·알림.", tags: ["학습"] },
  { cat: "SageMaker", color: "#f59e0b", name: "SageMaker HyperPod", short: "대규모 FM 분산 학습",
    desc: "수주~수개월 규모 FM 사전학습용 내결함성 클러스터. 노드 장애 자동 복구.", tags: ["FM 학습"] },

  // === ML/AI 기본 개념 ===
  { cat: "ML 기본", color: "#10b981", name: "Supervised Learning", short: "지도학습",
    desc: "(입력, 라벨) 쌍으로 학습. 분류·회귀·객체 탐지가 대표 태스크.", tags: ["패러다임"] },
  { cat: "ML 기본", color: "#10b981", name: "Unsupervised Learning", short: "비지도학습",
    desc: "라벨 없는 데이터에서 패턴·그룹 발견. 클러스터링·차원축소·이상 탐지.", tags: ["패러다임"] },
  { cat: "ML 기본", color: "#10b981", name: "Reinforcement Learning (RL)", short: "강화학습",
    desc: "에이전트가 환경과 상호작용하며 보상을 극대화. 게임·로봇·RLHF(LLM 튜닝).", tags: ["패러다임"] },
  { cat: "ML 기본", color: "#10b981", name: "RLHF", short: "인간 피드백 강화학습",
    desc: "LLM 응답에 대한 사람 선호도로 보상 모델 학습 → 정책 개선. Claude·GPT의 톤·안전성을 만든 핵심 기법.", tags: ["LLM 튜닝"] },
  { cat: "ML 기본", color: "#10b981", name: "Transfer Learning", short: "전이 학습",
    desc: "한 태스크에서 배운 지식을 다른 관련 태스크로 이전. Fine-tuning이 대표 구현.", tags: ["학습"] },
  { cat: "ML 기본", color: "#10b981", name: "Fine-tuning", short: "특화 학습",
    desc: "사전학습 모델을 (입력, 출력) 라벨 쌍으로 특정 태스크·도메인에 맞춤. Bedrock·SageMaker 모두 지원.", tags: ["커스터마이징"] },
  { cat: "ML 기본", color: "#10b981", name: "Continued Pre-training", short: "사전학습 연장",
    desc: "사전학습 모델에 비라벨 대규모 도메인 텍스트로 학습 연장. 새 도메인(법·의학) 언어·어휘 내재화.", tags: ["커스터마이징"] },
  { cat: "ML 기본", color: "#10b981", name: "Overfitting", short: "과적합",
    desc: "학습 데이터에만 맞고 새 데이터엔 일반화 실패. 해결: 데이터 증강, 정규화↑, 모델 단순화.", tags: ["학습 문제"] },
  { cat: "ML 기본", color: "#10b981", name: "Underfitting", short: "과소적합",
    desc: "모델이 너무 단순해 학습·평가 모두 저성능. 해결: 복잡도↑, 학습 시간↑, 피처 추가.", tags: ["학습 문제"] },
  { cat: "ML 기본", color: "#10b981", name: "Feature Engineering", short: "피처 가공",
    desc: "원시 데이터에서 예측에 유용한 입력 변수 생성·선택. 모델 정확도의 결정적 요소.", tags: ["전처리"] },
  { cat: "ML 기본", color: "#10b981", name: "Hyperparameter", short: "학습 제어 변수",
    desc: "학습률·배치 크기·epoch 수 등 학습 전에 설정하는 값. SageMaker Automatic Model Tuning으로 자동 최적화.", tags: ["학습"] },
  { cat: "ML 기본", color: "#10b981", name: "Inference", short: "추론",
    desc: "학습된 모델이 새 데이터에 대해 예측 생성. 배포 후 '사용' 단계.", tags: ["운영"] },
  { cat: "ML 기본", color: "#10b981", name: "Embedding", short: "의미 벡터",
    desc: "단어·문장·이미지를 의미를 담은 고차원 숫자 벡터로 변환. RAG·의미 검색·유사도의 수학적 기반.", tags: ["벡터"] },
  { cat: "ML 기본", color: "#10b981", name: "Tokenization", short: "토큰 분할",
    desc: "텍스트를 모델 기본 단위(subword·단어)로 쪼개기. Bedrock 과금·context window의 기본 단위.", tags: ["NLP"] },
  { cat: "ML 기본", color: "#10b981", name: "Transformer", short: "Self-attention 아키텍처",
    desc: "병렬 self-attention으로 장거리 의존성 포착. 현대 LLM·멀티모달의 기반 아키텍처.", tags: ["아키텍처"] },
  { cat: "ML 기본", color: "#10b981", name: "GAN", short: "적대적 생성 신경망",
    desc: "생성자와 판별자가 경쟁하며 실제 같은 합성 데이터 생성. 이미지·테이블 합성 데이터에 활용.", tags: ["생성 모델"] },
  { cat: "ML 기본", color: "#10b981", name: "Diffusion Model", short: "확산 기반 이미지 생성",
    desc: "노이즈 제거 반복으로 이미지 생성. Stable Diffusion, Titan Image, Nova Canvas 기반.", tags: ["생성 모델"] },
  { cat: "ML 기본", color: "#10b981", name: "Autoencoder", short: "재구성 기반 이상 탐지",
    desc: "입력을 압축→재구성 학습. 재구성 오차가 큰 샘플 = 이상치. 라벨 없는 이상 탐지 표준.", tags: ["이상 탐지"] },

  // === 프롬프트·생성 파라미터 ===
  { cat: "프롬프트", color: "#8b5cf6", name: "Prompt", short: "모델 지시문",
    desc: "모델에 전달하는 질의·지시 텍스트. System prompt(역할·규칙) + User prompt(질문)로 나뉨.", tags: ["기본"] },
  { cat: "프롬프트", color: "#8b5cf6", name: "Zero-shot", short: "예시 없이",
    desc: "태스크 예시 없이 지시만으로 수행. 일반 지식·단순 태스크에 적합.", tags: ["기법"] },
  { cat: "프롬프트", color: "#8b5cf6", name: "Few-shot", short: "예시 몇 개로 학습",
    desc: "프롬프트에 (입력, 라벨) 예시 2~여러 개 포함 → 모델이 패턴 파악. 분류·형식 맞추기에 강력.", tags: ["기법"] },
  { cat: "프롬프트", color: "#8b5cf6", name: "Chain-of-thought (CoT)", short: "단계별 사고",
    desc: "'단계별로 생각해봐' 지시로 중간 추론 출력. 수학·논리 정확도 크게 향상.", tags: ["기법"] },
  { cat: "프롬프트", color: "#8b5cf6", name: "ReAct", short: "Reason + Act",
    desc: "추론과 외부 도구 호출을 번갈아 수행. 실시간 DB·API 조회형 에이전트의 표준 패턴.", tags: ["Agents"] },
  { cat: "프롬프트", color: "#8b5cf6", name: "Prompt Chaining", short: "프롬프트 사슬",
    desc: "큰 태스크를 단계별 프롬프트로 쪼개 이전 출력 → 다음 입력으로 전달.", tags: ["기법"] },
  { cat: "프롬프트", color: "#8b5cf6", name: "Negative Prompt", short: "제외 지시 (이미지)",
    desc: "이미지 생성 시 '포함하지 말 것' 리스트. 스타일·객체 배제로 결과 정확도 향상.", tags: ["이미지"] },
  { cat: "프롬프트", color: "#8b5cf6", name: "Temperature", short: "랜덤성 제어 (0~1+)",
    desc: "낮으면(0) 결정적, 높으면 다양·창의적. 일관성 필요→↓, 브레인스토밍→↑.", tags: ["파라미터"] },
  { cat: "프롬프트", color: "#8b5cf6", name: "Top K / Top P", short: "샘플링 후보 제어",
    desc: "Top K: 상위 K개 토큰만 후보. Top P(nucleus): 누적 확률 P까지 후보. 다양성 미세 조정.", tags: ["파라미터"] },
  { cat: "프롬프트", color: "#8b5cf6", name: "Context Window", short: "최대 입력 토큰",
    desc: "모델이 한 번에 처리 가능한 토큰 수. Claude 200K, Nova 300K 등. 책 요약 실패 = 초과.", tags: ["한계"] },
  { cat: "프롬프트", color: "#8b5cf6", name: "Max Tokens", short: "최대 출력 토큰",
    desc: "생성 길이 제한. 비용·응답 속도 제어.", tags: ["파라미터"] },

  // === Responsible AI ===
  { cat: "Responsible AI", color: "#ef4444", name: "Fairness", short: "공정성",
    desc: "인구 집단별 차별 없는 결과. 데이터 다양화 + Clarify 감사로 확보.", tags: ["원칙"] },
  { cat: "Responsible AI", color: "#ef4444", name: "Explainability", short: "설명 가능성",
    desc: "예측 근거를 이해관계자에게 설명. SHAP·PDP·Model Cards 활용.", tags: ["원칙"] },
  { cat: "Responsible AI", color: "#ef4444", name: "Transparency", short: "투명성",
    desc: "모델의 목적·데이터·한계·성능을 공개. Model Cards·AI Service Cards.", tags: ["원칙"] },
  { cat: "Responsible AI", color: "#ef4444", name: "Hallucination", short: "환각 (허위 생성)",
    desc: "사실과 다른 내용을 그럴듯하게 생성. 완화: RAG, 팩트체크, Temperature↓, Guardrails Contextual Grounding.", tags: ["리스크"] },
  { cat: "Responsible AI", color: "#ef4444", name: "Prompt Injection", short: "프롬프트 인젝션",
    desc: "'이전 지시 무시' 같은 문구로 시스템 프롬프트 우회. 방어: Guardrails Prompt Attack Filter + Adversarial prompting.", tags: ["보안"] },
  { cat: "Responsible AI", color: "#ef4444", name: "Jailbreak", short: "탈옥 (안전장치 우회)",
    desc: "롤플레잉·우회 기법으로 금지된 응답 유도. Guardrails와 지속 레드팀으로 방어.", tags: ["보안"] },
  { cat: "Responsible AI", color: "#ef4444", name: "SHAP", short: "Shapley 값 기반 설명",
    desc: "각 피처가 개별 예측에 얼마나 기여했는지 게임이론 기반 계산. SageMaker Clarify 내장.", tags: ["설명 도구"] },
  { cat: "Responsible AI", color: "#ef4444", name: "PDP (Partial Dependence Plot)", short: "부분 의존도 그래프",
    desc: "한 피처 값이 바뀔 때 예측이 어떻게 변하는지 시각화. 비기술 이해관계자에게 효과적.", tags: ["설명 도구"] },
  { cat: "Responsible AI", color: "#ef4444", name: "Bias (편향)", short: "체계적 오류",
    desc: "Sampling(표본), Measurement(측정), Observer(관찰자), Confirmation(확증) 등 유형별 식별·완화 필요.", tags: ["편향 유형"] },
  { cat: "Responsible AI", color: "#ef4444", name: "HITL", short: "Human-in-the-loop",
    desc: "ML 판단에 사람 개입. Amazon A2I가 워크플로 관리, Ground Truth Plus가 라벨링 HITL.", tags: ["사람 개입"] },
  { cat: "Responsible AI", color: "#ef4444", name: "RAI (Responsible AI)", short: "책임 있는 AI",
    desc: "AWS 6대 원칙: Fairness, Explainability, Privacy & Security, Safety, Controllability, Transparency.", tags: ["프레임워크"] },
  { cat: "Responsible AI", color: "#ef4444", name: "AWS AI Service Cards", short: "AWS 서비스 문서",
    desc: "Rekognition·Transcribe 등 AWS AI 서비스의 사용 의도·한계·Responsible AI 고려사항 공식 문서.", tags: ["투명성"] },

  // === 보안·거버넌스 ===
  { cat: "보안·거버넌스", color: "#06b6d4", name: "IAM", short: "AWS 권한 관리",
    desc: "사용자·서비스 권한 정책. Least Privilege 원칙으로 Bedrock·SageMaker 접근 제어.", tags: ["기본"] },
  { cat: "보안·거버넌스", color: "#06b6d4", name: "KMS", short: "암호화 키 관리",
    desc: "고객 관리형 키(CMK)로 Bedrock 학습 산출물, S3 데이터, SageMaker 등 암호화.", tags: ["암호화"] },
  { cat: "보안·거버넌스", color: "#06b6d4", name: "AWS PrivateLink", short: "프라이빗 AWS 서비스 접근",
    desc: "VPC에서 Bedrock·SageMaker 등으로 가는 트래픽이 AWS 백본만 경유. 인터넷 노출 제거.", tags: ["네트워크"] },
  { cat: "보안·거버넌스", color: "#06b6d4", name: "AWS CloudTrail", short: "API 감사 로그",
    desc: "AWS 계정의 모든 API 호출(Bedrock 포함) 기록. 누가·언제·어떤 리소스에.", tags: ["감사"] },
  { cat: "보안·거버넌스", color: "#06b6d4", name: "AWS CloudTrail Lake", short: "변조 불가 쿼리형 감사",
    desc: "CloudTrail 로그를 SQL 쿼리 가능한 변조 불가 데이터 레이크에 장기 보관.", tags: ["감사"] },
  { cat: "보안·거버넌스", color: "#06b6d4", name: "AWS Config", short: "리소스 구성 추적",
    desc: "AWS 리소스 변경 이력·규정 준수 평가.", tags: ["거버넌스"] },
  { cat: "보안·거버넌스", color: "#06b6d4", name: "AWS Audit Manager", short: "컴플라이언스 매핑·자동화",
    desc: "SOC·ISO·PCI·HIPAA 프레임워크에 리소스·정책을 매핑 + 증거 자동 수집.", tags: ["컴플라이언스"] },
  { cat: "보안·거버넌스", color: "#06b6d4", name: "AWS Artifact", short: "컴플라이언스 리포트 저장소",
    desc: "AWS의 공식 SOC·ISO·PCI 리포트와 서드파티 리포트 다운로드 포털. 신규 업로드 알림 구독.", tags: ["컴플라이언스"] },
  { cat: "보안·거버넌스", color: "#06b6d4", name: "Amazon Macie", short: "S3 민감 데이터 자동 탐지",
    desc: "ML 기반 PII 분류·탐지. 학습 데이터셋의 민감 정보 발견에 필수.", tags: ["데이터 보호"] },
  { cat: "보안·거버넌스", color: "#06b6d4", name: "Data Residency", short: "데이터 소재 규제",
    desc: "특정 지리·법적 경계 내에 데이터 보존. Bedrock은 Region 내 처리 원칙.", tags: ["규제"] },
  { cat: "보안·거버넌스", color: "#06b6d4", name: "공유 책임 모델", short: "AWS vs 고객 책임 분리",
    desc: "AWS = 인프라 보안(서비스 패치·호스트). 고객 = 데이터·IAM·암호화·접근 제어.", tags: ["모델"] },

  // === AI 서비스 (관리형) ===
  { cat: "AI 서비스", color: "#ec4899", name: "Amazon Q Business", short: "사내 AI 어시스턴트",
    desc: "SharePoint·Confluence·S3 등 사내 데이터 인덱싱 + 자연어 질의. IAM·KMS 통합.", tags: ["엔터프라이즈"] },
  { cat: "AI 서비스", color: "#ec4899", name: "Amazon Q Developer", short: "IDE 코딩 도우미",
    desc: "VS Code·JetBrains에서 코드 제안·리팩토링·테스트 생성·보안 스캔·라이선스 추적.", tags: ["개발"] },
  { cat: "AI 서비스", color: "#ec4899", name: "Amazon Comprehend", short: "NLP 관리형",
    desc: "감정·엔티티·핵심 구절·주제·언어·독성 분석. Comprehend Medical은 의료 엔티티 특화.", tags: ["NLP"] },
  { cat: "AI 서비스", color: "#ec4899", name: "Amazon Transcribe", short: "음성 → 텍스트 (STT)",
    desc: "다국어 자동 전사, 화자 분리, 의료·콜센터 특화. 자막 타임코드 생성.", tags: ["음성"] },
  { cat: "AI 서비스", color: "#ec4899", name: "Amazon Polly", short: "텍스트 → 음성 (TTS)",
    desc: "자연스러운 음성 합성. SSML, 뉴럴 음성, 다국어.", tags: ["음성"] },
  { cat: "AI 서비스", color: "#ec4899", name: "Amazon Translate", short: "실시간·배치 번역",
    desc: "100+ 언어 번역, 커스텀 용어집, 병렬 번역.", tags: ["번역"] },
  { cat: "AI 서비스", color: "#ec4899", name: "Amazon Rekognition", short: "이미지·비디오 인식",
    desc: "객체·얼굴·텍스트·모더레이션·커스텀 라벨. 얼굴 수집·비식별 정책 유의.", tags: ["비전"] },
  { cat: "AI 서비스", color: "#ec4899", name: "Amazon Textract", short: "문서 OCR + 구조 추출",
    desc: "PDF·스캔에서 텍스트·표·폼 자동 추출. 이력서·청구서·계약서 처리.", tags: ["문서"] },
  { cat: "AI 서비스", color: "#ec4899", name: "Amazon Kendra", short: "엔터프라이즈 검색",
    desc: "자연어 질의로 사내 문서 검색. SharePoint·ServiceNow·Confluence 등 커넥터.", tags: ["검색"] },
  { cat: "AI 서비스", color: "#ec4899", name: "Amazon Personalize", short: "추천 엔진",
    desc: "사용자-아이템 상호작용 기반 실시간 개인화 추천.", tags: ["추천"] },
  { cat: "AI 서비스", color: "#ec4899", name: "Amazon Fraud Detector", short: "사기 탐지",
    desc: "결제·계정 생성 사기 패턴 자동 학습·점수화.", tags: ["사기 탐지"] },
  { cat: "AI 서비스", color: "#ec4899", name: "AWS HealthScribe", short: "의료 받아쓰기·요약",
    desc: "환자-의사 대화 자동 전사 + SOAP 포맷 임상 노트 생성. HIPAA 적격.", tags: ["헬스케어"] },
  { cat: "AI 서비스", color: "#ec4899", name: "Amazon Lex", short: "챗봇 대화 엔진",
    desc: "Alexa와 같은 엔진. Intent·slot 기반 음성·텍스트 챗봇 구축.", tags: ["대화"] },
  { cat: "AI 서비스", color: "#ec4899", name: "Amazon Augmented AI (A2I)", short: "HITL 워크플로",
    desc: "ML 예측 중 낮은 신뢰도 건을 사람 검토로 라우팅. 임계값 조정.", tags: ["HITL"] },

  // === 데이터 인프라 ===
  { cat: "데이터 인프라", color: "#3b82f6", name: "Amazon OpenSearch Service", short: "벡터 DB + 검색",
    desc: "k-NN 벡터 검색 지원. Bedrock Knowledge Bases의 기본 벡터 스토어. 엔터프라이즈 검색·로그 분석도 겸용.", tags: ["벡터 DB"] },
  { cat: "데이터 인프라", color: "#3b82f6", name: "Aurora PostgreSQL (pgvector)", short: "관계형 + 벡터",
    desc: "PostgreSQL 호환 + pgvector 확장으로 임베딩 저장·유사도 검색.", tags: ["벡터 DB"] },
  { cat: "데이터 인프라", color: "#3b82f6", name: "Amazon Neptune", short: "그래프 DB (+ ML)",
    desc: "관계 많은 데이터(사기·지식 그래프)에 최적. Neptune ML로 그래프 ML.", tags: ["그래프"] },
  { cat: "데이터 인프라", color: "#3b82f6", name: "Amazon S3", short: "객체 스토리지",
    desc: "Bedrock 학습·평가 데이터셋, 모델 아티팩트 저장의 표준.", tags: ["스토리지"] },
  { cat: "데이터 인프라", color: "#3b82f6", name: "AWS Trainium (Trn)", short: "학습 전용 ML 칩",
    desc: "AWS 자체 설계. GPU 대비 전력 효율 우수 → 대규모 FM 학습 시 환경 영향↓.", tags: ["인프라"] },
  { cat: "데이터 인프라", color: "#3b82f6", name: "AWS Inferentia (Inf)", short: "추론 전용 ML 칩",
    desc: "고성능·저비용 추론. 프로덕션 LLM 서빙에 활용.", tags: ["인프라"] }
];
