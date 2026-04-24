// ANS-C01 (AWS Certified Advanced Networking - Specialty) 전용 부가 콘텐츠
window.ANS_COMPARES = [
  { title: "하이브리드 연결: DX vs VPN vs TGW Connect", badge: "핵심", cols: 3,
    cards: [
      { name: "Direct Connect", dot: "#7c6fff", rows: [
        { k: "대역폭", v: "1/10/100 Gbps 전용" }, { k: "지연", v: "낮고 일정" },
        { k: "비용", v: "높음 (물리 회선)" }, { k: "이중화", v: "2개 location 또는 VPN 백업" }
      ]},
      { name: "Site-to-Site VPN", dot: "#34d399", rows: [
        { k: "대역폭", v: "1.25 Gbps/터널" }, { k: "지연", v: "인터넷 경로" },
        { k: "비용", v: "낮음" }, { k: "이중화", v: "터널 2개 기본" }
      ]},
      { name: "TGW Connect", dot: "#f59e0b", rows: [
        { k: "대역폭", v: "SD-WAN GRE 터널" }, { k: "프로토콜", v: "BGP" },
        { k: "통합", v: "SD-WAN 어플라이언스" }, { k: "이중화", v: "다중 GRE 터널" }
      ]}
    ],
    tip: "💡 안정·대역 = DX / 저비용·DR = VPN / SD-WAN 통합 = TGW Connect"
  },
  { title: "DX VIF 종류", badge: "자주 출제", cols: 3,
    cards: [
      { name: "Private VIF", dot: "#7c6fff", rows: [
        { k: "대상", v: "단일 VPC (Virtual Private Gateway)" }, { k: "BGP", v: "Private ASN" },
        { k: "용도", v: "단일 VPC 연결 (레거시)" }
      ]},
      { name: "Public VIF", dot: "#34d399", rows: [
        { k: "대상", v: "퍼블릭 AWS 서비스 (S3 등)" }, { k: "BGP", v: "Public ASN" },
        { k: "용도", v: "S3·DynamoDB 전용선 경유" }
      ]},
      { name: "Transit VIF", dot: "#f59e0b", rows: [
        { k: "대상", v: "Direct Connect Gateway → TGW" }, { k: "BGP", v: "Private ASN" },
        { k: "용도", v: "다수 VPC·계정 집중 연결" }
      ]}
    ],
    tip: "💡 단일 VPC = Private / 퍼블릭 서비스 = Public / 다수 VPC 허브 = Transit (권장)"
  },
  { title: "Route 53 라우팅 정책", badge: "핵심", cols: 4,
    cards: [
      { name: "Simple", dot: "#7c6fff", rows: [
        { k: "방식", v: "단일 답" }, { k: "Health", v: "없음" }, { k: "용도", v: "기본" }
      ]},
      { name: "Failover", dot: "#ef4444", rows: [
        { k: "방식", v: "Primary/Secondary" }, { k: "Health", v: "필수" }, { k: "용도", v: "DR" }
      ]},
      { name: "Geolocation / Geoproximity", dot: "#34d399", rows: [
        { k: "방식", v: "위치 기반" }, { k: "Health", v: "선택" }, { k: "용도", v: "컴플라이언스·현지화" }
      ]},
      { name: "Latency / Weighted", dot: "#f59e0b", rows: [
        { k: "방식", v: "지연·가중치" }, { k: "Health", v: "선택" }, { k: "용도", v: "성능·Canary" }
      ]}
    ],
    tip: "💡 DR = Failover / 글로벌 지연 최소 = Latency / A/B = Weighted / 현지 규제 = Geolocation"
  },
  { title: "엣지·글로벌 가속", badge: "자주 출제", cols: 3,
    cards: [
      { name: "CloudFront", dot: "#7c6fff", rows: [
        { k: "프로토콜", v: "HTTP/HTTPS/WebSocket" }, { k: "원본", v: "S3·ALB·EC2·커스텀" },
        { k: "캐시", v: "있음" }, { k: "용도", v: "정적·동적 콘텐츠" }
      ]},
      { name: "Global Accelerator", dot: "#34d399", rows: [
        { k: "프로토콜", v: "TCP/UDP Anycast" }, { k: "원본", v: "ALB/NLB/EC2/EIP" },
        { k: "캐시", v: "없음" }, { k: "용도", v: "비HTTP·게임·VoIP" }
      ]},
      { name: "Route 53 Latency", dot: "#f59e0b", rows: [
        { k: "프로토콜", v: "DNS" }, { k: "원본", v: "DNS 응답" },
        { k: "캐시", v: "DNS TTL" }, { k: "용도", v: "간단한 글로벌 라우팅" }
      ]}
    ],
    tip: "💡 웹 콘텐츠 = CloudFront / TCP/UDP = Global Accelerator / 단순 DNS = R53 Latency"
  },
  { title: "Transit Gateway 기능", badge: "핵심", cols: 3,
    cards: [
      { name: "Route Table 분리", dot: "#7c6fff", rows: [
        { k: "목적", v: "VPC 간 격리 (Dev/Prod)" }, { k: "방식", v: "TGW RT 여러 개" }
      ]},
      { name: "TGW Peering", dot: "#34d399", rows: [
        { k: "목적", v: "리전 간 연결" }, { k: "방식", v: "TGW ↔ TGW (양 리전)" }
      ]},
      { name: "RAM 공유", dot: "#f59e0b", rows: [
        { k: "목적", v: "다른 계정의 VPC 연결" }, { k: "방식", v: "AWS Resource Access Manager" }
      ]}
    ],
    tip: "💡 격리 = RT / 멀티리전 = Peering / 멀티계정 = RAM"
  }
];

window.ANS_KEYWORDS = [
  { kw: "many vpcs central hub", services: "AWS Transit Gateway (+ RAM)", tip: "수천 VPC 허브. VPC peering full mesh 대체" },
  { kw: "dedicated bandwidth · low latency", services: "AWS Direct Connect (Transit VIF)", tip: "전용 물리 회선. DXGW + TGW 조합" },
  { kw: "dx redundancy · failover", services: "2개 DX location + BGP 또는 DX + VPN backup", tip: "BGP AS_PATH로 preferred 설정" },
  { kw: "dx encryption on wire", services: "MACsec (10Gbps+) 또는 Site-to-Site VPN over DX Public VIF", tip: "MACsec = L2 암호화" },
  { kw: "sd-wan integration", services: "TGW Connect (GRE) + BGP", tip: "SD-WAN 어플라이언스 ↔ AWS 백본" },
  { kw: "cross-region vpc connectivity", services: "TGW inter-region peering 또는 VPC peering", tip: "TGW peering은 BGP 지원 안함" },
  { kw: "private DNS · on-prem ↔ AWS", services: "Route 53 Resolver Inbound/Outbound Endpoint", tip: "양방향 DNS 해석" },
  { kw: "DNS filtering · block malicious", services: "Route 53 Resolver DNS Firewall", tip: "AWS managed threat list + custom" },
  { kw: "DNSSEC zone signing", services: "Route 53 DNSSEC (KMS asymmetric key)", tip: "KSK·ZSK 자동 관리" },
  { kw: "geolocation routing", services: "Route 53 Geolocation 또는 Geoproximity", tip: "Geoproximity = bias 가능" },
  { kw: "health check private endpoint", services: "Calculated/CloudWatch Alarm based health check", tip: "R53 health check는 퍼블릭만 직접" },
  { kw: "global tcp/udp acceleration", services: "AWS Global Accelerator", tip: "Anycast IP → AWS 백본" },
  { kw: "HTTP cache · edge logic", services: "Amazon CloudFront + Lambda@Edge/CloudFront Functions", tip: "CF Functions = viewer request/response only" },
  { kw: "protect origin from direct access", services: "CloudFront OAC (Origin Access Control) + S3 bucket policy", tip: "OAI 후속 기능" },
  { kw: "static ip for elb", services: "NLB (EIP per AZ) 또는 Global Accelerator 앞에 ALB", tip: "ALB는 IP 변경됨" },
  { kw: "L4 load balancer · extreme throughput", services: "Network Load Balancer (NLB)", tip: "TCP/UDP, 수백만 초당 연결" },
  { kw: "gateway load balancer · 3rd party appliance", services: "Gateway Load Balancer (GWLB) + GENEVE", tip: "인라인 보안 어플라이언스" },
  { kw: "private s3 access from on-prem", services: "DX Public VIF 또는 Interface Endpoint", tip: "VPN은 Gateway Endpoint 사용 불가" },
  { kw: "inspection vpc · centralized security", services: "TGW + Network Firewall in Inspection VPC", tip: "Hub-and-spoke 보안 아키텍처" },
  { kw: "traffic mirroring for forensic", services: "VPC Traffic Mirroring (ENI → mirror target)", tip: "Packet-level 복제" },
  { kw: "reachability test", services: "VPC Reachability Analyzer", tip: "정적 경로 분석. 실제 트래픽 X" },
  { kw: "flow logs aggregated", services: "VPC Flow Logs → Firehose → S3 → Athena", tip: "Parquet 포맷으로 비용 절감" },
  { kw: "bgp as-path prepending", services: "Direct Connect BGP configuration", tip: "경로 비선호도 조작" },
  { kw: "bgp communities for tagging", services: "DX Public VIF 7224:xxxx", tip: "AWS 측 경로 우선순위 표현" },
  { kw: "ipv6 dual stack", services: "VPC IPv6 CIDR + Egress-only IGW", tip: "IPv6는 모두 퍼블릭. Egress-only로 outbound 제한" },
  { kw: "macsec direct connect", services: "DX MACsec (10/100 Gbps port)", tip: "L2 암호화. 전용 하드웨어" },
  { kw: "cloud wan segmentation", services: "AWS Cloud WAN + policy attachments", tip: "글로벌 네트워크 중앙 관리" },
  { kw: "transit gateway multicast", services: "TGW multicast domain", tip: "IGMPv2 지원. 금융 마켓 데이터" },
  { kw: "network access analyzer", services: "VPC Network Access Analyzer", tip: "정책 위반 의도치 않은 접근 탐지" }
];

window.ANS_TRAPS = [
  { icon: "🌐", title: "VPC peering으로 다수 VPC 연결하는 함정", wrong: "N(N-1)/2 full mesh 불가관리", right: "수 많은 VPC = <strong>Transit Gateway</strong>" },
  { icon: "🔀", title: "DX Private VIF로 다수 VPC 연결", wrong: "VIF당 단일 VGW", right: "<strong>Direct Connect Gateway + Transit VIF + TGW</strong>" },
  { icon: "🔗", title: "TGW inter-region peering에 BGP 사용 가정", wrong: "TGW peering은 BGP 미지원", right: "정적 라우트. BGP 필요 시 <strong>Cloud WAN</strong>" },
  { icon: "📡", title: "Gateway Endpoint를 모든 서비스에 쓰려는 함정", wrong: "Gateway는 S3·DynamoDB 전용", right: "기타 서비스 = <strong>Interface Endpoint (PrivateLink)</strong>" },
  { icon: "🔐", title: "VPN이 Gateway Endpoint 통해 S3 접근 가능 가정", wrong: "VPN은 AWS 서비스 Public IP 사용", right: "VPN → <strong>Interface Endpoint</strong> 경유 또는 DX Public VIF" },
  { icon: "🎯", title: "R53 health check가 private NLB 직접 확인 가능 가정", wrong: "퍼블릭 IP·도메인만", right: "<strong>CloudWatch Alarm 기반 health check</strong>" },
  { icon: "🔑", title: "CloudFront OAI만 사용하는 함정 (레거시)", wrong: "OAI는 SSE-KMS 미지원", right: "<strong>Origin Access Control (OAC)</strong> 사용" },
  { icon: "🚦", title: "ALB로 Static IP 기대하는 함정", wrong: "ALB는 DNS만 제공, IP 변동", right: "Static IP 필요 = <strong>NLB (EIP) 또는 Global Accelerator</strong>" },
  { icon: "🛡️", title: "WAF가 TCP/UDP에도 작동한다는 오해", wrong: "WAF는 HTTP(S) 전용", right: "TCP/UDP DDoS = <strong>Shield Advanced</strong>" },
  { icon: "🌉", title: "Transit VIF로 Public AWS 서비스 접근 시도", wrong: "Transit VIF는 VPC 전용", right: "Public 서비스 = <strong>Public VIF</strong>" },
  { icon: "🕵️", title: "Reachability Analyzer가 실제 트래픽 확인 가정", wrong: "정적 분석만", right: "실제 트래픽 = <strong>VPC Flow Logs + Traffic Mirroring</strong>" },
  { icon: "🔁", title: "VPC 피어링 transitive 가정", wrong: "A↔B, B↔C여도 A↔C 불가", right: "Transitive 필요 = <strong>Transit Gateway</strong>" },
  { icon: "📶", title: "IPv6에 NAT Gateway 쓰려는 함정", wrong: "IPv6는 NAT 불필요·지원 안함", right: "<strong>Egress-only Internet Gateway</strong> (IPv6 outbound만)" },
  { icon: "⚡", title: "Global Accelerator가 콘텐츠 캐시하는 줄 아는 함정", wrong: "캐시 없음 · 라우팅만", right: "캐시 = <strong>CloudFront</strong>" },
  { icon: "🔐", title: "MACsec이 VPN 기능인 줄 아는 함정", wrong: "MACsec은 L2 (Direct Connect 포트 수준)", right: "L3 암호화 = <strong>Site-to-Site VPN</strong>" }
];

window.ANS_DECISIONS = [
  { title: "하이브리드 연결", icon: "🌉", q: "요구 특성은?",
    opts: [
      { label: "대역폭·안정성 최우선", answer: "→ <strong>Direct Connect (2개 location)</strong>" },
      { label: "즉시·저비용·DR 백업", answer: "→ <strong>Site-to-Site VPN</strong>" },
      { label: "SD-WAN 어플라이언스 통합", answer: "→ <strong>TGW Connect (GRE + BGP)</strong>" },
      { label: "다수 VPC·다계정 집중", answer: "→ <strong>Transit Gateway + RAM</strong>" },
      { label: "DX 구간 암호화", answer: "→ <strong>MACsec (10Gbps+) 또는 VPN over DX</strong>" }
    ]},
  { title: "DNS·라우팅", icon: "🧭", q: "시나리오는?",
    opts: [
      { label: "DR Primary/Secondary", answer: "→ <strong>Route 53 Failover + Health Check</strong>" },
      { label: "글로벌 지연 최소", answer: "→ <strong>Route 53 Latency routing</strong>" },
      { label: "국가별 규제·현지화", answer: "→ <strong>Route 53 Geolocation</strong>" },
      { label: "A/B 트래픽 분할", answer: "→ <strong>Weighted routing</strong>" },
      { label: "온프레미스 ↔ AWS DNS 양방향", answer: "→ <strong>Route 53 Resolver Endpoints</strong>" },
      { label: "악성 도메인 차단", answer: "→ <strong>Route 53 Resolver DNS Firewall</strong>" }
    ]},
  { title: "글로벌 엣지·가속", icon: "🌍", q: "프로토콜·콘텐츠는?",
    opts: [
      { label: "HTTP(S) 캐시·가속", answer: "→ <strong>CloudFront (+ Lambda@Edge)</strong>" },
      { label: "TCP/UDP 글로벌 Anycast", answer: "→ <strong>Global Accelerator</strong>" },
      { label: "S3 원본 보호", answer: "→ <strong>CloudFront + OAC</strong>" },
      { label: "엣지 요청 수정 (경량)", answer: "→ <strong>CloudFront Functions</strong>" }
    ]},
  { title: "VPC 진단", icon: "🔍", q: "진단 목적은?",
    opts: [
      { label: "실제 트래픽 감사", answer: "→ <strong>VPC Flow Logs (+ Athena)</strong>" },
      { label: "경로 도달 가능성", answer: "→ <strong>VPC Reachability Analyzer</strong>" },
      { label: "정책 위반 접근 탐지", answer: "→ <strong>Network Access Analyzer</strong>" },
      { label: "패킷 레벨 포렌식", answer: "→ <strong>VPC Traffic Mirroring</strong>" }
    ]},
  { title: "로드밸런싱", icon: "⚖️", q: "트래픽 유형은?",
    opts: [
      { label: "HTTP(S) L7 라우팅", answer: "→ <strong>Application Load Balancer (ALB)</strong>" },
      { label: "TCP/UDP 초고성능 L4", answer: "→ <strong>Network Load Balancer (NLB)</strong>" },
      { label: "3rd-party 보안 어플라이언스 인라인", answer: "→ <strong>Gateway Load Balancer (GWLB) + GENEVE</strong>" },
      { label: "Static IP 요구", answer: "→ <strong>NLB + EIP 또는 Global Accelerator</strong>" }
    ]}
];

window.ANS_GLOSSARY = [
  { cat: "VPC", color: "#3b82f6", name: "Amazon VPC", short: "가상 네트워크", desc: "Subnet·Route Table·IGW·NAT·NACL·SG·Endpoint.", tags: ["핵심"] },
  { cat: "VPC", color: "#3b82f6", name: "Transit Gateway", short: "VPC 허브", desc: "수천 VPC/VPN/DX 중앙. RT 분리·Peering·RAM 공유.", tags: ["핵심"] },
  { cat: "VPC", color: "#3b82f6", name: "TGW Connect", short: "SD-WAN 통합", desc: "GRE 터널 + BGP. SD-WAN 어플라이언스와 AWS 백본 연결.", tags: ["SD-WAN"] },
  { cat: "VPC", color: "#3b82f6", name: "AWS Cloud WAN", short: "글로벌 네트워크", desc: "Core Network · Policy 기반 세그먼트. TGW 글로벌 확장.", tags: ["글로벌"] },
  { cat: "VPC", color: "#3b82f6", name: "VPC Peering", short: "1:1 연결", desc: "Transitive 불가. 소규모에 적합.", tags: ["연결"] },
  { cat: "VPC", color: "#3b82f6", name: "Gateway Endpoint", short: "S3/DynamoDB 프라이빗", desc: "Route Table 항목. 무료. 인터넷 우회.", tags: ["Endpoint"] },
  { cat: "VPC", color: "#3b82f6", name: "Interface Endpoint (PrivateLink)", short: "프라이빗 서비스", desc: "ENI 기반. AWS/SaaS 프라이빗 IP 접근. 시간당 과금.", tags: ["Endpoint"] },
  { cat: "VPC", color: "#3b82f6", name: "AWS PrivateLink", short: "서비스 공유", desc: "VPC→다른 VPC/계정 서비스 프라이빗 노출. NLB 제공자.", tags: ["PrivateLink"] },
  { cat: "VPC", color: "#3b82f6", name: "Egress-only IGW", short: "IPv6 outbound", desc: "IPv6 전용 outbound 전용 게이트웨이. NAT 대체.", tags: ["IPv6"] },
  { cat: "VPC", color: "#3b82f6", name: "VPC Flow Logs", short: "트래픽 로그", desc: "ENI/Subnet/VPC 수준. CloudWatch/S3/Firehose. ACCEPT/REJECT.", tags: ["진단"] },
  { cat: "VPC", color: "#3b82f6", name: "VPC Traffic Mirroring", short: "패킷 복제", desc: "ENI → mirror target. 보안·포렌식 분석.", tags: ["포렌식"] },
  { cat: "VPC", color: "#3b82f6", name: "VPC Reachability Analyzer", short: "경로 분석", desc: "정적 분석. 차단 지점 식별.", tags: ["진단"] },
  { cat: "VPC", color: "#3b82f6", name: "Network Access Analyzer", short: "정책 감사", desc: "의도치 않은 네트워크 접근 탐지.", tags: ["감사"] },

  { cat: "하이브리드", color: "#7c6fff", name: "Direct Connect", short: "전용 회선", desc: "1/10/100 Gbps. Private/Public/Transit VIF.", tags: ["핵심"] },
  { cat: "하이브리드", color: "#7c6fff", name: "DX Gateway (DXGW)", short: "다중 VPC DX", desc: "DX를 여러 VPC·리전·TGW에 연결.", tags: ["DXGW"] },
  { cat: "하이브리드", color: "#7c6fff", name: "DX MACsec", short: "L2 암호화", desc: "10/100 Gbps 포트 지원. 전용선 구간 암호화.", tags: ["암호화"] },
  { cat: "하이브리드", color: "#7c6fff", name: "Site-to-Site VPN", short: "IPsec VPN", desc: "최대 1.25 Gbps/터널. BGP 동적 라우팅 지원.", tags: ["VPN"] },
  { cat: "하이브리드", color: "#7c6fff", name: "AWS Client VPN", short: "사용자 VPN", desc: "OpenVPN 기반 관리형. SAML/AD 인증.", tags: ["Client"] },
  { cat: "하이브리드", color: "#7c6fff", name: "Accelerated VPN", short: "Global Accelerator VPN", desc: "GA 통해 VPN 경로 최적화.", tags: ["성능"] },
  { cat: "하이브리드", color: "#7c6fff", name: "BGP ASN", short: "자율 시스템 번호", desc: "Public (Public VIF) / Private (Private/Transit VIF).", tags: ["BGP"] },
  { cat: "하이브리드", color: "#7c6fff", name: "AS_PATH Prepending", short: "경로 비선호", desc: "BGP 경로를 길게 보이도록 조작.", tags: ["BGP"] },
  { cat: "하이브리드", color: "#7c6fff", name: "BGP Community (7224:xxxx)", short: "경로 제어 태그", desc: "AWS Public VIF에서 지역·우선순위 표현.", tags: ["BGP"] },

  { cat: "DNS·엣지", color: "#34d399", name: "Amazon Route 53", short: "관리형 DNS", desc: "Failover·Latency·Geolocation·Weighted·Multi-value 라우팅.", tags: ["핵심"] },
  { cat: "DNS·엣지", color: "#34d399", name: "Route 53 Resolver", short: "하이브리드 DNS", desc: "Inbound/Outbound Endpoint로 온프레미스↔AWS 양방향.", tags: ["DNS"] },
  { cat: "DNS·엣지", color: "#34d399", name: "Route 53 DNS Firewall", short: "DNS 필터", desc: "악성 도메인 차단. AWS managed list + custom.", tags: ["보안"] },
  { cat: "DNS·엣지", color: "#34d399", name: "Route 53 DNSSEC", short: "도메인 서명", desc: "KMS asymmetric key. KSK/ZSK 자동 관리.", tags: ["보안"] },
  { cat: "DNS·엣지", color: "#34d399", name: "Amazon CloudFront", short: "CDN", desc: "HTTP(S) 캐시·Lambda@Edge·CF Functions·OAC.", tags: ["CDN"] },
  { cat: "DNS·엣지", color: "#34d399", name: "Origin Access Control (OAC)", short: "S3 원본 보호", desc: "OAI 후속. SSE-KMS·모든 리전 지원.", tags: ["보안"] },
  { cat: "DNS·엣지", color: "#34d399", name: "AWS Global Accelerator", short: "Anycast 가속", desc: "TCP/UDP. AWS 백본 경유. Static IP 2개.", tags: ["글로벌"] },

  { cat: "로드밸런서", color: "#f59e0b", name: "Application Load Balancer (ALB)", short: "L7", desc: "HTTP/HTTPS. Path·Host 기반 라우팅. WAF 연결.", tags: ["L7"] },
  { cat: "로드밸런서", color: "#f59e0b", name: "Network Load Balancer (NLB)", short: "L4", desc: "TCP/UDP. 초당 수백만 연결. Static IP (EIP).", tags: ["L4"] },
  { cat: "로드밸런서", color: "#f59e0b", name: "Gateway Load Balancer (GWLB)", short: "인라인 어플라이언스", desc: "GENEVE 캡슐화. 3rd-party 보안 장비.", tags: ["보안"] },
  { cat: "로드밸런서", color: "#f59e0b", name: "Classic Load Balancer", short: "레거시", desc: "EC2-Classic. 신규에는 권장 안됨.", tags: ["레거시"] },

  { cat: "보안", color: "#ef4444", name: "AWS Network Firewall", short: "IDS/IPS", desc: "Suricata 규칙·도메인 필터. Inspection VPC.", tags: ["IDS"] },
  { cat: "보안", color: "#ef4444", name: "AWS WAF", short: "웹 방화벽", desc: "L7 공격 차단. ALB/CloudFront/API GW/AppSync.", tags: ["L7"] },
  { cat: "보안", color: "#ef4444", name: "AWS Shield Advanced", short: "DDoS 방어", desc: "L3-L7. DRT 지원·비용 보호.", tags: ["DDoS"] },
  { cat: "보안", color: "#ef4444", name: "AWS Firewall Manager", short: "중앙 방화벽", desc: "Organizations 전체 WAF/Shield/NF/SG 일괄.", tags: ["중앙"] },
  { cat: "보안", color: "#ef4444", name: "Security Group", short: "인스턴스 SG", desc: "Stateful. 5개/ENI 60 규칙.", tags: ["SG"] },
  { cat: "보안", color: "#ef4444", name: "NACL", short: "서브넷 ACL", desc: "Stateless. ephemeral ports 허용 필요.", tags: ["NACL"] },

  { cat: "모니터링", color: "#06b6d4", name: "AWS Network Manager", short: "네트워크 대시보드", desc: "TGW·DX·SD-WAN 글로벌 가시성.", tags: ["가시성"] },
  { cat: "모니터링", color: "#06b6d4", name: "CloudWatch Internet Monitor", short: "인터넷 가시성", desc: "End-user ISP 경로 이슈 탐지.", tags: ["인터넷"] },
  { cat: "모니터링", color: "#06b6d4", name: "CloudWatch Network Insights", short: "엔드포인트 모니터링", desc: "ENI별 지연·패킷 드롭 분석.", tags: ["모니터링"] }
];
