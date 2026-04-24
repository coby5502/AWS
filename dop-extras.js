// DOP-C02 (AWS Certified DevOps Engineer - Professional) 전용 부가 콘텐츠
window.DOP_COMPARES = [
  { title: "CI/CD 파이프라인 구성", badge: "핵심", cols: 4,
    cards: [
      { name: "CodeCommit", dot: "#7c6fff", rows: [{k:"역할",v:"Git 저장소"},{k:"통합",v:"IAM 권한"},{k:"용도",v:"소스 관리"}] },
      { name: "CodeBuild", dot: "#34d399", rows: [{k:"역할",v:"빌드·테스트"},{k:"구성",v:"buildspec.yml"},{k:"용도",v:"컴파일·단위 테스트"}] },
      { name: "CodeDeploy", dot: "#f59e0b", rows: [{k:"역할",v:"배포 자동화"},{k:"대상",v:"EC2·Lambda·ECS"},{k:"전략",v:"Blue/Green·Canary·Linear"}] },
      { name: "CodePipeline", dot: "#ec4899", rows: [{k:"역할",v:"오케스트레이션"},{k:"단계",v:"Source→Build→Test→Deploy"},{k:"용도",v:"CI/CD 전체 연결"}] }
    ],
    tip: "💡 Git = CodeCommit / 빌드 = CodeBuild / 배포 = CodeDeploy / 연결 = CodePipeline"
  },
  { title: "배포 전략 비교", badge: "자주 출제", cols: 4,
    cards: [
      { name: "In-Place Rolling", dot: "#7c6fff", rows: [{k:"방식",v:"기존 인스턴스 단계적 교체"},{k:"DT",v:"짧음"},{k:"롤백",v:"재배포 필요"},{k:"용도",v:"단순·저비용"}] },
      { name: "Blue/Green", dot: "#34d399", rows: [{k:"방식",v:"신규 환경 만들어 스왑"},{k:"DT",v:"0"},{k:"롤백",v:"즉시 스왑"},{k:"용도",v:"중요·무중단"}] },
      { name: "Canary", dot: "#f59e0b", rows: [{k:"방식",v:"일부 트래픽 우선"},{k:"DT",v:"0"},{k:"롤백",v:"Alarm 자동"},{k:"용도",v:"리스크 점진 검증"}] },
      { name: "Immutable", dot: "#ef4444", rows: [{k:"방식",v:"Beanstalk: 새 ASG 교체"},{k:"DT",v:"낮음"},{k:"롤백",v:"이전 ASG 유지"},{k:"용도",v:"완전 격리 배포"}] }
    ],
    tip: "💡 리스크 감소 = Canary+Alarm / 무중단 = Blue/Green / 완전 격리 = Immutable"
  },
  { title: "IaC 도구 비교", badge: "핵심", cols: 3,
    cards: [
      { name: "CloudFormation", dot: "#7c6fff", rows: [{k:"언어",v:"YAML/JSON"},{k:"범위",v:"모든 AWS"},{k:"재사용",v:"Nested·StackSet"}] },
      { name: "AWS SAM", dot: "#34d399", rows: [{k:"언어",v:"YAML"},{k:"범위",v:"서버리스 특화"},{k:"도구",v:"sam local·sam deploy"}] },
      { name: "AWS CDK", dot: "#f59e0b", rows: [{k:"언어",v:"TS/Python/Java/Go"},{k:"범위",v:"모든 AWS"},{k:"추상화",v:"Construct 높음"}] }
    ],
    tip: "💡 범용 IaC = CloudFormation / Lambda 중심 = SAM / 프로그래밍 IaC = CDK"
  },
  { title: "모니터링·관측", badge: "자주 출제", cols: 4,
    cards: [
      { name: "CloudWatch Metrics", dot: "#7c6fff", rows: [{k:"대상",v:"수치형"},{k:"해상도",v:"1분/1초"},{k:"Alarm",v:"임계값"}] },
      { name: "Logs Insights", dot: "#34d399", rows: [{k:"대상",v:"로그 쿼리"},{k:"언어",v:"SQL-like"},{k:"용도",v:"이상 탐지"}] },
      { name: "X-Ray", dot: "#f59e0b", rows: [{k:"대상",v:"분산 추적"},{k:"통합",v:"SDK·Lambda·ECS"},{k:"용도",v:"지연 병목"}] },
      { name: "Container Insights", dot: "#ec4899", rows: [{k:"대상",v:"ECS·EKS·Fargate"},{k:"지표",v:"pod·task·node"},{k:"용도",v:"컨테이너 모니터링"}] }
    ],
    tip: "💡 수치 = Metrics / 로그 = Insights / 추적 = X-Ray / 컨테이너 = Container Insights"
  },
  { title: "인스턴스/컨테이너 관리", badge: "자주 출제", cols: 3,
    cards: [
      { name: "SSM Patch Manager", dot: "#7c6fff", rows: [{k:"대상",v:"EC2 OS 패치"},{k:"스케줄",v:"Maintenance Window"}] },
      { name: "EC2 Image Builder", dot: "#34d399", rows: [{k:"대상",v:"AMI 파이프라인"},{k:"기능",v:"빌드·테스트·배포 자동화"}] },
      { name: "ECR Lifecycle Policy", dot: "#f59e0b", rows: [{k:"대상",v:"컨테이너 이미지"},{k:"기능",v:"오래된 이미지 자동 삭제"}] }
    ],
    tip: "💡 OS 패치 = Patch Manager / AMI 자동화 = Image Builder / 이미지 정리 = ECR Lifecycle"
  }
];

window.DOP_KEYWORDS = [
  { kw: "zero downtime deployment", services: "CodeDeploy Blue/Green 또는 Canary", tip: "Lambda Alias 가중치·ECS Blue/Green" },
  { kw: "automatic rollback on alarm", services: "CodeDeploy Canary + CloudWatch Alarm", tip: "배포 그룹 alarm 설정" },
  { kw: "multi-account stack deployment", services: "CloudFormation StackSets (+ Organizations)", tip: "OU 자동 배포 가능" },
  { kw: "drift detection", services: "CloudFormation Drift Detection", tip: "수동 변경된 리소스 식별" },
  { kw: "patch ec2 across accounts", services: "Systems Manager Patch Manager + Quick Setup", tip: "Maintenance Window로 스케줄" },
  { kw: "bootstrap ec2 with config", services: "SSM State Manager + Association", tip: "desired state 지속 유지" },
  { kw: "monitor application errors", services: "CloudWatch Logs Insights + Metric Filter + Alarm", tip: "패턴 감지 → 지표 → 알람" },
  { kw: "distributed trace microservices", services: "AWS X-Ray + Sampling Rule", tip: "Lambda·ECS·ALB 자동 통합" },
  { kw: "central logging multi-account", services: "CloudWatch Logs Subscription → Kinesis Firehose → S3", tip: "또는 Logs cross-account stream" },
  { kw: "detect non-compliant resource · auto remediate", services: "AWS Config Rule + Remediation Action (SSM Automation)", tip: "자동 수정 Action 연결" },
  { kw: "continuous scan for vulnerabilities", services: "Amazon Inspector (EC2/ECR/Lambda)", tip: "Agent 불필요. 지속 스캔" },
  { kw: "build container image pipeline", services: "CodePipeline + CodeBuild + ECR + EKS/ECS deploy", tip: "Docker in CodeBuild" },
  { kw: "lambda blue/green deployment", services: "CodeDeploy + Lambda Alias + Canary/Linear", tip: "traffic shifting 가중치 증가" },
  { kw: "ecs service update strategy", services: "CodeDeploy Blue/Green + ALB listener swap", tip: "deploymentController=CODE_DEPLOY" },
  { kw: "scheduled scaling · predictable traffic", services: "ASG Scheduled Action + Target Tracking 조합", tip: "예측 가능 + 실시간 보정" },
  { kw: "custom metric from app", services: "CloudWatch Embedded Metric Format (EMF) 또는 PutMetricData", tip: "Lambda EMF가 효율적" },
  { kw: "health check grace period", services: "ASG Health Check Grace Period", tip: "초기 부팅 실패 오인 방지" },
  { kw: "cross-account artifact sharing", services: "S3 Bucket Policy + KMS key policy + AssumeRole", tip: "CodeArtifact도 옵션" },
  { kw: "signed container images", services: "AWS Signer + CodeBuild + ECR", tip: "Provenance 검증" },
  { kw: "secrets in pipeline", services: "Secrets Manager + CodeBuild environment (secrets-manager:)", tip: "Parameter Store (ssm:) 도 지원" },
  { kw: "rollback cloudformation on failure", services: "ChangeSet + Stack Policy + Rollback Triggers (CloudWatch Alarm)", tip: "Alarm 기반 자동 롤백" },
  { kw: "track deployment metrics", services: "CodeDeploy + CloudWatch Events → EventBridge", tip: "배포 성공/실패 이벤트" },
  { kw: "iam least privilege deployment role", services: "CloudFormation Service Role + IAM Access Analyzer", tip: "Access Analyzer로 과도 권한 탐지" },
  { kw: "gitops style k8s deployment", services: "EKS + Flux/ArgoCD + GitHub Actions", tip: "Git = 단일 진실 소스" },
  { kw: "auto remediate s3 public exposure", services: "Config Rule (s3-bucket-public-read-prohibited) + SSM Automation", tip: "자동 block public access" },
  { kw: "feature flag toggle", services: "AWS AppConfig + Lambda/ECS integration", tip: "검증·배포 전략 내장" },
  { kw: "canary performance test", services: "CloudWatch Synthetics Canary + Alarm", tip: "Lambda로 주기 체크" },
  { kw: "operational runbook automation", services: "SSM Automation Document + OpsCenter", tip: "OpsItem 자동 생성·처리" },
  { kw: "identify ec2 oom · disk full", services: "CloudWatch Agent + disk_used_percent/mem_used_percent", tip: "기본 지표에 없어서 Agent 필수" }
];

window.DOP_TRAPS = [
  { icon: "🔄", title: "무중단 배포에 Rolling 먼저 고르는 함정", wrong: "짧지만 DT 존재·용량 감소", right: "진짜 무중단 = <strong>Blue/Green</strong> 또는 <strong>Canary</strong>" },
  { icon: "📋", title: "Config Rule만으로 자동 수정 기대", wrong: "Config Rule은 탐지만", right: "탐지 = Config / 수정 = <strong>Remediation Action + SSM Automation</strong>" },
  { icon: "📊", title: "기본 CloudWatch가 디스크·메모리 지표 제공한다는 오해", wrong: "기본 EC2는 CPU·네트워크만", right: "<strong>CloudWatch Agent</strong>로 custom metric 수집" },
  { icon: "🎯", title: "Patch Manager가 모든 인스턴스 자동 패치 기대", wrong: "Patch Group 태그 + Maintenance Window 필요", right: "<strong>태그 + Baseline + Window</strong> 3종 세트" },
  { icon: "🔐", title: "CodeBuild 환경변수에 시크릿 평문 저장", wrong: "평문은 로그 노출 위험", right: "<strong>Secrets Manager / SSM Parameter Store</strong> reference" },
  { icon: "📦", title: "CloudFormation StackSets 관리자 계정 권한 누락", wrong: "자동 배포 실패", right: "<strong>AWSCloudFormationStackSetAdministrationRole + ExecutionRole</strong>" },
  { icon: "🚀", title: "Lambda 가중치 이동을 CodeDeploy 없이 수동", wrong: "수동 관리 번거로움", right: "<strong>CodeDeploy Canary/Linear + alias</strong> 자동화" },
  { icon: "🛑", title: "배포 실패 시 ASG 수동 롤백", wrong: "수동 복구 시간", right: "<strong>CodeDeploy Rollback on failure/alarm</strong>" },
  { icon: "📈", title: "배포 후 트래픽 급증에 Simple Scaling", wrong: "반응 느림", right: "<strong>Target Tracking + Predictive Scaling</strong>" },
  { icon: "🔍", title: "로그 이상을 수동 grep으로 확인", wrong: "대량 로그 처리 어려움", right: "<strong>Metric Filter + Alarm</strong> 자동 탐지" },
  { icon: "🗄️", title: "ECR 이미지 무제한 보관", wrong: "스토리지 비용 증가", right: "<strong>ECR Lifecycle Policy</strong>로 자동 정리" },
  { icon: "🔑", title: "EC2에 IAM User credentials 하드코딩", wrong: "유출·회전 문제", right: "<strong>EC2 Instance Profile (IAM Role)</strong>" },
  { icon: "🧪", title: "단위 테스트 없이 프로덕션 배포", wrong: "회귀 위험 큼", right: "<strong>CodeBuild test phase + Report Group</strong>" },
  { icon: "📡", title: "Container 로그를 파일로만 저장", wrong: "수집·검색 어려움", right: "<strong>awslogs driver</strong>로 CloudWatch Logs 전송" },
  { icon: "⏳", title: "Health Check Grace Period 설정 안함", wrong: "부팅 중 인스턴스 비정상 판정", right: "<strong>ASG Grace Period (기본 300초)</strong> 조정" },
  { icon: "🌐", title: "StackSet을 수동으로 계정마다 배포", wrong: "관리 부담 큼", right: "<strong>Service-Managed StackSet + Organizations</strong> 자동 배포" },
  { icon: "🔎", title: "CloudFormation 실패 원인을 CloudTrail로 찾는 함정", wrong: "CloudTrail은 API 호출만", right: "<strong>CloudFormation Events + Console Error</strong>" }
];

window.DOP_DECISIONS = [
  { title: "배포 전략 선택", icon: "🚀", q: "요구사항은?",
    opts: [
      { label: "무중단 + 즉시 롤백", answer: "→ <strong>CodeDeploy Blue/Green</strong>" },
      { label: "점진 검증 + 자동 롤백", answer: "→ <strong>CodeDeploy Canary + CloudWatch Alarm</strong>" },
      { label: "간격 증가 배포", answer: "→ <strong>CodeDeploy Linear</strong>" },
      { label: "Beanstalk 무중단", answer: "→ <strong>Immutable / Rolling with additional batch</strong>" },
      { label: "Lambda 가중치 이동", answer: "→ <strong>Lambda Alias + CodeDeploy</strong>" }
    ]},
  { title: "CI/CD 파이프라인", icon: "🔄", q: "단계는?",
    opts: [
      { label: "Git 저장소", answer: "→ <strong>CodeCommit / GitHub Actions</strong>" },
      { label: "빌드·테스트", answer: "→ <strong>CodeBuild + buildspec.yml</strong>" },
      { label: "배포 자동화", answer: "→ <strong>CodeDeploy</strong>" },
      { label: "전체 오케스트레이션", answer: "→ <strong>CodePipeline</strong>" },
      { label: "컨테이너 레지스트리", answer: "→ <strong>Amazon ECR + Lifecycle Policy</strong>" },
      { label: "아티팩트 저장소", answer: "→ <strong>CodeArtifact (npm/Maven/pip)</strong>" }
    ]},
  { title: "IaC 선택", icon: "🏗️", q: "시나리오는?",
    opts: [
      { label: "범용 AWS 리소스", answer: "→ <strong>CloudFormation</strong>" },
      { label: "Lambda 중심 서버리스", answer: "→ <strong>AWS SAM</strong>" },
      { label: "프로그래밍 언어 선호", answer: "→ <strong>AWS CDK (TS/Python)</strong>" },
      { label: "멀티 계정 배포", answer: "→ <strong>CloudFormation StackSets + Organizations</strong>" },
      { label: "구성 변경 탐지", answer: "→ <strong>CloudFormation Drift Detection</strong>" }
    ]},
  { title: "모니터링·디버깅", icon: "📊", q: "문제 유형은?",
    opts: [
      { label: "애플리케이션 에러 로그", answer: "→ <strong>CloudWatch Logs Insights + Metric Filter</strong>" },
      { label: "분산 추적·지연", answer: "→ <strong>AWS X-Ray</strong>" },
      { label: "컨테이너 지표", answer: "→ <strong>CloudWatch Container Insights</strong>" },
      { label: "외부 엔드포인트 체크", answer: "→ <strong>CloudWatch Synthetics</strong>" },
      { label: "실사용자 경험", answer: "→ <strong>CloudWatch RUM</strong>" },
      { label: "디스크·메모리 EC2", answer: "→ <strong>CloudWatch Agent + Custom Metrics</strong>" }
    ]},
  { title: "구성·시크릿 관리", icon: "🔐", q: "요구는?",
    opts: [
      { label: "DB 비밀번호 자동 회전", answer: "→ <strong>Secrets Manager</strong>" },
      { label: "앱 구성 값 (무료)", answer: "→ <strong>SSM Parameter Store (Standard)</strong>" },
      { label: "Feature Flag 배포", answer: "→ <strong>AWS AppConfig</strong>" },
      { label: "크로스 계정 공유", answer: "→ <strong>Secrets Manager + Resource Policy</strong>" }
    ]},
  { title: "자동 복구·셀프힐링", icon: "🛠️", q: "대상은?",
    opts: [
      { label: "Config 위반 자동 수정", answer: "→ <strong>Config Remediation + SSM Automation</strong>" },
      { label: "CloudWatch Alarm → 자동 조치", answer: "→ <strong>EventBridge → Lambda/SSM Automation</strong>" },
      { label: "EC2 문제 자동 복구", answer: "→ <strong>CloudWatch Alarm + EC2 Auto Recovery</strong>" },
      { label: "운영 이슈 티켓화", answer: "→ <strong>SSM OpsCenter + EventBridge</strong>" }
    ]}
];

window.DOP_GLOSSARY = [
  { cat: "CI/CD", color: "#7c6fff", name: "AWS CodeCommit", short: "Git 저장소", desc: "프라이빗 Git. IAM 권한·CloudTrail.", tags: ["핵심"] },
  { cat: "CI/CD", color: "#7c6fff", name: "AWS CodeBuild", short: "빌드 서비스", desc: "buildspec.yml. Docker/Lambda 빌드. Report Group.", tags: ["핵심"] },
  { cat: "CI/CD", color: "#7c6fff", name: "AWS CodeDeploy", short: "배포 자동화", desc: "EC2/Lambda/ECS. In-place/Blue-Green/Canary/Linear.", tags: ["핵심"] },
  { cat: "CI/CD", color: "#7c6fff", name: "AWS CodePipeline", short: "파이프라인", desc: "Source→Build→Test→Deploy. 수동 승인 단계 가능.", tags: ["핵심"] },
  { cat: "CI/CD", color: "#7c6fff", name: "AWS CodeArtifact", short: "패키지 저장소", desc: "npm/Maven/pip/NuGet 관리. 크로스 계정.", tags: ["패키지"] },
  { cat: "CI/CD", color: "#7c6fff", name: "Amazon ECR", short: "컨테이너 레지스트리", desc: "Image Scan·Lifecycle Policy·Replication·Pull-through cache.", tags: ["컨테이너"] },
  { cat: "CI/CD", color: "#7c6fff", name: "AWS Signer", short: "이미지 서명", desc: "Container·Lambda code signing. Provenance 검증.", tags: ["서명"] },
  { cat: "CI/CD", color: "#7c6fff", name: "appspec.yml", short: "CodeDeploy 매니페스트", desc: "ECS=Task, Lambda=Function, EC2=Files+Hooks.", tags: ["배포"] },

  { cat: "IaC·배포", color: "#34d399", name: "AWS CloudFormation", short: "IaC", desc: "Stack·StackSet·Change Set·Drift Detection·Rollback Triggers.", tags: ["핵심"] },
  { cat: "IaC·배포", color: "#34d399", name: "CloudFormation StackSets", short: "멀티 계정", desc: "Self-Managed / Service-Managed (Organizations).", tags: ["멀티"] },
  { cat: "IaC·배포", color: "#34d399", name: "AWS SAM", short: "서버리스 IaC", desc: "CloudFormation Transform. sam local/package/deploy/sync.", tags: ["서버리스"] },
  { cat: "IaC·배포", color: "#34d399", name: "AWS CDK", short: "프로그래밍 IaC", desc: "TypeScript/Python/Java/Go. Construct·Stack·App.", tags: ["고급"] },
  { cat: "IaC·배포", color: "#34d399", name: "AWS Elastic Beanstalk", short: "PaaS", desc: "All-at-once/Rolling/Immutable/Blue-Green 배포.", tags: ["PaaS"] },
  { cat: "IaC·배포", color: "#34d399", name: "AWS OpsWorks", short: "Chef/Puppet", desc: "구성 관리 도구. Systems Manager가 후속.", tags: ["구성"] },
  { cat: "IaC·배포", color: "#34d399", name: "AWS Service Catalog", short: "승인된 제품", desc: "관리자 정의 CFN 템플릿 셀프서비스.", tags: ["거버넌스"] },

  { cat: "운영·자동화", color: "#f59e0b", name: "AWS Systems Manager", short: "운영 허브", desc: "Run Command·State Manager·Automation·Patch·OpsCenter·Session Manager.", tags: ["핵심"] },
  { cat: "운영·자동화", color: "#f59e0b", name: "SSM Patch Manager", short: "OS 패치", desc: "Baseline + Patch Group + Maintenance Window.", tags: ["패치"] },
  { cat: "운영·자동화", color: "#f59e0b", name: "SSM State Manager", short: "지속 구성", desc: "Association으로 원하는 상태 유지.", tags: ["구성"] },
  { cat: "운영·자동화", color: "#f59e0b", name: "SSM Automation", short: "워크플로", desc: "Document로 다단계. Config Remediation 연동.", tags: ["자동화"] },
  { cat: "운영·자동화", color: "#f59e0b", name: "SSM OpsCenter", short: "운영 대시보드", desc: "OpsItem 생성·SOP·자동 해결.", tags: ["Ops"] },
  { cat: "운영·자동화", color: "#f59e0b", name: "EC2 Image Builder", short: "AMI 자동 빌드", desc: "Pipeline·Recipe·Test·Distribute.", tags: ["AMI"] },
  { cat: "운영·자동화", color: "#f59e0b", name: "AWS AppConfig", short: "Feature Flag", desc: "환경별 구성 배포 + 검증 훅.", tags: ["Flag"] },

  { cat: "모니터링·로그", color: "#06b6d4", name: "Amazon CloudWatch", short: "모니터링", desc: "Metrics·Logs·Alarms·Dashboards·Events·Synthetics·RUM·Insights.", tags: ["핵심"] },
  { cat: "모니터링·로그", color: "#06b6d4", name: "CloudWatch Logs Insights", short: "로그 쿼리", desc: "SQL-like. fields/filter/stats/parse.", tags: ["쿼리"] },
  { cat: "모니터링·로그", color: "#06b6d4", name: "CloudWatch EMF", short: "임베디드 메트릭", desc: "로그에 JSON 메트릭 임베드 → 자동 추출.", tags: ["지표"] },
  { cat: "모니터링·로그", color: "#06b6d4", name: "CloudWatch Container Insights", short: "컨테이너 지표", desc: "ECS·EKS·Fargate pod/task/node 메트릭.", tags: ["컨테이너"] },
  { cat: "모니터링·로그", color: "#06b6d4", name: "CloudWatch Agent", short: "에이전트", desc: "custom metric (disk/memory) + 로그 수집.", tags: ["Agent"] },
  { cat: "모니터링·로그", color: "#06b6d4", name: "CloudWatch Synthetics", short: "Canary", desc: "Lambda 기반 엔드포인트 주기 체크.", tags: ["합성"] },
  { cat: "모니터링·로그", color: "#06b6d4", name: "AWS X-Ray", short: "분산 추적", desc: "Segment·Subsegment·Sampling·Annotation.", tags: ["추적"] },
  { cat: "모니터링·로그", color: "#06b6d4", name: "Amazon DevOps Guru", short: "ML 이상 탐지", desc: "리소스 메트릭 이상 패턴 자동 탐지.", tags: ["ML"] },
  { cat: "모니터링·로그", color: "#06b6d4", name: "Amazon Managed Grafana / Prometheus", short: "오픈소스 모니터링", desc: "Grafana 대시보드 + Prometheus 메트릭.", tags: ["오픈소스"] },

  { cat: "보안·거버넌스", color: "#ef4444", name: "AWS Config", short: "구성 추적", desc: "Rule + Remediation Action. Conformance Pack.", tags: ["핵심"] },
  { cat: "보안·거버넌스", color: "#ef4444", name: "AWS CloudTrail", short: "API 감사", desc: "Management/Data/Insights. Organization Trail.", tags: ["감사"] },
  { cat: "보안·거버넌스", color: "#ef4444", name: "AWS Organizations SCP", short: "계정 정책", desc: "OU/계정 deny 정책. IAM 상위.", tags: ["거버넌스"] },
  { cat: "보안·거버넌스", color: "#ef4444", name: "AWS Control Tower", short: "Landing Zone", desc: "멀티 계정 자동 설정. Guardrail.", tags: ["멀티"] },
  { cat: "보안·거버넌스", color: "#ef4444", name: "Amazon Inspector", short: "취약점 스캔", desc: "EC2/ECR/Lambda 자동 CVE.", tags: ["CVE"] },
  { cat: "보안·거버넌스", color: "#ef4444", name: "AWS Secrets Manager", short: "시크릿", desc: "DB 자격증명 자동 회전.", tags: ["시크릿"] },

  { cat: "컴퓨팅·배포", color: "#ec4899", name: "Auto Scaling Group", short: "자동 확장", desc: "Target/Step/Scheduled·Lifecycle Hook·Warm Pool.", tags: ["핵심"] },
  { cat: "컴퓨팅·배포", color: "#ec4899", name: "Amazon ECS/EKS/Fargate", short: "컨테이너", desc: "ECS Task/Service · EKS Pod · Fargate 서버리스.", tags: ["컨테이너"] },
  { cat: "컴퓨팅·배포", color: "#ec4899", name: "AWS Lambda", short: "서버리스", desc: "Alias + Version으로 Blue/Green 배포.", tags: ["서버리스"] },
  { cat: "컴퓨팅·배포", color: "#ec4899", name: "AWS Step Functions", short: "워크플로", desc: "Standard/Express. 배포 오케스트레이션.", tags: ["워크플로"] },
  { cat: "컴퓨팅·배포", color: "#ec4899", name: "Amazon EventBridge", short: "이벤트 버스", desc: "CodeDeploy/CodePipeline 이벤트 라우팅.", tags: ["이벤트"] }
];
