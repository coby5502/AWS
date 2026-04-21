// DVA-C02 전용 부가 콘텐츠: 헷갈리는 개념 / 키워드 / 함정 / 결정트리 / 용어집
// 스키마:
//   COMPARES  : {title, badge, cols, cards: [{name, dot, rows: [{k, v}]}], tip}
//   KEYWORDS  : {kw, services, tip}
//   TRAPS     : {icon, title, wrong, right}
//   DECISIONS : {title, icon, q, opts: [{label, answer}]}
//   GLOSSARY  : {cat, color, name, short, desc, tags}
// AWS 서비스·기술 용어는 원어 유지

/* ─────── 헷갈리는 개념 비교 ─────── */
window.DVA_COMPARES = [
  {
    title: "Lambda 동시성 3방식",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "Reserved Concurrency",
        dot: "#7c6fff",
        rows: [
          { k: "목적", v: "함수별 동시 실행 상한 보장·제한" },
          { k: "과금", v: "실행 시에만 과금" },
          { k: "Cold Start", v: "그대로 발생" },
          { k: "용도", v: "다운스트림 DB 보호, 중요 함수 격리" }
        ]
      },
      {
        name: "Provisioned Concurrency",
        dot: "#34d399",
        rows: [
          { k: "목적", v: "Warm 인스턴스 사전 확보" },
          { k: "과금", v: "예약 시간 + 실행 시간" },
          { k: "Cold Start", v: "0에 가까움" },
          { k: "용도", v: "실시간·저지연 API" }
        ]
      },
      {
        name: "SnapStart",
        dot: "#f59e0b",
        rows: [
          { k: "목적", v: "Java/Python/.NET 스냅샷 로드" },
          { k: "과금", v: "추가 비용 없음 (기본)" },
          { k: "Cold Start", v: "10배 이상 단축" },
          { k: "용도", v: "JVM 시작 시간 문제" }
        ]
      }
    ],
    tip: "💡 저지연 API = Provisioned / 보호·격리 = Reserved / Java·Python 시작 시간 = SnapStart"
  },
  {
    title: "Lambda 비동기 실패 처리: DLQ vs Destination",
    badge: "자주 출제",
    cols: 2,
    cards: [
      {
        name: "Dead-Letter Queue (DLQ)",
        dot: "#ef4444",
        rows: [
          { k: "대상", v: "SQS 또는 SNS" },
          { k: "이벤트", v: "실패 이벤트만" },
          { k: "지원", v: "구식 (legacy)" },
          { k: "데이터", v: "원본 이벤트만" }
        ]
      },
      {
        name: "Event Destination (Async)",
        dot: "#34d399",
        rows: [
          { k: "대상", v: "SQS/SNS/Lambda/EventBridge" },
          { k: "이벤트", v: "성공·실패 둘 다" },
          { k: "지원", v: "권장 (newer)" },
          { k: "데이터", v: "실행 컨텍스트·응답 페이로드 포함" }
        ]
      }
    ],
    tip: "💡 신규 설계 = Event Destination / 레거시 유지 = DLQ"
  },
  {
    title: "CodeDeploy 배포 방식",
    badge: "핵심",
    cols: 4,
    cards: [
      {
        name: "Canary",
        dot: "#7c6fff",
        rows: [
          { k: "동작", v: "일정 비율 우선 → 나머지" },
          { k: "예시", v: "10%/30분 → 100%" },
          { k: "롤백", v: "CloudWatch Alarm 트리거" },
          { k: "용도", v: "소규모 테스트 후 확대" }
        ]
      },
      {
        name: "Linear",
        dot: "#34d399",
        rows: [
          { k: "동작", v: "일정 간격 점진 증가" },
          { k: "예시", v: "10%씩 10분마다" },
          { k: "롤백", v: "Alarm 트리거" },
          { k: "용도", v: "점진 확대" }
        ]
      },
      {
        name: "All-At-Once",
        dot: "#f59e0b",
        rows: [
          { k: "동작", v: "한 번에 100% 전환" },
          { k: "예시", v: "즉시 전환" },
          { k: "롤백", v: "수동" },
          { k: "용도", v: "개발·테스트 환경" }
        ]
      },
      {
        name: "Blue/Green",
        dot: "#ec4899",
        rows: [
          { k: "동작", v: "새 환경 생성 후 전환" },
          { k: "예시", v: "ELB 리스너 스왑" },
          { k: "롤백", v: "즉시 (환경 유지)" },
          { k: "용도", v: "Zero-downtime 프로덕션" }
        ]
      }
    ],
    tip: "💡 프로덕션 안전 = Canary/Linear + Alarm / 긴급 전환 = Blue/Green / 개발 = All-at-once"
  },
  {
    title: "DynamoDB 인덱스: LSI vs GSI",
    badge: "자주 출제",
    cols: 2,
    cards: [
      {
        name: "Local Secondary Index (LSI)",
        dot: "#7c6fff",
        rows: [
          { k: "파티션 키", v: "기본 테이블과 동일" },
          { k: "정렬 키", v: "다른 속성" },
          { k: "생성 시점", v: "테이블 생성 시만" },
          { k: "용량", v: "테이블 용량 공유" },
          { k: "일관성", v: "Strong 또는 Eventual" }
        ]
      },
      {
        name: "Global Secondary Index (GSI)",
        dot: "#34d399",
        rows: [
          { k: "파티션 키", v: "다른 속성 가능" },
          { k: "정렬 키", v: "다른 속성 가능" },
          { k: "생성 시점", v: "언제든지" },
          { k: "용량", v: "독립 (별도 프로비저닝)" },
          { k: "일관성", v: "Eventual만" }
        ]
      }
    ],
    tip: "💡 같은 파티션 키·Strong 일관성 = LSI / 다른 파티션 키·유연 = GSI"
  },
  {
    title: "IaC 도구: CloudFormation vs SAM vs CDK",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "CloudFormation",
        dot: "#7c6fff",
        rows: [
          { k: "언어", v: "YAML/JSON" },
          { k: "추상화", v: "낮음 (리소스 직접 기술)" },
          { k: "재사용", v: "Nested Stack, Module" },
          { k: "용도", v: "모든 리소스 범용" }
        ]
      },
      {
        name: "AWS SAM",
        dot: "#34d399",
        rows: [
          { k: "언어", v: "YAML (CFN 확장)" },
          { k: "추상화", v: "서버리스 특화" },
          { k: "재사용", v: "Transform 매크로" },
          { k: "용도", v: "Lambda·API Gateway·DDB" }
        ]
      },
      {
        name: "AWS CDK",
        dot: "#f59e0b",
        rows: [
          { k: "언어", v: "TypeScript/Python/Java/Go" },
          { k: "추상화", v: "높음 (Construct)" },
          { k: "재사용", v: "클래스·패키지" },
          { k: "용도", v: "복잡한 인프라·재사용성" }
        ]
      }
    ],
    tip: "💡 Lambda+API 서버리스 = SAM / 프로그래밍 언어 선호 = CDK / 단순·범용 = CloudFormation"
  },
  {
    title: "API Gateway 유형",
    badge: "자주 출제",
    cols: 3,
    cards: [
      {
        name: "REST API",
        dot: "#7c6fff",
        rows: [
          { k: "기능", v: "전 기능 (캐시·사용량·SDK 생성)" },
          { k: "비용", v: "상대적 높음" },
          { k: "지연", v: "중간" },
          { k: "용도", v: "레거시·전기능 필요" }
        ]
      },
      {
        name: "HTTP API",
        dot: "#34d399",
        rows: [
          { k: "기능", v: "경량 (핵심만)" },
          { k: "비용", v: "REST 대비 70% 저렴" },
          { k: "지연", v: "낮음" },
          { k: "용도", v: "신규 서버리스 API" }
        ]
      },
      {
        name: "WebSocket API",
        dot: "#f59e0b",
        rows: [
          { k: "기능", v: "양방향 지속 연결" },
          { k: "연결 관리", v: "ConnectionId 추적" },
          { k: "지연", v: "실시간" },
          { k: "용도", v: "채팅·알림·실시간" }
        ]
      }
    ],
    tip: "💡 신규 Lambda API = HTTP API / 기존 기능 필요 = REST API / 실시간 양방향 = WebSocket"
  },
  {
    title: "자격증명 저장소: Secrets Manager vs Parameter Store",
    badge: "핵심",
    cols: 2,
    cards: [
      {
        name: "Secrets Manager",
        dot: "#7c6fff",
        rows: [
          { k: "주 용도", v: "비밀번호·API 키·토큰" },
          { k: "자동 회전", v: "내장 (RDS/Redshift/DocumentDB)" },
          { k: "과금", v: "$0.40/secret + API 호출" },
          { k: "크로스 계정", v: "Resource Policy 지원" }
        ]
      },
      {
        name: "Systems Manager Parameter Store",
        dot: "#34d399",
        rows: [
          { k: "주 용도", v: "구성 값·비밀 저장 (경량)" },
          { k: "자동 회전", v: "없음 (Lambda로 직접 구현)" },
          { k: "과금", v: "Standard 무료, Advanced $0.05" },
          { k: "크로스 계정", v: "Interface Endpoint 필요" }
        ]
      }
    ],
    tip: "💡 자동 회전 필요 = Secrets Manager / 단순 구성·비용 최소화 = Parameter Store"
  }
];

/* ─────── 시험 빈출 키워드 ─────── */
window.DVA_KEYWORDS = [
  { kw: "reduce Lambda cold start",
    services: "Provisioned Concurrency · SnapStart · Lambda Layer",
    tip: "대규모 의존성은 Layer로 분리. Java는 SnapStart" },
  { kw: "Lambda async retry · failed events",
    services: "Lambda Event Destination (권장) · DLQ (legacy)",
    tip: "신규는 Destination, SQS/SNS/Lambda/EventBridge 라우팅" },
  { kw: "throttle Lambda per function",
    services: "Reserved Concurrency",
    tip: "다운스트림 보호·긴급 중단. 실행 시간만 과금" },
  { kw: "zero downtime deployment with rollback",
    services: "CodeDeploy Blue/Green 또는 Canary + CloudWatch Alarm",
    tip: "Lambda Alias + 가중치 이동. Alarm 기반 자동 롤백" },
  { kw: "blue/green for ECS/EC2",
    services: "CodeDeploy Blue/Green + ALB listener swap",
    tip: "ECS는 deploymentController=CODE_DEPLOY" },
  { kw: "DynamoDB ordered query by new attribute",
    services: "GSI (Global Secondary Index)",
    tip: "LSI는 테이블 생성 시만. GSI는 언제든지 추가" },
  { kw: "DynamoDB strong consistency on range key",
    services: "LSI (Local Secondary Index)",
    tip: "GSI는 Eventual만 지원" },
  { kw: "DynamoDB expired items cleanup",
    services: "DynamoDB TTL",
    tip: "epoch 타임스탬프 속성 지정 → 자동 만료·삭제" },
  { kw: "cache hot DynamoDB reads microsec",
    services: "DynamoDB Accelerator (DAX)",
    tip: "Eventually consistent만. Strong은 캐시 우회" },
  { kw: "DynamoDB change event trigger",
    services: "DynamoDB Streams + Lambda",
    tip: "New/Old image 선택. 24시간 보존" },
  { kw: "API Gateway lower cost · serverless",
    services: "HTTP API (REST 대비 70% 저렴)",
    tip: "캐시·SDK 생성 등 고급 기능 필요 시 REST" },
  { kw: "API Gateway authorization JWT",
    services: "HTTP API JWT Authorizer · REST Cognito Authorizer",
    tip: "Lambda Authorizer는 커스텀 로직" },
  { kw: "API Gateway caching response",
    services: "REST API Cache (Stage 수준)",
    tip: "TTL 설정. 키에 Authorization 포함 주의" },
  { kw: "real-time bi-directional",
    services: "WebSocket API + ConnectionId",
    tip: "DynamoDB에 connection 저장해 fan-out" },
  { kw: "presigned URL for S3 upload/download",
    services: "S3 Presigned URL (boto3 generate_presigned_url)",
    tip: "URL 소유자 권한으로 생성. 만료 필수" },
  { kw: "S3 transfer acceleration global",
    services: "S3 Transfer Acceleration (CloudFront edge)",
    tip: "대용량·국제 업로드 가속" },
  { kw: "S3 large file upload failover",
    services: "Multipart Upload + S3 Transfer Manager",
    tip: "5MB~5GB 파트. 재시도·병렬" },
  { kw: "auto rotate DB credentials",
    services: "Secrets Manager + Lambda rotation",
    tip: "RDS/Redshift/DocumentDB 내장 템플릿" },
  { kw: "config values · cost minimal",
    services: "Systems Manager Parameter Store (Standard = 무료)",
    tip: "SecureString + KMS" },
  { kw: "federated identity · mobile app",
    services: "Cognito Identity Pool + User Pool",
    tip: "Identity Pool = AWS 자격증명 교환" },
  { kw: "user signup signin · OAuth",
    services: "Cognito User Pool + Hosted UI",
    tip: "SAML/OIDC/Google/FB 연동" },
  { kw: "SQS preserve order FIFO",
    services: "SQS FIFO + MessageGroupId",
    tip: "순서 + 중복 제거. 3000 msg/s(배칭)" },
  { kw: "high throughput async",
    services: "SQS Standard · Kinesis",
    tip: "Standard = 최소 1회. Kinesis = 재소비" },
  { kw: "fan-out 1:N · filter",
    services: "SNS + SQS (subscription filter policy)",
    tip: "SNS Fan-out 패턴. EventBridge로 대체 가능" },
  { kw: "event-driven cross-account",
    services: "EventBridge + Event Bus + Resource Policy",
    tip: "OAuth·API destination·Schema Registry" },
  { kw: "workflow orchestration · retry",
    services: "Step Functions (Standard/Express)",
    tip: "Express = 최대 5분·초당 10만 기동" },
  { kw: "deploy Lambda with dependencies",
    services: "Lambda Layer (최대 5개) · Container Image",
    tip: "Container는 최대 10GB 이미지" },
  { kw: "Lambda VPC access private DB",
    services: "Lambda VPC Config + 프라이빗 서브넷 + SG",
    tip: "ENI 생성 오버헤드는 최신 버전에서 해결" },
  { kw: "CloudFormation reuse across environments",
    services: "Parameter · Mapping · Pseudo Parameters",
    tip: "Parameter = 입력. Mapping = 리전/환경 키 조회" },
  { kw: "SAM local testing",
    services: "sam local invoke · sam local start-api",
    tip: "Docker 기반. 이벤트 샘플 지원" },
  { kw: "CodeBuild test report",
    services: "Report Group (buildspec reports 섹션)",
    tip: "JUnit·Cucumber·TestNG 포맷" },
  { kw: "X-Ray trace microservices",
    services: "X-Ray SDK + Tracing Header · Sampling Rule",
    tip: "AWS_XRAY_DAEMON_ADDRESS로 로컬 전송" },
  { kw: "X-Ray custom annotation searchable",
    services: "Subsegment Annotation (indexed)",
    tip: "Metadata는 검색 불가, Annotation만 검색" },
  { kw: "CloudWatch Logs query · filter",
    services: "CloudWatch Logs Insights (SQL-like)",
    tip: "fields, filter, stats 키워드" },
  { kw: "ECS task IAM permissions",
    services: "Task Role (Container) vs Task Execution Role (ECS agent)",
    tip: "Task Role = 앱 권한, Execution = 이미지 pull·로그" },
  { kw: "Lambda env var secret encryption",
    services: "KMS Customer Managed Key + Lambda 암호화 헬퍼",
    tip: "콘솔에서 encrypt in transit 체크" },
  { kw: "encryption at rest envelope",
    services: "KMS GenerateDataKey + 클라이언트 암호화",
    tip: "Data Key로 암호화 후 Encrypted Data Key 저장" }
];

/* ─────── 출제 함정 ─────── */
window.DVA_TRAPS = [
  { icon: "⚡", title: "Cold Start에 항상 Provisioned Concurrency 고르는 함정",
    wrong: "모든 함수에 Provisioned 적용 → 비용 폭발",
    right: "중요·실시간만 Provisioned, Java = <strong>SnapStart</strong>가 무료" },
  { icon: "🚦", title: "Lambda Async 실패에 DLQ 먼저 선택하는 함정",
    wrong: "DLQ는 실패 이벤트만, 컨텍스트 부족",
    right: "<strong>Event Destination</strong>이 현행 권장 (성공·실패 모두, 컨텍스트 포함)" },
  { icon: "📇", title: "DynamoDB 새 질의 속성에 LSI 고르는 함정",
    wrong: "LSI는 테이블 생성 시만 가능",
    right: "이미 운영 중이면 <strong>GSI</strong> (언제든지 추가)" },
  { icon: "⚖️", title: "DynamoDB Strong Consistency에 GSI 쓰는 함정",
    wrong: "GSI는 Eventually Consistent만 지원",
    right: "Strong 필요 = <strong>LSI</strong> 또는 기본 테이블 쿼리" },
  { icon: "🗑️", title: "DynamoDB 만료 항목 삭제에 Lambda 스케줄 쓰는 함정",
    wrong: "Lambda + EventBridge로 주기 삭제 → 비용·지연",
    right: "<strong>DynamoDB TTL</strong>로 자동 삭제 (무료)" },
  { icon: "🔁", title: "배포 롤백을 수동으로 하는 함정",
    wrong: "All-At-Once 배포 후 수동 롤백 대기",
    right: "<strong>CodeDeploy Canary/Linear + CloudWatch Alarm</strong> 자동 롤백" },
  { icon: "🌐", title: "신규 API에 REST API 기본 선택",
    wrong: "REST API = 비싸고 기능 과잉",
    right: "서버리스 신규 = <strong>HTTP API</strong> (70% 저렴, 지연 낮음)" },
  { icon: "🔐", title: "자격증명에 Parameter Store 고르고 회전 안 하는 함정",
    wrong: "자동 회전이 요구사항인데 Parameter Store 선택",
    right: "자동 회전 = <strong>Secrets Manager</strong>의 핵심 기능" },
  { icon: "💾", title: "대용량 S3 업로드에 단일 PUT 쓰는 함정",
    wrong: "5GB 이상 단일 PUT 불가, 실패 시 전체 재시도",
    right: "<strong>Multipart Upload</strong> (5MB~5GB 파트, 재시도 가능)" },
  { icon: "🎫", title: "API Gateway 보안에 IAM 대신 Lambda Authorizer 먼저 쓰는 함정",
    wrong: "단순 JWT는 Lambda Authorizer 오버엔지니어링",
    right: "HTTP API = <strong>JWT Authorizer</strong>, 복잡한 로직만 Lambda" },
  { icon: "🔍", title: "X-Ray 검색에 Metadata 쓰는 함정",
    wrong: "Metadata는 검색·필터 불가",
    right: "검색·필터 = <strong>Annotation</strong> (indexed)" },
  { icon: "🗄️", title: "Lambda VPC 연결하면 모든 게 해결된다는 함정",
    wrong: "VPC 연결만으로 S3 접근 가능하다 착각",
    right: "VPC Endpoint 또는 NAT 필요. <strong>S3 = Gateway Endpoint</strong>" },
  { icon: "📋", title: "Task Role과 Task Execution Role 혼동",
    wrong: "앱 권한을 Execution Role에 부여",
    right: "앱 코드 = <strong>Task Role</strong>, ECR pull·로그 = Task Execution Role" },
  { icon: "🔄", title: "CodeDeploy hook 없이 전·후 검증을 Lambda 안에 넣는 함정",
    wrong: "배포 스크립트에 검증 로직 섞음",
    right: "<strong>BeforeAllowTraffic / AfterAllowTraffic Hook</strong> Lambda 분리" },
  { icon: "⏱️", title: "Step Functions Standard로 고빈도 짧은 작업 처리하는 함정",
    wrong: "초당 수천 개 워크플로를 Standard로",
    right: "고빈도 짧은 작업 = <strong>Express Workflow</strong> (초당 10만 기동)" },
  { icon: "🔢", title: "SQS Standard로 순서 보장하려는 함정",
    wrong: "Standard는 at-least-once, 순서 보장 없음",
    right: "순서·중복 제거 = <strong>SQS FIFO + MessageGroupId</strong>" },
  { icon: "📦", title: "Lambda Layer 크기 제한 무시하는 함정",
    wrong: "거대한 의존성을 Layer로 압축 시도",
    right: "총 unzip 250MB 제한. 큰 이미지 = <strong>Container Image Lambda</strong> (10GB)" },
  { icon: "🔑", title: "Cognito Identity Pool과 User Pool 혼동",
    wrong: "로그인 기능만 있으면 Identity Pool 선택",
    right: "로그인·회원가입 = <strong>User Pool</strong>, AWS 자격증명 교환 = Identity Pool" }
];

/* ─────── 시나리오 결정 트리 ─────── */
window.DVA_DECISIONS = [
  {
    title: "Lambda 성능/비용 최적화",
    icon: "⚡",
    q: "주요 문제는?",
    opts: [
      { label: "Cold Start (Java 대규모)", answer: "→ <strong>SnapStart</strong> (무료)" },
      { label: "Cold Start (실시간 API)", answer: "→ <strong>Provisioned Concurrency</strong>" },
      { label: "다운스트림 DB 과부하 방지", answer: "→ <strong>Reserved Concurrency</strong>" },
      { label: "배포 패키지 크기 큼 · 공유 라이브러리", answer: "→ <strong>Lambda Layer</strong>" },
      { label: "250MB 초과 런타임", answer: "→ <strong>Container Image (ECR)</strong>" },
      { label: "VPC 내 DB 접근", answer: "→ <strong>VPC Config + Subnet + SG</strong>" }
    ]
  },
  {
    title: "DynamoDB 쿼리 패턴",
    icon: "🗄️",
    q: "요구사항은?",
    opts: [
      { label: "같은 파티션 + 다른 정렬 키", answer: "→ <strong>LSI (Local Secondary Index)</strong>" },
      { label: "다른 파티션 키로 조회", answer: "→ <strong>GSI (Global Secondary Index)</strong>" },
      { label: "초저지연 읽기 (ms → μs)", answer: "→ <strong>DAX</strong>" },
      { label: "변경 이벤트로 Lambda 실행", answer: "→ <strong>DynamoDB Streams</strong>" },
      { label: "만료 자동 삭제", answer: "→ <strong>TTL 속성</strong>" },
      { label: "ACID 다중 항목 트랜잭션", answer: "→ <strong>TransactWriteItems</strong>" }
    ]
  },
  {
    title: "API Gateway 선택",
    icon: "🌐",
    q: "API 특성은?",
    opts: [
      { label: "신규 서버리스 · 비용 최소", answer: "→ <strong>HTTP API (REST 대비 70% 저렴)</strong>" },
      { label: "캐시·사용량 계획·SDK 생성", answer: "→ <strong>REST API</strong>" },
      { label: "양방향 실시간 (채팅·알림)", answer: "→ <strong>WebSocket API</strong>" },
      { label: "JWT 인증 (신규)", answer: "→ <strong>HTTP API JWT Authorizer</strong>" },
      { label: "Cognito 사용자 풀 통합", answer: "→ <strong>REST API Cognito Authorizer</strong>" },
      { label: "커스텀 로직 인증", answer: "→ <strong>Lambda Authorizer</strong>" }
    ]
  },
  {
    title: "자격증명·구성 저장소",
    icon: "🔐",
    q: "무엇을 저장?",
    opts: [
      { label: "DB 비밀번호 · 자동 회전 필요", answer: "→ <strong>Secrets Manager</strong>" },
      { label: "API 키 · 토큰 (크로스 계정)", answer: "→ <strong>Secrets Manager + Resource Policy</strong>" },
      { label: "앱 구성 값 · 비용 최소", answer: "→ <strong>SSM Parameter Store (Standard 무료)</strong>" },
      { label: "환경별 구성 (개발/스테이징/프로덕션)", answer: "→ <strong>AWS AppConfig + Parameter Store</strong>" },
      { label: "Lambda 환경 변수 암호화", answer: "→ <strong>KMS Customer Managed Key</strong>" }
    ]
  },
  {
    title: "배포 전략",
    icon: "🚀",
    q: "리스크와 속도는?",
    opts: [
      { label: "점진적·자동 롤백", answer: "→ <strong>CodeDeploy Canary + CloudWatch Alarm</strong>" },
      { label: "일정 간격 확대", answer: "→ <strong>CodeDeploy Linear</strong>" },
      { label: "즉시 전환 (개발)", answer: "→ <strong>All-At-Once</strong>" },
      { label: "Zero-downtime 프로덕션", answer: "→ <strong>Blue/Green</strong>" },
      { label: "Lambda 가중치 이동", answer: "→ <strong>Lambda Alias + 가중치</strong>" }
    ]
  },
  {
    title: "메시징·이벤트 패턴",
    icon: "📨",
    q: "통신 요구사항은?",
    opts: [
      { label: "비동기 큐 · 순서 무관", answer: "→ <strong>SQS Standard</strong>" },
      { label: "순서 보장 · 정확히 1회", answer: "→ <strong>SQS FIFO</strong>" },
      { label: "1:N Pub/Sub · 필터링", answer: "→ <strong>SNS + Subscription Filter</strong>" },
      { label: "이벤트 라우팅 · SaaS 통합", answer: "→ <strong>EventBridge</strong>" },
      { label: "실시간 스트림 · 재소비", answer: "→ <strong>Kinesis Data Streams</strong>" },
      { label: "워크플로 오케스트레이션", answer: "→ <strong>Step Functions</strong>" }
    ]
  }
];

/* ─────── 용어집 ─────── */
window.DVA_GLOSSARY = [
  // ============ Compute/Lambda ============
  { cat: "Compute·Lambda", color: "#7c6fff", name: "AWS Lambda", short: "서버리스 함수",
    desc: "이벤트 기반 FaaS. 최대 15분·10GB 메모리. Container image(10GB) 또는 ZIP(250MB) 배포.", tags: ["핵심"] },
  { cat: "Compute·Lambda", color: "#7c6fff", name: "Lambda Alias", short: "버전 별칭",
    desc: "함수 버전의 포인터. 가중치 기반 트래픽 분할로 Canary 배포 구현.", tags: ["배포"] },
  { cat: "Compute·Lambda", color: "#7c6fff", name: "Lambda Layer", short: "공유 라이브러리",
    desc: "최대 5개 레이어 중첩. 공통 의존성·런타임 확장 재사용.", tags: ["배포"] },
  { cat: "Compute·Lambda", color: "#7c6fff", name: "Provisioned Concurrency", short: "예약 동시성",
    desc: "warm 인스턴스 사전 확보 → cold start 제거. 예약 + 실행 과금.", tags: ["성능"] },
  { cat: "Compute·Lambda", color: "#7c6fff", name: "Reserved Concurrency", short: "동시성 상한",
    desc: "함수별 동시 실행 제한. 다운스트림 보호·격리 용도. 실행 시에만 과금.", tags: ["제어"] },
  { cat: "Compute·Lambda", color: "#7c6fff", name: "SnapStart", short: "스냅샷 기반 가속",
    desc: "Java 11+, Python, .NET의 초기화 스냅샷 로드. Cold start 10배 이상 단축.", tags: ["성능"] },
  { cat: "Compute·Lambda", color: "#7c6fff", name: "Lambda Event Destination", short: "비동기 실행 결과 라우팅",
    desc: "성공·실패 이벤트를 SQS/SNS/Lambda/EventBridge로. DLQ 상위 호환.", tags: ["이벤트"] },
  { cat: "Compute·Lambda", color: "#7c6fff", name: "Lambda DLQ", short: "실패 큐",
    desc: "비동기 실패 이벤트를 SQS 또는 SNS로. legacy, Event Destination 권장.", tags: ["이벤트"] },
  { cat: "Compute·Lambda", color: "#7c6fff", name: "Lambda Environment Variables", short: "환경 변수",
    desc: "key-value. KMS로 전송·저장 암호화. 4KB 총 제한.", tags: ["구성"] },
  { cat: "Compute·Lambda", color: "#7c6fff", name: "Lambda Execution Role", short: "함수 IAM 역할",
    desc: "Lambda가 AWS 리소스 접근 시 사용. 최소 권한 원칙.", tags: ["IAM"] },
  { cat: "Compute·Lambda", color: "#7c6fff", name: "Lambda Insights", short: "고급 모니터링",
    desc: "Layer + IAM policy로 활성화. CPU, 메모리, 네트워크 상세 메트릭.", tags: ["모니터링"] },
  { cat: "Compute·Lambda", color: "#7c6fff", name: "Lambda Container Image", short: "컨테이너 런타임",
    desc: "ECR 이미지 기반. 최대 10GB. 커스텀 런타임·대규모 의존성.", tags: ["배포"] },
  { cat: "Compute·Lambda", color: "#7c6fff", name: "Lambda VPC Config", short: "VPC 접근",
    desc: "프라이빗 서브넷 · SG로 VPC 리소스 접근. ENI 자동 생성.", tags: ["네트워크"] },
  { cat: "Compute·Lambda", color: "#7c6fff", name: "Lambda@Edge", short: "CloudFront 엣지 Lambda",
    desc: "CloudFront 요청·응답 변환. 4개 이벤트 훅.", tags: ["엣지"] },

  // ============ API Gateway ============
  { cat: "API Gateway", color: "#34d399", name: "Amazon API Gateway", short: "API 관리 서비스",
    desc: "REST/HTTP/WebSocket API. 인증·쓰로틀·캐시·SDK 생성.", tags: ["핵심"] },
  { cat: "API Gateway", color: "#34d399", name: "REST API", short: "전기능 API",
    desc: "캐시·사용량 계획·SDK 생성·API Key 등 전 기능. HTTP API보다 비쌈.", tags: ["REST"] },
  { cat: "API Gateway", color: "#34d399", name: "HTTP API", short: "경량 API",
    desc: "REST API 대비 70% 저렴·낮은 지연. JWT Authorizer 기본 지원.", tags: ["HTTP"] },
  { cat: "API Gateway", color: "#34d399", name: "WebSocket API", short: "양방향 연결",
    desc: "ConnectionId 기반 실시간 통신. 채팅·알림·실시간 대시보드.", tags: ["WebSocket"] },
  { cat: "API Gateway", color: "#34d399", name: "Stage Variables", short: "단계 변수",
    desc: "dev/staging/prod 별 Lambda ARN, URL 등 분기. 환경별 구성 재사용.", tags: ["구성"] },
  { cat: "API Gateway", color: "#34d399", name: "API Gateway Cache", short: "응답 캐시",
    desc: "REST API Stage 수준. TTL·캐시 키·per-method override.", tags: ["성능"] },
  { cat: "API Gateway", color: "#34d399", name: "Usage Plan & API Key", short: "사용량 계획",
    desc: "클라이언트별 요청 한도·throttling. SaaS 구독 티어.", tags: ["과금"] },
  { cat: "API Gateway", color: "#34d399", name: "Lambda Authorizer", short: "커스텀 인증",
    desc: "Lambda 함수로 토큰 검증·정책 반환. 캐시 가능 (1시간).", tags: ["인증"] },
  { cat: "API Gateway", color: "#34d399", name: "JWT Authorizer", short: "HTTP API JWT 검증",
    desc: "HTTP API 전용. Cognito·Auth0 등 표준 JWT 검증 자동화.", tags: ["인증"] },
  { cat: "API Gateway", color: "#34d399", name: "Mock Integration", short: "모의 응답",
    desc: "백엔드 없이 정적 응답. 개발·테스트용.", tags: ["개발"] },
  { cat: "API Gateway", color: "#34d399", name: "Canary Deployment (Stage)", short: "Canary 단계",
    desc: "Stage 내 가중치 기반 신규 배포 검증. % 트래픽 할당.", tags: ["배포"] },

  // ============ DynamoDB ============
  { cat: "DynamoDB", color: "#f59e0b", name: "Amazon DynamoDB", short: "NoSQL KV·Document",
    desc: "서버리스 · 단일 자릿수 ms 지연. Partition Key + Sort Key.", tags: ["핵심"] },
  { cat: "DynamoDB", color: "#f59e0b", name: "DynamoDB LSI", short: "로컬 보조 인덱스",
    desc: "같은 파티션 키·다른 정렬 키. 테이블 생성 시만 가능. Strong 일관성.", tags: ["인덱스"] },
  { cat: "DynamoDB", color: "#f59e0b", name: "DynamoDB GSI", short: "글로벌 보조 인덱스",
    desc: "다른 파티션 키·정렬 키. 언제든지 생성. Eventually Consistent만.", tags: ["인덱스"] },
  { cat: "DynamoDB", color: "#f59e0b", name: "DAX", short: "DynamoDB 캐시",
    desc: "μs 지연. Eventually consistent만. Strong 읽기는 캐시 우회.", tags: ["캐시"] },
  { cat: "DynamoDB", color: "#f59e0b", name: "DynamoDB Streams", short: "변경 스트림",
    desc: "삽입·수정·삭제 이벤트 24시간 보존. Lambda 트리거.", tags: ["이벤트"] },
  { cat: "DynamoDB", color: "#f59e0b", name: "DynamoDB TTL", short: "자동 만료",
    desc: "epoch 타임스탬프 속성 지정 → 자동 삭제 (무료, 비동기).", tags: ["운영"] },
  { cat: "DynamoDB", color: "#f59e0b", name: "DynamoDB Transactions", short: "ACID 트랜잭션",
    desc: "TransactWriteItems/GetItems. 최대 100개 항목. 일반 쓰기 2배 용량.", tags: ["ACID"] },
  { cat: "DynamoDB", color: "#f59e0b", name: "DynamoDB PITR", short: "Point-in-time Recovery",
    desc: "지난 35일 내 초 단위 복원. 활성화 필요.", tags: ["백업"] },
  { cat: "DynamoDB", color: "#f59e0b", name: "DynamoDB Global Tables", short: "다중 리전 복제",
    desc: "Active-active 멀티 리전. 충돌 자동 해결 (last writer wins).", tags: ["글로벌"] },
  { cat: "DynamoDB", color: "#f59e0b", name: "DynamoDB On-Demand", short: "가변 용량 모드",
    desc: "자동 스케일링·요청당 과금. 예측 불가 워크로드에 최적.", tags: ["용량"] },
  { cat: "DynamoDB", color: "#f59e0b", name: "DynamoDB Provisioned", short: "고정 용량 모드",
    desc: "RCU/WCU 프로비저닝. 저렴하지만 예측 필요.", tags: ["용량"] },

  // ============ S3 & Storage ============
  { cat: "Storage", color: "#06b6d4", name: "Amazon S3", short: "객체 스토리지",
    desc: "무제한 · 11-9 내구성. 정적 웹·데이터 레이크·백업 전반.", tags: ["핵심"] },
  { cat: "Storage", color: "#06b6d4", name: "S3 Presigned URL", short: "임시 서명 URL",
    desc: "SDK generate_presigned_url. 만료 필수. 생성자 권한으로 접근.", tags: ["보안"] },
  { cat: "Storage", color: "#06b6d4", name: "S3 Multipart Upload", short: "멀티파트 업로드",
    desc: "5MB~5GB 파트. 재시도·병렬. 미완료 파트 Lifecycle 정리 권장.", tags: ["업로드"] },
  { cat: "Storage", color: "#06b6d4", name: "S3 Transfer Acceleration", short: "글로벌 업로드 가속",
    desc: "CloudFront 엣지 경유 장거리 업로드.", tags: ["성능"] },
  { cat: "Storage", color: "#06b6d4", name: "S3 Event Notification", short: "이벤트 트리거",
    desc: "객체 생성·삭제 → Lambda/SNS/SQS. 실시간 파이프라인.", tags: ["이벤트"] },
  { cat: "Storage", color: "#06b6d4", name: "S3 Lifecycle", short: "생명주기 정책",
    desc: "객체 자동 전환·삭제. IA → Glacier → Expire.", tags: ["비용"] },
  { cat: "Storage", color: "#06b6d4", name: "S3 Versioning", short: "버전 관리",
    desc: "모든 변경·삭제 버전 보존. MFA Delete 옵션.", tags: ["데이터 보호"] },
  { cat: "Storage", color: "#06b6d4", name: "S3 Encryption", short: "서버 측 암호화",
    desc: "SSE-S3 · SSE-KMS · SSE-C · CSE. KMS 키 회전 지원.", tags: ["보안"] },
  { cat: "Storage", color: "#06b6d4", name: "Amazon EBS", short: "블록 볼륨",
    desc: "gp3·io2·st1·sc1. Snapshot으로 백업. KMS 암호화.", tags: ["블록"] },
  { cat: "Storage", color: "#06b6d4", name: "Amazon EFS", short: "공유 NFS",
    desc: "여러 EC2·Lambda 동시 마운트. Lambda는 /mnt/efs 로 파일 공유.", tags: ["파일"] },

  // ============ Cognito / Identity ============
  { cat: "Identity·Cognito", color: "#ef4444", name: "Cognito User Pool", short: "사용자 디렉터리",
    desc: "회원가입·로그인·MFA. JWT 토큰 발행. Hosted UI + SAML/OIDC/Google 등.", tags: ["핵심"] },
  { cat: "Identity·Cognito", color: "#ef4444", name: "Cognito Identity Pool", short: "AWS 자격증명 교환",
    desc: "User Pool 토큰 또는 Social ID를 임시 AWS 자격증명으로. IAM Role 매핑.", tags: ["자격증명"] },
  { cat: "Identity·Cognito", color: "#ef4444", name: "JWT (ID/Access/Refresh Token)", short: "토큰 3종",
    desc: "ID=사용자 정보, Access=API 호출, Refresh=장기 갱신 (최대 10년).", tags: ["인증"] },
  { cat: "Identity·Cognito", color: "#ef4444", name: "AWS IAM", short: "접근 제어",
    desc: "User/Group/Role/Policy. STS AssumeRole로 임시 자격증명.", tags: ["IAM"] },
  { cat: "Identity·Cognito", color: "#ef4444", name: "IAM Instance Profile", short: "EC2 역할 래퍼",
    desc: "EC2가 IAM Role을 사용할 때 Instance Profile이 필요. 1:1 매핑.", tags: ["IAM"] },
  { cat: "Identity·Cognito", color: "#ef4444", name: "STS AssumeRole", short: "임시 자격증명",
    desc: "다른 계정·역할로 전환. 최대 12시간. MFA 요구 가능.", tags: ["STS"] },

  // ============ Secrets / Config ============
  { cat: "Secrets·Config", color: "#ec4899", name: "AWS Secrets Manager", short: "시크릿 관리",
    desc: "비밀번호·API 키 저장 + 자동 회전. RDS/Redshift/DocumentDB 내장 템플릿.", tags: ["핵심"] },
  { cat: "Secrets·Config", color: "#ec4899", name: "Systems Manager Parameter Store", short: "구성·시크릿 경량",
    desc: "Standard 무료 · Advanced $0.05. SecureString + KMS. 간단 구성에 최적.", tags: ["구성"] },
  { cat: "Secrets·Config", color: "#ec4899", name: "AWS AppConfig", short: "환경별 구성 배포",
    desc: "Feature Flag·환경별 롤아웃·검증 훅. CodeDeploy 스타일 배포 전략.", tags: ["구성"] },
  { cat: "Secrets·Config", color: "#ec4899", name: "AWS KMS", short: "키 관리",
    desc: "CMK·Envelope Encryption. Customer Managed Key 자동 회전 (1년).", tags: ["암호화"] },
  { cat: "Secrets·Config", color: "#ec4899", name: "KMS GenerateDataKey", short: "데이터 키 생성",
    desc: "클라이언트 측 암호화용. 평문·암호화된 Data Key 동시 반환.", tags: ["암호화"] },

  // ============ CI/CD ============
  { cat: "CI/CD", color: "#84cc16", name: "AWS CodeCommit", short: "Git 저장소",
    desc: "프라이빗 Git 리포지토리. IAM 기반 접근 제어.", tags: ["Git"] },
  { cat: "CI/CD", color: "#84cc16", name: "AWS CodeBuild", short: "빌드 서비스",
    desc: "buildspec.yml로 빌드·테스트. Report Group으로 JUnit 리포팅.", tags: ["빌드"] },
  { cat: "CI/CD", color: "#84cc16", name: "AWS CodeDeploy", short: "배포 자동화",
    desc: "EC2/ECS/Lambda 배포. Canary/Linear/All-at-once/Blue/Green.", tags: ["배포"] },
  { cat: "CI/CD", color: "#84cc16", name: "CodeDeploy Hook", short: "배포 수명주기 훅",
    desc: "BeforeAllowTraffic·AfterAllowTraffic 등 단계별 Lambda 검증.", tags: ["배포"] },
  { cat: "CI/CD", color: "#84cc16", name: "AWS CodePipeline", short: "파이프라인 오케스트레이션",
    desc: "Source → Build → Test → Deploy 단계 연결. 병렬·수동 승인.", tags: ["파이프라인"] },
  { cat: "CI/CD", color: "#84cc16", name: "AWS CodeStar", short: "개발 템플릿",
    desc: "프로젝트 시작 템플릿. CI/CD 프리셋. (Deprecated 방향)", tags: ["템플릿"] },
  { cat: "CI/CD", color: "#84cc16", name: "appspec.yml", short: "CodeDeploy 매니페스트",
    desc: "ECS = Task 정의, Lambda = 함수 버전, EC2 = 파일/훅.", tags: ["배포"] },

  // ============ IaC ============
  { cat: "IaC", color: "#8b5cf6", name: "AWS CloudFormation", short: "IaC 기본",
    desc: "YAML/JSON 템플릿. Stack·StackSet. Change Set으로 변경 미리보기.", tags: ["핵심"] },
  { cat: "IaC", color: "#8b5cf6", name: "AWS SAM", short: "서버리스 IaC",
    desc: "CloudFormation Transform. Lambda·API Gateway·DynamoDB 단순화.", tags: ["서버리스"] },
  { cat: "IaC", color: "#8b5cf6", name: "SAM CLI", short: "SAM 로컬 도구",
    desc: "sam local invoke·sam local start-api·sam deploy. Docker 기반.", tags: ["개발"] },
  { cat: "IaC", color: "#8b5cf6", name: "AWS CDK", short: "프로그래밍 IaC",
    desc: "TS/Python/Java/Go로 인프라. Construct·Stack·App. cdk bootstrap 필요.", tags: ["고급"] },
  { cat: "IaC", color: "#8b5cf6", name: "CloudFormation Parameters", short: "입력 변수",
    desc: "환경별 값 주입. Type·AllowedValues·NoEcho(암호).", tags: ["템플릿"] },
  { cat: "IaC", color: "#8b5cf6", name: "CloudFormation Mappings", short: "키 조회 테이블",
    desc: "리전·환경별 AMI/인스턴스 크기 매핑.", tags: ["템플릿"] },
  { cat: "IaC", color: "#8b5cf6", name: "CloudFormation Outputs", short: "스택 출력",
    desc: "리소스 ID·URL을 다른 스택에서 Import. Cross-stack reference.", tags: ["템플릿"] },
  { cat: "IaC", color: "#8b5cf6", name: "Custom Resource", short: "커스텀 리소스",
    desc: "Lambda-backed 커스텀 프로비저닝. 외부 API 통합·고급 로직.", tags: ["고급"] },

  // ============ Messaging / Events ============
  { cat: "Messaging·Events", color: "#0ea5e9", name: "Amazon SQS", short: "메시지 큐",
    desc: "Standard (at-least-once) / FIFO (순서·정확히 1회). Visibility Timeout.", tags: ["핵심"] },
  { cat: "Messaging·Events", color: "#0ea5e9", name: "SQS FIFO", short: "순서 보장 큐",
    desc: "MessageGroupId로 그룹별 순서. 3000 msg/s(배칭). 중복 제거 5분.", tags: ["순서"] },
  { cat: "Messaging·Events", color: "#0ea5e9", name: "SQS Visibility Timeout", short: "가시성 제한",
    desc: "메시지 수신 후 다른 컨슈머가 못 보는 기간. 기본 30초.", tags: ["동작"] },
  { cat: "Messaging·Events", color: "#0ea5e9", name: "Amazon SNS", short: "Pub/Sub",
    desc: "Topic 1:N 팬아웃. 이메일·SMS·HTTP·Lambda·SQS 구독.", tags: ["핵심"] },
  { cat: "Messaging·Events", color: "#0ea5e9", name: "SNS Filter Policy", short: "구독 필터",
    desc: "JSON 속성 기반 필터로 구독자별 메시지 선별 전달.", tags: ["필터"] },
  { cat: "Messaging·Events", color: "#0ea5e9", name: "Amazon EventBridge", short: "이벤트 버스",
    desc: "AWS·SaaS·커스텀 이벤트 라우팅. Schema Registry·Scheduler.", tags: ["이벤트"] },
  { cat: "Messaging·Events", color: "#0ea5e9", name: "EventBridge Scheduler", short: "스케줄러",
    desc: "cron·rate·one-time 스케줄. CloudWatch Events 대체.", tags: ["스케줄"] },
  { cat: "Messaging·Events", color: "#0ea5e9", name: "AWS Step Functions", short: "워크플로",
    desc: "Standard(최대 1년)·Express(최대 5분·고빈도). 상태 기반.", tags: ["워크플로"] },
  { cat: "Messaging·Events", color: "#0ea5e9", name: "Amazon Kinesis Data Streams", short: "실시간 스트림",
    desc: "샤드 기반. 다수 컨슈머 재소비. 24시간~7일 보존.", tags: ["스트리밍"] },
  { cat: "Messaging·Events", color: "#0ea5e9", name: "Kinesis Firehose", short: "스트림 적재",
    desc: "S3·Redshift·OpenSearch 자동 전달. 변환·버퍼링.", tags: ["스트리밍"] },

  // ============ Containers ============
  { cat: "Containers", color: "#14b8a6", name: "Amazon ECR", short: "컨테이너 레지스트리",
    desc: "Docker 이미지 저장. Vulnerability Scan·Lifecycle Policy·Replication.", tags: ["레지스트리"] },
  { cat: "Containers", color: "#14b8a6", name: "Amazon ECS", short: "컨테이너 오케스트레이션",
    desc: "Task·Service·Cluster. EC2 또는 Fargate launch type.", tags: ["오케스트레이션"] },
  { cat: "Containers", color: "#14b8a6", name: "ECS Task Role", short: "태스크 IAM 역할",
    desc: "컨테이너 앱이 AWS 리소스 접근 시 사용 (S3, DB 등).", tags: ["IAM"] },
  { cat: "Containers", color: "#14b8a6", name: "ECS Task Execution Role", short: "실행 역할",
    desc: "ECS agent가 ECR pull·CloudWatch Logs 쓰기 등 수행.", tags: ["IAM"] },
  { cat: "Containers", color: "#14b8a6", name: "Amazon EKS", short: "관리형 Kubernetes",
    desc: "업스트림 K8s. IRSA(IAM Roles for Service Accounts)로 파드별 IAM.", tags: ["Kubernetes"] },
  { cat: "Containers", color: "#14b8a6", name: "AWS Fargate", short: "서버리스 컨테이너",
    desc: "ECS/EKS용 서버리스 런타임. 태스크 단위 과금.", tags: ["서버리스"] },
  { cat: "Containers", color: "#14b8a6", name: "AWS App Runner", short: "컨테이너 웹앱",
    desc: "완전관리형 컨테이너 호스팅. 소스·이미지 배포 자동화.", tags: ["PaaS"] },

  // ============ Monitoring·Debug ============
  { cat: "Monitoring·Debug", color: "#f97316", name: "Amazon CloudWatch", short: "모니터링",
    desc: "Metrics·Logs·Logs Insights·Alarm·Dashboard·Synthetic·RUM.", tags: ["핵심"] },
  { cat: "Monitoring·Debug", color: "#f97316", name: "CloudWatch Logs Insights", short: "로그 쿼리",
    desc: "SQL-like. fields, filter, stats, parse. 대시보드 위젯.", tags: ["로그"] },
  { cat: "Monitoring·Debug", color: "#f97316", name: "CloudWatch Embedded Metric Format", short: "EMF",
    desc: "로그에 JSON 메트릭 임베드 → 자동 메트릭 추출. Lambda 권장.", tags: ["메트릭"] },
  { cat: "Monitoring·Debug", color: "#f97316", name: "AWS X-Ray", short: "분산 추적",
    desc: "서비스맵·세그먼트·서브세그먼트. Sampling Rule로 비용 관리.", tags: ["추적"] },
  { cat: "Monitoring·Debug", color: "#f97316", name: "X-Ray Annotation", short: "검색 가능 태그",
    desc: "Subsegment에 indexed key-value. 필터·검색 지원.", tags: ["추적"] },
  { cat: "Monitoring·Debug", color: "#f97316", name: "X-Ray Metadata", short: "부가 정보",
    desc: "indexed 아님. 상세 컨텍스트용 (검색 불가).", tags: ["추적"] },
  { cat: "Monitoring·Debug", color: "#f97316", name: "CloudTrail", short: "API 감사 로그",
    desc: "모든 AWS API 호출 기록. Management/Data/Insights Events.", tags: ["감사"] },

  // ============ Misc ============
  { cat: "기타", color: "#64748b", name: "AWS Amplify", short: "프론트엔드 + 백엔드",
    desc: "웹/모바일 앱 전체 스택. Hosting·Auth·GraphQL·Storage.", tags: ["프론트엔드"] },
  { cat: "기타", color: "#64748b", name: "AWS Elastic Beanstalk", short: "PaaS",
    desc: "코드 업로드만으로 환경 자동 구성. EC2·Auto Scaling·LB.", tags: ["PaaS"] },
  { cat: "기타", color: "#64748b", name: "Beanstalk Deployment Policies", short: "배포 정책",
    desc: "All-at-once · Rolling · Rolling with additional batch · Immutable · Traffic Splitting.", tags: ["배포"] },
  { cat: "기타", color: "#64748b", name: "AWS Cloud9", short: "클라우드 IDE",
    desc: "웹 기반 IDE. 협업·디버깅·AWS 통합 터미널. (Deprecated)", tags: ["IDE"] },
  { cat: "기타", color: "#64748b", name: "ElastiCache", short: "메모리 캐시",
    desc: "Redis(퍼시스턴스·pub/sub) / Memcached(단순 KV).", tags: ["캐시"] },
  { cat: "기타", color: "#64748b", name: "RDS Proxy", short: "RDS 커넥션 풀",
    desc: "Lambda 대량 연결 완화. 자동 failover 가속.", tags: ["DB"] },
  { cat: "기타", color: "#64748b", name: "Amazon CloudFront", short: "CDN",
    desc: "글로벌 캐시. Lambda@Edge/CloudFront Functions로 엣지 로직.", tags: ["CDN"] },
  { cat: "기타", color: "#64748b", name: "CloudFront Functions", short: "엣지 경량 함수",
    desc: "JS ES5. < 1ms · 최대 1KB 응답. 헤더 수정·URL 재작성.", tags: ["엣지"] }
];
