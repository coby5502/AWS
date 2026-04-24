// SCS-C03 (AWS Certified Security - Specialty) 전용 부가 콘텐츠
window.SCS_COMPARES = [
  { title: "GuardDuty vs Security Hub vs Detective vs Inspector", badge: "핵심", cols: 4,
    cards: [
      { name: "GuardDuty", dot: "#7c6fff", rows: [
        { k: "목적", v: "위협 탐지 (ML)" },
        { k: "소스", v: "VPC Flow Logs·CloudTrail·DNS·S3·EKS·Malware" },
        { k: "출력", v: "Finding 이벤트" },
        { k: "용도", v: "이상 행위·악성 IP·자격증명 남용" }
      ]},
      { name: "Security Hub", dot: "#34d399", rows: [
        { k: "목적", v: "중앙 대시보드" },
        { k: "소스", v: "GuardDuty/Inspector/Macie/Config 집계" },
        { k: "출력", v: "CIS/PCI 기준 점수" },
        { k: "용도", v: "컴플라이언스·전체 요약" }
      ]},
      { name: "Detective", dot: "#f59e0b", rows: [
        { k: "목적", v: "조사·근본 원인 분석" },
        { k: "소스", v: "GuardDuty Finding → 상관관계" },
        { k: "출력", v: "그래프 기반 시각화" },
        { k: "용도", v: "발견된 위협의 맥락 파악" }
      ]},
      { name: "Inspector", dot: "#ec4899", rows: [
        { k: "목적", v: "취약점 스캔 (CVE)" },
        { k: "소스", v: "EC2·ECR·Lambda" },
        { k: "출력", v: "CVE 심각도·권고" },
        { k: "용도", v: "소프트웨어 취약점 관리" }
      ]}
    ],
    tip: "💡 탐지=GuardDuty, 취약점=Inspector, 통합대시=Security Hub, 조사=Detective"
  },
  { title: "KMS vs CloudHSM vs Secrets Manager vs Parameter Store", badge: "자주 출제", cols: 4,
    cards: [
      { name: "AWS KMS", dot: "#7c6fff", rows: [
        { k: "용도", v: "키 관리·봉투 암호화" }, { k: "관리", v: "AWS Managed/Customer" },
        { k: "회전", v: "CMK 1년 자동" }, { k: "FIPS", v: "140-2 Level 3 (HSM backed)" }
      ]},
      { name: "CloudHSM", dot: "#34d399", rows: [
        { k: "용도", v: "전용 HSM" }, { k: "관리", v: "고객 전용" },
        { k: "회전", v: "사용자 구현" }, { k: "FIPS", v: "140-2 Level 3" }
      ]},
      { name: "Secrets Manager", dot: "#f59e0b", rows: [
        { k: "용도", v: "DB 자격증명·API 키" }, { k: "관리", v: "자동 회전 지원" },
        { k: "회전", v: "RDS/Redshift 내장 템플릿" }, { k: "과금", v: "시크릿당 $0.40/월" }
      ]},
      { name: "Parameter Store", dot: "#ec4899", rows: [
        { k: "용도", v: "구성 값·시크릿 경량" }, { k: "관리", v: "수동·Lambda 회전" },
        { k: "회전", v: "수동 구현 필요" }, { k: "과금", v: "Standard 무료" }
      ]}
    ],
    tip: "💡 규제 준수 = CloudHSM / 자동 회전 = Secrets Manager / 단순 시크릿 = Parameter Store / 키 관리 = KMS"
  },
  { title: "네트워크 방어: SG vs NACL vs WAF vs Shield vs Network Firewall", badge: "핵심", cols: 3,
    cards: [
      { name: "Security Group", dot: "#7c6fff", rows: [
        { k: "계층", v: "L3/L4 (인스턴스)" }, { k: "상태", v: "Stateful" },
        { k: "규칙", v: "Allow만" }, { k: "용도", v: "인스턴스 레벨 방화벽" }
      ]},
      { name: "NACL", dot: "#34d399", rows: [
        { k: "계층", v: "L3/L4 (서브넷)" }, { k: "상태", v: "Stateless" },
        { k: "규칙", v: "Allow/Deny" }, { k: "용도", v: "서브넷 전체 브로드 필터" }
      ]},
      { name: "WAF/Shield", dot: "#f59e0b", rows: [
        { k: "계층", v: "L7 (애플리케이션)" }, { k: "대상", v: "ALB·CloudFront·API GW" },
        { k: "규칙", v: "SQL injection·XSS·Rate" }, { k: "용도", v: "웹 공격·DDoS 방어" }
      ]}
    ],
    tip: "💡 네트워크 격리 = SG/NACL / 웹 공격 = WAF / DDoS = Shield Advanced / IDS/IPS = Network Firewall"
  },
  { title: "IAM 세분화 권한", badge: "자주 출제", cols: 3,
    cards: [
      { name: "Identity Policy", dot: "#7c6fff", rows: [
        { k: "주체", v: "IAM User/Group/Role" }, { k: "유형", v: "Managed/Inline" },
        { k: "제한", v: "서비스·리소스·조건" }
      ]},
      { name: "Resource Policy", dot: "#34d399", rows: [
        { k: "주체", v: "리소스 (S3 bucket, KMS key)" }, { k: "유형", v: "JSON 문서" },
        { k: "제한", v: "Principal 지정 가능 (cross-account)" }
      ]},
      { name: "SCP (Organizations)", dot: "#f59e0b", rows: [
        { k: "주체", v: "OU/계정" }, { k: "유형", v: "Deny 중심" },
        { k: "제한", v: "모든 IAM 권한 상위에서 제한" }
      ]}
    ],
    tip: "💡 사용자별 = Identity / 리소스별 = Resource / 계정 전체 = SCP"
  }
];

window.SCS_KEYWORDS = [
  { kw: "detect unauthorized access · anomaly", services: "Amazon GuardDuty", tip: "ML 기반. findings → EventBridge/Security Hub" },
  { kw: "central security dashboard", services: "AWS Security Hub + CIS/PCI/NIST", tip: "전체 계정 finding 집계" },
  { kw: "investigate security finding", services: "Amazon Detective", tip: "그래프 기반 근본 원인 분석" },
  { kw: "vulnerability scan · CVE", services: "Amazon Inspector (EC2/ECR/Lambda)", tip: "Agent 불필요. 자동 스캔" },
  { kw: "PII/PHI discovery in S3", services: "Amazon Macie", tip: "ML 기반 민감 데이터 분류" },
  { kw: "auto rotate DB credentials", services: "Secrets Manager + Lambda rotation", tip: "RDS/Redshift/DocumentDB 내장" },
  { kw: "FIPS 140-2 level 3 · dedicated HSM", services: "AWS CloudHSM", tip: "규제 산업 전용 HSM" },
  { kw: "envelope encryption", services: "KMS GenerateDataKey + CMK", tip: "Data Key로 데이터 암호화, CMK로 Data Key 암호화" },
  { kw: "encrypt data at rest S3", services: "SSE-S3 / SSE-KMS / SSE-C / CSE", tip: "SSE-KMS가 감사 가장 용이" },
  { kw: "cross-account resource access", services: "Resource Policy + AssumeRole", tip: "신뢰 정책 + 권한 정책 쌍방 설정" },
  { kw: "restrict service/region by account", services: "Organizations SCP", tip: "deny 중심. OU 상속" },
  { kw: "centralize waf/shield across accounts", services: "AWS Firewall Manager", tip: "Organizations 연동 일괄 배포" },
  { kw: "bastion-less shell access", services: "SSM Session Manager", tip: "IAM + SSM Agent + VPC Endpoint. CloudTrail 감사" },
  { kw: "private aws service access", services: "VPC Interface Endpoint (PrivateLink)", tip: "인터넷 우회 + Endpoint Policy" },
  { kw: "log data tampering prevention", services: "CloudTrail Log File Validation + S3 Object Lock", tip: "digest file + WORM" },
  { kw: "threat intelligence feed", services: "GuardDuty + Custom threat list (S3)", tip: "IP·도메인 차단 목록 주입" },
  { kw: "network traffic analysis", services: "VPC Flow Logs + Athena (+ GuardDuty)", tip: "REJECT 탐색으로 SG/NACL 진단" },
  { kw: "deep packet inspection", services: "AWS Network Firewall (Suricata rules)", tip: "TGW/Inspection VPC 경로" },
  { kw: "external sharing analyzer", services: "IAM Access Analyzer", tip: "public/cross-account 자원 탐지" },
  { kw: "credential compromise detection", services: "GuardDuty + IAM Access Analyzer", tip: "EC2 IAM credential 유출 시 Finding" },
  { kw: "multi-factor authentication enforcement", services: "IAM Policy Condition (aws:MultiFactorAuthPresent)", tip: "MFA 없으면 deny" },
  { kw: "temporary elevated access", services: "IAM Roles Anywhere / AssumeRole with MFA", tip: "Just-in-time 권한 부여" },
  { kw: "sso across apps", services: "IAM Identity Center (구 AWS SSO)", tip: "SAML/OIDC + Permission Set" },
  { kw: "audit api activity", services: "CloudTrail (Management/Data/Insights)", tip: "Organization Trail로 전 계정 중앙" },
  { kw: "encryption in transit", services: "TLS/SSL + ACM + Cipher Policy", tip: "CloudFront/ALB TLS 1.2+ 강제" },
  { kw: "remediate non-compliant resources", services: "AWS Config Rule + SSM Automation", tip: "자동 수정 Action" }
];

window.SCS_TRAPS = [
  { icon: "🛡️", title: "WAF만으로 DDoS 방어 기대하는 함정", wrong: "L3/L4 DDoS는 WAF에서 처리 불가", right: "<strong>Shield Advanced</strong> (L3/L4 + WAF 통합)" },
  { icon: "🔑", title: "IAM Policy만으로 cross-account 접근 설정", wrong: "Identity Policy만으로는 부족", right: "<strong>Resource Policy (Principal 지정) + AssumeRole</strong> 쌍방 구성" },
  { icon: "📋", title: "CloudTrail에 Data Events 자동 활성 가정", wrong: "기본은 Management Events만", right: "<strong>Data Events (S3/Lambda)</strong> 별도 활성화 + 추가 비용" },
  { icon: "🔐", title: "KMS Multi-Region Key를 일반 CMK와 혼동", wrong: "일반 CMK는 리전 간 사용 불가", right: "<strong>Multi-Region Key</strong>로 동일 키 material 여러 리전" },
  { icon: "🚨", title: "GuardDuty만으로 자동 차단 기대", wrong: "GuardDuty는 탐지만", right: "<strong>EventBridge → Lambda/SSM Automation</strong>으로 자동 대응" },
  { icon: "📊", title: "Inspector가 네트워크 접근 감지한다는 오해", wrong: "Inspector는 OS/컨테이너 취약점 스캔", right: "네트워크 이상 = <strong>GuardDuty</strong> / VPC Flow Logs" },
  { icon: "🗄️", title: "S3 public 차단을 Bucket Policy로만 하는 함정", wrong: "ACL·IAM 경로로도 public 가능", right: "<strong>S3 Block Public Access (계정/버킷 수준)</strong> 활성" },
  { icon: "🔄", title: "Secrets 회전에 Lambda 직접 작성하는 함정", wrong: "수동 rotation Lambda 유지보수 부담", right: "<strong>RDS/Redshift/DocumentDB 내장 rotation</strong>" },
  { icon: "🌐", title: "프라이빗 접근에 NAT만 쓰는 함정", wrong: "NAT는 인터넷 경유 + 비용 발생", right: "<strong>VPC Interface Endpoint (PrivateLink)</strong>로 완전 프라이빗" },
  { icon: "🎭", title: "IAM User 장기 credential 사용하는 함정", wrong: "access key는 유출·회전 리스크", right: "<strong>IAM Role + AssumeRole</strong> 임시 자격증명 · Access Key 최소화" },
  { icon: "🗝️", title: "CMK 삭제 후 복구 가능 가정", wrong: "즉시 삭제 가정", right: "<strong>7~30일 대기 기간</strong> 후 삭제. 그 전엔 disable만" },
  { icon: "📝", title: "CloudTrail 무결성 확인 미활성", wrong: "로그 변조 탐지 불가", right: "<strong>Log File Validation</strong> + 암호화 + S3 Object Lock" },
  { icon: "🕵️", title: "Config Rule만으로 위반 자동 수정 기대", wrong: "Config Rule은 탐지만", right: "<strong>Config Remediation Action + SSM Automation</strong>" },
  { icon: "🔏", title: "Macie가 모든 객체를 자동 스캔한다는 가정", wrong: "샘플링 기반·비용 고려", right: "<strong>Macie Sensitive Data Discovery Job</strong>으로 명시적 스캔" },
  { icon: "📡", title: "Network Firewall과 WAF 역할 혼동", wrong: "WAF로 프로토콜 필터링 시도", right: "WAF = L7 웹 / <strong>Network Firewall = L3-L7 IDS/IPS</strong>" }
];

window.SCS_DECISIONS = [
  { title: "위협 탐지·대응", icon: "🚨", q: "필요한 기능은?",
    opts: [
      { label: "이상 행위·악성 IP 탐지", answer: "→ <strong>Amazon GuardDuty</strong>" },
      { label: "중앙 보안 대시보드", answer: "→ <strong>AWS Security Hub</strong>" },
      { label: "보안 사고 근본 원인 조사", answer: "→ <strong>Amazon Detective</strong>" },
      { label: "EC2/ECR/Lambda 취약점 스캔", answer: "→ <strong>Amazon Inspector</strong>" },
      { label: "S3 PII/PHI 탐지", answer: "→ <strong>Amazon Macie</strong>" },
      { label: "자동 대응·차단", answer: "→ <strong>EventBridge + Lambda/SSM Automation</strong>" }
    ]},
  { title: "암호화·키 관리", icon: "🔐", q: "요구 특성은?",
    opts: [
      { label: "일반 AWS 서비스 암호화", answer: "→ <strong>KMS CMK (+ Envelope Encryption)</strong>" },
      { label: "FIPS 140-2 Level 3 규제", answer: "→ <strong>AWS CloudHSM</strong>" },
      { label: "멀티 리전 키 material 공유", answer: "→ <strong>KMS Multi-Region Key</strong>" },
      { label: "Customer Key Material 가져오기", answer: "→ <strong>KMS BYOK (Imported Key)</strong>" },
      { label: "클라이언트 측 암호화", answer: "→ <strong>KMS GenerateDataKey + SDK</strong>" }
    ]},
  { title: "자격증명·권한", icon: "👤", q: "시나리오는?",
    opts: [
      { label: "DB 비밀번호 자동 회전", answer: "→ <strong>Secrets Manager + RDS rotation</strong>" },
      { label: "구성 값·경량 시크릿", answer: "→ <strong>SSM Parameter Store</strong>" },
      { label: "외부 공유 자원 탐지", answer: "→ <strong>IAM Access Analyzer</strong>" },
      { label: "SSO 여러 계정·앱", answer: "→ <strong>IAM Identity Center</strong>" },
      { label: "온프레미스 → AWS 임시 자격", answer: "→ <strong>IAM Roles Anywhere</strong>" },
      { label: "MFA 강제", answer: "→ <strong>IAM Policy Condition (MultiFactorAuthPresent)</strong>" }
    ]},
  { title: "네트워크 보안", icon: "🌐", q: "보호 대상은?",
    opts: [
      { label: "웹 공격 (SQLi/XSS)", answer: "→ <strong>AWS WAF</strong>" },
      { label: "DDoS 방어", answer: "→ <strong>AWS Shield Advanced</strong>" },
      { label: "VPC 인바운드 패킷 검사 (IDS/IPS)", answer: "→ <strong>AWS Network Firewall</strong>" },
      { label: "멀티 계정 WAF/Shield 중앙 관리", answer: "→ <strong>AWS Firewall Manager</strong>" },
      { label: "프라이빗 AWS 서비스 접근", answer: "→ <strong>VPC Interface Endpoint</strong>" }
    ]},
  { title: "감사·컴플라이언스", icon: "📋", q: "요구사항은?",
    opts: [
      { label: "API 활동 감사", answer: "→ <strong>CloudTrail Organization Trail</strong>" },
      { label: "리소스 구성 변경 추적", answer: "→ <strong>AWS Config</strong>" },
      { label: "위반 자동 수정", answer: "→ <strong>Config Remediation + SSM Automation</strong>" },
      { label: "로그 변조 방지", answer: "→ <strong>CloudTrail Log Validation + S3 Object Lock</strong>" },
      { label: "규제 보고서 (SOC/PCI/HIPAA)", answer: "→ <strong>AWS Artifact + Audit Manager</strong>" }
    ]}
];

window.SCS_GLOSSARY = [
  { cat: "IAM·Identity", color: "#7c6fff", name: "AWS IAM", short: "접근 제어", desc: "User/Group/Role/Policy. Policy는 Identity 또는 Resource 기반.", tags: ["핵심"] },
  { cat: "IAM·Identity", color: "#7c6fff", name: "IAM Role", short: "임시 자격증명", desc: "AssumeRole로 STS 임시 credential 발급. 최소 권한·회전 용이.", tags: ["핵심"] },
  { cat: "IAM·Identity", color: "#7c6fff", name: "IAM Identity Center", short: "중앙 SSO", desc: "Organizations 전체 SSO. SAML/OIDC 외부 IdP 연동.", tags: ["SSO"] },
  { cat: "IAM·Identity", color: "#7c6fff", name: "IAM Access Analyzer", short: "권한 분석", desc: "외부 공유 자원·과도 권한 탐지. Zelkova 기반.", tags: ["감사"] },
  { cat: "IAM·Identity", color: "#7c6fff", name: "IAM Roles Anywhere", short: "온프레미스 임시 자격", desc: "X.509 인증서로 온프레 서버에 AWS 임시 credential 발급.", tags: ["하이브리드"] },
  { cat: "IAM·Identity", color: "#7c6fff", name: "Amazon Cognito", short: "앱 사용자 인증", desc: "User Pool(회원가입) + Identity Pool(AWS 자격증명 교환).", tags: ["앱"] },
  { cat: "IAM·Identity", color: "#7c6fff", name: "AWS STS", short: "임시 보안 자격증명", desc: "AssumeRole·AssumeRoleWithSAML·AssumeRoleWithWebIdentity.", tags: ["STS"] },
  { cat: "IAM·Identity", color: "#7c6fff", name: "AWS Organizations SCP", short: "계정 수준 정책", desc: "OU/계정에 deny 중심 정책. IAM보다 상위.", tags: ["거버넌스"] },

  { cat: "암호화·키", color: "#34d399", name: "AWS KMS", short: "키 관리", desc: "AWS/Customer Managed Key. 봉투 암호화. CMK 1년 자동 회전.", tags: ["핵심"] },
  { cat: "암호화·키", color: "#34d399", name: "KMS Multi-Region Key", short: "리전 간 키", desc: "동일 key material을 여러 리전에 복제. DR·cross-region 서비스.", tags: ["멀티리전"] },
  { cat: "암호화·키", color: "#34d399", name: "KMS Grant", short: "일시 권한 위임", desc: "IAM Policy 없이 리소스 수명에 따른 임시 권한. Lambda 등 동적 위임.", tags: ["권한"] },
  { cat: "암호화·키", color: "#34d399", name: "AWS CloudHSM", short: "전용 HSM", desc: "FIPS 140-2 Level 3. 고객 전용 하드웨어. 규제 산업 필수 시.", tags: ["HSM"] },
  { cat: "암호화·키", color: "#34d399", name: "AWS Certificate Manager (ACM)", short: "TLS 인증서", desc: "무료 공인 인증서 발급·갱신. ELB/CloudFront/API GW 통합.", tags: ["TLS"] },
  { cat: "암호화·키", color: "#34d399", name: "ACM Private CA", short: "사설 CA", desc: "내부 서비스용 사설 인증서 발급. EKS·IoT mTLS.", tags: ["사설CA"] },
  { cat: "암호화·키", color: "#34d399", name: "AWS Secrets Manager", short: "시크릿 관리", desc: "DB 자격증명·API 키. 자동 회전 (Lambda 템플릿 내장).", tags: ["시크릿"] },
  { cat: "암호화·키", color: "#34d399", name: "SSM Parameter Store", short: "구성 저장소", desc: "Standard (무료) / Advanced ($0.05). SecureString + KMS.", tags: ["구성"] },

  { cat: "위협 탐지", color: "#ef4444", name: "Amazon GuardDuty", short: "위협 탐지", desc: "ML 기반. VPC Flow Logs·CloudTrail·DNS·S3·EKS·Malware 분석.", tags: ["핵심"] },
  { cat: "위협 탐지", color: "#ef4444", name: "AWS Security Hub", short: "중앙 대시보드", desc: "GuardDuty/Inspector/Macie/Config 집계. CIS/PCI/NIST 기준.", tags: ["중앙"] },
  { cat: "위협 탐지", color: "#ef4444", name: "Amazon Detective", short: "조사 분석", desc: "GuardDuty Finding 근본 원인 그래프 분석.", tags: ["조사"] },
  { cat: "위협 탐지", color: "#ef4444", name: "Amazon Inspector", short: "취약점 스캔", desc: "EC2·ECR·Lambda CVE 자동 스캔. Agent 불필요.", tags: ["CVE"] },
  { cat: "위협 탐지", color: "#ef4444", name: "Amazon Macie", short: "민감 데이터 탐지", desc: "S3 PII/PHI/PCI ML 분류·알림.", tags: ["PII"] },
  { cat: "위협 탐지", color: "#ef4444", name: "AWS Audit Manager", short: "감사 자동화", desc: "SOC/PCI/HIPAA/GDPR 등 프레임워크 기반 증거 자동 수집.", tags: ["컴플"] },

  { cat: "네트워크 보안", color: "#3b82f6", name: "AWS WAF", short: "웹 방화벽", desc: "L7 공격 차단 (SQLi·XSS·Bot). ALB/CloudFront/API GW/AppSync.", tags: ["L7"] },
  { cat: "네트워크 보안", color: "#3b82f6", name: "AWS Shield Standard/Advanced", short: "DDoS 방어", desc: "Standard 무료. Advanced 유료 + DRT + 비용 보호 + WAF 포함.", tags: ["DDoS"] },
  { cat: "네트워크 보안", color: "#3b82f6", name: "AWS Network Firewall", short: "VPC IDS/IPS", desc: "Suricata 규칙·도메인 필터. TGW/Inspection VPC 경로.", tags: ["IDS"] },
  { cat: "네트워크 보안", color: "#3b82f6", name: "AWS Firewall Manager", short: "중앙 WAF/Shield 관리", desc: "Organizations 전체 WAF/Shield/Network FW/SG 일괄.", tags: ["중앙"] },
  { cat: "네트워크 보안", color: "#3b82f6", name: "VPC Security Group", short: "인스턴스 방화벽", desc: "Stateful. Allow only. 5개/ENI 60 규칙/SG.", tags: ["SG"] },
  { cat: "네트워크 보안", color: "#3b82f6", name: "VPC NACL", short: "서브넷 방화벽", desc: "Stateless (ephemeral ports 주의). Allow/Deny.", tags: ["NACL"] },
  { cat: "네트워크 보안", color: "#3b82f6", name: "VPC Flow Logs", short: "트래픽 로그", desc: "ENI/Subnet/VPC 수준. REJECT 탐색으로 SG/NACL 진단.", tags: ["로그"] },
  { cat: "네트워크 보안", color: "#3b82f6", name: "AWS PrivateLink", short: "프라이빗 서비스", desc: "Interface Endpoint로 AWS/SaaS 프라이빗 접근.", tags: ["프라이빗"] },
  { cat: "네트워크 보안", color: "#3b82f6", name: "Route 53 DNS Firewall", short: "DNS 필터", desc: "악성 도메인 요청 차단. GuardDuty threat list 연동.", tags: ["DNS"] },

  { cat: "감사·로그", color: "#06b6d4", name: "AWS CloudTrail", short: "API 감사 로그", desc: "Management/Data/Insights Events. Organization Trail로 중앙 집계.", tags: ["핵심"] },
  { cat: "감사·로그", color: "#06b6d4", name: "CloudTrail Log File Validation", short: "로그 무결성", desc: "digest file로 변조 탐지. 포렌식 필수.", tags: ["무결성"] },
  { cat: "감사·로그", color: "#06b6d4", name: "S3 Object Lock", short: "WORM", desc: "Governance/Compliance 모드. Compliance는 root도 삭제 불가.", tags: ["WORM"] },
  { cat: "감사·로그", color: "#06b6d4", name: "AWS Config", short: "구성 추적", desc: "리소스 변경 이력·컴플라이언스 평가·자동 수정.", tags: ["감사"] },
  { cat: "감사·로그", color: "#06b6d4", name: "AWS CloudWatch Logs", short: "로그 집계", desc: "Metric Filter + Alarm으로 보안 이벤트 탐지.", tags: ["로그"] },

  { cat: "운영·대응", color: "#f59e0b", name: "SSM Session Manager", short: "Bastion 없이 쉘", desc: "IAM + SSM Agent + VPC Endpoint. CloudTrail 감사.", tags: ["원격"] },
  { cat: "운영·대응", color: "#f59e0b", name: "SSM Patch Manager", short: "OS 패치", desc: "Patch Baseline + Maintenance Window. 자동 보안 패치.", tags: ["패치"] },
  { cat: "운영·대응", color: "#f59e0b", name: "SSM Automation", short: "다단계 워크플로", desc: "Config Remediation Action으로 위반 자동 수정.", tags: ["자동화"] },
  { cat: "운영·대응", color: "#f59e0b", name: "EventBridge", short: "이벤트 버스", desc: "GuardDuty Finding → Lambda/SSM 자동 대응 트리거.", tags: ["이벤트"] }
];
