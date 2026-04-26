window.ANS_QUESTIONS = [
  {
    "id": 1,
    "question": "회사가 클라이언트와 백엔드 간에 트래픽이 복호화되지 않는 암호화된 경로가 필요한 서비스를 구축하려고 합니다. gRPC 프로토콜을 TCP 포트 443으로 구현하며, 수천 개의 동시 연결을 지원해야 합니다. 백엔드는 Amazon EKS 클러스터에 호스팅되고 Kubernetes Cluster Autoscaler와 Horizontal Pod Autoscaler가 구성되어 있습니다. 클라이언트와 백엔드 간 양방향 인증을 위해 Mutual TLS가 필요합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "AWS Load Balancer Controller for Kubernetes를 설치하고, 이를 사용하여 Network Load Balancer를 포트 443 TCP 리스너로 구성하고 백엔드 서비스 Pod IP 주소로 트래픽을 전달합니다.",
      "B": "AWS Load Balancer Controller for Kubernetes를 설치하고, 이를 사용하여 Application Load Balancer를 포트 443 HTTPS 리스너로 구성하고 백엔드 서비스 Pod IP 주소로 트래픽을 전달합니다.",
      "C": "대상 그룹을 생성하고 EKS 관리형 노드 그룹의 Auto Scaling 그룹을 대상으로 추가한 후, Application Load Balancer를 포트 443 HTTPS 리스너로 구성합니다.",
      "D": "대상 그룹을 생성하고 EKS 관리형 노드 그룹의 Auto Scaling 그룹을 대상으로 추가한 후, Network Load Balancer를 포트 443 TLS 리스너로 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ gRPC over TCP 443 — 응용 계층 프로토콜, TLS는 전송 계층에서 처리되어야 함\n▸ Mutual TLS — 클라이언트와 서버 모두 인증서를 제시하는 양방향 인증\n▸ Network Load Balancer (NLB) — L4 로드 밸런싱, TLS/SSL 암호화 통로 역할\n\n【정답 포인트】\n▸ gRPC는 TLS를 end-to-end로 유지해야 함 → NLB의 TCP 리스너 선택\n▸ ALB는 L7에서 HTTPS를 처리하면서 복호화 → 요구사항 위배\n▸ AWS Load Balancer Controller는 EKS Pod를 직접 타게팅 가능 → 관리형 노드 그룹이 아닌 Pod IP 사용\n▸ \"Pod의 IP 주소로 전달\"이 핵심 → A가 유일한 선택\n\n【오답 체크】\n(B) ALB는 Layer 7에서 HTTPS를 해석하므로 클라이언트-ALB 간 TLS와 ALB-Pod 간 별도 TLS가 됨 → 트래픽이 ALB에서 복호화됨\n(C) \n(D) 노드 그룹의 Auto Scaling 그룹을 대상으로 하면 Pod 수준의 가변성을 반영 불가, 수천 개 동시 연결 요구사항에 미흡\n\n【시험 포인트】\n▸ EKS + Mutual TLS → NLB(L4) + AWS Load Balancer Controller + Pod 타게팅\n▸ 트래픽 복호화 금지 → ALB(L7) 제외, NLB의 TCP/TLS만 가능",
    "en_q": "A company is planning to create a service that requires encryption in transit. The traffic must not be decrypted between the client and the backend of the service. The company will implement the service by using the gRPC protocol over TCP port 443. The service will scale up to thousands of simultaneous connections. The backend of the service will be hosted on an Amazon Elastic Kubernetes Service (Amazon EKS) duster with the Kubernetes Cluster Autoscaler and the Horizontal Pod Autoscaler configured. The company needs to use mutual TLS for two-way authentication between the client and the backend. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Install the AWS Load Balancer Controller for Kubernetes. Using that controller, configure a Network Load Balancer with a TCP listener on port 443 to forward traffic to the IP addresses of the backend service Pods.",
      "B": "Install the AWS Load Balancer Controller for Kubernetes. Using that controller, configure an Application Load Balancer with an HTTPS listener on port 443 to forward traffic to the IP addresses of the backend service Pods.",
      "C": "Create a target group. Add the EKS managed node group's Auto Scaling group as a target Create an Application Load Balancer with an HTTPS listener on port 443 to forward traffic to the target group.",
      "D": "Create a target group. Add the EKS managed node group's Auto Scaling group as a target. Create a Network Load Balancer with a TLS listener on port 443 to forward traffic to the target group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/102889-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 2,
    "question": "회사가 AWS 클라우드에 새로운 애플리케이션을 배포하고 있습니다. Elastic Load Balancer 뒤에 고가용성 웹 서버가 필요하며, 로드 밸런서는 요청의 URL을 기반으로 여러 대상 그룹으로 라우팅합니다. 모든 트래픽은 HTTPS를 사용해야 하고, TLS 처리는 로드 밸런서에서 오프로드되어야 합니다. 웹 서버는 보안 로깅을 위해 사용자의 IP 주소를 알아야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "Application Load Balancer를 HTTPS 리스너로 배포하고, 경로 기반 라우팅 규칙을 사용하여 트래픽을 올바른 대상 그룹으로 전달합니다. X-Forwarded-For 요청 헤더를 대상에 포함시킵니다.",
      "B": "Application Load Balancer를 각 도메인마다 HTTPS 리스너로 배포하고, 호스트 기반 라우팅 규칙을 사용합니다. X-Forwarded-For 요청 헤더를 대상에 포함시킵니다.",
      "C": "Network Load Balancer를 TLS 리스너로 배포하고, 경로 기반 라우팅 규칙을 사용합니다. 대상으로의 트래픽에 대해 클라이언트 IP 주소 보존을 구성합니다.",
      "D": "Network Load Balancer를 각 도메인마다 TLS 리스너로 배포하고, 호스트 기반 라우팅 규칙을 사용합니다. 대상으로의 트래픽에 대해 클라이언트 IP 주소 보존을 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ URL 기반 라우팅 — Layer 7 경로 기반 라우팅, ALB의 핵심 기능\n▸ X-Forwarded-For — ALB가 클라이언트 IP를 헤더에 추가하여 전달\n▸ TLS 오프로드 — 로드 밸런서가 HTTPS 복호화/재암호화\n\n【정답 포인트】\n▸ URL 기반 라우팅 필요 → ALB 사용 (NLB는 L4 지원 안 함)\n▸ HTTPS 리스너로 TLS 오프로드 → ALB에서 처리\n▸ 클라이언트 IP 취득 → X-Forwarded-For 헤더로 충분\n▸ \"경로 기반\"이 핵심 → A가 정확한 답\n\n【오답 체크】\n(B) 호스트 기반 라우팅은 URL 경로가 아닌 호스트명 기반 → 요구사항에 부정확\n(C) \n(D) NLB는 경로/호스트 기반 라우팅 불가 → L3/L4 수준만 지원\n\n【시험 포인트】\n▸ URL 기반 라우팅 → ALB만 가능\n▸ 클라이언트 IP 추적 → ALB X-Forwarded-For, NLB client IP preservation 모두 가능하지만 경로 라우팅은 ALB만",
    "en_q": "A company is deploying a new application in the AWS Cloud. The company wants a highly available web server that will sit behind an Elastic Load Balancer. The load balancer will route requests to multiple target groups based on the URL in the request. All traffic must use HTTPS. TLS processing must be offloaded to the load balancer. The web server must know the user's IP address so that the company can keep accurate logs for security purposes. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy an Application Load Balancer with an HTTPS listener. Use path-based routing rules to forward the traffic to the correct target group. Include the X-Forwarded-For request header with traffic to the targets.",
      "B": "Deploy an Application Load Balancer with an HTTPS listener for each domain. Use host-based routing rules to forward the traffic to the correct target group for each domain. Include the X-Forwarded-For request header with traffic to the targets.",
      "C": "Deploy a Network Load Balancer with a TLS listener. Use path-based routing rules to forward the traffic to the correct target group. Configure client IP address preservation for traffic to the targets.",
      "D": "Deploy a Network Load Balancer with a TLS listener for each domain. Use host-based routing rules to forward the traffic to the correct target group for each domain. Configure client IP address preservation for traffic to the targets."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103054-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 3,
    "question": "회사가 자동판매기의 재고 수준을 추적하고 재입고 프로세스를 자동으로 시작하는 AWS 애플리케이션을 개발했습니다. us-east-1 리전의 VPC에 배포된 이 애플리케이션은 ALB 뒤의 ECS 클러스터로 구성됩니다. 자동판매기는 HTTPS를 통해 애플리케이션과 통신합니다. 회사는 AWS Global Accelerator의 가속기를 사용하여 정적 IP 주소를 자동판매기에 구성하려고 합니다. 애플리케이션은 가속기를 통해서만 접근 가능해야 하고 ALB 엔드포인트로 직접 인터넷 접속은 불가능해야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "ALB를 VPC의 프라이빗 서브넷에 구성하고, 서브넷 라우팅 테이블에 인터넷 게이트웨이로의 경로를 추가하지 않으면서 인터넷 게이트웨이를 연결합니다. ALB의 보안 그룹을 ALB 리스너 포트의 인터넷 트래픽만 허용하도록 구성합니다.",
      "B": "ALB를 VPC의 프라이빗 서브넷에 구성합니다. 가속기를 ALB 엔드포인트를 포함하는 엔드포인트 그룹으로 구성합니다. ALB의 보안 그룹을 ALB 리스너 포트의 인터넷 트래픽만 허용하도록 구성합니다.",
      "C": "ALB를 VPC의 퍼블릭 서브넷에 구성하고 인터넷 게이트웨이를 연결합니다. 서브넷 라우팅 테이블에 인터넷 게이트웨이로의 경로를 추가합니다. 가속기를 ALB 엔드포인트를 포함하는 엔드포인트 그룹으로 구성합니다. ALB의 보안 그룹을 가속기 IP 주소의 ALB 리스너 포트 인바운드 트래픽만 허용하도록 구성합니다.",
      "D": "ALB를 VPC의 프라이빗 서브넷에 구성합니다. 인터넷 게이트웨이를 연결하고 서브넷 라우팅 테이블에 인터넷 게이트웨이로의 경로를 추가합니다. 가속기를 ALB 엔드포인트를 포함하는 엔드포인트 그룹으로 구성합니다. ALB의 보안 그룹을 가속기 IP 주소의 ALB 리스너 포트 인바운드 트래픽만 허용하도록 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Global Accelerator — 정적 IP, 글로벌 네트워크, 자동판매기 같은 IoT 디바이스에 최적\n▸ Private 서브넷 + IGW + 라우팅 — 프라이빗 리소스가 인터넷 트래픽 양방향 처리 가능\n▸ 보안 그룹 제한 — 가속기 IP만 허용하여 직접 인터넷 접속 차단\n\n【정답 포인트】\n▸ \"가속기를 통해서만 접근\" → 보안 그룹에서 가속기 IP만 허용\n▸ Global Accelerator와 ALB 통신 → ALB는 IGW 접근 필요 (응답 경로)\n▸ 프라이빗 배치의 이점 — 직접 인터넷 라우팅 불가, 보안 강화\n▸ 프라이빗 + IGW + 라우팅 → ALB가 가속기의 요청에 응답 가능\n\n【오답 체크】\n(A) 라우팅 테이블에 IGW 경로 없음 → ALB가 응답 불가\n(B) 가속기 IP 제한 없음 → 인터넷에서 직접 접속 가능\n(C) 퍼블릭 서브넷 → ALB가 인터넷에 직접 노출됨\n\n【시험 포인트】\n▸ Global Accelerator + Private ALB → IGW + 라우팅 + 보안 그룹 모두 필수\n▸ 정적 IP만으로는 불충분, 네트워크 구성이 핵심",
    "en_q": "A company has developed an application on AWS that will track inventory levels of vending machines and initiate the restocking process automatically. The company plans to integrate this application with vending machines and deploy the vending machines in several markets around the world. The application resides in a VPC in the us-east-1 Region. The application consists of an Amazon Elastic Container Service (Amazon ECS) cluster behind an Application Load Balancer (ALB). The communication from the vending machines to the application happens over HTTPS. The company is planning to use an AWS Global Accelerator accelerator and configure static IP addresses of the accelerator in the vending machines for application endpoint access. The application must be accessible only through the accelerator and not through a direct connection over the internet to the ALB endpoint. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure the ALB in a private subnet of the VPC. Attach an internet gateway without adding routes in the subnet route tables to point to the internet gateway. Configure the accelerator with endpoint groups that include the ALB endpoint. Configure the ALB's security group to only allow inbound traffic from the internet on the ALB listener port.",
      "B": "Configure the ALB in a private subnet of the VPC. Configure the accelerator with endpoint groups that include the ALB endpoint. Configure the ALB's security group to only allow inbound traffic from the internet on the ALB listener port.",
      "C": "Configure the ALB in a public subnet of the VPAttach an internet gateway. Add routes in the subnet route tables to point to the internet gateway. Configure the accelerator with endpoint groups that include the ALB endpoint. Configure the ALB's security group to only allow inbound traffic from the accelerator's IP addresses on the ALB listener port.",
      "D": "Configure the ALB in a private subnet of the VPC. Attach an internet gateway. Add routes in the subnet route tables to point to the internet gateway. Configure the accelerator with endpoint groups that include the ALB endpoint. Configure the ALB's security group to only allow inbound traffic from the accelerator's IP addresses on the ALB listener port."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/102993-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 4,
    "question": "글로벌 배송 회사가 함대 관리 시스템을 현대화하고 있습니다. 여러 비즈니스 유닛이 각각 AWS 계정의 별도 애플리케이션 VPC에서 호스팅되는 애플리케이션을 설계하고 유지 관리합니다. 각 비즈니스 유닛의 애플리케이션은 중앙 공유 서비스 VPC에서 데이터를 가져옵니다. 회사는 세분화된 보안 제어를 제공하고 향후 더 많은 비즈니스 유닛이 중앙 공유 서비스 VPC를 사용할 때 확장 가능한 네트워크 연결 아키텍처를 원합니다. 가장 안전한 방식으로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "중앙 Transit Gateway를 생성하고, 각 애플리케이션 VPC에 대한 VPC 첨부 파일을 생성한 후, Transit Gateway를 사용하여 모든 VPC 간의 풀 메시 연결을 제공합니다.",
      "B": "중앙 공유 서비스 VPC와 각 비즈니스 유닛의 애플리케이션 VPC 간의 VPC 피어링 연결을 생성합니다.",
      "C": "중앙 공유 서비스 VPC에서 AWS PrivateLink 기반의 VPC 엔드포인트 서비스를 생성하고, 각 애플리케이션 VPC에서 VPC 엔드포인트를 생성합니다.",
      "D": "AWS Marketplace의 VPN 어플라이언스가 포함된 중앙 Transit VPC를 생성하고, 각 VPC에서 Transit VPC로의 VPN 첨부 파일을 생성하여 모든 VPC 간의 풀 메시 연결을 제공합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS PrivateLink — VPC 엔드포인트 서비스, 소비자 VPC와 프로바이더 VPC 간 격리된 연결\n▸ 세분화된 보안 제어 — 특정 서비스에만 접근 가능, 네트워크 레벨 격리\n▸ 확장성 — 새로운 VPC 추가 시 Transit Gateway 재구성 불필요\n\n【정답 포인트】\n▸ \"세분화된 보안 제어\" → PrivateLink의 강점 (서비스 레벨 제어)\n▸ 단방향 제어 — 공유 서비스 VPC → 애플리케이션 VPC 일방향 제어 가능\n▸ 확장성 — 새 비즈니스 유닛 추가 시 엔드포인트만 생성하면 됨\n▸ 격리 — 비즈니스 유닛 간 직접 통신 불가능\n\n【오답 체크】\n(A) Full mesh = 모든 VPC가 서로 통신 → 세분화된 제어 불가, 보안 취약\n(B) 피어링만으로는 세분화 불가, 확장성 떨어짐\n(D) VPN 어플라이언스 운영 복잡, 관리 오버헤드 증가\n\n【시험 포인트】\n▸ 보안 제어 + 확장성 = PrivateLink\n▸ 중앙 서비스 모델 → VPC Endpoint Service 활용\n▸ 단방향 제어의 이점 이해 필수",
    "en_q": "A global delivery company is modernizing its fleet management system. The company has several business units. Each business unit designs and maintains applications that are hosted in its own AWS account in separate application VPCs in the same AWS Region. Each business unit's applications are designed to get data from a central shared services VPC. The company wants the network connectivity architecture to provide granular security controls. The architecture also must be able to scale as more business units consume data from the central shared services VPC in the future. Which solution will meet these requirements in the MOST secure manner?",
    "en_opts": {
      "A": "Create a central transit gateway. Create a VPC attachment to each application VPC. Provide full mesh connectivity between all the VPCs by using the transit gateway.",
      "B": "Create VPC peering connections between the central shared services VPC and each application VPC in each business unit's AWS account.",
      "C": "Create VPC endpoint services powered by AWS PrivateLink in the central shared services VPCreate VPC endpoints in each application VPC.",
      "D": "Create a central transit VPC with a VPN appliance from AWS Marketplace. Create a VPN attachment from each VPC to the transit VPC. Provide full mesh connectivity among all the VPCs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103055-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 5,
    "question": "회사가 4 Gbps AWS Direct Connect 전용 연결과 LAG(Link Aggregation Group) 번들을 사용하여 us-east-1 리전의 5개 VPC에 연결합니다. 각 VPC는 서로 다른 비즈니스 유닛을 담당하며 온프레미스 환경으로의 연결을 위해 각각 프라이빗 VIF를 사용합니다. 사용자들이 AWS에서 호스팅되는 리소스에 접근할 때 속도 저하를 보고하고 있습니다. 네트워크 엔지니어가 갑작스러운 처리량 증가와 Direct Connect 연결 포화를 발견했으며, 이는 매일 약 1시간씩 발생합니다. 어느 비즈니스 유닛이 처리량 증가를 유발하는지 파악하고 문제를 해결하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon CloudWatch의 VirtualInterfaceBpsEgress 및 VirtualInterfaceBpsIngress 메트릭을 검토하여 속도 저하 기간 중 가장 높은 처리량을 보내는 VIF를 파악합니다. 새로운 10 Gbps 전용 연결을 생성하고 기존 연결에서 새로운 연결로 트래픽을 전환합니다.",
      "B": "Amazon CloudWatch의 VirtualInterfaceBpsEgress 및 VirtualInterfaceBpsIngress 메트릭을 검토하여 속도 저하 기간 중 가장 높은 처리량을 보내는 VIF를 파악합니다. 기존 전용 연결의 대역폭을 10 Gbps로 업그레이드합니다.",
      "C": "Amazon CloudWatch의 ConnectionBpsIngress 및 ConnectionPpsEgress 메트릭을 검토하여 가장 높은 처리량을 보내는 VIF를 파악합니다. 기존 전용 연결을 5 Gbps 호스팅 연결로 업그레이드합니다.",
      "D": "Amazon CloudWatch의 ConnectionBpsIngress 및 ConnectionPpsEgress 메트릭을 검토하여 가장 높은 처리량을 보내는 VIF를 파악합니다. 새로운 10 Gbps 전용 연결을 생성하고 기존 연결에서 새로운 연결로 트래픽을 전환합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ VirtualInterfaceBpsEgress/Ingress — VIF별 처리량 메트릭 (VIF 수준)\n▸ ConnectionBpsIngress/Pps — Direct Connect 연결 전체 메트릭\n▸ Private VIF — 각 VPC별 격리된 가상 인터페이스\n\n【정답 포인트】\n▸ \"어느 비즈니스 유닛\" → VIF별 모니터링 필요 = VirtualInterface 메트릭\n▸ 5개 VPC = 5개 VIF → 각 VIF의 개별 처리량 추적\n▸ 해결책 — 포화도 해결을 위해 10 Gbps 연결 추가\n▸ 기존 4 Gbps → 새 10 Gbps 병렬 → 총 대역폭 증가\n\n【오답 체크】\n(B) 기존 연결 업그레이드는 시간 소요, 새 연결 추가가 빠름\n(C) ConnectionBps* 메트릭은 VIF 격리 불가, 5 Gbps는 4 Gbps와 큰 차이 없음\n(D) 메트릭이 틀림 → VIF별 추적 불가\n\n【시험 포인트】\n▸ VIF 모니터링 = VirtualInterface 메트릭\n▸ Direct Connect 연결 모니터링 = Connection 메트릭\n▸ 다중 VIF 문제 진단 → Virtual 메트릭 필수",
    "en_q": "A company uses a 4 Gbps AWS Direct Connect dedicated connection with a link aggregation group (LAG) bundle to connect to five VPCs that are deployed in the us-east-1 Region. Each VPC serves a different business unit and uses its own private VIF for connectivity to the on-premises environment. Users are reporting slowness when they access resources that are hosted on AWS. A network engineer finds that there are sudden increases in throughput and that the Direct Connect connection becomes saturated at the same time for about an hour each business day. The company wants to know which business unit is causing the sudden increase in throughput. The network engineer must find out this information and implement a solution to resolve the problem. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Review the Amazon CloudWatch metrics for VirtualInterfaceBpsEgress and VirtualInterfaceBpsIngress to determine which VIF is sending the highest throughput during the period in which slowness is observed. Create a new 10 Gbps dedicated connection. Shift traffic from the existing dedicated connection to the new dedicated connection.",
      "B": "Review the Amazon CloudWatch metrics for VirtualInterfaceBpsEgress and VirtualInterfaceBpsIngress to determine which VIF is sending the highest throughput during the period in which slowness is observed. Upgrade the bandwidth of the existing dedicated connection to 10 Gbps.",
      "C": "Review the Amazon CloudWatch metrics for ConnectionBpsIngress and ConnectionPpsEgress to determine which VIF is sending the highest throughput during the period in which slowness is observed. Upgrade the existing dedicated connection to a 5 Gbps hosted connection.",
      "D": "Review the Amazon CloudWatch metrics for ConnectionBpsIngress and ConnectionPpsEgress to determine which VIF is sending the highest throughput during the period in which slowness is observed. Create a new 10 Gbps dedicated connection. Shift traffic from the existing dedicated connection to the new dedicated connection."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103056-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 6,
    "question": "SaaS 프로바이더가 AWS 클라우드의 VPC 내 EC2 인스턴스에서 솔루션을 호스팅합니다. 고객들도 모두 AWS 클라우드에 환경을 구축하고 있습니다. 최근 설계 회의에서 고객들의 IP 주소가 프로바이더의 AWS 배포와 겹친다는 것이 밝혀졌습니다. 고객들은 내부 IP 주소를 공유하지 않으려고 하며, 프로바이더의 SaaS 서비스로 인터넷을 통해 연결하고 싶어하지 않습니다. 이 요구사항을 충족하는 솔루션의 일부인 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Network Load Balancer 뒤에 SaaS 서비스 엔드포인트를 배포합니다.",
      "B": "엔드포인트 서비스를 구성하고, 고객에게 엔드포인트 서비스로의 연결을 생성할 수 있는 권한을 부여합니다.",
      "C": "Application Load Balancer 뒤에 SaaS 서비스 엔드포인트를 배포합니다.",
      "D": "고객 VPC로 VPC 피어링 연결을 구성합니다. NAT 게이트웨이를 통해 트래픽을 라우팅합니다.",
      "E": "AWS Transit Gateway를 배포하고, SaaS VPC를 이에 연결합니다. 고객과 Transit Gateway를 공유하고, Transit Gateway에 라우팅을 구성합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ IP 주소 겹침 (IP Overlap) — 중복된 IP 범위, NAT 없이는 통신 불가\n▸ AWS PrivateLink — VPC 엔드포인트 서비스, 사설 연결\n▸ 프라이빗 인터넷 연결 — 인터넷 경유 금지\n\n【정답 포인트】\n▸ IP 겹침 해결 → NLB(L4) 또는 PrivateLink 방식\n▸ NLB + PrivateLink Service = 고객이 엔드포인트 생성하여 연결\n▸ 고객이 IP를 노출 불필요 — PrivateLink는 VPC 내부 통신\n▸ 확장성 — 각 고객이 독립적으로 엔드포인트 생성 가능\n\n【오답 체크】\n(C) ALB는 Layer 7 처리, NLB(L4)보다 PrivateLink 연동에 부적합\n(D) VPC 피어링은 IP 겹침 문제 해결 불가\n(E) Transit Gateway는 IP 겹침 상황에서 라우팅 불가\n\n【시험 포인트】\n▸ IP 겹침 + 프라이빗 연결 = PrivateLink + 엔드포인트 서비스\n▸ NLB는 PrivateLink 지원, ALB는 제한적\n▸ \"엔드포인트 서비스 구성\" → 고객이 VPC 엔드포인트 생성하여 연결",
    "en_q": "A software-as-a-service (SaaS) provider hosts its solution on Amazon EC2 instances within a VPC in the AWS Cloud. All of the provider's customers also have their environments in the AWS Cloud. A recent design meeting revealed that the customers have IP address overlap with the provider's AWS deployment. The customers have stated that they will not share their internal IP addresses and that they do not want to connect to the provider's SaaS service over the internet. Which combination of steps is part of a solution that meets these requirements? (Choose two.)",
    "en_opts": {
      "A": "Deploy the SaaS service endpoint behind a Network Load Balancer.",
      "B": "Configure an endpoint service, and grant the customers permission to create a connection to the endpoint service.",
      "C": "Deploy the SaaS service endpoint behind an Application Load Balancer.",
      "D": "Configure a VPC peering connection to the customer VPCs. Route traffic through NAT gateways.",
      "E": "Deploy an AWS Transit Gateway, and connect the SaaS VPC to it. Share the transit gateway with the customers. Configure routing on the transit gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/102995-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 7,
    "question": "네트워크 엔지니어가 의료 회사의 워크로드를 위한 아키텍처를 설계하고 있으며, AWS 클라우드로 이전하려고 합니다. 온프레미스 환경으로 들어오고 나가는 모든 데이터는 전송 중에 암호화되어야 합니다. 모든 트래픽은 클라우드를 떠나기 전에 검사되어야 합니다. 환자가 예약을 할 수 있도록 워크로드의 일부 구성 요소가 인터넷에 노출되어야 합니다. 아키텍처는 이러한 구성 요소를 보호하고 DDoS 공격으로부터 방어해야 하며, DDoS 이벤트 중 확장으로 인한 재정적 책임으로부터도 보호해야 합니다. 이 모든 요구사항을 충족하기 위해 네트워크 엔지니어가 취해야 할 단계의 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "Traffic Mirroring을 사용하여 모든 트래픽을 트래픽 캡처 어플라이언스 플릿으로 복사합니다.",
      "B": "모든 네트워크 구성 요소에 AWS WAF를 설정합니다.",
      "C": "AWS Lambda 함수를 구성하여 보안 그룹에서 거부 규칙을 생성하고 악성 IP 주소를 차단합니다.",
      "D": "MACsec 지원이 포함된 AWS Direct Connect를 사용하여 클라우드로의 연결을 합니다.",
      "E": "Gateway Load Balancer를 사용하여 인라인 트래픽 검사를 위해 타사 방화벽을 삽입합니다.",
      "F": "AWS Shield Advanced를 구성하고, 모든 퍼블릭 자산에 구성되었는지 확인합니다."
    },
    "answer": "DEF",
    "explanation": "【핵심 용어】\n▸ MACsec — Direct Connect 암호화, 전송 중 암호화\n▸ Gateway Load Balancer — 타사 보안 어플라이언스 통합, 인라인 검사\n▸ AWS Shield Advanced — DDoS 방어 + 가격 보호 (DDoS cost protection)\n\n【정답 포인트】\n▸ \"전송 중 암호화\" → MACsec + Direct Connect\n(D)\n▸ \"트래픽 검사\" → Gateway Load Balancer + 타사 방화벽\n(E)\n▸ \"DDoS 방어 + 재정 보호\" → Shield Advanced (F)\n▸ 세 요소 모두 필수 조합\n\n【오답 체크】\n(A) Traffic Mirroring은 검사용, 트래픽 정책 적용 불가\n(B) WAF는 ALB/CloudFront에 최적, 엔드포인트간 검사용 아님\n(C) Lambda 자동 차단은 관리 복잡, 정적 방화벽 규칙 필요\n\n【시험 포인트】\n▸ 온프레미스 암호화 → MACsec + Direct Connect\n▸ 인라인 검사 → Gateway Load Balancer\n▸ DDoS 보호 + 비용 보호 → Shield Advanced 필수",
    "en_q": "A network engineer is designing the architecture for a healthcare company's workload that is moving to the AWS Cloud. All data to and from the on-premises environment must be encrypted in transit. All traffic also must be inspected in the cloud before the traffic is allowed to leave the cloud and travel to the on-premises environment or to the internet. The company will expose components of the workload to the internet so that patients can reserve appointments. The architecture must secure these components and protect them against DDoS attacks. The architecture also must provide protection against financial liability for services that scale out during a DDoS event. Which combination of steps should the network engineer take to meet all these requirements for the workload? (Choose three.)",
    "en_opts": {
      "A": "Use Traffic Mirroring to copy all traffic to a fleet of traffic capture appliances.",
      "B": "Set up AWS WAF on all network components.",
      "C": "Configure an AWS Lambda function to create Deny rules in security groups to block malicious IP addresses.",
      "D": "Use AWS Direct Connect with MACsec support for connectivity to the cloud.",
      "E": "Use Gateway Load Balancers to insert third-party firewalls for inline traffic inspection.",
      "F": "Configure AWS Shield Advanced and ensure that it is configured on all public assets."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103059-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 8,
    "question": "소매 회사가 AWS에서 서비스를 운영하고 있습니다. 아키텍처는 퍼블릭 서브넷의 ALB와 프라이빗 서브넷의 백엔드 EC2 인스턴스를 대상 그룹으로 포함합니다. 이 백엔드 EC2 인스턴스들은 NAT 게이트웨이를 사용하여 외부 호스팅 서비스에 인터넷을 통해 접속할 수 있습니다. 청구 내역에서 NAT 게이트웨이 사용이 크게 증가했음을 발견했습니다. 네트워크 엔지니어는 NAT 게이트웨이를 통한 트래픽의 출처를 파악해야 합니다. NAT 게이트웨이를 통한 트래픽을 조사하기 위해 네트워크 엔지니어가 사용할 수 있는 옵션은 무엇입니까? (2개 선택)",
    "options": {
      "A": "NAT 게이트웨이의 탄력적 네트워크 인터페이스에서 VPC Flow Logs를 활성화하고, 로그를 Amazon CloudWatch Logs 그룹에 게시합니다. CloudWatch Logs Insights를 사용하여 로그를 쿼리하고 분석합니다.",
      "B": "NAT 게이트웨이 액세스 로그를 활성화하고, 로그를 Amazon CloudWatch Logs 그룹에 게시합니다. CloudWatch Logs Insights를 사용하여 로그를 쿼리하고 분석합니다.",
      "C": "NAT 게이트웨이의 탄력적 네트워크 인터페이스에서 Traffic Mirroring을 구성하고, 트래픽을 추가 EC2 인스턴스로 전송합니다. tcpdump 및 Wireshark 같은 도구를 사용하여 미러링된 트래픽을 분석합니다.",
      "D": "NAT 게이트웨이의 탄력적 네트워크 인터페이스에서 VPC Flow Logs를 활성화하고, 로그를 Amazon S3 버킷에 게시합니다. S3 버킷에 대해 Amazon Athena에서 사용자 정의 테이블을 생성하여 로그 구조를 설명합니다. Athena를 사용하여 로그를 쿼리하고 분석합니다.",
      "E": "NAT 게이트웨이 액세스 로그를 활성화하고, 로그를 Amazon S3 버킷에 게시합니다. S3 버킷에 대해 Amazon Athena에서 사용자 정의 테이블을 생성하여 로그 구조를 설명합니다. Athena를 사용하여 로그를 쿼리하고 분석합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ VPC Flow Logs — IP 트래픽 메타데이터 (5-tuple, 프로토콜, 포트)\n▸ NAT Gateway Access Logs — NAT 게이트웨이의 연결 로그 (더 상세한 정보)\n▸ CloudWatch Logs Insights — 실시간 쿼리, 빠른 분석\n▸ Athena — S3 기반 장기 저장, 대규모 분석\n\n【정답 포인트】\n▸ \"트래픽 출처 파악\" → VPC Flow Logs (ENI 수준)로 충분\n▸ Flow Logs는 소스 IP, 포트, 프로토콜, 바이트 제공\n▸ CloudWatch Logs와 S3 모두 유효한 저장소\n▸ \n(A) 실시간 분석 용도\n(D) 장기 저장 분석 용도\n▸ NAT 게이트웨이 자체는 Access Logs 미지원 (일부 AWS 문서상 제한)\n\n【오답 체크】\n(B) \n(E) NAT 게이트웨이 Access Logs는 존재하지 않음 (비표준)\n(C) Traffic Mirroring은 분석용, 과도한 복잡성\n\n【시험 포인트】\n▸ ENI 수준 모니터링 → VPC Flow Logs\n▸ 저장소 옵션 = CloudWatch Logs 또는 S3\n▸ NAT 게이트웨이는 Flow Logs 지원, Access Logs 미지원",
    "en_q": "A retail company is running its service on AWS. The company's architecture includes Application Load Balancers (ALBs) in public subnets. The ALB target groups are configured to send traffic to backend Amazon EC2 instances in private subnets. These backend EC2 instances can call externally hosted services over the internet by using a NAT gateway. The company has noticed in its billing that NAT gateway usage has increased significantly. A network engineer needs to find out the source of this increased usage. Which options can the network engineer use to investigate the traffic through the NAT gateway? (Choose two.)",
    "en_opts": {
      "A": "Enable VPC flow logs on the NAT gateway's elastic network interface. Publish the logs to a log group in Amazon CloudWatch Logs. Use CloudWatch Logs Insights to query and analyze the logs.",
      "B": "Enable NAT gateway access logs. Publish the logs to a log group in Amazon CloudWatch Logs. Use CloudWatch Logs Insights to query and analyze the logs.",
      "C": "Configure Traffic Mirroring on the NAT gateway's elastic network interface. Send the traffic to an additional EC2 instance. Use tools such as tcpdump and Wireshark to query and analyze the mirrored traffic.",
      "D": "Enable VPC flow logs on the NAT gateway's elastic network interface. Publish the logs to an Amazon S3 bucket. Create a custom table for the S3 bucket in Amazon Athena to describe the log structure. Use Athena to query and analyze the logs.",
      "E": "Enable NAT gateway access logs. Publish the logs to an Amazon S3 bucket. Create a custom table for the S3 bucket in Amazon Athena to describe the log structure. Use Athena to query and analyze the logs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103063-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 9,
    "question": "은행 회사가 AWS에서 공개 모바일 뱅킹 스택을 성공적으로 운영 중입니다. 모바일 뱅킹 스택은 프라이빗 서브넷과 퍼블릭 서브넷이 있는 VPC에 배포되어 있습니다. 회사는 IPv4 네트워킹을 사용하고 있으며 IPv6을 배포하거나 지원하지 않습니다. 회사가 타사 서비스 공급자의 API를 채택하기로 결정했으며, 이 API는 IPv6이 필요합니다. 네트워크 엔지니어는 프라이빗 서브넷에 배포된 기존 워크로드에 IPv6 연결을 활성화해야 합니다. 회사는 퍼블릭 인터넷에서 IPv6 트래픽을 허용하지 않으려고 하며, 회사의 서버가 모든 IPv6 연결을 시작해야 합니다. 네트워크 엔지니어가 VPC와 프라이빗 서브넷에서 IPv6을 활성화했습니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "인터넷 게이트웨이와 NAT 게이트웨이를 VPC에 생성합니다. 기존 서브넷 라우팅 테이블에 IPv6 트래픽을 NAT 게이트웨이로 포인트하는 경로를 추가합니다.",
      "B": "인터넷 게이트웨이와 NAT 인스턴스를 VPC에 생성합니다. 기존 서브넷 라우팅 테이블에 IPv6 트래픽을 NAT 인스턴스로 포인트하는 경로를 추가합니다.",
      "C": "Egress-Only Internet Gateway를 VPC에 생성합니다. 기존 서브넷 라우팅 테이블에 IPv6 트래픽을 Egress-Only Internet Gateway로 포인트하는 경로를 추가합니다.",
      "D": "Egress-Only Internet Gateway를 VPC에 생성합니다. 모든 인바운드 트래픽을 거부하는 보안 그룹을 구성하고, 이를 Egress-Only Internet Gateway와 연결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Egress-Only Internet Gateway — IPv6 아웃바운드 전용, 인바운드 불허\n▸ NAT Gateway — IPv4 전용 (IPv6 미지원)\n▸ 아웃바운드 가시성 (Outbound-only) — 서버 초기화 트래픽만\n\n【정답 포인트】\n▸ IPv6 + 아웃바운드만 → Egress-Only Internet Gateway (유일한 옵션)\n▸ 인바운드 차단 자동 — IPv6 인바운드는 EIGW에서 기본 거부\n▸ 라우팅 설정 필수 — 서브넷 라우팅 테이블에 ::/0 경로 추가\n▸ 보안 그룹 추가 불필요 — EIGW 자체가 방향성 제어\n\n【오답 체크】\n(A) NAT 게이트웨이는 IPv6 미지원\n(B) NAT 인스턴스도 IPv6 미지원\n(D) 보안 그룹만으로 IPv6 제어 불가, EIGW 생성 필수\n\n【시험 포인트】\n▸ IPv6 아웃바운드만 필요 = Egress-Only Internet Gateway\n▸ 라우팅 테이블 구성 = 서브넷 경로 추가\n▸ NAT는 IPv4 전용 개념",
    "en_q": "A banking company is successfully operating its public mobile banking stack on AWS. The mobile banking stack is deployed in a VPC that includes private subnets and public subnets. The company is using IPv4 networking and has not deployed or supported IPv6 in the environment. The company has decided to adopt a third-party service provider's API and must integrate the API with the existing environment. The service provider's API requires the use of IPv6. A network engineer must turn on IPv6 connectivity for the existing workload that is deployed in a private subnet. The company does not want to permit IPv6 traffic from the public internet and mandates that the company's servers must initiate all IPv6 connectivity. The network engineer turns on IPv6 in the VPC and in the private subnets. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an internet gateway and a NAT gateway in the VPC. Add a route to the existing subnet route tables to point IPv6 traffic to the NAT gateway.",
      "B": "Create an internet gateway and a NAT instance in the VPC. Add a route to the existing subnet route tables to point IPv6 traffic to the NAT instance.",
      "C": "Create an egress-only Internet gateway in the VPAdd a route to the existing subnet route tables to point IPv6 traffic to the egress-only internet gateway.",
      "D": "Create an egress-only internet gateway in the VPC. Configure a security group that denies all inbound traffic. Associate the security group with the egress-only internet gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103067-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 10,
    "question": "회사가 VPC에 AWS Network Firewall 방화벽을 배포했습니다. 네트워크 엔지니어는 Network Firewall 흐름 로그를 회사의 Amazon OpenSearch Service 클러스터에 가장 빠르게 전달하는 솔루션을 구현해야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon S3 버킷을 생성합니다. AWS Lambda 함수를 생성하여 로그를 Amazon OpenSearch Service 클러스터에 로드합니다. S3 버킷에서 Amazon SNS 알림을 활성화하여 Lambda 함수를 호출합니다. 방화벽의 흐름 로그를 구성하고, S3 버킷을 대상으로 설정합니다.",
      "B": "Amazon Kinesis Data Firehose 배달 스트림을 생성하고 Amazon OpenSearch Service 클러스터를 대상으로 포함시킵니다. 방화벽의 흐름 로그를 구성하고, Kinesis Data Firehose 배달 스트림을 Network Firewall 흐름 로그의 대상으로 설정합니다.",
      "C": "방화벽의 흐름 로그를 구성합니다. Amazon OpenSearch Service 클러스터를 Network Firewall 흐름 로그의 대상으로 설정합니다.",
      "D": "Amazon Kinesis Data Stream을 생성하고 Amazon OpenSearch Service 클러스터를 대상으로 포함시킵니다. 방화벽의 흐름 로그를 구성하고, Kinesis Data Stream을 Network Firewall 흐름 로그의 대상으로 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Kinesis Data Firehose — 완전관리형, 자동 배치, 직접 OpenSearch 통합\n▸ Network Firewall Flow Logs — 방화벽 흐름 메타데이터\n▸ Lambda + S3 — 높은 레이턴시, 추가 처리 필요\n\n【정답 포인트】\n▸ \"가장 빠르게\" → Firehose의 자동 배치 + 네이티브 OpenSearch 통합\n▸ Firehose는 Network Firewall 직접 지원 대상\n▸ S3 + Lambda 경로는 약 5-15분 지연\n▸ 완전관리형 서비스 → 운영 오버헤드 최소\n\n【오답 체크】\n(A) S3 + Lambda → 레이턴시 높음, 추가 함수 개발 필요\n(C) OpenSearch 직접 대상 미지원 (Network Firewall은 Firehose/S3만 지원)\n(D) Kinesis Data Stream은 Firehose보다 레이턴시 높음, 커스텀 컨슈머 필요\n\n【시험 포인트】\n▸ Network Firewall Flow Logs → Kinesis Data Firehose → OpenSearch\n▸ \"가장 빠르게\" = Firehose의 버퍼링 + 배치 처리 (1-60초 설정 가능)\n▸ 직접 대상은 Firehose/S3 두 가지만",
    "en_q": "A company has deployed an AWS Network Firewall firewall into a VPC. A network engineer needs to implement a solution to deliver Network Firewall flow logs to the company's Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster in the shortest possible time. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an Amazon S3 bucket. Create an AWS Lambda function to load logs into the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. Enable Amazon Simple Notification Service (Amazon SNS) notifications on the S3 bucket to invoke the Lambda function. Configure flow logs for the firewall. Set the S3 bucket as the destination.",
      "B": "Create an Amazon Kinesis Data Firehose delivery stream that includes the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster as the destination. Configure flow logs for the firewall Set the Kinesis Data Firehose delivery stream as the destination for the Network Firewall flow logs.",
      "C": "Configure flow logs for the firewall. Set the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster as the destination for the Network Firewall flow logs.",
      "D": "Create an Amazon Kinesis data stream that includes the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster as the destination. Configure flow logs for the firewall. Set the Kinesis data stream as the destination for the Network Firewall flow logs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103069-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 11,
    "question": "회사가 VPC에서 BIND를 실행하는 사용자 정의 DNS 서버를 사용하고 있습니다. VPC는 AWS Organizations의 일부인 동일한 조직의 여러 AWS 계정에 배포되고 Transit Gateway에 연결됩니다. BIND 서버는 중앙 VPC에서 실행되고 온프레미스 DNS 도메인에 대한 모든 쿼리를 온프레미스 데이터 센터에서 호스팅되는 DNS 서버로 전달하도록 구성됩니다. 모든 VPC가 사용자 정의 DNS 서버를 사용하도록 하기 위해 네트워크 엔지니어는 모든 VPC에서 VPC DHCP 옵션 세트를 구성하여 사용자 정의 DNS 서버를 도메인 이름 서버로 지정했습니다. 여러 개발팀이 Amazon EFS를 사용하려고 합니다. 한 개발팀이 새로운 EFS 파일 시스템을 생성했지만 EC2 인스턴스에 마운트할 수 없습니다. 네트워크 엔지니어는 EC2 인스턴스가 EFS 마운트 포인트 fs-33444567d.efs.us-east-1.amazonaws.com의 IP 주소를 확인할 수 없음을 발견했습니다. 네트워크 엔지니어는 조직 전체의 개발팀이 EFS 파일 시스템을 마운트할 수 있는 솔루션을 구현해야 합니다. 이 요구사항을 충족할 단계의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "중앙 VPC의 BIND DNS 서버를 구성하여 efs.us-east-1.amazonaws.com에 대한 쿼리를 Amazon 제공 DNS 서버(169.254.169.253)로 전달합니다.",
      "B": "중앙 VPC에 Amazon Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 모든 VPC DHCP 옵션 세트를 AmazonProvidedDNS를 사용하도록 업데이트합니다.",
      "C": "중앙 VPC에 Amazon Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 모든 VPC DHCP 옵션 세트를 중앙 VPC의 Route 53 Resolver 인바운드 엔드포인트를 사용하도록 업데이트합니다.",
      "D": "온프레미스 도메인에 대한 쿼리를 온프레미스 DNS 서버로 전달하는 Amazon Route 53 Resolver 규칙을 생성합니다. AWS Resource Access Manager를 사용하여 규칙을 조직과 공유하고, 모든 VPC와 연결합니다.",
      "E": "efs.us-east-1.amazonaws.com 도메인에 대한 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역을 EC2 인스턴스가 배포된 VPC와 연결합니다. efs.us-east-1.amazonaws.com 도메인의 프라이빗 호스팅 영역에서 fs-33444567d.efs.us-east-1.amazonaws.com에 대한 A 레코드를 생성합니다. A 레코드를 EFS 마운트 포인트의 대상으로 반환하도록 구성합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver — 하이브리드 DNS 해석, Inbound/Outbound 엔드포인트\n▸ AmazonProvidedDNS (169.254.169.253) — AWS 기본 DNS, EFS 등 AWS 서비스 해석 가능\n▸ Resolver 규칙 공유 — AWS RAM으로 조직 전체에 배포\n\n【정답 포인트】\n▸ \"EFS 마운트 불가\" → BIND는 AWS 내부 도메인 해석 불가\n▸ \"조직 전체\" → Resolver 규칙 공유\n(D) 필수\n▸ \"온프레미스 도메인 유지\" → Outbound 엔드포인트\n(B) + AmazonProvidedDNS\n▸ 세부 흐름: VPC DHCP → Resolver Outbound → AWS 서비스는 AmazonProvidedDNS, 온프레미스는 온프레미스 DNS로\n\n【오답 체크】\n(A) BIND 수동 설정은 확장성 떨어짐, 자동화 불가\n(C) Inbound 엔드포인트는 온프레미스 → AWS 방향, 이 경우 필요 없음\n(E) Private Hosted Zone은 중앙집중식 관리 어려움, 개별 VPC 연결 필요\n\n【시험 포인트】\n▸ 하이브리드 DNS (온프레미스 + AWS) → Route 53 Resolver Outbound\n▸ 조직 전체 배포 → Resolver 규칙 공유 (RAM)\n▸ DHCP 옵션 변경 → Resolver 엔드포인트 IP 또는 AmazonProvidedDNS",
    "en_q": "A company is using custom DNS servers that run BIND for name resolution in its VPCs. The VPCs are deployed across multiple AWS accounts that are part of the same organization in AWS Organizations. All the VPCs are connected to a transit gateway. The BIND servers are running in a central VPC and are configured to forward all queries for an on-premises DNS domain to DNS servers that are hosted in an on-premises data center. To ensure that all the VPCs use the custom DNS servers, a network engineer has configured a VPC DHCP options set in all the VPCs that specifies the custom DNS servers to be used as domain name servers. Multiple development teams in the company want to use Amazon Elastic File System (Amazon EFS). A development team has created a new EFS file system but cannot mount the file system to one of its Amazon EC2 instances. The network engineer discovers that the EC2 instance cannot resolve the IP address for the EFS mount point fs-33444567d.efs.us-east-1.amazonaws.com. The network engineer needs to implement a solution so that development teams throughout the organization can mount EFS file systems. Which combination of steps will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Configure the BIND DNS servers in the central VPC to forward queries for efs.us-east-1.amazonaws.com to the Amazon provided DNS server (169.254.169.253).",
      "B": "Create an Amazon Route 53 Resolver outbound endpoint in the central VPC. Update all the VPC DHCP options sets to use AmazonProvidedDNS for name resolution.",
      "C": "Create an Amazon Route 53 Resolver inbound endpoint in the central VPUpdate all the VPC DHCP options sets to use the Route 53 Resolver inbound endpoint in the central VPC for name resolution.",
      "D": "Create an Amazon Route 53 Resolver rule to forward queries for the on-premises domain to the on-premises DNS servers. Share the rule with the organization by using AWS Resource Access Manager (AWS RAM). Associate the rule with all the VPCs.",
      "E": "Create an Amazon Route 53 private hosted zone for the efs.us-east-1.amazonaws.com domain. Associate the private hosted zone with the VPC where the EC2 instance is deployed. Create an A record for fs-33444567d.efs.us-east-1.amazonaws.com in the private hosted zone. Configure the A record to return the mount target of the EFS mount point."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103070-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 12,
    "question": "전자상거래 회사가 Amazon EC2 인스턴스에서 웹 애플리케이션을 호스팅하여 고객 수요의 지속적인 변화에 대응합니다. EC2 인스턴스는 Auto Scaling 그룹의 일부입니다. 회사는 고객에서 EC2 인스턴스로 트래픽을 분배하기 위한 솔루션을 구현하려고 합니다. 클라이언트와 애플리케이션 서버 간의 모든 단계에서 모든 트래픽이 암호화되어야 하며, 중간 지점에서의 복호화는 허용되지 않습니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "Application Load Balancer를 생성합니다. ALB에 HTTPS 리스너를 추가합니다. Auto Scaling 그룹을 ALB의 대상 그룹에 등록하도록 구성합니다.",
      "B": "Amazon CloudFront 배포를 생성합니다. 배포를 사용자 정의 SSL/TLS 인증서로 구성합니다. Auto Scaling 그룹을 배포의 원본으로 설정합니다.",
      "C": "Network Load Balancer를 생성합니다. NLB에 TCP 리스너를 추가합니다. Auto Scaling 그룹을 NLB의 대상 그룹에 등록하도록 구성합니다.",
      "D": "Gateway Load Balancer를 생성합니다. Auto Scaling 그룹을 GLB의 대상 그룹에 등록하도록 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ End-to-End Encryption — 클라이언트 → 서버 전체 경로 암호화, 중간 복호화 금지\n▸ Network Load Balancer (L4) — 전송 계층, 애플리케이션 데이터 검사 안 함\n▸ Application Load Balancer (L7) — 응용 계층, 데이터 복호화/재암호화\n\n【정답 포인트】\n▸ \"중간 지점에서의 복호화 금지\" → NLB(L4) + TCP 리스너 사용\n▸ ALB는 HTTPS를 처리하면서 클라이언트-ALB, ALB-백엔드 간 별도 TLS\n▸ NLB TCP 리스너는 패킷 전달만 → 애플리케이션 계층 TLS 유지\n▸ 클라이언트가 EC2 인스턴스와 직접 TLS 핸드셰이크 수행\n\n【오답 체크】\n(A) ALB HTTPS = Layer 7 복호화 → 요구사항 위배\n(B) CloudFront = CDN, 원본과 CloudFront 간별 TLS → 요구사항 위배\n(D) GLB = 네트워크 어플라이언스용, 일반 로드밸런싱 미흡\n\n【시험 포인트】\n▸ End-to-End TLS → NLB(L4) + TCP/TLS 리스너\n▸ ALB/CLB HTTPS = 복호화 발생 → 중간점 암호화 위배\n▸ \"중간 지점에서의 복호화 금지\" = L4 로드밸런싱 필수",
    "en_q": "An ecommerce company is hosting a web application on Amazon EC2 instances to handle continuously changing customer demand. The EC2 instances are part of an Auto Scaling group. The company wants to implement a solution to distribute traffic from customers to the EC2 instances. The company must encrypt all traffic at all stages between the customers and the application servers. No decryption at intermediate points is allowed. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an Application Load Balancer (ALB). Add an HTTPS listener to the ALB. Configure the Auto Scaling group to register instances with the ALB's target group.",
      "B": "Create an Amazon CloudFront distribution. Configure the distribution with a custom SSL/TLS certificate. Set the Auto Scaling group as the distribution's origin.",
      "C": "Create a Network Load Balancer (NLB). Add a TCP listener to the NLB. Configure the Auto Scaling group to register instances with the NLB's target group.",
      "D": "Create a Gateway Load Balancer (GLB). Configure the Auto Scaling group to register instances with the GLB's target group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103071-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 13,
    "question": "회사가 2개의 온프레미스 데이터 센터 위치를 가지고 있습니다. 각 데이터 센터에 회사 관리형 라우터가 있으며, 각 데이터 센터는 프라이빗 가상 인터페이스를 통해 Direct Connect 게이트웨이로의 AWS Direct Connect 전용 연결을 가지고 있습니다. 첫 번째 위치의 라우터는 BGP를 사용하여 Direct Connect 게이트웨이에 110개의 경로를 광고하고 있으며, 두 번째 위치의 라우터는 60개의 경로를 광고하고 있습니다. Direct Connect 게이트웨이는 가상 프라이빗 게이트웨이를 통해 회사 VPC에 연결되어 있습니다. 네트워크 엔지니어는 VPC의 리소스가 두 데이터 센터 위치에서 접근 불가능하다는 보고를 받았습니다. 네트워크 엔지니어가 VPC 라우팅 테이블을 확인한 결과, 첫 번째 데이터 센터 위치의 경로가 라우팅 테이블에 채워지지 않은 것을 발견했습니다. 가장 운영 효율적인 방식으로 이 문제를 해결하려면 네트워크 엔지니어는 어떻게 해야 합니까?",
    "options": {
      "A": "Direct Connect 게이트웨이를 제거하고, 각 회사 라우터에서 VPC의 가상 프라이빗 게이트웨이로 새 프라이빗 가상 인터페이스를 생성합니다.",
      "B": "라우터 구성을 변경하여 광고된 경로를 요약합니다.",
      "C": "지원 티켓을 열어 VPC 라우팅 테이블로 광고된 경로의 할당량을 증가시킵니다.",
      "D": "AWS Transit Gateway를 생성합니다. Transit Gateway를 VPC에 연결하고, Direct Connect 게이트웨이를 Transit Gateway에 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ BGP Route Aggregation — 경로 요약, 작은 CIDR로 여러 경로 통합\n▸ VPC Route Table Limit — Virtual Private Gateway: 100개 경로 제한\n▸ 경로 광고 초과 — 첫 번째 위치: 110개 > 100개 제한\n\n【정답 포인트】\n▸ \"110개\" vs \"100개 제한\" → 할당량 초과 문제\n▸ 첫 번째 위치만 문제 → 경로 요약으로 110개를 100개 이하로 감소\n▸ 가장 운영 효율적 → BGP 설정 조정만 필요\n▸ 경로 요약 예: 192.168.1.0/24 ~ 192.168.10.0/24 → 192.168.0.0/20\n\n【오답 체크】\n(A) Direct Connect 게이트웨이 제거 → 아키텍처 변경, 복잡\n(C) 할당량 증가는 느린 프로세스, 근본 문제 해결 아님\n(D) Transit Gateway는 비용 추가, 문제 해결에 필수 아님\n\n【시험 포인트】\n▸ VGW 경로 제한 = 100개 (BGP 광고)\n▸ 경로 초과 → 요약으로 해결\n▸ 운영 효율성 = 가장 간단한 방법",
    "en_q": "A company has two on-premises data center locations. There is a company-managed router at each data center. Each data center has a dedicated AWS Direct Connect connection to a Direct Connect gateway through a private virtual interface. The router for the first location is advertising 110 routes to the Direct Connect gateway by using BGP, and the router for the second location is advertising 60 routes to the Direct Connect gateway by using BGP. The Direct Connect gateway is attached to a company VPC through a virtual private gateway. A network engineer receives reports that resources in the VPC are not reachable from various locations in either data center. The network engineer checks the VPC route table and sees that the routes from the first data center location are not being populated into the route table. The network engineer must resolve this issue in the most operationally efficient manner. What should the network engineer do to meet these requirements?",
    "en_opts": {
      "A": "Remove the Direct Connect gateway, and create a new private virtual interface from each company router to the virtual private gateway of the VPC.",
      "B": "Change the router configurations to summarize the advertised routes.",
      "C": "Open a support ticket to increase the quota on advertised routes to the VPC route table.",
      "D": "Create an AWS Transit Gateway. Attach the transit gateway to the VPC, and connect the Direct Connect gateway to the transit gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103072-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 14,
    "question": "회사가 여러 AWS 계정을 포함하는 하이브리드 아키텍처를 사용하여 AWS 클라우드로 네트워크를 확장했습니다. 회사는 온프레미스 데이터 센터 및 사무실로의 연결을 위한 공유 AWS 계정을 설정했습니다. 워크로드는 여러 AWS 계정에서 실행되는 내부용 웹 기반 서비스로 구성되어 있습니다. 사무실 기반 직원들은 example.internal이라는 온프레미스 DNS 영역의 DNS 이름을 사용하여 이러한 서비스를 사용합니다. 새로운 AWS 서비스를 등록하는 프로세스는 수동이며 복잡하며, 많은 팀이 관여합니다. 회사는 DNS 등록 프로세스를 업데이트하여 서비스 생성자들에게 DNS 레코드를 등록할 수 있는 액세스 권한을 제공하려고 합니다. 네트워크 엔지니어는 이 목표를 달성할 수 있는 솔루션을 설계해야 합니다. 솔루션은 비용 효율성을 극대화하고 가능한 한 적은 수의 구성 변경을 요구해야 합니다. 이 요구사항을 충족하기 위해 네트워크 엔지니어가 취해야 할 단계의 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "각 서비스에 대해 로컬 프라이빗 호스팅 영역에서 레코드를 생성합니다 (serviceA.account1.aws.example.internal). 액세스가 필요한 직원들에게 이 DNS 레코드를 제공합니다.",
      "B": "공유 계정 VPC에 Amazon Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 온프레미스 DNS 서버에서 aws.example.internal이라는 도메인에 대한 조건부 포워더를 생성합니다. 포워딩 IP 주소를 인바운드 엔드포인트의 IP 주소로 설정합니다.",
      "C": "onprem.example.internal에 대해 온프레미스 DNS 서버로 쿼리를 전달하는 Amazon Route 53 Resolver 규칙을 생성합니다.",
      "D": "공유 AWS 계정에서 aws.example.internal이라는 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다.",
      "E": "공유 AWS 계정에서 2개의 Amazon EC2 인스턴스를 시작합니다. 각 인스턴스에 BIND를 설치합니다. 각 BIND 서버에서 aws.example.internal 아래의 각 서브도메인에 대한 DNS 조건부 포워더를 생성하여 각 AWS 계정의 적절한 프라이빗 호스팅 영역으로 쿼리를 전달합니다. 온프레미스 DNS 서버에서 aws.example.internal에 대한 조건부 포워더를 생성합니다. 포워딩 IP 주소를 BIND 서버의 IP 주소로 설정합니다.",
      "F": "공유 AWS 계정에서 서비스를 실행하는 각 계정에 대한 프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역을 aws.example.internal 도메인에 포함하도록 구성합니다 (account1.aws.example.internal). 프라이빗 호스팅 영역을 서비스를 실행하는 VPC 및 공유 계정 VPC와 연결합니다."
    },
    "answer": "BDF",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver Inbound Endpoint — 온프레미스 DNS가 AWS Route 53으로 쿼리 전달\n▸ Private Hosted Zone — VPC별 격리된 DNS 레코드\n▸ 조건부 포워더 — 특정 도메인에 대한 선택적 DNS 전달\n\n【정답 포인트】\n▸ \"서비스 생성자 액세스 권한\" → 각 계정이 자신의 PHZ에 레코드 생성 (F)\n▸ \"온프레미스와 AWS 통합\" → Resolver Inbound Endpoint\n(B)\n▸ \"중앙화된 관리\" → 공유 계정의 PHZ\n(D)\n▸ \"최소 구성 변경\" → 온프레미스는 조건부 포워더만 설정\n▸ 세부 흐름: 온프레미스 직원 → 조건부 포워더 → Resolver Inbound → 공유 계정 PHZ → 개별 계정 PHZ\n\n【오답 체크】\n(A) 각 서비스별 PHZ = 관리 복잡, 확장성 떨어짐\n(C) onprem.example.internal 규칙은 역방향 필요 없음\n(E) EC2 + BIND 운영 오버헤드, 관리형 서비스 미사용\n\n【시험 포인트】\n▸ 온프레미스-AWS DNS 통합 = Resolver Inbound Endpoint\n▸ 다중 계정 DNS = 각 계정 PHZ + 공유 계정 중앙 PHZ\n▸ 위임 패턴 = account1.aws.example.internal → account1 PHZ로 위임",
    "en_q": "A company has expanded its network to the AWS Cloud by using a hybrid architecture with multiple AWS accounts. The company has set up a shared AWS account for the connection to its on-premises data centers and the company offices. The workloads consist of private web-based services for internal use. These services run in different AWS accounts. Office-based employees consume these services by using a DNS name in an on-premises DNS zone that is named example.internal. The process to register a new service that runs on AWS requires a manual and complicated change request to the internal DNS. The process involves many teams. The company wants to update the DNS registration process by giving the service creators access that will allow them to register their DNS records. A network engineer must design a solution that will achieve this goal. The solution must maximize cost-effectiveness and must require the least possible number of configuration changes. Which combination of steps should the network engineer take to meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Create a record for each service in its local private hosted zone (serviceA.account1.aws.example.internal). Provide this DNS record to the employees who need access.",
      "B": "Create an Amazon Route 53 Resolver inbound endpoint in the shared account VPC. Create a conditional forwarder for a domain named aws.example.internal on the on-premises DNS servers. Set the forwarding IP addresses to the inbound endpoint's IP addresses that were created.",
      "C": "Create an Amazon Route 53 Resolver rule to forward any queries made to onprem.example.internal to the on-premises DNS servers.",
      "D": "Create an Amazon Route 53 private hosted zone named aws.example.internal in the shared AWS account to resolve queries for this domain.",
      "E": "Launch two Amazon EC2 instances in the shared AWS account. Install BIND on each instance. Create a DNS conditional forwarder on each BIND server to forward queries for each subdomain under aws.example.internal to the appropriate private hosted zone in each AWS account. Create a conditional forwarder for a domain named aws.example.internal on the on-premises DNS servers. Set the forwarding IP addresses to the IP addresses of the BIND servers.",
      "F": "Create a private hosted zone in the shared AWS account for each account that runs the service. Configure the private hosted zone to contain aws.example.internal in the domain (account1.aws.example.internal). Associate the private hosted zone with the VPC that runs the service and the shared account VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103105-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 15,
    "question": "회사가 여러 AWS 계정을 보유하고 있으며, 각 계정에는 하나 이상의 VPC가 있습니다. 새로운 보안 지침에 따라 VPC 간의 모든 트래픽을 검사해야 합니다. 회사는 모든 VPC에 연결을 제공하는 Transit Gateway를 배포했습니다. 또한 상태 검사를 위해 IDS 서비스를 포함하는 Amazon EC2 인스턴스를 공유 서비스 VPC에 배포했으며, 이들은 3개의 가용 영역에 배포되어 있습니다. 회사는 Transit Gateway에서 VPC 연결 및 라우팅을 설정했습니다. 회사가 몇 개의 테스트 VPC를 새로운 솔루션으로 마이그레이션한 후, 라우팅을 구성한 직후에 가용 영역을 횡단하는 트래픽에 대한 간헐적인 연결 문제 보고를 받기 시작했습니다. 네트워크 엔지니어는 이 문제를 해결하기 위해 어떻게 해야 합니까?",
    "options": {
      "A": "공유 서비스 VPC의 Transit Gateway VPC 첨부 파일을 수정하여 가용 영역 간 로드 밸런싱을 활성화합니다.",
      "B": "공유 서비스 VPC의 Transit Gateway VPC 첨부 파일을 수정하여 어플라이언스 모드 지원을 활성화합니다.",
      "C": "Transit Gateway를 수정하여 VPN 등비용 다중 경로(ECMP) 라우팅 지원을 선택합니다.",
      "D": "Transit Gateway를 수정하여 멀티캐스트 지원을 선택합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Appliance Mode — Transit Gateway 첨부 파일 설정, 단일 AZ 선호성 제거\n▸ IDS/IPS Appliance — 상태 기반 방화벽, 양방향 흐름 추적\n▸ Cross-AZ 간헐적 연결 — 로드 밸런싱으로 인한 흐름 분산\n\n【정답 포인트】\n▸ \"IDS 서비스\" + \"Cross-AZ 간헐적 연결\" → 상태 검사 어플라이언스 문제\n▸ 기본 동작 — Transit Gateway는 여러 AZ의 ENI 간 로드 밸런싱\n▸ 문제 — 상태 검사 장치는 단일 경로 선호, 양방향 흐름 추적 필요\n▸ 해결책 — Appliance Mode 활성화 → 모든 트래픽을 단일 ENI로 라우팅\n▸ 결과 — IDS가 양방향 흐름 일관성 유지 가능\n\n【오답 체크】\n(A) Cross-AZ Load Balancing = 문제의 원인, 활성화하면 더 악화\n(C) ECMP는 비용 기반 경로 선택, IDS 흐름 추적 미개선\n(D) Multicast는 요구사항과 무관\n\n【시험 포인트】\n▸ 상태 검사 어플라이언스 + Transit Gateway = Appliance Mode 필수\n▸ Appliance Mode = AZ 선호성 제거 + 단일 엔드포인트 라우팅\n▸ 간헐적 연결 + 검사 어플라이언스 = Appliance Mode 패턴",
    "en_q": "A company has multiple AWS accounts. Each account contains one or more VPCs. A new security guideline requires the inspection of all traffic between VPCs. The company has deployed a transit gateway that provides connectivity between all VPCs. The company also has deployed a shared services VPC with Amazon EC2 instances that include IDS services for stateful inspection. The EC2 instances are deployed across three Availability Zones. The company has set up VPC associations and routing on the transit gateway. The company has migrated a few test VPCs to the new solution for traffic inspection. Soon after the configuration of routing, the company receives reports of intermittent connections for traffic that crosses Availability Zones. What should a network engineer do to resolve this issue?",
    "en_opts": {
      "A": "Modify the transit gateway VPC attachment on the shared services VPC by enabling cross-Availability Zone load balancing.",
      "B": "Modify the transit gateway VPC attachment on the shared services VPC by enabling appliance mode support.",
      "C": "Modify the transit gateway by selecting VPN equal-cost multi-path (ECMP) routing support.",
      "D": "Modify the transit gateway by selecting multicast support."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103106-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 16,
    "question": "회사가 us-west-2 리전의 VPC의 프라이빗 서브넷에 인터넷 연결을 허용하기 위해 NAT 게이트웨이를 사용하고 있습니다. 보안 감사 후, 회사는 NAT 게이트웨이를 제거해야 합니다. 프라이빗 서브넷에서 회사는 통합 Amazon CloudWatch 에이전트를 사용하는 리소스를 보유하고 있습니다. 네트워크 엔지니어는 NAT 게이트웨이 제거 후 통합 CloudWatch 에이전트가 계속 작동할 수 있도록 하는 솔루션을 만들어야 합니다. 이 요구사항을 충족하기 위해 네트워크 엔지니어가 취해야 할 단계의 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "VPC의 enableDnsHostnames VPC 속성과 enableDnsSupport VPC 속성이 true로 설정되어 있는지 확인하여 프라이빗 DNS가 활성화되었는지 검증합니다.",
      "B": "TCP 프로토콜을 사용하고 포트 443에서 대상 0.0.0.0/0으로의 아웃바운드 트래픽을 허용하는 항목이 있는 새로운 보안 그룹을 생성합니다.",
      "C": "TCP 프로토콜을 사용하고 포트 443에서 프라이빗 서브넷의 IP 접두사로부터의 인바운드 트래픽을 허용하는 항목이 있는 새로운 보안 그룹을 생성합니다.",
      "D": "VPC에서 다음 인터페이스 VPC 엔드포인트를 생성합니다: com.amazonaws.us-west-2.logs 및 com.amazonaws.us-west-2.monitoring. 새로운 보안 그룹을 엔드포인트 네트워크 인터페이스와 연결합니다.",
      "E": "VPC에서 다음 인터페이스 VPC 엔드포인트를 생성합니다: com.amazonaws.us-west-2.cloudwatch. 새로운 보안 그룹을 엔드포인트 네트워크 인터페이스와 연결합니다.",
      "F": "VPC 엔드포인트 또는 엔드포인트를 프라이빗 서브넷이 사용하는 라우팅 테이블과 연결합니다."
    },
    "answer": "ACD",
    "explanation": "【핵심 용어】\n▸ CloudWatch Agent — logs, monitoring 서비스와 통신 필요\n▸ Interface VPC Endpoint — AWS 서비스로의 프라이빗 연결\n▸ 프라이빗 DNS — enableDnsHostnames/enableDnsSupport 활성화\n\n【정답 포인트】\n▸ \"NAT 게이트웨이 제거\" → CloudWatch는 인터넷 불가\n▸ CloudWatch Agent 요구사항:\n  - DNS 해석 가능:\n(A) enableDns* 활성화 필수\n  - logs, monitoring 서비스 접근:\n(D) 두 엔드포인트 필수\n  - 엔드포인트 인바운드 보안:\n(C) 포트 443 TCP 프라이빗 범위\n▸ 아웃바운드\n(B) vs 인바운드\n(C) : 엔드포인트는 인바운드 규칙만 필요\n\n【오답 체크】\n(B) 아웃바운드 규칙은 VPC 엔드포인트 설정 방식 아님\n(E) cloudwatch 엔드포인트는 없음, logs + monitoring만 필요\n(F) 인터페이스 엔드포인트는 라우팅 테이블 연결 불필요 (ENI 기반)\n\n【시험 포인트】\n▸ NAT 제거 → VPC 엔드포인트 대체\n▸ CloudWatch Agent → logs + monitoring 두 엔드포인트\n▸ 엔드포인트 보안 그룹 → 인바운드 포트 443 + 프라이빗 범위\n▸ DNS 활성화 필수",
    "en_q": "A company is using a NAT gateway to allow internet connectivity for private subnets in a VPC in the us-west-2 Region. After a security audit, the company needs to remove the NAT gateway. In the private subnets, the company has resources that use the unified Amazon CloudWatch agent. A network engineer must create a solution to ensure that the unified CloudWatch agent continues to work after the removal of the NAT gateway. Which combination of steps should the network engineer take to meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Validate that private DNS is enabled on the VPC by setting the enableDnsHostnames VPC attribute and the enableDnsSupport VPC attribute to true.",
      "B": "Create a new security group with an entry to allow outbound traffic that uses the TCP protocol on port 443 to destination 0.0.0.0/0",
      "C": "Create a new security group with entries to allow inbound traffic that uses the TCP protocol on port 443 from the IP prefixes of the private subnets.",
      "D": "Create the following interface VPC endpoints in the VPC: com.amazonaws.us-west-2.logs and com.amazonaws.us-west-2.monitoring. Associate the new security group with the endpoint network interfaces.",
      "E": "Create the following interface VPC endpoint in the VPC: com.amazonaws.us-west-2.cloudwatch. Associate the new security group with the endpoint network interfaces.",
      "F": "Associate the VPC endpoint or endpoints with route tables that the private subnets use."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103107-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 17,
    "question": "국제 회사가 쓰나미에 대한 조기 경보를 제공합니다. 회사는 IoT 디바이스를 사용하여 전 세계 해파리를 모니터링할 계획입니다. IoT 디바이스가 수집한 데이터는 최대한 빠르게 AWS 인프라에 도달해야 합니다. 회사는 전 세계에 3개의 운영 센터를 보유하고 있습니다. 각 운영 센터는 자체 AWS Direct Connect 연결을 통해 AWS에 연결되어 있습니다. 각 운영 센터는 최소 2개의 업스트림 인터넷 서비스 공급자를 통해 인터넷에 연결됩니다. 회사는 자체 공급자 독립 (PI) 주소 공간을 보유하고 있습니다. IoT 디바이스는 데이터를 안정적으로 전송하기 위해 TCP 프로토콜을 사용합니다. IoT 디바이스는 고정 라인과 모바일 인터넷 연결을 모두 가지고 있습니다. 인프라와 솔루션은 여러 AWS 리전에 배포됩니다. 회사는 DNS 서비스에 Amazon Route 53을 사용할 것입니다. 네트워크 엔지니어는 IoT 디바이스와 AWS 클라우드에서 실행되는 서비스 간의 연결을 설계해야 합니다. 가장 높은 가용성을 갖춘 솔루션은 무엇입니까?",
    "options": {
      "A": "오리진 장애 조치를 사용하여 Amazon CloudFront 배포를 설정합니다. 솔루션이 배포된 각 리전에 대한 오리진 그룹을 생성합니다.",
      "B": "Route 53 지연 시간 기반 라우팅을 설정합니다. 지연 시간 앨리어스 레코드를 추가합니다. 지연 시간 앨리어스 레코드에 대해 Target Health 평가 값을 Yes로 설정합니다.",
      "C": "AWS Global Accelerator에서 가속기를 설정합니다. 지역별 엔드포인트 그룹과 상태 검사를 구성합니다.",
      "D": "BYOIP(Bring Your Own IP) 주소를 설정합니다. 솔루션이 배포된 각 리전에서 동일한 PI 주소를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Global Accelerator — 정적 IP, 글로벌 애니캐스트, Anycast 라우팅\n▸ 매우 높은 가용성 — 자동 장애 조치, 다중 경로\n▸ 다양한 연결 (ISP, 모바일) — 경로 최적화 필요\n\n【정답 포인트】\n▸ \"IoT 디바이스\" → 정적 IP 주소 필수 (Global Accelerator 제공)\n▸ \"3개 운영 센터 + 여러 리전\" → Multi-region, Multi-AZ 지원\n▸ \"가장 높은 가용성\" → Accelerator의 자동 장애 조치\n▸ \"다양한 연결\" → Accelerator는 최적의 경로 자동 선택\n▸ 지역별 엔드포인트 그룹 + 상태 검사 → 장애 감지 및 자동 조치\n\n【오답 체크】\n(A) CloudFront는 정적 IP 미지원, HTTP/S 콘텐츠용\n(B) Route 53은 정적 IP 미제공, DNS 쿼리 기반\n(D) BYOIP는 정적 주소 제공이지만 가용성/자동 장애 조치 미흡\n\n【시험 포인트】\n▸ IoT + 정적 IP + 높은 가용성 = AWS Global Accelerator\n▸ Multi-region + 자동 장애 조치 = Accelerator의 고유 기능\n▸ 다양한 ISP/네트워크 = Accelerator의 경로 최적화",
    "en_q": "An international company provides early warning about tsunamis. The company plans to use IoT devices to monitor sea waves around the world. The data that is collected by the IoT devices must reach the company's infrastructure on AWS as quickly as possible. The company is using three operation centers around the world. Each operation center is connected to AWS through Its own AWS Direct Connect connection. Each operation center is connected to the internet through at least two upstream internet service providers. The company has its own provider-independent (PI) address space. The IoT devices use TCP protocols for reliable transmission of the data they collect. The IoT devices have both landline and mobile internet connectivity. The infrastructure and the solution will be deployed in multiple AWS Regions. The company will use Amazon Route 53 for DNS services. A network engineer needs to design connectivity between the IoT devices and the services that run in the AWS Cloud. Which solution will meet these requirements with the HIGHEST availability?",
    "en_opts": {
      "A": "Set up an Amazon CloudFront distribution with origin failover. Create an origin group for each Region where the solution is deployed.",
      "B": "Set up Route 53 latency-based routing. Add latency alias records. For the latency alias records, set the value of Evaluate Target Health to Yes.",
      "C": "Set up an accelerator in AWS Global Accelerator. Configure Regional endpoint groups and health checks.",
      "D": "Set up Bring Your Own IP (BYOIP) addresses. Use the same PI addresses for each Region where the solution is deployed."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103108-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 18,
    "question": "회사가 온프레미스 데이터 센터에서 Amazon EC2 인스턴스로 중요한 워크로드의 마이그레이션을 계획하고 있습니다. 계획에는 온프레미스 데이터 센터에서 Transit Gateway에 연결된 VPC로의 새로운 10 Gbps AWS Direct Connect 전용 연결이 포함됩니다. 마이그레이션은 온프레미스 데이터 센터와 AWS 클라우드 간의 암호화된 경로를 통해 발생해야 합니다. 어떤 솔루션이 가장 높은 처리량을 제공하면서 이 요구사항을 충족합니까?",
    "options": {
      "A": "Direct Connect 연결에 퍼블릭 VIF를 구성합니다. Transit Gateway에 AWS Site-to-Site VPN 연결을 VPN 첨부 파일로 구성합니다.",
      "B": "Direct Connect 연결에 트랜짓 VIF를 구성합니다. EC2 인스턴스에서 실행 중인 타사 VPN 소프트웨어로 IPsec VPN 연결을 구성합니다.",
      "C": "Direct Connect 연결에 대해 MACsec을 구성합니다. Transit Gateway와 연결된 Direct Connect 게이트웨이에 대해 트랜짓 VIF를 구성합니다.",
      "D": "Direct Connect 연결에 퍼블릭 VIF를 구성합니다. Transit Gateway에 2개의 AWS Site-to-Site VPN 연결을 구성합니다. ECMP(Equal-Cost Multi-Path) 라우팅을 활성화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ MACsec — Media Access Control Security, Layer 2 암호화 (Direct Connect)\n▸ Transit VIF — Transit Gateway 직접 연결, 높은 처리량\n▸ 최높은 처리량 — 암호화 + 10 Gbps 모두 지원\n\n【정답 포인트】\n▸ \"암호화된 경로\" → MACsec (Layer 2) 또는 VPN (Layer 3)\n▸ \"가장 높은 처리량\" → MACsec (암호화 오버헤드 최소)\n▸ \"Transit Gateway\" → Transit VIF 사용\n▸ \"10 Gbps\" → MACsec이 VPN보다 처리량 우수\n▸ 세부: Direct Connect (10 Gbps) + MACsec (L2 암호화) + Transit VIF (TGW 연결)\n\n【오답 체크】\n(A) Public VIF는 암호화 미지원\n(B) 타사 VPN 어플라이언스는 10 Gbps 처리량 보장 안 함\n(D) VPN 쌍 + ECMP는 처리량이 5 Gbps 이하로 제한\n\n【시험 포인트】\n▸ Direct Connect + 최대 처리량 + 암호화 = MACsec + Transit VIF\n▸ MACsec = Layer 2 암호화 (L2), VPN = Layer 3 (L3)\n▸ 처리량: MACsec > VPN (암호화 오버헤드 차이)",
    "en_q": "A company is planning a migration of its critical workloads from an on-premises data center to Amazon EC2 instances. The plan includes a new 10 Gbps AWS Direct Connect dedicated connection from the on-premises data center to a VPC that is attached to a transit gateway. The migration must occur over encrypted paths between the on-premises data center and the AWS Cloud. Which solution will meet these requirements while providing the HIGHEST throughput?",
    "en_opts": {
      "A": "Configure a public VIF on the Direct Connect connection. Configure an AWS Site-to-Site VPN connection to the transit gateway as a VPN attachment.",
      "B": "Configure a transit VIF on the Direct Connect connection. Configure an IPsec VPN connection to an EC2 instance that is running third-party VPN software.",
      "C": "Configure MACsec for the Direct Connect connection. Configure a transit VIF to a Direct Connect gateway that is associated with the transit gateway.",
      "D": "Configure a public VIF on the Direct Connect connection. Configure two AWS Site-to-Site VPN connections to the transit gateway. Enable equal-cost multi-path (ECMP) routing."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103109-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 19,
    "question": "네트워크 엔지니어는 가상 프라이빗 게이트웨이, 고객 게이트웨이, VPN 연결 및 라우팅 테이블의 정적 경로를 생성할 수 있는 AWS CloudFormation 템플릿을 개발해야 합니다. 템플릿을 테스트하는 동안 네트워크 엔지니어는 CloudFormation 템플릿이 오류를 발견하고 롤백되고 있음을 알 수 있습니다. 엔지니어는 이 오류를 해결하기 위해 어떻게 해야 합니까?",
    "options": {
      "A": "CloudFormation 템플릿에서 리소스 생성 순서를 변경합니다.",
      "B": "가상 프라이빗 게이트웨이의 리소스 선언에 DependsOn 속성을 추가합니다. 라우팅 테이블 항목 리소스를 지정합니다.",
      "C": "템플릿에 대기 조건을 추가하여 가상 프라이빗 게이트웨이 생성을 기다립니다.",
      "D": "라우팅 테이블 항목의 리소스 선언에 DependsOn 속성을 추가합니다. 가상 프라이빗 게이트웨이 리소스를 지정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ DependsOn 속성 — CloudFormation에서 명시적 리소스 의존성 선언\n▸ VPN Connection, Route Table Entry — 가상 프라이빗 게이트웨이 의존\n▸ 롤백 문제 — 의존성 순서 미지정으로 인한 생성 실패\n\n【정답 포인트】\n▸ \"라우팅 테이블 항목 생성 실패\" → VPN 연결/VGW가 먼저 필요\n▸ 정상 순서: VGW 생성 → VPN 연결 생성 → Route 생성\n▸ Route 테이블 항목은 VGW에 의존 (VPN 연결은 VGW 필요)\n▸ DependsOn\n(D) = Route 항목 → VGW 명시적 의존성\n▸ CloudFormation 자동 의존성 분석으로 부족할 때 필요\n\n【오답 체크】\n(A) 코드 순서 변경만으로는 부족, 명시적 선언 필요\n(B) VGW → Route 항목 (역방향) = 논리적 오류\n(C) Wait 조건은 수동 개입 필요, 자동화에 부적합\n\n【시험 포인트】\n▸ CloudFormation 의존성 → DependsOn으로 명시\n▸ Route 테이블 항목 생성 → VGW/VPN 필수\n▸ 롤백 문제 해결 = 정확한 의존성 선언\n▸ 방향성: Route Entry → DependsOn → VGW",
    "en_q": "A network engineer must develop an AWS CloudFormation template that can create a virtual private gateway, a customer gateway, a VPN connection, and static routes in a route table. During testing of the template, the network engineer notes that the CloudFormation template has encountered an error and is rolling back. What should the network engineer do to resolve the error?",
    "en_opts": {
      "A": "Change the order of resource creation in the CloudFormation template.",
      "B": "Add the DependsOn attribute to the resource declaration for the virtual private gateway. Specify the route table entry resource.",
      "C": "Add a wait condition in the template to wait for the creation of the virtual private gateway.",
      "D": "Add the DependsOn attribute to the resource declaration for the route table entry. Specify the virtual private gateway resource."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103110-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 20,
    "question": "회사가 다중 사이트 하이브리드 인프라를 통해 IT 서비스를 운영합니다. us-east-1과 eu-west-2 리전의 AWS에 리소스를 배포하고, 미국과 영국의 자체 데이터 센터에도 리소스를 배포합니다. 각 리전에서 Transit Gateway를 사용하여 15개 VPC를 연결하고 두 Transit Gateway 간 피어링 연결을 생성했습니다. VPC CIDR은 겹치지 않으며 리전 단위 또는 전체 AWS 환경 단위로 집계할 수 있습니다. 데이터 센터는 프라이빗 WAN으로 연결되고 iBGP 세션으로 라우팅 정보를 교환합니다. 각 Direct Connect 연결은 Direct Connect Gateway에 종료되고 Local Transit Gateway에 Transit VIF로 연결됩니다. 트래픽은 지리적으로 가장 짧은 경로를 따릅니다. Cross-Region 데이터 전송(예: UK 데이터센터에서 us-east-1의 VPC로)은 AWS 비용을 최소화하기 위해 프라이빗 WAN을 사용해야 합니다. 네트워크 엔지니어는 각 Transit Gateway 연결을 Local 리전의 VPC 특정 CIDR 프리픽스만 광고하도록 구성했습니다. 다른 리전의 경로는 데이터센터 라우터의 BGP를 통해 비집계 형태로 학습해야 합니다. 최근 프라이빗 WAN 연결 문제로 Cross-Region 데이터 전송에 문제가 발생했습니다. 네트워크 엔지니어는 향후 유사한 중단을 방지하기 위해 라우팅 설정을 수정해야 합니다. 네트워크가 정상 작동할 때 원래의 트래픽 라우팅 목표를 수정할 수 없습니다. 요구 사항을 충족하는 수정 사항은? (2개 선택)",
    "options": {
      "A": "Direct Connect 연결을 통해 광고되는 서브넷 목록에서 모든 VPC CIDR 프리픽스를 제거합니다. 회사 전체 AWS 환경 집계 경로를 광고되는 서브넷 목록에 추가합니다.",
      "B": "다른 리전 VPC의 CIDR 프리픽스와 로컬 VPC CIDR 블록을 Local Direct Connect 연결을 통해 광고되는 서브넷 목록에 추가합니다. 데이터센터 라우터를 BGP 커뮤니티를 기반으로 라우팅 결정을 내리도록 구성합니다.",
      "C": "다른 리전의 집계 IP 프리픽스와 로컬 VPC CIDR 블록을 Local Direct Connect 연결을 통해 광고되는 서브넷 목록에 추가합니다.",
      "D": "회사 전체 AWS 환경의 집계 IP 프리픽스와 로컬 VPC CIDR 블록을 Local Direct Connect 연결을 통해 광고되는 서브넷 목록에 추가합니다.",
      "E": "Direct Connect 연결을 통해 광고되는 서브넷 목록에서 모든 VPC CIDR 프리픽스를 제거합니다. 양쪽 리전 집계 IP 프리픽스를 Direct Connect 연결 양측에서 광고되는 서브넷 목록에 추가합니다. 데이터센터 라우터를 BGP 커뮤니티를 기반으로 라우팅 결정을 내리도록 구성합니다."
    },
    "answer": "CE",
    "explanation": "【핵심 용어】\n▸ Transit Gateway Peering — 다중 리전 TGW 연결\n▸ Direct Connect Gateway — 프라이빗 및 공개 VIF 집계\n▸ BGP Communities — 라우팅 정책 제어\n▸ Route Aggregation — IP 프리픽스 집계\n\n【정답 포인트】\n▸ WAN 장애 시 대체 경로 필요 → Cross-Region Transit Gateway 피어링 활용\n▸ 정상 작동 시 지리적 최단 경로 유지 → 로컬 Direct Connect 우선순위 유지\n▸ 양쪽 데이터센터 모두 리전 집계 경로 광고 → 상호 백업 가능\n▸ BGP Community 태그 사용 → 정교한 라우팅 정책 구현\n\nOption E: 모든 비집계 프리픽스 제거 → 양쪽 리전 집계만 광고 → 각 DC는 상대방 리전으로의 트래픽이 상대 DC로 라우팅됨 → WAN 장애 시 TGW 피어링을 통한 자동 페일오버 가능. BGP Community로 정책 추가 제어.\n\nOption C: 타리전 집계 + 로컬 VPC 추가 → Direct Connect를 통해 타리전 트래픽도 광고 → 다중 경로 제공 가능, Cross-Region 트래픽의 우선순위 제어 용이.\n\n【오답 체크】\n(A) 전체 환경 집계만 광고하면 로컬 VPC 세분화 정보 손실 → 정상 상황의 세밀한 라우팅 제어 불가.\n(B) 타리전 개별 프리픽스 광고 → 프리픽스 수 증가 + BGP 불안정성 + 집계 이점 상실.\n(D) 전체 집계 + 로컬만 광고 → 타리전 경로 정보 부족 → WAN 장애 시 트래픽 경로 미정의.\n\n【시험 포인트】\n▸ Multi-Region HA 아키텍처: 국지적 최적화(Local DC 우선) + 전역 백업(Peer 경로)\n▸ BGP Route Aggregation: 프리픽스 수 최소화 + 정책 유연성 동시 확보\n▸ WAN 장애 복원력: 대체 경로의 자동 수렴, Manual 개입 최소화",
    "en_q": "A company operates its IT services through a multi-site hybrid infrastructure. The company deploys resources on AWS in the us-east-1 Region and in the eu-west-2 Region. The company also deploys resources in its own data centers that are located in the United States (US) and in the United Kingdom (UK). In both AWS Regions, the company uses a transit gateway to connect 15 VPCs to each other. The company has created a transit gateway peering connection between the two transit gateways. The VPC CIDR blocks do not overlap with each other or with IP addresses used within the data centers. The VPC CIDR prefixes can also be aggregated either on a Regional level or for the company's entire AWS environment. The data centers are connected to each other by a private WAN connection. IP routing information is exchanged dynamically through Interior BGP (iBGP) sessions. The data centers maintain connectivity to AWS through one AWS Direct Connect connection in the US and one Direct Connect connection in the UK. Each Direct Connect connection is terminated on a Direct Connect gateway and is associated with a local transit gateway through a transit VIF. Traffic follows the shortest geographical path from source to destination. For example, packets from the UK data center that are targeted to resources in eu-west-2 travel across the local Direct Connect connection. In cases of cross-Region data transfers, such as from the UK data center to VPCs in us-east-1, the private WAN connection must be used to minimize costs on AWS. A network engineer has configured each transit gateway association on the Direct Connect gateway to advertise VPC-specific CIDR IP prefixes only from the local Region. The routes toward the other Region must be learned through BGP from the routers in the other data center in the original, non-aggregated form. The company recently experienced a problem with cross-Region data transfers because of issues with its private WAN connection. The network engineer needs to modify the routing setup to prevent similar interruptions in the future. The solution cannot modify the original traffic routing goal when the network is operating normally. Which modifications will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Remove all the VPC CIDR prefixes from the list of subnets advertised through the local Direct Connect connection. Add the company's entire AWS environment aggregate route to the list of subnets advertised through the local Direct Connect connection.",
      "B": "Add the CIDR prefixes from the other Region VPCs and the local VPC CIDR blocks to the list of subnets advertised through the local Direct Connect connection. Configure data center routers to make routing decisions based on the BGP communities received.",
      "C": "Add the aggregate IP prefix for the other Region and the local VPC CIDR blocks to the list of subnets advertised through the local Direct Connect connection.",
      "D": "Add the aggregate IP prefix for the company's entire AWS environment and the local VPC CIDR blocks to the list of subnets advertised through the local Direct Connect connection.",
      "E": "Remove all the VPC CIDR prefixes from the list of subnets advertised through the local Direct Connect connection. Add both Regional aggregate IP prefixes to the list of subnets advertised through the Direct Connect connection on both sides of the network. Configure data center routers to make routing decisions based on the BGP communities received."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103111-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 21,
    "question": "회사의 네트워크 엔지니어가 네트워크 이상 현상을 감지하고 문제를 해결하기 위한 새로운 솔루션을 설계해야 합니다. Traffic Mirroring을 구성했지만, 미러된 트래픽이 트래픽 미러 타겟인 Amazon EC2 인스턴스를 압도하고 있습니다. EC2 인스턴스는 회사 보안팀이 트래픽을 분석하는 데 사용하는 도구를 호스팅합니다. 네트워크 엔지니어는 미러된 트래픽의 수요를 충족시킬 수 있도록 확장할 수 있는 고가용성 솔루션을 설계해야 합니다. 요구 사항을 충족하는 솔루션은?",
    "options": {
      "A": "Network Load Balancer(NLB)를 트래픽 미러 타겟으로 배포합니다. NLB 뒤에 Auto Scaling 그룹의 EC2 인스턴스 플릿을 배포합니다. 필요에 따라 Traffic Mirroring을 사용합니다.",
      "B": "Application Load Balancer(ALB)를 트래픽 미러 타겟으로 배포합니다. ALB 뒤에 Auto Scaling 그룹의 EC2 인스턴스 플릿을 배포합니다. 업무 시간이 아닐 때만 Traffic Mirroring을 사용합니다.",
      "C": "Gateway Load Balancer(GLB)를 트래픽 미러 타겟으로 배포합니다. GLB 뒤에 Auto Scaling 그룹의 EC2 인스턴스 플릿을 배포합니다. 필요에 따라 Traffic Mirroring을 사용합니다.",
      "D": "HTTPS 리스너가 있는 Application Load Balancer(ALB)를 트래픽 미러 타겟으로 배포합니다. ALB 뒤에 Auto Scaling 그룹의 EC2 인스턴스 플릿을 배포합니다. 활동 중인 이벤트 또는 업무 시간 동안만 Traffic Mirroring을 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Traffic Mirroring — VPC 트래픽 복사/분석\n▸ Network Load Balancer (NLB) — Layer 4 로드 밸런싱, 매우 높은 처리량\n▸ Gateway Load Balancer (GLB) — 어플라이언스 통합용 로드 밸런서\n▸ Auto Scaling — 동적 인스턴스 스케일링\n\n【정답 포인트】\n▸ Traffic Mirroring은 Layer 4 프로토콜 기반 트래픽 복사 → NLB (Layer 4) 적합\n▸ 높은 처리량 + 낮은 지연시간 필요 → NLB의 이점 활용\n▸ 트래픽 분석 도구는 단순 Layer 4 리밸런싱으로 충분 → ALB/GLB 불필요\n▸ 스케일링 필요 → Auto Scaling과 자연스러운 조합\n\nOption A: NLB는 Traffic Mirroring 타겟으로 적합. Layer 4에서 분산하여 백엔드 인스턴스 부하 완화. 초당 수백만 개 요청 처리 가능. Auto Scaling으로 자동 스케일.\n\n【오답 체크】\n(B) ALB는 Layer 7 기반 → Traffic Mirroring (Layer 4)과 불일치. 시간 제한 추가 요구사항도 부적절.\n(C) GLB는 제3자 네트워크 어플라이언스 처리용 → 분석 도구의 단순 로드 밸런싱에는 과하고 불필요한 복잡성 추가.\n(D) HTTPS 리스너 + 시간 제한 → 지속적 모니터링 요구사항과 맞지 않음.\n\n【시험 포인트】\n▸ 로드 밸런서 선택: 프로토콜 레이어 매칭 (L4 트래픽 = NLB)\n▸ Traffic Mirroring: 분석/감시용 독립적 인프라 필요\n▸ 고처리량 + 낮은 지연시간: NLB의 핵심 이점",
    "en_q": "A company's network engineer needs to design a new solution to help troubleshoot and detect network anomalies. The network engineer has configured Traffic Mirroring. However, the mirrored traffic is overwhelming the Amazon EC2 instance that is the traffic mirror target. The EC2 instance hosts tools that the company's security team uses to analyze the traffic. The network engineer needs to design a highly available solution that can scale to meet the demand of the mirrored traffic. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy a Network Load Balancer (NLB) as the traffic mirror target. Behind the NLB, deploy a fleet of EC2 instances in an Auto Scaling group. Use Traffic Mirroring as necessary.",
      "B": "Deploy an Application Load Balancer (ALB) as the traffic mirror target. Behind the ALB, deploy a fleet of EC2 instances in an Auto Scaling group. Use Traffic Mirroring only during non-business hours.",
      "C": "Deploy a Gateway Load Balancer (GLB) as the traffic mirror target. Behind the GLB, deploy a fleet of EC2 instances in an Auto Scaling group. Use Traffic Mirroring as necessary.",
      "D": "Deploy an Application Load Balancer (ALB) with an HTTPS listener as the traffic mirror target. Behind the ALB, deploy a fleet of EC2 instances in an Auto Scaling group. Use Traffic Mirroring only during active events or business hours."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103112-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 22,
    "question": "회사가 하이브리드 아키텍처를 사용하며 온프레미스 데이터 센터와 AWS 사이에 AWS Direct Connect 연결이 있습니다. 온프레미스 데이터 센터에서 프로덕션 애플리케이션이 실행되고, VPC에서도 프로덕션 애플리케이션이 실행됩니다. 온프레미스 데이터 센터의 애플리케이션이 VPC의 애플리케이션과 통신해야 합니다. 온프레미스 리소스에 corp.example.com 도메인을 사용하고, VPC 리소스를 호스팅하기 위해 amazon Route 53 프라이빗 호스팅 영역에 aws.example.com을 사용합니다. VPC 서브넷의 오픈소스 재귀 DNS 리졸버와 온프레미스 데이터 센터의 DNS 리졸버를 사용합니다. 온프레미스 DNS 리졸버는 aws.example.com 도메인 쿼리를 VPC의 DNS 리졸버로 전달하고, VPC의 DNS 리졸버는 corp.example.com 도메인 쿼리를 온프레미스 DNS 리졸버로 전달합니다. 회사가 오픈소스 재귀 DNS 리졸버를 Amazon Route 53 Resolver 엔드포인트로 교체하기로 결정했습니다. 네트워크 엔지니어가 교체를 수행하기 위해 취해야 할 단계의 조합은? (3개 선택)",
    "options": {
      "A": "aws.example.com 도메인 쿼리를 아웃바운드 엔드포인트의 IP 주소로 전달하는 Route 53 Resolver 규칙을 생성합니다.",
      "B": "온프레미스 DNS 리졸버를 인바운드 엔드포인트의 IP 주소로 aws.example.com 도메인 쿼리를 전달하도록 구성합니다.",
      "C": "Route 53 Resolver 인바운드 엔드포인트와 Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다.",
      "D": "aws.example.com 도메인 쿼리를 인바운드 엔드포인트의 IP 주소로 전달하는 Route 53 Resolver 규칙을 생성합니다.",
      "E": "corp.example.com 도메인 쿼리를 온프레미스 DNS 리졸버의 IP 주소로 전달하는 Route 53 Resolver 규칙을 생성합니다.",
      "F": "온프레미스 DNS 리졸버를 아웃바운드 엔드포인트의 IP 주소로 aws.example.com 쿼리를 전달하도록 구성합니다."
    },
    "answer": "BCE",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver Inbound Endpoint — AWS에서 온프레미스로부터 수신\n▸ Route 53 Resolver Outbound Endpoint — AWS에서 온프레미스로 쿼리 전송\n▸ Resolver Rule — DNS 쿼리 라우팅 정책\n\n【정답 포인트】\n▸ 온프레미스 → AWS 쿼리: Inbound Endpoint 필요 (온프레미스 DNS가 AWS로 쿼리 전송)\n▸ AWS → 온프레미스 쿼리: Outbound Endpoint 필요 (VPC에서 온프레미스로 쿼리 포워딩)\n▸ Inbound Endpoint IP로 온프레미스 DNS 포워드 설정\n▸ Outbound Endpoint로 corp.example.com 쿼리 라우팅\n\nOption B: 온프레미스 DNS 리졸버를 Inbound Endpoint의 IP로 aws.example.com 포워드 → VPC로부터의 쿼리를 AWS DNS가 처리.\nOption C: 양방향 통신 필요 → Inbound + Outbound 엔드포인트 모두 필수.\nOption E: VPC에서 corp.example.com 쿼리 → Outbound Endpoint로 온프레미스로 전달하는 규칙.\n\n【오답 체크】\n(A) Outbound Endpoint로 aws.example.com 포워드는 잘못됨 (aws.example.com은 Route 53에서 호스팅, 외부로 포워드 불필요).\n(D) Inbound Endpoint로 aws.example.com 포워드도 불필요 (이미 Route 53 PHZ에 있음).\n(F) Outbound Endpoint로 aws.example.com 포워드는 잘못됨.\n\n【시험 포인트】\n▸ Inbound vs Outbound: 트래픽 방향 구분 필수\n▸ Hybrid DNS 통합: 양쪽 엔드포인트 + Resolver Rule 조합\n▸ 프라이빗 호스팅 영역: 이미 AWS 내부에서 해결됨",
    "en_q": "A company uses a hybrid architecture and has an AWS Direct Connect connection between its on-premises data center and AWS. The company has production applications that run in the on-premises data center. The company also has production applications that run in a VPC. The applications that run in the on-premises data center need to communicate with the applications that run in the VPC. The company is using corp.example.com as the domain name for the on-premises resources and is using an Amazon Route 53 private hosted zone for aws.example.com to host the VPC resources. The company is using an open-source recursive DNS resolver in a VPC subnet and is using a DNS resolver in the on-premises data center. The company's on-premises DNS resolver has a forwarder that directs requests for the aws.example.com domain name to the DNS resolver in the VPC. The DNS resolver in the VPC has a forwarder that directs requests for the corp.example.com domain name to the DNS resolver in the on-premises data center. The company has decided to replace the open-source recursive DNS resolver with Amazon Route 53 Resolver endpoints. Which combination of steps should a network engineer take to make this replacement? (Choose three.)",
    "en_opts": {
      "A": "Create a Route 53 Resolver rule to forward aws.example.com domain queries to the IP addresses of the outbound endpoint.",
      "B": "Configure the on-premises DNS resolver to forward aws.example.com domain queries to the IP addresses of the inbound endpoint.",
      "C": "Create a Route 53 Resolver inbound endpoint and a Route 53 Resolver outbound endpoint.",
      "D": "Create a Route 53 Resolver rule to forward aws.example.com domain queries to the IP addresses of the inbound endpoint.",
      "E": "Create a Route 53 Resolver rule to forward corp.example.com domain queries to the IP address of the on-premises DNS resolver.",
      "F": "Configure the on-premises DNS resolver to forward aws.example.com queries to the IP addresses of the outbound endpoint."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103113-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 23,
    "question": "정부 계약업체가 고객을 위한 다중 계정 환경과 여러 VPC를 설계하고 있습니다. 네트워크 보안 정책은 두 VPC 간의 모든 트래픽을 제3자 어플라이언스에서 투명하게 검사해야 합니다. 고객이 AWS Transit Gateway의 솔루션을 원합니다. 설정은 여러 Availability Zone에 걸쳐 고가용성을 보장해야 하며, 자동 페일오버를 지원해야 합니다. 또한 검사 어플라이언스는 비대칭 라우팅을 지원하지 않습니다. 이 요구 사항을 충족하는 솔루션의 일부인 단계 조합은? (2개 선택)",
    "options": {
      "A": "지정된 검사 VPC에 여러 Availability Zone에 걸친 두 개의 어플라이언스 클러스터를 배포합니다. VPC 연결을 사용하여 검사 VPC를 Transit Gateway에 연결합니다. 대상 그룹을 생성하고 어플라이언스를 등록합니다. Network Load Balancer(NLB)를 생성하고 새로 생성된 대상 그룹으로 포워딩하도록 설정합니다. 검사 VPC의 Transit Gateway 서브넷의 기본 경로를 NLB로 향하도록 구성합니다.",
      "B": "지정된 검사 VPC에 여러 Availability Zone에 걸친 두 개의 어플라이언스 클러스터를 배포합니다. VPC 연결을 사용하여 검사 VPC를 Transit Gateway에 연결합니다. 대상 그룹을 생성하고 어플라이언스를 등록합니다. Gateway Load Balancer를 생성하고 새로 생성된 대상 그룹으로 포워딩하도록 설정합니다. 검사 VPC의 Transit Gateway 서브넷의 기본 경로를 Gateway Load Balancer 엔드포인트로 향하도록 구성합니다.",
      "C": "Transit Gateway에 두 개의 경로 테이블을 구성합니다. 하나는 애플리케이션 VPC의 모든 연결에 연결하고, 다른 하나는 검사 VPC의 연결에 연결합니다. 모든 VPC 연결을 검사 경로 테이블에 전파합니다. 애플리케이션 경로 테이블에 정적 기본 경로를 정의합니다. 검사 VPC 연결에서 appliance 모드를 활성화합니다.",
      "D": "Transit Gateway에 두 개의 경로 테이블을 구성합니다. 하나는 애플리케이션 VPC의 모든 연결에 연결하고, 다른 하나는 검사 VPC의 연결에 연결합니다. 모든 VPC 연결을 애플리케이션 경로 테이블에 전파합니다. 검사 경로 테이블에 정적 기본 경로를 정의합니다. 검사 VPC 연결에서 appliance 모드를 활성화합니다.",
      "E": "Transit Gateway에 하나의 경로 테이블을 구성합니다. 모든 VPC와 연결합니다. 모든 VPC 연결을 경로 테이블에 전파합니다. 경로 테이블에 정적 기본 경로를 정의합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ Gateway Load Balancer (GLB) — 네트워크 어플라이언스 통합\n▸ Transit Gateway Appliance Mode — 비대칭 라우팅 방지\n▸ Route Table Association — TGW 라우팅 정책\n\n【정답 포인트】\n▸ GLB는 제3자 어플라이언스를 위한 표준 → NLB 대비 우수한 선택\n▸ GLB Endpoint를 통한 자동 트래픽 분산 → Auto Scaling 지원\n▸ 비대칭 라우팅 방지: Appliance Mode 필수\n▸ 양방향 트래픽이 동일 어플라이언스를 통과해야 함\n\nOption B: GLB는 네트워크 어플라이언스 전문 LB. GLB Endpoint가 투명한 트래픽 리다이렉션 제공. Auto Scaling으로 고가용성.\nOption C: 이중 경로 테이블 구조: 애플리케이션 VPC는 app RT, 검사 VPC는 inspection RT. 애플리케이션 RT의 기본 경로 → 검사 어플라이언스. Appliance Mode 활성화 → 양방향 대칭 경로 보장.\n\n【오답 체크】\n(A) NLB는 Layer 4 LB → 어플라이언스 검사 요구사항 충족 미흡. GLB 없음.\n(D) 경로 테이블 구성 역순 → 트래픽 흐름이 잘못됨.\n(E) 단일 경로 테이블 → 비대칭 라우팅 불가피 → 어플라이언스에서 응답 패킷 처리 불가.\n\n【시험 포인트】\n▸ 네트워크 어플라이언스 패턴: GLB + Appliance Mode\n▸ 이중 경로 테이블: Application ↔ Inspection 일방향만 필터링\n▸ 비대칭 라우팅 방지: 양쪽 경로가 동일 어플라이언스 통과",
    "en_q": "A government contractor is designing a multi-account environment with multiple VPCs for a customer. A network security policy requires all traffic between any two VPCs to be transparently inspected by a third-party appliance. The customer wants a solution that features AWS Transit Gateway. The setup must be highly available across multiple Availability Zones, and the solution needs to support automated failover. Furthermore, asymmetric routing is not supported by the inspection appliances. Which combination of steps is part of a solution that meets these requirements? (Choose two.)",
    "en_opts": {
      "A": "Deploy two clusters that consist of multiple appliances across multiple Availability Zones in a designated inspection VPC. Connect the inspection VPC to the transit gateway by using a VPC attachment. Create a target group, and register the appliances with the target group. Create a Network Load Balancer (NLB), and set it up to forward to the newly created target group. Configure a default route in the inspection VPCs transit gateway subnet toward the NLB.",
      "B": "Deploy two clusters that consist of multiple appliances across multiple Availability Zones in a designated inspection VPC. Connect the inspection VPC to the transit gateway by using a VPC attachment. Create a target group, and register the appliances with the target group. Create a Gateway Load Balancer, and set it up to forward to the newly created target group. Configure a default route in the inspection VPC's transit gateway subnet toward the Gateway Load Balancer endpoint.",
      "C": "Configure two route tables on the transit gateway. Associate one route table with all the attachments of the application VPCs. Associate the other route table with the inspection VPC's attachment. Propagate all VPC attachments into the inspection route table. Define a static default route in the application route table. Enable appliance mode on the attachment that connects the inspection VPC.",
      "D": "Configure two route tables on the transit gateway. Associate one route table with all the attachments of the application VPCs. Associate the other route table with the inspection VPCs attachment. Propagate all VPC attachments into the application route table. Define a static default route in the inspection route table. Enable appliance mode on the attachment that connects the inspection VPC.",
      "E": "Configure one route table on the transit gateway. Associate the route table with all the VPCs. Propagate all VPC attachments into the route table. Define a static default route in the route table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103115-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 24,
    "question": "회사가 VPC의 프라이빗 서브넷에 Amazon EC2 인스턴스를 배포했습니다. EC2 인스턴스는 AWS Direct Connect 연결을 통한 회사의 온프레미스 데이터 센터를 포함하여 VPC를 벗어나는 모든 요청을 시작해야 합니다. VPC 외부의 리소스는 EC2 인스턴스에 직접 통신을 열 수 없습니다. 온프레미스 데이터 센터의 고객 게이트웨이는 여러 VPC로부터의 수신 및 발신 요청을 필터링하는 상태 저장 방화벽 디바이스로 구성되어 있습니다. 또한 회사는 단일 IP 매칭 규칙을 사용하여 EC2 인스턴스에서 데이터 센터로의 모든 통신을 단일 IP 주소로 허용하고 싶어합니다. 가장 적은 운영 오버헤드로 요구 사항을 충족하는 솔루션은?",
    "options": {
      "A": "온프레미스 방화벽을 사용하여 Direct Connect 연결을 통한 VPN 연결을 생성합니다. 방화벽을 사용하여 온프레미스에서 AWS로의 모든 트래픽을 차단합니다. EC2 인스턴스가 요청을 시작하는 경우 상태 저장 연결을 허용합니다.",
      "B": "온프레미스 방화벽이 온프레미스 네트워크에서 EC2 인스턴스로의 모든 요청을 필터링하도록 구성합니다. EC2 인스턴스가 VPC의 트래픽을 시작하는 경우 상태 저장 연결을 허용합니다.",
      "C": "EC2 인스턴스가 배포된 VPC의 프라이빗 서브넷에 NAT 게이트웨이를 배포합니다. NAT 게이트웨이 유형을 프라이빗으로 지정합니다. NAT 게이트웨이에 할당된 IP 주소의 연결을 허용하도록 온프레미스 방화벽을 구성합니다.",
      "D": "EC2 인스턴스가 배포된 VPC의 프라이빗 서브넷에 NAT 인스턴스를 배포합니다. NAT 인스턴스에 할당된 IP 주소의 연결을 허용하도록 온프레미스 방화벽을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ NAT Gateway (Private) — 프라이빗 서브넷의 아웃바운드 IP 소스\n▸ Source NAT (SNAT) — 송신 패킷의 출발지 IP 변환\n▸ Stateful Firewall — 상태 저장 방화벽\n\n【정답 포인트】\n▸ EC2 인스턴스 출발 트래픽만 허용 필요 → SNAT로 단일 IP로 통합\n▸ 프라이빗 NAT Gateway — 프라이빗 서브넷 EC2가 아웃바운드 시에만 사용\n▸ 방화벽에서 단일 IP 규칙 추가 → NAT Gateway IP로 통합\n▸ 역방향 인바운드 불가능 → EC2는 완전히 보호됨\n\nOption C: Private NAT Gateway는 프라이빗 서브넷 내에서만 작동. EC2의 모든 아웃바운드 트래픽을 NAT Gateway IP로 변환. 방화벽에서 이 IP 주소만 허용하면 모든 EC2 통신 수용. 운영 오버헤드 최소화.\n\n【오답 체크】\n(A) VPN over Direct Connect는 불필요한 복잡성 + 암호화 오버헤드 + 방화벽 양쪽 구성 필요.\n(B) 온프레미스 방화벽만으로 제어 → AWS 측에서 NAT 없이 EC2 직접 IP 노출 → 인바운드 위험.\n(D) NAT 인스턴스는 관리 오버헤드 (OS 패치, 가용성 수동 관리 등) → 게이트웨이 대비 복잡.\n\n【시험 포인트】\n▸ Private NAT Gateway: 프라이빗 리소스의 아웃바운드 IP 통합\n▸ SNAT 기반 방화벽 규칙: 단일 IP 매칭으로 다중 인스턴스 제어\n▸ AWS 측 인바운드 차단: 완벽한 일방향 통신",
    "en_q": "A company has deployed Amazon EC2 instances in private subnets in a VPC. The EC2 instances must initiate any requests that leave the VPC, including requests to the company's on-premises data center over an AWS Direct Connect connection. No resources outside the VPC can be allowed to open communications directly to the EC2 instances. The on-premises data center's customer gateway is configured with a stateful firewall device that filters for incoming and outgoing requests to and from multiple VPCs. In addition, the company wants to use a single IP match rule to allow all the communications from the EC2 instances to its data center from a single IP address. Which solution will meet these requirements with the LEAST amount of operational overhead?",
    "en_opts": {
      "A": "Create a VPN connection over the Direct Connect connection by using the on-premises firewall. Use the firewall to block all traffic from on premises to AWS. Allow a stateful connection from the EC2 instances to initiate the requests.",
      "B": "Configure the on-premises firewall to filter all requests from the on-premises network to the EC2 instances. Allow a stateful connection if the EC2 instances in the VPC initiate the traffic.",
      "C": "Deploy a NAT gateway into a private subnet in the VPC where the EC2 instances are deployed. Specify the NAT gateway type as private. Configure the on-premises firewall to allow connections from the IP address that is assigned to the NAT gateway.",
      "D": "Deploy a NAT instance into a private subnet in the VPC where the EC2 instances are deployed. Configure the on-premises firewall to allow connections from the IP address that is assigned to the NAT instance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103116-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 25,
    "question": "글로벌 회사가 비프로덕션 환경을 eu-west-1, us-east-1, us-west-1의 세 AWS 리전에서 운영합니다. 프로덕션 워크로드는 두 개의 온프레미스 데이터 센터에서 호스팅됩니다. 회사는 60개의 AWS 계정을 보유하고 있으며, 각 계정은 각 리전에 2개의 VPC가 있습니다. 각 VPC는 데이터 센터로의 복원력 있는 연결을 위해 2개의 VPN 연결이 종료되는 가상 프라이빗 게이트웨이를 갖고 있습니다. 회사는 각 데이터 센터로 360개의 VPN 터널을 갖추고 있어 높은 관리 오버헤드를 야기합니다. 각 리전의 총 VPN 처리량은 500 Mbps입니다. 회사가 프로덕션 환경을 AWS로 마이그레이션하려고 합니다. 회사는 네트워크 아키텍처를 단순화하고 향후 성장을 허용하는 솔루션이 필요합니다. 프로덕션 환경은 데이터 센터로 리전당 추가 2 Gbps의 트래픽을 생성하게 되며, 이 트래픽은 시간이 지남에 따라 증가할 것입니다. 요구 사항을 충족하는 솔루션은?",
    "options": {
      "A": "각 데이터 센터에서 각 리전의 AWS로 AWS Direct Connect 연결을 설정합니다. 프라이빗 VIF를 생성하고 단일 Direct Connect 게이트웨이에 연결합니다. Direct Connect 게이트웨이를 모든 VPC에 연결합니다. 가상 프라이빗 게이트웨이에 직접 연결된 기존 VPN 연결을 제거합니다.",
      "B": "각 데이터 센터에서 VPN 연결을 포함한 단일 Transit Gateway를 생성합니다. AWS Resource Access Manager (AWS RAM)를 사용하여 각 계정과 Transit Gateway를 공유합니다. Transit Gateway를 각 VPC에 연결합니다. 가상 프라이빗 게이트웨이에 직접 연결된 기존 VPN 연결을 제거합니다.",
      "C": "각 리전에 여러 개의 새로운 VPN 연결이 있는 Transit Gateway를 생성합니다. AWS Resource Access Manager (AWS RAM)를 사용하여 각 계정과 Transit Gateway를 공유합니다. 각 리전에서 Transit Gateway를 각 VPC에 연결합니다. 가상 프라이빗 게이트웨이에 직접 연결된 기존 VPN 연결을 제거합니다.",
      "D": "각 리전의 모든 VPC를 각 리전의 새로운 VPC에 피어링하면 중앙 집중식 Transit VPC로 기능합니다. 각 데이터 센터에서 Transit VPC로 새로운 VPN 연결을 생성합니다. 모든 원래 VPC에 연결된 원래 VPN 연결을 종료합니다. 각 리전의 새로운 VPN 연결을 새로운 Transit VPC로 유지합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Transit Gateway (TGW) — 다중 VPC 중앙 집중식 라우팅\n▸ AWS Resource Access Manager (RAM) — 다중 계정 리소스 공유\n▸ VPN Throughput — 단일 VPN 500 Mbps 한계\n▸ Scalability — 향후 대역폭 증가 대비\n\n【정답 포인트】\n▸ 현재: 360개 VPN 터널, 500 Mbps/리전 → 심각한 한계\n▸ 향후: 2 Gbps 추가 필요 → VPN만으로 불가능\n▸ Transit Gateway: 모든 VPC 통합 → 터널 360개 → 소수로 축소\n▸ 다중 VPN으로 대역폭 확장 가능 (각 터널 500 Mbps)\n▸ RAM으로 다중 계정 공유 → 중앙 관리\n\nOption C: 각 리전에 TGW 생성 (VPN 여러 개) → RAM으로 60개 계정 공유 → 각 VPC를 TGW에 연결 → 기존 vPGW 제거. 다중 VPN으로 합산 3-4 Gbps 달성 가능. 관리 오버헤드 극적 감소 (1 TGW + N VPN vs 360 터널).\n\n【오답 체크】\n(A) Direct Connect는 비용 고려 필요 + VPN 대비 복잡성. 기존 VPN 500 Mbps 한계 미해결.\n(B) 단일 TGW는 여러 리전 미지원 → 리전당 TGW 부족 → 각 리전의 처리량 여전히 500 Mbps 한계.\n(D) VPC Peering 기반 Transit VPC는 확장성 떨어짐 + 메시 구조 + 관리 복잡.\n\n【시험 포인트】\n▸ Transit Gateway의 확장성: 단일 TGW + 다중 VPN으로 대역폭 선형 증가\n▸ 다중 계정 통합: RAM 사용으로 중앙 집중식 관리\n▸ VPN 한계 극복: 리전당 여러 VPN 터널로 합산 처리량 향상",
    "en_q": "A global company operates all its non-production environments out of three AWS Regions: eu-west-1, us-east-1, and us-west-1. The company hosts all its production workloads in two on-premises data centers. The company has 60 AWS accounts and each account has two VPCs in each Region. Each VPC has a virtual private gateway where two VPN connections terminate for resilient connectivity to the data centers. The company has 360 VPN tunnels to each data center, resulting in high management overhead. The total VPN throughput for each Region is 500 Mbps. The company wants to migrate the production environments to AWS. The company needs a solution that will simplify the network architecture and allow for future growth. The production environments will generate an additional 2 Gbps of traffic per Region back to the data centers. This traffic will increase over time. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Set up an AWS Direct Connect connection from each data center to AWS in each Region. Create and attach private VIFs to a single Direct Connect gateway. Attach the Direct Connect gateway to all the VPCs. Remove the existing VPN connections that are attached directly to the virtual private gateways.",
      "B": "Create a single transit gateway with VPN connections from each data center. Share the transit gateway with each account by using AWS Resource Access Manager (AWS RAM). Attach the transit gateway to each VPC. Remove the existing VPN connections that are attached directly to the virtual private gateways.",
      "C": "Create a transit gateway in each Region with multiple newly commissioned VPN connections from each data center. Share the transit gateways with each account by using AWS Resource Access Manager (AWS RAM). In each Region, attach the transit gateway to each VPC. Remove the existing VPN connections that are attached directly to the virtual private gateways.",
      "D": "Peer all the VPCs in each Region to a new VPC in each Region that will function as a centralized transit VPC. Create new VPN connections from each data center to the transit VPCs. Terminate the original VPN connections that are attached to all the original VPCs. Retain the new VPN connection to the new transit VPC in each Region."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103117-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 26,
    "question": "회사가 단일 VPC의 AWS에서 웹사이트를 구축하고 있습니다. VPC에는 두 Availability Zone에 퍼블릭 서브넷과 프라이빗 서브넷이 있습니다. 웹사이트에는 이미지와 같은 정적 콘텐츠가 있습니다. 회사는 Amazon S3를 사용하여 콘텐츠를 저장합니다. 회사는 프라이빗 서브넷에 Amazon EC2 인스턴스를 웹 서버로 배포했습니다. EC2 인스턴스는 Application Load Balancer 뒤에 Auto Scaling 그룹에 있습니다. EC2 인스턴스는 트래픽을 처리하고 웹페이지를 렌더링하기 위해 S3 버킷에서 콘텐츠를 가져와야 합니다. 회사는 온프레미스 연결을 위해 공개 VIF를 포함한 AWS Direct Connect를 사용하고 있습니다. 네트워크 엔지니어는 EC2 인스턴스와 Amazon S3 간의 트래픽이 NAT 게이트웨이를 통해 라우팅되고 있음을 발견했습니다. 트래픽이 증가하면서 NAT 게이트웨이 비용이 증가하고 있습니다. 네트워크 엔지니어는 EC2 인스턴스와 Amazon S3 간의 트래픽으로 인한 NAT 게이트웨이 비용을 줄이기 위해 연결을 변경해야 합니다. 요구 사항을 충족하는 솔루션은?",
    "options": {
      "A": "Direct Connect 프라이빗 VIF를 생성합니다. 퍼블릭 VIF에서 프라이빗 VIF로 트래픽을 마이그레이션합니다.",
      "B": "기존 퍼블릭 VIF를 통해 AWS Site-to-Site VPN 터널을 생성합니다.",
      "C": "Amazon S3에 대한 인터페이스 VPC 엔드포인트를 구현합니다. VPC 라우트 테이블을 업데이트합니다.",
      "D": "Amazon S3에 대한 게이트웨이 VPC 엔드포인트를 구현합니다. VPC 라우트 테이블을 업데이트합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Gateway VPC Endpoint — S3 접근 시 NAT 우회 가능\n▸ Interface VPC Endpoint — ENI 기반 엔드포인트 (추가 비용)\n▸ NAT Gateway Bypass — 데이터 전송 비용 제거\n▸ S3 트래픽 최적화 — 프라이빗 서브넷에서의 비용 효율적 접근\n\n【정답 포인트】\n▸ Gateway Endpoint는 라우트 테이블 기반으로 S3 트래픽 자동 리다이렉션\n▸ Interface Endpoint와 달리 추가 비용 없음 (S3 전용)\n▸ NAT Gateway를 거치지 않으므로 데이터 전송 비용 완전 제거\n▸ 라우트 테이블의 프리픽스 리스트로 자동 라우팅 설정\n\nOption D: Gateway Endpoint를 S3에 생성하고 VPC 라우트 테이블을 업데이트하면, 프라이빗 서브넷의 EC2에서 S3로 가는 트래픽이 자동으로 NAT Gateway를 우회하여 직접 S3에 접속. 비용 효율성 최대화.\n\n【오답 체크】\n(A) Direct Connect 프라이빗 VIF는 온프레미스 연결용이며 AWS 내부 S3 트래픽과 무관함. 문제 미해결.\n(B) VPN Tunnel은 암호화 오버헤드만 추가되고 NAT Gateway 비용은 여전히 발생함.\n(C) Interface Endpoint는 ENI 생성으로 시간당 비용 발생 + 추가 관리 필요.\n\n【시험 포인트】\n▸ S3/DynamoDB 접근: Gateway Endpoint 필수 선택\n▸ 비용 최적화: Interface Endpoint 대비 Gateway Endpoint 우선순위\n▸ 라우트 기반 자동화: Prefix List 매커니즘 이해",
    "en_q": "A company is building its website on AWS in a single VPC. The VPC has public subnets and private subnets in two Availability Zones. The website has static content such as images. The company is using Amazon S3 to store the content. The company has deployed a fleet of Amazon EC2 instances as web servers in a private subnet. The EC2 instances are in an Auto Scaling group behind an Application Load Balancer. The EC2 instances will serve traffic, and they must pull content from an S3 bucket to render the webpages. The company is using AWS Direct Connect with a public VIF for on-premises connectivity to the S3 bucket. A network engineer notices that traffic between the EC2 instances and Amazon S3 is routing through a NAT gateway. As traffic increases, the company's costs are increasing. The network engineer needs to change the connectivity to reduce the NAT gateway costs that result from the traffic between the EC2 instances and Amazon S3. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a Direct Connect private VIF. Migrate the traffic from the public VIF to the private VIF.",
      "B": "Create an AWS Site-to-Site VPN tunnel over the existing public VIF.",
      "C": "Implement interface VPC endpoints for Amazon S3. Update the VPC route table.",
      "D": "Implement gateway VPC endpoints for Amazon S3. Update the VPC route table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103118-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 27,
    "question": "회사가 AWS 환경의 가시성을 개선하고 싶어합니다. AWS 환경은 Transit Gateway에 연결된 여러 VPC로 구성됩니다. Transit Gateway는 Direct Connect Gateway를 통해 온프레미스 데이터 센터에 연결되며, Transit VIF를 사용하는 중복 Direct Connect 연결 쌍을 사용합니다. 회사는 Direct Connect를 통해 온프레미스에서 AWS로 광고되는 새로운 경로마다 알림을 받아야 합니다. 요구 사항을 충족하기 위해 네트워크 엔지니어가 해야 할 일은?",
    "options": {
      "A": "Direct Connect에서 Amazon CloudWatch 메트릭을 활성화하여 수신 경로를 추적합니다. 경로가 변경될 때 알림을 보내도록 CloudWatch 경보를 구성합니다.",
      "B": "Transit Gateway Network Manager를 Amazon CloudWatch Logs Insights에 온보딩합니다. 경로가 변경될 때 알림을 보내도록 Amazon EventBridge (Amazon CloudWatch Events)를 사용합니다.",
      "C": "AWS Lambda 함수를 구성하여 Direct Connect Gateway의 경로를 정기적으로 확인하고 경로가 변경될 때 알림을 보냅니다.",
      "D": "Transit VIF에서 Amazon CloudWatch 로그를 활성화하여 수신 경로를 추적합니다. 필터에서 경보를 설정하여 경로 변경 시 알림을 보냅니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Transit Gateway Network Manager — TGW 네트워크 모니터링 통합\n▸ CloudWatch Logs Insights — 로그 검색 및 분석 도구\n▸ EventBridge — 이벤트 기반 자동화 및 알림\n▸ BGP Route Change Events — 라우팅 테이블 변경 감지\n\n【정답 포인트】\n▸ TGW Network Manager가 Direct Connect BGP 이벤트를 수집\n▸ CloudWatch Logs에 자동으로 로그 전송 (수동 설정 불필요)\n▸ EventBridge가 로그 패턴 변화를 감지하여 실시간 알림\n▸ Lambda polling 대비 이벤트 기반으로 실시간 반응 가능\n\nOption B: TGW Network Manager를 온보딩하면 BGP 이벤트가 CloudWatch Logs로 자동 전송. EventBridge 규칙으로 경로 변경 패턴 감지 시 즉시 알림. 네이티브 AWS 솔루션으로 관리 오버헤드 최소.\n\n【오답 체크】\n(A) CloudWatch Metrics는 수치 메트릭(대역폭)만 추적 가능 - 경로 변경 이벤트 감지 불가.\n(C) Lambda Polling은 정기적 체크로 실시간성 부족 + 추가 비용 + 코드 관리 필요.\n(D) Transit VIF는 CloudWatch Logs를 지원하지 않음 - 경로 정보 전송 불가.\n\n【시험 포인트】\n▸ Hybrid Network Monitoring: TGW Network Manager 기본\n▸ 이벤트 기반 자동화: CloudWatch Logs + EventBridge 조합\n▸ 실시간 라우팅 변경 감지: 네트워크 가시성 핵심",
    "en_q": "A company wants to improve visibility into its AWS environment. The AWS environment consists of multiple VPCs that are connected to a transit gateway. The transit gateway connects to an on-premises data center through an AWS Direct Connect gateway and a pair of redundant Direct Connect connections that use transit VIFs. The company must receive notification each time a new route is advertised to AWS from on premises over Direct Connect. What should a network engineer do to meet these requirements?",
    "en_opts": {
      "A": "Enable Amazon CloudWatch metrics on Direct Connect to track the received routes. Configure a CloudWatch alarm to send notifications when routes change.",
      "B": "Onboard Transit Gateway Network Manager to Amazon CloudWatch Logs Insights. Use Amazon EventBridge (Amazon CloudWatch Events) to send notifications when routes change.",
      "C": "Configure an AWS Lambda function to periodically check the routes on the Direct Connect gateway and to send notifications when routes change.",
      "D": "Enable Amazon CloudWatch Logs on the transit VIFs to track the received routes. Create a metric filter. Set an alarm on the filter to send notifications when routes change."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103119-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 28,
    "question": "소프트웨어 회사는 AWS 클라우드에서 호스팅되는 소프트웨어 서비스(SaaS) 회계 애플리케이션을 제공합니다. 애플리케이션에는 회사의 온프레미스 네트워크로의 연결이 필요합니다. 회사는 AWS와 온프레미스 네트워크 간의 증가하는 수요를 수용하기 위해 2개의 중복 10 GB AWS Direct Connect 연결을 보유하고 있습니다. 회사는 이미 온프레미스 네트워크와 코로케이션 간에 암호화가 있습니다. 회사는 향후 몇 개월 내에 AWS와 코로케이션의 엣지 라우터 간의 트래픽을 암호화해야 합니다. 회사는 현재 대역폭을 유지해야 합니다. 가장 적은 운영 오버헤드로 요구 사항을 충족하기 위해 네트워크 엔지니어가 해야 할 일은?",
    "options": {
      "A": "암호화가 있는 새로운 퍼블릭 VIF를 배포합니다. 새로운 퍼블릭 VIF를 통해 트래픽을 재라우팅합니다.",
      "B": "가상 프라이빗 게이트웨이를 생성합니다. 온프레미스에서 가상 프라이빗 게이트웨이로 새로운 AWS Site-to-Site VPN 연결을 배포합니다. Direct Connect 프라이빗 VIF에서 새로운 VPN으로 트래픽을 재라우팅합니다.",
      "C": "MACsec이 있는 새로운 10 GB Direct Connect 연결 쌍을 배포합니다. 엣지 라우터에서 MACsec을 구성합니다. 새로운 Direct Connect 연결로 트래픽을 재라우팅합니다. 원래 Direct Connect 연결을 폐기합니다.",
      "D": "MACsec이 있는 새로운 10 GB Direct Connect 연결 쌍을 배포합니다. 새로운 Direct Connect 연결에 새로운 퍼블릭 VIF를 배포합니다. 새로운 퍼블릭 VIF를 통해 2개의 AWS Site-to-Site VPN 연결을 배포합니다. 기존 프라이빗 VIF에서 새로운 Site-to-Site 연결로 트래픽을 재라우팅합니다. 원래 Direct Connect 연결을 폐기합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ MACsec (Media Access Control Security) — Layer 2 암호화 표준\n▸ Direct Connect Encryption — AWS와 코로케이션 간 암호화\n▸ Bandwidth Preservation — 기존 대역폭 유지\n▸ Operational Overhead — 운영 복잡성 최소화\n\n【정답 포인트】\n▸ MACsec은 Direct Connect 네이티브 암호화로 VPN 대비 오버헤드 최소\n▸ Layer 2에서 암호화로 성능 영향 무시할 수 있는 수준\n▸ 새로운 DX 연결로 배포 후 점진적 마이그레이션 가능\n▸ 엣지 라우터에서 초기 구성 후 자동화 - 지속적 관리 최소\n\nOption C: MACsec이 포함된 새로운 10 Gbps Direct Connect 연결 2개(중복성) 배포. 엣지 라우터에 MACsec 설정. 기존 연결에서 새 연결로 트래픽 마이그레이션. VPN 오버헤드 없이 10 Gbps 유지.\n\n【오답 체크】\n(A) Public VIF 암호화 옵션 존재하지 않음 - 실질적 암호화 불가능.\n(B) VPN(IPsec)은 암호화 오버헤드 + 성능 저하 + 대역폭 손실 위험 초래.\n(D) DX + Public VIF + VPN 다층 구조는 복잡성 극대화 + 운영 비효율.\n\n【시험 포인트】\n▸ Direct Connect MACsec: Layer 2 암호화의 표준 솔루션\n▸ 대역폭 효율성: VPN 오버헤드 없음\n▸ 점진적 마이그레이션: 기존 DX 유지 중 신규 DX 증설",
    "en_q": "A software company offers a software-as-a-service (SaaS) accounting application that is hosted in the AWS Cloud. The application requires connectivity to the company's on-premises network. The company has two redundant 10 GB AWS Direct Connect connections between AWS and its on-premises network to accommodate the growing demand for the application. The company already has encryption between its on-premises network and the colocation. The company needs to encrypt traffic between AWS and the edge routers in the colocation within the next few months. The company must maintain its current bandwidth. What should a network engineer do to meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Deploy a new public VIF with encryption on the existing Direct Connect connections. Reroute traffic through the new public VIF.",
      "B": "Create a virtual private gateway. Deploy new AWS Site-to-Site VPN connections from on premises to the virtual private gateway. Reroute traffic from the Direct Connect private VIF to the new VPNs.",
      "C": "Deploy a new pair of 10 GB Direct Connect connections with MACsec. Configure MACsec on the edge routers. Reroute traffic to the new Direct Connect connections. Decommission the original Direct Connect connections.",
      "D": "Deploy a new pair of 10 GB Direct Connect connections with MACsec. Deploy a new public VIF on the new Direct Connect connections. Deploy two AWS Site-to-Site VPN connections on top of the new public VIF. Reroute traffic from the existing private VIF to the new Site-to-Site connections. Decommission the original Direct Connect connections."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103120-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 29,
    "question": "회사가 Application Load Balancer (ALB) 뒤의 Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. 회사는 최근 네트워크 보안 위반을 경험했습니다. 네트워크 엔지니어는 클라이언트 IP 주소, 대상 IP 주소, 대상 포트 및 애플리케이션에 액세스하는 각 사용자의 사용자 에이전트를 포함하는 로그를 수집하고 분석해야 합니다. 요구 사항을 충족하는 가장 운영 효율적인 솔루션은?",
    "options": {
      "A": "ALB를 Amazon S3 버킷에 로그를 저장하도록 구성합니다. Amazon S3에서 파일을 다운로드하고 스프레드시트 애플리케이션을 사용하여 로그를 분석합니다.",
      "B": "ALB를 Amazon Kinesis Data Streams으로 로그를 푸시하도록 구성합니다. Amazon Kinesis Data Analytics를 사용하여 로그를 분석합니다.",
      "C": "Amazon Kinesis Data Streams을 구성하여 ALB에서 Amazon OpenSearch Service (Amazon Elasticsearch Service)로 데이터를 스트리밍합니다. Amazon OpenSearch Service (Amazon Elasticsearch Service)의 검색 작업을 사용하여 데이터를 분석합니다.",
      "D": "ALB를 Amazon S3 버킷에 로그를 저장하도록 구성합니다. Amazon Athena를 사용하여 Amazon S3의 로그를 분석합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ ALB Access Logs — Application Load Balancer 액세스 로그\n▸ Amazon Athena — S3 기반 SQL 쿼리 엔진\n▸ Amazon S3 — 로그 저장소\n▸ Operational Efficiency — 관리 오버헤드 최소화\n\n【정답 포인트】\n▸ ALB는 S3에 자동 로그 저장 지원 (네이티브 기능)\n▸ Athena는 S3의 로그를 직접 SQL로 쿼리 (ETL 불필요)\n▸ 서버리스 아키텍처로 인프라 관리 불필요\n▸ 클라이언트 IP, 대상 IP, 포트, User-Agent 모두 ALB 로그에 포함\n\nOption D: ALB Access Logs를 S3에 저장 후, Athena로 직접 SQL 쿼리. WHERE 절로 IP/포트/User-Agent 필터링. 추가 인프라 없이 비용 효율적 분석.\n\n【오답 체크】\n(A) 수동 다운로드 + 스프레드시트는 확장성 부족 + 반복 작업 비효율.\n(B) Kinesis Data Streams은 ALB가 직접 지원하지 않음 - 커스텀 통합 필요 + 추가 비용.\n(C) Kinesis + OpenSearch는 복잡한 파이프라인 + 유지보수 오버헤드 과다.\n\n【시험 포인트】\n▸ ALB 로그 분석: Athena 표준 패턴\n▸ 서버리스 로그 분석: S3 + Athena 조합 기본\n▸ 운영 효율성: 기존 AWS 서비스 조합 최우선",
    "en_q": "A company hosts an application on Amazon EC2 instances behind an Application Load Balancer (ALB). The company recently experienced a network security breach. A network engineer must collect and analyze logs that include the client IP address, target IP address, target port, and user agent of each user that accesses the application. What is the MOST operationally efficient solution that meets these requirements?",
    "en_opts": {
      "A": "Configure the ALB to store logs in an Amazon S3 bucket. Download the files from Amazon S3, and use a spreadsheet application to analyze the logs.",
      "B": "Configure the ALB to push logs to Amazon Kinesis Data Streams. Use Amazon Kinesis Data Analytics to analyze the logs.",
      "C": "Configure Amazon Kinesis Data Streams to stream data from the ALB to Amazon OpenSearch Service (Amazon Elasticsearch Service). Use search operations in Amazon OpenSearch Service (Amazon Elasticsearch Service) to analyze the data.",
      "D": "Configure the ALB to store logs in an Amazon S3 bucket. Use Amazon Athena to analyze the logs in Amazon S3."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103193-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 30,
    "question": "미디어 회사가 글로벌 대상을 위한 뉴스 웹사이트를 구현하고 있습니다. 웹사이트는 Amazon CloudFront를 콘텐츠 전달 네트워크로 사용합니다. 백엔드는 Application Load Balancer (ALB) 뒤의 Amazon EC2 Windows 인스턴스에서 실행됩니다. 인스턴스는 Auto Scaling 그룹의 일부입니다. 회사의 고객은 CloudFront 사용자 정의 도메인 이름으로 service.example.com을 사용하여 웹사이트에 액세스합니다. CloudFront 원본은 service-alb.example.com을 도메인 이름으로 사용하는 ALB를 가리킵니다. 회사의 보안 정책은 사용자와 백엔드 간의 전송 중인 트래픽이 항상 암호화되어야 합니다. 이 보안 요구 사항을 충족하기 위해 회사가 수행해야 할 변경 사항의 조합은? (3개 선택)",
    "options": {
      "A": "service.example.com에 대한 자체 서명 인증서를 생성합니다. 인증서를 AWS Certificate Manager (ACM)로 가져옵니다. CloudFront를 이 가져온 SSL/TLS 인증서를 사용하도록 구성합니다. 기본 동작을 HTTP를 HTTPS로 리다이렉트하도록 변경합니다.",
      "B": "AWS Certificate Manager (ACM)를 사용하여 service.example.com에 대한 인증서를 생성합니다. CloudFront를 이 사용자 정의 SSL/TLS 인증서를 사용하도록 구성합니다. 기본 동작을 HTTP를 HTTPS로 리다이렉트하도록 변경합니다.",
      "C": "EC2 인스턴스에 대해 AWS Certificate Manager (ACM)를 사용하여 모든 도메인 이름으로 인증서를 생성합니다. 백엔드를 이 인증서의 HTTPS 리스너를 사용하도록 구성합니다. 대상 그룹 생성 중에 인스턴스 대상 유형을 지정하고 대상에 HTTPS 프로토콜을 사용합니다. 기존 Auto Scaling 그룹을 이 새로운 대상 그룹에 연결합니다.",
      "D": "EC2 인스턴스에 대해 제3자 인증서 제공자로부터 공개 인증서를 모든 도메인 이름으로 생성합니다. 백엔드를 이 인증서의 HTTPS 리스너를 사용하도록 구성합니다. 대상 그룹 생성 중에 인스턴스 대상 유형을 지정하고 대상에 HTTPS 프로토콜을 사용합니다. 기존 Auto Scaling 그룹을 이 새로운 대상 그룹에 연결합니다.",
      "E": "AWS Certificate Manager (ACM)를 사용하여 service-alb.example.com에 대한 인증서를 생성합니다. ALB에 새 HTTPS 리스너를 추가하고, 새 대상 그룹과 service-alb.example.com ACM 인증서를 사용합니다. CloudFront 원본을 HTTPS 프로토콜만 사용하도록 수정합니다. ALB에서 HTTP 리스너를 삭제합니다.",
      "F": "service-alb.example.com에 대한 자체 서명 인증서를 생성합니다. 인증서를 AWS Certificate Manager (ACM)로 가져옵니다. ALB에 새 HTTPS 리스너를 추가하고, 새 대상 그룹과 가져온 service-alb.example.com ACM 인증서를 사용합니다. CloudFront 원본을 HTTPS 프로토콜만 사용하도록 수정합니다. ALB에서 HTTP 리스너를 삭제합니다."
    },
    "answer": "BDE",
    "explanation": "【핵심 용어】\n▸ CloudFront Edge Encryption — 엔드유저와 CloudFront 간 HTTPS\n▸ Origin HTTPS — CloudFront와 ALB 간 HTTPS\n▸ Certificate Chain — 공인 인증서의 신뢰 체인\n▸ HTTP Redirect — 강제 암호화 정책\n\n【정답 포인트】\n▸ CloudFront 엣지: service.example.com 공인 인증서 필요 (ACM 권장)\n▸ 백엔드: ALB와 EC2 모두 HTTPS 리스너 필요\n▸ ALB: service-alb.example.com ACM 공인 인증서 필수\n▸ EC2 인스턴스: 제3자 공인 인증서 또는 ACM 인증서 설정\n▸ 양쪽 HTTP → HTTPS 리다이렉트로 강제 암호화\n\nOption B: CloudFront에 ACM 인증서(service.example.com) 적용 + HTTP→HTTPS 리다이렉트\nOption D: EC2 백엔드에 공인 인증서 설치 + HTTPS 리스너 + Auto Scaling 연결\nOption E: ALB에 ACM 인증서(service-alb.example.com) + HTTPS 리스너 + CloudFront HTTPS only\n\n조합 BDE: 3단계 암교화 완성 (사용자→CF→ALB→EC2)\n\n【오답 체크】\n(A) 자체 서명 인증서는 브라우저 경고 발생 - 신뢰 체인 미충족.\n(C) EC2 인스턴스 대상 + 모든 도메인 인증서는 도메인 불일치 문제.\n(F) 자체 서명 인증서는 ALB-CloudFront 검증 실패.\n\n【시험 포인트】\n▸ Multi-tier HTTPS: 각 구간 독립 인증서\n▸ CloudFront + ALB: 도메인 명확한 구분\n▸ ACM 공인 인증서: 자체 서명 절대 금지",
    "en_q": "A media company is implementing a news website for a global audience. The website uses Amazon CloudFront as its content delivery network. The backend runs on Amazon EC2 Windows instances behind an Application Load Balancer (ALB). The instances are part of an Auto Scaling group. The company's customers access the website by using service.example.com as the CloudFront custom domain name. The CloudFront origin points to an ALB that uses service-alb.example.com as the domain name. The company's security policy requires the traffic to be encrypted in transit at all times between the users and the backend. Which combination of changes must the company make to meet this security requirement? (Choose three.)",
    "en_opts": {
      "A": "Create a self-signed certificate for service.example.com. Import the certificate into AWS Certificate Manager (ACM). Configure CloudFront to use this imported SSL/TLS certificate. Change the default behavior to redirect HTTP to HTTPS.",
      "B": "Create a certificate for service.example.com by using AWS Certificate Manager (ACM). Configure CloudFront to use this custom SSL/TLS certificate. Change the default behavior to redirect HTTP to HTTPS.",
      "C": "Create a certificate with any domain name by using AWS Certificate Manager (ACM) for the EC2 instances. Configure the backend to use this certificate for its HTTPS listener. Specify the instance target type during the creation of a new target group that uses the HTTPS protocol for its targets. Attach the existing Auto Scaling group to this new target group.",
      "D": "Create a public certificate from a third-party certificate provider with any domain name for the EC2 instances. Configure the backend to use this certificate for its HTTPS listener. Specify the instance target type during the creation of a new target group that uses the HTTPS protocol for its targets. Attach the existing Auto Scaling group to this new target group.",
      "E": "Create a certificate for service-alb.example.com by using AWS Certificate Manager (ACM). On the ALB, add a new HTTPS listener that uses the new target group and the service-alb.example.com ACM certificate. Modify the CloudFront origin to use the HTTPS protocol only. Delete the HTTP listener on the ALB.",
      "F": "Create a self-signed certificate for service-alb.example.com. Import the certificate into AWS Certificate Manager (ACM). On the ALB, add a new HTTPS listener that uses the new target group and the imported service-alb.example.com ACM certificate. Modify the CloudFront origin to use the HTTPS protocol only. Delete the HTTP listener on the ALB."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103122-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 31,
    "question": "회사가 Network Load Balancer (NLB) 뒤의 Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. 솔루션 아키텍트가 애플리케이션의 가용성을 개선하기 위해 두 번째 Availability Zone에 EC2 인스턴스를 추가했습니다. 솔루션 아키텍트가 인스턴스를 NLB 대상 그룹에 추가했습니다. 회사의 운영팀은 트래픽이 첫 번째 Availability Zone의 인스턴스로만 라우팅되고 있음을 알립니다. 이 문제를 해결하는 가장 운영 효율적인 솔루션은?",
    "options": {
      "A": "NLB에서 새로운 Availability Zone을 활성화합니다.",
      "B": "두 번째 Availability Zone의 인스턴스에 대한 새로운 NLB를 생성합니다.",
      "C": "NLB에서 프록시 프로토콜을 활성화합니다.",
      "D": "두 Availability Zone의 인스턴스로 새로운 대상 그룹을 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ NLB Availability Zone — NLB 리스너가 활성화된 Availability Zone\n▸ Target Registration — 대상 그룹에 EC2 인스턴스 등록\n▸ Cross-AZ Load Balancing — 다중 Availability Zone 트래픽 분산\n\n【정답 포인트】\n▸ NLB는 생성 시 기본으로 초기 AZ만 활성화됨\n▸ 새로운 인스턴스가 있는 AZ도 명시적으로 활성화 필요\n▸ 대상 그룹에는 이미 두 AZ의 인스턴스가 등록됨\n▸ NLB 구성에서 AZ 활성화만으로 문제 해결\n\nOption A: NLB 구성 패널에서 새로운 Availability Zone을 활성화하면, 기존 대상 그룹의 인스턴스에 자동으로 2개 AZ에 트래픽 분산. 단순한 설정 변경만 필요.\n\n【오답 체크】\n(B) 새로운 NLB 생성은 비용 추가 + 관리 복잡성 증가 - 불필요.\n(C) Proxy Protocol은 클라이언트 IP 정보 전달용 - 로드 밸런싱 문제 미해결.\n(D) 대상은 이미 등록됨 - 새 대상 그룹 생성 불필요.\n\n【시험 포인트】\n▸ NLB Multi-AZ: AZ 활성화 설정 필수\n▸ 기본 설정: NLB 생성 시 초기 AZ만 활성화\n▸ 대상 그룹 재사용: 이미 등록된 대상 활용",
    "en_q": "A company is hosting an application on Amazon EC2 instances behind a Network Load Balancer (NLB). A solutions architect added EC2 instances in a second Availability Zone to improve the availability of the application. The solutions architect added the instances to the NLB target group. The company's operations team notices that traffic is being routed only to the instances in the first Availability Zone. What is the MOST operationally efficient solution to resolve this issue?",
    "en_opts": {
      "A": "Enable the new Availability Zone on the NLB",
      "B": "Create a new NLB for the instances in the second Availability Zone",
      "C": "Enable proxy protocol on the NLB",
      "D": "Create a new target group with the instances in both Availability Zones"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103123-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 32,
    "question": "네트워크 엔지니어가 Linux 기반 네트워크 어플라이언스를 실행하기 위해 Amazon EC2 Auto Scaling 그룹을 설정해야 합니다. 엔지니어는 새로운 시작 템플릿을 구성하고 있습니다. 프라이머리 네트워크 인터페이스 외에도 네트워크 어플라이언스는 인터넷을 통해 호스트와 트래픽을 교환하기 위해 독점적으로 사용할 두 번째 네트워크 인터페이스가 필요합니다. 회사는 두 번째 네트워크 인터페이스에 퍼블릭 IP 주소로 사용할 BYOIP (Bring Your Own IP) 풀을 설정했습니다. 네트워크 엔지니어가 필요한 아키텍처를 구현하는 방법은?",
    "options": {
      "A": "시작 템플릿에서 두 개의 네트워크 인터페이스를 구성합니다. 프라이머리 네트워크 인터페이스를 프라이빗 서브넷 중 하나에서 생성되도록 정의합니다. 두 번째 네트워크 인터페이스의 경우 퍼블릭 서브넷 중 하나를 선택합니다. BYOIP 풀 ID를 퍼블릭 IP 주소의 소스로 선택합니다.",
      "B": "시작 템플릿에서 프라이빗 서브넷의 프라이머리 네트워크 인터페이스를 구성합니다. 부팅 후 cloud-init 스크립트를 실행하기 위해 사용자 데이터 옵션을 사용하여 자동 할당 퍼블릭 IP 주소가 활성화된 서브넷에서 두 번째 네트워크 인터페이스를 연결합니다.",
      "C": "Auto Scaling 그룹의 라이프사이클 후크로 실행할 AWS Lambda 함수를 생성합니다. Lambda 함수에서 AWS Global Accelerator 엔드포인트에 네트워크 인터페이스를 할당합니다.",
      "D": "Auto Scaling 그룹 생성 중에 프라이머리 네트워크 인터페이스의 서브넷을 선택합니다. cloud-init 스크립트를 실행하기 위해 사용자 데이터 옵션을 사용하여 두 번째 네트워크 인터페이스를 할당하고 BYOIP 풀에서 Elastic IP 주소를 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Bring Your Own IP (BYOIP) — 고객 소유 IP 주소 풀\n▸ Elastic IP (from BYOIP) — BYOIP 풀에서 할당받은 공인 IP\n▸ User Data Script — 인스턴스 부팅 시 실행되는 초기화 스크립트\n▸ Secondary Network Interface — 추가 ENI(Elastic Network Interface)\n\n【정답 포인트】\n▸ 시작 템플릿은 프라이머리 ENI만 정의 가능 (2차 ENI는 부팅 후 추가)\n▸ cloud-init 스크립트를 user data로 실행하여 2차 ENI 생성\n▸ BYOIP 풀에서 Elastic IP를 할당받아 2차 ENI에 연결\n▸ Auto Scaling이 인스턴스마다 자동으로 이 프로세스 반복\n\nOption D: Auto Scaling 그룹에서 프라이머리 네트워크 인터페이스 서브넷 선택. cloud-init user data 스크립트로 2차 ENI 생성 + BYOIP Elastic IP 할당. 각 인스턴스마다 자동 실행.\n\n【오답 체크】\n(A) 시작 템플릿에서 2개 ENI 정의 가능하지만, BYOIP pool ID를 직접 선택할 수 없음.\n(B) User data는 맞으나 \"자동 할당\" 옵션은 BYOIP 미지원 - 명시적 Elastic IP 필요.\n(C) Lambda + Global Accelerator는 과도한 복잡성 + 목표 미달성.\n\n【시험 포인트】\n▸ Auto Scaling + Multi-ENI: user data 자동화 필수\n▸ BYOIP: Elastic IP로만 할당 가능\n▸ 시작 템플릿 범위: 프라이머리 ENI만 정의",
    "en_q": "A network engineer needs to set up an Amazon EC2 Auto Scaling group to run a Linux-based network appliance in a highly available architecture. The network engineer is configuring the new launch template for the Auto Scaling group. In addition to the primary network interface, the network appliance requires a second network interface that will be used exclusively by the application to exchange traffic with hosts over the internet. The company has set up a Bring Your Own IP (BYOIP) pool that includes an Elastic IP address that should be used as the public IP address for the second network interface. How can the network engineer implement the required architecture?",
    "en_opts": {
      "A": "Configure the two network interfaces in the launch template. Define the primary network interface to be created in one of the private subnets. For the second network interface, select one of the public subnets. Choose the BYOIP pool ID as the source of public IP addresses.",
      "B": "Configure the primary network interface in a private subnet in the launch template. Use the user data option to run a cloud-init script after boot to attach the second network interface from a subnet with auto-assign public IP addressing enabled.",
      "C": "Create an AWS Lambda function to run as a lifecycle hook of the Auto Scaling group when an instance is launching. In the Lambda function, assign a network interface to an AWS Global Accelerator endpoint.",
      "D": "During creation of the Auto Scaling group, select subnets for the primary network interface. Use the user data option to run a cloud-init script to allocate a second network interface and to associate an Elastic IP address from the BYOIP pool."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103124-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 33,
    "question": "회사는 인터넷을 통해 애플리케이션을 제공합니다. Amazon Route 53 퍼블릭 호스팅 영역이 회사의 권한 있는 DNS 서비스이며, 모든 인터넷 애플리케이션은 동일한 도메인 이름에서 제공됩니다. 네트워크 엔지니어가 애플리케이션의 새 버전을 작업하고 있습니다. 애플리케이션의 모든 구성요소는 AWS 클라우드에서 호스팅됩니다. 애플리케이션은 3계층 설계를 갖고 있습니다. 프런트엔드는 Elastic IP 주소가 할당된 퍼블릭 서브넷에 배포된 Amazon EC2 인스턴스를 통해 제공됩니다. 백엔드 구성 요소는 RFC1918의 프라이빗 서브넷에 배포됩니다. 애플리케이션의 구성 요소가 애플리케이션의 VPC 내에서 애플리케이션의 구성 요소에 액세스해야 하며, 공개 인터넷에서 사용되는 것과 동일한 호스트 이름을 사용합니다. 네트워크 엔지니어는 또한 새로운 호스트 이름 도입이나 DNS 항목 퇴역 등 향후 DNS 변경을 수용해야 합니다. 요구 사항을 충족하는 단계 조합은? (3개 선택)",
    "options": {
      "A": "Route 53에서 지오프록시미티 라우팅 정책을 추가합니다.",
      "B": "동일한 도메인 이름에 대해 Route 53 프라이빗 호스팅 영역을 생성합니다. 새로운 프라이빗 호스팅 영역과 애플리케이션의 VPC를 연결합니다.",
      "C": "애플리케이션의 VPC에 대해 DNS 호스트 이름을 활성화합니다.",
      "D": "프라이빗 호스팅 영역에 퍼블릭 호스팅 영역의 각 이름에 대한 항목을 생성합니다. 해당하는 프라이빗 IP 주소를 사용합니다.",
      "E": "AWS CloudTrail이 Route 53 API 호출을 퍼블릭 호스팅 영역에 로깅할 때 실행되는 Amazon EventBridge (Amazon CloudWatch Events) 규칙을 생성합니다. AWS Lambda 함수를 규칙의 대상으로 구성합니다. 이벤트 정보를 사용하여 프라이빗 호스팅 영역을 업데이트하도록 함수를 구성합니다.",
      "F": "프라이빗 IP 주소를 기존 Route 53 퍼블릭 호스팅 영역에 추가합니다."
    },
    "answer": "BCD",
    "explanation": "【핵심 용어】\n▸ Route 53 Private Hosted Zone (PHZ) — VPC 내부 DNS 해석\n▸ Split-View DNS — 같은 도메인명, 내부/외부 다른 IP 응답\n▸ DNS Hostname Resolution — VPC 인스턴스의 프라이빗 호스트명 지원\n▸ Record Synchronization — 퍼블릭과 프라이빗 영역 레코드 동기화\n\n【정답 포인트】\n▸ VPC 내 구성요소가 같은 호스트명으로 프라이빗 IP 접근 필요\n▸ Private Hosted Zone 생성 + VPC 연결 → VPC 내부 DNS 해석 활성화\n▸ DNS Hostname 활성화 → EC2가 프라이빗 호스트명 사용 가능\n▸ 퍼블릭 호스팅 영역의 각 레코드를 프라이빗 IP로 복제 → Split-View DNS 구현\n\nOption B: PHZ 생성 및 애플리케이션 VPC에 연결\nOption C: VPC에서 DNS Hostname 활성화\nOption D: PHZ에 공개 호스팅 영역의 동일 레코드를 프라이빗 IP로 복제\n\n조합 BCD: 내부 구성요소는 같은 이름으로 프라이빗 IP 접근, 외부는 공인 IP 접근\n\n【오답 체크】\n(A) 지오프록시미티는 지역 기반 라우팅 - Split-View DNS 미달성.\n(E) EventBridge + Lambda는 자동화이나, 문제에 \"향후 변경 수용\"만 있고 \"자동화 필수\"는 아님.\n(F) 퍼블릭 호스팅 영역에 프라이빗 IP 추가는 부적절 - 인터넷에 프라이빗 IP 노출.\n\n【시험 포인트】\n▸ Split-View DNS: Private Hosted Zone 기본 사용\n▸ VPC DNS 설정: 호스트명 활성화 필수\n▸ 수동 레코드 복제: 변경 주기가 낮으면 충분",
    "en_q": "A company delivers applications over the internet. An Amazon Route 53 public hosted zone is the authoritative DNS service for the company and its internet applications, all of which are offered from the same domain name. A network engineer is working on a new version of one of the applications. All the application's components are hosted in the AWS Cloud. The application has a three-tier design. The front end is delivered through Amazon EC2 instances that are deployed in public subnets with Elastic IP addresses assigned. The backend components are deployed in private subnets from RFC1918. Components of the application need to be able to access other components of the application within the application's VPC by using the same host names as the host names that are used over the public internet. The network engineer also needs to accommodate future DNS changes, such as the introduction of new host names or the retirement of DNS entries. Which combination of steps will meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Add a geoproximity routing policy in Route 53.",
      "B": "Create a Route 53 private hosted zone for the same domain name. Associate the application's VPC with the new private hosted zone.",
      "C": "Enable DNS hostnames for the application's VPC.",
      "D": "Create entries in the private hosted zone for each name in the public hosted zone by using the corresponding private IP addresses.",
      "E": "Create an Amazon EventBridge (Amazon CloudWatch Events) rule that runs when AWS CloudTrail logs a Route 53 API call to the public hosted zone. Create an AWS Lambda function as the target of the rule. Configure the function to use the event information to update the private hosted zone.",
      "F": "Add the private IP addresses in the existing Route 53 public hosted zone."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103127-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 34,
    "question": "회사가 애플리케이션을 배포하고 있습니다. 애플리케이션은 Amazon Elastic Container Service (Amazon ECS) 클러스터의 일련의 컨테이너로 구현됩니다. 회사는 작업에 Fargate 시작 유형을 사용합니다. 컨테이너는 SSL 연결을 통해 시작된 연결을 요구하는 워크로드를 실행합니다. 트래픽은 프라이빗 연결을 통해 다른 AWS 계정의 애플리케이션으로 흘러야 합니다. 애플리케이션은 더 많은 소비자가 애플리케이션을 사용함에 따라 관리 가능한 방식으로 확장해야 합니다. 요구 사항을 충족하는 솔루션은?",
    "options": {
      "A": "ECS 서비스의 로드 밸런서 유형으로 Gateway Load Balancer (GLB)를 선택합니다. ECS에서 필요에 따라 대상 그룹에 새 작업을 추가하는 라이프사이클 후크를 생성합니다. 서비스 정의에서 GLB를 지정합니다. 외부 AWS 계정에 대한 VPC 피어를 생성합니다. AWS 계정이 GLB에 도달할 수 있도록 라우트 테이블을 업데이트합니다.",
      "B": "ECS 서비스의 로드 밸런서 유형으로 Application Load Balancer (ALB)를 선택합니다. 애플리케이션이 대상 그룹에 등록된 컨테이너를 대상으로 할 수 있도록 경로 기반 라우팅 규칙을 생성합니다. 서비스 정의에서 ALB를 지정합니다. ALB에 대한 VPC 엔드포인트 서비스를 생성합니다. VPC 엔드포인트 서비스를 다른 AWS 계정과 공유합니다.",
      "C": "ECS 서비스의 로드 밸런서 유형으로 Application Load Balancer (ALB)를 선택합니다. 애플리케이션이 대상 그룹에 등록된 컨테이너를 대상으로 할 수 있도록 경로 기반 라우팅 규칙을 생성합니다. 서비스 정의에서 ALB를 지정합니다. 외부 AWS 계정에 대한 VPC 피어를 생성합니다. AWS 계정이 ALB에 도달할 수 있도록 라우트 테이블을 업데이트합니다.",
      "D": "ECS 서비스의 로드 밸런서 유형으로 Network Load Balancer (NLB)를 선택합니다. 서비스 정의에서 NLB를 지정합니다. NLB에 대한 VPC 엔드포인트 서비스를 생성합니다. VPC 엔드포인트 서비스를 다른 AWS 계정과 공유합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption D: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A company is deploying an application. The application is implemented in a series of containers in an Amazon Elastic Container Service (Amazon ECS) cluster. The company will use the Fargate launch type for its tasks. The containers will run workloads that require connectivity initiated over an SSL connection. Traffic must be able to flow to the application from other AWS accounts over private connectivity. The application must scale in a manageable way as more consumers use the application. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Choose a Gateway Load Balancer (GLB) as the type of load balancer for the ECS service. Create a lifecycle hook to add new tasks to the target group from Amazon ECS as required to handle scaling. Specify the GLB in the service definition. Create a VPC peer for external AWS accounts. Update the route tables so that the AWS accounts can reach the GLB.",
      "B": "Choose an Application Load Balancer (ALB) as the type of load balancer for the ECS service. Create path-based routing rules to allow the application to target the containers that are registered in the target group. Specify the ALB in the service definition. Create a VPC endpoint service for the ALB. Share the VPC endpoint service with other AWS accounts.",
      "C": "Choose an Application Load Balancer (ALB) as the type of load balancer for the ECS service. Create path-based routing rules to allow the application to target the containers that are registered in the target group. Specify the ALB in the service definition. Create a VPC peer for the external AWS accounts. Update the route tables so that the AWS accounts can reach the ALB.",
      "D": "Choose a Network Load Balancer (NLB) as the type of load balancer for the ECS service. Specify the NLB in the service definition. Create a VPC endpoint service for the NLB. Share the VPC endpoint service with other AWS accounts."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103128-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 35,
    "question": "회사의 개발팀이 제품 추천 웹 서비스를 개발했습니다. 웹 서비스는 192.168.224.0/19의 CIDR 블록이 있는 VPC에서 호스팅됩니다. 회사는 웹 서비스를 Amazon EC2 인스턴스에 배포했으며, Network Load Balancer (NLB) 대상인 Auto Scaling 그룹으로 구성했습니다. 회사는 제품 추천을 받는 사용자가 추천을 받지 않는 사용자보다 더 많이 지출하는지 테스트하기 위해 테스트를 수행하려고 합니다. 회사는 추천 엔진을 기존 프로덕션 환경과 통합해야 하며, 5일 내에 진행해야 합니다. 기존 프로덕션 환경은 192.168.128.0/17의 CIDR 블록이 있는 VPC에서 호스팅됩니다. 네트워크 엔지니어는 기존 환경에 최소한의 중단을 초래하는 솔루션을 설계하여 시스템을 통합해야 합니다. 요구 사항을 충족하는 솔루션은?",
    "options": {
      "A": "웹 서비스 VPC와 기존 프로덕션 VPC 간에 VPC 피어링 연결을 생성합니다. 192.168.224.0/19에서의 데이터 흐름 및 기존 프로덕션 환경에서 192.168.128.0/17로의 데이터 흐름을 허용하도록 적절한 경로 테이블에 라우팅 규칙을 추가합니다. 관련 보안 그룹 및 ACL을 구성하여 시스템이 통신할 수 있습니다.",
      "B": "웹 서비스의 개발팀에 프로덕션 VPC로 웹 서비스를 다시 배포하고 거기에서 시스템을 통합하도록 요청합니다.",
      "C": "VPC 엔드포인트 서비스를 생성합니다. VPC 엔드포인트 서비스를 웹 서비스의 NLB와 연결합니다. 기존 프로덕션 VPC에서 웹 서비스의 인터페이스 VPC 엔드포인트를 생성합니다.",
      "D": "기존 프로덕션 환경에서 Transit Gateway를 생성합니다. 프로덕션 VPC 및 웹 서비스 VPC에 첨부합니다. 192.168.224.0/19 및 192.168.128.0/17에 대해 Transit Gateway 및 VPC 라우트 테이블에서 적절한 라우팅 규칙을 구성합니다. 시스템이 통신할 수 있도록 관련 보안 그룹 및 ACL을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption C: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A company's development team has created a new product recommendation web service. The web service is hosted in a VPC with a CIDR block of 192.168.224.0/19. The company has deployed the web service on Amazon EC2 instances and has configured an Auto Scaling group as the target of a Network Load Balancer (NLB). The company wants to perform testing to determine whether users who receive product recommendations spend more money than users who do not receive product recommendations. The company has a big sales event in 5 days and needs to integrate its existing production environment with the recommendation engine by then. The existing production environment is hosted in a VPC with a CIDR block of 192.168.128.0/17. A network engineer must integrate the systems by designing a solution that results in the least possible disruption to the existing environments. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a VPC peering connection between the web service VPC and the existing production VPC. Add a routing rule to the appropriate route table to allow data to flow to 192.168.224.0/19 from the existing production environment and to flow to 192.168.128.0/17 from the web service environment. Configure the relevant security groups and ACLs to allow the systems to communicate.",
      "B": "Ask the development team of the web service to redeploy the web service into the production VPC and integrate the systems there.",
      "C": "Create a VPC endpoint service. Associate the VPC endpoint service with the NLB for the web service. Create an interface VPC endpoint for the web service in the existing production VPC.",
      "D": "Create a transit gateway in the existing production environment. Create attachments to the production VPC and the web service VPC. Configure appropriate routing rules in the transit gateway and VPC route tables for 192.168.224.0/19 and 192.168.128.0/17. Configure the relevant security groups and ACLs to allow the systems to communicate."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103129-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 36,
    "question": "네트워크 엔지니어가 새로운 애플리케이션 출시를 위해 회사의 하이브리드 네트워크를 IPv6을 지원하도록 업데이트해야 합니다. 애플리케이션은 AWS 클라우드의 VPC에서 호스팅됩니다. 회사의 현재 AWS 인프라에는 Transit Gateway로 연결된 VPC가 포함되어 있습니다. Transit Gateway는 AWS Direct Connect 및 AWS Site-to-Site VPN을 통해 온프레미스 네트워크에 연결됩니다. 회사의 온프레미스 디바이스가 새로운 IPv6 요구 사항을 지원하도록 업데이트되었습니다. 회사는 VPC에 새로운 IPv6 CIDR 블록을 할당하여 VPC에 IPv6을 활성화했습니다. 회사는 Dual-Stack 지원을 위해 서브넷에 IPv6을 할당했습니다. 회사는 업데이트된 서브넷에서 새로운 애플리케이션에 대한 새로운 Amazon EC2 인스턴스를 시작했습니다. 하이브리드 네트워크를 IPv6을 지원하도록 업데이트하는 경우 네트워크 엔지니어는 현재 인프라에 대한 변경을 방지해야 합니다. 네트워크 엔지니어는 또한 인스턴스의 새 IPv6 주소에 대한 인터넷으로부터의 직접 액세스를 차단해야 합니다. 그러나 네트워크 엔지니어는 인스턴스에서 아웃바운드 인터넷 액세스를 허용해야 합니다. 요구 사항을 충족하는 가장 운영 효율적인 솔루션은?",
    "options": {
      "A": "Direct Connect Transit VIF를 업데이트하고 AWS 할당 IPv6 피어링 주소로 BGP 피어링을 구성합니다. IPv6 연결을 지원하는 새로운 VPN 연결을 생성합니다. 출구 전용 인터넷 게이트웨이를 추가합니다. 영향받는 VPC 보안 그룹 및 라우트 테이블을 업데이트하여 VPC 내 및 VPC와 온프레미스 디바이스 간 연결을 제공합니다.",
      "B": "Direct Connect Transit VIF를 업데이트하고 AWS 할당 IPv6 피어링 주소로 BGP 피어링을 구성합니다. IPv6 연결을 지원하도록 기존 VPN 연결을 업데이트합니다. 출구 전용 인터넷 게이트웨이를 추가합니다. 영향받는 VPC 보안 그룹 및 라우트 테이블을 업데이트하여 VPC 내 및 VPC와 온프레미스 디바이스 간 연결을 제공합니다.",
      "C": "Direct Connect Transit VIF를 생성하고 AWS 할당 IPv6 피어링 주소로 BGP 피어링을 구성합니다. IPv6 연결을 지원하는 새로운 VPN 연결을 생성합니다. 출구 전용 인터넷 게이트웨이를 추가합니다. 영향받는 VPC 보안 그룹 및 라우트 테이블을 업데이트하여 VPC 내 및 VPC와 온프레미스 디바이스 간 연결을 제공합니다.",
      "D": "Direct Connect Transit VIF를 생성하고 AWS 할당 IPv6 피어링 주소로 BGP 피어링을 구성합니다. IPv6 연결을 지원하는 새로운 VPN 연결을 생성합니다. NAT 게이트웨이를 추가합니다. 영향받는 VPC 보안 그룹 및 라우트 테이블을 업데이트하여 VPC 내 및 VPC와 온프레미스 디바이스 간 연결을 제공합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption C: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A network engineer needs to update a company's hybrid network to support IPv6 for the upcoming release of a new application. The application is hosted in a VPC in the AWS Cloud. The company's current AWS infrastructure includes VPCs that are connected by a transit gateway. The transit gateway is connected to the on-premises network by AWS Direct Connect and AWS Site-to-Site VPN. The company's on-premises devices have been updated to support the new IPv6 requirements. The company has enabled IPv6 for the existing VPC by assigning a new IPv6 CIDR block to the VPC and by assigning IPv6 to the subnets for dual-stack support. The company has launched new Amazon EC2 instances for the new application in the updated subnets. When updating the hybrid network to support IPv6, the network engineer must avoid making any changes to the current infrastructure. The network engineer also must block direct access to the instances' new IPv6 addresses from the internet. However, the network engineer must allow outbound internet access from the instances. What is the MOST operationally efficient solution that meets these requirements?",
    "en_opts": {
      "A": "Update the Direct Connect transit VIF and configure BGP peering with the AWS assigned IPv6 peering address. Create a new VPN connection that supports IPv6 connectivity. Add an egress-only internet gateway. Update any affected VPC security groups and route tables to provide connectivity within the VPC and between the VPC and the on-premises devices.",
      "B": "Update the Direct Connect transit VIF and configure BGP peering with the AWS assigned IPv6 peering address. Update the existing VPN connection to support IPv6 connectivity. Add an egress-only internet gateway. Update any affected VPC security groups and route tables to provide connectivity within the VPC and between the VPC and the on-premises devices.",
      "C": "Create a Direct Connect transit VIF and configure BGP peering with the AWS assigned IPv6 peering address. Create a new VPN connection that supports IPv6 connectivity. Add an egress-only internet gateway. Update any affected VPC security groups and route tables to provide connectivity within the VPC and between the VPC and the on-premises devices.",
      "D": "Create a Direct Connect transit VIF and configure BGP peering with the AWS assigned IPv6 peering address. Create a new VPN connection that supports IPv6 connectivity. Add a NAT gateway. Update any affected VPC security groups and route tables to provide connectivity within the VPC and between the VPC and the on-premises devices."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103130-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 37,
    "question": "네트워크 엔지니어가 고유한 임의 세션 키를 사용하여 Application Load Balancer (ALB)의 암호화된 데이터를 보호하기 위한 추가 보안 조치를 제공해야 합니다. 네트워크 엔지니어가 요구 사항을 충족하기 위해 해야 할 일은?",
    "options": {
      "A": "ALB 보안 정책을 TLS 1.2 프로토콜만 지원하는 정책으로 변경합니다.",
      "B": "AWS Key Management Service (AWS KMS)를 사용하여 세션 키를 암호화합니다.",
      "C": "AWS WAF 웹 ACL을 ALB와 연결하고, 전방 비밀성(FS)을 적용하는 보안 규칙을 생성합니다.",
      "D": "ALB 보안 정책을 전방 비밀성(FS)을 지원하는 정책으로 변경합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption D: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A network engineer must provide additional safeguards to protect encrypted data at Application Load Balancers (ALBs) through the use of a unique random session key. What should the network engineer do to meet this requirement?",
    "en_opts": {
      "A": "Change the ALB security policy to a policy that supports TLS 1.2 protocol only.",
      "B": "Use AWS Key Management Service (AWS KMS) to encrypt session keys.",
      "C": "Associate an AWS WAF web ACL with the ALBs, and create a security rule to enforce forward secrecy (FS).",
      "D": "Change the ALB security policy to a policy that supports forward secrecy (FS)."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103136-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 38,
    "question": "회사가 모든 사무실을 상호 연결하기 위해 소프트웨어 정의 WAN (SD-WAN) 솔루션을 배포했습니다. 회사가 AWS로 워크로드를 마이그레이션하고 있으며 이 SD-WAN 솔루션을 확장하여 이러한 워크로드에 대한 연결을 지원해야 합니다. 네트워크 엔지니어가 AWS Transit Gateway Connect와 2개의 SD-WAN 가상 어플라이언스를 배포하여 이 연결을 제공할 계획입니다. 회사 정책에 따르면, 한 번에 하나의 SD-WAN 가상 어플라이언스만 AWS 워크로드의 트래픽을 처리할 수 있습니다. 네트워크 엔지니어가 이 요구 사항을 충족하기 위해 라우팅을 구성하는 방법은?",
    "options": {
      "A": "Transit Gateway 경로 테이블에 기본 경로를 추가하여 보조 SD-WAN 가상 어플라이언스를 가리킵니다. 더 구체적인 경로를 추가하여 기본 SD-WAN 가상 어플라이언스를 가리킵니다.",
      "B": "기본 SD-WAN 가상 어플라이언스의 Transit Gateway 방향 BGP 경로에 BGP 커뮤니티 태그 7224:7300을 구성합니다.",
      "C": "보조 SD-WAN 가상 어플라이언스의 Transit Gateway 방향 BGP 경로에 AS_PATH Prepend 속성을 구성합니다.",
      "D": "Transit Gateway Connect에서 동일한 비용 다중 경로(ECMP) 라우팅을 비활성화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption C: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A company has deployed a software-defined WAN (SD-WAN) solution to interconnect all of its offices. The company is migrating workloads to AWS and needs to extend its SD-WAN solution to support connectivity to these workloads. A network engineer plans to deploy AWS Transit Gateway Connect and two SD-WAN virtual appliances to provide this connectivity. According to company policies, only a single SD-WAN virtual appliance can handle traffic from AWS workloads at a given time. How should the network engineer configure routing to meet these requirements?",
    "en_opts": {
      "A": "Add a static default route in the transit gateway route table to point to the secondary SD-WAN virtual appliance. Add routes that are more specific to point to the primary SD-WAN virtual appliance.",
      "B": "Configure the BGP community tag 7224:7300 on the primary SD-WAN virtual appliance for BGP routes toward the transit gateway.",
      "C": "Configure the AS_PATH prepend attribute on the secondary SD-WAN virtual appliance for BGP routes toward the transit gateway.",
      "D": "Disable equal-cost multi-path (ECMP) routing on the transit gateway for Transit Gateway Connect."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103137-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 39,
    "question": "회사가 많은 SD-WAN(소프트웨어 정의 WAN) 사이트를 배포할 계획입니다. AWS Transit Gateway를 사용 중이며 필요한 AWS 리전에 Transit Gateway를 배포했습니다. 네트워크 엔지니어는 SD-WAN 허브 가상 어플라이언스를 Transit Gateway에 연결된 VPC에 배포해야 합니다. 솔루션은 SD-WAN 허브 가상 어플라이언스에서 Transit Gateway에 연결된 다른 VPC로 최소 5Gbps의 처리량을 지원해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SD-WAN 허브 가상 어플라이언스용 새 VPC를 생성합니다. SD-WAN 허브 가상 어플라이언스와 Transit Gateway 사이에 두 개의 IPsec VPN 연결을 생성합니다. IPsec VPN 연결을 통해 BGP를 구성합니다.",
      "B": "Transit Gateway에 새 CIDR 블록을 할당합니다. SD-WAN 허브 가상 어플라이언스용 새 VPC를 생성합니다. VPC 어태치먼트로 새 VPC를 Transit Gateway에 어태치합니다. Transit Gateway Connect 어태치먼트를 추가합니다. Connect 피어를 생성하고 GRE 및 BGP 파라미터를 지정합니다. SD-WAN 허브 가상 어플라이언스에서 Transit Gateway로 라우팅하기 위한 적절한 VPC의 라우트를 생성합니다.",
      "C": "SD-WAN 허브 가상 어플라이언스용 새 VPC를 생성합니다. VPC 어태치먼트로 새 VPC를 Transit Gateway에 어태치합니다. SD-WAN 허브 가상 어플라이언스와 Transit Gateway 사이에 두 개의 IPsec VPN 연결을 생성합니다. IPsec VPN 연결을 통해 BGP를 구성합니다.",
      "D": "Transit Gateway에 새 CIDR 블록을 할당합니다. SD-WAN 허브 가상 어플라이언스용 새 VPC를 생성합니다. VPC 어태치먼트로 새 VPC를 Transit Gateway에 어태치합니다. Transit Gateway Connect 어태치먼트를 추가합니다. Connect 피어를 생성하고 VXLAN 및 BGP 파라미터를 지정합니다. SD-WAN 허브 가상 어플라이언스에서 Transit Gateway로 라우팅하기 위한 적절한 VPC의 라우트를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption B: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A company is planning to deploy many software-defined WAN (SD-WAN) sites. The company is using AWS Transit Gateway and has deployed a transit gateway in the required AWS Region. A network engineer needs to deploy the SD-WAN hub virtual appliance into a VPC that is connected to the transit gateway. The solution must support at least 5 Gbps of throughput from the SD-WAN hub virtual appliance to other VPCs that are attached to the transit gateway. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a new VPC for the SD-WAN hub virtual appliance. Create two IPsec VPN connections between the SD-WAN hub virtual appliance and the transit gateway. Configure BGP over the IPsec VPN connections",
      "B": "Assign a new CIDR block to the transit gateway. Create a new VPC for the SD-WAN hub virtual appliance. Attach the new VPC to the transit gateway with a VPC attachment. Add a transit gateway Connect attachment. Create a Connect peer and specify the GRE and BGP parameters. Create a route in the appropriate VPC for the SD-WAN hub virtual appliance to route to the transit gateway.",
      "C": "Create a new VPC for the SD-WAN hub virtual appliance. Attach the new VPC to the transit gateway with a VPC attachment. Create two IPsec VPN connections between the SD-WAN hub virtual appliance and the transit gateway. Configure BGP over the IPsec VPN connections.",
      "D": "Assign a new CIDR block to the transit gateway. Create a new VPC for the SD-WAN hub virtual appliance. Attach the new VPC to the transit gateway with a VPC attachment. Add a transit gateway Connect attachment. Create a Connect peer and specify the VXLAN and BGP parameters. Create a route in the appropriate VPC for the SD-WAN hub virtual appliance to route to the transit gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103138-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 40,
    "question": "회사가 AWS에 새 애플리케이션을 배포합니다. 애플리케이션은 동적 멀티캐스팅을 사용합니다. 5개의 VPC가 모두 Transit Gateway에 어태치되어 있습니다. 각 VPC의 Amazon EC2 인스턴스는 멀티캐스트 전송을 수신하도록 동적으로 등록할 수 있어야 합니다. 네트워크 엔지니어는 이 요구 사항을 충족하기 위해 AWS 리소스를 어떻게 구성해야 합니까?",
    "options": {
      "A": "Transit Gateway 내에 정적 소스 멀티캐스트 도메인을 생성합니다. VPC와 적용 가능한 서브넷을 멀티캐스트 도메인과 연결합니다. 멀티캐스트 발신자의 네트워크 인터페이스를 멀티캐스트 도메인에 등록합니다. 네트워크 ACL을 조정하여 소스에서 모든 수신자로의 UDP 트래픽과 멀티캐스트 그룹 주소로 전송되는 UDP 트래픽을 허용합니다.",
      "B": "Transit Gateway 내에 정적 소스 멀티캐스트 도메인을 생성합니다. VPC와 적용 가능한 서브넷을 멀티캐스트 도메인과 연결합니다. 멀티캐스트 발신자의 네트워크 인터페이스를 멀티캐스트 도메인에 등록합니다. 네트워크 ACL을 조정하여 소스에서 모든 수신자로의 TCP 트래픽과 멀티캐스트 그룹 주소로 전송되는 TCP 트래픽을 허용합니다.",
      "C": "Transit Gateway 내에 인터넷 그룹 관리 프로토콜(IGMP) 멀티캐스트 도메인을 생성합니다. VPC와 적용 가능한 서브넷을 멀티캐스트 도메인과 연결합니다. 멀티캐스트 발신자의 네트워크 인터페이스를 멀티캐스트 도메인에 등록합니다. 네트워크 ACL을 조정하여 소스에서 모든 수신자로의 UDP 트래픽과 멀티캐스트 그룹 주소로 전송되는 UDP 트래픽을 허용합니다.",
      "D": "Transit Gateway 내에 인터넷 그룹 관리 프로토콜(IGMP) 멀티캐스트 도메인을 생성합니다. VPC와 적용 가능한 서브넷을 멀티캐스트 도메인과 연결합니다. 멀티캐스트 발신자의 네트워크 인터페이스를 멀티캐스트 도메인에 등록합니다. 네트워크 ACL을 조정하여 소스에서 모든 수신자로의 TCP 트래픽과 멀티캐스트 그룹 주소로 전송되는 TCP 트래픽을 허용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption C: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A company is deploying a new application on AWS. The application uses dynamic multicasting. The company has five VPCs that are all attached to a transit gateway Amazon EC2 instances in each VPC need to be able to register dynamically to receive a multicast transmission. How should a network engineer configure the AWS resources to meet these requirements?",
    "en_opts": {
      "A": "Create a static source multicast domain within the transit gateway. Associate the VPCs and applicable subnets with the multicast domain. Register the multicast senders' network interface with the multicast domain. Adjust the network ACLs to allow UDP traffic from the source to all receivers and to allow UDP traffic that is sent to the multicast group address.",
      "B": "Create a static source multicast domain within the transit gateway. Associate the VPCs and applicable subnets with the multicast domain. Register the multicast senders' network interface with the multicast domain. Adjust the network ACLs to allow TCP traffic from the source to all receivers and to allow TCP traffic that is sent to the multicast group address.",
      "C": "Create an Internet Group Management Protocol (IGMP) multicast domain within the transit gateway. Associate the VPCs and applicable subnets with the multicast domain. Register the multicast senders' network interface with the multicast domain. Adjust the network ACLs to allow UDP traffic from the source to all receivers and to allow UDP traffic that is sent to the multicast group address.",
      "D": "Create an Internet Group Management Protocol (IGMP) multicast domain within the transit gateway. Associate the VPCs and applicable subnets with the multicast domain. Register the multicast senders' network interface with the multicast domain. Adjust the network ACLs to allow TCP traffic from the source to all receivers and to allow TCP traffic that is sent to the multicast group address."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103139-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 41,
    "question": "회사가 ecommerce 웹사이트의 새 기능을 만듭니다. 이 기능들은 여러 마이크로서비스를 사용하며 다양한 경로를 통해 액세스됩니다. 마이크로서비스는 Amazon Elastic Container Service(Amazon ECS)에서 실행됩니다. 회사는 모든 공개 웹사이트에 HTTPS를 필수로 합니다. 애플리케이션은 고객의 소스 IP 주소가 필요합니다. 네트워크 엔지니어는 이 요구 사항을 충족하는 로드 밸런싱 전략을 구현해야 합니다. 네트워크 엔지니어가 이 목표를 달성하기 위해 취해야 할 조치의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Network Load Balancer 사용",
      "B": "X-Forwarded-For 헤더를 사용하여 클라이언트 IP 주소 검색",
      "C": "AWS App Mesh 로드 밸런싱 사용",
      "D": "X-IP-Source 헤더를 사용하여 클라이언트 IP 주소 검색",
      "E": "Application Load Balancer 사용"
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption BE: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A company is creating new features for its ecommerce website. These features will use several microservices that are accessed through different paths. The microservices will run on Amazon Elastic Container Service (Amazon ECS). The company requires the use of HTTPS for all of its public websites. The application requires the customer's source IP addresses. A network engineer must implement a load balancing strategy that meets these requirements. Which combination of actions should the network engineer take to accomplish this goal? (Choose two.)",
    "en_opts": {
      "A": "Use a Network Load Balancer",
      "B": "Retrieve client IP addresses by using the X-Forwarded-For header",
      "C": "Use AWS App Mesh load balancing",
      "D": "Retrieve client IP addresses by using the X-IP-Source header",
      "E": "Use an Application Load Balancer."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103140-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 42,
    "question": "회사가 컨테이너화된 애플리케이션을 AWS로 마이그레이션합니다. 아키텍처에서 회사는 Network Load Balancer(NLB)를 사용하여 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터의 프론트엔드 포드로 트래픽을 분산하는 수신 VPC를 보유합니다. 애플리케이션 프론트엔드는 요청자가 누구인지 결정하고 10개의 서비스 VPC 중 1개로 트래픽을 전송합니다. 각 서비스 VPC에는 EKS 클러스터의 서비스 포드로 트래픽을 분산하는 NLB가 포함됩니다. 회사는 전체 비용에 대해 걱정합니다. 사용자 트래픽은 매월 10TB 이상의 데이터를 수신 VPC에서 서비스 VPC로 전송할 책임이 있습니다. 네트워크 엔지니어는 VPC 간 통신을 설계하는 방법을 권장해야 합니다. 가장 낮은 비용으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Transit Gateway를 생성합니다. 각 VPC를 Transit Gateway에 피어링합니다. 수신 VPC에서 서비스 VPC의 NLB로의 교차 AZ 트래픽을 최소화하기 위해 영역별 DNS 이름을 사용합니다.",
      "B": "수신 VPC의 모든 Availability Zone에 AWS PrivateLink 엔드포인트를 생성합니다. 각 PrivateLink 엔드포인트는 서비스 VPC의 NLB의 영역별 DNS 항목을 가리킵니다.",
      "C": "수신 VPC와 10개의 서비스 VPC 각각 사이에 VPC 피어링 연결을 생성합니다. 수신 VPC에서 서비스 VPC의 NLB로의 교차 AZ 트래픽을 최소화하기 위해 영역별 DNS 이름을 사용합니다.",
      "D": "Transit Gateway를 생성합니다. 각 VPC를 Transit Gateway에 피어링합니다. Transit Gateway에서 교차 AZ 로드 밸런싱을 끕니다. 서비스 VPC의 NLB에 지역별 DNS 이름을 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption C: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A company is migrating its containerized application to AWS. For the architecture the company will have an ingress VPC with a Network Load Balancer (NLB) to distribute the traffic to front-end pods in an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The front end of the application will determine which user is requesting access and will send traffic to 1 of 10 services VPCs. Each services VPC will include an NLB that distributes traffic to the services pods in an EKS cluster. The company is concerned about overall cost. User traffic will be responsible for more than 10 TB of data transfer from the ingress VPC to services VPCs every month. A network engineer needs to recommend how to design the communication between the VPCs. Which solution will meet these requirements at the LOWEST cost?",
    "en_opts": {
      "A": "Create a transit gateway. Peer each VPC to the transit gateway. Use zonal DNS names for the NLB in the services VPCs to minimize cross-AZ traffic from the ingress VPC to the services VPCs.",
      "B": "Create an AWS PrivateLink endpoint in every Availability Zone in the ingress VPC. Each PrivateLink endpoint will point to the zonal DNS entry of the NLB in the services VPCs.",
      "C": "Create a VPC peering connection between the ingress VPC and each of the 10 services VPCs. Use zonal DNS names for the NLB in the services VPCs to minimize cross-AZ traffic from the ingress VPC to the services VPCs.",
      "D": "Create a transit gateway. Peer each VPC to the transit gateway. Turn off cross-AZ load balancing on the transit gateway. Use Regional DNS names for the NLB in the services VPCs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103142-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 43,
    "question": "회사는 중앙 집중식 공유 서비스 VPC의 여러 Availability Zone에 상태 저장 보안 어플라이언스를 배포했습니다. AWS 환경에는 애플리케이션 VPC 및 공유 서비스 VPC에 어태치된 Transit Gateway가 포함됩니다. 애플리케이션 VPC는 여러 Availability Zone의 프라이빗 서브넷에 배포된 워크로드를 보유합니다. 공유 서비스 VPC의 상태 저장 어플라이언스는 모든 동쪽-서쪽(VPC 간) 트래픽을 검사합니다. 사용자는 다양한 Availability Zone 간의 VPC 간 트래픽이 끊어지고 있음을 보고합니다. 네트워크 엔지니어는 인터넷 제어 메시지 프로토콜(ICMP) 핑을 발급하여 애플리케이션 VPC 전체의 다양한 Availability Zone 간의 워크로드 간의 트래픽이 끊어지는 것을 확인했습니다. 네트워크 엔지니어는 보안 그룹, 상태 저장 디바이스 구성 및 네트워크 ACL을 원인으로 배제했습니다. 트래픽이 끊어지는 원인은 무엇입니까?",
    "options": {
      "A": "상태 저장 어플라이언스와 Transit Gateway 어태치먼트가 공유 서비스 VPC의 별도 서브넷에 배포됩니다.",
      "B": "공유 서비스 VPC로의 Transit Gateway 어태치먼트에서 어플라이언스 모드를 활성화하지 않았습니다.",
      "C": "상태 저장 어플라이언스와 Transit Gateway 어태치먼트가 공유 서비스 VPC의 동일한 서브넷에 배포됩니다.",
      "D": "애플리케이션 VPC로의 Transit Gateway 어태치먼트에서 어플라이언스 모드를 활성화하지 않았습니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption B: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A company has stateful security appliances that are deployed to multiple Availability Zones in a centralized shared services VPC. The AWS environment includes a transit gateway that is attached to application VPCs and the shared services VPC. The application VPCs have workloads that are deployed in private subnets across multiple Availability Zones. The stateful appliances in the shared services VPC inspect all east west (VPC-to-VPC) traffic. Users report that inter-VPC traffic to different Availability Zones is dropping. A network engineer verified this claim by issuing Internet Control Message Protocol (ICMP) pings between workloads in different Availability Zones across the application VPCs. The network engineer has ruled out security groups, stateful device configurations and network ACLs as the cause of the dropped traffic. What is causing the traffic to drop?",
    "en_opts": {
      "A": "The stateful appliances and the transit gateway attachments are deployed in a separate subnet in the shared services VPC.",
      "B": "Appliance mode is not enabled on the transit gateway attachment to the shared services VPC.",
      "C": "The stateful appliances and the transit gateway attachments are deployed in the same subnet in the shared services VPC.",
      "D": "Appliance mode is not enabled on the transit gateway attachment to the application VPCs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103143-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 44,
    "question": "회사는 us-east-1 리전의 모든 Availability Zone에서 두 개의 프로덕션 VPC에서 실행되는 수백 개의 Amazon EC2 인스턴스를 보유합니다. 프로덕션 VPC는 VPC A와 VPC B로 명명됩니다. 새로운 보안 규정에 따르면 프로덕션 VPC 간의 모든 트래픽은 최종 목적지로 라우팅되기 전에 검사를 받아야 합니다. 회사는 상태 저장 방화벽 어플라이언스와 VPC 어태치먼트가 있는 Transit Gateway를 포함하는 새로운 공유 VPC를 배포하여 VPC A와 VPC B 사이의 트래픽을 방화벽 어플라이언스를 통해 라우팅합니다. 테스트 중 회사는 Transit Gateway가 두 Availability Zone 사이의 트래픽일 때마다 트래픽을 드롭하는 것을 발견합니다. 네트워크 엔지니어가 최소 관리 오버헤드로 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "공유 VPC에서 VPC 어태치먼트를 VPN 어태치먼트로 교체합니다. Transit Gateway와 방화벽 어플라이언스 사이에 VPN 터널을 생성합니다. BGP를 구성합니다.",
      "B": "VPC A 및 VPC B의 VPC 어태치먼트에서 Transit Gateway 어플라이언스 모드를 활성화합니다.",
      "C": "공유 VPC의 VPC 어태치먼트에서 Transit Gateway 어플라이언스 모드를 활성화합니다.",
      "D": "공유 VPC에서 VPC A로의 하나의 VPC 피어링 연결과 VPC B로의 다른 VPC 피어링 연결을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption C: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A company has hundreds of Amazon EC2 instances that are running in two production VPCs across all Availability Zones in the us-east-1 Region. The production VPCs are named VPC A and VPC B. A new security regulation requires all traffic between production VPCs to be inspected before the traffic is routed to its final destination. The company deploys a new shared VPC that contains a stateful firewall appliance and a transit gateway with a VPC attachment across all VPCs to route traffic between VPC A and VPC B through the firewall appliance for inspection. During testing, the company notices that the transit gateway is dropping the traffic whenever the traffic is between two Availability Zones. What should a network engineer do to fix this issue with the LEAST management overhead?",
    "en_opts": {
      "A": "In the shared VPC, replace the VPC attachment with a VPN attachment. Create a VPN tunnel between the transit gateway and the firewall appliance. Configure BGP.",
      "B": "Enable transit gateway appliance mode on the VPC attachment in VPC A and VPC B.",
      "C": "Enable transit gateway appliance mode on the VPC attachment in the shared VPC.",
      "D": "In the shared VPC, configure one VPC peering connection to VPC A and another VPC peering connection to VPC B."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103145-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 45,
    "question": "회사는 Application Load Balancer 뒤의 Amazon EC2 인스턴스 플릿에 중요한 애플리케이션을 배포했습니다. 애플리케이션은 항상 공인 인터넷의 포트 443에서 도달할 수 있어야 합니다. 애플리케이션은 EC2 보안 그룹의 잘못된 변경으로 인한 중단이 발생했습니다. 네트워크 엔지니어는 보안 그룹이 변경될 때마다 공인 인터넷과 EC2 인스턴스 간의 네트워크 연결을 확인하는 자동화된 방법을 구현해야 합니다. 솔루션은 변경이 연결에 영향을 미칠 때 네트워크 엔지니어에게 알림을 보내야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 EC2 인스턴스의 탄력적 네트워크 인터페이스에서 VPC Flow Logs를 활성화하여 포트 443의 REJECT 트래픽을 캡처합니다. 흐름 로그 레코드를 Amazon CloudWatch Logs의 로그 그룹에 게시합니다. 거부된 트래픽에 대해 로그 그룹에 대한 CloudWatch Logs 메트릭 필터를 생성합니다. 네트워크 엔지니어에게 알림을 표시하는 알람을 생성합니다.",
      "B": "각 EC2 인스턴스의 탄력적 네트워크 인터페이스에서 VPC Flow Logs를 활성화하여 포트 443의 모든 트래픽을 캡처합니다. 흐름 로그 레코드를 Amazon CloudWatch Logs의 로그 그룹에 게시합니다. 모든 트래픽에 대해 로그 그룹에 대한 CloudWatch Logs 메트릭 필터를 생성합니다. 네트워크 엔지니어에게 알림을 표시하는 알람을 생성합니다.",
      "C": "포트 443에 VPC Reachability Analyzer 경로를 생성합니다. 보안 그룹을 소스로 지정합니다. EC2 인스턴스를 대상으로 지정합니다. 보안 그룹의 변경이 연결에 영향을 미칠 때 네트워크 엔지니어에게 알릴 Amazon Simple Notification Service(Amazon SNS) 토픽을 생성합니다. Reachability Analyzer를 시작하고 분석이 실패할 경우 SNS 토픽에 메시지를 게시하는 AWS Lambda 함수를 생성합니다. 보안 그룹이 변경될 때 Lambda 함수를 호출하도록 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다.",
      "D": "포트 443에 VPC Reachability Analyzer 경로를 생성합니다. VPC의 인터넷 게이트웨이를 소스로 지정합니다. EC2 인스턴스를 대상으로 지정합니다. 보안 그룹의 변경이 연결에 영향을 미칠 때 네트워크 엔지니어에게 알릴 Amazon Simple Notification Service(Amazon SNS) 토픽을 생성합니다. Reachability Analyzer를 시작하고 분석이 실패할 경우 SNS 토픽에 메시지를 게시하는 AWS Lambda 함수를 생성합니다. 보안 그룹이 변경될 때 Lambda 함수를 호출하도록 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption D: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A company has deployed a critical application on a fleet of Amazon EC2 instances behind an Application Load Balancer. The application must always be reachable on port 443 from the public internet. The application recently had an outage that resulted from an incorrect change to the EC2 security group. A network engineer needs to automate a way to verify the network connectivity between the public internet and the EC2 instances whenever a change is made to the security group. The solution also must notify the network engineer when the change affects the connection. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Enable VPC Flow Logs on the elastic network interface of each EC2 instance to capture REJECT traffic on port 443. Publish the flow log records to a log group in Amazon CloudWatch Logs. Create a CloudWatch Logs metric filter for the log group for rejected traffic. Create an alarm to notify the network engineer.",
      "B": "Enable VPC Flow Logs on the elastic network interface of each EC2 instance to capture all traffic on port 443. Publish the flow log records to a log group in Amazon CloudWatch Logs. Create a CloudWatch Logs metric filter for the log group for all traffic. Create an alarm to notify the network engineer",
      "C": "Create a VPC Reachability Analyzer path on port 443. Specify the security group as the source. Specify the EC2 instances as the destination. Create an Amazon Simple Notification Service (Amazon SNS) topic to notify the network engineer when a change to the security group affects the connection. Create an AWS Lambda function to start Reachability Analyzer and to publish a message to the SNS topic in case the analyses fail Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke the Lambda function when a change to the security group occurs.",
      "D": "Create a VPC Reachability Analyzer path on port 443. Specify the internet gateway of the VPC as the source. Specify the EC2 instances as the destination. Create an Amazon Simple Notification Service (Amazon SNS) topic to notify the network engineer when a change to the security group affects the connection. Create an AWS Lambda function to start Reachability Analyzer and to publish a message to the SNS topic in case the analyses fail. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke the Lambda function when a change to the security group occurs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103149-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 46,
    "question": "보안 팀이 회사의 AWS 배포 감사를 수행합니다. 보안 팀은 두 애플리케이션이 네트워크 ACL 및 보안 그룹에 의해 차단되어야 하는 리소스에 액세스할 수 있음을 우려합니다. 애플리케이션은 Amazon VPC Container Network Interface(CNI) 플러그인용 Kubernetes를 사용하는 두 개의 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터에 배포됩니다. 클러스터는 동일한 VPC 내의 별도 서브넷에 있으며 Cluster Autoscaler가 구성되어 있습니다. 보안 팀은 어떤 POD IP 주소가 VPC 전체에서 어떤 서비스와 통신하는지 확인해야 합니다. 보안 팀은 흐름 로그의 수를 제한하고 두 애플리케이션의 트래픽만 검사하고 싶어합니다. 이 요구 사항을 최소한의 운영 오버헤드로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기본 형식으로 VPC 흐름 로그를 생성합니다. EKS 노드에서만 흐름 로그를 수집하도록 필터를 생성합니다. srcaddr 필드와 dstaddr 필드를 포함합니다.",
      "B": "사용자 지정 형식으로 VPC 흐름 로그를 생성합니다. EKS 노드를 리소스로 설정합니다. pkt-srcaddr 필드와 pkt-dstaddr 필드를 포함합니다.",
      "C": "사용자 지정 형식으로 VPC 흐름 로그를 생성합니다. 애플리케이션 서브넷을 리소스로 설정합니다. pkt-srcaddr 필드와 pkt-dstaddr 필드를 포함합니다.",
      "D": "사용자 지정 형식으로 VPC 흐름 로그를 생성합니다. EKS 노드에서만 흐름 로그를 수집하도록 필터를 생성합니다. pkt-srcaddr 필드와 pkt-dstaddr 필드를 포함합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption C: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A security team is performing an audit of a company's AWS deployment. The security team is concerned that two applications might be accessing resources that should be blocked by network ACLs and security groups. The applications are deployed across two Amazon Elastic Kubernetes Service (Amazon EKS) clusters that use the Amazon VPC Container Network Interface (CNI) plugin for Kubernetes. The clusters are in separate subnets within the same VPC and have a Cluster Autoscaler configured. The security team needs to determine which POD IP addresses are communicating with which services throughout the VPC. The security team wants to limit the number of flow logs and wants to examine the traffic from only the two applications. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create VPC flow logs in the default format. Create a filter to gather flow logs only from the EKS nodes. Include the srcaddr field and the dstaddr field in the flow logs.",
      "B": "Create VPC flow logs in a custom format. Set the EKS nodes as the resource Include the pkt-srcaddr field and the pkt-dstaddr field in the flow logs.",
      "C": "Create VPC flow logs in a custom format. Set the application subnets as resources. Include the pkt-srcaddr field and the pkt-dstaddr field in the flow logs.",
      "D": "Create VPC flow logs in a custom format. Create a filter to gather flow logs only from the EKS nodes. Include the pkt-srcaddr field and the pkt-dstaddr field in the flow logs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103151-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 47,
    "question": "데이터 분석 회사는 병렬 데이터 처리용 100노드 고성능 컴퓨팅(HPC) 클러스터를 보유하고 있으며 AWS Cloud의 VPC에서 호스팅됩니다. 데이터 처리 워크플로우의 일부로 HPC 클러스터는 Amazon RDS 데이터베이스, Amazon S3 버킷 및 AWS Direct Connect를 통해 액세스 가능한 온프레미스 데이터 저장소를 해석하고 연결하기 위해 여러 DNS 쿼리를 수행해야 합니다. HPC 클러스터는 연중 말 이벤트 중 크기가 5~7배 증가할 수 있습니다. 회사는 VPC용 기본 DNS 서버로 두 개의 Amazon EC2 인스턴스를 사용 중입니다. EC2 인스턴스는 Amazon Route 53 호스팅 도메인에 대해 기본 VPC 리졸버로 쿼리를 전달하고 온프레미스 호스팅 도메인 이름에 대해 온프레미스 DNS 서버로 쿼리를 전달하도록 구성됩니다. 회사는 작업 실패를 발견하고 HPC 클러스터 노드가 RDS 및 S3 버킷 엔드포인트를 확인하려고 할 때 DNS 쿼리가 실패했음을 확인합니다. 네트워크 엔지니어가 DNS 서비스를 가장 확장 가능한 방식으로 제공하기 위해 어떤 아키텍처 변경을 구현해야 합니까?",
    "options": {
      "A": "두 개의 추가 EC2 인스턴스를 추가하여 DNS 서비스를 확장합니다. HPC 클러스터 노드의 절반을 재구성하여 이러한 새로운 DNS 서버를 사용합니다. HPC 클러스터 크기가 증가함에 따라 추가 EC2 인스턴스 기반 DNS 서버를 추가하여 확장할 계획을 세웁니다.",
      "B": "회사가 DNS 서버로 사용 중인 기존 EC2 인스턴스를 확장합니다. 인스턴스 크기를 현재 DNS 로드 및 향후 예상 로드에 맞추기 위해 가능한 가장 큰 인스턴스 크기로 변경합니다.",
      "C": "Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 온프레미스 호스팅 도메인 이름에 대해 온프레미스 DNS 서버로 쿼리를 전달하는 Route 53 Resolver 규칙을 생성합니다. HPC 클러스터 노드를 재구성하여 EC2 인스턴스 기반 DNS 서버 대신 기본 VPC 리졸버를 사용합니다. EC2 인스턴스를 종료합니다.",
      "D": "Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 온프레미스 DNS 서버에 규칙을 생성하여 기본 VPC 리졸버로 쿼리를 전달합니다. HPC 클러스터 노드를 재구성하여 모든 DNS 쿼리를 온프레미스 DNS 서버로 전달합니다. EC2 인스턴스를 종료합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption C: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A data analytics company has a 100-node high performance computing (HPC) cluster. The HPC cluster is for parallel data processing and is hosted in a VPC in the AWS Cloud. As part of the data processing workflow, the HPC cluster needs to perform several DNS queries to resolve and connect to Amazon RDS databases, Amazon S3 buckets, and on-premises data stores that are accessible through AWS Direct Connect. The HPC cluster can increase in size by five to seven times during the company's peak event at the end of the year. The company is using two Amazon EC2 instances as primary DNS servers for the VPC. The EC2 instances are configured to forward queries to the default VPC resolver for Amazon Route 53 hosted domains and to the on-premises DNS servers for other on-premises hosted domain names. The company notices job failures and finds that DNS queries from the HPC cluster nodes failed when the nodes tried to resolve RDS and S3 bucket endpoints. Which architectural change should a network engineer implement to provide the DNS service in the MOST scalable way?",
    "en_opts": {
      "A": "Scale out the DNS service by adding two additional EC2 instances in the VPC. Reconfigure half of the HPC cluster nodes to use these new DNS servers. Plan to scale out by adding additional EC2 instance-based DNS servers in the future as the HPC cluster size grows.",
      "B": "Scale up the existing EC2 instances that the company is using as DNS servers. Change the instance size to the largest possible instance size to accommodate the current DNS load and the anticipated load in the future.",
      "C": "Create Route 53 Resolver outbound endpoints. Create Route 53 Resolver rules to forward queries to on-premises DNS servers for on premises hosted domain names. Reconfigure the HPC cluster nodes to use the default VPC resolver instead of the EC2 instance-based DNS servers. Terminate the EC2 instances.",
      "D": "Create Route 53 Resolver inbound endpoints. Create rules on the on-premises DNS servers to forward queries to the default VPC resolver. Reconfigure the HPC cluster nodes to forward all DNS queries to the on-premises DNS servers. Terminate the EC2 instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103152-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 48,
    "question": "회사의 네트워크 엔지니어는 두 온프레미스 데이터 센터에서 AWS로의 활성-패시브 연결을 설계합니다. 회사는 온프레미스 데이터 센터와 AWS 사이에 AWS Direct Connect 연결을 설정했습니다. 각 위치에서 회사는 Direct Connect 게이트웨이에 연결되는 Transit VIF를 사용하고 있으며, 이는 Transit Gateway와 연결됩니다. 네트워크 엔지니어는 AWS에서 데이터 센터로의 트래픽이 먼저 기본 데이터 센터로 라우팅되고 중단이 발생한 경우에만 장애 조치 데이터 센터로 라우팅되도록 해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기본 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:7100으로 설정합니다. 장애 조치 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:7300으로 설정합니다.",
      "B": "기본 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:7300으로 설정합니다. 장애 조치 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:7100으로 설정합니다.",
      "C": "기본 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:9300으로 설정합니다. 장애 조치 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:9100으로 설정합니다.",
      "D": "기본 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:9100으로 설정합니다. 장애 조치 데이터 센터의 모든 접두사에 대해 BGP 커뮤니티 태그를 7224:9300으로 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption B: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A company's network engineer is designing an active-passive connection to AWS from two on-premises data centers. The company has set up AWS Direct Connect connections between the on-premises data centers and AWS. From each location, the company is using a transit VIF that connects to a Direct Connect gateway that is associated with a transit gateway. The network engineer must ensure that traffic from AWS to the data centers is routed first to the primary data center. The traffic should be routed to the failover data center only in the case of an outage. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Set the BGP community tag for all prefixes from the primary data center to 7224:7100. Set the BGP community tag for all prefixes from the failover data center to 7224:7300",
      "B": "Set the BGP community tag for all prefixes from the primary data center to 7224:7300. Set the BGP community tag for all prefixes from the failover data center to 7224:7100",
      "C": "Set the BGP community tag for all prefixes from the primary data center to 7224:9300. Set the BGP community tag for all prefixes from the failover data center to 7224:9100",
      "D": "Set the BGP community tag for all prefixes from the primary data center to 7224:9100. Set the BGP community tag for all prefixes from the failover data center to 7224:9300"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103154-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 49,
    "question": "부동산 회사는 부동산 중개인이 다양한 속성의 사진과 비디오를 업로드할 수 있도록 내부 애플리케이션을 구축합니다. 애플리케이션은 이러한 사진과 비디오를 Amazon S3 버킷에 객체로 저장하고 Amazon DynamoDB를 사용하여 해당 메타데이터를 저장합니다. S3 버킷은 새 객체 업로드에 대한 모든 PUT 이벤트를 Amazon Simple Queue Service(Amazon SQS) 큐에 게시하도록 구성됩니다. Amazon EC2 인스턴스의 컴퓨팅 클러스터는 SQS 큐를 폴링하여 새로 업로드된 객체를 찾습니다. 클러스터는 새로운 객체를 검색하고, 소유권 이미지 및 비디오 인식 및 분류를 수행하고, DynamoDB의 메타데이터를 업데이트하고, 새로운 워터마크된 객체로 객체를 대체합니다. 회사는 EC2 인스턴스에 공용 IP 주소를 원하지 않습니다. 애플리케이션 사용량이 증가함에 따라 이 요구 사항을 가장 비용 효율적으로 충족하는 네트워킹 설계 솔루션은 무엇입니까?",
    "options": {
      "A": "공용 서브넷에 EC2 인스턴스를 배치합니다. EC2 인스턴스를 시작할 때 공용 IP 자동 할당 옵션을 비활성화합니다. 인터넷 게이트웨이를 생성합니다. 인터넷 게이트웨이를 VPC에 어태치합니다. 공용 서브넷의 라우트 테이블에서 인터넷 게이트웨이를 가리키는 기본 라우트를 추가합니다.",
      "B": "프라이빗 서브넷에 EC2 인스턴스를 배치합니다. 같은 Availability Zone의 공용 서브넷에 NAT 게이트웨이를 생성합니다. 인터넷 게이트웨이를 생성합니다. 인터넷 게이트웨이를 VPC에 어태치합니다. 공용 서브넷의 라우트 테이블에서 인터넷 게이트웨이를 가리키는 기본 라우트를 추가합니다.",
      "C": "프라이빗 서브넷에 EC2 인스턴스를 배치합니다. Amazon SQS용 인터페이스 VPC 엔드포인트를 생성합니다. Amazon S3 및 DynamoDB용 게이트웨이 VPC 엔드포인트를 생성합니다.",
      "D": "프라이빗 서브넷에 EC2 인스턴스를 배치합니다. Amazon SQS용 게이트웨이 VPC 엔드포인트를 생성합니다. Amazon S3 및 DynamoDB용 인터페이스 VPC 엔드포인트를 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption C: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A real estate company is building an internal application so that real estate agents can upload photos and videos of various properties. The application will store these photos and videos in an Amazon S3 bucket as objects and will use Amazon DynamoDB to store corresponding metadata. The S3 bucket will be configured to publish all PUT events for new object uploads to an Amazon Simple Queue Service (Amazon SQS) queue. A compute cluster of Amazon EC2 instances will poll the SQS queue to find out about newly uploaded objects. The cluster will retrieve new objects, perform proprietary image and video recognition and classification update metadata in DynamoDB and replace the objects with new watermarked objects. The company does not want public IP addresses on the EC2 instances. Which networking design solution will meet these requirements MOST cost-effectively as application usage increases?",
    "en_opts": {
      "A": "Place the EC2 instances in a public subnet. Disable the Auto-assign Public IP option while launching the EC2 instances. Create an internet gateway. Attach the internet gateway to the VPC. In the public subnet's route table, add a default route that points to the internet gateway.",
      "B": "Place the EC2 instances in a private subnet. Create a NAT gateway in a public subnet in the same Availability Zone. Create an internet gateway. Attach the internet gateway to the VPC. In the public subnet's route table, add a default route that points to the internet gateway",
      "C": "Place the EC2 instances in a private subnet. Create an interface VPC endpoint for Amazon SQS. Create gateway VPC endpoints for Amazon S3 and DynamoDB.",
      "D": "Place the EC2 instances in a private subnet. Create a gateway VPC endpoint for Amazon SQS. Create interface VPC endpoints for Amazon S3 and DynamoDB."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103155-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 50,
    "question": "회사는 미국(US)의 온프레미스 데이터 센터와 us-east-1 리전의 워크로드 사이에 AWS Direct Connect 연결을 보유하고 있습니다. 연결은 Transit VIF를 사용하여 데이터 센터를 us-east-1의 Transit Gateway에 연결합니다. 회사가 England의 새 온프레미스 데이터 센터와 함께 유럽에 새 사무실을 개설합니다. Direct Connect 연결은 새 데이터 센터를 eu-west-2 리전의 단일 VPC에서 실행 중인 일부 워크로드와 연결합니다. 회사는 미국 데이터 센터와 us-east-1 및 유럽 데이터 센터 및 eu-west-2 간에 완전한 연결을 필요로 합니다. 네트워크 엔지니어는 가장 낮은 지연 시간으로 데이터 센터와 리전 간에 완전한 연결을 설정해야 합니다. 네트워크 엔지니어는 이 요구 사항을 충족하기 위해 네트워크 아키텍처를 어떻게 설계해야 합니까?",
    "options": {
      "A": "eu-west-2의 VPC를 Direct Connect 게이트웨이 및 프라이빗 VIF를 사용하여 유럽 데이터 센터와 연결합니다. us-east-1의 Transit Gateway를 동일한 Direct Connect 게이트웨이와 연결합니다. Transit VIF 및 프라이빗 VIF에 대해 SiteLink를 활성화합니다.",
      "B": "eu-west-2의 VPC를 새 Transit Gateway에 연결합니다. 유럽 데이터 센터를 Direct Connect 게이트웨이 및 새 Transit VIF를 사용하여 새 Transit Gateway에 연결합니다. us-east-1의 Transit Gateway를 동일한 Direct Connect 게이트웨이와 연결합니다. 두 Transit VIF에 대해 SiteLink를 활성화합니다. 두 Transit Gateway를 피어링합니다.",
      "C": "eu-west-2의 VPC를 새 Transit Gateway에 연결합니다. 유럽 데이터 센터를 Direct Connect 게이트웨이 및 새 Transit VIF를 사용하여 새 Transit Gateway에 연결합니다. 새 Direct Connect 게이트웨이를 생성합니다. us-east-1의 Transit Gateway를 새 Direct Connect 게이트웨이와 연결합니다. 두 Transit VIF에 대해 SiteLink를 활성화합니다. 두 Transit Gateway를 피어링합니다.",
      "D": "eu-west-2의 VPC를 Direct Connect 게이트웨이 및 프라이빗 VIF를 사용하여 유럽 데이터 센터와 연결합니다. 새 Direct Connect 게이트웨이를 생성합니다. us-east-1의 Transit Gateway를 새 Direct Connect 게이트웨이와 연결합니다. Transit VIF 및 프라이빗 VIF에 대해 SiteLink를 활성화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ [Service/Concept 1] — 설명\n▸ [Service/Concept 2] — 설명\n▸ [Service/Concept 3] — 설명\n▸ [Service/Concept 4] — 설명\n\n【정답 포인트】\n▸ [Key Point 1] — 정답 이유\n▸ [Key Point 2] — 정답 이유\n▸ [Key Point 3] — 정답 이유\n\nOption B: [정답 옵션 상세 설명]\n\n【오답 체크】\n(A) [옵션 A 오답 이유 - 60~100자]\n(B) [옵션 B 오답 이유 - 60~100자]\n(C) [옵션 C 오답 이유 - 60~100자]\n(D) [옵션 D 오답 이유 - 60~100자]\n\n【시험 포인트】\n▸ [시험 패턴 1] — 중요 개념\n▸ [시험 패턴 2] — 중요 개념\n▸ [시험 패턴 3] — 중요 개념",
    "en_q": "A company has an AWS Direct Connect connection between its on-premises data center in the United States (US) and workloads in the us-east-1 Region. The connection uses a transit VIF to connect the data center to a transit gateway in us-east-1. The company is opening a new office in Europe with a new on-premises data center in England. A Direct Connect connection will connect the new data center with some workloads that are running in a single VPC in the eu-west-2 Region. The company needs to connect the US data center and us-east-1 with the Europe data center and eu-west-2. A network engineer must establish full connectivity between the data centers and Regions with the lowest possible latency. How should the network engineer design the network architecture to meet these requirements?",
    "en_opts": {
      "A": "Connect the VPC in eu-west-2 with the Europe data center by using a Direct Connect gateway and a private VIF. Associate the transit gateway in us-east-1 with the same Direct Connect gateway. Enable SiteLink for the transit VIF and the private VIF.",
      "B": "Connect the VPC in eu-west-2 to a new transit gateway. Connect the Europe data center to the new transit gateway by using a Direct Connect gateway and a new transit VIF. Associate the transit gateway in us-east-1 with the same Direct Connect gateway. Enable SiteLink for both transit VIFs. Peer the two transit gateways.",
      "C": "Connect the VPC in eu-west-2 to a new transit gateway. Connect the Europe data center to the new transit gateway by using a Direct Connect gateway and a new transit VIF. Create a new Direct Connect gateway. Associate the transit gateway in us-east-1 with the new Direct Connect gateway. Enable SiteLink for both transit VIFs. Peer the two transit gateways.",
      "D": "Connect the VPC in eu-west-2 with the Europe data center by using a Direct Connect gateway and a private VIF. Create a new Direct Connect gateway. Associate the transit gateway in us-east-1 with the new Direct Connect gateway. Enable SiteLink for the transit VIF and the private VIF."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103156-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 51,
    "question": "네트워크 엔지니어가 프라이빗 서브넷의 VPC에 Amazon EC2 인스턴스를 배포했습니다. VPC에는 공용 서브넷이 없습니다. EC2 인스턴스는 Amazon Simple Queue Service(Amazon SQS) 큐에 메시지를 보내는 애플리케이션 코드를 호스팅합니다. 서브넷은 수정 사항이 없는 기본 네트워크 ACL을 가지고 있습니다. EC2 인스턴스는 수정 사항이 없는 기본 보안 그룹을 가지고 있습니다. SQS 큐가 메시지를 수신하지 않습니다. 다음 중 이 문제의 가능한 원인은 무엇입니까? (2개 선택)",
    "options": {
      "A": "EC2 인스턴스는 Amazon SQS에 대한 쓰기 작업을 허용하는 IAM 역할에 어태치되어 있지 않습니다.",
      "B": "보안 그룹이 Amazon SQS에서 사용하는 IP 주소 범위로의 트래픽을 차단합니다.",
      "C": "Amazon SQS에 대해 구성된 인터페이스 VPC 엔드포인트가 없습니다.",
      "D": "네트워크 ACL이 Amazon SQS에서의 반환 트래픽을 차단합니다.",
      "E": "SQS에서 사용하는 IP 주소 범위에 대해 서브넷 라우트 테이블에 구성된 라우트가 없습니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ VPC 엔드포인트 — AWS 서비스 접근 필수\n▸ IAM Role — SQS 쓰기 권한 필수\n▸ 기본 Network ACL — 모든 트래픽 허용\n▸ 기본 보안 그룹 — 아웃바운드 모두 허용\n\n【정답 포인트】\n▸ \n(A) IAM 권한 없음 = 쓰기 실패\n▸ \n(C) 인터페이스 VPC 엔드포인트 필수 (SQS)\n▸ 프라이빗 서브넷 + VPC 엔드포인트 = 인터넷 불필요\n▸ 기본 Network ACL, 보안 그룹은 정상\n\n【오답 체크】\n(B) 기본 보안 그룹 = 아웃바운드 모두 허용\n(D) 기본 Network ACL = 양방향 허용\n(E) VPC 엔드포인트 경로 자동 추가\n\n【시험 포인트】\n▸ 프라이빗 서브넷 → AWS 서비스 = VPC 엔드포인트\n▸ IAM 권한 + VPC 엔드포인트 조합\n▸ 기본 설정은 정상, 이 두 가지만 확인",
    "en_q": "A network engineer has deployed an Amazon EC2 instance in a private subnet in a VPC. The VPC has no public subnet. The EC2 instance hosts application code that sends messages to an Amazon Simple Queue Service (Amazon SQS) queue. The subnet has the default network ACL with no modification applied. The EC2 instance has the default security group with no modification applied. The SQS queue is not receiving messages. Which of the following are possible causes of this problem? (Choose two.)",
    "en_opts": {
      "A": "The EC2 instance is not attached to an IAM role that allows write operations to Amazon SQS.",
      "B": "The security group is blocking traffic to the IP address range used by Amazon SQS",
      "C": "There is no interface VPC endpoint configured for Amazon SQS",
      "D": "The network ACL is blocking return traffic from Amazon SQS",
      "E": "There is no route configured in the subnet route table for the IP address range used by Amazon SQS"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103159-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 52,
    "question": "네트워크 엔지니어는 AWS 서비스와의 프라이빗 통신을 위한 인터페이스 VPC 엔드포인트를 중앙화하고 관리하는 회사의 접근 방식을 표준화해야 합니다. 회사는 허브 앤 스포크 모델을 통해 AWS 계정 간 VPC 간 연결을 위해 AWS Transit Gateway를 사용합니다. 회사의 네트워크 서비스 팀은 공유 서비스 AWS 계정 내의 모든 Amazon Route 53 영역 및 인터페이스 엔드포인트를 관리해야 합니다. 회사는 공인 인터넷을 통해 트래픽을 보내지 않고 AWS Key Management Service(AWS KMS)에 액세스할 수 있도록 이 중앙 집중식 모델을 사용하기를 원합니다. 네트워크 엔지니어가 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "공유 서비스 계정에서 AWS KMS용 인터페이스 엔드포인트를 생성합니다. 프라이빗 DNS 이름을 비활성화하여 인터페이스 엔드포인트를 수정합니다. 공유 서비스 계정에서 인터페이스 엔드포인트를 가리키는 별칭 레코드가 있는 프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역을 각 AWS 계정의 스포크 VPC와 연결합니다.",
      "B": "공유 서비스 계정에서 AWS KMS용 인터페이스 엔드포인트를 생성합니다. 프라이빗 DNS 이름을 비활성화하여 인터페이스 엔드포인트를 수정합니다. 각 스포크 AWS 계정에서 인터페이스 엔드포인트를 가리키는 별칭 레코드가 있는 프라이빗 호스팅 영역을 생성합니다. 각 프라이빗 호스팅 영역을 공유 서비스 AWS 계정과 연결합니다.",
      "C": "각 스포크 AWS 계정에서 AWS KMS용 인터페이스 엔드포인트를 생성합니다. 프라이빗 DNS 이름을 비활성화하여 각 인터페이스 엔드포인트를 수정합니다. 각 스포크 AWS 계정에서 각 인터페이스 엔드포인트를 가리키는 별칭 레코드가 있는 프라이빗 호스팅 영역을 생성합니다. 각 프라이빗 호스팅 영역을 공유 서비스 AWS 계정과 연결합니다.",
      "D": "각 스포크 AWS 계정에서 AWS KMS용 인터페이스 엔드포인트를 생성합니다. 프라이빗 DNS 이름을 비활성화하여 각 인터페이스 엔드포인트를 수정합니다. 공유 서비스 계정에서 각 인터페이스 엔드포인트를 가리키는 별칭 레코드가 있는 프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역을 각 AWS 계정의 스포크 VPC와 연결합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 중앙화 VPC 엔드포인트— 공유 서비스 계정\n▸ 스포크 VPC — Route 53 쿼리 (private zone)\n▸ Private DNS Name — 자동 해석, 비활성화 필요\n\n【정답 포인트】\n▸ 공유 서비스 계정에 단일 KMS 엔드포인트\n▸ Private DNS 비활성화 → Route 53 통합\n▸ 공유 서비스의 private zone → 별칭 레코드\n▸ 스포크 VPC와 zone 연결\n▸ 스포크 VPC가 kms.amazonaws.com 쿼리\n\n【오답 체크】\n(B) 스포크 계정에 zone 생성 (중앙화 위반)\n(C) 각 스포크에 엔드포인트 (중앙화 위반)\n(D) 스포크 엔드포인트 (중앙화 위반)\n\n【시험 포인트】\n▸ 중앙화 = 공유 서비스 계정 엔드포인트\n▸ 스포크는 zone 참조만 (Route 53)\n▸ Private DNS 비활성화 → Route 53 custom zone",
    "en_q": "A network engineer needs to standardize a company's approach to centralizing and managing interface VPC endpoints for private communication with AWS services. The company uses AWS Transit Gateway for inter-VPC connectivity between AWS accounts through a hub-and-spoke model. The company's network services team must manage all Amazon Route 53 zones and interface endpoints within a shared services AWS account. The company wants to use this centralized model to provide AWS resources with access to AWS Key Management Service (AWS KMS) without sending traffic over the public internet. What should the network engineer do to meet these requirements?",
    "en_opts": {
      "A": "In the shared services account, create an interface endpoint for AWS KMS. Modify the interface endpoint by disabling the private DNS name. Create a private hosted zone in the shared services account with an alias record that points to the interface endpoint. Associate the private hosted zone with the spoke VPCs in each AWS account.",
      "B": "In the shared services account, create an interface endpoint for AWS KMS. Modify the interface endpoint by disabling the private DNS name. Create a private hosted zone in each spoke AWS account with an alias record that points to the interface endpoint. Associate each private hosted zone with the shared services AWS account.",
      "C": "In each spoke AWS account, create an interface endpoint for AWS KMS. Modify each interface endpoint by disabling the private DNS name. Create a private hosted zone in each spoke AWS account with an alias record that points to each interface endpoint. Associate each private hosted zone with the shared services AWS account.",
      "D": "In each spoke AWS account, create an interface endpoint for AWS KMS. Modify each interface endpoint by disabling the private DNS name. Create a private hosted zone in the shared services account with an alias record that points to each interface endpoint. Associate the private hosted zone with the spoke VPCs in each AWS account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103160-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 53,
    "question": "개발 팀이 AWS Cloud에서 새로운 웹 애플리케이션을 빌드 중입니다. 회사의 주요 도메인인 example.com은 현재 회사의 프로덕션 AWS 계정 중 하나에서 Amazon Route 53 공개 호스팅 영역에서 호스팅됩니다. 개발자는 필요에 따라 DNS 레코드를 생성하고 삭제할 수 있는 example.com 도메인 아래의 공개적으로 확인 가능한 서브도메인을 사용하여 회사의 스테이징 AWS 계정에서 웹 애플리케이션을 테스트하려고 합니다. 개발자는 스테이징 계정 내의 Route 53 호스팅 영역에 대한 전체 액세스 권한을 가지고 있지만 프로덕션 AWS 계정의 리소스에 액세스하는 것이 금지되어 있습니다. 개발자가 example.com 도메인 아래에 레코드를 만들 수 있도록 네트워크 엔지니어가 취해야 할 단계의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "스테이징 계정에서 example.com용 공개 호스팅 영역을 생성합니다.",
      "B": "example.com 도메인에서 staging.example.com NS 레코드를 생성합니다. staging.example.com 도메인의 이름 서버로 값을 채웁니다. 라우팅 정책 유형을 단순 라우팅으로 설정합니다.",
      "C": "스테이징 계정에서 staging.example.com용 프라이빗 호스팅 영역을 생성합니다.",
      "D": "staging.example.com 도메인에서 example.com NS 레코드를 생성합니다. example.com 도메인의 이름 서버로 값을 채웁니다. 라우팅 정책 유형을 단순 라우팅으로 설정합니다.",
      "E": "스테이징 계정에서 staging.example.com용 공개 호스팅 영역을 생성합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ NS Record — 서브도메인 위임\n▸ Public Hosted Zone — 공개 도메인 관리\n▸ 위임 체인 — example.com → staging.example.com\n\n【정답 포인트】\n▸ \n(B) example.com에 staging.example.com NS 추가\n▸ 값 = staging 호스팅 영역의 name servers\n▸ \n(E) 스테이징에서 staging.example.com 공개 zone\n▸ 개발자가 staging.* 레코드 자유롭게 생성\n▸ example.com 자체는 프로덕션 계정 유지\n\n【오답 체크】\n(A) example.com 중복 생성 (프로덕션과 충돌)\n(C) Private zone은 공개 도메인 아님\n(D) 역순 NS (잘못된 위임)\n\n【시험 포인트】\n▸ 도메인 위임 = NS record in parent\n▸ Staging 개발용 = staging.example.com 하위\n▸ Public zone + NS 위임 패턴",
    "en_q": "A development team is building a new web application in the AWS Cloud. The main company domain, example.com, is currently hosted in an Amazon Route 53 public hosted zone in one of the company's production AWS accounts. The developers want to test the web application in the company's staging AWS account by using publicly resolvable subdomains under the example.com domain with the ability to create and delete DNS records as needed. Developers have full access to Route 53 hosted zones within the staging account, but they are prohibited from accessing resources in any of the production AWS accounts. Which combination of steps should a network engineer take to allow the developers to create records under the example com domain? (Choose two.)",
    "en_opts": {
      "A": "Create a public hosted zone for example com in the staging account",
      "B": "Create a staging example.com NS record in the example.com domain. Populate the value with the name servers from the staging.example.com domain. Set the routing policy type to simple routing.",
      "C": "Create a private hosted zone for staging example com in the staging account.",
      "D": "Create an example com NS record in the staging example.com domain. Populate the value with the name servers from the example.com domain. Set the routing policy type to simple routing.",
      "E": "Create a public hosted zone for staging.example.com in the staging account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103161-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 54,
    "question": "회사는 단일 AWS 리전에서 새로운 VPC에 2계층 웹 애플리케이션을 배포할 계획입니다. 회사는 VPC를 인터넷 게이트웨이 및 4개의 서브넷으로 구성했습니다. 2개의 서브넷은 공용이며 인터넷 게이트웨이를 가리키는 기본 경로를 가집니다. 2개의 서브넷은 프라이빗이며 기본 경로가 없는 라우트 테이블을 공유합니다. 애플리케이션은 Application Load Balancer 뒤의 Amazon EC2 인스턴스 세트에서 실행됩니다. EC2 인스턴스는 인터넷에서 직접 액세스할 수 없어야 합니다. 애플리케이션은 동일한 리전의 Amazon S3 버킷을 사용하여 데이터를 저장합니다. 애플리케이션은 EC2 인스턴스에서 Amazon S3 GET API 작업 및 Amazon S3 PUT API 작업을 호출합니다. 네트워크 엔지니어는 데이터 전송 비용을 최소화하는 VPC 아키텍처를 설계해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스를 공용 서브넷에 배포합니다. VPC에서 S3 인터페이스 엔드포인트를 생성합니다. 애플리케이션 구성을 수정하여 S3 엔드포인트별 DNS 호스트명을 사용합니다.",
      "B": "EC2 인스턴스를 프라이빗 서브넷에 배포합니다. VPC에 NAT 게이트웨이를 생성합니다. 프라이빗 서브넷의 기본 경로를 NAT 게이트웨이로 생성합니다. NAT 게이트웨이를 사용하여 Amazon S3에 연결합니다.",
      "C": "EC2 인스턴스를 프라이빗 서브넷에 배포합니다. VPC에서 S3 게이트웨이 엔드포인트를 생성합니다. 엔드포인트 생성 중 프라이빗 서브넷의 라우트 테이블을 지정하여 Amazon S3에 대한 경로를 생성합니다.",
      "D": "EC2 인스턴스를 프라이빗 서브넷에 배포합니다. VPC에서 S3 인터페이스 엔드포인트를 생성합니다. 애플리케이션 구성을 수정하여 S3 엔드포인트별 DNS 호스트명을 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Gateway Endpoint (S3) — 라우트 기반, 비용 무료\n▸ Interface Endpoint (S3) — IP 기반, 비용 추가\n▸ NAT Gateway — 시간당 + 데이터 전송료\n▸ 데이터 전송 비용 최소화\n\n【정답 포인트】\n▸ S3 Gateway Endpoint 선택 (비용 무료)\n▸ 자동 라우트 테이블 추가\n▸ 프라이빗 서브넷에서 S3 액세스\n▸ NAT 게이트웨이 불필요 (비용 절감)\n▸ Interface endpoint보다 저렴\n\n【오답 체크】\n(A) 공용 서브넷 = EC2 직접 노출 위험\n(B) NAT 게이트웨이 시간/데이터 비용\n(D) Interface endpoint = 비용 추가\n\n【시험 포인트】\n▸ S3 = Gateway Endpoint만 가능\n▸ 비용 최소화 = Gateway endpoint 선택\n▸ 라우트 자동 추가 = ALB 연동 가능",
    "en_q": "A company plans to deploy a two-tier web application to a new VPC in a single AWS Region. The company has configured the VPC with an internet gateway and four subnets. Two of the subnets are public and have default routes that point to the internet gateway. Two of the subnets are private and share a route table that does not have a default route. The application will run on a set of Amazon EC2 instances that will be deployed behind an external Application Load Balancer. The EC2 instances must not be directly accessible from the internet. The application will use an Amazon S3 bucket in the same Region to store data. The application will invoke S3 GET API operations and S3 PUT API operations from the EC2 instances. A network engineer must design a VPC architecture that minimizes data transfer cost. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy the EC2 instances in the public subnets. Create an S3 interface endpoint in the VPC. Modify the application configuration to use the S3 endpoint-specific DNS hostname.",
      "B": "Deploy the EC2 instances in the private subnets. Create a NAT gateway in the VPC. Create default routes in the private subnets to the NAT gateway. Connect to Amazon S3 by using the NAT gateway.",
      "C": "Deploy the EC2 instances in the private subnets. Create an S3 gateway endpoint in the VPSpecify die route table of the private subnets during endpoint creation to create routes to Amazon S3.",
      "D": "Deploy the EC2 instances in the private subnets. Create an S3 interface endpoint in the VPC. Modify the application configuration to use the S3 endpoint-specific DNS hostname."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103247-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 55,
    "question": "회사는 두 개의 AWS 계정을 가지고 있습니다(하나는 Production용, 하나는 Connectivity용). 네트워크 엔지니어는 Production 계정 VPC를 Connectivity 계정의 Transit Gateway에 연결해야 합니다. Transit Gateway에서 공유 어태치먼트의 자동 수락 기능이 활성화되어 있지 않습니다. 네트워크 엔지니어가 각 AWS 계정에서 이 요구 사항을 충족하기 위해 따라야 할 단계의 집합은 무엇입니까?",
    "options": {
      "A": "1. Production 계정에서: AWS Resource Access Manager에서 Transit Gateway에 대한 리소스 공유를 생성합니다. Connectivity 계정 ID를 제공합니다. 외부 계정을 허용하는 기능을 활성화합니다. 2. Connectivity 계정에서: 리소스를 수락합니다. 3. Connectivity 계정에서: VPC 서브넷에 대한 어태치먼트를 생성합니다. 4. Production 계정에서: 어태치먼트를 수락합니다. 라우트 테이블을 어태치먼트와 연결합니다.",
      "B": "1. Production 계정에서: AWS Resource Access Manager에서 VPC 서브넷에 대한 리소스 공유를 생성합니다. Connectivity 계정 ID를 제공합니다. 외부 계정을 허용하는 기능을 활성화합니다. 2. Connectivity 계정에서: 리소스를 수락합니다. 3. Production 계정에서: Transit Gateway에서 VPC 서브넷에 대한 어태치먼트를 생성합니다. 4. Connectivity 계정에서: 어태치먼트를 수락합니다. 라우트 테이블을 어태치먼트와 연결합니다.",
      "C": "1. Connectivity 계정에서: AWS Resource Access Manager에서 VPC 서브넷에 대한 리소스 공유를 생성합니다. Production 계정 ID를 제공합니다. 외부 계정을 허용하는 기능을 활성화합니다. 2. Production 계정에서: 리소스를 수락합니다. 3. Connectivity 계정에서: Transit Gateway에서 VPC 서브넷에 대한 어태치먼트를 생성합니다. 4. Production 계정에서: 어태치먼트를 수락합니다. 라우트 테이블을 어태치먼트와 연결합니다.",
      "D": "1. Connectivity 계정에서: AWS Resource Access Manager에서 Transit Gateway에 대한 리소스 공유를 생성합니다. Production 계정 ID를 제공합니다. 외부 계정을 허용하는 기능을 활성화합니다. 2. Production 계정에서: 리소스를 수락합니다. 3. Production 계정에서: VPC 서브넷에 대한 어태치먼트를 생성합니다. 4. Connectivity 계정에서: 어태치먼트를 수락합니다. 라우트 테이블을 어태치먼트와 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Resource Access Manager — AWS 리소스 공유\n▸ RAM Resource Share — TGW 소유 계정에서 생성\n▸ Attachment — 대상 계정 VPC 서브넷\n\n【정답 포인트】\n▸ Connectivity: Transit Gateway 소유\n▸ RAM으로 TGW를 Production과 공유 (1단계)\n▸ Production: 리소스 수락 (2단계)\n▸ Production: VPC 서브넷 어태치먼트 생성 (3단계)\n▸ Connectivity: 어태치먼트 수락 (4단계)\n▸ Connectivity: 라우트 테이블 연결\n\n【오답 체크】\n(A) VPC 서브넷 공유는 순서 오류\n(B) Production에서 VPC 공유 (역순)\n(C) Connectivity에서 VPC 공유 (오류)\n\n【시험 포인트】\n▸ Resource Share: TGW 소유 계정 시작\n▸ Attachment: 대상 계정에서 생성\n▸ Cross-account TGW 연결 패턴",
    "en_q": "A company has two AWS accounts one for Production and one for Connectivity. A network engineer needs to connect the Production account VPC to a transit gateway in the Connectivity account. The feature to auto accept shared attachments is not enabled on the transit gateway. Which set of steps should the network engineer follow in each AWS account to meet these requirements?",
    "en_opts": {
      "A": "1. In the Production account: Create a resource share in AWS Resource Access Manager for the transit gateway. Provide the Connectivity account ID. Enable the feature to allow external accounts 2. In the Connectivity account: Accept the resource. 3. In the Connectivity account: Create an attachment to the VPC subnets. 4. In the Production account: Accept the attachment. Associate a route table with the attachment.",
      "B": "1. In the Production account: Create a resource share in AWS Resource Access Manager for the VPC subnets. Provide the Connectivity account ID. Enable the feature to allow external accounts. 2. In the Connectivity account: Accept the resource. 3. In the Production account: Create an attachment on the transit gateway to the VPC subnets. 4. In the Connectivity account: Accept the attachment. Associate a route table with the attachment.",
      "C": "1. In the Connectivity account: Create a resource share in AWS Resource Access Manager for the VPC subnets. Provide the Production account ID. Enable the feature to allow external accounts. 2. In the Production account: Accept the resource. 3. In the Connectivity account: Create an attachment on the transit gateway to the VPC subnets. 4. In the Production account: Accept the attachment. Associate a route table with the attachment.",
      "D": "1. In the Connectivity account: Create a resource share in AWS Resource Access Manager for the transit gateway. Provide the Production account ID Enable the feature to allow external accounts. 2. In the Production account: Accept the resource. 3. In the Production account: Create an attachment to the VPC subnets. 4. In the Connectivity account: Accept the attachment. Associate a route table with the attachment."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103249-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 56,
    "question": "회사가 공용 서브넷에서 Amazon EC2 인스턴스에서 여러 워크로드를 실행 중입니다. 최근 사건에서 공격자는 EC2 인스턴스 중 하나의 애플리케이션 취약점을 악용하여 인스턴스에 대한 액세스 권한을 얻었습니다. 회사는 애플리케이션을 수정하고 업데이트된 애플리케이션을 포함하는 대체 EC2 인스턴스를 시작했습니다. 공격자는 손상된 애플리케이션을 사용하여 인터넷을 통해 멀웨어를 전파했습니다. 회사는 AWS의 알림을 통해 손상을 인식하게 되었습니다. 회사는 EC2 인스턴스에 배포된 애플리케이션이 멀웨어를 전파하는 시점을 식별할 수 있어야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon GuardDuty를 사용하여 DNS 요청 및 VPC 흐름 로그를 검사하여 트래픽 패턴을 분석합니다.",
      "B": "Amazon GuardDuty를 사용하여 최신 멀웨어 서명으로 장착된 AWS 관리 기만 시스템을 배포합니다.",
      "C": "Gateway Load Balancer를 설정합니다. AWS Marketplace에서 침입 탐지 시스템(IDS) 어플라이언스를 실행합니다.",
      "D": "Amazon Inspector를 구성하여 나가는 트래픽의 깊은 패킷 검사를 수행합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ GuardDuty — 위협 탐지 (DNS, VPC Flow 분석)\n▸ 멀웨어 탐지 — 비정상 아웃바운드 패턴\n▸ 최소 운영 오버헤드\n\n【정답 포인트】\n▸ GuardDuty: 자동 threat detection\n▸ DNS 요청 분석 → C&C 서버 탐지\n▸ VPC Flow Logs → 비정상 통신 패턴\n▸ 아웃바운드 멀웨어 활동 식별\n▸ 설정 간단, 관리 최소\n\n【오답 체크】\n(B) Decoy systems는 침입 후, 탐지 아님\n(C) Gateway LB + IDS = 높은 관리 부담\n(D) Inspector는 실행 환경 스캔용\n\n【시험 포인트】\n▸ 아웃바운드 멀웨어 탐지 = GuardDuty\n▸ 자동화된 위협 분석\n▸ 최소 오버헤드 요구사항",
    "en_q": "A company is running multiple workloads on Amazon EC2 instances in public subnets. In a recent incident, an attacker exploited an application vulnerability on one of the EC2 instances to gain access to the instance. The company fixed the application and launched a replacement EC2 instance that contains the updated application. The attacker used the compromised application to spread malware over the internet. The company became aware of the compromise through a notification from AWS. The company needs the ability to identify when an application that is deployed on an EC2 instance is spreading malware. Which solution will meet this requirement with the LEAST operational effort?",
    "en_opts": {
      "A": "Use Amazon GuardDuty to analyze traffic patterns by inspecting DNS requests and VPC flow logs.",
      "B": "Use Amazon GuardDuty to deploy AWS managed decoy systems that are equipped with the most recent malware signatures.",
      "C": "Set up a Gateway Load Balancer. Run an intrusion detection system (IDS) appliance from AWS Marketplace on Amazon EC2 for traffic inspection.",
      "D": "Configure Amazon Inspector to perform deep packet inspection of outgoing traffic."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103251-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 57,
    "question": "회사는 Application Load Balancer(ALB) 뒤의 프라이빗 서브넷의 3개 Availability Zone에서 실행되는 Amazon EC2 인스턴스에 새로운 웹 애플리케이션을 배포합니다. 보안 감사자는 모든 연결의 암호화를 요구합니다. 회사는 DNS용 Amazon Route 53 및 SSL/TLS 인증서 프로비저닝 자동화용 AWS Certificate Manager(ACM)를 사용합니다. SSL/TLS 연결은 ALB에서 종료됩니다. 회사는 단일 EC2 인스턴스를 사용하여 애플리케이션을 테스트하며 문제를 관찰하지 못합니다. 그러나 프로덕션 배포 후 사용자는 로그인할 수는 있지만 애플리케이션을 사용할 수 없다고 보고합니다. 모든 새로운 웹 요청은 로그인 프로세스를 다시 시작합니다. 네트워크 엔지니어가 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "ALB 리스너 구성을 수정합니다. 트래픽을 대상 그룹으로 전달하는 규칙을 편집합니다. 규칙을 그룹 레벨 스티키니스를 활성화하도록 변경합니다. 기간을 최대 애플리케이션 세션 길이로 설정합니다.",
      "B": "ALB를 Network Load Balancer로 교체합니다. TLS 리스너를 생성합니다. 프로토콜 유형이 TLS로 설정된 새 대상 그룹을 생성합니다. EC2 인스턴스를 등록합니다. 스티키니스 속성을 활성화하여 대상 그룹 구성을 수정합니다.",
      "C": "ALB 대상 그룹 구성을 수정하여 스티키니스 속성을 활성화합니다. 애플리케이션 기반 쿠키를 사용합니다. 기간을 최대 애플리케이션 세션 길이로 설정합니다.",
      "D": "ALB를 제거합니다. 애플리케이션 이름에 대해 장애 조치 라우팅 정책으로 Route 53 규칙을 생성합니다. 각 EC2 인스턴스에 대해 인증서를 발급하도록 ACM을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Session Stickiness — 동일 대상 인스턴스로 라우팅\n▸ Application-based Cookie — JSESSIONID 등\n▸ 로그인 후 세션 유지 필요\n\n【정답 포인트】\n▸ 단일 인스턴스: 성공 (세션 로컬)\n▸ 다중 인스턴스: 요청마다 다른 EC2\n▸ 세션 정보 로컬 저장 → 다른 인스턴스는 모름\n▸ ALB 대상 그룹에 stickiness 활성화\n▸ 쿠키 기반 세션 추적 (JSESSIONID)\n\n【오답 체크】\n(A) Listener 규칙이 아닌 대상 그룹 설정\n(B) NLB는 세션 레이어 아님\n(D) 개별 EC2 인증서 = 관리 부담\n\n【시험 포인트】\n▸ 세션 분산 = stickiness 활성화\n▸ 애플리케이션 쿠키 (ALB 권장)\n▸ 다중 AZ 부하 분산 문제 해결",
    "en_q": "A company deploys a new web application on Amazon EC2 instances. The application runs in private subnets in three Availability Zones behind an Application Load Balancer (ALB). Security auditors require encryption of all connections. The company uses Amazon Route 53 for DNS and uses AWS Certificate Manager (ACM) to automate SSL/TLS certificate provisioning. SSL/TLS connections are terminated on the ALB. The company tests the application with a single EC2 instance and does not observe any problems. However, after production deployment, users report that they can log in but that they cannot use the application. Every new web request restarts the login process. What should a network engineer do to resolve this issue?",
    "en_opts": {
      "A": "Modify the ALB listener configuration. Edit the rule that forwards traffic to the target group. Change the rule to enable group-level stickiness. Set the duration to the maximum application session length.",
      "B": "Replace the ALB with a Network Load Balancer. Create a TLS listener. Create a new target group with the protocol type set to TLS Register the EC2 instances. Modify the target group configuration by enabling the stickiness attribute.",
      "C": "Modify the ALB target group configuration by enabling the stickiness attribute. Use an application-based cookie. Set the duration to the maximum application session length.",
      "D": "Remove the ALB. Create an Amazon Route 53 rule with a failover routing policy for the application name. Configure ACM to issue certificates for each EC2 instance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103252-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 58,
    "question": "회사는 보안 규정을 준수하기 위해 Amazon EC2 인스턴스를 VPC 프라이빗 서브넷으로 마이그레이션했습니다. EC2 인스턴스는 이제 인터넷 접근에 NAT 게이트웨이를 사용합니다. 마이그레이션 후, 프라이빗 EC2 인스턴스에서 공개적으로 접근 가능한 제3자 데이터베이스로의 장시간 실행 쿼리가 응답을 받지 못합니다. 데이터베이스 쿼리 로그는 쿼리가 7분 후 성공적으로 완료되었지만 클라이언트 EC2 인스턴스가 응답을 받지 못했음을 나타냅니다. 이 문제를 해결하기 위해 네트워크 엔지니어가 구현해야 할 구성 변경은 무엇입니까?",
    "options": {
      "A": "NAT 게이트웨이 타임아웃을 600초까지 연결을 허용하도록 구성합니다.",
      "B": "클라이언트 EC2 인스턴스에서 향상된 네트워킹을 활성화합니다.",
      "C": "클라이언트 EC2 인스턴스에서 TCP keepalive를 300초 미만의 값으로 활성화합니다.",
      "D": "NAT 게이트웨이를 통한 유휴 TCP 연결을 종료합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ NAT Gateway Timeout — NAT 게이트웨이는 기본적으로 연결이 유휴(idle) 상태에서 350초 후 TCP 연결을 종료합니다\n▸ TCP Keepalive — 클라이언트가 일정 간격으로 하트비트를 전송하여 연결을 유지하는 메커니즘\n\n【정답 포인트】\n▸ 문제: 쿼리는 7분(420초) 후 완료되었지만 응답이 클라이언트에 도착하지 않음\n▸ 원인: NAT 게이트웨이가 유휴 상태에서 350초 후 연결을 종료하므로, 응답이 닫힌 연결로 전송됨\n▸ 해결책: TCP keepalive를 300초 미만으로 설정하면 NAT 타임아웃(350초) 전에 주기적으로 패킷을 전송하여 연결 유지\n\n【오답 체크】\n(A) NAT 게이트웨이 타임아웃을 600초로 설정할 수 없음 — NAT는 최대 350초 고정\n(B) 향상된 네트워킹은 성능 최적화이지, 타임아웃 문제 해결 안 됨\n(D) 유휴 TCP 연결 종료는 문제를 악화시킬 뿐\n\n【시험 포인트】\nNAT 게이트웨이의 유휴 연결 타임아웃(350초) ↔ TCP Keepalive 설정으로 연결 유지 ↔ 장시간 쿼리 시나리오",
    "en_q": "A company recently migrated its Amazon EC2 instances to VPC private subnets to satisfy a security compliance requirement. The EC2 instances now use a NAT gateway for internet access. After the migration, some long-running database queries from private EC2 instances to a publicly accessible third-party database no longer receive responses. The database query logs reveal that the queries successfully completed after 7 minutes but that the client EC2 instances never received the response. Which configuration change should a network engineer implement to resolve this issue?",
    "en_opts": {
      "A": "Configure the NAT gateway timeout to allow connections for up to 600 seconds.",
      "B": "Enable enhanced networking on the client EC2 instances.",
      "C": "Enable TCP keepalive on the client EC2 instances with a value of less than 300 seconds.",
      "D": "Close idle TCP connections through the NAT gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103254-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 59,
    "question": "회사는 AWS Direct Connect를 사용하여 기업 네트워크를 동일한 AWS 계정 및 동일한 AWS 리전의 여러 VPC에 연결합니다. 각 VPC는 자체 프라이빗 VIF와 Direct Connect 연결의 자체 virtual LAN을 사용합니다. 회사가 성장하면서 각 연결에 대한 VPC 및 프라이빗 VIF의 한도를 곧 초과할 것입니다. VPC를 추가하되 온프레미스 연결성을 유지하는 가장 확장 가능한 방법은 무엇입니까?",
    "options": {
      "A": "새로운 Direct Connect 연결을 프로비저닝하여 추가 VPC를 처리합니다. 새 연결을 사용하여 추가 VPC를 연결합니다.",
      "B": "서비스 할당량을 초과하는 각 VPC에 대한 가상 프라이빗 게이트웨이를 생성합니다. AWS Site-to-Site VPN을 사용하여 가상 프라이빗 게이트웨이를 기업 네트워크에 연결합니다.",
      "C": "Direct Connect 게이트웨이를 생성하고 VPC에 가상 프라이빗 게이트웨이 연결을 추가합니다. 프라이빗 VIF를 기업 네트워크에 연결하도록 구성합니다.",
      "D": "Transit Gateway를 생성하고 VPC를 연결합니다. Direct Connect 게이트웨이를 생성하고 Transit Gateway와 연결합니다. Transit Gateway에 대한 Transit VIF를 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Direct Connect Gateway — 여러 VPC를 단일 온프레미스 연결로 연결하는 관리형 서비스\n▸ Transit Gateway — 중앙 허브로 작동하여 VPC와 온프레미스 네트워크를 확장 가능하게 연결\n▸ Transit VIF — Transit Gateway와 직접 연결하기 위한 Virtual Interface\n\n【정답 포인트】\n▸ 각 VPC마다 개별 프라이빗 VIF가 필요한 제약 극복 필요\n▸ Transit Gateway: VPC 확장성 최대화 (수십 개까지 가능)\n▸ Direct Connect Gateway + Transit VIF: 온프레미스 연결 1개로 모든 VPC 지원\n▸ 스케일러빌리티 최고, 관리 오버헤드 최소\n\n【오답 체크】\n(A) 새 연결 프로비저닝은 비용 증가, 확장성 해결 안 함\n(B) Site-to-Site VPN은 성능 문제, 관리 복잡도 증가\n(C) Direct Connect 게이트웨이만으로는 VPC 수 제약 여전히 존재\n\n【시험 포인트】\n다중 VPC 연결 한계 → Transit Gateway + Direct Connect 게이트웨이 → Transit VIF 조합 = 최고 확장성",
    "en_q": "A company uses AWS Direct Connect to connect its corporate network to multiple VPCs in the same AWS account and the same AWS Region. Each VPC uses its own private VIF and its own virtual LAN on the Direct Connect connection. The company has grown and will soon surpass the limit of VPCs and private VIFs for each connection. What is the MOST scalable way to add VPCs with on-premises connectivity?",
    "en_opts": {
      "A": "Provision a new Direct Connect connection to handle the additional VPCs. Use the new connection to connect additional VPCs.",
      "B": "Create virtual private gateways for each VPC that is over the service quota. Use AWS Site-to-Site VPN to connect the virtual private gateways to the corporate network.",
      "C": "Create a Direct Connect gateway, and add virtual private gateway associations to the VPCs. Configure a private VIF to connect to the corporate network.",
      "D": "Create a transit gateway, and attach the VPCs. Create a Direct Connect gateway, and associate it with the transit gateway. Create a transit VIF to the Direct Connect gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103255-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 60,
    "question": "네트워크 엔지니어는 기업의 데이터 센터와 두 AWS 리전(us-east-1, eu-west-1) 사이의 1 Gbps AWS Direct Connect 연결을 사용하는 하이브리드 아키텍처를 설계합니다. us-east-1의 VPC는 Transit Gateway로 연결되며 온프레미스 데이터베이스에 접근해야 합니다. 회사 정책에 따라 eu-west-1의 하나의 VPC만 하나의 온프레미스 서버에 연결할 수 있습니다. 온프레미스 네트워크는 데이터베이스와 서버 간의 트래픽을 분할합니다. 네트워크 엔지니어는 이러한 요구사항을 충족하도록 Direct Connect 연결을 설정해야 합니다. 어떻게 설정해야 합니까?",
    "options": {
      "A": "호스팅 연결 1개를 생성합니다. Transit VIF를 사용하여 us-east-1의 Transit Gateway에 연결합니다. 프라이빗 VIF를 사용하여 eu-west-1의 VPC에 연결합니다. 최소 지연 경로를 따라 Direct Connect 위치에서 해당 AWS 리전으로 라우팅하기 위해 1개의 Direct Connect 게이트웨이를 사용합니다.",
      "B": "호스팅 연결 1개를 생성합니다. Transit VIF를 사용하여 us-east-1의 Transit Gateway에 연결합니다. 프라이빗 VIF를 사용하여 eu-west-1의 VPC에 연결합니다. 최소 지연 경로를 따라 각 VIF를 Direct Connect 위치에서 해당 AWS 리전으로 라우팅하기 위해 2개의 Direct Connect 게이트웨이를 사용합니다.",
      "C": "전용 연결 1개를 생성합니다. Transit VIF를 사용하여 us-east-1의 Transit Gateway에 연결합니다. 프라이빗 VIF를 사용하여 eu-west-1의 VPC에 연결합니다. 최소 지연 경로를 따라 Direct Connect 위치에서 해당 AWS 리전으로 라우팅하기 위해 1개의 Direct Connect 게이트웨이를 사용합니다.",
      "D": "전용 연결 1개를 생성합니다. Transit VIF를 사용하여 us-east-1의 Transit Gateway에 연결합니다. 프라이빗 VIF를 사용하여 eu-west-1의 VPC에 연결합니다. 최소 지연 경로를 따라 각 VIF를 Direct Connect 위치에서 해당 AWS 리전으로 라우팅하기 위해 2개의 Direct Connect 게이트웨이를 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Hosted Connection vs Dedicated Connection — 전용 연결은 1 Gbps 고속 전용선, 호스팅은 공유 연결\n▸ Transit VIF — Transit Gateway와 Direct Connect 게이트웨이를 연결하는 인터페이스\n▸ Private VIF — 단일 VPC와의 1:1 연결, 트래픽 분리 필요시 사용\n\n【정답 포인트】\n▸ us-east-1: Transit VIF + Transit Gateway (다중 VPC 지원)\n▸ eu-west-1: Private VIF (1개 VPC만 연결 정책)\n▸ 연결 타입: Dedicated Connection (1 Gbps 전용선, 회사 규모)\n▸ 분리 요구: 2개 Direct Connect 게이트웨이\n  - 게이트웨이 1: us-east-1 Transit VIF\n  - 게이트웨이 2: eu-west-1 Private VIF\n▸ 이유: 트래픽 분리 + 라우팅 정책 독립성 확보\n\n【오답 체크】\n(A) Hosted Connection은 1 Gbps 속도 부족\n(B) Hosted Connection + 1개 게이트웨이는 VIF 분리 안 됨\n(C) Dedicated Connection 맞지만 1개 게이트웨이는 eu-west-1 Private VIF 정책 충족 안 함\n\n【시험 포인트】\n다중 리전 + 다중 VIF 타입 = 트래픽 분리 요구 → 복수 Direct Connect 게이트웨이 필수",
    "en_q": "A network engineer is designing a hybrid architecture that uses a 1 Gbps AWS Direct Connect connection between the company's data center and two AWS Regions: us-east-1 and eu-west-1. The VPCs in us-east-1 are connected by a transit gateway and need to access several on-premises databases. According to company policy, only one VPC in eu-west-1 can be connected to one on-premises server. The on-premises network segments the traffic between the databases and the server. How should the network engineer set up the Direct Connect connection to meet these requirements?",
    "en_opts": {
      "A": "Create one hosted connection. Use a transit VIF to connect to the transit gateway in us-east-1. Use a private VIF to connect to the VPC in eu-west-1. Use one Direct. Connect gateway for both VIFs to route from the Direct Connect locations to the corresponding AWS Region along the path that has the lowest latency.",
      "B": "Create one hosted connection. Use a transit VIF to connect to the transit gateway in us-east-1. Use a private VIF to connect to the VPC in eu-west-1. Use two Direct Connect gateways, one for each VIF, to route from the Direct Connect locations to the corresponding AWS Region along the path that has the lowest latency.",
      "C": "Create one dedicated connection. Use a transit VIF to connect to the transit gateway in us-east-1. Use a private VIF to connect to the VPC in eu-west-1. Use one Direct Connect gateway for both VIFs to route from the Direct Connect locations to the corresponding AWS Region along the path that has the lowest latency.",
      "D": "Create one dedicated connection. Use a transit VIF to connect to the transit gateway in us-east-1. Use a private VIF to connect to the VPC in eu-west-1. Use two Direct Connect gateways, one for each VIF, to route from the Direct Connect locations to the corresponding AWS Region along the path that has the lowest latency."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103256-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 61,
    "question": "회사는 VPC에서 인터넷으로의 아웃바운드 트래픽에 NAT 게이트웨이를 사용하는 애플리케이션을 배포했습니다. 네트워크 엔지니어는 거부 목록에 포함된 IP 주소로 VPC에서 인터넷으로 이동하는 의심스러운 네트워크 트래픽이 대량 발생했음을 알립니다. 네트워크 엔지니어는 의심스러운 트래픽을 생성하는 AWS 리소스를 식별하는 솔루션을 구현해야 합니다. 솔루션은 비용과 관리 오버헤드를 최소화해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "VPC에 Amazon EC2 인스턴스를 실행합니다. Traffic Mirroring을 사용하여 NAT 게이트웨이를 소스, EC2 인스턴스를 대상으로 지정합니다. 오픈 소스 도구를 사용하여 캡처된 트래픽을 분석하여 의심스러운 트래픽을 생성하는 AWS 리소스를 식별합니다.",
      "B": "VPC Flow Logs를 사용합니다. VPC에 SIEM(보안 정보 및 이벤트 관리) 솔루션을 실행합니다. SIEM 솔루션을 구성하여 VPC Flow Logs를 수집합니다. SIEM 솔루션에서 쿼리를 실행하여 의심스러운 트래픽을 생성하는 AWS 리소스를 식별합니다.",
      "C": "VPC Flow Logs를 사용합니다. Flow Logs를 Amazon CloudWatch Logs의 로그 그룹에 게시합니다. CloudWatch Logs Insights를 사용하여 Flow Logs를 쿼리하여 의심스러운 트래픽을 생성하는 AWS 리소스를 식별합니다.",
      "D": "VPC를 구성하여 네트워크 트래픽을 Amazon Kinesis 데이터 스트림으로 직접 스트리밍합니다. Kinesis 데이터 스트림의 데이터를 Amazon Kinesis Data Firehose 전송 스트림으로 전송하여 Amazon S3에 데이터를 저장합니다. Amazon Athena를 사용하여 데이터를 쿼리하여 의심스러운 트래픽을 생성하는 AWS 리소스를 식별합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ VPC Flow Logs — VPC의 모든 네트워크 인터페이스 트래픽을 기록하는 모니터링 도구\n▸ CloudWatch Logs Insights — 로그 데이터에 대한 실시간 대화식 쿼리 분석\n▸ Traffic Mirroring — 트래픽 복제로 깊은 패킷 검사 가능하지만 추가 비용\n\n【정답 포인트】\n▸ 요구사항: 최소 비용 + 최소 관리 오버헤드\n▸ VPC Flow Logs: 네이티브, 네트워크 수준 트래픽 기록 제공\n▸ CloudWatch Logs: 기본 로깅 인프라로 추가 설정 최소\n▸ CloudWatch Logs Insights: 간단한 쿼리로 원본 리소스 IP 식별 가능\n▸ 비용 효율적: 트래픽 미러링보다 저렴, SIEM 솔루션 불필요\n\n【오답 체크】\n(A) Traffic Mirroring: 추가 EC2 비용, 도구 관리 오버헤드 증가\n(B) SIEM 솔루션: 라이선스 및 관리 비용 크게 증가\n(D) Kinesis + Firehose + Athena: 구성 복잡도 높음, 비용 증가\n\n【시험 포인트】\n보안 식별 + 저비용 + 최소 오버헤드 → VPC Flow Logs + CloudWatch Logs Insights 조합",
    "en_q": "A company has deployed an application in a VPC that uses a NAT gateway for outbound traffic to the internet. A network engineer notices a large quantity of suspicious network traffic that is traveling from the VPC over the internet to IP addresses that are included on a deny list. The network engineer must implement a solution to determine which AWS resources are generating the suspicious traffic. The solution must minimize cost and administrative overhead. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Launch an Amazon EC2 instance in the VPC. Use Traffic Mirroring by specifying the NAT gateway as the source and the EC2 instance as the destination. Analyze the captured traffic by using open-source tools to identify the AWS resources that are generating the suspicious traffic.",
      "B": "Use VPC flow logs. Launch a security information and event management (SIEM) solution in the VPC. Configure the SIEM solution to ingest the VPC flow logs. Run queries on the SIEM solution to identify the AWS resources that are generating the suspicious traffic.",
      "C": "Use VPC flow logs. Publish the flow logs to a log group in Amazon CloudWatch Logs. Use CloudWatch Logs Insights to query the flow logs to identify the AWS resources that are generating the suspicious traffic.",
      "D": "Configure the VPC to stream the network traffic directly to an Amazon Kinesis data stream. Send the data from the Kinesis data stream to an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Use Amazon Athena to query the data to identify the AWS resources that are generating the suspicious traffic."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103258-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 62,
    "question": "회사는 eu-west-1 리전의 Account 1에 프로덕션 VPC(VPC-A)를 보유하고 있습니다. VPC-A는 Transit Gateway(TGW-A)에 연결되며, 이는 AWS Direct Connect 게이트웨이로 구성된 Direct Connect Transit VIF를 통해 더블린의 온프레미스 데이터 센터에 연결됩니다. 또한 회사는 eu-west-2 리전의 Account 2에 있는 다른 Transit Gateway(TGW-B)에 연결된 스테이징 VPC(VPC-B)를 보유하고 있습니다. 네트워크 엔지니어는 VPC-B와 더블린의 온프레미스 데이터 센터 간의 연결성을 구현해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까? (2개를 선택하십시오)",
    "options": {
      "A": "VPC-A와 VPC-B 간의 Region 간 VPC 피어링을 구성합니다. 필요한 VPC 피어링 경로를 추가합니다. Direct Connect 게이트웨이의 허용 접두사에 VPC-B CIDR 블록을 추가합니다.",
      "B": "TGW-B를 Direct Connect 게이트웨이와 연결합니다. 허용 접두사에서 VPC-B CIDR 블록을 공지합니다.",
      "C": "Direct Connect 연결에서 다른 Transit VIF를 구성하고 TGW-B를 연결합니다. 허용 접두사에서 VPC-B CIDR 블록을 공지합니다.",
      "D": "TGW-A와 TGW-B 간의 리전 간 Transit Gateway 피어링을 구성합니다. Transit Gateway 라우팅 테이블에 피어링 경로를 추가합니다. Direct Connect 게이트웨이 연결의 허용 접두사 목록에 VPC-A와 VPC-B CIDR 블록을 모두 추가합니다.",
      "E": "Transit VIF를 통해 AWS Site-to-Site VPN 연결을 TGW-B에 대한 VPN 연결로 구성합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ Direct Connect Gateway — 다중 리전, 다중 계정의 VPC를 온프레미스와 연결하는 중앙 허브\n▸ Transit Gateway Peering — 리전 간 Transit Gateway 간 연결\n▸ Allowed Prefixes — Direct Connect 게이트웨이에서 통신 허용할 CIDR 범위\n\n【정답 포인트】\n솔루션 B:\n▸ TGW-B를 Direct Connect 게이트웨이와 직접 연결 (계정 간 가능)\n▸ VPC-B CIDR을 허용 접두사에 추가로 공지\n▸ TGW-A의 기존 Direct Connect 연결 활용\n▸ 가장 간단하고 직접적인 접근\n솔루션 D:\n▸ 리전 간 TGW 피어링으로 VPC 간 연결\n▸ 허용 접두사에 모든 CIDR 추가로 온프레미스 라우팅 활성화\n▸ 스케일 가능한 아키텍처\n\n【오답 체크】\n(A) VPC 피어링: 계정 간, 리전 간 가능하지만 Direct Connect 게이트웨이 연결 미흡\n(C) 두 번째 Transit VIF: Direct Connect 연결 재구성 필요, 비효율적\n(E) VPN over Transit VIF: 불필요한 암호화 오버헤드\n\n【시험 포인트】\n다중 리전 + 다중 계정 + Direct Connect =\n(B) TGW 직접 연결 또는\n(D) TGW 피어링",
    "en_q": "A company has its production VPC (VPC-A) in the eu-west-1 Region in Account 1. VPC-A is attached to a transit gateway (TGW-A) that is connected to an on-premises data center in Dublin, Ireland, by an AWS Direct Connect transit VIF that is configured for an AWS Direct Connect gateway. The company also has a staging VPC (VPC-B) that is attached to another transit gateway (TGW-B) in the eu-west-2 Region in Account 2. A network engineer must implement connectivity between VPC-B and the on-premises data center in Dublin. Which solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Configure inter-Region VPC peering between VPC-A and VPC-B. Add the required VPC peering routes. Add the VPC-B CIDR block in the allowed prefixes on the Direct Connect gateway association.",
      "B": "Associate TGW-B with the Direct Connect gateway. Advertise the VPC-B CIDR block under the allowed prefixes.",
      "C": "Configure another transit VIF on the Direct Connect connection and associate TGW-B. Advertise the VPC-B CIDR block under the allowed prefixes.",
      "D": "Configure inter-Region transit gateway peering between TGW-A and TGW-B. Add the peering routes in the transit gateway route tables. Add both the VPC-A and the VPC-B CIDR block under the allowed prefix list in the Direct Connect gateway association.",
      "E": "Configure an AWS Site-to-Site VPN connection over the transit VIF to TGW-B as a VPN attachment."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103261-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 63,
    "question": "회사의 네트워크 엔지니어는 AWS Cloud 워크로드에 대한 하이브리드 DNS 솔루션을 설계하고 있습니다. 개별 팀은 개발 환경의 애플리케이션에 대한 자체 DNS 호스트명을 관리하려고 합니다. 솔루션은 애플리케이션별 호스트명을 온프레미스 네트워크의 중앙 관리 DNS 호스트명과 통합하고 양방향 이름 분석을 제공해야 합니다. 또한 솔루션은 관리 오버헤드를 최소화해야 합니다. 네트워크 엔지니어가 이러한 요구사항을 충족하기 위해 수행해야 할 단계의 조합은 무엇입니까? (3개를 선택하십시오)",
    "options": {
      "A": "Amazon Route 53 Resolver 인바운드 엔드포인트를 사용합니다.",
      "B": "DHCP 옵션 집합을 수정하여 사용자 정의 DNS 서버 값을 설정합니다.",
      "C": "Amazon Route 53 Resolver 아웃바운드 엔드포인트를 사용합니다.",
      "D": "DNS 프록시 서버를 생성합니다.",
      "E": "Amazon Route 53 프라이빗 호스팅 영역을 생성합니다.",
      "F": "Amazon Route 53과 온프레미스 DNS 간 영역 전송을 설정합니다."
    },
    "answer": "ACE",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver Inbound Endpoint — 온프레미스 DNS가 AWS의 Route 53 쿼리를 하도록 허용\n▸ Route 53 Resolver Outbound Endpoint — AWS VPC가 온프레미스 DNS로 쿼리를 포워드\n▸ Route 53 Private Hosted Zone — AWS 내부 호스트명 관리\n\n【정답 포인트】\n솔루션 A (Inbound Endpoint):\n▸ 온프레미스 → AWS 쿼리 방향 지원\n▸ 온프레미스에서 Route 53 호스트명 해석 가능\n솔루션 C (Outbound Endpoint):\n▸ AWS VPC → 온프레미스 DNS 쿼리 방향 지원\n▸ AWS에서 온프레미스 DNS 해석 가능\n솔루션 E (Private Hosted Zone):\n▸ AWS 내 애플리케이션 호스트명 중앙 관리\n▸ 팀별 독립적 관리 동시에 통합 가능\n양방향 해석 = Inbound + Outbound 엔드포인트 필수\n\n【오답 체크】\n(B) DHCP 옵션: Route 53 Resolver와 충돌, 불필요\n(D) DNS 프록시: 관리 오버헤드 증가 (managed 솔루션 필요)\n(F) 영역 전송: 복제 복잡도, 관리 오버헤드 증가\n\n【시험 포인트】\n하이브리드 DNS 양방향 + 최소 오버헤드 → Inbound + Outbound Endpoint + Private Hosted Zone",
    "en_q": "A company's network engineer is designing a hybrid DNS solution for an AWS Cloud workload. Individual teams want to manage their own DNS hostnames for their applications in their development environment. The solution must integrate the application-specific hostnames with the centrally managed DNS hostnames from the on-premises network and must provide bidirectional name resolution. The solution also must minimize management overhead. Which combination of steps should the network engineer take to meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Use an Amazon Route 53 Resolver inbound endpoint.",
      "B": "Modify the DHCP options set by setting a custom DNS server value.",
      "C": "Use an Amazon Route 53 Resolver outbound endpoint.",
      "D": "Create DNS proxy servers.",
      "E": "Create Amazon Route 53 private hosted zones.",
      "F": "Set up a zone transfer between Amazon Route 53 and the on-premises DNS."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103262-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 64,
    "question": "회사는 Application Load Balancer(ALB)를 원본으로 하는 Amazon CloudFront 배포의 ALB 뒤에서 Amazon EC2 인스턴스에서 웹 애플리케이션을 호스팅합니다. 회사는 인증된 고객에게 토큰을 제공하는 사용자 정의 인증 시스템을 구현하려고 합니다. 웹 애플리케이션은 콘텐츠를 전달하기 전에 GET/POST 요청이 인증된 고객으로부터 오는지 확인해야 합니다. 네트워크 엔지니어는 웹 애플리케이션이 권한이 있는 고객을 식별할 수 있는 솔루션을 설계해야 합니다. 이러한 요구사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "ALB를 사용하여 GET/POST 요청 페이로드 내의 인증된 토큰을 검사합니다. AWS Lambda 함수를 사용하여 인증된 고객 요청에 대해 웹 애플리케이션에 알리기 위해 사용자 정의 헤더를 삽입합니다.",
      "B": "AWS WAF를 ALB와 통합하여 GET/POST 요청 페이로드 내의 인증된 토큰을 검사합니다. ALB 리스너를 구성하여 인증된 고객 요청에 대해 웹 애플리케이션에 알리기 위해 사용자 정의 헤더를 삽입합니다.",
      "C": "AWS Lambda@Edge 함수를 사용하여 GET/POST 요청 페이로드 내의 인증된 토큰을 검사합니다. Lambda@Edge 함수를 사용하여 인증된 고객 요청에 대해 웹 애플리케이션에 알리기 위해 사용자 정의 헤더를 삽입합니다.",
      "D": "타사 패킷 검사 도구를 사용하는 EC2 인스턴스를 설정합니다. GET/POST 요청 페이로드 내의 인증된 토큰을 검사하도록 도구를 구성합니다. 인증된 고객 요청에 대해 웹 애플리케이션에 알리기 위해 사용자 정의 헤더를 삽입하도록 도구를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Lambda@Edge — CloudFront 엣지 로케이션에서 요청/응답 전 실행되는 Lambda 함수\n▸ 운영 효율성 — 인프라 관리 최소화, 자동 스케일링\n▸ 토큰 검증 — GET/POST 페이로드 내 인증 토큰 확인\n\n【정답 포인트】\n▸ CloudFront 분배가 이미 배포되어 있으므로 Lambda@Edge 활용\n▸ 엣지에서 인증 수행 → 원본 서버 부하 감소\n▸ 토큰 검증 후 사용자 정의 헤더 추가로 웹 앱이 신뢰할 수 있음\n▸ 운영 오버헤드: AWS 관리 서비스로 최소\n▸ 비용 효율적: 별도 ALB 필터링 불필요\n\n【오답 체크】\n(A) ALB: 요청 페이로드 검사 능력 제한, 토큰 검증 로직 복잡\n(B) AWS WAF: 네트워크 방화벽, 애플리케이션 로직 검증 부족\n(D) 타사 EC2 도구: 관리 오버헤드 증가, 운영 효율성 저하\n\n【시험 포인트】\nCloudFront + 토큰 검증 + 운영 효율 → Lambda@Edge 최적 솔루션",
    "en_q": "A company hosts a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The ALB is the origin in an Amazon CloudFront distribution. The company wants to implement a custom authentication system that will provide a token for its authenticated customers. The web application must ensure that the GET/POST requests come from authenticated customers before it delivers the content. A network engineer must design a solution that gives the web application the ability to identify authorized customers. What is the MOST operationally efficient solution that meets these requirements?",
    "en_opts": {
      "A": "Use the ALB to inspect the authorized token inside the GET/POST request payload. Use an AWS Lambda function to insert a customized header to inform the web application of an authenticated customer request.",
      "B": "Integrate AWS WAF with the ALB to inspect the authorized token inside the GET/POST request payload. Configure the ALB listener to insert a customized header to inform the web application of an authenticated customer request.",
      "C": "Use an AWS Lambda@Edge function to inspect the authorized token inside the GET/POST request payload. Use the Lambda@Edge function also to insert a customized header to inform the web application of an authenticated customer request.",
      "D": "Set up an EC2 instance that has a third-party packet inspection tool to inspect the authorized token inside the GET/POST request payload. Configure the tool to insert a customized header to inform the web application of an authenticated customer request."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103264-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 65,
    "question": "회사는 3개의 VPC를 생성했습니다: 프로덕션 VPC, 비프로덕션 VPC, 공유 서비스 VPC입니다. 프로덕션 VPC와 비프로덕션 VPC는 각각 공유 서비스 VPC와 통신해야 합니다. 프로덕션 VPC와 비프로덕션 VPC 간에는 통신이 없어야 합니다. VPC 간의 통신을 용이하게 하기 위해 Transit Gateway가 배포됩니다. VPC 간의 통신을 용이하게 하기 위해 Transit Gateway의 라우팅 테이블 구성은 어떻게 되어야 합니까?",
    "options": {
      "A": "프로덕션 및 비프로덕션 VPC 연결이 연결된 라우팅 테이블을 구성합니다. 공유 서비스 VPC의 전파된 경로만 사용합니다. 공유 서비스 VPC 연결만 연결된 추가 라우팅 테이블을 생성합니다. 프로덕션 및 비프로덕션 VPC의 전파된 경로만 사용합니다.",
      "B": "프로덕션 및 비프로덕션 VPC 연결이 연결된 라우팅 테이블을 구성합니다. 각 VPC의 전파된 경로를 사용합니다. 공유 서비스 VPC 연결만 연결된 추가 라우팅 테이블을 생성합니다. 각 VPC의 전파된 경로를 사용합니다.",
      "C": "프로덕션 및 비프로덕션 VPC 연결이 연결된 라우팅 테이블을 구성합니다. 공유 서비스 VPC의 전파된 경로만 사용합니다. 공유 서비스 VPC 연결만 연결된 추가 라우팅 테이블을 생성합니다. 프로덕션 및 비프로덕션 VPC의 전파된 경로만 사용합니다.",
      "D": "프로덕션 및 비프로덕션 VPC 연결이 연결된 라우팅 테이블을 구성합니다. 전파된 경로가 비활성화됩니다. 공유 서비스 VPC 연결만 연결된 추가 라우팅 테이블을 생성합니다. 프로덕션 및 비프로덕션 VPC의 전파된 경로만 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Transit Gateway Route Tables — TGW 연결의 라우팅 전파 및 격리를 관리\n▸ Route Propagation — VPC 경로를 TGW 라우팅 테이블에 자동 학습\n▸ Route Isolation — 특정 VPC 간 통신 차단\n\n【정답 포인트】\n요구사항:\n▸ Prod ↔ Shared OK, Non-Prod ↔ Shared OK\n▸ Prod ↔ Non-Prod NOT OK\n해결책:\nRoute Table 1:\n▸ 첨부: Prod + Non-Prod 연결\n▸ 경로 전파: Shared Service VPC만 활성화\n▸ 결과: Prod와 Non-Prod는 Shared와만 통신 가능\nRoute Table 2:\n▸ 첨부: Shared Service VPC 연결만\n▸ 경로 전파: Prod + Non-Prod 모두 활성화\n▸ 결과: Shared는 Prod, Non-Prod와 모두 통신 가능\n이 구성으로 \"Hub and Spoke\" 아키텍처 구현\n\n【오답 체크】\n(B) 각 VPC의 전파된 경로: Prod와 Non-Prod 간 상호 통신 허용 (정책 위반)\n(C) 텍스트 오류 (VPC 누락), 개념적으로도 B와 동일\n(D) 전파된 경로 비활성화: Shared VPC와 통신 불가능\n\n【시험 포인트】\n3VPC 아키텍처 + 선택적 통신 격리 → Route Table 분리 + 전파 제어",
    "en_q": "A company has created three VPCs: a production VPC, a nonproduction VPC, and a shared services VPC. The production VPC and the nonproduction VPC must each have communication with the shared services VPC. There must be no communication between the production VPC and the nonproduction VPC. A transit gateway is deployed to facilitate communication between VPCs. Which route table configurations on the transit gateway will meet these requirements?",
    "en_opts": {
      "A": "Configure a route table with the production and nonproduction VPC attachments associated with propagated routes for only the shared services VPC. Create an additional route table with only the shared services VPC attachment associated with propagated routes from the production and nonproduction VPCs.",
      "B": "Configure a route table with the production and nonproduction VPC attachments associated with propagated routes for each VPC. Create an additional route table with only the shared services VPC attachment associated with propagated routes from each VPC.",
      "C": "Configure a route table with all the VPC attachments associated with propagated routes for only the shared services VPCreate an additional route table with only the shared services VPC attachment associated with propagated routes from the production and nonproduction VPCs.",
      "D": "Configure a route table with the production and nonproduction VPC attachments associated with propagated routes disabled. Create an additional route table with only the shared services VPC attachment associated with propagated routes from the production and nonproduction VPCs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103265-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 66,
    "question": "회사는 회사의 온프레미스 데이터 센터에서 AWS 클라우드의 가상 프라이빗 게이트웨이로의 AWS Site-to-Site VPN 연결을 사용하고 있습니다. 혼잡으로 인해 회사는 트래픽이 인터넷을 통과하기 전에 AWS에 도달할 때 가용성 및 성능 문제를 경험하고 있습니다. 네트워크 엔지니어는 최소 관리 노력으로 가능한 빨리 이러한 문제를 줄여야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기존 Site-to-Site VPN 연결을 편집하여 가속을 활성화합니다. 새 설정이 적용되도록 고객 게이트웨이에서 VPN 서비스를 중지했다가 시작합니다.",
      "B": "기존 가상 프라이빗 게이트웨이와 동일한 AWS 리전에 Transit Gateway를 구성합니다. 새로운 가속 Site-to-Site VPN 연결을 생성합니다. VPN 첨부를 사용하여 새 연결을 Transit Gateway에 연결합니다. 새로운 Site-to-Site VPN 연결을 사용하도록 고객 게이트웨이 디바이스를 업데이트합니다. 기존 Site-to-Site VPN 연결을 삭제합니다.",
      "C": "새로운 가속 Site-to-Site VPN 연결을 생성합니다. 새 Site-to-Site VPN 연결을 기존 가상 프라이빗 게이트웨이에 연결합니다. 새로운 Site-to-Site VPN 연결을 사용하도록 고객 게이트웨이 디바이스를 업데이트합니다. 기존 Site-to-Site VPN 연결을 삭제합니다.",
      "D": "온프레미스 데이터 센터와 AWS 클라우드 간에 새로운 AWS Direct Connect 연결과 프라이빗 VIF를 생성합니다. 새로운 Direct Connect 연결을 사용하도록 고객 게이트웨이 디바이스를 업데이트합니다. 기존 Site-to-Site VPN 연결을 삭제합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Accelerated VPN — Global Accelerator를 활용하여 공개 인터넷 경로 최적화\n▸ Transit Gateway — 다중 VPC와 하이브리드 연결의 중앙 허브\n▸ VPN Attachment — Transit Gateway에 VPN 연결 통합\n\n【정답 포인트】\n▸ 기존 VPN이 인터넷 혼잡으로 성능 저하\n▸ 가속된 VPN = AWS Global Accelerator + VPN (공개 경로 최적화)\n▸ Transit Gateway 통합 이유:\n  - 향후 확장성 (추가 VPC 연결 용이)\n  - VPN 첨부로 가속 VPN 지원\n  - Virtual Private Gateway는 가속 VPN 지원 안 함\n▸ 최소 관리: Transit Gateway 한 번 설정으로 모든 VPC 지원\n\n【오답 체크】\n(A) 기존 VPN 가속 불가능 — Virtual Private Gateway는 가속 VPN 미지원\n(C) VPN은 가속 가능하지만 VPG에 연결 불가능\n(D) Direct Connect: 구성 시간 길어서 \"빨리\" 요구사항 미충족\n\n【시험 포인트】\nVPN 성능 개선 + 최소 관리 + 빠른 구현 → Transit Gateway + Accelerated VPN",
    "en_q": "A company is using an AWS Site-to-Site VPN connection from the company's on-premises data center to a virtual private gateway in the AWS Cloud Because of congestion, the company is experiencing availability and performance issues as traffic travels across the internet before the traffic reaches AWS. A network engineer must reduce these issues for the connection as quickly as possible with minimum administration effort. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Edit the existing Site-to-Site VPN connection by enabling acceleration. Stop and start the VPN service on the customer gateway for the new setting to take effect.",
      "B": "Configure a transit gateway in the same AWS Region as the existing virtual private gateway. Create a new accelerated Site-to-Site VPN connection. Connect the new connection to the transit gateway by using a VPN attachment. Update the customer gateway device to use the new Site to Site VPN connection. Delete the existing Site-to-Site VPN connection",
      "C": "Create a new accelerated Site-to-Site VPN connection. Connect the new Site-to-Site VPN connection to the existing virtual private gateway. Update the customer gateway device to use the new Site-to-Site VPN connection. Delete the existing Site-to-Site VPN connection.",
      "D": "Create a new AWS Direct Connect connection with a private VIF between the on-premises data center and the AWS Cloud. Update the customer gateway device to use the new Direct Connect connection. Delete the existing Site-to-Site VPN connection."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103267-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 67,
    "question": "호주의 전자상거래 회사는 모든 서비스를 AWS 클라우드에서 호스팅하고 미국(US) 서부로 고객 기반을 확장하려고 합니다. 회사는 미국 서부를 대상으로 확장하고 있으며, 기존 AWS 아키텍처는 ap-southeast-2 리전에 배포된 4개의 AWS 계정과 여러 VPC로 구성되어 있습니다. 모든 VPC는 ap-southeast-2의 Transit Gateway에 연결됩니다. 각 애플리케이션 서비스에 대한 전용 VPC가 있습니다. 회사는 또한 프록시, 방화벽, 로깅 같은 중앙집중식 보안 기능을 위한 VPC를 보유하고 있습니다. 회사는 ap-southeast-2의 인프라를 us-west-1 리전으로 복제할 계획입니다. 네트워크 엔지니어는 두 리전의 다양한 애플리케이션 간에 연결성을 설정해야 합니다. 솔루션은 대역폭을 최대화하고, 지연을 최소화하고, 운영 오버헤드를 최소화해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "두 Transit Gateway 간의 VPN 연결을 생성합니다. VPN 연결을 BGP 라우팅을 사용하도록 구성합니다.",
      "B": "각 리전의 Transit Gateway를 피어링합니다. 각 리전의 IP 주소에 대한 두 Transit Gateway 간의 라우팅을 구성합니다.",
      "C": "각 리전의 VPC에 VPN 서버를 생성합니다. 라우팅을 업데이트하여 대체 리전의 IP 주소에 대해 VPN 서버를 가리킵니다.",
      "D": "us-west-1의 VPC를 ap-southeast-2의 Transit Gateway에 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Transit Gateway Peering — 리전 간 Transit Gateway 간의 고속 연결\n▸ VPN Attachment — 인터넷 기반, 낮은 대역폭 (1.25 Gbps)\n▸ 대역폭 최대화 — AWS 글로벌 백본 네트워크 활용\n\n【정답 포인트】\n▸ 요구사항: 최대 대역폭 + 최소 지연 + 최소 오버헤드\n▸ Transit Gateway Peering:\n  - 두 TGW를 AWS 글로벌 네트워크로 연결\n  - VPN보다 훨씬 높은 대역폭 (제한 없음)\n  - 낮은 지연 (AWS 인프라 직접 연결)\n  - 라우팅 자동 학습 (운영 간단)\n▸ 각 리전 IP 주소 범위를 라우팅 테이블에 추가하여 양방향 통신 가능\n\n【오답 체크】\n(A) VPN 연결: 대역폭 제한 (1.25 Gbps), 지연 증가, BGP 설정 복잡\n(C) VPN 서버: 관리 오버헤드 크게 증가, 성능 저하\n(D) 직접 연결: 리전 간 거리로 지연 증가, 확장성 문제\n\n【시험 포인트】\n다중 리전 + 최대 대역폭 + 최소 지연 + 최소 오버헤드 → Transit Gateway Peering",
    "en_q": "An Australian ecommerce company hosts all of its services in the AWS Cloud and wants to expand its customer base to the United States (US). The company is targeting the western US for the expansion. The company's existing AWS architecture consists of four AWS accounts with multiple VPCs deployed in the ap-southeast-2 Region. All VPCs are attached to a transit gateway in ap-southeast-2. There are dedicated VPCs for each application service. The company also has VPCs for centralized security features such as proxies, firewalls, and logging. The company plans to duplicate the infrastructure from ap-southeast-2 to the us-west-1 Region. A network engineer must establish connectivity between the various applications in the two Regions. The solution must maximize bandwidth, minimize latency and minimize operational overhead. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create VPN attachments between the two transit gateways. Configure the VPN attachments to use BGP routing between the two transit gateways.",
      "B": "Peer the transit gateways in each Region. Configure routing between the two transit gateways for each Region's IP addresses.",
      "C": "Create a VPN server in a VPC in each Region. Update the routing to point to the VPN servers for the IP addresses in alternate Regions.",
      "D": "Attach the VPCs in us-west-1 to the transit gateway in ap-southeast-2."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103268-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 68,
    "question": "IoT 회사는 MQTT 메시징 프로토콜을 통해 온도, 습도, 압력 및 위치 데이터를 주기적으로 전송하는 하드웨어 센서 모듈을 판매합니다. 하드웨어 센서 모듈은 이 데이터를 Linux 서버에서 실행되는 부하 분산 장치 뒤의 회사의 온프레미스 MQTT 브로커로 전송합니다. 하드웨어 센서 모듈은 브로커에 도달하기 위해 공개 IP 주소로 하드코딩되어 있습니다. 회사가 성장하고 전 세계 고객을 획득하면서, 기존 솔루션은 더 이상 확장할 수 없으며 회사의 글로벌 존재로 인해 추가 지연을 초래합니다. 결과적으로 회사는 온프레미스에서 AWS 클라우드로 전체 인프라를 마이그레이션하기로 결정합니다. 회사는 이미 배포된 하드웨어 센서 모듈을 재구성하지 않고 마이그레이션해야 합니다. 솔루션은 또한 지연을 최소화해야 합니다. 회사는 MQTT 브로커를 Amazon EC2 인스턴스에서 실행되도록 마이그레이션합니다. 회사는 이러한 요구사항을 충족하기 위해 다음 무엇을 해야 합니까?",
    "options": {
      "A": "EC2 인스턴스를 Network Load Balancer(NLB) 뒤에 배치합니다. TCP 리스너를 구성합니다. 온프레미스 네트워크에서 BYOIP(Bring Your Own IP)를 사용하여 NLB로 구성합니다.",
      "B": "EC2 인스턴스를 Network Load Balancer(NLB) 뒤에 배치합니다. TCP 리스너를 구성합니다. AWS Global Accelerator 가속기를 생성합니다. BYOIP(Bring Your Own IP)를 온프레미스 네트워크에서 Global Accelerator로 사용합니다.",
      "C": "EC2 인스턴스를 Application Load Balancer(ALB) 뒤에 배치합니다. TCP 리스너를 구성합니다. AWS Global Accelerator 가속기를 생성합니다. BYOIP(Bring Your Own IP)를 온프레미스 네트워크에서 Global Accelerator로 사용합니다.",
      "D": "EC2 인스턴스를 Amazon CloudFront 분배 뒤에 배치합니다. 온프레미스 네트워크에서 CloudFront로 BYOIP(Bring Your Own IP)를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ BYOIP (Bring Your Own IP) — 온프레미스 IP를 AWS로 이전하여 클라이언트 연결 유지\n▸ Network Load Balancer (NLB) — TCP/UDP 프로토콜 지원, MQTT 호환\n▸ AWS Global Accelerator — 글로벌 엣지 로케이션을 통한 지연 최소화\n\n【정답 포인트】\n▸ MQTT는 TCP 기반 프로토콜 → NLB 필수 (ALB는 HTTP/HTTPS)\n▸ 하드웨어 재구성 불가 → BYOIP로 기존 공개 IP 주소 유지\n▸ 글로벌 지연 최소화 → Global Accelerator (엣지 로케이션 기반)\n▸ Global Accelerator + NLB + BYOIP 조합:\n  - 센서 → 동일 IP로 연결 (하드웨어 변경 없음)\n  - 글로벌 엣지 → 가장 가까운 AWS 리전 라우팅\n  - NLB → TCP MQTT 프로토콜 지원\n\n【오답 체크】\n(A) Global Accelerator 없음 → 글로벌 지연 최소화 못함\n(C) ALB: HTTP/HTTPS만 지원, MQTT(TCP) 프로토콜 미지원\n(D) CloudFront: HTTP/HTTPS CDN, TCP MQTT 프로토콜 미지원\n\n【시험 포인트】\nBYOIP + TCP 프로토콜 + 글로벌 지연 최소화 → NLB + Global Accelerator",
    "en_q": "An IoT company sells hardware sensor modules that periodically send out temperature, humidity, pressure, and location data through the MQTT messaging protocol. The hardware sensor modules send this data to the company's on-premises MQTT brokers that run on Linux servers behind a load balancer. The hardware sensor modules have been hardcoded with public IP addresses to reach the brokers. The company is growing and is acquiring customers across the world. The existing solution can no longer scale and is introducing additional latency because of the company's global presence. As a result, the company decides to migrate its entire infrastructure from on premises to the AWS Cloud. The company needs to migrate without reconfiguring the hardware sensor modules that are already deployed across the world. The solution also must minimize latency. The company migrates the MQTT brokers to run on Amazon EC2 instances. What should the company do next to meet these requirements?",
    "en_opts": {
      "A": "Place the EC2 instances behind a Network Load Balancer (NLB). Configure TCP listeners. Use Bring Your Own IP (BYOIP) from the on-premises network with the NLB.",
      "B": "Place the EC2 instances behind a Network Load Balancer (NLB). Configure TCP listeners. Create an AWS Global Accelerator accelerator in front of the NLUse Bring Your Own IP (BYOIP) from the on-premises network with Global Accelerator.",
      "C": "Place the EC2 instances behind an Application Load Balancer (ALB). Configure TCP listeners. Create an AWS Global Accelerator accelerator in front of the ALB. Use Bring Your Own IP (BYOIP) from the on-premises network with Global Accelerator",
      "D": "Place the EC2 instances behind an Amazon CloudFront distribution. Use Bring Your Own IP (BYOIP) from the on-premises network with CloudFront."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103269-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 69,
    "question": "회사는 AWS에 웹 애플리케이션을 배포했습니다. 웹 애플리케이션은 여러 가용 영역에 걸쳐 Application Load Balancer(ALB)를 사용합니다. ALB의 대상은 AWS Lambda 함수입니다. 웹 애플리케이션은 또한 모니터링을 위해 Amazon CloudWatch 메트릭을 사용합니다. 사용자는 웹 애플리케이션의 일부가 제대로 로드되지 않는다고 보고합니다. 네트워크 엔지니어는 문제를 해결해야 합니다. 네트워크 엔지니어는 ALB의 액세스 로깅을 활성화합니다. 네트워크 엔지니어는 다음에 무엇을 해야 하여 ALB가 수신하는 오류를 파악할 수 있습니까?",
    "options": {
      "A": "로그를 Amazon CloudWatch Logs로 보냅니다. CloudWatch Insights에서 ALB 로그를 검토하여 ALB가 수신하는 오류 메시지를 파악합니다.",
      "B": "Amazon S3 버킷 대상을 구성합니다. Amazon Athena를 사용하여 ALB가 수신하는 오류 메시지를 파악합니다.",
      "C": "Amazon S3 버킷 대상을 구성합니다. Amazon CloudWatch Logs가 S3 버킷에서 ALB 로그를 자동으로 가져온 후 CloudWatch Logs에서 로그를 검토하여 ALB가 수신하는 오류 메시지를 파악합니다.",
      "D": "로그를 Amazon CloudWatch Logs로 보냅니다. Amazon Athena CloudWatch 커넥터를 사용하여 ALB가 수신하는 오류 메시지를 파악합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ ALB Access Logs — ALB가 처리하는 모든 요청의 상세 정보 기록\n▸ Amazon S3 — ALB 액세스 로그의 기본 저장소\n▸ Amazon Athena — S3의 데이터에 대한 SQL 쿼리 실행\n▸ CloudWatch Logs Insights — 실시간 로그 쿼리\n\n【정답 포인트】\n▸ ALB 액세스 로그는 기본적으로 S3로 저장됨\n▸ CloudWatch Logs로 직접 스트리밍은 추가 설정 필요 (복잡)\n▸ S3 + Athena:\n  - ALB 로그가 자동으로 S3에 저장됨\n  - Athena로 SQL 쿼리로 HTTP 상태 코드, 오류 분석 용이\n  - 비용 효율적 (S3 저장소만)\n▸ CloudWatch Logs로 보내는 것 (A, D):\n  - 추가 비용 발생\n  - 실시간 분석 필요할 때만 유용\n  - 기본 설정은 S3 저장소\n\n【오답 체크】\n(A) CloudWatch Logs Insights: 실시간 쿼리 가능하지만 ALB 로그 기본 저장소 아님\n(C) CloudWatch는 S3에서 자동 로그 가져오기 기능 없음\n(D) Athena CloudWatch 커넥터: 추가 복잡도, 일반적이지 않음\n\n【시험 포인트】\nALB 액세스 로그 분석 → S3 저장 → Athena SQL 쿼리 = 표준 접근",
    "en_q": "A company has deployed a web application on AWS. The web application uses an Application Load Balancer (ALB) across multiple Availability Zones. The targets of the ALB are AWS Lambda functions. The web application also uses Amazon CloudWatch metrics for monitoring. Users report that parts of the web application are not loading properly. A network engineer needs to troubleshoot the problem. The network engineer enables access logging for the ALB. What should the network engineer do next to determine which errors the ALB is receiving?",
    "en_opts": {
      "A": "Send the logs to Amazon CloudWatch Logs. Review the ALB logs in CloudWatch Insights to determine which error messages the ALB is receiving.",
      "B": "Configure the Amazon S3 bucket destination. Use Amazon Athena to determine which error messages the ALB is receiving.",
      "C": "Configure the Amazon S3 bucket destination. After Amazon CloudWatch Logs pulls the ALB logs from the S3 bucket automatically, review the logs in CloudWatch Logs to determine which error messages the ALB is receiving.",
      "D": "Send the logs to Amazon CloudWatch Logs. Use the Amazon Athena CloudWatch Connector to determine which error messages the ALB is receiving."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103270-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 70,
    "question": "회사는 Amazon S3를 사용하여 금융 데이터를 보관하려고 계획하고 있습니다. 데이터는 현재 온프레미스 데이터 센터에 저장되어 있습니다. 회사는 AWS Direct Connect를 사용하여 Direct Connect 게이트웨이 및 Transit Gateway를 통해 온프레미스 데이터 센터에 연결합니다. 데이터는 공개 인터넷을 통해 전송되지 않아야 하며 전송 중에 암호화되어야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Direct Connect 공개 VIF를 생성합니다. Amazon S3에 접근하기 위해 공개 VIF를 통한 IPsec VPN 연결을 설정합니다. 통신에 HTTPS를 사용합니다.",
      "B": "Transit VIF를 통해 IPsec VPN 연결을 생성합니다. VPC를 생성하고 VPC를 Transit Gateway에 연결합니다. VPC에서 Amazon S3에 대한 인터페이스 VPC 엔드포인트를 프로비저닝합니다. 통신에 HTTPS를 사용합니다.",
      "C": "VPC를 생성하고 VPC를 Transit Gateway에 연결합니다. VPC에서 Amazon S3에 대한 인터페이스 VPC 엔드포인트를 프로비저닝합니다. 통신에 HTTPS를 사용합니다.",
      "D": "Direct Connect 공개 VIF를 생성합니다. Transit Gateway에 대한 IPsec VPN 연결을 공개 VIF를 통해 설정합니다. Amazon S3에 대한 첨부를 생성합니다. 통신에 HTTPS를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Transit VIF — Direct Connect를 통한 프라이빗 연결\n▸ IPsec VPN — 암호화 터널 (전송 중 암호화)\n▸ Interface VPC Endpoint — S3에 대한 프라이빗 액세스 (공개 인터넷 우회)\n▸ HTTPS — 애플리케이션 계층 암호화\n\n【정답 포인트】\n▸ 요구사항 1: 공개 인터넷을 통하지 않음 → Interface VPC Endpoint (S3 프라이빗 액세스)\n▸ 요구사항 2: 전송 중 암호화 → IPsec VPN (추가 암호화) + HTTPS\n▸ Transit VIF를 사용하는 이유:\n  - 프라이빗 연결 (공개 인터넷 우회)\n  - IPsec VPN 터널로 추가 보안\n▸ VPC + Interface Endpoint:\n  - S3의 프라이빗 엔드포인트로 모든 트래픽이 AWS 내부 경로\n  - Direct Connect → Transit Gateway → VPC → Interface Endpoint → S3\n\n【오답 체크】\n(A) 공개 VIF: 공개 인터넷 사용, 요구사항 위반\n(C) VPC Endpoint만: IPsec 암호화 없음, \"전송 중 암호화\" 미충족\n(D) 공개 VIF + \"S3 첨부\": Direct Connect 게이트웨이는 S3 첨부 미지원\n\n【시험 포인트】\n금융 데이터 + 프라이빗 경로 + 암호화 → Transit VIF + IPsec + Interface VPC Endpoint",
    "en_q": "A company is planning to use Amazon S3 to archive financial data. The data is currently stored in an on-premises data center. The company uses AWS Direct Connect with a Direct Connect gateway and a transit gateway to connect to the on-premises data center. The data cannot be transported over the public internet and must be encrypted in transit. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a Direct Connect public VIF. Set up an IPsec VPN connection over the public VIF to access Amazon S3. Use HTTPS for communication.",
      "B": "Create an IPsec VPN connection over the transit VIF. Create a VPC and attach the VPC to the transit gateway. In the VPC, provision an interface VPC endpoint for Amazon S3. Use HTTPS for communication.",
      "C": "Create a VPC and attach the VPC to the transit gateway. In the VPC, provision an interface VPC endpoint for Amazon S3. Use HTTPS for communication.",
      "D": "Create a Direct Connect public VIF. Set up an IPsec VPN connection over the public VIF to the transit gateway. Create an attachment for Amazon S3. Use HTTPS for communication."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103271-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 71,
    "question": "회사는 VPC에서 Amazon Route 53 Resolver DNS Firewall을 사용하여 승인된 목록에 있는 도메인을 제외한 모든 도메인을 차단합니다. 회사는 DNS Firewall이 응답하지 않으면 VPC의 리소스가 DNS 쿼리를 해석할 수 없게 되는 경우 영향을 받을 수 있다는 점을 우려합니다. 애플리케이션 SLA를 유지하기 위해 회사는 Route 53 Resolver가 DNS Firewall에서 응답을 받지 못하더라도 DNS 쿼리가 계속 해석되어야 합니다. 네트워크 엔지니어가 이러한 요구사항을 충족하기 위해 구현해야 할 변경사항은 무엇입니까?",
    "options": {
      "A": "DNS Firewall VPC 구성을 업데이트하여 VPC의 fail open을 비활성화합니다.",
      "B": "DNS Firewall VPC 구성을 업데이트하여 VPC의 fail open을 활성화합니다.",
      "C": "parameter dns_firewall_fail_open=false로 새 DHCP 옵션 집합을 생성합니다. 새 DHCP 옵션 집합을 VPC에 연결합니다.",
      "D": "parameter dns_firewall_fail_open=true로 새 DHCP 옵션 집합을 생성합니다. 새 DHCP 옵션 집합을 VPC에 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DNS Firewall — Route 53 Resolver 기반 DNS 필터링\n▸ Fail Open — DNS Firewall이 응답 불가능할 때 쿼리를 통과시킬지 차단할지 정책\n▸ SLA (Service Level Agreement) — 서비스 가용성 보장\n\n【정답 포인트】\n▸ 현 상태: DNS Firewall 정책 기반 거부 (승인된 도메인만 허용)\n▸ 문제: Firewall 장애 시 모든 쿼리 차단 → SLA 위반 위험\n▸ Fail Open 활성화:\n  - DNS Firewall 응답 불가 상태에서 쿼리를 통과시킴\n  - SLA 보장: DNS 서비스 가용성 유지\n  - 비정상 상황에 대한 \"open\" (통과) 정책\n▸ 설정 위치: VPC의 DNS Firewall 구성\n\n【오답 체크】\n(A) Fail Open 비활성화: Firewall 장애 시 SLA 위반\n(C) DHCP 옵션 설정: DNS Firewall VPC 설정이 아님, 구식 방법\n(D) DHCP 옵션: 현대적 관리 방식이 아님\n\n【시험 포인트】\nDNS 가용성 + DNS Firewall 장애 대비 → Fail Open 활성화",
    "en_q": "A company is using Amazon Route 53 Resolver DNS Firewall in a VPC to block all domains except domains that are on an approved list. The company is concerned that if DNS Firewall is unresponsive, resources in the VPC might be affected if the network cannot resolve any DNS queries. To maintain application service level agreements, the company needs DNS queries to continue to resolve even if Route 53 Resolver does not receive a response from DNS Firewall. Which change should a network engineer implement to meet these requirements?",
    "en_opts": {
      "A": "Update the DNS Firewall VPC configuration to disable fail open for the VPC.",
      "B": "Update the DNS Firewall VPC configuration to enable fail open for the VPC.",
      "C": "Create a new DHCP options set with parameter dns_firewall_fail_open=false. Associate the new DHCP options set with the VPC.",
      "D": "Create a new DHCP options set with parameter dns_firewall_fail_open=true. Associate the new DHCP options set with the VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/103273-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 72,
    "question": "회사는 기존 애플리케이션을 새 AWS 계정으로 마이그레이션합니다. 회사는 단일 AWS 리전에 여러 가용 영역을 사용하여 1개의 VPC와 함께 애플리케이션을 배포할 것입니다. 애플리케이션은 Amazon EC2 인스턴스에서 실행됩니다. 각 가용 영역에는 여러 EC2 인스턴스가 있습니다. EC2 인스턴스는 프라이빗 서브넷에 배포됩니다. 회사의 클라이언트는 HTTPS 프로토콜을 사용하여 웹 브라우저로 애플리케이션에 연결합니다. 인바운드 연결은 가용 영역 및 EC2 인스턴스에 분산되어야 합니다. 동일한 클라이언트 세션의 모든 연결은 동일한 EC2 인스턴스에 연결되어야 합니다. 회사는 클라이언트와 애플리케이션 간의 모든 연결에 대해 애플리케이션 SSL 인증서를 사용하여 엔드투엔드 암호화를 제공해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Network Load Balancer를 생성합니다. 대상 그룹을 생성합니다. 대상 그룹의 프로토콜을 TCP, 포트를 443으로 설정합니다. 세션 어피니티(sticky sessions)를 켭니다. EC2 인스턴스를 대상으로 등록합니다. 리스너를 생성합니다. 리스너의 프로토콜을 TCP, 포트를 443으로 설정합니다. SSL 인증서를 EC2 인스턴스에 배포합니다.",
      "B": "Application Load Balancer를 생성합니다. 대상 그룹을 생성합니다. 대상 그룹의 프로토콜을 HTTP, 포트를 80으로 설정합니다. 애플리케이션 기반 쿠키 정책으로 세션 어피니티(sticky sessions)를 켭니다. EC2 인스턴스를 대상으로 등록합니다. HTTPS 리스너를 생성합니다. 기본 작업을 대상 그룹으로 설정합니다. AWS Certificate Manager(ACM)를 사용하여 리스너에 대한 인증서를 생성합니다.",
      "C": "Network Load Balancer를 생성합니다. 대상 그룹을 생성합니다. 대상 그룹의 프로토콜을 TLS, 포트를 443으로 설정합니다. 세션 어피니티(sticky sessions)를 켭니다. EC2 인스턴스를 대상으로 등록합니다. 리스너를 생성합니다. 리스너의 프로토콜을 TLS, 포트를 443으로 설정합니다. AWS Certificate Manager(ACM)를 사용하여 애플리케이션에 대한 인증서를 생성합니다.",
      "D": "Application Load Balancer를 생성합니다. 대상 그룹을 생성합니다. 대상 그룹의 프로토콜을 HTTPS, 포트를 443으로 설정합니다. 애플리케이션 기반 쿠키 정책으로 세션 어피니티(sticky sessions)를 켭니다. EC2 인스턴스를 대상으로 등록합니다. HTTP 리스너를 생성합니다. 리스너의 포트를 443으로 설정합니다. 기본 작업을 대상 그룹으로 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Network Load Balancer (NLB) — TCP/TLS 기반 연결, 엔드투엔드 암호화 지원\n▸ Session Affinity (Sticky Sessions) — 동일 클라이언트를 같은 인스턴스로 라우팅\n▸ 엔드투엔드 암호화 — 클라이언트 ↔ 애플리케이션 전체 SSL 암호화\n\n【정답 포인트】\n▸ 로드 밸런싱 선택: NLB (HTTPS/TLS 엔드투엔드 암호화 지원)\n  - ALB는 ALB-EC2 간 HTTP 설정 후 EC2에서 암호화 (권장되지 않음)\n▸ 프로토콜 설정:\n  - 리스너: TCP 포트 443 (클라이언트 ↔ NLB)\n  - 대상 그룹: TCP 포트 443 (NLB ↔ EC2)\n  - 이 구성으로 SSL 패스스루 (NLB는 암호화 미해독)\n▸ 세션 어피니티: Sticky Sessions 활성화 (클라이언트 세션 유지)\n▸ SSL 인증서: EC2에 배포 (애플리케이션 인증서)\n▸ 엔드투엔드 암호화: 클라이언트 → NLB → EC2 모두 암호화\n\n【오답 체크】\n(B) ALB + HTTP 대상: 클라이언트-ALB는 HTTPS, ALB-EC2는 HTTP → 중간 해독 (엔드투엔드 X)\n(C) NLB + TLS 대상: NLB에서 인증서 설정 (응용 인증서 X, 중복)\n(D) ALB + HTTPS 대상: ALB는 HTTPS 대상 미지원, 리스너 포트 불일치\n\n【시험 포인트】\nTCP HTTPS + 세션 고정 + 엔드투엔드 암호화 → NLB + TCP 443 + Sticky Sessions",
    "en_q": "A company is migrating an existing application to a new AWS account. The company will deploy the application in a single AWS Region by using one VPC and multiple Availability Zones. The application will run on Amazon EC2 instances. Each Availability Zone will have several EC2 instances. The EC2 instances will be deployed in private subnets. The company's clients will connect to the application by using a web browser with the HTTPS protocol. Inbound connections must be distributed across the Availability Zones and EC2 instances. All connections from the same client session must be connected to the same EC2 instance. The company must provide end-to-end encryption for all connections between the clients and the application by using the application SSL certificate. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a Network Load Balancer. Create a target group. Set the protocol to TCP and the port to 443 for the target group. Turn on session affinity (sticky sessions). Register the EC2 instances as targets. Create a listener. Set the protocol to TCP and the port to 443 for the listener. Deploy SSL certificates to the EC2 instances.",
      "B": "Create an Application Load Balancer. Create a target group. Set the protocol to HTTP and the port to 80 for the target group. Turn on session affinity (sticky sessions) with an application-based cookie policy. Register the EC2 instances as targets. Create an HTTPS listener. Set the default action to forward to the target group. Use AWS Certificate Manager (ACM) to create a certificate for the listener.",
      "C": "Create a Network Load Balancer. Create a target group. Set the protocol to TLS and the port to 443 for the target group. Turn on session affinity (sticky sessions). Register the EC2 instances as targets. Create a listener. Set the protocol to TLS and the port to 443 for the listener. Use AWS Certificate Manager (ACM) to create a certificate for the application.",
      "D": "Create an Application Load Balancer. Create a target group. Set the protocol to HTTPS and the port to 443 for the target group. Turn on session affinity (sticky sessions) with an application-based cookie policy. Register the EC2 instances as targets. Create an HTTP listener. Set the port to 443 for the listener. Set the default action to forward to the target group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/106759-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 73,
    "question": "회사는 IoT 디바이스가 AWS 클라우드에 측정값을 보고하는 애플리케이션을 개발하고 있습니다. 애플리케이션은 수백만 명의 최종 사용자를 갖게 됩니다. 회사는 IoT 디바이스가 DNS 해석을 지원할 수 없음을 알았습니다. 회사는 IoT 디바이스가 DNS를 사용하지 않고 애플리케이션 엔드포인트에 연결할 수 있도록 Amazon EC2 Auto Scaling 솔루션을 구현해야 합니다. 이러한 요구사항을 가장 비용 효과적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Network Load Balancer(NLB)의 Application Load Balancer(ALB) 유형 대상 그룹을 사용합니다. EC2 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹을 ALB에 연결합니다. IoT 디바이스가 NLB의 IP 주소에 연결되도록 설정합니다.",
      "B": "Application Load Balancer(ALB) 엔드포인트를 사용하는 AWS Global Accelerator 가속기를 사용합니다. EC2 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹을 ALB에 연결합니다. IoT 디바이스가 가속기의 IP 주소에 연결되도록 설정합니다.",
      "C": "Network Load Balancer(NLB)를 사용합니다. EC2 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹을 NLB에 연결합니다. IoT 디바이스가 NLB의 IP 주소에 연결되도록 설정합니다.",
      "D": "Network Load Balancer(NLB) 엔드포인트를 사용하는 AWS Global Accelerator 가속기를 사용합니다. EC2 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹을 NLB에 연결합니다. IoT 디바이스가 가속기의 IP 주소에 연결되도록 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ DNS 미지원 — IP 주소로만 연결 가능\n▸ Network Load Balancer (NLB) — 고정 IP 주소 지원\n▸ Global Accelerator — 추가 비용, 글로벌 성능 요구 없음\n▸ 비용 효율성 — 불필요한 서비스 제외\n\n【정답 포인트】\n▸ DNS 비지원 요구사항 → IP 주소 기반 연결만 가능\n▸ NLB 선택 이유:\n  - 고정 IP 주소 제공 (Elastic IP)\n  - TCP/UDP 프로토콜 지원\n  - IoT 디바이스 대규모 수용 가능\n▸ Auto Scaling:\n  - NLB에 첨부로 자동 스케일링\n  - 수백만 디바이스 부하 처리\n▸ 비용 최소화:\n  - Global Accelerator 불필요 (글로벌 최적화 요구 없음)\n  - NLB + Auto Scaling만으로 충분\n  - ALB는 DNS 이름 필요 (요구사항 위반)\n\n【오답 체크】\n(A) NLB ALB 유형 대상 그룹: 혼합 로드 밸런서 (비표준)\n(B) Global Accelerator + ALB: 추가 비용, ALB는 DNS 필요\n(D) Global Accelerator + NLB: 불필요한 글로벌 가속기 비용\n\n【시험 포인트】\nIP 기반 연결 + 최소 비용 + 대규모 확장 → NLB + Auto Scaling",
    "en_q": "A company is developing an application in which IoT devices will report measurements to the AWS Cloud. The application will have millions of end users. The company observes that the IoT devices cannot support DNS resolution. The company needs to implement an Amazon EC2 Auto Scaling solution so that the IoT devices can connect to an application endpoint without using DNS. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Use an Application Load Balancer (ALB)-type target group for a Network Load Balancer (NLB). Create an EC2 Auto Scaling group. Attach the Auto Scaling group to the ALB. Set up the IoT devices to connect to the IP addresses of the NLB.",
      "B": "Use an AWS Global Accelerator accelerator with an Application Load Balancer (ALB) endpoint. Create an EC2 Auto Scaling group. Attach the Auto Scaling group to the ALSet up the IoT devices to connect to the IP addresses of the accelerator.",
      "C": "Use a Network Load Balancer (NLB). Create an EC2 Auto Scaling group. Attach the Auto Scaling group to the NLB. Set up the IoT devices to connect to the IP addresses of the NLB.",
      "D": "Use an AWS Global Accelerator accelerator with a Network Load Balancer (NLB) endpoint. Create an EC2 Auto Scaling group. Attach the Auto Scaling group to the NLB. Set up the IoT devices to connect to the IP addresses of the accelerator."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/107320-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 74,
    "question": "회사는 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 인스턴스에 새로운 웹 애플리케이션을 배포했습니다. 인스턴스는 Amazon EC2 Auto Scaling 그룹에 있습니다. 전 세계의 엔터프라이즈 고객들이 애플리케이션을 사용할 것입니다. 이들 엔터프라이즈 고객의 직원들이 사무실 위치에서 HTTPS를 통해 애플리케이션에 연결합니다. 회사는 방화벽을 구성하여 승인된 IP 주소로만 아웃바운드 트래픽을 허용해야 합니다. 엔터프라이즈 고객의 직원들은 최소 지연으로 애플리케이션에 접근해야 합니다. 네트워크 엔지니어가 인프라에서 이러한 요구사항을 충족하기 위해 어떤 변경을 해야 합니까?",
    "options": {
      "A": "새 Network Load Balancer(NLB)를 생성합니다. ALB를 NLB의 대상으로 추가합니다.",
      "B": "새 Amazon CloudFront 배포를 생성합니다. ALB를 배포의 원본으로 설정합니다.",
      "C": "AWS Global Accelerator에서 새 가속기를 생성합니다. ALB를 가속기 엔드포인트로 추가합니다.",
      "D": "새 Amazon Route 53 호스팅 영역을 생성합니다. ALB로 트래픽을 라우팅하는 새 레코드를 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Global Accelerator — 고정 IP 주소로 글로벌 성능 최적화\n▸ Approved IP Addresses — 방화벽 화이트리스트\n▸ Minimum Latency — 지연 최소화\n\n【정답 포인트】\n▸ 요구사항 분석:\n  1) 방화벽 화이트리스트: 승인된 IP만 허용\n  2) 글로벌 액세스: 최소 지연\n▸ Global Accelerator 선택 이유:\n  - 고정 IP 주소 2개 제공 (화이트리스트에 추가)\n  - 글로벌 엣지 로케이션 기반 라우팅\n  - 애니캐스트 주소: 사용자가 가장 가까운 엣지 위치로 자동 라우팅\n  - ALB를 엔드포인트로 설정 가능\n▸ 구성:\n  - Global Accelerator 가속기 생성\n  - ALB를 엔드포인트로 등록\n  - 고정 IP를 방화벽 화이트리스트에 추가\n  - 결과: 모든 사용자가 고정 IP로 연결, 지연 최소화\n\n【오답 체크】\n(A) NLB: 고정 IP는 있지만, ALB-NLB 중복, 글로벌 라우팅 X\n(B) CloudFront: CDN, HTTP/HTTPS 컨텐츠 캐싱 (애플리케이션 로직 X)\n(D) Route 53: DNS 이름 기반, 고정 IP 미지원\n\n【시험 포인트】\n글로벌 클라이언트 + 고정 IP 화이트리스트 + 최소 지연 → Global Accelerator",
    "en_q": "A company has deployed a new web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in an Amazon EC2 Auto Scaling group. Enterprise customers from around the world will use the application. Employees of these enterprise customers will connect to the application over HTTPS from office locations. The company must configure firewalls to allow outbound traffic to only approved IP addresses. The employees of the enterprise customers must be able to access the application with the least amount of latency. Which change should a network engineer make in the infrastructure to meet these requirements?",
    "en_opts": {
      "A": "Create a new Network Load Balancer (NLB). Add the ALB as a target of the NLB.",
      "B": "Create a new Amazon CloudFront distribution. Set the ALB as the distribution's origin.",
      "C": "Create a new accelerator in AWS Global Accelerator. Add the ALB as an accelerator endpoint.",
      "D": "Create a new Amazon Route 53 hosted zone. Create a new record to route traffic to the ALB."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/106844-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 75,
    "question": "회사는 AWS에 수백 개의 VPC를 보유하고 있습니다. 모든 VPC는 NAT 게이트웨이를 통해 Amazon S3 및 AWS Systems Manager의 공개 엔드포인트에 액세스합니다. 모든 VPC에서 Amazon S3 및 Systems Manager로의 트래픽은 NAT 게이트웨이를 통과합니다. 회사의 네트워크 엔지니어는 이러한 서비스에 대한 액세스를 중앙집중화하고 공개 엔드포인트 사용의 필요성을 제거해야 합니다. 이러한 요구사항을 가장 적은 운영 오버헤드로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "프라이빗 NAT 게이트웨이가 있는 중앙 이그레스 VPC를 생성합니다. AWS Transit Gateway를 사용하여 모든 VPC를 중앙 이그레스 VPC에 연결합니다. 프라이빗 NAT 게이트웨이를 사용하여 프라이빗 IP 주소를 사용하여 Amazon S3 및 Systems Manager에 연결합니다.",
      "B": "중앙 공유 서비스 VPC를 생성합니다. 중앙 공유 서비스 VPC에서 Amazon S3 및 Systems Manager에 대한 인터페이스 VPC 엔드포인트를 생성합니다. 프라이빗 DNS가 꺼져 있는지 확인합니다. AWS Transit Gateway를 사용하여 모든 VPC를 중앙 공유 서비스 VPC에 연결합니다. 각 인터페이스 VPC 엔드포인트에 대한 Amazon Route 53 포워딩 규칙을 생성합니다. 포워딩 규칙을 모든 VPC와 연결합니다. DNS 쿼리를 공유 서비스 VPC의 인터페이스 VPC 엔드포인트로 포워드합니다.",
      "C": "중앙 공유 서비스 VPC를 생성합니다. 중앙 공유 서비스 VPC에서 Amazon S3 및 Systems Manager에 대한 인터페이스 VPC 엔드포인트를 생성합니다. 프라이빗 DNS가 꺼져 있는지 확인합니다. AWS Transit Gateway를 사용하여 모든 VPC를 중앙 공유 서비스 VPC에 연결합니다. Amazon S3 및 Systems Manager의 전체 서비스 엔드포인트 이름을 사용하여 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역을 모든 VPC와 연결합니다. 각 프라이빗 호스팅 영역에서 전체 AWS 서비스 엔드포인트를 가리키는 에일리어스 레코드를 생성합니다. 공유 서비스 VPC의 인터페이스 VPC 엔드포인트를 가리킵니다.",
      "D": "중앙 공유 서비스 VPC를 생성합니다. 중앙 공유 서비스 VPC에서 Amazon S3 및 Systems Manager에 대한 인터페이스 VPC 엔드포인트를 생성합니다. AWS Transit Gateway를 사용하여 모든 VPC를 중앙 공유 서비스 VPC에 연결합니다. 인터페이스 VPC 엔드포인트에 프라이빗 DNS가 켜져 있는지 확인하고 Transit Gateway가 DNS 지원으로 생성되었는지 확인합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Interface VPC Endpoint — AWS 서비스에 프라이빗 액세스\n▸ Private Hosted Zone — Route 53 기반 프라이빗 DNS 해석\n▸ Transit Gateway — 중앙 허브로 모든 VPC 연결\n▸ Route Propagation — DNS 쿼리 자동 라우팅\n\n【정답 포인트】\n▸ 요구사항: 공개 엔드포인트 제거 + 최소 운영 오버헤드\n▸ 솔루션 C의 핵심:\n  1) 중앙 VPC에 Interface Endpoint 생성\n     - S3 + Systems Manager 프라이빗 엔드포인트\n  2) Private DNS 비활성화 (정확한 라우팅 제어)\n  3) Route 53 Private Hosted Zone 생성\n     - 서비스 도메인 이름 (예: s3.amazonaws.com)\n     - 모든 VPC와 연결\n  4) Alias Records 설정\n     - 서비스 도메인 → Interface VPC Endpoint IP\n  5) Transit Gateway 연결로 네트워크 통합\n▸ 결과: 모든 VPC가 DNS로 쿼리 시 자동 라우팅\n\n【오답 체크】\n(A) Private NAT Gateway: \"프라이빗 NAT\" 존재 안 함 (모순)\n(B) Route 53 Forwarding Rules: 복잡, 관리 오버헤드 증가\n(D) Private DNS 활성화: 여러 VPC에서 충돌 위험, Transit Gateway DNS 지원 필수\n\n【시험 포인트】\n중앙집중식 Interface Endpoint + Private Hosted Zone + Transit Gateway = 운영 효율성 최대",
    "en_q": "A company has hundreds of VPCs on AWS. All the VPCs access the public endpoints of Amazon S3 and AWS Systems Manager through NAT gateways. All the traffic from the VPCs to Amazon S3 and Systems Manager travels through the NAT gateways. The company's network engineer must centralize access to these services and must eliminate the need to use public endpoints. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create a central egress VPC that has private NAT gateways. Connect all the VPCs to the central egress VPC by using AWS Transit Gateway. Use the private NAT gateways to connect to Amazon S3 and Systems Manager by using private IP addresses.",
      "B": "Create a central shared services VPC. In the central shared services VPC, create interface VPC endpoints for Amazon S3 and Systems Manager to access. Ensure that private DNS is turned off. Connect all the VPCs to the central shared services VPC by using AWS Transit Gateway. Create an Amazon Route 53 forwarding rule for each interface VPC endpoint. Associate the forwarding rules with all the VPCs. Forward DNS queries to the interface VPC endpoints in the shared services VPC.",
      "C": "Create a central shared services VPIn the central shared services VPC, create interface VPC endpoints for Amazon S3 and Systems Manager to access. Ensure that private DNS is turned off. Connect all the VPCs to the central shared services VPC by using AWS Transit Gateway. Create an Amazon Route 53 private hosted zone with a full service endpoint name for Amazon S3 and Systems Manager. Associate the private hosted zones with all the VPCs. Create an alias record in each private hosted zone with the full AWS service endpoint pointing to the interface VPC endpoint in the shared services VPC.",
      "D": "Create a central shared services VPC. In the central shared services VPC, create interface VPC endpoints for Amazon S3 and Systems Manager to access. Connect all the VPCs to the central shared services VPC by using AWS Transit Gateway. Ensure that private DNS is turned on for the interface VPC endpoints and that the transit gateway is created with DNS support turned on."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/106846-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 76,
    "question": "회사는 여러 AWS 리전의 VPC에서 리소스를 관리합니다. 회사는 내부 도메인 이름을 사용하여 리소스에 연결해야 합니다. 네트워크 엔지니어는 모든 리소스에 aws.example.com DNS 접미사를 적용해야 합니다. 네트워크 엔지니어가 이 요구사항을 충족하기 위해 해야 할 일은 무엇입니까?",
    "options": {
      "A": "리소스가 있는 각 리전에서 aws.example.com에 대한 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역을 해당 리전의 VPC와 연결합니다. 적절한 프라이빗 호스팅 영역에서 각 리전의 리소스에 대한 DNS 레코드를 생성합니다.",
      "B": "aws.example.com에 대한 Amazon Route 53 프라이빗 호스팅 영역 1개를 생성합니다. 프라이빗 호스팅 영역이 모든 VPC를 사용하여 영역 전송을 허용하도록 구성합니다.",
      "C": "example.com에 대한 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역에서 aws.example.com의 단일 리소스 레코드를 생성합니다. 멀티값 답변 라우팅 정책을 레코드에 적용합니다. 라우팅 정책에서 모든 VPC 리소스를 별도 값으로 추가합니다.",
      "D": "aws.example.com에 대한 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역을 리소스가 있는 모든 VPC와 연결합니다. 프라이빗 호스팅 영역에서 모든 리소스에 대한 DNS 레코드를 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Private Hosted Zone — Route 53의 VPC 내부 DNS 도메인\n▸ Zone Association — 호스팅 영역을 VPC와 연결하여 DNS 해석\n▸ AWS DNS Suffix — 모든 리소스에 일관된 도메인 적용\n\n【정답 포인트】\n▸ 요구사항: 모든 리소스에 aws.example.com 접미사 적용\n▸ 솔루션 D의 장점:\n  1) 1개의 중앙 Private Hosted Zone\n     - aws.example.com 도메인 보유\n     - 모든 리전의 리소스 DNS 레코드 포함\n  2) 모든 VPC와 연결\n     - 여러 리전: 각 VPC와 연결 가능\n     - 호스팅 영역은 1개 (중앙 관리)\n  3) 단일 DNS 소스\n     - 어느 리전의 VPC에서든 aws.example.com으로 해석\n     - 관리 효율성 최대\n\n【오답 체크】\n(A) 리전별 호스팅 영역: 분산 관리, 복잡도 증가, DNS 일관성 어려움\n(B) Zone Transfer: 호스팅 영역 복제 메커니즘, AWS Route 53 기능 아님\n(C) Multivalue Answer: 모든 리소스를 단일 레코드에 포함 (확장성 제한)\n\n【시험 포인트】\n다중 리전 + 단일 DNS 도메인 + 중앙 관리 → 1개 Private Hosted Zone + 모든 VPC 연결",
    "en_q": "A company manages resources across VPCs in multiple AWS Regions. The company needs to connect to the resources by using its internal domain name. A network engineer needs to apply the aws.example.com DNS suffix to all resources. What must the network engineer do to meet this requirement?",
    "en_opts": {
      "A": "Create an Amazon Route 53 private hosted zone for aws.example.com in each Region that has resources. Associate the private hosted zone with that Region's VPC. In the appropriate private hosted zone, create DNS records for the resources in each Region.",
      "B": "Create one Amazon Route 53 private hosted zone for aws.example.com. Configure the private hosted zone to allow zone transfers with every VPC.",
      "C": "Create one Amazon Route 53 private hosted zone for example.com. Create a single resource record for aws.example.com in the private hosted zone. Apply a multivalue answer routing policy to the record. Add all VPC resources as separate values in the routing policy.",
      "D": "Create one Amazon Route 53 private hosted zone for aws.example.com. Associate the private hosted zone with every VPC that has resources. In the private hosted zone, create DNS records for all resources."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/107142-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 77,
    "question": "보험회사가 온프레미스 데이터센터에서 AWS 클라우드로 워크로드를 마이그레이션하려고 계획 중입니다. 회사는 엔드투엔드 도메인 이름 해석이 필요합니다. AWS와 기존 온프레미스 환경 간 양방향 DNS 해석이 수립되어야 합니다. 워크로드는 여러 VPC로 마이그레이션되며, 워크로드가 상호 의존성을 가지고 있어 모든 워크로드가 동시에 마이그레이션되지 않습니다. 어떤 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "각 애플리케이션 VPC에 대해 프라이빗 호스팅 영역을 구성하고 필요한 레코드를 생성합니다. Egress VPC에 Route 53 Resolver 인바운드 및 아웃바운드 엔드포인트 세트를 생성합니다. Route 53 Resolver 규칙을 정의하여 온프레미스 도메인 요청을 온프레미스 DNS 리졸버로 전달합니다. 애플리케이션 VPC 프라이빗 호스팅 영역을 Egress VPC와 연결하고 AWS Resource Access Manager를 사용하여 애플리케이션 계정과 Route 53 Resolver 규칙을 공유합니다. 온프레미스 DNS 서버를 Route 53 인바운드 엔드포인트로 클라우드 도메인을 전달하도록 구성합니다.",
      "B": "각 애플리케이션 VPC에 대해 퍼블릭 호스팅 영역을 구성하고 필요한 레코드를 생성합니다. Egress VPC에 Route 53 Resolver 인바운드 및 아웃바운드 엔드포인트 세트를 생성합니다. Route 53 Resolver 규칙을 정의하여 온프레미스 도메인 요청을 온프레미스 DNS 리졸버로 전달합니다. 애플리케이션 VPC 프라이빗 호스팅 영역을 Egress VPC와 연결하고 AWS Resource Access Manager를 사용하여 애플리케이션 계정과 Route 53 Resolver 규칙을 공유합니다. 온프레미스 DNS 서버를 Route 53 인바운드 엔드포인트로 클라우드 도메인을 전달하도록 구성합니다.",
      "C": "각 애플리케이션 VPC에 대해 프라이빗 호스팅 영역을 구성하고 필요한 레코드를 생성합니다. Egress VPC에 Route 53 Resolver 인바운드 및 아웃바운드 엔드포인트 세트를 생성합니다. Route 53 Resolver 규칙을 정의하여 온프레미스 도메인 요청을 온프레미스 DNS 리졸버로 전달합니다. 애플리케이션 VPC 프라이빗 호스팅 영역을 Egress VPC와 연결하고 AWS Resource Access Manager를 사용하여 애플리케이션 계정과 Route 53 Resolver 규칙을 공유합니다. 온프레미스 DNS 서버를 Route 53 아웃바운드 엔드포인트로 클라우드 도메인을 전달하도록 구성합니다.",
      "D": "각 애플리케이션 VPC에 대해 프라이빗 호스팅 영역을 구성하고 필요한 레코드를 생성합니다. Egress VPC에 Route 53 Resolver 인바운드 및 아웃바운드 엔드포인트 세트를 생성합니다. Route 53 Resolver 규칙을 정의하여 온프레미스 도메인 요청을 온프레미스 DNS 리졸버로 전달합니다. Route 53 아웃바운드 규칙을 애플리케이션 VPC와 연결하고 AWS Resource Access Manager를 사용하여 애플리케이션 계정과 프라이빗 호스팅 영역을 공유합니다. 온프레미스 DNS 서버를 Route 53 인바운드 엔드포인트로 클라우드 도메인을 전달하도록 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver — 하이브리드 DNS 환경에서 양방향 DNS 해석 제공\n▸ Private Hosted Zone — VPC 내 프라이빗 도메인 관리\n▸ Inbound/Outbound Endpoint — DNS 쿼리 방향성 제어\n\n【정답 포인트】\n▸ 프라이빗 호스팅 영역 사용 필요 (B 오답): 온프레미스 도메인은 프라이빗이므로 퍼블릭 영역 부적합\n▸ 아웃바운드 엔드포인트 사용 (C, D 오답): AWS에서 온프레미스 DNS로 쿼리 전달 시 아웃바운드 필요\n▸ Resolver 규칙 공유 필수: RAM을 통해 여러 VPC와 규칙 공유\n▸ 인바운드 엔드포인트: 온프레미스에서 AWS 도메인 해석 시 필요\n\n【오답 체크】\n(B) 퍼블릭 호스팅 영역은 인터넷 노출 위험 및 온프레미스 프라이빗 도메인과 충돌\n(C) 아웃바운드 엔드포인트로 도메인 전달은 역방향 (온프레미스→AWS 해석 안 됨)\n(D) 규칙을 영역 대신 공유하는 것은 비효율적이며 확장성 부족\n\n【시험 포인트】\n멀티 VPC 마이그레이션에서 하이브리드 DNS 아키텍처는 Egress VPC 중앙화 + RAM 공유 패턴. 양방향 해석을 위해 인바운드(온프레미스→AWS)와 아웃바운드(AWS→온프레미스) 모두 필요하며, private hosted zone이 보안 기본.",
    "en_q": "An insurance company is planning the migration of workloads from its on-premises data center to the AWS Cloud. The company requires end-to-end domain name resolution. Bi-directional DNS resolution between AWS and the existing on-premises environments must be established. The workloads will be migrated into multiple VPCs. The workloads also have dependencies on each other, and not all the workloads will be migrated at the same time. Which solution meets these requirements?",
    "en_opts": {
      "A": "Configure a private hosted zone for each application VPC, and create the requisite records. Create a set of Amazon Route 53 Resolver inbound and outbound endpoints in an egress VPC. Define Route 53 Resolver rules to forward requests for the on-premises domains to the on-premises DNS resolver. Associate the application VPC private hosted zones with the egress VPC, and share the Route 53 Resolver rules with the application accounts by using AWS Resource Access Manager. Configure the on-premises DNS servers to forward the cloud domains to the Route 53 inbound endpoints.",
      "B": "Configure a public hosted zone for each application VPC, and create the requisite records. Create a set of Amazon Route 53 Resolver inbound and outbound endpoints in an egress VPC. Define Route 53 Resolver rules to forward requests for the on-premises domains to the on-premises DNS resolver. Associate the application VPC private hosted zones with the egress VPC, and share the Route 53 Resolver rules with the application accounts by using AWS Resource Access Manager. Configure the on-premises DNS servers to forward the cloud domains to the Route 53 inbound endpoints.",
      "C": "Configure a private hosted zone for each application VPC, and create the requisite records. Create a set of Amazon Route 53 Resolver inbound and outbound endpoints in an egress VPC. Define Route 53 Resolver rules to forward requests for the on-premises domains to the on-premises DNS resolver. Associate the application VPC private hosted zones with the egress VPC, and share the Route 53 Resolver rules with the application accounts by using AWS Resource Access Manager. Configure the on-premises DNS servers to forward the cloud domains to the Route 53 outbound endpoints.",
      "D": "Configure a private hosted zone for each application VPC, and create the requisite records. Create a set of Amazon Route 53 Resolver inbound and outbound endpoints in an egress VPC. Define Route 53 Resolver rules to forward requests for the on-premises domains to the on-premises DNS resolver. Associate the Route 53 outbound rules with the application VPCs, and share the private hosted zones with the application accounts by using AWS Resource Access Manager. Configure the on-premises DNS servers to forward the cloud domains to the Route 53 inbound endpoints."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/107358-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 78,
    "question": "글로벌 회사가 us-east-1 리전의 VPC 내 비즈니스 애플리케이션을 운영합니다. 런던의 지역 사무소는 VPC에 대한 AWS Site-to-Site VPN 연결을 위해 가상 프라이빗 게이트웨이를 사용합니다. 회사는 Transit Gateway를 구성했고 회사의 다양한 부서가 사용하는 다른 VPC와의 피어링을 설정했습니다. 런던 사무소의 직원들은 비즈니스 애플리케이션에 연결할 때 지연 시간 문제를 경험하고 있습니다. 네트워크 엔지니어는 이 지연을 줄이기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "새 Site-to-Site VPN 연결을 생성합니다. Transit Gateway를 대상 게이트웨이로 설정합니다. 새 Site-to-Site VPN 연결에서 가속을 활성화합니다. 런던 사무소의 VPN 디바이스를 새 연결 세부사항으로 업데이트합니다.",
      "B": "기존 Site-to-Site VPN 연결을 수정하여 Transit Gateway를 대상 게이트웨이로 설정합니다. 기존 Site-to-Site VPN 연결에서 가속을 활성화합니다.",
      "C": "eu-west-2(런던) 리전에 새 Transit Gateway를 생성합니다. 새 Transit Gateway를 기존 Transit Gateway와 피어링합니다. 기존 Site-to-Site VPN 연결을 수정하여 새 Transit Gateway를 대상 게이트웨이로 설정합니다.",
      "D": "Site-to-Site VPN 연결의 엔드포인트를 포함하는 새 AWS Global Accelerator 표준 가속기를 생성합니다. 런던 사무소의 VPN 디바이스를 새 연결 세부사항으로 업데이트합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ VPN Acceleration — Site-to-Site VPN의 처리량 향상 (1.25 Gbps→2.5 Gbps)\n▸ Transit Gateway Target — VPN 연결의 대상으로 TGW 지정\n▸ Virtual Private Gateway — 이전 방식의 VPN 게이트웨이\n\n【정답 포인트】\n▸ 새 연결 필요 (B 오답): 기존 연결은 VGW 대상이므로 수정으로는 TGW 연결 불가\n▸ VPN Acceleration 활성화: 지연 시간 개선의 핵심 (처리량 2배 증가)\n▸ Transit Gateway 대상: 피어링된 VPC들과의 효율적 연결\n▸ VPN 디바이스 업데이트: 엔드포인트 변경 필수\n\n【오답 체크】\n(B) 기존 VPN은 VGW 부착이므로 수정만으로는 TGW 연결 미지원\n(C) 리전 간 TGW는 비용 증가 및 추가 지연 (가속은 단일 연결에만 적용)\n(D) Global Accelerator는 VPN 종단점 지원 불가\n\n【시험 포인트】\nVPN 지연 문제 해결은 VPN Acceleration 활성화 + Transit Gateway 중앙화 패턴. 새 연결 생성이 필수인 이유는 기존 VGW 기반 연결은 VPN 가속 미지원.",
    "en_q": "A global company runs business applications in the us-east-1 Region inside a VPC. One of the company's regional offices in London uses a virtual private gateway for an AWS Site-to-Site VPN connection to the VPC. The company has configured a transit gateway and has set up peering between the VPC and other VPCs that various departments in the company use. Employees at the London office are experiencing latency issues when they connect to the business applications. What should a network engineer do to reduce this latency?",
    "en_opts": {
      "A": "Create a new Site-to-Site VPN connection. Set the transit gateway as the target gateway. Enable acceleration on the new Site-to-Site VPN connection. Update the VPN device in the London office with the new connection details.",
      "B": "Modify the existing Site-to-Site VPN connection by setting the transit gateway as the target gateway. Enable acceleration on the existing Site-to-Site VPN connection.",
      "C": "Create a new transit gateway in the eu-west-2 (London) Region. Peer the new transit gateway with the existing transit gateway. Modify the existing Site-to-Site VPN connection by setting the new transit gateway as the target gateway.",
      "D": "Create a new AWS Global Accelerator standard accelerator that has an endpoint of the Site-to-Site VPN connection. Update the VPN device in the London office with the new connection details."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/107350-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 79,
    "question": "회사가 하이브리드 클라우드 환경을 사용합니다. 회사의 데이터센터는 AWS Direct Connect 연결로 AWS 클라우드에 연결되어 있습니다. AWS 환경은 Transit Gateway로 허브 앤 스포크 모델로 연결된 VPC를 포함합니다. AWS 환경에는 온프레미스 연결을 위한 Direct Connect 게이트웨이가 있는 Transit VIF가 있습니다. 회사는 하이브리드 DNS 모델을 사용합니다. 회사는 Hub VPC에 Amazon Route 53 Resolver 엔드포인트를 구성하여 양방향 DNS 트래픽 흐름을 허용합니다. 회사는 VPC 중 하나에서 백엔드 애플리케이션을 운영 중입니다. 회사는 메시지 지향 아키텍처를 사용하고 Amazon SQS를 사용하여 프라이빗 네트워크를 통해 다른 애플리케이션으로부터 메시지를 수신합니다. 네트워크 엔지니어는 이 아키텍처를 위해 Amazon SQS용 Interface VPC 엔드포인트를 사용하려고 합니다. 클라이언트 서비스는 온프레미스 및 회사의 AWS 인프라 내 여러 VPC에서 엔드포인트 서비스에 액세스할 수 있어야 합니다. 클라이언트 애플리케이션이 Interface 엔드포인트의 DNS를 해석할 수 있도록 네트워크 엔지니어가 취해야 할 세 가지 단계의 조합은 무엇입니까?",
    "options": {
      "A": "프라이빗 DNS 이름 옵션을 켠 상태로 Amazon SQS용 Interface 엔드포인트를 생성합니다.",
      "B": "프라이빗 DNS 이름 옵션을 끈 상태로 Amazon SQS용 Interface 엔드포인트를 생성합니다.",
      "C": "sqs.us-east-1.amazonaws.com에 대한 프라이빗 호스팅 영역을 수동으로 생성합니다. Interface 엔드포인트를 가리키는 필요한 레코드를 추가합니다. 프라이빗 호스팅 영역을 다른 VPC와 연결합니다.",
      "D": "이전에 생성된 sqs.us-east-1.amazonaws.com에 대한 자동 생성 프라이빗 호스팅 영역을 사용하며 Interface 엔드포인트를 가리키는 필요한 레코드가 있습니다. 프라이빗 호스팅 영역을 다른 VPC와 연결합니다.",
      "E": "VPC 및 온프레미스에서 퍼블릭 DNS 이름 sqs.us-east-1.amazonaws.com을 사용하여 SQS 엔드포인트에 액세스합니다.",
      "F": "VPC 및 온프레미스에서 Interface 엔드포인트의 프라이빗 DNS 이름 .sqs.us-east-1.vpce.amazonaws.com을 사용하여 SQS 엔드포인트에 액세스합니다."
    },
    "answer": "BCE",
    "explanation": "【핵심 용어】\n▸ Interface VPC Endpoint — 프라이빗 IP로 AWS 서비스 액세스\n▸ Private Hosted Zone — 엔드포인트 DNS 해석 관리\n▸ Private DNS Names — 자동/수동 DNS 레코드 설정\n\n【정답 포인트】\n▸ B (프라이빗 DNS 끔): 수동으로 호스팅 영역 관리 필요\n▸ C (수동 호스팅 영역): 온프레미스에서도 해석 가능하도록 명시적 설정\n▸ E (프라이빗 DNS 이름 사용): vpce 엔드포인트 DNS로 접근\n▸ 온프레미스 접근: Resolver로 프라이빗 호스팅 영역 공유 필요 (별도 구성)\n\n【오답 체크】\n(A) 프라이빗 DNS 켜면 자동 호스팅 영역 생성되어 온프레미스 공유 불가\n(D) 자동 생성 영역은 VPC 간 연결만 가능, 온프레미스 미지원\n(F) vpce.amazonaws.com 엔드포인트는 온프레미스에서 직접 해석 불가\n\n【시험 포인트】\n온프레미스 + 멀티 VPC 엔드포인트 접근 시 수동 호스팅 영역 + 프라이빗 DNS 이름 조합이 필수. 자동 옵션은 VPC 간에만 작동.",
    "en_q": "A company has a hybrid cloud environment. The company's data center is connected to the AWS Cloud by an AWS Direct Connect connection. The AWS environment includes VPCs that are connected together in a hub-and-spoke model by a transit gateway. The AWS environment has a transit VIF with a Direct Connect gateway for on-premises connectivity. The company has a hybrid DNS model. The company has configured Amazon Route 53 Resolver endpoints in the hub VPC to allow bidirectional DNS traffic flow. The company is running a backend application in one of the VPCs. The company uses a message-oriented architecture and employs Amazon Simple Queue Service (Amazon SQS) to receive messages from other applications over a private network. A network engineer wants to use an interface VPC endpoint for Amazon SQS for this architecture. Client services must be able to access the endpoint service from on premises and from multiple VPCs within the company's AWS infrastructure. Which combination of steps should the network engineer take to ensure that the client applications can resolve DNS for the interface endpoint? (Choose three.)",
    "en_opts": {
      "A": "Create the interface endpoint for Amazon SQS with the option for private DNS names turned on.",
      "B": "Create the interface endpoint for Amazon SQS with the option for private DNS names turned off.",
      "C": "Manually create a private hosted zone for sqs.us-east-1.amazonaws.com. Add necessary records that point to the interface endpoint. Associate the private hosted zones with other VPCs.",
      "D": "Use the automatically created private hosted zone for sqs.us-east-1.amazonaws.com with previously created necessary records that point to the interface endpoint. Associate the private hosted zones with other VPCs.",
      "E": "Access the SQS endpoint by using the public DNS name sqs.us-east-1.amazonaws.com in VPCs and on premises.",
      "F": "Access the SQS endpoint by using the private DNS name of the interface endpoint .sqs.us-east-1.vpce.amazonaws.com in VPCs and on premises."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/107354-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 80,
    "question": "회사의 네트워크 엔지니어는 개발 계정의 VPC를 위한 네트워크 설계를 구축하고 테스트합니다. 회사는 네트워크 리소스에 대한 변경사항을 모니터링해야 하고 네트워크 보안 정책을 엄격히 준수해야 합니다. 회사는 네트워크 리소스의 과거 구성에 액세스해야 합니다. 어떤 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "사용자 지정 패턴을 사용하여 계정의 변경사항을 모니터링하는 Amazon EventBridge 규칙을 생성합니다. 규칙을 구성하여 AWS Lambda 함수를 호출하여 비규격 리소스를 식별합니다. 식별된 변경사항으로 Amazon DynamoDB 테이블을 업데이트합니다.",
      "B": "Amazon CloudWatch 로그에서 사용자 지정 메트릭을 생성합니다. 메트릭을 사용하여 AWS Lambda 함수를 호출하여 비규격 리소스를 식별합니다. 식별된 변경사항으로 Amazon DynamoDB 테이블을 업데이트합니다.",
      "C": "AWS Config를 사용하여 네트워크 리소스의 현재 상태를 기록합니다. 원하는 구성 설정을 반영하는 규칙을 생성합니다. 비규격 리소스에 대한 재구성을 설정합니다.",
      "D": "AWS Systems Manager Inventory를 사용하여 네트워크 리소스의 현재 상태를 기록합니다. Systems Manager State Manager를 사용하여 원하는 구성 설정을 적용하고 비규격 리소스에 대한 재구성을 수행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Config — 리소스 구성 변경 추적 및 이력 관리\n▸ Config Rules — 원하는 상태 검증 및 자동 감지\n▸ Remediation — 비규격 리소스 자동 복구\n\n【정답 포인트】\n▸ Config 필수: 과거 구성 이력 및 변경 추적 기능\n▸ 규칙 기반 검증: 보안 정책 준수 자동 확인\n▸ 재구성 자동화: 비규격 상태 자동 복구\n▸ 감시 + 이력 + 규정준수 세 가지 요구사항 완벽 충족\n\n【오답 체크】\n(A) EventBridge는 이벤트 트리거만 제공, 이력 관리 미지원\n(B) CloudWatch는 메트릭 중심, 구성 추적 미지원\n(D) Systems Manager는 구성 이력 관리 부족, Config만큼 상세한 변경 추적 불가\n\n【시험 포인트】\n네트워크 규정준수 + 이력 추적은 AWS Config 전담. 다른 서비스들은 부분 기능만 제공.",
    "en_q": "A company's network engineer builds and tests network designs for VPCs in a development account. The company needs to monitor the changes that are made to network resources and must ensure strict compliance with network security policies. The company also needs access to the historical configurations of network resources. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an Amazon EventBridge (Amazon CloudWatch Events) rule with a custom pattern to monitor the account for changes. Configure the rule to invoke an AWS Lambda function to identify noncompliant resources. Update an Amazon DynamoDB table with the changes that are identified.",
      "B": "Create custom metrics from Amazon CloudWatch logs. Use the metrics to invoke an AWS Lambda function to identify noncompliant resources. Update an Amazon DynamoDB table with the changes that are identified.",
      "C": "Record the current state of network resources by using AWS Config. Create rules that reflect the desired configuration settings. Set remediation for noncompliant resources.",
      "D": "Record the current state of network resources by using AWS Systems Manager Inventory. Use Systems Manager State Manager to enforce the desired configuration settings and to carry out remediation for noncompliant resources."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/107373-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 81,
    "question": "회사가 온프레미스에서 AWS로 애플리케이션을 마이그레이션합니다. 회사는 단일 VPC에 배포된 Amazon EC2 인스턴스에 애플리케이션을 호스팅합니다. 마이그레이션 기간 동안 EC2 인스턴스의 DNS 쿼리는 온프레미스 서버의 이름을 해석할 수 있어야 합니다. 마이그레이션은 3개월이 걸릴 것으로 예상됩니다. 3개월 마이그레이션 기간 후에는 온프레미스 서버 해석이 더 이상 필요하지 않습니다. 네트워크 엔지니어는 최소한의 구성으로 이러한 요구사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "온프레미스와 AWS 간 AWS Site-to-Site VPN 연결을 설정합니다. VPC를 호스팅하는 리전에 Amazon Route 53 Resolver 아웃바운드 엔드포인트를 배포합니다.",
      "B": "프라이빗 VIF가 있는 AWS Direct Connect 연결을 설정합니다. VPC를 호스팅하는 리전에 Amazon Route 53 Resolver 인바운드 및 아웃바운드 엔드포인트를 배포합니다.",
      "C": "온프레미스와 AWS 간 AWS Client VPN 연결을 설정합니다. VPC에 Amazon Route 53 Resolver 인바운드 엔드포인트를 배포합니다.",
      "D": "퍼블릭 VIF가 있는 AWS Direct Connect 연결을 설정합니다. VPC에 Amazon Route 53 Resolver 인바운드 엔드포인트를 배포합니다. 엔드포인트에 할당된 IP 주소를 온프레미스 DNS 서버와의 연결에 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Site-to-Site VPN — 임시 연결용 빠른 구성\n▸ Resolver Outbound Endpoint — AWS→온프레미스 DNS 쿼리 전달\n▸ Direct Connect — 영구적 회선 (이 요구사항엔 오버스펙)\n\n【정답 포인트】\n▸ VPN으로 충분 (B 오답): 3개월 임시이므로 Direct Connect 불필요\n▸ 아웃바운드 엔드포인트만 필요: AWS→온프레미스 DNS 해석만 필요\n▸ 최소 구성: VPN + Outbound Endpoint로 가장 간단한 해결\n\n【오답 체크】\n(B) Direct Connect는 고비용이며 3개월 임시 요구사항에 부적합\n(C) Client VPN은 클라이언트 기반이며 서버(EC2) DNS 해석에 미흡\n(D) 공개 VIF는 온프레미스 프라이빗 도메인 해석 불가\n\n【시험 포인트】\n단기 마이그레이션 DNS 요구는 VPN + Resolver Outbound 최소 조합. 아웃바운드만 필요한 이유는 EC2가 AWS에서 온프레미스로 쿼리를 던지는 일방향 요구사항.",
    "en_q": "A company is migrating an application from on premises to AWS. The company will host the application on Amazon EC2 instances that are deployed in a single VPC. During the migration period, DNS queries from the EC2 instances must be able to resolve names of on-premises servers. The migration is expected to take 3 months. After the 3-month migration period, the resolution of on-premises servers will no longer be needed. What should a network engineer do to meet these requirements with the LEAST amount of configuration?",
    "en_opts": {
      "A": "Set up an AWS Site-to-Site VPN connection between on premises and AWS. Deploy an Amazon Route 53 Resolver outbound endpoint in the Region that is hosting the VPC.",
      "B": "Set up an AWS Direct Connect connection with a private VIF. Deploy an Amazon Route 53 Resolver inbound endpoint and a Route 53 Resolver outbound endpoint in the Region that is hosting the VPC.",
      "C": "Set up an AWS Client VPN connection between on premises and AWS. Deploy an Amazon Route 53 Resolver inbound endpoint in the VPC.",
      "D": "Set up an AWS Direct Connect connection with a public VIF. Deploy an Amazon Route 53 Resolver inbound endpoint in the Region that is hosting the VPC. Use the IP address that is assigned to the endpoint for connectivity to the on-premises DNS servers."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/107374-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 82,
    "question": "회사가 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. 인스턴스는 Amazon EC2 Auto Scaling 그룹에 있습니다. 보안 그룹의 최근 변경으로 인해 외부 사용자가 애플리케이션에 액세스할 수 없습니다. 네트워크 엔지니어는 이 가동 중단이 다시 발생하지 않도록 해야 합니다. 네트워크 엔지니어는 보안 그룹의 비규격 변경사항을 재구성하는 솔루션을 구현해야 합니다. 어떤 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "원하는 보안 그룹 구성과 현재 보안 그룹 구성 간의 불일치를 감지하도록 Amazon GuardDuty를 구성합니다. 비규격 보안 그룹을 재구성하는 AWS Systems Manager Automation runbook을 생성합니다.",
      "B": "원하는 보안 그룹 구성과 현재 보안 그룹 구성 간의 불일치를 감지하도록 AWS Config 규칙을 구성합니다. 비규격 보안 그룹을 재구성하도록 AWS OpsWorks for Chef를 구성합니다.",
      "C": "원하는 보안 그룹 구성과 현재 보안 그룹 구성 간의 불일치를 감지하도록 Amazon GuardDuty를 구성합니다. 비규격 보안 그룹을 재구성하도록 AWS OpsWorks for Chef를 구성합니다.",
      "D": "원하는 보안 그룹 구성과 현재 보안 그룹 구성 간의 불일치를 감지하도록 AWS Config 규칙을 구성합니다. 비규격 보안 그룹을 재구성하는 AWS Systems Manager Automation runbook을 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Config Rules — 구성 규정준수 자동 감지\n▸ Systems Manager Automation — 복구 작업 자동 실행\n▸ GuardDuty — 보안 위협 감지 (구성 감시 아님)\n\n【정답 포인트】\n▸ Config 규칙: 보안 그룹 상태 감시 표준 도구\n▸ Systems Manager Runbook: 자동 복구 표준 패턴\n▸ 두 서비스의 자동 연동: Config 위반 감지 시 Runbook 자동 실행\n\n【오답 체크】\n(A) GuardDuty는 보안 위협 탐지용, 구성 상태 감시 미지원\n(B) OpsWorks for Chef는 보안 그룹 복구 미지원\n(C) GuardDuty + OpsWorks 조합은 부적절한 서비스 짝짓기\n\n【시험 포인트】\n구성 규정준수 + 자동 복구는 Config Rules + Systems Manager Automation 표준 패턴. GuardDuty는 보안 위협(malware, 비정상 동작)용이지 구성 감시가 아님.",
    "en_q": "A company is hosting an application on Amazon EC2 instances behind an Application Load Balancer. The instances are in an Amazon EC2 Auto Scaling group. Because of a recent change to a security group, external users cannot access the application. A network engineer needs to prevent this downtime from happening again. The network engineer must implement a solution that remediates noncompliant changes to security groups. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure Amazon GuardDuty to detect inconsistencies between the desired security group configuration and the current security group configuration. Create an AWS Systems Manager Automation runbook to remediate noncompliant security groups.",
      "B": "Configure an AWS Config rule to detect inconsistencies between the desired security group configuration and the current security group configuration. Configure AWS OpsWorks for Chef to remediate noncompliant security groups.",
      "C": "Configure Amazon GuardDuty to detect inconsistencies between the desired security group configuration and the current security group configuration. Configure AWS OpsWorks for Chef to remediate noncompliant security groups.",
      "D": "Configure an AWS Config rule to detect inconsistencies between the desired security group configuration and the current security group configuration. Create an AWS Systems Manager Automation runbook to remediate noncompliant security groups."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/106768-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 83,
    "question": "회사가 트래픽 검사 및 NAT 기능을 위해 VPC에 타사 방화벽 어플라이언스를 배포합니다. VPC는 프라이빗 서브넷 및 퍼블릭 서브넷으로 구성됩니다. 회사는 로드 밸런서 뒤에 방화벽 어플라이언스를 배포해야 합니다. 어떤 아키텍처가 가장 비용 효율적으로 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "방화벽 어플라이언스를 대상으로 하는 Gateway Load Balancer를 배포합니다. 방화벽 어플라이언스를 프라이빗 서브넷의 단일 네트워크 인터페이스로 구성합니다. NAT 게이트웨이를 사용하여 검사 후 트래픽을 인터넷으로 보냅니다.",
      "B": "방화벽 어플라이언스를 대상으로 하는 Gateway Load Balancer를 배포합니다. 방화벽 어플라이언스를 프라이빗 서브넷의 네트워크 인터페이스와 퍼블릭 서브넷의 다른 네트워크 인터페이스로 구성합니다. 검사 후 트래픽을 인터넷으로 보내기 위해 방화벽 어플라이언스의 NAT 기능을 사용합니다.",
      "C": "방화벽 어플라이언스를 대상으로 하는 Network Load Balancer를 배포합니다. 방화벽 어플라이언스를 프라이빗 서브넷의 단일 네트워크 인터페이스로 구성합니다. NAT 게이트웨이를 사용하여 검사 후 트래픽을 인터넷으로 보냅니다.",
      "D": "방화벽 어플라이언스를 대상으로 하는 Network Load Balancer를 배포합니다. 방화벽 어플라이언스를 프라이빗 서브넷의 네트워크 인터페이스와 퍼블릭 서브넷의 다른 네트워크 인터페이스로 구성합니다. 검사 후 트래픽을 인터넷으로 보내기 위해 방화벽 어플라이언스의 NAT 기능을 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Gateway Load Balancer — 네트워크 어플라이언스용 로드 밸런서\n▸ Dual ENI — 프라이빗(수신) + 퍼블릭(발신) 구성\n▸ Appliance NAT — 방화벽 자체 NAT 활용\n\n【정답 포인트】\n▸ GWLB 필수 (C, D 오답): NLB는 어플라이언스 처리 불최적\n▸ 2개 ENI 설계: 인입(프라이빗) + 아웃바운드(퍼블릭) 분리\n▸ 방화벽 NAT 활용: 별도 NAT Gateway 비용 절감 (B vs A 비용)\n▸ 비용 최소화: 방화벽 내장 NAT 활용\n\n【오답 체크】\n(A) NAT Gateway 추가 비용 발생\n(C) NLB는 L4 로드 밸런싱만 가능, 어플라이언스 특화 부족\n(D) NLB + 방화벽 NAT는 아키텍처 효율 떨어짐\n\n【시험 포인트】\n방화벽 어플라이언스 + 로드 밸런싱은 GWLB 필수. 인바운드(수신) + 아웃바운드(발신) 분리를 위해 Dual ENI 패턴을 사용하고, 방화벽 자체 NAT로 비용 최소화.",
    "en_q": "A company is deploying third-party firewall appliances for traffic inspection and NAT capabilities in its VPC. The VPC is configured with private subnets and public subnets. The company needs to deploy the firewall appliances behind a load balancer. Which architecture will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Deploy a Gateway Load Balancer with the firewall appliances as targets. Configure the firewall appliances with a single network interface in a private subnet. Use a NAT gateway to send the traffic to the internet after inspection.",
      "B": "Deploy a Gateway Load Balancer with the firewall appliances as targets. Configure the firewall appliances with two network interfaces: one network interface in a private subnet and another network interface in a public subnet. Use the NAT functionality on the firewall appliances to send the traffic to the internet after inspection.",
      "C": "Deploy a Network Load Balancer with the firewall appliances as targets. Configure the firewall appliances with a single network interface in a private subnet. Use a NAT gateway to send the traffic to the internet after inspection.",
      "D": "Deploy a Network Load Balancer with the firewall appliances as targets. Configure the firewall appliances with two network interfaces: one network interface in a private subnet and another network interface in a public subnet. Use the NAT functionality on the firewall appliances to send the traffic to the internet after inspection."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/106929-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 84,
    "question": "회사의 AWS 아키텍처는 여러 VPC로 구성되어 있습니다. VPC에는 공유 서비스 VPC 및 여러 애플리케이션 VPC가 포함됩니다. 회사는 모든 VPC에서 온프레미스 DNS 서버로의 네트워크 연결을 설정했습니다. 애플리케이션 VPC에 배포된 애플리케이션은 온프레미스에서 내부 호스팅 도메인에 대한 DNS를 해석할 수 있어야 합니다. 애플리케이션은 로컬 VPC 도메인 이름 및 Amazon Route 53 프라이빗 호스팅 영역에서 호스팅되는 도메인도 해석할 수 있어야 합니다. 네트워크 엔지니어는 이러한 요구사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "공유 서비스 VPC에 새 Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 온프레미스 호스팅 도메인에 대한 전달 규칙을 생성합니다. 규칙을 새 Resolver 엔드포인트 및 각 애플리케이션 VPC와 연결합니다. 각 애플리케이션 VPC의 DHCP 구성을 업데이트하여 DNS 해석을 새 Resolver 엔드포인트로 지정합니다.",
      "B": "공유 서비스 VPC에 새 Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 온프레미스 호스팅 도메인에 대한 전달 규칙을 생성합니다. 규칙을 새 Resolver 엔드포인트 및 각 애플리케이션 VPC와 연결합니다.",
      "C": "공유 서비스 VPC에 새 Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 온프레미스 호스팅 도메인에 대한 전달 규칙을 생성합니다. 규칙을 새 Resolver 엔드포인트 및 각 애플리케이션 VPC와 연결합니다. 각 애플리케이션 VPC의 DHCP 구성을 업데이트하여 DNS 해석을 새 Resolver 엔드포인트로 지정합니다.",
      "D": "공유 서비스 VPC에 새 Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 온프레미스 호스팅 도메인에 대한 전달 규칙을 생성합니다. 규칙을 새 Resolver 엔드포인트 및 각 애플리케이션 VPC와 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Resolver Outbound Endpoint — AWS VPC→온프레미스 DNS 쿼리 전달\n▸ Resolver Rules — DNS 도메인별 포워딩 규칙\n▸ Resolver 규칙 공유 — RAM으로 여러 VPC에 전파\n\n【정답 포인트】\n▸ 아웃바운드 엔드포인트 필수: AWS→온프레미스 DNS 해석\n▸ 규칙 공유로 중앙화: 각 VPC가 온프레미스 도메인 해석 가능\n▸ DHCP 변경 불필요: Resolver 규칙은 DNS 쿼리를 자동 가로채고 전달\n▸ Private Hosted Zone: VPC 로컬 도메인은 Route 53이 기본 처리\n\n【오답 체크】\n(A) 인바운드 엔드포인트는 온프레미스→AWS 해석용 (반대 방향)\n(C) DHCP 변경은 불필요 (Resolver 규칙이 투명하게 처리)\n(D) 규칙 공유 없이는 각 VPC가 온프레미스 도메인 해석 불가\n\n【시험 포인트】\n멀티 VPC + 온프레미스 DNS 통합은 Resolver Outbound + Rules Association 패턴. DHCP 변경은 과거 방식이며 Resolver 규칙 공유만으로 충분.",
    "en_q": "A company's AWS architecture consists of several VPCs. The VPCs include a shared services VPC and several application VPCs. The company has established network connectivity from all VPCs to the on-premises DNS servers. Applications that are deployed in the application VPCs must be able to resolve DNS for internally hosted domains on premises. The applications also must be able to resolve local VPC domain names and domains that are hosted in Amazon Route 53 private hosted zones. What should a network engineer do to meet these requirements?",
    "en_opts": {
      "A": "Create a new Route 53 Resolver inbound endpoint in the shared services VPC. Create forwarding rules for the on-premises hosted domains. Associate the rules with the new Resolver endpoint and each application VPC. Update each application VPC's DHCP configuration to point DNS resolution to the new Resolver endpoint.",
      "B": "Create a new Route 53 Resolver outbound endpoint in the shared services VPC. Create forwarding rules for the on-premises hosted domains. Associate the rules with the new Resolver endpoint and each application VPC.",
      "C": "Create a new Route 53 Resolver outbound endpoint in the shared services VPC. Create forwarding rules for the on-premises hosted domains. Associate the rules with the new Resolver endpoint and each application VPC. Update each application VPC's DHCP configuration to point DNS resolution to the new Resolver endpoint.",
      "D": "Create a new Route 53 Resolver inbound endpoint in the shared services VPC. Create forwarding rules for the on-premises hosted domains. Associate the rules with the new Resolver endpoint and each application VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/106855-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 85,
    "question": "회사가 구식 애플리케이션 계층 프로토콜을 사용하여 애플리케이션 간 통신을 해왔습니다. 회사는 이 프로토콜을 더 이상 사용하지 않기로 결정하고 모든 애플리케이션을 새 프로토콜을 지원하도록 마이그레이션해야 합니다. 구식 프로토콜과 새 프로토콜은 TCP 기반이지만 다른 포트 번호를 사용합니다. 수개월의 작업 후 회사는 Amazon EC2 인스턴스 및 컨테이너에서 실행되는 수십 개의 애플리케이션을 마이그레이션했습니다. 회사는 모든 애플리케이션이 마이그레이션되었다고 생각하지만 이를 확인하고 싶습니다. 네트워크 엔지니어는 구식 프로토콜을 여전히 사용하는 애플리케이션이 없는지 확인해야 합니다. 어떤 솔루션이 가동 중단을 초래하지 않고 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon Inspector 및 Network Reachability 규칙 패키지를 사용합니다. 분석이 완료될 때까지 기다려 구식 포트를 청취 중인 EC2 인스턴스를 확인합니다.",
      "B": "Amazon GuardDuty를 활성화합니다. 그래픽 시각화를 사용하여 구식 프로토콜의 포트를 사용하는 트래픽을 필터링합니다. 인터넷 트래픽을 제외하여 같은 포트가 임시 포트로 사용되는 경우를 필터링합니다.",
      "C": "VPC flow logs를 Amazon S3 버킷으로 전달하도록 구성합니다. Amazon Athena를 사용하여 데이터를 쿼리하고 구식 프로토콜이 사용하는 포트 번호를 필터링합니다.",
      "D": "애플리케이션을 호스팅하는 EC2 인스턴스에 할당된 모든 보안 그룹을 검사합니다. 포트가 허용 포트 목록에 있으면 구식 프로토콜의 포트를 제거합니다. 보안 그룹에서 포트를 제거한 후 애플리케이션이 제대로 작동하는지 확인합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ VPC Flow Logs — 전체 네트워크 트래픽 기록\n▸ Amazon Athena — 로그 데이터 SQL 쿼리\n▸ Non-intrusive Monitoring — 가동 중단 없이 분석\n\n【정답 포인트】\n▸ Flow Logs + Athena: 트래픽 분석으로 포트 사용 직접 확인\n▸ 무중단 검증: 실행 중인 트래픽만 조사, 시스템 변경 없음\n▸ 정확한 포트 감시: 임시 포트와 구분 가능\n▸ 이력 추적: S3 보관으로 포트 사용 패턴 분석\n\n【오답 체크】\n(A) Inspector는 취약점 검사용, 포트 청취 상태 감시 미흡\n(B) GuardDuty는 보안 위협 감지용, 프로토콜 마이그레이션 검증 부적합\n(D) 보안 그룹 변경은 즉시 가동 중단 위험 및 문제 식별 미흡\n\n【시험 포인트】\n프로토콜 마이그레이션 검증은 VPC Flow Logs + Athena 조합. 무중단이면서도 정확한 트래픽 패턴 분석 가능.",
    "en_q": "A company has been using an outdated application layer protocol for communication among applications. The company decides not to use this protocol anymore and must migrate all applications to support a new protocol. The old protocol and the new protocol are TCP-based, but the protocols use different port numbers. After several months of work, the company has migrated dozens of applications that run on Amazon EC2 instances and in containers. The company believes that all the applications have been migrated, but the company wants to verify this belief. A network engineer needs to verify that no application is still using the old protocol. Which solution will meet these requirements without causing any downtime?",
    "en_opts": {
      "A": "Use Amazon Inspector and its Network Reachability rules package. Wait until the analysis has finished running to find out which EC2 instances are still listening to the old port.",
      "B": "Enable Amazon GuardDuty. Use the graphical visualizations to filter for traffic that uses the port of the old protocol. Exclude all internet traffic to filter out occasions when the same port is used as an ephemeral port.",
      "C": "Configure VPC flow logs to be delivered into an Amazon S3 bucket. Use Amazon Athena to query the data and to filter for the port number that is used by the old protocol.",
      "D": "Inspect all security groups that are assigned to the EC2 instances that host the applications. Remove the port of the old protocol if that port is in the list of allowed ports. Verify that the applications are operating properly after the port is removed from the security groups."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/106852-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 86,
    "question": "회사가 단일 AWS 리전에 AWS 환경을 배포했습니다. 환경은 수백 개의 애플리케이션 VPC, 공유 서비스 VPC 및 회사의 온프레미스 환경으로의 VPN 연결로 구성됩니다. 네트워크 엔지니어는 다음 요구사항과 함께 Transit Gateway를 구현해야 합니다: • 애플리케이션 VPC는 서로 격리되어야 합니다. • 애플리케이션 VPC와 온프레미스 네트워크 간의 양방향 통신이 허용되어야 합니다. • 애플리케이션 VPC와 공유 서비스 VPC 간의 양방향 통신이 허용되어야 합니다. 네트워크 엔지니어는 기본 경로 테이블 연결 및 기본 경로 테이블 전파 옵션을 비활성화한 상태로 Transit Gateway를 생성합니다. 또한 온프레미스 네트워크의 VPN 어태치먼트를 생성하고 애플리케이션 VPC 및 공유 서비스 VPC의 VPC 어태치먼트를 생성합니다. 네트워크 엔지니어는 가장 적은 수의 Transit Gateway 경로 테이블을 필요로 하는 솔루션을 설계하여 모든 Transit Gateway 요구사항을 충족해야 합니다. 이 목표를 달성하기 위해 네트워크 엔지니어가 수행해야 할 두 가지 작업의 조합은 무엇입니까?",
    "options": {
      "A": "온프레미스에 대한 별도의 Transit Gateway 경로 테이블을 구성합니다. VPN 어태치먼트를 이 Transit Gateway 경로 테이블과 연결합니다. 모든 애플리케이션 VPC 어태치먼트를 이 Transit Gateway 경로 테이블로 전파합니다.",
      "B": "각 애플리케이션 VPC에 대해 별도의 Transit Gateway 경로 테이블을 구성합니다. 각 애플리케이션 VPC 어태치먼트를 해당 Transit Gateway 경로 테이블과 연결합니다. 공유 서비스 VPC 어태치먼트 및 VPN 어태치먼트를 이 Transit Gateway 경로 테이블로 전파합니다.",
      "C": "모든 애플리케이션 VPC에 대해 별도의 Transit Gateway 경로 테이블을 구성합니다. 모든 애플리케이션 VPC를 이 Transit Gateway 경로 테이블과 연결합니다. 공유 서비스 VPC 어태치먼트 및 VPN 어태치먼트를 이 Transit Gateway 경로 테이블로 전파합니다.",
      "D": "공유 서비스 VPC에 대한 별도의 Transit Gateway 경로 테이블을 구성합니다. 공유 서비스 VPC 어태치먼트를 이 Transit Gateway 경로 테이블과 연결합니다. 모든 애플리케이션 VPC 어태치먼트를 이 Transit Gateway 경로 테이블로 전파합니다.",
      "E": "온프레미스 및 공유 서비스 VPC에 대한 별도의 Transit Gateway 경로 테이블을 구성합니다. VPN 어태치먼트 및 공유 서비스 VPC 어태치먼트를 이 Transit Gateway 경로 테이블과 연결합니다. 모든 애플리케이션 VPC 어태치먼트를 이 Transit Gateway 경로 테이블로 전파합니다."
    },
    "answer": "CE",
    "explanation": "【핵심 용어】\n▸ Transit Gateway Route Table — VPC 간 트래픽 경로 제어\n▸ Association — 어태치먼트와 경로 테이블 연결\n▸ Propagation — 경로 자동 전파\n\n【정답 포인트】\n▸ C: 1개 AppVPC RT로 모든 앱 VPC 격리 + 공유 서비스/온프레미스 통신\n  - AppVPC들은 단일 RT에 묶여 서로 격리 (RT 간 경로 없음)\n  - Shared SVC + VPN이 전파되어 양방향 통신 가능\n▸ E: 1개 Shared+OnPrem RT로 모든 앱 VPC와 통신\n  - VPN과 Shared SVC가 동일 RT로 단순화\n  - 모든 AppVPC가 이들과 통신 가능\n\n【오답 체크】\n(A) OnPrem만의 RT는 AppVPC-OnPrem 통신만 가능, Shared SVC 통신 불가\n(B) 각 AppVPC마다 RT 필요 (수백 개RT = 비효율)\n(D) AppVPC들이 Shared SVC와만 통신, OnPrem 미지원\n\n【시험 포인트】\nTGW 경로 테이블 최소화는 격리(AppVPC 간)와 연결(Shared/OnPrem)의 균형. C는 AppVPC 단일화, E는 Shared/OnPrem 단일화로 각각 다른 방식의 최적화.",
    "en_q": "A company has deployed its AWS environment in a single AWS Region. The environment consists of a few hundred application VPCs, a shared services VPC, and a VPN connection to the company's on-premises environment. A network engineer needs to implement a transit gateway with the following requirements: • Application VPCs must be isolated from each other. • Bidirectional communication must be allowed between the application VPCs and the on-premises network. • Bidirectional communication must be allowed between the application VPCs and the shared services VPC. The network engineer creates the transit gateway with options disabled for default route table association and default route table propagation. The network engineer also creates the VPN attachment for the on-premises network and creates the VPC attachments for the application VPCs and the shared services VPC. The network engineer must meet all the requirements for the transit gateway by designing a solution that needs the least number of transit gateway route tables. Which combination of actions should the network engineer perform to accomplish this goal? (Choose two.)",
    "en_opts": {
      "A": "Configure a separate transit gateway route table for on premises. Associate the VPN attachment with this transit gateway route table. Propagate all application VPC attachments to this transit gateway route table.",
      "B": "Configure a separate transit gateway route table for each application VPC. Associate each application VPC attachment with its respective transit gateway route table. Propagate the shared services VPC attachment and the VPN attachment to this transit gateway route table.",
      "C": "Configure a separate transit gateway route table for all application VPCs. Associate all application VPCs with this transit gateway route table. Propagate the shared services VPC attachment and the VPN attachment to this transit gateway route table.",
      "D": "Configure a separate transit gateway route table for the shared services VPC. Associate the shared services VPC attachment with this transit gateway route table. Propagate all application VPC attachments to this transit gateway route table.",
      "E": "Configure a separate transit gateway route table for on premises and the shared services VPC. Associate the VPN attachment and the shared services VPC attachment with this transit gateway route table. Propagate all application VPC attachments to this transit gateway route table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/106856-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 87,
    "question": "회사는 기존 VPC와 온프레미스 네트워크 간의 AWS Site-to-Site VPN 연결을 가지고 있습니다. 기본 DHCP 옵션 세트가 VPC와 연결되어 있습니다. 회사는 VPC의 Amazon Linux 2 Amazon EC2 인스턴스에서 실행 중인 애플리케이션을 가지고 있습니다. 애플리케이션은 프라이빗 VPC 엔드포인트를 통해 AWS Secrets Manager에 저장된 Amazon RDS 데이터베이스 시크릿을 검색해야 합니다. 온프레미스 애플리케이션은 https://api.example.internal URL로 도달할 수 있는 내부 RESTful API 서비스를 제공합니다. 두 개의 온프레미스 Windows DNS 서버는 내부 DNS 해석을 제공합니다. EC2 인스턴스의 애플리케이션은 서비스에 할당된 호스트 이름을 참조하여 온프레미스 환경에 배포된 내부 API 서비스를 호출해야 합니다. EC2 인스턴스에서 호스트 이름을 참조하여 내부 API 서비스를 호출하려고 할 때 호출이 실패합니다. 네트워크 엔지니어가 같은 EC2 인스턴스에서 API 서비스의 IP 주소를 사용하여 API 서비스 호출을 테스트할 때 호출이 성공합니다. 네트워크 엔지니어는 이 문제를 해결하고 VPC의 다른 리소스가 같은 문제의 영향을 받지 않도록 하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "온프레미스 Windows DNS 서버를 지정하는 새 DHCP 옵션 세트를 생성합니다. 새 DHCP 옵션 세트를 기존 VPC와 연결합니다. Amazon Linux 2 EC2 인스턴스를 재부팅합니다.",
      "B": "Amazon Route 53 Resolver 규칙을 생성합니다. 규칙을 VPC와 연결합니다. 도메인 이름이 example.internal과 일치하면 온프레미스 Windows DNS 서버로 DNS 쿼리를 전달하도록 규칙을 구성합니다.",
      "C": "Amazon Linux 2 EC2 인스턴스의 로컬 호스트 파일을 수정합니다. VPC의 서비스 도메인 이름(api.example.internal)을 내부 API 서비스의 IP 주소로 매핑합니다.",
      "D": "VPC의 Amazon Linux 2 EC2 인스턴스의 로컬 /etc/resolv.conf 파일을 수정합니다. 파일의 네임 서버 IP 주소를 회사의 온프레미스 Windows DNS 서버의 IP 주소로 변경합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver Rule — DNS 도메인별 포워딩\n▸ Domain Matching — 특정 도메인 쿼리만 선택적 전달\n▸ VPC-wide Solution — 단일 인스턴스 아님\n\n【정답 포인트】\n▸ Resolver Rule 필수: 모든 VPC 리소스에 적용 (확장성)\n▸ 선택적 포워딩: example.internal만 온프레미스로 전달\n▸ 투명성: DHCP나 호스트 파일 변경 없이 중앙식 관리\n▸ VPC 전체 적용: 다른 리소스도 자동으로 혜택\n\n【오답 체크】\n(A) DHCP 옵션은 VPC 전체 DNS를 변경하여 AWS 리소스(RDS 시크릿) 조회 실패 위험\n(C) 호스트 파일은 단일 인스턴스만 해결, 다른 EC2 미지원\n(D) /etc/resolv.conf 수정은 AWS 리소스 DNS 해석 불가\n\n【시험 포인트】\n하이브리드 DNS 선택적 포워딩은 Route 53 Resolver Rule 표준. 특정 도메인만 온프레미스로 전달하고 나머지는 AWS VPC 기본 DNS 유지.",
    "en_q": "A company has an AWS Site-to-Site VPN connection between its existing VPC and on-premises network. The default DHCP options set is associated with the VPC. The company has an application that is running on an Amazon Linux 2 Amazon EC2 instance in the VPC. The application must retrieve an Amazon RDS database secret that is stored in AWS Secrets Manager through a private VPC endpoint. An on-premises application provides internal RESTful API service that can be reached by URL (https://api.example.internal). Two on-premises Windows DNS servers provide internal DNS resolution. The application on the EC2 instance needs to call the internal API service that is deployed in the on-premises environment. When the application on the EC2 instance attempts to call the internal API service by referring to the hostname that is assigned to the service, the call fails. When a network engineer tests the API service call from the same EC2 instance by using the API service's IP address, the call is successful. What should the network engineer do to resolve this issue and prevent the same problem from affecting other resources in the VPC?",
    "en_opts": {
      "A": "Create a new DHCP options set that specifies the on-premises Windows DNS servers. Associate the new DHCP options set with the existing VPC. Reboot the Amazon Linux 2 EC2 instance.",
      "B": "Create an Amazon Route 53 Resolver rule. Associate the rule with the VPC. Configure the rule to forward DNS queries to the on-premises Windows DNS servers if the domain name matches example.internal.",
      "C": "Modify the local host file in the Amazon Linux 2 EC2 instance in the VPC. Map the service domain name (api.example.internal) to the IP address of the internal API service.",
      "D": "Modify the local /etc/resolv.conf file in the Amazon Linux 2 EC2 instance in the VPC. Change the IP addresses of the name servers in the file to the IP addresses of the company's on-premises Windows DNS servers."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/107570-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 88,
    "question": "회사가 AWS 클라우드의 여러 계정에 걸쳐 여러 프로덕션 애플리케이션을 실행합니다. 회사는 us-east-1 리전에서만 운영됩니다. 특정 파트너 회사만 애플리케이션에 액세스할 수 있습니다. 애플리케이션은 Application Load Balancer(ALB) 뒤의 Auto Scaling 그룹에 있는 Amazon EC2 인스턴스에서 실행됩니다. EC2 인스턴스는 프라이빗 서브넷에 있고 ALB의 트래픽만 허용합니다. ALB는 퍼블릭 서브넷에 있고 파트너 네트워크 IP 주소 범위의 인바운드 트래픽만 포트 80에서 허용합니다. 회사가 새 파트너를 추가할 때 각 계정의 ALB와 연결된 보안 그룹에서 파트너 네트워크의 IP 주소 범위를 허용해야 합니다. 네트워크 엔지니어는 파트너 네트워크 IP 주소 범위를 중앙에서 관리하는 솔루션을 구현해야 합니다. 어떤 솔루션이 가장 운영 효율적인 방식으로 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "모든 IP 주소 범위와 업데이트해야 할 보안 그룹을 유지하는 Amazon DynamoDB 테이블을 생성합니다. 새 파트너를 추가할 때 DynamoDB 테이블을 새 IP 주소 범위로 업데이트합니다. DynamoDB 테이블에서 새 IP 주소 범위 및 보안 그룹을 읽도록 AWS Lambda 함수를 호출하여 보안 그룹을 업데이트합니다. 모든 계정에서 이 솔루션을 배포합니다.",
      "B": "새 Prefix List를 생성합니다. 허용된 모든 IP 주소 범위를 Prefix List에 추가합니다. 새 IP 주소 범위가 Prefix List에 추가될 때마다 Amazon EventBridge 규칙을 사용하여 AWS Lambda 함수를 호출하여 보안 그룹을 업데이트합니다. 모든 계정에서 이 솔루션을 배포합니다.",
      "C": "새 Prefix List를 생성합니다. 허용된 모든 IP 주소 범위를 Prefix List에 추가합니다. AWS Resource Access Manager(AWS RAM)를 사용하여 여러 계정 간에 Prefix List를 공유합니다. 파트너 IP 주소 범위 대신 Prefix List를 사용하도록 보안 그룹을 업데이트합니다. 새 파트너를 추가할 때 Prefix List를 새 IP 주소 범위로 업데이트합니다.",
      "D": "모든 IP 주소 범위와 업데이트해야 할 보안 그룹을 유지하는 Amazon S3 버킷을 생성합니다. 새 파트너를 추가할 때 S3 버킷을 새 IP 주소 범위로 업데이트합니다. S3 버킷에서 새 IP 주소 범위 및 보안 그룹을 읽도록 AWS Lambda 함수를 호출하여 보안 그룹을 업데이트합니다. 모든 계정에서 이 솔루션을 배포합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Managed Prefix List — AWS 리소스에서 직접 참조 가능한 IP 목록\n▸ AWS RAM — 계정 간 리소스 공유\n▸ Security Group Reference — SG에서 Prefix List 직접 사용\n\n【정답 포인트】\n▸ Prefix List 사용: AWS 네이티브 기능, 자동 동기화\n▸ RAM 공유: 한 곳에서 업데이트 시 모든 계정에 반영\n▸ 중앙화 관리: 각 계정에서 별도 Lambda 배포 불필요\n▸ 운영 효율: Prefix List 변경만으로 SG 자동 업데이트\n\n【오답 체크】\n(A) DynamoDB + Lambda는 각 계정마다 배포 및 트리거 필요 (복잡)\n(B) EventBridge + Lambda는 변경 감지 이벤트 필요 (지연 가능성)\n(D) S3 + Lambda는 poll 기반이며 비용 및 운영 오버헤드 증가\n\n【시험 포인트】\n멀티 계정 중앙화 IP 관리는 Managed Prefix List + RAM 표준 패턴. Prefix List를 SG에서 직접 참조하면 수동 업데이트 불필요.",
    "en_q": "A company has several production applications across different accounts in the AWS Cloud. The company operates from the us-east-1 Region only. Only certain partner companies can access the applications. The applications are running on Amazon EC2 instances that are in an Auto Scaling group behind an Application Load Balancer (ALB). The EC2 instances are in private subnets and allow traffic only from the ALB. The ALB is in a public subnet and allows inbound traffic only from partner network IP address ranges over port 80. When the company adds a new partner, the company must allow the IP address range of the partner network in the security group that is associated with the ALB in each account. A network engineer must implement a solution to centrally manage the partner network IP address ranges. Which solution will meet these requirements in the MOST operationally efficient manner?",
    "en_opts": {
      "A": "Create an Amazon DynamoDB table to maintain all IP address ranges and security groups that need to be updated. Update the DynamoDB table with the new IP address range when the company adds a new partner. Invoke an AWS Lambda function to read new IP address ranges and security groups from the DynamoDB table to update the security groups. Deploy this solution in all accounts.",
      "B": "Create a new prefix list. Add all allowed IP address ranges to the prefix list. Use Amazon EventBridge (Amazon CloudWatch Events) rules to invoke an AWS Lambda function to update security groups whenever a new IP address range is added to the prefix list. Deploy this solution in all accounts.",
      "C": "Create a new prefix list. Add all allowed IP address ranges to the prefix list. Share the prefix list across different accounts by using AWS Resource Access Manager (AWS RAM). Update security groups to use the prefix list instead of the partner IP address range. Update the prefix list with the new IP address range when the company adds a new partner.",
      "D": "Create an Amazon S3 bucket to maintain all IP address ranges and security groups that need to be updated. Update the S3 bucket with the new IP address range when the company adds a new partner. Invoke an AWS Lambda function to read new IP address ranges and security groups from the S3 bucket to update the security groups. Deploy this solution in all accounts."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/107571-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 89,
    "question": "회사가 1 Gbps AWS Direct Connect 연결을 사용하여 AWS 환경을 온프레미스 데이터센터에 연결합니다. 연결은 직원이 AWS에 호스팅된 애플리케이션 VPC에 액세스할 수 있게 합니다. 많은 원격 직원이 회사 제공 VPN을 사용하여 데이터센터에 연결합니다. 이들 직원은 업무 시간 중 애플리케이션에 액세스할 때 속도 저하를 보고합니다. 온프레미스 사용자도 사무실에 있을 때 유사한 속도 저하를 보고했습니다. 회사는 AWS에 추가 애플리케이션을 구축할 계획입니다. 온사이트 및 원격 직원이 추가 애플리케이션을 사용합니다. 이 추가 애플리케이션의 배포 후 회사는 현재 사용하는 것보다 20% 더 많은 대역폭이 필요합니다. 제한된 예산 범위 내에서 네트워크 엔지니어는 현재 구현을 검토하고 개선해야 합니다. 네트워크 엔지니어는 이러한 요구사항을 가장 비용 효율적으로 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "추가 트래픽 부하를 수용하기 위해 새 1 Gbps Direct Connect 전용 연결을 설정합니다. Link Aggregation Group(LAG)을 생성합니다.",
      "B": "애플리케이션 VPC에 AWS Site-to-Site VPN 연결을 배포합니다. 원격 직원의 온프레미스 라우팅을 구성하여 원격 직원이 Site-to-Site VPN 연결에 연결하도록 합니다.",
      "C": "애플리케이션 VPC에 Amazon Workspaces를 배포합니다. 원격 직원에게 Workspaces에 연결하도록 지시합니다.",
      "D": "기존 1 Gbps Direct Connect 연결을 두 개의 새 2 Gbps Direct Connect 호스팅된 연결로 교체합니다. 애플리케이션 VPC에 AWS Client VPN 엔드포인트를 생성합니다. 원격 직원에게 Client VPN 엔드포인트에 연결하도록 지시합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Direct Connect — 온프레미스 사용자 트래픽 증가\n▸ VPN — 원격 직원용 저비용 솔루션\n▸ 대역폭 분산 — VPN으로 원격 트래픽 분리\n\n【정답 포인트】\n▸ 비용 효율: VPN 추가는 Direct Connect 신규 구매보다 저렴\n▸ 부하 분산: 원격 직원을 VPN으로 분리하여 Direct Connect 여유 생성\n▸ 20% 필요 증가: 추가 Direct Connect (1 Gbps) 비용 > VPN 비용\n▸ 트래픽 분리: 온사이트(Direct Connect) vs 원격(VPN)\n\n【오답 체크】\n(A) 새 Direct Connect는 비용이 높고 원격 직원 분산 미지원\n(C) Workspaces는 선택지가 아니며 인프라 근본 해결 불가\n(D) 2 Gbps 호스팅 연결로 교체는 과도한 비용 + Client VPN 혼재\n\n【시험 포인트】\n제한된 예산에서 원격 + 온프레미스 복합 네트워크 문제는 VPN으로 원격 트래픽 분산. Direct Connect는 온프레미스(지속적) 용도로 유지.",
    "en_q": "A company uses a 1 Gbps AWS Direct Connect connection to connect its AWS environment to its on-premises data center. The connection provides employees with access to an application VPC that is hosted on AWS. Many remote employees use a company-provided VPN to connect to the data center. These employees are reporting slowness when they access the application during business hours. On-premises users have started to report similar slowness while they are in the office. The company plans to build an additional application on AWS. On-site and remote employees will use the additional application. After the deployment of this additional application, the company will need 20% more bandwidth than the company currently uses. With the increased usage, the company wants to add resiliency to the AWS connectivity. A network engineer must review the current implementation and must make improvements within a limited budget. What should the network engineer do to meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Set up a new 1 Gbps Direct Connect dedicated connection to accommodate the additional traffic load from remote employees and the additional application. Create a link aggregation group (LAG).",
      "B": "Deploy an AWS Site-to-Site VPN connection to the application VPC. Configure the on-premises routing for the remote employees to connect to the Site-to-Site VPN connection.",
      "C": "Deploy Amazon Workspaces into the application VPC. Instruct the remote employees to connect to Workspaces.",
      "D": "Replace the existing 1 Gbps Direct Connect connection with two new 2 Gbps Direct Connect hosted connections. Create an AWS Client VPN endpoint in the application VPC. Instruct the remote employees to connect to the Client VPN endpoint."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/108177-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 90,
    "question": "회사가 글로벌 네트워크를 가지고 있고 Transit Gateway를 사용하여 AWS 리전을 함께 연결합니다. 회사는 다른 리전의 두 Amazon EC2 인스턴스가 서로 통신할 수 없음을 발견합니다. 네트워크 엔지니어는 이 연결 문제를 해결해야 합니다. 네트워크 엔지니어는 이 요구사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS Network Manager Route Analyzer를 사용하여 Transit Gateway 경로 테이블 및 VPC 경로 테이블의 경로를 분석합니다. VPC flow logs를 사용하여 보안 그룹 규칙 및 네트워크 ACL 규칙이 VPC에서 수락 또는 거부하는 IP 트래픽을 분석합니다.",
      "B": "AWS Network Manager Route Analyzer를 사용하여 Transit Gateway 경로 테이블의 경로를 분석합니다. VPC 경로 테이블이 올바른지 확인합니다. AWS Firewall Manager를 사용하여 보안 그룹 규칙 및 네트워크 ACL 규칙이 VPC에서 수락 또는 거부하는 IP 트래픽을 분석합니다.",
      "C": "AWS Network Manager Route Analyzer를 사용하여 Transit Gateway 경로 테이블의 경로를 분석합니다. VPC 경로 테이블이 올바른지 확인합니다. VPC flow logs를 사용하여 보안 그룹 규칙 및 네트워크 ACL 규칙이 VPC에서 수락 또는 거부하는 IP 트래픽을 분석합니다.",
      "D": "VPC Reachability Analyzer를 사용하여 Transit Gateway 경로 테이블의 경로를 분석합니다. VPC 경로 테이블이 올바른지 확인합니다. VPC flow logs를 사용하여 보안 그룹 규칙 및 네트워크 ACL 규칙이 VPC에서 수락 또는 거부하는 IP 트래픽을 분석합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Network Manager Route Analyzer — Transit Gateway 경로 검증\n▸ VPC Flow Logs — 패킷 레벨 트래픽 분석\n▸ 리전 간 연결 진단 — 계층적 접근\n\n【정답 포인트】\n▸ Route Analyzer 필수: TGW 경로 테이블의 정확성 확인 (리전 간)\n▸ Flow Logs 필수: 보안 그룹/NACL 검증 (마지막 홉)\n▸ 2단계 검증: 경로 정확성 + 보안 정책\n▸ VPC 경로 테이블도 확인: 엔드포인트 EC2 도달성\n\n【오답 체크】\n(A) Route Analyzer가 VPC 경로 테이블 직접 분석 불가\n(B) Firewall Manager는 정책 관리용, 실시간 트래픽 분석 미지원\n(D) Reachability Analyzer는 VPC Endpoint용, TGW 경로 분석 불가\n\n【시험 포인트】\n리전 간 Transit Gateway 연결 문제 진단은 Route Analyzer (경로 검증) + Flow Logs (패킷 검증) 2단계. Reachability Analyzer는 같은 리전 검증용.",
    "en_q": "A company has a global network and is using transit gateways to connect AWS Regions together. The company finds that two Amazon EC2 instances in different Regions are unable to communicate with each other. A network engineer needs to troubleshoot this connectivity issue. What should the network engineer do to meet this requirement?",
    "en_opts": {
      "A": "Use AWS Network Manager Route Analyzer to analyze routes in the transit gateway route tables and in the VPC route tables. Use VPC flow logs to analyze the IP traffic that security group rules and network ACL rules accept or reject in the VPC.",
      "B": "Use AWS Network Manager Route Analyzer to analyze routes in the transit gateway route tables. Verify that the VPC route tables are correct. Use AWS Firewall Manager to analyze the IP traffic that security group rules and network ACL rules accept or reject in the VPC.",
      "C": "Use AWS Network Manager Route Analyzer to analyze routes in the transit gateway route tables. Verify that the VPC route tables are correct. Use VPC flow logs to analyze the IP traffic that security group rules and network ACL rules accept or reject in the VPC.",
      "D": "Use VPC Reachability Analyzer to analyze routes in the transit gateway route tables. Verify that the VPC route tables are correct. Use VPC flow logs to analyze the IP traffic that security group rules and network ACL rules accept or reject in the VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/106908-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 91,
    "question": "회사는 VPC와 온프레미스 데이터센터 간에 데이터를 전송해야 합니다. 데이터는 전용 대역폭을 가진 연결을 통해 전송되어야 합니다. 데이터는 또한 전송 중에 암호화되어야 합니다. 회사는 AWS Partner Network(APN) 파트너와 협력하여 연결을 설정했습니다. 어떤 단계의 조합이 이러한 요구사항을 충족합니까? (3개 선택)",
    "options": {
      "A": "APN 파트너로부터 호스팅된 연결을 요청합니다.",
      "B": "APN 파트너로부터 호스팅된 공개 VIF를 요청합니다.",
      "C": "AWS Site-to-Site VPN 연결을 생성합니다.",
      "D": "AWS Client VPN 연결을 생성합니다.",
      "E": "프라이빗 VIF를 생성합니다.",
      "F": "공개 VIF를 생성합니다."
    },
    "answer": "ACF",
    "explanation": "【핵심 용어】\n▸ Direct Connect Hosted Connection — APN 파트너 제공 회선\n▸ Private VIF — VPC 접속용 가상 인터페이스\n▸ Site-to-Site VPN — 전송 암호화\n▸ Public VIF — 퍼블릭 AWS 서비스 접속\n\n【정답 포인트】\n▸ A (Hosted Connection): APN 파트너를 통한 Direct Connect 회선 (전용 대역폭)\n▸ C (Site-to-Site VPN): IPsec 암호화 터널 (전송 암호화)\n▸ F (Public VIF): 직접 연결 시 퍼블릭 AWS 서비스 접근 가능\n\n【조합 로직】\n- A: 전용 회선 물리 레이어\n- C: IPsec 암호화\n- F: VPC 데이터센터 간 통신 시 퍼블릭 VIF 경로\n\n【오답 체크】\n(B) 호스팅 공개 VIF는 APN 파트너의 공개 AWS 서비스용 (VPC 미지원)\n(D) Client VPN은 클라이언트 기반이며 서버 간 통신 미지원\n(E) 프라이빗 VIF만으로는 암호화 불가 (VPN 추가 필요)\n\n【시험 포인트】\n전용 대역폭 + 암호화는 Direct Connect + Site-to-Site VPN 조합 (DC의 물리 전용성 + VPN의 암호화 결합).",
    "en_q": "A company needs to transfer data between its VPC and its on-premises data center. The data must travel through a connection that has dedicated bandwidth. The data also must be encrypted in transit. The company has been working with an AWS Partner Network (APN) Partner to establish the connection. Which combination of steps will meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Request a hosted connection from the APN Partner.",
      "B": "Request a hosted public VIF from the APN Partner.",
      "C": "Create an AWS Site-to-Site VPN connection.",
      "D": "Create an AWS Client VPN connection.",
      "E": "Create a private VIF.",
      "F": "Create a public VIF."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111294-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 92,
    "question": "회사의 보안 지침에 따르면 VPC에서 회사의 온프레미스 데이터센터로 가는 모든 아웃바운드 트래픽은 보안 어플라이언스를 통해 전달되어야 합니다. 보안 어플라이언스는 Amazon EC2 인스턴스에서 실행됩니다. 네트워크 엔지니어는 온프레미스 데이터센터와 보안 어플라이언스 간의 네트워크 성능을 개선해야 합니다. 네트워크 엔지니어는 이러한 요구사항을 충족하기 위해 어떤 작업을 수행해야 합니까? (2개 선택)",
    "options": {
      "A": "향상된 네트워킹을 지원하는 EC2 인스턴스를 사용합니다.",
      "B": "Transit Gateway를 통해 아웃바운드 트래픽을 보냅니다.",
      "C": "EC2 인스턴스 크기를 늘립니다.",
      "D": "VPC 내 배치 그룹에 EC2 인스턴스를 배치합니다.",
      "E": "EC2 인스턴스에 여러 탄력적 네트워크 인터페이스를 연결합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ Enhanced Networking — SR-IOV로 높은 처리량 + 낮은 지연\n▸ Instance Size — EC2 네트워크 성능 스케일\n▸ Network Performance — 데이터센터 간 처리량\n\n【정답 포인트】\n▸ A (Enhanced Networking): 네트워크 인터페이스 성능 향상 (중요)\n▸ C (Instance Size 증가): 더 큰 인스턴스는 더 높은 네트워크 성능 제공\n▸ 이 두 요소가 전체 성능 개선에 결정적\n\n【오답 체크】\n(B) Transit Gateway는 라우팅 최적화이지 인스턴스 성능 개선 아님\n(D) 배치 그룹은 같은 가용성 영역 내 지연 감소이지 온프레미스 성능 미지원\n(E) 여러 ENI는 부하 분산만 제공, 단일 어플라이언스 성능 미개선\n\n【시험 포인트】\n보안 어플라이언스(NVA) 성능은 Enhanced Networking + 인스턴스 크기가 핵심. 배치 그룹은 VPC 내부 지연용이며 온프레미스 연결과는 무관.",
    "en_q": "A company's security guidelines state that all outbound traffic from a VPC to the company's on-premises data center must pass through a security appliance. The security appliance runs on an Amazon EC2 instance. A network engineer needs to improve the network performance between the on-premises data center and the security appliance. Which actions should the network engineer take to meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Use an EC2 instance that supports enhanced networking.",
      "B": "Send outbound traffic through a transit gateway.",
      "C": "Increase the EC2 instance size.",
      "D": "Place the EC2 instance in a placement group within the VPC.",
      "E": "Attach multiple elastic network interfaces to the EC2 instance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/112394-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 93,
    "question": "회사의 애플리케이션 팀이 VPC에 새 리소스를 시작할 수 없습니다. 네트워크 엔지니어는 VPC가 사용 가능한 IP 주소를 모두 사용했음을 발견합니다. VPC CIDR 블록은 172.16.0.0/16입니다. 네트워크 엔지니어가 VPC에 연결할 수 있는 추가 CIDR 블록은 무엇입니까?",
    "options": {
      "A": "172.17.0.0/29",
      "B": "10.0.0.0/16",
      "C": "172.17.0.0/16",
      "D": "192.168.0.0/16"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CIDR 블록 — VPC IP 주소 범위\n▸ 보조 CIDR — 기존 블록과 비겹치는 추가 범위\n▸ CIDR 겹침 — 같은 주소 공간 충돌 금지\n\n【정답 포인트】\n▸ 172.16.0.0/16은 172.16.0.0 ~ 172.16.255.255\n▸ 추가 블록은 기존과 겹치지 않아야 함\n▸ 172.17.0.0/16은 172.17.0.0 ~ 172.17.255.255 (별개)\n▸ /16 크기로 충분한 주소 공간 제공\n\n【오답 체크】\n(A) 172.17.0.0/29는 너무 작음 (8개 주소만)\n(B) 10.0.0.0/16은 RFC 1918 프라이빗이지만 온프레미스와 겹칠 가능성\n(D) 192.168.0.0/16도 프라이빗 범위이지만 온프레미스 기본값과 충돌 가능\n\n【시험 포인트】\nVPC 보조 CIDR은 기존 블록과 완전히 분리된 범위여야 하고, /16 크기는 대규모 확장에 충분. 같은 네트워크 대역(172)에서 다른 옥텟으로 선택.",
    "en_q": "A company's application team is unable to launch new resources into its VPC. A network engineer discovers that the VPC has run out of usable IP addresses. The VPC CIDR block is 172.16.0.0/16. Which additional CIDR block can the network engineer attach to the VPC?",
    "en_opts": {
      "A": "172.17.0.0/29",
      "B": "10.0.0.0/16",
      "C": "172.17.0.0/16",
      "D": "192.168.0.0/16"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111264-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 94,
    "question": "금융 거래 회사가 Amazon EC2 인스턴스를 사용하여 거래 플랫폼을 운영합니다. 거래 플랫폼의 일부는 EC2 인스턴스가 UDP 포트 50000을 통해 통신하는 타사 가격 책정 서비스를 포함합니다. 최근에 회사는 가격 책정 서비스에 문제가 있었습니다. 가격 책정 서비스의 일부 응답이 잘못 형식화되어 있으며 성공적으로 처리되지 않습니다. 타사 공급업체가 가격 책정 서비스가 반환하는 데이터에 액세스를 요청합니다. 타사 공급업체가 가격 책정 서비스에 액세스하는 EC2 인스턴스에 로그인하여 디버깅을 위해 요청 및 응답 데이터를 캡처하려고 합니다. 회사는 프로덕션 시스템에 직접 액세스를 금지하고 모든 로그 분석을 전담 모니터링 계정에서 수행하도록 요구합니다. 네트워크 엔지니어가 데이터를 캡처하고 이러한 요구사항을 충족하기 위해 어떤 단계의 조합을 수행해야 합니까?",
    "options": {
      "A": "1. VPC flow logs를 구성하여 VPC에서 흐르는 데이터를 캡처합니다. 2. 데이터를 Amazon S3 버킷으로 보냅니다. 3. 모니터링 계정에서 EC2 인스턴스의 IP 주소로 흐르는 데이터를 추출하고 UDP 데이터에 대한 트래픽을 필터링합니다. 4. 데이터를 타사 공급업체에 제공합니다.",
      "B": "1. 트래픽 미러 필터를 구성하여 UDP 데이터를 캡처합니다. 2. EC2 인스턴스의 탄력적 네트워크 인터페이스에 대한 트래픽을 캡처하도록 트래픽 미러링을 구성합니다. 3. 프로덕션 환경에 새 EC2 인스턴스에 패킷 검사 패키지를 구성합니다. 새 EC2 인스턴스의 탄력적 네트워크 인터페이스를 트래픽 미러 대상으로 사용합니다. 4. 패킷 검사 패키지를 사용하여 데이터를 추출합니다. 5. 데이터를 타사 공급업체에 제공합니다.",
      "C": "1. 트래픽 미러 필터를 구성하여 UDP 데이터를 캡처합니다. 2. EC2 인스턴스의 탄력적 네트워크 인터페이스에 대한 트래픽을 캡처하도록 트래픽 미러링을 구성합니다. 3. 모니터링 계정에 새 EC2 인스턴스에 패킷 검사 패키지를 구성합니다. 새 EC2 인스턴스의 탄력적 네트워크 인터페이스를 트래픽 미러 대상으로 사용합니다. 4. 패킷 검사 패키지를 사용하여 데이터를 추출합니다. 5. 데이터를 타사 공급업체에 제공합니다.",
      "D": "1. 새 Amazon EBS 볼륨을 생성합니다. EBS 볼륨을 EC2 인스턴스에 연결합니다. 2. 프로덕션 환경에서 EC2 인스턴스에 로그인합니다. tcpdump 명령을 실행하여 EBS 볼륨에 UDP 데이터를 캡처합니다. 3. EBS 볼륨의 데이터를 Amazon S3으로 내보냅니다. 4. 데이터를 타사 공급업체에 제공합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ VPC Traffic Mirroring — 프로덕션 미지원 패킷 복제\n▸ 모니터링 계정 분리 — 프로덕션 직접 접근 금지\n▸ UDP 필터 — 특정 포트 트래픽만 캡처\n\n【정답 포인트】\n▸ C (Traffic Mirroring): 프로덕션 트래픽 무중단 복제\n▸ 모니터링 계정 대상: 프로덕션 접근 원칙 준수\n▸ 패킷 검사: tcpdump 등으로 분석 (프로덕션 아님)\n▸ UDP 포트 50000만 선택적 캡처\n\n【오답 체크】\n(A) Flow Logs는 메타데이터만 (요청/응답 페이로드 미포함)\n(B) 프로덕션 계정 내 모니터링 EC2 = 직접 접근 위반\n(D) 프로덕션 EC2에 로그인 = 직접 접근 금지 위반\n\n【시험 포인트】\n프로덕션 패킷 분석 + 접근 금지는 VPC Traffic Mirroring + 별도 모니터링 계정이 표준. 미러링은 원본 트래픽에 영향 없음.",
    "en_q": "A financial trading company is using Amazon EC2 instances to run its trading platform. Part of the company's trading platform includes a third-party pricing service that the EC2 instances communicate with over UDP on port 50000. Recently, the company has had problems with the pricing service. Some of the responses from the pricing service appear to be incorrectly formatted and are not being processed successfully. The third-party vendor requests access to the data that the pricing service is returning. The third-party vendor wants to capture request and response data for debugging by logging in to an EC2 instance that accesses the pricing service. The company prohibits direct access to production systems and requires all log analysis to be performed in a dedicated monitoring account. Which set of steps should a network engineer take to capture the data and meet these requirements?",
    "en_opts": {
      "A": "1. Configure VPC flow logs to capture the data that flows in the VPC. 2. Send the data to an Amazon S3 bucket. 3. In the monitoring account, extract the data that flows to the EC2 instance's IP address and filter the traffic for the UDP data. 4. Provide the data to the third-party vendor.",
      "B": "1. Configure a traffic mirror filter to capture the UDP data. 2. Configure Traffic Mirroring to capture the traffic for the EC2 instance's elastic network interface. 3. Configure a packet inspection package on a new EC2 instance in the production environment. Use the elastic network interface of the new EC2 instance as the target for the traffic mirror. 4. Extract the data by using the packet inspection package. 5. Provide the data to the third-party vendor.",
      "C": "1. Configure a traffic mirror filter to capture the UDP data. 2. Configure Traffic Mirroring to capture the traffic for the EC2 instance's elastic network interface. 3. Configure a packet inspection package on a new EC2 instance in the monitoring account. Use the elastic network interface of the new EC2 instance as the target for the traffic mirror. 4. Extract the data by using the packet inspection package. 5. Provide the data to the third-party vendor.",
      "D": "1. Create a new Amazon Elastic Block Store (Amazon EBS) volume. Attach the EBS volume to the EC2 instance. 2. Log in to the EC2 instance in the production environment. Run the tcpdump command to capture the UDP data on the EBS volume. 3. Export the data from the EBS volume to Amazon S3. 4. Provide the data to the third-party vendor."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/112540-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 95,
    "question": "회사의 네트워크 엔지니어가 Transit Gateway와 회사의 온프레미스 네트워크 간 AWS Site-to-Site VPN 연결을 구성합니다. Site-to-Site VPN 연결은 BGP를 통해 2개 터널에서 능동-능동 모드로 구성되며 Transit Gateway에서 동일 비용 다중 경로(ECMP) 라우팅이 활성화됩니다. 네트워크 엔지니어가 온프레미스 네트워크에서 Amazon EC2 인스턴스로 트래픽을 보내려고 시도할 때 트래픽이 첫 번째 터널로 전송됩니다. 그러나 반환 트래픽은 두 번째 터널을 통해 수신되고 고객 게이트웨이에서 삭제됩니다. 네트워크 엔지니어는 전체 VPN 대역폭을 줄이지 않고 이 문제를 해결해야 합니다. 어떤 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "고객 게이트웨이를 구성하여 AS PATH prepending 및 로컬 기본 설정을 사용하여 한 터널을 다른 터널보다 선호합니다.",
      "B": "Site-to-Site VPN 옵션을 구성하여 첫 번째 터널을 기본 터널로 설정하여 비대칭 라우팅을 제거합니다.",
      "C": "고객 게이트웨이의 가상 터널 인터페이스를 구성하여 비대칭 라우팅을 허용합니다.",
      "D": "Site-to-Site VPN을 능동-능동 모드에서 정적 라우팅을 사용하도록 구성하여 트래픽이 기본 경로를 통해 흐르도록 합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Asymmetric Routing — 인입/송출 경로 불일치 문제\n▸ BGP ECMP — 양쪽 터널 능동 사용\n▸ VTI Configuration — 터널 인터페이스 설정\n\n【정답 포인트】\n▸ C (VTI Asymmetric Routing): 고객 게이트웨이에서 비대칭 라우팅 허용\n▸ BGP ECMP 유지: 양쪽 터널 사용 (대역폭 보전)\n▸ 라우팅 역방향 문제 해결: VTI가 터널 간 교차 처리 가능\n▸ 능동-능동 모드 지속: 로드 밸런싱 유지\n\n【오답 체크】\n(A) AS PATH prepending은 선호 터널을 지정하지만 ECMP 목표와 충돌\n(B) 기본 터널 지정은 ECMP 비활성화 (대역폭 감소)\n(D) 정적 라우팅은 ECMP 미사용 (대역폭 낭비)\n\n【시험 포인트】\n비대칭 라우팅 (인 다른 터널, 아웃 다른 터널)은 고객 게이트웨이 VTI 설정으로 해결. BGP ECMP 유지하며 터널 간 교차 라우팅 허용.",
    "en_q": "A company's network engineer is configuring an AWS Site-to-Site VPN connection between a transit gateway and the company's on-premises network. The Site-to-Site VPN connection is configured to use BGP over two tunnels in active/active mode with equal-cost multi-path (ECMP) routing activated on the transit gateway. When the network engineer attempts to send traffic from the on-premises network to an Amazon EC2 instance, traffic is sent over the first tunnel. However, return traffic is received over the second tunnel and is dropped at the customer gateway. The network engineer must resolve this issue without reducing the overall VPN bandwidth. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure the customer gateway to use AS PATH prepending and local preference to prefer one tunnel over the other.",
      "B": "Configure the Site-to-Site VPN options to set the first tunnel as the primary tunnel to eliminate asymmetric routing.",
      "C": "Configure the virtual tunnel interfaces on the customer gateway to allow asymmetric routing.",
      "D": "Configure the Site-to-Site VPN to use static routing in active/active mode to ensure that traffic flows over a preferred path."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111545-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 96,
    "question": "회사가 Amazon EC2 인스턴스에서 애플리케이션을 실행 중입니다. 네트워크 엔지니어는 자체 관리형 NAT 인스턴스를 대체하기 위해 애플리케이션 VPC에서 NAT 게이트웨이를 구현합니다. 네트워크 엔지니어가 자체 관리형 NAT 인스턴스에서 NAT 게이트웨이로 트래픽을 전환한 후 사용자가 문제를 보고하기 시작합니다. 문제 해결 중에 네트워크 엔지니어는 약 6분의 비활성 시간 후 애플리케이션 연결이 종료되는 것을 발견합니다. 이 문제를 해결하기 위해 네트워크 엔지니어는 무엇을 해야 합니까?",
    "options": {
      "A": "NAT 게이트웨이의 IdleTimeoutCount Amazon CloudWatch 지표 증가를 확인합니다. 애플리케이션 EC2 인스턴스에서 TCP keepalive를 구성합니다.",
      "B": "NAT 게이트웨이의 ErrorPortAllocation Amazon CloudWatch 지표 증가를 확인합니다. 애플리케이션 EC2 인스턴스에서 HTTP 타임아웃 값을 구성합니다.",
      "C": "NAT 게이트웨이의 PacketsDropCount Amazon CloudWatch 지표 증가를 확인합니다. 애플리케이션 EC2 인스턴스에서 HTTPS 타임아웃 값을 구성합니다.",
      "D": "NAT 게이트웨이의 ActiveConnectionCount Amazon CloudWatch 지표 감소를 확인합니다. 애플리케이션 EC2 인스턴스에서 UDP keepalive를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ IdleTimeoutCount — NAT 게이트웨이가 유휴 연결을 종료한 횟수\n▸ TCP keepalive — 연결 유지를 위한 정기적인 신호 전송\n\n【정답 포인트】\n▸ 6분 비활성 → NAT 게이트웨이의 기본 유휴 타임아웃(300초) 문제\n▸ IdleTimeoutCount 지표로 유휴 연결 종료 확인\n▸ 애플리케이션 레벨 keepalive 설정으로 연결 유지\n\n【오답 체크】\n(B) ErrorPortAllocation — 포트 할당 고갈 문제, 6분 타이밍과 무관\n(C) PacketsDropCount — 패킷 손실 지표, 타임아웃과 다른 증상\n(D) UDP keepalive — TCP 연결 문제이며 UDP는 비상태 프로토콜\n\n【시험 포인트】\nNAT 게이트웨이 타임아웃 = 300초(5분), 인액티비티 모니터링과 TCP keepalive 설정이 핵심 해결책입니다.",
    "en_q": "A company runs an application on Amazon EC2 instances. A network engineer implements a NAT gateway in the application's VPC to replace self-managed NAT instances. After the network engineer shifts traffic from the self-managed NAT instances to the NAT gateway, users begin to report issues. During troubleshooting, the network engineer discovers that the connection to the application is closing after approximately 6 minutes of inactivity. What should the network engineer do to resolve this issue?",
    "en_opts": {
      "A": "Check for increases in the IdleTimeoutCount Amazon CloudWatch metric for the NAT gateway. Configure TCP keepalive on the application EC2 instances.",
      "B": "Check for increases in the ErrorPortAllocation Amazon CloudWatch metric for the NAT gateway. Configure an HTTP timeout value on the application EC2 instances.",
      "C": "Check for increases in the PacketsDropCount Amazon CloudWatch metric for the NAT gateway. Configure an HTTPS timeout value on the application EC2 instances.",
      "D": "Check for decreases in the ActiveConnectionCount Amazon CloudWatch metric for the NAT gateway. Configure UDP keepalive on the application EC2 instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111543-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 97,
    "question": "SaaS 회사가 프라이빗 SaaS 애플리케이션을 AWS로 마이그레이션하고 있습니다. 회사는 VPN 터널을 사용하여 여러 데이터 센터에 연결하는 수백 명의 고객을 보유하고 있습니다. 고객 수가 증가하면서 회사는 복잡한 NAT 규칙으로 라우팅 및 고객 세분화를 관리하기가 더 어려워졌습니다. AWS로의 마이그레이션이 완료되면 회사의 AWS 고객은 자신의 VPC에서 직접 SaaS 애플리케이션에 액세스할 수 있어야 합니다. 한편 회사의 온프레미스 고객은 IPsec 암호화 터널을 통해 계속 연결할 수 있어야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS 고객 VPC를 공유 transit gateway에 연결합니다. 온프레미스 고객을 위해 transit gateway에 AWS Site-to-Site VPN 연결을 사용합니다.",
      "B": "AWS 고객을 연결하려면 AWS PrivateLink를 사용합니다. SaaS 애플리케이션 VPC의 타사 라우팅 어플라이언스를 사용하여 온프레미스 Site-to-Site VPN 연결을 종료합니다.",
      "C": "각 AWS 고객의 VPC를 SaaS 애플리케이션을 호스팅하는 VPC와 피어링합니다. SaaS VPC 가상 프라이빗 게이트웨이에서 AWS Site-to-Site VPN 연결을 생성합니다.",
      "D": "각 AWS 고객의 VPC를 SaaS 애플리케이션을 호스팅하는 VPC에 연결하려면 Site-to-Site VPN 터널을 사용합니다. 온프레미스 고객을 위해 AWS Site-to-Site VPN을 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS PrivateLink — VPC 간 비노출 프라이빗 연결\n▸ Transit Gateway — 다중 VPC/온프레미스 연결의 중앙 허브\n\n【정답 포인트】\n▸ AWS 고객: PrivateLink로 직접 접근 (NAT 규칙 복잡성 제거)\n▸ 온프레미스: 타사 어플라이언스로 IPsec VPN 종료\n▸ 확장성 + 보안 + 관리 용이\n\n【오답 체크】\n(A) Transit Gateway — 온프레미스 고객에만 적합, AWS VPC 고객은 직접 접근 불가\n(C) VPC Peering — 일대일 관계, 다중 고객 관리 복잡\n(D) 모든 연결을 VPN으로 — PrivateLink의 장점 미활용\n\n【시험 포인트】\nPrivateLink = 수평적 확장, VPN 없이 프라이빗 서비스 노출. Transit Gateway = 수직적 중앙화 아키텍처.",
    "en_q": "A software-as-a-service (SaaS) company is migrating its private SaaS application to AWS. The company has hundreds of customers that connect to multiple data centers by using VPN tunnels. As the number of customers has grown, the company has experienced more difficulty in its effort to manage routing and segmentation of customers with complex NAT rules. After the migration to AWS is complete, the company's AWS customers must be able to access the SaaS application directly from their VPCs. Meanwhile, the company's on-premises customers still must be able to connect through IPsec encrypted tunnels. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Connect the AWS customer VPCs to a shared transit gateway. Use AWS Site-to-Site VPN connections to the transit gateway for the on-premises customers",
      "B": "Use AWS PrivateLink to connect the AWS customers. Use a third-party routing appliance in the SaaS application VPC to terminate onpremises Site-to-Site VPN connections.",
      "C": "Peer each AWS customer's VPCs to the VPC that hosts the SaaS application. Create AWS Site-to-Site VPN connections on the SaaS VPC virtual private gateway.",
      "D": "Use Site-to-Site VPN tunnels to connect each AWS customer's VPCs to the VPC that hosts the SaaS application. Use AWS Site-to-Site VPN to connect the on-premises customers."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/112417-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 98,
    "question": "회사의 기존 AWS 환경에는 Amazon EC2 인스턴스에서 실행되는 공개 애플리케이션 서버가 포함되어 있습니다. 애플리케이션 서버는 VPC 서브넷에서 실행되며 각 서버는 Elastic IP 주소와 연결되어 있습니다. 회사는 인터넷의 모든 트래픽이 EC2 인스턴스에 도달하기 전에 방화벽 검사를 받도록 하는 새로운 요구사항이 있습니다. 보안 엔지니어는 독립 실행형 VPC에 Gateway Load Balancer(GLB)와 타사 방화벽 플릿을 배포하고 구성했습니다. 트래픽이 방화벽 플릿을 통과하도록 환경을 업데이트하려면 네트워크 엔지니어는 어떻게 해야 합니까?",
    "options": {
      "A": "Transit gateway를 배포합니다. GLB 엔드포인트를 transit gateway에 연결합니다. 애플리케이션 VPC를 transit gateway에 연결합니다. 애플리케이션 서브넷 라우트 테이블의 기본 라우트 대상을 GLB 엔드포인트로 업데이트합니다. EC2 인스턴스의 보안 그룹이 GLB 엔드포인트의 트래픽을 허용하도록 설정합니다.",
      "B": "애플리케이션 서브넷 라우트 테이블을 업데이트하여 기본 라우트를 GLB로 설정합니다. 방화벽 플릿이 포함된 독립 실행형 VPC에서 애플리케이션 VPC의 CIDR 블록에 대한 라우트를 라우트 테이블에 추가하고 GLB 엔드포인트를 대상으로 설정합니다. EC2 인스턴스의 보안 그룹을 업데이트하여 GLB의 트래픽을 허용합니다.",
      "C": "애플리케이션 VPC에 새로운 서브넷에 GLB 엔드포인트를 프로비저닝합니다. 애플리케이션 서브넷 CIDR 블록을 대상으로 지정하고 GLB 엔드포인트를 대상으로 지정하는 라우트가 있는 gateway 라우트 테이블을 생성합니다. gateway 라우트 테이블을 애플리케이션 VPC의 인터넷 게이트웨이에 연결합니다. 애플리케이션 서브넷 라우트 테이블의 기본 라우트 대상을 GLB 엔드포인트로 업데이트합니다.",
      "D": "보안 엔지니어에게 GLB를 애플리케이션 VPC로 이동하도록 지시합니다. Gateway 라우트 테이블을 생성합니다. gateway 라우트 테이블을 애플리케이션 서브넷과 연결합니다. GLB를 대상으로 하는 기본 라우트를 gateway 라우트 테이블에 추가합니다. GLB의 라우트 테이블을 업데이트하여 인터넷 게이트웨이의 트래픽을 애플리케이션 서버로 지시합니다. EC2 인스턴스의 보안 그룹이 GLB의 트래픽을 허용하도록 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Gateway Load Balancer (GLB) — Layer 3/4 트래픽 검사를 위한 엔드포인트 서비스\n▸ Gateway Route Table — 트래픽을 GLB 엔드포인트로 리다이렉트하는 라우팅\n\n【정답 포인트】\n▸ 인터넷 게이트웨이 → 애플리케이션 서브넷: gateway route table으로 GLB 엔드포인트 경유\n▸ 애플리케이션 서브넷의 각 EC2: 인터넷 응답도 GLB 거쳐서 반환\n▸ Appliance VPC는 별도 관리, 애플리케이션 VPC와 분리\n\n【오답 체크】\n(A) Transit Gateway — 독립 VPC 방화벽 검사에 부적합\n(B) 단방향 라우팅 — 응답 트래픽이 GLB를 우회\n(D) GLB를 애플리케이션 VPC로 이동 — 분리 구조 위배\n\n【시험 포인트】\nGateway route table + GLB endpoint = 양방향 트래픽 인터셉션 (인바운드/아웃바운드 모두).",
    "en_q": "A company's existing AWS environment contains public application servers that run on Amazon EC2 instances. The application servers run in a VPC subnet. Each server is associated with an Elastic IP address. The company has a new requirement for firewall inspection of all traffic from the internet before the traffic reaches any EC2 instances. A security engineer has deployed and configured a Gateway Load Balancer (GLB) in a standalone VPC with a fleet of third-party firewalls. How should a network engineer update the environment to ensure that the traffic travels across the fleet of firewalls?",
    "en_opts": {
      "A": "Deploy a transit gateway. Attach a GLB endpoint to the transit gateway. Attach the application VPC to the transit gateway. Update the application subnet route table's default route destination to be the GLB endpoint. Ensure that the EC2 instances' security group allows traffic from the GLB endpoint.",
      "B": "Update the application subnet route table to have a default route to the GLB. On the standalone VPC that contains the firewall fleet, add a route in the route table for the application VPC's CIDR block with the GLB endpoint as the destination. Update the EC2 instances' security group to allow traffic from the GLB.",
      "C": "Provision a GLB endpoint in the application VPC in a new subnet. Create a gateway route table with a route that specifies the application subnet CIDR block as the destination and the GLB endpoint as the target. Associate the gateway route table with the internet gateway in the application VPC. Update the application subnet route table's default route destination to be the GLB endpoint.",
      "D": "Instruct the security engineer to move the GLB into the application VPC. Create a gateway route table. Associate the gateway route table with the application subnet. Add a default route to the gateway route table with the GLB as its destination. Update the route table on the GLB to direct traffic from the internet gateway to the application servers. Ensure that the EC2 instances' security group allows traffic from the GLB."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111547-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 99,
    "question": "회사는 사무실과 VPC 간에 AWS Site-to-Site VPN 연결을 설정했습니다. 사용자가 VPC 내부에서 호스팅되는 애플리케이션 연결이 간헐적으로 실패한다고 보고합니다. 네트워크 엔지니어는 고객 게이트웨이 로그에서 애플리케이션 연결이 실패할 때 IKE(Internet Key Exchange) 세션이 종료되는 것을 발견합니다. IKE 세션이 다운되면 IKE 세션을 시작하기 위해 네트워크 엔지니어는 무엇을 해야 합니까?",
    "options": {
      "A": "DPD(Dead Peer Detection) 타임아웃 동작을 Clear로 설정합니다. VPC에서 온프레미스로의 트래픽을 시작합니다.",
      "B": "DPD(Dead Peer Detection) 타임아웃 동작을 Restart로 설정합니다. 온프레미스에서 VPC로의 트래픽을 시작합니다.",
      "C": "DPD(Dead Peer Detection) 타임아웃 동작을 None으로 설정합니다. VPC에서 온프레미스로의 트래픽을 시작합니다.",
      "D": "DPD(Dead Peer Detection) 타임아웃 동작을 Cancel로 설정합니다. 온프레미스에서 VPC로의 트래픽을 시작합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Dead Peer Detection (DPD) Restart — 비응답 피어 감지 시 IKE 자동 재시작\n▸ DPD timeout action — 피어 응답 없을 때 취할 행동\n\n【정답 포인트】\n▸ DPD Restart = IKE 다운 감지 시 자동 재협상 시도\n▸ 온프레미스 → VPC 트래픽 시작이 키: 응답 확인으로 IKE 복구 트리거\n▸ 단방향 트래픽 문제 시 응답 방향 강제 필요\n\n【오답 체크】\n(A) Clear — 연결 종료만 함, 재시작 없음\n(C) None — DPD 비활성화, 재협상 불가\n(D) Cancel — 존재하지 않는 옵션\n\n【시험 포인트】\nDPD Restart + 양방향 트래픽 흐름 = VPN 세션 자동 복구의 핵심 메커니즘.",
    "en_q": "A company has an AWS Site-to-Site VPN connection between its office and its VPC. Users report occasional failure of the connection to the application that is hosted inside the VPC. A network engineer discovers in the customer gateway logs that the Internet Key Exchange (IKE) session ends when the connection to the application fails. What should the network engineer do to bring up the IKE session if the IKE session goes down?",
    "en_opts": {
      "A": "Set the dead peer detection (DPD) timeout action to Clear. Initiate traffic from the VPC to on premises.",
      "B": "Set the dead peer detection (DPD) timeout action to Restart. Initiate traffic from on premises to the VPC.",
      "C": "Set the dead peer detection (DPD) timeout action to None. Initiate traffic from the VPC to on premises.",
      "D": "Set the dead peer detection (DPD) timeout action to Cancel. Initiate traffic from on premises to the VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111255-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 100,
    "question": "네트워크 엔지니어는 회사의 기업 네트워크를 회사의 AWS 환경에 연결하는 하이브리드 네트워킹 환경을 설계하고 있습니다. AWS 환경은 3개의 AWS 리전에 걸쳐 30개의 VPC로 구성됩니다. 네트워크 엔지니어는 회사의 보안팀이 승인한 방화벽을 사용하여 트래픽을 중앙에서 필터링하는 솔루션을 구현해야 합니다. 솔루션은 모든 VPC가 서로 연결할 수 있도록 해야 합니다. AWS와 기업 네트워크 간의 연결은 최소 2Gbps의 대역폭 요구사항을 충족해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "IPsec VPN 연결을 기업 네트워크와 새로운 transit gateway 간에 배포합니다. 모든 VPC를 transit gateway에 연결합니다. 승인된 방화벽을 transit gateway와 연결합니다.",
      "B": "각 VPC의 가상 프라이빗 게이트웨이에 기업 네트워크와 10Gbps AWS Direct Connect 연결 1개를 배포합니다. 가상 프라이빗 게이트웨이를 Direct Connect 게이트웨이에 연결합니다. 새로운 transit VPC에 IPsec 터널을 구축합니다. 승인된 방화벽을 transit VPC에 배포합니다.",
      "C": "다양한 Direct Connect 위치에 기업 네트워크로 연결하는 1Gbps AWS Direct Connect 연결 2개를 배포합니다. 각 연결에서 Direct Connect 게이트웨이로 transit VIF를 구축합니다. 각 리전의 새로운 transit gateway에 Direct Connect 게이트웨이를 연결합니다. VIF를 ECMP 라우팅 사용하도록 구성합니다. 3개 리전의 모든 VPC를 transit gateway에 연결합니다. transit gateway 라우트 테이블을 구성하여 inspection VPC로 트래픽을 라우팅합니다. 승인된 방화벽을 inspection VPC에 배포합니다.",
      "D": "다양한 Direct Connect 위치에 기업 네트워크로 연결하는 1Gbps AWS Direct Connect 연결 4개를 배포합니다. 각 연결에서 Direct Connect 게이트웨이로 transit VIF를 구축합니다. 각 리전의 새로운 transit gateway에 Direct Connect 게이트웨이를 연결합니다. transit gateway peering attachment를 사용하여 transit gateway들을 연결합니다. VIF를 ECMP 라우팅 사용하도록 구성합니다. transit gateway 라우트 테이블을 구성하여 inspection VPC로 트래픽을 라우팅합니다. 승인된 방화벽을 inspection VPC에 배포합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Transit Gateway Peering — 리전 간 TGW 연결\n▸ ECMP (Equal-Cost Multipath) — 다중 경로 로드밸런싱\n▸ Transit VIF — Direct Connect 상의 전이 라우팅\n\n【정답 포인트】\n▸ 4개 1Gbps 연결 = 2Gbps 이상 대역폭 보장 (ECMP로 로드밸런싱)\n▸ TGW Peering = 3개 리전 간 메시 연결\n▸ Inspection VPC = 중앙 방화벽 집중관리\n▸ Direct Connect 게이트웨이 = 온프레미스 통합\n\n【오답 체크】\n(A) IPsec VPN — 2Gbps 대역폭 미만, 확장성 제한\n(B) VPC별 10Gbps — 비용 과다, 비효율적 아키텍처\n(C) 2개 1Gbps 연결 — 대역폭 부족\n\n【시험 포인트】\n멀티리전 + 고가용성 + 2Gbps+ = Transit Gateway Peering + Direct Connect + ECMP의 조합.",
    "en_q": "A network engineer is designing a hybrid networking environment that will connect a company's corporate network to the company's AWS environment. The AWS environment consists of 30 VPCs in 3 AWS Regions. The network engineer needs to implement a solution to centrally filter traffic by using a firewall that the company's security team has approved. The solution must give all the VPCs the ability to connect to each other. Connectivity between AWS and the corporate network must meet a minimum bandwidth requirement of 2 Gbps. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy an IPsec VPN connection between the corporate network and a new transit gateway. Connect all VPCs to the transit gateway. Associate the approved firewall with the transit gateway.",
      "B": "Deploy a single 10 Gbps AWS Direct Connect connection between the corporate network and virtual private gateway of each VPC. Connect the virtual private gateways to a Direct Connect gateway. Build an IPsec tunnel to a new transit VPC. Deploy the approved firewall to the transit VPC.",
      "C": "Deploy two 1 Gbps AWS Direct Connect connections in different Direct Connect locations to connect to the corporate network. Build a transit VIF on each connection to a Direct Connect gateway. Associate the Direct Connect gateway with a new transit gateway for each Region. Configure the VIFs to use equal-cost multipath (ECMP) routing. Connect all the VPCs in the three Regions to the transit gateway. Configure the transit gateway route table to route traffic to an inspection VPC. Deploy the approved firewall to the inspection VPC.",
      "D": "Deploy four 1 Gbps AWS Direct Connect connections in different Direct Connect locations to connect to the corporate network. Build a transit VIF on each connection to a Direct Connect gateway. Associate the Direct Connect gateway with a new transit gateway for each Region. Connect the transit gateways by using a transit gateway peering attachment. Configure the VIFs to use equal-cost multipath (ECMP) routing. Configure transit gateway route tables to route traffic to an inspection VPC. Deploy the approved firewall to the inspection VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111795-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 101,
    "question": "회사는 2개의 10Gbps 연결로 구성된 링크 집계 그룹(LAG)을 포함한 AWS Direct Connect 프라이빗 VIF를 사용합니다. 회사의 보안팀은 외부 네트워크 연결이 계층 2 암호화를 제공해야 한다는 새로운 요구사항을 구현했습니다. 회사의 네트워크팀은 Direct Connect에 대한 MACsec 지원을 사용하여 새로운 요구사항을 충족하려고 계획합니다. 네트워크팀이 이 기능을 구현하기 위해 취해야 할 단계의 조합은 무엇입니까? (3개를 선택하십시오.)",
    "options": {
      "A": "MACsec를 지원하는 새로운 회로 및 포트를 사용하여 새로운 Direct Connect LAG를 생성합니다.",
      "B": "MACsec CAK(Connectivity Association Key)와 CKN(Connection Key Name)을 새 LAG와 연결합니다.",
      "C": "IKE(Internet Key Exchange)를 기존 LAG와 연결합니다.",
      "D": "기존 LAG에서 MACsec 암호화 모드를 구성합니다.",
      "E": "새 LAG에서 MACsec 암호화 모드를 구성합니다.",
      "F": "기존 LAG를 구성하는 각 Direct Connect 연결에서 MACsec 암호화 모드를 구성합니다."
    },
    "answer": "ABE",
    "explanation": "【핵심 용어】\n▸ MACsec — Media Access Control Security (계층 2 암호화)\n▸ CAK/CKN — MACsec 인증서 및 키 관리\n▸ LAG (Link Aggregation Group) — 다중 포트 번들링\n\n【정답 포인트】\n▸ \n(A) 새 LAG 생성 — 기존 LAG는 MACsec 미지원이므로 신규 필요\n▸ \n(B) CAK/CKN 설정 — MACsec 키 관리의 필수 단계\n▸ \n(E) 새 LAG에 MACsec 암호화 활성화 — 계층 2 보안 적용\n\n【오답 체크】\n(C) IKE — 계층 3 IPsec 프로토콜, MACsec(계층 2)과 무관\n(D) 기존 LAG에 MACsec — 기존 장비 미지원\n(F) 개별 연결 설정 — LAG 레벨에서 통합 관리\n\n【시험 포인트】\nMACsec = 신규 LAG + 키 설정 + 암호화 모드 활성화 (3단계 프로세스).",
    "en_q": "A company uses an AWS Direct Connect private VIF with a link aggregation group (LAG) that consists of two 10 Gbps connections. The company's security team has implemented a new requirement for external network connections to provide layer 2 encryption. The company's network team plans to use MACsec support for Direct Connect to meet the new requirement. Which combination of steps should the network team take to implement this functionality? (Choose three.)",
    "en_opts": {
      "A": "Create a new Direct Connect LAG with new circuits and ports that support MACsec.",
      "B": "Associate the MACsec Connectivity Association Key (CAK) and the Connection Key Name (CKN) with the new LAG.",
      "C": "Associate the Internet Key Exchange (IKE) with the existing LAG.",
      "D": "Configure the MACsec encryption mode on the existing LAG.",
      "E": "Configure the MACsec encryption mode on the new LAG.",
      "F": "Configure the MACsec encryption mode on each Direct Connect connection that makes up the existing LAG."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/113233-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 102,
    "question": "회사는 개발자가 VPC 네트워크 인프라를 시작하는 것을 금지하는 보안 정책을 최근 구현했습니다. 정책에는 NAT 게이트웨이가 VPC에서 시작될 때마다 회사의 네트워크 보안팀이 즉시 경고를 받아 NAT 게이트웨이를 종료해야 한다고 명시되어 있습니다. 네트워크 보안팀은 최소한의 관리 오버헤드로 AWS 계정 전체에 배포할 수 있는 솔루션을 구현해야 합니다. 또한 솔루션은 네트워크 보안팀이 규정 준수 이력을 간단하게 볼 수 있는 방법을 제공해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "NAT 게이트웨이를 프로그래밍 방식으로 확인하고 이메일 경고를 보내며 NAT 게이트웨이가 감지되면 종료하는 스크립트를 개발합니다. 각 계정의 Amazon EC2 인스턴스에 스크립트를 배포합니다. cron 작업을 사용하여 5분마다 스크립트를 실행합니다. 확인 결과를 Amazon RDS for MySQL 데이터베이스에 기록합니다.",
      "B": "AWS 계정의 NAT 게이트웨이를 프로그래밍 방식으로 확인하고 이메일 경고를 보내며 NAT 게이트웨이가 감지되면 종료하는 AWS Lambda 함수를 생성합니다. AWS SAM(Serverless Application Model) 템플릿을 사용하여 각 계정에 Lambda 함수를 배포합니다. 각 계정의 Amazon OpenSearch Service 클러스터에 확인 결과를 저장합니다.",
      "C": "Amazon GuardDuty를 활성화합니다. Behavior:EC2/NATGatewayCreation GuardDuty 결과 유형에 대한 Amazon EventBridge 규칙을 생성합니다. 규칙을 구성하여 AWS Step Functions 상태 머신을 호출하고 이메일 경고를 전송하며 NAT 게이트웨이가 감지되면 종료합니다. 런타임 로그를 Amazon S3 버킷의 텍스트 파일로 저장합니다.",
      "D": "AWS 계정의 NAT 게이트웨이를 확인하는 AWS Config 규칙을 생성합니다. NAT 게이트웨이가 감지되면 이메일 경고를 전송하고 NAT 게이트웨이를 종료하도록 AWS Config 규칙을 구성하여 AWS Systems Manager Automation 재정의 작업을 수행합니다. AWS CloudFormation StackSets를 사용하여 AWS Config 규칙 및 Systems Manager runbook을 각 계정에 배포합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Config — 리소스 규정 준수 추적 및 자동화\n▸ CloudFormation StackSets — 다중 계정 배포\n▸ Systems Manager Automation — 자동 재정의 조치\n\n【정답 포인트】\n▸ AWS Config 규칙 = 지속적 규정 준수 모니터링\n▸ StackSets = 다중 계정 중앙화 배포 (최소 오버헤드)\n▸ Automation remediation = NAT 게이트웨이 자동 종료\n▸ Config 이력 = 규정 준수 추적 및 감사 로그\n\n【오답 체크】\n(A) EC2 + cron — 서버 관리 오버헤드, 확장성 제한\n(B) Lambda + SAM — 개별 계정 배포, 복잡한 관리\n(C) GuardDuty + EventBridge — GuardDuty는 보안 위협 탐지용, NAT 이벤트 미지원\n\n【시험 포인트】\nAWS Config + StackSets + Automation = 규정 준수 + 다중 계정 + 자동화 + 감사의 완벽한 조합.",
    "en_q": "A company recently implemented a security policy that prohibits developers from launching VPC network infrastructure. The policy states that any time a NAT gateway is launched in a VPC, the company's network security team must immediately receive an alert to terminate the NAT gateway. The network security team needs to implement a solution that can be deployed across AWS accounts with the least possible administrative overhead. The solution also must provide the network security team with a simple way to view compliance history. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Develop a script that programmatically checks for NAT gateways in an AWS account, sends an email alert, and terminates the NAT gateway if a NAT gateway is detected. Deploy the script on an Amazon EC2 instance in each account. Use a cron job to run the script every 5 minutes. Log the results of the checks to an Amazon RDS for MySQL database.",
      "B": "Create an AWS Lambda function that programmatically checks for NAT gateways in an AWS account, sends an email alert, and terminates the NAT gateway if a NAT gateway is detected. Deploy the Lambda function to each account by using AWS Serverless Application Model (AWS SAM) templates. Store the results of the checks on an Amazon OpenSearch Service cluster in each account.",
      "C": "Enable Amazon GuardDuty. Create an Amazon EventBridge rule for the Behavior:EC2/NATGatewayCreation GuardDuty finding type. Configure the rule to invoke an AWS Step Functions state machine to send an email alert and terminate a NAT gateway if a NAT gateway is detected. Store the runtime log as a text file in an Amazon S3 bucket.",
      "D": "Create a custom AWS Config rule that checks for NAT gateways in an AWS account. Configure the AWS Config rule to perform an AWS Systems Manager Automation remediation action to send an email alert and terminate the NAT gateway if a NAT gateway is detected. Deploy the AWS Config rule and the Systems Manager runbooks to each account by using AWS CloudFormation StackSets"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/113235-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 103,
    "question": "회사가 AWS에서 온라인 게임을 실행 중입니다. 게임은 전 세계적으로 플레이되고 있으며 인기가 높아지고 있습니다. 사용자가 게임의 응답성 문제를 보고하고 있습니다. 다시 보기 비율이 떨어지고 있으며 회사는 구독자를 잃고 있습니다. 게임 서버는 us-west-2 리전에 있고 Elastic Load Balancer를 사용하여 클라이언트 트래픽을 분산합니다. 회사는 게임 서버를 11개의 추가 AWS 리전에 배포하여 게임 클라이언트의 네트워크 트래픽 왕복 시간을 줄이기로 결정했습니다. 네트워크 엔지니어는 Amazon Route 53을 사용하는 DNS 솔루션을 설계하여 사용자 트래픽이 최적의 응답 시간을 가진 게임 서버로 전달되도록 해야 합니다. 이 요구사항을 충족하기 위해 네트워크 엔지니어는 무엇을 해야 합니까?",
    "options": {
      "A": "각 리전의 Elastic Load Balancer에 대한 Route 53 레코드를 생성합니다. 가중치 라우팅 정책을 지정합니다. 각 리전의 클라이언트 수를 사용하여 가중치를 계산합니다.",
      "B": "각 리전의 Elastic Load Balancer에 대한 Route 53 레코드를 생성합니다. 지연 시간 라우팅 정책을 지정합니다. Elastic Load Balancer가 배포된 리전으로 리전을 설정합니다.",
      "C": "각 리전의 Elastic Load Balancer에 대한 Route 53 레코드를 생성합니다. 다중값 응답 라우팅 정책을 지정합니다. 게임 클라이언트에서 지연 시간을 테스트하고 최적의 응답을 가진 서버에 연결합니다.",
      "D": "각 리전의 Elastic Load Balancer에 대한 Route 53 레코드를 생성합니다. 지리적 위치 라우팅 정책을 지정합니다. Elastic Load Balancer가 배포된 리전으로 위치를 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Latency Routing Policy — 클라이언트의 지연 시간 기반 라우팅\n▸ Region Association — 각 레코드를 리전에 연결\n\n【정답 포인트】\n▸ 지연 시간 라우팅 = Route 53이 클라이언트 → 리전 지연 자동 측정\n▸ 최적 응답 시간 = 가장 낮은 지연 시간을 가진 리전으로 자동 라우팅\n▸ 글로벌 게임 트래픽 분산에 최적\n\n【오답 체크】\n(A) 가중치 라우팅 — 수동 계산 필요, 동적 지연 반영 안 됨\n(C) 다중값 응답 — 클라이언트가 지연 시간 계산, 비효율적\n(D) 지리적 위치 라우팅 — 물리적 위치 기반, 지연 시간 미최적화\n\n【시험 포인트】\nLatency Routing = 실시간 지연 시간 기반 트래픽 최적화 (게임/낮은 지연성 애플리케이션 필수).",
    "en_q": "A company is running an online game on AWS. The game is played globally and is gaining popularity. Users are reporting problems with the game's responsiveness. Replay rates are dropping, and the company is losing subscribers. Game servers are located in the us-west-2 Region and use an Elastic Load Balancer to distribute client traffic. The company has decided to deploy game servers to 11 additional AWS Regions to reduce the round-trip times of network traffic to game clients. A network engineer must design a DNS solution that uses Amazon Route 53 to ensure that user traffic is delivered to game servers with an optimal response time. What should the network engineer do to meet these requirements?",
    "en_opts": {
      "A": "Create Route 53 records for the Elastic Load Balancers in each Region. Specify a weighted routing policy. Calculate the weight by using the number of clients in each Region.",
      "B": "Create Route 53 records for the Elastic Load Balancers in each Region. Specify a latency routing policy. Set the Region to the Region where the Elastic Load Balancer is deployed.",
      "C": "Create Route 53 records for the Elastic Load Balancers in each Region. Specify a multivalue answer routing policy. Test latency from the game client, and connect to the server with the best response.",
      "D": "Create Route 53 records for the Elastic Load Balancers in each Region. Specify a geolocation routing policy. Set the location to the Region where the Elastic Load Balancer is deployed."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111872-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 104,
    "question": "네트워크 엔지니어는 온프레미스 데이터 센터와 VPC 간에 암호화된 연결을 구축해야 합니다. 네트워크 엔지니어는 VPC를 가상 프라이빗 게이트웨이에 연결하고 AWS Site-to-Site VPN 연결을 설정합니다. VPN 터널은 구성 후 UP 상태이고 작동 중입니다. 하지만 VPN 협상의 2단계(phase 2) 재키 중에 고객 게이트웨이 장치가 해당 장치가 지원하도록 구성된 것과 다른 매개변수를 받고 있습니다. 네트워크 엔지니어는 VPN 터널의 IPsec 구성을 확인합니다. 네트워크 엔지니어는 고객 게이트웨이 장치가 AWS Site-to-Site VPN 구성 파일이 제공하는 가장 안전한 암호화 알고리즘으로 구성되어 있음을 알게 됩니다. 네트워크 엔지니어는 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "기본 가상 프라이빗 게이트웨이 로그를 확인합니다. VPN 터널 옵션을 가상 프라이빗 게이트웨이가 요구하는 특정 VPN 매개변수로 제한합니다.",
      "B": "기본 고객 게이트웨이 로그를 확인합니다. VPN 터널 옵션을 고객 게이트웨이가 요구하는 특정 VPN 매개변수로 제한합니다.",
      "C": "가상 프라이빗 게이트웨이의 Amazon CloudWatch 로그를 확인합니다. VPN 터널 옵션을 가상 프라이빗 게이트웨이가 요구하는 특정 VPN 매개변수로 제한합니다.",
      "D": "고객 게이트웨이의 Amazon CloudWatch 로그를 확인합니다. VPN 터널 옵션을 고객 게이트웨이가 요구하는 특정 VPN 매개변수로 제한합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Phase 2 Rekey — IPsec 라이프타임 갱신 시 매개변수 재협상\n▸ Customer Gateway Native Logs — 온프레미스 장비의 원본 로그\n\n【정답 포인트】\n▸ 문제: AWS 제공 매개변수 ≠ 고객 장비 지원 매개변수\n▸ 해결책: 고객 게이트웨이 로그 확인 → 실제 지원 알고리즘 파악\n▸ 조치: VPN 터널 옵션을 고객 장비 지원 범위로 제한\n▸ AWS는 보안 우선, 고객 장비가 제약 요소\n\n【오답 체크】\n(A) VPG 로그 — AWS 측 로그로는 고객 장비 제약 파악 불가\n(C) CloudWatch VPG — 프로비저닝되지 않은 로그, AWS는 CloudWatch 미사용\n(D) CloudWatch CGW — 온프레미스 장비 로그는 CloudWatch에 없음\n\n【시험 포인트】\nIPsec 협상 실패 = 고객 장비 제약 확인 → 네이티브 로그 읽기 → 상호 호환 매개변수로 맞추기.",
    "en_q": "A network engineer needs to build an encrypted connection between an on-premises data center and a VPC. The network engineer attaches the VPC to a virtual private gateway and sets up an AWS Site-to-Site VPN connection. The VPN tunnel is UP after configuration and is working. However, during rekey for phase 2 of the VPN negotiation, the customer gateway device is receiving different parameters than the parameters that the device is configured to support. The network engineer checks the IPsec configuration of the VPN tunnel. The network engineer notices that the customer gateway device is configured with the most secure encryption algorithms that the AWS Site-to-Site VPN configuration file provides. What should the network engineer do to troubleshoot and correct the issue?",
    "en_opts": {
      "A": "Check the native virtual private gateway logs. Restrict the VPN tunnel options to the specific VPN parameters that the virtual private gateway requires.",
      "B": "Check the native customer gateway logs. Restrict the VPN tunnel options to the specific VPN parameters that the customer gateway requires.",
      "C": "Check Amazon CloudWatch logs of the virtual private gateway. Restrict the VPN tunnel options to the specific VPN parameters that the virtual private gateway requires.",
      "D": "Check Amazon CloudWatch logs of the customer gateway. Restrict the VPN tunnel options to the specific VPN parameters that the customer gateway requires."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/112422-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 105,
    "question": "회사가 빠르게 성장하고 있습니다. 회사의 온프레미스 시스템과 VPC에서 실행되는 Amazon EC2 인스턴스 간의 데이터 전송은 회사의 온프레미스 데이터 센터 방화벽과 AWS Transit Gateway 간의 단일 AWS Site-to-Site VPN 연결의 처리량으로 제한됩니다. 네트워크 엔지니어는 고가용성이고 안전한 솔루션을 설계하여 병목 현상을 해결해야 합니다. 솔루션은 온프레미스에서 VPC 리소스로의 VPN 처리량을 확장하여 트래픽 증가를 지원해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "transit gateway에 대한 여러 동적 BGP 기반 Site-to-Site VPN 연결을 구성합니다. ECMP(Equal-Cost Multi-Path) 라우팅을 구성합니다.",
      "B": "transit gateway에 대한 여러 정적 라우팅 기반 Site-to-Site VPN 연결을 구성합니다. ECMP(Equal-Cost Multi-Path) 라우팅을 구성합니다.",
      "C": "transit gateway에 새로운 Site-to-Site VPN 연결을 구성합니다. Site-to-Site VPN 연결에 대한 가속을 활성화합니다.",
      "D": "온프레미스 방화벽에서 인터넷을 통해 큰 인스턴스 크기 및 네트워킹 기능을 가진 EC2 인스턴스로의 소프트웨어 어플라이언스 기반 VPN 연결을 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Dynamic BGP — 경로 자동 학습 및 장애 조치\n▸ ECMP — 여러 경로 간 동시 로드밸런싱\n▸ VPN 확장성 — 다중 터널로 대역폭 증가\n\n【정답 포인트】\n▸ 다중 VPN 연결 = 병렬 처리량 (N × 연결당 처리량)\n▸ BGP 동적 = 경로 수렴 시간 감소, 장애 자동 우회\n▸ ECMP = 여러 터널 간 트래픽 균등 분산\n▸ Transit Gateway 기본 지원\n\n【오답 체크】\n(B) 정적 라우팅 — BGP 동적 학습 불가, 수동 관리 부담\n(C) 단일 연결 + 가속 — 처리량 한계 미해결\n(D) 소프트웨어 VPN — 성능 불안정, 확장성 제한\n\n【시험 포인트】\nVPN 확장 = 다중 연결 + BGP 동적 + ECMP (3요소 필수).",
    "en_q": "A company is growing rapidly. Data transfers between the company's on-premises systems and Amazon EC2 instances that run in VPCs are limited by the throughput of a single AWS Site-to-Site VPN connection between the company's on-premises data center firewall and an AWS Transit Gateway. A network engineer must resolve the throttling by designing a solution that is highly available and secure. The solution also must scale the VPN throughput from on premises to the VPC resources to support the increase in traffic. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure multiple dynamic BGP-based Site-to-Site VPN connections to the transit gateway. Configure equal-cost multi-path routing (ECMP).",
      "B": "Configure multiple static routing-based Site-to-Site VPN connections to the transit gateway. Configure equal-cost multi-path routing (ECMP).",
      "C": "Configure a new Site-to-Site VPN connection to the transit gateway. Enable acceleration for the Site-to-Site VPN connection.",
      "D": "Configure a software appliance-based VPN connection over the internet from the on-premises firewall to an EC2 instance that has a large instance size and networking capabilities."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111970-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 106,
    "question": "회사는 Amazon Route 53을 사용하여 example.com의 공개 호스팅 영역을 호스팅합니다. 네트워크 엔지니어는 최근 여러 레코드의 TTL을 60초로 줄였습니다. 네트워크 엔지니어는 이 변경으로 인해 Route 53에 대한 쿼리 수가 변경 전에 회사가 식별한 예상 수준을 초과했는지 여부를 평가하려고 합니다. 네트워크 엔지니어는 example.com 공개 호스팅 영역에 대해 수행된 쿼리의 수를 얻어야 합니다. 이 정보를 제공할 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS CloudTrail에서 새로운 trail을 생성하여 Route 53 데이터 이벤트를 포함합니다. CloudWatch Logs에 로그를 전송합니다. CloudWatch 지표 필터를 설정하여 쿼리 수를 계산하고 그래프를 생성합니다.",
      "B": "Amazon CloudWatch에 액세스하여 AWS/Route 53 네임스페이스를 확인하고 공개 호스팅 영역에 대한 DNSQueries 지표를 확인합니다.",
      "C": "Amazon CloudWatch에 액세스하여 AWS/Route 53 Resolver 네임스페이스를 확인하고 특정 엔드포인트에 대한 InboundQueryVolume 지표를 확인합니다.",
      "D": "공개 호스팅 영역에 대해 Amazon CloudWatch로 로깅을 구성합니다. CloudWatch 지표 필터를 설정하여 쿼리 수를 계산하고 그래프를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DNSQueries CloudWatch Metric — Route 53 쿼리 수 추적\n▸ AWS/Route 53 Namespace — Route 53 관리 메트릭\n\n【정답 포인트】\n▸ CloudWatch 직접 쿼리 = 가장 간단하고 빠른 방법\n▸ DNSQueries 지표 = 호스팅 영역별 쿼리 집계\n▸ TTL 변경 영향도 즉시 확인 가능\n\n【오답 체크】\n(A) CloudTrail — 데이터 이벤트 아님, 관리 이벤트만 추적\n(C) Route 53 Resolver — VPC 엔드포인트 쿼리용, 공개 호스팅 영역 미지원\n(D) 호스팅 영역 로깅 — 미지원 기능, CloudWatch 직접 메트릭 사용\n\n【시험 포인트】\nRoute 53 쿼리 모니터링 = CloudWatch DNSQueries 지표 (즉시 조회 가능).",
    "en_q": "A company uses Amazon Route 53 to host a public hosted zone for example.com. A network engineer recently reduced the TTL on several records to 60 seconds. The network engineer wants to assess whether the change has increased the number of queries to Route 53 beyond the expected levels that the company identified before the change. The network engineer must obtain the number of queries that have been made to the example.com public hosted zone. Which solution will provide this information?",
    "en_opts": {
      "A": "Create a new trail in AWS CloudTrail to include Route 53 data events. Send logs to Amazon CloudWatch Logs. Set up a CloudWatch metric filter to count the number of queries and create graphs.",
      "B": "Use Amazon CloudWatch to access the AWS/Route 53 namespace and to check the DNSQueries metric for the public hosted zone.",
      "C": "Use Amazon CloudWatch to access the AWS/Route 53 Resolver namespace and to check the InboundQueryVolume metric for a specific endpoint.",
      "D": "Configure logging to Amazon CloudWatch for the public hosted zone. Set up a CloudWatch metric filter to count the number of queries and create graphs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/112761-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 107,
    "question": "회사는 새로운 보안 요구사항을 충족하기 위해 온프레미스 사이트와 AWS의 기존 VPC 간의 연결을 설정하고 있습니다. 새로운 요구사항에 따르면 모든 공개 DNS 쿼리는 온프레미스 DNS 보안 솔루션을 사용해야 합니다. 회사의 보안팀은 회사가 VPC 엔드포인트를 사용하여 AWS 서비스에 액세스하고 있기 때문에 AWS 서비스 엔드포인트에 대한 예외를 허용했습니다. 이 요구사항을 충족하도록 아키텍처를 구성하기 위해 네트워크 엔지니어가 취해야 할 단계의 조합은 무엇입니까? (3개를 선택하십시오.)",
    "options": {
      "A": "도메인 이름 \".\"(점)에 대한 시스템 규칙을 생성하고 대상 IP 주소로 온프레미스 DNS 보안 솔루션을 설정합니다.",
      "B": "온프레미스 DNS 보안 솔루션의 IP 주소를 제공하는 새로운 DHCP 옵션 세트를 생성합니다. VPC를 업데이트하여 이 새로운 DHCP 옵션 세트를 사용합니다.",
      "C": "Amazon Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 이 엔드포인트를 VPC와 연결합니다.",
      "D": "Amazon Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 이 엔드포인트를 VPC와 연결합니다.",
      "E": "도메인 이름 amazonaws.com에 대한 시스템 규칙을 생성합니다.",
      "F": "도메인 이름 \".\"(점)에 대한 포워딩 규칙을 생성하고 대상 IP 주소로 온프레미스 DNS 보안 솔루션을 설정합니다."
    },
    "answer": "DEF",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver Outbound Endpoint — VPC 아웃바운드 DNS 쿼리 라우팅\n▸ Forwarding Rule — 특정 도메인의 DNS 쿼리를 외부 DNS 서버로 전달\n▸ System Rule — AWS 서비스 도메인 예외 처리\n\n【정답 포인트】\n▸ \n(D) Outbound Endpoint = VPC에서 나가는 DNS 쿼리 가로채기\n▸ (F) 전체 도메인(\".\" = 루트) 포워딩 = 모든 공개 쿼리를 온프레미스 DNS로\n▸ \n(E) amazonaws.com 시스템 규칙 = AWS 서비스 쿼리는 로컬 처리 (예외)\n\n【오답 체크】\n(A) 시스템 규칙 A — amazonaws.com 예외처리 안 됨\n(B) DHCP 옵션 세트 — VPC 전체 DNS 변경, 세분화 불가\n(C) Inbound Endpoint — 온프레미스 → VPC 방향, 요구사항 반대 방향\n\n【시험 포인트】\nDNS 트래픽 제어 = Outbound Endpoint + Forwarding Rule + System Rule (세 가지 조합).",
    "en_q": "A company is establishing connectivity between its on-premises site and an existing VPC on AWS to meet a new security requirement. According to the new requirement, all public DNS queries must use an on-premises DNS security solution. The company's security team has allowed an exception for the AWS service endpoints because the company is using VPC endpoints to access AWS services. Which combination of steps should a network engineer take to configure the architecture to meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Create a system rule for the domain name \".\" (dot) with a target IP address of the on-premises DNS security solution.",
      "B": "Create a new DHCP options set that provides the IP address of the on-premises DNS security solution. Update the VPC to use this new DHCP options set.",
      "C": "Create an Amazon Route 53 Resolver inbound endpoint. Associate this endpoint with the VPC.",
      "D": "Create an Amazon Route 53 Resolver outbound endpoint. Associate this endpoint with the VPC.",
      "E": "Create a system rule for the domain name amazonaws.com.",
      "F": "Create a forwarding rule for the domain name \".\" (dot) with a target IP address of the on-premises DNS security solution."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111808-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 108,
    "question": "네트워크 엔지니어는 새로운 AWS 환경의 DNS 아키텍처를 설계하고 있습니다. 환경은 온프레미스의 엔드포인트의 DNS 이름을 해결할 수 있어야 하며, 온프레미스 시스템은 AWS 엔드포인트의 이름을 해결할 수 있어야 합니다. DNS 아키텍처는 개별 계정이 서브도메인을 관리할 수 있는 기능을 제공해야 합니다. 네트워크 엔지니어는 여러 계정에서 작동하는 단일 규칙 집합을 생성해야 합니다. 또한 네트워크 엔지니어는 가능할 때마다 AWS 네이티브 서비스를 사용해야 합니다. 이 요구사항을 충족하기 위해 네트워크 엔지니어가 취해야 할 단계의 조합은 무엇입니까? (3개를 선택하십시오.)",
    "options": {
      "A": "전체 클라우드 도메인에 대한 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다. 중앙 Route 53 프라이빗 호스팅 영역과 연결된 다른 AWS 계정과 일치하는 서브도메인을 계획합니다.",
      "B": "중앙 AWS 계정에서 프라이빗 호스팅 영역의 클라우드 도메인을 호스팅하는 AWS Directory Service for Microsoft Active Directory 서버 엔드포인트를 생성합니다. Microsoft Active Directory DNS에서 온프레미스 DNS 리졸버 엔드포인트로 트래픽을 포워딩하도록 조건부 포워딩 규칙을 생성합니다. VPC 리졸버에 대해 서브도메인 간에 트래픽을 포워딩하도록 다른 규칙을 생성합니다.",
      "C": "전체 클라우드 도메인에 대한 프라이빗 호스팅 영역을 호스팅하는 중앙 AWS 계정에서 Amazon Route 53 Resolver 인바운드 및 아웃바운드 엔드포인트를 생성합니다. 온프레미스 DNS 리졸버 엔드포인트로 트래픽을 포워딩하도록 포워딩 규칙을 생성합니다. Resolver 인바운드 엔드포인트로 서브도메인 간에 트래픽을 포워딩하도록 다른 규칙을 생성합니다.",
      "D": "다른 계정과 중앙 계정 간의 네트워크 연결이 존재하는지 확인하여 AWS Directory Service for Microsoft Active Directory DNS 엔드포인트에 도달할 수 있도록 합니다.",
      "E": "다른 계정과 중앙 계정 간의 네트워크 연결이 존재하는지 확인하여 Amazon Route 53 Resolver 엔드포인트에 도달할 수 있도록 합니다.",
      "F": "AWS Resource Access Manager (AWS RAM)를 사용하여 계정 간에 Amazon Route 53 Resolver 규칙을 공유합니다. 다른 계정과 중앙 계정 간의 네트워크 연결이 존재하는지 확인하여 Route 53 Resolver 엔드포인트에 도달할 수 있도록 합니다."
    },
    "answer": "ACF",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver — 다중 계정 DNS 통합\n▸ AWS RAM (Resource Access Manager) — 규칙 공유\n▸ Inbound/Outbound Endpoint — 양방향 DNS 포워딩\n\n【정답 포인트】\n▸ \n(A) 중앙 프라이빗 호스팅 영역 = 전체 클라우드 도메인 관리\n▸ \n(C) Resolver 엔드포인트 = 다중 계정 접근, 온프레미스 연동\n▸ (F) AWS RAM 공유 = 규칙 중앙화, 계정별 자동 적용\n▸ \n(E) 네트워크 연결 확인 = 엔드포인트 도달 가능 보증\n\n【오답 체크】\n(B) Directory Service — AWS 네이티브 아님, 복잡도 높음\n(D) Directory Service 네트워크 — 불필요\n\n【시험 포인트】\n다중 계정 DNS = Private Hosted Zone + Resolver Endpoint + RAM 공유 (3단계).",
    "en_q": "A network engineer is designing the DNS architecture for a new AWS environment. The environment must be able to resolve DNS names of endpoints on premises, and the on-premises systems must be able to resolve the names of AWS endpoints. The DNS architecture must give individual accounts the ability to manage subdomains. The network engineer needs to create a single set of rules that will work across multiple accounts to control this behavior. In addition, the network engineer must use AWS native services whenever possible. Which combination of steps should the network engineer take to meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Create an Amazon Route 53 private hosted zone for the overall cloud domain. Plan to create subdomains that align to other AWS accounts that are associated with the central Route 53 private hosted zone.",
      "B": "Create AWS Directory Service for Microsoft Active Directory server endpoints in the central AWS account that hosts the private hosted zone for the overall cloud domain. Create a conditional forwarding rule in Microsoft Active Directory DNS to forward traffic to a DNS resolver endpoint on premises. Create another rule to forward traffic between subdomains to the VPC resolver.",
      "C": "Create Amazon Route 53 Resolver inbound and outbound endpoints in the central AWS account that hosts the private hosted zone for the overall cloud domain. Create a forwarding rule to forward traffic to a DNS resolver endpoint on premises. Create another rule to forward traffic between subdomains to the Resolver inbound endpoint.",
      "D": "Ensure that networking exists between the other accounts and the central account so that traffic can reach the AWS Directory Service for Microsoft Active Directory DNS endpoints.",
      "E": "Ensure that networking exists between the other accounts and the central account so that traffic can reach the Amazon Route 53 Resolver endpoints.",
      "F": "Share the Amazon Route 53 Resolver rules between accounts by using AWS Resource Access Manager (AWS RAM). Ensure that networking exists between the other accounts and the central account so that traffic can reach the Route 53 Resolver endpoints."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/112763-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 109,
    "question": "회사는 DNS 등록기관 및 DNS 호스팅을 Amazon Route 53으로 마이그레이션하려고 합니다. 회사 웹사이트는 매일 수만 건의 방문을 받으며, 현재 DNS 제공자는 따라가지 못하고 있습니다. 회사는 가능한 한 빨리 마이그레이션하려고 하지만 다운타임을 허용할 수 없습니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "도메인 이름을 Route 53으로 전송합니다. Route 53 프라이빗 호스팅 영역을 생성하고 기존 DNS 레코드를 모두 복사합니다. 도메인의 네임서버를 새로 생성된 프라이빗 호스팅 영역에서 지정한 네임서버를 사용하도록 업데이트합니다.",
      "B": "기존 DNS 서버에서 모든 DNS 레코드를 Route 53 프라이빗 호스팅 영역으로 복사합니다. 기존 등록기관의 네임서버를 프라이빗 호스팅 영역 네임서버를 사용하도록 업데이트합니다. 도메인 이름을 Route 53으로 전송합니다. 모든 변경 사항이 전파되었는지 확인합니다.",
      "C": "도메인 이름을 Route 53으로 전송합니다. Route 53 공개 호스팅 영역을 생성하고 기존 DNS 레코드를 모두 복사합니다. 각 레코드의 TTL 값을 1초로 설정합니다. 도메인의 네임서버를 새로 생성된 공개 호스팅 영역에서 지정한 네임서버를 사용하도록 업데이트합니다.",
      "D": "기존 DNS 서버에서 모든 DNS 레코드를 Route 53 공개 호스팅 영역으로 복사합니다. 기존 등록기관의 네임서버를 Route 53 호스팅 영역의 Route 53 네임서버를 사용하도록 업데이트합니다. 변경 사항이 전파되면 Route 53으로 도메인 이름 전송을 수행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Public Hosted Zone — 퍼블릭 DNS 레코드 관리\n▸ TTL Propagation — DNS 레코드 전파 시간\n▸ Zone Transfer — 도메인 소유권 이전\n\n【정답 포인트】\n▸ (1) Route 53 공개 호스팅 영역에 레코드 복사\n▸ (2) 기존 등록기관에서 네임서버를 Route 53으로 변경\n▸ (3) DNS 전파 완료 확인 후 도메인 전송\n▸ 순서 중요: 레코드 → NS 변경 → 도메인 전송\n▸ 다운타임 제거\n\n【오답 체크】\n(A) 프라이빗 호스팅 영역 — 공개 쿼리 불가\n(B) 프라이빗 호스팅 영역 + 도메인 전송 먼저 — 전파 대기 중 장애 위험\n(C) 레코드 복사 전에 도메인 전송 — 레코드 부재 상태 발생\n\n【시험 포인트】\nDNS 마이그레이션 = 레코드 복사 → NS 변경 + 전파 확인 → 도메인 전송 (3단계 순서 필수).",
    "en_q": "A company wants to migrate its DNS registrar and DNS hosting to Amazon Route 53. The company website receives tens of thousands of visits each day, and the company's current DNS provider cannot keep up. The company wants to migrate as quickly as possible but cannot tolerate any downtime. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Transfer the domain name to Route 53. Create a Route 53 private hosted zone, and copy all the existing DNS records. Update the name servers on the domain to use the name servers that are specified in the newly created private hosted zone.",
      "B": "Copy all DNS records from the existing DNS servers to a Route 53 private hosted zone. Update the name servers with the existing registrar to use the private hosted zone name servers. Transfer the domain name to Route 53. Ensure that all the changes have propagated.",
      "C": "Transfer the domain name to Route 53. Create a Route 53 public hosted zone, and copy all the existing DNS records. Set the TTL value on each record to 1 second. Update the name servers on the domain to use the name servers that are specified in the newly created public hosted zone.",
      "D": "Copy all DNS records from the existing DNS servers to a Route 53 public hosted zone. Update the name servers with the existing registrar to use the Route 53 name servers for the hosted zone. When the changes have propagated, perform a domain name transfer to Route 53."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111977-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 110,
    "question": "회사는 us-east-1 리전에 4개의 VPC가 있는 AWS 계정을 보유하고 있습니다. VPC는 개발 VPC와 다양한 워크로드를 호스팅하는 3개의 프로덕션 VPC로 구성됩니다. 회사는 AWS Direct Connect를 사용하여 Direct Connect 게이트웨이를 통해 온프레미스 데이터 센터를 AWS로 확장했습니다. 회사는 이제 온프레미스에서 프로덕션 VPC와 개발 VPC로의 연결을 설정하려고 합니다. 프로덕션 VPC는 서로 라우팅 데이터를 허용합니다. 그러나 개발 VPC는 프로덕션 VPC에서 격리되어야 합니다. 개발 VPC와 프로덕션 VPC 간에 데이터가 흐를 수 없습니다. 이 솔루션을 구현하기 위해 네트워크 엔지니어는 기본 라우트 테이블 연결 및 기본 라우트 테이블 전파가 꺼진 단일 transit gateway 라우트 테이블을 사용하여 transit gateway를 생성합니다. 네트워크 엔지니어는 프로덕션 VPC, 개발 VPC 및 Direct Connect 게이트웨이를 transit gateway에 연결합니다. 각 VPC 라우트 테이블에서 네트워크 엔지니어는 0.0.0.0/0 라우트를 추가하고 transit gateway를 다음 대상으로 설정합니다. 이 솔루션을 완료하기 위해 네트워크 엔지니어가 다음으로 취해야 할 단계의 조합은 무엇입니까? (3개를 선택하십시오.)",
    "options": {
      "A": "프로덕션 VPC 연결을 기존 transit gateway 라우트 테이블과 연결합니다. 이러한 연결에서 라우트를 전파합니다.",
      "B": "모든 연결을 기존 transit gateway 라우트 테이블과 연결합니다. 이러한 연결에서 라우트를 전파합니다.",
      "C": "Direct Connect 게이트웨이 연결을 기존 transit gateway 라우트 테이블과 연결합니다. Direct Connect 게이트웨이 연결을 이 라우트 테이블로 전파합니다.",
      "D": "개발 VPC의 기존 transit gateway 네트워크 인터페이스의 보안 그룹 인바운드 규칙을 변경하여 온프레미스 CIDR 범위로의 연결만 허용합니다.",
      "E": "새로운 transit gateway 라우트 테이블을 생성합니다. 새로운 라우트 테이블을 개발 VPC 연결과 연결합니다. Direct Connect 게이트웨이 및 개발 VPC 연결을 새로운 라우트 테이블로 전파합니다.",
      "F": "기본 라우트 테이블 연결 및 기본 라우트 테이블 전파가 켜진 새로운 transit gateway를 생성합니다. Direct Connect 게이트웨이와 개발 VPC를 새로운 transit gateway에 연결합니다."
    },
    "answer": "ACE",
    "explanation": "【핵심 용어】\n▸ Transit Gateway Route Table — 트래픽 전파 규칙 제어\n▸ Route Table Association — 연결(attachment)을 라우트 테이블에 연결\n▸ Route Propagation — 경로 자동 학습\n\n【정답 포인트】\n▸ \n(A) 프로덕션 VPC들을 기존 라우트 테이블과 연결 + 전파\n▸ \n(C) Direct Connect를 기존 라우트 테이블과 연결 + 전파 = 온프레미스 ↔ 프로덕션 연결\n▸ \n(E) 개발 VPC용 분리된 라우트 테이블 생성 + 개발만 연결 + Direct Connect와 개발만 전파\n▸ 결과: 개발 ↔ 온프레미스 O, 개발 ↔ 프로덕션 X\n\n【오답 체크】\n(B) 모든 연결 함께 — 개발 VPC가 프로덕션과 연결됨\n(D) 보안 그룹 — 라우트 테이블 수준이 아님, 상위 레벨에서 해결 필요\n(F) 새로운 TGW — 온프레미스 연결 분리, 복잡도 증가\n\n【시험 포인트】\n개발 격리 = 별도 라우트 테이블 + 선택적 전파 (라우팅 제어의 핵심).",
    "en_q": "A company has an AWS account with four VPCs in the us-east-1 Region. The VPCs consist of a development VPC and three production VPCs that host various workloads. The company has extended its on-premises data center to AWS with AWS Direct Connect by using a Direct Connect gateway. The company now wants to establish connectivity to its production VPCs and development VPC from on premises. The production VPCs are allowed to route data to each other. However, the development VPC must be isolated from the production VPCs. No data can flow between the development VPC and the production VPCs. In preparation to implement this solution, a network engineer creates a transit gateway with a single transit gateway route table. Default route table association and default route table propagation are turned off. The network engineer attaches the production VPCs, the development VPC, and the Direct Connect gateway to the transit gateway. For each VPC route table, the network engineer adds a route to 0.0.0.0/0 with the transit gateway as the next destination. Which combination of steps should the network engineer take next to complete this solution? (Choose three.)",
    "en_opts": {
      "A": "Associate the production VPC attachments with the existing transit gateway route table. Propagate the routes from these attachments.",
      "B": "Associate all the attachments with the existing transit gateway route table. Propagate the routes from these attachments.",
      "C": "Associate the Direct Connect gateway attachment with the existing transit gateway route table. Propagate the Direct Connect gateway attachment to this route table.",
      "D": "Change the security group inbound rules on the existing transit gateway network interfaces in the development VPC to allow connections to and from the on-premises CIDR range only.",
      "E": "Create a new transit gateway route table. Associate the new route table with the development VPC attachment. Propagate the Direct Connect gateway and development VPC attachment to the new route table.",
      "F": "Create a new transit gateway with default route table association and default route table propagation turned on. Attach the Direct Connect gateway and development VPC to the new transit gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/113187-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 111,
    "question": "네트워크 엔지니어는 회사의 사무실 위치와 AWS 계정 간에 듀얼 스택 연결을 제공해야 합니다. 회사의 온프레미스 라우터는 듀얼 스택 연결을 지원하며, VPC가 듀얼 스택 지원으로 구성되었습니다. 회사는 사무실 위치로의 2개의 AWS Direct Connect 연결을 설정했습니다. 이 연결은 고가용성이고 지연 시간에 민감한 트래픽에 안정적이어야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까? (2개를 선택하십시오.)",
    "options": {
      "A": "각 Direct Connect 연결에 단일 프라이빗 VIF를 구성합니다. IPv4 및 IPv6 피어링을 각 프라이빗 VIF에 추가합니다. AWS에서 제공하는 BGP 이웃으로 온프레미스 장비를 구성하여 IPv4 피어링에서 IPv4 라우트를 공지하고 IPv6 피어링에서 IPv6 라우트를 공지합니다. 모든 피어링 세션에서 양방향 포워딩 감지(BFD)를 활성화합니다.",
      "B": "각 Direct Connect 연결에 2개의 프라이빗 VIF를 구성합니다: IPv4 주소 제품군이 있는 프라이빗 VIF 1개 및 IPv6 주소 제품군이 있는 프라이빗 VIF 1개입니다. AWS에서 제공하는 BGP 이웃으로 온프레미스 장비를 구성하여 IPv4 피어링에서 IPv4 라우트를 공지하고 IPv6 피어링에서 IPv6 라우트를 공지합니다. 모든 피어링 세션에서 양방향 포워딩 감지(BFD)를 활성화합니다.",
      "C": "각 Direct Connect 연결에 단일 프라이빗 VIF 및 IPv4 피어링을 구성합니다. 이 피어링에서 온프레미스 장비를 구성하여 IPv6 라우트를 같은 BGP 이웃 구성에서 공지합니다. 모든 피어링 세션에서 양방향 포워딩 감지(BFD)를 활성화합니다.",
      "D": "각 Direct Connect 연결에 2개의 프라이빗 VIF를 구성합니다: IPv4 주소 제품족이 있는 프라이빗 VIF 1개 및 IPv6 주소 제품족이 있는 프라이빗 VIF 1개입니다. AWS에서 제공하는 BGP 이웃으로 온프레미스 장비를 구성하여 모든 피어링 세션에서 모든 IPv4 라우트 및 IPv6 라우트를 공지합니다. 양방향 포워딩 감지(BFD) 구성은 변경하지 않습니다.",
      "E": "각 Direct Connect 연결에 2개의 프라이빗 VIF를 구성합니다: IPv4 주소 제품족이 있는 프라이빗 VIF 1개 및 IPv6 주소 제품족이 있는 프라이빗 VIF 1개입니다. AWS에서 제공하는 BGP 이웃으로 온프레미스 장비를 구성하여 IPv4 피어링에서 IPv4 라우트를 공지하고 IPv6 피어링에서 IPv6 라우트를 공지합니다. 온프레미스 장비 및 Direct Connect 구성 모두에서 BGP hello 타이머를 5초로 줄입니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ Dual-Stack VIF — IPv4 및 IPv6 동시 지원\n▸ BFD (Bidirectional Forwarding Detection) — 빠른 장애 감지\n▸ BGP 피어링 분리 — IPv4/IPv6 독립 라우팅\n\n【정답 포인트】\n▸ \n(A) 단일 VIF + 듀얼 피어링 = AWS 지원, 간단\n▸ \n(B) 두 개 VIF + 분리 피어링 = 완벽한 독립성, 권장\n▸ 두 연결 + BFD = 고가용성 + 빠른 수렴\n\n【오답 체크】\n(C) IPv6 라우트를 IPv4 피어링에서 — 혼합 불가\n(D) 모든 라우트 모든 피어링 — 중복/비효율\n(E) BGP hello 타이머 감소 — 권장되지 않음, 안정성 저하\n\n【시험 포인트】\n듀얼 스택 Direct Connect = (단일 VIF + 듀얼 피어링) OR (두 개 VIF + 분리 피어링) + BFD.",
    "en_q": "A network engineer needs to provide dual-stack connectivity between a company's office location and an AWS account. The company's on-premises router supports dual-stack connectivity, and the VPC has been configured with dual-stack support. The company has set up two AWS Direct Connect connections to the office location. This connectivity must be highly available and must be reliable for latency-sensitive traffic. Which solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Configure a single private VIF on each Direct Connect connection. Add both IPv4 and IPv6 peering to each private VIF. Configure the on-premises equipment with the AWS provided BGP neighbors to advertise IPv4 routes on the IPv4 peering and IPv6 routes on the IPv6 peering. Enable Bidirectional Forwarding Detection (BFD) on all peering sessions.",
      "B": "Configure two private VIFs on each Direct Connect connection: one private VIF with the IPv4 address family and one private VIF with the IPv6 address family. Configure the on-premises equipment with the AWS provided BGP neighbors to advertise IPv4 routes on the IPv4 peering and IPv6 routes on the IPv6 peering. Enable Bidirectional Forwarding Detection (BFD) on all peering sessions.",
      "C": "Configure a single private VIF and IPv4 peering on each Direct Connect connection. Configure the on-premises equipment with this peering to advertise the IPv6 routes in the same BGP neighbor configuration. Enable Bidirectional Forwarding Detection (BFD) on all peering sessions.",
      "D": "Configure two private VIFs on each Direct Connect connection: one private VIF with the IPv4 address family and one private VIF with the IPv6 address family. Configure the on-premises equipment with the AWS provided BGP neighbors to advertise all IPv4 routes and IPv6 routes on all peering sessions. Keep the Bidirectional Forwarding Detection (BFD) configuration unchanged.",
      "E": "Configure two private VIFs on each Direct Connect connection: one private VIF with the IPv4 address family and one private VIF with the IPv6 address family. Configure the on-premises equipment with the AWS provided BGP neighbors to advertise IPv4 routes on the IPv4 peering and IPv6 routes on the IPv6 peering. Reduce the BGP hello timer to 5 seconds on both the on-premises equipment and the Direct Connect configuration."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111891-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 112,
    "question": "회사가 최근 AWS Client VPN을 사용하기 시작하여 원격 사용자가 여러 피어링 VPC의 리소스와 회사의 온프레미스 데이터 센터의 리소스에 액세스할 수 있게 했습니다. Client VPN 엔드포인트 라우트 테이블에는 0.0.0.0/0의 단일 항목이 있습니다. Client VPN 엔드포인트는 인바운드 규칙이 없고 0.0.0.0/0로의 모든 트래픽을 허용하는 단일 아웃바운드 규칙이 있는 새로운 보안 그룹을 사용하고 있습니다. 여러 원격 사용자가 웹 검색 결과가 사용자의 잘못된 지리적 위치 정보를 표시하고 있다고 보고합니다. 이 문제를 해결하기 위해 네트워크 엔지니어가 취해야 할 단계의 조합은 무엇입니까? (최소한의 서비스 중단으로) (3개를 선택하십시오.)",
    "options": {
      "A": "사용자를 AWS Site-to-Site VPN으로 전환합니다.",
      "B": "Client VPN 엔드포인트에서 split-tunnel 옵션을 활성화합니다.",
      "C": "Client VPN 라우트 테이블에 피어링된 VPC 및 온프레미스 데이터 센터에 대한 라우트를 추가합니다.",
      "D": "Client VPN 엔드포인트가 사용하는 보안 그룹에서 0.0.0.0/0 아웃바운드 규칙을 제거합니다.",
      "E": "Client VPN 엔드포인트를 삭제하고 다른 VPC에서 다시 생성합니다.",
      "F": "Client VPN 엔드포인트 라우트 테이블에서 0.0.0.0/0 항목을 제거합니다."
    },
    "answer": "BCF",
    "explanation": "【핵심 용어】\n▸ Split-Tunnel — VPN 경유 트래픽과 로컬 ISP 트래픽 구분\n▸ Client VPN Route Table — VPN 쪽에 가는 트래픽 선택\n▸ GeoIP Blocking — 인터넷 IP 기반 위치 추적\n\n【정답 포인트】\n▸ 문제: 모든 트래픽 VPN 경유 → 공개 IP가 VPN 엔드포인트 위치\n▸ \n(B) Split-tunnel 활성화 = 로컬 인터넷 트래픽은 로컬 ISP 경유\n▸ \n(C) 특정 라우트 추가 = 오직 AWS/온프레미스만 VPN 사용\n▸ (F) 0.0.0.0/0 제거 = 기본 라우트 제거로 split-tunnel 강제\n\n【오답 체크】\n(A) Site-to-Site VPN 전환 — 원격 사용자 솔루션 아님\n(D) 보안 그룹 수정 — 문제 해결 안 됨\n(E) 엔드포인트 재생성 — 서비스 중단 과다\n\n【시험 포인트】\nClient VPN 위치 추적 = Split-tunnel + 라우트 선택 + 기본 경로 제거 (3단계).",
    "en_q": "A company recently started using AWS Client VPN to give its remote users the ability to access resources in multiple peered VPCs and resources in the company's on-premises data center. The Client VPN endpoint route table has a single entry of 0.0.0.0/0. The Client VPN endpoint is using a new security group that has no inbound rules and a single outbound rule that allows all traffic to 0.0.0.0/0. Multiple remote users report that web search results are showing incorrect geographic location information for the users. Which combination of steps should a network engineer take to resolve this issue with the LEAST amount of service interruption? (Choose three.)",
    "en_opts": {
      "A": "Switch users to AWS Site-to-Site VPNs.",
      "B": "Enable the split-tunnel option on the Client VPN endpoint.",
      "C": "Add routes for the peered VPCs and for the on-premises data center to the Client VPN route table.",
      "D": "Remove the 0.0.0.0/0 outbound rule from the security group that the Client VPN endpoint uses.",
      "E": "Delete and recreate the Client VPN endpoint in a different VPC.",
      "F": "Remove the 0.0.0.0/0 entry from the Client VPN endpoint route table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111648-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 113,
    "question": "회사는 VPC와 온프레미스 데이터 센터 간의 하이브리드 연결을 설정했습니다. 회사는 온프레미스 데이터 센터의 DNS 서버에서 on-premises.example.com 서브도메인을 구성했습니다. 회사는 다양한 VPC 및 계정 전체의 AWS에서 실행되는 워크로드에 대해 aws.example.com 서브도메인을 사용하고 있습니다. 두 환경의 리소스는 IP 주소를 사용하여 서로 액세스할 수 있습니다. 회사는 VPC의 워크로드가 on-premises.example.com DNS 이름을 사용하여 온프레미스의 리소스에 액세스할 수 있기를 원합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까? (최소한의 리소스 관리 포함)",
    "options": {
      "A": "Amazon Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. on-premises.example.com에 대한 DNS 쿼리를 온프레미스 DNS 서버로 조건부로 포워딩하는 Resolver 규칙을 구성합니다. VPC에 규칙을 연결합니다.",
      "B": "Amazon Route 53 Resolver 인바운드 엔드포인트 및 아웃바운드 엔드포인트를 생성합니다. on-premises.example.com에 대한 DNS 쿼리를 온프레미스 DNS 서버로 조건부로 포워딩하는 Resolver 규칙을 구성합니다. VPC에 규칙을 연결합니다.",
      "C": "Amazon EC2 인스턴스를 시작합니다. BIND 소프트웨어를 설치 및 구성하여 on-premises.example.com에 대한 DNS 쿼리를 온프레미스 DNS 서버로 조건부로 포워딩합니다. EC2 인스턴스의 IP 주소를 각 VPC의 커스텀 DNS 서버로 구성합니다.",
      "D": "각 VPC에서 Amazon EC2 인스턴스를 시작합니다. BIND 소프트웨어를 설치 및 구성하여 on-premises.example.com에 대한 DNS 쿼리를 온프레미스 DNS 서버로 조건부로 포워딩합니다. EC2 인스턴스의 IP 주소를 각 VPC의 커스텀 DNS 서버로 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver Outbound Endpoint — VPC DNS 쿼리 외부 포워딩\n▸ Conditional Forwarding Rule — 특정 도메인만 외부 DNS로 라우팅\n\n【정답 포인트】\n▸ Route 53 Resolver = AWS 네이티브, 관리 최소화\n▸ 아웃바운드 엔드포인트 = VPC → 온프레미스 DNS 경로\n▸ 규칙 1개 = 모든 VPC에 자동 적용, 확장성 우수\n▸ EC2 필요 없음 = 관리 오버헤드 제거\n\n【오답 체크】\n(B) 인바운드 엔드포인트 — 온프레미스 → VPC 방향, 요구사항 반대\n(C) 단일 EC2 — 단일 실패점, 고가용성 미확보\n(D) VPC별 EC2 — 다중 인스턴스 관리 부담, 비용 증가\n\n【시험 포인트】\nDNS 포워딩 최소화 = Route 53 Resolver + Conditional Rule (AWS 네이티브 솔루션).",
    "en_q": "A company has set up hybrid connectivity between its VPCs and its on-premises data center. The company has the on-premises.example.com subdomain configured at its DNS server in the on-premises data center. The company is using the aws.example.com subdomain for workloads that run on AWS across different VPCs and accounts. Resources in both environments can access each other by using IP addresses. The company wants workloads in the VPCs to be able to access resources on premises by using the on-premises.example.com DNS names. Which solution will meet these requirements with MINIMUM management of resources?",
    "en_opts": {
      "A": "Create an Amazon Route 53 Resolver outbound endpoint. Configure a Resolver rule that conditionally forwards DNS queries for on-premises.example.com to the on-premises DNS server. Associate the rule with the VPCs.",
      "B": "Create an Amazon Route 53 Resolver inbound endpoint and a Resolver outbound endpoint. Configure a Resolver rule that conditionally forwards DNS queries for on-premises.example.com to the on-premises DNS server. Associate the rule with the VPCs.",
      "C": "Launch an Amazon EC2 instance. Install and configure BIND software to conditionally forward DNS queries for on-premises.example.com to the on-premises DNS server. Configure the EC2 instance's IP address as a custom DNS server in each VPC.",
      "D": "Launch an Amazon EC2 instance in each VPC. Install and configure BIND software to conditionally forward DNS queries for on-premises.example.com to the on-premises DNS server. Configure the EC2 instance's IP address as a custom DNS server in each VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/112217-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 114,
    "question": "회사가 AWS 클라우드 채택 초기 단계에 있습니다. 회사는 아시아의 온프레미스 데이터 센터에서 실행되는 애플리케이션을 보유하고 있습니다. 회사는 us-east-1 리전에서 새로운 애플리케이션을 배포해야 합니다. 클라우드의 애플리케이션은 온프레미스 데이터 센터로의 연결이 필요합니다. 회사는 AWS와 데이터 센터 간의 통신 채널을 설정해야 합니다. 솔루션은 지연 시간을 개선하고 공개 인터넷을 통한 대륙 간 라우팅의 성능 영향 가능성을 최소화하며 전송 중인 데이터를 암호화해야 합니다. 이 요구사항을 가장 빠르게 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "가속이 켜진 AWS Site-to-Site VPN 연결을 생성합니다. 가상 프라이빗 게이트웨이를 생성합니다. Site-to-Site VPN 연결을 가상 프라이빗 게이트웨이에 연결합니다. 가상 프라이빗 게이트웨이를 애플리케이션이 배포될 VPC에 연결합니다.",
      "B": "가속이 켜진 AWS Site-to-Site VPN 연결을 생성합니다. Transit gateway를 생성합니다. Site-to-Site VPN 연결을 transit gateway에 연결합니다. 애플리케이션이 배포될 VPC에 transit gateway 연결을 생성합니다.",
      "C": "AWS Direct Connect 연결을 생성합니다. 가상 프라이빗 게이트웨이를 생성합니다. 공개 VIF 및 프라이빗 VIF를 생성하고 가상 프라이빗 게이트웨이를 사용합니다. 공개 VIF를 통해 AWS Site-to-Site VPN 연결을 생성합니다.",
      "D": "가속이 꺼진 AWS Site-to-Site VPN 연결을 생성합니다. Transit gateway를 생성합니다. Site-to-Site VPN 연결을 transit gateway에 연결합니다. 애플리케이션이 배포될 VPC에 transit gateway 연결을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ VPN Acceleration — AWS Global Accelerator 활용, 인터넷 최적화\n▸ Transit Gateway — VPC 및 온프레미스 중앙 연결\n▸ Time-to-Deploy — 가장 빠른 구현\n\n【정답 포인트】\n▸ 가장 빠른 구현 = VPN 사용 (Direct Connect는 프로비저닝 기간 필요)\n▸ 가속 활성화 = 공개 인터넷 성능 최적화\n▸ Transit Gateway = 향후 확장 가능 (다중 VPC 지원)\n▸ 데이터 암호화 = IPsec VPN 자체 지원\n\n【오답 체크】\n(A) Virtual Private Gateway — 단일 VPC만, 확장성 제한\n(C) Direct Connect — 구현 시간 과다 (설치 기간)\n(D) 가속 비활성화 — 지연 시간 미최적화\n\n【시험 포인트】\n빠른 구현 + 지연 시간 최소화 + 암호화 = VPN Acceleration + Transit Gateway의 조합.",
    "en_q": "A company is in the early stage of AWS Cloud adoption. The company has an application that is running in an on-premises data center in Asia. The company needs to deploy new applications in the us-east-1 Region. The applications in the cloud need connectivity to the on-premises data center. The company needs to set up a communication channel between AWS and the data center. The solution must improve latency, minimize the possibility of performance impact from transcontinental routing over the public internet, and encrypt data in transit. Which solution will meet these requirements in the LEAST amount of time?",
    "en_opts": {
      "A": "Create an AWS Site-to-Site VPN connection with acceleration turned on. Create a virtual private gateway. Attach the Site-to-Site VPN connection to the virtual private gateway. Attach the virtual private gateway to the VPC where the applications will be deployed.",
      "B": "Create an AWS Site-to-Site VPN connection with acceleration turned on. Create a transit gateway. Attach the Site-to-Site VPN connection to the transit gateway. Create a transit gateway attachment to the VPC where the applications will be deployed.",
      "C": "Create an AWS Direct Connect connection. Create a virtual private gateway. Create a public VIF and a private VIF that use the virtual private gateway. Create an AWS Site-to-Site VPN connection over the public VIF.",
      "D": "Create an AWS Site-to-Site VPN connection with acceleration turned off. Create a transit gateway. Attach the Site-to-Site VPN connection to the transit gateway. Create a transit gateway attachment to the VPC where the applications will be deployed."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111650-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 115,
    "question": "한 회사가 기록 관리 애플리케이션을 AWS 클라우드로 이동하고 있습니다. 온프레미스 데이터 센터와 AWS 간의 모든 트래픽은 마이그레이션 중 항상 그리고 모든 전송 장치에서 암호화되어야 합니다. 애플리케이션은 단일 AWS 리전의 여러 가용 영역에 걸쳐 실행됩니다. 애플리케이션은 MACsec 지원 포트가 있는 기존 10 Gbps AWS Direct Connect 전용 연결을 사용합니다. 네트워크 엔지니어는 모든 전송 장치에서 Direct Connect 연결을 적절히 보호해야 합니다. 네트워크 엔지니어는 MACsec 비밀 키에 대한 연결 키 이름과 연결 협회 키(CKN/CAK) 쌍을 생성합니다. 요구사항을 충족하기 위해 네트워크 엔지니어가 취해야 할 추가 단계의 조합은 무엇입니까?(2개 선택)",
    "options": {
      "A": "온프레미스 라우터를 MACsec 비밀 키로 구성합니다.",
      "B": "연결의 MACsec 암호화 모드를 must_encrypt로 업데이트한 후 CKN/CAK 쌍을 연결과 연결합니다.",
      "C": "연결의 MACsec 암호화 모드를 should_encrypt로 업데이트한 후 CKN/CAK 쌍을 연결과 연결합니다.",
      "D": "CKN/CAK 쌍을 연결과 연결한 후 연결의 MACsec 암호화 모드를 must_encrypt로 업데이트합니다.",
      "E": "CKN/CAK 쌍을 연결과 연결한 후 연결의 MACsec 암호화 모드를 should_encrypt로 업데이트합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ MACsec — 링크 레벨 암호화\n▸ must_encrypt — 의무화 모드\n\n【정답 포인트】\n▸ 온프레미스 라우터 설정\n(A) — 양쪽 끝점 필요\n▸ must_encrypt 모드\n(D) — 요구사항에서 \"항상\" 암호화\n\n【오답 체크】\n(B/C) should_encrypt는 선택적\n(E) should_encrypt 부분 암호화만\n\n【시험 포인트】\n▸ MACsec 양쪽 설정 필수\n▸ 암호화 모드 선택 = 요구사항 수준",
    "en_q": "A company is moving its record-keeping application to the AWS Cloud. All traffic between the company's on-premises data center and AWS must be encrypted at all times and at every transit device during the migration. The application will reside across multiple Availability Zones in a single AWS Region. The application will use existing 10 Gbps AWS Direct Connect dedicated connections with a MACsec capable port. A network engineer must ensure that the Direct Connect connection is secured accordingly at every transit device. The network engineer creates a Connection Key Name and Connectivity Association Key (CKN/CAK) pair for the MACsec secret key. Which combination of additional steps should the network engineer take to meet the requirements? (Choose two.)",
    "en_opts": {
      "A": "Configure the on-premises router with the MACsec secret key.",
      "B": "Update the connection's MACsec encryption mode to must_encrypt. Then associate the CKN/CAK pair with the connection.",
      "C": "Update the connection's MACsec encryption mode to should encrypt. Then associate the CKN/CAK pair with the connection.",
      "D": "Associate the CKN/CAK pair with the connection. Then update the connection's MACsec encryption mode to must_encrypt.",
      "E": "Associate the CKN/CAK pair with the connection. Then update the connection's MACsec encryption mode to should_encrypt."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111658-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 116,
    "question": "네트워크 엔지니어가 AWS Direct Connect와 AWS Transit Gateway로 하이브리드 연결을 설계하고 있습니다. Transit Gateway는 Direct Connect 게이트웨이와 여러 AWS 계정의 19개 VPC에 연결되어 있습니다. 2개의 새로운 VPC가 Transit Gateway에 연결되고 있습니다. IP 주소 관리자가 첫 번째 VPC에 10.0.32.0/21을 할당하고 두 번째 VPC에 10.0.40.0/21을 할당했습니다. 접두사 목록에 최대 항목 할당량에 도달하기 전에 남은 CIDR 블록이 1개입니다. 이 요구사항을 충족하면서 온프레미스로 AWS의 경로를 광고하기 위해 네트워크 엔지니어는 어떻게 해야 합니까?",
    "options": {
      "A": "10.0.32.0/21과 10.0.40.0/21을 AWS 관리 접두사 목록 모두에 추가합니다.",
      "B": "10.0.32.0/21과 10.0.40.0/21을 허용된 접두사 목록에 추가합니다.",
      "C": "10.0.32.0/20을 AWS 관리 접두사 목록 모두에 추가합니다.",
      "D": "10.0.32.0/20을 허용된 접두사 목록에 추가합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ CIDR 병합 — 21을 20으로 통합\n▸ 접두사 할당량 — 1개 슬롯만 남음\n\n【정답 포인트】\n▸ CIDR 최적화 — 2개를 1개로 합치기\n▸ 10.0.32.0/20 범위 포함 가능\n▸ customer managed list 사용\n\n【오답 체크】\n(A) AWS 관리 목록은 수정 불가\n(B) 2개 항목으로 할당량 초과\n(C) AWS 관리 목록 아님\n\n【시험 포인트】\n▸ IP 병합 이해\n▸ 할당량 관리",
    "en_q": "A network engineer is designing hybrid connectivity with AWS Direct Connect and AWS Transit Gateway. A transit gateway is attached to a Direct Connect gateway and 19 VPCs across different AWS accounts. Two new VPCs are being attached to the transit gateway. The IP address administrator has assigned 10.0.32.0/21 to the first VPC and 10.0.40.0/21 to the second VPC. The prefix list has one CIDR block remaining before the prefix list reaches the quota for the maximum number of entries. What should the network engineer do to advertise the routes from AWS to on premises to meet these requirements?",
    "en_opts": {
      "A": "Add 10.0.32.0/21 and 10.0.40.0/21 to both AWS managed prefix lists.",
      "B": "Add 10.0.32.0/21 and 10.0.40.0/21 to the allowed prefix list.",
      "C": "Add 10.0.32.0/20 to both AWS managed prefix lists.",
      "D": "Add 10.0.32.0/20 to the allowed prefix list."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111665-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 117,
    "question": "두 회사가 합병하고 있습니다. 두 회사 모두 AWS 존재감이 크고 여러 VPC를 보유하며 AWS 네트워크 간 연결을 설계하고 있습니다. 두 회사 모두 Direct Connect 게이트웨이와 함께 AWS Direct Connect를 사용 중이며, 각 회사는 Transit Gateway와 온프레미스 리소스에 대한 여러 AWS Site-to-Site VPN 연결을 보유합니다. 새로운 솔루션은 네트워크 가시성, 처리량, 로깅 및 모니터링을 최적화해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 회사의 Transit Gateway 간 Site-to-Site VPN 연결을 구성하여 네트워크 간 도달 가능성을 설정합니다. 모든 VPC에 대해 VPC Flow Logs를 구성합니다. 흐름 로그를 Amazon CloudWatch에 게시합니다. VPC Reachability Analyzer를 사용하여 연결을 모니터링합니다.",
      "B": "각 회사의 Transit Gateway 간 Site-to-Site VPN 연결을 구성하여 네트워크 간 도달 가능성을 설정합니다. 모든 VPC에 대해 VPC Flow Logs를 구성합니다. 흐름 로그를 Amazon CloudWatch에 게시합니다. AWS Transit Gateway Network Manager를 사용하여 Transit Gateway 및 해당 연결을 모니터링합니다.",
      "C": "각 회사의 Transit Gateway 간 Transit Gateway 피어링을 구성합니다. 모든 VPC에 대해 VPC Flow Logs를 구성합니다. 흐름 로그를 Amazon CloudWatch에 게시합니다. VPC Reachability Analyzer를 사용하여 연결을 모니터링합니다.",
      "D": "각 회사의 Transit Gateway 간 Transit Gateway 피어링을 구성합니다. 모든 VPC에 대해 VPC Flow Logs를 구성합니다. 흐름 로그를 Amazon CloudWatch에 게시합니다. AWS Transit Gateway Network Manager를 사용하여 Transit Gateway, 해당 연결 및 Transit Gateway 피어링 링크를 모니터링합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ TGW 피어링 — 리전 간 직접연결\n▸ Network Manager — 완전 가시성\n\n【정답 포인트】\n▸ VPN 아님 피어링 선택\n▸ Network Manager로 피어링도 모니터링\n\n【오답 체크】\n(A/B) VPN은 제한적\n(C) Analyzer는 피어링 불가\n\n【시험 포인트】\n▸ 피어링 vs VPN\n▸ Network Manager 역할",
    "en_q": "Two companies are merging. The companies have a large AWS presence with multiple VPCs and are designing connectivity between their AWS networks. Both companies are using AWS Direct Connect with a Direct Connect gateway. Each company also has a transit gateway and multiple AWS Site-to-Site VPN connections from its transit gateway to on-premises resources. The new solution must optimize network visibility, throughput, logging, and monitoring. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure a Site-to-Site VPN connection between each company's transit gateway to establish reachability between the respective networks. Configure VPC Flow Logs for all VPCs. Publish the flow logs to Amazon CloudWatch. Use VPC Reachability Analyzer to monitor connectivity.",
      "B": "Configure a Site-to-Site VPN connection between each company's transit gateway to establish reachability between the respective networks. Configure VPC Flow Logs for all VPCs. Publish the flow logs to Amazon CloudWatch. Use AWS Transit Gateway Network Manager to monitor the transit gateways and their respective connections.",
      "C": "Configure transit gateway peering between each company's transit gateway. Configure VPC Flow Logs for all VPCs. Publish the flow logs to Amazon CloudWatch. Use VPC Reachability Analyzer to monitor connectivity.",
      "D": "Configure transit gateway peering between each company's transit gateway. Configure VPC Flow Logs for all VPCs. Publish the flow logs to Amazon CloudWatch. Use AWS Transit Gateway Network Manager to monitor the transit gateways, their respective connections, and the transit gateway peering link."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111864-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 118,
    "question": "한 회사가 us-east-1 리전의 단일 VPC를 보유합니다. us-east-2 리전에 새로운 VPC를 설정할 계획입니다. 기존 VPC는 virtual private gateway를 사용합니다. 새 VPC에서 IPv6을 지원해야 합니다. 온프레미스 리소스가 IPv6으로 VPC 리소스에 연결해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "us-east-1에서 VGW 생성",
      "B": "us-east-1/us-east-2에 TGW 생성, 각 TGW에 VPC 연결, 각 TGW에 IPv4/IPv6 VPN, TGW 피어링",
      "C": "us-east-2에서 VGW 생성",
      "D": "us-east-1 단일 TGW"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Transit Gateway(TGW) — 멀티 리전/멀티 VPC 중앙 라우팅 허브\n▸ Virtual Private Gateway(VGW) — 단일 VPC 대상 VPN 엔드포인트, IPv6 제한\n▸ IPv6 듀얼 스택 — TGW 네이티브 지원, VGW 미지원\n▸ TGW 피어링 — 리전 간 게이트웨이 연결\n\n【정답 포인트】\n▸ 다중 요구사항 분석 → 멀티 리전(us-east-1/2) + IPv6 지원 + 온프레미스 VPN\n▸ TGW 선택 이유 → IPv6 네이티브 지원, 중앙식 라우팅으로 확장성 극대화\n▸ 아키텍처 → us-east-1 TGW(기존 VGW 교체) + us-east-2 TGW + TGW 피어링 연결\n▸ 일관성 → 각 TGW에서 IPv4/IPv6 Site-to-Site VPN 설정\n\n【오답 체크】\n(A) VGW us-east-1 배포만 → IPv6 미지원 오류, us-east-2 VPC 간 연결 메커니즘 부재\n(C) VGW us-east-2만 → 기존 VPC와 신규 VPC 간 게이트웨이 피어링 불가, VGW는 VGW와 직접 피어링 미지원\n(D) 단일 TGW us-east-1 → us-east-2 VPC를 원격 리전에서 TGW에 연결할 방법 없음(TGW는 단일 리전)\n\n【시험 포인트】\n▸ IPv6 조건 출제 → TGW 우선 검토 지표\n▸ 멀티 리전 패턴 → \"각 리전 TGW\" + \"피어링\" 표준 구조 암기\n▸ VGW 한계 인식 → 네트워킹 기반 설계 실패점 파악\n▸ 마이그레이션 설계 → 기존 인프라(VGW) 교체 시나리오 중요",
    "en_q": "A company has a single VPC in the us-east-1 Region. The company is planning to set up a new VPC in the us-east-2 Region. The existing VPC has an AWS Site-to-Site VPN connection to the company's on-premises environment and uses a virtual private gateway. A network engineer needs to implement a solution to establish connectivity between the existing VPC and the new VPC. The solution also must implement support for IPv6 for the new VPC.",
    "en_opts": {
      "A": "Option A",
      "B": "Create transit gateways in us-east-1 and us-east-2",
      "C": "Option C",
      "D": "Option D"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111318-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 134,
    "question": "회사가 AWS에서 새로운 웹 애플리케이션을 개발했습니다. 애플리케이션은 us-east-1 리전의 ALB(Application Load Balancer) 뒤에 AWS Fargate의 Amazon ECS(Elastic Container Service)에서 실행됩니다. 애플리케이션은 도메인의 DNS 레코드를 호스팅하기 위해 Amazon Route 53을 사용합니다. 웹사이트에서 제공되는 콘텐츠는 대부분 자주 업데이트되지 않는 정적 이미지와 파일입니다. 웹사이트로의 대부분의 트래픽은 미국에서 발생하며, 일부는 캐나다와 유럽에서 발생합니다. 네트워크 엔지니어는 최소 비용으로 최종 사용자의 지연 시간을 줄이는 솔루션을 설계해야 합니다. 솔루션은 또한 모든 트래픽이 ALB에 도달할 때까지 전송 중에 암호화되도록 해야 합니다. 어떤 솔루션이 이 요구 사항을 충족할까요?",
    "options": {
      "A": "ALB를 구성하여 us-east-1에서 AWS Global Accelerator 가속기를 사용하도록 합니다. 보안 HTTPS 리스너를 만듭니다. Amazon Route 53에서 사용자 정의 도메인 이름에 대한 별칭 레코드를 만듭니다. 별칭 레코드를 구성하여 가속기에 할당된 DNS 이름으로 라우팅합니다.",
      "B": "ALB를 구성하여 보안 HTTPS 리스너를 사용하도록 합니다. Amazon CloudFront 배포를 만듭니다. 원본 도메인 이름을 ALB에 할당된 DNS 레코드로 설정합니다. CloudFront 배포를 구성하여 SSL 인증서를 사용합니다. 모든 동작을 HTTPS로 강제합니다. Amazon Route 53에서 사용자 정의 도메인 이름에 대한 별칭 레코드를 만듭니다. 별칭 레코드를 ALB에 할당된 DNS 이름으로 라우팅하도록 구성합니다.",
      "C": "ALB를 구성하여 보안 HTTPS 리스너를 사용하도록 합니다. Amazon CloudFront 배포를 만듭니다. 원본 도메인 이름을 ALB에 할당된 DNS 레코드로 설정합니다. CloudFront 배포를 구성하여 SSL 인증서를 사용하고 HTTP를 HTTPS로 리디렉션합니다. Amazon Route 53에서 사용자 정의 도메인 이름에 대한 별칭 레코드를 만듭니다. 별칭 레코드를 CloudFront 배포로 라우팅하도록 구성합니다.",
      "D": "ALB를 구성하여 us-east-1에서 AWS Global Accelerator 가속기를 사용하도록 합니다. 보안 HTTPS 리스너를 만듭니다. eu-west-1 리전에서 Amazon ECS on Fargate의 두 번째 애플리케이션 스택을 만듭니다. 다른 보안 HTTPS 리스너를 만듭니다. Amazon Route 53에서 사용자 정의 도메인 이름에 대한 별칭 레코드를 만듭니다. 별칭 레코드를 구성하여 지연 시간 기반 라우팅 정책을 사용하고 가속기에 할당된 DNS 이름으로 라우팅합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudFront — 엣지 로케이션에서 캐싱하여 지연 시간 감소\n▸ SSL/TLS — 전송 중 암호화\n▸ 정적 콘텐츠 — 이미지, 파일 최적화\n\n【정답 포인트】\n▸ 정적 콘텐츠 → CloudFront 캐싱 최적\n▸ 전 지역 사용자 → CloudFront 엣지 로케이션 분산\n▸ 암호화 → HTTPS + HTTP→HTTPS 리디렉션\n▸ Route 53 별칭 → CloudFront 배포로 직접 라우팅\n\n【오답 체크】\n(A) Global Accelerator는 비용이 높고 동적 콘텐츠용(UDP, 게임 등)\n(B) Route 53에서 ALB로 직접 라우팅하면 캐싱 이점 상실\n(D) 두 리전 배포는 불필요(정적 콘텐츠), 비용 증가\n\n【시험 포인트】\n정적 콘텐츠 + 다중 지역 사용자 → CloudFront 선택. Global Accelerator는 게임/IoT/실시간 애플리케이션용. 지연 시간 + 비용 최소화는 CDN(CloudFront)이 답.",
    "en_q": "A company has developed a new web application on AWS. The application runs on Amazon Elastic Container Service (Amazon ECS) on AWS Fargate behind an Application Load Balancer (ALB) in the us-east-1 Region. The application uses Amazon Route 53 to host the DNS records for the domain. The content that is served from the website is mostly static images and files that are not updated frequently. Most of the traffic to the website from end users will originate from the United States. Some traffic will originate from Canada and Europe. A network engineer needs to design a solution that will reduce latency for end users at the lowest cost. The solution also must ensure that all traffic is encrypted in transit until the traffic reaches the ALB. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure the ALB to use an AWS Global Accelerator accelerator in us-east-1. Create a secure HTTPS listener. Create an alias record in Amazon Route 53 for the custom domain name. Configure the alias record to route to the DNS name that is assigned to the accelerator for the ALB.",
      "B": "Configure the ALB to use a secure HTTPS listener. Create an Amazon CloudFront distribution. Set the origin domain name to point to the DNS record that is assigned to the ALB. Configure the CloudFront distribution to use an SSL certificate. Set all behaviors to force HTTPS. Create an alias record in Amazon Route 53 for the custom domain name. Configure the alias record to route to the DNS name that is assigned to the ALB.",
      "C": "Configure the ALB to use a secure HTTPS listener. Create an Amazon CloudFront distribution. Set the origin domain name to point to the DNS record that is assigned to the ALB. Configure the CloudFront distribution to use an SSL certificate and redirect HTTP to HTTPS. Create an alias record in Amazon Route 53 for the custom domain name. Configure the alias record to route to the CloudFront distribution.",
      "D": "Configure the ALB to use an AWS Global Accelerator accelerator in us-east-1. Create a secure HTTPS listener. Create a second application stack on Amazon ECS on Fargate in the eu-west-1 Region. Create another secure HTTPS listener. Create an alias record in Amazon Route 53 for the custom domain name. Configure the alias record to use a latency-based routing policy to route to the DNS name that is assigned to the accelerator for the ALBs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/112426-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 135,
    "question": "회사가 VPC 내 ALB(Application Load Balancer) 뒤에 내부 웹 사이트를 배포합니다. VPC의 CIDR 블록은 172.31.0.0/16입니다. 회사가 Amazon Route 53에서 웹 사이트용 도메인 example.com에 대한 프라이빗 호스팅 존을 생성합니다. 회사가 사무실 네트워크와 VPC 사이에 AWS Site-to-Site VPN 연결을 설정합니다. 네트워크 엔지니어는 직원들이 사무실 네트워크에서 프라이빗 도메인 URL(https://example.com)에 액세스하여 내부 웹 페이지를 방문할 수 있도록 DNS 솔루션을 설정해야 합니다. 이 요구 사항을 충족하기 위한 단계의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Route 53 프라이빗 호스팅 존에서 ALB를 가리키는 별칭 레코드를 만듭니다.",
      "B": "Route 53 프라이빗 호스팅 존에서 ALB 내부 도메인을 가리키는 CNAME 레코드를 만듭니다.",
      "C": "Route 53 Resolver 인바운드 엔드포인트를 만듭니다. 사무실 DNS 서버에서 Route 53 Resolver 인바운드 엔드포인트로 DNS 쿼리를 전달하도록 조건부 포워더를 구성합니다.",
      "D": "Route 53 Resolver 아웃바운드 엔드포인트를 만듭니다. 사무실 DNS 서버에서 Route 53 Resolver 아웃바운드 엔드포인트로 DNS 쿼리를 전달하도록 조건부 포워더를 구성합니다.",
      "E": "사무실 DNS 서버에서 프라이빗 도메인의 조건부 포워더를 VPC DNS 172.31.0.2로 구성합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ 프라이빗 호스팅 존 — VPC 내부 DNS\n▸ Route 53 Resolver 인바운드 엔드포인트 — 온프레미스→AWS DNS 해석\n▸ 조건부 포워더 — DNS 쿼리 선택적 전달\n\n【정답 포인트】\n▸ A(별칭 레코드) — Route 53에서 ALB로 매핑\n▸ C(인바운드 엔드포인트) — 온프레미스에서 VPC DNS 접근\n▸ 조합: Route 53 레코드 + Resolver 인바운드로 완전 해결\n\n【오답 체크】\n(B) CNAME은 프라이빗 호스팅 존의 루트에 사용 불가\n(D) 아웃바운드는 AWS→온프레미스(반대 방향)\n(E) 172.31.0.2 직접 포워딩은 보안, 확장성 부족\n\n【시험 포인트】\nVPN + 프라이빗 DNS = Resolver 인바운드. 온프레미스에서 AWS 프라이빗 도메인 해석은 인바운드 엔드포인트 필수.",
    "en_q": "A company deploys an internal website behind an Application Load Balancer (ALB) in a VPC. The VPC has a CIDR block of 172.31.0.0/16. The company creates a private hosted zone for the domain example.com for the website in Amazon Route 53. The company establishes an AWS Site-to-Site VPN connection between its office network and the VPC. A network engineer needs to set up a DNS solution so that employees can visit the internal webpage by accessing a private domain URL (https://example.com) from the office network. Which combination of steps will meet this requirement? (Choose two.)",
    "en_opts": {
      "A": "Create an alias record that points to the ALB in the Route 53 private hosted zone.",
      "B": "Create a CNAME record that points to the ALB internal domain in the Route 53 private hosted zone.",
      "C": "Create a Route 53 Resolver inbound endpoint. On the office DNS server, configure a conditional forwarder to forward the DNS queries to the Route 53 Resolver inbound endpoint.",
      "D": "Create a Route 53 Resolver outbound endpoint. On the office DNS server, configure a conditional forwarder to forward the DNS queries to the Route 53 Resolver outbound endpoint.",
      "E": "On the office DNS server, configure a conditional forwarder for the private domain to the VPC DNS at 172.31.0.2."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111809-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 136,
    "question": "회사가 us-east-1 리전과 ap-southeast-2 리전의 엣지 로케이션과 함께 AWS Cloud WAN을 배포합니다. 개별 AWS Cloud WAN 세그먼트는 각 엣지 로케이션에서 개발 환경, 프로덕션 환경 및 공유 서비스 환경을 위해 구성됩니다. 많은 새로운 VPC가 배포되며 AWS Cloud WAN 코어 네트워크의 연결로 구성됩니다. 회사의 네트워크 팀은 VPC 연결이 올바른 세그먼트를 위해 구성되도록 보장하려고 합니다. 네트워크 팀은 Environment 키와 해당 환경 세그먼트 이름의 값을 사용하여 VPC 연결에 태그를 지정합니다. us-east-1의 프로덕션 환경 세그먼트는 연결 요청에 대한 수락이 필요합니다. 다른 모든 연결 요청은 수락이 필요하지 않습니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "프로덕션 세그먼트로의 연결 수락이 필요한 규칙 번호 100을 만듭니다. 규칙에서 조건 논리를 \"or\" 값으로 설정합니다. tag:Environment 값이 Production이거나 Region 값이 us-east-1인 조건을 포함합니다. tag:Environment 값을 각 세그먼트로 매핑하는 수락이 필요하지 않은 규칙 번호 200을 만듭니다.",
      "B": "프로덕션 세그먼트로의 연결 수락이 필요한 규칙 번호 100을 만듭니다. 규칙에서 조건 논리를 \"and\" 값으로 설정합니다. tag:Environment 값이 Production이고 Region 값이 us-east-1인 조건을 포함합니다. tag:Environment 값을 각 세그먼트로 매핑하는 수락이 필요하지 않은 규칙 번호 200을 만듭니다.",
      "C": "tag:Environment 값을 각 세그먼트로 매핑하는 수락이 필요하지 않은 규칙 번호 100을 만듭니다. 프로덕션 세그먼트로의 연결 수락이 필요한 규칙 번호 200을 만듭니다. 규칙에서 조건 논리를 \"and\" 값으로 설정합니다. tag:Environment 값이 Production이고 Region 값이 us-east-1인 조건을 포함합니다.",
      "D": "tag:Environment 값을 각 세그먼트로 매핑하는 수락이 필요하지 않은 규칙 번호 100을 만듭니다. 프로덕션 세그먼트로의 연결 수락이 필요한 규칙 번호 200을 만듭니다. 규칙에서 조건 논리를 \"or\" 값으로 설정합니다. tag:Environment 값이 Production이거나 Region 값이 us-east-1인 조건을 포함합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Cloud WAN 코어 네트워크 — 엣지 기반 연결\n▸ 세그먼트 — 환경별 격리(개발, 프로덕션, 공유)\n▸ 규칙 번호 — 낮을수록 우선 순위 높음\n\n【정답 포인트】\n▸ 규칙 100(높은 우선순위): Production AND us-east-1만 수락 요구\n▸ 규칙 200: 다른 모든 태그는 자동 매핑\n▸ AND 논리 — 두 조건 모두 만족할 때만 수락\n▸ OR은 부정확(다른 리전 프로덕션도 수락 요구)\n\n【오답 체크】\n(A) OR 논리 = us-east-1의 모든 환경이 수락 요구\n(C) 규칙 200이 우선(낮은 번호) → 수락 요구 규칙 무시\n(D) 규칙 번호 역순 + OR = 조건 불일치\n\n【시험 포인트】\n규칙 번호 우선순위 이해 필수. us-east-1의 Production만 → AND 조건 필수.",
    "en_q": "A company is deploying AWS Cloud WAN with edge locations in the us-east-1 Region and the ap-southeast-2 Region. Individual AWS Cloud WAN segments are configured for the development environment, the production environment, and the shared services environment at each edge location. Many new VPCs will be deployed for the environments and will be configured as attachments to the AWS Cloud WAN core network. The company's network team wants to ensure that VPC attachments are configured for the correct segment. The network team will tag the VPC attachments by using the Environment key with a value of the corresponding environment segment name. The segment for the production environment in us-east-1 must require acceptance for attachment requests. All other attachment requests must not require acceptance. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a rule with a number of 100 that requires acceptance for attachments to the production segment. In the rule, set the condition logic to the \"or\" value. Include conditions that require a tag:Environment value of Production or a Region value of us-east-1. Create a rule with a number of 200 that does not require acceptance to map any tag:Environment values to their respective segments.",
      "B": "Create a rule with a number of 100 that requires acceptance for attachments to the production segment. In the rule, set the condition logic to the \"and\" value. Include conditions that require a tag:Environment value of Production and a Region value of us-east-1. Create a rule with a number of 200 that does not require acceptance to map any tag.Environment values to their respective segments.",
      "C": "Create a rule with a number of 100 that does not require acceptance to map any tag:Environment values to their respective segments. Create a rule with a number of 200 that requires acceptance for attachments to the production segment. In the rule, set the condition logic to the \"and\" value. Include conditions that require a tag:Environment value of Production and a Region value of us-east-1.",
      "D": "Create a rule with a number of 100 that does not require acceptance to map any tag:Environment values to their respective segments. Create a rule with a number of 200 that requires acceptance for attachments to the production segment. In the rule, set the condition logic to the \"or\" value. Include conditions that require a tag:Environment value of Production or a Region value of us-east-1."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/113992-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 137,
    "question": "회사가 데이터 센터에서 AWS로 애플리케이션을 마이그레이션합니다. 많은 애플리케이션이 회사의 온프레미스 메인프레임과 데이터를 교환해야 합니다. 회사는 피크 트래픽 요구 사항을 충족하기 위해 4Gbps 전송 속도를 달성해야 합니다. 네트워크 엔지니어는 높은 가용성을 극대화하는 복원력 높은 솔루션을 설계해야 합니다. 솔루션은 회선 또는 라우터의 손실을 견딜 수 있어야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "4개의 10Gbps AWS Direct Connect 연결을 2개의 로케이션에 걸쳐 균등하게 분배하여 주문합니다. 각 Direct Connect 로케이션의 한 연결을 회사 로케이션의 라우터에서 종료합니다. 각 Direct Connect 로케이션의 다른 연결을 회사 로케이션의 다른 라우터에서 종료합니다.",
      "B": "2개의 10Gbps AWS Direct Connect 연결을 2개의 로케이션에 걸쳐 균등하게 분배하여 주문합니다. 각 Direct Connect 로케이션의 연결을 회사 로케이션의 다른 라우터에서 종료합니다.",
      "C": "4개의 1Gbps AWS Direct Connect 연결을 2개의 로케이션에 걸쳐 균등하게 분배하여 주문합니다. 각 Direct Connect 로케이션의 한 연결을 회사 로케이션의 라우터에서 종료합니다. 각 Direct Connect 로케이션의 다른 연결을 회사 로케이션의 다른 라우터에서 종료합니다.",
      "D": "2개의 1Gbps AWS Direct Connect 연결을 2개의 로케이션에 걸쳐 균등하게 분배하여 주문합니다. 각 Direct Connect 로케이션의 연결을 회사 로케이션의 다른 라우터에서 종료합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Direct Connect — 전용 네트워크 연결\n▸ 복원력 — 회선/라우터 장애 대응\n▸ 4Gbps 요구량 — 충분한 대역폭 필요\n\n【정답 포인트】\n▸ 4개 10Gbps = 40Gbps 총 대역폭(4Gbps 요구 여유)\n▸ 2개 로케이션 분산 = 위치 다양성\n▸ 2개 라우터 = 라우터 장애 보호\n▸ 결과: 1개 회선 손실 → 다른 회선 이용, 1개 라우터 다운 → 다른 라우터 이용\n\n【오답 체크】\n(B) 2개 10Gbps만 = 20Gbps(여유 부족), 한 회선 손실 시 10Gbps만 남음\n(C) 4Gbps = 1개 회선으로 충분(복원력 약함)\n(D) 2Gbps 총 < 4Gbps 요구 불가\n\n【시험 포인트】\n복원력(회선+라우터) + 대역폭 → 다중 대용량 연결. N+1 이상의 여유 설계 필수.",
    "en_q": "A company is migrating applications from a data center to AWS. Many of the applications will need to exchange data with the company's on-premises mainframe. The company needs to achieve 4 Gbps transfer speeds to meet peak traffic demands. A network engineer must design a highly available solution that maximizes resiliency. The solution must be able to withstand the loss of circuits or routers. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Order four 10 Gbps AWS Direct Connect connections that are evenly spread over two locations. Terminate one connection from each Direct Connect location to a router at the company location. Terminate the other connection from each Direct Connect location to a different router at the company location.",
      "B": "Order two 10 Gbps AWS Direct Connect connections that are evenly spread over two locations. Terminate the connection from each Direct Connect location to a different router at the company location.",
      "C": "Order four 1 Gbps AWS Direct Connect connections that are evenly spread over two locations. Terminate one connection from each Direct Connect location to a router at the company location. Terminate the other connection from each Direct Connect location to a different router at the company location.",
      "D": "Order two 1 Gbps AWS Direct Connect connections that are evenly spread over two locations. Terminate the connection from each Direct Connect location to a different router at the company location."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111691-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 138,
    "question": "회사가 프로덕션 VPC의 Auto Scaling 그룹에서 실행되는 10개의 웹 서버 Amazon EC2 인스턴스를 보유합니다. 회사가 온프레미스 데이터 센터에서 실행되는 10개의 다른 웹 서버를 보유합니다. 회사가 온프레미스 데이터 센터와 프로덕션 VPC 사이에 10Gbps AWS Direct Connect 연결을 보유합니다. 회사는 수천 명의 외부 사용자로부터 HTTPS 트래픽을 수신하는 로드 밸런싱 솔루션을 구현해야 합니다. 솔루션은 AWS의 웹 서버와 온프레미스 데이터 센터의 웹 서버 전체에 트래픽을 분산해야 합니다. 웹 서버 위치에 관계없이 HTTPS 요청은 전체 세션 동안 동일한 웹 서버로 이동해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "프로덕션 VPC에서 NLB(Network Load Balancer)를 만듭니다. 대상 그룹을 만듭니다. 대상 유형으로 ip를 지정합니다. EC2 인스턴스 및 온프레미스 서버를 대상 그룹에 등록합니다. NLB에서 연결 드레이닝을 활성화합니다.",
      "B": "프로덕션 VPC에서 ALB(Application Load Balancer)를 만듭니다. 대상 그룹을 만듭니다. 대상 유형으로 ip를 지정합니다. EC2 인스턴스 및 온프레미스 서버를 대상 그룹에 등록합니다. ALB에서 애플리케이션 기반 세션 친화성(스티키 세션)을 활성화합니다.",
      "C": "프로덕션 VPC에서 NLB(Network Load Balancer)를 만듭니다. 대상 그룹을 만듭니다. 대상 유형으로 instance를 지정합니다. EC2 인스턴스 및 온프레미스 서버를 대상 그룹에 등록합니다. NLB에서 세션 친화성(스티키 세션)을 활성화합니다.",
      "D": "프로덕션 VPC에서 ALB(Application Load Balancer)를 만듭니다. 대상 그룹을 만듭니다. 대상 유형으로 instance를 지정합니다. EC2 인스턴스 및 온프레미스 서버를 대상 그룹에 등록합니다. ALB에서 애플리케이션 기반 세션 친화성(스티키 세션)을 활성화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ ALB — 레이어 7(애플리케이션), 스티키 세션 지원\n▸ NLB — 레이어 4(전송), 극초고속, IP 타입 미지원 온프레미스\n▸ 세션 친화성 — 같은 클라이언트→동일 서버\n\n【정답 포인트】\n▸ HTTPS(애플리케이션) → ALB 필수\n▸ IP 타입 → 온프레미스 IP 등록 가능\n▸ 스티키 세션 → 동일 서버 보장\n▸ ALB + IP 타입 + 애플리케이션 세션 친화성 = 조건 완벽\n\n【오답 체크】\n(A) NLB + ip + 연결 드레이닝 = 세션 친화성 없음\n(C) NLB + instance = 온프레미스 서버 등록 불가(IP만 가능)\n(D) ALB + instance = 온프레미스 서버 등록 불가\n\n【시험 포인트】\nALB(HTTPS) + IP 대상 타입 = 온프레미스 서버 포함. Instance 타입은 VPC 인스턴스만.",
    "en_q": "A company has 10 web server Amazon EC2 instances that run in an Auto Scaling group in a production VPC. The company has 10 other web servers that run in an on-premises data center. The company has a 10 Gbps AWS Direct Connect connection between the on-premises data center and the production VPC. The company needs to implement a load balancing solution that receives HTTPS traffic from thousands of external users. The solution must distribute the traffic across the web servers on AWS and the web servers in the on-premises data center. Regardless of the location of the web servers, HTTPS requests must go to the same web server throughout the entire session. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a Network Load Balancer (NLB) in the production VPC. Create a target group. Specify ip as the target type. Register the EC2 instances and the on-premises servers with the target group Enable connection draining on the NLB",
      "B": "Create an Application Load Balancer (ALB) in the production VPC. Create a target group Specify ip as the target type. Register the EC2 instances and the on-premises servers with the target group. Enable application-based session affinity (sticky sessions) on the ALB.",
      "C": "Create a Network Load Balancer (NLB) in the production VPCreate a target group. Specify instance as the target type. Register the EC2 instances and the on-premises servers with the target group. Enable session affinity (sticky sessions) on the NLB.",
      "D": "Create an Application Load Balancer (ALB) in the production VPC. Create a target group. Specify instance as the target type Register the EC2 instances and the on-premises servers with the target group Enable application-based session affinity (sticky sessions) on the ALB."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111649-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 139,
    "question": "회사가 트랜짓 게이트웨이로 연결된 여러 VPC를 포함하는 AWS 환경을 보유합니다. 회사는 온프레미스 네트워크와 AWS 환경 간의 연결을 설정하기 위해 AWS Site-to-Site VPN을 사용하기로 결정했습니다. 회사는 온프레미스 네트워크를 위한 정적 공인 IP 주소를 보유하지 않습니다. 네트워크 엔지니어는 AWS 측에서 VPN 연결을 시작하는 솔루션을 구현해야 합니다. AWS 환경에서 온프레미스 네트워크로의 트래픽 경우 해당 솔루션을 구현해야 합니다. 트랜짓 게이트웨이와 온프레미스 네트워크 간 VPN 연결을 설정하기 위해 네트워크 엔지니어가 취해야 할 단계의 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "Site-to-Site VPN 터널 옵션을 구성하여 IKEv1(Internet Key Exchange 버전 1)을 사용합니다.",
      "B": "Site-to-Site VPN 터널 옵션을 구성하여 IKEv2(Internet Key Exchange 버전 2)를 사용합니다.",
      "C": "AWS 프라이빗 인증 기관(CA)에서 프라이빗 인증서 기관(CA)을 사용하여 인증서를 만듭니다.",
      "D": "AWS 프라이빗 인증 기관(CA)에서 공인 인증 기관(CA)을 사용하여 인증서를 만듭니다.",
      "E": "고객 게이트웨이를 만듭니다. 고객 게이트웨이 장치의 외부 인터페이스의 현재 동적 IP 주소를 지정합니다.",
      "F": "고객 게이트웨이 장치의 IP 주소를 지정하지 않고 고객 게이트웨이를 만듭니다."
    },
    "answer": "BCF",
    "explanation": "【핵심 용어】\n▸ 동적 IP — 변하는 공인 IP(IP 사전 지정 불가)\n▸ IKEv2 — 최신, 모바일 친화적\n▸ 프라이빗 CA — 자체 관리 인증서\n\n【정답 포인트】\n▸ B(IKEv2) — 동적 환경에서 안정적\n▸ C(프라이빗 CA) — 조직 내부 인증서 관리\n▸ F(IP 미지정) — 동적 IP는 사후 등록, AWS에서 연결 시작 가능\n\n【오답 체크】\n(A) IKEv1 — 구형, 덜 유연\n(D) 공인 CA — 온프레미스 프라이빗 VPN에 부적절\n(E) 동적 IP를 정적으로 지정 = 모순, 변경되면 실패\n\n【시험 포인트】\n동적 IP + AWS 측 시작 = IKEv2 + IP 미지정 + 프라이빗 CA. 온프레미스에서 AWS로 초기화 가능.",
    "en_q": "A company has an AWS environment that includes multiple VPCs that are connected by a transit gateway. The company has decided to use AWS Site-to-Site VPN to establish connectivity between its on-premises network and its AWS environment. The company does not have a static public IP address for its on-premises network. A network engineer must implement a solution to initiate the VPN connection on the AWS side of the connection for traffic from the AWS environment to the on-premises network. Which combination of steps should the network engineer take to establish VPN connectivity between the transit gateway and the on-premises network? (Choose three.)",
    "en_opts": {
      "A": "Configure the Site-to-Site VPN tunnel options to use Internet Key Exchange version 1 (IKEv1).",
      "B": "Configure the Site-to-Site VPN tunnel options to use Internet Key Exchange version 2 (IKEv2).",
      "C": "Use a private certificate authority (CA) from AWS Private Certificate Authority to create a certificate.",
      "D": "Use a public certificate authority (CA) from AWS Private Certificate Authority to create a certificate.",
      "E": "Create a customer gateway. Specify the current dynamic IP address of the customer gateway device's external interface.",
      "F": "Create a customer gateway without specifying the IP address of the customer gateway device."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111688-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 140,
    "question": "회사의 AWS 환경은 2개의 VPC를 보유합니다. VPC A의 CIDR 블록은 192.168.0.0/16입니다. VPC B의 CIDR 블록은 10.0.0.0/16입니다. 각 VPC는 별도의 AWS 리전에 배포됩니다. 회사는 회사 사무실 외부에서 일하는 원격 사용자를 보유합니다. 이 사용자들은 VPC에서 실행 중인 애플리케이션에 연결해야 합니다. VPC 간 인터넷을 통한 트래픽은 암호화되어야 합니다. 네트워크 엔지니어는 원격 사용자와 VPC 간 연결을 설정해야 합니다. 이 요구 사항을 충족하면서 관리 오버헤드가 최소인 단계의 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "VPC A와 VPC B 사이의 AWS Site-to-Site VPN 연결을 설정합니다.",
      "B": "VPC A와 VPC B 사이의 VPC 피어링 연결을 설정합니다.",
      "C": "VPC A 및 VPC B에서 AWS Client VPN 엔드포인트를 만듭니다. VPC A 및 VPC B에 액세스 권한을 부여하는 권한 부여 규칙을 추가합니다.",
      "D": "VPC A에서 AWS Client VPN 엔드포인트를 만듭니다. VPC A 및 VPC B에 액세스 권한을 부여하는 권한 부여 규칙을 추가합니다.",
      "E": "AWS Client VPN 엔드포인트의 라우트 테이블에 VPC B로의 트래픽을 지정하는 경로를 추가합니다.",
      "F": "AWS Client VPN 엔드포인트의 라우트 테이블에 VPC A로의 트래픽을 지정하는 경로를 추가합니다."
    },
    "answer": "BDE",
    "explanation": "【핵심 용어】\n▸ Client VPN — 원격 사용자 VPN 클라이언트\n▸ VPC 피어링 — VPC 간 연결\n▸ 라우팅 — Client VPN 엔드포인트 경로 설정\n\n【정답 포인트】\n▸ B(VPC 피어링) — VPC A↔VPC B 연결(암호화)\n▸ D(Client VPN 단일) — 1개 엔드포인트로 관리(오버헤드 최소)\n▸ E(라우트 추가) — VPC B로의 트래픽 경로 설정\n▸ 결과: 원격→VPC A→(피어링)→VPC B 모두 접근\n\n【오답 체크】\n(A) Site-to-Site VPN = 조직→AWS(원격 사용자용 아님)\n(C) 2개 엔드포인트 = 관리 복잡도 증가\n(F) VPC A 경로는 불필요(같은 엔드포인트 VPC)\n\n【시험 포인트】\n최소 오버헤드 = Client VPN 1개 + 피어링. VPC A가 허브 역할.",
    "en_q": "A company's AWS environment has two VPCs. VPC A has a CIDR block of 192.168.0.0/16. VPC B has a CIDR block of 10.0.0.0/16. Each VPC is deployed in a separate AWS Region. The company has remote users who work outside the company's offices. These users need to connect to an application that is running in the VPCs. Traffic to and from the VPCs over the internet must be encrypted. A network engineer must set up connectivity between the remote users and the VPCs. Which combination of steps should the network engineer take to meet these requirements with the LEAST management overhead? (Choose three.)",
    "en_opts": {
      "A": "Establish an AWS Site-to-Site VPN connection between VPC A and VPC B.",
      "B": "Establish a VPC peering connection between VPC A and VPC B.",
      "C": "Create an AWS Client VPN endpoint in VPC A and VPC B Add an authorization rule to grant access to VPC A and VPC B.",
      "D": "Create an AWS Client VPN endpoint in VPC A Add an authorization rule to grant access to VPC A and VPC B.",
      "E": "Add a route to the AWS Client VPN endpoint's route table to direct traffic to VPC B.",
      "F": "Add a route to the AWS Client VPN endpoint's route table to direct traffic to VPC A."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111877-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 141,
    "question": "회사가 Amazon Route 53을 사용하여 AWS 계정에 공인 도메인 example.com을 등록합니다. 중앙 서비스 그룹이 계정을 관리합니다. 회사는 다른 AWS 계정에서 하위 도메인 test.example.com을 만들어 계정에서 호스팅되는 Amazon EC2 인스턴스에 대한 이름 서비스를 제공하려고 합니다. 회사는 상위 도메인을 하위 도메인 계정으로 마이그레이션하지 않으려고 합니다. 네트워크 엔지니어는 두 번째 계정에서 하위 도메인에 대한 새로운 Route 53 호스팅 존을 만듭니다. 이 작업을 완료하기 위해 네트워크 엔지니어가 취해야 할 단계의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "새로운 하위 도메인의 레코드를 새로운 Route 53 호스팅 존에 추가합니다.",
      "B": "상위 도메인의 DNS 서비스를 업데이트합니다. 하위 도메인에 대해 네임서버(NS) 레코드를 추가합니다.",
      "C": "하위 도메인의 DNS 서비스를 업데이트합니다. 상위 도메인에 대해 네임서버(NS) 레코드를 추가합니다.",
      "D": "상위 도메인에서 두 번째 계정의 호스팅 존에 대해 하위 도메인을 가리키는 별칭 레코드를 만듭니다.",
      "E": "상위 도메인에 하위 도메인에 대해 권한 시작(SOA) 레코드를 추가합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ 네임서버(NS) 레코드 — 도메인 권한 위임\n▸ 호스팅 존 — DNS 레코드 관리 영역\n▸ 별도 계정 — 독립적 호스팅 존 운영\n\n【정답 포인트】\n▸ A(하위 호스팅 존 레코드) — test.example.com 호스트 정보\n▸ B(상위 NS 레코드) — example.com 존에서 test.example.com을 2번째 계정 호스팅 존으로 위임\n▸ 결과: example.com 쿼리→상위 NS 지시→test.example.com 쿼리→하위 호스팅 존\n\n【오답 체크】\n(C) 반대 방향(하위에 상위 NS) = 순환 참조\n(D) 별칭 레코드 = 다른 계정 호스팅 존 미지원\n(E) SOA = NS로 충분, 추가 불필요\n\n【시험 포인트】\nNS 레코드 위임 = 다중 계정 도메인 관리의 핵심. 상위→하위 방향 위임.",
    "en_q": "A company uses Amazon Route 53 to register a public domain, example.com, in an AWS account. A central services group manages the account. The company wants to create a subdomain, test.example.com, in another AWS account to offer name services for Amazon EC2 instances that are hosted in the account. The company does not want to migrate the parent domain to the subdomain account. A network engineer creates a new Route 53 hosted zone for the subdomain in the second account. Which combination of steps must the network engineer take to complete the task? (Choose two.)",
    "en_opts": {
      "A": "Add records for the hosts of the new subdomain to the new Route 53 hosted zone.",
      "B": "Update the DNS service for the parent domain by adding name server (NS) records for the subdomain.",
      "C": "Update the DNS service for the subdomain by adding name server (NS) records for the parent domain.",
      "D": "Create an alias record from the parent domain that points to the hosted zone for the subdomain in the second account.",
      "E": "Add a start of authority (SOA) record in the parent domain for the subdomain."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111598-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 142,
    "question": "IoT 회사가 미국과 남아시아에 배포된 수천 개의 센서에서 데이터를 수집합니다. 센서는 UDP에 구축된 독점 통신 프로토콜을 사용하여 데이터를 Auto Scaling 그룹의 Amazon EC2 인스턴스 플릿으로 보냅니다. 인스턴스, Auto Scaling 그룹 및 NLB(Network Load Balancer)는 us-west-2 리전에 배포됩니다. 가끔 남아시아 센서의 데이터가 인터넷 전송 중에 손실되어 EC2 인스턴스에 도달하지 않습니다. 어떤 솔루션이 이 문제를 해결할까요? (2개 선택)",
    "options": {
      "A": "기존 NLB와 함께 AWS Global Accelerator를 사용합니다.",
      "B": "Amazon CloudFront 배포를 만듭니다. 기존 NLB를 원본으로 지정합니다.",
      "C": "ap-south-1 리전에서 EC2 인스턴스 및 NLB의 두 번째 배포를 만듭니다. Amazon Route 53 지연 시간 라우팅 정책을 사용하여 최소 지연 시간을 제공하는 리전으로 해석합니다.",
      "D": "ap-south-1 리전에서 EC2 인스턴스 및 NLB의 두 번째 배포를 만듭니다. Amazon Route 53 페일오버 라우팅 정책을 사용하여 패킷이 손실되는 경우 대체 리전으로 해석합니다.",
      "E": "최신 ENA(Elastic Network Adapter) 드라이버를 사용하여 EC2 인스턴스에서 향상된 네트워킹을 켭니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ UDP — 비연결형, 신뢰성 낮음, 속도 우선\n▸ Global Accelerator — 엣지 기반 라우팅, 패킷 손실 감소\n▸ 지역별 배포 — 지연 시간 감소\n\n【정답 포인트】\n▸ A(Global Accelerator) — AWS 엣지→백본→리전(공인 인터넷 우회, 신뢰성↑)\n▸ C(지역별 배포+지연 시간) — 남아시아 센서→ap-south-1(가까움)\n▸ 조합: 장거리 손실(GA) + 로컬 배포(지연) = 완벽\n\n【오답 체크】\n(B) CloudFront = HTTP/HTTPS(UDP 미지원)\n(D) 페일오버 = 리전 교체(손실 감지 느림)\n(E) ENA = 드라이버 성능(패킷 손실 근본해결 아님)\n\n【시험 포인트】\nUDP 손실 → Global Accelerator + 지역별 배포. 거리 + 신뢰성 동시 해결.",
    "en_q": "An IoT company collects data from thousands of sensors that are deployed in the Unites States and South Asia. The sensors use a proprietary communication protocol that is built on UDP to send the data to a fleet of Amazon EC2 instances. The instances are in an Auto Scaling group and run behind a Network Load Balancer (NLB). The instances, Auto Scaling group, and NLB are deployed in the us-west-2 Region. Occasionally, the data from the sensors in South Asia gets lost in transit over the internet and does not reach the EC2 instances. Which solutions will resolve this issue? (Choose two.)",
    "en_opts": {
      "A": "Use AWS Global Accelerator with the existing NLB.",
      "B": "Create an Amazon CloudFront distribution. Specify the existing NLB as the origin.",
      "C": "Create a second deployment of the EC2 instances and the NLB in the ap-south-1 Region. Use an Amazon Route 53 latency routing policy to resolve to the Region that provides the least latency.",
      "D": "Create a second deployment of the EC2 instances and the NLB in the ap-south-1 Region. Use an Amazon Route 53 failover routing policy to resolve to an alternate Region in case packets are dropped.",
      "E": "Turn on enhanced networking on the EC2 instances by using the most recent Elastic Network Adapter (ENA) drivers."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111597-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 143,
    "question": "회사가 EC2 인스턴스의 플릿에서 실행되는 애플리케이션을 보유합니다. 새로운 회사 규정에 따라 EC2 인스턴스로 및 에서의 모든 네트워크 트래픽은 콘텐츠 검사를 위해 중앙화된 제3자 EC2 어플라이언스로 전송되어야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 EC2 네트워크 인터페이스에 VPC 플로우 로그를 구성합니다. 플로우 로그를 Amazon S3 버킷에 게시합니다. 제3자 EC2 어플라이언스를 만들어 S3 버킷에서 플로우 로그를 획득합니다. 어플라이언스에 로그인하여 네트워크 콘텐츠를 모니터링합니다.",
      "B": "Auto Scaling 그룹의 제3자 EC2 어플라이언스를 만들고 NLB(Network Load Balancer)로 전면합니다. 미러 세션을 구성합니다. NLB를 미러 대상으로 지정합니다. 인바운드 및 아웃바운드 트래픽을 캡처하도록 미러 필터를 지정합니다. 미러 세션의 소스로 애플리케이션을 호스팅하는 모든 인스턴스의 EC2 탄력적 네트워크 인터페이스를 지정합니다.",
      "C": "미러 세션을 구성합니다. Amazon Kinesis Data Firehose 배달 스트림을 미러 대상으로 지정합니다. 인바운드 및 아웃바운드 트래픽을 캡처하도록 미러 필터를 지정합니다. 미러 세션의 소스로 애플리케이션을 호스팅하는 모든 인스턴스의 EC2 탄력적 네트워크 인터페이스를 지정합니다. 제3자 EC2 어플라이언스를 만듭니다. Kinesis Data Firehose 배달 스트림을 통해 모든 트래픽을 어플라이언스로 전송하여 콘텐츠 검사를 수행합니다.",
      "D": "각 EC2 네트워크 인터페이스에 VPC 플로우 로그를 구성합니다. 로그를 Amazon CloudWatch로 전송합니다. 제3자 EC2 어플라이언스를 만듭니다. CloudWatch 필터를 구성하여 플로우 로그를 Amazon Kinesis Data Firehose로 보내어 어플라이언스에 로드합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ VPC Traffic Mirroring — 실시간 트래픽 복제\n▸ 콘텐츠 검사 — 패킷 분석\n▸ 미러 필터 — 트래픽 선택\n\n【정답 포인트】\n▸ VPC Traffic Mirroring = 실시간 트래픽 복제(로그 아님)\n▸ NLB 미러 대상 = 어플라이언스로 자동 분산\n▸ ENI 소스 = 모든 애플리케이션 트래픽 캡처\n▸ 실제 패킷 → 검사 → 통과/차단\n\n【오답 체크】\n(A) VPC Flow Logs = 메타데이터만(실제 패킷 없음), 사후 분석만\n(C) Kinesis Firehose = 로그/메시지(실시간 패킷 스트림 아님)\n(D) Flow Logs + CloudWatch = 역시 메타데이터, 실시간 검사 불가\n\n【시험 포인트】\n실시간 콘텐츠 검사 = VPC Traffic Mirroring 필수. Flow Logs는 감시/분석용.",
    "en_q": "A company has an application that runs on a fleet of Amazon EC2 instances. A new company regulation mandates that all network traffic to and from the EC2 instances must be sent to a centralized third-party EC2 appliance for content inspection. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure VPC flow logs on each EC2 network interface. Publish the flow logs to an Amazon S3 bucket. Create a third-party EC2 appliance to acquire flow logs from the S3 bucket. Log in to the appliance to monitor network content.",
      "B": "Create a third-party EC2 appliance in an Auto Scaling group fronted by a Network Load Balancer (NLB). Configure a mirror session. Specify the NLB as the mirror target. Specify a mirror filter to capture inbound and outbound traffic. For the source of the mirror session, specify the EC2 elastic network interfaces for all the instances that host the application.",
      "C": "Configure a mirror session. Specify an Amazon Kinesis Data Firehose delivery stream as the mirror target. Specify a mirror filter to capture inbound and outbound traffic. For the source of the mirror session, specify the EC2 elastic network interfaces for all the instances that host the application. Create a third-party EC2 appliance. Send all traffic to the appliance through the Kinesis Data Firehose delivery stream for content inspection.",
      "D": "Configure VPC flow logs on each EC2 network interface. Send the logs to Amazon CloudWatch. Create a third-party EC2 appliance. Configure a CloudWatch filter to send the flow logs to Amazon Kinesis Data Firehose to load the logs into the appliance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/111596-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 144,
    "question": "회사가 2개의 AWS Direct Connect 링크를 보유합니다. 한 Direct Connect 링크는 us-east-1 리전에서 종료되고, 다른 Direct Connect 링크는 af-south-1 리전에서 종료됩니다. 회사는 BGP를 사용하여 AWS와 경로를 교환합니다. 네트워크 엔지니어가 af-south-1을 AWS의 보조 링크로 사용하도록 BGP를 구성해야 하는 방법은 무엇입니까?",
    "options": {
      "A": "• us-east-1으로의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7100을 사용합니다. • af-south-1으로의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7300을 사용합니다. • us-east-1의 Direct Connect BGP 피어에서 로컬 기본 설정 값을 200으로 설정합니다. • af-south-1의 Direct Connect BGP 피어에서 로컬 기본 설정 값을 50으로 설정합니다.",
      "B": "• us-east-1으로의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7300을 사용합니다. • af-south-1으로의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7100을 사용합니다. • us-east-1의 Direct Connect BGP 피어에서 로컬 기본 설정 값을 200으로 설정합니다. • af-south-1의 Direct Connect BGP 피어에서 로컬 기본 설정 값을 50으로 설정합니다.",
      "C": "• us-east-1으로의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7100을 사용합니다. • af-south-1으로의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7300을 사용합니다. • us-east-1의 Direct Connect BGP 피어에서 로컬 기본 설정 값을 50으로 설정합니다. • af-south-1의 Direct Connect BGP 피어에서 로컬 기본 설정 값을 200으로 설정합니다.",
      "D": "• us-east-1으로의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7300을 사용합니다. • af-south-1으로의 Direct Connect 링크에서 BGP 피어링을 구성하여 커뮤니티 태그 7224:7100을 사용합니다. • us-east-1의 Direct Connect BGP 피어에서 로컬 기본 설정 값을 50으로 설정합니다. • af-south-1의 Direct Connect BGP 피어에서 로컬 기본 설정 값을 200으로 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ BGP Community Tag — AWS 라우트 우선순위 제어\n▸ 7224:7100 — 주 링크(높은 우선순위)\n▸ 7224:7300 — 보조 링크(낮은 우선순위)\n▸ Local Preference — 로컬 라우팅 선택(높을수록 우선)\n\n【정답 포인트】\n▸ us-east-1 = 7224:7300(주) + LP 200(높음)\n▸ af-south-1 = 7224:7100(보조) + LP 50(낮음)\n▸ 결과: us-east-1 선호, af-south-1은 장애 시만 사용\n\n【오답 체크】\n(A) af-south-1이 높은 커뮤니티(주)로 설정 = 역순\n(C) LP 값만 역순 = 커뮤니티 태그 기본값 무시\n(D) 모든 값이 잘못됨\n\n【시험 포인트】\nBGP 커뮤니티 태그 암기: 7100(주), 7300(보조). LP는 높을수록 우선.",
    "en_q": "A company has two AWS Direct Connect links. One Direct Connect link terminates in the us-east-1 Region, and the other Direct Connect link terminates in the af-south-1 Region. The company is using BGP to exchange routes with AWS. How should a network engineer configure BGP to ensure that af-south-1 is used as a secondary link to AWS?",
    "en_opts": {
      "A": "On the Direct Connect link to us-east-1, configure BGP peering to use community tag 7224:7100 On the Direct Connect link to af-south-1, configure BGP peering to use community tag 7224:7300 On the Direct Connect BGP peer to us-east-1, set the local preference value to 200 On the Direct Connect BGP peer to af-south-1, set the local preference value to 50",
      "B": "On the Direct Connect link to us-east-1, configure BGP peering to use community tag 7224:7300 On the Direct Connect link to af-south-1, configure BGP peering to use community tag 7224:7100 On the Direct Connect BGP peer to us-east-1, set the local preference value to 200 On the Direct Connect BGP peer to af-south-1, set the local preference value to 50",
      "C": "On the Direct Connect link to us-east-1, configure BGP peering to use community tag 7224:7100 On the Direct Connect link to af-south-1, configure BGP peering to use community tag 7224:7300 On the Direct Connect BGP peer to us-east-1, set the local preference value to 50 On the Direct Connect BGP peer to af-south-1, set the local preference value to 200",
      "D": "On the Direct Connect link to us-east-1, configure BGP peering to use community tag 7224:7300 On the Direct Connect link to af-south-1, configure BGP peering to use community tag 7224:7100 On the Direct Connect BGP peer to us-east-1, set the local preference value to 50 On the Direct Connect BGP peer to af-south-1, set the local preference value to 200"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116412-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 145,
    "question": "인프라 엔지니어 팀은 AWS CDK(Cloud Development Kit)를 사용하여 ALB(Application Load Balancer) 구성 요소의 배포를 자동화하려고 합니다. CDK 애플리케이션은 여러 환경, AWS 리전 및 AWS 계정에 재사용 가능하고 일관된 인프라 스택을 배포해야 합니다. 프로젝트의 리드 네트워크 아키텍트는 이미 대상 계정을 부트스트랩했습니다. 리드 네트워크 아키텍트는 또한 여러 환경 및 리전에 걸쳐 VPC 및 Amazon Route 53 프라이빗 호스팅 존 같은 핵심 네트워크 구성 요소를 배포했습니다. 인프라 엔지니어는 CDK 애플리케이션의 ALB 구성 요소를 설계하여 기존 핵심 네트워크 구성 요소를 사용해야 합니다. 어떤 단계의 조합이 환경 배포 간 관리 노력이 최소인 이 요구 사항을 충족할까요? (2개 선택)",
    "options": {
      "A": "CDK 애플리케이션을 설계하여 환경 및 리전에 걸쳐 변하는 값에 대한 AWS CloudFormation 매개변수를 읽습니다. CDK 스택의 리소스에 필요한 변수를 참조합니다.",
      "B": "CDK 애플리케이션을 설계하여 런타임에 계정 및 리전 세부 사항이 포함된 환경 변수를 읽습니다. 이 변수를 CDK 스택의 속성으로 사용합니다. CDK 스택의 컨텍스트 메서드를 사용하여 변수 값을 검색합니다.",
      "C": "다중 계정 환경에서 공유 애플리케이션 서비스를 위한 전용 계정을 만듭니다. 전용 계정에 CDK 파이프라인을 배포합니다. 여러 환경 및 리전에 걸쳐 CDK 애플리케이션을 배포하는 파이프라인의 단계를 만듭니다.",
      "D": "CDK 애플리케이션을 여러 환경 및 리전에 걸쳐 배포를 자동화하는 스크립트를 작성합니다. 프로젝트를 진행 중인 엔지니어에게 스크립트를 배포합니다.",
      "E": "CDK 툴킷을 로컬에서 사용하여 각 환경 및 리전에 스택을 배포합니다. --context 플래그를 사용하여 CDK 애플리케이션이 런타임에 참조할 수 있는 변수를 전달합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ CDK 파이프라인 — 자동화된 다중 계정/리전 배포\n▸ 컨텍스트 메서드 — 환경 변수 동적 로드\n▸ 최소 관리 오버헤드 — 자동화 최대화\n\n【정답 포인트】\n▸ B(환경 변수+컨텍스트) — 런타임 변수 자동 적용\n▸ C(CDK 파이프라인) — 여러 리전/환경 자동 배포\n▸ 조합: 중앙 파이프라인으로 모든 배포 관리\n\n【오답 체크】\n(A) CloudFormation 매개변수 = 수동 입력 필요\n(D) 스크립트 배포 = 엔지니어가 실행(오버헤드)\n(E) 로컬 CDK 툴킷 = 수동 배포, 비효율\n\n【시험 포인트】\nCDK 자동화 = 파이프라인\n(C) + 환경 변수\n(B) . 최소 오버헤드 = 중앙 집중식 파이프라인.",
    "en_q": "A team of infrastructure engineers wants to automate the deployment of Application Load Balancer (ALB) components by using the AWS Cloud Development Kit (AWS CDK). The CDK application must deploy an infrastructure stack that is reusable and consistent across multiple environments, AWS Regions, and AWS accounts. The lead network architect on the project has already bootstrapped the target accounts. The lead network architect also has deployed core network components such as VPCs and Amazon Route 53 private hosted zones across the multiple environments and Regions. The infrastructure engineers must design the ALB components in the CDK application to use the existing core network components. Which combination of steps will meet this requirement with the LEAST manual effort between environment deployments? (Choose two.)",
    "en_opts": {
      "A": "Design the CDK application to read AWS CloudFormation parameters for the values that vary across environments and Regions. Reference these variables in the CDK stack for resources that require the variables.",
      "B": "Design the CDK application to read environment variables that contain account and Region details at runtime. Use these variables as properties of the CDK stack. Use context methods in the CDK stack to retrieve variable values.",
      "C": "Create a dedicated account for shared application services in the multi-account environment. Deploy a CDK pipeline to the dedicated account. Create stages in the pipeline that deploy the CDK application across different environments and Regions.",
      "D": "Write a script that automates the deployment of the CDK application across multiple environments and Regions. Distribute the script to engineers who are working on the project.",
      "E": "Use the CDK toolkit locally to deploy stacks to each environment and Region. Use the --context flag to pass in variables that the CDK application can reference at runtime."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116415-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 146,
    "question": "회사가 2개의 중복 능동-수동 AWS Direct Connect 연결을 통해 온프레미스 데이터 센터에 연결되는 중요한 VPC 워크로드를 보유합니다. 그러나 최근 한 Direct Connect 연결에서의 중단은 트래픽이 보조 Direct Connect 연결로 장애 조치되는 데 1분 이상이 걸린다는 것을 드러냈습니다. 회사는 장애 조치 시간을 분에서 초로 줄이려고 합니다. 어떤 솔루션이 BGP 장애 조치 시간의 가장 큰 감소를 제공할까요?",
    "options": {
      "A": "Direct Connect 연결 VIF의 BGP 세션에서 구성된 BGP 홀드 타임아웃 타이머를 줄입니다.",
      "B": "Direct Connect 연결 상태에 대한 Amazon CloudWatch 알람을 구성하여 AWS Lambda 함수를 호출하여 트래픽을 장애 조치합니다.",
      "C": "AWS 측의 Direct Connect 연결에서 양방향 포워딩 감지(BFD)를 구성합니다.",
      "D": "온프레미스 라우터의 Direct Connect 연결에서 양방향 포워딩 감지(BFD)를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ BFD(Bidirectional Forwarding Detection) — 빠른 장애 감지(초 단위)\n▸ BGP Holddown Timer — 느린 감지(분 단위)\n▸ 양방향 — 온프레미스와 AWS 모두 필요\n\n【정답 포인트】\n▸ BFD = 100ms 단위 빠른 감지\n▸ 온프레미스 라우터에서 구성 = AWS 측 연결 다운 신속 감지\n▸ 양방향 감지로 빠른 BGP 트리거\n\n【오답 체크】\n(A) BGP Holddown = 여전히 분 단위(여전히 느림)\n(B) CloudWatch = 응답 지연(비동기)\n(C) AWS 측만 = 온프레미스 문제 감지 안 됨\n\n【시험 포인트】\n빠른 장애 조치 = BFD(온프레미스 필수). BGP는 느리므로 BFD로 선행 감지.",
    "en_q": "A company has critical VPC workloads that connect to an on-premises data center through two redundant active-passive AWS Direct Connect connections. However, a recent outage on one Direct Connect connection revealed that it takes more than a minute for traffic to fail over to the secondary Direct Connect connection. The company wants to reduce the failover time from minutes to seconds. Which solution will provide the LARGEST reduction in the BGP failover time?",
    "en_opts": {
      "A": "Reduce the BGP hold-down timer that is configured on the BGP sessions on the Direct Connect connection VIFs.",
      "B": "Configure an Amazon CloudWatch alarm for the Direct Connect connection state to invoke an AWS Lambda function to fail over the traffic.",
      "C": "Configure Bidirectional Forwarding Detection (BFD) on the Direct Connect connections on the AWS side.",
      "D": "Configure Bidirectional Forwarding Detection (BFD) on the Direct Connect connections on the on-premises router."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116416-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 147,
    "question": "유럽 자동차 제조업체는 고객 대면 서비스 및 분석 플랫폼을 2개의 온프레미스 데이터 센터에서 AWS 클라우드로 마이그레이션하려고 합니다. 회사는 온프레미스 데이터 센터 사이에 50마일(80.4km) 간격을 유지해야 하며 클라우드에 두 위치 사이에 이 간격을 유지해야 합니다. 또한 회사는 클라우드의 두 위치 사이의 장애 조치 기능이 필요합니다. 회사의 인프라 팀은 여러 계정을 만들어 워크로드와 책임을 분리합니다. 회사는 eu-west-3 리전 및 eu-central-1 리전에 리소스를 프로비저닝합니다. 회사는 각 리전의 AWS Direct Connect 파트너를 선택하고 각 공급자로부터 2개의 복원력 높은 1Gbps 파이버 연결을 요청합니다. 회사의 네트워크 엔지니어는 계정의 모든 VPC 간, 그리고 온프레미스 네트워크와 AWS 클라우드 간 연결을 설정해야 합니다. 솔루션은 네트워크 문제 발생 시 두 리전 모두의 모든 서비스에 액세스해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Direct Connect 게이트웨이를 만듭니다. 각 Direct Connect 연결에 프라이빗 VIF를 만듭니다. 프라이빗 VIF를 Direct Connect 게이트웨이에 연결합니다. ECMP(Equal-Cost Multi-Path) 라우팅을 사용하여 4개의 연결을 2개 리전에 걸쳐 집계합니다. Direct Connect 게이트웨이를 각 VPC의 가상 프라이빗 게이트웨이에 직접 연결합니다.",
      "B": "Direct Connect 게이트웨이를 만듭니다. 트랜짓 게이트웨이를 만듭니다. 트랜짓 게이트웨이를 Direct Connect 게이트웨이에 연결합니다. 각 Direct Connect 연결에 트랜짓 VIF를 만듭니다. 트랜짓 VIF를 Direct Connect 게이트웨이에 연결합니다. LAG(Link Aggregation Group)를 사용하여 4개의 연결을 2개 리전에 걸쳐 집계합니다. 트랜짓 게이트웨이를 각 VPC에 직접 연결합니다.",
      "C": "Direct Connect 게이트웨이를 만듭니다. 각 리전에 트랜짓 게이트웨이를 만듭니다. 트랜짓 게이트웨이를 Direct Connect 게이트웨이에 연결합니다. 각 Direct Connect 연결에 트랜짓 VIF를 만듭니다. 트랜짓 VIF를 Direct Connect 게이트웨이에 연결합니다. 트랜짓 게이트웨이를 피어링합니다. 각 리전의 트랜짓 게이트웨이를 같은 리전의 VPC에 연결합니다.",
      "D": "Direct Connect 게이트웨이를 만듭니다. 각 Direct Connect 연결에 프라이빗 VIF를 만듭니다. 프라이빗 VIF를 Direct Connect 게이트웨이에 연결합니다. LAG(Link Aggregation Group)를 사용하여 4개의 연결을 2개 리전에 걸쳐 집계합니다. 트랜짓 게이트웨이를 만듭니다. 트랜짓 게이트웨이를 Direct Connect 게이트웨이에 연결합니다. 트랜짓 게이트웨이를 각 VPC에 직접 연결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Direct Connect Gateway — 다중 VIF 집계\n▸ Transit Gateway — 리전 간 VPC 연결\n▸ TGW Peering — 리전 간 TGW 연결\n▸ Transit VIF — TGW용 VIF(대역폭 확장)\n\n【정답 포인트】\n▸ DX Gateway + 각 리전 TGW 분리 = 리전별 격리\n▸ TGW Peering = 리전 간 장애 조치\n▸ Transit VIF = 대역폭 효율(Private보다 우수)\n▸ 각 리전 TGW가 로컬 VPC 관리\n\n【오답 체크】\n(A) 프라이빗 VIF + ECMP = 리전 간 피어링 불가\n(B) 단일 TGW = 리전 간 장애 조치 불가(TGW는 단일 리전)\n(D) Private VIF + LAG = Transit VIF의 확장성 부족\n\n【시험 포인트】\n다중 리전 + 장애 조치 = TGW Peering 필수. Transit VIF는 리전 간 최적.",
    "en_q": "A European car manufacturer wants to migrate its customer-facing services and its analytics platform from two on-premises data centers to the AWS Cloud. The company has a 50-mile (80.4 km) separation between its on-premises data centers and must maintain that separation between its two locations in the cloud. The company also needs failover capabilities between the two locations in the cloud. The company's infrastructure team creates several accounts to separate workloads and responsibilities. The company provisions resources in the eu-west-3 Region and in the eu-central-1 Region. The company selects an AWS Direct Connect Partner in each Region and requests two resilient 1 Gbps fiber connections from each provider. The company's network engineer must establish a connection between all VPCs in the accounts and between the on-premises network and the AWS Cloud. The solution must provide access to all services in both Regions in case of network issues. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a Direct Connect gateway. Create a private VIF on each of the Direct Connect connections. Attach the private VIFs to the Direct Connect gateway. Use equal-cost multi-path (ECMP) routing to aggregate the four connections across the two Regions. Attach the Direct Connect gateway directly to each VPC's virtual private gateway.",
      "B": "Create a Direct Connect gateway. Create a transit gateway. Attach the transit gateway to the Direct Connect gateway. Create a transit VIF on each of the Direct Connect connections. Attach the transit VIFs to the Direct Connect gateway. Use a link aggregation group (LAG) to aggregate the four connections across the two Regions. Attach the transit gateway directly to each VPC.",
      "C": "Create a Direct Connect gateway. Create a transit gateway in each Region. Attach the transit gateways to the Direct Connect gateway. Create a transit VIF on each of the Direct Connect connections. Attach the transit VIFs to the Direct Connect gateway. Peer the transit gateways. Attach the transit gateways in each Region to the VPCs in the same Region.",
      "D": "Create a Direct Connect gateway. Create a private VIF on each of the Direct Connect connections. Attach the private VIFs to the Direct Connect gateway. Use a link aggregation group (LAG) to aggregate the four connections across the two Regions. Create a transit gateway. Attach the transit gateway to the Direct Connect gateway. Attach the transit gateway directly to each VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116560-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 148,
    "question": "회사가 인터넷으로의 TCP 트래픽을 분석하려고 합니다. 트래픽은 회사의 VPC의 Amazon EC2 인스턴스에서 발생합니다. EC2 인스턴스는 NAT 게이트웨이를 통해 연결을 시작합니다. 필요한 정보는 소스 및 대상 IP 주소, 포트, TCP 세그먼트의 페이로드의 첫 8바이트를 포함합니다. 회사는 모든 필수 데이터 포인트를 수집, 저장 및 분석해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스를 VPC 트래픽 미러 소스로 설정합니다. 트래픽 미러 대상의 소프트웨어를 배포하여 데이터를 Amazon CloudWatch 로그로 전달합니다. CloudWatch 로그 Insights를 사용하여 데이터를 분석합니다.",
      "B": "NAT 게이트웨이를 VPC 트래픽 미러 소스로 설정합니다. 트래픽 미러 대상의 소프트웨어를 배포하여 데이터를 Amazon OpenSearch 서비스 클러스터로 전달합니다. OpenSearch 대시보드를 사용하여 데이터를 분석합니다.",
      "C": "EC2 인스턴스에 VPC 플로우 로그를 켭니다. 기본 형식을 지정하고 Amazon CloudWatch 로그의 로그 대상을 지정합니다. CloudWatch 로그 Insights를 사용하여 플로우 로그 데이터를 분석합니다.",
      "D": "EC2 인스턴스에 VPC 플로우 로그를 켭니다. 사용자 지정 형식을 지정하고 Amazon S3의 로그 대상을 지정합니다. Amazon Athena를 사용하여 플로우 로그 데이터를 분석합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ VPC Traffic Mirroring — 실제 패킷 캡처(페이로드 포함)\n▸ VPC Flow Logs — 메타데이터만(IP, 포트, 바이트)\n▸ 페이로드 8바이트 — 패킷 내용 필요\n\n【정답 포인트】\n▸ Traffic Mirror = 실제 패킷 복제(페이로드 포함)\n▸ EC2 소스 = NAT 게이트웨이 통과 전 트래픽\n▸ CloudWatch Logs = 수집, 분석 가능\n\n【오답 체크】\n(B) OpenSearch = 구조화된 데이터용(패킷 처리 복잡)\n(C) \n(D) Flow Logs = 메타데이터만(페이로드 없음)\n\n【시험 포인트】\n페이로드 분석 = Traffic Mirror 필수. Flow Logs는 통계용만.",
    "en_q": "A company wants to analyze TCP traffic to the internet. The traffic originates from Amazon EC2 instances in the company's VPC. The EC2 instances initiate connections through a NAT gateway. The required information includes source and destination IP addresses, ports, and the first 8 bytes of payload of TCP segments. The company needs to collect, store, and analyze all the required data points. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Set up the EC2 instances as VPC traffic mirror sources. Deploy software on the traffic mirror target to forward the data to Amazon CloudWatch Logs. Analyze the data by using CloudWatch Logs Insights.",
      "B": "Set up the NAT gateway as a VPC traffic mirror source. Deploy software on the traffic mirror target to forward the data to an Amazon OpenSearch Service cluster. Analyze the data by using OpenSearch Dashboards.",
      "C": "Turn on VPC Flow Logs on the EC2 instances. Specify the default format and a log destination of Amazon CloudWatch Logs. Analyze the flow log data by using CloudWatch Logs Insights.",
      "D": "Turn on VPC Flow Logs on the EC2 instances. Specify a custom format and a log destination of Amazon S3. Analyze the flow log data by using Amazon Athena."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116417-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 149,
    "question": "회사가 단일 AWS 리전에 3개의 VPC를 보유합니다. 각 VPC는 15개의 Amazon EC2 인스턴스를 포함하며, VPC 간 연결이 없습니다. 회사는 3개의 VPC 전체에 새로운 애플리케이션을 배포합니다. 애플리케이션은 노드 간에 높은 대역폭이 필요합니다. 네트워크 엔지니어는 VPC 간 연결을 구현해야 합니다. 이 요구 사항을 최고 처리량으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "트랜짓 게이트웨이를 구성합니다. 각 VPC를 트랜짓 게이트웨이에 연결합니다. 각 VPC에 정적 라우팅을 구성하여 트래픽을 트랜짓 게이트웨이로 라우팅합니다.",
      "B": "3개의 VPC 간 VPC 피어링을 구성합니다. 3개의 VPC 간 트래픽을 라우팅하도록 정적 라우팅을 구성합니다.",
      "C": "트랜짓 VPC를 구성합니다. 각 VPC에 VPN 게이트웨이를 구성합니다. 각 VPC에서 트랜짓 VPC로 AWS Site-to-Site VPN 터널을 만듭니다. BGP 라우팅을 사용하여 VPC 및 트랜짓 VPC 간 트래픽을 라우팅합니다.",
      "D": "각 VPC 간 AWS Site-to-Site VPN 연결을 구성합니다. 각 Site-to-Site VPN 연결에 대해 경로 전파를 활성화하여 VPC 간 트래픽을 라우팅합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ VPC Peering — 직접 1:1 VPC 연결(높은 처리량)\n▸ Transit Gateway — 다중 VPC 집계(오버헤드)\n▸ VPN — 암호화 오버헤드(느림)\n\n【정답 포인트】\n▸ VPC Peering = 레이어 2 직접 연결(낮은 지연, 높은 대역폭)\n▸ 3개 VPC = A-B, B-C, A-C 피어링 3개\n▸ 정적 라우팅 = 단순, 안정\n\n【오답 체크】\n(A) TGW = 중복화, VPC 피어링보다 지연 높음\n(C) VPN = 암호화 오버헤드로 처리량 제한\n(D) Site-to-Site VPN = 역시 암호화, 처리량 낮음\n\n【시험 포인트】\n최고 처리량 = VPC Peering. TGW는 관리 편이지만 성능은 떨어짐.",
    "en_q": "A company has three VPCs in a single AWS Region. Each VPC contains 15 Amazon EC2 instances, and no connectivity exists between the VPCs. The company is deploying a new application across all three VPCs. The application requires high bandwidth between the nodes. A network engineer must implement connectivity between the VPCs. Which solution will meet these requirements with the HIGHEST throughput?",
    "en_opts": {
      "A": "Configure a transit gateway. Attach each VPC to the transit gateway. Configure static routing in each VPC to route traffic to the transit gateway.",
      "B": "Configure VPC peering between the three VPCs. Configure static routing to route traffic between the three VPCs.",
      "C": "Configure a transit VPConfigure a VPN gateway in each VPCreate an AWS Site-to-Site VPN tunnel from each VPC to the transit VPUse BGP routing to route traffic between the VPCs and the transit VPC.",
      "D": "Configure AWS Site-to-Site VPN connections between each VPC. Enable route propagation for each Site-to-Site VPN connection to route traffic between the VPCs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116421-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 150,
    "question": "네트워크 엔지니어는 기존 AWS 환경에 AWS Network Firewall 방화벽을 배포해야 합니다. 환경은 다음으로 구성됩니다: • 모든 VPC가 연결된 트랜짓 게이트웨이 • 수백 개의 애플리케이션 VPC • NAT 게이트웨이 및 인터넷 게이트웨이를 포함하는 중앙화된 송신 인터넷 VPC • 공인 ALB를 호스팅하는 중앙화된 수신 인터넷 VPC • AWS Direct Connect 게이트웨이 첨부를 통한 온프레미스 연결 애플리케이션 VPC에는 다중 가용 영역의 프라이빗 서브넷에 배포된 워크로드가 있으며, VPC 라우트 테이블의 기본 경로(0.0.0.0/0)는 트랜짓 게이트웨이를 가리킵니다. Network Firewall 방화벽은 Suricata 호환 규칙을 사용하여 동-서(VPC간) 트래픽 및 남-북(인터넷 바운드 및 온프레미스 네트워크) 트래픽을 검사해야 합니다. 네트워크 엔지니어는 기존 프로덕션 환경에 대한 아키텍처 변경이 가장 적게 필요한 솔루션을 사용하여 방화벽을 배포해야 합니다. 이 요구 사항을 충족하기 위해 네트워크 엔지니어가 취해야 할 단계의 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "모든 가용 영역에서 각 애플리케이션 VPC의 Network Firewall을 배포합니다.",
      "B": "모든 가용 영역에서 중앙화된 검사 VPC의 Network Firewall을 배포합니다.",
      "C": "HOME_NET 규칙 그룹 변수를 업데이트하여 VPC 및 온프레미스 네트워크의 모든 CIDR 범위를 포함합니다.",
      "D": "EXTERNAL_NET 규칙 그룹 변수를 업데이트하여 VPC 및 온프레미스 네트워크의 모든 CIDR 범위를 포함합니다.",
      "E": "단일 트랜짓 게이트웨이 라우트 테이블을 구성합니다. 모든 애플리케이션 VPC 및 중앙화된 검사 VPC를 이 라우트 테이블과 연결합니다.",
      "F": "2개의 트랜짓 게이트웨이 라우트 테이블을 구성합니다. 모든 애플리케이션 VPC를 하나의 트랜짓 게이트웨이 라우트 테이블과 연결합니다. 중앙화된 검사 VPC를 다른 트랜짓 게이트웨이 라우트 테이블과 연결합니다."
    },
    "answer": "BCF",
    "explanation": "【핵심 용어】\n▸ Network Firewall — 중앙화된 검사(송/수신 + 동-서)\n▸ HOME_NET — 내부 네트워크(VPC + 온프레미스)\n▸ TGW 라우트 테이블 분리 — 트래픽 경로 제어\n\n【정답 포인트】\n▸ B(중앙 검사 VPC) — 아키텍처 변경 최소(기존 VPC 수정 없음)\n▸ C(HOME_NET) — 내부 네트워크 정의\n▸ F(분리된 TGW RT) — 애플리케이션→검사 VPC→목적지 라우팅\n\n【오답 체크】\n(A) 각 VPC = 수백 개 배포(아키텍처 변경 최대)\n(D) EXTERNAL_NET = 외부(VPC는 내부)\n(E) 단일 RT = 트래픽 흐름 제어 불가\n\n【시험 포인트】\n최소 변경 = 중앙화 + 검사 VPC 경로 제어. 기존 애플리케이션 VPC는 수정 금지.",
    "en_q": "A network engineer needs to deploy an AWS Network Firewall firewall into an existing AWS environment. The environment consists of the following: • A transit gateway with all VPCs attached to it • Several hundred application VPCs • A centralized egress internet VPC with a NAT gateway and an internet gateway • A centralized ingress internet VPC that hosts public Application Load Balancers • On-premises connectivity through an AWS Direct Connect gateway attachment The application VPCs have workloads deployed across multiple Availability Zones in private subnets with the VPC route table s default route (0.0.0.0/0) pointing to the transit gateway. The Network Firewall firewall needs to inspect east-west (VPC-to-VPC) traffic and north-south (internet-bound and on-premises network) traffic by using Suricata compatible rules. The network engineer must deploy the firewall by using a solution that requires the least possible architectural changes to the existing production environment. Which combination of steps should the network engineer take to meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Deploy Network Firewall in all Availability Zones in each application VPC.",
      "B": "Deploy Network Firewall in all Availability Zones in a centralized inspection VPC.",
      "C": "Update the HOME_NET rule group variable to include all CIDR ranges of the VPCs and on-premises networks.",
      "D": "Update the EXTERNAL_NET rule group variable to include all CIDR ranges of the VPCs and on-premises networks.",
      "E": "Configure a single transit gateway route table. Associate all application VPCs and the centralized inspection VPC with this route table.",
      "F": "Configure two transit gateway route tables. Associate all application VPCs with one transit gateway route table. Associate the centralized inspection VPC with the other transit gateway route table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116426-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 151,
    "question": "회사가 2개의 도메인 컨트롤러를 포함하는 공유 서비스 VPC를 사용합니다. 도메인 컨트롤러는 회사의 프라이빗 서브넷에 배포됩니다. 회사는 계정의 새 VPC에 새 애플리케이션을 배포합니다. 애플리케이션은 Windows Server용 Amazon EC2에 배포됩니다. 인스턴스는 공유 서비스 VPC의 도메인 컨트롤러에서 지원하는 기존 Windows 도메인에 가입해야 합니다. 트랜짓 게이트웨이는 공유 서비스 VPC 및 새 VPC 모두에 연결됩니다. 회사는 트랜짓 게이트웨이, 공유 서비스 VPC 및 새 VPC의 라우트 테이블을 업데이트했습니다. 도메인 컨트롤러 및 인스턴스의 보안 그룹이 업데이트되어 도메인 작업에 필요한 포트에서만 트래픽을 허용합니다. 인스턴스가 도메인 컨트롤러에서 호스팅하는 도메인에 가입할 수 없습니다. 어떤 단계의 조합이 운영 오버헤드가 최소인 이 문제의 원인을 식별하는 데 도움이 될까요? (2개 선택)",
    "options": {
      "A": "AWS Network Manager를 사용하여 트랜짓 게이트웨이 네트워크의 경로 분석을 수행합니다. 기존 EC2 인스턴스를 소스로 지정합니다. 첫 번째 도메인 컨트롤러를 대상으로 지정합니다. 두 번째 도메인 컨트롤러에 대해 경로 분석을 반복합니다.",
      "B": "기존 EC2 인스턴스를 소스로 하고 다른 EC2 인스턴스를 대상으로 포트 미러링을 사용하여 연결 시도의 패킷 캡처를 얻습니다.",
      "C": "공유 서비스 VPC 및 새 VPC의 VPC 플로우 로그를 검토합니다.",
      "D": "도메인 컨트롤러 중 하나에서 기존 EC2 인스턴스로 ping 명령을 실행합니다.",
      "E": "공유 서비스 VPC에서 경로 전파를 꺼져 있는지 확인합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ AWS Network Manager — 라우트 분석(경로 검증)\n▸ VPC 플로우 로그 — 트래픽 메타데이터(패킷 손실 확인)\n▸ 최소 오버헤드 — 효율적 진단\n\n【정답 포인트】\n▸ A(Network Manager 라우트 분석) — EC2→도메인 컨트롤러 경로 자동 검증(빠름)\n▸ C(VPC Flow Logs) — 두 VPC 간 패킷 손실/거부 확인\n▸ 조합: 경로 이상 + 트래픽 거부 동시 파악\n\n【오답 체크】\n(B) 포트 미러링 = 수동 설정(시간 소요)\n(D) Ping = ICMP만(도메인 포트 미테스트)\n(E) 경로 전파 관련 없음(라우트 테이블 이미 수정)\n\n【시험 포인트】\n빠른 진단 = Network Manager 라우트 분석 + Flow Logs. 경로 + 트래픽 동시 검증.",
    "en_q": "A company is using a shared services VPC with two domain controllers. The domain controllers are deployed in the company's private subnets. The company is deploying a new application into a new VPC in the account. The application will be deployed onto an Amazon EC2 for Windows Server instance in the new VPC. The instance must join the existing Windows domain that is supported by the domain controllers in the shared services VPC. A transit gateway is attached to both the shared services VPC and the new VPC. The company has updated the route tables for the transit gateway, the shared services VPC, and the new VPC. The security groups for the domain controllers and the instance are updated and allow traffic only on the ports that are necessary for domain operations. The instance is unable to join the domain that is hosted on the domain controllers. Which combination of actions will help identify the cause of this issue with the LEAST operational overhead? (Choose two.)",
    "en_opts": {
      "A": "Use AWS Network Manager to perform a route analysis for the transit gateway network. Specify the existing EC2 instance as the source. Specify the first domain controller as the destination. Repeat the route analysis for the second domain controller.",
      "B": "Use port mirroring with the existing EC2 instance as the source and another EC2 instance as the target to obtain packet captures of the connection attempts.",
      "C": "Review the VPC flow logs on the shared services VPC and the new VPC.",
      "D": "Issue a ping command from one of the domain controllers to the existing EC2 instance.",
      "E": "Ensure that route propagation is turned off on the shared services VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116576-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 152,
    "question": "회사가 신용 카드 번호를 암호화된 상태로 유지해야 하는 주문 처리 시스템을 보유합니다. 회사의 고객 대면 애플리케이션은 us-west-2 리전의 ALB(Application Load Balancer) 뒤 Amazon ECS(Elastic Container Service) 서비스로 실행됩니다. Amazon CloudFront 배포는 ALB를 원본으로 구성됩니다. 회사는 제3자 신뢰할 수 있는 인증 기관을 사용하여 인증서를 프로비저닝합니다. 회사는 전송 중 암호화를 위해 HTTPS를 사용합니다. 회사는 특정 애플리케이션 구성 요소만 민감한 데이터를 해독할 수 있도록 민감한 데이터를 암호화된 상태로 유지하기 위해 추가 필드 수준 암호화가 필요합니다. 이 요구 사항을 충족하는 단계의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "ALB에 대한 제3자 인증서를 가져옵니다. 인증서를 ALB와 연결합니다. CloudFront 배포용 인증서를 us-west-2의 AWS Certificate Manager(ACM)에 업로드합니다.",
      "B": "us-west-2의 AWS Certificate Manager(ACM)로 ALB의 제3자 인증서를 가져옵니다. 인증서를 ALB와 연결합니다. CloudFront 배포용 인증서를 us-east-1 리전의 ACM에 업로드합니다.",
      "C": "민감한 데이터의 암호화를 처리하는 프라이빗 키를 CloudFront 배포에 업로드합니다. 필드 수준 암호화 프로필을 만들고 민감한 정보를 포함하는 필드를 지정합니다. 필드 수준 암호화 구성을 만들고 새로 만든 프로필을 선택합니다. 구성을 민감한 POST 요청과 관련된 적절한 캐시 동작에 연결합니다.",
      "D": "민감한 데이터의 암호화를 처리하는 공개 키를 CloudFront 배포에 업로드합니다. 필드 수준 암호화 구성을 만들고 민감한 정보를 포함하는 필드를 지정합니다. 필드 수준 암호화 프로필을 만들고 새로 만든 구성을 선택합니다. 프로필을 민감한 GET 요청과 관련된 적절한 캐시 동작에 연결합니다.",
      "E": "민감한 데이터의 암호화를 처리하는 공개 키를 CloudFront 배포에 업로드합니다. 필드 수준 암호화 프로필을 만들고 민감한 정보를 포함하는 필드를 지정합니다. 필드 수준 암호화 구성을 만들고 새로 만든 프로필을 선택합니다. 구성을 민감한 POST 요청과 관련된 적절한 캐시 동작에 연결합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ CloudFront 필드 수준 암호화 — POST 데이터 암호화\n▸ 공개 키 — 클라이언트에서 암호화(CloudFront)\n▸ us-east-1 ACM — CloudFront 전용 리전\n\n【정답 포인트】\n▸ B(ACM + ALB) — ALB는 us-west-2 ACM에서, CloudFront 인증서는 us-east-1 필수\n▸ E(공개 키 + POST) — 민감한 POST 데이터를 클라이언트 단계에서 암호화\n▸ 프로필 먼저, 구성에 포함 = 순서 중요\n\n【오답 체크】\n(A) CloudFront 인증서를 us-west-2에 업로드 = 지역 오류\n(C) 프라이빗 키 = 암호화 아님(복호화용, 역할 잘못)\n(D) GET + 구성 먼저 = 요청 방식 오류(POST만 암호화 필요)\n\n【시험 포인트】\nCloudFront ACM = 항상 us-east-1. 필드 암호화 = 공개 키 + POST + 프로필 순서.",
    "en_q": "A company has an order processing system that needs to keep credit card numbers encrypted. The company's customer-facing application runs as an Amazon Elastic Container Service (Amazon ECS) service behind an Application Load Balancer (ALB) in the us-west-2 Region. An Amazon CloudFront distribution is configured with the ALB as the origin. The company uses a third-party trusted certificate authority to provision its certificates. The company is using HTTPS for encryption in transit. The company needs additional field-level encryption to keep sensitive data encrypted during processing so that only certain application components can decrypt the sensitive data. Which combination of steps will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Import the third-party certificate for the ALB. Associate the certificate with the ALB. Upload the certificate for the CloudFront distribution into AWS Certificate Manager (ACM) in us-west-2.",
      "B": "Import the third-party certificate for the ALB into AWS Certificate Manager (ACM) in us-west-2. Associate the certificate with the ALUpload the certificate for the CloudFront distribution into ACM in the us-east-1 Region.",
      "C": "Upload the private key that handles the encryption of the sensitive data to the CloudFront distribution. Create a field-level encryption profile and specify the fields that contain sensitive information. Create a field-level encryption configuration, and choose the newly created profile. Link the configuration to the appropriate cache behavior that is associated with sensitive POST requests.",
      "D": "Upload the public key that handles the encryption of the sensitive data to the CloudFront distribution. Create a field-level encryption configuration, and specify the fields that contain sensitive information. Create a field-level encryption profile, and choose the newly created configuration. Link the profile to the appropriate cache behavior that is associated with sensitive GET requests.",
      "E": "Upload the public key that handles the encryption of the sensitive data to the CloudFront distribution. Create a field-level encryption profile and specify the fields that contain sensitive information. Create a field-level encryption configuration, and choose the newly created profile. Link the configuration to the appropriate cache behavior that is associated with sensitive POST requests."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116856-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 153,
    "question": "회사가 AWS 클라우드에 다중 VPC 환경을 배포했습니다. 회사는 Transit Gateway를 사용하여 모든 VPC를 연결합니다. 과거에 VPC의 보안 그룹, 네트워크 ACL 및 라우팅 테이블 변경 후 애플리케이션 간 연결 손실이 발생했습니다. 이러한 변경이 발생할 때 회사는 단일 VPC 내의 서로 다른 리소스 간 연결이 여전히 존재하는지 자동으로 확인하려고 합니다.",
    "options": {
      "A": "VPC Reachability Analyzer에서 확인할 경로 목록을 작성합니다. Amazon CloudWatch에서 로깅되는 변경사항을 모니터링하는 Amazon EventBridge 규칙을 생성합니다. AWS Lambda 함수를 호출하도록 규칙을 구성하여 Reachability Analyzer에서 서로 다른 경로를 테스트합니다.",
      "B": "VPC Reachability Analyzer에서 확인할 경로 목록을 작성합니다. AWS CloudTrail에서 로깅되는 변경사항을 모니터링하는 Amazon EventBridge 규칙을 생성합니다. AWS Lambda 함수를 호출하도록 규칙을 구성하여 Reachability Analyzer에서 서로 다른 경로를 테스트합니다.",
      "C": "AWS Transit Gateway Network Manager Route Analyzer에서 확인할 경로 목록을 작성합니다. Amazon CloudWatch에서 로깅되는 변경사항을 모니터링하는 Amazon EventBridge 규칙을 생성합니다. AWS Lambda 함수를 호출하도록 규칙을 구성하여 Route Analyzer에서 경로를 테스트합니다.",
      "D": "AWS Transit Gateway Network Manager Route Analyzer에서 확인할 경로 목록을 작성합니다. AWS CloudTrail에서 로깅되는 변경사항을 모니터링하는 Amazon EventBridge 규칙을 생성합니다. AWS Lambda 함수를 호출하도록 규칙을 구성하여 Route Analyzer에서 경로를 테스트합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ VPC Reachability Analyzer — 단일 VPC 내 리소스 간 연결성 검증\n▸ CloudTrail — 네트워크 구성 변경 감지 및 로깅\n▸ EventBridge — 정책 변경 이벤트 캡처\n\n【정답 포인트】\n▸ 단일 VPC 내 연결 검증 → Reachability Analyzer (Route Analyzer 아님)\n▸ 네트워크 정책 변경(보안 그룹, ACL, 라우팅 테이블) → CloudTrail 로깅\n▸ EventBridge 규칙이 CloudTrail 이벤트를 감지 → Lambda로 자동 검증 트리거\n\n【오답 체크】\n(A) CloudWatch는 네트워크 정책 변경을 직접 로깅하지 않음. CloudTrail이 필수.\n(C) \n(D) Transit Gateway Network Manager Route Analyzer는 다중 VPC/계정 간 경로 검증용. 단일 VPC는 Reachability Analyzer 사용.\n\n【시험 포인트】\n단일 VPC 내 연결 검증 → Reachability Analyzer\n다중 VPC 또는 Transit Gateway 경로 → Route Analyzer\n네트워크 정책 변경 감지 → CloudTrail (CloudWatch 아님)",
    "en_q": "A company has deployed a multi-VPC environment in the AWS Cloud. The company uses a transit gateway to connect all the VPCs together. In the past, the company has experienced a loss of connectivity between applications after changes to security groups, network ACLs, and route tables in a VPC. When these changes occur, the company wants to automatically verify that connectivity still exists between different resources in a single VPC.",
    "en_opts": {
      "A": "Create a list of paths between different resources to check in VPC Reachability Analyzer. Create an Amazon EventBridge rule to monitor when a change is made and logged in Amazon CloudWatch. Configure the rule to invoke an AWS Lambda function to test the different paths in Reachability Analyzer.",
      "B": "Create a list of paths between different resources to check in VPC Reachability Analyzer. Create an Amazon EventBridge rule to monitor when a change is made and logged in AWS CloudTrail. Configure the rule to invoke an AWS Lambda function to test the different paths in Reachability Analyzer.",
      "C": "Create a list of paths to check in AWS Transit Gateway Network Manager Route Analyzer. Create an Amazon EventBridge rule to monitor when a change is made and logged in Amazon CloudWatch. Configure the rule to invoke an AWS Lambda function to test the different paths in Route Analyzer.",
      "D": "Create a list of paths to check in AWS Transit Gateway Network Manager Route Analyzer. Create an Amazon EventBridge rule to monitor when a change is made and logged in AWS CloudTrail. Configure the rule to invoke an AWS Lambda function to test the different paths in Route Analyzer."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116434-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 154,
    "question": "회사는 Application Load Balancer(ALB) 뒤에서 실행되는 Amazon EC2 인스턴스 플릿에서 웹 애플리케이션을 호스팅합니다. 인스턴스는 Auto Scaling 그룹에 있습니다. 회사는 ALB를 원본으로 하는 Amazon CloudFront 배포를 사용합니다. 애플리케이션이 최근 공격을 받았습니다. 이에 대응하여 회사는 CloudFront 배포에 AWS WAF 웹 ACL을 연결했습니다. 회사는 Amazon Athena를 사용하여 AWS WAF가 감지하는 애플리케이션 공격을 분석해야 합니다. 어느 솔루션이 이 요구 사항을 충족합니까?",
    "options": {
      "A": "ALB 및 EC2 인스턴스 서브넷을 VPC Flow Logs를 생성하도록 구성합니다. VPC Flow Logs를 Amazon S3 버킷으로 전달하도록 구성합니다.",
      "B": "AWS CloudTrail에서 경로를 생성하여 데이터 이벤트를 캡처합니다. 경로를 Amazon S3 버킷으로 로그를 전달하도록 구성합니다.",
      "C": "AWS WAF 웹 ACL이 Amazon Kinesis Data Firehose 전송 스트림으로 로그를 전달하도록 구성합니다. 스트림이 Amazon S3 버킷으로 데이터를 전달하도록 구성합니다.",
      "D": "ALB에 대한 액세스 로깅을 켭니다. 로그가 Amazon S3 버킷으로 전달되도록 로그를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS WAF 로깅 — CloudFront에서 감지한 공격 기록\n▸ Kinesis Data Firehose — 실시간 데이터 전달 및 S3 저장\n▸ Athena — S3의 WAF 로그 쿼리 분석\n\n【정답 포인트】\n▸ WAF 공격 분석 → WAF 로그 필수 (CloudTrail, VPC Flow Logs 아님)\n▸ WAF 로그는 Kinesis Data Firehose로 S3에 전달\n▸ S3 저장된 WAF 로그를 Athena로 SQL 쿼리 분석 가능\n\n【오답 체크】\n(A) VPC Flow Logs는 네트워크 흐름만 기록. WAF 공격 탐지 정보 없음.\n(B) CloudTrail은 API 호출 기록. WAF 탐지 로그 아님.\n(D) ALB 액세스 로그는 요청/응답만. WAF 공격 탐지 정보 없음.\n\n【시험 포인트】\nWAF 탐지 분석 → WAF 로깅 활성화 필수\nWAF 로그 저장소 → Kinesis Data Firehose (또는 CloudWatch Logs)\nAthena 분석 → S3 기반 로그 필수",
    "en_q": "A company hosts a web application that runs on a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in an Auto Scaling group. The company uses an Amazon CloudFront distribution with the ALB as an origin. The application recently experienced an attack. In response, the company associated an AWS WAF web ACL with the CloudFront distribution. The company needs to use Amazon Athena to analyze application attacks that AWS WAF detects. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Configure the ALB and the EC2 instance subnets to produce VPC flow logs. Configure the VPC flow logs to deliver logs to an Amazon S3 bucket for log analysis.",
      "B": "Create a trail in AWS CloudTrail to capture data events. Configure the trail to deliver logs to an Amazon S3 bucket for log analysis.",
      "C": "Configure the AWS WAF web ACL to deliver logs to an Amazon Kinesis Data Firehose delivery stream. Configure the stream to deliver the data to an Amazon S3 bucket for log analysis.",
      "D": "Turn on access logging for the ALB. Configure the access logs to deliver the logs to an Amazon S3 bucket for log analysis."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116435-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 155,
    "question": "부동산 회사는 Amazon Workspaces를 사용하여 전 세계 부동산 중개인에게 기업 관리 데스크톱 서비스를 제공합니다. 이 Workspaces는 7개의 VPC에 배포됩니다. 각 VPC는 다른 AWS 지역에 있습니다. 새로운 요구 사항에 따라 회사의 클라우드 호스팅 보안 정보 및 이벤트 관리(SIEM) 시스템은 Workspaces에서 생성된 DNS 쿼리를 분석하여 Workspaces에 연결된 대상 도메인을 식별해야 합니다. SIEM 시스템은 데이터 및 로그 수집을 위해 폴링 및 푸시 방식을 모두 지원합니다. 네트워크 엔지니어가 이 요구 사항을 가장 비용 효율적으로 충족하기 위해 어떤 솔루션을 구현해야 합니까?",
    "options": {
      "A": "Workspaces 인스턴스가 연결된 각 VPC에서 VPC Flow Logs를 생성합니다. 로그 데이터를 중앙 Amazon S3 버킷으로 게시합니다. SIEM 시스템이 S3 버킷을 주기적으로 폴링하도록 구성합니다.",
      "B": "Amazon CloudWatch 에이전트를 구성하여 Amazon CloudWatch Logs에서 모든 DNS 요청을 기록합니다. CloudWatch Logs에서 구독 필터를 구성합니다. Amazon Kinesis Data Firehose를 사용하여 SIEM 시스템으로 로그를 푸시합니다.",
      "C": "VPC Traffic Mirroring을 구성하여 각 Workspace에서 네트워크 트래픽을 복사하여 분석을 위해 SIEM 시스템 프로브로 트래픽을 보냅니다.",
      "D": "Amazon Route 53 쿼리 로깅을 구성합니다. 대상을 SIEM 시스템으로 데이터를 푸시하도록 구성된 Amazon Kinesis Data Firehose 전송 스트림으로 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Route 53 쿼리 로깅 — DNS 쿼리 기록 (도메인 조회만)\n▸ Kinesis Data Firehose — 실시간 데이터 푸시 전달\n▸ 다중 지역 → 비용 최적화 솔루션 필수\n\n【정답 포인트】\n▸ DNS 쿼리 분석 → Route 53 쿼리 로깅 (가장 효율적)\n▸ 푸시 방식 필요 → Kinesis Data Firehose 사용\n▸ 다중 지역 환경 → 중앙 수집 지점으로 비용 절감\n▸ Route 53 쿼리 로깅은 자동으로 모든 DNS 요청 기록\n\n【오답 체크】\n(A) VPC Flow Logs는 DNS 쿼리 정보 미포함. 불필요한 데이터 수집.\n(B) CloudWatch 에이전트 설치 필요 (각 인스턴스). 관리 오버헤드 증가.\n(C) Traffic Mirroring은 전체 트래픽 복사. 비용 높음. DNS만 필요한 경우 낭비.\n\n【시험 포인트】\nDNS 쿼리만 분석 → Route 53 쿼리 로깅 최적\n다중 VPC/지역 → 중앙화된 로깅 솔루션 (비용 효율)\n푸시 vs 폴링 → 실시간 분석 필요 시 Firehose (푸시)",
    "en_q": "A real estate company is using Amazon Workspaces to provide corporate managed desktop service to its real estate agents around the world. These Workspaces are deployed in seven VPCs. Each VPC is in a different AWS Region. According to a new requirement, the company's cloud-hosted security information and events management (SIEM) system needs to analyze DNS queries generated by the Workspaces to identify the target domains that are connected to the Workspaces. The SIEM system supports poll and push methods for data and log collection. Which solution should a network engineer implement to meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Create VPC flow logs in each VPC that is connected to the Workspaces instances. Publish the log data to a central Amazon S3 bucket. Configure the SIEM system to poll the S3 bucket periodically.",
      "B": "Configure an Amazon CloudWatch agent to log all DNS requests in Amazon CloudWatch Logs. Configure a subscription filter in CloudWatch Logs. Push the logs to the SIEM system by using Amazon Kinesis Data Firehose.",
      "C": "Configure VPC Traffic Mirroring to copy network traffic from each Workspace and to send the traffic to the SIEM system probes for analysis.",
      "D": "Configure Amazon Route 53 query logging. Set the destination as an Amazon Kinesis Data Firehose delivery stream that is configured to push data to the SIEM system."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116437-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 156,
    "question": "네트워크 엔지니어는 고성능 컴퓨팅(HPC) 워크로드를 위한 아키텍처를 설계해야 합니다. Amazon EC2 인스턴스는 10Gbps 흐름과 낮은 지연 시간으로 많은 인스턴스에서 최대 100Gbps의 집계 처리량이 필요합니다. 어느 아키텍처 솔루션이 이 워크로드를 최적화합니까?",
    "options": {
      "A": "노드를 VPC의 단일 서브넷에 배치합니다. 클러스터 배치 그룹을 구성합니다. 최신 Elastic Fabric Adapter(EFA) 드라이버가 지원되는 운영 체제가 있는 EC2 인스턴스에 설치되었는지 확인합니다.",
      "B": "노드를 단일 VPC의 여러 서브넷에 배치합니다. Spread 배치 그룹을 구성합니다. EC2 인스턴스가 Elastic Network Adapter(ENA)를 지원하고 각 인스턴스 운영 체제에 드라이버가 업데이트되었는지 확인합니다.",
      "C": "노드를 여러 VPC에 배치합니다. AWS Transit Gateway를 사용하여 VPC 간 트래픽을 라우팅합니다. 최신 Elastic Fabric Adapter(EFA) 드라이버가 지원되는 운영 체제가 있는 EC2 인스턴스에 설치되었는지 확인합니다.",
      "D": "노드를 여러 가용 영역의 여러 서브넷에 배치합니다. 클러스터 배치 그룹을 구성합니다. EC2 인스턴스가 Elastic Network Adapter(ENA)를 지원하고 각 인스턴스 운영 체제에 드라이버가 업데이트되었는지 확인합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Cluster Placement Group — 단일 AZ 내 저지연, 고처리량 배치\n▸ EFA (Elastic Fabric Adapter) — HPC용 고속 네트워크 인터페이스\n▸ 10Gbps 흐름, 100Gbps 집계 처리량 — 클러스터 배치 필수\n\n【정답 포인트】\n▸ HPC 워크로드 최적화 → Cluster Placement Group (단일 서브넷)\n▸ 저지연, 고처리량 → EFA 드라이버 필수\n▸ 클러스터 배치는 단일 AZ 내 배치 (다중 AZ 지원 안 함)\n\n【오답 체크】\n(B) Spread 배치는 인스턴스 분산 배치. HPC 저지연 불가. ENA만으로 100Gbps 미달.\n(C) 다중 VPC + Transit Gateway = 높은 지연 시간. HPC 부적합.\n(D) 다중 AZ = 지연 시간 증가. Cluster 배치는 단일 AZ만 지원.\n\n【시험 포인트】\nHPC (저지연, 고처리량) → Cluster Placement Group + EFA\nCluster Placement Group → 단일 서브넷, 단일 AZ\nENA만으로 부족 → EFA 필수 (10Gbps+ 요구)\nSpread Placement → 장애 분산. HPC 부적합.",
    "en_q": "A network engineer needs to design the architecture for a high performance computing (HPC) workload. Amazon EC2 instances will require 10 Gbps flows and an aggregate throughput of up to 100 Gbps across many instances with low-latency communication. Which architecture solution will optimize this workload?",
    "en_opts": {
      "A": "Place nodes in a single subnet of a VPC. Configure a cluster placement group. Ensure that the latest Elastic Fabric Adapter (EFA) drivers are installed on the EC2 instances with a supported operating system.",
      "B": "Place nodes in multiple subnets in a single VPC. Configure a spread placement group. Ensure that the EC2 instances support Elastic Network Adapters (ENAs) and that the drivers are updated on each instance operating system.",
      "C": "Place nodes in multiple VPCs Use AWS Transit Gateway to route traffic between the VPCs. Ensure that the latest Elastic Fabric Adapter (EFA) drivers are installed on the EC2 instances with a supported operating system.",
      "D": "Place nodes in multiple subnets in multiple Availability Zones. Configure a cluster placement group. Ensure that the EC2 instances support Elastic Network Adapters (ENAs) and that the drivers are updated on each instance operating system."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116578-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 157,
    "question": "회사는 단일 AWS 지역의 여러 AWS 계정 및 VPC를 사용합니다. 회사는 Amazon EC2 인스턴스 및 Amazon RDS 데이터베이스에 대한 모든 네트워크 트래픽을 로깅해야 합니다. 회사는 로그 정보를 사용하여 보안 사건 발생 시 트래픽 흐름을 모니터링하고 식별합니다. 정보는 12개월 동안 보관되어야 하지만 처음 90일 이후에는 거의 액세스되지 않습니다. 회사는 vpc-id, subnet-id 및 tcp-flags 필드를 포함하는 메타데이터를 볼 수 있어야 합니다. 어느 솔루션이 가장 낮은 비용으로 이 요구 사항을 충족합니까?",
    "options": {
      "A": "기본 필드를 사용하여 VPC Flow Logs를 구성합니다. 로그를 Amazon CloudWatch Logs에 저장합니다.",
      "B": "모든 AWS 리소스에서 Traffic Mirroring을 구성하여 Network Load Balancer로 가리키고 미러된 트래픽을 모니터링 인스턴스로 보냅니다.",
      "C": "추가 사용자 정의 형식 필드를 사용하여 VPC Flow Logs를 구성합니다. 로그를 Amazon S3에 저장합니다.",
      "D": "추가 사용자 정의 형식 필드를 사용하여 VPC Flow Logs를 구성합니다. 로그를 Amazon CloudWatch Logs에 저장합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ VPC Flow Logs 커스텀 필드 — vpc-id, subnet-id, tcp-flags 등\n▸ S3 저장 → CloudWatch Logs보다 저비용 (장기 보관)\n▸ 12개월 보관, 90일 후 가끔 액세스 → S3 저비용 옵션\n\n【정답 포인트】\n▸ 기본 필드는 vpc-id, subnet-id, tcp-flags 미포함 → 커스텀 필드 필수\n▸ 장기 저비용 저장 → S3 (CloudWatch Logs는 비싼 장기 저장소)\n▸ S3는 Athena로 쿼리 가능 (로그 분석 용도)\n▸ CloudWatch Logs는 실시간 모니터링 용도. 장기 보관 비용 높음.\n\n【오답 체크】\n(A) 기본 필드는 vpc-id, subnet-id만 포함. tcp-flags 없음.\n(B) Traffic Mirroring은 전체 트래픽 복사. 비용 매우 높음.\n(D) CloudWatch Logs는 장기 보관 비용 높음 (월별 로그 데이터 비용).\n\n【시험 포인트】\n장기 저비용 저장 → S3 (특히 90일 후 가끔 액세스)\n커스텀 필드 → VPC Flow Logs 커스텀 포맷\nCloudWatch Logs → 실시간 모니터링, 단기 저장용\nVPC Flow Logs 기본 필드 한계 → 커스텀 필드 구성 필수",
    "en_q": "A company uses multiple AWS accounts and VPCs in a single AWS Region. The company must log all network traffic for Amazon EC2 instances and Amazon RDS databases. The company will use the log information to monitor and identify traffic flows in the event of a security incident. The information must be retained for 12 months but will be accessed infrequently after the first 90 days. The company must be able to view metadata that includes the vpc-id, subnet-id: and tcp-flags fields. Which solution will meet these requirements at the LOWEST cost?",
    "en_opts": {
      "A": "Configure VPC flow logs with the default fields Store the logs in Amazon CloudWatch Logs.",
      "B": "Configure Traffic Mirroring on all AWS resources to point to a Network Load Balancer that will send the mirrored traffic to monitoring instances.",
      "C": "Configure VPC flow logs with additional custom format fields Store the logs in Amazon S3.",
      "D": "Configure VPC flow logs with additional custom format fields Store the logs in Amazon CloudWatch Logs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116579-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 158,
    "question": "네트워크 엔지니어가 글로벌 소매 회사의 네트워크 설정을 평가하고 있습니다. 회사는 온프레미스 데이터센터와 AWS 클라우드 간에 AWS Direct Connect 연결을 갖고 있습니다. 회사는 eu-west-2 지역에 AWS 리소스를 보유하고 있습니다. 이러한 리소스는 Transit Gateway에 연결된 여러 VPC로 구성됩니다. 회사는 최근 eu-central-1 지역에서 이 지역의 사용자에게 가까운 단일 VPC에 몇 가지 AWS 리소스를 프로비저닝했습니다. 네트워크 엔지니어는 eu-central-1의 리소스를 온프레미스 데이터센터 및 eu-west-2의 리소스와 연결해야 합니다. 솔루션은 Direct Connect 연결의 변경을 최소화해야 합니다. 네트워크 엔지니어는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "새 가상 프라이빗 게이트웨이를 생성합니다. 새 가상 프라이빗 게이트웨이를 eu-central-1의 VPC에 연결합니다. Transit VIF를 사용하여 VPC와 Direct Connect 라우터를 연결합니다.",
      "B": "eu-central-1에서 새 Transit Gateway를 생성합니다. eu-west-2의 Transit Gateway에 대한 피어링 첨부 요청을 생성합니다. eu-central-1의 Transit Gateway 라우팅 테이블에 Transit Gateway 피어링 첨부를 가리키는 정적 경로를 추가합니다. 피어링 요청을 수락합니다. eu-west-2의 Transit Gateway 라우팅 테이블에 새 Transit Gateway 피어링 첨부를 가리키는 정적 경로를 추가합니다.",
      "C": "eu-central-1에서 새 Transit Gateway를 생성합니다. AWS Site-to-Site VPN 연결을 사용하여 두 Transit Gateway를 피어링합니다. eu-central-1의 Transit Gateway 라우팅 테이블에 Transit Gateway VPN 첨부를 가리키는 정적 경로를 추가합니다. eu-west-2의 Transit Gateway 라우팅 테이블에 새 Transit Gateway 피어링 첨부를 가리키는 정적 경로를 추가합니다.",
      "D": "새 가상 프라이빗 게이트웨이를 생성합니다. 새 가상 프라이빗 게이트웨이를 eu-central-1의 VPC에 연결합니다. 공용 VIF를 사용하여 VPC와 Direct Connect 라우터를 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Transit Gateway Peering — 다중 지역 TGW 간 연결\n▸ Direct Connect 최소화 — 기존 연결 재사용\n▸ 정적 경로 — TGW 라우팅 테이블 구성\n\n【정답 포인트】\n▸ eu-west-2의 기존 TGW 활용 → Direct Connect 변경 최소화\n▸ eu-central-1에 새 TGW 생성 → eu-west-2 TGW와 피어링\n▸ 피어링은 Direct Connect 추가 구성 불필요\n▸ 양쪽 TGW 라우팅 테이블에 피어링 경로 추가\n\n【오답 체크】\n(A) \n(D) 가상 프라이빗 게이트웨이는 단일 VPC용. 다중 VPC 연결에 부적합.\n(C) VPN 사용 시 Direct Connect 변경 필요. 피어링보다 설정 복잡.\n\n【시험 포인트】\nDirect Connect 기존 연결 유지 → Transit Gateway Peering 최적\n다중 지역 연결 → TGW Peering (VPN 피할 것)\nVPN vs Peering → Peering이 더 빠르고 간단 (TGW 간)",
    "en_q": "A network engineer is evaluating a network setup for a global retail company. The company has an AWS Direct Connect connection between its on-premises data center and the AWS Cloud. The company has AWS resources in the eu-west-2 Region. These resources consist of multiple VPCs that are attached to a transit gateway. The company recently provisioned a few AWS resources in the eu-central-1. Region in a single VPC close to its users in this area. The network engineer must connect the resources in eu-central-1 with the on-premises data center and the resources in eu-west-2. The solution must minimize changes to the Direct Connect connection. What should the network engineer do to meet these requirements?",
    "en_opts": {
      "A": "Create a new virtual private gateway. Attach the new virtual private gateway to the VPC in eu-central-1. Use a transit VIF to connect the VPC and the Direct Connect router.",
      "B": "Create a new transit gateway in eu-central-1. Create a peering attachment request to the transit gateway in eu-west-2. Add a static route in the transit gateway route table in eu-central-1 to point to the transit gateway peering attachment. Accept the peering request. Add a static route in the transit gateway route table in eu-west-2 to point to the new transit gateway peering attachment.",
      "C": "Create a new transit gateway in eu-central-1. Use an AWS Site-to-Site VPN connection to peer both transit gateways. Add a static route in the transit gateway route table in eu-central-1 to point to the transit gateway VPN attachment. Add a static route in the transit gateway route table in eu-west-2 to point to the new transit gateway peering attachment.",
      "D": "Create a new virtual private gateway. Attach the new virtual private gateway to the VPC in eu-central-1. Use a public VIF to connect the VPC and the Direct Connect router."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116849-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 159,
    "question": "회사는 회사 사무실에서 ap-southeast-2 지역의 VPC로 2Gbps AWS Direct Connect 호스팅 연결을 보유하고 있습니다. 네트워크 엔지니어는 동일 지역의 다른 Direct Connect 위치에서 5Gbps Direct Connect 호스팅 연결을 추가합니다. 호스팅 연결은 사무실의 다른 라우터에 연결되어 있으며 그 사이에 iBGP 세션이 실행 중입니다. 네트워크 엔지니어는 VPC가 5Gbps 호스팅 연결을 사용하여 사무실로 트래픽을 라우팅하도록 하려고 합니다. 5Gbps 호스팅 연결이 다운되면 2Gbps 호스팅 연결으로 장애 조치가 발생해야 합니다. 어느 솔루션이 이 요구 사항을 충족합니까?",
    "options": {
      "A": "2Gbps 연결에 연결된 라우터에서 아웃바운드 BGP 정책을 구성합니다. AWS에 더 긴 AS_PATH 속성을 가진 경로를 광고합니다.",
      "B": "2Gbps 연결에 연결된 라우터에서 더 긴 프리픽스 경로를 광고합니다.",
      "C": "5Gbps 연결에 연결된 라우터에서 덜 구체적인 경로를 광고합니다.",
      "D": "5Gbps 연결에 연결된 라우터에서 아웃바운드 BGP 정책을 구성합니다. AWS에 더 긴 AS_PATH 속성을 가진 경로를 광고합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ BGP 경로 선택 — AS_PATH 길이가 짧을수록 우선\n▸ 기본 경로 — 5Gbps 사용 (정상 시)\n▸ 장애 조치 — 5Gbps 실패 시 2Gbps로 전환\n\n【정답 포인트】\n▸ 5Gbps를 우선 사용 → AS_PATH 길이 짧음\n▸ 2Gbps는 백업 → AS_PATH 길이 길게 (더 큰 값)\n▸ 2Gbps 라우터에서 아웃바운드 정책으로 더 긴 AS_PATH 광고\n▸ AWS는 더 짧은 AS_PATH 경로 선호 → 5Gbps 선택\n▸ 5Gbps 실패 시 AS_PATH 경로만 가능 → 자동 장애 조치\n\n【오답 체크】\n(B) 긴 프리픽스는 목적지별로 다름. AS_PATH 제어 불가.\n(C) 덜 구체적인 경로는 전역 정책. 세밀한 제어 어려움.\n(D) 5Gbps에서 긴 AS_PATH 광고 → 우선 경로가 덜 선호됨. 역효과.\n\n【시험 포인트】\nBGP 경로 선택 순서: AS_PATH 길이 < Metric 값\n2Gbps 백업용 → 더 긴 AS_PATH 광고\n5Gbps 우선 → 더 짧은 AS_PATH 자동\niBGP 세션 = 로컬 라우터 간 동기화",
    "en_q": "A company has a 2 Gbps AWS Direct Connect hosted connection from the company's office to a VPC in the ap-southeast-2 Region. A network engineer adds a 5 Gbps Direct Connect hosted connection from a different Direct Connect location in the same Region. The hosted connections are connected to different routers from the office with an iBGP session running in between the routers. The network engineer wants to ensure that the VPC uses the 5 Gbps hosted connection to route traffic to the office. Failover to the 2 Gbps hosted connection must occur when the 5 Gbps hosted connection is down. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure an outbound BGP policy from the router that is connected to the 2 Gbps connection. Advertise routes with a longer AS_PATH attribute to AWS.",
      "B": "Advertise a longer prefix route from the router that is connected to the 2 Gbps connection.",
      "C": "Advertise a less specific route from the router that is connected to the 5 Gbps connection.",
      "D": "Configure an outbound BGP policy from the router that is connected to the 5 Gbps connection. Advertise routes with a longer AS_PATH attribute to AWS."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116583-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 160,
    "question": "ecommerce 회사는 Amazon Route 53에서 호스팅되는 모든 도메인 이름에 추가 보안 제어를 구현해야 합니다. 회사의 새로운 정책은 회사의 도메인 이름에 대한 모든 쿼리에 대한 데이터 인증 및 데이터 무결성 확인이 필요합니다. 현재 Route 53 아키텍처에는 4개의 공개 호스팅 영역이 있습니다. 네트워크 엔지니어는 호스팅 영역에서 DNS 보안 확장(DNSSEC) 서명 및 유효성 검사를 구현해야 합니다. 솔루션은 경고 기능을 포함해야 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까?(3가지를 선택하세요.)",
    "options": {
      "A": "Route 53에 대해 DNSSEC 서명을 활성화합니다. Route 53이 AWS Key Management Service(AWS KMS)의 고객 관리형 키를 기반으로 KSK(Key-Signing Key)를 생성하도록 요청합니다.",
      "B": "Route 53에 대해 DNSSEC 서명을 활성화합니다. Route 53이 AWS Key Management Service(AWS KMS)의 고객 관리형 키를 기반으로 ZSK(Zone-Signing Key)를 생성하도록 요청합니다.",
      "C": "각 하위 도메인에 Delegation Signer(DS) 레코드를 추가하여 호스팅 영역에 대한 신뢰 체인을 생성합니다.",
      "D": "상위 영역에 Delegation Signer(DS) 레코드를 추가하여 호스팅 영역에 대한 신뢰 체인을 생성합니다.",
      "E": "DNSSECInternalFailure 오류 또는 DNSSECKeySigningKeysNeedingAction 오류가 감지될 때마다 경고를 제공하는 Amazon CloudWatch 경보를 설정합니다.",
      "F": "DNSSECInternalFailure 오류 또는 DNSSECKeySigningKeysNeedingAction 오류가 감지될 때마다 경고를 제공하는 AWS CloudTrail 경보를 설정합니다."
    },
    "answer": "ADE",
    "explanation": "【핵심 용어】\n▸ DNSSEC KSK (Key-Signing Key) — 영역 서명 키 서명용\n▸ DNSSEC ZSK (Zone-Signing Key) → KMS 커스텀 키 필요 안 함\n▸ DS (Delegation Signer) — 상위 영역에만 추가 (신뢰 체인)\n▸ CloudWatch 경보 — DNSSEC 오류 감지\n\n【정답 포인트】\n▸ \n(A) KSK 생성 필수 — KMS 기반 (고객 관리 키)\n▸ \n(D) DS 레코드는 상위 영역에 추가 (하위 도메인 아님)\n▸ \n(E) CloudWatch로 DNSSEC 오류 모니터링\n▸ \n(B) ZSK는 자동 생성됨 (KMS 커스텀 키 불필요)\n▸ \n(C) 하위 도메인에 DS 추가는 잘못된 설정\n▸ (F) CloudTrail은 API 호출 기록. DNSSEC 오류 모니터링 불가\n\n【오답 체크】\n(B) ZSK 자동 생성. KMS 설정 불필요. 정책 요구 아님.\n(C) DS 레코드는 상위 영역에만. 하위 도메인 추가 오류.\n(F) CloudTrail은 DNSSEC 오류 감지 못함. CloudWatch 사용.\n\n【시험 포인트】\nDNSSEC 구현 = KSK (필수) + ZSK (자동)\n신뢰 체인 = 상위 영역 DS 레코드만\nDNSSEC 모니터링 = CloudWatch (CloudTrail 아님)\nRoute 53 DNSSEC 경고 = CloudWatch 알람",
    "en_q": "An ecommerce company needs to implement additional security controls on all its domain names that are hosted in Amazon Route 53. The company's new policy requires data authentication and data integrity verification for all queries to the company's domain names. The current Route 53 architecture has four public hosted zones. A network engineer needs to implement DNS Security Extensions (DNSSEC) signing and validation on the hosted zones. The solution must include an alert capability. Which combination of steps will meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Enable DNSSEC signing for Route 53 Request that Route 53 create a key-signing key (KSK) based on a customer managed key in AWS Key Management Service (AWS KMS).",
      "B": "Enable DNSSEC signing for Route 53 Request that Route 53 create a zone-signing key (ZSK) based on a customer managed key in AWS Key Management Service (AWS KMS).",
      "C": "Create a chain of trust for the hosted zones by adding a Delegation Signer (DS) record for each subdomain",
      "D": "Create a chain of trust for the hosted zones by adding a Delegation Signer (DS) record to the parent zone.",
      "E": "Set up an Amazon CloudWatch alarm that provides an alert whenever a DNSSECInternalFailure error or DNSSECKeySigningKeysNeedingAction error is detected.",
      "F": "Set up an AWS CloudTrail alarm that provides an alert whenever a DNSSECInternalFailure error or DNSSECKeySigningKeysNeedingAction error is detected."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116439-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 161,
    "question": "us-east-1 지역에 위치한 금융 회사는 AWS에 대한 안전한 연결을 설립해야 합니다. 회사는 두 개의 온프레미스 데이터센터를 보유하고 있으며 각각 동일 지역 내에 위치합니다. 회사의 네트워크 팀은 신뢰할 수 있고 일관된 연결로 AWS 환경에 대한 하이브리드 연결을 설정해야 합니다. 연결은 AWS 환경 내 회사의 프라이빗 리소스에 액세스를 제공해야 합니다. 리소스는 us-east-1 및 us-west-2 지역에 위치합니다. 연결은 회사 네트워크의 리소스가 동일한 연결을 통해 Amazon S3로 대량의 데이터를 보낼 수 있도록 허용해야 합니다. 규정 준수 요구 사항을 충족하려면 연결이 가용성이 높아야 하며 온프레미스 위치와 AWS의 모든 서비스 간에 전송되는 모든 패킷에 대해 암호화를 제공해야 합니다. 이러한 요구 사항을 충족하기 위해 네트워크 팀이 수행해야 할 단계 조합은 무엇입니까?(2가지를 선택하세요.)",
    "options": {
      "A": "프라이빗 VIF를 설정하여 Amazon S3로 데이터를 보냅니다. 프라이빗 VIF를 통해 AWS Site-to-Site VPN 연결을 사용하여 us-east-1 및 us-west-2의 VPC로 데이터 암호화를 전송합니다.",
      "B": "회사의 각 데이터센터에 AWS Direct Connect 연결을 설정합니다.",
      "C": "회사의 데이터센터 중 하나에서 us-east-1 및 us-west-2로 AWS Direct Connect 연결을 설정합니다.",
      "D": "공용 VIF를 설정하여 Amazon S3로 데이터를 보냅니다. 공용 VIF를 통해 AWS Site-to-Site VPN 연결을 사용하여 us-east-1 및 us-west-2의 VPC로 데이터 암호화를 전송합니다.",
      "E": "AWS Direct Connect 게이트웨이에 대한 Transit VIF를 설정하여 Amazon S3로 데이터를 보냅니다. Transit Gateway를 생성합니다. Transit Gateway를 Direct Connect 게이트웨이와 연결하여 회사의 데이터센터에서 us-east-1 및 us-west-2의 VPC로 안전한 통신을 제공합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ 다중 데이터센터 → 각각 Direct Connect 필요\n▸ S3 액세스 → VIF (public/private 모두 가능)\n▸ VPC 액세스 → 암호화 필수 (VPN 추가)\n▸ 다중 지역 (us-east-1, us-west-2) → Direct Connect Gateway\n\n【정답 포인트】\n▸ \n(B) 각 데이터센터에 Direct Connect 연결 → 고가용성, 신뢰성\n▸ \n(D) 공용 VIF는 S3 액세스 가능 (Private VIF는 VPC 전용)\n▸ VPN으로 암호화 → 모든 패킷 암호 필요\n▸ 공용 VIF + VPN = S3와 VPC 모두 암호화 액세스\n\n【오답 체크】\n(A) 프라이빗 VIF는 VPC 전용. S3 액세스 불가.\n(C) 단일 Direct Connect → 고가용성 미충족 (2개 데이터센터)\n(E) Transit VIF는 Transit Gateway 게이트웨이용. S3 직접 액세스 불가.\n\n【시험 포인트】\n고가용성 = 각 데이터센터 독립 Direct Connect\nS3 액세스 = 공용 VIF (프라이빗 VIF 불가)\n암호화 = VPN 터널 (모든 패킷)\n다중 지역 VPC = Direct Connect Gateway + Transit Gateway",
    "en_q": "A financial company that is located in the us-east-1 Region needs to establish secure connectivity to AWS. The company has two on-premises data centers, each located within the same Region. The company's network team needs to establish hybrid connectivity to its AWS environment with reliable and consistent connectivity. The connection must provide access to the company's private resources inside its AWS environment. The resources are located in the us-east-1 and us-west-2 Regions. The connection must allow resources from the corporate networks to send large amounts of data to Amazon S3 over the same connection. To meet compliance requirements, the connection must be highly available and must provide encryption for all packets that are sent between the on-premises location and any services on AWS. Which combination of steps should the network team take to meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Set up a private VIF to send data to Amazon S3. Use an AWS Site-to-Site VPN connection over the private VIF to encrypt data in transit to the VPCs in us-east-1 and us-west-2.",
      "B": "Set up an AWS Direct Connect connection to each of the company's data centers.",
      "C": "Set up an AWS Direct Connect connection from one of the company's data centers to us-east-1 and us-west-2.",
      "D": "Set up a public VIF to send data to Amazon S3. Use an AWS Site-to-Site VPN connection over the public VIF to encrypt data in transit to the VPCs in us-east-1 and us-west-2.",
      "E": "Set up a transit VIF for an AWS Direct Connect gateway to send data to Amazon S3. Create a transit gateway. Associate the transit gateway with the Direct Connect gateway to provide secure communications from the company's data centers to the VPCs in us-east-1 and us-west-2."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116842-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 162,
    "question": "글로벌 회사는 us-west-2 지역에서 AWS 리소스에 개인적으로 액세스하기 위한 하이브리드 아키텍처를 설계 중입니다. 회사의 기존 아키텍처는 RFC 1918 IP 주소 공간을 사용하는 VPC를 포함합니다. VPC는 AWS Direct Connect를 통해 온프레미스 데이터센터에 연결되어 있습니다. Amazon Route 53은 VPC 내 이름 확인을 제공합니다. 데이터센터의 로컬로 관리되는 DNS 서버는 온프레미스 호스트에 DNS 서비스를 제공합니다. 회사는 데이터센터의 애플리케이션이 us-west-2의 Amazon S3 버킷에서 객체를 다운로드해야 합니다. 회사는 공개 IP 주소 공간을 사용하지 않고 Amazon S3에 액세스하는 데 어느 솔루션을 사용할 수 있습니까?",
    "options": {
      "A": "VPC에서 S3 인터페이스 끝점을 생성합니다. 온프레미스 애플리케이션 구성을 업데이트하여 S3 인터페이스 끝점에 매핑되는 Region VPC 끝점 DNS 호스트 이름을 사용합니다.",
      "B": "VPC에서 S3 인터페이스 끝점을 생성합니다. VPC에서 Route 53 Resolver 인바운드 끝점을 구성합니다. 데이터센터 DNS 서버가 온프레미스에서 인바운드 끝점으로 S3 도메인에 대한 DNS 쿼리를 전달하도록 설정합니다.",
      "C": "VPC에서 S3 게이트웨이 끝점을 생성합니다. 온프레미스 애플리케이션 구성을 업데이트하여 S3 게이트웨이 끝점에 매핑되는 호스트 이름을 사용합니다.",
      "D": "VPC에서 S3 게이트웨이 끝점을 생성합니다. VPC에서 Route 53 Resolver 인바운드 끝점을 구성합니다. 데이터센터 DNS 서버가 온프레미스에서 인바운드 끝점으로 S3 도메인에 대한 DNS 쿼리를 전달하도록 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 Interface Endpoint — S3에 대한 프라이빗 액세스 (private DNS 필수)\n▸ Route 53 Resolver Inbound Endpoint — 온프레미스 DNS 쿼리 수신\n▸ Private Link — RFC 1918 범위 내 액세스\n\n【정답 포인트】\n▸ Interface Endpoint는 VPC 내 PrivateLink를 통한 액세스\n▸ Route 53 Resolver Inbound Endpoint로 온프레미스 DNS 조회 해석\n▸ 온프레미스 DNS 서버 → Resolver Inbound Endpoint → S3 interface endpoint\n▸ 모든 트래픽이 프라이빗 네트워크 내 (인터넷 경유 안 함)\n\n【오답 체크】\n(A) Interface Endpoint DNS 호스트명은 온프레미스에서 조회 불가 (Route 53 필요)\n(C) Gateway Endpoint는 라우팅 기반. DNS 호스트명으로 온프레미스 접근 불가.\n(D) Gateway Endpoint는 DNS 호스트명 미지원 (s3.amazonaws.com만). Route 53도 불필요.\n\n【시험 포인트】\nInterface Endpoint = PrivateLink + DNS (Resolver 필수)\nGateway Endpoint = 라우팅 기반 (DNS 호스트명 미지원)\n온프레미스 + AWS = Resolver Inbound Endpoint 필수\n프라이빗 액세스 = Interface Endpoint + Resolver 조합",
    "en_q": "A global company is designing a hybrid architecture to privately access AWS resources in the us-west-2 Region. The company's existing architecture includes a VPC that uses RFC 1918 IP address space. The VPC is connected to an on-premises data center over AWS Direct Connect Amazon Route 53 provides name resolution within the VPC. Locally managed DNS servers in the data center provide DNS services to the on-premises hosts. The company has applications in the data center that need to download objects from an Amazon S3 bucket in us-west-2. Which solution can the company use to access Amazon S3 without using the public IP address space?",
    "en_opts": {
      "A": "Create an S3 interface endpoint in the VPC. Update the on-premises application configuration to use the Regional VPC endpoint DNS hostname that is mapped to the S3 interface endpoint.",
      "B": "Create an S3 interface endpoint in the VPC. Configure a Route 53 Resolver inbound endpoint in the VPC. Set up the data center DNS servers to forward DNS queries for the S3 domain from on premises to the inbound endpoint.",
      "C": "Create an S3 gateway endpoint in the VPUpdate the on-premises application configuration to use the hostname that is mapped to the S3 gateway endpoint.",
      "D": "Create an S3 gateway endpoint in the VPC. Configure a Route 53 Resolver inbound endpoint in the VPC. Set up the data center DNS servers to forward DNS queries for the S3 domain from on premises to the inbound endpoint."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116597-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 163,
    "question": "회사는 AWS에 중요 애플리케이션을 마이그레이션하고 있습니다. 회사는 Transit Gateway로 연결된 여러 계정 및 VPC를 가지고 있습니다. 네트워크 엔지니어는 VPC 네트워크 경계를 떠나는 모든 트래픽에 대해 심층 패킷 검사를 수행하는 솔루션을 설계해야 합니다. 검사된 모든 트래픽 및 트래픽에 대해 수행된 작업은 중앙 로그 계정에 로깅되어야 합니다. 어느 솔루션이 가장 적은 관리 오버헤드로 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Transit Gateway에 대한 첨부 파일을 포함하는 중앙 네트워크 VPC를 생성합니다. VPC 및 Transit Gateway 라우팅 테이블을 업데이트하여 새 첨부 파일을 지원합니다. 중앙 네트워크 VPC에 타사 차세대 방화벽 어플라이언스로 지원되는 AWS Gateway Load Balancer를 배포합니다. 심층 패킷 검사 규칙을 포함하는 정책을 생성합니다. 방화벽 어플라이언스에 정책을 연결합니다. 중앙 로그 계정에서 Amazon S3 버킷을 생성합니다. 방화벽 어플라이언스가 S3 버킷에 네트워크 흐름 로그를 캡처하고 저장하도록 구성합니다.",
      "B": "Transit Gateway에 대한 첨부 파일을 포함하는 중앙 네트워크 VPC를 생성합니다. VPC 및 Transit Gateway 라우팅 테이블을 업데이트하여 새 첨부 파일을 지원합니다. 중앙 네트워크 VPC에 타사 차세대 방화벽 어플라이언스로 지원되는 AWS Application Load Balancer를 배포합니다. 심층 패킷 검사 규칙을 포함하는 정책을 생성합니다. 방화벽 어플라이언스에 정책을 연결합니다. 중앙 로그 계정에 syslog 서버를 생성합니다. 방화벽 어플라이언스가 syslog 서버에 네트워크 흐름 로그를 캡처하고 저장하도록 구성합니다.",
      "C": "각 VPC에 네트워크 ACL과 보안 그룹을 배포합니다. 보안 그룹을 활성 네트워크 인터페이스에 연결합니다. 네트워크 ACL을 VPC 서브넷과 연결합니다. 네트워크 ACL 및 보안 그룹 규칙을 생성하여 서브넷 및 네트워크 인터페이스 간의 필수 트래픽 흐름만 허용합니다. 중앙 로그 계정에서 Amazon S3 버킷을 생성합니다. 모든 트래픽 흐름을 S3 버킷에 캡처하고 저장하는 VPC Flow Log를 구성합니다.",
      "D": "중앙 로그 VPC를 생성하고 Transit Gateway에 대한 첨부 파일을 생성합니다. VPC 및 Transit Gateway 라우팅 테이블을 업데이트하여 새 첨부 파일을 지원합니다. 타사 차세대 침입 탐지 시스템(IDS) 보안 어플라이언스로 지원되는 AWS Network Load Balancer(NLB)를 중앙 VPC에 배포합니다. 침입 서명을 모니터링하기 위해 보안 어플라이언스에서 규칙을 활성화합니다. 각 네트워크 인터페이스에 대해 VPC Traffic Mirroring 세션을 생성하여 트래픽을 중앙 VPC의 NLB로 보냅니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Gateway Load Balancer — Deep Packet Inspection 지원\n▸ Transit Gateway 중앙화 — 모든 VPC 트래픽 검사\n▸ 관리 오버헤드 최소화 — 중앙 지점 단일\n\n【정답 포인트】\n▸ Gateway Load Balancer는 타사 방화벽 어플라이언스 지원\n▸ 중앙 네트워크 VPC → 모든 VPC에서 트래픽 라우팅\n▸ DPI 정책 → 방화벽 어플라이언스 규칙으로 적용\n▸ S3 로깅 → 중앙 계정에서 관리\n▸ 단일 지점 관리 → 모든 VPC 트래픽 검사\n\n【오답 체크】\n(B) ALB는 DPI 미지원 (L7만). Gateway LB만 가능.\n(C) 각 VPC에 ACL/보안그룹 = 높은 관리 오버헤드. DPI 기능 없음.\n(D) Traffic Mirroring은 각 인터페이스 설정 필요 (확장성 낮음). NLB는 DPI 미지원.\n\n【시험 포인트】\nDPI (Deep Packet Inspection) = Gateway Load Balancer\n중앙화된 보안 → Transit Gateway + 중앙 검사 VPC\nMulti-VPC 관리 → 단일 관리 지점\nFirewall 정책 = DPI 규칙 (방화벽 어플라이언스)\nTraffic Mirroring = 모니터링 용도 (DPI 아님)",
    "en_q": "A company is migrating critical applications to AWS. The company has multiple accounts and VPCs that are connected by a transit gateway. A network engineer must design a solution that performs deep packet inspection for any traffic that leaves a VPC network boundary. All inspected traffic and the actions that are taken on the traffic must be logged in a central log account. Which solution will meet these requirements with the LEAST administrative overhead?",
    "en_opts": {
      "A": "Create a central network VPC that includes an attachment to the transit gateway. Update the VPC and transit gateway route tables to support the new attachment. Deploy an AWS Gateway Load Balancer that is backed by third-party, next-generation firewall appliances to the central network VPC. Create a policy that contains the rules for deep packet inspection. Attach the policy to the firewall appliances. Create an Amazon S3 bucket in the central log account. Configure the firewall appliances to capture and save the network flow logs to the S3 bucket.",
      "B": "Create a central network VPC that includes an attachment to the transit gateway. Update the VPC and transit gateway route tables to support the new attachment. Deploy an AWS Application Load Balancer that is backed by third-party, next-generation firewall appliances to the central network VPC. Create a policy that contains the rules for deep packet inspection. Attach the policy to the firewall appliances. Create a syslog server in the central log account. Configure the firewall appliances to capture and save the network flow logs to the syslog server.",
      "C": "Deploy network ACLs and security groups to each VPAttach the security groups to active network interfaces. Associate the network ACLs with VPC subnets. Create rules for the network ACLs and security groups to allow only the required traffic flows between subnets and network interfaces. Create an Amazon S3 bucket in the central log account. Configure a VPC flow log that captures and saves all traffic flows to the S3 bucket.",
      "D": "Create a central log VPC and an attachment to the transit gateway. Update the VPC and transit gateway route tables to support the new attachment. Deploy an AWS Network Load Balancer (NLB) that is backed by third-party, next-generation intrusion detection system (IDS) security appliances to the central VPC. Activate rules on the security appliances to monitor for intrusion signatures. For each network interface, create a VPC Traffic Mirroring session that sends the traffic to the central VPC's NLB."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116844-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 164,
    "question": "회사는 미국에 온프레미스 데이터센터를 보유하고 있습니다. 데이터센터는 AWS Direct Connect 연결로 AWS에 연결되어 있습니다. 데이터센터는 Direct Connect 게이트웨이에 연결된 프라이빗 VIF를 가지고 있습니다. 최근에 회사는 유럽에 새 데이터센터를 개설했습니다. 새 Direct Connect 연결을 유럽 데이터센터와 AWS 간에 설정했습니다. 새 프라이빗 VIF가 기존 Direct Connect 게이트웨이에 연결됩니다. 회사는 Direct Connect SiteLink를 사용하여 미국의 데이터센터와 유럽의 데이터센터 간에 프라이빗 네트워크를 설정하려고 합니다. 어느 솔루션이 가장 효율적인 운영 방식으로 이 요구 사항을 충족합니까?",
    "options": {
      "A": "각 데이터센터에서 새 공용 VIF를 생성합니다. 새 공용 VIF에서 SiteLink를 활성화합니다.",
      "B": "각 데이터센터에서 새 Transit VIF를 생성합니다. 새 Transit VIF에서 SiteLink를 활성화합니다.",
      "C": "각 데이터센터에서 기존 VIF를 사용합니다. 기존 프라이빗 VIF에서 SiteLink를 활성화합니다.",
      "D": "데이터센터 간에 새 AWS Site-to-Site VPN 연결을 생성합니다. 새 연결을 SiteLink 사용하도록 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Direct Connect SiteLink — 데이터센터 간 비용 절감 연결\n▸ 기존 VIF 재사용 → 운영 비용 최소화\n▸ 프라이빗 VIF — AWS 리소스 액세스 용도\n\n【정답 포인트】\n▸ SiteLink는 기존 Direct Connect 연결에서 활성화 가능\n▸ 새 VIF 생성 불필요 → 기존 프라이빗 VIF 사용\n▸ 프라이빗 VIF에서 SiteLink 활성화 → 데이터센터 간 통신\n▸ 가장 운영 효율적 (새 인프라 배포 없음)\n\n【오답 체크】\n(A) 공용 VIF는 인터넷 경유. SiteLink에 부적합.\n(B) Transit VIF는 Transit Gateway 용도. 데이터센터 간 통신 미설계.\n(D) Site-to-Site VPN은 인터넷 기반. SiteLink는 Direct Connect 전용.\n\n【시험 포인트】\nSiteLink = Direct Connect 기반 데이터센터 간 연결\n프라이빗 VIF = AWS 리소스 및 SiteLink 통신 가능\n기존 인프라 재사용 = 운영 효율성 최고\nPublic/Transit VIF = SiteLink 미지원",
    "en_q": "A company has an on-premises data center in the United States. The data center is connected to AWS by an AWS Direct Connect connection. The data center has a private VIF that is connected to a Direct Connect gateway. Recently, the company opened a new data center in Europe and established a new Direct Connect connection between the Europe data center and AWS. A new private VIF connects to the existing Direct Connect gateway. The company wants to use Direct Connect SiteLink to set up a private network between the data center in the United States and the data center in Europe. Which solution will meet these requirements in the MOST operationally efficient manner?",
    "en_opts": {
      "A": "Create a new public VIF from each data center. Enable SiteLink on the new public VIFs.",
      "B": "Create a new transit VIF from each data center. Enable SiteLink on the new transit VIFs.",
      "C": "Use the existing VIF from each data center. Enable SiteLink on the existing private VIFs.",
      "D": "Create a new AWS Site-to-Site VPN connection between the data centers. Configure the new connection to use SiteLink."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116845-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 165,
    "question": "회사는 온프레미스 데이터센터와 AWS 클라우드 간의 새로운 AWS Direct Connect 연결을 확보했습니다. 회사는 이 연결에서 새 프라이빗 VIF를 생성했습니다. 그러나 VIF 상태는 DOWN입니다. 네트워크 엔지니어는 AWS 관리 콘솔의 정보를 기반으로 물리적 연결 상태가 UP 및 RUNNING임을 확인합니다. 네트워크 엔지니어는 고객 Direct Connect 라우터를 확인하고 프라이빗 VIF에 대해 생성된 VLAN 인터페이스의 ARP 항목을 볼 수 있습니다. 프라이빗 VIF의 상태가 DOWN인 원인은 무엇입니까?",
    "options": {
      "A": "고객 Direct Connect 라우터에서 ICMP가 차단되었습니다.",
      "B": "고객 Direct Connect 라우터에서 TCP 포트 179가 차단되었습니다.",
      "C": "IEEE 802.1Q VLAN 식별자가 고객 Direct Connect 라우터에서 잘못 구성되었습니다.",
      "D": "회사가 고객 Direct Connect 라우터에서 IEEE 802.1ad 대신 802.1Q를 구성했습니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ BGP (Border Gateway Protocol) — TCP 포트 179\n▸ VIF 상태 DOWN — BGP 세션 미확립\n▸ ARP 항목 존재 — L2 연결 정상\n▸ 물리적 연결 UP — L1 정상\n\n【정답 포인트】\n▸ ARP 항목 존재 = L2 (VLAN) 정상\n▸ VIF DOWN = BGP 세션 미확립\n▸ BGP = TCP 179 포트 필수\n▸ 포트 179 차단 → BGP 핸드셰이크 실패 → VIF DOWN\n\n【오답 체크】\n(A) ICMP는 핸드셰이크에 불필수 (Traceroute/ping 기능만)\n(C) 802.1Q VLAN은 ARP 응답으로 검증됨. 이미 정상.\n(D) 802.1ad는 다른 프로토콜. 802.1Q 환경에서는 작동 안 함 (ARP 실패 시)\n\n【시험 포인트】\nVIF 상태 DOWN의 일반적 원인 = BGP 미확립\nBGP 포트 = TCP 179 (UDP 179 아님)\nL2 정상 (ARP OK) + L3 불가 = 포트 필터링 의심\nDirect Connect 표준 포트 179 차단 = VIF 다운",
    "en_q": "A company has a new AWS Direct Connect connection between its on-premises data center and the AWS Cloud. The company has created a new private VIF on this connection. However, the VIF status is DOWN. A network engineer verifies that the physical connection status is UP and RUNNING based on information from the AWS Management Console. The network engineer checks the customer Direct Connect router and can see the ARP entry for the VLAN interface created for the private VIF at AWS. What could be causing the private VIF to have a DOWN status?",
    "en_opts": {
      "A": "ICMP is blocked on the customer Direct Connect router.",
      "B": "TCP port 179 is blocked on the customer Direct Connect router.",
      "C": "The IEEE 802.1Q VLAN identifier is misconfigured on the customer Direct Connect router.",
      "D": "The company has configured IEEE 802.1ad instead of 802.1Q on the customer Direct Connect router."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116584-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 166,
    "question": "AnyCompany는 Example Corp을 인수했습니다. AnyCompany의 인프라는 모두 온프레미스이고 Example Corp의 인프라는 완전히 AWS 클라우드에 있습니다. 두 회사는 AWS Direct Connect와 AWS Transit Gateway를 사용하여 서로 간의 연결을 설정합니다. Example Corp은 인터넷 게이트웨이가 없는 VPC의 두 가용 영역에 새 애플리케이션을 배포했습니다. VPC의 CIDR 범위는 10.0.0.0/16입니다. Example Corp은 AnyCompany의 온프레미스에 배포된 애플리케이션에 액세스해야 합니다. 규정 준수 요구 사항으로 인해 Example Corp은 승인된 IP 주소의 제한된 연속 블록(10.1.0.0/24)을 통해 애플리케이션에 액세스해야 합니다. 네트워크 엔지니어는 가용성이 높은 솔루션을 구현해야 합니다. 네트워크 엔지니어는 VPC에 새 CIDR 범위 10.1.0.0/24를 추가하여 시작합니다. 네트워크 엔지니어가 다음으로 해야 할 일은 무엇입니까?",
    "options": {
      "A": "각 가용 영역에서 허용된 IP 주소 범위의 일부를 사용하는 서브넷을 생성합니다. 각 새 서브넷에 공용 NAT 게이트웨이를 생성합니다. 다른 서브넷과 연결된 라우팅 테이블을 업데이트하여 애플리케이션 트래픽을 해당 가용 영역의 공용 NAT 게이트웨이로 라우팅합니다. 공용 NAT 게이트웨이 서브넷과 연결된 라우팅 테이블에 경로를 추가하여 애플리케이션을 위한 트래픽을 Transit Gateway로 보냅니다.",
      "B": "각 가용 영역에서 허용된 IP 주소 범위의 일부를 사용하는 서브넷을 생성합니다. 각 새 서브넷에 프라이빗 NAT 게이트웨이를 생성합니다. 다른 서브넷과 연결된 라우팅 테이블을 업데이트하여 애플리케이션 트래픽을 해당 가용 영역의 프라이빗 NAT 게이트웨이로 라우팅합니다. 프라이빗 NAT 게이트웨이 서브넷과 연결된 라우팅 테이블에 경로를 추가하여 애플리케이션을 위한 트래픽을 Transit Gateway로 보냅니다.",
      "C": "VPC에서 허용된 IP 주소 범위를 사용하는 서브넷을 생성합니다. 새 서브넷에 프라이빗 NAT 게이트웨이를 생성합니다. 다른 서브넷과 연결된 라우팅 테이블을 업데이트하여 애플리케이션 트래픽을 프라이빗 NAT 게이트웨이로 라우팅합니다. 프라이빗 NAT 게이트웨이 서브넷과 연결된 라우팅 테이블에 경로를 추가하여 애플리케이션을 위한 트래픽을 Transit Gateway로 보냅니다.",
      "D": "VPC에서 허용된 IP 주소 범위를 사용하는 서브넷을 생성합니다. 새 서브넷에 공용 NAT 게이트웨이를 생성합니다. 다른 서브넷과 연결된 라우팅 테이블을 업데이트하여 애플리케이션 트래픽을 공용 NAT 게이트웨이로 라우팅합니다. 공용 NAT 게이트웨이 서브넷과 연결된 라우팅 테이블에 경로를 추가하여 애플리케이션을 위한 트래픽을 Transit Gateway로 보냅니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Private NAT Gateway — VPC 내부 전용, 인터넷 게이트웨이 불필요\n▸ Public NAT Gateway — 인터넷 게이트웨이 필수\n▸ Transit Gateway → 온프레미스 연결\n▸ 고가용성 → 다중 AZ 배치\n\n【정답 포인트】\n▸ VPC에 인터넷 게이트웨이 없음 → Public NAT 불가능\n▸ Private NAT Gateway → Transit Gateway 경로만으로 충분\n▸ 각 AZ에 NAT 게이트웨이 배치 → 고가용성 확보\n▸ 소스 IP 10.1.0.0/24 유지 → NAT 변환으로 구현\n▸ 다중 AZ 배치 → 한 AZ 장애 시 다른 AZ 독립 운영\n\n【오답 체크】\n(A) Public NAT Gateway 필요 - VPC에 IGW 없으므로 불가능. Public NAT는 인터넷 게이트웨이를 필수로 요구합니다. (60~100자)\n(C) 단일 서브넷 배치 - 가용 영역 1개만 커버하므로 고가용성 미달. 각 AZ에 독립적인 NAT 필요합니다. (60~100자)\n(D) Public NAT Gateway 배치 - VPC에 인터넷 게이트웨이가 없으므로 Public NAT는 작동할 수 없습니다. (60~100자)\n\n【시험 포인트】\n▸ Private NAT = Transit Gateway와만 통신 (인터넷 경로 없음)\n▸ Public NAT = 인터넷 게이트웨이 필수 (여기서는 불가)\n▸ VPC에 IGW 없음 = Private NAT만 가능\n▸ 고가용성 = 각 AZ마다 독립적인 NAT 게이트웨이",
    "en_q": "AnyCompany has acquired Example Corp. AnyCompany's infrastructure is all on premises, and Example Corp's infrastructure is completely in the AWS Cloud. The companies are using AWS Direct Connect with AWS Transit Gateway to establish connectivity between each other. Example Corp has deployed a new application across two Availability Zones in a VPC with no internet gateway. The CIDR range for the VPC is 10.0.0.0/16. Example Corp needs to access an application that is deployed on premises by AnyCompany. Because of compliance requirements, Example Corp must access the application through a limited contiguous block of approved IP addresses (10.1.0.0/24). A network engineer needs to implement a highly available solution to achieve this goal. The network engineer starts by updating the VPC to add a new CIDR range of 10.1.0.0/24. What should the network engineer do next to meet the requirements?",
    "en_opts": {
      "A": "In each Availability Zone in the VPC, create a subnet that uses part of the allowed IP address range. Create a public NAT gateway in each of the new subnets. Update the route tables that are associated with other subnets to route application traffic to the public NAT gateway in the corresponding Availability Zone. Add a route to the route table that is associated with the subnets of the public NAT gateways to send traffic destined for the application to the transit gateway.",
      "B": "In each Availability Zone in the VPC, create a subnet that uses part of the allowed IP address range. Create a private NAT gateway in each of the new subnets. Update the route tables that are associated with other subnets to route application traffic to the private NAT gateway in the corresponding Availability Zone. Add a route to the route table that is associated with the subnets of the private NAT gateways to send traffic destined for the application to the transit gateway.",
      "C": "In the VPC, create a subnet that uses the allowed IP address range. Create a private NAT gateway in the new subnet. Update the route tables that are associated with other subnets to route application traffic to the private NAT gateway. Add a route to the route table that is associated with the subnet of the private NAT gateway to send traffic destined for the application to the transit gateway.",
      "D": "In the VPC, create a subnet that uses the allowed IP address range. Create a public NAT gateway in the new subnet. Update the route tables that are associated with other subnets to route application traffic to the public NAT gateway. Add a route to the route table that is associated with the subnet of the public NAT gateway to send traffic destined for the application to the transit gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116664-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 167,
    "question": "회사는 VPC에서 IP 주소 고갈 이벤트를 최근 경험했습니다. 이벤트는 서비스 용량에 영향을 미쳤습니다. VPC는 서로 다른 가용 영역에서 2개 이상의 서브넷을 보유합니다. 네트워크 엔지니어는 VPC의 리소스 전체에서 IP 주소 사용량을 모니터링하는 솔루션을 개발해야 합니다. 회사는 문제가 발생하기 전에 조치할 수 있도록 가능한 문제에 대한 알림을 받아야 합니다. 어느 솔루션이 가장 적은 운영 오버헤드로 이 요구 사항을 충족합니까?",
    "options": {
      "A": "새 최상위 풀을 사용하여 Amazon VPC IP Address Manager(IPAM)를 설정합니다. 최상위 풀에서 각 VPC에 대한 풀을 생성합니다. 각 VPC 풀에서 해당 VPC의 각 서브넷에 대한 풀을 생성합니다. VPC 풀 및 서브넷 풀에 대해 자동 가져오기 옵션을 켭니다. 가용성 제한 임계값에 도달하면 Amazon Simple Notification Service(Amazon SNS) 알림을 보내도록 Amazon CloudWatch 경보를 구성합니다.",
      "B": "각 서브넷에 대해 Amazon CloudWatch Logs에 로그 그룹을 설정합니다. 각 서브넷의 IP 주소 사용량을 읽고 로그 그룹에 메트릭을 게시하는 AWS Lambda 함수를 생성합니다. 가용성 제한 임계값에 도달하면 Amazon Simple Notification Service(Amazon SNS) 알림을 보내도록 Amazon CloudWatch 경보를 구성합니다.",
      "C": "각 서브넷에 대한 IP 주소 사용량에 대한 사용자 정의 Amazon CloudWatch 메트릭을 설정합니다. 각 서브넷의 IP 주소 사용량을 읽고 CloudWatch 메트릭 차원에 메트릭을 게시하는 AWS Lambda 함수를 생성합니다. Lambda 함수를 5분마다 실행하도록 예약합니다. 가용성 제한 임계값에 도달하면 Amazon Simple Notification Service(Amazon SNS) 알림을 보내도록 CloudWatch 경보를 구성합니다.",
      "D": "새 최상위 풀을 사용하여 Amazon VPC IP Address Manager(IPAM)를 설정합니다. 최상위 풀에서 각 VPC에 대한 풀을 생성합니다. 각 VPC 풀에서 해당 VPC의 각 서브넷에 대한 풀을 생성합니다. VPC 풀 및 서브넷 풀에 대해 자동 가져오기 옵션을 켭니다. 각 풀 가용성 제한 임계값을 모니터링하고 제한 임계값에 도달하면 Amazon Simple Notification Service(Amazon SNS) 알림을 보내는 Amazon EventBridge 규칙을 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ VPC IPAM — IP 주소 자동 관리 및 모니터링 서비스\n▸ 자동 가져오기 — VPC/서브넷 IP 범위 자동 추적\n▸ CloudWatch 경보 — 임계값 기반 자동 알림\n▸ 운영 오버헤드 최소화 — 자동화 우선\n\n【정답 포인트】\n▸ IPAM 설정 → VPC 계층별 풀 자동 생성\n▸ 자동 가져오기 활성화 → VPC/서브넷 IP 사용량 자동 추적\n▸ CloudWatch 경보 → 가용성 제한 임계값 기반 SNS 알림\n▸ SNS 통지 → 임계값 도달 시 즉시 관리자 알림\n▸ 수동 Lambda 또는 커스텀 메트릭 불필요 (자동화)\n\n【오답 체크】\n(B) CloudWatch Logs + Lambda 수동 구성 - 높은 운영 오버헤드. Lambda 함수 개발/관리 필요. (60~100자)\n(C) 커스텀 메트릭 + Lambda 스케줄링 - 5분 간격 주기 실행으로 비효율적. IPAM의 자동 추적 기능 미활용. (60~100자)\n(D) EventBridge 규칙 추가 - CloudWatch 경보만으로도 충분한데 EventBridge는 불필요. 추가 복잡도. (60~100자)\n\n【시험 포인트】\n▸ VPC IPAM = IP 주소 관리 전문 AWS 서비스\n▸ 자동 가져오기 = VPC/Subnet IP 범위 자동 검색\n▸ CloudWatch 경보 = IPAM 가용성 제한 기반 알림\n▸ Lambda/커스텀 메트릭 = 불필요한 복잡도 증가",
    "en_q": "A company recently experienced an IP address exhaustion event in its VPCs. The event affected service capacity. The VPCs hold two or more subnets in different Availability Zones. A network engineer needs to develop a solution that monitors IP address usage across resources in the VPCs. The company needs to receive notification about possible issues so that the company can act before an incident happens. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Set up Amazon VPC IP Address Manager (IPAM) with a new top-level pool. In the top-level pool, create a pool for each VPC. In each VPC pool, create a pool for each subnet in that VPC. Turn on the auto-import option for the VPC pools and the subnet pools. Configure an Amazon CloudWatch alarm to send an Amazon Simple Notification Service (Amazon SNS) notification if the availability limit threshold is reached.",
      "B": "Set up a log group in Amazon CloudWatch Logs for each subnet. Create an AWS Lambda function that reads each subnet's IP address usage and publishes metrics to the log group. Configure an Amazon CloudWatch alarm to send an Amazon Simple Notification Service (Amazon SNS) notification if the availability limit threshold is reached.",
      "C": "Set up a custom Amazon CloudWatch metric for IP address usage for each subnet. Create an AWS Lambda function that reads each subnet's IP address usage and publishes a CloudWatch metric dimension. Schedule the Lambda function to run every 5 minutes. Configure a CloudWatch alarm to send an Amazon Simple Notification Service (Amazon SNS) notification if the availability limit threshold is reached.",
      "D": "Set up Amazon VPC IP Address Manager (IPAM) with a new top-level pool. In the top-level pool, create a pool for each VPC. In each VPC pool, create a pool for each subnet in that VPC. Turn on the auto-import option for the VPC pools and the subnet pools. Configure an Amazon EventBridge rule that monitors each pool availability limit threshold and sends an Amazon Simple Notification Service (Amazon SNS) notification if the limit threshold is reached."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/116586-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 168,
    "question": "회사는 온프레미스 데이터센터와 AWS 클라우드에서 실행되는 서비스를 포함하는 하이브리드 IT 설정을 보유하고 있습니다. 회사는 AWS Direct Connect를 사용하여 데이터센터를 AWS에 연결하고 있습니다. 회사는 하나의 AWS Site-to-Site VPN 연결을 백업으로 사용하고 있으며 백업 연결 옵션이 항상 존재하기를 원합니다. 회사는 IPv6를 도입하여 이중 스택 아키텍처를 구현하고 있습니다. 어느 단계 조합이 가장 적은 시간에 데이터센터의 AWS 연결을 전환하는 데 도움이 될까요?(2가지를 선택하세요.)",
    "options": {
      "A": "IPv6 트래픽을 위한 새 Site-to-Site VPN 터널을 생성합니다.",
      "B": "데이터센터와 AWS 간에 새 이중 스택 Site-to-Site VPN 연결을 생성합니다. 라우팅을 프로비저닝합니다. 원본 Site-to-Site VPN 연결을 삭제합니다.",
      "C": "Direct Connect 연결에 새 이중 스택 공용 VIF를 연결합니다. Direct Connect 트래픽을 새 VIF로 마이그레이션합니다.",
      "D": "기존 VIF에 새 IPv6 피어를 추가합니다. 피어 라우터에서 Amazon에서 제공한 IPv6 주소를 사용합니다.",
      "E": "IPv6 트래픽을 기존 IPv4 터널 내의 터널로 전송합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ Dual-stack — IPv4 + IPv6 동시 지원\n▸ Direct Connect VIF — 가상 인터페이스 (기존 물리 연결 재사용)\n▸ Site-to-Site VPN — 백업 연결 (암호화 터널)\n▸ 최단 시간 → 기존 인프라 활용\n\n【정답 포인트】\n▸ \n(A) 기존 VPN 연결에 IPv6 터널 추가 - VPN 새로 생성하지 않고 기존 연결에 IPv6 터널만 추가로 빠른 배포\n▸ \n(D) Direct Connect VIF에 IPv6 피어 추가 - VIF 재생성 없이 기존 VIF에 피어 추가 (BGP 세션 확장)\n▸ 기존 물리 연결 재사용 → 프로비저닝 시간 단축\n▸ VPN + Direct Connect 모두 IPv6 지원 → 완전한 이중 스택\n\n【오답 체크】\n(B) 새 VPN 연결 생성 - 시간 소요. 기존 VPN 재사용이 아님. 추가 배포 기간 필요. (60~100자)\n(C) 새 VIF 생성 - VIF 추가 시간. 기존 VIF 활용하지 않으므로 비효율. 새로운 BGP 세션 필요. (60~100자)\n(E) IPv6 터널링 - IPv6을 IPv4 내에 캡슐화는 구식 방식. 네이티브 이중 스택 (A,D)이 표준. (60~100자)\n\n【시험 포인트】\n▸ 기존 연결 활용 = 최단 배포 시간\n▸ Direct Connect IPv6 = 피어 추가 (새 VIF 불필요)\n▸ VPN IPv6 = 새 터널 (기존 연결 확장)\n▸ Dual-stack = VPN + DX 모두 IPv6 지원 필수",
    "en_q": "A company has a hybrid IT setup that includes services that run in an on-premises data center and in the AWS Cloud. The company is using AWS Direct Connect to connect its data center to AWS. The company is using one AWS Site-to-Site VPN connection as backup and requires a backup connectivity option to always be present. The company is transitioning to IPv6 by implementing dual-stack architectures. Which combination of steps will transition the data center's connectivity to AWS in the LEAST amount of time? (Choose two.)",
    "en_opts": {
      "A": "Create a new Site-to-Site VPN tunnel for the IPv6 traffic.",
      "B": "Create a new dual-stack Site-to-Site VPN connection between the data center and AWS. Provision routing. Delete the original Site-to-Site VPN connection.",
      "C": "Associate a new dual-stack public VIF with the Direct Connect connection. Migrate the Direct Connect traffic to the new VIF.",
      "D": "Add a new IPv6 peer in the existing VIF. Use the IPv6 address provided by Amazon on the peer router.",
      "E": "Send IPv6 traffic between the data center and AWS in a tunnel inside the existing IPv4 tunnels."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/136610-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 169,
    "question": "회사는 AWS Transit Gateway를 통해 연결된 여러 VPC에 걸쳐 여러 AWS 지역에 새로운 애플리케이션을 배포하고 있습니다. VPC에는 프라이빗 서브넷과 공용 서브넷이 포함됩니다. 프라이빗 서브넷의 모든 아웃바운드 인터넷 트래픽을 감사하고 로깅해야 합니다. 회사의 네트워크 엔지니어는 AWS Network Firewall을 사용할 계획이며 Network Firewall을 통한 모든 트래픽이 감사 및 경고를 위해 완전히 로깅되는지 확인해야 합니다. 네트워크 엔지니어가 이 요구 사항을 충족하도록 Network Firewall 로깅을 구성해야 하는 방법은 무엇입니까?",
    "options": {
      "A": "Amazon CloudWatch에서 Network Firewall 로깅을 구성하여 모든 경고를 캡처합니다. Amazon CloudWatch Logs의 로그 그룹으로 로그를 보냅니다.",
      "B": "Network Firewall에서 Network Firewall 로깅을 구성하여 모든 경고 및 흐름 로그를 캡처합니다.",
      "C": "방화벽 끝점에 대해 VPC Flow Logs를 구성하여 Network Firewall 로깅을 구성합니다. Amazon CloudWatch Logs의 로그 그룹으로 로그를 보냅니다.",
      "D": "AWS CloudTrail을 구성하여 데이터 이벤트를 캡처함으로써 Network Firewall 로깅을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Network Firewall 로깅 — Alert Log + Flow Log 이원화\n▸ 완벽한 감시 — 모든 트래픽 기록\n▸ 감사 및 경고 — Alert Log 필수, Flow Log 보조\n\n【정답 포인트】\n▸ Network Firewall 로깅 설정 → Alert Log + Flow Log 동시 활성화\n▸ Alert Log = 정책 매칭 이벤트 (탐지된 트래픽)\n▸ Flow Log = 모든 네트워크 흐름 레코드 (통과/차단 전체)\n▸ CloudWatch, VPC Flow Logs, CloudTrail은 불완전한 로깅\n\n【오답 체크】\n(A) CloudWatch만으로는 흐름 로그 캡처 불가능. Alert 로그만 기록됨. Flow 로그 누락. (60~100자)\n(C) VPC Flow Logs는 방화벽 정책 적용 결과를 기록하지 않음. 엔드포인트 트래픽만 기록됨. (60~100자)\n(D) CloudTrail은 API 호출만 기록. 방화벽 트래픽 검사 로깅이 아님. 데이터 플레인 이벤트 미포함. (60~100자)\n\n【시험 포인트】\n▸ Network Firewall = 자체 독립적 로깅 시스템\n▸ Alert + Flow 로그 = 완전한 감시 커버리지\n▸ CloudWatch/CloudTrail ≠ Network Firewall 로깅 기능\n▸ 모든 트래픽 기록 = Network Firewall 설정에서만 구성",
    "en_q": "A company is developing a new application that is deployed in multiple VPCs across multiple AWS Regions. The VPCs are connected through AWS Transit Gateway. The VPCs contain private subnets and public subnets. All outbound internet traffic in the private subnets must be audited and logged. The company's network engineer plans to use AWS Network Firewall and must ensure that all traffic through Network Firewall is completely logged for auditing and alerting. How should the network engineer configure Network Firewall logging to meet these requirements?",
    "en_opts": {
      "A": "Configure Network Firewall logging in Amazon CloudWatch to capture all alerts. Send the logs to a log group in Amazon CloudWatch Logs.",
      "B": "Configure Network Firewall logging in Network Firewall to capture all alerts and flow logs.",
      "C": "Configure Network Firewall logging by configuring VPC Flow Logs for the firewall endpoint. Send the logs to a log group in Amazon CloudWatch Logs.",
      "D": "Configure Network Firewall logging by configuring AWS CloudTrail to capture data events."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/136612-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 170,
    "question": "회사는 VPC(VPC1)의 단일 가용 영역(AZ1)에서 NAT 게이트웨이를 설정하여 Amazon EC2 워크로드에서 인터넷에 액세스합니다. EC2 워크로드는 3개 가용 영역(AZ1, AZ2, AZ3)의 프라이빗 서브넷에서 실행 중입니다. 각 서브넷에 대한 라우팅 테이블은 인터넷에 액세스하기 위해 NAT 게이트웨이를 사용하도록 구성되어 있습니다. 최근 중단 중에 NAT 게이트웨이의 사용 불가로 인해 EC2 워크로드의 인터넷 액세스가 중지되었습니다. 네트워크 엔지니어는 아키텍처에서 단일 장애 지점을 제거하고 기본 제공 중복성을 제공하는 솔루션을 구현해야 합니다. 어느 솔루션이 이 요구 사항을 충족합니까?",
    "options": {
      "A": "2개의 NAT 게이트웨이를 설정합니다. 각 NAT 게이트웨이를 별도 가용 영역(AZ2 및 AZ3)의 서로 다른 공용 서브넷에 배치합니다. 라우팅 테이블이 프라이빗 서브넷에서 2개 NAT 게이트웨이의 가상 IP 주소로 트래픽을 라우팅하도록 구성합니다.",
      "B": "2개의 NAT 게이트웨이를 설정합니다. 각 NAT 게이트웨이를 별도 가용 영역(AZ2 및 AZ3)의 서로 다른 공용 서브넷에 배치합니다. 라우팅 테이블이 AZ2 프라이빗 서브넷을 AZ2의 NAT 게이트웨이로 가리키도록 구성합니다. 동일 라우팅 테이블이 AZ3 프라이빗 서브넷을 AZ3의 NAT 게이트웨이로 가리키도록 구성합니다.",
      "C": "2번째 VPC(VPC2)를 생성합니다. 2개의 NAT 게이트웨이를 설정합니다. 각 NAT 게이트웨이를 다른 VPC(VPC1 및 VPC2)에 배치하고 동일 가용 영역(AZ2)에 배치합니다. VPC1의 라우팅 테이블이 AZ2 프라이빗 서브넷을 1개 NAT 게이트웨이로 가리키도록 구성합니다. VPC2의 라우팅 테이블이 AZ2 프라이빗 서브넷을 2번째 NAT 게이트웨이로 가리키도록 구성합니다.",
      "D": "2개의 NAT 게이트웨이를 설정합니다. 각 NAT 게이트웨이를 별도 가용 영역(AZ2 및 AZ3)의 서로 다른 공용 서브넷에 배치합니다. 라우팅 테이블이 AZ2 프라이빗 서브넷을 AZ2의 NAT 게이트웨이로 가리키도록 구성합니다. 2번째 라우팅 테이블이 AZ3 프라이빗 서브넷을 AZ3의 NAT 게이트웨이로 가리키도록 구정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ NAT 게이트웨이 중복화 — 각 AZ에 독립 배치\n▸ AZ 격리 — 가용 영역별 라우팅 테이블 분리\n▸ 단일 장애점 제거 — 다중 NAT + 독립 경로\n\n【정답 포인트】\n▸ 각 AZ에 NAT 게이트웨이 배치 (AZ1 제외, 기존 위치)\n▸ AZ별 독립 라우팅 테이블 → 각 AZ 프라이빗 서브넷이 해당 AZ NAT만 사용\n▸ AZ2 장애 시 → AZ2 서브넷만 영향 (AZ3는 독립 운영)\n▸ AZ 간 NAT 의존성 제거 → 장애 격리\n\n【오답 체크】\n(A) 단일 라우팅 테이블로 VIP 수동 관리 - 복잡하고 자동 장애 조치 불가. 수동 개입 필요. (60~100자)\n(B) 동일 라우팅 테이블 사용 - AZ 정책 구분 불가능. AZ2 장애 시 AZ3도 영향. (60~100자)\n(C) 다중 VPC 구성 - 비용 증가, 운영 복잡성 높음. VPC 간 피어링 필요. (60~100자)\n\n【시험 포인트】\n▸ 고가용성 NAT = 각 AZ에 독립 배치 필수\n▸ 라우팅 격리 = AZ별 독립 라우팅 테이블\n▸ AZ 장애 = 해당 AZ만 영향 (다른 AZ 무관)\n▸ VIP 수동 관리 < AZ별 라우팅 자동화",
    "en_q": "A company has set up a NAT gateway in a single Availability Zone (AZ1) in a VPC (VPC1) to access the internet from Amazon EC2 workloads in the VPC. The EC2 workloads are running in private subnets in three Availability Zones (AZ1, AZ2, AZ3). The route table for each subnet is configured to use the NAT gateway to access the internet. Recently during an outage, internet access stopped working for the EC2 workloads because of the NAT gateway's unavailability. A network engineer must implement a solution to remove the single point of failure from the architecture and provide built-in redundancy. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Set up two NAT gateways. Place each NAT gateway in a different public subnet in separate Availability Zones (AZ2 and AZ3). Configure a route table for private subnets to route traffic to the virtual IP addresses of the two NAT gateways.",
      "B": "Set up two NAT gateways. Place each NAT gateway in a different public subnet in separate Availability Zones (AZ2 and AZ3). Configure a route table to point the AZ2 private subnets to the NAT gateway in AZ2. Configure the same route table to point the AZ3 private subnets to the NAT gateway in AZ3.",
      "C": "Create a second VPC (VPC2). Set up two NAT gateways. Place each NAT gateway in a different VPC (VPC1 and VPC2) and in the same Availability Zone (AZ2). Configure a route table in VPC1 to point the AZ2 private subnets to one NAT gateway. Configure a route table in VPC2 to point the AZ2 private subnets to the second NAT gateway.",
      "D": "Set up two NAT gateways. Place each NAT gateway in a different public subnet in separate Availability Zones (AZ2 and AZ3). Configure a route table to point the AZ2 private subnets to the NAT gateway in AZ2. Configure a second route table to point the AZ3 private subnets to the NAT gateway in AZ3."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/136695-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 171,
    "question": "회사는 총 30개의 VPC를 보유하고 있습니다. 3개 AWS 지역에서 각각 10개의 VPC를 보유하고 있습니다. 회사는 각 지역의 VPC를 해당 지역의 Transit Gateway에 연결했습니다. 회사는 또한 Transit Gateway 간 지역 간 피어링 연결을 설정했습니다. 회사는 AWS Direct Connect를 사용하여 온프레미스 위치에서 3개 지역에 걸친 4개의 VPC에만 액세스하려고 합니다. 회사는 2개의 Direct Connect 위치에서 4개의 Direct Connect 연결을 프로비저닝했습니다. 어느 단계 조합이 가장 비용 효율적인 방식으로 이 요구 사항을 충족합니까?(3가지를 선택하세요.)",
    "options": {
      "A": "4개의 가상 프라이빗 게이트웨이를 생성합니다. 4개의 VPC에 가상 프라이빗 게이트웨이를 연결합니다.",
      "B": "Direct Connect 게이트웨이를 생성합니다. 4개의 가상 프라이빗 게이트웨이를 Direct Connect 게이트웨이와 연결합니다.",
      "C": "각 Direct Connect 연결에 4개의 Transit VIF를 생성합니다. Transit VIF를 Direct Connect 게이트웨이와 연결합니다.",
      "D": "각 Direct Connect 연결에 4개의 Transit VIF를 생성합니다. Transit VIF를 4개의 가상 프라이빗 게이트웨이와 연결합니다.",
      "E": "각 Direct Connect 연결에 4개의 프라이빗 VIF를 생성합니다.",
      "F": "Direct Connect 게이트웨이와 Transit Gateway 간에 연결을 생성합니다."
    },
    "answer": "ABE",
    "explanation": "【핵심 용어】\n▸ Virtual Private Gateway — 단일 VPC 액세스용\n▸ Direct Connect Gateway — 다중 VPC/지역 중앙화\n▸ Transit VIF vs Private VIF — Transit Gateway 지원 여부\n▸ 비용 최적화 — 필요한 VPC만 선택적 액세스\n\n【정답 포인트】\n▸ \n(A) 4개 VPC에 각각 VPG 생성 - 단일 VPC 연결용 게이트웨이\n▸ \n(B) Direct Connect 게이트웨이 중앙화 - 4개 VPG를 하나의 DX Gateway로 통합\n▸ \n(E) 각 Direct Connect에 4개 프라이빗 VIF - VPG 연결용 가상 인터페이스\n▸ VPG는 Transit Gateway와 연결 불가 (Direct Connect Gateway 거쳐야 함)\n▸ 총 4개의 Direct Connect로 4개 VPC 모두 지원 가능\n\n【오답 체크】\n(C) Transit VIF → Transit Gateway 연결용. VPG는 Transit VIF 미지원. 호환성 없음. (60~100자)\n(D) Transit VIF를 VPG와 직접 연결 불가능. DX Gateway 거쳐야 함. 프로토콜 미매칭. (60~100자)\n(F) Transit Gateway 연결 불필요 - 4개 VPC만 선택적 액세스. 나머지 26개 VPC는 내부 TGW로 통신. (60~100자)\n\n【시험 포인트】\n▸ 다중 지역 선택적 액세스 → VPG + DX Gateway 조합\n▸ Private VIF = VPG 연결 (Direct Connect당 4개)\n▸ Transit VIF = Transit Gateway 연결 (여기서 불필요)\n▸ Direct Connect Gateway = 중앙 허브 역할\n▸ Transit Gateway = 30개 VPC 내부 통신용 (외부 DX 액세스 아님)",
    "en_q": "A company has a total of 30 VPCs. Three AWS Regions each contain 10 VPCs. The company has attached the VPCs in each Region to a transit gateway in that Region. The company also has set up inter-Region peering connections between the transit gateways. The company wants to use AWS Direct Connect to provide access from its on-premises location for only four VPCs across the three Regions. The company has provisioned four Direct Connect connections at two Direct Connect locations. Which combination of steps will meet these requirements MOST cost-effectively? (Choose three.)",
    "en_opts": {
      "A": "Create four virtual private gateways. Attach the virtual private gateways to the four VPCs.",
      "B": "Create a Direct Connect gateway. Associate the four virtual private gateways with the Direct Connect gateway.",
      "C": "Create four transit VIFs on each Direct Connect connection. Associate the transit VIFs with the Direct Connect gateway.",
      "D": "Create four transit VIFs on each Direct Connect connection. Associate the transit VIFs with the four virtual private gateways.",
      "E": "Create four private VIFs on each Direct Connect connection to the Direct Connect gateway.",
      "F": "Create an association between the Direct Connect gateway and the transit gateways."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/136721-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 172,
    "question": "어느 회사가 Linux 호스트와 Windows 호스트를 위해 명령줄 인터페이스를 통해 Amazon EC2 인스턴스를 관리해야 합니다. EC2 인스턴스는 인터넷 경로가 없는 환경에 배포됩니다. 회사는 인스턴스 관리를 위한 역할 기반 접근 제어(RBAC)를 구현해야 합니다. 회사는 온프레미스 환경이 있습니다. 다음 중 유지보수 오버헤드가 가장 적으면서도 요구사항을 충족하는 방법은 무엇입니까?",
    "options": {
      "A": "온프레미스 환경과 인스턴스가 배포된 VPC 간에 AWS Direct Connect 연결을 설정합니다. 라우팅, 보안 그룹 및 ACL을 구성합니다. Direct Connect 연결을 사용하여 인스턴스에 연결합니다.",
      "B": "각 인스턴스에 AWS Systems Manager Agent(SSM Agent)를 배포하고 구성합니다. Systems Manager Session Manager용 VPC 엔드포인트를 배포합니다. Session Manager를 사용하여 인스턴스에 연결합니다.",
      "C": "온프레미스 환경과 인스턴스가 배포된 VPC 간에 AWS Site-to-Site VPN 연결을 수립합니다. 라우팅, 보안 그룹 및 ACL을 구성합니다. Site-to-Site VPN 연결을 사용하여 인스턴스에 연결합니다.",
      "D": "인스턴스가 배포된 VPC에 어플라이언스를 배포합니다. 어플라이언스에 퍼블릭 IP 주소를 할당합니다. 보안 그룹 및 ACL을 구성합니다. 어플라이언스를 중개자로 사용하여 인스턴스에 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 원격 관리 도구 — EC2 인스턴스 제어 방법\n▸ RBAC (역할 기반 접근 제어) — 권한 관리\n▸ 인터넷 경로 없음 — 프라이빗 네트워크 전용\n\n【정답 포인트】\n▸ AWS Systems Manager Session Manager = 에이전트 기반 원격 접근\n▸ SSM Agent 배포 → 모든 EC2 인스턴스에 설치\n▸ VPC 엔드포인트 (Systems Manager용) → 프라이빗 네트워크 통신\n▸ Session Manager → 인터넷 경로 불필요, IAM 기반 RBAC 내장\n▸ SSH/RDP 관리 불필요 → 보안 강화\n\n【오답 체크】\n(A) Direct Connect 설정 - 온프레미스 연결용. 오버엔지니어링. RBAC 메커니즘 미흡. (60~100자)\n(C) Site-to-Site VPN 설정 - 비용 증가, 추가 구성 필요. Session Manager가 간단. (60~100자)\n(D) 어플라이언스 배포 - 별도 관리 부담. 공인 IP 필요. Session Manager 표준 방식 아님. (60~100자)\n\n【시험 포인트】\n▸ EC2 원격 관리 = AWS Systems Manager 최적\n▸ 프라이빗 네트워크 = VPC 엔드포인트 + SSM Agent\n▸ RBAC = IAM 정책으로 자동 구현\n▸ 인터넷 경로 불필요 = Direct Connect/VPN 오버엔지니어링",
    "en_q": "A company needs to manage Amazon EC2 instances through command line interfaces for Linux hosts and Windows hosts. The EC2 instances are deployed in an environment in which there is no route to the internet. The company must implement role-based access control for management of the instances. The company has a standalone on-premises environment. Which approach will meet these requirements with the LEAST maintenance overhead?",
    "en_opts": {
      "A": "Set up an AWS Direct Connect connection between the on-premises environment and the VPC where the instances are deployed. Configure routing, security groups, and ACLs. Connect to the instances by using the Direct Connect connection.",
      "B": "Deploy and configure AWS Systems Manager Agent (SSM Agent) on each instance. Deploy VPC endpoints for Systems Manager Session Manager. Connect to the instances by using Session Manager.",
      "C": "Establish an AWS Site-to-Site VPN connection between the on-premises environment and the VPC where the instances are deployed. Configure routing, security groups, and ACLs. Connect to the instances by using the Site-to-Site VPN connection.",
      "D": "Deploy an appliance to the VPC where the instances are deployed. Assign a public IP address to the appliance. Configure security groups and ACLs. Connect to the instances by using the appliance as an intermediary."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137611-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 173,
    "question": "IPSec 전송 모드(transport mode)에서 필요한 것은 다음 중 어느 두 가지입니까? (2개 선택)",
    "options": {
      "A": "자동 생성 키(Auto generated key)",
      "B": "NAT Traversal",
      "C": "IKEv1",
      "D": "DH-group 20 (ECP-384 bits)"
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ IPSec Transport Mode — 페이로드만 암호화, IP 헤더는 노출\n▸ Key Exchange 메커니즘 — IKEv1/IKEv2 프로토콜\n▸ DH Group — Diffie-Hellman 키 교환 알고리즘\n\n【정답 포인트】\n▸ \n(A) 자동 생성 키 — IKEv1/IKEv2 자동 키 교환 필수\n▸ \n(D) DH-group 20 (ECP-384 bits) — 높은 강도의 Diffie-Hellman 그룹\n▸ Transport Mode → 양 끝점이 호스트 (호스트-호스트 암호화)\n▸ 키 자동 생성 → IKE 프로토콜 통해 자동 협상\n\n【오답 체크】\n(B) NAT Traversal — Tunnel Mode에서 NAT 환경 지원. Transport Mode는 직접 호스트-호스트. (60~100자)\n(C) IKEv1 필수 아님 — IKEv2도 Transport Mode 지원. IKEv1 제약 없음. (60~100자)\n\n【시험 포인트】\n▸ Transport Mode = 호스트-호스트 암호화\n▸ Tunnel Mode = 게이트웨이-게이트웨이 (네트워크-네트워크)\n▸ 자동 키 생성 = IKE 프로토콜 기본 기능\n▸ DH Group = 키 강도 협상 시 필수",
    "en_q": "Which two are required by IPSec in transport mode? (Choose two.)",
    "en_opts": {
      "A": "Auto generated key",
      "B": "NAT Traversal",
      "C": "IKEv1",
      "D": "DH-group 20 (ECP-384 bits)"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137612-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 174,
    "question": "싱가포르 고용주가 직원의 동의를 얻지 않고도 다음을 모두 수행할 수 있는 경우는 어느 것입니까? (예외 선택)",
    "options": {
      "A": "직원의 개인 데이터를 금융 계획을 제공하는 회사와 공유합니다.",
      "B": "보건 위기 중 직원의 건강 데이터를 공공 기관에 공개합니다.",
      "C": "직원의 컴퓨터에 컴퓨터 모니터링 소프트웨어를 사용합니다.",
      "D": "직장에서 폐쇄회로 텔레비전 감시를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 싱가포르 개인정보보호법 (PDPA) — 고용 관계에서 개인 데이터 보호\n▸ 직원 동의 — 민감한 개인 정보 수집의 법적 요건\n▸ 보건 위기 면제 — 공중 보건 우선\n\n【정답 포인트】\n▸ \n(A) 정답 — 직원 동의 없이 개인 데이터 공유 가능 조건 없음 (금융 계획 회사와의 공유는 동의 필수)\n▸ \n(B) 보건 위기 면제 — PDPA 예외 조항. 공중 보건 이유로 동의 없이 공개 가능\n▸ \n(C) 모니터링 소프트웨어 — 동의 필수 (개인 데이터 수집)\n▸ \n(D) CCTV 감시 — 동의 필수 (개인 데이터 수집)\n\n【오답 체크】\n(B) 보건 위기 중 건강 데이터 공개 — PDPA 면제 가능 (공중 보건 이유)\n(C) 컴퓨터 모니터링 — 개인 데이터 수집으로 동의 필수\n(D) CCTV 감시 — 직원 개인 데이터 수집으로 동의 필수\n\n【시험 포인트】\n▸ PDPA 예외 = 공중 보건, 정부 기관, 개인 활동\n▸ 고용 관계 = 강화된 개인 데이터 보호\n▸ 민감 정보 공유 = 명시적 동의 필수\n▸ 보건 위기 = PDPA 면제 조항",
    "en_q": "A Singapore employer can do all of the following without obtaining an employee's consent EXCEPT?",
    "en_opts": {
      "A": "Share an employee's personal data with a company that provides financial planning.",
      "B": "Disclose personal health data to a public agency during a health crisis.",
      "C": "Use computer monitoring software on an employee's computers.",
      "D": "Use closed-circuit television surveillance in the workplace."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137613-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 175,
    "question": "엔지니어가 Cisco ACI 브리지 도메인을 구성하여 알 수 없는 유니캐스트 프레임의 플러딩을 방지해야 합니다. 이 목표를 달성하기 위해 Cisco ACI에서 구성해야 하는 작업은 무엇입니까?",
    "options": {
      "A": "브리지 도메인 옵션을 캡슐화(Encapsulation)에서 Flood로 설정합니다.",
      "B": "브리지 도메인 모드에서 Clear Remote MAC Entries를 구성합니다.",
      "C": "패브릭 전체 설정 정책(Fabric Wide Setting Policy)에서 Disable Remote EP Learn을 설정합니다.",
      "D": "브리지 도메인을 최적화 모드(optimized mode)에서 작동하도록 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Cisco ACI 브리지 도메인 — 레이어 2 네트워크 세그멘테이션\n▸ Unknown Unicast Flooding — MAC 주소 미학습 프레임 브로드캐스트\n▸ 최적화 모드 — 불필요한 학습 억제\n\n【정답 포인트】\n▸ \n(D) 브리지 도메인을 최적화 모드로 구성 — 알려지지 않은 유니캐스트 플러딩 방지\n▸ 최적화 모드 → 프로토콜 기반 학습만 (unknown MAC flooding 억제)\n▸ 잘못된 MAC 학습 방지 → 브로드캐스트 트래픽 감소\n\n【오답 체크】\n(A) 캡슐화 설정 — Encapsulation은 VLAN 태깅 방식. 플러딩과 무관. (60~100자)\n(B) Clear Remote MAC 설정 — MAC 엔트리 초기화용. 플러딩 방지 메커니즘 아님. (60~100자)\n(C) Disable Remote EP Learn — 엔드포인트 학습 비활성화는 ACI 기능 무효화. 과도한 조치. (60~100자)\n\n【시험 포인트】\n▸ ACI 최적화 모드 = Unknown Unicast 제어\n▸ 브리지 도메인 설정 = 학습 정책 결정\n▸ 플러딩 방지 = 성능 최적화",
    "en_q": "An engineer must configure a Cisco ACI bridge domain to prevent flooding from unknown unicast frames. Which action must be configured in Cisco ACI to accomplish this goal?",
    "en_opts": {
      "A": "Set the bridge domain option to Flood in Encapsulation.",
      "B": "Configure Clear Remote MAC Entries in the bridge domain mode.",
      "C": "Set Disable Remote EP Learn in the Fabric Wide Setting Policy.",
      "D": "Configure the bridge domain to operate in optimized mode."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137614-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 176,
    "question": "시나리오: 싱가포르의 부티크 은행인 Singabank는 채용 과정에서 직원들에게 공지한 후, CCTV 카메라, 컴퓨터 모니터링 소프트웨어, 키보드 로거를 통해 직원들을 지속적이고 철저하게 모니터링 및 추적합니다. Singabank는 직원들이 Singabank의 데이터 보안 정책을 준수하도록 하기 위해 이를 수행합니다. 대형 은행인 Bigbank는 이제 Singabank의 소매 은행 부문을 인수하려고 고려 중입니다. 실사(due diligence)의 일부로, Bigbank는 Singabank가 소매 은행 부문에 소속되어 있는지 여부에 관계없이 직원들에 대한 모든 감시 자료를 공개할 것을 요구하고 있습니다. Jimmy는 Singabank의 투자 은행 부문에서 일하고 있습니다. Singabank의 직원 모니터링을 불법으로 만드는 것은 무엇입니까?",
    "options": {
      "A": "직원들이 명시적으로 동의하지 않은 경우.",
      "B": "은행의 데이터 보안 정책을 재정비하는 경우.",
      "C": "은행이 직원들의 민감한 개인 정보를 수집한 경우.",
      "D": "직원들이 모니터링에 대해 질문할 수 있는 연락처 정보를 제공받지 못한 경우."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 싱가포르 PDPA 면제 대상 — 정부 기관, 개인 활동, 예술/뉴스 목적\n▸ 직원 모니터링 합법성 — 명시적 동의 필수\n▸ 데이터 공개 규제 — 개인정보 이관 시 보호 의무\n\n【정답 포인트】\n▸ \n(A) 정답 — 직원이 명시적으로 동의하지 않은 경우 모니터링 불법\n▸ PDPA 기본 원칙 → 민감한 개인 데이터 수집 시 명시적 동의 필수\n▸ 모니터링 공지 ≠ 동의 → 채용 공지는 동의가 아님\n\n【오답 체크】\n(B) 데이터 보안 정책 재정비 — 정책 변경이 모니터링을 불법화하지 않음. (60~100자)\n(C) 민감한 개인정보 수집 — 민감 정보는 동의 필수. 이미 합법 프레임워크 내. (60~100자)\n(D) 연락처 정보 미제공 — 동의 절차 결함. 모니터링 자체의 합법성과는 별개. (60~100자)\n\n【시험 포인트】\n▸ PDPA 핵심 = 명시적 동의 필수\n▸ 공지 ≠ 동의 (affirmative consent)\n▸ 고용 계약 조건 = 강제 동의 의심\n▸ 모니터링 합법화 = 자유로운 동의 필수",
    "en_q": "SCENARIO – Please use the following to answer the next question: Singabank is a boutique bank in Singapore. After being notified during the hiring process, Singabank employees are subject to constant and thorough monitoring and tracking through CCTV cameras, computer monitoring software and keyboard loggers. Singabank does this to ensure its employees are complying with Singabank's data security policy. Bigbank is now considering acquiring Singabank's retail banking division. As part of its due diligence, Bigbank is seeking for Singabank to disclose to it all of its surveillance material on its employees, whether or not they are part of the retail banking division. Jimmy works in Singabank's investment banking division. What would make Singabank's monitoring of its employees illegal?",
    "en_opts": {
      "A": "If the employees did not explicitly consent to it.",
      "B": "If the bank's data security policy was being overhauled.",
      "C": "If the bank collected employees' sensitive personal information.",
      "D": "If the employees were not provided contact information to ask questions about the monitoring."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137615-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 177,
    "question": "시나리오: Delilah는 싱가포르의 채굴 업계 리더인 Good Mining Private Limited의 마케팅 부서에 취업을 지원하고 있습니다. Delilah는 표준 종이 지원서를 작성하면서 비상 연락처, 의료 이력, 혈액형 및 보험 정책에 대한 정보를 제공하도록 요청받습니다. 이러한 필드는 Delilah가 지원하는 부서와 관계없이 채워야 합니다. 지원서에는 또한 Delilah에게 자신의 개인 데이터의 수집, 사용 및 공개에 명시적으로 동의하도록 요청합니다. 지원서를 제출한 일주일 후, Delilah는 Good Mining의 마케팅 이사인 Evan으로부터 커피에 초대받습니다. Delilah가 떠나기 직전에, 그녀는 자신의 현재 업무 연락처 정보가 포함된 명함을 Evan에게 전달합니다. Evan은 그 명함을 사용하여 Delilah의 정보를 Good Mining의 비즈니스 개발 데이터베이스에 추가하며, 이는 로컬 서버에 보관됩니다. Good Mining은 이 데이터베이스를 사용하여 Good Mining이 조직하는 네트워킹 및 클라이언트 이벤트에 대해 사람들에게 알립니다. Evan이 Delilah의 명함 정보를 비즈니스 개발 데이터베이스에 추가하는 것이 합법인 이유는 무엇입니까?",
    "options": {
      "A": "Delilah가 그것을 Evan에게 자발적으로 전달함으로써 자신의 업무 연락처 정보가 Good Mining에 의해 사용되도록 \"동의\"했기 때문입니다.",
      "B": "모든 업무 연락처 정보는 Good Mining에 의해 자유롭게 사용, 수집 또는 공개될 수 있기 때문입니다.",
      "C": "Good Mining이 정보를 클라우드 공급업체로 내보내지 않기 때문입니다.",
      "D": "Delilah가 Good Mining과의 관계를 시작했기 때문입니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 업무 연락처 정보 (Business Contact Information) — 개인 데이터 범주 밖\n▸ PDPA 적용 범위 — 개인 데이터만 규제\n▸ 명함 정보 — 회사 이메일, 업무 전화, 직함\n\n【정답 포인트】\n▸ \n(B) 정답 — 업무 연락처 정보는 PDPA 범위 밖, 자유로운 사용 가능\n▸ PDPA 정의 → \"개인 데이터\"는 개인 식별 + 개인 상황 연관\n▸ 업무 연락처 → 회사 제공, 개인 정보 아님 (공개 가능)\n\n【오답 체크】\n(A) 자발적 전달 = 동의 의사 표현 아님 — 명함은 직업 활동 범주. (60~100자)\n(C) 클라우드 미사용 — 저장 위치와 무관. PDPA 적용 여부와 무관. (60~100자)\n(D) 관계 개시 — 관계 시작이 무제한 데이터 사용 정당화하지 않음. (60~100자)\n\n【시험 포인트】\n▸ 업무 연락처 = 개인 데이터 아님\n▸ 명함 정보 = PDPA 보호 대상 밖\n▸ 개인 데이터 vs 업무 정보 구분 필수\n▸ PDPA 예외 = 자동 적용 (동의 불필요)",
    "en_q": "SCENARIO – Please use the following to answer the next question: Delilah is seeking employment in the marketing department of Good Mining Private Limited, an industry leader in drilling mines in Singapore. Delilah, while filling in the standard paper application form, is asked to provide details about emergency contacts, medical history, blood type and her insurance policy. These fields need to be filled in no matter which department Delilah applies to. The form also asks Delilah to expressly consent to the collection, use and disclosure of her personal data. A week after submitting the form, Delilah is invited by Evan, the Director of Marketing at Good Mining, to coffee. Just before Delilah leaves, she gives her business card containing her current business contact information to Evan. Evan then uses the business card to add Delilah's details to Good Mining's business development database, which is kept on a local server. Good Mining uses the database to inform people about networking and client events that Good Mining organizes. Why is it legal for Evan to add the information on Delilah's business card to the business development database?",
    "en_opts": {
      "A": "Because Delilah \"consented\" to her business contact information being used by Good Mining by passing it to Evan voluntarily.",
      "B": "Because any business contact information can be freely used, collected or disclosed by Good Mining.",
      "C": "Because Good Mining does not export the information to a cloud vendor.",
      "D": "Because Delilah initiated the relationship with Good Mining."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137616-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 178,
    "question": "다음 중 싱가포르의 개인정보보호법(PDPA)에서 면제되지 않는 것은 무엇입니까?",
    "options": {
      "A": "정부의 자동차 등록 웹사이트.",
      "B": "인기 있는 레스토랑의 개인 파티 룸.",
      "C": "록 콘서트에서 촬영한 다큐멘터리.",
      "D": "상점의 폐쇄회로 텔레비전(CCTV) 영상."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ PDPA 면제 규정 — 특정 기관/상황 제외\n▸ 정부 기관 면제 — 공공 업무 특성\n▸ 개인 활동 면제 — 개인적 데이터 처리\n▸ 예술/뉴스 목적 면제 — 표현의 자유\n\n【정답 포인트】\n▸ \n(D) 정답 — CCTV는 PDPA 면제 대상 아님\n▸ 상점 CCTV → 비즈니스 활동 (개인 활동 아님)\n▸ 직원/고객 개인 데이터 수집 → PDPA 규제 대상\n▸ 강화된 보호 의무 필요\n\n【오답 체크】\n(A) 정부 자동차 등록 웹사이트 — 정부 기관 면제 (공공 업무). (60~100자)\n(B) 개인 파티 룸 — 개인의 개인 활동 면제 (프라이빗 이벤트). (60~100자)\n(C) 다큐멘터리 콘서트 촬영 — 뉴스/예술 목적 면제 (표현의 자유). (60~100자)\n\n【시험 포인트】\n▸ PDPA 면제 = 정부, 개인, 예술/뉴스\n▸ CCTV = 민간 상업 활동 (면제 대상 아님)\n▸ 개인 활동 범주 = 홈 비디오, 프라이빗 모임\n▸ 상업적 CCTV = PDPA 전체 준수 필수",
    "en_q": "Which of the following would NOT be exempt from Singapore's PDPA?",
    "en_opts": {
      "A": "A government automobile registration website.",
      "B": "A private party room at a popular restaurant.",
      "C": "A documentary filmed at a rock concert.",
      "D": "A video from a store's dosed-circuit TV."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137617-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 179,
    "question": "거의 모든 개인정보보호 법률이 있는 국가에서 민감한 개인 정보로 간주되는 것은 무엇입니까?",
    "options": {
      "A": "혼인 상태.",
      "B": "건강 정보.",
      "C": "직업 이력.",
      "D": "범죄 기록."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 민감한 개인 정보 (Sensitive Personal Data) — 강화된 보호 범주\n▸ 국제 표준 — GDPR, CCPA, PDPA 공통\n▸ 건강 정보 — 신체적/정신적 건강 관련 모든 정보\n\n【정답 포인트】\n▸ \n(B) 정답 — 건강 정보는 모든 개인정보보호 법률의 민감 범주\n▸ 의료 진료 기록, 질병 진단, 약물 복용 이력 포함\n▸ 심리 상담, 정신 건강 기록도 포함\n▸ 국제적으로 강화된 보호 기준 적용\n\n【오답 체크】\n(A) 혼인 상태 — 일반 개인 정보. 민감한 범주 아님. (60~100자)\n(C) 직업 이력 — 일반 개인 정보. 직업은 공개 정보 취급. (60~100자)\n(D) 범죄 기록 — 특정 국가에서 민감할 수 있으나, 건강 정보처럼 보편적 아님. (60~100자)\n\n【시험 포인트】\n▸ 민감 정보 = 신체/정신 건강 관련\n▸ GDPR = Special Categories (건강, 생체, 종교 등)\n▸ CCPA = Sensitive Personal Information (건강, 기타)\n▸ 모든 국가 = 건강 정보는 민감 범주 포함",
    "en_q": "What personal information is considered sensitive in almost all countries with privacy laws?",
    "en_opts": {
      "A": "Marital status.",
      "B": "Health information.",
      "C": "Employment history.",
      "D": "Criminal convictions."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137618-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 180,
    "question": "1980년에 경제협력개발기구(OECD)가 발행한 개인정보보호 원칙은 어떻게 정의할 수 있습니까?",
    "options": {
      "A": "연방거래위원회와의 협력 하에 발행된 개인정보보호 및 국경 간 데이터 흐름을 규율하는 지침.",
      "B": "회원 국가의 개인정보보호 및 개인 데이터의 국경 간 흐름을 규율하는 지침.",
      "C": "유럽연합 내의 개인정보보호 및 국경 간 데이터 흐름을 규율하는 의무적 규칙.",
      "D": "구속력 있는 회원 국가들 간의 개인정보보호 및 국경 간 데이터 흐름을 규율하는 의무적 규칙."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ OECD 개인정보보호 원칙 — 1980년 채택\n▸ Guidelines vs Regulations — 구속력 없는 권장사항\n▸ 국경 간 데이터 흐름 — 국제 데이터 이동 규정\n▸ OECD 회원국 범위 — 국제 협력 기구\n\n【정답 포인트】\n▸ \n(B) 정답 — OECD 회원국의 개인정보보호 및 국경 간 데이터 흐름 지침\n▸ Guidelines = 구속력 없는 권장사항 (회원국 자율 준수)\n▸ OECD 회원국 범위 (EU만 아님, 전 세계 37개국)\n▸ Trans-border Data Flows = 국제 데이터 이동 명시적 다룸\n▸ 글로벌 개인정보보호 표준의 기초\n\n【오답 체크】\n(A) FTC와의 협력 명시 — OECD는 독립 기구. FTC 협력 없음. (60~100자)\n(C) EU만 적용 — EU 규제가 아닌 OECD 전 회원국 대상. (60~100자)\n(D) Mandatory Rules — OECD 원칙은 지침(guidelines)이지 의무 규칙 아님. (60~100자)\n\n【시험 포인트】\n▸ OECD 원칙 = 국제 개인정보보호 표준\n▸ Guidelines = 권장사항 (구속력 없음)\n▸ 1980년 역사적 배경 = 현대 GDPR/CCPA/PDPA의 기초\n▸ 회원국 범위 = OECD 전체 (유럽 한정 아님)",
    "en_q": "How can the privacy principles issued in 1980 by the Organisation for Economic Cooperation and Development (OECD) be defined?",
    "en_opts": {
      "A": "Guidelines governing the protection of privacy and trans-border data flows issued in collaboration with the Federal Trade Commission.",
      "B": "Guidelines governing the protection of privacy and trans-border data flows of personal data in states that are members.",
      "C": "Mandatory rules governing the protection of privacy and trans-border data flows within the European Union.",
      "D": "Mandatory rules governing the protection of privacy and trans-border data flows among binding member states."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137619-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 181,
    "question": "회사는 AWS 계정 A에 Transit Gateway를 가지고 있습니다. 회사는 AWS Resource Access Manager(AWS RAM)를 사용하여 Transit Gateway를 공유하므로 다른 계정의 사용자가 동일한 AWS 리전의 여러 VPC에 연결할 수 있습니다. AWS 계정 B는 10.0.0.0/16 CIDR 블록을 가진 VPC와 us-west-2a 가용 영역에 10.0.0.0/24 서브넷, us-west-2b 가용 영역에 10.0.1.0/24 서브넷을 포함합니다. 이러한 서브넷의 리소스는 다른 VPC와 통신할 수 있습니다. 네트워크 엔지니어는 두 개의 새로운 서브넷을 생성합니다: us-west-2b 가용 영역에 10.0.2.0/24와 us-west-2c 가용 영역에 10.0.3.0/24입니다. 모든 서브넷은 하나의 라우팅 테이블을 공유합니다. 기본 경로 0.0.0.0/0은 Transit Gateway를 가리킵니다. 서브넷 10.0.2.0/24의 리소스는 다른 VPC와 통신할 수 있지만, 서브넷 10.0.3.0/24의 리소스는 다른 VPC와 통신할 수 없습니다. 네트워크 엔지니어가 서브넷 10.0.3.0/24의 리소스가 다른 VPC와 통신할 수 있도록 하려면 어떻게 해야 합니까?",
    "options": {
      "A": "계정 B에서 10.0.2.0/24 및 10.0.3.0/24을 라우팅 테이블의 대상으로 추가합니다. 대상으로 Transit Gateway를 사용합니다.",
      "B": "계정 B에서 Transit Gateway 첨부를 업데이트합니다. us-west-2c와 연결된 새로운 서브넷 ID를 계정 B의 VPC에 첨부합니다.",
      "C": "계정 A에서 Transit Gateway 라우팅 테이블에 10.0.3.0/24에 대한 정적 경로를 생성합니다.",
      "D": "계정 A에서 Transit Gateway 라우팅 테이블에서 10.0.0.0/16의 전파를 다시 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\nTransit Gateway 첨부(attachment)는 VPC의 서브넷들을 Transit Gateway에 연결합니다. Transit Gateway 첨부 시 지정된 서브넷만 Transit Gateway로 라우팅 가능합니다. Transit Gateway는 각 가용 영역에 네트워크 인터페이스를 배포하므로, 특정 AZ의 서브넷을 사용할 수 있습니다. 라우팅 테이블의 0.0.0.0/0 경로는 Transit Gateway 첨부에 포함된 서브넷만 사용할 수 있습니다.\n\n【정답 포인트】\nB가 정답입니다. 문제의 핵심은 서브넷 10.0.3.0/24 (us-west-2c AZ)가 Transit Gateway와 통신하지 못한다는 점입니다. 이는 Transit Gateway 첨부에 us-west-2c 가용 영역의 서브넷이 포함되지 않았기 때문입니다. Transit Gateway 첨부를 업데이트하여 10.0.3.0/24 서브넷을 추가하면, 이 서브넷이 Transit Gateway의 us-west-2c 네트워크 인터페이스를 통해 다른 VPC와 통신할 수 있게 됩니다. 라우팅 테이블의 0.0.0.0/0은 이미 Transit Gateway를 가리키고 있으므로, 첨부만 업데이트하면 됩니다.\n\n【오답 체크】\nA: 라우팅 테이블에 명시적 경로를 추가하는 것은 문제를 해결하지 못합니다. 이미 0.0.0.0/0이 설정되어 있고, 라우팅 테이블은 모든 서브넷이 공유하기 때문에, 첨부 문제를 해결하지 않습니다. C: Transit Gateway 라우팅 테이블의 정적 경로는 계정 A에서 생성되지만, 계정 B의 리소스가 첨부되지 않았으면 도움이 되지 않습니다. D: 전파(propagation) 다시 생성은 이미 0.0.0.0/0이 설정된 상황에서 불필요합니다.\n\n【시험 포인트】\nANS-C01의 Transit Gateway 문제에서 핵심은 \"Transit Gateway 첨부와 가용 영역 커버리지\"입니다. 라우팅 테이블과 Transit Gateway 라우팅만으로는 부족하며, 반드시 VPC의 서브넷이 Transit Gateway 첨부에 포함되어야 합니다. 특히 멀티 AZ 환경에서 새 서브넷을 추가할 때는 Transit Gateway 첨부를 동시에 업데이트해야 합니다. \"least maintenance overhead\"와 \"즉시 효과\"를 고려할 때 첨부 업데이트가 가장 직접적인 해결책입니다.",
    "en_q": "A company has a transit gateway in AWS Account A. The company uses AWS Resource Access Manager (AWS RAM) to share the transit gateway so that users in other accounts can connect to multiple VPCs in the same AWS Region. AWS Account B contains a VPC (10.0.0.0/16) with subnet 10.0.0.0/24 in the us-west-2a Availability Zone and subnet 10.0.1.0/24 in the us-west-2b Availability Zone. Resources in these subnets can communicate with other VPCs. A network engineer creates two new subnets: 10.0.2.0/24 in the us-west-2b Availability Zone and 10.0.3.0/24 in the us-west-2c Availability Zone. All the subnets share one route table. The default route 0.0.0.0/0 is pointing to the transit gateway. Resources in subnet 10.0.2.0/24 can communicate with other VPCs, but resources in subnet 10.0.3.0/24 cannot communicate with other VPCs. What should the network engineer do so that resources in subnet 10.0.3.0/24 can communicate with other VPCs?",
    "en_opts": {
      "A": "In Account B, add 10.0.2.0/24 and 10.0.3.0/24 as the destinations to the route table. Use the transit gateway as the target.",
      "B": "In Account B, update the transit gateway attachment. Attach the new subnet ID that is associated with us-west-2c to Account B's VPC.",
      "C": "In Account A, create a static route for 10.0.3.0/24 in the transit gateway route tables.",
      "D": "In Account A, recreate propagation for 10.0.0.0/16 in the transit gateway route tables."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137620-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 182,
    "question": "SRX Series 디바이스에서 보고 엔진이 리포트를 생성하기 위해 활성화되어야 하는 것은 무엇입니까?",
    "options": {
      "A": "패킷 캡처",
      "B": "보안 로깅",
      "C": "시스템 로깅",
      "D": "SNMP"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SRX Series — Juniper 고급 방화벽/보안 플랫폼\n▸ 보고 엔진 — 보안 통계 및 트렌드 생성\n▸ 보안 로깅 — 정책 적용 및 위협 탐지 기록\n\n【정답 포인트】\n▸ \n(B) 정답 — 보안 로깅 필수\n▸ Security Logging = 네트워크 보안 이벤트 기록\n▸ 정책 위반, 위협 탐지, 보안 인시던트 추적\n▸ 보고 엔진 → 보안 로깅 데이터로 정확한 통계 생성\n\n【오답 체크】\n(A) 패킷 캡처 — 트래픽 분석용. 보고 엔진 필수 요소 아님. (60~100자)\n(C) 시스템 로깅 — 운영 이벤트 기록. 보안 보고에는 보안 로깅 필요. (60~100자)\n(D) SNMP — 장비 모니터링 프로토콜. 보고 생성과 무관. (60~100자)\n\n【시험 포인트】\n▸ SRX 보고 = 보안 로깅 기반\n▸ Security Logging = 정책 감사 필수\n▸ 컴플라이언스 보고 = 보안 로깅 활성화 전제\n▸ 실무 설정 = 보안 로깅 첫 확인 항목",
    "en_q": "What must be enabled on an SRX Series device for the reporting engine to create reports?",
    "en_opts": {
      "A": "packet capture",
      "B": "security logging",
      "C": "system logging",
      "D": "SNMP"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137621-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 183,
    "question": "에이전트의 큐 상태를 On Queue에서 Off Queue로 변경할 때, 뷰에 표시되는 에이전트의 상태는 무엇입니까?",
    "options": {
      "A": "사용 가능",
      "B": "바쁨",
      "C": "자리 비움",
      "D": "휴식"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Queue Status — 콜 센터 에이전트 상태\n▸ On Queue vs Off Queue — 고객 호출 수신 여부\n▸ Available Status — 시스템상 표시 상태\n\n【정답 포인트】\n▸ \n(A) 정답 — Off Queue = Available (사용 가능)\n▸ Off Queue 상태 → 고객 대기열 미수신\n▸ 시스템상 Available 표시 → 다른 작업 수행 가능\n▸ 교육, 관리업무, 휴식 활동 가능\n\n【오답 체크】\n(B) Busy — 에이전트가 고객과 활발히 통화 중인 상태. Off Queue 아님. (60~100자)\n(C) Away — 에이전트가 일시적으로 자리 비운 상태. (60~100자)\n(D) Break — 에이전트가 휴식 중인 명시적 상태. Available과는 다름. (60~100자)\n\n【시험 포인트】\n▸ Queue Status = 호출 가용성\n▸ On Queue = Active 상태\n▸ Off Queue = Available (비호출 상태)\n▸ 직원 배치 = Queue 상태 기반 조정",
    "en_q": "When you change an agent’s queue status from On Queue to Off Queue, what is the agent’s status displayed as in the view?",
    "en_opts": {
      "A": "Available",
      "B": "Busy",
      "C": "Away",
      "D": "Break"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137622-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 184,
    "question": "다음 중 PCI 컴플라이언트 Genesys Cloud CX 조직이고 PCI DSS 설정이 활성화된 경우 사용할 수 없는 기능은 무엇입니까?",
    "options": {
      "A": "발신자 번호",
      "B": "프로토콜 캡처",
      "C": "미디어 캡처",
      "D": "SIP 액세스 레벨"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ PCI DSS — 카드 소유자 데이터 보안 표준\n▸ PCI 컴플라이언스 — 결제 카드 데이터 보호\n▸ 미디어 캡처 제한 — 음성 데이터 녹음 금지\n\n【정답 포인트】\n▸ \n(C) 정답 — 미디어 캡처 비활성화 필수\n▸ PCI DSS 규정 → 카드 소유자 데이터 보호\n▸ 음성 통화 녹음 → 카드 정보 포함 가능\n▸ 미디어 캡처 비활성화 → 카드 데이터 유출 방지\n\n【오답 체크】\n(A) 발신자 번호 — 통화 라우팅용. PCI DSS와 무관. (60~100자)\n(B) 프로토콜 캡처 — 네트워크 진단용. PCI DSS 직접 제약 없음. (60~100자)\n(D) SIP 액세스 레벨 — 네트워크 보안. PCI DSS 특정 대상 아님. (60~100자)\n\n【시험 포인트】\n▸ PCI DSS = 음성 데이터 보호\n▸ 미디어 캡처 = 카드 정보 유출 위험\n▸ 클라우드 통신 = 규정 준수로 기능 제한\n▸ 콜 센터 = PCI 데이터 취급 시 필수 제한",
    "en_q": "Which of the following features is unavailable if you are a PCI-compliant Genesys Cloud CX organization and have the PCI DSS setting enabled?",
    "en_opts": {
      "A": "Calling Address",
      "B": "Protocol Capture",
      "C": "Media Capture",
      "D": "SIP Access Level"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137623-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 185,
    "question": "외부 트렁크를 생성할 때 다음 중 선택할 수 있는 프로토콜은? (3개 선택)",
    "options": {
      "A": "RTP",
      "B": "TCP",
      "C": "TLS",
      "D": "SIP",
      "E": "UDP"
    },
    "answer": "BCE",
    "explanation": "【핵심 용어】\n▸ External Trunk — 외부 통신망 연결\n▸ 신호 프로토콜 — SIP 신호 전송 방식\n▸ 전송 프로토콜 — TCP/UDP 기반\n\n【정답 포인트】\n▸ \n(B) TCP — SIP 신호 전송 (신뢰성)\n▸ \n(C) TLS — 암호화된 신호 (보안)\n▸ \n(E) UDP — RTP 미디어 전송용\n▸ SIP + TCP/TLS/UDP 조합으로 안전한 통신\n\n【오답 체크】\n(A) RTP — 미디어 프로토콜. 신호 트렁크 선택 옵션 아님. (60~100자)\n(D) SIP — 기본 신호 프로토콜. 트렁크 설정에서 자동 포함. (60~100자)\n\n【시험 포인트】\n▸ 신호 = TCP/TLS (SIP)\n▸ 미디어 = UDP (RTP)\n▸ 보안 = TLS 암호화 신호\n▸ 트렁크 설정 = 프로토콜 계층 구분 필수",
    "en_q": "When creating an external trunk, which of the following protocol(s) can be selected? (Choose three.)",
    "en_opts": {
      "A": "RTP",
      "B": "TCP",
      "C": "TLS",
      "D": "SIP",
      "E": "UDP"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137624-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 186,
    "question": "DID 번호를 어느 것에 할당할 수 있습니까? (3개 선택)",
    "options": {
      "A": "외부 트렁크",
      "B": "담당자",
      "C": "콜 플로우",
      "D": "전화기",
      "E": "큐",
      "F": "Edge"
    },
    "answer": "BCD",
    "explanation": "【핵심 용어】\n▸ DID — Direct Inward Dialing 번호\n▸ 라우팅 대상 — 외부 직접 연결점\n▸ 콜 센터 구축 — 개인/부서/자동응답\n\n【정답 포인트】\n▸ \n(B) 담당자 — 특정 직원에게 DID 할당\n▸ \n(C) 콜 플로우 — 자동응답 시스템으로 라우팅\n▸ \n(D) 전화기 — 특정 물리 단말로 할당\n▸ 외부 발신자가 직접 대상으로 연결 가능\n\n【오답 체크】\n(A) 외부 트렁크 — 네트워크 연결점. DID 할당 대상 아님. (60~100자)\n(E) 큐 — 대기열 관리. DID는 큐로 할당 불가능. (60~100자)\n(F) Edge — 네트워크 엣지 장비. DID 할당 대상 아님. (60~100자)\n\n【시험 포인트】\n▸ DID = 개인/부서/자동응답 할당\n▸ 콜 라우팅 = DID 기반 직접 연결\n▸ 콜 센터 = DID로 부서 분류\n▸ 네트워크 요소 ≠ DID 할당 대상",
    "en_q": "Where can DID Numbers be assigned to? (Choose three.)",
    "en_opts": {
      "A": "External Trunk",
      "B": "Person",
      "C": "Call Flow",
      "D": "Phone",
      "E": "Queue",
      "F": "Edge"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137625-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 187,
    "question": "멀웨어가 감지되고 분석되는 순서는 무엇입니까?",
    "options": {
      "A": "안티바이러스 스캔 -> 캐시 조회 -> 동적 분석 -> 정적 분석",
      "B": "캐시 조회 -> 안티바이러스 스캔 -> 정적 분석 -> 동적 분석",
      "C": "안티바이러스 스캔 -> 캐시 조회 -> 정적 분석 -> 동적 분석",
      "D": "캐시 조회 -> 정적 분석 -> 동적 분석 -> 안티바이러스 스캔"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 멀웨어 분석 파이프라인 — 효율성 + 정확도\n▸ 캐시 조회 — 이미 알려진 파일 빠른 판정\n▸ 정적 분석 — 파일 구조 검사\n▸ 동적 분석 — 런타임 동작 모니터링\n\n【정답 포인트】\n▸ \n(B) 정답 — 캐시 조회 → 안티바이러스 스캔 → 정적 분석 → 동적 분석\n▸ 캐시 먼저 = 가장 빠른 검증\n▸ 서명 스캔 = 이미 알려진 악성 파일 탐지\n▸ 정적 분석 = 파일 코드/구조 검사\n▸ 동적 분석 = 실제 실행 모니터링 (시간 소모)\n\n【오답 체크】\n(A) 캐시 조회 누락 — 초반 캐시 확인 생략은 비효율. (60~100자)\n(C) 안티바이러스 스캔 먼저 — 캐시 확인 우선. 중복 스캔 피함. (60~100자)\n(D) 안티바이러스 마지막 — 로직 역순. 서명 스캔이 먼저 수행. (60~100자)\n\n【시험 포인트】\n▸ 멀웨어 탐지 = 캐시→서명→정적→동적\n▸ 성능 최적화 = 빠른 검증 우선\n▸ 정확도 = 깊이 있는 분석 보완\n▸ 실무 구현 = 파이프라인 효율성 필수",
    "en_q": "What is the order in which malware is detected and analyzed?",
    "en_opts": {
      "A": "antivirus scanning –> cache lookup –> dynamic analysis –> static analysis",
      "B": "cache lookup –> antivirus scanning –> static analysis –> dynamic analysis",
      "C": "antivirus scanning –> cache lookup –> static analysis –> dynamic analysis",
      "D": "cache lookup –> static analysis –> dynamic analysis –> antivirus scanning"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137626-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 188,
    "question": "라우팅 테이블의 경로 10.0.1.3/32는 무엇을 나타냅니까?",
    "options": {
      "A": "10.0.1.0 서브넷의 모든 호스트",
      "B": "단일 목적지 주소",
      "C": "소스 10.0.1.100",
      "D": "10.0.0.0 네트워크"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CIDR 표기법 — /32는 호스트 라우트\n▸ 서브넷 마스크 — 255.255.255.255 (/32)\n▸ 호스트 라우팅 — 단일 IP 주소 대상\n\n【정답 포인트】\n▸ \n(B) 정답 — 단일 목적지 주소\n▸ /32 프리픽스 = 모든 비트가 네트워크\n▸ 정확히 하나의 IP 주소만 지정\n▸ 특정 호스트로의 직접 라우팅\n\n【오답 체크】\n(A) 10.0.1.0/24 — 전체 서브넷 (256개 호스트). /32는 1개만. (60~100자)\n(C) 소스 주소 — 라우팅 테이블은 목적지 기반. 소스와 무관. (60~100자)\n(D) 10.0.0.0/16 — 전체 네트워크. /32는 단일 호스트. (60~100자)\n\n【시험 포인트】\n▸ /32 = 호스트 라우트\n▸ /31 = 포인트-투-포인트 (2개 호스트)\n▸ /24 = C클래스 네트워크 (256개 호스트)\n▸ 라우팅 최적화 = 호스트 라우트 필요 시 /32 사용",
    "en_q": "Refer to the exhibit. What does route 10.0.1.3/32 represent in the routing table?",
    "en_opts": {
      "A": "all hosts in the 10.0.1.0 subnet",
      "B": "a single destination address",
      "C": "the source 10.0.1.100",
      "D": "the 10.0.0.0 network"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137627-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 189,
    "question": "패킷 모드 처리에 대한 올바른 설명은 무엇입니까?",
    "options": {
      "A": "패킷 모드는 수신 패킷의 세션 기반 처리를 활성화합니다.",
      "B": "패킷 모드는 NAT, VPN, UTM, IDP 및 기타 고급 보안 서비스와 함께 작동합니다.",
      "C": "패킷 모드는 흐름 모듈을 우회합니다.",
      "D": "패킷 모드는 상태 유지 처리의 기반입니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Packet Mode — 개별 패킷 처리\n▸ Flow-based Mode — 세션 기반 추적\n▸ 흐름 모듈 — 상태 유지 메커니즘\n\n【정답 포인트】\n▸ \n(C) 정답 — 패킷 모드는 흐름 모듈을 우회\n▸ 패킷 모드 = 각 패킷 독립 처리\n▸ 상태 추적(Flow State) 없음\n▸ 고급 기능 불필요한 경우 효율성 높음\n\n【오답 체크】\n(A) 세션 기반 처리 — 반대. 패킷 모드는 세션 추적 안 함. (60~100자)\n(B) 고급 보안 서비스 — Flow-based Mode에서만 작동. (60~100자)\n(D) 상태 유지 기반 — Flow-based Mode의 기반. (60~100자)\n\n【시험 포인트】\n▸ Packet Mode = 단순, 빠름\n▸ Flow-based Mode = 고급 기능, 상태 추적\n▸ 모드 선택 = 성능 vs 기능 트레이드오프\n▸ 실무 = 정책 요구에 따라 모드 결정",
    "en_q": "Which statement is correct about packet mode processing?",
    "en_opts": {
      "A": "Packet mode enables session-based processing of incoming packets.",
      "B": "Packet mode works with NAT, VPNs, UTM, IDP, and other advanced security services.",
      "C": "Packet mode bypasses the flow module.",
      "D": "Packet mode is the basis for stateful processing."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137628-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 190,
    "question": "인터페이스 이름을 식별해야 하는 올바른 순서는 무엇입니까?",
    "options": {
      "A": "시스템 슬롯 번호 -> 인터페이스 미디어 타입 -> 포트 번호 -> 라인 카드 슬롯 번호",
      "B": "시스템 슬롯 번호 -> 포트 번호 -> 인터페이스 미디어 타입 -> 라인 카드 슬롯 번호",
      "C": "인터페이스 미디어 타입 -> 시스템 슬롯 번호 -> 라인 카드 슬롯 번호 -> 포트 번호",
      "D": "인터페이스 미디어 타입 -> 포트 번호 -> 시스템 슬롯 번호 -> 라인 카드 슬롯 번호"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Juniper 인터페이스 명명 — 계층적 구조\n▸ 미디어 타입 — ge, et 등 인터페이스 타입\n▸ 슬롯 번호 — 물리적 위치 식별\n\n【정답 포인트】\n▸ \n(C) 정답 — 인터페이스 미디어 타입 → 시스템 슬롯 → 라인 카드 슬롯 → 포트 번호\n▸ 예: ge-0/0/0 (Gigabit Ethernet, PIC 0, 포트 0)\n▸ 미디어 타입 먼저 → 물리적 위치 순서대로\n\n【오답 체크】\n(A) 슬롯 먼저 — Juniper 표준과 맞지 않음. 타입이 접두사. (60~100자)\n(B) 포트 번호 위치 잘못 — 포트는 마지막. (60~100자)\n(D) 포트와 슬롯 순서 역함 — 슬롯-카드-포트 순서 필수. (60~100자)\n\n【시험 포인트】\n▸ Juniper = ge-FPC:PIC:port 형식\n▸ FPC = Flexible PIC Concentrator (시스템 슬롯)\n▸ PIC = Physical Interface Card (라인 카드)\n▸ 명확한 명명법 = 장비 관리 필수",
    "en_q": "What is the correct order in which interface names should be identified?",
    "en_opts": {
      "A": "system slot number –> interface media type –> port number –> line card slot number",
      "B": "system slot number –> port number –> interface media type –> line card slot number",
      "C": "interface media type –> system slot number –> line card slot number –> port number",
      "D": "interface media type –> port number –> system slot number –> line card slot number"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/137629-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 191,
    "question": "회사의 VPC에서 Amazon EC2 인스턴스들이 공인 인터넷을 통해 AWS 서비스와 통신하고 있습니다. 회사는 공인 인터넷을 거치지 않도록 통신을 변경해야 합니다. AWS PrivateLink 엔드포인트를 VPC에 배포했으나, 배포 후 EC2 인스턴스가 필요한 AWS 서비스와 더 이상 통신할 수 없습니다. AWS 서비스와의 통신을 복구하기 위해 네트워크 엔지니어가 취해야 할 조합 단계는 무엇입니까? (2개 선택)",
    "options": {
      "A": "VPC 라우트 테이블에서 PrivateLink 엔드포인트를 대상으로 하는 경로를 추가합니다.",
      "B": "VPC에 대해 enableDnsSupport 속성이 True로 설정되어 있는지 확인합니다. 각 VPC 엔드포인트에서 DNS 지원이 활성화되어 있는지 확인합니다.",
      "C": "VPC 엔드포인트 정책이 통신을 허용하는지 확인합니다.",
      "D": "모든 서비스에 대해 Amazon Route 53 공개 호스팅 영역을 생성합니다.",
      "E": "각 서비스에 대한 사용자 정의 이름을 포함하는 Amazon Route 53 프라이빗 호스팅 영역을 생성합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ VPC PrivateLink 엔드포인트 — AWS 서비스 프라이빗 액세스\n▸ DNS 해석 — 서비스 DNS를 프라이빗 IP로 변환\n▸ 엔드포인트 정책 — 통신 허용/거부 제어\n\n【정답 포인트】\n▸ \n(B) VPC enableDnsSupport = True 확인 → AWS 서비스 DNS를 프라이빗 IP로 변환\n▸ 각 VPC 엔드포인트 DNS 지원 활성화 필수\n▸ \n(C) 엔드포인트 정책 검증 → 기본값 deny-all, 명시적 Allow 설정 필요\n▸ 라우팅 추가 불필요 (DNS 해석으로 작동)\n\n【오답 체크】\n(A) 라우트 테이블 경로 추가 — 불필요. PrivateLink는 DNS 기반. 라우팅 불필요. (60~100자)\n(D) Route 53 공개 호스팅 존 — 공개 인터넷 경로. 역효과. VPC 엔드포인트 DNS 사용. (60~100자)\n(E) Route 53 프라이빗 호스팅 존 — 불필요. VPC 엔드포인트 기본 DNS 지원으로 충분. (60~100자)\n\n【시험 포인트】\n▸ PrivateLink DNS = enableDnsSupport(VPC) + 엔드포인트 DNS 활성화\n▸ 엔드포인트 정책 = 명시적 Allow (deny-all 기본값)\n▸ 라우팅 테이블 = 불필요 (DNS 해석이 핵심)\n▸ Route 53 호스팅 존 = 불필요한 추가 구성",
    "en_q": "A company's VPC has Amazon EC2 instances that are communicating with AWS services over the public internet. The company needs to change the connectivity so that the communication does not occur over the public internet. The company deploys AWS PrivateLink endpoints in the VPC. After the deployment of the PrivateLink endpoints, the EC2 instances can no longer communicate at all with the required AWS services. Which combination of steps should a network engineer take to restore communication with the AWS services? (Choose two.)",
    "en_opts": {
      "A": "In the VPC route table, add a route that has the PrivateLink endpoints as the destination.",
      "B": "Ensure that the enableDnsSupport attribute is set to True for the VPC. Ensure that each VPC endpoint has DNS support enabled.",
      "C": "Ensure that the VPC endpoint policy allows communication.",
      "D": "Create an Amazon Route 53 public hosted zone for all services.",
      "E": "Create an Amazon Route 53 private hosted zone that includes a custom name for each service."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/141574-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 192,
    "question": "국제 회사는 멀티 사이트 하이브리드 인프라를 구현하려고 합니다. 회사는 AWS 클라우드 리소스를 us-east-1 리전과 eu-west-2 리전에, 온프레미스 데이터 센터를 미국(US)과 영국(UK)에 배포하려고 합니다. 데이터 센터는 프라이빗 WAN 연결로 상호 연결되어 있으며, BGP를 통해 IP 라우팅 정보를 동적으로 교환합니다. 회사는 US와 UK에 각각 하나씩, 2개의 AWS Direct Connect 연결을 원합니다. 각 리전에서 15개의 VPC가 있을 것으로 예상되며, CIDR 블록은 서로 겹치지 않고 온프레미스 환경과도 겹치지 않습니다. VPC CIDR 블록은 리전 수준 및 전체 AWS 환경에서 접두사 집계를 수행하도록 계획됩니다. 각 리전에 transit gateway를 배포하여 VPC를 연결합니다. 네트워크 엔지니어는 각 리전에 Direct Connect gateway를 사용하려고 합니다. transit VIF가 각 리전의 Direct Connect gateway를 해당 리전의 transit gateway에 연결합니다. transit gateway들은 피어링됩니다. 네트워크 엔지니어는 트래픽이 소스에서 목적지까지의 가장 짧은 지역 경로를 따르도록 보장하려고 합니다. 온프레미스 데이터 센터와 AWS 간의 트래픽은 로컬 Direct Connect 연결을 통해 이동해야 합니다. US 데이터 센터와 eu-west-2 간, 그리고 UK 데이터 센터와 us-east-1 간의 트래픽은 Direct Connect 연결이 사용 가능할 때 적절한 리전의 Direct Connect 연결에 도달하기 위해 프라이빗 WAN 연결을 사용해야 합니다. 네트워크는 프라이빗 WAN 연결 또는 Direct Connect 연결의 장애에 복원력이 있어야 합니다. 네트워크는 모든 장애 발생 시 자동으로 트래픽을 다시 라우팅해야 합니다. Direct Connect gateway의 transit VIF 연결을 어떻게 구성해야 합니까?",
    "options": {
      "A": "회사 전체 AWS 환경의 집계 경로만 광고합니다.",
      "B": "로컬 리전의 VPC 특정 CIDR 접두사만 광고합니다. 또한 회사 전체 AWS 환경의 집계 경로를 광고합니다.",
      "C": "두 리전의 모든 특정 VPC CIDR 블록을 광고합니다.",
      "D": "두 개의 리역 집계 접두사를 광고합니다. 데이터 센터로 광고되는 경로에서 사용자 정의 BGP 커뮤니티를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ BGP Longest Prefix Match — 더 구체적인(긴) 접두사를 우선하는 경로 선택 메커니즘\n▸ 접두사 집계(Aggregation) — 여러 CIDR을 상위 범위로 요약(예: /16 상위 15개 VPC /20)\n▸ Transit VIF — Direct Connect Gateway와 Transit Gateway 간 연결\n\n【정답 포인트】\n▸ 로컬 리전 VPC는 구체적인 /20 CIDR 광고 → longest prefix match로 로컬 Direct Connect 선호\n(B)\n▸ 원격 리전은 집계된 경로만 광고 → 재해복구 시 WAN을 통해 원격 Direct Connect 도달 가능\n▸ BGP 원리로 자동 페일오버 달성(로컬 연결 장애 시 WAN 경로 사용)\n\n【오답 체크】\n(A) 집계 경로만 광고 — 로컬 최적화 불가. 모든 트래픽이 가장 가까운 경로를 보장하지 못함\n(C) 모든 특정 VPC CIDR(30개) 광고 — 경로 테이블 폭발, 경로 경합, 복잡도 증가\n(D) BGP 커뮤니티 — 추가 설정 필요. prefix 전략이 더 효율적(자동 페일오버)\n\n【시험 포인트】\n▸ 다지역 경로 최적화 → 로컬 구체적(최장매칭) + 원격 집계(페일오버) 조합\n▸ 함정:\n(C) 는 15개 VPC를 모두 광고하면 경로 복잡도 폭증, 운영 비효율",
    "en_q": "An international company wants to implement a multi-site hybrid infrastructure. The company wants to deploy its cloud computing resources on AWS in the us-east-1 Region and in the eu-west-2 Region, and in on-premises data centers in the United States (US) and in the United Kingdom (UK). The data centers are connected to each other by a private WAN connection. IP routing information is exchanged dynamically through BGP. The company wants to have two AWS Direct Connect connections, one each in the US and the UK. The company expects to have 15 VPCs in each Region with CIDR blocks that do not overlap with each other or with CIDR blocks of the on-premises environment. The VPC CIDR blocks are planned so that the prefix aggregation can be performed both on a Regional level and across the entire AWS environment. The company will deploy a transit gateway in each Region to connect the VPCs. A network engineer plans to use a Direct Connect gateway in each Region. A transit VIF will attach the Direct Connect gateway in each Region to the transit gateway in that Region. The transit gateways will be peered with each other. The network engineer wants to ensure that traffic follows the shortest geographical path from source to destination. Traffic between the on-premises data centers and AWS must travel across a local Direct Connect connection. Traffic between the US data center and eu-west-2 and traffic between the UK data center and us-east-1 must use the private WAN connection to reach the Direct Connect connection to the appropriate Region when the Direct Connect connection is available. The network must be resilient to failures in either the private WAN connection or with the Direct Connect connections. The network also must reroute traffic automatically in the event of any failure. How should the network engineer configure the transit VIF associations on the Direct Connect gateways to meet these requirements?",
    "en_opts": {
      "A": "Advertise only the aggregate route for the company's entire AWS environment.",
      "B": "Advertise VPC-specific CIDR prefixes from only the local Region. Additionally, advertise the aggregate route for the company's entire AWS environment.",
      "C": "Advertise all the specific VPC CIDR blocks from both Regions.",
      "D": "Advertise both Regional aggregate prefixes. Configure custom BGP communities on the routes advertised toward the data center."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142313-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 193,
    "question": "회사의 AWS 인프라는 50개 이상의 계정과 5개의 AWS 리전에 걸쳐 있습니다. 회사는 AWS Firewall Manager를 사용하여 모든 AWS 계정의 보안 태세를 단순한 관리 및 유지보수로 관리해야 합니다. 회사는 firewall 규칙 및 요구사항을 관리하기 위해 AWS Firewall Manager를 사용하려고 합니다. 회사는 AWS Organizations에서 모든 기능이 활성화된 조직을 생성했습니다. 요구사항을 충족하기 위해 회사가 다음으로 취해야 할 조합 단계는 무엇입니까? (3개 선택)",
    "options": {
      "A": "Firewall Manager 관리자 계정만 조직에 가입하도록 구성합니다.",
      "B": "모든 계정이 조직에 가입하도록 구성합니다.",
      "C": "계정을 Firewall Manager 관리자 계정으로 설정합니다.",
      "D": "계정을 Firewall Manager 자식 계정으로 설정합니다.",
      "E": "회사가 리소스를 보유한 모든 계정과 모든 리전에서 AWS Config를 설정합니다.",
      "F": "조직의 관리 계정에서만 AWS Config를 설정합니다."
    },
    "answer": "BCE",
    "explanation": "【핵심 용어】\n▸ AWS Firewall Manager — Organizations 단위 중앙 집중식 방화벽 정책 관리\n▸ AWS Config — 리소스 규정 준수 모니터링(Firewall Manager의 필수 종속성)\n▸ Firewall Manager 관리자 계정 — 조직의 다른 계정 firewall 정책을 관리하는 중앙 역할\n\n【정답 포인트】\n▸ 모든 계정 조직 가입\n(B) → Firewall Manager가 관할할 수 있는 범위 확대\n▸ 관리자 계정 지정\n(C) → 중앙에서 firewall 정책 배포 및 관리\n▸ 모든 계정의 모든 리전에서 AWS Config\n(E) → 규정 준수 모니터링, 정책 적용 검증\n\n【오답 체크】\n(A) 관리자 계정만 가입 — Firewall Manager가 다른 계정을 접근할 수 없음. 모든 계정 필요\n(D) 자식 계정 설정 — Firewall Manager 용어가 아님. 조직 OUs 또는 계정 기반 구조 사용\n(F) 관리 계정에만 Config — 불충분. 관할 계정(member accounts)의 리소스 모니터링 불가\n\n【시험 포인트】\n▸ Firewall Manager 구성 → 모든 계정 + 관리자 지정 + AWS Config 전역 활성화\n▸ 함정: Config는 관리 계정만으로는 부족. 모든 리소스가 있는 계정 + 리전에서 필수",
    "en_q": "A company's AWS infrastructure is spread across more than 50 accounts and across five AWS Regions. The company needs to manage its security posture with simplified administration and maintenance for all the AWS accounts. The company wants to use AWS Firewall Manager to manage the firewall rules and requirements. The company creates an organization with all features enabled in AWS Organizations. Which combination of steps should the company take next to meet the requirements? (Choose three.)",
    "en_opts": {
      "A": "Configure only the Firewall Manager administrator account to join the organization.",
      "B": "Configure all the accounts to join the organization.",
      "C": "Set an account as the Firewall Manager administrator account.",
      "D": "Set an account as the Firewall Manager child account.",
      "E": "Set up AWS Config for all the accounts and all the Regions where the company has resources.",
      "F": "Set up AWS Config for only the organization's management account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142422-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 194,
    "question": "회사는 Application Load Balancer(ALB)를 원본으로 구성한 Amazon CloudFront 배포를 사용하고 있습니다. 네트워크 엔지니어는 ALB로의 모든 인바운드 트래픽이 CloudFront에서만 오도록 요구하는 솔루션을 구현해야 합니다. 네트워크 엔지니어는 애플리케이션 계층이 아닌 네트워크 계층에서 솔루션을 구현해야 합니다. 어느 솔루션이 가장 운영 효율적으로 요구사항을 충족합니까?",
    "options": {
      "A": "ALB의 보안 그룹에 CloudFront에 대한 AWS 관리형 접두사 목록을 허용하는 인바운드 규칙을 추가합니다.",
      "B": "ALB의 서브넷과 연결된 네트워크 ACL에 인바운드 규칙을 추가합니다. CloudFront에 대한 AWS 관리형 접두사 목록을 규칙의 소스로 사용합니다.",
      "C": "CloudFront가 ALB로 보내는 요청에 사용자 정의 HTTP 헤더를 추가하도록 CloudFront를 구성합니다.",
      "D": "AWS WAF 웹 ACL을 ALB와 연결합니다. CloudFront IP 세트의 트래픽을 허용하도록 AWS WAF 규칙을 구성합니다. AWS Lambda 함수를 사용하여 CloudFront IP 세트를 자동으로 업데이트합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS 관리형 접두사 목록 — AWS 서비스 IP 범위를 자동 관리(예: CloudFront IP)\n▸ 보안 그룹(Layer 4) — ALB 인바운드 필터, AWS 관리 접두사 목록 지원\n▸ 네트워크 ACL(Layer 3-4) — 서브넷 레벨 필터, 수동 관리 필요\n\n【정답 포인트】\n▸ 보안 그룹 + CloudFront 접두사 목록\n(A) → 네트워크 계층, 자동 유지보수\n▸ CloudFront IP 범위 변경 시 AWS가 접두사 목록 자동 업데이트\n▸ 운영 오버헤드 없음 — 수동 IP 관리 불필요\n\n【오답 체크】\n(B) 네트워크 ACL — 기술적으로 작동하지만, 보안 그룹보다 복잡하고 권장되지 않음\n(C) HTTP 헤더 검증 — 애플리케이션 계층. 문제는 \"네트워크 계층\" 구현 명시\n(D) AWS WAF + Lambda — 애플리케이션 계층(L7). Lambda 수동 관리로 운영 비효율\n\n【시험 포인트】\n▸ 네트워크 계층 필터링 → 보안 그룹(권장) 또는 네트워크 ACL\n▸ 함정: 자동 유지보수 가능한 AWS 관리형 접두사 목록 선택이 \"운영 효율적\"의 핵심",
    "en_q": "A company is using an Amazon CloudFront distribution that is configured with an Application Load Balancer (ALB) as an origin. A network engineer needs to implement a solution that requires all inbound traffic to the ALB to come from CloudFront. The network engineer must implement the solution at the network layer rather than in the application. Which solution will meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Add an inbound rule to the ALB's security group to allow the AWS managed prefix list for CloudFront.",
      "B": "Add an inbound rule to the network ACLs that are associated with the ALB's subnets. Use the AWS managed prefix list for CloudFront as the source in the rule.",
      "C": "Configure CloudFront to add a custom HTTP header to the requests that CloudFront sends to the ALB.",
      "D": "Associate an AWS WAF web ACL with the ALB. Configure the AWS WAF rules to allow traffic from the CloudFront IP set. Automatically update the CloudFront IP set by using an AWS Lambda function."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/141575-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 195,
    "question": "회사는 AWS Organizations의 조직 내에 AWS 계정을 가지고 있습니다. 회사는 네트워킹 AWS 계정에서 Amazon VPC IP Address Manager(IPAM)를 구현했습니다. 회사는 AWS Resource Access Manager(AWS RAM)를 사용하여 IPAM 풀을 다른 AWS 계정과 공유하고 있습니다. 회사는 10.0.0.0/8의 CIDR 블록으로 최상위 풀을 생성했습니다. 각 AWS 계정에 대해 회사는 최상위 풀 내에 IPAM 풀을 생성했습니다. 네트워크 엔지니어는 각 AWS 계정의 사용자가 새로운 VPC를 생성할 수 없도록 보장하고, IPAM 풀에서 CIDR 블록을 할당하는 방식으로 기존 VPC에 CIDR 블록을 연결하는 것만 허용하도록 솔루션을 구현해야 합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "IPAM 풀에서 CIDR 블록을 할당하도록 구성되지 않은 모든 VPC를 찾는 새로운 AWS Config 규칙을 생성합니다. 이러한 VPC를 삭제하도록 AWS Lambda 함수를 호출합니다.",
      "B": "Organizations에서 새로운 SCP를 생성합니다. Ipv4IpamPoolId 컨텍스트 키 값이 IPAM 풀의 ID가 아닌 경우 CreateVpc 및 AssociateVpcCidrBlock Amazon EC2 작업을 거부하는 조건을 추가합니다.",
      "C": "IPAM 풀에서 CIDR 블록을 할당하도록 구성되지 않은 모든 VPC를 찾아 삭제하는 AWS Lambda 함수를 생성합니다. 정기적인 간격으로 Lambda 함수를 호출합니다.",
      "D": "CreateVpc 및 AssociateVpcCidrBlock Amazon EC2 작업에 대한 AWS CloudTrail 이벤트를 확인하는 Amazon EventBridge 규칙을 생성합니다. 규칙을 사용하여 IPAM 풀에서 CIDR 블록을 할당하도록 구성되지 않은 모든 VPC를 삭제하는 AWS Lambda 함수를 호출합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SCP(Service Control Policy) — Organizations 레벨 API 호출 제어(preventive)\n▸ AWS Config — VPC 규정 준수 모니터링(reactive, 사후 감지)\n▸ Ipv4IpamPoolId 컨텍스트 키 — CreateVpc/AssociateVpcCidrBlock의 CIDR 출처 검증\n\n【정답 포인트】\n▸ SCP로 CreateVpc/AssociateVpcCidrBlock 호출 자체를 제한\n(B)\n▸ Ipv4IpamPoolId = 조직의 IPAM 풀 ID 조건 추가\n▸ 정책 레벨 차단 → 우회 불가능, 사전 예방(preventive control)\n\n【오답 체크】\n(A) AWS Config + 규칙 위반 감지 — 이미 생성된 VPC 발견 후 삭제(reactive)\n(C) Lambda 정기 호출 — 사후 감시, 운영 비용 증가, 삭제 오류 위험\n(D) EventBridge + CloudTrail 감시 — 이벤트 발생 후 삭제(reactive), 데이터 손실 가능성\n\n【시험 포인트】\n▸ VPC 생성 제약 → 사전(preventive) vs 사후(reactive) 제어 비교\n▸ 함정: Config/Lambda는 \"사후 삭제\" 방식으로 데이터 손실·운영 비효율. SCP는 \"사전 차단\"으로 안전",
    "en_q": "A company has AWS accounts in an organization in AWS Organizations. The company has implemented Amazon VPC IP Address Manager (IPAM) in its networking AWS account. The company is using AWS Resource Access Manager (AWS RAM) to share IPAM pools with other AWS accounts. The company has created a top-level pool with a CIDR block of 10.0.0.0/8. For each AWS account, the company has created an IPAM pool within the top-level pool. A network engineer needs to implement a solution to ensure that users in each AWS account cannot create new VPCs. The solution also must prevent users from associating a CIDR block with existing VPCs unless the CIDR block is from the IPAM pool for that account. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a new AWS Config rule to find all VPCs that are not configured to allocate their CIDR block from an IPAM pool. Invoke an AWS Lambda function to delete these VPCs.",
      "B": "Create a new SCP in Organizations. Add a condition that denies the CreateVpc and AssociateVpcCidrBlock Amazon EC2 actions if the Ipv4IpamPoolId context key value is not the ID of an IPAM pool.",
      "C": "Create an AWS Lambda function to check for and delete all VPCs that are not configured to allocate their CIDR block from an IPAM pool. Invoke the Lambda function at regular intervals.",
      "D": "Create an Amazon EventBridge rule to check for AWS CloudTrail events for the CreateVpc and AssociateVpcCidrBlock Amazon EC2 actions. Use the rule to invoke an AWS Lambda function to delete all VPCs that are not configured to allocate their CIDR block from an IPAM pool."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142424-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 196,
    "question": "회사는 온프레미스에서 실행 중인 애플리케이션이 AWS의 VPC에서 실행 중인 애플리케이션과 통신해야 합니다. 애플리케이션 간의 통신은 암호화되어야 하고 프라이빗 IP 주소를 사용해야 합니다. 통신은 공인 인터넷을 거칠 수 없습니다. 회사는 온프레미스 위치와 AWS 간에 1 Gbps AWS Direct Connect 연결을 구축했습니다. 가장 적은 운영 오버헤드로 연결 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Direct Connect 연결에서 프라이빗 VIF를 구성합니다. 프라이빗 VIF를 VPC의 virtual private gateway와 연결합니다. VPC의 virtual private gateway에 AWS Site-to-Site VPN 프라이빗 IP VPN 연결을 설정합니다.",
      "B": "transit gateway를 생성합니다. Direct Connect 연결에서 transit VIF를 구성합니다. transit VIF를 Direct Connect gateway와 연결합니다. Direct Connect gateway를 새로운 transit gateway와 연결합니다. transit gateway에 AWS Site-to-Site VPN 프라이빗 IP VPN 연결을 설정합니다.",
      "C": "Direct Connect 연결에서 공개 VIF를 구성합니다. 공개 VIF를 Direct Connect gateway와 연결합니다. Direct Connect gateway를 새로운 transit gateway와 연결합니다. transit gateway에 AWS Site-to-Site VPN 프라이빗 IP VPN 연결을 설정합니다.",
      "D": "transit gateway를 생성합니다. Direct Connect 연결에서 transit VIF를 구성합니다. transit VIF를 Direct Connect gateway와 연결합니다. Direct Connect gateway를 새로운 transit gateway와 연결합니다. 새로운 VPC에 서드파티 방화벽을 설정하고 이를 transit gateway에 연결합니다. 서드파티 방화벽에 대한 VPN 연결을 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS PrivateLink — 프라이빗하게 SaaS 또는 AWS 서비스 접근 가능한 VPC 엔드포인트\n▸ VPC 엔드포인트 서비스 — PrivateLink 기반 서비스 제공자(예: 파트너 SaaS)\n▸ 보안 그룹 — 엔드포인트 서비스의 백엔드 네트워크 인터페이스(ENI) 수신 허용\n\n【정답 포인트】\n▸ VPC 엔드포인트 서비스 생성(제공자) → 서비스 이름 노출\n▸ 소비자 VPC에서 엔드포인트 생성 → 프라이빗하게 접근\n▸ 서비스 보안 그룹이 엔드포인트 traffic 허용해야 통신 가능\n\n【오답 체크】\n(A) 로드 밸런서 직접 노출 — PrivateLink 아님. 공인 인터넷 경로 또는 VPN 필요\n(B) VPC 피어링 — 공인 인터넷 우회하지만, PrivateLink보다 관리 복잡\n(D) S3 게이트웨이 엔드포인트 — S3용. 외부 서비스 노출에는 부적합\n\n【시험 포인트】\n▸ PrivateLink 2가지 구성 → 제공자(서비스) + 소비자(엔드포인트)\n▸ 함정: 제공자 쪽 보안 그룹이 모든 규칙의 기본. 거기가 먼저 차단되면 통신 불가",
    "en_q": "A company has an application that runs on premises. The application needs to communicate with an application that runs in a VPC on AWS. The communication between the applications must be encrypted and must use private IP addresses. The communication cannot travel across the public internet. The company has established a 1 Gbps AWS Direct Connect connection between the on-premises location and AWS. Which solution will meet the connectivity requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Configure a private VIF on the Direct Connect connection. Associate the private VIF with the VPC's virtual private gateway. Set up an AWS Site-to-Site VPN private IP VPN connection to the virtual private gateway.",
      "B": "Create a transit gateway. Configure a transit VIF on the Direct Connect connection. Associate the transit VIF with a Direct Connect gateway. Associate the Direct Connect gateway with a new transit gateway. Set up an AWS Site-to-Site VPN private IP VPN connection to the transit gateway.",
      "C": "Configure a public VIF on the Direct Connect connection. Associate the public VIF with a Direct Connect gateway. Associate the Direct Connect gateway with a new transit gateway. Set up an AWS Site-to-Site VPN private IP VPN connection to the transit gateway.",
      "D": "Create a transit gateway. Configure a transit VIF on the Direct Connect connection. Associate the transit VIF with a Direct Connect gateway. Associate the Direct Connect gateway with a new transit gateway. Set up a third-party firewall in a new VPC that is attached to the transit gateway. Set up a VPN connection to the third-party firewall."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/141576-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 197,
    "question": "회사는 Paris, France의 온프레미스 데이터 센터와 AWS 클라우드 간의 연결을 AWS Direct Connect를 사용하여 구축했습니다. 회사는 Direct Connect 연결을 Europe(Paris) 리전에 호스팅된 transit gateway와 연결하는 transit VIF를 사용합니다. 회사는 transit gateway에 연결된 여러 VPC의 프라이빗 서브넷에서 워크로드를 호스팅하고 있습니다. 회사는 최근 Tokyo, Japan의 온프레미스 사무실에서 워크로드를 호스팅하는 또 다른 회사를 인수했습니다. 회사는 Tokyo 사무실에서 AWS로 워크로드를 마이그레이션해야 합니다. 이러한 워크로드는 Paris의 기존 워크로드에 액세스할 수 있어야 합니다. 또한 Tokyo 사무실과 Paris 데이터 센터 간에 연결을 구축해야 합니다. Asia Pacific(Tokyo) 리전에서 회사는 마이그레이션을 위해 프라이빗 서브넷이 있는 새로운 VPC를 생성합니다. 워크로드 마이그레이션은 5일 내에 완료되어야 합니다. 워크로드는 인터넷에서 직접 접근할 수 없어야 합니다. 요구사항을 충족하기 위해 네트워크 엔지니어가 취해야 할 단계 조합은 무엇입니까?",
    "options": {
      "A": "1. Tokyo VPC에 공개 서브넷을 생성하여 워크로드를 마이그레이션합니다. 2. Tokyo 사무실이 Tokyo VPC에 도달하도록 internet gateway를 구성합니다. 3. Tokyo 워크로드의 보안 그룹을 Tokyo 사무실과 Paris 워크로드의 트래픽만 허용하도록 구성합니다. 4. Tokyo VPC와 Paris VPC 간 피어링 연결을 생성합니다. 5. 기존 라우터를 사용하여 Paris 데이터 센터와 Tokyo 사무실 간 VPN 연결을 구성합니다.",
      "B": "1. Asia Pacific(Tokyo) 리전에 transit gateway를 구성합니다. 이 transit gateway를 Tokyo VPC와 연결합니다. 2. Tokyo transit gateway와 Paris transit gateway 간 피어링 연결을 생성합니다. 3. Tokyo 사무실에서 Tokyo transit gateway로 새로운 Direct Connect 연결을 설정합니다. 4. 두 transit gateway에서 라우팅을 구성하여 사이트와 VPC 간에 데이터가 흐르도록 합니다.",
      "C": "1. Asia Pacific(Tokyo) 리전에 transit gateway를 구성합니다. 이 transit gateway를 Tokyo VPC와 연결합니다. 2. Tokyo transit gateway와 Paris transit gateway 간 피어링 연결을 생성합니다. 3. Tokyo 사무실에서 AWS Site-to-Site VPN 연결을 구성합니다. Tokyo transit gateway를 대상으로 설정합니다. 4. 두 transit gateway에서 라우팅을 구성하여 사이트와 VPC 간에 데이터가 흐르도록 합니다.",
      "D": "1. Tokyo 사무실에서 Paris transit gateway로 AWS Site-to-Site VPN 연결을 구성합니다. 2. Paris transit gateway와 Tokyo VPC 간 연결을 생성합니다. 3. Paris transit gateway에서 라우팅을 구성하여 사이트와 VPC 간에 데이터가 흐르도록 합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Direct Connect 연결 — AWS로의 전용 네트워크 회선(공인 인터넷 우회)\n▸ VIF(Virtual Interface) — Direct Connect 위의 VLAN 기반 논리적 연결\n▸ Private VIF — VPC로의 프라이빗 연결\n▸ Transit VIF — Transit Gateway로의 연결(여러 VPC 지원)\n\n【정답 포인트】\n▸ 온프레미스와 여러 VPC 연결 → Transit VIF(Transit Gateway 경유)\n▸ Direct Connect Gateway — 리전별 중앙 진입점\n▸ Transit Gateway 피어링 — 리전 간 VPC 통신\n\n【오답 체크】\n(A) Private VIF만 — 1 VPC당 1 VIF. 15 VPC = 15 VIF 관리 복잡\n(B) VGW(Virtual Private Gateway) + VPN — 성능 낮음, 공인 인터넷 경로\n(D) AWS PrivateLink — 단방향 서비스 노출. 양방향 멀티 VPC 연결 부적합\n\n【시험 포인트】\n▸ 다중 VPC 및 리전 → Transit VIF + Transit Gateway 조합\n▸ 함정: Private VIF는 VPC당 1개씩 필요하므로 15 VPC = 15 VIF 관리 번거로움",
    "en_q": "A company has established connectivity between its on-premises data center in Paris. France, and the AWS Cloud by using an AWS Direct Connect connection. The company uses a transit VIF that connects the Direct Connect connection with a transit gateway that is hosted in the Europe (Paris) Region. The company hosts workloads in private subnets in several VPCs that are attached to the transit gateway. The company recently acquired another corporation that hosts workloads on premises in an office building in Tokyo, Japan. The company needs to migrate the workloads from the Tokyo office to AWS. These workloads must have access to the company's existing workloads in Paris. The company also must establish connectivity between the Tokyo office building and the Paris data center. In the Asia Pacific (Tokyo) Region, the company creates a new VPC with private subnets for migration of the workloads. The workload migration must be completed in 5 days. The workloads cannot be directly accessible from the internet. Which set of steps should a network engineer take to meet these requirements?",
    "en_opts": {
      "A": "1. Create public subnets in the Tokyo VPC to migrate the workloads into. 2. Configure an internet gateway for the Tokyo office to reach the Tokyo VPC. 3. Configure security groups on the Tokyo workloads to only allow traffic from the Tokyo office and the Paris workloads. 4. Create peering connections between the Tokyo VPC and the Paris VPCs. 5. Configure a VPN connection between the Paris data center and the Tokyo office by using existing routers.",
      "B": "1. Configure a transit gateway in the Asia Pacific (Tokyo) Region. Associate this transit gateway with the Tokyo VPC. 2. Create peering connections between the Tokyo transit gateway and the Paris transit gateway. 3. Set up a new Direct Connect connection from the Tokyo office to the Tokyo transit gateway. 4. Configure routing on both transit gateways to allow data to flow between sites and the VPCs.",
      "C": "1. Configure a transit gateway in the Asia Pacific (Tokyo) Region. Associate this transit gateway with the Tokyo VPC. 2. Create peering connections between the Tokyo transit gateway and the Paris transit gateway. 3. Configure an AWS Site-to-Site VPN connection from the Tokyo office. Set the Tokyo transit gateway as the target. 4. Configure routing on both transit gateways to allow data to flow between sites and the VPCs.",
      "D": "1. Configure an AWS Site-to-Site VPN connection from the Tokyo office to the Paris transit gateway. 2. Create an association between the Paris transit gateway and the Tokyo VPC. 3. Configure routing on the Paris transit gateway to allow data to flow between sites and the VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143038-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 198,
    "question": "Company A는 최근 Company B를 인수했습니다. Company A는 hosted AWS Direct Connect 연결, Direct Connect gateway, 그리고 transit gateway를 사용하는 하이브리드 AWS 및 온프레미스 환경을 가지고 있습니다. Company A는 transit VIF를 사용하여 us-east-1 리전의 프로덕션 환경의 리소스에 액세스합니다. Company B는 us-west-2 리전의 단일 AWS 계정에서 여러 VPC에 걸쳐 애플리케이션을 실행합니다. transit gateway가 Company B의 모든 애플리케이션 VPC를 연결합니다. 두 회사의 CIDR 블록은 겹치지 않습니다. Company A는 기존 Direct Connect 연결을 사용하여 온프레미스 환경에서 Company B의 애플리케이션에 액세스해야 합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "Company B 계정에 새로운 Direct Connect gateway를 생성합니다. Company B transit gateway를 새로운 Direct Connect gateway와 연결합니다. Company B에 대한 기존 hosted 연결에서 새로운 transit VIF를 생성합니다.",
      "B": "Company B 계정에서 Company B transit gateway를 Company A의 Direct Connect gateway와 연결하기 위한 연결 제안을 생성합니다. Company A 계정에 로그인하여 transit gateway 연결 제안을 수락합니다.",
      "C": "여러 virtual private gateway를 생성합니다. virtual private gateway를 Company B의 각 애플리케이션 VPC에 연결합니다. 각 virtual private gateway에 대해 hosted 프라이빗 VIF를 생성합니다.",
      "D": "Company B 계정에 새로운 Direct Connect gateway를 생성합니다. Company B transit gateway를 새로운 Direct Connect gateway와 연결합니다. Company B에 대한 hosted 프라이빗 VIF를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudFront Origin Shield — CloudFront와 Origin 사이의 추가 캐시 레이어\n▸ Origin 성능 — 반복되는 요청 시 Shield 캐시로 Origin 부하 감소\n▸ Cost — Origin Shield 활성화 시 추가 비용(request, data transfer)\n\n【정답 포인트】\n▸ Origin Shield = 중간 캐시 레이어 → Origin 부하 감소, 캐시 히트율 증가\n▸ 반복 요청이 많을수록 효과적(예: 핫 콘텐츠)\n▸ 비용 vs 이득 트레이드오프\n\n【오답 체크】\n(A) Origin Shield만으로는 Latency 보장 불가 — 캐시 미스 시 Origin으로 가야 함\n(B) CloudFront 엣지 로케이션 추가 — 이미 많음. 문제는 Origin 부하 감소\n(D) Origin 서버 스케일링 — 비용 많음. Shield로 먼저 부하 감소 시도\n\n【시험 포인트】\n▸ 반복 콘텐츠 요청 최적화 → Origin Shield 활성화(캐시 레이어 추가)\n▸ 함정: Shield는 모든 사용 케이스에 필요 X. 반복 요청이 많을 때만 효과적",
    "en_q": "Company A recently acquired Company B. Company A has a hybrid AWS and on-premises environment that uses a hosted AWS Direct Connect connection, a Direct Connect gateway, and a transit gateway. Company A has a transit VIF to access the resources in its production environment in the us-east-1 Region. Company B has applications that run across multiple VPCs in the us-west-2 Region in a single AWS account. A transit gateway connects all Company B's application VPCs. The CIDR blocks for both companies do not overlap. Company A needs to use the existing Direct Connect connection to access Company B's applications from the on-premises environment. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a new Direct Connect gateway in the Company B account. Associate the Company B transit gateway with the new Direct Connect gateway. Create a transit VIF on the existing hosted connection for Company B.",
      "B": "Create an association proposal from the Company B account to associate the Company B transit gateway with the Company A Direct Connect gateway. Accept the transit gateway association proposal by logging into the Company A account.",
      "C": "Create multiple virtual private gateways. Attach the virtual private gateways to each of Company B's application VPCs. Create a hosted private VIF for each virtual private gateway.",
      "D": "Create a new Direct Connect gateway in the Company B account. Associate the Company B transit gateway with the new Direct Connect gateway. Create a hosted private VIF for Company B."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142790-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 199,
    "question": "회사는 언어 번역 웹 서비스를 개발했습니다. 웹 서비스 애플리케이션은 Auto Scaling 그룹에 있는 Amazon EC2 인스턴스 집합에서 실행됩니다. 인스턴스는 Application Load Balancer(ALB) 뒤에 있고 프라이빗 서브넷에 배포됩니다. 웹 서비스는 수백 메가바이트의 데이터가 포함된 요청을 처리할 수 있습니다. 회사는 일부 고객에게 웹 서비스에 액세스할 수 있는 능력을 제공해야 합니다. 각 고객은 자신의 AWS 계정을 가지고 있습니다. 회사는 승인된 고객에게만 웹 서비스를 액세스 가능하게 하되 모든 고객에게 접근 가능하게 하면 안 됩니다. 가장 적은 운영 오버헤드로 요구사항을 충족할 조합 단계는 무엇입니까? (2개 선택)",
    "options": {
      "A": "승인된 고객에게만 VPC 피어링 연결을 생성합니다.",
      "B": "AWS PrivateLink 엔드포인트 서비스를 생성합니다. 엔드포인트 서비스가 승인된 고객에게만 부여될 수락을 요구하도록 구성합니다.",
      "C": "엔드포인트 서비스의 로드 밸런서에 대해 인증 작업을 구성하여 고객이 AWS 자격증명을 사용하여 로그인할 수 있도록 합니다. 승인된 고객에게만 URL을 제공합니다.",
      "D": "Network Load Balancer(NLB)와 ALB를 대상으로 하는 리스너를 구성합니다. NLB를 엔드포인트 서비스와 연결합니다.",
      "E": "ALB를 엔드포인트 서비스와 연결합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ Global Accelerator — 고정 IP 2개로 AWS 엣지 로케이션 경유 글로벌 라우팅\n▸ 엣지 로케이션 — Global Accelerator의 진입점(anycast IP)\n▸ Origin — 실제 애플리케이션(ALB, NLB, EC2, Elastic IP)\n\n【정답 포인트】\n▸ 글로벌 사용자 → 가장 가까운 엣지 로케이션 자동 라우팅\n▸ 고정 IP 2개 → DNS 변경 없음(IP 화이트리스팅 가능)\n▸ TCP/UDP 모두 지원(CloudFront는 HTTP/HTTPS만)\n\n【오답 체크】\n(A) CloudFront — HTTP/HTTPS만. TCP/UDP 프로토콜 지원 불가\n(B) Route 53 지리 기반 라우팅 — DNS 기반. IP 화이트리스팅 불가(DNS 변경)\n(D) VPN/Direct Connect — 글로벌 사용자 대상 부적합\n\n【시험 포인트】\n▸ 글로벌 + TCP/UDP + 고정 IP → Global Accelerator 조합\n▸ 함정: CloudFront는 HTTP/HTTPS만. 다른 프로토콜은 Global Accelerator 또는 Route 53",
    "en_q": "A company has developed a web service for language translation. The web service's application runs on a fleet of Amazon EC2 instances that are in an Auto Scaling group. The instances run behind an Application Load Balancer (ALB) and are deployed in a private subnet. The web service can process requests that contain hundreds of megabytes of data. The company needs to give some customers the ability to access the web service. Each customer has its own AWS account. The company must make the web service accessible to approved customers without making the web service accessible to all customers. Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)",
    "en_opts": {
      "A": "Create VPC peering connections with the approved customers only.",
      "B": "Create an AWS PrivateLink endpoint service. Configure the endpoint service to require acceptance that will be granted to approved customers only.",
      "C": "Configure an authentication action for the endpoint service's load balancer to allow customers to log in by using their AWS credentials. Provide only approved customers with the URL.",
      "D": "Configure a Network Load Balancer (NLB) and a listener with the ALB as a target. Associate the NLB with the endpoint service.",
      "E": "Associate the ALB with the endpoint service."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142426-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 200,
    "question": "회사는 애플리케이션을 AWS 클라우드로 마이그레이션하고 있습니다. 회사는 AWS Direct Connect와 온프레미스 데이터 센터 간의 연결을 성공적으로 프로비저닝하고 테스트했습니다. 애플리케이션은 여러 Availability Zone의 Amazon EC2 인스턴스에서 실행됩니다. 인스턴스는 Auto Scaling 그룹에 있습니다. 애플리케이션은 회사의 데이터 센터에 호스팅된 서드파티 공급업체의 데이터 서비스에 HTTPS를 통해 통신합니다. 데이터 서비스는 클라이언트 IP 주소의 명시적 허용 목록을 통해 정적 ACL을 구현합니다. 네트워크 엔지니어는 마이그레이션된 애플리케이션이 애플리케이션 규모 증가 시에도 공급업체의 데이터 서비스에 액세스할 수 있도록 하는 네트워크 솔루션을 설계해야 합니다. 가장 적은 공급업체 허용 목록 변경 사항으로 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "애플리케이션이 실행되는 각 Availability Zone의 서브넷에 프라이빗 NAT gateway를 구성합니다. 애플리케이션이 데이터 서비스를 직접 대상으로 하지 않고 NAT gateway를 대상으로 하도록 구성합니다. NAT gateway의 IP 주소를 포함하도록 데이터 서비스의 허용 목록을 업데이트합니다.",
      "B": "애플리케이션이 실행되는 각 Availability Zone의 서브넷에 elastic network interface를 구성합니다. elastic network interface를 애플리케이션의 Auto Scaling 그룹과 연결합니다. elastic network interface의 IP 주소를 포함하도록 데이터 서비스의 허용 목록을 업데이트합니다.",
      "C": "애플리케이션이 실행되는 각 Availability Zone의 서브넷에 elastic network interface를 구성합니다. 각 서브넷에 EC2 인스턴스를 시작합니다. 해당 elastic network interface를 새로운 EC2 인스턴스에 연결합니다. 애플리케이션 서브넷 라우트 테이블에서 새로운 EC2 인스턴스를 데이터 서비스의 다음 대상으로 구성합니다. elastic network interface의 IP 주소를 포함하도록 데이터 서비스의 허용 목록을 업데이트합니다.",
      "D": "각 Availability Zone의 서브넷에 Application Load Balancer(ALB)를 구성합니다. ALB 연결 대상 그룹을 데이터 서비스의 IP 주소를 사용하는 대상으로 포함하도록 구성합니다. 애플리케이션이 데이터 서비스를 직접 대상으로 하지 않고 ALB를 대상으로 하도록 구성합니다. ALB의 IP 주소를 포함하도록 데이터 서비스의 허용 목록을 업데이트합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Outposts — 온프레미스에 AWS 인프라 배포(AWS 관리)\n▸ AWS Local Zones — 대도시에 위치한 AWS 저지연 엣지(3자리 리전 코드)\n▸ Edge locations — CloudFront 캐시 엣지(용량 제한적)\n\n【정답 포인트】\n▸ 온프레미스 데이터센터 환경 → AWS Outposts 선택(완전 제어 가능)\n▸ Outposts는 AWS 관리형 하드웨어 + 소프트웨어 통합 제공\n▸ VPC 확장, EC2/RDS 실행 가능\n\n【오답 체크】\n(A) Local Zones — 온프레미스 아님. 도시 엣지 위치(3자리 지역 코드)\n(B) Edge locations — CloudFront 캐시 전용. 컴퓨팅 환경 부족\n(D) S3 Transfer Acceleration — 콘텐츠 전송 가속만. 온프레미스 인프라 배포 불가\n\n【시험 포인트】\n▸ 온프레미스 AWS 인프라 배포 → AWS Outposts 유일한 선택지\n▸ 함정: Local Zones과 Outposts 헷갈림. Local Zones는 \"지역\"이지 온프레미스 아님",
    "en_q": "A company is migrating an application to the AWS Cloud. The company has successfully provisioned and tested connectivity between AWS Direct Connect and the company's on-premises data center. The application runs on Amazon EC2 instances across multiple Availability Zones. The instances are in an Auto Scaling group. The application communicates through HTTPS to a third-party vendor's data service that is hosted at the company's data center. The data service implements a static ACL through explicit allow listing of client IP addresses. A network engineer must design a network solution so that the migrated application can continue to access the vendor's data service as the application scales. Which solution will meet these requirements with the LEAST amount of ongoing change to the vendor's allow list?",
    "en_opts": {
      "A": "Configure a private NAT gateway in the subnets for each Availability Zone that the application runs in. Configure the application to target the NAT gateways instead of the data service directly. Update the data service's allow list to include the IP addresses of the NAT gateways.",
      "B": "Configure an elastic network interface in the subnets for each Availability Zone that the application runs in. Associate the elastic network interfaces with the Auto Scaling group for the application. Update the data service's allow list to include the IP addresses of the elastic network interfaces.",
      "C": "Configure an elastic network interface in the subnets for each Availability Zone that the application runs in. Launch an EC2 instance into each subnet. Attach the respective elastic network interfaces to the new EC2 instances. In the application subnet route tables, configure the new EC2 instances as the next destination for the data service. Update the data service's allow list to include the IP addresses of the elastic network interfaces.",
      "D": "Configure an Application Load Balancer (ALB) in the subnets for each Availability Zone that the application runs in. Configure an ALB-associated target group that contains a target that uses the IP address for the data service. Configure the application to target the ALB instead of the data service directly. Update the data service's allow list to include the IP addresses of the ALBs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/144441-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 201,
    "question": "회사는 여러 VPC와 2개의 온프레미스 데이터 센터에서 호스팅되는 고가용성 애플리케이션을 보유하고 있습니다. 모든 VPC는 동일한 AWS 리전에 있습니다. 모든 VPC는 서로 및 온프레미스 데이터 센터에 액세스해야 하고, 수 기가바이트 규모의 파일을 전송해야 합니다. 네트워크 엔지니어는 온프레미스 데이터 센터를 각 VPC에 연결하는 AWS Direct Connect 솔루션을 설계하고 있습니다. 어느 아키텍처가 가장 적은 운영 오버헤드로 회사의 요구사항을 충족합니까?",
    "options": {
      "A": "각 VPC의 리전에 virtual private gateway와 프라이빗 VIF를 구성합니다. Direct Connect gateway를 구성합니다. 모든 VPC의 VIF를 Direct Connect gateway와 연결합니다. Direct Connect gateway를 각 온프레미스 데이터 센터에 연결하는 새로운 프라이빗 VIF를 생성합니다. 새로운 프라이빗 VIF가 온프레미스 데이터 센터와 BGP 경로를 교환하고 MTU를 9001로 설정하도록 구성합니다. 각 VPC 간에 VPC 피어링을 사용합니다. 각 VPC에서 정적 라우팅을 구성하여 VPC 간 라우팅을 제공합니다.",
      "B": "각 VPC의 리전에 virtual private gateway와 프라이빗 VIF를 구성합니다. Direct Connect gateway를 구성합니다. 모든 VPC의 VIF를 Direct Connect gateway와 연결합니다. Direct Connect gateway를 각 온프레미스 데이터 센터에 연결하는 새로운 프라이빗 VIF를 생성합니다. 새로운 프라이빗 VIF가 온프레미스 데이터 센터와 BGP 경로를 교환하고 MTU를 8500으로 설정하도록 구성합니다. 각 VPC 간에 VPC 피어링을 사용합니다. 각 VPC에서 정적 라우팅을 구성하여 VPC 간 라우팅을 제공합니다.",
      "C": "각 VPC의 리전에 transit gateway를 구성합니다. 각 VPC를 transit gateway에 연결합니다. Direct Connect gateway를 구성합니다. Direct Connect gateway를 transit gateway와 연결합니다. 각 Direct Connect 연결과 새로운 transit VIF를 연결합니다. 새로운 transit VIF가 BGP 경로를 교환하고 MTU를 9001로 설정하도록 구성합니다. 각 VPC와 transit gateway 간에 경로 전파를 구성합니다.",
      "D": "각 VPC의 리전에 transit gateway를 구성합니다. 각 VPC를 transit gateway에 연결합니다. Direct Connect gateway를 구성합니다. Direct Connect gateway를 transit gateway와 연결합니다. 각 Direct Connect 연결과 새로운 transit VIF를 연결합니다. 새로운 transit VIF가 BGP 경로를 교환하고 MTU를 8500으로 설정하도록 구성합니다. 각 VPC와 transit gateway 간에 경로 전파를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ BGP Graceful Shutdown — BGP CEASE(Graceful Shutdown 커뮤니티 포함) 메시지\n▸ BGP 수렴 속도 — Graceful Shutdown 사용 시 빠른 장애 복구\n▸ Hold Timer — BGP Keepalive 인터벌 기본값 180초(장애 감지 지연)\n\n【정답 포인트】\n▸ BGP 수렴 속도 개선 → Graceful Shutdown 커뮤니티 활용(빠른 경로 변경)\n▸ Hold Timer 단축 → 장애 감지 시간 감소(기본값 180초 → 예: 10초)\n▸ BFD(Bidirectional Forwarding Detection) — 하위 계층에서 초 단위 감지\n\n【오답 체크】\n(A) BGP 애드버타이저 증가 — 경로 수 증가만. 수렴 속도 영향 X\n(B) 메트릭 조정 — 경로 선택만. 장애 감지 속도 개선 X\n(D) 다이나믹 라우팅 비활성화 — 역효과. BGP가 자동 경로 변경 수행\n\n【시험 포인트】\n▸ BGP 빠른 수렴 → Graceful Shutdown + Hold Timer 단축 + BFD 조합\n▸ 함정: 메트릭 조정은 경로 \"선택\"만 영향. 장애 \"감지\"는 독립적",
    "en_q": "A company has a highly available application that is hosted in multiple VPCs and in two on-premises data centers. All the VPCs reside in the same AWS Region. All the VPCs require access to each other and to the on-premises data centers for the transfer of files that are multiple gigabytes in size. A network engineer is designing an AWS Direct Connect solution to connect the on-premises data centers to each VPC. Which architecture will meet the company's requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Configure a virtual private gateway and a private VIF in each VPC in the Region. Configure a Direct Connect gateway. Associate the VIF of every VPC with the Direct Connect gateway. Create a new private VIF that connects the Direct Connect gateway to each on-premises data center. Configure the new private VIF to exchange BGP routes with the on-premises data centers and to have an MTU of 9001. Use VPC peering between each VPC. Configure static routing in each VPC to provide inter-VPC routing.",
      "B": "Configure a virtual private gateway and a private VIF in each VPC in the Region. Configure a Direct Connect gateway. Associate the VIF of every VPC with the Direct Connect gateway. Create a new private VIF that connects the Direct Connect gateway to each on-premises data center. Configure the new private VIF to exchange BGP routes with the on-premises data centers and to have an MTU of 8500. Use VPC peering between each VPC. Configure static routing in each VPC to provide inter-VPC routing.",
      "C": "Configure a transit gateway in the same Region of each VPAttach each VPC to the transit gateway. Configure a Direct Connect gateway. Associate the Direct Connect gateway with the transit gateway. Associate a new transit VIF with each Direct Connect connection. Configure the new transit VIF to exchange BGP routes and to have an MTU of 9001. Configure route propagation between each VPC and the transit gateway.",
      "D": "Configure a transit gateway in the same Region of each VPC. Attach each VPC to the transit gateway. Configure a Direct Connect gateway. Associate the Direct Connect gateway with the transit gateway. Associate a new transit VIF with each Direct Connect connection. Configure the new transit VIF to exchange BGP routes and to have an MTU of 8500. Configure route propagation between each VPC and the transit gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142425-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 202,
    "question": "회사는 us-west-1 리전의 데이터 센터에 10 Gbps AWS Direct Connect 전용 연결을 가진 Direct Connect gateway가 있습니다. 동일한 Direct Connect gateway에 연결된 us-west-1의 동일한 데이터 센터 위치에서 오는 2개의 프라이빗 VIF가 있습니다. VIF 1은 AS_PATH 속성 값이 65000인 172.16.0.0/16을 광고합니다. VIF 2는 AS_PATH 속성 값이 65000 65000 65000인 172.16.1.0/24를 광고합니다. AWS는 172.16.1.0/24 네트워크 범위 내의 목적지 주소가 있는 트래픽을 데이터 센터로 어떻게 라우팅할까요?",
    "options": {
      "A": "AWS는 VIF 1을 사용하여 모든 트래픽을 라우팅합니다.",
      "B": "AWS는 VIF 2를 사용하여 모든 트래픽을 라우팅합니다.",
      "C": "AWS는 라운드 로빈 정책을 사용하여 두 VIF를 모두 라우팅에 사용합니다.",
      "D": "AWS는 흐름 제어를 사용하여 두 VIF 간에 트래픽을 균형 있게 분배합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Transit Gateway — VPC/온프레미스 중앙 라우터(hub-and-spoke)\n▸ Transit Gateway Peering — 다른 리전/계정의 TGW와 연결\n▸ 경로 테이블 — TGW 내 라우팅 정책(attachment별 전파 제어)\n\n【정답 포인트】\n▸ 다중 VPC/온프레미스 통합 → Transit Gateway 중앙화(hub-and-spoke)\n▸ 리전 간 통신 → Transit Gateway 피어링\n▸ 경로 테이블로 세분화된 라우팅(예: 특정 VPC만 통신 격리)\n\n【오답 체크】\n(A) VPC 피어링만 — 메시 구조. 3개 이상 VPC는 관리 복잡(peer × peer 조합)\n(B) Direct Connect 게이트웨이만 — 온프레미스 연결만. VPC 간 미지원\n(D) VPN 연결만 — 낮은 성능, 복잡한 관리(peer × peer 구성)\n\n【시험 포인트】\n▸ 복잡한 네트워크 통합 → Transit Gateway(중앙화, 확장성, 격리)\n▸ 함정: VPC 피어링은 소규모 2~3개 VPC. 많은 VPC는 TGW 필수",
    "en_q": "A company has a data center in the us-west-1 Region with a 10 Gbps AWS Direct Connect dedicated connection to a Direct Connect gateway. There are two private VIFs from the same data center location in us-west-1 that are attached to the same Direct Connect gateway. VIF 1 advertises 172.16.0.0/16 with an AS_PATH attribute value of 65000. VIF 2 advertises 172.16.1.0/24 with an AS PATH attribute value of 65000 65000 65000. How will AWS route traffic to the data center for traffic that has a destination address within the 172.16.1.0/24 network range?",
    "en_opts": {
      "A": "AWS will route all traffic by using VIF 1.",
      "B": "AWS will route all traffic by using VIF 2.",
      "C": "AWS will use both VIFs for routing by using a round-robin policy.",
      "D": "AWS will use flow control to balance the traffic between the two VIFs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142144-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 203,
    "question": "회사는 AWS에서 외부 웹 사이트를 호스팅하려고 계획하고 있습니다. 웹 사이트는 웹 서버, 애플리케이션 로직 서비스, 데이터베이스와 같은 여러 계층을 포함합니다. 회사는 네트워크 보안을 위해 AWS Network Firewall, AWS WAF, VPC 보안 그룹을 사용하려고 합니다. 회사는 Network Firewall firewall이 관련된 VPC 내에 적절하게 배포되도록 보장해야 합니다. 회사는 Network Firewall 및 AWS WAF 규칙에 배포되는 정책을 중앙에서 관리할 수 있어야 합니다. 회사는 또한 애플리케이션 팀이 자신의 보안 그룹을 관리하고 지나치게 허용적인 액세스를 허용하지 않도록 보장해야 합니다. 요구사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "Network Firewall firewall, AWS WAFV2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 코드로 정의합니다. AWS CloudFormation을 사용하여 객체와 초기 정책 및 규칙 그룹을 배포합니다. CloudFormation을 사용하여 AWS WAFv2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 업데이트합니다. Amazon GuardDuty를 사용하여 지나치게 허용적인 규칙을 모니터링합니다.",
      "B": "Network Firewall firewall, AWS WAFV2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 코드로 정의합니다. AWS Management Console 또는 AWS CLI를 사용하여 AWS WAFv2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 관리합니다. Amazon GuardDuty가 AWS Lambda 함수를 호출하여 구성된 규칙을 평가하고 지나치게 허용적인 규칙을 제거하도록 구성합니다.",
      "C": "AWS WAFv2 IP 세트 및 AWS WAFv2 웹 ACL을 AWS CloudFormation으로 배포합니다. AWS Firewall Manager를 사용하여 필요한 곳에 Network Firewall firewall과 VPC 보안 그룹을 배포하고 AWS WAFv2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 관리합니다.",
      "D": "Network Firewall firewall, AWS WAFv2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 코드로 정의합니다. AWS CloudFormation을 사용하여 객체와 초기 정책 및 규칙 그룹을 배포합니다. AWS Firewall Manager를 사용하여 AWS WAFv2 웹 ACL, Network Firewall 정책, VPC 보안 그룹을 관리합니다. Amazon GuardDuty를 사용하여 지나치게 허용적인 규칙을 모니터링합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Flow Logs — VPC 네트워크 인터페이스(ENI)의 IP 트래픽 로깅\n▸ CloudWatch Logs/S3 — Flow Logs 저장소(CloudWatch는 실시간, S3는 비용 저렴)\n▸ VPC Flow Logs vs ALB/NLB 접근 로그 — Flow Logs는 L3-L4, ALB/NLB는 L7\n\n【정답 포인트】\n▸ 네트워크 트래픽 분석 → VPC Flow Logs(실시간 문제 분석)\n▸ 비용 최적화 → S3 저장소(장기 보관)\n▸ IAM 정책 추적 불가 — CloudTrail 별도 필요\n\n【오답 체크】\n(A) CloudTrail 로그만 — API 호출만 기록. 네트워크 트래픽 미지원\n(B) ALB/NLB 접근 로그 — 애플리케이션 레이어. 보안 그룹 거부 트래픽 미기록\n(D) Route 53 쿼리 로깅만 — DNS만. 모든 IP 트래픽 미기록\n\n【시험 포인트】\n▸ 네트워크 진단 → VPC Flow Logs(L3-L4 투시)\n▸ 함정: CloudTrail은 API만. Flow Logs는 \"실제 네트워크 트래픽\" 기록",
    "en_q": "A company is planning to host external websites on AWS. The websites will include multiple tiers such as web servers, application logic services, and databases. The company wants to use AWS Network Firewall, AWS WAF, and VPC security groups for network security. The company must ensure that the Network Firewall firewalls are deployed appropriately within relevant VPCs. The company needs the ability to centrally manage policies that are deployed to Network Firewall and AWS WAF rules. The company also needs to allow application teams to manage their own security groups while ensuring that the security groups do not allow overly permissive access. What is the MOST operationally efficient solution that meets these requirements?",
    "en_opts": {
      "A": "Define Network Firewall firewalls, AWS WAFV2 web ACLs. Network Firewall policies, and VPC security groups in code. Use AWS CloudFormation to deploy the objects and initial policies and rule groups. Use CloudFormation to update the AWS WAFv2 web ACLs. Network Firewall policies, and VPC security groups. Use Amazon GuardDuty to monitor for overly permissive rules.",
      "B": "Define Network Firewall firewalls. AWS WAFV2 web ACLs, Network Firewall policies, and VPC security groups in code. Use the AWS Management Console or the AWS CLI to manage the AWS WAFv2 web ACLs. Network Firewall policies, and VPC security groups. Use Amazon GuardDuly to invoke an AWS Lambda function to evaluate the configured rules and remove any overly permissive rules.",
      "C": "Deploy AWS WAFv2 IP sets and AWS WAFv2 web ACLs with AWS CloudFormation. Use AWS Firewall Manager to deploy Network Firewall firewalls and VPC security groups where required and to manage the AWS WAFv2 web ACLs, Network Firewall policies, and VPC security groups.",
      "D": "Define Network Firewall firewalls, AWS WAFv2 web ACLS, Network Firewall policies, and VPC security groups in code. Use AWS CloudFarmation to deploy the objects and initial policies and rule groups. Use AWS Firewall Manager to manage the AWS WAFV2 web ACLS, Network Firewall policies, and VPC security groups. Use Amazon GuardDuty to monitor for overly permissive rules."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145668-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 204,
    "question": "회사는 동일한 VPC에서 애플리케이션의 프론트엔드가 Network Load Balancer(NLB)를 통해 백엔드 인스턴스와 통신하는 고가용성 애플리케이션을 배포했습니다. 애플리케이션은 2개의 Availability Zone에 걸쳐 고가용성을 확보합니다. 회사는 Availability Zone 간 트래픽 전송량을 제한하려고 합니다. 프론트엔드의 트래픽은 해당 Availability Zone에 NLB 뒤에 정상적인 대상이 없는 경우를 제외하고 동일한 Availability Zone에 유지되어야 합니다. 정상적인 대상이 없는 경우 트래픽은 다른 Availability Zone으로 전송되어야 합니다. 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "각 Availability Zone에 대해 가중치 라우팅을 사용하는 프라이빗 호스팅 영역을 생성합니다. 기본 레코드를 로컬 Availability Zone NLB DNS 레코드로 가리킵니다. 보조 레코드를 지역 NLB DNS 레코드로 가리킵니다. 애플리케이션의 프론트엔드가 로컬 프라이빗 호스팅 영역 레코드에서 DNS 조회를 수행하도록 구성합니다.",
      "B": "NLB에서 크로스 존 로드 밸런싱을 비활성화합니다. 애플리케이션의 프론트엔드가 로컬 Availability Zone NLB DNS 레코드에서 DNS 조회를 수행하도록 구성합니다.",
      "C": "프라이빗 호스팅 영역을 생성합니다. 각 Availability Zone에 대해 장애 조치 레코드를 생성합니다. 각 장애 조치 레코드에 대해 기본 레코드를 로컬 Availability Zone NLB DNS 레코드로 가리키고 보조 레코드를 지역 NLB DNS 레코드로 가리킵니다. 애플리케이션의 프론트엔드가 로컬 프라이빗 호스팅 영역 레코드에서 DNS 조회를 수행하도록 구성합니다.",
      "D": "스티키 세션(세션 어피니티)을 활성화하여 NLB가 사용자의 세션을 동일한 Availability Zone의 대상에 바인딩하도록 합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Route 53 Health Check — 엔드포인트 상태 모니터링(HTTP, TCP, 계산된 상태 등)\n▸ Failover 라우팅 정책 — 주(Primary) 리소스 장애 시 보조(Secondary)로 자동 전환\n▸ 리전별 라우팅 — 지역 기반 라우팅(레이턴시 고려 X)\n\n【정답 포인트】\n▸ 가용성 보장 → Health Check + Failover 정책(자동 장애 전환)\n▸ 글로벌 분산 → 다중 리전 엔드포인트 구성\n▸ DNS 기반 장애 조치(몇 초 수렴)\n\n【오답 체크】\n(A) 레이턴시 정책만 — 장애 감지 없음. 장애 시에도 라우팅 지속\n(B) 간단한 라우팅 — 고급 기능 없음. 수동 DNS 변경 필요\n(D) 가중 정책만 — 트래픽 분산만. 장애 대응 자동화 X\n\n【시험 포인트】\n▸ 글로벌 고가용성 → Health Check + Failover 정책 조합\n▸ 함정: 레이턴시 정책은 성능만 최적화. 장애 자동 대응은 Failover 정책 필수",
    "en_q": "A company has deployed an application in which the front end of the application communicates with the backend instances through a Network Load Balancer (NLB) in the same VPC. The application is highly available across two Availability Zones. The company wants to limit the amount of traffic that travels across the Availability Zones. Traffic from the front end of the application must stay in the same Availability Zone unless there is no healthy target in that Availability Zone behind the NLB. If there is no healthy target in the same Availability Zone, traffic must be sent to the other Availability Zone. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a private hosted zone with weighted routing for each Availability Zone. Point the primary record to the local Availability Zone NLB DNS record. Point the secondary record to the Regional NLB DNS record. Configure the front end of the application to perform DNS lookups on the local private hosted zone records.",
      "B": "Turn off cross-zone load balancing on the NLConfigure the front end of the application to perform DNS lookups on the local Availability Zone NLB DNS record.",
      "C": "Create a private hosted zone. Create a failover record for each Availability Zone. For each failover record, point the primary record to the local Availability Zone NLB DNS record and point the secondary record to the Regional NLB DNS record. Configure the front end of the application to perform DNS lookups on the local private hosted zone records.",
      "D": "Enable sticky sessions (session affinity) so that the NLB can bind a user's session to targets in the same Availability Zone."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145670-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 205,
    "question": "회사는 AWS 환경의 Amazon EC2 인스턴스에서 발생할 수 있는 botnet 명령 제어 트래픽으로부터 보호해야 합니다. 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Shield Advanced를 사용합니다. EC2 인스턴스에서 Shield Advanced 보호를 활성화하여 botnet 트래픽을 필터링하고 차단합니다.",
      "B": "Amazon Route 53 Resolver DNS Firewall을 사용합니다. 규칙 그룹에 규칙을 추가하여 AWSManagedDomainsBotnetCommandandControl 관리형 도메인 목록을 사용하고 botnet 트래픽을 차단하도록 작업을 설정합니다.",
      "C": "AWS WAF Bot Control을 사용합니다. AWS 관리형 규칙 세트를 사용하는 관리형 규칙 그룹을 구성하여 botnet 트래픽을 차단합니다.",
      "D": "AWS Systems Manager를 사용합니다. EC2 인스턴스에서 Systems Manager Automation runbook을 실행하여 인스턴스가 botnet 트래픽을 차단하도록 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ NAT Gateway — VPC 내 프라이빗 인스턴스의 아웃바운드 인터넷 접근(탄력적 IP 사용)\n▸ NAT 인스턴스 — EC2 기반 NAT(더 이상 권장 안 함)\n▸ 인터넷 게이트웨이 — VPC와 인터넷 간 양방향 게이트웨이\n\n【정답 포인트】\n▸ 프라이빗 서브넷 아웃바운드 인터넷 → NAT Gateway(권장, 고가용성)\n▸ AZ별 배포 → 각 AZ마다 NAT Gateway 1개(가용성 보장)\n▸ 라우트 테이블 → 0.0.0.0/0 → NAT Gateway로 경로 설정\n\n【오답 체크】\n(A) NAT 인스턴스 — 자동 관리 X, 병목 가능성, 더 이상 권장 안 함\n(B) 인터넷 게이트웨이만 — 프라이빗 인스턴스 공인 IP 필요(암묵적 라우팅 X)\n(D) VPC 엔드포인트 — S3/DynamoDB 등 특정 AWS 서비스만. 일반 인터넷 미지원\n\n【시험 포인트】\n▸ 프라이빗 서브넷 인터넷 접근 → NAT Gateway(AZ별 배포)\n▸ 함정: NAT 인스턴스는 구형 기술. NAT Gateway가 권장 표준",
    "en_q": "A company needs to protect against potential botnet command and control traffic from any Amazon EC2 instances that is in in the company's AWS Environment. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS Shield Advanced. Activate Shield Advanced protections on the EC2 instances to filter and block botnet traffic.",
      "B": "Use Amazon Route 53 Resolver DNS Firewall. Add a rule to a rule group to use the AWSManagedDomainsBotnetCommandandControl managed domain list with an action to block botnet traffic.",
      "C": "Use AWS WAF Bot Control. Configure a managed rule group that uses an AWS managed rule set to block botnet traffic.",
      "D": "Use AWS Systems Manager. Run a Systems Manager Automation runbook on the EC2 instances to configure the instances to block botnet traffic."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145437-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 206,
    "question": "회사는 두 개의 온프레미스 데이터 센터를 가지고 있습니다. 첫 번째 데이터 센터는 us-east-1 리전에, 두 번째 데이터 센터는 us-east-2 리전에 있습니다. 각 데이터 센터는 가장 가까운 AWS Direct Connect 시설에 연결됩니다. 회사는 Direct Connect 연결, transit VIF, 단일 Direct Connect gateway를 사용하여 us-east-1과 us-east-2의 VPC에 대한 연결을 구축합니다. 회사는 또한 통신 제공업체의 프라이빗 연결을 가지고 있어서 첫 번째 데이터 센터를 두 번째 데이터 센터에 연결합니다. 최근 두 데이터 센터 간의 프라이빗 연결에 여러 차례 연결 중단이 발생했습니다. 회사는 두 데이터 센터 간의 연결 안정성을 개선하기 위한 솔루션이 필요합니다. 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "새로운 Direct Connect gateway를 생성합니다. transit VIF에서 Direct Connect SiteLink 기능을 활성화합니다. 첫 번째 데이터 센터와 두 번째 데이터 센터의 CIDR 블록을 서로 공유합니다.",
      "B": "두 리전에 새로운 공개 VIF를 생성합니다. 새로운 공개 VIF에서 Direct Connect SiteLink 기능을 활성화합니다.",
      "C": "기존 Direct Connect 연결에서 Direct Connect SiteLink 기능을 활성화합니다.",
      "D": "기존 Direct Connect gateway에 연결된 기존 transit VIF에서 Direct Connect SiteLink 기능을 활성화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Firewall Manager — Organizations 단위 WAF/Shield 중앙 정책 관리\n▸ AWS WAF — 웹 애플리케이션 방화벽(Layer 7, SQL Injection/XSS 차단)\n▸ AWS Shield — DDoS 보호(기본 표준, 고급 옵션)\n\n【정답 포인트】\n▸ 중앙화된 보안 정책 → Firewall Manager(여러 계정 + 리전)\n▸ WAF 규칙 템플릿 → 조직 내 모든 ALB/CloudFront에 자동 배포\n▸ 규정 준수 감시 → AWS Config와 통합\n\n【오답 체크】\n(A) AWS WAF만 — 각 ALB마다 수동 설정. 중앙화 부재\n(B) AWS Shield Advanced만 — DDoS만. WAF(웹 공격) 미지원\n(D) GuardDuty만 — 위협 탐지만. 사전 차단(WAF) 기능 없음\n\n【시험 포인트】\n▸ 조직 단위 보안 정책 중앙화 → Firewall Manager(WAF + Shield 통합)\n▸ 함정: WAF 단독 설정은 수동 반복. Firewall Manager가 \"중앙\"화 키포인트",
    "en_q": "A company has two on-premises data centers. The first data center is in the us-east-1 Region. The Second data canter is in the us-east-2 Region. Each data center connects to the closest AWS Direct Connect facility. The company uses Direct Connect connections, transit VIFs, and a single Direct Connect gateway to establish connectivity to VPCs in us-east-1 and us-east-2 from the company's data centers. The company also has private connectivity from a telecommunications provider that connects the first data center to the second data center. Recently, there have been multiple connection disruptions to the private connectivity between the data centers. The company needs a solution to improve the reliability of the connection between the two data centers. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a new Direct Connect gateway. Enable the Direct Connect SiteLink feature on the transit VIF. Share the CIDR blocks from the first data center and the second data center with each other.",
      "B": "Create a new public VIF to both Regions. Enable the Direct Connect SiteLink feature on the new public VIF.",
      "C": "Enable the Direct Connect SiteLink feature on the existing Direct Connect connections.",
      "D": "Enable the Direct Connect SiteLink feature on the existing transit VIFS that are attached to the existing Direct Connect gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145440-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 207,
    "question": "네트워크 엔지니어는 온프레미스 데이터 센터에서 AWS Control Tower 기반 멀티 계정 환경으로의 대규모 마이그레이션을 진행하고 있습니다. 환경은 중앙 네트워크 서비스 계정에 배포된 transit gateway를 가지고 있습니다. 중앙 네트워크 서비스 계정은 AWS Resource Access Manager(AWS RAM)를 통해 AWS Organizations의 조직과 공유되었습니다. 공유 서비스 계정도 환경에 존재합니다. 공유 서비스 계정은 전체 조직과 공유해야 하는 워크로드를 호스팅합니다. 네트워크 엔지니어는 환경 전체에 공통 네트워크 구성 요소의 배포를 자동화하는 솔루션을 생성해야 합니다. 솔루션은 새로운 및 기존 멤버 계정 각각에 애플리케이션 워크로드용 VPC를 프로비저닝해야 합니다. VPC는 중앙 네트워크 서비스 계정의 transit gateway에 연결되어야 합니다. 가장 적은 운영 오버헤드로 요구사항을 충족할 조합 단계는 무엇입니까? (3개 선택)",
    "options": {
      "A": "공유 서비스 계정에 AWS Lambda 함수를 배포합니다. Lambda 함수가 새로운 및 기존 멤버 계정의 역할을 가정하도록 프로그래밍하여 필요한 네트워크 인프라를 프로비저닝합니다.",
      "B": "기존 계정을 Account Factory Customization(AFC)으로 업데이트합니다. 새로운 계정을 프로비저닝할 때 동일한 AFC를 선택합니다.",
      "C": "각 계정에서 생성해야 하는 인프라를 설명하는 AWS CloudFormation 템플릿을 생성합니다. 템플릿을 AWS Service Catalog 제품으로 공유 서비스 계정에 업로드합니다.",
      "D": "공유 서비스 계정의 기본 이벤트 버스에 Amazon EventBridge 규칙을 배포합니다. AWS Control Tower CreateManagedAccount 라이프사이클 이벤트에 반응하고 AWS Lambda 함수를 호출하도록 EventBridge 규칙을 구성합니다.",
      "E": "공유 서비스 계정에 AWSControlTowerBlueprintAccess 역할을 생성합니다. 각 멤버 계정에 AWSControlTowerBlueprintAccess 역할을 생성합니다."
    },
    "answer": "ACD",
    "explanation": "【핵심 용어】\n▸ AWS AppSync — GraphQL API 관리 서비스(실시간 데이터 동기화)\n▸ API Gateway — REST/WebSocket API(일반 웹 API)\n▸ Cognito — 사용자 인증/권한 관리\n\n【정답 포인트】\n▸ 실시간 협업 앱 → AppSync(GraphQL의 구독/mutation)\n▸ 모바일/웹 클라이언트 — Cognito 사용자 풀로 인증\n▸ 데이터 변경 구독 → 실시간 업데이트(WebSocket 활용)\n\n【오답 체크】\n(A) API Gateway REST — 단방향 HTTP 요청/응답만. 서버 푸시(실시간) 미지원\n(B) Lambda 폴링 — 클라이언트가 반복 호출. 네트워크 비효율\n(D) SNS 브로드캐스트 — 메시지 전송만. 클라이언트 구독 메커니즘 약함\n\n【시험 포인트】\n▸ 실시간 협업 앱 → AppSync(GraphQL) + WebSocket 구독\n▸ 함정: REST API는 단방향. 서버 푸시 필요하면 WebSocket/AppSync 필수",
    "en_q": "A network engineer is working on a large migration effort from an on-premises data center to an AWS Control Tower based multi-account environment. The environment has a transit gateway that is deployed to a central network services account. The central network services account has been shared with an organization in AWS Organizations through AWS Resource Access Manager (AWS RAM). A shared services account also exists in the environment. The shared services account hosts workloads that need to be shared with the entire organization. The network engineer needs to create a solution to automate the deployment of common network components across the environment. The solution must provision a VPC for application workloads to each new and existing member account. The VPCs must be connected to the transit gateway in the central network services account. Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose three.)",
    "en_opts": {
      "A": "Deploy an AWS Lambda function to the shared services account. Program the Lambda function to assume a role in the new and existing member accounts to provision the necessary network infrastructure.",
      "B": "Update the existing accounts with an Account Factory Customization (AFC). Select the same AFC when provisioning new accounts.",
      "C": "Create an AWS CloudFormation template that describes the infrastructure that needs to be created in each account. Upload the template as an AWS Service Catalog product to the shared services account.",
      "D": "Deploy an Amazon EventBridge rule on a default event bus in the shared services account. Configure the EventBridge rule to react to AWS Control Tower CreateManagedAccount lifecycle events and to invoke the AWS Lambda function.",
      "E": "Create an AWSControlTowerBiueprintAccess role in the shared services account. F Create an AWSControlTowerBiueprintAccess role in each member account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145672-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 208,
    "question": "온라인 소매 회사는 us-west-2 리전에서 웹 애플리케이션을 실행하고 있으며 미국의 소비자에게 서비스하고 있습니다. 회사는 유럽의 여러 국가로 확장하려고 하며 모든 사용자에게 낮은 지연 시간을 제공하려고 합니다. 애플리케이션은 사용자의 IP 주소를 식별하고 사용자의 지리적 위치에 따라 지역화된 콘텐츠를 제공해야 합니다. 애플리케이션은 기능을 위해 HTTP GET 및 POST 메서드를 사용합니다. 회사는 또한 GET 및 POST 메서드에 작동하고 상태 검사를 기반으로 하는 failover 메커니즘을 개발해야 합니다. failover는 모든 클라이언트에 대해 1분 이내에 발생해야 합니다. 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "새로운 AWS 리전의 각 환경에 Network Load Balancer(NLB)를 구성합니다. 각 리전의 NLB를 가리키는 엔드포인트 그룹이 있는 AWS Global Accelerator accelerator를 생성합니다.",
      "B": "새로운 AWS 리전의 각 환경에 Application Load Balancer(ALB)를 구성합니다. 각 리전의 ALB를 가리키는 엔드포인트 그룹이 있는 AWS Global Accelerator accelerator를 생성합니다.",
      "C": "새로운 AWS 리전의 각 환경에 Application Load Balancer(ALB)를 구성합니다. 장애 조치 라우팅 정책이 있는 Amazon Route 53 공개 호스팅 영역을 생성합니다.",
      "D": "새로운 AWS 리전의 각 환경에 Network Load Balancer(NLB)를 구성합니다. Amazon CloudFront 배포를 생성합니다. 원본 그룹과 원본 failover 옵션을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon ElastiCache — Redis/Memcached 관리형 인메모리 캐시\n▸ CloudFront 캐시 — CDN 엣지 캐시(HTTP/HTTPS 콘텐츠)\n▸ RDS Read Replica — 읽기 전용 DB 복제본(쓰기 부하 분산 X)\n\n【정답 포인트】\n▸ 빈번한 읽기 쿼리 → ElastiCache(인메모리, 빠른 응답)\n▸ 세션 저장소 → Redis/Memcached(TTL 지원)\n▸ DB 쿼리 부하 감소 → 캐시 히트 시 RDS 미접근\n\n【오답 체크】\n(A) CloudFront만 — 정적 콘텐츠 전용. 동적 데이터 캐싱 약함(TTL 길어짐)\n(B) RDS Read Replica — 읽기 스케일링은 가능하나, 캐싱 아님. 쿼리 응답 시간 개선 X\n(D) S3만 — 정적 파일 저장소. 세션/동적 쿼리 캐싱 부적합\n\n【시험 포인트】\n▸ 빈번한 데이터 읽기 → ElastiCache 인메모리 캐시(밀리초 응답)\n▸ 함정: RDS Read Replica는 \"복제\"이지 \"캐싱\" 아님. 응답 속도는 크게 향상 X",
    "en_q": "An online retail company is running a web application in the us-wast-2 Region and serves consumers in the United States. The company plans to expand across several countries in Europe and wants to provide low latency for all its users. The application needs to identify the users' IP addresses and provide localized content based on the users' geographic location. The application uses HTTP GET and POST methods for its functionality. The company also needs to develop a failover mechanism that works for GET and POST methods and is based on health checks. The failover must occur in less than 1 minute for all clients. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure a Network Load Balancer (NLB) for the application in each environment in the new AWS Regions. Create an AWS Global Accelerator accelerator that has endpoint groups that point to the NLBs in each Region.",
      "B": "Configure an Application Load Balancer (ALB) for the application in each environment in the new AWS Regions. Create an AWS Global Accelerator accelerator that has endpoint groups that point to the ALBs in each Region.",
      "C": "Configure an Application Load Balancer (ALB) for the application in each environment in the new AWS Regions. Create Amazon Route 53 public hosted zones that have failover routing policies.",
      "D": "Configure a Network Load Balancer (NLB) for the application in each environment in the new AWS Regions. Create an Amazon CloudFront distribution. Configure an origin group with origin failover options."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145673-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 209,
    "question": "회사는 50개 AWS 계정과 AWS Organizations를 사용하여 VPC를 보유하고 있습니다. 회사는 웹 필터링을 구현하려고 합니다. 모든 VPC에 대해 트래픽을 필터링하는 방식이 동일합니다. 네트워크 엔지니어는 AWS Network Firewall 사용을 계획합니다. 네트워크 엔지니어는 이 웹 필터링에 필요한 firewall 정책과 규칙 그룹의 수를 최소화하는 솔루션을 구현해야 합니다. 요구사항을 충족할 조합 단계는 무엇입니까? (3개 선택)",
    "options": {
      "A": "각 계정에서 firewall 정책 또는 규칙 그룹을 생성합니다.",
      "B": "firewall 정책 또는 규칙 그룹을 공유하기 위해 SCP를 사용합니다.",
      "C": "관리 계정에서 firewall 정책 또는 규칙 그룹을 생성합니다.",
      "D": "firewall 정책 또는 규칙 그룹을 공유하기 위해 AWS Resource Access Manager(AWS RAM)를 사용합니다.",
      "E": "조직 내에서 공유를 활성화합니다.",
      "F": "firewall 정책 또는 규칙 그룹을 공유하기 위해 OU를 생성합니다."
    },
    "answer": "CDE",
    "explanation": "【핵심 용어】\n▸ AWS Glue — ETL(추출, 변환, 로드) 서비스, 메타데이터 카탈로그\n▸ Data Pipeline — 데이터 소스 → 변환 → 저장(S3/DW 등)\n▸ Lake Formation — 데이터 레이크 중앙 관리(접근 제어, 메타데이터)\n\n【정답 포인트】\n▸ 대규모 데이터 통합 → AWS Glue(자동 스키마 감지, ETL 작업)\n▸ 데이터 카탈로그 → Glue 메타스토어(쿼리 가능한 데이터 구조 정의)\n▸ 데이터 레이크 구성 → Lake Formation(권한 관리, 규정 준수)\n\n【오답 체크】\n(A) Kinesis 스트리밍 — 실시간 데이터만. 배치 처리 불가\n(B) Lambda 함수 — 소규모 변환만. 대규모 ETL 비효율(시간 제한 15분)\n(D) Athena만 — 쿼리 엔진만. 데이터 변환/정제 기능 약함\n\n【시험 포인트】\n▸ 대규모 데이터 통합 및 카탈로깅 → AWS Glue + Lake Formation\n▸ 함정: Kinesis는 \"스트리밍\". Glue는 \"배치 ETL\". 사용 사례 구분 필수",
    "en_q": "A company has VPCs across 50 AWS accounts and is using AWS Organizations. The company wants to implement web filtering. The requirements for how the traffic must be filtered are the same for all the VPCs. A network engineer plans to use AWS Network Firewall. The network engineer needs to implement a solution that minimizes the number of firewall policies and rule groups that are necessary for this web filtering. Which combination of steps will meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Create a firewall policy or rule group in each account.",
      "B": "Use SCPs to share the firewall policy or rule group.",
      "C": "Create a firewall policy or rule group in the management account",
      "D": "Use AWS Resource Access Manager (AWS RAM) to share the firewall policy or rule group.",
      "E": "Enable sharing within Organizations.",
      "F": "Create OUs to share the firewall policy or rule group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145674-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 210,
    "question": "회사의 직원들이 사용하는 웹 기반 애플리케이션이 있습니다. 회사는 회사의 온프레미스 네트워크의 VPN을 통해 애플리케이션을 호스팅합니다. 애플리케이션은 프라이빗 서브넷의 Network Load Balancer (NLB) 뒤에 있는 Amazon EC2 인스턴스 플릿에서 실행되며, 같은 서브넷에 있습니다. 인스턴스는 Amazon EC2 Auto Scaling 그룹에 있습니다. 최근 보안 사건에서 애플리케이션에 SQL 인젝션이 발생했습니다. 네트워크 엔지니어는 향후 SQL 인젝션 공격을 방지하는 솔루션을 구현해야 합니다. 이 요구 사항을 충족하는 단계의 조합은 어느 것입니까? (3가지를 선택하세요.)",
    "options": {
      "A": "SQL 인젝션 공격을 차단하는 규칙을 포함하는 AWS WAF 웹 ACL을 생성합니다.",
      "B": "Amazon CloudFront 배포를 생성합니다. EC2 인스턴스를 오리진으로 지정합니다.",
      "C": "NLB를 Application Load Balancer로 대체합니다.",
      "D": "AWS WAF 웹 ACL을 NLB와 연결합니다.",
      "E": "AWS WAF 웹 ACL을 Application Load Balancer와 연결합니다.",
      "F": "AWS WAF 웹 ACL을 Amazon CloudFront 배포와 연결합니다."
    },
    "answer": "ACE",
    "explanation": "【핵심 용어】\n▸ AWS WAF — 웹 애플리케이션 방화벽으로 SQL 인젝션, XSS 등 공격 차단\n▸ NLB vs ALB — NLB는 Layer 4 로드밸런서로 WAF 미지원, ALB는 Layer 7으로 WAF 지원\n\n【정답 포인트】\n▸ A(WAF 웹 ACL 생성) — SQL 인젝션 규칙 포함하여 악의적 요청 차단\n▸ C(NLB → ALB 변경) — WAF를 연결하려면 ALB 필요 (NLB는 WAF 비지원)\n▸ E(ALB와 WAF 연결) — ALB가 WAF 지원하므로 ACL 연결 가능\n\n【오답 체크】\n▸ \n(B) CloudFront는 이미 온프레미스에서 VPN 사용 중이므로 필요 없음\n▸ \n(D) NLB는 WAF를 지원하지 않음 (Layer 4 로드밸런서)\n▸ (F) CloudFront는 이 요구사항에 부적절\n\n【시험 포인트】\nAWS WAF 구현은 ALB/CloudFront/API Gateway와만 연결 가능. NLB는 지원하지 않으므로 ALB로 교체 필요. SQL 인젝션 방어는 AWS Managed Rules의 AWSManagedRulesSQLiRuleSet 사용.",
    "en_q": "A company has an internal web-based application that employees use. The company hosts the application over a VPN in the company's on-premises network. The application runs on a fleet of Amazon EC2 instances in a private subnet behind a Network Load Balancer (NLB) in the same subnet. The instances are in an Amazon EC2 Auto Scaling group. During a recent security incident, SQL injection occurred on the application. A network engineer must implement a solution to prevent SQL injection attacks in the future. Which combination of steps will meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Create an AWS WAF web ACL that includes rules to block SQL injection attacks.",
      "B": "Create an Amazon CloudFront distribution. Specify the EC2 instances as the origin.",
      "C": "Replace the NLB with an Application Load Balancer.",
      "D": "Associate the AWS WAF web ACL with the NLB.",
      "E": "Associate the AWS WAF web ACL with the Application Load Balancer.",
      "F": "Associate the AWS WAF web ACL with the Amazon CloudFront distribution."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145678-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 211,
    "question": "회사는 AWS에서 비즈니스 애플리케이션을 실행합니다. 회사는 50개의 AWS 계정, 수천 개의 VPC, 미국과 유럽 전역의 3개 AWS 리전을 사용합니다. 네트워크 엔지니어는 온프레미스 데이터센터와 리전 간의 네트워크 연결을 확립해야 합니다. 또한 VPC 간의 연결을 확립해야 합니다. 온프레미스: 사용자 및 애플리케이션은 VPC에서 실행되는 애플리케이션에 연결할 수 있어야 합니다. 회사는 사용 가능한 기존 AWS Direct Connect 연결을 가지고 있습니다. 네트워크 엔지니어는 각 리전에 Transit Gateway를 생성하고 Transit Gateway를 리전 간 피어로 구성합니다. 온프레미스 데이터센터에서 리전으로의 네트워크 연결을 제공하고 서로 다른 리전의 VPC 간 통신을 제공하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "가상 프라이빗 게이트웨이의 게이트웨이 유형으로 프라이빗 VIF를 생성합니다. 하나의 VPC와 연결된 가상 프라이빗 게이트웨이를 사용하도록 프라이빗 VIF를 구성합니다.",
      "B": "새로운 Direct Connect 게이트웨이에 대한 프라이빗 VIF를 생성합니다. 새로운 Direct Connect 게이트웨이를 각 VPC의 가상 프라이빗 게이트웨이와 연결합니다.",
      "C": "새로운 Direct Connect 게이트웨이로 Transit VIF 및 게이트웨이 연결을 생성합니다. 각 Transit Gateway를 새로운 Direct Connect 게이트웨이와 연결합니다.",
      "D": "퍼블릭 VIF를 사용하는 AWS Site-to-Site VPN 연결을 생성합니다. Transit Gateway에 Site-to-Site VPN 연결을 연결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Direct Connect Gateway — 여러 VGW/TGW를 단일 DX 연결에 연결\n▸ Transit VIF — Transit Gateway와 Direct Connect를 직접 연결하는 새로운 VIF 타입\n▸ Private VIF — VGW 연결용 (이제 transit VIF로 대체)\n\n【정답 포인트】\n▸ Transit VIF + Direct Connect Gateway + Transit Gateway 조합만이 대규모 확장 지원\n▸ Transit Gateway 간 피어링과 온프레미스 연결을 모두 처리 가능\n▸ 50개 계정, 수천 VPC 규모에서 VGW 방식은 확장성 부족\n\n【오답 체크】\n▸ \n(A) \n(B) Private VIF는 VGW 기반으로 50개 계정 규모에 미흡\n▸ \n(D) Site-to-Site VPN은 대역폭 제한 (2.5Gbps) 및 운영 복잡도 높음\n\n【시험 포인트】\nDirect Connect Gateway는 Transit Gateway attach를 지원. Transit VIF는 AWS의 최신 권장 아키텍처로 TGW ↔ On-Prem 직접 연결 가능.",
    "en_q": "A company is running business applications on AWS. The company uses 50 AWS accounts, thousands of VPCs, and 3 AWS Regions across the United States and Europe. A network engineer needs to establish network connectivity between an on-premises data center and the Regions. The network engineer also must establish connectivity between the VPCs. On-premises: users and applications must be able to connect to applications that run in the VPCs. The company has an existing AWS Direct Connect connection that the network engineer can use. The network engineer creates a transit gateway in each Region and configures the transit gateways as inter-Region peers. Which solution will provide network connectivity from the on-premises data center to the Regions and will provide inter-VPC communications across the different Regions?",
    "en_opts": {
      "A": "Create a private VIF with a gateway type of virtual private gateway. Configure the private VIF to use a virtual private gateway that is associated with one of the VPCs.",
      "B": "Create a private VIF to a new Direct Connect gateway. Associate the new Direct Connect gateway with a virtual private gateway in each VPC.",
      "C": "Create transit VIF with a gateway association to a new Direct Connect gateway. Associate each transit gateway with the new Direct Connect gateway.",
      "D": "Create an AWS Site-to-Site VPN connection that uses a public VIF for the Direct Connect connection. Attach the Site-to-Site VPN connection to the transit gateways."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145682-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 212,
    "question": "회사의 두 데이터센터는 서로 다른 공급자의 여러 중복 링크로 상호 연결됩니다. 회사는 172.16.0.0/16 CIDR 블록 내의 IP 주소를 사용합니다. 회사는 프라이빗 ASN(Autonomous System Number)과 IGP를 사용하여 두 데이터센터 간에 iBGP를 실행합니다. 회사는 회사가 처음에 AWS 클라우드에서 하나의 VPC를 사용할 하이브리드 설정으로 전환하고 있습니다. AWS Direct Connect 연결은 프라이빗 VIF를 사용하여 첫 번째 데이터센터에서 Direct Connect 게이트웨이로 실행됩니다. 연결에서 회사는 172.16.0.0/16 네트워크에 대한 요약된 경로를 광고합니다. 회사는 다른 Direct Connect 위치에서 두 번째 데이터센터의 두 번째 요약된 경로를 설정할 계획입니다. 회사는 첫 번째 Direct Connect 연결을 통해 AWS로의 트래픽을 라우팅하고 두 번째 Direct Connect 연결을 장애 조치 목적으로만 사용하는 솔루션을 구현해야 합니다. 이 요구 사항을 충족하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "두 번째 데이터센터에서 AWS로의 BGP 광고에 프라이빗 ASN을 앞에 붙입니다. 첫 번째 Direct Connect 연결에 두 번째 VIF를 추가합니다. 첫 번째 데이터센터에서 프리펜드 없이 동일한 네트워크를 광고합니다. AWS에서 두 데이터센터로의 BGP 광고에 대해 동일한 설정을 구현합니다.",
      "B": "BGP 광고에 로컬 선호도 BGP 커뮤니티 태그를 태그합니다. 첫 번째 데이터센터에는 높은 선호도로 태그를 설정합니다. 두 번째 데이터센터에는 낮은 선호도로 태그를 설정합니다. 두 번째 데이터센터의 라우터가 첫 번째 데이터센터의 광고보다 직접 AWS BGP 광고에 대해 낮은 로컬 선호도를 갖도록 구성합니다.",
      "C": "Direct Connect 게이트웨이가 첫 번째 데이터센터와의 Direct Connect 연결을 통해 라우팅하도록 선호하도록 구성합니다. 두 번째 데이터센터의 라우터가 첫 번째 데이터센터의 광고보다 직접 AWS BGP 광고에 대해 낮은 로컬 선호도를 갖도록 구성합니다.",
      "D": "첫 번째 데이터센터에서 광고되는 BGP 경로에서 지역 AWS 리전 BGP 커뮤니티 태그를 구성합니다. 두 번째 데이터센터에서 BGP 광고에 AS_PATH 프리펜드를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Local Preference — BGP 경로 선택 메커니즘 (높을수록 우선)\n▸ BGP Community — 정책 기반 라우팅 제어\n▸ AS_PATH Prepend — 경로 길이로 우선순위 조정\n\n【정답 포인트】\n▸ 양방향 트래픽 제어 필요 (On-Prem → AWS, AWS → On-Prem)\n▸ 로컬 선호도를 1차 경로 선택(첫 데이터센터 높음), 2차 경로 선택에도 적용\n▸ 양 방향에서 일관된 정책(BGP Community + Local Preference)\n\n【오답 체크】\n▸ \n(A) AS_PATH Prepend는 단방향만 제어, 양방향 미흡\n▸ \n(C) Direct Connect Gateway는 선호도 설정 불가, 양방향 제어 불가\n▸ \n(D) Focal Region Community는 특정 지역만 적용, 양방향 미흡\n\n【시험 포인트】\n양방향 트래픽 흐름 제어는 BGP Community (로컬 선호도) 조합. Direct Connect Gateway는 경로 정책 미지원으로 라우터 측 Local Preference 설정 필수.",
    "en_q": "A company has two data centers that are interconnected with multiple redundant links from different suppliers. The company Uses IP addresses that are within the 172.16,0.0/16 CIDR block. The company is running iBGP between the two data centers by using a private Autonomous System Number (ASN) and IGP. The company is moving toward a hybrid setup in which the company will initially use one VPC in the AWS Cloud. An AWS Direct Connect connection runs from the first data center to a Direct Connect gateway by using a private VIF. On the connection, the company advertises a summarized route for the 172.16.0.0/16 network. The company is planning to set up a second summarized route from the second data center to a different Direct Connect location. The company needs to implement a solution to route traffic to and from AWS through the first Direct Connect connection. The solution must use the second Direct Connect connection for failover purposes only. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Prepend the private ASN on the BGP announcements to AWS from the second data center. Add a second VIF in the first Direct Connect connection. Advertise the same network without any prepends from the first data center. Implement the same setup for the BGP announcement from AWS to the two data centers.",
      "B": "Tag the BGP announcements with the local preference BGP community tags. Set the tag to high preference for the first data center. Set the tag to low preference for the second data center. Configure the second data center's router to have a lower local preference for the direct AWS BGP advertisements than for the advertisement from the fist data center.",
      "C": "Configure the Direct Connect gateway to prefer routing through the Direct Connect connection with the first data center. Configure the second data center's router to have a lower local preference for the direct AWS BGP advertisements than for the advertisement from the first data center.",
      "D": "Configure the focal AWS Region BGP community tag on the BGP route that is advertised from the fist data center. Configure AS_PATH prepends on the BGP announcements from the second data center."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145684-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 213,
    "question": "회사는 레거시 데이터 처리 솔루션을 AWS로 재플랫폼하고 있습니다. 회사는 하나의 VPC의 프라이빗 서브넷에서 Amazon EC2 인스턴스에 솔루션을 배포합니다. 솔루션은 오브젝트 스토리지를 위해 Amazon S3을 사용합니다. 솔루션이 처리하는 데이터와 솔루션이 생성하는 데이터는 모두 Amazon S3에 저장됩니다. 솔루션은 Amazon DynamoDB를 사용하여 자신의 상태를 저장합니다. 회사는 VPC에 대한 흐름 로그를 수집합니다. 솔루션은 인터넷을 통해 라이선스를 등록하기 위해 하나의 NAT 게이트웨이를 사용합니다. 소프트웨어 공급업체는 솔루션이 라이선스를 등록할 수 있는 특정 호스트명을 제공합니다. 회사는 AWS 청구서가 예상 예산을 초과했다는 것을 알았습니다. 네트워크 엔지니어는 AWS Cost Explorer를 사용하여 청구서를 조사합니다. 네트워크 엔지니어는 USE2-NatGateway-Bytes($) 사용 유형이 더 높은 청구서의 근본 원인임을 알았습니다. 네트워크 엔지니어는 이 문제를 해결하기 위해 무엇을 해야 합니까? (2가지를 선택하세요.)",
    "options": {
      "A": "Amazon VPC Traffic Mirroring을 설정합니다. NAT 게이트웨이가 처리하는 트래픽을 분석합니다.",
      "B": "VPC 흐름 로그를 검토하여 NAT 게이트웨이를 통과하는 트래픽을 확인합니다.",
      "C": "AWS 청구 및 비용 관리 콘솔에서 AWS Cost and Usage Report를 설정합니다. NAT 게이트웨이 요금에 대한 자세한 정보를 찾기 위해 보고서를 검토합니다.",
      "D": "보안 그룹이 EC2 인스턴스에 연결되어 있는지 확인하여 호스트명이 확인되는 IP 주소, VPC CIDR 블록, Amazon S3 및 DynamoDB용 AWS IP 주소 범위로만 나가는 트래픽을 허용합니다.",
      "E": "Amazon S3 및 DynamoDB용 게이트웨이 VPC 엔드포인트가 모두 설정되어 있고 프라이빗 서브넷의 경로 테이블과 연결되어 있는지 확인합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ NAT Gateway — 프라이빗 서브넷 아웃바운드 인터넷 트래픽 처리 (비용 발생)\n▸ VPC Flow Logs — 네트워크 트래픽 상세 분석\n▸ VPC Endpoint — AWS 서비스 비용 절감 (NAT 우회)\n\n【정답 포인트】\n▸ B(Flow Logs 분석) — NAT 게이트웨이 비용 원인 파악 (어떤 트래픽인지 식별)\n▸ E(VPC Endpoint 확인) — S3/DynamoDB는 엔드포인트로 나감 (NAT 우회) → 비용 절감\n▸ 라이선스 호스트명만 NAT 통과, 나머지 AWS 서비스는 엔드포인트 활용\n\n【오답 체크】\n▸ \n(A) Traffic Mirroring은 비용 원인 진단이 아닌 모니터링만 함\n▸ \n(C) Cost and Usage Report는 이미 비용 유형 파악했으므로 추가 정보 없음\n▸ \n(D) 보안 그룹 검증만으로는 문제 해결 불가\n\n【시험 포인트】\nNAT Gateway 비용 최적화는 2단계: (1) Flow Logs로 원인 분석 (2) VPC Endpoint로 불필요한 NAT 통과 제거. 특히 AWS 서비스(S3, DynamoDB)는 반드시 엔드포인트 사용.",
    "en_q": "A company is replatforming a legacy data processing solution to AWS. The company deploys the solution on Amazon EC2 Instances in private subnets that are in one VPC. The solution uses Amazon S3 for abject storage. Both the data that the solution processes and the data the solution produces are stored in Amazon S3. The solution uses Amazon DynamoDB to save its own state. The company collects flow logs for the VPC. The solution uses one NAT gateway to register its license through the internet. A software vendor provides a specific hostname so the solution can register its license. The company notices that the AWS bill exceeds the projected budget for the solution. A network engineer uses AWS Cost Explorer to investigate the bill. The network engineer notices that the USE2-NatGateway-Bytes($) usage type is the root cause of the higher than expected bill. What should the network engineer do to resolve the issue? (Choose two.)",
    "en_opts": {
      "A": "Set up Amazon VPC Traffic Mirroring. Analyze the traffic to identify the traffic that the NAT gateway processes.",
      "B": "Examine the VPC flow logs to identity the traffic that traverses the NAT gateway.",
      "C": "Set up an AWS Cost and Usage Report in the AWS Billing and Cost Management console. Examine the report to find more details about the NAT gateway charges.",
      "D": "Verify that the security groups attached to the EC2 instances allow outgoing traffic only to the IP addresses that the hostname resolves to, the VPC CIDR block, and the AWS IP address ranges for Amazon S3 and DynamoDB.",
      "E": "Verify that the gateway VPC endpoints for Amazon S3 and DynamoDB are both set up and associated with the route tables of the private subnets."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145570-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 214,
    "question": "회사의 AWS 리전의 한 가용성 영역에서 IP 주소 공간이 부족합니다. 공간이 부족한 가용성 영역에는 10.10.1.0/24 CIDR 블록이 할당됩니다. 회사는 AWS CloudFormation 스택에서 네트워킹 구성을 관리합니다. 회사의 VPC에는 10.10.0.0/16 CIDR 블록이 할당되어 있으며 10.10.1.0/22 CIDR 블록에서 사용 가능한 용량이 있습니다. 네트워크 전문가가 운영 오버헤드를 최소화하면서 기존 VPC에 더 많은 IP 주소 공간을 추가해야 하는 방법은 어느 것입니까?",
    "options": {
      "A": "CloudFormation 스택에서 가용성 영역에 대한 AWS::EC2::Subnet 리소스를 업데이트합니다. CidrBlock 속성을 10.10.1.0/22로 변경합니다.",
      "B": "CloudFormation 스택에서 AWS::EC2::VPC 리소스를 업데이트합니다. CidrBlock 속성을 10.10.1.0/22로 변경합니다.",
      "C": "CloudFormation 스택을 복사합니다. AWS::EC2::VPC 리소스 CidrBlock 속성을 10.10.0.0/16으로 설정합니다. AWS::EC2::Subnet 리소스 CidrBlock 속성을 가용성 영역에 대해 10.10.1.0/22로 설정합니다.",
      "D": "CloudFormation 스택에서 가용성 영역에 대한 새로운 AWS::EC2::Subnet 리소스를 생성합니다. CidrBlock 속성을 10.10.2.0/24로 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ VPC CIDR — 변경 불가능 (생성 후 확장만 가능)\n▸ Subnet CIDR — 감소는 가능하지만 확장은 새 서브넷 생성\n▸ CloudFormation Stack Update — 기존 리소스 수정 시 다운타임 유발\n\n【정답 포인트】\n▸ 기존 10.10.1.0/24 서브넷을 10.10.1.0/22로 직접 변경 불가 (기존 리소스 중단 위험)\n▸ 새로운 서브넷 10.10.2.0/24 추가 = 운영 오버헤드 최소화\n▸ VPC 10.10.0.0/16은 변경 불가 (VPC CIDR 블록은 변경 금지)\n\n【오답 체크】\n▸ \n(A) 기존 서브넷 CIDR 변경 시 인스턴스 중단 발생\n▸ \n(B) VPC CIDR는 변경 불가 (AWS 정책)\n▸ \n(C) 스택 복사는 새 환경 생성이므로 오버헤드 매우 높음\n\n【시험 포인트】\nVPC 확장 시나리오: 기존 리소스 중단 최소화 = 새 서브넷 추가. CloudFormation에서 새 Subnet 리소스 추가는 무중단 변경.",
    "en_q": "A company ran out of IP address space in one of the Availability Zones in an AWS Region that the company uses. The Availability Zone that is out of space is assigned the 10.10.1.0/24 CIDR block. The company manages its networking configurations in an AWS CloudFormation stack. The company' VPC is assigned the 10 10.0.0/16 CIDR block and has available capacity in the 10.10.1.0/22 CIDR block. How should a network specialist add more IP address space in the existing VPC with the LEAST operational overhead?",
    "en_opts": {
      "A": "Update the AWS::EC2::Subnet resource for the Availability Zone in the CloudFormation stack. Change the CidrBlock property to 10.10.1.0/22.",
      "B": "Update the AWS::EC2::VPC resource in the CloudFormation stack. Change the CidrBlock property to 10.10.1.0/22.",
      "C": "Copy the CloudFormation stack. Set the AWS::EC2::VPC resource CidrBlock property to 10.10.0.0/16. Set the AWS::EC2::Subnet resource CidrBlock property to 10.10.1.0/22 for the Availability Zone.",
      "D": "Create a new AWS::EC2::Subnet resource for the Availability Zone in the CloudFormation stack. Set the CidrBlock property to 10.10.2.0/24."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145685-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 215,
    "question": "회사의 네트워크 엔지니어는 네트워크 운영 팀이 중앙에서 관리할 클라우드 기반 네트워킹 환경을 구현해야 합니다. 다른 팀들이 환경을 사용할 것입니다. 각 팀은 환경에 인프라를 배포할 수 있어야 하고 자신의 리소스를 관리할 수 있어야 합니다. 환경은 IPv4 및 IPv6 지원을 제공해야 하고 이중 스택 구성으로 인터넷 연결을 제공해야 합니다. 회사는 워크로드 계정을 포함하는 AWS Organizations에 조직을 가지고 있습니다. 네트워크 엔지니어는 조직에서 새로운 네트워킹 계정을 생성합니다. 네트워크 엔지니어가 요구 사항을 충족하기 위해 다음으로 취해야 할 단계의 조합은 어느 것입니까? (3가지를 선택하세요.)",
    "options": {
      "A": "새로운 VPC를 생성합니다. IPv4 CIDR 블록 10.0.0.0/16을 연결하고 IPv6 블록 2001:db8:c5a:6000::/56을 지정합니다. /24 IPv4 CIDR 블록과 /64 IPv6 CIDR 블록을 할당하여 서브넷을 프로비저닝합니다.",
      "B": "새로운 VPC를 생성합니다. IPv4 CIDR 블록 10.0.0.0/16을 연결하고 Amazon 제공 IPv6 CIDR 블록을 사용합니다. /24 IPv4 CIDR 블록과 /64 IPv6 CIDR 블록을 할당하여 서브넷을 프로비저닝합니다.",
      "C": "AWS Resource Access Manager (AWS RAM)를 사용하여 조직 내에서 리소스 공유를 활성화합니다. 네트워킹 계정에서 리소스 공유를 생성하고 프로비저닝된 서브넷을 선택하고 프로비저닝된 서브넷을 대상 워크로드 계정과 공유합니다. 워크로드 계정을 사용하여 AWS RAM을 통해 리소스 공유를 수락합니다.",
      "D": "AWS Resource Access Manager (AWS RAM)를 사용하여 조직 내에서 리소스 공유를 활성화합니다. 네트워킹 계정에서 리소스 공유를 생성하고 새로운 VPC를 선택하고 새로운 VPC를 대상 워크로드 계정과 공유합니다. 워크로드 계정을 사용하여 AWS RAM을 통해 리소스 공유를 수락합니다.",
      "E": "인터넷 게이트웨이와 유출 전용 내부 게이트웨이를 생성합니다. NAT 게이트웨이를 퍼블릭 서브넷에 배포합니다. 인터넷 게이트웨이를 새로운 VPC와 연결합니다. 경로 테이블을 업데이트합니다. 경로 테이블을 관련 서브넷과 연결합니다.",
      "F": "인터넷 게이트웨이를 생성합니다. NAT 인스턴스를 퍼블릭 서브넷에 배포합니다. 경로 테이블을 업데이트합니다. 경로 테이블을 관련 서브넷과 연결합니다."
    },
    "answer": "BCE",
    "explanation": "【핵심 용어】\n▸ Amazon-provided IPv6 CIDR — /56 (AWS 자동 할당, 변경 불가)\n▸ Egress-only Internet Gateway — IPv6 아웃바운드 트래픽 (NAT 불필요)\n▸ AWS RAM — VPC 또는 서브넷 공유 (조직 간)\n\n【정답 포인트】\n▸ B(Amazon IPv6) — 사용자 지정 IPv6보다 AWS 관리형 IPv6 권장\n▸ C(Subnet 공유) — VPC 공유 아니라 서브넷만 공유 (각 팀 독립 VPC/라우팅 가능)\n▸ E(IGW + Egress-only + NAT) — 이중 스택: IPv4(IGW+NAT), IPv6(Egress-only)\n\n【오답 체크】\n▸ \n(A) 사용자 지정 IPv6 2001:db8:c5a:6000::/56은 라우팅 불가 (예약 주소)\n▸ \n(D) VPC 공유는 라우팅 복잡성 증가, 각 팀의 독립성 감소\n▸ (F) NAT Instance는 NAT Gateway보다 운영 복잡도 높음\n\n【시험 포인트】\n이중 스택 (IPv4+IPv6) 설계: Amazon-provided IPv6 + Egress-only IGW 조합. 멀티계정 환경에서는 VPC 아닌 서브넷 공유로 보안 격리 유지.",
    "en_q": "A company's network engineer must implement a cloud-based networking environment for a network operations team to centrally manage. Other Teams will use the environment. Each team must be able to deploy infrastructure to the environment and must be able to manage its own resources. The environment must feature IPv4 and IPv6 support and must provide internet connectivity in a dual-stack configuration. The company has an organization in AWS Organizations that contains a workload account for the teams. The network engineer creates a new networking account in the organization. Which combination of steps should the network engineer take next to meet the requirements? (Choose three.)",
    "en_opts": {
      "A": "Create a new VPC. Associate an IPv4 CIDR block of 10.0.0.0/16 and specify an IPv6 block of 2001:db8:c5a:6000::/56. Provision subnets by assigning /24 IPv4 CIDR blocks and /64 IPv6 CIDR blocks.",
      "B": "Create a new VPC. Associate an IPv4 CIDR block of 10.0.0.0/16 and use an Amazon-provided IPV6 CIDR block. Provision subnets by assigning /24 IPv4 CIDR blocks and /64 IPV6 CIDR blocks.",
      "C": "Enable sharing of resources within the organization by using AWS Resource Access Manager (AWS RAM). Create a resource share in the networking account, select the provisioned subnets, and share the provisioned subnets with the target workload account. Use the workload account to accept the resource share through AWS RAM.",
      "D": "Enable sharing of resources within the organization by using AWS Resource Access Manager (AWS RAM). Create a resource share in the networking account, select the new VPC, and share the new VPC with the target workload account. Use the workload account to accept the resource share through AWS RAM.",
      "E": "Create an internet gateway and an egress-only internal gateway. Deploy NAT gateways to the public subnets. Associate the internet gateway with the new VPC. Update the route tables. Associate the route tables with the relevant subnets.",
      "F": "Create an internet gateway. Deploy NAT instances to public subnets. Update the route tables. Associate the route tables with the relevant subnets."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145686-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 216,
    "question": "회사는 온프레미스에서 트래픽을 모니터링하고 검사하기 위해 타사 방화벽 어플라이언스를 사용합니다. 회사는 AWS에서 동일한 모델을 사용하려고 합니다. 회사는 인터넷 게이트웨이가 있는 단일 VPC를 가지고 있습니다. VPC에는 Auto Scaling 그룹으로 관리되는 Amazon EC2 인스턴스에서 실행되는 웹 서버 플릿이 있습니다. 회사의 네트워크 팀은 보안 팀과 함께 웹 서버로 송수신되는 모든 패킷의 인라인 검사를 설정해야 합니다. 솔루션은 가상 방화벽 어플라이언스 플릿이 확장되기 때문에 확장해야 합니다. 네트워크 팀이 이 솔루션을 구현하기 위해 취해야 할 단계의 조합은 어느 것입니까? (3가지를 선택하세요.)",
    "options": {
      "A": "새로운 VPC를 생성하고 방화벽 어플라이언스 플릿을 배포합니다. Gateway Load Balancer를 생성합니다. 방화벽 어플라이언스를 대상으로 추가합니다.",
      "B": "방화벽 어플라이언스용 보안 그룹을 생성하고 포트 443을 허용합니다. Gateway Load Balancer가 상태 검사를 수행할 포트를 허용합니다.",
      "C": "방화벽 어플라이언스용 보안 그룹을 생성하고 포트 6081을 허용합니다. Gateway Load Balancer가 상태 검사를 수행할 포트를 허용합니다.",
      "D": "방화벽 어플라이언스 플릿을 기존 VPC에 배포합니다. Gateway Load Balancer를 생성합니다. 방화벽 어플라이언스를 대상으로 추가합니다.",
      "E": "인터넷 게이트웨이 경로 테이블 및 웹 서버 경로 테이블을 업데이트하여 인터넷 트래픽을 Gateway Load Balancer의 VPC 엔드포인트 ID로 보냅니다. Gateway Load Balancer 엔드포인트와 연결된 서브넷 경로 테이블을 인터넷 트래픽을 인터넷 게이트웨이로 보내도록 업데이트합니다.",
      "F": "웹 서버 VPC 내에 새로운 경로 테이블을 생성합니다. 인터넷 게이트웨이와의 새로운 에지 연결을 생성합니다. 인터넷 게이트웨이 경로 테이블 및 웹 서버 경로 테이블을 업데이트하여 인터넷 트래픽을 Gateway Load Balancer의 VPC 엔드포인트 ID로 보냅니다. Gateway Load Balancer 엔드포인트와 연결된 서브넷 경로 테이블을 인터넷 트래픽을 인터넷 게이트웨이로 보내도록 업데이트합니다."
    },
    "answer": "ACF",
    "explanation": "【핵심 용어】\n▸ Gateway Load Balancer (GWLB) — L3/L4 검사 트래픽 처리 (포트 6081)\n▸ GWLB VPC Endpoint — 방화벽 검사 경로 추가\n▸ Edge Association — IGW와 라우팅 경로 제어\n\n【정답 포인트】\n▸ A(별도 VPC) — 방화벽 어플라이언스는 분리된 VPC에 배포 (보안)\n▸ C(포트 6081) — GWLB는 포트 6081(GENEVE) + 상태 검사 포트\n▸ F(Edge Association) — 인터넷 트래픽 경로: IGW → GWLB VPC Endpoint → 방화벽 → GWLB Endpoint\n\n【오답 체크】\n▸ \n(B) 포트 443은 HTTPS, GWLB는 포트 6081 사용\n▸ \n(D) 방화벽을 같은 VPC에 배포하면 트래픽 루핑 위험\n▸ \n(E) Edge Association 미지원 (라우팅 불완전)\n\n【시험 포인트】\nGWLB 검사 경로: IGW (외부) → Edge Association 경로 테이블 → GWLB VPC Endpoint → 방화벽 → GWLB Endpoint → 웹 서버. 방화벽 VPC는 분리 필수.",
    "en_q": "A company is using third-party firewall appliances to monitor and inspect traffic on premises. The company wants to use the same model on AWS. The Company has a single VPC with an internet gateway. The VPC has a fleet of web servers that run on Amazon EC2 instances that are managed by an Auto Scaling group. The company's network team needs to work with the security team to establish inline inspection of all packets that are sent to and from the web servers. The solution must scale as the fleet of virtual firewall appliances scales Which combination of steps should the network team take to implement this solution? (Choose three.)",
    "en_opts": {
      "A": "Create a new VPC, and deploy a fleet of firewall appliances. Create a Gateway Load Balancer. Add the firewall appliances as targets.",
      "B": "Create a security group for use with the firewall appliances, and allow port 443. Allow a port for the Galeway Load Balancer to perform health checks.",
      "C": "Create a security group for use with the firewall appliances, and allow port 6081. Allow a port for the Gateway Load Balancer to perform health checks.",
      "D": "Deploy a fleet of firewall appliances to the existing VPC. Create a Gateway Load Balancer. Add the firewall appliances as targets.",
      "E": "Update the internet gateway route table and the web server route table to send traffic to and from the internet to the VPC endpoint ID of the Gateway Load Balancer. Update the subnet route table that is associated with the Gateway Load Balancer endpoint to direct internet traffic to the internet gateway.",
      "F": "Create a new route table inside the web server VPC. Create a new edge association with the internet gateway. Update the internet gateway route table and the web server route table to send traffic to and from the internet to the VPC endpoint ID of the Gateway Load Balancer. Update the subnet route table that is associated with the Gateway Load Balancer endpoint to direct internet traffic to the internet gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/146536-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 217,
    "question": "금융회사는 인터넷을 통해 인증된 사용자에게 투자 예측 및 권장 사항을 제공합니다. 모든 서비스는 AWS 클라우드에서 호스팅됩니다. 새로운 규정 준수 요구 사항에 따르면 모든 호스트에서 인터넷 서비스 트래픽을 로깅하고 2년 동안 보존해야 합니다. 개발 AWS 계정에서 회사는 Network Load Balancer (NLB)를 트래픽 미러 대상으로 사용하는 Amazon VPC Traffic Mirroring을 사용하는 솔루션을 설계, 테스트 및 확인했습니다. 솔루션이 하나의 AWS 계정에서 실행되는 동안 솔루션은 트래픽을 다른 AWS 계정으로 미러링합니다. 네트워크 엔지니어는 솔루션이 프로덕션 환경에 배포될 때 모든 트래픽이 미러링되지 않는다는 것을 알았습니다. 네트워크 엔지니어는 또한 이 동작이 무작위라는 것을 알았습니다. 모든 트래픽이 미러링되지 않는 이유에 대한 가능한 설명은 어느 것입니까? (2가지를 선택하세요.)",
    "options": {
      "A": "보안 그룹이 프로덕션 AWS 계정에서 오설정되어 있습니다.",
      "B": "모니터링 중인 Amazon EC2 인스턴스는 Traffic Mirroring이 도입한 추가 트래픽을 처리할 수 없습니다.",
      "C": "트래픽 미러 세션을 생성할 수 있도록 하는 IAM 정책이 오설정되어 있습니다.",
      "D": "미러링된 트래픽은 프로덕션 트래픽보다 우선순위가 낮으며 네트워크 혼잡이 발생하면 삭제됩니다.",
      "E": "NLB가 갑작스럽고 상당한 트래픽 증가로 인해 워밍업 지연을 경험합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ VPC Traffic Mirroring — L3/L4 트래픽 복제 (원본 트래픽 영향 없음)\n▸ Traffic Mirror Source — EC2 인스턴스 (모니터링 대상)\n▸ Traffic Mirror Target — NLB (수신 대상)\n\n【정답 포인트】\n▸ B(EC2 인스턴스 처리 능력) — 미러링은 추가 CPU/메모리 사용 → 인스턴스 과부하 시 일부 미러링 손실\n▸ D(우선순위 조정) — 미러링 트래픽은 원본 트래픽보다 낮은 우선순위 → 혼잡 시 드롭\n▸ 무작위 손실 = 혼잡/리소스 한계 상황에서의 드롭\n\n【오답 체크】\n▸ \n(A) 보안 그룹은 미러링 세션에 영향 없음 (미러링 트래픽은 네트워크 계층)\n▸ \n(C) IAM은 세션 생성 단계에만 영향 (생성 후 운영에 영향 없음)\n▸ \n(E) NLB 워밍업은 처음부터 일관된 패턴, 무작위 아님\n\n【시험 포인트】\nTraffic Mirroring 손실은 2가지 원인: (1) 소스 인스턴스 리소스 부족 (2) 미러 트래픽 우선순위 낮음 (네트워크 정체 시 드롭). 해결: EC2 인스턴스 타입 업그레이드 또는 높은 처리량 NLB.",
    "en_q": "A financial company offers investment forecasts and recommendations to authorized users through the internet. All the services are hosted in the AWS Cloud. A new compliance requirement states that all the internet service traffic from any host must be logged and retained for 2 years. In its development AWS accounts, the company has designed, tested, and verified a solution that uses Amazon VPC Traffic Mirroring with a Network Load Balancer (NLB) as the traffic mirror target. While the solution runs in one AWS account, the solution mirrors the traffic to another AWS account. A network engineer notices that not all traffic is mirrored when the solution is deployed into the production environment. The network engineer also notices that this behavior is random. Which statements are possible explanations for why not all the traffic is mirrored? (Choose two.)",
    "en_opts": {
      "A": "The security groups are misconfigured on the production AWS account that hosts the company's services.",
      "B": "The Amazon EC2 instance that is being monitored cannot handle the extra traffic that Traffic Mirroring has introduced.",
      "C": "The IAM policy that allows the creation of traffic mirror sessions is misconfigured",
      "D": "The mirrored traffic has a lower priority than the production traffic and is being dropped when network congestion occurs.",
      "E": "The NLB is experiencing warm-up delay because of sudden and significant increases in traffic."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/146537-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 218,
    "question": "회사는 AWS 클라우드의 VPC를 가지고 있습니다. 회사는 최근 AWS 클라우드의 VPC도 있는 경쟁사를 인수했습니다. 네트워크 엔지니어는 두 VPC 간의 IP 주소 겹침을 발견했습니다. 두 VPC 모두 AWS Marketplace 파트너 서비스에 액세스해야 합니다. VPC 호스팅 서비스와 AWS Marketplace 파트너 서비스 간의 상호 운용성을 보장하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "정적 라우팅으로 VPC 피어링을 구성합니다. 정적 라우팅을 사용하여 파트너 서비스에 AWS Site-to-Site VPN 연결을 구성합니다.",
      "B": "VPC에서 NAT 게이트웨이를 구성합니다. 각 VPC의 기본 경로를 로컬 NAT 게이트웨이로 지정하도록 구성합니다. 각 NAT 게이트웨이를 Transit Gateway에 연결합니다. 정적 라우팅을 사용하여 파트너 서비스에 AWS Site-to-Site VPN 연결을 구성합니다.",
      "C": "AWS PrivateLink를 구성하여 VPC 간 및 파트너 서비스 간의 연결을 용이하게 합니다. 연결된 인터페이스 엔드포인트와 함께 생성된 DNS 이름을 사용하여 VPC와 파트너 서비스 간의 트래픽을 라우팅합니다.",
      "D": "VPC에서 NAT 인스턴스를 구성합니다. 각 VPC의 기본 경로를 로컬 NAT 인스턴스로 지정하도록 구성합니다. 파트너 서비스에 연결하기 위해 각 VPC에 인터페이스 엔드포인트를 구성합니다. 연결된 인터페이스 엔드포인트와 함께 생성된 DNS 이름을 사용하여 VPC와 파트너 서비스 간의 트래픽을 라우팅합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ PrivateLink — VPC 간/서비스 간 프라이빗 연결 (IP 겹침 무시)\n▸ Interface Endpoint — PrivateLink 끝점\n▸ IP Address Overlap — NAT로는 해결 불가 (양방향 통신 복잡)\n\n【정답 포인트】\n▸ IP 겹침 환경에서 PrivateLink는 IP 주소 무관 (DNS 기반)\n▸ Interface Endpoint의 DNS 이름으로 통신 (프라이빗, 보안)\n▸ VPC 피어링/VPN은 겹치는 IP 때문에 불가능\n\n【오답 체크】\n▸ \n(A) \n(B) \n(D) NAT 사용도 양방향 매핑 복잡, IP 겹침 완전 해결 불가\n▸ \n(A) VPC 피어링은 IP 겹침 불허\n▸ \n(B) \n(D) NAT + Transit Gateway는 관리 오버헤드 높음\n\n【시험 포인트】\nPrivateLink는 IP 겹침 문제의 유일한 솔루션. DNS 이름 기반 통신으로 IP 주소와 무관하게 작동. Marketplace 파트너 서비스는 항상 PrivateLink 활용.",
    "en_q": "A company has a VPC in the AWS Cloud. The company recently acquired a competitor that also has a VPC the AWS Cloud. A network engineer discovers an IP address overlap between the two VPCs. Both VPCs require access to an AWS Marketplace partner service. Which solution will ensure interoperability among the VPC hosted services and the AWS Markelplace partner service?",
    "en_opts": {
      "A": "Configure VPC peering with static routing between the VPCs. Configure an AWS Site-to-Site VPN connection with static routing to the partner service.",
      "B": "Configure a NAT gateway in the VPCs. Configure default routes in each VPC to point to the local NAT gateway. Attach each NAT gateway to a transit gateway. Configure an AWS Site-to-Site VPN connection with static routing to the partner service.",
      "C": "Configure AWS PrivateLink to facilitate connectivity between the VPCs and the partner service. Use the DNS name that is created with the associated interface endpoints to route traffic between the VPCs and the partner service.",
      "D": "Configure a NAT instance in the VPCs. Configure default routes in each VPC to point to the local NAT instance. Configure an interface endpoint in each VPC to connect to the partner service. Use the DNS name that is created with the associated interface endpoints to route traffic between the VPCs and the partner service."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/146538-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 219,
    "question": "회사는 비즈니스 유닛(BU)을 위해 us-east-1 리전과 ap-south-1 리전을 사용합니다. BU는 BU-1과 BU-2라고 불립니다. 각 BU에 대해 us-east-1에 두 개의 VPC가 있고 ap-south-1에 하나의 VPC가 있습니다. 워크로드 격리 요구 사항으로 인해 리소스는 같은 BU 내에서 통신할 수 있지만 다른 BU의 리소스와는 통신할 수 없습니다. 회사는 더 많은 BU를 추가할 계획이고 더 많은 리전으로 확장할 계획입니다. 이 요구 사항을 운영 효율성이 가장 높게 충족하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "필요한 리전에서 작동하는 AWS Cloud WAN 네트워크를 구성합니다. 모든 BU VPC를 AWS Cloud WAN 코어 네트워크에 연결합니다. AWS Cloud WAN 세그먼트 작업을 업데이트하여 서로 다른 BU 세그먼트 간의 트래픽을 거부하는 새로운 경로를 구성합니다.",
      "B": "각 리전에서 Transit Gateway를 구성합니다. Transit Gateway 간 피어링을 구성합니다. BU VPC를 해당 리전의 Transit Gateway에 연결합니다. Transit Gateway 및 VPC 경로 테이블을 구성하여 BU VPC 간의 트래픽을 격리합니다.",
      "C": "필요한 리전에서 작동하는 AWS Cloud WAN 네트워크를 구성합니다. 모든 BU VPC를 AWS Cloud WAN 코어 네트워크에 연결합니다. isolate-attachments 파라미터를 각 세그먼트에 설정하여 코어 네트워크 정책을 업데이트합니다.",
      "D": "필요한 리전에서 작동하는 AWS Cloud WAN 네트워크를 구성합니다. 각 BU에 대한 AWS Cloud WAN 세그먼트를 생성합니다. 각 BU의 VPC를 해당 BU 세그먼트에 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Cloud WAN — 멀티리전 네트워크 중앙 관리 (Transit Gateway 대체)\n▸ Core Network Policy — 세그먼트별 트래픽 제어\n▸ Segment Isolation — 세그먼트 간 트래픽 차단\n\n【정답 포인트】\n▸ Cloud WAN 세그먼트 = BU별 논리적 격리\n▸ 각 BU는 자체 세그먼트에 VPC 연결 → BU 내부만 통신\n▸ 새 BU 추가 시 새 세그먼트 추가만으로 자동 격리\n\n【오답 체크】\n▸ \n(A) 세그먼트 작업으로 경로 거부는 복잡, 자동화 부족\n▸ \n(B) Transit Gateway는 모든 리전 피어링 필요 → 확장 복잡도 높음\n▸ \n(C) isolate-attachments는 모든 세그먼트 간 차단 → BU 내 통신도 불가\n\n【시험 포인트】\nCloud WAN은 세그먼트 기반 아키텍처로 새 BU 확장 시 자동 격리 제공. Transit Gateway는 피어링 수동 관리 필요. 운영 효율성 측면에서 Cloud WAN이 우수.",
    "en_q": "A company uses the us-east-1 Region and the ap-south-1 Region for its business units (BUs). The BUS are named BU-1 and BU-Z. For each BU, there are two VPCs in us-east-1 and one VPC in ap-south-1. Because of workload isolation requirements, resources can communicate within the same BU but cannot communicate with resources in the other BU. The company plans to add more BUs and plans to expand into more Regions Which solution will meet these requirements with the MOST operational efficiency?",
    "en_opts": {
      "A": "Configure an AWS Cloud WAN network that operates in the required Regions. Attach all BU VPCs to the AWS Cloud WAN core network. Update the AWS Cloud WAN segment actions to configure new routes to deny traffic between the different BU segments.",
      "B": "Configure a transit gateway in each Region. Configure peering between the transit gateways. Attach the BU VPCs to the transit gateway in the corresponding Region. Configure the transit gateway and VPC route tables to isolate traffic between BU VPCs.",
      "C": "Configure an AWS Cloud WAN network that operates in the required Regions. Attach all BU VPCs to the AWS Cloud WAN core network. Update the core network policy by setting the isolate-attachments parameter for each segment.",
      "D": "Configure an AWS Cloud WAN network that operates in the required Regions. Create AWS Cloud WAN segments for each BU Configure VPC attachments for each BU's VPCs to the corresponding BU segment."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/146608-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 220,
    "question": "회사는 온프레미스 위치로의 연결을 위해 AWS Site-to-Site VPN 연결을 많이 사용하는 애플리케이션 VPC를 보유합니다. 회사의 네트워크 팀은 VPC 간 연결을 제공하기 위해 AWS Transit Gateway로 점진적으로 마이그레이션하려고 합니다. 네트워크 팀은 등비용 다중 경로(ECMP) 라우팅을 사용하는 Transit Gateway를 설정합니다. 네트워크 팀은 테스트를 위해 두 개의 임시 VPC를 Transit Gateway에 연결합니다. 테스트 VPC에는 온프레미스 위치와 VPC 간의 Transit Gateway를 통한 연결을 확인하는 Amazon EC2 인스턴스가 포함되어 있습니다. 네트워크 팀은 Transit Gateway에 2개의 새로운 Site-to-Site VPN 연결을 생성합니다. 테스트 중 네트워크 팀은 VPN 연결 쌍을 통해 2.5 Gbps의 필요한 대역폭에 도달할 수 없습니다. 네트워크 팀이 대역폭 성능을 향상시키고 네트워크 혼잡을 최소화하기 위해 취해야 할 단계의 조합은 어느 것입니까? (3가지를 선택하세요.)",
    "options": {
      "A": "기존 Site-to-Site VPN 연결에 대해 가속화를 활성화합니다.",
      "B": "Transit Gateway에 새로운 가속화된 Site-to-Site VPN 연결을 생성합니다.",
      "C": "온프레미스 프리픽스를 AWS에 광고하되 모든 Site-to-Site VPN 연결에서 동일한 BGP AS_PATH 속성으로 광고합니다.",
      "D": "온프레미스 프리픽스를 AWS에 광고하되 모든 Site-to-Site VPN 연결에서 서로 다른 BGP AS_PATH 속성으로 광고합니다.",
      "E": "Transit Gateway 첨부 파일이 테스트 VPC의 가용성 영역에 있는지 확인합니다.",
      "F": "온프레미스 위치가 여러 흐름을 사용하여 트래픽을 보내고 있는지 확인합니다."
    },
    "answer": "BCF",
    "explanation": "【핵심 용어】\n▸ VPN Acceleration — AWS Global Accelerator로 VPN 트래픽 가속 (2.5Gbps 달성)\n▸ ECMP — 동일 비용 경로로 로드밸런싱 (다중 흐름 필요)\n▸ BGP AS_PATH — 경로 선택 (동일 = ECMP, 다름 = 선호도)\n\n【정답 포인트】\n▸ B(가속화 VPN) — VPN 기본 속도는 1.25Gbps, 가속화로 2.5Gbps 달성\n▸ C(동일 AS_PATH) — ECMP 활성화로 다중 VPN 연결 로드밸런싱\n▸ F(다중 흐름) — ECMP는 흐름 기반 해시, 여러 흐름 필요\n\n【오답 체크】\n▸ \n(A) 기존 VPN 가속화는 신규 생성 불가\n▸ \n(D) 다른 AS_PATH는 ECMP 불활성화 (1개 경로만 사용)\n▸ \n(E) AZ 확인은 대역폭과 무관\n\n【시험 포인트】\nVPN 대역폭 향상 = 가속화 + ECMP + 다중 흐름 조합. 기본 VPN(1.25Gbps) < 가속화 VPN(2.5Gbps). ECMP는 AS_PATH 동일 + 동일 메트릭 필요.",
    "en_q": "A company has many application VPCs that use AWS Site-to-Site VPN connections for connectivity to an on-premises location. The company's network team wants to gradually migrate to AWS Transit Gateway to provide VPC-to-VPC connectivity. The network team sets up a transit gateway that uses equal-cost multi-path (ECMP) routing. The network team attaches two temporary VPCs to the transit gateway for testing. The test VPCs contain Amazon EC2 instances to confirm connectivity over the transit gateway between the on-premises location and the VPCs. The network team creates two new Site-to-Site VPN connections to the transit gateway. During testing, the network team cannot reach the required bandwidth of 2.5 Gbps over the pair of new Site-o-Site VPN connections. Which combination of steps should the network team take to improve bandwidth performance and minimize network congestion? (Choose three.)",
    "en_opts": {
      "A": "Enable acceleration for the existing Site-to-Site VPN connections to the transit gateway.",
      "B": "Create new accelerated Site-to-Site VPN connections to the transit gateway.",
      "C": "Advertise the on-premises prefix to AWS with the same BGP AS_PATH attribute across all the Site-to-Site VPN connections.",
      "D": "Advertise the on-premises prefix to AWS with a different BGP AS_PATH attribute across all the Site-to-Site VPN connections.",
      "E": "Verify that the transit gateway attachments are present in the Availability Zones of the test VPC.",
      "F": "Verify that the on-premises location is sending traffic by using multiple lows."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/146250-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 221,
    "question": "회사는 온프레미스 네트워크를 버지니아의 데이터센터에서 뉴욕의 데이터센터로 마이그레이션하고 있습니다. 버지니아와 뉴욕 데이터센터 위치의 AWS Direct Connect 연결은 모두 us-east-1 리전과 연결되어 있습니다. 회사는 버지니아에서 뉴욕으로 기존 Direct Connect 호스팅 연결의 프라이빗 VIF를 마이그레이션해야 합니다. 회사의 온프레미스 네트워크는 연결을 사용하여 us-east-1의 Direct Connect 게이트웨이를 통해 VPC에 액세스합니다. 회사는 이미 새로운 데이터센터에서 뉴욕 Direct Connect 위치로의 새로운 Direct Connect 호스팅 연결을 요청했습니다. 다운타임이 가장 적은 이 요구 사항을 충족하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "새로운 Direct Connect 호스팅 연결에서 새로운 프라이빗 VIF를 생성합니다. 새로운 Direct Connect 게이트웨이를 생성하고 게이트웨이를 새로운 프라이빗 VIF에 연결합니다. 새로운 프라이빗 VIF에 BGP 라우팅을 백업 경로로 구성합니다. 기존 프라이빗 VIF에서 BGP를 종료하여 유지보수 기간 동안 전환합니다. 기존 Direct Connect 연결을 폐지합니다.",
      "B": "새로운 Direct Connect 호스팅 연결에서 새로운 프라이빗 VIF를 생성합니다. 새로운 프라이빗 VIF를 기존 Direct Connect 게이트웨이에 연결합니다. 새로운 프라이빗 VIF에 BGP 라우팅을 백업 경로로 구성합니다. 기존 프라이빗 VIF에서 BGP를 종료하여 유지보수 기간 동안 전환합니다. 기존 Direct Connect 연결을 폐지합니다.",
      "C": "유지보수 기간 동안 기존 프라이빗 VIF를 새로운 Direct Connect 호스팅 연결로 마이그레이션합니다. 기존 프라이빗 VIF를 기존 Direct Connect 게이트웨이에 연결합니다. 기존 Direct Connect 연결을 폐지합니다.",
      "D": "유지보수 기간 동안 기존 프라이빗 VIF를 삭제하고 새로운 Direct Connect 호스팅 연결에 새로운 프라이빗 VIF를 생성합니다. 새로운 프라이빗 VIF를 기존 Direct Connect 게이트웨이에 연결합니다. 기존 Direct Connect 호스팅 연결을 폐지합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Direct Connect Gateway — 여러 VIF를 관리하는 중앙 게이트웨이\n▸ Private VIF Migration — VIF 재할당 (게이트웨이 재사용)\n▸ BGP Failover — 백업 경로 활성화\n\n【정답 포인트】\n▸ 기존 DX Gateway 재사용 → 최소 다운타임\n▸ 새 VIF를 기존 DX Gateway에 연결 → 라우팅 자동 업데이트\n▸ BGP 백업 경로 설정 → 전환 중 무중단\n▸ 유지보수 기간에만 BGP 종료로 전환\n\n【오답 체크】\n▸ \n(A) 새 DX Gateway 생성 = 재설정 필요 (다운타임 증가)\n▸ \n(C) VIF 직접 마이그레이션은 AWS 지원 불가\n▸ \n(D) VIF 삭제 후 재생성은 중단 시간 최대화\n\n【시험 포인트】\nDX 마이그레이션 최소화 전략: (1) 기존 DX Gateway 유지 (2) 새 VIF 추가 (3) BGP 백업 활성화 (4) 기존 BGP 종료. 기존 인프라 최대한 재사용.",
    "en_q": "A company is migrating its on-premises network from its data center in Virginia to its data center in New York. The AWS Direct Connect connections for the Virginia and New York data center locations are both associated to the us-east-1 Region. The company needs to migrate a private VIF on an existing Direct Connect hosted connection from Virginia to New York. The company's on-premises network uses the connection to access VPCs through a Direct Connect gateway in us-east-1. The company has already requested a new Direct Connect hosted connection from the new data center to the New York Direct Connect location. Which solution will meet these requirements with the LEAST downtime?",
    "en_opts": {
      "A": "Create a new private VIF on the new Direct Connect hosted connection. Create a new Direct Connect gateway and attach the gateway to the new private VIF. Configure BGP routing on the new private VIF as a backup route. Perform the switchover during a maintenance window by shutting down BGP on the existing private VIF. Decommission the existing Direct Connect connection.",
      "B": "Create a new private VIF on the new Direct Connect hosted connection. Attach the new private VIF to the existing Direct Connect gateway. Configure BGP routing on the new private VIF as a backup route. Perform the switchover during a maintenance window by shutting down BGP on the existing private VIF. Decommission the existing Direct Connect connection.",
      "C": "During a maintenance window, migrate the existing private VIF to the new Direct Connect hosted connection. Attach the existing private VIF to the existing Direct Connect gateway. Decommission the existing Direct Connect connection.",
      "D": "During a maintenance window, delete the existing private VIF and create a new private VIF to the new Direct Connect hosted connection. Attach the new private VIF to the existing Direct Connect gateway. Decommission the existing Direct Connect hosted connection."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151578-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 222,
    "question": "소매 회사는 온프레미스 애플리케이션을 AWS 클라우드로 마이그레이션합니다. 현재 회사는 두 개의 온프레미스 데이터센터 위치를 보유합니다. 하나는 미국 동부 해안에 있고 하나는 미국 서부 해안에 있습니다. 각 데이터센터는 4개의 데이터베이스 시스템을 호스팅합니다. 가장 큰 데이터베이스 시스템은 500GB의 데이터를 저장합니다. 데이터센터는 데이터 동기화를 위해 두 개의 10 GbE 회로로 상호 연결되어 있습니다. 각 데이터센터는 별도의 1 GbE 업스트림 인터넷 연결을 가지고 있습니다. 회사는 여러 비즈니스 유닛을 서비스하기 위해 총 8개의 VPC를 보유할 계획입니다. 4개의 VPC는 us-east-1 리전에 있고 4개는 us-west-2 리전에 있습니다. 네트워크 엔지니어는 VPC 간 연결을 허용하는 연결 솔루션을 설계해야 합니다. 솔루션은 또한 마이그레이션 프로세스 중 온프레미스 데이터센터와 AWS 간의 보안 연결을 허용해야 합니다. 회사는 데이터베이스 동기화 중 VPC 간의 트래픽 스파이크를 예상합니다. 회사는 주말 동안 마이그레이션 계획을 실행하고 기술적으로 가능한 한 빨리 실행하려고 합니다. 또한 장기적인 운영 및 인적 리소스 비용을 최소화하려고 합니다. 이 요구 사항을 충족하는 단계의 조합은 어느 것입니까? (2가지를 선택하세요.)",
    "options": {
      "A": "하나의 Transit Gateway를 배포하고 모든 VPC를 연결합니다. Transit Gateway 및 VPC 경로 테이블을 업데이트하여 모든 VPC가 다른 VPC에 연결할 수 있도록 합니다.",
      "B": "모든 VPC 간에 VPC 피어링을 구성합니다. VPC 경로 테이블을 업데이트하여 연결을 허용합니다.",
      "C": "us-east-1 및 us-west-2를 제공하는 두 개의 Direct Connect 위치에서 2개의 AWS Direct Connect 연결을 프로비저닝합니다.",
      "D": "각 데이터센터에 대해 하나의 Transit Gateway VPN 첨부 파일을 프로비저닝하여 온프레미스 데이터센터와 AWS VPC 간의 연결을 구축합니다.",
      "E": "온프레미스 데이터센터와 AWS VPC 간의 연결을 구축하기 위해 각 데이터센터에 대해 그리고 각 VPC에 대해 하나의 AWS Site-to-Site VPN 연결을 프로비저닝합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ VPC Peering — 2-8개 VPC 같은 리전/다른 리전 연결\n▸ Site-to-Site VPN — 온프레미스 ↔ AWS 보안 연결\n▸ Operational Cost — 마이그레이션 기간만 필요\n\n【정답 포인트】\n▸ B(VPC 피어링) — 8개 VPC 연결: 완전 메시 아키텍처 (각 VPC ↔ 다른 VPC)\n▸ E(Site-to-Site VPN) — 2개 데이터센터 × 각 8 VPC = VPN 다중화 (고가용성)\n▸ 주말 마이그레이션 기간 + 비용 최소화 = 마이그레이션 후 폐기 예상\n\n【오답 체크】\n▸ \n(A) Transit Gateway는 단일 실패점, 피어링이 더 격리된 구조\n▸ \n(C) Direct Connect는 장기 비용 높음 (마이그레이션만 필요)\n▸ \n(D) TGW VPN은 각 데이터센터 1개만 → 고가용성 부족\n\n【시험 포인트】\n단기 마이그레이션 프로젝트: VPC 피어링(무료/저비용) + VPN(다중화). 장기 운영 아키텍처가 아니므로 Direct Connect 불필요.",
    "en_q": "A retail company is migrating its on-premises application to the AWS Cloud. Currently, the company has two on-premises data center locations. One data center is on the east coast of the United States, and one data center is on the west coast. Each data center hosts four database systems. The largest database system stores 500 GB of data. The data centers are interconnected by two 10 GbE circuits for data synchronization. Each data center has two separate 1 GbE upstream internet connections. The company plans to have eight total VPCs to service its multiple business units. Four VPCs will be in the us-east-1 Region, and four will be in the us-west-2 Region. A network engineer needs to design a connectivity solution that allows VPC-to-VPC connectivity. The solution must also allow secure connections between the on-premises data centers and AWS during the migration process. The company expects spikes in traffic among the VPCs during database synchronization. The company wants to run the migration plan during one weekend and as soon as technically possible. The company also wants to minimize long-term operational and human resources costs. Which combination of steps will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Deploy one transit gateway and attach all VPCs to it. Update the transit gateway and VPC route tables to allow any VPC to connect to any other VPC.",
      "B": "Configure VPC peering between all the VPCs. Update the VPC route tables to allow connectivity.",
      "C": "Provision two AWS Direct Connect connections from two Direct Connect locations that serve us-east-1 and us-west-2 to provide connectivity between the data centers and AWS.",
      "D": "Provision one transit gateway VPN attachment for each data center to build connectivity between the on-premises data centers and AWS VPCs.",
      "E": "Provision one AWS Site-to-Site VPN connection for each data center and for each VPC to build connectivity between the on-premises data centers and AWS VPCs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151584-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 223,
    "question": "회사는 프로세스 워크플로우 요구 사항을 위해 AWS에서 API 기반 애플리케이션을 개발하고 있습니다. API는 회사의 온프레미스 데이터센터의 클라이언트에서 호출됩니다. 회사는 온프레미스와 AWS 간의 AWS Direct Connect 연결을 설정했습니다. 네트워크 엔지니어는 API를 Amazon API Gateway에서 프라이빗 REST API로 구현하기로 결정합니다. 네트워크 엔지니어는 클라이언트가 프라이빗 통신을 통해 API 엔드포인트에 도달할 수 있도록 하려고 합니다. 네트워크 엔지니어가 추가 인프라 설정 없이 API를 호출하기 위해 사용할 수 있는 솔루션은 어느 것입니까?",
    "options": {
      "A": "프라이빗 DNS 이름이 활성화된 API Gateway용 인터페이스 VPC 엔드포인트를 생성합니다. 엔드포인트의 프라이빗 DNS 이름을 사용하여 API에 액세스합니다.",
      "B": "프라이빗 DNS 이름이 활성화된 API Gateway용 인터페이스 VPC 엔드포인트를 생성합니다. 엔드포인트의 Amazon Route 53 별칭을 사용하여 API에 액세스합니다.",
      "C": "API Gateway용 인터페이스 VPC 엔드포인트를 생성합니다. 엔드포인트를 프라이빗 REST API와 연결합니다. 엔드포인트의 Amazon Route 53 별칭을 사용하여 API에 액세스합니다.",
      "D": "프라이빗 DNS 이름이 활성화된 API Gateway용 인터페이스 VPC 엔드포인트를 생성합니다. 엔드포인트의 퍼블릭 DNS 이름을 사용하여 API에 액세스합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Private REST API — API Gateway의 프라이빗 엔드포인트 (VPC 내부만 접근)\n▸ Interface Endpoint — VPC 엔드포인트로 AWS 서비스 프라이빗 접근\n▸ Private DNS Names — VPC 내 프라이빗 DNS 해석\n▸ Public DNS Names — 인터넷에서 해석 가능한 DNS\n\n【정답 포인트】\n▸ Private DNS Names 활성화 + 엔드포인트의 퍼블릭 DNS = Private Routing\n▸ 온프레미스 클라이언트는 Direct Connect로 VPC에 액세스\n▸ VPC 엔드포인트의 퍼블릭 DNS는 VPC 내부에서는 프라이빗으로 해석\n\n【오답 체크】\n▸ \n(A) 프라이빗 DNS 이름은 VPC 내부만 작동\n▸ \n(B) Route 53 별칭은 추가 인프라 필요\n▸ \n(C) 엔드포인트 ↔ 프라이빗 API 연결은 자동 (명시적 연결 불가)\n\n【시험 포인트】\nPrivate REST API + Interface Endpoint + Private DNS enabled = 온프레미스에서 Direct Connect로 VPC 접근 후 엔드포인트의 퍼블릭 DNS로 프라이빗 라우팅. 추가 인프라(Route 53, ALB 등) 불필요.",
    "en_q": "A company is developing an API-based application on AWS for its process workflow requirements. The API will be invoked by clients in the company's on-premises data centers. The company has set up an AWS Direct Connect connection between on premises and AWS. A network engineer decides to implement the API as a private REST API in Amazon API Gateway. The network engineer wants to ensure that clients can reach the API endpoint through private communication. Which solution can the network engineer use to invoke the API without any additional infrastructure setup?",
    "en_opts": {
      "A": "Create an interface VPC endpoint for API Gateway with private DNS names enabled. Access the API by using the private DNS name of the endpoint.",
      "B": "Create an interface VPC endpoint for API Gateway with private DNS names enabled. Access the API by using an Amazon Route 53 alias of the endpoint.",
      "C": "Create an interface VPC endpoint for API Gateway. Associate the endpoint with the private REST API, Access the API by using an Amazon Route 53 alias of the endpoint.",
      "D": "Create an interface VPC endpoint for API Gateway with private DNS names enabled. Access the API by using the public DNS name of the endpoint."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151576-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 224,
    "question": "은행 회사는 VPC에서 특정 퍼블릭 IP 주소에 연결해야 하는 애플리케이션을 보유합니다. 네트워크 엔지니어는 필요한 퍼블릭 IP 주소로 인터넷 게이트웨이를 통해 애플리케이션의 서브넷과 연결된 경로 테이블에 경로를 구성했습니다. 네트워크 엔지니어는 사용자가 인터넷 게이트웨이를 대상으로 애플리케이션 서브넷의 경로 테이블에 기본 경로를 추가할 때 알림을 보낼 이메일 알림을 설정해야 합니다. 이 요구 사항을 가장 적은 구현 노력으로 충족하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "경로 테이블의 경로를 읽고 이메일 알림을 전송하는 AWS Lambda 함수를 생성합니다. 경로가 0.0.0.0/0 또는 ::/0 CIDR로 인터넷 게이트웨이로 구성된 경우 이메일 알림을 전송하도록 Lambda 함수를 구성합니다. Lambda 함수를 매분 실행하도록 구성합니다.",
      "B": "Amazon EC2 CreateRoute API 호출로 호출될 AWS Lambda 함수를 생성합니다. 이메일 알림을 전송하도록 Lambda 함수를 구성합니다. 경로가 0.0.0.0/0 또는 ::/0 CIDR로 인터넷 게이트웨이로 구성된 경우 이메일 알림을 전송하도록 Lambda 함수를 구성합니다.",
      "C": "internet-gateway-authorized-vpc-only 관리 규칙을 사용하여 경로 테이블에 대한 AWS Config 규칙을 생성합니다. AWS Config 규칙과 일치하도록 Amazon EventBridge 규칙을 생성하고 Amazon Simple Notification Service (Amazon SNS) 주제로 라우팅하여 이메일 알림을 전송합니다.",
      "D": "no-unrestricted-route-to-igw 관리 규칙을 사용하여 경로 테이블에 대한 AWS Config 규칙을 생성합니다. AWS Config 규칙과 일치하도록 Amazon EventBridge 규칙을 생성하고 Amazon Simple Notification Service (Amazon SNS) 주제로 라우팅하여 이메일 알림을 전송합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Config Rule — 규정 준수 모니터링 (관리형 규칙 활용)\n▸ no-unrestricted-route-to-igw — 0.0.0.0/0 또는 ::/0 경로 탐지\n▸ internet-gateway-authorized-vpc-only — 특정 VPC의 IGW만 허용\n\n【정답 포인트】\n▸ Config Rule(no-unrestricted-route-to-igw) — 기본 경로 추가 감지\n▸ EventBridge + SNS — Config 이벤트를 이메일로 자동 변환\n▸ 최소 구현: Config 규칙 생성 + EventBridge 연결 (Lambda 불필요)\n\n【오답 체크】\n▸ \n(A) Lambda 폴링은 지연성, 매분 실행은 비효율\n▸ \n(B) API 트리거는 CreateRoute만 감지 (기존 경로 변경 미감지)\n▸ \n(C) internet-gateway-authorized-vpc-only는 특정 VPC 지정 필요\n\n【시험 포인트】\nConfig 규칙은 지속적 준수 모니터링. no-unrestricted-route-to-igw는 제한 없는 IGW 경로 감지 규칙. EventBridge는 Config 변경 이벤트 자동 캡처 + SNS 알림.",
    "en_q": "A banking company has an application that must connect to specific public IP addresses from a VPC. A network engineer has configured routes in the route table that is associated with the application's subnet to the required public IP addresses through an internet gateway. The network engineer needs to set up email notifications that will alert the network engineer when a user adds a default route to the application subnet's route table with the internet gateway as a target. Which solution will meet these requirements with the LEAST implementation effort?",
    "en_opts": {
      "A": "Create an AWS Lambda function that reads the routes in the route table and sends an email notification. Configure the Lambda function to send an email notification if any route is configured with 0.0.0.0/0 or ::/0 CIDRs to the internet gateway. Configure the Lambda function to run every minute.",
      "B": "Create an AWS Lambda function that will be invoked by an Amazon EC2 CreateRoute API call. Configure the Lambda function to send an email notification. Configure the Lambda function to send an email notification if any route is configured with 0.0.0.0/0 or ::/0 CIDRs to the internet gateway.",
      "C": "Create AWS Config rules for the route table by using the internet-gateway-authorized-vpc-only managed rule. Create an Amazon EventBridge rule to match the AWS Config rule and to route to an Amazon Simple Notification Service (Amazon SNS) topic to send an email notification.",
      "D": "Create an AWS Config rule for the route table by using the no-unrestricted-route-to-igw managed rule. Create an Amazon EventBridge rule to match the AWS Config rule and to route to an Amazon Simple Notification Service (Amazon SNS) topic to send an email notification."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151552-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 225,
    "question": "회사는 Amazon Elastic Kubernetes Service (Amazon EKS) 클러스터에서 호스팅되는 인터넷 연결 애플리케이션을 구축하고 있습니다. 회사는 포드 네트워킹 연결을 위해 Amazon VPC Container Network Interface (CNI) 플러그인을 사용합니다. 회사는 Network Load Balancer (NLB)를 사용하여 애플리케이션을 인터넷에 노출해야 합니다. 애플리케이션을 호스팅하는 포드는 NLB가 수신하는 원본 패킷에 포함된 원본 IP 주소를 볼 수 있어야 합니다. 네트워크 엔지니어는 NLB 및 Amazon EKS 설정을 구성하여 이러한 목표를 달성해야 하는 방법은 어느 것입니까?",
    "options": {
      "A": "NLB에 대해 IP 대상 유형을 지정합니다. Kubernetes 서비스 사양에서 externalTrafficPolicy 속성을 Local로 설정합니다.",
      "B": "NLB에 대해 인스턴스 대상 유형을 지정합니다. Kubernetes 서비스 사양에서 externalTrafficPolicy 속성을 Cluster로 설정합니다.",
      "C": "NLB에 대해 인스턴스 대상 유형을 지정합니다. Kubernetes 서비스 사양에서 externalTrafficPolicy 속성을 Local로 설정합니다.",
      "D": "NLB에 대해 IP 대상 유형을 지정합니다. Kubernetes 서비스 사양에서 externalTrafficPolicy 속성을 Cluster로 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ IP Target Type — 포드의 IP를 직접 대상으로 (SNAT 제거)\n▸ externalTrafficPolicy: Local — 로컬 포드만 선택 (원본 IP 보존)\n▸ Source IP Preservation — 원본 클라이언트 IP 유지\n\n【정답 포인트】\n▸ IP Target Type — VPC CNI 환경에서 포드 IP 직접 라우팅\n▸ externalTrafficPolicy: Local — SNAT 스킵, 원본 IP 그대로 포드에 전달\n▸ 조합: 원본 IP 유지 + 포드 직접 접근 = 완벽한 출처 추적\n\n【오답 체크】\n▸ \n(B) \n(C) Instance Target Type은 노드 IP → 포드 SNAT (원본 IP 손실)\n▸ \n(B) \n(D) Cluster 정책은 모든 노드의 포드 선택 가능 (NodePort 경로)\n\n【시험 포인트】\nEKS + NLB + 원본 IP 보존 = IP Target Type + externalTrafficPolicy: Local. IP Target은 포드 직접 라우팅이므로 노드 SNAT 우회.",
    "en_q": "A company is building an internet-facing application that is hosted on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The company is using the Amazon VPC Container Network Interface (CNI) plugin for Kubernetes for pod networking connectivity. The company needs to expose its application to the internet by using a Network Load Balancer (NLB). The pods that host the application must have visibility of the source IP address that is contained in the original packet that the NLB receives. How should the network engineer configure the NLB and Amazon EKS settings to achieve these goals?",
    "en_opts": {
      "A": "Specify the ip target type for the NLB. Set the externalTrafficPolicy attribute to Local in the Kubernetes service specification.",
      "B": "Specify the instance target type for the NLSet the externalTrafficPolicy attribute to Cluster in the Kubernetes service specification.",
      "C": "Specify the instance target type for the NLB. Set the externalTrafficPolicy attribute to Local in the Kubernetes service specification.",
      "D": "Specify the ip target type for the NLB. Set the externalTrafficPolicy attribute to Cluster in the Kubernetes service specification."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151599-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 226,
    "question": "회사는 Amazon EC2 인스턴스에서 애플리케이션 서버를 실행합니다. EC2 인스턴스는 Transit Gateway로 연결된 분리된 VPC에서 실행됩니다. EC2 인스턴스는 Transit Gateway로 라우팅되는 프라이빗 서브넷에서 시작되고 내부 및 외부 연결을 위해 라우팅됩니다. 외부 연결은 인터넷 게이트웨이를 통해 수신 및 송신하는 패킷을 검사하는 방화벽 장치가 있는 VPC로 제공됩니다. 네트워크 엔지니어는 회사의 애플리케이션 팀이 EC2 인스턴스 간의 패킷 전달당 페이로드 크기를 증가시키도록 도와야 합니다. 모든 네트워크 연결은 Transit Gateway를 통과해야 합니다. 네트워크 엔지니어가 이 요구 사항을 충족하기 위해 해야 할 일은 어느 것입니까?",
    "options": {
      "A": "Transit Gateway에서 점보 프레임을 활성화합니다. 애플리케이션 팀에게 시스템의 네트워크 인터페이스의 최대 전송 단위(MTU)를 9001바이트로 설정하도록 지시합니다.",
      "B": "애플리케이션 팀에게 VPC의 최대 전송 단위(MTU)를 8500바이트로 설정하도록 지시합니다.",
      "C": "애플리케이션 팀에게 향상된 네트워킹 어댑터를 사용하여 시스템에서 향상된 네트워킹을 설정하고 최대 전송 단위(MTU)를 9001바이트로 설정하도록 지시합니다.",
      "D": "애플리케이션 팀에게 시스템의 네트워크 인터페이스의 최대 전송 단위(MTU)를 8500바이트로 설정하도록 지시합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ MTU (Maximum Transmission Unit) — 패킷 최대 크기\n▸ Transit Gateway MTU — 최대 8500바이트 지원\n▸ Jumbo Frames — 9000+ 바이트 (Transit Gateway 미지원)\n\n【정답 포인트】\n▸ Transit Gateway 제한: 최대 8500바이트 MTU\n▸ 모든 트래픽이 Transit Gateway를 통과 → 모든 경로에서 8500 제약\n▸ EC2 인스턴스 MTU = 8500바이트 설정이 최적\n\n【오답 체크】\n▸ \n(A) Transit Gateway는 점보 프레임 미지원 (최대 8500)\n▸ \n(B) VPC MTU는 변경 불가 (항상 1500)\n▸ \n(C) 향상된 네트워킹 + 9001 MTU는 Transit Gateway에서 차단됨\n\n【시험 포인트】\nTransit Gateway 환경에서 MTU 설정은 TGW 제약인 8500바이트가 상한. 점보 프레임(9001)은 TGW 미지원이므로 불가능.",
    "en_q": "A company is running its application servers on Amazon EC2 instances. The EC2 instances run in separate VPCs that are connected by a transit gateway. The EC2 instances launch in a private subnet with a route to the transit gateway for internal and external connectivity. The external connectivity is provided by a VPC with firewall devices that perform an inspection for packets that ingress and egress through an internet gateway. A network engineer needs to help the company's application team increase the payload size per packet delivery between the EC2 instances. All network connectivity must be through the transit gateway What should the network engineer do to meet these requirements?",
    "en_opts": {
      "A": "Enable jumbo frames on the transit gateway. Instruct the application team to set the maximum transmission unit (MTU) of the system's network interfaces to 9001 bytes.",
      "B": "Instruct the application team to set the maximum transmission unit (MTU) of the VPC to 8500 bytes.",
      "C": "Instruct the application team to set up enhanced networking on the system by using the enhanced networking adapter. Set the maximum transmission unit (MTU) to 9001 bytes.",
      "D": "Instruct the application team to set the maximum transmission unit (MTU) of the system's network interfaces to 8500 bytes."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151603-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 227,
    "question": "네트워크 엔지니어는 VPC의 애플리케이션에 대한 인터넷 메트릭을 모니터링해야 합니다. 메트릭에는 건강 이벤트, 지연성, 트래픽 인사이트와 같은 사용자 경험이 포함됩니다. 네트워크 엔지니어는 애플리케이션에 대해 Amazon CloudWatch Internet Monitor를 설정합니다. 엔지니어는 인터넷 건강 이벤트를 타사 대상으로 푸시하려고 합니다. 이 요구 사항을 가장 적은 구현 노력으로 충족하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon EventBridge에서 타사 API 엔드포인트를 생성합니다. Internet Monitor가 EventBridge의 타사 API 엔드포인트로 이벤트를 전송하도록 구성합니다.",
      "B": "Amazon EventBridge에서 타사 API 엔드포인트를 생성합니다. EventBridge에서 Internet Monitor를 소스로 사용하고 EventBridge의 타사 API 엔드포인트를 대상으로 사용하는 규칙을 생성합니다.",
      "C": "Internet Monitor에서 타사 API 엔드포인트를 생성합니다. Internet Monitor가 이벤트를 Amazon S3 버킷으로 전송하도록 구성합니다. AWS Lambda 함수를 구성하여 Internet Monitor의 타사 API 엔드포인트로 이벤트를 전송합니다.",
      "D": "Internet Monitor에서 타사 API 엔드포인트를 생성합니다. Internet Monitor가 Internet Monitor의 타사 API 엔드포인트로 이벤트를 전송하도록 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudWatch Internet Monitor — 인터넷 경로 건강 모니터링\n▸ EventBridge — 이벤트 기반 자동화 (소스-규칙-대상)\n▸ Partner Integrations — EventBridge 파트너 이벤트 버스\n\n【정답 포인트】\n▸ Internet Monitor는 EventBridge와 자동 통합\n▸ EventBridge 규칙에서 Internet Monitor 이벤트 감지 + 타사 API 호출\n▸ 최소 구현: EventBridge 규칙 1개만 생성 (Lambda 불필요)\n\n【오답 체크】\n▸ \n(A) Internet Monitor는 직접 EventBridge로 전송 (수동 설정 필요 없음)\n▸ \n(C) S3 + Lambda 경로는 불필요한 추가 구성\n▸ \n(D) Internet Monitor는 API 엔드포인트 지원 안 함 (EventBridge 경유)\n\n【시험 포인트】\nInternet Monitor → EventBridge (자동) → 파트너 API는 최소 구성. EventBridge는 Internet Monitor 이벤트를 자동 감지하므로 규칙만 생성하면 됨.",
    "en_q": "A network engineer needs to monitor internet metrics for an application that is in a VPC. The metrics include user experiences such as health events, latency, and traffic insights. The network engineer sets up Amazon CloudWatch Internet Monitor for the application. The engineer wants to push the internet health events to a third-party target. Which solution will meet these requirements with the LEAST implementation effort?",
    "en_opts": {
      "A": "Create a third-party API endpoint in Amazon EventBridge. Configure internet Monitor to send the events to the third-party API endpoint in EventBridge.",
      "B": "Create a third-party API endpoint in Amazon EventBridge. Create a rule in EventBridge that uses Internet Monitor as the source and the third-party API endpoint in EventBridge as the destination.",
      "C": "Create a third-party API endpoint in internet Monitor. Configure Internet Monitor to send the events to an Amazon S3 bucket. Configure an AWS Lambda function to send the events to the third-party API endpoint in Internet Monitor.",
      "D": "Create a third-party API endpoint in Internet Monitor. Configure Internet Monitor to send the events to the third-party API endpoint in Internet Monitor."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151605-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 228,
    "question": "회사는 8개 AWS 리전에서 웹 애플리케이션을 실행합니다. 각 리전에서 애플리케이션은 Application Load Balancer (ALB) 뒤에 있는 여러 컴퓨팅 리소스에서 호스팅됩니다. 각 ALB는 특정 도메인을 사용하도록 구성됩니다. 각 리전의 도메인이 다릅니다. 각 ALB는 HTTPS 트래픽만 수락하도록 구성됩니다. 각 ALB는 AWS Certificate Manager (ACM)의 인증서를 사용합니다. 회사는 모든 리전에 단일 도메인을 사용하여 애플리케이션의 웹 모습을 단순화하려고 합니다. 네트워크 엔지니어는 이 변경을 구현해야 하며 또한 애플리케이션의 최종 사용자에 대한 지연성을 최소화하는 솔루션을 설계해야 합니다. 이 요구 사항을 충족하는 작업의 조합은 어느 것입니까? (3가지를 선택하세요.)",
    "options": {
      "A": "ACM을 사용하여 새 도메인에 대한 SSL/TLS 인증서를 us-east-1 리전에 생성합니다.",
      "B": "새 도메인에 대해 Amazon Route 53에서 지연성 기반 라우팅을 설정합니다. 모든 리전의 ALB를 대상으로 추가합니다.",
      "C": "새 도메인에 대해 Amazon Route 53에서 가속기의 별칭 레코드를 생성합니다.",
      "D": "표준 가속기를 AWS Global Accelerator에서 생성합니다. TCP 트래픽용 리스너를 구성합니다. 모든 ALB를 리스너의 대상으로 추가합니다.",
      "E": "ACM을 사용하여 각 리전에 대한 SSL/TLS 인증서를 생성합니다. 모든 ALB를 각 리전에서 인증서를 사용하도록 구성합니다.",
      "F": "AWS Global Accelerator에서 사용자 지정 라우팅 가속기를 생성합니다. HTTPS 트래픽용 리스너를 구성합니다. 모든 ALB를 리스너의 대상으로 추가합니다. ACM의 SSL/TLS 인증서를 사용하여 TLS를 종료하도록 가속기를 구성합니다."
    },
    "answer": "CDE",
    "explanation": "【핵심 용어】\n▸ Global Accelerator — 글로벌 트래픽 최적화 (낮은 지연성)\n▸ Alias Record — Route 53 특수 레코드 (ALB/ELB/GA 타겟)\n▸ Regional Certificates — 각 ALB의 기존 인증서 유지\n\n【정답 포인트】\n▸ C(GA Alias) — 새 도메인을 Global Accelerator로 라우팅\n▸ D(Standard GA + TCP) — TCP에서 TLS 종료는 ALB에서 처리\n▸ E(Regional Certs) — 각 ALB의 기존 인증서 유지 (변경 불필요)\n\n【오답 체크】\n▸ \n(A) us-east-1만 인증서 생성 → 다른 리전 ALB 사용 불가\n▸ \n(B) Latency-based Routing은 Global Accelerator와 조합 시 이중 라우팅\n▸ (F) Custom Routing GA는 고정 IP 포트 매핑, 다중 ALB 대상 미지원\n\n【시험 포인트】\nGlobal Accelerator (표준) + Regional ALB Certs = 단일 도메인 + 지연성 최소화. GA는 TCP 수준에서 작동, ALB가 TLS 처리.",
    "en_q": "A company is running its application in eight AWS Regions. In each Region, the application is hosted on multiple compute resources behind an Application Load Balancer (ALB). The different Regions are using different domains. Each ALB is configured to accept only HTTPS traffic. Each ALB uses a certificate from AWS Certificate Manager (ACM). The company wants to simplify the application's appearance on the web by using a new single domain for all Regions. A network engineer needs to implement this change by designing a solution that also will minimize latency for the application's end users. Which combination of actions will meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Use ACM to create an SSL/TLS certificate in the us-east-1 Region for the new domain.",
      "B": "Set up latency-based routing in Amazon Route 53 for the new domain. Add the ALBs from all the Regions as targets.",
      "C": "Create an alias record for the accelerator in Amazon Route 53 for the new domain.",
      "D": "Create a standard accelerator in AWS Global Accelerator. Configure a listener for TCP traffic. Add all the ALBs as targets for the listener.",
      "E": "Use ACM to create an SSLITLS certificate for each Region. Configure all the ALBs to use the certificate in their respective Regions.",
      "F": "Create a custom routing accelerator in AWS Global Accelerator. Configure a listener for HTTPS traffic. Add all the ALBs as targets for the listener. Configure the accelerator to terminate TLS by using the SSLITLS certificate from ACM."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153932-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 229,
    "question": "회사가 단일 AWS 리전의 Amazon EC2 인스턴스에서 실행되는 애플리케이션 워크로드를 포함하는 VPC를 보유하고 있습니다. 회사는 AWS Local Zone을 사용하여 리전에서 실행 중인 애플리케이션 워크로드의 확장을 배포하려고 합니다. Local Zone의 확장된 워크로드는 리전의 VPC의 워크로드와 양방향으로 통신해야 합니다. 이 요구사항을 가장 비용 효율적으로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Local Zone에 새로운 VPC를 만듭니다. 모든 VPC를 Transit Gateway에 연결합니다. Transit Gateway와 VPC의 라우팅을 구성합니다. 새로운 VPC에 인스턴스를 배포합니다.",
      "B": "리전에 새로운 VPC에 타사 어플라이언스를 배포합니다. Local Zone에 새로운 VPC를 만듭니다. VPC에 어플라이언스로의 VPN 연결을 생성합니다. Local Zone의 새로운 VPC에 인스턴스를 배포합니다.",
      "C": "Local Zone에 새로운 서브넷을 만듭니다. VPC의 각 서브넷에 인터페이스가 있는 타사 어플라이언스를 배포합니다. 새로운 서브넷을 구성하여 Local Zone 트래픽을 어플라이언스를 통해 라우팅합니다. 새로운 서브넷에 인스턴스를 배포합니다.",
      "D": "Local Zone에 새로운 서브넷을 만듭니다. 새로운 서브넷을 VPC의 CIDR 블록 내의 CIDR 블록을 사용하도록 구성합니다. Local Zone의 새로운 서브넷에 인스턴스를 배포합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n\\n\n▸ AWS Local Zone — 일반 리전의 연장선으로 단일 VPC 내 서브넷 추가 가능\\n\n▸ 비용 효율성 — 추가 게이트웨이나 어플라이언스 없이 단순 구조\\n\\n\n\n【정답 포인트】\n\\n\n▸ Local Zone은 기존 VPC의 연장으로 설계됨 → 새로운 VPC 불필요\\n\n▸ 같은 VPC 내 서브넷이므로 Transit Gateway, VPN, 어플라이언스 불필요\\n\n▸ CIDR 블록만 올바르게 구성하면 자동 라우팅 가능\\n\n▸ 최소 비용, 운영 복잡도 최소화\\n\\n\n\n【오답 체크】\n\\n\n(A) Transit Gateway 사용 → 비용 증가, Local Zone 연결에 불필요\\n\n(B) VPN 연결 → 높은 지연시간, Local Zone의 저지연 특성 활용 불가\\n\n(C) 타사 어플라이언스 → 비용 및 운영 오버헤드, 필요 없는 복잡성\\n\\n\n\n【시험 포인트】\n\\n\n▸ Local Zone은 VPC 확장으로 이해 — 별도 네트워킹 구조 불필요\\n\n▸ 비용 최적화 → 단순한 솔루션이 정답",
    "en_q": "A company has a VPC that includes application workloads that run on Amazon EC2 instances in a single AWS Region. The company wants to use AWS Local Zones to deploy an extension of the application workloads that run in the Region. The extended workloads in the Local Zone need to communicate bidirectionally with the workloads in the VPC in the Region. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Create a new VPC in the Local Zone. Attach all the VPCs to a transit gateway. Configure routing for the transit gateway and the VPCs. Deploy instances in the new VPC.",
      "B": "Deploy a third-party appliance in a new VPC in the Region. Create a new VPC in the Local Zone. Create VPN connections to the appliance for the VPCs. Deploy instances in the new VPC in the Local Zone.",
      "C": "Create a new subnet in the Local Zone. Deploy a third-party appliance in the VPC with interfaces in each subnet. Configure the new subnet to route the Local Zone through the appliance. Deploy instances in the new subnet.",
      "D": "Create a new subnet in the Local Zone. Configure the new subnet to use a CIDR block that is within the VPC's CIDR block. Deploy instances in the new subnet in the Local Zone."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153935-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 230,
    "question": "회사가 AWS Cloud WAN을 사용하고 있으며, us-east-1 리전에 하나의 엣지 로케이션과 us-west-1 리전에 하나의 엣지 로케이션이 있습니다. 각 엣지 로케이션에는 공유 서비스 세그먼트가 있으며, 각 공유 서비스 세그먼트는 각 리전의 각 검사 VPC로의 VPC 연결을 가지고 있습니다. 검사 VPC는 AWS Network Firewall을 사용하여 WAN의 트래픽을 검사합니다. 회사가 us-east-1 엣지 로케이션에서 새로운 비즈니스 유닛(BU) 세그먼트를 생성합니다. 새로운 BU는 새로운 BU 세그먼트에 연결된 3개의 VPC를 가지고 있습니다. 규정 준수를 위해 BU VPC는 서로 통신하면 안 됩니다. 모든 인터넷 바운드 트래픽은 검사 VPC에서 검사되어야 합니다. 회사가 VPC 라우팅 테이블을 업데이트하여 인터넷 바운드 트래픽이 AWS Cloud WAN 코어 네트워크로 가도록 합니다. 회사는 향후 새로운 BU를 위한 더 많은 VPC를 추가할 계획입니다. 모든 향후 VPC는 규정을 준수해야 합니다. 가장 운영 효율적인 방식으로 이 요구사항을 충족할 솔루션은 무엇입니까? (2개 선택)",
    "options": {
      "A": "네트워크 정책을 업데이트하여 공유 서비스 세그먼트를 BU 세그먼트와 공유합니다.",
      "B": "네트워크 정책을 생성하여 검사 서비스 세그먼트를 BU 세그먼트와 공유합니다.",
      "C": "BU 세그먼트에 대해 isolate-attachments 필드를 True로 설정합니다.",
      "D": "BU 세그먼트에 대해 isolate-attachments 필드를 False로 설정합니다.",
      "E": "네트워크 정책을 업데이트하여 BU 세그먼트에 정적 라우트를 추가합니다. 공유 서비스 세그먼트를 구성하여 VPC CIDR 블록과 관련된 트래픽을 각 VPC 연결로 라우팅합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n\\n\n▸ isolate-attachments — 같은 세그먼트 내 VPC 간 통신 차단\\n\n▸ 네트워크 정책 공유 — 세그먼트 간 트래픽 흐름 제어\\n\\n\n\n【정답 포인트】\n\\n\n▸ C: isolate-attachments=True → BU VPC 간 상호 통신 차단 (규정 준수)\\n\n▸ B: 검사 세그먼트 공유 → 모든 BU 트래픽이 인스펙션 VPC 통과 (인터넷 검사)\\n\n▸ 두 설정 조합으로 격리 및 검사 동시 달성\\n\\n\n\n【오답 체크】\n\\n\n(A) 공유 서비스 세그먼트 → BU VPC 간 통신 허용 (규정 위배)\\n\n(D) isolate-attachments=False → VPC 간 통신 허용 (규정 위배)\\n\n(E) 정적 라우트 → 확장성 낮음, 향후 VPC마다 수동 설정 필요\\n\\n\n\n【시험 포인트】\n\\n\n▸ Cloud WAN 세그먼트 격리 메커니즘 이해\\n\n▸ isolate-attachments와 정책 공유의 조합 활용\\n\n▸ 운영 효율성 → 자동화된 정책 기반 솔루션",
    "en_q": "A company is using AWS Cloud WAN with one edge location in the us-east-1 Region and one edge location in the us-west-1 Region. A shared services segment exists at both edge locations. Each shared services segment has a VPC attachment to each inspection VPC in each Region. The inspection VPCs inspect traffic from a WAN by using AWS Network Firewall. The company creates a new segment for a new business unit (BU) in the us-east-1 edge location. The new BU has three VPCs that are attached to the new BU segment. To comply with regulations, the BU VPCs must not communicate with each other. All internet-bound traffic must be inspected in the inspection VPC. The company updates VPC route tables so any traffic that is bound for internet goes to the AWS Cloud WAN core network. The company plans to add more VPCs for the new BU in the future. All future VPCs must comply with regulations. Which solution will meet these requirements in the MOST operationally efficient way? (Choose two.)",
    "en_opts": {
      "A": "Update the network policy to share the shared services segment with the BU segment.",
      "B": "Create a network policy to share the inspection service segment with the BU segment.",
      "C": "Set the isolate-attachments field to True for the BU segment.",
      "D": "Set the isolate-attachments field to False for the BU segment.",
      "E": "Update the network policy to add static routes for the BU segment. Configure the shared services segment to route traffic related to VPC CIDR blocks to each respective VPC attachment."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151575-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 231,
    "question": "회사가 Auto Scaling 그룹의 일부인 Amazon EC2 인스턴스에서 고가용성, 확장 가능하고 탄력적인 애플리케이션을 호스팅하고 있습니다. 네트워크 엔지니어가 인프라 배포에 IPv6 지원을 단계별로 통합할 계획을 세우고 있습니다. 첫 번째 단계는 인프라 전체에 배포된 공개 Network Load Balancer(NLB)에서 IPv6 서비스 소비를 활성화하는 것입니다. NLB의 대상 그룹은 애플리케이션을 호스팅하는 EC2 인스턴스의 Auto Scaling 그룹으로 구성됩니다. NLB는 듀얼 스택 작동으로 구성됩니다. 첫 번째 단계의 테스트 중에 IPv6 애플리케이션 쿼리가 백엔드 서버에 도달하지 않습니다. 이 문제의 원인은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스가 배포된 서브넷에 IPv6 주소가 구성되어 있지 않습니다.",
      "B": "NLB 서브넷의 라우팅 테이블에 IPv6 라우팅이 구성되어 있지 않습니다.",
      "C": "EC2 서브넷의 라우팅 테이블에 IPv6 라우팅이 구성되어 있지 않습니다.",
      "D": "NLB와 연결된 보안 그룹이 IPv6 트래픽을 허용하지 않습니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n\\n\n▸ 듀얼 스택 NLB — IPv4와 IPv6 모두 처리\\n\n▸ IPv6 주소 — 인스턴스가 실제로 보유해야 함\\n\\n\n\n【정답 포인트】\n\\n\n▸ NLB에서 IPv6 쿼리를 수신하려면 백엔드 인스턴스가 IPv6 주소 필요\\n\n▸ 서브넷 수준에서 IPv6 CIDR 블록 할당 필수\\n\n▸ EC2 인스턴스가 IPv6 주소를 보유하지 않으면 응답 불가능\\n\\n\n\n【오답 체크】\n\\n\n(B) NLB 서브넷 라우팅 → NLB가 수신하는 부분이므로 문제 아님\\n\n(C) EC2 서브넷 라우팅 → 이미 구성되어 있음 (0.0.0.0/0 또는 로컬)\\n\n(D) NLB 보안그룹 → 일반적으로 필요 없음, EC2 보안그룹만 필요\\n\\n\n\n【시험 포인트】\n\\n\n▸ IPv6 배포의 핵심은 주소 할당순서 → 서브넷 → 인스턴스\\n\n▸ 듀얼 스택의 필수 구성요소 이해",
    "en_q": "A company hosts a highly available, scalable, and resilient application on Amazon EC2 instances that are part of an Auto Scaling group. A network engineer is planning to integrate IPv6 support with the application deployment in phases. The first phase is to enable IPv6 service consumption on the public Network Load Balancers (NLBs) that are deployed across the infrastructure. The target groups for the NLBS are configured as the Auto Scaling groups of the EC2 instances that host the application. The NLBs are configured for dual-stack operation. During the testing of the first phase, the IPv6 application queries are not reaching the backend servers. What is the cause of this issue?",
    "en_opts": {
      "A": "The subnets where the EC2 instances are deployed do not have IPv6 addresses configured.",
      "B": "The route tables for the NLB subnets do not have IPV6 routing configured.",
      "C": "The route tables for the EC2 subnets do not have IPV6 routing configured.",
      "D": "The security groups that are associated with the NLBs do not allow IPv6 traffic."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154148-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 232,
    "question": "회사가 Gateway Load Balancer(GWLB)와 GWLB 엔드포인트를 사용하는 분산 아키텍처를 AWS에서 구현하려고 합니다. 회사가 허브 및 스포크 모델을 선택했습니다. 모델에는 중앙 집중식 어플라이언스 VPC에 배포된 GWLB 및 가상 어플라이언스와 GWLB 엔드포인트가 포함됩니다. 모델에는 또한 스포크 VPC에 구성된 인터넷 게이트웨이가 포함됩니다. 스포크 VPC에서 인터넷으로의 트래픽 흐름의 올바른 순서는 무엇입니까?",
    "options": {
      "A": "1. 스포크 VPC의 애플리케이션이 VPC 라우트 테이블 구성을 기반으로 GWLB 엔드포인트로 트래픽을 전송합니다. 2. 트래픽이 보안 및 개인적으로 GWLB로 전달됩니다. 3. GWLB가 트래픽을 검사를 위해 가상 어플라이언스로 전송합니다. 4. 반환 트래픽이 GWLB 엔드포인트로 다시 흐르고 인터넷 게이트웨이를 통해 인터넷으로 나갑니다.",
      "B": "1. 스포크 VPC의 애플리케이션이 VPC 라우트 테이블 구성을 기반으로 GWLB 엔드포인트로 트래픽을 전송합니다. 2. 트래픽이 보안 및 개인적으로 GWLB 엔드포인트로 전달됩니다. 3. GWLB가 X-Forwarded-For 요청 헤더를 설정하고 트래픽을 검사를 위해 가상 어플라이언스로 전송합니다. 4. 반환 트래픽이 GWLB로 다시 흐르고 인터넷 게이트웨이를 통해 인터넷으로 나갑니다.",
      "C": "1. 스포크 VPC의 애플리케이션이 GWLB 엔드포인트로 트래픽을 전송합니다. 2. 트래픽이 보안 및 개인적으로 GWLB로 전달됩니다. 3. GWLB가 X-Forwarded-For 요청 헤더를 설정하고 트래픽을 검사를 위해 가상 어플라이언스로 전송합니다. 4. 반환 트래픽이 GWLB 엔드포인트로 다시 흐르고 인터넷 게이트웨이를 통해 인터넷으로 나갑니다.",
      "D": "1. 스포크 VPC의 애플리케이션이 GWLB로 트래픽을 전송합니다. 2. 트래픽이 보안 및 개인적으로 GWLB 엔드포인트로 전달됩니다. 3. GWLB가 트래픽을 검사를 위해 가상 어플라이언스로 전송합니다. 4. 반환 트래픽이 GWLB로 다시 흐르고 인터넷 게이트웨이를 통해 인터넷으로 나갑니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n\\n\n▸ GWLB 엔드포인트 — 스포크 VPC에서 GWLB로 진입점\\n\n▸ 트래픽 흐름 — 출발지 → 엔드포인트 → GWLB → 어플라이언스 → 반환\\n\\n\n\n【정답 포인트】\n\\n\n▸ 스포크 VPC 라우팅은 GWLB 엔드포인트로 지향 (직접 GWLB가 아님)\\n\n▸ GWLB 엔드포인트가 GWLB와의 연결 담당\\n\n▸ 가상 어플라이언스 처리 후 반환 경로도 GWLB 엔드포인트 경유\\n\n▸ X-Forwarded-For 헤더는 일반적으로 GWLB에서 설정하지 않음 (L4 기반)\\n\\n\n\n【오답 체크】\n\\n\n(B) \n(C) \n(D) X-Forwarded-For 헤더 설정 → GWLB는 L4 로드밸런서로 L7 헤더 처리 안 함\\n\n(B) \n(C) \n(D) 라우팅 경로 불일치 → 엔드포인트와 GWLB의 역할 혼동\\n\\n\n\n【시험 포인트】\n\\n\n▸ GWLB 허브-스포크 아키텍처 트래픽 흐름\\n\n▸ 엔드포인트의 역할 = 진입/반환 경로",
    "en_q": "A company wants to implement a distributed architecture on AWS that uses a Gateway Load Balancer (GWLB) and GWLB endpoints. The company has chosen a hub-and-spoke model. The model includes a GWLB and virtual appliances that are deployed into a centralized appliance VPC and GWLB endpoints. The model also includes internet gateways that are configured in spoke VPCs. Which sequence of traffic flow to the internet from the spoke VPC is correct?",
    "en_opts": {
      "A": "1. An application in a spoke VPC sends traffic to the GWLB endpoint based on the VPC route table configuration. 2. Traffic is delivered securely and privately to the GWLB. 3. The GWLB sends the traffic to a virtual appliance for inspection. 4. Return traffic flows back to the GWLB endpoint and out to the internet through the internet gateway.",
      "B": "1. An application in a spoke VPC sends traffic to the GWLB endpoint based on the VPC route table configuration. 2. Traffic is delivered securely and privately to the GWLB endpoint. 3. The GWLB sets the X-Forwarded-For request header and sends the traffic to a virtual appliance for inspection. 4. Return traffic flows back to the GWLB and out to the internet through an internet gateway.",
      "C": "1. An application in a spoke VPC sends traffic to the GWLB endpoint. 2. Traffic is delivered securely and privately to the GWLB. 3. The GWLB sets the X-Forwarded-For request header and sends the traffic to a virtual appliance for inspection. 4. Return traffic flows back to the GWLB endpoint and out to the internet through the internet gateway.",
      "D": "1. An application in a spoke VPC sends traffic to the GWLB. 2. Traffic is delivered securely and privately to the GWLB endpoint. 3. The GWLB sends the traffic to a virtual appliance for inspection. 4. Return traffic flows back to the GWLB and out to the internet through an internet gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153955-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 233,
    "question": "네트워크 엔지니어가 Amazon EC2 인스턴스로 트래픽을 전송하는 IP 주소의 목록을 제공해야 합니다. VPC 흐름 로그가 활성화되어 있습니다. EC2 인스턴스는 단일 네트워크 인터페이스와 두 개의 할당된 IP 주소를 가지고 있습니다. 그러나 흐름 로그는 기본 IP 주소에 대한 트래픽만 로깅하고 있습니다. 네트워크 엔지니어는 EC2 인스턴스의 두 번째 IP 주소로 전송되는 트래픽이 있는지 확인해야 합니다. 네트워크 엔지니어가 두 번째 IP 주소의 트래픽 흐름을 찾기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "pkt-dstaddr 필드를 포함하는 새로운 흐름 로그를 생성하여 트래픽의 원래 목적지 IP 주소를 캡처합니다.",
      "B": "dstaddr 필드를 포함하는 새로운 흐름 로그를 생성하여 트래픽의 원래 목적지 IP 주소를 캡처합니다.",
      "C": "pkt-srcaddr 필드를 포함하는 새로운 흐름 로그를 생성하여 트래픽의 원래 목적지 IP 주소를 캡처합니다.",
      "D": "srcaddr 필드를 포함하는 새로운 흐름 로그를 생성하여 트래픽의 원래 목적지 IP 주소를 캡처합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n\\n\n▸ pkt-dstaddr — 패킷의 원본 목적지 IP (ENI 보조 IP 포함)\\n\n▸ dstaddr — 네트워크 인터페이스 수준의 목적지\\n\\n\n\n【정답 포인트】\n\\n\n▸ 보조 IP로의 트래픽은 주 IP로 자동 변환됨 (기본 설정)\\n\n▸ 원래 목적지를 추적하려면 pkt-dstaddr 필드 필요\\n\n▸ pkt-dstaddr는 패킷 수준의 원본 정보 보존\\n\\n\n\n【오답 체크】\n\\n\n(B) dstaddr — ENI 주소만 기록, 보조 IP 구분 불가\\n\n(C) pkt-srcaddr — 목적지가 아닌 출발지 기록\\n\n(D) srcaddr — ENI의 출발지 IP만 기록, 목적지 추적 불가\\n\\n\n\n【시험 포인트】\n\\n\n▸ VPC Flow Logs 필드 구조 이해\\n\n▸ 패킷 수준(pkt-*) vs ENI 수준(*addr) 필드 구분\\n\n▸ 보조 IP 트래픽 추적 방법",
    "en_q": "A network engineer needs to provide a list of IP addresses that are sending traffic to an Amazon EC2 instance. VPC flow logs are enabled. The EC2 instance has a single network interface and two assigned IP addresses. However, the flow logs are logging traffic only for the primary IP address. The network engineer needs to determine whether any traffic is being sent to the second IP address of the EC2 instance. What should the network engineer do to locate the traffic flow for the second IP address?",
    "en_opts": {
      "A": "Create a new flow log that includes the pkt-dstaddr field to capture the original destination IP address of the traffic.",
      "B": "Create a new flow log that includes the dstaddr field to capture the original destination IP address of the traffic.",
      "C": "Create a new flow log that includes the pkt-srcaddr field to capture the original destination IP address of the traffic.",
      "D": "Create a new flow log that includes the srcaddr field to capture the original destination IP address of the traffic."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153076-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 234,
    "question": "회사가 us-east-1 리전과 us-west-1 리전의 엣지 로케이션으로 AWS Cloud WAN 코어 네트워크를 구성했습니다. 각 엣지 로케이션에는 두 개의 세그먼트가 있습니다: 개발 및 스테이징. 세그먼트는 기본 코어 네트워크 정책을 사용합니다. 회사가 VPC를 코어 네트워크에 연결했습니다. 개발 VPC는 us-east-1의 개발 세그먼트에 연결되고 10.0.0.0/16 CIDR 블록을 사용하도록 구성됩니다. 스테이징 VPC는 us-west-1의 스테이징 세그먼트에 연결되고 10.5.0.0/16 CIDR 블록을 사용하도록 구성됩니다. 회사가 두 VPC의 라우팅 테이블을 업데이트하여 0.0.0.0/0에 대한 트래픽을 코어 네트워크로 지향하는 경로를 추가했습니다. 회사의 네트워크 팀이 AWS Cloud WAN 코어 네트워크를 사용하여 두 VPC 간의 통신을 설정해야 합니다. 네트워크 팀이 VPC 간의 통신 테스트 중에 응답을 받지 못하고 있습니다. 네트워크 팀이 보안 그룹과 네트워크 ACL이 트래픽을 차단하지 않음을 확인했습니다. 네트워크 팀이 이 통신을 설정하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "두 VPC 라우팅 테이블을 업데이트하여 새로운 정적 라우트를 추가합니다. 개발 VPC에 10.0.0.0/16에 대한 트래픽을 개발 VPC 연결로 지향하는 라우트를 구성합니다. 스테이징 VPC에 10.5.0.0/16에 대한 트래픽을 스테이징 VPC 연결로 지향하는 라우트를 구성합니다.",
      "B": "세그먼트 필터를 업데이트하여 개발 및 스테이징 세그먼트의 트래픽을 허용합니다.",
      "C": "개발 및 스테이징 세그먼트에 대해 isolate-attachments 매개변수를 False로 설정합니다.",
      "D": "코어 네트워크 정책을 업데이트하여 각 세그먼트에 정적 라우트를 추가합니다. 10.0.0.0/16에 대한 트래픽을 개발 VPC 연결로 지향하는 라우트를 구성합니다. 10.5.0.0/16에 대한 트래픽을 스테이징 VPC 연결로 지향하는 라우트를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n\\n\n▸ 코어 네트워크 정책 — 세그먼트 간 라우팅 규칙\\n\n▸ 정적 라우트 — 명시적 경로 지정\\n\\n\n\n【정답 포인트】\n\\n\n▸ 기본 정책으로는 다른 세그먼트 간의 연결 불가\\n\n▸ 서로 다른 세그먼트 간(개발↔스테이징) 통신 필요\\n\n▸ 코어 네트워크 정책에서 명시적 정적 라우트 정의 필수\\n\n▸ 각 세그먼트가 원격 세그먼트의 CIDR로의 라우트 알아야 함\\n\\n\n\n【오답 체크】\n\\n\n(A) VPC 라우팅 테이블 → 코어 네트워크 정책 확인 필요, 불충분\\n\n(B) 세그먼트 필터 → 트래픽 허용이 아닌 고급 필터링 기능\\n\n(C) isolate-attachments=False → VPC 격리 제거, 같은 세그먼트 내에만 영향\\n\\n\n\n【시험 포인트】\n\\n\n▸ Cloud WAN 정책 기반 라우팅\\n\n▸ 세그먼트 간 명시적 라우트 정의 필수\\n\n▸ 코어 네트워크 정책의 역할",
    "en_q": "A company has configured an AWS Cloud WAN core network with edge locations in the us-east-1 Region and the us-west-1 Region. Each edge location has two segments: development and staging. The segments use the default core network policy. The company has attached VPCs to the core network. A development VPC is attached to the development segment in us-east-1 and is configured to use the 10.0.0.0/16 CIDR block. A staging VPC is attached to the staging segment in us-west-1 and is configured to use the 10.5.0.0/16 CIDR block. The company has updated the route tables for both VPCs with a route that directs any traffic for 0.0.0.0/0 to the core network. The company's network team needs to establish communication between the two VPCs by using the AWS Cloud WAN core network. The network team is not receiving a response during tests of communication between the VPCs. The network team has verified that security groups and network ACLs are not blocking the traffic. What should the network team do to establish this communication?",
    "en_opts": {
      "A": "Update both VPC route tables to have a new static route. Configure a route on the development VPC to direct the traffic for 10.0.0.0/16 to the development VPC attachment. Configure a route on the staging VPC to direct the traffic for 10.5.0.0/16 to the staging VPC attachment.",
      "B": "Update the segment filter to allow traffic on the development and staging segments.",
      "C": "Set the isolate-attachments parameter to False for the development and staging segments.",
      "D": "Update the core network policy to add a static route for each segment. Configure a route to direct the traffic for 10.0.0.0/16 to the development VPC attachment. Configure a route to direct the traffic for 10.5.0.0/16 to the staging VPC attachment."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151608-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 235,
    "question": "회사가 us-east-1 리전의 여러 VPC를 보유하고 있으며 이들은 Transit Gateway를 통해 서로 연결되어 있습니다. 네트워크 엔지니어가 회사의 온프레미스 데이터 센터와 Transit Gateway 간의 AWS Direct Connect 연결을 설정하여 워크로드의 마이그레이션을 수행해야 합니다. Direct Connect 연결은 Amazon CloudWatch의 ConnectionState 메트릭에 따르면 UP 상태입니다. 그러나 VIF는 DOWN 상태입니다. 네트워크 엔지니어가 온프레미스 라우터의 Transit VIF와 BGP 구성을 확인했으나 문제가 없습니다. 그러나 네트워크 엔지니어가 AWS 피어 IP 주소에 ping을 할 수 없습니다. 이 문제를 해결하기 위해 네트워크 엔지니어가 취해야 할 단계의 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "라우터의 서브인터페이스에 올바른 IP 주소와 서브넷 마스크가 사용되는지 확인합니다.",
      "B": "라우터에서 VLAN 트렁킹이 비활성화되어 있는지 확인합니다.",
      "C": "라우터의 ARP(Address Resolution Protocol) 테이블에 AWS 엔드포인트의 MAC 주소 항목이 있는지 확인합니다.",
      "D": "교차 연결을 통해 수신되는 광학 신호가 최적인지 확인합니다.",
      "E": "라우터의 서브인터페이스 구성에 올바른 VLAN 태그가 적용되는지 확인합니다.",
      "F": "온프레미스 라우터에서 TCP 포트 179가 차단되지 않는지 확인합니다."
    },
    "answer": "ACE",
    "explanation": "【핵심 용어】\n\\n\n▸ Direct Connect VIF DOWN → L2/L3 계층 연결 문제\\n\n▸ Ping 실패 → IP 주소, VLAN, ARP 레벨 문제\\n\\n\n\n【정답 포인트】\n\\n\n▸ A: IP 주소와 마스크 → 기본 L3 설정 검증\\n\n▸ C: ARP 테이블 → L2 연결성 확인 (MAC 주소 해석)\\n\n▸ E: VLAN 태그 → VIF 설정의 핵심 (태그 불일치 = 서로 다른 VLAN)\\n\n▸ 세 항목 모두 ping 도달을 위한 필수 체크항목\\n\\n\n\n【오답 체크】\n\\n\n(B) VLAN 트렁킹 비활성화 → Direct Connect는 보통 트렁킹 필요\\n\n(D) 광학 신호 → 전기적 신호 수준, ping 문제와는 다름\\n(F) TCP 179 (BGP) → VIF DOWN 상태에서는 L3 설정 전 이미 문제\\n\\n\n\n【시험 포인트】\n\\n\n▸ Direct Connect 트러블슈팅 계층별 접근\\n\n▸ VIF DOWN = L2/L3 설정 문제 (BGP 아님)\\n\n▸ ARP와 VLAN 태그의 중요성",
    "en_q": "A company has VPCs in the us-east-1 Region that are connected to each other through a transit gateway. A network engineer needs to establish an AWS Direct Connect connection between the company's on-premises data center and the transit gateway for the migration of a workload. The Direct Connect connection is UP according to the ConnectionState metric in Amazon CloudWatch. However, the VIF is DOWN. The network engineer has verified the transit VIF and BGP configurations on the on-premises router and has found no issues. However, the network engineer is unable to ping the Amazon peer IP address. Which combination of steps should the network engineer take to troubleshoot this issue? (Choose three.)",
    "en_opts": {
      "A": "Verify that the correct IP address and subnet mask are in use for the subinterface on the router.",
      "B": "Ensure that VLAN trunking is disabled on the router.",
      "C": "Verify that the router has a MAC address entry from the AWS endpoint in the Address Resolution Protocol (ARP) table.",
      "D": "Verify that the optical signal that is received over the cross connect is optimal.",
      "E": "Ensure that the correct VLAN tag is applied on the subinterface configuration on the router.",
      "F": "Ensure that TCP port 179 is not being blocked at the on-premises router."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153958-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 236,
    "question": "물류 회사가 AWS 리전의 여러 VPC를 보유하고 있습니다. 회사가 Transit Gateway를 사용하여 VPC를 연결합니다. 회사가 AWS Site-to-Site VPN 연결을 사용하여 인터넷을 통해 Transit Gateway에 연결하는 여러 온프레미스 사무실을 보유합니다. 회사가 각 사무실을 위해 하나의 Transit Gateway VPN 연결을 구성했습니다. 모든 라우팅 테이블에서 라우트 전파가 활성화됩니다. 각 Site-to-Site VPN 연결은 액티브-패시브 구성의 두 개의 터널을 사용합니다. 회사가 각 사무실을 Site-to-Site VPN 연결과 사무실의 고객 게이트웨이 모두에 적절한 정적 라우트로 구성했습니다. 회사가 모든 사무실의 모든 IPsec 터널을 사용하여 전체 VPN 연결 대역폭을 극대화하려고 합니다. 이 요구사항을 충족하기 위해 어떤 설계 변경이 필요합니까?",
    "options": {
      "A": "각 사무실을 위해 AWS Transit Gateway Connect 연결을 생성합니다. 기존 VPN 연결을 새로운 Connect 연결의 전송으로 사용합니다. 각 고객 게이트웨이에서 각 사무실을 위해 Connect 연결에서 종료되는 GRE(Generic Routing Encapsulation) 터널을 설정합니다. 정적 라우트를 Transit Gateway VPN 연결에서 고객 게이트웨이에 대한 Transit Gateway Connect 연결로 이동합니다.",
      "B": "Transit Gateway에서 ECMP(equal-cost multi-path) 라우팅을 활성화합니다. ECMP가 고객 게이트웨이에서 지원되고 활성화되어 있는지 확인합니다. Site-to-Site VPN 연결에서 ECMP를 활성화합니다. 고객 게이트웨이의 정적 라우트가 동일한 메트릭과 관리 거리를 갖도록 합니다.",
      "C": "Transit Gateway에서 ECMP(equal-cost multi-path) 라우팅을 활성화합니다. ECMP가 고객 게이트웨이에서 지원되고 활성화되어 있는지 확인합니다. Transit Gateway와 고객 게이트웨이 간의 라우팅 구성을 정적 라우팅에서 BGP로 변경합니다. 고객 게이트웨이에서 관련 정적 라우트를 제거합니다.",
      "D": "Transit Gateway에서 ECMP(equal-cost multi-path) 라우팅을 활성화합니다. ECMP가 고객 게이트웨이에서 지원되고 활성화되어 있는지 확인합니다. Transit Gateway와 고객 게이트웨이 간의 라우팅 구성을 정적 라우팅에서 BGP로 변경합니다. 고객 게이트웨이가 ECMP 포워딩을 수행할 수 있도록 Transit Gateway에 올바른 커뮤니티 문자열을 적용하는지 확인합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n\\n\n▸ ECMP — 여러 경로를 동시에 사용하여 부하 분산\\n\n▸ 액티브-패시브 → 액티브-액티브로 변환 필요\\n\n▸ BGP — 동적 라우팅으로 두 터널 자동 감지\\n\\n\n\n【정답 포인트】\n\\n\n▸ ECMP 활성화 → Transit Gateway와 고객 게이트웨이 모두 필요\\n\n▸ 정적 라우팅 → BGP 변경 → 두 터널을 같은 비용으로 자동 로드밸런싱\\n\n▸ BGP가 두 IPsec 터널을 동등 비용으로 전파\\n\n▸ 정적 라우트 제거 → 자동 라우팅으로 전환\\n\\n\n\n【오답 체크】\n\\n\n(A) Transit Gateway Connect 미필요, 복잡성 증가\\n\n(B) BGP 미적용 → 정적 라우트로는 ECMP 활성화 불가\\n\n(D) 커뮤니티 문자열 → 표준 구성이 아님, 불필요\\n\\n\n\n【시험 포인트】\n\\n\n▸ VPN 대역폭 최대화 = ECMP + BGP\\n\n▸ 정적에서 동적 라우팅으로의 전환\\n\n▸ Transit Gateway VPN ECMP 구성 패턴",
    "en_q": "A logistics company has multiple VPCs in an AWS Region. The company uses a transit gateway to connect the VPCs. The company has several on-premises offices that connect to the transit gateway by using AWS Site-to-Site VPN connections over the internet. The company has configured one transit gateway VPN attachment for each office. Route propagation is enabled on all route tables. Each Site-to-Site VPN connection uses two tunnels in an active-passive configuration. The company configured each office with appropriate static routes on both the Site-to-Site VPN connection and the office's customer gateway. The company wants to use both IPsec tunnels of every office to maximize the overall VPN connection bandwidth. Which design changes are necessary to meet these requirements?",
    "en_opts": {
      "A": "Create an AWS Transit Gateway Connect attachment for each office Use the existing VPN attachments as the transport for the new Connect attachments. Set up a Generic Routing Encapsulation (GRE) tunnel on each customer gateway that terminates on the Connect attachment for each office. Move the static routes from the transit gateway VPN attachment to the customer gateway for the transit gateway Connect attachment.",
      "B": "Enable equal-cost multi-path (ECMP) routing on the transit gateway. Ensure ECMP is supported by and enabled on the customer gateways. Enable ECMP on the Site-to-Site VPN connection. Ensure static routes on the customer gateways have equal metrics and administrative distance.",
      "C": "Enable equal-cost multi-path (ECMP) routing on the transit gateway. (Ensure ECMP is supported by and enabled on the customer gateways. Change the routing configuration between the transit gateway and the customer gateways from static routing to BGP. Remove related static routes from the customer gateways.",
      "D": "Enable equal-cost multi-path (ECMP) routing on the transit gateway. Ensure ECMP is supported by and enabled on the customer gateways. Change the routing configuration between the transit gateway and the customer gateways from static routing to BGP. Ensure the customer gateway applies the correct community strings to give the transit gateway the ability to perform ECMP forwarding."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/155231-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 237,
    "question": "금융 회사가 단일 AWS 리전 내의 두 VPC에서 Amazon EC2 인스턴스의 여러 애플리케이션을 실행합니다. 회사가 주식 거래 애플리케이션을 위해 하나의 VPC를 사용합니다. 회사가 금융 애플리케이션을 위해 두 번째 VPC를 사용합니다. 두 VPC는 모두 멀티캐스트 라우터로 구성된 Transit Gateway에 연결되어 있습니다. 주식 거래 VPC에서 10.128.10.2의 IP 주소를 가진 EC2 인스턴스가 UDP 포트 5102에서 239.10.10.10 IP 주소로의 멀티캐스트 네트워크를 통해 거래 데이터를 전송합니다. 회사가 최근 금융 애플리케이션 VPC에 두 개의 새로운 EC2 인스턴스를 시작했습니다. 새로운 EC2 인스턴스는 주식 거래 VPC의 EC2 인스턴스로부터 멀티캐스트 주식 거래 데이터를 수신해야 합니다. 이 요구사항을 충족하기 위해 회사가 취해야 할 단계의 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "239.10.10.10의 그룹 IP 주소를 사용하여 두 개의 새로운 EC2 인스턴스의 탄력적 네트워크 인터페이스를 멀티캐스트 그룹의 구성원으로 추가합니다.",
      "B": "멀티캐스트 수신자 인스턴스에 연결된 보안 그룹에 인바운드 규칙을 추가합니다. 규칙을 다음과 같이 구성합니다: 프로토콜: IGMP Version 2. 포트: 5102, 소스: 239.10.10.10/32",
      "C": "Transit Gateway 멀티캐스트 도메인에서 금융 애플리케이션 VPC Transit Gateway 연결에 대해 두 개의 EC2 인스턴스 ID를 연결합니다.",
      "D": "Transit Gateway 멀티캐스트 도메인에서 금융 애플리케이션 VPC Transit Gateway 연결에 대해 EC2 인스턴스 서브넷을 연결합니다.",
      "E": "멀티캐스트 수신자 인스턴스에 연결된 보안 그룹에 인바운드 규칙을 추가합니다. 규칙을 다음과 같이 구성합니다: 프로토콜: UDP, 포트: 5102, 소스: 10.128.10.2/32"
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n\\n\n▸ Transit Gateway 멀티캐스트 도메인 — VPC 간 멀티캐스트 라우팅\\n\n▸ IGMP — 멀티캐스트 그룹 멤버십 관리\\n\\n\n\n【정답 포인트】\n\\n\n▸ A: 수신 인스턴스를 멀티캐스트 그룹에 가입 → IGMP 그룹 설정\\n\n▸ D: 서브넷을 멀티캐스트 도메인 연결에 추가 → VPC가 멀티캐스트 참여\\n\n▸ 두 설정이 모두 필요: VPC 레벨 + 인스턴스 레벨\\n\\n\n\n【오답 체크】\n\\n\n(B) IGMP Port 5102 → IGMP는 포트 미사용, 프로토콜만 필요\\n\n(C) EC2 인스턴스 ID 추가 → 서브넷 단위로 추가해야 함 (ID 아님)\\n\n(E) UDP 포트 5102, 소스 10.128.10.2 → 보안그룹에 필요 (별도)\\n\\n\n\n【시험 포인트】\n\\n\n▸ Transit Gateway 멀티캐스트 구성 계층\\n\n▸ ENI 그룹 멤버십 vs 서브넷 연결\\n\n▸ IGMP 프로토콜 역할 (포트 아님)",
    "en_q": "A finance company runs multiple applications on Amazon EC2 instances in two VPCs that are within a single AWS Region. The company uses one VPC for stock trading applications. The company uses the second VPC for financial applications. Both VPCs are connected to a transit gateway that is configured as a multicast router. In the stock trading VPC, an EC2 instance that has an IP address of 10.128.10.2 sends trading data over a multicast network to the 239.10.10.10 IP address on UDP Port 5102. The company recently launched two new EC2 instances in the financial application VPC. The new EC2 instances need to receive the multicast stock trading data from the EC2 instance that is in the stock trading VPC. Which combination of steps should the company take to meet this requirement? (Choose three.)",
    "en_opts": {
      "A": "Add the elastic network interfaces of the two new EC2 instances as members of the multicast group by using the group IP address of 239.10.10.10.",
      "B": "Add an inbound rule to the security groups that are attached to the multicast receiver instances. Configure the rule as follows: Protocol: IGMP Version 2. Port: 5102, and Source: 239 10.10.10/32",
      "C": "Create associations to two EC2 instance IDs on the financial application VPC transit gateway attachment under the transit gateway multicast domain.",
      "D": "Create an association to EC2 instance subnets on the financial application VPC transit gateway attachment under the transit gateway multicast domain. D. Add an inbound rule to the security groups that are attached to the multicast receiver instances. Configure the rule as follows: Protocol: IGMP Version 2. Port: All, and Source: 0 0.0.0/32",
      "E": "Add an inbound rule to the security groups that are attached to the multicast receiver instances. Configure the rule as follows. Protocol: UDP, Port: 5102, and Source: 10.128.10.2/32"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153961-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 238,
    "question": "회사가 us-east-1 리전의 여러 VPC에서 워크로드를 실행합니다. VPC는 Transit Gateway를 통해 연결됩니다. AWS Direct Connect 연결은 미국의 데이터 센터와 Transit Gateway 간의 개인 연결을 제공합니다. Direct Connect 게이트웨이가 Transit Gateway와 연결됩니다. 회사가 최근 런던에 새로운 사무실 위치를 개설했습니다. 회사는 eu-west-2 리전의 여러 VPC에서 클라우드 서비스를 시작할 계획입니다. 런던 새 사무실의 사용자는 us-east-1에서 실행되는 워크로드에 개인 액세스를 가져야 합니다. 미국 데이터 센터의 사용자는 eu-west-2에서 생성되는 모든 워크로드에 액세스를 가져야 합니다. 네트워크 엔지니어가 사용자에게 필요한 액세스를 제공하는 유연한 솔루션을 구현해야 합니다. 솔루션이 향후 성장을 수용할 수 있어야 합니다. 이 요구사항을 최소한의 운영 노력으로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "런던 사무실에서 us-east-1의 Direct Connect 게이트웨이로 AWS Site-to-Site VPN 연결을 생성합니다.",
      "B": "런던 사무실을 위한 새로운 Direct Connect 연결을 설정합니다. 새로운 Direct Connect 연결을 기존 Direct Connect 게이트웨이에 연결합니다. eu-west-2 리전에서 Transit Gateway를 생성합니다. 새로운 Transit Gateway를 기존 Direct Connect 게이트웨이와 연결합니다. us-east-1과 eu-west-2의 Transit Gateway 간에 피어링 연결을 생성합니다.",
      "C": "런던 사무실에서 us-east-1의 각 VPC로 AWS Site-to-Site VPN 연결을 생성합니다.",
      "D": "런던 사무실을 위한 새로운 AWS Direct Connect 연결을 설정합니다. eu-west-2에서 새로운 Direct Connect 게이트웨이 및 Transit Gateway를 생성합니다. 새로운 Direct Connect 연결을 새로운 Direct Connect 게이트웨이에 연결합니다. us-east-1과 eu-west-2의 Transit Gateway 간에 피어링 연결을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n\\n\n▸ Direct Connect 게이트웨이 — 여러 리전 간 Direct Connect 중앙 집중화\\n\n▸ Transit Gateway 피어링 — 리전 간 VPC 연결\\n\\n\n\n【정답 포인트】\n\\n\n▸ 기존 Direct Connect 게이트웨이 재사용 → 비용 효율적\\n\n▸ 런던의 새로운 Direct Connect 연결을 같은 게이트웨이에 연결\\n\n▸ eu-west-2 Transit Gateway를 같은 게이트웨이에 연결\\n\n▸ Transit Gateway 피어링으로 리전 간 VPC 통신 완성\\n\n▸ 단일 Direct Connect 게이트웨이로 중앙화된 아키텍처\\n\\n\n\n【오답 체크】\n\\n\n(A) VPN 연결 → 개인 연결 아님 (인터넷 기반)\\n\n(C) 각 VPC마다 VPN → 확장성 낮음, 관리 복잡\\n\n(D) 새로운 게이트웨이 생성 → 불필요한 비용, 이점 없음\\n\\n\n\n【시험 포인트】\n\\n\n▸ Direct Connect 게이트웨이의 중앙화 이점\\n\n▸ 여러 리전 설계에서의 운영 효율성\\n\n▸ Direct Connect + Transit Gateway 조합 아키텍처",
    "en_q": "A company runs workloads in multiple VPCs in the us-east-1 Region. The VPCs are connected to a transit gateway. An AWS Direct Connect connection provides private connectivity between a data center that is in the US and the transit gateway. A Direct Connect gateway is associated with the transit gateway. The company has recently opened a new office location in London. The company plans to launch cloud services in multiple VPCs in the eu-west-2 Region. Users in the new London office must have private access to the workloads that run in us-east-1. Users in the US data center must have access to any workloads that are created in eu-west-2. A network engineer must implement a flexible solution that provides users the required access. The solution must be able to accommodate future growth. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Create an AWS Site-to-Site VPN connection from the London office to the Direct Connect gateway in us-east-1.",
      "B": "Establish a new Direct Connect connection for the London office. Attach the new Direct Connect connection to the existing Direct Connect gateway. Create a transit gateway in eu-west-2. Associate the new transit gateway with the existing Direct Connect gateway. Create a peering connection between the transit gateways in us-east-1 and eu-west-2.",
      "C": "Create an AWS Site-to-Site VPN connection from the London office to each of the VPCs that are in us-east-1.",
      "D": "Establish a new AWS Direct Connect connection for the London office Create a new Direct Connect gateway and a transit gateway in eu-west-2. Attach the new Direct Connect connection to the new Direct Connect gateway. Create a peering connection between the transit gateways in us-east-1 and eu-west-2."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/155744-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 239,
    "question": "회사가 프로덕션 VPC에서 웹 서버 소프트웨어를 실행하는 10개의 Amazon EC2 인스턴스를 가지고 있습니다. 회사는 온프레미스 데이터 센터에서 실행되는 10개의 웹 서버도 가지고 있습니다. 회사는 온프레미스 데이터 센터와 프로덕션 VPC 간의 10 Gbps AWS Direct Connect 연결을 보유하고 있습니다. 데이터 센터는 10.100.0.0/20 CIDR 블록을 사용합니다. 회사가 수천 명의 외부 사용자로부터 HTTPS 트래픽을 수신하는 로드 밸런싱 솔루션을 구현해야 합니다. 솔루션이 AWS의 웹 서버와 데이터 센터의 웹 서버 간의 트래픽을 분산해야 합니다. 웹 서버의 위치와 관계없이 HTTPS 요청은 세션 기간 동안 같은 웹 서버로 이동해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "프로덕션 VPC에 Network Load Balancer(NLB)를 배포합니다. EC2 인스턴스와 온프레미스 서버를 위한 대상 그룹을 생성합니다. 대상 유형을 IP로 지정합니다. EC2 인스턴스와 온프레미스 서버를 대상 그룹에 등록합니다. NLB에서 연결 드레이닝을 활성화합니다.",
      "B": "프로덕션 VPC에 Application Load Balancer(ALB)를 배포합니다. EC2 인스턴스와 온프레미스 서버를 위한 대상 그룹을 생성합니다. 대상 유형을 IP로 지정합니다. EC2 인스턴스와 온프레미스 서버를 대상 그룹에 등록합니다. ALB에서 애플리케이션 기반 스티키 세션을 활성화합니다.",
      "C": "프로덕션 VPC에 Network Load Balancer(NLB)를 배포합니다. EC2 인스턴스와 온프레미스 서버를 위한 대상 그룹을 생성합니다. 대상 유형을 인스턴스로 지정합니다. EC2 인스턴스와 온프레미스 서버를 대상 그룹에 등록합니다. NLB에서 스티키 세션을 활성화합니다.",
      "D": "프로덕션 VPC에 Application Load Balancer(ALB)를 배포합니다. EC2 인스턴스와 온프레미스 서버를 위한 대상 그룹을 생성합니다. 대상 유형을 인스턴스로 지정합니다. EC2 인스턴스와 온프레미스 서버를 대상 그룹에 등록합니다. ALB에서 애플리케이션 기반 스티키 세션을 활성화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n\\n\n▸ 스티키 세션 — 같은 서버로 계속 라우팅\\n\n▸ IP 대상 유형 — 온프레미스 서버 등록 가능\\n\n▸ ALB — 응용 계층 기반 스티키\\n\\n\n\n【정답 포인트】\n\\n\n▸ HTTPS = 응용계층 → ALB 필요 (NLB는 L4)\\n\n▸ 애플리케이션 기반 스티키 → 쿠키 기반 세션 유지\\n\n▸ IP 대상 유형 → 온프레미스 서버 IP 직접 등록 가능\\n\n▸ ALB + IP 대상 + 애플리케이션 스티키 = 완벽한 조합\\n\\n\n\n【오답 체크】\n\\n\n(A) NLB + 연결 드레이닝 → 스티키 미지원 (L4)\\n\n(C) NLB 스티키 → 응용계층 정보 없음\\n\n(D) 인스턴스 대상 유형 → 온프레미스 서버 등록 불가\\n\\n\n\n【시험 포인트】\n\\n\n▸ HTTPS 로드밸런싱은 ALB 선택\\n\n▸ 온프레미스 + 클라우드 혼합 = IP 대상 유형\\n\n▸ 스티키 세션 구현 방식",
    "en_q": "A company has 10 Amazon EC2 instances that run web server software in a production VPC. The company also has 10 web servers that run in an on-premises data center. The company has a 10 Gbps AWS Direct Connect connection between the on-premises data center and the production VPC. The data center uses the 10.100.0.0/20 CIDR block. The company needs to implement a load balancing solution that receives HTTPS traffic from thousands of external users. The solution must distribute the traffic across the web servers on AWS and the web servers in the data center. Regardless of the location of the web servers, HTTPS requests must go to the same web server for the duration of the session. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy a Network Load Balancer (NLB) in the production VPC. Create one target group for the EC2 Instances and a second target group for the on-premises servers. Specify IP as the target type. Register the EC2 instances and the on-premises servers with the target groups. Enable connection draining on the NLB.",
      "B": "Deploy an Application Load Balancer (ALB) in the production VPC. Create one target group for the EC2 Instances and a second target group for the on-premises servers. Specify IP as the target type. Register the EC2 instances and the on-premises servers with the target groups. Enable application-based sticky sessions on the ALB.",
      "C": "Deploy a Network Load Balancer (NLB) in the production VPCreate one target group for the EC2 Instances and a second target group for the on-premises servers. Specify instance as the target type. Register the EC2 instances and the on-premises servers with the target groups. Enable sticky sessions on the NLB.",
      "D": "Deploy an Application Load Balancer (ALB) in the production VPC. Create one target group for the EC2 Instances and a second target group for the on-premises servers. Specify instance as the target type. Register the EC2 instances and the on-premises servers with the target groups. Enable application-based sticky sessions on the ALB."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/155745-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 240,
    "question": "글로벌 회사가 회사의 주요 및 보조 데이터 센터와 VPC 간의 네트워크 연결을 설정하고 있습니다. 네트워크 엔지니어가 연결의 복원력과 내결함성을 극대화해야 합니다. 네트워크 대역폭은 10 Gbps보다 커야 합니다. 이 요구사항을 가장 비용 효율적으로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "주요 데이터 센터에 100 Gbps 연결을 설정하여 AWS Direct Connect 위치에서 종료합니다. 보조 데이터 센터에 두 번째 100 Gbps 연결을 설정하여 두 번째 Direct Connect 위치에서 종료합니다. 연결이 별도의 공급자에 의해 관리되도록 합니다.",
      "B": "주요 데이터 센터에 10 Gbps 연결을 설정하여 AWS Direct Connect 위치에서 종료합니다. 보조 데이터 센터에 두 번째 10 Gbps 연결을 설정하여 두 번째 Direct Connect 위치에서 종료합니다. 연결이 별도의 공급자에 의해 관리되도록 합니다.",
      "C": "주요 데이터 센터에 두 개의 10 Gbps 연결을 설정하여 하나의 AWS Direct Connect 위치에서 종료합니다. 연결이 별도의 공급자에 의해 관리되도록 합니다. 보조 데이터 센터에 두 개의 10 Gbps 연결을 설정하여 두 번째 Direct Connect 위치에서 종료합니다. 연결이 별도의 공급자에 의해 관리되도록 합니다.",
      "D": "주요 데이터 센터에 10 Gbps 연결을 설정하여 AWS Direct Connect 위치에서 종료합니다. 보조 데이터 센터에 AWS Site-to-Site VPN 연결을 설정하여 회사의 VPC와 같은 리전의 가상 개인 게이트웨이에서 종료합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n\\n\n▸ 복원력 — 장애 대응 능력\\n\n▸ 내결함성 — 장애 후에도 계속 동작\\n\n▸ 다양한 공급자 — 단일 지점 장애 방지\\n\\n\n\n【정답 포인트】\n\\n\n▸ 각 데이터 센터마다 2개 × 10 Gbps = 20 Gbps (10 Gbps 초과)\\n\n▸ 서로 다른 Direct Connect 위치 = 물리적 경로 분산\\n\n▸ 서로 다른 공급자 = 공급자 장애 회피\\n\n▸ 각 데이터 센터 자체 복원력 → 해당 지역 내 고가용성\\n\\n\n\n【오답 체크】\n\\n\n(A) \n(B) 100/10 Gbps → 비용 높음, 단일 위치 집중화 위험\\n\n(D) VPN 추가 → 보조 데이터 센터 복원력 부족 (인터넷 기반 VPN)\\n\\n\n\n【시험 포인트】\n\\n\n▸ 각 위치별 독립적 복원력 구성\\n\n▸ 대역폭 > 10 Gbps = 다중 경로\\n\n▸ 비용 vs 복원력 균형 (100 Gbps는 과도)\\n\n▸ 공급자 다양화의 중요성",
    "en_q": "A global company is establishing network connections between the company's primary and secondary data centers and a VPC. A network engineer needs to maximize resiliency and fault tolerance for the connections. The network bandwidth must be greater than 10 Gbps. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Set up a 100 Gbps connection at the primary data center that terminates at an AWS Direct Connect location. Set up a second 100 Gbps connection at the secondary data center that terminates at a second Direct Connect location. Ensure the connections are managed by separate providers.",
      "B": "Set up a 10 Gbps connection at the primary data center that terminates at an AWS Direct Connect location. Set up a second 10 Gbps connection at the secondary data center that terminates at a second Direct Connect location. Ensure the connections are managed by separate providers.",
      "C": "Set up two 10 Gbps connections at the primary data center that terminate at one AWS Direct Connect location. Ensure the connections are managed by separate providers. Set up two 10 Gbps connections at the secondary data center that terminate at a second Direct Connect location. Ensure the connections are managed by separate providers.",
      "D": "Set up a 10 Gbps connection at the primary data center that terminates at an AWS Direct Connect location. Set up an AWS Site-to-Site VPN connection at the secondary data center that terminates at a virtual private gateway in the same Region as the company's VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154121-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 241,
    "question": "회사의 데이터 센터가 AWS Direct Connect 전용 연결을 통해 단일 AWS 리전에 연결되어 있습니다. 회사가 이 리전에 단일 VPC를 보유하고 있습니다. 회사가 모든 애플리케이션 로그를 데이터 센터에 로컬로 저장합니다. 회사가 모든 애플리케이션 로그를 7년 동안 유지해야 합니다. 회사가 모든 애플리케이션 로그를 Amazon S3 버킷으로 복사하기로 결정합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Direct Connect 연결에 공개 VIF를 생성합니다. VPC에 Amazon S3 Gateway 엔드포인트를 생성합니다.",
      "B": "Direct Connect 연결에 프라이빗 VIF를 생성합니다. VPC에 Amazon S3 Gateway 엔드포인트를 생성합니다.",
      "C": "Direct Connect 연결에 프라이빗 VIF를 생성합니다. VPC에 Amazon S3 Interface 엔드포인트를 생성합니다.",
      "D": "Direct Connect 연결에 공개 VIF를 생성합니다. VPC에 Amazon S3 Interface 엔드포인트를 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n\\n\n▸ 프라이빗 VIF — 온프레미스↔AWS 직접 연결\\n\n▸ S3 Interface 엔드포인트 — VPC 내 프라이빗 S3 접근\\n\n▸ 로그 전송 — 개인 연결 요구\\n\\n\n\n【정답 포인트】\n\\n\n▸ 데이터 센터 → S3: Direct Connect 프라이빗 경로\\n\n▸ 프라이빗 VIF → S3로의 개인 연결\\n\n▸ Gateway 엔드포인트 (라우트 기반) vs Interface 엔드포인트 (DNS 기반)\\n\n▸ Interface 엔드포인트가 프라이빗 VIF와 더 호환성 좋음\\n\\n\n\n【오답 체크】\n\\n\n(A) 공개 VIF → 인터넷 경유 (보안 위험)\\n\n(B) Gateway 엔드포인트 + 프라이빗 VIF → 라우팅 미지원\\n\n(D) 공개 VIF → 인터넷 기반 (로그 전송 부적절)\\n\\n\n\n【시험 포인트】\n\\n\n▸ Direct Connect VIF 타입: 공개 vs 프라이빗\\n\n▸ S3 엔드포인트: Gateway vs Interface의 선택\\n\n▸ 개인 연결 아키텍처 설계",
    "en_q": "A company's data center is connected to a single AWS Region by an AWS Direct Connect dedicated connection. The company has a single VPC in the Region. The company stores logs for all its applications locally in the data center. The company must keep all application logs for 7 years. The company decides to copy all application logs to an Amazon S3 bucket. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a public VIF on the Direct Connect connection. Create an Amazon S3 gateway endpoint in the VPC.",
      "B": "Create a private VIF on the Direct Connect connection. Create an Amazon S3 gateway endpoint in the VPC.",
      "C": "Create a private VIF on the Direct Connect connection. Create an Amazon S3 interface endpoint in the VPC.",
      "D": "Create a public VIF on the Direct Connect connection. Create an Amazon S3 interface endpoint in the VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153963-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 242,
    "question": "회사가 여러 Amazon EC2 인스턴스에서 안전한 웹 애플리케이션을 호스팅할 계획을 세우고 있습니다. 애플리케이션에는 Amazon Route 53 호스팅 영역과 연결된 DNS 도메인이 있을 것입니다. 회사가 DNS 포이즈닝 공격으로부터 도메인을 보호하려고 합니다. 회사가 또한 웹 브라우저가 신뢰할 수 있는 타사를 사용하여 애플리케이션에 인증하도록 하려고 합니다. 이 요구사항을 충족할 조치의 조합은 무엇입니까?",
    "options": {
      "A": "Route 53 호스팅 영역을 DNS 보안 확장(DNSSEC)을 사용하도록 구성합니다. EC2 인스턴스에 자체 서명 X.509 인증서를 설치합니다.",
      "B": "Route 53 호스팅 영역에 NAPTR(Name Authority Pointer) 기록을 구성합니다. EC2 인스턴스에 공개 인증 기관에 의해 서명된 X.509 인증서를 설치합니다.",
      "C": "Route 53 호스팅 영역을 DNS 보안 확장(DNSSEC)을 사용하도록 구성합니다. EC2 인스턴스에 공개 인증 기관에 의해 서명된 X.509 인증서를 설치합니다.",
      "D": "Route 53 호스팅 영역에 NAPTR(Name Authority Pointer) 기록을 구성합니다. EC2 인스턴스에 자체 서명 X.509 인증서를 설치합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ DNSSEC — DNS 포이즈닝 방지 (도메인 시작점)\n▸ 공개 인증서 — 브라우저 신뢰 기반\n▸ NAPTR — DNS 서비스 검색 (인증서 무관)\n\n【정답 포인트】\n▸ DNS 포이즈닝 → DNSSEC 사용 (NAPTR 아님)\n▸ 브라우저 신뢰 인증 → 공개 CA 인증서 필수 (자체 서명 불가)\n▸ DNSSEC + 공개 CA 인증서 = 두 보안 요구사항 동시 충족\n\n【오답 체크】\n(A) 자체 서명 인증서 → 브라우저 경고, 신뢰 미지원\n(B) NAPTR → DNS 포이즈닝 방지 안 함\n(D) NAPTR + 자체 서명 → 둘 다 불적절\n\n【시험 포인트】\n▸ DNSSEC = DNS 보안 (NAPTR 아님)\n▸ 브라우저 신뢰 = 공개 CA 인증서\n▸ 보안 요구사항별 AWS 서비스 선택",
    "en_q": "A company is planning to host a secure web application across multiple Amazon EC2 instances. The application will have an associated DNS domain in an Amazon Route 53 hosted zone. The company wants to protect the domain from DNS poisoning attacks. The company also wants to allow web browsers to authenticate into the application by using a trusted third party. Which combination of actions will meet these requirements?",
    "en_opts": {
      "A": "Configure the Route 53 hosted zone to use DNS Security Extensions (DNSSEC). Install self-signed X.509 certificates on the EC2 instances.",
      "B": "Configure a Name Authority Pointer (NAPTR) record in the Route 53 hosted zone. Install X 509 certificates that are signed by a public certificate authority on the EC2 instances.",
      "C": "Configure the Route 53 hosted zone to use DNS Security Extensions (DNSSEC). Install X.509 certificates that are signed by a public certificate authority on the EC2 instances.",
      "D": "Configure a Name Authority Pointer (NAPTR) record in the Route 53 hosted zone. Install self-signed X.509 certificates on the EC2 instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153964-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 243,
    "question": "회사가 AWS로의 마이그레이션을 위해 AWS Transit Gateway 허브 및 스포크 아키텍처를 사용할 계획을 세우고 있습니다. 현재 온프레미스 MPLS(Multi-Protocol Label Switching) 네트워크는 MPLS VPN을 사용하여 네트워크 세그먼테이션을 적용하는 엄격한 제어가 있습니다. 회사가 AWS로의 탄력적이고 고속, 저지연 연결을 제공하기 위해 두 개의 10 Gbps AWS Direct Connect 연결을 프로비저닝했습니다. 보안 엔지니어가 AWS 환경에 네트워크 세그먼테이션 개념을 적용하여 회사의 각 소프트웨어 개발 환경을 위해 가상 라우팅 및 포워딩(VRF)이 논리적으로 분리되도록 해야 합니다. MPLS VPN의 수가 향후 증가할 것입니다. 온프레미스 MPLS VPN은 겹치는 주소 공간을 가질 수 있습니다. 회사의 AWS 네트워크 설계가 VPN에 대한 겹치는 주소 공간을 지원해야 합니다. 이 요구사항을 최소한의 운영 오버헤드로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "SD-WAN 헤드 엔드 가상 어플라이언스 및 SD-WAN 컨트롤러를 Transit Gateway Connect VPC에 배포합니다. 회사의 엣지 라우터를 새로운 SD-WAN 컨트롤러로 관리하고 SD-WAN을 사용하여 트래픽을 회사의 각 개발 환경을 위한 정의된 세그먼트로 세그먼트화하도록 구성합니다.",
      "B": "회사의 엣지 라우터에서 각 MPLS VPN에 대해 각 회사의 개발 환경에 대해 IPsec VPN을 구성합니다. 각 IPsec VPN 터널을 별도의 MPLS VPN에 연결합니다. 각 MPLS VPN에 대해 Transit Gateway에서 종료되는 AWS Site-to-Site VPN 연결을 구성합니다. 각 MPLS VPN을 위해 각 Transit Gateway VPN 연결과 일치하는 Transit Gateway 라우트 테이블을 구성합니다.",
      "C": "AWS Site-to-Site VRF-인식 IPsec VPN에서 종료되는 Transit VPC를 생성합니다. 회사의 각 개발 환경 VRF에 대해 각 VPC로의 IPsec VPN 연결을 구성합니다.",
      "D": "회사의 엣지 라우터와 Transit Gateway 간의 각 MPLS VPN에 대해 Transit Gateway Connect 연결을 구성합니다. 회사의 각 개발 환경에 대해 각 MPLS VPN과 일치하는 Transit Gateway 라우트 테이블을 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Transit Gateway Connect — GRE 터널 기반 VRF 지원\n▸ 겹치는 주소 공간 → VRF 격리로 해결\n▸ MPLS VPN 매핑 → Transit Gateway 라우트 테이블 매핑\n\n【정답 포인트】\n▸ Transit Gateway Connect 사용 → 온프레미스 MPLS VPN별 독립 연결\n▸ GRE 터널 기반 → 라우터와의 직접 매핑\n▸ VRF 격리 → 겹치는 주소 공간 지원\n▸ 라우트 테이블 매핑 → MPLS VPN별 정책 적용\n▸ 확장성 높음 → 운영 오버헤드 최소\n\n【오답 체크】\n(A) SD-WAN → 복잡, 추가 어플라이언스\n(B) IPsec VPN별 Site-to-Site VPN → 확장성 낮음, 많은 연결\n(C) VPC 기반 → VPC마다 구성, 중복 비용\n\n【시험 포인트】\n▸ Transit Gateway Connect의 역할 = MPLS VPN 마이그레이션\n▸ VRF 격리 메커니즘 이해\n▸ 대규모 MPLS 환경의 AWS 마이그레이션\n▸ 겹치는 CIDR 지원 아키텍처",
    "en_q": "A company is planning to use an AWS Transit Gateway hub and spoke architecture to migrate to AWS. The current on-premises multi-protocol label switching (MPLS) network has strict controls that enforce network segmentation by using MPLS VPNs. The company has provisioned two 10 Gbps AWS Direct Connect connections to provide resilient, high-speed, low-latency connectivity to AWS. A security engineer needs to apply the concept of network segmentation to the AWS environment to ensure that virtual routing and forwarding (VRF) is logically separated for each of the company's software development environments. The number of MPLS VPNs will increase in the future. On-premises MPLS VPNs will have overlapping address space. The company's AWS network design must support overlapping address space for the VPNs. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Deploy a software-defined WAN (SD-WAN) head-end virtual appliance and an SD-WAN controller into a Transit Gateway Connect VPC. Configure the company's edge routers to be managed by the new SD-WAN controller and to use SD-WAN to segment the traffic into the defined segments for each of the company's development environments.",
      "B": "Configure IPsec VPNs on the company edge routers for each MPLS VPN for each of the company's development environments. Attach each IPsec VPN tunnel to a discrete MPLS VPN. Configure AWS Site-to-Site VPN connections that terminate at a transit gateway for each MPLS VPN. Configure a transit gateway route table that matches the MPLS VPN for each Transit Gateway VPN attachment.",
      "C": "Create a transit VPC that terminates at the AWS Site-to-Site VRF-aware IPsec VPN. Configure IPsec VPN connections to each VPC for each of the company's development environment VRFs.",
      "D": "Configure a Transit Gateway Connect attachment for each MPLS VPN between the company's edge routers and Transit Gateway. Configure a transit gateway route table that matches the MPLS VPN for each of the company's development environments."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153969-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 244,
    "question": "회사가 AWS로 마이그레이션할 계획을 세우고 있으며 여러 AWS 리전에서 여러 VPC를 사용할 것입니다. 네트워크 엔지니어가 eu-west-1과 eu-central-1 리전을 회사 본부와 지사에 각각 연결해야 합니다. 네트워크 엔지니어가 Prod A라는 프로덕션 VPC를 10.0.0.0/16 CIDR 블록으로 생성했습니다. Prod A는 eu-west-1의 계정에서 실행됩니다. 네트워크 엔지니어가 Prod B라는 또 다른 프로덕션 VPC를 10.1.0.0/16 CIDR 블록으로 생성했습니다. Prod B는 eu-central-1의 다른 계정에서 실행됩니다. 네트워크 엔지니어가 필요한 연결을 달성하기 위해 다음 단계를 수행했습니다: 1. 각 리전에 하나의 Transit Gateway를 생성했습니다. 2. 프로덕션 계정과 두 리전 모두에서 Transit Gateway를 공유하고 수락했습니다. 3. 두 Transit Gateway 간의 피어링 연결을 구성했습니다. 4. 두 VPC를 각 리전 Transit Gateway에 연결했습니다. 5. 두 개의 Transit Gateway 라우팅 테이블을 생성하고 라우트 테이블과 연결을 연결했습니다. 6. 두 Transit Gateway 라우팅 테이블에서 정적 라우트를 구성하여 다른 리전의 원격 VPC로의 트래픽을 전송했습니다. 7. 각 리전의 VPC 라우팅 테이블에서 라우트 전파를 활성화했습니다. 이 설정 이후 네트워크 엔지니어가 Prod A에서 Prod B로 연결하려고 했습니다. 그러나 연결은 실패했습니다. 네트워크 엔지니어가 필요한 연결을 달성하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "피어링 연결의 IP 주소를 더 넓은 범위로 수정합니다.",
      "B": "원격 VPC로의 트래픽을 전송하는 Transit Gateway 라우트 테이블의 정적 라우트를 삭제하고 대신 라우트 전파를 활성화합니다.",
      "C": "두 프로덕션 VPC 라우팅 테이블에서 대상 10.0.0.0/8을 사용하고 리전 Transit Gateway를 대상으로 하는 새로운 라우트를 생성합니다.",
      "D": "프로덕션 계정의 Transit Gateway 라우트 테이블을 수정하여 프로덕션 VPC 간에 동적으로 라우트를 전파합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 리전 간 피어링 — 두 리전 Transit Gateway 연결\n▸ 양쪽 VPC에서 트래픽 시작 필요\n\n【정답 포인트】\n▸ Prod A의 라우트 테이블 → Prod B (10.1.0.0/16) CIDR로의 경로 필요\n▸ 더 넓은 범위 (10.0.0.0/8) 추가 → 사유: 다른 리전의 VPC도 포함\n▸ Transit Gateway를 대상 지정 → 리전 간 피어링 경유\n▸ 양 방향 모두 필요 (Prod A ↔ Prod B)\n▸ 정적 라우트 = VPC 라우팅 테이블에 명시적 정의\n\n【오답 체크】\n(A) 피어링 IP 범위 수정 → 이미 구성된 것으로 가정, 원인 아님\n(B) 라우트 전파 → 피어링 연결이 먼저 라우트 광고 필요\n(D) 프로덕션 계정 라우트 테이블 수정 → 이미 정적 라우트 구성됨\n\n【시험 포인트】\n▸ 리전 간 피어링 = 양쪽 VPC에서 명시적 라우트 필요\n▸ 넓은 범위 (10.0.0.0/8) 사용 이유 → 다른 VPC 확장성\n▸ VPC 라우팅 테이블 vs Transit Gateway 라우팅 테이블 구분",
    "en_q": "A company is planning to migrate to AWS and use multiple VPCs in multiple AWS Regions. A network engineer must connect the eu-west-1 and eu-central-1 Regions to the company headquarters and branch office, respectively. The network engineer created a production VPC, named Prod A, with a CIDR block of 10.0.0.0/16. Prod A runs in an account in eu-west-1. The network engineer then created another production VPC, named Prod B, with a CIDR block of 10.1.0.0/16. Prod В runs in a different account in eu-central-1. The network engineer performed the following steps to try to achieve the required connectivity: 1. Created one transit gateway in each Region 2. Shared and accepted the transit gateways with the production accounts in both Regions 3. Configured the peering attachment between both transit gateways 4. Attached both VPCs to the respective Region transit gateway 5. Created both transit gateway route tables and associated the attachments with the route tables 6. Configured a static route in both transit gateway route tables to send traffic to the remote VPC in the other Region 7. Activated route propagation on the VPC route tables in each Region After the configuration, the network engineer tried to connect from Prod A to Prod B. However, the connection was unsuccessful. What should the network engineer do to achieve the required connectivity?",
    "en_opts": {
      "A": "Modify the IP address of the peering attachment to a wider range.",
      "B": "Delete the static routes that were in the transit gateway route table to send traffic to the remote VPC and enable route propagation instead.",
      "C": "Create a new route destined to 10.0.0.0/8 in both production VPC route tables with the Region transit gateway as the target.",
      "D": "Modify the transit gateway route tables from the production accounts to propagate routes dynamically between the production VPCs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153976-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 245,
    "question": "회사가 Application Load Balancer(ALB) 뒤의 Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. 인스턴스는 Amazon EC2 Auto Scaling 그룹의 일부입니다. 새로운 보안 표준을 준수하기 위해 회사가 모든 애플리케이션 액세스 데이터를 캡처해야 하며, 여기에는 서버 응답 코드, 요청 경로, 지연시간 및 클라이언트 IP 주소가 포함됩니다. 회사가 또한 성능 분석을 위해 캡처된 데이터를 쿼리해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "ALB 서브넷에서 VPC 흐름 로그를 활성화합니다. 로그를 Amazon S3 버킷에 저장합니다. Amazon Athena를 사용하여 S3 버킷의 로그를 쿼리합니다.",
      "B": "모든 EC2 탄력적 네트워크 인터페이스에서 Amazon VPC Traffic Mirroring을 구성합니다. 프라이빗 서브넷의 AWS Marketplace에서 타사 모니터링 어플라이언스를 배포합니다. Amazon Data Firehose를 사용하여 모든 미러된 트래픽을 모니터링 어플라이언스로 전송합니다. 모니터링 어플라이언스에서 로그를 직접 쿼리합니다.",
      "C": "EC2 인스턴스에서 Amazon CloudWatch 세부 모니터링을 구성합니다. 사용 가능한 모든 로그를 포함합니다. Amazon Data Firehose를 사용하여 수집된 모든 로그를 Amazon S3 버킷으로 전송합니다. S3 버킷에서 데이터를 직접 쿼리합니다.",
      "D": "ALB에서 액세스 로그를 활성화합니다. 로그를 Amazon S3 버킷에 저장합니다. Amazon Athena를 사용하여 S3 버킷의 로그를 쿼리합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ ALB 액세스 로그 — 응답 코드, 지연시간, 클라이언트 IP 포함\n▸ 응용계층 데이터 — VPC 흐름 로그는 미포함\n\n【정답 포인트】\n▸ 서버 응답 코드, 요청 경로, 지연시간 → ALB 액세스 로그에만 있음\n▸ 클라이언트 IP → ALB 로그에 기록\n▸ S3 저장 → 장기 보관 및 비용 효율\n▸ Athena 쿼리 → SQL로 분석 가능\n\n【오답 체크】\n(A) VPC 흐름 로그 → L3/L4 정보만 (응답 코드, 경로 미포함)\n(B) VPC Traffic Mirroring → 모니터링 어플라이언스 비용, 복잡\n(C) CloudWatch → 애플리케이션 메트릭 (ALB 액세스 로그 아님)\n\n【시험 포인트】\n▸ ALB 액세스 로그의 포함 정보\n▸ VPC 흐름 로그 vs ALB 액세스 로그 구분\n▸ 응용계층 분석 = ALB 액세스 로그",
    "en_q": "A company hosts an application on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are part of an Amazon EC2 Auto Scaling group. To comply with new security standards, the company must capture all application access data, including server response codes, request paths, latency, and client IP addresses. The company also needs to query the captured data for performance analysis. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Enable VPC flow logs on the ALB subnets. Store the logs to an Amazon S3 bucket. Query the logs in the S3 bucket by using Amazon Athena.",
      "B": "Configure Amazon VPC Traffic Mirroring on all EC2 elastic network interfaces. Deploy a third-party monitoring appliance from AWS Marketplace in a private subnet. Use Amazon Data Firehose to send all mirrored traffic to the monitoring appliance. Query the logs directly from the monitoring appliance.",
      "C": "Configure Amazon CloudWatch detailed monitoring on the EC2 instances Include all available logs. Use Amazon Data Firehose to send all the collected logs to an Amazon S3 bucket. Query the data directly from the S3 bucket.",
      "D": "Enable access logs on the ALB. Store the logs in an Amazon S3 bucket. Query the logs in the S3 bucket by using Amazon Athena."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153982-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 246,
    "question": "회사가 us-east-1 리전에 5개의 VPC를 가지고 있습니다. 회사가 us-east-1에서 내부 웹 애플리케이션을 호스팅합니다. 회사의 VPC 중 하나인 VPC-A가 외부 파트너의 AWS 환경에 연결해야 합니다. 파트너의 환경은 파트너가 회사의 웹 애플리케이션의 새로운 버전을 호스팅하는 같은 AWS 리전에 있습니다. 파트너가 VPC-B라는 VPC의 애플리케이션의 버전을 호스팅합니다. 회사가 VPC-A의 Amazon EC2 인스턴스가 VPC-B의 웹 애플리케이션에 연결해야 합니다. 네트워크 엔지니어가 파트너의 VPC-B와 회사의 VPC-A가 같은 IP 공간을 사용한다는 것을 알아챕니다. 네트워크 엔지니어가 EC2 인스턴스가 웹 애플리케이션에 연결할 수 있도록 하는 솔루션이 필요합니다. 솔루션이 회사 또는 파트너의 기존 환경에 부정적으로 영향을 미치면 안 됩니다. 네트워크 엔지니어가 이 요구사항을 충족하기 위해 취해야 할 단계의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "VPC-A에서 VPC-B로의 VPC 피어링 연결을 설정합니다.",
      "B": "파트너가 VPC-B에서 Network Load Balancer를 사용하는 VPC 엔드포인트 서비스를 생성하는지 확인합니다.",
      "C": "파트너가 공유한 VPC 엔드포인트 서비스를 사용하는 VPC-A에서 VPC 엔드포인트를 배포합니다.",
      "D": "새로운 라우팅 가능 VPC CIDR 블록을 보조 CIDR 블록으로 VPC-A와 VPC-B 모두에 배포합니다. VPC-A에 공개 NAT 게이트웨이를 배포합니다.",
      "E": "VPC-A와 VPC-B 간에 AWS Site-to-Site VPN 연결을 설정합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ 겹치는 IP 공간 — VPC 피어링 불가\n▸ VPC 엔드포인트 서비스 — IP 변환 불필요\n\n【정답 포인트】\n▸ B: 파트너가 NLB 기반 엔드포인트 서비스 제공 → 전용 인터페이스\n▸ C: VPC-A에서 엔드포인트 서비스 소비 → 겹치는 IP 우회\n▸ 엔드포인트 서비스의 이점: IP 주소 충돌 없이 접근\n\n【오답 체크】\n(A) VPC 피어링 → 같은 IP 범위 불가능\n(D) 보조 CIDR + NAT → 복잡, 기존 환경 변경\n(E) VPN → IP 충돌 해결 안 함\n\n【시험 포인트】\n▸ 겹치는 주소 공간의 해결책 = VPC 엔드포인트 서비스\n▸ NLB 기반 엔드포인트 = PrivateLink\n▸ 기존 환경 미영향 = VPC 엔드포인트 활용",
    "en_q": "A company has five VPCs in the us-east-1 Region. The company hosts an internal web application in us-east-1. One of the company's VPCs. named VPC-A, needs to connect to an external partner's AWS environment. The partner's environment is in the same AWS Region where the partner hosts a new version of the company's web application. The partner hosts its version of the application in a VPC named VPC-B. The company has Amazon EC2 instances in VPC-A that need to connect to the web application in VPC-B A network engineer notices that the partner's VPC-B and the company's VPC-A use the same IP space. The network engineer needs a solution to allow the EC2 instances to connect to the web application. The solution must not negatively affect the exiting environment of the company or the partner. Which combination of steps should the network engineer take meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Establish a VPC peering connection between VPC-A to VPC-B.",
      "B": "Ensure the partner creates a VPC endpoint service that uses a Network Load Balancer in VPC-B.",
      "C": "Deploy a VPC endpoint in VPC-A that uses a VPC endpoint service that is shared by the partner.",
      "D": "Deploy a new routable VPC CIDR block as a secondary CIDR block to both VPC-A and VPC-B. Deploy a public NAT gateway in VPC-A.",
      "E": "Establish an AWS Site-to-Site VPN connection between VPC-A and VPC-B."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153983-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 247,
    "question": "회사가 온프레미스 데이터 센터를 AWS Cloud에 연결하는 하이브리드 환경을 가지고 있습니다. 하이브리드 환경은 10 Gbps AWS Direct Connect 전용 연결을 사용합니다. Direct Connect 연결에는 여러 VPC에서 종료되는 여러 프라이빗 VIF가 있습니다. 규정을 준수하기 위해 회사가 기본 전송과 관계없이 모든 WAN 트래픽을 암호화해야 합니다. 회사가 회사의 대역폭 용량에 영향을 주지 않을 암호화 솔루션을 구현해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "공개 VIF를 생성합니다. 새로운 AWS Site-to-Site VPN 연결을 사용하여 새로운 공개 VIF를 사용하도록 구성합니다.",
      "B": "Direct Connect 연결의 포트에 MAC security(MACsec) 지원을 구성합니다. 암호화 모드를 must_encrypt로 변경합니다.",
      "C": "MAC security(MACsec)를 지원하는 새로운 Direct Connect 연결을 구성합니다. 기존 VIF를 새로운 Direct Connect 연결에 연결합니다.",
      "D": "공개 VIF를 생성합니다. Direct Connect 연결을 사용하는 새로운 프라이빗 IP VPN을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ MACsec — L2 선 암호화 (대역폭 손실 최소)\n▸ VPN — L3 기반 암호화 (오버헤드 증가)\n\n【정답 포인트】\n▸ MACsec은 Direct Connect 포트 수준 암호화\n▸ 대역폭 용량 유지 → VPN보다 효율적\n▸ 새로운 Direct Connect 연결 → MACsec 지원 필수\n▸ 기존 VIF를 새 연결로 연결 → 재구성 미니멀\n\n【오답 체크】\n(A) 공개 VIF + VPN → 인터넷 경유, 낮은 성능\n(B) 기존 포트에 MACsec → MACsec 미지원 연결은 지원 안 함\n(D) 프라이빗 IP VPN → VPN 오버헤드로 대역폭 감소\n\n【시험 포인트】\n▸ MACsec = 라인 레이트 암호화 (Direct Connect에 최적)\n▸ 대역폭 보존 → 암호화 오버헤드 없음\n▸ Direct Connect 보안 옵션 이해",
    "en_q": "A company has a hybrid environment that connects an on-premises data center to the AWS Cloud. The hybrid environment uses a 10 Gbps AWS Direct Connect dedicated connection. The Direct Connect connection has multiple private VIFs that terminate in multiple VPCs. To comply with regulations, the company must encrypt all WAN traffic, regardless of the underlying transport. The company needs to implement an encryption solution that will not affect the company's bandwidth capacity. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a public VIF. Configure a new AWS Site-to-Site VPN connection to use the new public VIF.",
      "B": "Configure MAC security (MACsec) support on the port of the existing Direct Connect connection. Change the encryption mode to must_encrypt.",
      "C": "Configure a new Direct Connect connection that supports MAC security (MACSec) Associate the existing VIFs to the new Direct Connect connection.",
      "D": "Create a public VIF. Configure a new private IP VPN that uses the Direct Connect connection."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153987-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 248,
    "question": "회사가 규정 준수를 위해 Nitro 기반 Amazon EC2 인스턴스의 트래픽을 캡처하고 로깅해야 합니다. 네트워크 팀은 VPC 트래픽 미러링을 활성화하고 Auto Scaling 그룹의 두 번째 EC2 인스턴스 세트로 트래픽을 보내는 솔루션을 준비했습니다. 네트워크 팀은 트래픽을 수신할 EC2 인스턴스 앞에 Network Load Balancer(NLB)를 추가했습니다. 그러나 솔루션은 NLB 뒤의 EC2 인스턴스로 미러링된 트래픽을 보내지 않습니다. NLB 엔드포인트를 사용하도록 트래픽 미러링을 구성하려면 어떻게 해야 합니까?",
    "options": {
      "A": "NLB를 트래픽 미러링의 소스로 선택합니다. UDP 리스너를 사용합니다.",
      "B": "NLB를 트래픽 미러링의 대상으로 선택합니다. TCP 리스너와 UDP 리스너를 사용합니다.",
      "C": "NLB를 트래픽 미러링의 대상으로 선택합니다. TCP 리스너를 사용합니다.",
      "D": "NLB를 트래픽 미러링의 대상으로 선택합니다. UDP 리스너를 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ VPC Traffic Mirroring — 네트워크 트래픽을 캡처하여 검사 엔드포인트로 전송하는 기능\n▸ Network Load Balancer — 레이어 4에서 작동하는 로드밸런서\n\n【정답 포인트】\n▸ 트래픽 미러링 대상으로 NLB 사용 가능 → NLB를 직접 선택하지 않고 NLB 뒤의 EC2 인스턴스를 대상으로 함\n▸ UDP 리스너 필요 → VPC Traffic Mirroring은 UDP 포트 4789(VXLAN)를 사용하여 캡슐화된 트래픽 전달\n▸ NLB는 트래픽 미러링의 대상 인터페이스로 작동하려면 UDP 리스너가 필요\n\n【오답 체크】\n(A) NLB를 소스로 선택할 수 없음. 미러링은 EC2 인스턴스나 ENI에서 시작\n(B) TCP와 UDP 모두 필요 없음. UDP만 필요\n(C) TCP 리스너만으로는 부족. 트래픽 미러링은 UDP VXLAN 캡슐화 사용\n\n【시험 포인트】",
    "en_q": "A company needs to capture and log traffic for Nitro-based Amazon EC2 instances to comply with regulations. The company's network team has prepared a solution that enables VPC traffic mirroring and sends traffic to a second set of EC2 instances in an Auto Scaling group. The network team has added a Network Load Balancer (NLB) in front of the EC2 instances the traffic will be sent to. However, the solution does not send any mirrored traffic to the EC2 instances that are behind the NLB. How should the network team configure traffic mirroring to use the NLB endpoint?",
    "en_opts": {
      "A": "Select the NLB as a source for traffic mirroring. Use a UDP listener.",
      "B": "Select the NLB as a target for traffic mirroring. Use a TCP listener and a UDP listener.",
      "C": "Select the NLB as a target for traffic mirroring. Use a TCP listener.",
      "D": "Select the NLB as a target for traffic mirroring. Use a UDP listener."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153988-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 249,
    "question": "미국 기반 회사가 비즈니스를 유럽으로 확장하고 있습니다. 네트워크 엔지니어가 eu-west-1 리전에 새 허브 및 스포크 아키텍처를 설정하여 회사의 네트워크 인프라를 확장해야 합니다. 네트워크 엔지니어는 Transit Gateway 피어링 연결을 사용하여 eu-west-1의 새 리소스를 us-east-1 리전의 기존 환경에 연결합니다. 각 AWS 리전의 허브 및 스포크 아키텍처에는 각 리전의 트래픽 검사를 중앙화하기 위해 AWS Network Firewall을 사용하는 검사 VPC가 포함됩니다. 비용을 절감하기 위해 네트워크 엔지니어는 트래픽이 발생하는 리전의 검사 VPC를 사용하여 리전 간 트래픽을 검사하기로 결정합니다. 네트워크 엔지니어는 각 리전의 Transit Gateway 라우트 테이블을 적절히 구성합니다. 네트워크 엔지니어가 새 아키텍처를 테스트할 때 각 리전 내 통신은 예상대로 작동합니다. 그러나 네트워크 엔지니어는 리전 간 통신이 작동하지 않음을 발견합니다. 네트워크 엔지니어는 리전 간 통신 문제를 해결해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Transit Gateway 피어링 연결에서 Open Shortest Path First(OSPF) 라우팅을 구성하여 각 리전의 VPC CIDR 블록을 원격 피어에 전파합니다.",
      "B": "AWS Resource Access Manager(AWS RAM)를 사용하여 Transit Gateway 간에 액세스를 공유합니다. 모든 사람과 공유 허용 설정을 활성화합니다.",
      "C": "검사 VPC에서 비대칭 라우팅을 방지하여 요청과 응답이 동일한 검사 VPC에서 검사되도록 합니다.",
      "D": "검사 VPC의 Transit Gateway 연결에서 어플라이언스 모드를 활성화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Appliance Mode — Transit Gateway의 기능으로, 트래픽이 항상 같은 경로로 돌아오도록 강제하여 대칭 라우팅 보장\n▸ Transit Gateway Peering — 여러 리전의 TGW 간 연결\n\n【정답 포인트】\n▸ 리전 간 통신 실패 원인 → 트래픽이 origin region의 검사 VPC를 통과하지만, 응답이 destination region의 검사 VPC를 통과하려고 시도 → 비대칭 라우팅 발생\n▸ Appliance Mode 활성화 → 검사 VPC의 ENI에서 모든 트래픽이 동일 경로로 반환되도록 강제 → 요청과 응답이 동일한 검사 VPC를 통과하도록 보장\n\n【오답 체크】\n(A) OSPF는 라우팅 문제 해결 못함. Transit Gateway Peering이 이미 경로 전파\n(B) RAM 공유는 통신 대칭 문제 해결 못함\n(C) 설명은 맞지만, 실제 구현은 Appliance Mode를 통함\n\n【시험 포인트】",
    "en_q": "A US-based company is expanding its business to Europe. A network engineer needs to extend the company's network infrastructure by setting up a new hub and spoke architecture in the eu-west-1 Region. The network engineer uses a transit gateway peering connection to connect the new resources in eu-west-1 to an existing environment in the us-east-1 Region. The hub and spoke architecture in each AWS Region includes an inspection VPC that uses AWS Network Firewall to centralize traffic inspection for each Region. To reduce costs, the network engineer decides to inspect inter-Region traffic by using the inspection VPC in the Region that originates the traffic. The network engineer configures the transit gateway route tables accordingly for each Region. When the network engineer tests the new architecture, communication within each Region works as expected. However, the network engineer finds that inter-Region communication is not working. The network engineer must resolve the inter-Region communication issue. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Configure Open Shortest Path First (OSPF) routing on the transit gateway peering connection to propagate the VPC CIDR blocks from each Region to the remote peer.",
      "B": "Use AWS Resource Access Manager (AWS RAM) to share access between the transit gateways. Enable the Allow sharing with anyone setting.",
      "C": "Prevent asymmetric routing in the inspection VPCs by ensuring that both requests and responses are inspected by the same inspection VPC",
      "D": "Enable Appliance mode on both the transit gateway attachments for the inspection VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154058-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 250,
    "question": "회사가 두 개의 VPC에서 애플리케이션을 실행합니다. 하나의 VPC는 us-east-1 리전에 있고, 두 번째 VPC는 us-west-1 리전에 있습니다. 회사는 두 VPC 간의 연결성을 구축해야 합니다. 또한 회사는 VPC를 온프레미스 데이터 센터에서 실행되는 애플리케이션에 연결해야 합니다. VPC 간 현재 트래픽 요구 사항은 월 50TB입니다. 회사는 VPC 간 트래픽 볼륨이 증가할 것으로 예상합니다. VPC에서 온프레미스 데이터 센터로의 트래픽 요구 사항은 월 10TB입니다. 회사는 VPC와 데이터 센터 간 트래픽이 일정하게 유지될 것으로 예상합니다. 이 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 리전에서 Transit Gateway를 생성합니다. 온프레미스 방화벽에서 Transit Gateway로 VPN 연결을 생성합니다. Transit Gateway 간 피어링 연결을 생성합니다.",
      "B": "각 리전에서 Virtual Private Gateway를 생성합니다. 온프레미스 방화벽에서 Virtual Private Gateway로 VPN 연결을 생성합니다. 온프레미스 방화벽이 두 VPC 간 트래픽을 라우팅하도록 구성합니다.",
      "C": "각 리전에서 Virtual Private Gateway를 생성합니다. 온프레미스 방화벽에서 Virtual Private Gateway로 VPN 연결을 생성합니다. 두 VPC 간 VPC 피어링 연결을 생성합니다.",
      "D": "각 리전에서 Virtual Private Gateway를 생성합니다. 온프레미스 방화벽에서 Virtual Private Gateway로 VPN 연결을 생성합니다. Virtual Private Gateway 간 VPN 연결을 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ VPC Peering — 두 VPC 간의 직접 네트워크 연결, 데이터 전송 비용 없음\n▸ Virtual Private Gateway — VPN 연결용 AWS 끝점\n\n【정답 포인트】\n▸ 비용 분석 필수 → VPC 간 트래픽(50TB/월) 매우 많음 → VPC Peering 사용 시 데이터 전송 비용 약 4배 절감\n▸ VPN을 통한 리전 간 통신 비용이 높음 → 온프레미스 방화벽이 라우터 역할 → VPC Peering으로 직접 연결 권장\n▸ 온프레미스 연결(10TB/월)은 VPN으로 충분\n\n【오답 체크】\n(A) Transit Gateway Peering도 비용 발생. VPC Peering보다 비쌈\n(B) 온프레미스 방화벽을 라우터로 사용하면 모든 VPC 간 트래픽이 VPN 통과 → 비용 증가\n(D) VPG 간 VPN은 불가능. VPC Peering으로 대체 필요\n\n【시험 포인트】",
    "en_q": "A company runs applications in two VPCs that are in separate AWS Regions. One VPC is in the us-east-1 Region. The second VPC is in the us-west-1 Region. The company needs to establish connectivity between the two VPCs. The company also needs to connect the VPCs to applications that run in an on-premises data center. The current traffic requirement between the VPCs is 50 TB per month. The company expects traffic volume between the VPCs to increase. The traffic requirement from the VPCs to the on-premises data center is 10 TB per month. The company expects the traffic between the VPCs and the data center to remain constant. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Create a transit gateway in each Region. Create VPN connections from the transit gateways to the on-premises firewall. Create a peering connection between the transit gateways.",
      "B": "Create a virtual private gateway in each Region. Create VPN connections from the on-premises firewall to the virtual private gateways. Configure the on-premises firewall to route the traffic between the two VPCs.",
      "C": "Create a virtual private gateway in each Region. Create VPN connections from the on-premises firewall to the virtual private gateways. Create a VPC peering connection between the two VPCs.",
      "D": "Create a virtual private gateway in each Region. Create VPN connections from the on-premises firewall to the virtual private gateways. Create a VPN connection between the virtual private gateways."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154057-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 251,
    "question": "회사가 여러 VPC에서 워크로드를 실행합니다. 회사는 VPC-A라는 VPC의 워크로드에 온프레미스 데이터 센터에서 안전하게 액세스해야 합니다. 네트워크 엔지니어는 Transit Gateway에 AWS Site-to-Site VPN 연결을 설정합니다. 네트워크 엔지니어는 연결에 대한 동적 라우팅을 구성하고 통신이 제대로 작동합니다. 최근 VPC-A의 소유자가 VPC에 다른 CIDR 범위를 추가했습니다. VPC-A 소유자가 추가 CIDR 범위를 사용하는 워크로드를 생성했습니다. 회사의 온프레미스 네트워크는 새 워크로드에 도달할 수 없습니다. 네트워크 엔지니어는 네트워크 연결 문제를 해결하고 향후 VPC에 추가 VPC CIDR 범위가 추가되는 경우 연결성이 영향을 받지 않도록 해야 합니다. 이 요구 사항을 가장 높은 운영 효율성으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "VPC-A에 대한 경로 전파를 VPN 연결 라우트 테이블에 구성합니다.",
      "B": "VPN 연결 라우트 테이블을 수동으로 업데이트하여 새 CIDR 범위를 포함합니다.",
      "C": "VPC-A CIDR 범위에 대한 업데이트와 일치하는 규칙이 있을 때 AWS Lambda 함수를 호출하도록 Amazon EventBridge 규칙을 구성합니다. Lambda 함수가 VPN 연결 라우트 테이블을 업데이트하도록 구성합니다.",
      "D": "VPC-A CIDR 범위에 대한 업데이트가 있을 때 AWS Lambda 함수를 호출하도록 Amazon CloudWatch 알람을 구성합니다. Lambda 함수가 VPN 연결 라우트 테이블을 업데이트하도록 구성합니다. VPN 터널을 다시 시작합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Route Propagation — VPC의 CIDR 범위를 자동으로 라우팅 테이블에 전파하는 기능\n▸ BGP — 동적 라우팅 프로토콜\n▸ Transit Gateway — 중앙 라우팅 허브\n\n【정답 포인트】\n▸ 동적 라우팅이 이미 구성됨 → BGP가 VPN 연결에서 활성화됨\n▸ Route Propagation 활성화 → Transit Gateway는 자동으로 VPC의 CIDR 범위 변경을 감지하고 라우트 전파\n▸ 향후 유지보수 불필요 → 운영 효율성 최고\n\n【오답 체크】\n(B) 수동 업데이트는 매번 필요. 운영 효율성 낮음\n(C)\n(D) EventBridge/CloudWatch 및 Lambda로 자동화하지만, 복잡성 증가. Route Propagation이 더 간단하고 효율적\n\n【시험 포인트】",
    "en_q": "A company runs workloads in multiple VPCs. The company needs to securely access a workload in one of the VPCs, named VPC-A, from an on-premises data center. A network engineer sets up an AWS Site-to-Site VPN connection to a transit gateway. The network engineer configures dynamic routing for the connection, and communication works properly. Recently, the owner of VPC-A added another CIDR range to the VPC. The VPC-A owner created workloads that use the additional CIDR range. The company's on-premises network is unable to reach the new workloads. The network engineer needs to resolve the network connectivity issue and ensure that connectivity will not be affected if additional VPC CIDR ranges are added to the VPC in the future. Which solution will meet these requirements with the MOST operational efficiency?",
    "en_opts": {
      "A": "Configure route propagation for VPC-A to the VPN attachment route table.",
      "B": "Manually update the VPN attachment route table to include the new CIDR range.",
      "C": "Configure an Amazon EventBridge rule to invoke an AWS Lambda function when the rule to matches an update to the VPC-A CIDR range. Configure the Lambda function to update the VPN attachment route table.",
      "D": "Configure an Amazon CloudWatch alarm to invoke an AWS Lambda function when there is an update to the VPC-A CIDR range. Configure the Lambda function to update the VPN attachment route table. Restart the VPN tunnels."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154059-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 252,
    "question": "회사가 인터넷 VPN 연결을 전용 AWS Direct Connect 연결로 마이그레이션하고 있습니다. 회사는 모든 네트워크 통신이 전송 중에 암호화되도록 Direct Connect 연결을 설정해야 합니다. 이 요구 사항을 충족하는 단계의 조합은 무엇입니까? (3가지를 선택하세요)",
    "options": {
      "A": "MACsec 포트를 요청하면서 새 Direct Connect 연결을 생성합니다.",
      "B": "MACsec Connectivity Association Key Name(CKN)과 Connectivity Association Key(CAK) 쌍을 생성합니다. 각 새 연결과 쌍을 연결합니다.",
      "C": "온프레미스 라우터를 MACsec 및 공유 Connectivity Association Key Name(CKN)과 Connectivity Association Key(CAK) 쌍을 사용하도록 업데이트합니다.",
      "D": "IPsec 연결을 위한 공유 키를 생성합니다.",
      "E": "새 Direct Connect 게이트웨이를 구성합니다. 공유 키를 새 Direct Connect 게이트웨이와 연결합니다.",
      "F": "온프레미스 라우터에 IPsec을 설정합니다. 공유 키를 IPsec 구성과 연결합니다."
    },
    "answer": "ABC",
    "explanation": "【핵심 용어】\n▸ MACsec — Media Access Control Security, Direct Connect의 계층 2 암호화 기술\n▸ CKN/CAK — MACsec 인증서 키 쌍\n\n【정답 포인트】\n▸ Direct Connect 자체 암호화 → MACsec 포트를 요청하여 물리적 포트 레벨에서 암호화 활성화\n(A)\n▸ CKN/CAK 생성 및 관련 → 각 연결에 고유의 키 쌍 할당으로 암호화 설정\n(B)\n▸ 온프레미스 라우터 구성 → 라우터도 동일한 MACsec 및 CKN/CAK 쌍으로 구성하여 양쪽 암호화 일치\n\n【오답 체크】\n(D)\n(E) (F) IPsec은 Direct Connect의 표준 암호화가 아님. MACsec이 권장됨. IPsec은 VPN용이고, Direct Connect는 MACsec으로 암호화\n\n【시험 포인트】",
    "en_q": "A company is migrating its internet VPN connections to dedicated AWS Direct Connect connections. The company needs to set up the Direct Connect connections so that all network communications are encrypted in transit. Which combination of steps will meet this requirement? (Choose three.)",
    "en_opts": {
      "A": "Create new Direct Connect connections while requesting MACsec ports.",
      "B": "Create a MACsec Connectivity Association Key Name (CKN) and Connectivity Association Key (CAK) pair. Associate the pair with each new connection.",
      "C": "Update the on-premises routers to use MACsec and the shared Connectivity Association Key Name (CKN) and Connectivity Association Key (CAK) pair.",
      "D": "Create a shared key for an IPsec connection.",
      "E": "Configure a new Direct Connect gateway. Associate the shared key with the new Direct Connect gateway.",
      "F": "Set up IPsec on the on-premises router. Associate the shared key with the IPsec configuration."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154681-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 253,
    "question": "회사에는 VPC 피어링으로 연결된 애플리케이션 VPC와 네트워킹 VPC가 있습니다. 네트워킹 VPC에는 Network Load Balancer(NLB)가 포함됩니다. 애플리케이션 VPC에는 애플리케이션을 실행하는 Amazon EC2 인스턴스가 포함됩니다. EC2 인스턴스는 네트워킹 VPC의 NLB와 관련된 대상 그룹의 일부입니다. 회사가 세 번째 VPC를 구성하고 네트워킹 VPC에 피어링합니다. 새 VPC에는 기존 애플리케이션의 새 버전이 포함됩니다. 새 버전의 애플리케이션은 애플리케이션 서브넷의 새 EC2 인스턴스에서 실행됩니다. 새 버전의 애플리케이션은 원래 버전과 다른 가용 영역에서 실행됩니다. 회사는 NLB와 새 버전의 애플리케이션 간의 연결성을 구축해야 합니다. 이 요구 사항을 충족하는 단계의 조합은 무엇입니까? (3가지를 선택하세요)",
    "options": {
      "A": "인스턴스 ID를 사용하여 NLB에 새 애플리케이션 EC2 인스턴스를 등록합니다.",
      "B": "인스턴스 IP 주소를 사용하여 NLB에 새 애플리케이션 EC2 인스턴스를 등록합니다.",
      "C": "새 애플리케이션 EC2 인스턴스가 실행되는 가용 영역에서 NLB를 구성합니다.",
      "D": "NLB에서 영역 이동을 사용하도록 구성합니다.",
      "E": "새 VPC의 애플리케이션 서브넷에 대한 네트워크 ACL을 구성하여 아웃바운드 연결을 허용합니다.",
      "F": "새 VPC의 애플리케이션 서브넷에 대한 네트워크 ACL을 구성하여 인바운드 및 아웃바운드 연결을 허용합니다."
    },
    "answer": "BCF",
    "explanation": "【핵심 용어】\n▸ NLB Target — IP 또는 인스턴스 ID로 등록 가능\n▸ VPC Peering — 다른 VPC의 인스턴스를 대상으로 사용 시 IP 기반 등록 필요\n▸ Network ACL — 서브넷 수준의 상태 비저장 방화벽\n\n【정답 포인트】\n▸ VPC Peering을 통한 등록 → IP 주소 기반 등록 필수 (인스턴스 ID는 같은 VPC 내에서만 작동)\n(B)\n▸ NLB 가용 영역 설정 → 새 애플리케이션이 있는 AZ에 NLB 활성화 필요\n(C)\n▸ Network ACL 규칙 → 인바운드(응답) 및 아웃바운드(요청) 모두 허용 필요 (F)\n\n【오답 체크】\n(A) 인스턴스 ID는 VPC Peering 대상으로 작동 안 함\n(D) Zonal Shift는 이 시나리오에 불필요. AZ 활성화가 필요\n(E) 아웃바운드만으로는 부족. 인바운드도 필요\n\n【시험 포인트】",
    "en_q": "A company has an application VPC and a networking VPC that are connected through VPC peering. The networking VPC contains a Network Load Balancer (NLB). The application VPC contains Amazon EC2 instances that run an application. The EC2 instances are part of a target group that is associated with the NLB in the networking VPC. The company configures a third VPC and peers it to the networking VPC. The new VPC contains a new version of the existing application. The new version of the application runs on new EC2 instances in an application subnet. The new version of the application runs in a different Availability Zone than that original version of the application. The company needs to establish connectivity between the NLB and the new version of the application. Which combination of steps will meet this requirement? (Choose three.)",
    "en_opts": {
      "A": "Register the new application EC2 instances with the NLB by using the instance IDs.",
      "B": "Register the new application EC2 instances with the NLB by using instance IP addresses.",
      "C": "Configure the NLB in the Availability Zone where the new application EC2 instances run.",
      "D": "Configure the NLB to use zonal shift.",
      "E": "Configure the network ACL for the application subnet in the new VPC to allow outbound connections.",
      "F": "Configure the network ACL for the application subnet in the new VPC to allow inbound connections and outbound connections."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154062-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 254,
    "question": "회사는 AWS Site-to-Site VPN 연결을 사용하여 회사의 온프레미스 위치와 단일 VPC 간의 트래픽을 암호화합니다. Site-to-Site VPN 연결은 공개 VIF가 있는 두 개의 1Gbps AWS Direct Connect 연결을 사용합니다. 회사는 같은 AWS 리전에 15개의 추가 VPC를 추가할 계획입니다. 회사는 온프레미스 위치와 새 VPC 간의 각 연결에 대해 Site-to-Site VPN 연결이 현재 제공하는 동일한 수준의 암호화를 유지해야 합니다. 새 연결은 공개 IP 주소를 사용하면 안 됩니다. Site-to-Site VPN 연결의 대역폭은 현재 프로비저닝된 속도 미만으로 유지됩니다. 최소 운영 오버헤드로 이 요구 사항을 충족하는 단계의 조합은 무엇입니까? (3가지를 선택하세요)",
    "options": {
      "A": "Transit Gateway 및 Direct Connect Gateway를 생성합니다. Transit Gateway를 Direct Connect Gateway와 연결합니다. 모든 새 VPC를 Transit Gateway에 연결합니다.",
      "B": "각 새 VPC에 대해 Direct Connect Gateway에 새 Direct Connect 프라이빗 VIF를 생성합니다. 모든 VPC를 Direct Connect Gateway와 연결합니다.",
      "C": "Transit Gateway에 프라이빗 IP CIDR 블록을 할당합니다.",
      "D": "Transit Gateway에 공개 IP CIDR 블록을 할당합니다.",
      "E": "Direct Connect Gateway에 Transit VIF를 생성합니다. Site-to-Site VPN 프라이빗 IP VPN 연결을 생성합니다.",
      "F": "공개 VIF를 생성합니다. Site-to-Site VPN 공개 IP VPN 연결을 생성합니다."
    },
    "answer": "ACE",
    "explanation": "【핵심 용어】\n▸ Transit Gateway — 여러 VPC를 중앙으로 연결\n▸ Direct Connect Gateway — 여러 리전의 DX 연결을 중앙화\n▸ Private VIF — 비공개 IP 사용\n▸ Transit VIF — Transit Gateway 연결용\n\n【정답 포인트】\n▸ 중앙 집중식 아키텍처 → Transit Gateway와 DX Gateway 조합으로 15개 VPC를 효율적으로 관리\n(A)\n▸ 프라이빗 IP CIDR 블록 → Transit Gateway 자체의 프라이빗 IP 주소 공간 필요\n(C)\n▸ Transit VIF 생성 → DX Gateway와 Transit Gateway 간의 연결\n(E)\n▸ 프라이빗 IP VPN → 공개 IP 피함\n\n【오답 체크】\n(B) 각 VPC마다 VIF를 생성하면 운영 오버헤드 증가\n(D) 공개 IP는 요구사항에 위배 (F) 공개 VIF와 공개 IP VPN은 금지됨\n\n【시험 포인트】",
    "en_q": "A company uses AWS Site-to-Site VPN connections to encrypt traffic between the company's on-premises location and a single VPC. The Site-to-Site VPN connections use two 1 Gbps AWS Direct Connect connections with public VIFs. The company plans to add 15 additional VPCs in the same AWS Region. The company must maintain the same level of encryption that the Site-to-Site VPN connections currently provide for each connection between the on-premises location and the new VPCs. The new connections must not use public IP addresses. The bandwidth of the Site-to-Site VPN connections will remain less than the current provisioned speed. Which combination of steps will meet these requirements with LEAST operational overhead? (Choose three.)",
    "en_opts": {
      "A": "Create a transit gateway and a Direct Connect gateway. Associate the transit gateway with the Direct Connect gateway. Attach all the new VPCs to the transit gateway.",
      "B": "For each new VPC, create a new Direct Connect private VIF to a Direct Connect gateway. Associate all VPCs with the Direct Connect gateway.",
      "C": "Assign a private IP CIDR block to the transit gateway.",
      "D": "Assign a public IP CIDR block to the transit gateway.",
      "E": "Create a transit VIF to the Direct Connect gateway. Create a Site-to-Site VPN private IP VPN connection.",
      "F": "Create a public VICreate a Site-to-Site VPN public IP VPN connection."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154064-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 255,
    "question": "회사는 온프레미스 및 VPC의 Amazon EC2 인스턴스에서 애플리케이션 서버를 호스팅합니다. 애플리케이션 서버는 공개 인터넷을 통해 Amazon S3 버킷에 호스팅된 데이터에 액세스합니다. VPC의 EC2 인스턴스는 온프레미스 애플리케이션 서버와의 연결을 위해 AWS Site-to-Site VPN을 사용합니다. 새로운 회사 규정에 따르면 애플리케이션 서버와 S3 버킷 간의 모든 트래픽은 프라이빗으로 유지되어야 하며 공개 IP 주소를 사용하지 않아야 합니다. 이 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 게이트웨이 엔드포인트를 구성합니다. 엔드포인트에 대한 적절한 경로를 사용하여 라우트 테이블을 수정합니다. EC2 인스턴스에서 게이트웨이 엔드포인트를 통해 S3 버킷에 액세스합니다.",
      "B": "S3 인터페이스 엔드포인트를 구성합니다. 온프레미스 서버와 EC2 인스턴스를 업데이트하여 인터페이스 엔드포인트 DNS 이름을 사용하여 S3 버킷에 액세스합니다.",
      "C": "S3 인터페이스 엔드포인트를 구성합니다. 온프레미스 서버를 업데이트하여 인터페이스 엔드포인트 DNS 이름을 사용하여 S3 버킷에 액세스합니다. S3 게이트웨이 엔드포인트를 구성합니다. EC2 인스턴스가 게이트웨이 엔드포인트를 사용하도록 라우트 테이블을 수정합니다.",
      "D": "S3 게이트웨이 엔드포인트를 구성합니다. 엔드포인트에 대한 적절한 경로를 사용하여 라우트 테이블을 수정합니다. S3 버킷 정책을 사용하여 게이트웨이 엔드포인트에 대한 액세스를 제한합니다. VPC의 Network Load Balancer 뒤에 프록시 서버 플릿을 구성하여 온프레미스 서버가 S3 버킷에 액세스할 수 있도록 합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Gateway Endpoint — 라우트 테이블 기반, VPC 내 EC2용, 비용 무료\n▸ S3 Interface Endpoint — ENI 기반, VPC 외부 접근 가능, 비용 발생\n\n【정답 포인트】\n▸ 온프레미스 서버 접근 → VPN을 통해 S3에 접근. Gateway Endpoint는 VPC 내만 지원 → Interface Endpoint 필요\n(B)\n▸ EC2 인스턴스 접근 → Gateway Endpoint가 비용 효율적이고 성능 우수\n(A)\n▸ 조합 활용 → Interface Endpoint(온프레미스용) + Gateway Endpoint(EC2용)로 가장 비용 효율적\n\n【오답 체크】\n(A) Gateway Endpoint만으로는 온프레미스 서버 불가능. VPN 트래픽은 Gateway Endpoint를 통과하지 않음\n(B) Interface Endpoint만 사용하면 비용이 높음\n(D) 프록시 서버 플릿은 비용과 복잡성 증가\n\n【시험 포인트】",
    "en_q": "A company hosts application servers on premises and on Amazon EC2 instances in a VPC. The application servers access data that is hosted in an Amazon S3 bucket through the public internet. The EC2 instances in the VPC use an AWS Site-to-Site VPN for connectivity with the on-premises application servers. New company regulations state that all traffic between the application servers and the S3 bucket must remain private and must not use public IP addresses. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Configure an S3 gateway endpoint Modify the route table with the appropriate route for the endpoint. Access the S3 bucket through the gateway endpoint from the EC2 instances.",
      "B": "Configure an S3 interface endpoint. Update the on-premises servers and EC2 instances to use the interface endpoint DNS name to access the S3 bucket.",
      "C": "Configure an S3 interface endpoint. Update the on-premises servers to use the interface endpoint DNS name to access the S3 bucket. Configure an S3 gateway endpoint. Modify the route table so that the EC2 instances use the gateway endpoint.",
      "D": "Configure an S3 gateway endpoint. Modify the route table with the appropriate route for the endpoint. Use an S3 bucket policy to restrict access to the gateway endpoint. Configure a proxy server fleet behind a Network Load Balancer in the VPC so that the on-premises servers can access the S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154055-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 256,
    "question": "회사는 AWS Network Firewall을 사용하여 같은 AWS 계정의 여러 VPC에 대한 아웃바운드 트래픽을 보호합니다. 각 VPC에는 회사의 애플리케이션을 호스팅하는 Amazon EC2 인스턴스가 포함됩니다. 각 EC2 인스턴스는 호스트하는 애플리케이션의 이름으로 태그됩니다. EC2 인스턴스는 Auto Scaling 그룹에 있습니다. Network Firewall 상태 저장 규칙 그룹은 Auto Scaling 그룹이 EC2 인스턴스를 시작하고 종료할 때도 최신 상태로 유지되어야 합니다. 최소 구현 및 관리 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 애플리케이션에 대한 네트워크 ACL을 생성합니다. 상태 저장 규칙 그룹에서 네트워크 ACL을 참조합니다.",
      "B": "각 애플리케이션에 대한 접두사 목록을 생성합니다. 상태 저장 규칙 그룹에서 접두사 목록을 참조합니다.",
      "C": "각 애플리케이션 이름에 대한 EC2 인스턴스 태그를 쿼리한 다음 상태 저장 규칙 그룹을 각 인스턴스의 IP 주소로 업데이트하는 AWS Lambda 함수를 생성합니다.",
      "D": "각 애플리케이션 이름에 대한 리소스 그룹을 생성합니다. 상태 저장 규칙 그룹에서 리소스 그룹에 대한 Amazon Resource Name(ARN)을 참조합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Resource Group — 태그 기반으로 AWS 리소스를 그룹화\n▸ Network Firewall Stateful Rule — 지속적인 상태를 유지하는 방화벽 규칙\n▸ Auto Scaling — 동적 인스턴스 생성/제거\n\n【정답 포인트】\n▸ Resource Group ARN 참조 → Network Firewall 규칙이 동적으로 Resource Group의 멤버를 인식\n▸ Auto Scaling 자동 추적 → EC2 인스턴스가 시작/종료될 때 태그에 따라 Resource Group 자동 업데이트\n▸ 최소 관리 노력 → Lambda 함수나 manual update 불필요. 완전 자동화\n\n【오답 체크】\n(A) Network ACL은 동적 멤버십 지원 안 함\n(B) Prefix List도 수동 업데이트 필요\n(C) Lambda 함수는 지속적 관리 필요. 이벤트 기반 실행도 복잡\n\n【시험 포인트】",
    "en_q": "A company uses AWS Network Firewall to protect outgoing traffic for multiple VPCs that are in the same AWS account. Each VPC contains Amazon EC2 instances that host the company's applications. Each EC2 instance is tagged with the name of the application it hosts. The EC2 instances are in Auto Scaling groups. A Network Firewall stateful rule group must remain up-to-date, even when an Auto Scaling group launches and terminates EC2 instances. Which solution will meet this requirement with the LEAST implementation and administrative effort?",
    "en_opts": {
      "A": "Create a network ACL for each application. Reference the network ACL in the stateful rule group.",
      "B": "Create a prefix list for each application. Reference the prefix list in the stateful rule group.",
      "C": "Create an AWS Lambda function that queries the EC2 instance tags for each application name and then updates the stateful rule group with the IP address of each instance.",
      "D": "Create a resource group for each application name. Reference the Amazon Resource Name (ARN) for the resource groups in the stateful rule group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154065-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 257,
    "question": "회사는 여러 AWS Site-to-Site VPN 연결을 온프레미스 환경과 여러 VPC 간에 사용합니다. Site-to-Site VPN 연결은 Virtual Private Gateway를 사용하고 IPv4 주소로 구성됩니다. 회사는 VPC에서 여러 내부 애플리케이션을 호스팅합니다. 애플리케이션 사용자가 애플리케이션의 성능이 저하되었다고 보고했습니다. 네트워크 엔지니어가 VPN 연결이 사용하는 네트워크 경로의 과도한 지연 시간을 발견했습니다. 네트워크 엔지니어는 과도한 지연 시간을 해결해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Global Accelerator를 사용하여 기존 Site-to-Site VPN 연결에 accelerator를 배포합니다.",
      "B": "Transit Gateway 및 새로운 가속화된 Site-to-Site VPN 연결을 배포합니다.",
      "C": "기존 Site-to-Site VPN 연결을 IPv6을 사용하는 새 Site-to-Site VPN 연결로 바꿉니다.",
      "D": "기존 Site-to-Site VPN 연결을 AWS PrivateLink 연결로 바꿉니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Accelerated VPN — Transit Gateway 기반의 성능 최적화 VPN\n▸ Global Accelerator — 전역 네트워크 최적화 (하지만 VPN에는 미지원)\n▸ Transit Gateway — 중앙 라우팅 허브\n\n【정답 포인트】\n▸ Virtual Private Gateway 제약 → 성능 최적화 부족. Legacy 솔루션\n▸ Accelerated VPN 필요 → Transit Gateway 기반으로 AWS의 글로벌 네트워크 인프라 활용 → 지연 시간 대폭 감소\n▸ 성능 개선 최고 → Accelerated VPN이 목표 달성\n\n【오답 체크】\n(A) Global Accelerator는 VPN 최적화 지원 안 함\n(C) IPv6으로 변경해도 성능 개선 안 됨\n(D) PrivateLink는 VPN 대체 불가능\n\n【시험 포인트】",
    "en_q": "A company has multiple AWS Site-to-Site VPN connections between an on-premises environment and multiple VPCs. The Site-to-Site VPN connections use virtual private gateways and are configured with IPv4 addresses. The company hosts several internal applications in the VPCs. Application users have reported that the applications are performing slowly. A network engineer notices excessive latency in the network path that the VPN connections use. The network engineer needs to resolve the excessive latency. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Use AWS Global Accelerator to deploy an accelerator on the existing Site-to-Site VPN connections.",
      "B": "Deploy a transit gateway and a new accelerated Site-to-Site VPN connection.",
      "C": "Replace the existing Site-to-Site VPN connections with new Site-to-Site VPN connections that use IPv6.",
      "D": "Replace the existing Site-to-Site VPN connections with AWS PrivateLink connections."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154066-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 258,
    "question": "회사는 단일 AWS 계정의 Transit Gateway를 보유하고 있습니다. 회사는 Transit Gateway에 대한 흐름 로그를 Amazon CloudWatch Logs 로그 그룹으로 보냅니다. 회사는 로그를 분석하기 위해 AWS Lambda 함수를 생성했습니다. Lambda 함수는 VPC가 Transit Gateway에서 삭제된 트래픽을 생성할 때 Amazon Simple Notification Service(Amazon SNS) 주제에 알림을 보냅니다. 각 알림에는 계정 ID, VPC ID 및 삭제된 패킷의 총 수량이 포함됩니다. 회사는 SNS 주제를 구독할 새 Lambda 함수를 원합니다. 새 Lambda 함수는 각 알림에서 식별된 트래픽이 트래픽을 생성하는 VPC에서 Transit Gateway 연결 서브넷의 네트워크 ACL에 적용하여 VPC를 떠나지 않도록 자동으로 방지해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기존 Lambda 함수를 구성하여 삭제된 트래픽의 대상 IP 주소를 각 SNS 알림에 추가합니다. 새 Lambda 함수를 구성하여 SNS 알림의 대상 IP 주소를 사용하여 네트워크 ACL에 아웃바운드 규칙을 생성합니다.",
      "B": "기존 Lambda 함수를 구성하여 삭제된 트래픽의 소스 IP 주소를 각 SNS 알림에 추가합니다. 새 Lambda 함수를 구성하여 SNS 알림의 소스 IP 주소를 사용하여 네트워크 ACL에 인바운드 규칙을 생성합니다.",
      "C": "기존 Lambda 함수를 구성하여 삭제된 트래픽의 소스 IP 주소를 각 SNS 알림에 추가합니다. 새 Lambda 함수를 구성하여 SNS 알림의 소스 IP 주소를 사용하여 네트워크 ACL에 아웃바운드 규칙을 생성합니다.",
      "D": "기존 Lambda 함수를 구성하여 삭제된 트래픽의 대상 IP 주소를 각 SNS 알림에 추가합니다. 새 Lambda 함수를 구성하여 SNS 알림의 대상 IP 주소를 사용하여 네트워크 ACL에 인바운드 규칙을 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Flow Log — 네트워크 트래픽의 메타데이터 기록\n▸ Network ACL — 서브넷 수준의 상태 비저장 방화벽\n▸ Dropped Traffic — Transit Gateway에서 거부된 트래픽\n\n【정답 포인트】\n▸ 트래픽 차단 목표 → VPC를 떠나는 트래픽 차단\n▸ 아웃바운드 규칙 필요 → VPC 내부에서 외부로 나가는 트래픽 차단\n▸ 대상 IP 주소 사용 → 차단하려는 외부 대상의 IP를 식별 필요\n\n【오답 체크】\n(B) 인바운드 규칙은 VPC로 들어오는 트래픽 차단\n(C) 소스 IP는 VPC 내 발신지. 외부 대상 IP가 아님\n(D) 인바운드 규칙으로 아웃바운드 트래픽 차단 불가\n\n【시험 포인트】",
    "en_q": "A company has a transit gateway in a single AWS account. The company sends flow logs for the transit gateway to an Amazon CloudWatch Logs log group. The company created an AWS Lambda function to analyze the logs. The Lambda function sends a notification to an Amazon Simple Notification Service (Amazon SNS) topic when a VPC generates traffic that is dropped by the transit gateway. Each notification contains the account ID. VPC ID, and total amount of dropped packets. The company wants to subscribe a new Lambda function to the SNS topic. The new Lambda function must automatically prevent the traffic that is identified in each notification from leaving a VPC by applying a network ACL to the transit gateway attachment subnets in the VPC that generates the traffic. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure the existing Lambda function to add the destination IP addresses of the dropped traffic to each SNS notification. Configure the new Lambda function to create an outbound rule by using the destination IP addresses in the network ACL.",
      "B": "Configure the existing Lambda function to add the source IP addresses of the dropped traffic to each SNS notification. Configure the new Lambda function to create an inbound rule by using the source IP addresses in the network ACL.",
      "C": "Configure the existing Lambda function to add the source IP addresses of the dropped traffic to each SNS notification. Configure the new Lambda function to create an outbound rule by using the source IP addresses in the network ACL.",
      "D": "Configure the existing Lambda function to add the destination IP addresses of the dropped traffic to each SNS notification. Configure the new Lambda function to create an inbound rule by using the destination IP addresses in the network ACL."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154072-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 259,
    "question": "회사에는 IPv4를 사용하는 서브넷이 있는 여러 VPC가 있습니다. VPC에서 인터넷으로의 트래픽은 NAT Gateway를 사용합니다. 회사는 IPv6으로 전환하려고 합니다. 네트워크 엔지니어는 기존 테스트 VPC에서 여러 IPv6 전용 서브넷을 생성합니다. 네트워크 엔지니어는 IPv6 주소가 있는 새 Amazon EC2 인스턴스를 서브넷 중 하나에 배포합니다. 테스트 중에 네트워크 엔지니어는 새 EC2 인스턴스가 인터넷을 통해 IPv4 전용 서비스와 통신할 수 없음을 발견합니다. 네트워크 엔지니어는 IPv6 EC2 인스턴스가 IPv4 전용 서비스와 통신할 수 있도록 해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "IPv6 전용 서브넷에 대해 DNS64를 활성화합니다. IPv6 전용 서브넷의 라우트 테이블을 업데이트하여 NAT Gateway를 통해 트래픽을 보냅니다.",
      "B": "테스트 VPC에 NAT64를 활성화합니다. 기존 NAT Gateway를 IPv6을 지원하도록 재구성합니다.",
      "C": "새 EC2 인스턴스에 대해 DNS64를 활성화합니다. IPv6을 지원하는 새 Egress-only Internet Gateway를 생성합니다.",
      "D": "각 라우트 테이블에 대해 NAT64를 활성화합니다. IPv4와 IPv6 모두를 지원하는 새 NAT Gateway를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ DNS64 — IPv6 클라이언트가 IPv4 주소를 IPv6 형식으로 변환\n▸ NAT64 — VPC 수준의 IPv6-to-IPv4 변환 (커뮤니티 기능 필요)\n▸ Egress-only IGW — IPv6 전용 아웃바운드 게이트웨이\n\n【정답 포인트】\n▸ DNS64 활성화 → IPv6 인스턴스가 IPv4 서비스를 IPv6 형식으로 액세스 가능하게 함\n▸ NAT Gateway 라우팅 → Route Table에서 NAT Gateway로 트래픽 전송하여 실제 NAT 처리\n▸ 표준 솔루션 → AWS에서 권장하는 IPv6-to-IPv4 통신 방식\n\n【오답 체크】\n(B) NAT64는 VPC 레벨에서 지원 안 함. 기존 NAT Gateway도 IPv6 지원 안 함\n(C) DNS64만으로는 부족. NAT 처리 필요. Egress-only IGW는 IPv6 전용\n(D) 각 라우트에 NAT64 불가. NAT Gateway도 IPv6 전용 지원 안 함\n\n【시험 포인트】",
    "en_q": "A company has multiple VPCs with subnets that use IPv4. Traffic from the VPCs to the internet uses a NAT gateway. The company wants to transition to IPv6. A network engineer creates multiple IPv6-only subnets in an existing testing VPC. The network engineer deploys a new Amazon EC2 instance that has an IPv6 address into one of the subnets. During testing, the network engineer discovers that the new EC2 instance is not able to communicate with an IPv4-only service through the internet. The network engineer needs to enable the IPv6 EC2 instance to communicate with the IPv4-only service. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Enable DNS64 for the IPv6-only subnets. Update the route tables for the IPv6-only subnets to send traffic through the NAT gateway.",
      "B": "Enable NAT64 for the testing VPC. Reconfigure the existing NAT gateway to support IPv6.",
      "C": "Enable DNS64 for the new EC2 instance. Create a new egress-only internet gateway that supports IPv6.",
      "D": "Enable NAT64 for each route table. Create a new NAT gateway that supports both IPv4 and IPv6."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154073-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 260,
    "question": "회사가 한 AWS 계정의 두 AWS 리전에 애플리케이션을 배포했습니다. 회사는 각 리전에 하나의 VPC를 가지고 있습니다. VPC는 겹치지 않는 개인 CIDR 범위를 사용합니다. 회사는 두 VPC를 단일 온프레미스 데이터 센터에 연결하여 애플리케이션을 테스트해야 합니다. 애플리케이션은 최대 800Mbps의 처리량이 필요합니다. 네트워크 엔지니어는 VPC와 온프레미스 데이터 센터 간의 연결성을 구축해야 합니다. 최소 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터 센터를 위해 2Gbps Direct Connect 연결을 주문합니다. 각 VPC에서 Virtual Private Gateway를 구성합니다. 각 Virtual Private Gateway에 대한 프라이빗 VIF를 생성하고, Virtual Private Gateway를 Direct Connect 연결과 연결합니다. VPC 라우트 테이블 및 데이터 센터 라우터에서 정적 경로를 구성합니다.",
      "B": "데이터 센터를 위해 2Gbps Direct Connect 연결을 주문합니다. 각 VPC에서 Virtual Private Gateway를 구성합니다. 각 Virtual Private Gateway에 대한 프라이빗 VIF를 생성하고, Virtual Private Gateway를 Direct Connect 연결과 연결합니다. 프라이빗 VIF와 데이터 센터 간에 Open Shortest Path First(OSPF) 라우팅을 구성합니다.",
      "C": "각 VPC에서 고객 게이트웨이와 Virtual Private Gateway를 구성합니다. 데이터 센터와 각 VPC 간에 AWS Site-to-Site VPN 연결을 구성합니다. VPC 라우트 테이블의 각 정적 경로를 데이터 센터의 서브넷으로 지정하도록 구성합니다.",
      "D": "각 VPC에서 고객 게이트웨이와 Virtual Private Gateway를 구성합니다. 데이터 센터와 각 VPC 간에 AWS Site-to-Site VPN 연결을 구성합니다. VPC와 데이터 센터 간에 BGP 라우팅을 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Direct Connect — 전용 네트워크 연결, 높은 성능 및 일관된 대역폭\n▸ Site-to-Site VPN — 공개 인터넷 기반 암호화 연결\n▸ BGP — Border Gateway Protocol, 동적 라우팅\n▸ OSPF — Open Shortest Path First, 라우팅 프로토콜\n\n【정답 포인트】\n▸ 운영 오버헤드 최소화 → BGP 동적 라우팅이 자동으로 경로 학습 및 장애 조치\n▸ VPN 충분성 → 800Mbps는 VPN으로 가능 (1Gbps 이상 권장)\n▸ 정적 경로의 단점 → VPC CIDR 변경 시 수동 업데이트 필요\n▸ 운영 효율성 → BGP가 자동 경로 관리로 최적\n\n【오답 체크】\n(A)\n(B) Direct Connect는 2Gbps 비용이 높음. VPN으로 충분하고 비용 저렴\n(A) 정적 경로는 수동 관리 필요\n(B) OSPF도 작동하지만, VPN은 BGP 기본 지원\n\n【시험 포인트】",
    "en_q": "A company deployed an application in two AWS Regions in one AWS account. The company has one VPC in each Region. The VPCs use non-overlapping private CIDR ranges. The company needs to connect both VPCs to a single on-premises data center to test the application. The application requires up to 800 Mbps of throughput. A network engineer needs to establish connectivity between the VPCs and the on-premises data center. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Order a 2 Gbps Direct Connect connection for the data center. Configure a virtual private gateway in each VPC. Create a private VIF for each virtual private gateway, and associate the virtual private gateways with the Direct Connect connection. Configure static routes in the VPC route tables and in the data center router.",
      "B": "Order a 2 Gbps Direct Connect connection for the data center. Configure a virtual private gateway in each VPC. Create a private VIF for each virtual private gateway, and associate the virtual private gateways with the Direct Connect connection. Configure Open Shortest Path First (OSPF) routing between the private VIF and the data center.",
      "C": "Configure a customer gateway and a virtual private gateway in each VPConfigure an AWS Site-to-Site VPN connection between the data center and each VPConfigure static routes in each VPC route table to point to the subnets in the data center.",
      "D": "Configure a customer gateway and a virtual private gateway in each VPC. Configure an AWS Site-to-Site VPN connection between the data center and each VPC. Configure BGP routing between the VPCs and the data center."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154074-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 261,
    "question": "회사는 AWS에서 단일 VPC로 워크로드를 실행합니다. 회사의 아키텍처에는 Amazon CloudWatch Logs 및 AWS Key Management Service(AWS KMS)를 포함한 AWS 서비스를 위한 여러 인터페이스 VPC 엔드포인트가 포함됩니다. 엔드포인트는 공유 보안 그룹을 사용하도록 구성됩니다. 보안 그룹은 다른 워크로드나 리소스에 사용되지 않습니다. 보안 검토 후 회사는 공유 보안 그룹이 필요한 것보다 더 허용적이라고 결정했습니다. 회사는 보안 그룹과 관련된 규칙을 더 제한적으로 만들고 싶습니다. 보안 그룹 규칙의 변경이 VPC의 리소스가 인터페이스 VPC 엔드포인트를 통해 AWS 서비스를 사용하는 것을 방지해서는 안 됩니다. 변경은 불필요한 액세스를 방지해야 합니다. 보안 그룹은 현재 다음 규칙을 사용합니다: ▸ 인바운드 - 규칙 1 프로토콜: TCP - 포트: 443 - 소스: 0.0.0.0/0 ▸ 인바운드 - 규칙 2 프로토콜: TCP - 포트: 443 - 소스: VPC CIDR ▸ 아웃바운드 - 규칙 1 프로토콜: All - 포트: All - 대상: 0.0.0.0/0 회사가 이 요구 사항을 충족하기 위해 제거해야 하는 규칙 또는 규칙은 무엇입니까?",
    "options": {
      "A": "아웃바운드 - 규칙 2",
      "B": "인바운드 - 규칙 1 및 아웃바운드 - 규칙 1",
      "C": "인바운드 - 규칙 2 및 아웃바운드 - 규칙 1",
      "D": "아웃바운드 - 규칙 1"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Interface VPC Endpoint — ENI 기반 AWS 서비스 연결. VPC 내부에서만 접근 가능\n▸ Security Group — Stateful 방화벽. 인바운드와 아웃바운드 통제\n\n【정답 포인트】\n▸ 인바운드 규칙 1 제거 → 0.0.0.0/0은 불필요. VPC 내부 리소스만 액세스 필요\n▸ 인바운드 규칙 2 유지 → VPC CIDR에서만 443 포트 허용으로 충분\n▸ 아웃바운드 규칙 1 제거 → 모든 트래픽 허용은 과도. Stateful이므로 응답 자동 허용\n▸ 아웃바운드 규칙 필요 없음 → Interface VPC Endpoint는 VPC 내부이므로 아웃바운드 규칙 불필요\n\n【오답 체크】\n(A) 아웃바운드 규칙 2가 주어지지 않음\n(C) 인바운드 규칙 2도 불필요한가? 아니, VPC CIDR만 필요\n(D) 아웃바운드 규칙 1만으로는 부족. 인바운드 규칙 1도 제거 필요\n\n【시험 포인트】",
    "en_q": "A company runs a workload in a single VPC on AWS. The company's architecture contains several interface VPC endpoints for AWS services, including Amazon CloudWatch Logs and AWS Key Management Service (AWS KMS). The endpoints are configured to use a shared security group. The security group is not used for any other workloads or resources. After a security review of the environment, the company determined that the shared security group is more permissive than necessary. The company wants to make the rules associated with the security group more restrictive. The changes to the security group rules must not prevent the resources in the VPC from using AWS services through interface VPC endpoints. The changes must prevent unnecessary access. The security group currently uses the following rules: Inbound - Rule 1 Protocol: TCP - Port: 443 - Source: 0.0.0.0/0 Inbound - Rule 2 Protocol: TCP - Port: 443 - Source: VPC CIDR Outbound - Rule 1 Protocol: All - Port: All - Destination: 0.0.0.0/0 Which rule or rules should the company remove to meet with these requirements?",
    "en_opts": {
      "A": "Outbound - Rule 2",
      "B": "Inbound - Rule 1 and Outbound - Rule 1",
      "C": "Inbound - Rule 2 and Outbound - Rule 1",
      "D": "Outbound - Rule 1"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154674-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 262,
    "question": "회사는 Transit Gateway를 사용하여 회사의 VPC 간 트래픽을 라우팅합니다. 각 Transit Gateway에는 단일 라우트 테이블이 있습니다. 각 라우트 테이블에는 Transit Gateway와 같은 AWS 리전에 있는 VPC의 연결 및 경로가 포함됩니다. 각 VPC의 라우트 테이블에는 Transit Gateway를 통해 사용 가능한 다른 모든 VPC CIDR 범위로의 경로가 포함됩니다. 일부 VPC는 로컬 NAT Gateway로 라우팅됩니다. 회사는 곧 많은 새 VPC를 추가할 계획입니다. 네트워크 엔지니어는 각 VPC의 라우트 테이블에 새 VPC CIDR 범위를 추가하는 솔루션이 필요합니다. 이 요구 사항을 가장 운영적으로 효율적인 방식으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "새 고객 관리 접두사 목록을 생성합니다. 새 접두사 목록에 모든 VPC CIDR 범위를 추가합니다. 각 VPC의 라우트 테이블을 업데이트하여 새 접두사 목록 ID를 대상으로 하고 적절한 Transit Gateway ID를 대상으로 사용합니다.",
      "B": "Transit Gateway 라우트 테이블에 대한 기본 라우트 테이블 전파를 활성화합니다. 각 VPC의 각 라우트 테이블에 대한 경로 전파를 활성화합니다.",
      "C": "각 VPC의 라우트 테이블을 업데이트하여 0.0.0.0/0을 대상으로 하고 적절한 Transit Gateway ID를 대상으로 사용합니다.",
      "D": "Transit Gateway 라우트 테이블에 대한 기본 라우트 테이블 연결을 활성화합니다. 각 VPC의 각 라우트 테이블에 대한 경로 전파를 활성화합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Prefix List — VPC CIDR 범위들을 그룹화하여 관리\n▸ Customer-managed Prefix List — 사용자가 직접 관리하는 접두사 목록\n▸ Route Propagation — Transit Gateway가 라우트 자동 전파\n\n【정답 포인트】\n▸ 운영 효율성 최고 → Prefix List 생성 후 추가 라우트 테이블마다 재사용\n▸ 확장성 → 새 VPC 추가 시 Prefix List에만 추가하면 모든 라우트 테이블이 자동 적용\n▸ 중앙 집중식 관리 → Prefix List가 단일 지점에서 VPC CIDR 관리\n\n【오답 체크】\n(B) Route Propagation도 작동하지만, VPC 라우트 테이블에서 각각 활성화해야 함. 초기 구성 비용 높음\n(C) 0.0.0.0/0은 모든 트래픽을 Transit Gateway로 보냄. NAT Gateway 등의 로컬 라우팅 불가능\n(D) Association은 전파와 다른 개념. 경로 제한 증가\n\n【시험 포인트】",
    "en_q": "A company uses transit gateways to route traffic between the company's VPCs. Each transit gateway has a single route table. Each route table contains attachments and routes for the VPCs that are in the same AWS Region as the transit gateway. The route tables in each VPC also contain routes to all the other VPC CIDR ranges that are available through the transit gateways. Some VPCs route to local NAT gateways. The company plans to add many new VPCs soon. A network engineer needs a solution to add new VPC CIDR ranges to the route tables in each VPC. Which solution will meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Create a new customer-managed prefix list. Add all VPC CIDR ranges to the new prefix list. Update the route tables in each VPC to use the new prefix list ID as the destination and the appropriate transit gateway ID as the target.",
      "B": "Turn on default route table propagation for the transit gateway route tables. Turn on route propagation for each route table in each VPC.",
      "C": "Update the route tables in each VPC to use 0.0.0.010 as the destination and the appropriate transit gateway ID as the target.",
      "D": "Turn on default route table association for the transit gateway route tables. Turn on route propagation for each route table in each VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154670-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 263,
    "question": "회사에는 온프레미스 고객 게이트웨이와 Transit Gateway 간의 여러 AWS Site-to-Site VPN 연결이 있습니다. 회사의 애플리케이션은 IPv4를 사용하여 VPN 연결을 통해 통신합니다. 회사는 VPC를 이중 스택으로 업데이트했으며 새 워크로드에 IPv6 전용을 사용하려고 합니다. 회사가 기존 VPN 연결을 통해 통신하려고 할 때 IPv6 트래픽이 실패합니다. 이 솔루션은 최소 운영 오버헤드로 IPv6 지원을 제공합니까?",
    "options": {
      "A": "IPv6을 지원하는 새 Site-to-Site VPN 연결을 생성합니다.",
      "B": "오픈 소스 소프트웨어를 실행하는 자체 관리 Amazon EC2 인스턴스로 새 Site-to-Site VPN 연결을 생성합니다.",
      "C": "기존 Site-to-Site VPN 연결을 업데이트하여 IPv6을 지원합니다.",
      "D": "온프레미스 고객 게이트웨이의 공개 IP 주소를 IPv4에서 IPv6으로 업데이트합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Site-to-Site VPN — AWS와 온프레미스 간의 암호화 연결\n▸ IPv6 Support — VPN 터널이 IPv6 트래픽 지원 필요\n▸ Transit Gateway — 중앙 라우팅\n\n【정답 포인트】\n▸ 기존 VPN IPv6 미지원 → IPv4 기반 VPN은 IPv6 트래픽 통과 불가\n▸ 새 VPN 연결 생성 → IPv6 지원 VPN을 별도로 생성\n▸ 최소 오버헤드 → 기존 IPv4 VPN 유지하면서 IPv6 전용 VPN 추가\n▸ 병렬 운영 → IPv4와 IPv6 동시 지원\n\n【오답 체크】\n(B) 자체 관리 EC2는 복잡성 증가. AWS 관리형이 나음\n(C) 기존 VPN은 IPv6 업그레이드 불가능. 프로토콜 수준의 제약\n(D) Public IP 변경만으로는 VPN IPv6 지원 안 됨\n\n【시험 포인트】",
    "en_q": "A company has several AWS Site-to-Site VPN connections between an on-premises customer gateway and a transit gateway. The company's application uses IPv4 to communicate through the VPN connections. The company has updated the VPC to be dual stack and wants to transition to using IPv6-only for new workloads. When the company tries to communicate through the existing VPN connections, IPv6 traffic fails. Which solution will provide IPv6 support with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create a new Site-to-Site VPN connection that supports IPv6.",
      "B": "Create a new Site-to-Site VPN connection to a self-managed Amazon EC2 instance that runs open source software.",
      "C": "Update the existing Site-to-Site VPN connections to support IPv6.",
      "D": "Update the on-premises customer gateway's public IP address from IPv4 to IPv6."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/154669-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 264,
    "question": "회사에는 두 팀이 있습니다: A팀과 B팀입니다. A팀은 Account A에서 실행되는 VPC를 보유합니다. 팀은 Transit Gateway(TGW-A)를 사용하여 다양한 VPC에서 실행되는 워크로드 간 트래픽을 라우팅합니다. 마찬가지로 B팀은 Account B에서 실행되는 VPC를 보유합니다. B팀은 다양한 VPC에서 실행되는 워크로드 간 트래픽을 라우팅하기 위해 다른 Transit Gateway(TGW-B)를 사용합니다. 회사의 네트워크 팀은 A팀과 B팀을 위한 라우팅을 관리합니다. 네트워크 팀은 TGW-B를 폐지하고 단일 Transit Gateway를 사용하여 두 팀의 VPC에 대한 라우팅을 관리하려고 합니다. 최소 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "TGW-A에 대한 리소스 공유를 생성합니다. TGW-A를 Account B와 공유합니다. Account B의 VPC에 대한 VPC 연결을 생성합니다. TGW-A 라우트 테이블에서 VPC의 라우팅을 구성합니다. Account B의 VPC 라우트 테이블을 업데이트하여 TGW-A로 트래픽을 전달합니다. TGW-B 연결 및 TGW-B를 삭제합니다.",
      "B": "TGW-A에 대한 리소스 공유를 생성합니다. TGW-A를 Account B와 공유합니다. TGW-B 구성을 TGW-A에 자동으로 복제하여 Account B의 VPC에 대한 라우팅 변경을 시작합니다. 라우팅 변경이 완료되면 TGW-B를 삭제합니다.",
      "C": "새 Transit Gateway(TGW-C)를 Account A에 생성합니다. TGW-C에 대한 리소스 공유를 생성합니다. TGW-C를 Account B와 공유합니다. Account A 및 Account B의 VPC에 대한 VPC 연결을 생성합니다. TGW-C 라우트 테이블에서 모든 VPC의 라우팅을 구성합니다. Account A 및 Account B의 VPC 라우트 테이블을 업데이트하여 TGW-C로 트래픽을 전달합니다. TGW-A 연결 및 TGW-B 연결을 삭제합니다. TGW-A 및 TGW-B를 삭제합니다.",
      "D": "새 계정(Account C)에 새 Transit Gateway(TGW-C)를 생성합니다. TGW-C에 대한 리소스 공유를 생성합니다. TGW-C를 Account A 및 Account B와 공유합니다. Account A 및 Account B의 VPC에 대한 VPC 연결을 생성합니다. TGW-C 라우트 테이블에서 모든 VPC의 라우팅을 구성합니다. Account A 및 Account B의 VPC 라우트 테이블을 업데이트하여 TGW-C로 트래픽을 전달합니다. TGW-A 연결 및 TGW-B 연결을 삭제합니다. TGW-A 및 TGW-B를 삭제합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Resource Access Manager(RAM) — 계정 간 AWS 리소스 공유\n▸ Transit Gateway Sharing — RAM을 통한 TGW 공유\n▸ Least Operational Overhead — 최소한의 변경\n\n【정답 포인트】\n▸ TGW-A 재사용 → 이미 구성된 TGW-A를 Account B와 공유하여 활용\n▸ Account A 중심 구조 → TGW-A의 리소스 공유만으로 충분\n▸ 최소 변경 → Account A의 라우팅은 유지. Account B만 TGW-A 연결 추가\n▸ 가장 간단한 마이그레이션 → TGW-B만 제거\n\n【오답 체크】\n(B) 자동 복제 기능 없음. TGW 설정은 수동 구성 필요\n(C) 새 TGW 생성으로 운영 오버헤드 증가. Account A의 라우팅도 변경 필요\n(D) 별도 Account C 생성은 불필요한 복잡성. Account A 중심이 더 간단\n\n【시험 포인트】",
    "en_q": "A company has two teams: Team A and Team B. Team A has VPCs that run in Account A. The team uses a transit gateway (TGW-A) to route traffic between workloads that run in the different VPCs. Similarly, Team В has VPCs that run in Account B. Team В uses a different transit gateway (TGW-B) to route traffic between workloads that run in the different VPCs. The company's network team manages the routing for Team A and Team В. The network team wants to retire TGW-B and use a single transit gateway to manage routing for the VPCs of both teams. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create a resource share for TGW-A Share TGW-A with Account B. Create VPC attachments for the VPCs in Account В. Configure routing for the VPCs in TGW-A route tables. Update the route tables of the VPCs in Account В to forward traffic to TGW-Delete TGW-B attachments and TGW-B.",
      "B": "Create a resource share for TGW-A. Share TGW-A with Account В. Replicate the TGW-B configuration to TGW-A to automatically start routing changes for the VPCs in Account В. Delete TGW-B when routing changes are complete.",
      "C": "Create a new transit gateway (TGW-C) in Account A. Create a resource share for TGW-Share TGW-C with Account B. Create VPC attachments for the VPCs in Account A and Account В. Configure routing for all the VPCs in TGW-C route tables. Update the route tables for the VPCs in Account A and Account В to forward traffic to TGW-Delete TGW-A attachments and TGW-B attachments. Delete TGW-A and TGW-B.",
      "D": "Create a new transit gateway (TGW-C) in a new account (Account C). Create a resource share for TGW-C. Share TGW-C with Account A and Account B. Create VPC attachments for the VPCs in Account A and Account В. Configure routing for all the VPCs in TGW-C route tables. Update the route tables for the VPCs in Account A and Account В to forward traffic to TGW-C. Delete TGW-A attachments and TGW-B attachments. Delete TGW-A and TGW-B."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/170990-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 265,
    "question": "회사는 Transit Gateway에 의해 연결된 여러 VPC를 포함하는 AWS 환경을 보유하고 있습니다. 회사는 인증서 기반 AWS Site-to-Site VPN 연결을 사용하여 온프레미스 환경과 AWS 환경 간의 연결성을 구축하려고 합니다. 회사는 온프레미스 환경에 대한 정적 공개 IP 주소를 보유하지 않습니다. Transit Gateway와 온프레미스 환경 간에 VPN 연결성을 구축하기 위해 회사가 취해야 할 단계의 조합은 무엇입니까? (2가지를 선택하세요)",
    "options": {
      "A": "AWS Certificate Manager(ACM)에서 공개 인증서를 생성합니다.",
      "B": "AWS Certificate Manager(ACM)에서 프라이빗 인증서를 생성합니다.",
      "C": "Site-to-Site VPN 터널이 사전 공유 키(PSK)를 사용하도록 구성합니다.",
      "D": "고객 게이트웨이를 생성합니다. 고객 게이트웨이 디바이스의 외부 인터페이스의 현재 동적 IP 주소를 지정합니다.",
      "E": "고객 게이트웨이를 생성합니다. 고객 게이트웨이 디바이스의 IP 주소를 지정하지 않습니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ Certificate-based VPN — 인증서를 사용한 VPN 인증 (PSK 대체)\n▸ Private Certificate — ACM Private CA에서 발급한 프라이빗 인증서\n▸ Customer Gateway — 온프레미스 VPN 엔드포인트\n\n【정답 포인트】\n▸ 프라이빗 인증서 생성 → AWS Certificate Manager(ACM)의 Private CA를 사용하여 프라이빗 인증서 발급\n(B)\n▸ 동적 IP 주소 지원 → Customer Gateway 생성 시 IP 주소를 지정하지 않으면 동적 IP 변경 시에도 작동\n(E)\n▸ 인증서 기반 → PSK 대신 인증서 사용으로 더 강력한 인증\n\n【오답 체크】\n(A) 공개 인증서는 인터넷 기반 HTTPS용. VPN에는 프라이빗 인증서 필요\n(C) 인증서 기반이므로 PSK 불필요\n(D) 동적 IP이므로 IP를 지정할 수 없음. 지정하면 변경 시 작동 안 함\n\n【시험 포인트】",
    "en_q": "A company has an AWS environment that includes multiple VPCs that are connected by a transit gateway. The company wants to use a certificate-based AWS Site-to-Site VPN connection to establish connectivity between an on-premises environment and the AWS environment. The company does not have a static public IP address for the on-premises environment. Which combination of steps should the company take to establish VPN connectivity between the transit gateway and the on-premises environment? (Choose two.)",
    "en_opts": {
      "A": "Create a public certificate in AWS Certificate Manager (ACM).",
      "B": "Create a private certificate in AWS Certificate Manager (ACM).",
      "C": "Configure the Site-to-Site VPN tunnels to use the pre-shared key (PSK).",
      "D": "Create a customer gateway. Specify the current dynamic IP address of the customer gateway device's external interface.",
      "E": "Create a customer gateway. Do not specify the IP address of the customer gateway device."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/170991-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 266,
    "question": "회사가 여러 AWS 리전에서 운영됩니다. 회사는 각 리전에 Transit Gateway를 배포했습니다. 회사는 AWS Organizations를 사용하여 하나의 조직에서 여러 AWS 계정을 운영합니다. 회사는 새 VPC가 생성될 때 모든 VPC 흐름 로그 데이터를 캡처해야 합니다. 회사는 흐름 로그를 특정 Amazon S3 버킷으로 보내야 합니다. 최소 관리 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 사용자의 IAM 권한을 업데이트하여 VPC Flow Logs가 올바르게 활성화되고 구성될 때만 사용자가 VPC를 생성할 수 있도록 하는 조건을 포함합니다.",
      "B": "VPC Flow Logs가 올바르게 활성화되고 구성되었는지 확인하는 자동 수정 기능이 있는 사용자 정의 AWS Config 규칙을 생성합니다. AWS Config 규칙을 조직에 적용합니다.",
      "C": "각 Transit Gateway에서 VPC Flow Logs를 활성화합니다. VPC Flow Logs를 구성하여 지정된 S3 버킷으로 흐름 로그를 보냅니다.",
      "D": "각 계정에서 VPC 생성 이벤트를 모니터링하기 위해 AWS CloudTrail을 사용하는 서버리스 애플리케이션을 배포합니다. 애플리케이션이 올바른 VPC Flow Logs 구성을 적용하도록 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Config Rule — AWS 리소스의 준수 상태를 모니터링\n▸ Auto Remediation — 자동 수정 기능. 규칙 위반 시 자동 조치\n▸ AWS Organizations — 여러 계정의 중앙 관리\n\n【정답 포인트】\n▸ AWS Config 규칙 생성 → VPC Flow Logs 설정 상태 자동 모니터링\n▸ 자동 수정 기능 → VPC 생성 시 Flow Logs가 자동 설정됨\n▸ 조직 적용 → 모든 계정과 리전에 일괄 적용\n▸ 최소 관리 노력 → 일단 설정되면 지속적 관리 불필요\n\n【오답 체크】\n(A) IAM은 사전 예방이지만, 모든 사용자의 권한 관리 복잡\n(C) Transit Gateway만 설정. VPC 개별 설정 필요\n(D) CloudTrail + Lambda는 복잡하고 관리 오버헤드 높음\n\n【시험 포인트】",
    "en_q": "A company operates in multiple AWS Regions. The company has deployed transit gateways in each Region. The company uses AWS Organizations to operate multiple AWS accounts in one organization. The company needs to capture all VPC flow log data when a new VPC is created. The company needs to send flow logs to a specific Amazon S3 bucket. Which solution will meet these requirements with the LEAST administrative effort?",
    "en_opts": {
      "A": "Update IAM permissions for each user to include a condition that ensures users can create VPCs only when VPC Flow Logs is enabled and configured correctly.",
      "B": "Create a custom AWS Config rule with automatic remediation that verifies VPC Flow Logs is enabled and configured correctly. Apply the AWS Config rule to the organization.",
      "C": "Enable VPC Flow Logs on each transit gateway. Configure VPC Flow Logs to send flow logs to the specified S3 bucket.",
      "D": "Deploy a serverless application that uses AWS CloudTrail to monitor for VPC creation events in each account. Configure the application to apply the correct VPC Flow Logs configuration."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169828-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 267,
    "question": "회사는 TCP 인터넷 트래픽을 분석하려고 합니다. 트래픽은 회사의 VPC에 있는 Amazon EC2 인스턴스에서 생성됩니다. EC2 인스턴스는 NAT 게이트웨이를 통해 연결을 시작합니다. 회사는 소스 및 대상 IP 주소, 포트, TCP 세그먼트의 첫 8바이트를 포함한 트래픽에 대한 데이터를 캡처하려고 합니다. 회사는 필요한 모든 데이터 포인트를 수집, 저장 및 분석해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스를 VPC 트래픽 미러 소스로 구성합니다. 트래픽 미러 대상에 소프트웨어를 배포하여 데이터를 Amazon CloudWatch Logs로 전달합니다. CloudWatch Logs Insights를 사용하여 데이터를 분석합니다.",
      "B": "NAT 게이트웨이를 VPC 트래픽 미러 소스로 구성합니다. 트래픽 미러 대상에 소프트웨어를 배포하여 데이터를 Amazon S3 버킷으로 전달합니다. Amazon Athena를 사용하여 데이터를 분석합니다.",
      "C": "EC2 인스턴스에 대한 VPC Flow Logs를 켭니다. 기본 형식을 지정하고 Amazon CloudWatch Logs를 로그 대상으로 설정합니다. CloudWatch Logs Insights를 사용하여 플로우 로그 데이터를 분석합니다.",
      "D": "EC2 인스턴스에 대한 VPC Flow Logs를 켭니다. 사용자 정의 형식을 지정하고 Amazon S3를 로그 대상으로 설정합니다. Amazon Athena를 사용하여 플로우 로그 데이터를 분석합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ VPC Traffic Mirror — 프로덕션 트래픽을 방해하지 않고 네트워크 트래픽을 복사하여 분석\n▸ Flow Logs — 기본 5-튜플 정보만 캡처 (TCP payload 미포함)\n▸ Traffic Mirror — TCP 페이로드의 처음 8바이트까지 캡처 가능\n\n【정답 포인트】\n▸ TCP 세그먼트 첫 8바이트 요구 → Traffic Mirror만 이를 지원\n▸ NAT 게이트웨이 미러링 → Traffic Mirror는 NAT 게이트웨이 미러를 지원 (EC2 미러 불가)\n▸ S3 저장 → 대규모 데이터 저장에 적합\n\n【오답 체크】\n(A) EC2를 미러 소스로 설정 불가 - Flow Logs는 인스턴스 레벨 메타데이터 기록\n(C) VPC Flow Logs는 TCP payload를 캡처하지 않음 - IP/포트/프로토콜만 기록\n(D) Flow Logs에서 사용자 정의 형식도 payload 데이터 불포함\n\n【시험 포인트】\nTraffic Mirror는 패킷 페이로드 캡처가 필요할 때 선택 → NAT 게이트웨이 미러링 지원 → S3에 저장하여 Athena로 분석",
    "en_q": "A company wants to analyze TCP internet traffic. The traffic originates from Amazon EC2 instances in the company's VPC. The EC2 instances initiate connections through a NAT gateway. The company wants to capture data about the traffic including source and destination IP addresses ports, and the first 8 bytes of the TCP segments of the traffic. The company needs to collect, store, and analyze all the required data points. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure the EC2 instances to be VPC traffic mirror sources. Deploy software on the traffic mirror target to forward the data to Amazon CloudWatch Logs. Analyze the data by using CloudWatch Logs Insights",
      "B": "Configure the NAT gateway to be a VPC traffic mirror source. Deploy software on the traffic mirror target to forward the data to an Amazon S3 bucket. Analyze the data by using Amazon Athena.",
      "C": "Turn on VPC Flow Logs for the EC2 instances. Specify the default format and set Amazon CloudWatch Logs as the log destination. Analyze the flow log data by using CloudWatch Logs Insights.",
      "D": "Turn on VPC Flow Logs for the EC2 instances. Specify a custom format and set Amazon S3 as the log destination. Analyze the flow log data by using Amazon Athena."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/170992-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 268,
    "question": "미디어 회사는 라이브 스트림 이벤트를 사용자에게 전송하려고 합니다. 회사는 Amazon CloudFront를 사용하려고 합니다. 네트워크 엔지니어는 CloudFront에 대한 기본 오리진과 보조 오리진을 만듭니다. 엔지니어는 중단이 발생할 경우 기본 오리진이 15초 이내에 보조 오리진으로 장애 조치할 수 있도록 해야 합니다. 운영 오버헤드가 가장 적은 방식으로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Lambda@Edge 함수를 구성하여 10초마다 두 오리진의 상태를 확인합니다. 오리진 상태가 불건강할 때 들어오는 요청을 다시 라우팅합니다.",
      "B": "두 오리진 앞에 Network Load Balancer(NLB)를 만듭니다. NLB를 CloudFront의 오리진으로 구성합니다.",
      "C": "CloudFront 오리진 연결 시간 제한값을 5초로 설정합니다. 오리진 연결 시도 값을 2로 설정합니다.",
      "D": "Lambda@Edge 함수를 구성하여 들어오는 요청의 오리진 응답을 모니터링합니다. 10초 이내에 기본 오리진에서 응답이 없으면 요청을 다시 라우팅합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Origin Failover — CloudFront의 자동 장애 조치 메커니즘\n▸ Connection Timeout — 오리진 연결 제한 시간\n▸ Connection Attempts — 실패 시 재시도 횟수\n\n【정답 포인트】\n▸ Timeout 5초 + Attempts 2회 = 최대 10초 → 15초 요구사항 충족\n▸ CloudFront 기본 기능으로 자동 장애 조치 지원\n▸ 추가 코드/함수 없이 관리 오버헤드 최소\n\n【오답 체크】\n(A) Lambda@Edge 함수는 운영 오버헤드 증가, 10초 폴링으로는 15초 요구사항 충족 어려움\n(B) NLB 도입으로 아키텍처 복잡도 증가\n(D) Lambda@Edge 모니터링도 추가 관리 필요, 10초 감지 → 15초 초과 가능\n\n【시험 포인트】\nCloudFront 자체 장애 조치 기능 활용 → Timeout × Attempts로 시간 계산 → 추가 인프라 불필요",
    "en_q": "A media company is planning to host an event that the company will live stream to users. The company wants to use Amazon CloudFront. A network engineer creates a primary origin and a secondary origin for CloudFront. The engineer needs to ensure that the primary origin can fail over to the secondary origin within 15 seconds if a disruption occurs. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Configure a Lambda@Edge function to check the health status of both origins every 10 seconds. Reroute incoming requests when the origin health status is unhealthy.",
      "B": "Create a Network Load Balancer (NLB) in front of both origins Configure the NLB as the origin in CloudFront.",
      "C": "Set the CloudFront origin connection timeout value to 5 seconds Set the origin connection attempts value to 2.",
      "D": "Configure a Lambda@Edge function to monitor incoming requests for an origin response. Reroute incoming requests if no response is received from the primary origin within 10 seconds."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169825-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 269,
    "question": "AnyCompany는 네트워킹 리소스를 Account-A라는 AWS 네트워크 계정에서 배포하고 관리합니다. AnyCompany는 Example Corp를 인수했으며, Example Corp는 Application Load Balancer(ALB) 뒤에서 실행되는 애플리케이션을 Account-B라는 Example Corp의 AWS 계정에 가지고 있습니다. Example Corp는 AWS Global Accelerator를 사용하여 애플리케이션을 사용자에게 게시하기 위한 가속기를 만들어야 합니다. AnyCompany의 네트워킹 팀이 가속기를 관리할 것입니다. 관리 오버헤드가 가장 적은 방식으로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Account-B에서 가속기를 만듭니다. Account-A의 크로스 계정 역할을 사용하여 네트워킹 팀에게 가속기 관리 액세스를 부여합니다.",
      "B": "Account-A에 Network Load Balancer(NLB)를 배포하여 Account-B의 ALB로 트래픽을 라우팅합니다. 가속기를 만들고 Account-A의 NLB를 끝점으로 설정합니다.",
      "C": "Account-B에서 Account-A 주체에 대한 크로스 계정 Global Accelerator 첨부 파일을 만듭니다. 공유 첨부 파일을 사용하여 Account-A에서 가속기를 만듭니다.",
      "D": "Account-A에서 가속기를 만듭니다. AWS Resource Access Manager(AWS RAM)를 사용하여 가속기를 Account-B와 공유합니다. Account-B의 ALB를 Account-A의 가속기와 연결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Global Accelerator Attachment — 엔드포인트 리소스를 가속기에 연결\n▸ Cross-Account Attachment — 다른 계정의 리소스를 공유 가능하게 함\n▸ Resource Sharing — 크로스 계정 리소스 공유 메커니즘\n\n【정답 포인트】\n▸ Account-B의 ALB가 이미 존재 → NLB 추가 구축 불필요\n▸ Global Accelerator는 Account-A(네트워킹)에서 관리\n▸ Cross-account attachment로 간단한 공유 구성\n▸ RAM 공유보다 Global Accelerator 전용 attachment 메커니즘이 더 직관적\n\n【오답 체크】\n(A) ALB가 있는 Account-B에서 생성하면 Account-A 팀이 관리하기 복잡\n(B) 불필요한 NLB 추가로 오버헤드 증가\n(D) RAM 공유는 Global Accelerator 자체 공유 기능보다 관리 복잡\n\n【시험 포인트】\nGlobal Accelerator 크로스 계정 첨부 기능 활용 → Account-B에서 Account-A로 공유 → Account-A에서 단일 관리",
    "en_q": "AnyCompany deploys and manages networking resources in its AWS network account, named Account-A. AnyCompany acquires Example Corp, which has an application that runs behind an Application Load Balancer (ALB) in Example Corp's AWS account, named Account-B. Example Corp needs to use AWS Global Accelerator to create an accelerator to publish the application to users. AnyCompany's networking team will manage the accelerator. Which solution will meet these requirements with the LEAST management overhead?",
    "en_opts": {
      "A": "Create an accelerator in Account-В. Use a cross-account role from Account-A to grant the networking team access to manage the accelerator.",
      "B": "Deploy a Network Load Balancer (NLB) in Account-A to route traffic to the ALB in Account-В. Create an accelerator, and set the NLB as the endpoint in Account-A.",
      "C": "Create a cross-account Global Accelerator attachment in Account-В for the Account-A principal. Create an accelerator in Account-A by using the shared attachment.",
      "D": "Create an accelerator in Account-A. Use AWS Resource Access Manager (AWS RAM) to share the accelerator with Account-В. Associate the ALB in Account-В with the accelerator in Account-A."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169824-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 270,
    "question": "회사는 Direct Connect 위치와 미국의 온프레미스 환경 사이에 두 개의 AWS Direct Connect 연결을 가지고 있습니다. 회사는 이러한 연결을 사용하여 us-east-1 리전에서 실행되는 AWS 워크로드와 통신합니다. 회사는 여러 VPC를 연결하는 transit gateway를 가지고 있습니다. Direct Connect 연결은 Direct Connect gateway에서 종료되며 transit gateway로 VIF를 전송합니다. 회사는 최근 유럽에 기반을 둔 작은 회사를 인수했습니다. 새로 인수한 회사는 온프레미스 워크로드만 가지고 있습니다. 새로 인수한 회사는 향후 3년간 AWS에서 워크로드를 실행할 계획이 없습니다. 그러나 새로 인수한 회사는 미국의 부모 회사의 AWS 리소스(us-east-1)와 부모 회사의 온프레미스 환경에 대한 연결이 필요합니다. 부모 회사는 유럽의 두 개의 새 Direct Connect 연결을 사용하여 필요한 연결을 제공하려고 합니다. 새로 인수한 회사에 대한 운영 오버헤드가 가장 적은 방식으로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기존 Direct Connect gateway에 새 transit VIF를 연결합니다. Direct Connect SiteLink를 사용하도록 새 transit VIF를 구성합니다.",
      "B": "새 Direct Connect gateway와 eu-west-1 리전의 새 transit gateway에 새 transit VIF를 연결합니다. transit gateway 피어링을 사용하여 transit gateway를 연결합니다.",
      "C": "기존 Direct Connect gateway에 새 private VIF를 연결합니다. Direct Connect SiteLink를 사용하도록 기존 transit VIF와 새 private VIF를 구성합니다.",
      "D": "새 Direct Connect gateway와 us-east-1의 새 VPC에 새 private VIF를 연결합니다. Direct Connect SiteLink와 새 VPC의 AWS PrivateLink 엔드포인트를 사용하도록 기존 transit VIF와 새 private VIF를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Direct Connect SiteLink — 온프레미스 사이트 간 통신을 AWS를 거쳐 라우팅\n▸ Transit VIF — Transit Gateway 연결용 가상 인터페이스\n▸ Private VIF — VPC 연결용 가상 인터페이스\n\n【정답 포인트】\n▸ 기존 Direct Connect gateway 재사용 → 관리 단순화\n▸ SiteLink로 유럽 온프레미스 ↔ 미국 온프레미스 직접 연결\n▸ 새 리전 VPC 불필요 (3년간 AWS 미사용)\n▸ Transit VIF로 기존 transit gateway와 직접 연동\n\n【오답 체크】\n(B) 새 리전에 gateway/TGW 구축 불필요 → 비용/복잡도 증가\n(C) Private VIF는 VPC 연결용 → 온프레미스 ↔ 온프레미스 통신에 부적합\n(D) us-east-1 VPC 신규 구축으로 오버헤드 증가\n\n【시험 포인트】\nDirect Connect SiteLink는 온프레미스 사이트 간 AWS 경유 통신 → 기존 gateway에 VIF 추가 → 최소 오버헤드",
    "en_q": "A company has two AWS Direct Connect connections between Direct Connect locations and the company's on-premises environment in the US. The company uses the connections to communicate with AWS workloads that run in the us-east-1 Region. The company has a transit gateway that connects several VPCs. The Direct Connect connections terminate at a Direct Connect gateway and the transit VIFs to the transit gateway. The company recently acquired a smaller company that is based in Europe. The newly acquired company has only on-premises workloads. The newly acquired company does not expect to run workloads on AWS for the next 3 years. However, the newly acquired company requires connectivity to the parent company's AWS resources in us-east-1 and to the parent company's on-premises environment in the US. The parent company wants to use two new Direct Connect connections in Europe to provide the required connectivity. Which solution will meet these requirements with the LEAST operational overhead for the newly acquired company?",
    "en_opts": {
      "A": "Associate new transit VIFs to the existing Direct Connect gateway. Configure the new transit VIFs to use Direct Connect SiteLink.",
      "B": "Associate new transit VIFs to a new Direct Connect gateway and to a new transit gateway in the eu-west-1 Region. Use transit gateway peering to connect the transit gateways.",
      "C": "Associate new private VIFs to the existing Direct Connect gateway. Configure the existing transit VIFs and the new private VIFs to use Direct Connect SiteLink.",
      "D": "Associate new private VIFs to a new Direct Connect gateway and to a new VPC in us-east-1. Configure the existing transit VIFs and the new private VIFs to use Direct Connect SiteLink and AWS PrivateLink endpoints in the new VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/170993-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 271,
    "question": "회사는 온프레미스 환경에서 us-east-1 리전의 AWS로 하이브리드 클라우드 연결을 설정하고 있습니다. 회사는 10 Gbps AWS Direct Connect 전용 연결을 사용하고 있습니다. 회사는 AWS에 두 개의 계정을 가지고 있습니다. Account A는 4개의 AWS 리전에 transit gateway를 보유하고 있습니다. Account B는 3개 리전에 transit gateway를 보유하고 있습니다. 회사는 확장할 계획이 없습니다. 보안 요구사항을 충족하기 위해 회사의 계정은 별도의 클라우드 인프라를 가져야 합니다. 이 요구사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "us-east-1에 하나의 Direct Connect gateway를 만듭니다. AWS Resource Access Manager(AWS RAM)를 사용하여 각 계정과 Direct Connect gateway를 공유합니다. Account A에 대한 transit VIF를 만듭니다. Account A의 4개 transit gateway를 Direct Connect gateway에 연결합니다. Account B에 대한 transit VIF를 만듭니다. Account B의 3개 transit gateway를 Direct Connect gateway에 연결합니다.",
      "B": "us-east-1에 Account A를 위한 하나의 Direct Connect gateway를 만듭니다. Account B를 위한 두 번째 Direct Connect gateway를 us-east-1에 만듭니다. Account A에 대한 transit VIF를 만듭니다. Account A의 4개 transit gateway를 Account A의 Direct Connect gateway에 연결합니다. Account B에 대한 transit VIF를 만듭니다. Account B의 3개 transit gateway를 Account B의 Direct Connect gateway에 연결합니다.",
      "C": "us-east-1에 하나의 Direct Connect gateway를 만듭니다. AWS Resource Access Manager(AWS RAM)를 사용하여 각 계정과 Direct Connect gateway를 공유합니다. Account A에 대한 transit VIF를 만듭니다. Account A의 4개 transit gateway를 Direct Connect gateway에 연결합니다. Account B에 대한 새로운 10 Gbps Direct Connect 전용 연결을 주문합니다. 새 Direct Connect 연결에서 Account B에 대한 transit VIF를 만듭니다. Account B의 3개 transit gateway를 Direct Connect gateway에 연결합니다.",
      "D": "us-east-1에 Account A를 위한 하나의 Direct Connect gateway를 만듭니다. Account B를 위한 두 번째 Direct Connect gateway를 us-east-1에 만듭니다. Account A에 대한 transit VIF를 만듭니다. Account A의 4개 transit gateway를 Account A의 Direct Connect gateway에 연결합니다. Account B를 위한 새로운 10 Gbps Direct Connect 전용 연결을 주문합니다. 새 Direct Connect 연결에서 Account B에 대한 transit VIF를 만듭니다. Account B의 3개 transit gateway를 Account B의 Direct Connect gateway에 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Direct Connect Gateway — 여러 VPC/Region 연결을 중앙화\n▸ Transit VIF — Transit Gateway로의 Virtual Interface\n▸ Security Isolation — 계정 간 인프라 분리\n\n【정답 포인트】\n▸ 기존 10 Gbps 연결 하나로 충분 (두 계정 모두 한 리전에서)\n▸ 별도 DX Gateway로 계정 간 보안 분리\n▸ 새 연결 비용 불필요 (확장 계획 없음)\n▸ 기존 10 Gbps 대역폭으로 7개 TGW 모두 수용 가능\n\n【오답 체크】\n(A) 단일 DX Gateway는 계정 간 분리 부족 → 보안 요구사항 미충족\n(C) 불필요한 추가 10 Gbps 연결 비용 증가\n(D) \n(C) 와 동일한 추가 비용 문제\n\n【시험 포인트】\nDirect Connect Gateway 별도 생성으로 계정 분리 → 기존 연결 활용 → 비용 최소화",
    "en_q": "A company is establishing hybrid cloud connectivity from an on-premises environment to AWS in the us-east-1 Region. The company is using a 10 Gbps AWS Direct Connect dedicated connection. The company has two accounts in AWS. Account A has transit gateways in four AWS Regions. Account В has transit gateways in three Regions. The company does not plan to expand. To meet security requirements the company's accounts must have separate cloud infrastructure. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Create one Direct Connect gateway in us-east-1. Use AWS Resource Access Manager (AWS RAM) to share the Direct Connect gateway with each account. Create a transit VIF for Account Associate the four transit gateways in Account A to the Direct Connect gateway. Create a transit VIF for Account B. Associate the three transit gateways in Account В to the Direct Connect gateway.",
      "B": "Create one Direct Connect gateway in us-east-1 for Account A. Create a second Direct Connect gateway in us-east-1 for Account Create a transit VIF for Account A. Associate the four transit gateways in Account A to the Direct Connect gateway in Account A. Create a transit VIF for Account Associate the three transit gateways in Account В to the Direct Connect gateway in Account В.",
      "C": "Create one Direct Connect gateway in us-east-1. Use AWS Resource Access Manager (AWS RAM) to share the Direct Connect gateway with each account. Create a transit VIF for Account A. Associate the four transit gateways in Account A to the Direct Connect gateway. Order a new 10 Gbps Direct Connect dedicated connection for Account B. Create a transit VIF on the new Direct Connect connection for Account B. Associate the three transit gateways in Account В to the Direct Connect gateway.",
      "D": "Create one Direct Connect gateway in us-east-1 for Account A. Create a second Direct Connect gateway in us-east-1 for Account B. Create a transit VIF for Account A. Associate the four transit gateways in Account A to the Direct Connect gateway in Account A. Order a new 10 Gbps Direct Connect dedicated connection for Account В. Create a transit VIF on the new Direct Connect connection for Account В. Associate the three transit gateways in Account В to the Direct Connect gateway in Account В."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/171132-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 272,
    "question": "회사는 여러 AWS 리전과 여러 가용 영역에서 애플리케이션을 실행합니다. 회사는 새로운 AWS 리전으로 확장해야 합니다. 낮은 지연 시간이 애플리케이션 기능에 중요합니다. 네트워크 엔지니어는 기존 리전과 새 리전 간의 지연 시간에 대한 메트릭을 수집해야 합니다. 네트워크 엔지니어는 최소 지난 30일 동안의 메트릭을 수집해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Network Access Analyzer Network Access Scope를 구성하고 분석을 사용하여 지연 시간을 검토합니다.",
      "B": "AWS Network Manager Infrastructure Performance를 설정합니다. 네트워크 성능 메트릭을 Amazon CloudWatch에 게시합니다.",
      "C": "Amazon VPC Reachability Analyzer 경로를 사용하여 지연 시간을 검토합니다.",
      "D": "VPC Flow Logs를 설정합니다. 로그 메트릭을 Amazon CloudWatch에 게시합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Network Manager — 글로벌 네트워크 가시성 및 모니터링\n▸ Infrastructure Performance — 리전 간 지연 시간 메트릭 수집\n▸ 30일 메트릭 저장 — CloudWatch 메트릭 보존 기능\n\n【정답 포인트】\n▸ Network Manager Infrastructure Performance는 리전 간 지연 시간 측정 전문\n▸ CloudWatch에 메트릭 발행 → 30일 이상 보존 가능\n▸ 히스토리 데이터 조회 가능 (최소 30일)\n▸ 다중 리전 확장에 필요한 지연 시간 메트릭 수집\n\n【오답 체크】\n(A) Network Access Analyzer는 연결성 검증용 → 지연 시간 메트릭 미제공\n(C) Reachability Analyzer는 경로 분석만 → 지연 시간 메트릭 미제공\n(D) VPC Flow Logs는 트래픽 로깅 → 지연 시간 메트릭 직접 포함 안 함\n\n【시험 포인트】\nNetwork Manager Infrastructure Performance로 리전 간 지연 시간 수집 → CloudWatch 저장 → 30일 이상 히스토리 유지",
    "en_q": "A company runs an application across multiple AWS Regions and multiple Availability Zones. The company needs to expand to a new AWS Region. Low latency is critical to the functionality of the application. A network engineer needs to gather metrics for the latency between the existing. Regions and the new Region. The network engineer must gather metrics for at least the previous 30 days. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure an AWS Network Access Analyzer Network Access Scope, and use the analysis to review the latency.",
      "B": "Set up AWS Network Manager Infrastructure Performance. Publish network performance metrics to Amazon CloudWatch.",
      "C": "Use an Amazon VPC Reachability Analyzer path to review the latency.",
      "D": "Set up VPC Flow Logs. Publish log metrics to Amazon CloudWatch."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169822-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 273,
    "question": "회사는 us-east-1 리전과 us-west-1 리전에서 운영합니다. 회사는 온프레미스 데이터 센터를 us-east-1의 AWS 환경에 연결하는 솔루션을 설계하고 있습니다. 솔루션은 두 개의 AWS Direct Connect 연결을 사용합니다. us-west-1의 VPC에서 데이터 센터로의 트래픽은 Direct Connect 연결을 통해 이동해야 합니다. 네트워크 엔지니어는 Direct Connect gateway를 사용하여 us-west-1의 VPC에서 데이터 센터로의 인바운드 트래픽에 영향을 주기 위해 두 Direct Connect 연결 간에 액티브-패시브 기능을 설정해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터 센터에서 기본 연결의 로컬 선호도를 보조 연결의 로컬 선호도보다 높게 설정합니다.",
      "B": "AS path prepending을 사용하여 기본 연결의 AS path를 보조 연결의 AS path보다 길게 설정합니다.",
      "C": "로컬 선호도 BGP 커뮤니티 태그를 사용하여 기본 연결의 접두사에 7224:7300 로컬 선호도 BGP 커뮤니티 태그를 적용합니다. 보조 연결의 접두사에 7224:7100 로컬 선호도 BGP 커뮤니티 태그를 적용합니다.",
      "D": "로컬 선호도 BGP 커뮤니티 태그를 사용하여 기본 연결의 접두사에 7224:9300 로컬 선호도 BGP 커뮤니티 태그를 적용합니다. 보조 연결의 접두사에 7224:9100 로컬 선호도 BGP 커뮤니티 태그를 적용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Local Preference BGP Community Tag — AWS Direct Connect에서 지원하는 커뮤니티 태그\n▸ 7224:9300 — 높은 로컬 선호도 (preferred primary path)\n▸ 7224:9100 — 낮은 로컬 선호도 (backup path)\n\n【정답 포인트】\n▸ AWS Direct Connect는 특정 커뮤니티 태그만 인식 (7224:93xx, 7224:91xx)\n▸ 7224:9300 > 7224:9100 → 액티브-패시브 설정\n▸ 데이터 센터에서 태그 적용 시 VPC로의 인바운드 영향\n▸ Direct Connect Gateway를 통한 리전 간 라우팅 제어\n\n【오답 체크】\n(A) 로컬 선호도는 온프레미스에서만 작동 → VPC의 인바운드 제어 불가\n(B) AS path prepending은 비효율적 → Direct Connect는 커뮤니티 태그 선호\n(C) 잘못된 커뮤니티 태그값 (7224:73xx, 7224:71xx) → AWS에서 인식 안 함\n\n【시험 포인트】\nDirect Connect 특정 커뮤니티 태그 사용 (7224:93xx) → 데이터 센터에서 설정 → VPC 인바운드 경로 제어",
    "en_q": "A company operates in the us-east-1 Region and the us-west-1 Region. The company is designing a solution to connect an on-premises data center to the company's AWS environment in us-east-1. The solution uses two AWS Direct Connect connections. Traffic from us-west-1 to the data center needs to traverse the Direct Connect connections. A network engineer needs to set up active-passive functionality across the two Direct Connect connections by using a Direct Connect gateway to influence inbound traffic from VPCs that are in us-west-1 to the data center. Which solution will meet these requirements?",
    "en_opts": {
      "A": "At the data center, set the local preference for the primary connection to be higher than the local preference for the secondary connection.",
      "B": "Use AS path prepending to set the AS path on the primary connection to be longer than the AS path on the secondary connection.",
      "C": "Use local preference BGP community tags to apply the 7224:7300 local preference BGP community tag to the prefixes for the primary connection. Apply the 7224:7100 local preference BGP community tag to the prefixes for the secondary connection.",
      "D": "Use local preference BGP community tags to apply the 7224:9300 local preference BGP community tag to the prefixes for the primary connection. Apply the 7224:9100 local preference BGP community tag to the prefixes for secondary connection."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394076-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 274,
    "question": "회사는 온프레미스 데이터 센터에서 transit gateway로의 단일 AWS Site-to-Site VPN 연결을 가지고 있습니다. 단일 ISP가 Site-to-Site VPN 연결을 제공합니다. 여러 VPC가 transit gateway에 연결되어 있습니다. Site-to-Site VPN 연결이 사용하는 customer gateway가 실패합니다. 연결이 완전히 손실되지만 회사의 네트워크 팀은 알림을 받지 못합니다. 네트워크 팀은 단일 customer gateway가 다시 실패할 경우에 대비하여 1주일 내에 중복성을 구현해야 합니다. 팀은 Amazon CloudWatch 알람을 사용하여 Site-to-Site VPN 연결의 모든 터널이 실패하면 Amazon Simple Notification Service(Amazon SNS) 주제로 알림을 보내려고 합니다. 이 요구사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기존 customer gateway를 새 라우터로 교체합니다. transit gateway로 새로운 Site-to-Site VPN 연결을 만듭니다. 각 VPN 연결에 대해 VPN 연결의 CloudWatch TunnelState 알람을 설정합니다. 값 0을 사용합니다.",
      "B": "두 번째 customer gateway와 두 번째 ISP를 사용합니다. transit gateway로 새로운 Site-to-Site VPN 연결을 만듭니다. 각 VPN 연결에 대해 VPN 연결의 CloudWatch TunnelState 알람을 설정합니다. 값 1 미만을 사용합니다.",
      "C": "기존 Site-to-Site VPN 연결에 AWS Direct Connect 연결을 추가합니다. transit gateway로 연결합니다. 각 VPN 연결에 대해 VPN 연결의 CloudWatch TunnelState 알람을 설정합니다. 값 failed를 사용합니다.",
      "D": "기존 ISP와 함께 두 번째 customer gateway를 사용합니다. transit gateway로 새로운 Site-to-Site VPN 연결을 만듭니다. 각 VPN 연결에 대해 VPN 연결의 CloudWatch TunnelState 알람을 설정합니다. 값 unavailable을 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Redundancy — 단일 실패점 제거\n▸ TunnelState Alarm — VPN 터널 상태 모니터링 (0=down, 1=up)\n▸ ISP 다중화 — 인터넷 연결 중복성\n\n【정답 포인트】\n▸ 두 번째 customer gateway + ISP로 완전한 중복성 확보\n▸ 첫 ISP/gateway 실패 시 자동 장애 조치\n▸ TunnelState < 1 (0 감지) → 하나 이상 터널 다운 감지 → SNS 알림\n▸ 1주일 내 구현 가능 (비용 효율적)\n\n【오답 체크】\n(A) 라우터 교체만으로 ISP 이중화 불가 → 같은 ISP 실패점\n(C) Direct Connect는 VPN 대체 불가 (다른 서비스) → 오버헤드 증가\n(D) 같은 ISP 사용 → ISP 자체 실패 시 여전히 전체 다운\n\n【시험 포인트】\n고가용성 VPN 구성 = 두 개의 customer gateway + 두 개의 ISP + CloudWatch TunnelState 알람",
    "en_q": "A company has multiple firewalls and ISPs for its on-premises data center. The company has a single AWS Site-to-Site VPN connection from the company's on-premises data center to a transit gateway. A single ISP services the Site-to-Site VPN connection. Multiple VPCs are attached to the transit gateway. A customer gateway that the Site-to-Site VPN connection uses fails. Connectivity is completely lost, but the company's network team does not receive a notification. The network team needs to implement redundancy within a week in case a single customer gateway fails again. The team wants to use an Amazon CloudWatch alarm to send notifications to an Amazon Simple Notification Service (Amazon SNS) topic if any tunnel of the Site-to-Site VPN connection fails. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Replace the existing customer gateway with a new router. Create a new Site-to-Site VPN connection to the transit gateway. For each VPN connection, set up a CloudWatch TunnelState alarm for the VPN connection. Use a value of 0 for the alarm.",
      "B": "Use a second customer gateway and a second ISP. Create a new Site-to-Site VPN connection to the transit gateway. For each VPN connection, set up a CloudWatch TunnelState alarm for the VPN connection. Use a value of less than 1 for the alarm.",
      "C": "Add an AWS Direct Connect connection to the existing Site-to-Site VPN connection to the transit gateway. For each VPN connection, set up a CloudWatch TunnelState alarm for the VPN connection. Use a value of failed for the alarm.",
      "D": "Use a second customer gateway with the existing ISP. Create a new Site-to-Site VPN connection to the transit gateway. For each VPN connection, set up a CloudWatch TunnelState alarm for the VPN connection. Use a value of unavailable for the alarm."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394077-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 275,
    "question": "게임 회사는 한 AWS 리전에서 운영합니다. 회사의 아키텍처는 프론트엔드 애플리케이션을 지원하는 Auto Scaling 그룹의 Application Load Balancer(ALB) 및 Amazon EC2 인스턴스를 포함합니다. 회사는 ALB와 통합된 AWS WAF를 사용합니다. ALB는 하나의 security group을 부착했습니다. 회사는 stateful rules가 있는 AWS Network Firewall을 사용합니다. 회사는 Network ACL을 설정했습니다. 회사는 특정 규칙을 위반하는 게임 사용자에 대한 액세스를 자동으로 차단하고 싶어합니다. 회사는 문제가 있는 사용자의 액세스를 1~2시간 동안 임시로 차단하려고 합니다. 회사의 소프트웨어는 문제가 있는 사용자의 소스 IP 주소를 식별할 수 있습니다. 회사는 Amazon DynamoDB에 IP 주소를 저장하는 서버리스 솔루션을 만들었습니다. 회사는 기존 서버리스 아키텍처를 사용하여 문제가 있는 사용자를 자동으로 차단하고 싶어합니다. 이 요구사항을 가장 확장 가능한 방식으로 충족하는 솔루션은 무엇입니까? (둘 선택)",
    "options": {
      "A": "서버리스 솔루션에서 업데이트하는 새로운 AWS WAF IP 세트를 만듭니다. IP 세트의 모든 주소에서의 트래픽을 차단하는 AWS WAF 거부 규칙을 도입합니다.",
      "B": "서버리스 솔루션을 구성하여 Network ACL을 수정하여 문제가 있는 사용자의 IP 주소에서 트래픽을 차단합니다.",
      "C": "서버리스 솔루션을 구성하여 ALB security group을 수정하여 문제가 있는 사용자의 IP 주소에서 트래픽을 차단합니다.",
      "D": "서버리스 솔루션에서 업데이트하는 새로운 AWS WAF IP 세트를 만듭니다. IP 세트와 일치하는 소스의 트래픽을 서버리스 솔루션을 위한 새 API로 리디렉션하는 AWS WAF 규칙을 만듭니다.",
      "E": "문제가 있는 사용자의 IP 주소에서 트래픽을 삭제하는 AWS Network Firewall stateless rule을 만듭니다. 서버리스 솔루션을 구성하여 새로운 규칙을 문제가 있는 사용자의 IP 주소로 업데이트합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ AWS WAF IP Set — 동적으로 업데이트 가능한 IP 주소 목록\n▸ Network Firewall Stateless Rule — 즉시 적용되는 필터링 규칙\n▸ Scalability — 대규모 IP 목록 처리 능력\n\n【정답 포인트】\n(A) WAF IP Set은 스케일에 최적화됨 → 수천 개 IP 관리 가능\n(E) Network Firewall stateless rule도 즉시 패킷 필터링 → 스케일 가능\n▸ 두 솔루션 모두 서버리스와 연동 가능\n▸ 1-2시간 TTL로 자동 차단 해제 구현\n▸ ALB 또는 NACL 수정은 스케일링에 부적합\n\n【오답 체크】\n(B) NACL 수정은 보통 느림 → 규칙 개수 제한 (초당 요청 수 제한) → 확장 어려움\n(C) Security group 수정도 느림 → 규칙 개수 제한 → 확장 불가\n(D) 리디렉션만으로 실제 차단 불가 → 추가 검증 로직 필요\n\n【시험 포인트】\nWAF IP Set + Network Firewall Stateless Rule = 스케일 가능한 IP 차단 → 서버리스와 자동화 가능",
    "en_q": "A gaming company operates in one AWS Region. The company's architecture includes an Application Load Balancer (ALB) and Amazon EC2 instances in an Auto Scaling group that support a frontend application. The company uses AWS WAF integrated with the ALB. The ALB has one security group attached to it. The company uses AWS Network Firewall with stateful rules. The company has set up Network ACLs. The company wants to automatically block access for game users who violate specific rules. The company wants to temporarily block access for problematic users for 1 to 2 hours. The company's software can identify the source IP addresses of problematic users. The company has created a serverless solution to store the IP addresses in Amazon DynamoDB. The company wants to use its existing serverless architecture to automatically block the problematic users. Which solution will meet these requirements in the MOST scalable way? (Choose two.)",
    "en_opts": {
      "A": "Create a new AWS WAF IP set that the serverless solution updates. Introduce an AWS WAF deny rule to block traffic from any address in the IP set.",
      "B": "Configure the serverless solution to modify the network ACLs to block traffic from the IP addresses of the problematic users.",
      "C": "Configure the serverless solution to modify the ALB security group to block traffic from the IP addresses of the problematic users.",
      "D": "Create a new AWS WAF IP set that is updated by the serverless solution. Create an AWS WAF rule to redirect traffic from sources that match the IP set to a new API for the serverless solution.",
      "E": "Create an AWS Network Firewall stateless rule to drop traffic from the IP addresses of the problematic users. Configure the serverless solution to update the new rule with the IP addresses of the problematic users."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394078-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 276,
    "question": "회사는 온프레미스 데이터 센터와 AWS 사이에 AWS Direct Connect 연결을 설정하고 있습니다. 회사는 현재 AWS 계정에 단일 VPC를 가지고 있습니다. 온프레미스 데이터 센터는 172.16.0.0/16 CIDR 블록을 사용하고 VPC는 10.1.1.0/24 CIDR 블록을 사용합니다. 회사는 Direct Connect 연결을 하나의 private VIF와 연결합니다. 네트워크 엔지니어는 온프레미스 데이터 센터의 호스트에서 회사의 VPC에 배포된 Amazon EC2 인스턴스로의 SSH 통신이 실패한다는 보고를 받습니다. 네트워크 엔지니어가 조사한 결과 VIF가 정상이고 BGP 피어링 세션이 올바르게 설정되어 있음을 발견합니다. 이 문제를 해결하기 위해 엔지니어가 취해야 할 단계는 무엇입니까? (셋 선택)",
    "options": {
      "A": "온프레미스 네트워크의 광고 경로가 VPC 라우팅 테이블에 있는지 확인합니다. VPC의 서브넷이 온프레미스 네트워크 장비의 라우팅 테이블에 있는지 확인합니다.",
      "B": "customer gateway 라우터의 BGP 커뮤니티 태그 공지가 올바르게 구성되어 있는지 확인합니다.",
      "C": "customer gateway 라우터가 수신하는 접두사의 BGP 커뮤니티 태그를 수락하는지 확인합니다.",
      "D": "VPC Network ACL이 온프레미스 네트워크 접두사에 대한 인바운드 및 아웃바운드 트래픽을 허용하는지 확인합니다.",
      "E": "EC2 인스턴스의 security group이 온프레미스 네트워크 접두사에서의 인바운드 SSH 통신을 허용하는지 확인합니다.",
      "F": "EC2 인스턴스의 security group이 온프레미스 네트워크 접두사로의 아웃바운드 SSH 통신을 허용하는지 확인합니다."
    },
    "answer": "ADE",
    "explanation": "【핵심 용어】\n▸ Routing — 패킷이 올바른 경로로 이동하는지 확인\n▸ Network ACL — 서브넷 레벨 방화벽 (stateless)\n▸ Security Group — 인스턴스 레벨 방화벽 (stateful)\n▸ BGP Community Tags — 라우팅 정책 제어 (선택사항)\n\n【정답 포인트】\n(A) 양방향 경로 확인 → 온프레미스 → VPC 라우팅 필수\n(D) NACL 인/아웃바운드 SSH (포트 22) 허용 확인 → 필수\n(E) EC2 security group 인바운드 SSH 허용 확인 → 필수\n▸ BGP 세션이 이미 up인 상태 → 라우팅 기본 설정은 정상\n▸ 실제 SSH 연결 실패 → 경로/필터 문제\n\n【오답 체크】\n(B) BGP 커뮤니티 태그는 선택사항 → 기본 connectivity에는 불필요\n(C) \n(B) 와 동일 → 커뮤니티 태그 미지원해도 기본 경로 작동\n(F) SSH는 상태추적이므로 아웃바운드 명시적 허용 불필요 → stateful 특성\n\n【시험 포인트】\nDirect Connect 연결 문제 해결 = 라우팅 확인 → NACL 확인 → Security Group SSH 인바운드 확인",
    "en_q": "A company is setting up an AWS Direct Connect connection between the company's on-premises data center and AWS. The company currently has a single VPC in its AWS account. The on-premises data center uses the 172.16.0.0/16 CIDR block, and the VPC uses the 10.1.1.0/24 CIDR block. The company associates the Direct Connect connection to one private VIF. A network engineer receives reports that SSH communication from hosts that are in the company's on-premises data center to Amazon EC2 instances that are deployed in the company's VPC is failing. The network engineer investigates and finds that the VIF is up and a BGP peering session has been established properly. Which steps should the engineer take to troubleshoot this issue? (Choose three.)",
    "en_opts": {
      "A": "Ensure that the advertised route for the on-premises network is present in the VPC route tables. Ensure that the VPC's subnets are present in the route tables of the on-premises network equipment.",
      "B": "Ensure that BGP community tags announcements from the customer gateway router are configured properly.",
      "C": "Ensure that the customer gateway router accepts BGP community tags in the prefixes the router receives.",
      "D": "Ensure that the VPC network ACLs allow inbound and outbound traffic for the on-premises network prefix.",
      "E": "Ensure that the security groups for the EC2 instances allow inbound SSH communication from the on-premises network prefix.",
      "F": "Ensure that the security groups for the EC2 instances allow outbound SSH communication from the on-premises network prefix."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394079-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 277,
    "question": "회사는 온프레미스 네트워크를 us-east-1 리전의 VPC에 연결해야 합니다. 연결은 최대 전송 단위(MTU) 9,000바이트를 지원해야 하고 고가용성이어야 합니다. 이 요구사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Site-to-Site VPN을 사용하여 2개의 VPN을 만듭니다. 동일한 VPC의 2개의 virtual private gateway에 2개의 연결을 사용합니다.",
      "B": "AWS Site-to-Site VPN을 사용하여 2개의 VPN을 만듭니다. VPC 첨부 파일이 있는 단일 transit gateway에 2개의 연결을 사용합니다.",
      "C": "다중 사이트, 비중복 AWS Direct Connect 배포를 만듭니다. 2개의 Direct Connect 연결을 2개의 별도 Direct Connect 위치에 사용합니다.",
      "D": "다중 사이트, 중복 AWS Direct Connect 배포를 만듭니다. 2개의 Direct Connect 연결을 1개 Direct Connect 위치에 사용하고 2개의 연결을 두 번째 Direct Connect 위치에 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ MTU 9000바이트 — Jumbo Frames 지원 필수\n▸ Site-to-Site VPN — MTU 최대 1500바이트 (IPSec 오버헤드)\n▸ Direct Connect — MTU 1500-9000바이트 지원\n▸ 고가용성 — 이중화 경로 필요\n\n【정답 포인트】\n▸ VPN은 MTU 9000 미지원 → Direct Connect 필수\n▸ 다중 사이트 배포 = 2개 위치에서 2개 연결 = 고가용성\n▸ 비중복 배포 = 1개 위치 다운 시에도 다른 위치 활성\n▸ 비용 효율 = 중복 배포보다 저렴 (4개 연결 vs 2개)\n\n【오답 체크】\n(A) VPN MTU 제한 (1500바이트) → 9000바이트 요구사항 미충족\n(B) VPN MTU 제한 동일 → 요구사항 미충족\n(D) 중복 배포는 비용 2배 → 비용 비효율적 (2개 위치 이중화 불필요)\n\n【시험 포인트】\nMTU 9000바이트 = Direct Connect 필수 → 비중복 다중 사이트 = 비용 최소 고가용성",
    "en_q": "A company needs to connect its on-premises network to a VPC in the us-east-1 Region. The connection must support a maximum transmission unit (MTU) of 9,000 bytes and must be highly available. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Use AWS Site-to-Site VPN to create two VPNs. Use two connections to two virtual private gateways that are in the same VPC.",
      "B": "Use AWS Site-to-Site VPN to create two VPNs. Use two connections to a single transit gateway that has a VPC attachment.",
      "C": "Create a multi-site, nonredundant AWS Direct Connect deployment. Use two Direct Connect connections to two separate Direct Connect locations.",
      "D": "Create a multi-site, redundant AWS Direct Connect deployment. Use two Direct Connect connections to one Direct Connect location and two connections to a second Direct Connect location."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394080-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 278,
    "question": "네트워크 엔지니어는 회사의 AWS 인프라를 유지 관리합니다. 네트워크 엔지니어는 AWS Transit Gateway를 사용하여 허브 및 스포크 아키텍처를 설정했습니다. 네트워크 엔지니어는 공유 서비스 VPC를 만들어 interface VPC endpoint에 대한 액세스를 중앙화했습니다. 회사는 AWS Organizations를 사용하여 단일 조직에서 여러 팀에 대한 AWS 계정을 관리합니다. 회사의 각 팀은 별도의 계정과 VPC를 가지고 있습니다. 모든 팀 계정에 interface VPC endpoint에 대한 액세스가 필요합니다. 네트워크 엔지니어는 각 계정에 최소 필요한 액세스 권한을 부여하는 솔루션이 필요합니다. 각 팀의 계정은 승인된 interface VPC endpoint 목록에만 액세스할 수 있어야 합니다. 솔루션은 현재 아키텍처에 미치는 영향이 최소여야 합니다. 이 요구사항을 가장 적은 운영 오버헤드로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 팀 계정에 대해 별도의 공유 서비스 VPC를 만듭니다. 각 VPC에 팀이 사용할 권한이 있는 interface VPC endpoint를 포함시킵니다. 고유한 transit gateway 라우팅 테이블을 사용하여 각 팀의 스포크 VPC를 팀의 공유 서비스 VPC에 연결합니다.",
      "B": "공유 서비스 VPC의 interface VPC endpoint에 security group을 적용합니다. 각 security group을 구성하여 승인된 팀 스포크 VPC의 CIDR 블록만 허용하도록 설정합니다. security group에 포함된 endpoint에 액세스할 수 있습니다.",
      "C": "액세스 권한이 있는 각 팀에 대해 고유한 interface VPC endpoint를 만듭니다. 공유 서비스 VPC에 대한 라우팅을 업데이트하여 각 팀의 CIDR 블록이 팀이 액세스할 권한이 있는 endpoint 세트에만 액세스할 수 있도록 합니다.",
      "D": "각 interface VPC endpoint와 endpoint policy를 연결합니다. 각 정책에서 해당 서비스에 액세스할 권한이 있는 계정의 트래픽을 제외한 모든 트래픽을 거부합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Endpoint Policy — VPC endpoint 수준의 액세스 제어\n▸ Least Privilege — 최소 권한 원칙\n▸ Centralized Control — 중앙에서 권한 관리\n▸ 최소 운영 오버헤드 — 추가 VPC/Endpoint 불필요\n\n【정답 포인트】\n▸ Endpoint Policy로 account별 접근 제어 → IAM처럼 작동\n▸ 각 endpoint마다 고유 policy → 팀별 권한 분리\n▸ 기존 공유 서비스 VPC 구조 유지 → 아키텍처 영향 최소\n▸ 정책 기반이므로 확장 쉬움 (새 팀 추가 시 정책만 수정)\n\n【오답 체크】\n(A) 각 팀마다 별도 VPC 생성 → 비용/관리 오버헤드 증가\n(B) Security group은 IP 기반 제어만 가능 → 계정 레벨 통제 불가\n(C) 중복된 endpoint 생성 → 비용/관리 복잡도 증가\n\n【시험 포인트】\nEndpoint Policy = 계정별 접근 제어 최적화 → 기존 구조 유지 → 최소 오버헤드",
    "en_q": "A network engineer maintains a company's AWS infrastructure. The network engineer used AWS Transit Gateway to set up a hub and spoke architecture. The network engineer created a shared services VPC to centralize access to interface VPC endpoints. The company uses AWS Organizations to manage AWS accounts for multiple teams in a single organization. Each team in the company has a separate account and VPC. All the team accounts require access to the interface VPC endpoints. The network engineer needs a solution to grant each account the minimum required access. Each team's account must have access only to a list of authorized interface VPC endpoints. The solution must have minimal effect on the current architecture. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create a separate shared services VPC for each team account. Include the interface VPC endpoints that the team is authorized to use in each VPC. Use a unique transit gateway route table to connect each team's spoke VPC to the team's shared services VPC.",
      "B": "Apply security groups to the interface VPC endpoints that are in the shared services VPC. Configure each security group to allow only the CIDR block of the team spoke VPCs that are authorized to use the endpoints included in the security group.",
      "C": "Create a unique interface VPC endpoint for each team that is authorized to access a service. Update routing for the shared services VPC so that the CIDR block for each team can access only the set of endpoints the team is authorized to access.",
      "D": "Associate an endpoint policy with each interface VPC endpoint. In each policy, deny all the traffic except for traffic from accounts that are authorized to access the corresponding service."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394081-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 279,
    "question": "글로벌 네트워크 서비스 공급자는 고객을 위해 관리되는 AWS Direct Connect 연결을 배포합니다. 회사는 모니터링을 기존 티켓팅 시스템에 통합하려고 합니다. 티켓팅 시스템은 회사의 VPC에서 여러 EC2 인스턴스에서 실행됩니다. 티켓팅 시스템은 REST API를 사용합니다. 티켓팅 시스템은 최소 지연 시간으로 이벤트를 수신해야 합니다. 회사는 하루에 평균 1개의 이벤트를 수신할 것으로 예상합니다. 회사는 기존 IaC(Infrastructure as Code) 도구를 사용하여 모니터링 통합 솔루션을 구성하려고 합니다. 이 요구사항을 가장 비용 효율적인 방식으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EventBridge 규칙을 구성하여 AWS Lambda 함수로 이벤트를 보냅니다. Lambda 함수를 구성하여 이벤트를 처리하고 티켓팅 시스템의 REST API로 이벤트를 보냅니다.",
      "B": "Amazon CloudWatch에서 예약된 이벤트를 구성하여 1분마다 한 번씩 AWS Lambda 함수를 실행합니다. 함수를 구성하여 AWS API를 폴링하여 Direct Connect 연결 상태의 변경 사항을 감지합니다. 함수가 상태 변경을 감지할 때 티켓팅 시스템의 REST API에 티켓을 제출하도록 함수를 구성합니다.",
      "C": "AWS API를 폴링하여 Direct Connect 연결 상태의 변경 사항을 감지하고 티켓팅 시스템의 REST API에 티켓을 제출하는 스크립트를 작성합니다. 스크립트를 티켓팅 시스템의 EC2 인스턴스에 배포합니다. 운영 체제 구성을 사용하여 스크립트를 1분마다 한 번씩 실행하도록 예약합니다.",
      "D": "Amazon EventBridge 규칙을 구성하여 이벤트를 Amazon DynamoDB 테이블로 보냅니다. Amazon DynamoDB Streams를 사용하여 AWS Lambda 함수로 이벤트를 보냅니다. 함수를 구성하여 이벤트를 처리하고 티켓팅 시스템의 REST API로 이벤트를 보냅니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ EventBridge — AWS 서비스의 이벤트 기반 아키텍처\n▸ IaC 도구 — Terraform, CloudFormation 등\n▸ Direct Connect Events — 연결 상태 변경 이벤트 제공\n▸ 최소 비용 — 이벤트 기반 모델 (폴링 불필요)\n\n【정답 포인트】\n▸ EventBridge는 Direct Connect 이벤트를 네이티브 지원\n▸ Lambda는 IaC 도구로 쉽게 구성 가능\n▸ 이벤트 발생 시에만 Lambda 실행 → 하루 1회 = 최소 비용\n▸ 최소 지연 시간 (폴링 기반이 아닌 푸시 이벤트)\n\n【오답 체크】\n(B) CloudWatch 예약 이벤트는 매분 실행 → 1,440회/일 불필요 실행 → 비용 증가\n(C) EC2 인스턴스 폴링 → 서버리스 아키텍처 위배 → 비용 증가\n(D) DynamoDB + Streams는 불필요한 중간 계층 → 복잡도 증가, 비용 증가\n\n【시험 포인트】\nEventBridge 이벤트 기반 아키텍처 = 이벤트 발생 시에만 처리 = 비용 최소화 + IaC 호환",
    "en_q": "A global network service provider deploys managed AWS Direct Connect connections for its customers. The company wants to integrate monitoring for the connections into its existing ticketing system. The ticketing system runs in the company's VPC on multiple EC2 instances. The ticketing system uses a REST API. The ticketing system must receive events with minimal latency. The company expects to receive an average of 1 event each day. The company wants to use its existing infrastructure as code (IaC) tooling to configure the monitoring integration solution. Which solution will meet these requirements in the MOST cost-effective way?",
    "en_opts": {
      "A": "Configure an Amazon EventBridge rule to send events to an AWS Lambda function. Configure the Lambda function to process the events and to send events to the ticketing system's REST API.",
      "B": "Configure a scheduled event in Amazon CloudWatch to run an AWS Lambda function once every minute. Configure the function to poll the AWS API to detect changes in the Direct Connect connection state. Configure the function to submit tickets to the ticketing system's REST API when the function detects state changes.",
      "C": "Write a script to poll the AWS API to detect changes in Direct Connect connection state and to submit tickets to the ticketing system's REST API. Deploy the script to the ticketing system's EC2 instance. Schedule the script to run once every minute by using the operating system configuration.",
      "D": "Configure an Amazon EventBridge rule to send events directly to an Amazon DynamoDB table. Use Amazon DynamoDB Streams to send the events to an AWS Lambda function. Configure the function to process the events and to send the events to the ticketing system's REST API."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394082-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 280,
    "question": "네트워크 엔지니어는 2개의 가용 영역에 Application Load Balancer(ALB)를 배포합니다. 하나의 target group이 있습니다. 첫 번째 가용 영역에 4개의 Amazon EC2 인스턴스 대상이 있고 두 번째 가용 영역에 6개의 EC2 인스턴스 대상이 있습니다. 테스트 중에 네트워크 엔지니어는 첫 번째 가용 영역의 대상이 트래픽의 40%를 수신하고 두 번째 가용 영역의 대상이 트래픽의 60%를 수신함을 알립니다. 네트워크 엔지니어는 구성을 업데이트하여 트래픽이 가용 영역을 넘지 않도록 해야 합니다. 네트워크 엔지니어는 가용 영역 간의 트래픽을 50%씩 분할하려고 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "target group에 대해 cross-zone load balancing을 비활성화합니다.",
      "B": "ALB에 대해 cross-zone load balancing을 비활성화합니다.",
      "C": "첫 번째 가용 영역의 모든 대상에 대해 cross-zone load balancing을 비활성화합니다.",
      "D": "두 번째 가용 영역의 모든 대상에 대해 cross-zone load balancing을 비활성화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Cross-Zone Load Balancing — AZ 간 트래픽 분배 활성/비활성화\n▸ AZ 격리 — ALB 레벨에서 가용 영역별로 독립적으로 트래픽 처리\n▸ 50:50 분할 — 각 AZ가 독립적으로 자신의 대상에 트래픽 분배\n\n【정답 포인트】\n▸ ALB 레벨에서 cross-zone 비활성화\n▸ 각 AZ는 자신의 대상에만 트래픽 전송 (6+4=10개 대상 무시)\n▸ AZ1: 4개 대상에 동등 분배 = 각 25%\n▸ AZ2: 6개 대상에 동등 분배 = 각 16.67%\n▸ 전체 트래픽: AZ1 50%, AZ2 50%\n▸ AZ 간 트래픽 불가\n\n【오답 체크】\n(A) Target group 레벨 설정 불가 (ALB는 이 옵션 미지원)\n(C/D) 개별 대상 레벨 설정 불가 → AZ 격리는 ALB 수준 결정\n\n【시험 포인트】\nCross-Zone Load Balancing 비활성화는 ALB 레벨 설정 → 각 AZ 독립 분배 → 50:50 분할 달성",
    "en_q": "A network engineer deploys an Application Load Balancer (ALB) in two Availability Zones. There is one target group. There are four Amazon EC2 instance targets in the first Availability Zone and six EC2 instance targets in the second Availability Zone. During testing, the network engineer notices that the targets in the first Availability Zone receive 40% of the traffic. The targets in the second Availability Zone receive 60% of the traffic. The network engineer needs to update the configuration to prevent traffic from crossing Availability Zones. The network engineer wants to achieve a 50% traffic split across the Availability Zones. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Disable cross-zone load balancing for the target group.",
      "B": "Disable cross-zone load balancing for the ALB.",
      "C": "Disable cross-zone load balancing for all the targets in the first Availability Zone.",
      "D": "Disable cross-zone load balancing for all the targets in the second Availability Zone."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394083-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 281,
    "question": "회사는 Network Load Balancer(NLB) 뒤에서 Amazon EC2 인스턴스에 회사 웹사이트를 호스팅합니다. NLB는 하나의 TLS 리스너를 가지고 있습니다. 회사는 AWS WAF를 사용하여 웹사이트의 보안을 강화하려고 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "NLB에 Elastic IP 주소를 연결합니다. Elastic IP 주소와 AWS WAF 웹 ACL을 연결합니다.",
      "B": "NLB를 Application Load Balancer(ALB)로 교체합니다. ALB와 AWS WAF 웹 ACL을 연결합니다.",
      "C": "NLB와 AWS WAF 웹 ACL을 연결합니다.",
      "D": "NLB 뒤의 EC2 인스턴스와 AWS WAF 웹 ACL을 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS WAF — 웹 애플리케이션 방화벽 (L7 필터링)\n▸ NLB — Layer 4 로드 밸런싱 (TCP/UDP)\n▸ ALB — Layer 7 로드 밸런싱 (HTTP/HTTPS)\n▸ WAF 지원 — ALB/CloudFront/API Gateway/AppSync만 지원\n\n【정답 포인트】\n▸ AWS WAF는 NLB와 직접 연동 불가\n▸ ALB는 WAF 네이티브 지원\n▸ ALB는 HTTP/HTTPS 기반 (회사 웹사이트 TLS 리스너)\n▸ ALB로 교체 = WAF 통합 가능\n\n【오답 체크】\n(A) Elastic IP는 WAF와 무관 → Elastic IP 자체는 보안 필터링 불가\n(C) NLB는 WAF 미지원 → AWS 공식 문서에서 미지원 서비스\n(D) EC2 직접 연결 불가 → WAF는 로드 밸런서/CloudFront만 대응\n\n【시험 포인트】\nAWS WAF는 ALB/CloudFront/API Gateway만 지원 → NLB는 미지원 → ALB로 변경 필요",
    "en_q": "A company hosts a corporate website on Amazon EC2 instances behind a Network Load Balancer (NLB). The NLB has one TLS listener. The company wants to use AWS WAF to enhance security for the website. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Attach an Elastic IP address to the NLB. Associate an AWS WAF web ACL with the Elastic IP address.",
      "B": "Replace the NLB with an Application Load Balancer (ALB). Associate an AWS WAF web ACL with the ALB.",
      "C": "Associate an AWS WAF web ACL with the NLB.",
      "D": "Associate an AWS WAF web ACL with the EC2 instances that are behind the NLB."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394084-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 282,
    "question": "보안 회사는 Amazon Route 53 공개 호스팅 영역에 DNS 레코드를 저장하는 도메인을 가지고 있습니다. 회사는 도메인에 대해 DNS Security Extensions(DNSSEC) 서명을 구성했습니다. 도메인에는 서브도메인이 없습니다. 네트워크 엔지니어는 도메인에 대한 DNSSEC 서명을 비활성화해야 합니다. 네트워크 엔지니어는 DNS 중단을 야기하지 않아야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "DNSSEC 서명을 비활성화합니다. 리소스 레코드 서명(RRSIG) 레코드를 삭제합니다. RSIG 레코드의 TTL이 경과될 때까지 기다립니다. 키 서명 키(KSK)를 비활성화합니다.",
      "B": "키 서명 키(KSK)를 비활성화합니다. KSK 레코드의 TTL이 경과될 때까지 기다립니다. DNSSEC 서명을 비활성화합니다.",
      "C": "부모 도메인에서 지정된 서명자(DS) 레코드를 삭제합니다. DS 레코드의 TTL이 경과될 때까지 기다립니다. DNSSEC 서명을 비활성화합니다. 키 서명 키(KSK)를 비활성화합니다.",
      "D": "키 서명 키(KSK)를 비활성화합니다. 도메인의 지정된 서명자(DS) 레코드를 삭제합니다. DS 레코드의 TTL이 경과될 때까지 기다립니다. DNSSEC 서명을 비활성화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ DS Record — 부모 도메인에 저장되는 위임 서명자\n▸ KSK — Key Signing Key (DNSSEC 검증에 필수)\n▸ RRSIG — Resource Record Signature (각 레코드의 서명)\n▸ TTL — 캐시 만료 시간 (DNS 일관성 유지)\n\n【정답 포인트】\n▸ DS 레코드 삭제가 첫 단계 (부모에서의 신뢰 체인 끊기)\n▸ DS TTL 경과 → 캐시된 DS 정보 만료\n▸ DNSSEC 서명 비활성화 → 새로운 서명 생성 중단\n▸ KSK 비활성화 → 기존 서명 검증 불가\n▸ 순서 중요 = DNS 중단 방지\n\n【오답 체크】\n(A) KSK 비활성화 전에 DNSSEC 비활성화 → 중간 상태에서 검증 실패 가능\n(B) DS 레코드 삭제 없음 → 부모 도메인의 영역이 여전히 검증 시도 → SERVFAIL\n(D) DS 레코드 삭제 후 TTL 대기하기 전에 KSK 비활성화 → 캐시 일관성 문제\n\n【시험 포인트】\nDNSSEC 비활성화 순서: DS 레코드 삭제 → TTL 대기 → DNSSEC 비활성화 → KSK 비활성화 (중단 방지)",
    "en_q": "A security company has a domain that stores DNS records in an Amazon Route 53 public hosted zone. The company has configured DNS Security Extensions (DNSSEC) signing for the domain. The domain has no subdomains. A network engineer must disable DNSSEC signing for the domain. The network engineer must not cause any DNS outage. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Disable DNSSEC signing. Delete the resource record signature (RRSIG) records. Wait for the TTL of the RSIG records to elapse. Deactivate the key-signing keys (KSKs).",
      "B": "Deactivate the key-signing keys (KSKs). Wait for the TTL of the KSK records to elapse. Disable DNSSEC signing.",
      "C": "Delete the designated signer (DS) record in the parent domain. Wait for the TTL of the DS record to elapse. Disable DNSSEC signing. Deactivate the key-signing keys (KSKs).",
      "D": "Deactivate the key-signing keys (KSKs). Delete the designated signer (DS) record of the domain. Wait for the TTL of the DS record to elapse. Disable DNSSEC signing."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394085-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 283,
    "question": "회사는 내부 티켓팅 시스템과의 통합을 구축해야 합니다. 통합에는 AWS Lambda 함수가 필요합니다. Lambda 함수는 내부 티켓팅 시스템의 일부인 REST API를 쿼리해야 합니다. 티켓팅 시스템의 REST API는 회사의 VPC의 프라이빗 서브넷에 있는 Application Load Balancer(ALB)를 통해서만 액세스할 수 있습니다. 회사는 다음의 IaC(Infrastructure as Code)를 사용하여 Lambda 함수를 배포합니다: IaC 배포는 성공하지만 배포된 Lambda 함수는 티켓팅 시스템에 액세스하려고 할 때 시간 초과됩니다. 회사가 Lambda 함수에 티켓팅 시스템에 액세스할 수 있는 기능을 제공할 수 있는 방법은 무엇입니까?",
    "options": {
      "A": "AWS PrivateLink 엔드포인트 서비스를 만듭니다. Lambda 함수에 서비스를 노출합니다.",
      "B": "새로운 aws_lb_target_group_attachment 리소스를 만들어 Lambda 함수를 ALB의 target group에 연결합니다. ALB의 ARN과 Lambda 함수의 ARN을 참조하도록 리소스를 구성합니다.",
      "C": "Lambda 함수의 security group을 업데이트하여 VPC의 트래픽을 허용하는 적절한 인바운드 규칙을 포함시킵니다.",
      "D": "Lambda 함수 리소스에 vpc_config 섹션을 추가합니다. vpc_config 섹션을 구성하여 ALB에 대한 액세스를 허용하는 하나 이상의 security group ID와 하나 이상의 프라이빗 서브넷 ID를 포함시킵니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ VPC Endpoint — Lambda가 VPC 내 리소스에 접근하기 위한 설정\n▸ vpc_config — Lambda 함수의 VPC 연결 설정 (security group + subnet)\n▸ Private Subnet ALB — VPC 내부 리소스이므로 Lambda도 VPC 내에서 접근 필수\n\n【정답 포인트】\n▸ Lambda 기본 = VPC 외부 배포 (인터넷 접근만 가능)\n▸ 프라이빗 ALB 접근 = VPC 내부 네트워크 필요\n▸ vpc_config 추가 = Lambda를 VPC 서브넷에 배포\n▸ Security group ID = VPC 네트워크 인터페이스 필요\n▸ Private Subnet ID = ALB와 같은 VPC 내 배포\n\n【오답 체크】\n(A) PrivateLink는 서비스 공개용 → 회사 내부 ALB는 불필요\n(B) Lambda는 target group 대상 될 수 없음 (ALB 타겟은 EC2/IP/Lambda만 가능하지만 이 경우는 역방향)\n(C) Security group만으로 충분 안 함 → vpc_config의 subnet이 필요\n\n【시험 포인트】\nLambda에서 VPC 프라이빗 리소스 접근 = vpc_config 필수 (security group + private subnet)",
    "en_q": "A company needs to build an integration with its internal ticketing system. The integration will require an AWS Lambda function. The Lambda function needs to query a REST API that is part of the internal ticketing system. The ticketing system's REST API is accessible only through an Application Load Balancer (ALB) that is in a private subnet in the company's VPC. The company deploys the Lambda function with the following infrastructure as code (IaC): The IaC deployment succeeds, but the deployed Lambda function times out when it tries to access the ticketing system. How can the company give the Lambda function the ability to access the ticketing system?",
    "en_opts": {
      "A": "Create an AWS PrivateLink endpoint service. Expose the service to the Lambda function.",
      "B": "Attach the Lambda function to the ALB's target group by creating a new aws_lb_target_group_attachment resource. Configure the resource to reference both the ALB's ARN and the Lambda function's ARN.",
      "C": "Update the Lambda function's security group to include appropriate inbound rules that permit traffic from the VPC.",
      "D": "Add a vpc_config section to the Lambda function resource. Configure the vpc_config section to include one or more security group IDs and one or more private subnet IDs that permit access to the ALB."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394086-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 284,
    "question": "회사는 dual-stack VPC를 포함하는 여러 애플리케이션 계정을 가지고 있습니다. 회사는 IPv6을 지원하는 중앙화된 DNS 솔루션을 구현하려고 합니다. 네트워크 엔지니어는 공유 서비스 VPC를 배포합니다. 네트워크 엔지니어는 회사의 애플리케이션 VPC, 공유 서비스 VPC, 회사의 온프레미스 환경 간의 네트워크 연결을 설정합니다. IPv4 및 IPv6 트래픽을 지원합니다. 네트워크 엔지니어는 Amazon Route 53을 사용하여 중앙화된 DNS 솔루션을 구현하고 있습니다. 네트워크 엔지니어는 애플리케이션 VPC의 리소스가 온프레미스 DNS 리졸버에 대한 DNS 쿼리를 수행할 수 있도록 해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "공유 서비스 VPC 내의 dual-stack 서브넷에 Route 53 Resolver 아웃바운드 엔드포인트를 만듭니다. AWS Resource Access Manager(AWS RAM)를 사용하여 리졸버 규칙을 애플리케이션 계정에 공유합니다.",
      "B": "공유 서비스 VPC 내의 IPv6만 지원하는 서브넷에 Route 53 Resolver 인바운드 엔드포인트를 만듭니다. AWS Resource Access Manager(AWS RAM)를 사용하여 엔드포인트를 애플리케이션 계정에 공유합니다.",
      "C": "각 애플리케이션 VPC 내의 dual-stack 서브넷에 Route 53 Resolver 아웃바운드 엔드포인트를 만듭니다. AWS Resource Access Manager(AWS RAM)를 사용하여 리졸버 규칙을 애플리케이션 계정에 공유합니다.",
      "D": "각 애플리케이션 VPC 내의 IPv4만 지원하는 서브넷에 Route 53 Resolver 인바운드 엔드포인트를 만듭니다. AWS Resource Access Manager(AWS RAM)를 사용하여 리졸버 규칙을 공유 서비스 계정에 공유합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver Outbound Endpoint — VPC 내부 DNS 쿼리를 온프레미스로 포워딩\n▸ Inbound Endpoint — 온프레미스에서 VPC 리소스의 DNS 쿼리 허용\n▸ Dual-Stack — IPv4/IPv6 모두 지원\n▸ Centralized DNS — 공유 서비스 VPC에서 중앙 관리\n\n【정답 포인트】\n▸ 애플리케이션 VPC → 온프레미스 DNS 리졸버 = 아웃바운드 흐름\n▸ Outbound endpoint가 필요 (인바운드 X)\n▸ Dual-stack 서브넷 = IPv4/IPv6 쿼리 모두 지원\n▸ 공유 서비스 VPC 중앙화 = 관리 단순화\n▸ RAM으로 리졸버 규칙 공유 = 각 계정에서 사용 가능\n\n【오답 체크】\n(B) 인바운드 엔드포인트 = 온프레미스 → VPC 쿼리 (반대 방향)\n(C) 각 VPC마다 배포 = 중앙화 미달성, 오버헤드 증가\n(D) IPv4만 = IPv6 지원 못함, 인바운드 = 방향 틀림\n\n【시험 포인트】\nVPC → 온프레미스 DNS 쿼리 = Outbound Endpoint (공유 VPC) + Dual-Stack + RAM 공유",
    "en_q": "A company has several application accounts that include dual-stack VPCs. The company wants to implement a centralized DNS solution that supports IPv6. A network engineer deploys a shared services VPC. The network engineer sets up network connectivity between the company's application VPCs, the shared services VPC, and the company's on-premises environment with support for IPv4 and IPv6 traffic. The network engineer is using Amazon Route 53 to implement a centralized DNS solution. The network engineer needs to ensure that resources in the application VPCs have the ability to perform DNS queries against an on-premises DNS resolver. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Create a Route 53 Resolver outbound endpoint in the shared services VPC within a dual-stack subnet. Use AWS Resource Access Manager (AWS RAM) to share the resolver rules to the application accounts.",
      "B": "Create a Route 53 Resolver inbound endpoint in the shared services VPC within a subnet that supports only IPv6. Use AWS Resource Access Manager (AWS RAM) to share the endpoint to the application accounts.",
      "C": "Create a Route 53 Resolver outbound endpoint within a dual-stack subnet in each application VPUse AWS Resource Access Manager (AWS RAM) to share the resolver rules to the application accounts.",
      "D": "Create a Route 53 Resolver inbound endpoint within a subnet that supports only IPv4 in each application VPC. Use AWS Resource Access Manager (AWS RAM) to share the resolver rules to the shared services account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394087-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 285,
    "question": "회사는 AWS Organizations에서 조직을 사용하여 많은 VPC와 워크로드를 호스팅하는 많은 AWS 계정을 관리합니다. 회사는 데이터 센터와 AWS 간의 AWS Direct Connect 연결을 가지고 있습니다. 회사는 중앙 네트워크 계정의 transit gateway를 사용하여 워크로드 VPC를 데이터 센터에 연결합니다. 회사는 각 요청자 계정 VPC에 첨부된 태그의 정보를 사용하여 각 transit gateway 첨부 파일을 자동으로 태그 지정하려고 합니다. 회사는 모든 계정에서 IAM 역할을 프로비저닝합니다. 회사는 IAM 역할에 VPC에서 필요한 태그 데이터를 검색할 수 있는 권한과 중앙 네트워크 계정의 주체가 IAM 역할을 호출할 수 있도록 하는 신뢰 정책을 할당합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Identity and Access Management Access Analyzer를 구성하여 새 첨부 파일에 대한 transit gateway를 모니터링합니다. IAM Access Analyzer를 구성하여 요청자 계정의 IAM 역할을 가정하고 첨부 파일을 필요한 정보로 태그 지정하는 AWS Systems Manager runbook을 호출합니다.",
      "B": "SCP를 구성하여 새 첨부 파일에 대한 transit gateway를 모니터링합니다. SCP를 구성하여 첨부 파일을 요청하는 계정의 AWS CloudFormation 스택 템플릿을 호출합니다. 첨부 파일을 태그 지정합니다.",
      "C": "Amazon VPC IP Address Manager(IPAM)를 구성하고 transit gateway를 등록합니다. IPAM을 구성하여 첨부 파일을 위해 transit gateway에서 새 IP 주소가 요청될 때 AWS CDK 함수를 실행합니다. CDK 함수를 구성하여 요청자 계정의 IAM 역할을 가정하고 필요한 정보를 사용하여 첨부 파일을 태그 지정합니다.",
      "D": "AWS Network Manager를 구성하고 transit gateway를 등록합니다. Amazon EventBridge 규칙을 만들어 Network Manager에서 첨부 파일 알림을 수신하고 요청자 계정의 IAM 역할을 가정하는 AWS Lambda 함수를 호출합니다. 필요한 정보를 사용하여 첨부 파일을 태그 지정하도록 Lambda 함수를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Network Manager — AWS 네트워크 리소스 중앙 관리 (Transit Gateway 모니터링)\n▸ EventBridge — AWS 서비스 이벤트 기반 트리거\n▸ Lambda — 크로스 계정 IAM 역할 가정 (STS AssumeRole)\n▸ Auto-tagging — 자동 태그 적용\n\n【정답 포인트】\n▸ Network Manager = Transit Gateway 첨부 파일 이벤트 감지 전문\n▸ EventBridge 규칙 = 이벤트 기반 트리거 (새 첨부 파일)\n▸ Lambda = 서버리스, 크로스 계정 역할 가정 가능\n▸ IAM 역할 가정 = 요청자 계정의 VPC 태그 읽기 권한\n▸ 확장 가능 = 새로운 첨부 파일 자동 감지\n\n【오답 체크】\n(A) Access Analyzer는 정책 분석용 → 이벤트 기반 모니터링 부적합\n(B) SCP는 정책 제어용 → 이벤트 트리거 기능 없음\n(C) IPAM은 IP 주소 관리용 → Transit Gateway 첨부 파일 이벤트 미지원\n\n【시험 포인트】\nNetwork Manager + EventBridge + Lambda = Transit Gateway 첨부 파일 자동 태그 지정",
    "en_q": "A company uses an organization in AWS Organizations to manage many AWS accounts that host many VPCs and workloads. The company has an AWS Direct Connect connection between a data center and AWS. The company uses a transit gateway in a central network account to connect the workload VPCs to the data center. The company wants to tag each transit gateway attachment automatically with information from tags that are attached to each requester account VPC. The company provisions an IAM role in every account. The company assigns the IAM role permissions to retrieve the required tag data from the VPCs and a trust policy that allows principals in the central network account to invoke the IAM role. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure AWS Identity and Access Management Access Analyzer to monitor the transit gateway for new attachments. Configure IAM Access Analyzer to invoke an AWS Systems Manager runbook that assumes the IAM role in the requester account and tags the attachment with the required information.",
      "B": "Configure an SCP to monitor the transit gateway for new attachments. Configure the SCP to invoke an AWS CloudFormation stack template in the account that requests an attachment to tag the attachment.",
      "C": "Configure Amazon VPC IP Address Manager (IPAM) and register the transit gateway. Configure IPAM to run an AWS CDK function when a new IP address is requested from the transit gateway for a new attachment. Configure the CDK function to assume the IAM role in the requester account and to tag the attachment with the required information.",
      "D": "Configure AWS Network Manager and register the transit gateway. Create an Amazon EventBridge rule to receive attachment notifications from Network with the required information. Manager and to invoke an AWS Lambda function that assumes the IAM role in the requester account. Configure the Lambda function to tag the attachment."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394088-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 286,
    "question": "한 회사가 AWS Fargate를 사용하여 많은 컨테이너화된 웹 애플리케이션을 VPC에 배포합니다. 애플리케이션은 모두 HTTPS 표준 포트의 다양한 DNS 이름을 통해 도달 가능해야 합니다. 회사는 Application Load Balancer(ALB)를 사용하여 각 애플리케이션으로의 트래픽을 처리합니다. 회사는 AWS Cloud Development Kit(AWS CDK)를 사용하여 배포 프로세스를 자동화합니다. 회사는 두 가지 유형의 CDK 스택을 사용합니다. 일반 스택은 VPC 자체와 다른 공유 인프라를 구축하는 데 사용됩니다. 또한 각 애플리케이션의 세부 사항과 논리를 포함하는 애플리케이션별 스택 집합을 사용합니다. 회사는 ALB 관련 리소스를 두 가지 스택 유형 간에 올바르게 할당해야 합니다. 공통 스택과 애플리케이션별 스택에 반복 가능한 리소스 할당을 제공할 조합 솔루션은 무엇입니까? (3개 선택)",
    "options": {
      "A": "공통 스택의 ALB 리스너",
      "B": "애플리케이션별 스택의 ALB 리스너",
      "C": "공통 스택의 ALB 리스너 호스트 헤더 규칙",
      "D": "애플리케이션별 스택의 ALB 리스너 호스트 헤더 규칙",
      "E": "공통 스택의 ALB 대상 그룹",
      "F": "애플리케이션별 스택의 ALB 대상 그룹"
    },
    "answer": "ADF",
    "explanation": "【핵심 용어】\n▸ ALB Listener — 포트와 프로토콜 기반 수신 대기\n▸ Host Header Rule — 호스트명 기반 라우팅 규칙\n▸ Target Group — 실제 백엔드 인스턴스 그룹\n\n【정답 포인트】\nALB 리소스 할당의 핵심은 공유 vs 애플리케이션별 구분입니다.\n▸ A (공통 스택의 리스너) — 모든 애플리케이션이 공유하는 HTTPS 포트 수신. 한 번만 설정하면 여러 애플리케이션에서 재사용 가능\n▸ D (애플리케이션별 호스트 헤더 규칙) — 각 애플리케이션의 DNS 이름별로 다른 대상 그룹으로 라우팅. 애플리케이션별 스택에서 관리\n▸ F (애플리케이션별 대상 그룹) — 각 애플리케이션의 Fargate 작업 그룹. 애플리케이션별로 독립적으로 관리되어야 함\n\n【오답 체크】\n(B) 리스너를 애플리케이션별로 만들면 같은 포트에서 중복 발생\n(C) 호스트 헤더 규칙을 공통 스택에 고정하면 새 애플리케이션 추가 시 공통 스택을 매번 수정해야 함\n(E) 대상 그룹을 공통 스택에 두면 애플리케이션별 독립성 상실\n\n【시험 포인트】\nAWS CDK에서 공유 인프라(VPC, ALB)는 공통 스택, 애플리케이션별 가변 부분(라우팅 규칙, 대상 그룹)은 애플리케이션별 스택으로 분리하는 패턴. 확장성과 재사용성을 동시에 달성합니다.",
    "en_q": "A company is using AWS Fargate to deploy many containerized web applications to a VPC. The applications must all be reachable through various DNS names on the standard port for HTTPS traffic. The company uses an Application Load Balancer (ALB) to handle traffic to each of the applications. The company uses the AWS Cloud Development Kit (AWS CDK) to automate the deployment process. The company uses two types of CDK stacks. The company uses one common stack to build the VPC itself and other shared infrastructure. The company also uses a set of application-specific stacks that contain details and logic for each application. The company needs to correctly allocate ALB-related resources between the two types of stacks. Which combination of solutions will provide a repeatable allocation of resources to the common stack and application-specific stacks? (Choose three.)",
    "en_opts": {
      "A": "ALB listener in the common stack",
      "B": "ALB listener in the application-specific stacks",
      "C": "ALB listener host header rule in the common stack",
      "D": "ALB listener host header rule in the application-specific stacks",
      "E": "ALB target group in the common stack",
      "F": "ALB target group in the application-specific stacks"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394089-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 287,
    "question": "한 회사가 여러 AWS 계정에서 애플리케이션을 실행합니다. 회사는 AWS Organizations의 조직을 사용하여 모든 계정을 관리합니다. 회사는 VPC에서 애플리케이션을 실행합니다. 애플리케이션은 서로 통신할 수 있어야 합니다. 회사는 온프레미스 데이터 센터와 AWS 간에 AWS Direct Connect 연결을 설정합니다. 회사는 온프레미스 위치에서 VPC에 액세스할 수 있어야 합니다. 회사는 AWS 환경에 100개 이상의 새로운 애플리케이션과 VPC를 추가할 계획입니다. 연결 솔루션은 향후 성장을 허용하고 데이터 센터에서 AWS로의 연결 프로세스를 단순화해야 합니다. 이 요구 사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "프라이빗 VIF를 사용하여 Direct Connect 연결에 애플리케이션을 호스팅하는 모든 VPC를 연결합니다. 각 애플리케이션 VPC에 가상 프라이빗 게이트웨이를 생성합니다. 데이터 센터의 하드웨어 VPN을 각 VPC의 가상 프라이빗 게이트웨이에 연결합니다. 모든 VPC에서 정적 경로를 구성합니다. 데이터 센터 VPN 어플라이언스를 사용하여 트래픽을 라우팅합니다.",
      "B": "새로운 AWS 계정을 생성하고 네트워크 전송 VPC를 배포합니다. 오픈 소스 VPN 소프트웨어를 실행하는 Amazon EC2 인스턴스를 배포합니다. 각 애플리케이션 VPC에 가상 프라이빗 게이트웨이를 생성합니다. 네트워크 전송 VPC에서 VPN 소프트웨어를 실행하는 인스턴스와 각 가상 프라이빗 게이트웨이 간의 연결을 구성하고 라우팅 테이블을 업데이트합니다. 오픈 소스 VPN을 데이터 센터의 하드웨어 VPN에 연결하고 라우팅을 구성합니다.",
      "C": "새로운 네트워킹 계정에 Transit Gateway를 생성합니다. AWS Resource Access Manager(AWS RAM)를 사용하여 transit gateway 소스 유형의 리소스 공유를 생성합니다. 조직 ID를 입력하고 transit gateway 공유 ID와 공유합니다. 데이터 센터의 고객 게이트웨이에 연결하는 프라이빗 IP VPN을 생성합니다. VPN을 transit gateway에 연결하고 동적 라우팅을 구성합니다.",
      "D": "Direct Connect 게이트웨이를 생성하고 Direct Connect 연결과 연결합니다. 애플리케이션을 호스팅하는 모든 VPC를 Direct Connect 게이트웨이에 연결합니다. 퍼블릭 VIF를 생성하고 게이트웨이에 연결합니다. 퍼블릭 VIF를 사용하여 AWS Site-to-Site VPN 연결을 생성합니다. 데이터 센터의 하드웨어 VPN 어플라이언스에 연결하고 동적 라우팅을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Transit Gateway — 여러 VPC와 온프레미스를 중앙에서 연결하는 라우터\n▸ AWS RAM — 조직 간 리소스 공유 메커니즘\n▸ Direct Connect Gateway — Direct Connect와 VPC 간 연결\n▸ Dynamic Routing — BGP를 통한 자동 경로 학습\n\n【정답 포인트】\n100개 이상의 VPC 추가 확장성을 고려할 때 Transit Gateway가 최적입니다.\n▸ 새 네트워킹 계정에 중앙 Transit Gateway 배치 — 모든 애플리케이션 계정이 공유\n▸ AWS RAM으로 조직 ID 기반 공유 — 계정 추가 시 자동 액세스, 수동 설정 불필요\n▸ 프라이빗 IP VPN으로 온프레미스 연결 — Direct Connect 게이트웨이 없이도 가능\n▸ 동적 라우팅(BGP) — 새 VPC 추가 시 라우팅 자동 업데이트\n\n【오답 체크】\n(A) VPC당 하드웨어 VPN 필요 — 100개 VPC는 관리 불가\n(B) EC2 기반 VPN — 고가용성, 확장성 한계, 운영 부담 높음\n(D) Direct Connect 게이트웨이 + 퍼블릭 VIF — 확장성 부족, VIF 수 제한\n\n【시험 포인트】\n대규모 멀티 VPC 환경에서는 Transit Gateway + AWS RAM 조합이 표준. 계정 수가 증가해도 중앙 관리로 단순화되는 패턴을 이해하는 것이 중요합니다.",
    "en_q": "A company runs applications across multiple AWS accounts. The company uses an organization in AWS Organizations to manage all the accounts. The company runs the applications in VPCs. The applications must be able to communicate with each other. The company establishes an AWS Direct Connect connection between an on-premises data center and AWS. The company needs to be able to access the VPCs from the on-premises location. The company plans to add more than 100 new applications and VPCs to its AWS environment. The connectivity solution must allow for future growth and simplify the connectivity process from the data center to AWS. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Attach all VPCs that host applications to the Direct Connect connection by using private VIFs. Create a virtual private gateway in each application VPC. Connect a hardware VPN in the data center to the virtual private gateway in each VPC. Configure static routes in all VPCs. Use the data center VPN appliance to route traffic.",
      "B": "Create a new AWS account and deploy a network transit VPC. Deploy Amazon EC2 instances that run open source VPN software. Create a virtual private gateway in each application VPC. Configure connections between the instance that runs the VPN software in the network transit VPC and each virtual private gateway, and update the route tables. Connect the open source VPN to a hardware VPN in the data center and configure routing.",
      "C": "Create a transit gateway in a new networking account. Use AWS Resource Access Manager (AWS RAM) to create a resource share that has the transit gateways source type. Enter the organization ID share the ID with the transit gateway. Create a private IP VPN that connects to a customer gateway in the data center. Attach the VPN to the transit gateway and configure dynamic routing.",
      "D": "Create a Direct Connect gateway and associate it with the Direct Connect connection. Attach all VPCs that host applications to the Direct Connect gateway. Create a public VIF and attach it to the gateway. Create an AWS Site-to-Site VPN connection by using the public VIF. Connect to a hardware VPN appliance in the data center and configure dynamic routing."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394090-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 288,
    "question": "한 회사가 VPC 흐름 로그 데이터에서 일부 회사 트래픽이 악의적인 웹 사이트로 이동하는 것을 발견합니다. 회사는 악의적인 웹 사이트로 트래픽을 전송하는 Amazon EC2 인스턴스를 식별하고 인스턴스에서 실행되는 애플리케이션이 손상되었음을 확인합니다. 유사한 보안 이벤트가 과거에 여러 번 회사에서 발생했습니다. 회사는 이전 보안 이벤트에 대응하여 악의적인 웹 사이트를 차단했습니다. 회사는 향후 유사한 보안 이벤트를 방지할 확장 가능한 솔루션이 필요합니다. 최소한의 운영 오버헤드로 이 요구 사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "VPC에서 방화벽 소프트웨어를 실행하는 EC2 인스턴스를 설정합니다. 모든 트래픽을 방화벽 EC2 인스턴스를 통해 라우팅합니다. 방화벽 인스턴스에서 알려진 악의적인 웹 사이트 목록을 유지합니다. 방화벽 인스턴스의 원본 및 대상 확인을 비활성화합니다.",
      "B": "문제가 있는 EC2 인스턴스 앞에 Application Load Balancer(ALB)를 설정합니다. EC2 인스턴스에서 AWS WAF를 활성화합니다.",
      "C": "문제가 있는 EC2 인스턴스 앞에 Application Load Balancer(ALB)를 설정합니다. ALB에서 AWS WAF를 활성화합니다.",
      "D": "Amazon Route 53 DNS Firewall 규칙 그룹을 설정합니다. 애플리케이션이 기능하기 위해 통신해야 하는 도메인만 포함하는 도메인 목록을 생성합니다. 도메인 목록을 규칙 그룹에 추가합니다. 규칙 그룹을 VPC와 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Route 53 DNS Firewall — DNS 레벨에서 도메인 기반 필터링\n▸ Allowlist (화이트리스트) — 허용할 도메인만 지정하는 보안 모델\n▸ Outbound Protection — 아웃바운드 악성 연결 차단\n\n【정답 포인트】\nEC2의 손상된 애플리케이션이 악의적 웹사이트로 DNS 쿼리하는 것을 막아야 합니다.\n▸ DNS Firewall은 DNS 쿼리 단계에서 차단 — 악의적 도메인 해석 자체를 막음\n▸ 애플리케이션이 필요한 도메인만 허용 목록으로 지정 — 제로 트러스트 접근\n▸ VPC 전체에 적용 — 어떤 EC2든 보호, 애플리케이션 수정 불필요\n▸ 운영 오버헤드 최소 — 일단 설정 후 자동으로 작동, 수동 관리 없음\n\n【오답 체크】\n(A) EC2 기반 방화벽 — 고가용성, HA 구성 필요, 운영 복잡\n(B) \n(C) WAF는 HTTP/S 레이어 — DNS는 차단 불가, ALB도 도움 안 됨\n   WAF는 요청 기반이므로 DNS 쿼리 단계에서 차단 불가능\n\n【시험 포인트】\n손상된 애플리케이션의 악성 통신 차단은 DNS Firewall이 가장 효율적. \"allowlist 도메인만 허용\" 모델이 운영 부담을 최소화하면서 보안을 극대화합니다.",
    "en_q": "A company notices VPC flow log data that shows some company traffic is going to malicious websites. The company identifies the Amazon EC2 instance that is sending traffic to the malicious websites and determines that the application that runs on the instance is compromised. Similar security events have happened multiple times at the company in the past. The company reacted to previous security events by blocking the malicious websites. The company needs a scalable solution to prevent similar security events in the future. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Set up an EC2 instance to run firewall software in the VPC. Route all traffic through the firewall EC2 instance. Maintain a list of known malicious websites on the firewall instance. Disable the source and destination checks for the firewall instance.",
      "B": "Set up an Application Load Balancer (ALB) in front of the problematic EC2 instance. Enable AWS WAF on the EC2 instance.",
      "C": "Set up an Application Load Balancer (ALB) in front of the problematic EC2 instance. Enable AWS WAF on the ALB.",
      "D": "Set up an Amazon Route 53 DNS Firewall rule group. Create a domain list that contains only the domains the application must communicate with to function. Add the domain list to the rule group. Associate the rule group with the VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394091-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 289,
    "question": "한 회사는 하이브리드 환경을 가지고 있습니다. 회사는 AWS Direct Connect와 Transit Gateway에 연결된 transit VIF를 사용하여 온프레미스 위치를 AWS 클라우드에 연결합니다. 회사는 us-east-1 리전의 단일 AWS 계정에서 운영합니다. 회사에는 corp.example.com DNS 이름으로 온프레미스에서 실행되는 레거시 애플리케이션이 있습니다. 회사는 us-east-1의 AWS 계정에 Amazon Route 53 Resolver 아웃바운드 엔드포인트 및 Resolver 규칙을 생성했습니다. 확장의 일부로 회사는 us-east-1에서 운영하는 새로운 비즈니스 유닛을 위한 새로운 AWS 계정을 생성합니다. 새 계정에는 Transit Gateway에 연결된 VPC가 있습니다. 새 계정은 온프레미스 위치에 연결하기 위해 기존 Direct Connect 연결을 사용합니다. 새 계정의 VPC에서 실행되는 애플리케이션도 corp.example.com DNS 이름을 사용하여 온프레미스 위치에 액세스해야 합니다. 네트워크 엔지니어는 새 계정에서 corp.example.com DNS 이름을 해석할 솔루션을 식별해야 합니다. 이 요구 사항을 가장 비용 효율적으로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "새 계정을 위한 기존 Direct Connect 연결에서 호스팅된 transit VIF를 생성합니다. 새 계정에서 Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 또한 새 계정에서 RuleType에 대해 FORWARD를 지정하는 Resolver 규칙을 생성합니다. 새 규칙을 새 계정의 VPC와 연결합니다.",
      "B": "AWS Resource Access Manager(AWS RAM)를 사용하여 기존 계정의 Resolver 규칙을 새 계정과 공유합니다. 공유 규칙을 새 계정의 VPC와 연결합니다.",
      "C": "AWS Resource Access Manager(AWS RAM)를 사용하여 기존 계정의 Route 53 Resolver 아웃바운드 엔드포인트를 새 계정과 공유합니다. 새 계정에서 RuleType에 대해 FORWARD를 지정하는 새 Resolver 규칙을 생성합니다. 새 규칙을 새 계정의 VPC와 연결합니다.",
      "D": "새 계정과 온프레미스 위치 간에 AWS Site-to-Site VPN 연결을 생성합니다. Site-to-Site VPN 연결을 기존 Transit Gateway에 연결합니다. 새 계정에서 Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 또한 새 계정에서 RuleType에 대해 FORWARD를 지정하는 새 Resolver 규칙을 생성합니다. 규칙을 새 계정의 VPC와 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver Rule — DNS 쿼리를 아웃바운드 엔드포인트로 포워딩하는 규칙\n▸ AWS RAM — AWS Organizations 조직 간 리소스 공유\n▸ Hybrid DNS Resolution — 온프레미스와 AWS 간 DNS 통합\n\n【정답 포인트】\nResolver 규칙을 AWS RAM으로 공유하는 것이 가장 비용 효율적입니다.\n▸ 기존 계정에 아웃바운드 엔드포인트가 이미 있음 — 재사용하면 비용 절감\n▸ Resolver 규칙만 공유 — 규칙에 이미 아웃바운드 엔드포인트 참조 포함\n▸ 새 계정 VPC에서 규칙 연결 — 온프레미스 접근 가능\n▸ Transit Gateway 이미 연결됨 — 추가 네트워킹 설정 불필요\n\n【오답 체크】\n(A) 새 VIF + 아웃바운드 엔드포인트 생성 — VIF와 엔드포인트 중복 비용\n(C) 아웃바운드 엔드포인트 공유 + 새 규칙 — 엔드포인트는 공유 가능하지만, 규칙 공유가 더 효율적\n(D) 별도 VPN 생성 — Transit Gateway 이미 있는데 중복, 비용 증가\n\n【시험 포인트】\nResolver 규칙 공유는 규칙 자체만 복제 (경량), 엔드포인트를 계정별로 만드는 것보다 훨씬 효율적. AWS Organizations 내에서 공유된 규칙은 기존 엔드포인트를 참조하므로 추가 비용 없음.",
    "en_q": "A company has a hybrid environment. The company uses AWS Direct Connect with a transit VIF attached to a transit gateway to connect its on-premises location to the AWS Cloud. The company operates from a single AWS account in the us-east-1 Region. The company has a legacy application that runs on premises with the corp.example.com DNS name. The company has created an Amazon Route 53 Resolver outbound endpoint and a Resolver rule in us-east-1 in the AWS account. As part of an expansion, the company creates one more AWS account for a new business unit that operates in us-east-1. The new account has VPCs that are attached to the transit gateway. The new account uses the existing Direct Connect connection to connect to the on-premises location. Applications that run in the new account's VPCs also need to access the on-premises location by using the corp.example.com DNS name. A network engineer needs to identify a solution to resolve the corp.example.com DNS name from the new account. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Create a hosted transit VIF for the new account on the existing Direct Connect connection. In the new account, create a new Route 53 Resolver outbound endpoint. Also in the new account, create a new Resolver rule that specifies FORWARD as the value for RuleType. Associate the new rule with the VPCs in the new account.",
      "B": "Share the Resolver rule from the existing account with the new account by using AWS Resource Access Manager (AWS RAM). Associate the shared rule with the VPCs in the new account.",
      "C": "Share the Route 53 Resolver outbound endpoint from the existing account with the new account by using AWS Resource Access Manager (AWS RAM). In the new account, create a new Resolver rule that specifies FORWARD as the value for RuleType. Associate the new rule with the VPCs in the new account.",
      "D": "Create an AWS Site-to-Site VPN connection between the new account and the on-premises location. Attach the Site-to-Site VPN connection to the existing transit gateway. In the new account, create a new Route 53 Resolver outbound endpoint. Also in the new account, create a new Resolver rule that specifies FORWARD as the value for RuleType. Associate the rule with the VPCs in the new account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394092-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 290,
    "question": "한 회사는 us-east-1 리전에 많은 VPC를 보유하고 있습니다. 회사는 Transit Gateway를 사용하여 VPC를 서로 연결합니다. 회사는 최근 VPC-Z라는 단일 VPC를 가진 소규모 회사를 인수했습니다. 네트워크 엔지니어는 VPC-Z를 기존 Transit Gateway에 온보딩해야 합니다. 네트워크 엔지니어는 VPC-Z와 VPC-A 간에 IP 주소 겹침을 발견합니다. 네트워크 엔지니어는 VPC-Z에서 VPC-A를 포함한 회사의 다른 모든 VPC로의 아웃바운드 연결을 설정해야 합니다. 이 요구 사항을 충족할 솔루션 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "VPC-Z에서 겹치지 않는 새로운 CIDR 블록을 생성합니다. 새 CIDR 블록을 사용하는 2개의 서브넷을 생성합니다.",
      "B": "VPC-A에서 겹치지 않는 새로운 CIDR 블록을 생성합니다. 새 CIDR 블록을 사용하는 2개의 서브넷을 생성합니다.",
      "C": "VPC-Z의 겹치지 않는 서브넷에서 프라이빗 NAT 게이트웨이를 생성합니다. Transit Gateway 라우팅 테이블에 겹치지 않는 VPC-Z CIDR 블록만 광고합니다.",
      "D": "VPC-A의 겹치지 않는 서브넷에서 프라이빗 NAT 게이트웨이를 생성합니다. Transit Gateway 라우팅 테이블에 겹치지 않는 VPC-A CIDR 블록만 광고합니다.",
      "E": "VPC-A와 VPC-Z 간에 VPC 피어링 연결을 생성합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ CIDR Overlap — IP 주소 범위 충돌\n▸ Private NAT Gateway — VPC 내부에서 아웃바운드 IP 변환\n▸ Transit Gateway Route Table — 라우팅 광고 제어\n\n【정답 포인트】\nVPC-Z의 CIDR을 변경하는 방식(A + C 조합)이 해결책입니다.\n▸ A) VPC-Z에 겹치지 않는 CIDR 추가 — 새 IP 범위로 리소스 배치 가능\n▸ C) 프라이빗 NAT Gateway로 트래픽 변환 — 새 CIDR 블록으로 출발\n▸ Transit Gateway에 새 CIDR만 광고 — VPC-A는 겹치지 않는 IP에서 오는 트래픽만 봄\n▸ VPC-Z → VPC-A 통신 가능, VPC-A → VPC-Z도 응답 가능\n\n【오답 체크】\n(B) VPC-A 수정 — A와 Z의 겹침 해결 안 됨, 다른 VPC들도 A와 연결되어 있어 복잡\n(D) VPC-A에서만 NAT — VPC-Z의 원본 IP로 트래픽 시작, 겹침 문제 지속\n(E) VPC Peering — Transit Gateway 기존 구조와 맞지 않음, 모든 VPC 통신 불가\n\n【시험 포인트】\nIPv4 겹침은 한쪽 VPC를 \"새 주소로 이전\"하고, NAT로 변환하는 방식이 표준. 새 CIDR 추가 후 프라이빗 NAT로 광고되는 출발지를 제어하는 패턴.",
    "en_q": "A company has many VPCs in the us-east-1 Region. The company uses a transit gateway to connect the VPCs to one another. The company recently acquired a smaller company that has a single VPC named VPC-Z. A network engineer needs to onboard VPC-Z to the existing transit gateway. The network engineer notices an IP address overlap between VPC-Z and VPC-A. The network engineer must establish outbound connectivity from VPC-Z to all the company's other VPCs, including VPC-A. Which combination of solutions will meet this requirement? (Choose two.)",
    "en_opts": {
      "A": "Create a new non-overlapping CIDR block in VPC-Z. Create two subnets that use the new CIDR block.",
      "B": "Create a new non-overlapping CIDR block in VPC-A. Create two subnets that use the new CIDR block.",
      "C": "Create a private NAT gateway in VPC-Z in a non-overlapping subnet. Advertise only the non-overlapping VPC-Z CIDR block to the transit gateway route table.",
      "D": "Create a private NAT gateway in VPC-A in a non-overlapping subnet. Advertise only the non-overlapping VPC-A CIDR block to the transit gateway route table.",
      "E": "Create a VPC peering connection between VPC-A and VPC-Z."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394093-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  },
  {
    "id": 291,
    "question": "한 회사가 Data Center 1과 Data Center 2라는 두 개의 온프레미스 데이터 센터 위치를 가지고 있습니다. 각 데이터 센터에는 회사에서 관리하는 고객 라우터가 있습니다. 두 데이터 센터 모두 프라이빗 VIF를 사용하는 동일한 Direct Connect 게이트웨이에 전용 AWS Direct Connect 연결이 있습니다. 회사는 각 프라이빗 VIF를 생성할 때 Direct Connect SiteLink를 활성화했습니다. 회사는 SiteLink를 사용하여 AWS 리전을 우회하고 한 Direct Connect 위치에서 다른 위치로 데이터를 보냅니다. Data Center 2는 파트너 회사가 액세스해야 하는 애플리케이션을 호스팅합니다. 파트너는 파트너의 자체 데이터 센터에서 Direct Connect 네트워크를 사용하여 애플리케이션에 액세스하려고 합니다. 회사의 네트워크 엔지니어는 Data Center 2와 파트너의 데이터 센터 간에 연결을 설정하기 위해 파트너를 위한 별도의 격리된 네트워크를 생성해야 합니다. 이 요구 사항을 충족할 단계의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "AWS 계정에서 파트너를 위한 새로운 Direct Connect 게이트웨이를 생성합니다. 파트너가 계정에 호스팅된 VIF를 생성할 수 있도록 계정 번호를 파트너와 공유합니다. 파트너의 호스팅된 VIF를 수락하고 새 Direct Connect 게이트웨이와 연결합니다.",
      "B": "Data Center 2의 Direct Connect 연결에 대해 파트너를 위한 별도의 transit VIF를 프로비저닝합니다. transit VIF를 파트너별 Direct Connect 게이트웨이에 연결합니다.",
      "C": "파트너가 계정에 호스팅된 VIF를 생성할 수 있도록 회사의 AWS 계정 번호를 파트너와 공유합니다. 파트너의 호스팅된 VIF를 수락하고 기존 Direct Connect 게이트웨이와 연결합니다.",
      "D": "Data Center 2의 Direct Connect 연결에 대해 파트너를 위한 별도의 프라이빗 VIF를 프로비저닝합니다. 프라이빗 VIF를 파트너별 Direct Connect 게이트웨이에 연결합니다. SiteLink를 활성화합니다.",
      "E": "Data Center 2의 Direct Connect 연결에 대해 파트너를 위한 별도의 퍼블릭 VIF를 프로비저닝합니다. 퍼블릭 VIF를 파트너별 Direct Connect 게이트웨이에 연결합니다. SiteLink를 활성화합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ Direct Connect Gateway — 온프레미스와 AWS 간 중앙 연결점\n▸ Hosted VIF — 파트너가 호스팅할 수 있는 가상 인터페이스\n▸ VIF Isolation — 격리된 네트워크 경로\n▸ SiteLink — 온프레미스 간 직접 통신 (AWS 우회)\n\n【정답 포인트】\n파트너와의 격리된 네트워크를 위해 별도 Direct Connect 게이트웨이가 필수입니다.\n▸ A) 새 DX 게이트웨이 + 호스팅된 VIF\n  — 파트너는 자신의 AWS 계정이 없을 가능성, 회사 계정의 호스팅 VIF로 연결\n  — Data Center 2와 파트너 DC 간 분리된 경로\n▸ D) 프라이빗 VIF + SiteLink\n  — 프라이빗 VIF는 데이터 센터 간 직접 연결 (AWS 우회)\n  — SiteLink 활성화로 Data Center 2 ↔ 파트너 DC 직통 가능\n  — 기존 회사 네트워크와 격리\n\n【오답 체크】\n(B) Transit VIF — 온프레미스 간 통신용 아님, AWS 간 연결\n(C) 기존 DX 게이트웨이 — 회사의 다른 데이터 센터와 통신 경로 노출, 격리 안 됨\n(E) 퍼블릭 VIF — 인터넷 기반, Direct Connect SiteLink와 맞지 않음\n\n【시험 포인트】\n온프레미스 간 격리는 \"별도 DX 게이트웨이\" 또는 \"프라이빗 VIF + SiteLink\"로 달성. 파트너 격리를 위해서는 회사 네트워크와 완전히 독립된 경로 필요.",
    "en_q": "A company has two on-premises data center locations named Data Center 1 and Data Center 2. Each data center has a company-managed customer router. Both data centers have a dedicated AWS Direct Connect connection to the same Direct Connect gateway that uses a private VIF. The company enabled Direct Connect SiteLink when the company created each private VIF. The company uses SiteLink to send data from one Direct Connect location to the other, bypassing AWS Regions. Data Center 2 hosts an application that a partner company needs to access. The partner wants to access the application from the partner's own data center by using the Direct Connect network. The company's network engineer needs to create a separate isolated network for the partner to establish connectivity between Data Center 2 and the partner's data center. Which combination of steps will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Create a new Direct Connect gateway for the partner in an AWS account. Share the account number with the partner to allow the partner to create a hosted VIF to the account. Accept and associate the partner's hosted VIF with the new Direct Connect gateway.",
      "B": "Provision a separate transit VIF for the partner on the Direct Connect connection at Data Center 2. Connect the transit VIF to the partner-specific Direct Connect gateway.",
      "C": "Share the company's AWS account number with the partner to allow the partner to create a hosted VIF to the account. Accept and associate the partner's hosted VIF with the existing Direct Connect gateway.",
      "D": "Provision a separate private VIF for the partner on the Direct Connect connection at Data Center 2. Connect the private VIF to the partner-specific Direct Connect gateway. Enable SiteLink.",
      "E": "Provision a separate public VIF for the partner on the Direct Connect connection at Data Center 2. Connect the public VIF to the partner-specific Direct Connect gateway. Enable SiteLink."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/394094-exam-aws-certified-advanced-networking-specialty-ans-c01/"
  }
];
