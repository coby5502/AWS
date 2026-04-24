window.SAA_QUESTIONS = [
  {
    "id": 1,
    "question": "회사는 여러 대륙에 걸쳐 도시의 온도, 습도 및 대기압에 대한 데이터를 수집합니다. 회사가 매일 각 사이트에서 수집하는 데이터의 평균 볼륨은 500GB 입니다. 각 사이트에는 고속 인터넷 연결이 있습니다. 이 회사는 이러한 모든 글로벌 사이트의 데이터를 단일 Amazon S3 버킷에 최대한 빨리 집계하려고 합니다. 솔루션은 운영 복잡성을 최소화해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "대상 S3 버킷에서 S3 Transfer Acceleration 을 켭니다. 멀티파트 업로드를 사용하여 사이트 데이터를 대상 S3 버킷에 직접 업로드합니다.",
      "B": "각 사이트의 데이터를 가장 가까운 리전의 S3 버킷에 업로드합니다. S3 교차 리전 복제를 사용하여 대상 S3 버킷에 객체를 복사합니다. 그런 다음 원본 S3 버킷에서 데이터를 제거합니다.",
      "C": "AWS Snowball Edge Storage Optimized 디바이스 작업을 매일 예약하여 각 사이트에서 가장 가까운 리전으로 데이터를 전송합니다. S3 교차 리전 복제를 사용하여 대상 S3 버킷에 객체를 복사합니다.",
      "D": "각 사이트의 데이터를 가장 가까운 리전의 Amazon EC2 인스턴스로 업로드합니다. Amazon Elastic Block Store(Amazon EBS) 볼륨에 데이터를 저장합니다. 정기적으로 EBS 스냅샷을 만들어 대상 S3 버킷이 포함된 리전에 복사합니다. 해당 리전에서 EBS 볼륨을 복원합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 Transfer Acceleration — CloudFront 엣지 로케이션을 이용해 글로벌 업로드 속도 최적화 (고속인터넷, 멀티파트로 최대 성능)\n▸ Multipart Upload — 대용량 파일을 병렬로 분할 업로드하여 네트워크 성능 극대화\n▸ AWS Snowball Edge — 오프라인 데이터 전송용, 배송 시간 필요 (빠른 실시간 업로드 시나리오에 부적합)\n\n【정답 포인트】\n▸ \"최대한 빨리\" + \"고속 인터넷\" → Transfer Acceleration이 인터넷 기반 글로벌 가속의 표준\n▸ \"매일 각 사이트\" 의 동시다중 업로드 → 운영상 복잡도 최소화는 관리형 서비스 (S3 Transfer)\n\n【오답 체크】\n(B) 리전별 중간 버킷 + 교차 리전 복제 → 2단계 처리로 복잡도 증가, 첫 수집에서 지연 발생\n(C) Snowball Edge는 대량 오프라인 전송용, 일일 반복 작업의 배송 시간과 관리 오버헤드 증가\n(D) EC2 + EBS 스냅샷 구성 → 컴퓨팅 리소스 낭비, 스냅샷 프로세스 오버헤드\n\n【시험 포인트】\n\"빠르게\" + \"글로벌 분산\" + \"최소 운영 오버헤드\" 패턴 → S3 Transfer Acceleration 선택 정답. Snowball은 일회성 대량 마이그레이션, 정기적 집계에는 부적합."
  },
  {
    "id": 2,
    "question": "회사는 독점 애플리케이션의 로그 파일을 분석할 수 있는 능력이 필요합니다. 로그는 Amazon S3 버킷에 JSON 형식으로 저장됩니다. 쿼리는 간단하고 주문형으로 실행됩니다. 솔루션 설계자는 기존 아키텍처에 대한 최소한의 변경으로 분석을 수행해야 합니다. 솔루션 설계자는 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon Redshift를 사용하여 모든 콘텐츠를 한 곳에 로드하고 필요에 따라 SQL 쿼리를 실행합니다.",
      "B": "Amazon CloudWatch Logs 를 사용하여 로그를 저장합니다. Amazon CloudWatch 콘솔에서 필요에 따라 SQL 쿼리를 실행합니다.",
      "C": "Amazon S3와 함께 Amazon Athena를 직접 사용하여 필요에 따라 쿼리를 실행합니다.",
      "D": "AWS Glue 를 사용하여 로그를 분류합니다. Amazon EMR 에서 임시 Apache Spark 클러스터를 사용하여 필요에 따라 SQL 쿼리를 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon Athena — S3 네이티브 SQL 쿼리 엔진, 저장소 이동 불필요 (서버리스, 주문형 요금)\n▸ Amazon Redshift — 데이터웨어하우스 전용, 데이터 로드 및 클러스터 운영 필수 (고정 비용)\n▸ AWS Glue + EMR — ETL 파이프라인 구축, 복잡 변환용 (오버헤드 증가)\n\n【정답 포인트】\n▸ \"S3에 이미 저장\" + \"간단한 쿼리\" + \"주문형\" → S3 제자리 쿼리로 최소 마이그레이션\n▸ \"최소 운영 오버헤드\" → 서버리스 Athena, Redshift 클러스터 관리 제외\n\n【오답 체크】\n(A) Redshift는 모든 데이터 로드 필수 (추가 비용, 클러스터 시작/중지 관리)\n(B) CloudWatch Logs는 로그 스토리지 용도, 수작업으로 로그를 재저장하면 중복 비용\n(D) Glue + EMR은 대규모 ETL 작업용, 주문형 간단 쿼리에는 과도한 오버헤드\n\n【시험 포인트】\n\"S3 제자리\" + \"주문형 쿼리\" → Athena 고정 정답. Redshift는 지속적 분석(정기 대규모 리포팅), Athena는 임시 탐색 쿼리 구분."
  },
  {
    "id": 3,
    "question": "회사는 AWS Organizations 를 사용하여 여러 부서의 여러 AWS 계정을 관리합니다. 관리 계정에는 프로젝트 보고서가 포함된 Amazon S3 버킷이 있습니다. 회사는 이 S3 버킷에 대한 액세스를 AWS Organizations의 조직 내 계정 사용자로만 제한하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "조직 ID 에 대한 참조와 함께 aws PrincipalOrgID 전역 조건 키를 S3 버킷 정책에 추가합니다.",
      "B": "각 부서에 대한 조직 단위(OU)를 만듭니다. aws:PrincipalOrgPaths 전역 조건 키를 S3 버킷 정책에 추가합니다.",
      "C": "AWS CloudTrail 을 사용하여 CreateAccount, InviteAccountToOrganization, LeaveOrganization 및 RemoveAccountFromOrganization 이벤트를 모니터링합니다. 그에 따라 S3 버킷 정책을 업데이트합니다.",
      "D": "S3 버킷에 액세스해야 하는 각 사용자에 태그를 지정합니다. aws:PrincipalTag 전역 조건 키를 S3 버킷 정책에 추가합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ aws:PrincipalOrgID — Organizations 조직 전체를 조건으로, 조직 내 모든 계정 인증 (정적 정책)\n▸ aws:PrincipalOrgPaths — OU별 경로 기반 제어, OU 계층 변경 시 정책 재수정 필수\n▸ CloudTrail 기반 정책 업데이트 — 수동 모니터링 및 정책 변경 오버헤드 증가\n\n【정답 포인트】\n▸ \"조직 내 계정 사용자로만\" → Organizations 조직 전체 구성원 식별 필요\n▸ \"최소 운영 오버헤드\" → aws:PrincipalOrgID로 일괄 처리, 계정 추가 시 정책 수정 불필요\n\n【오답 체크】\n(B) PrincipalOrgPaths는 OU 구조에 의존, 부서 재조직 시 정책 수정 필수 (관리 부담 증가)\n(C) CloudTrail은 모니터링만 가능, S3 정책은 수동 업데이트 필요 (실시간성 낮음)\n(D) 각 사용자별 태그 지정은 Organizations 계정 수 증가 시 확장성 제한\n\n【시험 포인트】\n\"Organizations\" + \"전체 조직\" + \"최소 오버헤드\" → aws:PrincipalOrgID 조건 키 표준 정답. OU 제어가 필요한 경우만 PrincipalOrgPaths 사용."
  },
  {
    "id": 4,
    "question": "애플리케이션은 VPC 의 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 Amazon S3 버킷에 저장된 로그를 처리합니다. EC2 인스턴스는 인터넷 연결 없이 S3 버킷에 액세스해야 합니다. Amazon S3에 대한 프라이빗 네트워크 연결을 제공하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 버킷에 대한 게이트웨이 VPC 엔드포인트를 생성합니다.",
      "B": "Amazon CloudWatch Logs로 로그를 스트리밍합니다. 로그를 S3 버킷으로 내보냅니다.",
      "C": "Amazon EC2에 인스턴스 프로파일을 생성하여 S3 액세스를 허용합니다.",
      "D": "S3 엔드포인트에 액세스하기 위한 프라이빗 링크가 있는 Amazon API Gateway API 를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Gateway VPC Endpoint (S3) — VPC 라우팅 테이블 기반 프라이빗 경로, AWS 네트워크 내부 통신 (인터넷 우회)\n▸ Instance Profile (IAM) — EC2 권한 부여용, 네트워크 경로 제어 불가 (인터넷 연결 여전히 필요)\n▸ Interface VPC Endpoint (PrivateLink) — ENI 기반 프라이빗 링크, S3에는 게이트웨이 엔드포인트 사용\n\n【정답 포인트】\n▸ \"프라이빗 네트워크 연결\" → VPC 엔드포인트로 인터넷 게이트웨이 우회\n▸ \"S3에 대한\" → S3 전용 게이트웨이 엔드포인트 (라우팅 기반, 저비용)\n\n【오답 체크】\n(B) CloudWatch Logs는 로그 저장소일 뿐, S3 접근 경로 문제 해결 안 함\n(C) Instance Profile은 IAM 권한만 부여, EC2에서 S3로 인터넷 경로 여전히 필요\n(D) API Gateway + PrivateLink 구성은 S3 직접 프라이빗 접속 불필요 (과도한 아키텍처)\n\n【시험 포인트】\n\"인터넷 연결 없이\" + \"프라이빗\" → VPC Endpoint (Gateway) 고정 정답. IAM은 권한(인증), Endpoint는 네트워크 경로(연결성) 구분."
  },
  {
    "id": 5,
    "question": "회사는 사용자 업로드 문서를 Amazon EBS 볼륨에 저장하는 단일 Amazon EC2 인스턴스를 사용하여 AWS 에서 웹 애플리케이션을 호스팅하고 있습니다. 더 나은 확장성과 가용성을 위해 이 회사는 아키텍처를 복제하고 다른 가용 영역에 두 번째 EC2 인스턴스와 EBS 볼륨을 생성하여 Application Load Balancer 뒤에 배치했습니다. 이 변경을 완료한 후 사용자는 웹 사이트를 새로 고칠 때마다 문서의 일부 또는 다른 하위 집합을 볼 수 있지만 모든 문서를 동시에 볼 수는 없다고 보고했습니다. 솔루션 설계자는 사용자가 모든 문서를 한 번에 볼 수 있도록 무엇을 제안해야 합니까?",
    "options": {
      "A": "두 EBS 볼륨에 모든 문서가 포함되도록 데이터를 복사합니다.",
      "B": "문서가 있는 서버로 사용자를 안내하도록 Application Load Balancer를 구성합니다.",
      "C": "두 EBS 볼륨의 데이터를 Amazon EFS 로 복사합니다. 새 문서를 Amazon EFS 에 저장하도록 애플리케이션을 수정합니다.",
      "D": "두 서버 모두에 요청을 보내도록 Application Load Balancer 를 구성합니다. 올바른 서버에서 각 문서를 반환합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon EFS — NFS 기반 공유 파일시스템, 다중 AZ 자동 복제 및 동시 액세스 지원\n▸ EBS 볼륨 — 블록 스토리지, 단일 EC2 인스턴스에만 연결 가능 (다중 인스턴스 공유 불가)\n▸ Session Stickiness (Sticky Session) — ALB 라우팅 설정, 데이터 불일치 문제 해결 안 함\n\n【정답 포인트】\n▸ \"새로 고칠 때마다 문서 일부만\" → 두 인스턴스 간 데이터 불일치 (EBS는 로컬 전용)\n▸ \"모든 문서를 동시에\" → 공유 스토리지로 중앙집중식 데이터 관리 필수\n\n【오답 체크】\n(A) 수동으로 EBS 간 데이터 복사 → 향후 업로드 파일도 동기화 필수 (운영 부담, 불완전)\n(B) Session Stickiness로도 기존 데이터 불일치 해결 불가, 또한 AZ 장애 시 데이터 접근 불가\n(D) ALB가 요청을 두 서버 분산, 데이터 불일치는 여전함 (네트워크 라우팅만 해결)\n\n【시험 포인트】\n\"다중 인스턴스\" + \"공유 데이터\" + \"동일 접근\" → EFS 표준 정답. EBS는 단일 인스턴스 블록 스토리지, EFS는 다중 EC2 마운트 공유 파일시스템 구분."
  },
  {
    "id": 6,
    "question": "회사는 NFS 를 사용하여 온프레미스 네트워크 연결 스토리지에 대용량 비디오 파일을 저장합니다. 각 비디오 파일의 크기 범위는 1MB 에서 500GB 입니다. 총 스토리지는 70TB 이며 더 이상 증가하지 않습니다. 회사는 비디오 파일을 Amazon S3 로 마이그레이션하기로 결정합니다. 회사는 가능한 한 최소한의 네트워크 대역폭을 사용하면서 가능한 한 빨리 비디오 파일을 마이그레이션해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "S3 버킷을 생성합니다. S3 버킷에 대한 쓰기 권한이 있는 IAM 역할을 생성합니다. AWS CLI를 사용하여 모든 파일을 S3 버킷에 로컬로 복사합니다.",
      "B": "AWS Snowball Edge 작업을 생성합니다. 온프레미스에서 Snowball Edge 장치를 받습니다. Snowball Edge 클라이언트를 사용하여 장치로 데이터를 전송합니다. AWS 가 데이터를 Amazon S3로 가져올 수 있도록 디바이스를 반환합니다.",
      "C": "온프레미스에 S3 파일 게이트웨이를 배포합니다. S3 파일 게이트웨이에 연결할 퍼블릭 서비스 엔드포인트를 생성합니다. S3 버킷을 생성합니다. S3 파일 게이트웨이에서 새 NFS 파일 공유를 생성합니다. 새 파일 공유가 S3 버킷을 가리키도록 합니다. 기존 NFS 파일 공유에서 S3 파일 게이트웨이로 데이터를 전송합니다.",
      "D": "온프레미스 네트워크와 AWS 간에 AWS Direct Connect 연결을 설정합니다. 온프레미스에 S3 파일 게이트웨이를 배포합니다. S3 파일 게이트웨이에 연결할 공용 VIF(가상 인터페이스)를 생성합니다. S3 버킷을 생성합니다. S3 파일 게이트웨이에서 새 NFS 파일 공유를 생성합니다. 새 파일 공유가 S3 버킷을 가리키도록 합니다. 기존 NFS 파일 공유에서 S3 파일 게이트웨이로 데이터를 전송합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Snowball Edge — 오프라인 데이터 전송 어플라이언스, 70TB 규모 물리 배송 (네트워크 제로)\n▸ S3 File Gateway — 온프레미스 NFS 인터페이스 + S3 백엔드, 지속적 인터넷 전송 필요\n▸ AWS CLI 직접 전송 — 70TB 온프레미스→S3 인터넷 전송 (광대역 필요, 대기 시간 길음)\n▸ AWS Direct Connect — 전용 네트워크 설정 시간 (Snowball보다 느림)\n\n【정답 포인트】\n▸ \"70TB 일회성 대량\" + \"최소 네트워크 대역폭\" → 물리 배송이 인터넷 전송보다 저비용/빠름\n▸ \"가능한 한 빨리\" → Snowball Edge는 며칠 내 배송 + 병렬 온로드 (Direct Connect 설정 기간 단축)\n\n【오답 체크】\n(A) AWS CLI 직접 전송은 70TB 인터넷 대역폭 지속 필요, 속도 및 비용 모두 비효율\n(C) S3 File Gateway는 인터넷 기반, 지속적 대역폭 소비로 \"최소\" 요구 불만족\n(D) Direct Connect 설정(수주~수개월) + File Gateway 인터넷 전송 → Snowball보다 느림, 대역폭 절감 아님\n\n【시험 포인트】\n\"대용량(수십~수백TB)\" + \"최소 대역폭\" + \"일회성\" → Snowball (Edge/Nitro) 고정 정답. File Gateway/Direct Connect는 지속적 동기화, 회사 네트워크 통합 용도."
  },
  {
    "id": 7,
    "question": "회사에 들어오는 메시지를 수집하는 응용 프로그램이 있습니다. 그러면 수십 개의 다른 애플리케이션과 마이크로서비스가 이러한 메시지를 빠르게 소비합니다. 메시지 수는 급격하게 변하며 때로는 초당 100,000 개로 갑자기 증가하기도 합니다. 이 회사는 솔루션을 분리하고 확장성을 높이고자 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon Kinesis Data Analytics에 대한 메시지를 유지합니다. 메시지를 읽고 처리하도록 소비자 애플리케이션을 구성합니다.",
      "B": "Auto Scaling 그룹의 Amazon EC2 인스턴스에 수집 애플리케이션을 배포하여 CPU 지표를 기반으로 EC2 인스턴스 수를 확장합니다.",
      "C": "단일 샤드를 사용하여 Amazon Kinesis Data Streams에 메시지를 씁니다. AWS Lambda 함수를 사용하여 메시지를 사전 처리하고 Amazon DynamoDB 에 저장합니다. 메시지를 처리하기 위해 DynamoDB에서 읽도록 소비자 애플리케이션을 구성합니다.",
      "D": "여러 Amazon Simple Queue Service(Amazon SOS) 구독이 있는 Amazon Simple Notification Service(Amazon SNS) 주제에 메시지를 게시합니다. 대기열의 메시지를 처리하도록 소비자 애플리케이션을 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SNS + SQS Fan-Out — 1개 주제(SNS) → 다중 구독자(SQS 큐) 병렬 분산, 느슨한 결합 구조\n▸ Kinesis Data Streams — 정렬 순서 보장 필수, 샤드 관리 필요 (확장성 제한)\n▸ Kinesis Data Analytics — 스트림 분석용, 메시지 분산 버퍼 기능 없음\n▸ Lambda + DynamoDB — 추가 처리 레이어로 복잡도 증가, 단순 분산에 과도함\n\n【정답 포인트】\n▸ \"수십 개의 다른 애플리케이션\" → 다중 구독자 패턴 필수 (SNS Fan-Out)\n▸ \"분리하고 확장성\" → SQS 큐로 각 애플리케이션 독립 확장 (일시적 스파이크 흡수)\n▸ \"초당 100,000개\" → SNS/SQS 제한 없음 (Kinesis 단일 샤드는 1,000 TPS 제한)\n\n【오답 체크】\n(A) Kinesis Data Analytics는 분석용, 메시지 팬아웃 버퍼 기능 없음\n(B) EC2 Auto Scaling은 수집 단계에만 적용, 다중 소비자 분산 구조 해결 안 함\n(C) 단일 샤드 → 초당 100,000 메시지 처리 불가 (1,000 TPS 제한), DynamoDB도 불필요\n\n【시험 포인트】\n\"다중 구독자\" + \"급격한 스파이크\" → SNS + SQS Fan-Out 표준 정답. Kinesis는 순서 보장/스트림 분석, SNS/SQS는 느슨한 결합 메시지 분산."
  },
  {
    "id": 8,
    "question": "회사에서 분산 애플리케이션을 AWS 로 마이그레이션하고 있습니다. 애플리케이션은 다양한 워크로드를 처리합니다. 레거시 플랫폼은 여러 컴퓨팅 노드에서 작업을 조정하는 기본 서버로 구성됩니다. 이 회사는 탄력성과 확장성을 극대화하는 솔루션으로 애플리케이션을 현대화하려고 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 아키텍처를 어떻게 설계해야 합니까?",
    "options": {
      "A": "작업의 대상으로 Amazon Simple Queue Service(Amazon SQS) 대기열을 구성합니다. Auto Scaling 그룹에서 관리되는 Amazon EC2 인스턴스로 컴퓨팅 노드를 구현합니다. 예약된 조정을 사용하도록 EC2 Auto Scaling을 구성합니다.",
      "B": "작업의 대상으로 Amazon Simple Queue Service(Amazon SQS) 대기열을 구성합니다. Auto Scaling 그룹에서 관리되는 Amazon EC2 인스턴스로 컴퓨팅 노드를 구현합니다. 대기열 크기에 따라 EC2 Auto Scaling을 구성합니다.",
      "C": "Auto Scaling 그룹에서 관리되는 Amazon EC2 인스턴스로 기본 서버와 컴퓨팅 노드를 구현합니다. 작업의 대상으로 AWS CloudTrail 을 구성합니다. 기본 서버의 부하를 기반으로 EC2 Auto Scaling을 구성합니다.",
      "D": "Auto Scaling 그룹에서 관리되는 Amazon EC2 인스턴스로 기본 서버와 컴퓨팅 노드를 구현합니다. 작업의 대상으로 Amazon EventBridge(Amazon CloudWatch Events)를 구성합니다. 컴퓨팅 노드의 부하를 기반으로 EC2 Auto Scaling을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SQS 대기열 기반 확장 — 대기열 깊이(ApproximateNumberOfMessages)로 동적 확장 (예측 불가 워크로드 최적)\n▸ Scheduled Scaling (예약 조정) — 미리 예상되는 트래픽 시간대용 (예측 가능한 패턴만 가능)\n▸ CloudTrail + EventBridge — 감시/분석 도구, 작업 조정 매커니즘 아님\n\n【정답 포인트】\n▸ \"탄력성과 확장성\" → 예측 불가 워크로드 (대기열 메트릭 기반 확장)\n▸ \"기본 서버 제거\" → SQS로 조정자 역할 대체 (분산 처리 구조)\n▸ \"대기열 크기에 따라\" → SQS ApproximateNumberOfMessages 메트릭으로 자동 확장\n\n【오답 체크】\n(A) 예약된 조정은 고정 시간대용 (\"다양한 워크로드\" 패턴 미예측)\n(C) CloudTrail은 감시만 하고, 작업 조정 트리거 아님, 기본 서버도 EC2로 유지 (확장성 제한)\n(D) EventBridge는 이벤트 라우팅, 작업 조정 메트릭 아님 (CloudTrail도 마찬가지)\n\n【시험 포인트】\n\"예측 불가 워크로드\" + \"탄력 확장\" → SQS Queue Depth Metric 기반 Auto Scaling 고정 정답. 예약 조정은 정기 배치/시간대 고정 패턴."
  },
  {
    "id": 9,
    "question": "회사는 데이터 센터에서 SMB 파일 서버를 실행하고 있습니다. 파일 서버는 파일이 생성된 후 처음 며칠 동안 자주 액세스하는 대용량 파일을 저장합니다. 7 일이 지나면 파일에 거의 액세스하지 않습니다. 총 데이터 크기가 증가하고 있으며 회사의 총 저장 용량에 가깝습니다. 솔루션 설계자는 가장 최근에 액세스한 파일에 대한 저지연 액세스를 잃지 않으면서 회사의 사용 가능한 저장 공간을 늘려야 합니다. 솔루션 설계자는 향후 스토리지 문제를 방지하기 위해 파일 수명 주기 관리도 제공해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS DataSync 를 사용하여 SMB 파일 서버에서 AWS 로 7 일이 지난 데이터를 복사합니다.",
      "B": "Amazon S3 파일 게이트웨이를 생성하여 회사의 스토리지 공간을 확장합니다. S3 수명 주기 정책을 생성하여 7일 후에 데이터를 S3 Glacier Deep Archive로 전환합니다.",
      "C": "Windows 파일 서버용 Amazon FSx 파일 시스템을 생성하여 회사의 저장 공간을 확장합니다.",
      "D": "각 사용자의 컴퓨터에 유틸리티를 설치하여 Amazon S3 에 액세스합니다. S3 수명 주기 정책을 생성하여 7일 후 데이터를 S3 Glacier Flexible Retrieval로 전환합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 File Gateway — 온프레미스 SMB/NFS 인터페이스 + S3 클라우드 저장소, 로컬 캐시로 저지연 유지\n▸ S3 Lifecycle Policy — 저장소 클래스 자동 전환 (STANDARD→GLACIER→DEEP_ARCHIVE), 장기 보관 저가\n▸ AWS DataSync — 일회성 마이그레이션용, 자동화된 수명 주기 관리 불가\n▸ Amazon FSx — 클라우드 파일 서버 대체, 용량 제한 (온프레미스 용량 무한 확장 불가)\n\n【정답 포인트】\n▸ \"저지연 액세스\" + \"스토리지 용량 확장\" → File Gateway 캐시 (최근 파일 로컬, 과거 파일 S3)\n▸ \"7일 후 거의 액세스 안함\" + \"수명 주기 관리\" → S3 Lifecycle (자동 계층화)\n▸ \"향후 문제 방지\" → Lifecycle 정책으로 자동화 (수동 관리 제거)\n\n【오답 체크】\n(A) DataSync는 일회성 복사, 향후 신규 파일 자동 관리 불가 + 수명 주기 정책 미포함\n(C) FSx는 클라우드 파일 서버, 용량 고정 (온프레미스 무한 확장 대체 불가), 수명 주기 관리 없음\n(D) 사용자별 S3 유틸리티 설치 → SMB 인터페이스 제거로 사용자 경험 악화 + 관리 부담\n\n【시험 포인트】\n\"SMB\" + \"저지연\" + \"수명 주기\" → S3 File Gateway + Lifecycle Policy 조합. FSx는 고정 용량 클라우드 파일 서버, 무한 확장 요구사항에 부적합."
  },
  {
    "id": 10,
    "question": "회사는 AWS 에서 전자 상거래 웹 애플리케이션을 구축하고 있습니다. 애플리케이션은 처리할 Amazon API Gateway REST API에 새 주문에 대한 정보를 보냅니다. 회사는 주문이 접수된 순서대로 처리되기를 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "API Gateway 통합을 사용하여 애플리케이션이 주문을 수신할 때 Amazon Simple Notification Service(Amazon SNS) 주제에 메시지를 게시합니다. AWS Lambda 함수를 주제에 구독하여 처리를 수행합니다.",
      "B": "API Gateway 통합을 사용하여 애플리케이션이 주문을 수신할 때 Amazon Simple Queue Service(Amazon SQS) FIFO 대기열에 메시지를 보냅니다. 처리를 위해 AWS Lambda 함수를 호출하도록 SQS FIFO 대기열을 구성합니다.",
      "C": "API Gateway 권한 부여자를 사용하여 애플리케이션이 주문을 처리하는 동안 모든 요청을 차단합니다.",
      "D": "API Gateway 통합을 사용하여 애플리케이션이 주문을 수신할 때 Amazon Simple Queue Service(Amazon SQS) 표준 대기열에 메시지를 보냅니다. 처리를 위해 AWS Lambda 함수를 호출하도록 SQS 표준 대기열을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SQS FIFO (First-In-First-Out) — 메시지 순서 보장, 정확히 한 번 처리 (전자상거래 주문용 필수)\n▸ SQS Standard — 순서 보장 없음, 최대 3회 중복 처리 가능 (금융 거래 부적합)\n▸ SNS (Publish-Subscribe) — 순서 보장 안함, 최대 1회 전달 시도 (순서 요구사항 미충족)\n▸ API Gateway Authorizer — 인증/권한 부여, 처리 순서와 무관\n\n【정답 포인트】\n▸ \"주문이 접수된 순서대로\" → FIFO 대기열로 메시지 순서 보장 (1번, 2번, 3번 주문 순차 처리)\n▸ \"처리\" → Lambda + SQS FIFO 통합으로 순차 처리 및 실패 시 재시도\n\n【오답 체크】\n(A) SNS는 순서 보장 없음, 여러 Lambda 구독자 병렬 실행 시 순서 뒤뜰림\n(C) API Gateway Authorizer는 인증만, 주문 처리 순서 제어 불가\n(D) SQS Standard는 순서 보장 안함, \"주문이 접수된 순서\" 요구사항 불만족\n\n【시험 포인트】\n\"순서대로 처리\" → SQS FIFO 고정 정답. SNS는 팬아웃/알림, SQS Standard는 부하 분산용, FIFO는 금융/전자상거래 순서 보장."
  },
  {
    "id": 11,
    "question": "회사에 Amazon EC2 인스턴스에서 실행되고 Amazon Aurora 데이터베이스를 사용하는 애플리케이션이 있습니다. EC2 인스턴스는 파일에 로컬로 저장된 사용자 이름과 암호를 사용하여 데이터베이스에 연결합니다. 회사는 자격 증명 관리의 운영 오버헤드를 최소화하려고 합니다. 솔루션 설계자는 이 목표를 달성하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS Secrets Manager를 사용합니다. 자동 회전을 켭니다.",
      "B": "AWS Systems Manager Parameter Store를 사용합니다. 자동 회전을 켭니다.",
      "C": "AWS Key Management Service(AWS KMS) 암호화 키로 암호화된 객체를 저장할 Amazon S3 버킷을 생성합니다. 자격 증명 파일을 S3 버킷으로 마이그레이션합니다. 애플리케이션이 S3 버킷을 가리키도록 합니다.",
      "D": "각 EC2 인스턴스에 대해 암호화된 Amazon Elastic Block Store(Amazon EBS) 볼륨을 생성합니다. 새 EBS 볼륨을 각 EC2 인스턴스에 연결합니다. 자격 증명 파일을 새 EBS 볼륨으로 마이그레이션합니다. 애플리케이션이 새 EBS 볼륨을 가리키도록 합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Secrets Manager — 자격 증명 저장 + 자동 회전 엔진 내장 (Lambda 기반 RDS 비밀 교체)\n▸ AWS Systems Manager Parameter Store — 설정값 저장 (수동 회전만 가능, 자동화 제한)\n▸ KMS + S3 — 저장소 암호화만, 자동 회전 메커니즘 없음\n▸ EBS 볼륨 — 로컬 파일 저장과 동일 문제 (회전 자동화 불가)\n\n【정답 포인트】\n▸ \"자격 증명 관리의 운영 오버헤드 최소화\" → 자동 회전 필수 (수동 회전 제거)\n▸ \"Aurora 데이터베이스\" → Secrets Manager는 RDS/Aurora 자동 회전 Lambda 함수 제공\n\n【오답 체크】\n(B) Parameter Store는 자동 회전 지원 없음 (사용자가 Lambda 작성 필요, 운영 부담)\n(C) KMS + S3는 저장소 암호화만, 주기적 회전 자동화 불가 (여전히 수동 관리)\n(D) EBS 볼륨은 로컬 파일 저장과 동일 (회전 자동화 메커니즘 없음)\n\n【시험 포인트】\n\"자동 회전\" + \"데이터베이스 자격 증명\" → AWS Secrets Manager 고정 정답. Parameter Store는 일반 설정값, Secrets Manager는 자격 증명 특화 + 자동 회전."
  },
  {
    "id": 12,
    "question": "글로벌 회사는 ALB(Application Load Balancer) 뒤의 Amazon EC2 인스턴스에서 웹 애플리케이션을 호스팅합니다. 웹 애플리케이션에는 정적 데이터와 동적 데이터가 있습니다. 회사는 정적 데이터를 Amazon S3 버킷에 저장합니다. 회사는 정적 데이터 및 동적 데이터의 성능을 개선하고 대기 시간을 줄이기를 원합니다. 회사는 Amazon Route 53 에 등록된 자체 도메인 이름을 사용하고 있습니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "S3 버킷과 ALB 를 오리진으로 포함하는 Amazon CloudFront 배포를 생성합니다. CloudFront 배포로 트래픽을 라우팅하도록 Route 53을 구성합니다.",
      "B": "ALB 가 오리진인 Amazon CloudFront 배포를 생성합니다. S3 버킷을 엔드포인트로 포함하는 AWS Global Accelerator 표준 액셀러레이터를 생성합니다. CloudFront 배포로 트래픽을 라우팅하도록 Route 53을 구성합니다.",
      "C": "S3 버킷을 오리진으로 포함하는 Amazon CloudFront 배포를 생성합니다. ALB 및 CloudFront 배포를 엔드포인트로 포함하는 AWS Global Accelerator 표준 액셀러레이터를 생성합니다. 가속기 DNS 이름을 가리키는 사용자 지정 도메인 이름을 만듭니다. 사용자 지정 도메인 이름을 웹 애플리케이션의 끝점으로 사용합니다.",
      "D": "ALB 가 오리진인 Amazon CloudFront 배포를 생성합니다. S3 버킷을 엔드포인트로 포함하는 AWS Global Accelerator 표준 액셀러레이터를 생성합니다. 두 개의 도메인 이름을 만듭니다. 하나의 도메인 이름이 동적 콘텐츠의 CloudFront DNS 이름을 가리키도록 합니다. 다른 도메인 이름이 정적 콘텐츠에 대한 가속기 DNS 이름을 가리키도록 합니다. 도메인 이름을 웹 애플리케이션의 끝점으로 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudFront — CDN 기반 콘텐츠 캐싱 및 엣지 배포 (정적+동적 컨텐츠 모두 가능)\n▸ Global Accelerator — 제로-데이 애니캐스트 + TCP/UDP 최적화 (Video/IoT용, 웹 애플리케이션은 과도)\n▸ Multiple Origins — CloudFront는 S3(정적) + ALB(동적) 다중 오리진 지원\n▸ Route 53 Alias — CloudFront 배포를 단일 도메인으로 단순화\n\n【정답 포인트】\n▸ \"정적 데이터 및 동적 데이터 성능 개선\" → CloudFront 단일 배포로 모두 캐시/최적화 가능\n▸ \"자체 도메인 이름\" → Route 53 Alias로 CloudFront를 도메인에 매핑 (DNS 레코드 단순)\n▸ \"대기 시간 감소\" → CloudFront 글로벌 엣지 캐싱\n\n【오답 체크】\n(B) Global Accelerator는 ALB 동적 콘텐츠용 (S3는 CDN이 더 효율적)\n(C) CloudFront + Global Accelerator 이중화 → 비용 증가, 도메인 관리 복잡 (ALB 이미 AZ 다중화)\n(D) 동적/정적 콘텐츠 도메인 분리 → 사용자 앱 수정 필요, Route 53 2개 레코드 관리 (복잡도 증가)\n\n【시험 포인트】\n\"정적+동적 혼합\" + \"글로벌 성능\" + \"단일 도메인\" → CloudFront 다중 오리진 표준 정답. Global Accelerator는 특수 프로토콜(TCP/UDP), Anycast 필요한 경우 (일반 웹앱 아님)."
  },
  {
    "id": 13,
    "question": "회사는 AWS 인프라에 대한 월별 유지 관리를 수행합니다. 이러한 유지 관리 활동 중에 회사는 여러 AWS 리전에서 MySQL 용 Amazon RDS 데이터베이스에 대한 자격 증명을 교체해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "자격 증명을 AWS Secrets Manager 에 암호로 저장합니다. 필요한 리전에 대해 다중 리전 비밀 복제를 사용합니다. 일정에 따라 보안 암호를 교체하도록 Secrets Manager 를 구성합니다.",
      "B": "보안 문자열 파라미터를 생성하여 AWS Systems Manager 에 자격 증명을 보안 암호로 저장합니다. 필요한 리전에 대해 다중 리전 비밀 복제를 사용합니다. 일정에 따라 암호를 교체하도록 Systems Manager를 구성합니다.",
      "C": "서버 측 암호화(SSE)가 활성화된 Amazon S3 버킷에 자격 증명을 저장합니다. Amazon EventBridge(Amazon CloudWatch Events)를 사용하여 AWS Lambda 함수를 호출하여 자격 증명을 교체합니다.",
      "D": "AWS Key Management Service(AWS KMS) 다중 리전 고객 관리형 키를 사용하여 자격 증명을 비밀로 암호화합니다. Amazon DynamoDB 전역 테이블에 암호를 저장합니다. AWS Lambda 함수를 사용하여 DynamoDB에서 암호를 검색합니다. RDS API를 사용하여 비밀을 교체합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Secrets Manager 다중 리전 복제 — 주 비밀 + 읽기 전용 복제본 (리전별 자동 동기화)\n▸ Secrets Manager 자동 회전 — RDS 비밀 교체 Lambda 함수 내장 제공\n▸ AWS Systems Manager Parameter Store — 다중 리전 비밀 복제 지원 없음 (각 리전 수동 동기화)\n▸ Lambda + S3 수동 구성 — EventBridge 트리거 설정, Lambda 함수 작성 필요 (운영 부담)\n\n【정답 포인트】\n▸ \"여러 AWS 리전\" + \"최소 운영 오버헤드\" → Secrets Manager 다중 리전 복제 (자동 동기화)\n▸ \"월별 교체\" → 일정 기반 자동 회전 (수동 개입 제거)\n▸ \"MySQL RDS\" → Secrets Manager는 RDS 비밀 회전 Lambda 사전 구축\n\n【오답 체크】\n(B) Parameter Store는 다중 리전 복제 미지원 (각 리전 수동 관리, 오버헤드 증가)\n(C) Lambda + EventBridge 수동 구성 → Lambda 함수 개발/테스트, S3 접근 권한 관리 (복잡도 증가)\n(D) DynamoDB 전역 테이블 + KMS + Lambda → 과도한 구성, RDS 회전 API 직접 호출 필요 (자동화 미흡)\n\n【시험 포인트】\n\"다중 리전\" + \"자동 회전\" + \"RDS 자격 증명\" → AWS Secrets Manager 고정 정답. Parameter Store는 일반 설정값 (다중 리전 복제 없음), Secrets Manager는 비밀 + 자동 회전 + RDS 통합."
  },
  {
    "id": 14,
    "question": "회사는 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 전자 상거래 애플리케이션을 실행합니다. 인스턴스는 여러 가용 영역에 걸쳐 Amazon EC2 Auto Scaling 그룹에서 실행됩니다. Auto Scaling 그룹은 CPU 사용률 메트릭을 기반으로 확장됩니다. 전자 상거래 애플리케이션은 대규모 EC2 인스턴스에서 호스팅되는 MySQL 8.0 데이터베이스에 트랜잭션 데이터를 저장합니다. 애플리케이션 로드가 증가하면 데이터베이스의 성능이 빠르게 저하됩니다. 애플리케이션은 쓰기 트랜잭션보다 더 많은 읽기 요청을 처리합니다. 이 회사는 고가용성을 유지하면서 예측할 수 없는 읽기 워크로드의 수요를 충족하도록 데이터베이스를 자동으로 확장하는 솔루션을 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "리더 및 컴퓨팅 기능을 위해 단일 노드와 함께 Amazon Redshift를 사용하십시오.",
      "B": "단일 AZ 배포와 함께 Amazon RDS 사용 다른 가용 영역에 리더 인스턴스를 추가하도록 Amazon RDS를 구성합니다.",
      "C": "다중 AZ 배포와 함께 Amazon Aurora 를 사용합니다. Aurora 복제본을 사용하여 Aurora Auto Scaling을 구성합니다.",
      "D": "EC2 스팟 인스턴스와 함께 Memcached용 Amazon ElastiCache를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon Aurora Auto Scaling — 읽기 복제본 자동 추가/제거 (예측 불가 읽기 워크로드 대응)\n▸ Aurora 다중 AZ — 주 인스턴스 + 복제본들 다중 AZ 분산 (고가용성)\n▸ RDS Read Replicas — 수동 생성, 자동 확장 불가능 (읽기 전용)\n▸ Amazon Redshift — 분석 데이터웨어하우스, 트랜잭션 OLTP 부적합\n▸ ElastiCache — 캐시 계층 (고성능 읽기), 데이터베이스 대체 불가\n\n【정답 포인트】\n▸ \"읽기 요청이 더 많음\" → Aurora 읽기 복제본 (쓰기는 주 인스턴스, 읽기는 복제본 분산)\n▸ \"자동으로 확장\" → Aurora Auto Scaling으로 복제본 수 동적 조정\n▸ \"고가용성\" → 다중 AZ 배포로 장애 자동 페일오버\n▸ \"예측 불가 읽기 워크로드\" → 자동 확장으로 관리 오버헤드 제거\n\n【오답 체크】\n(A) Redshift는 OLAP 분석용 (트랜잭션 ACID 지원 제한)\n(B) RDS Read Replicas는 수동 관리, 자동 확장 불가 (예측 불가 워크로드 대응 어려움)\n(D) ElastiCache는 읽기 캐시 계층, 트랜잭션 데이터베이스 대체 불가 (데이터 일관성 문제)\n\n【시험 포인트】\n\"읽기 대량\" + \"자동 확장\" + \"고가용성\" + \"OLTP\" → Amazon Aurora + Auto Scaling 고정 정답. RDS는 수동 리더 추가, Aurora는 자동 복제본 조정 + 고가용성."
  },
  {
    "id": 15,
    "question": "최근에 AWS 로 마이그레이션한 회사가 프로덕션 VPC 로 들어오고 나가는 트래픽을 보호하는 솔루션을 구현하려고 합니다. 이 회사는 사내 데이터 센터에 검사 서버를 가지고 있었습니다. 검사 서버는 트래픽 흐름 검사 및 트래픽 필터링과 같은 특정 작업을 수행했습니다. 회사는 AWS 클라우드에서 동일한 기능을 갖기를 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "프로덕션 VPC에서 트래픽 검사 및 트래픽 필터링에 Amazon GuardDuty를 사용합니다.",
      "B": "트래픽 미러링을 사용하여 트래픽 검사 및 필터링을 위해 프로덕션 VPC 의 트래픽을 미러링합니다.",
      "C": "AWS 네트워크 방화벽을 사용하여 프로덕션 VPC 에 대한 트래픽 검사 및 트래픽 필터링에 필요한 규칙을 생성합니다.",
      "D": "AWS Firewall Manager 를 사용하여 프로덕션 VPC 에 대한 트래픽 검사 및 트래픽 필터링에 필요한 규칙을 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Network Firewall — VPC 수준 상태 기반 방화벽, 트래픽 검사 + 필터링 + 침입 탐지 (온프레미스 검사 서버 대체)\n▸ Amazon GuardDuty — 위협 탐지 서비스, 트래픽 검사 및 필터링 불가 (모니터링만)\n▸ Traffic Mirroring — VPC 트래픽 복사만, 필터링 기능 없음\n▸ AWS Firewall Manager — 다중 계정/리전 방화벽 정책 관리 (단일 VPC 정책은 Network Firewall 직접 사용)\n\n【정답 포인트】\n▸ \"검사 서버 기능\" → AWS Network Firewall로 상태 기반 검사 + 필터링\n▸ \"VPC 들어오고 나가는 트래픽\" → Network Firewall은 VPC 경계 방어 (Ingress/Egress 모두)\n▸ \"동일한 기능\" → 온프레미스 검사 서버 + 필터링 = 클라우드 네이티브 방화벽\n\n【오답 체크】\n(A) GuardDuty는 위협 탐지 기록만, 트래픽 필터링 기능 없음 (실시간 차단 불가)\n(B) Traffic Mirroring은 트래픽 복사만, 필터링/차단 기능 없음 (제3자 검사 어플라이언스 필요)\n(D) Firewall Manager는 다중 계정 정책 관리용, 단일 VPC에는 Network Firewall 직접 생성\n\n【시험 포인트】\n\"검사 + 필터링\" + \"VPC 경계\" → AWS Network Firewall 고정 정답. GuardDuty는 모니터링, Traffic Mirroring은 복사(BYOA), Network Firewall은 통합 차단."
  },
  {
    "id": 16,
    "question": "회사는 AWS 에서 데이터 레이크를 호스팅합니다. 데이터 레이크는 Amazon S3 및 PostgreSQL용 Amazon RDS의 데이터로 구성됩니다. 이 회사는 데이터 시각화를 제공하고 데이터 레이크 내의 모든 데이터 소스를 포함하는 보고 솔루션이 필요합니다. 회사의 관리 팀만 모든 시각화에 대한 전체 액세스 권한을 가져야 합니다. 나머지 회사는 제한된 액세스 권한만 가져야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon QuickSight 에서 분석을 생성합니다. 모든 데이터 소스를 연결하고 새 데이터 세트를 만듭니다. 대시보드를 게시하여 데이터를 시각화합니다. 적절한 IAM 역할과 대시보드를 공유합니다.",
      "B": "Amazon QuickSight 에서 분석을 생성합니다. 모든 데이터 소스를 연결하고 새 데이터 세트를 만듭니다. 대시보드를 게시하여 데이터를 시각화합니다. 적절한 사용자 및 그룹과 대시보드를 공유합니다.",
      "C": "Amazon S3의 데이터에 대한 AWS Glue 테이블 및 크롤러를 생성합니다. AWS Glue 추출, 변환 및 로드(ETL) 작업을 생성하여 보고서를 생성합니다. 보고서를 Amazon S3 에 게시합니다. S3 버킷 정책을 사용하여 보고서에 대한 액세스를 제한합니다.",
      "D": "Amazon S3의 데이터에 대한 AWS Glue 테이블과 크롤러를 생성합니다. Amazon Athena 연합 쿼리를 사용하여 PostgreSQL 용 Amazon RDS 내의 데이터에 액세스합니다. Amazon Athena 를 사용하여 보고서를 생성합니다. 보고서를 Amazon S3 에 게시합니다. S3 버킷 정책을 사용하여 보고서에 대한 액세스를 제한합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon QuickSight — BI/시각화 서비스, S3 + RDS 다중 소스 통합 + 행 수준 보안(RLS) 지원\n▸ QuickSight 사용자/그룹 기반 공유 — QuickSight 내에서 권한 세분화 (관리팀 전체 접근, 나머지 제한)\n▸ IAM 역할 기반 공유 — VPC/리소스 수준 접근 제어 (대시보드 행 수준 제어 불가)\n▸ AWS Glue ETL + S3 버킷 정책 — S3 액세스만 제어, RDS 통합 + 행 수준 제어 불가\n\n【정답 포인트】\n▸ \"S3 + RDS 모든 데이터 소스\" → QuickSight는 다중 소스 커넥터 내장\n▸ \"관리 팀만 전체 접근, 나머지는 제한\" → QuickSight 사용자/그룹 공유로 행 수준 보안 + 권한 세분화\n▸ \"데이터 시각화\" → QuickSight는 BI 대시보드 (Glue/Athena는 쿼리/ETL)\n\n【오답 체크】\n(A) IAM 역할 공유 → VPC/리소스 수준, QuickSight 대시보드 행 수준 권한 제어 불가 (누가 어떤 행을 볼 수 있는지 제한 미흡)\n(C) Glue + S3 정책 → RDS 통합 불가, S3 버킷 정책은 사용자별 권한 세분화 제한\n(D) Athena 연합 쿼리 + S3 정책 → 쿼리 도구일 뿐, 시각화 대시보드 및 행 수준 권한 제어 없음\n\n【시험 포인트】\n\"다중 소스\" + \"세분화된 권한\" + \"시각화\" → Amazon QuickSight + 사용자/그룹 공유 고정 정답. IAM은 AWS 리소스 권한, QuickSight는 대시보드 행 수준 보안 구분."
  },
  {
    "id": 17,
    "question": "회사에서 새로운 비즈니스 애플리케이션을 구현하고 있습니다. 이 애플리케이션은 두 개의 Amazon EC2 인스턴스에서 실행되며 문서 저장을 위해 Amazon S3 버킷을 사용합니다. 솔루션 설계자는 EC2 인스턴스가 S3 버킷에 액세스할 수 있는지 확인해야 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "S3 버킷에 대한 액세스 권한을 부여하는 IAM 역할을 생성합니다. 역할을 EC2 인스턴스에 연결합니다.",
      "B": "S3 버킷에 대한 액세스 권한을 부여하는 IAM 정책을 생성합니다. 정책을 EC2 인스턴스에 연결합니다.",
      "C": "S3 버킷에 대한 액세스 권한을 부여하는 IAM 그룹을 생성합니다. 그룹을 EC2 인스턴스에 연결합니다.",
      "D": "S3 버킷에 대한 액세스 권한을 부여하는 IAM 사용자를 생성합니다. 사용자 계정을 EC2 인스턴스에 연결합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ IAM Role (EC2용) — 임시 보안 자격 증명(STS)을 EC2 메타데이터로 제공 (키/암호 저장 불필요)\n▸ IAM Policy — 권한 규칙 정의 (정책 자체는 EC2에 연결 불가, 역할/사용자에만 연결)\n▸ IAM User — 장기 보안 자격 증명(Access Key ID/Secret), EC2 인스턴스 프로파일 미지원\n▸ IAM Group — 사용자 그룹화 (EC2 인스턴스 연결 불가)\n\n【정답 포인트】\n▸ \"EC2 인스턴스\" → Instance Profile로 IAM Role 연결 (AWS 서비스 권장)\n▸ \"S3 버킷 액세스\" → 역할에 S3 권한 정책 부여\n▸ \"액세스 확인\" → 임시 자격 증명으로 보안성 및 자동 로테이션 제공\n\n【오답 체크】\n(B) Policy는 권한 규칙, EC2 인스턴스에 직접 연결 불가 (Role을 통해 간접 연결)\n(C) Group은 사용자 그룹화용, EC2 인스턴스 연결 불가 (Role이 인스턴스용)\n(D) User는 개인 IAM 사용자용 (장기 Access Key), EC2 Instance Profile 미지원, 키 노출 위험\n\n【시험 포인트】\n\"EC2 + S3 액세스\" → IAM Role + Instance Profile 고정 정답. User는 개인(Programmatic), Group은 사용자 집합, Policy는 권한 규칙, Role은 임시 자격증명 제공."
  },
  {
    "id": 18,
    "question": "애플리케이션 개발 팀은 큰 이미지를 더 작은 압축 이미지로 변환하는 마이크로서비스를 설계하고 있습니다. 사용자가 웹 인터페이스를 통해 이미지를 업로드하면 마이크로 서비스는 이미지를 Amazon S3 버킷에 저장하고, AWS Lambda 함수로 이미지를 처리 및 압축하고, 다른 S3 버킷에 압축된 형태로 이미지를 저장해야 합니다. 솔루션 설계자는 내구성이 있는 상태 비저장 구성 요소를 사용하여 이미지를 자동으로 처리하는 솔루션을 설계해야 합니다. 이러한 요구 사항을 충족하는 작업 조합은 무엇입니까? (2개를 선택하세요.)",
    "options": {
      "A": "Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. 이미지가 S3 버킷에 업로드될 때 SQS 대기열에 알림을 보내도록 S3 버킷을 구성합니다.",
      "B": "Amazon Simple Queue Service(Amazon SQS) 대기열을 호출 소스로 사용하도록 Lambda 함수를 구성합니다. SQS 메시지가 성공적으로 처리되면 대기열에서 메시지를 삭제합니다.",
      "C": "새 업로드에 대해 S3 버킷을 모니터링하도록 Lambda 함수를 구성합니다. 업로드된 이미지가 감지되면 메모리의 텍스트 파일에 파일 이름을 쓰고 텍스트 파일을 사용하여 처리된 이미지를 추적합니다.",
      "D": "Amazon EC2 인스턴스를 시작하여 Amazon Simple Queue Service(Amazon SQS) 대기열을 모니터링합니다. 항목이 대기열에 추가되면 EC2 인스턴스의 텍스트 파일에 파일 이름을 기록하고 Lambda 함수를 호출합니다.",
      "E": "Amazon EventBridge(Amazon CloudWatch Events) 이벤트를 구성하여 S3 버킷을 모니터링합니다. 이미지가 업로드되면 추가 처리를 위해 애플리케이션 소유자의 이메일 주소와 함께 Amazon ample Notification Service(Amazon SNS) 주제에 알림을 보냅니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ S3 Event Notification → SQS — S3 객체 업로드 시 SQS에 메시지 자동 전달 (내구성)\n▸ Lambda + SQS Poll — SQS 메시지를 Lambda 호출 소스로 구성, 성공 시 메시지 자동 삭제 (상태 비저장)\n▸ Lambda 메모리 기반 추적 — 함수 실행 간 메모리 공유 불가 (상태 손실 위험)\n▸ EC2 모니터링 — 상태 저장 인스턴스, 서버리스 및 내구성 요구사항 위배\n▸ EventBridge → SNS — 알림 발송용 (처리 자동화 아님, SNS는 메시지 분산 미지원)\n\n【정답 포인트】\n(A) S3 이미지 업로드 → SQS 메시지 생성 (내구성, 자동화)\n(B) SQS 메시지 → Lambda 호출 + 처리 + 결과 저장 (상태 비저장 Lambda, 자동 삭제)\n▸ 합치면: S3 업로드 감지 → SQS 대기열 → Lambda 처리 → 압축 이미지 저장\n\n【오답 이유】\n(C) Lambda 메모리 파일 → 함수 호출 간 메모리 초기화 (상태 손실, 내구성 없음)\n(D) EC2 인스턴스 → 상태 저장 (서버리스 요구사항 위배, 텍스트 파일은 로컬 디스크 휘발성)\n(E) EventBridge → SNS 알림 → 이메일 발송만, 자동 Lambda 처리 및 압축 없음\n\n【시험 포인트】\n\"이미지 자동 처리\" + \"상태 비저장\" + \"내구성\" → S3 Event → SQS → Lambda 패턴 고정. EventBridge는 알림, EC2는 상태 저장."
  },
  {
    "id": 19,
    "question": "회사에 AWS 에 배포된 3 계층 웹 애플리케이션이 있습니다. 웹 서버는 VPC 의 퍼블릭 서브넷에 배포됩니다. 애플리케이션 서버와 데이터베이스 서버는 동일한 VPC 의 프라이빗 서브넷에 배포됩니다. 이 회사는 AWS Marketplace 의 타사 가상 방화벽 어플라이언스를 검사 VPC 에 배포했습니다. 어플라이언스는 IP 패킷을 수락할 수 있는 IP 인터페이스로 구성됩니다. 솔루션 설계자는 트래픽이 웹 서버에 도달하기 전에 애플리케이션에 대한 모든 트래픽을 검사하기 위해 웹 애플리케이션을 어플라이언스와 통합해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "애플리케이션 VPC의 퍼블릭 서브넷에 Network Load Balancer를 생성하여 패킷 검사를 위해 어플라이언스로 트래픽을 라우팅합니다.",
      "B": "애플리케이션 VPC 의 퍼블릭 서브넷에 Application Load Balancer 를 생성하여 패킷 검사를 위해 어플라이언스로 트래픽을 라우팅합니다.",
      "C": "전송 게이트웨이를 통해 들어오는 패킷을 라우팅하도록 라우팅 테이블을 구성하는 검사 VPC에 전송 게이트웨이를 배포합니다.",
      "D": "검사 VPC 에 게이트웨이 로드 밸런서를 배포합니다. 게이트웨이 로드 밸런서 엔드포인트를 생성하여 수신 패킷을 수신하고 패킷을 어플라이언스로 전달합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Gateway Load Balancer (GWLB) — Layer 3/4 패킷 검사 어플라이언스 통합, IP 패킷 투명 처리\n▸ GWLB Endpoint — 애플리케이션 VPC에서 검사 VPC 어플라이언스로 트래픽 리디렉션\n▸ Network Load Balancer — TCP/UDP 로드 밸런싱만, 패킷 검사 어플라이언스 통합 미흡\n▸ Application Load Balancer — HTTP/HTTPS 애플리케이션 로드 밸런싱, 투명한 패킷 검사 불가\n▸ Transit Gateway — VPC 간 네트워크 연결, 패킷 검사 어플라이언스 직접 통합 아님\n\n【정답 포인트】\n▸ \"타사 가상 방화벽 어플라이언스\" → GWLB + Endpoint로 투명하게 통합\n▸ \"IP 패킷 수락\" → GWLB는 Layer 3/4 패킷 기반 (HTTP 레이어 불필요)\n▸ \"트래픽이 웹 서버에 도달하기 전에 검사\" → 경로 상 자동 리디렉션\n▸ \"최소 운영 오버헤드\" → 경로 설정 후 자동 (VPC Flow Logs 설정 없음)\n\n【오답 체크】\n(A) NLB는 TCP/UDP 로드 밸런싱, 패킷 투명 처리 및 어플라이언스 통합 미지원\n(B) ALB는 HTTP 레이어, IP 패킷 검사 어플라이언스 통합 구조 부적합\n(C) Transit Gateway는 VPC 연결, 타사 어플라이언스 인라인 검사 구조 아님\n\n【시험 포인트】\n\"타사 어플라이언스\" + \"IP 패킷\" + \"투명 검사\" → Gateway Load Balancer 고정 정답. NLB/ALB는 로드 밸런싱, GWLB는 패킷 검사 어플라이언스 인라인 통합."
  },
  {
    "id": 20,
    "question": "회사에서 동일한 AWS 리전의 테스트 환경에 대량의 프로덕션 데이터를 복제하는 기능을 개선하려고 합니다. 데이터는 Amazon Elastic Block Store(Amazon EBS) 볼륨의 Amazon EC2 인스턴스에 저장됩니다. 복제된 데이터를 수정해도 프로덕션 환경에 영향을 주지 않아야 합니다. 이 데이터에 액세스하는 소프트웨어는 일관되게 높은 I/O 성능을 요구합니다. 솔루션 설계자는 프로덕션 데이터를 테스트 환경에 복제하는 데 필요한 시간을 최소화해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "프로덕션 EBS 볼륨의 EBS 스냅샷을 만듭니다. 테스트 환경의 EC2 인스턴스 스토어 볼륨에 스냅샷을 복원합니다.",
      "B": "EBS 다중 연결 기능을 사용하도록 프로덕션 EBS 볼륨을 구성합니다. 프로덕션 EBS 볼륨의 EBS 스냅샷을 만듭니다. 테스트 환경의 EC2 인스턴스에 프로덕션 EBS 볼륨을 연결합니다.",
      "C": "프로덕션 EBS 볼륨의 EBS 스냅샷을 만듭니다. 새 EBS 볼륨을 생성하고 초기화합니다. 프로덕션 EBS 스냅샷에서 볼륨을 복원하기 전에 테스트 환경의 EC2 인스턴스에 새 EBS 볼륨을 연결합니다.",
      "D": "프로덕션 EBS 볼륨의 EBS 스냅샷을 만듭니다. EBS 스냅샷에서 EBS 빠른 스냅샷 복원 기능을 켭니다. 스냅샷을 새 EBS 볼륨으로 복원합니다. 테스트 환경의 EC2 인스턴스에 새 EBS 볼륨을 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ EBS 스냅샷 — 볼륨의 지정 시점 백업, 다중 AZ/리전 사용 가능\n▸ EBS 빠른 스냅샷 복원(FSR) — 스냅샷 데이터를 빠르게 로드, 최소 복구 시간\n▸ 데이터 격리 — 테스트 수정이 프로덕션에 영향 없음\n\n【정답 포인트】\n▸ '시간 최소화' + '높은 I/O 성능' → FSR 필수\n▸ FSR은 스냅샷을 신속하게 새 볼륨으로 복원하며, 지연 로딩으로 빠른 액세스 가능\n▸ 프로덕션 볼륨 자체는 테스트에 연결하지 않음 (데이터 격리 원칙)\n\n【오답 체크】\n(A) 인스턴스 스토어 사용 — 임시 저장소, 인스턴스 중지 시 손실, I/O는 좋으나 데이터 보존 불가\n(B) 다중 연결 후 원본 볼륨 연결 — 프로덕션과 테스트 데이터 섞임, 격리 위반\n(C) 스냅샷 복원 수동 진행 — FSR 미사용, 복원 시간 길어짐\n\n【시험 포인트】\n빠른 복제 + 독립성 문제 → FSR (io2, io1), 반대로 비용 최소 → 일반 스냅샷 복원"
  },
  {
    "id": 21,
    "question": "전자 상거래 회사는 AWS 에서 하루 1 회 웹 사이트를 시작하려고 합니다. 매일 24 시간 동안 정확히 하나의 제품을 판매합니다. 회사는 피크 시간 동안 밀리초 지연 시간으로 시간당 수백만 개의 요청을 처리할 수 있기를 원합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 를 사용하여 다른 S3 버킷에 전체 웹 사이트를 호스팅합니다. Amazon CloudFront 배포를 추가합니다. S3 버킷을 배포의 오리진으로 설정합니다. Amazon S3 에 주문 데이터를 저장합니다.",
      "B": "여러 가용 영역의 Auto Scaling 그룹에서 실행되는 Amazon EC2 인스턴스에 전체 웹 사이트를 배포합니다. ALB(Application Load Balancer)를 추가하여 웹 사이트 트래픽을 분산합니다. 백엔드 API 에 대해 다른 ALB 를 추가하십시오. MySQL 용 Amazon RDS 에 데이터를 저장합니다.",
      "C": "컨테이너에서 실행되도록 전체 애플리케이션을 마이그레이션합니다. Amazon Elastic Kubernetes Service(Amazon EKS)에서 컨테이너를 호스팅합니다. Kubernetes 클러스터 자동 확장 처리를 사용하여 트래픽 버스트를 처리할 포드 수를 늘리거나 줄입니다. MySQL 용 Amazon RDS에 데이터를 저장합니다.",
      "D": "Amazon S3 버킷을 사용하여 웹 사이트의 정적 콘텐츠를 호스팅합니다. Amazon CloudFront 배포를 배포합니다. S3 버킷을 오리진으로 설정합니다. 백엔드 API 에 Amazon API Gateway 및 AWS Lambda 함수를 사용합니다. Amazon DynamoDB 에 데이터를 저장합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 정적 콘텐츠 — HTML, CSS, JS, 이미지 (S3 + CloudFront)\n▸ Lambda + API Gateway — 서버리스 API, 자동 확장, 밀리초 지연\n▸ DynamoDB — NoSQL, 무제한 처리량 확장\n▸ 운영 오버헤드 최소화 — EC2/EKS 관리 불필요\n\n【정답 포인트】\n▸ '수백만 요청' + '밀리초 지연' + '최소 오버헤드' → 서버리스 우선\n▸ CloudFront + S3: 글로벌 캐싱, 정적 자산 빠른 배포\n▸ Lambda: 트래픽 버스트에 자동 스케일, 관리 부담 0\n▸ DynamoDB: 요청 수에 따라 선형 확장\n\n【오답 체크】\n(A) S3만으로 주문 저장 — 트랜잭션 처리 불가, 동적 API 부재\n(B) EC2 + ASG + RDS — 운영 오버헤드 높음 (패칭, 용량 관리)\n(C) EKS 클러스터 — 복잡성 증가, 마이크로서비스 오버엔지니어링\n\n【시험 포인트】\n'최소 오버헤드' 키워드 → 서버리스 (Lambda), 높은 트래픽 → DynamoDB (온디맨드)"
  },
  {
    "id": 22,
    "question": "솔루션 설계자는 Amazon S3 를 사용하여 새로운 디지털 미디어 애플리케이션의 스토리지 아키텍처를 설계하고 있습니다. 미디어 파일은 가용 영역 손실에 대한 복원력이 있어야 합니다. 일부 파일은 자주 액세스되는 반면 다른 파일은 예측할 수 없는 패턴으로 거의 액세스되지 않습니다. 솔루션 설계자는 미디어 파일을 저장하고 검색하는 비용을 최소화해야 합니다. 이러한 요구 사항을 충족하는 스토리지 옵션은 무엇입니까?",
    "options": {
      "A": "S3 Standard (S3 표준)",
      "B": "S3 Intelligent-Tiering (S3 지능형 계층화)",
      "C": "S3 Standard-Infrequent Access(S3 Standard-IA)",
      "D": "S3 One Zone-Infrequent Access(S3 One Zone-IA)"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 Intelligent-Tiering — 접근 패턴 자동 모니터링, 계층 간 이동\n▸ AZ 복원력 — 데이터 중복(>3AZ), Zone-IA 제외\n▸ 예측 불가 접근 패턴 — 수동 관리 불가, 자동 최적화 필수\n\n【정답 포인트】\n▸ '가용 영역 손실 복원' → Zone-IA 탈락 (1AZ만)\n▸ '예측 불가 패턴' → 수동 Glacier 전환 불가, Intelligent-Tiering 자동\n▸ '비용 최소화' → 미접근 파일 자동으로 저가 계층(Archive, Deep Archive)으로 이동\n▸ Intelligent-Tiering은 접근 빈도 모니터링 후 Frequent(0-30일) → Infrequent(30-90일) → Archive(90-180일)\n\n【오답 체크】\n(A) S3 Standard — 항상 최고 비용, 미사용 파일에 낭비\n(C) S3 Standard-IA — 고정된 낮은 접근율, 자주 사용하는 파일도 IA 요금 부담\n(D) One Zone-IA — AZ 손실 시 데이터 유실\n\n【시험 포인트】\n'예측 불가 + 비용 최소화' → Intelligent-Tiering (자동), '예측 가능 + 거의 미사용' → Standard-IA (고정)"
  },
  {
    "id": 23,
    "question": "회사에서 Amazon S3 Standard 스토리지를 사용하여 백업 파일을 저장하고 있습니다. 1개월 동안 파일에 자주 액세스합니다. 단, 1 개월 이후에는 파일에 접근하지 않습니다. 회사는 파일을 무기한 보관해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 스토리지 솔루션은 무엇입니까?",
    "options": {
      "A": "객체를 자동으로 마이그레이션하도록 S3 Intelligent-Tiering을 구성합니다.",
      "B": "S3 수명 주기 구성을 생성하여 1개월 후에 S3 Standard에서 S3 Glacier Deep Archive로 객체를 전환합니다.",
      "C": "S3 수명 주기 구성을 생성하여 1 개월 후에 객체를 S3 Standard 에서 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다.",
      "D": "S3 수명 주기 구성을 생성하여 1 개월 후에 객체를 S3 Standard 에서 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 수명 주기 정책 — 시간 기반 자동 전환 규칙\n▸ S3 Glacier Deep Archive — 장기 보관 최저 비용 ($1/TB), 검색 12시간\n▸ 예측 가능한 접근 패턴 — 명확한 경계(1개월)\n\n【정답 포인트】\n▸ '1개월 후 접근 없음' + '무기한 보관' → 최저가 계층 필수\n▸ 수명 주기로 Standard → Glacier Deep Archive 자동 전환\n▸ Deep Archive: 월 유지 비용 ~1/50 (Standard 대비), 복원 예측 가능\n▸ '가장 비용 효율적' → Glacier Deep Archive (가장 저렴)\n\n【오답 체크】\n(A) Intelligent-Tiering — 거의 0 접근이므로 Archive로 갈 텐데, 최종 목표는 Deep Archive\n(C) Standard-IA — 1개월 후 완전 미사용이므로 IA(~$12/TB)는 비효율, Deep Archive($1/TB) 선호\n(D) One Zone-IA — 백업의 가용성 위험(1AZ 손실)\n\n【시험 포인트】\n'무기한 보관 + 비용 최소' → Deep Archive, '가끔 접근 + 비용 최소' → Standard-IA"
  },
  {
    "id": 24,
    "question": "회사는 가장 최근 청구서에서 Amazon EC2 비용 증가를 관찰했습니다. 청구 팀은 몇 개의 EC2 인스턴스에 대한 인스턴스 유형의 원치 않는 수직적 확장을 발견했습니다. 솔루션 설계자는 지난 2 개월간의 EC2 비용을 비교하는 그래프를 생성하고 심층 분석을 수행하여 수직적 확장의 근본 원인을 식별해야 합니다. 솔루션 설계자는 운영 오버헤드가 가장 적은 정보를 어떻게 생성해야 합니까?",
    "options": {
      "A": "AWS 예산을 사용하여 예산 보고서를 생성하고 인스턴스 유형에 따라 EC2 비용을 비교합니다.",
      "B": "Cost Explorer 의 세분화된 필터링 기능을 사용하여 인스턴스 유형을 기반으로 EC2 비용에 대한 심층 분석을 수행합니다.",
      "C": "AWS Billing and Cost Management 대시보드의 그래프를 사용하여 지난 2 개월 동안의 인스턴스 유형을 기준으로 EC2 비용을 비교합니다.",
      "D": "AWS 비용 및 사용 보고서를 사용하여 보고서를 생성하고 Amazon S3 버킷으로 보냅니다. Amazon S3 와 함께 Amazon QuickSight 를 소스로 사용하여 인스턴스 유형을 기반으로 대화형 그래프를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Cost Explorer — 쿼리, 그래프, 필터(서비스, 인스턴스유형, 태그, 시간)\n▸ AWS Budget — 경고, 예측, 제한(정책 설정 X)\n▸ 심층 분석 — 다차원 필터링, 원인 추적\n▸ 운영 오버헤드 최소 — 빠른 설정, 추가 인프라 불필요\n\n【정답 포인트】\n▸ '근본 원인 식별' + '인스턴스 유형별 비교' → Cost Explorer 필터링\n▸ Cost Explorer: 즉시 사용 가능, 시간/서비스/유형 등 동적 필터\n▸ '2개월 비교 그래프' → Cost Explorer가 기본 제공\n▸ 오버헤드 최소 → S3 + QuickSight 설정 불필요\n\n【오답 체크】\n(A) AWS Budget — 경고/추적 도구, 심층 분석(인스턴스유형 분해) 불가\n(C) Billing Dashboard — 고수준 요약만, 세분화 필터 제한적\n(D) CUR + QuickSight — 강력하나 설정/유지 오버헤드 높음 (S3 저장소, QuickSight 구성)\n\n【시험 포인트】\n'빠른 분석' → Cost Explorer, '반복 자동화' → CUR + QuickSight"
  },
  {
    "id": 25,
    "question": "회사에서 응용 프로그램을 설계하고 있습니다. 애플리케이션은 AWS Lambda 함수를 사용하여 Amazon API Gateway 를 통해 정보를 수신하고 Amazon Aurora PostgreSQL 데이터베이스에 정보를 저장합니다. 개념 증명 단계에서 회사는 데이터베이스에 로드해야 하는 대용량 데이터를 처리하기 위해 Lambda 할당량을 크게 늘려야 합니다. 솔루션 설계자는 확장성을 개선하고 구성 노력을 최소화하기 위해 새로운 설계를 권장해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Lambda 함수 코드를 Amazon EC2 인스턴스에서 실행되는 Apache Tomcat 코드로 리팩터링합니다. 네이티브 JDBC(Java Database Connectivity) 드라이버를 사용하여 데이터베이스를 연결합니다.",
      "B": "플랫폼을 Aurora 에서 Amazon DynamoDProvision a DynamoDB Accelerator(DAX) 클러스터로 변경합니다. DAX 클라이언트 SDK 를 사용하여 DAX 클러스터에서 기존 DynamoDB API 호출을 가리킵니다.",
      "C": "두 개의 Lambda 함수를 설정합니다. 정보를 수신할 하나의 기능을 구성하십시오. 정보를 데이터베이스에 로드하도록 다른 기능을 구성하십시오. Amazon Simple Notification Service(Amazon SNS)를 사용하여 Lambda 함수를 통합합니다.",
      "D": "두 개의 Lambda 함수를 설정합니다. 정보를 수신할 하나의 기능을 구성하십시오. 정보를 데이터베이스에 로드하도록 다른 기능을 구성하십시오. Amazon Simple Queue Service(Amazon SQS) 대기열을 사용하여 Lambda 함수를 통합합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Lambda 스로틀링 — 동시 실행 수 제한(기본 1000)\n▸ SQS — 비동기 큐, 메시지 유지, 스로틀링 완화\n▸ SNS — 즉시 메시지 전달, 손실 위험\n▸ 구성 노력 최소 — Lambda 할당량 증가 요청 불필요\n\n【정답 포인트】\n▸ 대용량 데이터 → Lambda 동시 실행 한계 도달\n▸ SQS: 수신 함수와 DB 로드 함수 분리, 큐가 버퍼 역할\n▸ SQS는 메시지 유지(최대 14일) → 재시도 가능, 안정성 높음\n▸ API Gateway → SQS → Lambda(DB 로드) 흐름으로 스로틀 완화\n▸ '구성 노력 최소' → 할당량 증가 요청 제거\n\n【오답 체크】\n(A) EC2 + Tomcat — 서버 관리 오버헤드 증가\n(B) DynamoDB + DAX — 플랫폼 마이그레이션 비용 높음, 문제는 Lambda 제한이지 DB 아님\n(C) Lambda + SNS — SNS는 즉시 메시지만 전달, 손실 위험, 스로틀 완화 안 함\n\n【시험 포인트】\nLambda 스로틀 + 대량 비동기 처리 → SQS, 단순 이벤트 알림 → SNS"
  },
  {
    "id": 26,
    "question": "회사는 AWS 클라우드 배포를 검토하여 Amazon S3 버킷에 무단 구성 변경이 없는지 확인해야 합니다. 솔루션 설계자는 이 목표를 달성하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "적절한 규칙으로 AWS Config를 켭니다.",
      "B": "적절한 검사를 통해 AWS Trusted Advisor를 켭니다.",
      "C": "적절한 평가 템플릿으로 Amazon Inspector를 켭니다.",
      "D": "Amazon S3 서버 액세스 로깅을 켭니다. Amazon EventBridge(Amazon Cloud Watch Events)를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Config — 구성 변경 추적, 규칙(s3-bucket-public-read-prohibited 등)\n▸ Trusted Advisor — 비용, 성능, 보안, 한계점 체크(과제를 알림)\n▸ Inspector — EC2 인스턴스 취약점 스캔\n▸ S3 로깅 — API 호출 기록 (누가, 언제 접근)\n\n【정답 포인트】\n▸ '구성 변경 감지' → Config (구성 상태 기록, 규칙 평가)\n▸ Config 규칙: S3 버킷 암호화, 버저닝, 공개 접근 등 모니터\n▸ 시간 경과에 따른 변경 이력 추적 가능\n▸ '무단 변경' 감지 → Config가 가장 적합\n\n【오답 체크】\n(B) Trusted Advisor — 일반 권고사항(베스트 프랙티스), 실시간 변경 추적 X\n(C) Inspector — EC2 취약점 스캔, S3 구성 감시 X\n(D) S3 로깅 + EventBridge — API 호출 로그만, 구성 정책(encryption, versioning) 변경 추적 안 함\n\n【시험 포인트】\n'구성 변경 추적' → AWS Config, 'API 호출 기록' → CloudTrail"
  },
  {
    "id": 27,
    "question": "회사에서 새 애플리케이션을 시작하고 Amazon CloudWatch 대시보드에 애플리케이션 지표를 표시합니다. 회사의 제품 관리자는 이 대시보드에 주기적으로 액세스해야 합니다. 제품 관리자에게 AWS 계정이 없습니다. 솔루션 설계자는 최소 권한 원칙에 따라 제품 관리자에 대한 액세스를 제공해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "CloudWatch 콘솔에서 대시보드를 공유합니다. 제품 관리자의 이메일 주소를 입력하고 공유 단계를 완료합니다. 대시보드에 대한 공유 가능한 링크를 제품 관리자에게 제공하십시오.",
      "B": "특히 제품 관리자를 위한 IAM 사용자를 생성합니다. CloudWatchReadOnlyAccess AWS 관리형 정책을 사용자에게 연결합니다. 새 로그인 자격 증명을 제품 관리자와 공유하십시오. 올바른 대시보드의 브라우저 URL을 제품 관리자와 공유하십시오.",
      "C": "회사 직원을 위한 IAM 사용자를 생성합니다. ViewOnlyAccess AWS 관리형 정책을 IAM 사용자에게 연결합니다. 새 로그인 자격 증명을 제품 관리자와 공유하십시오. 제품 관리자에게 CloudWatch 콘솔로 이동하여 대시보드 섹션에서 이름으로 대시보드를 찾으라고 요청합니다.",
      "D": "퍼블릭 서브넷에 배스천 서버를 배포합니다. 제품 관리자가 대시보드에 액세스해야 하는 경우 서버를 시작하고 RDP 자격 증명을 공유합니다. 배스천 서버에서 대시보드를 볼 수 있는 적절한 권한이 있는 캐시된 AWS 자격 증명으로 대시보드 URL 을 열도록 브라우저가 구성되어 있는지 확인합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudWatch 대시보드 공유 — 공개 링크, AWS 계정 불필요\n▸ 최소 권한 원칙 — 대시보드 열람만, IAM 계정 생성 불필요\n▸ 공유 가능한 링크 — 이메일 전달만으로 충분\n\n【정답 포인트】\n▸ '제품 관리자에게 AWS 계정 없음' → IAM 사용자 생성 비효율\n▸ CloudWatch 대시보드는 '공유' 기능 제공 (이메일 초대)\n▸ 공유된 대시보드 링크로 바로 접근, 추가 인증 불필요\n▸ '최소 권한' → 읽기만 가능, 대시보드 수정/삭제 불가\n\n【오답 체크】\n(B) IAM 사용자 생성 — 불필요한 복잡성, AWS 계정 없는 외부자 관리 어려움\n(C) ViewOnlyAccess — CloudWatch 전체가 아닌 대시보드만 필요, 과도한 권한\n(D) 배스천 서버 — 극도로 복잡, 불필요한 인프라\n\n【시험 포인트】\n'외부자 + 읽기 전용' → CloudWatch 공유 링크, 'IAM 사용자 권한' → 직원용"
  },
  {
    "id": 28,
    "question": "회사에서 애플리케이션을 AWS 로 마이그레이션하고 있습니다. 응용 프로그램은 다른 계정에 배포됩니다. 회사는 AWS Organizations 를 사용하여 중앙에서 계정을 관리합니다. 회사의 보안 팀은 회사의 모든 계정에 SSO(Single Sign-On) 솔루션이 필요합니다. 회사는 사내 자체 관리 Microsoft Active Directory에서 사용자 및 그룹을 계속 관리해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS SSO 콘솔에서 AWS Single Sign-On(AWS SSO)을 활성화합니다. 단방향 포리스트 트러스트 또는 단방향 도메인 트러스트를 생성하여 Microsoft Active Directory 용 AWS Directory Service 를 사용하여 회사의 자체 관리형 Microsoft Active Directory 를 AWS SSO와 연결합니다.",
      "B": "AWS SSO 콘솔에서 AWS Single Sign-On(AWS SSO)을 활성화합니다. Microsoft Active Directory 용 AWS Directory Service 를 사용하여 회사의 자체 관리형 Microsoft Active Directory를 AWS SSO와 연결하는 양방향 포리스트 트러스트를 생성합니다.",
      "C": "AWS 디렉터리 서비스를 사용합니다. 회사의 자체 관리 Microsoft Active Directory 와 양방향 신뢰 관계를 만드십시오.",
      "D": "온프레미스에 ID 공급자(IdP)를 배포합니다. AWS SSO 콘솔에서 AWS Single Sign-On(AWS SSO)을 활성화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS SSO — 다중 AWS 계정 통합 로그인\n▸ AWS Managed Microsoft AD — 온프레미스 AD와 양방향 트러스트 지원\n▸ 양방향 포리스트 트러스트 — 양쪽 방향 동기화, 사용자 관리 온프레미스 유지\n▸ Organizations — 중앙 계정 관리\n\n【정답 포인트】\n▸ 'SSO 필요' + '자체 관리 AD 유지' → AWS SSO + Managed AD\n▸ 양방향 트러스트: 온프레미스 AD에서 사용자 추가 시 자동으로 AWS에 반영\n▸ AWS SSO가 AD와 동기화, 모든 계정에 SSO 적용 가능\n▸ 사용자 관리은 여전히 온프레미스 AD 담당\n\n【오답 체크】\n(A) 단방향 트러스트 — AWS → AD 신뢰만, 사용자 동기화 불완전\n(C) AWS Directory Service만 — SSO 기능 부재, Organizations 연결 불가\n(D) 온프레미스 IdP — 복잡, AWS가 관리하는 표준 솔루션 아님\n\n【시험 포인트】\n'온프레미스 AD 유지 + 다중 계정 SSO' → Managed AD + 양방향 트러스트"
  },
  {
    "id": 29,
    "question": "회사는 UDP 연결을 사용하는 VoIP(Voice over Internet Protocol) 서비스를 제공합니다. 이 서비스는 Auto Scaling 그룹에서 실행되는 Amazon EC2 인스턴스로 구성됩니다. 회사는 여러 AWS 리전에 배포하고 있습니다. 회사는 지연 시간이 가장 짧은 리전으로 사용자를 라우팅해야 합니다. 이 회사는 또한 지역 간 자동 장애 조치가 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "NLB(Network Load Balancer) 및 연결된 대상 그룹을 배포합니다. 대상 그룹을 Auto Scaling 그룹과 연결합니다. 각 리전에서 NLB 를 AWS Global Accelerator 엔드포인트로 사용합니다.",
      "B": "ALB(Application Load Balancer) 및 연결된 대상 그룹을 배포합니다. 대상 그룹을 Auto Scaling 그룹과 연결합니다. 각 리전에서 ALB 를 AWS Global Accelerator 엔드포인트로 사용합니다.",
      "C": "NLB(Network Load Balancer) 및 연결된 대상 그룹을 배포합니다. 대상 그룹을 Auto Scaling 그룹과 연결합니다. 각 NLB 의 별칭을 가리키는 Amazon Route 53 지연 시간 레코드를 생성합니다. 지연 시간 레코드를 오리진으로 사용하는 Amazon CloudFront 배포를 생성합니다.",
      "D": "ALB(Application Load Balancer) 및 연결된 대상 그룹을 배포합니다. 대상 그룹을 Auto Scaling 그룹과 연결합니다. 각 ALB의 별칭을 가리키는 Amazon Route 53 가중치 레코드를 생성합니다. 가중 레코드를 오리진으로 사용하는 Amazon CloudFront 배포를 배포합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ UDP + 지연시간 최소화 → NLB (ALB는 HTTP/S만)\n▸ AWS Global Accelerator — 지연시간 기반 라우팅, 자동 장애조치\n▸ NLB — 초저지연(마이크로초), UDP 지원, 극고처리량\n▸ 다중 리전 — Accelerator가 엔드포인트 자동 모니터\n\n【정답 포인트】\n▸ 'UDP 연결' → ALB 불가 (HTTP/S 전용), NLB만 가능\n▸ Global Accelerator: 가장 낮은 지연시간 리전으로 라우팅\n▸ 헬스체크 기반 자동 장애조치 (리전 다운 시 다른 리전으로)\n▸ VoIP = 실시간 통신, 지연시간 < 150ms 필수\n\n【오답 체크】\n(B) ALB — UDP 지원 안 함, HTTP/S만 처리\n(C) Route 53 + CloudFront — 지연시간 라우팅은 맞으나 CloudFront는 HTTP/S 캐싱용, UDP 전혀 지원 X\n(D) ALB + Route 53 — ALB가 UDP 지원 안 하고, CloudFront도 마찬가지\n\n【시험 포인트】\n'UDP + 다중 리전 지연시간' → Global Accelerator + NLB"
  },
  {
    "id": 30,
    "question": "개발 팀은 성능 개선 도우미가 활성화된 MySQL DB 인스턴스용 범용 Amazon RDS 에서 매월 리소스 집약적 테스트를 실행합니다. 테스트는 한 달에 한 번 48 시간 동안 지속되며 데이터베이스를 사용하는 유일한 프로세스입니다. 팀은 DB 인스턴스의 컴퓨팅 및 메모리 속성을 줄이지 않고 테스트 실행 비용을 줄이려고 합니다. 어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": {
      "A": "테스트가 완료되면 DB 인스턴스를 중지합니다. 필요한 경우 DB 인스턴스를 다시 시작합니다.",
      "B": "DB 인스턴스와 함께 Auto Scaling 정책을 사용하여 테스트가 완료되면 자동으로 확장합니다.",
      "C": "테스트가 완료되면 스냅샷을 만듭니다. DB 인스턴스를 종료하고 필요한 경우 스냅샷을 복원합니다.",
      "D": "테스트가 완료되면 DB 인스턴스를 저용량 인스턴스로 수정합니다. 필요한 경우 DB 인스턴스를 다시 수정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ RDS 스냅샷 — 데이터 백업, 스토리지만 과금\n▸ DB 인스턴스 정지 — 전체 인스턴스 유지 비용(약 10% 과금)\n▸ DB 인스턴스 삭제 — 0비용, 언제든 복원 가능\n▸ 월 1회 48시간 테스트 — 99% 유휴 상태\n\n【정답 포인트】\n▸ '비용 줄이되 스펙 유지' → 인스턴스 삭제 + 스냅샷만 보관\n▸ 스냅샷: 월 ~$0.10/GB (EBS 스토리지 기준), 인스턴스 비용 0\n▸ 테스트 필요 시 스냅샷에서 복원, 동일 스펙 restore\n▸ 스펙 변경(크기 축소) 불필요 → C안 (복원 시 원본 스펙)\n\n【오답 체크】\n(A) 인스턴스 중지 — AWS에서 약 10% 비용 여전히 과금 (EBS 저장소)\n(B) Auto Scaling — RDS는 Auto Scaling으로 스케일 다운 불가\n(D) 저용량으로 축소 — 테스트 필요시 다시 상향 필요 (운영 오버헤드)\n\n【시험 포인트】\n'일시적 리소스 + 비용 최소' → Delete + Snapshot 복원"
  },
  {
    "id": 31,
    "question": "AWS에서 웹 애플리케이션을 호스팅하는 회사는 모든 Amazon EC2 인스턴스를 보장하기를 원합니다. Amazon RDS DB 인스턴스. Amazon Redshift 클러스터는 태그로 구성됩니다. 회사는 이 검사를 구성하고 운영하는 노력을 최소화하기를 원합니다. 솔루션 설계자는 이를 달성하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS Config 규칙을 사용하여 적절하게 태그가 지정되지 않은 리소스를 정의하고 감지합니다.",
      "B": "비용 탐색기를 사용하여 제대로 태그가 지정되지 않은 리소스를 표시합니다. 해당 리소스에 수동으로 태그를 지정합니다.",
      "C": "적절한 태그 할당을 위해 모든 리소스를 확인하는 API 호출을 작성합니다. EC2 인스턴스에서 주기적으로 코드를 실행합니다.",
      "D": "적절한 태그 할당을 위해 모든 리소스를 확인하는 API 호출을 작성합니다. Amazon CloudWatch를 통해 AWS Lambda 함수를 예약하여 코드를 주기적으로 실행합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Config 규칙 — 리소스 구성 규칙 자동화\n▸ required-tags 규칙 — 필수 태그 확인\n▸ 운영 노력 최소화 — 자동화, 관리형 서비스\n\n【정답 포인트】\n▸ '태그 규정 준수 모니터링' → AWS Config의 핵심 용도\n▸ required-tags 규칙으로 EC2, RDS, Redshift 한 번에 확인\n▸ 비준수 리소스 자동 감지, 대시보드 표시\n▸ 운영 오버헤드 0 (관리형 서비스)\n\n【오답 체크】\n(B) Cost Explorer — 비용 기반 분석, 태그 규정 준수 추적 X, 수동 작업\n(C) 커스텀 API 호출 — EC2에서 수동 실행, 중단 시 실행 안 됨\n(D) Lambda 예약 — 가능하지만 Config 규칙이 더 간단, 원래 목적지\n\n【시험 포인트】\n'태그 규정 준수' → AWS Config, '비용 추적' → Cost Explorer"
  },
  {
    "id": 32,
    "question": "개발 팀은 다른 팀이 액세스할 웹사이트를 호스팅해야 합니다. 웹사이트 콘텐츠는 HTML, CSS, 클라이언트 측 JavaScript 및 이미지로 구성됩니다. 웹 사이트 호스팅에 가장 비용 효율적인 방법은 무엇입니까?",
    "options": {
      "A": "웹 사이트를 컨테이너화하고 AWS Fargate에서 호스팅합니다.",
      "B": "Amazon S3 버킷을 생성하고 거기에서 웹 사이트를 호스팅합니다.",
      "C": "Amazon EC2 인스턴스에 웹 서버를 배포하여 웹 사이트를 호스팅합니다.",
      "D": "Express.js 프레임워크를 사용하는 AWS Lambda 대상으로 Application Load Balancer를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 정적 웹사이트 — HTML, CSS, JS, 이미지만\n▸ S3 정적 호스팅 — 월 $0.023/GB (가장 저가)\n▸ 비용 효율성 최우선 — 동적 백엔드 불필요\n\n【정답 포인트】\n▸ '정적 콘텐츠만' → S3 정적 호스팅 최적\n▸ 서버 불필요, 스토리지 + 요청비만 과금\n▸ CloudFront 연결로 글로벌 배포 가능\n▸ '가장 비용 효율적' → S3이 압도적\n\n【오답 체크】\n(A) Fargate — 컨테이너 오버헤드, 최소 비용 높음, 동적 기능 불필요\n(C) EC2 — 인스턴스 비용(시간당 $0.01~), S3의 100배 이상\n(D) Lambda + ALB — 가능하나 정적 호스팅 대비 복잡, 비용 높음\n\n【시험 포인트】\n'정적 웹사이트 + 비용' → S3, '동적 + 서버리스' → Lambda"
  },
  {
    "id": 33,
    "question": "회사는 AWS 에서 온라인 마켓플레이스 웹 애플리케이션을 실행합니다. 이 애플리케이션은 피크 시간에 수십만 명의 사용자에게 서비스를 제공합니다. 이 회사는 수백만 건의 금융 거래 세부 정보를 다른 여러 내부 애플리케이션과 공유할 수 있는 확장 가능한 거의 실시간 솔루션이 필요합니다. 또한 지연 시간이 짧은 검색을 위해 문서 데이터베이스에 저장하기 전에 민감한 데이터를 제거하기 위해 트랜잭션을 처리해야 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "트랜잭션 데이터를 Amazon DynamoDB 에 저장합니다. 쓰기 시 모든 트랜잭션에서 민감한 데이터를 제거하도록 DynamoDB 에서 규칙을 설정합니다. DynamoDB 스트림을 사용하여 다른 애플리케이션과 트랜잭션 데이터를 공유합니다.",
      "B": "트랜잭션 데이터를 Amazon Kinesis Data Firehose로 스트리밍하여 Amazon DynamoDB 및 Amazon S3 에 데이터를 저장합니다. Kinesis Data Firehose 와 AWS Lambda 통합을 사용하여 민감한 데이터를 제거하십시오. 다른 애플리케이션은 Amazon S3 에 저장된 데이터를 사용할 수 있습니다.",
      "C": "트랜잭션 데이터를 Amazon Kinesis Data Streams 로 스트리밍합니다. AWS Lambda 통합을 사용하여 모든 트랜잭션에서 민감한 데이터를 제거한 다음 Amazon DynamoDB 에 트랜잭션 데이터를 저장합니다. 다른 애플리케이션은 Kinesis 데이터 스트림의 트랜잭션 데이터를 사용할 수 있습니다.",
      "D": "일괄 처리된 트랜잭션 데이터를 Amazon S3 에 파일로 저장합니다. Amazon S3 에서 파일을 업데이트하기 전에 AWS Lambda 를 사용하여 모든 파일을 처리하고 민감한 데이터를 제거하십시오. 그러면 Lambda 함수가 Amazon DynamoDB 에 데이터를 저장합니다. 다른 애플리케이션은 Amazon S3 에 저장된 트랜잭션 파일을 사용할 수 있습니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Kinesis Data Streams — 실시간 스트리밍, 여러 소비자 병렬 처리\n▸ Lambda 변환 — 민감 데이터 제거 (ETL)\n▸ DynamoDB — 검색용 문서 DB, 낮은 지연시간\n▸ 다중 애플리케이션 공유 — Kinesis 스트림이 다중 consumer 지원\n\n【정답 포인트】\n▸ '거의 실시간' + '확장 가능' → Kinesis Data Streams\n▸ Lambda: 스트림 데이터 읽음 → 민감정보 제거 → DynamoDB 저장\n▸ 다른 앱: Kinesis 스트림에서 직접 정제된 데이터 소비\n▸ '여러 애플리케이션 공유' → Kinesis (pub-sub 패턴)\n▸ '지연시간 짧은 검색' → DynamoDB 최적\n\n【오답 체크】\n(A) DynamoDB만 — 민감정보 제거를 DynamoDB 규칙으로 불가, Lambda 변환 필요\n(B) Firehose + S3 — 배치 로드(5분 지연), '거의 실시간' 아님, 다중 소비자 어려움\n(D) S3 배치 — 일괄처리(긴 지연), 실시간 아님, 다중 앱 공유 복잡\n\n【시험 포인트】\n'실시간 다중 소비자 + 변환' → Kinesis Data Streams + Lambda"
  },
  {
    "id": 34,
    "question": "회사는 AWS 에서 다중 계층 애플리케이션을 호스팅합니다. 규정 준수, 거버넌스, 감사 및 보안을 위해 회사는 AWS 리소스의 구성 변경 사항을 추적하고 이러한 리소스에 대한 API 호출 기록을 기록해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS CloudTrail을 사용하여 구성 변경을 추적하고 AWS Config를 사용하여 API 호출을 기록하십시오.",
      "B": "AWS Config를 사용하여 구성 변경을 추적하고 AWS CloudTrail을 사용하여 API 호출을 기록합니다.",
      "C": "AWS Config 를 사용하여 구성 변경을 추적하고 Amazon CloudWatch 를 사용하여 API 호출을 기록합니다.",
      "D": "AWS CloudTrail을 사용하여 구성 변경을 추적하고 Amazon CloudWatch를 사용하여 API 호출을 기록합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Config — 리소스 구성 상태 변경 기록 (파일, 속성, 정책)\n▸ AWS CloudTrail — API 호출 감사 로그 (who, when, what API)\n▸ 구성 변경 ≠ API 호출 (Config: what changed, CloudTrail: who called)\n\n【정답 포인트】\n▸ Config: 리소스 속성 변경 추적 (EC2 태그, S3 암호화, SG 규칙)\n▸ CloudTrail: 모든 API 호출 기록 (CreateSecurityGroup, ModifyDBInstance)\n▸ '감사 + 규정 준수' → Config (구성) + CloudTrail (호출 증거)\n▸ 순서 명확: Config 변경 추적 → CloudTrail 호출 기록\n\n【오답 체크】\n(A) 순서 뒤집음 — CloudTrail은 API, Config는 상태 추적\n(C) CloudWatch로 API 기록 — CloudWatch는 로그/메트릭 시스템, 규정 준수용 아님\n(D) CloudWatch로 API 기록 — 같은 이유, CloudTrail이 표준\n\n【시험 포인트】\n'구성 추적' → Config, 'API 감사' → CloudTrail, '규정 준수' → 둘 다"
  },
  {
    "id": 35,
    "question": "한 회사가 AWS 클라우드에서 공개 웹 애플리케이션 출시를 준비하고 있습니다. 아키텍처는 Elastic Load Balancer(ELB) 뒤의 VPC 내 Amazon EC2 인스턴스로 구성됩니다. DNS 에는 타사 서비스가 사용됩니다. 회사의 솔루션 설계자는 대규모 DDoS 공격을 감지하고 보호하기 위한 솔루션을 권장해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "계정에서 Amazon GuardDuty를 활성화합니다.",
      "B": "EC2 인스턴스에서 Amazon Inspector를 활성화합니다.",
      "C": "AWS Shield를 활성화하고 여기에 Amazon Route 53을 할당합니다.",
      "D": "AWS Shield Advanced를 활성화하고 ELB를 할당합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Shield Standard — 모든 AWS 고객 기본 DDoS 보호 (L3/L4)\n▸ AWS Shield Advanced — 고급 DDoS 방어 (L7), 대규모 공격 대응\n▸ GuardDuty — 악의적 동작 감지 (침입, 비정상 활동)\n▸ Inspector — EC2 취약점 스캔\n\n【정답 포인트】\n▸ '대규모 DDoS 공격 감지 + 보호' → Shield Advanced\n▸ Shield Advanced: ELB, CloudFront, Route 53 할당 가능\n▸ DDoS 관리 서비스 포함 (AWS DRT)\n▸ ALB/NLB/CLB는 Shield Advanced 적용 가능\n\n【오답 체크】\n(A) GuardDuty — 악성 IP, 비정상 API 호출 감지, DDoS 보호 X\n(B) Inspector — EC2 취약점(CVE, 설정 오류), DDoS 관계 없음\n(C) Shield + Route 53 — Route 53은 DNS, Shield는 타겟 리소스 필요, 이 경우 ELB\n\n【시험 포인트】\n'DDoS 보호' → Shield Advanced + 리소스, '악의 탐지' → GuardDuty"
  },
  {
    "id": 36,
    "question": "회사는 AWS 클라우드에서 애플리케이션을 구축하고 있습니다. 애플리케이션은 두 AWS 리전의 Amazon S3 버킷에 데이터를 저장합니다. 회사는 AWS Key Management Service(AWS KMS) 고객 관리형 키를 사용하여 S3 버킷에 저장된 모든 데이터를 암호화해야 합니다. 두 S3 버킷의 데이터는 동일한 KMS 키로 암호화 및 복호화해야 합니다. 데이터와 키는 두 지역 각각에 저장되어야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 리전에서 S3 버킷을 생성합니다. Amazon S3 관리형 암호화 키(SSE-S3)와 함께 서버 측 암호화를 사용하도록 S3 버킷을 구성합니다. S3 버킷 간의 복제를 구성합니다.",
      "B": "고객 관리형 다중 지역 KMS 키를 생성합니다. 각 리전에서 S3 버킷을 생성합니다. S3 버킷 간의 복제를 구성합니다. 클라이언트 측 암호화와 함께 KMS 키를 사용하도록 애플리케이션을 구성합니다.",
      "C": "각 리전에서 고객 관리형 KMS 키와 S3 버킷을 생성합니다. Amazon S3 관리형 암호화 키(SSE-S3)와 함께 서버 측 암호화를 사용하도록 S3 버킷을 구성합니다. S3 버킷 간의 복제를 구성합니다.",
      "D": "각 리전에서 고객 관리형 KMS 키와 S3 버킷을 생성합니다. AWS KMS 키(SSE-KMS)로 서버 측 암호화를 사용하도록 S3 버킷을 구성합니다. S3 버킷 간의 복제를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 다중 지역 KMS 키 — 여러 리전에서 동일 키 사용, 자동 복제\n▸ 클라이언트 측 암호화 — 애플리케이션이 암호화/복호화\n▸ SSE-KMS — 서버 측 암호화 (S3가 암호화)\n▸ 운영 오버헤드 최소화 — 단일 키 관리\n\n【정답 포인트】\n▸ '동일 KMS 키로 암호화' + '두 리전 각각 저장' → 다중 지역 KMS 키\n▸ 다중 지역 키: 한 번만 생성, 자동으로 리전에 복제\n▸ 클라이언트 측 암호화: 애플리케이션이 키를 사용해 암호화 (SSE-KMS 제약 회피)\n▸ S3 복제: 객체만 복제되고, 키는 각 리전에서 사용 가능\n▸ '운영 오버헤드 최소' → 다중 지역 키 관리 간단\n\n【오답 체크】\n(A) SSE-S3 — AWS 관리형 키, 고객 관리형 KMS 요구 불충족\n(C) 각 리전 별도 키 + SSE-S3 — 고객 관리형 아님, 별도 키 관리 오버헤드\n(D) 각 리전 별도 키 + SSE-KMS — 별도 KMS 키 관리 복잡, 동일 키 요구 미충족\n\n【시험 포인트】\n'다중 리전 + 동일 키' → 다중 지역 KMS, 단일 키로 S3 복제"
  },
  {
    "id": 37,
    "question": "한 회사는 최근 AWS 계정의 Amazon EC2 인스턴스에서 다양한 새로운 워크로드를 출시했습니다. 회사는 인스턴스에 원격으로 안전하게 액세스하고 관리하는 전략을 수립해야 합니다. 회사는 기본 AWS 서비스와 함께 작동하고 AWS Well-Architected 프레임워크를 따르는 반복 가능한 프로세스를 구현해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 직렬 콘솔을 사용하여 관리를 위해 각 인스턴스의 터미널 인터페이스에 직접 액세스합니다.",
      "B": "각 기존 인스턴스와 새 인스턴스에 적절한 IAM 역할을 연결합니다. AWS Systems Manager Session Manager를 사용하여 원격 SSH 세션을 설정합니다.",
      "C": "관리 SSH 키 쌍을 만듭니다. 공개 키를 각 EC2 인스턴스에 로드합니다. 퍼블릭 서브넷에 배스천 호스트를 배포하여 각 인스턴스의 관리를 위한 터널을 제공합니다.",
      "D": "AWS Site-to-Site VPN 연결을 설정합니다. 관리자에게 로컬 온프레미스 머신을 사용하여 VPN 터널에서 SSH 키를 사용하여 인스턴스에 직접 연결하도록 지시합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Systems Manager Session Manager — 퍼블릭 키/SSH 키 불필요, IAM 기반 접근\n▸ IAM 역할 — EC2가 Systems Manager 권한 획득\n▸ Well-Architected — 보안(IAM), 운영 우수성(자동화)\n▸ 반복 가능한 프로세스 — 모든 신규 인스턴스에 적용 가능\n\n【정답 포인트】\n▸ 'SSH 키 관리 X' → Session Manager (IAM 기반)\n▸ IAM 역할만 연결 → Systems Manager 자동화\n▸ 퍼블릭 서브넷/인터넷 연결 불필요 (VPC 엔드포인트 사용)\n▸ '운영 오버헤드 최소' → 키 배포 없음, IAM으로 중앙 관리\n▸ Well-Architected 준수 (보안, 운영 우수성)\n\n【오답 체크】\n(A) EC2 직렬 콘솔 — 부팅 실패 시만 사용, 정상 운영 관리 방법 아님\n(C) SSH 키 + 배스천 — 키 관리 오버헤드 높음, 배스천 호스트 운영 필요\n(D) Site-to-Site VPN — 온프레미스 환경 필요, 클라우드 네이티브 아님\n\n【시험 포인트】\n'안전한 EC2 원격 관리' → Session Manager (IAM), 'SSH 접근' → 키 쌍 + 배스천"
  },
  {
    "id": 38,
    "question": "회사는 Amazon S3 에서 정적 웹 사이트를 호스팅하고 DNS 에 Amazon Route 53 을 사용하고 있습니다. 웹 사이트는 전 세계적으로 수요가 증가하고 있습니다. 회사는 웹 사이트에 액세스하는 사용자의 대기 시간을 줄여야 합니다. 어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": {
      "A": "웹 사이트가 포함된 S3 버킷을 모든 AWS 리전에 복제합니다. Route 53 지리적 위치 라우팅 항목을 추가합니다.",
      "B": "AWS Global Accelerator 에서 액셀러레이터를 프로비저닝합니다. 제공된 IP 주소를 S3 버킷과 연결합니다. 액셀러레이터의 IP 주소를 가리키도록 Route 53 항목을 편집합니다.",
      "C": "S3 버킷 앞에 Amazon CloudFront 배포를 추가합니다. CloudFront 배포를 가리키도록 Route 53 항목을 편집합니다.",
      "D": "버킷에서 S3 Transfer Acceleration을 활성화합니다. 새 엔드포인트를 가리키도록 Route 53 항목을 편집합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudFront — CDN, 엣지 로케이션(210+ 에지), 자동 캐싱\n▸ Global Accelerator — 프리미엄 네트워크 경로, UDP 지원\n▸ S3 복제 — 모든 리전 수동 복제, 비용 높음\n▸ Transfer Acceleration — 빠른 업로드(클라이언트→S3), 다운로드 아님\n\n【정답 포인트】\n▸ '정적 웹사이트 + 지연시간' → CloudFront 최적\n▸ CloudFront: 엣지 로케이션에서 캐싱, 글로벌 사용자에게 빠른 응답\n▸ '비용 효율적' → CloudFront 요금 저렴 (S3 리전 복제 대비 1/3~)\n▸ S3 객체 자동으로 엣지에서 캐시, 추가 복제 비용 X\n\n【오답 체크】\n(A) S3 모든 리전 복제 — 스토리지 비용 높음, 동기화 복잡\n(B) Global Accelerator — TCP/UDP, 게임/VoIP 최적, S3 GET에는 오버킬, 비용 높음\n(D) Transfer Acceleration — 클라이언트 업로드 가속, 다운로드 성능 미미\n\n【시험 포인트】\n'정적 웹사이트 + 글로벌 지연시간' → CloudFront, 'UDP 실시간' → Global Accelerator"
  },
  {
    "id": 39,
    "question": "회사는 웹 사이트에서 검색 가능한 항목 저장소를 유지 관리합니다. 데이터는 천만 개 이상의 행이 포함된 Amazon RDS for MySQL 데이터베이스 테이블에 저장됩니다. 데이터베이스에는 2TB 의 범용 SSD 스토리지가 있습니다. 회사 웹 사이트를 통해 이 데이터에 대한 수백만 건의 업데이트가 매일 있습니다. 이 회사는 일부 삽입 작업이 10 초 이상 걸리는 것을 확인했습니다. 회사는 데이터베이스 스토리지 성능이 문제라고 판단했습니다. 이 성능 문제를 해결하는 솔루션은 무엇입니까?",
    "options": {
      "A": "스토리지 유형을 프로비저닝된 IOPS SSD로 변경합니다.",
      "B": "DB 인스턴스를 메모리 최적화 인스턴스 클래스로 변경합니다.",
      "C": "DB 인스턴스를 버스트 가능한 성능 인스턴스 클래스로 변경합니다.",
      "D": "MySQL 기본 비동기 복제로 다중 AZ RDS 읽기 전용 복제본을 활성화합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 프로비저닝된 IOPS SSD — 일관된 고성능 IOPS 보장, 범용 SSD보다 높은 처리량\n\n【정답 포인트】\n▸ 삽입 작업 지연 → 스토리지 IOPS 부족 → Provisioned IOPS로 확장\n▸ 수백만 건 일일 업데이트 → I/O 집약적 워크로드 → IOPS 명시적 할당 필요\n\n【오답 체크】\n(B) 메모리 최적화는 읽기 캐싱 성능을 개선하지만, 스토리지 IOPS 문제는 해결 불가\n(C) 버스트 가능 인스턴스는 일시적 부하에만 유리하며, 일관된 고부하 워크로드에 부적절\n(D) 읽기 복제본은 읽기 확장에만 도움이며, 쓰기 성능(삽입)은 미개선\n\n【시험 포인트】\n패턴: \"삽입/쓰기 지연 + 높은 빈도\" → 스토리지 IOPS 병목 → Provisioned IOPS 직결\n매핑: 인스턴스 클래스 ≠ 스토리지 유형. 문제가 스토리지 성능이면 스토리지만 변경"
  },
  {
    "id": 40,
    "question": "회사에는 매일 1TB 의 상태 알림을 집합적으로 생성하는 수천 개의 에지 장치가 있습니다. 각 경고의 크기는 약 2KB 입니다. 솔루션 설계자는 향후 분석을 위해 경고를 수집하고 저장하는 솔루션을 구현해야 합니다. 회사는 고가용성 솔루션을 원합니다. 그러나 회사는 비용을 최소화해야 하며 추가 인프라 관리를 원하지 않습니다. 또한 회사는 즉각적인 분석을 위해 14 일 동안의 데이터를 유지하고 14일이 지난 데이터를 보관하기를 원합니다. 이러한 요구 사항을 충족하는 가장 운영 효율성이 높은 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Kinesis Data Firehose 전송 스트림을 생성하여 알림을 수집합니다. Amazon S3 버킷에 알림을 전달하도록 Kinesis Data Firehose 스트림을 구성합니다. 14일 후에 데이터를 Amazon S3 Glacier로 전환하도록 S3 수명 주기 구성을 설정합니다.",
      "B": "두 가용 영역에서 Amazon EC2 인스턴스를 시작하고 Elastic Load Balancer 뒤에 배치하여 알림을 수집합니다. Amazon S3 버킷에 경고를 저장할 EC2 인스턴스에 대한 스크립트를 생성합니다. 14 일 후에 데이터를 Amazon S3 Glacier 로 전환하도록 S3 수명 주기 구성을 설정합니다.",
      "C": "Amazon Kinesis Data Firehose 전송 스트림을 생성하여 알림을 수집합니다. Amazon OpenSearch Service(Amazon Elasticsearch Service) 클러스터에 알림을 전달하도록 Kinesis Data Firehose 스트림을 구성합니다. Amazon OpenSearch Service(Amazon Elasticsearch Service) 클러스터를 설정하여 매일 수동 스냅샷을 만들고 클러스터에서 14 일이 지난 데이터를 삭제합니다.",
      "D": "Amazon Simple Queue Service(Amazon SQS) 표준 대기열을 생성하여 알림을 수집하고 메시지 보존 기간을 14 일로 설정합니다. SQS 대기열을 폴링하고, 메시지의 수명을 확인하고, 필요에 따라 메시지 데이터를 분석하도록 소비자를 구성합니다. 메시지가 14일이 지난 경우 소비자는 메시지를 Amazon S3 버킷에 복사하고 SQS 대기열에서 메시지를 삭제해야 합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Kinesis Data Firehose — 완전 관리형 데이터 스트림 전달 서비스, S3 직접 저장\n▸ S3 수명 주기 정책 — 객체 자동 전환으로 비용 최적화\n\n【정답 포인트】\n▸ 고가용성 + 최소 운영 오버헤드 → 완전 관리형 서비스 필수\n▸ 14일 분석 + 아카이브 → S3 Standard + Glacier 수명 주기 구조\n▸ 일일 1TB 대용량 → Firehose 자동 배칭 처리, EC2 대비 저비용\n\n【오답 체크】\n(B) EC2 관리, 스크립트 유지보수 → 운영 오버헤드 증가 (배제)\n(C) OpenSearch 수동 스냅샷 → 자동화 부족, 관리 복잡성 증가\n(D) SQS 보존 14일 제한 + 소비자 로직 → Firehose보다 복잡, 비용 증가\n\n【시험 포인트】\n패턴: \"최소 운영 + 고가용성 + 계층화 저장\" → Firehose + S3 생명주기\n매핑: Firehose는 '수집+저장', SQS는 '메시지 큐' 역할 차이 명확화"
  },
  {
    "id": 41,
    "question": "회사의 애플리케이션은 데이터 수집을 위해 여러 SaaS(Software-as-a-Service) 소스와 통합됩니다. 이 회사는 Amazon EC2 인스턴스를 실행하여 데이터를 수신하고 분석을 위해 데이터를 Amazon S3 버킷에 업로드합니다. 데이터를 수신하고 업로드하는 동일한 EC2 인스턴스도 업로드가 완료되면 사용자에게 알림을 보냅니다. 회사는 느린 응용 프로그램 성능을 발견했으며 가능한 한 성능을 개선하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스가 확장할 수 있도록 Auto Scaling 그룹을 생성합니다. S3 버킷에 업로드가 완료되면 Amazon Simple Notification Service(Amazon SNS) 주제에 이벤트를 보내도록 S3 이벤트 알림을 구성합니다.",
      "B": "Amazon AppFlow 흐름을 생성하여 각 SaaS 소스와 S3 버킷 간에 데이터를 전송합니다. S3 버킷에 업로드가 완료되면 Amazon Simple Notification Service(Amazon SNS) 주제에 이벤트를 보내도록 S3 이벤트 알림을 구성합니다.",
      "C": "각 SaaS 소스에 대해 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성하여 출력 데이터를 보냅니다. S3 버킷을 규칙의 대상으로 구성합니다. S3 버킷에 업로드가 완료되면 이벤트를 전송하는 두 번째 EventBridge(Cloud Watch Events) 규칙을 생성합니다. Amazon Simple Notification Service(Amazon SNS) 주제를 두 번째 규칙의 대상으로 구성합니다.",
      "D": "EC2 인스턴스 대신 사용할 Docker 컨테이너를 생성합니다. Amazon Elastic Container Service(Amazon ECS)에서 컨테이너화된 애플리케이션을 호스팅합니다. S3 버킷에 업로드가 완료되면 Amazon Simple Notification Service(Amazon SNS) 주제에 이벤트를 보내도록 Amazon CloudWatch Container Insights를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AppFlow — SaaS 간 데이터 통합 최적화, 완전 관리형\n▸ S3 이벤트 알림 — 객체 업로드 후 자동 트리거\n\n【정답 포인트】\n▸ EC2 수신+업로드 병목 → AppFlow로 직접 연결 (중간 계산 제거)\n▸ 최소 운영 오버헤드 → EC2 관리/스케일링 불필요, 완전 관리형\n▸ 알림 분리 → S3 이벤트 + SNS로 비동기 처리 (성능 개선)\n\n【오답 체크】\n(A) Auto Scaling은 EC2 관리 필요, AppFlow 대비 운영 복잡성 증가\n(C) EventBridge는 SaaS 직접 통합 미지원, 규칙 복잡화\n(D) ECS 컨테이너 관리 여전히 필요, 이점 미흡\n\n【시험 포인트】\n패턴: \"SaaS 수집 + EC2 병목 + 알림 필요\" → AppFlow + S3 Event + SNS\n매핑: AppFlow는 통합 서비스(데이터 이동), EC2는 계산 플랫폼(역할 구분)"
  },
  {
    "id": 42,
    "question": "회사는 단일 VPC 의 Amazon EC2 인스턴스에서 고가용성 이미지 처리 애플리케이션을 실행합니다. EC2 인스턴스는 여러 가용 영역의 여러 서브넷 내에서 실행됩니다. EC2 인스턴스는 서로 통신하지 않습니다. 그러나 EC2 인스턴스는 Amazon S3 에서 이미지를 다운로드하고 단일 NAT 게이트웨이를 통해 Amazon S3 에 이미지를 업로드합니다. 회사는 데이터 전송 요금에 대해 우려하고 있습니다. 회사가 지역 데이터 전송 요금을 피할 수 있는 가장 비용 효율적인 방법은 무엇입니까?",
    "options": {
      "A": "각 가용 영역에서 NAT 게이트웨이를 시작합니다.",
      "B": "NAT 게이트웨이를 NAT 인스턴스로 교체합니다.",
      "C": "Amazon S3용 게이트웨이 VPC 엔드포인트를 배포합니다.",
      "D": "EC2 인스턴스를 실행할 EC2 전용 호스트를 프로비저닝합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 게이트웨이 VPC 엔드포인트 — S3/DynamoDB 직접 연결, 지역 전송 요금 무료\n▸ NAT 게이트웨이 → 데이터 전송 요금 발생 (시간당 + 처리량)\n\n【정답 포인트】\n▸ 지역 데이터 전송 요금 회피 → NAT 우회 필수\n▸ S3 접근 → Gateway VPC Endpoint가 요금 0인 최적 경로\n▸ 다중 AZ 인스턴스 → 엔드포인트는 자동 분산, NAT처럼 AZ별 프로비저닝 불필요\n\n【오답 체크】\n(A) 각 AZ NAT 게이트웨이 → 여전히 데이터 처리 요금 부과\n(B) NAT 인스턴스 → 비용 절감 효과 미미, 관리 복잡성만 증가\n(D) 전용 호스트 → 데이터 전송 요금 구조는 미변경, 비용 증가\n\n【시험 포인트】\n패턴: \"AZ 간 데이터 전송 요금 최소화\" → Gateway Endpoint (S3/DynamoDB 전용)\n매핑: Endpoint = 사설 경로 (요금 0), NAT = 공인 경로 (요금 발생) 구분"
  },
  {
    "id": 43,
    "question": "회사에 Amazon S3 에 백업되는 시간에 민감한 대량의 데이터를 생성하는 온프레미스 애플리케이션이 있습니다. 애플리케이션이 성장했고 인터넷 대역폭 제한에 대한 사용자 불만이 있습니다. 솔루션 설계자는 Amazon S3 에 대한 적시 백업을 허용하고 내부 사용자의 인터넷 연결에 미치는 영향을 최소화하는 장기 솔루션을 설계해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS VPN 연결을 설정하고 VPC 게이트웨이 엔드포인트를 통해 모든 트래픽을 프록시합니다.",
      "B": "새 AWS Direct Connect 연결을 설정하고 이 새 연결을 통해 백업 트래픽을 직접 연결합니다.",
      "C": "매일 AWS Snowball 디바이스를 주문합니다. Snowball 디바이스에 데이터를 로드하고 디바이스를 매일 AWS로 반환합니다.",
      "D": "AWS Management 콘솔을 통해 지원 티켓을 제출합니다. 계정에서 S3 서비스 제한 제거를 요청합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Direct Connect — 전용 네트워크 연결, 인터넷 대역폭 독립\n▸ 적시 백업 — 실시간/준 실시간 데이터 동기화 필요\n\n【정답 포인트】\n▸ 인터넷 대역폭 제약 → Direct Connect로 우회\n▸ \"적시\" + \"대량 데이터\" → 전용 회선의 안정성 필수 (VPN 대비)\n▸ 장기 솔루션 → 일회용 Snowball\n(C) 대비, 지속적 백업에 적합\n\n【오답 체크】\n(A) VPN은 인터넷 회선 기반 → 대역폭 문제 미해결\n(C) Snowball은 배치 전송용, 적시성 미충족 (1-2주 물리 배송)\n(D) S3 제한 해제 불가능, 근본 해결책 아님\n\n【시험 포인트】\n패턴: \"인터넷 제약 + 실시간 대용량\" → Direct Connect (전용선)\n매핑: VPN(인터넷 기반) vs Direct Connect(전용) 선택의 기준은 실시간성"
  },
  {
    "id": 44,
    "question": "회사에 중요한 데이터가 포함된 Amazon S3 버킷이 있습니다. 회사는 우발적인 삭제로부터 데이터를 보호해야 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 취해야 합니까? (2개를 선택하세요.)",
    "options": {
      "A": "S3 버킷에서 버전 관리를 활성화합니다.",
      "B": "S3 버킷에서 MFA 삭제를 활성화합니다.",
      "C": "S3 버킷에 버킷 정책을 생성합니다.",
      "D": "S3 버킷에서 기본 암호화를 활성화합니다.",
      "E": "S3 버킷의 객체에 대한 수명 주기 정책을 생성합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ 버전 관리 — 모든 버전 보존, 삭제 시 DeleteMarker만 기록\n▸ MFA 삭제 — 루트/관리자도 MFA 인증 없이 완전 삭제 불가\n\n【정답 포인트】\n▸ 우발적 삭제 방어 → 버전 관리 (기본) + MFA 삭제 (강화)\n▸\n(A) 버전 관리: 삭제 객체도 복구 가능 (DeleteMarker 생성)\n▸\n(B) MFA 삭제: 의도적 삭제도 2단계 인증 강제\n\n【오답 체크】\n(C) 버킷 정책 → 접근 제어, 삭제 방어 능력 미흡\n(D) 기본 암호화 → 데이터 기밀성, 우발적 삭제 미방어\n(E) 수명 주기 정책 → 자동 삭제 스케줄, 오히려 위험\n\n【시험 포인트】\n패턴: \"우발적 삭제 방어\" → 버전 관리(기록) + MFA 삭제(인증)\n매핑: 보안 정책\n(C) ≠ 삭제 방어, 수명주기\n(E) 는 자동 삭제 (역효과)"
  },
  {
    "id": 45,
    "question": "회사에는 다음으로 구성된 데이터 수집 워크플로가 있습니다. • 새로운 데이터 전송에 대한 알림을 위한 Amazon Simple Notification Service(Amazon SNS) 주제 • 데이터를 처리하고 메타데이터를 기록하는 AWS Lambda 함수 회사는 네트워크 연결 문제로 인해 수집 워크플로가 때때로 실패하는 것을 관찰했습니다. 이러한 장애가 발생하면 회사에서 수동으로 작업을 다시 실행하지 않는 한 Lambda 함수는 해당 데이터를 수집하지 않습니다. Lambda 함수가 향후 모든 데이터를 수집하도록 하려면 솔루션 설계자가 취해야 하는 작업 조합은 무엇입니까? (2개를 선택하세요.)",
    "options": {
      "A": "여러 가용 영역에 Lambda 함수를 배포합니다.",
      "B": "Amazon Simple Queue Service(Amazon SQS) 대기열을 생성하고 SNS 주제를 구독합니다.",
      "C": "Lambda 함수에 할당된 CPU와 메모리를 늘립니다.",
      "D": "Lambda 함수에 대해 프로비저닝된 처리량을 늘립니다.",
      "E": "Amazon Simple Queue Service(Amazon SQS) 대기열에서 읽도록 Lambda 함수를 수정합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ SQS 큐 — 메시지 보존(기본 4일), 재시도 메커니즘 제공\n▸ SNS-SQS 패턴 — 신뢰성 있는 메시지 전달 보증\n\n【정답 포인트】\n▸ 네트워크 실패 → 메시지 손실 우려 → SQS로 완충\n▸\n(B) SQS 구독: SNS 메시지를 큐에 저장, 일시적 손실 방어\n▸\n(E) Lambda SQS 읽기: 큐에서 메시지 폴링, 처리 재시도 가능\n\n【오답 체크】\n(A) 다중 AZ 배포 → Lambda 가용성 문제 아님, 네트워크 장애 해결 불가\n(C) \n(D) CPU/메모리/처리량 증가 → 처리 성능이 아닌 메시지 손실 문제\n\n【시험 포인트】\n패턴: \"SNS(즉시) 손실 위험\" → SQS 완충 + 폴링 기반 재처리\n매핑: SNS(Push) = 신뢰성 낮음, SQS(Pull) = 메시지 보존 및 재시도 가능"
  },
  {
    "id": 46,
    "question": "회사에 매장에 마케팅 서비스를 제공하는 애플리케이션이 있습니다. 서비스는 매장 고객의 이전 구매를 기반으로 합니다. 상점은 SFTP 를 통해 거래 데이터를 회사에 업로드하고 데이터를 처리 및 분석하여 새로운 마케팅 제안을 생성합니다. 일부 파일의 크기는 200GB를 초과할 수 있습니다. 최근에 회사는 일부 상점에서 포함되어서는 안 되는 개인 식별 정보(PII)가 포함된 파일을 업로드했음을 발견했습니다. 회사는 PII 가 다시 공유될 경우 관리자에게 경고를 주기를 원합니다. 회사는 또한 문제 해결을 자동화하기를 원합니다. 최소한의 개발 노력으로 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon S3 버킷을 보안 전송 지점으로 사용하십시오. Amazon Inspector 를 사용하여 버킷의 객체를 스캔합니다. 객체에 PII 가 포함된 경우 S3 수명 주기 정책을 트리거하여 PII가 포함된 객체를 제거합니다.",
      "B": "Amazon S3 버킷을 보안 전송 지점으로 사용합니다. Amazon Macie를 사용하여 버킷의 객체를 스캔합니다. 객체에 PII가 포함된 경우 Amazon Simple Notification Service(Amazon SNS)를 사용하여 관리자에게 PII가 포함된 객체를 제거하라는 알림을 트리거합니다.",
      "C": "AWS Lambda 함수에서 사용자 지정 스캔 알고리즘을 구현합니다. 객체가 버킷에 로드될 때 함수를 트리거합니다. 객체에 PII 가 포함된 경우 Amazon Simple Notification Service(Amazon SNS)를 사용하여 관리자에게 PII 가 포함된 객체를 제거하라는 알림을 트리거합니다.",
      "D": "AWS Lambda 함수에서 사용자 지정 스캔 알고리즘을 구현합니다. 객체가 버킷에 로드될 때 함수를 트리거합니다. 객체에 PII가 포함된 경우 Amazon Simple Email Service(Amazon SES)를 사용하여 관리자에게 알림을 트리거하고 S3 수명 주기 정책을 트리거하여 PII 가 포함된 고기를 제거합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Macie — PII/민감정보 자동 탐지 기계학습 서비스\n▸ \"최소 개발 노력\" → 완전 관리형 AI 서비스 필수\n\n【정답 포인트】\n▸ 200GB 초과 파일 처리 → Lambda 15분 타임아웃 위험 (Lambda 부적)\n▸ PII 탐지 자동화 → Macie 기계학습 (사용자 정의 알고리즘 불필요)\n▸ 경고 + 자동 처리 → SNS 알림으로 관리자 판단 후 처리 (수명주기 자동화 위험)\n\n【오답 체크】\n(A) Inspector는 취약점 스캔(코드/인프라), PII 탐지 미지원\n(C) \n(D) Lambda 커스텀 알고리즘 → 개발 노력 증가, 200GB 파일 처리 불가\n(D) SES는 SNS 대비 추가 구성 필요, 수명주기 자동삭제는 관리자 미확인 위험\n\n【시험 포인트】\n패턴: \"PII 탐지 + 최소 개발\" → Macie (기계학습) + SNS (알림)\n매핑: Inspector(EC2 취약점) vs Macie(데이터 민감정보) 역할 구분 명확화"
  },
  {
    "id": 47,
    "question": "회사는 1 주일 동안 진행될 예정된 이벤트를 위해 특정 AWS 리전의 3 개의 특정 가용 영역에서 보장된 Amazon EC2 용량이 필요합니다. EC2 용량을 보장하기 위해 회사는 무엇을 해야 합니까?",
    "options": {
      "A": "필요한 리전을 지정하는 예약 인스턴스를 구매합니다.",
      "B": "필요한 지역을 지정하는 온디맨드 용량 예약을 생성합니다.",
      "C": "필요한 리전과 3개의 가용 영역을 지정하는 예약 인스턴스를 구매합니다.",
      "D": "필요한 지역과 3개의 가용 영역을 지정하는 온디맨드 용량 예약을 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 온디맨드 용량 예약 — AZ 단위 용량 예약, 1주일 단기 가능\n▸ 예약 인스턴스 — 1년/3년 장기 계약, 할인 목적\n\n【정답 포인트】\n▸ \"보장된 용량\" → 예약 인스턴스(할인) ≠ 용량 보장, Capacity Reservation만 보증\n▸ \"특정 3개 AZ\" → AZ 단위 지정 필수 (리전만으로는 불충분)\n▸ \"1주일\" 단기 → 온디맨드 용량 예약 유연성 (RI 장기 약정 불필요)\n\n【오답 체크】\n(A) 리전만 지정 → AZ 선택권 불명확, 용량 보장 미약\n(B) 온디맨드 예약 + 리전만 → AZ 분산, 3개 특정 AZ 보장 불가\n(C) 예약 인스턴스 → 1년 최소 약정, 1주일 이벤트에 비효율적\n\n【시험 포인트】\n패턴: \"특정 AZ + 단기 용량 보장\" → Capacity Reservation (온디맨드)\n매핑: RI(가격) vs Capacity Reservation(가용성) 목표 차이 명확화"
  },
  {
    "id": 48,
    "question": "회사 웹 사이트는 항목 카탈로그에 Amazon EC2 인스턴스 스토어를 사용합니다. 회사는 카탈로그의 가용성이 높고 카탈로그가 내구성 있는 위치에 저장되기를 원합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "카탈로그를 Redis용 Amazon ElastiCache로 이동합니다.",
      "B": "더 큰 인스턴스 스토어로 더 큰 EC2 인스턴스를 배포합니다.",
      "C": "인스턴스 스토어에서 Amazon S3 Glacier Deep Archive로 카탈로그를 이동합니다.",
      "D": "카탈로그를 Amazon Elastic File System(Amazon EFS) 파일 시스템으로 이동합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 인스턴스 스토어 — 임시 스토리지, 인스턴스 중단 시 데이터 손실\n▸ EFS — 공유 파일 시스템, 다중 AZ 자동 복제, 높은 내구성\n\n【정답 포인트】\n▸ 가용성 + 내구성 → 영구 스토리지 필수 (인스턴스 스토어 불가)\n▸ 카탈로그 = 정기 접근 → EFS (실시간 고성능 조회)\n▸ 다중 AZ 분산 → EFS 기본 기능 (별도 구성 불필요)\n\n【오답 체크】\n(A) ElastiCache → 캐시용, 영구 저장소 아님 (인스턴스 재시작 시 손실)\n(B) 더 큰 인스턴스 스토어 → 여전히 임시, 내구성 미해결\n(C) S3 Glacier Deep Archive → 아카이브용, 카탈로그 실시간 쿼리 불가 (지연 시간)\n\n【시험 포인트】\n패턴: \"카탈로그 + 고가용성 + 내구성\" → EFS (공유 영구 스토리지)\n매핑: 인스턴스 스토어(임시) vs EFS(영구) vs Glacier(아카이브) 계층 구분"
  },
  {
    "id": 49,
    "question": "회사는 매월 통화 기록 파일을 저장합니다. 사용자는 통화 후 1 년 이내에 파일에 무작위로 액세스하지만 1 년 이후에는 파일에 자주 액세스하지 않습니다. 이 회사는 사용자에게 1 년 미만의 파일을 가능한 한 빨리 쿼리하고 검색할 수 있는 기능을 제공하여 솔루션을 최적화하려고 합니다. 오래된 파일을 검색하는 데 있어 지연은 허용됩니다. 어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": {
      "A": "Amazon S3 Glacier Instant Retrieval 에 태그가 있는 개별 파일을 저장합니다. 태그를 쿼리하여 S3 Glacier Instant Retrieval에서 파일을 검색합니다.",
      "B": "Amazon S3 Intelligent-Tiering에 개별 파일을 저장합니다. S3 수명 주기 정책을 사용하여 1 년 후 파일을 S3 Glacier Flexible Retrieval 로 이동합니다. Amazon Athena 를 사용하여 Amazon S3 에 있는 파일을 쿼리하고 검색합니다. S3 Glacier Select 를 사용하여 S3 Glacier에 있는 파일을 쿼리하고 검색합니다.",
      "C": "Amazon S3 Standard 스토리지에 태그가 있는 개별 파일을 저장합니다. Amazon S3 Standard 스토리지의 각 아카이브에 대한 검색 메타데이터를 저장합니다. S3 수명 주기 정책을 사용하여 1 년 후에 파일을 S3 Glacier Instant Retrieval 로 이동합니다. Amazon S3에서 메타데이터를 검색하여 파일을 쿼리하고 검색합니다.",
      "D": "Amazon S3 Standard 스토리지에 개별 파일을 저장합니다. S3 수명 주기 정책을 사용하여 1 년 후에 파일을 S3 Glacier Deep Archive 로 이동합니다. Amazon RDS 에 검색 메타데이터를 저장합니다. Amazon RDS 에서 파일을 쿼리합니다. S3 Glacier Deep Archive에서 파일을 검색합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 Intelligent-Tiering — 접근 패턴에 따라 자동 티어 전환\n▸ Glacier Select — 아카이브 파일 내 쿼리 (전체 검색 불필요)\n\n【정답 포인트】\n▸ \"1년 내 빠른 쿼리\" → S3 (Intelligent-Tiering 자동 최적화)\n▸ \"1년 후 낮은 빈도\" → Glacier Flexible (비용 최소화)\n▸ Athena(S3) + Glacier Select(아카이브) → 계층별 최적 쿼리 방식\n\n【오답 체크】\n(A) Glacier Instant Retrieval 초기 저장 → 1년 내 비용 효율 미흡\n(C) S3 Standard 메타데이터 별도 관리 → Intelligent-Tiering 대비 비효율\n(D) RDS 메타데이터 저장 → 추가 비용, Intelligent-Tiering 자동 전환 미활용\n\n【시험 포인트】\n패턴: \"접근 빈도 다층화\" → Intelligent-Tiering + 수명주기 + Glacier Select\n매핑: Intelligent-Tiering(자동) vs Standard(정책) 선택 기준은 운영 편의성"
  },
  {
    "id": 50,
    "question": "회사에 1,000 개의 Amazon EC2 Linux 인스턴스에서 실행되는 프로덕션 워크로드가 있습니다. 워크로드는 타사 소프트웨어에 의해 구동됩니다. 회사는 중요한 보안 취약성을 수정하기 위해 가능한 한 빨리 모든 EC2 인스턴스에서 타사 소프트웨어를 패치해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS Lambda 함수를 생성하여 모든 EC2 인스턴스에 패치를 적용합니다.",
      "B": "모든 EC2 인스턴스에 패치를 적용하도록 AWS Systems Manager Patch Manager 를 구성합니다.",
      "C": "AWS Systems Manager 유지 관리 기간을 예약하여 모든 EC2 인스턴스에 패치를 적용합니다.",
      "D": "AWS Systems Manager Run Command 를 사용하여 모든 EC2 인스턴스에 패치를 적용하는 사용자 지정 명령을 실행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Systems Manager Run Command — 인스턴스 에이전트 기반 원격 명령 실행\n▸ Patch Manager — 운영체제 패치(타사 소프트웨어 미지원)\n\n【정답 포인트】\n▸ \"타사 소프트웨어\" 패치 → OS 패치 도구(Patch Manager) 미지원\n▸ Run Command → 사용자 지정 패치 스크립트 실행 가능\n▸ \"가능한 빨리\" → Run Command의 병렬 실행으로 1000개 인스턴스 빠른 처리\n\n【오답 체크】\n(A) Lambda → EC2 인스턴스 제어 능력 제한, 에이전트 의존성 부족\n(B) Patch Manager → OS(Amazon Linux, Ubuntu, Windows) 보안 패치만 관리, 타사 소프트웨어 제외\n(C) 유지 관리 기간 → 스케줄 기반 (즉시 패치 불가), 긴급 대응 미적합\n\n【시험 포인트】\n패턴: \"타사 소프트웨어 + 긴급 패치\" → Run Command (사용자 정의)\n매핑: Patch Manager(OS만) vs Run Command(모든 애플리케이션) 역할 명확화"
  },
  {
    "id": 51,
    "question": "회사는 REST API 로 검색하기 위해 주문 배송 통계를 제공하는 애플리케이션을 개발 중입니다. 이 회사는 배송 통계를 추출하고 데이터를 읽기 쉬운 HTML 형식으로 구성하고 매일 아침 여러 이메일 주소로 보고서를 보내려고 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 취해야 합니까? (2개를 선택하세요.)",
    "options": {
      "A": "데이터를 Amazon Kinesis Data Firehose로 보내도록 애플리케이션을 구성합니다.",
      "B": "Amazon Simple Email Service(Amazon SES)를 사용하여 데이터 형식을 지정하고 보고서를 이메일로 보냅니다.",
      "C": "AWS Glue 작업을 호출하여 데이터에 대한 애플리케이션의 API 를 쿼리하는 Amazon EventBridge(Amazon CloudWatch Events) 예약 이벤트를 생성합니다.",
      "D": "AWS Lambda 함수를 호출하여 데이터에 대한 애플리케이션의 API를 쿼리하는 Amazon EventBridge(Amazon CloudWatch Events) 예약 이벤트를 생성합니다.",
      "E": "Amazon S3 에 애플리케이션 데이터를 저장합니다. 보고서를 이메일로 보낼 S3 이벤트 대상으로 Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ EventBridge 예약 규칙 — Cron 기반 정기 실행\n▸ Lambda — API 쿼리 및 데이터 변환 담당\n▸ SES — HTML 형식 이메일 발송\n\n【정답 포인트】\n▸ 매일 아침 보고서 → EventBridge 예약 (Cron 기반)\n▸ REST API 쿼리 → Lambda (경량, 15분 타임아웃 충분)\n▸ HTML 형식 이메일 → SES (다중 주소 지원, HTML 렌더링)\n\n【오답 체크】\n(A) Kinesis Firehose → 스트림 수집용, 배치 보고서 미적합 (실시간 처리)\n(C) AWS Glue → ETL(데이터 변환), REST API 직접 쿼리 미지원\n(E) SNS → 단순 텍스트/JSON 알림, 복잡한 HTML 형식 미지원\n\n【시험 포인트】\n패턴: \"정기 + API 쿼리 + 이메일\" → EventBridge(스케줄) + Lambda(처리) + SES(발송)\n매핑: Firehose(스트림) vs EventBridge(배치) 선택 기준은 실시간성"
  },
  {
    "id": 52,
    "question": "회사에서 온프레미스 애플리케이션을 AWS 로 마이그레이션하려고 합니다. 애플리케이션은 수십 기가바이트에서 수백 테라바이트까지 다양한 크기의 출력 파일을 생성합니다. 애플리케이션 데이터는 표준 파일 시스템 구조로 저장되어야 합니다. 회사는 자동으로 확장되는 솔루션을 원합니다. 고가용성이며 최소한의 운영 오버헤드가 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon Elastic Container Service(Amazon ECS)에서 컨테이너로 실행되도록 애플리케이션을 마이그레이션합니다. 스토리지에 Amazon S3를 사용합니다.",
      "B": "Amazon Elastic Kubernetes Service(Amazon EKS)에서 컨테이너로 실행되도록 애플리케이션을 마이그레이션합니다. 스토리지에 Amazon Elastic Block Store(Amazon EBS)를 사용합니다.",
      "C": "다중 AZ Auto Scaling 그룹의 Amazon EC2 인스턴스로 애플리케이션을 마이그레이션합니다. 스토리지에 Amazon Elastic File System(Amazon EFS)을 사용합니다.",
      "D": "다중 AZ Auto Scaling 그룹의 Amazon EC2 인스턴스로 애플리케이션을 마이그레이션합니다. 스토리지에 Amazon Elastic Block Store(Amazon EBS)를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ EFS — POSIX 파일 시스템, 다중 인스턴스 공유, 자동 스케일\n▸ S3 — 객체 저장소(파일 시스템 미지원), 애플리케이션 코드 수정 필요\n\n【정답 포인트】\n▸ \"표준 파일 시스템 구조\" → EFS (POSIX 호환)\n▸ \"수십 GB~수백 TB\" → S3 대비 EFS 유연성 (파일 시스템 API)\n▸ \"자동 확장 + 고가용성\" → EC2 Auto Scaling + EFS 다중 AZ (최소 운영)\n\n【오답 체크】\n(A) S3 → 객체 저장소 (파일 시스템 API 미지원), 애플리케이션 코드 변경 필수\n(B) EKS + EBS → EBS는 단일 AZ, 자동 확장 제한, 관리 복잡성 높음\n(D) EC2 + EBS → EBS는 블록 스토리지 (파일 시스템 공유 불가), 다중 인스턴스 미지원\n\n【시험 포인트】\n패턴: \"파일 시스템 + 다중 인스턴스 + 자동 확장\" → EC2 + EFS\n매핑: S3(객체) vs EFS(파일) vs EBS(블록) 저장소 타입별 선택 기준"
  },
  {
    "id": 53,
    "question": "회사는 Amazon S3 에 회계 기록을 저장해야 합니다. 기록은 1 년 동안 즉시 액세스할 수 있어야 하며 그 후 추가로 9 년 동안 보관해야 합니다. 관리자 및 루트 사용자를 포함하여 회사의 그 누구도 전체 10 년 동안 기록을 삭제할 수 없습니다. 기록은 최대한의 복원력으로 저장해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "전체 10년 동안 S3 Glacier에 기록을 저장합니다. 접근통제 정책을 사용하여 10년 동안 기록 삭제를 거부합니다.",
      "B": "S3 Intelligent-Tiering 을 사용하여 레코드를 저장합니다. IAM 정책을 사용하여 레코드 삭제를 거부합니다. 10년 후 삭제를 허용하도록 IAM 정책을 변경합니다.",
      "C": "S3 수명 주기 정책을 사용하여 1년 후에 S3 Standard에서 S3 Glacier Deep Archive로 레코드를 전환합니다. 10년 동안 규정 준수 모드에서 S3 Object Lock을 사용합니다.",
      "D": "S3 수명 주기 정책을 사용하여 1 년 후 레코드를 S3 Standard 에서 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환합니다. 10년 동안 거버넌스 모드에서 S3 Object Lock을 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Object Lock 규정 준수 모드 — 루트 사용자도 해제 불가, 법규 준수\n▸ Glacier Deep Archive — 장기 보관 최저 비용, 최대 복원력\n\n【정답 포인트】\n▸ \"누구도 삭제 불가\" → Object Lock 규정 준수 모드 필수\n▸ \"10년 동안 기록\" → Deep Archive (비용 최소)\n▸ \"1년 + 9년\" → 생명주기로 Standard → Deep Archive 전환\n▸ \"최대 복원력\" → Deep Archive = 지역 및 시간 복제 (최고 내구성)\n\n【오답 체크】\n(A) 접근제어 정책 → IAM/정책 변경 가능 (Object Lock 규정 준수 미충족)\n(B) Intelligent-Tiering + IAM → 정책 수정으로 삭제 가능 (규정 준수 미달)\n(D) One Zone-IA → 단일 AZ (복원력 제한), 거버넌스 모드 → 루트가 해제 가능\n\n【시험 포인트】\n패턴: \"규정 준수 + 장기 보관 + 절대 삭제 불가\" → Object Lock(규정 준수) + Glacier Deep Archive\n매핑: IAM 정책(변경 가능) vs Object Lock(변경 불가) 법규 준수 차이"
  },
  {
    "id": 54,
    "question": "회사는 AWS 에서 여러 Windows 워크로드를 실행합니다. 회사 직원은 두 개의 Amazon EC2 인스턴스에서 호스팅되는 Windows 파일 공유를 사용합니다. 파일 공유는 서로 간에 데이터를 동기화하고 중복 복사본을 유지합니다. 이 회사는 사용자가 현재 파일에 액세스하는 방식을 보존하는 고가용성 및 내구성 스토리지 솔루션을 원합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "모든 데이터를 Amazon S3로 마이그레이션합니다. 사용자가 파일에 액세스할 수 있도록 IAM 인증을 설정합니다.",
      "B": "Amazon S3 파일 게이트웨이를 설정합니다. 기존 EC2 인스턴스에 S3 파일 게이트웨이를 탑재합니다.",
      "C": "다중 AZ 구성을 사용하여 파일 공유 환경을 Windows 파일 서버용 Amazon FSx 로 확장합니다. 모든 데이터를 Windows 파일 서버용 FSx로 마이그레이션합니다.",
      "D": "다중 AZ 구성을 사용하여 파일 공유 환경을 Amazon Elastic File System(Amazon EFS)으로 확장합니다. 모든 데이터를 Amazon EFS로 마이그레이션합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon FSx for Windows File Server — Windows 네이티브 프로토콜(SMB), 다중 AZ\n▸ 현재 파일 접근 방식 보존 → Windows 파일 공유 인터페이스 필수\n\n【정답 포인트】\n▸ \"Windows 파일 공유\" → SMB 프로토콜 필수 (Windows 네이티브)\n▸ FSx for Windows → 기존 \"\\\\\\\\server\\\\share\" 접근 방식 유지 가능\n▸ 다중 AZ → Active Directory 레플리케이션, 자동 장애조치\n▸ 고가용성 + 내구성 → FSx 자동 백업 및 다중 AZ 분산\n\n【오답 체크】\n(A) S3 + IAM → 파일 공유 인터페이스 미지원, 사용자 경험 변경\n(B) S3 파일 게이트웨이 → 캐싱 솔루션, 이미 EC2 기반 파일 공유 구조 미반영\n(D) EFS → Linux/Unix 파일 시스템, Windows SMB 프로토콜 미지원\n\n【시험 포인트】\n패턴: \"Windows 파일 공유 + 현재 방식 유지\" → FSx for Windows\n매핑: S3(객체) vs FSx Windows(SMB) vs EFS(NFS) 프로토콜별 선택 기준"
  },
  {
    "id": 55,
    "question": "솔루션 설계자는 여러 서브넷을 포함하는 VPC 아키텍처를 개발 중입니다. 아키텍처는 Amazon EC2 인스턴스 및 Amazon RDS DB 인스턴스를 사용하는 애플리케이션을 호스팅합니다. 아키텍처는 2 개의 가용 영역에 있는 6 개의 서브넷으로 구성됩니다. 각 가용 영역에는 퍼블릭 서브넷, 프라이빗 서브넷 및 데이터베이스용 전용 서브넷이 포함됩니다. 프라이빗 서브넷에서 실행되는 EC2 인스턴스만 RDS 데이터베이스에 액세스할 수 있습니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "퍼블릭 서브넷의 CIDR 블록에 대한 경로를 제외하는 새 라우팅 테이블을 생성합니다. 라우팅 테이블을 데이터베이스 서브넷과 연결합니다.",
      "B": "퍼블릭 서브넷의 인스턴스에 할당된 보안 그룹의 인바운드 트래픽을 거부하는 보안 그룹을 생성합니다. 보안 그룹을 DB 인스턴스에 연결합니다.",
      "C": "프라이빗 서브넷의 인스턴스에 할당된 보안 그룹의 인바운드 트래픽을 허용하는 보안 그룹을 생성합니다. 보안 그룹을 DB 인스턴스에 연결합니다.",
      "D": "퍼블릭 서브넷과 프라이빗 서브넷 사이에 새로운 피어링 연결을 생성합니다. 프라이빗 서브넷과 데이터베이스 서브넷 간에 다른 피어링 연결을 만듭니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 보안 그룹 — 상태 유지 방화벽, 인바운드 화이트리스트 기반\n▸ \"프라이빗만 접근\" → DB 인스턴스 보안 그룹에 프라이빗 소스만 허용\n\n【정답 포인트】\n▸ 네트워크 레이어(라우팅) 제어 ≠ 애플리케이션 접근 제어\n▸ DB 인스턴스 보안 그룹 → 프라이빗 서브넷 EC2의 보안 그룹만 인바운드 허용\n▸ \"프라이빗만\" 구현 → DB SG에서 프라이빗 EC2 SG 소스 지정\n\n【오답 체크】\n(A) 라우팅 테이블 → VPC 내부 경로 제어, 같은 VPC 내 직접 통신 미방어\n(B) \"거부\" 규칙 → 보안 그룹은 명시적 거부 불가능 (화이트리스트만 가능)\n(D) VPC 피어링 → 같은 VPC 내부 라우팅 문제 미해결, 피어링 불필요\n\n【시험 포인트】\n패턴: \"특정 소스만 DB 접근\" → DB 보안 그룹에서 프라이빗 EC2 SG 허용\n매핑: 라우팅(경로) vs 보안그룹(접근제어) 역할 구분 명확화"
  },
  {
    "id": 56,
    "question": "회사는 Amazon Route 53 에 도메인 이름을 등록했습니다. 이 회사는 ca-central-1 리전의 Amazon API Gateway를 백엔드 마이크로서비스 API의 공용 인터페이스로 사용합니다. 타사 서비스는 API를 안전하게 사용합니다. 회사는 타사 서비스에서 HTTPS를 사용할 수 있도록 회사의 도메인 이름 및 해당 인증서로 API 게이트웨이 URL을 설계하려고 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "API Gateway에서 Name=\"Endpoint-URL\" 및 Value=\"Company Domain Name\"으로 단계 변수를 생성하여 기본 URL 을 덮어씁니다. 회사의 도메인 이름과 연결된 공인 인증서를 AWS Certificate Manager(ACM)로 가져옵니다.",
      "B": "회사의 도메인 이름으로 Route 53 DNS 레코드를 생성합니다. 별칭 레코드가 리전 API 게이트웨이 단계 엔드포인트를 가리키도록 합니다. 회사의 도메인 이름과 연결된 공인 인증서를 us-east-1 리전의 AWS Certificate Manager(ACM)로 가져옵니다.",
      "C": "리전 API 게이트웨이 엔드포인트를 생성합니다. API Gateway 엔드포인트를 회사의 도메인 이름과 연결합니다. 회사의 도메인 이름과 연결된 공인 인증서를 동일한 리전의 AWS Certificate Manager(ACM)로 가져옵니다. API Gateway 엔드포인트에 인증서를 연결합니다. API Gateway 엔드포인트로 트래픽을 라우팅하도록 Route 53을 구성합니다.",
      "D": "리전 API 게이트웨이 엔드포인트를 생성합니다. API Gateway 엔드포인트를 회사의 도메인 이름과 연결합니다. 회사의 도메인 이름과 연결된 공인 인증서를 us-east-1 리전의 AWS Certificate Manager(ACM)로 가져옵니다. API Gateway API 에 인증서를 연결합니다. 회사의 도메인 이름으로 Route 53 DNS 레코드를 생성합니다. A 레코드가 회사의 도메인 이름을 가리키도록 합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 리전 API Gateway — 사용자 정의 도메인 이름 + 인증서 지원\n▸ ACM 인증서 — API Gateway와 동일 리전 필수\n\n【정답 포인트】\n▸ ca-central-1 리전 API Gateway → ca-central-1에서 ACM 인증서 생성\n▸ 사용자 정의 도메인 → API Gateway에서 직접 도메인/인증서 연결\n▸ Route 53 → API Gateway 리전 엔드포인트로 별칭 레코드 지정\n\n【오답 체크】\n(A) 단계 변수 → URL 변경 불가능, HTTPS 보안 미적용\n(B) us-east-1 ACM → ca-central-1 API Gateway와 리전 미스매치 (인증서 연결 불가)\n(D) 인증서 us-east-1 → ca-central-1 리전 API Gateway는 사용 불가능\n    (A 레코드 자기 참조 → 순환 참조 오류)\n\n【시험 포인트】\n패턴: \"사용자 정의 도메인 + HTTPS\" → 같은 리전 ACM + API Gateway 연결\n매핑: ACM 리전 제한 (CloudFront 제외 us-east-1만) vs 일반 서비스 로컬 리전"
  },
  {
    "id": 57,
    "question": "한 회사에서 인기 있는 소셜 미디어 웹사이트를 운영하고 있습니다. 웹사이트는 사용자에게 이미지를 업로드하여 다른 사용자와 공유할 수 있는 기능을 제공합니다. 회사는 이미지에 부적절한 콘텐츠가 포함되지 않았는지 확인하고 싶습니다. 회사는 개발 노력을 최소화하는 솔루션이 필요합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon Comprehend 를 사용하여 부적절한 콘텐츠를 감지합니다. 신뢰도가 낮은 예측에는 인적 검토를 사용합니다.",
      "B": "Amazon Rekognition 을 사용하여 부적절한 콘텐츠를 감지합니다. 신뢰도가 낮은 예측에는 인적 검토를 사용합니다.",
      "C": "Amazon SageMaker 를 사용하여 부적절한 콘텐츠를 감지합니다. 신뢰도가 낮은 예측에 레이블을 지정하려면 정답을 사용합니다.",
      "D": "AWS Fargate 를 사용하여 사용자 지정 기계 학습 모델을 배포하여 부적절한 콘텐츠를 감지합니다. 신뢰도가 낮은 예측에 레이블을 지정하려면 정답을 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Rekognition — 이미지/비디오 시각 콘텐츠 감지 (부적절한 이미지 포함)\n▸ Comprehend — 텍스트 자연어 처리 (이미지 분석 미지원)\n\n【정답 포인트】\n▸ \"이미지\" 업로드 → 시각 기반 분석 필수\n▸ 부적절한 콘텐츠 감지 → Rekognition 기본 기능 (라벨링 미필요)\n▸ \"최소 개발 노력\" → 완전 관리형 AI 서비스 (사용자 모델 학습 불필요)\n▸ 신뢰도 낮은 예측 → A2I(Amazon Augmented AI) 인적 검토 워크플로우\n\n【오답 체크】\n(A) Comprehend → 텍스트 자연어 처리, 이미지 콘텐츠 분석 미지원\n(C) SageMaker → 모델 학습 필요, 개발 노력 증가 (기성 모델 불가)\n(D) Fargate 커스텀 모델 → 학습 데이터 수집, 모델 개발/배포 복잡\n\n【시험 포인트】\n패턴: \"이미지 부적절 콘텐츠\" → Rekognition + A2I\n매핑: Comprehend(텍스트) vs Rekognition(이미지) vs SageMaker(학습) 용도 구분"
  },
  {
    "id": 58,
    "question": "회사는 확장성 및 가용성에 대한 요구 사항을 충족하기 위해 컨테이너에서 중요한 응용 프로그램을 실행하려고 합니다. 회사는 중요한 응용 프로그램의 유지 관리에 집중하는 것을 선호합니다. 회사는 컨테이너화된 워크로드를 실행하는 기본 인프라의 프로비저닝 및 관리에 대한 책임을 원하지 않습니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon EC2 인스턴스를 사용하고 인스턴스에 Docker를 설치합니다.",
      "B": "Amazon EC2 작업자 노드에서 Amazon Elastic Container Service(Amazon ECS)를 사용합니다.",
      "C": "AWS Fargate에서 Amazon Elastic Container Service(Amazon ECS)를 사용합니다.",
      "D": "Amazon Elastic Container Service(Amazon ECS)에 최적화된 Amazon 머신 이미지(AMI)의 Amazon EC2 인스턴스를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Serverless Container — 인프라 관리 없이 컨테이너 실행\n▸ AWS Fargate — EC2 인스턴스 관리 불필요, 관리형 컨테이너 서비스\n▸ ECS 클러스터 — 태스크/서비스 오케스트레이션\n\n【정답 포인트】\n▸ \"기본 인프라 관리 책임 원하지 않음\" → Serverless 선택 → Fargate\n▸ 애플리케이션 유지에만 집중 → 운영 오버헤드 최소화\n\n【오답 체크】\n(A) EC2 + Docker — 인스턴스 관리 직접 담당\n(B) EC2 워커 노드 ECS — 클러스터 구성/유지보수 필요\n(D) ECS 최적화 AMI — 여전히 EC2 관리 책임\n\n【시험 포인트】\n\"인프라 관리 책임 원하지 않음\" 패턴 → Fargate(Serverless)\n컨테이너 + 자동 확장 + 고가용성 → Fargate + ECS 조합"
  },
  {
    "id": 59,
    "question": "회사는 300 개 이상의 글로벌 웹사이트 및 애플리케이션을 호스팅합니다. 이 회사는 매일 30TB 이상의 클릭스트림 데이터를 분석할 플랫폼이 필요합니다. 솔루션 설계자는 클릭스트림 데이터를 전송하고 처리하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS Data Pipeline을 설계하여 데이터를 Amazon S3 버킷에 보관하고 데이터로 Amazon EMR 클러스터를 실행하여 분석을 생성합니다.",
      "B": "Amazon EC2 인스턴스의 Auto Scaling 그룹을 생성하여 데이터를 처리하고 Amazon Redshift가 분석에 사용할 수 있도록 Amazon S3 데이터 레이크로 보냅니다.",
      "C": "데이터를 Amazon CloudFront 에 캐시합니다. Amazon S3 버킷에 데이터를 저장합니다. 객체가 S3 버킷에 추가될 때. AWS Lambda 함수를 실행하여 분석용 데이터를 처리합니다.",
      "D": "Amazon Kinesis Data Streams 에서 데이터를 수집합니다. Amazon Kinesis Data Firehose 를 사용하여 Amazon S3 데이터 레이크로 데이터를 전송합니다. 분석을 위해 Amazon Redshift에 데이터를 로드합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 실시간 스트리밍 수집 — Kinesis Data Streams(고속 수신)\n▸ 배치 전송 — Firehose(자동 버퍼링/압축/S3 적재)\n▸ 데이터 레이크 → 분석 엔진 — S3 → Redshift\n\n【정답 포인트】\n▸ \"매일 30TB+\" + \"300개 글로벌 웹\" → 대규모 실시간 스트림\n▸ Kinesis Streams → Firehose → S3 → Redshift 파이프라인\n▸ 확장성·신뢰성·자동화 실현\n\n【오답 체크】\n(A) EMR — 배치 처리용, 실시간 수집 능력 부족\n(B) EC2 Auto Scaling — 수동 구성/관리 필요, 스트림 최적화 아님\n(C) CloudFront 캐시 + Lambda — 대용량 배치 처리에 비효율\n\n【시험 포인트】\n\"스트림 데이터\" 패턴 → Kinesis 우선 고려\nKinesis Streams(수집) + Firehose(전송) + S3(저장) 조합\n분석 목표 → Redshift 매핑"
  },
  {
    "id": 60,
    "question": "회사에 AWS 에서 호스팅되는 웹 사이트가 있습니다. 웹 사이트는 HTTP 와 HTTPS 를 별도로 처리하도록 구성된 ALB(Application Load Balancer) 뒤에 있습니다. 회사는 요청이 HTTPS를 사용하도록 모든 요청을 웹사이트로 전달하려고 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "HTTPS 트래픽만 허용하도록 ALB의 네트워크 ACL을 업데이트합니다.",
      "B": "URL의 HTTP를 HTTPS로 바꾸는 규칙을 만듭니다.",
      "C": "ALB에서 리스너 규칙을 생성하여 HTTP 트래픽을 HTTPS로 리디렉션합니다.",
      "D": "ALB를 SNI(서버 이름 표시)를 사용하도록 구성된 Network Load Balancer로 교체합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ ALB 리스너 규칙 — HTTP/HTTPS 트래픽 제어\n▸ HTTP → HTTPS 리디렉션 — 301/302 상태코드\n▸ 보안 정책 — 모든 통신 암호화 강제\n\n【정답 포인트】\n▸ \"HTTP 요청 HTTPS로 변환\" → 리디렉션 규칙\n▸ ALB 리스너 규칙: 포트 80(HTTP) 수신 → 443(HTTPS) 리다이렉트\n▸ 애플리케이션 코드 변경 없음\n\n【오답 체크】\n(A) 네트워크 ACL — 트래픽 차단만 가능, 리디렉션 불가\n(B) URL 규칙 — ALB 계층에서 실현 불가능\n(D) NLB 전환 — SNI는 무관, ALB가 적절한 솔루션\n\n【시험 포인트】\n\"HTTP → HTTPS\" 요구사항 → ALB 리스너 규칙\nL7 기반 라우팅 = ALB 강점\nNLB 자체는 SSL/TLS 재작성 미지원"
  },
  {
    "id": 61,
    "question": "한 회사가 AWS 에서 2 계층 웹 애플리케이션을 개발하고 있습니다. 회사 개발자는 백엔드 Amazon RDS 데이터베이스에 직접 연결되는 Amazon EC2 인스턴스에 애플리케이션을 배포했습니다. 회사는 애플리케이션에 데이터베이스 자격 증명을 하드코딩해서는 안 됩니다. 또한 회사는 정기적으로 데이터베이스 자격 증명을 자동으로 교체하는 솔루션을 구현해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "인스턴스 메타데이터에 데이터베이스 자격 증명을 저장합니다. Amazon EventBridge(Amazon CloudWatch Events) 규칙을 사용하여 RDS 자격 증명과 인스턴스 메타데이터를 동시에 업데이트하는 예약된 AWS Lambda 함수를 실행합니다.",
      "B": "암호화된 Amazon S3 버킷의 구성 파일에 데이터베이스 자격 증명을 저장합니다. Amazon EventBridge(Amazon CloudWatch Events) 규칙을 사용하여 RDS 자격 증명과 구성 파일의 자격 증명을 동시에 업데이트하는 예약된 AWS Lambda 함수를 실행합니다. S3 버전 관리를 사용하여 이전 값으로 폴백하는 기능을 보장합니다.",
      "C": "데이터베이스 자격 증명을 AWS Secrets Manager 에 암호로 저장합니다. 보안 비밀에 대한 자동 순환을 켭니다. EC2 역할에 필요한 권한을 연결하여 보안 암호에 대한 액세스 권한을 부여합니다.",
      "D": "데이터베이스 자격 증명을 AWS Systems Manager Parameter Store 에 암호화된 파라미터로 저장합니다. 암호화된 매개변수에 대해 자동 회전을 켭니다. EC2 역할에 필요한 권한을 연결하여 암호화된 파라미터에 대한 액세스 권한을 부여합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Secrets Manager — 자격증명 자동 회전 기능 내장\n▸ RDS 통합 — Secrets Manager ↔ RDS 암호 자동 동기화\n▸ 하드코딩 제거 — IAM 기반 동적 접근\n\n【정답 포인트】\n▸ \"자격증명 정기적 자동 교체\" → Secrets Manager 자동 회전 기능\n▸ RDS와 네이티브 통합 → Lambda 확장 불필요\n▸ 최소 운영 오버헤드 → 구성 후 자동 실행\n\n【오답 체크】\n(A) 인스턴스 메타데이터 — 자격증명 저장에 부적합\n(B) S3 + Lambda — 수동 구성 필요, Secrets Manager보다 복잡\n(D) Parameter Store — 자동 회전 기능 제한적(최신 기능 부족)\n\n【시험 포인트】\n\"자동 회전\" + \"RDS\" → Secrets Manager 확정\nParameter Store: 구성 관리용, Parameter 값 회전 미약\nSecrets Manager: 보안 비밀(암호/토큰) 회전 전문"
  },
  {
    "id": 62,
    "question": "회사에서 AWS 에 새로운 공개 웹 애플리케이션을 배포하고 있습니다. 애플리케이션은 ALB(Application Load Balancer) 뒤에서 실행됩니다. 애플리케이션은 외부 CA(인증 기관)에서 발급한 SSL/TLS 인증서를 사용하여 에지에서 암호화해야 합니다. 인증서가 만료되기 전에 매년 인증서를 교체해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS Certificate Manager(ACM)를 사용하여 SSL/TLS 인증서를 발급합니다. 인증서를 ALB에 적용합니다. 관리형 갱신 기능을 사용하여 인증서를 자동으로 교체합니다.",
      "B": "AWS Certificate Manager(ACM)를 사용하여 SSL/TLS 인증서를 발급합니다. 인증서에서 키 자료를 가져옵니다. AL 에 인증서 적용 관리되는 갱신 기능을 사용하여 인증서를 자동으로 교체합니다.",
      "C": "AWS Certificate Manager(ACM) 사설 인증 기관을 사용하여 루트 CA 에서 SSL/TLS 인증서를 발급합니다. 인증서를 ALB 에 적용합니다. 관리형 갱신 기능을 사용하여 인증서를 자동으로 교체합니다.",
      "D": "AWS Certificate Manager(ACM)를 사용하여 SSL/TLS 인증서를 가져옵니다. 인증서를 ALB에 적용합니다. Amazon EventBridge(Amazon CloudWatch Events)를 사용하여 인증서가 만료될 때 알림을 보냅니다. 인증서를 수동으로 교체합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 외부 CA 인증서 — 제3자 발급, ACM 가져오기 필요\n▸ ACM 자동 갱신 — AWS 자체 발급 인증서만 지원\n▸ 만료 모니터링 — EventBridge 알림\n\n【정답 포인트】\n▸ \"외부 CA에서 발급한\" → ACM 가져오기(Import)\n▸ ACM 자동 갱신은 AWS 발급 인증서만 가능\n▸ 외부 CA → 만료 60일 전 EventBridge 알림 → 수동 갱신\n\n【오답 체크】\n(A) ACM 발급 — 외부 CA 요구사항과 상충\n(B) 키 자료 추출 후 ALB 적용 — ACM 가져오기가 아님, 불가능\n(C) ACM 사설 CA — 내부용, 공개 인증서 기능 아님\n\n【시험 포인트】\n\"외부 CA\" + \"자동 갱신\" → 조건 충돌 분석\nACM 자동 갱신: AWS 발급만 가능\n외부 CA → ACM Import → 수동 갱신(알림 기반)"
  },
  {
    "id": 63,
    "question": "회사는 AWS 에서 인프라를 실행하고 문서 관리 애플리케이션에 대해 700,000 명의 등록 기반을 보유하고 있습니다. 회사는 큰 .pdf 파일을 .jpg 이미지 파일로 변환하는 제품을 만들려고 합니다. .pdf 파일의 크기는 평균 5MB 입니다. 회사는 원본 파일과 변환 파일을 보관해야 합니다. 솔루션 설계자는 시간이 지남에 따라 빠르게 증가할 수요를 수용할 수 있는 확장 가능한 솔루션을 설계해야 합니다. 어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": {
      "A": ".pdf 파일을 Amazon S3 에 저장합니다. AWS Lambda 함수를 호출하여 파일을 .jpg 형식으로 변환하고 Amazon S3에 다시 저장하도록 S3 PUT 이벤트를 구성합니다.",
      "B": ".pdf 파일을 Amazon DynamoD 에 저장 DynamoDB 스트림 기능을 사용하여 AWS Lambda 함수를 호출하여 파일을 .jpg 형식으로 변환하고 DynamoDB에 다시 저장합니다.",
      "C": "Amazon EC2 인스턴스, Amazon Elastic Block Store(Amazon EBS) 스토리지 및 Auto Scaling 그룹이 포함된 AWS Elastic Beanstalk 애플리케이션에 .pdf 파일을 업로드합니다. EC2 인스턴스의 프로그램을 사용하여 파일을 .jpg 형식으로 변환합니다. .pdf 파일과 .jpg 파일을 EBS 스토어에 저장합니다.",
      "D": ".pdf 파일을 Amazon EC2 인스턴스, Amazon Elastic File System(Amazon EFS) 스토리지 및 Auto Scaling 그룹이 포함된 AWS Elastic Beanstalk 애플리케이션에 업로드합니다. EC2 인스턴스의 프로그램을 사용하여 파일을 .jpg 형식으로 변환합니다. .pdf 파일과 .jpg 파일을 EBS 스토어에 저장합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 서버리스 변환 — Lambda 함수 기반\n▸ 이벤트 기반 처리 — S3 PUT 이벤트 트리거\n▸ 자동 확장 — 동시 Lambda 실행으로 병렬 처리\n\n【정답 포인트】\n▸ \"빠르게 증가할 수요\" → 서버리스 자동 확장\n▸ S3 → Lambda 변환 → S3 저장 (원본/변환본 모두)\n▸ 비용 효율: 사용량 기반 과금, 유휴 비용 없음\n\n【오답 체크】\n(B) DynamoDB — 파일 저장에 부적합, 비용 높음\n(C) Beanstalk + EBS — 관리 오버헤드, 확장 수동 구성\n(D) Beanstalk + EFS — EBS에 저장(EFS 미사용), 전체적 비효율\n\n【시험 포인트】\n\"대용량 파일 + 동적 확장\" → S3 + Lambda 조합\nS3 이벤트 → Lambda 트리거: 표준 아키텍처\n700,000 사용자 규모 → 서버리스 필수(EC2 불경제)"
  },
  {
    "id": 64,
    "question": "회사는 온프레미스에서 실행되는 Windows 파일 서버에 5TB 이상의 파일 데이터를 가지고 있습니다. 사용자와 애플리케이션은 매일 데이터와 상호 작용합니다. 이 회사는 Windows 워크로드를 AWS 로 이전하고 있습니다. 회사가 이 프로세스를 계속함에 따라 회사는 최소 지연 시간으로 AWS 및 온프레미스 파일 스토리지에 액세스할 수 있어야 합니다. 회사는 운영 오버헤드를 최소화하고 기존 파일 액세스 패턴을 크게 변경할 필요가 없는 솔루션이 필요합니다. 회사는 AWS 연결을 위해 AWS Site-to-Site VPN 연결을 사용합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS에서 Windows 파일 서버용 Amazon FSx를 배포 및 구성합니다. 온-프레미스 파일 데이터를 Windows 파일 서버용 FSx로 이동합니다. AWS에서 Windows 파일 서버용 FSx를 사용하도록 워크로드를 재구성합니다.",
      "B": "온프레미스에 Amazon S3 파일 게이트웨이를 배포하고 구성합니다. 온프레미스 파일 데이터를 S3 파일 게이트웨이로 이동합니다. S3 파일 게이트웨이를 사용하도록 온프레미스 워크로드 및 클라우드 워크로드를 재구성합니다.",
      "C": "온프레미스에 Amazon S3 파일 게이트웨이를 배포하고 구성합니다. 온프레미스 파일 데이터를 Amazon S3로 이동합니다. Amazon S3를 직접 사용하거나 S3 파일 게이트웨이를 사용하도록 워크로드를 재구성합니다. 각 워크로드의 위치에 따라 다릅니다.",
      "D": "AWS 에서 Windows 파일 서버용 Amazon FSx 를 배포 및 구성합니다. 온프레미스에 Amazon FSx 파일 게이트웨이를 배포하고 구성합니다. 온프레미스 파일 데이터를 FSx 파일 게이트웨이로 이동합니다. AWS 의 Windows 파일 서버용 FSx 를 사용하도록 클라우드 워크로드를 구성합니다. FSx 파일 게이트웨이를 사용하도록 온프레미스 워크로드를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ FSx for Windows File Server — SMB 프로토콜, 낮은 지연시간\n▸ FSx 파일 게이트웨이 — 온프레미스 캐시 계층\n▸ 하이브리드 아키텍처 — 양쪽 위치 동시 액세스\n\n【정답 포인트】\n▸ \"최소 지연시간 + 기존 액세스 패턴 유지\" → FSx + 게이트웨이\n▸ 온프레미스: FSx 파일 게이트웨이 (캐시) → AWS FSx 동기\n▸ AWS: FSx for Windows 직접 접근\n▸ SMB/NFS 호환 → 애플리케이션 코드 변경 최소\n\n【오답 체크】\n(A) FSx만 — 온프레미스 캐시 전략 부재, 지연시간 증가\n(B) \n(C) S3 게이트웨이 — Windows/CIFS 미지원, 패턴 변경 필요\n\n【시험 포인트】\n\"하이브리드 + 최소 지연\" → FSx + 게이트웨이 조합\nFSx 파일 게이트웨이: 온프레미스 캐시 + AWS 동기화\nWindows 파일 서버 → FSx for Windows 매핑"
  },
  {
    "id": 65,
    "question": "병원은 최근 Amazon API Gateway 및 AWS Lambda와 함께 RESTful API를 배포했습니다. 병원은 API Gateway 및 Lambda 를 사용하여 PDF 형식 및 JPEG 형식의 보고서를 업로드합니다. 병원은 보고서에서 보호되는 건강 정보(PHI)를 식별하기 위해 Lambda 코드를 수정해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기존 Python 라이브러리를 사용하여 보고서에서 텍스트를 추출하고 추출된 텍스트에서 PHI를 식별합니다.",
      "B": "Amazon Textract 를 사용하여 보고서에서 텍스트를 추출합니다. Amazon SageMaker 를 사용하여 추출된 텍스트에서 PHI를 식별합니다.",
      "C": "Amazon Textract 를 사용하여 보고서에서 텍스트를 추출합니다. Amazon Comprehend Medical을 사용하여 추출된 텍스트에서 PHI를 식별합니다.",
      "D": "Amazon Rekognition 을 사용하여 보고서에서 텍스트를 추출합니다. Amazon Comprehend Medical을 사용하여 추출된 텍스트에서 PHI를 식별합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon Textract — 문서(PDF/이미지) OCR/텍스트 추출\n▸ Comprehend Medical — 의료 텍스트 분석, PHI 자동 감지\n▸ 최소 오버헤드 — 관리형 서비스 조합\n\n【정답 포인트】\n▸ \"PDF + JPEG → 텍스트 추출\" → Textract(문서 특화)\n▸ \"PHI 식별\" → Comprehend Medical(의료 NLP 전문)\n▸ Lambda 내 통합: 두 서비스 API 호출만 필요\n▸ 모델 학습/관리 불필요\n\n【오답 체크】\n(A) Python 라이브러리 — PHI 감지 로직 직접 개발(오버헤드 높음)\n(B) Textract + SageMaker — SageMaker는 모델 학습/관리 필요\n(D) Rekognition — 텍스트 추출에 최적화 아님(Textract가 정확)\n\n【시험 포인트】\n\"PDF + JPEG\" → Textract 우선\n\"의료 PHI\" → Comprehend Medical 전문 서비스\n\"최소 오버헤드\" = 관리형 AI 서비스 조합"
  },
  {
    "id": 66,
    "question": "회사에 각각 크기가 약 5MB 인 많은 수의 파일을 생성하는 응용 프로그램이 있습니다. 파일은 Amazon S3에 저장됩니다. 회사 정책에 따라 파일을 삭제하려면 4년 동안 보관해야 합니다. 파일에는 재생산하기 쉽지 않은 중요한 비즈니스 데이터가 포함되어 있으므로 즉각적인 액세스가 항상 필요합니다. 파일은 객체 생성 후 처음 30 일 동안 자주 액세스되지만 처음 30일 후에는 거의 액세스되지 않습니다. 가장 비용 효율적인 스토리지 솔루션은 무엇입니까?",
    "options": {
      "A": "객체 생성 후 30일 동안 S3 Standard에서 S3 Glacier로 파일을 이동하는 S3 버킷 수명 주기 정책을 생성합니다. 객체 생성 후 4년이 지나면 파일을 삭제합니다.",
      "B": "객체 생성 후 30 일 동안 S3 Standard 에서 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 파일을 이동하는 S3 버킷 수명 주기 정책을 생성합니다. 객체 생성 후 4 년이 지나면 파일을 삭제합니다.",
      "C": "객체 생성 후 30 일 동안 S3 Standard 에서 S3 Standard-Infrequent Access(S3 Standard-IA)로 파일을 이동하는 S3 버킷 수명 주기 정책을 생성합니다. 객체 생성 후 4년이 지나면 파일을 삭제합니다.",
      "D": "객체 생성 후 30 일 동안 S3 Standard 에서 S3 Standard-Infrequent Access(S3 Standard-IA)로 파일을 이동하는 S3 버킷 수명 주기 정책을 생성합니다. 객체 생성 4 년 후 파일을 S3 Glacier로 이동합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Standard-IA — 자주 액세스하지 않는 데이터, 즉시 접근 가능\n▸ S3 Glacier — 장기 보관, 복구 시간 필요(빠른 접근 요구 시 부적합)\n▸ 수명 주기 정책 — 자동 스토리지 전환\n\n【정답 포인트】\n▸ \"즉시 액세스 항상 필요\" → Glacier 제외(검색 지연 발생)\n▸ \"30일 이후 거의 액세스 안 함\" → Standard-IA 전환\n▸ Standard-IA: 자동 검색 가능, Glacier는 수동 복구 필요\n▸ 4년 후 삭제\n\n【오답 체크】\n(A) Glacier 사용 — \"즉시 접근 필요\"와 충돌\n(B) One Zone-IA — 이중화 부재, 중요 데이터 위험\n(D) 4년 후 Glacier — 최종 삭제만 필요, 불필요한 전환\n\n【시험 포인트】\n\"즉시 접근 필요\" = Glacier 불가\nStandard → Standard-IA (30일): 비용 절감\nOne Zone-IA: 가용성 위험(중요 데이터 부적합)"
  },
  {
    "id": 67,
    "question": "회사는 여러 Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. 애플리케이션은 Amazon SQS 대기열의 메시지를 처리하고 Amazon RDS 테이블에 쓰고 대기열에서 메시지를 삭제합니다. RDS 테이블에서 가끔 중복 레코드가 발견됩니다. SQS 대기열에는 중복 메시지가 없습니다. 메시지가 한 번만 처리되도록 솔루션 설계자는 무엇을 해야 합니까?",
    "options": {
      "A": "CreateQueue API 호출을 사용하여 새 대기열을 만듭니다.",
      "B": "AddPermission API 호출을 사용하여 적절한 권한을 추가합니다.",
      "C": "ReceiveMessage API 호출을 사용하여 적절한 대기 시간을 설정합니다.",
      "D": "ChangeMessageVisibility API 호출을 사용하여 가시성 시간 초과를 늘립니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SQS 가시성 초과(Visibility Timeout) — 메시지 처리 시간 보장\n▸ 중복 처리 — 가시성 초과 부족 시 발생\n▸ 멱등성 — 동일 메시지 여러 처리 방지\n\n【정답 포인트】\n▸ 문제: 처리 중 메시지가 재노출 → 중복 처리\n▸ 원인: 가시성 초과 < 실제 처리 시간\n▸ 해결: ChangeMessageVisibility로 초과값 증가\n▸ RDS 삽입 완료 전에 메시지 가시성 복원 방지\n\n【오답 체크】\n(A) CreateQueue — 새 대기열 생성은 무관\n(B) AddPermission — 권한 추가는 중복 처리와 무관\n(C) ReceiveMessage의 WaitTime — 폴링 동작이지, 처리 시간 아님\n\n【시험 포인트】\n\"SQS 중복 처리\" → 가시성 초과 확인\nVisibility Timeout > 실제 처리 시간 필요\nChangeMessageVisibility: 동적 조정 가능"
  },
  {
    "id": 68,
    "question": "솔루션 설계자는 회사의 온프레미스 인프라를 AWS 로 확장하기 위해 새로운 하이브리드 아키텍처를 설계하고 있습니다. 이 회사는 AWS 리전에 대해 일관되게 짧은 지연 시간과 고가용성 연결이 필요합니다. 회사는 비용을 최소화해야 하며 기본 연결이 실패할 경우 더 느린 트래픽을 기꺼이 받아들입니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "리전에 대한 AWS Direct Connect 연결을 프로비저닝합니다. 기본 Direct Connect 연결이 실패하는 경우 백업으로 VPN 연결을 프로비저닝합니다.",
      "B": "개인 연결을 위해 지역에 VPN 터널 연결을 프로비저닝합니다. 기본 VPN 연결이 실패할 경우 개인 연결 및 백업으로 두 번째 VPN 터널을 프로비저닝합니다.",
      "C": "리전에 대한 AWS Direct Connect 연결을 프로비저닝합니다. 기본 Direct Connect 연결이 실패하는 경우 백업과 동일한 지역에 두 번째 Direct Connect 연결을 프로비저닝합니다.",
      "D": "리전에 대한 AWS Direct Connect 연결을 프로비저닝합니다. AWS CLI 에서 Direct Connect 장애 조치 속성을 사용하여 기본 Direct Connect 연결이 실패할 경우 백업 연결을 자동으로 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Direct Connect — 짧은 지연시간, 고대역폭 전용 연결\n▸ VPN — 공용 인터넷, 느리지만 비용 저렴\n▸ 하이브리드 이중화 — Primary(DX) + Backup(VPN)\n\n【정답 포인트】\n▸ \"짧은 지연시간\" → Direct Connect 우선\n▸ \"장애 시 느린 트래픽 허용\" → VPN 백업 충분\n▸ \"비용 최소화\" → DX(주) + VPN(백업) 조합\n▸ 자동 장애 조치: Route 53 또는 BGP 활용\n\n【오답 체크】\n(B) VPN만 — 주요 연결이 느림, 지연시간 요구 미충족\n(C) DX 이중화 — 비용 증가, 요구사항과 맞지 않음\n(D) 자동 생성 기능 — 존재하지 않음\n\n【시험 포인트】\n\"짧은 지연 + 비용 최소\" → DX + VPN 조합\nDirect Connect: Primary (낮은 지연)\nVPN: Backup (높은 지연, 낮은 비용)"
  },
  {
    "id": 69,
    "question": "회사는 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 비즈니스 크리티컬 웹 애플리케이션을 실행하고 있습니다. EC2 인스턴스는 Auto Scaling 그룹에 있습니다. 애플리케이션은 단일 가용 영역에 배포된 Amazon Aurora PostgreSQL 데이터베이스를 사용합니다. 회사는 다운타임과 데이터 손실을 최소화하면서 애플리케이션의 고가용성을 원합니다. 최소한의 운영 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스를 다른 AWS 리전에 배치합니다. Amazon Route 53 상태 확인을 사용하여 트래픽을 리디렉션합니다. Aurora PostgreSQL 교차 리전 복제를 사용합니다.",
      "B": "여러 가용 영역을 사용하도록 Auto Scaling 그룹을 구성합니다. 데이터베이스를 다중 AZ로 구성합니다. 데이터베이스에 대한 Amazon RDS 프록시 인스턴스를 구성합니다.",
      "C": "하나의 가용 영역을 사용하도록 Auto Scaling 그룹을 구성합니다. 데이터베이스의 시간별 스냅샷을 생성합니다. 장애가 발생한 경우 스냅샷에서 데이터베이스를 복구합니다.",
      "D": "여러 AWS 리전을 사용하도록 Auto Scaling 그룹을 구성합니다. 애플리케이션의 데이터를 Amazon S3에 씁니다. S3 이벤트 알림을 사용하여 AWS Lambda 함수를 시작하여 데이터베이스에 데이터를 씁니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Multi-AZ 데이터베이스 — 자동 장애 조치, RPO/RTO 최소\n▸ 다중 가용 영역 ASG — EC2 인스턴스 분산 배치\n▸ RDS 프록시 — 연결 관리, 장애 조치 최적화\n\n【정답 포인트】\n▸ \"다운타임·데이터 손실 최소\" → Multi-AZ 구성\n▸ \"최소 운영 노력\" → 관리형 서비스 자동 장애 조치\n▸ EC2: 다중 AZ ASG 배치\n▸ DB: Aurora/RDS Multi-AZ + RDS 프록시\n\n【오답 체크】\n(A) 크로스 리전 — 운영 복잡도 높음, 지연시간 증가\n(C) 단일 AZ + 스냅샷 — 스냅샷 복구 수동, RPO 길음\n(D) 다중 리전 + S3 — 복잡한 아키텍처, RTO 길음\n\n【시험 포인트】\n\"고가용성 + 최소 운영\" → Multi-AZ 패턴\nAurora/RDS Multi-AZ: 자동 장애 조치\nRDS 프록시: 연결 풀 관리, 부하 분산"
  },
  {
    "id": 70,
    "question": "회사의 HTTP 애플리케이션은 NLB(Network Load Balancer) 뒤에 있습니다. NLB 의 대상 그룹은 웹 서비스를 실행하는 여러 EC2 인스턴스와 함께 Amazon EC2 Auto Scaling 그룹을 사용하도록 구성됩니다. 회사는 NLB 가 애플리케이션에 대한 HTTP 오류를 감지하지 못한다는 것을 알게 되었습니다. 이러한 오류는 웹 서비스를 실행하는 EC2 인스턴스를 수동으로 다시 시작해야 합니다. 회사는 사용자 정의 스크립트나 코드를 작성하지 않고 애플리케이션의 가용성을 개선해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "NLB에서 HTTP 상태 확인을 활성화하고 회사 응용 프로그램의 URL을 제공합니다.",
      "B": "EC2 인스턴스에 cron 작업을 추가하여 1 분에 한 번씩 로컬 애플리케이션의 로그를 확인합니다. HTTP 오류가 감지된 경우. 응용 프로그램이 다시 시작됩니다.",
      "C": "NLB를 Application Load Balancer로 교체합니다. 회사 애플리케이션의 URL을 제공하여 HTTP 상태 확인을 활성화합니다. 비정상 인스턴스를 교체하도록 Auto Scaling 작업을 구성합니다.",
      "D": "NLB 에 대한 UnhealthyHostCount 지표를 모니터링하는 Amazon Cloud Watch 경보를 생성합니다. 경보가 ALARM 상태일 때 비정상 인스턴스를 교체하도록 Auto Scaling 작업을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ NLB — L4 로드 밸런서, TCP/UDP 기반 상태 확인만 가능\n▸ ALB — L7 로드 밸런서, HTTP 기반 상태 확인 지원\n▸ 자동 교체 — ASG 연동으로 자동 복구\n\n【정답 포인트】\n▸ \"HTTP 오류 감지\" → 애플리케이션 레벨 상태 확인 필요\n▸ NLB는 TCP 상태 확인만 가능(포트 응답만 체크)\n▸ ALB로 전환 → HTTP GET/POST 상태 확인 활성화\n▸ 비정상 인스턴스 자동 교체: ASG 작업 연동\n\n【오답 체크】\n(A) NLB HTTP 상태 확인 — NLB 기능 자체가 L4 제한\n(B) Cron + 로그 확인 — 사용자 정의 스크립트 작성(요구사항 위배)\n(D) CloudWatch + ASG — 감지(확인)와 교체 사이 지연, 수동 모니터링\n\n【시험 포인트】\n\"HTTP 오류 감지\" = L7 검사 = ALB\nNLB: TCP/UDP만, ALB: HTTP/HTTPS 애플리케이션 레벨\nASG와 통합하여 자동 복구"
  },
  {
    "id": 71,
    "question": "한 회사는 Amazon DynamoDB 를 사용하여 고객 정보를 저장하는 쇼핑 애플리케이션을 실행합니다. 데이터 손상의 경우 솔루션 설계자는 15 분의 RPO(복구 시점 목표)와 1 시간의 RTO(복구 시간 목표)를 충족하는 솔루션을 설계해야 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "DynamoDB 전역 테이블을 구성합니다. RPO 복구의 경우 애플리케이션이 다른 AWS 리전을 가리키도록 합니다.",
      "B": "DynamoDB 지정 시간 복구를 구성합니다. RPO 복구의 경우 원하는 시점으로 복원합니다.",
      "C": "DynamoDB 데이터를 매일 Amazon S3 Glacier 로 내보냅니다. RPO 복구의 경우 S3 Glacier에서 DynamoDB로 데이터를 가져옵니다.",
      "D": "DynamoDB 테이블에 대한 Amazon Elastic Block Store(Amazon EBS) 스냅샷을 15 분마다 예약합니다. RPO 복구의 경우 EBS 스냅샷을 사용하여 DynamoDB 테이블을 복원합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DynamoDB PITR(지정 시간 복구) — 35일 이내 임의 시점 복원\n▸ RPO 15분 — 최대 15분 데이터 손실 허용\n▸ RTO 1시간 — 1시간 내 복구 완료\n\n【정답 포인트】\n▸ \"RPO 15분\" → PITR 자동 백업(5초 간격)\n▸ \"RTO 1시간\" → DynamoDB 복구 빠름(< 1시간)\n▸ PITR 활성화: 전체 테이블 스냅샷 + 트랜잭션 로그\n▸ 원하는 시점으로 즉시 복원 가능\n\n【오답 체크】\n(A) 전역 테이블 — 리전 간 복제, 데이터 손상 방지 아님(동기화됨)\n(C) 일일 내보내기 → S3 Glacier — RPO 24시간(요구 초과)\n(D) EBS 스냅샷 — DynamoDB는 관리형 서비스, EBS 불가\n\n【시험 포인트】\nRPO 15분 + RTO 1시간 → DynamoDB PITR\nPITR: 자동 백업, 임의 시점 복원\n전역 테이블: 고가용성, 재해복구 용도 아님(손상 전파)"
  },
  {
    "id": 72,
    "question": "회사는 동일한 AWS 리전에 있는 Amazon S3 버킷에서 사진을 자주 업로드 및 다운로드해야 하는 사진 처리 애플리케이션을 실행합니다. 솔루션 설계자는 데이터 전송 비용이 증가한다는 사실을 알게 되었고 이러한 비용을 줄이기 위한 솔루션을 구현해야 합니다. 솔루션 설계자는 이 요구 사항을 어떻게 충족할 수 있습니까?",
    "options": {
      "A": "Amazon API Gateway 를 퍼블릭 서브넷에 배포하고 이를 통해 S3 호출을 라우팅하도록 라우팅 테이블을 조정합니다.",
      "B": "NAT 게이트웨이를 퍼블릭 서브넷에 배포하고 S3 버킷에 대한 액세스를 허용하는 엔드포인트 정책을 연결합니다.",
      "C": "애플리케이션을 퍼블릭 서브넷에 배포하고 S3 버킷에 액세스하기 위해 인터넷 게이트웨이를 통해 라우팅하도록 허용합니다.",
      "D": "S3 VPC 게이트웨이 엔드포인트를 VPC 에 배포하고 S3 버킷에 대한 액세스를 허용하는 엔드포인트 정책을 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 VPC 게이트웨이 엔드포인트 — 프라이빗 연결, 데이터 전송 비용 제거\n▸ 리전 내 전송 — 게이트웨이 엔드포인트 사용 시 무료\n▸ NAT 게이트웨이 — 공용 IP, 데이터 전송 비용 발생\n\n【정답 포인트】\n▸ \"동일 리전 S3\" + \"전송 비용 증가\" → 게이트웨이 엔드포인트\n▸ VPC 프라이빗 서브넷 → S3: 인터넷 게이트웨이 불필요\n▸ AWS 내부 네트워크 사용 → 데이터 전송 비용 0\n▸ 엔드포인트 정책으로 S3 버킷 접근 제어\n\n【오답 체크】\n(A) API Gateway — S3 라우팅에 부적합, 추가 비용 발생\n(B) NAT 게이트웨이 — 데이터 전송 비용 여전히 부과\n(C) 인터넷 게이트웨이 — 공용 IP 사용, 데이터 전송 비용 발생\n\n【시험 포인트】\n\"리전 내 S3 + 전송 비용 감소\" → VPC 게이트웨이 엔드포인트\n게이트웨이 엔드포인트: 무료(인터넷 게이트웨이/NAT는 비용)\nS3, DynamoDB만 게이트웨이 엔드포인트 지원"
  },
  {
    "id": 73,
    "question": "한 회사는 최근 프라이빗 서브넷의 Amazon EC2 에서 Linux 기반 애플리케이션 인스턴스를 시작하고 VPC 의 퍼블릭 서브넷에 있는 Amazon EC2 인스턴스에서 Linux 기반 배스천 호스트를 시작했습니다. 솔루션 설계자는 사내 네트워크에서 회사의 인터넷 연결을 통해 배스천 호스트 및 애플리케이션 서버에 연결해야 합니다. 솔루션 설계자는 모든 EC2 인스턴스의 보안 그룹이 해당 액세스를 허용하는지 확인해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 취해야 합니까? (2개를 선택하세요.)",
    "options": {
      "A": "배스천 호스트의 현재 보안 그룹을 애플리케이션 인스턴스의 인바운드 액세스만 허용하는 보안 그룹으로 교체합니다.",
      "B": "배스천 호스트의 현재 보안 그룹을 회사의 내부 IP 범위에서만 인바운드 액세스를 허용하는 보안 그룹으로 교체합니다.",
      "C": "배스천 호스트의 현재 보안 그룹을 회사의 외부 IP 범위에서만 인바운드 액세스를 허용하는 보안 그룹으로 교체합니다.",
      "D": "애플리케이션 인스턴스의 현재 보안 그룹을 배스천 호스트의 개인 IP 주소에서만 인바운드 SSH 액세스를 허용하는 보안 그룹으로 교체합니다.",
      "E": "애플리케이션 인스턴스의 현재 보안 그룹을 배스천 호스트의 공용 IP 주소에서만 인바운드 SSH 액세스를 허용하는 보안 그룹으로 교체합니다."
    },
    "answer": "CD",
    "explanation": "【핵심 용어】\n▸ 배스천 호스트 — 공용 서브넷, 외부 접근 진입점\n▸ 애플리케이션 서버 — 프라이빗 서브넷, 배스천을 통한 접근\n▸ 보안 그룹 순방향(Inbound) 규칙\n\n【정답 포인트】\n▸\n(C) 배스천: \"회사 외부 IP\" → 인터넷상 온프레미스 office 접근\n▸\n(D) 애플리케이션: \"배스천 개인 IP\" → VPC 내부 통신\n▸ 경로: 외부 → 배스천(공용) → 애플리케이션(프라이빗)\n\n【오답 체크】\n(A) 배스천이 애플리케이션 접근만 → 외부에서 배스천 접근 불가\n(B) 내부 IP → 외부 인터넷 연결 불가능\n(E) 배스천 공용 IP → VPC 외부 통신(프라이빗 서브넷 도달 불가)\n\n【시험 포인트】\n\"사내 네트워크\" → 외부(External) IP 범위\n\"배스천\" = VPC 진입점 → 외부 액세스 허용\n\"애플리케이션\" = 프라이빗 → 배스천 개인 IP만 허용"
  },
  {
    "id": 74,
    "question": "솔루션 설계자는 2 계층 웹 애플리케이션을 설계하고 있습니다. 애플리케이션은 퍼블릭 서브넷의 Amazon EC2에서 호스팅되는 퍼블릭 웹 티어로 구성됩니다. 데이터베이스 계층은 프라이빗 서브넷의 Amazon EC2에서 실행되는 Microsoft SQL Server로 구성됩니다. 보안은 회사의 최우선 과제입니다. 이 상황에서 보안 그룹을 어떻게 구성해야 합니까? (2개를 선택하세요.)",
    "options": {
      "A": "0.0.0.0/0 에서 포트 443 의 인바운드 트래픽을 허용하도록 웹 계층에 대한 보안 그룹을 구성합니다.",
      "B": "0.0.0.0/0 에서 포트 443 의 아웃바운드 트래픽을 허용하도록 웹 계층에 대한 보안 그룹을 구성합니다.",
      "C": "웹 계층에 대한 보안 그룹에서 포트 1433 의 인바운드 트래픽을 허용하도록 데이터베이스 계층에 대한 보안 그룹을 구성합니다.",
      "D": "데이터베이스 계층의 보안 그룹을 구성하여 포트 443 및 1433 의 아웃바운드 트래픽을 웹 계층의 보안 그룹으로 보냅니다.",
      "E": "웹 계층에 대한 보안 그룹의 포트 443 및 1433 에서 인바운드 트래픽을 허용하도록 데이터베이스 계층에 대한 보안 그룹을 구성합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ 웹 계층(Web Tier) — 공용 접근, HTTPS(443) 수신\n▸ 데이터베이스 계층(DB Tier) — 프라이빗, SQL Server(1433) 수신\n▸ 최소 권한(Least Privilege) — 필요한 통신만 허용\n\n【정답 포인트】\n▸\n(A) 웹: 0.0.0.0/0 포트 443 인바운드 → 공용 웹 서버 역할\n▸\n(C) DB: 웹 SG에서 포트 1433 인바운드 → 웹→DB 접근만\n▸ 단방향 신뢰: 웹 → DB(요청), DB는 웹과 직접 통신 불필요\n\n【오답 체크】\n(B) 443 아웃바운드 — 웹이 외부로 나갈 필요 없음(불필요)\n(D) DB 아웃바운드 — DB는 수동적, 아웃바운드 필요 없음\n(E) 포트 1433 — 일반 사용자가 직접 DB 접근(보안 위반)\n\n【시험 포인트】\n\"보안\" 최우선 → 최소 권한 원칙\n공용 웹: 0.0.0.0/0 443 OK\n프라이빗 DB: 웹 SG만 1433 허용(신뢰)"
  },
  {
    "id": 75,
    "question": "한 회사에서 애플리케이션의 성능을 개선하기 위해 다계층 애플리케이션을 온프레미스에서 AWS 클라우드로 이동하려고 합니다. 애플리케이션은 RESTful 서비스를 통해 서로 통신하는 애플리케이션 계층으로 구성됩니다. 한 계층이 오버로드되면 트랜잭션이 삭제됩니다. 솔루션 설계자는 이러한 문제를 해결하고 애플리케이션을 현대화하는 솔루션을 설계해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족하고 운영상 가장 효율적입니까?",
    "options": {
      "A": "Amazon API Gateway 를 사용하고 애플리케이션 계층으로 AWS Lambda 함수에 트랜잭션을 전달합니다. Amazon Simple Queue Service(Amazon SQS)를 애플리케이션 서비스 간의 통신 계층으로 사용합니다.",
      "B": "Amazon CloudWatch 지표를 사용하여 애플리케이션 성능 기록을 분석하여 성능 장애 동안 서버의 최대 사용률을 결정합니다. 최대 요구 사항을 충족하도록 애플리케이션 서버의 Amazon EC2 인스턴스 크기를 늘립니다.",
      "C": "Amazon Simple Notification Service(Amazon SNS)를 사용하여 Auto Scaling 그룹의 Amazon EC2 에서 실행되는 애플리케이션 서버 간의 메시징을 처리합니다. Amazon CloudWatch 를 사용하여 SNS 대기열 길이를 모니터링하고 필요에 따라 확장 및 축소합니다.",
      "D": "Amazon Simple Queue Service(Amazon SQS)를 사용하여 Auto Scaling 그룹의 Amazon EC2 에서 실행되는 애플리케이션 서버 간의 메시징을 처리합니다. Amazon CloudWatch 를 사용하여 SQS 대기열 길이를 모니터링하고 통신 오류가 감지되면 확장합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ API Gateway + Lambda — Serverless 구조, 자동 확장\n▸ SQS — 메시지 대기열, 비동기 통신, 손실 방지\n▸ 현대화(Modernization) — 서버리스로 전환\n\n【정답 포인트】\n▸ \"한 계층 오버로드 → 트랜잭션 손실\" → 메시지 큐 필요\n▸ API Gateway: HTTP 진입점\n▸ Lambda: 자동 확장(동시 실행 수 무제한)\n▸ SQS: 메시지 버퍼링, 손실 방지\n▸ 운영 효율: 서버 관리 없음\n\n【오답 체크】\n(B) EC2 수동 확대 — 성능 피크 예측 어려움, 비효율\n(C) SNS — 발행-구독만, 메시지 보존 불가(손실 위험)\n(D) EC2 + SQS — EC2 관리 필요, 운영 오버헤드 높음\n\n【시험 포인트】\n\"트랜잭션 손실\" → 메시지 영속성(Queue)\nSNS: 팬아웃(여러 대상 알림), 메시지 미보존\nSQS: 1:1 큐, 메시지 보존(Reliable)\n현대화 = Serverless(Lambda) 우선"
  },
  {
    "id": 76,
    "question": "회사는 단일 공장에 있는 여러 기계에서 매일 10TB의 계측 데이터를 수신합니다. 데이터는 공장 내에 위치한 온프레미스 데이터 센터의 SAN(Storage Area Network)에 저장된 JSON 파일로 구성됩니다. 회사는 이 데이터를 Amazon S3 로 전송하여 중요한 실시간에 가까운 분석을 제공하는 여러 추가 시스템에서 액세스할 수 있기를 원합니다. 데이터가 민감한 것으로 간주되기 때문에 안전한 전송이 중요합니다. 가장 안정적인 데이터 전송을 제공하는 솔루션은 무엇입니까?",
    "options": {
      "A": "공용 인터넷을 통한 AWS DataSync",
      "B": "AWS Direct Connect를 통한 AWS DataSync",
      "C": "공용 인터넷을 통한 AWS Database Migration Service(AWS DMS)",
      "D": "AWS Direct Connect를 통한 AWS Database Migration Service(AWS DMS)"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS DataSync — 파일/데이터 대용량 전송 전문\n▸ AWS Direct Connect — 전용 회선, 보안/안정성 우수\n▸ 민감 데이터 — 암호화 + 회선 보안 필수\n\n【정답 포인트】\n▸ \"10TB/일 + JSON 파일\" → DataSync(데이터 전송 전문)\n▸ \"민감한 데이터\" → Direct Connect(공용 인터넷 회피)\n▸ \"안정적인 전송\" → DX의 일정한 대역폭, 낮은 지연\n▸ 데이터 검증, 암호화 자동 처리\n\n【오답 체크】\n(A) 공용 인터넷 DataSync — 보안(민감 데이터) 약함\n(C) \n(D) DMS — 데이터베이스 마이그레이션용, 파일 전송 아님\n\n【시험 포인트】\n\"대용량 파일 전송\" = AWS DataSync\n\"민감 데이터\" = AWS Direct Connect(공용 회피)\nDMS: DB 마이그레이션(스키마, 변환)\nDataSync: 파일/블록 저장소(온프레미스 → AWS)"
  },
  {
    "id": 77,
    "question": "회사는 애플리케이션에 대한 실시간 데이터 수집 아키텍처를 구성해야 합니다. 회사에는 데이터가 스트리밍될 때 데이터를 변환하는 프로세스인 API 와 데이터를 위한 스토리지 솔루션이 필요합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EC2 인스턴스를 배포하여 Amazon Kinesis 데이터 스트림으로 데이터를 전송하는 API를 호스팅합니다. Kinesis 데이터 스트림을 데이터 원본으로 사용하는 Amazon Kinesis Data Firehose 전송 스트림을 생성합니다. AWS Lambda 함수를 사용하여 데이터를 변환합니다. Kinesis Data Firehose 전송 스트림을 사용하여 데이터를 Amazon S3 로 보냅니다.",
      "B": "Amazon EC2 인스턴스를 배포하여 AWS Glue에 데이터를 전송하는 API를 호스팅합니다. EC2 인스턴스에서 소스/대상 확인을 중지합니다. AWS Glue를 사용하여 데이터를 변환하고 데이터를 Amazon S3로 보냅니다.",
      "C": "Amazon Kinesis 데이터 스트림으로 데이터를 보내도록 Amazon API Gateway API 를 구성합니다. Kinesis 데이터 스트림을 데이터 원본으로 사용하는 Amazon Kinesis Data Firehose 전송 스트림을 생성합니다. AWS Lambda 함수를 사용하여 데이터를 변환합니다. Kinesis Data Firehose 전송 스트림을 사용하여 데이터를 Amazon S3로 보냅니다.",
      "D": "데이터를 AWS Glue로 보내도록 Amazon API Gateway API를 구성합니다. AWS Lambda 함수를 사용하여 데이터를 변환합니다. AWS Glue 를 사용하여 데이터를 Amazon S3 로 보냅니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ API Gateway — 서버리스 API 엔드포인트, 관리형 스케일링\n▸ Kinesis Data Stream — 실시간 데이터 수집, 지속적 처리 가능\n▸ Kinesis Firehose — 자동 배치, S3 로드, 변환 통합\n▸ Lambda — 스트림 기반 비동기 처리\n\n【정답 포인트】\n▸ 최소 운영 오버헤드 → 서버리스 선택 (API Gateway + Firehose)\n▸ EC2 관리 불필요 → 자동 스케일링, 인스턴스 유지보수 제거\n▸ API + 변환 + 저장 통합 → Firehose의 데이터 변환(Lambda 트리거) + S3 자동 로드\n\n【오답 체크】\n(A) EC2 기반이므로 운영 오버헤드 증가, Firehose 중복 구성\n(B) EC2 호스팅으로 관리 비용 발생, Glue는 배치 처리에 적합\n(D) API Gateway는 Glue 직접 통합 불가, Lambda만으로 대규모 트래픽 관리 복잡\n\n【시험 포인트】\n▸ 패턴: \"최소 운영 오버헤드\" + \"실시간 + 변환 + 저장\" → Firehose 기반 아키텍처\n▸ API Gateway 선택 이유: 관리형, 스케일링 자동, EC2 제거\n▸ Firehose의 강점: 버퍼링, 변환, 배치 로드 원스톱 제공"
  },
  {
    "id": 78,
    "question": "회사는 사용자 트랜잭션 데이터를 Amazon DynamoDB 테이블에 보관해야 합니다. 회사는 데이터를 7년간 보관해야 합니다. 이러한 요구 사항을 충족하는 가장 운영 효율성이 높은 솔루션은 무엇입니까?",
    "options": {
      "A": "DynamoDB 지정 시간 복구를 사용하여 테이블을 지속적으로 백업합니다.",
      "B": "AWS Backup을 사용하여 테이블에 대한 백업 일정 및 보존 정책을 생성합니다.",
      "C": "DynamoDB 콘솔을 사용하여 테이블의 주문형 백업을 생성합니다. 백업을 Amazon S3 버킷에 저장합니다. S3 버킷에 대한 S3 수명 주기 구성을 설정합니다.",
      "D": "AWS Lambda 함수를 호출하는 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다. 테이블을 백업하고 Amazon S3 버킷에 백업을 저장하도록 Lambda 함수를 구성합니다. S3 버킷에 대한 S3 수명 주기 구성을 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Backup — 중앙식 관리, 일정 자동화, 보존 정책 통합\n▸ Point-in-Time Recovery — 복구 시점 보존 기간 제한(35일)\n▸ 운영 효율성 — 자동화, 관리 오버헤드 최소화\n\n【정답 포인트】\n▸ 7년 보관 → 장기 보존 정책 필요 → AWS Backup 일정 + 보존 자동 관리\n▸ \"운영 효율성\" 키워드 → 수동 작업 제거, 중앙 집중식 관리\n▸ Backup은 DynamoDB 네이티브 지원, 정책 기반 자동화 제공\n\n【오답 체크】\n(A) Point-in-Time Recovery는 35일 한계, 7년 보관 불가능\n(C) 수동 백업 생성, S3 수명 주기 운영 오버헤드 높음\n(D) EventBridge + Lambda 커스텀 로직, 일정 관리 및 모니터링 복잡성 증가\n\n【시험 포인트】\n▸ 패턴: \"장기 보존\" + \"운영 효율\" → AWS Backup 중앙 관리\n▸ Point-in-Time Recovery 한계 인식: 35일 제한\n▸ Backup의 가치: 보존 정책 자동화, 멀티 리전 지원 가능"
  },
  {
    "id": 79,
    "question": "회사에서 데이터 저장을 위해 Amazon DynamoDB 테이블을 사용할 계획입니다. 회사는 비용 최적화에 대해 우려하고 있습니다. 대부분의 아침에는 테이블을 사용하지 않습니다. 저녁에는 읽기 및 쓰기 트래픽이 예측할 수 없는 경우가 많습니다. 트래픽 급증이 발생하면 매우 빠르게 발생합니다. 솔루션 아키텍트는 무엇을 추천해야 합니까?",
    "options": {
      "A": "온디맨드 용량 모드에서 DynamoDB 테이블을 생성합니다.",
      "B": "글로벌 보조 인덱스가 있는 DynamoDB 테이블을 생성합니다.",
      "C": "프로비저닝된 용량 및 Auto Scaling을 사용하여 DynamoDB 테이블을 생성합니다.",
      "D": "프로비저닝된 용량 모드에서 DynamoDB 테이블을 생성하고 전역 테이블로 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 온디맨드 모드 — 사용한 만큼만 결제, 즉시 스케일링\n▸ 예측 불가능한 트래픽 — 급증 대응, 사이클 변동성\n▸ 비용 최적화 — 유휴 시간 요금 제거\n\n【정답 포인트】\n▸ \"아침 미사용 + 저녁 예측 불가능\" → 프로비저닝된 용량 비효율\n▸ \"급속 급증\" → Auto Scaling 지연 대응 불가 → 온디맨드 필수\n▸ 온디맨드: 0 사용 시 비용 0, 트래픽 즉시 대응\n\n【오답 체크】\n(B) GSI는 인덱싱 옵션, 용량 모드 선택 아님\n(C) Auto Scaling 설정 지연(수 분), 급속 급증 대응 실패 가능\n(D) 전역 테이블은 다중 리전, 현 요구사항과 무관\n\n【시험 포인트】\n▸ 패턴: \"예측 불가능 + 급증\" → 온디맨드 모드 자동 매핑\n▸ 비용 최적화 조건: 사용률 변동성이 크면 온디맨드가 저렴\n▸ 프로비저닝 모드: 스케일링 지연, 기본 비용 고정 → 부적합"
  },
  {
    "id": 80,
    "question": "한 회사는 최근 애플리케이션 마이그레이션 이니셔티브에 대한 지원을 위해 AWS 관리형 서비스 공급자(MSP) 파트너와 계약을 체결했습니다. 솔루션 설계자는 기존 AWS 계정의 Amazon 머신 이미지(AMI)를 MSP 파트너의 AWS 계정과 공유해야 합니다. AMI는 Amazon Elastic Block Store(Amazon EBS)의 지원을 받으며 AWS Key Management Service(AWS KMS) 고객 관리형 키를 사용하여 EBS 볼륨 스냅샷을 암호화합니다. 솔루션 설계자가 MSP 파트너의 AWS 계정과 AMI 를 공유하는 가장 안전한 방법은 무엇입니까?",
    "options": {
      "A": "암호화된 AMI 및 스냅샷을 공개적으로 사용할 수 있도록 합니다. MSP 파트너의 AWS 계정이 키를 사용할 수 있도록 키 정책을 수정합니다.",
      "B": "AMI 의 launchPermission 속성을 수정합니다. MSP 파트너의 AWS 계정과만 AMI 를 공유하십시오. MSP 파트너의 AWS 계정이 키를 사용할 수 있도록 키 정책을 수정합니다.",
      "C": "AMI 의 launchPermission 속성을 수정합니다. MSP 파트너의 AWS 계정과만 AMI 를 공유하십시오. 암호화를 위해 MSP 파트너가 소유한 새 KMS 키를 신뢰하도록 키 정책을 수정합니다.",
      "D": "원본 계정에서 MSP 파트너의 AWS 계정에 있는 Amazon S3 버킷으로 AMI 를 내보내고 MSP 파트너가 소유한 새 KMS 키로 S3 버킷을 암호화합니다. MSP 파트너의 AWS 계정에서 AMI를 복사하고 시작합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ launchPermission — AMI 공유 권한 제어 메커니즘\n▸ KMS 키 정책 — 크로스 계정 암호화 키 액세스 승인\n▸ 안전한 공유 — 특정 계정 제한, 공개 노출 방지\n\n【정답 포인트】\n▸ \"가장 안전한\" → 공개 공유 제외, 특정 계정만 → launchPermission 제한\n▸ KMS 암호화 유지 → MSP 계정이 키 접근 필요 → 원본 키 정책 수정\n▸ 원본 키 신뢰: 원본 계정이 소유, MSP 계정에 decrypt 권한 부여\n\n【오답 체크】\n(A) 공개 공유는 보안 위험, 크로스 계정 키 접근만으로는 불충분\n(C) MSP 새 키로 전환 시 원본 데이터 접근 불가, 암호화 키 관리 복잡\n(D) S3 내보내기는 과도한 절차, 원본 키 그대로 사용 가능\n\n【시험 포인트】\n▸ 패턴: \"크로스 계정 + 암호화\" → launchPermission + 원본 키 정책 조합\n▸ KMS 권한: 키 정책(account:decrypt), 원본 키 소유권 유지 안전\n▸ 추가 키 생성 회피: 관리 오버헤드, 암호화 체인 복잡화"
  },
  {
    "id": 81,
    "question": "솔루션 설계자는 AWS 에 배포되는 새 애플리케이션을 위한 클라우드 아키텍처를 설계하고 있습니다. 처리할 작업 수에 따라 필요에 따라 애플리케이션 노드를 추가 및 제거하면서 프로세스가 병렬로 실행되어야 합니다. 프로세서 응용 프로그램은 상태 비저장입니다. 솔루션 설계자는 응용 프로그램이 느슨하게 연결되어 있고 작업 항목이 영구적으로 저장되어 있는지 확인해야 합니다. 솔루션 설계자는 어떤 디자인을 사용해야 합니까?",
    "options": {
      "A": "처리해야 하는 작업을 보낼 Amazon SNS 주제를 생성합니다. 프로세서 애플리케이션으로 구성된 Amazon 머신 이미지(AMI)를 생성합니다. AMI 를 사용하는 시작 구성을 생성합니다. 시작 구성을 사용하여 Auto Scaling 그룹을 생성합니다. CPU 사용량에 따라 노드를 추가 및 제거하도록 Auto Scaling 그룹에 대한 조정 정책을 설정합니다.",
      "B": "처리해야 하는 작업을 보관할 Amazon SQS 대기열을 생성합니다. 프로세서 애플리케이션으로 구성된 Amazon 머신 이미지(AMI)를 생성합니다. AMI 를 사용하는 시작 구성을 생성합니다. 시작 구성을 사용하여 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹의 조정 정책을 설정하여 네트워크 사용량에 따라 노드를 추가 및 제거합니다.",
      "C": "처리해야 하는 작업을 보관할 Amazon SQS 대기열을 생성합니다. 프로세서 애플리케이션으로 구성된 Amazon 머신 이미지(AMI)를 생성합니다. AMI 를 사용하는 시작 템플릿을 생성합니다. 시작 템플릿을 사용하여 Auto Scaling 그룹을 생성합니다. SQS 대기열의 항목 수에 따라 노드를 추가 및 제거하도록 Auto Scaling 그룹에 대한 조정 정책을 설정합니다.",
      "D": "처리해야 하는 작업을 보낼 Amazon SNS 주제를 생성합니다. 프로세서 애플리케이션으로 구성된 Amazon 머신 이미지(AMI)를 생성합니다. AMI 를 사용하는 시작 템플릿을 생성합니다. 시작 템플릿을 사용하여 Auto Scaling 그룹을 생성합니다. SNS 주제에 게시된 메시지 수에 따라 노드를 추가 및 제거하도록 Auto Scaling 그룹에 대한 조정 정책을 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 느슨하게 연결 — 메시지 큐 기반 비동기, SNS 구독 복잡도 상승\n▸ 작업 영구 저장 — 내구성 보장, SQS가 메시지 보존 기본\n▸ SQS 메트릭 스케일링 — ApproximateNumberOfMessages 기반 트리거\n▸ 시작 템플릿 — 최신 Auto Scaling 모범 사례\n\n【정답 포인트】\n▸ \"작업 영구 저장\" → SQS FIFO/Standard 선택 (SNS는 팬아웃, 메시지 보관 아님)\n▸ \"작업 수에 따라\" → SQS 큐 길이 메트릭 → CloudWatch 기반 스케일링\n▸ \"느슨하게 연결\" → 큐 중개, 비동기 pull 아키텍처\n▸ 시작 템플릿 선택 → 시작 구성 더 이상 사용 권장 대상\n\n【오답 체크】\n(A) SNS는 팬아웃, 메시지 영구 저장 아님, CPU 메트릭은 큐 크기 반영 안 함\n(B) SQS 사용하나 시작 구성(구식), 네트워크 메트릭은 큐 길이 미반영\n(D) SNS는 느슨한 연결 아님, 게시-구독 복잡도, 메시지 비영구성\n\n【시험 포인트】\n▸ 패턴: \"작업 수 + 느슨한 연결 + 영구 저장\" → SQS + ApproximateNumberOfMessages\n▸ SNS vs SQS: SNS=팬아웃(여러 구독자), SQS=큐(작업 저장소)\n▸ 시작 구성 vs 템플릿: 템플릿이 신 권장, 혼합 인스턴스 타입 미지원"
  },
  {
    "id": 82,
    "question": "회사는 AWS 클라우드에서 웹 애플리케이션을 호스팅합니다. 회사는 AWS Certificate Manager(ACM)로 가져온 인증서를 사용하도록 Elastic Load Balancer 를 구성합니다. 각 인증서가 만료되기 30일 전에 회사 보안팀에 알려야 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 권장해야 합니까?",
    "options": {
      "A": "ACM 에 규칙을 추가하여 인증서가 만료되기 30 일 전부터 매일 Amazon Simple Notification Service(Amazon SNS) 주제에 사용자 지정 메시지를 게시합니다.",
      "B": "30 일 이내에 만료되는 인증서를 확인하는 AWS Config 규칙을 생성합니다. AWS Config가 비준수 리소스를 보고할 때 Amazon Simple Notification Service(Amazon SNS)를 통해 사용자 지정 알림을 호출하도록 Amazon EventBridge(Amazon CloudWatch Events)를 구성합니다.",
      "C": "AWS Trusted Advisor 를 사용하여 30 일 이내에 만료되는 인증서를 확인합니다. 상태 변경 확인에 대한 Trusted Advisor 지표를 기반으로 하는 Amazon CloudWatch 경보를 생성합니다. Amazon Simple Notification Service(Amazon SNS)를 통해 사용자 지정 알림을 보내도록 경보를 구성합니다.",
      "D": "30 일 이내에 만료되는 모든 인증서를 감지하는 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다. AWS Lambda 함수를 호출하도록 규칙을 구성합니다. Amazon Simple Notification Service(Amazon SNS)를 통해 사용자 지정 알림을 보내도록 Lambda 함수를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Config 규칙 — 리소스 준수 지속 모니터링, 자동 평가\n▸ EventBridge — 규칙 기반 이벤트 라우팅, SNS 통합\n▸ 인증서 만료 감지 — CloudWatch 커스텀 메트릭 대안, Config native 지원\n\n【정답 포인트】\n▸ Config 규칙 생성 → acm-certificate-expiration-check 내장 규칙 활용\n▸ 비준수 감지 → EventBridge Config 규칙 변경 이벤트 트리거\n▸ SNS 통지 → Lambda/SNS 체인으로 경고 자동화\n▸ 지속적 모니터링 → Config는 자동 스캔, ACM 별도 규칙 불필요\n\n【오답 체크】\n(A) ACM 자체에 \"규칙\" 추가 기능 없음, 알림은 구독으로만 제한\n(C) Trusted Advisor는 주간 스캔, 실시간 감지 아님, 비용 효율 낮음\n(D) EventBridge는 Config 규칙 변경 감지 아님, 별도 Lambda 스케줄링 필요\n\n【시험 포인트】\n▸ 패턴: \"지속 모니터링 + 준수\" → AWS Config 규칙\n▸ Config 활용: acm-certificate-expiration-check 규칙 → 비준수 이벤트 → EventBridge\n▸ 실시간 감지: Trusted Advisor(주간) vs Config(지속)"
  },
  {
    "id": 83,
    "question": "회사의 동적 웹 사이트는 미국의 온프레미스 서버를 사용하여 호스팅됩니다. 이 회사는 유럽에서 제품을 출시하고 있으며 새로운 유럽 사용자를 위해 사이트 로딩 시간을 최적화하려고 합니다. 사이트의 백엔드는 미국에 있어야 합니다. 제품이 며칠 안에 출시되며 즉각적인 솔루션이 필요합니다. 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "us-east-1에서 Amazon EC2 인스턴스를 시작하고 사이트를 마이그레이션합니다.",
      "B": "웹사이트를 Amazon S3로 이동합니다. 지역 간 교차 지역 복제를 사용합니다.",
      "C": "온프레미스 서버를 가리키는 사용자 지정 오리진과 함께 Amazon CloudFront 를 사용합니다.",
      "D": "온프레미스 서버를 가리키는 Amazon Route 53 지리 근접 라우팅 정책을 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudFront — 글로벌 CDN, 엣지 로케이션 캐싱, 즉시 배포\n▸ 사용자 지정 오리진 — 온프레미스/외부 서버 지원\n▸ 즉시 구현 — 마이그레이션 불필요, 기존 인프라 활용\n\n【정답 포인트】\n▸ \"며칠 안에\" + \"즉시\" → 마이그레이션 불가 → 기존 미국 서버 유지\n▸ \"유럽 로딩 시간\" → 글로벌 엣지 캐싱 필요 → CloudFront\n▸ \"사용자 지정 오리진\" → 온프레미스 서버 지정 가능\n▸ CloudFront 배포 시간: 수십분, 즉시 활성\n\n【오답 체크】\n(A) 마이그레이션 필요, 데이터 복사 시간(TB급 지연), 장시간 구축\n(B) 동적 웹사이트는 S3 부적합, 백엔드 로직 이동 불가\n(D) Route 53 지리 근접은 라우팅만, 캐싱 성능 향상 없음\n\n【시험 포인트】\n▸ 패턴: \"기존 + 즉시 + 지역별 성능\" → CloudFront 사용자 지정 오리진\n▸ CDN 활용: 동적 콘텐츠도 캐싱(TTL 설정), 엣지 압축\n▸ 마이그레이션 회피: 온프레미스 유지, CloudFront 오버레이"
  },
  {
    "id": 84,
    "question": "회사는 기존 3 계층 웹 아키텍처의 비용을 절감하려고 합니다. 웹, 애플리케이션 및 데이터베이스 서버는 개발, 테스트 및 프로덕션 환경을 위한 Amazon EC2 인스턴스에서 실행됩니다. EC2 인스턴스의 평균 CPU 사용률은 사용량이 많은 시간에는 30%이고 사용량이 많지 않은 시간에는 10%입니다. 프로덕션 EC2 인스턴스는 하루 24 시간 실행됩니다. 개발 및 테스트 EC2 인스턴스는 매일 최소 8 시간 동안 실행됩니다. 회사는 개발을 중지하고 사용하지 않을 때 EC2 인스턴스를 테스트하는 자동화를 구현할 계획입니다. 어떤 EC2 인스턴스 구매 솔루션이 가장 비용 효율적으로 회사의 요구 사항을 충족합니까?",
    "options": {
      "A": "프로덕션 EC2 인스턴스에 스팟 인스턴스를 사용합니다. EC2 인스턴스 개발 및 테스트에 예약 인스턴스를 사용합니다.",
      "B": "프로덕션 EC2 인스턴스에 예약 인스턴스를 사용합니다. 개발 및 테스트 EC2 인스턴스에 온디맨드 인스턴스를 사용합니다.",
      "C": "프로덕션 EC2 인스턴스에 스팟 블록을 사용합니다. EC2 인스턴스 개발 및 테스트에 예약 인스턴스를 사용합니다.",
      "D": "프로덕션 EC2 인스턴스에 온디맨드 인스턴스를 사용합니다. 개발 및 테스트 EC2 인스턴스에 스팟 블록을 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 예약 인스턴스 — 1~3년 약정, 24/7 운영, 비용 70% 절감\n▸ 온디맨드 — 시간 단위, 유연성, 스팟보다 비쌈\n▸ 스팟 — 중단 위험, 프로덕션 부적합, 배치 처리 용\n\n【정답 포인트】\n▸ \"프로덕션 24시간\" → 예약 인스턴스 (약정, 저가)\n▸ \"개발/테스트 8시간 + 자동 중지\" → 온디맨드 (자동화 시 과금 중단)\n▸ 스팟 회피: 프로덕션 신뢰성 위험 (2분 경고 후 중단)\n▸ 자동화 중지: 온디맨드는 사용 시간만 청구\n\n【오답 체크】\n(A) 프로덕션에 스팟은 중단 위험, SLA 위반\n(C) 스팟 블록도 중단 가능성, 프로덕션 부적합\n(D) 온디맨드 전체는 비효율, 개발/테스트는 오버프로비저닝\n\n【시험 포인트】\n▸ 패턴: \"24/7 + 고정 부하\" → 예약, \"가변 + 중단 가능\" → 온디맨드\n▸ 자동화 중지 인식: 온디맨드는 중지 시 요금 즉시 중단\n▸ 스팟 한계: 신뢰도 < 99%, 프로덕션 제외"
  },
  {
    "id": 85,
    "question": "회사에 사용자가 웹 인터페이스 또는 모바일 앱을 통해 문서를 업로드하는 프로덕션 웹 애플리케이션이 있습니다. 새로운 규제 요구 사항에 따라. 새 문서는 저장 후에 수정하거나 삭제할 수 없습니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "업로드된 문서를 S3 버전 관리 및 S3 객체 잠금이 활성화된 Amazon S3 버킷에 저장합니다.",
      "B": "업로드된 문서를 Amazon S3 버킷에 저장합니다. 문서를 주기적으로 보관하도록 S3 수명 주기 정책을 구성합니다.",
      "C": "업로드된 문서를 S3 버전 관리가 활성화된 Amazon S3 버킷에 저장합니다. 모든 액세스를 읽기 전용으로 제한하도록 ACL을 구성합니다.",
      "D": "업로드된 문서를 Amazon Elastic File System(Amazon EFS) 볼륨에 저장합니다. 읽기 전용 모드에서 볼륨을 마운트하여 데이터에 액세스합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 객체 잠금 — WORM(Write Once Read Many), 규제 준수\n▸ 버전 관리 — 객체 잠금 선행 조건, 이전 버전 복구 가능\n▸ 수정/삭제 불가 — 잠금 모드(규제/거버넌스)\n\n【정답 포인트】\n▸ \"저장 후 수정/삭제 불가\" → 객체 잠금 필수 (ACL/IAM으로 불가)\n▸ \"규제 요구사항\" → WORM 컴플라이언스 모드\n▸ 버전 관리 선행 필수 → 객체 잠금 기능 활성화 조건\n▸ 규제 증명: 합법적 보유 기간 추가 가능\n\n【오답 체크】\n(B) 수명 주기는 보관만, 수정/삭제 방지 불가\n(C) ACL 읽기 제한은 권한 문제, 소유자/관리자는 여전히 삭제 가능\n(D) EFS 읽기 전용도 관리자 umount 후 수정 가능, 규제 보장 없음\n\n【시험 포인트】\n▸ 패턴: \"규제 + 수정/삭제 방지\" → S3 객체 잠금\n▸ 객체 잠금 조건: 버전 관리 필수, 생성 시 활성화\n▸ 잠금 모드: 규제(삭제 불가, 관리자도 불가) vs 거버넌스(관리자 우회 가능)"
  },
  {
    "id": 86,
    "question": "회사에는 공통 Amazon RDS MySQL 다중 AZ DB 인스턴스에 자주 액세스해야 하는 여러 웹 서버가 있습니다. 회사는 사용자 자격 증명을 자주 교체해야 하는 보안 요구 사항을 충족하면서 웹 서버가 데이터베이스에 연결할 수 있는 안전한 방법을 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS Secrets Manager에 데이터베이스 사용자 자격 증명을 저장합니다. 웹 서버가 AWS Secrets Manager에 액세스할 수 있도록 필요한 IAM 권한을 부여합니다.",
      "B": "AWS Systems Manager OpsCenter에 데이터베이스 사용자 자격 증명을 저장합니다. 웹 서버가 OpsCenter에 액세스할 수 있도록 필요한 IAM 권한을 부여합니다.",
      "C": "안전한 Amazon S3 버킷에 데이터베이스 사용자 자격 증명을 저장합니다. 웹 서버가 자격 증명을 검색하고 데이터베이스에 액세스할 수 있도록 필요한 IAM 권한을 부여합니다.",
      "D": "웹 서버 파일 시스템의 AWS Key Management Service(AWS KMS)로 암호화된 파일에 데이터베이스 사용자 자격 증명을 저장합니다. 웹 서버는 파일을 해독하고 데이터베이스에 액세스할 수 있어야 합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Secrets Manager — 자격증명 관리, 자동 로테이션, 감사 기능\n▸ 자격증명 로테이션 — 정기적 갱신, 자동화 지원\n▸ IAM 정책 — 접근 제어, 최소 권한 원칙\n\n【정답 포인트】\n▸ \"자격증명 자주 교체\" → Secrets Manager 자동 로테이션 (RDS 네이티브 지원)\n▸ \"안전한 방법\" → 암호화 저장, IAM 기반 접근 제어\n▸ Secrets Manager는 RDS 통합 → Lambda 함수로 자동 로테이션 가능\n▸ 감사 추적: CloudTrail 기록, 접근 이력 추적\n\n【오답 체크】\n(B) OpsCenter는 운영 메타데이터 저장, 자격증명 저장소 아님\n(C) S3는 자동 로테이션 기능 없음, 수동 갱신 필요\n(D) 파일 기반 저장은 로테이션 자동화 불가, 인스턴스 재배포 필요\n\n【시험 포인트】\n▸ 패턴: \"자격증명 + 자동 로테이션\" → Secrets Manager 자동 선택\n▸ RDS 통합: Secrets Manager는 RDS 사용자 생성/변경 자동화\n▸ 자동화 조건: Lambda 실행 역할 + RDS 권한"
  },
  {
    "id": 87,
    "question": "회사는 Amazon API Gateway API에 의해 호출되는 AWS Lambda 함수에서 애플리케이션을 호스팅합니다. Lambda 함수는 고객 데이터를 Amazon Aurora MySQL 데이터베이스에 저장합니다. 회사에서 데이터베이스를 업그레이드할 때마다 Lambda 함수는 업그레이드가 완료될 때까지 데이터베이스 연결을 설정하지 못합니다. 그 결과 일부 이벤트에 대한 고객 데이터가 기록되지 않습니다. 솔루션 설계자는 데이터베이스 업그레이드 중에 생성되는 고객 데이터를 저장하는 솔루션을 설계해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Lambda 함수와 데이터베이스 사이에 위치하도록 Amazon RDS 프록시를 프로비저닝합니다. RDS 프록시에 연결하도록 Lambda 함수를 구성합니다.",
      "B": "Lambda 함수의 실행 시간을 최대로 늘립니다. 데이터베이스에 고객 데이터를 저장하는 코드에서 재시도 메커니즘을 만듭니다.",
      "C": "고객 데이터를 Lambda 로컬 스토리지에 유지합니다. 고객 데이터를 데이터베이스에 저장하기 위해 로컬 스토리지를 스캔하도록 새로운 Lambda 함수를 구성합니다.",
      "D": "Amazon Simple Queue Service(Amazon SQS) FIFO 대기열에 고객 데이터를 저장합니다. 대기열을 폴링하고 고객 데이터를 데이터베이스에 저장하는 새 Lambda 함수를 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SQS FIFO — 순서 보장, 메시지 영구 저장, 중복 제거\n▸ 데이터 손실 방지 — 데이터베이스 다운 시에도 큐에 보관\n▸ 비동기 처리 — Lambda는 데이터 저장만, 별도 함수가 DB 쓰기\n\n【정답 포인트】\n▸ \"업그레이드 중 데이터 손실\" → 직접 쓰기 회피 → SQS 큐 중개\n▸ \"고객 데이터 저장\" → SQS FIFO(순서 보장, 중복 제거)\n▸ \"데이터베이스 업그레이드 후\" → 별도 Lambda가 큐 폴링 → 재시도 가능\n▸ 메시지 보존: SQS 보관 기간 (기본 4일), DB 재연결 시간 충분\n\n【오답 체크】\n(A) RDS 프록시는 연결 풀링, 업그레이드 중 연결 불가 여전히 발생\n(B) 재시도는 제한적(5분 타임아웃), 업그레이드 시간 초과 가능\n(C) Lambda 로컬 스토리지(512MB /tmp)는 임시, 함수 재배포 시 삭제\n\n【시험 포인트】\n▸ 패턴: \"다운타임 데이터 손실\" → 비동기 큐 분리 (SQS)\n▸ FIFO 선택: 순서 보장 + 중복 방지 (금융/주문 데이터)\n▸ 아키텍처: API → Lambda (SQS 발행) → 별도 Lambda (폴링 → DB)\n▸ 내구성: SQS 메시지는 3개 AZ 복제"
  },
  {
    "id": 88,
    "question": "설문 조사 회사는 미국 지역에서 수년 동안 데이터를 수집했습니다. 이 회사는 크기가 3TB 이고 계속 증가하는 Amazon S3 버킷에 데이터를 호스팅합니다. 이 회사는 S3 버킷이 있는 유럽 마케팅 회사와 데이터를 공유하기 시작했습니다. 회사는 데이터 전송 비용이 가능한 한 낮게 유지되기를 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "회사의 S3 버킷에서 요청자 지불 기능을 구성합니다.",
      "B": "회사의 S3 버킷에서 마케팅 회사의 S3 버킷 중 하나로 S3 교차 리전 복제를 구성합니다.",
      "C": "마케팅 회사가 회사의 S3 버킷에 액세스할 수 있도록 마케팅 회사에 대한 교차 계정 액세스를 구성합니다.",
      "D": "S3 Intelligent-Tiering 을 사용하도록 회사의 S3 버킷을 구성합니다. S3 버킷을 마케팅 회사의 S3 버킷 중 하나와 동기화합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 요청자 지불 — 다운로드 요청 대상이 데이터 전송 비용 부담\n▸ 데이터 전송 비용 — 리전 간 전송 > 같은 리전 내 전송\n▸ 크로스 리전 복제 — 자동 복제 비용, 이중 데이터 저장\n\n【정답 포인트】\n▸ \"데이터 전송 비용 최소\" → 요청자 지불 (출처 계정이 비용 회피)\n▸ 요청자 지불: 마케팅 회사(다운로더)가 OUT 전송 비용 부담\n▸ 기본 설정: 소유 계정 부담 → 요청자 지불로 전환\n▸ 비용 구조: US→EU 전송료 vs 사본 생성+저장(더 비쌈)\n\n【오답 체크】\n(B) 교차 리전 복제는 자동 전송 비용 + 저장소 2배, 초기 3TB 복제 비용\n(C) 교차 계정 액세스는 비용 구조 미변경, 출처 계정 부담 유지\n(D) Intelligent-Tiering은 저장소 최적화, 전송 비용 미영향\n\n【시험 포인트】\n▸ 패턴: \"데이터 전송 비용 최소\" → 요청자 지불 자동 선택\n▸ 요청자 지불 조건: 요청자는 AWS 계정 필수, 익명 불가\n▸ 비용 계산: OUT 전송료 (리전별 요율)\n▸ 리플리케이션 회피: 복제=비용 최소화 반대 전략"
  },
  {
    "id": 89,
    "question": "회사는 Amazon S3 를 사용하여 기밀 감사 문서를 저장합니다. S3 버킷은 버킷 정책을 사용하여 최소 권한 원칙에 따라 감사 팀 IAM 사용자 자격 증명에 대한 액세스를 제한합니다. 회사 관리자는 S3 버킷에서 실수로 문서가 삭제되는 것을 걱정하고 더 안전한 솔루션을 원합니다. 솔루션 설계자는 감사 문서를 보호하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "S3 버킷에서 버전 관리 및 MFA 삭제 기능을 활성화합니다.",
      "B": "각 감사 팀 IAM 사용자 계정의 IAM 사용자 자격 증명에 대해 다단계 인증(MFA)을 활성화합니다.",
      "C": "감사 날짜 동안 s3:DeleteObject 작업을 거부하도록 감사 팀의 IAM 사용자 계정에 S3 수명 주기 정책을 추가합니다.",
      "D": "AWS Key Management Service(AWS KMS)를 사용하여 S3 버킷을 암호화하고 감사 팀 IAM 사용자 계정이 KMS 키에 액세스하지 못하도록 제한합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ MFA 삭제 — 루트 계정 + MFA 코드 필요, DeleteObject 방지\n▸ 버전 관리 — MFA 삭제 선행 조건, 삭제 마크만 생성\n▸ 실수 삭제 방지 — 기술적 차단, 정책 기반 아님\n\n【정답 포인트】\n▸ \"실수로 삭제\" → 기술적 보호 필요 (정책만으로 부족)\n▸ MFA 삭제: 루트 자격증명 + MFA 장치 필수 → 감압팀 사용자 삭제 불가능\n▸ 버전 관리 활성화 → DeleteObject는 삭제 마크만 추가, 이전 버전 복구 가능\n▸ IAM 사용자는 MFA 삭제 권한 없음(루트만 가능)\n\n【오답 체크】\n(B) IAM 사용자 MFA는 콘솔 로그인만, DeleteObject 권한 여부와 무관\n(C) 수명 주기는 자동 삭제, 의도적 보호 아님, 감사 날짜 제한 불가능\n(D) KMS 암호화는 접근 제어, 실수 삭제 방지 불가\n\n【시험 포인트】\n▸ 패턴: \"실수 삭제 방지\" → 버전 관리 + MFA 삭제 조합\n▸ MFA 삭제 특수성: 루트 계정만 설정/해제 가능, IAM 불가\n▸ 버전 관리: DELETE는 마크만, 원본 유지 → 복구 가능\n▸ 감압팀 사용자로는 실제 삭제 불가 (MFA 없음)"
  },
  {
    "id": 90,
    "question": "회사에서 SQL 데이터베이스를 사용하여 공개적으로 액세스할 수 있는 영화 데이터를 저장하고 있습니다. 데이터베이스는 Amazon RDS 단일 AZ DB 인스턴스에서 실행됩니다. 스크립트는 데이터베이스에 추가된 새로운 영화의 수를 기록하기 위해 매일 임의의 간격으로 쿼리를 실행합니다. 스크립트는 업무 시간 동안의 최종 합계를 보고해야 합니다. 회사의 개발 팀은 스크립트가 실행 중일 때 데이터베이스 성능이 개발 작업에 부적절하다는 것을 알아차렸습니다. 솔루션 설계자는 이 문제를 해결하기 위한 솔루션을 권장해야 합니다. 최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "DB 인스턴스를 다중 AZ 배포로 수정합니다.",
      "B": "데이터베이스의 읽기 전용 복제본을 생성합니다. 읽기 전용 복제본만 쿼리하도록 스크립트를 구성합니다.",
      "C": "개발 팀에게 매일 일과가 끝날 때 데이터베이스의 항목을 수동으로 내보내도록 지시합니다.",
      "D": "Amazon ElastiCache 를 사용하여 스크립트가 데이터베이스에 대해 실행하는 일반적인 쿼리를 캐시합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 읽기 전용 복제본 — 쓰기 분리, 읽기 부하 감소, 독립적 쿼리\n▸ 성능 격리 — 스크립트 쿼리와 개발 작업 분리\n▸ 최소 운영 오버헤드 — 관리형 복제, 자동 동기화\n\n【정답 포인트】\n▸ \"스크립트 실행 중 성능 저하\" → 읽기 부하 분산 필요\n▸ 읽기 전용 복제본: 스크립트는 READ만, 프로덕션은 쓰기 전용\n▸ 자동 동기화: Binlog 기반 비동기 복제, 지연 < 1초\n▸ 독립적 스케일: 복제본 인스턴스 크기 조정 가능, 원본 미영향\n\n【오답 체크】\n(A) 다중 AZ는 가용성(장애조치), 읽기 부하 분산 아님\n(C) 수동 내보내기는 자동화 없음, 운영 오버헤드 증가\n(D) ElastiCache는 캐싱, 읽기 부하 분산 아님, 데이터 동기화 복잡\n\n【시험 포인트】\n▸ 패턴: \"특정 쿼리 + 읽기 부하\" → 읽기 전용 복제본\n▸ 복제본 활용: 분석, 보고(스크립트), 개발 환경에 적합\n▸ 성능 격리: 복제본과 원본 독립적 리소스 사용\n▸ 최소 오버헤드: AWS 관리형 복제, 운영 작업 최소"
  },
  {
    "id": 91,
    "question": "회사에 VPC 의 Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있습니다. 애플리케이션 중 하나는 Amazon S3 API 를 호출하여 객체를 저장하고 읽어야 합니다. 회사의 보안 규정에 따라 응용 프로그램의 트래픽은 인터넷을 통해 이동할 수 없습니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "S3 게이트웨이 엔드포인트를 구성합니다.",
      "B": "프라이빗 서브넷에 S3 버킷을 생성합니다.",
      "C": "EC2 인스턴스와 동일한 AWS 리전에 S3 버킷을 생성합니다.",
      "D": "EC2 인스턴스와 동일한 서브넷에 NAT 게이트웨이를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 게이트웨이 엔드포인트 — VPC 내부 S3 접근, 퍼블릭 IP 불필요\n▸ PrivateLink 아님 — 게이트웨이만 인터넷 게이트웨이 우회\n▸ 인터넷 경유 방지 — 라우팅 테이블 설정\n\n【정답 포인트】\n▸ \"인터넷 경유 불가\" → VPC 엔드포인트 필수\n▸ S3 게이트웨이 엔드포인트: 라우트 테이블 경로, 직접 연결\n▸ NAT/인터넷 게이트웨이 제거: 퍼블릭 IP/라우팅 불필요\n▸ 무료 제공: 데이터 전송 비용만\n\n【오답 체크】\n(B) S3는 리전별 버킷, 프라이빗 서브넷은 서브넷 개념 미적용\n(C) 리전 동일도 인터넷 경유, 엔드포인트 없으면 퍼블릭 라우팅\n(D) NAT 게이트웨이는 인터넷 게이트웨이 필요, 인터넷 경유 여전함\n\n【시험 포인트】\n▸ 패턴: \"VPC + S3 + 인터넷 제한\" → S3 게이트웨이 엔드포인트\n▸ VPC 엔드포인트 종류: 게이트웨이(S3,DynamoDB) vs PrivateLink(기타)\n▸ 라우팅: 라우트 테이블에 엔드포인트 경로 추가 (0.0.0.0/0 우선도)\n▸ 라우팅 우선도: 더 구체적 경로(S3 엔드포인트) > 기본 경로"
  },
  {
    "id": 92,
    "question": "회사에서 Amazon S3 버킷에 민감한 사용자 정보를 저장하고 있습니다. 회사는 VPC 내부의 Amazon EC2 인스턴스에서 실행되는 애플리케이션 계층에서 이 버킷에 대한 보안 액세스를 제공하려고 합니다. 솔루션 설계자는 이를 달성하기 위해 어떤 단계 조합을 취해야 합니까? (2 개를 선택하세요.)",
    "options": {
      "A": "VPC 내에서 Amazon S3용 VPC 게이트웨이 엔드포인트를 구성합니다.",
      "B": "S3 버킷의 객체를 퍼블릭으로 만들기 위한 버킷 정책을 생성합니다.",
      "C": "VPC 에서 실행되는 애플리케이션 계층으로만 액세스를 제한하는 버킷 정책을 생성합니다.",
      "D": "S3 액세스 정책으로 IAM 사용자를 생성하고 IAM 자격 증명을 EC2 인스턴스에 복사합니다.",
      "E": "NAT 인스턴스를 생성하고 EC2 인스턴스가 NAT 인스턴스를 사용하여 S3 버킷에 액세스하도록 합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ S3 게이트웨이 엔드포인트 — VPC 내부 S3 경로, 인터넷 우회\n▸ 버킷 정책 — 엔드포인트 소스 제한, VPC/엔드포인트 ID 기반\n▸ 보안 액세스 — 네트워크 + 자격증명 이중 제어\n\n【정답 포인트】\n▸ \"VPC 애플리케이션만 액세스\" → A(네트워크 경로) + C(소스 제한)\n▸ 게이트웨이 엔드포인트: VPC 라우팅만, 인터넷 IP 불필요\n▸ 버킷 정책: aws:sourceVpce 조건 추가 → 엔드포인트 경유만 허용\n▸ 결과: VPC 외부 + 엔드포인트 미사용 = 403 금지\n\n【오답 체크】\n(B) 퍼블릭은 민감한 정보 정책 위반, \"보안\" 반대\n(D) 자격증명 복사는 보안 위험, IAM 역할 권장 (자격증명 저장 회피)\n(E) NAT는 인터넷 게이트웨이 필요, 인터넷 경유 여전함, 엔드포인트 우회\n\n【시험 포인트】\n▸ 패턴: \"VPC만 + 민감 정보\" → 엔드포인트(경로) + 정책(소스)\n▸ 버킷 정책 조건: aws:sourceVpce=\"vpce-xxx\" 또는 aws:SourceVpc=\"vpc-xxx\"\n▸ 엔드포인트 정책: VPC 엔드포인트 자체에도 정책 설정 가능(추가 제어)\n▸ 자격증명 관리: EC2 IAM 역할 권장 (임시 자격증명, 회전 자동)"
  },
  {
    "id": 93,
    "question": "회사는 MySQL 데이터베이스로 구동되는 온프레미스 애플리케이션을 실행합니다. 이 회사는 애플리케이션의 탄력성과 가용성을 높이기 위해 애플리케이션을 AWS 로 마이그레이션하고 있습니다. 현재 아키텍처는 정상 작동 시간 동안 데이터베이스에서 많은 읽기 활동을 보여줍니다. 회사의 개발 팀은 4 시간마다 프로덕션 데이터베이스의 전체 내보내기를 가져와 준비 환경의 데이터베이스를 채웁니다. 이 기간 동안 사용자는 허용할 수 없는 애플리케이션 대기 시간을 경험합니다. 개발 팀은 절차가 완료될 때까지 스테이징 환경을 사용할 수 없습니다. 솔루션 설계자는 애플리케이션 지연 문제를 완화하는 대체 아키텍처를 권장해야 합니다. 또한 대체 아키텍처는 개발 팀이 지연 없이 스테이징 환경을 계속 사용할 수 있는 능력을 제공해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "프로덕션용 다중 AZ Aurora 복제본과 함께 Amazon Aurora MySQL 을 사용합니다. mysqldump 유틸리티를 사용하는 백업 및 복원 프로세스를 구현하여 스테이징 데이터베이스를 채웁니다.",
      "B": "프로덕션용 다중 AZ Aurora 복제본과 함께 Amazon Aurora MySQL 을 사용합니다. 데이터베이스 복제를 사용하여 요청 시 스테이징 데이터베이스를 생성합니다.",
      "C": "다중 AZ 배포 및 프로덕션용 읽기 전용 복제본과 함께 MySQL 용 Amazon RDS 를 사용합니다. 스테이징 데이터베이스에 대해 대기 인스턴스를 사용합니다.",
      "D": "다중 AZ 배포 및 프로덕션용 읽기 전용 복제본과 함께 MySQL 용 Amazon RDS 를 사용합니다. mysqldump 유틸리티를 사용하는 백업 및 복원 프로세스를 구현하여 스테이징 데이터베이스를 채웁니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Aurora 데이터베이스 복제 — Zero downtime clone, 스냅샷 기반\n▸ 스테이징 분리 — 스냅샷 복제로 독립적 환경, 프로덕션 영향 없음\n▸ mysqldump 회피 — 4시간 배치 로드 시간 제거\n\n【정답 포인트】\n▸ \"4시간마다 지연\" → 배치 내보내기 회피 필수\n▸ Aurora 복제: 기존 스냅샷에서 클론 생성 가능, 쓰기 잠금 없음\n▸ \"요청 시\" → 스테이징이 필요할 때만 클론 → 개발팀 즉시 이용 가능\n▸ 프로덕션 격리: 클론은 독립적, 스테이징 수정도 프로덕션 미영향\n\n【오답 체크】\n(A) mysqldump는 여전히 4시간 배치, 지연 문제 미해결\n(C) 대기 인스턴스는 장애조치용, 스테이징 클론 아님\n(D) RDS는 Aurora 복제 기능 제한, mysqldump 여전히 필요\n\n【시험 포인트】\n▸ 패턴: \"배치 부하 + 스테이징\" → Aurora 클론(스냅샷)\n▸ Aurora 강점: 클론 생성 초 단위, COW(Copy-on-Write) 기술\n▸ RDS 한계: 스냅샷 복원 시간(GB당 분단위), 배치 회피 불가\n▸ 운영 개선: 개발팀이 자동/자체 스테이징 생성 가능"
  },
  {
    "id": 94,
    "question": "한 회사에서 사용자가 Amazon S3 에 작은 파일을 업로드하는 애플리케이션을 설계하고 있습니다. 사용자가 파일을 업로드한 후 데이터를 변환하고 나중에 분석할 수 있도록 데이터를 JSON 형식으로 저장하려면 파일에 일회성 단순 처리가 필요합니다. 각 파일은 업로드 후 최대한 빨리 처리해야 합니다. 수요는 다양할 것입니다. 어떤 날에는 사용자가 많은 수의 파일을 업로드합니다. 다른 날에는 사용자가 몇 개의 파일을 업로드하거나 파일을 업로드하지 않습니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 에서 텍스트 파일을 읽도록 Amazon EMR 을 구성합니다. 처리 스크립트를 실행하여 데이터를 변환합니다. 결과 JSON 파일을 Amazon Aurora DB 클러스터에 저장합니다.",
      "B": "Amazon SQS(Amazon Simple Queue Service) 대기열에 이벤트 알림을 보내도록 Amazon S3를 구성합니다. Amazon EC2 인스턴스를 사용하여 대기열에서 읽고 데이터를 처리합니다. 결과 JSON 파일을 Amazon DynamoDB에 저장합니다.",
      "C": "이벤트 알림을 Amazon Simple Queue Service(Amazon SQS) 대기열로 보내도록 Amazon S3 를 구성합니다. AWS Lambda 함수를 사용하여 대기열에서 읽고 데이터를 처리합니다. 결과 JSON 파일을 Amazon DynamoDB에 저장합니다.",
      "D": "새 파일이 업로드될 때 Amazon Kinesis Data Streams 에 이벤트를 보내도록 Amazon EventBridge(Amazon CloudWatch Events)를 구성합니다. AWS Lambda 함수를 사용하여 스트림에서 이벤트를 소비하고 데이터를 처리합니다. 결과 JSON 파일을 Amazon Aurora DB 클러스터에 저장합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 이벤트 + SQS — 파일 업로드 감지, 큐 기반 처리\n▸ Lambda — 서버리스, 자동 스케일(동시성), 기본 시작 < 1초\n▸ DynamoDB — 즉시 쓰기, 구조화 데이터 저장, NoSQL\n\n【정답 포인트】\n▸ \"최소 운영 오버헤드\" → 서버리스 선택 (Lambda)\n▸ \"최대한 빨리\" → 이벤트 기반(SQS 알림) + Lambda 즉시 처리\n▸ \"다양한 수요\" → Lambda 자동 스케일(동시성), 용량 수동 조정 없음\n▸ SQS 선택: S3 이벤트 알림 네이티브 지원, 메시지 내구성\n\n【오답 체크】\n(A) EMR은 배치 클러스터, \"최대한 빨리\" 미충족, 운영 오버헤드 높음\n(B) EC2 폴링은 항상 실행 비용, 다양한 수요 대응 비효율\n(D) Kinesis는 스트리밍 처리, 파일 업로드 이벤트 적합 아님\n\n【시험 포인트】\n▸ 패턴: \"이벤트 + 즉시 + 가변 부하\" → S3 이벤트 + SQS + Lambda\n▸ Lambda 동시성: 기본 1000, 자동 스케일링, 비용 = 실행 시간만\n▸ DynamoDB 선택: JSON 저장, 즉시 쓰기, 확장 자동\n▸ 아키텍처: S3 PUT → SQS 메시지 → Lambda 트리거 → DynamoDB 저장"
  },
  {
    "id": 95,
    "question": "응용 프로그램을 사용하면 회사 본사의 사용자가 제품 데이터에 액세스할 수 있습니다. 제품 데이터는 Amazon RDS MySQL DB 인스턴스에 저장됩니다. 운영 팀은 애플리케이션 성능 저하를 격리하고 쓰기 트래픽에서 읽기 트래픽을 분리하려고 합니다. 솔루션 설계자는 애플리케이션의 성능을 신속하게 최적화해야 합니다. 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "기존 데이터베이스를 다중 AZ 배포로 변경합니다. 기본 가용 영역에서 읽기 요청을 제공합니다.",
      "B": "기존 데이터베이스를 다중 AZ 배포로 변경합니다. 보조 가용 영역에서 읽기 요청을 제공합니다.",
      "C": "데이터베이스에 대한 읽기 전용 복제본을 생성합니다. 컴퓨팅 및 스토리지 리소스의 절반을 원본 데이터베이스로 사용하여 읽기 전용 복제본을 구성합니다.",
      "D": "데이터베이스에 대한 읽기 전용 복제본을 생성합니다. 원본 데이터베이스와 동일한 컴퓨팅 및 스토리지 리소스로 읽기 전용 복제본을 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 읽기 전용 복제본 — 쓰기/읽기 분리, 독립적 스케일\n▸ 성능 격리 — 원본(쓰기) vs 복제본(읽기) 리소스 분리\n▸ 동일 스펙 — 읽기 부하 완전 흡수, 성능 균형\n\n【정답 포인트】\n▸ \"성능 저하 + 쓰기/읽기 분리\" → 읽기 전용 복제본 필수\n▸ 다중 AZ는 가용성(장애조치), 읽기 분산 아님 → 제외\n▸ \"동일 스펙 복제본\" → 읽기 부하 전체 이관, 성능 격리 완전\n▸ \"절반 스펙\": 읽기 부하 일부만 흡수, 원본 부하 여전함\n\n【오답 체크】\n(A) 다중 AZ는 기본에서만 읽기, 쓰기/읽기 분리 안 됨\n(B) 다중 AZ 보조는 동기 대기, 읽기 성능 보장 없음\n(C) 절반 스펙은 부분 분산, 경합 여전함, 성능 저하 미해결\n\n【시험 포인트】\n▸ 패턴: \"성능 격리 + 즉시\" → 읽기 복제본(동일 스펙)\n▸ 복제본 크기: 부하 흡수 > 작은 스펙 권장 (부하 예측 기반)\n▸ 다중 AZ vs 복제본: 가용성 ≠ 성능 분산\n▸ 쓰기/읽기 분리: 라우팅 로직(애플리케이션/미들웨어) 필요"
  },
  {
    "id": 96,
    "question": "Amazon EC2 관리자는 여러 사용자가 포함된 IAM 그룹과 연결된 다음 정책을 생성했습니다. 이 정책의 효과는 무엇입니까?",
    "options": {
      "A": "사용자는 us-east-1 을 제외한 모든 AWS 리전에서 EC2 인스턴스를 종료할 수 있습니다.",
      "B": "사용자는 us-east-1 리전에서 IP 주소가 10.100.100.1 인 EC2 인스턴스를 종료할 수 있습니다.",
      "C": "사용자는 사용자의 소스 IP 가 10.100.100.254 일 때 us-east-1 리전에서 EC2 인스턴스를 종료할 수 있습니다.",
      "D": "사용자의 소스 IP 가 10.100.100.254 인 경우 사용자는 us-east-1 리전에서 EC2 인스턴스를 종료할 수 없습니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ IAM 정책 조건(Condition) — 조건문이 모두 참일 때만 작업 허용\n▸ StringEquals — 정확한 문자열 일치 검증\n▸ SourceIp — 요청자의 IP 주소를 조건으로 검증\n\n【정답 포인트】\n▸ 정책 구조 → Allow, Action(ec2:TerminateInstances), Resource(*), Condition 포함\n▸ Condition 분석 → aws:StringEquals(aws:SourceIp: 10.100.100.254) AND aws:StringEquals(aws:RequestedRegion: us-east-1)\n▸ 로직 → 조건 모두 충족 시에만 종료 가능\n\n【오답 체크】\n(A) us-east-1 제외는 NotAction이나 DenyStatement 필요 /\n(B) IP가 인스턴스 ID가 아님 /\n(D) 부정 표현(cannot) — 정책 Allow에서 직접 거부 아님\n\n【시험 포인트】\n조건부 정책 → AND 연산자로 모든 조건 동시 충족 / IP + Region 이중 제약 → 실무 보안 모범사례"
  },
  {
    "id": 97,
    "question": "회사에는 Microsoft Windows 공유 파일 저장소가 필요한 온프레미스에서 실행되는 대규모 Microsoft SharePoint 배포가 있습니다. 회사는 이 워크로드를 AWS 클라우드로 마이그레이션하기를 원하며 다양한 스토리지 옵션을 고려하고 있습니다. 저장소 솔루션은 액세스 제어를 위해 고가용성 및 Active Directory와 통합되어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EFS 스토리지를 구성하고 인증을 위해 Active Directory 도메인을 설정합니다.",
      "B": "두 가용 영역의 AWS Storage Gateway 파일 게이트웨이에 SMB 파일 공유를 생성합니다.",
      "C": "Amazon S3 버킷을 생성하고 볼륨으로 탑재하도록 Microsoft Windows Server 를 구성합니다.",
      "D": "AWS 에서 Windows 파일 서버용 Amazon FSx 파일 시스템을 생성하고 인증을 위해 Active Directory 도메인을 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Amazon FSx for Windows — AWS 관리형 Windows 파일 서버, SMB 프로토콜, AD 통합\n▸ Active Directory — Windows 도메인 인증 및 액세스 제어\n▸ SharePoint — Windows 기반 엔터프라이즈 콘텐츠 관리\n\n【정답 포인트】\n▸ Windows 필수 요구사항 → SMB 프로토콜 지원 필수\n▸ AD 통합 → FSx for Windows 표준 기능, EFS는 NFS 기반으로 Windows AD 미지원\n▸ 고가용성 → FSx는 다중 AZ 자동 복제, 관리형 서비스\n\n【오답 체크】\n(A) EFS는 NFS 기반, Windows AD 통합 불가 /\n(B) Storage Gateway는 온프레미스 캐싱 솔루션 /\n(C) S3는 객체 스토리지, 파일시스템 마운트 불가\n\n【시험 포인트】\nWindows 워크로드 + AD 필수 → FSx for Windows 자동 선택 / EFS vs FSx — Linux(EFS) vs Windows(FSx)"
  },
  {
    "id": 98,
    "question": "이미지 처리 회사에는 사용자가 이미지를 업로드하는 데 사용하는 웹 응용 프로그램이 있습니다. 애플리케이션은 이미지를 Amazon S3 버킷에 업로드합니다. 회사는 객체 생성 이벤트를 Amazon Simple Queue Service(Amazon SQS) 표준 대기열에 게시하도록 S3 이벤트 알림을 설정했습니다. SQS 대기열은 이미지를 처리하고 결과를 이메일을 통해 사용자에게 보내는 AWS Lambda 함수의 이벤트 소스 역할을 합니다. 사용자는 업로드된 모든 이미지에 대해 여러 이메일 메시지를 수신하고 있다고 보고합니다. 솔루션 설계자는 SQS 메시지가 Lambda 함수를 두 번 이상 호출하여 여러 이메일 메시지를 생성한다고 판단합니다. 솔루션 설계자는 이 문제를 최소한의 운영 오버헤드로 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "ReceiveMessage 대기 시간을 30초로 늘려 SQS 대기열에서 긴 폴링을 설정합니다.",
      "B": "SQS 표준 대기열을 SQS FIFO 대기열로 변경합니다. 메시지 중복 제거 ID 를 사용하여 중복 메시지를 버리십시오.",
      "C": "SQS 대기열의 가시성 제한 시간을 함수 제한 시간과 일괄 처리 창 제한 시간의 합계보다 큰 값으로 늘립니다.",
      "D": "처리 전에 메시지를 읽은 직후 SQS 대기열에서 각 메시지를 삭제하도록 Lambda 함수를 수정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 가시성 제한 시간(Visibility Timeout) — 메시지 처리 중 다른 소비자 접근 차단\n▸ SQS 표준 대기열 — at-least-once 배치, 중복 가능\n▸ Lambda 배치 윈도우 — 메시지 수집 대기 시간\n\n【정답 포인트】\n▸ 문제 원인 → Visibility Timeout 만료 전 Lambda 처리 미완료 → 메시지 재표시 → 중복 실행\n▸ 해결책 → Visibility Timeout = Lambda 함수 제한시간 + 배치 윈도우 시간\n▸ 최소 오버헤드 → 설정만 조정, 코드/아키텍처 변경 불필요\n\n【오답 체크】\n(A) Long Polling은 빈 응답 지연만 감소 /\n(B) FIFO는 순서보장만 하고 중복제거는 충분하지 않음 /\n(D) 수동 삭제는 이미 Lambda가 처리(DeleteMessage 자동)\n\n【시험 포인트】\nSQS 중복 메시지 → Visibility Timeout 우선 검토 / Lambda + SQS 통합 → 타임아웃 값 동기화 필수"
  },
  {
    "id": 99,
    "question": "회사는 온프레미스 데이터 센터에서 호스팅되는 게임 애플리케이션을 위한 공유 스토리지 솔루션을 구현하고 있습니다. 회사는 Lustre 클라이언트를 사용하여 데이터에 액세스할 수 있는 기능이 필요합니다. 솔루션은 완전히 관리되어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS Storage Gateway 파일 게이트웨이를 생성합니다. 필요한 클라이언트 프로토콜을 사용하는 파일 공유를 만듭니다. 응용 프로그램 서버를 파일 공유에 연결합니다.",
      "B": "Amazon EC2 Windows 인스턴스를 생성합니다. 인스턴스에 Windows 파일 공유 역할을 설치하고 구성합니다. 응용 프로그램 서버를 파일 공유에 연결합니다.",
      "C": "Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성하고 Lustre를 지원하도록 구성합니다. 파일 시스템을 원본 서버에 연결합니다. 응용 프로그램 서버를 파일 시스템에 연결합니다.",
      "D": "Lustre 파일 시스템용 Amazon FSx 를 생성합니다. 파일 시스템을 원본 서버에 연결합니다. 응용 프로그램 서버를 파일 시스템에 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Amazon FSx for Lustre — AWS 관리형 Lustre, HPC/게임 최적화\n▸ Lustre 프로토콜 — 고성능 병렬 파일 시스템\n▸ 완전 관리형 — 패치, 스케일링, 백업 자동 처리\n\n【정답 포인트】\n▸ Lustre 필수 → FSx for Lustre 유일한 매니지드 선택지\n▸ 온프레미스 연결 → AWS Direct Connect 또는 VPN으로 FSx 접근\n▸ 관리형 요구 → EC2 자체 구축 배제, Storage Gateway는 Lustre 미지원\n\n【오답 체크】\n(A) Storage Gateway는 NFS/SMB/iSCSI만 지원, Lustre 불가 /\n(B) EC2 자체 구축은 운영 복잡도 증가 /\n(C) EFS는 NFS 기반, Lustre 미지원\n\n【시험 포인트】\nLustre 프로토콜 지정 → FSx for Lustre 즉시 선택 / 고성능 파일시스템 → FSx 계열 검토"
  },
  {
    "id": 100,
    "question": "회사의 컨테이너화된 애플리케이션은 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 다른 비즈니스 애플리케이션과 통신하기 전에 보안 인증서를 다운로드해야 합니다. 회사는 거의 실시간으로 인증서를 암호화하고 해독할 수 있는 매우 안전한 솔루션을 원합니다. 또한 솔루션은 데이터가 암호화된 후 고가용성 스토리지에 데이터를 저장해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "암호화된 인증서에 대한 AWS Secrets Manager 암호를 생성합니다. 필요에 따라 인증서를 수동으로 업데이트합니다. 세분화된 IAM 액세스를 사용하여 데이터에 대한 액세스를 제어합니다.",
      "B": "Python 암호화 라이브러리를 사용하여 암호화 작업을 수신하고 수행하는 AWS Lambda 함수를 생성합니다. 함수를 Amazon S3 버킷에 저장합니다.",
      "C": "AWS Key Management Service(AWS KMS) 고객 관리형 키를 생성합니다. EC2 역할이 암호화 작업에 KMS 키를 사용하도록 허용합니다. 암호화된 데이터를 Amazon S3 에 저장합니다.",
      "D": "AWS Key Management Service(AWS KMS) 고객 관리형 키를 생성합니다. EC2 역할이 암호화 작업에 KMS 키를 사용하도록 허용합니다. 암호화된 데이터를 Amazon Elastic Block Store(Amazon EBS) 볼륨에 저장합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS KMS — HSM 기반 키 관리, 감사 로깅, 엔터프라이즈급 보안\n▸ 고가용성 스토리지 — S3(자동 복제, 11개 9 내구성) vs EBS(인스턴스 종속)\n▸ 실시간 암호화 — KMS Encrypt/Decrypt API 호출\n\n【정답 포인트】\n▸ 보안 요구사항 → KMS 고객 관리형 키 필수\n▸ 실시간 처리 → KMS API 호출로 메모리상 암호화\n▸ 고가용성 저장소 → S3 선택(EBS는 단일 인스턴스 종속)\n▸ 최소 오버헤드 → KMS 자동 감사, IAM 역할 기반 접근제어\n\n【오답 체크】\n(A) Secrets Manager는 암호화 기능 미포함 /\n(B) Lambda 사용은 추가 개발 복잡도 /\n(D) EBS는 고가용성 미충족, 볼륨 손실 시 데이터 손실\n\n【시험 포인트】\nKMS + S3 조합 → 보안 + 고가용성 표준패턴 / EBS는 일시적 블록스토리지"
  },
  {
    "id": 101,
    "question": "솔루션 설계자는 퍼블릭 및 프라이빗 서브넷이 있는 VPC 를 설계하고 있습니다. VPC 와 서브넷은 IPv4 CIDR 블록을 사용합니다. 고가용성을 위해 세 개의 가용 영역(AZ) 각각에 하나의 퍼블릭 서브넷과 하나의 프라이빗 서브넷이 있습니다. 인터넷 게이트웨이는 퍼블릭 서브넷에 대한 인터넷 액세스를 제공하는 데 사용됩니다. 프라이빗 서브넷은 Amazon EC2 인스턴스가 소프트웨어 업데이트를 다운로드할 수 있도록 인터넷에 액세스할 수 있어야 합니다. 솔루션 설계자는 프라이빗 서브넷에 대한 인터넷 액세스를 활성화하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "각 AZ 의 각 퍼블릭 서브넷에 대해 하나씩 3 개의 NAT 게이트웨이를 생성합니다. 비 VPC 트래픽을 해당 AZ 의 NAT 게이트웨이로 전달하는 각 AZ 에 대한 프라이빗 라우팅 테이블을 생성합니다.",
      "B": "각 AZ 의 프라이빗 서브넷마다 하나씩 3 개의 NAT 인스턴스를 생성합니다. 비 VPC 트래픽을 해당 AZ 의 NAT 인스턴스로 전달하는 각 AZ 에 대한 프라이빗 라우팅 테이블을 생성합니다.",
      "C": "프라이빗 서브넷 중 하나에 두 번째 인터넷 게이트웨이를 생성합니다. VPC 가 아닌 트래픽을 프라이빗 인터넷 게이트웨이로 전달하는 프라이빗 서브넷의 라우팅 테이블을 업데이트합니다.",
      "D": "퍼블릭 서브넷 중 하나에 송신 전용 인터넷 게이트웨이를 생성합니다. VPC 가 아닌 트래픽을 외부 전용 인터넷 게이트웨이로 전달하는 프라이빗 서브넷에 대한 라우팅 테이블을 업데이트합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ NAT 게이트웨이 — 완전 관리형, 고가용성, 각 AZ마다 하나 권장\n▸ NAT 인스턴스 — 자체 관리, 단일 장애점 위험\n▸ AZ 격리 원칙 — 장애 영향 최소화를 위해 각 AZ에 독립적 리소스\n\n【정답 포인트】\n▸ 3개 AZ 고가용성 요구 → 각 AZ마다 NAT 게이트웨이 1개\n▸ 각 프라이빗 라우팅테이블 → 0.0.0.0/0을 해당 AZ NAT로 지정\n▸ 교차 AZ 라우팅 회피 → 같은 AZ 내 NAT 사용(데이터 전송료 절감)\n▸ 완전 관리형 → NAT 게이트웨이는 AWS 관리, 운영 오버헤드 없음\n\n【오답 체크】\n(B) NAT 인스턴스는 운영 복잡도 증가, 자동 장애조치 없음 /\n(C) 인터넷 게이트웨이는 수신 트래픽만 처리 /\n(D) 아웃바운드 IGW 존재하지 않음\n\n【시험 포인트】\nPrivate Subnet Internet Access → NAT 게이트웨이(관리형) / 3 AZ → 3 NAT 게이트웨이"
  },
  {
    "id": 102,
    "question": "회사에서 온프레미스 데이터 센터를 AWS 로 마이그레이션하려고 합니다. 데이터 센터는 NFS 기반 파일 시스템에 데이터를 저장하는 SFTP 서버를 호스팅합니다. 서버에는 전송해야 하는 200GB 의 데이터가 있습니다. 서버는 Amazon Elastic File System(Amazon EFS) 파일 시스템을 사용하는 Amazon EC2 인스턴스에서 호스팅되어야 합니다. 솔루션 설계자는 이 작업을 자동화하기 위해 어떤 단계 조합을 취해야 합니까? (2 개를 선택하세요.)",
    "options": {
      "A": "EFS 파일 시스템과 동일한 가용 영역에서 EC2 인스턴스를 시작합니다.",
      "B": "온프레미스 데이터 센터에 AWS DataSync 에이전트를 설치합니다.",
      "C": "데이터에 대한 EC2 인스턴스에 보조 Amazon Elastic Block Store(Amazon EBS) 볼륨을 생성합니다.",
      "D": "수동으로 운영 체제 복사 명령을 사용하여 데이터를 EC2 인스턴스로 푸시합니다.",
      "E": "AWS DataSync를 사용하여 온프레미스 SFTP 서버에 적합한 위치 구성을 생성합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ AWS DataSync — 자동화된 데이터 동기화, 네트워크 대역폭 최적화\n▸ DataSync 에이전트 — 온프레미스에 설치되는 작은 VM\n▸ NFS 호환성 — SFTP 데이터를 NFS 기반 EFS로 자동 변환\n\n【정답 포인트】\n▸ 자동화 필수 → DataSync 에이전트 온프레미스 설치\n(B) ▸ NFS 마이그레이션 → DataSync가 SFTP → EFS 자동 처리\n▸ 동일 AZ 배치 → EC2와 EFS 같은 AZ에서 네트워크 효율 극대\n(A) ▸ 200GB 규모 → DataSync로 효율적 전송, 수동 복사 불가\n\n【오답 체크】\n(C) EBS는 EFS 대안이 아님, 주문사항 위배 /\n(D) 수동 복사는 자동화 요구사항 위배 /\n(E) SFTP는 DataSync 지원 위치가 아님(NFS, SMB, S3만 지원)\n\n【시험 포인트】\n온프레미스 → AWS 데이터 마이그레이션 → DataSync 에이전트 + 위치 구성 / EFS 배포 → AZ 명시 권장"
  },
  {
    "id": 103,
    "question": "회사에 매일 같은 시간에 실행되는 AWS Glue 추출, 변환 및 로드(ETL) 작업이 있습니다. 작업은 Amazon S3 버킷에 있는 XML 데이터를 처리합니다. 매일 새로운 데이터가 S3 버킷에 추가됩니다. 솔루션 설계자는 AWS Glue 가 각 실행 중에 모든 데이터를 처리하고 있음을 알아차렸습니다. 솔루션 아키텍트는 AWS Glue가 오래된 데이터를 재처리하지 못하도록 하려면 어떻게 해야 합니까?",
    "options": {
      "A": "작업 북마크를 사용하도록 작업을 편집합니다.",
      "B": "데이터가 처리된 후 데이터를 삭제하도록 작업을 편집합니다.",
      "C": "NumberOfWorkers 필드를 1로 설정하여 작업을 편집합니다.",
      "D": "FindMatches 기계 학습(ML) 변환을 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Job Bookmark — AWS Glue 처리 상태 추적, 증분 처리 지원\n▸ 상태 저장(Stateful Processing) — 이전 실행 정보 기억\n▸ ETL 효율화 — 신규 데이터만 처리로 비용/시간 절감\n\n【정답 포인트】\n▸ Job Bookmark 작동 → 마지막 처리 지점 기억\n▸ 재처리 방지 → 신규 데이터 이후부터 처리 시작\n▸ 편집만 필요 → 스크립트 수정 없이 설정 변경으로 해결\n▸ 매일 실행 패턴 → Bookmark는 일일 증분 처리 최적화\n\n【오답 체크】\n(B) 데이터 삭제는 마이그레이션 요구사항 위배 /\n(C) Worker 수는 병렬 처리 속도만 영향, 중복 처리 방지 불가 /\n(D) FindMatches ML은 중복 레코드 식별용, 상태 추적 기능 아님\n\n【시험 포인트】\nGlue 반복 작업 + 중복 처리 문제 → Job Bookmark 즉시 선택 / 증분 ETL → Bookmark 표준"
  },
  {
    "id": 104,
    "question": "솔루션 설계자는 웹사이트를 위한 고가용성 인프라를 설계해야 합니다. 웹 사이트는 Amazon EC2 인스턴스에서 실행되는 Windows 웹 서버에 의해 구동됩니다. 솔루션 설계자는 수천 개의 IP 주소에서 시작되는 대규모 DDoS 공격을 완화할 수 있는 솔루션을 구현해야 합니다. 다운타임은 웹사이트에 허용되지 않습니다. 솔루션 설계자는 이러한 공격으로부터 웹사이트를 보호하기 위해 어떤 조치를 취해야 합니까? (2개를 선택하세요.)",
    "options": {
      "A": "AWS Shield Advanced를 사용하여 DDoS 공격을 차단하십시오.",
      "B": "공격자를 자동으로 차단하도록 Amazon GuardDuty를 구성합니다.",
      "C": "정적 및 동적 콘텐츠 모두에 Amazon CloudFront 를 사용하도록 웹 사이트를 구성합니다.",
      "D": "AWS Lambda 함수를 사용하여 VPC 네트워크 ACL 에 공격자 IP 주소를 자동으로 추가합니다.",
      "E": "80% CPU 사용률로 설정된 대상 추적 조정 정책과 함께 Auto Scaling 그룹의 EC2 스팟 인스턴스를 사용합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ AWS Shield Advanced — DDoS 공격 감지/완화, 365일 24/7 지원\n▸ CloudFront — 엣지 레이션 캐시, DDoS 흡수, 지연 감소\n▸ 대규모 분산 공격 — 수천 IP에서 발생, 단순 차단 불가능\n\n【정답 포인트】\n▸ Shield Advanced 필수\n(A) → DDoS 최적화 서비스, 도움말 제공\n▸ CloudFront 필수\n(C) → 엣지에서 트래픽 흡수, 정적+동적 모두 지원\n▸ 이중 방어 → 엣지(CloudFront) + 애플리케이션(Shield Advanced) 계층화\n▸ 다운타임 허용 안 함 → 자동화 및 탄력성 극대화\n\n【오답 체크】\n(B) GuardDuty는 침입 탐지, DDoS 완화 기능 없음 /\n(D) NACL은 상태 추적 불가, 대규모 공격 대응 적절하지 않음 /\n(E) Spot 인스턴스는 중단 위험, 다운타임 보장 불가\n\n【시험 포인트】\nDDoS 대규모 공격 → Shield Advanced + CloudFront 조합 / 다운타임 제로 → 인프라 탄력성(Auto Scaling) + 보안(DDoS 방어)"
  },
  {
    "id": 105,
    "question": "회사에서 새로운 서버리스 워크로드를 배포할 준비를 하고 있습니다. 솔루션 설계자는 최소 권한 원칙을 사용하여 AWS Lambda 함수를 실행하는 데 사용할 권한을 구성해야 합니다. Amazon EventBridge(Amazon CloudWatch Events) 규칙이 함수를 호출합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "lambda:InvokeFunction 을 작업으로, *를 보안 주체로 사용하여 함수에 실행 역할을 추가합니다.",
      "B": "작업으로 lambda:InvokeFunction 을 사용하고 보안 주체로 Service: lambda.amazonaws.com을 사용하여 함수에 실행 역할을 추가합니다.",
      "C": "작업으로 lambda:*를 사용하고 보안 주체로 Service: events.amazonaws.com 을 사용하여 리소스 기반 정책을 함수에 추가합니다.",
      "D": "lambda:InvokeFunction 을 작업으로, Service: events.amazonaws.com 을 보안 주체로 사용하여 리소스 기반 정책을 함수에 추가합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 리소스 기반 정책 — Lambda 함수 수신자 쪽 권한, EventBridge가 직접 호출 가능\n▸ 실행 역할 — 함수 내부 작업 권한(다른 AWS 서비스 호출)\n▸ 최소 권한 원칙 — 필요한 작업만 명시적 허용\n\n【정답 포인트】\n▸ 호출자-함수 관계 → EventBridge → Lambda 호출은 리소스 기반 정책 필요\n▸ events.amazonaws.com 필수\n(D) → EventBridge 서비스 보안 주체\n▸ lambda:InvokeFunction만\n(D) → 최소 권한(람다:* 제외)\n▸ 정책 유형 → 실행 역할(함수 내부) 아닌 리소스 정책(함수 호출)\n\n【오답 체크】\n(A) *는 최소 권한 위배 /\n(B) lambda.amazonaws.com은 Lambda 자신, EventBridge 아님 /\n(C) lambda:*는 과도한 권한, events.amazonaws.com은 맞으나 작업 범위 초과\n\n【시험 포인트】\nEventBridge → Lambda 호출 → 리소스 기반 정책(Resource Policy) / 서비스 주체 = events.amazonaws.com"
  },
  {
    "id": 106,
    "question": "회사에서 Amazon S3 에 기밀 데이터를 저장할 준비를 하고 있습니다. 규정 준수를 위해 미사용 데이터를 암호화해야 합니다. 암호화 키 사용은 감사 목적으로 기록되어야 합니다. 키는 매년 순환해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족하고 운영상 가장 효율적입니까?",
    "options": {
      "A": "고객 제공 키를 사용한 서버 측 암호화(SSE-C)",
      "B": "Amazon S3 관리형 키를 사용한 서버 측 암호화(SSE-S3)",
      "C": "수동 교체가 있는 AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화",
      "D": "자동 교체 기능이 있는 AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ KMS 자동 키 로테이션 — 연간 자동 회전, 이전 버전 보관\n▸ CloudTrail 감사 — KMS 키 사용 기록 자동 로깅\n▸ 규정 준수 요구 — 암호화 + 감시 + 키 순환\n\n【정답 포인트】\n▸ 자동 순환 필수\n(D) → 수동 작업 제거, 운영 효율성\n▸ KMS 감시 기능 → CloudTrail로 자동 기록(SSE-S3는 불가)\n▸ 규정 준수 충족 → 세 가지 요구사항 모두 KMS+자동로테이션으로 해결\n▸ SSE-KMS vs SSE-S3 → 사용자 제어/감시 필요 시 KMS 선택\n\n【오답 체크】\n(A) SSE-C는 고객 키 관리 부담 증가 /\n(B) SSE-S3는 키 순환/감시 불가 /\n(C) 수동 교체는 운영 오버헤드 증가\n\n【시험 포인트】\n자동 키 회전 + 감시 요구 → KMS 자동 로테이션 선택 / 규정 준수 → KMS + CloudTrail 표준"
  },
  {
    "id": 107,
    "question": "자전거 공유 회사는 피크 운영 시간 동안 자전거의 위치를 추적하기 위해 다층 아키텍처를 개발하고 있습니다. 회사는 기존 분석 플랫폼에서 이러한 데이터 포인트를 사용하려고 합니다. 솔루션 설계자는 이 아키텍처를 지원하기 위해 가장 실행 가능한 다중 계층 옵션을 결정해야 합니다. 데이터 포인트는 REST API에서 액세스할 수 있어야 합니다. 위치 데이터 저장 및 검색에 대한 이러한 요구 사항을 충족하는 작업은 무엇입니까?",
    "options": {
      "A": "Amazon S3와 함께 Amazon Athena를 사용하십시오.",
      "B": "AWS Lambda와 함께 Amazon API Gateway를 사용합니다.",
      "C": "Amazon Redshift와 함께 Amazon QuickSight를 사용합니다.",
      "D": "Amazon Kinesis Data Analytics와 함께 Amazon API Gateway를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ REST API 요구사항 → API Gateway + Lambda 조합 필수\n▸ 실시간 위치 추적 → 낮은 지연, 동적 응답 필요\n▸ 분석 플랫폼 통합 → 데이터 소비자와의 연계\n\n【정답 포인트】\n▸ REST API 필수\n(B) → API Gateway 외에 대안 없음\n▸ Lambda 통합\n(B) → 서버리스, 자동 스케일링, 위치 데이터 쿼리\n▸ 동기 응답 → 분석 플랫폼이 API에서 즉시 데이터 수집\n▸ 다중 계층 → API 계층(Gateway+Lambda) + 데이터 계층(DynamoDB 암묵)\n\n【오답 체크】\n(A) Athena는 REST API 미제공, 배치 쿼리 전용 /\n(C) QuickSight는 시각화만, API 게이트웨이 아님 /\n(D) Kinesis Analytics는 스트림 처리, REST API 미제공\n\n【시험 포인트】\nREST API 요구 → API Gateway 즉시 선택 / 위치 추적(낮은 지연) → Lambda(동기) vs Kinesis(비동기)"
  },
  {
    "id": 108,
    "question": "한 회사에 Amazon RDS 의 데이터베이스에 목록을 저장하는 자동차 판매 웹사이트가 있습니다. 자동차가 판매되면 웹사이트에서 목록을 제거해야 하고 데이터를 여러 대상 시스템으로 보내야 합니다. 솔루션 아키텍트는 어떤 디자인을 추천해야 할까요?",
    "options": {
      "A": "Amazon RDS 의 데이터베이스가 업데이트되어 대상이 소비할 Amazon Simple Queue Service(Amazon SQS) 대기열로 정보를 보내도록 업데이트될 때 트리거되는 AWS Lambda 함수를 생성합니다.",
      "B": "Amazon RDS의 데이터베이스가 대상이 사용할 Amazon Simple Queue Service(Amazon SQS) FIFO 대기열로 정보를 보내도록 업데이트될 때 트리거되는 AWS Lambda 함수를 생성합니다.",
      "C": "RDS 이벤트 알림을 구독하고 여러 Amazon Simple Notification Service(Amazon SNS) 주제로 팬아웃된 Amazon Simple Queue Service(Amazon SQS) 대기열을 보냅니다. AWS Lambda 함수를 사용하여 대상을 업데이트합니다.",
      "D": "RDS 이벤트 알림을 구독하고 Amazon Simple Notification Service(Amazon SNS) 주제를 여러 Amazon Simple Queue Service(Amazon SQS) 대기열로 보냅니다. AWS Lambda 함수를 사용하여 대상을 업데이트합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ RDS 이벤트 알림 — 테이블 변경 감지, SNS로 발행\n▸ SNS-SQS 팬아웃 — 하나의 메시지를 여러 대기열로 배포\n▸ 느슨한 결합 — 대상 시스템 독립적으로 처리\n\n【정답 포인트】\n▸ RDS 이벤트 기반\n(D) → 데이터베이스 트리거 불필요, 관리형 이벤트\n▸ SNS → SQS\n(D) → 여러 대상에 한 번의 발행으로 전달\n▸ 느슨한 결합 → 대상이 각자 대기열에서 독립적 처리\n▸ Lambda 소비자 → 각 SQS 대기열에서 메시지를 가져와 대상 업데이트\n\n【오답 체크】\n(A) \n(B) RDS 이벤트 알림 미사용, Lambda 직접 트리거는 확장성 제한 /\n(C) 순서대로는 SQS→SNS→SQS는 불가능한 아키텍처\n\n【시험 포인트】\n다중 대상 구독(Fan-Out) → SNS-SQS 패턴 표준 / RDS 이벤트 처리 → 이벤트 알림 기반 설계"
  },
  {
    "id": 109,
    "question": "회사는 Amazon S3 에 데이터를 저장해야 하며 데이터가 변경되지 않도록 해야 합니다. 회사는 Amazon S3 에 업로드된 새 객체가 회사가 객체를 수정하기로 결정할 때까지 일정하지 않은 시간 동안 변경할 수 없는 상태로 유지되기를 원합니다. 회사 AWS 계정의 특정 사용자만 객체를 삭제할 수 있습니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "S3 Glacier 볼트를 생성합니다. WORM(Write-Once, Read-Many) 볼트 잠금 정책을 개체에 적용합니다.",
      "B": "S3 객체 잠금이 활성화된 S3 버킷을 생성합니다. 버전 관리를 활성화합니다. 보존 기간을 100 년으로 설정합니다. 거버넌스 모드를 새 객체에 대한 S3 버킷의 기본 보존 모드로 사용합니다.",
      "C": "S3 버킷을 생성합니다. AWS CloudTrail 을 사용하여 객체를 수정하는 모든 S3 API 이벤트를 추적합니다. 통지 시 회사가 보유한 모든 백업 버전에서 수정된 개체를 복원합니다.",
      "D": "S3 객체 잠금이 활성화된 S3 버킷을 생성합니다. 버전 관리를 활성화합니다. 개체에 법적 보존을 추가합니다. 객체를 삭제해야 하는 사용자의 IAM 정책에 s3:PutObjectLegalHold 권한을 추가합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 객체 잠금 — WORM 구현, 거버넌스/규정 준수 모드\n▸ 법적 보존(Legal Hold) — 무기한 보호, 권한 있는 사용자만 제거\n▸ 버전 관리 — 객체 잠금 선수 조건\n\n【정답 포인트】\n▸ 무기한 보호\n(D) → 보존 기간 설정 불가, 법적 보존 사용\n▸ 선택적 삭제 권한\n(D) → s3:PutObjectLegalHold 권한으로 특정 사용자만\n▸ 거버넌스 모드 불적절 → 관리자 우회 가능, 법적 보존이 더 엄격\n▸ 요구사항 매칭 → \"일정하지 않은 시간\" = 무기한 = 법적 보존\n\n【오답 체크】\n(A) Glacier 볼트는 복잡도 높고 검색 지연 크함 /\n(B) 100년 보존은 무기한 아님, 거버넌스는 관리자 우회 가능 /\n(C) CloudTrail은 추적만, 보호 기능 없음\n\n【시험 포인트】\nS3 변경 불가 + 무기한 → 법적 보존 / 선택적 삭제 → IAM s3:PutObjectLegalHold 권한"
  },
  {
    "id": 110,
    "question": "소셜 미디어 회사는 사용자가 웹사이트에 이미지를 업로드할 수 있도록 합니다. 웹 사이트는 Amazon EC2 인스턴스에서 실행됩니다. 업로드 요청 중에 웹 사이트는 이미지의 크기를 표준 크기로 조정하고 크기가 조정된 이미지를 Amazon S3에 저장합니다. 사용자가 웹 사이트에 대한 느린 업로드 요청을 경험하고 있습니다. 회사는 애플리케이션 내 커플링을 줄이고 웹사이트 성능을 개선해야 합니다. 솔루션 설계자는 이미지 업로드를 위한 운영상 가장 효율적인 프로세스를 설계해야 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자가 취해야 하는 조치의 조합은 무엇입니까? (2개를 선택하세요.)",
    "options": {
      "A": "S3 Glacier에 이미지를 업로드하도록 애플리케이션을 구성합니다.",
      "B": "원본 이미지를 Amazon S3에 업로드하도록 웹 서버를 구성합니다.",
      "C": "미리 서명된 URL 을 사용하여 각 사용자의 브라우저에서 Amazon S3 로 이미지를 직접 업로드하도록 애플리케이션 구성",
      "D": "이미지가 업로드될 때 AWS Lambda 함수를 호출하도록 S3 이벤트 알림을 구성합니다. 기능을 사용하여 이미지 크기를 조정합니다.",
      "E": "업로드된 이미지의 크기를 조정하기 위해 일정에 따라 AWS Lambda 함수를 호출하는 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다."
    },
    "answer": "CD",
    "explanation": "【핵심 용어】\n▸ 미리 서명된 URL — 브라우저에서 S3 직접 업로드, EC2 우회\n▸ S3 이벤트 알림 — 객체 생성 후 자동 트리거\n▸ 느슨한 결합 — 업로드와 처리 분리\n\n【정답 포인트】\n▸ 미리 서명된 URL\n(C) → 업로드 경로 최단화(브라우저→S3 직접), EC2 부담 감소\n▸ S3 이벤트 + Lambda\n(D) → 업로드 완료 후 비동기 이미지 리사이징\n▸ 느슨한 결합 (CD) → 업로드 응답 지연 없음, 리사이징은 배경 작업\n▸ 성능 향상 → 사용자는 즉시 응답 받음, 처리는 Lambda가 비동기 수행\n\n【오답 체크】\n(A) Glacier는 장기 보관용, 즉시 업로드 속도 향상 안 함 /\n(B) 웹 서버 거치는 원래 방식, 개선 없음 /\n(E) EventBridge 정기 실행은 실시간성 없고, 업로드와 리사이징 연계 불가\n\n【시험 포인트】\n업로드 성능 개선 → 미리 서명된 URL(클라이언트 직접) / 이미지 처리 비동기화 → S3 이벤트 + Lambda"
  },
  {
    "id": 111,
    "question": "한 회사는 최근에 메시지 처리 시스템을 AWS 로 마이그레이션했습니다. 시스템은 Amazon EC2 인스턴스에서 실행되는 ActiveMQ 대기열로 메시지를 수신합니다. 메시지는 Amazon EC2 에서 실행되는 소비자 애플리케이션에 의해 처리됩니다. 소비자 애플리케이션은 메시지를 처리하고 결과를 Amazon EC2 에서 실행되는 MySQL 데이터베이스에 씁니다. 회사는 이 애플리케이션이 낮은 운영 복잡성으로 고가용성을 갖기를 원합니다. 가장 높은 가용성을 제공하는 아키텍처는 무엇입니까?",
    "options": {
      "A": "다른 가용 영역에 두 번째 ActiveMQ 서버를 추가합니다. 다른 가용 영역에 소비자 EC2 인스턴스를 추가합니다. MySQL 데이터베이스를 다른 가용 영역에 복제합니다.",
      "B": "두 가용 영역에 구성된 활성/대기 브로커와 함께 Amazon MQ 를 사용합니다. 다른 가용 영역에 소비자 EC2 인스턴스를 추가합니다. MySQL 데이터베이스를 다른 가용 영역에 복제합니다.",
      "C": "두 가용 영역에 구성된 활성/대기 브로커와 함께 Amazon MQ 를 사용합니다. 다른 가용 영역에 소비자 EC2 인스턴스를 추가합니다. 다중 AZ 가 활성화된 MySQL 용 Amazon RDS를 사용합니다.",
      "D": "두 가용 영역에 구성된 활성/대기 브로커와 함께 Amazon MQ 를 사용합니다. 두 가용 영역에 걸쳐 소비자 EC2 인스턴스에 대한 Auto Scaling 그룹을 추가합니다. 다중 AZ 가 활성화된 MySQL용 Amazon RDS를 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Amazon MQ — ActiveMQ 관리형 대체, 활성/대기 구성\n▸ RDS 다중 AZ — 자동 장애조치, 동기 복제\n▸ Auto Scaling — 소비자 동적 확장\n\n【정답 포인트】\n▸ Amazon MQ 활성/대기\n(D) → 자동 장애조치, 메시지 손실 방지\n▸ RDS 다중 AZ\n(D) → 1초 미만 장애조치, 관리형\n▸ Auto Scaling\n(D) → 부하 증가 시 자동 확장, 가용성+성능\n▸ 최소 운영 복잡성 → 자동 장애조치, 수동 구성 불필요\n\n【오답 체크】\n(A) 자체 ActiveMQ 관리는 복잡도 증가, 장애조치 수동 /\n(B) EC2 MySQL 복제는 관리 부담 /\n(C) EC2 소비자는 정적, 부하 변화 대응 제한\n\n【시험 포인트】\nActiveMQ 마이그레이션 → Amazon MQ(관리형) / 고가용성 + 저복잡도 → MQ(활성/대기) + RDS(다중AZ) + Auto Scaling"
  },
  {
    "id": 112,
    "question": "회사는 들어오는 요청을 처리하는 온프레미스 서버 집합에서 컨테이너화된 웹 애플리케이션을 호스팅합니다. 요청 수가 빠르게 증가하고 있습니다. 온프레미스 서버는 증가된 요청 수를 처리할 수 없습니다. 회사는 최소한의 코드 변경과 최소한의 개발 노력으로 애플리케이션을 AWS로 옮기기를 원합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic Container Service(Amazon ECS)에서 AWS Fargate를 사용하여 Service Auto Scaling 으로 컨테이너화된 웹 애플리케이션을 실행합니다. Application Load Balancer를 사용하여 수신 요청을 배포합니다.",
      "B": "두 개의 Amazon EC2 인스턴스를 사용하여 컨테이너화된 웹 애플리케이션을 호스팅합니다. Application Load Balancer를 사용하여 수신 요청을 배포합니다.",
      "C": "지원되는 언어 중 하나를 사용하는 새 코드와 함께 AWS Lambda를 사용합니다. 로드를 지원하기 위해 여러 Lambda 함수를 생성합니다. Amazon API Gateway 를 Lambda 함수에 대한 진입점으로 사용합니다.",
      "D": "AWS ParallelCluster 와 같은 고성능 컴퓨팅(HPC) 솔루션을 사용하여 적절한 규모로 들어오는 요청을 처리할 수 있는 HPC 클러스터를 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Fargate — 서버리스 컨테이너, 인프라 관리 불필요\n▸ Service Auto Scaling — ECS 컨테이너 자동 확장\n▸ 최소 코드 변경 — 기존 컨테이너 이미지 그대로 사용\n\n【정답 포인트】\n▸ 컨테이너화 애플리케이션\n(A) → Fargate로 자동 배포\n▸ 코드 변경 최소\n(A) → 컨테이너 이미지 재사용, 애플리케이션 코드 수정 불필요\n▸ 자동 스케일링\n(A) → Service Auto Scaling으로 부하에 따라 확장\n▸ 운영 오버헤드 최소\n(A) → Fargate는 관리형, EC2 관리 없음\n\n【오답 체크】\n(B) EC2 고정 수는 자동 스케일링 불가, 부하 증가 시 수동 추가 필요 /\n(C) Lambda는 재작성 필요, 코드 변경 많음 /\n(D) ParallelCluster는 HPC용, 웹 애플리케이션 부적절\n\n【시험 포인트】\n컨테이너 + 코드 변경 최소 + 자동 스케일링 → Fargate + ECS / EC2 관리 회피 → 서버리스 컨테이너(Fargate) 선택"
  },
  {
    "id": 113,
    "question": "회사는 보고를 위해 50TB 의 데이터를 사용합니다. 회사는 이 데이터를 온프레미스에서 AWS 로 이동하려고 합니다. 회사 데이터 센터의 사용자 지정 응용 프로그램은 매주 데이터 변환 작업을 실행합니다. 회사는 데이터 이전이 완료되고 가능한 한 빨리 이전 프로세스를 시작해야 할 때까지 응용 프로그램을 일시 중지할 계획입니다. 데이터 센터에는 추가 워크로드에 사용할 수 있는 네트워크 대역폭이 없습니다. 솔루션 설계자는 데이터를 전송하고 AWS 클라우드에서 계속 실행되도록 변환 작업을 구성해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS DataSync 를 사용하여 데이터를 이동합니다. AWS Glue 를 사용하여 사용자 지정 변환 작업을 생성합니다.",
      "B": "AWS Snowcone 디바이스에 데이터를 이동하도록 주문합니다. 장치에 변환 응용 프로그램을 배포합니다.",
      "C": "AWS Snowball Edge Storage Optimized 디바이스를 주문합니다. 데이터를 장치에 복사합니다. AWS Glue를 사용하여 사용자 지정 변환 작업을 생성합니다.",
      "D": "Amazon EC2 컴퓨팅이 포함된 AWS Snowball Edge Storage Optimized 디바이스를 주문합니다. 데이터를 장치에 복사합니다. AWS 에서 새 EC2 인스턴스를 생성하여 변환 애플리케이션을 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Snowball Edge Storage Optimized — 100TB 용량, 높은 처리량\n▸ AWS Glue — 사용자 지정 변환 작업, 관리형 서비스\n▸ 네트워크 대역폭 제약 → 물리적 디바이스 전송 필수\n\n【정답 포인트】\n▸ 50TB + 대역폭 제약\n(C) → Snowball Edge 필수(DataSync는 네트워크 기반)\n▸ 변환 작업\n(C) → AWS Glue로 클라우드에서 구성\n▸ 최소 오버헤드\n(C) → Glue는 관리형, 개발 최소화\n▸ Snowball Edge Storage Optimized\n(C) → 50TB 충분, 스토리지 최적화\n\n【오답 체크】\n(A) DataSync는 네트워크 기반, 대역폭 제약 위배 /\n(B) Snowcone은 용량 작음(8TB) /\n(D) Snowball Edge Compute는 장치에 변환 실행 필요, 클라우드 이동 후 재실행은 중복\n\n【시험 포인트】\n50TB + 대역폭 없음 → Snowball(물리 전송) 필수 / 변환 작업 클라우드 이전 → Glue 관리형 선택"
  },
  {
    "id": 114,
    "question": "한 회사는 사용자가 사진을 업로드하고 이미지에 액자를 추가할 수 있는 이미지 분석 응용 프로그램을 만들었습니다. 사용자는 이미지와 메타데이터를 업로드하여 이미지에 추가할 사진 프레임을 나타냅니다. 애플리케이션은 단일 Amazon EC2 인스턴스와 Amazon DynamoDB를 사용하여 메타데이터를 저장합니다. 응용 프로그램이 대중화되고 사용자 수가 증가하고 있습니다. 회사는 동시 접속자 수가 시간과 요일에 따라 크게 달라질 것으로 예상하고 있습니다. 회사는 증가하는 사용자 기반의 요구 사항을 충족하도록 애플리케이션을 확장할 수 있는지 확인해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS Lambda 를 사용하여 사진을 처리합니다. 사진과 메타데이터를 DynamoDB 에 저장합니다.",
      "B": "Amazon Kinesis Data Firehose 를 사용하여 사진을 처리하고 사진과 메타데이터를 저장합니다.",
      "C": "AWS Lambda 를 사용하여 사진을 처리합니다. Amazon S3 에 사진을 저장합니다. DynamoDB를 유지하여 메타데이터를 저장합니다.",
      "D": "EC2 인스턴스 수를 3개로 늘립니다. 프로비저닝된 IOPS SSD(io2) Amazon Elastic Block Store(Amazon EBS) 볼륨을 사용하여 사진과 메타데이터를 저장합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Lambda — 서버리스, 무제한 자동 스케일링\n▸ Amazon S3 — 대규모 이미지 저장, 높은 내구성\n▸ DynamoDB — 메타데이터 관리, 탄력적 처리량\n\n【정답 포인트】\n▸ Lambda 처리\n(C) → 사진 프레임 추가는 계산 작업, 자동 스케일링\n▸ S3 이미지 저장\n(C) → 대규모 이미지 저장 최적, 접근 지연 최소\n▸ DynamoDB 메타데이터\n(C) → 이미 사용, 변동하는 부하에 탄력적 대응\n▸ 변동 부하 대응 → Lambda+S3+DynamoDB는 모두 자동 스케일링\n\n【오답 체크】\n(A) DynamoDB에 이진 이미지 저장은 비효율, 비용 과다 /\n(B) Kinesis Firehose는 데이터 스트림 처리용, 이미지 처리 부적절 /\n(D) EC2 고정 3개는 확장성 제한, 변동 부하 대응 어려움\n\n【시험 포인트】\n이미지 처리 + 변동 부하 → Lambda(자동 스케일) / 대규모 이진 데이터 → S3 저장 / 메타데이터 → DynamoDB"
  },
  {
    "id": 115,
    "question": "의료 기록 회사는 Amazon EC2 인스턴스에서 애플리케이션을 호스팅하고 있습니다. 애플리케이션은 Amazon S3 에 저장된 고객 데이터 파일을 처리합니다. EC2 인스턴스는 퍼블릭 서브넷에서 호스팅됩니다. EC2 인스턴스는 인터넷을 통해 Amazon S3 에 액세스하지만 다른 네트워크 액세스는 필요하지 않습니다. 새로운 요구 사항은 파일 전송을 위한 네트워크 트래픽이 인터넷을 통해 전송되지 않고 개인 경로를 사용하도록 규정하고 있습니다. 솔루션 설계자가 이 요구 사항을 충족하기 위해 권장해야 하는 네트워크 아키텍처 변경 사항은 무엇입니까?",
    "options": {
      "A": "NAT 게이트웨이를 생성합니다. NAT 게이트웨이를 통해 Amazon S3 로 트래픽을 전송하도록 퍼블릭 서브넷에 대한 라우팅 테이블을 구성합니다.",
      "B": "S3 접두사 목록에 대한 트래픽만 허용되도록 아웃바운드 트래픽을 제한하도록 EC2 인스턴스에 대한 보안 그룹을 구성합니다.",
      "C": "EC2 인스턴스를 프라이빗 서브넷으로 이동합니다. Amazon S3 용 VPC 엔드포인트를 생성하고 엔드포인트를 프라이빗 서브넷의 라우팅 테이블에 연결합니다.",
      "D": "VPC에서 인터넷 게이트웨이를 제거합니다. AWS Direct Connect 연결을 설정하고 Direct Connect 연결을 통해 Amazon S3로 트래픽을 라우팅합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ VPC 엔드포인트 — 인터넷을 거치지 않고 VPC에서 AWS 서비스로 접근할 수 있는 프라이빗 경로\n▸ 프라이빗 서브넷 — 퍼블릭 인터넷 경로 없이 NAT/엔드포인트를 통한 아웃바운드 접근만 가능\n\n【정답 포인트】\n▸ \"개인 경로\" 요구사항 → VPC 엔드포인트(S3용 게이트웨이 엔드포인트)가 유일한 솔루션\n▸ EC2를 프라이빗 서브넷으로 이동 → 인터넷 게이트웨이 접근 원천 차단\n▸ S3 트래픽만 라우팅 테이블에 정책 적용 → 격리된 경로로 S3 도달\n\n【오답 체크】\n(A) NAT 게이트웨이는 여전히 IGW를 거쳐 인터넷 경로 사용(개인 경로 아님)\n(B) 보안 그룹은 네트워크 경로 선택 기능 없음, 트래픽 필터링만 수행\n(D) Direct Connect는 과도한 비용/구성이며 S3만 필요한 경우 불필요\n\n【시험 포인트】\n\"개인 경로\" = VPC 엔드포인트 / 인터넷 게이트웨이 우회 필수 / 프라이빗 서브넷 구성이 핵심"
  },
  {
    "id": 116,
    "question": "회사는 회사 웹 사이트에 널리 사용되는 CMS(콘텐츠 관리 시스템)를 사용합니다. 그러나 필요한 패치 및 유지 관리가 부담됩니다. 회사는 웹사이트를 재설계하고 있으며 새로운 솔루션을 원합니다. 웹사이트는 1 년에 4 번 업데이트되며 사용 가능한 동적 콘텐츠가 필요하지 않습니다. 솔루션은 높은 확장성과 향상된 보안을 제공해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 변경 조합은 무엇입니까? (2 개를 선택하세요.)",
    "options": {
      "A": "HTTPS 기능을 사용하도록 웹 사이트 앞에 Amazon CloudFront를 구성합니다.",
      "B": "웹 사이트 앞에 AWS WAF 웹 ACL을 배포하여 HTTPS 기능을 제공합니다.",
      "C": "웹 사이트 콘텐츠를 관리하고 제공하기 위해 AWS Lambda 함수를 생성 및 배포합니다.",
      "D": "새 웹 사이트와 Amazon S3 버킷을 생성합니다. 정적 웹 사이트 호스팅이 활성화된 S3 버킷에 웹 사이트를 배포합니다.",
      "E": "새 웹사이트를 만듭니다. Application Load Balancer 뒤에서 Amazon EC2 인스턴스의 Auto Scaling 그룹을 사용하여 웹 사이트를 배포합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ 정적 웹사이트 — 동적 콘텐츠 없이 HTML/CSS/JS로 구성, 서버 유지관리 불필요\n▸ CloudFront — 글로벌 엣지 로케이션에서 정적/동적 콘텐츠 캐싱 및 배포\n\n【정답 포인트】\n▸ S3 정적 호스팅\n(D) — 패치/유지관리 불필요, 1년 4회 업데이트만 필요\n▸ CloudFront\n(A) — HTTPS 종료, 글로벌 확장성, 낮은 지연시간, 운영 오버헤드 0\n▸ 조합(A+D) — 서버리스 아키텍처로 EC2 관리 완전 제거\n\n【오답 체크】\n(B) WAF는 보안 필터링 전문, HTTPS 기능 제공 안 함\n(C) Lambda는 동적 콘텐츠가 필요할 때만 사용, 정적 사이트에는 과도\n(E) EC2+ALB는 패치/확장성 관리 필요 → 운영 오버헤드 증대\n\n【시험 포인트】\n정적 콘텐츠 + 운영 최소화 = S3 호스팅 / 글로벌 확장성 = CloudFront / 동적 콘텐츠 없음 = Lambda 불필요"
  },
  {
    "id": 117,
    "question": "회사는 Amazon CloudWatch Logs 로그 그룹에 애플리케이션 로그를 저장합니다. 새로운 정책에 따라 회사는 거의 실시간으로 Amazon OpenSearch Service(Amazon Elasticsearch Service)에 모든 애플리케이션 로그를 저장해야 합니다. 최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "로그를 Amazon OpenSearch Service(Amazon Elasticsearch Service)로 스트리밍하도록 CloudWatch Logs 구독을 구성합니다.",
      "B": "AWS Lambda 함수를 생성합니다. 로그 그룹을 사용하여 함수를 호출하여 Amazon OpenSearch Service(Amazon Elasticsearch Service)에 로그를 기록합니다.",
      "C": "Amazon Kinesis Data Firehose 전송 스트림을 생성합니다. 전송 스트림 소스로 로그 그룹을 구성합니다. Amazon OpenSearch Service(Amazon Elasticsearch Service)를 전송 스트림의 대상으로 구성합니다.",
      "D": "각 애플리케이션 서버에 Amazon Kinesis Agent 를 설치하고 구성하여 Amazon Kinesis Data Streams 에 로그를 전달합니다. Amazon OpenSearch Service(Amazon Elasticsearch Service)에 로그를 전달하도록 Kinesis Data Streams를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudWatch Logs 구독 — CloudWatch Logs에서 다른 서비스로 실시간 스트리밍\n▸ OpenSearch — 실시간 로그 검색/분석 엔진\n\n【정답 포인트】\n▸ 직접 구독\n(A) — CloudWatch Logs와 OpenSearch 네이티브 통합\n▸ 거의 실시간 요구 → 구독 필터가 가장 빠르고 간단\n▸ 운영 오버헤드 최소화 — 설정만으로 자동화, Lambda/Kinesis 관리 불필요\n\n【오답 체크】\n(B) Lambda 함수는 추가 코드/트리거 관리 필요, 오버헤드 증가\n(C) Firehose는 배치 처리 최적화, 실시간 요구 시 불필요한 계층\n(D) Kinesis Agent 설치/유지관리 필요, 구독보다 복잡함\n\n【시험 포인트】\n CloudWatch → 다른 서비스 실시간 = 구독 필터 / 최소 오버헤드 = 네이티브 통합 선택"
  },
  {
    "id": 118,
    "question": "회사는 여러 가용 영역의 Amazon EC2 인스턴스에서 실행되는 웹 기반 애플리케이션을 구축하고 있습니다. 웹 애플리케이션은 약 900TB 크기의 텍스트 문서 저장소에 대한 액세스를 제공합니다. 회사는 웹 응용 프로그램이 수요가 많은 기간을 경험할 것으로 예상합니다. 솔루션 설계자는 텍스트 문서의 스토리지 구성 요소가 애플리케이션의 요구 사항을 항상 충족할 수 있도록 확장할 수 있는지 확인해야 합니다. 회사는 솔루션의 전체 비용에 대해 우려하고 있습니다. 어떤 스토리지 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": {
      "A": "Amazon Elastic Block Store(Amazon EBS)",
      "B": "Amazon Elastic File System(Amazon EFS)",
      "C": "Amazon OpenSearch Service(Amazon Elasticsearch Service)",
      "D": "Amazon S3"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 — 무제한 확장성, 저비용 객체 스토리지, 다중 AZ 자동 복제\n▸ 텍스트 문서 저장소 — 동시 접근, 높은 확장성, 비용 최적화 필요\n\n【정답 포인트】\n▸ 900TB 규모 → 대용량 비용 최적화는 S3가 유일\n▸ 비용 효율 — EBS(블록, 고정 용량), EFS(네트워크 파일, 높은 비용) 대비 S3 저렴\n▸ 확장성 — 무한 확장 지원, 프로비저닝 불필요\n\n【오답 체크】\n(A) EBS는 EC2 인스턴스당 볼륨 필요, 900TB는 비용 폭증\n(B) EFS는 파일 시스템 특화, 대규모 저장에 비용 높음\n(C) OpenSearch는 검색 엔진, 대용량 저장소 역할 불가능\n\n【시험 포인트】\n 대규모 스토리지 + 비용 절감 = S3 / 텍스트 문서 = 객체 저장 최적 / 확장성 무제한 필수"
  },
  {
    "id": 119,
    "question": "글로벌 회사는 Amazon API Gateway 를 사용하여 us-east-1 리전 및 ap-southeast-2 리전의 로열티 클럽 사용자를 위한 REST API 를 설계하고 있습니다. 솔루션 설계자는 SQL 주입 및 교차 사이트 스크립팅 공격으로부터 여러 계정에서 이러한 API Gateway 관리 REST API를 보호하는 솔루션을 설계해야 합니다. 최소한의 관리 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "두 리전에 AWS WAF를 설정합니다. 리전 웹 ACL을 API 단계와 연결합니다.",
      "B": "두 리전에 AWS Firewall Manager를 설정합니다. AWS WAF 규칙을 중앙에서 구성합니다.",
      "C": "목욕 리전에서 AWS Shield를 설정합니다. 리전 웹 ACL을 API 단계와 연결합니다.",
      "D": "한 리전에서 AWS Shield를 설정합니다. 리전 웹 ACL을 API 단계와 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Firewall Manager — 여러 계정/리전의 WAF/Shield를 중앙에서 관리\n▸ WAF — SQL 주입, XSS 등 애플리케이션 계층 공격 방어\n\n【정답 포인트】\n▸ \"여러 계정\" + \"두 리전\" → 중앙 관리 필요\n▸ Firewall Manager\n(B) — 하나의 정책으로 모든 계정/리전에 WAF 배포\n▸ SQL 주입/XSS 방어 — WAF 관리 규칙 자동 적용\n▸ 최소 관리 노력 — 중앙 집중식 정책 관리만 필요\n\n【오답 체크】\n(A) 각 리전에서 개별 설정 → 관리 노력 증가, 일관성 어려움\n(C) \n(D) Shield는 DDoS 방어 전문, SQL 주입/XSS 방어 불가능\n\n【시험 포인트】\n 여러 계정/리전 + WAF 중앙 관리 = Firewall Manager / SQL 주입/XSS = WAF 필수 / 최소 관리 = 정책 중앙화"
  },
  {
    "id": 120,
    "question": "한 회사는 us-west-2 리전의 NLB(Network Load Balancer) 뒤에 있는 3개의 Amazon EC2 인스턴스에 자체 관리형 DNS 솔루션을 구현했습니다. 회사 사용자의 대부분은 미국과 유럽에 있습니다. 회사는 솔루션의 성능과 가용성을 개선하기를 원합니다. 회사는 eu-west-1 리전에서 3개의 EC2 인스턴스를 시작 및 구성하고 EC2 인스턴스를 새 NLB의 대상으로 추가합니다. 회사에서 트래픽을 모든 EC2 인스턴스로 라우팅하는 데 사용할 수 있는 솔루션은 무엇입니까?",
    "options": {
      "A": "두 NLB 중 하나로 요청을 라우팅하는 Amazon Route 53 지리적 위치 라우팅 정책을 생성합니다. Amazon CloudFront 배포를 생성합니다. Route 53 레코드를 배포의 오리진으로 사용합니다.",
      "B": "AWS Global Accelerator 에서 표준 액셀러레이터를 생성합니다. us-west-2 및 eu-west-1 에서 엔드포인트 그룹을 생성합니다. 엔드포인트 그룹에 대한 엔드포인트로 두 개의 NLB를 추가하십시오.",
      "C": "탄력적 IP 주소를 6 개의 EC2 인스턴스에 연결합니다. 6 개의 EC2 인스턴스 중 하나로 요청을 라우팅하는 Amazon Route 53 지리적 위치 라우팅 정책을 생성합니다. Amazon CloudFront 배포를 생성합니다. Route 53 레코드를 배포의 오리진으로 사용합니다.",
      "D": "2개의 NLB를 2개의 ALB(Application Load Balancer)로 교체합니다. 두 ALB 중 하나로 요청을 라우팅하는 Amazon Route 53 지연 시간 라우팅 정책을 생성합니다. Amazon CloudFront 배포를 생성합니다. Route 53 레코드를 배포의 오리진으로 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Global Accelerator — 글로벌 트래픽 라우팅, 성능/가용성 최적화\n▸ 엔드포인트 그룹 — 리전별 로드 밸런서 그룹화\n\n【정답 포인트】\n▸ NLB(DNS 솔루션) + 다중 리전 → Global Accelerator 최적\n▸ 성능 최적화 — Global Accelerator의 애니캐스팅과 지능형 라우팅\n▸ 가용성 개선 — 자동 장애 조치 및 리전별 엔드포인트 그룹\n▸ NLB 유지 → 자체 관리형 DNS 솔루션 호환성 보장\n\n【오답 체크】\n(A) CloudFront + Route 53은 HTTP/S 콘텐츠 최적화, 비DNS 트래픽에 부적합\n(C) 직접 EC2 IP 라우팅은 로드 밸런싱 불필요한 구성\n(D) NLB를 ALB로 변경 → 자체 관리형 DNS와 호환성 저하\n\n【시험 포인트】\n 다중 리전 NLB + 성능/가용성 = Global Accelerator / 자체 관리형 DNS = NLB 유지 필수 / 엔드포인트 그룹 활용"
  },
  {
    "id": 121,
    "question": "회사는 AWS 에서 OLTP(온라인 트랜잭션 처리) 워크로드를 실행하고 있습니다. 이 워크로드는 다중 AZ 배포에서 암호화되지 않은 Amazon RDS DB 인스턴스를 사용합니다. 일일 데이터베이스 스냅샷은 이 인스턴스에서 가져옵니다. 데이터베이스와 스냅샷이 앞으로 항상 암호화되도록 하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": {
      "A": "최신 DB 스냅샷 사본을 암호화합니다. 암호화된 스냅샷을 복원하여 기존 DB 인스턴스를 교체합니다.",
      "B": "새 암호화된 Amazon Elastic Block Store(Amazon EBS) 볼륨을 생성하고 여기에 스냅샷을 복사합니다. DB 인스턴스에서 암호화를 활성화합니다.",
      "C": "AWS Key Management Service(AWS KMS)를 사용하여 스냅샷을 복사하고 암호화를 활성화합니다. 암호화된 스냅샷을 기존 DB 인스턴스로 복원합니다.",
      "D": "AWS Key Management Service(AWS KMS) 관리형 키(SSE-KMS)로 서버 측 암호화를 사용하여 암호화된 Amazon S3 버킷에 스냅샷을 복사합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RDS 암호화 — DB 인스턴스 생성 시만 활성화 가능, 기존 인스턴스에서 직접 활성화 불가\n▸ 스냅샷 암호화 — 스냅샷 복사 시 암호화 옵션 지정\n\n【정답 포인트】\n▸ 암호화되지 않은 DB → 암호화 활성화 불가능\n▸ 유일한 방법: 스냅샷 복사 시 암호화 설정 → 암호화된 DB로 복원\n▸ 최신 스냅샷 사용 — 최신 데이터 보존\n▸ 기존 인스턴스 교체 — 암호화 상태 완전 전환\n\n【오답 체크】\n(B) EBS 볼륨 사용 불필요, RDS 스냅샷 복사 직접 이용 가능\n(C) KMS는 암호화 키 서비스, 스냅샷 복사 프로세스 자체가 아님\n(D) S3는 스냅샷 저장 목적 아님, RDS 복원 경로 아님\n\n【시험 포인트】\n 기존 암호화 안 됨 DB = 스냅샷 복사 후 복원 필수 / 스냅샷 암호화 = 복사 시 옵션 지정 / 교체 필수 = 기존 인스턴스 재사용 불가"
  },
  {
    "id": 122,
    "question": "회사는 응용 프로그램의 데이터를 암호화해야 하는 개발자를 지원하기 위해 확장 가능한 키 관리 인프라를 구축하려고 합니다. 솔루션 설계자는 운영 부담을 줄이기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "MFA(다단계 인증)를 사용하여 암호화 키를 보호합니다.",
      "B": "AWS Key Management Service(AWS KMS)를 사용하여 암호화 키를 보호합니다.",
      "C": "AWS Certificate Manager(ACM)를 사용하여 암호화 키를 생성, 저장 및 할당합니다.",
      "D": "IAM 정책을 사용하여 암호화 키를 보호할 수 있는 액세스 권한이 있는 사용자의 범위를 제한합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ KMS — 암호화 키 생성/관리/회전 자동화, 규정 준수 지원\n▸ 확장 가능한 인프라 — 애플리케이션 수 증가 시 자동 스케일링\n\n【정답 포인트】\n▸ KMS\n(B) — AWS 관리형 키 관리, 운영 부담 최소화\n▸ 자동 키 회전 — 보안 강화, 관리 자동화\n▸ 통합 API — 모든 AWS 서비스와 연동 가능\n▸ 감시/감사 — CloudTrail 통합 자동\n\n【오답 체크】\n(A) MFA는 액세스 제어, 키 생성/관리 기능 없음\n(C) ACM은 TLS 인증서 관리, 데이터 암호화 키 역할 불가\n(D) IAM은 액세스 제어만 담당, 키 생성/관리 기능 없음\n\n【시험 포인트】\n 암호화 키 생성/관리 = KMS 필수 / 확장 가능 인프라 = 관리형 서비스 / 운영 부담 최소 = KMS 자동화"
  },
  {
    "id": 123,
    "question": "회사에 두 개의 Amazon EC2 인스턴스에서 호스팅되는 동적 웹 애플리케이션이 있습니다. 회사에는 SSL 종료를 수행하기 위해 각 인스턴스에 있는 자체 SSL 인증서가 있습니다. 최근 트래픽이 증가하고 있으며 운영팀은 SSL 암호화 및 복호화로 인해 웹 서버의 컴퓨팅 용량이 최대 한도에 도달했다고 판단했습니다. 솔루션 설계자는 애플리케이션의 성능을 향상시키기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS Certificate Manager(ACM)를 사용하여 새 SSL 인증서를 생성합니다. 각 인스턴스에 ACM 인증서를 설치합니다.",
      "B": "Amazon S3 버킷 생성 SSL 인증서를 S3 버킷으로 마이그레이션합니다. SSL 종료를 위해 버킷을 참조하도록 EC2 인스턴스를 구성합니다.",
      "C": "다른 EC2 인스턴스를 프록시 서버로 생성합니다. SSL 인증서를 새 인스턴스로 마이그레이션하고 기존 EC2 인스턴스에 직접 연결하도록 구성합니다.",
      "D": "SSL 인증서를 AWS Certificate Manager(ACM)로 가져옵니다. ACM 의 SSL 인증서를 사용하는 HTTPS 리스너로 Application Load Balancer를 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SSL 오프로딩 — 로드 밸런서에서 SSL 암호화/복호화 처리\n▸ ACM — SSL 인증서 관리, 자동 갱신\n\n【정답 포인트】\n▸ 성능 병목: SSL 암호화/복호화 → 로드 밸런서 오프로딩\n▸ ALB + ACM\n(D) — 웹 서버의 CPU 부담 완전 제거\n▸ 백엔드 인스턴스 — HTTP로 통신, SSL 처리 불필요\n▸ 자동 인증서 갱신 — ACM 관리, 운영 부담 감소\n\n【오답 체크】\n(A) 새 인증서도 각 인스턴스에서 처리 → 성능 개선 없음\n(B) S3는 SSL 종료 기능 없음, 잘못된 솔루션\n(C) 프록시 서버 추가 → 여전히 EC2에서 SSL 처리, 성능 미개선\n\n【시험 포인트】\n SSL 성능 병목 = 로드 밸런서 오프로딩 / ALB + ACM 조합 / 백엔드 HTTP 통신으로 CPU 절감"
  },
  {
    "id": 124,
    "question": "회사에 많은 Amazon EC2 인스턴스를 사용하여 완료하는 매우 동적인 배치 처리 작업이 있습니다. 작업은 본질적으로 상태 비저장이며 부정적인 영향 없이 주어진 시간에 시작 및 중지할 수 있으며 일반적으로 완료하는 데 총 60 분 이상이 걸립니다. 회사는 솔루션 설계자에게 작업 요구 사항을 충족하는 확장 가능하고 비용 효율적인 솔루션을 설계하도록 요청했습니다. 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "EC2 스팟 인스턴스를 구현합니다.",
      "B": "EC2 예약 인스턴스 구매.",
      "C": "EC2 온디맨드 인스턴스를 구현합니다.",
      "D": "AWS Lambda에서 처리를 구현합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 스팟 인스턴스 — 미사용 용량 할인(70~90%), 언제든 중단 가능\n▸ 상태 비저장 배치작업 — 중단 후 재시작 가능, 손실 허용\n\n【정답 포인트】\n▸ 비용 효율적 — 스팟 인스턴스가 온디맨드의 1/10 비용\n▸ 확장 가능 — 동적 인스턴스 수 조절로 자동 확장\n▸ 상태 비저장 + 중단 허용 — 스팟 특성과 완벽 부합\n▸ 60분 이상 작업 → Lambda 15분 제한 초과\n\n【오답 체크】\n(B) 예약 인스턴스는 지속적 실행 필요, 배치작업에 비효율적\n(C) 온디맨드는 스팟보다 10배 비용, 비용 효율성 낮음\n(D) Lambda는 최대 15분 실행 제한, 60분+ 작업 불가능\n\n【시험 포인트】\n 상태 비저장 + 중단 허용 + 60분+ = 스팟 인스턴스 / 비용 효율성 = 스팟 할인율 / 확장성 = 동적 인스턴스 조절"
  },
  {
    "id": 125,
    "question": "회사는 AWS 에서 2 계층 전자상거래 웹사이트를 운영합니다. 웹 계층은 트래픽을 Amazon EC2 인스턴스로 보내는 로드 밸런서로 구성됩니다. 데이터베이스 계층은 Amazon RDS DB 인스턴스를 사용합니다. EC2 인스턴스 및 RDS DB 인스턴스는 공용 인터넷에 노출되어서는 안 됩니다. EC2 인스턴스는 타사 웹 서비스를 통한 주문 결제 처리를 완료하기 위해 인터넷 액세스가 필요합니다. 애플리케이션은 고가용성이어야 합니다. 이러한 요구 사항을 충족하는 구성 옵션의 조합은 무엇입니까? (2개를 선택하세요.)",
    "options": {
      "A": "Auto Scaling 그룹을 사용하여 프라이빗 서브넷에서 EC2 인스턴스를 시작합니다. 프라이빗 서브넷에 RDS 다중 AZ DB 인스턴스를 배포합니다.",
      "B": "2 개의 가용 영역에 걸쳐 2 개의 프라이빗 서브넷과 2 개의 NAT 게이트웨이가 있는 VPC를 구성합니다. 프라이빗 서브넷에 Application Load Balancer를 배포합니다.",
      "C": "Auto Scaling 그룹을 사용하여 2 개의 가용 영역에 걸쳐 퍼블릭 서브넷에서 EC2 인스턴스를 시작합니다. 프라이빗 서브넷에 RDS 다중 AZ DB 인스턴스를 배포합니다.",
      "D": "2 개의 가용 영역에 걸쳐 1 개의 퍼블릭 서브넷, 1 개의 프라이빗 서브넷 및 2 개의 NAT 게이트웨이로 VPC 를 구성합니다. 퍼블릭 서브넷에 Application Load Balancer 를 배포합니다.",
      "E": "2 개의 가용 영역에 걸쳐 2 개의 퍼블릭 서브넷, 2 개의 프라이빗 서브넷 및 2 개의 NAT 게이트웨이로 VPC 를 구성합니다. 퍼블릭 서브넷에 Application Load Balancer 를 배포합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ ALB — 사용자 트래픽 수신, 프라이빗 EC2로 라우팅\n▸ NAT 게이트웨이 — 프라이빗 인스턴스의 아웃바운드 인터넷 접근\n\n【정답 포인트】\n(A) 프라이빗 서브넷 EC2 + 다중 AZ RDS — 보안+가용성 확보\n(E) 2 AZ × (퍼블릭 ALB + 프라이빗 EC2) + 2 NAT 게이트웨이 — 고가용성 아키텍처\n▸ ALB(퍼블릭) → EC2(프라이빗) → NAT(결제 서비스)\n▸ 2 NAT/2 AZ — 고가용성 및 인터넷 접근 보장\n\n【오답 체크】\n(B) ALB를 프라이빗에 배포 → 사용자 트래픽 수신 불가\n(C) EC2가 퍼블릭 → 보안 요구사항 위반\n(D) 단일 NAT 게이트웨이 → 가용성 부족, 단일 지점 실패\n\n【시험 포인트】\n ALB는 퍼블릭 / EC2/RDS는 프라이빗 / NAT는 AZ별 배포 / 고가용성 = 2 AZ 이상"
  },
  {
    "id": 126,
    "question": "A solutions architect needs to implement a solution to reduce a company's storage costs. All the company's data is in the Amazon S3 Standard storage class. The company must keep all data for at least 25 years. Data from the most recent 2 years must be highly available and immediately retrievable. Which solution will meet these requirements?",
    "options": {
      "A": "Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive immediately.",
      "B": "Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 2 years.",
      "C": "Use S3 Intelligent-Tiering. Activate the archiving option to ensure that data is archived in S3 Glacier Deep Archive.",
      "D": "Set up an S3 Lifecycle policy to transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) immediately and to S3 Glacier Deep Archive after 2 years."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Lifecycle Policy — 시간 기반 자동 스토리지 클래스 전환\n▸ S3 Glacier Deep Archive — 저비용 아카이브, 180일+ 보관용\n\n【정답 포인트】\n▸ 2년: 고가용성 + 즉시 검색 → S3 Standard 유지\n▸ 2년 초과: 저비용 보존 → Glacier Deep Archive 전환\n▸ 25년 보관 → Deep Archive 장기 보존 특성\n▸ Lifecycle 자동화 → 비용 최적화, 운영 오버헤드 0\n\n【오답 체크】\n(A) 즉시 아카이브 → 2년 내 필요한 데이터 접근 지연\n(C) Intelligent-Tiering은 접근 패턴 기반, 확정적 기간 부적합\n(D) One Zone-IA는 단일 AZ → 25년 장기 보관 시 위험\n\n【시험 포인트】\n \"2년 최근\" + \"25년 보관\" = 2년 후 아카이브 / 즉시 검색 = Standard 유지 / 저비용 장기 = Deep Archive"
  },
  {
    "id": 127,
    "question": "한 미디어 회사가 시스템을 AWS 클라우드로 이전할 가능성을 평가하고 있습니다. 회사는 비디오 처리를 위한 가능한 최대 I/O 성능을 갖춘 최소 10TB 의 스토리지, 미디어 콘텐츠를 저장하기 위한 300TB 의 매우 내구성 있는 스토리지, 더 이상 사용하지 않는 아카이브 미디어에 대한 요구 사항을 충족하기 위해 900TB의 스토리지가 필요합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 서비스 세트를 권장해야 합니까?",
    "options": {
      "A": "최고의 성능을 위한 Amazon EBS, 내구성 있는 데이터 스토리지를 위한 Amazon S3, 아카이브 스토리지를 위한 Amazon S3 Glacier",
      "B": "최고의 성능을 위한 Amazon EBS, 내구성 있는 데이터 스토리지를 위한 Amazon EFS, 아카이브 스토리지를 위한 Amazon S3 Glacier",
      "C": "최고의 성능을 위한 Amazon EC2 인스턴스 스토어, 내구성 있는 데이터 스토리지를 위한 Amazon EFS, 아카이브 스토리지를 위한 Amazon S3",
      "D": "최고의 성능을 위한 Amazon EC2 인스턴스 스토어, 내구성 있는 데이터 스토리지를 위한 Amazon S3, 아카이브 스토리지를 위한 Amazon S3 Glacier"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ EC2 인스턴스 스토어 — 최고 I/O 성능, NVMe SSD, 임시 스토리지\n▸ S3 — 높은 내구성(11개 9), 단일 서비스로 다중 용도\n\n【정답 포인트】\n▸ 10TB 최대 I/O: EC2 인스턴스 스토어(EBS보다 높은 성능)\n▸ 300TB 내구성: S3 Standard(최고 내구성 11개 9)\n▸ 900TB 아카이브: S3 Glacier(저비용 장기 보관)\n▸ 단일 서비스 확장 가능 — S3 무한 용량\n\n【오답 체크】\n(A) EBS는 인스턴스 스토어보다 I/O 성능 낮음\n(B) EFS는 네트워크 파일시스템, 순차 접근, 비디오 처리에 비효율\n(C) EFS(내구성)는 비용 높음, S3가 더 저렴하고 내구성 높음\n\n【시험 포인트】\n \"최대 I/O 성능\" = EC2 인스턴스 스토어 / \"내구성\" = S3 / \"아카이브\" = Glacier / 300TB + 900TB = S3 통합"
  },
  {
    "id": 128,
    "question": "회사에서 AWS 클라우드의 컨테이너에서 애플리케이션을 실행하려고 합니다. 이러한 애플리케이션은 상태 비저장이며 기본 인프라 내에서 중단을 허용할 수 있습니다. 회사는 비용과 운영 오버헤드를 최소화하는 솔루션이 필요합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon EC2 Auto Scaling 그룹의 스팟 인스턴스를 사용하여 애플리케이션 컨테이너를 실행합니다.",
      "B": "Amazon Elastic Kubernetes Service(Amazon EKS) 관리형 노드 그룹에서 스팟 인스턴스를 사용합니다.",
      "C": "Amazon EC2 Auto Scaling 그룹의 온디맨드 인스턴스를 사용하여 애플리케이션 컨테이너를 실행합니다.",
      "D": "Amazon Elastic Kubernetes Service(Amazon EKS) 관리형 노드 그룹에서 온디맨드 인스턴스를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ EKS 관리형 노드 그룹 — 쿠버네티스 인프라 자동 관리, 스팟 스케일링\n▸ 스팟 인스턴스 — 70~90% 할인, 중단 허용\n\n【정답 포인트】\n▸ 컨테이너 최적화 — EKS가 Docker/K8s 네이티브 지원\n▸ 비용 최소화 — 스팟 인스턴스(온디맨드의 1/10)\n▸ 운영 오버헤드 감소 — EKS 관리형 노드 그룹(AWS 자동 관리)\n▸ 상태 비저장 + 중단 허용 — 스팟 특성과 완벽 부합\n\n【오답 체크】\n(A) EC2 Auto Scaling + Docker는 가능하나, K8s 자동화 부족\n(C) 온디맨드는 스팟보다 비용 10배 높음\n(D) 온디맨드 인스턴스는 비용 최소화 원칙 위배\n\n【시험 포인트】\n 컨테이너 + 비용 최소화 = EKS + 스팟 / 관리형 노드 = AWS 운영 담당 / 상태 비저장 = 스팟 중단 허용"
  },
  {
    "id": 129,
    "question": "회사에서 온프레미스에서 다중 계층 웹 애플리케이션을 실행하고 있습니다. 웹 애플리케이션은 컨테이너화되어 있으며 사용자 레코드가 포함된 PostgreSQL 데이터베이스에 연결된 여러 Linux 호스트에서 실행됩니다. 인프라 및 용량 계획을 유지 관리하는 운영 오버헤드가 회사의 성장을 제한하고 있습니다. 솔루션 설계자는 애플리케이션의 인프라를 개선해야 합니다. 솔루션 설계자는 이를 달성하기 위해 어떤 조합의 조치를 취해야 합니까? (2개 선택)",
    "options": {
      "A": "PostgreSQL 데이터베이스를 Amazon Aurora로 마이그레이션합니다.",
      "B": "Amazon EC2 인스턴스에서 호스팅할 웹 애플리케이션을 마이그레이션합니다.",
      "C": "웹 애플리케이션 콘텐츠에 대한 Amazon CloudFront 배포를 설정합니다.",
      "D": "웹 애플리케이션과 PostgreSQL 데이터베이스 간에 Amazon ElastiCache를 설정합니다.",
      "E": "Amazon Elastic Container Service(Amazon ECS)를 사용하여 AWS Fargate에서 호스팅할 웹 애플리케이션을 마이그레이션합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ Aurora — 자동 확장성, 자동 백업, 관리형 PostgreSQL\n▸ Fargate — 컨테이너 실행, 인프라 관리 불필요\n\n【정답 포인트】\n(A) PostgreSQL → Aurora: 자동 확장, 용량 계획 제거\n(E) 컨테이너 + Fargate: 서버리스 컨테이너, 인프라 관리 0\n▸ 조합: 데이터베이스+애플리케이션 모두 관리형 → 운영 오버헤드 최소화\n\n【오답 체크】\n(B) EC2 마이그레이션 → 여전히 인프라 관리 필요\n(C) CloudFront는 정적 콘텐츠, 웹 애플리케이션 성능에 무관\n(D) ElastiCache는 캐싱 계층, 용량 계획 오버헤드 해소 아님\n\n【시험 포인트】\n 운영 오버헤드 감소 = 관리형 서비스 / PostgreSQL = Aurora / 컨테이너 = ECS+Fargate / 인프라 관리 제거"
  },
  {
    "id": 130,
    "question": "애플리케이션은 여러 가용 영역의 Amazon EC2 인스턴스에서 실행됩니다. 인스턴스는 Application Load Balancer 뒤의 Amazon EC2 Auto Scaling 그룹에서 실행됩니다. 애플리케이션은 EC2 인스턴스의 CPU 사용률이 40% 또는 거의 40%일 때 가장 잘 수행됩니다. 솔루션 설계자는 그룹의 모든 인스턴스에서 원하는 성능을 유지하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Auto Scaling 그룹을 동적으로 확장하려면 간단한 확장 정책을 사용합니다.",
      "B": "대상 추적 정책을 사용하여 Auto Scaling 그룹을 동적으로 확장합니다.",
      "C": "AWS Lambda 함수를 사용하여 원하는 Auto Scaling 그룹 용량을 업데이트합니다.",
      "D": "예약된 조정 작업을 사용하여 Auto Scaling 그룹을 확장 및 축소합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 대상 추적 정책 — 목표 메트릭(CPU 40%) 유지, 자동 조정\n▸ 간단한 정책 — 임계값 기반 스케일링, 정확도 낮음\n\n【정답 포인트】\n▸ \"CPU 40% 최적 성능\" → 대상 추적 정책 직접 지정\n▸ 자동 인스턴스 추가/제거 → 목표값 유지 반복\n▸ \"모든 인스턴스에서 원하는 성능\" → 일관성 있는 유지\n▸ 정확한 메트릭 기반 → CPU 목표값 달성\n\n【오답 체크】\n(A) 간단한 정책은 CPU 상한선에서만 작동, 40% 유지 불가\n(C) Lambda는 주기적 갱신, 실시간 목표값 추적 불가\n(D) 예약된 조정은 시간 기반, 부하 변화에 대응 불가\n\n【시험 포인트】\n \"목표 메트릭 유지\" = 대상 추적 정책 / \"CPU 40%\" = 정책에 직접 지정 / 자동 조정 = 인스턴스 수 동적 변경"
  },
  {
    "id": 131,
    "question": "한 회사에서 Amazon S3 버킷을 스토리지로 사용할 파일 공유 애플리케이션을 개발 중입니다. 회사는 Amazon CloudFront 배포를 통해 모든 파일을 제공하려고 합니다. 회사는 S3 URL에 대한 직접 탐색을 통해 파일에 액세스하는 것을 원하지 않습니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "각 S3 버킷에 대한 개별 정책을 작성하여 CloudFront 액세스에 대해서만 읽기 권한을 부여합니다.",
      "B": "IAM 사용자를 생성합니다. 사용자에게 S3 버킷의 객체에 대한 읽기 권한을 부여합니다. 사용자를 CloudFront에 할당합니다.",
      "C": "CloudFront 배포 ID 를 보안 주체로 할당하고 대상 S3 버킷을 Amazon 리소스 이름(ARN)으로 할당하는 S3 버킷 정책을 작성합니다.",
      "D": "원본 액세스 ID(OAI)를 생성합니다. CloudFront 배포에 OAI 를 할당합니다. OAI 만 읽기 권한을 갖도록 S3 버킷 권한을 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ OAI(원본 액세스 ID) — CloudFront 전용 ID, S3 직접 접근 차단\n▸ S3 직접 접근 금지 — CloudFront만 허용하도록 격리\n\n【정답 포인트】\n▸ OAI\n(D) — CloudFront만 S3 접근, 일반 사용자 직접 접근 불가\n▸ 가상 ID 기반 → IAM 사용자 불필요\n▸ 자동 구성 → CloudFront 배포 생성 시 OAI 연동\n▸ 보안 격리 — S3 정책에 OAI만 권한 부여\n\n【오답 체크】\n(A) 정책 텍스트로 CloudFront 특정 불가능, 버킷 정책은 도메인 기반\n(B) IAM 사용자는 장기 크레덴셜 노출 위험, CloudFront 연동 불가\n(C) CloudFront ID는 실제 보안 주체 아님, 정책 작성 불가\n\n【시험 포인트】\n CloudFront만 허용 = OAI 필수 / 일반 사용자 차단 = S3 정책에 OAI만 권한 / 보안 격리 = 가상 ID 기반"
  },
  {
    "id": 132,
    "question": "회사 웹사이트는 사용자에게 다운로드 가능한 과거 실적 보고서를 제공합니다. 웹 사이트에는 전 세계적으로 회사의 웹 사이트 요구 사항을 충족하도록 확장할 수 있는 솔루션이 필요합니다. 솔루션은 비용 효율적이어야 하고 인프라 리소스 프로비저닝을 제한하며 가능한 가장 빠른 응답 시간을 제공해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 조합을 권장해야 합니까?",
    "options": {
      "A": "Amazon CloudFront 및 Amazon S3",
      "B": "AWS Lambda 및 Amazon DynamoDB",
      "C": "Amazon EC2 Auto Scaling이 있는 Application Load Balancer",
      "D": "내부 Application Load Balancer가 있는 Amazon Route 53"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudFront — 글로벌 엣지 로케이션, 정적 파일 캐싱\n▸ S3 — 무제한 확장, 낮은 비용, 파일 저장소\n\n【정답 포인트】\n▸ 정적 보고서 → S3 호스팅(프로비저닝 0)\n▸ 글로벌 사용자 → CloudFront 캐싱(빠른 응답)\n▸ 비용 효율 — 서버리스 조합, 월 비용 최소\n▸ 응답 시간 — 엣지 로케이션에서 캐시 전송\n\n【오답 체크】\n(B) Lambda는 파일 제공 비효율, DynamoDB는 큰 파일 저장 부적합\n(C) EC2 + ALB → 서버 관리, 프로비저닝, 비용 증가\n(D) Route 53은 라우팅만, 콘텐츠 제공 미지원\n\n【시험 포인트】\n 정적 파일 + 글로벌 확장 = CloudFront+S3 / 프로비저닝 0 = 서버리스 / 빠른 응답 = 엣지 로케이션 캐싱"
  },
  {
    "id": 133,
    "question": "회사는 온프레미스에서 Oracle 데이터베이스를 실행합니다. 회사는 AWS 로 마이그레이션하는 과정에서 데이터베이스를 사용 가능한 최신 버전으로 업그레이드하려고 합니다. 회사는 또한 데이터베이스에 대한 재해 복구(DR)를 설정하려고 합니다. 회사는 정상 운영 및 DR 설정을 위한 운영 오버헤드를 최소화해야 합니다. 회사는 또한 데이터베이스의 기본 운영 체제에 대한 액세스를 유지 관리해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Oracle 데이터베이스를 Amazon EC2 인스턴스로 마이그레이션합니다. 다른 AWS 리전으로 데이터베이스 복제를 설정합니다.",
      "B": "Oracle 데이터베이스를 Oracle 용 Amazon RDS 로 마이그레이션합니다. 교차 리전 자동 백업을 활성화하여 다른 AWS 리전에 스냅샷을 복제합니다.",
      "C": "Oracle 데이터베이스를 Oracle 용 Amazon RDS Custom 으로 마이그레이션합니다. 다른 AWS 리전의 데이터베이스에 대한 읽기 전용 복제본을 생성합니다.",
      "D": "Oracle 데이터베이스를 Oracle용 Amazon RDS로 마이그레이션합니다. 다른 가용 영역에 대기 데이터베이스를 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ RDS Custom — OS 접근 가능, 관리형 DB 기능 결합\n▸ 읽기 전용 복제본 — 리전별 DR, 자동 동기화\n\n【정답 포인트】\n▸ OS 액세스 필요 → RDS Custom(일반 RDS는 OS 접근 불가)\n▸ 최신 버전 업그레이드 → Custom이 유연한 업그레이드 지원\n▸ DR 설정(리전 기반) → 읽기 복제본(다른 리전)\n▸ 운영 오버헤드 최소 → Custom + 자동 복제\n\n【오답 체크】\n(A) EC2는 OS 접근 가능하나, 패치/백업/복제 수동 관리\n(B) 일반 RDS는 OS 접근 불가, 요구사항 미충족\n(D) 다중 AZ는 리전 내 DR, 진정한 재해 복구 아님(같은 리전)\n\n【시험 포인트】\n OS 액세스 + 관리형 = RDS Custom / 버전 업그레이드 = Custom 지원 / 리전 기반 DR = 읽기 복제본 / 최소 오버헤드 = 자동화"
  },
  {
    "id": 134,
    "question": "한 회사에서 애플리케이션을 서버리스 솔루션으로 이동하려고 합니다. 서버리스 솔루션은 SL 을 사용하여 기존 및 신규 데이터를 분석해야 합니다. 회사는 데이터를 Amazon S3 버킷에 저장합니다. 데이터는 암호화가 필요하며 다른 AWS 리전에 복제해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "새 S3 버킷을 생성합니다. 데이터를 새 S3 버킷에 로드합니다. S3 교차 리전 복제(CRR)를 사용하여 암호화된 객체를 다른 리전의 S3 버킷에 복제합니다. AWS KMS 다중 리전 kay(SSE-KMS)로 서버 측 암호화를 사용합니다. Amazon Athena 를 사용하여 데이터를 쿼리합니다.",
      "B": "새 S3 버킷을 생성합니다. 데이터를 새 S3 버킷에 로드합니다. S3 교차 리전 복제(CRR)를 사용하여 암호화된 객체를 다른 리전의 S3 버킷에 복제합니다. AWS KMS 다중 리전 키(SSE-KMS)로 서버 측 암호화를 사용합니다. Amazon RDS 를 사용하여 데이터를 쿼리합니다.",
      "C": "기존 S3 버킷에 데이터를 로드합니다. S3 교차 리전 복제(CRR)를 사용하여 암호화된 객체를 다른 리전의 S3 버킷에 복제합니다. Amazon S3 관리형 암호화 키(SSE-S3)로 서버 측 암호화를 사용합니다. Amazon Athena를 사용하여 데이터를 쿼리합니다.",
      "D": "기존 S3 버킷에 데이터를 로드합니다. S3 교차 리전 복제(CRR)를 사용하여 암호화된 객체를 다른 리전의 S3 버킷에 복제합니다. Amazon S3 관리형 암호화 키(SSE-S3)로 서버 측 암호화를 사용합니다. Amazon RDS를 사용하여 데이터를 쿼리합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SSE-S3 — S3 자체 관리 암호화로 CRR 시 자동 호환\n▸ Athena — S3 데이터 직접 SQL 분석, 운영 오버헤드 최소\n\n【정답 포인트】\n▸ 기존 버킷 재사용 → 신규 생성 비용 절감\n▸ SSE-S3 + CRR → 자동 암호화 복제 지원\n▸ Athena 쿼리 → 서버리스, 인프라 관리 불필요\n\n【오답 체크】\n(A) KMS 다중 리전 → A/B 모두 새 버킷 생성으로 불필요 비용\n(B) RDS → 데이터 동기화 관리 필요, 운영 오버헤드 증가\n(D) SSE-S3 + RDS 조합 → CRR 호환성 문제, 복잡도 증가\n\n【시험 포인트】\n서버리스 = 최소 운영 → Athena 우선, CRR + S3 암호화 자동화"
  },
  {
    "id": 135,
    "question": "회사는 AWS에서 워크로드를 실행합니다. 회사는 외부 공급자의 서비스에 연결해야 합니다. 서비스는 공급자의 VPC에서 호스팅됩니다. 회사 보안 팀에 따르면 연결은 비공개여야 하며 대상 서비스로 제한되어야 합니다. 연결은 회사의 VPC에서만 시작되어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "회사의 VPC 와 공급자의 VPC 간에 VPC 피어링 연결을 생성합니다. 대상 서비스에 연결하도록 라우팅 테이블을 업데이트합니다.",
      "B": "공급자에게 VPC 에 가상 프라이빗 게이트웨이를 생성하도록 요청합니다. AWS PrivateLink를 사용하여 대상 서비스에 연결합니다.",
      "C": "회사의 VPUpdate 라우팅 테이블의 퍼블릭 서브넷에 NAT 게이트웨이를 생성하여 대상 서비스에 연결합니다.",
      "D": "공급자에게 대상 서비스에 대한 VPC 엔드포인트를 생성하도록 요청합니다. AWS PrivateLink를 사용하여 대상 서비스에 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS PrivateLink — VPC 내 서비스 노출, 인터넷 우회\n▸ VPC 엔드포인트 — 공급자가 생성, 회사는 엔드포인트 소비\n\n【정답 포인트】\n▸ PrivateLink 구조 → 공급자(NLB) + 회사(엔드포인트) 양측 필요\n▸ 비공개 연결 → 인터넷 미경유, 완전 격리\n▸ 서비스 제한 → 특정 대상만 노출 가능\n\n【오답 체크】\n(A) VPC 피어링 → 양쪽 전체 네트워크 열림, 세분화 불가\n(B) 가상 프라이빗 게이트웨이 → AWS 용어 아님\n(C) NAT 게이트웨이 → 퍼블릭 경로, 비공개 아님\n\n【시험 포인트】\n비공개+서비스 제한+회사 시작 = PrivateLink(공급자 엔드포인트)"
  },
  {
    "id": 136,
    "question": "회사는 온프레미스 PostgreSQL 데이터베이스를 Amazon Aurora PostgreSQL 로 마이그레이션하고 있습니다. 온-프레미스 데이터베이스는 온라인 상태를 유지하고 마이그레이션 중에 액세스할 수 있어야 합니다. Aurora 데이터베이스는 온프레미스 데이터베이스와 동기화된 상태를 유지해야 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자가 취해야 하는 조치의 조합은 무엇입니까? (2개를 선택하세요.)",
    "options": {
      "A": "지속적인 복제 작업을 만듭니다.",
      "B": "온프레미스 데이터베이스의 데이터베이스 백업을 생성합니다.",
      "C": "AWS Database Migration Service(AWS DMS) 복제 서버를 생성합니다.",
      "D": "AWS Schema Conversion Tool(AWS SCT)을 사용하여 데이터베이스 스키마를 변환합니다.",
      "E": "데이터베이스 동기화를 모니터링하는 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ DMS — 마이그레이션 중 온프레미스 DB 온라인 유지\n▸ 지속적 복제 → CDC(Change Data Capture) 기반 동기화\n\n【정답 포인트】\n▸\n(A) 지속적 복제 → DMS로 마이그레이션 후 실시간 동기화\n▸\n(C) DMS 복제 서버 → 온프레미스↔Aurora 지속 연결 인프라\n▸ 조합 효과 → 초기 로드 + 지속적 변경사항 동기화\n\n【오답 체크】\n(B) 백업 → 일회성, 지속 동기화 불가\n(D) SCT → PostgreSQL은 호환성 높아 필수 아님\n(E) EventBridge → 모니터링만, 복제 기능 없음\n\n【시험 포인트】\n온라인 마이그레이션+동기화 = DMS + 지속적 복제 작업"
  },
  {
    "id": 137,
    "question": "회사는 AWS Organizations를 사용하여 각 사업부에 대한 전용 AWS 계정을 생성하여 요청 시 각 사업부의 계정을 독립적으로 관리합니다. 루트 이메일 수신자가 한 계정의 루트 사용자 이메일 주소로 전송된 알림을 놓쳤습니다. 회사는 향후 모든 알림을 놓치지 않기를 원합니다. 향후 알림은 계정 관리자로 제한되어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS 계정 루트 사용자 이메일 주소로 전송되는 알림 이메일 메시지를 조직의 모든 사용자에게 전달하도록 회사 이메일 서버를 구성합니다.",
      "B": "모든 AWS 계정 루트 사용자 이메일 주소를 알림에 응답할 수 있는 소수의 관리자에게 전달되는 배포 목록으로 구성합니다. AWS Organizations 콘솔에서 또는 프로그래밍 방식으로 AWS 계정 대체 연락처를 구성합니다.",
      "C": "경보를 모니터링하고 해당 경보를 적절한 그룹에 전달할 책임이 있는 한 명의 관리자에게 모든 AWS 계정 루트 사용자 이메일 메시지를 보내도록 구성합니다.",
      "D": "동일한 루트 사용자 이메일 주소를 사용하도록 기존의 모든 AWS 계정과 새로 생성된 모든 계정을 구성합니다. AWS Organizations 콘솔에서 또는 프로그래밍 방식으로 AWS 계정 대체 연락처를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 대체 연락처 — Organizations에서 계정별 관리자 지정\n▸ 배포 목록 → 루트 이메일 일괄 관리\n\n【정답 포인트】\n▸ 배포 목록 구성 → 소수 관리자에게 통합 수신\n▸ Organizations 대체 연락처 → 공식 AWS 기능\n▸ 이중 구조 → 놓침 방지 + 관리자 제한\n\n【오답 체크】\n(A) 모든 사용자 → 범위 확대, 관리자 제한 위배\n(C) 단일 관리자 → 병목 위험, 확장성 낮음\n(D) 동일 이메일 → 계정별 독립성 상실, Organizations 의도 위배\n\n【시험 포인트】\n루트 알림 누락 → Organizations 대체 연락처 + 배포 목록"
  },
  {
    "id": 138,
    "question": "회사는 AWS 에서 전자 상거래 애플리케이션을 실행합니다. 모든 새 주문은 단일 가용 영역의 Amazon EC2 인스턴스에서 실행되는 RabbitMQ 대기열에 마사지로 게시됩니다. 이러한 메시지는 별도의 EC2 인스턴스에서 실행되는 다른 애플리케이션에서 처리됩니다. 이 애플리케이션은 다른 EC2 인스턴스의 PostgreSQL 데이터베이스에 세부 정보를 저장합니다. 모든 EC2 인스턴스는 동일한 가용 영역에 있습니다. 회사는 최소한의 운영 오버헤드로 최고의 가용성을 제공하도록 아키텍처를 재설계해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "대기열을 Amazon MQ 에서 RabbitMQ 인스턴스의 중복 쌍(활성/대기)으로 마이그레이션합니다. 애플리케이션을 호스팅하는 EC2 인스턴스에 대한 다중 AZ Auto Scaling 그룹을 생성합니다. PostgreSQL 데이터베이스를 호스팅하는 EC2 인스턴스에 대해 다른 다중 AZ Auto Scaling 그룹을 생성합니다.",
      "B": "대기열을 Amazon MQ 에서 RabbitMQ 인스턴스의 중복 쌍(활성/대기)으로 마이그레이션합니다. 애플리케이션을 호스팅하는 EC2 인스턴스에 대한 다중 AZ Auto Scaling 그룹을 생성합니다. PostgreSQL 용 Amazon RDS 의 다중 AZ 배포에서 실행하도록 데이터베이스를 마이그레이션합니다.",
      "C": "RabbitMQ 대기열을 호스팅하는 EC2 인스턴스용 다중 AZ Auto Scaling 그룹을 생성합니다. 애플리케이션을 호스팅하는 EC2 인스턴스에 대해 다른 다중 AZ Auto Scaling 그룹을 생성합니다. PostgreSQL 용 Amazon RDS 의 다중 AZ 배포에서 실행하도록 데이터베이스를 마이그레이션합니다.",
      "D": "RabbitMQ 대기열을 호스팅하는 EC2 인스턴스용 다중 AZ Auto Scaling 그룹을 생성합니다. 애플리케이션을 호스팅하는 EC2 인스턴스에 대해 다른 다중 AZ Auto Scaling 그룹을 생성합니다. PostgreSQL 데이터베이스를 호스팅하는 EC2 인스턴스에 대한 세 번째 다중 AZ Auto Scaling 그룹을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon MQ — 관리형 RabbitMQ, 높은 가용성\n▸ RDS 다중 AZ — 자동 페일오버, 운영 오버헤드 최소\n\n【정답 포인트】\n▸ MQ 활성/대기 → RabbitMQ 자동 페일오버\n▸ App 다중 AZ Scaling → 가용성+탄력성\n▸ RDS Multi-AZ → DB 고가용성 자동 관리\n\n【오답 체크】\n(A) EC2 자체 관리 DB → 운영 오버헤드 높음\n(C) EC2 RabbitMQ → MQ 관리 이점 상실\n(D) 세 번째 ASG → 불필요한 복잡성, 운영 부담\n\n【시험 포인트】\n단일 AZ → 다중 AZ + 관리형 서비스(MQ, RDS)"
  },
  {
    "id": 139,
    "question": "보고 팀은 Amazon S3 버킷에서 매일 파일을 수신합니다. 보고 팀은 이 초기 S3 버킷의 파일을 수동으로 검토하고 Amazon QuickSight 와 함께 사용하기 위해 매일 같은 시간에 분석 S3 버킷으로 복사합니다. 추가 팀이 초기 S3 버킷에 더 큰 크기의 더 많은 파일을 보내기 시작했습니다. 보고 팀은 파일이 초기 S3 버킷에 들어갈 때 자동으로 분석 S3 버킷을 이동하려고 합니다. 또한 보고 팀은 AWS Lambda 함수를 사용하여 복사된 데이터에서 패턴 일치 코드를 실행하려고 합니다. 또한 보고 팀은 데이터 파일을 Amazon SageMaker Pipelines 의 파이프라인으로 보내려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": {
      "A": "분석 S3 버킷에 파일을 복사하는 Lambda 함수를 생성합니다. 분석 S3 버킷에 대한 S3 이벤트 알림을 생성합니다. 이벤트 알림의 대상으로 Lambda 및 SageMaker 파이프라인을 구성합니다. s3:ObjectCreated:Put을 이벤트 유형으로 구성합니다.",
      "B": "분석 S3 버킷에 파일을 복사하는 Lambda 함수를 생성합니다. Amazon EventBridge(Amazon CloudWatch Events)에 이벤트 알림을 보내도록 분석 S3 버킷을 구성합니다. EventBridge(CloudWatch 이벤트)에서 ObjectCreated 규칙을 구성합니다. 규칙의 대상으로 Lambda 및 SageMaker 파이프라인을 구성합니다.",
      "C": "S3 버킷 간에 S3 복제를 구성합니다. 분석 S3 버킷에 대한 S3 이벤트 알림을 생성합니다. 이벤트 알림의 대상으로 Lambda 및 SageMaker 파이프라인을 구성합니다. s3:ObjectCreated:Put을 이벤트 유형으로 구성합니다.",
      "D": "S3 버킷 간에 S3 복제를 구성합니다. Amazon EventBridge(Amazon CloudWatch Events)에 이벤트 알림을 보내도록 분석 S3 버킷을 구성합니다. EventBridge(CloudWatch 이벤트)에서 ObjectCreated 규칙을 구성합니다. 규칙의 대상으로 Lambda 및 SageMaker 파이프라인을 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 복제 — 초기→분석 버킷 자동 전송\n▸ EventBridge — 복제 이벤트 후 Lambda+SageMaker 트리거\n\n【정답 포인트】\n▸ S3 복제 → 자동 파일 이동, Lambda 불필요\n▸ EventBridge + ObjectCreated → 복제 완료 후 워크플로우\n▸ 다중 대상 연결 → Lambda(패턴 분석) + SageMaker(파이프라인)\n\n【오답 체크】\n(A) Lambda로 복사 + S3 이벤트 → 불필요한 함수, EventBridge 미활용\n(B) Lambda 복사 → 동기화 복잡, 중복 트리거 위험\n(C) S3 이벤트만 → EventBridge 라우팅 이점 상실\n\n【시험 포인트】\n자동 이동+다중 액션 = S3 복제 + EventBridge"
  },
  {
    "id": 140,
    "question": "솔루션 설계자는 회사가 AWS 에서 애플리케이션을 실행하는 비용을 최적화할 수 있도록 도와야 합니다. 애플리케이션은 아키텍처 내 컴퓨팅을 위해 Amazon EC2 인스턴스, AWS Fargate 및 AWS Lambda를 사용합니다. EC2 인스턴스는 애플리케이션의 데이터 수집 계층을 실행합니다. EC2 사용은 산발적이고 예측할 수 없습니다. EC2 인스턴스에서 실행되는 워크로드는 언제든지 중단될 수 있습니다. 애플리케이션 프런트 엔드는 Fargate 에서 실행되고 Lambda 는 API 계층을 제공합니다. 프론트엔드 활용도와 API 계층 활용도는 내년에 예측할 수 있습니다. 이 애플리케이션을 호스팅하는 데 가장 비용 효율적인 솔루션을 제공하는 구매 옵션 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "데이터 수집 계층에 스팟 인스턴스 사용",
      "B": "데이터 수집 계층에 온디맨드 인스턴스 사용",
      "C": "프런트 엔드 및 API 계층에 대한 1년 Compute Savings Plan을 구매합니다.",
      "D": "데이터 수집 계층에 대한 1년 전체 선결제 예약 인스턴스를 구매합니다.",
      "E": "프런트 엔드 및 API 계층을 위한 1년 EC2 인스턴스 Savings Plan을 구매합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ 스팟 — 변동성 워크로드, 저비용, 중단 가능\n▸ Compute Savings Plan — Fargate/Lambda 포함, 예측 가능 워크로드\n\n【정답 포인트】\n▸\n(A) 스팟 → 예측 불가 데이터 수집, 중단 허용\n▸\n(C) Compute Plan → 1년 예측, Fargate+Lambda 커버\n▸ Fargate/Lambda 미보유 → EC2 Plan\n(E) 부적절\n\n【오답 체크】\n(B) 온디맨드 → 비용 최적 미달\n(D) 1년 예약 → 예측 불가 워크로드에 낭비\n(E) EC2 Plan → Fargate/Lambda 미포함\n\n【시험 포인트】\n변동성+예측성 혼합 → 스팟(변동) + Savings Plan(고정)"
  },
  {
    "id": 141,
    "question": "한 회사는 사용자에게 글로벌 속보, 지역 경보 및 날씨 업데이트를 제공하는 웹 기반 포털을 운영합니다. 포털은 정적 콘텐츠와 동적 콘텐츠를 혼합하여 각 사용자에게 개인화된 보기를 제공합니다. 콘텐츠는 ALB(Application Load Balancer) 뒤의 Amazon EC2 인스턴스에서 실행되는 API 서버를 통해 HTTPS 를 통해 제공됩니다. 회사는 포털이 이 콘텐츠를 가능한 한 빨리 전 세계 사용자에게 제공하기를 원합니다. 솔루션 설계자는 모든 사용자의 대기 시간을 최소화하도록 애플리케이션을 어떻게 설계해야 합니까?",
    "options": {
      "A": "단일 AWS 리전에 애플리케이션 스택을 배포합니다. Amazon CloudFront 를 사용하여 ALB를 오리진으로 지정하여 모든 정적 및 동적 콘텐츠를 제공합니다.",
      "B": "두 AWS 리전에 애플리케이션 스택을 배포합니다. Amazon Route 53 지연 시간 라우팅 정책을 사용하여 가장 가까운 리전의 ALB에서 모든 콘텐츠를 제공합니다.",
      "C": "단일 AWS 리전에 애플리케이션 스택을 배포합니다. Amazon CloudFront 를 사용하여 정적 콘텐츠를 제공합니다. ALB에서 직접 동적 콘텐츠를 제공합니다.",
      "D": "두 AWS 리전에 애플리케이션 스택을 배포합니다. Amazon Route 53 지리적 위치 라우팅 정책을 사용하여 가장 가까운 리전에서 ALB의 모든 콘텐츠를 제공합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudFront — 글로벌 엣지 캐싱, 정적+동적 모두 지원\n▸ 지연 시간 최소화 → 단일 리전+CDN 가장 효율적\n\n【정답 포인트】\n▸ CloudFront 오리진 ALB → 캐시 + 동적 콘텐츠 실시간 응답\n▸ 단일 리전 → 비용 절감, 관리 간소\n▸ 글로벌 엣지 로케이션 → 자동 최적 경로\n\n【오답 체크】\n(B) 두 리전 → 동기화 복잡, 지연시간 라우팅 느림\n(C) 정적/동적 분리 → 동적 콘텐츠 지연 증가\n(D) 지리적 라우팅 → Route 53 지연, 엣지 우위 상실\n\n【시험 포인트】\n글로벌 지연 최소 = CloudFront(단일 오리진)"
  },
  {
    "id": 142,
    "question": "게임 회사는 고가용성 아키텍처를 설계하고 있습니다. 애플리케이션은 수정된 Linux 커널에서 실행되며 UDP 기반 트래픽만 지원합니다. 회사는 최상의 사용자 경험을 제공하기 위해 프런트 엔드 계층이 필요합니다. 해당 계층은 대기 시간이 짧고 가장 가까운 엣지 로케이션으로 트래픽을 라우팅하고 애플리케이션 엔드포인트에 진입하기 위한 고정 IP 주소를 제공해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "요청을 Application Load Balancer로 전달하도록 Amazon Route 53을 구성합니다. AWS Application Auto Scaling의 애플리케이션에 AWS Lambda를 사용합니다.",
      "B": "요청을 Network Load Balancer로 전달하도록 Amazon CloudFront를 구성합니다. AWS Application Auto Scaling 그룹의 애플리케이션에 AWS Lambda를 사용합니다.",
      "C": "요청을 Network Load Balancer 로 전달하도록 AWS Global Accelerator 를 구성합니다. EC2 Auto Scaling 그룹의 애플리케이션에 Amazon EC2 인스턴스를 사용합니다.",
      "D": "요청을 Application Load Balancer 로 전달하도록 Amazon API Gateway 를 구성합니다. EC2 Auto Scaling 그룹의 애플리케이션에 Amazon EC2 인스턴스를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Global Accelerator — UDP 지원, 고정 IP, 엣지 라우팅\n▸ NLB — UDP 프로토콜, 저지연\n\n【정답 포인트】\n▸ UDP 게임 → ALB 불지원, NLB 필수\n▸ Global Accelerator → 엣지 로케이션, 고정 IP 제공\n▸ EC2 → 수정 커널 실행 가능\n\n【오답 체크】\n(A) ALB → UDP 미지원, Lambda → 커널 수정 불가\n(B) CloudFront → HTTP/HTTPS만, UDP 미지원\n(D) API Gateway → HTTP 기반, UDP 미지원\n\n【시험 포인트】\nUDP+고정IP+엣지 = Global Accelerator + NLB"
  },
  {
    "id": 143,
    "question": "회사에서 기존 온프레미스 모놀리식 애플리케이션을 AWS 로 마이그레이션하려고 합니다. 회사는 프론트엔드 코드와 백엔드 코드를 최대한 많이 유지하려고 합니다. 그러나 회사는 응용 프로그램을 더 작은 응용 프로그램으로 나누기를 원합니다. 다른 팀에서 각 애플리케이션을 관리합니다. 회사는 운영 오버헤드를 최소화하는 확장성이 뛰어난 솔루션이 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS Lambda 에서 애플리케이션을 호스팅합니다. 애플리케이션을 Amazon API Gateway와 통합합니다.",
      "B": "AWS Amplify를 사용하여 애플리케이션을 호스팅합니다. AWS Lambda와 통합된 Amazon API Gateway API에 애플리케이션을 연결합니다.",
      "C": "Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. Auto Scaling 그룹의 EC2 인스턴스를 대상으로 하여 Application Load Balancer를 설정합니다.",
      "D": "Amazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. Amazon ECS를 대상으로 하여 Application Load Balancer를 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ ECS — 컨테이너 기반 마이크로서비스, 코드 변경 최소\n▸ ALB — 여러 애플리케이션 라우팅\n\n【정답 포인트】\n▸ 기존 코드 유지 → 컨테이너화만, 재작성 불필요\n▸ 분산 관리 → ECS 서비스별 독립 배포\n▸ 확장성 → ALB + 동적 포트 매핑\n\n【오답 체크】\n(A) Lambda → 모놀리식 코드 변환 높음\n(B) Amplify → 프론트엔드 전문, 백엔드 분산 미흡\n(C) EC2 → 운영 오버헤드 증가\n\n【시험 포인트】\n모놀리식→마이크로서비스 + 코드 유지 = ECS"
  },
  {
    "id": 144,
    "question": "한 회사는 최근 글로벌 전자 상거래 애플리케이션의 데이터 저장소로 Amazon Aurora 를 사용하기 시작했습니다. 대규모 보고서가 실행되면 개발자는 전자상거래 애플리케이션의 성능이 좋지 않다고 보고합니다. Amazon CloudWatch의 지표를 검토한 후 솔루션 설계자는 월별 보고서가 실행될 때 ReadIOPS 및 CPUUtilizalion 지표가 급증하고 있음을 발견했습니다. 가장 비용 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "월별 보고를 Amazon Redshift로 마이그레이션합니다.",
      "B": "월별 보고를 Aurora 복제본으로 마이그레이션합니다.",
      "C": "Aurora 데이터베이스를 더 큰 인스턴스 클래스로 마이그레이션합니다.",
      "D": "Aurora 인스턴스에서 프로비저닝된 IOPS를 늘립니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Aurora 복제본 — 읽기 전용, IOPS 격리\n▸ 읽기 부하 분산 — 프라이머리 영향 최소\n\n【정답 포인트】\n▸ ReadIOPS 급증 → 읽기 쿼리 분리\n▸ 복제본에 보고서 → 애플리케이션 성능 보호\n▸ 비용 효율 → Redshift보다 경제적\n\n【오답 체크】\n(A) Redshift → 데이터 마이그레이션, 관리 복잡, 고비용\n(C) 대형 인스턴스 → 쓰기도 증가, 비용 낭비\n(D) IOPS 증설 → 문제의 근본 해결 아님\n\n【시험 포인트】\n보고서 읽기 부하 격리 = Aurora 복제본"
  },
  {
    "id": 145,
    "question": "회사는 단일 Amazon EC2 온디맨드 인스턴스에서 웹 사이트 분석 애플리케이션을 호스팅합니다. 분석 소프트웨어는 PHP 로 작성되었으며 MySQL 데이터베이스를 사용합니다. 분석 소프트웨어, PHP 를 제공하는 웹 서버 및 데이터베이스 서버는 모두 EC2 인스턴스에서 호스팅됩니다. 응용 프로그램은 바쁜 시간 동안 성능 저하 징후를 보이고 5xx 오류를 표시합니다. 회사는 애플리케이션을 원활하게 확장해야 합니다. 어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족합니까?",
    "options": {
      "A": "데이터베이스를 Amazon RDS for MySQL DB 인스턴스로 마이그레이션합니다. 웹 애플리케이션의 AMI 를 생성합니다. AMI 를 사용하여 두 번째 EC2 온디맨드 인스턴스를 시작합니다. Application Load Balancer를 사용하여 각 EC2 인스턴스에 로드를 분산합니다.",
      "B": "데이터베이스를 Amazon RDS for MySQL DB 인스턴스로 마이그레이션합니다. 웹 애플리케이션의 AMI 를 생성합니다. AMI 를 사용하여 두 번째 EC2 온디맨드 인스턴스를 시작합니다. Amazon Route 53 가중 라우팅을 사용하여 두 EC2 인스턴스에 로드를 분산합니다.",
      "C": "데이터베이스를 Amazon Aurora MySQL DB 인스턴스로 마이그레이션합니다. AWS Lambda 함수를 생성하여 EC2 인스턴스를 중지하고 인스턴스 유형을 변경합니다. CPU 사용률이 75%를 초과할 때 Lambda 함수를 호출하는 Amazon CloudWatch 경보를 생성합니다.",
      "D": "데이터베이스를 Amazon Aurora MySQL DB 인스턴스로 마이그레이션합니다. 웹 애플리케이션의 AMI 를 생성합니다. 시작 템플릿에 AMI 를 적용합니다. 시작 템플릿으로 Auto Scaling 그룹 생성 스팟 집합을 사용하도록 시작 템플릿을 구성합니다. Auto Scaling 그룹에 Application Load Balancer를 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Auto Scaling — 자동 용량 조정, 원활한 확장\n▸ 스팟 집합 — 비용 절감, 비용 효율성 극대\n▸ Aurora — 빠른 성능\n\n【정답 포인트】\n▸ ASG + ALB → 자동 확장, 로드 분산 최적\n▸ 스팟 → 비용 효율적\n▸ Aurora → 높은 IOPS, 성능 보증\n▸ 완전 자동화 → 수동 개입 불필요\n\n【오답 체크】\n(A) 온디맨드만 → 비용 높음, 자동화 부족\n(B) Route 53 가중치 → ALB보다 느림, 자동 확장 미지원\n(C) Lambda 수동 → 느린 확장, 인스턴스 재타입 위험\n\n【시험 포인트】\n자동 확장+비용 효율 = ASG + 스팟 + Aurora"
  },
  {
    "id": 146,
    "question": "회사는 Application Load Balancer 뒤의 Amazon EC2 온디맨드 인스턴스 그룹에서 프로덕션 환경에서 상태 비저장 웹 애플리케이션을 실행합니다. 매일 8 시간 동안 애플리케이션 사용량이 많습니다. 응용 프로그램 사용량은 보통이고 밤새 안정적입니다. 주말에는 애플리케이션 사용량이 적습니다. 이 회사는 애플리케이션의 가용성에 영향을 주지 않으면서 EC2 비용을 최소화하려고 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "전체 워크로드에 대해 스팟 인스턴스를 사용합니다.",
      "B": "기본 사용량 수준에 대해 예약 인스턴스를 사용합니다. 애플리케이션에 필요한 추가 용량에 대해 스팟 인스턴스를 사용합니다.",
      "C": "기준 사용 수준에 대해 온디맨드 인스턴스를 사용합니다. 애플리케이션에 필요한 추가 용량에 대해 스팟 인스턴스를 사용합니다.",
      "D": "기본 사용량 수준에 대해 전용 인스턴스를 사용합니다. 애플리케이션에 필요한 추가 용량에 대해 온디맨드 인스턴스를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 예약 인스턴스 — 예측 가능, 저비용\n▸ 스팟 → 변동성, 초저비용, 중단 허용\n\n【정답 포인트】\n▸ 기본 용량(24시간) → 예약 인스턴스로 보증\n▸ 피크 용량(8시간 추가) → 스팟으로 절감\n▸ 상태 비저장 → 인스턴스 중단 영향 최소\n\n【오답 체크】\n(A) 스팟만 → 예측 불가, 가용성 위험\n(C) 온디맨드+스팟 → 온디맨드 비용 낭비\n(D) 전용+온디맨드 → 예약 인스턴스 대비 높음\n\n【시험 포인트】\n예측 변동 = 예약(기본) + 스팟(추가)"
  },
  {
    "id": 147,
    "question": "회사는 중요한 애플리케이션에 대한 애플리케이션 로그 파일을 10 년 동안 보관해야 합니다. 애플리케이션 팀은 문제 해결을 위해 지난 달의 로그에 정기적으로 액세스하지만 1 개월 이상 된 로그는 거의 액세스하지 않습니다. 애플리케이션은 매월 10TB 이상의 로그를 생성합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 스토리지 옵션은 무엇입니까?",
    "options": {
      "A": "Amazon S3에 로그를 저장합니다. AWS Backup을 사용하여 1개월 이상 된 로그를 S3 Glacier Deep Archive로 이동합니다.",
      "B": "Amazon S3에 로그를 저장합니다. S3 수명 주기 정책을 사용하여 1개월 이상 된 로그를 S3 Glacier Deep Archive로 이동합니다.",
      "C": "Amazon CloudWatch Logs에 로그를 저장합니다. AWS Backup을 사용하여 1개월 이상 된 로그를 S3 Glacier Deep Archive로 이동합니다.",
      "D": "Amazon CloudWatch Logs에 로그를 저장합니다. Amazon S3 수명 주기 정책을 사용하여 1개월 이상 된 로그를 S3 Glacier Deep Archive로 이동합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 수명 주기 → 자동 티어링, 비용 최적\n▸ Glacier Deep Archive → 10년 보관, 초저비용\n\n【정답 포인트】\n▸ S3 직접 저장 → CloudWatch Logs보다 비용 절감\n▸ 수명 주기 정책 → 자동 이동, 관리 간소\n▸ Deep Archive → 7년 초과 요구사항 최적\n\n【오답 체크】\n(A) AWS Backup → 수명 주기 정책보다 비용 높음\n(C) CloudWatch Logs → 저장소 비용 높음, Backup 불필요\n(D) CloudWatch + S3 Lifecycle → 불가능(CWL 자체 전환 미지원)\n\n【시험 포인트】\n빈번한 접근(1월) + 장기 보관(10년) = S3 + 수명 주기"
  },
  {
    "id": 148,
    "question": "회사에는 다음 구성 요소를 포함하는 데이터 수집 워크플로가 있습니다. * 새로운 데이터 전송에 대한 알림을 받는 Amazon Simple Notation Service(Amazon SNS) 주제입니다. * 데이터를 처리하고 저장하는 AWS Lambda 함수입니다. 네트워크 연결 문제로 인해 수집 워크플로가 때때로 실패합니다. 임기가 발생하면 회사에서 수동으로 작업을 다시 실행하지 않는 한 해당 데이터가 수집되지 않습니다. 모든 알림이 최종적으로 처리되도록 하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": {
      "A": "여러 가용 영역에 걸쳐 배포할 Lambda 함수를 구성합니다.",
      "B": "Lambda 함수의 구성을 수정하여 함수에 대한 CPU 및 메모리 할당을 늘립니다.",
      "C": "재시도 횟수와 재시도 간 대기 시간을 모두 늘리도록 SNS 주제의 재시도 전략을 구성합니다.",
      "D": "Amazon Simple Queue Service(Amazon SQS) 대기열을 장애 시 대상으로 구성합니다. 대기열의 메시지를 처리하도록 Lambda 함수를 수정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ DLQ(Dead Letter Queue) — 실패 메시지 보관\n▸ SQS → SNS → 신뢰성 증대\n\n【정답 포인트】\n▸ 장애 시 대상 → SQS 대기열로 재시도\n▸ Lambda 폴링 → 대기열에서 메시지 처리\n▸ 영구 손실 방지 → 모든 메시지 처리 보증\n\n【오답 체크】\n(A) 다중 AZ → 네트워크 장애 해결 불가\n(B) 메모리 증설 → 네트워크 문제와 무관\n(C) SNS 재시도 → 한계 있음, 실패 메시지 손실 가능\n\n【시험 포인트】\n신뢰성 보증 = SQS DLQ + Lambda 폴링"
  },
  {
    "id": 149,
    "question": "회사에 이벤트 데이터를 생성하는 서비스가 있습니다. 회사는 AWS 를 사용하여 이벤트 데이터를 수신하는 대로 처리하려고 합니다. 데이터는 처리 전반에 걸쳐 유지되어야 하는 특정 순서로 작성됩니다. 회사는 운영 오버헤드를 최소화하는 솔루션을 구현하려고 합니다. 솔루션 설계자는 이를 어떻게 달성해야 합니까?",
    "options": {
      "A": "메시지를 보관할 Amazon Simple Queue Service(Amazon SQS) FIFO 대기열을 생성합니다. 대기열의 메시지를 처리하도록 AWS Lambda 함수를 설정합니다.",
      "B": "처리할 페이로드가 포함된 알림을 전달하기 위해 Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. AWS Lambda 함수를 구독자로 구성합니다.",
      "C": "메시지를 보관할 Amazon Simple Queue Service(Amazon SQS) 표준 대기열을 생성합니다. 대기열의 메시지를 독립적으로 처리하도록 AWS Lambda 함수를 설정합니다.",
      "D": "처리할 페이로드가 포함된 알림을 전달하기 위해 Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. Amazon Simple Queue Service(Amazon SQS) 대기열을 구독자로 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ FIFO — 순서 보장, 중복 제거\n▸ Lambda 폴링 — 운영 오버헤드 최소\n\n【정답 포인트】\n▸ 순서 필수 → FIFO 필수\n▸ SQS FIFO → 서버리스, 순서 보증\n▸ Lambda 폴링 → 메시지 처리, 확장성\n\n【오답 체크】\n(B) SNS → 순서 보증 안 함\n(C) 표준 SQS → 순서 미보장\n(D) SNS + SQS → SNS가 순서 보장 불가\n\n【시험 포인트】\n순서 보장 = SQS FIFO + Lambda 폴링"
  },
  {
    "id": 150,
    "question": "회사는 온프레미스 서버에서 Amazon EC2 인스턴스로 애플리케이션을 마이그레이션하고 있습니다. 마이그레이션 설계 요구 사항의 일부로 솔루션 설계자는 인프라 메트릭 경보를 구현해야 합니다. CPU 사용률이 단기간에 50% 이상으로 증가하는 경우 회사는 조치를 취할 필요가 없습니다. 하지만 CPU 사용률이 50% 이상으로 증가하고 디스크의 읽기 IOPS 가 동시에 높다면 회사에서 최대한 빨리 조치를 취해야 합니다. 솔루션 설계자는 또한 오경보를 줄여야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "가능한 경우 Amazon CloudWatch 복합 경보를 생성합니다.",
      "B": "Amazon CloudWatch 대시보드를 생성하여 지표를 시각화하고 문제에 신속하게 대응합니다.",
      "C": "Amazon CloudWatch Synthetics 카나리아를 생성하여 애플리케이션을 모니터링하고 경보를 발생시킵니다.",
      "D": "가능한 경우 여러 지표 임계값으로 단일 Amazon CloudWatch 지표 경보를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 복합 경보 — 다중 지표 AND/OR 조건\n▸ 오경보 감소 → 정확한 조건 설정\n\n【정답 포인트】\n▸ CPU 50% 단독 → 경보 없음\n▸ CPU 50% + IOPS 높음 → 경보 발생\n▸ 복합 경보 → 이 조건 정확히 구현\n\n【오답 체크】\n(B) 대시보드 → 수동 모니터링, 자동 조치 불가\n(C) Synthetics → 외부 모니터링, 내부 지표 미사용\n(D) 단일 경보 → 다중 조건 AND 미지원\n\n【시험 포인트】\n다중 조건 AND = CloudWatch 복합 경보"
  },
  {
    "id": 151,
    "question": "회사에서 온프레미스 데이터 센터를 AWS 로 마이그레이션하려고 합니다. 회사의 규정 준수 요구 사항에 따라 회사는 ap-northeast-3 지역만 사용할 수 있습니다. 회사 관리자는 VPC를 인터넷에 연결할 수 없습니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까? (2개를 선택하세요.)",
    "options": {
      "A": "AWS Control Tower 를 사용하여 데이터 상주 가드레일을 구현하여 인터넷 액세스를 거부하고 ap-northeast-3을 제외한 모든 AWS 리전에 대한 액세스를 거부합니다.",
      "B": "AWS WAF 의 규칙을 사용하여 인터넷 액세스를 방지합니다. AWS 계정 설정에서 ap-northeast-3을 제외한 모든 AWS 리전에 대한 액세스를 거부합니다.",
      "C": "AWS Organizations를 사용하여 VPC가 인터넷에 액세스하지 못하도록 하는 서비스 제어 정책(SCPS)을 구성합니다. ap-northeast-3 을 제외한 모든 AWS 리전에 대한 액세스를 거부합니다.",
      "D": "각 VPC 의 네트워크 ACL 에 대한 아웃바운드 규칙을 생성하여 0.0.0.0/0 의 모든 트래픽을 거부합니다. ap-northeast-3 이외의 AWS 리전을 사용하지 못하도록 각 사용자에 대한 IAM 정책을 생성합니다.",
      "E": "AWS Config 를 사용하여 관리형 규칙을 활성화하여 인터넷 게이트웨이를 감지 및 경고하고 ap-northeast-3 외부에 배포된 새 리소스를 감지 및 경고합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ Control Tower — 가드레일, 규정 준수 자동화\n▸ SCP — Organizations 정책, 리전 제한\n\n【정답 포인트】\n▸\n(A) Control Tower 데이터 상주 가드레일 → 인터넷+리전 제한 자동화\n▸\n(C) SCP + NACL 아웃바운드 거부 → 인터넷 차단+리전 제한\n▸ 조합 → 경영과 네트워크 층 이중 제어\n\n【오답 체크】\n(B) WAF → 웹 트래픽만, 전체 인터넷 차단 미흡\n(D) NACL+IAM → 네트워크만, SCP 없어 리전 제한 약함\n(E) Config → 감지만, 차단 기능 없음\n\n【시험 포인트】\n리전 고정+인터넷 차단 = Control Tower + SCP"
  },
  {
    "id": 152,
    "question": "회사에서 3 계층 웹 응용 프로그램을 사용하여 신입 직원에게 교육을 제공합니다. 애플리케이션은 매일 12 시간 동안만 액세스됩니다. 회사는 Amazon RDS for MySQL DB 인스턴스를 사용하여 정보를 저장하고 비용을 최소화하려고 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS Systems Manager Session Manager에 대한 IAM 정책을 구성합니다. 정책에 대한 IAM 역할을 생성합니다. 역할의 신뢰 관계를 업데이트하십시오. DB 인스턴스에 대한 자동 시작 및 중지를 설정합니다.",
      "B": "DB 인스턴스가 중지될 때 사용자가 캐시의 데이터에 액세스할 수 있는 기능을 제공하는 Redis 용 Amazon ElastiCache 캐시 클러스터를 생성합니다. DB 인스턴스가 시작된 후 캐시를 무효화합니다.",
      "C": "Amazon EC2 인스턴스를 시작합니다. Amazon RDS에 대한 액세스 권한을 부여하는 IAM 역할을 생성합니다. 역할을 EC2 인스턴스에 연결합니다. 원하는 일정에 따라 EC2 인스턴스를 시작 및 중지하도록 크론 작업을 구성합니다.",
      "D": "AWS Lambda 함수를 생성하여 DB 인스턴스를 시작 및 중지합니다. Amazon EventBridge(Amazon CloudWatch Events) 예약 규칙을 생성하여 Lambda 함수를 호출합니다. 규칙에 대한 이벤트 대상으로 Lambda 함수를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ EventBridge 예약 규칙 → 크론 기반 자동화\n▸ Lambda → 서버리스, 운영 오버헤드 최소\n\n【정답 포인트】\n▸ 12시간 일정 → EventBridge 예약으로 자동화\n▸ Lambda 함수 → 시작/중지 API 호출\n▸ 비용 절감 → 12시간 미사용 시간 중지\n\n【오답 체크】\n(A) Session Manager → 수동 개입 필요, 자동화 불가\n(B) ElastiCache → 추가 비용, 미사용 시간 최소화 못함\n(C) EC2 크론 → 크론 작업 관리 복잡, EC2 비용 증가\n\n【시험 포인트】\n일정 기반 시작/중지 = EventBridge + Lambda"
  },
  {
    "id": 153,
    "question": "회사에서 인기 있는 노래 클립으로 만든 벨소리를 판매합니다. 벨소리가 포함된 파일은 Amazon S3 Standard 에 저장되며 크기는 최소 128KB 입니다. 이 회사에는 수백만 개의 파일이 있지만 90 일보다 오래된 벨소리의 경우 다운로드가 드뭅니다. 회사는 가장 많이 액세스하는 파일을 사용자가 쉽게 사용할 수 있도록 유지하면서 스토리지 비용을 절약해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하기 위해 회사는 어떤 조치를 취해야 합니까?",
    "options": {
      "A": "객체의 초기 스토리지 계층에 대해 S3 Standard-Infrequent Access(S3 Standard-IA) 스토리지를 구성합니다.",
      "B": "파일을 S3 Intelligent-Tiering 으로 이동하고 90 일 후에 객체를 더 저렴한 스토리지 계층으로 이동하도록 구성합니다.",
      "C": "객체를 관리하도록 S3 인벤토리를 구성하고 90 일 후에 객체를 S3 Standard-Infrequent Access(S3 Standard-1A)로 이동합니다.",
      "D": "90일 후에 객체를 S3 Standard에서 S3 Standard-Infrequent Access(S3 Standard-1A)로 이동하는 S3 수명 주기 정책을 구현합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 수명 주기 정책 — 지정된 시간 후 객체를 자동으로 다른 스토리지 계층으로 이동시키는 기능\n▸ S3 Standard-IA — 자주 액세스하지 않는 데이터에 최적화된 저비용 계층\n\n【정답 포인트】\n▸ 90일 이후 접근 패턴 변화 → 자동 전환 필요\n▸ 최근 데이터는 Standard 유지(빠른 액세스) → 정책 기반 자동 이동\n\n【오답 체크】\n(A) S3 Standard-IA 초기 구성은 높은 초기 비용과 회수 비용 발생\n(B) Intelligent-Tiering은 자동 이동이지만, 명시적 90일 규칙이 아님\n(C) S3 인벤토리는 관리 도구이지, 자동 이동 정책이 아님\n\n【시험 포인트】\n▸ 시간 기반 자동화 → 수명 주기 정책의 핵심 기능\n▸ 접근 빈도 변화 → 단계적 비용 최적화 전략\n▸ 정책 구현 = 관리 오버헤드 제로, 비용 최소화"
  },
  {
    "id": 154,
    "question": "회사는 의료 시험의 결과를 Amazon S3 리포지토리에 저장해야 합니다. 리포지토리는 일부 과학자가 새 파일을 추가할 수 있도록 허용해야 하고 다른 모든 사용자는 읽기 전용 액세스로 제한해야 합니다. 어떤 사용자도 저장소의 파일을 수정하거나 삭제할 수 없습니다. 회사는 모든 파일을 생성일로부터 최소 1년 동안 저장소에 보관해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "거버넌스 모드에서 1년의 법적 보유 기간으로 S3 Object Lock을 사용하십시오.",
      "B": "보존 기간이 365일인 규정 준수 모드에서 S3 Object Lock을 사용합니다.",
      "C": "IAM 역할을 사용하여 모든 사용자가 S3 버킷의 객체를 삭제하거나 변경하지 못하도록 제한합니다. S3 버킷 정책을 사용하여 IAM 역할만 허용합니다.",
      "D": "객체가 추가될 때마다 AWS Lambda 함수를 호출하도록 S3 버킷을 구성합니다. 수정된 개체가 그에 따라 표시될 수 있도록 저장된 개체의 해시를 추적하는 기능을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 Object Lock 규정 준수 모드 — 어떤 경우에도 변경/삭제 불가능한 WORM(Write Once, Read Many)\n▸ 보존 기간(Retention) — 지정된 기간 후에만 객체 삭제 가능\n\n【정답 포인트】\n▸ 파일 수정/삭제 방지 → 규정 준수 모드 필수(거버넌스는 우회 가능)\n▸ 365일 보존 = 1년 최소 보관 요구 충족\n▸ 자동 시행으로 사용자 권한과 무관하게 보호\n\n【오답 체크】\n(A) 거버넌스 모드는 관리자가 우회 가능하므로 미충족\n(C) IAM 정책은 실수나 악의적 변경 방지 불가(규정 준수 아님)\n(D) Lambda 해시 추적은 감시일뿐 실제 수정 방지 불가\n\n【시험 포인트】\n▸ 규정 준수 요구 → Object Lock 규정 준수 모드\n▸ 삭제 불가 = WORM 특성 필수\n▸ 보존 기간 설정 = 자동화된 컴플라이언스 보장"
  },
  {
    "id": 155,
    "question": "대규모 미디어 회사는 AWS 에서 웹 애플리케이션을 호스팅합니다. 이 회사는 전 세계 사용자가 파일에 안정적으로 액세스할 수 있도록 기밀 미디어 파일 캐싱을 시작하려고 합니다. 콘텐츠는 Amazon S3 버킷에 저장됩니다. 회사는 요청의 지리적 위치에 관계없이 콘텐츠를 신속하게 제공해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS DataSync를 사용하여 S3 버킷을 웹 애플리케이션에 연결합니다.",
      "B": "AWS Global Accelerator를 배포하여 S3 버킷을 웹 애플리케이션에 연결합니다.",
      "C": "Amazon CloudFront를 배포하여 S3 버킷을 CloudFront 엣지 서버에 연결합니다.",
      "D": "Amazon Simple Queue Service(Amazon SQS)를 사용하여 S3 버킷을 웹 애플리케이션에 연결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudFront — 글로벌 CDN으로 엣지 로케이션에 콘텐츠 캐싱하는 서비스\n▸ 엣지 서버 — 지리적으로 분산된 캐시 서버로 사용자 근처에서 콘텐츠 제공\n\n【정답 포인트】\n▸ 글로벌 사용자 → CDN 필수 (지연시간 최소화)\n▸ S3 오리진 + CloudFront = 캐싱 자동화\n▸ 미디어 파일 → CloudFront의 대표적 사용 사례\n\n【오답 체크】\n(A) DataSync는 온프레미스↔클라우드 데이터 동기화 도구\n(B) Global Accelerator는 애플리케이션 성능용(CDN 아님)\n(D) SQS는 메시지 큐 서비스(콘텐츠 배포 용도 아님)\n\n【시험 포인트】\n▸ 지리적 분산 + 빠른 제공 = CloudFront CDN\n▸ S3 + CloudFront = 정적 콘텐츠 글로벌 배포의 표준 패턴\n▸ \"전 세계 사용자\" 언급 → 즉각적 CloudFront 선택 신호"
  },
  {
    "id": 156,
    "question": "회사는 다른 데이터베이스에서 가져온 배치 데이터를 생성합니다. 이 회사는 또한 네트워크 센서 및 애플리케이션 API 에서 라이브 스트림 데이터를 생성합니다. 회사는 비즈니스 분석을 위해 모든 데이터를 한 곳으로 통합해야 합니다. 회사는 수신 데이터를 처리한 다음 다른 Amazon S3 버킷에 데이터를 준비해야 합니다. 팀은 나중에 일회성 쿼리를 실행하고 데이터를 비즈니스 인텔리전스 도구로 가져와 핵심 성과 지표(KPI)를 표시합니다. 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개를 선택하세요.)",
    "options": {
      "A": "일회성 쿼리에는 Amazon Athena 를 사용하십시오. Amazon QuickSight 를 사용하여 KPI용 대시보드를 생성합니다.",
      "B": "일회성 쿼리에 Amazon Kinesis Data Analytics 를 사용합니다. Amazon QuickSight 를 사용하여 KPI용 대시보드를 생성합니다.",
      "C": "개별 레코드를 데이터베이스에서 Amazon Redshift 클러스터로 이동하는 사용자 지정 AWS Lambda 함수를 생성합니다.",
      "D": "AWS Glue 추출, 변환 및 로드(ETL) 작업을 사용하여 데이터를 JSON 형식으로 변환합니다. 여러 Amazon OpenSearch Service(Amazon Elasticsearch Service) 클러스터에 데이터를 로드합니다.",
      "E": "AWS Lake Formation 의 청사진을 사용하여 데이터 레이크에 수집할 수 있는 데이터를 식별합니다. AWS Glue 를 사용하여 소스를 크롤링하고, 데이터를 추출하고, 데이터를 Apache Parquet 형식으로 Amazon S3에 로드합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ Athena — S3 데이터에 대한 SQL 기반 일회성 쿼리 분석 서비스\n▸ Lake Formation — 데이터 레이크 자동 구축 및 거버넌스 관리\n▸ QuickSight — BI 도구로 대시보드 및 KPI 시각화\n\n【정답 포인트】\n▸ 배치+스트림 통합 → Lake Formation으로 데이터 레이크 구축\n(E) ▸ Glue로 자동 크롤링/ETL → Parquet 포맷(최적화된 분석)\n▸ 일회성 쿼리 → Athena(서버리스, 오버헤드 최소)\n(A) ▸ BI 시각화 → QuickSight로 KPI 대시보드\n(A) 【오답 체크】\n(B) Kinesis Data Analytics는 스트림 실시간 분석용(일회성 배치 쿼리 아님)\n(C) Lambda 커스텀 함수는 운영 오버헤드 증가\n(D) OpenSearch는 검색/로깅용(분석 BI 용도 아님)\n\n【시험 포인트】\n▸ \"운영 오버헤드 최소\" = 서버리스(Athena) + 자동화(Lake Formation)\n▸ 배치+스트림 통합 = 데이터 레이크 패턴\n(E) ▸ BI + 대시보드 = QuickSight(A와 함께)\n▸ 2개 선택: 데이터 수집\n(E) + 분석/시각화\n(A)"
  },
  {
    "id": 157,
    "question": "회사는 Amazon Aurora PostgreSQL DB 클러스터에 데이터를 저장합니다. 회사는 모든 데이터를 5 년간 보관하고 5 년이 지나면 모든 데이터를 삭제해야 합니다. 회사는 또한 데이터베이스 내에서 수행되는 작업의 감사 로그를 무기한으로 유지해야 합니다. 현재 이 회사는 Aurora용으로 자동 백업을 구성했습니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 수행해야 합니까? (두 가지를 선택하세요.)",
    "options": {
      "A": "DB 클러스터의 수동 스냅샷을 생성합니다.",
      "B": "자동 백업에 대한 수명 주기 정책을 만듭니다.",
      "C": "5년 동안 자동 백업 보존을 구성합니다.",
      "D": "DB 클러스터에 대한 Amazon CloudWatch Logs 내보내기를 구성합니다.",
      "E": "AWS Backup을 사용하여 백업을 수행하고 5년 동안 백업을 보관합니다."
    },
    "answer": "DE",
    "explanation": "【핵심 용어】\n▸ CloudWatch Logs 내보내기 — 감사 로그를 S3로 장기 저장\n▸ AWS Backup — 중앙 집중식 백업 관리 및 보존 정책 적용\n\n【정답 포인트】\n▸ 데이터 5년 보관 → AWS Backup으로 명시적 보존 관리\n(E) ▸ 감사 로그 무기한 → CloudWatch Logs를 S3로 내보내기\n(D) ▸ Backup은 PITR 및 보존 정책 제공 → 명시적 5년 보관\n\n【오답 체크】\n(A) 수동 스냅샷은 자동화 부족, 유지관리 부담\n(B) 자동 백업 수명 주기 정책은 Aurora에서 미지원\n(C) 자동 백업 최대 보존은 35일(5년 불가능)\n\n【시험 포인트】\n▸ 명시적 보존 기간 → AWS Backup의 보존 정책 설정\n▸ 감사 로그 장기 보관 → CloudWatch Logs 내보내기\n▸ 데이터와 로그는 분리된 요구사항(D+E)\n▸ 자동 백업만으로는 5년 보관 불가능 → AWS Backup 필수"
  },
  {
    "id": 158,
    "question": "솔루션 아키텍트가 다가올 음악 행사를 위해 웹사이트를 최적화하고 있습니다. 공연 영상은 실시간으로 스트리밍되며 주문형으로 제공된다. 이 행사는 전 세계 온라인 청중을 끌어들일 것으로 예상됩니다. 실시간 및 온디맨드 스트리밍의 성능을 모두 향상시키는 서비스는 무엇입니까?",
    "options": {
      "A": "Amazon CloudFront",
      "B": "AWS Global Accelerator",
      "C": "Amazon Route 53",
      "D": "Amazon S3 Transfer Acceleration"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudFront — 라이브 및 온디맨드 스트리밍 모두 지원하는 CDN\n▸ 엣지 캐싱 — 지리적으로 분산된 캐시로 레이턴시 감소\n\n【정답 포인트】\n▸ 라이브 스트림 → CloudFront의 RTMP(실시간 프로토콜) 지원\n▸ 온디맨드 → CloudFront의 캐싱으로 빠른 제공\n▸ 글로벌 청중 → CDN의 엣지 로케이션 활용\n\n【오답 체크】\n(B) Global Accelerator는 애플리케이션 성능용(스트리밍 최적화 아님)\n(C) Route 53은 DNS 라우팅(콘텐츠 배포 아님)\n(D) S3 Transfer Acceleration은 업로드/다운로드 속도(스트리밍 아님)\n\n【시험 포인트】\n▸ 스트리밍(라이브+온디맨드) = CloudFront 지정\n▸ \"전 세계 청중\" = CDN 필수\n▸ 실시간 요구 = CloudFront의 미디어 전송 최적화\n▸ 단일 서비스로 두 가지 용도 충족 → CloudFront"
  },
  {
    "id": 159,
    "question": "회사에서 Amazon API Gateway 및 AWS Lambda 를 사용하는 공개적으로 액세스 가능한 서버리스 애플리케이션을 실행하고 있습니다. 최근 봇넷의 사기성 요청으로 인해 애플리케이션의 트래픽이 급증했습니다. 승인되지 않은 사용자의 요청을 차단하기 위해 솔루션 설계자는 어떤 단계를 수행해야 합니까? (두 가지를 선택하세요.)",
    "options": {
      "A": "정품 사용자에게만 공유되는 API 키로 사용량 계획을 생성합니다.",
      "B": "사기성 IP 주소의 요청을 무시하도록 Lambda 함수 내에 논리를 통합합니다.",
      "C": "악성 요청을 대상으로 하는 AWS WAF 규칙을 구현하고 이를 필터링하는 작업을 트리거합니다.",
      "D": "기존 공개 API 를 비공개 API 로 전환합니다. DNS 레코드를 업데이트하여 사용자를 새 API 엔드포인트로 리디렉션합니다.",
      "E": "API 에 액세스를 시도하는 각 사용자에 대해 IAM 역할을 생성합니다. 사용자는 API 호출 시 역할을 맡게 됩니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ API 키 + 사용량 계획 — 인증된 사용자 식별 및 속도 제한\n▸ AWS WAF — DDoS/봇넷 공격 차단 규칙 설정\n\n【정답 포인트】\n▸ 봇넷 사기성 요청 → WAF로 IP/패턴 기반 차단\n(C) ▸ 정품 사용자 식별 → API 키 사용량 계획으로 접근 제어\n(A) ▸ 이중 방어: WAF(악성) + API 키(인증)\n\n【오답 체크】\n(B) Lambda 내 IP 필터링은 비효율적(Lambda 호출 비용)\n(D) 비공개 API는 기존 사용자 영향, 디엔드포인트 변경은 불편\n(E) 각 사용자 IAM 역할 생성은 운영 오버헤드 증가\n\n【시험 포인트】\n▸ \"봇넷 공격\" = WAF 필수 대응\n(C) ▸ \"승인된 사용자\" = API 키 인증\n(A) ▸ 엣지 차단(WAF) + 인증(API 키) = 다층 방어\n▸ 2개: 보안 계층 + 접근 제어"
  },
  {
    "id": 160,
    "question": "전자상거래 회사는 AWS 클라우드에서 분석 애플리케이션을 호스팅합니다. 이 애플리케이션은 매월 약 300MB 의 데이터를 생성합니다. 데이터는 JSON 형식으로 저장됩니다. 회사는 데이터 백업을 위한 재해 복구 솔루션을 평가하고 있습니다. 데이터는 필요한 경우 밀리초 단위로 액세스할 수 있어야 하며 데이터는 30 일 동안 보관되어야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon OpenSearch Service (Amazon Elasticsearch Service)",
      "B": "Amazon S3 Glacier",
      "C": "Amazon S3 Standard",
      "D": "Amazon RDS for PostgreSQL"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Standard — 밀리초 단위 접근성, 저비용의 일반 스토리지\n▸ 수명 주기 정책 — 30일 후 자동 삭제 또는 아카이브\n\n【정답 포인트】\n▸ 밀리초 단위 액세스 → S3 Standard(즉시 검색)\n▸ 30일 보관 → S3 수명 주기로 자동 관리\n▸ 월 300MB 적은 데이터량 → 저비용 우선\n▸ JSON 형식 → 구조화 불필요(S3로 충분)\n\n【오답 체크】\n(A) OpenSearch는 검색/로깅 특화(일반 백업 아님, 고비용)\n(B) Glacier는 즉시 접근 불가(검색에 시간 소요)\n(D) RDS는 데이터베이스(백업 용도 비효율)\n\n【시험 포인트】\n▸ \"밀리초 단위 접근\" = S3 Standard 필수\n▸ \"30일 보관\" = 수명 주기 정책으로 자동화\n▸ 작은 데이터량(300MB) = 저비용 솔루션\n▸ 재해 복구 + 빠른 접근 = S3 Standard의 가치 제안"
  },
  {
    "id": 161,
    "question": "회사에는 JSON 문서를 처리하고 그 결과를 온프레미스 SQL 데이터베이스에 출력하는 작은 Python 애플리케이션이 있습니다. 이 애플리케이션은 매일 수천 번 실행됩니다. 회사는 애플리케이션을 AWS 클라우드로 이동하려고 합니다. 이 회사는 확장성을 최대화하고 운영 오버헤드를 최소화하는 고가용성 솔루션이 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "JSON 문서를 Amazon S3 버킷에 넣습니다. 여러 Amazon EC2 인스턴스에서 Python 코드를 실행하여 문서를 처리합니다. 결과를 Amazon Aurora DB 클러스터에 저장합니다.",
      "B": "JSON 문서를 Amazon S3 버킷에 넣습니다. 문서가 S3 버킷에 도착하면 이를 처리하기 위해 Python 코드를 실행하는 AWS Lambda 함수를 생성합니다. 결과를 Amazon Aurora DB 클러스터에 저장합니다.",
      "C": "JSON 문서를 Amazon Elastic Block Store(Amazon EBS) 볼륨에 넣습니다. EBS 다중 연결 기능을 사용하여 볼륨을 여러 Amazon EC2 인스턴스에 연결합니다. EC2 인스턴스에서 Python 코드를 실행하여 문서를 처리합니다. Amazon RDS DB 인스턴스에 결과를 저장합니다.",
      "D": "JSON 문서를 Amazon Simple Queue Service(Amazon SQS) 대기열에 메시지로 배치합니다. Amazon EC2 시작 유형으로 구성된 Amazon Elastic Container Service(Amazon ECS) 클러스터에 Python 코드를 컨테이너로 배포합니다. 컨테이너를 사용하여 SQS 메시지를 처리합니다. Amazon RDS DB 인스턴스에 결과를 저장합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Lambda — 서버리스 계산으로 자동 확장, 운영 관리 불필요\n▸ S3 이벤트 트리거 — 문서 도착 시 자동 Lambda 실행\n\n【정답 포인트】\n▸ 매일 수천 번 실행 → 서버리스 확장성(Lambda)\n▸ 운영 오버헤드 최소화 → 관리형 서비스(Lambda + Aurora)\n▸ S3 + Lambda = 이벤트 기반 자동화\n▸ Aurora = 고가용성 데이터베이스\n\n【오답 체크】\n(A) EC2 인스턴스는 수동 확장, 관리 오버헤드 증가\n(C) EBS 다중 연결은 복잡도 증가, 저장 방식 부적절\n(D) ECS + EC2는 Lambda보다 운영 부담 증가\n\n【시험 포인트】\n▸ \"운영 오버헤드 최소\" = 서버리스(Lambda)\n▸ \"매일 수천 번\" = 자동 확장 필요\n▸ \"고가용성\" = Aurora(관리형 고가용성)\n▸ 이벤트 기반 처리 = S3 + Lambda 조합"
  },
  {
    "id": 162,
    "question": "회사에서 재무 위험 모델링을 위해 AWS 에서 고성능 컴퓨팅(HPC) 인프라를 사용하려고 합니다. 회사의 HPC 워크로드는 Linux 에서 실행됩니다. 각 HPC 워크플로는 수백 개의 Amazon EC2 스팟 인스턴스에서 실행되고 수명이 짧으며 궁극적으로 분석 및 향후 장기적 사용을 위해 영구 스토리지에 저장되는 수천 개의 출력 파일을 생성합니다. 이 회사는 모든 EC2 인스턴스에서 데이터를 처리할 수 있도록 온프레미스 데이터를 장기 영구 스토리지로 복사할 수 있는 클라우드 스토리지 솔루션을 찾고 있습니다. 솔루션은 또한 데이터 세트와 출력 파일을 읽고 쓰기 위해 영구 스토리지와 통합된 고성능 파일 시스템이어야 합니다. 이러한 요구 사항을 충족하는 AWS 서비스 조합은 무엇입니까?",
    "options": {
      "A": "Amazon S3와 통합된 Amazon FSx for Lustre",
      "B": "Amazon S3와 통합된 Windows 파일 서버용 Amazon FSx",
      "C": "Amazon Elastic Block Store(Amazon EBS)와 통합된 Amazon S3 Glacier",
      "D": "Amazon Elastic Block Store(Amazon EBS) 범용 SSD(gp2) 볼륨과 통합된 VPC 엔드포인트가 있는 Amazon S3 버킷"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ FSx for Lustre — HPC 최적화 고성능 파일 시스템\n▸ S3 통합 — 영구 데이터 저장소와의 자동 동기화\n\n【정답 포인트】\n▸ HPC 워크로드 → Lustre(병렬 파일 처리 최적)\n▸ 스팟 인스턴스 수백 개 → 고성능 파일 시스템 필수\n▸ S3 통합 → 출력 파일 자동 저장, 영구 스토리지 역할\n▸ 온프레미스→클라우드 데이터 복사 가능\n\n【오답 체크】\n(B) Windows 파일 서버용 FSx는 Linux HPC 부적합\n(C) EBS + Glacier는 고성능 파일 시스템 아님(HPC 비최적)\n(D) EBS gp2 + S3는 저성능(HPC 요구사항 미충족)\n\n【시험 포인트】\n▸ \"HPC\" = Lustre 파일 시스템 지정\n▸ \"병렬 처리\" = Lustre의 강점\n▸ \"S3 통합\" = 출력 파일 자동 보관\n▸ \"수백 개 인스턴스\" = 고성능 공유 스토리지 필수"
  },
  {
    "id": 163,
    "question": "한 회사가 온프레미스에서 컨테이너화된 애플리케이션을 구축하고 애플리케이션을 AWS 로 이전하기로 결정했습니다. 응용 프로그램은 배포된 직후 수천 명의 사용자를 보유하게 됩니다. 회사는 규모에 맞게 컨테이너 배포를 관리하는 방법을 확신하지 못합니다. 회사는 운영 오버헤드를 최소화하는 고가용성 아키텍처에 컨테이너화된 애플리케이션을 배포해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic Container Registry(Amazon ECR) 리포지토리에 컨테이너 이미지를 저장합니다. AWS Fargate 시작 유형과 함께 Amazon Elastic Container Service(Amazon ECS) 클러스터를 사용하여 컨테이너를 실행합니다. 대상 추적을 사용하여 수요에 따라 자동으로 확장합니다.",
      "B": "컨테이너 이미지를 Amazon Elastic Container Registry(Amazon ECR) 리포지토리에 저장합니다. Amazon EC2 시작 유형과 함께 Amazon Elastic Container Service(Amazon ECS) 클러스터를 사용하여 컨테이너를 실행합니다. 대상 추적을 사용하여 수요에 따라 자동으로 확장합니다.",
      "C": "Amazon EC2 인스턴스에서 실행되는 리포지토리에 컨테이너 이미지를 저장합니다. 여러 가용 영역에 분산된 EC2 인스턴스에서 컨테이너를 실행합니다. Amazon CloudWatch 에서 평균 CPU 사용률을 모니터링합니다. 필요에 따라 새 EC2 인스턴스를 시작합니다.",
      "D": "컨테이너 이미지가 포함된 Amazon EC2 Amazon 머신 이미지(AMI)를 생성합니다. 여러 가용 영역의 Auto Scaling 그룹에서 EC2 인스턴스를 시작합니다. 평균 CPU 사용률 임계값을 초과하면 Amazon CloudWatch 경보를 사용하여 EC2 인스턴스를 확장합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Fargate — 서버리스 컨테이너 실행 환경\n▸ ECS + Fargate — 인프라 관리 불필요한 자동 확장\n\n【정답 포인트】\n▸ 운영 오버헤드 최소화 → Fargate(서버리스)\n▸ 수천 명 사용자 → 대상 추적 자동 확장\n▸ 고가용성 → ECS 클러스터의 분산 배포\n▸ 컨테이너 관리 복잡도 감소\n\n【오답 체크】\n(B) EC2 시작 유형은 클러스터 관리 필요(오버헤드 증가)\n(C) 수동 인스턴스 관리는 비효율적, CloudWatch 모니터링만으로 부족\n(D) AMI + Auto Scaling은 수동 관리 필요, Fargate보다 복잡\n\n【시험 포인트】\n▸ \"운영 오버헤드 최소\" = Fargate(서버리스)\n▸ \"고가용성\" = ECS 클러스터(관리형)\n▸ \"자동 확장\" = 대상 추적으로 자동화\n▸ 컨테이너 + 수천 사용자 = ECS + Fargate 패턴"
  },
  {
    "id": 164,
    "question": "회사에는 처리할 페이로드가 포함된 메시지를 보내는 발신자 애플리케이션과 페이로드가 포함된 메시지를 수신하기 위한 처리 애플리케이션의 두 가지 애플리케이션이 있습니다. 회사는 두 애플리케이션 간의 메시지를 처리하기 위해 AWS 서비스를 구현하려고 합니다. 발신자 애플리케이션은 매시간 약 1,000 개의 메시지를 보낼 수 있습니다. 메시지를 처리하는 데 최대 2 일이 걸릴 수 있습니다. 메시지를 처리하지 못한 경우 나머지 메시지 처리에 영향을 주지 않도록 보관해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족하고 운영상 가장 효율적입니까?",
    "options": {
      "A": "Redis 데이터베이스를 실행하는 Amazon EC2 인스턴스를 설정합니다. 인스턴스를 사용하도록 두 애플리케이션을 모두 구성합니다. 메시지를 각각 저장, 처리 및 삭제합니다.",
      "B": "Amazon Kinesis 데이터 스트림을 사용하여 발신자 애플리케이션에서 메시지를 수신합니다. 처리 애플리케이션을 Kinesis Client Library(KCL)와 통합합니다.",
      "C": "발신자 및 프로세서 애플리케이션을 Amazon Simple Queue Service(Amazon SQS) 대기열과 통합합니다. 처리에 실패한 메시지를 수집하도록 배달 못한 편지 대기열을 구성합니다.",
      "D": "처리할 알림을 수신하려면 처리 애플리케이션을 Amazon Simple Notification Service(Amazon SNS) 주제에 구독합니다. 발신자 애플리케이션을 통합하여 SNS 주제에 씁니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SQS — 메시지 큐로 발신자와 수신자 분리\n▸ Dead Letter Queue(DLQ) — 처리 실패 메시지의 격리\n\n【정답 포인트】\n▸ 시간당 1,000개 메시지 → SQS 확장성\n▸ 최대 2일 처리 → SQS 장기 보존(기본 4일)\n▸ 처리 실패 격리 → DLQ로 별도 관리\n▸ 다른 메시지 영향 없음 → SQS의 독립적 처리\n\n【오답 체크】\n(A) Redis EC2는 관리 부담 증가, 고가용성 미보장\n(B) Kinesis는 실시간 스트림 처리용(2일 대기 부적합)\n(D) SNS는 발행-구독 알림(메시지 보관 불가)\n\n【시험 포인트】\n▸ \"배달 못한 편지\" = DLQ 언급 → SQS 지정\n▸ \"처리 실패 격리\" = SQS DLQ의 핵심 기능\n▸ \"메시지 버퍼링\" = 큐 기반 솔루션\n▸ \"운영 효율\" = 관리형 SQS(EC2 관리 불필요)"
  },
  {
    "id": 165,
    "question": "솔루션 설계자는 정적 웹 사이트를 저장하기 위해 Amazon S3 오리진과 함께 Amazon CloudFront 를 사용하는 솔루션을 설계해야 합니다. 회사의 보안 정책에 따라 모든 웹 사이트 트래픽은 AWS WAF에서 검사해야 합니다. 솔루션 설계자는 이러한 요구 사항을 어떻게 준수해야 합니까?",
    "options": {
      "A": "AWS WAF Amazon 리소스 이름(ARN)에서만 오는 요청을 수락하도록 S3 버킷 정책을 구성합니다.",
      "B": "S3 오리진에서 콘텐츠를 요청하기 전에 모든 수신 요청을 AWS WAF 로 전달하도록 Amazon CloudFront를 구성합니다.",
      "C": "Amazon CloudFront IP 주소가 Amazon S3 에만 액세스하도록 허용하는 보안 그룹을 구성합니다. AWS WAF를 CloudFront에 연결합니다.",
      "D": "원본 액세스 ID(OAI)를 사용하여 S3 버킷에 대한 액세스를 제한하도록 Amazon CloudFront 및 Amazon S3를 구성합니다. 배포에서 AWS WAF를 활성화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ OAI(Origin Access Identity) — CloudFront만 S3에 접근 가능\n▸ AWS WAF → CloudFront — 모든 트래픽 검사\n\n【정답 포인트】\n▸ 모든 웹사이트 트래픽 검사 → WAF를 CloudFront에 연결\n▸ S3 직접 접근 방지 → OAI로 CloudFront만 허용\n▸ 보안 정책 준수 → 두 가지 제어 통합\n\n【오답 체크】\n(A) WAF ARN 기반 S3 정책은 CloudFront 트래픽만 WAF 검사 불가\n(B) CloudFront가 모든 요청을 WAF로 \"전달\"하는 기능은 미지원\n(C) 보안 그룹은 S3에 적용 불가(EC2용), WAF 연결은 필요하지만 불완전\n\n【시험 포인트】\n▸ \"모든 트래픽 WAF 검사\" = CloudFront에 WAF 활성화\n▸ \"S3 보호\" = OAI로 직접 접근 방지\n▸ \"정적 웹사이트 보안\" = CloudFront + OAI + WAF 조합\n▸ 계층화 보안: WAF(검사) + OAI(접근 제어)"
  },
  {
    "id": 166,
    "question": "글로벌 이벤트의 주최자는 일일 보고서를 정적 HTML 페이지로 온라인에 게시하려고 합니다. 이 페이지는 전 세계 사용자로부터 수백만 건의 조회수를 생성할 것으로 예상됩니다. 파일은 Amazon S3 버킷에 저장됩니다. 솔루션 설계자는 효율적이고 효과적인 솔루션을 설계하라는 요청을 받았습니다. 이를 달성하기 위해 솔루션 설계자는 어떤 조치를 취해야 합니까?",
    "options": {
      "A": "파일에 대해 미리 서명된 URL을 생성합니다.",
      "B": "모든 리전에 교차 리전 복제를 사용합니다.",
      "C": "Amazon Route 53의 지리적 근접성 기능을 사용합니다.",
      "D": "S3 버킷과 함께 Amazon CloudFront를 원본으로 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ CloudFront — 글로벌 CDN으로 엣지 로케이션에서 콘텐츠 캐싱\n▸ 엣지 캐싱 — 지역별 빠른 콘텐츠 제공\n\n【정답 포인트】\n▸ 수백만 조회 → CDN 캐싱으로 S3 부하 분산\n▸ 전 세계 사용자 → CloudFront 엣지 로케이션 활용\n▸ 정적 HTML → CloudFront의 이상적 용도\n▸ 비용 효율 → 캐싱으로 S3 요청 감소\n\n【오답 체크】\n(A) 미리 서명된 URL은 임시 접근 제한용(글로벌 캐싱 아님)\n(B) 교차 리전 복제는 데이터 동기화(사용자 성능 미개선)\n(C) Route 53 지리적 근접은 DNS 라우팅(콘텐츠 캐싱 아님)\n\n【시험 포인트】\n▸ \"전 세계 사용자\" + \"수백만 조회\" = CDN 필수\n▸ \"정적 콘텐츠\" = CloudFront의 핵심 사용 사례\n▸ \"효율적 제공\" = 글로벌 캐싱 네트워크\n▸ 단일 솔루션으로 글로벌 성능 + 비용 절감"
  },
  {
    "id": 167,
    "question": "회사는 Amazon EC2 인스턴스 플릿에서 프로덕션 애플리케이션을 실행합니다. 애플리케이션은 Amazon SQS 대기열에서 데이터를 읽고 병렬로 메시지를 처리합니다. 메시지 볼륨은 예측할 수 없으며 종종 트래픽이 간헐적으로 발생합니다. 이 애플리케이션은 다운타임 없이 지속적으로 메시지를 처리해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "스팟 인스턴스를 독점적으로 사용하여 필요한 최대 용량을 처리하십시오.",
      "B": "예약 인스턴스를 독점적으로 사용하여 필요한 최대 용량을 처리합니다.",
      "C": "기본 용량으로 예약 인스턴스를 사용하고 추가 용량을 처리하려면 스팟 인스턴스를 사용합니다.",
      "D": "기본 용량에는 예약 인스턴스를 사용하고 추가 용량을 처리하려면 온디맨드 인스턴스를 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 예약 인스턴스(RI) — 기본 용량의 저비용 장기 약정\n▸ 온디맨드 인스턴스 — 변동 용량의 안정적 공급\n\n【정답 포인트】\n▸ 다운타임 없음(지속 처리) → 스팟 불안정성 제외\n▸ 기본 용량 → RI(저비용, 안정적)\n▸ 간헐적 트래픽(예측 불가) → 온디맨드로 유연 대응\n▸ 비용 효율 = RI + 온디맨드 조합\n\n【오답 체크】\n(A) 스팟 독점은 인스턴스 중단 위험(다운타임 초래)\n(B) RI 독점은 간헐적 트래픽 시 낭비\n(C) 스팟 + RI는 중단 위험으로 다운타임 불가\n\n【시험 포인트】\n▸ \"다운타임 없음\" = 스팟 인스턴스 배제\n▸ \"예측 불가능\" = 온디맨드 필요성\n▸ \"비용 효율\" = RI 기본 + 온디맨드 추가\n▸ 안정성 + 비용 = RI/온디맨드 계층화"
  },
  {
    "id": 168,
    "question": "보안 팀은 팀의 모든 AWS 계정에서 특정 서비스 또는 작업에 대한 액세스를 제한하려고 합니다. 모든 계정은 AWS Organizations 의 대규모 조직에 속합니다. 솔루션은 확장 가능해야 하며 권한을 유지할 수 있는 단일 지점이 있어야 합니다. 이를 달성하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": {
      "A": "ACL을 생성하여 서비스 또는 작업에 대한 액세스를 제공합니다.",
      "B": "계정을 허용할 보안 그룹을 생성하고 사용자 그룹에 연결합니다.",
      "C": "각 계정에서 교차 계정 역할을 생성하여 서비스 또는 작업에 대한 액세스를 거부합니다.",
      "D": "루트 조직 단위에 서비스 제어 정책을 만들어 서비스 또는 작업에 대한 액세스를 거부합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SCP(Service Control Policy) — 조직 차원의 접근 제어\n▸ 루트 OU — 모든 계정을 포함하는 최상위 단위\n\n【정답 포인트】\n▸ 모든 AWS 계정 → 조직 차원 정책(SCP) 필수\n▸ 확장성 → 루트 OU에 SCP로 상속 자동화\n▸ 단일 관리 지점 → 조직 수준의 중앙 집중식 제어\n▸ 개별 계정 역할 불필요\n\n【오답 체크】\n(A) ACL은 리소스 수준 제어(조직 차원 아님)\n(B) 보안 그룹은 네트워크 방화벽(권한 제어 아님)\n(C) 각 계정 역할은 단일 지점 관리 불가\n\n【시험 포인트】\n▸ \"모든 AWS 계정\" + \"대규모 조직\" = SCP\n▸ \"단일 지점 관리\" = 루트 OU에 SCP\n▸ \"확장 가능\" = 상속으로 신규 계정 자동 적용\n▸ \"서비스 제한\" = 명시적 거부 정책(SCP)\n▸ Organizations = SCP의 필수 컨텍스트"
  },
  {
    "id": 169,
    "question": "회사는 최근 웹 공격으로 인해 공용 웹 애플리케이션의 보안에 대해 우려하고 있습니다. 애플리케이션은 Application Load Balancer(ALB)를 사용합니다. 솔루션 설계자는 애플리케이션에 대한 DDoS 공격의 위험을 줄여야 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "ALB에 Amazon Inspector 에이전트를 추가합니다.",
      "B": "공격을 방지하도록 Amazon Macie를 구성합니다.",
      "C": "공격을 방지하려면 AWS Shield Advanced를 활성화하십시오.",
      "D": "ALB를 모니터링하도록 Amazon GuardDuty를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Shield Advanced — DDoS 공격 방어 및 완화\n▸ DDoS 보호 — 대규모 트래픽 공격 차단\n\n【정답 포인트】\n▸ DDoS 공격 위험 감소 → Shield Advanced 지정\n▸ 공용 리소스(ALB) → Shield Advanced 커버리지\n▸ 자동 완화 및 DDoS Response Team(DRT) 지원\n\n【오답 체크】\n(A) Inspector는 취약점 스캔(DDoS 방어 아님)\n(B) Macie는 데이터 보안(DDoS 방지 아님)\n(D) GuardDuty는 위협 탐지(예방이 아닌 감시)\n\n【시험 포인트】\n▸ \"DDoS 공격\" = Shield Advanced 지정\n▸ \"공용 애플리케이션\" = Shield Advanced 필수\n▸ \"위험 감소\" = 적극적 방어 서비스\n▸ ALB + DDoS = Shield Advanced의 사용 사례"
  },
  {
    "id": 170,
    "question": "회사의 웹 애플리케이션이 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 실행되고 있습니다. 이 회사는 최근 정책을 변경하여 이제 특정 국가에서만 애플리케이션에 액세스하도록 요구합니다. 이 요구 사항을 충족하는 구성은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스에 대한 보안 그룹을 구성합니다.",
      "B": "Application Load Balancer에서 보안 그룹을 구성합니다.",
      "C": "VPC의 Application Load Balancer에서 AWS WAF를 구성합니다.",
      "D": "EC2 인스턴스를 포함하는 서브넷에 대한 네트워크 ACL을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS WAF 지리적 차단 — 국가/지역 기반 트래픽 필터\n▸ ALB와 WAF 통합 — 로드밸런서 수준 접근 제어\n\n【정답 포인트】\n▸ 특정 국가만 허용 → WAF의 지리적 조건 규칙\n▸ ALB 레벨 → 빠른 필터링(EC2 도달 전)\n▸ 정책 기반 제어 → 유연한 국가 추가/변경\n\n【오답 체크】\n(A) 보안 그룹은 IP/포트만 제어(지역 정보 없음)\n(B) ALB 보안 그룹도 IP/포트 제어(국가 매핑 불가)\n(D) 네트워크 ACL은 IP 기반(지역 정보 불가)\n\n【시험 포인트】\n▸ \"특정 국가\" = 지리적 조건 필요\n▸ \"WAF 지리적 차단\" = 국가 수준 제어\n▸ \"ALB + WAF\" = 레이어 7 필터링\n▸ 정책 제어 = 보안 그룹/네트워크 ACL 불가"
  },
  {
    "id": 171,
    "question": "회사는 사용자에게 항목 가격을 기반으로 세금 계산을 위한 조회를 자동화하는 API 를 제공합니다. 회사는 연휴 기간에만 더 많은 수의 문의가 발생하여 응답 시간이 느려집니다. 솔루션 설계자는 확장 가능하고 탄력적인 솔루션을 설계해야 합니다. 이를 달성하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon EC2 인스턴스에서 호스팅되는 API 를 제공합니다. EC2 인스턴스는 API 요청이 있을 때 필요한 계산을 수행합니다.",
      "B": "항목 이름을 허용하는 Amazon API Gateway 를 사용하여 REST API 를 설계합니다. API Gateway는 세금 계산을 위해 항목 이름을 AWS Lambda에 전달합니다.",
      "C": "두 개의 Amazon EC2 인스턴스가 있는 Application Load Balancer 를 생성합니다. EC2 인스턴스는 받은 항목 이름에 대한 세금을 계산합니다.",
      "D": "Amazon EC2 인스턴스에서 호스팅되는 API 와 연결되는 Amazon API Gateway 를 사용하여 REST API를 설계합니다. API Gateway는 세금 계산을 위해 항목 이름을 수락하고 EC2 인스턴스에 전달합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ API Gateway → Lambda — 완전 서버리스 자동 확장\n▸ 연휴 기간 피크 → 탄력적 리소스 필요\n\n【정답 포인트】\n▸ 예측 불가능 트래픽(연휴 집중) → 서버리스 자동 확장(Lambda)\n▸ 간단한 계산(세금) → Lambda 적합\n▸ 확장성 최대화 → API Gateway + Lambda 조합\n▸ 관리 오버헤드 최소\n\n【오답 체크】\n(A) EC2 단일 인스턴스는 확장성 부족\n(C) ALB + 2개 EC2는 고정 용량(확장 제한)\n(D) EC2 기반 API는 연휴 트래픽 처리 어려움\n\n【시험 포인트】\n▸ \"연휴 기간만 피크\" = 탄력적 리소스 필수\n▸ \"확장 가능\" = 서버리스(Lambda)\n▸ \"API + 계산\" = API Gateway + Lambda 패턴\n▸ \"응답 시간 개선\" = 자동 확장으로 병렬 처리\n▸ 간단한 요청-응답 = Lambda 최적 사용 사례"
  },
  {
    "id": 172,
    "question": "솔루션 설계자가 애플리케이션을 위한 새로운 Amazon CloudFront 배포를 생성하고 있습니다. 사용자가 제출한 정보 중 일부는 민감한 정보입니다. 애플리케이션은 HTTPS 를 사용하지만 다른 보안 계층이 필요합니다. 민감한 정보는 전체 애플리케이션 스택에서 보호되어야 하며 정보에 대한 액세스는 특정 애플리케이션으로 제한되어야 합니다. 솔루션 설계자는 어떤 조치를 취해야 합니까?",
    "options": {
      "A": "CloudFront 서명 URL을 구성합니다.",
      "B": "CloudFront 서명 쿠키를 구성합니다.",
      "C": "CloudFront 필드 수준 암호화 프로필을 구성합니다.",
      "D": "CloudFront 를 구성하고 뷰어 프로토콜 정책에 대해 오리진 프로토콜 정책 설정을 HTTPS 전용으로 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 필드 수준 암호화(Field-Level Encryption) — 특정 폼 필드를 공개 키로 암호화하여 클라우드 프론트에서 원본까지 암호화된 상태 유지\n\n【정답 포인트】\n▸ 민감한 데이터 암호화 → 애플리케이션에서만 복호화 가능\n▸ 전체 스택 보호 → 엣지와 원본 사이 암호화 유지\n▸ 특정 애플리케이션 제한 → 클라이언트 측 암호화 + 원본만 복호화 키 소유\n\n【오답 체크】\n(A) 서명 URL — 콘텐츠 접근 권한만 제어, 데이터 자체 암호화 없음\n(B) 서명 쿠키 — URL과 동일하게 인증만 담당, 암호화 미제공\n(D) HTTPS 프로토콜 — 전송 계층 보안만 제공, 애플리케이션 내 보호 불가\n\n【시험 포인트】\n필드 수준 암호화는 CloudFront에서만 지원되는 고급 보안 기능으로, 특정 폼 필드를 대상으로 엔드-투-엔드 암호화를 제공합니다. HTTPS는 전송 중 보호이지만, 원본에서 복호화되면 저장 및 처리 중 노출되는 반면, 필드 암호화는 원본 애플리케이션까지 암호화 상태를 유지하여 민감 정보 보호의 최상위 계층입니다."
  },
  {
    "id": 173,
    "question": "게임 회사는 AWS 에서 브라우저 기반 애플리케이션을 호스팅합니다. 애플리케이션 사용자는 Amazon S3에 저장된 많은 수의 비디오 및 이미지를 소비합니다. 이 내용은 모든 사용자에게 동일합니다. 이 응용 프로그램은 인기가 높아졌으며 전 세계적으로 수백만 명의 사용자가 이러한 미디어 파일에 액세스합니다. 회사는 원본에 대한 부하를 줄이면서 사용자에게 파일을 제공하려고 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "웹 서버 앞에 AWS Global Accelerator 액셀러레이터를 배포합니다.",
      "B": "S3 버킷 앞에 Amazon CloudFront 웹 배포를 배포합니다.",
      "C": "웹 서버 앞에 Redis 인스턴스용 Amazon ElastiCache를 배포합니다.",
      "D": "웹 서버 앞에 Amazon ElastiCache for Memcached 인스턴스를 배포합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudFront — 엣지 로케이션 기반 CDN, S3 오리진에서 콘텐츠 캐싱\n▸ 정적 콘텐츠 배포 — 비용 효율적 글로벌 확장\n\n【정답 포인트】\n▸ 정적 미디어 파일 → CDN 캐싱에 최적화\n▸ 글로벌 수백만 사용자 → 엣지 로케이션에서 로컬 배포\n▸ 원본 부하 감소 → 캐시 히트로 S3 요청 절감\n\n【오답 체크】\n(A) Global Accelerator — 동적 콘텐츠 최적화, 고비용, 정적 파일에 비효율\n(C) \n(D) ElastiCache — 인메모리 캐시, 웹 서버 응답 가속용, S3 원본 부하 감소 미흡\n\n【시험 포인트】\n정적 콘텐츠 배포 시나리오는 CloudFront CDN의 핵심 사용 사례입니다. 글로벌 규모의 정적 미디어 배포는 엣지 캐싱이 가장 효율적이며, 비용도 최소화됩니다. ElastiCache는 동적 데이터 가속에 사용되고, Global Accelerator는 실시간 애플리케이션 성능 최적화용입니다."
  },
  {
    "id": 174,
    "question": "회사에는 ALB(Application Load Balancer) 뒤의 단일 가용 영역에 있는 Amazon EC2 Auto Scaling 그룹에서 6 개의 프런트 엔드 웹 서버를 실행하는 다중 계층 애플리케이션이 있습니다. 솔루션 설계자는 애플리케이션을 수정하지 않고 인프라를 고가용성으로 수정해야 합니다. 고가용성을 제공하는 솔루션 설계자는 어떤 아키텍처를 선택해야 합니까?",
    "options": {
      "A": "두 리전 각각에서 세 개의 인스턴스를 사용하는 Auto Scaling 그룹을 만듭니다.",
      "B": "2 개의 가용 영역 각각에서 3 개의 인스턴스를 사용하도록 Auto Scaling 그룹을 수정합니다.",
      "C": "다른 리전에서 더 많은 인스턴스를 빠르게 생성하는 데 사용할 수 있는 Auto Scaling 템플릿을 생성합니다.",
      "D": "라운드 로빈 구성에서 Amazon EC2 인스턴스 앞의 ALB 를 변경하여 웹 계층에 대한 트래픽의 균형을 맞춥니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 고가용성(HA) — 단일 장애점 제거, 리전 내 다중 AZ 배포\n▸ Auto Scaling 그룹 — 인스턴스 분산 설정으로 AZ 레질리언스 확보\n\n【정답 포인트】\n▸ 애플리케이션 수정 불필요 → 인프라 변경만 필요\n▸ 비용 효율성 → 리전 확대보다 AZ 추가가 저렴\n▸ AZ 장애 극복 → 각 AZ에 최소 3개 인스턴스 배포\n\n【오답 체크】\n(A) 리전 분산 — 과도한 비용, 고가용성보다 재해 복구 전략\n(C) 템플릿만 생성 — 자동 장애 조치 미흡, 수동 개입 필요\n(D) 로드 밸런서 설정 변경 — AZ 장애에 대응 불가, 문제 근본 해결 미흡\n\n【시험 포인트】\nAZ 레질리언스는 고가용성의 기본 원칙입니다. 단일 AZ의 한계는 AZ 장애로 인한 완전 중단이므로, 최소 2개 AZ에 인스턴스를 분산하면 한 AZ의 장애 시에도 서비스 지속성이 보장됩니다. ALB는 다중 AZ를 자동 지원하므로 추가 구성 불필요합니다."
  },
  {
    "id": 175,
    "question": "전자 상거래 회사에는 Amazon API Gateway 및 AWS Lambda 함수를 사용하는 주문 처리 애플리케이션이 있습니다. 애플리케이션은 Amazon Aurora PostgreSQL 데이터베이스에 데이터를 저장합니다. 최근 판매 행사 중에 고객 주문이 갑자기 급증했습니다. 일부 고객은 시간 초과를 경험했고 애플리케이션은 해당 고객의 주문을 처리하지 않았습니다. 솔루션 설계자는 많은 수의 열린 연결로 인해 데이터베이스에서 CPU 사용률과 메모리 사용률이 높다고 판단했습니다. 솔루션 설계자는 응용 프로그램을 최소한으로 변경하면서 시간 초과 오류를 방지해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Lambda 함수에 대해 프로비저닝된 동시성을 구성합니다. 여러 AWS 리전에서 글로벌 데이터베이스가 되도록 데이터베이스를 수정합니다.",
      "B": "Amazon RDS 프록시를 사용하여 데이터베이스에 대한 프록시를 생성합니다. 데이터베이스 엔드포인트 대신 RDS 프록시 엔드포인트를 사용하도록 Lambda 함수를 수정합니다.",
      "C": "다른 AWS 리전에서 데이터베이스에 대한 읽기 전용 복제본을 생성합니다. API Gateway 에서 쿼리 문자열 파라미터를 사용하여 트래픽을 읽기 전용 복제본으로 라우팅합니다.",
      "D": "AWS Database Migration Service(AWS DMS)를 사용하여 Aurora PostgreSQL 에서 Amazon DynamoDB 로 데이터를 마이그레이션합니다. DynamoDB 테이블을 사용하도록 Lambda 함수를 수정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ RDS 프록시 — 데이터베이스 연결 풀 관리, 연결 재사용으로 오버헤드 감소\n▸ 연결 타임아웃 — 많은 동시 연결로 인한 DB 자원 소진\n\n【정답 포인트】\n▸ 근본 원인 — 과도한 DB 연결, 프록시로 풀 기반 관리로 전환\n▸ 최소 애플리케이션 변경 — RDS 프록시 엔드포인트만 수정 필요\n▸ Lambda 호환성 — 프록시가 일시적 Lambda 연결 폭증 완화\n\n【오답 체크】\n(A) 프로비저닝된 동시성 — Lambda 콜드 스타트만 개선, 연결 풀 문제 미해결\n(C) 읽기 복제본 — 쓰기 작업(주문 처리) 확대 불가, 읽기 트래픽만 분산\n(D) DynamoDB 마이그레이션 — 과도한 변경, 비용 및 구조 변경 사항 많음\n\n【시험 포인트】\nRDS 프록시는 Lambda 함수에서 DB 연결 폭증 시나리오의 표준 솔루션입니다. 각 Lambda 호출이 새 연결을 열지 않고 풀에서 재사용하므로 DB 자원 소진을 방지합니다. 최소한의 코드 변경으로 연결 타임아웃 문제를 해결하는 가장 효율적 방법입니다."
  },
  {
    "id": 176,
    "question": "애플리케이션은 프라이빗 서브넷의 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 Amazon DynamoDB 테이블에 액세스해야 합니다. 트래픽이 AWS 네트워크를 벗어나지 않도록 하면서 테이블에 액세스하는 가장 안전한 방법은 무엇입니까?",
    "options": {
      "A": "DynamoDB용 VPC 엔드포인트를 사용합니다.",
      "B": "퍼블릭 서브넷에서 NAT 게이트웨이를 사용합니다.",
      "C": "프라이빗 서브넷에서 NAT 인스턴스를 사용합니다.",
      "D": "VPC에 연결된 인터넷 게이트웨이를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ VPC 엔드포인트 — AWS 서비스로 인터넷 게이트웨이 없이 프라이빗 접근\n▸ 네트워크 격리 — 공개 인터넷 경유 없이 AWS 백본만 사용\n\n【정답 포인트】\n▸ AWS 네트워크 내 유지 — 공개 인터넷 경로 제거\n▸ 가장 안전한 방법 — 신원 기반 접근 제어, 암호화된 AWS 백본\n▸ 최소 지연 — 엔드포인트가 VPC 내 가용 영역에 위치\n\n【오답 체크】\n(B) NAT 게이트웨이 — 공개 인터넷 경로 필요, AWS 네트워크 이탈\n(C) NAT 인스턴스 — 운영 오버헤드 증가, 여전히 공개 인터넷 경로\n(D) 인터넷 게이트웨이 — 공개 인터넷 노출, 보안 위험 극대화\n\n【시험 포인트】\nVPC 엔드포인트(특히 게이트웨이 타입)는 DynamoDB 등 AWS 관리 서비스에 프라이빗 접근을 제공합니다. NAT 기반 솔루션은 트래픽이 공개 인터넷을 경유하므로 보안과 비용 모두에서 부적절합니다. \"AWS 네트워크를 벗어나지 않도록\"이라는 조건이 VPC 엔드포인트의 정의와 일치합니다."
  },
  {
    "id": 177,
    "question": "엔터테인먼트 회사는 Amazon DynamoDB 를 사용하여 미디어 메타데이터를 저장하고 있습니다. 애플리케이션이 읽기 집약적이며 지연이 발생합니다. 회사에는 추가 운영 오버헤드를 처리할 직원이 없으며 애플리케이션을 재구성하지 않고 DynamoDB 의 성능 효율성을 개선해야 합니다. 이 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "Redis용 Amazon ElastiCache를 사용합니다.",
      "B": "Amazon DynamoDB Accelerator(DAX)를 사용합니다.",
      "C": "DynamoDB 전역 테이블을 사용하여 데이터를 복제합니다.",
      "D": "자동 검색이 활성화된 Memcached용 Amazon ElastiCache를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DAX — DynamoDB 전용 인메모리 캐시, 마이크로초 응답 시간\n▸ 네이티브 캐시 — DynamoDB와 직접 통합, 애플리케이션 수정 최소화\n\n【정답 포인트】\n▸ DynamoDB 최적화 — DAX는 DynamoDB 읽기에 특화된 캐시\n▸ 애플리케이션 재구성 불필요 — DAX는 DynamoDB와 투명 통합\n▸ 운영 오버헤드 최소 — AWS 관리형, 자동 확장\n\n【오답 체크】\n(A) Redis — 범용 캐시, DynamoDB 통합 필요, 애플리케이션 코드 수정 필수\n(C) 전역 테이블 — 다중 리전 복제, 읽기 지연 문제 해결 미흡\n(D) Memcached — Redis와 유사, 자동 검색도 DynamoDB와 기본 통합 부족\n\n【시험 포인트】\nDAX는 DynamoDB 읽기 지연 문제의 표준 솔루션입니다. DynamoDB의 높은 지연(밀리초 단위)을 마이크로초 단위로 개선하며, DynamoDB API와 호환되므로 애플리케이션 코드 변경 최소화가 가능합니다. ElastiCache는 범용 캐시로 설정과 관리가 복잡합니다."
  },
  {
    "id": 178,
    "question": "회사의 인프라는 단일 AWS 리전에 있는 Amazon EC2 인스턴스와 Amazon RDS DB 인스턴스로 구성됩니다. 회사는 별도의 리전에 데이터를 백업하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Backup을 사용하여 EC2 백업과 RDS 백업을 별도의 리전에 복사합니다.",
      "B": "Amazon Data Lifecycle Manager(Amazon DLM)를 사용하여 EC2 백업 및 RDS 백업을 별도의 리전에 복사합니다.",
      "C": "EC2 인스턴스의 Amazon 머신 이미지(AMI)를 생성합니다. AMI 를 별도의 리전에 복사합니다. 별도의 리전에서 RDS DB 인스턴스에 대한 읽기 전용 복제본을 생성합니다.",
      "D": "Amazon Elastic Block Store(Amazon EBS) 스냅샷을 생성합니다. EBS 스냅샷을 별도의 리전에 복사합니다. RDS 스냅샷을 생성합니다. RDS 스냅샷을 Amazon S3로 내보냅니다. S3 CRR(Cross-Region Replication)을 별도의 리전에 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Backup — 중앙화된 백업 관리, EC2/RDS 통합 지원, 자동 교차 리전 복사\n▸ 재해 복구 — 최소 RTO/RPO 달성\n\n【정답 포인트】\n▸ 통합 솔루션 — EC2와 RDS 백업을 한 곳에서 관리\n▸ 자동 교차 리전 복사 — 수동 단계 제거, 운영 오버헤드 최소\n▸ 정책 기반 관리 — 백업 빈도, 보존 자동화\n\n【오답 체크】\n(B) DLM — EBS 스냅샷 생명 주기만 관리, RDS 지원 미흡, 교차 리전 기능 제한적\n(C) AMI + 읽기 복제본 — 복잡한 수동 절차, RDS는 복제본만 제공(지속적 동기화)\n(D) 스냅샷 수동 관리 — 과도한 단계, 각각 다른 방식 사용, S3 CRR은 추가 설정\n\n【시험 포인트】\nAWS Backup은 다중 AWS 서비스에 대한 통합 백업 솔루션을 제공하며, 교차 리전 복사 정책을 중앙에서 관리합니다. 운영 오버헤드를 최소화하려면 서로 다른 서비스별 수동 백업보다 통합 관리 솔루션이 필수입니다."
  },
  {
    "id": 179,
    "question": "솔루션 설계자는 애플리케이션이 Amazon RDS DB 인스턴스에 액세스하는 데 사용하는 데이터베이스 사용자 이름과 암호를 안전하게 저장해야 합니다. 데이터베이스에 액세스하는 애플리케이션은 Amazon EC2 인스턴스에서 실행됩니다. 솔루션 설계자는 AWS Systems Manager Parameter Store에서 보안 매개변수를 생성하려고 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Parameter Store 파라미터에 대한 읽기 액세스 권한이 있는 IAM 역할을 생성합니다. 파라미터를 암호화하는 데 사용되는 AWS Key Management Service(AWS KMS) 키에 대한 Decrypt 액세스를 허용합니다. 이 IAM 역할을 EC2 인스턴스에 할당합니다.",
      "B": "Parameter Store 파라미터에 대한 읽기 액세스를 허용하는 IAM 정책을 생성합니다. 파라미터를 암호화하는 데 사용되는 AWS Key Management Service(AWS KMS) 키에 대한 Decrypt 액세스를 허용합니다. 이 IAM 정책을 EC2 인스턴스에 할당합니다.",
      "C": "Parameter Store 파라미터와 EC2 인스턴스 간에 IAM 신뢰 관계를 생성합니다. 신뢰 정책에서 Amazon RDS를 보안 주체로 지정합니다.",
      "D": "DB 인스턴스와 EC2 인스턴스 간에 IAM 신뢰 관계를 생성합니다. 신뢰 정책에서 Systems Manager를 보안 주체로 지정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ IAM 역할 — EC2 인스턴스에 임시 자격증명 제공, 고정 암호 불필요\n▸ Parameter Store — 민감 문자열 저장(암호화), KMS 기반 접근 제어\n▸ KMS Decrypt 권한 — 암호화된 매개변수 복호화 필수\n\n【정답 포인트】\n▸ 역할 기반 접근 — EC2에 IAM 역할 할당으로 자동 자격증명 관리\n▸ 이중 권한 — Parameter Store 읽기 + KMS 복호화 모두 필요\n▸ 보안 모범 사례 — 고정 암호 제거, 감사 추적 제공\n\n【오답 체크】\n(B) IAM 정책 직접 할당 — EC2 사용자 계정에 할당되지 않음, 인스턴스 신원 기반이 아님\n(C) \n(D) 신뢰 관계 생성 — IAM의 신뢰 관계는 역할과 서비스 간의 관계, 리소스 간 직접 신뢰 관계 불필요\n\n【시험 포인트】\nEC2 → Parameter Store 접근 시나리오의 정답은 항상 EC2에 할당된 \"IAM 역할\"입니다. 이 역할은 Parameter Store 읽기와 KMS 복호화 권한을 모두 필요로 합니다. IAM 정책은 역할에 내재되며, 역할이 EC2 인스턴스 신원이 되어 자동 임시 자격증명을 제공합니다."
  },
  {
    "id": 180,
    "question": "회사에서 API 로 구동되는 클라우드 통신 플랫폼을 설계하고 있습니다. 애플리케이션은 NLB(Network Load Balancer) 뒤의 Amazon EC2 인스턴스에서 호스팅됩니다. 이 회사는 Amazon API Gateway 를 사용하여 외부 사용자에게 API 를 통해 애플리케이션에 대한 액세스 권한을 제공합니다. 이 회사는 SQL 인젝션과 같은 웹 익스플로잇으로부터 플랫폼을 보호하고 대규모의 정교한 DDoS 공격을 감지하고 완화하기를 원합니다. 어떤 솔루션 조합이 MOST 보호를 제공합니까? (두 가지를 선택하세요.)",
    "options": {
      "A": "AWS WAF를 사용하여 NLB를 보호하십시오.",
      "B": "NLB와 함께 AWS Shield Advanced를 사용합니다.",
      "C": "AWS WAF를 사용하여 Amazon API Gateway를 보호합니다.",
      "D": "AWS Shield Standard와 함께 Amazon GuardDuty 사용",
      "E": "Amazon API Gateway와 함께 AWS Shield Standard를 사용합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ AWS WAF — 애플리케이션 계층(L7) 웹 공격 차단\n▸ AWS Shield Advanced — L3/L4 DDoS 대규모 공격 감지 및 완화\n▸ 다층 방어 — 웹 악용과 DDoS 공격 모두 대응\n\n【정답 포인트】\n▸ API Gateway 보호 — WAF로 SQL 인젝션, XSS 등 웹 공격 차단\n▸ NLB 보호 — Shield Advanced로 대규모 정교한 DDoS 방어\n▸ 포괄적 보안 — 동일 리소스에 WAF와 Shield 동시 적용 가능\n\n【오답 체크】\n(A) NLB에 WAF — NLB는 L4 장비, WAF는 L7 지원 불가(ALB에만 지원)\n(D) GuardDuty + Shield Standard — Standard는 기본 DDoS 보호만, 정교한 공격 미흡\n(E) Shield Standard만 — 웹 공격(SQL 인젝션) 방어 불가, 표준 DDoS만 대응\n\n【시험 포인트】\n\"SQL 인젝션 같은 웹 익스플로잇\"은 WAF 담당, \"대규모의 정교한 DDoS\"는 Shield Advanced 담당입니다. API Gateway에는 WAF 적용, NLB에는 Shield Advanced 적용이 최적입니다. WAF는 ALB/API Gateway에만 지원되고 NLB에는 지원되지 않음을 기억해야 합니다."
  },
  {
    "id": 181,
    "question": "회사에는 Amazon EC2 인스턴스에서 실행되는 레거시 데이터 처리 애플리케이션이 있습니다. 데이터는 순차적으로 처리되지만 결과의 순서는 중요하지 않습니다. 응용 프로그램은 모놀리식 아키텍처를 사용합니다. 회사에서 수요 증가에 맞춰 애플리케이션을 확장할 수 있는 유일한 방법은 인스턴스 크기를 늘리는 것입니다. 이 회사의 개발자는 Amazon Elastic Container Service(Amazon ECS)에서 마이크로서비스 아키텍처를 사용하도록 애플리케이션을 다시 작성하기로 결정했습니다. 솔루션 설계자는 마이크로서비스 간의 통신을 위해 무엇을 권장해야 합니까?",
    "options": {
      "A": "Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. 데이터 생산자에 코드를 추가하고 데이터를 대기열로 보냅니다. 데이터 소비자에 코드를 추가하여 대기열의 데이터를 처리합니다.",
      "B": "Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. 데이터 생산자에 코드를 추가하고 주제에 알림을 게시합니다. 데이터 소비자에 코드를 추가하여 주제를 구독합니다.",
      "C": "메시지를 전달할 AWS Lambda 함수를 생성합니다. 데이터 생산자에 코드를 추가하여 데이터 객체로 Lambda 함수를 호출합니다. 데이터 소비자에 코드를 추가하여 Lambda 함수에서 전달되는 데이터 객체를 수신합니다.",
      "D": "Amazon DynamoDB 테이블을 생성합니다. DynamoDB 스트림을 활성화합니다. 데이터 생산자에 코드를 추가하여 테이블에 데이터를 삽입합니다. 데이터 소비자에 코드를 추가하여 DynamoDB Streams API 를 사용하여 새 테이블 항목을 감지하고 데이터를 검색합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SQS — 비동기 메시지 큐, 생산자-소비자 분리, 순서 불필수 처리\n▸ 느슨한 결합 — 컴포넌트 독립 확장 가능\n\n【정답 포인트】\n▸ 순차 처리, 결과 순서 불중요 → SQS 표준 큐 최적화\n▸ 비동기 통신 → 생산자-소비자 간 직접 의존성 제거\n▸ 탄력적 확장 → 소비자 인스턴스 수 동적 조정\n\n【오답 체크】\n(B) SNS — Pub/Sub 패턴, 브로드캐스트용, 순차 처리 및 큐잉 목적에 부적절\n(C) Lambda — 직접 호출 모델, 동기식, 높은 결합도, 느슨한 결합 미흡\n(D) DynamoDB Streams — 데이터 변경 감지용, 메시지 큐 대체 미적절, 운영 복잡도 높음\n\n【시험 포인트】\n마이크로서비스 간 비동기 통신 시나리오에서 \"순서 불중요\"는 SQS 표준 큐의 핵심 특징입니다. SNS는 즉시 알림 전달(Pub/Sub), Lambda는 동기 통신용이므로 부적절합니다. SQS는 대기열 기반 비동기 처리로 마이크로서비스 아키텍처 확장성을 극대화합니다."
  },
  {
    "id": 182,
    "question": "회사에서 MySQL 데이터베이스를 온프레미스에서 AWS 로 마이그레이션하려고 합니다. 이 회사는 최근 비즈니스에 상당한 영향을 미치는 데이터베이스 중단을 경험했습니다. 이러한 일이 다시 발생하지 않도록 회사는 데이터 손실을 최소화하고 모든 트랜잭션을 최소 두 개의 노드에 저장하는 안정적인 AWS 데이터베이스 솔루션을 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "3개의 가용 영역에 있는 3개의 노드에 대한 동기식 복제로 Amazon RDS DB 인스턴스를 생성합니다.",
      "B": "다중 AZ 기능이 활성화된 Amazon RDS MySQL DB 인스턴스를 생성하여 데이터를 동기식으로 복제합니다.",
      "C": "Amazon RDS MySQL DB 인스턴스를 생성한 다음 데이터를 동기식으로 복제하는 별도의 AWS 리전에서 읽기 전용 복제본을 생성합니다.",
      "D": "Amazon RDS MySQL DB 인스턴스에 데이터를 동기식으로 복제하기 위해 AWS Lambda 함수를 트리거하는 MySQL 엔진이 설치된 Amazon EC2 인스턴스를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 다중 AZ(Multi-AZ) — 주 인스턴스 + 동기식 대기 인스턴스(다른 AZ)\n▸ 동기식 복제 — 트랜잭션 커밋 시 최소 두 노드에 저장 보장\n▸ 자동 장애 조치 — 주 노드 장애 시 대기 인스턴스 자동 승격\n\n【정답 포인트】\n▸ \"최소 두 개 노드\" 요구사항 → Multi-AZ가 정확히 충족(주 + 대기)\n▸ 동기식 복제 보장 → 데이터 손실 최소화, 높은 내구성\n▸ 최소 운영 오버헤드 → AWS 자동 관리, 수동 개입 불필요\n\n【오답 체크】\n(A) 3 AZ + 3 노드 — 요구사항 초과, 불필요한 복잡도 및 비용 증가\n(C) 읽기 복제본 — 비동기식(RPO 간격 발생), 읽기 전용, 장애 조치 미흡\n(D) EC2 + Lambda — 복잡한 관리, 높은 운영 부담, AWS 관리 기능 활용 미흡\n\n【시험 포인트】\n\"최소 두 개의 노드\"와 \"동기식 복제\"라는 조건은 Multi-AZ의 정확한 정의입니다. Multi-AZ는 주 인스턴스와 같은 AZ 내 또는 다른 AZ의 대기 인스턴스로 구성되며, 동기식 복제로 트랜잭션 안정성을 보장합니다. 중단 경험이 있는 회사의 재해 복구 전략으로 최적화된 솔루션입니다."
  },
  {
    "id": 183,
    "question": "회사에서 새로운 동적 주문 웹사이트를 구축하고 있습니다. 회사는 서버 유지 관리 및 패치를 최소화하려고 합니다. 웹 사이트는 가용성이 높아야 하며 사용자 요구의 변화를 충족하기 위해 가능한 한 빨리 읽기 및 쓰기 용량을 확장해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3에서 정적 콘텐츠를 호스팅합니다. Amazon API Gateway 및 AWS Lambda를 사용하여 동적 콘텐츠를 호스팅합니다. 데이터베이스에 대한 온디맨드 용량과 함께 Amazon DynamoDB를 사용합니다. 웹 사이트 콘텐츠를 제공하도록 Amazon CloudFront를 구성합니다.",
      "B": "Amazon S3에서 정적 콘텐츠를 호스팅합니다. Amazon API Gateway 및 AWS Lambda를 사용하여 동적 콘텐츠를 호스팅합니다. 데이터베이스에는 Aurora Auto Scaling 과 함께 Amazon Aurora 를 사용하십시오. 웹 사이트 콘텐츠를 제공하도록 Amazon CloudFront 를 구성합니다.",
      "C": "Amazon EC2 인스턴스에서 모든 웹 사이트 콘텐츠를 호스팅합니다. Auto Scaling 그룹을 생성하여 EC2 인스턴스를 확장합니다. Application Load Balancer 를 사용하여 트래픽을 분산합니다. 데이터베이스에 대해 프로비저닝된 쓰기 용량과 함께 Amazon DynamoDB 를 사용합니다.",
      "D": "Amazon EC2 인스턴스에서 모든 웹 사이트 콘텐츠를 호스팅합니다. Auto Scaling 그룹을 생성하여 EC2 인스턴스를 확장합니다. Application Load Balancer 를 사용하여 트래픽을 분산합니다. 데이터베이스에는 Aurora Auto Scaling 과 함께 Amazon Aurora 를 사용하십시오."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 서버리스 아키텍처 — EC2 관리 제거, 완전 자동 확장\n▸ 온디맨드 용량 — 사용량에 따른 자동 요금 계산, 사전 프로비저닝 불필요\n▸ 다층 캐싱 — CloudFront 엣지, DynamoDB 성능\n\n【정답 포인트】\n▸ \"서버 유지 관리 최소화\" → 서버리스(Lambda, DynamoDB) 선택\n▸ \"빠른 읽기/쓰기 확장\" → DynamoDB 온디맨드 모드(자동 확장)\n▸ \"고가용성\" → CloudFront + API Gateway + Lambda 모두 고가용성 기본\n\n【오답 체크】\n(B) Aurora → 데이터베이스 인스턴스 관리 필요, 수동 프로비저닝\n(C) \n(D) EC2 → 인스턴스 패치, OS 관리 필수, 서버 유지보수 최소화 미충족\n(C) 프로비저닝 용량 → 사용 패턴 예측 필요, 확장 지연\n\n【시험 포인트】\n\"서버 유지 관리 최소화\"와 \"빠른 확장\"을 동시에 요구하면 항상 서버리스 아키텍처입니다. DynamoDB 온디맨드 모드는 사용량에 즉시 반응하므로 \"가능한 한 빨리 확장\"을 만족합니다. EC2나 프로비저닝 기반은 사전 용량 계획 필요로 빠른 확장에 제약이 있습니다."
  },
  {
    "id": 184,
    "question": "회사에 소프트웨어 엔지니어링에 사용되는 AWS 계정이 있습니다. AWS 계정은 한 쌍의 AWS Direct Connect 연결을 통해 회사의 온프레미스 데이터 센터에 액세스할 수 있습니다. 모든 비 VPC 트래픽은 가상 프라이빗 게이트웨이로 라우팅됩니다. 개발팀은 최근 콘솔을 통해 AWS Lambda 함수를 생성했습니다. 개발 팀은 함수가 회사 데이터 센터의 프라이빗 서브넷에서 실행되는 데이터베이스에 액세스할 수 있도록 허용해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "적절한 보안 그룹을 사용하여 VPC에서 실행되도록 Lambda 함수를 구성합니다.",
      "B": "AWS에서 데이터 센터로 VPN 연결을 설정합니다. VPN을 통해 Lambda 함수의 트래픽을 라우팅합니다.",
      "C": "Lambda 함수가 Direct Connect 를 통해 온프레미스 데이터 센터에 액세스할 수 있도록 VPC의 라우팅 테이블을 업데이트합니다.",
      "D": "탄력적 IP 주소를 생성합니다. 탄력적 네트워크 인터페이스 없이 탄력적 IP 주소를 통해 트래픽을 보내도록 Lambda 함수를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Lambda VPC 구성 — Lambda 함수를 VPC 내 서브넷에 실행\n▸ 보안 그룹 — 온프레미스 프라이빗 서브넷의 DB 접근 규칙 정의\n▸ Direct Connect 경로 — VPC의 기존 하이브리드 네트워크 경로 활용\n\n【정답 포인트】\n▸ Lambda → VPC 배치 → Direct Connect 경로 자동 활용\n▸ 보안 그룹 → DB 접근 제어(온프레미스 서브넷 트래픽 허용)\n▸ 기존 인프라 활용 → 추가 VPN/라우팅 변경 불필요\n\n【오답 체크】\n(B) VPN 추가 설정 — Direct Connect 이미 존재, 중복 연결 불필요\n(C) 라우팅 테이블만 수정 — Lambda가 VPC 내에 없으면 VPC 경로 사용 불가\n(D) 탄력적 IP — 네트워크 인터페이스 필요, Lambda ENI 없이는 비실용적\n\n【시험 포인트】\nLambda가 온프레미스 리소스 접근이 필요할 때의 표준 솔루션은 \"Lambda를 VPC 내에 배치\"입니다. VPC에 배치되면 VPC의 라우팅 테이블을 따르므로 기존 Direct Connect 경로를 자동으로 활용합니다. 보안 그룹으로 온프레미스 DB 접근을 허용하면 추가 설정 없이 통신이 가능합니다."
  },
  {
    "id": 185,
    "question": "회사에서 Amazon ECS 를 사용하여 애플리케이션을 실행합니다. 애플리케이션은 원본 이미지의 크기가 조정된 버전을 생성한 다음 Amazon S3 API 를 호출하여 크기가 조정된 이미지를 Amazon S3에 저장합니다. 솔루션 설계자는 애플리케이션이 Amazon S3 에 액세스할 권한이 있는지 어떻게 확인할 수 있습니까?",
    "options": {
      "A": "Amazon ECS에서 읽기/쓰기 액세스를 허용하도록 AWS IAM에서 S3 역할을 업데이트한 다음 컨테이너를 다시 시작합니다.",
      "B": "S3 권한이 있는 IAM 역할을 생성한 다음 작업 정의에서 해당 역할을 taskRoleArn 으로 지정합니다.",
      "C": "Amazon ECS 에서 Amazon S3 로의 액세스를 허용하는 보안 그룹을 생성하고 ECS 클러스터에서 사용하는 시작 구성을 업데이트합니다.",
      "D": "S3 권한이 있는 IAM 사용자를 만든 다음 이 계정으로 로그인한 상태에서 ECS 클러스터에 대한 Amazon EC2 인스턴스를 다시 시작합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ taskRoleArn — ECS 작업(컨테이너)에 부여되는 IAM 역할\n▸ 작업 정의 — 컨테이너 실행 메타데이터, 역할 지정 위치\n▸ 임시 자격증명 — ECS 에이전트가 자동 제공\n\n【정답 포인트】\n▸ 작업 레벨 권한 → taskRoleArn으로 특정 작업에만 S3 접근 부여\n▸ 보안 격리 → 다른 작업/애플리케이션과 권한 분리\n▸ 작업 정의 기반 → 컨테이너 배포 시마다 일관되게 적용\n\n【오답 체크】\n(A) ECS 서비스 역할 수정 → ECS 관리 권한 부여, 개별 작업 권한 설정 미흡\n(C) 보안 그룹 → 네트워크 수준 제어, IAM 기반 S3 접근 불가능\n(D) IAM 사용자 + 인스턴스 로그인 — 자동 임시 자격증명 없음, 보안 취약\n\n【시험 포인트】\nECS 작업에 AWS 서비스 접근 권한을 부여할 때 최우선은 \"taskRoleArn\"입니다. taskRoleArn은 작업 정의에서 지정되며, 실행 중인 컨테이너에 IAM 역할 기반의 임시 자격증명을 제공합니다. 보안 그룹은 네트워크 수준, IAM은 권한 수준이므로 둘 다 필요하지만 S3 API 호출 인증은 IAM 역할로만 가능합니다."
  },
  {
    "id": 186,
    "question": "회사에 AWS 로 마이그레이션해야 하는 Windows 기반 애플리케이션이 있습니다. 이 애플리케이션은 여러 가용 영역에 배포된 여러 Amazon EC2 Windows 인스턴스에 연결된 공유 Windows 파일 시스템을 사용해야 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "볼륨 게이트웨이 모드에서 AWS Storage Gateway 를 구성합니다. 각 Windows 인스턴스에 볼륨을 마운트합니다.",
      "B": "Windows 파일 서버용 Amazon FSx 를 구성합니다. Amazon FSx 파일 시스템을 각 Windows 인스턴스에 탑재합니다.",
      "C": "Amazon Elastic File System(Amazon EFS)을 사용하여 파일 시스템을 구성합니다. EFS 파일 시스템을 각 Windows 인스턴스에 마운트합니다.",
      "D": "필요한 크기로 Amazon Elastic Block Store(Amazon EBS) 볼륨을 구성합니다. 각 EC2 인스턴스를 볼륨에 연결합니다. 볼륨 내의 파일 시스템을 각 Windows 인스턴스에 마운트합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon FSx for Windows File Server — Windows 네이티브 SMB 프로토콜, NTFS 지원\n▸ 다중 AZ 공유 접근 — 여러 인스턴스 동시 마운트, 클러스터 파일 시스템\n▸ Windows 호환성 — Active Directory 통합, 권한 관리\n\n【정답 포인트】\n▸ Windows 애플리케이션 → Windows 파일 시스템 필수(SMB, NTFS)\n▸ 다중 AZ 공유 → FSx가 다중 AZ 접근 기본 제공\n▸ 마이그레이션 용이 → 기존 Windows 파일 시스템과 호환\n\n【오답 체크】\n(A) Storage Gateway — 온프레미스 데이터센터 연동, AWS로 마이그레이션 후 불필요\n(C) EFS — Linux 전용, Windows 지원 불가\n(D) EBS — 단일 인스턴스 연결만 가능(멀티마운트 미지원), 공유 접근 불가\n\n【시험 포인트】\nWindows 기반 다중 AZ 공유 파일 시스템 시나리오는 FSx for Windows File Server의 정의적 사용 사례입니다. EFS는 Linux 전용, EBS는 단일 인스턴스 전용, Storage Gateway는 하이브리드 용이므로 모두 부적절합니다. FSx는 Windows SMB 프로토콜과 NTFS를 지원하여 Windows 애플리케이션 마이그레이션의 최선책입니다."
  },
  {
    "id": 187,
    "question": "한 회사에서 로드 밸런싱된 프런트 엔드, 컨테이너 기반 애플리케이션 및 관계형 데이터베이스로 구성될 전자상거래 애플리케이션을 개발하고 있습니다. 솔루션 설계자는 가능한 한 적은 수동 개입으로 작동하는 고가용성 솔루션을 만들어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (2개 선택)",
    "options": {
      "A": "다중 AZ 모드에서 Amazon RDS DB 인스턴스를 생성합니다.",
      "B": "다른 가용 영역에서 Amazon RDS DB 인스턴스와 하나 이상의 복제본을 생성합니다.",
      "C": "동적 애플리케이션 로드를 처리하기 위해 Amazon EC2 인스턴스 기반 Docker 클러스터를 생성합니다.",
      "D": "동적 애플리케이션 로드를 처리하기 위해 Fargate 시작 유형으로 Amazon Elastic Container Service(Amazon ECS) 클러스터를 생성합니다.",
      "E": "동적 애플리케이션 로드를 처리하기 위해 Amazon EC2 시작 유형으로 Amazon Elastic Container Service(Amazon ECS) 클러스터를 생성합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ 다중 AZ Multi-AZ — 데이터베이스 자동 장애 조치, 최소 수동 개입\n▸ Fargate — 컨테이너 자동 확장, 서버 관리 제거\n▸ 자동화된 인프라 — 수동 개입 최소화\n\n【정답 포인트】\n▸ Multi-AZ\n(A) — DB 고가용성, 자동 장애 조치, 수동 개입 불필요\n▸ Fargate\n(D) — 애플리케이션 자동 확장, 서버 패치/관리 불필요\n▸ 조합 선택 — 데이터베이스 + 애플리케이션 계층 모두 자동화\n\n【오답 체크】\n(B) 읽기 복제본 — 읽기 확장은 제공, 자동 장애 조치 미흡(수동 승격)\n(C) EC2 Docker 클러스터 — EC2 인스턴스 패치/관리 필요, 수동 개입 증가\n(E) ECS EC2 타입 — EC2 관리 필요, Fargate 대비 수동 개입 많음\n\n【시험 포인트】\n\"적은 수동 개입\"과 \"고가용성\"을 동시에 요구하면 관리형 서비스를 선택합니다. Multi-AZ는 RDS 자동 장애 조치의 표준, Fargate는 컨테이너 자동 관리의 표준입니다. 읽기 복제본은 확장이지만 자동 장애 조치 없으므로 부적절합니다."
  },
  {
    "id": 188,
    "question": "회사는 Amazon S3 를 데이터 레이크로 사용합니다. 회사에는 SFTP 를 사용하여 데이터 파일을 업로드해야 하는 새로운 파트너가 있습니다. 솔루션 설계자는 운영 오버헤드를 최소화하는 고가용성 SFTP 솔루션을 구현해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Transfer Family를 사용하여 공개적으로 액세스할 수 있는 엔드포인트가 있는 SFTP 지원 서버를 구성합니다. S3 데이터 레이크를 대상으로 선택합니다.",
      "B": "Amazon S3 파일 게이트웨이를 SFTP 서버로 사용합니다. S3 파일 게이트웨이 엔드포인트 URL 을 새 파트너에게 노출합니다. S3 파일 게이트웨이 엔드포인트를 새 파트너와 공유합니다.",
      "C": "VP의 프라이빗 서브넷에서 Amazon EC2 인스턴스를 시작합니다. 새 파트너에게 VPN을 사용하여 EC2 인스턴스에 파일을 업로드하도록 지시합니다. EC2 인스턴스에서 cron 작업 스크립트를 실행하여 S3 데이터 레이크에 파일을 업로드합니다.",
      "D": "VPC 의 프라이빗 서브넷에서 Amazon EC2 인스턴스를 시작합니다. EC2 인스턴스 앞에 NLB(Network Load Balancer)를 배치합니다. NLB 에 대한 SFTP 수신기 포트를 만듭니다. NLB 호스트 이름을 새 파트너와 공유합니다. EC2 인스턴스에서 cron 작업 스크립트를 실행하여 S3 데이터 레이크에 파일을 업로드합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Transfer Family — 관리형 SFTP/FTPS/FTP 서비스, S3 직접 통합\n▸ 고가용성 — 여러 가용 영역, 자동 확장\n▸ 운영 오버헤드 제거 — 서버 관리 불필요\n\n【정답 포인트】\n▸ 고가용성 SFTP → Transfer Family 표준 솔루션(관리형)\n▸ S3 레이크 통합 → SFTP 업로드가 S3로 직접 전달\n▸ 최소 운영 → AWS 자동 관리, 패치/스케일링 불필요\n\n【오답 체크】\n(B) S3 파일 게이트웨이 — SFTP 프로토콜 지원 안 함, NFS/SMB만 지원\n(C) \n(D) EC2 기반 — 인스턴스 관리, OS 패치, cron 스크립트 유지 필요, 운영 부담 높음\n(D) NLB + EC2 — EC2 장애 시 수동 대응, 자동 고가용성 미제공\n\n【시험 포인트】\nSFTP → S3 시나리오에서 \"고가용성\"과 \"최소 운영 오버헤드\"를 동시 요구하면 Transfer Family입니다. S3 파일 게이트웨이는 SFTP를 지원하지 않으므로 오답이고, EC2 기반은 서버 관리 필요로 오버헤드가 최소화되지 않습니다. Transfer Family는 SFTP 프로토콜을 지원하고 S3로 직접 저장하는 관리형 서비스입니다."
  },
  {
    "id": 189,
    "question": "회사는 계약 문서를 보관해야 합니다. 계약은 5 년 동안 지속됩니다. 회사는 5 년 동안 문서를 덮어쓰거나 삭제할 수 없도록 해야 합니다. 회사는 미사용 문서를 암호화하고 매년 암호화 키를 자동으로 교체해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하기 위해 솔루션 설계자가 수행해야 하는 단계 조합은 무엇입니까? (두 가지를 선택하세요.)",
    "options": {
      "A": "Amazon S3에 문서를 저장합니다. 거버넌스 모드에서 S3 객체 잠금을 사용합니다.",
      "B": "Amazon S3에 문서를 저장합니다. 규정 준수 모드에서 S3 객체 잠금을 사용합니다.",
      "C": "Amazon S3 관리형 암호화 키(SSE-S3)로 서버 측 암호화를 사용합니다. 키 순환을 구성합니다.",
      "D": "AWS Key Management Service(AWS KMS) 고객 관리형 키로 서버 측 암호화를 사용합니다. 키 순환을 구성합니다.",
      "E": "AWS Key Management Service(AWS KMS) 고객 제공(가져온) 키로 서버 측 암호화를 사용합니다. 키 순환을 구성합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ S3 객체 잠금 규정 준수 모드 — 5년 보존 강제, 덮어쓰기/삭제 불가\n▸ KMS 고객 관리형 키 — 자동 키 순환 정책 설정 가능\n▸ 감사 요구사항 — 불변성 + 자동 암호화 키 교체\n\n【정답 포인트】\n▸ 규정 준수 모드\n(B) — 5년 보존 자동 적용, 법적 삭제 불가\n▸ KMS 고객 관리형 키\n(D) — 자동 연간 키 순환 설정 가능\n▸ 최소 운영 오버헤드 → 두 기능 모두 정책 기반 자동화\n\n【오답 체크】\n(A) 거버넌스 모드 — 관리자 권한으로 보존 기간 변경 가능(5년 강제 미흡)\n(C) SSE-S3 — 자동 키 순환 미지원, 사용자 제어 불가능\n(E) 고객 제공 키 — 고객이 키 순환 관리 필요, AWS 자동화 불가능\n\n【시험 포인트】\n\"5년 동안 삭제 불가\"는 규정 준수 모드만 보장합니다(거버넌스는 예외 허용). \"자동 키 순환\"은 KMS 고객 관리형 키만 지원합니다(SSE-S3는 미지원, 고객 키는 사용자 책임). 규정과 암호화 관리를 동시에 충족하려면 B + D 조합이 필수입니다."
  },
  {
    "id": 190,
    "question": "회사에 Java 및 PHP 기반 웹 애플리케이션이 있습니다. 회사는 애플리케이션을 온프레미스에서 AWS 로 옮길 계획입니다. 회사는 새로운 사이트 기능을 자주 테스트할 수 있는 능력이 필요합니다. 회사는 또한 최소한의 운영 오버헤드를 필요로 하는 가용성이 높고 관리되는 솔루션이 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 버킷을 생성합니다. S3 버킷에서 정적 웹 호스팅을 활성화합니다. 정적 콘텐츠를 S3 버킷에 업로드합니다. AWS Lambda 를 사용하여 모든 동적 콘텐츠를 처리합니다.",
      "B": "웹 애플리케이션을 AWS Elastic Beanstalk 환경에 배포합니다. 기능 테스트를 위해 URL 스와핑을 사용하여 여러 Elastic Beanstalk 환경 간에 전환합니다.",
      "C": "Java 및 PHP 로 구성된 Amazon EC2 인스턴스에 웹 애플리케이션을 배포합니다. Auto Scaling 그룹과 Application Load Balancer를 사용하여 웹 사이트의 가용성을 관리하십시오.",
      "D": "웹 애플리케이션을 컨테이너화합니다. 웹 애플리케이션을 Amazon EC2 인스턴스에 배포합니다. AWS 로드 밸런서 컨트롤러를 사용하여 테스트용 새 사이트 기능이 포함된 컨테이너 간에 트래픽을 동적으로 라우팅합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Elastic Beanstalk — 애플리케이션 배포 자동화, 인프라 관리 제거\n▸ 환경 URL 스와핑 — 블루-그린 배포, 제로 다운타임 전환\n▸ 기능 테스트 — 프로덕션 전 스테이징 환경에서 새 기능 검증\n\n【정답 포인트】\n▸ \"새 기능 자주 테스트\" → 환경 스와핑으로 즉시 프로덕션 교체 가능\n▸ \"최소 운영 오버헤드\" → Beanstalk가 인프라 자동 관리\n▸ \"고가용성\" → Beanstalk 기본 제공(Auto Scaling, LB)\n\n【오답 체크】\n(A) S3 + Lambda — 동적 콘텐츠 처리 제한적, Java/PHP 전체 배포 미적절\n(C) EC2 직접 관리 — 서버 패치, OS 관리 필요, 운영 오버헤드 높음\n(D) 컨테이너 + EC2 — 컨테이너 오케스트레이션 수동, 운영 부담 증가\n\n【시험 포인트】\n\"새 기능을 자주 테스트\"할 수 있는 능력은 환경 분리 + 빠른 전환입니다. Elastic Beanstalk의 URL 스와핑은 정확히 이 요구사항을 충족합니다. 기존 프로덕션을 유지하면서 스테이징 환경에서 새 기능 검증 후 한 번의 스왑으로 프로덕션 변경이 가능합니다. EC2 또는 컨테이너 직접 관리는 배포 복잡도가 높습니다."
  },
  {
    "id": 191,
    "question": "회사에는 MySQL 용 Amazon RDS 에 고객 정보를 저장하는 주문 애플리케이션이 있습니다. 정규 업무 시간 동안 직원은 보고 목적으로 일회성 쿼리를 실행합니다. 보고 쿼리를 실행하는 데 시간이 오래 걸리기 때문에 주문 처리 중에 시간 초과가 발생합니다. 회사는 직원이 쿼리를 수행하는 것을 막지 않으면서 시간 초과를 제거해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "읽기 전용 복제본을 생성합니다. 보고 쿼리를 읽기 전용 복제본으로 이동합니다.",
      "B": "읽기 전용 복제본을 생성합니다. 주문 애플리케이션을 기본 DB 인스턴스와 읽기 전용 복제본에 배포합니다.",
      "C": "주문형 용량이 있는 Amazon DynamoDB로 주문 애플리케이션을 마이그레이션합니다.",
      "D": "사용량이 적은 시간에 보고 쿼리를 예약합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RDS 읽기 전용 복제본 — 기본 DB와 비동기 복제 동기화, 읽기 전용 워크로드 분리\n▸ 읽기/쓰기 분리 — OLTP와 OLAP 워크로드를 독립적 인스턴스로 격리\n\n【정답 포인트】\n▸ 보고 쿼리 분리 → 읽기 복제본으로 이동 → 주 DB 부하 제거 → 주문 처리 성능 복구\n▸ 직원의 쿼리 권한 유지 → 읽기 전용 복제본이 모든 데이터 포함 → 요구사항 충족\n\n【오답 체크】\n(B) 앱을 양쪽에 배포하면 쓰기 경합 재발생, 복제본 목적 상실\n(C) 마이그레이션은 개발비 높고 기존 애플리케이션 코드 변경 필수\n(D) 예약만으로는 업무시간 중 즉석 쿼리 요청 대응 불가, 근본 해결 아님\n\n【시험 포인트】\n▸ 읽기 부하 분산 패턴 → 복제본 추가 → 주 DB 리소스 절약\n▸ 분석 쿼리 격리 아키텍처 → 운영 DB 보호, 비용 효율적"
  },
  {
    "id": 192,
    "question": "한 병원에서 대규모 기록 기록 수집을 위한 디지털 사본을 만들고자 합니다. 병원은 매일 수백 개의 새로운 문서를 계속 추가할 것입니다. 병원의 데이터 팀이 문서를 스캔하고 문서를 AWS 클라우드에 업로드합니다. 솔루션 설계자는 애플리케이션이 데이터에 대해 SQL 쿼리를 실행할 수 있도록 문서를 분석하고, 의료 정보를 추출하고, 문서를 저장하는 솔루션을 구현해야 합니다. 솔루션은 확장성과 운영 효율성을 극대화해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (2개 선택)",
    "options": {
      "A": "MySQL 데이터베이스를 실행하는 Amazon EC2 인스턴스에 문서 정보를 씁니다.",
      "B": "문서 정보를 Amazon S3 버킷에 씁니다. Amazon Athena 를 사용하여 데이터를 쿼리합니다.",
      "C": "Amazon EC2 인스턴스의 Auto Scaling 그룹을 생성하여 스캔한 파일을 처리하고 의료 정보를 추출하는 사용자 지정 애플리케이션을 실행합니다.",
      "D": "새 문서가 업로드될 때 실행되는 AWS Lambda 함수를 생성합니다. Amazon Rekognition을 사용하여 문서를 원시 텍스트로 변환합니다. Amazon Transcribe Medical을 사용하여 텍스트에서 관련 의료 정보를 감지하고 추출합니다.",
      "E": "새 문서가 업로드될 때 실행되는 AWS Lambda 함수를 생성합니다. Amazon Textract 를 사용하여 문서를 원시 텍스트로 변환합니다. Amazon Comprehend Medical 을 사용하여 텍스트에서 관련 의료 정보를 감지하고 추출합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ Amazon Textract — 스캔된 문서/이미지에서 텍스트 추출, OCR 대체\n▸ Amazon Comprehend Medical — 의료 텍스트에서 진단, 약물, 해부학적 개체명 감지\n▸ Amazon Athena — S3 데이터 레이크에 대한 표준 SQL 쿼리 엔진\n\n【정답 포인트】\n▸ E) Lambda 트리거 + Textract(문서→텍스트) + Comprehend Medical(텍스트→의료정보) → 자동화, 서버리스 확장\n▸ B) S3 저장 + Athena SQL 쿼리 → 운영 오버헤드 최소, 분석 쿼리 지원\n▸ 조합: 자동 추출\n(E) + 데이터레이크 저장\n(B) → 확장성·효율성 극대화\n\n【오답 체크】\n(A) EC2 기반 DB → 용량 계획, 패치 관리 필수, 운영 오버헤드 높음\n(C) Auto Scaling 그룹 → 서버리스보다 관리 복잡, Lambda\n(E) 가 더 효율적\n(D) Rekognition(음성 인식) + Transcribe Medical(음성→텍스트) → 이미지 문서에 부적절, Textract가 정확\n\n【시험 포인트】\n▸ 의료 AI 서비스 선택 → Comprehend Medical 전문화, Transcribe Medical은 음성 전용\n▸ 서버리스 아키텍처 패턴 → Lambda + 관리형 서비스 → 확장성 자동화"
  },
  {
    "id": 193,
    "question": "회사는 Amazon EC2 인스턴스에서 배치 애플리케이션을 실행하고 있습니다. 애플리케이션은 여러 Amazon RDS 데이터베이스가 있는 백엔드로 구성됩니다. 응용 프로그램으로 인해 데이터베이스에서 많은 수의 읽기가 발생하고 있습니다. 솔루션 설계자는 고가용성을 보장하면서 데이터베이스 읽기 수를 줄여야 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon RDS 읽기 전용 복제본을 추가합니다.",
      "B": "Redis용 Amazon ElastiCache를 사용합니다.",
      "C": "Amazon Route 53 DNS 캐싱 사용",
      "D": "Memcached용 Amazon ElastiCache를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RDS 읽기 전용 복제본 — 기본 DB로부터 비동기 복제, 읽기 트래픽 분산\n▸ 고가용성 — 자동 장애조치(Multi-AZ)가 아닌 읽기 분산을 통한 복원력\n\n【정답 포인트】\n▸ 읽기 수 감소 필요 → 복제본 추가 → 각 복제본이 읽기 부하 부담 → DB 부하 균형\n▸ 고가용성 유지 → 복제본 추가는 데이터 가용성 보장, 기본 DB 장애시 승격 가능\n\n【오답 체크】\n(B) \n(D) ElastiCache(Redis/Memcached) → 인메모리 캐시용, 데이터베이스 읽기 완전 대체 불가, 복잡한 동기화 필요\n(C) Route 53 DNS 캐싱 → 네트워크 수준 해결, DB 읽기 부하 감소 효과 없음\n\n【시험 포인트】\n▸ 읽기 워크로드 분산 → RDS 복제본이 직접적 솔루션\n▸ 캐시(B/D) vs 복제본\n(A) 선택 → 완전 쿼리 오프로딩 필요시 복제본 우선"
  },
  {
    "id": 194,
    "question": "회사는 AWS 에서 중요한 애플리케이션을 실행해야 합니다. 회사는 애플리케이션의 데이터베이스에 Amazon EC2 를 사용해야 합니다. 데이터베이스는 가용성이 높아야 하며 중단 이벤트가 발생할 경우 자동으로 장애 조치되어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "동일한 AWS 지역의 다른 가용 영역에서 각각 두 개의 EC2 인스턴스를 시작합니다. 두 EC2 인스턴스 모두에 데이터베이스를 설치합니다. EC2 인스턴스를 클러스터로 구성합니다. 데이터베이스 복제를 설정합니다.",
      "B": "가용 영역에서 EC2 인스턴스를 시작합니다. EC2 인스턴스에 데이터베이스를 설치합니다. Amazon 머신 이미지(AMI)를 사용하여 데이터를 백업하십시오. 중단 이벤트가 발생할 경우 AWS CloudFormation을 사용하여 EC2 인스턴스의 프로비저닝을 자동화하십시오.",
      "C": "각각 다른 AWS 지역에서 두 개의 EC2 인스턴스를 시작합니다. 두 EC2 인스턴스 모두에 데이터베이스를 설치합니다. 데이터베이스 복제를 설정합니다. 데이터베이스를 두 번째 리전으로 장애 조치합니다.",
      "D": "가용 영역에서 EC2 인스턴스를 시작합니다. EC2 인스턴스에 데이터베이스를 설치합니다. Amazon 머신 이미지(AMI)를 사용하여 데이터를 백업하십시오. 중단 이벤트가 발생하면 EC2 자동 복구를 사용하여 인스턴스를 복구하십시오."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Multi-AZ 클러스터 아키텍처 — 가용영역 간 동기식 데이터베이스 복제\n▸ 자동 장애조치 — 클러스터 소프트웨어가 주 인스턴스 장애시 자동 승격\n\n【정답 포인트】\n▸ AZ 내 격리 → 기본 인스턴스 장애시 별도 AZ의 복제본 승격 → 자동 장애조치\n▸ 데이터베이스 복제 설정 → 동기식 복제로 데이터 손실 최소화\n▸ EC2 클러스터 구성 → 응용 프로그램 자동 전환, 가용성 극대화\n\n【오답 체크】\n(B) CloudFormation 자동화 → 프로비저닝 시간 소요, \"자동\" 장애조치 아님, 수동 개입 필요\n(C) 리전 간 배치 → 목표초과(RTO/RPO 요구사항 없음), 네트워크 지연 증가\n(D) EC2 자동 복구 → 인스턴스 하드웨어만 복구, 데이터베이스 상태 보장 불가, 자동 장애조치 아님\n\n【시험 포인트】\n▸ 고가용성 + 자동 장애조치 → 동일 리전 다중 AZ가 표준패턴\n▸ \"자동으로 장애조치\" 키워드 → 클러스터/복제 필수, 수동 개입 불가"
  },
  {
    "id": 195,
    "question": "회사의 주문 시스템은 클라이언트의 요청을 Amazon EC2 인스턴스로 보냅니다. EC2 인스턴스는 주문을 처리한 다음 Amazon RDS 의 데이터베이스에 주문을 저장합니다. 사용자는 시스템이 실패하면 주문을 다시 처리해야 한다고 보고합니다. 회사는 시스템 중단이 발생할 경우 주문을 자동으로 처리할 수 있는 탄력적인 솔루션을 원합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "EC2 인스턴스를 Auto Scaling 그룹으로 이동합니다. Amazon Elastic Container Service(Amazon ECS) 작업을 대상으로 하는 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다.",
      "B": "Application Load Balancer(ALB) 뒤에 있는 Auto Scaling 그룹으로 EC2 인스턴스를 이동합니다. ALB 엔드포인트에 메시지를 보내도록 주문 시스템을 업데이트합니다.",
      "C": "EC2 인스턴스를 Auto Scaling 그룹으로 이동합니다. Amazon Simple Queue Service(Amazon SQS) 대기열로 메시지를 보내도록 주문 시스템을 구성합니다. 대기열의 메시지를 사용하도록 EC2 인스턴스를 구성합니다.",
      "D": "Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. AWS Lambda 함수를 생성하고 함수를 SNS 주제에 구독합니다. SNS 주제에 메시지를 보내도록 주문 시스템을 구성합니다. AWS Systems Manager Run Command 를 사용하여 메시지를 처리하도록 EC2 인스턴스에 명령을 보냅니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon SQS — 분리된 메시지 큐, 메시지 지속성 보장, 자동 재시도\n▸ 비동기 처리 패턴 — 생산자·소비자 분리로 장애 격리\n\n【정답 포인트】\n▸ SQS 대기열 추가 → 주문 메시지 저장 → EC2 다운시에도 메시지 보존\n▸ Auto Scaling 그룹 → EC2 재시작시 자동 메시지 처리 → 주문 손실 방지\n▸ \"탄력적\" = 장애 격리 + 자동 복구 → SQS 분리 아키텍처 필수\n\n【오답 체크】\n(A) EventBridge → 이벤트 라우팅용, 메시지 큐가 아님, 장애시 메시지 손실 가능\n(B) ALB → 로드밸런싱만 수행, 메시지 지속성 제공 안함, 장애시 요청 손실\n(D) SNS + Systems Manager Run Command → SNS는 팬아웃만, EC2 수동 명령 필요, 자동 재처리 불가\n\n【시험 포인트】\n▸ 주문 손실 방지 → 메시지 큐(SQS) 필수\n▸ \"자동 처리\" → SQS 워커 패턴이 표준, 일회성 이벤트 아님"
  },
  {
    "id": 196,
    "question": "회사는 대규모 Amazon EC2 인스턴스 플릿에서 애플리케이션을 실행합니다. 애플리케이션은 항목을 읽고 Amazon DynamoDB 테이블에 씁니다. DynamoDB 테이블의 크기는 지속적으로 증가하지만 애플리케이션에는 지난 30 일 동안의 데이터만 필요합니다. 회사는 비용과 개발 노력을 최소화하는 솔루션이 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS CloudFormation 템플릿을 사용하여 전체 솔루션을 배포합니다. 30 일마다 CloudFormation 스택을 재배포하고 원래 스택을 삭제합니다.",
      "B": "AWS Marketplace 에서 모니터링 애플리케이션을 실행하는 EC2 인스턴스를 사용합니다. Amazon DynamoDB Streams 를 사용하여 테이블에 새 항목이 생성될 때 타임스탬프를 저장하도록 모니터링 애플리케이션을 구성합니다. EC2 인스턴스에서 실행되는 스크립트를 사용하여 30일보다 오래된 타임스탬프가 있는 항목을 삭제합니다.",
      "C": "테이블에 새 항목이 생성될 때 AWS Lambda 함수를 호출하도록 Amazon DynamoDB Streams 를 구성합니다. 테이블에서 30 일보다 오래된 항목을 삭제하도록 Lambda 함수를 구성합니다.",
      "D": "애플리케이션을 확장하여 현재 타임스탬프에 30 일을 더한 값을 테이블에 생성된 각 새 항목에 추가하는 속성을 추가합니다. 속성을 TTL 속성으로 사용하도록 DynamoDB 를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ DynamoDB TTL(Time To Live) — 만료 시간 도달시 자동 삭제, 관리 불필요\n▸ TTL 속성 — Unix 타임스탬프 형식, 별도 스캔 불필요\n\n【정답 포인트】\n▸ 애플리케이션 속성 추가 → 각 항목에 만료시간 저장(현재+30일)\n▸ DynamoDB TTL 활성화 → 자동 삭제, 비용·개발 오버헤드 최소화\n▸ \"최소 비용·개발 노력\" → 추가 서비스 불필요, DynamoDB 네이티브 기능 활용\n\n【오답 체크】\n(A) CloudFormation 재배포 → 30일마다 스택 삭제 및 재생성, 서비스 중단 유발, 프로비저닝 시간 낭비\n(B) EC2 모니터링 + 수동 삭제 → 인프라 운영 필요, 개발 노력 높음, Streams 오버엔지니어링\n(C) Lambda + Streams → 추가 구성 필요, TTL이 더 간단, 불필요한 Lambda 호출 발생\n\n【시험 포인트】\n▸ TTL 패턴 → 시간 기반 데이터 자동 정리 표준 솔루션\n▸ \"최소 오버헤드\" → 네이티브 기능 우선, 외부 서비스 최소화"
  },
  {
    "id": 197,
    "question": "회사에는 온프레미스 Windows Server 에서 실행되는 Microsoft .NET 애플리케이션이 있습니다. 애플리케이션은 Oracle Database Standard를 사용하여 데이터를 저장합니다. 에디션 서버. 이 회사는 AWS 로의 마이그레이션을 계획하고 있으며 애플리케이션을 이동하는 동안 개발 변경을 최소화하려고 합니다. AWS 애플리케이션 환경은 가용성이 높아야 합니다. 이러한 요구 사항을 충족하기 위해 회사는 어떤 조합의 조치를 취해야 합니까? (두 가지를 선택하세요.)",
    "options": {
      "A": ".NET Core 를 실행하는 AWS Lambda 함수를 사용하여 애플리케이션을 서버리스로 리팩터링합니다.",
      "B": "다중 AZ 배포에서 .NET 플랫폼을 사용하여 AWS Elastic Beanstalk에서 애플리케이션을 다시 호스팅합니다.",
      "C": "Amazon Linux Amazon 머신 이미지(AMI)를 사용하여 Amazon EC2 에서 실행되도록 애플리케이션 플랫폼을 변경합니다.",
      "D": "다중 AZ 배포에서 AWS DMS(AWS Database Migration Service)를 사용하여 Oracle 데이터베이스에서 Amazon DynamoDB로 마이그레이션합니다.",
      "E": "다중 AZ 배포에서 AWS Database Migration Service(AWS DMS)를 사용하여 Oracle 데이터베이스에서 Amazon RDS의 Oracle로 마이그레이션합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ Elastic Beanstalk — .NET 애플리케이션 호스팅, 자동 확장·배포\n▸ AWS DMS — 온프레미스 DB → AWS 데이터베이스 마이그레이션, 스키마 변환 지원\n▸ Amazon RDS Oracle — AWS 관리형 Oracle DB, 라이센스 포함\n\n【정답 포인트】\n▸ B) Elastic Beanstalk(다중 AZ) → .NET 기존 코드 변경 최소, 고가용성 자동 구성\n▸ E) DMS + RDS Oracle → Oracle 호환성 유지, 개발 변경 불필요\n▸ 조합: 애플리케이션·DB 모두 호환성 보존 → 마이그레이션 시간·리스크 최소화\n\n【오답 체크】\n(A) Lambda 리팩터링 → .NET Framework 전체 재작성 필요, \"개발 변경 최소화\" 위배\n(C) EC2 Amazon Linux → Windows 서버 → Linux 포팅 필요, 개발 노력 증가\n(D) DynamoDB → NoSQL로 스키마 변경, Oracle SQL 코드 수정 필수\n\n【시험 포인트】\n▸ \"개발 변경 최소화\" → Lift-and-Shift 패턴 (Beanstalk + RDS 동일 DBMS)\n▸ 고가용성(다중 AZ) → Beanstalk·DMS 모두 지원하는 옵션"
  },
  {
    "id": 198,
    "question": "회사는 온프레미스 데이터 센터의 Kubernetes 클러스터에서 컨테이너화된 애플리케이션을 실행합니다. 회사는 데이터 저장을 위해 MongoDB 데이터베이스를 사용하고 있습니다. 회사는 이러한 환경 중 일부를 AWS 로 마이그레이션하려고 하지만 현재로서는 코드 변경이나 배포 방법 변경이 불가능합니다. 회사는 운영 오버헤드를 최소화하는 솔루션이 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "컴퓨팅을 위해 Amazon EC2 작업자 노드와 함께 Amazon Elastic Container Service(Amazon ECS)를 사용하고 데이터 저장을 위해 EC2의 MongoDB를 사용합니다.",
      "B": "컴퓨팅용 AWS Fargate 및 데이터 저장용 Amazon DynamoDB 와 함께 Amazon Elastic Container Service(Amazon ECS)를 사용합니다.",
      "C": "Amazon Elastic Kubernetes Service(Amazon EKS)를 Amazon EC2 작업자 노드와 함께 컴퓨팅용으로 사용하고 Amazon DynamoDB를 데이터 저장용으로 사용합니다.",
      "D": "컴퓨팅용 AWS Fargate 및 데이터 스토리지용 Amazon DocumentDB(MongoDB 호환)와 함께 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ EKS + Fargate — Kubernetes 관리, 워커 노드 운영 불필요, 컨테이너 자동 실행\n▸ DocumentDB — MongoDB API 호환, 완전 관리형 데이터베이스, 코드 변경 없음\n\n【정답 포인트】\n▸ EKS(Kubernetes 유지) → 배포 방법 변경 불필요, 온프레미스 코드·스크립트 재사용\n▸ Fargate → EC2 노드 관리 제거, 운영 오버헤드 최소화\n▸ DocumentDB(MongoDB 호환) → 애플리케이션 코드 변경 불필요, 기존 MongoDB 드라이버 작동\n\n【오답 체크】\n(A) ECS + EC2 MongoDB → EC2 Kubernetes 노드 운영 필요, 운영 오버헤드 증가\n(B) ECS → Kubernetes가 아님, 배포 방식 변경 필수 (\"배포 방법 변경 불가능\" 위배)\n(C) EKS + EC2 + DynamoDB → 워커 노드 관리 필요(오버헤드 증가), DynamoDB는 MongoDB API 미지원(코드 변경 필요)\n\n【시험 포인트】\n▸ Kubernetes 유지 + 최소 운영 → EKS + Fargate 필수\n▸ MongoDB 호환성 → DocumentDB가 유일한 선택지"
  },
  {
    "id": 199,
    "question": "텔레마케팅 회사는 AWS 에서 고객 콜 센터 기능을 설계하고 있습니다. 이 회사는 여러 화자 인식을 제공하고 대본 파일을 생성하는 솔루션이 필요합니다. 회사는 비즈니스 패턴을 분석하기 위해 트랜스크립트 파일을 쿼리하려고 합니다. 기록 파일은 감사 목적으로 7 년 동안 저장되어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "여러 화자 인식을 위해 Amazon Rekognition 을 사용하십시오. 성적표 파일을 Amazon S3에 저장합니다. 성적표 파일 분석을 위해 기계 학습 모델을 사용합니다.",
      "B": "여러 화자 인식을 위해 Amazon Transcribe를 사용합니다. 성적표 파일 분석에 Amazon Athena를 사용합니다.",
      "C": "여러 화자 인식을 위해 Amazon Translate 를 사용합니다. Amazon Redshift 에 기록 파일을 저장합니다. 성적표 파일 분석에 SQL 쿼리를 사용합니다.",
      "D": "여러 화자 인식을 위해 Amazon Rekognition 을 사용합니다. 성적표 파일을 Amazon S3에 저장합니다. 성적표 파일 분석에 Amazon Textract를 사용하십시오."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Transcribe — 음성 → 텍스트 변환, 여러 화자 분리(Speaker Diarization)\n▸ Amazon Athena — S3 데이터에 대한 표준 SQL 쿼리, 스키마 정의 불필요\n▸ 감사 보관 — S3 저장소 7년 비용 효율적, 수명주기 정책으로 관리\n\n【정답 포인트】\n▸ Transcribe(음성인식) → 콜 센터 오디오 처리, 화자 식별 지원\n▸ Athena → S3 텍스트 파일에 대한 비정형 쿼리, 프로비저닝 불필요\n▸ S3 저장 → 저비용 장기보관, \"7년 감사\" 요구사항 충족\n\n【오답 체크】\n(A) Rekognition → 영상(비디오/이미지) 분석용, 음성인식 불가\n(C) Translate → 음성 번역용, 음성→텍스트 변환 안함, Redshift는 과도(구조화 필요)\n(D) Rekognition + Textract → 둘 다 시각 기반, 음성 입력 처리 안함\n\n【시험 포인트】\n▸ 음성 → 텍스트 → 분석 파이프라인 → Transcribe → Athena\n▸ 음성AI 서비스 선택 → Transcribe(음성), Rekognition(영상) 구분"
  },
  {
    "id": 200,
    "question": "회사는 AWS 에서 애플리케이션을 호스팅합니다. 이 회사는 Amazon Cognito 를 사용하여 사용자를 관리합니다. 사용자가 애플리케이션에 로그인하면 애플리케이션은 Amazon API Gateway에서 호스팅되는 REST API를 사용하여 Amazon DynamoDB에서 필요한 데이터를 가져옵니다. 이 회사는 개발 노력을 줄이기 위해 REST API에 대한 액세스를 제어하는 AWS 관리형 솔루션을 원합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "어떤 사용자가 요청했는지 확인하기 위해 API Gateway에서 권한 부여자가 되도록 AWS Lambda 함수를 구성합니다.",
      "B": "각 사용자에 대해 각 요청과 함께 전송되어야 하는 API 키를 생성하고 할당합니다. AWS Lambda 함수를 사용하여 키를 검증합니다.",
      "C": "모든 요청과 함께 헤더에 사용자의 이메일 주소를 보냅니다. 해당 이메일 주소를 가진 사용자에게 적절한 액세스 권한이 있는지 확인하려면 AWS Lambda 함수를 호출하십시오.",
      "D": "Amazon Cognito 가 각 요청을 검증할 수 있도록 API Gateway 에서 Amazon Cognito 사용자 풀 권한 부여자를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Cognito 사용자 풀 권한부여자 — API Gateway 네이티브 통합, 토큰 검증 자동화\n▸ 관리형 서비스 — Lambda 커스텀 로직 불필요, AWS 제공 기능 활용\n\n【정답 포인트】\n▸ Cognito 사용자 풀 권한부여자 활성화 → 사용자 로그인시 토큰 발급 → API Gateway 자동 검증\n▸ \"AWS 관리형\" + \"최소 오버헤드\" → Lambda 커스텀 로직 제거\n▸ 개발자가 API 호출시 Cognito 토큰 전송 → 권한부여자가 토큰 검증 → 접근 제어\n\n【오답 체크】\n(A) Lambda 커스텀 권한부여자 → 관리형 아님, 추가 코드·로직 필요 (\"개발 노력 감소\" 위배)\n(B) API 키 → 정적 키, 사용자별 권한 제어 불가, 보안 약함\n(C) 헤더 이메일 + Lambda 검증 → 이메일 위변조 가능, Lambda 추가 로직 필요\n\n【시험 포인트】\n▸ Cognito 통합 → \"관리형\", \"최소 오버헤드\" 키워드 → 권한부여자 선택 필수\n▸ API Gateway + Cognito 아키텍처 → 표준 패턴, 커스텀 로직 제거"
  },
  {
    "id": 201,
    "question": "회사에서 모바일 앱 사용자를 대상으로 하는 마케팅 커뮤니케이션 서비스를 개발하고 있습니다. 회사는 SMS(Short Message Service)를 통해 사용자에게 확인 메시지를 보내야 합니다. 사용자는 SMS 메시지에 회신할 수 있어야 합니다. 회사는 분석을 위해 응답을 1년 동안 저장해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon Connect 통화 흐름을 생성하여 SMS 메시지를 보냅니다. AWS Lambda 를 사용하여 응답을 처리합니다.",
      "B": "Amazon Pinpoint 여정을 구축하십시오. 분석 및 보관을 위해 이벤트를 Amazon Kinesis 데이터 스트림으로 보내도록 Amazon Pinpoint를 구성합니다.",
      "C": "Amazon Simple Queue Service(Amazon SQS)를 사용하여 SMS 메시지를 배포합니다. AWS Lambda를 사용하여 응답을 처리합니다.",
      "D": "Amazon Simple Notification Service(Amazon SNS) FIFO 주제를 생성합니다. 분석 및 보관을 위해 Amazon Kinesis 데이터 스트림을 SNS 주제에 구독합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Pinpoint — 마케팅 커뮤니케이션 플랫폼, SMS/푸시/이메일 통합\n▸ Pinpoint 여정 — 사용자 상호작용 자동화, 응답 추적\n▸ Kinesis 데이터 스트림 — 실시간 이벤트 스트림, 분석·보관 파이프라인\n\n【정답 포인트】\n▸ Pinpoint(SMS 송수신) → 마케팅용 전용 서비스, 양방향 응답 지원\n▸ Kinesis 스트림 → 이벤트 캡처 → 분석·보관 자동화\n▸ 조합: SMS 사용자 상호작용 → 실시간 분석 → 1년 저장\n\n【오답 체크】\n(A) Amazon Connect → 음성 통화 센터용, SMS 회신 추적 복잡\n(C) SQS → 메시지 큐, SMS 양방향 통신 미지원, 응답 수집 어려움\n(D) SNS FIFO → 메시지 브로드캐스트만, Kinesis와 통합 불자연스러움\n\n【시험 포인트】\n▸ 마케팅 SMS 여정 → Pinpoint 우선 선택지\n▸ 이벤트·응답 분석 → Kinesis 데이터 스트림으로 수집·보관"
  },
  {
    "id": 202,
    "question": "회사에서 데이터를 Amazon S3 버킷으로 이동할 계획입니다. 데이터는 S3 버킷에 저장될 때 암호화되어야 합니다. 또한 암호화 키는 매년 자동으로 순환되어야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터를 S3 버킷으로 이동합니다. Amazon S3 관리형 암호화 키(SSE-S3)로 서버 측 암호화를 사용합니다. SSE-S3 암호화 키의 기본 제공 키 회전 동작을 사용합니다.",
      "B": "AWS Key Management Service(AWS KMS) 고객 관리형 키를 생성합니다. 자동 키 순환을 활성화합니다. 고객 관리형 KMS 키를 사용하도록 S3 버킷의 기본 암호화 동작을 설정합니다. 데이터를 S3 버킷으로 이동합니다.",
      "C": "AWS Key Management Service(AWS KMS) 고객 관리형 키를 생성합니다. 고객 관리형 KMS 키를 사용하도록 S3 버킷의 기본 암호화 동작을 설정합니다. 데이터를 S3 버킷으로 이동합니다. 매년 KMS 키를 수동으로 교체합니다.",
      "D": "데이터를 S3 버킷으로 이동하기 전에 고객 키 자료로 데이터를 암호화합니다. 키 자료 없이 AWS Key Management Service(AWS KMS) 키를 생성합니다. 고객 키 자료를 KMS 키로 가져옵니다. 자동 키 순환을 활성화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SSE-S3 — AWS 관리형, 자동 로테이션 있음 (90일 내부 순환)\n▸ KMS CMK — 고객 관리형, 명시적 자동 순환 활성화 필요(1년 권장)\n▸ KMS 자동 순환 — 매년 새 키 생성, 이전 키 보존(복호화용)\n\n【정답 포인트】\n▸ KMS CMK 생성 → 추가 제어(정책), 감사 로그(CloudTrail)\n▸ 자동 순환 활성화 → 매년 자동화, 수동 개입 제거\n▸ \"최소 오버헤드\" + \"매년 순환\" → KMS 자동 순환이 표준\n\n【오답 체크】\n(A) SSE-S3 자동 회전 → AWS 내부용, 90일 내부 순환(사용자 제어 불가), \"매년\" 요구사항 미충족\n(C) 수동 교체 → \"최소 오버헤드\" 위배, 연간 수동 작업 필수\n(D) 고객 키 자료 가져오기(BYOK) + 자동 순환 → 불가능, BYOK는 순환 미지원\n\n【시험 포인트】\n▸ 자동 키 순환 → \"최소 오버헤드\" = KMS 자동 순환\n▸ SSE-S3(AWS 관리) vs KMS(고객 관리) → 제어권/감사 필요시 KMS"
  },
  {
    "id": 203,
    "question": "금융 회사의 고객은 문자 메시지를 보내 재정 고문과의 약속을 요청합니다. Amazon EC2 인스턴스에서 실행되는 웹 애플리케이션은 약속 요청을 수락합니다. 텍스트 메시지는 웹 애플리케이션을 통해 Amazon Simple Queue Service(Amazon SQS) 대기열에 게시됩니다. EC2 인스턴스에서 실행되는 또 다른 애플리케이션은 회의 초대장과 회의 확인 이메일 메시지를 고객에게 보냅니다. 예약에 성공한 후 이 애플리케이션은 회의 정보를 Amazon DynamoDB 데이터베이스에 저장합니다. 회사가 확장됨에 따라 고객은 회의 초대장이 도착하는 데 시간이 더 오래 걸린다고 보고합니다. 솔루션 설계자는 이 문제를 해결하기 위해 무엇을 권장해야 합니까?",
    "options": {
      "A": "DynamoDB 데이터베이스 앞에 DynamoDB Accelerator(DAX) 클러스터를 추가합니다.",
      "B": "약속 요청을 수락하는 웹 애플리케이션 앞에 Amazon API Gateway API를 추가합니다.",
      "C": "Amazon CloudFront 배포를 추가합니다. 오리진을 약속 요청을 수락하는 웹 애플리케이션으로 설정합니다.",
      "D": "회의 초대를 보내는 애플리케이션에 대한 Auto Scaling 그룹을 추가합니다. SQS 대기열의 깊이에 따라 확장되도록 Auto Scaling 그룹을 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SQS 대기열 깊이 — 처리 대기 메시지 수, 병목 지표\n▸ Auto Scaling 기반 SQS 깊이 — 메시지 쌓임 → 자동 워커 증가 → 처리 시간 단축\n\n【정답 포인트】\n▸ 병목 분석 → \"회의 초대 도착 지연\" = 초대 발송 애플리케이션 처리 느림\n▸ SQS 메시지 쌓임 → 발송 앱 인스턴스 부족\n▸ Auto Scaling(SQS 깊이 기반) → 큐 길이 증가시 자동 워커 증가 → 처리 가속화\n\n【오답 체크】\n(A) DAX(DynamoDB 캐시) → 읽기 성능 개선, 초대 \"발송\" 지연과 무관\n(B) API Gateway → 웹 요청 수락 단계 개선, 초대 발송 단계 성능 미영향\n(C) CloudFront → 콘텐츠 캐싱용, 초대 메일 발송 가속화 불가\n\n【시험 포인트】\n▸ SQS 대기열 누적 = 워커 부족 신호 → Auto Scaling으로 대응\n▸ 병목 분석: 입력(요청수락) vs 처리(초대발송) → 지연점 정확히 파악"
  },
  {
    "id": 204,
    "question": "한 온라인 소매 회사는 5 천만 명 이상의 활성 고객을 보유하고 있으며 매일 25,000 건 이상의 주문을 받습니다. 회사는 고객의 구매 데이터를 수집하고 이 데이터를 Amazon S3에 저장합니다. 추가 고객 데이터는 Amazon RDS에 저장됩니다. 회사는 팀이 분석을 수행할 수 있도록 다양한 팀에서 모든 데이터를 사용할 수 있도록 하려고 합니다. 솔루션은 데이터에 대한 세분화된 권한을 관리하는 기능을 제공하고 운영 오버헤드를 최소화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "구매 데이터를 마이그레이션하여 Amazon RDS 에 직접 씁니다. RDS 액세스 제어를 사용하여 액세스를 제한하십시오.",
      "B": "Amazon RDS에서 Amazon S3로 데이터를 주기적으로 복사하도록 AWS Lambda 함수를 예약합니다. AWS Glue 크롤러를 생성합니다. Amazon Athena 를 사용하여 데이터를 쿼리합니다. S3 정책을 사용하여 액세스를 제한하십시오.",
      "C": "AWS Lake Formation 을 사용하여 데이터 레이크를 생성합니다. Amazon RDS 에 대한 AWS Glue JDBC 연결을 생성합니다. Lake Formation 에 S3 버킷을 등록합니다. Lake Formation 액세스 제어를 사용하여 액세스를 제한하십시오.",
      "D": "Amazon Redshift 클러스터를 생성합니다. Amazon S3 및 Amazon RDS 에서 Amazon Redshift 로 데이터를 주기적으로 복사하도록 AWS Lambda 함수를 예약합니다. Amazon Redshift 액세스 제어를 사용하여 액세스를 제한하십시오."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Lake Formation — 데이터 레이크 설정, 정책 기반 세분화 권한\n▸ Lake Formation 액세스 제어 — 열(Column) 수준, 행(Row) 수준 권한 관리\n▸ 이기종 데이터 소스 통합 — S3 + RDS 데이터를 하나의 통제점에서 관리\n\n【정답 포인트】\n▸ Lake Formation 데이터 레이크 → S3 + RDS 데이터 통합 카탈로그\n▸ Glue JDBC → RDS 데이터 메타데이터 자동 수집\n▸ 세분화 권한(열/행 수준) → 팀별 데이터 접근 제어\n▸ \"운영 오버헤드 최소화\" → Lake Formation 정책 엔진 자동 관리\n\n【오답 체크】\n(A) RDS 통합 → S3 데이터 미포함, 이기종 통합 불가, 권한 관리 복잡\n(B) Lambda + Glue + Athena + S3 정책 → 권한 관리 산재(Lambda/Glue/S3 정책), 세분화 제어 약함\n(D) Redshift → 데이터 웨어하우스(분석), 레이크 아님, Redshift 권한만 가능(Lake Formation 미지원)\n\n【시험 포인트】\n▸ \"세분화 권한\" → Lake Formation 열/행 수준 접근 제어\n▸ 이기종 데이터 소스(S3+RDS) → Lake Formation 통합 카탈로그"
  },
  {
    "id": 205,
    "question": "회사는 온프레미스 데이터 센터에서 마케팅 웹 사이트를 호스팅합니다. 웹 사이트는 정적 문서로 구성되며 단일 서버에서 실행됩니다. 관리자는 웹 사이트 콘텐츠를 자주 업데이트하지 않고 SFTP 클라이언트를 사용하여 새 문서를 업로드합니다. 회사는 AWS에서 웹 사이트를 호스팅하고 Amazon CloudFront를 사용하기로 결정했습니다. 회사의 솔루션 아키텍트가 CloudFront 배포를 생성합니다. 솔루션 설계자는 웹 사이트 호스팅이 CloudFront 오리진 역할을 할 수 있도록 가장 비용 효율적이고 탄력적인 아키텍처를 설계해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Lightsail을 사용하여 가상 서버를 생성합니다. Lightsail 인스턴스에서 웹 서버를 구성합니다. SFTP 클라이언트를 사용하여 웹 사이트 콘텐츠를 업로드합니다.",
      "B": "Amazon EC2 인스턴스에 대한 AWS Auto Scaling 그룹을 생성합니다. Application Load Balancer를 사용하십시오. SFTP 클라이언트를 사용하여 웹 사이트 콘텐츠를 업로드합니다.",
      "C": "프라이빗 Amazon S3 버킷을 생성합니다. S3 버킷 정책을 사용하여 CloudFront 원본 액세스 ID(OAI)에서 액세스를 허용합니다. AWS CLI 를 사용하여 웹사이트 콘텐츠를 업로드합니다.",
      "D": "퍼블릭 Amazon S3 버킷을 생성합니다. SFTP 용 AWS 전송을 구성합니다. 웹 사이트 호스팅을 위해 S3 버킷을 구성합니다. SFTP 클라이언트를 사용하여 웹 사이트 콘텐츠를 업로드합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 + CloudFront 원점 액세스 ID(OAI) — 프라이빗 버킷, CloudFront만 접근\n▸ AWS CLI 업로드 — 온프레미스→S3 직접 전송, SFTP 불필요\n▸ 정적 사이트 호스팅 — 스토리지만으로 충분, 웹 서버(Lightsail/EC2) 불필요\n\n【정답 포인트】\n▸ 프라이빗 S3 + OAI → 최소 비용, 최대 보안\n▸ CloudFront 원점 = S3 버킷 → 캐싱 이점, CDN 성능\n▸ \"가장 비용 효율적\" + \"탄력적\" → 서버리스 스토리지(S3), 자동 확장(CloudFront)\n\n【오답 체크】\n(A) Lightsail 서버 → 고정 비용(항상 실행), 정적 사이트 오버엔지니어링, 비용 높음\n(B) Auto Scaling + ALB → 매우 비효율적, 정적 콘텐츠에 불필요한 복잡도\n(D) 퍼블릭 S3 + AWS Transfer(SFTP) → 공개 노출 보안 위험, Transfer 비용 추가\n\n【시험 포인트】\n▸ 정적 사이트 → S3 + CloudFront 표준 패턴\n▸ 콘텐츠 업로드 → CLI/SDK(보안), SFTP/퍼블릭 버킷(비권장)"
  },
  {
    "id": 206,
    "question": "회사에서 Amazon 머신 이미지(AMI)를 관리하려고 합니다. 회사는 현재 AMI 가 생성된 동일한 AWS 리전에 AMI 를 복사합니다. 회사는 AWS API 호출을 캡처하고 회사 계정 내에서 Amazon EC2 CreateImage API 작업이 호출될 때마다 알림을 보내는 애플리케이션을 설계해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS CloudTrail 로그를 쿼리하고 CreateImage API 호출이 감지되면 알림을 보내는 AWS Lambda 함수를 생성합니다.",
      "B": "업데이트된 로그가 Amazon S3 로 전송될 때 발생하는 Amazon Simple Notification Service(Amazon SNS) 알림으로 AWS CloudTrail을 구성합니다. Amazon Athena를 사용하여 새 테이블을 생성하고 API 호출이 감지되면 CreateImage에서 쿼리합니다.",
      "C": "CreateImage API 호출에 대한 Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다. CreateImage API 호출이 감지되면 알림을 보내도록 대상을 Amazon Simple Notification Service(Amazon SNS) 주제로 구성합니다.",
      "D": "Amazon Simple Queue Service(Amazon SQS) FIFO 대기열을 AWS CloudTrail 로그의 대상으로 구성합니다. CreateImage API 호출이 감지되면 Amazon Simple Notification Service(Amazon SNS) 주제에 알림을 보내는 AWS Lambda 함수를 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ EventBridge 규칙 — AWS API 이벤트 실시간 감지, 자동 라우팅\n▸ CreateImage API 이벤트 — EC2 이벤트 패턴, EventBridge에서 네이티브 지원\n▸ \"최소 운영 오버헤드\" → 쿼리/Lambda 로직 불필요, 규칙 기반 자동화\n\n【정답 포인트】\n▸ EventBridge 규칙 생성 → \"source\": \"aws.ec2\", \"detail-type\": \"AWS API Call\", \"detail\": {\"eventName\": \"CreateImage\"}\n▸ SNS 대상 연결 → API 호출시 실시간 알림 전송\n▸ \"최소 오버헤드\" → 폴링/쿼리 불필요, 이벤트 기반 아키텍처\n\n【오답 체크】\n(A) Lambda + CloudTrail 로그 폴링 → 지속적 쿼리 비용, 지연 발생\n(B) CloudTrail → S3 → Athena → 매우 비효율, 배치 처리, 실시간 아님\n(D) SQS → Lambda → SNS → 불필요한 큐잉, EventBridge 우월\n\n【시험 포인트】\n▸ AWS API 모니터링 → CloudTrail(로그 저장) vs EventBridge(실시간 감지)\n▸ 실시간 알림 필요 → EventBridge 규칙이 표준 솔루션"
  },
  {
    "id": 207,
    "question": "회사는 사용자 요청을 수집하고 요청 유형에 따라 처리를 위해 적절한 마이크로 서비스에 요청을 발송하는 데 사용되는 비동기 API 를 소유하고 있습니다. 이 회사는 Amazon API Gateway를 사용하여 API 프런트 엔드를 배포하고 Amazon DynamoDB를 호출하여 사용자 요청을 처리 마이크로서비스로 보내기 전에 저장하는 AWS Lambda 함수를 사용하고 있습니다. 회사는 예산이 허용하는 한 많은 DynamoDB 처리량을 프로비저닝했지만 회사는 여전히 가용성 문제를 겪고 있으며 사용자 요청이 손실되고 있습니다. 솔루션 설계자는 기존 사용자에게 영향을 주지 않고 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "API 게이트웨이에서 서버 측 조절 제한을 사용하여 조절을 추가합니다.",
      "B": "DynamoDB Accelerator(DAX) 및 Lambda 를 사용하여 DynamoDB 에 대한 쓰기를 버퍼링합니다.",
      "C": "사용자 요청이 있는 테이블에 대해 DynamoDB에서 보조 인덱스를 생성합니다.",
      "D": "Amazon Simple Queue Service(Amazon SQS) 대기열과 Lambda 를 사용하여 DynamoDB에 대한 쓰기를 버퍼링합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 쓰기 버퍼링 — 즉시 DB 쓰기 대신 큐에 저장 → 부하 평준화\n▸ SQS + Lambda → 비동기 쓰기 처리, 메시지 지속성 보장, 재시도 자동화\n▸ \"기존 사용자 영향 없음\" → API 응답 시간 악화 방지\n\n【정답 포인트】\n▸ 문제: DynamoDB 처리량 한계 → 쓰기 요청 손실\n▸ 해결책: API → SQS → Lambda → DynamoDB (비동기 분리)\n▸ SQS 메시지 저장 → Lambda 재시도 → \"요청 손실\" 방지\n▸ API 응답 즉시(큐 삽입만) → 사용자 경험 미영향\n\n【오답 체크】\n(A) API Gateway 스로틀 → 요청 거절, \"사용자 영향 없음\" 위배\n(B) DAX 캐시 → 읽기 성능, 쓰기 부하 미해결, Lambda 버퍼링 아님\n(C) 보조 인덱스 → 읽기 쿼리용, 쓰기 처리량 개선 없음\n\n【시험 포인트】\n▸ 쓰기 부하 분산 → SQS 버퍼링 + Lambda 워커 패턴\n▸ \"요청 손실\" 방지 → 메시지 지속성(SQS) 필수"
  },
  {
    "id": 208,
    "question": "회사는 Amazon EC2 인스턴스에서 Amazon S3 버킷으로 데이터를 이동해야 합니다. 회사는 API 호출 및 데이터가 공용 인터넷 경로를 통해 라우팅되지 않도록 해야 합니다. EC2 인스턴스만 S3 버킷에 데이터를 업로드할 수 있는 액세스 권한을 가질 수 있습니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스가 있는 서브넷에서 Amazon S3 에 대한 인터페이스 VPC 엔드포인트를 생성합니다. EC2 인스턴스의 IAM 역할만 액세스할 수 있도록 리소스 정책을 S3 버킷에 연결합니다.",
      "B": "EC2 인스턴스가 있는 가용 영역에서 Amazon S3에 대한 게이트웨이 VPC 엔드포인트를 생성합니다. 엔드포인트에 적절한 보안 그룹을 연결합니다. EC2 인스턴스의 IAM 역할만 액세스할 수 있도록 리소스 정책을 S3 버킷에 연결합니다.",
      "C": "EC2 인스턴스 내부에서 nslookup 도구를 실행하여 S3 버킷 서비스 API 엔드포인트의 프라이빗 IP 주소를 얻습니다. S3 버킷에 대한 액세스 권한을 EC2 인스턴스에 제공하기 위해 VPC 경로 테이블에 경로를 생성합니다. EC2 인스턴스의 IAM 역할만 액세스할 수 있도록 리소스 정책을 S3 버킷에 연결합니다.",
      "D": "AWS 에서 제공하고 공개적으로 사용 가능한 ip-ranges.json 파일을 사용하여 S3 버킷 서비스 API 엔드포인트의 프라이빗 IP 주소를 얻습니다. S3 버킷에 대한 액세스 권한을 EC2 인스턴스에 제공하기 위해 VPC 경로 테이블에 경로를 생성합니다. EC2 인스턴스의 IAM 역할만 액세스할 수 있도록 리소스 정책을 S3 버킷에 연결합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ VPC 엔드포인트 — VPC 내부 AWS 서비스 접근, 공인 IP 불필요\n▸ 인터페이스 VPC 엔드포인트 — ENI(네트워크 인터페이스) 기반, 모든 AWS 서비스 지원\n▸ 게이트웨이 VPC 엔드포인트 — 라우팅 기반, S3/DynamoDB 전용\n\n【정답 포인트】\n▸ 인터페이스 엔드포인트 → S3 API 호출을 VPC 내부 라우팅 → 인터넷 미사용\n▸ IAM 역할 기반 권한 → EC2 인스턴스만 S3 접근 허용\n▸ \"공용 경로 제외\" + \"S3 전용 접근\" → 인터페이스 엔드포인트 필수\n\n【오답 체크】\n(B) 게이트웨이 엔드포인트 → 경로 기반(라우팅 테이블 수정), 보안 그룹 미지원(오류), 인터페이스보다 제한적\n(C) \n(D) nslookup/ip-ranges.json → 프라이빗 IP 수동 추출 불필요, 엔드포인트가 자동 처리\n\n【시험 포인트】\n▸ VPC 내부 AWS 서비스 접근 → VPC 엔드포인트(공인 IP 제외)\n▸ 인터페이스 vs 게이트웨이 → S3는 둘 다 지원, 질문 맥락(\"인터넷 경로 제외\") → 엔드포인트 명시"
  },
  {
    "id": 209,
    "question": "솔루션 아키텍트는 AWS 클라우드에 배포되는 새 애플리케이션의 아키텍처를 설계하고 있습니다. 애플리케이션은 Amazon EC2 온디맨드 인스턴스에서 실행되며 여러 가용 영역에서 자동으로 확장됩니다. EC2 인스턴스는 하루 종일 자주 확장 및 축소됩니다. Application Load Balancer(ALB)는 부하 분산을 처리합니다. 아키텍처는 분산 세션 데이터 관리를 지원해야 합니다. 회사는 필요한 경우 기꺼이 코드를 변경할 수 있습니다. 아키텍처가 분산 세션 데이터 관리를 지원하도록 하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon ElastiCache를 사용하여 세션 데이터를 관리하고 저장합니다.",
      "B": "ALB의 세션 선호도(스티키 세션)를 사용하여 세션 데이터를 관리합니다.",
      "C": "AWS Systems Manager의 Session Manager를 사용하여 세션을 관리합니다.",
      "D": "AWS Security Token Service(AWS STS)에서 GetSessionToken API 작업을 사용하여 세션을 관리합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ ElastiCache — 세션 저장소(Redis/Memcached), 모든 EC2 인스턴스에서 접근\n▸ 분산 세션 — 세션 상태를 서버 로컬이 아닌 공유 저장소에 저장\n▸ 자동 확장 환경 → 특정 인스턴스(스티키) 불가능, 중앙 세션 저장소 필수\n\n【정답 포인트】\n▸ 빈번한 확장/축소 → 인스턴스 수 변동 → 세션 손실(스티키 불가)\n▸ ElastiCache 중앙 저장소 → 모든 인스턴스가 동일 세션 접근\n▸ \"코드 변경 가능\" → 세션 저장소 로직 추가(Redis 클라이언트 라이브러리)\n\n【오답 체크】\n(B) 스티키 세션(ALB) → 특정 인스턴스에 고정, 축소시 세션 손실, Auto Scaling 환경 부적합\n(C) Systems Manager Session Manager → EC2 관리 접근용, 애플리케이션 세션 아님\n(D) AWS STS GetSessionToken → 권한 임시 토큰, HTTP 세션 관리 아님\n\n【시험 포인트】\n▸ Auto Scaling + 분산 세션 → 중앙 저장소(ElastiCache) 필수\n▸ 스티키 세션은 확장성 제약(권장 안함)"
  },
  {
    "id": 210,
    "question": "빠르게 성장하고 있는 음식 배달 서비스를 제공하는 회사가 있습니다. 성장으로 인해 회사의 주문 처리 시스템은 피크 트래픽 시간 동안 확장 문제를 겪고 있습니다. 현재 아키텍처에는 다음이 포함됩니다. • 애플리케이션에서 주문을 수집하기 위해 Amazon EC2 Auto Scaling 그룹에서 실행되는 Amazon EC2 인스턴스 그룹입니다. • 주문을 이행하기 위해 Amazon EC2 Auto Scaling 그룹에서 실행되는 또 다른 EC2 인스턴스 그룹. 주문 수집 프로세스는 빠르게 진행되지만 주문 이행 프로세스는 더 오래 걸릴 수 있습니다. 스케일링 이벤트로 인해 데이터가 손실되어서는 안 됩니다. 솔루션 설계자는 주문 수집 프로세스와 주문 이행 프로세스가 트래픽이 가장 많은 시간에 적절하게 확장될 수 있는지 확인해야 합니다. 솔루션은 회사의 AWS 리소스 활용을 최적화해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon CloudWatch 지표를 사용하여 Auto Scaling 그룹에 있는 각 인스턴스의 CPU를 모니터링합니다. 최대 워크로드 값에 따라 각 Auto Scaling 그룹의 최소 용량을 구성합니다.",
      "B": "Amazon CloudWatch 지표를 사용하여 Auto Scaling 그룹에 있는 각 인스턴스의 CPU를 모니터링합니다. 요청 시 추가 Auto Scaling 그룹을 생성하는 Amazon Simple Notification Service(Amazon SNS) 주제를 호출하도록 CloudWatch 경보를 구성합니다.",
      "C": "두 개의 Amazon Simple Queue Service(Amazon SQS) 대기열을 프로비저닝합니다. 하나는 주문 수집용이고 다른 하나는 주문 이행용입니다. 각 대기열을 폴링하도록 EC2 인스턴스를 구성합니다. 대기열이 보내는 알림을 기반으로 Auto Scaling 그룹을 조정합니다.",
      "D": "2개의 Amazon Simple Queue Service(Amazon SQS) 대기열을 프로비저닝합니다. 하나는 주문 수집용이고 다른 하나는 주문 이행용입니다. 각 대기열을 폴링하도록 EC2 인스턴스를 구성합니다. 인스턴스 계산당 백로그를 기반으로 지표를 만듭니다. 이 지표를 기반으로 Auto Scaling 그룹을 조정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SQS 대기열 — 비동기 처리, 데이터 손실 방지\n▸ 백로그 메트릭 — 인스턴스당 대기열 메시지 수\n▸ Auto Scaling 정책 — 실제 작업 부하 기반 확장\n\n【정답 포인트】\n▸ 두 프로세스 분리 → SQS로 완전히 디커플링\n▸ 피크 시간 확장 → 백로그(ApproximateNumberOfMessages/인스턴스수) 메트릭 활용\n▸ 데이터 손실 방지 → 큐 기반 구조로 메시지 보존\n\n【오답 체크】\n(A) CPU 모니터링만으로는 주문 수집과 이행 프로세스 차이 반영 불가\n(B) 수동 SNS 호출은 자동화 부족, 최적화되지 않은 리소스 활용\n(C) SQS 사용하지만 표준 알림만으로는 백로그 기반 스케일링 불가\n\n【시험 포인트】\n▸ 처리 속도 차이 → 큐 기반 디커플링으로 독립적 확장\n▸ 스케일링 정책 선택 → 큐 기반 메트릭(백로그/인스턴스)이 가장 정확\n▸ 패턴: 비동기 이종 작업 → SQS + 백로그 메트릭 조합"
  },
  {
    "id": 211,
    "question": "한 회사에서 여러 프로덕션 애플리케이션을 호스팅합니다. 애플리케이션 중 하나는 여러 AWS 리전에서 Amazon EC2, AWS Lambda, Amazon RDS, Amazon Simple Notification Service(Amazon SNS) 및 Amazon Simple Queue Service(Amazon SQS)의 리소스로 구성됩니다. 모든 회사 리소스에는 \"응용 프로그램\"이라는 태그 이름과 각 응용 프로그램에 해당하는 값이 태그로 지정됩니다. 솔루션 설계자는 태그가 지정된 모든 구성 요소를 식별하기 위한 가장 빠른 솔루션을 제공해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS CloudTrail을 사용하여 애플리케이션 태그가 있는 리소스 목록을 생성합니다.",
      "B": "AWS CLI 를 사용하여 모든 리전에서 각 서비스를 쿼리하여 태그가 지정된 구성 요소를 보고합니다.",
      "C": "Amazon CloudWatch Logs Insights에서 쿼리를 실행하여 애플리케이션 태그가 있는 구성 요소에 대해 보고합니다.",
      "D": "AWS Resource Groups Tag Editor 로 쿼리를 실행하여 애플리케이션 태그를 사용하여 전역적으로 리소스에 대해 보고합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Resource Groups Tag Editor — 글로벌 리소스 태그 검색 도구\n▸ 멀티리전 리소스 — EC2, Lambda, RDS, SNS, SQS 등 다양한 서비스\n▸ 태그 기반 검색 — \"application\" 태그로 일괄 조회\n\n【정답 포인트】\n▸ 가장 빠른 솔루션 → Tag Editor가 모든 리전, 모든 서비스 동시 검색 가능\n▸ 글로벌 쿼리 → 한 번의 쿼리로 모든 리소스 식별\n▸ 다양한 서비스 지원 → EC2, Lambda, RDS, SNS, SQS 모두 포함\n\n【오답 체크】\n(A) CloudTrail은 API 호출 로그이지 현재 리소스 상태 조회 불가\n(B) CLI 명령은 각 서비스마다, 각 리전마다 수동 반복 필요 → 느림\n(C) CloudWatch Logs Insights는 로그 분석용, 리소스 태그 조회 불가\n\n【시험 포인트】\n▸ 멀티리전 + 멀티서비스 → Tag Editor 활용\n▸ 패턴: \"모든 리소스의 태그 검색\" → Resource Groups Tag Editor\n▸ 속도 비교: Tag Editor(1회) > CLI(반복) > CloudTrail(불가능)"
  },
  {
    "id": 212,
    "question": "회사는 다른 팀이 액세스할 수 있도록 데이터베이스를 하루에 한 번 Amazon S3 로 내보내야 합니다. 내보낸 개체 크기는 2GB 에서 5GB 사이입니다. 데이터에 대한 S3 액세스 패턴은 가변적이며 빠르게 변경됩니다. 데이터는 즉시 사용할 수 있어야 하며 최대 3 개월 동안 액세스할 수 있어야 합니다. 회사는 검색 시간을 늘리지 않는 가장 비용 효율적인 솔루션이 필요합니다. 회사는 이러한 요구 사항을 충족하기 위해 어떤 S3 스토리지 클래스를 사용해야 합니까?",
    "options": {
      "A": "S3 지능형 계층화(S3 Intelligent-Tiering)",
      "B": "S3 Glacier 즉시 검색(S3 Glacier Instant Retrieval)",
      "C": "S3 표준(S3 Standard)",
      "D": "S3 Standard-Infrequent Access(S3 Standard-IA)"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 Intelligent-Tiering — 접근 패턴에 따라 자동으로 계층 전환\n▸ 가변적 접근 패턴 — 빈도 예측 불가\n▸ 3개월 보관 기한 — 장기 저장 아님\n\n【정답 포인트】\n▸ 접근 패턴 불확정 → Intelligent-Tiering으로 자동 최적화\n▸ 즉시 검색 필요 → Frequent, Infrequent 계층에서 빠른 조회 가능\n▸ 비용 효율 → 접근 빈도 감소시 자동으로 저렴한 계층으로 이동\n\n【오답 체크】\n(B) Glacier Instant는 저렴하지만 자주 접근하면 비용↑\n(C) S3 Standard는 비싸고 액세스 패턴이 명확하지 않을 때 낭비\n(D) Standard-IA는 자주 접근하면 검색료 발생 → 불확정 패턴에 부적합\n\n【시험 포인트】\n▸ \"접근 패턴 가변적\" → 자동 계층화(Intelligent-Tiering)\n▸ \"검색 시간 제약 없음\" + \"3개월\" → 비용 중심 선택\n▸ 패턴: 예측 불가 접근 → Intelligent-Tiering 활용"
  },
  {
    "id": 213,
    "question": "회사에서 새로운 모바일 앱을 개발하고 있습니다. 회사는 교차 사이트 스크립팅 또는 SQL 주입과 같은 일반적인 애플리케이션 수준 공격으로부터 ALB(Application Load Balancer)를 보호하기 위해 적절한 트래픽 필터링을 구현해야 합니다. 이 회사는 최소한의 인프라와 운영 인력을 보유하고 있습니다. 회사는 AWS 환경의 서버를 관리, 업데이트 및 보호하는 책임을 줄여야 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "AWS WAF 규칙을 구성하고 이를 ALB와 연결합니다.",
      "B": "퍼블릭 호스팅이 활성화된 Amazon S3를 사용하여 애플리케이션을 배포합니다.",
      "C": "AWS Shield Advanced를 배포하고 ALB를 보호된 리소스로 추가합니다.",
      "D": "타사 방화벽을 실행하는 Amazon EC2 인스턴스로 트래픽을 보낸 다음 트래픽을 현재 ALB로 전달하는 새 ALB를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS WAF — 애플리케이션 레이어 공격(XSS, SQL Injection) 방어\n▸ 관리형 서비스 — 자동 규칙 업데이트, 운영 부담 최소\n▸ ALB 통합 — Layer 7 보안 필터링\n\n【정답 포인트】\n▸ XSS, SQL Injection 방어 → WAF의 핵심 기능\n▸ 최소 운영 인력 → 관리형 서비스 WAF (EC2 방화벽 × 불필요한 관리)\n▸ ALB 직접 연결 → 구성 간단, 빠른 보호\n\n【오답 체크】\n(B) S3는 정적 콘텐츠용, 동적 앱 보호 불가\n(C) Shield Advanced는 DDoS 방어, XSS/SQL Injection 미방어\n(D) EC2 타사 방화벽은 높은 관리 부담 → 운영 인력 요구↑\n\n【시험 포인트】\n▸ 애플리케이션 레이어 공격 → AWS WAF\n▸ 최소 운영 관리 → 관리형 서비스 우선\n▸ 패턴: XSS/SQL Injection + ALB → WAF 연결"
  },
  {
    "id": 214,
    "question": "회사의 보고 시스템은 매일 수백 개의 .csv 파일을 Amazon S3 버킷에 전달합니다. 회사는 이러한 파일을 Apache Parquet 형식으로 변환하고 변환된 데이터 버킷에 파일을 저장해야 합니다. 최소한의 개발 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Apache Spark가 설치된 Amazon EMR 클러스터를 생성합니다. 데이터를 변환하는 Spark 애플리케이션을 작성합니다. EMRFS(EMR 파일 시스템)를 사용하여 변환된 데이터 버킷에 파일을 씁니다.",
      "B": "AWS Glue 크롤러를 생성하여 데이터를 검색합니다. AWS Glue 추출, 변환 및 로드(ETL) 작업을 생성하여 데이터를 변환합니다. 출력 단계에서 변환된 데이터 버킷을 지정합니다.",
      "C": "AWS Batch 를 사용하여 Bash 구문으로 작업 정의를 생성하여 데이터를 변환하고 데이터를 변환된 데이터 버킷으로 출력합니다. 작업 정의를 사용하여 작업을 제출합니다. 어레이 작업을 작업 유형으로 지정합니다.",
      "D": "데이터를 변환하고 변환된 데이터 버킷으로 데이터를 출력하는 AWS Lambda 함수를 생성합니다. S3 버킷에 대한 이벤트 알림을 구성합니다. 이벤트 알림의 대상으로 Lambda 함수를 지정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue ETL — 스키마 자동 감지, 코드 자동 생성\n▸ CSV → Parquet 변환 — 데이터 형식 변환\n▸ 최소 개발 노력 — 관리형 서비스\n\n【정답 포인트】\n▸ 최소 개발 — Glue가 크롤러로 스키마 자동 감지\n▸ ETL 작업 자동 생성 — 사용자 정의 코드 최소화\n▸ Parquet 지원 — Glue의 표준 출력 형식\n\n【오답 체크】\n(A) EMR은 강력하지만 Spark 코드 직접 작성 필요 → 개발 노력↑\n(C) Batch는 일괄 처리지만 Bash 스크립트 작성 필요 → 개발 노력↑\n(D) Lambda는 메모리/시간 제약, 파일 크기 증가 시 한계 → 확장성 낮음\n\n【시험 포인트】\n▸ \"최소 개발 노력\" → Glue(코드 자동 생성)\n▸ CSV → Parquet 변환 → Glue의 기본 기능\n▸ 패턴: 간단한 데이터 변환 + 최소 개발 → Glue ETL"
  },
  {
    "id": 215,
    "question": "회사는 데이터 센터의 NAS(Network Attached Storage)에 700TB의 백업 데이터를 저장하고 있습니다. 이 백업 데이터는 드문 규제 요청을 위해 액세스할 수 있어야 하며 7 년 동안 보관해야 합니다. 회사는 이 백업 데이터를 데이터 센터에서 AWS 로 마이그레이션하기로 결정했습니다. 마이그레이션은 1 개월 이내에 완료되어야 합니다. 회사는 데이터 전송에 사용할 수 있는 공용 인터넷 연결에 500Mbps의 전용 대역폭을 가지고 있습니다. 최저 비용으로 데이터를 마이그레이션하고 저장하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": {
      "A": "데이터를 전송할 AWS Snowball 디바이스를 주문합니다. 수명 주기 정책을 사용하여 파일을 Amazon S3 Glacier Deep Archive로 전환합니다.",
      "B": "데이터 센터와 Amazon VPC 간에 VPN 연결을 배포합니다. AWS CLI 를 사용하여 온프레미스에서 Amazon S3 Glacier로 데이터를 복사합니다.",
      "C": "500Mbps AWS Direct Connect 연결을 프로비저닝하고 데이터를 Amazon S3 로 전송합니다. 수명 주기 정책을 사용하여 파일을 Amazon S3 Glacier Deep Archive 로 전환합니다.",
      "D": "AWS DataSync 를 사용하여 데이터를 전송하고 온프레미스에 DataSync 에이전트를 배포합니다. DataSync 작업을 사용하여 온프레미스 NAS 스토리지에서 Amazon S3 Glacier로 파일을 복사합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Snowball — 물리적 대용량 전송, 네트워크 대역폭 무관\n▸ S3 Glacier Deep Archive — 장기 보관(7년) 최저 비용\n▸ 1개월 완료 — 네트워크 전송 시간 제약\n\n【정답 포인트】\n▸ 700TB 데이터 → Snowball이 가장 빠른 전송\n▸ 500Mbps 대역 → 이론적 700TB 전송 약 45일 (1개월 내 불가)\n▸ 7년 보관 + 드문 접근 → Deep Archive가 최저 비용\n\n【오답 체크】\n(B) VPN + CLI로 700TB = 약 45일 이상 → 1개월 기한 초과 위험\n(C) Direct Connect는 비싸고, 500Mbps로도 1개월 기한 촉박\n(D) DataSync도 네트워크 기반 → 시간 부족, 비용 높음\n\n【시험 포인트】\n▸ 대용량(700TB) + 짧은 기한(1개월) → Snowball\n▸ 장기 보관(7년) + 드문 접근 → Deep Archive\n▸ 패턴: \"물리적 전송 필요\" 신호 → Snowball 검토"
  },
  {
    "id": 216,
    "question": "회사에는 Amazon S3 버킷에 수백만 개의 객체가 있는 서버리스 웹 사이트가 있습니다. 회사는 S3 버킷을 Amazon CloudFront 배포의 오리진으로 사용합니다. 회사는 개체가 로드되기 전에 S3 버킷에 암호화를 설정하지 않았습니다. 솔루션 설계자는 모든 기존 객체와 향후 S3 버킷에 추가되는 모든 객체에 대해 암호화를 활성화해야 합니다. 최소한의 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "새 S3 버킷을 생성합니다. 새 S3 버킷에 대한 기본 암호화 설정을 켭니다. 모든 기존 개체를 임시 로컬 저장소에 다운로드합니다. 새 S3 버킷에 객체를 업로드합니다.",
      "B": "S3 버킷의 기본 암호화 설정을 켭니다. S3 Inventory 기능을 사용하여 암호화되지 않은 객체를 나열하는 .csv 파일을 생성합니다. 복사 명령을 사용하여 해당 객체를 암호화하는 S3 배치 작업 작업을 실행합니다.",
      "C": "AWS Key Management Service(AWS KMS)를 사용하여 새 암호화 키를 생성합니다. AWS KMS 관리형 암호화 키(SSE-KMS)로 서버 측 암호화를 사용하도록 S3 버킷의 설정을 변경합니다. S3 버킷에 대한 버전 관리를 켭니다.",
      "D": "AWS Management Console에서 Amazon S3로 이동합니다. S3 버킷의 객체를 찾습니다. 암호화 필드를 기준으로 정렬합니다. 암호화되지 않은 각 개체를 선택합니다. 수정 버튼을 사용하여 S3 버킷의 모든 암호화되지 않은 객체에 기본 암호화 설정을 적용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 기본 암호화 — 향후 객체 자동 암호화\n▸ S3 Inventory — 암호화 상태 대량 조회\n▸ S3 배치 작업 — 기존 객체 일괄 암호화\n\n【정답 포인트】\n▸ 기본 암호화 활성화 → 새 객체 자동 암호화 (향후 요구사항 충족)\n▸ Inventory + 배치 작업 → 기존 수백만 개 객체 자동 암호화\n▸ 최소 노력 → 수동 다운로드/업로드 × 대량 자동 처리\n\n【오답 체크】\n(A) 수백만 개 객체를 임시 저장소 다운로드 → 극도로 비효율적\n(C) KMS 설정만으로 기존 객체는 암호화 ×\n(D) 수백만 개 객체 수동 선택/수정 → 불가능한 수준의 노력\n\n【시험 포인트】\n▸ \"기존 + 미래\" 양쪽 암호화 → 기본 설정 + 배치 작업\n▸ \"수백만 개\" 대량 데이터 → Inventory + 배치 작업 조합\n▸ 패턴: 대량 기존 데이터 암호화 → S3 배치 작업 활용"
  },
  {
    "id": 217,
    "question": "회사는 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 글로벌 웹 애플리케이션을 실행합니다. 애플리케이션은 Amazon Aurora 에 데이터를 저장합니다. 회사는 재해 복구 솔루션을 만들어야 하며 최대 30 분의 다운타임과 잠재적인 데이터 손실을 허용할 수 있습니다. 솔루션은 기본 인프라가 정상일 때 부하를 처리할 필요가 없습니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "필요한 인프라 요소가 있는 애플리케이션을 배치합니다. Amazon Route 53 을 사용하여 활성-수동 장애 조치를 구성합니다. 두 번째 AWS 리전에서 Aurora 복제본을 생성합니다.",
      "B": "두 번째 AWS 리전에서 애플리케이션의 축소된 배포를 호스팅합니다. Amazon Route 53 을 사용하여 활성-활성 장애 조치를 구성합니다. 두 번째 리전에서 Aurora 복제본을 생성합니다.",
      "C": "두 번째 AWS 리전에서 기본 인프라를 복제합니다. Amazon Route 53 을 사용하여 활성-활성 장애 조치를 구성합니다. 최신 스냅샷에서 복원된 Aurora 데이터베이스를 생성합니다.",
      "D": "AWS Backup 으로 데이터를 백업합니다. 백업을 사용하여 두 번째 AWS 리전에 필요한 인프라를 생성합니다. Amazon Route 53을 사용하여 활성-수동 장애 조치를 구성합니다. 두 번째 리전에서 Aurora 두 번째 기본 인스턴스를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RTO 30분 — 최대 30분 다운타임 허용\n▸ RPO 유연함 — 약간의 데이터 손실 허용\n▸ 활성-수동 — 주 리전 정상 시 부하 처리 불필요\n\n【정답 포인트】\n▸ 활성-수동 구성 → 주 리전만 활성, 2차 리전은 대기 (비용 최적)\n▸ Aurora 읽기 복제본 → 데이터 동기화, RTO/RPO 충족\n▸ Route 53 장애 조치 → 자동 DNS 전환, 30분 이내 복구\n\n【오답 체크】\n(B) 활성-활성은 축소 배포도 비용 증가, 과도한 사양\n(C) 활성-활성 + 스냅샷만으로는 RPO 보장 부족\n(D) 백업은 느린 복구, RTO 30분 충족 어려움\n\n【시험 포인트】\n▸ \"부하 불필요\" → 활성-수동 선택\n▸ RTO/RPO 요구사항 → 복제본 + Route 53 활용\n▸ 패턴: 낮은 RTO/RPO + 비용 중시 → 활성-수동 + 복제본"
  },
  {
    "id": 218,
    "question": "회사에는 탄력적 IP 주소가 있는 퍼블릭 서브넷의 Amazon EC2 인스턴스에서 실행되는 웹 서버가 있습니다. 기본 보안 그룹은 EC2 인스턴스에 할당됩니다. 모든 트래픽을 차단하도록 기본 네트워크 ACL 이 수정되었습니다. 솔루션 설계자는 포트 443 을 통해 어디에서나 웹 서버에 액세스할 수 있도록 해야 합니다. 이 작업을 수행할 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "소스 0.0.0.0/0에서 TCP 포트 443을 허용하는 규칙으로 보안 그룹을 생성합니다.",
      "B": "대상 0.0.0.0/0에 대한 TCP 포트 443을 허용하는 규칙으로 보안 그룹을 생성합니다.",
      "C": "소스 0.0.0.0/0에서 TCP 포트 443을 허용하도록 네트워크 ACL을 업데이트합니다.",
      "D": "소스 0.0.0.0/0 에서 대상 0.0.0.0/0 으로 인바운드/아웃바운드 TCP 포트 443 을 허용하도록 네트워크 ACL을 업데이트합니다.",
      "E": "소스 0.0.0.0/0 에서 인바운드 TCP 포트 443 을 허용하고 대상 0.0.0.0/0 으로 아웃바운드 TCP 포트 32768-65535를 허용하도록 네트워크 ACL을 업데이트합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ 보안 그룹 — 인스턴스 레벨 방화벽, 상태 저장 (아웃바운드 자동)\n▸ 네트워크 ACL — 서브넷 레벨 방화벽, 상태 비저장 (인/아웃 명시)\n▸ 에펬 포트 — 클라이언트 반응 수신 포트 범위(32768-65535)\n\n【정답 포인트】\n▸\n(A) 보안 그룹: 443 인바운드 허용 (상태 저장이므로 아웃바운드 자동)\n▸\n(E) 네트워크 ACL: 443 인바운드 + 에펜 포트 아웃바운드 필요 (상태 비저장)\n▸ 두 계층 모두 통과 필요 → 보안 그룹\n(A) + 네트워크 ACL\n(E) 【오답 체크】\n(B) 대상이 아닌 소스 기준 (잘못된 방향)\n(C) 아웃바운드 에펜 포트 미포함 → 클라이언트 응답 수신 불가\n(D) 포트 443만으로는 불충분, 에펜 포트 필요\n\n【시험 포인트】\n▸ 양계층 방화벽 → 보안 그룹 + 네트워크 ACL 모두 확인\n▸ 상태 비저장(ACL) → 에펜 포트 명시 필요\n▸ 패턴: 2개 선택 + 양계층 방화벽 → 각 계층의 역할 파악"
  },
  {
    "id": 219,
    "question": "회사의 애플리케이션에 성능 문제가 있습니다. 애플리케이션은 상태 저장이며 Amazon EC2 인스턴스에서 인 메모리 작업을 완료해야 합니다. 이 회사는 AWS CloudFormation 을 사용하여 인프라를 배포하고 M5 EC2 인스턴스 제품군을 사용했습니다. 트래픽이 증가함에 따라 애플리케이션 성능이 저하되었습니다. 사용자는 사용자가 애플리케이션에 액세스하려고 할 때 지연을 보고합니다. 운영상 가장 효율적인 방식으로 이러한 문제를 해결하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Auto Scaling 그룹에서 실행되는 T3 EC2 인스턴스로 EC2 인스턴스를 교체합니다. AWS Management Console을 사용하여 변경합니다.",
      "B": "Auto Scaling 그룹에서 EC2 인스턴스를 실행하도록 CloudFormation 템플릿을 수정합니다. 증가가 필요한 경우 Auto Scaling 그룹의 원하는 용량과 최대 용량을 수동으로 늘립니다.",
      "C": "CloudFormation 템플릿을 수정합니다. EC2 인스턴스를 R5 EC2 인스턴스로 교체합니다. Amazon CloudWatch 내장 EC2 메모리 메트릭을 사용하여 향후 용량 계획을 위해 애플리케이션 성능을 추적합니다.",
      "D": "CloudFormation 템플릿을 수정합니다. EC2 인스턴스를 R5 EC2 인스턴스로 교체합니다. EC2 인스턴스에 Amazon CloudWatch 에이전트를 배포하여 향후 용량 계획을 위한 사용자 지정 애플리케이션 지연 시간 메트릭을 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 인메모리 작업 — 메모리 집약적, R5(메모리 최적화) 필요\n▸ M5 → R5 교체 — 일반 목적에서 메모리 최적화로 전환\n▸ CloudFormation — IaC를 통한 체계적 변경\n\n【정답 포인트】\n▸ 성능 저하 원인: 메모리 부족 → R5 인스턴스 (M5는 범용)\n▸ CloudFormation 템플릿 수정 → 운영 일관성, 재현성\n▸ 사용자 지정 메트릭 → 지연 시간 추적, 향후 용량 계획 근거\n\n【오답 체크】\n(A) T3는 Burstable, 지속적 성능 저하에 부적합\n(B) 수동 확장은 반응성 낮음, Auto Scaling 필요\n(C) CloudWatch 내장 메트릭은 OS 메모리만 제공, 앱 지연 추적 불가\n\n【시험 포인트】\n▸ \"인메모리\" + \"성능 저하\" → 메모리 최적화(R5) 검토\n▸ \"운영상 효율\" → CloudFormation 템플릿 수정\n▸ \"향후 용량 계획\" → 사용자 지정 메트릭(지연 시간) 필수"
  },
  {
    "id": 220,
    "question": "솔루션 설계자는 Amazon API Gateway 를 사용하여 사용자의 요청을 수신할 새 API 를 설계하고 있습니다. 요청량은 매우 다양합니다. 단일 요청을 받지 않고 몇 시간이 지날 수 있습니다. 데이터 처리는 비동기식으로 이루어지지만 요청이 이루어진 후 몇 초 이내에 완료되어야 합니다. 최저 비용으로 요구 사항을 제공하기 위해 솔루션 설계자가 API 를 호출하도록 해야 하는 컴퓨팅 서비스는 무엇입니까?",
    "options": {
      "A": "AWS Glue 작업",
      "B": "AWS Lambda 함수",
      "C": "Amazon Elastic Kubernetes Service(Amazon EKS)에서 호스팅되는 컨테이너화된 서비스",
      "D": "Amazon EC2와 함께 Amazon ECS에서 호스팅되는 컨테이너화된 서비스"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 변동하는 요청 — 버스트 트래픽 대응 필요\n▸ 비동기 처리 — 빠른 응답 시간 < 몇 초\n▸ 최저 비용 — 수요에 따른 자동 과금\n\n【정답 포인트】\n▸ Lambda: 요청에 따라 자동 스케일, 사용한 시간만 과금\n▸ 빠른 초기화 — 몇 초 내 처리 완료 가능\n▸ 적은 트래픽 시 비용 거의 없음 (몇 시간 무요청)\n\n【오답 체크】\n(A) Glue는 배치 작업용, 실시간 API 응답 부적합\n(C) EKS는 최소 클러스터 유지 비용 발생, 변동 트래픽에 비효율\n(D) EC2는 항상 실행 비용, 유휴 시간 비용 낭비\n\n【시험 포인트】\n▸ \"변동하는 트래픽\" + \"최저 비용\" → Lambda\n▸ \"비동기 처리\" + \"빠른 응답\" → Lambda의 성능 특성\n▸ 패턴: API Gateway + 변동 부하 → Lambda 표준 조합"
  },
  {
    "id": 221,
    "question": "회사는 Amazon Linux EC2 인스턴스 그룹에서 애플리케이션을 실행합니다. 규정 준수를 위해 회사는 모든 애플리케이션 로그 파일을 7 년 동안 보관해야 합니다. 로그 파일은 모든 파일에 동시에 액세스할 수 있어야 하는 보고 도구로 분석됩니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 스토리지 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic Block Store(Amazon EBS)",
      "B": "Amazon Elastic File System(Amazon EFS)",
      "C": "Amazon EC2 인스턴스 스토어",
      "D": "Amazon S3"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 7년 보관 — 장기 저장소\n▸ 동시 다중 접근 — 보고 도구에서 동시 읽기\n▸ 비용 효율 — 저장 비용 중심\n\n【정답 포인트】\n▸ S3: 7년 장기 저장 최저 비용 (객체 스토리지)\n▸ 동시 접근 가능 — 모든 보고 도구 동시 읽기 지원\n▸ 내구성 99.999999999% — 규정 준수 데이터 신뢰성\n\n【오답 체크】\n(A) EBS: 블록 스토리지, EC2 인스턴스마다 필요 → 비용 높음\n(B) EFS: 공유 파일 시스템, 7년 저장 비용 높음\n(C) 인스턴스 스토어: 임시 저장소, 장기 보관 부적합\n\n【시험 포인트】\n▸ \"장기 보관\" + \"비용 효율\" → S3\n▸ \"동시 읽기 접근\" → S3는 무제한 동시성 지원\n▸ 패턴: 규정 준수 장기 데이터 → S3 표준 선택"
  },
  {
    "id": 222,
    "question": "회사는 회사의 AWS 계정에서 작업을 수행하기 위해 외부 공급업체를 고용했습니다. 벤더는 벤더가 소유한 AWS 계정에서 호스팅되는 자동화 도구를 사용합니다. 벤더는 회사의 AWS 계정에 대한 IAM 액세스 권한이 없습니다. 솔루션 설계자는 공급업체에 이 액세스 권한을 어떻게 부여해야 합니까?",
    "options": {
      "A": "공급업체의 IAM 역할에 대한 액세스 권한을 위임하려면 회사 계정에서 IAM 역할을 생성합니다. 벤더가 요구하는 권한에 대한 역할에 적절한 IAM 정책을 연결합니다.",
      "B": "암호 복잡성 요구 사항을 충족하는 암호를 사용하여 회사 계정에 IAM 사용자를 만듭니다. 벤더가 요구하는 권한에 대해 적절한 IAM 정책을 사용자에게 연결합니다.",
      "C": "회사 계정에 IAM 그룹을 생성합니다. 공급업체 계정의 도구 IAM 사용자를 그룹에 추가합니다. 공급업체에 필요한 권한에 대해 적절한 IAM 정책을 그룹에 연결합니다.",
      "D": "IAM 콘솔에서 공급자 유형으로 \"AWS 계정\"을 선택하여 새 자격 증명 공급자를 만듭니다. 공급업체의 AWS 계정 ID 와 사용자 이름을 제공합니다. 벤더가 요구하는 권한에 대해 적절한 IAM 정책을 새 제공자에 연결하십시오."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 크로스 계정 접근 — 벤더 계정 → 회사 계정\n▸ IAM 역할 위임 — AssumeRole 정책으로 권한 부여\n▸ 벤더 자동화 도구 — 벤더 계정의 역할/사용자\n\n【정답 포인트】\n▸ 회사 계정에 역할 생성 → 벤더 계정이 이 역할 수임 가능\n▸ 역할의 신뢰 정책 → 벤더 AWS 계정 ID 지정\n▸ 보안 모범 사례 — IAM 사용자(공유 자격증명) 회피\n\n【오답 체크】\n(B) IAM 사용자는 보안 리스크, 크로스 계정 미지원\n(C) 그룹은 같은 계정 내 사용, 크로스 계정 불가\n(D) 자격증명 공급자는 외부 ID 제공자(OIDC, SAML), AWS 계정 아님\n\n【시험 포인트】\n▸ \"다른 AWS 계정의 벤더\" → 크로스 계정 역할\n▸ AssumeRole 신뢰 관계 설정 → 벤더 계정 ID\n▸ 패턴: 크로스 계정 접근 → IAM 역할 위임"
  },
  {
    "id": 223,
    "question": "한 회사에서 Java Spring Boot 애플리케이션을 프라이빗 서브넷의 Amazon Elastic Kubernetes Service(Amazon EKS)에서 실행되는 포드로 배포했습니다. 애플리케이션은 Amazon DynamoDB 테이블에 데이터를 써야 합니다. 솔루션 설계자는 애플리케이션이 인터넷에 트래픽을 노출하지 않고 DynamoDB 테이블과 상호 작용할 수 있는지 확인해야 합니다. 이 목표를 달성하기 위해 솔루션 설계자는 어떤 단계 조합을 수행해야 합니까? (2개 선택)",
    "options": {
      "A": "EKS 포드에 충분한 권한이 있는 IAM 역할을 연결합니다.",
      "B": "EKS 포드에 충분한 권한이 있는 IAM 사용자를 연결합니다.",
      "C": "프라이빗 서브넷의 네트워크 ACL 을 통해 DynamoDB 테이블에 대한 아웃바운드 연결을 허용합니다.",
      "D": "DynamoDB용 VPC 엔드포인트를 생성합니다.",
      "E": "Java Spring Boot 코드에 액세스 키를 삽입합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ EKS IRSA — IAM Roles for Service Accounts\n▸ VPC 엔드포인트 — 프라이빗 네트워크 경로\n▸ 인터넷 노출 금지 — NAT 게이트웨이 없이 접근\n\n【정답 포인트】\n▸\n(A) IAM 역할: 포드가 DynamoDB 권한 획득 (IRSA 활용)\n▸\n(D) VPC 엔드포인트: 프라이빗 서브넷 → DynamoDB 직접 접근\n▸ 조합: 인증\n(A) + 네트워크 경로\n(D) 모두 필요\n\n【오답 체크】\n(B) IAM 사용자는 포드에 할당 불가, 액세스 키 필요 (보안 × )\n(C) DynamoDB는 HTTPS(포트 443)이고 VPC 엔드포인트 필요\n(E) 액세스 키 코드 삽입은 보안 리스크, IRSA가 표준\n\n【시험 포인트】\n▸ \"EKS + DynamoDB\" → IRSA + VPC 엔드포인트\n▸ \"인터넷 노출 금지\" → VPC 엔드포인트로 프라이빗 경로 확보\n▸ 패턴: 컨테이너 → AWS 서비스 → 역할 + VPC 엔드포인트"
  },
  {
    "id": 224,
    "question": "한 회사가 최근 단일 AWS 리전의 Amazon EC2 인스턴스에서 애플리케이션을 다시 호스팅하여 웹 애플리케이션을 AWS 로 마이그레이션했습니다. 이 회사는 응용 프로그램 아키텍처를 고가용성 및 내결함성을 갖도록 재설계하려고 합니다. 트래픽은 실행 중인 모든 EC2 인스턴스에 무작위로 도달해야 합니다. 회사는 이러한 요구 사항을 충족하기 위해 어떤 조합의 단계를 수행해야 합니까? (2 개 선택)",
    "options": {
      "A": "Amazon Route 53 장애 조치 라우팅 정책을 만듭니다.",
      "B": "Amazon Route 53 가중 라우팅 정책을 생성합니다.",
      "C": "Amazon Route 53 다중값 응답 라우팅 정책을 생성합니다.",
      "D": "3 개의 EC2 인스턴스를 시작합니다. 하나의 가용 영역에 있는 2 개의 인스턴스와 다른 가용 영역에 있는 하나의 인스턴스입니다.",
      "E": "4 개의 EC2 인스턴스를 시작합니다. 하나의 가용 영역에 2 개의 인스턴스와 다른 가용 영역에 2개의 인스턴스가 있습니다."
    },
    "answer": "CE",
    "explanation": "【핵심 용어】\n▸ 다중값 응답 — 여러 IP 주소 무작위 반환\n▸ 고가용성 + 내결함성 → 다중 AZ 배포\n▸ 무작위 트래픽 분산 — Round-robin 기반 로드 밸런싱\n\n【정답 포인트】\n▸\n(C) 다중값 응답: 쿼리마다 여러 IP 무작위 선택 반환\n▸\n(E) 4개 인스턴스 다중 AZ: 2개 AZ에 각각 2개 = 고가용성\n▸ 조합: 라우팅\n(C) + 인프라\n(E) 로 요구사항 완성\n\n【오답 체크】\n(A) 장애 조치는 Primary/Secondary, \"무작위\" 아님\n(B) 가중 정책은 비율 기반, \"무작위\" 아님\n(D) 3개 인스턴스(2-1 불균형) → 불균등 분산 위험\n\n【시험 포인트】\n▸ \"무작위 분산\" → Route 53 다중값 응답\n▸ \"고가용성\" → 다중 AZ 균형 배포\n▸ 패턴: 고가용성 + 무작위 분산 → 다중값 응답 + 다중 AZ"
  },
  {
    "id": 225,
    "question": "미디어 회사는 온프레미스에서 사용자 활동 데이터를 수집하고 분석합니다. 회사는 이 기능을 AWS 로 마이그레이션하려고 합니다. 사용자 활동 데이터 저장소는 계속해서 성장하여 크기가 페타바이트가 될 것입니다. 회사는 SQL 을 사용하여 기존 데이터 및 새 데이터의 온디맨드 분석을 용이하게 하는 고가용성 데이터 수집 솔루션을 구축해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "활동 데이터를 Amazon Kinesis 데이터 스트림으로 보냅니다. 데이터를 Amazon S3 버킷으로 전달하도록 스트림을 구성합니다.",
      "B": "활동 데이터를 Amazon Kinesis Data Firehose 전송 스트림으로 보냅니다. 데이터를 Amazon Redshift 클러스터로 전달하도록 스트림을 구성합니다.",
      "C": "활동 데이터를 Amazon S3 버킷에 배치합니다. 데이터가 S3 버킷에 도착하면 데이터에서 AWS Lambda 함수를 실행하도록 Amazon S3를 구성합니다.",
      "D": "여러 가용 영역에 분산된 Amazon EC2 인스턴스에서 수집 서비스를 생성합니다. 데이터를 Amazon RDS 다중 AZ 데이터베이스로 전달하도록 서비스를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Kinesis Data Firehose — 자동 버퍼링, 자동 전달\n▸ Redshift — 페타바이트 규모 SQL 분석\n▸ 고가용성 — Firehose의 자동 재시도, 중복\n▸ 최소 운영 오버헤드 — 관리형 서비스\n\n【정답 포인트】\n▸ Firehose: 자동 버퍼링, 배치 처리 → 비용 효율, 운영 최소\n▸ Redshift: 페타바이트 SQL 분석 최적화 서비스\n▸ 자동 고가용성 — 실패 시 자동 재시도, 다중 AZ\n\n【오답 체크】\n(A) Kinesis 스트림은 실시간용, S3 저장 후 분석 구성 필요\n(C) 배치 방식은 실시간 수집 부족, Lambda 처리 오버헤드\n(D) EC2 운영 부담, RDS는 SQL OLTP용, 분석 부족\n\n【시험 포인트】\n▸ \"페타바이트\" + \"SQL 분석\" → Redshift\n▸ \"실시간 수집\" + \"최소 운영\" → Kinesis Data Firehose\n▸ 패턴: 대규모 실시간 분석 → Firehose + Redshift 조합"
  },
  {
    "id": 226,
    "question": "회사는 Amazon EC2 인스턴스에서 실행되는 RESTful 웹 서비스 애플리케이션을 사용하여 수천 개의 원격 장치에서 데이터를 수집합니다. EC2 인스턴스는 원시 데이터를 수신하고 원시 데이터를 변환하며 모든 데이터를 Amazon S3 버킷에 저장합니다. 원격 장치의 수는 곧 수백만 개로 증가할 것입니다. 이 회사는 운영 오버헤드를 최소화하는 확장성이 뛰어난 솔루션이 필요합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 수행해야 합니까? (2개 선택)",
    "options": {
      "A": "AWS Glue를 사용하여 Amazon S3에서 원시 데이터를 처리합니다.",
      "B": "Amazon Route 53을 사용하여 트래픽을 다른 EC2 인스턴스로 라우팅합니다.",
      "C": "들어오는 데이터의 양을 수용하기 위해 더 많은 EC2 인스턴스를 추가합니다.",
      "D": "원시 데이터를 Amazon Simple Queue Service(Amazon SQS)로 보냅니다. EC2 인스턴스를 사용하여 데이터를 처리합니다.",
      "E": "Amazon API Gateway 를 사용하여 원시 데이터를 Amazon Kinesis 데이터 스트림으로 보냅니다. 데이터 스트림을 소스로 사용하여 데이터를 Amazon S3 에 전달하도록 Amazon Kinesis Data Firehose를 구성합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ 수백만 장치 → 극도로 높은 트래픽 버스트\n▸ 실시간 스트리밍 수집 — 단순 큐는 부족\n▸ 확장성 + 최소 운영 — 관리형 서비스 우선\n\n【정답 포인트】\n▸\n(E) API Gateway + Kinesis + Firehose: 무제한 확장, 자동 처리\n▸\n(A) Glue: S3 저장 후 데이터 변환 및 통합\n▸ 조합: 수집\n(E) + 처리\n(A) → 완전한 파이프라인\n\n【오답 체크】\n(B) Route 53은 DNS, 로드 밸런싱 아님\n(C) EC2 수동 추가 → 확장성 낮음, 운영 부담↑\n(D) SQS는 수백만 QPS 처리 어려움, Kinesis가 더 적합\n\n【시험 포인트】\n▸ \"수백만 장치\" + \"실시간\" → Kinesis 기반 수집\n▸ \"변환 처리\" + \"S3 저장\" → Glue + Firehose\n▸ 패턴: 극고용량 스트리밍 → Kinesis + Firehose 표준"
  },
  {
    "id": 227,
    "question": "회사는 AWS CloudTrail 로그를 3 년 동안 보관해야 합니다. 회사는 상위 계정의 AWS Organizations 를 사용하여 AWS 계정 집합에 CloudTrail 을 적용하고 있습니다. CloudTrail 대상 S3 버킷은 S3 버전 관리가 활성화된 상태로 구성됩니다. 3 년 후 현재 객체를 삭제하는 S3 수명 주기 정책이 있습니다. S3 버킷 사용 4 년차 이후 S3 버킷 지표는 개체 수가 계속 증가했음을 보여줍니다. 그러나 S3 버킷에 전달되는 새 CloudTrail 로그의 수는 일관되게 유지되었습니다. 가장 비용 효율적인 방식으로 3년 이상 된 개체를 삭제하는 솔루션은 무엇입니까?",
    "options": {
      "A": "3년 후에 개체가 만료되도록 조직의 중앙 집중식 CloudTrail 추적을 구성합니다.",
      "B": "현재 버전뿐만 아니라 이전 버전도 삭제하도록 S3 수명 주기 정책을 구성합니다.",
      "C": "Amazon S3 에서 3 년 이상 된 객체를 열거하고 삭제하는 AWS Lambda 함수를 생성합니다.",
      "D": "상위 계정을 S3 버킷으로 전달되는 모든 객체의 소유자로 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 버전 관리 활성화 — 현재 + 이전 버전 모두 저장\n▸ 개체 수 증가 — 이전 버전이 삭제 미적용\n▸ 수명 주기 정책 — NoncurrentVersionExpiration\n\n【정답 포인트】\n▸ 문제: 수명 주기 정책이 \"현재 버전\"만 삭제\n▸ 원인: 버전 관리 활성화 상태, 이전 버전 남음\n▸ 해결: NoncurrentVersionExpiration 추가 → 이전 버전도 삭제\n\n【오답 체크】\n(A) CloudTrail 설정 변경은 기존 데이터 미삭제\n(C) Lambda 함수는 비용↑, 자동 수명 주기 정책이 효율적\n(D) 소유자 변경은 버전 문제 미해결\n\n【시험 포인트】\n▸ \"버전 관리\" + \"개체 수 증가\" → 이전 버전 체크\n▸ NoncurrentVersionExpiration — 버전 관리 환경에서 필수\n▸ 패턴: 버전 관리 → 이전 버전 정책 별도 구성"
  },
  {
    "id": 228,
    "question": "회사에는 여러 모니터링 장치에서 실시간 데이터를 수신하는 API가 있습니다. API는 나중에 분석할 수 있도록 이 데이터를 Amazon RDS DB 인스턴스에 저장합니다. 모니터링 장치가 API 로 보내는 데이터의 양은 변동합니다. 트래픽이 많은 기간 동안 API 는 종종 시간 초과 오류를 반환합니다. 로그를 검사한 후 회사는 데이터베이스가 API 에서 오는 쓰기 트래픽 볼륨을 처리할 수 없음을 확인합니다. 솔루션 설계자는 데이터베이스에 대한 연결 수를 최소화하고 트래픽이 많은 기간 동안 데이터가 손실되지 않도록 해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "사용 가능한 메모리가 더 많은 인스턴스 유형으로 DB 인스턴스의 크기를 늘리십시오.",
      "B": "DB 인스턴스를 다중 AZ DB 인스턴스로 수정합니다. 모든 활성 RDS DB 인스턴스에 쓰도록 애플리케이션을 구성합니다.",
      "C": "수신 데이터를 Amazon Simple Queue Service(Amazon SQS) 대기열에 쓰도록 API 를 수정합니다. Amazon SQS 가 호출하는 AWS Lambda 함수를 사용하여 대기열에서 데이터베이스로 데이터를 씁니다.",
      "D": "수신 데이터를 Amazon Simple Notification Service(Amazon SNS) 주제에 쓰도록 API를 수정합니다. Amazon SNS 가 호출하는 AWS Lambda 함수를 사용하여 주제에서 데이터베이스로 데이터를 씁니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ DB 병목 — 직접 쓰기 트래픽 과부하\n▸ 데이터 손실 방지 — 메시지 큐 필요\n▸ 연결 최소화 — 배치 처리 + 연결 풀링\n\n【정답 포인트】\n▸ SQS 큐: API → 큐로 빠른 기록, 데이터 손실 방지\n▸ Lambda: 큐 메시지 배치로 읽어 DB에 효율적 쓰기\n▸ 연결 감소: 1개 Lambda ≠ N개 API 직접 연결\n\n【오답 체크】\n(A) 메모리 증대는 병목 원인 미해결 (쓰기 처리량 부족)\n(B) 다중 AZ는 고가용성, 쓰기 처리량 미증가\n(D) SNS는 구독자 지원용, 큐(SQS)처럼 메시지 보존 ×\n\n【시험 포인트】\n▸ \"DB 병목\" + \"변동 트래픽\" → 큐 기반 버퍼링(SQS)\n▸ \"연결 최소화\" → 배치 처리 + Lambda\n▸ 패턴: DB 병목 → SQS + Lambda 디커플링"
  },
  {
    "id": 229,
    "question": "회사는 MySQL 데이터베이스를 실행하는 자체 Amazon EC2 인스턴스를 관리합니다. 회사는 수요가 증가하거나 감소함에 따라 복제 및 확장을 수동으로 관리하고 있습니다. 회사는 필요에 따라 데이터베이스 계층에서 컴퓨팅 용량을 추가하거나 제거하는 프로세스를 간소화하는 새로운 솔루션이 필요합니다. 또한 솔루션은 최소한의 운영 노력으로 향상된 성능, 확장성 및 내구성을 제공해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "데이터베이스를 Aurora MySQL용 Amazon Aurora Serverless로 마이그레이션합니다.",
      "B": "데이터베이스를 Aurora PostgreSQL용 Amazon Aurora Serverless로 마이그레이션합니다.",
      "C": "데이터베이스를 하나의 더 큰 MySQL 데이터베이스로 결합합니다. 더 큰 EC2 인스턴스에서 더 큰 데이터베이스를 실행합니다.",
      "D": "데이터베이스 계층에 대한 EC2 Auto Scaling 그룹을 생성합니다. 기존 데이터베이스를 새 환경으로 마이그레이션합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Aurora Serverless — 컴퓨팅 자동 관리, ACU 기반 탄력적 확장\n▸ Stateful 워크로드 — 데이터베이스는 상태 유지 필수, Auto Scaling 부적합\n\n【정답 포인트】\n▸ MySQL 호환성 유지 → Aurora MySQL 선택 (B는 PostgreSQL이므로 선택 불가)\n▸ 자동 용량 조정 → Serverless 모드로 ACU 자동 증감\n▸ 운영 오버헤드 최소화 → 패치, 백업, 복제 모두 AWS 관리\n\n【오답 체크】\n(B) PostgreSQL로 마이그레이션 불가 — 기존 MySQL 호환성 상실\n(C) 큰 인스턴스로 수직 확장 — 수동 관리 지속, 운영 부담 증가\n(D) 데이터베이스용 Auto Scaling — 상태 유지로 인해 불안정, 복제 이슈 발생\n\n【시험 포인트】\n▸ RDS 마이그레이션 패턴 → Serverless = 자동 확장 + 최소 운영\n▸ DB 엔진 선택 → 호환성 우선 (MySQL → Aurora MySQL)\n▸ 탄력성 요구 → 데이터베이스는 Auto Scaling 대신 Serverless 추천"
  },
  {
    "id": 230,
    "question": "회사는 사용 중인 두 개의 NAT 인스턴스가 더 이상 회사 애플리케이션에 필요한 트래픽을 지원할 수 없을 것이라고 우려합니다. 솔루션 설계자는 가용성이 높고 내결함성이 있으며 자동으로 확장 가능한 솔루션을 구현하려고 합니다. 솔루션 설계자는 무엇을 추천해야 합니까?",
    "options": {
      "A": "2 개의 NAT 인스턴스를 제거하고 동일한 가용 영역에 있는 2 개의 NAT 게이트웨이로 교체합니다.",
      "B": "다른 가용 영역의 NAT 인스턴스에 대해 Network Load Balancer 와 함께 Auto Scaling 그룹을 사용합니다.",
      "C": "2개의 NAT 인스턴스를 제거하고 서로 다른 가용 영역에 있는 2개의 NAT 게이트웨이로 교체합니다.",
      "D": "두 개의 NAT 인스턴스를 서로 다른 가용 영역의 스팟 인스턴스로 교체하고 Network Load Balancer를 배포합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ NAT 게이트웨이 — AWS 관리형, 높은 가용성, 자동 확장\n▸ 가용 영역 분산 — 다중 AZ 배치로 장애 격리\n\n【정답 포인트】\n▸ 고가용성 — 각 AZ마다 하나의 NAT GW 필수 (AZ 장애 시 보호)\n▸ 자동 확장 — NAT GW는 처리량 자동 증가, 인스턴스 관리 불필요\n▸ 트래픽 증가 대응 — 대역폭 초과 자동 처리, 수동 개입 제거\n\n【오답 체크】\n(A) 동일 AZ 배치 — AZ 장애 시 단일 지점 장애, 고가용성 불만족\n(B) NLB 기반 NAT 인스턴스 — 여전히 인스턴스 관리 필요, 자동 확장 미흡\n(D) 스팟 인스턴스 — NAT 용도로 부적절, 중단 위험\n\n【시험 포인트】\n▸ NAT 게이트웨이 vs 인스턴스 → 관리형 서비스는 자동 확장 지원\n▸ 다중 AZ 배치 → 각 AZ 독립 NAT 필수\n▸ 고가용성 인프라 → 구성 요소 분산 배치"
  },
  {
    "id": 231,
    "question": "애플리케이션은 VPC A 에 탄력적 IP 주소가 있는 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 VPC B 의 데이터베이스에 액세스해야 합니다. 두 VPC 모두 동일한 AWS 계정에 있습니다. 필요한 액세스를 가장 안전하게 제공하는 솔루션은 무엇입니까?",
    "options": {
      "A": "VPC A 에 있는 애플리케이션 서버의 퍼블릭 IP 주소에서 오는 모든 트래픽을 허용하는 DB 인스턴스 보안 그룹을 생성합니다.",
      "B": "VPC A와 VPC B 사이에 VPC 피어링 연결을 구성합니다.",
      "C": "DB 인스턴스를 공개적으로 액세스할 수 있도록 합니다. 퍼블릭 IP 주소를 DB 인스턴스에 할당합니다.",
      "D": "탄력적 IP 주소가 있는 EC2 인스턴스를 VPC B로 시작합니다. 새 EC2 인스턴스를 통해 모든 요청을 프록시합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ VPC 피어링 — AWS 네트워크 기반, 프라이빗 연결\n▸ 보안 경계 — 인터넷 노출 최소화\n\n【정답 포인트】\n▸ 동일 계정 VPC 간 통신 → VPC 피어링 권장 (확장성, 비용 효율)\n▸ 프라이빗 연결 → 데이터 인터넷 노출 차단\n▸ 보안 그룹 정책 → CIDR 범위로 세밀한 접근 제어\n\n【오답 체크】\n(A) 퍼블릭 IP 기반 보안 그룹 — 탄력적 IP는 할당 해제 시 변경 가능, 장기 보안 취약\n(C) DB 공개 노출 — 인터넷 공격 위험, 규정 준수 위반 가능성\n(D) 프록시 인스턴스 — 불필요한 복잡성, 추가 운영 오버헤드\n\n【시험 포인트】\n▸ VPC 간 통신 — 피어링 > 공개 노출\n▸ 보안 우선순위 — 프라이빗 네트워크 선호\n▸ 동일 계정 시나리오 → 피어링이 표준 아키텍처"
  },
  {
    "id": 232,
    "question": "회사는 Amazon EC2 인스턴스에서 고객을 위한 데모 환경을 실행합니다. 각 환경은 자체 VPC 에서 격리됩니다. 환경에 대한 RDP 또는 SSH 액세스가 설정되면 회사의 운영 팀에 알려야 합니다.",
    "options": {
      "A": "RDP 또는 SSH 액세스가 감지되면 AWS Systems Manager OpsItems 를 생성하도록 Amazon CloudWatch Application Insights를 구성합니다.",
      "B": "AmazonSSMManagedInstanceCore 정책이 연결된 IAM 역할이 있는 IAM 인스턴스 프로필로 EC2 인스턴스를 구성합니다.",
      "C": "Amazon CloudWatch Logs 에 VPC 흐름 로그를 게시합니다. 필요한 메트릭 필터를 만듭니다. 경보가 ALARM 상태일 때 알림 작업이 포함된 Amazon CloudWatch 지표 경보를 생성합니다.",
      "D": "EC2 인스턴스 상태 변경 알림 유형의 이벤트를 수신하도록 Amazon EventBridge 규칙을 구성합니다. Amazon Simple Notification Service(Amazon SNS) 주제를 대상으로 구성합니다. 주제에 대한 운영 팀을 구독하십시오."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ VPC 흐름 로그 — 네트워크 트래픽 기록, 프로토콜/포트 포함\n▸ 메트릭 필터 — 로그에서 패턴 추출, 경보 트리거\n\n【정답 포인트】\n▸ 포트 감지 → RDP(3389), SSH(22) 접근 추적\n▸ VPC 흐름 로그 → 모든 트래픽 기록 (진입점 불문)\n▸ 메트릭 필터 → 특정 포트 패턴 감지, CloudWatch 알람 연동\n\n【오답 체크】\n(A) CloudWatch Application Insights — EC2 성능 메트릭용, 네트워크 접근 감지 불가\n(B) SSM Managed Instance Core — 세션 관리용 정책, 액세스 감지 전용 아님\n(D) EventBridge + 상태 변경 — 인스턴스 상태만 추적, 특정 포트 접근 감지 불가\n\n【시험 포인트】\n▸ 네트워크 트래픽 모니터링 → VPC 흐름 로그 필수\n▸ 포트 기반 감지 → 메트릭 필터로 RDP/SSH 패턴 추출\n▸ 다중 VPC 감시 → 중앙화된 로그 수집 및 필터링"
  },
  {
    "id": 233,
    "question": "솔루션 설계자가 새 AWS 계정을 생성했으며 AWS 계정 루트 사용자 액세스를 보호해야 합니다. 어떤 작업 조합이 이를 달성합니까? (2개 선택)",
    "options": {
      "A": "루트 사용자가 강력한 암호를 사용하는지 확인하십시오.",
      "B": "루트 사용자에 대한 다단계 인증을 활성화합니다.",
      "C": "암호화된 Amazon S3 버킷에 루트 사용자 액세스 키를 저장합니다.",
      "D": "관리 권한이 포함된 그룹에 루트 사용자를 추가합니다.",
      "E": "인라인 정책 문서를 사용하여 루트 사용자에게 필요한 권한을 적용합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ MFA — 다단계 인증, 보안 강화\n▸ 강력한 암호 — 계정 탈취 방지\n\n【정답 포인트】\n▸ 루트 계정 보안 → 암호 + MFA 2중 보호\n▸ MFA 활성화 → 계정 탈취 시에도 추가 인증 필요\n▸ 강력한 암호 → 브루트포스 공격 방어\n\n【오답 체크】\n(C) 액세스 키를 S3 저장 — 루트 계정은 액세스 키 생성 금지 (AWS 베스트 프랙티스)\n(D) 루트를 그룹에 추가 — 루트 계정은 그룹 멤버십 불가, IAM 개념 혼동\n(E) 루트에 정책 적용 — 루트는 정책 변경 불가, 모든 권한 기본 보유\n\n【시험 포인트】\n▸ 루트 계정 보호 전략 → 강력한 암호 + MFA 필수\n▸ 루트 계정 특성 → IAM 정책 적용 대상 아님\n▸ 루트 액세스 키 — 생성 및 저장 금지"
  },
  {
    "id": 234,
    "question": "회사에서 새로운 웹 기반 고객 관계 관리 애플리케이션을 구축하고 있습니다. 애플리케이션은 Application Load Balancer(ALB) 뒤에 있는 Amazon Elastic Block Store(Amazon EBS) 볼륨이 지원하는 여러 Amazon EC2 인스턴스를 사용합니다. 이 애플리케이션은 Amazon Aurora 데이터베이스도 사용합니다. 애플리케이션의 모든 데이터는 유휴 및 전송 중에 암호화되어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "ALB 에서 AWS Key Management Service(AWS KMS) 인증서를 사용하여 전송 중인 데이터를 암호화합니다. AWS Certificate Manager(ACM)를 사용하여 유휴 상태의 EBS 볼륨 및 Aurora 데이터베이스 스토리지를 암호화합니다.",
      "B": "AWS 루트 계정을 사용하여 AWS Management Console에 로그인합니다. 회사의 암호화 인증서를 업로드합니다. 루트 계정에 있는 동안 계정의 저장 및 전송 중인 모든 데이터에 대해 암호화를 켜는 옵션을 선택합니다.",
      "C": "AWS Key Management Service(AWS KMS)를 사용하여 유휴 상태의 EBS 볼륨 및 Aurora 데이터베이스 스토리지를 암호화합니다. ALB 에 AWS Certificate Manager(ACM) 인증서를 연결하여 전송 중인 데이터를 암호화합니다.",
      "D": "BitLocker 를 사용하여 유휴 상태의 모든 데이터를 암호화합니다. 회사의 TLS 인증서 키를 AWS Key Management Service(AWS KMS)로 가져옵니다. KMS 키를 ALB에 연결하여 전송 중인 데이터를 암호화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ KMS — EBS, RDS 유휴 데이터 암호화\n▸ ACM — ALB의 HTTPS/TLS 인증서 관리\n\n【정답 포인트】\n▸ 유휴 암호화 → KMS 키로 EBS 볼륨, Aurora 데이터베이스 암호화\n▸ 전송 중 암호화 → ACM 인증서로 ALB에 HTTPS 연결\n▸ 통합 솔루션 → AWS 네이티브 암호화 서비스 사용\n\n【오답 체크】\n(A) KMS와 ACM 역할 반대 — ACM은 유휴 암호화 미지원, KMS는 인증서 관리 불가\n(B) 루트 계정 사용 — 모범 사례 위배, 계정 보안 강화 필요\n(D) BitLocker는 Windows 드라이브 암호화, AWS 스토리지 암호화 불가\n\n【시험 포인트】\n▸ 암호화 층 분리 → 유휴(KMS) vs 전송 중(ACM/TLS)\n▸ AWS 암호화 서비스 역할 → KMS(키 관리), ACM(인증서)\n▸ ALB + 데이터베이스 암호화 패턴 → ACM + KMS 조합"
  },
  {
    "id": 235,
    "question": "회사에서 온프레미스 Oracle 데이터베이스를 Amazon Aurora PostgreSQL 로 이전하고 있습니다. 데이터베이스에는 동일한 테이블에 쓰는 여러 응용 프로그램이 있습니다. 응용 프로그램은 각 마이그레이션 사이에 한 달씩 하나씩 마이그레이션해야 합니다. 경영진은 데이터베이스에 많은 수의 읽기 및 쓰기가 있다는 우려를 표명했습니다. 데이터는 마이그레이션하는 동안 두 데이터베이스에서 동기화 상태를 유지해야 합니다. 솔루션 설계자는 무엇을 추천해야 합니까?",
    "options": {
      "A": "초기 마이그레이션에는 AWS DataSync 를 사용하십시오. AWS Database Migration Service(AWS DMS)를 사용하여 변경 데이터 캡처(CDC) 복제 작업 및 테이블 매핑을 생성하여 모든 테이블을 선택합니다.",
      "B": "초기 마이그레이션에 AWS DataSync 를 사용합니다. AWS Database Migration Service(AWS DMS)를 사용하여 전체 로드 및 변경 데이터 캡처(CDC) 복제 작업과 테이블 매핑을 생성하여 모든 테이블을 선택합니다.",
      "C": "메모리 최적화 복제 인스턴스를 사용하여 AWS DMS(AWS Database Migration Service)와 함께 AWS Schema Conversion Tool 을 사용합니다. 전체 로드 및 CDC(변경 데이터 캡처) 복제 작업과 테이블 매핑을 생성하여 모든 테이블을 선택합니다.",
      "D": "컴퓨팅 최적화 복제 인스턴스를 사용하여 AWS DMS(AWS Database Migration Service)와 함께 AWS Schema Conversion Tool 을 사용합니다. 전체 로드 및 변경 데이터 캡처(CDC) 복제 작업과 테이블 매핑을 생성하여 가장 큰 테이블을 선택합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SCT — Oracle → PostgreSQL 스키마 변환\n▸ DMS + CDC — 실시간 데이터 동기화\n▸ 메모리 최적화 — 고처리량 CDC 작업\n\n【정답 포인트】\n▸ Oracle → PostgreSQL 변환 → SCT 필수 (데이터 타입, 문법 변환)\n▸ 높은 읽기/쓰기 → 메모리 최적화 인스턴스 (캐싱, 버퍼)\n▸ 모든 테이블 선택 → 완전한 마이그레이션 (부분 마이그레이션 불가)\n\n【오답 체크】\n(A) DataSync는 스토리지용, 데이터베이스 마이그레이션 미지원\n(B) DataSync + DMS 조합 불필요, DMS만으로 충분\n(D) 컴퓨팅 최적화는 CPU 집약, CDC의 높은 메모리 필요 미충족, 큰 테이블만 선택 불완전\n\n【시험 포인트】\n▸ DMS 아키텍처 → SCT(스키마) + DMS(데이터)\n▸ 복제 인스턴스 선택 → 고처리량 = 메모리 최적화\n▸ CDC 동작 원리 → 모든 테이블의 변경 추적 필수"
  },
  {
    "id": 236,
    "question": "회사에 이미지 공유를 위한 3 계층 애플리케이션이 있습니다. 이 애플리케이션은 프런트 엔드 계층에 Amazon EC2 인스턴스를 사용하고, 애플리케이션 계층에 또 다른 EC2 인스턴스를 사용하고, MySQL 데이터베이스에 세 번째 EC2 인스턴스를 사용합니다. 솔루션 설계자는 응용 프로그램에 최소한의 변경만 필요한 확장 가능하고 가용성이 높은 솔루션을 설계해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon S3를 사용하여 프런트 엔드 계층을 호스팅하십시오. 애플리케이션 계층에 AWS Lambda 함수를 사용합니다. 데이터베이스를 Amazon DynamoDB 테이블로 이동합니다. Amazon S3를 사용하여 사용자 이미지를 저장하고 제공합니다.",
      "B": "프런트엔드 계층과 애플리케이션 계층에 로드 밸런싱된 다중 AZ AWS Elastic Beanstalk 환경을 사용합니다. 데이터베이스를 여러 읽기 전용 복제본이 있는 Amazon RDS DB 인스턴스로 이동하여 사용자 이미지를 제공합니다.",
      "C": "Amazon S3 를 사용하여 프런트 엔드 계층을 호스팅합니다. 애플리케이션 계층에 대한 Auto Scaling 그룹의 EC2 인스턴스 플릿을 사용합니다. 데이터베이스를 메모리 최적화 인스턴스 유형으로 이동하여 사용자 이미지를 저장하고 제공합니다.",
      "D": "프런트엔드 계층과 애플리케이션 계층에 로드 밸런싱된 다중 AZ AWS Elastic Beanstalk 환경을 사용합니다. 데이터베이스를 Amazon RDS 다중 AZ DB 인스턴스로 이동합니다. Amazon S3를 사용하여 사용자 이미지를 저장하고 제공합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Elastic Beanstalk — 자동 확장, 로드 밸런싱\n▸ RDS 다중 AZ — 데이터베이스 고가용성\n▸ S3 — 정적 자산(이미지) 저장\n\n【정답 포인트】\n▸ 최소 변경 → Elastic Beanstalk이 기존 코드 호환성 지원\n▸ 고가용성 → 다중 AZ Beanstalk + RDS 다중 AZ\n▸ 확장성 → 자동 스케일링 + 로드 밸런싱 내장\n▸ 이미지 저장 → S3로 정적 콘텐츠 분리\n\n【오답 체크】\n(A) Lambda + DynamoDB — 애플리케이션 재설계 필요, 최소 변경 원칙 위배\n(B) 이미지 RDS 저장 — 데이터베이스에 바이너리 저장 비효율, S3 미사용\n(C) EC2 플릿 + 메모리 최적화 DB — 자동 확장 미흡, 이미지 저장소 미지정\n\n【시험 포인트】\n▸ 최소 변경 원칙 → 기존 애플리케이션 구조 유지\n▸ 3계층 아키텍처 → Beanstalk(웹 계층) + RDS(DB) + S3(저장소)\n▸ 이미지 저장 패턴 → S3는 정적 콘텐츠 저장소"
  },
  {
    "id": 237,
    "question": "VPC-A 의 Amazon EC2 인스턴스에서 실행 중인 애플리케이션은 VPC-B 의 다른 EC2 인스턴스에 있는 파일에 액세스해야 합니다. 두 VPC 모두 별도의 AWS 계정에 있습니다. 네트워크 관리자는 VPC-A 에서 VPC-B 의 EC2 인스턴스에 대한 보안 액세스를 구성하는 솔루션을 설계해야 합니다. 연결에는 단일 장애 지점이나 대역폭 문제가 없어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "VPC-A와 VPC-B 간에 VPC 피어링 연결을 설정합니다.",
      "B": "VPC-B에서 실행되는 EC2 인스턴스에 대한 VPC 게이트웨이 엔드포인트를 설정합니다.",
      "C": "가상 프라이빗 게이트웨이를 VPC-B에 연결하고 VPC-A에서 라우팅을 설정합니다.",
      "D": "VPC-B에서 실행 중인 EC2 인스턴스에 대한 프라이빗 가상 인터페이스(VIF)를 생성하고 VPC-A에서 적절한 경로를 추가합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 교차 계정 VPC 통신 — VPC 피어링 표준\n▸ 단일 장애점 제거 — AWS 네트워크 기반 중복성\n\n【정답 포인트】\n▸ 별도 계정 → 피어링 지원 (Direct Connect 불필요)\n▸ 보안 액세스 → 프라이빗 네트워크 통신\n▸ 고가용성 → AWS 인프라 자동 중복성\n▸ 대역폭 → 피어링은 풀 대역폭 지원\n\n【오답 체크】\n(B) VPC 게이트웨이 엔드포인트 — S3/DynamoDB 전용, EC2 인스턴스 통신 미지원\n(C) 가상 프라이빗 게이트웨이 — 온프레미스 연결용 (VPN/Direct Connect), VPC간 미지원\n(D) 프라이빗 VIF — Direct Connect의 성분, 교차 계정 피어링 미지원\n\n【시험 포인트】\n▸ 교차 계정 VPC 통신 → VPC 피어링 유일한 선택\n▸ 엔드포인트 vs 피어링 → EC2 통신 = 피어링\n▸ 고가용성 아키텍처 → AWS 매니지드 서비스 자동 중복성"
  },
  {
    "id": 238,
    "question": "회사에서 엔지니어 팀을 위해 개별 AWS 계정을 실험하려고 합니다. 회사는 지정된 달의 Amazon EC2 인스턴스 사용량이 각 계정의 특정 임계값을 초과하는 즉시 알림을 받기를 원합니다. 이 요구 사항을 가장 비용 효율적으로 충족하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": {
      "A": "Cost Explorer 를 사용하여 서비스별 비용에 대한 일일 보고서를 생성합니다. EC2 인스턴스별로 보고서를 필터링합니다. 임계값을 초과하면 Amazon Simple Email Service(Amazon SES) 알림을 보내도록 Cost Explorer를 구성합니다.",
      "B": "Cost Explorer 를 사용하여 서비스별 월별 비용 보고서를 생성합니다. EC2 인스턴스별로 보고서를 필터링합니다. 임계값을 초과하면 Amazon Simple Email Service(Amazon SES) 알림을 보내도록 Cost Explorer를 구성합니다.",
      "C": "AWS 예산을 사용하여 각 계정에 대한 비용 예산을 생성합니다. 기간을 매월로 설정합니다. 범위를 EC2 인스턴스로 설정합니다. 예산에 대한 경고 임계값을 설정합니다. 임계값 초과 시 알림을 받도록 Amazon Simple Notification Service(Amazon SNS) 주제를 구성합니다.",
      "D": "AWS 비용 및 사용 보고서를 사용하여 시간 단위로 보고서를 생성합니다. 보고서 데이터를 Amazon Athena 와 통합합니다. Amazon EventBridge를 사용하여 Athena 쿼리를 예약합니다. 임계값 초과 시 알림을 받도록 Amazon Simple Notification Service(Amazon SNS) 주제를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS 예산 — 비용 예산 설정 및 경보\n▸ 월별 기간 — \"지정된 달\" 요구 사항 정렬\n\n【정답 포인트】\n▸ 간단함 → AWS 예산으로 1-2단계 설정\n▸ 월별 추적 → \"지정된 달\" 임계값 감시\n▸ EC2 필터링 → 범위 설정으로 EC2만 모니터링\n▸ 즉시 알림 → SNS 연동으로 실시간 통지\n\n【오답 체크】\n(A, B) Cost Explorer — 시각화 도구, 자동 경보 기능 없음, 수동 모니터링 필요\n(D) CUR + Athena + EventBridge — 과도한 복잡성, 비용 효율 낮음\n\n【시험 포인트】\n▸ 비용 모니터링 도구 → 예산(경보) > Cost Explorer(보고)\n▸ 경보 설정 패턴 → 예산 + SNS 표준\n▸ 비용 효율 → 마니지드 서비스(예산) vs 커스텀 파이프라인(CUR)"
  },
  {
    "id": 239,
    "question": "솔루션 설계자는 회사의 애플리케이션을 위한 새로운 마이크로서비스를 설계해야 합니다. 클라이언트는 마이크로 서비스에 도달하기 위해 HTTPS 끝점을 호출할 수 있어야 합니다. 또한 마이크로서비스는 AWS Identity and Access Management(IAM)를 사용하여 호출을 인증해야 합니다. 솔루션 설계자는 Go 1.x 로 작성된 단일 AWS Lambda 함수를 사용하여 이 마이크로서비스에 대한 논리를 작성합니다. 어떤 솔루션이 운영상 가장 효율적인 방식으로 기능을 배포합니까?",
    "options": {
      "A": "Amazon API Gateway REST API 를 생성합니다. Lambda 함수를 사용하도록 메서드를 구성합니다. API에서 IAM 인증을 활성화합니다.",
      "B": "함수에 대한 Lambda 함수 URL을 생성합니다. 인증 유형으로 AWS_IAM을 지정합니다.",
      "C": "Amazon CloudFront 배포를 생성합니다. 함수를 Lambda@Edge에 배포합니다. IAM 인증 로직을 Lambda@Edge 함수에 통합합니다.",
      "D": "Amazon CloudFront 배포를 생성합니다. CloudFront Functions 에 함수를 배포합니다. 인증 유형으로 AWS_IAM을 지정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ API Gateway — Lambda 프론트 엔드, IAM 인증 내장\n▸ Lambda 함수 URL — 간단하지만 고급 기능 제한\n\n【정답 포인트】\n▸ HTTPS 엔드포인트 → API Gateway 또는 함수 URL\n▸ IAM 인증 → API Gateway REST API가 기본 지원\n▸ 운영 효율 → 구성 간단, 관리 오버헤드 최소\n▸ 확장성 → API Gateway의 스케일, 레이트 제한, 캐싱\n\n【오답 체크】\n(B) 함수 URL + AWS_IAM — IAM 인증은 지원하지만, API Gateway보다 기능 제한\n(C, D) Lambda@Edge / CloudFront Functions — 엣지 컴퓨팅 목적, 중앙 집중식 API 미지원\n\n【시험 포인트】\n▸ Lambda 프론트 엔드 선택 → REST API = 풀 기능, 함수 URL = 가볍게\n▸ IAM 인증 → API Gateway REST API가 표준\n▸ 마이크로서비스 패턴 → API Gateway + Lambda 조합"
  },
  {
    "id": 240,
    "question": "한 회사가 이전에 데이터 웨어하우스 솔루션을 AWS 로 마이그레이션했습니다. 회사에는 AWS Direct Connect 연결도 있습니다. 본사 사용자는 시각화 도구를 사용하여 데이터 웨어하우스를 쿼리합니다. 데이터 웨어하우스에서 반환한 쿼리의 평균 크기는 50MB 이고 시각화 도구에서 보낸 각 웹 페이지는 약 500KB 입니다. 데이터 웨어하우스에서 반환된 결과 집합은 캐시되지 않습니다. 회사에 가장 낮은 데이터 전송 송신 비용을 제공하는 솔루션은 무엇입니까?",
    "options": {
      "A": "온프레미스에서 시각화 도구를 호스팅하고 인터넷을 통해 직접 데이터 웨어하우스를 쿼리합니다.",
      "B": "데이터 웨어하우스와 동일한 AWS 리전에서 시각화 도구를 호스팅합니다. 인터넷을 통해 액세스하십시오.",
      "C": "온프레미스에서 시각화 도구를 호스팅하고 동일한 AWS 리전의 위치에서 Direct Connect 연결을 통해 직접 데이터 웨어하우스를 쿼리합니다.",
      "D": "데이터 웨어하우스와 동일한 AWS 리전에서 시각화 도구를 호스팅하고 동일한 리전의 위치에서 Direct Connect 연결을 통해 액세스합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 데이터 송신 비용 — AWS 내부 > 외부, Direct Connect < Internet\n▸ 결과 집합 캐싱 없음 — 매 쿼리마다 50MB 전송\n\n【정답 포인트】\n▸ 송신 비용 최소 → AWS 내부 통신 = 무료\n▸ 도구 + 웨어하우스 같은 AZ → 데이터 송신 비용 0\n▸ 사용자 → 도구만 Direct Connect → 500KB 요청만 DX 사용\n▸ 비용 공식 → (요청 500KB × DX) + (결과 50MB × 무료 내부)\n\n【오답 체크】\n(A) 온프레미스 도구 + 인터넷 쿼리 → 매 쿼리 50MB × 인터넷 송신 비용(최악)\n(B) 클라우드 도구 + 인터넷 접근 → 사용자 → 도구(인터넷 비용) + 도구 → DB(무료)\n(C) 온프레미스 도구 + DX → 50MB × DX 비용 (C보다 높음)\n\n【시험 포인트】\n▸ AWS 송신 비용 구조 → 리전 내부(무료) > 리전 간(저가) > 인터넷(고가)\n▸ Direct Connect 활용 → 대용량 아웃바운드 미최적, 인바운드만 활용\n▸ 비용 최소화 → 데이터 처리를 발생지(클라우드)에서 수행"
  },
  {
    "id": 241,
    "question": "온라인 학습 회사가 AWS 클라우드로 마이그레이션하고 있습니다. 회사는 PostgreSQL 데이터베이스에 학생 기록을 유지합니다. 회사는 여러 AWS 리전에서 데이터를 항상 온라인으로 사용할 수 있는 솔루션이 필요합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "PostgreSQL 데이터베이스를 Amazon EC2 인스턴스의 PostgreSQL 클러스터로 마이그레이션합니다.",
      "B": "PostgreSQL 데이터베이스를 다중 AZ 기능이 켜진 PostgreSQL DB 인스턴스용 Amazon RDS로 마이그레이션합니다.",
      "C": "PostgreSQL 데이터베이스를 Amazon RDS for PostgreSQL DB 인스턴스로 마이그레이션합니다. 다른 리전에서 읽기 전용 복제본을 생성합니다.",
      "D": "PostgreSQL 데이터베이스를 Amazon RDS for PostgreSQL DB 인스턴스로 마이그레이션합니다. 다른 리전에 복사할 DB 스냅샷을 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 다중 리전 읽기 전용 복제본 — 리전 간 가용성\n▸ RDS 읽기 복제본 — 비동기, 최소 지연\n\n【정답 포인트】\n▸ 항상 온라인 → 여러 리전에 복제\n▸ 읽기 전용 복제본 → 자동 생성 및 동기화\n▸ 운영 오버헤드 최소 → RDS 완전 관리형\n▸ 다중 리전 → 복제본이 재해 복구 겸 로컬 캐시\n\n【오답 체크】\n(A) EC2 클러스터 — 수동 관리 필요, 운영 오버헤드 높음\n(B) 다중 AZ — 같은 리전 내 고가용성만, 다중 리전 미지원\n(D) 스냅샷 복사 — 수동 프로세스, \"항상 온라인\" 요구 미충족\n\n【시험 포인트】\n▸ 다중 리전 가용성 → 읽기 복제본이 표준\n▸ 읽기 전용 복제본 특징 → 비동기 복제, 로컬 읽기 최적화\n▸ 운영 최소화 → RDS 완전 관리형 선택"
  },
  {
    "id": 242,
    "question": "회사는 7 개의 Amazon EC2 인스턴스를 사용하여 AWS 에서 웹 애플리케이션을 호스팅합니다. 회사는 DNS 쿼리에 대한 응답으로 모든 정상적인 EC2 인스턴스의 IP 주소가 반환되도록 요구합니다. 이 요구 사항을 충족하려면 어떤 정책을 사용해야 합니까?",
    "options": {
      "A": "단순 라우팅 정책(Simple routing policy)",
      "B": "레이턴시 라우팅 정책(Latency routing policy)",
      "C": "다중값 라우팅 정책(Multivalue routing policy)",
      "D": "지리적 위치 라우팅 정책(Geolocation routing policy)"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 다중값 라우팅 — 여러 IP 반환, 개별 헬스 체크\n▸ 단순 라우팅 — 하나의 레코드, 하나의 IP (또는 여러 값 무분별)\n\n【정답 포인트】\n▸ \"모든 정상적인\" — 개별 헬스 체크 필수\n▸ \"모든... IP 반환\" → 다중값 라우팅\n▸ 7개 인스턴스 → 각각 다른 값 레코드\n\n【오답 체크】\n(A) 단순 라우팅 — 여러 IP 반환 가능하지만 개별 헬스 체크 없음\n(B) 레이턴시 라우팅 — 지연시간 기반 선택, 모든 IP 반환 아님\n(D) 지리적 위치 라우팅 — 지역 기반, 다중값 반환 미지원\n\n【시험 포인트】\n▸ Route53 라우팅 정책 → 헬스 체크 + 다중값 = 다중값 라우팅\n▸ 개별 모니터링 → 다중값 라우팅만 지원\n▸ 로드 밸런싱 패턴 → 클라이언트 측 라운드 로빈"
  },
  {
    "id": 243,
    "question": "의학 연구실에서 새로운 연구와 관련된 데이터를 생성합니다. 연구소는 온프레미스 파일 기반 애플리케이션을 위해 전국의 클리닉에 최소한의 대기 시간으로 데이터를 제공하고자 합니다. 데이터 파일은 각 클리닉에 대한 읽기 전용 권한이 있는 Amazon S3 버킷에 저장됩니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "각 클리닉에서 온프레미스로 AWS Storage Gateway 파일 게이트웨이를 가상 머신(VM)으로 배포합니다.",
      "B": "처리를 위해 AWS DataSync 를 사용하여 각 클리닉의 온프레미스 애플리케이션으로 파일을 마이그레이션합니다.",
      "C": "각 클리닉에서 온프레미스로 AWS Storage Gateway 볼륨 게이트웨이를 가상 머신(VM)으로 배포합니다.",
      "D": "Amazon Elastic File System(Amazon EFS) 파일 시스템을 각 클리닉의 온프레미스 서버에 연결합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 파일 게이트웨이 — S3 호환 파일 시스템, 로컬 캐싱\n▸ 최소 대기 시간 — 로컬 캐시로 레이턴시 감소\n\n【정답 포인트】\n▸ 파일 기반 애플리케이션 → 파일 게이트웨이 (NFS/SMB)\n▸ S3 데이터 접근 → 파일 게이트웨이의 S3 백엔드\n▸ 로컬 캐싱 → 온프레미스 대기 시간 최소화\n▸ 읽기 전용 → 게이트웨이 캐시로 충분\n\n【오답 체크】\n(B) DataSync — 일회성 마이그레이션 도구, 지속적 액세스 미지원\n(C) 볼륨 게이트웨이 — iSCSI 기반 블록 저장소, 파일 기반 앱 미지원\n(D) EFS — AWS 내부용, 온프레미스 직접 연결 불가\n\n【시험 포인트】\n▸ Storage Gateway 유형 → 파일/볼륨/테이프\n▸ 파일 게이트웨이 역할 → S3 캐시 레이어\n▸ 온프레미스 → AWS 저장소 연결 → Storage Gateway 필수"
  },
  {
    "id": 244,
    "question": "회사에서 단일 Amazon EC2 인스턴스에서 실행되는 콘텐츠 관리 시스템을 사용하고 있습니다. EC2 인스턴스에는 웹 서버와 데이터베이스 소프트웨어가 모두 포함되어 있습니다. 회사는 웹 사이트 플랫폼을 고가용성으로 만들고 사용자 요구에 맞게 웹 사이트를 확장할 수 있어야 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "데이터베이스를 Amazon RDS 로 이동하고 자동 백업을 활성화합니다. 동일한 가용 영역에서 다른 EC2 인스턴스를 수동으로 시작합니다. 가용 영역에서 Application Load Balancer를 구성하고 두 인스턴스를 대상으로 설정합니다.",
      "B": "기존 EC2 인스턴스와 동일한 가용 영역에 있는 읽기 전용 복제본이 있는 Amazon Aurora 인스턴스로 데이터베이스를 마이그레이션합니다. 동일한 가용 영역에서 다른 EC2 인스턴스를 수동으로 시작합니다. Application Load Balancer 를 구성하고 두 개의 EC2 인스턴스를 대상으로 설정합니다.",
      "C": "다른 가용 영역에 읽기 전용 복제본이 있는 Amazon Aurora 로 데이터베이스를 이동합니다. EC2 인스턴스에서 Amazon 머신 이미지(AMI)를 생성합니다. 두 가용 영역에서 Application Load Balancer를 구성합니다. 두 가용 영역에서 AMI를 사용하는 Auto Scaling 그룹을 연결합니다.",
      "D": "데이터베이스를 별도의 EC2 인스턴스로 이동하고 Amazon S3 로 백업을 예약합니다. 원래 EC2 인스턴스에서 Amazon 머신 이미지(AMI)를 생성합니다. 두 가용 영역에서 Application Load Balancer를 구성합니다. 두 가용 영역에서 AMI를 사용하는 Auto Scaling 그룹을 연결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 다중 AZ 구조 — 고가용성\n▸ Auto Scaling — 동적 확장\n▸ Aurora 읽기 복제본 — 다중 AZ 자동 복제\n\n【정답 포인트】\n▸ 고가용성 → 다중 AZ (A,B,C,D 모두 제시, C만 완전)\n▸ 자동 확장 → Auto Scaling 그룹으로 인스턴스 자동 관리\n▸ 데이터베이스 분리 → 웹 서버와 독립 운영\n▸ Aurora 복제본 → 다른 AZ에 읽기 복제, 장애 조치 가능\n\n【오답 체크】\n(A) 동일 AZ → 고가용성 부족, 수동 관리\n(B) 동일 AZ 복제본 → AZ 장애 시 데이터베이스 미보호\n(D) 별도 EC2 DB + S3 백업 → 데이터베이스 관리 복잡, RDS/Aurora 미사용\n\n【시험 포인트】\n▸ 고가용성 아키텍처 → 다중 AZ + Auto Scaling\n▸ 데이터베이스 → 관리형 서비스(Aurora) 선호\n▸ 확장성 = Auto Scaling + 로드 밸런싱"
  },
  {
    "id": 245,
    "question": "회사가 AWS 에서 애플리케이션을 시작하고 있습니다. 애플리케이션은 Application Load Balancer(ALB)를 사용하여 단일 대상 그룹에 있는 최소 2 개의 Amazon EC2 인스턴스로 트래픽을 보냅니다. 인스턴스는 각 환경의 Auto Scaling 그룹에 있습니다. 회사는 개발 환경과 생산 환경이 필요합니다. 프로덕션 환경에는 트래픽이 많은 기간이 있습니다. 개발 환경을 가장 비용 효율적으로 구성하는 솔루션은 무엇입니까?",
    "options": {
      "A": "하나의 EC2 인스턴스만 대상으로 하도록 개발 환경에서 대상 그룹을 재구성합니다.",
      "B": "ALB 밸런싱 알고리즘을 최소 미해결 요청으로 변경합니다.",
      "C": "두 환경 모두에서 EC2 인스턴스의 크기를 줄입니다.",
      "D": "개발 환경의 Auto Scaling 그룹에서 최대 EC2 인스턴스 수를 줄입니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 개발 환경 최적화 — 낮은 트래픽, 저비용\n▸ 최소 인스턴스 수 제거 — 비용 감소\n\n【정답 포인트】\n▸ 개발 환경은 저부하 → 1개 인스턴스로 충분\n▸ 고가용성 불필요 → 개발은 단일 인스턴스 가능\n▸ 직접적 비용 절감 → 인스턴스 50% 감소\n▸ ALB 유지 → 프로덕션 환경 구조 일관성\n\n【오답 체크】\n(B) 밸런싱 알고리즘 변경 — 로드 배분 방식일 뿐, 비용 절감 미흡\n(C) 인스턴스 크기 축소 — 프로덕션도 영향, 권장 아님\n(D) 최대 인스턴스 수 감소 — 여전히 최소 2개 유지 필요, 미약한 절감\n\n【시험 포인트】\n▸ 환경별 리소스 차등 배치 → 개발은 최소 리소스\n▸ 비용 최적화 — 불필요한 리소스 제거\n▸ 고가용성 우선순위 → 프로덕션만 적용"
  },
  {
    "id": 246,
    "question": "한 회사가 여러 가용 영역의 Amazon EC2 인스턴스에서 웹 애플리케이션을 실행합니다. EC2 인스턴스는 프라이빗 서브넷에 있습니다. 솔루션 설계자는 인터넷 연결 ALB(Application Load Balancer)를 구현하고 EC2 인스턴스를 대상 그룹으로 지정합니다. 그러나 인터넷 트래픽이 EC2 인스턴스에 도달하지 않습니다. 솔루션 설계자는 이 문제를 해결하기 위해 아키텍처를 어떻게 재구성해야 합니까?",
    "options": {
      "A": "ALB 를 Network Load Balancer 로 교체하십시오. 인터넷 트래픽을 허용하도록 퍼블릭 서브넷에서 NAT 게이트웨이를 구성합니다.",
      "B": "EC2 인스턴스를 퍼블릭 서브넷으로 이동합니다. EC2 인스턴스의 보안 그룹에 규칙을 추가하여 0.0.0.0/0으로의 아웃바운드 트래픽을 허용합니다.",
      "C": "인터넷 게이트웨이 경로를 통해 0.0.0.0/0 트래픽을 보내도록 EC2 인스턴스의 서브넷에 대한 경로 테이블을 업데이트합니다. EC2 인스턴스의 보안 그룹에 규칙을 추가하여 0.0.0.0/0으로의 아웃바운드 트래픽을 허용합니다.",
      "D": "각 가용 영역에서 퍼블릭 서브넷을 생성합니다. 퍼블릭 서브넷을 ALB 와 연결합니다. 프라이빗 서브넷에 대한 경로로 퍼블릭 서브넷에 대한 경로 테이블을 업데이트합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ ALB 퍼블릭 배치 — 인터넷 트래픽 수신\n▸ 프라이빗 EC2 — 보안 유지, 인바운드만 수신\n\n【정답 포인트】\n▸ ALB는 퍼블릭 서브넷 필수 → 인터넷 게이트웨이 접근\n▸ EC2는 프라이빗 유지 → 보안\n▸ ALB → 프라이빗 EC2 경로 → 경로 테이블 설정\n▸ 다중 AZ → 각 AZ마다 퍼블릭 서브넷 필요\n\n【오답 체크】\n(A) NLB 사용 — 프로토콜 계층 차이, ALB vs NLB 문제 아님\n(B) EC2를 퍼블릭으로 이동 — 보안 취약 증가, 아웃바운드 규칙은 부수적\n(C) 라우팅만 수정 — ALB가 여전히 프라이빗 서브넷, 인터넷 수신 불가\n\n【시험 포인트】\n▸ ALB 배치 → 퍼블릭 서브넷 필수\n▸ 인스턴스 배치 → 프라이빗 서브넷 권장\n▸ 다중 AZ 아키텍처 → 각 AZ 독립 구성"
  },
  {
    "id": 247,
    "question": "한 회사에서 MySQL 용 Amazon RDS 에 데이터베이스를 배포했습니다. 트랜잭션 증가로 인해 데이터베이스 지원 팀은 DB 인스턴스에 대한 느린 읽기를 보고하고 있으며 읽기 전용 복제본을 추가할 것을 권장합니다. 이 변경 사항을 구현하기 전에 솔루션 설계자가 수행해야 하는 작업 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "RDS 기본 노드에서 binlog 복제를 활성화합니다.",
      "B": "원본 DB 인스턴스의 장애 조치 우선 순위를 선택합니다.",
      "C": "원본 DB 인스턴스에서 장기 실행 트랜잭션이 완료되도록 허용합니다.",
      "D": "글로벌 테이블을 생성하고 테이블을 사용할 수 있는 AWS 리전을 지정합니다.",
      "E": "백업 보존 기간을 0 이외의 값으로 설정하여 원본 인스턴스에서 자동 백업을 활성화합니다."
    },
    "answer": "CE",
    "explanation": "【핵심 용어】\n▸ Binlog 복제 — MySQL 읽기 복제본 기반\n▸ 자동 백업 — 읽기 복제본 생성 사전 조건\n\n【정답 포인트】\n▸\n(C) 장기 트랜잭션 완료 → binlog 스냅샷 정확성 확보\n▸\n(E) 백업 활성화 → 복제본 생성의 필수 사전 조건\n▸ MySQL RDS → binlog 기반 복제 방식 (이미 자동 활성화, A 혼동 가능)\n\n【오답 체크】\n(A) Binlog 활성화 — MySQL RDS는 기본 활성화, 추가 조치 불필요\n(B) 장애 조치 우선순위 — 다중 AZ 설정용, 읽기 복제본 생성 무관\n(D) 글로벌 테이블 — DynamoDB 기능, RDS MySQL 미지원\n\n【시험 포인트】\n▸ RDS 읽기 복제본 사전 조건 → 자동 백업 필수\n▸ 트랜잭션 정합성 → 오래된 트랜잭션 완료 필요\n▸ MySQL vs Aurora → MySQL은 binlog 기반, Aurora는 스토리지 기반 다름"
  },
  {
    "id": 248,
    "question": "회사는 Amazon EC2 인스턴스에서 분석 소프트웨어를 실행합니다. 소프트웨어는 Amazon S3 에 업로드된 데이터를 처리하기 위해 사용자의 작업 요청을 수락합니다. 일부 제출된 데이터가 처리되지 않고 있다고 사용자가 보고합니다. Amazon CloudWatch 는 EC2 인스턴스의 일관된 CPU 사용률이 100% 또는 거의 100%에 가깝다고 밝혔습니다. 회사는 시스템 성능을 개선하고 사용자 부하에 따라 시스템을 확장하려고 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "인스턴스의 복사본을 만듭니다. Application Load Balancer 뒤에 모든 인스턴스를 배치합니다.",
      "B": "Amazon S3용 S3 VPC 엔드포인트를 생성합니다. 엔드포인트를 참조하도록 소프트웨어를 업데이트합니다.",
      "C": "EC2 인스턴스를 중지합니다. CPU 와 메모리가 더 강력한 인스턴스 유형으로 인스턴스 유형을 수정합니다. 인스턴스를 다시 시작하십시오.",
      "D": "들어오는 요청을 Amazon Simple Queue Service(Amazon SQS)로 라우팅합니다. 대기열 크기에 따라 EC2 Auto Scaling 그룹을 구성합니다. 대기열에서 읽을 수 있도록 소프트웨어를 업데이트합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ CPU 병목 — 처리 능력 부족이 아님, 작업 큐 관리 필요\n▸ Auto Scaling — 동적 부하 조정으로 탄성 확장\n▸ SQS — 비동기 작업 큐로 요청 버퍼링\n\n【정답 포인트】\n▸ CPU 100% 지속 → 수평 확장(Scale out) 필요\n▸ SQS + Auto Scaling → 부하 기반 동적 스케일링 구현\n▸ 비동기 처리 → 요청 손실 방지 및 탄력성 확보\n\n【오답 체크】\n(A) ALB 로드밸런싱: CPU 부하 자체를 해결하지 못함\n(B) S3 VPC 엔드포인트: 네트워크 레이턴시 개선만 가능, 처리량 증대 불가\n(C) 인스턴스 업그레이드: 단일 인스턴스 한계, 계속 병목 발생 가능\n\n【시험 포인트】\n▸ 지속적 CPU 100% → Auto Scaling은 필수\n▸ 작업 손실 → 큐(SQS) 기반 비동기 처리 패턴"
  },
  {
    "id": 249,
    "question": "회사는 AWS 클라우드에서 호스팅되는 미디어 애플리케이션을 위한 공유 스토리지 솔루션을 구현하고 있습니다. 회사는 SMB 클라이언트를 사용하여 데이터에 액세스할 수 있는 기능이 필요합니다. 솔루션은 완전히 관리되어야 합니다. 어떤 AWS 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS Storage Gateway 볼륨 게이트웨이를 생성합니다. 필요한 클라이언트 프로토콜을 사용하는 파일 공유를 만듭니다. 응용 프로그램 서버를 파일 공유에 연결합니다.",
      "B": "AWS Storage Gateway 테이프 게이트웨이를 생성합니다. Amazon S3 를 사용하도록 테이프를 구성합니다. 애플리케이션 서버를 테이프 게이트웨이에 연결합니다.",
      "C": "Amazon EC2 Windows 인스턴스를 생성합니다. 인스턴스에 Windows 파일 공유 역할을 설치하고 구성합니다. 응용 프로그램 서버를 파일 공유에 연결합니다.",
      "D": "Windows 파일 서버 파일 시스템용 Amazon FSx 를 생성합니다. 원본 서버에 파일 시스템을 연결합니다. 애플리케이션 서버를 파일 시스템에 연결하십시오."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SMB 프로토콜 — Windows 기반 파일 공유 표준\n▸ FSx for Windows — 관리형 Windows 파일 서버 서비스\n▸ 공유 스토리지 — 다중 인스턴스 동시 액세스\n\n【정답 포인트】\n▸ \"완전히 관리\" → Managed service 필수(EC2 자체 관리 제외)\n▸ SMB 액세스 → FSx for Windows File Server (NTFS, ACL 지원)\n▸ 즉시 배포 — Storage Gateway 볼륨 게이트웨이는 캐싱용\n\n【오답 체크】\n(A) Storage Gateway 볼륨: 블록 스토리지 캐싱, 파일 공유 아님\n(B) Storage Gateway 테이프: 백업/아카이빙용, 운영 파일공유 불가\n(C) EC2 + Windows 역할: 자체 관리 필요, \"완전히 관리\" 불충족\n\n【시험 포인트】\n▸ 관리형 + SMB → FSx for Windows 필수 선택\n▸ Storage Gateway와의 차이 명확히 구분"
  },
  {
    "id": 250,
    "question": "회사의 보안 팀이 VPC 흐름 로그에서 네트워크 트래픽을 캡처하도록 요청합니다. 로그는 90일 동안 자주 액세스한 후 간헐적으로 액세스합니다. 솔루션 설계자는 로그를 구성할 때 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon CloudWatch 를 대상으로 사용하십시오. 90 일 만료로 CloudWatch 로그 그룹 설정",
      "B": "Amazon Kinesis 를 대상으로 사용합니다. 항상 90 일 동안 로그를 유지하도록 Kinesis 스트림을 구성합니다.",
      "C": "AWS CloudTrail 을 대상으로 사용합니다. Amazon S3 버킷에 저장하도록 CloudTrail 을 구성하고 S3 Intelligent-Tiering을 활성화합니다.",
      "D": "Amazon S3를 대상으로 사용합니다. S3 수명 주기 정책을 활성화하여 90일 후에 로그를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 수명 주기 정책(Lifecycle) — 접근 패턴에 따른 스토리지 클래스 자동 전환\n▸ S3 Standard-IA — 접근 빈도 낮은 데이터용 저비용 스토리지\n▸ 장기 보관 — 90일 이상 유지 필요\n\n【정답 포인트】\n▸ \"자주\" → \"간헐적\" 패턴 → 스토리지 비용 최적화 필수\n▸ 90일 임계점 → Lifecycle 규칙으로 자동 클래스 변경\n▸ S3 + Lifecycle → 구글 클라우드 Intelligent-Tiering 비용 효율\n\n【오답 체크】\n(A) CloudWatch: 90일 제한 있음, 초과 데이터 삭제됨(보관 불가)\n(B) Kinesis: 스트리밍 데이터용, 90일 보관은 비용 비효율\n(C) CloudTrail: API 감사용(VPC Flow Log 대상 아님)\n\n【시험 포인트】\n▸ 접근 패턴 변화 → Lifecycle 규칙 자동화\n▸ 비용 최적화 + 90일 보관 → S3 + IA 조합"
  },
  {
    "id": 251,
    "question": "Amazon EC2 인스턴스는 새 VPC 의 프라이빗 서브넷에 있습니다. 이 서브넷에는 아웃바운드 인터넷 액세스 권한이 없지만 EC2 인스턴스에는 외부 공급업체로부터 월별 보안 업데이트를 다운로드할 수 있는 기능이 필요합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "인터넷 게이트웨이를 생성하고 VPC 에 연결합니다. 인터넷 게이트웨이를 기본 경로로 사용하도록 프라이빗 서브넷 경로 테이블을 구성합니다.",
      "B": "NAT 게이트웨이를 생성하고 퍼블릭 서브넷에 배치합니다. NAT 게이트웨이를 기본 경로로 사용하도록 프라이빗 서브넷 경로 테이블을 구성합니다.",
      "C": "NAT 인스턴스를 생성하고 EC2 인스턴스가 있는 동일한 서브넷에 배치합니다. NAT 인스턴스를 기본 경로로 사용하도록 프라이빗 서브넷 경로 테이블을 구성합니다.",
      "D": "인터넷 게이트웨이를 생성하고 VPC 에 연결합니다. NAT 인스턴스를 생성하고 EC2 인스턴스가 있는 동일한 서브넷에 배치합니다. 인터넷 게이트웨이를 기본 경로로 사용하도록 프라이빗 서브넷 경로 테이블을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ NAT 게이트웨이 — 관리형 아웃바운드 인터넷 액세스\n▸ 프라이빗 서브넷 — 인바운드 인터넷 직접 연결 불가\n▸ 아웃바운드 보안 — 프라이빗 인스턴스가 외부 요청 개시만 가능\n\n【정답 포인트】\n▸ \"아웃바운드 액세스 필요\" → NAT 게이트웨이 필수\n▸ NAT는 퍼블릭 서브넷 배치 → 자체 EIP 할당\n▸ 프라이빗 → NAT → 퍼블릭 → IGW → Internet\n\n【오답 체크】\n(A) IGW만 사용: 프라이빗 서브넷은 직접 라우팅 불가\n(C) NAT 인스턴스 동일 서브넷: 순환 라우팅, 자체 트래픽 처리 불가\n(D) IGW + NAT: 라우팅 우선순위 충돌, 복잡한 설정\n\n【시험 포인트】\n▸ 프라이빗 + 아웃바운드 → NAT(게이트웨이 또는 인스턴스)\n▸ NAT 게이트웨이가 Managed 솔루션으로 우선"
  },
  {
    "id": 252,
    "question": "솔루션 설계자는 고객 사례 파일을 저장할 시스템을 설계해야 합니다. 파일은 핵심 회사 자산이며 중요합니다. 파일 수는 시간이 지남에 따라 증가합니다. 파일은 Amazon EC2 인스턴스에서 실행되는 여러 애플리케이션 서버에서 동시에 액세스할 수 있어야 합니다. 솔루션에는 중복성이 내장되어 있어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon Elastic File System(Amazon EFS)",
      "B": "Amazon Elastic Block Store(Amazon EBS)",
      "C": "Amazon S3 Glacier Deep 아카이브(Amazon S3 Glacier Deep Archive)",
      "D": "AWS 백업(AWS Backup)"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ EFS — NFS 기반 공유 파일 시스템(다중 EC2 동시 접근)\n▸ 중복성 — 다중 AZ 자동 복제\n▸ 확장성 — 용량 자동 확장\n\n【정답 포인트】\n▸ \"다중 서버 동시 액세스\" → NFS 기반 공유스토리지\n▸ \"중복성 내장\" → EFS는 다중 AZ 복제 제공\n▸ \"파일 증가\" → 자동 확장으로 용량 관리 불필요\n\n【오답 체크】\n(B) EBS: 단일 EC2만 연결, 다중 인스턴스 공유 불가\n(C) S3 Glacier Deep Archive: 접근 지연 시간 많음(운영용 부적합)\n(D) AWS Backup: 백업 솔루션, 운영 파일시스템 아님\n\n【시험 포인트】\n▸ \"공유\" + \"동시 접근\" → EFS 필수\n▸ EBS vs EFS 차이 명확히 구분"
  },
  {
    "id": 253,
    "question": "솔루션 아키텍트가 Policy1 과 Policy2 라는 두 가지 IAM 정책을 만들었습니다. 두 정책 모두 IAM 그룹에 연결됩니다. 클라우드 엔지니어가 IAM 그룹에 IAM 사용자로 추가됩니다. 클라우드 엔지니어는 어떤 작업을 수행할 수 있습니까?",
    "options": {
      "A": "IAM 사용자 삭제",
      "B": "디렉토리 삭제",
      "C": "Amazon EC2 인스턴스 삭제",
      "D": "Amazon CloudWatch Logs에서 로그 삭제"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ IAM 정책 — 권한 정의 문서(명시되지 않으면 거부)\n▸ 그룹 기반 권한 — 사용자가 그룹 정책 상속\n▸ 최소 권한 — EC2 삭제만 명시 가능\n\n【정답 포인트】\n▸ Policy1 + Policy2 내용 분석 필수\n▸ 두 정책 모두에서 허용되는 작업 찾기\n▸ IAM 사용자/디렉토리 삭제 = 높은 권한(정책에 미포함 가능)\n\n【오답 체크】\n(A) IAM 사용자 삭제: 관리자 권한 필요(일반 정책에 미포함)\n(B) 디렉토리 삭제: 관리자 권한 필요\n(D) CloudWatch Logs 로그 삭제: 특정 권한 필요(정책에 미포함)\n\n【시험 포인트】\n▸ 정책 내용 추론: 문맥상 EC2 권한만 합리적\n▸ IAM 권한 계층(사용자 > 그룹 > 정책)"
  },
  {
    "id": 254,
    "question": "한 회사에서 최근 3계층 애플리케이션을 VPC로 마이그레이션하는 것을 검토하고 있습니다. 보안 팀은 최소 권한 원칙이 애플리케이션 계층 간의 Amazon EC2 보안 그룹 수신 및 송신 규칙에 적용되지 않는다는 사실을 발견했습니다. 솔루션 설계자는 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "인스턴스 ID를 소스 또는 대상으로 사용하여 보안 그룹 규칙을 생성합니다.",
      "B": "보안 그룹 ID를 소스 또는 대상으로 사용하여 보안 그룹 규칙을 생성합니다.",
      "C": "VPC CIDR 블록을 소스 또는 대상으로 사용하여 보안 그룹 규칙을 생성합니다.",
      "D": "서브넷 CIDR 블록을 소스 또는 대상으로 사용하여 보안 그룹 규칙을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 보안 그룹 ID — 그룹 내 인스턴스 집합 참조\n▸ 최소 권한 — 필요한 계층만 정확히 통신 허용\n▸ 계층 간 통신 — Web → App → DB 순방향만\n\n【정답 포인트】\n▸ 보안그룹으로 계층 정의 가능(Web SG, App SG, DB SG)\n▸ \"App SG에서 DB SG로의 통신만 허용\" → 인스턴스 개별 추가 불필요\n▸ 그룹 기반 규칙 = 동적/자동 확장 가능\n\n【오답 체크】\n(A) 인스턴스 ID: 개별 관리 필요, 스케일링 시 규칙 수정 필수\n(C) VPC CIDR: 전체 VPC 통신 허용(과도한 권한)\n(D) 서브넷 CIDR: 서브넷 전체 허용(계층 간 경계 무시)\n\n【시험 포인트】\n▸ 계층 설계 → 보안그룹으로 그룹화\n▸ SG ID 참조 = 최소권한 + 자동확장"
  },
  {
    "id": 255,
    "question": "회사에는 데이터베이스에 주문을 작성하고 지불을 처리하기 위해 서비스를 호출하는 전자 상거래 체크아웃 워크플로우가 있습니다. 사용자는 체크아웃 프로세스 중에 시간 초과를 경험하고 있습니다. 사용자가 체크아웃 양식을 다시 제출하면 동일한 원하는 거래에 대해 여러 고유 주문이 생성됩니다. 여러 주문 생성을 방지하기 위해 솔루션 설계자는 이 워크플로우를 어떻게 리팩터링해야 합니까?",
    "options": {
      "A": "Amazon Kinesis Data Firehose로 주문 메시지를 보내도록 웹 애플리케이션을 구성합니다. Kinesis Data Firehose 에서 메시지를 검색하고 주문을 처리하도록 결제 서비스를 설정합니다.",
      "B": "로깅된 애플리케이션 경로 요청을 기반으로 AWS Lambda 함수를 호출하기 위해 AWS CloudTrail 에서 규칙을 생성합니다. Lambda 를 사용하여 데이터베이스를 쿼리하고 결제 서비스를 호출하고 주문 정보를 전달합니다.",
      "C": "데이터베이스에 주문을 저장합니다. 주문 번호가 포함된 메시지를 Amazon Simple Notification Service(Amazon SNS)로 보냅니다. Amazon SNS를 폴링하고 메시지를 검색하고 주문을 처리하도록 결제 서비스를 설정합니다.",
      "D": "데이터베이스에 주문을 저장합니다. 주문 번호가 포함된 메시지를 Amazon Simple Queue Service(Amazon SQS) FIFO 대기열로 보냅니다. 메시지를 검색하고 주문을 처리하도록 결제 서비스를 설정합니다. 대기열에서 메시지를 삭제합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ FIFO 큐 — First-In-First-Out 순서 보장 + 중복 제거\n▸ 멱등성 — 동일 메시지 재처리해도 같은 결과\n▸ 비동기 처리 — 타임아웃 문제 해결\n\n【정답 포인트】\n▸ \"여러 주문 생성\" → 중복 제거 필수(FIFO의 deduplication)\n▸ SQS FIFO → 메시지 ID 기반 자동 중복 제거\n▸ \"메시지 삭제\" → 처리 완료 후 큐에서 제거(재처리 방지)\n\n【오답 체크】\n(A) Kinesis Firehose: 배치 전달, 개별 메시지 확인/재시도 어려움\n(B) CloudTrail: API 감사용, 주문처리 트리거 아님\n(C) SNS: Fan-out용, 순서보장/중복제거 없음(재전송 시 중복 발생)\n\n【시험 포인트】\n▸ 중복 방지 → SQS FIFO 필수\n▸ \"타임아웃 + 재제출 → 중복\" 패턴 인식"
  },
  {
    "id": 256,
    "question": "솔루션 설계자는 Amazon S3 버킷을 저장용으로 사용하여 문서 검토 애플리케이션을 구현하고 있습니다. 솔루션은 우발적인 문서 삭제를 방지하고 문서의 모든 버전을 사용할 수 있도록 보장해야 합니다. 사용자는 문서를 다운로드, 수정 및 업로드할 수 있어야 합니다. 이러한 요구 사항을 충족하려면 어떤 조합의 조치를 취해야 합니까? (2개 선택)",
    "options": {
      "A": "읽기 전용 버킷 ACL을 활성화합니다.",
      "B": "버킷에서 버전 관리를 활성화합니다.",
      "C": "IAM 정책을 버킷에 연결합니다.",
      "D": "버킷에서 MFA 삭제를 활성화합니다.",
      "E": "AWS KMS를 사용하여 버킷을 암호화합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ 버전 관리(Versioning) — 모든 객체 버전 유지\n▸ MFA 삭제 — 다단계 인증으로 삭제 보호\n▸ 실수 방지 — 실수적 삭제 복구 가능\n\n【정답 포인트】\n▸ \"모든 버전 사용 가능\" → 버전 관리 필수\n(B) ▸ \"우발적 삭제 방지\" → MFA 삭제\n(D) 로 추가 보호\n▸ 읽기/수정/업로드 필요 → 쓰기 권한은 유지\n\n【오답 체크】\n(A) 읽기 전용 ACL: 수정/업로드 불가능(요구사항 위배)\n(C) IAM 정책: 버킷 식별 역할(필수지만 삭제방지 아님)\n(E) KMS 암호화: 보안용(삭제방지 무관)\n\n【시험 포인트】\n▸ 버전관리 + MFA = 삭제 보호의 표준 조합\n▸ MFA 삭제는 루트 계정만 활성화 가능"
  },
  {
    "id": 257,
    "question": "회사는 AWS 계정의 모든 애플리케이션에서 Amazon EC2 Auto Scaling 이벤트를 보고하는 솔루션을 구축하고 있습니다. 회사는 Amazon S3 에 EC2 Auto Scaling 상태 데이터를 저장하기 위해 서버리스 솔루션을 사용해야 합니다. 그런 다음 회사는 Amazon S3 의 데이터를 사용하여 대시보드에서 거의 실시간 업데이트를 제공합니다. 솔루션은 EC2 인스턴스 시작 속도에 영향을 미치지 않아야 합니다. 회사는 이러한 요구 사항을 충족하기 위해 어떻게 데이터를 Amazon S3 로 이동해야 합니까?",
    "options": {
      "A": "Amazon CloudWatch 지표 스트림을 사용하여 EC2 Auto Scaling 상태 데이터를 Amazon Kinesis Data Firehose로 보냅니다. 데이터를 Amazon S3에 저장합니다.",
      "B": "Amazon EMR 클러스터를 시작하여 EC2 Auto Scaling 상태 데이터를 수집하고 데이터를 Amazon Kinesis Data Firehose로 보냅니다. 데이터를 Amazon S3에 저장합니다.",
      "C": "Amazon EventBridge 규칙을 생성하여 일정에 따라 AWS Lambda 함수를 호출합니다. EC2 Auto Scaling 상태 데이터를 Amazon S3로 직접 보내도록 Lambda 함수를 구성합니다.",
      "D": "EC2 인스턴스를 시작하는 동안 부트스트랩 스크립트를 사용하여 Amazon Kinesis 에이전트를 설치합니다. EC2 Auto Scaling 상태 데이터를 수집하고 데이터를 Amazon Kinesis Data Firehose로 보내도록 Kinesis 에이전트를 구성합니다. 데이터를 Amazon S3에 저장합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudWatch 지표 스트림 — CloudWatch 메트릭 → Kinesis로 실시간 스트리밍\n▸ Kinesis Firehose — S3로 자동 배치 전달(서버리스)\n▸ 비침해성 — 인스턴스 성능 영향 없음\n\n【정답 포인트】\n▸ \"서버리스\" → CloudWatch + Kinesis + Firehose 조합\n▸ \"인스턴스 성능 무영향\" → 에이전트 설치 불필요(D 제외)\n▸ \"거의 실시간\" → 스트림 기반 전달(배치 아님)\n\n【오답 체크】\n(B) EMR: 관리형 클러스터 운영 필요(서버리스 아님)\n(C) EventBridge + Lambda: 일정 기반(실시간 스트리밍 아님)\n(D) Kinesis 에이전트: 부트스트랩 설치(인스턴스 영향, 관리 필요)\n\n【시험 포인트】\n▸ 메트릭 실시간 수집 → CloudWatch 지표 스트림\n▸ \"성능 무영향\" → 에이전트/클라이언트 수정 불필요"
  },
  {
    "id": 258,
    "question": "회사에는 매시간 수백 개의 .csv 파일을 Amazon S3 버킷에 배치하는 애플리케이션이 있습니다. 파일 크기는 1GB 입니다. 파일이 업로드될 때마다 회사는 파일을 Apache Parquet 형식으로 변환하고 출력 파일을 S3 버킷에 배치해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": ".csv 파일을 다운로드하고 파일을 Parquet 형식으로 변환하고 출력 파일을 S3 버킷에 배치하는 AWS Lambda 함수를 생성합니다. 각 S3 PUT 이벤트에 대해 Lambda 함수를 호출합니다.",
      "B": "Apache Spark 작업을 생성하여 .csv 파일을 읽고, 파일을 Parquet 형식으로 변환하고, 출력 파일을 S3 버킷에 배치합니다. Spark 작업을 호출하기 위해 각 S3 PUT 이벤트에 대한 AWS Lambda 함수를 생성합니다.",
      "C": "애플리케이션이 .csv 파일을 배치하는 S3 버킷에 대한 AWS Glue 테이블과 AWS Glue 크롤러를 생성합니다. Amazon Athena를 주기적으로 사용하여 AWS Glue 테이블을 쿼리하고, 쿼리 결과를 Parquet 형식으로 변환하고, 출력 파일을 S3 버킷에 배치하도록 AWS Lambda 함수를 예약합니다.",
      "D": "AWS Glue 추출, 변환 및 로드(ETL) 작업을 생성하여 .csv 파일을 Parquet 형식으로 변환하고 출력 파일을 S3 버킷에 배치합니다. 각 S3 PUT 이벤트에 대한 AWS Lambda 함수를 생성하여 ETL 작업을 호출합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Glue ETL — 관리형 데이터 변환 서비스(Spark 기반)\n▸ S3 이벤트 트리거 — PUT 이벤트마다 자동 실행\n▸ 최소 오버헤드 — 서버리스 + 자동화\n\n【정답 포인트】\n▸ \"1GB 파일 변환\" → Lambda 15분 제한 문제(A 부적합)\n▸ Glue ETL → 분산처리로 대용량 파일 처리 가능\n▸ S3 이벤트 + Lambda 트리거 → 각 PUT마다 즉시 변환\n\n【오답 체크】\n(A) Lambda: 1GB 처리 → 15분 제한 초과, 메모리 부족\n(B) Spark 작업: 직접 생성/관리 필요(오버헤드 증가)\n(C) Glue 크롤러 + Athena: 주기 기반(실시간성 떨어짐)\n\n【시험 포인트】\n▸ 대용량 + 이벤트 기반 → Glue ETL + Lambda 트리거\n▸ Glue = 자동 확장, 최소 관리"
  },
  {
    "id": 259,
    "question": "회사는 Amazon RDS DB 인스턴스에서 실행되는 모든 데이터베이스에 대해 새로운 데이터 보존 정책을 구현하고 있습니다. 회사는 최소 2 년 동안 일일 백업을 유지해야 합니다. 백업은 일관되고 복원 가능해야 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 솔루션을 권장해야 합니까?",
    "options": {
      "A": "RDS 백업을 유지하기 위해 AWS Backup 에서 백업 볼트를 생성합니다. 일일 일정과 생성 후 2 년의 만료 기간으로 새 백업 계획을 생성합니다. 백업 계획에 RDS DB 인스턴스를 할당합니다.",
      "B": "일일 스냅샷을 위해 RDS DB 인스턴스의 백업 기간을 구성합니다. 각 RDS DB 인스턴스에 2 년의 스냅샷 보존 정책을 할당합니다. Amazon DLM(Amazon Data Lifecycle Manager)을 사용하여 스냅샷 삭제를 예약합니다.",
      "C": "만료 기간이 2 년인 Amazon CloudWatch Logs 에 자동으로 백업되도록 데이터베이스 트랜잭션 로그를 구성합니다.",
      "D": "AWS Database Migration Service(AWS DMS) 복제 작업을 구성합니다. 복제 인스턴스를 배포하고 변경 데이터 캡처(CDC) 작업을 구성하여 데이터베이스 변경 사항을 대상으로 Amazon S3 에 스트리밍합니다. 2 년 후 스냅샷을 삭제하도록 S3 수명 주기 정책을 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Backup — 중앙화된 백업 관리(크로스 서비스)\n▸ 백업 정책 — 일정 + 보존 기간 자동 관리\n▸ 복구 가능성 — AWS Backup 보증\n\n【정답 포인트】\n▸ \"중앙 집중식 관리\" → AWS Backup 필수(다중 DB)\n▸ \"일관되고 복원 가능\" → AWS Backup의 BCDR 보장\n▸ \"2년 보존\" → 백업 계획에서 자동 관리\n\n【오답 체크】\n(B) RDS 스냅샷 + DLM: 수동 관리 필요, 중앙화 어려움\n(C) CloudWatch Logs: 트랜잭션 로그(전체 백업 아님)\n(D) AWS DMS: 마이그레이션용, 백업 솔루션 아님\n\n【시험 포인트】\n▸ 다중 데이터베이스 백업 → AWS Backup 선택\n▸ 중앙 집중식 정책 관리 = 운영 효율성"
  },
  {
    "id": 260,
    "question": "회사의 규정 준수 팀은 파일 공유를 AWS로 이동해야 합니다. 공유는 Windows Server SMB 파일 공유에서 실행됩니다. 자체 관리형 온프레미스 Active Directory 는 파일 및 폴더에 대한 액세스를 제어합니다. 이 회사는 Windows File Server 용 Amazon FSx 를 솔루션의 일부로 사용하려고 합니다. 회사는 온프레미스 Active Directory 그룹이 AWS로 이동한 후 FSx for Windows File Server SMB 규정 준수 공유, 폴더 및 파일에 대한 액세스를 제한하는지 확인해야 합니다. 이 회사는 Windows 파일 서버 파일 시스템용 FSx를 만들었습니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Active Directory에 연결할 Active Directory 커넥터를 만듭니다. Active Directory 그룹을 IAM 그룹에 매핑하여 액세스를 제한합니다.",
      "B": "제한 태그 키와 규정 준수 태그 값을 사용하여 태그를 할당합니다. Active Directory 그룹을 IAM 그룹에 매핑하여 액세스를 제한합니다.",
      "C": "액세스를 제한하기 위해 FSx for Windows File Server 에 직접 연결된 IAM 서비스 연결 역할을 생성합니다.",
      "D": "파일 시스템을 Active Directory에 연결하여 액세스를 제한합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ FSx for Windows — Active Directory 통합 지원\n▸ NTFS 권한 — AD 사용자/그룹 기반 ACL\n▸ 일관된 권한 — 온프레미스와 동일한 정책\n\n【정답 포인트】\n▸ \"온프레미스 AD 그룹\" → FSx를 AD에 직접 연결\n▸ NTFS ACL → AD 권한 그대로 유지\n▸ \"액세스 제한\" → 파일/폴더 수준 NTFS 권한\n\n【오답 체크】\n(A) AD 커넥터 + IAM: IAM은 AWS 권한(NTFS 권한 아님)\n(B) 태그 + IAM: 태그 기반 접근제어(파일/폴더 ACL 아님)\n(C) IAM 서비스 연결 역할: AWS 서비스 권한(NTFS 관계 없음)\n\n【시험 포인트】\n▸ FSx + AD 연결 = AD 권한 자동 동기화\n▸ \"온프레미스 정책 유지\" → AD 연결 필수"
  },
  {
    "id": 261,
    "question": "한 회사가 최근 전 세계 고객을 대상으로 소매 웹 사이트를 배포한다고 발표했습니다. 웹 사이트는 Elastic Load Balancer 뒤에 있는 여러 Amazon EC2 인스턴스에서 실행됩니다. 인스턴스는 여러 가용 영역의 Auto Scaling 그룹에서 실행됩니다. 회사는 고객이 웹 사이트에 액세스하는 데 사용하는 장치에 따라 다양한 버전의 콘텐츠를 고객에게 제공하려고 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 작업 조합을 수행해야 합니까? (2개 선택)",
    "options": {
      "A": "여러 버전의 콘텐츠를 캐시하도록 Amazon CloudFront를 구성합니다.",
      "B": "트래픽을 다른 인스턴스로 전달하도록 Network Load Balancer 에서 호스트 헤더를 구성합니다.",
      "C": "User-Agent 헤더를 기반으로 사용자에게 특정 객체를 보내도록 Lambda@Edge 함수를 구성합니다.",
      "D": "AWS Global Accelerator 를 구성합니다. NLB(Network Load Balancer)에 요청을 전달합니다. 다른 EC2 인스턴스에 대한 호스트 기반 라우팅을 설정하도록 NLB 를 구성합니다.",
      "E": "AWS Global Accelerator 를 구성합니다. NLB(Network Load Balancer)에 요청을 전달합니다. 다른 EC2 인스턴스에 대한 경로 기반 라우팅을 설정하도록 NLB 를 구성합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ CloudFront — 엣지에서 콘텐츠 캐싱 + 다양한 객체 제공\n▸ Lambda@Edge — User-Agent 기반 콘텐츠 선택\n▸ 디바이스별 최적화 — PC/모바일/태블릿 다른 버전\n\n【정답 포인트】\n▸ \"장치별 다양한 버전\" → CloudFront 캐싱\n(A) ▸ User-Agent 감지 → Lambda@Edge\n(C) 로 분기\n▸ 전세계 배포 → CloudFront 엣지 네트워크\n\n【오답 체크】\n(B) NLB 호스트 헤더: HTTP/HTTPS 요청 필요(성능 최적화 아님)\n(D) \n(E) Global Accelerator: 레이턴시 최소화만 가능(콘텐츠 최적화 불가)\n\n【시험 포인트】\n▸ \"디바이스별 콘텐츠\" → CloudFront + Lambda@Edge\n▸ \"전 지역 배포\" → CDN 기반 해결책"
  },
  {
    "id": 262,
    "question": "회사에서 다중 계층 웹 애플리케이션에 Amazon ElastiCache 를 사용할 계획입니다. 솔루션 설계자는 ElastiCache 클러스터용 캐시 VPC와 애플리케이션의 Amazon EC2 인스턴스용 앱 VPC를 생성합니다. 두 VPC 모두 us-east-1 리전에 있습니다. 솔루션 설계자는 애플리케이션의 EC2 인스턴스에 ElastiCache 클러스터에 대한 액세스 권한을 제공하는 솔루션을 구현해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "VPC 간에 피어링 연결을 생성합니다. 두 VPC 모두에서 피어링 연결을 위한 라우팅 테이블 항목을 추가합니다. 애플리케이션의 보안 그룹에서 인바운드 연결을 허용하도록 ElastiCache 클러스터의 보안 그룹에 대한 인바운드 규칙을 구성합니다.",
      "B": "전송 VPC 를 생성합니다. 전송 VPC 를 통해 트래픽을 라우팅하도록 캐시 VPC 및 앱 VPC 의 VPC 라우팅 테이블을 업데이트합니다. 애플리케이션의 보안 그룹에서 인바운드 연결을 허용하도록 ElastiCache 클러스터의 보안 그룹에 대한 인바운드 규칙을 구성합니다.",
      "C": "VPC 간에 피어링 연결을 생성합니다. 두 VPC 모두에서 피어링 연결을 위한 라우팅 테이블 항목을 추가합니다. 애플리케이션의 보안 그룹에서 인바운드 연결을 허용하도록 피어링 연결의 보안 그룹에 대한 인바운드 규칙을 구성합니다.",
      "D": "전송 VPC 를 생성합니다. 전송 VPC 를 통해 트래픽을 라우팅하도록 캐시 VPC 및 앱 VPC 의 VPC 라우팅 테이블을 업데이트합니다. 애플리케이션의 보안 그룹에서 인바운드 연결을 허용하도록 Transit VPC의 보안 그룹에 대한 인바운드 규칙을 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ VPC 피어링 — 비용 없음, 직접 연결\n▸ 전송 VPC — 관리 비용 증가(구식 패턴)\n▸ 보안 그룹 규칙 — 피어링 연결 선택 필수\n\n【정답 포인트】\n▸ \"비용 효율\" → VPC 피어링(추가 비용 없음)\n▸ \"같은 리전\" → 피어링으로 충분(전송 VPC 불필요)\n▸ \"ElastiCache 보안 그룹\" 규칙 구성 필수\n\n【오답 체크】\n(B) \n(D) 전송 VPC: EC2 인스턴스 추가 비용, 관리 복잡\n(C) 피어링 연결 자체에 SG 설정 불가(잘못된 구성)\n\n【시험 포인트】\n▸ 2 VPC + 같은 리전 → VPC 피어링 우선\n▸ \"비용 효율\" = 최소한의 인프라 추가"
  },
  {
    "id": 263,
    "question": "회사에서 여러 마이크로서비스로 구성된 애플리케이션을 구축하고 있습니다. 이 회사는 컨테이너 기술을 사용하여 AWS 에 소프트웨어를 배포하기로 결정했습니다. 회사는 유지 관리 및 확장을 위한 지속적인 노력을 최소화하는 솔루션이 필요합니다. 회사는 추가 인프라를 관리할 수 없습니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 작업 조합을 수행해야 합니까? (2개 선택)",
    "options": {
      "A": "Amazon Elastic Container Service(Amazon ECS) 클러스터를 배포합니다.",
      "B": "여러 가용 영역에 걸쳐 있는 Amazon EC2 인스턴스에 Kubernetes 제어 평면을 배포합니다.",
      "C": "Amazon EC2 시작 유형으로 Amazon Elastic Container Service(Amazon ECS) 서비스를 배포합니다. 2보다 크거나 같은 원하는 태스크 번호 레벨을 지정하십시오.",
      "D": "Fargate 시작 유형으로 Amazon Elastic Container Service(Amazon ECS) 서비스를 배포합니다. 2보다 크거나 같은 원하는 태스크 번호 레벨을 지정하십시오.",
      "E": "여러 가용 영역에 걸쳐 있는 Amazon EC2 인스턴스에 Kubernetes 작업자 노드를 배포합니다. 각 마이크로 서비스에 대해 두 개 이상의 복제본을 지정하는 배포를 만듭니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ Fargate — 서버리스 컨테이너(EC2 인프라 관리 불필요)\n▸ ECS 클러스터 — 컨테이너 오케스트레이션\n▸ 최소 관리 — 서버 패칭/업데이트 자동\n\n【정답 포인트】\n▸ \"추가 인프라 관리 불가\" → Fargate 필수(A + D)\n▸ Fargate → 서버 관리 없음, 컨테이너만 배포\n▸ ECS 클러스터 → 컨테이너 오케스트레이션 제공\n\n【오답 체크】\n(B) \n(E) Kubernetes: 제어평면/워커노드 관리 필요(오버헤드)\n(C) EC2 시작 유형: EC2 패치/관리 필요\n\n【시험 포인트】\n▸ \"최소 관리\" = Fargate + ECS 클러스터\n▸ Kubernetes = 관리 오버헤드 큼"
  },
  {
    "id": 264,
    "question": "회사에는 Amazon Route 53 에서 전달하는 트래픽이 있는 10 개 이상의 Amazon EC2 인스턴스를 호스팅하는 웹 애플리케이션이 있습니다. 회사에서 애플리케이션을 검색하려고 할 때 때때로 시간 초과 오류가 발생합니다. 네트워킹 팀은 일부 DNS 쿼리가 비정상 인스턴스의 IP 주소를 반환하여 시간 초과 오류가 발생했음을 발견했습니다. 이러한 시간 초과 오류를 극복하기 위해 솔루션 설계자는 무엇을 구현해야 합니까?",
    "options": {
      "A": "각 EC2 인스턴스에 대해 Route 53 단순 라우팅 정책 레코드를 생성합니다. 상태 확인을 각 레코드와 연결합니다.",
      "B": "각 EC2 인스턴스에 대해 Route 53 장애 조치 라우팅 정책 레코드를 생성합니다. 상태 확인을 각 레코드와 연결합니다.",
      "C": "EC2 인스턴스를 원본으로 사용하여 Amazon CloudFront 배포를 생성합니다. 상태 확인을 EC2 인스턴스와 연결합니다.",
      "D": "EC2 인스턴스 앞에서 상태 확인을 통해 Application Load Balancer(ALB)를 생성합니다. 루트 53에서 ALB로 이동합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ ALB — 헬스체크 기반 자동 트래픽 라우팅\n▸ 단일 진입점 — DNS는 ALB만 반환\n▸ 자동 장애조치 — 정상 인스턴스만 선택\n\n【정답 포인트】\n▸ \"비정상 인스턴스 응답\" → 로드밸런서 레벨 필터링 필수\n▸ ALB + Route 53 → 정상 인스턴스만 DNS 반환\n▸ \"10개 이상 인스턴스\" → 중앙화된 헬스체크\n\n【오답 체크】\n(A) 단순 라우팅 + 상태확인: DNS 응답 필터링 안됨(비정상 반환 가능)\n(B) 장애조치 정책: Primary/Secondary만 지원(다중 인스턴스 부적합)\n(C) CloudFront: CDN 캐싱용(동적 헬스체크 아님)\n\n【시험 포인트】\n▸ \"다중 인스턴스 + 헬스체크\" → ALB 필수\n▸ Route 53 직접 상태확인 = 느림, ALB 선호"
  },
  {
    "id": 265,
    "question": "솔루션 설계자는 웹, 애플리케이션 및 데이터베이스 계층으로 구성된 고가용성 애플리케이션을 설계해야 합니다. HTTPS 콘텐츠 전송은 전송 시간을 최소화하면서 가능한 한 에지에 가까워야 합니다. 이러한 요구 사항을 충족하고 가장 안전한 솔루션은 무엇입니까?",
    "options": {
      "A": "퍼블릭 서브넷에서 여러 중복 Amazon EC2 인스턴스로 퍼블릭 Application Load Balancer(ALB)를 구성합니다. 퍼블릭 ALB 를 오리진으로 사용하여 HTTPS 콘텐츠를 제공하도록 Amazon CloudFront를 구성합니다.",
      "B": "프라이빗 서브넷에서 여러 중복 Amazon EC2 인스턴스로 퍼블릭 Application Load Balancer를 구성합니다. EC2 인스턴스를 오리진으로 사용하여 HTTPS 콘텐츠를 제공하도록 Amazon CloudFront를 구성합니다.",
      "C": "프라이빗 서브넷에서 여러 중복 Amazon EC2 인스턴스로 퍼블릭 ALB(Application Load Balancer)를 구성합니다. 퍼블릭 ALB 를 오리진으로 사용하여 HTTPS 콘텐츠를 제공하도록 Amazon CloudFront를 구성합니다.",
      "D": "퍼블릭 서브넷에서 여러 중복 Amazon EC2 인스턴스로 퍼블릭 Application Load Balancer를 구성합니다. EC2 인스턴스를 오리진으로 사용하여 HTTPS 콘텐츠를 제공하도록 Amazon CloudFront를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 프라이빗 서브넷 — 직접 인터넷 접근 불가\n▸ CloudFront 원본 — ALB(전결점 제공)\n▸ 최소 레이턴시 + 보안 — 엣지 캐싱 + 내부 통신\n\n【정답 포인트】\n▸ \"에지에 가까운 전송\" → CloudFront 캐싱\n▸ \"가장 안전\" → EC2를 프라이빗으로 유지\n▸ \"ALB 오리진\" → 원본 집중화, 개별 EC2 노출 방지\n\n【오답 체크】\n(A) 퍼블릭 서브넷: EC2 직접 노출(보안 취약)\n(B) 프라이빗 + EC2 오리진: CloudFront → 프라이빗 EC2 접근 불가\n(D) 퍼블릭 EC2: 보안 위험\n\n【시험 포인트】\n▸ \"안전성 + 성능\" → 프라이빗 + ALB + CloudFront\n▸ ALB가 원본 집중점 역할"
  },
  {
    "id": 266,
    "question": "회사에는 AWS 에서 실행되는 인기 있는 게임 플랫폼이 있습니다. 대기 시간은 사용자 경험에 영향을 미치고 일부 플레이어에게 부당한 이점을 제공할 수 있기 때문에 애플리케이션은 대기 시간에 민감합니다. 애플리케이션은 모든 AWS 리전에 배포됩니다. Application Load Balancer(ALB) 뒤에 구성된 Auto Scaling 그룹의 일부인 Amazon EC2 인스턴스에서 실행됩니다. 솔루션 설계자는 애플리케이션의 상태를 모니터링하고 트래픽을 정상 엔드포인트로 리디렉션하는 메커니즘을 구현해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS Global Accelerator 에서 액셀러레이터를 구성합니다. 애플리케이션이 청취하는 포트에 대한 리스너를 추가하고 각 리전의 리전 엔드포인트에 연결합니다. ALB 를 엔드포인트로 추가하십시오.",
      "B": "Amazon CloudFront 배포를 생성하고 ALB를 원본 서버로 지정합니다. 원본 캐시 헤더를 사용하도록 캐시 동작을 구성합니다. AWS Lambda 함수를 사용하여 트래픽을 최적화하십시오.",
      "C": "Amazon CloudFront 배포를 생성하고 Amazon S3를 원본 서버로 지정합니다. 원본 캐시 헤더를 사용하도록 캐시 동작을 구성합니다. AWS Lambda 함수를 사용하여 트래픽을 최적화하십시오.",
      "D": "애플리케이션의 데이터 저장소 역할을 하도록 Amazon DynamoDB 데이터베이스를 구성합니다. 애플리케이션 데이터를 호스팅하는 DynamoDB 의 인 메모리 캐시 역할을 할 DynamoDB Accelerator(DAX) 클러스터를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Global Accelerator — 다중 리전 레이턴시 최소화\n▸ 헬스체크 — 정상 엔드포인트로만 라우팅\n▸ Anycast IP — 가장 가까운 엣지에서 진입\n\n【정답 포인트】\n▸ \"모든 리전 배포\" → Global Accelerator 필수\n▸ \"대기 시간 민감\" → AWS 글로벌 네트워크 활용\n▸ \"상태 모니터링\" → ALB 헬스체크 통합\n\n【오답 체크】\n(B) CloudFront: 캐싱 최적화(동적 게임 트래픽 부적합)\n(C) S3 원본: 정적 콘텐츠용(동적 애플리케이션 불가)\n(D) DynamoDB + DAX: DB 최적화(리전 간 레이턴시 해결 불가)\n\n【시험 포인트】\n▸ \"다중 리전 + 레이턴시 민감\" → Global Accelerator\n▸ ALB 엔드포인트 구성으로 헬스체크 자동화"
  },
  {
    "id": 267,
    "question": "회사에 모바일 앱을 사용하는 백만 명의 사용자가 있습니다. 회사는 거의 실시간으로 데이터 사용량을 분석해야 합니다. 회사는 또한 거의 실시간으로 데이터를 암호화하고 추가 처리를 위해 데이터를 Apache Parquet 형식의 중앙 위치에 저장해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Kinesis 데이터 스트림을 생성하여 Amazon S3 에 데이터를 저장합니다. 데이터를 분석할 Amazon Kinesis Data Analytics 애플리케이션을 생성합니다. AWS Lambda 함수를 호출하여 데이터를 Kinesis Data Analytics 애플리케이션으로 보냅니다.",
      "B": "Amazon Kinesis 데이터 스트림을 생성하여 Amazon S3 에 데이터를 저장합니다. 데이터를 분석할 Amazon EMR 클러스터를 생성합니다. AWS Lambda 함수를 호출하여 데이터를 EMR 클러스터로 보냅니다.",
      "C": "Amazon Kinesis Data Firehose 전송 스트림을 생성하여 Amazon S3 에 데이터를 저장합니다. 데이터를 분석할 Amazon EMR 클러스터를 생성합니다.",
      "D": "Amazon Kinesis Data Firehose 전송 스트림을 생성하여 Amazon S3 에 데이터를 저장합니다. 데이터를 분석할 Amazon Kinesis Data Analytics 애플리케이션을 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Kinesis Data Firehose — 자동 데이터 전송 및 S3 저장 (운영 오버헤드 최소)\n▸ Kinesis Data Analytics — 실시간 SQL 분석\n▸ Parquet 형식 — Firehose가 자동 변환 지원\n\n【정답 포인트】\n▸ 최소 운영 오버헤드 → Firehose는 완전 관리형\n▸ 실시간 분석 + S3 저장 → Analytics+Firehose 조합\n▸ Lambda 제거 → 수동 코드 불필요\n\n【오답 체크】\n(A) 데이터 스트림은 자동 S3 전송 불가능, Lambda 필요\n(B) EMR은 관리 비용 증가, 실시간 분석 부적합\n(C) EMR은 오버엔지니어링, 분석만으로 부족\n\n【시험 포인트】\n패턴: 실시간+저장소+분석 → Firehose(저장)+Analytics(분석) 조합 선택 필수"
  },
  {
    "id": 268,
    "question": "게임 회사에는 점수를 표시하는 웹 애플리케이션이 있습니다. 애플리케이션은 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 Amazon RDS for MySQL 데이터베이스에 데이터를 저장합니다. 사용자는 데이터베이스 읽기 성능으로 인해 긴 지연과 중단을 경험하기 시작했습니다. 회사는 애플리케이션 아키텍처의 변경을 최소화하면서 사용자 경험을 개선하고자 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "데이터베이스 앞에서 Amazon ElastiCache를 사용하십시오.",
      "B": "애플리케이션과 데이터베이스 간에 RDS 프록시를 사용합니다.",
      "C": "애플리케이션을 EC2 인스턴스에서 AWS Lambda로 마이그레이션합니다.",
      "D": "MySQL 용 Amazon RDS 에서 Amazon DynamoDB 로 데이터베이스를 마이그레이션합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ RDS 프록시 — 연결 풀링으로 DB 부하 감소\n▸ 읽기 지연 — 연결 재사용으로 개선\n▸ 최소 아키텍처 변경 — 애플리케이션 수정 불필요\n\n【정답 포인트】\n▸ 연결 풀링 → 열린 연결 수 제한으로 DB 부하 분산\n▸ 성능 = 연결 관리 개선, 캐싱 X\n▸ 코드 변경 최소 → 프록시는 DB 앞에서 투명하게 작동\n\n【오답 체크】\n(A) 캐싱은 읽기만 개선, 근본 원인(연결 부하) 해결 안 함\n(C) Lambda는 과도한 아키텍처 변경\n(D) DynamoDB 마이그레이션은 비현실적, 아키텍처 변경 큼\n\n【시험 포인트】\n패턴: 연결 관련 성능 저하 → RDS 프록시는 항상 1순위 선택지"
  },
  {
    "id": 269,
    "question": "전자 상거래 회사는 Amazon RDS 기반 웹 애플리케이션의 성능 저하를 발견했습니다. 성능 저하의 원인은 비즈니스 분석가가 트리거하는 읽기 전용 SQL 쿼리 수가 증가했기 때문입니다. 솔루션 설계자는 기존 웹 애플리케이션에 대한 최소한의 변경으로 문제를 해결해야 합니다. 솔루션 설계자는 무엇을 추천해야 합니까?",
    "options": {
      "A": "데이터를 Amazon DynamoDB 로 내보내고 비즈니스 분석가가 쿼리를 실행하도록 합니다.",
      "B": "Amazon ElastiCache 에 데이터를 로드하고 비즈니스 분석가가 쿼리를 실행하도록 합니다.",
      "C": "기본 데이터베이스의 읽기 복제본을 생성하고 비즈니스 분석가가 쿼리를 실행하도록 합니다.",
      "D": "데이터를 Amazon Redshift 클러스터로 복사하고 비즈니스 분석가가 쿼리를 실행하도록 합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 읽기 복제본 — 쓰기는 주(Primary), 읽기는 복제본 분산\n▸ 읽기 전용 분석 쿼리 — 별도 인스턴스로 격리\n▸ 최소 변경 — 복제본은 자동 동기화\n\n【정답 포인트】\n▸ 웹앱과 분석 워크로드 분리 → DB 부하 분산\n▸ 비용 효율적 → 추가 인스턴스만으로 스케일\n▸ 즉시 구현 가능 → AWS 자동 관리\n\n【오답 체크】\n(A) DynamoDB는 비분석적 쿼리용, RDBMS 필요\n(B) ElastiCache는 캐싱용, 복잡한 분석 쿼리 부적합\n(D) Redshift는 높은 비용, 추가 ETL 작업 필요\n\n【시험 포인트】\n패턴: RDBMS 읽기 부하 분리 → 읽기 복제본은 항상 우선 선택"
  },
  {
    "id": 270,
    "question": "회사는 중앙 집중식 AWS 계정을 사용하여 다양한 Amazon S3 버킷에 로그 데이터를 저장합니다. 솔루션 설계자는 데이터가 S3 버킷에 업로드되기 전에 미사용 데이터가 암호화되었는지 확인해야 합니다. 또한 데이터는 전송 중에 암호화되어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "클라이언트 측 암호화를 사용하여 S3 버킷에 업로드되는 데이터를 암호화합니다.",
      "B": "서버 측 암호화를 사용하여 S3 버킷에 업로드되는 데이터를 암호화합니다.",
      "C": "S3 업로드를 위해 S3 관리형 암호화 키(SSE-S3)로 서버 측 암호화를 사용해야 하는 버킷 정책을 만듭니다.",
      "D": "기본 AWS Key Management Service(AWS KMS) 키를 사용하여 S3 버킷을 암호화하는 보안 옵션을 활성화합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 클라이언트 측 암호화 — 전송 전 클라이언트에서 암호화\n▸ 전송 중 암호화 — TLS/SSL으로 자동 보호\n▸ 미사용 데이터 암호화 — S3 도착 전 완료\n\n【정답 포인트】\n▸ 두 계층 보안 → 전송(TLS)+저장소(암호화된 상태 도착)\n▸ 클라이언트 제어 → 키 관리권이 회사에만 있음\n▸ S3 저장 시 이미 암호화됨 → 별도 S3 암호화 불필요\n\n【오답 체크】\n(B) 서버 측만 → 전송 중 평문 상태 가능\n(C) SSE-S3만 → 클라이언트-서버 전송 구간 취약\n(D) KMS는 S3 저장층만, 전송 구간 미보호\n\n【시험 포인트】\n패턴: \"전송 중+미사용\" 둘 다 언급 → 클라이언트 측 암호화 필수"
  },
  {
    "id": 271,
    "question": "솔루션 설계자는 원하는 Amazon EC2 용량에 도달하기 전에 야간 배치 처리 작업이 1시간 동안 자동으로 확장되는 것을 관찰합니다. 최대 용량은 '매일 밤 동일하고 배치 작업은 항상 오전 1 시에 시작됩니다. 솔루션 설계자는 원하는 EC2 용량에 빠르게 도달하고 배치 작업이 완료된 후 Auto Scaling 그룹이 축소될 수 있는 비용 효율적인 솔루션을 찾아야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Auto Scaling 그룹의 최소 용량을 늘립니다.",
      "B": "Auto Scaling 그룹의 최대 용량을 늘립니다.",
      "C": "원하는 컴퓨팅 수준으로 확장하도록 예약된 확장을 구성합니다.",
      "D": "각 조정 작업 중에 더 많은 EC2 인스턴스를 추가하도록 조정 정책을 변경합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Scheduled Scaling — 시간 기반 사전 스케일링\n▸ 오전 1시 고정 시작 → 예측 가능한 워크로드\n▸ 빠른 도달 → 반응형 스케일링은 지연\n\n【정답 포인트】\n▸ 예약된 확장 = 문제 전에 미리 준비\n▸ 오전 1시에 desired capacity를 최대값으로 설정\n▸ 배치 완료 후 축소 → 별도 스케줄 설정\n\n【오답 체크】\n(A) 최소값 증가 → 항상 비용 낭비\n(B) 최대값 증가 → CPU 기반 스케일도 1시간 지연\n(D) 조정 정책 변경 → 여전히 CPU 반응 지연 발생\n\n【시험 포인트】\n패턴: 예측 가능한 시간+spike → Scheduled Scaling이 유일한 솔루션"
  },
  {
    "id": 272,
    "question": "회사는 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 인스턴스 플릿에서 동적 웹 사이트를 제공합니다. 웹 사이트는 전 세계 고객에게 서비스를 제공하기 위해 여러 언어를 지원해야 합니다. 웹 사이트의 아키텍처는 us-west-1 지역에서 실행 중이며 세계의 다른 지역에 있는 사용자에 대해 높은 요청 지연 시간을 보이고 있습니다. 웹사이트는 사용자의 위치에 관계없이 빠르고 효율적으로 요청을 처리해야 합니다. 그러나 회사는 여러 지역에 걸쳐 기존 아키텍처를 다시 생성하기를 원하지 않습니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "기존 아키텍처를 Amazon S3 버킷에서 제공되는 웹 사이트로 교체하십시오. S3 버킷을 오리진으로 사용하여 Amazon CloudFront 배포를 구성합니다. Accept-Language 요청 헤더를 기반으로 캐시 동작 설정을 캐시로 설정합니다.",
      "B": "ALB를 오리진으로 사용하여 Amazon CloudFront 배포를 구성합니다. Accept-Language 요청 헤더를 기반으로 캐시 동작 설정을 캐시로 설정합니다.",
      "C": "ALB와 통합되는 Amazon API Gateway API를 생성합니다. HTTP 통합 유형을 사용하도록 API 를 구성합니다. Accept-Language 요청 헤더를 기반으로 API 캐시를 활성화하도록 API Gateway 단계를 설정합니다.",
      "D": "각 추가 지역에서 EC2 인스턴스를 시작하고 해당 지역의 캐시 서버 역할을 하도록 NGINX를 구성합니다. 지리적 위치 라우팅 정책을 사용하여 Amazon Route 53 레코드 세트 뒤에 모든 EC2 인스턴스와 ALB를 배치합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudFront — 글로벌 CDN, 엣지 로케이션에서 캐싱\n▸ Accept-Language — 언어별 버전 구분\n▸ 기존 아키텍처 유지 — 마이그레이션 최소화\n\n【정답 포인트】\n▸ ALB를 오리진 → 기존 EC2 아키텍처 그대로\n▸ CloudFront 에지 → 지역별 캐싱으로 지연 감소\n▸ 언어별 분기 → Cache Key에 Accept-Language 포함\n\n【오답 체크】\n(A) S3 마이그레이션 → 동적 콘텐츠 처리 불가\n(C) API Gateway → ALB 대체로 아키텍처 변경\n(D) Route 53 지리적 라우팅 → CDN보다 고지연, 관리 복잡\n\n【시험 포인트】\n패턴: 동적+글로벌+최소변경 → CloudFront(CDN)+기존 원본 조합"
  },
  {
    "id": 273,
    "question": "빠르게 성장하는 전자상거래 회사는 단일 AWS 리전에서 워크로드를 실행하고 있습니다. 솔루션 설계자는 다른 AWS 리전을 포함하는 재해 복구(DR) 전략을 생성해야 합니다. 회사는 대기 시간을 최소화하면서 DR 지역에서 데이터베이스를 최신 상태로 유지하기를 원합니다. DR 지역의 나머지 인프라는 감소된 용량으로 실행되어야 하며 필요한 경우 확장할 수 있어야 합니다. 가장 낮은 RTO(복구 시간 목표)로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "파일럿 라이트 배포와 함께 Amazon Aurora 글로벌 데이터베이스를 사용합니다.",
      "B": "웜 대기 배포와 함께 Amazon Aurora 글로벌 데이터베이스를 사용합니다.",
      "C": "파일럿 라이트 배포와 함께 Amazon RDS 다중 AZ DB 인스턴스를 사용합니다.",
      "D": "웜 대기 배포와 함께 Amazon RDS 다중 AZ DB 인스턴스를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Aurora 글로벌 DB — 읽기 전용 리전, RPO<1초\n▸ 웜 대기 — 감소 용량 실행, 빠른 활성화\n▸ 최소 지연 + 낮은 RTO → 이중 요구사항\n\n【정답 포인트】\n▸ Global DB = 최신 상태 자동 유지\n▸ 웜 대기 = 인프라 미리 준비되어 빠른 failover\n▸ 감소 용량 = 비용 절감하면서 가용\n\n【오답 체크】\n(A) 파일럿 라이트 = 인프라 없음, RTO 길어짐\n(C/D) RDS 다중AZ = 지역 간 복제 X, 단순 HA만\nRDS는 Global DB 불가, 높은 RPO\n\n【시험 포인트】\n패턴: 리전 간 DR+최저 RTO+DB 최신상태 → Aurora Global+웜 대기 필수"
  },
  {
    "id": 274,
    "question": "회사는 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 회사는 애플리케이션에 재해 복구(DR) 솔루션을 구현해야 합니다. DR 솔루션은 RTO(복구 시간 목표)가 4 시간 미만이어야 합니다. 또한 DR 솔루션은 정상 작동 중에 가능한 한 적은 AWS 리소스를 사용해야 합니다. 운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon 머신 이미지(AMI)를 생성하여 EC2 인스턴스를 백업합니다. AMI 를 보조 AWS 리전에 복사합니다. AWS Lambda 및 사용자 지정 스크립트를 사용하여 보조 리전에서 인프라 배포를 자동화합니다.",
      "B": "Amazon 머신 이미지(AMI)를 생성하여 EC2 인스턴스를 백업합니다. AMI 를 보조 AWS 리전에 복사합니다. AWS CloudFormation 을 사용하여 보조 리전에서 인프라 배포를 자동화합니다.",
      "C": "보조 AWS 리전에서 EC2 인스턴스를 시작합니다. 보조 리전의 EC2 인스턴스를 항상 활성 상태로 유지하십시오.",
      "D": "보조 가용 영역에서 EC2 인스턴스를 시작합니다. 보조 가용 영역의 EC2 인스턴스를 항상 활성 상태로 유지합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudFormation — IaC로 인프라 자동 배포\n▸ AMI + 템플릿 → 일관성 있는 복구\n▸ RTO 4시간 — CloudFormation은 수분 배포 가능\n\n【정답 포인트】\n▸ 정상 시 리소스 최소 → 모든 인프라 오프\n▸ 신속 배포 → CloudFormation 템플릿으로 4시간 내 가능\n▸ 운영 효율 → 수동 스크립트 보다 관리 간편\n\n【오답 체크】\n(A) Lambda+스크립트 → 오류 가능성 높음, 관리 복잡\n(C/D) 항상 활성 = 웜 대기, 불필요한 비용\nAZ는 리전 내 HA용, 지역 재해 복구 불가\n\n【시험 포인트】\n패턴: RTO<4시간+최소비용+자동화 → CloudFormation이 관리성 최고"
  },
  {
    "id": 275,
    "question": "회사에서 내부 브라우저 기반 애플리케이션을 실행합니다. 애플리케이션은 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 실행됩니다. 인스턴스는 여러 가용 영역에 걸쳐 Amazon EC2 Auto Scaling 그룹에서 실행됩니다. Auto Scaling 그룹은 근무 시간 동안 최대 20 개의 인스턴스로 확장되지만 밤에는 2 개의 인스턴스로 축소됩니다. 오전 중반까지는 잘 돌아가는데도 하루가 시작되면 애플리케이션이 매우 느리다고 직원들이 불평하고 있다. 직원 불만을 해결하고 비용을 최소화하기 위해 확장을 어떻게 변경해야 합니까?",
    "options": {
      "A": "사무실이 열리기 직전에 원하는 수용 인원을 20 명으로 설정하는 예약 작업을 구현합니다.",
      "B": "더 낮은 CPU 임계값에서 트리거되는 단계 조정 작업을 구현하고 휴지 기간을 줄입니다.",
      "C": "더 낮은 CPU 임계값에서 트리거되는 대상 추적 작업을 구현하고 휴지 기간을 줄입니다.",
      "D": "사무실이 열리기 직전에 최소 및 최대 수용 인원을 20 명으로 설정하는 예약 조치를 구현합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Target Tracking — 목표 메트릭(CPU 등) 기준 자동 조정\n▸ 휴지 기간 감소 → 더 빠른 반응\n▸ 낮은 임계값 → 초기 로드 감지 빠름\n\n【정답 포인트】\n▸ 오전 = 갑작스런 로드, Scheduled Scaling은 단계적\n▸ Target Tracking은 동적 반응 → CPU 낮아지면 즉시 확장\n▸ 휴지 기간 단축 → 수렴 시간 단축\n\n【오답 체크】\n(A) Scheduled = 고정 시간, 실제 로드 무관, 낭비 가능\n(B) Step Scaling = 단계적 증가, 초기 지연 여전함\n(D) Min=Max=20 = 항상 20개 인스턴스, 저녁 비용 낭비\n\n【시험 포인트】\n패턴: 급격한 로드+동적 대응+비용 효율 → Target Tracking이 우선"
  },
  {
    "id": 276,
    "question": "한 회사에 Auto Scaling 그룹의 여러 Amazon EC2 인스턴스에 배포된 다중 계층 애플리케이션이 있습니다. Amazon RDS for Oracle 인스턴스는 Oracle 관련 PL/SQL 기능을 사용하는 애플리케이션의 데이터 계층입니다. 애플리케이션에 대한 트래픽은 꾸준히 증가하고 있습니다. 이로 인해 EC2 인스턴스가 과부하되고 RDS 인스턴스의 스토리지가 부족해집니다. Auto Scaling 그룹에는 조정 지표가 없으며 최소 정상 인스턴스 수만 정의합니다. 이 회사는 트래픽이 안정되기 전에 꾸준하지만 예측할 수 없는 속도로 계속 증가할 것이라고 예측합니다. 증가된 트래픽에 대해 시스템이 자동으로 확장될 수 있도록 하려면 솔루션 설계자가 무엇을 해야 합니까? (2개 선택)",
    "options": {
      "A": "RDS for Oracle 인스턴스에서 스토리지 Auto Scaling을 구성합니다.",
      "B": "Auto Scaling 스토리지를 사용하려면 데이터베이스를 Amazon Aurora 로 마이그레이션하십시오.",
      "C": "사용 가능한 저장 공간 부족에 대해 Oracle 인스턴스용 RDS에서 경보를 구성합니다.",
      "D": "평균 CPU를 조정 지표로 사용하도록 Auto Scaling 그룹을 구성합니다.",
      "E": "평균 여유 메모리를 조정 지표로 사용하도록 Auto Scaling 그룹을 구성합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ 저장 공간 부족 — RDS Oracle 수동 확장 필요\n▸ 스토리지 Auto Scaling — 임계값 도달 시 자동 확장\n▸ EC2 과부하 — CPU 기반 Auto Scaling으로 해결\n\n【정답 포인트】\n▸\n(A) RDS 스토리지 자동 확장 = DB 부분 해결\n▸\n(D) CPU 메트릭 = EC2 확장으로 애플리케이션 부하 분산\n▸ 두 가지 모두 필요 = 쌍둥이 문제의 쌍둥이 솔루션\n\n【오답 체크】\n(B) Aurora 마이그레이션 = 과도한 아키텍처 변경\n(C) 경보만 = 알림일 뿐, 자동 확장 아님\n(E) 여유 메모리 = 일반적 메트릭 아님, CPU 선택이 표준\n\n【시험 포인트】\n패턴: \"두 가지 병목\" → \"두 가지 확장\" 조합 필수 선택"
  },
  {
    "id": 277,
    "question": "회사는 비디오 콘텐츠를 게시하고 모든 모바일 플랫폼에서 사용할 수 있도록 트랜스코딩하는 온라인 서비스를 제공합니다. 애플리케이션 아키텍처는 Amazon Elastic File System(Amazon EFS) Standard 를 사용하여 여러 Amazon EC2 Linux 인스턴스가 처리를 위해 비디오 콘텐츠에 액세스할 수 있도록 비디오를 수집하고 저장합니다. 시간이 지남에 따라 서비스의 인기가 높아짐에 따라 스토리지 비용이 너무 비싸졌습니다. 가장 비용 효율적인 스토리지 솔루션은 무엇입니까?",
    "options": {
      "A": "파일용 AWS Storage Gateway를 사용하여 동영상 콘텐츠를 저장하고 처리합니다.",
      "B": "볼륨에 AWS Storage Gateway를 사용하여 비디오 콘텐츠를 저장하고 처리합니다.",
      "C": "Amazon EFS를 사용하여 비디오 콘텐츠를 저장합니다. 처리가 완료되면 파일을 Amazon Elastic Block Store(Amazon EBS)로 전송합니다.",
      "D": "동영상 콘텐츠 저장을 위해 Amazon S3 를 사용합니다. 처리를 위해 파일을 서버에 연결된 Amazon Elastic Block Store(Amazon EBS) 볼륨으로 임시로 이동합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 — 저비용 객체 스토리지, 용량 무제한\n▸ EBS (임시) — 처리 중 고속 접근\n▸ 비용 효율 — EFS(높음) → S3(낮음) 전환\n\n【정답 포인트】\n▸ 저장 = S3 (GB당 $0.023), EFS 대비 1/10 비용\n▸ 처리 = EBS 임시 마운트 (처리 후 삭제)\n▸ 워크플로우 = S3→EC2(EBS)→S3 순환\n\n【오답 체크】\n(A) File Gateway = 온프레미스-AWS 브릿지용, 비용 증가\n(B) Volume Gateway = iSCSI/블록 스토리지, EFS 대체 아님\n(C) EFS→EBS = 추가 비용, EFS는 여전히 비쌈\n\n【시험 포인트】\n패턴: 영구 저장+대용량+비용 최소 → S3 저장소 + 임시 고속 스토리지"
  },
  {
    "id": 278,
    "question": "회사에서 계층적 구조 관계로 직원 데이터를 저장하는 애플리케이션을 만들고자 합니다. 회사는 직원 데이터에 대한 트래픽이 많은 쿼리에 대한 최소 대기 시간 응답이 필요하며 민감한 데이터를 보호해야 합니다. 회사는 또한 직원 데이터에 재무 정보가 있는 경우 월별 이메일 메시지를 받아야 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 수행해야 합니까? (2개 선택)",
    "options": {
      "A": "Amazon Redshift 를 사용하여 직원 데이터를 계층에 저장하십시오. 매월 Amazon S3 에 데이터를 언로드합니다.",
      "B": "Amazon DynamoDB 를 사용하여 직원 데이터를 계층에 저장합니다. 매월 데이터를 Amazon S3로 내보냅니다.",
      "C": "AWS 계정에 대해 Amazon Macie 를 구성합니다. Macie 를 Amazon EventBridge 와 통합하여 월별 이벤트를 AWS Lambda로 전송합니다.",
      "D": "Amazon Athena 를 사용하여 Amazon S3 에서 직원 데이터를 분석합니다. Athena 를 Amazon QuickSight 와 통합하여 분석 대시보드를 게시하고 사용자와 대시보드를 공유합니다.",
      "E": "AWS 계정에 대해 Amazon Macie 를 구성합니다. Macie 를 Amazon EventBridge 와 통합하여 Amazon Simple Notification Service(Amazon SNS) 구독을 통해 월별 알림을 보냅니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ DynamoDB — 낮은 지연, 계층 구조(파티션 키) 지원\n▸ Macie — 민감 데이터 감지 자동화\n▸ SNS — 메일 알림 발송\n\n【정답 포인트】\n▸\n(B) DynamoDB = 빠른 조회+계층 지원\n▸ S3 내보내기 = 규정준수 보관\n▸\n(E) Macie = 재무정보 자동 감지\n▸ EventBridge+SNS = 월별 알림 자동화\n\n【오답 체크】\n(A) Redshift = OLAP용, 낮은 지연 불가, 쿼리 중심\n(C) Macie+Lambda = 복잡한 파이프라인, Lambda 비용 증가\n(D) Athena+QuickSight = 분석용, 민감 데이터 자동 감지 X\n\n【시험 포인트】\n패턴: 낮은 지연+민감정보 탐지+자동 알림 → DynamoDB+Macie 조합"
  },
  {
    "id": 279,
    "question": "회사에 Amazon DynamoDB 테이블이 지원하는 애플리케이션이 있습니다. 회사의 규정 준수 요구 사항은 데이터베이스 백업을 매월 수행하고 6 개월 동안 사용할 수 있어야 하며 7년 동안 유지해야 한다고 지정합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "매월 1 일에 DynamoDB 테이블을 백업하는 AWS Backup 계획을 생성합니다. 6 개월 후 백업을 콜드 스토리지로 전환하는 수명 주기 정책을 지정합니다. 각 백업의 보존 기간을 7년으로 설정합니다.",
      "B": "매월 1 일에 DynamoDB 테이블의 DynamoDB 온디맨드 백업을 생성합니다. 6 개월 후 백업을 Amazon S3 Glacier Flexible Retrieval 로 전환합니다. 7 년보다 오래된 백업을 삭제하려면 S3 수명 주기 정책을 생성하십시오.",
      "C": "AWS SDK 를 사용하여 DynamoDB 테이블의 온디맨드 백업을 생성하는 스크립트를 개발합니다. 매월 1 일에 스크립트를 실행하는 Amazon EventBridge 규칙을 설정합니다. 6 개월 이상 된 DynamoDB 백업을 콜드 스토리지로 전환하고 7 년 이상 된 백업을 삭제하기 위해 매월 2일에 실행할 두 번째 스크립트를 생성합니다.",
      "D": "AWS CLI를 사용하여 DynamoDB 테이블의 온디맨드 백업을 생성합니다. Cron 표현식을 사용하여 매월 1 일에 명령을 실행하는 Amazon EventBridge 규칙을 설정합니다. 6 개월 후 백업을 콜드 스토리지로 전환하고 7년 후 백업을 삭제하도록 명령에 지정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Backup — 중앙화된 백업 관리, 정책 기반\n▸ 수명 주기 정책 — 자동 콜드 스토리지 전환\n▸ 보존 기간 설정 — 7년 만료 자동\n\n【정답 포인트】\n▸ AWS Backup 계획 = DynamoDB 네이티브 백업 자동화\n▸ 단일 콘솔 관리 = 정책 기반 자동 전환\n▸ 6개월 활성+콜드=규정준수+비용 최적\n\n【오답 체크】\n(B) S3 수명 주기 = 복잡한 관리, DynamoDB 백업은 S3 직접 불가\n(C/D) 수동 스크립트/CLI = 오류 가능성, 관리 복잡\nEventBridge+Lambda도 AWS Backup보다 복잡\n\n【시험 포인트】\n패턴: \"자동 스케줄+규정준수+비용 효율\" → AWS Backup이 최고의 솔루션"
  },
  {
    "id": 280,
    "question": "회사는 웹 사이트에서 Amazon CloudFront 를 사용하고 있습니다. 회사는 CloudFront 배포에서 로깅을 활성화했으며 로그는 회사의 Amazon S3 버킷 중 하나에 저장됩니다. 회사는 로그에 대한 고급 분석을 수행하고 시각화를 구축해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon Athena 에서 표준 SQL 쿼리를 사용하여 S3 버킷의 CloudFront 로그를 분석합니다. AWS Glue로 결과를 시각화합니다.",
      "B": "Amazon Athena 에서 표준 SQL 쿼리를 사용하여 S3 버킷의 CloudFront 로그를 분석합니다. Amazon QuickSight로 결과를 시각화합니다.",
      "C": "Amazon DynamoDB 에서 표준 SQL 쿼리를 사용하여 S3 버킷의 CloudFront 로그를 분석합니다. AWS Glue로 결과를 시각화합니다.",
      "D": "Amazon DynamoDB 에서 표준 SQL 쿼리를 사용하여 S3 버킷의 CloudFront 로그를 분석합니다. Amazon QuickSight로 결과를 시각화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Athena — S3 데이터 직접 SQL 쿼리 (추출 불필요)\n▸ QuickSight — BI 대시보드 시각화 도구\n▸ 고급 분석 = SQL + 시각화 조합\n\n【정답 포인트】\n▸ Athena = S3 로그 원본에서 즉시 분석\n▸ QuickSight = Athena 결과 연결 후 대시보드 생성\n▸ 표준 SQL = 관계형 쿼리 지원\n\n【오답 체크】\n(A) Glue = ETL 도구, 시각화 불가 (변환만)\n(C/D) DynamoDB = NoSQL, S3 로그 직접 쿼리 불가\nDynamoDB는 별도 로딩 필요, Athena 불필요\n\n【시험 포인트】\n패턴: S3 로그+고급분석+시각화 → Athena(분석)+QuickSight(대시보드)"
  },
  {
    "id": 281,
    "question": "회사는 PostgreSQL DB 인스턴스용 Amazon RDS 를 사용하여 웹 서버 플릿을 실행합니다. 일상적인 규정 준수 검사 후 회사는 모든 프로덕션 데이터베이스에 대해 1 초 미만의 복구 지점 목표(RPO)를 요구하는 표준을 설정합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "DB 인스턴스에 대해 다중 AZ 배포를 활성화합니다.",
      "B": "하나의 가용 영역에서 DB 인스턴스에 대해 Auto Scaling을 활성화합니다.",
      "C": "하나의 가용 영역에서 DB 인스턴스를 구성하고 별도의 가용 영역에서 여러 읽기 전용 복제본을 생성합니다.",
      "D": "하나의 가용 영역에서 DB 인스턴스를 구성하고 AWS DMS(AWS Database Migration Service) 변경 데이터 캡처(CDC) 작업을 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RPO<1초 — 데이터 손실 최소화\n▸ 다중 AZ — 동기 복제 (RPO=0)\n▸ 규정준수 표준 — 자동 장애조치\n\n【정답 포인트】\n▸ 다중 AZ = 동기 스탠바이 자동 페일오버\n▸ 동기 복제 = 쓰기 확인 전 대기, 데이터 손실 0\n▸ RPO<1초 충족 = 유일한 네이티브 솔루션\n\n【오답 체크】\n(B) Auto Scaling = 가용성, RPO 관련 없음\n(C) 읽기 복제본 = 비동기, RPO 수초 이상\n(D) DMS CDC = 실시간 아님, RPO 지연\n\n【시험 포인트】\n패턴: \"RPO<1초\" → RDS 다중 AZ 동기 복제가 유일한 답"
  },
  {
    "id": 282,
    "question": "회사는 VPC의 프라이빗 서브넷에 있는 Amazon EC2 인스턴스에 배포된 웹 애플리케이션을 실행합니다. 퍼블릭 서브넷에서 확장되는 ALB(Application Load Balancer)는 웹 트래픽을 EC2 인스턴스로 보냅니다. 회사는 ALB 에서 EC2 인스턴스로의 인바운드 트래픽을 제한하는 동시에 EC2 인스턴스의 프라이빗 서브넷 내부 또는 외부의 다른 소스로부터의 액세스를 방지하는 새로운 보안 조치를 구현하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "인터넷에서 EC2 인스턴스의 프라이빗 IP 주소로 트래픽을 보내도록 라우팅 테이블의 경로를 구성합니다.",
      "B": "ALB 의 보안 그룹에서 오는 트래픽만 허용하도록 EC2 인스턴스의 보안 그룹을 구성합니다.",
      "C": "EC2 인스턴스를 퍼블릭 서브넷으로 이동합니다. EC2 인스턴스에 탄력적 IP 주소 집합을 제공합니다.",
      "D": "모든 포트에서 모든 TCP 트래픽을 허용하도록 ALB에 대한 보안 그룹을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 보안 그룹 — 소스 IP/보안그룹 기반 필터링\n▸ ALB SG 참조 → ALB 트래픽만 허용\n▸ 다른 소스 차단 → EC2 SG에서 제어\n\n【정답 포인트】\n▸ EC2 SG 규칙: ALB SG ID → 수신 허용\n▸ 나머지 소스 = 암묵적 거부 (기본값)\n▸ 동작 원리 = SG 간 참조 (IP 범위 필요 X)\n\n【오답 체크】\n(A) 라우팅 테이블 = L3 레이어, 보안 그룹은 L4\nL3 라우팅만으로 보안 필터링 불가\n(C) 퍼블릭 이동 = 요구사항 변경, 보안 악화\n(D) ALB SG를 개방 = EC2 보안에 도움 안 됨\n\n【시험 포인트】\n패턴: \"ALB만 허용\" → 보안 그룹 ID 참조가 핵심"
  },
  {
    "id": 283,
    "question": "연구 회사는 시뮬레이션 응용 프로그램과 시각화 응용 프로그램으로 구동되는 실험을 실행합니다. 시뮬레이션 애플리케이션은 Linux 에서 실행되며 5 분마다 NFS 공유에 중간 데이터를 출력합니다. 시각화 응용 프로그램은 시뮬레이션 출력을 표시하고 SMB 파일 시스템이 필요한 Windows 데스크톱 응용 프로그램입니다. 회사는 두 개의 동기화된 파일 시스템을 유지 관리합니다. 이 전략은 데이터 중복 및 비효율적인 리소스 사용을 유발합니다. 회사는 애플리케이션에 코드를 변경하지 않고 애플리케이션을 AWS로 마이그레이션해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "두 애플리케이션을 모두 AWS Lambda 로 마이그레이션합니다. 애플리케이션 간에 데이터를 교환할 Amazon S3 버킷을 생성합니다.",
      "B": "두 애플리케이션을 모두 Amazon Elastic Container Service(Amazon ECS)로 마이그레이션합니다. 스토리지용 Amazon FSx 파일 게이트웨이를 구성합니다.",
      "C": "시뮬레이션 애플리케이션을 Linux Amazon EC2 인스턴스로 마이그레이션합니다. 시각화 애플리케이션을 Windows EC2 인스턴스로 마이그레이션합니다. 애플리케이션 간에 데이터를 교환하도록 Amazon Simple Queue Service(Amazon SQS)를 구성합니다.",
      "D": "시뮬레이션 애플리케이션을 Linux Amazon EC2 인스턴스로 마이그레이션합니다. 시각화 애플리케이션을 Windows EC2 인스턴스로 마이그레이션합니다. 스토리지용 NetApp ONTAP용 Amazon FSx를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ FSx for NetApp ONTAP — NFS+SMB 동시 지원\n▸ 코드 변경 없음 — 파일시스템 마이그레이션만\n▸ 데이터 중복 제거 — 단일 스토리지 (Linux/Windows 공유)\n\n【정답 포인트】\n▸ NetApp ONTAP = NFS(Linux)+SMB(Windows) 양쪽 프로토콜 지원\n▸ 5분 주기 데이터 공유 → 파일시스템 레벨 동기화\n▸ EC2는 변경 최소, 애플리케이션 코드 유지\n\n【오답 체크】\n(A) Lambda+S3 = 5분 주기 지연 불가, 배치 처리용\n(B) ECS+FSx Gateway = Gateway는 온프레미스 용도\n(C) SQS = 메시지 큐, 파일 공유 아님\n\n【시험 포인트】\n패턴: 혼합OS+파일공유+코드변경X → NetApp ONTAP 다중프로토콜"
  },
  {
    "id": 284,
    "question": "예산 계획의 일환으로 경영진은 사용자별로 나열된 AWS 청구 항목에 대한 보고서를 원합니다. 데이터는 부서 예산을 만드는 데 사용됩니다. 솔루션 설계자는 이 보고서 정보를 얻는 가장 효율적인 방법을 결정해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon Athena로 쿼리를 실행하여 보고서를 생성합니다.",
      "B": "Cost Explorer에서 보고서를 생성하고 보고서를 다운로드합니다.",
      "C": "청구 대시보드에서 청구서 세부 정보에 액세스하고 청구서를 다운로드합니다.",
      "D": "Amazon Simple Email Service(Amazon SES)로 알리도록 AWS 예산에서 비용 예산을 수정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Cost Explorer — 청구 데이터 분석 대시보드\n▸ 사용자별 보고서 — 필터링 기능 (태그/사용자)\n▸ 가장 효율적 = 기본 도구 사용\n\n【정답 포인트】\n▸ Cost Explorer = AWS 공식 청구 분석 도구\n▸ 필터링 & 그룹화 → 사용자/부서/서비스별\n▸ 다운로드 가능 → CSV/Excel 형식\n\n【오답 체크】\n(A) Athena = Billing 데이터 수동 설정 필요\nQuick analysis 아님, 추가 작업 필요\n(C) 청구 대시보드 = 요약 정보만, 세부 분석 약함\n(D) SES = 알림만, 보고서 작성 X\n\n【시험 포인트】\n패턴: \"효율적인 청구 보고\" → Cost Explorer가 기본 선택"
  },
  {
    "id": 285,
    "question": "회사는 Amazon S3 를 사용하여 정적 웹 사이트를 호스팅합니다. 회사는 웹 페이지에 연락처 양식을 추가하려고 합니다. 연락처 양식에는 사용자가 이름, 이메일 주소, 전화번호 및 사용자 메시지를 입력할 수 있는 동적 서버 측 구성 요소가 있습니다. 회사는 매월 100회 미만의 사이트 방문이 있을 것으로 예상합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic Container Service(Amazon ECS)에서 동적 문의 양식 페이지를 호스팅합니다. 타사 이메일 공급자에 연결하도록 Amazon Simple Email Service(Amazon SES)를 설정합니다.",
      "B": "Amazon Simple Email Service(Amazon SES)를 호출하는 AWS Lambda 백엔드로 Amazon API Gateway 엔드포인트를 생성합니다.",
      "C": "Amazon Lightsail 을 배포하여 정적 웹 페이지를 동적으로 변환합니다. 클라이언트 측 스크립팅을 사용하여 연락처 양식을 작성하십시오. 양식을 Amazon WorkMail과 통합합니다.",
      "D": "t2.micro Amazon EC2 인스턴스를 생성합니다. LAMP(Linux, Apache, MySQL, PHP/Perl/Python) 스택을 배포하여 웹 페이지를 호스팅합니다. 클라이언트 측 스크립팅을 사용하여 연락처 양식을 작성하십시오. 양식을 Amazon WorkMail과 통합합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ API Gateway + Lambda — 서버리스 백엔드\n▸ SES — 이메일 전송\n▸ 매월 100회 미만 — 요청 거의 없음, 고정 비용 불필요\n\n【정답 포인트】\n▸ Lambda = 요청 기반 비용 (100/월 = 거의 무료)\n▸ API Gateway = REST 엔드포인트\n▸ SES = 이메일 발송\n▸ S3 + Serverless = 최저 비용\n\n【오답 체크】\n(A) ECS = 컨테이너 관리 오버헤드, 최소 비용\n(C) Lightsail = 월정액 ($3.5~), 100요청 대비 낭비\n(D) EC2 t2.micro = 월 $10~, 연 $120+ 낭비\n\n【시험 포인트】\n패턴: 저트래픽+동적+최소비용 → Lambda+API Gateway 서버리스"
  },
  {
    "id": 286,
    "question": "회사에는 Amazon S3 앞의 Amazon CloudFront에서 호스팅되는 정적 웹 사이트가 있습니다. 정적 웹 사이트는 데이터베이스 백엔드를 사용합니다. 회사는 웹사이트가 웹사이트의 Git 리포지토리에서 이루어진 업데이트를 반영하지 않는다는 사실을 알게 되었습니다. 회사는 Git 리포지토리와 Amazon S3 간의 지속적 통합 및 지속적 전달(CI/CD) 파이프라인을 확인합니다. 회사는 webhook 이 제대로 구성되었는지, CI/CD 파이프라인이 성공적인 배포를 나타내는 메시지를 보내고 있는지 확인합니다. 솔루션 설계자는 웹 사이트에 업데이트를 표시하는 솔루션을 구현해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Application Load Balancer를 추가합니다.",
      "B": "Redis 또는 Memcached 용 Amazon ElastiCache 를 웹 애플리케이션의 데이터베이스 계층에 추가합니다.",
      "C": "CloudFront 캐시를 무효화합니다.",
      "D": "AWS Certificate Manager(ACM)를 사용하여 웹 사이트의 SSL 인증서를 확인합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudFront 캐시 무효화(Invalidation) — 배포된 콘텐츠의 캐시된 버전을 즉시 삭제하여 최신 버전 제공\n▸ CI/CD 파이프라인 정상 — S3 배포는 검증됨, 웹사이트 미반영 원인은 CloudFront 캐시\n▸ 엣지 로케이션 — 최종 사용자에게 캐시된 이전 콘텐츠 제공\n\n【정답 포인트】\n▸ 파이프라인 정상 작동 → S3 콘텐츠는 최신 상태\n▸ 웹사이트 미반영 → CloudFront가 이전 버전 서빙 중\n▸ 캐시 무효화로 CloudFront가 S3에서 최신 콘텐츠 재다운로드\n▸ 다음 요청부터 최신 버전 제공\n\n【오답 체크】\n(A) ALB는 로드밸런싱 기능만 제공, 캐시 문제 해결 불가\n(B) ElastiCache는 데이터베이스 캐싱용, CDN 캐시와 무관\n(D) SSL 인증서는 보안 설정, 콘텐츠 업데이트와 무관\n- 엔드 유저가 최신 콘텐츠 보지 못하는 증상\n▸ 원인 분석: 파이프라인은 정상, 캐시 검증 필요\n\n【시험 포인트】\n CloudFront 배포 후 콘텐츠 미반영 → 캐시 무효화\n 배포 자동화 시스템 + CDN → 캐시 관리 필수"
  },
  {
    "id": 287,
    "question": "회사에서 Windows 기반 애플리케이션을 온프레미스에서 AWS 클라우드로 마이그레이션하려고 합니다. 애플리케이션에는 애플리케이션 계층, 비즈니스 계층 및 Microsoft SQL Server 가 포함된 데이터베이스 계층의 세 가지 계층이 있습니다. 회사는 기본 백업 및 데이터 품질 서비스와 같은 SQL Server 의 특정 기능을 사용하려고 합니다. 또한 회사는 계층 간에 처리를 위해 파일을 공유해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 아키텍처를 어떻게 설계해야 합니까?",
    "options": {
      "A": "Amazon EC2 인스턴스에서 세 계층을 모두 호스팅합니다. 계층 간 파일 공유를 위해 Amazon FSx File Gateway를 사용합니다.",
      "B": "Amazon EC2 인스턴스에서 세 계층을 모두 호스팅합니다. 계층 간 파일 공유를 위해 Amazon FSx for Windows File Server를 사용하십시오.",
      "C": "Amazon EC2 인스턴스에서 애플리케이션 계층과 비즈니스 계층을 호스팅합니다. Amazon RDS 에서 데이터베이스 계층을 호스팅합니다. 계층 간 파일 공유를 위해 Amazon Elastic File System(Amazon EFS)을 사용합니다.",
      "D": "Amazon EC2 인스턴스에서 애플리케이션 계층과 비즈니스 계층을 호스팅합니다. Amazon RDS 에서 데이터베이스 계층을 호스팅합니다. 계층 간 파일 공유를 위해 프로비저닝된 IOPS SSD(io2) Amazon Elastic Block Store(Amazon EBS) 볼륨을 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Windows File Server — SMB 프로토콜 기반, Windows 애플리케이션과 네이티브 호환\n▸ SQL Server 특정 기능 — 라이선싱, Native Tools, 백업 유틸리티 완전 지원\n▸ FSx for Windows File Server — AWS 관리형 SMB 공유 스토리지\n\n【정답 포인트】\n▸ 세 계층 모두 EC2에서 운영 → SQL Server 라이선싱/기능 완전 제어\n▸ FSx for Windows File Server → Windows 네이티브 파일 공유, SMB/NFS 지원\n▸ Windows 애플리케이션과 완벽한 호환성\n▸ Multi-AZ, 자동 백업 지원\n\n【오답 체크】\n(A) FSx File Gateway는 온프레미스 환경용, AWS 내부 구조에 부적합\n(C) EFS는 Linux/Unix용, Windows에 최적화 아님, RDS는 특정 기능 손실\n(D) EBS는 블록 스토리지, 다중 계층 네트워크 파일 공유 설계 불가\n\n【시험 포인트】\n Windows 애플리케이션 → Windows 기반 스토리지 필수\n SQL Server 특정 기능 필요 → EC2 호스팅 필수"
  },
  {
    "id": 288,
    "question": "회사에서 Linux 기반 웹 서버 그룹을 AWS 로 마이그레이션하고 있습니다. 웹 서버는 일부 콘텐츠에 대해 공유 파일 저장소의 파일에 액세스해야 합니다. 회사는 신청서를 변경해서는 안됩니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "웹 서버에 대한 액세스 권한이 있는 Amazon S3 Standard 버킷을 생성합니다.",
      "B": "Amazon S3 버킷을 원본으로 사용하여 Amazon CloudFront 배포를 구성합니다.",
      "C": "Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성합니다. 모든 웹 서버에 EFS 파일 시스템을 마운트합니다.",
      "D": "범용 SSD(gp3) Amazon Elastic Block Store(Amazon EBS) 볼륨을 구성합니다. 모든 웹 서버에 EBS 볼륨을 마운트합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ EFS — NFS 프로토콜 기반 완전관리형 파일시스템, Linux 네이티브 지원\n▸ 애플리케이션 변경 금지 — 기존 파일 시스템 마운트 경로 유지 필수\n▸ NFS 마운트 — 표준 Linux 파일 시스템 인터페이스\n\n【정답 포인트】\n▸ Linux 웹 서버 → EFS를 표준 NFS 마운트포인트로 마운트 가능\n▸ 다중 EC2 인스턴스에서 동일 EFS 접근 → 애플리케이션 코드 수정 없음\n▸ EFS는 자동으로 확장, 성능 보장\n▸ 여러 AZ에서 동시 접근 가능\n\n【오답 체크】\n(A) S3는 객체 스토리지, NFS 마운트 불가능\n(B) CloudFront는 콘텐츠 배포용, 파일시스템 역할 불가\n(D) EBS는 단일 인스턴스용, 다중 웹 서버 공유 불가\n- /etc/fstab에 마운트포인트 추가로 부팅 시 자동 마운트\n▸ EFS는 여러 AZ에서 동시 접근 가능\n마운트 방식 선택: 표준 Linux mount 명령 사용\n▸ 자동 복구: EFS 가용성 99.99% SLA 보장\n▸ 성능 모드: General Purpose vs Max IO 선택\n\n【시험 포인트】\n 애플리케이션 변경 불가 → 파일시스템 인터페이스 필수\n Linux + 공유 스토리지 + 변경 불가 → EFS 유일한 선택"
  },
  {
    "id": 289,
    "question": "회사에는 동일한 AWS 계정에 있는 Amazon S3 버킷에 대한 읽기 액세스 권한이 필요한 AWS Lambda 함수가 있습니다. 가장 안전한 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 버킷에 대한 읽기 액세스 권한을 부여하는 S3 버킷 정책을 적용합니다.",
      "B": "Lambda 함수에 IAM 역할을 적용합니다. 역할에 IAM 정책을 적용하여 S3 버킷에 대한 읽기 액세스 권한을 부여합니다.",
      "C": "Lambda 함수의 코드에 액세스 키와 비밀 키를 내장하여 S3 버킷에 대한 읽기 액세스에 필요한 IAM 권한을 부여합니다.",
      "D": "Lambda 함수에 IAM 역할을 적용합니다. 역할에 IAM 정책을 적용하여 계정의 모든 S3 버킷에 대한 읽기 액세스 권한을 부여합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ IAM 역할(Execution Role) — 서비스가 임시 자격증명으로 작동\n▸ 최소 권한 원칙(Principle of Least Privilege) — 필요한 것만 부여\n▸ 자격증명 비노출 — 코드에 키 저장 금지\n\n【정답 포인트】\n▸ Lambda 실행 역할에 정책 부여 → 임시 자격증명 자동 관리\n▸ 특정 S3 버킷만 권한 → 보안 최강화, 자격증명 노출 없음\n▸ AWS에서 임시 토큰 자동 발급 및 순환\n▸ CloudTrail에서 감사 추적 가능\n\n【오답 체크】\n(A) 버킷 정책은 리소스 기반, Lambda 역할 부여 더 효율적\n(C) 코드에 액세스 키 내장 → 극도로 위험, 노출 가능성 높음, 회전 어려움\n(D) 모든 S3 버킷 권한 → 최소 권한 위반, 과도한 권한 부여\n- 임시 자격증명은 15분~1시간 자동 갱신\n▸ 감사 추적: 누가 어떤 리소스 접근했는지 기록\n정책 구조: Effect(Allow) + Action(s3:GetObject) + Resource(arn:aws:s3:::bucket/*)\n▸ 버킷 정책과의 차이: 역할은 Principal 명시 필요 없음\n▸ 리소스 기반 정책: 버킷 소유자가 제어\n\n【시험 포인트】\n AWS 서비스 + 권한 → IAM 역할이 표준 방식\n 가장 안전한 방식 → 역할 기반 + 특정 리소스 정책"
  },
  {
    "id": 290,
    "question": "회사는 여러 Amazon EC2 인스턴스에서 웹 애플리케이션을 호스팅합니다. EC2 인스턴스는 사용자 요구에 따라 확장되는 Auto Scaling 그룹에 있습니다. 회사는 장기적인 약정 없이 비용 절감을 최적화하기를 원합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자가 권장해야 하는 EC2 인스턴스 구매 옵션은 무엇입니까?",
    "options": {
      "A": "전용 인스턴스만 해당",
      "B": "온디맨드 인스턴스 전용",
      "C": "온디맨드 인스턴스와 스팟 인스턴스의 혼합",
      "D": "온디맨드 인스턴스와 예약 인스턴스의 혼합"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 스팟 인스턴스 — AWS 미사용 용량 활용, 온디맨드의 70~90% 할인\n▸ 장기 약정 없음 — 예약 인스턴스(1년/3년 약정) 제외 요구사항\n▸ Auto Scaling 혼합 — 온디맨드로 최소 용량, 스팟으로 추가 용량\n\n【정답 포인트】\n▸ 스팟 + 온디맨드 혼합 → 최고 비용 효율, 유연성 유지\n▸ Auto Scaling으로 스팟 인스턴스 중단 시 온디맨드로 자동 보충\n▸ 가용성 목표(SLA) 충족 + 비용 최소화\n▸ 약정 기간 없이 언제든 조정 가능\n\n【오답 체크】\n(A) 전용 인스턴스는 격리만, 비용 절감 효과 없음\n(B) 온디맨드 전용 → 최고 비용, 절감 기회 상실\n(D) 예약 인스턴스는 1~3년 약정 필요, 요구사항 위배\n- 비용 구조: 스팟 70~90% 할인 + 온디맨드 안정성\n▸ Auto Scaling 정책: 스팟 부족 시 온디맨드 자동 보충\n스팟 인스턴스 비용: 1시간 온디맨드 100원 → 스팟 10~30원\n▸ 가용 영역 분산: Capacity-optimized 배치로 중단 확률 최소화\n▸ 스팟 풀: 72가지 조합(인스턴스 타입 × AZ) 자동 선택\n\n【시험 포인트】\n 비용 최적화 + 약정 불가 → 스팟 인스턴스 활용\n Auto Scaling + 스팟 → 혼합 구매 전략이 정답"
  },
  {
    "id": 291,
    "question": "미디어 회사는 공개적으로 사용 가능한 스트리밍 비디오 콘텐츠에 Amazon CloudFront 를 사용합니다. 이 회사는 액세스 권한이 있는 사용자를 제어하여 Amazon S3에서 호스팅되는 비디오 콘텐츠를 보호하려고 합니다. 회사의 일부 사용자는 쿠키를 지원하지 않는 사용자 지정 HTTP 클라이언트를 사용하고 있습니다. 회사의 일부 사용자는 액세스에 사용하는 하드코딩된 URL을 변경할 수 없습니다. 사용자에게 미치는 영향을 최소화하면서 이러한 요구 사항을 충족하는 서비스 또는 방법은 무엇입니까? (2개 선택)",
    "options": {
      "A": "서명된 쿠키",
      "B": "서명된 URL",
      "C": "AWS 앱싱크",
      "D": "JSON 웹 토큰(JWT)",
      "E": "AWS Secrets Manager"
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ 서명된 URL — CloudFront 특정 객체, URL 변경 가능한 클라이언트용\n▸ 서명된 쿠키 — CloudFront 다중 객체, 하드코딩 URL 유지 가능\n▸ CloudFront Origin Access Control — S3 보호 기능\n\n【정답 포인트】\n▸\n(B) 서명된 URL → URL 변경 가능 사용자 그룹용, 동적 접근\n▸\n(A) 서명된 쿠키 → 하드코딩 URL 유지 사용자 그룹용, 쿠키 미지원 우회\n▸ 두 그룹 모두 수용 가능한 전략\n▸ 시간 제한 서명으로 추가 보안 확보\n\n【오답 체크】\n(C) AppSync는 GraphQL 서비스, CloudFront 콘텐츠 보호와 무관\n(D) JWT는 애플리케이션 토큰, CloudFront 서명 메커니즘 아님\n(E) Secrets Manager는 자격증명 관리, 콘텐츠 접근 제어 아님\n- 쿠키: 여러 요청에 걸쳐 유지, HTTP 헤더 자동 포함\n▸ URL: 각 요청마다 생성, 시간 제한(5~20분) 가능\n\n【시험 포인트】\n CloudFront 콘텐츠 보호 → Signed URL/Cookie 조합\n 다양한 클라이언트 지원 → 두 메커니즘 병행(AB 정답)"
  },
  {
    "id": 292,
    "question": "한 회사가 여러 소스에서 실시간 스트리밍 데이터를 수집할 새로운 데이터 플랫폼을 준비하고 있습니다. 회사는 Amazon S3 에 데이터를 쓰기 전에 데이터를 변환해야 합니다. 회사는 SQL을 사용하여 변환된 데이터를 쿼리할 수 있는 기능이 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (두 가지를 선택하세요.)",
    "options": {
      "A": "Amazon Kinesis Data Streams 를 사용하여 데이터를 스트리밍합니다. Amazon Kinesis Data Analytics를 사용하여 데이터를 변환합니다. Amazon Kinesis Data Firehose를 사용하여 Amazon S3 에 데이터를 씁니다. Amazon Athena 를 사용하여 Amazon S3 에서 변환된 데이터를 쿼리합니다.",
      "B": "Amazon Managed Streaming for Apache Kafka(Amazon MSK)를 사용하여 데이터를 스트리밍합니다. AWS Glue를 사용하여 데이터를 변환하고 데이터를 Amazon S3에 씁니다. Amazon Athena를 사용하여 Amazon S3에서 변환된 데이터를 쿼리합니다.",
      "C": "AWS Database Migration Service(AWS DMS)를 사용하여 데이터를 수집합니다. Amazon EMR 을 사용하여 데이터를 변환하고 Amazon S3 에 데이터를 씁니다. Amazon Athena 를 사용하여 Amazon S3에서 변환된 데이터를 쿼리합니다.",
      "D": "Amazon Managed Streaming for Apache Kafka(Amazon MSK)를 사용하여 데이터를 스트리밍합니다. Amazon Kinesis Data Analytics 를 사용하여 데이터를 변환하고 데이터를 Amazon S3 에 씁니다. Amazon RDS 쿼리 편집기를 사용하여 Amazon S3 에서 변환된 데이터를 쿼리합니다.",
      "E": "Amazon Kinesis Data Streams 를 사용하여 데이터를 스트리밍합니다. AWS Glue 를 사용하여 데이터를 변환합니다. Amazon Kinesis Data Firehose를 사용하여 Amazon S3에 데이터를 씁니다. Amazon RDS 쿼리 편집기를 사용하여 Amazon S3 에서 변환된 데이터를 쿼리합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ 실시간 스트리밍 변환 — Kinesis/MSK 수집 → 변환 엔진 → S3 적재\n▸ SQL 쿼리 — Athena는 S3 데이터 SQL 조회, RDS는 S3 직접 쿼리 불가\n▸ Kinesis Data Analytics — Kinesis용 변환, MSK는 미지원\n▸ AWS Glue — MSK, Kinesis 모두 지원\n\n【정답 포인트】\n▸\n(A) Kinesis 파이프라인: KDS 수집 → KDA 변환 → Firehose S3 적재 → Athena 조회\n▸\n(B) MSK 파이프라인: MSK 수집 → Glue 변환 → S3 적재 → Athena 조회\n▸ 두 파이프라인 모두 요구사항 충족\n▸ Athena로 S3 데이터 SQL 쿼리 가능\n\n【오답 체크】\n(C) DMS는 DB 마이그레이션용, 다중 소스 스트림 처리 아님\n(D) MSK + KDA 혼합 불가, RDS는 S3 직접 쿼리 불가\n(E) Kinesis + Glue 혼합, RDS는 S3 데이터 쿼리 불가\n\n【시험 포인트】\n 실시간 스트리밍 데이터 → Kinesis/MSK 선택\n S3 데이터 SQL 쿼리 → Athena 필수, RDS 아님"
  },
  {
    "id": 293,
    "question": "회사에는 수명이 다한 온프레미스 볼륨 백업 솔루션이 있습니다. 회사는 AWS 를 새로운 백업 솔루션의 일부로 사용하고 AWS 에 백업되는 동안 모든 데이터에 대한 로컬 액세스를 유지하려고 합니다. 회사는 AWS 에 백업된 데이터가 자동으로 안전하게 전송되기를 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS Snowball 을 사용하여 온프레미스 솔루션에서 Amazon S3 로 데이터를 마이그레이션합니다. 데이터에 대한 로컬 액세스를 제공하기 위해 Snowball S3 엔드포인트를 탑재하도록 온프레미스 시스템을 구성합니다.",
      "B": "AWS Snowball Edge 를 사용하여 온프레미스 솔루션에서 Amazon S3 로 데이터를 마이그레이션합니다. Snowball Edge 파일 인터페이스를 사용하여 온프레미스 시스템에 데이터에 대한 로컬 액세스를 제공합니다.",
      "C": "AWS Storage Gateway 를 사용하고 캐시된 볼륨 게이트웨이를 구성합니다. 온프레미스에서 Storage Gateway 소프트웨어 어플라이언스를 실행하고 로컬로 캐시할 데이터 비율을 구성합니다. 데이터에 대한 로컬 액세스를 제공하기 위해 게이트웨이 스토리지 볼륨을 마운트합니다.",
      "D": "AWS Storage Gateway 를 사용하고 저장된 볼륨 게이트웨이를 구성합니다. 온프레미스에서 Storage Gateway 소프트웨어 어플라이언스를 실행하고 게이트웨이 스토리지 볼륨을 온프레미스 스토리지에 매핑합니다. 데이터에 대한 로컬 액세스를 제공하기 위해 게이트웨이 스토리지 볼륨을 마운트합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Stored Volume Gateway — 모든 데이터 온프레미스 유지, AWS에 비동기 백업\n▸ Cached Volume Gateway — 자주 사용 데이터만 온프레미스, 나머지 AWS\n▸ 지속적 백업 — 모든 쓰기 비동기 복제\n\n【정답 포인트】\n▸ \"모든 데이터 로컬 액세스\" → Stored Volume 선택\n▸ \"AWS에 자동 안전 백업\" → 비동기 복제로 백업 자동화\n▸ 온프레미스 스토리지는 Primary, AWS는 Secondary\n▸ 지연 시간 최소화, 대역폭 효율적 사용\n\n【오답 체크】\n(A) \n(B) Snowball은 일회성 마이그레이션, 지속적 백업 솔루션 아님\n(C) Cached Volume → 자주 사용 데이터만 로컬, 모든 데이터 로컬 접근 불가\n- 온프레미스 스토리지는 활동 중인 마운트포인트 역할\n▸ AWS S3는 보조 백업 저장소\nStorage Gateway 에이전트: EC2/온프레미스 서버에 설치\n▸ 대역폭: AWS에 비동기 복제, 온프레미스 스토리지 I/O 영향 최소\n▸ 재난 복구: 온프레미스 손상 → AWS에서 복구 가능\n\n【시험 포인트】\n 로컬 액세스 필수 + AWS 자동 백업 → Stored Volume Gateway\n \"모든 데이터\" 키워드 → Cached가 아닌 Stored 선택"
  },
  {
    "id": 294,
    "question": "Amazon EC2 인스턴스에서 호스팅되는 애플리케이션은 Amazon S3 버킷에 액세스해야 합니다. 트래픽이 인터넷을 통과하면 안 됩니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 액세스를 어떻게 구성해야 합니까?",
    "options": {
      "A": "Amazon Route 53을 사용하여 프라이빗 호스팅 영역을 생성합니다.",
      "B": "VPC에서 Amazon S3에 대한 게이트웨이 VPC 엔드포인트를 설정합니다.",
      "C": "NAT 게이트웨이를 사용하여 S3 버킷에 액세스하도록 EC2 인스턴스를 구성합니다.",
      "D": "VPC와 S3 버킷 간에 AWS Site-to-Site VPN 연결을 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 게이트웨이 VPC 엔드포인트(S3/DynamoDB용) — VPC 내부에서 AWS 서비스 접근, 인터넷 우회\n▸ 라우팅 테이블 수정 — S3 트래픽을 엔드포인트로 자동 라우팅\n▸ 프라이빗 연결 — NAT 게이트웨이/IGW 사용 안 함\n\n【정답 포인트】\n▸ 게이트웨이 엔드포인트 설정 → VPC 내 프라이빗 연결\n▸ EC2에서 S3 액세스 시 인터넷 게이트웨이 우회\n▸ 라우팅 테이블 자동 업데이트\n▸ 추가 비용 없음, 높은 가용성\n\n【오답 체크】\n(A) Route 53은 DNS 호스팅, 접근 제어 기능 없음\n(C) NAT 게이트웨이 → 인터넷 게이트웨이를 통해 인터넷 경유, 요구사항 위배\n(D) Site-to-Site VPN은 온프레미스 연결용, 같은 계정 S3 접근에 불필요\n- 라우팅: EC2에서 S3 주소 검색 → 엔드포인트로 자동 라우팅\n▸ 비용: 추가 요금 없음, NAT 게이트웨이보다 저렴\n\n【시험 포인트】\n VPC 내 S3 접근 + 인터넷 우회 → Gateway VPC Endpoint\n S3, DynamoDB는 게이트웨이 엔드포인트 지원, 다른 서비스는 Interface 엔드포인트"
  },
  {
    "id": 295,
    "question": "전자상거래 회사는 테라바이트 규모의 고객 데이터를 AWS 클라우드에 저장합니다. 데이터에는 개인 식별 정보(PII)가 포함되어 있습니다. 회사는 세 가지 응용 프로그램에서 데이터를 사용하려고 합니다. 애플리케이션 중 하나만 PII 를 처리해야 합니다. 다른 두 애플리케이션이 데이터를 처리하기 전에 PII를 제거해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon DynamoDB 테이블에 데이터를 저장합니다. 각 애플리케이션이 요청하는 데이터를 가로채서 처리할 프록시 애플리케이션 계층을 생성합니다.",
      "B": "데이터를 Amazon S3 버킷에 저장합니다. 요청 애플리케이션에 데이터를 반환하기 전에 S3 객체 Lambda를 사용하여 데이터를 처리하고 변환합니다.",
      "C": "데이터를 처리하고 변환된 데이터를 3 개의 개별 Amazon S3 버킷에 저장하여 각 애플리케이션이 고유한 사용자 지정 데이터 세트를 갖도록 합니다. 각 애플리케이션이 해당 S3 버킷을 가리키도록 합니다.",
      "D": "데이터를 처리하고 변환된 데이터를 3개의 별도 Amazon DynamoDB 테이블에 저장하여 각 애플리케이션이 자체 사용자 지정 데이터 세트를 갖도록 합니다. 각 애플리케이션이 해당 DynamoDB 테이블을 가리키도록 합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 Object Lambda — 애플리케이션 코드 수정 없이 S3 객체 동적 변환\n▸ 최소 운영 오버헤드 — 사전 데이터 복제/처리 불필요\n▸ 요청 시점 필터링 — 각 애플리케이션별 맞춤형 응답\n\n【정답 포인트】\n▸ S3에 단일 원본 데이터 저장\n▸ Object Lambda로 요청 애플리케이션별 PII 제거 로직 실행\n▸ 응답만 필터링, 저장소 중복 및 수동 처리 제거\n▸ 운영 관리 최소화, 비용 효율적\n\n【오답 체크】\n(A) 프록시 계층 → 별도 애플리케이션 개발/운영 필요, 복잡도 증가\n(C) \n(D) 3개 버킷/테이블 → 데이터 중복, ETL 파이프라인 운영 오버헤드 증가\n- Lambda로 요청 시점에 동적으로 PII 필터링\n▸ 저장소 이중화 제거로 운영 복잡도 감소\nS3 Object Lambda 가격: 요청당 비용(GetObject 변환)\n▸ 메타데이터: 원본 객체는 변경 없음, 응답만 필터링\n▸ 성능: Lambda 실행 시간에 따른 P99 레이턴시 고려\n\n【시험 포인트】\n 요청 시점 데이터 변환 → S3 Object Lambda\n 최소 운영 오버헤드 → 기존 애플리케이션 코드 수정 없음"
  },
  {
    "id": 296,
    "question": "개발 팀이 개발 VPC 내부의 Amazon EC2 인스턴스에서 호스팅되는 새로운 애플리케이션을 출시했습니다. 솔루션 설계자는 동일한 계정에 새 VPC를 생성해야 합니다. 새 VPC는 개발 VPC 와 피어링됩니다. 개발용 VPC 의 VPC CIDR 블록은 192.168.0.0/24 입니다. 솔루션 설계자는 새 VPC 에 대한 CIDR 블록을 생성해야 합니다. CIDR 블록은 개발 VPC 에 대한 VPC 피어링 연결에 대해 유효해야 합니다. 이러한 요구 사항을 충족하는 가장 작은 CIDR 블록은 무엇입니까?",
    "options": {
      "A": "10.0.1.0/32",
      "B": "192.168.0.0/24",
      "C": "192.168.1.0/32",
      "D": "10.0.1.0/24"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ VPC 피어링 — 중복되지 않는 CIDR 블록 필수 조건\n▸ /32 vs /24 — /32는 호스트 1개, /24는 256개 주소\n▸ 최소 CIDR 블록 — VPC 실제 운영에 필요한 최소 크기\n\n【정답 포인트】\n▸ 개발 VPC: 192.168.0.0/24 (범위: 192.168.0.0~192.168.0.255)\n▸ 새 VPC CIDR은 겹치지 않아야 함\n▸ 10.0.1.0/24 → 10.0.1.0~10.0.1.255 (비겹침, 최소 /24)\n▸ /32는 호스트 1개만 지원, 실제 VPC 운영 불가능\n\n【오답 체크】\n(A) 10.0.1.0/32 → 호스트 1개만 지원, 실제 VPC용으로 부족\n(B) 192.168.0.0/24 → 개발 VPC와 중복, 피어링 불가능\n(C) 192.168.1.0/32 → 호스트 1개, 게다가 192.168.x.x 범위 사용\n- /32는 호스트 마스크, VPC로 사용하려면 최소 /28\n▸ VPC 피어링 테스트: 라우팅 테이블 확인 필수\n\n【시험 포인트】\n VPC 피어링 → CIDR 겹치기 금지\n 실용적 최소값 → /24 (256 주소)\n CIDR 겹침 판단 능력 필수"
  },
  {
    "id": 297,
    "question": "회사에서 5 개의 Amazon EC2 인스턴스에 애플리케이션을 배포합니다. ALB(Application Load Balancer)는 대상 그룹을 사용하여 인스턴스에 트래픽을 분산합니다. 각 인스턴스의 평균 CPU 사용량은 대부분 10% 미만이며 때때로 65%까지 급증합니다. 솔루션 설계자는 애플리케이션의 확장성을 자동화하는 솔루션을 구현해야 합니다. 솔루션은 아키텍처의 비용을 최적화하고 급증이 발생할 때 애플리케이션에 충분한 CPU 리소스가 있는지 확인해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "CPUUtilization 지표가 20% 미만일 때 ALARM 상태로 들어가는 Amazon CloudWatch 경보를 생성합니다. ALB 대상 그룹의 EC2 인스턴스 중 하나를 종료하기 위해 CloudWatch 경보가 호출하는 AWS Lambda 함수를 생성합니다.",
      "B": "EC2 Auto Scaling 그룹을 생성합니다. 기존 ALB 를 로드 밸런서로 선택하고 기존 대상 그룹을 대상 그룹으로 선택하십시오. ASGAverageCPUUtilization 지표를 기반으로 하는 대상 추적 조정 정책을 설정합니다. 최소 인스턴스를 2 로, 원하는 용량을 3 으로, 최대 인스턴스를 6 으로, 목표 값을 50%로 설정합니다. Auto Scaling 그룹에 EC2 인스턴스를 추가합니다.",
      "C": "EC2 Auto Scaling 그룹을 생성합니다. 기존 ALB 를 로드 밸런서로 선택하고 기존 대상 그룹을 대상 그룹으로 선택하십시오. 최소 인스턴스를 2 로, 원하는 용량을 3 으로, 최대 인스턴스를 6으로 설정합니다. Auto Scaling 그룹에 EC2 인스턴스를 추가합니다.",
      "D": "두 개의 Amazon CloudWatch 경보를 생성합니다. 평균 CPUUtilization 지표가 20% 미만일 때 ALARM 상태로 들어가도록 첫 번째 CloudWatch 경보를 구성합니다. 평균 CPUUtilization 지표가 50%를 초과하면 ALARM 상태로 들어가도록 두 번째 CloudWatch 경보를 구성합니다. 이메일 메시지를 보내기 위해 Amazon Simple Notification Service(Amazon SNS) 주제에 게시하도록 경보를 구성합니다. 메시지를 받은 후 로그인하여 실행 중인 EC2 인스턴스 수를 줄이거나 늘립니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Auto Scaling 대상 추적(Target Tracking) — 목표 지표 자동 유지\n▸ 최소/원하는/최대 인스턴스 — 비용 최적화와 성능 균형\n▸ ASGAverageCPUUtilization — Auto Scaling 그룹 평균 CPU\n\n【정답 포인트】\n▸ Auto Scaling 그룹 생성 → ALB 기존 리소스 활용\n▸ 대상 추적 정책(목표 CPU 50%) → 급증 시 자동 확장, 저사용시 축소\n▸ Min 2/Desired 3/Max 6 → 비용 최적화, 성능 보장\n▸ CPU 65% 급증 시 → 6개 인스턴스까지 자동 확장\n\n【오답 체크】\n(A) 수동 Lambda 해제 → 확장 자동화 아님, 복잡하고 비효율적\n(C) 정책 없이 고정 크기 → 급증 대응 불가, 비용 절감 기회 상실\n(D) 수동 SNS 알림 → 운영자 개입, 자동화 아님, 반응 시간 지연\n- 저사용시 최소 2개만 유지(비용 최적화)\n▸ 급증시 최대 6개까지 확장(성능 확보)\n\n【시험 포인트】\n 자동 확장 + 급증 대응 → Target Tracking Policy 필수\n 비용 최적화 → Auto Scaling 그룹의 Min/Max 설정"
  },
  {
    "id": 298,
    "question": "회사는 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 중요한 비즈니스 애플리케이션을 실행하고 있습니다. EC2 인스턴스는 Auto Scaling 그룹에서 실행되며 Amazon RDS DB 인스턴스에 액세스합니다. EC2 인스턴스와 DB 인스턴스가 모두 단일 가용 영역에 있기 때문에 설계가 운영 검토를 통과하지 못했습니다. 솔루션 설계자는 두 번째 가용 영역을 사용하도록 설계를 업데이트해야 합니다. 애플리케이션의 가용성을 높이는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 가용 영역에서 서브넷을 프로비저닝합니다. 두 가용 영역에 EC2 인스턴스를 배포하도록 Auto Scaling 그룹을 구성합니다. 각 네트워크에 대한 연결로 DB 인스턴스를 구성합니다.",
      "B": "두 가용 영역에 걸쳐 확장되는 두 개의 서브넷을 프로비저닝합니다. 두 가용 영역에 EC2 인스턴스를 배포하도록 Auto Scaling 그룹을 구성합니다. 각 네트워크에 대한 연결로 DB 인스턴스를 구성합니다.",
      "C": "각 가용 영역에서 서브넷을 프로비저닝합니다. 두 가용 영역에 EC2 인스턴스를 배포하도록 Auto Scaling 그룹을 구성합니다. 다중 AZ 배포를 위해 DB 인스턴스를 구성합니다.",
      "D": "두 가용 영역에 걸쳐 확장되는 서브넷을 프로비저닝합니다. 두 가용 영역에 EC2 인스턴스를 배포하도록 Auto Scaling 그룹을 구성합니다. 다중 AZ 배포를 위해 DB 인스턴스를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 다중 AZ(RDS) — Primary-Standby 동기 복제, 자동 장애조치\n▸ 서브넷 — 각 AZ별 1개씩만 존재(서브넷은 단일 AZ 내에서만 존재)\n▸ Auto Scaling 분산 배포 — 여러 AZ에서 자동으로 균형 유지\n\n【정답 포인트】\n▸ EC2: 각 AZ 서브넷에서 Auto Scaling → 분산 배포\n▸ RDS: Multi-AZ 활성화 → Primary AZ 다운 시 자동 장애조치\n▸ 아키텍처 고가용성 완성\n▸ 데이터 손실 없음, 자동 복구\n\n【오답 체크】\n(A) DB 각 네트워크 연결 → 수동 장애조치, Multi-AZ 이점 없음\n(B) 서브넷이 \"2개 AZ에 걸쳐\" → AWS VPC 설계 위반\n(D) 서브넷 설계 오류 + DB 단순 연결 → 가용성 보장 불충분\n- 서브넷이 AZ 경계를 넘을 수 없음(AWS 제약사항)\n▸ Multi-AZ RDS: Primary 다운 시 Standby로 자동 승격(RPO=0)\nMulti-AZ 구성: Primary(읽기/쓰기) + Standby(읽기전용 대기)\n▸ 동기 복제: 쓰기 ACK 전 Standby에 복제(데이터 손실 0)\n▸ 자동 네임: DNS 자동 변경으로 애플리케이션 코드 수정 불필요\n\n【시험 포인트】\n 고가용성 RDS → Multi-AZ 필수\n 서브넷은 단일 AZ 속함, 각 AZ당 1개씩 구성"
  },
  {
    "id": 299,
    "question": "연구소는 약 8TB 의 데이터를 처리해야 합니다. 실험실에는 스토리지 하위 시스템에 대해 1 밀리초 미만의 대기 시간과 최소 6GBps 의 처리량이 필요합니다. Amazon Linux 를 실행하는 수백 개의 Amazon EC2 인스턴스가 데이터를 배포하고 처리합니다. 성능 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "NetApp ONTAP 파일 시스템용 Amazon FSx 를 생성합니다. 각 볼륨의 계층화 정책을 ALL 로 설정했습니다. 원시 데이터를 파일 시스템으로 가져옵니다. EC2 인스턴스에 fila 시스템을 탑재합니다.",
      "B": "원시 데이터를 저장할 Amazon S3 버킷을 생성합니다. 영구 SSD 스토리지를 사용하는 Amazon FSx for Lustre 파일 시스템을 생성합니다. Amazon S3 에서 데이터를 가져오고 내보내는 옵션을 선택합니다. EC2 인스턴스에 파일 시스템을 탑재합니다.",
      "C": "원시 데이터를 저장할 Amazon S3 버킷을 생성합니다. 영구 HDD 스토리지를 사용하는 Amazon FSx for Lustre 파일 시스템을 생성합니다. Amazon S3 에서 데이터를 가져오고 내보내는 옵션을 선택합니다. EC2 인스턴스에 파일 시스템을 탑재합니다.",
      "D": "NetApp ONTAP 파일 시스템용 Amazon FSx 를 생성합니다. 각 볼륨의 계층화 정책을 NONE 으로 설정합니다. 원시 데이터를 파일 시스템으로 가져옵니다. EC2 인스턴스에 파일 시스템을 탑재합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ FSx for Lustre — HPC용 고성능 병렬 파일시스템, <1ms 지연시간\n▸ 영구 SSD — 6GBps 처리량 충족, HDD는 처리량 저하\n▸ S3 연동 — 데이터 로드/언로드 자동화\n\n【정답 포인트】\n▸ 1ms 이하 대기시간 + 6GBps 처리량 → Lustre SSD만 충족\n▸ S3와 연동 → 데이터 로드/언로드 자동화\n▸ 수백 EC2 병렬 접근 → Lustre 높은 동시성 지원\n▸ POSIX 호환 파일시스템 → Linux 애플리케이션 완벽 호환\n\n【오답 체크】\n(A) FSx ONTAP → NFS, 지연시간/처리량 요구사항 미달\n(C) Lustre HDD → SSD 대비 처리량 저하, 6GBps 미충족\n(D) ONTAP (A와 동일) → HPC 성능 아님\nLustre 용량 확장: 초기 용량 정하고 자동 확장(최대 500GB+)\n▸ 비용 구조: 용량(GB/월) + 처리량(MB/s/월) 조합 요금\n▸ 임시 스토리지: 계산 완료 후 S3로 내보내고 삭제\n\n【시험 포인트】\n HPC/고성능 컴퓨팅 → FSx for Lustre\n <1ms 지연 + 높은 처리량 → Lustre SSD 선택 필수"
  },
  {
    "id": 300,
    "question": "회사는 하드웨어 용량 제약으로 인해 온프레미스 데이터 센터에서 AWS 클라우드로 레거시 애플리케이션을 마이그레이션해야 합니다. 응용 프로그램은 하루 24 시간, 주 7 일 실행됩니다. 애플리케이션의 데이터베이스 스토리지는 시간이 지남에 따라 계속 증가합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": {
      "A": "애플리케이션 계층을 Amazon EC2 스팟 인스턴스로 마이그레이션합니다. 데이터 스토리지 계층을 Amazon S3로 마이그레이션합니다.",
      "B": "애플리케이션 계층을 Amazon EC2 예약 인스턴스로 마이그레이션합니다. 데이터 스토리지 계층을 Amazon RDS 온디맨드 인스턴스로 마이그레이션합니다.",
      "C": "애플리케이션 계층을 Amazon EC2 예약 인스턴스로 마이그레이션합니다. 데이터 스토리지 계층을 Amazon Aurora 예약 인스턴스로 마이그레이션합니다.",
      "D": "애플리케이션 계층을 Amazon EC2 온디맨드 인스턴스로 마이그레이션합니다. 데이터 스토리지 계층을 Amazon RDS 예약 인스턴스로 마이그레이션합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 예약 인스턴스 — 1~3년 약정, 온디맨드 대비 72% 할인\n▸ 24/7 지속 실행 → 예약 인스턴스 최적화\n▸ Aurora — MySQL/PostgreSQL 호환, RDS 보다 비용 효율적\n\n【정답 포인트】\n▸ 지속 운영 애플리케이션 → EC2 예약 인스턴스\n▸ 스토리지 계속 증가 → Aurora 자동 확장, RDS는 용량 사전 결정 필요\n▸ Aurora 예약 인스턴스 → 비용 최적화\n▸ 예약 인스턴스로 고정 비용 절감, Aurora로 가변 비용 절감\n\n【오답 체크】\n(A) Spot 인스턴스는 중단 가능, 24/7 미션크리티컬 부적합\n(B) RDS 온디맨드 → 예약 대비 비용 높음\n(D) EC2 온디맨드 → 예약 대비 비용 높음\n- 예약 인스턴스: 선결제로 최대 할인(1년 33%, 3년 60%)\n▸ Aurora: 스토리지 자동 확장으로 용량 계획 불필요\nAurora 비용: 온디맨드 대비 40% 저렴, 스토리지 자동 청구\n▸ Read Replica: 최대 15개 가능, 리드 전용 자동 확장\n▸ 백업: 35일 보존, PITR(Point-in-Time Restore) 지원\n\n【시험 포인트】\n 24/7 지속 운영 → 예약 인스턴스\n 스토리지 증가 → Aurora(자동 확장) vs RDS(용량 계획)"
  },
  {
    "id": 301,
    "question": "대학 연구소는 온프레미스 Windows 파일 서버에서 Amazon FSx for Windows File Server로 30TB 의 데이터를 마이그레이션해야 합니다. 실험실에는 대학의 다른 많은 부서에서 공유하는 1Gbps 네트워크 링크가 있습니다. 실험실은 데이터 전송 성능을 최대화할 데이터 마이그레이션 서비스를 구현하려고 합니다. 그러나 실험실은 서비스가 다른 부서에 미치는 영향을 최소화하기 위해 사용하는 대역폭의 양을 제어할 수 있어야 합니다. 데이터 마이그레이션은 향후 5 일 이내에 이루어져야 합니다. 이러한 요구 사항을 충족하는 AWS 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS 스노우콘",
      "B": "Amazon FSx 파일 게이트웨이",
      "C": "AWS 데이터싱크",
      "D": "AWS Transfer Family"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ DataSync — 네트워크 기반 데이터 전송, 대역폭 제어 기능(Throttling)\n▸ 대역폭 조절 → 다른 부서 영향 최소화\n▸ 5일 기간 → 30TB 필요 처리량 가능\n\n【정답 포인트】\n▸ DataSync는 대역폭 제어(throttling) 지원\n▸ Windows File Server → FSx for Windows 마이그레이션 최적화\n▸ 네트워크 기반 → 5일 내 가능 (30TB/5일 = 6TB/일 필요)\n▸ 자동 재시도, 데이터 검증 기능\n\n【오답 체크】\n(A) Snowcone → 물리 기기, 5일 배송 시간 포함, 비현실적\n(B) FSx File Gateway → 온프레미스 캐싱용, 마이그레이션 도구 아님\n(D) Transfer Family → SFTP/FTP 전송, 대역폭 제어 기능 약함\n- 일반 WAN: 대역폭 공유로 경쟁(네트워크 혼잡 가능)\n▸ DataSync Throttling: 예약 가능한 대역폭량 설정(Mbps)\n\n【시험 포인트】\n 대역폭 제어 필요 → DataSync만 지원\n 네트워크 기반 마이그레이션 + 스케줄링 → DataSync 최선"
  },
  {
    "id": 302,
    "question": "회사에서 사용자가 모바일 장치에서 슬로우 모션 비디오 클립을 스트리밍할 수 있는 모바일 앱을 만들고자 합니다. 현재 이 앱은 비디오 클립을 캡처하고 원시 형식의 비디오 클립을 Amazon S3 버킷에 업로드합니다. 앱은 S3 버킷에서 직접 이러한 비디오 클립을 검색합니다. 그러나 비디오는 원시 형식이 큽니다. 사용자는 모바일 장치에서 버퍼링 및 재생 문제를 겪고 있습니다. 회사는 운영 오버헤드를 최소화하면서 앱의 성능과 확장성을 극대화하는 솔루션을 구현하고자 합니다. 이러한 요구 사항을 충족하는 솔루션 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "콘텐츠 전송 및 캐싱을 위해 Amazon CloudFront를 배포합니다.",
      "B": "AWS DataSync 를 사용하여 다른 S3 버킷의 AW'S 지역 전체에 비디오 파일을 복제합니다.",
      "C": "Amazon Elastic Transcoder 를 사용하여 비디오 파일을 보다 적절한 형식으로 변환합니다.",
      "D": "콘텐츠 전송 및 캐싱을 위해 로컬 영역에 Amazon EC2 인스턴스의 Auto Sealing 그룹을 배포합니다.",
      "E": "Amazon EC2 인스턴스의 Auto Scaling 그룹을 배포하여 비디오 파일을 보다 적절한 형식으로 변환합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ CloudFront — 글로벌 CDN, 엣지 로케이션 캐싱, 대역폭 비용 절감\n▸ Elastic Transcoder — 비디오 형식 변환, 파일 크기 최적화\n▸ 운영 오버헤드 최소화 — 관리형 서비스\n\n【정답 포인트】\n▸\n(A) CloudFront → 원시 비디오 배포 시간 단축, 글로벌 캐싱\n▸\n(C) Transcoder → 원시 형식 → 모바일 최적화 형식 변환\n▸ 조합: 작은 파일 + CDN 배포 = 빠른 스트리밍\n▸ 자동 확장, 관리 부하 최소화\n\n【오답 체크】\n(B) DataSync → S3 간 복제, 최종 사용자 성능 개선 아님\n(D) Local Region EC2 → 운영 오버헤드 높음, CloudFront 더 효율적\n(E) EC2 변환 → CloudFront 캐싱 없음, 네트워크 지연 해결 불가\n- CloudFront: 200+ 엣지 로케이션에서 캐싱\n▸ Transcoder: 비디오 해상도/비트레이트 자동 최적화\n\n【시험 포인트】\n 모바일 스트리밍 + 버퍼링 → CDN(CloudFront) 필수\n 파일 크기 문제 → 형식 변환(Transcoder)\n 운영 오버헤드 최소화 → 관리형 서비스 조합"
  },
  {
    "id": 303,
    "question": "회사에서 Amazon Elastic Container Service(Amazon ECS) 클러스터에 배포된 새 애플리케이션을 시작하고 ECS 작업에 Fargate 시작 유형을 사용하고 있습니다. 회사는 실행 시 애플리케이션에 대한 높은 트래픽이 예상되기 때문에 CPU 및 메모리 사용량을 모니터링하고 있습니다. 그러나 회사는 활용도가 감소할 때 비용을 절감하기를 원합니다. 솔루션 설계자는 무엇을 추천해야 합니까?",
    "options": {
      "A": "Amazon EC2 Auto Scaling 을 사용하여 이전 트래픽 패턴을 기반으로 특정 기간에 조정합니다.",
      "B": "AWS Lambda 함수를 사용하여 Amazon CloudWatch 경보를 트리거하는 메트릭 위반을 기반으로 Amazon ECS를 확장합니다.",
      "C": "간단한 조정 정책과 함께 Amazon EC2 Auto Scaling 을 사용하여 ECS 메트릭 위반이 Amazon CloudWatch 경보를 트리거할 때 조정합니다.",
      "D": "대상 추적 정책과 함께 AWS Application Auto Scaling 을 사용하여 ECS 메트릭 위반이 Amazon CloudWatch 경보를 트리거할 때 조정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Application Auto Scaling — ECS/RDS용, 목표 추적 정책\n▸ Fargate → EC2 관리 불필요, 태스크 수 조정\n▸ 목표 추적 정책 — 목표 메트릭 자동 유지\n\n【정답 포인트】\n▸ Fargate ECS → Application Auto Scaling(EC2 Auto Scaling 아님)\n▸ 대상 추적 정책 → CPU/메모리 기반 자동 조정\n▸ 비용 절감 + 성능 확보 동시 달성\n▸ 메트릭 목표 자동 유지, 운영자 개입 최소화\n\n【오답 체크】\n(A) EC2 Auto Scaling → EC2 인스턴스용, ECS 작업 직접 조정 불가\n(B) Lambda 함수 → 수동 작업, 자동 조정 아님\n(C) EC2 Auto Scaling + Simple Policy → ECS Fargate에 부적합\n- ECS 태스크: 컨테이너 단위 스케일링(인스턴스가 아님)\n▸ Application Auto Scaling이 ECS 태스크 개수 조정\n\n【시험 포인트】\n Fargate 자동 확장 → Application Auto Scaling\n 목표 추적 정책 → 비용 최적화 + 성능 유지"
  },
  {
    "id": 304,
    "question": "한 회사가 최근 다른 AWS 리전에 재해 복구 사이트를 만들었습니다. 회사는 정기적으로 두 리전의 NFS 파일 시스템 간에 대량의 데이터를 주고 받아야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS DataSync를 사용하십시오.",
      "B": "AWS Snowball 디바이스를 사용합니다.",
      "C": "Amazon EC2에서 SFTP 서버를 설정합니다.",
      "D": "AWS 데이터베이스 마이그레이션 서비스(AWS DMS)를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ DataSync — NFS 지원, 리전 간 데이터 동기화\n▸ 정기적 양방향 전송 → 자동 스케줄링 가능\n▸ 최소 운영 오버헤드 → 관리형 서비스\n\n【정답 포인트】\n▸ DataSync는 NFS 파일시스템 지원\n▸ 리전 간 자동 동기화 설정 가능\n▸ 네트워크 최적화, 대역폭 제어 기능\n▸ 자동 재시도, 데이터 검증 기능\n\n【오답 체크】\n(B) Snowball → 일회성 마이그레이션, 정기 동기화 부적합\n(C) SFTP 서버 → 운영 오버헤드 높음, 수동 관리 필요\n(D) DMS → 데이터베이스 마이그레이션용, 파일시스템 아님\n- DataSync 활성화: 리전 간 자동 동기화 스케줄 설정\n▸ RTO/RPO: DataSync 처리량과 스케줄에 따라 결정\nDataSync 에이전트: AWS DataSync 온프레미스 설치 또는 AWS 제공 기기\n▸ 검증: 체크섬으로 전송 무결성 자동 확인\n▸ 성능: WAN 대역폭 최대 100Mbps 사용(조절 가능)\n\n【시험 포인트】\n 정기적 리전 간 데이터 전송 → DataSync\n NFS 파일시스템 → DataSync 최선"
  },
  {
    "id": 305,
    "question": "회사는 AWS 클라우드에서 호스팅되는 게임 애플리케이션을 위한 공유 스토리지 솔루션을 설계하고 있습니다. 회사는 SMB 클라이언트를 사용하여 데이터에 액세스할 수 있는 기능이 필요합니다. 솔루션은 완전히 관리되어야 합니다. 어떤 AWS 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "탑재 가능한 파일 시스템으로 데이터를 공유하는 AWS DataSync 작업을 생성합니다. 파일 시스템을 애플리케이션 서버에 마운트하십시오.",
      "B": "Amazon EC2 Windows 인스턴스를 생성합니다. 인스턴스에 Windows 파일 공유 역할을 설치하고 구성합니다. 응용 프로그램 서버를 파일 공유에 연결합니다.",
      "C": "Windows 파일 서버 파일 시스템용 Amazon FSx 를 생성합니다. 원본 서버에 파일 시스템을 연결합니다. 애플리케이션 서버를 파일 시스템에 연결하십시오.",
      "D": "Amazon S3 버킷을 생성합니다. 애플리케이션에 IAM 역할을 할당하여 S3 버킷에 대한 액세스 권한을 부여합니다. S3 버킷을 애플리케이션 서버에 마운트합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ FSx for Windows File Server — SMB/CIFS 프로토콜 지원, 완전 관리형 Windows 파일 서버\n▸ 공유 스토리지 — 여러 EC2 인스턴스가 동시 접근 가능\n\n【정답 포인트】\n▸ SMB 클라이언트 요구 → FSx Windows 선택\n(C) ▸ 완전 관리형 → EC2 Windows 인스턴스 자동 관리는 불가 (B 제외)\n\n【오답 체크】\n(A) DataSync는 데이터 복제 도구, 마운트 불가\n(B) EC2 자체 관리 필요 → 운영 오버헤드 높음\n(D) S3는 SMB 미지원, 객체 스토리지\n\n【시험 포인트】\n윈도우 파일 공유 프로토콜 → AWS 관리형 솔루션 → FSx Windows 선택 기준"
  },
  {
    "id": 306,
    "question": "회사는 Amazon EC2 인스턴스에서 실행되는 지연 시간에 민감한 애플리케이션을 위해 인 메모리 데이터베이스를 실행하려고 합니다. 애플리케이션은 분당 100,000 개 이상의 트랜잭션을 처리하며 높은 네트워크 처리량이 필요합니다. 솔루션 설계자는 데이터 전송 비용을 최소화하는 비용 효율적인 네트워크 설계를 제공해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "동일한 AWS 리전 내의 동일한 가용 영역에서 모든 EC2 인스턴스를 시작합니다. EC2 인스턴스를 시작할 때 클러스터 전략으로 배치 그룹을 지정합니다.",
      "B": "동일한 AWS 지역 내의 다른 가용 영역에서 모든 EC2 인스턴스를 시작합니다. EC2 인스턴스를 시작할 때 파티션 전략으로 배치 그룹을 지정합니다.",
      "C": "Auto Scaling 그룹을 배포하여 네트워크 활용 목표에 따라 다른 가용 영역에서 EC2 인스턴스를 시작합니다.",
      "D": "서로 다른 가용 영역에서 EC2 인스턴스를 시작하기 위해 단계 조정 정책으로 Auto Scaling 그룹을 배포합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Cluster Placement Group — 단일 AZ 내 저지연, 높은 네트워크 처리량\n▸ In-Memory Database — Redis/Memcached 수준 요구사항\n\n【정답 포인트】\n▸ 저지연 + 고처리량 + 동일 AZ → Cluster 배치 그룹\n(A) ▸ 데이터 전송 비용 최소화 → AZ 간 통신 피함\n\n【오답 체크】\n(B) Partition: AZ 간 적합, 저지연 달성 어려움\n(C) \n(D) Auto Scaling: 동적 확장은 배치 그룹 지정 못함\n\n【시험 포인트】\n고성능 클러스터 요구 → Cluster Placement Group → 동일 AZ 배포"
  },
  {
    "id": 307,
    "question": "주로 온프레미스에서 애플리케이션 서버를 실행하는 회사가 AWS 로 마이그레이션하기로 결정했습니다. 회사는 온프레미스에서 iSCSI(Internet Small Computer Systems Interface) 스토리지를 확장해야 할 필요성을 최소화하려고 합니다. 회사는 최근에 액세스한 데이터만 로컬에 저장하기를 원합니다. 회사는 이러한 요구 사항을 충족하기 위해 어떤 AWS 솔루션을 사용해야 합니까?",
    "options": {
      "A": "Amazon S3 파일 게이트웨이",
      "B": "AWS Storage Gateway 테이프 게이트웨이",
      "C": "AWS Storage Gateway 볼륨 게이트웨이 저장 볼륨",
      "D": "AWS Storage Gateway 볼륨 게이트웨이 캐시 볼륨"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Storage Gateway — 온프레미스 iSCSI 스토리지 확장\n▸ 캐시 볼륨 — 자주 사용 데이터만 로컬, AWS에 백업\n\n【정답 포인트】\n▸ 최근 데이터만 로컬 + iSCSI 필요 → 캐시 볼륨\n(D) ▸ S3를 주 스토리지로 활용, 로컬 캐시만 유지\n\n【오답 체크】\n(A) S3 File Gateway: SMB/NFS용, iSCSI 미지원\n(B) Tape Gateway: 아카이브용, iSCSI 미지원\n(C) Stored Volume: 전체 데이터 로컬 저장 → 캐시 이점 없음\n\n【시험 포인트】\n온프레미스 용량 제약 → 캐시 패턴 → Cached Volumes 선택"
  },
  {
    "id": 308,
    "question": "회사에 통합 결제를 사용하는 여러 AWS 계정이 있습니다. 이 회사는 90 일 동안 여러 개의 활성 고성능 Amazon RDS for Oracle 온디맨드 DB 인스턴스를 실행합니다. 회사의 재무 팀은 통합 결제 계정 및 기타 모든 AWS 계정에서 AWS Trusted Advisor 에 액세스할 수 있습니다. 재무 팀은 적절한 AWS 계정을 사용하여 RDS 에 대한 Trusted Advisor 확인 권장 사항에 액세스해야 합니다. 재무팀은 적절한 Trusted Advisor 수표를 검토하여 RDS 비용을 줄여야 합니다. 이러한 요구 사항을 충족하기 위해 재무 팀은 어떤 조합의 단계를 수행해야 합니까? (2 개 선택)",
    "options": {
      "A": "RDS 인스턴스가 실행 중인 계정의 Trusted Advisor 권장 사항을 사용합니다.",
      "B": "통합 결제 계정의 Trusted Advisor 권장 사항을 사용하여 모든 RDS 인스턴스 확인을 동시에 확인합니다.",
      "C": "Amazon RDS 예약 인스턴스 최적화에 대한 Trusted Advisor 검사를 검토합니다.",
      "D": "Amazon RDS 유휴 DB 인스턴스에 대한 Trusted Advisor 검사를 검토합니다.",
      "E": "Amazon Redshift 예약 노드 최적화에 대한 Trusted Advisor 검사를 검토합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ Trusted Advisor — AWS 비용 최적화 권장사항 제공\n▸ 통합 결제(Consolidated Billing) — 여러 계정 통합 관리\n\n【정답 포인트】\n▸ Trusted Advisor: 통합 결제 계정에서 전체 계정 확인 가능\n(B) ▸ RDS 비용 절감: 예약 인스턴스 최적화, 유휴 인스턴스 체크 (C+D)\n\n【오답 체크】\n(A) 개별 계정: 교차 계정 통합 불가\n(E) Redshift: RDS 비용과 무관\n\n【시험 포인트】\n통합 결제 계정 활용 + RDS 최적화 체크 → B+D 정답"
  },
  {
    "id": 309,
    "question": "솔루션 설계자는 스토리지 비용을 최적화해야 합니다. 솔루션 설계자는 더 이상 액세스하지 않거나 거의 액세스하지 않는 Amazon S3 버킷을 식별해야 합니다. 최소한의 운영 오버헤드로 이 목표를 달성할 수 있는 솔루션은 무엇입니까?",
    "options": {
      "A": "고급 활동 메트릭에 대한 S3 Storage Lens 대시보드를 사용하여 버킷 액세스 패턴을 분석합니다.",
      "B": "AWS Management Console 에서 S3 대시보드를 사용하여 버킷 액세스 패턴을 분석합니다.",
      "C": "버킷에 대한 Amazon CloudWatch BucketSizeBytes 지표를 켭니다. Amazon Athena에서 메트릭 데이터를 사용하여 버킷 액세스 패턴을 분석합니다.",
      "D": "S3 객체 모니터링을 위해 AWS CloudTrail 을 켭니다. Amazon CloudWatch Logs 와 통합된 CloudTrail 로그를 사용하여 버킷 액세스 패턴을 분석합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 Storage Lens — S3 활동 분석 대시보드 (고급 메트릭)\n▸ 버킷 액세스 패턴 분석 — 사용/미사용 식별\n\n【정답 포인트】\n▸ 고급 활동 메트릭 활용 → 버킷 액세스 빈도 추적\n(A) ▸ 운영 오버헤드 최소 → 관리형 서비스 사용\n\n【오답 체크】\n(B) 콘솔 대시보드: 메트릭 부족\n(C) CloudWatch: 크기만 추적, 액세스 패턴 미제공\n(D) CloudTrail: 로깅만, 분석 기능 없음\n\n【시험 포인트】\nS3 활동 분석 → Storage Lens 대시보드 → 최소 운영 비용"
  },
  {
    "id": 310,
    "question": "회사에서 인공 지능 및 기계 학습(AI/ML)을 연구하는 고객에게 데이터 세트를 판매합니다. 데이터 세트는 us-east-1 리전의 Amazon S3 버킷에 저장되는 형식이 지정된 대용량 파일입니다. 회사는 고객이 주어진 데이터 세트에 대한 액세스를 구매하는 데 사용하는 웹 애플리케이션을 호스팅합니다. 웹 애플리케이션은 Application Load Balancer 뒤의 여러 Amazon EC2 인스턴스에 배포됩니다. 구매 후 고객은 파일에 대한 액세스를 허용하는 S3 서명 URL을 받습니다. 고객은 북미와 유럽 전역에 분산되어 있습니다. 회사는 데이터 전송과 관련된 비용을 줄이고 성능을 유지하거나 개선하고자 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "기존 S3 버킷에서 S3 Transfer Acceleration 을 구성합니다. 고객 요청을 S3 Transfer Acceleration 엔드포인트로 안내합니다. 액세스 제어를 위해 S3 서명 URL 을 계속 사용하십시오.",
      "B": "기존 S3 버킷을 원본으로 사용하여 Amazon CloudFront 배포를 배포합니다. 고객 요청을 CloudFront URL 로 전달합니다. 액세스 제어를 위해 CloudFront 서명 URL 로 전환하십시오.",
      "C": "버킷 사이에 S3 교차 리전 복제가 있는 eu-central-1 리전에서 두 번째 S3 버킷을 설정합니다. 가장 가까운 지역으로 고객 요청을 전달합니다. 액세스 제어를 위해 S3 서명 URL을 계속 사용하십시오.",
      "D": "데이터세트를 최종 사용자에게 스트리밍할 수 있도록 웹 애플리케이션을 수정합니다. 기존 S3 버킷에서 데이터를 읽도록 웹 애플리케이션을 구성합니다. 애플리케이션에서 직접 액세스 제어를 구현합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudFront — 글로벌 엣지 로케이션, 콘텐츠 배포 가속\n▸ 서명된 URL — 접근 제어 및 보안\n\n【정답 포인트】\n▸ 글로벌 고객, 데이터 전송 비용 절감 → CloudFront\n(B) ▸ CloudFront 서명 URL로 접근 제어 → S3 서명 URL 대체\n\n【오답 체크】\n(A) S3 Transfer Acceleration: 업로드용, 다운로드 성능 제한\n(C) 교차 리전 복제: 비용 증가, 지연 시간 미개선\n(D) 애플리케이션 스트리밍: 복잡, 대역폭 비효율\n\n【시험 포인트】\n글로벌 배포 + 비용 최적화 → CloudFront 서명 URL"
  },
  {
    "id": 311,
    "question": "한 회사에서 AWS 를 사용하여 보험 견적을 처리할 웹 애플리케이션을 설계하고 있습니다. 사용자는 애플리케이션에서 견적을 요청합니다. 견적은 견적 유형별로 구분되어야 하며, 24 시간 이내에 응답해야 하며 분실해서는 안 됩니다. 솔루션은 운영 효율성을 극대화하고 유지 보수를 최소화해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "견적 유형에 따라 여러 Amazon Kinesis 데이터 스트림을 생성합니다. 적절한 데이터 스트림으로 메시지를 보내도록 웹 애플리케이션을 구성합니다. Kinesis Client Library(KCL)를 사용하여 자체 데이터 스트림에서 메시지를 풀링하도록 애플리케이션 서버의 각 백엔드 그룹을 구성합니다.",
      "B": "각 견적 유형에 대해 AWS Lambda 함수 및 Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. 연결된 SNS 주제에 Lambda 함수를 구독합니다. 견적 요청을 적절한 SNS 주제에 게시하도록 애플리케이션을 구성합니다.",
      "C": "단일 Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. SNS 주제에 대한 Amazon Simple Queue Service(Amazon SQS) 대기열을 구독합니다. 견적 유형에 따라 적절한 SQS 대기열에 메시지를 게시하도록 SNS 메시지 필터링을 구성합니다. 자체 SQS 대기열을 사용하도록 각 백엔드 애플리케이션 서버를 구성합니다.",
      "D": "데이터 스트림을 Amazon OpenSearch Service 클러스터로 전달하기 위해 견적 유형을 기반으로 여러 Amazon Kinesis Data Firehose 전달 스트림을 생성합니다. 적절한 전송 스트림으로 메시지를 보내도록 애플리케이션을 구성합니다. OpenSearch Service 에서 메시지를 검색하고 그에 따라 처리하도록 애플리케이션 서버의 각 백엔드 그룹을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SNS-SQS Fan-out — 주제별 분기, 메시지 손실 방지\n▸ SQS 메시지 필터링 — 정확한 라우팅\n\n【정답 포인트】\n▸ 분류 + 24시간 내 처리 + 손실 방지 → SQS 내구성\n(C) ▸ 여러 백엔드 그룹 병렬 처리 가능\n\n【오답 체크】\n(A) Kinesis: 실시간 스트리밍, 배치 처리에 과도\n(B) Lambda-SNS: 트리거 제한, 복잡한 워크플로우\n(D) Firehose-OpenSearch: 검색용, 구독 패턴 미지원\n\n【시험 포인트】\n메시지 분류 + 보장 전달 → SQS 대기열 + SNS 필터링"
  },
  {
    "id": 312,
    "question": "한 회사에 여러 Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있습니다. 각 EC2 인스턴스에는 여러 Amazon Elastic Block Store(Amazon EBS) 데이터 볼륨이 연결되어 있습니다. 애플리케이션의 EC2 인스턴스 구성 및 데이터는 야간에 백업해야 합니다. 또한 애플리케이션은 다른 AWS 리전에서 복구 가능해야 합니다. 운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "애플리케이션 EBS 볼륨의 야간 스냅샷을 예약하고 스냅샷을 다른 리전에 복사하는 AWS Lambda 함수를 작성하십시오.",
      "B": "야간 백업을 수행하기 위해 AWS Backup 을 사용하여 백업 계획을 생성합니다. 백업을 다른 리전에 복사합니다. 애플리케이션의 EC2 인스턴스를 리소스로 추가합니다.",
      "C": "야간 백업을 수행하기 위해 AWS Backup 을 사용하여 백업 계획을 만듭니다. 백업을 다른 리전에 복사합니다. 애플리케이션의 EBS 볼륨을 리소스로 추가합니다.",
      "D": "애플리케이션 EBS 볼륨의 야간 스냅샷을 예약하고 스냅샷을 다른 가용 영역에 복사하는 AWS Lambda 함수를 작성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Backup — EC2 및 EBS 백업 통합 관리\n▸ 교차 리전 복사 — 재해 복구 지원\n\n【정답 포인트】\n▸ EC2 인스턴스 + EBS 구성 백업 → Backup으로 통합\n(B) ▸ 리소스 추가: EC2 인스턴스 선택 → 종속 EBS 자동 포함\n\n【오답 체크】\n(A) \n(D) Lambda: 스냅샷 수동 관리, 유지보수 오버헤드\n(C) Backup 활용하되 EBS만 추가 → EC2 구성 정보 누락\n\n【시험 포인트】\n전체 인스턴스 백업 → AWS Backup + EC2 리소스 선택"
  },
  {
    "id": 313,
    "question": "회사가 AWS 에서 모바일 앱을 구축하고 있습니다. 회사는 수백만 명의 사용자에게 도달 범위를 확장하려고 합니다. 회사는 승인된 사용자가 모바일 장치에서 회사의 콘텐츠를 볼 수 있도록 플랫폼을 구축해야 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "퍼블릭 Amazon S3 버킷에 콘텐츠를 게시합니다. AWS Key Management Service(AWS KMS) 키를 사용하여 콘텐츠를 스트리밍합니다.",
      "B": "모바일 앱과 AWS 환경 간에 IPsec VPN을 설정하여 콘텐츠를 스트리밍합니다.",
      "C": "Amazon CloudFront를 사용합니다. 스트리밍 콘텐츠에 서명된 URL을 제공합니다.",
      "D": "모바일 앱과 AWS 환경 간에 AWS Client VPN을 설정하여 콘텐츠를 스트리밍합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudFront — 글로벌 콘텐츠 배포, 서명된 URL\n▸ 백만 사용자 규모 → 관리형 CDN 필수\n\n【정답 포인트】\n▸ 승인 사용자 + 글로벌 확장 → CloudFront 서명 URL\n(C) ▸ 관리형 솔루션 → 운영 복잡도 최소\n\n【오답 체크】\n(A) S3 퍼블릭: 인증 불가\n(B) IPsec VPN: 수백만 사용자 확장 불가\n(D) Client VPN: 비용 높음, 모바일 최적화 부족\n\n【시험 포인트】\n대규모 모바일 콘텐츠 배포 → CloudFront 서명 URL"
  },
  {
    "id": 314,
    "question": "회사에는 드물게 액세스하는 패턴으로 글로벌 영업 팀에서 사용하는 온프레미스 MySQL 데이터베이스가 있습니다. 영업팀은 데이터베이스의 가동 중지 시간을 최소화해야 합니다. 데이터베이스 관리자는 향후 더 많은 사용자를 예상하여 특정 인스턴스 유형을 선택하지 않고 이 데이터베이스를 AWS로 마이그레이션하려고 합니다. 솔루션 설계자는 어떤 서비스를 추천해야 합니까?",
    "options": {
      "A": "아마존 오로라 MySQL",
      "B": "MySQL용 Amazon Aurora 서버리스",
      "C": "아마존 레드시프트 스펙트럼",
      "D": "MySQL용 Amazon RDS"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Aurora Serverless — 자동 확장, 예약 인스턴스 선택 불필요\n▸ 드물게 액세스 패턴 → 낮은 동시 사용\n\n【정답 포인트】\n▸ 가변 워크로드 + 인스턴스 타입 미사전 선택 → Serverless\n(B) ▸ 자동 스케일링으로 미래 사용자 증가 대비\n\n【오답 체크】\n(A) Aurora MySQL: 인스턴스 선택 필요\n(C) Redshift: OLAP용, MySQL 데이터베이스 대체 부적절\n(D) RDS MySQL: 인스턴스 사전 선택 필수\n\n【시험 포인트】\n예측 불가능 워크로드 → Aurora Serverless 자동 확장"
  },
  {
    "id": 315,
    "question": "회사는 온프레미스 데이터 센터의 여러 애플리케이션에 영향을 미치는 위반을 경험했습니다. 공격자는 서버에서 실행 중인 맞춤형 애플리케이션의 취약점을 이용했습니다. 이 회사는 현재 Amazon EC2 인스턴스에서 실행되도록 애플리케이션을 마이그레이션하고 있습니다. 이 회사는 EC2 인스턴스의 취약성을 능동적으로 스캔하고 결과를 자세히 설명하는 보고서를 보내는 솔루션을 구현하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Shield 를 배포하여 EC2 인스턴스의 취약점을 스캔합니다. 결과를 AWS CloudTrail에 기록하는 AWS Lambda 함수를 생성합니다.",
      "B": "Amazon Macie 및 AWS Lambda 함수를 배포하여 EC2 인스턴스의 취약점을 스캔합니다. 결과를 AWS CloudTrail에 기록합니다.",
      "C": "Amazon GuardDuty 를 켭니다. GuardDuty 에이전트를 EC2 인스턴스에 배포합니다. 결과를 자세히 설명하는 보고서의 생성 및 배포를 자동화하도록 AWS Lambda 함수를 구성합니다.",
      "D": "Amazon Inspector를 켭니다. Amazon Inspector 에이전트를 EC2 인스턴스에 배포합니다. 결과를 자세히 설명하는 보고서의 생성 및 배포를 자동화하도록 AWS Lambda 함수를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Amazon Inspector — EC2 취약성 스캔 자동화\n▸ 에이전트 배포 — 상세 보고서 생성\n\n【정답 포인트】\n▸ EC2 취약성 능동 스캔 + 상세 보고서 → Inspector\n(D) ▸ 에이전트 + Lambda 자동화 → 보고서 생성 및 배포\n\n【오답 체크】\n(A) Shield: DDoS 보호, 취약성 스캔 불가\n(B) Macie: 민감 데이터 식별, 취약성 스캔 미지원\n(C) GuardDuty: 침입 탐지, 시스템 취약성 미감지\n\n【시험 포인트】\nEC2 취약성 스캔 → Amazon Inspector + 자동 보고서"
  },
  {
    "id": 316,
    "question": "회사는 Amazon EC2 인스턴스를 사용하여 스크립트를 실행하여 Amazon Simple Queue Service(Amazon SQS) 대기열에서 메시지를 폴링하고 처리합니다. 이 회사는 대기열에 추가되는 점점 더 많은 수의 메시지를 처리할 수 있는 능력을 유지하면서 운영 비용을 절감하고자 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "메시지를 더 빠르게 처리하려면 EC2 인스턴스의 크기를 늘리십시오.",
      "B": "인스턴스가 충분히 활용되지 않을 때 Amazon EventBridge를 사용하여 EC2 인스턴스를 끕니다.",
      "C": "EC2 인스턴스의 스크립트를 적절한 런타임이 있는 AWS Lambda 함수로 마이그레이션합니다.",
      "D": "AWS Systems Manager Run Command를 사용하여 요청 시 스크립트를 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Lambda — SQS 이벤트 기반 폴링, 서버리스 처리\n▸ 비용 최적화 — 사용한 만큼만 청구\n\n【정답 포인트】\n▸ EC2 폴링 → Lambda로 마이그레이션\n(C) ▸ 자동 확장 + 유휴 시간 비용 제거\n\n【오답 체크】\n(A) 스케일 업: 비용 증가, 유연성 감소\n(B) EventBridge: EC2 관리 필요\n(D) Systems Manager: 온디맨드 실행, 연속 폴링 부적절\n\n【시험 포인트】\n폴링 작업 자동화 → Lambda 이벤트 기반 처리"
  },
  {
    "id": 317,
    "question": "회사에서 레거시 애플리케이션을 사용하여 데이터를 CSV 형식으로 생성합니다. 레거시 애플리케이션은 출력 데이터를 Amazon S3 에 저장합니다. 이 회사는 복잡한 SQL 쿼리를 수행하여 Amazon Redshift 및 Amazon S3 에만 저장된 데이터를 분석할 수 있는 새로운 상용 기성품(COTS) 애플리케이션을 배포하고 있습니다. 그러나 COTS 애플리케이션은 레거시 애플리케이션이 생성하는 .csv 파일을 처리할 수 없습니다. 회사는 레거시 애플리케이션을 업데이트하여 다른 형식으로 데이터를 생성할 수 없습니다. 회사는 COTS 애플리케이션이 레거시 애플리케이션이 생성하는 데이터를 사용할 수 있도록 솔루션을 구현해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "일정에 따라 실행되는 AWS Glue 추출, 변환 및 로드(ETL) 작업을 생성합니다. .csv 파일을 처리하고 처리된 데이터를 Amazon Redshift에 저장하도록 ETL 작업을 구성합니다.",
      "B": "Amazon EC2 인스턴스에서 실행되는 Python 스크립트를 개발하여 .csv 파일을 .sql 파일로 변환합니다. Cron 일정에서 Python 스크립트를 호출하여 출력 파일을 Amazon S3에 저장합니다.",
      "C": "AWS Lambda 함수와 Amazon DynamoDB 테이블을 생성합니다. S3 이벤트를 사용하여 Lambda 함수를 호출합니다. ETL(추출, 변환 및 로드) 작업을 수행하여 .csv 파일을 처리하고 처리된 데이터를 DynamoDB 테이블에 저장하도록 Lambda 함수를 구성합니다.",
      "D": "Amazon EventBridge 를 사용하여 매주 일정에 따라 Amazon EMR 클러스터를 시작합니다. 추출, 변환 및 로드(ETL) 작업을 수행하여 .csv 파일을 처리하고 처리된 데이터를 Amazon Redshift 테이블에 저장하도록 EMR 클러스터를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Glue ETL — 관리형 데이터 변환 (스케줄 가능)\n▸ CSV → Redshift/S3 형식 변환\n\n【정답 포인트】\n▸ 최소 운영 오버헤드 → Glue ETL 선택\n(A) ▸ 일정 기반 실행, 관리형 서비스\n\n【오답 체크】\n(B) EC2 Python: 인스턴스 관리 필요\n(C) Lambda+DynamoDB: 장기 처리 부적절, DynamoDB 불필요\n(D) EMR: 복잡한 클러스터 관리\n\n【시험 포인트】\n규칙적 데이터 변환 → Glue ETL 자동화"
  },
  {
    "id": 318,
    "question": "한 회사가 최근 전체 IT 환경을 AWS 클라우드로 마이그레이션했습니다. 회사는 사용자가 적절한 변경 제어 프로세스를 사용하지 않고 과도한 크기의 Amazon EC2 인스턴스를 프로비저닝하고 보안 그룹 규칙을 수정하고 있음을 발견했습니다. 솔루션 설계자는 이러한 인벤토리 및 구성 변경 사항을 추적하고 감사하기 위한 전략을 고안해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 조치를 취해야 합니까? (2 개 선택)",
    "options": {
      "A": "AWS CloudTrail을 활성화하고 감사에 사용하십시오.",
      "B": "Amazon EC2 인스턴스에 대한 데이터 수명 주기 정책을 사용합니다.",
      "C": "AWS Trusted Advisor를 활성화하고 보안 대시보드를 참조합니다.",
      "D": "AWS Config를 활성화하고 감사 및 규정 준수를 위한 규칙을 생성합니다.",
      "E": "AWS CloudFormation 템플릿을 사용하여 이전 리소스 구성을 복원합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ CloudTrail — API 호출 기록, 감사 추적\n▸ AWS Config — 리소스 구성 변경 감지\n\n【정답 포인트】\n▸ 인벤토리 + 구성 변경 추적 → CloudTrail + Config (A+D)\n▸ 변경 제어 프로세스 강제화\n\n【오답 체크】\n(B) 데이터 수명 주기 정책: EC2와 무관\n(C) Trusted Advisor: 권장사항만, 감시 불가\n(E) CloudFormation: 이전 구성 복원, 변경 감시 미흡\n\n【시험 포인트】\n변경 사항 감시 → CloudTrail + AWS Config 조합"
  },
  {
    "id": 319,
    "question": "회사는 AWS 클라우드에 수백 개의 Amazon EC2 Linux 기반 인스턴스를 보유하고 있습니다. 시스템 관리자는 공유 SSH 키를 사용하여 인스턴스를 관리했습니다. 최근 감사 후 회사의 보안 팀은 모든 공유 키를 제거하도록 지시하고 있습니다. 솔루션 설계자는 EC2 인스턴스에 대한 보안 액세스를 제공하는 솔루션을 설계해야 합니다. 최소한의 관리 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Systems Manager Session Manager를 사용하여 EC2 인스턴스에 연결합니다.",
      "B": "AWS Security Token Service(AWS STS)를 사용하여 온디맨드 방식으로 일회성 SSH 키를 생성합니다.",
      "C": "배스천 인스턴스 집합에 대한 공유 SSH 액세스를 허용합니다. 배스천 인스턴스에서 SSH 액세스만 허용하도록 다른 모든 인스턴스를 구성합니다.",
      "D": "Amazon Cognito 사용자 지정 권한 부여자를 사용하여 사용자를 인증합니다. AWS Lambda 함수를 호출하여 임시 SSH 키를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Systems Manager Session Manager — 브라우저/CLI 기반 SSH 대체\n▸ IAM 기반 접근 제어 — 공유 키 제거\n\n【정답 포인트】\n▸ 공유 SSH 키 제거 → Session Manager\n(A) ▸ 최소 관리 오버헤드, IAM 중앙 관리\n\n【오답 체크】\n(B) STS: 일회성 SSH 키, 관리 복잡\n(C) Bastion: 추가 리소스, 여전히 키 관리 필요\n(D) Cognito+Lambda: 복잡, 레거시 기능\n\n【시험 포인트】\n공유 키 제거 → Session Manager 기반 접근 제어"
  },
  {
    "id": 320,
    "question": "회사에서 Amazon EC2 인스턴스 플릿을 사용하여 온프레미스 데이터 소스에서 데이터를 수집하고 있습니다. 데이터는 JSON 형식이며 수집 속도는 최대 1MB/s 입니다. EC2 인스턴스가 재부팅되면 진행 중인 데이터가 손실됩니다. 회사의 데이터 과학 팀은 거의 실시간으로 수집된 데이터를 쿼리하려고 합니다. 데이터 손실을 최소화하면서 확장 가능한 거의 실시간 데이터 쿼리를 제공하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Kinesis Data Streams에 데이터를 게시하고 Kinesis Data Analytics를 사용하여 데이터를 쿼리합니다.",
      "B": "Amazon Redshift 를 대상으로 사용하여 Amazon Kinesis Data Firehose 에 데이터를 게시합니다. Amazon Redshift를 사용하여 데이터를 쿼리합니다.",
      "C": "수집된 데이터를 EC2 인스턴스 스토어에 저장합니다. Amazon S3 를 대상으로 Amazon Kinesis Data Firehose 에 데이터를 게시합니다. Amazon Athena 를 사용하여 데이터를 쿼리합니다.",
      "D": "수집된 데이터를 Amazon Elastic Block Store(Amazon EBS) 볼륨에 저장합니다. Redis용 Amazon ElastiCache에 데이터를 게시합니다. Redis 채널을 구독하여 데이터를 쿼리합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Kinesis Data Streams — 실시간 데이터 수집 및 분석\n▸ 1MB/s 처리 → Kinesis 적합 대역폭\n\n【정답 포인트】\n▸ 거의 실시간 쿼리 + 데이터 손실 방지 → Kinesis Streams\n(A) ▸ Kinesis Analytics로 SQL 쿼리 가능\n\n【오답 체크】\n(B) Redshift Firehose: 배치 처리, 실시간성 부족\n(C) S3 Athena: 준 실시간, EC2 재부팅 시 손실\n(D) EBS+ElastiCache: 복잡, 손실 위험 높음\n\n【시험 포인트】\n실시간 수집 및 쿼리 → Kinesis Data Streams"
  },
  {
    "id": 321,
    "question": "솔루션 설계자는 Amazon S3 버킷에 업로드된 모든 객체가 암호화되도록 하려면 어떻게 해야 합니까?",
    "options": {
      "A": "PutObject 에 s3:x-amz-acl 헤더 세트가 없는 경우 거부하도록 버킷 정책을 업데이트합니다.",
      "B": "PutObject 에 프라이빗으로 설정된 s3:x-amz-acl 헤더가 없는 경우 거부하도록 버킷 정책을 업데이트합니다.",
      "C": "PutObject 에 true 로 설정된 aws:SecureTransport 헤더가 없는 경우 거부하도록 버킷 정책을 업데이트합니다.",
      "D": "PutObject 에 x-amz-server-side-encryption 헤더 세트가 없는 경우 거부하도록 버킷 정책을 업데이트합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ x-amz-server-side-encryption — S3 암호화 헤더 요구\n▸ 버킷 정책 — PutObject 조건 제어\n\n【정답 포인트】\n▸ 모든 객체 암호화 강제 → 암호화 헤더 필수\n(D) ▸ 정책 조건: x-amz-server-side-encryption 존재 확인\n\n【오답 체크】\n(A) s3:x-amz-acl: 액세스 제어, 암호화 미지원\n(B) s3:x-amz-acl private: ACL 정책, 암호화 미지원\n(C) aws:SecureTransport: HTTPS 강제, 암호화 강제 아님\n\n【시험 포인트】\n암호화 강제 정책 → x-amz-server-side-encryption 헤더"
  },
  {
    "id": 322,
    "question": "솔루션 설계자는 회사를 위한 다중 계층 애플리케이션을 설계하고 있습니다. 애플리케이션 사용자는 모바일 장치에서 이미지를 업로드합니다. 애플리케이션은 각 이미지의 썸네일을 생성하고 이미지가 성공적으로 업로드되었음을 확인하는 메시지를 사용자에게 반환합니다. 썸네일 생성에는 최대 60 초가 소요될 수 있지만 회사는 사용자에게 원본 이미지가 수신되었음을 알리기 위해 더 빠른 응답 시간을 제공하고자 합니다. 솔루션 설계자는 서로 다른 애플리케이션 계층에 요청을 비동기식으로 전달하도록 애플리케이션을 설계해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "사용자 지정 AWS Lambda 함수를 작성하여 썸네일을 생성하고 사용자에게 알립니다. 이미지 업로드 프로세스를 이벤트 소스로 사용하여 Lambda 함수를 호출합니다.",
      "B": "AWS Step Functions 워크플로를 생성합니다. 애플리케이션 계층 간의 오케스트레이션을 처리하고 썸네일 생성이 완료되면 사용자에게 알리도록 Step Functions를 구성합니다.",
      "C": "Amazon Simple Queue Service(Amazon SQS) 메시지 대기열을 생성합니다. 이미지가 업로드되면 썸네일 생성을 위해 SQS 대기열에 메시지를 배치합니다. 이미지가 수신되었음을 애플리케이션 메시지를 통해 사용자에게 알립니다.",
      "D": "Amazon Simple Notification Service(Amazon SNS) 알림 주제 및 구독을 생성합니다. 애플리케이션과 함께 하나의 구독을 사용하여 이미지 업로드가 완료된 후 썸네일을 생성하십시오. 섬네일 생성이 완료된 후 푸시 알림을 통해 사용자의 모바일 앱에 메시지를 보내려면 두 번째 구독을 사용하십시오."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SQS + 비동기 처리 — 빠른 응답 + 백그라운드 작업\n▸ 원본 이미지 수신 확인 → 즉시 응답\n\n【정답 포인트】\n▸ 썸네일 생성 60초 > 응답 시간 → 비동기 처리\n(C) ▸ SQS 대기열로 메시지 분기, 즉시 사용자 알림\n\n【오답 체크】\n(A) Lambda: 일회성 호출, 대기열 구조 부족\n(B) Step Functions: 오케스트레이션 복잡\n(D) SNS-SNS: 구독자 기반, 비동기 처리 미지원\n\n【시험 포인트】\n빠른 응답 + 비동기 작업 → SQS 대기열 패턴"
  },
  {
    "id": 323,
    "question": "회사 시설에는 건물 전체의 모든 입구에 배지 판독기가 있습니다. 배지를 스캔하면 판독기가 HTTPS 를 통해 메시지를 보내 누가 해당 입구에 액세스하려고 시도했는지 나타냅니다. 솔루션 설계자는 센서에서 보내는 이러한 메시지를 처리하는 시스템을 설계해야 합니다. 솔루션은 가용성이 높아야 하며 회사의 보안 팀이 분석할 수 있도록 결과를 제공해야 합니다. 솔루션 설계자는 어떤 시스템 아키텍처를 추천해야 합니까?",
    "options": {
      "A": "Amazon EC2 인스턴스를 시작하여 HTTPS 엔드포인트 역할을 하고 메시지를 처리합니다. 결과를 Amazon S3 버킷에 저장하도록 EC2 인스턴스를 구성합니다.",
      "B": "Amazon API Gateway 에서 HTTPS 엔드포인트를 생성합니다. AWS Lambda 함수를 호출하여 메시지를 처리하고 결과를 Amazon DynamoDB 테이블에 저장하도록 API Gateway 엔드포인트를 구성합니다.",
      "C": "Amazon Route 53을 사용하여 들어오는 센서 메시지를 AWS Lambda 함수로 보냅니다. 메시지를 처리하고 결과를 Amazon DynamoDB 테이블에 저장하도록 Lambda 함수를 구성합니다.",
      "D": "Amazon S3 용 게이트웨이 VPC 엔드포인트를 생성합니다. 센서 데이터가 VPC 엔드포인트를 통해 S3 버킷에 직접 기록될 수 있도록 시설 네트워크에서 VPC 로의 Site-to-Site VPN 연결을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ API Gateway + Lambda — HTTPS 엔드포인트, 서버리스 처리\n▸ 고가용성 — 완전 관리형 서비스\n\n【정답 포인트】\n▸ HTTPS 센서 메시지 수신 → API Gateway\n(B) ▸ Lambda로 메시지 처리, DynamoDB 저장\n\n【오답 체크】\n(A) EC2: 가용성 수동 관리\n(C) Route 53: DNS 라우팅, HTTP 엔드포인트 미지원\n(D) VPC 엔드포인트: VPN 필요, 센서 직접 연결 불가\n\n【시험 포인트】\n외부 센서 HTTPS 수집 → API Gateway + Lambda"
  },
  {
    "id": 324,
    "question": "회사는 기본 온프레미스 파일 스토리지 볼륨에 대한 재해 복구 계획을 구현하려고 합니다. 파일 스토리지 볼륨은 로컬 스토리지 서버의 iSCSI(Internet Small Computer Systems Interface) 장치에서 마운트됩니다. 파일 스토리지 볼륨은 수백 테라바이트(TB)의 데이터를 보유합니다. 회사는 최종 사용자가 대기 시간 없이 온프레미스 시스템의 모든 파일 유형에 즉시 액세스할 수 있기를 원합니다. 회사의 기존 인프라를 최소한으로 변경하면서 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "온프레미스에서 호스팅되는 가상 머신(VM)으로 Amazon S3 파일 게이트웨이를 프로비저닝합니다. 로컬 캐시를 10TB 로 설정합니다. NFS 프로토콜을 통해 파일에 액세스하도록 기존 애플리케이션을 수정합니다. 재해에서 복구하려면 Amazon EC2 인스턴스를 프로비저닝하고 파일이 포함된 S3 버킷을 탑재합니다.",
      "B": "AWS Storage Gateway 테이프 게이트웨이를 프로비저닝합니다. 데이터 백업 솔루션을 사용하여 모든 기존 데이터를 가상 테이프 라이브러리에 백업하십시오. 초기 백업이 완료된 후 야간에 실행되도록 데이터 백업 솔루션을 구성합니다. 재해에서 복구하려면 Amazon EC2 인스턴스를 프로비저닝하고 가상 테이프 라이브러리의 볼륨에서 Amazon Elastic Block Store(Amazon EBS) 볼륨으로 데이터를 복원합니다.",
      "C": "AWS Storage Gateway 볼륨 게이트웨이 캐시 볼륨을 프로비저닝합니다. 로컬 캐시를 10TB 로 설정합니다. iSCSI 를 사용하여 볼륨 게이트웨이 캐싱 볼륨을 기존 파일 서버에 마운트하고 모든 파일을 스토리지 볼륨에 복사합니다. 스토리지 볼륨의 예약된 스냅샷을 구성합니다. 재해에서 복구하려면 스냅샷을 Amazon Elastic Block Store(Amazon EBS) 볼륨으로 복원하고 EBS 볼륨을 Amazon EC2 인스턴스에 연결합니다.",
      "D": "기존 파일 스토리지 볼륨과 동일한 양의 디스크 공간으로 AWS Storage Gateway 볼륨 게이트웨이 저장 볼륨을 프로비저닝합니다. iSCSI를 사용하여 볼륨 게이트웨이 저장 볼륨을 기존 파일 서버에 마운트하고 모든 파일을 스토리지 볼륨에 복사합니다. 스토리지 볼륨의 예약된 스냅샷을 구성합니다. 재해에서 복구하려면 스냅샷을 Amazon Elastic Block Store(Amazon EBS) 볼륨으로 복원하고 EBS 볼륨을 Amazon EC2 인스턴스에 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 볼륨 게이트웨이 저장 형식 — 온프레미스 로컬에 모든 데이터 저장, AWS에 백업·스냅샷만 저장\n▸ 볼륨 게이트웨이 캐시 형식 — 자주 사용하는 데이터만 로컬에 캐시, 대부분은 AWS 저장\n▸ iSCSI 마운팅 — 기존 블록 장치 프로토콜 유지, 애플리케이션 변경 최소화\n\n【정답 포인트】\n▸ \"대기 시간 없이 즉시 액세스\" → 온프레미스에서 모든 데이터가 로컬에 존재해야 함\n▸ \"수백TB 데이터\" + \"기존 인프라 최소 변경\" → 저장 볼륨(전체 용량) 필요\n▸ \"기존 서버의 iSCSI\" → 프로토콜 호환성 유지, iSCSI로 직접 마운트\n\n【오답 체크】\n(A) S3 파일 게이트웨이는 NFS만 지원, iSCSI 비호환 · 앱 수정 필요\n(B) 테이프 게이트웨이는 백업용, 실시간 액세스 미지원\n(C) 캐시 볼륨은 10TB 캐시만 로컬 → 나머지는 AWS에서 지연 발생\n\n【시험 포인트】\n패턴: \"즉시 접근\" + \"대용량\" = 저장 볼륨 | \"지연 가능\" + \"대용량\" = 캐시 볼륨\n매핑: iSCSI 프로토콜 선호도 → 기존 블록 인터페이스 유지 최적"
  },
  {
    "id": 325,
    "question": "회사는 Amazon S3 버킷에서 웹 애플리케이션을 호스팅하고 있습니다. 이 애플리케이션은 Amazon Cognito 를 자격 증명 공급자로 사용하여 사용자를 인증하고 다른 S3 버킷에 저장된 보호된 리소스에 대한 액세스를 제공하는 JSON 웹 토큰(JWT)을 반환합니다. 응용 프로그램 배포 시 사용자는 오류를 보고하고 보호된 콘텐츠에 액세스할 수 없습니다. 솔루션 설계자는 사용자가 보호된 콘텐츠에 액세스할 수 있도록 적절한 권한을 제공하여 이 문제를 해결해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon Cognito 자격 증명 풀을 업데이트하여 보호된 콘텐츠에 액세스하기 위한 적절한 IAM 역할을 맡습니다.",
      "B": "애플리케이션이 보호된 콘텐츠에 액세스할 수 있도록 S3 ACL을 업데이트합니다.",
      "C": "애플리케이션을 Amazon S3 에 재배포하여 S3 버킷의 최종적으로 일관된 읽기가 보호된 콘텐츠에 액세스하는 사용자의 기능에 영향을 미치지 않도록 합니다.",
      "D": "자격 증명 풀 내에서 사용자 지정 속성 매핑을 사용하고 사용자에게 보호된 콘텐츠에 액세스할 수 있는 적절한 권한을 부여하도록 Amazon Cognito 풀을 업데이트합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Cognito 자격 증명 풀 — 인증된 사용자에게 임시 AWS 자격증명(IAM 역할) 제공\n▸ JWT 토큰 — 사용자 인증만 수행, S3 접근 권한은 IAM 역할에서 나옴\n▸ IAM 역할 — S3 버킷 접근 정책 정의, 실제 권한 부여 메커니즘\n\n【정답 포인트】\n▸ \"JWT 반환\" → 인증 완료, 권한 부족이 문제\n▸ \"접근할 수 없음\" → IAM 역할 정책 확인 및 수정 필요\n▸ \"자격 증명 풀 업데이트\" → IAM 역할 맡기(assume) 설정으로 권한 부여\n\n【오답 체크】\n(B) S3 ACL은 레거시, 정책 기반 접근 제어보다 효과 없음\n(C) 재배포는 일관성 문제 해결 안 함, 권한 부족이 근본 원인\n(D) 속성 매핑은 추가 정보 전달용, 권한 부여와 무관\n\n【시험 포인트】\n패턴: \"JWT\" + \"접근 불가\" = 인증 ○, 권한 ✗ → 자격 증명 풀 IAM 역할 확인\n매핑: Cognito 흐름 → 인증(JWT) → 자격 증명 풀(임시 IAM 역할) → S3 접근"
  },
  {
    "id": 326,
    "question": "이미지 호스팅 회사는 대규모 자산을 Amazon S3 Standard 버킷에 업로드합니다. 회사는 S3 API 를 사용하여 멀티파트 업로드를 병렬로 사용하고 동일한 객체가 다시 업로드되면 덮어씁니다. 업로드 후 처음 30 일 동안 개체에 자주 액세스합니다. 개체는 30 일 후에 덜 자주 사용되지만 각 개체에 대한 액세스 패턴은 일관되지 않습니다. 회사는 저장된 자산의 고가용성과 탄력성을 유지하면서 S3 스토리지 비용을 최적화해야 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자가 권장해야 하는 작업 조합은 무엇입니까? (두 가지를 선택하세요.)",
    "options": {
      "A": "30일 후에 자산을 S3 Intelligent-Tiering으로 이동합니다.",
      "B": "불완전한 멀티파트 업로드를 정리하도록 S3 수명 주기 정책을 구성합니다.",
      "C": "만료된 개체 삭제 마커를 정리하도록 S3 수명 주기 정책을 구성합니다.",
      "D": "30일 후에 자산을 S3 Standard-Infrequent Access(S3 Standard-IA)로 이동합니다.",
      "E": "30일 후 자산을 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 이동합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ S3 Intelligent-Tiering — 접근 패턴 자동 분석, 최적 스토리지 클래스로 자동 이동\n▸ 불완전한 멀티파트 업로드 — 실패한 부분 업로드 조각, 저장소 낭비 → 정리 필요\n▸ \"접근 패턴 일관되지 않음\" → 수동 클래스 선택 불가, 자동 최적화 필요\n\n【정답 포인트】\n▸ \"30일 후 덜 자주\" + \"패턴 불일관\" → 수동 Standard-IA/One Zone 선택 불가\n▸ Intelligent-Tiering → 자동으로 접근 패턴 모니터, 비용 최소화\n▸ \"멀티파트 업로드\" + \"덮어씀\" → 불완전 조각 정리 필수 (비용 절감)\n\n【오답 체크】\n(D) Standard-IA는 최소 30일 저장료 + 검색료, 패턴 불일관하면 낭비\n(E) One Zone-IA는 가용성 부족, \"고가용성 유지\" 요구사항 위배\n(C) 삭제 마커는 객체 삭제 후 버전 추적용, 멀티파트와 무관\n\n【시험 포인트】\n패턴: \"접근 불일관\" → Intelligent-Tiering | \"멀티파트\" → 수명주기로 정리\n조합: (A+B) = 비용 최소화 + 저장소 정리 (고가용성 유지O)"
  },
  {
    "id": 327,
    "question": "솔루션 설계자는 Amazon EC2 인스턴스를 호스팅하는 VPC 네트워크를 보호해야 합니다. EC2 인스턴스는 매우 민감한 데이터를 포함하고 프라이빗 서브넷에서 실행됩니다. 회사 정책에 따라 VPC 에서 실행되는 EC2 인스턴스는 타사 URL 을 사용하는 소프트웨어 제품 업데이트를 위해 인터넷에서 승인된 타사 소프트웨어 리포지토리에만 액세스할 수 있습니다. 다른 인터넷 트래픽은 차단되어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "아웃바운드 트래픽을 AWS 네트워크 방화벽 방화벽으로 라우팅하도록 프라이빗 서브넷의 라우팅 테이블을 업데이트합니다. 도메인 목록 규칙 그룹을 구성합니다.",
      "B": "AWS WAF 웹 ACL 을 설정합니다. 소스 및 대상 IP 주소 범위 집합을 기반으로 트래픽 요청을 필터링하는 사용자 지정 규칙 집합을 만듭니다.",
      "C": "엄격한 인바운드 보안 그룹 규칙을 구현합니다. URL 을 지정하여 인터넷에서 승인된 소프트웨어 리포지토리에 대한 트래픽만 허용하는 아웃바운드 규칙을 구성합니다.",
      "D": "EC2 인스턴스 앞에 Application Load Balancer(ALB)를 구성합니다. 모든 아웃바운드 트래픽을 ALB로 보냅니다. 인터넷에 대한 아웃바운드 액세스를 위해 ALB의 대상 그룹에서 URL 기반 규칙 리스너를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Network Firewall — 계층 3/4/7(도메인 기반) 필터링, 아웃바운드 트래픽 제어\n▸ 도메인 목록 규칙 — 특정 URL/도메인만 허용, 다른 트래픽 차단\n▸ \"승인된 타사 URL\" → L7 검사(도메인 기반) 필요\n\n【정답 포인트】\n▸ \"도메인 목록\" + \"특정 URL 제한\" → Network Firewall 도메인 필터링만 가능\n▸ 아웃바운드 제어 → 라우팅 테이블에서 NFW로 트래픽 강제\n▸ 프라이빗 서브넷 → NAT 대신 NFW + 라우팅으로 상세 제어\n\n【오답 체크】\n(B) WAF는 ALB/CloudFront 앞의 웹(L7) 필터링용, 일반 아웃바운드 제어 불가\n(C) 보안 그룹은 URL 지정 불가 (IP/포트만), L7 도메인 필터링 미지원\n(D) ALB는 인바운드(southbound) 로드밸런싱용, 아웃바운드 필터 불가\n\n【시험 포인트】\n패턴: \"도메인/URL 제한\" → Network Firewall | \"IP 범위 제한\" → 보안 그룹\n매핑: 아웃바운드 + 도메인 필터 = NFW 도메인 목록 규칙"
  },
  {
    "id": 328,
    "question": "한 회사가 AWS 클라우드에서 3 계층 전자상거래 애플리케이션을 호스팅하고 있습니다. 회사는 Amazon S3 에서 웹사이트를 호스팅하고 웹사이트를 판매 요청을 처리하는 API 와 통합합니다. 이 회사는 ALB(Application Load Balancer) 뒤에 있는 3 개의 Amazon EC2 인스턴스에서 API 를 호스팅합니다. API 는 판매 요청을 비동기식으로 처리하는 백엔드 작업자와 함께 정적 및 동적 프런트 엔드 콘텐츠로 구성됩니다. 회사는 신제품 출시 이벤트 기간 동안 판매 요청 건수가 급격하게 급증할 것으로 예상하고 있다. 모든 요청이 성공적으로 처리되도록 하려면 솔루션 설계자가 무엇을 권장해야 합니까?",
    "options": {
      "A": "동적 콘텐츠에 대한 Amazon CloudFront 배포를 추가합니다. 트래픽 증가를 처리하기 위해 EC2 인스턴스 수를 늘립니다.",
      "B": "정적 콘텐츠에 대한 Amazon CloudFront 배포를 추가합니다. Auto Scaling 그룹에 EC2 인스턴스를 배치하여 네트워크 트래픽을 기반으로 새 인스턴스를 시작합니다.",
      "C": "동적 콘텐츠에 대한 Amazon CloudFront 배포를 추가합니다. ALB 앞에 Amazon ElastiCache 인스턴스를 추가하여 API가 처리할 트래픽을 줄입니다.",
      "D": "정적 콘텐츠에 대한 Amazon CloudFront 배포를 추가합니다. Amazon Simple Queue Service(Amazon SQS) 대기열을 추가하여 나중에 EC2 인스턴스에서 처리할 수 있도록 웹 사이트에서 요청을 수신합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ CloudFront (정적 콘텐츠) — S3 객체(HTML/CSS/이미지) 캐시, 엣지 배포\n▸ SQS 큐 — 요청 임시 저장, 백엔드 비동기 처리, 스파이크 흡수\n▸ \"판매 요청\" + \"비동기\" → 큐 기반 처리 구조 필요\n\n【정답 포인트】\n▸ \"급격한 급증\" → 요청을 즉시 처리 불가, 큐에 버퍼링 필요\n▸ \"정적 콘텐츠\" → CloudFront 캐시 (S3 로드 감소)\n▸ \"비동기 백엔드\" → SQS 큐로 비동기 처리, 동기 응답 불필요\n▸ \"모든 요청 성공\" → 큐 덕분 유실 없음, Auto Scaling 대기열 처리\n\n【오답 체크】\n(A) 동적(API) CloudFront는 TTL 짧음, 캐시 효율 낮음 · Auto Scaling만은 부족\n(B) 자동 스케일링은 좋으나 요청 유실 가능, 큐 없이 스파이크 흡수 불가\n(C) ElastiCache는 읽기 캐시용, 쓰기 요청(판매)에 효과 없음\n\n【시험 포인트】\n패턴: \"스파이크\" + \"비동기\" = 큐 (SQS/SQS) | \"정적\" = CloudFront\n조합: (정적 CDN + 비동기 큐) = 탄성 + 유실 방지"
  },
  {
    "id": 329,
    "question": "보안 감사 결과 Amazon EC2 인스턴스가 정기적으로 패치되지 않는 것으로 나타났습니다. 솔루션 설계자는 대규모 EC2 인스턴스 전체에 대해 정기적인 보안 스캔을 실행할 솔루션을 제공해야 합니다. 또한 솔루션은 정기적으로 EC2 인스턴스를 패치하고 각 인스턴스의 패치 상태에 대한 보고서를 제공해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스에서 소프트웨어 취약성을 스캔하도록 Amazon Macie 를 설정합니다. 각 EC2 인스턴스에서 cron 작업을 설정하여 정기적인 일정에 따라 인스턴스를 패치합니다.",
      "B": "계정에서 Amazon GuardDuty 를 켭니다. 소프트웨어 취약성에 대해 EC2 인스턴스를 스캔하도록 GuardDuty 를 구성합니다. 정기적인 일정에 따라 EC2 인스턴스를 패치하도록 AWS Systems Manager Session Manager를 설정합니다.",
      "C": "소프트웨어 취약성에 대해 EC2 인스턴스를 스캔하도록 Amazon Detective를 설정합니다. 정기적인 일정에 따라 EC2 인스턴스를 패치하도록 Amazon EventBridge 예약 규칙을 설정합니다.",
      "D": "계정에서 Amazon Inspector 를 켭니다. 소프트웨어 취약성에 대해 EC2 인스턴스를 스캔하도록 Amazon Inspector 를 구성합니다. 정기적인 일정에 따라 EC2 인스턴스를 패치하도록 AWS Systems Manager Patch Manager를 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Amazon Inspector — EC2 소프트웨어 취약성(CVE) 스캔, 상세 보고서 제공\n▸ Systems Manager Patch Manager — 정기 패치 배포, 패치 상태 추적\n▸ \"보안 스캔\" + \"패치\" + \"보고서\" → Inspector + Patch Manager 조합\n\n【정답 포인트】\n▸ \"취약성 스캔\" → Amazon Inspector만 가능 (Macie는 S3 데이터, GuardDuty는 위협 탐지)\n▸ \"정기 패치\" + \"보고서\" → Patch Manager (자동화 + 상태 대시보드)\n▸ \"대규모 EC2\" → Systems Manager 기반 대량 관리\n\n【오답 체크】\n(A) Macie는 S3 데이터 분류용, EC2 취약성 스캔 불가\n(B) GuardDuty는 악성 활동 탐지(위협), 취약성 스캔 아님 · Session Manager는 패치 자동화 없음\n(C) Detective는 위협 조사 도구, 취약성 스캔 미지원 · EventBridge는 패치 배포 불가\n\n【시험 포인트】\n패턴: \"EC2 취약성\" → Inspector | \"패치 자동화\" → Patch Manager\n조합: (Inspector + Patch Manager) = 보안 거버넌스 완성"
  },
  {
    "id": 330,
    "question": "회사에서 Amazon RDS DB 인스턴스에 데이터를 저장할 계획입니다. 회사는 미사용 데이터를 암호화해야 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS Key Management Service(AWS KMS)에서 키를 생성합니다. DB 인스턴스에 대한 암호화를 활성화합니다.",
      "B": "암호화 키를 생성합니다. AWS Secrets Manager에 키를 저장합니다. 키를 사용하여 DB 인스턴스를 암호화합니다.",
      "C": "AWS Certificate Manager(ACM)에서 인증서를 생성합니다. 인증서를 사용하여 DB 인스턴스에서 SSL/TLS를 활성화합니다.",
      "D": "AWS Identity and Access Management(IAM)에서 인증서를 생성합니다. 인증서를 사용하여 DB 인스턴스에서 SSL/TLS를 활성화합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS KMS — 데이터 암호화 키(DEK) 관리, 미사용(at-rest) 암호화\n▸ Secrets Manager — 자격증명 저장소, 암호화 키 저장소 아님\n▸ SSL/TLS — 전송 중(in-transit) 암호화, 미사용 암호화와 별개\n\n【정답 포인트】\n▸ \"미사용 데이터 암호화\" → at-rest encryption → KMS 필수\n▸ RDS at-rest → KMS 키로 스토리지 자동 암호화 (DB 레벨 활성화)\n▸ KMS + RDS = AWS 관리형 자동 암호화, 키 로테이션 자동\n\n【오답 체크】\n(B) Secrets Manager는 암호/자격증명 저장, at-rest 암호화 메커니즘 아님\n(C) \n(D) SSL/TLS는 전송 중 암호화, 미사용 암호화와 무관 · ACM/IAM 인증서도 at-rest 미사용\n\n【시험 포인트】\n패턴: \"미사용 암호화\" → KMS | \"전송 중 암호화\" → SSL/TLS\n매핑: RDS + KMS = 자동 at-rest 암호화 (키 관리 자동)"
  },
  {
    "id": 331,
    "question": "회사는 30일 이내에 데이터 센터에서 AWS 클라우드로 20TB의 데이터를 마이그레이션해야 합니다. 회사의 네트워크 대역폭은 15Mbps 로 제한되며 사용률이 70%를 초과할 수 없습니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS Snowball을 사용하십시오.",
      "B": "AWS DataSync를 사용합니다.",
      "C": "안전한 VPN 연결을 사용하십시오.",
      "D": "Amazon S3 Transfer Acceleration을 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Snowball — 물리적 장치로 데이터 운송, 대용량 오프라인 마이그레이션\n▸ DataSync — 네트워크 기반, 최적화된 전송 프로토콜\n▸ \"15Mbps × 70% = 10.5Mbps 실제 대역폭\" → 20TB를 30일 전송 불가능\n\n【정답 포인트】\n▸ \"20TB\" + \"30일\" + \"10.5Mbps 제한\" → 네트워크 마이그레이션 불가능 (계산: 20TB / 10.5Mbps ≈ 1,500시간 > 720시간)\n▸ \"매우 제한적 대역폭\" → Snowball 물리 배송 유일한 실용적 선택\n▸ Snowball은 대기 시간 없고 네트워크 영향 없음\n\n【오답 체크】\n(B) DataSync는 네트워크 기반, 10.5Mbps로 불충분\n(C) VPN도 네트워크 의존, 대역폭 제한 문제 해결 불가\n(D) S3 Transfer Acceleration도 네트워크 기반, 낮은 대역폭 극복 불가\n\n【시험 포인트】\n패턴: \"제한 대역폭\" + \"대용량\" = Snowball | \"충분 대역폭\" = DataSync\n계산: (데이터량 × 8 / 대역폭) vs 시간 제약 → Snowball 판단"
  },
  {
    "id": 332,
    "question": "회사는 직원들에게 기밀 및 민감한 파일에 대한 안전한 액세스를 제공해야 합니다. 회사는 권한이 있는 사용자만 파일에 액세스할 수 있기를 원합니다. 파일은 직원의 장치에 안전하게 다운로드되어야 합니다. 파일은 온프레미스 Windows 파일 서버에 저장됩니다. 그러나 원격 사용량의 증가로 인해 파일 서버의 용량이 부족합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "파일 서버를 퍼블릭 서브넷의 Amazon EC2 인스턴스로 마이그레이션합니다. 인바운드 트래픽을 직원의 IP 주소로 제한하도록 보안 그룹을 구성합니다.",
      "B": "파일을 Amazon FSx for Windows File Server 파일 시스템으로 마이그레이션합니다. Amazon FSx 파일 시스템을 온프레미스 Active Directory 와 통합합니다. AWS 클라이언트 VPN을 구성합니다.",
      "C": "파일을 Amazon S3 로 마이그레이션하고 프라이빗 VPC 엔드포인트를 생성합니다. 다운로드를 허용하려면 서명된 URL을 만듭니다.",
      "D": "파일을 Amazon S3 로 마이그레이션하고 퍼블릭 VPC 엔드포인트를 생성합니다. 직원이 AWS IAM Identity Center(AWS Single Sign-On)로 로그인하도록 허용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon FSx for Windows File Server — SMB/CIFS 프로토콜, AD 통합, Windows 네이티브\n▸ Active Directory 통합 — 온프레미스 AD 사용자 그대로 권한 관리\n▸ AWS Client VPN — 원격 접근 보안 터널, 기존 자격증명 활용\n\n【정답 포인트】\n▸ \"Windows 파일 서버\" + \"용량 부족\" → FSx for Windows (최적화된 마이그레이션)\n▸ \"기밀 파일\" + \"AD 권한\" → FSx + AD 통합 (권한 관리 일관성)\n▸ \"원격 접근\" → Client VPN (안전한 터널)\n▸ \"기존 자격증명\" 재사용 → AD 통합으로 추가 인증 구조 불필요\n\n【오답 체크】\n(A) EC2 + 퍼블릭은 보안 위험, SMB 노출\n(C) S3는 객체 저장소, 파일 서버 같은 SMB 프로토콜 미지원 (S3 마운트는 복잡)\n(D) S3 + IAM Identity Center는 파일 공유가 아닌 콘솔 인증, 기존 AD 연계 불편\n\n【시험 포인트】\n패턴: \"Windows 파일 서버\" + \"AD\" = FSx | \"객체 저장소\" = S3\n요구사항: \"안전+권한+대용량\" → FSx + AD + VPN 삼각형"
  },
  {
    "id": 333,
    "question": "회사의 애플리케이션은 ALB(Application Load Balancer) 뒤의 Amazon EC2 인스턴스에서 실행됩니다. 인스턴스는 여러 가용 영역에 걸쳐 Amazon EC2 Auto Scaling 그룹에서 실행됩니다. 매월 1 일 자정에 월말 재무 계산 일괄 처리가 실행되면 응용 프로그램이 훨씬 느려집니다. 이로 인해 EC2 인스턴스의 CPU 사용률이 즉시 100%에 도달하여 애플리케이션이 중단됩니다. 애플리케이션이 워크로드를 처리하고 다운타임을 방지할 수 있도록 하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "ALB 앞에 Amazon CloudFront 배포를 구성합니다.",
      "B": "CPU 사용률을 기반으로 EC2 Auto Scaling 단순 조정 정책을 구성합니다.",
      "C": "월별 일정을 기반으로 EC2 Auto Scaling 예약 조정 정책을 구성합니다.",
      "D": "EC2 인스턴스에서 일부 워크로드를 제거하도록 Amazon ElastiCache를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 예약 조정(Scheduled Scaling) — 미리 정해진 시간에 용량 사전 조정\n▸ \"매월 1일 자정\" → 예측 가능한 일정 → 예약 조정 최적\n▸ \"사전 확장\" → 부하 급증 전 미리 인스턴스 증가\n\n【정답 포인트】\n▸ \"매월 1일\" + \"계획된 배치\" → 예측 가능한 스파이크\n▸ \"즉시 100% CPU\" → 반응 조정(단순) 너무 늦음, 예약 필수\n▸ \"자정 30분 전\" 미리 확장 → 부하 시작 시점에 용량 준비\n▸ 예약 조정은 비용 효율적 (적응형보다 정확)\n\n【오답 체크】\n(A) CloudFront는 동적 콘텐츠 캐시 불가, 계산 부하 저감 안 됨\n(B) 단순 조정은 CPU 100% 도달 후 반응, 이미 중단됨\n(D) ElastiCache는 읽기 캐시, 계산(배치) 부하 저감 불가\n\n【시험 포인트】\n패턴: \"예측 가능한 일정\" → 예약 조정 | \"예측 불가\" → 동적/단순 조정\n전략: 월말 배치 = 자정 전 미리 확장, 일과 후 축소"
  },
  {
    "id": 334,
    "question": "회사는 고객이 온프레미스 Microsoft Active Directory 를 사용하여 Amazon S3 에 저장된 파일을 다운로드할 수 있는 기능을 제공하려고 합니다. 고객의 애플리케이션은 SFTP 클라이언트를 사용하여 파일을 다운로드합니다. 운영 오버헤드를 최소화하고 고객의 애플리케이션을 변경하지 않으면서 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 용 SFTP 로 AWS Transfer Family 를 설정합니다. 통합된 Active Directory 인증을 구성합니다.",
      "B": "온프레미스 클라이언트를 Amazon S3 와 동기화하도록 AWS DMS(AWS Database Migration Service)를 설정합니다. 통합된 Active Directory 인증을 구성합니다.",
      "C": "AWS IAM Identity Center(AWS Single Sign-On)를 사용하여 온프레미스 위치와 S3 위치 간에 동기화하도록 AWS DataSync를 설정합니다.",
      "D": "SFTP로 Windows Amazon EC2 인스턴스를 설정하여 온프레미스 클라이언트를 Amazon S3와 연결합니다. AWS Identity and Access Management(IAM)를 통합합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Transfer Family — SFTP/FTPS/FTP 프로토콜 지원, S3 백엔드\n▸ Transfer Family + Active Directory — AD 자격증명으로 S3 접근 인증\n▸ \"SFTP 클라이언트\" + \"AD 통합\" → Transfer Family 유일한 선택\n\n【정답 포인트】\n▸ \"SFTP 프로토콜\" → Transfer Family만 S3에 SFTP 제공\n▸ \"AD 인증\" → Transfer Family 기본 AD 연동 기능\n▸ \"앱 변경 없음\" → SFTP는 표준, 별도 라이브러리 불필요\n▸ \"운영 오버헤드 최소\" → AWS 관리형 서비스\n\n【오답 체크】\n(B) DMS는 데이터베이스 마이그레이션, 파일 동기화 아님 · 동기화 구조 부적절\n(C) DataSync는 서버 간 데이터 동기화, SFTP 프로토콜 미지원\n(D) EC2 + SFTP는 수동 관리 필요 (인증서, 액세스 제어), 오버헤드 증가\n\n【시험 포인트】\n패턴: \"SFTP\" + \"S3\" = Transfer Family | \"AD 인증\" → Transfer Family AD 통합\n조합: Transfer Family = SFTP + S3 + AD 삼각형 완성"
  },
  {
    "id": 335,
    "question": "회사에서 갑자기 수요가 증가하고 있습니다. 회사는 Amazon 머신 이미지(AMI)에서 대규모 Amazon EC2 인스턴스를 프로비저닝해야 합니다. 인스턴스는 Auto Scaling 그룹에서 실행됩니다. 회사는 요구 사항을 충족하기 위해 최소 초기화 대기 시간을 제공하는 솔루션이 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "aws ec2 register-image 명령을 사용하여 스냅샷에서 AMI 를 생성합니다. AWS Step Functions를 사용하여 Auto Scaling 그룹의 AMI를 교체하십시오.",
      "B": "스냅샷에서 Amazon Elastic Block Store(Amazon EBS) 빠른 스냅샷 복원을 활성화합니다. 스냅샷을 사용하여 AMI 를 프로비저닝합니다. Auto Scaling 그룹의 AMI 를 새 AMI 로 교체합니다.",
      "C": "Amazon Data Lifecycle Manager(Amazon DLM)에서 AMI 생성을 활성화하고 수명 주기 규칙을 정의합니다. Auto Scaling 그룹에서 AMI 를 수정하는 AWS Lambda 함수를 생성합니다.",
      "D": "Amazon EventBridge를 사용하여 AMI를 프로비저닝하는 AWS Backup 수명 주기 정책을 호출합니다. EventBridge에서 Auto Scaling 그룹 용량 제한을 이벤트 소스로 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ EBS 빠른 스냅샷 복원(FSR) — 스냅샷 초기화 시간 단축 (90%+ 개선)\n▸ \"최소 초기화 대기 시간\" → 인스턴스 부팅 시간 최소화\n▸ AMI ← 스냅샷 ← FSR → 빠른 볼륨 생성\n\n【정답 포인트】\n▸ \"최소 초기화 대기\" → EBS FSR 기술만 가능\n▸ FSR은 스냅샷 복원 시간 획기적 단축 (수분 → 초단위)\n▸ Auto Scaling 그룹 + FSR 스냅샷 AMI = 빠른 인스턴스 기동\n▸ 비용 효율적 (스냅샷 기반)\n\n【오답 체크】\n(A) register-image + Step Functions는 수동 프로세스, 초기화 시간 개선 안 함\n(C) DLM은 스냅샷 관리, FSR 미사용 → 초기화 시간 개선 없음\n(D) EventBridge + Backup은 복구 오케스트레이션, 스냅샷 성능 향상 안 함\n\n【시험 포인트】\n패턴: \"부팅 시간 최소화\" → EBS FSR | \"일반 스냅샷\" = 느린 복원\n최적화: FSR 스냅샷 + AMI = 초단위 인스턴스 프로비저닝"
  },
  {
    "id": 336,
    "question": "회사는 Amazon Aurora MySQL DB 클러스터를 스토리지로 사용하는 다중 계층 웹 애플리케이션을 호스팅합니다. 애플리케이션 계층은 Amazon EC2 인스턴스에서 호스팅됩니다. 회사의 IT 보안 지침에 따라 데이터베이스 자격 증명을 암호화하고 14일마다 교체해야 합니다. 최소한의 운영 노력으로 이 요구 사항을 충족하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": {
      "A": "새 AWS Key Management Service(AWS KMS) 암호화 키를 생성합니다. AWS Secrets Manager 를 사용하여 적절한 자격 증명과 함께 KMS 키를 사용하는 새 암호를 생성합니다. 암호를 Aurora DB 클러스터와 연결합니다. 14일의 사용자 지정 순환 기간을 구성합니다.",
      "B": "AWS Systems Manager Parameter Store 에서 두 개의 매개변수를 생성합니다. 하나는 사용자 이름을 문자열 매개변수로 사용하고 다른 하나는 SecureString 유형을 암호로 사용합니다. 암호 매개변수에 대해 AWS Key Management Service(AWS KMS) 암호화를 선택하고 애플리케이션 계층에서 이러한 매개변수를 로드합니다. 14일마다 암호를 교체하는 AWS Lambda 함수를 구현합니다.",
      "C": "자격 증명이 포함된 파일을 AWS KMS(AWS Key Management Service) 암호화 Amazon Elastic File System(Amazon EFS) 파일 시스템에 저장합니다. 애플리케이션 계층의 모든 EC2 인스턴스에 EFS 파일 시스템을 탑재합니다. 응용 프로그램이 파일을 읽을 수 있고 슈퍼 사용자만 파일을 수정할 수 있도록 파일 시스템의 파일에 대한 액세스를 제한합니다. 14 일마다 Aurora 에서 키를 교체하고 새 자격 증명을 파일에 쓰는 AWS Lambda 함수를 구현합니다.",
      "D": "애플리케이션이 자격 증명을 로드하는 데 사용하는 AWS KMS(AWS Key Management Service) 암호화 Amazon S3 버킷에 자격 증명이 포함된 파일을 저장합니다. 올바른 자격 증명이 사용되도록 정기적으로 파일을 응용 프로그램에 다운로드하십시오. 14일마다 Aurora 자격 증명을 교체하고 이 자격 증명을 S3 버킷의 파일에 업로드하는 AWS Lambda 함수를 구현합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Secrets Manager — 자격증명 저장소, KMS 암호화, 자동 순환(rotation)\n▸ \"14일 자동 순환\" → Secrets Manager 기본 기능\n▸ \"암호화\" + \"교체\" + \"최소 운영\" → Secrets Manager 설계의 정확한 용도\n\n【정답 포인트】\n▸ \"암호화\" → Secrets Manager + KMS (자동 암호화)\n▸ \"14일 교체\" → Secrets Manager 자동 순환(Rotation) 정책 설정\n▸ \"최소 운영\" → AWS 관리형, 별도 Lambda/수동 작업 불필요\n▸ \"RDS 연결\" → Secrets Manager가 RDS 암호 직접 업데이트 지원\n\n【오답 체크】\n(B) Parameter Store는 순환 기능 없음, Lambda로 수동 교체 → 운영 오버헤드 증가\n(C) EFS 파일 저장은 구식, Lambda 수동 관리 필수 → 오버헤드 증가\n(D) S3 파일 저장은 불편, 주기적 다운로드 필요 → 운영 비효율\n\n【시험 포인트】\n패턴: \"암호화 + 자동 순환\" → Secrets Manager | \"수동 관리\" → Parameter Store\n매핑: Secrets Manager = KMS 암호화 + 자동 Rotation + RDS 통합"
  },
  {
    "id": 337,
    "question": "회사에서 AWS 에 웹 애플리케이션을 배포했습니다. 이 회사는 조정 요구 사항을 지원하기 위해 기본 DB 인스턴스와 5 개의 읽기 전용 복제본을 사용하여 MySQL 용 Amazon RDS에서 백엔드 데이터베이스를 호스팅합니다. 읽기 전용 복제본은 기본 DB 인스턴스보다 1 초 이상 뒤처져서는 안 됩니다. 데이터베이스는 정기적으로 예약된 저장 프로시저를 실행합니다. 웹 사이트의 트래픽이 증가함에 따라 복제본은 피크 로드 기간 동안 추가 지연을 경험합니다. 솔루션 설계자는 복제 지연을 최대한 줄여야 합니다. 솔루션 설계자는 애플리케이션 코드에 대한 변경을 최소화하고 지속적인 운영 오버헤드를 최소화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터베이스를 Amazon Aurora MySQL 로 마이그레이션합니다. 읽기 전용 복제본을 Aurora 복제본으로 교체하고 Aurora Auto Scaling 을 구성합니다. 저장 프로시저를 Aurora MySQL 기본 함수로 바꿉니다.",
      "B": "데이터베이스 앞에 Redis 클러스터용 Amazon ElastiCache 를 배포합니다. 응용 프로그램이 데이터베이스를 쿼리하기 전에 캐시를 확인하도록 응용 프로그램을 수정하십시오. 저장 프로시저를 AWS Lambda 함수로 바꿉니다.",
      "C": "데이터베이스를 Amazon EC2 인스턴스에서 실행되는 MySQL 데이터베이스로 마이그레이션합니다. 모든 복제본 노드에 대해 컴퓨팅에 최적화된 대규모 EC2 인스턴스를 선택합니다. EC2 인스턴스에서 저장 프로시저를 유지합니다.",
      "D": "데이터베이스를 Amazon DynamoDB 로 마이그레이션합니다. 필요한 처리량을 지원하고 온디맨드 용량 확장을 구성하기 위해 많은 수의 RCU(읽기 용량 단위)를 프로비저닝합니다. 저장 프로시저를 DynamoDB 스트림으로 바꿉니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Aurora MySQL — 저지연 복제(밀리초 단위), 복제본 Auto Scaling\n▸ \"복제 지연 최소화\" → Aurora가 RDS 표준보다 우수\n▸ \"저장 프로시저\" → Aurora 함수로 변환, 코드 변경 최소\n\n【정답 포인트】\n▸ \"복제 지연\" → Aurora 고속 복제 (RDS 바이너리 로그보다 빠름)\n▸ \"1초 이내\" 지연 요구 → Aurora의 밀리초 복제만 충족\n▸ \"피크 시간 부하\" → Aurora Auto Scaling으로 읽기 처리량 동적 증가\n▸ \"저장 프로시저\" → Aurora 함수로 비교적 쉬운 마이그레이션\n▸ \"최소 코드 변경\" → SQL 기반 함수 변환\n\n【오답 체크】\n(B) 캐시는 읽기 부하 감소, 복제 지연 직접 해결 불가 · 저장 프로시저는 캐시 불가\n(C) EC2 MySQL은 수동 관리, 복제 지연 개선 미보장 · 운영 오버헤드 증가\n(D) DynamoDB는 SQL 기반이 아님, 저장 프로시저 변환 불가능\n\n【시험 포인트】\n패턴: \"복제 지연\" → Aurora | \"읽기 부하\" → ElastiCache/Aurora 복제\n마이그레이션: RDS → Aurora = 최소 코드 변경 + 복제 성능 극대화"
  },
  {
    "id": 338,
    "question": "솔루션 설계자는 대용량 SaaS(Software as a Service) 플랫폼에 대한 재해 복구(DR) 계획을 만들어야 합니다. 플랫폼의 모든 데이터는 Amazon Aurora MySQL DB 클러스터에 저장됩니다. DR 계획은 데이터를 보조 AWS 리전에 복제해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "보조 리전의 Aurora 클러스터에 MySQL 바이너리 로그 복제를 사용합니다. 보조 리전에서 Aurora 클러스터용 DB 인스턴스 1개를 프로비저닝합니다.",
      "B": "DB 클러스터에 대한 Aurora 글로벌 데이터베이스를 설정합니다. 설정이 완료되면 보조 리전에서 DB 인스턴스를 제거합니다.",
      "C": "AWS Database Migration Service(AWS DMS)를 사용하여 데이터를 보조 리전의 Aurora 클러스터에 지속적으로 복제합니다. 보조 리전에서 DB 인스턴스를 제거합니다.",
      "D": "DB 클러스터에 대한 Aurora 글로벌 데이터베이스를 설정합니다. 보조 리전에서 최소 하나의 DB 인스턴스를 지정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Aurora 글로벌 데이터베이스 — 다중 리전 자동 복제, 읽기 가용성 높음\n▸ \"보조 인스턴스 필요\" → 글로벌 DB는 최소 1개 인스턴스 필수 (읽기 처리)\n▸ \"비용 효율\" → 글로벌 DB가 DMS/바이너리 로그보다 관리 효율\n\n【정답 포인트】\n▸ \"DR 계획\" + \"다중 리전\" → Aurora 글로벌 데이터베이스 최적\n▸ \"자동 복제\" → 글로벌 DB (설정 후 자동 동기화)\n▸ \"비용 효율\" → 글로벌 DB는 리전당 최소 1 인스턴스, DMS/바이너리보다 저비용\n▸ \"인스턴스 제거 불가\" → 읽기 쿼리 처리 필요 (최소 1개 필수)\n\n【오답 체크】\n(A) 바이너리 로그는 복제 지연 가능, 글로벌 DB보다 낮은 신뢰성\n(B) \"인스턴스 제거\" → 보조 리전에서 쿼리 불가, DR 기능 저하\n(C) DMS는 지속 복제 + 운영 오버헤드, 글로벌 DB보다 비용 높음\n\n【시험 포인트】\n패턴: \"다중 리전 DR\" + \"자동 복제\" = Aurora 글로벌 DB\n비용:\n(A) < 글로벌(최소 1) <\n(C) | 신뢰성: 글로벌 >\n(A) >\n(C)"
  },
  {
    "id": 339,
    "question": "회사에는 Amazon RDS MySQL DB 인스턴스에서 정보를 검색하는 자격 증명이 내장된 사용자 지정 애플리케이션이 있습니다. 경영진은 최소한의 프로그래밍 노력으로 애플리케이션을 더 안전하게 만들어야 한다고 말합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS Key Management Service(AWS KMS)를 사용하여 키를 생성합니다. AWS KMS에서 데이터베이스 자격 증명을 로드하도록 애플리케이션을 구성합니다. 자동 키 순환을 활성화합니다.",
      "B": "애플리케이션 사용자를 위해 RDS for MySQL 데이터베이스에서 자격 증명을 생성하고 자격 증명을 AWS Secrets Manager에 저장합니다. Secrets Manager에서 데이터베이스 자격 증명을 로드하도록 애플리케이션을 구성합니다. Secret Manager에서 자격 증명을 교체하는 AWS Lambda 함수를 생성합니다.",
      "C": "애플리케이션 사용자를 위해 RDS for MySQL 데이터베이스에서 자격 증명을 생성하고 자격 증명을 AWS Secrets Manager에 저장합니다. Secrets Manager에서 데이터베이스 자격 증명을 로드하도록 애플리케이션을 구성합니다. Secrets Manager 를 사용하여 RDS for MySQL 데이터베이스에서 애플리케이션 사용자의 자격 증명 교체 일정을 설정합니다.",
      "D": "애플리케이션 사용자를 위해 RDS for MySQL 데이터베이스에서 자격 증명을 생성하고 자격 증명을 AWS Systems Manager Parameter Store에 저장합니다. Parameter Store에서 데이터베이스 자격 증명을 로드하도록 애플리케이션을 구성합니다. Parameter Store 를 사용하여 RDS for MySQL 데이터베이스에서 애플리케이션 사용자에 대한 자격 증명 교체 일정을 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Secrets Manager — 자격증명 저장소, 자동 순환, RDS 네이티브 통합\n▸ \"자동 교체\" → Secrets Manager가 RDS 암호 자동 변경 가능\n▸ \"최소 프로그래밍\" → Lambda 수동 개발 대신 Secrets Manager 자동화\n\n【정답 포인트】\n▸ \"내장 자격 증명\" 보안화 → Secrets Manager 저장소 이동\n▸ \"최소 프로그래밍 노력\" → Secrets Manager 자동 순환 (Lambda 불필요)\n▸ \"RDS 통합\" → Secrets Manager가 RDS 사용자 암호 직접 변경\n▸ \"애플리케이션 코드\" → Secrets Manager API 호출 추가만 필요 (간단)\n\n【오답 체크】\n(A) KMS는 키 관리용, 자격증명 저장소 아님 · 순환 자동화 미지원\n(B) Lambda로 수동 교체 → \"최소 프로그래밍\" 위반\n(D) Parameter Store는 순환 기능 없음, RDS 통합 미지원 (수동 교체)\n\n【시험 포인트】\n패턴: \"자격증명 관리\" + \"자동 순환\" = Secrets Manager | \"수동\" = Parameter Store\n통합: Secrets Manager + RDS = 자동 암호 로테이션 (RDS 사용자 직접 변경)"
  },
  {
    "id": 340,
    "question": "미디어 회사는 AWS 에서 웹 사이트를 호스팅합니다. 웹 사이트 애플리케이션의 아키텍처에는 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 인스턴스 플릿과 Amazon Aurora 에서 호스팅되는 데이터베이스가 포함됩니다. 회사의 사이버 보안 팀은 애플리케이션이 SQL 주입에 취약하다고 보고합니다. 회사는 이 문제를 어떻게 해결해야 할까요?",
    "options": {
      "A": "ALB 앞에서 AWS WAF를 사용합니다. 적절한 웹 ACL을 AWS WAF와 연결합니다.",
      "B": "고정 응답으로 SQL 주입에 응답하는 ALB 수신기 규칙을 생성합니다.",
      "C": "모든 SQL 삽입 시도를 자동으로 차단하려면 AWS Shield Advanced에 가입하십시오.",
      "D": "모든 SQL 주입 시도를 자동으로 차단하도록 Amazon Inspector를 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS WAF — 웹 애플리케이션 방화벽, L7 필터링, SQL 주입 탐지/차단\n▸ 웹 ACL — SQL 주입 패턴 감지, 악의적 요청 필터링\n▸ ALB 앞 배치 → 애플리케이션 도달 전 공격 차단\n\n【정답 포인트】\n▸ \"SQL 주입\" → L7 웹 공격, WAF만 탐지 가능\n▸ \"ALB 앞\" → WAF 위치 최적 (백엔드 보호)\n▸ \"웹 ACL\" → SQL 주입 규칙 자동으로 포함\n▸ \"사이버 보안\" → 공격 차단 필수 → WAF 필요\n\n【오답 체크】\n(B) ALB 리스너는 L4(포트/프로토콜), L7 패턴 분석 불가\n(C) Shield Advanced는 DDoS 방어, SQL 주입 미지원\n(D) Inspector는 취약점 스캔, 실시간 공격 차단 불가\n\n【시험 포인트】\n패턴: \"웹 공격\" (SQL, XSS 등) → WAF | \"DDoS\" → Shield | \"취약점\" → Inspector\n배치: ALB ← WAF ← (공격 차단) ← EC2 (보호)"
  },
  {
    "id": 341,
    "question": "회사에는 AWS Lake Formation 에서 관리하는 Amazon S3 데이터 레이크가 있습니다. 이 회사는 데이터 레이크의 데이터를 Amazon Aurora MySQL 데이터베이스에 저장된 운영 데이터와 결합하여 Amazon QuickSight 에서 시각화를 생성하려고 합니다. 회사는 회사의 마케팅 팀이 데이터베이스의 열 하위 집합에만 액세스할 수 있도록 열 수준 권한을 적용하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EMR을 사용하여 데이터베이스에서 QuickSight SPICE 엔진으로 직접 데이터를 수집하십시오. 필요한 열만 포함합니다.",
      "B": "AWS Glue Studio 를 사용하여 데이터베이스에서 S3 데이터 레이크로 데이터를 수집합니다. IAM 정책을 QuickSight 사용자에게 연결하여 열 수준 액세스 제어를 적용합니다. QuickSight에서 Amazon S3를 데이터 원본으로 사용합니다.",
      "C": "AWS Glue Elastic Views 를 사용하여 Amazon S3 의 데이터베이스에 대한 구체화된 보기를 생성합니다. QuickSight 사용자에 대한 열 수준 액세스 제어를 적용하려면 S3 버킷 정책을 생성합니다. QuickSight에서 Amazon S3를 데이터 원본으로 사용합니다.",
      "D": "Lake Formation 청사진을 사용하여 데이터베이스에서 S3 데이터 레이크로 데이터를 수집합니다. Lake Formation 을 사용하여 QuickSight 사용자에 대한 열 수준 액세스 제어를 적용합니다. QuickSight에서 Amazon Athena를 데이터 원본으로 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Lake Formation 청사진 — 데이터 레이크 데이터 수집 자동화\n▸ Lake Formation 권한 — 열 수준(column-level) 접근 제어\n▸ Athena + Lake Formation — 권한 통합 쿼리 (LSAC)\n\n【정답 포인트】\n▸ \"데이터 레이크\" + \"열 수준 권한\" → Lake Formation 권한 관리\n▸ \"Aurora + S3 데이터\" 결합 → Lake Formation 청사진 (자동 수집)\n▸ \"마케팅 팀\" + \"열 제한\" → Lake Formation 권한 (QuickSight 연동)\n▸ \"최소 운영 오버헤드\" → Lake Formation 자동화 (IAM 복잡도 없음)\n\n【오답 체크】\n(A) EMR은 SPICE 집계용, 권한 통제 복잡 · Lake Formation과 무관\n(B) IAM 정책은 S3 객체 수준, 열 수준 제어 불가\n(C) Glue Elastic Views는 뷰 생성, 열 수준 권한 미지원 (S3 정책 불가)\n\n【시험 포인트】\n패턴: \"데이터 레이크 + 행/열 권한\" → Lake Formation | \"IAM\" = 객체 수준만\n통합: Lake Formation (수집+권한) → Athena → QuickSight (일관된 권한)"
  },
  {
    "id": 342,
    "question": "트랜잭션 처리 회사에는 Amazon EC2 인스턴스에서 실행되는 매주 스크립팅된 배치 작업이 있습니다. EC2 인스턴스는 Auto Scaling 그룹에 있습니다. 트랜잭션 수는 다를 수 있지만 각 실행에서 기록되는 기준 CPU 사용률은 60% 이상입니다. 회사는 작업이 실행되기 30 분 전에 용량을 프로비저닝해야 합니다. 현재 엔지니어는 Auto Scaling 그룹 파라미터를 수동으로 수정하여 이 작업을 완료합니다. 회사에는 Auto Scaling 그룹 수에 필요한 용량 추세를 분석할 리소스가 없습니다. 회사는 Auto Scaling 그룹의 원하는 용량을 수정하는 자동화된 방법이 필요합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Auto Scaling 그룹에 대한 동적 조정 정책을 생성합니다. CPU 사용률 메트릭을 기반으로 확장하도록 정책을 구성합니다. 지표의 대상 값을 60%로 설정합니다.",
      "B": "Auto Scaling 그룹에 대한 예약 조정 정책을 생성합니다. 원하는 적정 용량, 최소 용량, 최대 용량을 설정합니다. 반복을 매주로 설정합니다. 일괄 작업이 실행되기 전 30 분으로 시작 시간을 설정합니다.",
      "C": "Auto Scaling 그룹에 대한 예측 조정 정책을 생성합니다. 예측을 기반으로 확장하도록 정책을 구성합니다. 스케일링 지표를 CPU 사용률로 설정합니다. 지표의 대상 값을 60%로 설정합니다. 정책에서 작업이 실행되기 30분 전에 사전 실행되도록 인스턴스를 설정합니다.",
      "D": "Auto Scaling 그룹의 CPU 사용률 지표 값이 60%에 도달하면 AWS Lambda 함수를 호출하는 Amazon EventBridge 이벤트를 생성합니다. Auto Scaling 그룹의 원하는 용량과 최대 용량을 20% 늘리도록 Lambda 함수를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 예측 조정(Predictive Scaling) — ML 기반 예측, 사전 확장\n▸ \"사전 실행\" 옵션 — 부하 예상 시점 전 미리 확장\n▸ \"CPU 60% + 매주\" → 패턴 예측 가능 → 예측 조정 최적\n\n【정답 포인트】\n▸ \"매주 정기 배치\" → 반복 패턴 학습 가능\n▸ \"30분 전 미리\" → 예측 조정의 \"사전 실행\" 기능\n▸ \"CPU 60% 기준\" → 메트릭 기반 예측\n▸ \"최소 운영 오버헤드\" → ML 자동 학습, 수동 설정 불필요\n\n【오답 체크】\n(A) 동적 조정은 CPU 100% 도달 후 반응 → 이미 중단됨 · \"30분 전\" 미달\n(B) 예약은 정확한 시간 필요, \"트랜잭션 수 변동\" 반영 불가\n(D) EventBridge + Lambda는 수동 오버헤드, 규칙 수정 필요\n\n【시험 포인트】\n패턴: \"정기 + 변동\" → 예측 조정 | \"정확 일시\" → 예약 조정 | \"반응\" → 동적 조정\n최적화: 예측 조정 + 사전 실행 = ML 기반 자동 사전 확장"
  },
  {
    "id": 343,
    "question": "솔루션 설계자는 회사의 재해 복구(DR) 아키텍처를 설계하고 있습니다. 이 회사에는 예약된 백업이 있는 프라이빗 서브넷의 Amazon EC2 인스턴스에서 실행되는 MySQL 데이터베이스가 있습니다. DR 설계에는 여러 AWS 리전이 포함되어야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "MySQL 데이터베이스를 여러 EC2 인스턴스로 마이그레이션합니다. DR 지역에서 대기 EC2 인스턴스를 구성합니다. 복제를 켭니다.",
      "B": "MySQL 데이터베이스를 Amazon RDS 로 마이그레이션합니다. 다중 AZ 배포를 사용합니다. 다른 가용 영역에서 기본 DB 인스턴스에 대한 읽기 복제를 켭니다.",
      "C": "MySQL 데이터베이스를 Amazon Aurora 글로벌 데이터베이스로 마이그레이션합니다. 기본 리전에서 기본 DB 클러스터를 호스팅합니다. DR 리전에서 보조 DB 클러스터를 호스팅합니다.",
      "D": "S3 CRR(Cross-Region Replication)용으로 구성된 Amazon S3 버킷에 MySQL 데이터베이스의 예약된 백업을 저장합니다. 데이터 백업을 사용하여 DR 지역에서 데이터베이스를 복원하십시오."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Aurora 글로벌 데이터베이스 — 여러 리전에 걸친 자동 비동기 복제\n▸ 기본/보조 클러스터 — 장애 조치 및 읽기 확장 지원\n\n【정답 포인트】\n▸ 다중 리전 DR → Aurora 글로벌 DB 자동 구성\n▸ 운영 오버헤드 최소화 → 완전 관리형 서비스 선택\n▸ EC2 자관 MySQL → RDS/Aurora로 현대화\n\n【오답 체크】\n▸\n(A) EC2 기반 복제는 운영 부담 높음, 수동 구성 필요\n▸\n(B) 다중 AZ만 커버, 다중 리전 DR 불충분\n▸\n(D) 백업 기반 복구는 느린 복구 시간, 운영 부담\n\n【시험 포인트】\n▸ DR 요구 + 여러 리전 → Aurora 글로벌 DB 패턴\n▸ 운영 오버헤드 최소 → 완전 관리형 솔루션 선택"
  },
  {
    "id": 344,
    "question": "회사에는 Amazon Simple Queue Service(Amazon SQS)를 사용하여 메시지를 구문 분석하는 Java 애플리케이션이 있습니다. 애플리케이션은 크기가 256KB 보다 큰 메시지를 구문 분석할 수 없습니다. 회사는 응용 프로그램이 50MB 만큼 큰 메시지를 구문 분석할 수 있는 기능을 제공하는 솔루션을 구현하려고 합니다. 코드를 가장 적게 변경하여 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Java 용 Amazon SQS 확장 클라이언트 라이브러리를 사용하여 Amazon S3 에서 256KB보다 큰 메시지를 호스팅합니다.",
      "B": "Amazon SQS 대신 Amazon EventBridge 를 사용하여 애플리케이션에서 큰 메시지를 게시합니다.",
      "C": "256KB보다 큰 메시지를 처리하도록 Amazon SQS의 제한을 변경합니다.",
      "D": "Amazon Elastic File System(Amazon EFS)에 256KB 보다 큰 메시지를 저장합니다. 메시지에서 이 위치를 참조하도록 Amazon SQS를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SQS 확장 클라이언트 라이브러리 — S3 페이로드 오프로딩\n▸ 256KB 한계 — SQS 메시지 크기 제약\n▸ S3 호스팅 — 대용량 메시지 저장소\n\n【정답 포인트】\n▸ 코드 최소 변경 → 라이브러리 변경만으로 해결\n▸ SQS 한계 극복 → S3 페이로드 오프로딩 패턴\n▸ 50MB 지원 → S3 용량 충분, 메시지는 포인터 전송\n\n【오답 체크】\n▸\n(B) EventBridge는 이벤트 라우팅용, 메시지 큐 아님\n▸\n(C) SQS 한계는 변경 불가능한 제약사항\n▸\n(D) EFS는 파일시스템, SQS 통합 솔루션 아님\n\n【시험 포인트】\n▸ SQS 크기 제약 + 대용량 필요 → 확장 라이브러리 + S3\n▸ 코드 최소화 → 사전 구축된 라이브러리 선택"
  },
  {
    "id": 345,
    "question": "회사에서 주요 웹 애플리케이션 중 하나의 콘텐츠에 대한 액세스를 제한하고 AWS 에서 사용할 수 있는 권한 부여 기술을 사용하여 콘텐츠를 보호하려고 합니다. 이 회사는 서버리스 아키텍처와 100 명 미만의 사용자를 위한 인증 솔루션을 구현하려고 합니다. 솔루션은 기본 웹 애플리케이션과 통합하고 웹 콘텐츠를 전역적으로 제공해야 합니다. 솔루션은 또한 회사의 사용자 기반이 성장함에 따라 확장되어야 하며 가능한 한 가장 낮은 로그인 대기 시간을 제공해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "인증에 Amazon Cognito 를 사용하십시오. 인증을 위해 Lambda@Edge 를 사용합니다. Amazon CloudFront를 사용하여 전 세계적으로 웹 애플리케이션을 제공합니다.",
      "B": "인증을 위해 Microsoft Active Directory용 AWS Directory Service를 사용합니다. 승인을 위해 AWS Lambda 를 사용합니다. Application Load Balancer 를 사용하여 웹 애플리케이션을 전역적으로 제공합니다.",
      "C": "인증에 Amazon Cognito 를 사용합니다. 승인을 위해 AWS Lambda 를 사용합니다. Amazon S3 Transfer Acceleration 을 사용하여 전 세계적으로 웹 애플리케이션을 제공합니다.",
      "D": "인증을 위해 Microsoft Active Directory용 AWS Directory Service를 사용합니다. 인증을 위해 Lambda@Edge 를 사용합니다. AWS Elastic Beanstalk 를 사용하여 전 세계적으로 웹 애플리케이션을 제공합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Cognito — 완전 관리형 인증/사용자 관리\n▸ Lambda@Edge — 엣지에서의 실시간 인증 검증\n▸ CloudFront — 글로벌 콘텐츠 배포 및 저지연\n\n【정답 포인트】\n▸ 서버리스 + 인증 → Cognito + Lambda@Edge 조합\n▸ 글로벌 배포 + 저지연 → CloudFront 엣지 네트워크\n▸ 확장성 + 저비용 → 관리형 서비스 스택\n\n【오답 체크】\n▸\n(B) Directory Service는 온프레미스 AD용, 복잡성 증가\n▸\n(C) S3 Transfer Acceleration은 업로드 가속화용\n▸\n(D) Elastic Beanstalk는 글로벌 배포에 부적절\n\n【시험 포인트】\n▸ 서버리스 + 글로벌 + 저지연 → CloudFront + Lambda@Edge\n▸ 소규모 사용자 → Cognito로 충분한 확장성"
  },
  {
    "id": 346,
    "question": "회사의 데이터 센터에 노후화된 NAS(Network-Attached Storage) 어레이가 있습니다. NAS 어레이는 SMB 공유 및 NFS 공유를 클라이언트 워크스테이션에 제공합니다. 회사는 새 NAS 어레이를 구매하기를 원하지 않습니다. 회사는 또한 NAS 어레이의 지원 계약을 갱신하는 데 드는 비용을 원하지 않습니다. 일부 데이터는 자주 액세스되지만 대부분의 데이터는 비활성 상태입니다. 솔루션 설계자는 데이터를 Amazon S3 로 마이그레이션하고 S3 수명 주기 정책을 사용하며 클라이언트 워크스테이션에 대해 동일한 모양과 느낌을 유지하는 솔루션을 구현해야 합니다. 솔루션 설계자는 AWS Storage Gateway를 솔루션의 일부로 식별했습니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 유형의 스토리지 게이트웨이를 프로비저닝해야 합니까?",
    "options": {
      "A": "볼륨 게이트웨이",
      "B": "테이프 게이트웨이",
      "C": "Amazon FSx 파일 게이트웨이",
      "D": "Amazon S3 파일 게이트웨이"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 파일 게이트웨이 — NFS/SMB 프로토콜로 S3 액세스\n▸ 파일 인터페이스 — 동일한 UX 유지\n▸ 수명 주기 정책 — 저장소 비용 최적화\n\n【정답 포인트】\n▸ NAS 대체 → S3 파일 게이트웨이로 매끄러운 전환\n▸ NFS/SMB 지원 → 워크스테이션 변경 없음\n▸ S3 백엔드 → 수명 주기 정책 활용 가능\n\n【오답 체크】\n▸\n(A) 볼륨 게이트웨이는 블록 스토리지용\n▸\n(B) 테이프 게이트웨이는 백업 보관용\n▸\n(C) FSx 게이트웨이는 Windows 파일 서버용\n\n【시험 포인트】\n▸ NAS → 파일 게이트웨이 → S3로 마이그레이션\n▸ 파일 프로토콜 지원 필요 → S3 파일 게이트웨이 선택"
  },
  {
    "id": 347,
    "question": "회사에는 Amazon EC2 인스턴스에서 실행 중인 애플리케이션이 있습니다. 솔루션 설계자는 회사의 현재 요구 사항을 기반으로 특정 인스턴스 제품군 및 다양한 인스턴스 크기로 회사를 표준화했습니다. 회사는 향후 3 년 동안 애플리케이션의 비용 절감을 극대화하고자 합니다. 회사는 애플리케이션 인기도 및 사용량에 따라 향후 6 개월 내에 인스턴스 패밀리 및 크기를 변경할 수 있어야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "컴퓨팅 절감 플랜(Compute Savings Plan)",
      "B": "EC2 인스턴스 절감 계획(EC2 Instance Savings Plan)",
      "C": "영역 예약 인스턴스(Zonal Reserved Instances)",
      "D": "표준 예약 인스턴스(Standard Reserved Instances)"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 컴퓨팅 절감 플랜 — 인스턴스 크기/패밀리 변경 자유\n▸ 유연성 — 3년 약정 시 가장 큰 할인\n▸ 초기화 비용 — 미리 결정 불필요\n\n【정답 포인트】\n▸ 변경 유연성 필요 → Compute Savings Plan\n▸ 3년 장기 약정 → 최대 할인율 확보\n▸ 인스턴스 패밀리 변경 가능 → CSP 고유의 장점\n\n【오답 체크】\n▸\n(B) EC2 Instance Savings Plan는 인스턴스 크기만 변경 가능\n▸\n(C) \n(D) RI는 고정 인스턴스, 변경 시 비용 손실\n\n【시험 포인트】\n▸ 크기 + 패밀리 모두 변경 → Compute Savings Plan\n▸ 장기 약정 + 유연성 필요 → CSP 최적 선택"
  },
  {
    "id": 348,
    "question": "회사는 웨어러블 장치를 사용하는 많은 참가자로부터 데이터를 수집합니다. 회사는 데이터를 Amazon DynamoDB 테이블에 저장하고 애플리케이션을 사용하여 데이터를 분석합니다. 데이터 워크로드는 일정하고 예측 가능합니다. 회사는 DynamoDB 에 대한 예상 예산 이하를 유지하려고 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "프로비저닝 모드와 DynamoDB Standard-Infrequent Access(DynamoDB Standard-IA)를 사용합니다. 예상 워크로드에 대한 용량을 예약합니다.",
      "B": "프로비저닝 모드를 사용합니다. RCU(읽기 용량 단위) 및 WCU(쓰기 용량 단위)를 지정합니다.",
      "C": "주문형 모드를 사용합니다. 읽기 용량 단위(RCU) 및 쓰기 용량 단위(WCU)를 워크로드의 변경 사항을 수용할 수 있을 만큼 높게 설정합니다.",
      "D": "주문형 모드를 사용합니다. 예약 용량이 있는 RCU(읽기 용량 단위) 및 WCU(쓰기 용량 단위)를 지정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 프로비저닝 모드 — 사전 할당 용량\n▸ 예측 가능한 워크로드 — 정확한 용량 계획\n▸ 비용 최소화 — 정확한 예상치 필요\n\n【정답 포인트】\n▸ 일정/예측 가능 → 프로비저닝 모드 최적\n▸ 고정 워크로드 → RCU/WCU 예약으로 비용 절감\n▸ 예산 내 유지 → 정확한 용량 계획\n\n【오답 체크】\n▸\n(A) Standard-IA는 액세스 빈도 낮은 용도\n▸\n(C) 주문형은 변동성 큰 워크로드용, 고비용\n▸\n(D) 주문형 + 예약 용량은 비효율적 조합\n\n【시험 포인트】\n▸ 예측 가능 워크로드 → 프로비저닝 모드\n▸ 정확한 용량 추정 → 비용 최적화 달성"
  },
  {
    "id": 349,
    "question": "회사는 ap-southeast-3 리전의 Amazon Aurora PostgreSQL 데이터베이스에 기밀 데이터를 저장합니다. 데이터베이스는 AWS Key Management Service(AWS KMS) 고객 관리형 키로 암호화됩니다. 이 회사는 최근에 인수되었으며 ap-southeast-3 에서 인수 회사의 AWS 계정과 데이터베이스 백업을 안전하게 공유해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "데이터베이스 스냅샷을 생성합니다. 스냅샷을 암호화되지 않은 새 스냅샷에 복사합니다. 인수 회사의 AWS 계정과 새 스냅샷을 공유합니다.",
      "B": "데이터베이스 스냅샷을 생성합니다. 인수 회사의 AWS 계정을 KMS 키 정책에 추가합니다. 인수 회사의 AWS 계정과 스냅샷을 공유합니다.",
      "C": "다른 AWS 관리형 KMS 키를 사용하는 데이터베이스 스냅샷을 생성합니다. 인수 회사의 AWS 계정을 KMS 키 별칭에 추가합니다. 인수 회사의 AWS 계정과 스냅샷을 공유합니다.",
      "D": "데이터베이스 스냅샷을 생성합니다. 데이터베이스 스냅샷을 다운로드합니다. Amazon S3 버킷에 데이터베이스 스냅샷을 업로드합니다. 인수 회사의 AWS 계정에서 액세스를 허용하도록 S3 버킷 정책을 업데이트합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ KMS 고객 관리형 키 — 명시적 권한 필요\n▸ 스냅샷 공유 — 키 정책 수정으로 접근성 부여\n▸ 보안 유지 — 암호화 상태로 공유\n\n【정답 포인트】\n▸ KMS 암호화 스냅샷 → 키 정책 수정 필수\n▸ 크로스 계정 공유 → 대상 계정을 정책에 추가\n▸ 보안성 + 편의성 → 암호화된 상태로 전달\n\n【오답 체크】\n▸\n(A) 암호화 해제는 보안 위험\n▸\n(C) KMS 키 별칭은 권한 관리 불가\n▸\n(D) S3 다운로드는 복잡, 보안 노출 증가\n\n【시험 포인트】\n▸ 크로스 계정 KMS 스냅샷 → KMS 정책 수정\n▸ 기밀 데이터 공유 → 암호화 상태 유지"
  },
  {
    "id": 350,
    "question": "한 회사에서 us-east-1 리전의 Microsoft SQL Server 단일 AZ DB 인스턴스용 100GB Amazon RDS 를 사용하여 고객 트랜잭션을 저장합니다. 회사는 DB 인스턴스에 대한 고가용성 및 자동 복구가 필요합니다. 또한 회사는 1 년에 여러 번 RDS 데이터베이스에 대한 보고서를 실행해야 합니다. 보고 프로세스로 인해 트랜잭션이 고객 계정에 게시되는 데 평소보다 오래 걸립니다. 회사는 보고 프로세스의 성능을 향상시킬 솔루션이 필요합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "단일 AZ DB 인스턴스에서 다중 AZ 배포로 DB 인스턴스를 수정합니다.",
      "B": "현재 DB 인스턴스의 스냅샷을 찍습니다. 다른 가용 영역의 새 RDS 배포로 스냅샷을 복원합니다.",
      "C": "다른 가용 영역에서 DB 인스턴스의 읽기 전용 복제본을 생성합니다. 보고서에 대한 모든 요청은 읽기 전용 복제본을 가리킵니다.",
      "D": "데이터베이스를 RDS Custom으로 마이그레이션합니다.",
      "E": "RDS Proxy를 사용하여 보고 요청을 유지 관리 기간으로 제한합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ 다중 AZ — 고가용성 + 자동 복구\n▸ 읽기 복제본 — 보고서 워크로드 분리\n▸ 성능 격리 — 트랜잭션/분석 분리\n\n【정답 포인트】\n▸ HA 요구 → 다중 AZ 배포\n(A) ▸ 보고서 성능 → 읽기 복제본 활용\n(C) ▸ 두 요구사항 동시 충족 → A + C 조합\n\n【오답 체크】\n▸\n(B) 스냅샷 복원은 일회성, 계속 동기화 불가\n▸\n(D) RDS Custom은 관리 오버헤드 증가\n▸\n(E) RDS Proxy는 연결 풀링, 성능 분리 아님\n\n【시험 포인트】\n▸ HA + 보고 성능 → 다중 AZ + 읽기 복제본\n▸ 읽기 워크로드 분리 → 복제본으로 성능 보호"
  },
  {
    "id": 351,
    "question": "회사에서 데이터 관리 애플리케이션을 AWS 로 이전하고 있습니다. 회사는 이벤트 기반 아키텍처로 전환하려고 합니다. 아키텍처는 워크플로의 다양한 측면을 수행하면서 더 많이 분산되고 서버리스 개념을 사용해야 합니다. 회사는 또한 운영 오버헤드를 최소화하기를 원합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue 에서 워크플로를 구축합니다. AWS Glue 를 사용하여 AWS Lambda 함수를 호출하여 워크플로 단계를 처리합니다.",
      "B": "AWS Step Functions 에서 워크플로를 구축합니다. Amazon EC2 인스턴스에 애플리케이션을 배포합니다. Step Functions 를 사용하여 EC2 인스턴스에서 워크플로 단계를 호출합니다.",
      "C": "Amazon EventBridge에서 워크플로를 구축합니다. EventBridge를 사용하여 일정에 따라 AWS Lambda 함수를 호출하여 워크플로 단계를 처리합니다.",
      "D": "AWS Step Functions 에서 워크플로를 구축합니다. Step Functions 를 사용하여 상태 머신을 생성합니다. 상태 시스템을 사용하여 AWS Lambda 함수를 호출하여 워크플로 단계를 처리합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Step Functions — 상태 머신 기반 워크플로 조율\n▸ Lambda 함수 — 서버리스 컴퓨팅\n▸ 이벤트 기반 — 이벤트 사이 상태 관리\n\n【정답 포인트】\n▸ 복잡한 워크플로 → Step Functions + 상태 머신\n▸ 서버리스 + Lambda → 완전 관리형\n▸ 운영 오버헤드 최소 → EC2 배제, 함수만 호출\n\n【오답 체크】\n▸\n(A) Glue는 ETL용, 일반 워크플로 조율 아님\n▸\n(B) EC2는 관리 오버헤드 증가\n▸\n(C) EventBridge는 일정 기반, 상태 관리 불가\n\n【시험 포인트】\n▸ 서버리스 워크플로 조율 → Step Functions + Lambda\n▸ 상태 머신 필요 → Step Functions 선택"
  },
  {
    "id": 352,
    "question": "한 회사에서 온라인 멀티플레이어 게임용 네트워크를 설계하고 있습니다. 이 게임은 UDP 네트워킹 프로토콜을 사용하며 8 개의 AWS 리전에 배포됩니다. 네트워크 아키텍처는 최종 사용자에게 고품질 게임 경험을 제공하기 위해 대기 시간과 패킷 손실을 최소화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 리전에서 전송 게이트웨이를 설정합니다. 각 전송 게이트웨이 간에 리전 간 피어링 연결을 생성합니다.",
      "B": "각 리전에서 UDP 리스너 및 엔드포인트 그룹으로 AWS Global Accelerator 를 설정합니다.",
      "C": "UDP 를 켠 상태에서 Amazon CloudFront 를 설정합니다. 각 리전에서 오리진을 구성합니다.",
      "D": "각 지역 간에 VPC 피어링 메시를 설정합니다. 각 VPC에 대해 UDP를 켭니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Global Accelerator — 글로벌 네트워크 최적화\n▸ UDP 지원 — 게임 프로토콜 네이티브 지원\n▸ 저지연 + 패킷 손실 최소 → Anycast 라우팅\n\n【정답 포인트】\n▸ 8개 리전 게임 배포 → Global Accelerator\n▸ UDP 프로토콜 필수 → 네이티브 지원 필요\n▸ 저지연 경로 → 글로벌 가속 엣지 네트워크\n\n【오답 체크】\n▸\n(A) Transit Gateway는 네트워크 허브용, 게임에 비최적\n▸\n(C) CloudFront는 HTTP/HTTPS, UDP 미지원\n▸\n(D) VPC 피어링은 직접 연결, 최적화 경로 없음\n\n【시험 포인트】\n▸ 글로벌 게임 + UDP → Global Accelerator\n▸ 멀티 리전 저지연 → Anycast 라우팅 활용"
  },
  {
    "id": 353,
    "question": "회사는 단일 가용 영역의 Amazon EC2 인스턴스에서 3 계층 웹 애플리케이션을 호스팅합니다. 웹 애플리케이션은 EC2 인스턴스에서 호스팅되는 자체 관리형 MySQL 데이터베이스를 사용하여 Amazon Elastic Block Store(Amazon EBS) 볼륨에 데이터를 저장합니다. MySQL 데이터베이스는 현재 1TB 프로비저닝된 IOPS SSD(io2) EBS 볼륨을 사용합니다. 이 회사는 피크 트래픽에서 읽기 및 쓰기 모두에 대해 1,000 IOPS의 트래픽을 예상합니다. 회사는 두 배의 IOPS 용량을 유지하면서 중단을 최소화하고 성능을 안정화하며 비용을 절감하고자 합니다. 이 회사는 데이터베이스 계층을 가용성이 높고 내결함성이 있는 완전 관리형 솔루션으로 이동하려고 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "io2 Block Express EBS 볼륨이 있는 MySQL DB 인스턴스용 Amazon RDS 의 다중 AZ 배포를 사용합니다.",
      "B": "범용 SSD(gp2) EBS 볼륨이 있는 MySQL DB 인스턴스용 Amazon RDS 의 다중 AZ 배포를 사용합니다.",
      "C": "Amazon S3 Intelligent-Tiering 액세스 계층을 사용합니다.",
      "D": "두 개의 큰 EC2 인스턴스를 사용하여 활성-수동 모드에서 데이터베이스를 호스팅합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ gp2 EBS — 범용 SSD, 1,000~3,000 IOPS\n▸ RDS 다중 AZ — 고가용성 + 자동 복구\n▸ 비용 절감 — io2에서 gp2로 전환\n\n【정답 포인트】\n▸ 1,000 IOPS 수요 → gp2로 충분 (1,000~3,000)\n▸ 2배 여유 유지 → gp2 범위 내 가능\n▸ HA + 관리형 → RDS 다중 AZ\n▸ 비용 최소화 → io2 대신 gp2 선택\n\n【오답 체크】\n▸\n(A) io2는 고성능이지만 비용 높음\n▸\n(C) S3는 데이터베이스 대체 불가\n▸\n(D) EC2 자관은 운영 부담, HA 불충분\n\n【시험 포인트】\n▸ 워크로드에 맞는 EBS 타입 선택 → gp2 최적\n▸ 비용 + 성능 + HA → RDS 다중 AZ + gp2"
  },
  {
    "id": 354,
    "question": "회사는 AWS 에서 서버리스 애플리케이션을 호스팅합니다. 이 애플리케이션은 Amazon API Gateway, AWS Lambda 및 Amazon RDS for PostgreSQL 데이터베이스를 사용합니다. 회사는 최대 트래픽 또는 예측할 수 없는 트래픽 시간 동안 데이터베이스 연결 시간 초과로 인해 발생하는 애플리케이션 오류의 증가를 확인했습니다. 회사는 최소한의 코드 변경으로 애플리케이션 오류를 줄이는 솔루션이 필요합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Lambda 동시성 비율을 줄입니다.",
      "B": "RDS DB 인스턴스에서 RDS 프록시를 활성화합니다.",
      "C": "더 많은 연결을 허용하도록 RDS DB 인스턴스 클래스의 크기를 조정합니다.",
      "D": "온디맨드 확장을 통해 데이터베이스를 Amazon DynamoDB로 마이그레이션합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DynamoDB — NoSQL 온디맨드 확장\n▸ 예측 불가능한 트래픽 → 자동 확장\n▸ 서버리스 완성도 → 완전 관리형 데이터층\n\n【정답 포인트】\n▸ 트래픽 예측 불가 → DynamoDB 온디맨드\n▸ 자동 확장 → 트래픽 급증 대응\n▸ 연결 고갈 없음 → HTTP API 기반 접근\n\n【오답 체크】\n▸\n(A) 동시성 제한은 가용성 손상\n▸\n(B) RDS는 여전히 연결 한계 있음\n▸\n(C) 프로비저닝은 비용만 증가\n\n【시험 포인트】\n▸ 예측 불가 워크로드 → DynamoDB 온디맨드\n▸ 서버리스 완성도 → RDS 대신 NoSQL"
  },
  {
    "id": 354,
    "question": "회사는 AWS 에서 서버리스 애플리케이션을 호스팅합니다. 이 애플리케이션은 Amazon API Gateway, AWS Lambda 및 Amazon RDS for PostgreSQL 데이터베이스를 사용합니다. 회사는 최대 트래픽 또는 예측할 수 없는 트래픽 시간 동안 데이터베이스 연결 시간 초과로 인해 발생하는 애플리케이션 오류의 증가를 확인했습니다. 회사는 최소한의 코드 변경으로 애플리케이션 오류를 줄이는 솔루션이 필요합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Lambda 동시성 비율을 줄입니다.",
      "B": "RDS DB 인스턴스에서 RDS 프록시를 활성화합니다.",
      "C": "더 많은 연결을 허용하도록 RDS DB 인스턴스 클래스의 크기를 조정합니다.",
      "D": "온디맨드 확장을 통해 데이터베이스를 Amazon DynamoDB로 마이그레이션합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ DynamoDB — NoSQL 온디맨드 확장\n▸ 예측 불가능한 트래픽 → 자동 확장\n▸ 서버리스 완성도 → 완전 관리형 데이터층\n\n【정답 포인트】\n▸ 트래픽 예측 불가 → DynamoDB 온디맨드\n▸ 자동 확장 → 트래픽 급증 대응\n▸ 연결 고갈 없음 → HTTP API 기반 접근\n\n【오답 체크】\n▸\n(A) 동시성 제한은 가용성 손상\n▸\n(B) RDS는 여전히 연결 한계 있음\n▸\n(C) 프로비저닝은 비용만 증가\n\n【시험 포인트】\n▸ 예측 불가 워크로드 → DynamoDB 온디맨드\n▸ 서버리스 완성도 → RDS 대신 NoSQL"
  },
  {
    "id": 356,
    "question": "회사는 데이터 객체를 Amazon S3 Standard 스토리지에 저장합니다. 한 솔루션 설계자는 데이터의 75%가 30 일 후에 거의 액세스되지 않는다는 사실을 발견했습니다. 회사는 동일한 고가용성 및 복원력으로 모든 데이터에 즉시 액세스할 수 있어야 하지만 스토리지 비용을 최소화하기를 원합니다. 이러한 요구 사항을 충족하는 스토리지 솔루션은 무엇입니까?",
    "options": {
      "A": "30일 후에 데이터 객체를 S3 Glacier Deep Archive로 이동합니다.",
      "B": "30 일 후에 데이터 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 이동합니다.",
      "C": "30 일 후에 데이터 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 이동합니다.",
      "D": "데이터 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 즉시 이동합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Standard-IA — 저장 비용 낮음, 즉시 액세스\n▸ 고가용성 + 복원력 — 다중 AZ\n▸ 생명주기 정책 — 30일 후 자동 이동\n\n【정답 포인트】\n▸ 즉시 액세스 필요 → Glacier 아님\n▸ 고가용성 필수 → One Zone-IA 아님 (단일 AZ)\n▸ 30일 후 저 접근 → Standard-IA 최적\n▸ 비용 최소화 → IA 티어 활용\n\n【오답 체크】\n▸\n(A) Glacier는 검색 시간 필요\n▸\n(C) One Zone-IA는 가용성 낮음\n▸\n(D) 초기 이동은 최소 저장 기간 조건 위반\n\n【시험 포인트】\n▸ 즉시 액세스 + 비용 절감 → Standard-IA\n▸ 생명주기 정책 → 액세스 패턴 맞춰 이동"
  },
  {
    "id": 357,
    "question": "게임 회사는 공개 점수판을 데이터 센터에서 AWS 클라우드로 옮기고 있습니다. 이 회사는 Application Load Balancer 뒤에 Amazon EC2 Windows Server 인스턴스를 사용하여 동적 애플리케이션을 호스팅합니다. 회사는 애플리케이션을 위한 고가용성 스토리지 솔루션이 필요합니다. 애플리케이션은 정적 파일과 동적 서버 측 코드로 구성됩니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 수행해야 합니까? (2개 선택)",
    "options": {
      "A": "Amazon S3에 정적 파일을 저장합니다. Amazon CloudFront를 사용하여 엣지에서 객체를 캐싱합니다.",
      "B": "정적 파일을 Amazon S3 에 저장합니다. Amazon ElastiCache 를 사용하여 엣지에서 객체를 캐싱합니다.",
      "C": "Amazon Elastic File System(Amazon EFS)에 서버 측 코드를 저장합니다. 파일을 공유할 각 EC2 인스턴스에 EFS 볼륨을 탑재합니다.",
      "D": "Windows File Server 용 Amazon FSx 에 서버 측 코드를 저장합니다. 파일을 공유할 각 EC2 인스턴스에 FSx for Windows File Server 볼륨을 탑재합니다.",
      "E": "범용 SSD(gp2) Amazon Elastic Block Store(Amazon EBS) 볼륨에 서버 측 코드를 저장합니다. 각 EC2 인스턴스에 EBS 볼륨을 탑재하여 파일을 공유합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ 정적 파일 — S3 + CloudFront CDN\n▸ 동적 코드 — FSx for Windows (Windows 호환)\n▸ 고가용성 — 공유 스토리지 필수\n\n【정답 포인트】\n▸ 정적 파일 배포 → S3 + CloudFront\n(A) ▸ Windows 동적 코드 → FSx for Windows\n(D) ▸ Windows 인스턴스 → FSx 네이티브 호환성\n\n【오답 체크】\n▸\n(B) ElastiCache는 캐싱용, CDN 아님\n▸\n(C) EFS는 Linux 기반, Windows 미지원\n▸\n(E) EBS는 인스턴스당 탑재, 공유 불가\n\n【시험 포인트】\n▸ 정적/동적 분리 → S3 + 공유 파일시스템\n▸ Windows + 공유 필요 → FSx for Windows"
  },
  {
    "id": 358,
    "question": "소셜 미디어 회사는 ALB(Application Load Balancer) 뒤의 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. ALB 는 Amazon CloudFront 배포의 오리진입니다. 이 애플리케이션은 Amazon S3 버킷에 10 억 개 이상의 이미지가 저장되어 있으며 초당 수천 개의 이미지를 처리합니다. 회사는 이미지 크기를 동적으로 조정하고 고객에게 적절한 형식을 제공하기를 원합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스에 외부 이미지 관리 라이브러리를 설치합니다. 이미지 관리 라이브러리를 사용하여 이미지를 처리합니다.",
      "B": "CloudFront 오리진 요청 정책을 생성합니다. 정책을 사용하여 자동으로 이미지 크기를 조정하고 요청의 User-Agent HTTP 헤더를 기반으로 적절한 형식을 제공합니다.",
      "C": "외부 이미지 관리 라이브러리와 함께 Lambda@Edge 함수를 사용합니다. Lambda@Edge 함수를 이미지를 제공하는 CloudFront 동작과 연결합니다.",
      "D": "CloudFront 응답 헤더 정책을 생성합니다. 정책을 사용하여 자동으로 이미지 크기를 조정하고 요청의 User-Agent HTTP 헤더를 기반으로 적절한 형식을 제공합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Lambda@Edge — 엣지에서의 실시간 변환\n▸ 동적 리사이징 — 요청 시 이미지 처리\n▸ User-Agent 기반 — 디바이스별 형식 제공\n\n【정답 포인트】\n▸ 동적 이미지 변환 → Lambda@Edge 필수\n▸ 엣지 처리 → 저지연 + 부하 분산\n▸ 이미지 라이브러리 필요 → Lambda@Edge에 통합\n▸ 오버헤드 최소 → EC2 관리 제외\n\n【오답 체크】\n▸\n(A) EC2 자관은 운영 부담\n▸\n(B) 정책은 이미지 처리 불가\n▸\n(D) 응답 헤더 정책은 변환 기능 없음\n\n【시험 포인트】\n▸ 동적 이미지 처리 → Lambda@Edge\n▸ 엣지 컴퓨팅 → 저지연 + 확장성"
  },
  {
    "id": 359,
    "question": "병원은 환자 기록을 Amazon S3 버킷에 저장해야 합니다. 병원의 컴플라이언스 팀은 모든 보호 건강 정보(PHI)가 전송 및 저장 중에 암호화되도록 해야 합니다. 규정 준수 팀은 미사용 데이터에 대한 암호화 키를 관리해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Certificate Manager(ACM)에서 퍼블릭 SSL/TLS 인증서를 생성합니다. 인증서를 Amazon S3와 연결합니다. AWS KMS 키(SSE-KMS)로 서버 측 암호화를 사용하도록 각 S3 버킷에 대한 기본 암호화를 구성합니다. KMS 키를 관리할 규정 준수 팀을 할당합니다.",
      "B": "S3 버킷 정책에서 aws:SecureTransport 조건을 사용하여 HTTPS(TLS)를 통한 암호화된 연결만 허용합니다. S3 관리형 암호화 키(SSE-S3)로 서버 측 암호화를 사용하도록 각 S3 버킷에 대한 기본 암호화를 구성합니다. SSE-S3 키를 관리할 규정 준수 팀을 할당합니다.",
      "C": "S3 버킷 정책에서 aws:SecureTransport 조건을 사용하여 HTTPS(TLS)를 통한 암호화된 연결만 허용합니다. AWS KMS 키(SSE-KMS)로 서버 측 암호화를 사용하도록 각 S3 버킷에 대한 기본 암호화를 구성합니다. KMS 키를 관리할 규정 준수 팀을 할당합니다.",
      "D": "S3 버킷 정책에서 aws:SecureTransport 조건을 사용하여 HTTPS(TLS)를 통한 암호화된 연결만 허용합니다. Amazon Macie 를 사용하여 Amazon S3 에 저장된 민감한 데이터를 보호하십시오. Macie를 관리할 규정 준수 팀을 지정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 전송 암호화 — HTTPS/TLS + aws:SecureTransport\n▸ 저장 암호화 — SSE-KMS (고객 관리형)\n▸ 키 관리 — 규정 준수 팀이 제어\n\n【정답 포인트】\n▸ 전송 중 암호화 → SecureTransport 정책 필수\n▸ 저장 중 암호화 → KMS 고객 관리형 키\n▸ 키 관리 필요 → SSE-S3는 AWS 관리, 불충분\n▸ 규정 준수 통제 → KMS 고객 키만 가능\n\n【오답 체크】\n▸\n(A) ACM 인증서는 S3에 불필요\n▸\n(B) SSE-S3는 AWS 관리, 제어권 없음\n▸\n(D) Macie는 데이터 발견용, 암호화 아님\n\n【시험 포인트】\n▸ PHI 보호 + 키 제어 → KMS 고객 키\n▸ 의료 규정 준수 → 전송 + 저장 암호화 필수"
  },
  {
    "id": 360,
    "question": "회사는 Amazon API Gateway를 사용하여 동일한 VPC에서 두 개의 REST API로 프라이빗 게이트웨이를 실행합니다. BuyStock RESTful 웹 서비스는 CheckFunds RESTful 웹 서비스를 호출하여 주식을 구매하기 전에 충분한 자금을 사용할 수 있는지 확인합니다. 회사는 VPC 흐름 로그에서 BuyStock RESTful 웹 서비스가 VPC 대신 인터넷을 통해 CheckFunds RESTful 웹 서비스를 호출한다는 사실을 확인했습니다. 솔루션 설계자는 API가 VPC를 통해 통신하도록 솔루션을 구현해야 합니다. 코드를 가장 적게 변경하여 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "인증을 위해 HTTP 헤더에 X-API-Key 헤더를 추가합니다.",
      "B": "인터페이스 엔드포인트를 사용합니다.",
      "C": "게이트웨이 엔드포인트를 사용합니다.",
      "D": "두 REST API 사이에 Amazon Simple Queue Service(Amazon SQS) 대기열을 추가합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ VPC 엔드포인트 — 인터넷 거치지 않는 통신\n▸ 인터페이스 엔드포인트 — API Gateway용\n▸ PrivateLink — 프라이빗 연결\n\n【정답 포인트】\n▸ 같은 VPC 내 API 호출 → VPC 엔드포인트 필요\n▸ API Gateway → 인터페이스 엔드포인트\n▸ 코드 변경 최소 → 엔드포인트만 추가\n▸ 인터넷 경유 → 엔드포인트로 직접 통신\n\n【오답 체크】\n▸\n(A) API 키는 인증용, 경로 변경 안 함\n▸\n(C) 게이트웨이 엔드포인트는 S3/DynamoDB용\n▸\n(D) SQS는 통신 방식 변경 없음\n\n【시험 포인트】\n▸ VPC 내 API 통신 → VPC 엔드포인트\n▸ API Gateway → 인터페이스 엔드포인트"
  },
  {
    "id": 361,
    "question": "A company hosts a multiplayer gaming application on AWS. The company wants the application to read data with sub-millisecond latency and run one-time queries on historical data. Which solution will meet these requirements with the LEAST operational overhead?",
    "options": {
      "A": "Use Amazon RDS for data that is frequently accessed. Run a periodic custom script to export the data to an Amazon S3 bucket.",
      "B": "Store the data directly in an Amazon S3 bucket. Implement an S3 Lifecycle policy to move older data to S3 Glacier Deep Archive for long-term storage. Run one-time queries on the data in Amazon S3 by using Amazon Athena.",
      "C": "Use Amazon DynamoDB with DynamoDB Accelerator (DAX) for data that is frequently accessed. Export the data to an Amazon S3 bucket by using DynamoDB table export. Run one-time queries on the data in Amazon S3 by using Amazon Athena.",
      "D": "Use Amazon DynamoDB for data that is frequently accessed. Turn on streaming to Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to read the data from Kinesis Data Streams. Store the records in an Amazon S3 bucket."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ DAX — 마이크로초 지연 인메모리 캐시\n▸ DynamoDB 테이블 내보내기 — 자동 S3 내보내기\n▸ Athena — S3 데이터 애드혹 쿼리\n\n【정답 포인트】\n▸ 마이크로초 지연 → DynamoDB + DAX\n▸ 역사 데이터 쿼리 → S3 내보내기 + Athena\n▸ 운영 오버헤드 최소 → 자동 내보내기\n▸ 두 요구사항 모두 충족 → 완전 관리형\n\n【오답 체크】\n▸\n(A) RDS는 밀리초 단위 지연\n▸\n(B) S3는 sub-ms 지연 불가\n▸\n(D) Firehose는 복잡, 오버헤드 증가\n\n【시험 포인트】\n▸ 초저지연 + 분석 → DynamoDB + DAX + Athena\n▸ 자동 내보내기 → 관리형 솔루션"
  },
  {
    "id": 362,
    "question": "회사는 특정 지불 ID 에 대한 메시지가 전송된 순서대로 수신되어야 하는 지불 처리 시스템을 사용합니다. 그렇지 않으면 결제가 잘못 처리될 수 있습니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 어떤 조치를 취해야 합니까? (2개 선택)",
    "options": {
      "A": "결제 ID를 파티션 키로 사용하여 Amazon DynamoDB 테이블에 메시지를 씁니다.",
      "B": "결제 ID를 파티션 키로 사용하여 Amazon Kinesis 데이터 스트림에 메시지를 씁니다.",
      "C": "결제 ID 를 키로 사용하여 Amazon ElastiCache for Memcached 클러스터에 메시지를 씁니다.",
      "D": "Amazon Simple Queue Service(Amazon SQS) 대기열에 메시지를 씁니다. 결제 ID 를 사용하도록 메시지 속성을 설정합니다.",
      "E": "Amazon Simple Queue Service(Amazon SQS) FIFO 대기열에 메시지를 씁니다. 결제 ID를 사용할 메시지 그룹을 설정합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ FIFO(First-In-First-Out) — 메시지 순서 보장\n▸ 파티션 키 — 같은 값의 데이터를 단일 파티션에 저장\n\n【정답 포인트】\n▸ B(Kinesis) — 파티션 키로 지불 ID 지정 시 동일 ID의 메시지는 같은 샤드로 라우팅되어 순서 보장\n▸ E(SQS FIFO) — 메시지 그룹 ID로 지불 ID 사용 시 그룹 내 FIFO 보장\n\n【오답 체크】\n▸\n(A) DynamoDB는 순서 보장 불가능(비순서 저장소)\n▸\n(C) Memcached는 캐시로 영속성/순서 보장 없음\n▸\n(D) 표준 SQS는 순서 보장 안 함\n\n【시험 포인트】\n순서 보장 필요 시 → Kinesis(파티션 키) 또는 SQS FIFO(메시지 그룹) 조합이 정답"
  },
  {
    "id": 363,
    "question": "회사는 고유한 이벤트를 별도의 리더보드, 매치메이킹 및 인증 서비스로 동시에 전송해야 하는 게임 시스템을 구축하고 있습니다. 회사에는 이벤트 순서를 보장하는 AWS 이벤트 기반 시스템이 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EventBridge 이벤트 버스",
      "B": "Amazon Simple Notification Service(Amazon SNS) FIFO 주제",
      "C": "Amazon Simple Notification Service(Amazon SNS) 표준 주제",
      "D": "Amazon Simple Queue Service(Amazon SQS) FIFO 대기열"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SNS FIFO — Pub/Sub 방식의 순서 보장 메시징\n▸ 다중 구독자 — 하나의 토픽으로 여러 서비스에 동시 전달\n\n【정답 포인트】\n▸ SNS FIFO는 게시-구독 패턴으로 이벤트를 여러 구독자에게 동시 전송 가능\n▸ FIFO 보장으로 순서 정렬 유지하며 리더보드, 매치메이킹, 인증에 순차 전달\n\n【오답 체크】\n▸\n(A) EventBridge는 순서 보장 없음(이벤트 기반 매칭만 제공)\n▸\n(C) 표준 SNS는 순서 보장 안 함\n▸\n(D) SQS는 단일 수신자 구조로 다중 서비스 동시 전달 불가\n\n【시험 포인트】\n다중 구독자 + 순서 보장 → SNS FIFO 선택이 핵심"
  },
  {
    "id": 364,
    "question": "한 병원에서 환자의 증상을 수집하는 새로운 애플리케이션을 설계하고 있습니다. 병원은 아키텍처에서 Amazon Simple Queue Service(Amazon SQS)와 Amazon Simple Notification Service(Amazon SNS)를 사용하기로 결정했습니다. 솔루션 설계자가 인프라 설계를 검토하고 있습니다. 저장 및 전송 중에 데이터를 암호화해야 합니다. 병원의 승인된 직원만 데이터에 액세스할 수 있어야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (2개 선택)",
    "options": {
      "A": "SQS 구성 요소에서 서버 측 암호화를 켭니다. 기본 키 정책을 업데이트하여 인증된 보안 주체 집합으로 키 사용을 제한합니다.",
      "B": "AWS Key Management Service(AWS KMS) 고객 관리 키를 사용하여 SNS 구성 요소에서 서버 측 암호화를 켭니다. 키 정책을 적용하여 인증된 보안 주체 집합으로 키 사용을 제한합니다.",
      "C": "SNS 구성 요소에서 암호화를 켭니다. 기본 키 정책을 업데이트하여 인증된 보안 주체 집합으로 키 사용을 제한합니다. TLS 를 통한 암호화된 연결만 허용하도록 주제 정책에서 조건을 설정합니다.",
      "D": "AWS Key Management Service(AWS KMS) 고객 관리 키를 사용하여 SQS 구성 요소에서 서버 측 암호화를 켭니다. 키 정책을 적용하여 인증된 보안 주체 집합으로 키 사용을 제한합니다. TLS를 통한 암호화된 연결만 허용하도록 대기열 정책에서 조건을 설정합니다.",
      "E": "AWS Key Management Service(AWS KMS) 고객 관리 키를 사용하여 SQS 구성 요소에서 서버 측 암호화를 켭니다. IAM 정책을 적용하여 인증된 보안 주체 집합으로 키 사용을 제한합니다. TLS를 통한 암호화된 연결만 허용하도록 대기열 정책에서 조건을 설정합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ KMS 고객 관리 키 — 사용자가 제어하는 암호화 키\n▸ 키 정책 — 특정 보안 주체의 키 사용 권한 제한\n\n【정답 포인트】\n▸\n(B) SNS용 KMS 키 적용으로 전송 중 메시지 암호화 + 인증 직원만 접근 제어\n▸\n(D) SQS용 KMS 키 적용으로 저장 데이터 암호화 + TLS 조건으로 전송 보안 강화\n\n【오답 체크】\n▸\n(A) 기본 키 정책 사용 시 세분화된 접근 제어 불가능\n▸\n(C) 주제 정책 조건은 접근 제어 역할(TLS만 확인, 권한 검증 불충분)\n▸\n(E) IAM 정책은 키 정책이 아니므로 부적절\n\n【시험 포인트】\n의료 데이터 보안 → SNS/SQS 각각 KMS + 키 정책 조합이 정답"
  },
  {
    "id": 365,
    "question": "회사는 Amazon RDS 에서 지원하는 웹 애플리케이션을 실행합니다. 새로운 데이터베이스 관리자가 실수로 데이터베이스 테이블의 정보를 편집하여 데이터 손실을 일으켰습니다. 이러한 유형의 사고에서 복구하는 데 도움이 되도록 회사는 지난 30 일 동안 변경이 발생하기 5분 전의 상태로 데이터베이스를 복원할 수 있는 기능을 원합니다. 이 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 기능을 디자인에 포함해야 합니까?",
    "options": {
      "A": "읽기 복제본",
      "B": "수동 스냅샷",
      "C": "자동 백업",
      "D": "다중 AZ 배포"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ PITR(Point-in-Time Restore) — 특정 시점으로 복원\n▸ 자동 백업 — RDS 기본 기능, 최대 35일 보관\n\n【정답 포인트】\n▸ 자동 백업은 PITR 지원으로 30일 이내 임의 시점(예: 5분 전) 복구 가능\n▸ 트랜잭션 로그 자동 유지로 정확한 시점 복원 제공\n\n【오답 체크】\n▸\n(A) 읽기 복제본은 고가용성용, 복구 목적 아님\n▸\n(B) 수동 스냅샷은 사후 조치 필요(자동성 부족)\n▸\n(D) 다중 AZ는 재해 복구용, 데이터 복원 기능 없음\n\n【시험 포인트】\n시간 기준 데이터 복구 → RDS 자동 백업 + PITR 조합이 정답"
  },
  {
    "id": 366,
    "question": "회사의 웹 애플리케이션은 AWS Lambda 함수 앞의 Amazon API Gateway API 와 Amazon DynamoDB 데이터베이스로 구성됩니다. Lambda 함수는 비즈니스 로직을 처리하고 DynamoDB 테이블은 데이터를 호스팅합니다. 애플리케이션은 Amazon Cognito 사용자 풀을 사용하여 애플리케이션의 개별 사용자를 식별합니다. 솔루션 설계자는 구독이 있는 사용자만 프리미엄 콘텐츠에 액세스할 수 있도록 애플리케이션을 업데이트해야 합니다. 최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "API Gateway API에서 API 캐싱 및 제한을 활성화합니다.",
      "B": "API Gateway API 에서 AWS WAF 를 설정합니다. 구독이 있는 사용자를 필터링하는 규칙을 만듭니다.",
      "C": "DynamoDB 테이블의 프리미엄 콘텐츠에 세분화된 IAM 권한을 적용합니다.",
      "D": "구독하지 않은 사용자의 액세스를 제한하기 위해 API 사용 계획 및 API 키를 구현하십시오."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ API 사용 계획 — 특정 사용자에 대한 API 접근 제어\n▸ API 키 — 사용자 식별 및 할당량 관리 도구\n\n【정답 포인트】\n▸ API 사용 계획으로 구독 고객만 프리미엄 API 엔드포인트 접근 허용\n▸ API 키 할당으로 사용자별 접근 권한 관리 가능(운영 오버헤드 최소)\n\n【오답 체크】\n▸\n(A) 캐싱/제한은 접근 제어 아님(성능 관련만)\n▸\n(B) WAF는 SQL 주입 같은 공격 방어용, 사용자 인증 기능 아님\n▸\n(C) IAM은 AWS 권한 관리용, API 수준 구독 제어 아님\n\n【시험 포인트】\n API 수준 접근 제어 → 사용 계획 + API 키 조합이 정답"
  },
  {
    "id": 367,
    "question": "한 회사에서 Amazon Route 53 지연 시간 기반 라우팅을 사용하여 전 세계 사용자를 위해 UDP 기반 애플리케이션으로 요청을 라우팅하고 있습니다. 이 애플리케이션은 미국, 아시아 및 유럽에 있는 회사의 온프레미스 데이터 센터에 있는 중복 서버에서 호스팅됩니다. 회사의 규정 준수 요구 사항에 따르면 애플리케이션은 온프레미스에서 호스팅되어야 합니다. 회사는 애플리케이션의 성능과 가용성을 개선하고자 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "3 개의 AWS 리전에서 3 개의 NLB(Network Load Balancer)를 구성하여 온프레미스 엔드포인트를 처리합니다. AWS Global Accelerator 를 사용하여 가속기를 생성하고 NLB 를 엔드포인트로 등록합니다. 가속기 DNS 를 가리키는 CNAME 을 사용하여 애플리케이션에 대한 액세스를 제공합니다.",
      "B": "3 개의 AWS 리전에서 3 개의 Application Load Balancer(ALB)를 구성하여 온프레미스 엔드포인트를 처리합니다. AWS Global Accelerator 를 사용하여 가속기를 생성하고 ALB 를 엔드포인트로 등록합니다. 가속기 DNS 를 가리키는 CNAME 을 사용하여 애플리케이션에 대한 액세스를 제공합니다.",
      "C": "3 개의 AWS 리전에서 3 개의 NLB(Network Load Balancer)를 구성하여 온프레미스 엔드포인트를 처리합니다. Route 53에서 3개의 NLB를 가리키는 지연 시간 기반 레코드를 생성하고 이를 Amazon CloudFront 배포의 오리진으로 사용합니다. CloudFront DNS 를 가리키는 CNAME을 사용하여 애플리케이션에 대한 액세스를 제공합니다.",
      "D": "온프레미스 엔드포인트를 처리하기 위해 3 개의 AWS 리전에서 3 개의 ALB(Application Load Balancer)를 구성합니다. Route 53 에서 3 개의 ALB 를 가리키는 지연 시간 기반 레코드를 생성하고 이를 Amazon CloudFront 배포의 오리진으로 사용합니다. CloudFront DNS를 가리키는 CNAME을 사용하여 애플리케이션에 대한 액세스를 제공합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ NLB — UDP 지원 로드 밸런서\n▸ Global Accelerator — 지연 시간 기반 라우팅 + 성능 최적화\n\n【정답 포인트】\n▸ UDP 애플리케이션은 ALB 불가 → NLB만 지원\n▸ Global Accelerator는 Route 53보다 성능/가용성 우수(애니캐스트 IP)\n\n【오답 체크】\n▸\n(B) ALB는 HTTP/HTTPS 전용, UDP 미지원\n▸\n(C) \n(D) CloudFront는 HTTP/HTTPS 콘텐츠 전용, UDP 미지원\n\n【시험 포인트】\nUDP + 온프레미스 + 글로벌 성능 → NLB + Global Accelerator 조합이 정답"
  },
  {
    "id": 368,
    "question": "솔루션 설계자는 모든 신규 사용자가 특정 복잡성 요구 사항과 IAM 사용자 암호에 대한 필수 교체 기간을 갖기를 원합니다. 이를 달성하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": {
      "A": "전체 AWS 계정에 대한 전반적인 암호 정책을 설정합니다.",
      "B": "AWS 계정의 각 IAM 사용자에 대한 암호 정책을 설정합니다.",
      "C": "타사 공급업체 소프트웨어를 사용하여 암호 요구 사항을 설정합니다.",
      "D": "Amazon CloudWatch 규칙을 Create_newuser 이벤트에 연결하여 적절한 요구 사항으로 암호를 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 계정 암호 정책 — IAM에서 계정 수준의 암호 규칙 정의\n▸ 글로벌 적용 — 모든 신규/기존 사용자에 자동 반영\n\n【정답 포인트】\n▸ IAM 계정 암호 정책은 복잡성, 최소 길이, 교체 기간 등을 일괄 설정\n▸ 개별 설정 불필요, 신규 사용자도 자동 적용\n\n【오답 체크】\n▸\n(B) IAM은 사용자 개별 정책 미지원(계정 단위만)\n▸\n(C) 타사 솔루션은 불필요(AWS 기본 기능으로 충분)\n▸\n(D) CloudWatch는 모니터링용, 정책 설정 기능 없음\n\n【시험 포인트】\n계정 전체 암호 정책 → IAM 계정 암호 정책이 정답"
  },
  {
    "id": 369,
    "question": "회사에서 애플리케이션을 Amazon EC2 Linux 인스턴스로 마이그레이션했습니다. 이러한 EC2 인스턴스 중 하나는 일정에 따라 여러 개의 1 시간 작업을 실행합니다. 이러한 작업은 서로 다른 팀에서 작성했으며 공통 프로그래밍 언어가 없습니다. 회사는 이러한 작업이 단일 인스턴스에서 실행되는 동안 성능과 확장성에 대해 우려하고 있습니다. 솔루션 설계자는 이러한 문제를 해결하기 위한 솔루션을 구현해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Batch 를 사용하여 작업을 작업으로 실행합니다. Amazon EventBridge(Amazon CloudWatch Events)를 사용하여 작업을 예약합니다.",
      "B": "EC2 인스턴스를 컨테이너로 변환합니다. AWS App Runner를 사용하여 작업을 작업으로 실행할 온디맨드 컨테이너를 생성합니다.",
      "C": "작업을 AWS Lambda 함수에 복사합니다. Amazon EventBridge(Amazon CloudWatch Events)를 사용하여 Lambda 함수를 예약합니다.",
      "D": "작업을 실행하는 EC2 인스턴스의 Amazon 머신 이미지(AMI)를 생성합니다. AMI로 Auto Scaling 그룹을 생성하여 인스턴스의 여러 복사본을 실행합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Batch — 배치 처리 최적화 서비스\n▸ 다중 언어 지원 — 컨테이너 기반 작업 실행\n\n【정답 포인트】\n▸ Batch는 다양한 언어/형식의 작업을 컨테이너로 패키징하여 관리\n▸ EventBridge 일정과 결합으로 자동 스케일링 및 순차 실행 제공\n\n【오답 체크】\n▸\n(B) App Runner는 웹 애플리케이션용, 배치 작업에 부적합\n▸\n(C) Lambda는 15분 제한으로 1시간 작업 불가능\n▸\n(D) Auto Scaling은 비용 낭비, 복잡한 조정 필요\n\n【시험 포인트】\n다중 언어 배치 작업 → AWS Batch + EventBridge 조합이 정답"
  },
  {
    "id": 370,
    "question": "회사는 VPC 에서 공용 3 계층 웹 애플리케이션을 실행합니다. 애플리케이션은 여러 가용 영역의 Amazon EC2 인스턴스에서 실행됩니다. 프라이빗 서브넷에서 실행되는 EC2 인스턴스는 인터넷을 통해 라이선스 서버와 통신해야 합니다. 회사는 운영 유지 보수를 최소화하는 관리형 솔루션이 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "퍼블릭 서브넷에서 NAT 인스턴스를 프로비저닝합니다. NAT 인스턴스를 가리키는 기본 경로로 각 프라이빗 서브넷의 경로 테이블을 수정합니다.",
      "B": "프라이빗 서브넷에서 NAT 인스턴스를 프로비저닝합니다. NAT 인스턴스를 가리키는 기본 경로로 각 프라이빗 서브넷의 경로 테이블을 수정합니다.",
      "C": "퍼블릭 서브넷에서 NAT 게이트웨이를 프로비저닝합니다. NAT 게이트웨이를 가리키는 기본 경로로 각 프라이빗 서브넷의 경로 테이블을 수정합니다.",
      "D": "프라이빗 서브넷에서 NAT 게이트웨이를 프로비저닝합니다. NAT 게이트웨이를 가리키는 기본 경로로 각 프라이빗 서브넷의 경로 테이블을 수정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ NAT 게이트웨이 — 관리형 아웃바운드 NAT 서비스\n▸ 퍼블릭 서브넷 위치 — 인터넷 게이트웨이와 통신 필요\n\n【정답 포인트】\n▸ NAT 게이트웨이는 AWS 관리형으로 패치/유지보수 자동화\n▸ 퍼블릭 서브넷 배치로 프라이빗 인스턴스의 아웃바운드 인터넷 통신 지원\n\n【오답 체크】\n▸\n(A) NAT 인스턴스는 수동 관리 필요(운영 오버헤드 높음)\n▸\n(B) NAT는 퍼블릭 서브넷에만 배치 가능\n▸\n(D) NAT 게이트웨이는 퍼블릭만 지원(프라이빗 배치 불가)\n\n【시험 포인트】\n관리형 아웃바운드 NAT → NAT 게이트웨이(퍼블릭) 선택이 정답"
  },
  {
    "id": 371,
    "question": "회사는 디지털 미디어 스트리밍 애플리케이션을 호스팅하기 위해 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 생성해야 합니다. EKS 클러스터는 저장을 위해 Amazon Elastic Block Store(Amazon EBS) 볼륨이 지원하는 관리형 노드 그룹을 사용합니다. 회사는 AWS Key Management Service(AWS KMS)에 저장된 고객 관리형 키를 사용하여 유휴 상태의 모든 데이터를 암호화해야 합니다. 최소한의 운영 오버헤드로 이 요구 사항을 충족하는 작업 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "고객 관리 키를 사용하는 Kubernetes 플러그인을 사용하여 데이터 암호화를 수행합니다.",
      "B": "EKS 클러스터 생성 후 EBS 볼륨을 찾습니다. 고객 관리형 키를 사용하여 암호화를 활성화합니다.",
      "C": "EKS 클러스터가 생성될 AWS 리전에서 기본적으로 EBS 암호화를 활성화합니다. 고객 관리형 키를 기본 키로 선택합니다.",
      "D": "EKS 클러스터를 생성합니다. 고객 관리형 키에 대한 권한을 부여하는 정책이 있는 IAM 역할을 생성합니다. 역할을 EKS 클러스터와 연결합니다.",
      "E": "고객 관리형 키를 EKS 클러스터에 Kubernetes 비밀로 저장합니다. 고객 관리형 키를 사용하여 EBS 볼륨을 암호화합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ 리전 수준 EBS 기본 암호화 — 모든 신규 EBS에 자동 적용\n▸ 기본 KMS 키 — 리전 내 EBS 암호화 기본값 설정\n\n【정답 포인트】\n▸\n(B) EKS 클러스터 생성 후 개별 EBS 암호화는 수동이므로 번거로움\n▸\n(D) IAM 역할 + 키 정책으로 EKS가 KMS 키에 접근 권한 보유\n\n【오답 체크】\n▸\n(A) Kubernetes 플러그인은 표준 솔루션 아님\n▸\n(C) 리전 기본 설정만으로는 정책(IAM 역할) 구성 불완전\n▸\n(E) 비밀에 키 저장은 보안 위협, Kubernetes는 EBS 관리 불가\n\n【시험 포인트】\nEBS 암호화 + 권한 관리 → 리전 기본값 + IAM 역할 조합이 정답"
  },
  {
    "id": 372,
    "question": "회사에서 Oracle 데이터베이스를 AWS 로 마이그레이션하려고 합니다. 데이터베이스는 지리 코드로 식별되는 고해상도 지리 정보 시스템(GIS) 이미지 수백만 개가 포함된 단일 테이블로 구성됩니다. 자연 재해가 발생하면 몇 분마다 수만 개의 이미지가 업데이트됩니다. 각 지리적 코드에는 연결된 단일 이미지 또는 행이 있습니다. 회사는 이러한 이벤트 중에 가용성과 확장성이 뛰어난 솔루션을 원합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "이미지와 지리적 코드를 데이터베이스 테이블에 저장합니다. Amazon RDS 다중 AZ DB 인스턴스에서 실행되는 Oracle을 사용합니다.",
      "B": "Amazon S3 버킷에 이미지를 저장합니다. 지리적 코드를 키로, 이미지 S3 URL을 값으로 사용하여 Amazon DynamoDB를 사용합니다.",
      "C": "Amazon DynamoDB 테이블에 이미지와 지리적 코드를 저장합니다. 부하가 높은 시간 동안 DynamoDB Accelerator(DAX)를 구성합니다.",
      "D": "Amazon S3 버킷에 이미지를 저장합니다. 지리 코드와 이미지 S3 URL 을 데이터베이스 테이블에 저장합니다. Amazon RDS 다중 AZ DB에서 실행되는 Oracle 사용"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 + DynamoDB 분리 — 이미지와 메타데이터 저장소 분리\n▸ 지리적 코드 파티셔닝 — 같은 코드의 업데이트는 단일 파티션 처리\n\n【정답 포인트】\n▸ DynamoDB는 지리적 코드 기반 파티셔닝으로 높은 동시성 업데이트 지원\n▸ S3는 이미지 저장소로 확장성 우수 + 비용 효율적\n\n【오답 체크】\n▸\n(A) RDS는 대량 이미지 저장에 비용 비효율\n▸\n(C) DynamoDB에 이미지 저장 시 매우 비싼 비용(최대 400KB 제한)\n▸\n(D) RDS + S3 조합은 메타데이터 쿼리 성능 낮음\n\n【시험 포인트】\n대용량 파일 + 높은 동시성 → S3 + DynamoDB 분리 저장 정답"
  },
  {
    "id": 373,
    "question": "회사에 자동차의 loT 센서에서 데이터를 수집하는 애플리케이션이 있습니다. 데이터는 Amazon Kinesis Data를 통해 Amazon S3에 스트리밍 및 저장됩니다. 소방 호스. 데이터는 매년 수조 개의 S3 객체를 생성합니다. 매일 아침 회사는 지난 30 일 동안의 데이터를 사용하여 일련의 기계 학습(ML) 모델을 재교육합니다. 매년 4 회 회사는 이전 12 개월의 데이터를 사용하여 분석을 수행하고 다른 ML 모델을 교육합니다. 데이터는 최대 1 년 동안 최소한의 지연으로 사용할 수 있어야 합니다. 1 년 후에는 데이터를 보관 목적으로 보관해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 스토리지 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 Intelligent-Tiering 스토리지 클래스를 사용합니다. 1 년 후 객체를 S3 Glacier Deep Archive로 전환하는 S3 수명 주기 정책을 생성합니다.",
      "B": "S3 Intelligent-Tiering 스토리지 클래스를 사용합니다. 1년 후 자동으로 객체를 S3 Glacier Deep Archive로 이동하도록 S3 Intelligent-Tiering을 구성합니다.",
      "C": "S3 Standard-Infrequent Access(S3 Standard-IA) 스토리지 클래스를 사용합니다. 1년 후 객체를 S3 Glacier Deep Archive로 전환하는 S3 수명 주기 정책을 생성합니다.",
      "D": "S3 Standard 스토리지 클래스를 사용합니다. 30일 후에 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환한 다음 1년 후에 S3 Glacier Deep Archive로 전환하는 S3 수명 주기 정책을 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 수명 주기 정책 — 시간 경과에 따른 스토리지 클래스 자동 전환\n▸ 3단계 계층 — Standard → IA → Glacier Deep Archive\n\n【정답 포인트】\n▸ Standard는 일일 ML 모델 재교육(30일)에 최적 성능\n▸ 30일 후 IA로 전환(저비용), 1년 후 Glacier로 보관(최소 비용)\n\n【오답 체크】\n▸\n(A) Intelligent-Tiering은 접근 패턴 기반 자동 이동이므로 30일 경계 미보장\n▸\n(B) 동일 이유(자동 이동 예측 불가)\n▸\n(C) IA는 30일 이전 비용이 더 높음\n\n【시험 포인트】\n다단계 수명 주기 + 성능 최적 → 명시적 시점 전환이 정답"
  },
  {
    "id": 374,
    "question": "한 회사가 us-east-1 리전 내의 3 개의 별도 VPC 에서 여러 비즈니스 애플리케이션을 실행하고 있습니다. 애플리케이션은 VPC 간에 통신할 수 있어야 합니다. 또한 애플리케이션은 단일 온프레미스 데이터 센터에서 실행되는 대기 시간에 민감한 애플리케이션에 매일 수백 기가바이트의 데이터를 지속적으로 보낼 수 있어야 합니다. 솔루션 설계자는 비용 효율성을 극대화하는 네트워크 연결 솔루션을 설계해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "데이터 센터에서 AWS 로 3 개의 AWS Site-to-Site VPN 연결을 구성합니다. 각 VPC 에 대해 하나의 VPN 연결을 구성하여 연결을 설정합니다.",
      "B": "각 VPC 에서 타사 가상 네트워크 어플라이언스를 시작합니다. 데이터 센터와 각 가상 어플라이언스 간에 IPsec VPN 터널을 설정합니다.",
      "C": "데이터 센터에서 us-east-1 의 Direct Connect 게이트웨이로 3 개의 AWS Direct Connect 연결을 설정합니다. Direct Connect 연결 중 하나를 사용하도록 각 VPC 를 구성하여 연결을 설정합니다.",
      "D": "데이터 센터에서 AWS 로 하나의 AWS Direct Connect 연결을 설정합니다. 전송 게이트웨이를 생성하고 각 VPC 를 전송 게이트웨이에 연결합니다. Direct Connect 연결과 transit gateway 간의 연결을 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Transit Gateway — VPC/온프레미스 간 중앙 라우터\n▸ Direct Connect — 저지연 고속 연결(데이터 기가바이트 전송)\n\n【정답 포인트】\n▸ 단일 Direct Connect로 온프레미스 연결 + Transit Gateway로 VPC 통신 중앙화\n▸ 비용 효율: 1개 Direct Connect + 3개 VPC 연결(확장 비용 최소)\n\n【오답 체크】\n▸\n(A) 3개 VPN은 인터넷 기반(지연 높음, 수백 GB 부적합)\n▸\n(B) 타사 어플라이언스 운영 오버헤드 높음 + 비용 비효율\n▸\n(C) 3개 Direct Connect 비용 낭비(다대일 불필요)\n\n【시험 포인트】\n대역폭 + 저지연 + VPC 통신 → Transit Gateway + 단일 Direct Connect"
  },
  {
    "id": 375,
    "question": "전자상거래 회사는 주문 처리 작업을 완료하기 위해 여러 서버리스 기능과 AWS 서비스를 포함하는 분산 애플리케이션을 구축하고 있습니다. 이러한 작업에는 워크플로의 일부로 수동 승인이 필요합니다. 솔루션 설계자는 주문 처리 애플리케이션을 위한 아키텍처를 설계해야 합니다. 솔루션은 여러 AWS Lambda 기능을 반응형 서버리스 애플리케이션으로 결합할 수 있어야 합니다. 솔루션은 또한 Amazon EC2 인스턴스, 컨테이너 또는 온프레미스 서버에서 실행되는 데이터 및 서비스를 오케스트레이션해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Step Functions를 사용하여 애플리케이션을 구축하십시오.",
      "B": "AWS Glue 작업에서 모든 애플리케이션 구성 요소를 통합합니다.",
      "C": "Amazon Simple Queue Service(Amazon SQS)를 사용하여 애플리케이션을 구축합니다.",
      "D": "AWS Lambda 함수와 Amazon EventBridge 이벤트를 사용하여 애플리케이션을 구축합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Step Functions — 서버리스 워크플로 오케스트레이션\n▸ 수동 승인 — 대기 상태(Wait for Task Token) 지원\n\n【정답 포인트】\n▸ Step Functions는 Lambda, EC2, 컨테이너, 온프레미스 등 다양한 리소스 통합 가능\n▸ 상태 머신으로 복잡한 워크플로(승인 대기 포함) 관리 용이\n\n【오답 체크】\n▸\n(B) Glue는 ETL용, 오케스트레이션 기능 제한적\n▸\n(C) SQS는 메시징만 가능, 워크플로 제어 불가\n▸\n(D) EventBridge는 이벤트 라우팅만 가능(상태 추적 불가)\n\n【시험 포인트】\n복잡한 워크플로 + 수동 승인 → Step Functions 오케스트레이션 정답"
  },
  {
    "id": 376,
    "question": "한 회사에서 MySQL DB 인스턴스용 Amazon RDS 를 출시했습니다. 데이터베이스에 대한 대부분의 연결은 서버리스 애플리케이션에서 발생합니다. 데이터베이스에 대한 애플리케이션 트래픽은 임의의 간격으로 크게 변경됩니다. 수요가 많을 때 사용자는 애플리케이션에 데이터베이스 연결 거부 오류가 발생한다고 보고합니다. 최소한의 운영 오버헤드로 이 문제를 해결하는 솔루션은 무엇입니까?",
    "options": {
      "A": "RDS Proxy 에서 프록시를 생성합니다. RDS Proxy 를 통해 DB 인스턴스를 사용하도록 사용자 애플리케이션을 구성합니다.",
      "B": "사용자 애플리케이션과 DB 인스턴스 간에 Amazon ElastiCache for Memcached 를 배포합니다.",
      "C": "I/O 용량이 더 큰 다른 인스턴스 클래스로 DB 인스턴스를 마이그레이션합니다. 새 DB 인스턴스를 사용하도록 사용자 애플리케이션을 구성합니다.",
      "D": "DB 인스턴스에 대한 다중 AZ 를 구성합니다. DB 인스턴스 간에 전환하도록 사용자 애플리케이션을 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RDS Proxy — 데이터베이스 연결 풀 관리\n▸ 연결 재사용 — 기존 연결을 여러 애플리케이션과 공유\n\n【정답 포인트】\n▸ RDS Proxy는 데이터베이스 연결 수 제한 문제 해결\n▸ 서버리스 워크로드의 스파이크 트래픽에 효과적 + 운영 자동화\n\n【오답 체크】\n▸\n(B) 캐시는 연결 문제 해결 불가(조회 성능만 개선)\n▸\n(C) 인스턴스 업그레이드는 연결 수 제한 근본 해결 안 됨\n▸\n(D) 다중 AZ는 고가용성만 제공, 연결 풀 관리 불가\n\n【시험 포인트】\n연결 거부 + 변동 트래픽 → RDS Proxy 연결 풀링이 정답"
  },
  {
    "id": 377,
    "question": "한 회사는 최근 Amazon EC2 인스턴스에 대해 운영 체제 버전, 패치 및 설치된 소프트웨어에 대한 정보를 중앙 집중화하기 위해 새로운 감사 시스템을 배포했습니다. 솔루션 설계자는 EC2 Auto Scaling 그룹을 통해 프로비저닝된 모든 인스턴스가 시작 및 종료되는 즉시 성공적으로 감사 시스템에 보고서를 보내도록 해야 합니다. 이러한 목표를 가장 효율적으로 달성하는 솔루션은 무엇입니까?",
    "options": {
      "A": "예약된 AWS Lambda 함수를 사용하고 모든 EC2 인스턴스에서 원격으로 스크립트를 실행하여 데이터를 감사 시스템으로 보냅니다.",
      "B": "EC2 Auto Scaling 수명 주기 후크를 사용하여 인스턴스가 시작되고 종료될 때 감사 시스템에 데이터를 보내는 사용자 지정 스크립트를 실행합니다.",
      "C": "EC2 Auto Scaling 시작 구성을 사용하여 사용자 데이터를 통해 사용자 지정 스크립트를 실행하여 인스턴스가 시작되고 종료될 때 감사 시스템에 데이터를 보냅니다.",
      "D": "인스턴스 운영 체제에서 사용자 지정 스크립트를 실행하여 데이터를 감사 시스템으로 보냅니다. 인스턴스가 시작되고 종료될 때 EC2 Auto Scaling 그룹에서 호출할 스크립트를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Auto Scaling 수명 주기 후크 — 인스턴스 시작/종료 시점 제어\n▸ 즉시 보고 — 라이프사이클 이벤트 트리거\n\n【정답 포인트】\n▸ 수명 주기 후크는 인스턴스 시작/종료 시 정확히 감사 데이터 수집\n▸ 사용자 지정 스크립트로 실시간 보고 가능\n\n【오답 체크】\n▸\n(A) 정기적 Lambda는 즉시성 부족(시작/종료 놓칠 수 있음)\n▸\n(C) 사용자 데이터는 시작만 가능(종료 시 실행 불가)\n▸\n(D) 수동 구성은 Auto Scaling과 자동 연계 불가\n\n【시험 포인트】\nAuto Scaling 이벤트 감지 + 즉시 보고 → 수명 주기 후크 정답"
  },
  {
    "id": 378,
    "question": "한 회사에서 Auto Scaling 그룹의 클라이언트와 서버 간의 통신에 UDP 를 사용하는 실시간 멀티플레이어 게임을 개발하고 있습니다. 하루 동안 수요가 급증할 것으로 예상되므로 게임 서버 플랫폼은 그에 따라 적응해야 합니다. 개발자는 개입 없이 확장되는 데이터베이스 솔루션에 게이머 점수 및 기타 비관계형 데이터를 저장하기를 원합니다. 솔루션 설계자는 어떤 솔루션을 추천해야 합니까?",
    "options": {
      "A": "트래픽 분산에는 Amazon Route 53 을 사용하고 데이터 저장에는 Amazon Aurora Serverless를 사용하십시오.",
      "B": "트래픽 분산을 위해 Network Load Balancer 를 사용하고 데이터 저장을 위해 주문형 Amazon DynamoDB를 사용합니다.",
      "C": "트래픽 분산을 위해 Network Load Balancer 를 사용하고 데이터 저장을 위해 Amazon Aurora Global Database를 사용합니다.",
      "D": "트래픽 분산을 위해 Application Load Balancer 를 사용하고 데이터 저장을 위해 Amazon DynamoDB 전역 테이블을 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ UDP 게임 프로토콜 — NLB 필수(Layer 4)\n▸ DynamoDB 주문형 — 자동 확장(서버리스)\n\n【정답 포인트】\n▸ NLB는 UDP 지원 + 극저지연 게임 통신 최적\n▸ DynamoDB 주문형은 동시 사용자 급증에 자동 확장(운영 없음)\n\n【오답 체크】\n▸\n(A) Route 53은 로드 밸런싱 불가(DNS만) + Aurora는 관계형(비관계형 데이터 부적합)\n▸\n(C) ALB는 HTTP/HTTPS만(UDP 불지원) + Global DB는 멀티리전(과도한 복잡성)\n▸\n(D) ALB는 UDP 미지원 + 글로벌 테이블은 경합성 필요(부하 관리 복잡)\n\n【시험 포인트】\nUDP 게임 + 자동 확장 → NLB + DynamoDB 주문형 조합 정답"
  },
  {
    "id": 379,
    "question": "회사는 AWS Lambda 와 통합된 Amazon API Gateway API 백엔드를 사용하는 프런트엔드 애플리케이션을 호스팅합니다. API 가 요청을 받으면 Lambda 함수는 많은 라이브러리를 로드합니다. 그런 다음 Lambda 함수는 Amazon RDS 데이터베이스에 연결하여 데이터를 처리하고 프런트엔드 애플리케이션에 데이터를 반환합니다. 회사는 회사 운영에 대한 변경 횟수를 최소화하면서 모든 사용자의 응답 대기 시간을 가능한 한 낮추고자 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "API 를 우회하여 쿼리 속도를 높이려면 프런트엔드 애플리케이션과 데이터베이스 사이에 연결을 설정합니다.",
      "B": "요청을 처리하는 Lambda 함수에 대해 프로비저닝된 동시성을 구성합니다.",
      "C": "유사한 데이터 세트를 더 빠르게 검색하기 위해 쿼리 결과를 Amazon S3에 캐시합니다.",
      "D": "Lambda가 한 번에 설정할 수 있는 연결 수를 늘리려면 데이터베이스 크기를 늘립니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 프로비저닝된 동시성 — Lambda 초기화 시간 제거\n▸ 콜드 스타트 — 라이브러리 로드 지연 극복\n\n【정답 포인트】\n▸ 프로비저닝 동시성은 함수를 미리 실행 상태로 유지\n▸ 라이브러리 로드 시간 생략으로 응답 지연 최소화\n\n【오답 체크】\n▸\n(A) 직접 DB 연결은 보안 위험 + API 우회(운영 복잡성 증가)\n▸\n(C) S3 캐시는 쿼리 지연 해결 아님(캐시 무효화 문제)\n▸\n(D) DB 크기는 연결 수 해결만(라이브러리 로드 지연 해결 안 됨)\n\n【시험 포인트】\nLambda 콜드 스타트 + 지연 감소 → 프로비저닝 동시성 정답"
  },
  {
    "id": 380,
    "question": "회사에서 온프레미스 워크로드를 AWS 클라우드로 마이그레이션하고 있습니다. 이 회사는 이미 여러 Amazon EC2 인스턴스와 Amazon RDS DB 인스턴스를 사용하고 있습니다. 회사는 업무 시간 외에 EC2 인스턴스와 DB 인스턴스를 자동으로 시작하고 중지하는 솔루션을 원합니다. 솔루션은 비용 및 인프라 유지 관리를 최소화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "탄력적 크기 조정을 사용하여 EC2 인스턴스를 확장합니다. 업무 시간 외에는 DB 인스턴스를 0으로 조정합니다.",
      "B": "일정에 따라 EC2 인스턴스와 DB 인스턴스를 자동으로 시작 및 중지하는 파트너 솔루션에 대한 AWS Marketplace를 살펴보십시오.",
      "C": "다른 EC2 인스턴스를 시작합니다. 일정에 따라 기존 EC2 인스턴스와 DB 인스턴스를 시작 및 중지하는 셸 스크립트를 실행하도록 crontab 일정을 구성합니다.",
      "D": "EC2 인스턴스와 DB 인스턴스를 시작하고 중지할 AWS Lambda 함수를 생성합니다. 일정에 따라 Lambda 함수를 호출하도록 Amazon EventBridge를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ EventBridge 일정 — 크론 표현식 기반 자동 트리거\n▸ Lambda 함수 — 서버리스 작업 실행(운영 오버헤드 없음)\n\n【정답 포인트】\n▸ Lambda + EventBridge는 완전 서버리스로 관리 인프라 불필요\n▸ 비용 최소화: 함수 실행만 비용(상시 실행 없음)\n\n【오답 체크】\n▸\n(A) 탄력적 크기 조정은 일정 기반 아님(항상 최소 인스턴스 실행)\n▸\n(B) 파트너 솔루션은 추가 비용/종속성\n▸\n(C) crontab은 인스턴스 상시 실행 필요(비용 절감 미흡)\n\n【시험 포인트】\n일정 기반 자동 시작/중지 → Lambda + EventBridge 서버리스 정답"
  },
  {
    "id": 381,
    "question": "회사에서 PostgreSQL 데이터베이스를 포함하는 3 계층 웹 애플리케이션을 호스팅합니다. 데이터베이스는 문서의 메타데이터를 저장합니다. 회사는 매달 보고서에서 회사가 검토하는 문서를 검색하기 위해 핵심 용어에 대한 메타데이터를 검색합니다. 문서는 Amazon S3 에 저장됩니다. 문서는 일반적으로 한 번만 작성되지만 자주 업데이트됩니다. 보고 프로세스는 관계형 쿼리를 사용하여 몇 시간이 걸립니다. 보고 프로세스는 문서 수정 또는 새 문서 추가를 방해해서는 안 됩니다. 솔루션 설계자는 보고 프로세스의 속도를 높이는 솔루션을 구현해야 합니다. 애플리케이션 코드를 최소한으로 변경하여 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "읽기 전용 복제본이 포함된 새로운 Amazon DocumentDB(MongoDB 호환) 클러스터를 설정합니다. 읽기 복제본을 확장하여 보고서를 생성합니다.",
      "B": "Aurora 복제본이 포함된 새로운 Amazon Aurora PostgreSQL DB 클러스터를 설정합니다. Aurora 복제본에 쿼리를 실행하여 보고서를 생성합니다.",
      "C": "PostgreSQL 다중 AZ DB 인스턴스용 새 Amazon RDS를 설정합니다. 보고 모듈이 기본 노드에 영향을 주지 않도록 보조 RDS 노드를 쿼리하도록 보고 모듈을 구성합니다.",
      "D": "문서를 저장할 새 Amazon DynamoDB 테이블을 설정합니다. 새 문서 항목을 지원하려면 고정된 쓰기 용량을 사용하십시오. 보고서를 지원하기 위해 읽기 용량을 자동으로 확장합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Aurora 복제본 — 프라이머리와 독립적으로 읽기 쿼리 처리 가능\n▸ 코드 최소 변경 — 기존 PostgreSQL 마이그레이션 용이\n\n【정답 포인트】\n▸ PostgreSQL 기반 → Aurora PostgreSQL 직접 호환\n▸ 읽기 쿼리 분리 → 복제본이 보고서 처리, 프라이머리는 쓰기 전담\n▸ 수평 확장성 → 복제본 추가로 쿼리 성능 향상\n\n【오답 체크】\n(A) DocumentDB는 MongoDB 호환으로 PostgreSQL 스키마 재작성 필요\n(C) RDS 읽기 전용 복제본은 지원 안 함, 다중 AZ는 장애 조치용\n(D) DynamoDB는 관계형 쿼리 지원 불가, 스키마 완전 변경 필요\n\n【시험 포인트】\n▸ \"최소 코드 변경\" → PostgreSQL 호환 솔루션 선택\n▸ \"읽기 쿼리 분리\" → 복제본에 오프로드하는 아키텍처"
  },
  {
    "id": 382,
    "question": "회사는 AWS 에 사용자 장치에서 센서 데이터를 수집하는 3 계층 애플리케이션을 보유하고 있습니다. 트래픽은 NLB(Network Load Balancer)를 거쳐 웹 계층용 Amazon EC2 인스턴스로 이동한 다음 마지막으로 애플리케이션 계층용 EC2 인스턴스로 이동합니다. 애플리케이션 계층은 데이터베이스를 호출합니다. 솔루션 설계자는 전송 중인 데이터의 보안을 개선하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "TLS 수신기를 구성합니다. NLB에 서버 인증서를 배포합니다.",
      "B": "AWS Shield Advanced를 구성합니다. NLB에서 AWS WAF를 활성화합니다.",
      "C": "로드 밸런서를 Application Load Balancer(ALB)로 변경합니다. ALB 에서 AWS WAF 를 활성화합니다.",
      "D": "AWS Key Management Service(AWS KMS)를 사용하여 EC2 인스턴스에서 Amazon Elastic Block Store(Amazon EBS) 볼륨을 암호화합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ TLS — 전송 중 데이터 암호화(in-transit encryption)\n▸ NLB → 계층 4(전송 계층) 로드 밸런싱\n\n【정답 포인트】\n▸ \"전송 중 보안\" → TLS/SSL로 클라이언트-NLB 간 암호화\n▸ NLB는 TLS 리스너 지원 → 서버 인증서 배포로 해결\n▸ 3계층 트래픽 흐름에서 클라이언트 진입점 보호\n\n【오답 체크】\n(B) Shield/WAF → DDoS 방어, 전송 암호화 목적 아님\n(C) ALB로 변경 → 불필요한 아키텍처 변경, NLB도 TLS 가능\n(D) EBS 암호화 → 저장소 보안, 전송 중 보안과 무관\n\n【시험 포인트】\n▸ \"전송 중\" 키워드 → TLS/SSL 암호화 선택\n▸ NLB에서 TLS 구성 가능 — ALB로 변경 불필요"
  },
  {
    "id": 383,
    "question": "한 회사가 온프레미스 데이터 센터에서 AWS 로 상용 기성 애플리케이션을 마이그레이션할 계획입니다. 이 소프트웨어에는 용량 및 가동 시간 요구 사항을 예측할 수 있는 소켓과 코어를 사용하는 소프트웨어 라이센스 모델이 있습니다. 회사는 올해 초에 구입한 기존 라이센스를 사용하려고 합니다. 가장 비용 효율적인 Amazon EC2 요금 옵션은 무엇입니까?",
    "options": {
      "A": "전용 예약 호스트(Dedicated Reserved Hosts)",
      "B": "전용 온디맨드 호스트(Dedicated On-Demand Hosts)",
      "C": "전용 예약 인스턴스(Dedicated Reserved Instances)",
      "D": "전용 온디맨드 인스턴스(Dedicated On-Demand Instances)"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ License Included — 소켓/코어 기반 기존 라이센스 재사용\n▸ Dedicated Host — 물리 서버 단위 구매로 라이센스 적용 가능\n\n【정답 포인트】\n▸ \"기존 라이센스 사용\" → Host 레벨 제어 필수\n▸ \"용량 예측 가능\" → RI(예약)으로 선할인 획득\n▸ Dedicated Reserved Host → 물리 서버 예약 + 라이센스 모니터링 용이\n\n【오답 체크】\n(B) 온디맨드 호스트 → 라이센스 비용 절감 미흡\n(C) 인스턴스 단위 → 소켓/코어 라이센스 추적 어려움\n(D) 온디맨드 인스턴스 → 예약 할인 미적용으로 비용 높음\n\n【시험 포인트】\n▸ \"소켓/코어 라이센스\" → Host 단위 구매 패턴\n▸ \"기존 라이센스\" + \"예측 가능\" → Reserved Host 선택"
  },
  {
    "id": 384,
    "question": "회사는 여러 가용 영역에 걸쳐 Amazon EC2 Linux 인스턴스에서 애플리케이션을 실행합니다. 애플리케이션에는 고가용성 및 POSIX(Portable Operating System Interface) 호환 스토리지 계층이 필요합니다. 스토리지 계층은 최대 데이터 내구성을 제공해야 하며 EC2 인스턴스 간에 공유 가능해야 합니다. 저장소 계층의 데이터는 처음 30 일 동안 자주 액세스되고 그 이후에는 드물게 액세스됩니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 Standard 스토리지 클래스를 사용하십시오. S3 수명 주기 정책을 생성하여 자주 액세스하지 않는 데이터를 S3 Glacier로 이동합니다.",
      "B": "Amazon S3 Standard 스토리지 클래스를 사용합니다. S3 수명 주기 정책을 생성하여 자주 액세스하지 않는 데이터를 S3 Standard-Infrequent Access(S3 Standard-IA)로 이동합니다.",
      "C": "Amazon Elastic File System(Amazon EFS) Standard 스토리지 클래스를 사용합니다. 자주 액세스하지 않는 데이터를 EFS Standard-Infrequent Access(EFS Standard-IA)로 이동하는 수명 주기 관리 정책을 만듭니다.",
      "D": "Amazon Elastic File System(Amazon EFS) One Zone 스토리지 클래스를 사용합니다. 자주 액세스하지 않는 데이터를 EFS One Zone-Infrequent Access(EFS One Zone-IA)로 이동하는 수명 주기 관리 정책을 만듭니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ POSIX 호환 — Unix/Linux 표준 파일 인터페이스 필요\n▸ 다중 AZ 공유 → 네트워크 파일 시스템 필수\n▸ EFS-IA — 저접근 데이터 자동 이동으로 비용 최적화\n\n【정답 포인트】\n▸ \"POSIX 호환\" → S3(객체 저장소) 제외, EFS 선택\n▸ \"다중 AZ 공유\" → EFS Multi-AZ 기본 제공\n▸ \"30일 후 드물게 접근\" → Standard-IA로 자동 이동 설정\n\n【오답 체크】\n(A) S3 Glacier → 조회 지연(분 단위), POSIX 미지원\n(B) S3 Standard-IA → 객체 저장소, 공유 파일 시스템 아님\n(D) One Zone-IA → 단일 AZ, \"고가용성\" 요구 미충족\n\n【시험 포인트】\n▸ POSIX + 다중 AZ → EFS만 가능\n▸ \"초기 자주, 이후 드물게\" → IA 계층 수명 주기 활용"
  },
  {
    "id": 385,
    "question": "솔루션 아키텍트가 새로운 VPC 디자인을 만들고 있습니다. 로드 밸런서용 퍼블릭 서브넷 2 개, 웹 서버용 프라이빗 서브넷 2 개, MySQL 용 프라이빗 서브넷 2 개가 있습니다. 웹 서버는 HTTPS 만 사용합니다. 솔루션 설계자는 이미 0.0.0.0/0 에서 포트 443 을 허용하는 로드 밸런서용 보안 그룹을 생성했습니다. 회사 정책에서는 각 리소스가 작업을 수행하는 데 필요한 최소한의 액세스 권한을 갖도록 요구합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자가 사용해야 하는 추가 구성 전략은 무엇입니까?",
    "options": {
      "A": "웹 서버용 보안 그룹을 생성하고 0.0.0.0/0에서 포트 443을 허용합니다. MySQL 서버용 보안 그룹을 만들고 웹 서버 보안 그룹에서 포트 3306을 허용합니다.",
      "B": "웹 서버용 네트워크 ACL 을 생성하고 0.0.0.0/0 에서 포트 443 을 허용합니다. MySQL 서버용 네트워크 ACL을 생성하고 웹 서버 보안 그룹에서 포트 3306을 허용합니다.",
      "C": "웹 서버용 보안 그룹을 만들고 로드 밸런서에서 포트 443을 허용합니다. MySQL 서버용 보안 그룹을 만들고 웹 서버 보안 그룹에서 포트 3306을 허용합니다.",
      "D": "웹 서버에 대한 네트워크 ACL 을 생성하고 로드 밸런서에서 포트 443 을 허용합니다. MySQL 서버용 네트워크 ACL 을 생성하고 웹 서버 보안 그룹에서 포트 3306 을 허용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 최소 권한 원칙 — 필요한 최소 권한만 부여\n▸ 보안 그룹 우선 — 1차 방어선, 네트워크 ACL은 2차\n▸ 그룹 간 참조 — CIDR 대신 보안 그룹 ID로 통신 제한\n\n【정답 포인트】\n▸ 웹 서버 SG → LB 보안 그룹만 443 허용(0.0.0.0/0 제외)\n▸ MySQL SG → 웹 서버 SG에서만 3306 허용\n▸ 보안 그룹 체인 → 계층 간 최소 권한 실현\n\n【오답 체크】\n(A) 0.0.0.0/0 허용 → 최소 권한 원칙 위배\n(B) 네트워크 ACL → 보안 그룹보다 관리 복잡, 우선순위 낮음\n(D) LB에서 직접 443 → 로드 밸런서 SG 참조 필요, ACL은 부적절\n\n【시험 포인트】\n▸ \"최소 권한\" → 보안 그룹 체이닝(SG 참조) 활용\n▸ 0.0.0.0/0 제외 → 특정 출처(LB SG)에서만 허용"
  },
  {
    "id": 386,
    "question": "전자상거래 회사는 AWS 에서 다중 계층 애플리케이션을 실행하고 있습니다. 프런트 엔드 및 백엔드 계층은 모두 Amazon EC2 에서 실행되고 데이터베이스는 Amazon RDS for MySQL 에서 실행됩니다. 백엔드 계층은 RDS 인스턴스와 통신합니다. 성능 저하를 일으키는 데이터베이스에서 동일한 데이터 세트를 반환하라는 호출이 자주 있습니다. 백엔드의 성능을 개선하려면 어떤 조치를 취해야 합니까?",
    "options": {
      "A": "Amazon SNS를 구현하여 데이터베이스 호출을 저장합니다.",
      "B": "Amazon ElastiCache를 구현하여 대규모 데이터 세트를 캐싱합니다.",
      "C": "데이터베이스 호출을 캐시하기 위해 RDS for MySQL 읽기 전용 복제본을 구현합니다.",
      "D": "Amazon Kinesis Data Firehose를 구현하여 호출을 데이터베이스로 스트리밍합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 동일 데이터 반복 쿼리 — 캐싱으로 메모리 접근 우선\n▸ ElastiCache — Redis/Memcached 기반 고속 캐시\n\n【정답 포인트】\n▸ \"동일 데이터 세트\" + \"자주 요청\" → 캐시 히트율 높음\n▸ ElastiCache 미초 응답 시간 → 데이터베이스 부하 감소\n▸ 대규모 데이터셋 → 메모리 기반 저장소로 효율적 처리\n\n【오답 체크】\n(A) SNS → 메시징 서비스, 캐싱 기능 없음\n(C) 읽기 복제본 → 데이터베이스 부하 여전히 발생\n(D) Kinesis Firehose → 스트리밍/ETL용, 캐싱 목적 아님\n\n【시험 포인트】\n▸ \"성능 저하\" + \"동일 데이터\" 반복 → ElastiCache 캐싱\n▸ 데이터베이스 직접 호출 최소화 전략 선택"
  },
  {
    "id": 387,
    "question": "신입 사원이 배포 엔지니어로 회사에 합류했습니다. 배포 엔지니어는 AWS CloudFormation 템플릿을 사용하여 여러 AWS 리소스를 생성합니다. 솔루션 설계자는 배포 엔지니어가 최소 권한 원칙에 따라 작업 활동을 수행하기를 원합니다. 이 목표를 달성하기 위해 솔루션 설계자가 취해야 하는 작업 조합은 무엇입니까? (2 개 선택)",
    "options": {
      "A": "배포 엔지니어가 AWS CloudFormation 스택 작업을 수행하기 위해 AWS 계정 루트 사용자 자격 증명을 사용하도록 합니다.",
      "B": "배포 엔지니어를 위한 새 IAM 사용자를 생성하고 PowerUsers IAM 정책이 연결된 그룹에 IAM 사용자를 추가합니다.",
      "C": "배포 엔지니어를 위한 새 IAM 사용자를 생성하고 AdministratorAccess IAM 정책이 연결된 그룹에 IAM 사용자를 추가합니다.",
      "D": "배포 엔지니어를 위한 새 IAM 사용자를 생성하고 AWS CloudFormation 작업만 허용하는 IAM 정책이 있는 그룹에 IAM 사용자를 추가합니다.",
      "E": "배포 엔지니어를 위한 IAM 역할을 생성하여 해당 IAM 역할을 사용하여 AWS CloudFormation 스택 및 시작 스택에 특정한 권한을 명시적으로 정의합니다."
    },
    "answer": "DE",
    "explanation": "【핵심 용어】\n▸ 최소 권한 원칙 — CloudFormation 작업에 필요한 권한만 부여\n▸ IAM 역할 → 서비스(EC2, Lambda) 임시 권한 부여\n▸ 명시적 정의 — 포괄적 권한(PowerUsers, Admin) 제외\n\n【정답 포인트】\n▸\n(D) CF 작업 전용 정책 → 최소 권한 구현\n▸\n(E) IAM 역할 + 명시적 권한 → 스택별 세밀한 권한 제어\n▸ 조합: 사용자 정책\n(D) + 역할 정책\n(E) 으로 이중 제어\n\n【오답 체크】\n(A) 루트 자격증명 → 최소 권한 원칙 위배\n(B) PowerUsers → 관리형 정책, CloudFormation 포함하지만 과도한 권한\n(C) AdministratorAccess → 모든 권한 부여, 최소 권한 원칙 완전 위배\n\n【시험 포인트】\n▸ 최소 권한 → 커스텀 정책\n(D) + 역할 기반 권한\n(E) ▸ 관리형 정책(PowerUsers, Admin) 제외하는 것이 핵심"
  },
  {
    "id": 388,
    "question": "회사에서 VPC 에 2 계층 웹 애플리케이션을 배포하고 있습니다. 웹 계층은 여러 가용 영역에 걸쳐 있는 퍼블릭 서브넷이 있는 Amazon EC2 Auto Scaling 그룹을 사용하고 있습니다. 데이터베이스 계층은 별도의 프라이빗 서브넷에 있는 MySQL DB 인스턴스용 Amazon RDS 로 구성됩니다. 웹 계층은 제품 정보를 검색하기 위해 데이터베이스에 액세스해야 합니다. 웹 응용 프로그램이 의도한 대로 작동하지 않습니다. 웹 애플리케이션에서 데이터베이스에 연결할 수 없다고 보고합니다. 데이터베이스가 가동 및 실행 중인 것으로 확인되었습니다. 네트워크 ACL, 보안 그룹 및 라우팅 테이블에 대한 모든 구성은 여전히 기본 상태입니다. 애플리케이션 수정을 위해 솔루션 아키텍트는 무엇을 추천해야 합니까?",
    "options": {
      "A": "프라이빗 서브넷의 네트워크 ACL 에 명시적 규칙을 추가하여 웹 티어의 EC2 인스턴스에서 오는 트래픽을 허용합니다.",
      "B": "웹 계층의 EC2 인스턴스와 데이터베이스 계층 간의 트래픽을 허용하도록 VPC 경로 테이블에 경로를 추가합니다.",
      "C": "웹 계층의 EC2 인스턴스와 데이터베이스 계층의 RDS 인스턴스를 두 개의 개별 VPC 에 배포하고 VPC 피어링을 구성합니다.",
      "D": "데이터베이스 계층 RDS 인스턴스의 보안 그룹에 인바운드 규칙을 추가하여 웹 계층 보안 그룹의 트래픽을 허용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 기본 보안 그룹 — 인바운드 트래픽 모두 차단\n▸ 보안 그룹 체이닝 — 출발 SG에서 도착 SG로 참조\n\n【정답 포인트】\n▸ 기본 상태 라우팅/NACL → 문제 아님\n▸ \"같은 VPC 내 통신\" → 보안 그룹 설정만 필요\n▸ RDS 인바운드 규칙 → 웹 계층 SG 참조로 3306 허용\n\n【오답 체크】\n(A) NACL → 기본 Allow All이므로 이미 통신 가능\n(B) 라우팅 테이블 → 같은 VPC 내 기본 경로 존재\n(C) VPC 피어링 → 아키텍처 변경, 초과 복잡성\n\n【시험 포인트】\n▸ 같은 VPC 라우팅/NACL 기본값 상태 → 보안 그룹이 병목\n▸ RDS 기본 보안 그룹 → 모든 인바운드 차단 상태 해결"
  },
  {
    "id": 389,
    "question": "회사는 단일 가용 영역의 Amazon RDS for MySQL DB 인스턴스에 저장된 온라인 광고 비즈니스용 대규모 데이터 세트를 보유하고 있습니다. 회사는 프로덕션 DB 인스턴스에 대한 쓰기 작업에 영향을 주지 않고 비즈니스 보고 쿼리를 실행하기를 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "RDS 읽기 복제본을 배포하여 비즈니스 보고 쿼리를 처리합니다.",
      "B": "DB 인스턴스를 Elastic Load Balancer 뒤에 배치하여 수평으로 확장합니다.",
      "C": "DB 인스턴스를 더 큰 인스턴스 유형으로 확장하여 쓰기 작업 및 쿼리를 처리합니다.",
      "D": "비즈니스 보고 쿼리를 처리하기 위해 여러 가용 영역에 DB 인스턴스를 배포합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 읽기 복제본 — 프라이머리의 복제본, 읽기만 가능\n▸ 쓰기-읽기 분리 → 성능 향상\n\n【정답 포인트】\n▸ \"쓰기에 영향 없음\" → 읽기 전용 복제본 생성\n▸ 비즈니스 보고 → 읽기 쿼리, 복제본에 오프로드\n▸ 간단한 구성 → RDS 읽기 복제본 자동 동기화\n\n【오답 체크】\n(B) 로드 밸런서 → 데이터베이스 트래픽 분산 불가\n(C) 수직 확장 → 쓰기 성능은 개선되지만 비용 증가, 읽기 분리 아님\n(D) 다중 AZ → 장애 조치용, 읽기 성능 향상 안 됨\n\n【시험 포인트】\n▸ \"쓰기 영향 없이\" + \"읽기 쿼리\" → 읽기 복제본 패턴\n▸ 보고 작업 → 항상 복제본으로 오프로드 전략"
  },
  {
    "id": 390,
    "question": "회사는 Amazon EC2 인스턴스 플릿에서 3 계층 전자상거래 애플리케이션을 호스팅합니다. 인스턴스는 Application Load Balancer(ALB) 뒤의 Auto Scaling 그룹에서 실행됩니다. 모든 전자상거래 데이터는 MariaDB 다중 AZ DB 인스턴스용 Amazon RDS에 저장됩니다. 회사는 트랜잭션 중에 고객 세션 관리를 최적화하려고 합니다. 애플리케이션은 세션 데이터를 지속적으로 저장해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (2개 선택)",
    "options": {
      "A": "ALB에서 고정 세션 기능(세션 선호도)을 켭니다.",
      "B": "Amazon DynamoDB 테이블을 사용하여 고객 세션 정보를 저장합니다.",
      "C": "Amazon Cognito 사용자 풀을 배포하여 사용자 세션 정보를 관리합니다.",
      "D": "Amazon ElastiCache for Redis 클러스터를 배포하여 고객 세션 정보를 저장합니다.",
      "E": "애플리케이션에서 AWS Systems Manager Application Manager를 사용하여 사용자 세션 정보를 관리합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ 세션 선호도(Sticky Session) — 같은 클라이언트 → 같은 인스턴스\n▸ 지속적 저장 — 메모리가 아닌 데이터베이스/캐시에 저장\n\n【정답 포인트】\n▸\n(A) ALB Sticky Session → 라운드로빈 대신 특정 서버 유지\n▸\n(D) ElastiCache Redis → 세션 스토어, 빠른 접근\n▸ 조합: 라우팅\n(A) + 저장소\n(D) 로 세션 일관성 보장\n\n【오답 체크】\n(B) DynamoDB → 쓰기 비용 높음, 세션용으로는 과도\n(C) Cognito → 사용자 인증, 세션 관리 도구 아님\n(E) Systems Manager → 애플리케이션 관리, 세션 저장소 아님\n\n【시험 포인트】\n▸ Auto Scaling + 세션 → Sticky Session\n(A) + 외부 저장소\n(D) 필수\n▸ \"트랜잭션 중\" → 세션 일관성 > 단순 메모리 캐시"
  },
  {
    "id": 391,
    "question": "회사는 3 계층 상태 비저장 웹 애플리케이션을 위한 백업 전략이 필요합니다. 웹 애플리케이션은 조정 이벤트에 응답하도록 구성된 동적 조정 정책이 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행됩니다. 데이터베이스 계층은 PostgreSQL 용 Amazon RDS 에서 실행됩니다. 웹 애플리케이션은 EC2 인스턴스에 임시 로컬 스토리지가 필요하지 않습니다. 회사의 복구 지점 목표(RPO)는 2시간입니다. 백업 전략은 확장성을 최대화하고 이 환경에 대한 리소스 활용을 최적화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "RPO 를 충족하기 위해 2 시간마다 EC2 인스턴스 및 데이터베이스의 Amazon Elastic Block Store(Amazon EBS) 볼륨의 스냅샷을 생성합니다.",
      "B": "Amazon Elastic Block Store(Amazon EBS) 스냅샷을 생성하도록 스냅샷 수명 주기 정책을 구성합니다. RPO를 충족하기 위해 Amazon RDS에서 자동 백업을 활성화합니다.",
      "C": "웹 및 애플리케이션 계층의 최신 Amazon 머신 이미지(AMI)를 유지합니다. Amazon RDS에서 자동 백업을 활성화하고 지정 시간 복구를 사용하여 RPO를 충족합니다.",
      "D": "2시간마다 EC2 인스턴스의 Amazon Elastic Block Store(Amazon EBS) 볼륨의 스냅샷을 생성합니다. Amazon RDS에서 자동 백업을 활성화하고 지정 시간 복구를 사용하여 RPO를 충족합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 상태 비저장 웹앱 → EC2 인스턴스는 언제든지 교체 가능\n▸ AMI — 웹/앱 계층 재구성 템플릿\n▸ RDS 자동 백업 → 지정 시간 복구(PITR)로 RPO 2시간 달성\n\n【정답 포인트】\n▸ 상태 비저장 → EC2 스냅샷 불필요, AMI만 유지\n▸ EBS/EBS 스냅샷 → 설정 변경용, 지속적 백업 오버헤드\n▸ RDS 자동 백업 + PITR → RPO 2시간 충족, 운영 간단\n\n【오답 체크】\n(A) 2시간 스냅샷 → EC2는 상태 비저장이므로 백업 불필요, 비용 낭비\n(B) EBS 수명 주기 정책만 → RDS 백업 자동화 아님\n(D) EC2 스냅샷 계속 생성 → 상태 비저장 특성 무시, 비용 과다\n\n【시험 포인트】\n▸ 상태 비저장 + Auto Scaling → AMI 템플릿 유지, 인스턴스 백업 X\n▸ \"지속적 저장\" 데이터 → RDS 자동 백업 + PITR만 필요"
  },
  {
    "id": 392,
    "question": "회사에서 AWS 에 새로운 퍼블릭 웹 애플리케이션을 배포하려고 합니다. 애플리케이션에는 Amazon EC2 인스턴스를 사용하는 웹 서버 계층이 포함되어 있습니다. 이 애플리케이션에는 Amazon RDS for MySQL DB 인스턴스를 사용하는 데이터베이스 계층도 포함되어 있습니다. 응용 프로그램은 동적 IP 주소가 있는 글로벌 고객이 안전하고 액세스할 수 있어야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 보안 그룹을 어떻게 구성해야 합니까?",
    "options": {
      "A": "0.0.0.0/0 에서 포트 443 의 인바운드 트래픽을 허용하도록 웹 서버에 대한 보안 그룹을 구성합니다. 웹 서버의 보안 그룹에서 포트 3306 의 인바운드 트래픽을 허용하도록 DB 인스턴스에 대한 보안 그룹을 구성합니다.",
      "B": "고객의 IP 주소에서 포트 443 의 인바운드 트래픽을 허용하도록 웹 서버에 대한 보안 그룹을 구성합니다. 웹 서버의 보안 그룹에서 포트 3306 의 인바운드 트래픽을 허용하도록 DB 인스턴스에 대한 보안 그룹을 구성합니다.",
      "C": "고객의 IP 주소에서 포트 443 의 인바운드 트래픽을 허용하도록 웹 서버에 대한 보안 그룹을 구성합니다. 고객의 IP 주소에서 포트 3306 의 인바운드 트래픽을 허용하도록 DB 인스턴스에 대한 보안 그룹을 구성합니다.",
      "D": "0.0.0.0/0 에서 포트 443 의 인바운드 트래픽을 허용하도록 웹 서버에 대한 보안 그룹을 구성합니다. 0.0.0.0/0 에서 포트 3306 의 인바운드 트래픽을 허용하도록 DB 인스턴스에 대한 보안 그룹을 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 글로벌 고객 → 동적 IP 주소, CIDR 범위 지정 불가\n▸ 보안 그룹 체이닝 → 웹 SG 참조로 DB 접근 제한\n\n【정답 포인트】\n▸ 웹 서버 SG → 0.0.0.0/0 포트 443 허용(인터넷 수용)\n▸ DB SG → 웹 서버 SG만 3306 허용(최소 권한)\n▸ 이중 계층 방어 → 인터넷 ↔ 웹, 웹 ↔ DB만 통신\n\n【오답 체크】\n(B) 고객 IP 사전 파악 불가 → \"동적 IP\" 요구 미충족\n(C) DB를 인터넷에 노출 → 보안 위협\n(D) DB 포트 3306 인터넷 공개 → 보안 최악\n\n【시험 포인트】\n▸ \"동적 IP\" + \"글로벌\" → 0.0.0.0/0만 가능\n▸ \"웹-DB 통신\" → 보안 그룹 참조로 격리(A만 해결)"
  },
  {
    "id": 393,
    "question": "결제 처리 회사는 고객과의 모든 음성 통신을 녹음하고 오디오 파일을 Amazon S3 버킷에 저장합니다. 회사는 오디오 파일에서 텍스트를 캡처해야 합니다. 회사는 텍스트에서 고객에게 속한 모든 개인 식별 정보(PII)를 제거해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon Kinesis Video Streams 를 사용하여 오디오 파일을 처리합니다. AWS Lambda 함수를 사용하여 알려진 PII 패턴을 스캔합니다.",
      "B": "오디오 파일이 S3 버킷에 업로드되면 AWS Lambda 함수를 호출하여 Amazon Textract 작업을 시작하여 통화 녹음을 분석합니다.",
      "C": "PII 수정을 켠 상태로 Amazon Transcribe 전사 작업을 구성합니다. 오디오 파일이 S3 버킷에 업로드되면 AWS Lambda 함수를 호출하여 전사 작업을 시작합니다. 출력을 별도의 S3 버킷에 저장합니다.",
      "D": "트랜스크립션이 켜진 오디오 파일을 수집하는 Amazon Connect 고객 응대 흐름을 생성합니다. 알려진 PII 패턴을 스캔하기 위해 AWS Lambda 함수를 포함합니다. 오디오 파일이 S3 버킷에 업로드되면 Amazon EventBridge 를 사용하여 고객 응대 흐름을 시작하십시오."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Transcribe — 오디오 → 텍스트 변환\n▸ PII 수정(Redaction) — Transcribe 기본 기능\n▸ S3 이벤트 트리거 → Lambda로 자동화\n\n【정답 포인트】\n▸ Transcribe PII 수정 활성화 → 자동으로 민감정보 마스킹\n▸ S3 업로드 → Lambda 트리거 → Transcribe 작업 시작\n▸ 출력을 별도 버킷에 저장 → 원본과 처리본 분리\n\n【오답 체크】\n(A) Kinesis Video Streams → 실시간 스트리밍용, 저장 파일에 부적절\n(B) Textract → 문서 이미지/OCR용, 오디오 처리 불가\n(D) Amazon Connect → 콜센터 플랫폼, S3 보관 오디오 연동 복잡\n\n【시험 포인트】\n▸ \"음성 녹음\" + \"텍스트 변환\" → Transcribe 전담\n▸ \"PII 제거\" → Transcribe의 built-in PII Redaction 기능"
  },
  {
    "id": 394,
    "question": "회사는 AWS 클라우드에서 다중 계층 전자 상거래 웹 애플리케이션을 실행하고 있습니다. 애플리케이션은 Amazon RDS for MySQL 다중 AZ DB 인스턴스와 함께 Amazon EC2 인스턴스에서 실행됩니다. Amazon RDS 는 범용 SSD(gp3) Amazon Elastic Block Store(Amazon EBS) 볼륨에 2,000GB 의 스토리지가 있는 최신 세대 DB 인스턴스로 구성됩니다. 데이터베이스 성능은 수요가 많은 기간 동안 애플리케이션에 영향을 미칩니다. 데이터베이스 관리자는 Amazon CloudWatch Logs 의 로그를 분석하고 읽기 및 쓰기 IOPS 수가 20,000보다 높을 때 애플리케이션 성능이 항상 저하됨을 발견합니다. 애플리케이션 성능을 향상시키기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": {
      "A": "볼륨을 마그네틱 볼륨으로 교체합니다.",
      "B": "gp3 볼륨의 IOPS 수를 늘립니다.",
      "C": "프로비저닝된 IOPS SSD(io2) 볼륨으로 볼륨을 교체합니다.",
      "D": "2,000GB gp3 볼륨을 두 개의 1,000GB gp3 볼륨으로 교체합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ gp3 — 최대 16,000 IOPS(기본 3,000)\n▸ 볼륨 크기 → IOPS 상한선과 관계 없음(일반적)\n▸ 다중 볼륨 → 병렬 처리로 총 IOPS 증가\n\n【정답 포인트】\n▸ 현재 20,000 IOPS 요구 → gp3 단일 최대(16,000) 초과\n▸ 2개 볼륨 분산 → 각 ~10,000 IOPS 처리 가능\n▸ 비용 효율 → io2(더 비쌈) 대신 gp3 2개 활용\n\n【오답 체크】\n(A) 마그네틱 → 구형 저성능, IOPS 더 낮음\n(B) gp3 IOPS 증가 → 최대 16,000 한계, 여전히 부족\n(C) io2 → 비용 높고, 2개 gp3가 경제적\n\n【시험 포인트】\n▸ \"IOPS 초과\" + gp3 → 볼륨 분산이 먼저\n▸ io2 upgrade 전에 → 다중 gp3 병렬화 확인"
  },
  {
    "id": 395,
    "question": "IAM 사용자는 지난 주 프로덕션 배포 중에 회사 계정의 AWS 리소스에 대해 몇 가지 구성을 변경했습니다. 솔루션 설계자는 몇 가지 보안 그룹 규칙이 원하는 대로 구성되지 않았음을 알게 되었습니다. 솔루션 설계자는 어떤 IAM 사용자가 변경을 담당했는지 확인하려고 합니다. 솔루션 설계자는 원하는 정보를 찾기 위해 어떤 서비스를 사용해야 합니까?",
    "options": {
      "A": "Amazon GuardDuty",
      "B": "아마존 인스펙터",
      "C": "AWS 클라우드트레일",
      "D": "AWS 구성"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudTrail — 모든 API 호출 로깅(who/what/when/where)\n▸ 감사 추적(Audit Log) → IAM 사용자 활동 추적\n\n【정답 포인트】\n▸ \"어떤 사용자가\" → IAM 아이디 필요\n▸ \"언제 변경했는지\" → 타임스탐프 필요\n▸ CloudTrail만 제공 → 상세 API 호출 기록\n\n【오답 체크】\n(A) GuardDuty → 악성 활동 탐지, 일반 API 로깅 아님\n(B) Inspector → 취약점 스캔, 변경 추적 기능 없음\n(D) AWS Config → 리소스 상태 변경 이력만, 사용자 정보 없음\n\n【시험 포인트】\n▸ \"누가 변경했는지\" → CloudTrail 필수(감사 추적)\n▸ 보안 그룹 API 호출 기록 → CreateSecurityGroupIngress 등 로깅"
  },
  {
    "id": 396,
    "question": "한 회사가 AWS 에서 자체 관리형 DNS 서비스를 구현했습니다. 솔루션은 다음으로 구성됩니다. • 다른 AWS 지역의 Amazon EC2 인스턴스 • AWS Global Accelerator의 표준 가속기 엔드포인트 회사는 DDoS 공격으로부터 솔루션을 보호하려고 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS Shield Advanced에 가입하십시오. 보호할 리소스로 액셀러레이터를 추가합니다.",
      "B": "AWS Shield Advanced에 가입합니다. 보호할 리소스로 EC2 인스턴스를 추가합니다.",
      "C": "속도 기반 규칙을 포함하는 AWS WAF 웹 ACL 을 생성합니다. 웹 ACL 을 가속기와 연결합니다.",
      "D": "비율 기반 규칙을 포함하는 AWS WAF 웹 ACL 을 생성합니다. 웹 ACL 을 EC2 인스턴스와 연결합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Shield Advanced — DDoS 공격 방어(전용 보호)\n▸ Global Accelerator — 엣지에서 트래픽 진입점\n▸ DNS 레이어 보호 → Global Accelerator 앞단 필수\n\n【정답 포인트】\n▸ DDoS 공격 → Shield Advanced 필수(Shield Standard 불충분)\n▸ Global Accelerator → DDoS 진입점, 보호 대상 1순위\n▸ Shield Advanced 가입 → 가속기를 보호 리소스로 등록\n\n【오답 체크】\n(B) EC2만 보호 → Global Accelerator 미보호, DDoS 진입점 공격\n(C) WAF 속도 규칙 → Layer 7(애플리케이션), Layer 3/4 DDoS 미방어\n(D) WAF + EC2 → 오리진 보호만, 가속기 미보호\n\n【시험 포인트】\n▸ \"DDoS 공격\" → Shield Advanced 전담\n▸ \"Global Accelerator\" → 진입점 보호가 우선순위"
  },
  {
    "id": 397,
    "question": "전자상거래 회사는 분석을 위해 판매 기록을 집계하고 필터링하기 위해 예약된 일일 작업을 실행해야 합니다. 회사는 판매 기록을 Amazon S3 버킷에 저장합니다. 각 개체의 크기는 최대 10GB 입니다. 판매 이벤트 수에 따라 작업을 완료하는 데 최대 1 시간이 걸릴 수 있습니다. 작업의 CPU 및 메모리 사용량은 일정하며 미리 알려져 있습니다. 솔루션 설계자는 작업을 실행하는 데 필요한 운영 노력을 최소화해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon EventBridge 알림이 있는 AWS Lambda 함수를 생성합니다. EventBridge 이벤트가 하루에 한 번 실행되도록 예약합니다.",
      "B": "AWS Lambda 함수를 생성합니다. Amazon API Gateway HTTP API 를 생성하고 API 를 함수와 통합합니다. API 를 호출하고 함수를 호출하는 Amazon EventBridge 예약 이벤트를 생성합니다.",
      "C": "AWS Fargate 시작 유형으로 Amazon Elastic Container Service(Amazon ECS) 클러스터를 생성합니다. 작업을 실행하기 위해 클러스터에서 ECS 작업을 시작하는 Amazon EventBridge 예약 이벤트를 생성합니다.",
      "D": "Amazon EC2 시작 유형이 있는 Amazon Elastic Container Service(Amazon ECS) 클러스터와 하나 이상의 EC2 인스턴스가 있는 Auto Scaling 그룹을 생성합니다. 작업을 실행하기 위해 클러스터에서 ECS 작업을 시작하는 Amazon EventBridge 예약 이벤트를 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 예약 일일 작업 → 정기 실행, EventBridge 스케줄\n▸ 최대 1시간, CPU/메모리 일정 → 컨테이너 적합\n▸ 10GB 파일 처리 → Lambda (15분 제한) 초과 가능\n\n【정답 포인트】\n▸ \"최대 1시간\" → Lambda 15분 제한 초과\n▸ Fargate → 서버 관리 없음, EventBridge 트리거 가능\n▸ 최소 운영 노력 → EC2 인스턴스 관리 불필요\n\n【오답 체크】\n(A) Lambda → 15분 제한, 1시간 작업 불가능\n(B) API Gateway → Lambda와 동일 제한, 불필요한 복잡도\n(D) EC2 + ECS → 인스턴스 관리 오버헤드, Fargate보다 운영 부담\n\n【시험 포인트】\n▸ \"최대 1시간\" → Lambda 제한 초과 → ECS/Fargate\n▸ \"운영 노력 최소\" → Fargate 선택(EC2 관리 X)"
  },
  {
    "id": 398,
    "question": "회사는 온프레미스 NAS(Network-Attached Storage) 시스템에서 AWS 클라우드로 600TB의 데이터를 전송해야 합니다. 데이터 전송은 2 주 이내에 완료되어야 합니다. 데이터는 민감하며 전송 중에 암호화되어야 합니다. 회사의 인터넷 연결은 100Mbps 의 업로드 속도를 지원할 수 있습니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 멀티파트 업로드 기능을 사용하여 HTTPS를 통해 파일을 전송합니다.",
      "B": "온프레미스 NAS 시스템과 가장 가까운 AWS 리전 간에 VPN 연결을 생성합니다. VPN 연결을 통해 데이터를 전송합니다.",
      "C": "AWS Snow Family 콘솔을 사용하여 여러 AWS Snowball Edge Storage Optimized 디바이스를 주문합니다. 디바이스를 사용하여 데이터를 Amazon S3로 전송합니다.",
      "D": "회사 위치와 가장 가까운 AWS 리전 간에 10Gbps AWS Direct Connect 연결을 설정합니다. VPN 연결을 통해 데이터를 리전으로 전송하여 Amazon S3 에 데이터를 저장합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Snow Family — 물리 데이터 전송 서비스(인터넷 불필요)\n▸ 600TB + 2주 + 100Mbps 제약 → Snowball 최적\n\n【정답 포인트】\n▸ 100Mbps 제약 → 600TB를 2주 내 전송 불가능(이론값: ~13주 필요)\n▸ Snowball Edge → 대용량 물리 전송, 암호화 기본 제공\n▸ 가장 비용 효율 → 인터넷 대역폭 구매 불필요\n\n【오답 체크】\n(A) HTTPS 인터넷 업로드 → 100Mbps로 600TB 는 ~13주, 2주 불가능\n(B) VPN → HTTPS와 동일, 대역폭 제약 극복 불가\n(D) Direct Connect → 10Gbps 설정 비용 높음, Snowball 더 경제적\n\n【시험 포인트】\n▸ \"인터넷 대역폭 제약\" + \"대용량\" → Snow Family 고려\n▸ 데이터양/시간 계산 → 인터넷 전송 불가 판정 → Snowball"
  },
  {
    "id": 399,
    "question": "금융 회사는 AWS 에서 웹 애플리케이션을 호스팅합니다. 이 애플리케이션은 Amazon API Gateway 지역 API 엔드포인트를 사용하여 사용자에게 현재 주가를 검색할 수 있는 기능을 제공합니다. 회사의 보안 팀은 API 요청 수가 증가한 것을 확인했습니다. 보안 팀은 HTTP 플러드 공격이 애플리케이션을 오프라인 상태로 만들 수 있다고 우려하고 있습니다. 솔루션 설계자는 이러한 유형의 공격으로부터 애플리케이션을 보호하기 위한 솔루션을 설계해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "최대 TTL 이 24 시간인 API Gateway 지역 API 엔드포인트 앞에 Amazon CloudFront 배포를 생성합니다.",
      "B": "속도 기반 규칙을 사용하여 리전 AWS WAF 웹 ACL 을 생성합니다. 웹 ACL 을 API Gateway 단계와 연결합니다.",
      "C": "Amazon CloudWatch 지표를 사용하여 개수 지표를 모니터링하고 미리 정의된 속도에 도달하면 보안 팀에 알립니다.",
      "D": "API Gateway 지역 API 엔드포인트 앞에 Lambda@Edge 를 사용하여 Amazon CloudFront 배포를 생성합니다. 사전 정의된 속도를 초과하는 IP 주소의 요청을 차단하는 AWS Lambda 함수를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ HTTP 플러드 — Layer 7 애플리케이션 계층 공격\n▸ Rate-based WAF — IP별 요청 속도 제한\n▸ API Gateway 단계 — WAF 직접 통합 가능\n\n【정답 포인트】\n▸ 속도 기반 규칙 → 임계값 초과 IP 자동 차단\n▸ WAF 직접 통합 → 최소 운영 오버헤드\n▸ API Gateway 단계 → 보호 대상 직접 지정\n\n【오답 체크】\n(A) CloudFront 캐싱 → API 동적 응답에 부적절, 캐시 미스 시 플러드 통과\n(C) 모니터링만 → 공격 자동 방어 안 됨, 수동 대응 필요\n(D) Lambda@Edge → 복잡한 설정, CloudFront 필수, WAF 더 간단\n\n【시험 포인트】\n▸ \"HTTP 플러드\" → Layer 7 공격 → WAF rate-based 규칙\n▸ \"최소 운영 오버헤드\" → AWS WAF 자동 차단 기능"
  },
  {
    "id": 400,
    "question": "기상 스타트업 회사는 사용자에게 날씨 데이터를 온라인으로 판매하는 맞춤형 웹 애플리케이션을 보유하고 있습니다. 이 회사는 Amazon DynamoDB 를 사용하여 데이터를 저장하고 새로운 날씨 이벤트가 기록될 때마다 4 개의 내부 팀 관리자에게 경고를 보내는 새로운 서비스를 구축하려고 합니다. 회사는 이 새로운 서비스가 현재 애플리케이션의 성능에 영향을 미치는 것을 원하지 않습니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": {
      "A": "DynamoDB 트랜잭션을 사용하여 새 이벤트 데이터를 테이블에 씁니다. 내부 팀에 알리도록 트랜잭션을 구성합니다.",
      "B": "현재 애플리케이션이 4 개의 Amazon Simple Notification Service(Amazon SNS) 주제에 메시지를 게시하도록 합니다. 각 팀이 하나의 주제를 구독하도록 합니다.",
      "C": "테이블에서 Amazon DynamoDB 스트림을 활성화합니다. 트리거를 사용하여 팀이 구독할 수 있는 단일 Amazon Simple Notification Service(Amazon SNS) 주제에 씁니다.",
      "D": "각 레코드에 사용자 정의 속성을 추가하여 새 항목에 플래그를 지정합니다. 새 항목이 있는지 매분 테이블을 스캔하고 팀이 구독할 수 있는 Amazon Simple Queue Service(Amazon SQS) 대기열에 알리는 cron 작업을 작성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ DynamoDB 스트림 — 데이터 변경을 실시간으로 캡처하는 서비스\n▸ Lambda 트리거 — 스트림 이벤트 감지 시 자동 호출\n▸ SNS 디커플링 — 쓰기와 알림 로직을 분리\n\n【정답 포인트】\n▸ \"현재 애플리케이션의 성능에 영향\" → 쓰기 경로와 분리 필요\n▸ \"운영 오버헤드 최소\" → 서버리스(Lambda) 선택\n▸ DynamoDB 스트림 활성화 → Lambda가 변경사항 자동 감지\n▸ SNS 게시 → 4개 팀에 확장성 있는 알림\n\n【오답 체크】\n(A) 트랜잭션으로 쓰기와 알림을 묶으면 성능 저하 발생\n(B) 4개 주제 관리, 애플리케이션 코드 직접 수정 필요 → 운영 부담\n(D) 폴링 기반 cron은 지연, 비효율적 + 높은 운영 비용\n\n【시험 포인트】\n\"비동기 처리\" 요구 + \"성능 독립\" → 스트림 + 서버리스\nSNS(팬아웃) vs SQS(큐) → 여러 구독자 = SNS 선택"
  },
  {
    "id": 401,
    "question": "회사는 AWS 클라우드를 사용하여 기존 애플리케이션의 가용성과 탄력성을 높이려고 합니다. 애플리케이션의 현재 버전은 회사의 데이터 센터에 상주합니다. 예기치 않은 정전으로 인해 데이터베이스 서버가 충돌한 후 애플리케이션에서 최근 데이터 손실이 발생했습니다. 회사는 단일 실패 지점을 방지하는 솔루션이 필요합니다. 솔루션은 애플리케이션에 사용자 요구에 맞게 확장할 수 있는 기능을 제공해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "여러 가용 영역의 Auto Scaling 그룹에서 Amazon EC2 인스턴스를 사용하여 애플리케이션 서버를 배포합니다. 다중 AZ 구성에서 Amazon RDS DB 인스턴스를 사용합니다.",
      "B": "단일 가용 영역의 Auto Scaling 그룹에서 Amazon EC2 인스턴스를 사용하여 애플리케이션 서버를 배포합니다. EC2 인스턴스에 데이터베이스를 배포합니다. EC2 자동 복구를 활성화합니다.",
      "C": "여러 가용 영역의 Auto Scaling 그룹에서 Amazon EC2 인스턴스를 사용하여 애플리케이션 서버를 배포합니다. 단일 가용 영역에서 읽기 전용 복제본이 있는 Amazon RDS DB 인스턴스를 사용합니다. 기본 DB 인스턴스가 실패할 경우 읽기 전용 복제본을 승격하여 기본 DB 인스턴스를 교체하십시오.",
      "D": "여러 가용 영역의 Auto Scaling 그룹에서 Amazon EC2 인스턴스를 사용하여 애플리케이션 서버를 배포합니다. 여러 가용 영역에 걸쳐 EC2 인스턴스에 기본 및 보조 데이터베이스 서버를 배포합니다. Amazon Elastic Block Store(Amazon EBS) 다중 연결을 사용하여 인스턴스 간에 공유 스토리지를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 다중 AZ RDS — 자동 장애조치로 가용성 보장\n▸ Auto Scaling 다중 AZ — 애플리케이션 수평 확장\n▸ 단일 실패 지점(SPOF) 제거 — 어떤 AZ 장애도 견딤\n\n【정답 포인트】\n▸ \"데이터 손실\" 방지 → RDS 다중 AZ(자동 동기 복제)\n▸ \"단일 실패 지점\" 방지 → 여러 AZ에 인스턴스 배포\n▸ \"확장 기능\" → Auto Scaling + 다중 AZ 조합\n▸ \"예기치 않은 정전\" → 자동 장애조치 포함 필수\n\n【오답 체크】\n(B) 단일 AZ는 SPOF, EC2 자동 복구는 DB 장애 대응 불가\n(C) 읽기 전용 복제본은 수동 승격 필요 → 장애조치 지연\n(D) EBS 다중 연결은 네트워크 대역폭 이슈, 관리 복잡도 높음\n\n【시험 포인트】\n\"가용성/탄력성\" + \"데이터 손실 방지\" → RDS 다중 AZ\n\"수평 확장\" = Auto Scaling 다중 AZ"
  },
  {
    "id": 402,
    "question": "회사는 애플리케이션에서 생성하는 대량의 스트리밍 데이터를 수집하고 처리해야 합니다. 이 애플리케이션은 Amazon EC2 인스턴스에서 실행되며 기본 설정으로 구성된 Amazon Kinesis Data Streams 로 데이터를 전송합니다. 격일로 애플리케이션은 데이터를 소비하고 비즈니스 인텔리전스(BI) 처리를 위해 데이터를 Amazon S3 버킷에 기록합니다. 회사는 Amazon S3 가 애플리케이션이 Kinesis Data Streams 로 보내는 모든 데이터를 수신하지 못하는 것을 관찰합니다. 솔루션 설계자는 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "데이터 보존 기간을 수정하여 Kinesis Data Streams 기본 설정을 업데이트합니다.",
      "B": "Kinesis Producer Library(KPL)를 사용하여 Kinesis Data Streams로 데이터를 전송하도록 애플리케이션을 업데이트합니다.",
      "C": "Kinesis Data Streams 로 전송되는 데이터의 처리량을 처리하도록 Kinesis 샤드 수를 업데이트합니다.",
      "D": "S3 버킷 내에서 S3 버전 관리를 켜서 S3 버킷에 수집된 모든 객체의 모든 버전을 보존합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Kinesis 기본 보존 기간 — 24시간(데이터 손실 가능)\n▸ \"격일\" 소비 — 24시간 초과 시 데이터 누락\n▸ 보존 기간 연장 — 데이터 유지 시간 증가\n\n【정답 포인트】\n▸ \"모든 데이터를 수신하지 못함\" → Kinesis 기본값(24시간) 초과\n▸ \"격일로\" 처리 → 최소 48시간 보존 필요\n▸ 보존 기간을 수정하면 데이터 손실 방지\n▸ 용량(샤드)이 아닌 시간 문제\n\n【오답 체크】\n(B) KPL은 배치 최적화일 뿐, 보존 기간과 무관\n(C) 처리량 문제가 아닌 \"격일\" 지연 접근 → 샤드 수 증가 불필요\n(D) S3 버전 관리는 이미 들어온 데이터만 관리\n\n【시험 포인트】\n\"데이터 손실\" + \"시간 간격\" → 보존 기간 점검\n비동기 처리(격일) = 저장소 기본값 초과 검토"
  },
  {
    "id": 403,
    "question": "개발자에게는 AWS Lambda 함수를 사용하여 파일을 Amazon S3 에 업로드하는 애플리케이션이 있으며 작업을 수행하는 데 필요한 권한이 필요합니다. 개발자에게는 이미 Amazon S3에 필요한 유효한 IAM 자격 증명이 있는 IAM 사용자가 있습니다. 권한을 부여하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": {
      "A": "Lambda 함수의 리소스 정책에 필요한 IAM 권한을 추가합니다.",
      "B": "Lambda 함수에서 기존 IAM 자격 증명을 사용하여 서명된 요청을 생성합니다.",
      "C": "새 IAM 사용자를 생성하고 Lambda 함수에서 기존 IAM 자격 증명을 사용합니다.",
      "D": "필요한 권한이 있는 IAM 실행 역할을 생성하고 IAM 역할을 Lambda 함수에 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ IAM 실행 역할(Execution Role) — Lambda가 권한 상속\n▸ 신뢰 관계 — Lambda 서비스가 역할 사용 가능\n▸ 인라인 정책 — S3 접근 권한 부여\n\n【정답 포인트】\n▸ Lambda는 IAM 사용자 자격 증명 사용 불가 → 역할 필수\n▸ 실행 역할 생성 → S3 정책 연결 → Lambda에 할당\n▸ AWS 서비스 신뢰 관계 자동 설정\n▸ 최소 권한 원칙 준수\n\n【오답 체크】\n(A) 리소스 정책은 호출자 제한용(S3 접근 권한 아님)\n(B) Lambda 코드에 IAM 자격 증명 하드코딩 → 보안 위험\n(C) 새 사용자 생성 → 자격 증명 관리 복잡, Lambda와 비호환\n\n【시험 포인트】\n\"Lambda\" + \"S3 접근\" = 실행 역할 패턴\nAWS 서비스 권한 = 역할(사용자 불가)"
  },
  {
    "id": 404,
    "question": "회사는 새 문서가 Amazon S3 버킷에 업로드될 때 AWS Lambda 함수를 호출하는 서버리스 애플리케이션을 배포했습니다. 애플리케이션은 Lambda 함수를 사용하여 문서를 처리합니다. 최근 마케팅 캠페인 후 회사는 애플리케이션이 많은 문서를 처리하지 않는다는 사실을 알게 되었습니다. 솔루션 설계자는 이 애플리케이션의 아키텍처를 개선하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Lambda 함수의 런타임 제한 시간 값을 15분으로 설정합니다.",
      "B": "S3 버킷 복제 정책을 구성합니다. 나중에 처리할 수 있도록 S3 버킷에 문서를 준비합니다.",
      "C": "추가 Lambda 함수를 배포합니다. 두 Lambda 함수에서 문서 처리 부하를 분산합니다.",
      "D": "Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. 대기열에 요청을 보냅니다. 대기열을 Lambda에 대한 이벤트 소스로 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 이벤트 동시성 제한 — 동시 Lambda 실행 제약\n▸ SQS 버퍼링 — 대기열 기반 처리로 부하 분산\n▸ Lambda 배치 처리 — 여러 메시지 한 번에 처리\n\n【정답 포인트】\n▸ \"많은 문서를 처리하지 않음\" → S3-Lambda 직접 연결 병목\n▸ SQS 도입 → 비동기 디커플링 + 동시성 제어\n▸ Lambda가 대기열에서 배치로 메시지 소비\n▸ 급증하는 문서 유입에 탄력적 대응\n\n【오답 체크】\n(A) 제한 시간 증가 → 처리 능력 개선 안 됨\n(B) S3 복제 → 문서 복제일 뿐, 처리 속도 향상 없음\n(C) Lambda 함수 추가 → S3 동시성 제한은 변하지 않음\n\n【시험 포인트】\n\"처리 지연\" + \"버스트 트래픽\" → 메시지 큐(SQS)\nS3 → Lambda 직접 연결 = 동시성 병목 → 큐 추가"
  },
  {
    "id": 405,
    "question": "솔루션 설계자는 소프트웨어 데모 환경을 위한 아키텍처를 설계하고 있습니다. 환경은 Application Load Balancer(ALB) 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행됩니다. 시스템은 근무 시간 동안 트래픽이 크게 증가하지만 주말에는 작동하지 않아도 됩니다. 수요에 맞게 시스템을 확장할 수 있도록 하기 위해 솔루션 설계자는 어떤 조치 조합을 취해야 합니까? (2개 선택)",
    "options": {
      "A": "AWS Auto Scaling을 사용하여 요청 속도에 따라 ALB 용량을 조정하십시오.",
      "B": "AWS Auto Scaling을 사용하여 VPC 인터넷 게이트웨이의 용량을 확장합니다.",
      "C": "여러 AWS 지역에서 EC2 인스턴스를 시작하여 여러 지역에 로드를 분산합니다.",
      "D": "대상 추적 조정 정책을 사용하여 인스턴스 CPU 사용률을 기반으로 Auto Scaling 그룹을 조정합니다.",
      "E": "예약된 조정을 사용하여 Auto Scaling 그룹의 최소, 최대 및 원하는 용량을 주말 동안 0으로 변경합니다. 주의 시작 시 기본값으로 되돌립니다."
    },
    "answer": "DE",
    "explanation": "【핵심 용어】\n▸ 예약된 조정 — 시간 기반 자동 확장\n▸ 대상 추적 — 지표 기반 동적 조정\n▸ 메트릭 조정 vs 시간 조정 — 상호 보완\n\n【정답 포인트】\n▸ \"근무 시간\" + \"주말\" → 예측 가능한 패턴 → 예약된 조정\n(E) ▸ \"트래픽 증가\" → CPU 기반 실시간 조정\n(D) ▸ 두 정책 조합 → 비용 최적화 + 성능 보장\n▸ 주말 0으로 설정 → 미사용 인스턴스 비용 절감\n\n【오답 체크】\n(A) ALB는 자동으로 확장, 용량 조정 불필요\n(B) 인터넷 게이트웨이는 확장 개념 없음(VPC당 1개)\n(C) 다중 리전은 지역 내 수요 패턴 해결 불가, 비용 증가\n\n【시험 포인트】\n\"정규적 패턴(주말/근무시간)\" = 예약된 조정\n\"동적 트래픽\" = 대상 추적(CPU/요청)\n두 개 선택 → 보완 전략 조합"
  },
  {
    "id": 406,
    "question": "솔루션 설계자는 공용 서브넷과 데이터베이스 서브넷을 포함하는 2 계층 아키텍처를 설계하고 있습니다. 퍼블릭 서브넷의 웹 서버는 포트 443 에서 인터넷에 열려 있어야 합니다. 데이터베이스 서브넷의 Amazon RDS for MySQL DB 인스턴스는 포트 3306 의 웹 서버에서만 액세스할 수 있어야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (2개 선택)",
    "options": {
      "A": "퍼블릭 서브넷에 대한 네트워크 ACL 을 만듭니다. 포트 3306 에서 0.0.0.0/0 에 대한 아웃바운드 트래픽을 거부하는 규칙을 추가합니다.",
      "B": "DB 인스턴스에 대한 보안 그룹을 생성합니다. 포트 3306 에서 퍼블릭 서브넷 CIDR 블록의 트래픽을 허용하는 규칙을 추가합니다.",
      "C": "퍼블릭 서브넷의 웹 서버에 대한 보안 그룹을 생성합니다. 포트 443 에서 0.0.0.0/0 의 트래픽을 허용하는 규칙을 추가합니다.",
      "D": "DB 인스턴스에 대한 보안 그룹을 생성합니다. 포트 3306 에서 웹 서버 보안 그룹의 트래픽을 허용하는 규칙을 추가합니다.",
      "E": "DB 인스턴스에 대한 보안 그룹을 생성합니다. 포트 3306 에서 웹 서버 보안 그룹의 트래픽을 제외한 모든 트래픽을 거부하는 규칙을 추가합니다."
    },
    "answer": "CD",
    "explanation": "【핵심 용어】\n▸ 웹 서버 보안 그룹 — 인바운드 443 개방\n▸ DB 보안 그룹 — 웹 SG만 3306 허용\n▸ 보안 그룹 레퍼런싱 — CIDR 대신 SG 이름으로 제어\n\n【정답 포인트】\n▸ \"포트 443 인터넷 개방\" → 웹 SG 인바운드\n(C) ▸ \"웹 서버에서만 3306 접근\" → DB SG 레퍼런싱\n(D) ▸ 보안 그룹은 Stateful → 반환 트래픽 자동 허용\n▸ 보안 그룹 체인 구성 = 최소 권한\n\n【오답 체크】\n(A) NACL은 서브넷 수준, 세밀한 제어 불가\n(B) CIDR 블록 → 모든 퍼블릭 서브넷 호스트 허용(과도)\n(E) 거부 규칙은 보안 그룹에서 불필요(명시 허용만)\n\n【시험 포인트】\n보안 그룹 체인 = SG-A → SG-B(레퍼런싱)\nNACL vs SG: 세밀한 제어 = SG(stateful)"
  },
  {
    "id": 407,
    "question": "회사는 AWS 클라우드에서 호스팅되는 게임 애플리케이션용 공유 스토리지 솔루션을 구현하고 있습니다. 회사는 Lustre 클라이언트를 사용하여 데이터에 액세스할 수 있는 기능이 필요합니다. 솔루션은 완전히 관리되어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "탑재 가능한 파일 시스템으로 데이터를 공유하는 AWS DataSync 작업을 생성합니다. 파일 시스템을 애플리케이션 서버에 마운트하십시오.",
      "B": "AWS Storage Gateway 파일 게이트웨이를 생성합니다. 필요한 클라이언트 프로토콜을 사용하는 파일 공유를 만듭니다. 응용 프로그램 서버를 파일 공유에 연결합니다.",
      "C": "Amazon Elastic File System(Amazon EFS) 파일 시스템을 만들고 Lustre 를 지원하도록 구성합니다. 원본 서버에 파일 시스템을 연결합니다. 애플리케이션 서버를 파일 시스템에 연결하십시오.",
      "D": "Amazon FSx for Lustre 파일 시스템을 생성합니다. 원본 서버에 파일 시스템을 연결합니다. 애플리케이션 서버를 파일 시스템에 연결하십시오."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ FSx for Lustre — Lustre 프로토콜 완전 관리\n▸ 고성능 컴퓨팅(HPC) 특화\n▸ S3 원본 데이터 연계\n\n【정답 포인트】\n▸ \"Lustre 클라이언트\" → Lustre 프로토콜 필수\n▸ \"완전히 관리\" → AWS 관리형 서비스\n▸ FSx for Lustre만이 Lustre 전용\n▸ 게임 애플리케이션 = 고성능 요구\n\n【오답 체크】\n(A) DataSync는 데이터 동기화, 파일 시스템 아님\n(B) Storage Gateway는 NFS/SMB, Lustre 미지원\n(C) EFS는 NFS 프로토콜, Lustre 지원 안 함\n\n【시험 포인트】\nLustre = FSx for Lustre만 선택\n\"HPC\" 또는 \"고성능\" + \"파일 시스템\" = FSx"
  },
  {
    "id": 408,
    "question": "한 회사에서 UDP 를 사용하는 수천 개의 지리적으로 분산된 원격 장치로부터 데이터를 수신하는 애플리케이션을 실행합니다. 애플리케이션은 데이터를 즉시 처리하고 필요한 경우 장치로 다시 메시지를 보냅니다. 데이터가 저장되지 않습니다. 회사는 장치에서 데이터 전송에 대한 대기 시간을 최소화하는 솔루션이 필요합니다. 솔루션은 또한 다른 AWS 리전에 대한 빠른 장애 조치를 제공해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Route 53 장애 조치 라우팅 정책을 구성합니다. 두 리전 각각에 NLB(Network Load Balancer)를 생성합니다. 데이터를 처리하기 위해 AWS Lambda 함수를 호출하도록 NLB를 구성합니다.",
      "B": "AWS Global Accelerator를 사용합니다. 두 리전 각각에 NLB(Network Load Balancer)를 엔드포인트로 생성합니다. Fargate 시작 유형으로 Amazon Elastic Container Service(Amazon ECS) 클러스터를 생성합니다. 클러스터에서 ECS 서비스를 생성합니다. Amazon ECS에서 데이터를 NLProcess하기 위한 대상으로 ECS 서비스를 설정합니다.",
      "C": "AWS Global Accelerator 를 사용합니다. 두 리전 각각에 Application Load Balancer(ALB)를 엔드포인트로 생성합니다. Fargate 시작 유형으로 Amazon Elastic Container Service(Amazon ECS) 클러스터를 생성합니다. 클러스터에서 ECS 서비스를 생성합니다. ECS 서비스를 ALB 의 대상으로 설정합니다. Amazon ECS 에서 데이터를 처리합니다.",
      "D": "Amazon Route 53 장애 조치 라우팅 정책을 구성합니다. 두 리전 각각에 Application Load Balancer(ALB)를 생성합니다. Fargate 시작 유형으로 Amazon Elastic Container Service(Amazon ECS) 클러스터를 생성합니다. 클러스터에서 ECS 서비스를 생성합니다. ECS 서비스를 ALB의 대상으로 설정합니다. Amazon ECS에서 데이터를 처리합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Global Accelerator — 대기 시간 최소화, 빠른 장애조치\n▸ NLB + UDP 지원 — 실시간 처리\n▸ ECS 처리 — 상태 비저장 서비스\n▸ Anycast — 지리적으로 분산된 장치 수렴\n\n【정답 포인트】\n▸ \"UDP\" → NLB 필수(ALB는 HTTP/HTTPS)\n▸ \"최소 대기 시간\" → Global Accelerator(Anycast IP)\n▸ \"빠른 장애조치\" → Global Accelerator 자동 감지\n▸ \"즉시 처리\" → ECS 서비스로 확장성\n\n【오답 체크】\n(A) Route 53은 DNS 기반(지연), Lambda 제한(15분)\n(C) ALB는 TCP/HTTP만 지원, UDP 불가\n(D) Route 53은 Global Accelerator만큼 빠르지 않음\n\n【시험 포인트】\nUDP = NLB(Route 53 아님)\n\"지리적 분산\" + \"최소 지연\" = Global Accelerator"
  },
  {
    "id": 409,
    "question": "솔루션 설계자는 Windows 인터넷 정보 서비스(IIS) 웹 애플리케이션을 AWS 로 마이그레이션해야 합니다. 애플리케이션은 현재 사용자의 온프레미스 NAS(Network-Attached Storage)에서 호스팅되는 파일 공유에 의존합니다. 솔루션 설계자는 IIS 웹 서버를 스토리지 솔루션에 연결된 여러 가용 영역의 Amazon EC2 인스턴스로 마이그레이션하고 인스턴스에 연결된 Elastic Load Balancer를 구성할 것을 제안했습니다. 온프레미스 파일 공유에 대한 어떤 대체가 가장 탄력적이고 내구성이 있습니까?",
    "options": {
      "A": "파일 공유를 Amazon RDS로 마이그레이션합니다.",
      "B": "파일 공유를 AWS Storage Gateway로 마이그레이션합니다.",
      "C": "파일 공유를 Amazon FSx for Windows File Server로 마이그레이션합니다.",
      "D": "파일 공유를 Amazon Elastic File System(Amazon EFS)으로 마이그레이션합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ FSx for Windows — SMB/NTFS 네이티브 지원\n▸ 다중 AZ 배포 — 고가용성, 자동 복제\n▸ 관리형 파일 공유\n\n【정답 포인트】\n▸ \"Windows IIS\" → SMB/NTFS 프로토콜 필수\n▸ \"여러 가용 영역\" → 다중 AZ FSx(탄력성)\n▸ \"파일 공유\" → Windows File Server 호환\n▸ \"가장 탄력적, 내구성\" → 관리형 서비스\n\n【오답 체크】\n(A) RDS는 데이터베이스, 파일 시스템 아님\n(B) Storage Gateway는 온프레미스 캐시, 클라우드 네이티브 아님\n(D) EFS는 NFS(Linux), Windows SMB 미지원\n\n【시험 포인트】\nWindows 파일 공유 = FSx for Windows\nLinux NFS = EFS\nNTFS/SMB = Windows File Server"
  },
  {
    "id": 410,
    "question": "회사에서 Amazon EC2 인스턴스에 새 애플리케이션을 배포하고 있습니다. 애플리케이션은 Amazon Elastic Block Store(Amazon EBS) 볼륨에 데이터를 씁니다. 회사는 EBS 볼륨에 기록된 모든 데이터가 유휴 상태에서 암호화되도록 해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EBS 암호화를 지정하는 IAM 역할을 생성합니다. 역할을 EC2 인스턴스에 연결합니다.",
      "B": "EBS 볼륨을 암호화된 볼륨으로 생성합니다. EBS 볼륨을 EC2 인스턴스에 연결합니다.",
      "C": "키가 Encrypt 이고 값이 True 인 EC2 인스턴스 태그를 생성합니다. EBS 수준에서 암호화가 필요한 모든 인스턴스에 태그를 지정합니다.",
      "D": "계정에서 EBS 암호화를 시행하는 AWS Key Management Service(AWS KMS) 키 정책을 생성합니다. 키 정책이 활성 상태인지 확인하십시오."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ EBS 암호화 — 볼륨 생성 시점의 설정\n▸ 전송 중 + 유휴 상태 암호화\n▸ 기본 KMS 키 자동 사용\n\n【정답 포인트】\n▸ \"유휴 상태에서 암호화\" → EBS 암호화 활성화\n▸ 암호화된 볼륨 생성이 가장 간단\n▸ KMS 키 없어도 AWS 관리형 키 사용 가능\n▸ 명확하고 직접적인 해결책\n\n【오답 체크】\n(A) IAM 역할은 EBS 암호화와 무관(접근 제어만)\n(C) 태그는 정책 추적, 암호화 자체 활성화 아님\n(D) KMS 키 정책은 암호화 활성화 아님, 정책만 제어\n\n【시험 포인트】\n\"EBS 암호화\" = 볼륨 생성 시 활성화\n정책/권한 vs 기술 설정 = 구분"
  },
  {
    "id": 411,
    "question": "회사에 산발적인 사용 패턴을 가진 웹 애플리케이션이 있습니다. 매달 초에는 사용량이 많고, 매주 초에는 보통 사용량이 있으며, 주중에는 예측할 수 없는 사용량이 있습니다. 이 애플리케이션은 웹 서버와 데이터 센터 내에서 실행되는 MySQL 데이터베이스 서버로 구성됩니다. 이 회사는 애플리케이션을 AWS 클라우드로 이동하려고 하며 데이터베이스 수정이 필요하지 않은 비용 효율적인 데이터베이스 플랫폼을 선택해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon DynamoDB",
      "B": "MySQL용 Amazon RDS",
      "C": "MySQL 호환 Amazon Aurora Serverless",
      "D": "Auto Scaling 그룹의 Amazon EC2에 배포된 MySQL"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Aurora Serverless — 자동 확장, MySQL 호환\n▸ 비용 최적화 — 미사용 시 비용 0\n▸ 코드 변경 없음 — 완전 호환\n\n【정답 포인트】\n▸ \"데이터베이스 수정 필요 없음\" → MySQL 호환성\n▸ \"산발적 사용\" → Serverless 자동 확장\n▸ \"비용 효율적\" → 필요시에만 과금(스케일 다운)\n▸ Aurora Serverless가 모든 조건 충족\n\n【오답 체크】\n(A) DynamoDB는 NoSQL, MySQL 코드 변경 필수\n(B) RDS는 프로비저닝 기반(항상 비용), 산발적 사용에 비효율\n(D) EC2 자가관리 → 운영 부담 증가\n\n【시험 포인트】\n\"MySQL 호환\" + \"예측 불가 사용\" = Aurora Serverless\n프로비저닝 vs Serverless = 비용 패턴 고려"
  },
  {
    "id": 412,
    "question": "이미지 호스팅 회사는 객체를 Amazon S3 버킷에 저장합니다. 회사는 S3 버킷의 개체가 대중에게 우발적으로 노출되는 것을 방지하려고 합니다. 전체 AWS 계정의 모든 S3 객체는 비공개로 유지되어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon GuardDuty 를 사용하여 S3 버킷 정책을 모니터링합니다. AWS Lambda 함수를 사용하여 객체를 공개하는 변경 사항을 수정하는 자동 수정 작업 규칙을 생성합니다.",
      "B": "AWS Trusted Advisor 를 사용하여 공개적으로 액세스 가능한 S3 버킷을 찾습니다. 변경 사항이 감지되면 Trusted Advisor 에서 이메일 알림을 구성합니다. 퍼블릭 액세스를 허용하는 경우 S3 버킷 정책을 수동으로 변경합니다.",
      "C": "AWS Resource Access Manager 를 사용하여 공개적으로 액세스 가능한 S3 버킷을 찾습니다. 변경이 감지되면 Amazon Simple Notification Service(Amazon SNS)를 사용하여 AWS Lambda 함수를 호출합니다. 프로그래밍 방식으로 변경 사항을 수정하는 Lambda 함수를 배포합니다.",
      "D": "계정 수준에서 S3 퍼블릭 액세스 차단 기능을 사용합니다. AWS Organizations 를 사용하여 IAM 사용자가 설정을 변경하지 못하도록 하는 서비스 제어 정책(SCP)을 생성합니다. 계정에 SCP를 적용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 퍼블릭 액세스 차단 — 계정/버킷/객체 수준 정책\n▸ SCP(서비스 제어 정책) — 조직 차원의 강제\n▸ 사전 예방 vs 사후 대응\n\n【정답 포인트】\n▸ \"우발적 노출 방지\" → 사전 차단이 가장 효과적\n▸ \"모든 객체\" 보호 → 계정 수준 설정\n▸ \"IAM 사용자 변경 불가\" → SCP로 강제\n▸ 가장 강력한 보안(예방)\n\n【오답 체크】\n(A) GuardDuty는 탐지, 차단 기능 아님\n(B) 수동 변경은 실시간 보호 안 됨, 지연 발생\n(C) Resource Access Manager는 리소스 공유 도구, 모니터링 아님\n\n【시험 포인트】\n예방(차단) > 탐지(모니터링) > 대응(자동 수정)\nSCP = 조직 수준 강제, 가장 높은 우선순위"
  },
  {
    "id": 413,
    "question": "한 전자상거래 회사에서 사용자 트래픽이 증가하고 있습니다. 회사의 스토어는 웹 계층과 별도의 데이터베이스 계층으로 구성된 2 계층 웹 애플리케이션으로 Amazon EC2 인스턴스에 배포됩니다. 트래픽이 증가함에 따라 회사는 아키텍처로 인해 사용자에게 적시에 마케팅 및 주문 확인 이메일을 보내는 데 상당한 지연이 발생하고 있음을 알게 되었습니다. 이 회사는 복잡한 이메일 전송 문제를 해결하는 데 소요되는 시간을 줄이고 운영 오버헤드를 최소화하기를 원합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "이메일 처리 전용 EC2 인스턴스를 사용하여 별도의 애플리케이션 계층을 만듭니다.",
      "B": "Amazon Simple Email Service(Amazon SES)를 통해 이메일을 보내도록 웹 인스턴스를 구성합니다.",
      "C": "Amazon Simple Notification Service(Amazon SNS)를 통해 이메일을 보내도록 웹 인스턴스를 구성합니다.",
      "D": "이메일 처리 전용 EC2 인스턴스를 사용하여 별도의 애플리케이션 계층을 생성합니다. Auto Scaling 그룹에 인스턴스를 배치합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon SES — 대량 이메일 서비스, 비동기\n▸ 운영 오버헤드 최소화 → 관리형 서비스\n▸ 이메일 지연 제거 → 웹 앱과 비동기 분리\n\n【정답 포인트】\n▸ \"이메일 지연\" → 웹 계층과 디커플링 필수\n▸ \"운영 오버헤드 최소\" → 서버 관리 불필요\n▸ \"복잡한 문제 해결 시간 단축\" → 관리형 서비스\n▸ SES는 스케일링 자동, SMTP 호환\n\n【오답 체크】\n(A) EC2 추가 → 관리 부담, 운영 오버헤드 증가\n(C) SNS는 이메일 발신 제한적, 대량 이메일에 부적합\n(D) Auto Scaling 필요 → 관리 복잡도\n\n【시험 포인트】\n\"이메일\" + \"비동기\" + \"운영 최소\" = SES\nSNS(알림) vs SES(대량 이메일) 구분"
  },
  {
    "id": 414,
    "question": "회사에는 매일 수백 개의 보고서를 생성하는 비즈니스 시스템이 있습니다. 비즈니스 시스템은 보고서를 CSV 형식으로 네트워크 공유에 저장합니다. 회사는 분석을 위해 이 데이터를 거의 실시간으로 AWS 클라우드에 저장해야 합니다. 최소한의 관리 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS DataSync 를 사용하여 파일을 Amazon S3 로 전송합니다. 매일 끝날 때 실행되는 예약된 작업을 만듭니다.",
      "B": "Amazon S3 파일 게이트웨이를 생성합니다. S3 파일 게이트웨이에서 새 네트워크 공유를 사용하도록 비즈니스 시스템을 업데이트합니다.",
      "C": "AWS DataSync 를 사용하여 파일을 Amazon S3 로 전송합니다. 자동화 워크플로에서 DataSync API를 사용하는 애플리케이션을 생성합니다.",
      "D": "SFTP 용 AWS 전송 엔드포인트를 배포합니다. 네트워크 공유에서 새 파일을 확인하고 SFTP를 사용하여 새 파일을 업로드하는 스크립트를 만듭니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 파일 게이트웨이 — 투명한 네트워크 공유→S3 연결\n▸ 거의 실시간 → 즉시 동기화\n▸ 애플리케이션 변경 최소 → 기존 경로 유지\n\n【정답 포인트】\n▸ \"거의 실시간\" → 예약 작업\n(A) 불가\n▸ \"최소 관리 오버헤드\" → 스크립트 작성 불필요\n(D) ▸ \"네트워크 공유\" 인터페이스 유지\n▸ S3 파일 게이트웨이 = 투명한 변환\n\n【오답 체크】\n(A) 예약 작업 → 매일 끝날 때 = 실시간 아님\n(C) DataSync API 자동화 → 스크립트 관리 필요\n(D) SFTP 스크립트 → 운영 오버헤드\n\n【시험 포인트】\n\"거의 실시간\" → 이벤트 기반(폴링X)\nStorage Gateway = 온프레미스 연결 최적화"
  },
  {
    "id": 415,
    "question": "회사에서 Amazon S3 Standard 에 페타바이트 규모의 데이터를 저장하고 있습니다. 데이터는 여러 S3 버킷에 저장되며 다양한 빈도로 액세스됩니다. 회사는 모든 데이터에 대한 액세스 패턴을 알지 못합니다. 회사는 S3 사용 비용을 최적화하기 위해 각 S3 버킷에 대한 솔루션을 구현해야 합니다. 이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 버킷의 객체를 S3 Intelligent-Tiering 으로 전환하는 규칙으로 S3 수명 주기 구성을 생성합니다.",
      "B": "S3 스토리지 클래스 분석 도구를 사용하여 S3 버킷의 각 객체에 대한 올바른 계층을 결정합니다. 각 개체를 식별된 스토리지 계층으로 이동합니다.",
      "C": "S3 버킷의 객체를 S3 Glacier Instant Retrieval 로 전환하는 규칙으로 S3 수명 주기 구성을 생성합니다.",
      "D": "S3 버킷의 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환하는 규칙으로 S3 수명 주기 구성을 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 Intelligent-Tiering — 액세스 패턴 자동 분석\n▸ 동적 마이그레이션 — 수동 개입 없음\n▸ 페타바이트 규모 최적화\n\n【정답 포인트】\n▸ \"액세스 패턴을 알지 못함\" → 자동 분류 필요\n▸ \"여러 버킷\" → 일관된 정책 적용\n▸ Intelligent-Tiering = AI 기반 자동 최적화\n▸ 가장 효율적(인간 분석 불필요)\n\n【오답 체크】\n(B) 스토리지 클래스 분석 → 수동 결정, 페타바이트 규모 비현실적\n(C) Glacier Instant Retrieval → 모든 데이터에 부적합(검색 비용)\n(D) One Zone-IA → 재해 복구성 떨어짐\n\n【시험 포인트】\n\"액세스 패턴 불명\" = Intelligent-Tiering\n자동 vs 수동 = 규모에 따라 선택"
  },
  {
    "id": 416,
    "question": "빠르게 성장하는 글로벌 전자상거래 회사는 AWS 에서 웹 애플리케이션을 호스팅하고 있습니다. 웹 애플리케이션에는 정적 콘텐츠와 동적 콘텐츠가 포함됩니다. 웹사이트는 Amazon RDS 데이터베이스에 OLTP(온라인 거래 처리) 데이터를 저장합니다. 웹사이트 사용자의 페이지 로드 속도가 느립니다. 이 문제를 해결하기 위해 솔루션 아키텍트가 취해야 할 조치 조합은 무엇입니까? (2 개 선택)",
    "options": {
      "A": "Amazon Redshift 클러스터를 구성합니다.",
      "B": "Amazon CloudFront 배포를 설정합니다.",
      "C": "Amazon S3에서 동적 웹 콘텐츠를 호스팅합니다.",
      "D": "RDS DB 인스턴스에 대한 읽기 전용 복제본을 생성합니다.",
      "E": "RDS DB 인스턴스에 대한 다중 AZ 배포를 구성합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ CloudFront — 정적 콘텐츠 캐싱, 지연 시간 감소\n▸ RDS 읽기 전용 복제본 — 읽기 부하 분산\n▸ OLTP 최적화\n\n【정답 포인트】\n▸ \"정적 콘텐츠\" 느림 → CloudFront\n(B) 캐싱\n▸ \"페이지 로드 느림\" → 데이터베이스 읽기 병목\n▸ 읽기 전용 복제본\n(D) → 읽기 쿼리 분산\n▸ 두 병목 모두 해결 필요\n\n【오답 체크】\n(A) Redshift는 OLAP(분석), OLTP 아님\n(C) S3는 정적 호스팅일 뿐, 성능 개선 아님\n(E) 다중 AZ는 가용성(고가용성), 성능 개선 아님\n\n【시험 포인트】\n정적 콘텐츠 = CDN(CloudFront)\n읽기 병목 = 읽기 복제본\nOLTP vs OLAP 구분"
  },
  {
    "id": 417,
    "question": "회사는 Amazon EC2 인스턴스와 AWS Lambda 함수를 사용하여 애플리케이션을 실행합니다. 이 회사는 AWS 계정에 퍼블릭 서브넷과 프라이빗 서브넷이 있는 VPC 가 있습니다. EC2 인스턴스는 VPC 중 하나의 프라이빗 서브넷에서 실행됩니다. 애플리케이션이 작동하려면 Lambda 함수가 EC2 인스턴스에 대한 직접적인 네트워크 액세스가 필요합니다. 응용 프로그램은 최소 1 년 동안 실행됩니다. 회사는 해당 시간 동안 애플리케이션이 사용하는 Lambda 함수의 수가 증가할 것으로 예상합니다. 회사는 모든 애플리케이션 리소스에 대한 절감 효과를 극대화하고 서비스 간의 네트워크 대기 시간을 낮게 유지하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 Instance Savings Plan 구매 Lambda 함수의 지속 시간, 메모리 사용량 및 호출 수를 최적화합니다. EC2 인스턴스가 포함된 프라이빗 서브넷에 Lambda 함수를 연결합니다.",
      "B": "EC2 Instance Savings Plan 구매 Lambda 함수의 기간 및 메모리 사용량, 호출 수 및 전송되는 데이터 양을 최적화합니다. EC2 인스턴스가 실행되는 동일한 VPC 의 퍼블릭 서브넷에 Lambda 함수를 연결합니다.",
      "C": "Compute Savings Plan을 구매합니다. Lambda 함수의 기간 및 메모리 사용량, 호출 수 및 전송되는 데이터 양을 최적화합니다. EC2 인스턴스가 포함된 프라이빗 서브넷에 Lambda 함수를 연결합니다.",
      "D": "Compute Savings Plan을 구매합니다. Lambda 함수의 기간 및 메모리 사용량, 호출 수 및 전송되는 데이터 양을 최적화합니다. Lambda 서비스 VPC 에 Lambda 함수를 유지합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Compute Savings Plan — EC2+Lambda 포함, 유연함\n▸ VPC 연결 Lambda — 프라이빗 서브넷 접근\n▸ 네트워크 대기 시간 최소화\n\n【정답 포인트】\n▸ \"EC2+Lambda\" → Compute Savings Plan(EC2 전용 아님)\n▸ \"1년 이상\" + \"함수 증가\" → 장기 할인 극대화\n▸ \"직접 네트워크 액세스\" → VPC 연결 필수\n▸ \"대기 시간 낮음\" → 프라이빗 서브넷 배치\n\n【오답 체크】\n(A) EC2 Instance Plan은 Lambda 할인 못 함\n(B) 퍼블릭 서브넷 = 인터넷 경유, 대기 시간 증가\n(D) Lambda 서비스 VPC 유지 = EC2 액세스 불가\n\n【시험 포인트】\nCompute Savings Plan > EC2 Instance Plan\nVPC 연결 = 프라이빗 서브넷\n\"직접 액세스\" = 같은 VPC 프라이빗 배치"
  },
  {
    "id": 418,
    "question": "솔루션 아키텍트는 팀 구성원이 두 개의 다른 AWS 계정(개발 계정 및 프로덕션 계정)에서 Amazon S3 버킷에 액세스할 수 있도록 허용해야 합니다. 팀은 현재 계정에서 적절한 권한이 있는 IAM 그룹에 할당된 고유한 IAM 사용자를 사용하여 개발 계정의 S3 버킷에 액세스할 수 있습니다. 솔루션 설계자는 프로덕션 계정에서 IAM 역할을 생성했습니다. 이 역할에는 프로덕션 계정의 S3 버킷에 대한 액세스 권한을 부여하는 정책이 있습니다. 최소 권한 원칙을 준수하면서 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "관리자 액세스 정책을 개발 계정 사용자에게 연결합니다.",
      "B": "생산 계정에 있는 역할의 신뢰 정책에서 개발 계정을 주체로 추가합니다.",
      "C": "프로덕션 계정의 S3 버킷에서 S3 퍼블릭 액세스 차단 기능을 끕니다.",
      "D": "각 팀 구성원에 대해 고유한 자격 증명을 사용하여 프로덕션 계정에 사용자를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 신뢰 정책(Trust Policy) — 역할 사용 권한자 지정\n▸ 계정 간 역할 가정(AssumeRole)\n▸ 최소 권한 원칙\n\n【정답 포인트】\n▸ \"개발 계정 사용자\" → 프로덕션 역할 가정 필요\n▸ \"신뢰 정책\" = 계정 간 접근 제어\n▸ \"최소 권한\" → 필요한 권한만 부여\n▸ 개발 계정을 역할 신뢰 정책의 주체로 지정\n\n【오답 체크】\n(A) 관리자 액세스 = 최소 권한 위반\n(C) 퍼블릭 액세스 차단 해제 = 보안 저하\n(D) 프로덕션 계정에 별도 사용자 = 자격 증명 관리 복잡\n\n【시험 포인트】\n계정 간 접근 = 신뢰 정책\nIAM 역할 가정(AssumeRole) 패턴"
  },
  {
    "id": 419,
    "question": "회사는 모든 기능이 활성화된 AWS Organizations 를 사용하고 ap-southeast-2 리전에서 여러 Amazon EC2 워크로드를 실행합니다. 회사에는 다른 리전에서 리소스가 생성되지 않도록 하는 SCP(서비스 제어 정책)가 있습니다. 보안 정책에 따라 회사는 유휴 상태의 모든 데이터를 암호화해야 합니다. 감사 결과 직원이 볼륨을 암호화하지 않고 EC2 인스턴스용 Amazon Elastic Block Store(Amazon EBS) 볼륨을 생성한 것으로 확인되었습니다. 회사는 암호화된 EBS 볼륨을 사용하기 위해 모든 IAM 사용자 또는 루트 사용자가 ap-southeast-2 에서 시작하는 모든 새 EC2 인스턴스를 원합니다. 회사는 EBS 볼륨을 생성하는 직원에게 최소한의 영향을 미치는 솔루션을 원합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Amazon EC2 콘솔에서 EBS 암호화 계정 속성을 선택하고 기본 암호화 키를 정의합니다.",
      "B": "IAM 권한 경계를 생성합니다. 권한 경계를 루트 조직 단위(OU)에 연결합니다. ec2:Encrypted 조건이 false 인 경우 ec2:CreateVolume 작업을 거부하도록 경계를 정의합니다.",
      "C": "SCP 를 생성합니다. 루트 조직 단위(OU)에 SCP 를 연결합니다. ec2:Encrypted 조건이 false인 경우 ec2:CreateVolume 작업을 거부하도록 SCP를 정의합니다.",
      "D": "ec2:Encrypted 조건이 false 인 경우 ec2:CreateVolume 작업을 거부하도록 각 계정에 대한 IAM 정책을 업데이트합니다.",
      "E": "조직 관리 계정에서 기본 EBS 볼륨 암호화 설정을 지정합니다."
    },
    "answer": "CE",
    "explanation": "【핵심 용어】\n▸ SCP(Service Control Policy) — Organizations 범위에서 모든 계정의 권한을 제한하는 최상위 정책\n▸ EBS 기본 암호화 — 계정 레벨에서 활성화하면 모든 새 볼륨이 자동 암호화\n\n【정답 포인트】\n▸ C: SCP로 ec2:Encrypted=false 거부 → Organizations 레벨에서 강제\n▸ E: 계정 속성에서 기본 암호화 활성화 → 사용자 부담 최소화\n▸ 조합: 정책 제약 + 기술적 기본값으로 이중 방어\n\n【오답 체크】\n▸ A: 콘솔 속성은 EBS 기본 암호화가 아님\n▸ B: IAM 권한 경계는 조직 OU에 직접 연결 불가\n▸ D: 각 계정별 정책은 Organizations 범위 미달\n\n【시험 포인트】\n▸ Organizations: SCP가 최상위 제약 메커니즘\n▸ EBS: 계정 레벨 기본 암호화 정책 활성화"
  },
  {
    "id": 420,
    "question": "회사에서 Amazon RDS for PostgreSQL DB 클러스터를 사용하여 프로덕션 데이터베이스 워크로드에 대한 시간 소모적인 데이터베이스 관리 작업을 단순화하려고 합니다. 회사는 데이터베이스의 고가용성을 보장하고 대부분의 시나리오에서 40 초 이내에 자동 장애 조치 지원을 제공할 것입니다. 회사는 기본 인스턴스에서 읽기를 오프로드하고 비용을 가능한 한 낮게 유지하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon RDS 다중 AZ DB 인스턴스 배포를 사용합니다. 하나의 읽기 복제본을 만들고 읽기 워크로드를 읽기 복제본으로 지정합니다.",
      "B": "Amazon RDS 다중 AZ DB 더스터 배포 사용 2 개의 읽기 전용 복제본을 생성하고 읽기 워크로드를 읽기 전용 복제본으로 지정합니다.",
      "C": "Amazon RDS 다중 AZ DB 인스턴스 배포를 사용합니다. 읽기 워크로드가 다중 AZ 쌍의 보조 인스턴스를 가리키도록 합니다.",
      "D": "Amazon RDS 다중 AZ DB 클러스터 배포 사용 읽기 워크로드를 리더 엔드포인트로 지정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ RDS 다중 AZ 클러스터 — 1개 기본 + 2개 읽기 전용 복제본, 40초 이내 자동 장애 조치\n▸ 리더 엔드포인트 — 읽기 트래픽을 자동으로 분산하는 클러스터 DNS 이름\n\n【정답 포인트】\n▸ 고가용성 + 빠른 장애 조치: 클러스터 아키텍처만 지원\n▸ 읽기 오프로드: 클러스터의 리더 엔드포인트로 자동 분산\n▸ 비용 효율: 추가 복제본 비용 < 성능 향상\n\n【오답 체크】\n▸ A: 다중 AZ 인스턴스 + 1개 복제본 → 장애 조치 60초 이상\n▸ B: 클러스터가 아닌 다중 AZ 구성은 40초 미달\n▸ C: 보조 인스턴스 읽기는 장애 조치에 영향\n\n【시험 포인트】\n▸ RDS 클러스터: 다중 읽기 전용 복제본 + 빠른 장애 조치\n▸ 리더 엔드포인트: 읽기 워크로드 자동 분산"
  },
  {
    "id": 421,
    "question": "회사에서 고가용성 SFTP 서비스를 실행합니다. SFTP 서비스는 탄력적 IP 주소로 실행되는 두 개의 Amazon EC2 Linux 인스턴스를 사용하여 인터넷에서 신뢰할 수 있는 IP 소스의 트래픽을 허용합니다. SFTP 서비스는 인스턴스에 연결된 공유 스토리지에서 지원합니다. 사용자 계정은 SFTP 서버에서 Linux 사용자로 생성되고 관리됩니다. 회사는 높은 IOPS 성능과 고도로 구성 가능한 보안을 제공하는 서버리스 옵션을 원합니다. 회사는 또한 사용자 권한에 대한 제어를 유지하기를 원합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "암호화된 Amazon Elastic Block Store(Amazon EBS) 볼륨을 생성합니다. 신뢰할 수 있는 IP 주소만 허용하는 퍼블릭 엔드포인트로 AWS Transfer Family SFTP 서비스를 생성합니다. EBS 볼륨을 SFTP 서비스 엔드포인트에 연결합니다. 사용자에게 SFTP 서비스에 대한 액세스 권한을 부여합니다.",
      "B": "암호화된 Amazon Elastic File System(Amazon EFS) 볼륨을 생성합니다. 탄력적 IP 주소와 인터넷 연결 액세스가 있는 VPC 엔드포인트를 사용하여 AWS Transfer Family SFTP 서비스를 생성합니다. 신뢰할 수 있는 IP 주소만 허용하는 엔드포인트에 보안 그룹을 연결합니다. EFS 볼륨을 SFTP 서비스 엔드포인트에 연결합니다. 사용자에게 SFTP 서비스에 대한 액세스 권한을 부여합니다.",
      "C": "기본 암호화가 활성화된 Amazon S3 버킷을 생성합니다. 신뢰할 수 있는 IP 주소만 허용하는 퍼블릭 엔드포인트로 AWS Transfer Family SFTP 서비스를 생성합니다. S3 버킷을 SFTP 서비스 엔드포인트에 연결합니다. 사용자에게 SFTP 서비스에 대한 액세스 권한을 부여합니다.",
      "D": "기본 암호화가 활성화된 Amazon S3 버킷을 생성합니다. 프라이빗 서브넷에서 내부 액세스 권한이 있는 VPC 엔드포인트로 AWS Transfer Family SFTP 서비스를 생성합니다. 신뢰할 수 있는 IP 주소만 허용하는 보안 그룹을 연결합니다. S3 버킷을 SFTP 서비스 엔드포인트에 연결합니다. 사용자에게 SFTP 서비스에 대한 액세스 권한을 부여합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Transfer Family — 서버리스 SFTP/FTP 서비스\n▸ EFS — 높은 IOPS, 공유 스토리지, 사용자 권한 관리 지원\n\n【정답 포인트】\n▸ 서버리스: Transfer Family로 EC2 관리 제거\n▸ 고성능 + 권한: EFS는 IOPS 조절 가능, 파일 레벨 권한\n▸ 보안: 퍼블릭 엔드포인트 + 보안 그룹으로 IP 제한\n\n【오답 체크】\n▸ A: EBS는 단일 인스턴스만 연결, 공유 스토리지 불가\n▸ C: S3는 파일 권한 관리 기능 부족\n▸ D: 프라이빗 VPC 엔드포인트는 인터넷 소스 IP 제한 불가\n\n【시험 포인트】\n▸ Transfer Family: 서버리스 SFTP 호스팅\n▸ EFS: 고IOPS 공유 스토리지 + 권한 제어"
  },
  {
    "id": 422,
    "question": "한 회사가 AWS 에서 새로운 기계 학습(ML) 모델 솔루션을 개발하고 있습니다. 모델은 시작 시 Amazon S3 에서 약 1GB 의 모델 데이터를 가져와 메모리에 로드하는 독립적인 마이크로서비스로 개발됩니다. 사용자는 비동기 API를 통해 모델에 액세스합니다. 사용자는 요청 또는 요청 배치를 보내고 결과를 보낼 위치를 지정할 수 있습니다. 회사는 수백 명의 사용자에게 모델을 제공합니다. 모델의 사용 패턴이 불규칙합니다. 일부 모델은 며칠 또는 몇 주 동안 사용하지 않을 수 있습니다. 다른 모델은 한 번에 수천 개의 요청 배치를 수신할 수 있습니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 디자인을 권장해야 합니까?",
    "options": {
      "A": "API 의 요청을 Network Load Balancer(NLB)로 보냅니다. NLB 에서 호출하는 AWS Lambda 함수로 모델을 배포합니다.",
      "B": "API 의 요청을 Application Load Balancer(ALB)로 보냅니다. Amazon Simple Queue Service(Amazon SQS) 대기열에서 읽는 Amazon Elastic Container Service(Amazon ECS) 서비스로 모델을 배포합니다. AWS App Mesh 를 사용하여 SQS 대기열 크기에 따라 ECS 클러스터의 인스턴스를 확장합니다.",
      "C": "API 의 요청을 Amazon Simple Queue Service(Amazon SQS) 대기열로 보냅니다. SQS 이벤트에 의해 호출되는 AWS Lambda 함수로 모델을 배포합니다. AWS Auto Scaling 을 사용하여 SQS 대기열 크기에 따라 Lambda 함수의 vCPU 수를 늘립니다.",
      "D": "API 의 요청을 Amazon Simple Queue Service(Amazon SQS) 대기열로 보냅니다. 대기열에서 읽는 Amazon Elastic Container Service(Amazon ECS) 서비스로 모델을 배포합니다. 대기열 크기에 따라 서비스의 클러스터와 복사본 모두에 대해 Amazon ECS에서 AWS Auto Scaling을 활성화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 불규칙 사용 패턴 — 며칠 유휴 + 갑작스러운 대량 요청\n▸ SQS + ECS — 비동기 처리 + 메모리 효율\n\n【정답 포인트】\n▸ SQS: 비동기 API → 요청 버퍼링으로 유휴 확장\n▸ ECS: 1GB 모델 데이터 메모리 로드 필요 (Lambda 부족)\n▸ Auto Scaling: 대기열 크기 기반 동적 확장\n\n【오답 체크】\n▸ A: Lambda 메모리 3GB 한계 → 1GB 모델은 가능하지만 SQS 비동기 부재\n▸ B: ALB는 동기, App Mesh는 트래픽 관리 (스케일링 아님)\n▸ C: Lambda vCPU 스케일링 기능 없음\n\n【시험 포인트】\n▸ 비동기 + 메모리: SQS + ECS 조합\n▸ 불규칙 패턴: Auto Scaling으로 대기열 기반 스케일"
  },
  {
    "id": 423,
    "question": "솔루션 설계자는 다음 JSON 텍스트를 자격 증명 기반 정책으로 사용하여 특정 권한을 부여하려고 합니다. 솔루션 설계자가 이 정책을 연결할 수 있는 IAM 보안 주체는 무엇입니까? (2개 선택)",
    "options": {
      "A": "역할(Role)",
      "B": "그룹(Group)",
      "C": "조직(Organization)",
      "D": "Amazon Elastic Container Service(Amazon ECS) 리소스(resource)",
      "E": "Amazon EC2 리소스(resource)"
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ 자격 증명 기반 정책 — User, Group, Role에 직접 연결\n▸ 리소스 기반 정책 — S3 버킷, SQS, 역할 신뢰 정책 등\n\n【정답 포인트】\n▸ A(역할): Identity-based policy 연결 가능\n▸ B(그룹): Identity-based policy 연결 가능\n▸ 둘 다 IAM 보안 주체\n\n【오답 체크】\n▸ C: Organizations는 SCP 기반, 자격 증명 정책 불가\n▸ D, E: ECS/EC2 리소스는 리소스 기반 정책 사용\n\n【시험 포인트】\n▸ 자격 증명 정책: User, Group, Role만 지원\n▸ 리소스 정책: EC2, ECS, S3 등 AWS 리소스"
  },
  {
    "id": 424,
    "question": "회사는 Amazon EC2 온디맨드 인스턴스에서 사용자 지정 애플리케이션을 실행하고 있습니다. 애플리케이션에는 하루 24 시간, 주 7 일 실행해야 하는 프런트엔드 노드와 워크로드에 따라 짧은 시간 동안만 실행해야 하는 백엔드 노드가 있습니다. 백엔드 노드의 수는 하루 동안 다양합니다. 회사는 워크로드에 따라 더 많은 인스턴스를 확장 및 확장해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "프런트엔드 노드에는 예약 인스턴스를 사용합니다. 백엔드 노드에 AWS Fargate 를 사용합니다.",
      "B": "프런트엔드 노드에 예약 인스턴스를 사용합니다. 백엔드 노드에 스팟 인스턴스를 사용합니다.",
      "C": "프런트엔드 노드에 스팟 인스턴스를 사용합니다. 백엔드 노드에 예약 인스턴스를 사용합니다.",
      "D": "프런트엔드 노드에 스팟 인스턴스를 사용합니다. 백엔드 노드에 AWS Fargate 를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 예약 인스턴스 — 24/7 상시 실행, 큰 할인\n▸ 스팟 인스턴스 — 변동 워크로드, 최저가 (90% 할인)\n\n【정답 포인트】\n▸ 프런트엔드: 24/7 상시 → 예약 인스턴스 (최대 할인)\n▸ 백엔드: 변동 + 단기 → 스팟 인스턴스 (비용 최소)\n▸ 조합: 예측 가능한 + 가변적 워크로드 동시 최적화\n\n【오답 체크】\n▸ A: Fargate는 컨테이너용, 애플리케이션 구조 변경 필요\n▸ C: 스팟은 중단 위험 → 상시 프런트엔드 부적합\n▸ D: Fargate 비용은 스팟보다 비쌈\n\n【시험 포인트】\n▸ 예측 가능한 워크로드: 예약 인스턴스\n▸ 변동 워크로드: 스팟 인스턴스"
  },
  {
    "id": 425,
    "question": "회사는 높은 블록 스토리지 용량을 사용하여 온프레미스에서 워크로드를 실행합니다. 회사의 일일 최대 입력 및 초당 출력 트랜잭션은 15,000 IOPS를 넘지 않습니다. 이 회사는 워크로드를 Amazon EC2 로 마이그레이션하고 스토리지 용량과 독립적으로 디스크 성능을 프로비저닝하려고 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 Amazon Elastic Block Store(Amazon EBS) 볼륨 유형은 무엇입니까?",
    "options": {
      "A": "GP2 볼륨 유형",
      "B": "io2 볼륨 유형",
      "C": "GP3 볼륨 유형",
      "D": "io1 볼륨 유형"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ GP3 — 용량과 성능 독립 프로비저닝, 최적 가격\n▸ io2/io1 — 고성능 전용, 높은 비용\n\n【정답 포인트】\n▸ 15,000 IOPS: io 시리즈 필요 수준은 아님 (GP3 충분)\n▸ 독립 프로비저닝: GP3만 용량/성능 분리 가능\n▸ 비용 효율: GP3 < io2 (약 50% 저렴)\n\n【오답 체크】\n▸ A: GP2는 버스트만 IOPS 제한, 성능/용량 연동\n▸ B, D: io2/io1은 매우 높은 비용 (극고성능 필요시)\n\n【시험 포인트】\n▸ GP3: 용량/성능 독립 조절, 중간 성능 요구\n▸ io2/io1: 초고성능 + 높은 가용성 (높은 비용)"
  },
  {
    "id": 426,
    "question": "회사는 의료 애플리케이션의 데이터를 저장해야 합니다. 애플리케이션의 데이터는 자주 변경됩니다. 새로운 규정은 저장된 데이터의 모든 수준에서 감사 액세스를 요구합니다. 회사는 스토리지 용량이 부족한 온프레미스 인프라에서 애플리케이션을 호스팅합니다. 솔루션 설계자는 새로운 규정을 만족하면서 기존 데이터를 AWS 로 안전하게 마이그레이션해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS DataSync를 사용하여 기존 데이터를 Amazon S3로 이동합니다. AWS CloudTrail을 사용하여 데이터 이벤트를 기록합니다.",
      "B": "AWS Snowcone을 사용하여 기존 데이터를 Amazon S3로 이동합니다. AWS CloudTrail을 사용하여 관리 이벤트를 기록합니다.",
      "C": "Amazon S3 Transfer Acceleration을 사용하여 기존 데이터를 Amazon S3로 이동합니다. AWS CloudTrail을 사용하여 데이터 이벤트를 기록합니다.",
      "D": "AWS Storage Gateway 를 사용하여 기존 데이터를 Amazon S3 로 이동합니다. AWS CloudTrail을 사용하여 관리 이벤트를 기록합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 데이터 이벤트 감사 — CloudTrail S3 객체 레벨 로깅\n▸ AWS DataSync — 네트워크 기반 온라인 대량 마이그레이션\n\n【정답 포인트】\n▸ 의료 데이터: 모든 수준 감사 → 데이터 이벤트 필수\n▸ DataSync: 네트워크 효율, 암호화, 메타데이터 보존\n▸ CloudTrail: 데이터 이벤트로 S3 객체 접근 추적\n\n【오답 체크】\n▸ B: 관리 이벤트만 기록 → 데이터 접근 감시 불가\n▸ C: Transfer Acceleration은 마이그레이션 전용 아님\n▸ D: 관리 이벤트만 로깅 → 감시 요구 미충족\n\n【시험 포인트】\n▸ 감시 요구: CloudTrail 데이터 이벤트\n▸ 마이그레이션: DataSync (온라인) vs Snowcone (오프라인)"
  },
  {
    "id": 427,
    "question": "솔루션 아키텍트가 MySQL 데이터베이스로 복잡한 Java 애플리케이션을 구현하고 있습니다. Java 애플리케이션은 Apache Tomcat에 배포되어야 하며 고가용성이어야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS Lambda 에 애플리케이션을 배포합니다. Lambda 함수와 연결하도록 Amazon API Gateway API를 구성합니다.",
      "B": "AWS Elastic Beanstalk를 사용하여 애플리케이션을 배포합니다. 부하 분산 환경 및 롤링 배포 정책을 구성합니다.",
      "C": "데이터베이스를 Amazon ElastiCache로 마이그레이션합니다. 애플리케이션에서 액세스를 허용하도록 ElastiCache 보안 그룹을 구성합니다.",
      "D": "Amazon EC2 인스턴스를 시작합니다. EC2 인스턴스에 MySQL 서버를 설치합니다. 서버에서 애플리케이션을 구성합니다. AMI 를 생성합니다. AMI 를 사용하여 Auto Scaling 그룹으로 시작 템플릿을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Elastic Beanstalk — Apache Tomcat 기본 지원, 자동 배포\n▸ 고가용성 — Auto Scaling + ALB + 롤링 배포\n\n【정답 포인트】\n▸ Tomcat: Beanstalk 사전 구성 환경 완벽 지원\n▸ HA: 부하 분산 + 롤링 배포 기본 포함\n▸ 운영: 자동 스케일링, CloudWatch 통합\n\n【오답 체크】\n▸ A: Lambda는 Tomcat 미지원 (15분 제한)\n▸ C: ElastiCache는 캐시, 데이터베이스 대체 불가\n▸ D: 수동 구성 필요 (관리 부담 높음)\n\n【시험 포인트】\n▸ Tomcat + HA: Elastic Beanstalk 최적\n▸ 롤링 배포: 무중단 배포 구현"
  },
  {
    "id": 428,
    "question": "서버리스 애플리케이션은 Amazon API Gateway, AWS Lambda 및 Amazon DynamoDB 를 사용합니다. Lambda 함수에는 DynamoDB 테이블을 읽고 쓸 수 있는 권한이 필요합니다. DynamoDB 테이블에 대한 Lambda 함수 액세스를 가장 안전하게 제공하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Lambda 함수에 프로그래밍 방식으로 액세스할 수 있는 IAM 사용자를 생성합니다. DynamoDB 테이블에 대한 읽기 및 쓰기 액세스를 허용하는 정책을 사용자에게 연결합니다. access_key_id 및 secret_access_key 파라미터를 Lambda 환경 변수의 일부로 저장합니다. 다른 AWS 사용자에게 Lambda 함수 구성에 대한 읽기 및 쓰기 액세스 권한이 없는지 확인하십시오.",
      "B": "Lambda 를 신뢰할 수 있는 서비스로 포함하는 IAM 역할을 생성합니다. DynamoDB 테이블에 대한 읽기 및 쓰기 액세스를 허용하는 역할에 정책을 연결합니다. 새 역할을 실행 역할로 사용하도록 Lambda 함수의 구성을 업데이트합니다.",
      "C": "Lambda 함수에 프로그래밍 방식으로 액세스할 수 있는 IAM 사용자를 생성합니다. DynamoDB 테이블에 대한 읽기 및 쓰기 액세스를 허용하는 정책을 사용자에게 연결합니다. AWS Systems Manager Parameter Store 에 access_key_id 및 secret_access_key 파라미터를 보안 문자열 파라미터로 저장합니다. DynamoDB 테이블에 연결하기 전에 보안 문자열 파라미터를 검색하도록 Lambda 함수 코드를 업데이트합니다.",
      "D": "DynamoDB 를 신뢰할 수 있는 서비스로 포함하는 IAM 역할을 생성합니다. Lambda 함수에서 읽기 및 쓰기 액세스를 허용하는 역할에 정책을 연결합니다. 새 역할에 실행 역할로 연결되도록 Lambda 함수의 코드를 업데이트합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ IAM 역할 (실행 역할) — Lambda에 자동으로 신뢰 관계 부여\n▸ 자격 증명 보관 금지 — 환경변수/코드에 키 저장 위험\n\n【정답 포인트】\n▸ 역할 기반: Lambda → DynamoDB 신뢰 체인\n▸ 자동 관리: 자격 증명 순환 불필요\n▸ 감시: CloudTrail에서 역할 사용 추적\n\n【오답 체크】\n▸ A: 환경변수 저장은 보안 위험 (접근 쉬움)\n▸ C: Parameter Store 좋으나 역할이 표준 방식\n▸ D: DynamoDB를 신뢰 서비스로 설정 불가 (관계 역방향)\n\n【시험 포인트】\n▸ Lambda 권한: 실행 역할 (IAM Role)\n▸ 절대 금지: 환경변수에 자격 증명 저장"
  },
  {
    "id": 429,
    "question": "다음 IAM 정책은 IAM 그룹에 연결됩니다. 이것은 그룹에 적용되는 유일한 정책입니다. 그룹 구성원에 대한 이 정책의 유효 IAM 권한은 무엇입니까?",
    "options": {
      "A": "그룹 구성원은 us-east-1 지역 내 모든 Amazon EC2 작업이 허용됩니다. 허용 권한 이후의 문은 적용되지 않습니다.",
      "B": "그룹 구성원은 멀티 팩터 인증(MFA)으로 로그인하지 않는 한 us-east-1 리전에서 모든 Amazon EC2 권한이 거부됩니다.",
      "C": "그룹 구성원은 멀티 팩터 인증(MFA)으로 로그인할 때 모든 리전에 대한 ec2:StopInstances 및 ec2:TerminateInstances 권한이 허용됩니다. 그룹 구성원은 다른 모든 Amazon EC2 작업이 허용됩니다.",
      "D": "그룹 구성원은 멀티 팩터 인증(MFA)으로 로그인한 경우에만 us-east-1 리전에 대한 ec2:StopInstances 및 ec2:TerminateInstances 권한이 허용됩니다. 그룹 구성원은 us-east-1 리전 내에서 다른 모든 Amazon EC2 작업이 허용됩니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Allow 명시문 — 기본 권한 허용 (us-east-1 EC2 *)\n▸ Deny 조건부 — MFA 없으면 StopInstances/TerminateInstances 거부\n\n【정답 포인트】\n▸ 기본: Allow ec2:* in us-east-1\n▸ 제약: StopInstances/TerminateInstances는 MFA 필수\n▸ 다른 작업: MFA 없어도 허용\n\n【오답 체크】\n▸ A: 조건부 거부 무시 (MFA 관계없음)\n▸ B: 반대 해석 (조건부 부정)\n▸ C: 리전 범위 확대 (정책에 없음)\n\n【시험 포인트】\n▸ Allow + Deny 조건: Deny가 최종 결정\n▸ 명시적 거부: 다른 Allow 무효화"
  },
  {
    "id": 430,
    "question": "제조 회사에는 Amazon S3 버킷에 .csv 파일을 업로드하는 기계 센서가 있습니다. 이러한 .csv 파일은 이미지로 변환되어야 하며 그래픽 보고서의 자동 생성을 위해 가능한 한 빨리 사용할 수 있어야 합니다. 이미지는 1 개월이 지나면 관련이 없게 되지만 1 년에 두 번 기계 학습(ML) 모델을 훈련시키기 위해 .csv 파일을 보관해야 합니다. ML 교육 및 감사는 몇 주 전에 미리 계획됩니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "매시간 .csv 파일을 다운로드하고 이미지 파일을 생성하며 이미지를 S3 버킷에 업로드하는 Amazon EC2 스팟 인스턴스를 시작합니다.",
      "B": ".csv 파일을 이미지로 변환하고 이미지를 S3 버킷에 저장하는 AWS Lambda 함수를 설계합니다. .csv 파일이 업로드되면 Lambda 함수를 호출합니다.",
      "C": "S3 버킷의 .csv 파일 및 이미지 파일에 대한 S3 수명 주기 규칙을 생성합니다. .csv 파일을 업로드하고 1일 후에 S3 Standard에서 S3 Glacier로 전환합니다. 30일 후에 이미지 파일을 만료하십시오.",
      "D": "S3 버킷의 .csv 파일 및 이미지 파일에 대한 S3 수명 주기 규칙을 생성합니다. 업로드 1일 후 .csv 파일을 S3 Standard에서 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환합니다. 30일 후에 이미지 파일을 만료하십시오.",
      "E": "S3 버킷의 .csv 파일 및 이미지 파일에 대한 S3 수명 주기 규칙을 생성합니다. .csv 파일을 업로드하고 1 일 후에 S3 Standard 에서 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다. RRS(Reduced Redundancy Storage)에 이미지 파일을 보관합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ Lambda 이벤트 기반 — S3 업로드 즉시 처리\n▸ S3 수명 주기 — 비용 최적화 (이미지 30일 후 삭제)\n\n【정답 포인트】\n▸ B: 실시간 변환 (Lambda) → 즉시 이미지 생성\n▸ C: .csv 1일 후 Glacier (저렴), 이미지 30일 삭제\n▸ 조합: 빠른 처리 + 비용 효율화\n\n【오답 체크】\n▸ A: 정시 배치는 즉시성 낮음\n▸ D: Glacier → .csv 복구 지연 (2시간+)\n▸ E: RRS 폐지됨, Standard-IA도 비용 높음\n\n【시험 포인트】\n▸ 실시간: Lambda 이벤트 기반\n▸ 비용: Glacier vs Standard-IA 비교"
  },
  {
    "id": 431,
    "question": "회사에서 웹 애플리케이션으로 새로운 비디오 게임을 개발했습니다. 애플리케이션은 데이터베이스 계층에 MySQL용 Amazon RDS가 있는 VPC의 3계층 아키텍처에 있습니다. 여러 플레이어가 온라인에서 동시에 경쟁합니다. 게임 개발자는 거의 실시간으로 상위 10 개 점수판을 표시하고 현재 점수를 유지하면서 게임을 중지하고 복원할 수 있는 기능을 제공하고자 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "웹 애플리케이션이 표시할 점수를 캐시하도록 Memcached 클러스터용 Amazon ElastiCache를 설정합니다.",
      "B": "Redis 클러스터용 Amazon ElastiCache 를 설정하여 웹 애플리케이션이 표시할 점수를 계산하고 캐시합니다.",
      "C": "웹 애플리케이션 앞에 Amazon CloudFront 배포를 배치하여 애플리케이션 섹션의 점수판을 캐시합니다.",
      "D": "MySQL 용 Amazon RDS 에서 읽기 전용 복제본을 생성하여 스코어보드를 계산하고 웹 애플리케이션에 읽기 트래픽을 제공하는 쿼리를 실행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Redis — 영구성 + 계산 가능 (SET 연산 지원)\n▸ Memcached — 휘발성 캐시만 (계산 기능 없음)\n\n【정답 포인트】\n▸ 실시간 점수판: Redis의 정렬된 집합 (Sorted Set)\n▸ 게임 재개: Redis 데이터 영구성\n▸ 캐시 성능: 극도로 낮은 지연\n\n【오답 체크】\n▸ A: Memcached는 영구성 없음 (게임 중단 불가)\n▸ C: CloudFront는 정적 콘텐츠용 (동적 점수 부적합)\n▸ D: RDS 읽기 복제본은 캐시 역할 미흡\n\n【시험 포인트】\n▸ 실시간 + 영구성: Redis\n▸ Memcached: 캐시 전용 (비영구)"
  },
  {
    "id": 432,
    "question": "한 전자상거래 회사에서 기계 학습(ML) 알고리즘을 사용하여 모델을 구축하고 훈련하려고 합니다. 회사는 모델을 사용하여 복잡한 시나리오를 시각화하고 고객 데이터의 추세를 감지합니다. 아키텍처 팀은 ML 모델을 보고 플랫폼과 통합하여 증강 데이터를 분석하고 비즈니스 인텔리전스 대시보드에서 직접 데이터를 사용하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue 를 사용하여 ML 변환을 생성하여 모델을 구축하고 교육합니다. Amazon OpenSearch Service를 사용하여 데이터를 시각화합니다.",
      "B": "Amazon SageMaker 를 사용하여 모델을 구축하고 교육합니다. Amazon QuickSight 를 사용하여 데이터를 시각화합니다.",
      "C": "AWS Marketplace 에서 사전 구축된 ML Amazon 머신 이미지(AMI)를 사용하여 모델을 구축하고 교육합니다. Amazon OpenSearch Service를 사용하여 데이터를 시각화합니다.",
      "D": "Amazon QuickSight 를 사용하여 계산된 필드를 사용하여 모델을 구축하고 교육합니다. Amazon QuickSight를 사용하여 데이터를 시각화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SageMaker — 머신러닝 전문 관리 서비스\n▸ QuickSight — BI 대시보드 통합 시각화\n\n【정답 포인트】\n▸ SageMaker: 모델 구축/훈련 최적화 (최소 운영)\n▸ QuickSight: BI 통합 → 대시보드 직접 분석\n▸ 통합: SageMaker → QuickSight 자동 연결\n\n【오답 체크】\n▸ A: Glue는 ETL (ML 모델링 약함)\n▸ C: AMI는 인프라 관리 필요 (오버헤드 높음)\n▸ D: QuickSight는 ML 훈련 불가\n\n【시험 포인트】\n▸ ML 모델: SageMaker (관리 서비스)\n▸ BI 통합: QuickSight (최소 운영)"
  },
  {
    "id": 433,
    "question": "한 회사가 여러 AWS 계정에서 프로덕션 및 비프로덕션 환경 워크로드를 실행하고 있습니다. 계정은 AWS Organizations의 조직에 있습니다. 회사는 비용 사용 태그의 수정을 방지하는 솔루션을 설계해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "권한이 부여된 보안 주체 외에는 태그 수정을 방지하기 위해 사용자 지정 AWS Config 규칙을 생성합니다.",
      "B": "태그 수정을 방지하기 위해 AWS CloudTrail에서 사용자 지정 추적을 생성합니다.",
      "C": "인증된 주체 외에는 태그 수정을 방지하기 위해 서비스 제어 정책(SCP)을 생성합니다.",
      "D": "태그 수정을 방지하기 위해 사용자 지정 Amazon CloudWatch 로그를 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SCP — Organizations 레벨 정책 제약\n▸ AWS Config — 규칙 위반 감지만 가능 (차단 불가)\n\n【정답 포인트】\n▸ SCP: 모든 계정에 일관된 정책 적용\n▸ 선택적 거부: 특정 주체만 예외 처리\n▸ 다중 계정: Organizations 범위의 유일한 강제\n\n【오답 체크】\n▸ A: Config는 감시만 (차단 기능 없음)\n▸ B: CloudTrail은 로깅만 (제약 기능 없음)\n▸ D: CloudWatch는 이벤트 처리 (태그 제약 불가)\n\n【시험 포인트】\n▸ 다중 계정 제약: SCP만 가능\n▸ Config: 준수 감시 (정책 아님)"
  },
  {
    "id": 434,
    "question": "회사는 AWS 클라우드에서 애플리케이션을 호스팅합니다. 이 애플리케이션은 Amazon DynamoDB 테이블과 함께 Auto Scaling 그룹의 Elastic Load Balancer 뒤에 있는 Amazon EC2 인스턴스에서 실행됩니다. 회사는 다운타임을 최소화하면서 다른 AWS 리전에서 애플리케이션을 사용할 수 있기를 원합니다. 가동 중지 시간을 최소화하면서 이러한 요구 사항을 충족하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": {
      "A": "재해 복구 지역에 Auto Scaling 그룹과 로드 밸런서를 생성합니다. DynamoDB 테이블을 전역 테이블로 구성합니다. 새 재해 복구 리전의 로드 밸런서를 가리키도록 DNS 장애 조치를 구성합니다.",
      "B": "필요할 때 시작할 EC2 인스턴스, 로드 밸런서 및 DynamoDB 테이블을 생성하기 위해 AWS CloudFormation 템플릿을 생성합니다. 새 재해 복구 리전의 로드 밸런서를 가리키도록 DNS 장애 조치를 구성합니다.",
      "C": "AWS CloudFormation 템플릿을 생성하여 EC2 인스턴스와 필요할 때 실행할 로드 밸런서를 생성합니다. DynamoDB 테이블을 전역 테이블로 구성합니다. 새 재해 복구 리전의 로드 밸런서를 가리키도록 DNS 장애 조치를 구성합니다.",
      "D": "재해 복구 지역에서 Auto Scaling 그룹 및 로드 밸런서를 생성합니다. DynamoDB 테이블을 전역 테이블로 구성합니다. 재해 복구 로드 밸런서를 가리키는 Amazon Route 53 을 업데이트하는 AWS Lambda 함수를 트리거하는 Amazon CloudWatch 경보를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ DynamoDB 전역 테이블 — 다중 리전 자동 동기화\n▸ DNS 장애 조치 — Route 53 자동 페일오버\n\n【정답 포인트】\n▸ A: 사전 구성 + 자동 대기 → RTO 최소\n▸ DynamoDB 전역: 쓰기 리전 유연성\n▸ Route 53: DNS 기반 즉시 전환\n\n【오답 체크】\n▸ B: CloudFormation 시작은 느림 (RTO 증가)\n▸ C: CloudFormation 느림 + 복잡\n▸ D: Lambda는 추가 지연 (DNS 직접이 빠름)\n\n【시험 포인트】\n▸ 최소 다운타임: 사전 구성 + 자동 DNS\n▸ RTO: Route 53 DNS 장애 조치"
  },
  {
    "id": 435,
    "question": "회사는 2 주 이내에 온프레미스 데이터 센터에서 AWS 로 MySQL 데이터베이스를 마이그레이션해야 합니다. 데이터베이스 크기는 20TB 입니다. 회사는 다운타임을 최소화하면서 마이그레이션을 완료하기를 원합니다. 데이터베이스를 가장 비용 효율적으로 마이그레이션하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Snowball Edge Storage Optimized 디바이스를 주문합니다. AWS Schema Conversion Tool(AWS SCT)과 함께 AWS Database Migration Service(AWS DMS)를 사용하여 진행 중인 변경 사항을 복제하여 데이터베이스를 마이그레이션합니다. Snowball Edge 디바이스를 AWS로 보내 마이그레이션을 완료하고 진행 중인 복제를 계속합니다.",
      "B": "AWS Snowmobile 차량을 주문합니다. AWS Schema Conversion Tool(AWS SCT)과 함께 AWS Database Migration Service(AWS DMS)를 사용하여 지속적인 변경 사항이 있는 데이터베이스를 마이그레이션합니다. Snowmobile 차량을 다시 AWS 로 보내 마이그레이션을 완료하고 진행 중인 복제를 계속합니다.",
      "C": "GPU 장치로 AWS Snowball Edge Compute Optimized 를 주문합니다. AWS Schema Conversion Tool(AWS SCT)과 함께 AWS Database Migration Service(AWS DMS)를 사용하여 지속적인 변경 사항이 있는 데이터베이스를 마이그레이션합니다. Snowball 디바이스를 AWS로 보내 마이그레이션을 완료하고 진행 중인 복제를 계속합니다.",
      "D": "1GB 전용 AWS Direct Connect 연결을 주문하여 데이터 센터와의 연결을 설정합니다. AWS Schema Conversion Tool(AWS SCT)과 함께 AWS Database Migration Service(AWS DMS)를 사용하여 진행 중인 변경 사항을 복제하여 데이터베이스를 마이그레이션합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Snowball Edge Storage — 80TB, 2주 배송\n▸ Snowmobile — 100PB (과도), 프로비저닝 오래 걸림\n\n【정답 포인트】\n▸ 20TB + 2주: Snowball Edge 최적\n▸ DMS: 네트워크 병렬 복제 계속\n▸ 결합: 오프라인 전송 + 온라인 동기화\n\n【오답 체크】\n▸ B: Snowmobile은 용량 과다, 배송 시간 길음\n▸ C: Compute 버전 불필요 (스토리지만 필요)\n▸ D: 1GB 연결은 20TB 동기화 2주 초과\n\n【시험 포인트】\n▸ 20TB: Snowball Edge (10~80TB 범위)\n▸ 100PB+: Snowmobile"
  },
  {
    "id": 436,
    "question": "회사에서 온프레미스 PostgreSQL 데이터베이스를 Amazon RDS for PostgreSQL DB 인스턴스로 옮겼습니다. 회사는 신제품을 성공적으로 출시했습니다. 데이터베이스의 워크로드가 증가했습니다. 회사는 인프라를 추가하지 않고 더 큰 워크로드를 수용하려고 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "전체 워크로드에 대해 예약된 DB 인스턴스를 구매합니다. PostgreSQL DB 인스턴스용 Amazon RDS를 더 크게 만듭니다.",
      "B": "Amazon RDS for PostgreSQL DB 인스턴스를 다중 AZ DB 인스턴스로 만듭니다.",
      "C": "GPU 장치로 AWS Snowball Edge Compute Optimized 를 주문합니다. AWS Schema Conversion Tool(AWS SCT)과 함께 AWS Database Migration Service(AWS DMS)를 사용하여 지속적인 변경 사항이 있는 데이터베이스를 마이그레이션합니다. Snowball 디바이스를 AWS로 보내 마이그레이션을 완료하고 진행 중인 복제를 계속합니다.",
      "D": "Amazon RDS for PostgreSQL DB 인스턴스를 온디맨드 DB 인스턴스로 만듭니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Vertical Scaling — DB 인스턴스 크기 증대\n▸ 예약 인스턴스 — 예측 가능한 비용 (40% 할인)\n\n【정답 포인트】\n▸ 더 큰 워크로드: 인스턴스 업그레이드\n▸ 예약 인스턴스: 장기 비용 효율\n▸ 무중단: RDS 지원\n\n【오답 체크】\n▸ B: 다중 AZ는 고가용성만 (성능 증가 없음)\n▸ C: Snowball은 관계 없음\n▸ D: 온디맨드는 예약보다 비쌈 (60% 더 비쌈)\n\n【시험 포인트】\n▸ 성능 증대: Vertical Scaling\n▸ 비용 최적: 예약 인스턴스"
  },
  {
    "id": 437,
    "question": "회사는 Auto Scaling 그룹의 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 인스턴스에서 전자상거래 웹 사이트를 운영합니다. 사이트에서 IP 주소가 변경되는 불법 외부 시스템의 높은 요청 비율과 관련된 성능 문제가 발생하고 있습니다. 보안 팀은 웹 사이트에 대한 잠재적인 DDoS 공격에 대해 걱정하고 있습니다. 회사는 합법적인 사용자에게 최소한의 영향을 미치는 방식으로 불법적으로 들어오는 요청을 차단해야 합니다. 솔루션 설계자는 무엇을 추천해야 합니까?",
    "options": {
      "A": "Amazon Inspector를 배포하고 ALB와 연결합니다.",
      "B": "AWS WAF를 배포하고 ALB와 연결하고 속도 제한 규칙을 구성합니다.",
      "C": "들어오는 트래픽을 차단하기 위해 ALB와 연결된 네트워크 ACL에 규칙을 배포합니다.",
      "D": "Amazon GuardDuty 를 배포하고 GuardDuty 를 구성할 때 속도 제한 보호를 활성화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS WAF — 애플리케이션 계층 위협 차단\n▸ 속도 제한 — IP별 요청 수 제한\n\n【정답 포인트】\n▸ DDoS 공격: 속도 제한 규칙으로 방어\n▸ ALB 연결: Layer 7 (HTTP/HTTPS) 필터링\n▸ 합법 사용자: 정상 요청은 통과\n\n【오답 체크】\n▸ A: Inspector는 취약점 스캔 (방어 기능 없음)\n▸ C: NACL은 Layer 3/4 (HTTP 패턴 분석 불가)\n▸ D: GuardDuty는 위협 감지 (속도 제한 없음)\n\n【시험 포인트】\n▸ DDoS 방어: AWS WAF (속도 제한 규칙)\n▸ Layer: ALB (Layer 7) + WAF"
  },
  {
    "id": 438,
    "question": "회사에서 외부 감사인과 회계 데이터를 공유하려고 합니다. 데이터는 프라이빗 서브넷에 상주하는 Amazon RDS DB 인스턴스에 저장됩니다. 감사자는 자체 AWS 계정이 있으며 자체 데이터베이스 사본이 필요합니다. 회사가 감사자와 데이터베이스를 공유하는 가장 안전한 방법은 무엇입니까?",
    "options": {
      "A": "데이터베이스의 읽기 전용 복제본을 생성합니다. 감사자 액세스 권한을 부여하도록 IAM 표준 데이터베이스 인증을 구성합니다.",
      "B": "데이터베이스 내용을 텍스트 파일로 내보냅니다. 파일을 Amazon S3 버킷에 저장합니다. 감사자를 위한 새 IAM 사용자를 생성합니다. 사용자에게 S3 버킷에 대한 액세스 권한을 부여합니다.",
      "C": "데이터베이스의 스냅샷을 Amazon S3 버킷에 복사합니다. IAM 사용자를 생성합니다. 사용자의 키를 감사자와 공유하여 S3 버킷의 객체에 대한 액세스 권한을 부여합니다.",
      "D": "데이터베이스의 암호화된 스냅샷을 생성합니다. 감사자와 스냅샷을 공유합니다. AWS Key Management Service(AWS KMS) 암호화 키에 대한 액세스를 허용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ RDS Snapshot — 데이터 전체 포인트 타임 백업\n▸ 교차 계정 공유 — AWS KMS 키 + 권한 설정\n\n【정답 포인트】\n▸ 암호화된 스냅샷 생성 → 감사자 계정과 공유\n▸ KMS 암호화 키 액세스 권한 부여 → 감사자가 스냅샷 복원 가능\n\n【오답 체크】\n(A) 읽기 복제본 — IAM 인증은 온라인 복제본 전용, 감시자 계정으로의 이전 불가\n(B) 텍스트 파일 → 데이터 크기 증대, 구조 손실, S3 용량 낭비\n(C) 스냅샷 공유 후 IAM 키 공유 → 보안 위험, 키 탈취 시 노출\n\n【시험 포인트】\n교차 계정 데이터 공유 → KMS 메커니즘 필수 (권한 분리)\n감사자의 자체 계정 독립성 → 데이터 주권 확보"
  },
  {
    "id": 439,
    "question": "솔루션 설계자는 IP 주소 범위가 작은 VPC 를 구성했습니다. VPC 에 있는 Amazon EC2 인스턴스의 수가 증가하고 있으며 향후 워크로드를 위한 IP 주소의 수가 부족합니다. 최소한의 운영 오버헤드로 이 문제를 해결하는 솔루션은 무엇입니까?",
    "options": {
      "A": "추가 IPv4 CIDR 블록을 추가하여 IP 주소 수를 늘리고 VPC 에 추가 서브넷을 만듭니다. 새 CIDR을 사용하여 새 서브넷에 새 리소스를 만듭니다.",
      "B": "추가 서브넷이 있는 두 번째 VPC 를 생성합니다. 피어링 연결을 사용하여 두 번째 VPC를 첫 번째 VPC와 연결 경로를 업데이트하고 두 번째 VPC의 서브넷에서 새 리소스를 생성합니다.",
      "C": "AWS Transit Gateway를 사용하여 transit gateway를 추가하고 첫 번째 VPUpdate에 두 번째 VPC 를 연결하여 transit gateway 및 VPC 의 경로를 업데이트합니다. 두 번째 VPC 의 서브넷에 새 리소스를 만듭니다.",
      "D": "두 번째 VPC 를 생성합니다. Amazon EC2 및 가상 프라이빗 게이트웨이에서 VPN 호스팅 솔루션을 사용하여 첫 번째 VPC 와 두 번째 VPC 간에 사이트 간 VPN 연결을 생성합니다. VPC 간 경로를 VPN 을 통한 트래픽으로 업데이트합니다. 두 번째 VPC 의 서브넷에 새 리소스를 만듭니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ VPC CIDR 부족 → 인스턴스 증가 추세\n▸ 최소 운영 오버헤드 → 기존 자원 영향 최소화\n\n【정답 포인트】\n▸ 동일 VPC 내 추가 CIDR 블록 추가\n▸ 새 CIDR로 신규 서브넷 생성 → 기존 워크로드 무영향\n\n【오답 체크】\n(B) 두 번째 VPC + 피어링 → 라우팅 복잡성, 운영 오버헤드 증대\n(C) Transit Gateway → 멀티 VPC 연결 시 필요지만 단일 VPC 확장엔 오버킬\n(D) VPN 사이트간 연결 → 성능 저하, 관리 복잡도 높음\n\n【시험 포인트】\nVPC 스케일링 → 추가 CIDR 블록이 가장 경제적\n피어링 vs Transit Gateway 구분 → 수평 확장 상황"
  },
  {
    "id": 440,
    "question": "한 회사에서 애플리케이션 테스트 중에 Amazon RDS for MySQL DB 인스턴스를 사용했습니다. 테스트 주기가 끝날 때 DB 인스턴스를 종료하기 전에 솔루션 설계자는 두 개의 백업을 생성했습니다. 솔루션 설계자는 데이터베이스 덤프를 생성하기 위해 mysqldump 유틸리티를 사용하여 첫 번째 백업을 생성했습니다. 솔루션 설계자는 RDS 종료 시 최종 DB 스냅샷 옵션을 활성화하여 두 번째 백업을 생성했습니다. 회사는 이제 새로운 테스트 주기를 계획하고 있으며 가장 최근 백업에서 새 DB 인스턴스를 생성하려고 합니다. 이 회사는 DB 인스턴스를 호스팅하기 위해 Amazon Aurora 의 MySQL 호환 에디션을 선택했습니다. 어떤 솔루션이 새 DB 인스턴스를 생성합니까? (2개 선택)",
    "options": {
      "A": "RDS 스냅샷을 Aurora로 직접 가져옵니다.",
      "B": "RDS 스냅샷을 Amazon S3 에 업로드합니다. 그런 다음 RDS 스냅샷을 Aurora 로 가져옵니다.",
      "C": "데이터베이스 덤프를 Amazon S3 에 업로드합니다. 그런 다음 데이터베이스 덤프를 Aurora로 가져옵니다.",
      "D": "AWS Database Migration Service(AWS DMS)를 사용하여 RDS 스냅샷을 Aurora 로 가져옵니다.",
      "E": "데이터베이스 덤프를 Amazon S3 에 업로드합니다. 그런 다음 AWS Database Migration Service(AWS DMS)를 사용하여 데이터베이스 덤프를 Aurora로 가져옵니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ mysqldump 덤프 — 논리적 백업 형식\n▸ RDS Snapshot — 물리적 백업 형식\n▸ Aurora 마이그레이션 — 두 경로 모두 가능\n\n【정답 포인트】\n▸\n(A) 스냅샷 직접 → RDS→Aurora 네이티브 변환\n▸\n(C) 덤프 파일 → S3 업로드 후 Parquet/CSV 마이그레이션\n\n【오답 체크】\n(B) 스냅샷→S3 → 불필요한 중간 단계\n(D) DMS 스냅샷 → 과도한 리소스 사용\n(E) DMS 덤프 → 간단한 덤프는 직접 로드가 효율적\n\n【시험 포인트】\nRDS Snapshot 직접 변환 → 동종 엔진(MySQL→Aurora MySQL)\n논리적 백업 처리 → S3 경유 필수"
  },
  {
    "id": 441,
    "question": "회사는 Application Load Balancer 뒤의 Amazon Linux Amazon EC2 인스턴스에서 다중 계층 웹 애플리케이션을 호스팅합니다. 인스턴스는 여러 가용 영역의 Auto Scaling 그룹에서 실행됩니다. 이 회사는 애플리케이션의 최종 사용자가 대량의 정적 웹 콘텐츠에 액세스할 때 Auto Scaling 그룹이 더 많은 온디맨드 인스턴스를 시작하는 것을 관찰합니다. 회사는 비용을 최적화하려고 합니다. 애플리케이션을 가장 비용 효율적으로 재설계하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": {
      "A": "온디맨드 인스턴스 대신 예약 인스턴스를 사용하도록 Auto Scaling 그룹을 업데이트합니다.",
      "B": "온디맨드 인스턴스 대신 스팟 인스턴스를 시작하여 조정하도록 Auto Scaling 그룹을 업데이트합니다.",
      "C": "Amazon S3 버킷에서 정적 웹 콘텐츠를 호스팅할 Amazon CloudFront 배포를 만듭니다.",
      "D": "Amazon API Gateway API 뒤에 AWS Lambda 함수를 생성하여 정적 웹 사이트 콘텐츠를 호스팅합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 정적 콘텐츠 대량 다운로드 → 자동 스케일링 증가\n▸ 비용 최적화 → 원점 부하 감소 전략\n\n【정답 포인트】\n▸ CloudFront + S3 — 엣지 로케이션 캐싱\n▸ 원점 트래픽 감소 → Auto Scaling 불필요 인스턴스 감소\n\n【오답 체크】\n(A) 예약 인스턴스 → 비용 절감이지 부하 감소 아님\n(B) 스팟 인스턴스 → 중단 위험, 정적 콘텐츠 서빙엔 부적합\n(D) Lambda+API Gateway → 정적 파일 서빙 비효율\n\n【시험 포인트】\n정적/동적 콘텐츠 분리 → CDN 전략 핵심\nAuto Scaling 빈번 유발 → 원점 부하 개선 우선"
  },
  {
    "id": 442,
    "question": "한 회사가 여러 AWS 계정에 몇 페타바이트의 데이터를 저장합니다. 이 회사는 AWS Lake Formation 을 사용하여 데이터 레이크를 관리합니다. 회사의 데이터 과학 팀은 분석 목적으로 회사의 엔지니어링 팀과 계정에서 선택한 데이터를 안전하게 공유하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "필요한 데이터를 공통 계정에 복사하십시오. 해당 계정에서 IAM 액세스 역할을 생성합니다. 엔지니어링 팀 계정의 사용자를 신뢰할 수 있는 엔터티로 포함하는 권한 정책을 지정하여 액세스 권한을 부여합니다.",
      "B": "필요한 엔지니어링 팀 사용자가 데이터에 액세스할 수 있도록 데이터가 저장된 각 계정에서 Lake Formation 권한 부여 명령을 사용합니다.",
      "C": "AWS Data Exchange 를 사용하여 필요한 데이터를 필요한 엔지니어링 팀 계정에 비공개로 게시합니다.",
      "D": "Lake Formation 태그 기반 액세스 제어를 사용하여 엔지니어링 팀 계정에 필요한 데이터에 대한 교차 계정 권한을 승인하고 부여합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Lake Formation 교차 계정 공유 → 태그 기반 액세스\n▸ 최소 운영 오버헤드 → 데이터 복사 불필요\n\n【정답 포인트】\n▸ Lake Formation 태그 기반 ACL → 엔지니어링 계정에 권한 부여\n▸ 데이터 위치 유지 → 복사 오버헤드 제거\n\n【오답 체크】\n(A) 공통 계정 복사 → 데이터 중복, 비용 증가\n(B) 각 계정별 명령어 → 확장성 낮음\n(C) Data Exchange → 데이터 레이크용 아님, 마켓플레이스 용\n\n【시험 포인트】\nLake Formation → AWS 기본 데이터 레이크 서비스\n태그 기반 AC → 대규모 다중 계정 환경에 최적"
  },
  {
    "id": 443,
    "question": "회사는 AWS 에서 확장 가능한 웹 애플리케이션을 호스팅하려고 합니다. 응용 프로그램은 전 세계 여러 지역의 사용자가 액세스할 수 있습니다. 애플리케이션 사용자는 최대 기가바이트 크기의 고유한 데이터를 다운로드하고 업로드할 수 있습니다. 개발 팀은 업로드 및 다운로드 대기 시간을 최소화하고 성능을 최대화할 수 있는 비용 효율적인 솔루션을 원합니다. 이를 달성하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": {
      "A": "Transfer Acceleration과 함께 Amazon S3를 사용하여 애플리케이션을 호스팅합니다.",
      "B": "CacheControl 헤더와 함께 Amazon S3를 사용하여 애플리케이션을 호스팅합니다.",
      "C": "Auto Scaling 및 Amazon CloudFront와 함께 Amazon EC2를 사용하여 애플리케이션을 호스팅합니다.",
      "D": "Auto Scaling 및 Amazon ElastiCache와 함께 Amazon EC2를 사용하여 애플리케이션을 호스팅합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 대용량 데이터 업/다운로드 — 기가바이트 크기\n▸ 글로벌 지역 사용자 → 지연 시간 최소화\n\n【정답 포인트】\n▸ S3 Transfer Acceleration — 엣지 기반 전송 최적화\n▸ CloudFront 우회 → S3 직접 고속화\n\n【오답 체크】\n(B) CacheControl 헤더 → 다운로드만, 업로드 미지원\n(C) EC2+CloudFront → 비용 높음, CDN 캐시 무의미\n(D) ElastiCache → 데이터 캐싱용, 업/다운로드 가속화 아님\n\n【시험 포인트】\nTransfer Acceleration → S3 전용 전송 가속화 서비스\n업로드 최적화 → Transfer Acceleration이 유일한 선택"
  },
  {
    "id": 444,
    "question": "회사에서 응용 프로그램의 안정적인 아키텍처를 설계하기 위해 솔루션 설계자를 고용했습니다. 이 애플리케이션은 웹 서버를 실행하는 Amazon RDS DB 인스턴스 1 개와 수동으로 프로비저닝된 Amazon EC2 인스턴스 2 개로 구성됩니다. EC2 인스턴스는 단일 가용 영역에 있습니다. 직원이 최근 DB 인스턴스를 삭제했고 그 결과 애플리케이션을 24 시간 동안 사용할 수 없었습니다. 회사는 환경의 전반적인 안정성에 관심이 있습니다. 애플리케이션 인프라의 안정성을 극대화하기 위해 솔루션 설계자는 무엇을 해야 합니까?",
    "options": {
      "A": "하나의 EC2 인스턴스를 삭제하고 다른 EC2 인스턴스에서 종료 방지 기능을 활성화합니다. 다중 AZ가 되도록 DB 인스턴스를 업데이트하고 삭제 방지를 활성화합니다.",
      "B": "DB 인스턴스를 다중 AZ 로 업데이트하고 삭제 방지를 활성화합니다. Application Load Balancer 뒤에 EC2 인스턴스를 배치하고 여러 가용 영역에 걸쳐 EC2 Auto Scaling 그룹에서 실행합니다.",
      "C": "Amazon API Gateway 및 AWS Lambda 함수와 함께 추가 DB 인스턴스를 생성합니다. API Gateway 를 통해 Lambda 함수를 호출하도록 애플리케이션을 구성합니다. Lambda 함수가 두 DB 인스턴스에 데이터를 쓰도록 합니다.",
      "D": "여러 가용 영역에 여러 서브넷이 있는 EC2 Auto Scaling 그룹에 EC2 인스턴스를 배치합니다. 온디맨드 인스턴스 대신 스팟 인스턴스를 사용하십시오. 인스턴스의 상태를 모니터링하도록 Amazon CloudWatch 경보를 설정합니다. DB 인스턴스를 다중 AZ 로 업데이트하고 삭제 방지를 활성화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DB 인스턴스 실수 삭제 → 24시간 다운타임\n▸ 전체 안정성 → 고가용성 + 복원력\n\n【정답 포인트】\n▸ RDS 다중 AZ + 삭제 방지 → DB 이중화\n▸ ALB + Auto Scaling + 다중 AZ EC2 → 컴퓨팅 이중화\n\n【오답 체크】\n(A) 방지 기능만 → 고가용성 구조 없음\n(C) 추가 DB+Lambda → 복잡도 높음, 동기화 어려움\n(D) 스팟 인스턴스 → 중단 위험으로 안정성 저하\n\n【시험 포인트】\n다중 AZ + 삭제 방지 → 핵심 방어 메커니즘\nAuto Scaling + ALB → 자동 복구 능력"
  },
  {
    "id": 445,
    "question": "회사는 회사 데이터 센터의 대규모 NAS(Network-Attached Storage) 시스템에 700 테라바이트의 데이터를 저장하고 있습니다. 이 회사는 10Gbps AWS Direct Connect 연결을 사용하는 하이브리드 환경을 보유하고 있습니다. 규제 기관의 감사 후 회사는 90 일 이내에 데이터를 클라우드로 옮길 수 있습니다. 회사는 데이터를 중단 없이 효율적으로 이동해야 합니다. 회사는 여전히 이전 기간 동안 데이터에 액세스하고 데이터를 업데이트할 수 있어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "회사 데이터 센터에서 AWS DataSync 에이전트를 생성합니다. 데이터 전송 작업 생성 Amazon S3 버킷으로의 전송을 시작합니다.",
      "B": "데이터를 AWS Snowball Edge Storage Optimized 디바이스에 백업합니다. 디바이스를 AWS 데이터 센터로 배송합니다. 온프레미스 파일 시스템에 대상 Amazon S3 버킷을 탑재합니다.",
      "C": "DataSync 를 사용하여 Direct Connect 연결을 통해 로컬 스토리지에서 지정된 Amazon S3 버킷으로 데이터를 직접 복사합니다.",
      "D": "테이프에 데이터를 백업합니다. 테이프를 AWS 데이터 센터로 배송합니다. 온프레미스 파일 시스템에 대상 Amazon S3 버킷을 탑재합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 700TB 온프레미스 데이터 → 90일 이내 마이그레이션\n▸ 무중단 전송 → DataSync 에이전트\n\n【정답 포인트】\n▸ DataSync 에이전트 온프레미스 배포\n▸ Direct Connect 활용 → S3로 직접 전송\n\n【오답 체크】\n(B) Snowball Edge → 오프라인, 전송 중 액세스 불가\n(C) DataSync 직접 — 실제로는\n(A) 와 유사하나 에이전트 전제 누락\n(D) 테이프 배송 → 가장 느림\n\n【시험 포인트】\nDataSync → 대용량 온프레미스→AWS 마이그레이션 기준\n무중단 요구 → Snowball 제외, 실시간 동기화 필수"
  },
  {
    "id": 446,
    "question": "회사는 데이터를 Amazon S3 버킷에 PDF 형식으로 저장합니다. 회사는 모든 신규 및 기존 데이터를 Amazon S3에 7년 동안 보관해야 한다는 법적 요구 사항을 따라야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 버킷에 대한 S3 버전 관리 기능을 켭니다. 7 년 후 데이터를 삭제하도록 S3 수명 주기를 구성합니다. 모든 S3 객체에 대한 MFA(Multi-Factor Authentication) 삭제를 구성합니다.",
      "B": "S3 버킷에 대한 거버넌스 보존 모드로 S3 객체 잠금을 켭니다. 7 년 후에 만료되도록 보존 기간을 설정합니다. 모든 기존 개체를 다시 복사하여 기존 데이터를 준수하도록 합니다.",
      "C": "S3 버킷에 대해 규정 준수 보존 모드로 S3 객체 잠금을 켭니다. 7 년 후에 만료되도록 보존 기간을 설정합니다. 모든 기존 개체를 다시 복사하여 기존 데이터를 준수하도록 합니다.",
      "D": "S3 버킷에 대해 규정 준수 보존 모드로 S3 객체 잠금을 켭니다. 7 년 후에 만료되도록 보존 기간을 설정합니다. S3 배치 작업을 사용하여 기존 데이터를 규정에 맞게 가져옵니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 7년 보관 법적 요구 → 변조 불가\n▸ S3 객체 잠금 — WORM(Write Once Read Many) 보장\n\n【정답 포인트】\n▸ 규정 준수 보존 모드 → 관리자도 삭제 불가\n▸ S3 배치 작업 → 기존 객체 일괄 처리\n\n【오답 체크】\n(A) 버전 관리+수명 주기 — 7년 후 자동 삭제 가능 (법규 위배)\n(B) 거버넌스 모드 — 우거(Bypass) 권한으로 삭제 가능\n(C) 규정 준수인데 배치 작업 없음 — 기존 데이터 미적용\n\n【시험 포인트】\n규정 준수 모드 → 절대 삭제 불가 (거버넌스와 구분)\n배치 작업 → 기존 대량 데이터 일괄 적용 도구"
  },
  {
    "id": 447,
    "question": "회사에는 Amazon API Gateway 에서 호출하는 AWS Lambda 함수에서 실행되는 상태 비저장 웹 애플리케이션이 있습니다. 회사는 지역 장애 조치 기능을 제공하기 위해 여러 AWS 지역에 애플리케이션을 배포하려고 합니다. 트래픽을 여러 지역으로 라우팅하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": {
      "A": "각 지역에 대해 Amazon Route 53 상태 확인을 생성합니다. 활성-활성 장애 조치 구성을 사용합니다.",
      "B": "각 리전의 오리진을 사용하여 Amazon CloudFront 배포를 생성합니다. CloudFront 상태 확인을 사용하여 트래픽을 라우팅합니다.",
      "C": "전송 게이트웨이를 생성합니다. Transit Gateway를 각 리전의 API Gateway 엔드포인트에 연결합니다. 요청을 라우팅하도록 전송 게이트웨이를 구성합니다.",
      "D": "기본 지역에서 Application Load Balancer 를 생성합니다. 각 리전의 API 게이트웨이 엔드포인트 호스트 이름을 가리키도록 대상 그룹을 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 다중 리전 장애 조치 — 액티브-액티브\n▸ Route 53 건강 검사 → 라우팅 정책 적용\n\n【정답 포인트】\n▸ Route 53 상태 확인 → 리전별 헬스 체크\n▸ 활성-활성 장애 조치 → 양쪽 리전 트래픽 수락\n\n【오답 체크】\n(B) CloudFront → 정적 콘텐츠 캐싱용, 다중 리전 failover 아님\n(C) Transit Gateway — VPC 피어링 도구, 라우팅 목적 아님\n(D) ALB — 단일 리전 전용, 리전간 라우팅 불가\n\n【시험 포인트】\n다중 리전 액티브-액티브 → Route 53 헬스 체크 필수\nLambda+API Gateway 상태비저장 → 지역 선호도 영향 없음"
  },
  {
    "id": 448,
    "question": "회사에는 Management 및 Production 이라는 두 개의 VPC 가 있습니다. 관리 VPC 는 고객 게이트웨이를 통해 VPN 을 사용하여 데이터 센터의 단일 디바이스에 연결합니다. 프로덕션 VPC 는 2 개의 연결된 AWS Direct Connect 연결이 있는 가상 프라이빗 게이트웨이를 사용합니다. 관리 및 프로덕션 VPC 는 모두 단일 VPC 피어링 연결을 사용하여 애플리케이션 간의 통신을 허용합니다. 솔루션 아키텍트는 이 아키텍처에서 단일 실패 지점을 완화하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "관리 VPC와 프로덕션 VPC 사이에 VPN 세트를 추가하십시오.",
      "B": "두 번째 가상 프라이빗 게이트웨이를 추가하고 관리 VPC에 연결합니다.",
      "C": "두 번째 고객 게이트웨이 디바이스에서 관리 VPC에 두 번째 VPN 세트를 추가합니다.",
      "D": "관리 VPC와 프로덕션 VPC 간에 두 번째 VPC 피어링 연결을 추가합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 관리-프로덕션 VPC 이중 경로\n▸ 단일 실패 지점 → Management VPC VPN 일원화\n\n【정답 포인트】\n▸ 두 번째 고객 게이트웨이 디바이스 → 관리 VPC에 두 번째 VPN\n▸ VPN 중복화 → 게이트웨이 장애 대응\n\n【오답 체크】\n(A) VPN 세트만 → Production VPC의 Direct Connect 우위 미활용\n(B) VPG 2차 → 온프레미스 단일 디바이스 여전히 SPOF\n(D) 피어링 2차 — 온프레미스 연결 다중화 아님\n\n【시험 포인트】\n하이브리드 다중화 → 온프레미스 게이트웨이 이중화 핵심\nVPN vs Direct Connect — 용도별 비용 고려"
  },
  {
    "id": 449,
    "question": "회사는 Oracle 데이터베이스에서 애플리케이션을 실행합니다. 이 회사는 데이터베이스, 백업 관리 및 데이터 센터 유지 관리를 위한 제한된 리소스로 인해 AWS 로 신속하게 마이그레이션할 계획입니다. 응용 프로그램은 권한 있는 액세스가 필요한 타사 데이터베이스 기능을 사용합니다. 회사가 비용 효율적으로 데이터베이스를 AWS MOST 로 마이그레이션하는 데 도움이 되는 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터베이스를 Oracle 용 Amazon RDS 로 마이그레이션합니다. 타사 기능을 클라우드 서비스로 대체합니다.",
      "B": "데이터베이스를 Amazon RDS Custom for Oracle 로 마이그레이션합니다. 타사 기능을 지원하도록 데이터베이스 설정을 사용자 지정합니다.",
      "C": "데이터베이스를 Oracle 용 Amazon EC2 Amazon 머신 이미지(AMI)로 마이그레이션합니다. 타사 기능을 지원하도록 데이터베이스 설정을 사용자 지정합니다.",
      "D": "Oracle APEX 에 대한 종속성을 제거하도록 애플리케이션 코드를 다시 작성하여 PostgreSQL용 Amazon RDS로 데이터베이스를 마이그레이션합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Oracle 특수 권한 기능 → 타사 라이브러리\n▸ 빠른 마이그레이션 → 코드 수정 최소화\n\n【정답 포인트】\n▸ RDS Custom for Oracle → 제어 권한 제공\n▸ DB 설정 사용자 정의 가능 → 타사 기능 유지\n\n【오답 체크】\n(A) 표준 RDS → 권한 제한, 타사 기능 미지원\n(C) EC2 AMI → 전체 관리 부담, AWS 혜택 감소\n(D) PostgreSQL 마이그레이션 — 코드 재작성 필요, 빠른 마이그레이션 불가\n\n【시험 포인트】\nRDS Custom → 커스텀 권한 필요시 유일 선택\n라이선스 고려 — BYOL(Bring Your Own License) 지원"
  },
  {
    "id": 450,
    "question": "회사에는 단일 서버에 있는 3 계층 웹 응용 프로그램이 있습니다. 회사는 애플리케이션을 AWS 클라우드로 마이그레이션하려고 합니다. 또한 회사는 애플리케이션이 AWS Well-Architected 프레임워크와 일치하고 보안, 확장성 및 복원력에 대한 AWS 권장 모범 사례와 일치하기를 원합니다. 이러한 요구 사항을 충족하는 솔루션 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "애플리케이션의 기존 아키텍처를 사용하여 두 가용 영역에 걸쳐 VPC 를 생성합니다. EC2 Auto Scaling 그룹이 있는 각 가용 영역의 프라이빗 서브넷에 있는 Amazon EC2 인스턴스의 기존 아키텍처로 애플리케이션을 호스팅합니다. 보안 그룹 및 네트워크 액세스 제어 목록(네트워크 ACL)을 사용하여 EC2 인스턴스를 보호합니다.",
      "B": "보안 그룹 및 네트워크 액세스 제어 목록(네트워크 ACL)을 설정하여 데이터베이스 계층에 대한 액세스를 제어합니다. 프라이빗 서브넷에 단일 Amazon RDS 데이터베이스를 설정합니다.",
      "C": "두 가용 영역에 걸쳐 VPC 를 생성합니다. 웹 계층, 애플리케이션 계층 및 데이터베이스 계층을 호스팅하도록 애플리케이션을 리팩터링합니다. 웹 계층 및 애플리케이션 계층에 대한 Auto Scaling 그룹을 사용하여 자체 프라이빗 서브넷에서 각 계층을 호스팅합니다.",
      "D": "단일 Amazon RDS 데이터베이스를 사용합니다. 애플리케이션 계층 보안 그룹에서만 데이터베이스 액세스를 허용합니다.",
      "E": "웹 티어 앞에서 Elastic Load Balancer 를 사용합니다. 각 계층의 보안 그룹에 대한 참조를 포함하는 보안 그룹을 사용하여 액세스를 제어합니다. F. 프라이빗 서브넷에서 Amazon RDS 데이터베이스 다중 AZ 클러스터 배포를 사용합니다. 애플리케이션 계층 보안 그룹에서만 데이터베이스 액세스를 허용합니다."
    },
    "answer": "CE",
    "explanation": "【핵심 용어】\n▸ 3계층 애플리케이션 마이그레이션 — 아키텍처 리팩터링\n▸ Well-Architected — 다중 AZ, 보안, 확장성\n\n【정답 포인트】\n▸\n(C) 다중 AZ, 계층별 분리, Auto Scaling\n▸\n(E) ALB 프론트엔드, 보안 그룹 참조 기반 접근\n\n【오답 체크】\n(A) 기존 아키텍처 유지 — 확장성 제한\n(B) 단일 DB — RDS 다중 AZ 부재\n(D) 단일 DB — 고가용성 미충족\n(F) RDS 다중 AZ 클러스터 —\n(E) 와 중복\n\n【시험 포인트】\nWell-Architected → 보안 그룹 3계층 참조 설계\n다중 AZ + Auto Scaling → 기본 요구사항"
  },
  {
    "id": 451,
    "question": "회사에서 애플리케이션과 데이터베이스를 AWS 클라우드로 마이그레이션하고 있습니다. 이 회사는 Amazon Elastic Container Service(Amazon ECS), AWS Direct Connect 및 Amazon RDS를 사용합니다. 회사의 운영 팀에서 어떤 활동을 관리합니까? (3개 선택)",
    "options": {
      "A": "Amazon RDS 인프라 계층, 운영 체제 및 플랫폼 관리",
      "B": "Amazon RDS DB 인스턴스 생성 및 예약된 유지 관리 기간 구성",
      "C": "모니터링, 패치 관리, 로그 관리 및 호스트 침입 탐지를 위한 Amazon ECS 의 추가 소프트웨어 구성 요소 구성",
      "D": "Amazon RDS의 모든 마이너 및 메이저 데이터베이스 버전에 대한 패치 설치",
      "E": "데이터 센터에서 Amazon RDS 인프라의 물리적 보안 보장 F. Direct Connect를 통해 이동하는 데이터의 암호화"
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ ECS, RDS, Direct Connect 운영 책임\n▸ 공유 책임 모델 → AWS vs 고객 경계\n\n【정답 포인트】\n▸\n(B) RDS 인스턴스 생성, 유지 관리 기간 설정 ← 고객\n▸\n(C) ECS 에이전트 모니터링, 패치 관리 ← 고객\n\n【오답 체크】\n(A) 인프라 관리 ← AWS 책임\n(D) 메이저/마이너 패치 ← AWS 자동 관리\n(E) 물리적 보안 ← AWS 데이터센터 책임\n(F) Direct Connect 암호화 ← 고객 책임이지만 AWS 제공\n\n【시험 포인트】\nRDS → 인프라 제외 DB 설정 관리는 고객\nECS → 컨테이너 외부 에이전트는 고객 관리 대상"
  },
  {
    "id": 452,
    "question": "회사는 Amazon EC2 인스턴스에서 Java 기반 작업을 실행합니다. 작업은 매시간 실행되며 실행하는 데 10 초가 걸립니다. 작업은 예약된 간격으로 실행되며 1GB 의 메모리를 사용합니다. 작업이 사용 가능한 최대 CPU 를 사용하는 짧은 순간을 제외하고 인스턴스의 CPU 사용률은 낮습니다. 회사는 작업 실행 비용을 최적화하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS App2Container(A2C)를 사용하여 작업을 컨테이너화합니다. 0.5 vCPU(가상 CPU) 및 1GB 메모리를 사용하여 AWS Fargate에서 Amazon Elastic Container Service(Amazon ECS) 작업으로 작업을 실행합니다.",
      "B": "메모리가 1GB 인 AWS Lambda 함수에 코드를 복사합니다. Amazon EventBridge 예약 규칙을 생성하여 매시간 코드를 실행합니다.",
      "C": "AWS App2Container(A2C)를 사용하여 작업을 컨테이너화합니다. 기존 Amazon Machine Image(AMI)에 컨테이너를 설치합니다. 태스크가 완료되면 스케줄이 컨테이너를 중지하는지 확인하십시오.",
      "D": "작업 완료 시 EC2 인스턴스를 중지하고 다음 작업이 시작될 때 EC2 인스턴스를 다시 시작하도록 기존 일정을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 10초 시간 제한 작업 — 단시간 실행\n▸ 예약 실행 — 매시간 정기 작업\n\n【정답 포인트】\n▸ Lambda + 1GB 메모리 → 초단위 가격 정책\n▸ EventBridge 스케줄링 → cron 표현식 지원\n\n【오답 체크】\n(A) ECS Fargate — Lambda보다 비용 높음\n(C) 컨테이너 + AMI — 인스턴스 항상 온, 오버헤드\n(D) EC2 시작/중지 — 30초 부팅 시간 > 10초 작업\n\n【시험 포인트】\nLambda → 단시간 태스크에 최저 비용\nEventBridge → 전용 스케줄링 서비스"
  },
  {
    "id": 453,
    "question": "회사에서 Amazon EC2 데이터 및 여러 Amazon S3 버킷에 대한 백업 전략을 구현하려고 합니다. 규정 요구 사항으로 인해 회사는 특정 기간 동안 백업 파일을 보존해야 합니다. 회사는 보유기간 동안 파일을 변조해서는 안됩니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Backup을 사용하여 거버넌스 모드에서 볼트 잠금이 있는 백업 볼트를 생성합니다. 필요한 백업 계획을 생성합니다.",
      "B": "Amazon Data Lifecycle Manager를 사용하여 필요한 자동 스냅샷 정책을 생성합니다.",
      "C": "Amazon S3 파일 게이트웨이를 사용하여 백업을 생성합니다. 적절한 S3 수명 주기 관리를 구성합니다.",
      "D": "AWS Backup을 사용하여 규정 준수 모드에서 볼트 잠금이 있는 백업 볼트를 생성합니다. 필요한 백업 계획을 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 백업 보유 의무 — 법규 준수\n▸ 변조 방지 — WORM 메커니즘\n\n【정답 포인트】\n▸ AWS Backup 규정 준수 모드 → Vault Lock 활성화\n▸ 한 번 쓰고 읽기만 → 강제 적용\n\n【오답 체크】\n(A) 거버넌스 모드 — Bypass 권한 가능 (규정 위배)\n(B) Data Lifecycle Manager — 변조 방지 없음\n(C) File Gateway — WORM 보장 불완전\n\n【시험 포인트】\nVault Lock 규정 준수 → 관리자도 삭제 불가\n백업 정책 → 중앙화된 AWS Backup 사용"
  },
  {
    "id": 454,
    "question": "회사는 여러 AWS 리전 및 계정에 걸쳐 리소스를 보유하고 있습니다. 새로 고용된 솔루션 설계자는 이전 직원이 리소스 인벤토리에 대한 세부 정보를 제공하지 않은 것을 발견했습니다. 솔루션 설계자는 모든 계정에서 다양한 워크로드의 관계 세부 정보를 구축하고 매핑해야 합니다. 운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Systems Manager Inventory 를 사용하여 상세 보기 보고서에서 맵 보기를 생성합니다.",
      "B": "AWS Step Functions 를 사용하여 워크로드 세부 정보를 수집합니다. 워크로드의 아키텍처 다이어그램을 수동으로 작성합니다.",
      "C": "Workload Discovery on AWS를 사용하여 워크로드의 아키텍처 다이어그램을 생성합니다.",
      "D": "AWS X-Ray 를 사용하여 워크로드 세부 정보를 봅니다. 관계를 사용하여 아키텍처 다이어그램을 구축합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 다중 리전/계정 리소스 인벤토리\n▸ 관계 매핑 — 아키텍처 다이어그램\n\n【정답 포인트】\n▸ Workload Discovery on AWS → 자동 다이어그램 생성\n▸ 수동 문서화 시간 대폭 단축\n\n【오답 체크】\n(A) Systems Manager Inventory → 리스트 기반만, 관계 불가\n(B) Step Functions — 자동화 불가, 수동 다이어그램\n(D) X-Ray → 런타임 추적용, 정적 인벤토리 아님\n\n【시험 포인트】\nWorkload Discovery → 아키텍처 시각화 전용 도구\n다중 계정 지원 → AWS Organizations 통합"
  },
  {
    "id": 455,
    "question": "회사에서 AWS Organizations 를 사용합니다. 회사는 다른 예산으로 일부 AWS 계정을 운영하려고 합니다. 회사는 특정 기간 동안 할당된 예산 임계값에 도달하면 알림을 받고 AWS 계정에 추가 리소스 프로비저닝을 자동으로 방지하려고 합니다. 이러한 요구 사항을 충족하는 솔루션 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "AWS 예산을 사용하여 예산을 생성합니다. 필요한 AWS 계정의 비용 및 사용 보고서 섹션에서 예산 금액을 설정합니다.",
      "B": "AWS 예산을 사용하여 예산을 생성합니다. 필요한 AWS 계정의 결제 대시보드에서 예산 금액을 설정합니다.",
      "C": "필요한 권한으로 예산 작업을 실행하기 위해 AWS 예산에 대한 IAM 사용자를 생성합니다.",
      "D": "필요한 권한으로 예산 작업을 실행하기 위해 AWS 예산에 대한 IAM 역할을 생성합니다.",
      "E": "각 계정이 예산 임계값을 충족할 때 회사에 알리는 경고를 추가합니다. 추가 리소스의 프로비저닝을 방지하기 위해 적절한 구성 규칙으로 생성된 IAM 자격 증명을 선택하는 예산 작업을 추가합니다. F. 각 계정이 예산 임계값을 충족할 때 회사에 알리는 경고를 추가합니다. 추가 리소스의 프로비저닝을 방지하기 위해 적절한 SCP(서비스 제어 정책)로 생성된 IAM 자격 증명을 선택하는 예산 작업을 추가합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ AWS 예산 임계값 → 예산 초과 방지\n▸ 자동 프로비저닝 차단 → 액션 연계\n\n【정답 포인트】\n▸\n(B) AWS Budgets 결제 대시보드에서 설정\n▸\n(D) IAM 역할 → 예산 액션 실행\n\n【오답 체크】\n(A) 비용/사용 보고서 섹션 — 올바른 위치 아님\n(C) IAM 사용자 — 역할보다 권한 관리 어려움\n(E) SCP — 비용 기반 제어 불가(액션-기반 정책)\n(F) SCP 권장 — 예산액션은 IAM 역할 사용\n\n【시험 포인트】\n결제 대시보드 → 예산 설정 올바른 위치\nSCP vs IAM 역할 — 예산은 IAM 역할 전용"
  },
  {
    "id": 456,
    "question": "한 회사가 한 AWS 리전의 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 회사는 EC2 인스턴스를 두 번째 리전에 백업하려고 합니다. 또한 회사는 두 번째 리전에서 EC2 리소스를 프로비저닝하고 하나의 AWS 계정에서 중앙에서 EC2 인스턴스를 관리하기를 원합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "두 번째 지역에 비슷한 수의 EC2 인스턴스가 있는 재해 복구(DR) 계획을 만듭니다. 데이터 복제를 구성합니다.",
      "B": "EC2 인스턴스의 특정 시점 Amazon Elastic Block Store(Amazon EBS) 스냅샷을 생성합니다. 주기적으로 스냅샷을 두 번째 리전에 복사합니다.",
      "C": "AWS Backup을 사용하여 백업 계획을 생성합니다. EC2 인스턴스의 두 번째 리전에 대한 교차 리전 백업을 구성합니다.",
      "D": "두 번째 리전에 비슷한 수의 EC2 인스턴스를 배포합니다. AWS DataSync 를 사용하여 원본 리전에서 두 번째 리전으로 데이터를 전송합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 리전간 EC2 백업 → 재해 복구\n▸ 중앙 관리 → 단일 계정 운영\n\n【정답 포인트】\n▸ AWS Backup 교차 리전 백업\n▸ 중앙 AWS 계정에서 관리 — 비용 효율적\n\n【오답 체크】\n(A) DR 계획만 — 백업 메커니즘 불명확\n(B) 주기적 스냅샷 복사 — 수동 관리 필요\n(D) 유사 인스턴스 배포 — 지속적 비용, 스탠바이 리소스 낭비\n\n【시험 포인트】\nAWS Backup → 통합 백업 관리 서비스\n교차 리전 → 단일 백업 정책으로 자동화"
  },
  {
    "id": 457,
    "question": "AWS 를 사용하는 회사는 제품 제조업체에 데이터를 전송하는 애플리케이션을 구축하고 있습니다. 회사에는 자체 ID 공급자(IdP)가 있습니다. 회사는 사용자가 애플리케이션을 사용하여 데이터를 전송하는 동안 IdP 가 애플리케이션 사용자를 인증하기를 원합니다. 회사는 AS2(Applicability Statement 2) 프로토콜을 사용해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS DataSync 를 사용하여 데이터를 전송하십시오. IdP 인증을 위한 AWS Lambda 함수를 생성합니다.",
      "B": "Amazon AppFlow 흐름을 사용하여 데이터를 전송합니다. IdP 인증을 위한 Amazon Elastic Container Service(Amazon ECS) 작업을 생성합니다.",
      "C": "AWS Transfer Family를 사용하여 데이터를 전송합니다. IdP 인증을 위한 AWS Lambda 함수를 생성합니다.",
      "D": "AWS Storage Gateway 를 사용하여 데이터를 전송합니다. IdP 인증을 위한 Amazon Cognito 자격 증명 풀을 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Transfer Family — AS2, SFTP, FTP 등 표준 프로토콜 지원하는 관리형 파일 전송 서비스\n▸ AS2 프로토콜 — B2B 데이터 교환 표준, 디지털 서명과 암호화 필수\n\n【정답 포인트】\n▸ AS2 + 파일 전송 → Transfer Family가 유일한 선택지 (DataSync, AppFlow, Storage Gateway는 AS2 미지원)\n▸ IdP 인증 → Lambda로 커스텀 인증 로직 구현, SFTP 사용자 정의 신원 공급자 연동\n\n【오답 체크】\n(A) DataSync — S3/EFS 동기화용, AS2 미지원\n(B) AppFlow — SaaS 통합 플로우, B2B 파일 전송 미지원\n(D) Storage Gateway — 온프레미스 캐싱, AS2 프로토콜 미지원\n\n【시험 포인트】\n표준 파일 전송 프로토콜 요구사항 → Transfer Family 즉시 식별\nIdP 통합 = Lambda 커스텀 인증 가능"
  },
  {
    "id": 458,
    "question": "솔루션 설계자는 현금 회수 서비스를 위해 Amazon API Gateway에서 RESTAPI를 설계하고 있습니다. 응용 프로그램에는 컴퓨팅 리소스를 위해 1GB 의 메모리와 2GB 의 스토리지가 필요합니다. 애플리케이션은 데이터가 관계형 형식이어야 합니다. 최소한의 관리 노력으로 이러한 요구 사항을 충족하는 추가 AWS 서비스 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Amazon EC2",
      "B": "AWS Lambda",
      "C": "Amazon RDS",
      "D": "Amazon DynamoDB",
      "E": "Amazon Elastic Kubernetes Services (Amazon EKS)"
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ AWS Lambda — 최대 10GB 메모리, 15분 실행, 최소 관리 서버리스\n▸ Amazon RDS — 관계형 데이터베이스, 자동 백업/패치, 완전 관리형\n\n【정답 포인트】\n▸ 1GB 메모리 + REST API → Lambda (최소 관리, 스케일링 자동)\n▸ 관계형 데이터 필요 → RDS (DynamoDB는 NoSQL, 요구사항 불만족)\n▸ 최소 관리 → Lambda+RDS는 완전 관리형 조합\n\n【오답 체크】\n(A) EC2 — 인스턴스 관리 필요 (최소 관리 정책 위반)\n(D) DynamoDB — NoSQL, 관계형 요구사항 미충족\n(E) EKS — 쿠버네티스 관리 오버헤드 발생\n\n【시험 포인트】\n'최소 관리' 키워드 → 완전 관리형 서비스 우선 (Lambda+RDS)\n관계형 데이터 + NoSQL 선택지 → 관계형 우선\nEC2는 항상 관리 부담 증가"
  },
  {
    "id": 459,
    "question": "회사는 AWS Organizations 를 사용하여 여러 AWS 계정 내에서 워크로드를 실행합니다. 태깅 정책은 회사에서 태그를 생성할 때 부서 태그를 AWS 리소스에 추가합니다. 회계 팀은 Amazon EC2 소비에 대한 지출을 결정해야 합니다. 회계팀은 AWS 계정과 관계없이 비용을 담당하는 부서를 결정해야 합니다. 회계 팀은 조직 내 모든 AWS 계정에 대해 AWS Cost Explorer에 액세스할 수 있으며 Cost Explorer의 모든 보고서에 액세스해야 합니다. 운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "조직 관리 계정 청구 콘솔에서 부서라는 사용자 정의 비용 할당 태그를 활성화합니다. 비용 탐색기에서 태그 이름별로 그룹화하여 하나의 비용 보고서를 생성하고 EC2 별로 필터링합니다.",
      "B": "Organizations 마스터 계정 결제 콘솔에서 부서라는 AWS 정의 비용 할당 태그를 활성화합니다. 비용 탐색기에서 태그 이름별로 그룹화하여 하나의 비용 보고서를 생성하고 EC2별로 필터링합니다.",
      "C": "조직 회원 계정 청구 콘솔에서 부서라는 사용자 정의 비용 할당 태그를 활성화합니다. 비용 탐색기에서 태그 이름별로 그룹화하여 하나의 비용 보고서를 생성하고 EC2 별로 필터링합니다.",
      "D": "Organizations 회원 계정 결제 콘솔에서 부서라는 AWS 정의 비용 할당 태그를 활성화합니다. 비용 탐색기에서 태그 이름별로 그룹화하여 하나의 비용 보고서를 생성하고 EC2별로 필터링합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 사용자 정의 태그 — 조직이 정의한 태그 (관리 계정에서만 활성화)\n▸ 조직 관리 계정 — 다중 계정 비용 통합 보기 권한\n▸ Cost Explorer — 태그별 필터링 & 그룹화 가능\n\n【정답 포인트】\n▸ 비용 할당 태그는 조직 '관리' 계정에서만 활성화 가능 (회원 X)\n▸ '부서' 사용자 정의 태그 → 모든 계정에 적용되려면 관리 계정에서 활성화\n▸ Cost Explorer에서 태그별 그룹화 + EC2 필터 = 부서별 EC2 비용 추적\n\n【오답 체크】\n(B) AWS 정의 태그 — 미리 정의된 태그 (사용자 정의 '부서' 태그 아님)\n(C) \n(D) 회원 계정 — 개별 계정 비용만 관리, 조직 전체 통합 불가\n\n【시험 포인트】\nOrganizations + 비용 할당 = 관리 계정 콘솔\n태그 활성화 위치 = Organizations 콘솔 아닌 '청구 콘솔'\n모든 계정 비용 통합 → 관리 계정 권한 필수"
  },
  {
    "id": 460,
    "question": "회사는 SaaS(Software as a Service) 애플리케이션 Salesforce 계정과 Amazon S3 간에 데이터를 안전하게 교환하려고 합니다. 회사는 AWS Key Management Service(AWS KMS) 고객 관리형 키(CMK)를 사용하여 저장된 데이터를 암호화해야 합니다. 또한 회사는 전송 중인 데이터를 암호화해야 합니다. 회사에서 Salesforce 계정에 대한 API 액세스를 활성화했습니다.",
    "options": {
      "A": "Salesforce 에서 Amazon S3 로 안전하게 데이터를 전송하는 AWS Lambda 함수를 생성합니다.",
      "B": "AWS Step Functions 워크플로를 생성합니다. Salesforce 에서 Amazon S3 로 안전하게 데이터를 전송하는 작업을 정의합니다.",
      "C": "Amazon AppFlow 흐름을 생성하여 Salesforce 에서 Amazon S3 로 데이터를 안전하게 전송합니다.",
      "D": "Salesforce 용 사용자 지정 커넥터를 만들어 Salesforce 에서 Amazon S3 로 데이터를 안전하게 전송합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon AppFlow — SaaS 통합 플로우, KMS 암호화 기본 지원\n▸ 전송 중 암호화 — TLS/SSL (AppFlow 자동)\n▸ 저장된 데이터 — KMS CMK 암호화 설정 가능\n\n【정답 포인트】\n▸ Salesforce-S3 통합 → AppFlow가 기본 제공 (API 연결 자동)\n▸ KMS CMK 암호화 → AppFlow 설정에서 직접 지원\n▸ 전송 중 암호화 → AppFlow TLS 기본 제공\n▸ 사전 API 활성화 → Lambda/Step Functions은 수동 코딩 필요\n\n【오답 체크】\n(A) Lambda — Salesforce API 호출 & KMS 암호화 코드 작성 필요 (복잡도 높음)\n(B) Step Functions — 워크플로만 정의, 실제 암호화는 Lambda에서 구현 필요\n(D) 사용자 정의 커넥터 — AppFlow의 기본 Salesforce 커넥터 있음\n\n【시험 포인트】\nSaaS + AWS 데이터 통합 → AppFlow 즉시 고려\nKMS 암호화 + TLS = AppFlow 기본 기능\nAPI 프리매티브 서비스는 수동 암호화 구현 필요"
  },
  {
    "id": 461,
    "question": "회사가 단일 AWS 리전에서 모바일 게임 앱을 개발하고 있습니다. 앱은 Auto Scaling 그룹의 여러 Amazon EC2 인스턴스에서 실행됩니다. 회사는 앱 데이터를 Amazon DynamoDB 에 저장합니다. 앱은 사용자와 서버 간에 TCP 트래픽과 UDP 트래픽을 사용하여 통신합니다. 응용 프로그램은 전 세계적으로 사용됩니다. 회사는 모든 사용자에게 가능한 가장 낮은 대기 시간을 보장하고자 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Global Accelerator 를 사용하여 가속기를 생성합니다. Global Accelerator 통합을 사용하고 TCP 및 UDP 포트에서 수신 대기하는 가속기 엔드포인트 뒤에 Application Load Balancer(ALB)를 생성합니다. Auto Scaling 그룹을 업데이트하여 ALB 에 인스턴스를 등록합니다.",
      "B": "AWS Global Accelerator 를 사용하여 가속기를 생성합니다. Global Accelerator 통합을 사용하고 TCP 및 UDP 포트에서 수신 대기하는 가속기 엔드포인트 뒤에 NLB(Network Load Balancer)를 생성합니다. Auto Scaling 그룹을 업데이트하여 NLB 에 인스턴스를 등록합니다.",
      "C": "Amazon CloudFront 콘텐츠 전송 네트워크(CDN) 엔드포인트를 생성합니다. 엔드포인트 뒤에 NLB(Network Load Balancer)를 생성하고 TCP 및 UDP 포트에서 수신 대기합니다. Auto Scaling 그룹을 업데이트하여 NLB 에 인스턴스를 등록합니다. NLB 를 오리진으로 사용하도록 CloudFront를 업데이트합니다.",
      "D": "Amazon CloudFront 콘텐츠 전송 네트워크(CDN) 엔드포인트를 생성합니다. 엔드포인트 뒤에 Application Load Balancer(ALB)를 생성하고 TCP 및 UDP 포트에서 수신 대기합니다. Auto Scaling 그룹을 업데이트하여 ALB 에 인스턴스를 등록합니다. ALB 를 오리진으로 사용하도록 CloudFront를 업데이트합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Global Accelerator — UDP/TCP 지원, 글로벌 낮은 지연 시간\n▸ NLB — UDP 프로토콜 지원, 초저지연 L4 로드 밸런싱\n▸ CloudFront — HTTP/HTTPS CDN, UDP 미지원 (게임 프로토콜 부적합)\n\n【정답 포인트】\n▸ TCP + UDP 동시 요구 → Global Accelerator (CloudFront는 HTTP/HTTPS만)\n▸ UDP 트래픽 처리 → NLB만 지원 (ALB는 L7, UDP 미지원)\n▸ 글로벌 저지연 → Global Accelerator의 에니캐스트 및 엣지 로케이션 활용\n\n【오답 체크】\n(A) ALB + UDP → ALB는 L7 (HTTP/HTTPS), UDP 미지원\n(C) \n(D) CloudFront — 콘텐츠 배포 전용, 게임 UDP 트래픽 미지원\n(D) 추가로 ALB는 UDP 미지원\n\n【시험 포인트】\nUDP + TCP = Global Accelerator 또는 NLB 우선 고려\nCDN(CloudFront)은 HTTP/HTTPS 콘텐츠만 가능\n로드 밸런서 선택: ALB(L7)→HTTP, NLB(L4)→UDP/TCP\n글로벌 지연시간 → Global Accelerator 에니캐스트"
  },
  {
    "id": 462,
    "question": "회사에 고객 주문을 처리하는 애플리케이션이 있습니다. 회사는 주문을 Amazon Aurora 데이터베이스에 저장하는 Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. 때때로 트래픽이 높을 때 워크로드가 주문을 충분히 빠르게 처리하지 못합니다. 가능한 한 빨리 데이터베이스에 주문을 안정적으로 기록하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": {
      "A": "트래픽이 많을 때 EC2 인스턴스의 인스턴스 크기를 늘립니다. Amazon Simple Notification Service(Amazon SNS)에 주문을 작성합니다. SNS 주제에 데이터베이스 엔드포인트를 구독합니다.",
      "B": "Amazon Simple Queue Service(Amazon SQS) 대기열에 주문을 씁니다. Application Load Balancer 뒤의 Auto Scaling 그룹에서 EC2 인스턴스를 사용하여 SQS 대기열에서 읽고 주문을 데이터베이스로 처리합니다.",
      "C": "Amazon Simple Notification Service(Amazon SNS)에 주문을 작성합니다. SNS 주제에 데이터베이스 엔드포인트를 구독합니다. Application Load Balancer 뒤의 Auto Scaling 그룹에서 EC2 인스턴스를 사용하여 SNS 주제에서 읽습니다.",
      "D": "EC2 인스턴스가 CPU 임계값 제한에 도달하면 Amazon Simple Queue Service(Amazon SQS) 대기열에 주문을 씁니다. Application Load Balancer 뒤의 Auto Scaling 그룹에서 EC2 인스턴스의 예약된 조정을 사용하여 SQS 대기열에서 읽고 데이터베이스로 주문을 처리합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SQS — 메시지 큐, 비동기 처리, 느슨한 결합\n▸ SNS — 발행/구독 (푸시), 메시지 손실 가능성\n▸ 버스팅 패턴 — 트래픽 급증 시 큐에 쌓여 순차 처리\n\n【정답 포인트】\n▸ 높은 트래픽 시 주문 손실 방지 → SQS (지속성 보장)\n▸ Auto Scaling으로 워커 자동 증가 → 큐 길이 메트릭으로 트리거\n▸ 비동기 처리 → 데이터베이스 쓰기 압력 분산\n▸ ALB + Auto Scaling = 동적 확장성\n\n【오답 체크】\n(A) SNS 구독에 DB 엔드포인트 — SNS는 메시지 푸시, DB 엔드포인트 구독 불가\n(C) SNS 메시지 손실 가능 (fan-out 아님), 데이터 신뢰성 문제\n(D) 예약된 조정 — 트래픽 패턴 미리 예측 필요, 즉시 대응 불가\n\n【시험 포인트】\n'안정적으로 기록' = 메시지 손실 방지 → SQS 필수\nAuto Scaling + 큐 = 부하 변동성 대응\nSNS는 알림/브로드캐스트, SQS는 업무 큐 처리"
  },
  {
    "id": 463,
    "question": "IoT 회사는 사용자의 수면에 대한 데이터를 수집하는 센서가 있는 매트리스를 출시하고 있습니다. 센서는 데이터를 Amazon S3 버킷으로 보냅니다. 센서는 각 매트리스에 대해 매일 밤 약 2MB 의 데이터를 수집합니다. 회사는 각 매트리스에 대한 데이터를 처리하고 요약해야 합니다. 결과는 가능한 한 빨리 제공되어야 합니다. 데이터 처리에는 1GB 의 메모리가 필요하며 30초 이내에 완료됩니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Scala 작업에 AWS Glue 사용",
      "B": "Apache Spark 스크립트와 함께 Amazon EMR 사용",
      "C": "Python 스크립트와 함께 AWS Lambda 사용",
      "D": "PySpark 작업과 함께 AWS Glue 사용"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Lambda — 최대 10GB 메모리, 최대 15분 실행, 초단위 과금\n▸ Glue/EMR — 분단위 최소 과금, Spark 오버헤드\n▸ S3 트리거 → 객체 업로드 시 즉시 처리\n\n【정답 포인트】\n▸ 2MB 데이터 + 1GB 메모리 + 30초 내 완료 → Lambda 최적 (작은 워크로드)\n▸ 매일 밤 간헐적 처리 → 항상 켜진 클러스터 불필요\n▸ 비용 효율 → Lambda 초단위 과금 < Glue/EMR 분단위\n▸ S3 이벤트 트리거 → Lambda 자동 호출 간편\n\n【오답 체크】\n(A) \n(D) Glue — 최소 실행 시간 1분 + 클러스터 비용 (과도)\n(B) EMR — 클러스터 시작 오버헤드 (5~10분), 소규모 작업 부적합\n\n【시험 포인트】\n'가능한 한 빨리' + '비용 효율' = Lambda 고려\n2MB 소규모 데이터 = 대규모 클러스터 불필요\nS3 트리거 패턴 = Lambda 네이티브 통합\nGlue/EMR은 대용량 배치 처리 전문"
  },
  {
    "id": 464,
    "question": "회사는 PostgreSQL 단일 AZ DB 인스턴스용 Amazon RDS에 모든 주문을 저장하는 온라인 쇼핑 애플리케이션을 호스팅합니다. 경영진은 단일 실패 지점을 제거하기를 원하며 솔루션 설계자에게 애플리케이션 코드를 변경하지 않고도 데이터베이스 다운타임을 최소화할 수 있는 접근 방식을 권장하도록 요청했습니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "데이터베이스 인스턴스를 수정하고 다중 AZ 옵션을 지정하여 기존 데이터베이스 인스턴스를 다중 AZ 배포로 변환합니다.",
      "B": "새로운 RDS 다중 AZ 배포를 생성합니다. 현재 RDS 인스턴스의 스냅샷을 만들고 스냅샷으로 새 다중 AZ 배포를 복원합니다.",
      "C": "다른 가용 영역에서 PostgreSQL 데이터베이스의 읽기 전용 복제본을 생성합니다. Amazon Route 53 가중 레코드 세트를 사용하여 데이터베이스 전체에 요청을 분산합니다.",
      "D": "최소 그룹 크기가 2 인 Amazon EC2 Auto Scaling 그룹에 RDS for PostgreSQL 데이터베이스를 배치합니다. Amazon Route 53 가중 레코드 세트를 사용하여 인스턴스 간에 요청을 분산합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RDS 다중 AZ — 동기 복제, 자동 페일오버 (다운타임 ~1분)\n▸ 'Modify' 작업 — 기존 인스턴스 유지, 인스턴스 엔드포인트 유지\n▸ 애플리케이션 코드 변경 없음 — 연결 문자열 유지\n\n【정답 포인트】\n▸ 단일 실패 지점 제거 = AZ 장애 대비 → 다중 AZ 필수\n▸ 코드 변경 없음 → 다중 AZ 페일오버는 투명 (RDS가 DNS 처리)\n▸ 최소 다운타임 → Modify 작업 (스냅샷 + 복원보다 빠름)\n▸ 현재 데이터 유지 → Modify는 기존 데이터 보존\n\n【오답 체크】\n(B) 스냅샷 복원 — 새 인스턴스 생성, 엔드포인트 변경 필요 (코드 변경)\n(C) 읽기 복제본 — 쓰기 여전히 단일 AZ, Route 53 수동 관리 필요\n(D) EC2 Auto Scaling — RDS는 EC2가 아님, 부적절한 솔루션\n\n【시험 포인트】\n'코드 변경 없음' = 다중 AZ 페일오버만 가능\nModify (기존 유지) vs 신규 생성 (재설정 필요)\n읽기 복제본은 고가용성 아님 (쓰기 단일 실패 지점 유지)"
  },
  {
    "id": 465,
    "question": "회사에서 고객 요구를 지원하기 위해 애플리케이션을 개발하고 있습니다. 회사는 동일한 가용 영역 내의 여러 Amazon EC2 Nitro 기반 인스턴스에 애플리케이션을 배포하려고 합니다. 또한 이 회사는 더 높은 애플리케이션 가용성을 달성하기 위해 여러 EC2 Nitro 기반 인스턴스의 여러 블록 스토리지 볼륨에 동시에 쓸 수 있는 기능을 애플리케이션에 제공하고자 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic Block Store(Amazon EBS) 다중 연결에 범용 SSD(gp3) EBS 볼륨 사용",
      "B": "Amazon Elastic Block Store(Amazon EBS) 다중 연결과 함께 처리량 최적화 HDD(st1) EBS 볼륨 사용",
      "C": "Amazon Elastic Block Store(Amazon EBS) 다중 연결과 함께 프로비저닝된 IOPS SSD(io2) EBS 볼륨 사용",
      "D": "Amazon Elastic Block Store(Amazon EBS) 다중 연결에 범용 SSD(gp2) EBS 볼륨 사용"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ EBS 다중 연결 — io2, io1만 지원 (gp3, gp2 미지원)\n▸ Nitro 인스턴스 — EC2 Nitro 시스템만 다중 연결 가능\n▸ io2 — 높은 IOPS, 일관된 성능, 다중 연결 최적\n\n【정답 포인트】\n▸ 다중 인스턴스 동시 쓰기 → EBS 다중 연결 필수\n▸ EBS 다중 연결 지원 = io2/io1만 가능 (gp3/gp2 X)\n▸ Nitro 기반 + 높은 가용성 → io2가 성능 최적\n▸ 데이터 안정성 → io2의 높은 내구성\n\n【오답 체크】\n(A) gp3 — 다중 연결 미지원\n(B) st1 (처리량 최적화) — HDD, IOPS 낮음, 다중 연결 미지원\n(D) gp2 — 다중 연결 미지원, gp3/gp4로 대체됨\n\n【시험 포인트】\n'다중 연결' 키워드 → io1 또는 io2만 선택\nNitro 기반 → 다중 연결 기술 지원 확인\n가용성 + 다중 쓰기 = io2 (고성능)\nEBS 볼륨 유형 선택: 다중 연결 조건 우선"
  },
  {
    "id": 466,
    "question": "한 회사에서 단일 가용 영역과 Amazon RDS 다중 AZ DB 인스턴스에서 Amazon EC2 를 사용하는 상태 비저장 2 계층 애플리케이션을 설계했습니다. 새로운 회사 경영진은 애플리케이션의 가용성을 높이려고 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "다중 AZ EC2 Auto Scaling 을 사용하도록 애플리케이션을 구성하고 Application Load Balancer를 생성합니다.",
      "B": "EC2 인스턴스의 스냅샷을 찍어 다른 AWS 리전으로 보내도록 애플리케이션을 구성합니다.",
      "C": "Amazon Route 53 대기 시간 기반 라우팅을 사용하여 애플리케이션에 요청을 제공하도록 애플리케이션을 구성합니다.",
      "D": "들어오는 요청을 처리하고 다중 AZ 애플리케이션 로드 밸런서를 생성하도록 Amazon Route 53 규칙을 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 상태 비저장 애플리케이션 — 세션 상태 없음, 어느 인스턴스도 처리 가능\n▸ 다중 AZ Auto Scaling — 여러 AZ에서 인스턴스 자동 확장\n▸ ALB — 요청 분산, AZ 간 로드 밸런싱\n\n【정답 포인트】\n▸ 현재 문제: EC2 단일 AZ (단일 실패 지점) → 다중 AZ 확산 필수\n▸ 상태 비저장 = Auto Scaling으로 여러 AZ에 배포 가능\n▸ ALB + Auto Scaling = AZ 장애 시 자동 페일오버\n▸ RDS는 이미 다중 AZ (DB 가용성 충분)\n\n【오답 체크】\n(B) 스냅샷 + 리전 복제 — 리전 간 재해 복구, 즉각적 가용성 향상 아님\n(C) Route 53 지연시간 라우팅 — 다중 리전 설정 필요, 단일 리전 내 AZ 가용성 미해결\n(D) Route 53 규칙 → ALB가 이미 로드 밸런싱 담당\n\n【시험 포인트】\n상태 비저장 + 단일 AZ = Auto Scaling으로 다중 AZ 확산\nALB는 단일 리전 내 로드 밸런싱\nRoute 53은 리전 간 라우팅, AZ 내 분산 아님\n인시던트 대응: EC2 AZ 장애 → Auto Scaling이 다른 AZ에서 자동 시작"
  },
  {
    "id": 467,
    "question": "회사에서 AWS Organizations 를 사용합니다. 멤버 계정이 Compute Savings Plan 을 구입했습니다. 멤버 계정 내부의 워크로드 변경으로 인해 해당 계정은 더 이상 Compute Savings Plan 약정의 전체 혜택을 받지 못합니다. 이 회사는 구매한 컴퓨팅 성능의 50% 미만을 사용합니다.",
    "options": {
      "A": "Compute Savings Plan 을 구매한 멤버 계정의 계정 콘솔에 있는 청구 기본 설정 섹션에서 할인 공유를 켭니다.",
      "B": "회사의 조직 관리 계정에 있는 계정 콘솔의 청구 기본 설정 섹션에서 할인 공유를 켭니다.",
      "C": "다른 AWS 계정에서 Compute Savings Plan 이 있는 계정으로 추가 컴퓨팅 워크로드를 마이그레이션합니다.",
      "D": "예약 인스턴스 마켓플레이스에서 초과된 Savings Plan 약정을 판매합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Savings Plan 할인 공유 — 조직 관리 계정에서 활성화\n▸ 조직 수준 — 할인을 여러 멤버 계정에 분산\n▸ 멤버 계정 설정 — 개별 계정 할인만 제어\n\n【정답 포인트】\n▸ 조직 내 Savings Plan 공유 → 관리 계정 '청구 기본 설정'에서만 활성화\n▸ 할인 공유 활성화 후 → 미사용 할인이 다른 멤버 계정에 자동 적용\n▸ 멤버 계정 설정 × → 개별 계정은 자신의 할인만 제어\n▸ 결과: 미사용 50% → 다른 계정의 컴퓨팅 비용에 적용\n\n【오답 체크】\n(A) 멤버 계정 설정 — 조직 수준 할인 공유 불가\n(C) 워크로드 마이그레이션 — 시간 소모, 할인 공유보다 비효율\n(D) RI 마켓플레이스 — Savings Plan은 마켓플레이스에서 판매 불가\n\n【시험 포인트】\nOrganizations 할인 공유 = 관리 계정에서만 활성화\nSavings Plan은 RI 마켓플레이스에서 판매 불가\n할인 공유 후 → 자동 적용, 추가 관리 불필요\n멤버 계정은 개별 할인만 모니터링"
  },
  {
    "id": 468,
    "question": "회사에서 고객을 위한 검색 카탈로그를 제공할 마이크로서비스 애플리케이션을 개발하고 있습니다. 회사는 REST API를 사용하여 애플리케이션의 프런트엔드를 사용자에게 제시해야 합니다. REST API 는 회사가 프라이빗 VPC 서브넷의 컨테이너에서 호스팅하는 백엔드 서비스에 액세스해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon API Gateway 를 사용하여 WebSocket API 를 설계합니다. 프라이빗 서브넷의 Amazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. Amazon ECS에 액세스하기 위해 API Gateway용 프라이빗 VPC 링크를 생성합니다.",
      "B": "Amazon API Gateway를 사용하여 REST API를 설계합니다. 프라이빗 서브넷의 Amazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. Amazon ECS에 액세스하기 위해 API Gateway용 프라이빗 VPC 링크를 생성합니다.",
      "C": "Amazon API Gateway 를 사용하여 WebSocket API 를 설계합니다. 프라이빗 서브넷의 Amazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. Amazon ECS에 액세스하기 위해 API Gateway에 대한 보안 그룹을 생성합니다.",
      "D": "Amazon API Gateway를 사용하여 REST API를 설계합니다. 프라이빗 서브넷의 Amazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 호스팅합니다. Amazon ECS에 액세스하기 위해 API Gateway에 대한 보안 그룹을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ REST API — 구조화된 리소스 기반 API (WebSocket은 양방향 연결)\n▸ VPC 링크 — API Gateway에서 프라이빗 ECS로 보안 연결\n▸ 프라이빗 서브넷 — 인터넷 노출 X, VPC 링크로만 접근 가능\n\n【정답 포인트】\n▸ 'REST API' 명시 → WebSocket 아님 (검색 카탈로그는 요청-응답 패턴)\n▸ 프라이빗 ECS 접근 → VPC 링크 필수 (보안, 프라이빗 유지)\n▸ VPC 링크 → API Gateway와 ECS 간 인터넷 우회\n▸ 보안 그룹만으로는 부족 (API Gateway는 VPC 외부, 프라이빗 접근 불가)\n\n【오답 체크】\n(A) WebSocket — 양방향 실시간 통신, 검색 카탈로그 불필요\n(C) 보안 그룹만 사용 — API Gateway는 퍼블릭 서비스, SG만으로는 프라이빗 접근 불가\n(D) 보안 그룹만 사용 + WebSocket 아님 (REST 맞음)\n\n【시험 포인트】\nREST API vs WebSocket = 요청 응답 vs 양방향 통신\nAPI Gateway + 프라이빗 백엔드 = VPC 링크 필수\nVPC 링크 > 보안 그룹만으로는 프라이빗 서브넷 접근 불가\n마이크로서비스 아키텍처 = VPC 링크로 보안 통신"
  },
  {
    "id": 469,
    "question": "회사는 수집된 원시 데이터를 Amazon S3 버킷에 저장합니다. 이 데이터는 회사 고객을 대신하여 여러 유형의 분석에 사용됩니다. 요청된 분석 유형에 따라 S3 객체에 대한 액세스 패턴이 결정됩니다. 회사는 접속 패턴을 예측하거나 통제할 수 없습니다. 회사는 S3 비용을 줄이고자 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 복제를 사용하여 자주 액세스하지 않는 개체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다.",
      "B": "S3 수명 주기 규칙을 사용하여 객체를 S3 Standard에서 Standard-Infrequent Access로 전환(S3 Standard-IA)",
      "C": "S3 수명 주기 규칙을 사용하여 객체를 S3 Standard에서 S3 Intelligent-Tiering으로 전환",
      "D": "S3 Inventory를 사용하여 S3 Standard에서 S3 Intelligent-Tiering으로 액세스하지 않은 객체를 식별하고 전환"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Intelligent-Tiering — 액세스 패턴 자동 감지, 자동 티어 전환\n▸ 예측 불가능한 패턴 → Intelligent-Tiering 최적\n▸ 수명 주기 규칙 — 정책 기반 자동 전환\n\n【정답 포인트】\n▸ '접속 패턴 예측 불가' 핵심 → 규칙 기반(Standard-IA) 부적합\n▸ Intelligent-Tiering → 자동으로 액세스 추적, 최적 티어 선택\n▸ 비용 절감 → 자동 다운그레이드 (Frequent → Infrequent → Archive)\n▸ 수명 주기 규칙 필수 → Standard → Intelligent-Tiering 초기 전환\n\n【오답 체크】\n(A) S3 복제 — 다른 리전 복제, 비용 증가 (해결책 아님)\n(B) Standard-IA — 고정 규칙, 불규칙한 접근 패턴에 대응 불가 (예: 자주 접근하는 날 높은 요금)\n(D) Inventory — 식별 도구일 뿐, 자동 전환 아님 (수동 작업 필요)\n\n【시험 포인트】\n'예측 불가능한 패턴' = Intelligent-Tiering 즉시 고려\n규칙 기반 티어링 (IA) = 액세스 패턴 알 때 (이 경우 X)\nIntelligent-Tiering은 자동 스캔 & 전환\nS3 복제는 비용 감소 솔루션 아님"
  },
  {
    "id": 470,
    "question": "한 회사에 IPv6 주소를 사용하여 Amazon EC2 인스턴스에서 호스팅되는 애플리케이션이 있습니다. 애플리케이션은 인터넷을 사용하여 다른 외부 애플리케이션과의 통신을 시작해야 합니다. 그러나 회사의 보안 정책에 따르면 외부 서비스는 EC2 인스턴스에 대한 연결을 시작할 수 없습니다. 솔루션 설계자는 이 문제를 해결하기 위해 무엇을 권장해야 합니까?",
    "options": {
      "A": "NAT 게이트웨이를 생성하고 이를 서브넷 라우팅 테이블의 대상으로 만듭니다.",
      "B": "인터넷 게이트웨이를 만들고 이를 서브넷의 라우팅 테이블 대상으로 만듭니다.",
      "C": "가상 프라이빗 게이트웨이를 만들고 이를 서브넷의 라우팅 테이블 대상으로 만듭니다.",
      "D": "외부 전용 인터넷 게이트웨이를 만들고 이를 서브넷 라우팅 테이블의 대상으로 만듭니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Egress Only Internet Gateway (EOIGW) — IPv6 전용, 아웃바운드만 허용\n▸ NAT Gateway — IPv4 전용, 애플리케이션이 IPv6 사용\n▸ 인터넷 게이트웨이 — 양방향 (인바운드 허용, 보안 정책 위반)\n\n【정답 포인트】\n▸ IPv6 + 아웃바운드만 → EOIGW 필수 (NAT는 IPv4만)\n▸ 보안 정책: 외부 → EC2 연결 금지 → 인바운드 차단\n▸ EOIGW = IPv6 주소 유지하며 아웃바운드만 허용\n▸ 상태 추적: 아웃바운드 연결의 응답은 자동 허용 (인바운드 신규 연결 X)\n\n【오답 체크】\n(A) NAT Gateway — IPv4용, IPv6 주소 변환 불가\n(B) Internet Gateway — 양방향 허용, 외부 → EC2 수신 가능 (정책 위반)\n(C) Virtual Private Gateway — 온프레미스 VPN 연결, 인터넷 액세스 아님\n\n【시험 포인트】\nIPv6 + 아웃바운드만 = EOIGW 유일한 선택\nNAT는 IPv4 전용, NAT64는 복잡함\n보안 정책 '외부 → 수신 금지' = 인바운드 차단 필수\nEOIGW는 상태 추적으로 응답 자동 허용"
  },
  {
    "id": 471,
    "question": "회사에서 VPC 의 컨테이너에서 실행되는 애플리케이션을 만들고 있습니다. 애플리케이션은 Amazon S3 버킷에 데이터를 저장하고 액세스합니다. 개발 단계에서 애플리케이션은 매일 Amazon S3 에 1TB 의 데이터를 저장하고 액세스합니다. 회사는 비용을 최소화하고 가능한 한 트래픽이 인터넷을 통과하지 못하도록 막고자 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 버킷에 대해 S3 Intelligent-Tiering을 활성화합니다.",
      "B": "S3 버킷에 대해 S3 Transfer Acceleration을 활성화합니다.",
      "C": "Amazon S3용 게이트웨이 VPC 엔드포인트를 생성합니다. 이 엔드포인트를 VPC의 모든 라우팅 테이블과 연결합니다.",
      "D": "VPC 에서 Amazon S3 에 대한 인터페이스 엔드포인트를 생성합니다. 이 엔드포인트를 VPC의 모든 라우팅 테이블과 연결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Gateway VPC Endpoint (S3) — 프라이빗 라우팅, 인터넷 우회, 비용 무료\n▸ Interface VPC Endpoint (S3) — ENI 기반, 시간당 과금\n▸ 인터넷 우회 — 게이트웨이 엔드포인트만 라우팅 테이블에서 관리\n\n【정답 포인트】\n▸ '인터넷 통과 방지' + '비용 최소화' → 게이트웨이 엔드포인트\n▸ 게이트웨이 엔드포인트 — 라우팅 테이블에 추가하면 트래픽 자동 경로 변경\n▸ 1TB/일 데이터 전송 → 데이터 전송 요금 0 (게이트웨이만)\n▸ S3 + EC2 같은 리전 → 모든 라우팅 테이블에 추가 (모든 서브넷 대응)\n\n【오답 체크】\n(A) Intelligent-Tiering — 티어 자동 선택, 인터넷 통과 해결 아님\n(B) Transfer Acceleration — 빠른 전송, 비용 증가, 인터넷 우회 아님\n(D) Interface Endpoint — 시간당 $0.007 과금, 1TB 전송 시 고비용\n\n【시험 포인트】\nVPC → S3 프라이빗 통신 = 게이트웨이 엔드포인트\n인터페이스 ENI는 추가 비용 (소규모 사용만 권장)\n라우팅 테이블 정책 = 자동 경로 선택\n대용량 S3 전송 = 게이트웨이 엔드포인트 필수"
  },
  {
    "id": 472,
    "question": "회사에 Amazon DynamoDB 기반 데이터 저장소가 있는 모바일 채팅 애플리케이션이 있습니다. 사용자는 가능한 한 짧은 대기 시간으로 새 메시지를 읽기를 원합니다. 솔루션 설계자는 최소한의 애플리케이션 변경이 필요한 최적의 솔루션을 설계해야 합니다. 솔루션 설계자는 어떤 방법을 선택해야 합니까?",
    "options": {
      "A": "새 메시지 테이블에 대해 Amazon DynamoDB Accelerator(DAX)를 구성합니다. DAX 끝점을 사용하도록 코드를 업데이트합니다.",
      "B": "증가된 읽기 로드를 처리하기 위해 DynamoDB 읽기 복제본을 추가합니다. 읽기 전용 복제본의 읽기 엔드포인트를 가리키도록 애플리케이션을 업데이트합니다.",
      "C": "DynamoDB 의 새 메시지 테이블에 대한 읽기 용량 단위 수를 두 배로 늘립니다. 기존 DynamoDB 엔드포인트를 계속 사용합니다.",
      "D": "Redis 캐시용 Amazon ElastiCache를 애플리케이션 스택에 추가합니다. DynamoDB 대신 Redis 캐시 엔드포인트를 가리키도록 애플리케이션을 업데이트합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ DAX — DynamoDB 전용 인메모리 캐시, 밀리초 단위 응답\n▸ '최소 애플리케이션 변경' — DAX 엔드포인트만 변경 (프로토콜 호환)\n▸ 마이크로초 → 밀리초 레이턴시 감소\n\n【정답 포인트】\n▸ '짧은 대기 시간' + '최소 변경' → DAX 최적\n▸ DAX는 DynamoDB API 호환 (엔드포인트만 변경)\n▸ 기본 설정: 모든 읽기 자동 캐시, 메시지 조회 최적화\n▸ 자동 동기화: 캐시 유효성 관리 (사용자 관리 X)\n\n【오답 체크】\n(B) 읽기 복제본 — DynamoDB 글로벌 테이블, 리전 간 복제 (같은 리전 X)\n(C) RCU 증가 — 비용만 증가, 캐시 없으면 근본 해결 X\n(D) ElastiCache Redis — DynamoDB와 동기화 관리 복잡, 코드 변경 큼\n\n【시험 포인트】\n'최소 애플리케이션 변경' = DAX (엔드포인트 매우 간단)\nDynamoDB 캐싱 전용 → DAX 선택\nRedis는 외부 캐시 (동기화 관리 필요)\nRCU 증가는 비용 증가일 뿐 레이턴시 해결 X"
  },
  {
    "id": 473,
    "question": "회사는 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 인스턴스에서 웹 사이트를 호스팅합니다. 웹 사이트는 정적 콘텐츠를 제공합니다. 웹 사이트 트래픽이 증가하고 있으며 회사는 잠재적인 비용 증가에 대해 우려하고 있습니다.",
    "options": {
      "A": "Amazon CloudFront 배포를 생성하여 엣지 로케이션에서 상태 파일을 캐싱합니다.",
      "B": "Amazon ElastiCache 클러스터를 생성합니다. ALB 를 ElastiCache 클러스터에 연결하여 캐싱된 파일을 제공합니다.",
      "C": "AWS WAF 웹 ACL 을 생성하고 ALB 와 연결합니다. 웹 ACL 에 규칙을 추가하여 정적 파일을 캐시합니다.",
      "D": "대체 AWS 리전에서 두 번째 ALB 를 생성합니다. 사용자 트래픽을 가장 가까운 리전으로 라우팅하여 데이터 전송 비용을 최소화합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudFront — CDN, 엣지 로케이션에서 정적 콘텐츠 캐시, 데이터 전송 비용 저감\n▸ 정적 웹사이트 — CloudFront 최적화 대상\n▸ 트래픽 증가 → 출발지 트래픽 감소로 비용 절감\n\n【정답 포인트】\n▸ '정적 콘텐츠' 명시 → CloudFront 최적 (CDN 전문)\n▸ 트래픽 증가 + 비용 우려 → 출발지 부하 분산\n▸ CloudFront 캐시 → 사용자 지역의 엣지 로케이션에서 직접 제공\n▸ 데이터 전송 비용 감소 (EC2 → 사용자 트래픽 대폭 감소)\n\n【오답 체크】\n(B) ElastiCache — 동적 콘텐츠 캐시, ALB에 직접 연결 미적합\n(C) AWS WAF — 보안 필터링, 캐싱 기능 없음\n(D) 리전 추가 — 인프라 비용 증가, 데이터 전송 비용은 여전히 발생\n\n【시험 포인트】\n정적 콘텐츠 → CloudFront (CDN)\n동적 콘텐츠 → ElastiCache (인메모리)\nWAF는 보안, 캐싱 아님\n리전 분산은 DR 솔루션, 비용 감소 아님"
  },
  {
    "id": 474,
    "question": "회사는 다른 리전의 워크로드와 격리된 워크로드를 지원하고 실행하기 위해 AWS 리전에 여러 VPC 를 보유하고 있습니다. 최근 애플리케이션 시작 요구 사항으로 인해 회사의 VPC는 모든 지역의 다른 모든 VPC와 통신해야 합니다. 최소한의 관리 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "VPC 피어링을 사용하여 단일 리전에서 VPC 통신을 관리합니다. 리전 간 VPC 피어링을 사용하여 VPC 통신을 관리합니다.",
      "B": "모든 지역에서 AWS Direct Connect 게이트웨이를 사용하여 여러 지역에서 VPC 를 연결하고 VPC 통신을 관리합니다.",
      "C": "AWS Transit Gateway를 사용하여 단일 지역에서 VPC 통신을 관리하고 지역 간 Transit Gateway 피어링을 사용하여 VPC 통신을 관리합니다.",
      "D": "모든 지역에서 AWS PrivateLink 를 사용하여 여러 지역에서 VPC 를 연결하고 VPC 통신을 관리합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Transit Gateway — 중앙 허브, 모든 VPC/온프레미스 연결\n▸ TGW 피어링 — 리전 간 TGW 연결\n▸ '최소 관리 노력' — 피어링 폭발 방지\n\n【정답 포인트】\n▸ 다중 VPC + 다중 리전 연결 → Transit Gateway 필수\n▸ VPC 피어링: N개 VPC = N×(N-1)/2 피어링 (관리 복잡도)\n▸ Transit Gateway: 1개 허브 = 모든 VPC 간 통신 가능\n▸ TGW 피어링 → 리전 간 통신 (스케일 용이)\n\n【오답 체크】\n(A) VPC 피어링 — 메시 네트워크 (5개 VPC = 10개 피어링)\n(B) Direct Connect — 온프레미스 연결 우선, VPC-VPC 연결 복잡\n(D) PrivateLink — 서비스 노출용, VPC 간 풀 메시 통신 불가\n\n【시험 포인트】\n'최소 관리' + '다중 VPC' = Transit Gateway 즉시 고려\nVPC 피어링 폭발 = O(n²) 증가\nTransit Gateway = 중앙 집중식 (O(n))\nTGW 피어링으로 리전 간 확장 간단"
  },
  {
    "id": 475,
    "question": "회사에서 Amazon Elastic Container Service(Amazon ECS)를 사용할 컨테이너화된 애플리케이션을 설계하고 있습니다. 애플리케이션은 내구성이 뛰어나고 RPO(복구 지점 목표)가 8 시간인 다른 AWS 리전에 데이터를 복구할 수 있는 공유 파일 시스템에 액세스해야 합니다. 파일 시스템은 리전 내의 각 가용 영역에 탑재 대상을 제공해야 합니다. 솔루션 설계자는 AWS Backup을 사용하여 다른 리전에 대한 복제를 관리하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "다중 AZ 배포가 있는 Windows 파일 서버용 Amazon FSx",
      "B": "다중 AZ 배포가 있는 NetApp ONTAP용 Amazon FSx",
      "C": "표준 스토리지 클래스가 있는 Amazon Elastic File System(Amazon EFS)",
      "D": "OpenZFS용 Amazon FSx"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ EFS — NFS 기반, 자동 다중 AZ 마운트 포인트\n▸ AWS Backup — EFS 지역 간 백업 복제 지원\n▸ RPO 8시간 — EFS 자동 백업 + 지역 복제로 달성 가능\n\n【정답 포인트】\n▸ '각 AZ에 마운트 포인트' → EFS 자동 제공 (FSx는 가용영역 선택)\n▸ AWS Backup 지원 → EFS (크로스 리전 백업 자동)\n▸ RPO 8시간 → EFS 일일 백업으로 충족\n▸ 공유 파일 시스템 + 리전 복구 → EFS 최적\n▸ 비용 효율 → EFS 가장 저렴\n\n【오답 체크】\n(A) FSx Windows — Windows 전용, NFS/POSIX 미지원, Backup 크로스 리전 제한\n(B) FSx NetApp ONTAP — 다중 AZ 지원하지만 Backup 크로스 리전 더 복잡\n(D) FSx OpenZFS — 단일 AZ만 지원 (요구사항 미충족)\n\n【시험 포인트】\n'각 AZ 마운트 포인트' = EFS 자동, FSx는 수동 선택\nAWS Backup + EFS = 지역 간 자동 복제 간단\nRPO 8시간 = 일일 백업 충분\nEFS가 가장 단순하고 AWS Backup 통합 최적"
  },
  {
    "id": 476,
    "question": "회사는 가까운 장래에 급속한 성장을 기대하고 있습니다. 솔루션 설계자는 기존 사용자를 구성하고 AWS 에서 새 사용자에게 권한을 부여해야 합니다. 솔루션 설계자는 IAM 그룹을 만들기로 결정했습니다. 솔루션 설계자는 부서를 기반으로 IAM 그룹에 새 사용자를 추가합니다. 새 사용자에게 권한을 부여하는 가장 안전한 추가 작업은 무엇입니까?",
    "options": {
      "A": "서비스 제어 정책(SCP)을 적용하여 액세스 권한을 관리합니다.",
      "B": "최소 권한이 있는 IAM 역할을 생성합니다. 역할을 IAM 그룹에 연결합니다.",
      "C": "최소 권한을 부여하는 IAM 정책을 생성합니다. 정책을 IAM 그룹에 연결합니다.",
      "D": "IAM 역할을 생성합니다. 최대 권한을 정의하는 권한 경계와 역할을 연결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 최소 권한 원칙(Least Privilege) — 필요한 최소 권한만 부여\n▸ IAM 정책 — 그룹에 직접 연결 가능한 권한 문서\n\n【정답 포인트】\n▸ 그룹 기반 권한 관리 → 정책을 그룹에 직접 연결\n▸ 확장성 + 보안 — 사용자 추가 시 자동으로 그룹 정책 상속\n\n【오답 체크】\n(A) SCP는 조직 범위 제어(Organizations), 단일 계정 관리에는 부적합\n(B) 역할은 그룹에 직접 연결 불가, 사용자 간 권한 충돌 유발\n(D) 권한 경계는 최대값만 정의, 실제 권한 부여 안함\n\n【시험 포인트】\n그룹 + 정책 조합 → 신규 사용자 추가 시 자동 권한 상속으로 운영 효율성 극대화"
  },
  {
    "id": 477,
    "question": "그룹에는 Amazon S3 버킷을 나열하고 해당 버킷에서 객체를 삭제할 수 있는 권한이 필요합니다. 관리자는 버킷에 대한 액세스 권한을 제공하기 위해 다음 IAM 정책을 생성하고 해당 정책을 그룹에 적용했습니다. 그룹은 버킷의 객체를 삭제할 수 없습니다. 회사는 최소 권한 액세스 규칙을 따릅니다. 버킷 액세스를 수정하기 위해 솔루션 설계자가 정책에 추가해야 하는 설명은 무엇입니까?",
    "options": {
      "A": "B.",
      "C": "D."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ s3:DeleteObject — S3 객체 삭제 권한 액션\n▸ 리소스 ARN — 버킷/객체 경로 지정으로 범위 제한\n\n【정답 포인트】\n▸ 빠진 Action → s3:DeleteObject 명시적 추가 필요\n▸ 리소스 정의 → arn:aws:s3:::bucket-name/* 패턴으로 객체 범위 지정\n\n【오답 체크】\n(A) \n(B) 나열(ListBucket) 권한만으로는 삭제 불가, 별도 액션 필요\n(C) 부분 정책만으로는 전체 삭제 권한 미충족\n\n【시험 포인트】\n S3 정책 = Action + Resource 조합 필수 → 각 작업(읽기/삭제)마다 명확한 액션 정의"
  },
  {
    "id": 478,
    "question": "로펌은 대중과 정보를 공유해야 합니다. 이 정보에는 공개적으로 읽을 수 있어야 하는 수백 개의 파일이 포함됩니다. 지정된 미래 날짜 이전에 누구든지 파일을 수정하거나 삭제하는 것은 금지됩니다. 가장 안전한 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "정적 웹 사이트 호스팅용으로 구성된 Amazon S3 버킷에 모든 파일을 업로드합니다. 지정된 날짜까지 S3 버킷에 액세스하는 모든 AWS 보안 주체에게 읽기 전용 IAM 권한을 부여합니다.",
      "B": "S3 버전 관리가 활성화된 새 Amazon S3 버킷을 생성합니다. 지정된 날짜에 따라 보존 기간이 있는 S3 Object Lock 을 사용하십시오. 정적 웹 사이트 호스팅을 위해 S3 버킷을 구성합니다. 객체에 대한 읽기 전용 액세스를 허용하도록 S3 버킷 정책을 설정합니다.",
      "C": "S3 버전 관리가 활성화된 새 Amazon S3 버킷을 생성합니다. 객체 수정 또는 삭제 시 AWS Lambda 함수를 실행하도록 이벤트 트리거를 구성합니다. 개체를 프라이빗 S3 버킷의 원래 버전으로 바꾸도록 Lambda 함수를 구성합니다.",
      "D": "정적 웹 사이트 호스팅용으로 구성된 Amazon S3 버킷에 모든 파일을 업로드합니다. 파일이 포함된 폴더를 선택합니다. 지정된 날짜에 따라 보존 기간이 있는 S3 Object Lock을 사용하십시오. S3 버킷에 액세스하는 모든 AWS 보안 주체에게 읽기 전용 IAM 권한을 부여합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 Object Lock — 규정 준수 목적 불변성 보장\n▸ 버전 관리 — 객체 버전 추적으로 삭제/변경 복구 가능\n\n【정답 포인트】\n▸ 규정 준수 모드 + 보존 기간 → 날짜 전 수정/삭제 물리적 차단\n▸ 버킷 정책 읽기 전용 → 권한 레벨 추가 제어로 이중 보호\n\n【오답 체크】\n(A) IAM 권한만으로는 권한 있는 사용자의 실수 삭제 방지 불가\n(C) Lambda로 복구는 수동 개입 필요, 자동 불변성 보장 부족\n(D) Object Lock이 폴더 레벨에서는 작동 불가, 객체 단위 적용 필요\n\n【시험 포인트】\nObject Lock (배포 규정) + 정책 조합 → 권한/기술 이중 잠금으로 법규 준수 설계"
  },
  {
    "id": 479,
    "question": "회사에서 필요한 인프라를 수동으로 프로비저닝하여 새 웹 사이트의 인프라 프로토타입을 만들고 있습니다. 이 인프라에는 Auto Scaling 그룹, Application Load Balancer 및 Amazon RDS 데이터베이스가 포함됩니다. 구성이 철저히 검증된 후 회사는 자동화된 방식으로 두 가용 영역에서 개발 및 프로덕션 사용을 위한 인프라를 즉시 배포할 수 있는 기능을 원합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "AWS Systems Manager를 사용하여 2개의 가용 영역에서 프로토타입 인프라를 복제하고 프로비저닝합니다.",
      "B": "프로토타입 인프라를 가이드로 사용하여 인프라를 템플릿으로 정의합니다. AWS CloudFormation으로 인프라를 배포하십시오.",
      "C": "AWS Config를 사용하여 프로토타입 인프라에서 사용되는 리소스 인벤토리를 기록합니다. AWS Config를 사용하여 프로토타입 인프라를 두 개의 가용 영역에 배포합니다.",
      "D": "AWS Elastic Beanstalk 를 사용하고 프로토타입 인프라에 대한 자동 참조를 사용하도록 구성하여 2개의 가용 영역에 새 환경을 자동으로 배포합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudFormation — JSON/YAML 템플릿 기반 IaC(Infrastructure as Code)\n▸ 선언적 정의 — 원하는 상태 한 번에 정의로 반복 배포\n\n【정답 포인트】\n▸ ASG + ALB + RDS 구성 → CloudFormation 템플릿화로 일관성 보장\n▸ 다중 AZ 배포 → 매개변수 활용으로 dev/prod 환경 자동 재현\n\n【오답 체크】\n(A) Systems Manager는 인벤토리/패치 관리용, 인프라 배포 도구 아님\n(C) AWS Config는 규정 준수 모니터링만 가능, 배포 기능 없음\n(D) Elastic Beanstalk는 애플리케이션 배포용, 복잡한 인프라 미지원\n\n【시험 포인트】\n프로토타입 → 템플릿화 → 자동 배포 = CloudFormation이 표준 답변 패턴"
  },
  {
    "id": 480,
    "question": "비즈니스 애플리케이션은 Amazon EC2에서 호스팅되며 암호화된 객체 스토리지에 Amazon S3 를 사용합니다. 최고 정보 보안 책임자는 두 서비스 간의 애플리케이션 트래픽이 공용 인터넷을 통과해서는 안 된다고 지시했습니다. 규정 준수 요구 사항을 충족하기 위해 솔루션 설계자가 사용해야 하는 기능은 무엇입니까?",
    "options": {
      "A": "AWS 키 관리 서비스(AWS KMS)",
      "B": "VPC 엔드포인트",
      "C": "사설 서브넷",
      "D": "가상 프라이빗 게이트웨이"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ VPC 엔드포인트 — AWS 서비스 비공개 연결(인터넷 우회)\n▸ 게이트웨이 엔드포인트 — S3/DynamoDB 전용 저비용 옵션\n\n【정답 포인트】\n▸ EC2 → S3 트래픽 → VPC 엔드포인트로 AWS 네트워크 내 보호\n▸ 공용 인터넷 우회 → 데이터 유출 위험 제거, 규정 준수 충족\n\n【오답 체크】\n(A) KMS는 암호화 키 관리만 담당, 네트워크 경로 제어 불가\n(C) 사설 서브넷은 아웃바운드 트래픽 경로 지정 안함, S3는 퍼블릭\n(D) 가상 프라이빗 게이트웨이는 온프레미스 VPN 연결용\n\n【시험 포인트】\nAWS 서비스 간 비공개 트래픽 → VPC 엔드포인트가 유일한 정답"
  },
  {
    "id": 481,
    "question": "회사는 AWS 클라우드에서 3 계층 웹 애플리케이션을 호스팅합니다. MySQL 용 다중 AZAmazon RDS 서버는 데이터베이스 계층을 형성합니다. Amazon ElastiCache 는 캐시 계층을 형성합니다. 회사는 고객이 데이터베이스에 항목을 추가할 때 캐시의 데이터를 추가하거나 업데이트하는 캐싱 전략을 원합니다. 캐시의 데이터는 항상 데이터베이스의 데이터와 일치해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "지연 로딩 캐싱 전략 구현",
      "B": "write-through 캐싱 전략 구현",
      "C": "추가 TTL 캐싱 전략 구현",
      "D": "AWS AppConfig 캐싱 전략 구현"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Write-Through — 쓰기 시점에 DB + 캐시 동시 업데이트\n▸ 일관성(Consistency) — DB와 캐시 항상 동기 상태 유지\n\n【정답 포인트】\n▸ 데이터 추가 → 캐시에도 동시 기록 → 지연 로딩과 정반대\n▸ 강한 일관성 보장 → 읽기 직후 변경사항 즉시 반영\n\n【오답 체크】\n(A) 지연 로딩은 캐시 미스 후 읽기만, 쓰기 동기화 안함\n(C) TTL은 만료 시간만 정의, 능동적 동기화 메커니즘 아님\n(D) AppConfig는 애플리케이션 설정 관리, 캐시 전략 도구 아님\n\n【시험 포인트】\n\"항상 일치\" 요구 → 쓰기 시점 양쪽 업데이트 필수 = Write-Through"
  },
  {
    "id": 482,
    "question": "회사는 온프레미스 위치에서 Amazon S3 버킷으로 100GB 의 기록 데이터를 마이그레이션하려고 합니다. 이 회사는 온프레미스에 100Mbps 인터넷 연결이 있습니다. 회사는 S3 버킷으로 전송되는 데이터를 암호화해야 합니다. 회사는 새로운 데이터를 Amazon S3에 직접 저장합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS CLI에서 s3 sync 명령을 사용하여 데이터를 S3 버킷으로 직접 이동합니다.",
      "B": "AWS DataSync 를 사용하여 온프레미스 위치에서 S3 버킷으로 데이터를 마이그레이션합니다.",
      "C": "AWS Snowball을 사용하여 데이터를 S3 버킷으로 이동합니다.",
      "D": "온프레미스 위치에서 AWS 로 IPsec VPN 을 설정합니다. AWS CLI 에서 s3 cp 명령을 사용하여 데이터를 S3 버킷으로 직접 이동합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS DataSync — 온프레미스/NAS → AWS 자동 마이그레이션 에이전트\n▸ 암호화 전송 — TLS 기본 지원, 검증 기능 포함\n\n【정답 포인트】\n▸ 100GB + 100Mbps → 자동 스케줄링으로 네트워크 효율화\n▸ 암호화 + 검증 + 대역폭 최적화 자동 수행, 운영 부담 최소\n\n【오답 체크】\n(A) CLI는 암호화 검증 및 재시도 로직 수동 관리 필요\n(C) Snowball은 물리 기기 배송 필요, 긴급성 낮은 경우 용도\n(D) VPN 설정 + CLI는 운영 오버헤드 높음, 암호화 관리 복잡\n\n【시험 포인트】\n온프레미스 → S3 마이그레이션 + 암호화 + 최소 오버헤드 = DataSync"
  },
  {
    "id": 483,
    "question": "회사에서 Windows 컨테이너 아래의 .NET 6 Framework 에서 실행되는 Windows 작업을 컨테이너화했습니다. 회사는 AWS 클라우드에서 이 작업을 실행하려고 합니다. 작업은 10분마다 실행됩니다. 작업의 실행 시간은 1분에서 3분 사이입니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "작업의 컨테이너 이미지를 기반으로 AWS Lambda 함수를 생성합니다. 10분마다 함수를 호출하도록 Amazon EventBridge를 구성합니다.",
      "B": "AWS Batch를 사용하여 AWS Fargate 리소스를 사용하는 작업을 생성합니다. 10분마다 실행되도록 작업 일정을 구성합니다.",
      "C": "AWS Fargate에서 Amazon Elastic Container Service(Amazon ECS)를 사용하여 작업을 실행합니다. 10분마다 실행할 작업의 컨테이너 이미지를 기반으로 예약된 작업을 만듭니다.",
      "D": "AWS Fargate에서 Amazon Elastic Container Service(Amazon ECS)를 사용하여 작업을 실행합니다. 작업의 컨테이너 이미지를 기반으로 독립 실행형 작업을 생성합니다. Windows 작업 스케줄러를 사용하여 10분마다 작업을 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ ECS 예약 작업 — EventBridge + Fargate로 정기 실행\n▸ Windows 컨테이너 지원 — Fargate는 Windows 기본 지원\n\n【정답 포인트】\n▸ 10분 주기 + 1-3분 실행 → 예약 작업으로 필요시만 과금(비용 최소)\n▸ EventBridge 트리거 → Fargate 시작으로 콜드 스타트 무시\n\n【오답 체크】\n(A) Lambda는 Windows 런타임 미지원, .NET 6 컨테이너 불가\n(B) Batch는 과학 컴퓨팅/배치용, 주기 작업에 오버엔지니어링\n(D) 독립 실행형 ECS는 상시 리소스 유지, Windows 스케줄러 추가 복잡도\n\n【시험 포인트】\nWindows 컨테이너 + 주기 작업 + 비용 효율 = ECS Fargate + 예약"
  },
  {
    "id": 484,
    "question": "한 회사가 많은 독립 실행형 AWS 계정에서 통합된 다중 계정 아키텍처로 이동하려고 합니다. 이 회사는 다양한 사업부에 대해 많은 새 AWS 계정을 생성할 계획입니다. 회사는 중앙 집중식 회사 디렉터리 서비스를 사용하여 이러한 AWS 계정에 대한 액세스를 인증해야 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자가 권장해야 하는 작업 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "모든 기능을 켠 상태에서 AWS Organizations 에 새 조직을 만듭니다. 조직에서 새 AWS 계정을 생성합니다.",
      "B": "Amazon Cognito 자격 증명 풀을 설정합니다. Amazon Cognito 인증을 수락하도록 AWS IAM Identity Center(AWS Single Sign-On)를 구성합니다.",
      "C": "AWS 계정을 관리하기 위해 서비스 제어 정책(SCP)을 구성합니다. AWS IAM Identity Center(AWS Single Sign-On)를 AWS Directory Service에 추가합니다.",
      "D": "AWS Organizations 에서 새 조직을 생성합니다. AWS Directory Service 를 직접 사용하도록 조직의 인증 메커니즘을 구성합니다.",
      "E": "조직에서 AWS IAM Identity Center(AWS Single Sign-On)를 설정합니다. IAM Identity Center를 구성하고 회사의 회사 디렉터리 서비스와 통합합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ AWS Organizations — 다중 계정 중앙 관리\n▸ IAM Identity Center — 회사 디렉터리 SSO 통합\n\n【정답 포인트】\n(A) 조직 생성 → 신규 계정 자동 생성/관리 가능\n(E) Identity Center + 디렉터리 서비스 연동 → 중앙 인증 구현\n\n【오답 체크】\n(B) Cognito는 애플리케이션 사용자용, 직원 SSO 아님\n(C) SCP는 권한 제어만, 인증/SSO 기능 없음\n(D) Directory Service를 직접 조직에 연결 불가(중간 계층 필요)\n\n【시험 포인트】\n다중 계정 + 중앙 디렉터리 인증 = Organizations(관리) + Identity Center(SSO)"
  },
  {
    "id": 485,
    "question": "회사는 오래된 뉴스 영상에서 AWS 에 비디오 아카이브를 저장할 수 있는 솔루션을 찾고 있습니다. 회사는 비용을 최소화해야 하며 이러한 파일을 복원할 필요가 거의 없습니다. 파일이 필요할 때 최대 5분 내에 사용할 수 있어야 합니다. 가장 비용 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "비디오 아카이브를 Amazon S3 Glacier에 저장하고 긴급 검색을 사용합니다.",
      "B": "비디오 아카이브를 Amazon S3 Glacier에 저장하고 표준 검색을 사용합니다.",
      "C": "비디오 아카이브를 Amazon S3 Standard-Infrequent Access(S3 Standard-IA)에 저장합니다.",
      "D": "비디오 아카이브를 Amazon S3 One Zone-Infrequent Access(S3 One Zone-IA)에 저장합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 Glacier Instant — 밀리초 검색(최소 비용)\n▸ 긴급 검색(Expedited) — 1-5분 복원 시간\n\n【정답 포인트】\n▸ 5분 이내 요구 → Glacier Expedited 검색 선택\n▸ 매우 낮은 접근 빈도 → Glacier 스토리지 비용 최소\n\n【오답 체크】\n(B) 표준 검색은 3-5시간, 5분 요구 미충족\n(C) Standard-IA는 스토리지 비용 높음, Glacier보다 비싼 구조\n(D) One Zone-IA는 단일 AZ로 내구성 낮음, 중요 아카이브 부적합\n\n【시험 포인트】\n아카이브 + 느린 접근 + 빠른 복원 = Glacier + Expedited 검색"
  },
  {
    "id": 486,
    "question": "한 회사가 AWS 에서 3 계층 애플리케이션을 구축하고 있습니다. 프레젠테이션 계층은 정적 웹 사이트를 제공합니다. 논리 계층은 컨테이너화된 애플리케이션입니다. 이 응용 프로그램은 관계형 데이터베이스에 데이터를 저장합니다. 이 회사는 배포를 단순화하고 운영 비용을 절감하기를 원합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 를 사용하여 정적 콘텐츠를 호스팅합니다. 컴퓨팅 성능을 위해 AWS Fargate 와 함께 Amazon Elastic Container Service(Amazon ECS)를 사용합니다. 데이터베이스에 대해 관리형 Amazon RDS 클러스터를 사용합니다.",
      "B": "Amazon CloudFront 를 사용하여 정적 콘텐츠를 호스팅합니다. 컴퓨팅 성능을 위해 Amazon EC2 와 함께 Amazon Elastic Container Service(Amazon ECS)를 사용합니다. 데이터베이스에 대해 관리형 Amazon RDS 클러스터를 사용합니다.",
      "C": "Amazon S3 를 사용하여 정적 콘텐츠를 호스팅합니다. 컴퓨팅 성능을 위해 AWS Fargate 와 함께 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용합니다. 데이터베이스에 대해 관리형 Amazon RDS 클러스터를 사용합니다.",
      "D": "Amazon EC2 예약 인스턴스를 사용하여 정적 콘텐츠를 호스팅합니다. 컴퓨팅 성능을 위해 Amazon EC2와 함께 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용합니다. 데이터베이스에 대해 관리형 Amazon RDS 클러스터를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 서버리스 조합 — 관리 부담 최소화\n▸ S3 + Fargate + RDS — 각 계층 최적화\n\n【정답 포인트】\n▸ 정적 웹 → S3 호스팅으로 배포 간소화\n▸ 컨테이너 → Fargate로 서버 관리 제거\n▸ DB → RDS 관리형으로 운영 오버헤드 최소\n\n【오답 체크】\n(B) CloudFront는 CDN만, S3 호스팅보다 복잡도 높음\n(C) EKS는 Kubernetes 운영 부담 높음, 간단한 앱엔 과도\n(D) EC2 예약 인스턴스는 서버 관리 필요, 서버리스 이점 상실\n\n【시험 포인트】\n배포 단순화 + 운영 비용 절감 = 관리형 서비스(S3+Fargate+RDS)"
  },
  {
    "id": 487,
    "question": "회사에서 해당 애플리케이션을 위한 스토리지 솔루션을 찾고 있습니다. 솔루션은 가용성과 확장성이 높아야 합니다. 또한 솔루션은 기본 프로토콜을 통해 AWS 및 온프레미스의 여러 Linux 인스턴스에 의해 마운트될 수 있고 최소 크기 요구 사항이 없는 파일 시스템으로 작동해야 합니다. 회사는 온프레미스 네트워크에서 VPC 로 액세스하기 위해 사이트 간 VPN을 설정했습니다. 이러한 요구 사항을 충족하는 스토리지 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon FSx 다중 AZ 배포",
      "B": "Amazon Elastic Block Store(Amazon EBS) 다중 연결 볼륨",
      "C": "탑재 대상이 여러 개인 Amazon Elastic File System(Amazon EFS)",
      "D": "단일 탑재 대상 및 여러 액세스 지점이 있는 Amazon Elastic File System(Amazon EFS)"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ EFS — NFS 기반 공유 파일시스템\n▸ 다중 마운트 대상 — VPN 통해 온프레미스 접근 가능\n\n【정답 포인트】\n▸ 여러 인스턴스 동시 접근 → NFS 프로토콜 지원\n▸ AWS + 온프레미스 양쪽 마운트 → 다중 AZ 마운트 대상 필요\n▸ 최소 크기 제약 없음 → EFS는 자동 확장\n\n【오답 체크】\n(A) FSx는 Windows/고성능 전용, Linux NFS 미지원\n(B) EBS는 단일 인스턴스 연결, 공유 파일시스템 아님\n(D) 단일 마운트 대상은 온프레미스 VPN 접근 불가\n\n【시험 포인트】\n온프레미스 + AWS 공유 파일시스템 + 여러 인스턴스 = EFS + 다중 마운트"
  },
  {
    "id": 488,
    "question": "4 년 차 미디어 회사는 AWS 계정을 구성하기 위해 AWS Organizations 모든 기능 기능 세트를 사용하고 있습니다. 회사의 재무 팀에 따르면 회원 계정의 청구 정보는 회원 계정의 루트 사용자를 포함하여 누구도 액세스할 수 없어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "모든 재무 팀 사용자를 IAM 그룹에 추가합니다. Billing 이라는 AWS 관리형 정책을 그룹에 연결합니다.",
      "B": "루트 사용자를 포함한 모든 사용자의 청구 정보에 대한 액세스를 거부하는 자격 증명 기반 정책을 첨부합니다.",
      "C": "청구 정보에 대한 액세스를 거부하는 서비스 제어 정책(SCP)을 만듭니다. 루트 조직 단위(OU)에 SCP를 연결합니다.",
      "D": "조직의 모든 기능 기능 집합에서 조직 통합 결제 기능 집합으로 변환합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SCP(Service Control Policy) — 조직 전체 권한 제약\n▸ 루트 조직 단위 — 모든 계정에 강제 적용\n\n【정답 포인트】\n▸ 루트 사용자 제외 불가능 → IAM 정책 우회 방지\n▸ SCP Deny 문 → 루트 포함 누구도 청구 액세스 불가\n▸ 루트 OU에 적용 → 하위 모든 계정에 상속\n\n【오답 체크】\n(A) IAM 정책은 루트 사용자에게 무시됨\n(B) 자격 증명 정책은 루트 면제 대상, 실효성 없음\n(D) 기능 세트 변환은 청구 접근 제어와 무관\n\n【시험 포인트】\n루트 포함 전체 계정 제약 = SCP를 루트 OU에 적용"
  },
  {
    "id": 489,
    "question": "전자상거래 회사는 온프레미스 웨어하우스 솔루션과 통합된 AWS 클라우드에서 애플리케이션을 실행합니다. 이 회사는 Amazon Simple Notification Service(Amazon SNS)를 사용하여 주문 메시지를 온프레미스 HTTPS 엔드포인트로 보내 창고 애플리케이션이 주문을 처리할 수 있도록 합니다. 로컬 데이터 센터 팀에서 일부 주문 메시지가 수신되지 않은 것을 감지했습니다. 솔루션 설계자는 전달되지 않은 메시지를 보관하고 최대 14 일 동안 메시지를 분석해야 합니다. 최소한의 개발 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "보존 기간이 14일인 Amazon Kinesis Data Stream 대상이 있는 Amazon SNS 배달 못한 편지 대기열을 구성합니다.",
      "B": "애플리케이션과 Amazon SNS 사이에 보존 기간이 14 일인 Amazon Simple Queue Service(Amazon SQS) 대기열을 추가합니다.",
      "C": "보존 기간이 14일인 Amazon Simple Queue Service(Amazon SQS) 대상이 있는 Amazon SNS 데드 레터 대기열을 구성합니다.",
      "D": "보존 기간이 14 일로 설정된 TTL 속성이 있는 Amazon DynamoDB 대상이 있는 Amazon SNS 데드 레터 대기열을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SNS 데드 레터 대기열 — 전달 실패 메시지 자동 라우팅\n▸ SQS 대상 — 메시지 보관 및 분석 용이\n\n【정답 포인트】\n▸ SNS 구독 실패 → DLQ로 자동 이동\n▸ SQS 보존 기간 14일 → 메시지 분석 시간 확보\n▸ 최소 개발 → 설정만으로 구현 가능\n\n【오답 체크】\n(A) Kinesis는 실시간 스트리밍용, 아카이빙에 오버엔지니어링\n(B) SNS-SQS 직렬 연결은 DLQ 자동화 미포함, 수동 처리 필요\n(D) DynamoDB TTL은 정확 시간 보장 없음, 삭제 지연 발생\n\n【시험 포인트】\nSNS 실패 메시지 + 보관 + 분석 = SNS DLQ + SQS 조합"
  },
  {
    "id": 490,
    "question": "게임 회사는 Amazon DynamoDB 를 사용하여 지리적 위치, 플레이어 데이터 및 순위표와 같은 사용자 정보를 저장합니다. 회사는 최소한의 코딩으로 Amazon S3 버킷에 대한 지속적인 백업을 구성해야 합니다. 백업은 애플리케이션의 가용성에 영향을 미치지 않아야 하며 테이블에 대해 정의된 읽기 용량 단위(RCU)에 영향을 주지 않아야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon EMR 클러스터를 사용하십시오. Apache Hive 작업을 생성하여 Amazon S3 에 데이터를 백업합니다.",
      "B": "연속 백업을 통해 DynamoDB 에서 Amazon S3 로 직접 데이터를 내보냅니다. 테이블에 대해 지정 시간 복구를 설정합니다.",
      "C": "Amazon DynamoDB 스트림을 구성합니다. 스트림을 사용하고 데이터를 Amazon S3 버킷으로 내보내는 AWS Lambda 함수를 생성합니다.",
      "D": "정기적으로 데이터베이스 테이블에서 Amazon S3 로 데이터를 내보내는 AWS Lambda 함수를 생성합니다. 테이블에 대해 지정 시간 복구를 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DynamoDB 연속 백업 — PITR(Point-in-Time Recovery)\n▸ S3 직접 내보내기 — RCU 소비 없음\n\n【정답 포인트】\n▸ 최소 코딩 → 네이티브 내보내기 기능만 활성화\n▸ RCU 영향 없음 → 연속 백업 독립 리소스 사용\n▸ 지속적 백업 → PITR로 자동 스냅샷\n\n【오답 체크】\n(A) EMR + Hive는 과도한 개발/운영 복잡도\n(C) Lambda 스트림은 RCU 소비 및 코딩 필요\n(D) Lambda 함수는 정기 실행만, 진정한 연속성 부족\n\n【시험 포인트】\nDynamoDB 자동 백업 + S3 내보내기 + RCU 무영향 = 연속 백업 기능"
  },
  {
    "id": 491,
    "question": "솔루션 설계자는 은행에 대한 신용 카드 데이터 유효성 검사 요청을 처리하기 위해 비동기식 애플리케이션을 설계하고 있습니다. 애플리케이션은 안전해야 하며 각 요청을 한 번 이상 처리할 수 있어야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Lambda 이벤트 소스 매핑을 사용하십시오. Amazon Simple Queue Service(Amazon SQS) 표준 대기열을 이벤트 소스로 설정합니다. 암호화에 AWS Key Management Service(SSE-KMS)를 사용합니다. Lambda 실행 역할에 대한 kms:Decrypt 권한을 추가합니다.",
      "B": "AWS Lambda 이벤트 소스 매핑을 사용합니다. Amazon Simple Queue Service(Amazon SQS) FIFO 대기열을 이벤트 소스로 사용합니다. 암호화에 SQS 관리형 암호화 키(SSE-SQS)를 사용합니다. Lambda 함수에 대한 암호화 키 호출 권한을 추가합니다.",
      "C": "AWS Lambda 이벤트 소스 매핑을 사용합니다. Amazon Simple Queue Service(Amazon SQS) FIFO 대기열을 이벤트 소스로 설정합니다. AWS KMS 키(SSE-KMS)를 사용합니다. Lambda 실행 역할에 대한 kms:Decrypt 권한을 추가합니다.",
      "D": "AWS Lambda 이벤트 소스 매핑을 사용합니다. Amazon Simple Queue Service(Amazon SQS) 표준 대기열을 이벤트 소스로 설정합니다. 암호화에 AWS KMS 키(SSE-KMS)를 사용합니다. Lambda 함수에 대한 암호화 키 호출 권한을 추가합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 표준 대기열 — \"최소 1회\" 전달 보장\n▸ SSE-KMS — 금융 등급 암호화\n\n【정답 포인트】\n▸ 신용 카드 데이터 → 고강도 암호화(KMS) 필수\n▸ 한 번 이상 처리 → 표준 대기열 중복 처리 내성\n▸ Lambda 역할 + kms:Decrypt → 적절한 권한 부여\n\n【오답 체크】\n(B) FIFO는 정확히 한 번만 보장, 중복 처리 못함\n(B) SSE-SQS는 금융 컴플라이언스 미충족\n(C) FIFO는 처리량 제한, 비용 효율성 낮음\n(D) 암호화 키 \"호출\" 권한은 존재하지 않는 권한\n\n【시험 포인트】\n신용 카드 + 중복 처리 허용 + 비용 효율 = 표준 대기열 + KMS"
  },
  {
    "id": 492,
    "question": "회사에 개발 작업을 위한 여러 AWS 계정이 있습니다. 일부 직원은 지속적으로 대형 Amazon EC2 인스턴스를 사용하므로 회사가 개발 계정에 대한 연간 예산을 초과하게 됩니다. 회사는 이러한 계정에서 AWS 리소스 생성을 중앙에서 제한하려고 합니다. 최소한의 개발 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "승인된 EC2 생성 프로세스를 사용하는 AWS Systems Manager 템플릿을 개발합니다. 승인된 Systems Manager 템플릿을 사용하여 EC2 인스턴스를 프로비저닝합니다.",
      "B": "AWS Organizations 를 사용하여 계정을 조직 단위(OU)로 구성합니다. 서비스 제어 정책(SCP)을 정의하고 연결하여 EC2 인스턴스 유형의 사용을 제어합니다.",
      "C": "EC2 인스턴스가 생성될 때 AWS Lambda 함수를 호출하는 Amazon EventBridge 규칙을 구성합니다. 허용되지 않는 EC2 인스턴스 유형을 중지합니다.",
      "D": "직원이 허용되는 EC2 인스턴스 유형을 생성할 수 있도록 AWS Service Catalog 제품을 설정합니다. 직원이 서비스 카탈로그 제품을 사용해야만 EC2 인스턴스를 배포할 수 있는지 확인하십시오."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SCP — Organizations 레벨 강제 정책\n▸ OU 계층 — 조직 단위별 차등 제어\n\n【정답 포인트】\n▸ 중앙 집중 제약 → SCP로 우회 불가능한 제약\n▸ EC2 인스턴스 유형 제한 → Deny 문으로 거대 인스턴스 차단\n▸ 최소 개발 → 정책 정의만으로 자동 강제\n\n【오답 체크】\n(A) Systems Manager 템플릿은 승인 프로세스만, 강제 불가\n(C) Lambda 사후 정지는 비용 이미 발생, 사전 방지 아님\n(D) Service Catalog는 선택적 카탈로그, 강제 사용 어려움\n\n【시험 포인트】\n다중 계정 + 중앙 강제 제약 = Organizations SCP"
  },
  {
    "id": 493,
    "question": "한 회사에서 AI(인공 지능)를 사용하여 고객 서비스 통화 품질을 확인하려고 합니다. 회사는 현재 영어를 포함하여 4 개 언어로 통화를 관리합니다. 회사는 앞으로 새로운 언어를 제공할 것입니다. 회사는 기계 학습(ML) 모델을 정기적으로 유지 관리할 리소스가 없습니다. 회사는 고객 서비스 통화 녹음에서 서면 감정 분석 보고서를 작성해야 합니다. 고객 서비스 통화 녹음 텍스트는 영어로 번역되어야 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "Amazon Comprehend를 사용하여 오디오 녹음을 영어로 번역하십시오.",
      "B": "Amazon Lex를 사용하여 작성된 감정 분석 보고서를 생성합니다.",
      "C": "Amazon Polly를 사용하여 오디오 녹음을 텍스트로 변환합니다.",
      "D": "Amazon Transcribe를 사용하여 모든 언어의 오디오 녹음을 텍스트로 변환합니다.",
      "E": "Amazon Translate를 사용하여 모든 언어의 텍스트를 영어로 번역합니다. F. Amazon Comprehend를 사용하여 감정 분석 보고서를 생성합니다."
    },
    "answer": "DE",
    "explanation": "【핵심 용어】\n▸ Transcribe — 음성 → 텍스트(다국어 지원)\n▸ Translate → 번역(50+ 언어)\n▸ Comprehend — 감정 분석(NLP)\n\n【정답 포인트】\n(D) 오디오 → 원본 언어 텍스트 추출\n(E) 다국어 텍스트 → 영어 번역\n(F) 영어 텍스트 → 감정 점수/보고서 생성\n\n【오답 체크】\n(A) Comprehend는 번역 불가(Translate 전담)\n(B) Lex는 챗봇 대화용, 감정 분석 불가\n(C) Polly는 텍스트 → 음성(역방향)\n\n【시험 포인트】\n음성 → 다국어 텍스트 → 영어 번역 → 감정 분석 = D+E+F"
  },
  {
    "id": 494,
    "question": "회사는 Amazon EC2 인스턴스를 사용하여 내부 시스템을 호스팅합니다. 배포 작업의 일부로 관리자는 AWS CLI 를 사용하여 EC2 인스턴스를 종료하려고 합니다. 그러나 관리자는 403(액세스 거부) 오류 메시지를 받습니다. 관리자는 다음 IAM 정책이 연결된 IAM 역할을 사용하고 있습니다. 실패한 요청의 원인은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스에는 Deny 문이 포함된 리소스 기반 정책이 있습니다.",
      "B": "정책 설명에 주체가 지정되지 않았습니다.",
      "C": "\"Action\" 필드는 EC2 인스턴스를 종료하는 데 필요한 조치를 부여하지 않습니다.",
      "D": "EC2 인스턴스 종료 요청은 CIDR 블록 192.0.2.0/24 또는 203.0.113.0/24에서 시작되지 않습니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Condition 블록 — IP 범위 제약 추가\n▸ IpAddress 조건 — 특정 CIDR에서만 허용\n\n【정답 포인트】\n▸ 정책에 \"Condition\" 존재 → IP 제약 활성\n▸ 요청 IP가 허용 범위 밖 → 403 액세스 거부\n▸ Action은 충분하나 Condition 미충족\n\n【오답 체크】\n(A) EC2는 리소스 기반 정책 미지원(IAM만 해당)\n(B) 정책 설명의 Principal은 역할 첨부 시 불필요\n(C) Action이 ec2:TerminateInstances 포함된다면 충분\n\n【시험 포인트】\n정책 허용 + 403 거부 → Action 아닌 \"Condition\" 블록 확인"
  },
  {
    "id": 495,
    "question": "회사에서 내부 감사를 실시하고 있습니다. 회사는 회사의 AWS Lake Formation 데이터 레이크와 연결된 Amazon S3 버킷의 데이터에 민감한 고객 또는 직원 데이터가 포함되지 않도록 하려고 합니다. 회사는 개인 식별 정보(PII) 또는 여권 번호 및 신용 카드 번호를 포함한 금융 정보를 검색하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "계정에서 AWS Audit Manager 를 구성합니다. 감사를 위해 PCI DSS(Payment Card Industry Data Security Standards)를 선택합니다.",
      "B": "S3 버킷에서 Amazon S3 인벤토리 구성 인벤토리를 쿼리하도록 Amazon Athena 를 구성합니다.",
      "C": "필요한 데이터 유형에 대해 관리형 식별자를 사용하는 데이터 검색 작업을 실행하도록 Amazon Macie를 구성합니다.",
      "D": "Amazon S3 Select를 사용하여 S3 버킷에서 보고서를 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon Macie — S3 데이터 콘텐츠 분석으로 PII/금융정보 자동 검출\n▸ 관리형 식별자 — Macie 내장 패턴(신용카드, 여권번호 등)\n\n【정답 포인트】\n▸ PII+금융정보 검색 → Macie 필수 선택\n▸ Lake Formation 연동 S3 데이터 감시 → Macie 데이터 검색 작업\n▸ 자동화된 콘텐츠 분석 → 관리형 식별자 기반\n\n【오답 체크】\n(A) Audit Manager — 규정준수 프레임워크(PCI DSS) 감사용이지 민감데이터 검색 불가\n(B) S3 Inventory+Athena — 메타데이터만 분석, 실제 콘텐츠 검색 불가\n(D) S3 Select — 단순 쿼리 도구, 패턴기반 검색 기능 없음\n\n【시험 포인트】\n데이터 보호 요구사항 문제 → Macie 용도 확인\n감사(audit) vs 검색(discovery) 구분\n S3 콘텐츠 분석 → Macie 1순위"
  },
  {
    "id": 496,
    "question": "회사는 온프레미스 서버를 사용하여 애플리케이션을 호스팅합니다. 회사의 저장 용량이 부족합니다. 애플리케이션은 블록 스토리지와 NFS 스토리지를 모두 사용합니다. 회사는 기존 애플리케이션을 재설계하지 않고 로컬 캐싱을 지원하는 고성능 솔루션이 필요합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 작업 조합을 수행해야 합니까? (2개 선택)",
    "options": {
      "A": "Amazon S3를 온프레미스 서버에 파일 시스템으로 탑재합니다.",
      "B": "NFS 스토리지를 대체할 AWS Storage Gateway 파일 게이트웨이를 배포합니다.",
      "C": "AWS Snowball Edge를 배포하여 온프레미스 서버에 NFS 마운트를 프로비저닝합니다.",
      "D": "블록 스토리지를 대체할 AWS Storage Gateway 볼륨 게이트웨이를 배포합니다.",
      "E": "Amazon Elastic File System(Amazon EFS) 볼륨을 배포하고 온프레미스 서버에 탑재합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ Storage Gateway 파일 게이트웨이 — NFS 호환, 온프레미스 캐싱\n▸ Storage Gateway 볼륨 게이트웨이 — iSCSI 블록, 로컬 캐시/저장\n\n【정답 포인트】\n▸ 블록+NFS 이중 지원 → Gateway 2가지 타입 필요\n▸ 로컬 캐싱 → 게이트웨이 고유 기능\n▸ 애플리케이션 재설계 불필요 → 기존 인터페이스 유지\n\n【오답 체크】\n(A) S3 파일시스템 탑재 — 온프레미스 직접 탑재 불가\n(C) Snowball Edge — 데이터 전송용, 지속적 스토리지로 부적합\n(E) EFS — 클라우드 기반, 온프레미스에 직접 탑재 불가\n\n【시험 포인트】\n온프레미스 지속적 스토리지 → Storage Gateway 선택\n블록+파일 혼합 요구 → 두 게이트웨이 조합\n로컬 캐싱 키워드 → Gateway만 해당"
  },
  {
    "id": 497,
    "question": "회사에는 동일한 AWS 리전의 Amazon S3 버킷에서 대량의 데이터를 읽고 쓰는 서비스가 있습니다. 이 서비스는 VPC 의 프라이빗 서브넷 내 Amazon EC2 인스턴스에 배포됩니다. 이 서비스는 퍼블릭 서브넷의 NAT 게이트웨이를 통해 Amazon S3 와 통신합니다. 그러나 회사는 데이터 출력 비용을 줄일 수 있는 솔루션을 원합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "퍼블릭 서브넷에서 전용 EC2 NAT 인스턴스를 프로비저닝합니다. 이 인스턴스의 탄력적 네트워크 인터페이스를 모든 S3 트래픽의 대상으로 사용하도록 프라이빗 서브넷에 대한 라우팅 테이블을 구성합니다.",
      "B": "프라이빗 서브넷에서 전용 EC2 NAT 인스턴스를 프로비저닝합니다. 이 인스턴스의 탄력적 네트워크 인터페이스를 모든 S3 트래픽의 대상으로 사용하도록 퍼블릭 서브넷에 대한 라우팅 테이블을 구성합니다.",
      "C": "VPC 게이트웨이 엔드포인트를 프로비저닝합니다. 게이트웨이 엔드포인트를 모든 S3 트래픽의 경로로 사용하도록 프라이빗 서브넷에 대한 경로 테이블을 구성합니다.",
      "D": "두 번째 NAT 게이트웨이를 프로비저닝합니다. 이 NAT 게이트웨이를 모든 S3 트래픽의 대상으로 사용하도록 프라이빗 서브넷에 대한 라우팅 테이블을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ VPC 게이트웨이 엔드포인트(S3용) — 리전 내 무료 트래픽\n▸ NAT 게이트웨이 — 데이터 출력 비용 발생(0.045$/GB)\n\n【정답 포인트】\n▸ 리전 내 S3 접근 → 게이트웨이 엔드포인트 선택\n▸ 인터넷 경유 불필요 → 비용 제거\n▸ 프라이빗 서브넷 라우팅 → 엔드포인트로 직접 연결\n\n【오답 체크】\n(A) \n(B) NAT 인스턴스 — 비용 감소 목표에 모순, EC2 비용+데이터 출력 비용 발생\n(D) 두 번째 NAT — 출력 비용 구조 미해결\n\n【시험 포인트】\n리전 내 S3 비용 최적화 → 엔드포인트 필수\n게이트웨이 엔드포인트(S3/DynamoDB만) vs 인터페이스 엔드포인트 구분\n데이터 출력 비용 키워드 → 무료 경로 찾기"
  },
  {
    "id": 498,
    "question": "회사는 Amazon S3 를 사용하여 고해상도 사진을 S3 버킷에 저장합니다. 애플리케이션 변경을 최소화하기 위해 회사는 사진을 S3 개체의 최신 버전으로 저장합니다. 회사는 사진의 가장 최근 버전 두 개만 유지하면 됩니다. 회사는 비용을 줄이고 싶어합니다. 회사는 S3 버킷을 큰 비용으로 식별했습니다. 최소한의 운영 오버헤드로 S3 비용을 줄이는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 수명 주기를 사용하여 만료된 객체 버전을 삭제하고 가장 최근 버전 2 개를 유지합니다.",
      "B": "AWS Lambda 함수를 사용하여 이전 버전을 확인하고 가장 최근 버전 2 개를 제외한 모든 버전을 삭제합니다.",
      "C": "S3 배치 작업을 사용하여 최신이 아닌 객체 버전을 삭제하고 가장 최근 버전 2 개만 유지합니다.",
      "D": "S3 버킷에서 버전 관리를 비활성화하고 가장 최근 버전 2개를 유지합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 수명 주기 정책 — 비법정 객체 버전 자동 삭제\n▸ 'NoncurrentVersionExpiration' — 구버전 만료 규칙\n\n【정답 포인트】\n▸ 최소 운영 오버헤드 → 자동화 솔루션\n▸ 정책 기반 처리 → S3 수명주기 최적\n▸ 버전 관리 유지 → 애플리케이션 영향 최소\n\n【오답 체크】\n(B) Lambda 함수 — 수동 관리, 운영 오버헤드 증가\n(C) S3 배치작업 — 일회성 작업용, 지속적 자동화 X\n(D) 버전 관리 비활성 — 기존 버전 보존 불가, 복구 불가능\n\n【시험 포인트】\n버전 관리 기반 비용 최적화 → 수명주기 정책\nNoncurrent 버전 처리 → 삭제가 기본\n자동화 vs 수동 판단 → 운영 오버헤드 고려"
  },
  {
    "id": 499,
    "question": "회사는 1Gbps AWS Direct Connect 연결 비용을 최소화해야 합니다. 회사의 평균 연결 사용률은 10% 미만입니다. 솔루션 설계자는 보안을 손상시키지 않으면서 비용을 절감할 솔루션을 추천해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "새로운 1Gbps Direct Connect 연결을 설정합니다. 다른 AWS 계정과 연결을 공유합니다.",
      "B": "AWS Management Console에서 새로운 200Mbps Direct Connect 연결을 설정합니다.",
      "C": "1Gbps 연결을 주문하려면 AWS Direct Connect 파트너에게 문의하십시오. 다른 AWS 계정과 연결을 공유합니다.",
      "D": "기존 AWS 계정에 대한 200Mbps 호스팅 연결을 주문하려면 AWS Direct Connect 파트너에게 문의하십시오."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Direct Connect 호스팅 연결 — 파트너 제공, 낮은 선택지\n▸ 1Gbps vs 200Mbps — 대역폭 비용 차이\n\n【정답 포인트】\n▸ 10% 사용률 → 대역폭 과잉\n▸ 낮은 속도 선택 → 200Mbps로 충분\n▸ 호스팅 연결 → 비용 절감 옵션\n▸ 보안 유지 → 파트너와의 전용 연결\n\n【오답 체크】\n(A) 1Gbps 공유 — 비용 절감 미흡, 공유는 같은 조직 내\n(B) Console 신규 설정 — 파트너보다 비용 높음\n(C) 1Gbps 공유 —\n(A) 와 동일, 대역폭 비용 문제\n\n【시험 포인트】\n낮은 사용률 → 더 작은 대역폭 선택\nDirect Connect 비용 최적화 → 호스팅 연결 검토\n파트너 제공 옵션 → 선택지 다양성"
  },
  {
    "id": 500,
    "question": "회사에는 온프레미스에 여러 Windows 파일 서버가 있습니다. 이 회사는 파일을 Windows File Server 파일 시스템용 Amazon FSx 로 마이그레이션하고 통합하려고 합니다. 액세스 권한이 변경되지 않도록 하려면 파일 권한을 보존해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (2개 선택)",
    "options": {
      "A": "온프레미스에 AWS DataSync 에이전트를 배포합니다. 데이터를 FSx for Windows 파일 서버 파일 시스템으로 전송하도록 DataSync 작업을 예약합니다.",
      "B": "AWS CLI 를 사용하여 각 파일 서버의 공유를 Amazon S3 버킷에 복사합니다. 데이터를 FSx for Windows File Server 파일 시스템으로 전송하도록 AWS DataSync 작업을 예약합니다.",
      "C": "각 파일 서버에서 드라이브를 제거합니다. Amazon S3 로 가져오기 위해 드라이브를 AWS 로 배송합니다. 데이터를 FSx for Windows File Server 파일 시스템으로 전송하도록 AWS DataSync 작업을 예약합니다.",
      "D": "AWS Snowcone 디바이스를 주문합니다. 장치를 온프레미스 네트워크에 연결합니다. 디바이스에서 AWS DataSync 에이전트를 시작합니다. 데이터를 FSx for Windows 파일 서버 파일 시스템으로 전송하도록 DataSync 작업을 예약합니다.",
      "E": "AWS Snowball Edge Storage Optimized 디바이스를 주문합니다. 장치를 온프레미스 네트워크에 연결합니다. AWS CLI 를 사용하여 디바이스에 데이터를 복사합니다. Amazon S3로 가져오기 위해 디바이스를 AWS로 반송합니다. 데이터를 FSx for Windows File Server 파일 시스템으로 전송하도록 AWS DataSync 작업을 예약합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ AWS DataSync — 파일 메타데이터(권한) 보존 전송\n▸ SMB 메타데이터 — Windows 권한 정보 유지\n\n【정답 포인트】\n▸ 파일 권한 보존 필수 → DataSync 사용\n▸ 온프레미스 직접 연결 → DataSync 에이전트 배포\n▸ Windows FSx 호환 → SMB 메타데이터 자동 유지\n\n【오답 체크】\n(B) S3 경유 — 권한 메타데이터 손실\n(C) 물리 드라이브 배송 — 권한 보존 미보장\n(E) Snowball Edge+CLI — CLI 복사는 권한 손실 가능\n\n【시험 포인트】\n권한 보존 키워드 → DataSync 필수\nWindows 파일 권한 마이그레이션 → DataSync 기본값\nSnowball은 데이터 전송용, 메타데이터 보존 X"
  },
  {
    "id": 501,
    "question": "회사는 고객 결제 데이터를 Amazon S3 의 회사 데이터 레이크로 수집하려고 합니다. 회사는 평균적으로 1 분마다 결제 데이터를 수신합니다. 회사는 결제 데이터를 실시간으로 분석하기를 원합니다. 그런 다음 회사는 데이터를 데이터 레이크로 수집하려고 합니다. 이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Kinesis Data Streams 를 사용하여 데이터를 수집하십시오. AWS Lambda 를 사용하여 실시간으로 데이터를 분석합니다.",
      "B": "AWS Glue를 사용하여 데이터를 수집합니다. Amazon Kinesis Data Analytics를 사용하여 데이터를 실시간으로 분석하십시오.",
      "C": "Amazon Kinesis Data Firehose를 사용하여 데이터를 수집합니다. Amazon Kinesis Data Analytics를 사용하여 데이터를 실시간으로 분석하십시오.",
      "D": "Amazon API Gateway 를 사용하여 데이터를 수집합니다. AWS Lambda 를 사용하여 실시간으로 데이터를 분석합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Kinesis Data Firehose — 자동 S3 로드, 데이터 레이크 최적화\n▸ Kinesis Data Analytics — 실시간 SQL 분석(Firehose 연동)\n\n【정답 포인트】\n▸ 수집 + 분석 + S3 저장 → Firehose 통합 솔루션\n▸ 자동 버퍼링 및 전달 → Firehose 기본 기능\n▸ 실시간 분석 + 레이크 수집 → 동시 처리 필요\n▸ 1분/회 수신 → Firehose 적정 처리량\n\n【오답 체크】\n(A) Data Streams+Lambda — S3 로드 자동화 없음, 별도 구현 필요\n(B) Glue — 배치 처리용, 실시간 X\n(D) API Gateway+Lambda — S3 직접 로드 미확보\n\n【시험 포인트】\n데이터 레이크 구축 → Firehose-Analytics 조합\n자동 S3 적재 → Firehose 우선 선택\n실시간 분석 + 배치 저장 동시 요구 → Firehose"
  },
  {
    "id": 502,
    "question": "회사는 Amazon EC2 에서 콘텐츠 관리 시스템(CMS)을 사용하는 웹 사이트를 운영합니다. CMS 는 단일 EC2 인스턴스에서 실행되며 데이터 계층에 Amazon Aurora MySQL 다중 AZ DB 인스턴스를 사용합니다. 웹 사이트 이미지는 EC2 인스턴스 내부에 탑재된 Amazon Elastic Block Store(Amazon EBS) 볼륨에 저장됩니다. 웹 사이트의 성능과 복원력을 개선하기 위해 솔루션 설계자가 취해야 하는 작업 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "웹 사이트 이미지를 모든 EC2 인스턴스에 탑재된 Amazon S3 버킷으로 이동합니다.",
      "B": "기본 EC2 인스턴스의 NFS 공유를 사용하여 웹사이트 이미지를 공유합니다. 이 공유를 다른 EC2 인스턴스에 마운트합니다.",
      "C": "모든 EC2 인스턴스에 탑재된 Amazon Elastic File System(Amazon EFS) 파일 시스템으로 웹 사이트 이미지를 이동합니다.",
      "D": "기존 EC2 인스턴스에서 Amazon 머신 이미지(AMI)를 생성합니다. AMI를 사용하여 Auto Scaling 그룹의 일부로 Application Load Balancer 뒤에 새 인스턴스를 프로비저닝합니다. 최소 2 개의 인스턴스를 유지하도록 Auto Scaling 그룹을 구성합니다. 웹 사이트에 대한 AWS Global Accelerator에서 액셀러레이터를 구성합니다.",
      "E": "기존 EC2 인스턴스에서 Amazon 머신 이미지(AMI)를 생성합니다. AMI를 사용하여 Auto Scaling 그룹의 일부로 Application Load Balancer 뒤에 새 인스턴스를 프로비저닝합니다. 최소 2 개의 인스턴스를 유지하도록 Auto Scaling 그룹을 구성합니다. 웹 사이트에 대한 Amazon CloudFront 배포를 구성합니다."
    },
    "answer": "CE",
    "explanation": "【핵심 용어】\n▸ EFS — 다중 인스턴스 공유, 높은 가용성\n▸ CloudFront — 정적 이미지 캐싱, 글로벌 성능\n\n【정답 포인트】\n▸ 이미지 공유 저장소 → EFS(NFS 호환)\n▸ 복원력 향상 → Auto Scaling+ALB\n▸ 성능 최적화 → CloudFront CDN 캐싱\n▸ 글로벌 가용성 → CloudFront 필수\n\n【오답 체크】\n(A) S3 직접 탑재 — 파일시스템 인터페이스 없음\n(B) NFS 공유 — 가용성/복원력 부족, 단일 인스턴스 의존\n(D) Global Accelerator — 정적 콘텐츠 캐싱 X, 글로벌 레이턴시 증가\n\n【시험 포인트】\n다중 인스턴스 파일 공유 → EFS 필수\n성능과 복원력 동시 달성 → Auto Scaling+CDN\nCloudFront vs Global Accelerator 구분 → 이미지는 CloudFront"
  },
  {
    "id": 503,
    "question": "회사에서 인프라 모니터링 서비스를 실행합니다. 이 회사는 서비스가 고객 AWS 계정의 데이터를 모니터링할 수 있는 새로운 기능을 구축하고 있습니다. 새로운 기능은 고객 계정에서 AWS API 를 호출하여 Amazon EC2 인스턴스를 설명하고 Amazon CloudWatch 지표를 읽습니다. 회사는 가장 안전한 방법으로 고객 계정에 대한 액세스 권한을 얻기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "고객이 회사 계정에 대한 읽기 전용 EC2 및 CloudWatch 권한과 신뢰 정책을 사용하여 계정에 IAM 역할을 생성하는지 확인합니다.",
      "B": "토큰 판매기를 구현하는 서버리스 API 를 생성하여 읽기 전용 EC2 및 CloudWatch 권한이 있는 역할에 대한 임시 AWS 자격 증명을 제공합니다.",
      "C": "고객이 자신의 계정에서 읽기 전용 EC2 및 CloudWatch 권한을 가진 IAM 사용자를 생성하는지 확인합니다. 비밀 관리 시스템에서 고객 액세스 및 비밀 키를 암호화하고 저장합니다.",
      "D": "고객이 자신의 계정에 Amazon Cognito 사용자를 생성하여 읽기 전용 EC2 및 CloudWatch 권한이 있는 IAM 역할을 사용하는지 확인합니다. 암호 관리 시스템에서 Amazon Cognito 사용자 및 암호를 암호화하고 저장합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 교차 계정 IAM 역할 — 신뢰 관계로 안전 위임\n▸ 임시 자격증명 — 단기 토큰 기반 접근\n\n【정답 포인트】\n▸ 교차 계정 접근 → 역할 신뢰 정책\n▸ 읽기 전용 권한 → 최소 권한 원칙\n▸ 안전한 방식 → 임시 자격증명(STS)\n▸ 고객 제어 → 신뢰 정책으로 권한 위임\n\n【오답 체크】\n(B) 토큰 판매기 → 추가 인프라, 복잡도 증가\n(C) IAM 사용자 — 장기 액세스 키 관리 위험\n(D) Cognito — 사용자 인증용, API 권한 위임 부적합\n\n【시험 포인트】\n교차 계정 접근 → IAM 역할 신뢰 정책\n장기 vs 임시 자격증명 → 임시가 안전\nIAM 역할 = 임시 자격증명 = STS 기반"
  },
  {
    "id": 504,
    "question": "회사는 수백 개의 AWS 계정에 걸쳐 있는 us-east-1 리전의 여러 VPC를 연결해야 합니다. 회사의 네트워킹 팀에는 클라우드 네트워크를 관리하기 위한 자체 AWS 계정이 있습니다. VPC를 연결하기 위한 운영상 가장 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "각 VPC 간에 VPC 피어링 연결을 설정합니다. 연결된 각 서브넷의 경로 테이블을 업데이트합니다.",
      "B": "인터넷을 통해 각 VPC 를 연결하도록 각 VPC 에서 NAT 게이트웨이와 인터넷 게이트웨이를 구성합니다.",
      "C": "네트워킹 팀의 AWS 계정에서 AWS Transit Gateway 를 생성합니다. 각 VPC 에서 정적 경로를 구성합니다.",
      "D": "각 VPC 에 VPN 게이트웨이를 배포합니다. 네트워킹 팀의 AWS 계정에 전송 VPC 를 생성하여 각 VPC에 연결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Transit Gateway — 중앙 연결점, 대규모 다중 VPC\n▸ 허브-스포크 아키텍처 — 확장성 극대화\n\n【정답 포인트】\n▸ 수백 개 VPC 연결 → 피어링 불가능(관리 복잡도)\n▸ 중앙 관리 → Transit Gateway 허브\n▸ 운영 효율성 → 단일 지점 관리\n▸ 확장성 → 새 VPC 추가 용이\n\n【오답 체크】\n(A) VPC 피어링 — O(n²) 연결, 수백 개는 관리 불가\n(B) 인터넷 경유 — 보안 위험, 성능 저하\n(D) VPN 게이트웨이 — 복잡도 증가, Transit Gateway 우위\n\n【시험 포인트】\n대규모 다중 VPC → Transit Gateway 필수\n허브-스포크 패턴 → 중앙화된 네트워킹\nVPC 피어링의 한계 → 수십 개 이상은 TGW"
  },
  {
    "id": 505,
    "question": "한 회사에 야간 배치 작업을 실행하여 데이터를 처리하는 Amazon EC2 인스턴스가 있습니다. EC2 인스턴스는 온디맨드 결제를 사용하는 Auto Scaling 그룹에서 실행됩니다. 한 인스턴스에서 작업이 실패하면 다른 인스턴스가 작업을 다시 처리합니다. 배치 작업은 현지 시간으로 매일 오전 12시에서 오전 6시 사이에 실행됩니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 EC2 인스턴스를 제공하는 솔루션은 무엇입니까?",
    "options": {
      "A": "배치 작업이 사용하는 Auto Scaling 그룹의 인스턴스 제품군을 포함하는 Amazon EC2용 1년 절약 플랜을 구매합니다.",
      "B": "배치 작업이 사용하는 Auto Scaling 그룹에 있는 인스턴스의 특정 인스턴스 유형 및 운영 체제에 대해 1년 예약 인스턴스를 구매합니다.",
      "C": "Auto Scaling 그룹에 대한 새 시작 템플릿을 생성합니다. 인스턴스를 스팟 인스턴스로 설정합니다. CPU 사용량에 따라 확장하도록 정책을 설정합니다.",
      "D": "Auto Scaling 그룹에 대한 새 시작 템플릿을 생성합니다. 인스턴스 크기를 늘립니다. CPU 사용량에 따라 확장하도록 정책을 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Spot 인스턴스 — 90% 할인, 배치 작업 최적\n▸ 중단 허용 — 배치 작업 재처리 가능\n\n【정답 포인트】\n▸ 배치/비인터럽트 작업 → Spot 최적\n▸ 예정된 시간 운영 → Spot 가용성 높음\n▸ 재처리 로직 있음 → 중단 허용 가능\n▸ 시간당 비용 극소화 → Spot 거의 불가능\n\n【오답 체크】\n(A) \n(B) 예약 인스턴스 — 6시간/일 사용, 활용률 낮음\n(D) 인스턴스 크기 증가 — 비용 증가, 해결책 X\n\n【시험 포인트】\n배치/내결함성 작업 → Spot 우선 선택\n자동 재처리 기능 → Spot 중단 수용\n제한된 시간 운영 → Spot 최적 비용"
  },
  {
    "id": 506,
    "question": "소셜 미디어 회사는 웹사이트용 기능을 구축하고 있습니다. 이 기능을 통해 사용자는 사진을 업로드할 수 있습니다. 회사는 대규모 이벤트 기간 동안 수요가 크게 증가할 것으로 예상하고 웹사이트가 사용자의 업로드 트래픽을 처리할 수 있는지 확인해야 합니다. MOST 확장성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "사용자의 브라우저에서 응용 프로그램 서버로 파일을 업로드합니다. 파일을 Amazon S3 버킷으로 전송합니다.",
      "B": "AWS Storage Gateway 파일 게이트웨이를 프로비저닝합니다. 사용자의 브라우저에서 파일 게이트웨이로 직접 파일을 업로드합니다.",
      "C": "애플리케이션에서 Amazon S3 미리 서명된 URL을 생성합니다. 사용자 브라우저에서 S3 버킷으로 직접 파일을 업로드합니다.",
      "D": "Amazon Elastic File System(Amazon EFS) 파일 시스템을 프로비저닝합니다. 사용자의 브라우저에서 파일 시스템으로 직접 파일을 업로드합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 미리 서명된 URL — 애플리케이션 우회, 직접 업로드\n▸ 서버리스 처리 — 인프라 확장 불필요\n\n【정답 포인트】\n▸ 최대 확장성 → 클라이언트 직접 업로드\n▸ 서버 부하 제거 → 애플리케이션 서버 우회\n▸ 무제한 동시성 → S3 버킷 자동 확장\n▸ 네트워크 효율 → 1회 전송(브라우저→S3)\n\n【오답 체크】\n(A) 서버 경유 — 병목(애플리케이션 서버 리소스), 확장성 제약\n(B) Storage Gateway — 온프레미스 연결용, 웹 업로드 부적합\n(D) EFS — EC2 인스턴스 필수, 확장성 낮음\n\n【시험 포인트】\n대규모 동시 업로드 → 직접 S3 업로드\n미리 서명된 URL → 서버리스 확장성\n웹 애플리케이션 확장성 → S3 직업로드 우선"
  },
  {
    "id": 507,
    "question": "회사에 여행 발권을 위한 웹 애플리케이션이 있습니다. 이 애플리케이션은 북미 지역의 단일 데이터 센터에서 실행되는 데이터베이스를 기반으로 합니다. 회사는 글로벌 사용자 기반에 서비스를 제공하기 위해 응용 프로그램을 확장하려고 합니다. 회사는 애플리케이션을 여러 AWS 리전에 배포해야 합니다. 예약 데이터베이스 업데이트 시 평균 대기 시간은 1초 미만이어야 합니다. 이 회사는 여러 지역에 걸쳐 웹 플랫폼을 별도로 배포하려고 합니다. 그러나 회사는 전 세계적으로 일관된 단일 기본 예약 데이터베이스를 유지해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 솔루션을 권장해야 합니까?",
    "options": {
      "A": "Amazon DynamoDB를 사용하도록 애플리케이션을 변환합니다. 중앙 예약 테이블에 전역 테이블을 사용합니다. 각 지역 배포에서 올바른 지역 엔드포인트를 사용합니다.",
      "B": "데이터베이스를 Amazon Aurora MySQL 데이터베이스로 마이그레이션합니다. 각 지역에 Aurora 읽기 전용 복제본을 배포합니다. 데이터베이스에 액세스하려면 각 지역 배포에서 올바른 지역 엔드포인트를 사용하세요.",
      "C": "데이터베이스를 Amazon RDS for MySQL 데이터베이스로 마이그레이션합니다. 각 리전에 MySQL 읽기 전용 복제본을 배포합니다. 데이터베이스에 액세스하려면 각 지역 배포에서 올바른 지역 엔드포인트를 사용하세요.",
      "D": "애플리케이션을 Amazon Aurora Serverless 데이터베이스로 마이그레이션합니다. 각 지역에 데이터베이스 인스턴스를 배포합니다. 각 지역 배포에서 올바른 지역 엔드포인트를 사용하여 데이터베이스에 액세스합니다. AWS Lambda 함수를 사용하여 각 리전에서 이벤트 스트림을 처리하여 데이터베이스를 동기화합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ DynamoDB 글로벌 테이블 — 다중 리전 동기화\n▸ 1초 미만 레이턴시 → 리전별 로컬 사본\n\n【정답 포인트】\n▸ 단일 기본 DB + 다중 리전 → 글로벌 테이블\n▸ 1초 미만 대기시간 → DynamoDB 글로벌 표준\n▸ 자동 동기화 → 관리 오버헤드 최소\n▸ 예약 데이터 → 강 일관성/ACID 불필수\n\n【오답 체크】\n(B) \n(C) Aurora/RDS 읽기 복제본 — 전쓰기 리전 필요, 다중 쓰기 불가\n(D) Lambda 동기화 — 수동 구현, 1초 SLA 보장 어려움\n\n【시험 포인트】\n다중 리전 글로벌 데이터베이스 → DynamoDB 글로벌 테이블\nRDS/Aurora는 주-종 구조 → 글로벌 분산에 부적합\n예약 데이터 = 최종 일관성 허용"
  },
  {
    "id": 508,
    "question": "한 회사에서 여러 Microsoft Windows Server 워크로드를 us-west-1 리전에서 실행되는 Amazon EC2 인스턴스로 마이그레이션했습니다. 회사는 필요에 따라 이미지를 생성하기 위해 워크로드를 수동으로 백업합니다. us-west-1 리전에서 자연 재해가 발생한 경우 회사는 us-west-2 리전에서 워크로드를 신속하게 복구하기를 원합니다. 회사는 EC2 인스턴스에서 24 시간 이상의 데이터 손실을 원하지 않습니다. 회사는 또한 EC2 인스턴스의 모든 백업을 자동화하려고 합니다. 최소한의 관리 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Amazon EC2 지원 Amazon 머신 이미지(AMI) 수명 주기 정책을 생성하여 태그 기반 백업을 생성합니다. 하루에 두 번 실행되도록 백업을 예약합니다. 필요에 따라 이미지를 복사합니다.",
      "B": "Amazon EC2 지원 Amazon 머신 이미지(AMI) 수명 주기 정책을 생성하여 태그 기반 백업을 생성합니다. 하루에 두 번 실행되도록 백업을 예약합니다. us-west-2 리전에 대한 복사본을 구성합니다.",
      "C": "AWS Backup 을 사용하여 us-west-1 및 us-west-2 에 백업 볼트를 생성합니다. 태그 값을 기반으로 EC2 인스턴스에 대한 백업 계획을 생성합니다. 백업 데이터를 us-west-2에 복사하기 위해 예약된 작업으로 실행할 AWS Lambda 함수를 생성합니다.",
      "D": "AWS Backup을 사용하여 백업 볼트를 생성합니다. AWS Backup을 사용하여 태그 값을 기반으로 EC2 인스턴스에 대한 백업 계획을 생성합니다. 사본의 대상을 us-west-2 로 정의합니다. 하루에 두 번 실행할 백업 일정을 지정합니다.",
      "E": "AWS Backup을 사용하여 백업 볼트를 생성합니다. AWS Backup을 사용하여 태그 값을 기반으로 EC2 인스턴스에 대한 백업 계획을 생성합니다. 하루에 두 번 실행할 백업 일정을 지정합니다. 요청 시 us-west-2에 복사합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ AWS Backup — EC2/EBS 백업 자동화\n▸ 교차 리전 복사 — 재해 복구 자동화\n\n【정답 포인트】\n▸ 24시간 RPO → 하루 두 번 백업\n▸ 자동화 + 최소 관리 → AWS Backup+정책\n▸ 교차 리전 복구 → 자동 복사 설정 필수\n▸ AMI 정책 vs Backup 선택 → Backup이 더 효율적\n\n【오답 체크】\n(A) AMI 복사 수동 → 자동화 미흡, 재해복구 지연\n(C) Lambda 수동 복사 → 추가 개발 필요\n(E) 수동 복사 → 자동화되지 않은 재해 복구\n\n【시험 포인트】\n자동화된 재해복구 → AWS Backup + 교차 리전 복사\n24시간 RPO → 하루 2회 백업 스케줄\nAWS Backup이 AMI 정책보다 관리 효율적"
  },
  {
    "id": 509,
    "question": "회사에서 이미지 처리를 위한 2 계층 애플리케이션을 운영하고 있습니다. 애플리케이션은 각각 1 개의 퍼블릭 서브넷과 1 개의 프라이빗 서브넷이 있는 2 개의 가용 영역을 사용합니다. 웹 계층용 ALB(Application Load Balancer)는 퍼블릭 서브넷을 사용합니다. 애플리케이션 계층의 Amazon EC2 인스턴스는 프라이빗 서브넷을 사용합니다. 사용자는 응용 프로그램이 예상보다 느리게 실행되고 있다고 보고합니다. 웹 서버 로그 파일의 보안 감사 결과 애플리케이션이 소수의 IP 주소로부터 수백만 건의 불법 요청을 받고 있는 것으로 나타났습니다. 솔루션 설계자는 회사가 보다 영구적인 솔루션을 조사하는 동안 즉각적인 성능 문제를 해결해야 합니다. 이 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "웹 계층에 대한 인바운드 보안 그룹을 수정합니다. 리소스를 소비하는 IP 주소에 대한 거부 규칙을 추가합니다.",
      "B": "웹 계층 서브넷에 대한 네트워크 ACL 을 수정합니다. 리소스를 소비하는 IP 주소에 대한 인바운드 거부 규칙을 추가합니다.",
      "C": "애플리케이션 계층에 대한 인바운드 보안 그룹을 수정합니다. 리소스를 소비하는 IP 주소에 대한 거부 규칙을 추가합니다.",
      "D": "애플리케이션 계층 서브넷에 대한 네트워크 ACL 을 수정합니다. 리소스를 소비하는 IP 주소에 대한 인바운드 거부 규칙을 추가합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 네트워크 ACL — 서브넷 수준 필터링\n▸ 보안 그룹 — 인스턴스 수준 필터링\n\n【정답 포인트】\n▸ 악의적 트래픽 차단 위치 → 진입점 웹 계층\n▸ 즉각 성능 개선 → 조기 필터링\n▸ NACL이 보안 그룹보다 상위 → 네트워크 레벨\n▸ 수백만 요청 처리 → ALB 바운드 전 차단 필수\n\n【오답 체크】\n(A) 보안 그룹 — ALB 통과 후 필터, 이미 트래픽 처리됨\n(C) \n(D) 애플리케이션 계층 — ALB가 요청 집약, 이미 처리됨\n\n【시험 포인트】\n악의 트래픽 조기 차단 → NACL 사용\nNACL(서브넷) vs 보안 그룹(인스턴스) 계층 구분\nALB 전단 필터링 → 웹 계층 NACL"
  },
  {
    "id": 510,
    "question": "글로벌 마케팅 회사에는 ap-southeast-2 지역 및 eu-west-1 지역에서 실행되는 애플리케이션이 있습니다. eu-west-1 의 VPC 에서 실행되는 애플리케이션은 ap-southeast-2의 VPC에서 실행되는 데이터베이스와 안전하게 통신해야 합니다. 이러한 요구 사항을 충족하는 네트워크 설계는 무엇입니까?",
    "options": {
      "A": "eu-west-1 VPC 와 ap-southeast-2 VPC 간에 VPC 피어링 연결을 생성합니다. ap-southeast-2 보안 그룹의 데이터베이스 서버 IP 주소에서 오는 트래픽을 허용하는 인바운드 규칙을 eu-west-1 애플리케이션 보안 그룹에 생성합니다.",
      "B": "ap-southeast-2 VPC 와 eu-west-1 VPC 간에 VPC 피어링 연결을 구성합니다. 서브넷 경로 테이블을 업데이트합니다. eu-west-1 에 있는 애플리케이션 서버의 보안 그룹 ID 를 참조하는 ap-southeast-2 데이터베이스 보안 그룹에서 인바운드 규칙을 생성합니다.",
      "C": "ap-southeast-2 VPC와 eu-west-1 VPUpdate 서브넷 라우팅 테이블 간에 VPC 피어링 연결을 구성합니다. ap-southeast-2 데이터베이스 보안 그룹에서 eu-west-1 애플리케이션 서버 IP 주소의 트래픽을 허용하는 인바운드 규칙을 생성합니다.",
      "D": "eu-west-1 VPC 와 ap-southeast-2 VPC 간에 피어링 연결이 있는 전송 게이트웨이를 생성합니다. 전송 게이트웨이가 올바르게 피어링되고 라우팅이 구성되면 eu-west-1 에 있는 애플리케이션 서버의 보안 그룹 ID 를 참조하는 데이터베이스 보안 그룹에 인바운드 규칙을 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 교차 리전 VPC 피어링 — 리전 간 안전 연결\n▸ 보안 그룹 참조 방식 제약 → 동일 VPC 내만 가능\n\n【정답 포인트】\n▸ 수신 측 제한 → DB 보안 그룹에서 인바운드 정의\n▸ IP 주소 기반 — 교차 리전은 SGID 참조 불가\n▸ 라우팅 필수 → 피어링 연결 후 경로 테이블 업데이트\n▸ 방향성 — ap-southeast-2가 수신, eu-west-1이 송신\n\n【오답 체크】\n(A) 데이터 흐름 반대 — 데이터베이스가 수신하는 규칙 필요\n(B) SGID 참조 — 교차 리전 불가, IP만 사용\n(D) Transit Gateway — 단순 2리전 연결에는 과다\n\n【시험 포인트】\n교차 리전 VPC 피어링 → IP 기반 보안 그룹\nSGID 참조 불가능 조건 → 교차 VPC/리전\n데이터 흐름 방향 파악 → 수신 측 규칙"
  },
  {
    "id": 511,
    "question": "회사에서 PostgreSQL 데이터베이스 스키마를 사용하는 소프트웨어를 개발하고 있습니다. 회사는 회사 개발자를 위해 여러 개발 환경과 데이터베이스를 구성해야 합니다. 평균적으로 각 개발 환경은 8시간 근무 시간의 절반을 사용합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "자체 Amazon Aurora PostgreSQL 데이터베이스로 각 개발 환경 구성",
      "B": "자체 Amazon RDS for PostgreSQL 단일 AZ DB 인스턴스로 각 개발 환경 구성",
      "C": "자체 Amazon Aurora 온디맨드 PostgreSQL 호환 데이터베이스로 각 개발 환경 구성",
      "D": "Amazon S3 Object Select를 사용하여 자체 Amazon S3 버킷으로 각 개발 환경 구성"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Aurora 온디맨드(Serverless) — 사용 시간만 과금\n▸ 가변 워크로드 — 자동 스케일링\n\n【정답 포인트】\n▸ 4시간 사용(8시간 중) → 50% 비용 절감 가능\n▸ 온디맨드 모델 → 유휴 시간 비용 제거\n▸ 자동 확장/축소 → 관리 오버헤드 최소\n▸ 여러 개발자 환경 → 독립적 온디맨드 DB\n\n【오답 체크】\n(A) Aurora 프로비저닝 — 항상 비용 발생(사용 안 해도)\n(B) RDS 단일 AZ — 동일 문제, 상시 비용\n(D) S3 — 데이터베이스 아님, 스키마 미지원\n\n【시험 포인트】\n가변 워크로드(개발/테스트) → 서버리스 선택\nAurora 온디맨드 vs 프로비저닝 비용 비교\n부분 사용(4시간/8시간) → 온디맨드 최적"
  },
  {
    "id": 512,
    "question": "회사는 계정으로 태그가 지정된 리소스와 함께 AWS Organizations 를 사용합니다. 이 회사는 또한 AWS Backup 을 사용하여 AWS 인프라 리소스를 백업합니다. 회사는 모든 AWS 리소스를 백업해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "태그가 지정되지 않은 모든 리소스를 식별하려면 AWS Config 를 사용하십시오. 프로그래밍 방식으로 식별된 리소스에 태그를 지정합니다. 백업 계획에서 태그를 사용합니다.",
      "B": "AWS Config를 사용하여 실행 중이 아닌 모든 리소스를 식별합니다. 해당 리소스를 백업 볼트에 추가합니다.",
      "C": "모든 AWS 계정 소유자가 리소스를 검토하여 백업해야 하는 리소스를 식별하도록 요구합니다.",
      "D": "Amazon Inspector를 사용하여 규정을 준수하지 않는 모든 리소스를 식별합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Config — 리소스 규정준수 모니터링\n▸ 태그 기반 필터링 — 백업 정책 자동화\n\n【정답 포인트】\n▸ 모든 리소스 백업 → 태그 기반 접근\n▸ 태그 누락 리소스 → Config로 식별\n▸ 자동화 태그 지정 → 백업 정책 포함\n▸ 운영 오버헤드 최소 → 정책 기반 자동화\n\n【오답 체크】\n(B) 실행 중이 아닌 리소스 확인 — 백업 대상 판정 오류\n(C) 수동 검토 — 운영 오버헤드 극대\n(D) Inspector — 규정준수, 백업 필요 판정 아님\n\n【시험 포인트】\n모든 리소스 백업 → 태그 기반 정책\nAWS Config → 규정 미준수 리소스 자동 식별\nAWS Organizations + 태그 조합 → 확장성 극대"
  },
  {
    "id": 513,
    "question": "소셜 미디어 회사는 사용자가 AWS 클라우드에서 호스팅되는 애플리케이션에 이미지를 업로드할 수 있도록 허용하려고 합니다. 회사는 이미지가 여러 장치 유형에 표시될 수 있도록 이미지 크기를 자동으로 조정하는 솔루션이 필요합니다. 애플리케이션은 하루 종일 예측할 수 없는 트래픽 패턴을 경험합니다. 회사는 확장성을 극대화하는 고가용성 솔루션을 찾고 있습니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "이미지 크기를 조정하고 이미지를 Amazon S3 버킷에 저장하기 위해 AWS Lambda 함수를 호출하는 Amazon S3에서 호스팅되는 정적 웹 사이트를 생성합니다.",
      "B": "AWS Step Functions를 호출하여 이미지 크기를 조정하고 Amazon RDS 데이터베이스에 이미지를 저장하는 Amazon CloudFront에서 호스팅되는 정적 웹 사이트를 생성합니다.",
      "C": "Amazon EC2 인스턴스에서 실행되는 웹 서버에서 호스팅되는 동적 웹 사이트를 만듭니다. EC2 인스턴스에서 실행되는 프로세스를 구성하여 이미지 크기를 조정하고 Amazon S3 버킷에 이미지를 저장합니다.",
      "D": "Amazon Simple Queue Service(Amazon SQS)에서 크기 조정 작업을 생성하는 자동 확장 Amazon Elastic Container Service(Amazon ECS) 클러스터에서 호스팅되는 동적 웹 사이트를 생성합니다. 크기 조정 작업을 처리하기 위해 Amazon EC2 인스턴스에서 실행되는 이미지 크기 조정 프로그램을 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 정적 웹사이트 — 무제한 동시성\n▸ S3 이벤트 → Lambda — 자동 트리거\n\n【정답 포인트】\n▸ 확장성 극대 → 서버리스(Lambda)\n▸ 예측 불가 트래픽 → 자동 스케일\n▸ 비용 효율 → 사용 기반 과금\n▸ 아키텍처 간결 → S3+Lambda 조합\n\n【오답 체크】\n(B) Step Functions 불필요, RDS는 정적 파일 부적합\n(C) EC2 상시 실행 → 비용 높음, 확장성 제약\n(D) ECS+SQS 복잡도 증가, Lambda 단순성 우위\n\n【시험 포인트】\n예측 불가 워크로드 → 서버리스(Lambda) 우선\nS3 이벤트 기반 처리 → Lambda 트리거\n정적 파일 + 자동 처리 → S3+Lambda 스택"
  },
  {
    "id": 514,
    "question": "회사는 Amazon EC2 인스턴스에서 마이크로서비스 애플리케이션을 실행하고 있습니다. 이 회사는 확장성을 위해 애플리케이션을 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터로 마이그레이션하려고 합니다. 회사는 보안 규정 준수를 유지하기 위해 엔드포인트 프라이빗 액세스를 true 로 설정하고 엔드포인트 퍼블릭 액세스를 false 로 설정하여 Amazon EKS 제어 플레인을 구성해야 합니다. 회사는 또한 사설 서브넷에 데이터 플레인을 배치해야 합니다. 그러나 회사는 노드가 클러스터에 가입할 수 없기 때문에 오류 알림을 받았습니다. 노드가 클러스터에 가입하도록 허용하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Identity and Access Management(IAM)에서 필요한 권한을 AmazonEKSNodeRole IAM 역할에 부여합니다.",
      "B": "노드가 컨트롤 플레인에 액세스할 수 있도록 인터페이스 VPC 엔드포인트를 생성합니다.",
      "C": "퍼블릭 서브넷에서 노드를 재생성합니다. EC2 노드에 대한 보안 그룹을 제한합니다.",
      "D": "노드의 보안 그룹에서 아웃바운드 트래픽을 허용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Private Endpoint Access — EKS 제어 플레인에 VPC 내부 접근만 허용\n▸ VPC 엔드포인트 — AWS 서비스를 PrivateLink로 VPC 내부 접근 가능하게 구성\n\n【정답 포인트】\n▸ Private Only 구성 → 노드가 퍼블릭 인터넷 접근 불가\n▸ 인터페이스 VPC 엔드포인트 필요 → EKS API 호출 경로 제공\n▸ 노드는 엔드포인트를 통해 비공개로 제어 플레인 통신\n\n【오답 체크】\n(A) IAM 권한은 이미 부여됨 — 네트워크 접근성 문제 아님\n(C) 퍼블릭 서브넷은 보안 요구사항 위반\n(D) 아웃바운드 허용만으로 인터넷 게이트웨이 필요 — 설계와 맞지 않음\n\n【시험 포인트】\nPrivate 제어 플레인 + Private 노드 = VPC 엔드포인트로 폐쇄망 구성"
  },
  {
    "id": 515,
    "question": "회사에서 온프레미스 애플리케이션을 AWS 로 마이그레이션하고 있습니다. 회사는 Amazon Redshift를 솔루션으로 사용하려고 합니다. 이 시나리오에서 Amazon Redshift에 적합한 사용 사례는 무엇입니까? (3개 선택)",
    "options": {
      "A": "기존의 컨테이너화된 이벤트 기반 애플리케이션으로 데이터에 액세스하기 위한 데이터 API 지원",
      "B": "클라이언트 측 및 서버 측 암호화 지원",
      "C": "지정된 시간 동안 애플리케이션이 활성 상태가 아닐 때 분석 워크로드 구축",
      "D": "백엔드 데이터베이스에 대한 부담을 줄이기 위한 데이터 캐싱",
      "E": "페타바이트 규모의 데이터와 분당 수천만 건의 요청을 지원하도록 전 세계적으로 확장 F. AWS Management Console을 사용하여 클러스터의 보조 복제본 생성"
    },
    "answer": "BCE",
    "explanation": "【핵심 용어】\n▸ Redshift — 데이터 웨어하우스, OLAP, 분석 쿼리용\n▸ 암호화 — 전송 중, 저장 시 지원\n▸ 자동 확장 — 컴퓨팅 수요에 따라 탄성 조정\n\n【정답 포인트】\n▸\n(B) 암호화: Redshift 네이티브 보안 기능\n▸\n(C) 예약 시간 분석: Redshift Spectrum으로 S3 데이터 직접 분석 가능\n▸\n(E) 글로벌 확장: 클러스터 확장, Redshift Spectrum으로 페타급 처리 가능\n\n【오답 체크】\n(A) 이벤트 기반 실시간 API — Redshift는 OLTP 용도 아님\n(D) 캐싱은 ElastiCache 역할 — Redshift는 분석 전용\n\n【시험 포인트】\nRedshift = OLAP 분석, 보안, 탄성 확장 조합 선택"
  },
  {
    "id": 516,
    "question": "회사는 고객이 재무 정보를 검색할 수 있도록 고객에게 API 인터페이스를 제공합니다. 회사는 연중 최대 사용 시간에 더 많은 수의 요청을 예상합니다. 회사는 API 가 고객 만족을 보장하기 위해 낮은 대기 시간으로 일관되게 응답하도록 요구합니다. 회사는 API에 컴퓨팅 호스트를 제공해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Application Load Balancer 및 Amazon Elastic Container Service(Amazon ECS)를 사용합니다.",
      "B": "프로비저닝된 동시성과 함께 Amazon API Gateway 및 AWS Lambda 함수를 사용합니다.",
      "C": "Application Load Balancer 및 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 사용합니다.",
      "D": "예약된 동시성과 함께 Amazon API Gateway 및 AWS Lambda 함수를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Provisioned Concurrency — 미리 웜업된 Lambda 실행 환경\n▸ Cold Start — Lambda 처음 실행 시 지연 (수백 ms)\n▸ Reserved Concurrency — 용량 예약만, 웜업 아님\n\n【정답 포인트】\n▸ API Gateway + Lambda = 서버리스 최소 운영 오버헤드\n▸ Provisioned Concurrency = Cold start 제거 → 낮은 지연시간 보장\n▸ 변동성 트래픽 + 일관된 응답 시간 = 프로비저닝 필수\n\n【오답 체크】\n(A) ALB+ECS — 관리형이지만 운영 오버헤드 증가\n(C) ALB+EKS — 가장 높은 관리 부담\n(D) Reserved Concurrency — Cold start 완화 불가\n\n【시험 포인트】\n\"낮은 지연시간 + 최소 오버헤드\" = Provisioned Concurrency 선택"
  },
  {
    "id": 517,
    "question": "한 회사에서 보관 목적으로 모든 AWS Systems Manager Session Manager 로그를 Amazon S3 버킷으로 보내려고 합니다. 어떤 솔루션이 가장 운영 효율성이 높은 이 요구 사항을 충족합니까?",
    "options": {
      "A": "Systems Manager 콘솔에서 S3 로깅을 활성화합니다. 세션 데이터를 보낼 S3 버킷을 선택합니다.",
      "B": "Amazon CloudWatch 에이전트를 설치합니다. 모든 로그를 CloudWatch 로그 그룹에 푸시합니다. 보관 목적으로 그룹에서 S3 버킷으로 로그를 내보냅니다.",
      "C": "모든 서버 로그를 중앙 S3 버킷에 업로드할 Systems Manager 문서를 생성합니다. Amazon EventBridge 를 사용하여 매일 계정에 있는 모든 서버에 대해 Systems Manager 문서를 실행하십시오.",
      "D": "Amazon CloudWatch 에이전트를 설치합니다. 모든 로그를 CloudWatch 로그 그룹에 푸시합니다. 수신 로그 이벤트를 Amazon Kinesis Data Firehose 전송 스트림으로 푸시하는 CloudWatch 로그 구독을 생성합니다. Amazon S3를 대상으로 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Session Manager Logging — 내장 S3 통합 기능\n▸ 운영 효율성 — 최소 구성, 최대 자동화\n▸ 아카이빙 — 장기 보관용 S3 전송\n\n【정답 포인트】\n▸ Session Manager 자체에 S3 로깅 기능 존재\n▸ 콘솔 활성화만으로 완료 — 에이전트 설치 불필요\n▸ 추가 구성 최소화 → 최고의 운영 효율성\n\n【오답 체크】\n(B) CloudWatch 에이전트 설치 + 내보내기 = 수동 개입 필요\n(C) 커스텀 문서 + EventBridge = 과도한 복잡도\n(D) 에이전트 + Firehose = 불필요한 미들웨어 추가\n\n【시험 포인트】\n\"가장 효율적\" 선택은 네이티브 기능 직접 활용"
  },
  {
    "id": 518,
    "question": "애플리케이션은 Amazon RDS MySQL DB 인스턴스를 사용합니다. RDS 데이터베이스의 디스크 공간이 부족해지고 있습니다. 솔루션 설계자는 다운타임 없이 디스크 공간을 늘리고 싶어합니다. 최소한의 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "RDS에서 스토리지 자동 확장 활성화",
      "B": "RDS 데이터베이스 인스턴스 크기 늘리기",
      "C": "RDS 데이터베이스 인스턴스 스토리지 유형을 프로비저닝된 IOPS로 변경",
      "D": "RDS 데이터베이스 백업, 저장 용량 증가, 데이터베이스 복원 및 이전 인스턴스 중지"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Auto Scaling — 자동으로 스토리지 확장\n▸ 다운타임 없음 — 온라인 확장\n▸ 최소 노력 — 설정 후 자동\n\n【정답 포인트】\n▸ Auto Scaling은 RDS 내장 기능\n▸ 한번 활성화 → 임계값 도달 시 자동 확장\n▸ 다운타임 제로, 관리 최소화\n\n【오답 체크】\n(B) 인스턴스 크기 변경 — 일반적으로 다운타임 발생\n(C) IOPS 변경 — 스토리지 용량 증가 아님\n(D) 백업-복원 → 수작업 + 다운타임 필요\n\n【시험 포인트】\n\"다운타임 없음 + 최소 노력\" = Auto Scaling 선택"
  },
  {
    "id": 519,
    "question": "컨설팅 회사는 전 세계 고객에게 전문 서비스를 제공합니다. 이 회사는 고객이 AWS 에서 데이터를 신속하게 수집하고 분석할 수 있는 솔루션과 도구를 제공합니다. 회사는 고객이 셀프 서비스 목적으로 사용할 공통 솔루션 및 도구 집합을 중앙에서 관리하고 배포해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "고객을 위한 AWS CloudFormation 템플릿을 생성합니다.",
      "B": "고객을 위한 AWS Service Catalog 제품을 만듭니다.",
      "C": "고객을 위한 AWS Systems Manager 템플릿을 생성합니다.",
      "D": "고객을 위한 AWS Config 항목을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Service Catalog — 승인된 상품 셀프서비스 배포\n▸ 중앙 관리 — 카탈로그 관리자가 제품 제어\n▸ 셀프서비스 — 고객 스스로 배포 가능\n\n【정답 포인트】\n▸ Service Catalog = 중앙 관리 + 고객 셀프서비스 조합\n▸ 승인된 솔루션만 노출 → 거버넌스 강화\n▸ CloudFormation 기반이지만 더 나은 관리 인터페이스\n\n【오답 체크】\n(A) CloudFormation — 직접 배포, 중앙 통제 약함\n(C) Systems Manager — 패치/설정 관리용, 배포 불가\n(D) AWS Config — 규정 준수 모니터링, 배포 역할 아님\n\n【시험 포인트】\n\"중앙 관리 + 셀프서비스\" = Service Catalog"
  },
  {
    "id": 520,
    "question": "한 회사에서 Amazon EC2 인스턴스에서 실행할 새 웹 애플리케이션을 설계하고 있습니다. 애플리케이션은 백엔드 데이터 스토리지에 Amazon DynamoDB 를 사용합니다. 애플리케이션 트래픽은 예측할 수 없습니다. 회사는 데이터베이스에 대한 응용 프로그램 읽기 및 쓰기 처리량이 보통에서 높을 것으로 예상합니다. 회사는 애플리케이션 트래픽에 대응하여 확장해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 DynamoDB 테이블 구성은 무엇입니까?",
    "options": {
      "A": "DynamoDB 표준 테이블 클래스를 사용하여 프로비저닝된 읽기 및 쓰기로 DynamoDB를 구성합니다. DynamoDB Auto Scaling을 정의된 최대 용량으로 설정합니다.",
      "B": "DynamoDB Standard 테이블 클래스를 사용하여 온디맨드 모드에서 DynamoDB 를 구성합니다.",
      "C": "DynamoDB Standard Infrequent Access(DynamoDB Standard-IA) 테이블 클래스를 사용하여 프로비저닝된 읽기 및 쓰기로 DynamoDB 를 구성합니다. DynamoDB Auto Scaling을 정의된 최대 용량으로 설정합니다.",
      "D": "DynamoDB Standard Infrequent Access(DynamoDB Standard-IA) 테이블 클래스를 사용하여 온디맨드 모드에서 DynamoDB를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ On-Demand Mode — 사용량에 따라 자동 요금\n▸ Provisioned Mode — 미리 용량 설정\n▸ Standard-IA — 저빈도 접근 데이터용, 비용 절감\n\n【정답 포인트】\n▸ 예측 불가 트래픽 + 보통~높음 처리량\n▸ On-Demand = 자동 스케일, 용량 계획 불필요\n▸ Standard 클래스 = 빈번한 접근 패턴 최적화\n\n【오답 체크】\n(A) Provisioned + Auto Scaling — 관리 복잡도 증가\n(C) Standard-IA — 저빈도 데이터용, 여기선 부적합\n(D) Standard-IA + On-Demand — 클래스 선택 오류\n\n【시험 포인트】\n\"예측 불가 + 높은 처리량\" = On-Demand 최선택"
  },
  {
    "id": 521,
    "question": "소매 회사에는 여러 비즈니스가 있습니다. 각 비즈니스의 IT 팀은 자체 AWS 계정을 관리합니다. 각 팀 계정은 AWS Organizations 에서 조직의 일부입니다. 각 팀은 팀 자체 AWS 계정의 Amazon DynamoDB 테이블에서 제품 재고 수준을 모니터링합니다. 회사는 공유 AWS 계정에 중앙 재고 보고 애플리케이션을 배포하고 있습니다. 애플리케이션은 모든 팀의 DynamoDB 테이블에서 항목을 읽을 수 있어야 합니다. 이러한 요구 사항을 가장 안전하게 충족하는 인증 옵션은 무엇입니까?",
    "options": {
      "A": "인벤토리 애플리케이션 계정에서 DynamoDB 를 AWS Secrets Manager 와 통합합니다. Secrets Manager 의 올바른 암호를 사용하여 DynamoDB 테이블을 인증하고 읽도록 애플리케이션을 구성합니다. 30일마다 비밀 순환을 예약합니다.",
      "B": "모든 비즈니스 계정에서 프로그래밍 방식 액세스 권한이 있는 IAM 사용자를 생성합니다. 올바른 IAM 사용자 액세스 키 ID 와 보안 액세스 키를 사용하여 DynamoDB 테이블을 인증하고 읽도록 애플리케이션을 구성합니다. 30 일마다 IAM 액세스 키를 수동으로 교체합니다.",
      "C": "모든 비즈니스 계정에서 DynamoDB 테이블에 대한 역할 액세스 권한을 부여하는 정책과 인벤토리 애플리케이션 계정의 특정 역할을 신뢰하는 신뢰 정책을 사용하여 BU_ROLE 이라는 IAM 역할을 생성합니다. 인벤토리 계정에서 STS AssumeRole API 작업에 대한 액세스를 허용하는 APP_ROLE 이라는 역할을 생성합니다. APP_ROLE 을 사용하도록 애플리케이션을 구성하고 DynamoDB 테이블을 읽기 위해 교차 계정 역할 BU_ROLE 을 수임합니다.",
      "D": "DynamoDB 를 AWS Certificate Manager(ACM)와 통합합니다. DynamoDB 를 인증하기 위해 ID 인증서를 생성합니다. 올바른 인증서를 사용하여 DynamoDB 테이블을 인증하고 읽도록 애플리케이션을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 교차 계정 역할 수임 — 다른 계정의 리소스 접근\n▸ AssumeRole — 임시 자격증명 획득\n▸ Trust Policy — 누가 역할을 수임할 수 있는지 정의\n\n【정답 포인트】\n▸ BU_ROLE = 각 비즈니스 계정의 DynamoDB 접근 권한 보유\n▸ APP_ROLE = 인벤토리 계정에서 BU_ROLE 수임 가능\n▸ 임시 자격증명 사용 → 키 순환 불필요, 보안 최고\n\n【오답 체크】\n(A) 고정 자격증명 + 수동 순환 — 보안 약함\n(B) IAM 사용자 액세스 키 — 장기 자격증명, 위험\n(D) ACM은 HTTPS용, DynamoDB 인증 아님\n\n【시험 포인트】\n\"교차 계정 + 최고 보안\" = AssumeRole 기반 설계"
  },
  {
    "id": 522,
    "question": "회사는 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용하여 컨테이너 애플리케이션을 실행합니다. 회사의 작업량은 하루 종일 일정하지 않습니다. 회사는 Amazon EKS가 워크로드에 따라 확장 및 축소되기를 원합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개 선택)",
    "options": {
      "A": "AWS Lambda 함수를 사용하여 EKS 클러스터의 크기를 조정합니다.",
      "B": "Kubernetes Metrics Server를 사용하여 수평적 포드 자동 확장을 활성화합니다.",
      "C": "Kubernetes Cluster Autoscaler를 사용하여 클러스터의 노드 수를 관리합니다.",
      "D": "Amazon API Gateway를 사용하여 Amazon EKS에 연결합니다.",
      "E": "AWS App Mesh를 사용하여 네트워크 활동을 관찰합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ HPA (Horizontal Pod Autoscaling) — 포드 복제본 수 조정\n▸ Cluster Autoscaler — 노드 수 조정\n▸ Metrics Server — CPU/메모리 메트릭 제공\n\n【정답 포인트】\n▸\n(B) +\n(C) 조합: 두 계층 자동 확장\n▸ HPA = 포드 수 늘림 (앱 레벨)\n▸ Cluster Autoscaler = 노드 수 늘림 (인프라 레벨)\n▸ 자동화 → 최소 운영 오버헤드\n\n【오답 체크】\n(A) Lambda로 수동 조정 → 자동화 부족\n(D) API Gateway — EKS 연결 역할 아님\n(E) App Mesh — 트래픽 관찰, 자동 확장 아님\n\n【시험 포인트】\n\"운영 최소 + 자동 확장\" = 이중 오토스케일러"
  },
  {
    "id": 523,
    "question": "회사에서 마이크로서비스 기반 서버리스 웹 애플리케이션을 실행합니다. 애플리케이션은 여러 Amazon DynamoDB 테이블에서 데이터를 검색할 수 있어야 합니다. 솔루션 설계자는 애플리케이션의 기본 성능에 영향을 주지 않고 데이터를 검색할 수 있는 기능을 애플리케이션에 제공해야 합니다. 운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS AppSync 파이프라인 해석기",
      "B": "Lambda@Edge 기능이 있는 Amazon CloudFront",
      "C": "AWS Lambda 함수를 사용하는 엣지 최적화 Amazon API Gateway",
      "D": "DynamoDB 커넥터를 사용한 Amazon Athena Federated Query"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Federated Query — 여러 데이터 소스 동시 쿼리\n▸ Athena — SQL 기반 데이터 분석\n▸ DynamoDB 커넥터 — DynamoDB를 Athena에서 접근\n\n【정답 포인트】\n▸ 여러 DynamoDB 테이블 동시 조회 필요\n▸ Athena + Federated Query = 단일 SQL로 통합 조회\n▸ 메인 앱 성능 영향 없음 (별도 쿼리 엔진)\n▸ 운영 오버헤드 최소 (관리형 서비스)\n\n【오답 체크】\n(A) AppSync — GraphQL 레이어, DynamoDB 직접 다중 테이블 쿼리는 적합 아님\n(B) CloudFront — 캐싱용, 데이터 검색 조율 아님\n(C) API Gateway + Lambda — 앱 성능 영향 가능\n\n【시험 포인트】\n\"다중 테이블 + 비동기 + 성능 영향 없음\" = Athena Federated"
  },
  {
    "id": 524,
    "question": "회사에서 IAM 권한과 관련된 액세스 거부 오류 및 무단 오류를 분석하고 문제를 해결하려고 합니다. 회사에서 AWS CloudTrail을 켰습니다. 최소한의 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue를 사용하고 사용자 지정 스크립트를 작성하여 오류에 대한 CloudTrail 로그를 쿼리합니다.",
      "B": "AWS Batch 를 사용하고 사용자 지정 스크립트를 작성하여 오류에 대한 CloudTrail 로그를 쿼리합니다.",
      "C": "Amazon Athena 쿼리로 CloudTrail 로그를 검색하여 오류를 식별합니다.",
      "D": "Amazon QuickSight 로 CloudTrail 로그를 검색합니다. 오류를 식별하는 대시보드를 만듭니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudTrail 로그 — S3에 저장, 파케이 형식\n▸ Athena — S3 데이터를 SQL로 직접 쿼리\n▸ 최소 노력 — 스크립트 작성 불필요\n\n【정답 포인트】\n▸ Athena = 서버리스 SQL 쿼리 엔진\n▸ CloudTrail 로그는 S3에 저장 → Athena에서 바로 분석\n▸ 설정만으로 즉시 쿼리 가능 → 최소 운영 오버헤드\n\n【오답 체크】\n(A) Glue + 스크립트 — ETL 파이프라인 필요\n(B) Batch + 스크립트 — 컴퓨팅 인스턴스 관리 필요\n(D) QuickSight — 시각화용, 쿼리보다는 대시보드\n\n【시험 포인트】\n\"로그 쿼리 + 최소 노력\" = Athena 직접 쿼리"
  },
  {
    "id": 525,
    "question": "회사에서 기존 AWS 사용 비용을 운영 비용 대시보드에 추가하려고 합니다. 솔루션 설계자는 회사가 프로그래밍 방식으로 사용 비용에 액세스할 수 있는 솔루션을 추천해야 합니다. 회사는 현재 연도의 비용 데이터에 액세스하고 향후 12 개월의 비용을 예측할 수 있어야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "페이지 매김과 함께 AWS Cost Explorer API 를 사용하여 사용 비용 관련 데이터에 액세스합니다.",
      "B": "다운로드 가능한 AWS Cost Explorer 보고서 .csv 파일을 사용하여 사용 비용 관련 데이터에 액세스합니다.",
      "C": "FTP를 통해 회사에 사용 비용 데이터를 전송하도록 AWS 예산 작업을 구성합니다.",
      "D": "사용 비용 데이터에 대한 AWS 예산 보고서를 생성합니다. SMTP 를 통해 회사에 데이터를 보냅니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Cost Explorer API — 프로그래밍 방식 비용 데이터 접근\n▸ Pagination — 대량 데이터 처리\n▸ 예측 기능 — 미래 비용 추정\n\n【정답 포인트】\n▸ \"프로그래밍 방식\" → API 필수\n▸ Cost Explorer API = 과거 데이터 + 예측 데이터 제공\n▸ 자동화된 대시보드 통합 가능\n▸ 최소 수작업 필요\n\n【오답 체크】\n(B) CSV 다운로드 — 수동, 자동화 어려움\n(C) FTP — 오래된 프로토콜, Budgets는 배포 용도\n(D) Budgets 보고서 — 경보용, 예측 API 아님\n\n【시험 포인트】\n\"프로그래밍 + 예측\" = Cost Explorer API 선택"
  },
  {
    "id": 526,
    "question": "솔루션 설계자가 애플리케이션의 복원력을 검토하고 있습니다. 솔루션 설계자는 최근에 데이터베이스 관리자가 확장 연습의 일부로 애플리케이션의 Amazon Aurora PostgreSQL 데이터베이스 작성자 인스턴스를 장애 조치했음을 확인했습니다. 장애 조치로 인해 애플리케이션에 3분의 다운타임이 발생했습니다. 최소한의 운영 오버헤드로 확장 연습의 중단 시간을 줄이는 솔루션은 무엇입니까?",
    "options": {
      "A": "장애 조치 중 로드를 처리하기 위해 클러스터에서 더 많은 Aurora PostgreSQL 읽기 전용 복제본을 생성합니다.",
      "B": "동일한 AWS 리전에서 보조 Aurora PostgreSQL 클러스터를 설정합니다. 장애 조치 중에 보조 클러스터의 작성자 엔드포인트를 사용하도록 애플리케이션을 업데이트합니다.",
      "C": "장애 조치 중 로드를 처리할 Amazon ElastiCache for Memcached 클러스터를 생성합니다.",
      "D": "데이터베이스에 대한 Amazon RDS 프록시를 설정합니다. 프록시 엔드포인트를 사용하도록 애플리케이션을 업데이트합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ RDS Proxy — DB 연결 풀링, 장애 조치 빠르게 처리\n▸ Connection Pooling — 연결 재사용\n▸ Failover Detection — 자동 감지 후 재연결\n\n【정답 포인트】\n▸ 장애 조치 감지 후 애플리케이션이 다시 연결하는 시간 = 3분\n▸ RDS Proxy = 프록시가 자동으로 새 쓰기 인스턴스로 라우팅\n▸ 애플리케이션 재연결 대기 시간 감소 → 다운타임 단축\n▸ 최소 운영 오버헤드 (관리형 프록시)\n\n【오답 체크】\n(A) 읽기 복제본 — 읽기 전용, 쓰기 장애 조치 도움 아님\n(B) 보조 클러스터 — 높은 수동 조작, 앱 수정 필요\n(C) ElastiCache — 캐싱용, DB 장애 조치 문제 해결 아님\n\n【시험 포인트】\n\"장애 조치 다운타임 단축\" = RDS Proxy 투명 라우팅"
  },
  {
    "id": 527,
    "question": "한 회사에 단일 AWS 리전에서 실행되는 리전 구독 기반 스트리밍 서비스가 있습니다. 아키텍처는 Amazon EC2 인스턴스의 웹 서버와 애플리케이션 서버로 구성됩니다. EC2 인스턴스는 Elastic Load Balancer 뒤의 Auto Scaling 그룹에 있습니다. 아키텍처에는 여러 가용 영역에 걸쳐 확장되는 Amazon Aurora 글로벌 데이터베이스 클러스터가 포함됩니다. 이 회사는 전 세계적으로 확장하고 응용 프로그램의 가동 중지 시간을 최소화하기를 원합니다. 어떤 솔루션이 가장 내결함성을 제공합니까?",
    "options": {
      "A": "웹 계층 및 애플리케이션 계층에 대한 Auto Scaling 그룹을 확장하여 두 번째 리전의 가용 영역에 인스턴스를 배포합니다. Aurora 글로벌 데이터베이스를 사용하여 기본 리전과 두 번째 리전에 데이터베이스를 배포합니다. 두 번째 리전에 대한 장애 조치 라우팅 정책과 함께 Amazon Route 53 상태 확인을 사용합니다.",
      "B": "웹 계층과 애플리케이션 계층을 두 번째 리전에 배포합니다. 두 번째 리전에 Aurora PostgreSQL 교차 리전 Aurora 복제본을 추가합니다. 두 번째 리전에 대한 장애 조치 라우팅 정책과 함께 Amazon Route 53 상태 확인을 사용합니다. 필요에 따라 보조를 기본으로 승격합니다.",
      "C": "웹 계층과 애플리케이션 계층을 두 번째 리전에 배포합니다. 두 번째 리전에서 Aurora PostgreSQL 데이터베이스를 생성합니다. AWS Database Migration Service(AWS DMS)를 사용하여 기본 데이터베이스를 두 번째 리전에 복제합니다. 두 번째 리전에 대한 장애 조치 라우팅 정책과 함께 Amazon Route 53 상태 확인을 사용합니다.",
      "D": "웹 계층과 애플리케이션 계층을 두 번째 지역에 배포합니다. Amazon Aurora 글로벌 데이터베이스를 사용하여 기본 리전과 두 번째 리전에 데이터베이스를 배포합니다. 두 번째 리전에 대한 장애 조치 라우팅 정책과 함께 Amazon Route 53 상태 확인을 사용합니다. 필요에 따라 보조를 기본으로 승격합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Aurora 글로벌 데이터베이스 — 다중 리전 읽기, 빠른 승격\n▸ 자동 장애 조치 — 최소 가동 중지 시간\n▸ 다중 리전 앱 계층 — RPO/RTO 최소화\n\n【정답 포인트】\n▸\n(D) = 완전한 다중 리전 아키텍처\n▸ 앱 계층 + 글로벌 DB 함께 배포\n▸ 글로벌 DB = 자동 리플리카, 빠른 승격 (1초 미만)\n▸ Route 53 헬스체크 = 장애 자동 감지\n▸ 최고의 내결함성 + RTO 최소\n\n【오답 체크】\n(A) 글로벌 DB 있지만 앱 계층 배포 불완전\n(B) 교차 리전 복제본 — 승격 수동, 시간 걸림\n(C) DMS 복제 — 지속적 동기화 아님, 승격 후 데이터 일관성 문제\n\n【시험 포인트】\n\"다중 리전 + 최소 가동 중지\" = Aurora Global DB + 앱 다중 리전"
  },
  {
    "id": 528,
    "question": "데이터 분석 회사에서 일괄 처리 시스템을 AWS 로 마이그레이션하려고 합니다. 회사는 FTP 를 통해 하루 동안 주기적으로 수천 개의 작은 데이터 파일을 받습니다. 온프레미스 배치 작업은 밤새 데이터 파일을 처리합니다. 그러나 배치 작업 실행을 완료하는 데 몇 시간이 걸립니다. 회사는 AWS 솔루션이 파일을 전송하는 FTP 클라이언트에 대한 변경을 최소화하면서 가능한 한 빨리 수신 데이터 파일을 처리하기를 원합니다. 파일이 성공적으로 처리된 후 솔루션은 수신 데이터 파일을 삭제해야 합니다. 각 파일을 처리하는 데 3~8 분이 소요됩니다. 운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "FTP 서버를 실행하는 Amazon EC2 인스턴스를 사용하여 수신 파일을 Amazon S3 Glacier Flexible Retrieval의 객체로 저장합니다. AWS Batch에서 작업 대기열을 구성합니다. Amazon EventBridge 규칙을 사용하여 S3 Glacier Flexible Retrieval 에서 야간에 객체를 처리하는 작업을 호출합니다. 작업이 개체를 처리한 후 개체를 삭제합니다.",
      "B": "FTP 서버를 실행하는 Amazon EC2 인스턴스를 사용하여 수신 파일을 Amazon Elastic Block Store(Amazon EBS) 볼륨에 저장합니다. AWS Batch에서 작업 대기열을 구성합니다. Amazon EventBridge 규칙을 사용하여 EBS 볼륨에서 야간에 파일을 처리하는 작업을 호출합니다. 작업이 파일을 처리한 후 파일을 삭제합니다.",
      "C": "AWS Transfer Family를 사용하여 들어오는 파일을 Amazon Elastic Block Store(Amazon EBS) 볼륨에 저장할 FTP 서버를 생성합니다. AWS Batch 에서 작업 대기열을 구성합니다. 각 파일이 도착하면 Amazon S3 이벤트 알림을 사용하여 AWS Batch 에서 작업을 호출합니다. 작업이 파일을 처리한 후 파일을 삭제합니다.",
      "D": "AWS Transfer Family 를 사용하여 Amazon S3 Standard 에 수신 파일을 저장할 FTP 서버를 생성합니다. 파일을 처리하고 처리 후 파일을 삭제하는 AWS Lambda 함수를 생성합니다. 파일이 도착하면 S3 이벤트 알림을 사용하여 Lambda 함수를 호출합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Transfer Family — AWS 관리형 FTP 서버\n▸ S3 이벤트 알림 — 파일 도착 즉시 트리거\n▸ 즉시 처리 — 야간 배치 아님\n\n【정답 포인트】\n▸ FTP 클라이언트 변경 최소 = Transfer Family 사용\n▸ \"가능한 한 빨리\" 처리 = S3 이벤트 알림 즉시 트리거\n▸ 3~8분 처리 시간 = Lambda 가능 (최대 15분) → Batch도 적합\n▸\n(C) Batch = 더 긴 작업도 처리 가능\n\n【오답 체크】\n(A) S3 Glacier — 야간만 처리, 즉시 처리 아님\n(B) EBS 저장 — S3 이벤트 알림 사용 불가, EventBridge 스케줄링 필요\n(D) Lambda — 3~8분 처리는 Lambda 타임아웃 위험 (15분 제한)\n\n【시험 포인트】\n\"즉시 처리 + FTP 호환 + 관리형\" = Transfer Family + S3 + Batch"
  },
  {
    "id": 529,
    "question": "회사에서 워크로드를 AWS 로 마이그레이션하고 있습니다. 회사는 데이터베이스에 거래 및 민감한 데이터를 가지고 있습니다. 이 회사는 AWS 클라우드 솔루션을 사용하여 보안을 강화하고 데이터베이스의 운영 오버헤드를 줄이려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터베이스를 Amazon EC2 로 마이그레이션합니다. 암호화에 AWS Key Management Service(AWS KMS) AWS 관리형 키를 사용합니다.",
      "B": "데이터베이스를 Amazon RDS로 마이그레이션 유휴 암호화 구성.",
      "C": "데이터를 Amazon S3 로 마이그레이션합니다. 데이터 보안 및 보호를 위해 Amazon Macie를 사용합니다.",
      "D": "데이터베이스를 Amazon RDS 로 마이그레이션합니다. 데이터 보안 및 보호를 위해 Amazon CloudWatch Logs를 사용하십시오."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ RDS — 관리형 데이터베이스 서비스\n▸ 유휴 암호화 — At-rest 데이터 암호화\n▸ 운영 오버헤드 감소 — 관리형 서비스\n\n【정답 포인트】\n▸ 보안 강화 + 운영 오버헤드 감소 = 관리형 DB\n▸ RDS = 자동 패치, 백업, 복제 관리\n▸ 유휴 암호화 = 데이터 보안 기본 제공\n▸ EC2보다 훨씬 적은 운영 부담\n\n【오답 체크】\n(A) EC2 — 관리형 아님, 운영 오버헤드 최대\n(C) S3 + Macie — 데이터베이스가 아님, 거래 시스템 부적합\n(D) CloudWatch Logs — 모니터링, 보안 아님\n\n【시험 포인트】\n\"보안 + 운영 효율\" = RDS 관리형 서비스 + 암호화"
  },
  {
    "id": 530,
    "question": "회사에 TCP 및 UDP 멀티플레이어 게임 기능이 있는 온라인 게임 응용 프로그램이 있습니다. 이 회사는 Amazon Route 53을 사용하여 애플리케이션 트래픽이 서로 다른 AWS 리전에 있는 여러 NLB(Network Load Balancer)를 가리키도록 합니다. 회사는 사용자 증가에 대비하여 애플리케이션 성능을 개선하고 온라인 게임의 지연 시간을 줄여야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "NLB 앞에 Amazon CloudFront 배포를 추가합니다. Cache-Control max-age 매개변수를 늘리십시오.",
      "B": "NLB 를 ALB(Application Load Balancer)로 교체합니다. 지연 시간 기반 라우팅을 사용하도록 Route 53을 구성합니다.",
      "C": "NLB 앞에 AWS Global Accelerator 를 추가합니다. 올바른 수신기 포트를 사용하도록 Global Accelerator 끝점을 구성합니다.",
      "D": "NLB 뒤에 Amazon API Gateway 엔드포인트를 추가합니다. API 캐싱을 활성화합니다. 다른 단계에 대한 메서드 캐싱을 재정의합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Global Accelerator — Anycast IP, 글로벌 저지연 라우팅\n▸ TCP/UDP 지원 — 프로토콜 제약 없음\n▸ NLB 최적화 — 게임용 저지연 로드밸런서\n\n【정답 포인트】\n▸ TCP/UDP 모두 필요 → Global Accelerator 필수\n▸ Global Accelerator = Anycast 글로벌 가속\n▸ 지연시간 최소화 (Route 53보다 우수)\n▸ NLB와 완벽 호환\n\n【오답 체크】\n(A) CloudFront — HTTP/HTTPS 캐싱용, TCP/UDP 게임 부적합\n(B) ALB — Layer 7, TCP/UDP 게임 트래픽 부적합\n(D) API Gateway — API용, 게임 프로토콜 지원 아님\n\n【시험 포인트】\n\"TCP/UDP 게임 + 글로벌 저지연\" = Global Accelerator + NLB"
  },
  {
    "id": 531,
    "question": "회사는 타사 데이터 피드와 통합해야 합니다. 데이터 피드는 웹후크를 보내 새 데이터를 사용할 준비가 되면 외부 서비스에 알립니다. 개발자는 회사에서 웹후크 콜백을 수신할 때 데이터를 검색하는 AWS Lambda 함수를 작성했습니다. 개발자는 제 3 자가 호출할 수 있도록 Lambda 함수를 제공해야 합니다. 이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Lambda 함수에 대한 함수 URL 을 생성합니다. Webhook 에 대한 Lambda 함수 URL 을 타사에 제공합니다.",
      "B": "Lambda 함수 앞에 ALB(Application Load Balancer)를 배포합니다. Webhook 에 대한 ALB URL을 타사에 제공합니다.",
      "C": "Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. Lambda 함수에 주제를 연결합니다. Webhook 에 대한 제 3 자에게 SNS 주제의 공개 호스트 이름을 제공합니다.",
      "D": "Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. 대기열을 Lambda 함수에 연결합니다. Webhook 에 대해 타사에 SQS 대기열의 공개 호스트 이름을 제공합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Lambda Function URL — Lambda에 직접 HTTP 엔드포인트 제공\n▸ Webhook 수신 — HTTP POST 콜백\n▸ 최소 구성 — 외부 서비스 불필요\n\n【정답 포인트】\n▸ Function URL = Lambda 버전 2023년 추가 기능\n▸ 직접 HTTPS 엔드포인트 생성 → 타사 직접 호출 가능\n▸ ALB, SNS, SQS 없이도 Webhook 수신 가능\n▸ 최소 운영 오버헤드, 최고 효율성\n\n【오답 체크】\n(B) ALB — Lambda 앞에 로드밸런서 불필요\n(C) SNS — 푸시 알림용, Webhook 수신 아님\n(D) SQS — 큐 기반, Webhook 직접 수신 아님\n\n【시험 포인트】\n\"Webhook + 최소 효율\" = Lambda Function URL 직접 노출"
  },
  {
    "id": 532,
    "question": "회사는 AWS 리전에 워크로드가 있습니다. 고객은 Amazon API Gateway REST API 를 사용하여 워크로드에 연결하고 액세스합니다. 이 회사는 Amazon Route 53 을 DNS 공급자로 사용합니다. 회사는 모든 고객에게 개별적이고 안전한 URL을 제공하고자 합니다. 가장 높은 운영 효율성으로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3 개 선택)",
    "options": {
      "A": "등록기관에 필요한 도메인을 등록합니다. Route 53 호스팅 영역에서 와일드카드 사용자 지정 도메인 이름을 생성하고 API 게이트웨이 엔드포인트를 가리키는 영역에 기록합니다.",
      "B": "다른 리전에 있는 AWS Certificate Manager(ACM)의 도메인과 일치하는 와일드카드 인증서를 요청합니다.",
      "C": "Route 53 에서 필요에 따라 각 고객에 대한 호스팅 영역을 생성합니다. API 게이트웨이 엔드포인트를 가리키는 영역 레코드를 생성합니다.",
      "D": "동일한 리전의 AWS Certificate Manager(ACM)에서 사용자 지정 도메인 이름과 일치하는 와일드카드 인증서를 요청합니다.",
      "E": "API Gateway에서 각 고객에 대해 여러 API 끝점을 만듭니다. F. API Gateway에서 REST API용 사용자 정의 도메인 이름을 생성합니다. AWS Certificate Manager(ACM)에서 인증서를 가져옵니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ 와일드카드 도메인 — *.example.com 형태\n▸ 운영 효율성 — 단일 인증서로 다중 도메인\n▸ API Gateway 사용자 지정 도메인 — 개별 URL 제공\n\n【정답 포인트】\n▸\n(A) 와일드카드 도메인 + Route 53 호스팅 영역\n▸ customer1.example.com, customer2.example.com 등 즉시 지원\n▸\n(D) API Gateway가 있는 동일 리전의 ACM 인증서\n▸ API Gateway는 같은 리전 ACM만 지원\n▸ 단일 와일드카드 인증서로 모든 고객 도메인 보안\n\n【오답 체크】\n(B) 다른 리전 인증서 — API Gateway에서 사용 불가\n(C) 고객당 호스팅 영역 — 과도한 관리, 비효율적\n(E) 고객당 API 끝점 — 운영 부담 증가\n\n【시험 포인트】\n\"와일드카드 + 최고 효율\" = 단일 와일드카드 인증서로 다중 테넌트"
  },
  {
    "id": 533,
    "question": "회사는 Amazon S3 에 데이터를 저장합니다. 규정에 따르면 데이터에는 개인 식별 정보(PII)가 포함되어서는 안 됩니다. 이 회사는 최근 S3 버킷에 PII 가 포함된 일부 개체가 있음을 발견했습니다. 회사는 S3 버킷에서 PII 를 자동으로 감지하고 회사의 보안 팀에 알려야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Macie를 사용하십시오. Amazon EventBridge 규칙을 생성하여 Macie 결과에서 SensitiveData 이벤트 유형을 필터링하고 보안 팀에 Amazon Simple Notification Service(Amazon SNS) 알림을 보냅니다.",
      "B": "Amazon GuardDuty 를 사용합니다. GuardDuty 결과에서 중요한 이벤트 유형을 필터링하고 보안 팀에 Amazon Simple Notification Service(Amazon SNS) 알림을 보내는 Amazon EventBridge 규칙을 생성합니다.",
      "C": "Amazon Macie 를 사용합니다. Amazon EventBridge 규칙을 생성하여 Macie 결과에서 SensitiveData:S3Object/Personal 이벤트 유형을 필터링하고 보안 팀에 Amazon Simple Queue Service(Amazon SQS) 알림을 보냅니다.",
      "D": "Amazon GuardDuty 를 사용합니다. GuardDuty 결과에서 중요한 이벤트 유형을 필터링하고 보안 팀에 Amazon Simple Queue Service(Amazon SQS) 알림을 보내는 Amazon EventBridge 규칙을 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Macie — S3 데이터에서 민감 정보(PII) 자동 감지\n▸ Amazon EventBridge — 이벤트 필터링 및 라우팅\n▸ Amazon SNS — 실시간 알림 전송\n\n【정답 포인트】\n▸ PII 감지 → Amazon Macie 필수 (GuardDuty는 보안 위협 탐지용)\n▸ SensitiveData 이벤트 → Macie의 표준 이벤트 유형\n▸ 실시간 알림 → SNS (SQS는 비동기 큐)\n\n【오답 체크】\n(B) GuardDuty는 EC2, 계정 활동 등 보안 위협 분석용이며 데이터 분류 불가\n(C) S3Object/Personal 필터는 세부적이나 SQS는 실시간성 부족\n(D) GuardDuty + SQS 조합으로 PII 감지 불가능\n\n【시험 포인트】\n Macie (데이터) vs GuardDuty (위협) 구분\n▸ SNS (실시간) vs SQS (비동기) 알림 전략"
  },
  {
    "id": 534,
    "question": "회사에서 여러 AWS 계정에 대한 로깅 솔루션을 구축하려고 합니다. 회사는 현재 모든 계정의 로그를 중앙 집중식 계정에 저장합니다. 회사는 VPC 흐름 로그와 AWS CloudTrail 로그를 저장하기 위해 중앙 집중식 계정에 Amazon S3 버킷을 생성했습니다. 모든 로그는 빈번한 분석을 위해 30 일 동안 가용성이 높아야 하며, 백업 목적으로 추가 60 일 동안 유지되고 생성 후 90일 후에 삭제되어야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "생성 후 30일이 지나면 객체를 S3 Standard 스토리지 클래스로 전환합니다. 90일 후에 객체를 삭제하도록 Amazon S3에 지시하는 만료 작업을 작성합니다.",
      "B": "생성 후 30 일이 지나면 객체를 S3 Standard-Infrequent Access(S3 Standard-IA) 스토리지 클래스로 전환합니다. 90 일 후에 모든 객체를 S3 Glacier Flexible Retrieval 스토리지 클래스로 이동합니다. 90일 후에 객체를 삭제하도록 Amazon S3에 지시하는 만료 작업을 작성합니다.",
      "C": "생성 후 30 일이 지나면 객체를 S3 Glacier Flexible Retrieval 스토리지 클래스로 전환합니다. 90 일 후에 객체를 삭제하도록 Amazon S3 에 지시하는 만료 작업을 작성합니다.",
      "D": "생성 후 30 일이 지나면 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA) 스토리지 클래스로 전환합니다. 90 일 후에 모든 객체를 S3 Glacier Flexible Retrieval 스토리지 클래스로 이동합니다. 90일 후에 객체를 삭제하도록 Amazon S3에 지시하는 만료 작업을 작성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 라이프사이클 정책 — 저장소 클래스 자동 전환\n▸ Glacier Flexible Retrieval — 6시간 검색, 장기 백업용\n▸ 30일/90일 임계값 — 접근 패턴 기반 계층화\n\n【정답 포인트】\n▸ 30일 고빈도 분석 → S3 Standard 유지 필수\n▸ 30~90일 백업 → 중간 비용 절감 필요 (Glacier)\n▸ 단일 전환 규칙 → 30일 기점에 S3 → Glacier 바로 이동\n\n【오답 체크】\n(A) Standard-IA 전환 없이 고비용 유지\n(B) 중복 전환 (IA→Glacier) 으로 복잡성 증가, 60일 분석 요구 불만족\n(D) One Zone-IA (재해복구 취약) + 이중 전환 비효율\n\n【시험 포인트】\n분석 기간 종료 → 즉시 저비용 저장소 전환 전략\n▸ IA 불필요 (단기→장기 직진)"
  },
  {
    "id": 535,
    "question": "회사에서 워크로드를 위해 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 구축하고 있습니다. Amazon EKS 에 저장되는 모든 암호는 Kubernetes etcd 키-값 저장소에서 암호화되어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "새 AWS Key Management Service(AWS KMS) 키를 생성합니다. AWS Secrets Manager를 사용하여 Amazon EKS에서 모든 비밀을 관리, 교체 및 저장하십시오.",
      "B": "새 AWS Key Management Service(AWS KMS) 키를 생성합니다. Amazon EKS 클러스터에서 Amazon EKS KMS 비밀 암호화를 활성화합니다.",
      "C": "기본 옵션으로 Amazon EKS 클러스터를 생성합니다. Amazon Elastic Block Store(Amazon EBS) CSI(Container Storage Interface) 드라이버를 추가 기능으로 사용합니다.",
      "D": "alias/aws/ebs 별칭으로 새 AWS Key Management Service(AWS KMS) 키를 생성합니다. 계정에 대해 기본 Amazon Elastic Block Store(Amazon EBS) 볼륨 암호화를 활성화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ etcd 암호화 — Kubernetes 저장소의 암호화된 저장\n▸ EKS KMS 비밀 암호화 — etcd 내 암호화 활성화\n▸ AWS KMS 키 — 마스터 암호화 키\n\n【정답 포인트】\n▸ etcd 저장소 암호화 → EKS KMS 비밀 암호화 기능 필수\n▸ KMS 키 생성 → EKS 클러스터 설정 시 지정\n▸ 네이티브 EKS 기능 → 별도 애플리케이션 불필요\n\n【오답 체크】\n(A) Secrets Manager는 외부 저장소 (etcd 암호화 아님)\n(C) EBS CSI만으로 etcd 보호 불가\n(D) EBS 기본 암호화는 etcd와 무관 (PV 암호화 아님)\n\n【시험 포인트】\nEKS etcd → KMS 직접 통합 필수\n▸ Secrets Manager는 보안 저장소용 (etcd 암호화 아님)"
  },
  {
    "id": 536,
    "question": "회사에서 PostgreSQL 데이터베이스용 Amazon RDS 프로덕션에 대한 거의 실시간에 가까운 읽기 전용 액세스 권한을 데이터 과학자에게 제공하려고 합니다. 데이터베이스는 현재 단일 AZ 데이터베이스로 구성되어 있습니다. 데이터 과학자는 프로덕션 데이터베이스에 영향을 미치지 않는 복잡한 쿼리를 사용합니다. 회사는 가용성이 높은 솔루션이 필요합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "유지 관리 기간에 기존 프로덕션 데이터베이스를 확장하여 데이터 과학자에게 충분한 성능을 제공합니다.",
      "B": "단일 AZ 에서 더 큰 보조 대기 인스턴스가 있는 다중 AZ 인스턴스 배포로 설정을 변경합니다. 데이터 과학자에게 보조 인스턴스에 대한 액세스 권한을 제공합니다.",
      "C": "단일 AZ 에서 다중 AZ 인스턴스 배포로 설정을 변경합니다. 데이터 과학자를 위한 두 개의 추가 읽기 복제본을 제공합니다.",
      "D": "단일 AZ 에서 2 개의 읽기 가능한 대기 인스턴스가 있는 다중 AZ 클러스터 배포로 설정을 변경합니다. 데이터 과학자에게 읽기 엔드포인트를 제공합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 다중 AZ 클러스터 — 2개 대기 읽기 인스턴스\n▸ 읽기 엔드포인트 — 자동 로드밸런싱\n▸ 복잡 쿼리 격리 — 전용 인스턴스에서 실행\n\n【정답 포인트】\n▸ 고가용성 → 다중 AZ 클러스터 필수\n▸ 읽기 전용 격리 → 2개 대기 인스턴스 활용\n▸ 자동 장애 조치 + 읽기 분산 → 클러스터만 가능\n\n【오답 체크】\n(A) 동적 확장만으로 가용성 미보장\n(B) 대기 인스턴스는 쿼리 불가 (읽기 전용 아님)\n(C) 읽기 복제본은 추가 비용 (클러스터 구조 아님)\n\n【시험 포인트】\nRDS 클러스터 vs 인스턴스 → 다중 읽기 요구\n▸ 클러스터 = 자동 장애조치 + 읽기 분산"
  },
  {
    "id": 537,
    "question": "한 회사가 3 개의 가용 영역에서 작동하는 AWS 클라우드에서 3 계층 웹 애플리케이션을 실행합니다. 애플리케이션 아키텍처에는 Application Load Balancer, 사용자 세션 상태를 호스팅하는 Amazon EC2 웹 서버, EC2 인스턴스에서 실행되는 MySQL 데이터베이스가 있습니다. 회사는 애플리케이션 트래픽이 갑자기 증가할 것으로 예상합니다. 이 회사는 미래의 애플리케이션 용량 수요를 충족하고 3 개의 가용 영역 모두에서 고가용성을 보장하기 위해 확장할 수 있기를 원합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "다중 AZ DB 클러스터 배포를 통해 MySQL 데이터베이스를 MySQL 용 Amazon RDS 로 마이그레이션합니다. 고가용성 Redis 용 Amazon ElastiCache 를 사용하여 세션 데이터를 저장하고 읽기를 캐시하십시오. 세 개의 가용 영역에 있는 Auto Scaling 그룹으로 웹 서버를 마이그레이션합니다.",
      "B": "다중 AZ DB 클러스터 배포를 통해 MySQL 데이터베이스를 MySQL 용 Amazon RDS 로 마이그레이션합니다. 고가용성 Memcached 용 Amazon ElastiCache 를 사용하여 세션 데이터를 저장하고 읽기를 캐시하십시오. 세 개의 가용 영역에 있는 Auto Scaling 그룹으로 웹 서버를 마이그레이션합니다.",
      "C": "MySQL 데이터베이스를 Amazon DynamoDB 로 마이그레이션 DynamoDB Accelerator(DAX)를 사용하여 읽기를 캐시합니다. DynamoDB에 세션 데이터를 저장합니다. 세 개의 가용 영역에 있는 Auto Scaling 그룹으로 웹 서버를 마이그레이션합니다.",
      "D": "단일 가용 영역에서 MySQL 데이터베이스를 MySQL 용 Amazon RDS 로 마이그레이션합니다. 고가용성 Redis 용 Amazon ElastiCache 를 사용하여 세션 데이터를 저장하고 읽기를 캐시하십시오. 세 개의 가용 영역에 있는 Auto Scaling 그룹으로 웹 서버를 마이그레이션합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Redis — 세션 관리 (영속성 필요)\n▸ 다중 AZ RDS 클러스터 — 데이터베이스 고가용성\n▸ Auto Scaling 3AZ — 웹 계층 확장성\n\n【정답 포인트】\n▸ 세션 데이터 → Redis (데이터 유지 + 성능)\n▸ 3AZ 고가용성 → RDS 클러스터 + Auto Scaling\n▸ 데이터베이스 계층 → MySQL RDS 필수\n\n【오답 체크】\n(B) Memcached는 캐시만 (세션 데이터 영속성 X)\n(C) DynamoDB로 MySQL 전체 대체는 스키마 변경 필요\n(D) 단일 AZ RDS는 고가용성 미충족\n\n【시험 포인트】\nRedis vs Memcached → 세션 데이터\n▸ Redis (영속성) vs Memcached (휘발성)"
  },
  {
    "id": 538,
    "question": "글로벌 비디오 스트리밍 회사는 Amazon CloudFront 를 콘텐츠 배포 네트워크(CDN)로 사용합니다. 회사는 여러 국가에 단계적으로 콘텐츠를 배포하려고 합니다. 회사는 회사가 콘텐츠를 배포하는 국가 밖에 있는 시청자가 콘텐츠를 볼 수 없도록 해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "허용 목록을 사용하여 CloudFront 의 콘텐츠에 지리적 제한을 추가합니다. 사용자 지정 오류 메시지를 설정합니다.",
      "B": "제한된 콘텐츠에 대한 새로운 URL 을 설정합니다. 서명된 URL 및 쿠키를 사용하여 액세스 권한을 부여합니다. 사용자 지정 오류 메시지를 설정합니다.",
      "C": "회사가 배포하는 콘텐츠에 대한 데이터를 암호화합니다. 사용자 지정 오류 메시지를 설정합니다.",
      "D": "제한된 콘텐츠에 대한 새 URL 을 만듭니다. 서명된 URL 에 대한 시간 제한 액세스 정책을 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 지리적 제한 — 국가별 접근 제어\n▸ 허용 목록 — 배포 국가만 허락\n▸ CloudFront 네이티브 기능 — 간단한 구현\n\n【정답 포인트】\n▸ 국가 기반 필터링 → 지리적 제한 필수\n▸ 단계적 배포 → 허용 국가 리스트 활용\n▸ 사용자 지정 오류 → 거부된 접근 처리\n\n【오답 체크】\n(B) 서명된 URL은 개인 인증용 (지역 제한 아님)\n(C) 암호화는 접근 제어 아님\n(D) 서명된 URL도 지역 정보 미포함\n\n【시험 포인트】\n지리적 제한 → CloudFront 허용/차단 목록\n▸ 서명된 URL은 개인 콘텐츠용 (지역 제한 X)"
  },
  {
    "id": 539,
    "question": "회사에서 AWS 클라우드를 사용하여 온프레미스 DR(재해 복구) 구성을 개선하려고 합니다. 회사의 핵심 프로덕션 비즈니스 애플리케이션은 가상 머신(VM)에서 실행되는 Microsoft SQL Server Standard 를 사용합니다. 애플리케이션의 RPO(복구 시점 목표)는 30 초 이하이고 RTO(복구 시간 목표)는 60 분입니다. DR 솔루션은 가능한 한 비용을 최소화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Always On 가용성 그룹과 함께 Microsoft SQL Server Enterprise를 사용하여 온프레미스 서버와 AWS 간에 다중 사이트 활성/활성 설정을 구성합니다.",
      "B": "AWS에서 SQL Server 데이터베이스용 웜 대기 Amazon RDS를 구성합니다. 변경 데이터 캡처(CDC)를 사용하도록 AWS DMS(AWS Database Migration Service)를 구성합니다.",
      "C": "디스크 변경 사항을 AWS 에 파일럿 라이트로 복제하도록 구성된 AWS Elastic Disaster Recovery를 사용합니다.",
      "D": "타사 백업 소프트웨어를 사용하여 매일 밤 백업을 캡처합니다. Amazon S3에 보조 백업 세트를 저장합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ RPO 30초 → 거의 실시간 복제 필수\n▸ RTO 60분 → 빠른 복구 필요\n▸ 웜 대기 + CDC → 지속적 데이터 동기화\n\n【정답 포인트】\n▸ DMS CDC → 초단위 복제 가능\n▸ RDS 웜 대기 → 즉시 활성화 가능\n▸ SQL Server Standard → Enterprise 불필요\n\n【오답 체크】\n(A) Always On은 고비용 + Standard 미지원\n(C) Elastic DR은 VM 수준 (데이터 RPO 미충족)\n(D) 일일 백업은 RPO 30초 미달성\n\n【시험 포인트】\nRPO/RTO vs 비용 → DMS CDC 활용\n▸ 웜 대기 RDS = 빠른 장애조치"
  },
  {
    "id": 540,
    "question": "회사에는 Oracle 데이터베이스를 사용하여 고객 정보를 처리하고 저장하는 온프레미스 서버가 있습니다. 이 회사는 AWS 데이터베이스 서비스를 사용하여 더 높은 가용성을 달성하고 애플리케이션 성능을 개선하고자 합니다. 회사는 또한 기본 데이터베이스 시스템에서 보고를 오프로드하려고 합니다. 운영상 가장 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Database Migration Service(AWS DMS)를 사용하여 여러 AWS 리전에서 Amazon RDS DB 인스턴스를 생성합니다. 보고 기능은 기본 DB 인스턴스와 별도의 DB 인스턴스를 가리킵니다.",
      "B": "단일 AZ 배포에서 Amazon RDS 를 사용하여 Oracle 데이터베이스를 생성합니다. 기본 DB 인스턴스와 동일한 영역에 읽기 전용 복제본을 생성합니다. 보고 기능을 읽기 전용 복제본으로 지정합니다.",
      "C": "다중 AZ 클러스터 배포에 배포된 Amazon RDS 를 사용하여 Oracle 데이터베이스를 생성합니다. 클러스터 배포에서 리더 인스턴스를 사용하도록 보고 기능에 지시합니다.",
      "D": "다중 AZ 인스턴스 배포에 배포된 Amazon RDS 를 사용하여 Amazon Aurora 데이터베이스를 생성합니다. 보고 기능을 판독기 인스턴스에 지시합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ RDS 클러스터 — 고가용성 + 읽기 복제본\n▸ 리더 인스턴스 — 전용 보고 쿼리 실행\n▸ Oracle → RDS 관리형 — 운영 효율성\n\n【정답 포인트】\n▸ 고가용성 → 다중 AZ 클러스터\n▸ 보고 오프로드 → 리더 인스턴스 활용\n▸ 단일 엔진 → Oracle RDS 필수\n\n【오답 체크】\n(A) 다중 리전은 불필요한 복잡성\n(B) 단일 AZ는 가용성 미충족\n(D) Aurora는 Oracle 호환 없음 (마이그레이션 필요)\n\n【시험 포인트】\nRDS 인스턴스 vs 클러스터 → 읽기 복제본 필요\n▸ 클러스터 리더 = 자동 장애조치 + 읽기 분산"
  },
  {
    "id": 541,
    "question": "회사에서 AWS 에서 웹 애플리케이션을 구축하려고 합니다. 웹 사이트에 대한 클라이언트 액세스 요청은 예측할 수 없으며 오랫동안 유휴 상태일 수 있습니다. 가입비를 지불한 고객만이 웹 애플리케이션에 로그인하고 사용할 수 있습니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "Amazon DynamoDB 에서 사용자 정보를 검색하는 AWS Lambda 함수를 생성합니다. RESTful API를 수락할 Amazon API Gateway 엔드포인트를 생성합니다. API 호출을 Lambda 함수로 보냅니다.",
      "B": "Application Load Balancer 뒤에 Amazon Elastic Container Service(Amazon ECS) 서비스를 생성하여 Amazon RDS 에서 사용자 정보를 검색합니다. RESTful API 를 수락할 Amazon API Gateway 엔드포인트를 생성합니다. API 호출을 Lambda 함수로 보냅니다.",
      "C": "사용자를 인증하기 위해 Amazon Cognito 사용자 풀을 생성합니다.",
      "D": "사용자를 인증하기 위해 Amazon Cognito 자격 증명 풀을 생성합니다.",
      "E": "AWS Amplify를 사용하여 HTML, CSS 및 JS로 프런트엔드 웹 콘텐츠를 제공합니다. 통합 Amazon CloudFront 구성을 사용합니다. F. PHP, CSS 및 JS 와 함께 Amazon S3 정적 웹 호스팅을 사용합니다. Amazon CloudFront를 사용하여 프런트엔드 웹 콘텐츠를 제공합니다."
    },
    "answer": "ACE",
    "explanation": "【핵심 용어】\n▸ Lambda + API Gateway — 서버리스 비용 최적화\n▸ Cognito 사용자 풀 — 구독 기반 인증\n▸ AWS Amplify — CloudFront 통합 정적 호스팅\n\n【정답 포인트】\n▸ A) Lambda (DynamoDB) — 예측 불가한 트래픽 최적\n▸ C) Cognito 사용자 풀 — 가입비 결제 인증 관리\n▸ E) Amplify + CloudFront — 정적 콘텐츠 배포\n\n【오답 체크】\n(B) ECS + ALB는 상시 실행 비용 발생\n(D) 자격 증명 풀은 AWS 권한 관리 (사용자 인증 X)\n(F) PHP는 정적 호스팅 불가 (서버리스 위배)\n\n【시험 포인트】\n유휴 기간 많음 → 서버리스 (Lambda)\n▸ Cognito 사용자 풀 vs 자격 증명 풀 구분\n▸ Amplify는 CloudFront 기본 통합"
  },
  {
    "id": 542,
    "question": "미디어 회사는 Amazon CloudFront 배포를 사용하여 인터넷을 통해 콘텐츠를 제공합니다. 회사는 프리미엄 고객만 미디어 스트림과 파일 콘텐츠에 액세스할 수 있기를 원합니다. 회사는 모든 콘텐츠를 Amazon S3 버킷에 저장합니다. 회사는 또한 영화 대여나 음악 다운로드와 같은 특정 목적을 위해 주문형 콘텐츠를 고객에게 제공합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 서명 쿠키를 생성하여 프리미엄 고객에게 제공합니다.",
      "B": "프리미엄 고객에게 CloudFront 서명 URL을 생성하고 제공합니다.",
      "C": "원본 액세스 제어(OAC)를 사용하여 비프리미엄 고객의 액세스를 제한합니다.",
      "D": "비프리미엄 고객을 차단하기 위해 필드 수준 암호화를 생성하고 활성화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudFront 서명 URL — 시간 제한 접근\n▸ 주문형 콘텐츠 — 일회 또는 기간 제한 배포\n▸ 프리미엄 고객 인증 — URL 기반 임시 접근\n\n【정답 포인트】\n▸ 서명 URL → 시간 제한으로 주문형 구현\n▸ CloudFront 단계 — S3 전면 배치\n▸ 개인별 접근 제어 → URL 기반 최적\n\n【오답 체크】\n(A) S3 서명 쿠키는 CloudFront 미사용 (CDN 이점 상실)\n(C) OAC는 S3 프라이빗 접근 (개인 인증 X)\n(D) 필드 암호화는 차단 메커니즘 아님\n\n【시험 포인트】\nCloudFront 콘텐츠 제한 → 서명 URL\n▸ 쿠키 vs URL → URL이 주문형에 최적\n▸ OAC는 S3 무단 접근 방지용"
  },
  {
    "id": 543,
    "question": "회사는 개별적으로 블리딩된 여러 AWS 계정에서 Amazon EC2 인스턴스를 실행합니다. 이 회사는 최근 저축 피안을 구입했습니다. 회사의 비즈니스 요구 사항 변경으로 인해 회사는 많은 수의 EC2 인스턴스를 폐기했습니다. 회사는 다른 AWS 계정에서 Savings Plan 할인을 사용하려고 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "마스터 계정의 AWS 계정 관리 콘솔에서 결제 기본 설정 섹션의 할인 공유를 켭니다.",
      "B": "기존 Savings Plan 을 구매한 계정의 AWS 계정 관리 콘솔에서 결제 기본 설정 섹션의 할인 공유를 켭니다. 모든 계정을 포함합니다.",
      "C": "AWS Organizations 마스터 계정에서 AWS Resource Access Manager(AWS RAM)를 사용하여 다른 계정과 Savings Plan을 공유합니다.",
      "D": "새 지급인 계정의 AWS Organizations 에서 조직을 생성합니다. 다른 AWS 계정을 초대하여 마스터 계정에서 조직에 가입합니다.",
      "E": "기존 EC2 인스턴스 및 Savings Plan 을 사용하여 기존 AWS 계정의 AWS Organizations 에 조직을 생성합니다. 다른 AWS 계정을 초대하여 마스터 계정에서 조직에 가입합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ 할인 공유 — Savings Plan을 조직 전체 사용\n▸ AWS Organizations — 마스터 계정 통합 관리\n▸ 빌링 기본 설정 — Savings Plan 호환 활성화\n\n【정답 포인트】\n▸ A) 마스터 계정 할인 공유 활성화 필수\n▸ E) 조직 구조 생성 (마스터 + 멤버 계정)\n▸ 두 단계 → 조직 + 할인 공유 설정\n\n【오답 체크】\n(B) 구매 계정 설정은 마스터 아님\n(C) AWS RAM은 Savings Plan 공유 불가\n(D) 새 계정 생성은 기존 계정 활용 위배\n\n【시험 포인트】\nSavings Plan 공유 → Organizations + 할인 공유\n▸ 마스터 계정에서 공유 활성화 필수\n▸ AWS RAM은 공유 리소스용 (SP 제외)"
  },
  {
    "id": 544,
    "question": "소매 회사는 퍼블릭 REST API 에 지역 Amazon API Gateway API 를 사용합니다. API Gateway 엔드포인트는 Amazon Route 53 별칭 레코드를 가리키는 사용자 지정 도메인 이름입니다. 솔루션 아키텍트는 고객에게 최소한의 영향을 미치고 데이터 손실을 최소화하는 솔루션을 생성하여 새 버전의 API를 릴리스해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "API 게이트웨이에 대한 카나리아 릴리스 배포 단계를 생성합니다. 최신 API 버전을 배포합니다. 트래픽의 적절한 비율을 카나리아 단계로 지정합니다. API 검증 후 카나리아 단계를 프로덕션 단계로 승격합니다.",
      "B": "OpenAPI YAML 파일 형식의 새 API 버전으로 새 API 게이트웨이 엔드포인트를 생성합니다. API Gateway 의 API 에 병합 모드에서 가져오기-업데이트 작업을 사용합니다. API의 새 버전을 프로덕션 단계에 배포합니다.",
      "C": "OpenAPI JSON 파일 형식의 새 API 버전으로 새 API 게이트웨이 엔드포인트를 생성합니다. 덮어쓰기 모드에서 업데이트로 가져오기 작업을 API Gateway 의 API 에 사용합니다. API의 새 버전을 프로덕션 단계에 배포합니다.",
      "D": "API 정의의 새 버전으로 새 API 게이트웨이 엔드포인트를 생성합니다. 새 API Gateway API 에 대한 사용자 지정 도메인 이름을 생성합니다. Route 53 별칭 레코드가 새 API Gateway API 사용자 지정 도메인 이름을 가리키도록 합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 카나리아 배포 — 일부 트래픽만 새 버전으로\n▸ 점진적 롤아웃 — 위험 최소화\n▸ 단일 도메인 — Route 53 재설정 불필요\n\n【정답 포인트】\n▸ 카나리아 단계 → API Gateway 네이티브 기능\n▸ 트래픽 분산 → 점진적 검증 가능\n▸ 프로덕션 승격 → 자동 장애조치 지원\n\n【오답 체크】\n(B) YAML 병합은 정의 수정 (배포 전략 아님)\n(C) JSON 덮어쓰기는 기존 API 삭제 위험\n(D) Route 53 변경 → 다운타임 위험\n\n【시험 포인트】\n최소 영향 배포 → 카나리아 (단일 API 내)\n▸ 새 엔드포인트 생성은 도메인 전환 필요"
  },
  {
    "id": 545,
    "question": "회사는 회사의 기본 웹 사이트를 사용할 수 없는 경우 사용자를 백업 정적 오류 페이지로 안내하려고 합니다. 기본 웹 사이트의 DNS 레코드는 Amazon Route 53에서 호스팅됩니다. 도메인은 Application Load Balancer(ALB)를 가리킵니다. 회사는 변경 및 인프라 오버헤드를 최소화하는 솔루션이 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "지연 시간 라우팅 정책을 사용하도록 Route 53 레코드를 업데이트합니다. 트래픽이 가장 반응이 빠른 엔드포인트로 전송되도록 Amazon S3 버킷에서 호스팅되는 정적 오류 페이지를 레코드에 추가합니다.",
      "B": "Route 53 활성-수동 장애 조치 구성을 설정합니다. Route 53 상태 확인에서 ALB 엔드포인트가 비정상이라고 판단하면 Amazon S3 버킷에서 호스팅되는 정적 오류 페이지로 트래픽을 보냅니다.",
      "C": "정적 오류 페이지를 엔드포인트로 호스팅하는 Amazon EC2 인스턴스와 ALB를 사용하여 Route 53 활성-활성 구성을 설정합니다. ALB 에 대한 상태 확인이 실패한 경우에만 인스턴스에 요청을 보내도록 Route 53을 구성합니다.",
      "D": "다중값 응답 라우팅 정책을 사용하도록 Route 53 레코드를 업데이트합니다. 상태 확인을 만듭니다. 상태 확인이 통과되면 트래픽을 웹사이트로 안내합니다. 상태 확인을 통과하지 못한 경우 Amazon S3에서 호스팅되는 정적 오류 페이지로 트래픽을 보냅니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 활성-수동 장애 조치 — ALB 상태 실패 시 S3 전환\n▸ Route 53 상태 확인 — ALB 헬스 모니터링\n▸ 최소 변경 — 기존 기본 웹사이트 유지\n\n【정답 포인트】\n▸ 활성-수동 → ALB 우선 (정상 시)\n▸ 상태 확인 실패 → S3 오류 페이지 자동 전환\n▸ 수동 대기 → 인프라 오버헤드 최소\n\n【오답 체크】\n(A) 지연시간 라우팅 → 성능 최적화 (장애조치 아님)\n(C) 활성-활성 + EC2는 오버헤드 증가\n(D) 다중값은 모든 응답 반환 (순차 장애조치 X)\n\n【시험 포인트】\n라우팅 정책: 활성-수동 (failover) vs 활성-활성\n▸ 상태 확인 기반 자동 전환 필수"
  },
  {
    "id": 546,
    "question": "회사의 IT 비용에 대한 최근 분석에서는 백업 비용을 줄여야 할 필요성이 강조되었습니다. 회사의 CIO 는 온프레미스 백업 인프라를 단순화하고 물리적 백업 테이프 사용을 제거하여 비용을 절감하고자 합니다. 회사는 온프레미스 백업 애플리케이션 및 워크플로우에 대한 기존 투자를 보존해야 합니다. 솔루션 설계자는 무엇을 추천해야 합니까?",
    "options": {
      "A": "NFS 인터페이스를 사용하여 백업 애플리케이션과 연결하도록 AWS Storage Gateway 를 설정합니다.",
      "B": "NFS 인터페이스를 사용하여 백업 애플리케이션과 연결하는 Amazon EFS 파일 시스템을 설정합니다.",
      "C": "iSCSI 인터페이스를 사용하여 백업 애플리케이션과 연결하는 Amazon EFS 파일 시스템을 설정합니다.",
      "D": "iSCSI-가상 테이프 라이브러리(VTL) 인터페이스를 사용하여 백업 애플리케이션과 연결하도록 AWS Storage Gateway를 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ VTL (Virtual Tape Library) — 테이프 대체 서비스\n▸ iSCSI 인터페이스 — 기존 백업 앱 호환\n▸ AWS Storage Gateway — 온프레미스-AWS 연동\n\n【정답 포인트】\n▸ 테이프 제거 → VTL 에뮬레이션 활용\n▸ 기존 워크플로우 보존 → iSCSI 인터페이스\n▸ 백업 애플리케이션 수정 불필요 → VTL 투명성\n\n【오답 체크】\n(A) NFS는 파일 저장소 (테이프 대체 X)\n(B) EFS NFS는 클라우드 파일시스템 (VTL 아님)\n(C) EFS iSCSI는 미지원 (EBS 블록만)\n\n【시험 포인트】\n테이프 백업 → VTL (가상 테이프 라이브러리)\n▸ Storage Gateway VTL = 테이프 자동화 대체"
  },
  {
    "id": 547,
    "question": "회사는 서로 다른 위치에 데이터 수집 센서를 가지고 있습니다. 데이터 수집 센서는 대량의 데이터를 회사로 스트리밍합니다. 이 회사는 대용량 스트리밍 데이터를 수집하고 처리하기 위해 AWS 에서 플랫폼을 설계하려고 합니다. 솔루션은 확장 가능해야 하며 거의 실시간으로 데이터 수집을 지원해야 합니다. 회사는 향후 보고를 위해 데이터를 Amazon S3에 저장해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Kinesis Data Firehose를 사용하여 스트리밍 데이터를 Amazon S3에 전달합니다.",
      "B": "AWS Glue를 사용하여 스트리밍 데이터를 Amazon S3에 전달합니다.",
      "C": "AWS Lambda 를 사용하여 스트리밍 데이터를 전달하고 데이터를 Amazon S3 에 저장합니다.",
      "D": "AWS DMS(AWS Database Migration Service)를 사용하여 스트리밍 데이터를 Amazon S3에 전달합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Kinesis Data Firehose — 관리형 스트림 배달\n▸ 자동 확장 — 운영 오버헤드 최소\n▸ S3 저장소 — 배치 처리/보고용\n\n【정답 포인트】\n▸ 대용량 스트리밍 → Firehose 자동 확장\n▸ 거의 실시간 → 초 단위 배달 설정\n▸ 서버리스 → 관리 부담 없음\n\n【오답 체크】\n(B) Glue는 배치 ETL (실시간 X)\n(C) Lambda는 동시성 제한 (스케일링 제약)\n(D) DMS는 데이터베이스 마이그레이션 (스트림 X)\n\n【시험 포인트】\n실시간 스트림 → Firehose 필수\n▸ Kinesis Streams vs Firehose\n  → Stream: 커스텀 처리, Firehose: S3 직배"
  },
  {
    "id": 548,
    "question": "회사에는 재무, 데이터 분석 및 개발 부서를 위한 별도의 AWS 계정이 있습니다. 비용 및 보안 문제 때문에 회사는 각 AWS 계정이 사용할 수 있는 서비스를 제어하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Systems Manager 템플릿을 사용하여 각 부서에서 사용할 수 있는 AWS 서비스를 제어합니다.",
      "B": "AWS Organizations 의 각 부서에 대한 조직 단위(OU)를 생성합니다. 서비스 제어 정책(SCP)을 OU에 연결합니다.",
      "C": "AWS CloudFormation을 사용하여 각 부서에서 사용할 수 있는 AWS 서비스만 자동으로 프로비저닝합니다.",
      "D": "특정 AWS 서비스의 사용을 관리 및 제어하기 위해 AWS 계정의 AWS Service Catalog에 제품 목록을 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Service Control Policy (SCP) — 계정 권한 제한\n▸ AWS Organizations — 조직 단위(OU) 중앙 관리\n▸ 부서별 OU — 정책 계층적 적용\n\n【정답 포인트】\n▸ SCP → 조직 전체 권한 통제\n▸ OU 기반 → 부서별 정책 분리\n▸ 중앙 관리 → 운영 오버헤드 최소\n\n【오답 체크】\n(A) Systems Manager는 운영 자동화용\n(C) CloudFormation은 리소스 배포 (접근 제한 X)\n(D) Service Catalog는 제품 카탈로그 (강제 제한 X)\n\n【시험 포인트】\n조직 전체 권한 제한 → SCP (Organizations)\n▸ Service Catalog는 선택형 카탈로그"
  },
  {
    "id": 549,
    "question": "회사에서 전자상거래 웹 사이트를 위한 다중 계층 애플리케이션을 만들었습니다. 웹사이트는 퍼블릭 서브넷에 상주하는 Application Load Balancer, 퍼블릭 서브넷의 웹 계층, 프라이빗 서브넷의 Amazon EC2 인스턴스에서 호스팅되는 MySQL 클러스터를 사용합니다. MySQL 데이터베이스는 타사 공급자가 인터넷에서 호스팅하는 제품 카탈로그 및 가격 정보를 검색해야 합니다. 솔루션 설계자는 운영 오버헤드를 늘리지 않고 보안을 극대화하는 전략을 고안해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "VPC 에 NAT 인스턴스를 배포합니다. NAT 인스턴스를 통해 모든 인터넷 기반 트래픽을 라우팅합니다.",
      "B": "퍼블릭 서브넷에 NAT 게이트웨이를 배포합니다. 인터넷 바인딩된 모든 트래픽을 NAT 게이트웨이로 보내도록 프라이빗 서브넷 라우팅 테이블을 수정합니다.",
      "C": "인터넷 게이트웨이를 구성하고 VPModify 프라이빗 서브넷 라우팅 테이블에 연결하여 인터넷 바인딩 트래픽을 인터넷 게이트웨이로 보냅니다.",
      "D": "가상 프라이빗 게이트웨이를 구성하고 VPC에 연결합니다. 인터넷 바인딩 트래픽을 가상 프라이빗 게이트웨이로 보내도록 프라이빗 서브넷 라우팅 테이블을 수정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ NAT 게이트웨이 — 관리형 아웃바운드 게이트웨이\n▸ 프라이빗 서브넷 → 인터넷 접근 (숨겨진 출발지)\n▸ 보안 + 운영효율 — 자동 고가용성\n\n【정답 포인트】\n▸ 프라이빗 MySQL → NAT 게이트웨이 경유\n▸ 아웃바운드만 허용 → 외부에서 진입 불가\n▸ 관리형 → 패치/모니터링 자동\n\n【오답 체크】\n(A) NAT 인스턴스는 운영 오버헤드 증가\n(C) IGW + 프라이빗 = 보안 위반 (직접 노출)\n(D) VGW는 VPN/Direct Connect (인터넷 아님)\n\n【시험 포인트】\n프라이빗 → 인터넷 아웃바운드 → NAT 게이트웨이\n▸ NAT 인스턴스 vs 게이트웨이: 자동화 우위"
  },
  {
    "id": 550,
    "question": "회사에서 AWS Key Management Service(AWS KMS) 키를 사용하여 AWS Lambda 환경 변수를 암호화하고 있습니다. 솔루션 설계자는 환경 변수를 해독하고 사용하는 데 필요한 권한이 있는지 확인해야 합니다. 올바른 권한을 구현하기 위해 솔루션 설계자가 수행해야 하는 단계는 무엇입니까? (2 개 선택)",
    "options": {
      "A": "Lambda 리소스 정책에 AWS KMS 권한을 추가합니다.",
      "B": "Lambda 실행 역할에 AWS KMS 권한을 추가합니다.",
      "C": "Lambda 함수 정책에 AWS KMS 권한을 추가합니다.",
      "D": "AWS KMS 키 정책에서 Lambda 실행 역할을 허용합니다.",
      "E": "AWS KMS 키 정책에서 Lambda 리소스 정책을 허용합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ Lambda 실행 역할 — 함수 실행 권한 (IAM)\n▸ KMS 키 정책 — 암호화 키 접근 제어\n▸ 양방향 권한 — 역할 + 키 정책 필수\n\n【정답 포인트】\n▸ B) 실행 역할 → kms:Decrypt 권한 추가\n▸ D) KMS 키 정책 → 실행 역할 허용\n▸ 양쪽 모두 필요 → 최소 권한 원칙\n\n【오답 체크】\n(A) 리소스 정책은 외부 접근 (내부 KMS X)\n(C) Lambda 함수 정책은 비표준 위치\n(E) 리소스 정책을 KMS에서 허용 불가\n\n【시험 포인트】\nKMS 암호화 해제 → IAM (역할) + KMS 정책\n▸ 실행 역할 + 키 정책 양쪽 확인 필수"
  },
  {
    "id": 551,
    "question": "회사에 보고서를 생성하는 재무 응용 프로그램이 있습니다. 보고서 크기는 평균 50KB 이며 Amazon S3 에 저장됩니다. 보고서는 생산 후 첫 주 동안 자주 액세스되며 몇 년 동안 저장해야 합니다. 보고서는 6시간 이내에 검색할 수 있어야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 Standard 를 사용합니다. S3 수명 주기 규칙을 사용하여 7 일 후에 보고서를 S3 Glacier로 전환합니다.",
      "B": "S3 Standard 를 사용합니다. S3 수명 주기 규칙을 사용하여 7 일 후에 보고서를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다.",
      "C": "S3 Intelligent-Tiering 을 사용합니다. 보고서를 S3 Standard-Infrequent Access(S3 Standard-IA) 및 S3 Glacier로 전환하도록 S3 Intelligent-Tiering을 구성합니다.",
      "D": "S3 Standard 를 사용합니다. S3 수명 주기 규칙을 사용하여 7 일 후에 보고서를 S3 Glacier Deep Archive로 전환합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 7일 경계 — 고빈도 접근 마감\n▸ Glacier Flexible Retrieval — 6시간 검색 가능\n▸ 장기 보관 비용 최적화\n\n【정답 포인트】\n▸ 초반 7일 → S3 Standard (빈번 접근)\n▸ 7일 후 → Glacier (6시간 검색 가능, 저비용)\n▸ 몇 년 저장 → Glacier 비용 효과적\n\n【오답 체크】\n(B) IA는 50KB 작은 파일에 비용 비효율\n(C) Intelligent-Tiering은 크기 작아서 오버헤드\n(D) Deep Archive는 6시간 검색 초과 (12시간)\n\n【시험 포인트】\n검색 시간 제약 → Glacier Flexible (6h)\n▸ Deep Archive (12h) 제외\n▸ 작은 파일 → IA 스토리지 비용 초과"
  },
  {
    "id": 552,
    "question": "회사는 Amazon EC2 인스턴스의 비용을 최적화해야 합니다. 회사는 또한 2~3 개월마다 EC2 인스턴스의 유형과 제품군을 변경해야 합니다. 이러한 요구 사항을 충족하기 위해 회사는 무엇을 해야 합니까?",
    "options": {
      "A": "3년 기간 동안 부분 선결제 예약 인스턴스를 구매합니다.",
      "B": "1년 기간 동안 선결제 없는 컴퓨팅 절감 플랜을 구매합니다.",
      "C": "1년 기간 동안 모든 선결제 예약 인스턴스를 구매합니다.",
      "D": "1년 기간 동안 All Upfront EC2 Instance Savings Plan을 구매합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Compute Savings Plan — 인스턴스 유형/패밀리 변경 가능한 유연한 절감 플랜\n▸ 예약 인스턴스 — 특정 인스턴스 유형으로 고정된 약정\n\n【정답 포인트】\n▸ 2~3개월마다 유형 변경 → 유연성 필요\n▸ Compute Savings Plan은 인스턴스 패밀리 자유롭게 변경 가능\n▸ 1년 약정 + 선결제 없음 = 최저 비용 + 최대 유연성\n\n【오답 체크】\n(A) 부분 예약 인스턴스는 특정 유형 고정, 변경 불가\n(C) All Upfront 예약은 유형 변경 불가능, 3년 장기 약정\n(D) All Upfront Savings Plan도 선결제 부담 크고 유형 고정\n\n【시험 포인트】\n비용 최적화 + 유연성 조건 → Compute Savings Plan 체크\n선결제 없음 = Savings Plan 시사, 예약 인스턴스는 선결제 필수"
  },
  {
    "id": 553,
    "question": "솔루션 설계자는 회사의 Amazon S3 버킷을 검토하여 개인 식별 정보(PII)를 검색해야 합니다. 회사는 us-east-1 지역 및 us-west-2 지역에 PII 데이터를 저장합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 리전에서 Amazon Macie 를 구성합니다. Amazon S3 에 있는 데이터를 분석하는 작업을 생성합니다.",
      "B": "모든 지역에 대해 AWS Security Hub 를 구성합니다. Amazon S3 에 있는 데이터를 분석하는 AWS Config 규칙을 생성합니다.",
      "C": "Amazon S3에 있는 데이터를 분석하도록 Amazon Inspector를 구성합니다.",
      "D": "Amazon S3에 있는 데이터를 분석하도록 Amazon GuardDuty를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Macie — S3의 PII/민감정보 자동 탐지 서비스\n▸ 멀티리전 — 각 리전별 독립 구성 필요\n\n【정답 포인트】\n▸ Macie는 S3 데이터에서 PII 패턴 자동 감지(신용카드, SSN 등)\n▸ 멀티리전 요구 → 각 리전에 별도 활성화\n▸ 최소 오버헤드 → 관리형 서비스로 자동화\n\n【오답 체크】\n(B) Security Hub + Config는 규정 준수, PII 탐지 전문성 낮음\n(C) Inspector는 EC2/컨테이너 취약점 분석 용도\n(D) GuardDuty는 위협 탐지, 데이터 분류 기능 없음\n\n【시험 포인트】\nS3 + PII 탐지 조건 → Macie 즉시 선택\n멀티리전은 각각 구성하되 \"작업\" 또는 \"발견\" 메커니즘만 동일"
  },
  {
    "id": 554,
    "question": "회사의 SAP 애플리케이션에는 온프레미스 환경에 백엔드 SQL Server 데이터베이스가 있습니다. 이 회사는 온프레미스 애플리케이션과 데이터베이스 서버를 AWS 로 마이그레이션하려고 합니다. 회사는 SAP 데이터베이스의 높은 요구 사항을 충족하는 인스턴스 유형이 필요합니다. 온프레미스 성능 데이터에 따르면 SAP 애플리케이션과 데이터베이스 모두 메모리 사용률이 높습니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "애플리케이션에 최적화된 컴퓨팅 인스턴스 제품군을 사용하십시오. 데이터베이스에 메모리 최적화 인스턴스 제품군을 사용하십시오.",
      "B": "애플리케이션과 데이터베이스 모두에 스토리지 최적화 인스턴스 제품군을 사용하십시오.",
      "C": "애플리케이션과 데이터베이스 모두에 대해 메모리 최적화 인스턴스 제품군을 사용하십시오.",
      "D": "애플리케이션에 고성능 컴퓨팅(HPC) 최적화 인스턴스 제품군을 사용합니다. 데이터베이스에 메모리 최적화 인스턴스 제품군을 사용하십시오."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SAP — 고메모리 요구 엔터프라이즈 애플리케이션\n▸ 메모리 최적화 인스턴스(R/X) — RAM 집약 워크로드 전담\n\n【정답 포인트】\n▸ \"애플리케이션과 데이터베이스 모두 메모리 사용률 높음\" → 핵심 증거\n▸ SAP는 인메모리 데이터베이스(HANA) 선호\n▸ 메모리 최적화면 애플리케이션/DB 모두 최적 성능\n\n【오답 체크】\n(A) Compute 최적화는 CPU 집약(batch/분석), SAP 부적합\n(B) 스토리지 최적화는 I/O 집약(NoSQL), 메모리 문제 해결 안 함\n(D) HPC는 고성능 컴퓨팅/시뮬레이션 전용, SAP 불필요\n\n【시험 포인트】\n\"메모리 사용률 높음\" 키워드 → 메모리 최적화 패밀리 매칭\nSAP/HANA/ERP = 메모리 최적화 필수 체계"
  },
  {
    "id": 555,
    "question": "회사는 퍼블릭 및 프라이빗 서브넷이 있는 VPC 에서 애플리케이션을 실행합니다. VPC 는 여러 가용 영역에 걸쳐 확장됩니다. 애플리케이션은 프라이빗 서브넷의 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 Amazon Simple Queue Service(Amazon SQS) 대기열을 사용합니다. 솔루션 설계자는 EC2 인스턴스와 SQS 대기열 간의 연결을 설정하기 위한 보안 솔루션을 설계해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon SQS 용 인터페이스 VPC 엔드포인트를 구현합니다. 프라이빗 서브넷을 사용하도록 엔드포인트를 구성합니다. 프라이빗 서브넷에 있는 EC2 인스턴스의 트래픽을 허용하는 인바운드 액세스 규칙이 있는 보안 그룹을 엔드포인트에 추가합니다.",
      "B": "Amazon SQS용 인터페이스 VPC 엔드포인트를 구현합니다. 퍼블릭 서브넷을 사용하도록 엔드포인트를 구성합니다. 프라이빗 서브넷에 있는 EC2 인스턴스의 액세스를 허용하는 VPC 엔드포인트 정책을 인터페이스 엔드포인트에 연결합니다.",
      "C": "Amazon SQS용 인터페이스 VPC 엔드포인트를 구현합니다. 퍼블릭 서브넷을 사용하도록 엔드포인트를 구성합니다. 지정된 VPC 엔드포인트의 요청만 허용하는 인터페이스 VPC 엔드포인트에 Amazon SQS 액세스 정책을 연결합니다.",
      "D": "Amazon SQS 용 게이트웨이 엔드포인트를 구현합니다. 프라이빗 서브넷에 NAT 게이트웨이를 추가합니다. SQS 대기열에 대한 액세스를 허용하는 EC2 인스턴스에 IAM 역할을 연결합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 인터페이스 VPC 엔드포인트 — ENI 생성, 보안 그룹 적용 가능\n▸ 게이트웨이 엔드포인트 — 라우팅 테이블만 수정, S3/DynamoDB만 지원\n\n【정답 포인트】\n▸ SQS → 인터페이스 엔드포인트 필수 (게이트웨이 미지원)\n▸ 프라이빗 EC2에서 프라이빗 서브넷 엔드포인트로 직통 연결\n▸ 보안 그룹으로 EC2↔SQS 트래픽 제어\n\n【오답 체크】\n(B) 퍼블릭 서브넷 엔드포인트는 프라이빗 EC2 접근 불가능\n(C) 퍼블릭 + SQS 정책만으로는 프라이빗→퍼블릭 라우팅 구성 필요 (복잡)\n(D) SQS는 게이트웨이 엔드포인트 미지원, NAT는 비효율\n\n【시험 포인트】\nSQS + VPC 보안 = 인터페이스 엔드포인트 + 프라이빗 + 보안 그룹 조합\n엔드포인트 배치 위치 = EC2와 동일 VPC 서브넷에"
  },
  {
    "id": 556,
    "question": "솔루션 설계자는 AWS CloudFormation 템플릿을 사용하여 3 계층 웹 애플리케이션을 배포합니다. 웹 애플리케이션은 웹 계층과 Amazon DynamoDB 테이블에서 사용자 데이터를 저장하고 검색하는 애플리케이션 계층으로 구성됩니다. 웹 및 애플리케이션 계층은 Amazon EC2 인스턴스에서 호스팅되며 데이터베이스 계층은 공개적으로 액세스할 수 없습니다. 애플리케이션 EC2 인스턴스는 템플릿에서 API 자격 증명을 노출하지 않고 DynamoDB 테이블에 액세스해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "DynamoDB 테이블을 읽을 IAM 역할을 생성합니다. 인스턴스 프로필을 참조하여 역할을 애플리케이션 인스턴스와 연결합니다.",
      "B": "DynamoDB 테이블에서 읽고 쓰는 데 필요한 권한이 있는 IAM 역할을 생성합니다. EC2 인스턴스 프로필에 역할을 추가하고 인스턴스 프로필을 애플리케이션 인스턴스와 연결합니다.",
      "C": "AWS CloudFormation 템플릿의 파라미터 섹션을 사용하여 사용자가 DynamoDB 테이블에서 읽고 쓰는 데 필요한 권한이 있는 이미 생성된 IAM 사용자의 액세스 및 비밀 키를 입력하도록 합니다.",
      "D": "DynamoDB 테이블에서 읽고 쓰는 데 필요한 권한이 있는 AWS CloudFormation 템플릿에서 IAM 사용자를 생성합니다. GetAtt 기능을 사용하여 액세스 및 비밀 키를 검색하고 사용자 데이터를 통해 애플리케이션 인스턴스에 전달합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ IAM 역할 + 인스턴스 프로필 — 자격증명 노출 없이 EC2에 권한 부여\n▸ 애플리케이션 요구 — 읽기 + 쓰기 권한 필요\n\n【정답 포인트】\n▸ \"API 자격 증명 노출하지 않음\" → IAM 역할 필수\n▸ \"읽고 쓰는 데 필요한 권한\" → PutItem, GetItem 권한 포함\n▸ 인스턴스 프로필 = EC2↔IAM 역할 연결 메커니즘\n\n【오답 체크】\n(A) 읽기만 → 쓰기 권한 부족, 기능 불완전\n(C) 파라미터 입력 + 액세스키 = 자격증명 노출, 보안 위반\n(D) 템플릿에서 사용자 생성 + 키 노출 = 최악의 보안 실습\n\n【시험 포인트】\nCloudFormation + EC2 + DynamoDB = IAM 역할 + 인스턴스 프로필\n자격증명 보안 원칙 = 하드코딩/파라미터 절대 금지"
  },
  {
    "id": 557,
    "question": "솔루션 설계자는 분석 애플리케이션을 관리합니다. 애플리케이션은 Amazon S3 버킷에 대량의 반구조화된 데이터를 저장합니다. 솔루션 설계자는 병렬 데이터 처리를 사용하여 데이터를 더 빠르게 처리하려고 합니다. 또한 솔루션 설계자는 Amazon Redshift 데이터베이스에 저장된 정보를 사용하여 데이터를 보강하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Athena 를 사용하여 S3 데이터를 처리합니다. Amazon Redshift 데이터와 함께 AWS Glue를 사용하여 S3 데이터를 보강합니다.",
      "B": "Amazon EMR 을 사용하여 S3 데이터를 처리합니다. Amazon Redshift 데이터와 함께 Amazon EMR을 사용하여 S3 데이터를 보강합니다.",
      "C": "Amazon EMR을 사용하여 S3 데이터를 처리합니다. 데이터를 보강할 수 있도록 Amazon Kinesis Data Streams를 사용하여 S3 데이터를 Amazon Redshift로 이동합니다.",
      "D": "AWS Glue 를 사용하여 S3 데이터를 처리합니다. Amazon Redshift 데이터와 함께 AWS Lake Formation을 사용하여 S3 데이터를 보강합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon EMR — 병렬 분산 처리(Spark/Hadoop) 엔진\n▸ Amazon Redshift — 분석용 데이터웨어하우스, 외부 조인 지원\n\n【정답 포인트】\n▸ \"병렬 데이터 처리\" → EMR (Spark/Hadoop) 최적화\n▸ \"Redshift 데이터로 보강\" → EMR에서 Redshift 직접 쿼리/조인 가능\n▸ EMR이 처리 + 보강 모두 수행 (일관성 있음)\n\n【오답 체크】\n(A) Athena는 SQL 쿼리만, 병렬 처리 능력 약함, Glue는 ETL 스케줄링\n(C) Kinesis는 스트림 처리, 배치 보강 용도로 비효율\n(D) Glue는 메타데이터/카탈로그, Lake Formation은 데이터 거버넌스만 담당\n\n【시험 포인트】\nS3 + 병렬 처리 + 외부 데이터 조인 = EMR + Redshift 조합\nEMR은 분산 컴퓨팅의 표준 답변 선택지"
  },
  {
    "id": 558,
    "question": "회사에는 동일한 AWS 계정 내의 us-west-2 리전에 위치한 두 개의 VPC 가 있습니다. 회사는 이러한 VPC 간의 네트워크 트래픽을 허용해야 합니다. 매월 VPC 간에 약 500GB의 데이터 전송이 발생합니다. 이러한 VPC를 연결하는 가장 비용 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Transit Gateway를 구현하여 VPC를 연결합니다. VPC 간 통신에 전송 게이트웨이를 사용하도록 각 VPC의 라우팅 테이블을 업데이트합니다.",
      "B": "VPC 간에 AWS Site-to-Site VPN 터널을 구현합니다. VPC 간 통신에 VPN 터널을 사용하도록 각 VPC의 라우팅 테이블을 업데이트합니다.",
      "C": "VPC 간에 VPC 피어링 연결을 설정합니다. VPC 간 통신에 VPC 피어링 연결을 사용하도록 각 VPC의 라우팅 테이블을 업데이트합니다.",
      "D": "VPC 간에 1GB AWS Direct Connect 연결을 설정합니다. VPC 간 통신에 Direct Connect 연결을 사용하도록 각 VPC의 라우팅 테이블을 업데이트합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ VPC 피어링 — 무료, 동일 리전 내 직통 연결\n▸ Transit Gateway — 월 비용, 여러 VPC/온프레미스 복잡 구조용\n\n【정답 포인트】\n▸ \"동일 계정 + 동일 리전\" → 피어링 조건 만족\n▸ \"가장 비용 효율적\" → 피어링 무료, TGW는 월 비용 청구\n▸ 500GB 전송 → 피어링 데이터 전송 요금 없음\n\n【오답 체크】\n(A) TGW는 4개 이상 VPC나 온프레미스 필요시, 과도한 비용\n(B) VPN은 암호화 오버헤드, 성능/비용 비효율\n(D) Direct Connect는 초기 구성 비용 + 월 비용 매우 높음\n\n【시험 포인트】\n\"2개 VPC + 같은 계정/리전 + 비용\" = VPC 피어링 조합\n피어링은 \"가장 저렴한 연결\" 선택지 암기"
  },
  {
    "id": 559,
    "question": "회사는 서로 다른 제품군에 대해 AWS 에서 여러 애플리케이션을 호스팅합니다. 애플리케이션은 Amazon EC2 인스턴스 및 Application Load Balancer 를 비롯한 다양한 컴퓨팅 리소스를 사용합니다. 애플리케이션은 여러 AWS 리전의 AWS Organizations 에서 동일한 조직의 다른 AWS 계정에서 실행됩니다. 각 제품군의 팀은 개별 계정의 각 컴퓨팅 리소스에 태그를 지정했습니다. 회사는 조직의 통합 청구 기능에서 각 제품군의 비용에 대한 자세한 정보를 원합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "AWS 결제 콘솔에서 특정 AWS 생성 태그를 선택합니다.",
      "B": "AWS 결제 콘솔에서 특정 사용자 정의 태그를 선택합니다.",
      "C": "AWS 리소스 그룹 콘솔에서 특정 사용자 정의 태그를 선택합니다.",
      "D": "각 AWS 계정에서 선택한 태그를 활성화합니다.",
      "E": "조직 마스터 계정에서 선택한 태그를 활성화합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ 사용자 정의 태그 — 비용 할당 위해 AWS 청구에서 활성화 필수\n▸ 태그 활성화 — 마스터/관리 계정에서 조직 전체 설정\n\n【정답 포인트】\n▸ 제품군별 비용 분석 → 사용자 정의 태그(product-family) 필요\n▸ 멀티 계정 조직 → 마스터 계정에서 한 번만 활성화\n▸ 결제 콘솔에서 사용자 정의 태그 선택 + 마스터 활성화 필수\n\n【오답 체크】\n(A) AWS 생성 태그는 비용 할당에 제약, 제품군 구분 불가\n(C) 리소스 그룹은 리소스 조직용, 청구 분석 미지원\n(D) 개별 계정에서 활성화 → 마스터 계정만 인정, 무효\n\n【시험 포인트】\n멀티계정 조직 + 비용 분석 = 마스터에서 태그 활성화 + 청구 콘솔 사용자 태그\n태그 활성화는 \"마스터\" 키워드 필수"
  },
  {
    "id": 560,
    "question": "회사의 솔루션 아키텍트가 AWS Organizations 를 사용하는 AWS 다중 계정 솔루션을 설계하고 있습니다. 솔루션 설계자는 회사의 계정을 OU(조직 단위)로 구성했습니다. 솔루션 설계자는 OU 계층 구조에 대한 모든 변경 사항을 식별할 솔루션이 필요합니다. 솔루션은 또한 회사의 운영 팀에 변경 사항을 알려야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Control Tower 를 사용하여 AWS 계정을 프로비저닝합니다. 계정 드리프트 알림을 사용하여 OU 계층 구조의 변경 사항을 식별합니다.",
      "B": "AWS Control Tower 를 사용하여 AWS 계정을 프로비저닝합니다. AWS Config 집계 규칙을 사용하여 OU 계층 구조의 변경 사항을 식별합니다.",
      "C": "AWS Service Catalog 를 사용하여 조직에서 계정을 생성합니다. AWS CloudTrail 조직 추적을 사용하여 OU 계층 구조의 변경 사항을 식별합니다.",
      "D": "AWS CloudFormation 템플릿을 사용하여 조직에서 계정을 생성합니다. 스택에서 드리프트 감지 작업을 사용하여 OU 계층 구조에 대한 변경 사항을 식별합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Control Tower — 다중 계정 거버넌스 + 드리프트 감지 자동화\n▸ 드리프트 알림 — OU/정책 변경 감지 및 알림 발송\n\n【정답 포인트】\n▸ OU 변경 감지 → Control Tower 드리프트 기능 정확히 맞춤\n▸ \"운영 팀에 알림\" → 드리프트 알림 자동 실행\n▸ \"최소 오버헤드\" → Control Tower는 자동 관리형\n\n【오답 체크】\n(B) Config 규칙은 리소스 규정, OU 변경 감지 전문성 낮음\n(C) Service Catalog는 상품 배포, CloudTrail은 감시만 (알림 없음)\n(D) CloudFormation 드리프트는 스택 내부만, OU 구조 미지원\n\n【시험 포인트】\nOU + 드리프트 감지 + 알림 = Control Tower 드리프트 알림\nControl Tower는 \"자동화된 거버넌스\" 서비스의 상징"
  },
  {
    "id": 561,
    "question": "회사의 웹 사이트는 매일 수백만 건의 요청을 처리하며 요청 수는 계속 증가하고 있습니다. 솔루션 설계자는 웹 애플리케이션의 응답 시간을 개선해야 합니다. 솔루션 설계자는 애플리케이션이 Amazon DynamoDB 테이블에서 제품 세부 정보를 검색할 때 지연 시간을 줄여야 한다고 결정합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "DynamoDB Accelerator(DAX) 클러스터를 설정합니다. DAX 를 통해 모든 읽기 요청을 라우팅합니다.",
      "B": "DynamoDB 테이블과 웹 애플리케이션 사이에 Redis 용 Amazon ElastiCache 를 설정합니다. Redis를 통해 모든 읽기 요청을 라우팅합니다.",
      "C": "DynamoDB 테이블과 웹 애플리케이션 사이에 Amazon ElastiCache for Memcached 를 설정합니다. Memcached를 통해 모든 읽기 요청을 라우팅합니다.",
      "D": "테이블에 Amazon DynamoDB 스트림을 설정하고 AWS Lambda 가 테이블에서 읽고 Amazon ElastiCache 를 채우도록 합니다. ElastiCache 를 통해 모든 읽기 요청을 라우팅합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ DynamoDB Accelerator(DAX) — DynamoDB 전담 인메모리 캐시, 자동 무효화\n▸ ElastiCache — 범용 캐시, 수동 관리 필요\n\n【정답 포인트】\n▸ \"DynamoDB 지연 시간 최소화\" → DAX는 DynamoDB 최적화된 캐시\n▸ \"최소 운영 오버헤드\" → DAX는 자동 캐시 일관성 유지\n▸ 마이크로초 지연 달성 → DAX 성능 특화\n\n【오답 체크】\n(B) \n(C) ElastiCache는 DynamoDB와 독립적, 캐시 일관성 수동 관리\n(D) 스트림 + Lambda는 복잡, 비용 증가, 실시간성 보장 어려움\n\n【시험 포인트】\n\"DynamoDB + 캐싱\" 조건 = DAX 우선\nDAX는 \"최소 관리, 최고 성능\" 조합의 정답"
  },
  {
    "id": 562,
    "question": "솔루션 설계자는 VPC 의 Amazon EC2 인스턴스에서 Amazon DynamoDB 에 대한 API 호출이 인터넷을 통해 이동하지 않도록 해야 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (2 개 선택)",
    "options": {
      "A": "엔드포인트에 대한 라우팅 테이블 항목을 생성합니다.",
      "B": "DynamoDB용 게이트웨이 엔드포인트를 생성합니다.",
      "C": "Amazon EC2용 인터페이스 엔드포인트를 생성합니다.",
      "D": "VPC의 각 서브넷에서 끝점에 대한 탄력적 네트워크 인터페이스를 만듭니다.",
      "E": "엔드포인트의 보안 그룹에 보안 그룹 항목을 생성하여 액세스를 제공합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ 게이트웨이 엔드포인트 — S3/DynamoDB 무료, 라우팅 테이블로 제어\n▸ 인터페이스 엔드포인트 — 다른 서비스용, ENI 생성 필요\n\n【정답 포인트】\n▸ DynamoDB → 게이트웨이 엔드포인트 지원\n▸ 게이트웨이 엔드포인트 작동 → 라우팅 테이블 항목 필수\n▸ \"인터넷 통과 없음\" → 엔드포인트 + 라우팅만으로 충분\n\n【오답 체크】\n(C) EC2 인터페이스는 불필요, EC2는 엔드포인트 대상 아님\n(D) 게이트웨이는 ENI 생성 안 함, 라우팅만 사용\n(E) 게이트웨이는 보안 그룹 불필요, 라우팅 테이블만 제어\n\n【시험 포인트】\nDynamoDB + VPC 비공개 접근 = 게이트웨이 엔드포인트 + 라우팅 테이블\n게이트웨이는 \"ENI/보안그룹 없음\" 특징 암기"
  },
  {
    "id": 563,
    "question": "회사는 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터와 온프레미스 Kubernetes 클러스터 모두에서 애플리케이션을 실행합니다. 회사는 중앙 위치에서 모든 클러스터와 워크로드를 보기를 원합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon CloudWatch Container Insights 를 사용하여 클러스터 정보를 수집하고 그룹화합니다.",
      "B": "Amazon EKS 커넥터를 사용하여 모든 Kubernetes 클러스터를 등록하고 연결합니다.",
      "C": "AWS Systems Manager를 사용하여 클러스터 정보를 수집하고 봅니다.",
      "D": "Amazon EKS Anywhere 를 기본 클러스터로 사용하여 기본 Kubernetes 명령으로 다른 클러스터를 봅니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon EKS 커넥터 — 온프레미스/멀티 클라우드 K8s를 EKS 콘솔에 등록\n▸ 중앙 관리 — AWS 콘솔 하나에서 모든 클러스터 제어\n\n【정답 포인트】\n▸ \"EKS + 온프레미스 K8s\" → EKS 커넥터가 정확한 용도\n▸ \"중앙 위치에서 보기\" → AWS 콘솔에서 통합 관리\n▸ \"최소 오버헤드\" → 커넥터는 관리형, 에이전트만 배포\n\n【오답 체크】\n(A) CloudWatch Container Insights는 모니터링만, EKS 등록 기능 없음\n(C) Systems Manager는 EC2/온프레미스 에이전트 기반, 커넥터 미지원\n(D) EKS Anywhere는 온프레미스 EKS, 기존 K8s 통합 안 함\n\n【시험 포인트】\n\"EKS + 온프레미스 K8s + 중앙관리\" = EKS 커넥터 조합\nEKS 커넥터는 \"하이브리드 K8s 관리의 표준 답변\""
  },
  {
    "id": 564,
    "question": "회사에서 전자상거래 애플리케이션을 구축 중이며 중요한 고객 정보를 저장해야 합니다. 회사는 고객이 웹사이트에서 구매 거래를 완료할 수 있는 기능을 제공해야 합니다. 회사는 또한 민감한 고객 데이터를 데이터베이스 관리자로부터 보호해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon Elastic Block Store(Amazon EBS) 볼륨에 민감한 데이터를 저장합니다. EBS 암호화를 사용하여 데이터를 암호화합니다. IAM 인스턴스 역할을 사용하여 액세스를 제한합니다.",
      "B": "MySQL 용 Amazon RDS 에 민감한 데이터를 저장합니다. AWS Key Management Service(AWS KMS) 클라이언트 측 암호화를 사용하여 데이터를 암호화합니다.",
      "C": "민감한 데이터를 Amazon S3에 저장합니다. AWS Key Management Service(AWS KMS) 서버 측 암호화를 사용하여 데이터를 암호화합니다. S3 버킷 정책을 사용하여 액세스를 제한하십시오.",
      "D": "민감한 데이터를 Windows Server용 Amazon FSx에 저장합니다. 응용 프로그램 서버에 파일 공유를 탑재합니다. Windows 파일 권한을 사용하여 액세스를 제한하십시오."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 클라이언트 측 암호화 — DB 관리자가 평문 볼 수 없음\n▸ 서버 측 암호화 — DB 또는 서버에서 복호화 가능 (DB 관리자 접근 가능)\n\n【정답 포인트】\n▸ \"DB 관리자로부터 보호\" → 클라이언트 측 암호화 필수\n▸ RDS는 거래 데이터 저장 최적화\n▸ KMS 클라이언트 암호화 = 애플리케이션이 키 보유, DB 관리자 차단\n\n【오답 체크】\n(A) EBS는 블록 스토리지, 데이터베이스 역할 부적절\n(C) 서버 측 암호화는 서버/DB에서 복호화 가능, 관리자 접근 가능\n(D) FSx는 파일 스토리지, 트랜잭션 데이터베이스 부적절\n\n【시험 포인트】\n\"DB 관리자 보호\" 키워드 = 클라이언트 측 암호화 필수\nRDS + 클라이언트 KMS = \"DB 관리자 차단\" 솔루션"
  },
  {
    "id": 565,
    "question": "회사에는 트랜잭션 데이터를 처리하는 온프레미스 MySQL 데이터베이스가 있습니다. 회사는 데이터베이스를 AWS 클라우드로 마이그레이션하고 있습니다. 마이그레이션된 데이터베이스는 데이터베이스를 사용하는 회사의 애플리케이션과 호환성을 유지해야 합니다. 마이그레이션된 데이터베이스는 또한 수요가 증가하는 기간 동안 자동으로 확장되어야 합니다. 이러한 요구 사항을 충족하는 마이그레이션 솔루션은 무엇입니까?",
    "options": {
      "A": "기본 MySQL 도구를 사용하여 데이터베이스를 MySQL 용 Amazon RDS 로 마이그레이션합니다. 탄력적 스토리지 확장을 구성합니다.",
      "B": "mysqldump 유틸리티를 사용하여 데이터베이스를 Amazon Redshift 로 마이그레이션합니다. Amazon Redshift 클러스터에 대해 Auto Scaling을 켭니다.",
      "C": "AWS Database Migration Service(AWS DMS)를 사용하여 데이터베이스를 Amazon Aurora로 마이그레이션합니다. Aurora Auto Scaling을 켭니다.",
      "D": "AWS Database Migration Service(AWS DMS)를 사용하여 데이터베이스를 Amazon DynamoDB로 마이그레이션합니다. Auto Scaling 정책을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS DMS — 온프레미스→AWS 데이터베이스 마이그레이션 전문 도구\n▸ Amazon Aurora — MySQL 호환, Auto Scaling, 고성능\n\n【정답 포인트】\n▸ \"MySQL 호환성\" → Aurora (MySQL 호환 DB 엔진)\n▸ \"자동 확장\" → Aurora Auto Scaling 완벽 지원\n▸ \"마이그레이션 용도\" → DMS 자동화된 마이그레이션\n\n【오답 체크】\n(A) RDS MySQL도 호환이지만, 탄력적 스토리지만 Auto Scaling 아님\n(B) Redshift는 분석용 DW, 트랜잭션 부하 부적절\n(D) DynamoDB는 NoSQL, MySQL 관계형 스키마 호환 불가\n\n【시험 포인트】\n\"MySQL 호환 + Auto Scaling + 마이그레이션\" = Aurora + DMS 조합\nAurora는 MySQL 호환성의 우월한 선택지"
  },
  {
    "id": 566,
    "question": "회사는 2개의 가용 영역에 걸쳐 VPC에서 여러 Amazon EC2 Linux 인스턴스를 실행합니다. 인스턴스는 계층적 디렉터리 구조를 사용하는 애플리케이션을 호스팅합니다. 애플리케이션은 공유 스토리지에서 동시에 빠르게 읽고 쓸 수 있어야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon S3 버킷을 생성합니다. VPC의 모든 EC2 인스턴스에서 액세스를 허용합니다.",
      "B": "Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성합니다. 각 EC2 인스턴스에서 EFS 파일 시스템을 탑재합니다.",
      "C": "프로비저닝된 IOPS SSD(io2) Amazon Elastic Block Store(Amazon EBS) 볼륨에 파일 시스템을 생성합니다. EBS 볼륨을 모든 EC2 인스턴스에 연결합니다.",
      "D": "각 EC2 인스턴스에 연결된 Amazon Elastic Block Store(Amazon EBS) 볼륨에 파일 시스템을 만듭니다. 여러 EC2 인스턴스 간에 EBS 볼륨을 동기화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon EFS — 멀티 AZ 공유 파일 시스템, POSIX 호환\n▸ 계층적 디렉터리 — 파일 시스템 구조 요구\n\n【정답 포인트】\n▸ \"2개 AZ + 공유 스토리지\" → EFS 멀티 AZ 지원\n▸ \"동시 빠른 읽고 쓰기\" → EFS 병렬 접근 최적화\n▸ \"계층적 디렉터리\" → EFS는 POSIX 파일 시스템 구조\n\n【오답 체크】\n(A) S3는 객체 스토리지, 계층적 디렉터리/동시 접근 부적절\n(C) EBS는 단일 인스턴스 블록, 멀티 AZ 공유 불가 (io2도)\n(D) EBS 인스턴스별 동기화 → 복잡, 충돌 위험\n\n【시험 포인트】\n\"멀티 AZ + 공유 + 계층적 디렉터리 + 동시 접근\" = EFS 확정\nEFS는 \"공유 파일 시스템\" 용도의 표준 답변"
  },
  {
    "id": 567,
    "question": "솔루션 설계자는 건물 내 비즈니스 테넌트의 시간당 에너지 소비량을 저장할 워크로드를 설계하고 있습니다. 센서는 각 테넌트의 사용량을 합산하는 HTTP 요청을 통해 데이터베이스에 공급합니다. 솔루션 설계자는 가능한 경우 관리 서비스를 사용해야 합니다. 워크로드는 솔루션 설계자가 독립적인 구성 요소를 추가함에 따라 향후 더 많은 기능을 받게 됩니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Lambda 함수와 함께 Amazon API Gateway 를 사용하여 센서에서 데이터를 수신하고, 데이터를 처리하고, Amazon DynamoDB 테이블에 데이터를 저장합니다.",
      "B": "Amazon EC2 인스턴스의 Auto Scaling 그룹에서 지원하는 Elastic Load Balancer 를 사용하여 센서에서 데이터를 수신하고 처리합니다. Amazon S3 버킷을 사용하여 처리된 데이터를 저장합니다.",
      "C": "AWS Lambda 함수와 함께 Amazon API Gateway 를 사용하여 센서에서 데이터를 수신하고, 데이터를 처리하고, Amazon EC2 인스턴스의 Microsoft SQL Server Express 데이터베이스에 데이터를 저장합니다.",
      "D": "Amazon EC2 인스턴스의 Auto Scaling 그룹에서 지원하는 Elastic Load Balancer 를 사용하여 센서에서 데이터를 수신하고 처리합니다. Amazon Elastic File System(Amazon EFS) 공유 파일 시스템을 사용하여 처리된 데이터를 저장합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ API Gateway + Lambda — 서버리스, 관리 최소\n▸ DynamoDB — 시계열 데이터 최적화, 자동 확장\n\n【정답 포인트】\n▸ \"HTTP 요청 수신\" → API Gateway 표준 선택\n▸ \"관리 서비스\" → Lambda(서버리스) + DynamoDB(관리형)\n▸ \"향후 기능 추가\" → 서버리스로 컴포넌트 추가 용이\n▸ \"최소 오버헤드\" → 서버 관리 제로\n\n【오답 체크】\n(B) \n(D) EC2 Auto Scaling은 관리 부담(OS/보안 패치 등)\n(C) SQL Server Express는 관리형 아님, 운영 오버헤드\n\n【시험 포인트】\n\"관리 서비스 + 최소 오버헤드 + 확장성\" = API Gateway + Lambda + DynamoDB\n서버리스는 \"미래 확장\" 시뮬레이션에 강함"
  },
  {
    "id": 568,
    "question": "솔루션 설계자는 엔지니어링 도면을 저장하고 보는 데 사용되는 새 웹 애플리케이션의 스토리지 아키텍처를 설계하고 있습니다. 모든 애플리케이션 구성 요소는 AWS 인프라에 배포됩니다. 응용 프로그램 디자인은 사용자가 엔지니어링 도면이 로드될 때까지 기다리는 시간을 최소화하기 위해 캐싱을 지원해야 합니다. 애플리케이션은 페타바이트의 데이터를 저장할 수 있어야 합니다. 솔루션 설계자는 어떤 스토리지 및 캐싱 조합을 사용해야 합니까?",
    "options": {
      "A": "Amazon CloudFront를 사용하는 Amazon S3",
      "B": "Amazon ElastiCache를 사용하는 Amazon S3 Glacier",
      "C": "Amazon CloudFront를 사용하는 Amazon Elastic Block Store(Amazon EBS) 볼륨",
      "D": "Amazon ElastiCache를 사용하는 AWS Storage Gateway"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon CloudFront — CDN 엣지 캐싱, 콘텐츠 배포 최적화\n▸ Amazon S3 — 페타바이트 스케일 객체 스토리지\n\n【정답 포인트】\n▸ \"페타바이트 데이터\" → S3만 가능\n▸ \"로드 시간 최소화\" → CloudFront 엣지 캐싱\n▸ \"엔지니어링 도면\" → 이미지/도면 파일 = S3 + CDN 최적\n\n【오답 체크】\n(B) Glacier는 콜드 스토리지, 자주 접근 데이터 부적절\n(C) EBS는 블록 스토리지, 페타바이트 스케일 불가, CloudFront 대상 아님\n(D) Storage Gateway는 온프레미스 연계, 직접 웹 서빙 미지원\n\n【시험 포인트】\n\"S3 + 캐싱\" = CloudFront (CDN 엣지 캐시)\n페타바이트 + CDN = \"S3 + CloudFront\" 조합은 거의 고정 답변"
  },
  {
    "id": 569,
    "question": "Amazon EventBridge 규칙은 타사 API 를 대상으로 합니다. 타사 API 가 수신 트래픽을 수신하지 않았습니다. 솔루션 설계자는 규칙 조건이 충족되고 있는지 여부와 규칙의 대상이 호출되고 있는지 확인해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS/Events의 네임스페이스에서 Amazon CloudWatch의 지표를 확인하십시오.",
      "B": "Amazon Simple Queue Service(Amazon SQS) 데드 레터 대기열의 이벤트를 검토합니다.",
      "C": "Amazon CloudWatch Logs에서 이벤트를 확인합니다.",
      "D": "EventBridge 이벤트에 대한 AWS CloudTrail의 추적을 확인합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS/Events 네임스페이스 — EventBridge 규칙 평가/호출 지표\n▸ CloudWatch 지표 — Invocations, FailedInvocations 메트릭\n\n【정답 포인트】\n▸ \"규칙 조건 충족 확인\" → CloudWatch 지표 (Rules matched)\n▸ \"대상 호출 확인\" → CloudWatch 지표 (Invocations)\n▸ \"즉시 진단\" → CloudWatch 네임스페이스에서 확인\n\n【오답 체크】\n(B) DLQ는 실패 메시지만, 호출 여부 확인 어려움\n(C) CloudWatch Logs는 이벤트 내용 로깅 필요 (자동 아님)\n(D) CloudTrail은 API 호출, EventBridge 규칙 평가 추적 제한적\n\n【시험 포인트】\nEventBridge 트러블슈팅 = AWS/Events CloudWatch 지표\n\"규칙 조건 + 호출 확인\" = CloudWatch 지표 체크 패턴"
  },
  {
    "id": 570,
    "question": "회사에는 매주 금요일 저녁에 실행되는 대규모 워크로드가 있습니다. 워크로드는 us-east-1 리전의 두 가용 영역에 있는 Amazon EC2 인스턴스에서 실행됩니다. 일반적으로 회사는 항상 두 개 이상의 인스턴스를 실행하지 않아야 합니다. 그러나 회사는 정기적으로 반복되는 증가된 워크로드를 처리하기 위해 금요일마다 최대 6 개의 인스턴스로 확장하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EventBridge에서 미리 알림을 생성하여 인스턴스를 확장하십시오.",
      "B": "예약된 작업이 있는 Auto Scaling 그룹을 생성합니다.",
      "C": "수동 조정을 사용하는 Auto Scaling 그룹을 생성합니다.",
      "D": "자동 조정을 사용하는 Auto Scaling 그룹을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Auto Scaling 예약 작업 — 정기적인 시간대 자동 확장 설정\n▸ 금요일 저녁 반복 — 스케줄 기반 트리거\n\n【정답 포인트】\n▸ \"매주 금요일\" → 예측 가능한 반복 일정\n▸ \"최소 오버헤드\" → 예약 작업 자동화 (수동 불필요)\n▸ \"2개→6개 인스턴스\" → ASG 예약 스케일링으로 정확히 제어\n\n【오답 체크】\n(A) EventBridge는 수동 트리거용, 반복 스케줄은 ASG 예약 작업 전문\n(C) 수동 조정 = 매주 직접 조작 필요 (오버헤드 높음)\n(D) 자동 조정 = 부하 기반, 반복 일정 전용 아님 (불안정)\n\n【시험 포인트】\n\"정기적 반복 + 예측 가능한 시간\" = Auto Scaling 예약 작업\n예약 작업은 \"스케줄 기반 확장\"의 정답 패턴"
  },
  {
    "id": 571,
    "question": "회사에서 REST API 를 만들고 있습니다. 회사에는 TLS 사용에 대한 엄격한 요구 사항이 있습니다. 회사는 API 엔드포인트에 TLSv1.3 을 요구합니다. 또한 회사는 TLS 인증서에 서명하기 위해 특정 공개 타사 인증 기관(CA)을 요구합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "로컬 시스템을 사용하여 타사 CI가 서명한 인증서를 생성하고 인증서를 AWS Certificate Manager(ACM)로 가져옵니다. 사용자 지정 도메인을 사용하여 Amazon API Gateway 에서 HTTP API를 생성합니다. 인증서를 사용하도록 사용자 지정 도메인을 구성합니다.",
      "B": "타사 CA 가 서명한 AWS Certificate Manager(ACM)에서 인증서를 생성합니다. 사용자 지정 도메인을 사용하여 Amazon API Gateway 에서 HTTP API 를 생성합니다. 인증서를 사용하도록 사용자 지정 도메인을 구성합니다.",
      "C": "AWS Certificate Manager(ACM)를 사용하여 타사 CA 에서 서명한 인증서를 생성합니다. 인증서를 AWS Certificate Manager(ACM)로 가져옵니다. Lambda 함수 URL 을 사용하여 AWS Lambda 함수를 생성합니다. 인증서를 사용하도록 Lambda 함수 URL을 구성합니다.",
      "D": "타사 CA에서 서명한 AWS Certificate Manager(ACM)에서 인증서를 생성합니다. Lambda 함수 URL 을 사용하여 AWS Lambda 함수를 생성합니다. 인증서를 사용하도록 Lambda 함수 URL을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ API Gateway HTTP API — TLSv1.3 자동 지원, 사용자 정의 도메인으로 타사 CA 인증서 적용 가능\n▸ ACM 인증서 — 타사 CA에서 서명받은 인증서 생성 및 관리\n\n【정답 포인트】\n▸ 타사 CA 요구사항 → ACM에서 직접 생성 가능 (Option B)\n▸ API Gateway HTTP API는 TLSv1.3 지원하고 사용자 정의 도메인에 ACM 인증서 적용 가능\n▸ REST API가 아닌 HTTP API 사용이 더 간단한 구성\n\n【오답 체크】\n(A) 수동으로 인증서 생성 후 임포트 — ACM에서 직접 타사 CA 서명 요청 가능하므로 비효율적\n(C) Lambda 함수 URL은 사용자 정의 도메인 및 타사 CA 인증서 지원 불가\n(D) Lambda 함수 URL은 고급 인증서 설정 미지원\n\n【시험 포인트】\n▸ API Gateway vs Lambda URL — 인증서 관리 차이 구분\n▸ ACM 타사 CA 기능 — 수동 임포트 vs 직접 생성"
  },
  {
    "id": 572,
    "question": "회사는 AWS 에서 애플리케이션을 실행합니다. 애플리케이션이 일관되지 않은 사용량을 수신합니다. 애플리케이션은 AWS Direct Connect 를 사용하여 온프레미스 MySQL 호환 데이터베이스에 연결합니다. 온프레미스 데이터베이스는 지속적으로 최소 2GiB 의 메모리를 사용합니다. 회사는 온프레미스 데이터베이스를 관리형 AWS 서비스로 마이그레이션하려고 합니다. 회사는 자동 확장 기능을 사용하여 예기치 않은 작업 부하 증가를 관리하려고 합니다. 최소한의 관리 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기본 읽기 및 쓰기 용량 설정으로 Amazon DynamoDB 데이터베이스를 프로비저닝합니다.",
      "B": "최소 용량이 1 Aurora 용량 단위(ACU)인 Amazon Aurora 데이터베이스를 프로비저닝합니다.",
      "C": "최소 용량이 1 Aurora 용량 단위(ACU)인 Amazon Aurora Serverless v2 데이터베이스를 프로비저닝합니다.",
      "D": "2GiB의 메모리로 Amazon RDS for MySQL 데이터베이스를 프로비저닝합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Aurora Serverless v2 — 트래픽에 따라 자동 확장/축소, MySQL 호환성 지원\n▸ ACU (Aurora Capacity Unit) — 최소 1개부터 세밀한 스케일링 가능\n\n【정답 포인트】\n▸ 일관되지 않은 사용량 + 자동 확장 요구 → Serverless v2 필수\n▸ Serverless v2는 0.5 ACU 단위 스케일링으로 최소 오버헤드 달성\n▸ MySQL 호환성 유지 (Oracle, PostgreSQL도 지원)\n\n【오답 체크】\n(A) DynamoDB — NoSQL이므로 MySQL 호환성 요구사항 불일치\n(B) Aurora 프로비저닝 버전 — 수동으로 용량 조정해야 하므로 자동 확장 불가\n(D) RDS for MySQL — 프로비저닝 기반으로 자동 확장 미지원\n\n【시험 포인트】\n▸ Serverless v1 vs v2 — v2는 ACU 단위 세밀 조정 가능\n▸ 불규칙 트래픽 패턴 → Serverless 선택 핵심 포인트"
  },
  {
    "id": 573,
    "question": "회사에서 AWS Lambda와 함께 이벤트 기반 프로그래밍 모델을 사용하려고 합니다. 회사는 Java 11 에서 실행되는 Lambda 함수의 시작 지연 시간을 줄이려고 합니다. 회사는 애플리케이션에 대한 엄격한 지연 시간 요구 사항이 없습니다. 이 회사는 함수가 확장될 때 콜드 스타트와 이상치 대기 시간을 줄이려고 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Lambda 프로비저닝된 동시성을 구성합니다.",
      "B": "Lambda 함수의 제한 시간을 늘립니다.",
      "C": "Lambda 함수의 메모리를 늘립니다.",
      "D": "Lambda SnapStart를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SnapStart — 런타임 스냅샷 캐싱으로 콜드 스타트 시간 90% 감소 (Java 지원)\n▸ 프로비저닝된 동시성 — 항상 웜 상태 유지로 비용 높음\n\n【정답 포인트】\n▸ 비용 효율성 + 콜드 스타트 감소 → SnapStart 최적\n▸ Java 11은 SnapStart 지원 (런타임 사전 초기화 캐싱)\n▸ 스케일 아웃 시 새 인스턴스는 스냅샷에서 복구되어 빠름\n\n【오답 체크】\n(A) 프로비저닝된 동시성 — 항상 활성 상태 유지로 비용 매우 높음\n(B) 타임아웃 증가 — 콜드 스타트 해결 불가\n(C) 메모리 증가 — CPU 향상되지만 근본 해결 아님\n\n【시험 포인트】\n▸ SnapStart는 Java에만 지원되고 비용 효율적 콜드 스타트 솔루션\n▸ 엄격한 지연 시간이 없을 때 프로비저닝 대신 SnapStart 선택"
  },
  {
    "id": 574,
    "question": "금융 서비스 회사는 Amazon RDS for MySQL 데이터베이스를 사용하는 새로운 애플리케이션을 출시했습니다. 회사는 응용 프로그램을 사용하여 주식 시장 추세를 추적합니다. 회사는 매주 말 2 시간 동안만 애플리케이션을 작동하면 됩니다. 회사는 데이터베이스 실행 비용을 최적화해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기존 RDS for MySQL 데이터베이스를 Aurora Serverless v2 MySQL 데이터베이스 클러스터로 마이그레이션합니다.",
      "B": "기존 RDS for MySQL 데이터베이스를 Aurora MySQL 데이터베이스 클러스터로 마이그레이션합니다.",
      "C": "기존 RDS for MySQL 데이터베이스를 MySQL 을 실행하는 Amazon EC2 인스턴스로 마이그레이션합니다. EC2 인스턴스에 대한 인스턴스 예약을 구매합니다.",
      "D": "기존 RDS for MySQL 데이터베이스를 MySQL 컨테이너 이미지를 사용하여 작업을 실행하는 Amazon Elastic Container Service(Amazon ECS) 클러스터로 마이그레이션합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Aurora Serverless v2 — 사용하지 않을 때 0.5 ACU로 축소, 분 단위 과금\n▸ RDS 프로비저닝 — 항상 인스턴스 비용 발생\n\n【정답 포인트】\n▸ 주간 2시간만 사용 → 나머지 시간 거의 무료 상태\n▸ Serverless v2는 비활성 기간 최소 비용으로 운영\n▸ 중단/재개 오버헤드 없이 자동 스케일링\n\n【오답 체크】\n(B) Aurora 프로비저닝 — 미사용 시간 전체 비용 소모\n(C) EC2 + 예약 인스턴스 — 52주 분 비용 지불하므로 비효율\n(D) ECS 클러스터 — 스케줄링 복잡하고 상시 관리 필요\n\n【시험 포인트】\n▸ 극도로 비정규적 사용 → Serverless v2 가성비 최적\n▸ RDS 프로비저닝과 Serverless v2 비용 차이 이해 필수"
  },
  {
    "id": 575,
    "question": "회사는 AWS 리전의 Application Load Balancer 뒤에 있는 Amazon Elastic Kubernetes Service(Amazon EKS)에 애플리케이션을 배포합니다. 애플리케이션은 PostgreSQL 데이터베이스 엔진에 데이터를 저장해야 합니다. 회사는 데이터베이스의 데이터가 가용성이 높기를 원합니다. 회사는 또한 읽기 워크로드를 위한 증가된 용량이 필요합니다. 이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "전역 테이블로 구성된 Amazon DynamoDB 데이터베이스 테이블을 생성합니다.",
      "B": "다중 AZ 배포로 Amazon RDS 데이터베이스를 생성합니다.",
      "C": "다중 AZ DB 클러스터 배포로 Amazon RDS 데이터베이스를 생성합니다.",
      "D": "리전 간 읽기 전용 복제본으로 구성된 Amazon RDS 데이터베이스를 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Multi-AZ DB 클러스터 — 최대 15개 읽기 복제본, 즉시 페일오버\n▸ 다중 AZ 배포 — 프라이머리+스탠바이 2개 인스턴스만\n\n【정답 포인트】\n▸ 높은 가용성 + 읽기 확장성 → Multi-AZ DB 클러스터\n▸ 단일 리전 내 3개 AZ에 걸쳐 분산 배포\n▸ 읽기 워크로드 증가 → 읽기 전용 복제본으로 처리 가능\n\n【오답 체크】\n(A) DynamoDB — PostgreSQL 엔진 요구사항 불일치, NoSQL 구조\n(B) 다중 AZ 배포 — 읽기 확장성 부족 (2개 인스턴스만)\n(D) 리전 간 복제본 — 리전 간 레이턴시 증가, 복제 지연\n\n【시험 포인트】\n▸ 단일 리전 내 고가용성 + 읽기 확장 → Multi-AZ DB 클러스터\n▸ 리전 간 DR vs 리전 내 확장성 구분 필수"
  },
  {
    "id": 576,
    "question": "회사는 Amazon API Gateway 및 AWS Lambda를 사용하여 AWS에서 RESTful 서버리스 웹 애플리케이션을 구축하고 있습니다. 이 웹 애플리케이션의 사용자는 지리적으로 분산되며 회사는 이러한 사용자에 대한 API 요청 대기 시간을 줄이려고 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 유형의 엔드포인트를 사용해야 합니까?",
    "options": {
      "A": "프라이빗 엔드포인트",
      "B": "지역 엔드포인트",
      "C": "인터페이스 VPC 엔드포인트",
      "D": "엣지 최적화 엔드포인트"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 엣지 최적화 엔드포인트 — CloudFront 글로벌 네트워크로 지연 시간 최소화\n▸ 지역 엔드포인트 — 단일 리전 내 클라이언트만 최적화\n\n【정답 포인트】\n▸ 지리적으로 분산된 사용자 → 글로벌 배포 필수\n▸ CloudFront 엣지 로케이션에서 캐싱 및 라우팅\n▸ 엣지 최적화 엔드포인트는 기본적으로 CloudFront 통합\n\n【오답 체크】\n(A) 프라이빗 엔드포인트 — VPC 내부용, 글로벌 레이턴시 감소 불가\n(B) 지역 엔드포인트 — 단일 리전 내에서만 최적화\n(C) VPC 엔드포인트 — AWS 서비스 프라이빗 접근용\n\n【시험 포인트】\n▸ API Gateway 엔드포인트 3가지 (프라이빗, 지역, 엣지 최적화) 구분\n▸ 글로벌 사용자 레이턴시 감소 → 엣지 최적화만 정답"
  },
  {
    "id": 577,
    "question": "회사는 Amazon CloudFront 배포를 사용하여 웹 사이트의 콘텐츠 페이지를 제공합니다. 회사는 고객이 회사 웹 사이트에 액세스할 때 TLS 인증서를 사용하도록 해야 합니다. 회사는 TLS 인증서의 생성 및 갱신을 자동화하려고 합니다. 이러한 요구 사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "CloudFront 보안 정책을 사용하여 인증서를 생성합니다.",
      "B": "CloudFront 원본 액세스 제어(OAC)를 사용하여 인증서를 생성합니다.",
      "C": "AWS Certificate Manager(ACM)를 사용하여 인증서를 생성합니다. 도메인에 대해 DNS 검증을 사용하십시오.",
      "D": "AWS Certificate Manager(ACM)를 사용하여 인증서를 생성합니다. 도메인에 대한 이메일 유효성 검사를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ ACM — TLS 인증서 자동 갱신 (DNS 검증 시 완전 자동화)\n▸ DNS 검증 vs 이메일 검증 — 자동화 수준 차이\n\n【정답 포인트】\n▸ 자동 갱신 필수 → ACM 사용\n▸ DNS 검증은 완전 자동화 (이메일 검증은 수동 승인 필요)\n▸ CloudFront는 ACM 인증서 기본 지원\n\n【오답 체크】\n(A) CloudFront 보안 정책 — 인증서 생성 기능 없음 (인증서 선택만)\n(B) OAC — 원본 보안 기능으로 인증서 생성 불가\n(D) 이메일 검증 — 매 갱신 시 수동 승인 필요, 완전 자동화 불가\n\n【시험 포인트】\n▸ ACM DNS 검증 → 완전 자동화된 갱신 가능\n▸ CloudFront 인증서 관리 → ACM 선택이 표준"
  },
  {
    "id": 578,
    "question": "한 회사에서 Amazon DynamoDB 를 데이터베이스 계층으로 사용하는 서버리스 애플리케이션을 배포했습니다. 응용 프로그램의 사용자가 크게 증가했습니다. 이 회사는 데이터베이스 응답 시간을 밀리초에서 마이크로초로 개선하고 데이터베이스에 대한 요청을 캐시하기를 원합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "DynamoDB 가속기(DAX)를 사용합니다.",
      "B": "데이터베이스를 Amazon Redshift로 마이그레이션합니다.",
      "C": "데이터베이스를 Amazon RDS로 마이그레이션합니다.",
      "D": "Redis용 Amazon ElastiCache를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ DAX (DynamoDB Accelerator) — 마이크로초 응답 시간, DynamoDB 네이티브 캐싱\n▸ ElastiCache — 별도 관리 필요, 애플리케이션 수정 필수\n\n【정답 포인트】\n▸ DynamoDB 사용 유지 + 마이크로초 대기 시간 → DAX\n▸ DAX는 메모리 캐시로 네이티브 통합\n▸ 최소 운영 오버헤드 (관리형 서비스)\n\n【오답 체크】\n(B) Redshift — OLAP용, DynamoDB의 트랜잭션 특성 손실\n(C) RDS — 완전히 다른 데이터베이스로 마이그레이션 필요, 대규모 작업\n(D) ElastiCache — 별도 인스턴스 관리, 애플리케이션 코드 변경\n\n【시험 포인트】\n▸ DynamoDB 최적화 → DAX는 반드시 알아야 할 솔루션\n▸ 밀리초 vs 마이크로초 구분 — DAX의 특정 강점"
  },
  {
    "id": 579,
    "question": "회사에서 PostgreSQL 용 Amazon RDS 를 사용하는 애플리케이션을 실행합니다. 애플리케이션은 평일 업무 시간에만 트래픽을 수신합니다. 회사는 이 사용량을 기반으로 비용을 최적화하고 운영 오버헤드를 줄이려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS의 인스턴스 스케줄러를 사용하여 시작 및 중지 일정을 구성하십시오.",
      "B": "자동 백업을 끕니다. 데이터베이스의 매주 수동 스냅샷을 생성합니다.",
      "C": "최소 CPU 사용률을 기준으로 데이터베이스를 시작하고 중지하는 사용자 지정 AWS Lambda 함수를 생성합니다.",
      "D": "모든 Upfront 예약 DB 인스턴스를 구매합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS 인스턴스 스케줄러 — 반복 패턴 기반 자동 시작/중지\n▸ 규정적 비용 절감 (업무 시간만 활성화)\n\n【정답 포인트】\n▸ 평일 업무 시간 패턴 → 인스턴스 스케줄러로 자동화\n▸ 설정 후 무중단 운영, 운영 오버헤드 최소\n▸ Lambda 함수보다 관리형이므로 우수\n\n【오답 체크】\n(B) 백업 정책 — 비용 최적화와 무관, 재해 복구 측면\n(C) Lambda 함수 — 커스텀 개발 필요, 운영 오버헤드 증가\n(D) 예약 인스턴스 — 미사용 시간도 비용 발생, 역효과\n\n【시험 포인트】\n▸ 정기적 패턴 사용 → AWS 인스턴스 스케줄러 최고 선택\n▸ RDS 수동 중지 vs 자동화의 중요성 이해"
  },
  {
    "id": 580,
    "question": "회사는 로컬로 연결된 스토리지를 사용하여 온프레미스에서 대기 시간에 민감한 애플리케이션을 실행합니다. 이 회사는 애플리케이션을 AWS 클라우드로 옮기기 위해 리프트 앤 시프트 방식을 사용하고 있습니다. 회사는 애플리케이션 아키텍처를 변경하기를 원하지 않습니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EC2 인스턴스로 Auto Scaling 그룹을 구성합니다. Amazon FSx for Lustre 파일 시스템을 사용하여 애플리케이션을 실행합니다.",
      "B": "Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. Amazon Elastic Block Store(Amazon EBS) GP2 볼륨을 사용하여 애플리케이션을 실행합니다.",
      "C": "Amazon EC2 인스턴스로 Auto Scaling 그룹을 구성합니다. OpenZFS 파일 시스템용 Amazon FSx를 사용하여 애플리케이션을 실행합니다.",
      "D": "Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. Amazon Elastic Block Store(Amazon EBS) GP3 볼륨을 사용하여 애플리케이션을 실행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 로컬 연결 스토리지 — EBS 인스턴스 스토어의 클라우드 대체재\n▸ EBS GP3 — GP2보다 성능/가격 비율 우수, IOPS 독립 조정\n\n【정답 포인트】\n▸ 리프트 앤 시프트 → 아키텍처 미변경 전제\n▸ 로컬 스토리지 특성 → EBS 블록 스토리지로 직매핑\n▸ GP3은 GP2 대비 20% 저비용, 높은 성능\n\n【오답 체크】\n(A) FSx Lustre — 고성능 컴퓨팅용, 오버엔지니어링 및 고비용\n(B) EBS GP2 — GP3보다 비용 효율 낮음, IOPS 고정\n(C) FSx OpenZFS — NFS 기반 파일 시스템, 로컬 블록 스토리지 아님\n\n【시험 포인트】\n▸ 로컬 스토리지 마이그레이션 → EBS 선택 필수\n▸ GP2 vs GP3 비용 효율성 비교 중요"
  },
  {
    "id": 581,
    "question": "회사는 Amazon EC2 인스턴스에서 상태 저장 프로덕션 애플리케이션을 실행합니다. 애플리케이션을 항상 실행하려면 최소 2개의 EC2 인스턴스가 필요합니다. 솔루션 설계자는 응용 프로그램을 위한 고가용성 및 내결함성 아키텍처를 설계해야 합니다. 솔루션 설계자는 EC2 인스턴스의 Auto Scaling 그룹을 생성합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자가 수행해야 하는 추가 단계는 무엇입니까?",
    "options": {
      "A": "Auto Scaling 그룹의 최소 용량을 2로 설정합니다. 하나의 가용 영역에 하나의 온디맨드 인스턴스를 배포하고 두 번째 가용 영역에 하나의 온디맨드 인스턴스를 배포합니다.",
      "B": "Auto Scaling 그룹의 최소 용량을 4 개로 설정합니다. 하나의 가용 영역에 2 개의 온디맨드 인스턴스를 배포하고 두 번째 가용 영역에 2 개의 온디맨드 인스턴스를 배포합니다.",
      "C": "Auto Scaling 그룹의 최소 용량을 2 로 설정합니다. 하나의 가용 영역에 4 개의 스팟 인스턴스를 배포합니다.",
      "D": "Auto Scaling 그룹의 최소 용량을 4로 설정합니다. 하나의 가용 영역에 2개의 온디맨드 인스턴스를 배포하고 두 번째 가용 영역에 2개의 스팟 인스턴스를 배포합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 고가용성 — 여러 AZ에 걸친 분산 배포\n▸ 내결함성 — AZ 장애 시에도 최소 2개 인스턴스 유지\n\n【정답 포인트】\n▸ 최소 2개 인스턴스 필수 + 고가용성 → 다중 AZ 전개\n▸ 각 AZ에 2개씩 배포하면 AZ 장애 시에도 2개 유지\n▸ 최소 용량 4개 설정으로 오토스케일링 정상 작동\n\n【오답 체크】\n(A) 단일 인스턴스 × 2AZ — AZ 장애 시 1개만 남음, 부족\n(C) 단일 AZ 스팟 — AZ 장애 시 모두 손실, 고가용성 미충족\n(D) 스팟 인스턴스 혼재 — 스팟 인스턴스 중단 시 수준 미달\n\n【시험 포인트】\n▸ 다중 AZ 설계 시 각 AZ별 독립적 용량 배치\n▸ 상태 저장 앱 → 스팟 인스턴스 부적합"
  },
  {
    "id": 582,
    "question": "전자상거래 회사는 Amazon Route 53 을 DNS 공급자로 사용합니다. 이 회사는 온프레미스 및 AWS 클라우드에서 웹 사이트를 호스팅합니다. 회사의 온프레미스 데이터 센터는 us-west-1 지역 근처에 있습니다. 회사는 eu-central-1 지역을 사용하여 웹사이트를 호스팅합니다. 회사는 웹사이트 로딩 시간을 최대한 최소화하고자 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "지리적 위치 라우팅 정책을 설정합니다. us-west-1 근처에 있는 트래픽을 온프레미스 데이터 센터로 보냅니다. eu-central-1 근처에 있는 트래픽을 eu-central-1로 보냅니다.",
      "B": "eu-central-1 근처에 있는 모든 트래픽을 eu-central-1 로 라우팅하고 온프레미스 데이터 센터 근처에 있는 모든 트래픽을 온프레미스 데이터 센터로 라우팅하는 간단한 라우팅 정책을 설정합니다.",
      "C": "레이턴시 라우팅 정책을 설정합니다. 정책을 us-west-1과 연결합니다.",
      "D": "가중치 기반 라우팅 정책을 설정합니다. eu-central-1 과 온프레미스 데이터 센터 간에 트래픽을 균등하게 분할합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 지리적 위치 라우팅 — 사용자 위치 기반 최적 엔드포인트로 라우팅\n▸ 레이턴시 라우팅 — 실시간 응답 시간 측정 기반 (온프레미스는 지원 제한)\n\n【정답 포인트】\n▸ 지역별 최적 리소스 → 지리적 위치 라우팅 필수\n▸ us-west-1 근처 → 온프레미스 데이터 센터 (가장 빠름)\n▸ eu-central-1 근처 → eu-central-1 (가장 빠름)\n\n【오답 체크】\n(B) 단순 라우팅 — 지리적 최적화 불가, 라운드 로빈만 가능\n(C) 레이턴시 라우팅 — 온프레미스 엔드포인트 헬스 체크 복잡\n(D) 가중치 기반 — 성능 기반이 아니라 고정 가중치만 가능\n\n【시험 포인트】\n▸ Route 53 라우팅 정책 구분 — 지리적 vs 레이턴시\n▸ 온프레미스 + 클라우드 하이브리드 → 지리적 위치 라우팅 최적"
  },
  {
    "id": 583,
    "question": "회사는 물리적 테이프에 5PB 의 아카이빙된 데이터를 가지고 있습니다. 회사는 규정 준수를 위해 테이프의 데이터를 10 년 더 보존해야 합니다. 회사는 향후 6 개월 내에 AWS 로 마이그레이션하기를 원합니다. 테이프를 저장하는 데이터 센터에는 1Gbps 업링크 인터넷 연결이 있습니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "온프레미스에서 테이프의 데이터를 읽습니다. 로컬 NFS 스토리지에 데이터를 준비합니다. AWS DataSync를 사용하여 데이터를 Amazon S3 Glacier Flexible Retrieval로 마이그레이션합니다.",
      "B": "온프레미스 백업 애플리케이션을 사용하여 테이프에서 데이터를 읽고 Amazon S3 Glacier Deep Archive에 직접 씁니다.",
      "C": "테이프 게이트웨이가 있는 여러 AWS Snowball 디바이스를 주문합니다. Snowball 의 가상 테이프에 물리적 테이프를 복사합니다. Snowball 디바이스를 AWS로 배송합니다. 수명 주기 정책을 생성하여 테이프를 Amazon S3 Glacier Deep Archive로 이동합니다.",
      "D": "온프레미스 테이프 게이트웨이를 구성합니다. AWS 클라우드에서 가상 테이프를 생성합니다. 백업 소프트웨어를 사용하여 물리적 테이프를 가상 테이프에 복사합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Snowball 테이프 게이트웨이 — 5PB 대용량 오프라인 전송\n▸ Glacier Deep Archive — 장기 보관 최저 비용\n\n【정답 포인트】\n▸ 5PB 규모 + 1Gbps 제한 → 인터넷 전송 불가능 (700+ 일 소요)\n▸ Snowball 물리 배송 → 6개월 내 완료 가능\n▸ 10년 보관 → Deep Archive 최저 비용\n\n【오답 체크】\n(A) DataSync 인터넷 전송 — 5PB를 1Gbps로는 현실 불가\n(B) 직접 쓰기 — 백업 애플리케이션으로는 대용량 처리 어려움\n(D) 온프레미스 테이프 게이트웨이 — 여전히 네트워크 의존\n\n【시험 포인트】\n▸ 대용량 + 네트워크 제약 → Snowball 선택 필수\n▸ 아카이브 보관 → Deep Archive 가성비 최고"
  },
  {
    "id": 584,
    "question": "한 회사에서 대량의 데이터를 병렬로 처리하는 애플리케이션을 배포하고 있습니다. 회사는 워크로드에 Amazon EC2 인스턴스를 사용할 계획입니다. 노드 그룹이 동일한 기본 하드웨어를 공유하지 못하도록 네트워크 아키텍처를 구성할 수 있어야 합니다. 이러한 요구 사항을 충족하는 네트워킹 솔루션은 무엇입니까?",
    "options": {
      "A": "분산 배치 그룹에서 EC2 인스턴스를 실행합니다.",
      "B": "EC2 인스턴스를 별도의 계정으로 그룹화합니다.",
      "C": "전용 테넌시로 EC2 인스턴스를 구성합니다.",
      "D": "공유 테넌시로 EC2 인스턴스를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 분산 배치 그룹 — 노드가 별도 하드웨어 랙에 배치\n▸ 병렬 처리 — 독립적 하드웨어 보장으로 성능 예측 가능\n\n【정답 포인트】\n▸ 동일 하드웨어 공유 금지 → 분산 배치 그룹만 충족\n▸ 여러 AZ/Rack 분산으로 장애 격리\n▸ 병렬 성능 최적화\n\n【오답 체크】\n(B) 별도 계정 — 물리 하드웨어 배치와 무관\n(C) 전용 테넌시 — 호스트 전체 전용이지만 호스트 내 공유 가능\n(D) 공유 테넌시 — 다른 고객과 하드웨어 공유\n\n【시험 포인트】\n▸ EC2 배치 그룹 3가지 (클러스터, 분산, 파티션) 구분\n▸ 분산 배치 그룹은 독립적 하드웨어 보장"
  },
  {
    "id": 585,
    "question": "솔루션 아키텍트는 장애 조치 AWS 지역에서 Amazon EC2 용량을 제공하기 위한 재해 복구(DR) 전략을 설계하고 있습니다. 비즈니스 요구 사항에 따르면 DR 전략은 장애 조치 지역의 용량을 충족해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "장애 조치 지역에서 온디맨드 인스턴스를 구매합니다.",
      "B": "장애 조치 지역에서 EC2 Savings Plan을 구매합니다.",
      "C": "장애 조치 지역에서 지역 예약 인스턴스를 구매합니다.",
      "D": "장애 조치 지역에서 용량 예약을 구매합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 용량 예약 — 온디맨드 요금으로 용량 미리 확보\n▸ 예약 인스턴스 — 1~3년 약정으로 할인\n\n【정답 포인트】\n▸ 재해 조치 → 평상시는 미사용\n▸ 용량 예약만 온디맨드 유연성 + 용량 보장\n▸ 필요 시에만 인스턴스 시작\n\n【오답 체크】\n(A) 온디맨드 구매 — 용량 보장 안 함\n(B) Savings Plan — 1년 이상 약정, DR은 단기성\n(C) 지역 예약 — 1~3년 약정 필수, DR 유연성 제약\n\n【시험 포인트】\n▸ DR 용량 확보 → 용량 예약이 유일한 정답\n▸ 예약 인스턴스 vs 용량 예약의 비용/유연성 차이"
  },
  {
    "id": 586,
    "question": "회사에는 AWS Organizations 조직의 일부로 5 개의 조직 단위(OU)가 있습니다. 각 OU 는 회사가 소유한 5개 비즈니스와 연관되어 있습니다. 회사의 연구개발(R&D) 사업이 회사에서 분리되어 자체 조직이 필요할 것입니다. 솔루션 설계자는 이 목적을 위해 별도의 새 관리 계정을 생성합니다. 솔루션 설계자는 새 마스터 계정에서 다음에 무엇을 수행해야 합니까?",
    "options": {
      "A": "전환하는 동안 R&D AWS 계정이 두 조직의 일부가 되도록 하십시오.",
      "B": "R&D AWS 계정이 이전 조직을 떠난 후 R&D AWS 계정을 새 조직의 일부로 초대합니다.",
      "C": "새 조직에 새 R&D AWS 계정을 생성합니다. 이전 R&D AWS 계정의 리소스를 새 R&D AWS 계정으로 마이그레이션합니다.",
      "D": "R&D AWS 계정이 새 조직에 가입하도록 합니다. 새 마스터 계정을 이전 조직의 구성원으로 만드세요."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 조직 이동 — 계정은 한 번에 하나 조직만 속함\n▸ 초대 메커니즘 — 조직 이탈 후 신규 조직에 초대\n\n【정답 포인트】\n▸ R&D 계정이 기존 조직에서 '먼저' 떠남\n▸ 이후 새 조직에 '초대'\n▸ 자동이탈 안 됨 → RemoveAccountFromOrganization API 필요\n\n【오답 체크】\n(A) 동시 양쪽 소속 — 불가능 (한 계정 = 한 조직)\n(C) 새로 생성 → 기존 리소스 마이그레이션 오버헤드\n(D) 마스터 계정을 구성원화 — 마스터는 조직의 중심\n\n【시험 포인트】\n▸ AWS Organizations 계정 이동 순서 — 떠남 → 초대\n▸ 계정은 동시에 여러 조직 속할 수 없음"
  },
  {
    "id": 587,
    "question": "한 회사는 분석을 처리하고 예측하기 위해 다양한 웹 애플리케이션에서 고객 활동을 캡처하는 솔루션을 설계하고 있습니다. 웹 애플리케이션에서의 고객 활동은 예측할 수 없으며 갑자기 증가할 수 있습니다. 회사에는 다른 웹 애플리케이션과 통합되는 솔루션이 필요합니다. 솔루션에는 보안 목적을 위한 인증 단계가 포함되어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "회사가 Amazon Elastic File System(Amazon EFS) 파일 시스템에서 수신하는 정보를 저장하는 Amazon Elastic Container Service(Amazon ECS) 컨테이너 인스턴스 앞에 게이트웨이 로드 밸런서(GWLB)를 구성합니다. 승인은 GWLB에서 해결됩니다.",
      "B": "회사가 Amazon S3 버킷에 수신하는 정보를 저장하는 Amazon Kinesis 데이터 스트림 앞에 Amazon API Gateway 엔드포인트를 구성합니다. AWS Lambda 함수를 사용하여 인증을 해결합니다.",
      "C": "회사가 Amazon S3 버킷에 수신하는 정보를 저장하는 Amazon Kinesis Data Firehose 앞에 Amazon API Gateway 엔드포인트를 구성합니다. API Gateway Lambda 권한 부여자를 사용하여 권한 부여를 해결합니다.",
      "D": "회사가 Amazon Elastic File System(Amazon EFS) 파일 시스템에서 수신하는 정보를 저장하는 Amazon Elastic Container Service(Amazon ECS) 컨테이너 인스턴스 앞에 게이트웨이 로드 밸런서(GWLB)를 구성합니다. AWS Lambda 함수를 사용하여 인증을 해결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Kinesis Data Firehose — 자동 버퍼링으로 불규칙한 트래픽 흡수\n▸ API Gateway Lambda 권한 부여자 — 통합된 인증\n\n【정답 포인트】\n▸ 불규칙한 트래픽 급증 → Firehose 자동 확장\n▸ API Gateway → 웹 앱 통합 지점\n▸ Lambda 권한 부여자 → 통합 인증 관리\n▸ S3 저장 → 장기 분석 데이터\n\n【오답 체크】\n(A) EFS + GWLB → 파일 시스템 적합하지 않음, 인증 기능 부족\n(B) Kinesis 데이터 스트림 — 실시간 처리이지만 Firehose만큼 확장 효율적 아님\n(D) EFS + GWLB → EFS는 저장소이지 스트림 기반 수집 불가\n\n【시험 포인트】\n▸ Kinesis 스트림 vs Firehose — Firehose는 자동 배치 전송\n▸ 불규칙 트래픽 + 분석 = Firehose 선택"
  },
  {
    "id": 588,
    "question": "한 전자 상거래 회사는 Microsoft SQL Server Enterprise Edition을 실행하는 Amazon RDS DB 인스턴스에 대한 재해 복구 솔루션을 원합니다. 회사의 현재 복구 지점 목표(RPO)와 복구 시간 목표(RTO)는 24시간입니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "지역 간 읽기 전용 복제본을 생성하고 읽기 전용 복제본을 기본 인스턴스로 승격합니다.",
      "B": "AWS Database Migration Service(AWS DMS)를 사용하여 RDS 교차 지역 복제를 생성합니다.",
      "C": "24시간마다 교차 리전 복제를 사용하여 기본 백업을 Amazon S3 버킷에 복사합니다.",
      "D": "24시간마다 자동 스냅샷을 다른 리전으로 복사합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ RPO/RTO 24시간 — 느슨한 재해 복구 요구사항\n▸ 스냅샷 복사 — 저비용 비동기 백업\n\n【정답 포인트】\n▸ 24시간 허용 → 실시간 복제 불필요\n▸ 스냅샷 자동 백업 → 추가 비용 최소\n▸ 교차 리전 복사 → 지역 장애 대비\n\n【오답 체크】\n(A) 읽기 전용 복제본 승격 — RTO 빠르지만 비용 높음\n(B) DMS 복제 — 실시간 동기화로 과도한 비용\n(C) S3 백업 복사 — 스냅샷 복사보다 비용 높음\n\n【시험 포인트】\n▸ RPO/RTO 24시간 = 저비용 기반 DR 전략\n▸ SQL Server와 무관하게 스냅샷 방식이 저가"
  },
  {
    "id": 589,
    "question": "한 회사는 고정 세션이 활성화된 Application Load Balancer 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 웹 애플리케이션을 실행합니다. 웹 서버는 현재 사용자 세션 상태를 호스팅합니다. 회사는 웹 서버 중단 시 고가용성을 보장하고 사용자 세션 상태 손실을 방지하기를 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Memcached 인스턴스용 Amazon ElastiCache 를 사용하여 세션 데이터를 저장합니다. Memcached 용 ElastiCache 를 사용하여 세션 상태를 저장하도록 애플리케이션을 업데이트합니다.",
      "B": "Redis 용 Amazon ElastiCache 를 사용하여 세션 상태를 저장합니다. Redis 용 ElastiCache를 사용하여 세션 상태를 저장하도록 애플리케이션을 업데이트합니다.",
      "C": "AWS Storage Gateway 캐싱 볼륨을 사용하여 세션 데이터를 저장합니다. AWS Storage Gateway 캐싱 볼륨을 사용하여 세션 상태를 저장하도록 애플리케이션을 업데이트합니다.",
      "D": "Amazon RDS 를 사용하여 세션 상태를 저장합니다. Amazon RDS 를 사용하여 세션 상태를 저장하도록 애플리케이션을 업데이트합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Redis — 영구 저장소 (RDB, AOF), 데이터 손실 방지\n▸ Memcached — 인메모리만, 재시작 시 데이터 소실\n\n【정답 포인트】\n▸ 세션 데이터 손실 방지 필수 → Redis 필수\n▸ Redis 다중 AZ → 자동 페일오버\n▸ 고가용성 + 내구성 동시 충족\n\n【오답 체크】\n(A) Memcached — 재시작 시 세션 손실, 요구사항 불일치\n(C) Storage Gateway — 세션 관리용 아님, 오버엔지니어링\n(D) RDS — 세션처럼 빠른 접근 필요하지 않음\n\n【시험 포인트】\n▸ Redis vs Memcached — 지속성이 핵심 차이\n▸ 세션 저장 = Redis 고정 선택"
  },
  {
    "id": 590,
    "question": "한 회사는 회사의 온프레미스 데이터 센터에서 MySQL DB 인스턴스용 Amazon RDS 로 MySQL 데이터베이스를 마이그레이션했습니다. 회사는 회사의 일일 평균 워크로드를 충족하도록 RDS DB 인스턴스의 크기를 조정했습니다. 한 달에 한 번 회사에서 보고서에 대한 쿼리를 실행할 때 데이터베이스 성능이 느려집니다. 회사는 보고서를 실행하고 일일 작업 부하의 성능을 유지 관리할 수 있는 기능을 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "데이터베이스의 읽기 전용 복제본을 생성합니다. 쿼리를 읽기 전용 복제본으로 보냅니다.",
      "B": "데이터베이스 백업을 생성합니다. 백업을 다른 DB 인스턴스로 복원합니다. 쿼리를 새 데이터베이스로 보냅니다.",
      "C": "데이터를 Amazon S3로 내보냅니다. Amazon Athena를 사용하여 S3 버킷을 쿼리합니다.",
      "D": "추가 워크로드를 수용할 수 있도록 DB 인스턴스의 크기를 조정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Read Replica(읽기 전용 복제본) — RDS의 읽기 트래픽 분산용 비동기 복제본\n▸ Writer(주 인스턴스) — 일일 OLTP 워크로드 처리 담당\n\n【정답 포인트】\n▸ 읽기 워크로드 분리 → 월 1회 무거운 보고서 쿼리를 별도 인스턴스에서 실행\n▸ 주 DB 영향 없음 → 일일 업무용 성능 유지, 보고서는 독립적으로 처리\n\n【오답 체크】\n(B) 백업 복원은 초기 설정 비용 높음, 시간도 오래 걸림 + 복제본처럼 실시간 동기화 불가\n(C) S3/Athena는 비용-성능 균형이 떨어짐, 한 달에 한 번이므로 복제본이 더 적절\n(D) 인스턴스 업그레이드는 과도한 비용, 일일 워크로드만 있으면 충분한 용량\n\n【시험 포인트】\n▸ 피크 vs 정상 워크로드 → 읽기 복제본으로 분리하는 것이 가장 비용 효율적\n▸ 함정 → 복제본은 읽기만 가능(쓰기는 주 인스턴스로), 이미 '읽기' 쿼리라는 점 활용"
  },
  {
    "id": 591,
    "question": "회사는 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용하여 컨테이너 애플리케이션을 실행합니다. 애플리케이션에는 고객을 관리하고 주문하는 마이크로서비스가 포함되어 있습니다. 회사는 들어오는 요청을 적절한 마이크로서비스로 라우팅해야 합니다. 이 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS 로드 밸런서 컨트롤러를 사용하여 Network Load Balancer를 프로비저닝하십시오.",
      "B": "AWS Load Balancer Controller 를 사용하여 Application Load Balancer 를 프로비저닝합니다.",
      "C": "AWS Lambda 함수를 사용하여 요청을 Amazon EKS에 연결합니다.",
      "D": "Amazon API Gateway를 사용하여 요청을 Amazon EKS에 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ API Gateway — HTTP/REST 기반 라우팅, 서버리스 진입점\n▸ EKS 마이크로서비스 — 고객/주문 관리 등 다양한 엔드포인트\n\n【정답 포인트】\n▸ API 기반 라우팅 → 경로별(/customers, /orders) 마이크로서비스로 자동 분배\n▸ 비용 효율성 → Ingress(ALB/NLB)보다 관리 오버헤드 적고, 서버리스 특성\n\n【오답 체크】\n(A) NLB는 극저지연·높은 처리량 필요할 때 적합, API 기반 라우팅은 약점\n(B) ALB는 기능 충분하지만 Ingress 컨트롤러 별도 구성, API Gateway보다 고비용\n(C) Lambda는 EKS 직접 라우팅에 부적절, 동기식 처리 제약\n\n【시험 포인트】\n▸ 마이크로서비스 + API 기반 요청 → API Gateway 선택 트리거\n▸ 함정 → 'EKS 사용' 조건만으로 ALB 선택하는 실수, 비용 최소화 키워드 주목"
  },
  {
    "id": 592,
    "question": "회사는 AWS 를 사용하여 저작권이 있는 이미지에 대한 액세스 권한을 판매합니다. 회사의 글로벌 고객 기반은 이러한 이미지에 빠르게 액세스할 수 있어야 합니다. 회사는 특정 국가의 사용자에 대한 접근을 거부해야 합니다. 회사는 가능한 한 비용을 최소화하려고 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon S3 를 사용하여 이미지를 저장하십시오. MFA(다단계 인증) 및 퍼블릭 버킷 액세스를 활성화합니다. 고객에게 S3 버킷에 대한 링크를 제공합니다.",
      "B": "Amazon S3를 사용하여 이미지를 저장합니다. 각 고객에 대해 IAM 사용자를 생성합니다. S3 버킷에 액세스할 수 있는 권한이 있는 그룹에 사용자를 추가합니다.",
      "C": "ALB(Application Load Balancer) 뒤에 있는 Amazon EC2 인스턴스를 사용하여 이미지를 저장합니다. 회사가 서비스를 제공하는 국가에만 인스턴스를 배포하세요. 고객에게 특정 국가의 인스턴스에 대한 ALB에 대한 링크를 제공하십시오.",
      "D": "Amazon S3를 사용하여 이미지를 저장합니다. 지리적 제한이 있는 이미지를 배포하려면 Amazon CloudFront 를 사용하십시오. 각 고객이 CloudFront 의 데이터에 액세스할 수 있도록 서명된 URL을 제공합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ CloudFront Geo-Restriction — 국가별 콘텐츠 차단(whitelist/blacklist)\n▸ Signed URLs — 시간 제한이 있는 임시 액세스 토큰, 불법 공유 방지\n\n【정답 포인트】\n▸ 지역 제한 구현 → CloudFront Geo-Restriction으로 특정 국가 차단\n▸ 보안 + 저작권 → 서명된 URL로 각 고객의 접근 제어, 비용 최소화\n▸ 글로벌 성능 → CDN 캐싱으로 빠른 로드, 엣지 로케이션 활용\n\n【오답 체크】\n(A) Public bucket은 지리 제한 불가능, 저작권 보호 부실\n(B) IAM 사용자 생성은 스케일링 관리 복잡(고객 수 증가시), 저작권 보호 약함\n(C) EC2는 고정 위치, 글로벌 성능 목표 달성 불가(네트워크 대역폭 비용), 확장성 떨어짐\n\n【시험 포인트】\n▸ 글로벌 + 지리 제한 + 저작권 → CloudFront + Geo-Restriction + Signed URL 조합\n▸ 함정 → IAM 사용자 관리로 과도한 운영 오버헤드, CDN의 비용 절감 효과 간과"
  },
  {
    "id": 593,
    "question": "솔루션 아키텍트는 가용성이 뛰어난 Redis용 Amazon ElastiCache 기반 솔루션을 설계하고 있습니다. 솔루션 아키텍트는 장애로 인해 로컬 및 AWS 리전 내에서 성능 저하 또는 데이터 손실이 발생하지 않도록 해야 합니다. 솔루션은 노드 수준과 지역 수준에서 고가용성을 제공해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "여러 노드가 포함된 샤드가 있는 다중 AZ Redis 복제 그룹을 사용하십시오.",
      "B": "Redis AOF(Append Only Files)가 활성화된 여러 노드가 포함된 Redis 샤드를 사용합니다.",
      "C": "복제 그룹에 두 개 이상의 읽기 전용 복제본이 있는 다중 AZ Redis 클러스터를 사용합니다.",
      "D": "Auto Scaling이 활성화된 여러 노드가 포함된 Redis 샤드를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Multi-AZ Replication Group — AZ 간 자동 페일오버, 데이터 복제\n▸ Shard(샤드) — Redis 클러스터 내 파티션 단위\n\n【정답 포인트】\n▸ 노드 수준 HA → 샤드 내 여러 노드로 주/복제 구성, 자동 페일오버\n▸ 리전 수준 HA → 다중 AZ 배치로 AZ 장애 시 다른 AZ로 즉시 전환\n▸ 데이터 손실 방지 → 복제 그룹의 동기식 복제\n\n【오답 체크】\n(B) AOF는 지속성(Durability) 추가, AZ 간 고가용성 제공 안 함(단일 노드 기반)\n(C) 클러스터는 스케일링에 유리하지만, 문제에서는 HA 요구이고 복제 그룹으로 충분\n(D) Auto Scaling은 수평 확장용, 노드/리전 수준 장애 대응 불가\n\n【시험 포인트】\n▸ 두 계층 HA(노드+리전) → Multi-AZ Replication Group 선택 트리거\n▸ 함정 → AOF를 HA로 착각, 클러스터와 복제 그룹의 목적 구분 필요"
  },
  {
    "id": 594,
    "question": "회사는 AWS 로 마이그레이션하고 애플리케이션에 Amazon EC2 온디맨드 인스턴스를 사용할 계획입니다. 마이그레이션 테스트 단계에서 기술 팀은 애플리케이션이 완전히 생산되기 위해 메모리를 실행하고 로드하는 데 오랜 시간이 걸린다는 사실을 관찰했습니다. 다음 테스트 단계에서 애플리케이션 실행 시간을 단축할 솔루션은 무엇입니까?",
    "options": {
      "A": "두 개 이상의 EC2 온디맨드 인스턴스를 시작합니다. Auto Scaling 기능을 활성화하고 다음 테스트 단계에서 EC2 온디맨드 인스턴스를 사용할 수 있도록 하십시오.",
      "B": "EC2 스팟 인스턴스를 시작하여 애플리케이션을 지원하고 다음 테스트 단계에서 사용할 수 있도록 애플리케이션을 확장합니다.",
      "C": "최대 절전 모드를 활성화한 상태에서 EC2 온디맨드 인스턴스를 시작합니다. 다음 테스트 단계에서 EC2 Auto Scaling 웜 풀을 구성합니다.",
      "D": "용량 예약을 통해 EC2 온디맨드 인스턴스를 시작합니다. 다음 테스트 단계에서 추가 EC2 인스턴스를 시작하십시오."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Hibernation(최대 절전 모드) — 인스턴스 메모리 상태를 EBS에 저장, 빠른 부팅\n▸ Warm Pool(웜 풀) — 미리 초기화된 인스턴스를 대기 상태로 유지\n\n【정답 포인트】\n▸ 부팅 시간 단축 → 최대 절전 모드로 메모리 로드 과정 생략, 즉시 재개\n▸ 테스트 효율화 → 웜 풀로 다음 실행 시 인스턴스 준비 완료\n▸ 비용-성능 → 온디맨드 인스턴스 활용, 절전 상태로 비용 절감\n\n【오답 체크】\n(A) Auto Scaling은 스케일 아웃, 부팅 시간 단축과 무관(여전히 메모리 로드 필요)\n(B) Spot 인스턴스는 비용이지 성능 아님, 중단 위험(테스트에 부적합)\n(D) 용량 예약은 가용성만 보장, 부팅 시간 단축 기능 없음\n\n【시험 포인트】\n▸ 부팅/시작 시간 → 최대 절전 모드 (메모리 상태 복원)\n▸ 함정 → 스케일링(수평 확장)으로 착각, 웜 풀과 최대 절전 모드의 조합이 핵심"
  },
  {
    "id": 595,
    "question": "회사의 애플리케이션은 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행됩니다. 회사는 해당 애플리케이션이 일주일 중 임의의 요일에 갑작스러운 트래픽 증가를 경험한다는 사실을 발견했습니다. 회사는 갑작스러운 트래픽 증가 중에도 애플리케이션 성능을 유지하려고 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Auto Scaling 그룹의 크기를 변경하려면 수동 스케일링을 사용하십시오.",
      "B": "예측 조정을 사용하여 Auto Scaling 그룹의 크기를 변경합니다.",
      "C": "동적 스케일링을 사용하여 Auto Scaling 그룹의 크기를 변경합니다.",
      "D": "일정 조정을 사용하여 Auto Scaling 그룹의 크기를 변경합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Dynamic Scaling — 실시간 지표(CPU, 메모리)로 즉각 스케일 아웃\n▸ Spontaneous Traffic — 예측 불가능한 수요 변화\n\n【정답 포인트】\n▸ 실시간 반응 → 갑작스러운 트래픽 증가를 CloudWatch 지표로 감지, 즉시 인스턴스 추가\n▸ 비용 효율성 → 과도한 사전 할당 불필요, 필요 시에만 확장\n▸ 자동화 → 수동 개입 없음, 항상 성능 유지\n\n【오답 체크】\n(A) 수동 스케일링은 반응 시간 길어짐, 갑작스러운 변화에 부적절\n(B) 예측 조정은 ML 기반으로 '예측 가능한 패턴' 필요, 임의의 요일 증가는 학습 어려움\n(D) 일정 조정은 고정된 시간(매일 9시 등)에만 작동, '임의의 요일' 조건 불일치\n\n【시험 포인트】\n▸ 예측 불가능한 피크 → 동적 스케일링 (메트릭 기반)\n▸ 함정 → 예측 조정의  'ML' 이름에 혹하기, 비용 효율성 키워드로 과할당 피하는 점"
  },
  {
    "id": 596,
    "question": "전자상거래 애플리케이션은 Amazon EC2 인스턴스에서 실행되는 PostgreSQL 데이터베이스를 사용합니다. 월별 판매 이벤트 중에 데이터베이스 사용량이 증가하고 애플리케이션에 대한 데이터베이스 연결 문제가 발생합니다. 후속 월별 판매 이벤트에 대한 트래픽은 예측할 수 없으며 이는 판매 예측에 영향을 미칩니다. 회사는 예측할 수 없는 트래픽 증가가 있을 때 성능을 유지해야 합니다. 가장 비용 효과적인 방법으로 이 문제를 해결하는 솔루션은 무엇입니까?",
    "options": {
      "A": "PostgreSQL 데이터베이스를 Amazon Aurora Serverless v2로 마이그레이션합니다.",
      "B": "증가된 사용량을 수용하기 위해 EC2 인스턴스의 PostgreSQL 데이터베이스에 대한 자동 크기 조정을 활성화합니다.",
      "C": "더 큰 인스턴스 유형을 사용하여 PostgreSQL 데이터베이스를 PostgreSQL 용 Amazon RDS로 마이그레이션합니다.",
      "D": "증가된 사용량을 수용하기 위해 PostgreSQL 데이터베이스를 Amazon Redshift 로 마이그레이션합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Aurora Serverless v2 — 자동 확장 DB, 연결 풀링 제공\n▸ Unpredictable Traffic — 예측 불가능한 변수 용량 증가\n\n【정답 포인트】\n▸ 자동 확장 → ACU(Aurora Capacity Units)로 초 단위 자동 조정\n▸ 연결 풀링 → 데이터베이스 연결 문제 해결(RDS Proxy 기능 내장)\n▸ 비용 효율성 → 사용량만큼 비용 부담, 과할당 불필요\n\n【오답 체크】\n(B) EC2 자동 크기 조정은 인스턴스 전체 업그레이드, 다운타임 발생\n(C) RDS 수동 업그레이드는 예측 불가능 트래픽에 선반응 불가, 유연성 떨어짐\n(D) Redshift는 OLAP(분석) 전용, OLTP 판매 이벤트 실시간 처리 부적합\n\n【시험 포인트】\n▸ 예측 불가 + 연결 문제 → Aurora Serverless v2 (자동 확장 + 연결 풀링)\n▸ 함정 → RDS 성능 개선으로 놓치기, Serverless의 ACU 기반 자동 조정이 핵심"
  },
  {
    "id": 597,
    "question": "회사는 Amazon API Gateway 및 AWS Lambda 를 사용하여 AWS 에서 내부 서버리스 애플리케이션을 호스팅합니다. 회사 직원들은 매일 애플리케이션을 사용하기 시작할 때 대기 시간이 길어지는 문제를 보고합니다. 회사는 대기 시간을 줄이고 싶어합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "API 게이트웨이 조절 한도를 늘리십시오.",
      "B": "직원이 매일 애플리케이션을 사용하기 전에 Lambda 프로비저닝 동시성을 높이기 위해 예약된 조정을 설정합니다.",
      "C": "Amazon CloudWatch 경보를 생성하여 매일 시작 시 경보 대상으로 Lambda 함수를 시작합니다.",
      "D": "Lambda 함수 메모리를 늘립니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Cold Start — Lambda 함수 초기 시작 시 발생하는 지연\n▸ Provisioned Concurrency — 미리 초기화된 Lambda 환경 유지\n\n【정답 포인트】\n▸ Cold Start 해결 → Scheduled Action으로 근무 시작 전 미리 인스턴스 웜업\n▸ 정시성 → 매일 일정 시간(예: 8시)에 프로비저닝 동시성 증가, 직원 접근 시 즉시 대응\n▸ 비용 효율성 → 필요한 시간대만 프로비저닝, 불필요 시간은 감소\n\n【오답 체크】\n(A) 조절 한도는 요청 제한(Throttling)이지, Cold Start 지연과 무관\n(C) CloudWatch 경보는 반응형(반응 후 함수 시작), 이미 지연 발생\n(D) 메모리 증가는 초기화 시간 단축 조금, Cold Start 근본 해결 아님\n\n【시험 포인트】\n▸ 매일 정시 지연 → 예약된 프로비저닝 동시성 (Scheduled Action)\n▸ 함정 → 메모리/API 조절로 착각, Cold Start는 함수 환경 초기화 시간이 문제"
  },
  {
    "id": 598,
    "question": "연구 회사에서는 온프레미스 장치를 사용하여 분석용 데이터를 생성합니다. 회사는 AWS 클라우드를 사용하여 데이터를 분석하려고 합니다. 장치는 .csv 파일을 생성하고 SMB 파일 공유에 데이터 쓰기를 지원합니다. 회사 분석가는 SQL 명령을 사용하여 데이터를 쿼리할 수 있어야 합니다. 분석가는 하루 종일 주기적으로 쿼리를 실행합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "Amazon S3 파일 게이트웨이 모드로 온프레미스에 AWS Storage Gateway를 배포합니다.",
      "B": "Amazon FSx File Gateway를 통해 온프레미스에 AWS Storage Gateway를 배포합니다.",
      "C": "Amazon S3 에 있는 데이터를 기반으로 테이블을 생성하도록 AWS Glue 크롤러를 설정합니다.",
      "D": "EMRFS(EMR 파일 시스템)를 사용하여 Amazon EMR 클러스터를 설정하여 Amazon S3에 있는 데이터를 쿼리합니다. 분석가에 대한 액세스를 제공합니다.",
      "E": "Amazon S3 에 있는 데이터를 쿼리하도록 Amazon Redshift 클러스터를 설정합니다. 분석가에 대한 액세스를 제공합니다. F. Amazon S3에 있는 데이터를 쿼리하도록 Amazon Athena를 설정합니다. 분석가에 대한 액세스를 제공합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ Storage Gateway S3 File Gateway — SMB/NFS로 온프레미스 연결, S3 자동 동기화\n▸ Glue Crawler — S3의 CSV를 메타데이터 테이블로 자동 생성\n▸ Athena — Serverless SQL 쿼리 엔진, S3 데이터 직접 분석\n\n【정답 포인트】\n▸ 온프레미스 연결 → S3 File Gateway로 SMB 공유를 S3에 동기화\n▸ 메타데이터 구성 → Glue Crawler로 CSV → 테이블 변환(자동)\n▸ SQL 쿼리 → Athena로 서버리스 SQL, 비용 효율성(쿼리 데이터양 기반 결제)\n\n【오답 체크】\n(B) FSx File Gateway는 Windows/NAS 네이티브 지원, 대상(SMB)과 부합하나 E/F보다 비용 높음\n(D) EMR은 클러스터 운영 오버헤드 높음, 대량 배치 처리(파일 기반 아님)에 더 적합\n(E) Redshift는 DW급 성능이나, 비용 높고(항상 실행), 주기적 쿼리 요구사항 오버스펙\n\n【시험 포인트】\n▸ SMB + S3 + SQL 쿼리 → Storage Gateway(S3 File) + Glue + Athena 조합\n▸ 함정 → EMR/Redshift 클러스터 운영 오버헤드 간과, Athena의 비용 효율성(주기 쿼리)"
  },
  {
    "id": 599,
    "question": "한 회사에서 Amazon Elastic Container Service(Amazon ECS) 클러스터와 Amazon RDS DB 인스턴스를 사용하여 결제 처리 애플리케이션을 구축하고 실행하려고 합니다. 회사는 규정 준수를 위해 온프레미스 데이터 센터에서 애플리케이션을 실행합니다. 솔루션 아키텍트는 AWS Outposts 를 솔루션의 일부로 사용하려고 합니다. 솔루션 설계자는 회사의 운영 팀과 협력하여 애플리케이션을 구축하고 있습니다. 회사 운영팀에서는 어떤 활동을 담당하나요? (3개를 선택하세요.)",
    "options": {
      "A": "Outposts 랙에 탄력적인 전원 및 네트워크 연결을 제공합니다.",
      "B": "Outposts 에서 실행되는 가상화 하이퍼바이저, 스토리지 시스템 및 AWS 서비스를 관리합니다.",
      "C": "데이터 센터 환경의 물리적 보안 및 액세스 제어.",
      "D": "Outposts 랙 내의 전원 공급 장치, 서버 및 네트워킹 장비를 포함한 Outposts 인프라의 가용성.",
      "E": "Outposts 구성 요소의 물리적 유지 관리. F. 서버 오류 및 유지 관리 이벤트를 완화하기 위해 Amazon ECS 클러스터에 추가 용량을 제공합니다."
    },
    "answer": "ACE",
    "explanation": "【핵심 용어】\n▸ Outposts — AWS 서비스를 온프레미스에 배포하는 하이브리드 인프라\n▸ Customer Responsibility — 물리 인프라/보안/유지보수(운영팀)\n▸ AWS Responsibility — 소프트웨어/가상화(B는 AWS 담당)\n\n【정답 포인트】\n▸ 전력/네트워크 — 운영팀이 Outposts 랙의 안정적 전원, 네트워크 제공\n(A) ▸ 물리 보안 — 온프레미스 데이터 센터이므로 출입 통제, 보안 담당\n(C) ▸ 물리 유지보수 — 환경 조건 모니터링, 하드웨어 교체 등\n(E) 【오답 체크】\n(B) 하이퍼바이저/AWS 서비스 관리는 AWS 책임, 운영팀 아님\n(D) Outposts 인프라 가용성(전원, 서버, 네트워킹)은 AWS가 제공, 운영팀은 입력 인프라만\n(F) ECS 클러스터 용량은 애플리케이션 아키텍처 레벨, 운영팀 인프라 책임 외\n\n【시험 포인트】\n▸ Outposts 책임 분담 → 물리(온프레미스)는 운영팀, 소프트웨어는 AWS\n▸ 함정 → B/D/F(AWS 책임)를 운영팀으로 착각, Shared Responsibility Model 이해"
  },
  {
    "id": 600,
    "question": "회사는 TCP 기반 애플리케이션을 회사의 VPC 로 마이그레이션할 계획입니다. 애플리케이션은 회사 데이터 센터의 하드웨어 어플라이언스를 통해 비표준 TCP 포트에서 공개적으로 액세스할 수 있습니다. 이 퍼블릭 엔드포인트는 짧은 대기 시간으로 초당 최대 300 만 개의 요청을 처리할 수 있습니다. 회사는 AWS 의 새로운 퍼블릭 엔드포인트에 대해 동일한 수준의 성능을 요구합니다. 이 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "NLB(Network Load Balancer)를 배포합니다. 애플리케이션에 필요한 TCP 포트를 통해 공개적으로 액세스할 수 있도록 NLB를 구성합니다.",
      "B": "ALB(Application Load Balancer)를 배포합니다. 애플리케이션에 필요한 TCP 포트를 통해 공개적으로 액세스할 수 있도록 ALB를 구성하십시오.",
      "C": "애플리케이션에 필요한 TCP 포트를 수신하는 Amazon CloudFront 배포를 배포합니다. Application Load Balancer를 원본으로 사용합니다.",
      "D": "애플리케이션에 필요한 TCP 포트로 구성된 Amazon API Gateway API 를 배포합니다. 요청을 처리하기 위해 프로비저닝된 동시성을 사용하여 AWS Lambda 함수를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ NLB(Network Load Balancer) — 극저지연, 초당 백만 건 이상 요청 처리\n▸ Throughput — 초당 300만 요청(극대규모 트래픽)\n▸ TCP 기반 — HTTP/HTTPS 아님, 비표준 포트 지원\n\n【정답 포인트】\n▸ 초대규모 처리량 → NLB는 초당 300만 요청 처리 가능, ALB 대비 100배 성능\n▸ 극저지연 → NLB 100마이크로초 수준 처리, 데이터 센터 어플라이언스 성능 대응\n▸ TCP 비표준 포트 → NLB는 레이어 4(TCP/UDP), 비표준 포트 완벽 지원\n\n【오답 체크】\n(B) ALB는 HTTP/HTTPS(레이어 7), 초당 수십만 요청만 처리 가능, 성능 미달\n(C) CloudFront는 콘텐츠 캐싱용, 실시간 TCP 애플리케이션 부적합, CDN 오버헤드\n(D) API Gateway는 HTTP/REST, Lambda 비동기 특성상 300만 RPS 불가능\n\n【시험 포인트】\n▸ 극저지연 + 극대규모 처리량 + TCP → NLB (Layer 4)\n▸ 함정 → ALB/API Gateway는 레이어 7, 처리량 한계 간과, 비표준 포트 지원도 고려"
  },
  {
    "id": 601,
    "question": "회사는 PostgreSQL DB 인스턴스용 Amazon RDS에서 중요 데이터베이스를 실행합니다. 이 회사는 가동 중지 시간과 데이터 손실을 최소화하면서 Amazon Aurora PostgreSQL 로 마이그레이션하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "RDS for PostgreSQL DB 인스턴스의 DB 스냅샷을 생성하여 새로운 Aurora PostgreSQL DB 클러스터를 채웁니다.",
      "B": "RDS for PostgreSQL DB 인스턴스의 Aurora 읽기 전용 복제본을 생성합니다. Aurora 읽기 복제를 새로운 Aurora PostgreSQL DB 클러스터로 승격합니다.",
      "C": "Amazon S3 에서 데이터 가져오기를 사용하여 데이터베이스를 Aurora PostgreSQL DB 클러스터로 마이그레이션합니다.",
      "D": "pg_dump 유틸리티를 사용하여 PostgreSQL 용 RDS 데이터베이스를 백업합니다. 새 Aurora PostgreSQL DB 클러스터로 백업을 복원합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Aurora Read Replica — RDS PostgreSQL의 비동기 읽기 복제본, Aurora 엔진\n▸ Promotion — 읽기 복제본을 독립 클러스터로 승격(최소 다운타임)\n\n【정답 포인트】\n▸ 무다운타임 → 읽기 복제본 생성 중 원본 DB 계속 쓰기 가능\n▸ 데이터 손실 최소 → 복제본 승격 시점 직전까지 동기화\n▸ 운영 오버헤드 최소 → 자동 마이그레이션, 수동 스크립트 불필요\n\n【오답 체크】\n(A) 스냅샷 복원은 구 시점 기준, 마이그레이션 중 신규 데이터 손실 가능\n(C) S3 가져오기는 초기 마이그레이션만, 진행 중 변경사항 반영 불가\n(D) pg_dump는 시간 소모, 복원 과정 길어 다운타임 발생 가능\n\n【시험 포인트】\n▸ RDS → Aurora 마이그레이션 + 무다운타임 → Aurora Read Replica + Promotion\n▸ 함정 → 스냅샷으로 간단히 복원 불가(데이터 손실), 읽기 복제의 지속 동기화 가치"
  },
  {
    "id": 602,
    "question": "회사의 인프라는 Amazon Elastic Block Store(Amazon EBS) 스토리지를 사용하는 수백 개의 Amazon EC2 인스턴스로 구성됩니다. 솔루션 아키텍트는 재해 발생 후 모든 EC2 인스턴스를 복구할 수 있는지 확인해야 합니다. 최소한의 노력으로 이 요구 사항을 충족하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": {
      "A": "각 EC2 인스턴스에 연결된 EBS 스토리지의 스냅샷을 찍습니다. EBS 스토리지에서 새 EC2 인스턴스를 시작하려면 AWS CloudFormation 템플릿을 생성하세요.",
      "B": "각 EC2 인스턴스에 연결된 EBS 스토리지의 스냅샷을 찍습니다. AWS Elastic Beanstalk를 사용하여 EC2 템플릿 기반으로 환경을 설정하고 EBS 스토리지를 연결하세요.",
      "C": "AWS Backup을 사용하여 전체 EC2 인스턴스 그룹에 대한 백업 계획을 설정합니다. AWS Backup API 또는 AWS CLI 를 사용하면 여러 EC2 인스턴스의 복원 프로세스 속도를 높일 수 있습니다.",
      "D": "각 EC2 인스턴스에 연결된 EBS 스토리지의 스냅샷을 찍고 Amazon 머신 이미지(AMI)를 복사하는 AWS Lambda 함수를 생성합니다. 복사된 AMI 로 복원을 수행하고 EBS 스토리지를 연결하는 또 다른 Lambda 함수를 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Backup — 중앙 백업 관리, 정책 기반 자동화\n▸ 수백 개 인스턴스 — 대규모 배치 복구 요구\n▸ 최소 운영 오버헤드 — 자동화, 스케일 처리\n\n【정답 포인트】\n▸ 중앙 집중식 관리 → 정책 1개로 모든 인스턴스 백업\n▸ 배치 복구 → API/CLI로 수백 인스턴스 동시 복구 자동화\n▸ 최소 노력 → CloudFormation 템플릿/Lambda 작성 불필요, 클릭만으로 복원\n\n【오답 체크】\n(A) CloudFormation 템플릿은 수백 인스턴스마다 작성해야 함, 유지보수 부담 큼\n(B) Elastic Beanstalk는 애플리케이션 환경용, EC2 인스턴스 개별 복구에 부적합\n(D) Lambda 함수 작성/유지보수는 높은 운영 오버헤드, Backup처럼 간단하지 않음\n\n【시험 포인트】\n▸ 대규모 인스턴스 + 배치 복구 → AWS Backup (정책 기반 자동화)\n▸ 함정 → EBS 스냅샷만으로 부족(인스턴스 메타데이터), Backup의 통합 복구 가치"
  },
  {
    "id": 603,
    "question": "최근 한 회사가 AWS 클라우드로 마이그레이션했습니다. 회사는 반구조화된 데이터 세트의 대규모 병렬 주문형 처리를 위한 서버리스 솔루션을 원합니다. 데이터는 Amazon S3 에 저장되는 로그, 미디어 파일, 판매 거래 및 IoT 센서 데이터로 구성됩니다. 회사는 데이터 세트에 있는 수천 개의 항목을 병렬로 처리하는 솔루션을 원합니다. 가장 효율적인 운영 효율성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "인라인 모드에서 AWS Step Functions 맵 상태를 사용하여 데이터를 병렬로 처리합니다.",
      "B": "분산 모드에서 AWS Step Functions 맵 상태를 사용하여 데이터를 병렬로 처리합니다.",
      "C": "AWS Glue를 사용하여 데이터를 병렬로 처리합니다.",
      "D": "여러 AWS Lambda 함수를 사용하여 데이터를 병렬로 처리합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Step Functions Distributed Map — 대규모 병렬 처리, 수천~수백만 항목\n▸ Inline Map — 소규모(<100항목), 동기식 처리\n▸ Serverless — 운영 오버헤드 제로\n\n【정답 포인트】\n▸ 수천 개 항목 → 분산 모드의 대규모 병렬 처리(Inline은 성능 부족)\n▸ 서버리스 → 인프라 관리 불필요, 스케일 자동\n▸ 운영 효율성 → 상태 머신 정의만으로 병렬화 자동 처리\n\n【오답 체크】\n(A) Inline 모드는 동기식, 몇백 항목 최대, 수천 개 처리 시 타임아웃/비효율\n(C) Glue는 ETL 배치, 주문형(온디맨드) 처리보다 스케줄 기반, 서버리스 아님\n(D) Lambda 다중 호출은 조율 복잡, Step Functions(상태 머신)처럼 간단하지 않음\n\n【시험 포인트】\n▸ 대규모 병렬 + 서버리스 → Step Functions Distributed Map\n▸ 함정 → Inline/Glue/Lambda 단순 병렬로 착각, Distributed Map의 대규모 처리 능력"
  },
  {
    "id": 604,
    "question": "회사는 6주 안에 10PB의 데이터를 Amazon S3로 마이그레이션할 예정입니다. 현재 데이터 센터에는 인터넷에 대한 500Mbps 업링크가 있습니다. 다른 온프레미스 애플리케이션은 업링크를 공유합니다. 회사는 이 일회성 마이그레이션 작업에 인터넷 대역폭의 80%를 사용할 수 있습니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "데이터를 Amazon S3 로 마이그레이션하고 자동으로 데이터를 확인하도록 AWS DataSync를 구성합니다.",
      "B": "rsync를 사용하여 데이터를 Amazon S3로 직접 전송합니다.",
      "C": "AWS CLI와 여러 복사 프로세스를 사용하여 데이터를 Amazon S3에 직접 보냅니다.",
      "D": "여러 AWS Snowball 디바이스를 주문합니다. 데이터를 장치에 복사합니다. 디바이스를 AWS로 보내 데이터를 Amazon S3에 복사합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Snowball — 물리 데이터 전송 어플라이언스, 네트워크 독립\n▸ 10PB × 6주 — 인터넷 대역폭으로 불가능(계산: 10PB ÷ 6주 ≈ 1.2Pbps 이상)\n▸ 80% × 500Mbps = 400Mbps — 네트워크 용량 극히 제한적\n\n【정답 포인트】\n▸ 물리 전송 → Snowball은 네트워크 제약 회피, 페타바이트급 빠른 이전\n▸ 6주 일정 → 인터넷 전송(수개월 소요) 불가, Snowball(배송 포함 6주 가능)\n▸ 대역폭 보호 → 다른 애플리케이션 영향 제로(물리 장치 사용)\n\n【오답 체크】\n(A) DataSync는 400Mbps로도 10PB는 수개월 걸림, 6주 불가\n(B) rsync 직접 전송도 동일 대역폭 제약, 6주 불가능\n(C) CLI 직접 전송도 최대 400Mbps, 시간 계산상 불가능\n\n【시험 포인트】\n▸ 페타바이트 + 제한된 대역폭 + 짧은 기간 → Snowball (물리 전송)\n▸ 함정 → 네트워크 대역폭으로 계산 가능할 것처럼 보이기, 실제 시간 계산 필수"
  },
  {
    "id": 605,
    "question": "회사에는 온프레미스 ISCSI(Internet Small Computer Systems Interface) 네트워크 스토리지 서버가 여러 대 있습니다. 회사는 AWS 클라우드로 이동하여 이러한 서버의 수를 줄이고 싶어합니다. 솔루션 설계자는 자주 사용되는 데이터에 대한 짧은 대기 시간 액세스를 제공하고 최소한의 인프라 변경으로 온프레미스 서버에 대한 종속성을 줄여야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon S3 파일 게이트웨이를 배포합니다.",
      "B": "Amazon S3에 대한 백업과 함께 Amazon Elastic Block Store(Amazon EBS) 스토리지를 배포합니다.",
      "C": "저장된 볼륨으로 구성된 AWS Storage Gateway 볼륨 게이트웨이를 배포합니다.",
      "D": "캐시된 볼륨으로 구성된 AWS Storage Gateway 볼륨 게이트웨이를 배포합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Cached Volume — 자주 사용 데이터는 로컬 캐시, 전체 데이터는 S3 저장\n▸ Stored Volume — 모든 데이터 로컬 저장(캐시 아님), 서버 크기 커짐\n▸ iSCSI 호환성 — 온프레미스 애플리케이션 변경 최소화\n\n【정답 포인트】\n▸ 짧은 지연 시간 → 캐시된 볼륨이 자주 사용 데이터 로컬 저장\n▸ 서버 수 감축 → S3에 전체 저장하므로 온프레미스 용량 불필요\n▸ 최소 변경 → iSCSI 인터페이스 유지, 애플리케이션 코드 수정 불필요\n\n【오답 체크】\n(A) S3 File Gateway는 SMB/NFS용, iSCSI 미지원\n(B) EBS는 클라우드 스토리지, iSCSI 지원 불가, 애플리케이션 변경 필요\n(C) Stored Volume은 모든 데이터 로컬 저장, 온프레미스 서버 크기 여전히 커짐\n\n【시험 포인트】\n▸ iSCSI + 로컬 캐시 + 용량 절감 → Cached Volume\n▸ 함정 → Stored Volume과 Cached Volume 혼동, '자주 사용' 키워드로 캐시 필요성 파악"
  },
  {
    "id": 606,
    "question": "솔루션 아키텍트는 비즈니스 사용자가 Amazon S3 에 객체를 업로드할 수 있는 애플리케이션을 설계하고 있습니다. 솔루션은 객체 내구성을 극대화해야 합니다. 또한 객체는 언제든지 언제든지 쉽게 사용할 수 있어야 합니다. 사용자는 객체가 업로드된 후 처음 30 일 이내에 객체에 자주 액세스하지만 30 일보다 오래된 객체에는 사용자가 액세스할 가능성이 훨씬 적습니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 수명 주기 규칙을 사용하여 모든 객체를 S3 Standard에 저장하여 30일 후에 객체를 S3 Glacier로 전환합니다.",
      "B": "30 일 후에 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환하려면 S3 수명 주기 규칙을 사용하여 모든 객체를 S3 Standard에 저장합니다.",
      "C": "30 일 후에 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환하는 S3 수명 주기 규칙을 사용하여 모든 객체를 S3 Standard에 저장합니다.",
      "D": "S3 수명 주기 규칙을 사용하여 모든 객체를 S3 Intelligent-Tiering 에 저장하여 30 일 후에 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 Standard — 높은 내구성(11개 9s), 즉시 액세스 최적\n▸ S3 Standard-IA — 낮은 빈도 접근, 내구성 유지, 저장소 비용 절감\n▸ S3 Glacier — 장기 보관용, 검색 시간 길어짐\n▸ 내구성 극대화 — 단일 AZ 저장 불가\n\n【정답 포인트】\n▸ 초기 30일 → S3 Standard(높은 내구성, 빠른 접근)\n▸ 30일 후 → Standard-IA(내구성 유지, 비용 절감)\n▸ 내구성 = 다중 AZ 필수 → Standard-IA는 다중 AZ, One Zone-IA는 단일 AZ\n\n【오답 체크】\n(A) Glacier는 '쉽게 사용 가능'(즉시 접근) 요구사항 미충족, 검색 시간 소모\n(C) One Zone-IA는 단일 AZ 저장, 내구성 극대화 불가능(중단 위험)\n(D) Intelligent-Tiering은 자동 이전이지만, 추가 요금 있음, Standard-IA 단순 적용이 더 저렴\n\n【시험 포인트】\n▸ 내구성 극대화 + 비용 효율 + 접근 패턴 → Standard → Standard-IA (다중 AZ)\n▸ 함정 → Glacier의 '장기' 보관, One Zone의 단일 AZ, 내구성 극대화 조건 간과"
  },
  {
    "id": 607,
    "question": "한 회사가 온프레미스 데이터 센터에서 AWS 클라우드로 2 계층 애플리케이션을 마이그레이션했습니다. 데이터 계층은 12TB 의 범용 SSD Amazon Elastic Block Store(Amazon EBS) 스토리지를 갖춘 Oracle 용 Amazon RDS 의 다중 AZ 배포입니다. 이 애플리케이션은 평균 문서 크기가 6MB 인 이진 대형 개체(BLOB)로 데이터베이스의 문서를 처리하고 저장하도록 설계되었습니다. 시간이 지남에 따라 데이터베이스 크기가 증가하여 성능이 저하되고 스토리지 비용이 증가했습니다. 회사는 데이터베이스 성능을 개선해야 하며 가용성과 탄력성이 뛰어난 솔루션이 필요합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "RDS DB 인스턴스 크기를 줄입니다. 스토리지 용량을 24TiB 로 늘립니다. 스토리지 유형을 마그네틱으로 변경합니다.",
      "B": "RDS DB 인스턴스 크기를 늘리십시오. 스토리지 용량을 24Ti 로 늘립니다. 스토리지 유형을 프로비저닝된 IOPS로 변경합니다.",
      "C": "Amazon S3 버킷을 생성합니다. S3 버킷에 문서를 저장하도록 애플리케이션을 업데이트합니다. 기존 데이터베이스에 개체 메타데이터를 저장합니다.",
      "D": "Amazon DynamoDB 테이블을 생성합니다. DynamoDB 를 사용하도록 애플리케이션을 업데이트합니다. AWS Database Migration Service(AWS DMS)를 사용하여 Oracle 데이터베이스에서 DynamoDB로 데이터를 마이그레이션합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ BLOB(Binary Large Object) — 문서, 이미지 등 큰 이진 파일\n▸ 데이터베이스 팽창 → 성능 저하, 비용 증가\n▸ 분리 아키텍처 — 메타데이터(DB) ↔ 콘텐츠(S3)\n\n【정답 포인트】\n▸ BLOB을 S3로 이동 → DB 크기 축소, 성능 향상\n▸ 메타데이터 유지 → 조회/검색은 RDS, 콘텐츠는 S3 URL로 링크\n▸ 비용 효율성 → S3는 저장소 비용 저렴, 탄력성/가용성 내장\n▸ 확장성 → 페타바이트급 콘텐츠도 S3에서 무제한 처리\n\n【오답 체크】\n(A) 마그네틱은 구형 저장소, 성능 오히려 악화, 24TB 증설 비용만 증가\n(B) 인스턴스/스토리지 업그레이드는 근본 해결 아님, BLOB 크기가 계속 증가하면 반복\n(D) DynamoDB는 문서 저장에 부적합(항목 크기 400KB 제한), Oracle→DynamoDB 마이그레이션 복잡\n\n【시험 포인트】\n▸ BLOB + DB 성능 저하 → S3로 파일 분리 (메타데이터만 DB)\n▸ 함정 → 인스턴스 업그레이드로 성능 개선 시도, 근본 원인(BLOB 저장)을 놓침"
  },
  {
    "id": 608,
    "question": "회사에는 전 세계 20,000 개 이상의 소매점 위치에 배포된 클라이언트에게 서비스를 제공하는 애플리케이션이 있습니다. 애플리케이션은 포트 443에서 HTTPS를 통해 노출되는 백엔드 웹 서비스로 구성됩니다. 애플리케이션은 ALB(Application Load Balancer) 뒤의 Amazon EC2 인스턴스에서 호스팅됩니다. 소매점은 공용 인터넷을 통해 웹 애플리케이션과 통신합니다. 회사는 각 소매점에서 현지 ISP 가 할당한 IP 주소를 등록할 수 있도록 허용합니다. 회사 보안팀에서는 소매점에서 등록한 IP 주소로만 접속을 제한하여 애플리케이션 엔드포인트의 보안을 강화할 것을 권장합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "AWS WAF 웹 ACL 을 ALB 와 연결합니다. ALB 의 IP 규칙 세트를 사용하여 트래픽을 필터링합니다. 등록된 IP 주소를 포함하도록 규칙의 IP 주소를 업데이트합니다.",
      "B": "AWS Firewall Manager 를 배포하여 ALConfigure 방화벽 규칙을 관리하여 AL 로의 트래픽을 제한합니다. 등록된 IP 주소를 포함하도록 방화벽 규칙을 수정합니다.",
      "C": "Amazon DynamoDB 테이블에 IP 주소를 저장합니다. ALB 에서 AWS Lambda 인증 기능을 구성하여 수신 요청이 등록된 IP 주소에서 오는지 확인합니다.",
      "D": "ALB 의 공용 인터페이스가 포함된 서브넷에서 네트워크 ACL 을 구성합니다. 등록된 각 IP 주소에 대한 항목으로 네트워크 ACL의 수신 규칙을 업데이트합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS WAF(Web Application Firewall) — HTTP/HTTPS 기반 IP 화이트리스트\n▸ IP Set — WAF에서 관리하는 동적 IP 목록\n▸ ALB 앞단 보안 — 애플리케이션 레벨 필터링\n\n【정답 포인트】\n▸ 동적 IP 관리 → IP Set으로 등록된 IP만 허용, 추가/제거 쉬움\n▸ HTTP/HTTPS 레벨 → ALB와 직접 연결, 요청 전 차단\n▸ 확장성 → 20,000개 IP도 IP Set으로 관리 가능\n▸ 중앙 관리 → AWS WAF 콘솔에서 일괄 업데이트\n\n【오답 체크】\n(B) Firewall Manager는 조직 전체 방화벽 정책 관리, 단일 ALB IP 필터링에 오버스펙\n(C) DynamoDB + Lambda는 복잡한 커스텀 로직, WAF IP Set처럼 간단하지 않고 비용도 높음\n(D) Network ACL은 서브넷 레벨, ALB 단계에서 필터링 불가(애플리케이션 도달 후 차단), 비효율\n\n【시험 포인트】\n▸ HTTP/HTTPS + IP 화이트리스트 → AWS WAF + IP Set\n▸ 함정 → Network ACL(저수준), Lambda(복잡), Firewall Manager(과도)로 착각, WAF의 간편성"
  },
  {
    "id": 609,
    "question": "회사에서 AWS Lake Formation 을 사용하여 AWS 에 데이터 분석 플랫폼을 구축하고 있습니다. 플랫폼은 Amazon S3 및 Amazon RDS 와 같은 다양한 소스에서 데이터를 수집합니다. 회사는 중요한 정보가 포함된 데이터 부분에 대한 액세스를 방지하기 위한 보안 솔루션이 필요합니다.",
    "options": {
      "A": "Lake Formation 테이블에 액세스할 수 있는 권한이 포함된 IAM 역할을 생성합니다.",
      "B": "데이터 필터를 생성하여 행 수준 보안 및 셀 수준 보안을 구현합니다.",
      "C": "Lake Formation이 다시 데이터를 수집하기 전에 민감한 정보를 제거하는 AWS Lambda 함수를 생성합니다.",
      "D": "Lake Formation 테이블에서 민감한 정보를 주기적으로 쿼리하고 제거하는 AWS Lambda 함수를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Lake Formation — 데이터 레이크 구축 및 보안 관리 서비스\n▸ 행/셀 수준 필터(Row/Cell-level Filters) — 세분화된 데이터 접근 제어 메커니즘\n\n【정답 포인트】\n▸ 민감한 정보 숨김 → 필터링으로 동적 마스킹\n▸ Lake Formation의 핵심 기능: IAM 역할이 아닌 데이터 필터를 통한 실시간 접근 제어. 행/셀 필터를 적용하면 동일 테이블에 접근할 때 사용자 역할에 따라 자동으로 민감 칼럼이나 행을 제외시킴.\n\n【오답 체크】\n(A) IAM 역할만으로는 세분화된 행/셀 제어 불가 — 테이블 수준 권한만 가능\n(C) Lambda로 데이터 사전 제거는 원본 훼손 및 운영 비용 증가\n(D) 주기적 쿼리 및 제거는 실시간 보안 미충족, 실행 지연 발생\n\n【시험 포인트】\n▸ Lake Formation 보안 → 필터(동적) vs IAM(정적) 구분\n▸ 함정: Lambda 자동화는 대량 데이터 처리로 보이지만, Lake Formation 내장 필터가 운영 효율적 (고가용성, 재계산 불필요)"
  },
  {
    "id": 610,
    "question": "회사는 VPC 에서 실행되는 Amazon EC2 인스턴스를 배포합니다. EC2 인스턴스는 나중에 데이터를 처리할 수 있도록 소스 데이터를 Amazon S3 버킷에 로드합니다. 규정 준수법에 따라 데이터는 공용 인터넷을 통해 전송되어서는 안 됩니다. 회사의 온프레미스 데이터 센터에 있는 서버는 EC2 인스턴스에서 실행되는 애플리케이션의 출력을 사용합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon EC2 용 인터페이스 VPC 엔드포인트를 배포합니다. 회사와 VPC 간에 AWS Site-to-Site VPN 연결을 생성합니다.",
      "B": "Amazon S3 용 게이트웨이 VPC 엔드포인트를 배포합니다. 온프레미스 네트워크와 VPC 간에 AWS Direct Connect 연결을 설정합니다.",
      "C": "VPC 에서 S3 버킷으로의 AWS Transit Gateway 연결을 설정합니다. 회사와 VPC 간에 AWS Site-to-Site VPN 연결을 생성합니다.",
      "D": "NAT 게이트웨이에 대한 경로가 있는 프록시 EC2 인스턴스를 설정합니다. S3 데이터를 가져오고 애플리케이션 인스턴스에 공급하도록 프록시 EC2 인스턴스를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 게이트웨이 VPC 엔드포인트(S3용) — S3 접근 시 인터넷 우회, 프라이빗 경로\n▸ AWS Direct Connect — 온프레미스와 AWS 간 고속 전용 네트워크 링크\n\n【정답 포인트】\n▸ EC2→S3 데이터 전송: 게이트웨이 엔드포인트로 인터넷 우회, 테이블 기반 라우팅\n▸ 온프레미스 응용: Direct Connect로 공용망 회피. 두 경로 모두 공용 인터넷 없음 — 규정 준수 충족\n\n【오답 체크】\n(A) EC2용 인터페이스 엔드포인트는 S3에 필수 아님, VPN은 대역폭 제한\n(C) Transit Gateway는 S3 직접 지원 구조 아님, VPN은 공용망 기반\n(D) NAT 게이트웨이는 공용 IP 거쳐서 전송 — 규정 준수 위반\n\n【시험 포인트】\n▸ S3 접근 경로 → 게이트웨이 엔드포인트(VPC 경로 기반, 저비용)\n▸ 온프레미스 연결 → Direct Connect(전용선, 안정적) vs VPN(인터넷 기반, 부적절)"
  },
  {
    "id": 611,
    "question": "회사에는 제 3 자 공급업체로부터 거의 실시간으로 데이터를 수신할 수 있는 REST 기반 인터페이스가 있는 애플리케이션이 있습니다. 일단 수신되면 애플리케이션은 추가 분석을 위해 데이터를 처리하고 저장합니다. 애플리케이션이 Amazon EC2 인스턴스에서 실행 중입니다. 타사 공급업체에서 애플리케이션에 데이터를 보낼 때 503 서비스를 사용할 수 없음 오류가 많이 발생했습니다. 데이터 볼륨이 급증하면 컴퓨팅 용량이 최대 한도에 도달하고 애플리케이션이 모든 요청을 처리할 수 없게 됩니다. 보다 확장 가능한 솔루션을 제공하기 위해 솔루션 설계자는 어떤 디자인을 권장해야 합니까?",
    "options": {
      "A": "Amazon Kinesis Data Streams를 사용하여 데이터를 수집하십시오. AWS Lambda 함수를 사용하여 데이터를 처리합니다.",
      "B": "기존 애플리케이션 위에 Amazon API Gateway 를 사용하십시오. 타사 공급업체에 대한 할당량 제한이 있는 사용량 계획을 만듭니다.",
      "C": "Amazon Simple 알림 서비스(Amazon SNS)를 사용하여 데이터를 수집합니다. Application Load Balancer 뒤의 Auto Scaling 그룹에 EC2 인스턴스를 배치합니다.",
      "D": "애플리케이션을 컨테이너로 다시 패키징합니다. Auto Scaling 그룹과 함께 EC2 시작 유형을 사용하는 Amazon Elastic Container Service(Amazon ECS)를 사용하여 애플리케이션을 배포합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Kinesis Data Streams — 높은 처리량 실시간 데이터 수집 및 버퍼링\n▸ 탈커플링(Decoupling) — 공급자와 처리 시스템 분리로 부하 흡수\n\n【정답 포인트】\n▸ 503 오류 원인: EC2 직접 요청 처리로 용량 부족\n▸ Kinesis는 무제한 수집 → Lambda 비동기 처리로 탈커플링. 공급자는 빠르게 응답받음, Lambda는 유연하게 스케일.\n\n【오답 체크】\n(B) API Gateway 할당량은 처리 능력 미향상, 여전히 EC2 직접 처리\n(C) SNS는 팬아웃 용 — 단순 푸시 서비스, 버퍼링 미지원\n(D) ECS Auto Scaling은 시간 소요, 급증 대응 느림 — Kinesis 버퍼링보다 후발적\n\n【시험 포인트】\n▸ 실시간 대량 수집 → Kinesis(버퍼) + Lambda(서버리스 처리)\n▸ 함정: Auto Scaling은 인스턴스 시작 지연 있음, 즉각 수용 불가"
  },
  {
    "id": 612,
    "question": "회사에는 프라이빗 서브넷의 Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있습니다. 애플리케이션은 Amazon S3 버킷의 민감한 정보를 처리해야 합니다. 애플리케이션은 S3 버킷에 연결하기 위해 인터넷을 사용해서는 안 됩니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "인터넷 게이트웨이를 구성하십시오. 인터넷 게이트웨이에서의 액세스를 허용하도록 S3 버킷 정책을 업데이트합니다. 새 인터넷 게이트웨이를 사용하도록 애플리케이션을 업데이트합니다.",
      "B": "VPN 연결을 구성합니다. VPN 연결에서 액세스를 허용하도록 S3 버킷 정책을 업데이트합니다. 새 VPN 연결을 사용하도록 애플리케이션을 업데이트하세요.",
      "C": "NAT 게이트웨이를 구성합니다. NAT 게이트웨이에서의 액세스를 허용하도록 S3 버킷 정책을 업데이트합니다. 새 NAT 게이트웨이를 사용하도록 애플리케이션을 업데이트합니다.",
      "D": "VPC 엔드포인트를 구성합니다. VPC 엔드포인트에서의 액세스를 허용하도록 S3 버킷 정책을 업데이트합니다. 새 VPC 엔드포인트를 사용하도록 애플리케이션을 업데이트합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ VPC 엔드포인트(S3용 게이트웨이) — AWS 내부 네트워크로만 접근, 인터넷 우회\n▸ 프라이빗 서브넷 — 인터넷 게이트웨이 없는 격리된 네트워크\n\n【정답 포인트】\n▸ 프라이빗 EC2 → S3 접근: 인터넷 사용 금지 조건\n▸ VPC 엔드포인트는 라우팅 테이블 기반으로 S3를 직결 — 애플리케이션 코드 변경 최소, 인터넷 회피\n\n【오답 체크】\n(A) 인터넷 게이트웨이는 공용 접근 — 요구사항 위반\n(B) VPN은 제3자 또는 온프레미스용, S3 접근 시 오버헤드\n(C) NAT 게이트웨이는 공용 IP로 라우팅 — 인터넷 사용 — 조건 위반\n\n【시험 포인트】\n▸ 프라이빗 리소스의 AWS 서비스 접근 → VPC 엔드포인트 (경로 기반, 네이티브)\n▸ 함정: NAT는 아웃바운드 유연성 주지만 인터넷 거침"
  },
  {
    "id": 613,
    "question": "회사는 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용하여 컨테이너 애플리케이션을 실행합니다. EKS 클러스터는 Kubernetes 비밀 객체에 민감한 정보를 저장합니다. 회사는 정보가 암호화되었는지 확인하기를 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까? 최소한의 운영 오버헤드로 요구 사항을 충족합니까?",
    "options": {
      "A": "컨테이너 애플리케이션을 사용하여 AWS Key Management Service(AWS KMS)를 사용하여 정보를 암호화합니다.",
      "B": "AWS Key Management Service(AWS KMS)를 사용하여 EKS 클러스터에서 비밀 암호화를 활성화합니다.",
      "C": "AWS KMS(AWS Key Management Service)를 사용하여 정보를 암호화하는 AWS Lambda tuncuon을 구현합니다.",
      "D": "AWS Systems Manager Parameter Store를 사용하여 AWS Key Management Service(AWS KMS)를 사용하여 정보를 암호화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Kubernetes Secrets 자동 암호화 — etcd에서 저장 시점 데이터 암호화\n▸ AWS KMS 통합 — EKS 클러스터 수준 암호화 정책 적용\n\n【정답 포인트】\n▸ 최소 운영 오버헤드 → EKS 클러스터 설정만으로 자동 암호화\n▸ KMS 암호화 활성화: etcd 데이터베이스 내 모든 Secret이 투명하게 인크립션됨. 응용 단에서 코드 변경 불필요.\n\n【오답 체크】\n(A) 애플리케이션 레벨 암호화는 각 Pod에서 구현 필요 — 운영 복잡도 상승\n(C) Lambda 함수로 별도 암호화는 비동기 처리, 복잡한 워크플로우\n(D) Parameter Store는 외부 저장소 — Kubernetes 네이티브 구조 아님\n\n【시험 포인트】\n▸ EKS 보안 → 클러스터 수준 암호화(KMS) vs 애플리케이션 수준\n▸ 함정: 애플리케이션 암호화는 유연하지만 운영 비용 증가"
  },
  {
    "id": 614,
    "question": "한 회사는 다음 구성 요소로 구성된 새로운 다중 계층 웹 애플리케이션을 설계하고 있습니다. • Auto Scaling 그룹의 일부로 Amazon EC2 인스턴스에서 실행되는 웹 및 애플리케이션 서버 • 데이터 저장을 위한 Amazon RDS DB 인스턴스 솔루션 설계자는 웹 서버만 액세스할 수 있도록 애플리케이션 서버에 대한 액세스를 제한해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "애플리케이션 서버 앞에 AWS PrivateLink를 배포합니다. 웹 서버만 애플리케이션 서버에 액세스할 수 있도록 네트워크 ACL을 구성합니다.",
      "B": "애플리케이션 서버 앞에 VPC 엔드포인트를 배포합니다. 웹 서버만 애플리케이션 서버에 액세스할 수 있도록 보안 그룹을 구성합니다.",
      "C": "애플리케이션 서버의 Auto Scaling 그룹이 포함된 대상 그룹으로 Network Load Balancer 를 배포합니다. 웹 서버만 애플리케이션 서버에 액세스할 수 있도록 네트워크 ACL을 구성합니다.",
      "D": "애플리케이션 서버의 Auto Scaling 그룹이 포함된 대상 그룹과 함께 Application Load Balancer 를 배포합니다. 웹 서버만 애플리케이션 서버에 액세스할 수 있도록 보안 그룹을 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Application Load Balancer(ALB) — 계층 7(애플리케이션) 로드 밸런싱, 라우팅\n▸ 보안 그룹 — 상태 기반 방화벽, 소스/목적지 포트 제어 가능\n\n【정답 포인트】\n▸ 계층 간 통신 제어: ALB로 웹→앱 트래픽 중개\n▸ 보안 그룹을 이용한 수평적 접근 제어 — ALB 보안 그룹은 웹 서버 SG만 허용, 앱 서버 SG는 ALB에서의 요청만 수용\n\n【오답 체크】\n(A) PrivateLink는 AWS 서비스용, 내부 서버 간 통신에 부적절\n(B) VPC 엔드포인트는 AWS 서비스 노출용, 프라이빗 서버 간 통신 불가\n(C) Network Load Balancer + 네트워크 ACL은 상태 기반 제어 약함, 고정 IP 기반 복잡도\n\n【시험 포인트】\n▸ 계층 간 접근 제어 → ALB(애플리케이션 로드 밸런싱) + 보안 그룹(정밀 제어)\n▸ 함정: 네트워크 ACL은 상태비저장, 동적 Auto Scaling 환경에 부족"
  },
  {
    "id": 615,
    "question": "한 회사가 Amazon Elastic Kubernetes Service(Amazon EKS)에서 고객을 대상으로 하는 중요한 애플리케이션을 실행하고 있습니다. 애플리케이션에는 마이크로서비스 아키텍처가 있습니다. 회사는 중앙 위치에서 애플리케이션의 측정항목과 로그를 수집, 집계, 요약하는 솔루션을 구현해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기존 EKS 클러스터에서 Amazon CloudWatch 에이전트를 실행합니다. CloudWatch 콘솔에서 지표와 로그를 봅니다.",
      "B": "기존 EKS 클러스터에서 AWS App Mesh 를 실행합니다. App Mesh 콘솔에서 지표와 로그를 확인하세요.",
      "C": "데이터 이벤트를 캡처하도록 AWS CloudTrail 을 구성합니다. Amazon OpenSearch Service를 사용하여 CloudTrail을 쿼리합니다.",
      "D": "기존 EKS 클러스터에 Amazon CloudWatch Container Insights 를 구성합니다. CloudWatch 콘솔에서 지표와 로그를 봅니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ CloudWatch Container Insights — Kubernetes 네이티브 모니터링, Pod/Node 메트릭\n▸ 중앙 집계(Centralized Aggregation) — 마이크로서비스 전체 가시성\n\n【정답 포인트】\n▸ Container Insights는 EKS 클러스터에 에이전트 배포로 자동 메트릭 수집\n▸ CloudWatch 통합: Pod, Node, 워크로드별 지표와 로그 한곳에서 확인 가능. Kubernetes 환경에 최적화.\n\n【오답 체크】\n(A) CloudWatch 에이전트는 EC2 용 — Kubernetes Pod 메트릭 미수집\n(B) App Mesh는 서비스 메시 관리용, 중앙 모니터링 전문이 아님\n(C) CloudTrail은 API 이벤트용, 애플리케이션 메트릭/로그 미제공\n\n【시험 포인트】\n▸ EKS 모니터링 → Container Insights(Kubernetes 네이티브)\n▸ 함정: 일반 CloudWatch 에이전트로는 Pod 수준 메트릭 불완전"
  },
  {
    "id": 616,
    "question": "한 회사가 AWS 에 최신 제품을 배포했습니다. 제품은 Network Load Balancer 뒤의 Auto Scaling 그룹에서 실행됩니다. 회사는 제품의 객체를 Amazon S3 버킷에 저장합니다. 이 회사는 최근 자사 시스템에 대한 악의적인 공격을 경험했습니다. 회사에는 AWS 계정의 악의적인 활동, 워크로드 및 S3 버킷에 대한 액세스 패턴을 지속적으로 모니터링하는 솔루션이 필요합니다. 또한 솔루션은 의심스러운 활동을 보고하고 대시보드에 정보를 표시해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "결과를 모니터링하고 AWS Config에 보고하도록 Amazon Macie를 구성합니다.",
      "B": "결과를 모니터링하고 AWS CloudTrail에 보고하도록 Amazon Inspector를 구성합니다.",
      "C": "결과를 모니터링하고 AWS Security Hub 에 보고하도록 Amazon GuardDuty 를 구성합니다.",
      "D": "결과를 모니터링하고 Amazon EventBridge에 보고하도록 AWS Config를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon GuardDuty — AWS 계정 및 리소스 위협 탐지 (머신러닝 기반)\n▸ AWS Security Hub — 보안 결과 중앙 집계 및 대시보드 표시\n\n【정답 포인트】\n▸ 악의적 활동 탐지: GuardDuty는 API 로그, VPC Flow Logs 분석으로 비정상 행동 감지\n▸ 중앙 대시보드: Security Hub는 GuardDuty 결과 집계하여 통합 보안 보기 제공\n\n【오답 체크】\n(A) Macie는 S3 데이터 민감도 분류용, 악의적 활동 탐지 아님\n(B) Inspector는 EC2/컨테이너 취약점 스캔, 악의적 활동 탐지 불가\n(D) AWS Config는 규정 준수 추적용, 위협 탐지 기능 없음\n\n【시험 포인트】\n▸ 위협 탐지 → GuardDuty (탐지 엔진) + Security Hub (대시보드)\n▸ 함정: Macie(데이터 분류), Inspector(취약점), Config(컴플라이언스)는 다른 목적"
  },
  {
    "id": 617,
    "question": "회사에서 온프레미스 데이터 센터를 AWS 로 마이그레이션하려고 합니다. 데이터 센터는 NFS 기반 파일 시스템에 데이터를 저장하는 스토리지 서버를 호스팅합니다. 스토리지 서버는 200GB 의 데이터를 보유합니다. 회사는 기존 서비스를 중단하지 않고 데이터를 마이그레이션해야 합니다. AWS 의 여러 리소스는 NFS 프로토콜을 사용하여 데이터에 액세스할 수 있어야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Lustre 파일 시스템용 Amazon FSx를 생성합니다.",
      "B": "Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성합니다.",
      "C": "데이터를 수신할 Amazon S3 버킷을 생성합니다.",
      "D": "운영 체제 복사 명령을 수동으로 사용하여 데이터를 AWS 대상으로 푸시합니다.",
      "E": "온프레미스 데이터 센터에 AWS DataSync 에이전트를 설치합니다. 온프레미스 위치와 AWS 간에 DataSync 작업을 사용합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ Amazon EFS — NFS 호환 파일 시스템, 다중 AZ 자동 확장\n▸ AWS DataSync — 온프레미스 ↔ AWS 데이터 마이그레이션 자동화, 검증 기능\n\n【정답 포인트】\n▸ NFS 프로토콜 지원: EFS는 표준 NFS v4.1 준수, AWS 리소스 간 공유 가능\n▸ 비용 효율: DataSync는 증분 동기화 및 자동 무결성 검증으로 운영 부담 최소화, 다운타임 없음\n\n【오답 체크】\n(A) FSx Lustre는 고성능 컴퓨팅용, 작은 데이터셋(200GB)에 비용 낭비\n(C) S3는 NFS 미지원 프로토콜, 별도 마이그레이션 필요\n(D) 수동 복사는 검증 부재, 대역폭 제어 어려움\n\n【시험 포인트】\n▸ NFS 마이그레이션 → EFS(목표) + DataSync(수단)\n▸ 함정: FSx Lustre는 비용 대비 과사양, S3는 객체 스토어(파일 아님)"
  },
  {
    "id": 618,
    "question": "한 회사에서는 us-east-1 리전에 볼륨으로 마운트된 SMB 파일 공유가 있는 Amazon EC2 인스턴스에 Amazon FSx for Windows File Server 를 사용하려고 합니다. 회사는 계획된 시스템 유지 관리 또는 계획되지 않은 서비스 중단에 대해 5 분의 복구 지점 목표(RPO)를 가지고 있습니다. 회사는 파일 시스템을 us-west-2 리전에 복제해야 합니다. 복제된 데이터는 5년 동안 어떤 사용자도 삭제해서는 안 됩니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "단일 AZ 2 배포 유형을 사용하는 us-east-1 에 FSx for Windows File Server 파일 시스템을 생성합니다. AWS Backup을 사용하여 백업을 us-west-2에 복사하는 백업 규칙이 포함된 일일 백업 계획을 생성합니다. us-west-2 의 대상 볼트에 대해 규정 준수 모드로 AWS Backup Vault Lock을 구성합니다. 최소 기간을 5년으로 구성합니다.",
      "B": "다중 AZ 배포 유형이 있는 us-east-1 에 FSx for Windows File Server 파일 시스템을 생성합니다. AWS Backup 을 사용하여 백업을 us-west-2 에 복사하는 백업 규칙이 포함된 일일 백업 계획을 생성합니다. us-west-2 의 대상 볼트에 대해 거버넌스 모드에서 AWS Backup Vault Lock을 구성합니다. 최소 기간을 5년으로 구성합니다.",
      "C": "다중 AZ 배포 유형이 있는 us-east-1 에 FSx for Windows File Server 파일 시스템을 생성합니다. AWS Backup 을 사용하여 백업을 us-west-2 에 복사하는 백업 규칙이 포함된 일일 백업 계획을 생성합니다. us-west-2 의 대상 볼트에 대해 규정 준수 모드로 AWS Backup Vault Lock을 구성합니다. 최소 기간을 5년으로 구성합니다.",
      "D": "단일 AZ 2 배포 유형이 있는 us-east-1에 FSx for Windows File Server 파일 시스템을 생성합니다. AWS Backup 을 사용하여 백업을 us-west-2 에 복사하는 백업 규칙이 포함된 일일 백업 계획을 생성합니다. us-west-2 의 대상 볼트에 대해 거버넌스 모드에서 AWS Backup Vault Lock을 구성합니다. 최소 기간을 5년으로 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 다중 AZ 배포(Multi-AZ) — FSx 고가용성, RPO 5분 충족\n▸ Backup Vault Lock 규정 준수 모드 — 관리자도 삭제 불가, 완전 잠금\n\n【정답 포인트】\n▸ 5분 RPO: Multi-AZ는 자동 장애 조치 포함, 가동 중단 최소화\n▸ 5년 불변성: Vault Lock 규정 준수 모드는 법적 구속력, 관리자 권한으로도 우회 불가. 거버넌스는 관리자 승인으로 해제 가능 — 위험\n\n【오답 체크】\n(A) 단일 AZ는 가용성 부족, 계획 유지보수 시에도 다운타임 우려\n(B) 다중 AZ 맞지만 거버넌스 모드는 관리자 삭제 가능 — 규제 부적합\n(D) 단일 AZ + 거버넌스는 이중 문제\n\n【시험 포인트】\n▸ 높은 가용성 + 불변 백업 → Multi-AZ + 규정 준수 모드\n▸ 함정: 거버넌스 vs 규정 준수 모드 구분 (법적 요구사항에서 중요)"
  },
  {
    "id": 619,
    "question": "솔루션 아키텍트는 표준 보안 제어를 유지하면서 AWS Organizations 를 통해 개발자에게 개별 AWS 계정을 제공하려는 회사를 위한 보안 솔루션을 설계하고 있습니다. 개별 개발자는 자신의 계정에 대해 AWS 계정 루트 사용자 수준 액세스 권한을 가지게 되므로 솔루션 설계자는 새 개발자 계정에 적용되는 필수 AWS CloudTrail 구성이 수정되지 않았는지 확인하려고 합니다. 이러한 요구사항을 충족하는 작업은 무엇인가요?",
    "options": {
      "A": "CloudTrail 변경을 금지하는 IAM 정책을 생성합니다. 루트 사용자에게 연결합니다.",
      "B": "조직 추적 옵션이 활성화된 개발자 계정 내에서 CloudTrail에 새 추적을 생성합니다.",
      "C": "CloudTrail 변경을 금지하는 서비스 제어 정책(SCP)을 생성하고 이를 개발자 계정에 연결합니다.",
      "D": "마스터 계정의 Amazon 리소스 이름(ARN)에서만 변경을 허용하는 정책 조건을 사용하여 CloudTrail에 대한 서비스 연결 역할을 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Service Control Policy(SCP) — Organizations 수준 권한 관리, 루트 사용자도 제약\n▸ 명시적 거부(Explicit Deny) — IAM 정책 오버라이드, 최고 권한\n\n【정답 포인트】\n▸ 루트 사용자 제어: IAM 정책은 루트에 적용 불가, SCP만 루트를 제약\n▸ Organizations-wide 정책: 개발자 계정에 SCP 적용하면 명시적 거부로 CloudTrail API 변경 차단\n\n【오답 체크】\n(A) IAM 정책은 루트 사용자 바이패스 가능 — 무효\n(B) 조직 추적은 마스터 계정 추적, 개발자 계정의 로컬 추적은 여전히 변경 가능\n(D) 서비스 연결 역할은 특정 서비스용 역할, 정책 조건으로 CloudTrail API 차단 불충분\n\n【시험 포인트】\n▸ Organizations 환경에서 루트 제약 → SCP (명시적 거부)\n▸ 함정: IAM 정책은 루트에 대해 작동하지 않음"
  },
  {
    "id": 620,
    "question": "한 회사가 AWS 클라우드에 비즈니스에 중요한 애플리케이션을 배포할 계획입니다. 애플리케이션에는 일관되고 지연 시간이 짧은 성능을 갖춘 내구성 있는 스토리지가 필요합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 유형의 스토리지를 권장해야 합니까?",
    "options": {
      "A": "인스턴스 스토어 볼륨",
      "B": "Memcached 클러스터용 Amazon ElastiCache",
      "C": "프로비저닝된 IOPS SSD Amazon Elastic Block Store(Amazon EBS) 볼륨",
      "D": "처리량 최적화 HDD Amazon Elastic Block Store(Amazon EBS) 볼륨"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 프로비저닝된 IOPS(io1/io2) — SSD 기반, 일관된 저지연 성능 보장\n▸ 내구성(Durability) — 다중 가용 영역 복제, 자동 재해복구\n\n【정답 포인트】\n▸ 일관성 + 저지연: Provisioned IOPS는 SSD로 안정적 IOPS 제공, 응답 시간 예측 가능\n▸ 내구성: EBS 볼륨은 자동 복제, 스냅샷 백업 가능\n\n【오답 체크】\n(A) 인스턴스 스토어는 임시 스토리지, 인스턴스 종료 시 데이터 손실 — 내구성 위반\n(B) ElastiCache는 캐시용, 영구 저장 미지원\n(D) 처리량 최적화 HDD는 대용량 연속 처리용, 저지연성 미보장\n\n【시험 포인트】\n▸ 내구성 + 일관된 저지연 → Provisioned IOPS SSD\n▸ 함정: 인스턴스 스토어는 성능 우수하나 휘발성, HDD는 처리량 지향(배치)"
  },
  {
    "id": 621,
    "question": "온라인 사진 공유 회사는 us-west-1 지역에 있는 Amazon S3 버킷에 사진을 저장합니다. 회사는 us-east-1 지역에 모든 새 사진의 사본을 저장해야 합니다. 최소한의 운영 노력으로 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?",
    "options": {
      "A": "us-east-1 에 두 번째 S3 버킷을 생성합니다. S3 교차 리전 복제를 사용하여 기존 S3 버킷의 사진을 두 번째 S3 버킷으로 복사합니다.",
      "B": "기존 S3 버킷의 CORS(교차 원본 리소스 공유) 구성을 생성합니다. CORS 규칙의 AllowedOrigin 요소에 us-east-1을 지정합니다.",
      "C": "여러 가용 영역에 걸쳐 us-east-1 에 두 번째 S3 버킷을 생성합니다. S3 수명 주기 규칙을 생성하여 두 번째 S3 버킷에 사진을 저장합니다.",
      "D": "us-east-1 에 두 번째 S3 버킷을 생성합니다. 객체 생성 및 업데이트 이벤트에 대한 S3 이벤트 알림을 구성하여 AWS Lambda 함수를 호출하여 기존 S3 버킷의 사진을 두 번째 S3 버킷으로 복사합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 교차 리전 복제(Cross-Region Replication, CRR) — 자동 동기화, 새 객체만\n▸ 최소 운영 노력 — 관리 자동화, 코드 불필요\n\n【정답 포인트】\n▸ 새 사진만 복제: 설정 후 자동으로 신규 객체 us-east-1 버킷에 복사\n▸ 운영 부담 최소: S3 설정만으로 완료, Lambda/이벤트 코드 불필요\n\n【오답 체크】\n(B) CORS는 브라우저 교차 요청용, 데이터 복제 메커니즘 아님\n(C) 수명 주기 규칙은 객체 삭제/아카이빙용, 리전 간 복제 불가\n(D) Lambda + 이벤트는 자동화 가능하나 운영 복잡도 증가, 코드 관리 필요\n\n【시험 포인트】\n▸ S3 리전 간 복제 → Cross-Region Replication (자동, 설정만)\n▸ 함정: Lambda 방식은 유연하지만 운영 부담 크다"
  },
  {
    "id": 622,
    "question": "한 회사에서 구독자를 위한 새로운 웹 애플리케이션을 만들고 있습니다. 애플리케이션은 정적 단일 페이지와 영구 데이터베이스 계층으로 구성됩니다. 아침에 4 시간 동안 애플리케이션의 사용자는 수백만 명에 달하지만 나머지 시간에는 애플리케이션의 사용자가 수천 명에 불과합니다. 회사의 데이터 설계자는 스키마를 빠르게 발전시킬 수 있는 기능을 요청했습니다. 이러한 요구 사항을 충족하고 가장 뛰어난 확장성을 제공하는 솔루션은 무엇입니까? (2 개 선택)",
    "options": {
      "A": "Amazon DynamoDB 를 데이터베이스 솔루션으로 배포합니다. 온디맨드 용량을 프로비저닝합니다.",
      "B": "Amazon Aurora 를 데이터베이스 솔루션으로 배포합니다. 서버리스 DB 엔진 모드를 선택합니다.",
      "C": "Amazon DynamoDB를 데이터베이스 솔루션으로 배포합니다. DynamoDB Auto Scaling이 활성화되어 있는지 확인합니다.",
      "D": "정적 콘텐츠를 Amazon S3 버킷에 배포합니다. S3 버킷을 원본으로 사용하여 Amazon CloudFront 배포를 프로비저닝합니다.",
      "E": "Auto Scaling 그룹의 Amazon EC2 인스턴스 전체에 정적 콘텐츠용 웹 서버를 배포합니다. Amazon Elastic File System(Amazon EFS) 볼륨의 콘텐츠를 주기적으로 새로 고치도록 인스턴스를 구성합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ 온디맨드 DynamoDB — 자동 스케일, 비용 종량제, 스키마 유연성\n▸ CloudFront CDN — 정적 콘텐츠 엣지 캐싱, 글로벌 전달\n\n【정답 포인트】\n▸ 변동성 워크로드: DynamoDB 온디맨드는 급증(수백만)에 자동 응답, 유휴 시 비용 최소\n▸ 스키마 유연성: DynamoDB는 스키마프리, 속성 추가 제약 없음\n▸ 정적 콘텐츠: S3+CloudFront로 글로벌 캐싱, 저지연 전달\n\n【오답 체크】\n(B) Aurora 서버리스는 데이터베이스용 확장성 있으나, DynamoDB 온디맨드가 가격 대비 우수\n(C) Auto Scaling과 온디맨드는 중복, 온디맨드가 더 자동화됨\n(E) EC2 Auto Scaling은 정적 콘텐츠에 과사양, CloudFront가 훨씬 효율적\n\n【시험 포인트】\n▸ 변동성 워크로드 + 유연 스키마 → DynamoDB 온디맨드\n▸ 정적 콘텐츠 → S3 + CloudFront (엣지 캐싱)\n▸ 함정: Aurora는 관계형 구조, 스키마 변경 더 복잡"
  },
  {
    "id": 623,
    "question": "회사는 Amazon API Gateway 를 사용하여 타사 서비스 공급자가 액세스하는 REST API 를 관리합니다. 회사는 SQL 주입 및 크로스 사이트 스크립팅 공격으로부터 REST API 를 보호해야 합니다. 이러한 요구 사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Shield를 구성합니다.",
      "B": "AWS WAF를 구성합니다.",
      "C": "Amazon CloudFront 배포를 사용하여 API 게이트웨이를 설정합니다. CloudFront 에서 AWS Shield를 구성합니다.",
      "D": "Amazon CloudFront 배포로 API 게이트웨이를 설정합니다. CloudFront에서 AWS WAF를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS WAF(Web Application Firewall) — SQL 주입, XSS 등 애플리케이션 계층 공격 차단\n▸ AWS Shield — DDoS 공격만 방어, 애플리케이션 수준 침입 미포함\n\n【정답 포인트】\n▸ SQL 주입/XSS: WAF의 관리형 규칙 세트로 자동 탐지/차단\n▸ 운영 효율: API Gateway에 직접 WAF 연결, CloudFront 추가 배포 불필요\n\n【오답 체크】\n(A) Shield는 DDoS 전용, 애플리케이션 공격 미지원\n(C) CloudFront+Shield는 여전히 SQL/XSS 미보호, 불필요한 CDN 레이어 추가\n(D) CloudFront는 정적 콘텐츠 최적화용, API Gateway에 WAF 직결이 명확하고 효율적\n\n【시험 포인트】\n▸ 애플리케이션 공격 방어 → WAF (SQL/XSS/CSRF 규칙)\n▸ DDoS vs 애플리케이션 공격 구분: Shield vs WAF\n▸ 함정: CloudFront는 API에 불필요한 복잡도"
  },
  {
    "id": 624,
    "question": "회사에서는 사용자에게 AWS 리소스에 대한 액세스 권한을 제공하려고 합니다. 이 회사에는 1,500 명의 사용자가 있으며 회사 네트워크의 Active Directory 사용자 그룹을 통해 온프레미스 리소스에 대한 액세스를 관리합니다. 그러나 회사는 사용자가 리소스에 액세스하기 위해 다른 ID 를 유지해야 하는 것을 원하지 않습니다. 솔루션 아키텍트는 온프레미스 리소스에 대한 액세스를 유지하면서 AWS 리소스에 대한 사용자 액세스를 관리해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "회사의 각 사용자에 대해 IAM 사용자를 생성합니다. 각 사용자에게 적절한 정책을 연결합니다.",
      "B": "Active Directory 사용자 풀과 함께 Amazon Cognito 를 사용하십시오. 적절한 정책이 연결된 역할을 생성합니다.",
      "C": "적절한 정책이 연결된 교차 계정 역할을 정의합니다. 역할을 Active Directory 그룹에 매핑합니다.",
      "D": "SAML(Security Assertion Markup Language) 2 0 기반 페더레이션을 구성합니다. 적절한 정책이 연결된 역할을 생성합니다. 역할을 Active Directory 그룹에 매핑합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SAML 2.0 페더레이션 — Active Directory와 AWS 통합, 단일 ID\n▸ 그룹 매핑 — AD 그룹 멤버십으로 AWS 역할 자동 할당\n\n【정답 포인트】\n▸ 단일 ID: SAML 페더레이션으로 AD 사용자가 AWS 콘솔 로그인 가능, 추가 ID 불필요\n▸ 그룹 기반 권한: AD 그룹을 AWS 역할에 매핑하면, 회사 정책 변경 시 자동 동기화\n\n【오답 체크】\n(A) IAM 사용자 수동 생성은 1500명 관리 비효율, 중복 ID\n(B) Cognito는 외부 애플리케이션용, 엔터프라이즈 AD 통합에 부족\n(C) 교차 계정 역할은 다중 AWS 계정용, 단일 테넌트 아키텍처에는 과사양\n\n【시험 포인트】\n▸ 엔터프라이즈 AD 통합 → SAML 페더레이션 (표준, 확장성)\n▸ 그룹 기반 권한 관리 → AD 그룹 ↔ AWS 역할 매핑\n▸ 함정: Cognito는 모바일/B2C용, IAM 수동 생성은 비용 폭증"
  },
  {
    "id": 625,
    "question": "한 회사가 여러 Application Load Balancer 뒤에 웹사이트를 호스팅하고 있습니다. 회사는 전 세계적으로 콘텐츠에 대해 다양한 배포 권한을 가지고 있습니다. 솔루션 설계자는 배포 권한을 위반하지 않고 사용자에게 올바른 콘텐츠가 제공되도록 해야 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 구성을 선택해야 합니까?",
    "options": {
      "A": "AWS WAF로 Amazon CloudFront를 구성합니다.",
      "B": "AWS WAF로 Application Load Balancer 구성",
      "C": "지리적 위치 정책으로 Amazon Route 53 구성",
      "D": "지리 근접 라우팅 정책으로 Amazon Route 53 구성"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Geolocation Routing(지리적 위치) — 사용자 위치 기반 정확한 제어\n▸ Geoproximity Routing(지리 근접) — 위도/경도 기반 근접성 우선, 편향 값 조정\n\n【정답 포인트】\n▸ 배포 권한 준수: 각 국가/지역별 콘텐츠 제한이 있을 때, Route 53 지리적 위치 정책으로 정확히 제어\n▸ 사용자 위치 감지: 요청 출처 IP 기반 지역 파악 → 해당 ALB로 라우팅\n\n【오답 체크】\n(A) CloudFront+WAF는 콘텐츠 필터링용, 지리적 라우팅 미지원\n(B) ALB의 WAF는 공격 방어, 지역별 콘텐츠 제약 불가\n(D) 지리 근접 라우팅은 거리 기반 최적화, 배포 권한 강제 불가 (편향값으로 조정 가능하나 의도적 제약 목적이 아님)\n\n【시험 포인트】\n▸ 법적/배포 제약 → Geolocation Routing (명시적 제어)\n▸ 성능 최적화 → Geoproximity Routing (거리 기반)\n▸ 함정: Geoproximity는 지리적 거리 계산이지, 정책 준수 메커니즘 아님"
  },
  {
    "id": 626,
    "question": "회사는 데이터를 온프레미스에 저장합니다. 데이터의 양은 회사가 사용할 수 있는 용량을 초과하여 증가하고 있습니다. 회사는 온프레미스 위치에서 Amazon S3 버킷으로 데이터를 마이그레이션하려고 합니다. 회사에는 전송 후 데이터 무결성을 자동으로 검증하는 솔루션이 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS Snowball Edge 디바이스 주문 S3 버킷으로의 온라인 데이터 전송을 수행하도록 Snowball Edge 디바이스를 구성합니다.",
      "B": "AWS DataSync 에이전트를 온프레미스에 배포합니다. S3 버킷으로의 온라인 데이터 전송을 수행하도록 DataSync 에이전트를 구성합니다.",
      "C": "온프레미스에서 Amazon S3 파일 게이트웨이를 생성합니다. S3 버킷으로의 온라인 데이터 전송을 수행하도록 S3 파일 게이트웨이를 구성합니다.",
      "D": "온프레미스에서 Amazon S3 Transfer Acceleration 에 액셀러레이터를 구성합니다. S3 버킷으로의 온라인 데이터 전송을 수행하도록 액셀러레이터를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS DataSync — 온프레미스 ↔ AWS 대용량 데이터 전송, 자동 무결성 검증\n▸ 검증 메커니즘 — ETag/메타데이터 비교, 전송 후 자동 재전송\n\n【정답 포인트】\n▸ 자동 무결성 검증: DataSync는 전송 후 체크섬 자동 검증, 불일치 시 재전송\n▸ 온라인 전송: 네트워크 연결로 지속적 동기화 가능, 대역폭 제어 기능\n\n【오답 체크】\n(A) Snowball Edge는 오프라인 전송 (물리 배송), 검증 기능 제한\n(C) S3 파일 게이트웨이는 캐싱용, 대용량 마이그레이션 비효율\n(D) Transfer Acceleration은 업로드 속도 증가, 무결성 검증 메커니즘 아님\n\n【시험 포인트】\n▸ 대용량 온라인 전송 + 자동 검증 → DataSync\n▸ 오프라인 전송 → Snowball, 온라인 → DataSync\n▸ 함정: 파일 게이트웨이는 지속적 캐싱, 마이그레이션 목적 아님"
  },
  {
    "id": 627,
    "question": "한 회사에서 두 대의 DNS 서버를 AWS 로 마이그레이션하려고 합니다. 이 서버는 총 약 200 개의 영역을 호스팅하며 매일 평균 1 백만 건의 요청을 수신합니다. 이 회사는 두 서버의 관리와 관련된 운영 오버헤드를 최소화하면서 가용성을 최대화하고자 합니다. 이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 추천해야 하나요?",
    "options": {
      "A": "Amazon Route 53 콘솔 가져오기 영역 파일에서 200개의 새 호스트 영역을 만듭니다.",
      "B": "하나의 대규모 Amazon EC2 인스턴스를 실행하여 영역 타일을 가져옵니다. 다운타임이 발생하면 회사에 알릴 수 있도록 Amazon CloudWatch 알람 및 알림을 구성합니다.",
      "C": "AWS 서버 마이그레이션 서비스(AWS SMS)를 사용하여 서버를 AWS 로 마이그레이션합니다. 다운타임에 대해 회사에 알리도록 Amazon CloudWatch 알람 및 알림을 구성합니다.",
      "D": "두 개의 가용 영역에 걸쳐 자동 확장 그룹에서 Amazon EC2 인스턴스를 시작합니다. 영역 파일을 가져옵니다. 자동 스케일링 그룹에 대해 원하는 용량을 1 로 설정하고 최대 용량을 3으로 설정합니다. CPU 사용률에 따라 확장하도록 확장 알람을 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Amazon Route 53 — AWS 관리형 DNS 서비스, 자동 스케일, SLA 99.99%\n▸ Auto Scaling + Multi-AZ — 고가용성, 운영 자동화\n\n【정답 포인트】\n▸ 가용성 최대화: 두 개 AZ에 분산하면 한 AZ 장애 시에도 서비스 지속\n▸ 운영 오버헤드 최소: Auto Scaling으로 CPU 기반 자동 확장, 200 영역과 100만 QPS 처리\n▸ 중요: Route 53으로 마이그레이션이 최선이나, 선택지 내에서 EC2 + Auto Scaling이 거의 동등 수준 가용성 제공\n\n【오답 체크】\n(A) Route 53 콘솔 수동 가져오기는 200 영역 관리 복잡도, Auto Scaling 미지원\n(B) 단일 EC2 인스턴스는 SPOF(단일 장애점), 100만 QPS 처리 용량 부족\n(C) AWS SMS는 서버 이미지 마이그레이션용, DNS 영역 파일 마이그레이션에 부적절\n\n【시험 포인트】\n▸ 높은 QPS + 고가용성 DNS → 관리형 서비스(Route 53 권장) 또는 Multi-AZ Auto Scaling\n▸ 운영 자동화 → Auto Scaling 정책(CPU 기반 또는 시간 기반)\n▸ 함정: 단일 EC2는 가용성 부족, SMS는 DNS 영역 파일용 아님"
  },
  {
    "id": 628,
    "question": "한 글로벌 기업이 AWS Organizations 의 여러 AWS 계정에서 애플리케이션을 실행합니다. 회사의 애플리케이션은 멀티파트 업로드를 사용하여 AWS 리전의 여러 Amazon S3 버킷에 데이터를 업로드합니다. 회사는 비용 준수 목적으로 불완전한 멀티파트 업로드에 대해 보고하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "불완전한 멀티파트 업로드 객체 수를 보고하는 규칙으로 AWS Config를 구성합니다.",
      "B": "불완전한 멀티파트 업로드 개체 수를 보고하는 SCP(서비스 제어 정책)를 만듭니다.",
      "C": "불완전한 멀티파트 업로드 객체 수를 보고하도록 S3 스토리지 렌즈를 구성합니다.",
      "D": "S3 다중 지역 액세스 포인트를 생성하여 불완전한 멀티파트 업로드 객체 수를 보고합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Storage Lens — AWS Organizations의 모든 계정, 리전의 S3 메트릭을 통합하여 대시보드로 제시하는 관리형 분석 도구\n▸ 불완전한 멀티파트 업로드 — 시작된 후 정상 완료되지 않아 리소스 낭비 유발하는 객체\n\n【정답 포인트】\n▸ 여러 AWS 계정 + 여러 리전 → 조직 전체 메트릭 필요 → S3 Storage Lens\n▸ 비용 컴플라이언스 보고 → Storage Lens가 불완전 멀티파트 업로드 메트릭 제공\n▸ 최소 운영 오버헤드 → 관리형 서비스로 수동 모니터링 제거\n\n【오답 체크】\n(A) AWS Config는 리소스 상태 컴플라이언스 평가용이며, S3 스토리지 메트릭 보고에는 부족함\n(B) SCP는 조직의 권한 정책 관리용이므로 메트릭 보고 기능 없음\n(D) S3 다중 지역 액세스 포인트는 액세스 성능 최적화 도구이지 메트릭 보고 기능 없음\n\n【시험 포인트】\n▸ 조직 전체 모니터링 + 스토리지 메트릭 → S3 Storage Lens 반사적 선택\n▸ 함정: AWS Config(컴플라이언스), SCP(권한 정책), 액세스 포인트(성능) 혼동 → 역할 구분 필수"
  },
  {
    "id": 629,
    "question": "한 회사가 MySQL 용 Amazon RDS 에서 프로덕션 데이터베이스를 실행하고 있습니다. 회사에서는 보안 규정 준수를 위해 데이터베이스 버전을 업그레이드하려고 합니다. 데이터베이스에는 중요한 데이터가 포함되어 있으므로 회사에서는 데이터 손실 없이 기능을 업그레이드하고 테스트할 수 있는 빠른 솔루션을 원합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "RDS 수동 스냅샷을 생성합니다. MySQL 용 Amazon RDS 의 새 버전으로 업그레이드하세요.",
      "B": "기본 백업 및 복원을 사용합니다. 업그레이드된 새 버전의 MySQL 용 Amazon RDS 로 데이터를 복원합니다.",
      "C": "AWS Database Migration Service(AWS DMS)를 사용하여 업그레이드된 새 버전의 MySQL용 Amazon RDS에 데이터를 복제합니다.",
      "D": "Amazon RDS 블루/그린 배포를 사용하여 프로덕션 변경 사항을 배포하고 테스트합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ RDS 블루/그린 배포 — 기존 인스턴스(블루) 유지하면서 신규 환경(그린)에서 변경사항 검증 후 트래픽 전환\n▸ 자동 롤백 — 검증 실패 시 즉시 이전 버전으로 복구\n\n【정답 포인트】\n▸ DB 버전 업그레이드 + 테스트 검증 필요 → 블루/그린 배포가 최적\n▸ 데이터 손실 없음 + 빠른 검증 → 다운타임 최소화 달성\n▸ 자동 장애복구로 검증 후 문제 발생 시 롤백 → 위험도 최소\n\n【오답 체크】\n(A) 스냅샷 복구는 새 인스턴스 생성까지 시간 소요 및 버전 검증 복잡함\n(B) 수동 백업 복구도 동일 문제로 운영 오버헤드 증가\n(C) DMS는 서로 다른 DB 엔진 간 마이그레이션용이며 MySQL→MySQL 업그레이드에는 오버헤드 과다\n\n【시험 포인트】\n▸ DB 버전 업데이트 + 테스트 검증 시나리오 → 블루/그린 배포 패턴 필수\n▸ 함정: 스냅샷도 업그레이드 가능하지만 검증 프로세스 복잡 → 블루/그린이 우월"
  },
  {
    "id": 630,
    "question": "솔루션 설계자가 매일 한 번 실행되고 완료하는 데 최대 2 시간이 걸리는 데이터 처리 작업을 만들고 있습니다. 작업이 중단되면 처음부터 다시 시작해야 합니다. 솔루션 설계자가 가장 비용 효율적인 방식으로 이 문제를 해결하려면 어떻게 해야 하나요?",
    "options": {
      "A": "크론 작업에 의해 트리거되는 Amazon EC2 예약 인스턴스에서 로컬로 실행되는 스크립트를 만듭니다.",
      "B": "Amazon EventBridge 예약 이벤트에 의해 트리거되는 AWS Lambda 함수를 생성합니다.",
      "C": "Amazon EventBridge 예약 이벤트에 의해 트리거되는 Amazon ECS(Amazon Elastic Container Service) Fargate 작업을 사용합니다.",
      "D": "Amazon EventBridge 예약 이벤트에 의해 트리거된 Amazon EC2에서 실행되는 Amazon ECS(Amazon Elastic Container Service) 작업을 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS EventBridge — 예약 기반 및 이벤트 기반 자동화 트리거 제공하는 서비스\n▸ ECS Fargate — 서버 관리 제거하고 컨테이너 실행만 지원하는 서버리스 컴퓨팅\n\n【정답 포인트】\n▸ 2시간 장시간 작업 + 비용 효율 → Lambda 15분 제한 초과로 불가\n▸ EventBridge 예약 + ECS Fargate = 서버리스 환경에서 장시간 실행 가능\n▸ 예약 자동화 + 컨테이너 실행 → 인프라 관리 오버헤드 제거\n\n【오답 체크】\n(A) 예약 인스턴스는 매일 24시간 실행되어 낭비적 비용 발생\n(B) Lambda는 15분 제한으로 2시간 데이터 처리 작업 불가능\n(C) ECS Fargate만으로는 자동 예약 기능 없음 (EventBridge 연동 필요)\n\n【시험 포인트】\n▸ 장시간 작업(>15분) + 예약 자동화 → ECS Fargate 패턴 결합 필수\n▸ 함정: Lambda 15분 제약 간과 하는 것이 주요 오류 지점"
  },
  {
    "id": 631,
    "question": "소셜 미디어 회사는 사용자 프로필, 관계 및 상호 작용에 대한 데이터베이스를 AWS 클라우드에 저장하려고 합니다. 회사에는 데이터베이스의 변경 사항을 모니터링하는 애플리케이션이 필요합니다. 애플리케이션은 데이터 엔터티 간의 관계를 분석하고 사용자에게 권장 사항을 제공해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Neptune 을 사용하여 정보를 저장하십시오. Amazon Kinesis Data Streams 를 사용하여 데이터베이스의 변경 사항을 처리합니다.",
      "B": "Amazon Neptune 을 사용하여 정보를 저장합니다. Neptune Streams 를 사용하여 데이터베이스의 변경 사항을 처리합니다.",
      "C": "Amazon Quantum Ledger Database(Amazon QLDB)를 사용하여 정보를 저장합니다. Amazon Kinesis Data Streams를 사용하여 데이터베이스의 변경 사항을 처리합니다.",
      "D": "Amazon Quantum Ledger Database(Amazon QLDB)를 사용하여 정보를 저장합니다. Neptune Streams를 사용하여 데이터베이스의 변경 사항을 처리합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon Neptune — 사용자 관계, 추천 시스템을 위한 그래프 데이터베이스\n▸ Neptune Streams — Neptune 데이터 변경을 스트림으로 캡처하는 네이티브 변경 감지\n\n【정답 포인트】\n▸ 사용자 프로필 관계 + 그래프 쿼리 필요 → Neptune 선택\n▸ 데이터 변경 모니터링 → Neptune Streams가 네이티브 지원하므로 외부 도구 불필요\n▸ 최소 운영 오버헤드 → 관리형 서비스로 인프라 관리 제거\n\n【오답 체크】\n(A) Kinesis Data Streams는 외부 도구이며 Neptune과 통합 설정 복잡\n(B) QLDB는 블록체인 원장(Ledger) 용도이지 그래프 관계 분석 아님\n(D) QLDB + Neptune Streams는 DB와 스트림 기술 불일치\n\n【시험 포인트】\n▸ 그래프 관계 분석 + 변경 감지 → Neptune + Neptune Streams 조합\n▸ 함정: QLDB와 Neptune 혼동 → 용도 확인 필수 (원장 vs 그래프)"
  },
  {
    "id": 632,
    "question": "한 회사에서 대량의 데이터를 저장할 새로운 애플리케이션을 만들고 있습니다. 데이터는 매시간 분석되며 여러 가용 영역에 배포된 여러 Amazon EC2 Linux 인스턴스에 의해 수정됩니다. 필요한 저장 공간의 양은 향후 6개월 동안 계속 증가할 것입니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 스토리지 솔루션을 권장해야 합니까?",
    "options": {
      "A": "Amazon S3 Glacier 에 데이터를 저장합니다. 애플리케이션 인스턴스에 대한 액세스를 허용하도록 S3 Glacier 볼트 정책을 업데이트합니다.",
      "B": "Amazon Elastic Block Store(Amazon EBS) 볼륨에 데이터를 저장합니다. 애플리케이션 인스턴스에 EBS 볼륨을 탑재합니다.",
      "C": "Amazon Elastic File System(Amazon EFS) 파일 시스템에 데이터를 저장합니다. 애플리케이션 인스턴스에 파일 시스템을 마운트합니다.",
      "D": "애플리케이션 인스턴스 간에 공유되는 Amazon Elastic Block Store(Amazon EBS) 프로비저닝된 IOPS 볼륨에 데이터를 저장합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ EFS(Elastic File System) — 여러 EC2 인스턴스가 동시에 마운트 가능한 공유 NFS 파일 시스템\n▸ 자동 확장 — 데이터 추가 시 용량 제약 없이 자동으로 증가\n\n【정답 포인트】\n▸ 다중 AZ 배포 + 여러 인스턴스의 동시 액세스 필요 → EFS 필수\n▸ 증가하는 저장 공간(6개월) → 자동 확장 지원하는 EFS가 적합\n▸ 시간당 분석 + 실시간 데이터 수정 → EFS의 동시성 처리 활용\n\n【오답 체크】\n(A) Glacier는 아카이브용 콜드 스토리지이며 시간당 분석 불가능\n(B) EBS 볼륨은 단일 EC2 인스턴스 전용이므로 여러 인스턴스 공유 불가\n(D) EBS는 기술적으로 다중 인스턴스 공유 지원하지 않음\n\n【시험 포인트】\n▸ 다중 인스턴스 + 공유 스토리지 + 자동 확장 → EFS 패턴 반사\n▸ 함정: EBS는 인스턴스별 전용 스토리지 → 공유 불가능"
  },
  {
    "id": 633,
    "question": "회사는 PostgreSQL 다중 AZ DB 인스턴스용 Amazon RDS 에 데이터를 저장하는 애플리케이션을 관리합니다. 트래픽 증가로 인해 성능 문제가 발생합니다. 회사에서는 데이터베이스 쿼리가 성능 저하의 주요 원인이라고 판단합니다. 솔루션 아키텍트는 애플리케이션 성능을 향상시키기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "다중 AZ 대기 복제본에서 읽기 트래픽을 제공합니다.",
      "B": "Transfer Acceleration을 사용하도록 DB 인스턴스를 구성합니다.",
      "C": "원본 DB 인스턴스에서 읽기 전용 복제본을 생성합니다. 읽기 복제본에서 읽기 트래픽을 제공합니다.",
      "D": "애플리케이션과 Amazon RDS 사이에 Amazon Kinesis Data Firehose 를 사용하여 데이터베이스 요청의 동시성을 높입니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ RDS 읽기 복제본 — 원본 DB 인스턴스에서 데이터를 복제하는 읽기 전용 복제본\n▸ 읽기 트래픽 분산 — SELECT 쿼리를 복제본으로 분산하여 원본 부하 경감\n\n【정답 포인트】\n▸ DB 쿼리 성능 저하 진단 → 읽기 트래픽 분산 필요\n▸ 읽기 복제본이 SELECT 쿼리 처리 → 원본 DB의 쓰기 성능 향상\n▸ 별도 엔드포인트 제공 → 애플리케이션 변경으로 읽기 분산 구현\n\n【오답 체크】\n(A) 다중 AZ 대기 복제본은 페일오버용이지 읽기 분산 기능 없음\n(B) Transfer Acceleration은 S3 데이터 전송 최적화이며 DB 쿼리 성능 무관\n(D) Kinesis Data Firehose는 스트리밍 데이터 수집용이지 DB 쿼리 처리 안 함\n\n【시험 포인트】\n▸ DB 읽기 성능 저하 → 읽기 복제본으로 분산 기본 패턴\n▸ 함정: 다중 AZ(고가용성)와 읽기 복제본(성능) 목적 혼동 주의"
  },
  {
    "id": 634,
    "question": "한 회사에서 다양한 기계에서 매일 10GB 의 원격 분석 데이터를 수집합니다. 이 회사는 소스 데이터 계정의 Amazon S3 버킷에 데이터를 저장합니다. 이 회사는 이 데이터를 분석에 사용하기 위해 여러 컨설팅 기관을 고용했습니다. 각 대행사는 분석가를 위해 데이터에 대한 읽기 액세스 권한이 필요합니다. 회사는 보안과 운영 효율성을 극대화하는 솔루션을 선택하여 소스 데이터 계정의 데이터를 공유해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇인가요?",
    "options": {
      "A": "각 기관의 데이터를 복제하도록 S3 글로벌 테이블을 구성합니다.",
      "B": "S3 버킷을 제한된 시간 동안 공개합니다. 에이전시에게만 알립니다.",
      "C": "대행사가 소유한 계정에 대한 S3 버킷의 교차 계정 액세스를 구성합니다.",
      "D": "소스 데이터 계정의 각 분석가에 대해 IAM 사용자를 설정합니다. 각 사용자에게 S3 버킷에 대한 액세스 권한을 부여합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 교차 계정 액세스 — 다른 AWS 계정의 리소스에 대한 권한 위임\n▸ IAM 역할 신뢰 관계 — 외부 계정이 역할을 맡을 수 있도록 설정하는 권한 부여 메커니즘\n\n【정답 포인트】\n▸ 여러 대행사 계정 + S3 데이터 공유 필요 → 교차 계정 액세스 설정\n▸ 원본 계정에서 각 대행사 계정에 IAM 역할 신뢰 관계 정의\n▸ 역할 기반 권한 → 각 사용자 관리 제거로 운영 오버헤드 최소\n\n【오답 체크】\n(A) S3 글로벌 테이블은 리전 간 복제이지 계정 간 공유 메커니즘 아님\n(B) 공개 버킷은 보안 위험으로 컴플라이언스 위반\n(D) 각 분석가마다 IAM 사용자 생성 → 운영 오버헤드 급증\n\n【시험 포인트】\n▸ 다중 조직 + 데이터 공유 → 교차 계정 역할 기반 권한 패턴\n▸ 함정: 공개 또는 사용자 단위 관리는 보안/운영 모두 열악"
  },
  {
    "id": 635,
    "question": "한 회사에서 기본 AWS 리전에서 CIFS 및 NFS 파일 공유를 위해 NetApp ONTAP 용 Amazon FSx 를 사용합니다. Amazon EC2 인스턴스에서 실행되는 애플리케이션은 파일 공유에 액세스합니다. 이 회사는 보조 리전에 스토리지 재해 복구(DR) 솔루션이 필요합니다. 보조 리전에 복제된 데이터는 기본 리전과 동일한 프로토콜을 사용하여 액세스해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇인가요?",
    "options": {
      "A": "데이터를 Amazon S3 버킷에 복사하는 AWS 람다 함수를 생성합니다. S3 버킷을 보조 리전으로 복제합니다.",
      "B": "AWS 백업을 사용하여 ONTAP 용 FSx 볼륨의 백업을 생성합니다. 볼륨을 보조 리전으로 복사합니다. 백업에서 새 FSx for ONTAP 인스턴스를 생성합니다.",
      "C": "보조 리전에 ONTAP 용 FSx 인스턴스를 생성합니다. NetApp SnapMirror 를 사용하여 기본 리전에서 보조 리전으로 데이터를 복제합니다.",
      "D": "Amazon Elastic 파일 시스템(Amazon EFS) 볼륨을 생성합니다. 현재 데이터를 볼륨으로 마이그레이션합니다. 볼륨을 보조 리전으로 복제합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ FSx for NetApp ONTAP — NFS/CIFS 프로토콜 모두 지원하는 관리형 파일 시스템\n▸ SnapMirror — NetApp 기술로 동기식/비동기식 데이터 복제 제공\n\n【정답 포인트】\n▸ 재해복구 + 동일 프로토콜 유지 필요 → FSx for NetApp ONTAP 선택\n▸ SnapMirror로 네이티브 데이터 복제 → 프로토콜 변환 없음\n▸ NetApp 기술 지원 → 최소 운영 오버헤드로 복제 구현\n\n【오답 체크】\n(A) S3 복제는 프로토콜(NFS/CIFS) 변환 필요로 호환성 감소\n(B) AWS Backup 복구는 프로토콜 유지하지 않으므로 NFS/CIFS 요구 미충족\n(D) EFS는 NFS만 지원하고 CIFS 미지원으로 혼합 환경 불가\n\n【시험 포인트】\n▸ NetApp FSx 재해복구 → SnapMirror 복제 패턴 필수\n▸ 함정: S3 복제로 프로토콜 보존 불가 → 동일 기술(ONTAP) 필수"
  },
  {
    "id": 636,
    "question": "개발팀에서 AWS 람다 함수를 사용하는 이벤트 기반 애플리케이션을 만들고 있습니다. Amazon S3 버킷에 파일이 추가될 때 이벤트가 생성됩니다. 개발팀은 현재 Amazon S3 의 이벤트 대상으로 Amazon SNS(Amazon Simple Notification Service)를 구성하고 있습니다. 확장 가능한 방식으로 Amazon S3의 이벤트를 처리하기 위해 솔루션 설계자는 무엇을 해야 하나요?",
    "options": {
      "A": "이벤트가 Lambda 에서 실행되기 전에 Amazon ECS(Amazon Elastic Container Service)에서 이벤트를 처리하는 SNS 구독을 생성합니다.",
      "B": "이벤트가 Lambda 에서 실행되기 전에 Amazon Elastic Kubernetes Service(Amazon EKS)에서 이벤트를 처리하는 SNS 구독을 생성합니다.",
      "C": "이벤트를 Amazon SQS(Amazon Simple Queue Service)로 전송하는 SNS 구독을 생성합니다. Lambda 함수를 트리거하도록 SOS 대기열을 구성합니다.",
      "D": "AWS 서버 마이그레이션 서비스(AWS SMS)로 이벤트를 전송하는 SNS 구독을 만듭니다. SMS 이벤트에서 폴링하도록 람다 함수를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SQS(Simple Queue Service) — 메시지 큐로 비동기 처리 및 버퍼링 제공\n▸ 확장성 — 큐를 통한 처리량 제어로 Lambda 자동 확장 관리\n\n【정답 포인트】\n▸ S3 이벤트 → SNS → SQS 큐로 변환 → Lambda 트리거\n▸ SQS 큐가 이벤트 버퍼링 → 급증 이벤트 대응 및 Lambda 동시 실행 관리\n▸ 확장 가능한 처리 → 큐 길이에 따른 Lambda 자동 스케일링\n\n【오답 체크】\n(A) ECS/EKS는 S3 이벤트 직접 대상으로 권장되지 않음\n(B) 컨테이너는 스토리지 이벤트 처리에 부적합\n(D) AWS SMS는 마이그레이션 서비스이지 메시징 플랫폼 아님\n\n【시험 포인트】\n▸ S3 → SNS → SQS → Lambda 이벤트 처리 체인 구조\n▸ 함정: SNS만으로는 확장성 부족 → SQS 큐 필수"
  },
  {
    "id": 637,
    "question": "솔루션 설계자가 Amazon API 게이트웨이를 기반으로 새로운 서비스를 설계하고 있습니다. 이 서비스의 요청 패턴은 예측할 수 없으며 초당 0 건의 요청에서 500 건 이상으로 갑자기 변경될 수 있습니다. 백엔드 데이터베이스에 보존해야 하는 데이터의 총 크기는 현재 1GB 미만이며 향후 증가를 예측할 수 없습니다. 데이터는 간단한 키-값 요청을 사용하여 쿼리할 수 있습니다. 이러한 요구 사항을 충족하는 AWS 서비스 조합은 무엇인가요? (두 가지 선택)",
    "options": {
      "A": "AWS Fargate",
      "B": "AWS Lambda",
      "C": "Amazon DynamoDB",
      "D": "Amazon EC2 Auto Scaling",
      "E": "MySQL-compatible Amazon Aurora"
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ AWS Lambda — 예측 불가능한 트래픽에 자동 확장되는 서버리스 함수\n▸ DynamoDB — 키-값 기반 NoSQL로 프로비저닝 없이 자동 스케일링\n\n【정답 포인트】\n▸ 예측 불가능한 트래픽(0~500req/s) → Lambda 자동 확장 필수\n▸ 간단한 키-값 쿼리 + 자동 스케일링 → DynamoDB 최적\n▸ 1GB 미만 데이터 → DynamoDB 온디맨드 모드로 경제적\n\n【오답 체크】\n(A) Fargate는 컨테이너이며 초당 0 요청 상태에서 비용 낭비\n(D) EC2 Auto Scaling은 인스턴스 시작 시간 길어 급증 대응 지연\n(E) Aurora는 1GB 미만 데이터에 오버스펙이며 최소 비용 높음\n\n【시험 포인트】\n▸ 급격한 트래픽 변화 → Lambda + DynamoDB 조합 필수\n▸ 함정: Fargate/EC2의 시작 시간 간과로 오류 → 서버리스 선택 필수"
  },
  {
    "id": 638,
    "question": "한 회사에서 연구 데이터를 수집하여 전 세계 직원들과 공유하고 있습니다. 이 회사는 데이터를 수집하여 Amazon S3 버킷에 저장하고 AWS 클라우드에서 데이터를 처리하려고 합니다. 회사는 데이터를 회사 직원들과 공유할 것입니다. 이 회사는 운영 오버헤드를 최소화하는 AWS 클라우드의 안전한 솔루션이 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇인가요?",
    "options": {
      "A": "AWS 람다 함수를 사용하여 S3 사전 지정 URL 을 생성합니다. 직원들에게 해당 URL 을 사용하도록 지시합니다.",
      "B": "각 직원에 대해 IAM 사용자를 만듭니다. 각 직원에 대해 S3 액세스를 허용하는 IAM 정책을 만듭니다. 직원들에게 AWS 관리 콘솔을 사용하도록 지시합니다.",
      "C": "S3 파일 게이트웨이를 만듭니다. 업로드용 공유와 다운로드용 공유를 만듭니다. 직원이 로컬 컴퓨터에 공유를 마운트하여 S3 파일 게이트웨이를 사용하도록 허용합니다.",
      "D": "AWS Transfer Family SFTP 엔드포인트를 구성합니다. 사용자 지정 ID 공급자 옵션을 선택합니다. AWS Secrets Manager를 사용하여 사용자 자격 증명을 관리합니다. 직원들에게 Transfer Family를 사용하도록 지시합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 사전 서명 URL — AWS 자격증명 노출 없이 제한된 시간 동안만 유효한 임시 액세스 링크\n▸ 임직원 확장성 — IAM 사용자 생성 제거로 대규모 사용자 관리\n\n【정답 포인트】\n▸ 임직원 다수 + IAM 관리 오버헤드 회피 → 사전 서명 URL 생성\n▸ Lambda 함수에서 URL 생성 → 보안 관리 중앙화\n▸ 시간 제한 URL → 일회성 액세스로 보안성 향상\n\n【오답 체크】\n(B) 각 직원마다 IAM 사용자 생성 → 운영 오버헤드 급증\n(C) 파일 게이트웨이는 온프레미스 네트워크 연결 필요로 복잡\n(D) Transfer Family SFTP는 엔드포인트 관리 오버헤드 증가\n\n【시험 포인트】\n▸ 대량 사용자 + 최소 운영 오버헤드 → 사전 서명 URL 패턴 반사\n▸ 함정: IAM 사용자는 수백 명 규모 스케일링 불가능"
  },
  {
    "id": 639,
    "question": "한 회사에서 새로운 가구 재고 애플리케이션을 구축하고 있습니다. 이 회사는 여러 가용 영역에 걸쳐 여러 개의 Amazon EC2 인스턴스에 애플리케이션을 배포했습니다. EC2 인스턴스는 VPC의 애플리케이션 로드 밸런서(ALB) 뒤에서 실행됩니다. 솔루션 설계자가 들어오는 트래픽이 하나의 EC2 인스턴스에 편중되어 일부 요청에 대한 지연 시간이 발생하는 것을 관찰했습니다. 이 문제를 해결하려면 솔루션 설계자는 어떻게 해야 하나요?",
    "options": {
      "A": "ALB에서 세션 선호도(스티키 세션)를 비활성화합니다.",
      "B": "ALB를 네트워크 로드 밸런서로 교체합니다.",
      "C": "각 가용 영역에서 EC2 인스턴스 수 늘리기",
      "D": "ALB의 대상 그룹에 대한 상태 확인 빈도 조정"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 세션 선호도(스티키 세션) — 사용자 세션을 특정 EC2 인스턴스로 고정\n▸ 비활성화 → 각 요청을 라운드로빈으로 균등 분배\n\n【정답 포인트】\n▸ 트래픽 편중으로 한 인스턴스 부하 집중 → 스티키 세션 활성화 확인\n▸ 세션 선호도 비활성화 → 모든 인스턴스에 부하 균등 분배\n▸ 부하 균형 복원 → 지연 시간 감소\n\n【오답 체크】\n(B) NLB로 교체해도 스티키 세션 문제 존재하면 미해결\n(C) 인스턴스 추가는 근본 원인(편중) 해결 아님\n(D) 상태 확인 빈도 조정은 트래픽 편중과 무관\n\n【시험 포인트】\n▸ ALB 트래픽 편중 → 스티키 세션 설정 확인 필수\n▸ 함정: 인스턴스 추가로 임시 완화 가능하지만 근본 원인 미해결"
  },
  {
    "id": 640,
    "question": "한 회사에서 AWS 람다 함수를 사용하여 Amazon S3 에서 파일을 다운로드하고 암호를 해독하는 애플리케이션 워크플로우가 있습니다. 이러한 파일은 AWS 키 관리 서비스(AWS KMS) 키를 사용하여 암호화됩니다. 솔루션 설계자는 필요한 권한이 올바르게 설정되도록 보장하는 솔루션을 설계해야 합니다. 어떤 작업 조합으로 이를 달성할 수 있나요? (두 가지 선택)",
    "options": {
      "A": "람다 함수의 리소스 정책에 kms:암호 해독 권한을 첨부합니다.",
      "B": "KMS 키의 정책에서 Lambda IAM 역할에 대한 암호 해독 권한을 부여합니다.",
      "C": "KMS 키의 정책에서 Lambda 리소스 정책에 대한 암호 해독 권한을 부여합니다.",
      "D": "kms:암호 해독 권한이 있는 새 IAM 정책을 만들고 이 정책을 Lambda 함수에 첨부합니다.",
      "E": "kms:암호 해독 권한이 있는 새 IAM 역할을 만들고 실행 역할을 Lambda 함수에 연결합니다."
    },
    "answer": "CE",
    "explanation": "【핵심 용어】\n▸ KMS 키 정책 — KMS 키에 대한 권한을 명시적으로 허용하는 리소스 정책\n▸ IAM 역할 정책 — Lambda 실행 역할이 수행 가능한 작업 정의\n\n【정답 포인트】\n▸ KMS 암호 해독 권한은 키 정책 + IAM 역할 정책 모두 필요\n▸\n(C) KMS 키 정책에 Lambda IAM 역할을 신뢰 주체로 명시\n▸\n(E) Lambda 실행 역할에 kms:Decrypt 권한 정책 첨부\n\n【오답 체크】\n(A) Lambda 리소스 정책은 KMS 권한 부여 불가 (KMS는 키 정책만 인정)\n(B) 키 정책에 권한 추가하지만 IAM 정책 필수\n(D) IAM 정책만으로는 KMS 키 정책 부재 시 불가\n\n【시험 포인트】\n▸ KMS 권한 = 키 정책 + IAM 역할 정책 2개 모두 필수\n▸ 함정: 리소스 정책으로 KMS 권한 부여 불가 → 키 정책 사용 필수"
  },
  {
    "id": 641,
    "question": "회사에서 재무 검토를 위해 AWS 비용을 모니터링하려고 합니다. 클라우드 운영팀은 AWS 조직 관리 계정에서 모든 구성원 계정에 대한 AWS 비용 및 사용량 보고서를 쿼리하는 아키텍처를 설계하고 있습니다. 팀은 이 쿼리를 한 달에 한 번 실행하고 청구서에 대한 자세한 분석을 제공해야 합니다. 이러한 요구 사항을 충족하는 가장 확장 가능하고 비용 효율적인 방법은 무엇인가요?",
    "options": {
      "A": "관리 계정에서 비용 및 사용량 보고서를 사용 설정합니다. Amazon Kinesis 에 보고서를 전달합니다. 분석을 위해 Amazon EMR을 사용합니다.",
      "B": "관리 계정에서 비용 및 사용량 보고서를 활성화합니다. Amazon S3 에 보고서를 전달합니다. 분석을 위해 Amazon Athena를 사용합니다.",
      "C": "회원 계정에 대한 비용 및 사용량 보고서를 활성화합니다. Amazon S3 에 보고서를 전달합니다. 분석을 위해 Amazon Redshift를 사용합니다.",
      "D": "회원 계정에 대한 비용 및 사용량 보고서를 사용하도록 설정합니다. Amazon Kinesis 에 보고서를 전달합니다. 분석을 위해 Amazon QuickSight를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Cost & Usage Report — AWS 조직의 모든 계정 청구 데이터를 상세히 기록\n▸ Amazon Athena — S3 저장 데이터를 SQL 쿼리로 직접 분석\n\n【정답 포인트】\n▸ 월 1회 온디맨드 쿼리 + 표준 SQL 필요 → Athena 최적\n▸ 조직 관리 계정에서 활성화 → 모든 멤버 계정 청구 데이터 포함\n▸ S3 저장 → 비용 효율적이며 확장성 우수\n\n【오답 체크】\n(A) Kinesis는 스트리밍 실시간 처리용이며 월 1회 분석에 부적합\n(C) 멤버 계정에서 활성화는 전체 조직 데이터 수집 불가\n(D) Kinesis + QuickSight는 오버헤드 증가 및 비용 상승\n\n【시험 포인트】\n▸ 청구 분석 + SQL 쿼리 → S3 + Athena 패턴 기본\n▸ 함정: Kinesis는 실시간 스트리밍용 → 월 1회 배치에 비효율"
  },
  {
    "id": 642,
    "question": "회사에서 AWS 클라우드의 Auto Scaling 그룹에 속한 Amazon EC2 인스턴스에서 게임 애플리케이션을 실행하려고 합니다. 응용 프로그램은 UDP 패킷을 사용하여 데이터를 전송합니다. 회사는 트래픽이 증가하거나 감소함에 따라 애플리케이션이 확장 및 축소될 수 있도록 하려고 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Auto Scaling 그룹에 Network Load Balancer 연결",
      "B": "Auto Scaling 그룹에 Application Load Balancer를 연결합니다.",
      "C": "트래픽을 적절하게 라우팅하기 위해 가중치 정책이 있는 Amazon Route 53 레코드 세트를 배포합니다.",
      "D": "Auto Scaling 그룹의 EC2 인스턴스에 포트 전달로 구성된 NAT 인스턴스를 배포합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Network Load Balancer(NLB) — UDP/TCP 프로토콜 모두 지원 (게임, IoT)\n▸ Application Load Balancer(ALB) — HTTP/HTTPS HTTP 기반 트래픽 전용\n\n【정답 포인트】\n▸ UDP 패킷 기반 게임 트래픽 → NLB 필수\n▸ ALB는 HTTP만 지원하므로 UDP 게임 데이터 처리 불가\n▸ Auto Scaling 연동 → NLB로 게임 세션 관리\n\n【오답 체크】\n(B) ALB는 HTTP 기반만 지원이므로 UDP 미지원\n(C) Route 53 가중치 기반 라우팅은 로드 밸런싱 기능 부족\n(D) NAT 포트 포워딩은 복잡하고 확장성 제한\n\n【시험 포인트】\n▸ UDP 기반 트래픽 → NLB 선택 필수\n▸ 함정: ALB는 HTTP 계층 로드 밸런서 → UDP 레이어 4 불가"
  },
  {
    "id": 643,
    "question": "한 회사에서 여러 브랜드를 위해 AWS 에서 여러 웹사이트를 운영하고 있습니다. 각 웹사이트는 매일 수십 기가바이트의 웹 트래픽 로그를 생성합니다. 솔루션 설계자는 회사의 개발자가 회사의 모든 웹사이트에 걸쳐 트래픽 패턴을 분석할 수 있도록 확장 가능한 솔루션을 설계해야 합니다. 개발자의 이러한 분석은 몇 달에 걸쳐 일주일에 한 번씩 온디맨드 방식으로 수행됩니다. 솔루션은 표준 SQL로 쿼리를 지원해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇인가요?",
    "options": {
      "A": "Amazon S3에 로그를 저장합니다. Amazon Athena를 사용하여 분석합니다.",
      "B": "로그를 Amazon RDS 에 저장합니다. 분석을 위해 데이터베이스 클라이언트를 사용합니다.",
      "C": "로그를 Amazon OpenSearch Service에 저장합니다. 분석을 위해 OpenSearch Service를 사용합니다.",
      "D": "로그를 Amazon EMR 클러스터에 저장합니다. SQL 기반 분석을 위해 지원되는 오픈 소스 프레임워크를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Athena — S3의 파일을 SQL로 직접 분석하는 쿼리 엔진\n▸ 비용 효율 — 스캔한 데이터량만 청구하는 페이-어-유-스캔 모델\n\n【정답 포인트】\n▸ 매일 수십GB 로그 + 주 1회 온디맨드 분석 → S3 + Athena\n▸ 표준 SQL 지원 → 개발자 친화적인 쿼리 작성\n▸ 저장 비용 최소 → S3에 저장하고 필요시만 쿼리\n\n【오답 체크】\n(B) RDS는 매일 수십GB 데이터 관리로 인스턴스 비용 높음\n(C) OpenSearch는 로그 분석용이지만 지속 비용 및 관리 오버헤드 증가\n(D) EMR은 클러스터 유지 비용 증가로 온디맨드 분석에 부적합\n\n【시험 포인트】\n▸ 대용량 로그 + 온디맨드 분석 → S3 + Athena 기본 패턴\n▸ 함정: RDS/OpenSearch는 지속 인프라 비용 발생"
  },
  {
    "id": 644,
    "question": "국제적인 회사는 회사가 운영되는 각 국가별로 하위 도메인을 가지고 있습니다. 하위 도메인의 형식은 example.com, country1.example.com, country2.example.com 입니다. 회사의 워크로드는 애플리케이션 로드 밸런서 뒤에 있습니다. 회사는 전송 중인 웹사이트 데이터를 암호화하려고 합니다. 이러한 요구 사항을 충족하는 단계의 조합은 무엇인가요? (두 가지 선택)",
    "options": {
      "A": "AWS ACM(인증서 관리자) 콘솔을 사용하여 최상위 도메인 example.com 에 대한 일반 인증서와 *.example.com에 대한 와일드카드 인증서를 요청합니다.",
      "B": "AWS ACM(인증서 관리자) 콘솔을 사용하여 최상위 도메인 example.com에 대한 비공개 인증서 및 *.example.com에 대한 와일드카드 인증서를 요청합니다.",
      "C": "AWS ACM(인증서 관리자) 콘솔을 사용하여 최상위 도메인 example.com 에 대한 공개 및 비공개 인증서를 요청합니다.",
      "D": "이메일 주소로 도메인 소유권을 유효성 검사합니다. 필요한 DNS 레코드를 DNS 공급업체에 추가하여 DNS 유효성 검사로 전환합니다.",
      "E": "DNS 공급업체에 필요한 DNS 레코드를 추가하여 도메인의 도메인 소유권을 유효성 검사합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ 와일드카드 인증서(*.example.com) — example.com의 모든 하위 도메인 커버\n▸ DNS 유효성 검사 — Route 53 자동 통합으로 빠른 검증\n\n【정답 포인트】\n▸ example.com + 국가별 하위 도메인(country1.example.com 등) → 와일드카드 필요\n▸\n(A) 공개 인증서 요청 (비공개 아님)\n▸\n(E) DNS 레코드 유효성 검사 → Route 53 자동 관리 가능\n\n【오답 체크】\n(B) 비공개 인증서는 내부 애플리케이션용이며 공개 웹사이트 불가\n(C) 공개와 비공개 동시 요청은 비효율적\n(D) 이메일 유효성은 DNS 검사보다 번거로움\n\n【시험 포인트】\n▸ 와일드카드 + 공개 인증서 + DNS 유효성 검사 조합\n▸ 함정: 비공개 인증서는 내부용 → 공개 웹사이트에 불가"
  },
  {
    "id": 645,
    "question": "회사는 온프레미스 키 관리자에서 암호화 키를 사용해야 합니다. 키 관리자는 규제 및 규정 준수 요구 사항으로 인해 AWS 클라우드 외부에 있습니다. 이 회사는 AWS 클라우드 외부에 보관되어 있고 여러 공급업체의 다양한 외부 키 관리자를 지원하는 암호화 키를 사용하여 암호화 및 암호 해독을 관리하고자 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇인가요?",
    "options": {
      "A": "CloudHSM 클러스터로 지원되는 AWS CloudHSM 키 저장소를 사용합니다.",
      "B": "외부 키 관리자가 지원하는 AWS 키 관리 서비스(AWS KMS) 외부 키 저장소를 사용합니다.",
      "C": "기본 AWS 키 관리 서비스(AWS KMS) 관리형 키 저장소를 사용합니다.",
      "D": "AWS CloudHSM 클러스터가 지원하는 사용자 지정 키 저장소를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ KMS 외부 키 저장소 — 온프레미스 HSM에서 관리하는 암호화 키 AWS 클라우드와 연동\n▸ 멀티 벤더 지원 — Thales, IBM 등 다양한 HSM 호환\n\n【정답 포인트】\n▸ 온프레미스 키 관리자 필수 + 규제 컴플라이언스 → 외부 키 저장소\n▸ 멀티 벤더 HSM 지원 → 유연한 인프라 구성\n▸ AWS 관리 → 운영 오버헤드 최소화\n\n【오답 체크】\n(A) CloudHSM 클러스터는 AWS 관리형 HSM이며 온프레미스 키 불가\n(C) 관리형 키 저장소는 AWS 내부 키만 관리\n(D) CloudHSM 사용자 지정도 AWS 클라우드 내부이므로 온프레미스 불가\n\n【시험 포인트】\n▸ 외부 HSM + 멀티 벤더 지원 → KMS 외부 키 저장소 선택\n▸ 함정: CloudHSM은 AWS 관리 클라우드 서비스 → 온프레미스 키 불가"
  },
  {
    "id": 646,
    "question": "솔루션 설계자는 AWS 클라우드에서 고성능 컴퓨팅(HPC) 워크로드를 호스팅해야 합니다. 워크로드는 수백 개의 Amazon EC2 인스턴스에서 실행되며 대규모 데이터 세트의 분산 처리를 위해 공유 파일 시스템에 대한 병렬 액세스가 필요합니다. 데이터 세트는 여러 인스턴스에서 동시에 액세스됩니다. 워크로드에는 1ms 이내의 액세스 지연 시간이 필요합니다. 처리가 완료된 후 엔지니어는 수동 후처리를 위해 데이터 세트에 액세스해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇인가요?",
    "options": {
      "A": "공유 파일 시스템으로 Amazon EFS(Amazon Elastic File System)를 사용하세요. Amazon EFS에서 데이터 세트에 액세스합니다.",
      "B": "공유 파일 시스템으로 사용할 Amazon S3 버킷을 마운트합니다. S3 버킷에서 직접 후처리를 수행합니다.",
      "C": "공유 파일 시스템으로 Lustre 용 Amazon FSx 를 사용합니다. 후처리를 위해 파일 시스템을 Amazon S3 버킷에 연결합니다.",
      "D": "처리 및 후처리를 위해 모든 인스턴스에 마운트할 수 있도록 Amazon S3 버킷을 공유하도록 AWS 리소스 액세스 관리자를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ FSx for Lustre — HPC 워크로드용 고성능 병렬 파일 시스템 (1ms 이내 지연)\n▸ S3 연결 — 처리 완료 후 데이터 자동 S3 export로 워크플로우 효율화\n\n【정답 포인트】\n▸ 수백 개 EC2 병렬 액세스 + <1ms 지연 → Lustre 필수\n▸ 대규모 데이터 분산 처리 → 병렬 파일 시스템 고성능\n▸ 후처리용 S3 연결 → 효율적인 데이터 워크플로우 구성\n\n【오답 체크】\n(A) EFS는 1ms 이내 지연 성능 불가능 (일반적으로 10ms 이상)\n(B) S3 직접 마운트는 성능 극도로 부족\n(D) RAM 액세스 관리자는 데이터 공유만 지원이며 파일 시스템 아님\n\n【시험 포인트】\n▸ HPC + 병렬 처리 + <1ms → FSx for Lustre 패턴 필수\n▸ 함정: EFS는 일반 NFS로 HPC 지연 요구사항 미충족"
  },
  {
    "id": 647,
    "question": "한 게임 회사에서 VoIP(Voice over IP)를 사용하여 애플리케이션을 구축하고 있습니다. 능력. 이 애플리케이션은 전 세계 사용자에게 트래픽을 제공합니다. 애플리케이션은 AWS 리전 전체에 걸쳐 자동화된 장애 조치를 통해 가용성이 높아야 합니다. 회사는 사용자 장치의 IP 주소 캐싱에 의존하지 않고 사용자의 대기 시간을 최소화하려고 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "상태 확인과 함께 AWS Global Accelerator를 사용하십시오.",
      "B": "지리적 위치 라우팅 정책과 함께 Amazon Route 53을 사용하십시오.",
      "C": "여러 오리진을 포함하는 Amazon CloudFront 배포를 생성합니다.",
      "D": "경로 기반 라우팅을 사용하는 Application Load Balancer를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Global Accelerator — IP 캐싱 문제 해결, 고정 애니캐스트 IP 제공, 상태 확인 기반 자동 장애 조치\n▸ VoIP 실시간 통신 — 저지연 및 자동 조치 필수\n\n【정답 포인트】\n▸ \"IP 주소 캐싱에 의존하지 않고\" → Global Accelerator는 고정 IP 제공, DNS 캐싱 우회\n▸ \"자동화된 장애 조치\" → Health Check + 상태 기반 라우팅으로 밀리초 단위 조치 가능\n▸ \"전 세계 사용자\" → 애니캐스트 네트워크로 지연 시간 최소화\n\n【오답 체크】\n(B) Route 53 geolocation은 지역별 라우팅만 가능, IP 캐싱 문제 해결 못함\n(C) CloudFront는 콘텐츠 배포 (HTTP/HTTPS) 중심, 실시간 VoIP에 부적합\n(D) ALB는 지역 내 로드 밸런싱만 가능, 다중 리전 자동 장애 조치 미지원\n\n【시험 포인트】\n▸ 고정 IP + 자동 장애 조치 → Global Accelerator\n▸ \"IP 캐싱\" 함정 → DNS 기반 솔루션 (Route 53) 제외"
  },
  {
    "id": 648,
    "question": "일기 예보 회사는 수백 기가바이트의 데이터를 밀리초 미만의 지연 시간으로 처리해야 합니다. 이 회사는 데이터 센터에 고성능 컴퓨팅(HPC) 환경을 갖추고 있으며 예보 기능을 확장하고자 합니다. 솔루션 설계자는 대량의 지속적인 처리량을 처리할 수 있는 고가용성 클라우드 스토리지 솔루션을 찾아야 합니다. 솔루션에 저장된 파일은 전체 데이터 세트에 동시에 액세스하고 처리할 수 있는 수천 개의 컴퓨팅 인스턴스에서 액세스할 수 있어야 합니다. 이러한 요구사항을 충족하기 위해 솔루션 설계자는 무엇을 해야 하나요?",
    "options": {
      "A": "Lustre 스크래치 파일 시스템용 Amazon FSx를 사용합니다.",
      "B": "Lustre 퍼시스턴트 파일 시스템용 Amazon FSx를 사용합니다.",
      "C": "버스팅 처리량 모드와 함께 Amazon Elastic 파일 시스템(Amazon EFS)을 사용합니다.",
      "D": "프로비저닝된 처리량 모드와 함께 Amazon EFS(Amazon Elastic File System)를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Lustre 스크래치 파일 시스템 — 임시 데이터, 비용 저, 데이터 손실 허용\n▸ Lustre 퍼시스턴트 파일 시스템 — 지속적 스토리지, 높은 처리량, 데이터 보호\n\n【정답 포인트】\n▸ \"대량의 지속적인 처리량\" → 퍼시스턴트 Lustre 지원, 스크래치 불가\n▸ \"수천 개의 컴퓨팅 인스턴스\" → 병렬 처리, 낮은 지연시간 필수\n▸ HPC 최적화 — Lustre는 수백 GB/s 처리량, EFS는 상대적으로 낮음\n\n【오답 체크】\n(A) 스크래치는 임시 데이터 전용, \"지속적\"이라는 요구 미충족\n(C) EFS는 범용 파일 시스템, HPC 고처리량에 최적화되지 않음\n(D) EFS 프로비저닝도 Lustre 대비 처리량 낮음\n\n【시험 포인트】\n▸ HPC + 지속적 + 고처리량 → FSx Lustre Persistent\n▸ 스크래치 vs 퍼시스턴트 구분 핵심"
  },
  {
    "id": 649,
    "question": "전자 상거래 회사는 온프레미스에서 PostgreSQL 데이터베이스를 운영합니다. 데이터베이스는 높은 IOPS 의 Amazon EBS(Amazon Elastic Block Store) 블록 스토리지를 사용하여 데이터를 저장합니다. 초당 일일 피크 I/O 트랜잭션은 15,000 IOPS 를 초과하지 않습니다. 이 회사는 데이터베이스를 PostgreSQL 용 Amazon RDS 로 마이그레이션하고 디스크 스토리지 용량과 무관하게 디스크 IOPS 성능을 프로비저닝하려고 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇인가요?",
    "options": {
      "A": "범용 SSD(gp2) EBS 볼륨 스토리지 유형을 구성하고 15,000 IOPS를 프로비저닝합니다.",
      "B": "프로비저닝된 IOPS SSD(io1) EBS 볼륨 스토리지 유형을 구성하고 15,000 IOPS 를 프로비저닝합니다.",
      "C": "범용 SSD(gp3) EBS 볼륨 스토리지 유형을 구성하고 15,000 IOPS를 프로비저닝합니다.",
      "D": "EBS 마그네틱 볼륨 유형을 구성하여 최대 IOPS를 달성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ gp2 — IOPS 자동 비례 (용량 3:1), 독립 프로비저닝 불가\n▸ gp3 — 용량과 무관하게 IOPS 독립 설정, 비용 효율적\n▸ io1 — 고성능 전용, 높은 비용\n\n【정답 포인트】\n▸ \"디스크 스토리지 용량과 무관하게\" → gp3만 지원 (분리형 가격 책정)\n▸ 15,000 IOPS 요구 — gp3은 3,000~16,000 범위 충족\n▸ 비용 효율성 — gp3 > io1 (io1은 16,000 IOPS 이상 필요할 때)\n\n【오답 체크】\n(A) gp2는 용량 기반 IOPS, 독립 프로비저닝 불가능\n(B) io1은 15,000 IOPS에 과도한 비용\n(D) 마그네틱은 최대 1,000 IOPS 미만\n\n【시험 포인트】\n▸ \"용량과 무관하게\" → gp3 분리형 설정\n▸ gp2 vs gp3 구분: 용량 독립성"
  },
  {
    "id": 650,
    "question": "한 회사에서 온프레미스 Microsoft SQL Server 엔터프라이즈 에디션 데이터베이스를 AWS 로 마이그레이션하려고 합니다. 회사의 온라인 애플리케이션은 이 데이터베이스를 사용하여 트랜잭션을 처리합니다. 데이터 분석 팀은 동일한 프로덕션 데이터베이스를 사용하여 분석 처리를 위한 보고서를 실행합니다. 이 회사는 가능한 한 관리형 서비스로 전환하여 운영 오버헤드를 줄이려고 합니다. 운영 오버헤드가 가장 적으면서 이러한 요구 사항을 충족하는 솔루션은 무엇인가요?",
    "options": {
      "A": "Microsoft SOL Server 용 Amazon RDS 로 마이그레이션합니다. 보고 목적으로 읽기 복제본 사용",
      "B": "Amazon EC2의 Microsoft SQL Server로 마이그레이션합니다. 보고 목적으로 항상 켜짐 읽기 복제본 사용",
      "C": "Amazon DynamoDB 로 마이그레이션합니다. 보고 목적으로 DynamoDB 온디맨드 복제본을 사용합니다.",
      "D": "Amazon Aurora MySQL로 마이그레이션합니다. 보고 목적으로 Aurora 읽기 복제본 사용"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RDS for SQL Server — 관리형 서비스, 자동 백업 및 장애 조치\n▸ 읽기 복제본 — 분석 쿼리 분리, OLTP 영향 최소화\n▸ 관리 오버헤드 — RDS (최소) > EC2 (높음)\n\n【정답 포인트】\n▸ \"관리형 서비스로 전환\" → RDS (자동 유지보수), EC2 제외\n▸ OLTP + OLAP 분리 필요 → 읽기 복제본 활용\n▸ SQL Server 라이선스 유지 → RDS 지원, DynamoDB/Aurora MySQL 불가\n\n【오답 체크】\n(B) EC2는 관리형 아님, 패치/백업 수동 운영\n(C) DynamoDB는 관계형 DB 아님, 스키마 마이그레이션 불가\n(D) Aurora MySQL로의 변환은 애플리케이션 재개발 필요\n\n【시험 포인트】\n▸ 기존 SQL Server → 같은 DB 엔진 (RDS for SQL Server)\n▸ 관리형 우선순위: RDS > EC2"
  },
  {
    "id": 651,
    "question": "회사는 Amazon S3 버킷에 대량의 이미지 파일을 저장합니다. 이미지는 처음 180 일 동안 쉽게 사용할 수 있어야 합니다. 다음 180 일 동안 이미지에 자주 액세스하지 않습니다. 360 일이 지나면 이미지를 보관해야 하지만 요청 시 즉시 사용할 수 있어야 합니다. 5 년 후에는 감사자만 이미지에 액세스할 수 있습니다. 감사자는 12 시간 이내에 이미지를 검색할 수 있어야 합니다. 이 과정에서 이미지가 손실될 수 없습니다. 개발자는 처음 180 일 동안 S3 Standard 스토리지를 사용합니다. 개발자는 S3 수명 주기 규칙을 구성해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "180 일 후에 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환합니다. 360일 후 S3 Glacier 즉시 검색, 5년 후 S3 Glacier Deep Archive.",
      "B": "180 일 후에 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환합니다. 360일 후 S3 Glacier 유연한 검색 및 5년 후 S3 Glacier Deep Archive.",
      "C": "180일 후에 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환하고, 360일 후에 S3 Glacier Instant Retrieval 로 전환하고, 5 년 후에 S3 Glacier Deep Archive 로 전환합니다.",
      "D": "180일 후에 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환하고, 360일 후에 S3 Glacier 유연한 검색으로, 5년 후에 S3 Glacier Deep Archive로 전환합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ One Zone-IA — 1개 AZ, 비용 최저, 데이터 손실 위험\n▸ Standard-IA — 3개 AZ, 신뢰성 높음\n▸ Glacier Instant — 즉시 검색 (밀리초)\n▸ Glacier Flexible — 최대 12시간, 비용 최저\n\n【정답 포인트】\n▸ \"이미지가 손실될 수 없음\" → One Zone-IA 제외 (1개 AZ)\n▸ \"360일 후 즉시 사용\" → Glacier Instant Retrieval 필수\n▸ \"12시간 이내 검색\" → Glacier Flexible 지원 (3-5분, 혹은 12시간)\n▸ 비용 효율 — Standard-IA + Instant + Flexible 조합\n\n【오답 체크】\n(A) One Zone-IA는 데이터 손실 위험, \"손실 불가\" 위반\n(B) Glacier Flexible (12시간)은 \"즉시\" 요구 불충족\n(D) Standard-IA + Flexible은 \"즉시\" 요구 미충족\n\n【시험 포인트】\n▸ 데이터 손실 불가 → Standard-IA (다중 AZ)\n▸ 즉시 vs 12시간 → Instant vs Flexible 구분"
  },
  {
    "id": 652,
    "question": "매일 6 시간 동안 실행되는 대규모 데이터 워크로드가 있는 회사입니다. 프로세스가 실행되는 동안 데이터가 손실되어서는 안 됩니다. 솔루션 설계자가 이 중요한 데이터 워크로드를 지원하기 위해 Amazon EMR 클러스터 구성을 설계하고 있습니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇인가요?",
    "options": {
      "A": "온디맨드 인스턴스에서 기본 노드 및 코어 노드를 실행하고 스팟 인스턴스에서 작업 노드를 실행하는 장기 실행 클러스터를 구성합니다.",
      "B": "온디맨드 인스턴스에서 기본 노드 및 코어 노드를 실행하는 임시 클러스터와 스팟 인스턴스에서 작업 노드를 실행하는 임시 클러스터를 구성합니다.",
      "C": "On-Demand 인스턴스에서 기본 노드를 실행하고 스팟 인스턴스에서 코어 노드 및 작업 노드를 실행하는 트랜지션 클러스터를 구성합니다.",
      "D": "온디맨드 인스턴스의 기본 노드, 스팟 인스턴스의 코어 노드 및 스팟 인스턴스의 작업 노드를 실행하는 장기 실행 클러스터를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 임시 클러스터 — 작업 후 자동 종료, HDFS 데이터 손실 (외부 스토리지 사용 필수)\n▸ 장기 실행 클러스터 — 지속적 운영, HDFS 유지\n▸ 코어 노드 — HDFS 데이터 저장, 스팟 인스턴스 사용 불가\n\n【정답 포인트】\n▸ \"데이터 손실 금지\" + \"6시간마다 실행\" → 임시 클러스터 + 외부 스토리지 (S3)\n▸ HDFS 데이터 보호 — 코어 노드는 온디맨드 필수\n▸ 비용 절감 — 작업 노드만 스팟 인스턴스 사용\n▸ \"마다 실행\" → 클러스터 재생성, 임시 구성 적합\n\n【오답 체크】\n(A) 장기 실행은 6시간 작업에 비효율, 비용 낭비\n(C) 트랜지션 클러스터는 존재하지 않는 용어\n(D) 코어 노드를 스팟으로 사용하면 HDFS 데이터 손실\n\n【시험 포인트】\n▸ 주기적 작업 + 데이터 손실 불가 → 임시 + 코어 On-Demand\n▸ 코어 노드 스팟 사용 함정"
  },
  {
    "id": 653,
    "question": "한 회사가 회사의 온프레미스 데이터 센터에서 MySQL DB 인스턴스용 Amazon RDS 로 MySQL 데이터베이스를 마이그레이션했습니다. 회사는 회사의 평균 일일 워크로드에 맞게 RDS DB 인스턴스의 크기를 조정했습니다. 한 달에 한 번 회사에서 보고서에 대한 쿼리를 실행할 때 데이터베이스 성능이 느려집니다. 회사는 보고서를 실행하고 일일 워크로드의 성능을 유지 관리할 수 있는 기능을 원합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터베이스의 읽기 전용 복제본을 생성합니다. 쿼리를 읽기 전용 복제본으로 보냅니다.",
      "B": "데이터베이스 백업을 생성합니다. 백업을 다른 DB 인스턴스로 복원합니다. 쿼리를 새 데이터베이스로 보냅니다.",
      "C": "데이터를 Amazon S3로 내보냅니다. Amazon Athena를 사용하여 S3 버킷을 쿼리합니다.",
      "D": "추가 워크로드를 수용하도록 DB 인스턴스의 크기를 조정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 읽기 복제본 — OLTP 트래픽 분산, 데이터 동기화 오버헤드\n▸ Athena — S3 데이터 분석, OLAP 최적화, 비용 저\n▸ OLTP vs OLAP — 실시간 vs 일괄 처리\n\n【정답 포인트】\n▸ \"한 달에 한 번\" → 일괄 분석 작업, OLAP 특성\n▸ \"일일 워크로드 성능 유지\" → OLTP와 분리 필수\n▸ \"보고서 쿼리\" → S3 + Athena (분석 최적화, 저비용)\n▸ 읽기 복제본도 쓰기 작업 동기화로 오버헤드 발생\n\n【오답 체크】\n(A) 읽기 복제본은 OLTP 쿼리 부하 (동기화), 보고서 쿼리에 부적합\n(B) 백업 복원은 일회성, 주기적 보고서에 비효율\n(D) 인스턴스 업그레이드는 월 1회 피크에 비용 낭비\n\n【시험 포인트】\n▸ 주기적 분석 쿼리 → S3 + Athena (OLAP 분리)\n▸ 읽기 복제본 함정: OLTP 분산용, OLAP 아님"
  },
  {
    "id": 654,
    "question": "회사의 데이터 플랫폼은 Amazon Aurora MySQL 데이터베이스를 사용합니다. 데이터베이스에는 여러 가용 영역에 걸쳐 여러 읽기 전용 복제본과 여러 DB 인스턴스가 있습니다. 사용자는 최근 데이터베이스에서 너무 많은 연결이 있음을 나타내는 오류를 보고했습니다. 이 회사는 읽기 복제본이 기본 작성자로 승격될 때 장애 조치 시간을 20% 줄이려고 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "다중 AZ 클러스터 배포를 통해 Aurora에서 Amazon RDS로 전환합니다.",
      "B": "Aurora 데이터베이스 앞에서 Amazon RDS Proxy를 사용합니다.",
      "C": "읽기 연결을 위해 DAX(DynamoDB Accelerator)가 있는 Amazon DynamoDB 로 전환합니다.",
      "D": "재배치 기능이 있는 Amazon Redshift로 전환합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ RDS Proxy — 연결 풀링, 장애 조치 시간 66% 단축\n▸ 다중 AZ 클러스터 — RDS 기능, Aurora 아님\n▸ 연결 오류 — 최대 연결 수 초과\n\n【정답 포인트】\n▸ \"장애 조치 시간 20% 단축\" → RDS Proxy (기본 66% 단축 제공)\n▸ \"너무 많은 연결\" → 연결 풀링으로 관리\n▸ 해결책이 데이터베이스 전환 필요 없음 (Aurora 유지)\n▸ RDS Proxy는 기존 인프라 최소 변경\n\n【오답 체크】\n(A) Aurora → RDS 변환은 불필요, 기존 장애 조치 시간 단축 불가\n(C) DynamoDB는 다른 DB 엔진, 데이터 재구성 필요\n(D) Redshift는 분석 DB, OLTP 미지원\n\n【시험 포인트】\n▸ 연결 부족 → RDS Proxy (연결 풀)\n▸ 장애 조치 시간 단축 → RDS Proxy IAM DB Auth 지원"
  },
  {
    "id": 655,
    "question": "IoT 회사는 사용자의 수면에 대한 데이터를 수집하는 센서가 있는 매트리스를 출시하고 있습니다. 센서는 데이터를 Amazon S3 버킷으로 보냅니다. 센서는 각 매트리스에 대해 매일 밤 약 2MB 의 데이터를 수집합니다. 회사는 각 매트리스에 대한 데이터를 처리하고 요약해야 합니다. 결과는 가능한 한 빨리 사용할 수 있어야 합니다. 데이터 처리에는 1GB의 메모리가 필요하며 30초 이내에 완료됩니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Scalajob과 함께 AWS Glue를 사용합니다.",
      "B": "Apache Spark 스크립트와 함께 Amazon EMR을 사용합니다.",
      "C": "Python 스크립트와 함께 AWS Lambda를 사용합니다.",
      "D": "PySpark 작업과 함께 AWS Glue를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Lambda — 서버리스, 초 단위 과금, 최대 15분 실행\n▸ Glue — ETL 배치, 최소 DPU 비용 (요금 높음)\n▸ EMR — 클러스터 기반, 복잡한 처리\n\n【정답 포인트】\n▸ \"2MB 데이터\" + \"30초 내 완료\" → Lambda 최적 (1GB 메모리 충분)\n▸ \"가능한 한 빨리\" → 서버리스 즉시 실행\n▸ \"비용 효율적\" → Lambda (초 단위) > Glue (최소 DPU)\n▸ 간단한 처리 (수요 요약) → Spark/Glue 불필요\n\n【오답 체크】\n(A) Glue Scala Job은 최소 1 DPU 비용 (시간 단위), 매일 반복 시 비용 높음\n(B) EMR은 클러스터 오버헤드, 소규모 작업에 부적합\n(D) Glue PySpark도 마찬가지로 최소 DPU 비용 발생\n\n【시험 포인트】\n▸ 작은 데이터 + 짧은 처리 시간 → Lambda\n▸ Glue vs Lambda 비용: 배치 빈도가 높으면 Lambda 우위"
  },
  {
    "id": 656,
    "question": "회사에서 고성능 컴퓨팅 및 인공 지능을 사용하여 사기 방지 및 감지 기술을 개선하려고 합니다. 회사는 가능한 한 빨리 단일 워크로드를 완료하기 위해 분산 처리가 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic Kubernetes Service(Amazon EKS) 및 여러 컨테이너를 사용합니다.",
      "B": "AWS ParallelCluster 및 MPI(Message Passing Interface) 라이브러리를 사용합니다.",
      "C": "Application Load Balancer 및 Amazon EC2 인스턴스를 사용합니다.",
      "D": "AWS Lambda 함수를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ ParallelCluster — HPC 최적화, MPI 지원, 저지연 네트워킹\n▸ MPI — 프로세스 간 통신, 분산 컴퓨팅 표준\n▸ EKS — 컨테이너 오케스트레이션, HPC 미최적화\n\n【정답 포인트】\n▸ \"고성능 컴퓨팅\" → ParallelCluster (HPC 전문)\n▸ \"분산 처리\" + \"가능한 한 빨리\" → MPI 필수 (저지연 노드간 통신)\n▸ \"단일 워크로드\" → 클러스터 기반 처리 (병렬)\n▸ AI/ML HPC 워크로드 → ParallelCluster 표준\n\n【오답 체크】\n(A) EKS는 마이크로서비스 / 컨테이너 오케스트레이션, HPC 통신 최적화 부족\n(C) ALB + EC2는 수동 구성, HPC 최적화 없음\n(D) Lambda는 병렬 처리 불가, 함수 간 통신 불가능\n\n【시험 포인트】\n▸ HPC + 분산 처리 → ParallelCluster + MPI\n▸ EKS 함정: 컨테이너만으로는 HPC 최적화 아님"
  },
  {
    "id": 657,
    "question": "회사는 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용하여 컨테이너 애플리케이션을 실행합니다. 이 애플리케이션에는 고객을 관리하고 주문하는 마이크로서비스가 포함되어 있습니다. 회사는 들어오는 요청을 적절한 마이크로 서비스로 라우팅해야 합니다. 이 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Load Balancer Controller 를 사용하여 Network Load Balancer 를 프로비저닝하십시오.",
      "B": "AWS Load Balancer Controller 를 사용하여 Application Load Balancer 를 프로비저닝합니다.",
      "C": "AWS Lambda 함수를 사용하여 요청을 Amazon EKS에 연결합니다.",
      "D": "Amazon API Gateway를 사용하여 요청을 Amazon EKS에 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ ALB — HTTP/HTTPS 라우팅, 경로/호스트 기반, 비용 저\n▸ NLB — TCP/UDP 극저지연, 고처리량, 비용 높음\n▸ EKS Ingress — ALB Controller 통해 자동 프로비저닝\n\n【정답 포인트】\n▸ \"마이크로서비스로 라우팅\" → HTTP 경로/호스트 기반 필요\n▸ \"비용 효율적\" → ALB (NLB 대비 60% 저렴)\n▸ \"들어오는 요청\" → Ingress 리소스 (ALB Controller)\n▸ 고객/주문 마이크로서비스 → REST API (HTTP)\n\n【오답 체크】\n(A) NLB는 극저지연/고처리량 필요할 때, 마이크로서비스 라우팅에는 과도\n(C) Lambda는 EKS 통합 어려움, 직접 컨테이너 관리 불가\n(D) API Gateway는 EKS 직접 연결 미지원, 추가 프록시 필요\n\n【시험 포인트】\n▸ EKS 마이크로서비스 라우팅 → ALB Ingress\n▸ ALB vs NLB: 마이크로서비스는 ALB"
  },
  {
    "id": 658,
    "question": "한 회사가 다중 계층 온프레미스 애플리케이션을 AWS 로 마이그레이션하고 있습니다. 애플리케이션은 단일 노드 MySQL 데이터베이스와 다중 노드 웹 계층으로 구성됩니다. 회사는 마이그레이션 중에 애플리케이션 변경을 최소화해야 합니다. 회사는 마이그레이션 후 애플리케이션 복원성을 개선하려고 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "웹 계층을 Application Load Balancer 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스로 마이그레이션합니다.",
      "B": "데이터베이스를 Network Load Balancer 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스로 마이그레이션합니다.",
      "C": "데이터베이스를 Amazon RDS 다중 AZ 배포로 마이그레이션합니다.",
      "D": "웹 계층을 AWS Lambda 함수로 마이그레이션합니다.",
      "E": "데이터베이스를 Amazon DynamoDB 테이블로 마이그레이션합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ ALB + Auto Scaling — 웹 계층 고가용성, 자동 확장\n▸ RDS 다중 AZ — DB 자동 장애 조치, 관리형\n▸ 최소 변경 — 기존 구조 유지 (Lambda, DynamoDB 제외)\n\n【정답 포인트】\n▸\n(A) 웹 계층 → ALB + ASG (기존 EC2 워크플로우 유지, 복원성 강화)\n▸\n(C) DB → RDS 다중 AZ (관리형, 자동 장애 조치)\n▸ \"복원성 개선\" → HA 구성 (ALB, ASG, 다중 AZ)\n▸ \"애플리케이션 변경 최소\" → 기존 MySQL 유지\n\n【오답 체크】\n(B) DB NLB + ASG는 관리 오버헤드 높음, RDS 다중 AZ 우선\n(D) Lambda로의 전환은 코드 재개발 필요, \"최소 변경\" 위반\n(E) DynamoDB는 관계형 스키마 변경 필요, MySQL 호환성 없음\n\n【시험 포인트】\n▸ 2중 선택: 웹(ALB+ASG) + DB(RDS 다중AZ)\n▸ 최소 변경 조건: 기존 구조 유지"
  },
  {
    "id": 659,
    "question": "한 회사가 프로덕션 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터에서 실행될 애플리케이션을 개발 중입니다. EKS 클러스터에는 온디맨드 인스턴스로 프로비저닝되는 관리형 노드 그룹이 있습니다. 회사에는 개발 작업을 위한 전용 EKS 클러스터가 필요합니다. 회사는 애플리케이션의 복원력을 테스트하기 위해 개발 클러스터를 자주 사용하지 않습니다. EKS 클러스터는 모든 노드를 관리해야 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "스팟 인스턴스만 포함하는 관리형 노드 그룹을 생성합니다.",
      "B": "두 개의 관리형 노드 그룹을 생성합니다. 온디맨드 인스턴스로 하나의 노드 그룹을 프로비저닝합니다. 스팟 인스턴스로 두 번째 노드 그룹을 프로비저닝합니다.",
      "C": "스팟 인스턴스를 사용하는 시작 구성이 있는 Auto Scaling 그룹을 생성합니다. EKS 클러스터에 노드를 추가하도록 사용자 데이터를 구성합니다.",
      "D": "온디맨드 인스턴스만 포함하는 관리형 노드 그룹을 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 관리형 노드 그룹 — EKS 자동 관리 (패치, 모니터링)\n▸ 스팟 인스턴스 — 90% 할인, 중단 위험\n▸ \"자주 사용하지 않음\" — 스팟 인스턴스 적합\n\n【정답 포인트】\n▸ \"개발 클러스터\" + \"자주 사용하지 않음\" → 스팟 인스턴스만\n▸ \"비용 효율적\" → 스팟 90% 할인\n▸ \"모든 노드 관리\" → 관리형 노드 그룹 (자동 관리)\n▸ 개발/테스트이므로 중단 허용\n\n【오답 체크】\n(B) 온디맨드 혼합은 불필요, 순수 개발용 스팟만\n(C) 자체 시작 구성은 관리형 아님, EKS 관리 기능 상실\n(D) 온디맨드만은 비용 낭비, \"비용 효율적\" 위반\n\n【시험 포인트】\n▸ 개발 환경 EKS → 스팟 인스턴스만 관리형 노드 그룹\n▸ \"자주 사용하지 않음\" = 스팟 중단 허용"
  },
  {
    "id": 660,
    "question": "한 회사는 데이터 센터에서 SMB 파일 서버를 운영하고 있습니다. 파일서버는 회사가 자주 접속하는 대용량 파일을 파일 생성일로부터 최대 7일까지 저장합니다. 7일이 지나면 회사는 최대 24시간의 검색 시간으로 파일에 액세스할 수 있어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS DataSync 를 사용하여 SMB 파일 서버에서 AWS 로 7 일보다 오래된 데이터를 복사합니다.",
      "B": "회사의 저장 공간을 늘리려면 Amazon S3 파일 게이트웨이를 생성하십시오. 7 일 후에 데이터를 S3 Glacier Deep Archive로 전환하는 S3 수명 주기 정책을 생성합니다.",
      "C": "회사의 저장 공간을 늘리기 위해 Amazon FSx 파일 게이트웨이를 생성합니다. 7일 후에 데이터를 전환하는 Amazon S3 수명 주기 정책을 생성합니다.",
      "D": "각 사용자에 대해 Amazon S3 에 대한 액세스를 구성합니다. 7 일 후에 데이터를 S3 Glacier 유연한 검색으로 전환하는 S3 수명 주기 정책을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 파일 게이트웨이 — SMB 호환, 로컬 캐싱, S3 연결\n▸ Glacier Deep Archive — 12시간 검색 (\"Flexible\" 아님)\n▸ 자주 접근 → 로컬 캐시, 오래된 파일 → 아카이브\n\n【정답 포인트】\n▸ \"SMB 파일 서버\" → S3 파일 게이트웨이 (SMB 프로토콜 지원)\n▸ \"7일까지 자주 접근\" → 로컬 캐시 (게이트웨이 내)\n▸ \"7일 후 24시간 검색\" → Glacier Deep Archive (12시간)\n▸ 저장 공간 확장 + 아카이브 = 게이트웨이 최적\n\n【오답 체크】\n(A) DataSync는 일회성 마이그레이션, 자동 계층화 미지원\n(C) FSx 게이트웨이는 존재하지 않는 서비스\n(D) Direct S3 액세스는 SMB 호환성 없음, 사용자 재교육 필요\n\n【시험 포인트】\n▸ SMB 온프레미스 + 자동 아카이브 → S3 파일 게이트웨이\n▸ Deep Archive 12시간 vs Flexible (변동)"
  },
  {
    "id": 661,
    "question": "솔루션 아키텍트는 Amazon S3 버킷의 파일을 Amazon Elastic File System(Amazon EFS) 파일 시스템과 다른 S3 버킷으로 복사해야 합니다. 파일은 계속해서 복사되어야 합니다. 새 파일은 원본 S3 버킷에 지속적으로 추가됩니다. 복사된 파일은 원본 파일이 변경된 경우에만 덮어써야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "대상 S3 버킷과 EFS 파일 시스템 모두에 대한 AWS DataSync 위치를 생성합니다. 대상 S3 버킷 및 EFS 파일 시스템에 대한 작업을 생성합니다. 변경된 데이터만 전송하도록 전송 모드를 설정하세요.",
      "B": "AWS Lambda 함수를 생성합니다. 파일 시스템을 함수에 마운트합니다. Amazon S3에서 파일이 생성되고 변경될 때 함수를 호출하도록 S3 이벤트 알림을 설정합니다. 파일 시스템과 대상 S3 버킷에 파일을 복사하는 기능을 구성합니다.",
      "C": "대상 S3 버킷과 EFS 파일 시스템 모두에 대한 AWS DataSync 위치를 생성합니다. 대상 S3 버킷 및 EFS 파일 시스템에 대한 작업을 생성합니다. 모든 데이터를 전송하려면 전송 모드를 설정하세요.",
      "D": "파일 시스템과 동일한 VPC 에서 Amazon EC2 인스턴스를 시작합니다. 파일 시스템을 마운트합니다. 원본 S3 버킷에서 변경된 모든 객체를 대상 S3 버킷 및 탑재된 파일 시스템과 정기적으로 동기화하는 스크립트를 만듭니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ DataSync — AWS 데이터 동기화, 증분 전송, 자동 스케줄\n▸ \"변경된 데이터만\" → Sync 모드 (Changed 필터)\n▸ 운영 오버헤드 최소 — 관리형 서비스\n\n【정답 포인트】\n▸ \"계속해서 복사\" + \"변경된 경우만\" → DataSync 증분 동기화\n▸ \"2개 대상\" (S3 + EFS) → DataSync 다중 위치 지원\n▸ \"운영 오버헤드 최소\" → 관리형 (Lambda/EC2 제외)\n▸ \"변경된 데이터만 전송\" → DataSync Sync 모드 설정\n\n【오답 체크】\n(B) Lambda는 EFS 마운트 시간 + 15분 제한, 대규모 파일 부적합\n(C) \"모든 데이터 전송\" 모드는 증분 미지원, 불필요한 전송\n(D) EC2 + 스크립트는 운영 오버헤드 높음, 자동화 부족\n\n【시험 포인트】\n▸ S3 ↔ EFS 지속적 동기화 → DataSync 증분\n▸ \"변경만\" 필터 = DataSync Sync 모드"
  },
  {
    "id": 663,
    "question": "한 회사가 다년간의 마이그레이션 프로젝트 중에 데이터와 애플리케이션을 AWS 로 이전하고 있습니다. 회사는 회사의 AWS 리전과 회사의 온프레미스 위치에서 Amazon S3의 데이터에 안전하게 액세스하려고 합니다. 데이터가 인터넷을 통과해서는 안 됩니다. 회사는 해당 지역과 온프레미스 위치 간에 AWS Direct Connect 연결을 설정했습니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon S3용 게이트웨이 엔드포인트를 생성합니다. 게이트웨이 엔드포인트를 사용하여 지역 및 온프레미스 위치의 데이터에 안전하게 액세스하세요.",
      "B": "AWS Transit Gateway 에 게이트웨이를 생성하여 리전 및 온프레미스 위치에서 Amazon S3에 안전하게 액세스합니다.",
      "C": "Amazon S3용 인터페이스 엔드포인트를 생성합니다. 인터페이스 엔드포인트를 사용하여 지역 및 온프레미스 위치의 데이터에 안전하게 액세스하세요.",
      "D": "AWS Key Management Service(AWS KMS) 키를 사용하여 지역 및 온프레미스 위치에서 데이터에 안전하게 액세스합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DAX — DynamoDB 전용 캐시, 마이크로초 응답\n▸ ElastiCache — 범용 캐시, 추가 인프라 관리 필요\n▸ \"최소 운영 오버헤드\" → 관리형 솔루션\n\n【정답 포인트】\n▸ \"DynamoDB 응답 시간\" → DAX (직접 최적화)\n▸ \"밀리초→마이크로초\" → DAX 인메모리 캐시\n▸ \"최소 운영 오버헤드\" → DAX (관리형, DynamoDB 통합)\n▸ \"캐싱\" → DAX 자동 관리\n\n【오답 체크】\n(B) Redshift는 분석 DB, OLTP 미지원, 마이그레이션 필요\n(C) RDS는 DynamoDB 대체 아님, 다른 구조\n(D) ElastiCache는 별도 관리 필요, DAX 대비 복잡\n\n【시험 포인트】\n▸ DynamoDB 응답 시간 개선 → DAX (전용)\n▸ ElastiCache 함정: 추가 관리 필요"
  },
  {
    "id": 663,
    "question": "한 회사에서 Amazon DynamoDB 를 데이터베이스 계층으로 사용하는 서버리스 애플리케이션을 배포했습니다. 애플리케이션 사용자가 크게 증가했습니다. 회사는 데이터베이스 응답 시간을 밀리초에서 마이크로초로 향상하고 데이터베이스에 대한 요청을 캐시하기를 원합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "DynamoDB Accelerator(DAX)를 사용하세요.",
      "B": "데이터베이스를 Amazon Redshift로 마이그레이션합니다.",
      "C": "데이터베이스를 Amazon RDS로 마이그레이션합니다.",
      "D": "Redis용 Amazon ElastiCache를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ DAX — DynamoDB 전용 캐시, 마이크로초 응답\n▸ ElastiCache — 범용 캐시, 추가 인프라 관리 필요\n▸ \"최소 운영 오버헤드\" → 관리형 솔루션\n\n【정답 포인트】\n▸ \"DynamoDB 응답 시간\" → DAX (직접 최적화)\n▸ \"밀리초→마이크로초\" → DAX 인메모리 캐시\n▸ \"최소 운영 오버헤드\" → DAX (관리형, DynamoDB 통합)\n▸ \"캐싱\" → DAX 자동 관리\n\n【오답 체크】\n(B) Redshift는 분석 DB, OLTP 미지원, 마이그레이션 필요\n(C) RDS는 DynamoDB 대체 아님, 다른 구조\n(D) ElastiCache는 별도 관리 필요, DAX 대비 복잡\n\n【시험 포인트】\n▸ DynamoDB 응답 시간 개선 → DAX (전용)\n▸ ElastiCache 함정: 추가 관리 필요"
  },
  {
    "id": 664,
    "question": "회사는 온프레미스 NAS(Network Attached Storage) 시스템을 사용하여 HPC(고성능 컴퓨팅) 워크로드에 파일 공유를 제공합니다. 회사는 지연 시간에 민감한 HPC 워크로드와 스토리지를 AWS 클라우드로 마이그레이션하려고 합니다. 회사는 파일 시스템에서 NFS 및 SMB 다중 프로토콜 액세스를 제공할 수 있어야 합니다. 가장 짧은 대기 시간으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (2개 선택)",
    "options": {
      "A": "컴퓨팅 최적화 EC2 인스턴스를 클러스터 배치 그룹에 배포합니다.",
      "B": "컴퓨팅 최적화 EC2 인스턴스를 파티션 배치 그룹에 배포합니다.",
      "C": "EC2 인스턴스를 Amazon FSx for Lustre 파일 시스템에 연결합니다.",
      "D": "EC2 인스턴스를 Amazon FSx for OpenZFS 파일 시스템에 연결합니다.",
      "E": "EC2 인스턴스를 NetApp ONTAP 파일 시스템용 Amazon FSx에 연결합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ 클러스터 배치 그룹 — 극저지연 네트워킹, HPC 최적\n▸ NetApp ONTAP — 다중 프로토콜 (NFS+SMB), HPC 지원\n▸ Lustre — HPC 성능, NFS만 지원\n▸ OpenZFS — 일반 파일시스템, HPC 미최적화\n\n【정답 포인트】\n▸\n(A) \"가장 짧은 대기 시간\" → 클러스터 배치 그룹 (극저지연)\n▸\n(E) \"NFS+SMB 다중 프로토콜\" → NetApp ONTAP 지원\n▸ HPC 워크로드 + 저지연 → 클러스터 + NetApp 조합\n▸ 파티션은 확장성, 클러스터는 저지연\n\n【오답 체크】\n(B) 파티션 배치는 지연 시간 최적화 아님, 확장성 중심\n(C) Lustre는 NFS만, SMB 미지원\n(D) OpenZFS는 HPC 최적화 없음, 지연 높음\n\n【시험 포인트】\n▸ HPC + 저지연 → 클러스터 배치\n▸ 다중 프로토콜 (NFS+SMB) → NetApp ONTAP만"
  },
  {
    "id": 665,
    "question": "한 회사에서 온프레미스 Microsoft SQL Server Enterprise 에디션 데이터베이스를 AWS 로 마이그레이션하려고 합니다. 회사의 온라인 애플리케이션은 데이터베이스를 사용하여 거래를 처리합니다. 데이터 분석 팀은 동일한 프로덕션 데이터베이스를 사용하여 분석 처리를 위한 보고서를 실행합니다. 회사는 가능한 한 관리형 서비스로 전환하여 운영 오버헤드를 줄이고 싶어합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Microsoft SQL Server 용 Amazon RDS 로 마이그레이션하세요. 보고 목적으로 읽기 복제본을 사용하세요.",
      "B": "Amazon EC2의 Microsoft SQL Server로 마이그레이션합니다. 보고 목적으로 Always On 읽기 복제본을 사용하세요.",
      "C": "Amazon DynamoDB 로 마이그레이션합니다. 보고 목적으로 DynamoDB 온디맨드 복제본을 사용하세요.",
      "D": "Amazon Aurora MySQL 로 마이그레이션합니다. 보고 목적으로 Aurora 읽기 전용 복제본을 사용하십시오."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RDS for SQL Server — 관리형, 자동 유지보수\n▸ 읽기 복제본 — OLTP와 OLAP 분리\n▸ EC2 — 자체 관리 (높은 오버헤드)\n▸ DynamoDB/Aurora — SQL Server 호환성 없음\n\n【정답 포인트】\n▸ \"관리형 서비스\" → RDS (자동 패치, 백업)\n▸ OLTP + OLAP 분리 → 읽기 복제본\n▸ \"SQL Server Enterprise\" 유지 → RDS for SQL Server\n▸ \"최소 운영 오버헤드\" → RDS 우위\n\n【오답 체크】\n(B) EC2는 관리형 아님, 패치/백업 수동\n(C) DynamoDB는 관계형 미지원, 스키마 변환 필요\n(D) Aurora MySQL로의 변환은 애플리케이션 코드 변경 필요\n\n【시험 포인트】\n▸ SQL Server → RDS for SQL Server (같은 엔진)\n▸ OLTP/OLAP 분리 → 읽기 복제본 표준 패턴"
  },
  {
    "id": 666,
    "question": "회사는 사용자를 비용 센터에 매핑하는 Amazon RDS 데이터베이스를 유지 관리합니다. 회사는 AWS Organizations 의 조직에 계정을 가지고 있습니다. 회사에는 조직의 특정 AWS 계정에서 생성된 모든 리소스에 태그를 지정하는 솔루션이 필요합니다. 솔루션은 리소스를 생성한 사용자의 비용 센터 ID로 각 리소스에 태그를 지정해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "특정 AWS 계정을 마스터 계정에서 조직의 새로운 조직 단위(OU)로 이동합니다. 리소스가 생성되기 전에 모든 기존 리소스에 올바른 비용 센터 태그가 있어야 하는 서비스 제어 정책(SCP)을 생성합니다. 새 OU에 SCP를 적용합니다.",
      "B": "Lambda 함수가 RDS 데이터베이스에서 적절한 비용 센터를 조회한 후 리소스에 태그를 지정하는 AWS Lambda 함수를 생성합니다. AWS CloudTrail 이벤트에 반응하여 Lambda 함수를 호출하는 Amazon EventBridge 규칙을 구성합니다.",
      "C": "AWS CloudFormation 스택을 생성하여 AWS Lambda 함수를 배포합니다. RDS 데이터베이스에서 적절한 비용 센터를 조회하고 리소스에 태그를 지정하도록 Lambda 함수를 구성합니다. CloudFormation 스택을 호출하는 Amazon EventBridge 예약 규칙을 생성합니다.",
      "D": "기본값으로 리소스에 태그를 지정하는 AWS Lambda 함수를 생성합니다. 리소스에 비용 센터 태그가 누락된 경우 AWS CloudTrail 이벤트에 반응하여 Lambda 함수를 호출하는 Amazon EventBridge 규칙을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ EventBridge — AWS 이벤트 규칙 기반 실시간 처리 플랫폼\n▸ CloudTrail — 모든 AWS API 호출을 감시하고 추적하는 감사 로그 서비스\n▸ Lambda 함수 — 이벤트 기반으로 실행되는 서버리스 코드 실행 환경\n\n【정답 포인트】\n▸ 이벤트 기반 자동 처리 — CloudTrail이 리소스 생성 API 캡처 → EventBridge 규칙이 즉시 Lambda 호출\n▸ 동적 비용 센터 조회 — Lambda 함수가 RDS 데이터베이스에서 생성 사용자의 비용 센터 ID 실시간 검색 후 적용\n▸ 자동 확장성 — Lambda 동시성으로 대량의 리소스 생성 이벤트를 병렬 처리 가능\n\n【오답 체크】\n(A) SCP는 정책 적용 후 리소스 생성을 사전 방지하지만, 기존 리소스 태그 지정 불가능\n(C) 예약 규칙은 정기적 실행만 가능하므로 생성 직후 즉시 태그 처리 불가\n(D) 기본값만으로는 실제 사용자별 비용 센터 ID 매핑 불가능, 동적 조회 필요\n\n【시험 포인트】\n▸ 리소스 생성 즉시 감지 → CloudTrail 이벤트 선택 필수\n▸ 사용자 정보 매핑 → RDS 데이터베이스에서 조회 필수 (단순 기본값 불가)\n▸ 즉시 응답 → EventBridge 실시간 규칙 구현 (예약 규칙 아님)"
  },
  {
    "id": 667,
    "question": "회사는 Amazon EC2 인스턴스와 Amazon Elastic Block Store(Amazon EBS) 볼륨을 사용하여 애플리케이션을 실행합니다. 회사는 규정 준수 요구 사항을 충족하기 위해 매일 각 EBS 볼륨에 대해 하나의 스냅샷을 생성합니다. 회사는 EBS 볼륨 스냅샷이 실수로 삭제되는 것을 방지하는 아키텍처를 구현하려고 합니다. 솔루션은 스토리지 관리자 사용자의 관리 권한을 변경해서는 안 됩니다. 최소한의 관리 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "스냅샷 삭제 권한이 있는 IAM 역할을 생성합니다. 새 EC2 인스턴스에 역할을 연결합니다. 스냅샷을 삭제하려면 새 EC2 인스턴스에서 AWS CLI를 사용하세요.",
      "B": "스냅샷 삭제를 거부하는 IAM 정책을 생성합니다. 스토리지 관리자 사용자에게 정책을 연결합니다.",
      "C": "스냅샷에 태그를 추가합니다. 태그가 있는 EBS 스냅샷에 대해 휴지통에 보관 규칙을 만듭니다.",
      "D": "삭제를 방지하기 위해 EBS 스냅샷을 잠급니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Snapshot Lock — EBS 스냅샷을 삭제로부터 보호하는 보안 메커니즘\n▸ 최소 권한 원칙 — 사용자 권한을 제거하지 않으면서 보호 구현\n▸ 우발적 삭제 방지 — 관리자 권한도 무시하는 강제 잠금\n\n【정답 포인트】\n▸ 관리 권한 보존 — 스토리지 관리자 사용자의 기존 IAM 정책 변경 불필요 (권한 유지)\n▸ 강제 보호 메커니즘 — 스냅샷 락으로 누구도 삭제 불가능하게 차단 (Root 권한도 불가)\n▸ 최소 운영 오버헤드 — 별도 프로세스, 감시, 승인 절차 불필요 (네이티브 기능 활용)\n\n【오답 체크】\n(A) 새로운 EC2 인스턴스 운영으로 복잡성 증가 및 별도 권한 관리 필요\n(B) 사용자 권한 정책 변경으로 요구사항 \"관리 권한을 변경해서는 안 됨\" 명시적 위반\n(C) 휴지통 규칙은 삭제 후 복원까지 시간 발생, 즉각적 보호 미제공\n\n【시험 포인트】\n▸ 권한 유지 필수 → 정책 기반 거부 회피, 네이티브 락 기능 활용\n▸ 우발적 삭제 차단 → EBS 스냅샷 락 기능이 최선책\n▸ 최소화 키워드 → 가장 간단한 관리형 솔루션 선택 (직접 구축 아님)"
  },
  {
    "id": 668,
    "question": "회사는 온프레미스 LDAP 디렉터리 서비스를 사용하여 AWS Management Console 에 사용자를 인증해야 합니다. 디렉터리 서비스는 SAML(Security Assertion Markup Language)과 호환되지 않습니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS 와 온프레미스 LDAP 간에 AWS IAM Identity Center(AWS Single Sign-On)를 활성화합니다.",
      "B": "AWS 자격 증명을 사용하는 IAM 정책을 생성하고 정책을 LDAP에 통합합니다.",
      "C": "LDAP 자격 증명이 업데이트될 때마다 IAM 자격 증명을 교체하는 프로세스를 설정합니다.",
      "D": "AWS Security Token Service(AWS STS)를 사용하여 단기 자격 증명을 얻는 온프레미스 사용자 지정 자격 증명 브로커 애플리케이션 또는 프로세스를 개발합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Custom Credential Broker — STS와 통합된 사용자 정의 인증 중개소 애플리케이션\n▸ SAML 미지원 → LDAP는 SAML 호환 불가능, 다른 방식 필요\n▸ AWS STS — 단기 임시 자격 증명 발급 서비스\n\n【정답 포인트】\n▸ 온프레미스 LDAP 유지 — 기존 디렉토리 서비스 그대로 활용 가능\n▸ STS 단기 자격증명 — 온프레미스 사용자가 STS로부터 임시 AWS 자격 증명 취득\n▸ 사용자 정의 브로커 개발 — LDAP 검증 후 STS AssumeRole으로 임시 토큰 반환\n\n【오답 체크】\n(A) IAM Identity Center(SSO)는 SAML 호환 필요 조건, LDAP는 비호환\n(B) IAM 정책만으로는 LDAP 인증 연결 불가능, 중간 변환 계층 필요\n(C) 수동 자격증명 교체는 자동화 불가능 및 운영 비효율적\n\n【시험 포인트】\n▸ SAML 미지원 워크어라운드 → STS 기반 커스텀 솔루션 필수\n▸ STS 활용 → AssumeRole으로 임시 토큰 발급\n▸ 브로커 패턴 → 온프레미스-AWS 간 중간 계층 애플리케이션 구축"
  },
  {
    "id": 669,
    "question": "회사의 웹사이트는 대중에게 제품을 판매하는 데 사용됩니다. 이 사이트는 ALB(Application Load Balancer) 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행됩니다. Amazon CloudFront 배포판도 있으며 AWS WAF 는 SQL 주입 공격으로부터 보호하는 데 사용되고 있습니다. ALB 는 CloudFront 배포의 오리진입니다. 최근 보안 로그를 검토한 결과, 해당 웹사이트에 대한 접근을 차단해야 할 외부 악성 IP가 발견되었습니다. 솔루션 설계자는 애플리케이션을 보호하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "CloudFront 배포의 네트워크 ACL 을 수정하여 악성 IP 주소에 대한 거부 규칙을 추가합니다.",
      "B": "AWS WAF 구성을 수정하여 악성 IP 주소를 차단하는 IP 일치 조건을 추가합니다.",
      "C": "ALB 뒤의 대상 그룹에 있는 EC2 인스턴스에 대한 네트워크 ACL 을 수정하여 악성 IP 주소를 거부합니다.",
      "D": "악성 IP 주소를 거부하도록 ALB 뒤의 대상 그룹에 있는 EC2 인스턴스에 대한 보안 그룹을 수정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS WAF — 웹 애플리케이션 계층(L7) 공격 차단\n▸ IP Match Condition — IP 주소 기반 규칙 조건\n▸ CloudFront 배포 — 오리진은 ALB, WAF 적용 위치 중요\n\n【정답 포인트】\n▸ CloudFront가 오리진 구조 — 공격 트래픽이 먼저 CloudFront 도달, 여기서 차단 필요\n▸ WAF 배치 위치 — CloudFront 배포에 직접 WAF 적용하여 엣지에서 필터링\n▸ IP 목록 관리 — 악성 IP 주소를 IP Match 조건으로 추가, 즉시 차단\n\n【오답 체크】\n(A) CloudFront는 네트워크 ACL 미지원, 엣지 계층 방화벽이 아님\n(C) ALB 뒤 네트워크 ACL은 CloudFront 트래픽 원본 감지 불가능\n(D) 보안 그룹은 ALB 뒤에만 적용, 인터넷 공격 원본 차단 불가능\n\n【시험 포인트】\n▸ 다층 방어 전략 → CloudFront(엣지)에서 우선 필터링\n▸ WAF 배치 → 노출된 리소스 바로 앞 위치 (여기선 CloudFront)\n▸ IP 기반 차단 → 악성 IP List 관리 용이한 IP Match 규칙"
  },
  {
    "id": 670,
    "question": "한 제조 회사가 AWS 에서 보고서 생성 애플리케이션을 실행하고 있습니다. 애플리케이션은 약 20 분 안에 각 보고서를 생성합니다. 애플리케이션은 단일 Amazon EC2 인스턴스에서 실행되는 모놀리스로 구축되었습니다. 애플리케이션에는 긴밀하게 결합된 모듈을 자주 업데이트해야 합니다. 회사에서 새로운 기능을 추가하면 애플리케이션을 유지 관리하기가 복잡해집니다. 회사에서 소프트웨어 모듈을 패치할 때마다 애플리케이션에 가동 중지 시간이 발생합니다. 보고서 생성은 중단된 후에 처음부터 다시 시작되어야 합니다. 회사는 애플리케이션이 유연하고 확장 가능하며 점진적으로 개선될 수 있도록 애플리케이션을 재설계하려고 합니다. 회사는 애플리케이션 가동 중지 시간을 최소화하려고 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS Lambda 에서 최대 프로비저닝 동시성을 갖춘 단일 함수로 애플리케이션을 실행합니다.",
      "B": "스팟 집합 기본 할당 전략을 사용하여 Amazon EC2 스팟 인스턴스에서 애플리케이션을 마이크로서비스로 실행합니다.",
      "C": "서비스 자동 조정을 통해 Amazon Elastic Container Service(Amazon ECS)에서 애플리케이션을 마이크로서비스로 실행합니다.",
      "D": "일괄 배포 전략을 사용하여 AWS Elastic Beanstalk 에서 애플리케이션을 단일 애플리케이션 환경으로 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Microservices 아키텍처 — 느슨하게 결합된 독립적 서비스 구조\n▸ ECS (Elastic Container Service) — 컨테이너 오케스트레이션 관리형 서비스\n▸ 무중단 배포 — 서비스 중단 없이 모듈 업데이트 가능\n\n【정답 포인트】\n▸ 모듈 독립성 — 마이크로서비스 분해로 모듈 개별 배포 및 업데이트 가능\n▸ 자동 스케일링 — ECS Service Auto Scaling으로 트래픽 변화 자동 추적\n▸ 무중단 업데이트 — 롤링 배포로 실행 중인 서비스 유지 (기존 모놀리스는 가동 중지)\n\n【오답 체크】\n(A) Lambda 단일 함수는 20분 장시간 작업 처리 어려움 (함수 타임아웃 제한)\n(B) 스팟 인스턴스 중단 리스크로 보고서 생성 중 손실 및 재시작 필요\n(D) Elastic Beanstalk 단일 환경은 여전히 모놀리식 배포 구조, 무중단 미제공\n\n【시험 포인트】\n▸ 유연성 + 확장성 → 마이크로서비스 분해 필수\n▸ 무중단 배포 → 컨테이너 오케스트레이션(ECS) 선택 필요\n▸ 자동 조정 → ECS Service Auto Scaling 활용 구현"
  },
  {
    "id": 671,
    "question": "한 회사에서 컨테이너화된 애플리케이션 워크로드를 3 개의 가용 영역에 걸쳐 VPC 에 배포하려고 합니다. 회사에는 가용 영역 전반에 걸쳐 가용성이 높은 솔루션이 필요합니다. 솔루션을 사용하려면 애플리케이션을 최소한으로 변경해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic Container Service(Amazon ECS)를 사용하세요. 대상 추적 조정을 사용하도록 Amazon ECS 서비스 Auto Scaling 을 구성합니다. 최소 용량을 3 으로 설정합니다. 가용 영역 속성을 사용하여 분산되도록 작업 배치 전략 유형을 설정합니다.",
      "B": "Amazon Elastic Kubernetes Service(Amazon EKS) 자체 관리형 노드를 사용합니다. 대상 추적 조정을 사용하도록 Application Auto Scaling 을 구성합니다. 최소 용량을 3 으로 설정하세요.",
      "C": "Amazon EC2 예약 인스턴스를 사용하십시오. 분산 배치 그룹에서 3 개의 EC2 인스턴스를 시작합니다. 대상 추적 조정을 사용하도록 Auto Scaling 그룹을 구성합니다. 최소 용량을 3으로 설정하세요.",
      "D": "AWS Lambda 함수를 사용하십시오. VPC 에 연결하도록 Lambda 함수를 구성합니다. Lambda를 확장 가능한 대상으로 사용하도록 Application Auto Scaling을 구성합니다. 최소 용량을 3으로 설정하세요."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Placement Strategy — ECS 작업 배포 전략 구성 옵션 (분산/클러스터링)\n▸ AZ 분산 전략 — 가용 영역 전체에 균등 배치 기능 (spread)\n▸ 관리형 오케스트레이션 — ECS가 자동으로 노드 스케일링 관리\n\n【정답 포인트】\n▸ 최소 코드 변경 — 컨테이너 인터페이스 동일 유지, 배포 설정만 변경 (재개발 불필요)\n▸ HA 고가용성 구조 — 3 AZ에 최소 3개 작업 배치로 개별 AZ 장애 자동 대응 (복원력)\n▸ 최소 운영 오버헤드 — ECS가 관리형으로 마스터 노드 자체 관리 불필요 (간편)\n\n【오답 체크】\n(B) EKS 자체 관리형 노드는 워커 노드 패치, 업그레이드 등 운영 복잡도 높음 (관리 필요)\n(C) EC2 배치 그룹은 AZ 분산 불가능, 단일 AZ 내 배치만 가능 (HA 미제공)\n(D) Lambda는 최대 15분 타임아웃, 20분 작업 실행 불가능 (시간 초과)\n\n【시험 포인트】\n▸ HA 배치 전략 → AZ 속성으로 분산 배치 필수 구성 (spread 전략)\n▸ 최소 용량 3 → 각 AZ당 최소 1개 작업 보장 (장애 격리)\n▸ 관리형 선호 → ECS(Fargate) > EKS 자체 관리형 (운영 편의성)"
  },
  {
    "id": 672,
    "question": "한 회사는 높은 동시성 AWS Lambda 함수를 사용하여 마케팅 이벤트 중에 메시지 대기열에서 지속적으로 증가하는 메시지 수를 처리합니다. Lambda 함수는 CPU 집약적인 코드를 사용하여 메시지를 처리합니다. 회사는 컴퓨팅 비용을 줄이고 고객의 서비스 대기 시간을 유지하기를 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Lambda 함수에 대해 예약된 동시성을 구성합니다. Lambda 함수에 할당된 메모리를 줄입니다.",
      "B": "Lambda 함수에 대한 예약된 동시성을 구성합니다. AWS Compute Optimizer 권장 사항에 따라 메모리를 늘리십시오.",
      "C": "Lambda 함수에 대해 프로비저닝된 동시성을 구성합니다. Lambda 함수에 할당된 메모리를 줄입니다.",
      "D": "Lambda 함수에 대해 프로비저닝된 동시성을 구성합니다. AWS Compute Optimizer 권장 사항에 따라 메모리를 늘리십시오."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Provisioned Concurrency — 초기화된 Lambda 인스턴스 사전 준비\n▸ 콜드 스타트 문제 — 초기 함수 시작 지연 (수백ms)\n▸ AWS Compute Optimizer — 성능/비용 최적화 AI 기반 권장 엔진\n\n【정답 포인트】\n▸ 콜드 스타트 제거 — 프로비저닝된 동시성으로 항상 따뜻한 Lambda 인스턴스 유지\n▸ 성능 최적화 — CPU 집약적 워크로드는 메모리 증가로 CPU 할당 확대 (Lambda CPU 비례)\n▸ 비용 + 대기시간 양립 — Provisioned Concurrency로 지연 제거, 메모리 최적화로 비용 절감\n\n【오답 체크】\n(A) 예약된 동시성은 콜드 스타트 미방지, 메모리 감소는 성능 악화 야기\n(B) 예약된 동시성은 여전히 콜드 스타트 발생, 비용 효과 부족\n(C) 프로비저닝 동시성 맞지만 메모리 감소는 CPU 시간 증가로 총비용/지연 악화\n\n【시험 포인트】\n▸ CPU 집약적 + 고동시성 → 프로비저닝 동시성 필수 선택\n▸ 콜드 스타트 제거 → Provisioned Concurrency 유일한 솔루션\n▸ 메모리 증가 → Lambda CPU 비례 할당으로 성능 향상"
  },
  {
    "id": 673,
    "question": "AWS 를 사용하는 회사에는 매달 제조 프로세스에 필요한 리소스를 예측하는 솔루션이 필요합니다. 솔루션은 현재 Amazon S3 버킷에 저장된 기록 값을 사용해야 합니다. 회사는 기계 학습(ML) 경험이 없으며 교육 및 예측을 위해 관리형 서비스를 사용하려고 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Amazon SageMaker 모델을 배포합니다. 추론을 위해 SageMaker 엔드포인트를 생성합니다.",
      "B": "Amazon SageMaker를 사용하여 S3 버킷의 기록 데이터를 사용하여 모델을 교육합니다.",
      "C": "Amazon SageMaker 엔드포인트를 사용하여 입력을 기반으로 예측을 생성하는 함수 URL로 AWS Lambda 함수를 구성합니다.",
      "D": "Amazon Forecast 예측기를 사용하여 입력을 기반으로 예측을 생성하는 함수 URL 로 AWS Lambda 함수를 구성합니다.",
      "E": "S3 버킷의 기록 데이터를 사용하여 Amazon Forecast 예측기를 교육합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ Amazon Forecast — 시계열 예측 관리형 머신러닝 서비스\n▸ Predictor — 학습된 예측 모델 객체\n▸ 자동 알고리즘 선택 — ML 경험 불필요 (Forecast가 자동 최적화)\n\n【정답 포인트】\n▸ ML 경험 불필요 — Amazon Forecast가 자동으로 알고리즘 선택 및 매개변수 튜닝\n▸ S3 히스토리 활용 — 버킷에 저장된 기록 데이터 직접 학습 데이터로 사용\n▸ 예측 생성 → 학습된 Predictor로부터 Lambda 호출 후 결과 반환\n\n【오답 체크】\n(A) SageMaker는 모델 선택/튜닝을 수동으로 해야 하며 ML 경험 필요\n(C) SageMaker 엔드포인트는 별도 인프라 관리 필요, 관리형 아님\n(D) Lambda + Forecast 조합 미필요 (Forecast Predictor만으로 충분)\n\n【시험 포인트】\n▸ 관리형 ML 서비스 선택 → Amazon Forecast 우선 선택\n▸ 시계열 예측 → Forecast Predictor 자동 학습 및 최적화\n▸ 2개 선택 (복수) → B(SageMaker 학습) + E(Forecast 교육) 조합"
  },
  {
    "id": 674,
    "question": "한 회사에는 여러 AWS 지역의 Amazon EC2 인스턴스에 배포된 HTTP 기반 애플리케이션에 액세스하는 전 세계 사용자가 있습니다. 회사는 애플리케이션의 가용성과 성능을 개선하려고 합니다. 또한 회사는 가용성에 영향을 미치거나, 보안을 손상시키거나, 과도한 리소스를 소비할 수 있는 일반적인 웹 공격으로부터 애플리케이션을 보호하려고 합니다. 고정 IP 주소가 필요합니다. 이를 달성하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?",
    "options": {
      "A": "각 지역의 NLB(Network Load Balancer) 뒤에 EC2 인스턴스를 배치합니다. NLB에 AWS WAF를 배포합니다. AWS Global Accelerator를 사용하여 액셀러레이터를 생성하고 NLB를 엔드포인트로 등록합니다.",
      "B": "각 지역의 ALB(Application Load Balancer) 뒤에 EC2 인스턴스를 배치합니다. ALB 에 AWS WAF 를 배포합니다. AWS Global Accelerator 를 사용하여 액셀러레이터를 생성하고 ALB를 엔드포인트로 등록합니다.",
      "C": "각 지역의 NLB(Network Load Balancer) 뒤에 EC2 인스턴스를 배치합니다. NLB에 AWS WAF 를 배포합니다. Amazon Route 53 지연 시간 기반 라우팅을 사용하여 요청을 NLB 로 라우팅하는 오리진으로 Amazon CloudFront 배포를 생성합니다.",
      "D": "각 지역의 ALB(Application Load Balancer) 뒤에 EC2 인스턴스를 배치합니다. Amazon Route 53 지연 시간 기반 라우팅을 사용하여 요청을 ALB 로 라우팅하는 오리진으로 Amazon CloudFront 배포를 생성합니다. CloudFront 배포에 AWS WAF를 배포합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Global Accelerator — 고정 anycast IP로 글로벌 성능 최적화 서비스\n▸ NLB (Network Load Balancer) — 극저지연 네트워크 계층 로드 밸런싱\n▸ Anycast IP — 지역별 AWS 엣지 로케이션에서 제공되는 고정 IP\n\n【정답 포인트】\n▸ 고정 IP 제공 — Global Accelerator는 2개 고정 Anycast IP 할당 (변경 불가)\n▸ WAF 통합 — NLB는 WAF 미지원이지만 Global Accelerator가 DDoS 기본 제공\n▸ 글로벌 성능 — AWS 백본 네트워크로 사용자 → 최적 엣지 → NLB 경로 최적화\n\n【오답 체크】\n(B) ALB는 NLB 대비 지연 높음 (애플리케이션 계층 처리)\n(C) CloudFront + Route 53은 고정 IP 미제공 (CNAME 기반)\n(D) CloudFront도 고정 IP 미제공, WAF 배치 위치도 부정확 (엣지 필요)\n\n【시험 포인트】\n▸ 고정 IP 필수 → Global Accelerator 유일한 선택지\n▸ WAF + NLB 조합 → Global Accelerator 엔드포인트 등록으로 통합\n▸ 극저지연 애플리케이션 → NLB 사용 필수 (ALB 대비 성능)"
  },
  {
    "id": 675,
    "question": "전자상거래 회사에서 계절별 온라인 세일을 진행하고 있습니다. 이 회사는 여러 가용 영역에 걸쳐 있는 Amazon EC2 인스턴스에서 웹 사이트를 호스팅합니다. 회사는 자사 웹사이트에서 세일 기간 동안 급격한 트래픽 증가를 관리할 수 있기를 원합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "최대 트래픽 로드를 처리할 수 있을 만큼 큰 Auto Scaling 그룹을 생성합니다. Amazon EC2 인스턴스의 절반을 중지합니다. 트래픽이 증가하면 중지된 인스턴스를 사용하여 확장하도록 Auto Scaling 그룹을 구성합니다.",
      "B": "웹 사이트에 대한 Auto Scaling 그룹을 생성합니다. 확장할 필요 없이 높은 트래픽 볼륨을 처리할 수 있도록 Auto Scaling 그룹의 최소 크기를 설정합니다.",
      "C": "Amazon CIoudFront 및 Amazon ElastiCache를 사용하여 Auto Scaling 그룹을 원본으로 설정하여 동적 콘텐츠를 캐시합니다. CIoudFront 및 ElastiCache 를 채우는 데 필요한 인스턴스로 Auto Scaling 그룹을 구성합니다. 캐시가 완전히 채워진 후 규모를 축소합니다.",
      "D": "트래픽 증가에 따라 확장되도록 Auto Scaling 그룹을 구성합니다. 사전 구성된 Amazon 머신 이미지(AMI)에서 새 인스턴스를 시작하기 위한 시작 템플릿을 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Auto Scaling 동적 정책 — 트래픽 변화를 자동으로 추적하는 정책 (Target Tracking)\n▸ AMI 사전 구성 — 부팅/애플리케이션 초기화를 미리 완료한 이미지 (황금 이미지)\n▸ 비용 효율성 — 필요한 리소스만큼 사용 후 축소하는 방식 (탄력성)\n\n【정답 포인트】\n▸ 비용 효율성 — 최소 용량(낮음) → 최대 용량(높음)으로 필요시만 확장, 미사용 시 자동 축소 (ROI)\n▸ 빠른 시작 응답 — 사전 구성 AMI로 부팅, 애플리케이션 로딩, 메모리 초기화 시간 단축 (지연 최소)\n▸ 자동화 운영 → 수동 개입 없이 트래픽 변화에 자동 대응 (24시간 무인화)\n\n【오답 체크】\n(A) 중지된 인스턴스도 월정액 비용 발생 (중지 상태 ≠ 비용 절감)\n(B) 최소 크기를 최대로 설정하면 항상 최대 인스턴스 실행 (낭비적 구성)\n(C) 캐시 사전 채우기는 초기 시간 소요 및 구현 복잡도 높음 (비효율)\n\n【시험 포인트】\n▸ 비용 최적화 키워드 → 동적 확장(최소 → 필요량 → 최대) 구조 필수 (탄력적)\n▸ 빠른 응답 → 사전 구성 AMI로 부팅 시간 단축 필수 구현 (성능)\n▸ 시즈널 트래픽 → 트래픽 예측 기반 정책 구성 및 예약 스케일링 (전략)"
  },
  {
    "id": 676,
    "question": "한 회사가 Amazon RDS 데이터베이스를 사용하여 Amazon EC2 인스턴스에 애플리케이션을 배포했습니다. 회사는 최소 권한 원칙을 사용하여 데이터베이스 액세스 자격 증명을 구성했습니다. 회사의 보안 팀은 SQL 주입 및 기타 웹 기반 공격으로부터 애플리케이션과 데이터베이스를 보호하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "보안 그룹과 네트워크 ACL 을 사용하여 데이터베이스와 애플리케이션 서버를 보호하십시오.",
      "B": "AWS WAF 를 사용하여 애플리케이션을 보호하십시오. RDS 매개변수 그룹을 사용하여 보안 설정을 구성합니다.",
      "C": "AWS 네트워크 방화벽을 사용하여 애플리케이션과 데이터베이스를 보호하십시오.",
      "D": "다양한 기능을 위해 애플리케이션 코드에서 다양한 데이터베이스 계정을 사용합니다. 데이터베이스 사용자에게 과도한 권한을 부여하지 마십시오."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS WAF — 웹 애플리케이션 계층(L7) 공격 탐지 및 차단 서비스\n▸ SQL Injection — 사용자 입력을 통한 SQL 쿼리 조작 공격\n▸ 최소 권한 — 이미 설정된 기존 IAM 정책 그대로 유지 방식\n\n【정답 포인트】\n▸ SQL 주입 방어 — AWS WAF 규칙으로 SQL 패턴 탐지 및 악성 요청 차단\n▸ 최소 운영 오버헤드 — WAF 관리형 규칙(OWASP TOP 10) 제공, 직접 작성 불필요\n▸ 기존 IAM 유지 — 이미 설정된 최소 권한 IAM 정책 그대로 사용 (변경 불필요)\n\n【오답 체크】\n(A) 보안 그룹/네트워크 ACL은 네트워크 계층(L3/L4) 필터링만, 페이로드 검사 불가\n(C) 네트워크 방화벽은 구현 복잡도 높고 웹 공격 탐지 미특화 (네트워크 계층)\n(D) 데이터베이스 계정 분리는 애플리케이션 코드 변경 필요, 운영 오버헤드 증가\n\n【시험 포인트】\n▸ SQL 주입 방어 → WAF 표준 규칙 활용 (OWASP Top 10 자동)\n▸ 최소 노력 → WAF 관리형 규칙 선택지 활용 (커스텀 아님)\n▸ 웹 공격 → 애플리케이션 계층 방화벽(WAF) 필수 구현"
  },
  {
    "id": 677,
    "question": "회사는 온프레미스 데이터 센터에서 여러 워크로드를 실행합니다. 회사의 데이터 센터는 회사의 확장되는 비즈니스 요구 사항을 충족할 만큼 빠르게 확장할 수 없습니다. 회사는 AWS 로의 마이그레이션을 계획하기 위해 온프레미스 서버 및 워크로드에 대한 사용량 및 구성 데이터를 수집하려고 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS Migration Hub에서 홈 AWS 리전을 설정합니다. AWS Systems Manager를 사용하여 온프레미스 서버에 대한 데이터를 수집합니다.",
      "B": "AWS Migration Hub 에서 홈 AWS 지역을 설정합니다. AWS Application Discovery Service를 사용하여 온프레미스 서버에 대한 데이터를 수집합니다.",
      "C": "AWS Schema Conversion Tool(AWS SCT)을 사용하여 관련 템플릿을 생성합니다. AWS Trusted Advisor를 사용하여 온프레미스 서버에 대한 데이터를 수집합니다.",
      "D": "AWS SCT(AWS Schema Conversion Tool)를 사용하여 관련 템플릿을 생성합니다. AWS Database Migration Service(AWS DMS)를 사용하여 온프레미스 서버에 대한 데이터를 수집합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Application Discovery Service — 온프레미스 워크로드 자동 발견 에이전트\n▸ Migration Hub — 마이그레이션 계획 및 진행 추적 중앙화 플랫폼\n▸ 사용량/구성 데이터 — CPU, 메모리, 디스크, 네트워크 트래픽 등\n\n【정답 포인트】\n▸ 자동 발견 — ADS 에이전트 배포로 서버/워크로드 특성 자동 수집 및 전송\n▸ Migration Hub 통합 — 수집 데이터를 중앙 대시보드에서 통합 관리 및 추적\n▸ 마이그레이션 계획 — 수집된 워크로드 정보 기반 의사결정 및 ROI 분석\n\n【오답 체크】\n(A) Systems Manager는 설정/상태 관리용, 온프레미스 발견 도구 아님 (발견 기능 없음)\n(C) SCT는 데이터베이스 스키마 변환 도구, 서버 발견 기능 없음 (DB만)\n(D) DMS는 데이터베이스 이관용, 서버/워크로드 발견 기능 없음 (이관만)\n\n【시험 포인트】\n▸ 온프레미스 발견 → Application Discovery Service 필수 선택\n▸ 마이그레이션 계획 → Migration Hub로 중앙 추적 및 대시보드\n▸ 워크로드 분석 → ADS 수집 데이터 활용하여 의사결정"
  },
  {
    "id": 678,
    "question": "개발팀이 다른 회사와 협력하여 통합 제품을 만들고 있습니다. 다른 회사는 개발 팀의 계정에 포함된 Amazon Simple Queue Service(Amazon SQS) 대기열에 액세스해야 합니다. 다른 회사는 자신의 계정 권한을 포기하지 않고 대기열을 폴링하려고 합니다. 솔루션 설계자는 SQS 대기열에 대한 액세스를 어떻게 제공해야 합니까?",
    "options": {
      "A": "다른 회사에 SQS 대기열에 대한 액세스를 제공하는 인스턴스 프로필을 생성합니다.",
      "B": "SQS 대기열에 대한 다른 회사 액세스를 제공하는 IAM 정책을 생성합니다.",
      "C": "SQS 대기열에 대한 다른 회사 액세스를 제공하는 SQS 액세스 정책을 만듭니다.",
      "D": "다른 회사에 SQS 대기열에 대한 액세스를 제공하는 Amazon Simple 알림 서비스(Amazon SNS) 액세스 정책을 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SQS Access Policy — SQS 리소스 기반 크로스 계정 접근 제어\n▸ Principal 정책 — 정책에 다른 AWS 계정 ID 지정으로 권한 부여\n▸ 계정 권한 보존 — 대상 계정 IAM 수정 불필요 (리소스 정책로 해결)\n\n【정답 포인트】\n▸ 크로스 계정 접근 — SQS 액세스 정책으로 외부 계정의 ReceiveMessage 권한 허용\n▸ 권한 보존 — 다른 회사의 IAM 정책 변경 불필요 (자신의 권한 유지)\n▸ 정책 기반 제어 — SQS 정책 Principal에 다른 회사 계정 ID 지정으로 신뢰\n\n【오답 체크】\n(A) 인스턴스 프로필은 EC2 인스턴스 IAM 역할용, 크로스 계정 미지원 (같은 계정)\n(B) IAM 정책은 같은 계정 내 사용자/역할용, 크로스 계정 미지원 (계정 외 불가)\n(D) SNS 정책은 SQS 대기열과 무관 (리소스 타입 다름, 호환성 없음)\n\n【시험 포인트】\n▸ 크로스 계정 접근 → 리소스 기반 정책 사용 필수 (IAM 정책 아님)\n▸ SQS 특정 → SQS Access Policy (SQS 전용 정책)\n▸ Principal 지정 → 다른 회사 계정 ID 포함하여 신뢰 구축"
  },
  {
    "id": 679,
    "question": "회사에 스토리지 용량이 부족한 온프레미스 데이터 센터가 있습니다. 회사는 대역폭 비용을 최소화하면서 스토리지 인프라를 AWS 로 마이그레이션하려고 합니다. 솔루션은 추가 비용 없이 데이터를 즉시 검색할 수 있어야 합니다. 이러한 요구 사항을 어떻게 충족할 수 있습니까?",
    "options": {
      "A": "Amazon S3 Glacier Vault 를 배포하고 빠른 검색을 활성화합니다. 워크로드에 대해 프로비저닝된 검색 용량을 활성화합니다.",
      "B": "캐시된 볼륨을 사용하여 AWS Storage Gateway 를 배포합니다. Storage Gateway 를 사용하면 자주 액세스하는 데이터 하위 집합의 복사본을 로컬에 보관하면서 Amazon S3 에 데이터를 저장할 수 있습니다.",
      "C": "저장된 볼륨을 사용하여 AWS Storage Gateway를 배포하여 데이터를 로컬에 저장합니다. Storage Gateway 를 사용하여 데이터의 특정 시점 스냅샷을 Amazon S3 에 비동기식으로 백업합니다.",
      "D": "AWS Direct Connect 를 배포하여 온프레미스 데이터 센터에 연결합니다. 데이터를 로컬에 저장하도록 AWS Storage Gateway 를 구성합니다. Storage Gateway 를 사용하여 데이터의 특정 시점 스냅샷을 Amazon S3에 비동기식으로 백업합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Storage Gateway Cached Volume — 자주 쓰는 데이터를 로컬 캐시로 유지\n▸ 즉시 검색 — 로컬 캐시에서 고속 접근 (S3 재다운로드 불필요)\n▸ 대역폭 최소화 — 캐시 히트시 S3 egress 비용 및 네트워크 통신 회피\n\n【정답 포인트】\n▸ 대역폭 최소화 — 자주 액세스하는 데이터는 로컬 캐시 유지 (S3 재 다운로드 생략)\n▸ 즉시 검색 — 로컬 사본으로 추가 비용 없이 즉시 응답 가능 (고속)\n▸ 백업 통합 — Storage Gateway가 변경사항을 S3에 비동기 백업 (이중화)\n\n【오답 체크】\n(A) Glacier는 빠른 검색 불가능 (수시간 대기 필요, 즉시 검색 미제공)\n(C) Stored Volume은 로컬 우선 저장, S3는 백업 용도 (대역폭 절감 미제공)\n(D) Direct Connect는 초기 구축 비용 발생, 즉시 검색 보장 불가 (경제성 낮음)\n\n【시험 포인트】\n▸ 온프레미스 스토리지 확장 → Storage Gateway 선택 필수\n▸ 즉시 검색 필수 → Cached Volume (로컬 캐시 보유)\n▸ 대역폭 최소화 → 자주 쓰는 데이터만 로컬 유지 (S3 백업)"
  },
  {
    "id": 680,
    "question": "회사는 AWS 로 마이그레이션하고 애플리케이션에 Amazon EC2 온디맨드 인스턴스를 사용할 계획입니다. 마이그레이션 테스트 단계에서 기술 팀은 애플리케이션이 완전히 생산되기 위해 메모리를 실행하고 로드하는 데 오랜 시간이 걸린다는 사실을 관찰했습니다. 다음 테스트 단계에서 애플리케이션 실행 시간을 단축할 솔루션은 무엇입니까?",
    "options": {
      "A": "두 개 이상의 EC2 온디맨드 인스턴스를 시작합니다. Auto Scaling 기능을 활성화하고 다음 테스트 단계에서 EC2 온디맨드 인스턴스를 사용할 수 있도록 하십시오.",
      "B": "EC2 스팟 인스턴스를 시작하여 애플리케이션을 지원하고 다음 테스트 단계에서 사용할 수 있도록 애플리케이션을 확장합니다.",
      "C": "최대 절전 모드를 활성화한 상태에서 EC2 온디맨드 인스턴스를 시작합니다. 다음 테스트 단계에서 EC2 Auto Scaling 웜 풀을 구성합니다.",
      "D": "용량 예약을 통해 EC2 온디맨드 인스턴스를 시작합니다. 다음 테스트 단계에서 추가 EC2 인스턴스를 시작하십시오."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Hibernation — EC2 메모리 상태를 EBS에 저장 후 부팅 시 복원\n▸ Warm Pool — EC2 Auto Scaling에서 사전 초기화된 인스턴스 풀\n▸ 애플리케이션 로드 시간 — 메모리 + 애플리케이션 초기화 시간\n\n【정답 포인트】\n▸ 메모리 상태 복구 — 최대절전 모드로 이전 메모리 상태 즉시 복원 (부팅 생략)\n▸ 웜 풀 활용 — 사전 초기화된 인스턴스 풀로 스케일 아웃시 추가 대기 시간 제거\n▸ 테스트 단계 가속 — 다음 테스트에서 빠른 시작 및 로드 시간 단축 (최적화)\n\n【오답 체크】\n(A) 추가 인스턴스 시작은 로드 시간 단축 미제공 (부팅 + 초기화 필요)\n(B) 스팟 인스턴스는 중단 리스크 높음 및 불확정적 가용성 (테스트 불안정)\n(D) 용량 예약은 인스턴스 확보만 제공, 로드 시간 단축과 무관 (초기화 불가)\n\n【시험 포인트】\n▸ 긴 로드 시간 → Hibernation 기능 활용 (메모리 복구)\n▸ 반복 테스트 → Warm Pool로 초기화 미재실행 (빠른 시작)\n▸ 다음 테스트 최적화 → 메모리 상태 + 초기화 완료 인스턴스"
  },
  {
    "id": 681,
    "question": "보안 요구 사항을 충족하려면 회사는 Amazon RDS MySQL DB 인스턴스와 통신하는 동안 전송 중인 모든 애플리케이션 데이터를 암호화해야 합니다. 최근 보안 감사에서는 AWS Key Management Service(AWS KMS)를 사용하여 저장 데이터 암호화가 활성화되었지만 전송 중인 데이터는 활성화되지 않은 것으로 나타났습니다. 솔루션 설계자는 보안 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "데이터베이스에서 IAM 데이터베이스 인증을 활성화합니다.",
      "B": "자체 서명된 인증서를 제공합니다. RDS 인스턴스에 대한 모든 연결에 인증서를 사용하십시오.",
      "C": "RDS 인스턴스의 스냅샷을 찍습니다. 암호화가 활성화된 새 인스턴스로 스냅샷을 복원합니다.",
      "D": "AWS 에서 제공하는 루트 인증서를 다운로드합니다. RDS 인스턴스에 대한 모든 연결에 인증서를 제공하십시오."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 전송 중 암호화(In-Transit) — TLS/SSL 연결로 데이터 암호화 전송 (HTTPS)\n▸ 루트 인증서 — AWS 제공 CA 인증서로 RDS 연결 신뢰 체인 구축 (CA Bundle)\n▸ 저장 데이터 암호화 — KMS로 이미 구성됨 (현황 상태)\n\n【정답 포인트】\n▸ TLS 연결 구현 — AWS 제공 루트 인증서로 안전한 HTTPS 기반 RDS 연결 구성 (SSL)\n▸ 저장/전송 암호화 양립 — KMS 저장 + TLS 전송으로 양쪽 요구사항 동시 충족 (종합)\n▸ 추가 비용 없음 — AWS 제공 인증서는 무료 (자체 생성/관리 비용 불필요)\n\n【오답 체크】\n(A) IAM 데이터베이스 인증은 접근 제어용, 전송 암호화 미제공 (다른 목적)\n(B) 자체 서명 인증서는 신뢰 체인 문제 발생, AWS 시스템과 호환성 낮음 (미지원)\n(C) 스냅샷 복원은 기존 암호화 설정 문제 해결 불가능 (구조적 미지원)\n\n【시험 포인트】\n▸ 전송 중 암호화 → TLS/SSL 인증서 필수 구성 (SSL 프로토콜)\n▸ AWS 제공 인증서 → 추가 관리 불필요, 신뢰 체인 확보 (편의성)\n▸ RDS 연결 보안 → 루트 인증서로 신뢰 구축 (certificate-based)"
  },
  {
    "id": 682,
    "question": "한 회사에서 모바일 장치용 멀티플레이어 게임을 배포했습니다. 이 게임에는 위도와 경도를 기반으로 플레이어의 실시간 위치 추적이 필요합니다. 게임의 데이터 저장소는 신속한 업데이트와 위치 검색을 지원해야 합니다. 이 게임은 읽기 전용 복제본이 있는 PostgreSQL DB 인스턴스용 Amazon RDS 를 사용하여 위치 데이터를 저장합니다. 사용량이 가장 많은 기간에는 데이터베이스가 업데이트를 읽고 쓰는 데 필요한 성능을 유지할 수 없습니다. 게임의 사용자 기반이 빠르게 증가하고 있습니다. 데이터 계층의 성능을 향상하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": {
      "A": "기존 DB 인스턴스의 스냅샷을 찍습니다. 다중 AZ가 활성화된 스냅샷을 복원합니다.",
      "B": "OpenSearch 대시보드를 사용하여 Amazon RDS 에서 Amazon OpenSearch Service 로 마이그레이션합니다.",
      "C": "기존 DB 인스턴스 앞에 Amazon DynamoDB Accelerator(DAX)를 배포합니다. DAX 를 사용하도록 게임을 수정합니다.",
      "D": "기존 DB 인스턴스 앞에 Redis용 Amazon ElastiCache 클러스터를 배포합니다. Redis를 사용하도록 게임을 수정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ ElastiCache Redis — 고속 인메모리 데이터 저장소 및 캐시 서비스\n▸ 지리공간 쿼리 — 위도/경도 기반 거리 검색 및 범위 쿼리 기능\n▸ 실시간 성능 — 밀리초 단위 응답 시간 요구 (GPS 추적)\n\n【정답 포인트】\n▸ RDS 병목 제거 — 캐시 계층(Redis)으로 읽기/쓰기 성능 대폭 향상 (100배+)\n▸ 지리공간 최적화 — Redis 지리공간 자료구조(Geo)로 위치 검색 고속화\n▸ 동시성 확장 → 인메모리 구조로 확장성 선형 제공 (병렬 처리)\n\n【오답 체크】\n(A) Multi-AZ는 고가용성만 제공, 읽기/쓰기 성능 미개선 (병목 해결 불가)\n(B) OpenSearch는 문서/텍스트 검색용, 실시간 위치 추적 부적합 (지리공간 미특화)\n(C) DAX는 DynamoDB용 캐시, PostgreSQL RDS 미지원 (호환성 없음)\n\n【시험 포인트】\n▸ 실시간 고성능 → 인메모리 캐시(Redis) 필수 선택 (유일한 방법)\n▸ 지리공간 데이터 → Redis Geo 명령어로 최적화 (특화)\n▸ RDS 병목 제거 → 읽기/쓰기 분산 캐시 계층 추가 필수"
  },
  {
    "id": 683,
    "question": "솔루션 설계자는 보안 그룹이 0.0.0.0/0 의 SSH 를 허용하는 규칙을 포함할 수 없다고 명시하는 회사의 규정 준수 정책에 대한 자동화된 솔루션을 제공해야 합니다. 정책을 위반한 경우 회사에 통보해야 합니다. 가능한 한 빨리 해결책이 필요합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하려면 솔루션 설계자가 무엇을 해야 합니까?",
    "options": {
      "A": "0.0.0.0/0 주소에 열려 있는 SSH에 대한 보안 그룹을 모니터링하고 이를 발견할 때마다 알림을 생성하는 AWS Lambda 스크립트를 작성합니다.",
      "B": "제한된 SSH AWS Config 관리형 규칙을 활성화하고 비준수 규칙이 생성되면 Amazon Simple 알림 서비스(Amazon SNS) 알림을 생성합니다.",
      "C": "전 세계적으로 보안 그룹 및 네트워크 ACL 을 열 수 있는 권한이 있는 IAM 역할을 생성합니다. 사용자가 역할을 맡을 때마다 알림을 생성하려면 Amazon Simple 알림 서비스(Amazon SNS) 주제를 생성합니다.",
      "D": "관리자가 아닌 사용자가 보안 그룹을 생성하거나 편집하는 것을 방지하는 서비스 제어 정책(SCP)을 구성합니다. 사용자가 관리자 권한이 필요한 규칙을 요청할 때 티켓팅 시스템에 알림을 만듭니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Config 관리형 규칙 — 규정 준수 자동 평가 및 추적 서비스\n▸ restricted-ssh 규칙 — SSH 0.0.0.0/0 설정 감지 규칙\n▸ SNS 알림 — 비준수 감지시 즉시 이메일/문자 통보\n\n【정답 포인트】\n▸ 자동 모니터링 — AWS Config 규칙으로 연속 정책 준수 평가 (24/7)\n▸ 즉각 대응 → 비준수 보안 그룹 감지시 즉시 SNS 알림 전송 (실시간)\n▸ 최소 운영 오버헤드 — AWS Config 관리형 규칙(restricted-ssh) 기본 제공\n\n【오답 체크】\n(A) Lambda 스크립트는 수동 관리 필요, 정기적 배포 확인 지연 (운영 증가)\n(C) IAM 역할 모니터링은 이미 생성된 규칙 감시 불가능 (역할 추적만 가능)\n(D) SCP는 미리 차단하지만 기존 규칙 정책 변경 불필요 요구사항 위반 (제한 불가)\n\n【시험 포인트】\n▸ 자동 규정 준수 → AWS Config 관리형 규칙 선택 필수 (자동화)\n▸ 즉시 알림 → SNS 주제로 비준수 통보 (실시간)\n▸ SSH 0.0.0.0/0 차단 → restricted-ssh 규칙 활성화 (선택)"
  },
  {
    "id": 684,
    "question": "회사에는 온프레미스 파일 시스템이 SFTP 를 통해 매일 수신하는 보고서 파일을 분석하는 야간 일괄 처리 루틴이 있습니다. 회사는 솔루션을 AWS 클라우드로 이전하려고 합니다. 솔루션은 가용성과 복원력이 높아야 합니다. 또한 솔루션은 운영 노력을 최소화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SFTP 용 AWS 전송 및 스토리지용 Amazon Elastic File System(Amazon EFS) 파일 시스템을 배포합니다. 예약된 조정 정책이 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스를 사용하여 배치 작업을 실행합니다.",
      "B": "Linux 및 SFTP 서비스를 실행하는 Amazon EC2 인스턴스를 배포합니다. 저장에는 Amazon Elastic Block Store(Amazon EBS) 볼륨을 사용하십시오. 최소 인스턴스 수와 원하는 인스턴스 수를 1로 설정한 Auto Scaling 그룹을 사용합니다.",
      "C": "Linux 및 SFTP 서비스를 실행하는 Amazon EC2 인스턴스를 배포합니다. 저장을 위해 Amazon Elastic File System(Amazon EFS) 파일 시스템을 사용합니다. 최소 인스턴스 수와 원하는 인스턴스 수를 1로 설정한 Auto Scaling 그룹을 사용합니다.",
      "D": "SFTP 용 AWS 전송과 저장용 Amazon S3 버킷을 배포합니다. 처리를 위해 Amazon S3 에서 Amazon EC2 인스턴스로 배치 파일을 가져오도록 애플리케이션을 수정합니다. 예약된 조정 정책이 있는 Auto Scaling 그룹의 EC2 인스턴스를 사용하여 일괄 작업을 실행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Transfer for SFTP — 완전 관리형 SFTP 서비스 (서버 직접 구축 불필요)\n▸ Amazon S3 저장 — 스케일링 가능한 고가용성 스토리지\n▸ 예약 배치 작업 — EventBridge + Lambda 또는 EC2 Auto Scaling으로 자동화\n\n【정답 포인트】\n▸ 고가용성 — AWS Transfer는 멀티 AZ 자동 관리 (단일 장애점 없음)\n▸ 운영 노력 최소화 → SFTP 서버 직접 구축/관리/패치 불필요 (완전 관리형)\n▸ 자동 배치 → 예약 EC2 인스턴스로 S3 데이터 처리 자동화 (야간 실행)\n\n【오답 체크】\n(A) AWS Transfer + EFS는 복잡도 높음 (EFS 별도 관리, 비용 증가)\n(B) EC2 + EBS는 고가용성 미보장, 단일 인스턴스 장애 리스크 (HA 미제공)\n(C) EC2 + EFS는 SFTP 서버 수동 구축/관리 필요 (관리 노력 증가)\n\n【시험 포인트】\n▸ SFTP 관리형 서비스 → AWS Transfer for SFTP 필수 선택\n▸ 고가용성 스토리지 → S3 버킷 활용 (멀티 AZ)\n▸ 자동 배치 처리 → 예약 정책으로 EC2 인스턴스 트리거 (일괄)"
  },
  {
    "id": 685,
    "question": "온라인 비디오 게임 회사는 게임 서버에 대해 매우 낮은 대기 시간을 유지해야 합니다. 게임 서버는 Amazon EC2 인스턴스에서 실행됩니다. 회사에는 초당 수백만 건의 UDP 인터넷 트래픽 요청을 처리할 수 있는 솔루션이 필요합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "인터넷 트래픽에 필요한 프로토콜과 포트로 Application Load Balancer 를 구성합니다. EC2 인스턴스를 대상으로 지정합니다.",
      "B": "인터넷 트래픽을 위한 게이트웨이 로드 밸런서를 구성합니다. EC2 인스턴스를 대상으로 지정합니다.",
      "C": "인터넷 트래픽에 필요한 프로토콜과 포트로 Network Load Balancer를 구성합니다. EC2 인스턴스를 대상으로 지정합니다.",
      "D": "별도의 AWS 지역에 있는 EC2 인스턴스에서 동일한 게임 서버 세트를 시작합니다. 인터넷 트래픽을 두 EC2 인스턴스 세트로 라우팅합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ NLB (Network Load Balancer) — 4계층 로드 밸런서, UDP 지원, 극저지연(마이크로초 단위), 초당 수백만 패킷 처리\n▸ ALB (Application Load Balancer) — 7계층, HTTP/HTTPS 최적화, UDP 미지원\n▸ GLB (Gateway Load Balancer) — 3계층 가상 어플라이언스 배포 용\n\n【정답 포인트】\n▸ UDP 프로토콜 → NLB만 지원 (ALB는 TCP/HTTP 기반)\n▸ \"초당 수백만 건\" → NLB의 극저지연·초고성능 특화 기능\n▸ 비용 효율 → 멀티 리전 불필요, 단일 리전 스케일링으로 충분\n\n【오답 체크】\n(A) ALB는 HTTP/HTTPS 애플리케이션 계층 로드 밸런싱만 가능 — UDP 미지원\n(B) GLB는 타사 보안 어플라이언스(방화벽, IDS) 배포용 — 게임 서버 로드밸런싱 부적합\n(D) 멀티 리전 복제는 비용 증가, 지연시간 개선 효과 없음\n\n【시험 포인트】\n▸ UDP + 극저지연 조합 → NLB 선택\n▸ 로드 밸런서 3종 구분: ALB(L7), NLB(L4), GLB(L3 가상 어플라이언스)\n▸ 함정: \"가장 비용 효율적\" — 멀티 리전으로 오도 가능"
  },
  {
    "id": 686,
    "question": "회사에는 원치 않는 콘텐츠가 포함된 사진이 회사의 웹 애플리케이션에 업로드되는 것을 방지하는 솔루션이 필요합니다. 솔루션에는 기계 학습(ML) 모델 교육이 포함되어서는 안 됩니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon SageMaker Autopilot 을 사용하여 모델을 생성하고 배포합니다. 새 사진이 업로드될 때 웹 애플리케이션이 호출하는 실시간 엔드포인트를 만듭니다.",
      "B": "Amazon Rekognition 을 사용하여 원치 않는 콘텐츠를 감지하는 AWS Lambda 함수를 생성합니다. 새 사진이 업로드될 때 웹 애플리케이션이 호출하는 Lambda 함수 URL 을 생성합니다.",
      "C": "Amazon Comprehend 를 사용하여 원치 않는 콘텐츠를 감지하는 Amazon CloudFront 함수를 생성합니다. 기능을 웹 애플리케이션과 연결합니다.",
      "D": "Amazon Rekognition Video 를 사용하여 원치 않는 콘텐츠를 감지하는 AWS Lambda 함수를 생성합니다. 새 사진이 업로드될 때 웹 애플리케이션이 호출하는 Lambda 함수 URL을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Rekognition — 사전 학습된 CV 모델, 이미지/동영상 분석, 부적절한 콘텐츠 감지 내장\n▸ SageMaker Autopilot — 자동 ML 모델 구축 (모델 학습 필요 ❌ 요구사항 위배)\n▸ Comprehend — 텍스트 분석용, 이미지 처리 불가\n\n【정답 포인트】\n▸ \"ML 모델 교육이 포함되어서는 안 됨\" → 사전 학습된 서비스 필요\n▸ Rekognition = 사진 업로드 직후 즉시 실행, 모델 훈련 불필요\n▸ Lambda + Rekognition = 서버리스, 확장 자동화\n\n【오답 체크】\n(A) SageMaker Autopilot은 자동 모델 교육(AutoML) — \"교육 불가\" 조건 위반\n(C) Comprehend는 텍스트 NLP용, 이미지 분석 불가\n(D) Rekognition Video는 동영상/비디오 스트림용 — 정적 사진 업로드 비효율\n\n【시험 포인트】\n▸ \"ML 모델 교육 불필요\" → 사전 학습 서비스 선택 (Rekognition, Textract)\n▸ Rekognition (이미지) vs Rekognition Video (동영상) 구분\n▸ 함정: Comprehend는 텍스트만 처리, 이미지는 Rekognition"
  },
  {
    "id": 687,
    "question": "한 회사에 Amazon DynamoDB 테이블을 저장용으로 사용하는 애플리케이션이 있습니다. 솔루션 설계자는 테이블에 대한 많은 요청이 최신 데이터를 반환하지 않는다는 것을 발견했습니다. 회사 사용자는 데이터베이스 성능과 관련된 다른 문제를 보고하지 않았습니다. 지연 시간이 허용 가능한 범위 내에 있습니다. 솔루션 설계자는 어떤 디자인 변경을 권장해야 합니까?",
    "options": {
      "A": "테이블에 읽기 전용 복제본을 추가합니다.",
      "B": "글로벌 보조 인덱스(GSI)를 사용합니다.",
      "C": "테이블에 대해 강력하게 일관된 읽기를 요청합니다.",
      "D": "테이블에 대한 최종적 일관된 읽기를 요청합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 최종적 일관성 (Eventual Consistency) — DynamoDB 기본값, 약간의 지연 후 모든 복제본 동기화\n▸ 강력한 일관성 (Strong Consistency) — 읽기 직후 최신 쓰기 데이터 보장, 약간의 성능 비용\n▸ 읽기 전용 복제본 — RDS/Aurora 기능, DynamoDB에는 해당 없음\n\n【정답 포인트】\n▸ \"최신 데이터를 반환하지 않음\" → 일관성 문제, 성능 문제 아님\n▸ 성능(지연시간) 양호 + 데이터 신선도 필요 → 강력한 일관성 전환\n▸ 비용: 강력한 일관성은 최종 일관성의 2배 처리량 사용\n\n【오답 체크】\n(A) DynamoDB에 읽기 전용 복제본 개념 없음 (RDS 기능)\n(B) GSI는 대체 쿼리 패턴용, 일관성 문제 해결 불가\n(D) 최종 일관성으로 더 약화 → 문제 악화\n\n【시험 포인트】\n▸ DynamoDB 일관성 모드: ConsistentRead 플래그 활용\n▸ \"데이터 신선도 문제\" 핵심: 성능 vs 일관성 트레이드오프\n▸ 함정: 읽기 전용 복제본, GSI는 다른 목적의 선택지"
  },
  {
    "id": 688,
    "question": "한 회사가 Amazon S3에서 데이터 레이크를 호스팅하고 있습니다. 데이터 레이크는 다양한 데이터 소스에서 Apache Parquet 형식으로 데이터를 수집합니다. 회사는 수집된 데이터를 준비하기 위해 여러 변환 단계를 사용합니다. 이 단계에는 이상 항목 필터링, 데이터를 표준 날짜 및 시간 값으로 정규화, 분석을 위한 집계 생성이 포함됩니다. 회사는 변환된 데이터를 데이터 분석가가 액세스하는 S3 버킷에 저장해야 합니다. 회사에는 코드가 필요하지 않은 데이터 변환을 위해 사전 구축된 솔루션이 필요합니다. 솔루션은 데이터 계보 및 데이터 프로파일링을 제공해야 합니다. 회사는 회사 전체의 직원과 데이터 변환 단계를 공유해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "데이터를 변환하도록 AWS Glue Studio 시각적 캔버스를 구성합니다. AWS Glue 작업을 사용하여 변화 단계를 직원과 공유하세요.",
      "B": "데이터를 변환하도록 Amazon EMR Serverless 를 구성합니다. EMR Serveriess 작업을 사용하여 직원과 변환 단계를 공유하십시오.",
      "C": "데이터를 변환하도록 AWS Glue DataBrew 를 구성합니다. DataBrew 레시피를 사용하여 변환 단계를 직원과 공유하세요.",
      "D": "데이터용 Amazon Athena 테이블을 생성합니다. Athena SQL 쿼리를 작성하여 데이터를 변환합니다. Athena SQL 쿼리를 직원과 공유하세요."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Glue DataBrew — 노코드(No-Code) 데이터 준비, 시각적 레시피, 데이터 프로파일링 내장\n▸ Glue Studio — 시각적 ETL 캔버스, 코드 생성 필요할 수 있음\n▸ EMR — 분산 처리, 코드 기반(Python/Scala/Spark)\n\n【정답 포인트】\n▸ \"코드가 필요하지 않은\" → DataBrew (완전 노코드 인터페이스)\n▸ \"데이터 프로파일링\" → DataBrew 기본 기능\n▸ \"변환 단계 공유\" → DataBrew 레시피 = 복제 가능한 템플릿\n\n【오답 체크】\n(A) Glue Studio는 사전 구축(Pre-built) 특징 약함, 코드 생성 가능\n(B) EMR은 코드 기반 작업, 노코드 요구사항 미충족, 오버 엔지니어링\n(D) Athena는 SQL 쿼리 작성 필요 (코드 기반), 프로파일링 기능 없음\n\n【시험 포인트】\n▸ 노코드 데이터 준비 → DataBrew (레시피 공유 가능)\n▸ 이상 탐지 + 정규화 + 프로파일링 → DataBrew 특화 기능\n▸ 함정: Glue Studio와 DataBrew 혼동, EMR 과다 선택"
  },
  {
    "id": 689,
    "question": "한 회사가 AWS 에서 웹 애플리케이션을 설계하고 있습니다. 애플리케이션은 회사의 기존 데이터 센터와 회사의 VPC 간에 VPN 연결을 사용합니다. 이 회사는 DNS 서비스로 Amazon Route 53 을 사용합니다. 애플리케이션은 프라이빗 DNS 레코드를 사용하여 VPC에서 온프레미스 서비스와 통신해야 합니다. 가장 안전한 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 해석기 규칙을 만듭니다. 해석기 규칙을 VPC와 연결합니다.",
      "B": "Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 해석기 규칙을 만듭니다. 해석기 규칙을 VPC와 연결합니다.",
      "C": "Route 53 프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역을 VPC 와 연결합니다.",
      "D": "Route 53 퍼블릭 호스팅 영역을 생성합니다. 서비스 통신을 허용하려면 각 서비스에 대한 레코드를 만듭니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Resolver 아웃바운드 엔드포인트 — VPC → 온프레미스 DNS 쿼리 전달\n▸ Resolver 인바운드 엔드포인트 — 온프레미스 → VPC DNS 쿼리 수신\n▸ 프라이빗 호스팅 영역 — Route 53 내부 DNS, VPC 내 리소스용\n\n【정답 포인트】\n▸ \"VPC에서 온프레미스 서비스와 통신\" → VPC가 쿼리 발신\n▸ 아웃바운드 = VPC에서 나가는 쿼리 라우팅\n▸ 해석기 규칙 = 특정 도메인을 온프레미스 DNS로 리다이렉트\n\n【오답 체크】\n(B) 인바운드 엔드포인트는 반대 방향 (온프레미스 → VPC) 해석\n(C) 프라이빗 호스팅 영역은 Route 53 내부 전용, 온프레미스 통신 불가\n(D) 퍼블릭 호스팅 영역은 인터넷 공개 (보안 위반, VPN 취지 무화)\n\n【시험 포인트】\n▸ \"VPC에서\" 발신 → 아웃바운드 엔드포인트\n▸ Resolver 트래픽 흐름: VPC (아웃바운드) → 온프레미스 DNS\n▸ 함정: 인바운드/아웃바운드 방향 혼동, 프라이빗 호스팅 영역 과선택"
  },
  {
    "id": 690,
    "question": "한 도시에서는 ALB(Application Load Balancer) 뒤에 Amazon EC2 인스턴스에서 실행되는 웹 애플리케이션을 배포했습니다. 애플리케이션 사용자는 산발적인 성능을 보고했는데, 이는 무작위 IP 주소에서 발생하는 DDoS 공격과 관련된 것으로 보입니다. 도시에는 구성 변경을 최소화하고 DDoS 소스에 대한 감사 추적을 제공하는 솔루션이 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "ALB에서 AWS WAF 웹 ACL을 활성화하고 알 수 없는 소스의 트래픽을 차단하는 규칙을 구성합니다.",
      "B": "Amazon Inspector 를 구독하세요. AWS DDoS 대응 팀(DRT)을 참여시켜 완화 제어 기능을 서비스에 통합하십시오.",
      "C": "AWS Shield Advanced 를 구독하세요. AWS DDoS 대응 팀(DRT)을 참여시켜 완화 제어 기능을 서비스에 통합하십시오.",
      "D": "애플리케이션에 대한 Amazon CloudFront 배포를 생성하고 ALB 를 오리진으로 설정합니다. 배포에서 AWS WAF 웹 ACL 을 활성화하고 알 수 없는 소스의 트래픽을 차단하는 규칙을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Shield Advanced — DDoS 공격 감지/완화, DRT(전문팀) 지원, 상세 감사 로그\n▸ WAF — 애플리케이션 계층 공격(SQL 인젝션, XSS) 방어, DDoS 완화 불충분\n▸ Inspector — 취약점 스캔, DDoS 방어 역할 아님\n\n【정답 포인트】\n▸ \"DDoS 공격\" 명시 → Shield Advanced (DDoS 전문)\n▸ \"구성 변경 최소화\" → Shield 자동 활성화 (CloudFront 추가 불필요)\n▸ \"감사 추적\" → Shield Advanced 로깅 + DRT 분석\n\n【오답 체크】\n(A) WAF는 애플리케이션 수준 공격(L7) 방어, 용량 기반 DDoS(L3/L4) 완화 불가\n(B) Inspector는 인스턴스 취약점 평가용, DDoS 방어 관계 없음\n(D) CloudFront는 성능 개선, DDoS 보호 기능 약함. Shield Advanced가 더 적절\n\n【시험 포인트】\n▸ DDoS 조합: Shield Standard (무료, 기본) + Shield Advanced (고급, DRT)\n▸ \"구성 변경 최소화\" = 기존 ALB 유지, Shield 추가만\n▸ 함정: WAF는 DDoS가 아닌 다른 공격(SQL인젝션), CloudFront 과다"
  },
  {
    "id": 691,
    "question": "한 회사가 AWS Fargate 클러스터를 사용하여 Amazon Elastic Kubernetes Service(Amazon EKS)에 새 애플리케이션을 배포하고 있습니다. 애플리케이션에는 데이터 지속성을 위한 스토리지 솔루션이 필요합니다. 솔루션은 가용성이 높고 내결함성이 있어야 합니다. 또한 솔루션은 여러 애플리케이션 컨테이너 간에 공유되어야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EKS 작업자 노드가 배치된 동일한 가용 영역에 Amazon Elastic Block Store(Amazon EBS) 볼륨을 생성합니다. EKS 클러스터의 StorageClass 객체에 볼륨을 등록합니다. EBS 다중 연결을 사용하여 컨테이너 간에 데이터를 공유합니다.",
      "B": "Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성합니다. EKS 클러스터의 StorageClass 객체에 파일 시스템을 등록합니다. 모든 컨테이너에 동일한 파일 시스템을 사용합니다.",
      "C": "Amazon Elastic Block Store(Amazon EBS) 볼륨을 생성합니다. EKS 클러스터의 StorageClass 객체에 볼륨을 등록합니다. 모든 용기에 동일한 용량을 사용하십시오.",
      "D": "EKS 작업자 노드가 배치된 동일한 가용 영역에 Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성합니다. EKS 클러스터의 StorageClass 객체에 파일 시스템을 등록합니다. 파일 시스템 간에 데이터를 동기화하는 AWS Lambda 함수를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ EFS (Elastic File System) — NFS 기반, 다중 AZ 자동 지원, 여러 인스턴스 동시 마운트\n▸ EBS (Elastic Block Store) — 블록 스토리지, 단일 AZ, 일반적으로 한 인스턴스만 연결\n▸ EBS 다중 연결 — 제한적 지원, 추가 배포 필요\n\n【정답 포인트】\n▸ \"여러 컨테이너 간 공유\" + \"높은 가용성\" → EFS (NFS)\n▸ EFS = 자동 다중 AZ 복제, 별도 설정 불필요\n▸ 운영 오버헤드 최소 = 관리형 서비스(EFS), 수동 동기화 불필요\n\n【오답 체크】\n(A) EBS 다중 연결은 제한적(io1/io2만), AZ 내 공유만, 높은 가용성 미충족\n(C) EBS 단일 볼륨은 한 인스턴스만 마운트 가능 (다중 컨테이너 불가)\n(D) EFS는 이미 다중 AZ, Lambda 동기화는 불필요 복잡성 추가\n\n【시험 포인트】\n▸ \"여러 컨테이너 공유\" = 네트워크 파일 시스템 필요 (EFS)\n▸ 공유 스토리지 선택: EFS (높은 가용성) vs EBS (단일 AZ)\n▸ 함정: EBS 다중 연결, Lambda 동기화는 과복잡"
  },
  {
    "id": 692,
    "question": "회사는 3 계층 애플리케이션을 온프레미스에서 AWS 로 마이그레이션하려고 합니다. 웹 계층과 애플리케이션 계층은 타사 VM(가상 머신)에서 실행됩니다. 데이터베이스 계층은 MySQL에서 실행됩니다. 회사는 아키텍처를 최소한으로 변경하여 애플리케이션을 마이그레이션해야 합니다. 또한 회사에는 데이터를 특정 시점으로 복원할 수 있는 데이터베이스 솔루션이 필요합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "웹 계층과 애플리케이션 계층을 프라이빗 서브넷의 Amazon EC2 인스턴스로 마이그레이션합니다. 데이터베이스 계층을 프라이빗 서브넷의 MySQL 용 Amazon RDS 로 마이그레이션합니다.",
      "B": "웹 계층을 퍼블릭 서브넷의 Amazon EC2 인스턴스로 마이그레이션합니다. 애플리케이션 계층을 프라이빗 서브넷의 EC2 인스턴스로 마이그레이션합니다. 데이터베이스 계층을 프라이빗 서브넷의 Amazon Aurora MySQL로 마이그레이션합니다.",
      "C": "웹 계층을 퍼블릭 서브넷의 Amazon EC2 인스턴스로 마이그레이션합니다. 애플리케이션 계층을 프라이빗 서브넷의 EC2 인스턴스로 마이그레이션합니다. 데이터베이스 계층을 프라이빗 서브넷의 MySQL용 Amazon RDS로 마이그레이션합니다.",
      "D": "웹 계층과 애플리케이션 계층을 퍼블릭 서브넷의 Amazon EC2 인스턴스로 마이그레이션합니다. 데이터베이스 계층을 퍼블릭 서브넷의 Amazon Aurora MySQL 로 마이그레이션합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 3계층 아키텍처 — 웹(인터넷 노출) → 앱(프라이빗) → DB(최고 보안)\n▸ RDS MySQL — MySQL 호환, PITR(특정 시점 복원) 지원, 관리형\n▸ Aurora — MySQL 호환, PITR, 더 높은 성능, MySQL 아키텍처 변경 불필요\n\n【정답 포인트】\n▸ 웹 계층 = 인터넷 접근 필요 → 퍼블릭 서브넷\n▸ 앱 계층 = 내부 통신만 → 프라이빗 서브넷\n▸ \"아키텍처 최소 변경\" + \"PITR\" → RDS MySQL (기존 MySQL 호환)\n▸ 최소 운영 오버헤드 = 관리형 데이터베이스\n\n【오답 체크】\n(A) 웹 계층이 프라이빗 → 인터넷 사용자 접근 불가\n(B) Aurora는 비용 증가, \"아키텍처 최소 변경\" 의도보다 고성능 추가\n(D) 애플리케이션/DB가 퍼블릭 → 보안 위험, 3계층 원칙 위반\n\n【시험 포인트】\n▸ 3계층 배치: 퍼블릭(웹) → 프라이빗(앱/DB)\n▸ \"최소 아키텍처 변경\" = MySQL → RDS MySQL (호환)\n▸ \"아키텍처 최소\" vs \"성능 최대\" 트레이드오프: Aurora는 오버스펙"
  },
  {
    "id": 693,
    "question": "회사에 새로운 모바일 앱이 있습니다. 세계 어디에서나 사용자는 자신이 선택한 주제에 대한 지역 뉴스를 볼 수 있습니다. 사용자는 앱 내부에서 사진과 비디오를 게시할 수도 있습니다. 사용자는 콘텐츠가 게시된 후 처음 몇 분 안에 콘텐츠에 액세스하는 경우가 많습니다. 새로운 콘텐츠가 이전 콘텐츠를 빠르게 대체한 다음 이전 콘텐츠는 사라집니다. 뉴스의 지역적 특성은 사용자가 뉴스가 업로드되는 AWS 지역 내에서 콘텐츠의 90%를 소비한다는 것을 의미합니다. 콘텐츠 업로드에 가장 짧은 지연 시간을 제공하여 사용자 경험을 최적화하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 에 콘텐츠를 업로드하고 저장합니다. 업로드에는 Amazon CloudFront 를 사용하십시오.",
      "B": "Amazon S3에 콘텐츠를 업로드하고 저장합니다. 업로드에는 S3 Transfer Acceleration을 사용하십시오.",
      "C": "사용자에게 가장 가까운 지역의 Amazon EC2 인스턴스에 콘텐츠를 업로드합니다. 데이터를 Amazon S3에 복사합니다.",
      "D": "사용자에게 가장 가까운 지역의 Amazon S3 에 콘텐츠를 업로드하고 저장합니다. Amazon CloudFront의 여러 배포판을 사용하십시오."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Transfer Acceleration — S3 엣지 로케이션으로 업로드, 글로벌 최적 경로\n▸ CloudFront — 콘텐츠 다운로드(배포) 최적화, 업로드는 비효율\n▸ 지역 기반 저장 — 멀티 리전 복잡성, 동기화 비용\n\n【정답 포인트】\n▸ \"콘텐츠 업로드에 가장 짧은 지연\" → 업로드 최적화 필요\n▸ \"초기 접근 높음\" (처음 몇 분) → 업로드 속도 우선\n▸ Transfer Acceleration = 엣지 → S3 직접 경로, 최고 속도\n▸ \"90% 지역 내 소비\" 자동 충족 (S3 단일 리전, 지역 내 빠른 접근)\n\n【오답 체크】\n(A) CloudFront는 다운로드 가속화, 업로드는 느림\n(C) EC2 중개는 불필요 복잡성, 여러 리전 동기화 필요\n(D) 멀티 리전 저장은 복잡성/비용 증가, 단일 리전으로 충분\n\n【시험 포인트】\n▸ 업로드 가속화 = Transfer Acceleration (엣지 최적화)\n▸ 다운로드 가속화 = CloudFront (글로벌 배포)\n▸ 함정: CloudFront는 읽기 용, 쓰기는 Transfer Acceleration"
  },
  {
    "id": 694,
    "question": "한 회사의 온프레미스 데이터 센터에 소량의 데이터를 Amazon S3 에 정기적으로 백업해야 하는 NFS 서버가 있습니다. 이러한 요구 사항을 충족하고 가장 비용 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "온프레미스 서버의 데이터를 Amazon S3에 복사하도록 AWS Glue를 설정합니다.",
      "B": "온프레미스 서버에 AWS DataSync 에이전트를 설정하고 데이터를 Amazon S3 에 동기화합니다.",
      "C": "AWS Transfer for SFTP 를 사용하여 SFTP 동기화를 설정하여 온프레미스에서 Amazon S3로 데이터를 동기화합니다.",
      "D": "온프레미스 데이터 센터와 VPC 간에 AWS Direct Connect 연결을 설정하고 데이터를 Amazon S3에 복사합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DataSync — 온프레미스 ↔ AWS 데이터 동기화, 네트워크 최적화, 스케줄 지원\n▸ Glue — ETL 작업, 데이터 변환 목적 (백업 전문 아님)\n▸ Transfer for SFTP — SFTP 업로드 터널, 대규모 전송 비효율\n▸ Direct Connect — 높은 비용, 소량 데이터 백업에 과다\n\n【정답 포인트】\n▸ \"정기적으로 백업\" + \"소량\" → DataSync (스케줄 가능, 효율적)\n▸ DataSync 에이전트 = NFS ↔ S3 자동 동기화\n▸ 비용 효율 = DataSync는 소량 데이터 요금 합리적\n▸ NFS 소스 호환성 자체 지원\n\n【오답 체크】\n(A) Glue는 ETL(변환), 단순 백업에 과다 설정\n(C) Transfer for SFTP는 수동 전송, 스케줄 동기화 지원 약함\n(D) Direct Connect는 고정 요금 높음, 소량 데이터 비용 비효율\n\n【시험 포인트】\n▸ 온프레미스 정기 백업 = DataSync (자동 동기화)\n▸ 비용 효율: 소량(GB~TB) → DataSync, 대용량(PB) → Direct Connect\n▸ 함정: Glue 과선택, SFTP 수동 신경"
  },
  {
    "id": 695,
    "question": "한 회사의 전자상거래 웹사이트에 예측할 수 없는 트래픽이 있으며 AWS Lambda 기능을 사용하여 PostgreSQL용 프라이빗 Amazon RDS DB 인스턴스에 직접 액세스합니다. 회사는 예측 가능한 데이터베이스 성능을 유지하고 Lambda 호출이 너무 많은 연결로 인해 데이터베이스에 과부하가 걸리지 않도록 하려고 합니다. 솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "RDS 사용자 지정 끝점에서 클라이언트 드라이버를 가리킵니다. VPC 내부에 Lambda 함수를 배포합니다.",
      "B": "RDS 프록시 엔드포인트에서 클라이언트 드라이버를 가리킵니다. VPC 내부에 Lambda 함수를 배포합니다.",
      "C": "RDS 사용자 지정 엔드포인트에서 클라이언트 드라이버를 가리킵니다. VPC 외부에 Lambda 함수를 배포합니다.",
      "D": "RDS 프록시 엔드포인트에서 클라이언트 드라이버를 가리킵니다. VPC 외부에 Lambda 함수를 배포합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ RDS Proxy — 연결 풀링, 과다 연결 방지, 성능 예측 가능화\n▸ RDS 사용자 지정 엔드포인트 — 특정 인스턴스 부분집합 쿼리, 연결 풀링 아님\n▸ Lambda VPC 배포 — RDS 프라이빗 접근 필수 (네트워크 격리)\n\n【정답 포인트】\n▸ \"예측할 수 없는 트래픽\" + \"과부하 방지\" → RDS Proxy (연결 풀링)\n▸ \"프라이빗 RDS\" → Lambda VPC 내 배포 (프라이빗 네트워크 접근)\n▸ RDS Proxy = 매우 많은 짧은 연결 → 제한된 DB 연결 집약화\n\n【오답 체크】\n(A) 사용자 지정 끝점은 연결 풀링 기능 없음, 급증 트래픽 미방지\n(C) Lambda VPC 외부 배포는 RDS 프라이빗 접근 불가\n(D) Proxy는 맞으나 Lambda VPC 외부 = 프라이빗 RDS 접근 불가\n\n【시험 포인트】\n▸ 급변 트래픽 + DB 성능 → RDS Proxy (연결 관리)\n▸ 프라이빗 리소스 → Lambda VPC 내부 배포 필수\n▸ 함정: 사용자 지정 끝점과 Proxy 혼동, Lambda 배치 위치"
  },
  {
    "id": 696,
    "question": "회사의 애플리케이션은 여러 가용 영역에 있는 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 타사 애플리케이션에서 실시간 데이터를 수집해야 합니다. 회사에는 수집된 원시 데이터를 Amazon S3 버킷에 배치하는 데이터 수집 솔루션이 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "데이터 수집을 위해 Amazon Kinesis 데이터 스트림을 생성합니다. Kinesis 데이터 스트림을 사용하기 위해 Amazon Kinesis Data Firehose 전송 스트림을 생성합니다. S3 버킷을 전송 스트림의 대상으로 지정합니다.",
      "B": "AWS Database Migration Service(AWS DMS)에서 데이터베이스 마이그레이션 작업을 생성합니다. EC2 인스턴스의 복제 인스턴스를 소스 엔드포인트로 지정합니다. S3 버킷을 대상 엔드포인트로 지정합니다. 기존 데이터를 마이그레이션하고 지속적인 변경 사항을 복제하도록 마이그레이션 유형을 설정합니다.",
      "C": "EC2 인스턴스에서 AWS DataSync 에이전트를 생성하고 구성합니다. EC2 인스턴스에서 S3 버킷으로 데이터를 전송하도록 DataSync 작업을 구성합니다.",
      "D": "데이터 수집을 위해 애플리케이션에 대한 AWS Direct Connect 연결을 생성합니다. Amazon Kinesis Data Firehose 전송 스트림을 생성하여 애플리케이션에서 직접 PUT 작업을 사용합니다. S3 버킷을 전송 스트림의 대상으로 지정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Kinesis Data Stream → Firehose — 스트림 수집 → S3 자동 배치 저장\n▸ DMS — 데이터베이스 마이그레이션 (지속적 리플리케이션), 일반 \"실시간\" 수집 아님\n▸ DataSync — 파일 시스템 동기화, 실시간 이벤트 스트림 아님\n\n【정답 포인트】\n▸ \"실시간 데이터 수집\" + \"S3 배치\" → Kinesis 스트림 (정보 입수)\n▸ Firehose = 자동 배치 및 S3 저장 (관리형)\n▸ 타사 애플리케이션 → Kinesis API (PUT 가능)\n▸ 최소 관리 오버헤드\n\n【오답 체크】\n(B) DMS는 데이터베이스 마이그레이션(스키마 포함), 일반 데이터 수집용 아님\n(C) DataSync는 파일/디렉토리 동기화, 실시간 이벤트 스트림 미지원\n(D) Direct Connect는 고정 네트워크 연결, \"실시간\" 수집을 위한 과다 설정\n\n【시험 포인트】\n▸ 실시간 스트림 수집 → Kinesis (스트림/Firehose)\n▸ 스트림 → 배치 저장 → Kinesis Firehose (자동)\n▸ 함정: DMS는 DB 마이그레이션, DataSync는 파일 동기화"
  },
  {
    "id": 697,
    "question": "회사는 AWS 에 웹 애플리케이션을 배포할 것입니다. 이 회사는 확장 요구 사항을 지원하기 위해 기본 DB 인스턴스와 5 개의 읽기 전용 복제본을 사용하여 MySQL 용 Amazon RDS 에서 백엔드 데이터베이스를 호스팅합니다. 읽기 전용 복제본은 기본 DB 인스턴스 뒤에서 1 초 이상 기록해서는 안 됩니다. 데이터베이스는 정기적으로 예약된 저장 프로시저를 실행합니다. 웹 사이트의 트래픽이 증가함에 따라 리드가 가장 많은 기간 동안 복제본에 추가 지연이 발생합니다. 솔루션 설계자는 복제 지연을 최대한 줄여야 합니다. 솔루션 설계자는 애플리케이션 코드 변경을 최소화하고 지속적인 오버헤드를 최소화해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까? 데이터베이스를 Amazon Aurora MySQL로 마이그레이션합니다. 읽기 전용 복제본을 Aurora 복제본으로 교체하고 Aurora Auto Scaling 을 구성합니다. 저장 프로시저를 Aurora MySQL 기본 함수로 바꿉니다. 데이터베이스 앞에 Redis 클러스터용 Amazon ElasticCache를 배포합니다. 애플리케이션이 데이터베이스를 쿼리하기 전에 캐시를 확인하도록 애플리케이션을 수정합니다. 저장 프로시저를 AWS Lambda 기능으로 바꿉니다.",
    "options": {
      "A": "Amazon EC2 인스턴스에서 실행되는 MYSQL 데이터베이스로 데이터베이스를 마이그레이션합니다. 모든 복제본 노드에 최적화된 대규모 컴퓨팅을 선택하세요. EC2 인스턴스에서 저장 프로시저를 유지 관리합니다.",
      "B": "데이터베이스 형식으로 Redis 용 Amazon ElastiCache 클러스터를 배포합니다. 애플리케이션이 데이터베이스를 쿼리하기 전에 캐시를 확인하도록 애플리케이션을 수정합니다. 저장 프로시저를 AWS Lambda 함수로 바꿉니다.",
      "C": "데이터베이스를 Amazon EC2 인스턴스에서 실행되는 MySQL 데이터베이스로 마이그레이션합니다. 모든 복제본 노드에 대해 컴퓨팅 최적화된 대규모 EC2 인스턴스를 선택하고, EC2 인스턴스에서 저장 프로시저를 유지합니다.",
      "D": "데이터베이스를 Amazon DynamoDB 로 마이그레이션하고, 필요한 처리량을 지원하기 위해 읽기 용량 단위(RCU) 수를 프로비저닝하고, 온디맨드 용량 확장을 구성합니다. 저장 프로시저를 DynamoDB 스트림으로 바꿉니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RDS 복제 지연 — 주로 복제본 처리 병목, 쓰기 부하 누적\n▸ EC2 self-managed MySQL — 하드웨어 확장 자유도, 복제 제어 가능\n▸ Aurora — 관리형, 지연 최소화, 코드 변경 최소\n\n【정답 포인트】\n▸ \"복제 지연 최소화\" + \"코드 변경 최소\" → EC2 MySQL (대규모 복제본)\n▸ \"저장 프로시저 유지\" → 기존 MySQL 호환성 필요\n▸ 컴퓨팅 최적화 인스턴스 = 고처리량 복제 성능\n▸ 코드 변경 최소 (캐싱/Lambda 추가 없음)\n\n【오답 체크】\n(B) ElastiCache는 읽기 캐싱 (복제 지연 근본 해결 아님), 코드 변경 필요\n(C) C는 정답과 동일하나 \"대규모\"라는 구체성 부족\n(D) DynamoDB는 저장 프로시저 미지원, 마이그레이션 비용 높음\n\n【시험 포인트】\n▸ 복제 지연 → 하드웨어 확장 (EC2 대규모) 또는 아키텍처 개선\n▸ \"코드 변경 최소\" = 기존 MySQL 호환성 필요\n▸ 함정: Aurora는 더 나으나 선택지에 없음, ElastiCache는 부분 해결"
  },
  {
    "id": 698,
    "question": "한 회사가 AWS 에서 실시간 데이터 수집 솔루션을 실행하고 있습니다. 이 솔루션은 최신 버전의 Amazon Managed Streaming for Apache Kafka(Amazon MSK)로 구성됩니다. 이 솔루션은 3개의 가용 영역에 걸쳐 프라이빗 서브넷의 VPC에 배포됩니다. 솔루션 설계자는 인터넷을 통해 공개적으로 사용할 수 있도록 데이터 수집 솔루션을 재설계해야 합니다. 전송 중인 데이터도 암호화되어야 합니다. 가장 효율적인 운영 효율성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기존 VPC 에서 퍼블릭 서브넷을 구성합니다. 퍼블릭 서브넷에 MSK 클러스터를 배포합니다. 상호 TLS 인증을 활성화하려면 MSK 클러스터 보안 설정을 업데이트하세요.",
      "B": "퍼블릭 서브넷이 있는 새 VPC 를 생성합니다. 퍼블릭 서브넷에 MSK 클러스터를 배포합니다. 상호 TLS 인증을 활성화하려면 MSK 클러스터 보안 설정을 업데이트하세요.",
      "C": "프라이빗 서브넷을 사용하는 ALB(Application Load Balancer)를 배포합니다. HTTPS 프로토콜에 대한 VPC CIDR 블록의 인바운드 트래픽을 허용하도록 ALB 보안 그룹 인바운드 규칙을 구성합니다.",
      "D": "프라이빗 서브넷을 사용하는 NLB(Network Load Balancer)를 배포합니다. 인터넷을 통한 HTTPS 통신을 위해 NLB 수신기를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ MSK (Amazon Managed Streaming for Apache Kafka) — 완전 관리형 Kafka, 인터넷 접근 설정 가능\n▸ 상호 TLS (mTLS) — 양방향 암호화 인증 (Kafka 클라이언트 ↔ 브로커)\n▸ 퍼블릭 액세스 — MSK 클러스터를 인터넷 노출 (IAM 정책 + mTLS)\n\n【정답 포인트】\n▸ \"인터넷을 통해 공개적\" → 퍼블릭 서브넷 배포\n▸ \"전송 중 암호화\" → mTLS 활성화\n▸ \"운영 효율성\" = 기존 VPC 재사용 (새 VPC 불필요)\n▸ MSK는 자동 Kafka 관리, 로드 밸런서 추가 불필요\n\n【오답 체크】\n(B) 새 VPC 생성은 운영 복잡성 증가, 기존 리소스 통합 필요\n(C) ALB는 HTTP 애플리케이션 계층, Kafka 바이너리 프로토콜 미지원\n(D) NLB는 Kafka를 감싸기 위한 불필요 계층, MSK 자체 인터넷 설정 가능\n\n【시험 포인트】\n▸ MSK 퍼블릭 액세스 = 퍼블릭 서브넷 + mTLS (로드 밸런서 불필요)\n▸ \"운영 효율성\" = 최소 인프라 추가\n▸ 함정: ALB/NLB로 감싸는 것은 과복잡, MSK 자체 기능 활용"
  },
  {
    "id": 699,
    "question": "회사가 AWS Business Support 플랜에 가입되어 있습니다. 규정 준수 규칙에 따라 회사는 배포를 진행하기 전에 AWS 인프라 상태를 확인해야 합니다. 회사에는 새로운 배포를 시작할 때 인프라 상태를 확인하기 위한 프로그래밍 방식의 자동화된 방법이 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "각 배포를 시작할 때 AWS Trusted Advisor API를 사용하십시오. API가 문제를 반환하는 경우 모든 새 배포를 일시 중지합니다.",
      "B": "각 배포를 시작할 때 AWS 상태 API를 사용하십시오. API가 문제를 반환하는 경우 모든 새 배포를 일시 중지합니다.",
      "C": "각 배포 시작 시 AWS Support API 를 쿼리합니다. API 가 미해결 문제를 반환하는 경우 모든 새 배포를 일시 중지합니다.",
      "D": "배포에 앞서 각 워크로드에 API 호출을 보냅니다. API 호출이 실패하면 배포를 일시 중지합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Health API / AWS 상태 API — 서비스 상태 확인 (리전별, 전역)\n▸ Trusted Advisor API — 계정 리소스 최적화 조언 (비용, 성능, 보안)\n▸ Support API — 지원 요청 관리 (Business 이상 필요)\n\n【정답 포인트】\n▸ \"AWS 인프라 상태 확인\" → AWS 상태 API (서비스 가용성)\n▸ \"배포 전 자동 체크\" → 상태 API 폴링 후 배포 실행/중지\n▸ Business 플랜 요구사항 충족\n\n【오답 체크】\n(A) Trusted Advisor는 계정 기반 권장사항 (보안 그룹, 비용), AWS 인프라 상태 아님\n(C) Support API는 케이스 관리용, 실시간 인프라 상태 아님\n(D) 워크로드 헬스 체크는 애플리케이션 수준, AWS 인프라 상태 구분\n\n【시험 포인트】\n▸ \"AWS 인프라 상태\" → AWS Health / Status API\n▸ \"배포 자동화\" + \"규정 준수\" → API 자동 폴링\n▸ 함정: Trusted Advisor는 권장사항(구성), Health는 상태(가용성)"
  },
  {
    "id": 700,
    "question": "회사는 회사의 Amazon RDS 데이터베이스에 연결되는 애플리케이션을 AWS 에서 실행합니다. 애플리케이션은 주말과 연중 피크 시간대에 확장됩니다. 회사는 데이터베이스에 연결하는 애플리케이션에 대해 데이터베이스를 보다 효과적으로 확장하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터베이스에 대한 대상 그룹 구성과 함께 연결 풀링과 함께 Amazon DynamoDB 를 사용하십시오. DynamoDB 엔드포인트를 사용하도록 애플리케이션을 변경합니다.",
      "B": "데이터베이스의 대상 그룹과 함께 Amazon RDS Proxy 를 사용하십시오. RDS Proxy 엔드포인트를 사용하도록 애플리케이션을 변경합니다.",
      "C": "Amazon EC2에서 실행되는 사용자 지정 프록시를 데이터베이스의 중개자로 사용합니다. 사용자 정의 프록시 엔드포인트를 사용하도록 애플리케이션을 변경하십시오.",
      "D": "AWS Lambda 함수를 사용하여 데이터베이스에 대한 대상 그룹 구성과 함께 연결 풀링을 제공합니다. Lambda 함수를 사용하도록 애플리케이션을 변경합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ RDS Proxy — 연결 풀링 관리, 과다 연결 방지, 자동 확장 (관리형)\n▸ DynamoDB — NoSQL, 스키마 변경 (RDS 호환성 깨짐)\n▸ Custom Proxy (EC2) — 관리 오버헤드 높음 (Lambda 동기화, 모니터링)\n\n【정답 포인트】\n▸ \"피크 시간대 확장\" → 연결 수 급증\n▸ RDS Proxy = 연결 풀링 (많은 짧은 연결 → 제한된 DB 연결 사용)\n▸ \"최소 운영 오버헤드\" = 관리형 서비스 (EC2 자관리 불필요)\n▸ 애플리케이션 코드 최소 변경 (엔드포인트 변경만)\n\n【오답 체크】\n(A) DynamoDB는 스키마 이동 필요, 기존 SQL 쿼리 재작성 (코드 변경 높음)\n(C) EC2 Custom Proxy는 패칭, 모니터링, 고가용성 구성 필요 (오버헤드 높음)\n(D) Lambda 연결 풀링은 콜드 스타트, 상태 관리 복잡 (비효율)\n\n【시험 포인트】\n▸ 연결 수 증가 문제 → RDS Proxy (연결 풀링 관리)\n▸ \"최소 운영 오버헤드\" = 관리형 선택 (RDS Proxy vs Custom)\n▸ 함정: DynamoDB는 다른 데이터베이스 (마이그레이션 필요), Lambda는 상태 관리 어려움"
  },
  {
    "id": 701,
    "question": "회사는 Amazon Elastic Block Store(Amazon EBS)가 지원하는 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. EC2 인스턴스는 최신 Amazon Linux 릴리스를 실행합니다. 회사 직원이 25GB 이상의 파일을 저장하고 검색할 때 애플리케이션에 가용성 문제가 발생합니다. 회사에는 EC2 인스턴스 간에 파일을 전송할 필요가 없는 솔루션이 필요합니다. 파일은 여러 EC2 인스턴스와 여러 가용 영역에서 사용할 수 있어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "모든 파일을 Amazon S3 버킷으로 마이그레이션합니다. 직원에게 S3 버킷의 파일에 액세스하도록 지시합니다.",
      "B": "기존 EBS 볼륨의 스냅샷을 찍습니다. EC2 인스턴스 전반에 걸쳐 스냅샷을 EBS 볼륨으로 탑재합니다. 직원에게 EC2 인스턴스의 파일에 액세스하도록 지시합니다.",
      "C": "모든 EC2 인스턴스에 Amazon Elastic File System(Amazon EFS) 파일 시스템을 탑재합니다. 직원에게 EC2 인스턴스의 파일에 액세스하도록 지시합니다.",
      "D": "EC2 인스턴스에서 Amazon 머신 이미지(AMI)를 생성합니다. 인스턴스 스토어 볼륨을 사용하는 AMI 에서 새 EC2 인스턴스를 구성합니다. 직원에게 EC2 인스턴스의 파일에 액세스하도록 지시합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ EFS (Elastic File System) — NFS 기반, 다중 AZ 지원, 여러 EC2 마운트 가능\n▸ EBS 스냅샷 — 블록 스토리지 백업, 복제본은 단일 AZ (다중 AZ 미지원)\n▸ 인스턴스 스토어 — 임시 저장소, 인스턴스 중단 시 데이터 손실\n\n【정답 포인트】\n▸ \"여러 EC2 인스턴스에서 접근\" + \"여러 AZ\" → EFS (NFS, 자동 다중 AZ)\n▸ \"파일 전송 불필요\" → 공유 파일 시스템 (네트워크 마운트)\n▸ 가용성 문제 해결 = 파일 공유 + 중복\n\n【오답 체크】\n(A) S3은 저장소 (EBS 대체), 고성능 파일 시스템 아님 (메타데이터 수정 필요)\n(B) EBS 복제본은 단일 AZ, \"여러 AZ\" 미지원, 수동 동기화 필요\n(D) 인스턴스 스토어는 임시, 인스턴스 재부팅 시 데이터 손실\n\n【시험 포인트】\n▸ \"여러 EC2 + 여러 AZ\" → EFS (자동 다중 AZ NFS)\n▸ \"파일 공유\" vs \"블록 스토리지\": EFS (NFS) vs EBS (블록)\n▸ 함정: EBS 복제는 단일 AZ, 인스턴스 스토어는 임시 저장소"
  },
  {
    "id": 702,
    "question": "솔루션 설계자가 다중 서브넷 VPC 아키텍처를 개발 중입니다. 솔루션은 2개의 가용 영역에 있는 6 개의 서브넷으로 구성됩니다. 서브넷은 공용, 사설 및 데이터베이스 전용으로 정의됩니다. 프라이빗 서브넷에서 실행되는 Amazon EC2 인스턴스만 데이터베이스에 액세스할 수 있어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "퍼블릭 서브넷의 CIDR 블록에 대한 경로를 제외하는 now route table 을 생성합니다. 라우팅 테이블을 데이터베이스 서브넷에 연결합니다.",
      "B": "퍼블릭 서브넷의 인스턴스가 사용하는 보안 그룹으로부터의 수신을 거부하는 보안 그룹을 생성합니다. 보안 그룹을 Amazon RDS DB 인스턴스에 연결합니다.",
      "C": "프라이빗 서브넷의 인스턴스가 사용하는 보안 그룹으로부터의 수신을 허용하는 보안 그룹을 생성합니다. 보안 그룹을 Amazon RDS DB 인스턴스에 연결합니다.",
      "D": "퍼블릭 서브넷과 프라이빗 서브넷 사이에 새로운 피어링 연결을 생성합니다. 프라이빗 서브넷과 데이터베이스 서브넷 간에 다른 피어링 연결을 만듭니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 보안 그룹 (Inbound) — L4 방화벽, 출발지 CIDR/SG 기반 트래픽 허용\n▸ 라우팅 테이블 — L3 경로 제어, 서브넷 간 패킷 포워딩\n▸ VPC Peering — VPC 간 연결 (같은 VPC 내는 불필요)\n\n【정답 포인트】\n▸ \"프라이빗 서브넷만 DB 접근\" → 소스 제어 필요\n▸ 보안 그룹 = 프라이빗 SG로부터 수신 허용 (DB RDS 인스턴스에 적용)\n▸ 라우팅 테이블은 패킷 경로 결정, 접근 제어 아님\n▸ 프라이빗 → 프라이빗 동일 VPC = 자동 연결성 (Peering 불필요)\n\n【오답 체크】\n(A) 라우팅 테이블은 \"경로\", \"접근 제어\" 아님 (패킷 도착 후 처리)\n(B) 퍼블릭 SG 거부 = 역논리, 프라이빗만 허용이 명확\n(D) VPC Peering은 동일 VPC 내 불필요, 서브넷은 자동 통신\n\n【시험 포인트】\n▸ 접근 제어 = 보안 그룹 (방화벽), 라우팅 ≠ 보안\n▸ \"프라이빗만 허용\" → 프라이빗 SG 지정 (긍정적 규칙)\n▸ 함정: 라우팅 테이블로 접근 제어 시도, VPC Peering 과선택"
  },
  {
    "id": 703,
    "question": "회사에서 Amazon Elastic Container Service(Amazon ECS) 클러스터와 Amazon RDS DB 인스턴스를 사용하여 결제 처리 애플리케이션을 구축하고 실행하려고 합니다. 회사는 규정 준수를 위해 온프레미스 데이터 센터에서 애플리케이션을 실행합니다. 솔루션 설계자는 AWS Outposts 를 솔루션의 일부로 사용하려고 합니다. 솔루션 아키텍트는 회사의 운영 팀과 협력하여 애플리케이션을 구축하고 있습니다. 회사 운영팀의 책임 활동은 무엇입니까? (3개 선택)",
    "options": {
      "A": "Outposts 랙에 탄력적인 전원 및 네트워크 연결을 제공합니다.",
      "B": "Outposts에서 실행되는 가상화 하이퍼바이저, 스토리지 시스템 및 AWS 서비스 관리.",
      "C": "데이터 센터 환경의 물리적 보안 및 액세스 제어.",
      "D": "Outposts 랙 내 전원 공급 장치, 서버 및 네트워킹 장비를 포함한 Outposts 인프라의 가용성.",
      "E": "Outposts 구성 요소의 물리적 유지 관리. F. 서버 장애 및 유지 관리 이벤트를 완화하기 위해 Amazon ECS 클러스터에 추가 용량을 제공합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ AWS Outposts — 온프레미스에 AWS 하드웨어/소프트웨어 배포\n▸ 책임 분담 모델 — AWS (하드웨어/OS 관리) vs 고객 (물리적 환경, 보안)\n▸ 운영팀 역할 — 데이터 센터 인프라 유지 (전력, 냉각, 보안)\n\n【정답 포인트】\n▸\n(A) 전원·네트워크 — 고객 책임 (데이터 센터 조건)\n▸\n(C) 물리적 보안·접근 제어 — 고객 책임 (보안 정책)\n▸\n(B) 하이퍼바이저·AWS 서비스 = AWS 책임 (Outposts 배포 후 관리)\n▸\n(D) 하드웨어 가용성 = AWS 책임 (장비 제공, 패치)\n▸\n(E) 물리적 유지관리 = AWS 책임 (배송, 설치, RMA)\n\n【오답 체크】\n(B) AWS가 하이퍼바이저/서비스 관리 (고객 책임 아님)\n(D) Outposts 랙 가용성 = AWS 책임 (SLA, 장비 교체)\n(E) 물리적 수리 = AWS 필드 엔지니어 역할\n(F) 클러스터 용량 계획 = 애플리케이션 설계자 (운영팀만 아님)\n\n【시험 포인트】\n▸ Outposts 책임: 고객 (물리 환경) vs AWS (소프트웨어 스택)\n▸ \"운영팀\" = 데이터 센터 관리 (전력, 보안, 물리 공간)\n▸ 함정: AWS 책임을 고객으로 오도, 애플리케이션 설계는 운영팀 외"
  },
  {
    "id": 704,
    "question": "회사는 단일 가용 영역에서 실행되는 Amazon EC2 인스턴스에 애플리케이션을 호스팅합니다. OSI(Open Systems Interconnection) 모델의 전송 계층을 사용하여 애플리케이션에 액세스할 수 있습니다. 회사는 고가용성을 갖기 위해 애플리케이션 아키텍처가 필요합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족할 수 있는 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "다른 가용 영역에서 새 EC2 인스턴스를 구성합니다. Amazon Route 53 을 사용하여 트래픽을 모든 인스턴스로 라우팅합니다.",
      "B": "EC2 인스턴스 앞에 Network Load Balancer를 구성합니다.",
      "C": "인스턴스에 대한 TCP 트래픽을 전송하도록 Network Load Balancer 를 구성합니다. 인스턴스에 대한 HTTP 및 HTTPS 트래픽을 위해 Application Load Balancer를 구성합니다.",
      "D": "EC2 인스턴스에 대한 Auto Scaling 그룹을 생성합니다. 여러 가용 영역을 사용하도록 Auto Scaling 그룹을 구성합니다. 인스턴스에서 애플리케이션 상태 확인을 실행하도록 Auto Scaling 그룹을 구성합니다.",
      "E": "Amazon CloudWatch 경보를 생성합니다. 중지된 상태로 전환되는 EC2 인스턴스를 다시 시작하도록 경보를 구성합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ Auto Scaling Group — 여러 AZ에 걸쳐 EC2 인스턴스 수를 자동으로 관리하는 서비스\n▸ Route 53 — DNS 기반 트래픽 라우팅으로 고가용성을 제공하는 서비스\n\n【정답 포인트】\n▸ OSI 전송계층(TCP) — 단순 트래픽 분산이 목표\n▸ 비용 효율: Auto Scaling\n(A) 은 수평 확장의 기본, Route 53\n(D) 은 DNS 페일오버\n▸ A+D 조합이 최소 비용으로 다중-AZ 고가용성 실현\n\n【오답 체크】\n(B) NLB 단독 사용 — 인스턴스가 여전히 단일 AZ에만 존재\n(C) 복잡한 로드밸런서 조합 — 불필요한 비용 증가\n(E) CloudWatch 경보 — 자동 복구보다 느린 수동 개입\n\n【시험 포인트】\n▸ 고가용성 = 다중 AZ + 자동 복구 메커니즘\n▸ 비용 우선순위: Auto Scaling이 기본 핵심, 추가 로드밸런서는 선택적"
  },
  {
    "id": 705,
    "question": "회사는 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 회사는 AWS 비용에 대해 정기적인 재무 평가를 수행합니다. 회사는 최근 비정상적인 지출을 확인했습니다. 회사는 비정상적인 지출을 방지하기 위한 솔루션이 필요합니다. 솔루션은 비용을 모니터링하고 비정상적인 지출이 발생할 경우 책임 있는 이해관계자에게 알려야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "지출이 없는 예산을 생성하려면 AWS Budgets 템플릿을 사용하십시오.",
      "B": "AWS Billing and Cost Management 콘솔에서 AWS 비용 이상 탐지 모니터를 생성합니다.",
      "C": "현재 실행 중인 워크로드 가격 세부 정보에 대한 AWS 가격 계산기 추정치를 생성합니다.",
      "D": "Amazon CloudWatch를 사용하여 비용을 모니터링하고 비정상적인 지출을 식별합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Cost Anomaly Detection — 머신러닝 기반 비정상 지출 자동 탐지\n▸ AWS Budgets — 정적 임계값 기반 예산 관리 도구\n\n【정답 포인트】\n▸ 핵심: \"비정상적인 지출\" 감지 → 비용 이상 탐지 필요\n▸ 머신러닝이 과거 패턴으로부터 자동 학습, 편차 자동 감지\n▸ 자동 알림으로 조기 대응 가능\n\n【오답 체크】\n(A) Budgets — 고정 임계값만 설정, 비정상 패턴 감지 불가\n(C) 가격 계산기 — 추정 도구일 뿐 모니터링 기능 없음\n(D) CloudWatch — 메트릭 기반 모니터링, 비용 이상 전문성 부족\n\n【시험 포인트】\n▸ \"이상 탐지\" = Cost Anomaly Detection (AWS 전용 기능)\n▸ 머신러닝 활용 = 패턴 변화를 자동으로 감지하는 지능형 도구"
  },
  {
    "id": 706,
    "question": "한 회사에서 역사적 사건의 이미지를 저장하는 웹사이트를 운영하고 있습니다. 웹사이트 사용자는 이미지 속 사건이 발생한 연도를 기준으로 이미지를 검색하고 볼 수 있는 기능이 필요합니다. 평균적으로 사용자는 각 이미지를 1 년에 한두 번만 요청합니다. 회사는 가용성이 높은 이미지를 원합니다. 이미지를 저장하고 사용자에게 전달하는 솔루션입니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic Block Store(Amazon EBS)에 이미지를 저장합니다. Amazon EC2 에서 실행되는 웹 서버를 사용하십시오.",
      "B": "Amazon Elastic File System(Amazon EFS)에 이미지를 저장합니다. Amazon EC2 에서 실행되는 웹 서버를 사용하십시오.",
      "C": "Amazon S3 Standard에 이미지를 저장합니다. S3 Standard를 사용하면 정적 웹사이트를 통해 이미지를 직접 전달할 수 있습니다.",
      "D": "Amazon S3 Standard-InfrequentAccess(S3 Standard-IA)에 이미지를 저장합니다. S3 Standard-IA를 사용하면 정적 웹 사이트를 통해 이미지를 직접 전달할 수 있습니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Standard — 자주 액세스하는 데이터용, 빠른 검색 및 높은 가용성\n▸ S3 Standard-IA — 저빈도 액세스 데이터용, 검색 요청비 발생\n\n【정답 포인트】\n▸ 낮은 요청 빈도 BUT \"즉시 사용 가능\" 요구 → S3 Standard 선택\n▸ S3는 EC2 없이 정적 웹사이트 호스팅으로 가용성 99.99% 보장\n▸ 비용: S3 저장소 비용 < EC2 운영 비용\n\n【오답 체크】\n(A) EBS — EC2 종속성, 관리 부담 및 비용 증가\n(B) EFS — 공유 NFS 스토리지, 불필요한 복잡도\n(D) S3 Standard-IA — 검색 요청비 추가 발생, 1년 1~2회면 Standard가 효율적\n\n【시험 포인트】\n▸ 저빈도 + 즉시 가용 = Standard (IA는 검색비 고려 필요)\n▸ 정적 콘텐츠 = S3 단독으로 충분, 서버 불필요"
  },
  {
    "id": 707,
    "question": "한 회사에서 테스트 환경의 애플리케이션에 AWS CloudFormatlon 스택을 사용하려고 합니다. 회사는 공개 액세스를 차단하는 Amazon S3 버킷에 CloudFormation 템플릿을 저장합니다. 회사는 테스트 환경을 생성하기 위한 특정 사용자 요청을 기반으로 S3 버킷의 템플릿에 CloudFormation 액세스 권한을 부여하려고 합니다. 솔루션은 보안 모범 사례를 따라야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon S3 용 게이트웨이 VPC 엔드포인트를 생성합니다. S3 객체 URL 을 사용하도록 CloudFormation 스택을 구성합니다.",
      "B": "S3 버킷을 대상으로 하는 Amazon API Gateway REST API를 생성합니다. API 게이트웨이 URL을 사용하도록 CloudFormat10n 스택을 구성합니다.",
      "C": "템플릿 객체에 대해 미리 서명된 URL 을 생성합니다. 미리 서명된 URL 을 사용하도록 CloudFormation 스택을 구성합니다.",
      "D": "S3 버킷의 템플릿 객체에 대한 공개 액세스를 허용합니다. 테스트 환경이 생성된 후 공개 접근을 차단합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 미리 서명된 URL — 특정 사용자에게 시간 제한 액세스 권한 부여\n▸ 공개 액세스 차단 — S3 버킷의 보안 모범 사례\n\n【정답 포인트】\n▸ \"특정 사용자 요청 기반\" → 임시 액세스 메커니즘 필요\n▸ 미리 서명된 URL: 시간 제한, 최소 권한, 버킷 공개 불필요\n▸ CloudFormation이 직접 URL 호출로 템플릿 검색\n\n【오답 체크】\n(A) VPC 엔드포인트 — 네트워크 수준 제어, 사용자별 권한 관리 불가\n(B) API Gateway — 추가 복잡도, 불필요한 중간 계층\n(D) 공개 액세스 허용 — 보안 모범 사례 위반\n\n【시험 포인트】\n▸ \"사용자별 임시 액세스\" = 미리 서명된 URL의 정의적 사용\n▸ 공개 차단 유지 + 선택적 액세스 = 최소 권한 원칙"
  },
  {
    "id": 708,
    "question": "회사는 여러 AWS 계정의 AWS CloudTrail 로그를 중앙 집중식 계정의 Amazon S3 버킷으로 보냅니다. 회사는 CloudTrail 로그를 보관해야 합니다. 회사는 언제든지 CloudTrail 로그를 쿼리할 수 있어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "중앙 집중식 계정의 CloudTraiI 이벤트 기록을 사용하여 Amazon Athena 테이블을 생성합니다. Athena에서 CloudTrail 로그를 쿼리합니다.",
      "B": "CloudTrail 로그를 관리하도록 Amazon Neptune 인스턴스를 구성합니다. Neptune 에서 CloudTraiI 로그를 쿼리합니다.",
      "C": "로그를 Amazon DynamoDB 테이블로 보내도록 CloudTrail 을 구성합니다. Amazon QulCkSight에서 대시보드를 생성하여 테이블의 로그를 쿼리합니다.",
      "D": "Amazon Athena 를 사용하여 Athena 노트북을 생성합니다. 로그를 노트북으로 보내도록 CloudTrail을 구성합니다. Athena에서 쿼리를 실행합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Athena — S3의 로그 파일을 직접 SQL로 쿼리하는 서비스\n▸ CloudTrail 통합 — Athena는 CloudTrail 로그 자동 파싱 지원\n\n【정답 포인트】\n▸ \"보관 + 언제든 쿼리\" → S3 저장소 + 쿼리 엔진 필요\n▸ Athena는 CloudTrail 이벤트 기록을 정의된 테이블로 자동 생성\n▸ SQL 쿼리로 즉시 분석 가능, 데이터 이동 불필요\n\n【오답 체크】\n(B) Neptune — 그래프 데이터베이스, 로그 쿼리에 부적합\n(C) DynamoDB — 모든 CloudTrail 데이터 마이그레이션 필요, 비용 증가\n(D) Athena 노트북 — CloudTrail의 로그 수신처가 아님\n\n【시험 포인트】\n▸ \"S3 저장 + SQL 쿼리\" = Athena의 정의적 사용\n▸ CloudTrail과 Athena 네이티브 통합이 가장 간단한 방법"
  },
  {
    "id": 709,
    "question": "회사는 두 개의 AWS 리전에서 3 티어 애플리케이션을 실행합니다. 웹 계층, 애플리케이션 계층 및 데이터베이스 계층은 Amazon EC2 인스턴스에서 실행됩니다. 회사는 데이터베이스 계층에 Microsoft SQL Server Enterprise 용 Amazon RDS 를 사용합니다. 주간 및 월간 보고서를 실행할 때 데이터베이스 계층에 높은 로드가 발생합니다. 회사는 데이터베이스 계층의 로드를 줄이고 싶어합니다. 최소한의 관리 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "읽기 전용 복제본을 생성합니다. 새로운 읽기 복제본을 사용하도록 보고서를 구성합니다.",
      "B": "RDS 데이터베이스를 Amazon DynamoDB 로 변환_ DynamoDB 를 사용하도록 보고서를 구성합니다.",
      "C": "더 큰 인스턴스 크기를 선택하여 기존 RDS DB 인스턴스를 수정합니다.",
      "D": "기존 ROS DB 인스턴스를 수정하고 인스턴스를 Auto Scaling 그룹에 넣습니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RDS 읽기 전용 복제본 — 읽기 작업 분산, 원본 DB 부하 감소\n▸ Read Replica — 동기식 쓰기, 비동기식 읽기 복제\n\n【정답 포인트】\n▸ 보고서 = 읽기 집약적 작업 → 읽기 트래픽 분리 필요\n▸ 복제본 생성: SQL Server 엔터프라이즈 지원, 자동 관리\n▸ 보고서 엔드포인트만 변경, 원본은 쓰기 용도 유지\n\n【오답 체크】\n(B) DynamoDB 변환 — 스키마 재설계, 애플리케이션 코드 수정 필수\n(C) 인스턴스 업그레이드 — 보고서 부하 특화 해결 못함, 비용만 증가\n(D) Auto Scaling — RDS는 상태형 DB, Auto Scaling 불가\n\n【시험 포인트】\n▸ \"읽기 부하 분산\" = Read Replica의 표준 용도\n▸ 최소 관리 노력 = AWS 자동 복제, 애플리케이션 수정만 필요"
  },
  {
    "id": 710,
    "question": "한 기업에서 CompanyConfidential Amazon S3 버킷에 대한 액세스 권한이 없어야 하는 새 클라우드 엔지니어를 모집했습니다. 클라우드 엔지니어는 AdminTools 라는 S3 버킷에 대한 읽기 및 쓰기 권한이 있어야 합니다. 어떤 IAM 정책이 이러한 기준을 충족합니까?",
    "options": {
      "A": "B.",
      "C": "D."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ IAM 정책 — S3 버킷별 권한 제어\n▸ 최소 권한 원칙 — 필요한 리소스에만 액세스 허용\n\n【정답 포인트】\n▸ AdminTools 버킷: s3:GetObject, s3:PutObject 허용\n▸ CompanyConfidential: 명시적 거부(Deny) 또는 허용 없음\n▸ 특정 리소스(ARN) 기반 정책이 필수\n\n【오답 체크】\n(B/C/D) — 실제 정책 코드가 없어 비교 불가, 일반적으로:\n- 와일드카드(*) 사용 정책 = 거부\n- CompanyConfidential 포함 정책 = 거부\n\n【시험 포인트】\n▸ \"특정 버킷만 액세스\" = ARN 기반 세분화 정책\n▸ 명시적 거부가 허용보다 우선권 — 보안 모범 사례"
  },
  {
    "id": 711,
    "question": "한 회사가 여러 대륙의 도시에서 온도, 습도 및 기압 데이터를 수집합니다. 매일 사이트당 수집되는 평균 데이터 양은 500GB입니다. 각 사이트에는 고속 인터넷 연결이 있습니다. 이 회사의 일기 예보 애플리케이션은 단일 지역을 기반으로 하며 매일 데이터를 분석합니다. 이러한 모든 글로벌 사이트에서 데이터를 집계하는 가장 빠른 방법은 무엇입니까?",
    "options": {
      "A": "대상 버킷에서 Amazon S3 Transfer Acceleration 을 활성화합니다. 멀티파트 업로드를 사용하여 사이트 데이터를 대상 버킷에 직접 업로드합니다.",
      "B": "가장 가까운 AWS 지역의 Amazon S3 버킷에 사이트 데이터를 업로드합니다. S3 교차 리전 복제를 사용하여 객체를 대상 버킷에 복사합니다.",
      "C": "가장 가까운 AWS 리전으로 데이터를 전송하도록 매일 AWS Snowball 작업을 예약합니다. S3 교차 리전 복제를 사용하여 객체를 대상 버킷에 복사합니다.",
      "D": "가장 가까운 리전의 Amazon EC2 인스턴스에 데이터를 업로드합니다. Amazon Elastic Block Store(Amazon EBS) 볼륨에 데이터를 저장합니다. 하루에 한 번 EBS 스냅샷을 찍어 중앙 집중식 리전에 복사합니다. 중앙 집중식 리전에서 EBS 볼륨을 복원하고 매일 데이터에 대한 분석을 실행합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 Transfer Acceleration — 엣지 로케이션 활용, 글로벌 업로드 속도 향상\n▸ 멀티파트 업로드 — 병렬 업로드로 대용량 데이터 처리 효율화\n\n【정답 포인트】\n▸ \"가장 빠른 방법\" → 네트워크 최적화 필수\n▸ Transfer Acceleration: CloudFront 엣지 활용, 글로벌 사이트에 최적\n▸ 멀티파트: 500GB 대용량 데이터를 병렬로 빠르게 전송\n\n【오답 체크】\n(B) 로컬 지역 업로드 → 크로스 리전 복제 지연, 2단계 프로세스\n(C) Snowball — \"매일\" 일일 단위 작업으로 부적합, 물리 전송 비현실적\n(D) EC2/EBS — 스냅샷 생성, 복사, 복원 시간 지연, 복잡도 높음\n\n【시험 포인트】\n▸ \"글로벌 + 고속 업로드\" = Transfer Acceleration\n▸ \"대용량 일일 데이터\" = 멀티파트 업로드의 필수 조건"
  },
  {
    "id": 712,
    "question": "회사는 AWS 에서 호스팅되는 서비스 솔루션으로 고성능 컴퓨팅(HPC) 워크로드를 구축할 계획입니다. 16개의 Amazon EC2 Linux 인스턴스 그룹에는 노드 간 통신에 가장 낮은 지연 시간이 필요합니다. 인스턴스에는 고성능 스토리지를 위한 공유 블록 장치 볼륨도 필요합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "클러스터 배치 그룹을 사용합니다. Amazon EBS 다중 연결을 사용하여 단일 프로비저닝된 IOPS SSD Amazon Elastic Block Store(Amazon EBS) 볼륨을 모든 인스턴스에 연결합니다.",
      "B": "클러스터 배치 그룹을 사용합니다. Amazon Elastic File System(Amazon EFS)을 사용하여 인스턴스 간에 공유 파일 시스템을 생성합니다.",
      "C": "파티션 배치 그룹을 사용합니다. Amazon Elastic File System(Amazon EFS)을 사용하여 인스턴스 간에 공유 파일 시스템을 생성합니다.",
      "D": "스프레드 배치 그룹을 사용합니다. Amazon EBS 다중 연결을 사용하여 단일 프로비저닝된 IOPS SSD Amazon Elastic Block Store(Amazon EBS) 볼륨을 모든 인스턴스에 연결합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 클러스터 배치 그룹 — 인스턴스 간 최저 지연시간, HPC 최적화\n▸ EBS 다중 연결 — 단일 볼륨을 여러 인스턴스에 동시 연결\n\n【정답 포인트】\n▸ \"가장 낮은 지연시간\" → 클러스터 배치 필수\n▸ \"공유 블록 장치\" → EBS 다중 연결로 구현\n▸ 클러스터 배치 + EBS 다중 연결 = HPC 표준 구성\n\n【오답 체크】\n(B) EFS — NFS 기반, 블록 레벨 다중 연결 아님\n(C) 파티션 배치 그룹 — 클러스터보다 지연시간 증가\n(D) 스프레드 배치 그룹 — 인스턴스를 분산, 지연시간 증가\n\n【시험 포인트】\n▸ HPC + 낮은 지연시간 = 클러스터 배치 그룹\n▸ \"공유 블록 스토리지\" = EBS 다중 연결의 정의적 사용"
  },
  {
    "id": 713,
    "question": "회사에 다양한 런타임으로 AWS Lambda 함수를 분당 최대 800 번 호출하는 이벤트 기반 애플리케이션이 있습니다. Lambda 함수는 Amazon Aurora MySQL OB 클러스터에 저장된 데이터에 액세스합니다. 회사는 사용자 활동이 증가함에 따라 연결 시간 초과를 인지하고 있습니다. 데이터베이스에 과부하가 걸린 흔적이 없습니다. CPU, 메모리 및 디스크 액세스 메트릭이 모두 낮습니다. 어떤 솔루션이 운영 오버헤드를 최소화하면서 이 문제를 해결할 것입니까?",
    "options": {
      "A": "더 많은 연결을 처리하려면 Aurora MySQL 노드의 크기를 조정하십시오. 데이터베이스 연결 시도에 대해 Lambda 함수에서 재시도 논리를 구성합니다.",
      "B": "데이터베이스에서 일반적으로 읽는 항목을 캐시하도록 읽기용 Amazon ElastiCache 를 설정합니다. 읽기를 위해 ElastiCache에 연결하도록 Lambda 함수를 구성합니다.",
      "C": "Aurora 복제본을 리더 노드로 추가합니다. 작성기 엔드포인트가 아닌 OB 클러스터의 판독기 엔드포인트에 연결하도록 Lambda 함수를 구성합니다.",
      "D": "Amazon ROS 프록시를 사용하여 프록시를 생성합니다. DB 클러스터를 대상 데이터베이스로 설정 DB 클러스터가 아닌 프록시에 연결하도록 Lambda 함수를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ RDS Proxy — 데이터베이스 연결 풀링, 연결 재사용 관리\n▸ 연결 시간 초과 — DB 리소스 부족이 아닌 연결 관리 문제\n\n【정답 포인트】\n▸ DB 메트릭 정상 → \"연결 누적\" 이 진짜 원인\n▸ 람다 800회/분 = 800개 동시 연결 시도 가능\n▸ RDS Proxy: 연결 재사용으로 DB 부하 감소, 람다 코드 수정 불필요\n\n【오답 체크】\n(A) 인스턴스 크기 조정 — 메트릭 정상인데 비용만 증가\n(B) ElastiCache — 캐시 레이어 추가, 근본 연결 문제 해결 안 함\n(C) 읽기 복제본 — 쓰기 부하 분산 효과 없음, 연결 문제 여전\n\n【시험 포인트】\n▸ \"DB 메트릭 정상 + 연결 시간 초과\" = 연결 풀링 문제\n▸ RDS Proxy의 정의적 사용: Lambda 같은 높은 동시 연결 워크로드"
  },
  {
    "id": 714,
    "question": "회사는 Amazon EC2 인스턴스 및 Amazon RDS 에서 2 계층 애플리케이션을 호스팅합니다. 응용 프로그램의 요구 사항은 시간에 따라 다릅니다. 업무 시간 이후와 주말에는 부하가 최소화됩니다. EC2 인스턴스는 최소 2개의 인스턴스와 최대 5개의 인스턴스로 구성된 EC2 Auto Scaling 그룹에서 실행됩니다. 응용 프로그램은 항상 사용할 수 있어야 하지만 회사는 전체 비용을 걱정합니다. 가용성 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "모든 EC2 스팟 인스턴스를 사용합니다. 사용하지 않을 때는 RDS 데이터베이스를 중지합니다.",
      "B": "5 개의 EC2 인스턴스에 적용되는 EC2 Instance Savings Plan 을 구매합니다. RDS 예약 DB 인스턴스를 구매합니다.",
      "C": "두 개의 EC2 예약 인스턴스를 구매합니다. 필요에 따라 최대 3 개의 추가 EC2 스팟 인스턴스를 사용합니다. 사용하지 않을 때는 RDS 데이터베이스를 중지합니다.",
      "D": "2개의 EC2 인스턴스를 포함하는 EC2 Instance Savings Plan을 구매합니다. 필요에 따라 최대 3 개의 추가 EC2 온디맨드 인스턴스를 사용합니다. RDS 예약 DB 인스턴스를 구매합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ EC2 예약 인스턴스 — 기본 부하용, 고정 비용 할인\n▸ EC2 스팟 인스턴스 — 피크 부하용, 최대 90% 할인\n▸ Savings Plan — 유연성, 예약 인스턴스보다 복잡도 낮음\n\n【정답 포인트】\n▸ 최소 2개 기본 부하 → 예약 인스턴스로 보장\n▸ 최대 5개 피크 부하(+3개) → 스팟 인스턴스로 절감\n▸ \"항상 사용 가능\" = 최소 2개는 온디맨드/예약으로 보장 필수\n\n【오답 체크】\n(A) 모두 스팟 — 중단 위험, 가용성 보장 불가\n(B) 5개 Savings Plan — 불필요한 오버프로비저닝\n(D) Savings Plan + 온디맨드 — 스팟보다 비용 증가\n\n【시험 포인트】\n▸ \"최소 + 최대\" 구조 = 예약(기본) + 스팟(피크) 조합\n▸ \"항상 사용 가능\" = 기본 부하는 반드시 예약 필수"
  },
  {
    "id": 715,
    "question": "회사의 애플리케이션이 AWS 에서 실행됩니다. 애플리케이션은 S3 Standard-infrequent Access(S3 Standard-IA) 스토리지 클래스를 사용하는 Amazon S3 버킷에 대용량 문서를 저장합니다. 회사는 데이터 저장 비용을 계속 지불하지만 총 S3 비용을 절감하고자 합니다. 회사는 승인된 외부 사용자가 밀리초 단위로 문서에 액세스할 수 있기를 원합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "요청자 지불 버킷이 되도록 S3 버킷을 구성합니다.",
      "B": "모든 기존 객체와 향후 객체에 대해 스토리지 계층을 S3 Standard로 변경합니다.",
      "C": "S3 Docket에서 S3 Transfer Acceleration을 켭니다.",
      "D": "Amazon CloudFront를 사용하여 S3 버킷에 대한 모든 요청을 처리합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ CloudFront — 엣지 로케이션 캐싱, 밀리초 성능 제공\n▸ S3 Standard-IA — 저장소 비용은 낮음, 요청비 높음\n\n【정답 포인트】\n▸ \"총 S3 비용 절감\" → 빈번한 요청의 요청비가 문제\n▸ CloudFront 캐싱: S3 조회 감소 = 요청비 극적 감소\n▸ 밀리초 액세스: CloudFront 엣지 로케이션 캐시로 보장\n\n【오답 체크】\n(A) 요청자 지불 — S3 비용 절감 효과 없음\n(B) S3 Standard로 변경 — 저장소 비용 증가, 역효과\n(C) Transfer Acceleration — 업로드 속도 개선, 요청비 영향 없음\n\n【시험 포인트】\n▸ \"Standard-IA + 빈번한 요청\" = 요청비 누적 문제\n▸ CloudFront 캐싱 = 요청비 최소화의 솔루션"
  },
  {
    "id": 716,
    "question": "회사에서 1PB 온프레미스 이미지 리포지토리를 AWS 로 마이그레이션하려고 합니다. 이미지는 서버리스 웹 애플리케이션에서 사용됩니다. 리포지토리에 저장된 이미지는 거의 액세스되지 않지만 즉시 사용할 수 있어야 합니다. 또한 미사용 이미지를 암호화하고 우발적인 삭제로부터 보호해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "클라이언트 측 암호화를 구현하고 이미지를 Amazon S3 Glacier 볼트에 저장합니다. 우발적인 삭제를 방지하기 위해 볼트 잠금을 설정합니다.",
      "B": "S3 Standard-Infrequent Access(S3 Standard-IA) 스토리지 클래스의 Amazon S3 버킷에 이미지를 저장합니다. S3 버킷에서 버전 관리, 기본 암호화 및 MFA 삭제를 활성화합니다.",
      "C": "Amazon FSx for Windows File Server 파일 공유에 이미지를 저장합니다. AWS Key Management Service(AWS KMS) 고객 마스터 키(CMK)를 사용하여 파일 공유의 이미지를 암호화하도록 Amazon FSx 파일 공유를 구성합니다. 우발적인 삭제를 방지하려면 이미지에 NTFS 권한 집합을 사용하십시오.",
      "D": "Infrequent Access 스토리지 클래스의 Amazon Elastic File System(Amazon EFS) 파일 공유에 이미지를 저장합니다. AWS Key Management Service(AWS KMS) 고객 마스터 키(CMK)를 사용하여 파일 공유의 이미지를 암호화하도록 EFS 파일 공유를 구성합니다. 우발적인 삭제를 방지하려면 이미지에 NFS 권한 집합을 사용하십시오."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 Standard-IA — 저빈도 액세스, 빠른 검색 지원\n▸ MFA 삭제 — 다중 요소 인증 필수, 우발적 삭제 방지\n\n【정답 포인트】\n▸ \"즉시 사용\" → Glacier의 아카이브 검색 시간 부적합\n▸ S3 Standard-IA: 밀리초 검색 + 저장소 비용 절감\n▸ 버전 관리 + MFA 삭제: 우발적 삭제 방지의 표준 방법\n\n【오답 체크】\n(A) Glacier — 검색 시간 지연(분 단위), 즉시 사용 요구 불만족\n(C/D) FSx/EFS — 파일 시스템, 권한 관리는 가능하나S3보다 비용 높음\n\n【시험 포인트】\n▸ \"저빈도 + 즉시\" = Standard-IA (Glacier 아님)\n▸ \"우발적 삭제\" = 버전 관리 + MFA 삭제의 조합"
  },
  {
    "id": 717,
    "question": "회사에서 최근 마케팅 캠페인의 효과를 측정하려고 합니다. 회사는 판매 데이터의 csv 파일에 대해 일괄 처리를 수행하고 그 결과를 1 시간에 한 번씩 Amazon S3 버킷에 저장합니다. S3 는 페타바이트 단위의 개체입니다. 이 회사는 Amazon Athena 에서 일회성 쿼리를 실행하여 특정 지역의 특정 날짜에 가장 인기 있는 제품을 확인합니다. 쿼리가 실패하거나 완료되는 데 예상보다 오래 걸리는 경우가 있습니다. 쿼리 성능과 안정성을 개선하기 위해 솔루션 설계자는 어떤 조치를 취해야 합니까? (2 개 선택)",
    "options": {
      "A": "S3 객체 크기를 128MB 미만으로 줄입니다.",
      "B": "Amazon S3의 날짜 및 지역별로 데이터를 분할합니다.",
      "C": "파일을 Amazon S3에 큰 단일 객체로 저장합니다.",
      "D": "Amazon Kinesis Data Analytics를 사용하여 일괄 처리 작업의 팬으로 쿼리를 실행합니다.",
      "E": "AWS Glue 추출, 변환 및 로드(ETL) 프로세스를 사용하여 csv 파일을 Apache Parquet 형식으로 변환합니다."
    },
    "answer": "CE",
    "explanation": "【핵심 용어】\n▸ Parquet — 압축 컬럼 형식, CSV보다 쿼리 성능 향상\n▸ 파티셔닝 — 날짜/지역 기준 데이터 분할, 스캔 범위 축소\n\n【정답 포인트】\n▸\n(C) Parquet 형식: CSV 대비 압축률↑, 쿼리 성능↑\n▸\n(B) 파티셔닝: 특정 날짜/지역 쿼리 시 불필요한 데이터 스캔 제거\n▸ 두 가지 조합이 Athena 성능 극대화\n\n【오답 체크】\n(A) 작은 객체 — S3 Request 비용 증가, 스캔 오버헤드\n(D) Kinesis -- 일회성 배치 쿼리에 부적합, 실시간 처리 용도\n\n【시험 포인트】\n▸ CSV → Parquet = 형식 최적화\n(E) ▸ \"특정 날짜/지역\" 필터 = 파티셔닝 필수\n(B) ▸ C+E 아님, B+E가 정답: C는 객체 크기 증가로 부정적"
  },
  {
    "id": 718,
    "question": "회사는 여러 벤더를 사용하여 Amazon S3 버킷에 저장된 디지털 자산을 배포합니다. 이 회사는 공급업체 AWS 계정에 이러한 S3 버킷의 객체를 다운로드하는 데 필요한 최소한의 액세스 권한이 있는지 확인하려고 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "익명의 읽기 권한과 모든 버킷을 나열할 수 있는 권한이 있는 버킷 정책을 설계합니다.",
      "B": "사용자에게 읽기 전용 액세스 권한을 부여하는 버킷 정책을 설계합니다. IAM 엔터티를 보안 주체로 지정합니다.",
      "C": "IAM 역할에 대해 지정된 읽기 전용 액세스 정책이 있는 교차 계정 IAM 역할을 생성합니다.",
      "D": "공급업체 사용자에게 읽기 전용 액세스 권한을 부여하는 사용자 정책 및 공급업체 사용자 그룹을 만듭니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 교차 계정 IAM 역할 — 다른 AWS 계정의 안전한 액세스 위임\n▸ 최소 권한 원칙 — 필요한 권한만 부여\n\n【정답 포인트】\n▸ \"공급업체 AWS 계정\" = 별도의 AWS 계정 구조\n▸ 교차 계정 IAM 역할: 신뢰 관계 기반, 안전한 권한 위임\n▸ 운영 오버헤드 최소: 버킷 정책 변경 필요 없음\n\n【오답 체크】\n(A) 익명 읽기 — 보안 모범 사례 위반\n(B) 버킷 정책만 -- 공급업체 계정의 IAM 통제 불가\n(D) 사용자/그룹 생성 — 공급업체가 자체 계정 관리, 운영 복잡도 증가\n\n【시험 포인트】\n▸ \"다중 계정 + 최소 권한\" = 교차 계정 역할\n▸ \"최소 오버헤드\" = 자동 신뢰 위임, 버킷 정책 변경 불필요"
  },
  {
    "id": 719,
    "question": "솔루션 설계자는 회사의 고객 대면 애플리케이션을 설계하고 있습니다. 애플리케이션의 데이터베이스는 일년 내내 명확하게 정의된 액세스 패턴을 가지며 연중 시간에 따라 다양한 읽기 및 쓰기 횟수를 갖게 됩니다. 회사는 데이터베이스에 대한 감사 기록을 7 일 동안 보관해야 합니다. RPO(복구 지점 목표)는 5시간 미만이어야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Auto Scaling 과 함께 Amazon DynamoDB 를 사용하십시오. 온디맨드 백업 및 Amazon DynamoDB Streams를 사용합니다.",
      "B": "Amazon Redshift 를 사용합니다. 동시성 확장을 구성합니다. 감사 로깅을 활성화합니다. 4시간마다 데이터베이스 스냅샷을 수행합니다.",
      "C": "프로비저닝된 IOPS 와 함께 Amazon RDS 를 사용합니다. 데이터베이스 감사 매개변수 활성화 5시간마다 데이터베이스 스냅샷을 수행합니다.",
      "D": "Auto Scaling 과 함께 Amazon Aurora MySQL 을 사용합니다. 데이터베이스 감사 매개변수를 활성화하십시오."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Aurora Auto Scaling — 읽기/쓰기 패턴에 따른 자동 조정\n▸ 감사 매개변수 — 데이터베이스 레벨 감사 기록 (7일 보관)\n\n【정답 포인트】\n▸ \"명확한 액세스 패턴\" + \"변동하는 부하\" → Auto Scaling 최적\n▸ Aurora: 자동 백업(5시간 RPO 만족), 감사 로깅 내장\n▸ DynamoDB는 RPO 요구사항(5시간 < 온디맨드 백업) 미충족\n\n【오답 체크】\n(A) DynamoDB Streams — 실시간 변경만 추적, 스냅샷 없음\n(B) Redshift — 분석용, 고객 대면 OLTP 부적합\n(C) RDS 프로비저닝 — 패턴에 맞는 동적 조정 불가\n\n【시험 포인트】\n▸ \"변동하는 부하\" = Auto Scaling (Aurora 지원)\n▸ \"RPO 5시간 미만\" = Aurora 자동 백업 + 감사 로깅으로 충분"
  },
  {
    "id": 720,
    "question": "회사의 애플리케이션은 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행됩니다. 회사는 애플리케이션에서 임의의 요일에 트래픽이 갑자기 증가한다는 사실을 알게 되었습니다. 회사는 트래픽이 갑자기 증가하는 동안 애플리케이션 성능을 유지하려고 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "수동 스케일링을 사용하여 Auto Scaling 그룹의 크기를 변경합니다.",
      "B": "예측 조정을 사용하여 Auto Scaling 그룹의 크기를 변경합니다.",
      "C": "동적 스케일링을 사용하여 Auto Scaling 그룹의 크기를 변경합니다.",
      "D": "일정 조정을 사용하여 Auto Scaling 그룹의 크기를 변경합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 동적 스케일링(Dynamic Scaling) — 실시간 메트릭 기반 자동 확장\n▸ 예측 조정 — 과거 패턴 분석 기반 사전 확장\n\n【정답 포인트】\n▸ \"임의의 요일\" + \"갑자기 증가\" → 패턴 예측 불가능\n▸ 동적 스케일링: CPU/네트워크 메트릭으로 즉시 반응\n▸ \"성능 유지\" = 로드 발생 후 빠른 응답 필수\n\n【오답 체크】\n(A) 수동 스케일링 — 빠른 반응 불가능\n(B) 예측 조정 — 임의의 요일 패턴은 학습/예측 어려움\n(D) 일정 조정 — 특정 시간 기반, 랜덤 트래픽 대응 불가\n\n【시험 포인트】\n▸ \"예측 불가능한 부하\" = 동적 스케일링\n▸ \"임의의 요일\" = 일정/예측 조정 부적합"
  },
  {
    "id": 721,
    "question": "회사는 Amazon RDS 를 백엔드 데이터베이스로 사용하는 서버리스 애플리케이션을 AWS에 보유하고 있습니다. 애플리케이션에서 트래픽이 예기치 않게 갑자기 증가하는 경우가 있습니다. 트래픽이 증가하는 동안 애플리케이션은 데이터베이스에 대한 연결을 자주 열고 닫으므로 애플리케이션이 데이터베이스에서 오류를 수신하거나 연결이 끊어집니다. 회사는 애플리케이션이 항상 확장 가능하고 가용성이 높은지 확인해야 합니다. 애플리케이션에 대한 코드 변경 없이 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "서버리스 애플리케이션의 RDS 데이터베이스 옵션 그룹에서 최대 연결 수를 늘리십시오.",
      "B": "최대 로드 트래픽을 충족하도록 RDS DB 인스턴스의 인스턴스 크기를 늘립니다.",
      "C": "서버리스 애플리케이션과 Amazon RDS 간에 Amazon RDS 프록시를 배포합니다.",
      "D": "Amazon RDS 용 예약 인스턴스를 구입하여 피크 로드 트래픽 동안 데이터베이스의 가용성을 높입니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ RDS Proxy — 연결 풀링, 람다 등 고빈도 연결 해제 요청 최적화\n▸ 코드 변경 불필요 — 애플리케이션 수정 없이 투명하게 작동\n\n【정답 포인트】\n▸ \"자주 열고 닫기\" = 연결 오버헤드 문제, DB 리소스 부족 아님\n▸ RDS Proxy: 연결 재사용으로 오버헤드 제거\n▸ 서버리스 + DB 조합의 표준 패턴\n\n【오답 체크】\n(A) 최대 연결 증가 — 근본 문제 해결 아님, 한계 있음\n(B) 인스턴스 크기 증가 — 연결 관리 문제는 미해결\n(D) 예약 인스턴스 — 비용 절감일 뿐, 연결 문제 미해결\n\n【시험 포인트】\n▸ \"코드 변경 없이\" = 중간 프록시 계층 (RDS Proxy)\n▸ \"람다 + RDS\" = RDS Proxy의 정의적 사용 사례"
  },
  {
    "id": 722,
    "question": "회사에서 SSL/TLS 인증서를 사용하도록 Amazon CloudFront 배포를 구성하려고 합니다. 회사는 배포에 기본 도메인 이름을 사용하기를 원하지 않습니다. 대신 회사는 배포에 다른 도메인 이름을 사용하려고 합니다. 추가 비용을 발생시키면서 인증서를 배포하는 솔루션은 무엇입니까?",
    "options": {
      "A": "useast-1 지역의 AWS Certificate Manager(ACM)에서 Amazon 에서 발급한 사설 인증서를 요청합니다.",
      "B": "uswest-1 리전의 AWS Certificate Manager(ACM)에서 Amazon 발급 사설 인증서를 요청합니다.",
      "C": "us-east-1 지역의 AWS Certificate Manager(ACU)에서 Amazon 발급 공인 인증서를 요청합니다.",
      "D": "us-west-1 지역의 AWS Certificate Manager(ACU)에서 Amazon 발급 공인 인증서를 요청합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudFront + ACM — us-east-1 필수, 다른 리전 불가\n▸ 공인 인증서 — 사용자 정의 도메인용, 유효성 검증 필요\n\n【정답 포인트】\n▸ CloudFront는 us-east-1 ACM 인증서만 지원\n▸ 사용자 도메인: 공인 인증서(Public Certificate) 필수\n▸ 사설 인증서는 내부/비공개 도메인용\n\n【오답 체크】\n(A) 사설 인증서 -- 사용자 정의 도메인용 X\n(B) us-west-1 — CloudFront 미지원 리전\n(D) us-west-1 + 공인 — 리전 오류\n\n【시험 포인트】\n▸ CloudFront + 사용자 도메인 = us-east-1 공인 인증서\n▸ 리전 제한은 CloudFront 특성, 고정 규칙"
  },
  {
    "id": 723,
    "question": "회사는 AWS 에서 고성능 컴퓨팅(HPC) 워크로드를 실행합니다. 워크로드에는 긴밀하게 연결된 노드 간 통신을 통해 대기 시간이 짧은 네트워크 성능과 높은 네트워크 처리량이 필요했습니다. Amazon EC2 인스턴스는 컴퓨팅 및 스토리지 용량에 적합한 크기이며 기본 옵션을 사용하여 시작됩니다. 솔루션 설계자는 워크로드의 성능을 개선하기 위해 무엇을 제안해야 합니까?",
    "options": {
      "A": "Amazon EC2 인스턴스를 시작하는 동안 클러스터 배치 그룹을 선택하십시오.",
      "B": "Amazon EC2 인스턴스를 시작하는 동안 전용 인스턴스 테넌시를 선택합니다.",
      "C": "Amazon EC2 인스턴스를 시작하는 동안 Elastic Inference 액셀러레이터를 선택합니다.",
      "D": "Amazon EC2 인스턴스를 시작하는 동안 필요한 용량 예약을 선택합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 클러스터 배치 그룹 — EC2 인스턴스 간 낮은 지연 시간과 높은 네트워크 처리량을 제공하는 논리적 그룹화 방식\n▸ 전용 인스턴스 테넌시 — 단일 고객의 전용 하드웨어에서 실행되는 인스턴스 옵션\n\n【정답 포인트】\n▸ HPC 워크로드의 핵심 요구사항은 \"긴밀하게 연결된 노드 간 통신\" → 클러스터 배치 그룹이 가장 적합\n▸ 클러스터 배치 그룹은 동일 가용성 영역에 인스턴스를 배치하여 네트워크 대기 시간 최소화 및 높은 처리량 보장\n▸ 컴퓨팅/스토리지 용량은 이미 적합하므로, 네트워크 성능 개선에 집중해야 함\n\n【오답 체크】\n(B) 전용 인스턴스 테넌시 — 하드웨어 격리만 제공하며 노드 간 통신 성능 개선 불가\n(C) Elastic Inference 액셀러레이터 — AI/ML 추론용이며 HPC 네트워크 성능과 무관\n(D) 용량 예약 — 인스턴스 가용성 보장만 하며 네트워크 성능 개선 불가\n\n【시험 포인트】\n▸ 배치 그룹 선택(클러스터/파티션/스프레드) — 워크로드 특성에 따른 매핑 중요\n▸ 함정: HPC = CPU/메모리 확장만 생각하기 쉽지만, 실제로는 노드 간 네트워크 성능이 병목"
  },
  {
    "id": 724,
    "question": "회사는 Amazon API Gateway 및 AWS Lambda 를 사용하여 AWS 에서 내부 서버리스 애플리케이션을 호스팅합니다. 회사 직원은 매일 애플리케이션을 사용하기 시작할 때 대기 시간이 긴 문제를 보고합니다. 회사는 대기 시간을 줄이려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "API Gateway 조절 제한을 늘립니다.",
      "B": "직원이 매일 애플리케이션을 사용하기 전에 Lambda 프로비저닝된 동시성을 높이기 위해 예약된 조정을 설정합니다.",
      "C": "Amazon CloudWatch 경보를 생성하여 매일 시작 시 경보 대상으로 Lambda 함수를 시작합니다.",
      "D": "Lambda 함수 메모리를 늘립니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Cold Start — Lambda 함수가 처음 호출되거나 장시간 미사용 후 재시작될 때의 초기 지연\n▸ 프로비저닝된 동시성 — 사전에 준비된 Lambda 실행 환경으로 Cold Start 제거\n\n【정답 포인트】\n▸ \"매일 애플리케이션을 사용하기 시작할 때 대기 시간이 긺\" → 매일 아침 Cold Start 발생 패턴\n▸ 예약된 조정으로 직원이 사용하기 전에 프로비저닝된 동시성 증가 → Cold Start 사전 제거\n▸ 점심 시간, 퇴근 후에 수준 조정하여 비용 최적화\n\n【오답 체크】\n(A) API Gateway 조절 제한 — 속도 제한을 높이는 것이지 Cold Start 지연 해결 불가\n(C) CloudWatch 경보로 Lambda 시작 — 경보 트리거 자체가 느리고 사후 대응이므로 사전 예방 아님\n(D) Lambda 메모리 증가 — Cold Start 시간 단축 효과는 있으나, 예약된 조정만큼 효과적이지 않음\n\n【시험 포인트】\n▸ Cold Start 패턴 → 프로비저닝된 동시성 매핑\n▸ 함정: 메모리 증가도 일부 도움이 되지만, 정해진 시간에 예약 조정이 더 우월한 해결책"
  },
  {
    "id": 725,
    "question": "솔루션 설계자는 가용성이 높은 Amazon ElastiCache for Redis 기반 솔루션을 설계하고 있습니다. 솔루션 설계자는 장애로 인해 로컬 및 AWS 리전 내에서 성능 저하 또는 데이터 손실이 발생하지 않도록 해야 합니다. 솔루션은 노드 수준과 지역 수준에서 고가용성을 제공해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "여러 노드가 포함된 샤드와 함께 다중 AZ Redis 복제 그룹을 사용합니다.",
      "B": "Redis AOF(추가 전용 파일)가 설정된 여러 노드를 포함하는 Redis 샤드를 사용합니다.",
      "C": "복제 그룹에 둘 이상의 읽기 전용 복제본이 있는 다중 AZ Redis 클러스터를 사용합니다.",
      "D": "Auto Scaling이 켜진 여러 노드를 포함하는 Redis 샤드를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 다중 AZ 복제 그룹 — 여러 가용성 영역에 걸쳐 Primary와 Replica를 배치한 Redis 구성\n▸ Redis 클러스터 — 데이터를 여러 샤드에 분산하여 수평 확장 및 고가용성 제공\n\n【정답 포인트】\n▸ 요구사항: \"노드 수준 + 지역 수준 고가용성\" → 다중 AZ 복제 그룹이 두 요구 모두 충족\n▸ 다중 AZ 구성으로 각 AZ의 장애에 대응 → 지역 수준 고가용성\n▸ 복제 그룹의 Primary/Replica 구조로 노드 수준 장애 극복 → 데이터 손실 없음\n\n【오답 체크】\n(B) AOF 파일 설정 — 데이터 영속성만 제공하며 지역 수준 고가용성 불가\n(C) Redis 클러스터 + 읽기 전용 복제본 — 클러스터 모드의 복잡성 증가, 다중 AZ 복제 그룹이 더 간단\n(D) Auto Scaling 활성화 — 자동 스케일링만 하며 고가용성 아키텍처 보장 불가\n\n【시험 포인트】\n▸ ElastiCache 고가용성 전략 — 다중 AZ 복제 그룹 vs 클러스터 모드 구분\n▸ 함정: 클러스터 모드가 고급 기능처럼 보이지만, 단순한 복제 그룹이 요구사항 충족"
  }
];
