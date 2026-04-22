// SOA-C02/C03 (SysOps / CloudOps Engineer Associate) 전용 부가 콘텐츠
// 스키마:
//   COMPARES  : {title, badge, cols, cards: [{name, dot, rows: [{k, v}]}], tip}
//   KEYWORDS  : {kw, services, tip}
//   TRAPS     : {icon, title, wrong, right}
//   DECISIONS : {title, icon, q, opts: [{label, answer}]}
//   GLOSSARY  : {cat, color, name, short, desc, tags}

/* ─────── 헷갈리는 개념 비교 ─────── */
window.SOA_COMPARES = [
  {
    title: "모니터링: CloudWatch Metrics vs Logs vs Synthetics vs RUM",
    badge: "핵심",
    cols: 4,
    cards: [
      {
        name: "CloudWatch Metrics",
        dot: "#7c6fff",
        rows: [
          { k: "대상", v: "수치형 성능 지표" },
          { k: "해상도", v: "1분 기본, 1초(고해상도)" },
          { k: "Alarm", v: "지표 임계값 기반" },
          { k: "용도", v: "CPU/메모리/트래픽 모니터링" }
        ]
      },
      {
        name: "CloudWatch Logs",
        dot: "#34d399",
        rows: [
          { k: "대상", v: "텍스트 로그 이벤트" },
          { k: "쿼리", v: "Logs Insights (SQL-like)" },
          { k: "필터", v: "Metric Filter → Metric" },
          { k: "용도", v: "애플리케이션·VPC Flow Logs" }
        ]
      },
      {
        name: "Synthetics Canary",
        dot: "#f59e0b",
        rows: [
          { k: "대상", v: "HTTP 엔드포인트 상시 체크" },
          { k: "방식", v: "Lambda 스크립트 주기 실행" },
          { k: "결과", v: "지연·실패율 지표" },
          { k: "용도", v: "사용자 관점 외부 모니터링" }
        ]
      },
      {
        name: "CloudWatch RUM",
        dot: "#ef4444",
        rows: [
          { k: "대상", v: "실사용자 클라이언트 브라우저" },
          { k: "방식", v: "JS SDK 페이지 주입" },
          { k: "결과", v: "페이지 로드·JS 오류·세션" },
          { k: "용도", v: "실제 사용자 경험 모니터" }
        ]
      }
    ],
    tip: "💡 수치 = Metrics / 텍스트 = Logs / 서버 측 외부 체크 = Synthetics / 실사용자 = RUM"
  },
  {
    title: "Systems Manager: Run Command vs State Manager vs Automation vs Patch Manager",
    badge: "자주 출제",
    cols: 4,
    cards: [
      {
        name: "Run Command",
        dot: "#7c6fff",
        rows: [
          { k: "목적", v: "즉시 일회성 명령 실행" },
          { k: "타겟", v: "인스턴스·태그 단위" },
          { k: "주기", v: "On-demand" },
          { k: "용도", v: "애드혹 진단·재시작" }
        ]
      },
      {
        name: "State Manager",
        dot: "#34d399",
        rows: [
          { k: "목적", v: "원하는 상태 지속 유지" },
          { k: "타겟", v: "인스턴스·태그 연관" },
          { k: "주기", v: "스케줄 반복" },
          { k: "용도", v: "CloudWatch agent 배포·구성 유지" }
        ]
      },
      {
        name: "Automation",
        dot: "#f59e0b",
        rows: [
          { k: "목적", v: "복잡한 다단계 워크플로" },
          { k: "타겟", v: "AWS API 전반" },
          { k: "주기", v: "이벤트·스케줄·수동" },
          { k: "용도", v: "AMI 패치·인스턴스 재빌드" }
        ]
      },
      {
        name: "Patch Manager",
        dot: "#ec4899",
        rows: [
          { k: "목적", v: "OS 패치 스케줄 적용" },
          { k: "타겟", v: "Patch Group 태그" },
          { k: "주기", v: "Maintenance Window" },
          { k: "용도", v: "월간 보안 패치" }
        ]
      }
    ],
    tip: "💡 즉시 실행 = Run Command / 지속 상태 = State Manager / 멀티스텝 = Automation / OS 패치 = Patch Manager"
  },
  {
    title: "Auto Scaling 정책: Target Tracking vs Step vs Simple vs Scheduled",
    badge: "핵심",
    cols: 4,
    cards: [
      {
        name: "Target Tracking",
        dot: "#7c6fff",
        rows: [
          { k: "방식", v: "목표값 자동 유지" },
          { k: "예시", v: "평균 CPU 50% 유지" },
          { k: "장점", v: "가장 단순·권장" },
          { k: "용도", v: "대부분의 웹 워크로드" }
        ]
      },
      {
        name: "Step Scaling",
        dot: "#34d399",
        rows: [
          { k: "방식", v: "메트릭 구간별 다른 규모" },
          { k: "예시", v: "CPU 70%→+2, 90%→+5" },
          { k: "장점", v: "세밀한 제어" },
          { k: "용도", v: "비선형 트래픽" }
        ]
      },
      {
        name: "Simple Scaling",
        dot: "#f59e0b",
        rows: [
          { k: "방식", v: "임계값 초과 시 고정 조정" },
          { k: "예시", v: "CPU 70% → +1" },
          { k: "장점", v: "단순" },
          { k: "용도", v: "레거시 (Step 권장)" }
        ]
      },
      {
        name: "Scheduled",
        dot: "#ef4444",
        rows: [
          { k: "방식", v: "시간 기반 예약 조정" },
          { k: "예시", v: "평일 09:00 capacity=10" },
          { k: "장점", v: "예측 가능 트래픽" },
          { k: "용도", v: "출퇴근·주말 패턴" }
        ]
      }
    ],
    tip: "💡 단순 목표 = Target Tracking / 비선형 = Step / 예측 가능 = Scheduled / Simple은 지양"
  },
  {
    title: "백업·복구: AWS Backup vs RDS Snapshot vs S3 Versioning",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "AWS Backup",
        dot: "#7c6fff",
        rows: [
          { k: "대상", v: "통합 관리 (EBS, RDS, DynamoDB, EFS, S3, FSx)" },
          { k: "정책", v: "Backup Plan + Vault" },
          { k: "크로스", v: "리전·계정 복사" },
          { k: "용도", v: "중앙 집중 백업 거버넌스" }
        ]
      },
      {
        name: "서비스별 Snapshot",
        dot: "#34d399",
        rows: [
          { k: "대상", v: "RDS·EBS·EFS 개별" },
          { k: "정책", v: "수동 또는 자동 백업 기간" },
          { k: "크로스", v: "수동 복사" },
          { k: "용도", v: "단일 서비스 빠른 복구" }
        ]
      },
      {
        name: "S3 Versioning",
        dot: "#f59e0b",
        rows: [
          { k: "대상", v: "S3 객체 버전" },
          { k: "정책", v: "활성화 후 자동" },
          { k: "보호", v: "MFA Delete 옵션" },
          { k: "용도", v: "실수 삭제·랜섬웨어 복구" }
        ]
      }
    ],
    tip: "💡 멀티 서비스 통합 = AWS Backup / 단일 서비스 = Snapshot / 객체 이력 = Versioning"
  },
  {
    title: "비용 도구: Cost Explorer vs Budgets vs CUR vs Trusted Advisor",
    badge: "자주 출제",
    cols: 4,
    cards: [
      {
        name: "Cost Explorer",
        dot: "#7c6fff",
        rows: [
          { k: "목적", v: "비용 시각화·필터·예측" },
          { k: "기간", v: "최근 13개월" },
          { k: "용도", v: "Ad-hoc 분석·추세" }
        ]
      },
      {
        name: "AWS Budgets",
        dot: "#34d399",
        rows: [
          { k: "목적", v: "임계값·알림" },
          { k: "기간", v: "실시간 추적" },
          { k: "용도", v: "비용·사용량·RI 알림" }
        ]
      },
      {
        name: "Cost and Usage Report (CUR)",
        dot: "#f59e0b",
        rows: [
          { k: "목적", v: "상세 raw 사용 데이터" },
          { k: "기간", v: "시간당 세분화" },
          { k: "용도", v: "Athena·QuickSight 맞춤 분석" }
        ]
      },
      {
        name: "Trusted Advisor",
        dot: "#ec4899",
        rows: [
          { k: "목적", v: "베스트 프랙티스 검사" },
          { k: "범위", v: "비용·성능·보안·내결함성·한도" },
          { k: "용도", v: "유휴 리소스·미사용 IP 탐지" }
        ]
      }
    ],
    tip: "💡 시각화·예측 = Cost Explorer / 알림 = Budgets / 세밀 분석 = CUR + Athena / 개선 권장 = Trusted Advisor"
  },
  {
    title: "VPC 트래픽 진단: Flow Logs vs Reachability Analyzer vs Network Access Analyzer",
    badge: "자주 출제",
    cols: 3,
    cards: [
      {
        name: "VPC Flow Logs",
        dot: "#7c6fff",
        rows: [
          { k: "대상", v: "ENI 레벨 트래픽 로그" },
          { k: "출력", v: "CloudWatch Logs·S3·Firehose" },
          { k: "확인", v: "ACCEPT·REJECT 상태" },
          { k: "용도", v: "실제 트래픽 감사·보안 조사" }
        ]
      },
      {
        name: "Reachability Analyzer",
        dot: "#34d399",
        rows: [
          { k: "대상", v: "소스↔목적지 경로 분석" },
          { k: "방식", v: "정적 분석 (실트래픽 X)" },
          { k: "확인", v: "도달 가능/불가 + 차단 지점" },
          { k: "용도", v: "네트워크 설정 진단" }
        ]
      },
      {
        name: "Network Access Analyzer",
        dot: "#f59e0b",
        rows: [
          { k: "대상", v: "의도치 않은 접근 탐지" },
          { k: "방식", v: "정적 네트워크 정책 평가" },
          { k: "확인", v: "policy 위반 경로" },
          { k: "용도", v: "보안 규정 준수 감사" }
        ]
      }
    ],
    tip: "💡 실제 트래픽 = Flow Logs / 경로 가능성 = Reachability Analyzer / 정책 위반 = Network Access Analyzer"
  }
];

/* ─────── 시험 빈출 키워드 ─────── */
window.SOA_KEYWORDS = [
  { kw: "central monitoring across accounts",
    services: "CloudWatch cross-account observability · CloudWatch Logs subscription",
    tip: "Organizations 기반 중앙 대시보드" },
  { kw: "application log query",
    services: "CloudWatch Logs Insights (SQL-like)",
    tip: "fields, filter, stats 키워드. parse로 비정형 로그 파싱" },
  { kw: "trigger on log pattern",
    services: "CloudWatch Logs Metric Filter + Alarm",
    tip: "로그 패턴 → Metric → Alarm → SNS" },
  { kw: "deploy agent across instances",
    services: "Systems Manager State Manager + Run Command",
    tip: "desired state 지속 유지" },
  { kw: "patch OS regularly",
    services: "Systems Manager Patch Manager + Maintenance Window",
    tip: "Patch Group 태그로 그룹화" },
  { kw: "bastion-less shell access",
    services: "Systems Manager Session Manager",
    tip: "IAM + SSM Agent + VPC Endpoint. 로그 CloudTrail·S3" },
  { kw: "config drift detection",
    services: "AWS Config + Config Rules",
    tip: "resource 구성 변경 추적·컴플라이언스 평가" },
  { kw: "auto remediate violation",
    services: "Config Rules + Systems Manager Automation",
    tip: "Non-Compliant → SSM Automation document 실행" },
  { kw: "cost reduce · underutilized",
    services: "Trusted Advisor + Compute Optimizer",
    tip: "유휴 EC2·미사용 EIP·과대 인스턴스" },
  { kw: "cost budget alert",
    services: "AWS Budgets + SNS",
    tip: "예산 임계값 80%·100% 알림" },
  { kw: "detailed cost analysis",
    services: "Cost and Usage Report (CUR) + Athena",
    tip: "S3에 시간별 상세 데이터" },
  { kw: "auto scaling metric-driven",
    services: "Target Tracking (권장) · Step Scaling",
    tip: "평균 CPU·ALB 요청 수 기반" },
  { kw: "predictable scaling · time-based",
    services: "Scheduled Scaling Policy",
    tip: "출퇴근·주말 트래픽 사전 대응" },
  { kw: "backup across accounts",
    services: "AWS Backup + Organizations + Backup Vault cross-account",
    tip: "중앙 계정에서 모든 계정 백업 관리" },
  { kw: "WORM compliance · legal hold",
    services: "S3 Object Lock (Governance / Compliance mode)",
    tip: "Compliance mode는 root도 해제 불가" },
  { kw: "rds slow queries",
    services: "RDS Performance Insights + Enhanced Monitoring",
    tip: "DB 내부 wait 분석" },
  { kw: "rds read scale-out",
    services: "RDS Read Replica (+ Aurora Reader Endpoint)",
    tip: "읽기 전용. Aurora는 자동 로드 밸런싱" },
  { kw: "rds multi-az · failover",
    services: "RDS Multi-AZ (동기 복제) · Aurora Multi-AZ cluster",
    tip: "failover 시간 수십 초" },
  { kw: "vpc troubleshoot traffic",
    services: "VPC Flow Logs + Athena · Reachability Analyzer",
    tip: "REJECT = SG/NACL 확인" },
  { kw: "cross-region dr",
    services: "Route 53 Failover + Multi-Region replicas + AWS Backup cross-region",
    tip: "RTO/RPO에 따라 Pilot Light/Warm/Active" },
  { kw: "outbound filtering · egress",
    services: "Network Firewall · Egress-only Internet Gateway (IPv6)",
    tip: "도메인 필터·Suricata 규칙" },
  { kw: "hybrid storage nfs/smb",
    services: "AWS Storage Gateway (File/Volume/Tape)",
    tip: "File Gateway = SMB/NFS → S3" },
  { kw: "windows file share multi-az",
    services: "Amazon FSx for Windows File Server (Multi-AZ, AD 통합)",
    tip: "SMB + Windows ACL 지원" },
  { kw: "centralize log",
    services: "CloudWatch Logs + Kinesis Firehose · CloudTrail Organization Trail",
    tip: "멀티 계정 로그 중앙 집계" },
  { kw: "ssl on elb",
    services: "ACM + ALB/NLB/CloudFront Listener",
    tip: "ACM 인증서 무료·자동 갱신" },
  { kw: "static website · global",
    services: "CloudFront + S3 static hosting (+ OAI/OAC)",
    tip: "CloudFront origin에 S3. OAI → OAC 전환 권장" },
  { kw: "dns failover · health check",
    services: "Route 53 Failover routing + Health Check",
    tip: "Primary unhealthy → Secondary 엔드포인트" },
  { kw: "secret auto rotation",
    services: "Secrets Manager + rotation Lambda",
    tip: "RDS/Redshift/DocumentDB 내장 템플릿" },
  { kw: "env config centralized",
    services: "Systems Manager Parameter Store (SecureString + KMS)",
    tip: "Secrets Manager보다 저렴한 구성 저장소" },
  { kw: "cloudformation drift",
    services: "CloudFormation Drift Detection",
    tip: "스택 외부에서 수동 변경 감지" },
  { kw: "multi-account stack deploy",
    services: "CloudFormation StackSets",
    tip: "Organizations OU 단위 배포·자동 배포" },
  { kw: "service quotas monitor",
    services: "Service Quotas + CloudWatch Alarm",
    tip: "한도 사용률 80% 알림" }
];

/* ─────── 출제 함정 ─────── */
window.SOA_TRAPS = [
  { icon: "📈", title: "CPU 증가에 인스턴스 수만 늘리는 함정",
    wrong: "무조건 Target Tracking으로 인스턴스 추가",
    right: "원인 분석 먼저. <strong>Compute Optimizer</strong>로 적정 크기 추천 확인" },
  { icon: "🔔", title: "Alarm 기준을 평균값으로만 설정하는 함정",
    wrong: "평균 CPU는 극단치 탐지에 둔감",
    right: "<strong>Percentile (p95/p99)</strong> 또는 Sum/Max 조합 고려" },
  { icon: "🗂️", title: "CloudTrail Data Events를 기본 Trail로 기대하는 함정",
    wrong: "S3 객체 수준 감사가 필요한데 기본 Trail 설정",
    right: "<strong>Data Events</strong>는 기본 비활성. 별도 활성화 + 추가 비용" },
  { icon: "🔐", title: "IAM Policy만으로 S3 bucket 접근 제한하는 함정",
    wrong: "Bucket Policy·ACL·S3 Block Public Access 미설정",
    right: "<strong>IAM + Bucket Policy + Block Public Access</strong> 조합" },
  { icon: "🛡️", title: "WAF를 EC2 앞에 직접 붙이려는 함정",
    wrong: "WAF는 EC2에 직접 연결 불가",
    right: "<strong>ALB, CloudFront, API Gateway, AppSync</strong>에 연결" },
  { icon: "📡", title: "VPC Flow Logs에 REJECT만 있으면 무조건 SG 의심",
    wrong: "Security Group 탓만 고려",
    right: "SG는 stateful (응답 자동 허용). <strong>Network ACL (stateless) 아웃바운드 ephemeral ports</strong>도 확인" },
  { icon: "🌐", title: "Route 53 health check가 private 리소스 직접 확인 가능",
    wrong: "내부 NLB·프라이빗 엔드포인트 직접 체크 시도",
    right: "Route 53 health check는 퍼블릭. <strong>CloudWatch Alarm Route 53 연동</strong>으로 우회" },
  { icon: "📦", title: "EBS 볼륨에 io2 먼저 선택하는 함정",
    wrong: "기본 고IOPS는 비용 과다",
    right: "대부분 <strong>gp3</strong> 충분 (16K IOPS, 1000 MB/s 조정 가능). io2는 극고성능만" },
  { icon: "🔄", title: "RDS Multi-AZ vs Read Replica 혼동",
    wrong: "Multi-AZ로 읽기 부하 분산 기대",
    right: "Multi-AZ = 장애 대비 (동기 복제). <strong>Read Replica = 읽기 부하 분산</strong>" },
  { icon: "🗝️", title: "Secrets Manager 자동 회전을 수동 Lambda로 작성하는 함정",
    wrong: "직접 rotation Lambda 개발",
    right: "<strong>RDS/Redshift/DocumentDB는 내장 rotation template</strong>" },
  { icon: "🗺️", title: "CloudFormation에서 리소스 삭제 후에 이름 재사용 실패",
    wrong: "동일 이름 다른 리소스 생성 실패",
    right: "<strong>UpdateReplacePolicy, DeletionPolicy: Retain</strong> 또는 이름 명시 안 함" },
  { icon: "🔑", title: "EC2에 IAM User credentials를 환경변수로 주입하는 함정",
    wrong: "하드코딩된 credentials는 노출·회전 문제",
    right: "<strong>EC2 Instance Profile (IAM Role)</strong>로 임시 자격증명" },
  { icon: "🕵️", title: "Config Rule만으로 위반 자동 수정되기를 기대",
    wrong: "Config Rule은 탐지만",
    right: "탐지 = Config / 자동 수정 = <strong>Config Remediation + SSM Automation</strong>" },
  { icon: "📊", title: "EBS 디스크 사용률을 CloudWatch 기본 지표로 기대",
    wrong: "CloudWatch 기본 EC2 지표에 디스크 사용률 없음",
    right: "<strong>CloudWatch Agent 설치 + custom metric (disk_used_percent)</strong> 필요" },
  { icon: "💾", title: "EFS에 Backup 활성화 없이 복제만으로 안심하는 함정",
    wrong: "EFS replication = DR, 실수 삭제 방지 아님",
    right: "<strong>AWS Backup + 지정된 보존 기간</strong>으로 포인트 인 타임 복구" },
  { icon: "📜", title: "SSL 인증서 만료를 수동 관리하는 함정",
    wrong: "Let's Encrypt 등 외부 인증서 수동 갱신",
    right: "<strong>ACM 인증서 + ELB/CloudFront</strong>에 연결 (자동 갱신)" },
  { icon: "🚦", title: "NAT Gateway를 모든 AZ에 두는 대신 한 곳에만 두는 함정",
    wrong: "단일 AZ NAT → 타 AZ 인스턴스는 cross-AZ 비용+장애 영향",
    right: "<strong>각 AZ에 NAT Gateway</strong> (고가용성 + 비용 최적화)" },
  { icon: "💸", title: "사용량 적은 워크로드에 Provisioned 모드 RDS 고수",
    wrong: "유휴 시간에도 인스턴스 비용 발생",
    right: "<strong>Aurora Serverless v2</strong> 또는 인스턴스 중단 자동화" }
];

/* ─────── 시나리오 결정 트리 ─────── */
window.SOA_DECISIONS = [
  {
    title: "모니터링·경보 선택",
    icon: "📊",
    q: "모니터링 대상은?",
    opts: [
      { label: "수치형 지표 · 임계값 알람", answer: "→ <strong>CloudWatch Alarm</strong>" },
      { label: "로그 패턴 → 알람", answer: "→ <strong>Logs Metric Filter + Alarm</strong>" },
      { label: "로그 쿼리 · 분석", answer: "→ <strong>CloudWatch Logs Insights</strong>" },
      { label: "외부에서 엔드포인트 체크", answer: "→ <strong>CloudWatch Synthetics Canary</strong>" },
      { label: "실사용자 경험 (페이지 로드·JS 오류)", answer: "→ <strong>CloudWatch RUM</strong>" },
      { label: "교차 계정 중앙 대시보드", answer: "→ <strong>Cross-account Observability</strong>" }
    ]
  },
  {
    title: "자동화 수단 선택",
    icon: "⚙️",
    q: "자동화 시나리오는?",
    opts: [
      { label: "일회성 명령 즉시 실행", answer: "→ <strong>SSM Run Command</strong>" },
      { label: "구성 지속 유지", answer: "→ <strong>SSM State Manager</strong>" },
      { label: "복잡 다단계 워크플로", answer: "→ <strong>SSM Automation Document</strong>" },
      { label: "OS 패치 주기 적용", answer: "→ <strong>SSM Patch Manager + Maintenance Window</strong>" },
      { label: "Bastion 없이 쉘 접근", answer: "→ <strong>SSM Session Manager</strong>" },
      { label: "Config 위반 자동 수정", answer: "→ <strong>Config Remediation + SSM Automation</strong>" }
    ]
  },
  {
    title: "Auto Scaling 정책",
    icon: "📈",
    q: "스케일링 트리거는?",
    opts: [
      { label: "단일 목표 메트릭 유지", answer: "→ <strong>Target Tracking</strong>" },
      { label: "메트릭 구간별 다른 규모", answer: "→ <strong>Step Scaling</strong>" },
      { label: "시간 기반 예측 가능", answer: "→ <strong>Scheduled Scaling</strong>" },
      { label: "Lifecycle Hook (부팅·종료 전 처리)", answer: "→ <strong>ASG Lifecycle Hook</strong>" },
      { label: "준비된 Warm 인스턴스 풀", answer: "→ <strong>Warm Pool</strong>" }
    ]
  },
  {
    title: "비용 최적화 접근",
    icon: "💰",
    q: "필요한 기능은?",
    opts: [
      { label: "유휴·미사용 리소스 탐지", answer: "→ <strong>Trusted Advisor + Compute Optimizer</strong>" },
      { label: "임계값 알림", answer: "→ <strong>AWS Budgets</strong>" },
      { label: "비용 트렌드 시각화", answer: "→ <strong>Cost Explorer</strong>" },
      { label: "상세 raw 분석", answer: "→ <strong>CUR + Athena + QuickSight</strong>" },
      { label: "할인 약정 구매", answer: "→ <strong>Compute Savings Plans</strong> (유연) 또는 RI (특정)" },
      { label: "Spot 적합 워크로드", answer: "→ <strong>Spot Instance + Spot Fleet</strong>" }
    ]
  },
  {
    title: "백업·복구 전략",
    icon: "💾",
    q: "보호 대상은?",
    opts: [
      { label: "여러 서비스 통합 백업", answer: "→ <strong>AWS Backup (중앙 Plan + Vault)</strong>" },
      { label: "RDS 포인트 인 타임 복구", answer: "→ <strong>Automated Backup (PITR)</strong>" },
      { label: "S3 객체 실수 삭제 방지", answer: "→ <strong>Versioning + MFA Delete</strong>" },
      { label: "S3 WORM 컴플라이언스", answer: "→ <strong>S3 Object Lock (Compliance mode)</strong>" },
      { label: "DR 리전 간 복제", answer: "→ <strong>AWS Backup cross-region copy</strong>" },
      { label: "Glacier 장기 보존", answer: "→ <strong>S3 Lifecycle → Glacier Deep Archive</strong>" }
    ]
  },
  {
    title: "네트워크 진단",
    icon: "🌐",
    q: "진단 목적은?",
    opts: [
      { label: "실제 트래픽 로그 분석", answer: "→ <strong>VPC Flow Logs (+ Athena)</strong>" },
      { label: "경로 도달 가능성", answer: "→ <strong>VPC Reachability Analyzer</strong>" },
      { label: "정책 위반 접근 탐지", answer: "→ <strong>Network Access Analyzer</strong>" },
      { label: "DNS 해석 이슈", answer: "→ <strong>Route 53 Resolver Query Logs</strong>" },
      { label: "ELB 대상 건강성", answer: "→ <strong>Target Group Health Check + CloudWatch</strong>" }
    ]
  }
];

/* ─────── 용어집 ─────── */
window.SOA_GLOSSARY = [
  // ============ 모니터링·로그 ============
  { cat: "모니터링·로그", color: "#7c6fff", name: "Amazon CloudWatch", short: "모니터링 서비스",
    desc: "Metrics·Logs·Alarms·Dashboards·Events·Synthetics·RUM·Logs Insights 통합. SOA 시험 핵심.", tags: ["핵심"] },
  { cat: "모니터링·로그", color: "#7c6fff", name: "CloudWatch Metrics", short: "수치형 지표",
    desc: "1분 기본 해상도, 고해상도(1초). Custom metric 업로드 가능. 15개월 보존.", tags: ["메트릭"] },
  { cat: "모니터링·로그", color: "#7c6fff", name: "CloudWatch Alarms", short: "임계값 알람",
    desc: "Metric 기반 임계값 초과 시 SNS/Auto Scaling/EC2 action 트리거. Composite Alarm 지원.", tags: ["알람"] },
  { cat: "모니터링·로그", color: "#7c6fff", name: "CloudWatch Logs", short: "로그 수집·저장",
    desc: "Log Group/Stream 구조. CloudWatch Agent·Kinesis로 수집. Logs Insights로 SQL-like 쿼리.", tags: ["로그"] },
  { cat: "모니터링·로그", color: "#7c6fff", name: "CloudWatch Logs Insights", short: "로그 쿼리",
    desc: "fields, filter, stats, parse로 비정형 로그 분석. 쿼리 결과 대시보드 위젯화.", tags: ["쿼리"] },
  { cat: "모니터링·로그", color: "#7c6fff", name: "Metric Filter", short: "로그 → 메트릭",
    desc: "Log Group 내 패턴 매칭 → Custom Metric → Alarm. 에러 카운트·비즈니스 이벤트 추적.", tags: ["변환"] },
  { cat: "모니터링·로그", color: "#7c6fff", name: "CloudWatch Synthetics", short: "Canary 모니터링",
    desc: "Lambda 기반 HTTP 엔드포인트 주기 체크. 외부 관점 지연·실패율 측정.", tags: ["합성"] },
  { cat: "모니터링·로그", color: "#7c6fff", name: "CloudWatch RUM", short: "실사용자 모니터링",
    desc: "JS SDK로 페이지 로드·JS 오류·세션 수집. 실제 사용자 경험 파악.", tags: ["RUM"] },
  { cat: "모니터링·로그", color: "#7c6fff", name: "CloudWatch Agent", short: "온프레미스·EC2 에이전트",
    desc: "메모리·디스크 등 custom metric + 로그 수집. SSM Parameter Store 구성 공유.", tags: ["에이전트"] },
  { cat: "모니터링·로그", color: "#7c6fff", name: "CloudWatch Events / EventBridge", short: "이벤트 라우팅",
    desc: "AWS·SaaS·커스텀 이벤트 → Target. Scheduler·Schema Registry.", tags: ["이벤트"] },
  { cat: "모니터링·로그", color: "#7c6fff", name: "AWS X-Ray", short: "분산 추적",
    desc: "마이크로서비스 호출 흐름 시각화. Lambda·ECS·API Gateway 자동 통합.", tags: ["추적"] },
  { cat: "모니터링·로그", color: "#7c6fff", name: "AWS CloudTrail", short: "API 감사 로그",
    desc: "모든 API 호출 기록. Management/Data/Insights Events. Organization Trail로 전 계정 집계.", tags: ["감사"] },

  // ============ 자동화·운영 ============
  { cat: "자동화·운영", color: "#34d399", name: "AWS Systems Manager", short: "운영 자동화 허브",
    desc: "Run Command·State Manager·Automation·Patch Manager·Parameter Store·Session Manager·Inventory 포함.", tags: ["핵심"] },
  { cat: "자동화·운영", color: "#34d399", name: "SSM Run Command", short: "즉시 명령 실행",
    desc: "인스턴스·태그 타겟에 일회성 명령. Shell/PowerShell·Ansible 등.", tags: ["명령"] },
  { cat: "자동화·운영", color: "#34d399", name: "SSM State Manager", short: "구성 지속 유지",
    desc: "스케줄로 원하는 상태 자동 유지. CloudWatch agent 배포·도메인 가입 등.", tags: ["구성"] },
  { cat: "자동화·운영", color: "#34d399", name: "SSM Automation", short: "다단계 워크플로",
    desc: "Document로 멀티스텝 정의. AMI 업데이트·스택 패치·자동 복구.", tags: ["워크플로"] },
  { cat: "자동화·운영", color: "#34d399", name: "SSM Patch Manager", short: "OS 패치",
    desc: "Patch Baseline + Patch Group 태그 + Maintenance Window. 컴플라이언스 리포팅.", tags: ["패치"] },
  { cat: "자동화·운영", color: "#34d399", name: "SSM Session Manager", short: "Bastion 없이 쉘",
    desc: "IAM 기반 쉘 액세스. CloudTrail + S3/CW Logs 감사. VPC Endpoint로 프라이빗.", tags: ["원격"] },
  { cat: "자동화·운영", color: "#34d399", name: "SSM Parameter Store", short: "구성 값 저장소",
    desc: "Standard 무료·Advanced $0.05. SecureString + KMS. 간단 시크릿에 Secrets Manager 대안.", tags: ["구성"] },
  { cat: "자동화·운영", color: "#34d399", name: "AWS Config", short: "리소스 구성 추적",
    desc: "구성 변경 이력·컴플라이언스 평가. Config Rule + Remediation Action.", tags: ["컴플라이언스"] },
  { cat: "자동화·운영", color: "#34d399", name: "Config Conformance Pack", short: "룰 묶음 배포",
    desc: "여러 Config Rule 템플릿화. Organizations 멀티 계정 배포.", tags: ["컴플라이언스"] },
  { cat: "자동화·운영", color: "#34d399", name: "AWS Health Dashboard", short: "서비스 이벤트",
    desc: "Personal Health Dashboard로 내 계정 영향 이벤트 확인. EventBridge 연동.", tags: ["헬스"] },
  { cat: "자동화·운영", color: "#34d399", name: "AWS OpsWorks", short: "Chef/Puppet 관리",
    desc: "구성 관리 도구 호스팅. 비교적 레거시 (Systems Manager 권장).", tags: ["구성"] },

  // ============ IaC·배포 ============
  { cat: "IaC·배포", color: "#f59e0b", name: "AWS CloudFormation", short: "Infrastructure as Code",
    desc: "YAML/JSON 템플릿. Stack·StackSet(멀티 계정)·Change Set·Drift Detection.", tags: ["핵심"] },
  { cat: "IaC·배포", color: "#f59e0b", name: "CloudFormation StackSets", short: "멀티 계정 배포",
    desc: "Organizations OU 대상 자동 배포. Admin/Execution role 필요.", tags: ["멀티계정"] },
  { cat: "IaC·배포", color: "#f59e0b", name: "CloudFormation Drift Detection", short: "스택 외부 변경 탐지",
    desc: "수동 변경된 리소스 식별. IaC 일관성 확인.", tags: ["감사"] },
  { cat: "IaC·배포", color: "#f59e0b", name: "DeletionPolicy / UpdateReplacePolicy", short: "리소스 보호",
    desc: "Retain·Delete·Snapshot. DB·EBS 등 중요 리소스 보호 필수.", tags: ["보호"] },
  { cat: "IaC·배포", color: "#f59e0b", name: "AWS Elastic Beanstalk", short: "PaaS",
    desc: "코드 업로드만으로 환경 자동. Rolling·Immutable·Blue/Green 배포 정책.", tags: ["PaaS"] },
  { cat: "IaC·배포", color: "#f59e0b", name: "AWS CodeDeploy", short: "배포 자동화",
    desc: "EC2/ECS/Lambda. In-place/Blue-Green. appspec.yml + 수명주기 훅.", tags: ["배포"] },
  { cat: "IaC·배포", color: "#f59e0b", name: "Service Catalog", short: "승인된 제품",
    desc: "관리자가 CFN 템플릿 → 사용자가 셀프서비스 배포.", tags: ["거버넌스"] },

  // ============ 컴퓨팅·Auto Scaling ============
  { cat: "컴퓨팅·스케일링", color: "#10b981", name: "Amazon EC2", short: "가상 서버",
    desc: "인스턴스 패밀리 (T/M/C/R/I/P/G/Trn/Inf/X). Placement Groups.", tags: ["핵심"] },
  { cat: "컴퓨팅·스케일링", color: "#10b981", name: "Auto Scaling Group (ASG)", short: "자동 확장",
    desc: "Launch Template·Target Tracking·Step·Scheduled. Lifecycle Hook·Warm Pool.", tags: ["핵심"] },
  { cat: "컴퓨팅·스케일링", color: "#10b981", name: "ASG Lifecycle Hook", short: "수명주기 훅",
    desc: "인스턴스 부팅·종료 전 정지하여 사용자 작업 가능. EC2_INSTANCE_LAUNCHING/TERMINATING.", tags: ["훅"] },
  { cat: "컴퓨팅·스케일링", color: "#10b981", name: "ASG Warm Pool", short: "Warm 인스턴스 풀",
    desc: "미리 Stopped/Hibernated 상태로 대기. 스케일 아웃 시간 단축.", tags: ["성능"] },
  { cat: "컴퓨팅·스케일링", color: "#10b981", name: "Spot Instance", short: "Spot 인스턴스",
    desc: "최대 90% 할인. 2분 전 알림 후 종료 가능. Spot Fleet으로 혼합 운영.", tags: ["비용"] },
  { cat: "컴퓨팅·스케일링", color: "#10b981", name: "EC2 Image Builder", short: "AMI 자동 빌드",
    desc: "Pipeline으로 이미지 빌드·테스트·배포 자동화. 멀티 리전·계정 공유.", tags: ["AMI"] },
  { cat: "컴퓨팅·스케일링", color: "#10b981", name: "Compute Optimizer", short: "크기 추천",
    desc: "EC2·EBS·Lambda·ASG 사이징 ML 기반 추천.", tags: ["비용"] },
  { cat: "컴퓨팅·스케일링", color: "#10b981", name: "Savings Plans", short: "유연한 약정 할인",
    desc: "Compute(EC2/Fargate/Lambda) · EC2 Instance · SageMaker.", tags: ["비용"] },
  { cat: "컴퓨팅·스케일링", color: "#10b981", name: "Reserved Instance (RI)", short: "예약 인스턴스",
    desc: "특정 인스턴스 타입 1/3년 약정. Standard/Convertible.", tags: ["비용"] },

  // ============ 네트워킹 ============
  { cat: "네트워킹", color: "#3b82f6", name: "Amazon VPC", short: "가상 네트워크",
    desc: "Subnet·Route Table·IGW·NAT·NACL·Security Group·VPC Endpoint 구성.", tags: ["핵심"] },
  { cat: "네트워킹", color: "#3b82f6", name: "VPC Flow Logs", short: "트래픽 로그",
    desc: "ENI/Subnet/VPC 레벨. ACCEPT/REJECT 상태. CloudWatch Logs·S3·Firehose 출력.", tags: ["진단"] },
  { cat: "네트워킹", color: "#3b82f6", name: "VPC Reachability Analyzer", short: "경로 도달성",
    desc: "소스→목적지 정적 분석. 차단 지점 표시.", tags: ["진단"] },
  { cat: "네트워킹", color: "#3b82f6", name: "VPC Network Access Analyzer", short: "정책 위반 탐지",
    desc: "의도하지 않은 네트워크 접근 경로 식별.", tags: ["감사"] },
  { cat: "네트워킹", color: "#3b82f6", name: "Security Group", short: "인스턴스 방화벽",
    desc: "Stateful (응답 자동 허용). 기본 deny. 5개/ENI, 60 규칙/SG.", tags: ["방화벽"] },
  { cat: "네트워킹", color: "#3b82f6", name: "Network ACL", short: "서브넷 방화벽",
    desc: "Stateless (인바운드·아웃바운드 별도). Ephemeral Ports 허용 필요.", tags: ["방화벽"] },
  { cat: "네트워킹", color: "#3b82f6", name: "NAT Gateway", short: "아웃바운드 NAT",
    desc: "프라이빗 서브넷 → 인터넷. 각 AZ 배치로 고가용성.", tags: ["NAT"] },
  { cat: "네트워킹", color: "#3b82f6", name: "VPC Endpoint (Gateway)", short: "S3/DynamoDB 프라이빗",
    desc: "Route Table 추가. 무료. 인터넷 우회.", tags: ["프라이빗"] },
  { cat: "네트워킹", color: "#3b82f6", name: "VPC Endpoint (Interface)", short: "PrivateLink",
    desc: "ENI 기반 프라이빗 IP. AWS 서비스·SaaS. 시간당 과금.", tags: ["프라이빗"] },
  { cat: "네트워킹", color: "#3b82f6", name: "Transit Gateway", short: "VPC 허브",
    desc: "수천 VPC·VPN·DX 중앙 연결. Organizations RAM 공유.", tags: ["허브"] },
  { cat: "네트워킹", color: "#3b82f6", name: "AWS Global Accelerator", short: "글로벌 Anycast",
    desc: "TCP/UDP 글로벌 가속. Anycast IP → AWS 백본 경유.", tags: ["글로벌"] },
  { cat: "네트워킹", color: "#3b82f6", name: "Amazon CloudFront", short: "CDN",
    desc: "HTTP(S) 캐시·가속. OAI/OAC로 S3 원본 보호.", tags: ["CDN"] },
  { cat: "네트워킹", color: "#3b82f6", name: "AWS WAF", short: "웹 방화벽",
    desc: "L7 공격 차단. ALB·CloudFront·API Gateway·AppSync에 연결.", tags: ["보안"] },
  { cat: "네트워킹", color: "#3b82f6", name: "Amazon Route 53", short: "관리형 DNS",
    desc: "Failover·Latency·Geolocation·Weighted·Multi-value 라우팅. Health Check.", tags: ["DNS"] },
  { cat: "네트워킹", color: "#3b82f6", name: "Route 53 Resolver", short: "하이브리드 DNS",
    desc: "Inbound/Outbound Endpoint로 온프레미스↔AWS DNS 양방향.", tags: ["DNS"] },
  { cat: "네트워킹", color: "#3b82f6", name: "Network Firewall", short: "VPC 방화벽 IDS/IPS",
    desc: "Suricata 규칙·도메인 필터링. TGW·Inspection VPC 경로.", tags: ["보안"] },

  // ============ 스토리지 ============
  { cat: "스토리지", color: "#06b6d4", name: "Amazon S3", short: "객체 스토리지",
    desc: "무제한·11-9 내구성. 스토리지 클래스·Lifecycle·Versioning·Object Lock.", tags: ["핵심"] },
  { cat: "스토리지", color: "#06b6d4", name: "S3 Object Lock", short: "WORM",
    desc: "Governance (권한자 해제 가능) / Compliance (root도 해제 불가).", tags: ["컴플라이언스"] },
  { cat: "스토리지", color: "#06b6d4", name: "S3 Lifecycle", short: "자동 전환·만료",
    desc: "IA → Glacier → Deep Archive 자동 전환. 미완료 멀티파트 정리 권장.", tags: ["비용"] },
  { cat: "스토리지", color: "#06b6d4", name: "S3 Replication", short: "복제",
    desc: "CRR (리전 간) / SRR (리전 내). 암호화·태그·RTC(15분 SLA).", tags: ["DR"] },
  { cat: "스토리지", color: "#06b6d4", name: "Amazon EBS", short: "블록 볼륨",
    desc: "gp3·io2·st1·sc1. 스냅샷·암호화. Fast Snapshot Restore.", tags: ["블록"] },
  { cat: "스토리지", color: "#06b6d4", name: "Amazon EFS", short: "Linux 공유 NFS",
    desc: "여러 EC2·Lambda·컨테이너 동시 마운트. IA 계층 자동 이동.", tags: ["파일"] },
  { cat: "스토리지", color: "#06b6d4", name: "Amazon FSx", short: "전용 파일 시스템",
    desc: "FSx for Windows (SMB·AD)·Lustre (HPC)·ONTAP·OpenZFS.", tags: ["파일"] },
  { cat: "스토리지", color: "#06b6d4", name: "AWS Storage Gateway", short: "하이브리드 스토리지",
    desc: "File Gateway (SMB/NFS → S3)·Volume Gateway (iSCSI → S3)·Tape Gateway.", tags: ["하이브리드"] },
  { cat: "스토리지", color: "#06b6d4", name: "AWS Backup", short: "중앙 백업 관리",
    desc: "EBS·RDS·DynamoDB·EFS·S3·FSx 통합. Plan·Vault·크로스 리전/계정.", tags: ["백업"] },
  { cat: "스토리지", color: "#06b6d4", name: "Recycle Bin", short: "EBS 스냅샷 휴지통",
    desc: "EBS Snapshot·AMI 삭제 후 보존 기간 내 복원. 실수 삭제 방어.", tags: ["보호"] },

  // ============ 데이터베이스 ============
  { cat: "데이터베이스", color: "#ec4899", name: "Amazon RDS", short: "관리형 RDB",
    desc: "MySQL/PostgreSQL/MariaDB/Oracle/SQL Server/Aurora. Multi-AZ·Read Replica.", tags: ["핵심"] },
  { cat: "데이터베이스", color: "#ec4899", name: "RDS Multi-AZ", short: "동기 복제 대기",
    desc: "대기 인스턴스에 동기 복제. failover 수십 초. 읽기 분산 불가.", tags: ["가용성"] },
  { cat: "데이터베이스", color: "#ec4899", name: "RDS Read Replica", short: "읽기 복제본",
    desc: "비동기 복제. 읽기 부하 분산. 리전 간 복제 가능.", tags: ["확장"] },
  { cat: "데이터베이스", color: "#ec4899", name: "RDS Performance Insights", short: "성능 대시보드",
    desc: "DB 내부 wait 분석·SQL 톱 10. 장기 보존 옵션.", tags: ["진단"] },
  { cat: "데이터베이스", color: "#ec4899", name: "RDS Enhanced Monitoring", short: "OS 레벨 지표",
    desc: "초 단위 CPU·메모리·디스크 I/O. CloudWatch Metrics가 아닌 별도.", tags: ["모니터링"] },
  { cat: "데이터베이스", color: "#ec4899", name: "Amazon Aurora", short: "AWS 네이티브 RDB",
    desc: "MySQL/PostgreSQL 호환. 5배 빠름. Serverless v2·Global DB.", tags: ["DB"] },
  { cat: "데이터베이스", color: "#ec4899", name: "Amazon DynamoDB", short: "NoSQL",
    desc: "서버리스 KV/Document. Global Tables·Streams·TTL·PITR.", tags: ["NoSQL"] },
  { cat: "데이터베이스", color: "#ec4899", name: "ElastiCache", short: "인메모리 캐시",
    desc: "Redis (퍼시스턴스·pub/sub) / Memcached (단순 KV).", tags: ["캐시"] },

  // ============ 보안·IAM ============
  { cat: "보안·IAM", color: "#ef4444", name: "AWS IAM", short: "접근 제어",
    desc: "User/Group/Role/Policy. Role = 임시 자격증명. 최소 권한 원칙.", tags: ["핵심"] },
  { cat: "보안·IAM", color: "#ef4444", name: "IAM Instance Profile", short: "EC2 역할 래퍼",
    desc: "EC2에 IAM Role 연결. 하드코딩된 credentials 대신 임시 자격증명.", tags: ["IAM"] },
  { cat: "보안·IAM", color: "#ef4444", name: "AWS Secrets Manager", short: "시크릿 관리",
    desc: "비밀번호·API 키 자동 회전. RDS/Redshift/DocumentDB 내장 템플릿.", tags: ["시크릿"] },
  { cat: "보안·IAM", color: "#ef4444", name: "AWS KMS", short: "키 관리",
    desc: "CMK·Envelope Encryption. AWS Managed / Customer Managed. 자동 회전 (1년).", tags: ["암호화"] },
  { cat: "보안·IAM", color: "#ef4444", name: "AWS Certificate Manager (ACM)", short: "인증서",
    desc: "무료 SSL/TLS 인증서. ELB·CloudFront·API Gateway 자동 연동·갱신.", tags: ["인증서"] },
  { cat: "보안·IAM", color: "#ef4444", name: "Amazon GuardDuty", short: "위협 탐지",
    desc: "ML 기반 비정상 탐지. VPC Flow/CloudTrail/DNS 분석.", tags: ["위협탐지"] },
  { cat: "보안·IAM", color: "#ef4444", name: "AWS Security Hub", short: "보안 대시보드",
    desc: "GuardDuty/Inspector/Macie/Config 발견사항 통합. CIS/PCI 평가.", tags: ["대시보드"] },
  { cat: "보안·IAM", color: "#ef4444", name: "AWS Shield", short: "DDoS 방어",
    desc: "Standard (기본 무료) / Advanced (DRT·비용 보호).", tags: ["DDoS"] },
  { cat: "보안·IAM", color: "#ef4444", name: "AWS Organizations SCP", short: "계정 정책",
    desc: "OU/계정에 서비스·리전·액션 deny. IAM보다 상위.", tags: ["거버넌스"] },

  // ============ 비용·거버넌스 ============
  { cat: "비용·거버넌스", color: "#a855f7", name: "AWS Cost Explorer", short: "비용 시각화",
    desc: "최근 13개월 필터·예측. Savings Plan·RI 추천.", tags: ["비용"] },
  { cat: "비용·거버넌스", color: "#a855f7", name: "AWS Budgets", short: "예산 알림",
    desc: "비용·사용량·RI 활용률 임계값 알림·자동 액션.", tags: ["비용"] },
  { cat: "비용·거버넌스", color: "#a855f7", name: "AWS Cost and Usage Report (CUR)", short: "상세 비용 raw",
    desc: "시간당 세부 S3 저장. Athena/QuickSight 분석.", tags: ["비용"] },
  { cat: "비용·거버넌스", color: "#a855f7", name: "AWS Trusted Advisor", short: "베스트 프랙티스",
    desc: "비용·성능·보안·내결함성·한도 5개 카테고리. Business+ 플랜으로 전체.", tags: ["검토"] },
  { cat: "비용·거버넌스", color: "#a855f7", name: "AWS Service Quotas", short: "한도 관리",
    desc: "리전·계정 서비스 한도 조회·요청·CloudWatch 알람.", tags: ["한도"] },
  { cat: "비용·거버넌스", color: "#a855f7", name: "AWS Well-Architected Tool", short: "아키텍처 리뷰",
    desc: "6개 기둥 자가진단·개선 계획.", tags: ["설계"] }
];
