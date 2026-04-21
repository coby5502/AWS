// SAP-C02 전용 부가 콘텐츠: 헷갈리는 개념 / 키워드 / 함정 / 결정트리 / 용어집
// 스키마:
//   COMPARES  : {title, badge, cols, cards: [{name, dot, rows: [{k, v}]}], tip}
//   KEYWORDS  : {kw, services, tip}
//   TRAPS     : {icon, title, wrong, right}
//   DECISIONS : {title, icon, q, opts: [{label, answer}]}
//   GLOSSARY  : {cat, color, name, short, desc, tags}
// AWS 서비스·기술 용어는 원어 유지

/* ─────── 헷갈리는 개념 비교 ─────── */
window.SAP_COMPARES = [
  {
    title: "다중 계정 관리: Organizations vs Control Tower vs Landing Zone",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "AWS Organizations",
        dot: "#7c6fff",
        rows: [
          { k: "목적", v: "계정 통합 · SCP 정책 · 통합 결제" },
          { k: "수동성", v: "OU/계정을 직접 설계" },
          { k: "거버넌스", v: "SCP로 서비스·리전 제한" },
          { k: "가드레일", v: "없음" }
        ]
      },
      {
        name: "Control Tower",
        dot: "#34d399",
        rows: [
          { k: "목적", v: "멀티 계정 환경 자동 구축" },
          { k: "수동성", v: "Blueprint 기반 자동화" },
          { k: "거버넌스", v: "Guardrail 사전 구성" },
          { k: "가드레일", v: "Detective + Preventive" }
        ]
      },
      {
        name: "Landing Zone",
        dot: "#f59e0b",
        rows: [
          { k: "목적", v: "기업급 멀티 계정 아키텍처" },
          { k: "수동성", v: "Control Tower + 커스텀" },
          { k: "거버넌스", v: "IAM Identity Center · Config Aggregator" },
          { k: "가드레일", v: "Control Tower 기반 확장" }
        ]
      }
    ],
    tip: "💡 SCP로만 충분 = Organizations / 자동화된 멀티 계정 구축 = Control Tower / 커스텀 확장 필요 = Landing Zone"
  },
  {
    title: "하이브리드 네트워크: Direct Connect vs VPN vs Transit Gateway",
    badge: "자주 출제",
    cols: 3,
    cards: [
      {
        name: "Direct Connect",
        dot: "#7c6fff",
        rows: [
          { k: "대역폭", v: "1/10/100 Gbps 전용선" },
          { k: "지연", v: "낮고 일정" },
          { k: "비용", v: "높음 (물리 회선)" },
          { k: "용도", v: "대용량·안정성 필수" }
        ]
      },
      {
        name: "Site-to-Site VPN",
        dot: "#34d399",
        rows: [
          { k: "대역폭", v: "최대 1.25 Gbps/터널" },
          { k: "지연", v: "인터넷 경로 의존" },
          { k: "비용", v: "낮음" },
          { k: "용도", v: "DR·백업 경로·소규모" }
        ]
      },
      {
        name: "Transit Gateway",
        dot: "#f59e0b",
        rows: [
          { k: "역할", v: "VPC/VPN/DX 중앙 허브" },
          { k: "확장성", v: "수천 VPC 연결" },
          { k: "Peering", v: "리전 간 TGW peering" },
          { k: "대체", v: "복잡한 VPC peering 대체" }
        ]
      }
    ],
    tip: "💡 전용선 = DX / 백업·저비용 = VPN / 다수 VPC·계정 중앙 연결 = TGW"
  },
  {
    title: "재해 복구 전략 (DR)",
    badge: "핵심",
    cols: 4,
    cards: [
      {
        name: "Backup & Restore",
        dot: "#ef4444",
        rows: [
          { k: "RTO", v: "시간 단위" },
          { k: "RPO", v: "분~시간" },
          { k: "비용", v: "최저" },
          { k: "예시", v: "S3 복제 + Snapshot" }
        ]
      },
      {
        name: "Pilot Light",
        dot: "#f59e0b",
        rows: [
          { k: "RTO", v: "수십 분" },
          { k: "RPO", v: "분 단위" },
          { k: "비용", v: "중간" },
          { k: "예시", v: "DB replica 가동, 앱 중단" }
        ]
      },
      {
        name: "Warm Standby",
        dot: "#34d399",
        rows: [
          { k: "RTO", v: "분 단위" },
          { k: "RPO", v: "초~분" },
          { k: "비용", v: "높음" },
          { k: "예시", v: "축소 용량 상시 운영" }
        ]
      },
      {
        name: "Active-Active",
        dot: "#7c6fff",
        rows: [
          { k: "RTO", v: "초 단위" },
          { k: "RPO", v: "0에 가까움" },
          { k: "비용", v: "최대" },
          { k: "예시", v: "다중 리전 R53 라우팅" }
        ]
      }
    ],
    tip: "💡 예산 최우선 = Backup&Restore / 빠른 복구 = Pilot Light+ / 거의 Zero RTO = Active-Active"
  },
  {
    title: "비용 절감: On-Demand vs Spot vs RI vs Savings Plan",
    badge: "자주 출제",
    cols: 4,
    cards: [
      {
        name: "On-Demand",
        dot: "#ef4444",
        rows: [
          { k: "할인", v: "0%" },
          { k: "약정", v: "없음" },
          { k: "중단", v: "없음" },
          { k: "용도", v: "예측 불가·테스트" }
        ]
      },
      {
        name: "Spot",
        dot: "#f59e0b",
        rows: [
          { k: "할인", v: "최대 90%" },
          { k: "약정", v: "없음" },
          { k: "중단", v: "2분 알림 종료 가능" },
          { k: "용도", v: "배치·fault-tolerant" }
        ]
      },
      {
        name: "Reserved Instance",
        dot: "#34d399",
        rows: [
          { k: "할인", v: "최대 72%" },
          { k: "약정", v: "1/3년" },
          { k: "유연성", v: "특정 인스턴스 타입" },
          { k: "용도", v: "고정 워크로드" }
        ]
      },
      {
        name: "Savings Plan",
        dot: "#7c6fff",
        rows: [
          { k: "할인", v: "최대 72%" },
          { k: "약정", v: "1/3년 (시간당 $)" },
          { k: "유연성", v: "모든 인스턴스·Fargate·Lambda" },
          { k: "용도", v: "RI 대체·유연한 약정" }
        ]
      }
    ],
    tip: "💡 가변·단기 = Spot / 특정 타입 고정 = RI / 타입 전환 가능 = Savings Plan"
  },
  {
    title: "마이그레이션 도구: DMS vs MGN vs SMS",
    badge: "핵심",
    cols: 3,
    cards: [
      {
        name: "AWS DMS",
        dot: "#7c6fff",
        rows: [
          { k: "대상", v: "데이터베이스" },
          { k: "동종", v: "Oracle→Oracle 등" },
          { k: "이종", v: "SCT 변환 후" },
          { k: "CDC", v: "실시간 연속 복제 지원" }
        ]
      },
      {
        name: "AWS MGN (Application Migration Service)",
        dot: "#34d399",
        rows: [
          { k: "대상", v: "서버/VM (Lift & Shift)" },
          { k: "현행 제품", v: "SMS 대체" },
          { k: "CDC", v: "블록 레벨 실시간 복제" },
          { k: "특징", v: "Cutover 테스트 지원" }
        ]
      },
      {
        name: "AWS SMS (legacy)",
        dot: "#f59e0b",
        rows: [
          { k: "대상", v: "VMware/Hyper-V/Azure VM" },
          { k: "상태", v: "deprecated → MGN" },
          { k: "CDC", v: "증분 replication" },
          { k: "대체", v: "MGN 사용 권장" }
        ]
      }
    ],
    tip: "💡 DB 마이그레이션 = DMS (+SCT 이종) / 서버 Lift & Shift = MGN / SMS는 deprecated"
  },
  {
    title: "스토리지 계층화: S3 Storage Classes",
    badge: "자주 출제",
    cols: 3,
    cards: [
      {
        name: "자주 접근",
        dot: "#7c6fff",
        rows: [
          { k: "Standard", v: "기본 · 저지연" },
          { k: "Intelligent-Tiering", v: "자동 계층화" },
          { k: "Standard-IA", v: "저빈도·즉시 접근" }
        ]
      },
      {
        name: "아카이브 (즉시~신속)",
        dot: "#f59e0b",
        rows: [
          { k: "Glacier Instant Retrieval", v: "ms 단위 retrieve" },
          { k: "Glacier Flexible Retrieval", v: "분~시간" },
          { k: "One Zone-IA", v: "단일 AZ·저비용" }
        ]
      },
      {
        name: "아카이브 (장기)",
        dot: "#34d399",
        rows: [
          { k: "Glacier Deep Archive", v: "12시간·최저가" },
          { k: "Lifecycle", v: "자동 전환" },
          { k: "Cross-Region Replication", v: "DR·컴플라이언스" }
        ]
      }
    ],
    tip: "💡 패턴 예측 불가 = Intelligent-Tiering / 드문 접근 = Standard-IA / 장기 보관 = Glacier Deep"
  }
];

/* ─────── 시험 빈출 키워드 ─────── */
window.SAP_KEYWORDS = [
  { kw: "LEAST operational overhead",
    services: "관리형 서비스 · Serverless · Managed integrations",
    tip: "EC2 직접 구축 NO. Managed 서비스·Saas·Serverless 우선" },
  { kw: "restrict services by region or account",
    services: "AWS Organizations SCP",
    tip: "OU/계정 단위로 deny 정책 상속" },
  { kw: "multi-account governance · automated setup",
    services: "AWS Control Tower + Guardrails",
    tip: "Landing Zone 자동화. IAM Identity Center 통합" },
  { kw: "hybrid connectivity · dedicated",
    services: "AWS Direct Connect (+ VIF, Transit VIF)",
    tip: "전용선. 고가용성은 2개 회선 또는 VPN 백업" },
  { kw: "central hub for many VPCs · cross-account",
    services: "AWS Transit Gateway + RAM 공유",
    tip: "수천 VPC·DX·VPN 집중 연결. VPC peering의 full mesh 대체" },
  { kw: "private domain from on-prem",
    services: "Route 53 Resolver (inbound/outbound endpoints)",
    tip: "온프레미스 → AWS 내부 도메인 / AWS → 온프레미스 DNS" },
  { kw: "migrate database heterogeneous",
    services: "AWS DMS + SCT (Schema Conversion Tool)",
    tip: "Oracle→Aurora·MSSQL→PostgreSQL 등 엔진 변경" },
  { kw: "lift and shift server migration",
    services: "AWS Application Migration Service (MGN)",
    tip: "블록 레벨 replication·cutover 테스트. SMS 대체" },
  { kw: "disaster recovery · RTO minutes · active-active",
    services: "Multi-Region + Route 53 failover + Aurora Global",
    tip: "초 단위 RTO·RPO 0에 가까움" },
  { kw: "DR pilot light",
    services: "최소 Aurora replica + DNS failover + 데이터만 상시",
    tip: "앱은 꺼두고 필요 시 부팅. 중간 비용" },
  { kw: "cost optimization · long-term steady",
    services: "Savings Plans (Compute) 또는 RI",
    tip: "EC2·Fargate·Lambda 전반 적용 = Compute Savings Plan" },
  { kw: "fault tolerant batch · stateless",
    services: "Spot Instances + SQS + Auto Scaling",
    tip: "중단 허용 시 90% 절감" },
  { kw: "global low-latency · edge cache",
    services: "CloudFront + Lambda@Edge / CloudFront Functions",
    tip: "HTTP 응답 가속 · 간단 로직은 CF Functions" },
  { kw: "global low-latency TCP/UDP",
    services: "AWS Global Accelerator",
    tip: "Anycast IP · NLB/ALB 엔드포인트 헬스체크" },
  { kw: "centralized logging / audit",
    services: "CloudTrail Organization trail + S3 + Athena + Security Hub",
    tip: "멀티 계정 로그 중앙 집계" },
  { kw: "threat detection · anomaly",
    services: "Amazon GuardDuty (+ Security Hub 통합)",
    tip: "VPC Flow/CloudTrail/DNS 기반 ML 탐지" },
  { kw: "sensitive data discovery in S3",
    services: "Amazon Macie",
    tip: "PII·PHI·금융 자동 분류·알림" },
  { kw: "centralized WAF management",
    services: "AWS Firewall Manager (+ Organizations)",
    tip: "계정·리소스 전체 WAF/Shield/Network FW 일괄" },
  { kw: "identity federation · SSO",
    services: "IAM Identity Center (successor of AWS SSO) + SAML/OIDC",
    tip: "Organizations 기반 SSO 표준" },
  { kw: "secret auto-rotation",
    services: "AWS Secrets Manager + Lambda rotation",
    tip: "RDS/Redshift는 자동 rotation 지원" },
  { kw: "data lake governance · row/column",
    services: "AWS Lake Formation + Glue Catalog",
    tip: "세분화 권한·LF-Tag 기반 액세스" },
  { kw: "serverless event-driven fan-out",
    services: "EventBridge + SNS + SQS + Lambda",
    tip: "EventBridge = 이벤트 버스·스케줄·SaaS 통합" },
  { kw: "streaming ingestion high volume",
    services: "Kinesis Data Streams / MSK (Kafka)",
    tip: "다수 컨슈머 재소비 = KDS / Kafka 호환 = MSK" },
  { kw: "S3 to Redshift auto-load",
    services: "Kinesis Firehose 또는 COPY command + Step Functions",
    tip: "서버리스 전달 = Firehose / 배치 일정 = Glue+Step Functions" },
  { kw: "cache hot data in front of DB",
    services: "ElastiCache (Redis / Memcached)",
    tip: "Redis = 퍼시스턴스·pub/sub / Memcached = 단순 KV" },
  { kw: "migrate NFS/SMB to cloud",
    services: "AWS DataSync (+ Storage Gateway 하이브리드)",
    tip: "DataSync = 온라인 전송 / Snowball = 오프라인 대용량" },
  { kw: "offline PB-scale data transfer",
    services: "AWS Snowball Edge / Snowmobile",
    tip: "네트워크 대신 물리 이송. Snowmobile=100PB" },
  { kw: "legal hold / WORM compliance",
    services: "S3 Object Lock (Governance / Compliance mode)",
    tip: "Compliance 모드는 root도 삭제 불가" },
  { kw: "KMS cross-account encryption",
    services: "KMS Customer Managed Key + Key Policy + IAM",
    tip: "Key Policy가 cross-account 접근 통제" }
];

/* ─────── 출제 함정 ─────── */
window.SAP_TRAPS = [
  { icon: "🏢", title: "멀티 계정을 IAM Role 공유로만 해결하려는 함정",
    wrong: "SCP 없이 IAM Role cross-account로만 관리",
    right: "<strong>Organizations + SCP</strong>로 전체 계정 정책 통제, 계정별로 IAM 관리" },
  { icon: "⚠️", title: "VPC Peering full mesh로 다수 VPC 연결하는 함정",
    wrong: "VPC가 많아질수록 N(N-1)/2 peering 관리 불가",
    right: "다수 VPC 허브 = <strong>Transit Gateway</strong> 사용" },
  { icon: "💸", title: "예측 불가 워크로드에 RI 먼저 사는 함정",
    wrong: "변동 크면 RI는 낭비",
    right: "Spot (중단 허용) + <strong>Compute Savings Plan</strong> (유연한 약정)" },
  { icon: "📦", title: "VM/서버 마이그레이션에 DMS 쓰는 함정",
    wrong: "DMS는 DB 전용",
    right: "서버 Lift & Shift = <strong>AWS Application Migration Service (MGN)</strong>" },
  { icon: "🗄️", title: "이종 DB 마이그레이션에 DMS만 쓰는 함정",
    wrong: "Oracle→Aurora에서 DMS만으로 스키마 변환 불가",
    right: "<strong>SCT (Schema Conversion Tool) + DMS</strong> 병행" },
  { icon: "🔐", title: "크로스 계정 S3 접근에 Bucket Policy만 쓰는 함정",
    wrong: "Bucket Policy만으로는 sufficient하지 않을 수 있음",
    right: "<strong>Bucket Policy + IAM Role (AssumeRole)</strong> 조합. KMS는 Key Policy도 필요" },
  { icon: "🌐", title: "글로벌 엔드포인트에 CloudFront 먼저 고르는 함정",
    wrong: "HTTP(S) 아닌 TCP/UDP인데 CloudFront 선택",
    right: "TCP/UDP 글로벌 가속 = <strong>Global Accelerator</strong>" },
  { icon: "🚨", title: "DR에서 Active-Active를 무조건 고르는 함정",
    wrong: "비용 고려 없이 Active-Active 선택 → 과다 비용",
    right: "요구 RTO·RPO 확인: 분 = Warm Standby, 시간 = Pilot Light, 극저 지연 = Active-Active" },
  { icon: "🔑", title: "SSO에 IAM User로 해결하려는 함정",
    wrong: "계정별 IAM 사용자 만들기 → 관리 부담",
    right: "<strong>IAM Identity Center + SAML/OIDC IdP</strong> 연동" },
  { icon: "⚙️", title: "Secrets 자동 회전에 Lambda 직접 작성하는 함정",
    wrong: "수작업 rotation Lambda → 유지보수 부담",
    right: "<strong>Secrets Manager 내장 rotation</strong> (RDS/Redshift 자동 지원)" },
  { icon: "🛡️", title: "멀티 계정 WAF를 계정별로 관리하는 함정",
    wrong: "계정마다 WAF rule 개별 관리 → 정책 불일치",
    right: "<strong>AWS Firewall Manager</strong> (+ Organizations)로 중앙 일괄 배포" },
  { icon: "🪣", title: "S3 라이프사이클 없이 수동으로 Glacier 전환하는 함정",
    wrong: "수동으로 객체 이동 스크립트 작성",
    right: "<strong>S3 Lifecycle Policy</strong>로 자동 전환" },
  { icon: "📡", title: "온프레미스 DNS에 Route 53 만 쓰는 함정",
    wrong: "온프레미스 ↔ AWS DNS 양방향 resolve 실패",
    right: "<strong>Route 53 Resolver Inbound/Outbound Endpoints</strong>" },
  { icon: "🔀", title: "Direct Connect 단일 회선으로 고가용성 확보하려는 함정",
    wrong: "단일 DX = 단일 장애점",
    right: "<strong>2개 DX 회선 (다른 location) 또는 DX + VPN 백업</strong>" },
  { icon: "💾", title: "대용량 데이터 이전에 인터넷 전송 고르는 함정",
    wrong: "PB급 데이터를 DX/VPN으로 전송 → 수개월",
    right: "<strong>Snowball / Snowmobile</strong>로 오프라인 이송" },
  { icon: "🔒", title: "Object Lock Governance로 컴플라이언스 만족하는 함정",
    wrong: "Governance 모드는 권한자가 해제 가능",
    right: "법적 요구사항 = <strong>Compliance 모드</strong> (해제 불가)" },
  { icon: "📊", title: "센서티브 데이터 탐지에 Config 쓰는 함정",
    wrong: "Config는 리소스 설정 변경 추적용",
    right: "S3 PII/PHI 자동 탐지 = <strong>Amazon Macie</strong>" },
  { icon: "🔧", title: "Organization 수준 로그 집계를 계정별 S3로 하는 함정",
    wrong: "계정별 CloudTrail → 후속 집계 복잡",
    right: "<strong>CloudTrail Organization Trail</strong> → 단일 S3 버킷" }
];

/* ─────── 시나리오 결정 트리 ─────── */
window.SAP_DECISIONS = [
  {
    title: "멀티 계정 구성 결정",
    icon: "🏢",
    q: "규모·자동화 수준은?",
    opts: [
      { label: "소수 계정·SCP만 필요", answer: "→ <strong>AWS Organizations (Consolidated Billing + SCP)</strong>" },
      { label: "대기업 · 자동화 설정 · 가드레일", answer: "→ <strong>AWS Control Tower + Landing Zone</strong>" },
      { label: "리소스 공유 (TGW, Prefix List)", answer: "→ <strong>AWS RAM</strong>" },
      { label: "중앙 계정 접근 제어", answer: "→ <strong>IAM Identity Center + SAML</strong>" }
    ]
  },
  {
    title: "하이브리드 네트워크 연결",
    icon: "🌐",
    q: "요구되는 특성은?",
    opts: [
      { label: "대역폭 · 안정성 · 지속", answer: "→ <strong>Direct Connect (+ 2개 회선 또는 VPN 백업)</strong>" },
      { label: "즉시 · 저비용 · 백업 경로", answer: "→ <strong>Site-to-Site VPN</strong>" },
      { label: "다수 VPC · 다수 계정 허브", answer: "→ <strong>Transit Gateway (+ RAM 공유)</strong>" },
      { label: "온프레미스 ↔ AWS DNS 양방향", answer: "→ <strong>Route 53 Resolver Endpoints</strong>" },
      { label: "VPC 내 프라이빗 S3·DynamoDB", answer: "→ <strong>Gateway Endpoint (무료)</strong>" },
      { label: "타 AWS 서비스 프라이빗", answer: "→ <strong>Interface Endpoint (PrivateLink)</strong>" }
    ]
  },
  {
    title: "DR 전략 선택",
    icon: "🚨",
    q: "요구 RTO/RPO와 예산?",
    opts: [
      { label: "시간 단위 RTO · 예산 최소", answer: "→ <strong>Backup & Restore (AWS Backup + S3)</strong>" },
      { label: "수십 분 · 중간 예산", answer: "→ <strong>Pilot Light (DB 상시, 앱 중지)</strong>" },
      { label: "분 단위 · 축소 용량 상시", answer: "→ <strong>Warm Standby</strong>" },
      { label: "초 단위 · 거의 Zero RPO", answer: "→ <strong>Active-Active + Route 53 Failover + Aurora Global</strong>" }
    ]
  },
  {
    title: "마이그레이션 도구",
    icon: "🚚",
    q: "마이그레이션 대상은?",
    opts: [
      { label: "서버·VM Lift & Shift", answer: "→ <strong>AWS Application Migration Service (MGN)</strong>" },
      { label: "동종 DB 마이그레이션", answer: "→ <strong>AWS DMS</strong>" },
      { label: "이종 DB (엔진 변경)", answer: "→ <strong>SCT + DMS</strong>" },
      { label: "대용량 오프라인 전송", answer: "→ <strong>Snowball Edge / Snowmobile</strong>" },
      { label: "온라인 파일 시스템 동기화", answer: "→ <strong>AWS DataSync</strong>" },
      { label: "컨테이너 앱 마이그레이션", answer: "→ <strong>App2Container + ECS/EKS</strong>" },
      { label: "인벤토리·평가 단계", answer: "→ <strong>Application Discovery Service + Migration Hub</strong>" }
    ]
  },
  {
    title: "비용 절감 전략",
    icon: "💰",
    q: "워크로드 특성은?",
    opts: [
      { label: "중단 허용 배치·fault-tolerant", answer: "→ <strong>Spot (최대 90% 할인)</strong>" },
      { label: "특정 인스턴스 타입 고정", answer: "→ <strong>Reserved Instance</strong>" },
      { label: "유연한 약정 (EC2/Fargate/Lambda)", answer: "→ <strong>Compute Savings Plan</strong>" },
      { label: "S3 접근 패턴 예측 불가", answer: "→ <strong>S3 Intelligent-Tiering</strong>" },
      { label: "EBS 사용 안 함·작은 인스턴스", answer: "→ <strong>Graviton / ARM 기반 T4g/M6g</strong>" }
    ]
  },
  {
    title: "보안·거버넌스 선택",
    icon: "🛡️",
    q: "요구되는 보안 기능은?",
    opts: [
      { label: "서비스/리전 제한", answer: "→ <strong>AWS Organizations SCP</strong>" },
      { label: "위협 탐지 · 비정상 탐지", answer: "→ <strong>Amazon GuardDuty</strong>" },
      { label: "S3 PII/PHI 자동 분류", answer: "→ <strong>Amazon Macie</strong>" },
      { label: "취약점 스캔 (EC2, 컨테이너)", answer: "→ <strong>Amazon Inspector</strong>" },
      { label: "중앙 보안 대시보드", answer: "→ <strong>AWS Security Hub</strong>" },
      { label: "WAF/Shield 중앙 관리", answer: "→ <strong>AWS Firewall Manager</strong>" },
      { label: "구성 변경 추적 · 컴플라이언스", answer: "→ <strong>AWS Config</strong>" },
      { label: "API 활동 감사 로그", answer: "→ <strong>CloudTrail Organization Trail</strong>" }
    ]
  },
  {
    title: "글로벌 배포 최적화",
    icon: "🌏",
    q: "트래픽·프로토콜은?",
    opts: [
      { label: "HTTP(S) 정적/동적 캐싱", answer: "→ <strong>CloudFront + Lambda@Edge</strong>" },
      { label: "TCP/UDP 글로벌 Anycast", answer: "→ <strong>Global Accelerator</strong>" },
      { label: "지리 기반 라우팅", answer: "→ <strong>Route 53 Geolocation/Geoproximity</strong>" },
      { label: "장애 시 리전 전환", answer: "→ <strong>Route 53 Failover + Health Check</strong>" },
      { label: "데이터 글로벌 동기화", answer: "→ <strong>Aurora Global Database / S3 Cross-Region Replication</strong>" }
    ]
  }
];

/* ─────── 용어집 ─────── */
window.SAP_GLOSSARY = [
  // ============ 계정/거버넌스 ============
  { cat: "계정·거버넌스", color: "#7c6fff", name: "AWS Organizations", short: "멀티 계정 관리",
    desc: "여러 AWS 계정을 조직(OU)으로 묶고 SCP·통합 결제·리소스 공유 관리. SCP로 계정 단위 서비스/리전 제한.", tags: ["핵심"] },
  { cat: "계정·거버넌스", color: "#7c6fff", name: "Service Control Policy (SCP)", short: "계정 수준 권한 가드레일",
    desc: "Organizations OU/계정에 적용. deny 중심 정책으로 서비스·리전·액션 제한. IAM보다 상위.", tags: ["보안"] },
  { cat: "계정·거버넌스", color: "#7c6fff", name: "AWS Control Tower", short: "멀티 계정 자동 구축",
    desc: "Landing Zone·Guardrail(Detective/Preventive)·IAM Identity Center를 자동 세팅. 멀티 계정 블루프린트.", tags: ["자동화"] },
  { cat: "계정·거버넌스", color: "#7c6fff", name: "Landing Zone", short: "엔터프라이즈 멀티 계정 아키텍처",
    desc: "Control Tower 기반 확장. 감사 계정·로그 계정·공유 서비스 계정 등 역할별 OU 구성.", tags: ["아키텍처"] },
  { cat: "계정·거버넌스", color: "#7c6fff", name: "IAM Identity Center (구 AWS SSO)", short: "중앙 SSO",
    desc: "Organizations 전체 SSO + SAML/OIDC 연동. Permission Set으로 역할별 접근 제어.", tags: ["SSO"] },
  { cat: "계정·거버넌스", color: "#7c6fff", name: "AWS Resource Access Manager (RAM)", short: "리소스 공유",
    desc: "TGW·Prefix List·Route 53 Resolver·Subnet 등을 계정 간/OU 간 공유. 중복 프로비저닝 없이 재사용.", tags: ["공유"] },
  { cat: "계정·거버넌스", color: "#7c6fff", name: "AWS Control Tower Account Factory", short: "계정 프로비저닝",
    desc: "Service Catalog 기반 셀프서비스 계정 생성. 표준 기본 설정 자동 적용.", tags: ["자동화"] },
  { cat: "계정·거버넌스", color: "#7c6fff", name: "AWS Config", short: "리소스 설정 추적",
    desc: "리소스 설정 변경 이력·컴플라이언스 평가. Conformance Pack으로 다계정 배포.", tags: ["컴플라이언스"] },
  { cat: "계정·거버넌스", color: "#7c6fff", name: "AWS CloudTrail", short: "API 활동 로그",
    desc: "모든 AWS API 호출 기록. Organization Trail로 전 계정 중앙 집계.", tags: ["감사"] },
  { cat: "계정·거버넌스", color: "#7c6fff", name: "AWS Service Catalog", short: "승인된 IT 제품 카탈로그",
    desc: "관리자가 정의한 CloudFormation 템플릿을 사용자가 셀프서비스로 배포.", tags: ["자동화"] },

  // ============ 네트워킹 ============
  { cat: "네트워킹", color: "#3b82f6", name: "Amazon VPC", short: "가상 네트워크",
    desc: "Subnet(Public/Private), Route Table, IGW, NAT, NACL, Security Group, VPC Endpoint 등 구성.", tags: ["핵심"] },
  { cat: "네트워킹", color: "#3b82f6", name: "Transit Gateway (TGW)", short: "멀티 VPC 허브",
    desc: "수천 VPC·VPN·DX를 중앙 연결. Route Table로 세그먼테이션. 리전 간 TGW Peering 지원.", tags: ["핵심"] },
  { cat: "네트워킹", color: "#3b82f6", name: "AWS Direct Connect (DX)", short: "전용 물리 회선",
    desc: "1/10/100 Gbps 전용선. Private VIF(VPC), Public VIF(AWS 서비스), Transit VIF(TGW) 3종.", tags: ["하이브리드"] },
  { cat: "네트워킹", color: "#3b82f6", name: "Site-to-Site VPN", short: "IPsec VPN",
    desc: "온프레미스 ↔ VPC IPsec 터널. 최대 1.25 Gbps/터널. DX 백업 경로로 자주 사용.", tags: ["하이브리드"] },
  { cat: "네트워킹", color: "#3b82f6", name: "AWS Client VPN", short: "사용자 VPN",
    desc: "원격 사용자용 OpenVPN 기반 관리형 VPN. SAML/AD 인증 지원.", tags: ["하이브리드"] },
  { cat: "네트워킹", color: "#3b82f6", name: "VPC Peering", short: "1:1 VPC 연결",
    desc: "2개 VPC 프라이빗 연결. Transitive 라우팅 불가. 소규모에 적합, 대규모는 TGW.", tags: ["연결"] },
  { cat: "네트워킹", color: "#3b82f6", name: "VPC Endpoint (Gateway)", short: "S3/DynamoDB 프라이빗",
    desc: "S3/DynamoDB 전용. 무료. Route Table에 추가해 인터넷 우회.", tags: ["프라이빗"] },
  { cat: "네트워킹", color: "#3b82f6", name: "VPC Endpoint (Interface/PrivateLink)", short: "서비스별 프라이빗",
    desc: "ENI 기반 프라이빗 IP로 AWS 서비스·SaaS 접근. 시간당 과금.", tags: ["프라이빗"] },
  { cat: "네트워킹", color: "#3b82f6", name: "AWS PrivateLink", short: "프라이빗 서비스 공유",
    desc: "내 VPC에서 다른 VPC·계정의 서비스를 프라이빗 IP로 노출. NLB 기반 제공자.", tags: ["프라이빗"] },
  { cat: "네트워킹", color: "#3b82f6", name: "Route 53 Resolver", short: "하이브리드 DNS",
    desc: "Inbound Endpoint(온프레미스→AWS) + Outbound Endpoint(AWS→온프레미스). 양방향 DNS.", tags: ["DNS"] },
  { cat: "네트워킹", color: "#3b82f6", name: "Amazon Route 53", short: "관리형 DNS",
    desc: "Failover·Geolocation·Geoproximity·Latency·Weighted 라우팅 정책. 헬스체크 기반.", tags: ["DNS"] },
  { cat: "네트워킹", color: "#3b82f6", name: "AWS Global Accelerator", short: "글로벌 TCP/UDP 가속",
    desc: "Anycast IP로 사용자→가장 가까운 엣지→AWS 백본 경유. NLB/ALB/EC2 엔드포인트.", tags: ["글로벌"] },
  { cat: "네트워킹", color: "#3b82f6", name: "Amazon CloudFront", short: "글로벌 CDN",
    desc: "HTTP(S) 캐시·가속. Lambda@Edge/CloudFront Functions로 엣지 로직 실행.", tags: ["CDN"] },
  { cat: "네트워킹", color: "#3b82f6", name: "Network Firewall", short: "VPC 방화벽 IDS/IPS",
    desc: "Suricata 규칙·도메인 필터링. TGW나 Inspection VPC 경로에 배치.", tags: ["보안"] },
  { cat: "네트워킹", color: "#3b82f6", name: "AWS Network Manager", short: "네트워크 가시성",
    desc: "TGW·SD-WAN·DX 등 글로벌 네트워크 지도·모니터링.", tags: ["가시성"] },

  // ============ 컴퓨팅 ============
  { cat: "컴퓨팅", color: "#10b981", name: "Amazon EC2", short: "가상 서버",
    desc: "인스턴스 패밀리: C(CPU)·M(범용)·R(메모리)·I(I/O)·P/G(GPU)·Trn/Inf(ML)·X(대메모리)·T(버스트)·Graviton(ARM).", tags: ["핵심"] },
  { cat: "컴퓨팅", color: "#10b981", name: "Auto Scaling Group", short: "자동 확장",
    desc: "Launch Template·정책(Target Tracking/Step/Scheduled)·Mixed Instance Policy·Spot 혼합.", tags: ["확장"] },
  { cat: "컴퓨팅", color: "#10b981", name: "AWS Elastic Beanstalk", short: "PaaS",
    desc: "애플리케이션 코드 업로드만으로 환경 자동 구성. EC2/Auto Scaling/LB 자동 관리.", tags: ["PaaS"] },
  { cat: "컴퓨팅", color: "#10b981", name: "Amazon ECS", short: "컨테이너 오케스트레이션",
    desc: "EC2 launch type 또는 Fargate launch type. Task·Service·Cluster 계층.", tags: ["컨테이너"] },
  { cat: "컴퓨팅", color: "#10b981", name: "Amazon EKS", short: "관리형 Kubernetes",
    desc: "업스트림 Kubernetes. Fargate 또는 EC2 노드그룹. IRSA로 파드별 IAM.", tags: ["Kubernetes"] },
  { cat: "컴퓨팅", color: "#10b981", name: "AWS Fargate", short: "서버리스 컨테이너",
    desc: "ECS/EKS용 서버리스 런타임. 태스크 단위 자원·과금. EC2 관리 불필요.", tags: ["서버리스"] },
  { cat: "컴퓨팅", color: "#10b981", name: "AWS Lambda", short: "서버리스 함수",
    desc: "이벤트 기반 FaaS. 최대 15분 실행·10GB 메모리. Container image 지원.", tags: ["서버리스"] },
  { cat: "컴퓨팅", color: "#10b981", name: "AWS App Runner", short: "컨테이너 웹앱",
    desc: "완전관리형 컨테이너 웹 애플리케이션 호스팅. 소스·이미지 배포 자동화.", tags: ["서버리스"] },
  { cat: "컴퓨팅", color: "#10b981", name: "AWS Batch", short: "배치 컴퓨팅",
    desc: "대규모 배치 작업 큐잉·스케줄링. Fargate·EC2(Spot) 모두 지원.", tags: ["배치"] },
  { cat: "컴퓨팅", color: "#10b981", name: "AWS Outposts", short: "온프레미스 AWS",
    desc: "AWS 하드웨어를 고객 데이터센터에 설치. 동일 API·관리 콘솔.", tags: ["하이브리드"] },
  { cat: "컴퓨팅", color: "#10b981", name: "AWS Local Zones", short: "로컬 존",
    desc: "대도시 근접 AWS 확장 존. 초저지연 필요 시 활용.", tags: ["엣지"] },
  { cat: "컴퓨팅", color: "#10b981", name: "AWS Wavelength", short: "5G 엣지",
    desc: "통신사 5G 네트워크 내 AWS 인프라. 밀리초 지연.", tags: ["5G"] },
  { cat: "컴퓨팅", color: "#10b981", name: "EC2 Spot Instance", short: "Spot 인스턴스",
    desc: "여유 용량 최대 90% 할인. 2분 전 알림 후 종료 가능. Stateless·fault-tolerant 적합.", tags: ["비용"] },
  { cat: "컴퓨팅", color: "#10b981", name: "Savings Plans", short: "유연한 약정 할인",
    desc: "Compute(EC2/Fargate/Lambda), EC2 Instance, SageMaker 3종. 1/3년 약정.", tags: ["비용"] },
  { cat: "컴퓨팅", color: "#10b981", name: "Reserved Instance (RI)", short: "예약 인스턴스",
    desc: "특정 인스턴스 타입·리전 1/3년 약정. Standard/Convertible.", tags: ["비용"] },

  // ============ 스토리지 ============
  { cat: "스토리지", color: "#06b6d4", name: "Amazon S3", short: "객체 스토리지",
    desc: "무제한 · 11-9 내구성 · 버킷 단위. 데이터 레이크·정적 웹·백업 전반.", tags: ["핵심"] },
  { cat: "스토리지", color: "#06b6d4", name: "S3 Intelligent-Tiering", short: "자동 계층화",
    desc: "접근 패턴 기반 자동 이동. 예측 불가 워크로드에 최적.", tags: ["비용"] },
  { cat: "스토리지", color: "#06b6d4", name: "S3 Glacier", short: "아카이브",
    desc: "Instant Retrieval(ms)·Flexible(분~시간)·Deep Archive(12h) 3종.", tags: ["아카이브"] },
  { cat: "스토리지", color: "#06b6d4", name: "S3 Cross-Region Replication", short: "리전 간 복제",
    desc: "객체 자동 복제. DR·지연 감소·컴플라이언스.", tags: ["DR"] },
  { cat: "스토리지", color: "#06b6d4", name: "S3 Object Lock", short: "WORM",
    desc: "Write Once Read Many. Governance(해제 가능)/Compliance(해제 불가) 모드.", tags: ["컴플라이언스"] },
  { cat: "스토리지", color: "#06b6d4", name: "S3 Transfer Acceleration", short: "글로벌 업로드 가속",
    desc: "CloudFront 엣지 경유 장거리 S3 업로드.", tags: ["성능"] },
  { cat: "스토리지", color: "#06b6d4", name: "Amazon EBS", short: "블록 볼륨",
    desc: "단일 EC2 블록 스토리지. gp3·io2·st1·sc1. Snapshot으로 백업.", tags: ["블록"] },
  { cat: "스토리지", color: "#06b6d4", name: "Amazon EFS", short: "Linux 공유 NFS",
    desc: "여러 EC2/Lambda/컨테이너 동시 마운트. 자동 확장·다중 AZ.", tags: ["공유"] },
  { cat: "스토리지", color: "#06b6d4", name: "Amazon FSx", short: "전용 파일 시스템",
    desc: "FSx for Windows(SMB·AD), Lustre(HPC·ML), NetApp ONTAP, OpenZFS.", tags: ["파일"] },
  { cat: "스토리지", color: "#06b6d4", name: "AWS Storage Gateway", short: "하이브리드 스토리지",
    desc: "File Gateway(SMB/NFS→S3), Volume Gateway(iSCSI→S3), Tape Gateway(VTL→S3/Glacier).", tags: ["하이브리드"] },
  { cat: "스토리지", color: "#06b6d4", name: "AWS Snow Family", short: "오프라인 대용량 전송",
    desc: "Snowcone(8TB)·Snowball Edge(80TB)·Snowmobile(100PB).", tags: ["이전"] },
  { cat: "스토리지", color: "#06b6d4", name: "AWS DataSync", short: "온라인 파일 전송",
    desc: "온프레미스·NFS/SMB ↔ S3/EFS/FSx 자동 동기화. 암호화·검증 내장.", tags: ["이전"] },
  { cat: "스토리지", color: "#06b6d4", name: "AWS Backup", short: "중앙 백업 관리",
    desc: "EBS/RDS/DynamoDB/EFS/S3 등 통합 백업 정책·크로스 리전/계정.", tags: ["백업"] },

  // ============ 데이터베이스 ============
  { cat: "데이터베이스", color: "#f59e0b", name: "Amazon RDS", short: "관리형 RDB",
    desc: "MySQL/PostgreSQL/MariaDB/Oracle/SQL Server/Aurora. Multi-AZ, Read Replica, 자동 백업.", tags: ["핵심"] },
  { cat: "데이터베이스", color: "#f59e0b", name: "Amazon Aurora", short: "AWS 네이티브 RDB",
    desc: "MySQL/PostgreSQL 호환. 5배 빠름. Serverless v2·Global DB·멀티 마스터.", tags: ["핵심"] },
  { cat: "데이터베이스", color: "#f59e0b", name: "Aurora Global Database", short: "글로벌 DR",
    desc: "최대 5개 리전 복제. < 1초 lag · < 1분 RTO.", tags: ["DR"] },
  { cat: "데이터베이스", color: "#f59e0b", name: "Amazon DynamoDB", short: "NoSQL KV/Document",
    desc: "서버리스·단일 자릿수 ms 지연. Global Tables·Streams·TTL·PITR.", tags: ["NoSQL"] },
  { cat: "데이터베이스", color: "#f59e0b", name: "DynamoDB Accelerator (DAX)", short: "DDB 캐시",
    desc: "Eventually consistent ms 단위 → 마이크로초. 코드 변경 최소.", tags: ["캐시"] },
  { cat: "데이터베이스", color: "#f59e0b", name: "Amazon ElastiCache", short: "메모리 캐시",
    desc: "Redis(퍼시스턴스·pub/sub) / Memcached(단순 KV). DB 앞단 캐시.", tags: ["캐시"] },
  { cat: "데이터베이스", color: "#f59e0b", name: "Amazon MemoryDB for Redis", short: "Redis 호환 DB",
    desc: "인메모리이면서 내구성 있는 Redis 호환 DB. 전체 멀티-AZ durability.", tags: ["인메모리"] },
  { cat: "데이터베이스", color: "#f59e0b", name: "Amazon Redshift", short: "데이터 웨어하우스",
    desc: "열 기반 MPP. Spectrum으로 S3 직접 쿼리. Serverless 옵션.", tags: ["분석"] },
  { cat: "데이터베이스", color: "#f59e0b", name: "Amazon Neptune", short: "그래프 DB",
    desc: "RDF/Property Graph. Gremlin·SPARQL·openCypher.", tags: ["그래프"] },
  { cat: "데이터베이스", color: "#f59e0b", name: "Amazon DocumentDB", short: "MongoDB 호환",
    desc: "MongoDB API 호환 문서 DB. 관리형 스케일링·백업.", tags: ["Document"] },
  { cat: "데이터베이스", color: "#f59e0b", name: "Amazon Timestream", short: "시계열 DB",
    desc: "IoT·운영 지표 시계열. 자동 저장 계층화.", tags: ["시계열"] },
  { cat: "데이터베이스", color: "#f59e0b", name: "Amazon Keyspaces (Cassandra)", short: "Cassandra 호환",
    desc: "서버리스·완전관리형 Cassandra API.", tags: ["NoSQL"] },
  { cat: "데이터베이스", color: "#f59e0b", name: "Amazon QLDB", short: "원장 DB",
    desc: "불변·검증 가능한 트랜잭션 로그. (주: 2024+ 신규 워크로드 제한)", tags: ["감사"] },
  { cat: "데이터베이스", color: "#f59e0b", name: "RDS Proxy", short: "RDS 커넥션 풀",
    desc: "Lambda/대규모 클라이언트 연결 폭주 완화. 자동 failover 가속.", tags: ["성능"] },

  // ============ 마이그레이션 ============
  { cat: "마이그레이션", color: "#84cc16", name: "AWS Application Migration Service (MGN)", short: "서버 Lift & Shift",
    desc: "블록 레벨 replication. SMS 대체. Test cutover 지원.", tags: ["핵심"] },
  { cat: "마이그레이션", color: "#84cc16", name: "AWS Database Migration Service (DMS)", short: "DB 마이그레이션",
    desc: "동종/이종 DB 복제. CDC 실시간 연속 복제 지원.", tags: ["DB"] },
  { cat: "마이그레이션", color: "#84cc16", name: "Schema Conversion Tool (SCT)", short: "DB 스키마 변환",
    desc: "Oracle→PostgreSQL, SQL Server→Aurora 등 엔진 변경. DMS와 병행.", tags: ["이종"] },
  { cat: "마이그레이션", color: "#84cc16", name: "AWS Migration Hub", short: "마이그레이션 중앙 대시보드",
    desc: "진행 상황 추적. Strategy Recommendations, Orchestrator 통합.", tags: ["관리"] },
  { cat: "마이그레이션", color: "#84cc16", name: "AWS Application Discovery Service", short: "온프레미스 인벤토리",
    desc: "Agentless/Agent 기반 서버·의존성 발견. Migration Hub 통합.", tags: ["평가"] },
  { cat: "마이그레이션", color: "#84cc16", name: "AWS Migration Evaluator (구 TSO)", short: "TCO 분석",
    desc: "온프레미스 워크로드 AWS 비용 추정. 마이그레이션 사전 평가.", tags: ["TCO"] },
  { cat: "마이그레이션", color: "#84cc16", name: "AWS App2Container (A2C)", short: "컨테이너 변환",
    desc: ".NET/Java 앱을 Docker 이미지로 변환. ECS/EKS 배포 자동화.", tags: ["컨테이너"] },
  { cat: "마이그레이션", color: "#84cc16", name: "AWS Mainframe Modernization", short: "메인프레임 이전",
    desc: "COBOL 등 메인프레임 앱을 AWS로 리플랫폼/리팩터링.", tags: ["메인프레임"] },

  // ============ 보안·암호화 ============
  { cat: "보안·암호화", color: "#ef4444", name: "AWS IAM", short: "접근 제어",
    desc: "User/Group/Role/Policy. Role = 임시 자격증명. Cross-account AssumeRole.", tags: ["핵심"] },
  { cat: "보안·암호화", color: "#ef4444", name: "AWS KMS", short: "키 관리",
    desc: "CMK(Customer/AWS Managed)·Envelope Encryption. Key Policy로 cross-account.", tags: ["암호화"] },
  { cat: "보안·암호화", color: "#ef4444", name: "AWS CloudHSM", short: "FIPS 140-2 HSM",
    desc: "전용 HSM. 규제 산업 (FIPS Level 3) 필요 시. KMS보다 비싸고 고정.", tags: ["HSM"] },
  { cat: "보안·암호화", color: "#ef4444", name: "AWS Secrets Manager", short: "시크릿 관리",
    desc: "자격증명·API 키 저장+자동 회전. RDS/Redshift 자동 회전 내장.", tags: ["시크릿"] },
  { cat: "보안·암호화", color: "#ef4444", name: "AWS Systems Manager Parameter Store", short: "구성값 저장",
    desc: "Secrets Manager보다 경량. SecureString + KMS 암호화.", tags: ["구성"] },
  { cat: "보안·암호화", color: "#ef4444", name: "Amazon GuardDuty", short: "위협 탐지",
    desc: "ML 기반 이상 탐지. VPC Flow/CloudTrail/DNS 분석.", tags: ["위협탐지"] },
  { cat: "보안·암호화", color: "#ef4444", name: "Amazon Macie", short: "민감 데이터 탐지",
    desc: "S3 PII/PHI/금융 자동 분류·알림.", tags: ["PII"] },
  { cat: "보안·암호화", color: "#ef4444", name: "Amazon Inspector", short: "취약점 스캔",
    desc: "EC2·ECR·Lambda 자동 취약점·CVE 스캔. Agent 불필요.", tags: ["취약점"] },
  { cat: "보안·암호화", color: "#ef4444", name: "AWS Security Hub", short: "보안 중앙 대시보드",
    desc: "GuardDuty/Inspector/Macie/Config 발견사항 통합. CIS/PCI 기준 자동 평가.", tags: ["대시보드"] },
  { cat: "보안·암호화", color: "#ef4444", name: "AWS WAF", short: "웹 방화벽",
    desc: "SQL injection·XSS 등 L7 차단. Managed Rules·Bot Control.", tags: ["웹보안"] },
  { cat: "보안·암호화", color: "#ef4444", name: "AWS Shield", short: "DDoS 방어",
    desc: "Standard(기본 무료)·Advanced(유료·DRT 지원·비용 보호).", tags: ["DDoS"] },
  { cat: "보안·암호화", color: "#ef4444", name: "AWS Firewall Manager", short: "중앙 WAF/Shield 관리",
    desc: "Organizations 전체에 WAF·Shield·Network FW·SG 룰 일괄 배포.", tags: ["중앙관리"] },
  { cat: "보안·암호화", color: "#ef4444", name: "AWS Certificate Manager (ACM)", short: "인증서 관리",
    desc: "무료 SSL/TLS 인증서. ELB·CloudFront·API Gateway 자동 연동.", tags: ["인증서"] },
  { cat: "보안·암호화", color: "#ef4444", name: "AWS IAM Access Analyzer", short: "권한 분석",
    desc: "외부 공유 리소스·과도 권한 탐지. Zelkova 기반 정책 분석.", tags: ["감사"] },
  { cat: "보안·암호화", color: "#ef4444", name: "AWS Detective", short: "보안 조사",
    desc: "GuardDuty 발견사항을 ML로 연관 분석. Root cause 시각화.", tags: ["조사"] },

  // ============ 분석·데이터 ============
  { cat: "분석·데이터", color: "#0ea5e9", name: "AWS Glue", short: "서버리스 ETL",
    desc: "Spark 기반 ETL + Data Catalog. 크롤러·Job·Studio·DataBrew 포함.", tags: ["ETL"] },
  { cat: "분석·데이터", color: "#0ea5e9", name: "Amazon Athena", short: "S3 서버리스 SQL",
    desc: "Presto 기반. Schema-on-read. 쿼리당 과금. Glue Catalog 연동.", tags: ["SQL"] },
  { cat: "분석·데이터", color: "#0ea5e9", name: "Amazon EMR", short: "Hadoop/Spark",
    desc: "Spark/Hive/HBase/Presto 클러스터. Spot/Graviton으로 비용 절감.", tags: ["빅데이터"] },
  { cat: "분석·데이터", color: "#0ea5e9", name: "Amazon Kinesis Data Streams", short: "실시간 스트림",
    desc: "샤드 기반 수집. 여러 컨슈머 동시 재소비.", tags: ["스트리밍"] },
  { cat: "분석·데이터", color: "#0ea5e9", name: "Amazon Kinesis Data Firehose", short: "스트림 적재",
    desc: "S3/Redshift/OpenSearch에 자동 전달. 변환·버퍼링 내장.", tags: ["스트리밍"] },
  { cat: "분석·데이터", color: "#0ea5e9", name: "Amazon Kinesis Data Analytics", short: "실시간 분석",
    desc: "Flink/SQL로 스트림 실시간 분석. 윈도우·집계·조인.", tags: ["스트리밍"] },
  { cat: "분석·데이터", color: "#0ea5e9", name: "Amazon MSK", short: "관리형 Kafka",
    desc: "Apache Kafka 완전관리. MSK Connect, Serverless 옵션.", tags: ["Kafka"] },
  { cat: "분석·데이터", color: "#0ea5e9", name: "Amazon OpenSearch Service", short: "검색·로그 분석",
    desc: "Elasticsearch fork. 로그·검색·벡터 DB 용도.", tags: ["검색"] },
  { cat: "분석·데이터", color: "#0ea5e9", name: "Amazon QuickSight", short: "BI 시각화",
    desc: "서버리스 BI. ML Insights·임베딩·Q 자연어 질의.", tags: ["BI"] },
  { cat: "분석·데이터", color: "#0ea5e9", name: "AWS Lake Formation", short: "데이터 레이크 거버넌스",
    desc: "Glue Catalog 기반 세분화 권한(테이블/행/열). LF-Tag로 관리.", tags: ["거버넌스"] },
  { cat: "분석·데이터", color: "#0ea5e9", name: "Amazon Data Exchange", short: "제3자 데이터 마켓",
    desc: "인증된 데이터 구독·API. 분석에 즉시 활용.", tags: ["마켓"] },

  // ============ 통합·메시징 ============
  { cat: "통합·메시징", color: "#ec4899", name: "Amazon SQS", short: "메시지 큐",
    desc: "Standard(high throughput, 최소 1회) / FIFO(순서·중복 제거, 정확히 1회).", tags: ["큐"] },
  { cat: "통합·메시징", color: "#ec4899", name: "Amazon SNS", short: "Pub/Sub",
    desc: "Topic 기반 1:N 팬아웃. Email/SMS/Lambda/SQS 구독.", tags: ["Pub/Sub"] },
  { cat: "통합·메시징", color: "#ec4899", name: "Amazon EventBridge", short: "이벤트 버스",
    desc: "SaaS·AWS·커스텀 이벤트 라우팅. 스케줄러 기능 포함.", tags: ["이벤트"] },
  { cat: "통합·메시징", color: "#ec4899", name: "AWS Step Functions", short: "워크플로",
    desc: "Standard(장기)/Express(단기). 상태 기반 오케스트레이션·에러 처리.", tags: ["워크플로"] },
  { cat: "통합·메시징", color: "#ec4899", name: "Amazon MQ", short: "관리형 ActiveMQ/RabbitMQ",
    desc: "기존 JMS/AMQP 앱 호환. 온프레미스에서 Lift & Shift.", tags: ["MQ"] },
  { cat: "통합·메시징", color: "#ec4899", name: "Amazon API Gateway", short: "API 관리",
    desc: "REST/HTTP/WebSocket API. 인증·throttling·Lambda 프록시.", tags: ["API"] },
  { cat: "통합·메시징", color: "#ec4899", name: "AWS AppSync", short: "관리형 GraphQL",
    desc: "실시간·오프라인 지원 GraphQL API. DynamoDB/Lambda resolver.", tags: ["GraphQL"] },
  { cat: "통합·메시징", color: "#ec4899", name: "AWS IoT Core", short: "IoT 플랫폼",
    desc: "디바이스 연결·MQTT·Device Shadow·Rules Engine.", tags: ["IoT"] },

  // ============ 운영·관리 ============
  { cat: "운영·관리", color: "#8b5cf6", name: "Amazon CloudWatch", short: "모니터링·로그",
    desc: "Metrics·Logs·Logs Insights·Alarm·Dashboard·Synthetic Canary·RUM.", tags: ["핵심"] },
  { cat: "운영·관리", color: "#8b5cf6", name: "AWS Systems Manager", short: "운영 자동화",
    desc: "Session Manager·Patch Manager·Run Command·State Manager·Parameter Store.", tags: ["운영"] },
  { cat: "운영·관리", color: "#8b5cf6", name: "AWS CloudFormation", short: "IaC",
    desc: "YAML/JSON 템플릿 인프라 코드화. Stack·StackSet(멀티 계정).", tags: ["IaC"] },
  { cat: "운영·관리", color: "#8b5cf6", name: "AWS CDK", short: "프로그래밍 IaC",
    desc: "TS/Python/Java 등 언어로 CloudFormation 생성. 재사용성 높음.", tags: ["IaC"] },
  { cat: "운영·관리", color: "#8b5cf6", name: "AWS Trusted Advisor", short: "베스트 프랙티스 검사",
    desc: "비용·성능·보안·내결함성·서비스 한도 5개 카테고리.", tags: ["검토"] },
  { cat: "운영·관리", color: "#8b5cf6", name: "AWS Well-Architected Tool", short: "아키텍처 리뷰",
    desc: "6개 기둥(운영·보안·신뢰성·성능·비용·지속가능성) 자가진단.", tags: ["설계"] },
  { cat: "운영·관리", color: "#8b5cf6", name: "AWS Cost Explorer", short: "비용 분석",
    desc: "비용·사용량 시각화·예측. Savings Plan·RI 추천.", tags: ["비용"] },
  { cat: "운영·관리", color: "#8b5cf6", name: "AWS Budgets", short: "예산 알림",
    desc: "비용·사용량·RI 활용률 임계값 알림·자동 액션.", tags: ["비용"] },
  { cat: "운영·관리", color: "#8b5cf6", name: "AWS Cost and Usage Report (CUR)", short: "상세 청구 데이터",
    desc: "시간당 세부 사용·비용 데이터 S3 저장. Athena/QuickSight 분석.", tags: ["비용"] },
  { cat: "운영·관리", color: "#8b5cf6", name: "AWS X-Ray", short: "분산 추적",
    desc: "마이크로서비스 호출 흐름 시각화. 지연 병목 진단.", tags: ["APM"] },
  { cat: "운영·관리", color: "#8b5cf6", name: "AWS Chatbot", short: "Slack/Teams 통합",
    desc: "CloudWatch 알람·이벤트를 Slack/Teams에 알림. 일부 명령 실행.", tags: ["알림"] }
];
