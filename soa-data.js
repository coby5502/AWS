window.SOA_QUESTIONS = [
  {
    "id": 1,
    "question": "CloudOps 엔지니어가 다음 AWS CloudFormation 템플릿을 검토하고 있습니다. 스택 생성이 실패하는 이유는 무엇입니까?",
    "options": {
      "A": "CloudFormation 템플릿의 Outputs 섹션이 생략되었습니다.",
      "B": "CloudFormation 템플릿의 Parameters 섹션이 생략되었습니다.",
      "C": "PrivateDnsName은 CloudFormation 템플릿에서 설정할 수 없습니다.",
      "D": "CloudFormation 템플릿에 VPC가 지정되지 않았습니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudFormation 템플릿 — AWS 리소스 정의 구조로, 필수 섹션은 Resources이며 AWSTemplateFormatVersion, Description, Parameters, Outputs 등은 선택적입니다.\n▸ PrivateDnsName — VPC 내의 AWS 리소스에 자동으로 할당되는 DNS 이름으로, CloudFormation의 Ref 또는 GetAtt 함수를 통해 동적으로 반환됩니다.\n\n【정답 포인트】\n▸ \"설정할 수 없다\" → 명시적 설정이 아닌 AWS가 자동으로 생성하는 속성\n▸ 템플릿 생성 실패 → PrivateDnsName을 하드코딩된 값으로 설정하려는 시도 시 오류 발생\n▸ 올바른 방법 → Ref 함수나 GetAtt 함수로 VPC 엔드포인트의 PrivateDnsName 값을 참조\n\n【오답 체크】\n(A) Outputs는 선택적 섹션이므로 생략 가능합니다.\n(B) Parameters도 선택적이며, 필수 것은 Resources 섹션뿐입니다.\n(D) VPC는 특정 리소스 타입에만 필수이며, 모든 스택에 필수는 아닙니다.\n\n【시험 포인트】\n▸ CloudFormation 속성 분류 — 명시적 설정 속성 vs. AWS 자동 생성 속성\n▸ PrivateDnsName은 EC2, VPC 엔드포인트 등에서 반환되는 속성으로, 문자열 값으로 직접 설정 불가",
    "en_q": "A CloudOps engineer is examining the following AWS CloudFormation template: Why will the stack creation fail?",
    "en_opts": {
      "A": "The Outputs section of the CloudFormation template was omitted.",
      "B": "The Parameters section of the CloudFormation template was omitted.",
      "C": "The PrivateDnsName cannot be sot from a CloudFormation template.",
      "D": "The VPC was not specified in the CloudFormation template."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369111-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 2,
    "question": "회사가 AWS 워크로드와 연관된 리소스에 사용자 정의 태그를 적용했습니다. 태그를 적용한 지 20일 후, 회사는 AWS Cost Explorer 콘솔에서 태그를 사용하여 뷰를 필터링할 수 없음을 발견했습니다. 이 문제의 원인은 무엇입니까?",
    "options": {
      "A": "Cost Explorer에서 태그를 사용하여 뷰를 필터링하려면 최소 30일이 필요합니다.",
      "B": "회사가 비용 할당을 위해 사용자 정의 태그를 활성화하지 않았습니다.",
      "C": "회사가 AWS Cost and Usage Report를 생성하지 않았습니다.",
      "D": "회사가 AWS Budgets에서 사용 예산을 생성하지 않았습니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 사용자 정의 태그 — 조직이 자체 정의한 메타데이터로, 비용 관리와 리소스 분류에 사용되지만 비용 할당 기능을 활성화해야 Cost Explorer에서 필터링 가능\n▸ Cost Allocation Tags — 사용자 정의 태그를 AWS 비용 시스템에 등록하는 프로세스로, 활성화 후 약 24시간 후부터 Cost Explorer에서 사용 가능\n\n【정답 포인트】\n▸ \"필터링할 수 없다\" — 태그는 리소스에 존재하지만 비용 할당 태그로 활성화되지 않음\n▸ 20일 경과 — AWS 정책상 타이밍 제한이 아니라 활성화 절차의 누락으로 발생\n▸ 해결책 → AWS Management Console의 Cost Management 섹션에서 해당 태그를 비용 할당 태그로 수동 활성화\n▸ 활성화 후 → 약 24시간 내에 Cost Explorer에서 필터링 가능해짐\n\n【오답 체크】\n(A) \"최소 30일\" — AWS는 태그 활성화 후 즉시(~24시간) 사용 가능하며, 30일 대기 정책은 없음\n(C) Cost and Usage Report 생성 — 비용 할당 태그 활성화와는 독립적인 기능\n(D) AWS Budgets 생성 — 비용 예산 설정으로 태그 필터링과 직접 관련 없음\n\n【시험 포인트】\n▸ Cost Allocation 프로세스 — 태그 정의 + 비용 할당 활성화 (2단계)\n▸ Cost Explorer 필터링 전제 조건 — 비용 할당 태그의 명시적 활성화 필수",
    "en_q": "A company applies user-defined tags to resources that are associated with the company's AWS workloads. Twenty days after applying the tags, the company notices that it cannot use the tags to filter views in the AWS Cost Explorer console. What is the reason for this issue?",
    "en_opts": {
      "A": "It takes at least 30 days to be able to use tags to filter views in Cost Explorer.",
      "B": "The company has not activated the user-defined tags for cost allocation.",
      "C": "The company has not created an AWS Cost and Usage Report.",
      "D": "The company has not created a usage budget in AWS Budgets."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369113-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 3,
    "question": "환경에는 100개의 Amazon EC2 Windows 인스턴스가 있습니다. CloudWatch 에이전트는 로그 파일을 캡처하기 위해 기본 구성 파일로 모든 EC2 인스턴스에 배포되어 실행 중입니다. 50개의 인스턴스에 있는 DHCP 로그 파일을 캡처해야 하는 새로운 요구 사항이 있습니다. 이 새로운 요구 사항을 충족하는 가장 운영상 효율적인 방법은 무엇입니까?",
    "options": {
      "A": "DHCP 로그를 캡처할 추가 CloudWatch 에이전트 구성 파일을 생성합니다. AWS Systems Manager Run Command를 사용하여 각 EC2 인스턴스에서 append-config 옵션으로 CloudWatch 에이전트를 다시 시작하여 추가 구성 파일을 적용합니다.",
      "B": "관리자 권한으로 각 EC2 인스턴스에 로그인합니다. 필요한 기본 로그 파일과 DHCP 로그 파일을 CloudWatch로 푸시하는 PowerShell 스크립트를 생성합니다.",
      "C": "각 EC2 인스턴스에서 CloudWatch 에이전트 구성 파일 마법사를 실행합니다. 기본 로그 파일이 포함되어 있는지 확인하고 마법사 생성 프로세스 중에 DHCP 로그 파일을 추가합니다.",
      "D": "각 EC2 인스턴스에서 CloudWatch 에이전트 구성 파일 마법사를 실행하고 고급 세부 수준을 선택합니다. 그러면 운영 체제 로그 파일이 캡처됩니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Systems Manager Run Command — AWS Systems Manager의 에이전트 기반 원격 명령 실행 서비스로, SSM Agent가 설치된 모든 인스턴스에서 작동\n▸ append-config — CloudWatch 에이전트의 설정 옵션으로, 기존 구성 파일에 새로운 설정을 추가하되 기존 설정은 유지\n▸ CloudWatch Agent Configuration — 로그, 메트릭, 트레이스 수집 설정을 정의하는 JSON 파일\n\n【정답 포인트】\n▸ \"가장 운영상 효율적\" → 50개 인스턴스에 대한 자동화된 배포 필요\n▸ \"DHCP 로그 추가\" → append-config로 기존 baseline 설정은 유지하면서 확장\n▸ Systems Manager Run Command → 태그 기반 대상 지정으로 정확한 50개 인스턴스만 선택\n▸ 워크플로우 → 추가 설정 파일 생성 → Run Command로 append 배포 → 에이전트 자동 재시작\n\n【오답 체크】\n(B) 수동 로그인과 PowerShell 스크립트 — 50개 인스턴스 개별 관리로 극도로 비효율적, 확장성 전무\n(C) CloudWatch 마법사 기반 접근 — 수동 프로세스로 50개 인스턴스 개별 구성 필요, 운영 오버헤드 극대화\n(D) 마법사의 고급 옵션 — 선택적 DHCP 로그만 캡처 불가, 모든 OS 시스템 로그를 일괄 캡처\n\n【시험 포인트】\n▸ CloudWatch Agent 부분 업데이트 — append-config의 목적 (전체 재구성 방지)\n▸ Run Command 기반 대규모 배포 자동화 — 수동 작업 제거",
    "en_q": "An environment consists of 100 Amazon EC2 Windows instances. The Amazon CloudWatch agent is deployed and running on all EC2 instances with a baseline configuration file to capture log files. There is a new requirement to capture the DHCP log files that exist on 50 of the instances. What is the MOST operationally efficient way to meet this new requirement?",
    "en_opts": {
      "A": "Create an additional CloudWatch agent configuration filo to capture the DHCP logs. Use the AWS Systems Manager Run Command to restart the CloudWatch agent on each EC2 instance with the append-config option to apply the additional configuration file.",
      "B": "Log in to each EC2 instance with administrator rights. Create a PowerShell script to push the needed baseline log files and DHCP log files to CloudWatch.",
      "C": "Run the CloudWatch agent configuration file wizard on each EC2 instance. Verify that the baseline log files are included and add the DHCP log files during the wizard creation process.",
      "D": "Run the CloudWatch agent configuration file wizard on each EC2 instance and select the advanced detail level. This will capture the operating system log files."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369114-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 4,
    "question": "회사는 Amazon S3 버킷에 백업을 저장합니다. 백업은 생성된 후 최소 3개월 동안 삭제되어야 합니다. CloudOps 엔지니어는 이 요구 사항을 충족하기 위해 어떻게 해야 합니까?",
    "options": {
      "A": "모든 사용자에 대해 s3:DeleteObject 작업을 거부하는 IAM 정책을 구성합니다. 객체가 작성된 지 3개월 후 정책을 제거합니다.",
      "B": "새 S3 버킷에서 호환성 모드의 S3 Object Lock을 활성화합니다. 3개월의 보존 기간으로 모든 백업을 새 S3 버킷에 배치합니다.",
      "C": "기존 S3 버킷에서 S3 버전 관리를 활성화합니다. 백업을 보호하도록 S3 수명 주기 규칙을 구성합니다.",
      "D": "새 S3 버킷에서 관리 모드의 S3 Object Lock을 활성화합니다. 3개월의 보존 기간으로 모든 백업을 새 S3 버킷에 배치합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 Object Lock — Amazon S3의 WORM(Write Once Read Many) 메커니즘으로, 객체 삭제 또는 변경 방지를 강제하는 기능\n▸ Compliance Mode — Object Lock의 강제 모드로, 설정된 보존 기간 동안 루트 사용자를 포함한 모든 계정에서 객체 삭제, 변경, 메타데이터 수정이 완전히 불가능\n▸ Governance Mode — Object Lock의 유연한 모드로, 특정 권한(s3:BypassGovernanceRetention) 보유자가 보존 기간을 단축하거나 삭제 가능\n\n【정답 포인트】\n▸ \"최소 3개월 삭제 불가\" → 규정 준수 요구사항으로 강제 메커니즘 필수\n▸ Compliance Mode 선택 → 3개월 보존 기간 동안 어떤 방법으로도 삭제 또는 회피 불가능\n▸ 새 S3 버킷 생성 → 기존 데이터에 영향 최소화, Object Lock은 버킷 레벨에서만 활성화 가능\n▸ 요구사항 충족 → 정기적 감사 시에도 백업의 무결성 보장\n\n【오답 체크】\n(A) IAM 정책 거부 → 권한 있는 관리자가 정책 변경으로 우회 가능, 규정 준수 강제 불가\n(C) 버전 관리와 수명 주기 규칙 → 실수로 최신 버전 삭제 시 복구 가능하지만, 의도적 삭제 방지 불가\n(D) Governance Mode → 관리자가 특정 권한으로 보존 기간을 단축하거나 삭제 가능, 엄격한 준수 불충분\n\n【시험 포인트】\n▸ Object Lock 모드 선택 — Compliance (강제) vs. Governance (유연) 차이\n▸ 규정 준수 요구사항 → Compliance Mode의 필요성 인식",
    "en_q": "A company is storing backups in an Amazon S3 bucket. The backups must not be deleted for at least 3 months after the backups are created. What should a CloudOps engineer do to meet this requirement?",
    "en_opts": {
      "A": "Configure an IAM policy that denies the s3:DeleteObject action for all users. Three months after an object is written, remove the policy.",
      "B": "Enable S3 Object Lock on a new S3 bucket in compliance mode. Place all backups in the new S3 bucket with a retention period of 3 months.",
      "C": "Enable S3 Versioning on the existing S3 bucket. Configure S3 Lifecycle rules to protect the backups.",
      "D": "Enable S3 Object Lock on a new S3 bucket in governance mode. Place all backups in the new S3 bucket with a retention period of 3 months."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369116-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 5,
    "question": "회사의 CloudOps 엔지니어가 애플리케이션 구성 요소 간의 통신 문제를 해결하고 있습니다. 회사는 VPC 흐름 로그를 Amazon CloudWatch Logs로 게시하도록 구성했습니다. 그러나 CloudWatch Logs에 로그가 없습니다. VPC 흐름 로그가 CloudWatch Logs로 게시되는 것을 막을 수 있는 것은 무엇입니까?",
    "options": {
      "A": "흐름 로그의 IAM 역할에 연결된 IAM 정책에 logs:CreateLogGroup 권한이 없습니다.",
      "B": "흐름 로그의 IAM 역할에 연결된 IAM 정책에 logs:CreateExportTask 권한이 없습니다.",
      "C": "VPC가 IPv6 주소로 구성되어 있습니다.",
      "D": "VPC가 AWS 계정의 다른 VPC와 피어링되어 있습니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ VPC Flow Logs — VPC 내 네트워크 인터페이스의 입출력 IP 트래픽 정보를 기록하는 VPC 기능으로, 보안 분석과 문제 해결에 활용\n▸ CloudWatch Logs 대상 — VPC Flow Logs를 CloudWatch 로그 그룹으로 전송하기 위한 설정\n▸ IAM 역할 권한 — Flow Logs 서비스가 CloudWatch Logs에 로그를 쓰기 위해 필요한 IAM 권한\n\n【정답 포인트】\n▸ \"로그가 없다\" → 로그 수집은 작동하지만 발행에 실패 (Flow Logs 자체는 정상 작동)\n▸ logs:CreateLogGroup — Flow Logs가 처음 실행할 때 자동으로 로그 그룹을 생성해야 하는 권한\n▸ logs:PutLogEvents — 로그 데이터를 로그 스트림에 기록하는 권한 (별도 필수)\n▸ 해결책 → Flow Logs의 IAM 역할에 logs:CreateLogGroup과 logs:PutLogEvents 권한 추가\n\n【오답 체크】\n(B) logs:CreateExportTask — 기존 로그를 S3로 내보내는 권한으로, 로그 발행 초기 단계와 무관\n(C) IPv6 구성 — VPC Flow Logs는 IPv4와 IPv6 모두 지원하며, IPv6 구성이 발행을 막지 않음\n(D) VPC 피어링 — VPC 간 연결 메커니즘으로 Flow Logs 발행과 관련 없음\n\n【시험 포인트】\n▸ VPC Flow Logs 권한 요구사항 — logs:CreateLogGroup (그룹 생성), logs:PutLogEvents (로그 기록)\n▸ 첫 실행 시 자동 생성 권한 필요 — 로그 그룹 사전 생성 불필요",
    "en_q": "A company's CloudOps engineer is troubleshooting communication between the components of an application. The company configured VPC flow logs to be published to Amazon CloudWatch Logs However, there are no logs in CloudWatch Logs. What could be blocking the VPC flow logs from being published to CloudWatch Logs?",
    "en_opts": {
      "A": "The IAM policy that is attached to the IAM role for the flow log is missing the logs:CreateLogGroup permission.",
      "B": "The IAM policy that is attached to the IAM role for the flow log is missing the logs:CreateExportTask permission.",
      "C": "The VPC is configured for IPv6 addresses.",
      "D": "The VPC is peered with another VPC in the AWS account"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369115-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 6,
    "question": "회사가 레거시 애플리케이션을 AWS로 마이그레이션합니다. 회사는 여러 가용 영역에 걸쳐 Amazon EC2 인스턴스에 레거시 애플리케이션을 수동으로 설치하고 구성합니다. 회사는 애플리케이션에 대해 Application Load Balancer(ALB)를 설정합니다. 회사는 대상 그룹 라우팅 알고리즘을 가중 무작위로 설정합니다. 애플리케이션에는 세션 선호도가 필요합니다. 회사가 애플리케이션을 배포한 후 사용자는 레거시 버전의 애플리케이션에 없던 임의의 애플리케이션 오류를 보고합니다. 대상 그룹 상태 검사는 실패를 표시하지 않습니다. 회사는 애플리케이션 오류를 해결해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "대상 그룹의 라우팅 알고리즘을 최소 미처리 요청으로 설정합니다.",
      "B": "대상 그룹에 대해 이상 탐지 완화를 켭니다.",
      "C": "대상 그룹의 교차 영역 로드 밸런싱 속성을 끕니다.",
      "D": "대상 그룹의 등록 취소 지연 속성을 증가시킵니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 세션 선호도(Session Affinity/Sticky Sessions) — 동일한 클라이언트의 모든 요청이 동일한 대상 인스턴스로 라우팅되도록 보장하는 기능\n▸ 가중 무작위 라우팅 — 각 대상에 가중치를 부여하여 무작위로 요청을 분배하는 알고리즘으로, 세션 유지를 보장하지 않음\n▸ 최소 미처리 요청(Least Outstanding Requests) — 미처리 요청 수가 가장 적은 대상으로 새 요청을 라우팅하는 알고리즘\n\n【정답 포인트】\n▸ \"애플리케이션 오류\" + \"상태 검사 정상\" → 라우팅 알고리즘 문제 (인스턴스 가용성 아님)\n▸ \"세션 선호도 필요\" → 사용자의 세션 상태가 특정 인스턴스에 저장됨\n▸ 가중 무작위는 요청마다 다른 인스턴스로 라우팅 → 세션 손실로 인한 오류 발생\n▸ 최소 미처리 요청 → 요청을 동일 인스턴스로 계속 라우팅하여 세션 유지\n\n【오답 체크】\n(B) 이상 탐지 완화(Anomaly Mitigation) — 트래픽 급증으로 인한 문제 제어로, 세션 문제와 무관\n(C) 교차 영역 로드 밸런싱 OFF — 가용 영역 간 트래픽 분배 방식 변경으로, 세션 문제 해결 불가\n(D) 등록 취소 지연(Deregistration Delay) 증가 — 연결 종료 시 기존 요청 처리 시간 조정으로 세션 유지와 무관\n\n【시험 포인트】\n▸ ALB 라우팅 알고리즘별 특성 — 세션 유지 가능 여부 평가\n▸ 세션 선호도 구현 방법 — 라우팅 알고리즘 선택이 핵심",
    "en_q": "A company is migrating a legacy application to AWS. The company manually installs and configures the legacy application on Amazon EC2 instances across multiple Availability Zones. The company sets up an Application Load Balancer (ALB) for the application. The company sets the target group routing algorithm to weighted random. The application requires session affinity. After the company deploys the application, users report random application errors that were not present in the legacy version of the application. The target group health checks do not show any failures. The company must resolve the application errors. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Set the routing algorithm of the target group to least outstanding requests.",
      "B": "Turn on anomaly mitigation for the target group.",
      "C": "Turn off the cross-zone load balancing attribute of the target group.",
      "D": "Increase the deregistration delay attribute of the target group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369117-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 7,
    "question": "회사는 특정 시점 복구, 역추적, 자동 백업이 활성화된 Amazon Aurora MySQL DB 클러스터를 사용 중입니다. CloudOps 엔지니어는 DB 클러스터를 이전 72시간 내의 특정 복구 지점으로 롤백할 수 있어야 합니다. 복구는 동일한 프로덕션 DB 클러스터에서 완료되어야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Aurora 복제본을 생성합니다. 복제본을 승격하여 기본 DB 인스턴스를 대체합니다.",
      "B": "자동 백업을 기존 DB 클러스터로 복구하는 AWS Lambda 함수를 생성합니다.",
      "C": "역추적을 사용하여 기존 DB 클러스터를 원하는 복구 지점으로 되감깁니다.",
      "D": "특정 시점 복구를 사용하여 기존 DB 클러스터를 원하는 복구 지점으로 복구합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Backtracking — Aurora MySQL의 고유 기능으로, 트랜잭션 로그를 사용하여 빠르게 과거 시점으로 되감기 (원본 DB 클러스터 유지)\n▸ 특정 시점 복구(Point-in-Time Recovery) — 자동 백업을 기반으로 특정 시점의 데이터베이스를 복구하되, 새로운 DB 클러스터 생성 필요\n▸ 보존 기간 — Backtracking은 설정된 보존 기간 내(기본 72시간, 최대 35일)의 모든 시점 복구 가능\n\n【정답 포인트】\n▸ \"동일한 프로덕션 DB 클러스터에 복구\" → Backtracking이 유일한 옵션 (기존 클러스터 내 시점 이동)\n▸ \"72시간 내\" → Backtracking의 기본 보존 기간 범위 내\n▸ \"빠른 복구\" → Backtracking은 트랜잭션 로그 재생으로 특정 시점 복구보다 빠름\n▸ \"즉시 재사용\" → 새 클러스터 생성 불필요로 프로덕션 환경에 빠르게 배포\n\n【오답 체크】\n(A) Aurora 복제본 승격 — 새로운 기본 인스턴스 생성으로 기존 클러스터 롤백 아님\n(B) Lambda로 자동 백업 복구 — 자동 백업 기반 복구는 새 클러스터 생성 필수\n(D) 특정 시점 복구 — 백업 기반이므로 새로운 DB 클러스터 생성 필수, \"동일 클러스터\" 조건 불충족\n\n【시험 포인트】\n▸ Aurora Backtracking — 동일 클러스터 내 시점 이동의 유일한 방법\n▸ 복구 방식의 차이 — 제자리 복구 vs. 신규 클러스터 생성",
    "en_q": "A company is using an Amazon Aurora MySQL DB cluster that has point-in-time recovery, backtracking, and automatic backup enabled. A CloudOps engineer needs to be able to roll back the DB cluster to a specific recovery point within the previous 72 hours. Restores must be completed in the same production DB cluster. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an Aurora Replica. Promote the replica to replace the primary DB instance.",
      "B": "Create an AWS Lambda function to restore an automatic backup to the existing DB cluster.",
      "C": "Use backtracking to rewind the existing DB cluster to the desired recovery point.",
      "D": "Use point-in-time recovery to restore the existing DB duster to the desired recovery point."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369118-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 8,
    "question": "CloudOps 엔지니어가 실패한 AWS CloudFormation 스택 생성 문제를 해결하고 있습니다. CloudOps 엔지니어가 문제를 식별하기 전에 스택과 그 리소스가 삭제됩니다. 향후 배포의 경우 CloudOps 엔지니어는 CloudFormation이 성공적으로 생성한 리소스를 보존해야 합니다. CloudOps 엔지니어가 이 요구 사항을 충족하기 위해 어떻게 해야 합니까?",
    "options": {
      "A": "스택 생성 중 DisableRollback 파라미터의 값을 False로 설정합니다.",
      "B": "스택 생성 중 OnFailure 파라미터의 값을 DO_NOTHING으로 설정합니다.",
      "C": "스택 생성 중 DO_NOTHING의 롤백 트리거가 있는 롤백 구성을 지정합니다.",
      "D": "스택 생성 중 OnFailure 파라미터의 값을 ROLLBACK으로 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Rollback — CloudFormation 스택 생성 실패 시 생성된 리소스를 자동으로 삭제하는 기본 동작으로, 부분 생성된 스택을 정리\n▸ OnFailure 파라미터 — CloudFormation 스택 생성 시 실패 발생 시 수행할 작업을 지정하는 파라미터 (ROLLBACK, DO_NOTHING, DELETE 등)\n▸ DO_NOTHING — 스택 생성 실패 시에도 성공적으로 생성된 리소스를 유지하여 나중에 분석 가능하게 함\n\n【정답 포인트】\n▸ \"리소스 보존\" → DO_NOTHING 파라미터로 자동 삭제 방지\n▸ \"향후 배포\" → 실패한 스택의 리소스를 분석 대상으로 보존\n▸ OnFailure=DO_NOTHING → CloudFormation이 실패했지만 생성된 부분적 리소스는 그대로 유지\n▸ 문제 해결 → 보존된 리소스를 통해 실패 원인 분석 가능, 수동 조정 가능\n\n【오답 체크】\n(A) DisableRollback=False — 이전 방식(Deprecated)이며, OnFailure 파라미터가 현재의 모던 접근법\n(C) Rollback trigger DO_NOTHING — CloudFormation에 이러한 정책 구조는 존재하지 않음, OnFailure와 혼동\n(D) OnFailure=ROLLBACK — 기본값이며, 리소스 보존 기능 없음 (설명과 정반대)\n\n【시험 포인트】\n▸ CloudFormation 스택 실패 처리 옵션 — OnFailure 파라미터의 역할과 값\n▸ 개발/테스트 환경에서의 리소스 보존 전략",
    "en_q": "A CloudOps engineer is troubleshooting an AWS CloudFormation stack creation that failed. Before the CloudOps engineer can identify the problem, the stack and its resources are deleted. For future deployments, the CloudOps engineer must preserve any resources that CloudFormation successfully created. What should the CloudOps engineer do to meet this requirement?",
    "en_opts": {
      "A": "Set the value of the DisableRollback parameter to False during stack creation.",
      "B": "Set the value of the OnFailure parameter to DO_NOTHING during stack creation.",
      "C": "Specify a rollback configuration that has a rollback trigger of DO_NOTHING during stack creation",
      "D": "Set the value of the OnFailure parameter to ROLLBACK during stack creation."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369119-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 9,
    "question": "회사는 Elastic Load Balancing(ELB) 로드 밸런서 뒤의 Amazon EC2 인스턴스에서 공개 웹 애플리케이션을 실행하려고 합니다. 회사의 보안 팀은 AWS Certificate Manager(ACM) 인증서를 사용하여 웹 사이트를 보호하려고 합니다. 로드 밸런서는 HTTP 요청을 HTTPS로 자동으로 리디렉션해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "포트 80에서 하나의 HTTPS 리스너가 있는 Application Load Balancer를 생성합니다. 리스너 포트 80에 SSL/TLS 인증서를 연결합니다. HTTP에서 HTTPS로 요청을 리디렉션하는 규칙을 생성합니다.",
      "B": "포트 80의 HTTP 리스너 1개와 포트 443의 HTTPS 프로토콜 리스너 1개가 있는 Application Load Balancer를 생성합니다. 리스너 포트 443에 SSL/TLS 인증서를 연결합니다. 포트 80에서 포트 443으로 요청을 리디렉션하는 규칙을 생성합니다.",
      "C": "포트 80과 포트 443의 TCP 리스너 2개가 있는 Application Load Balancer를 생성합니다. 리스너 포트 443에 SSL/TLS 인증서를 연결합니다. 포트 80에서 포트 443으로 요청을 리디렉션하는 규칙을 생성합니다.",
      "D": "포트 80과 포트 443의 TCP 리스너 2개가 있는 Network Load Balancer를 생성합니다. 리스너 포트 443에 SSL/TLS 인증서를 연결합니다. 포트 80에서 포트 443으로 요청을 리디렉션하는 규칙을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Application Load Balancer(ALB) — OSI 계층 7(애플리케이션 계층)에서 작동하며, HTTP/HTTPS 리디렉션, 호스트 기반 라우팅, 경로 기반 라우팅 등 지원\n▸ HTTPS 리스너 — SSL/TLS 인증서를 사용하여 암호화된 트래픽(HTTPS, 포트 443)을 수신하고 처리\n▸ 리스너 규칙 — ALB의 리스너가 수신한 요청을 어떻게 대상으로 라우팅할지 정의 (예: HTTP→HTTPS 리디렉션)\n\n【정답 포인트】\n▸ \"HTTP 자동 리디렉션\" → ALB의 리스너 규칙으로 구현 가능 (NLB 불가)\n▸ \"두 개의 리스너\" → 포트 80(HTTP 수신) + 포트 443(HTTPS 수신) 필수\n▸ \"인증서 연결\" → HTTPS 리스너(포트 443)에만 ACM 인증서 연결\n▸ \"리디렉션 규칙\" → 포트 80 리스너에서 포트 443으로 요청을 리디렉션하는 규칙 생성\n\n【오답 체크】\n(A) 포트 80에 HTTPS 리스너는 불가능 (포트 80은 HTTP, 포트 443은 HTTPS의 표준)\n(C) TCP 리스너는 계층 4(전송 계층)로 작동하며, HTTP/HTTPS 리디렉션 규칙 생성 불가\n(D) Network Load Balancer(NLB)는 계층 4에서만 작동하여 HTTPS 리디렉션 규칙 미지원\n\n【시험 포인트】\n▸ ALB vs. NLB — 프로토콜 계층과 기능 차이 이해\n▸ HTTP → HTTPS 리디렉션 구현 — 리스너와 규칙의 조합",
    "en_q": "A company plans to run a public web application on Amazon EC2 instances behind an Elastic Load Balancing (ELB) load balancer. The company’s security team wants to protect the website by using AWS Certificate Manager (ACM) certificates. The load balancer must automatically redirect any HTTP requests to HTTPS. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an Application Load Balancer that has one HTTPS listener on port 80. Attach an SSL/TLS certificate to listener port 80. Create a rule to redirect requests from HTTP to HTTPS.",
      "B": "Create an Application Load Balancer that has one HTTP listener on port 80 and one HTTPS protocol listener on port 443. Attach an SSL/TLS certificate to listener port 443. Create a rule to redirect requests from port 80 to port 443.",
      "C": "Create an Application Load Balancer that has two TCP listeners on port 80 and port 443. Attach an SSL/TLS certificate to listener port 443. Create a rule to redirect requests from port 80 to port 443.",
      "D": "Create a Network Load Balancer that has two TCP listeners on port 80 and port 443. Attach an SSL/TLS certificate to listener port 443. Create a rule to redirect requests from port 80 to port 443."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369120-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 10,
    "question": "회사는 AWS Organizations를 사용하여 AWS 계정 집합을 관리합니다. 회사는 조직에서 조직 단위(OUs)를 설정했습니다. 애플리케이션 OU는 다양한 애플리케이션을 지원합니다. CloudOps 엔지니어는 CostCenter-Project 태그가 없는 Amazon EC2 인스턴스를 애플리케이션 OU의 모든 계정에 시작하는 것을 방지해야 합니다. 제한은 애플리케이션 OU의 계정에만 적용되어야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "CostCenter-Project 태그가 있을 때 ec2:RunInstances 작업을 허용하는 정책이 있는 IAM 그룹을 생성합니다. 애플리케이션 계정에 액세스해야 하는 모든 IAM 사용자를 IAM 그룹에 배치합니다.",
      "B": "CostCenter-Project 태그가 없을 때 ec2:RunInstances 작업을 거부하는 서비스 제어 정책(SCP)을 생성합니다. SCP를 애플리케이션 OU에 연결합니다.",
      "C": "CostCenter-Project 태그가 있을 때 ec2:RunInstances 작업을 허용하는 정책이 있는 IAM 역할을 생성합니다. IAM 역할을 애플리케이션 OU 계정의 IAM 사용자에게 연결합니다.",
      "D": "CostCenter-Project 태그가 없을 때 ec2:RunInstances 작업을 거부하는 서비스 제어 정책(SCP)을 생성합니다. SCP를 루트 OU에 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 서비스 제어 정책(Service Control Policy, SCP) — AWS Organizations 레벨에서 계정의 권한을 제한하는 정책으로, 명시적 허용도 거부 가능한 강력한 접근 제어\n▸ 태그 기반 조건 — SCP 정책의 조건절(Condition)에서 특정 태그의 유무를 기준으로 접근 제어\n▸ 조직 단위(OU) — 계정을 그룹화하는 조직 구조로, SCP를 선택적으로 적용하는 단위\n\n【정답 포인트】\n▸ \"특정 OU에만 적용\" → SCP를 그 OU에만 연결하여 선택적 제어\n▸ \"CostCenter-Project 태그 없음 → ec2:RunInstances 거부\" → SCP의 조건 기반 접근 제어\n▸ OU 레벨 적용 → 애플리케이션 OU 계정에만 제한 적용, 다른 OU는 영향 없음\n▸ 정책 구조 → Deny 효과 + 태그 부재 조건 + RunInstances 액션 결합\n\n【오답 체크】\n(A) IAM 그룹 → 단일 계정 내 사용자 그룹 관리로, OU 레벨 선택성 불가능\n(C) IAM 역할 → 개별 계정 범위에서만 적용 가능하며, 조직 전체 계정에 적용 불가\n(D) 루트 OU에 SCP → 전체 조직에 영향을 미치므로 \"애플리케이션 OU만\" 조건 불충족\n\n【시험 포인트】\n▸ SCP의 범위 — Organizations 레벨 정책으로 OU 또는 계정 선택 적용 가능\n▸ IAM vs. SCP — 단일 계정(IAM) vs. 조직 전체(SCP) 제어 차이",
    "en_q": "A company uses AWS Organizations to manage a set of AWS accounts. The company has set up organizational units (OUs) in the organization. An application OU supports various applications. A CloudOps engineer must prevent users from launching Amazon EC2 instances that do not have a CostCenter-Project tag into any account in the application OU. The restriction must apply only to accounts in the application OU. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an IAM group that has a policy that allows the ec2:RunInstances action when the CostCenter-Project tag is present. Place all IAM users who need access to the application accounts in the IAM group.",
      "B": "Create a service control policy (SCP) that denies the oc2:RunInstances action when the CostCenter-Project tag is missing. Attach the SCP to the application OU.",
      "C": "Create an IAM role that has a policy that allows the oc2:RunInstances action when the CostCenter-Project tag is present. Attach the IAM role to the IAM users that are in the application OU accounts.",
      "D": "Create a service control policy (SCP) that denies the ec2:RunInstances action when the CostCenter-Project tag is missing. Attach the SCP to the root OU."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369338-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 11,
    "question": "회사는 300개 이상의 Linux 기반 인스턴스에서 비즈니스 애플리케이션을 실행합니다. 각 인스턴스에는 AWS Systems Manager Agent(SSM Agent)가 설치되어 있습니다. 회사는 향후 인스턴스 수가 증가할 것으로 예상합니다. 모든 비즈니스 애플리케이션 인스턴스에는 동일한 사용자 정의 태그가 있습니다. CloudOps 엔지니어는 모든 비즈니스 애플리케이션 인스턴스에서 명령을 실행하여 프라이빗 리포지토리에서 패키지를 다운로드하고 설치하려고 합니다. 리포지토리에 부담을 주지 않기 위해 CloudOps 엔지니어는 한 번에 최대 30개의 다운로드만 발생하도록 보장하려고 합니다. 이 요구 사항을 가장 운영상 효율적인 방식으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "보조 태그를 사용하여 각 30개 인스턴스의 10개 배치를 생성합니다. Systems Manager Run Command 문서를 사용하여 패키지를 다운로드하고 설치합니다. Run Command 문서의 일부로 보조 태그를 사용하여 대상을 지정합니다. 각 배치를 한 번 실행합니다.",
      "B": "사용자 정의 태그가 있는 인스턴스 ID 목록을 로드하는 Systems Manager Run Command 문서를 자동으로 실행하는 AWS Lambda 함수를 사용합니다. Lambda 함수에 대해 예약된 동시성을 30으로 설정합니다.",
      "C": "Systems Manager Run Command 문서를 사용하여 패키지를 다운로드하고 설치합니다. 속도 제어를 사용하여 동시성을 30으로 설정합니다. Run Command 문서의 일부로 사용자 정의 태그를 사용하여 대상을 지정합니다.",
      "D": "사용자 정의 태그가 있는 인스턴스 ID 목록을 읽는 Systems Manager Run Command 문서를 자동으로 실행하는 AWS Step Functions의 병렬 워크플로우 상태를 사용합니다. 병렬 상태의 수를 30으로 설정합니다. Step Functions 워크플로우를 10회 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 속도 제어(Rate Control) — Systems Manager Run Command의 고급 기능으로, 동시에 명령을 실행할 인스턴스의 최대 수를 제한하여 대역폭/리소스 보호\n▸ 사용자 정의 태그 기반 대상 지정 — 300+ 인스턴스 중 동일한 태그를 가진 인스턴스만 선택적으로 명령 실행\n▸ Systems Manager Run Command — AWS Systems Manager의 핵심 기능으로, SSM Agent가 설치된 모든 인스턴스에서 원격으로 명령 또는 스크립트 실행\n\n【정답 포인트】\n▸ \"최대 30개 동시 다운로드\" → 속도 제어를 30으로 설정하여 리포지토리 부하 제한\n▸ \"대규모 인스턴스(300+)\" → 태그 기반 대상 지정으로 모든 비즈니스 애플리케이션 인스턴스 자동 선택\n▸ \"가장 효율적\" → Run Command 기본 기능(태그 기반 + 속도 제어)으로 추가 구성 최소\n▸ 워크플로우 → Run Command 문서 작성 → 태그로 대상 지정 → 속도 제어 30으로 설정 → 실행\n\n【오답 체크】\n(A) 보조 태그로 10개 배치 생성 → 배치 관리 로직 수동 구성으로 비효율적, 추후 유지보수 부담\n(B) Lambda 예약 동시성 30 → Lambda 함수의 동시 실행 제한이지, Run Command 속도 제어와 무관\n(D) Step Functions 병렬 상태 30 → 워크플로우 복잡도 증가로 Systems Manager 기본 기능 무시\n\n【시험 포인트】\n▸ Systems Manager Run Command 최적화 — 속도 제어의 목적과 활용\n▸ 태그 기반 대상 지정 — 확장성과 운영 효율성 달성",
    "en_q": "A company runs a business application on more than 300 Linux-based instances. Each instance has the AWS Systems Manager Agent (SSM Agent) installed. The company expects the number of instances to grow in the future. All business application instances have the same user-defined tag. A CloudOps engineer wants to run a command on all the business application instances to download and install a package from a private repository. To avoid overwhelming the repository, the CloudOps engineer wants to ensure that no more than 30 downloads occur at one time. Which solution will meet this requirement in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Use a secondary tag to create 10 batches of 30 instances each. Use a Systems Manager Run Command document to download and install the package. Specify the target as part of the Run Command document by using the secondary tag. Run each batch one time.",
      "B": "Use an AWS Lambda function to automatically run a Systems Manager Run Command document that roads a list of instance IDs that have the user-defined tag. Set reserved concurrency for the Lambda function to 30.",
      "C": "Use a Systems Manager Run Command document to download and install the package. Use rate control to set concurrency to 30. Specify the target by using the user-defined tag as part of the Run Command document.",
      "D": "Use a parallel workflow state in AWS Step Functions to automatically run a Systems Manager Run Command document that reads a list of instance IDs that have the user-defined tag. Set the number of parallel states to 30. Run the Step Functions workflow 10 times."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369121-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 12,
    "question": "회사는 복원력을 제공하기 위해 여러 AWS 리전에 걸쳐 지연 시간 기반 라우팅으로 Amazon Route 53을 사용합니다. 회사는 Route 53과 지연 시간 기반 라우팅을 사용하여 트래픽을 가장 가까운 리전으로 보냅니다. 각 리전 내에서 가중 A 레코드는 여러 가용 영역에 걸쳐 트래픽을 분배합니다. 최근 업데이트 중에 일부 가용 영역 엔드포인트가 비정상 상태가 되었습니다. Route 53은 비정상 엔드포인트로의 트래픽 라우팅을 계속했습니다. 회사는 향후 이 문제가 발생하는 것을 방지해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "최근 업데이트 중에 트래픽을 수신한 각 가중 레코드에 대해 Route 53 상태 검사를 추가합니다.",
      "B": "업데이트 중에 트래픽이 이동해야 하는 리전에서 Route 53 레코드의 가중치를 증가시킵니다.",
      "C": "모든 레코드를 다시 구성하여 모든 리전에서 지연 시간 기반 라우팅을 균일하게 사용합니다.",
      "D": "지연 시간 기반 라우팅의 TTL 값을 줄여 변경을 더 빠르게 감지합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Route 53 지연 시간 기반 라우팅 — 사용자의 위치를 기반으로 지연 시간이 가장 낮은 AWS 리전으로 트래픽 전송\n▸ 건강 검사(Health Check) — Route 53이 리소스의 상태를 능동적으로 모니터링하여, 비정상 리소스로의 트래픽 라우팅을 차단\n▸ 가중 라우팅(Weighted Routing) — 각 리전 내에서 여러 가용 영역에 부여된 가중치 비율에 따라 트래픽 분배\n\n【정답 포인트】\n▸ \"비정상 엔드포인트로 계속 라우팅\" → 건강 검사 부재로 Route 53이 상태를 감지하지 못함\n▸ \"각 가중 레코드에 건강 검사 추가\" → Route 53이 각 가용 영역 엔드포인트의 상태를 모니터링\n▸ \"비정상 감지 후 자동 제외\" → Route 53이 가중 라우팅 대상에서 비정상 엔드포인트 제거\n▸ 복구 메커니즘 → 엔드포인트 정상화 시 자동으로 라우팅 대상에 복귀\n\n【오답 체크】\n(B) 가중치 조정 → 정적 설정 변경으로, 실시간 상태 감지 불가능\n(C) 지연 시간 기반만 사용 → 문제의 근본 원인은 건강 검사 부재 (지연 시간 라우팅과 무관)\n(D) TTL 감소 → 클라이언트 DNS 캐싱 단계의 문제로, Route 53 레벨 상태 감지와 무관\n\n【시험 포인트】\n▸ Route 53 라우팅 정책과 건강 검사의 관계 — 정적 라우팅 vs. 동적 모니터링\n▸ 각 라우팅 정책에 건강 검사 적용의 중요성",
    "en_q": "A company uses Amazon Route 53 with latency-based routing across multiple AWS Regions to provide resiliency. The company uses Route 53 with latency-based routing to direct traffic to the nearest Region. Within each Region, weighted A records distribute traffic across multiple Availability Zones. During a recent update, some Availability Zone endpoints became unhealthy. Route 53 continued to route traffic to the unhealthy endpoints. The company must prevent this issue from occurring in the future. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Add a Route 53 health check for each of the weighted records that received traffic during the recent update.",
      "B": "Increase the weight of Route 53 records in the Region where traffic must go during updates.",
      "C": "Reconfigure all records to use latency-based routing across all Regions uniformly.",
      "D": "Reduce the TTL value for latency-based routing to detect changes more quickly."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369122-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 13,
    "question": "회사는 AWS 계정에서 시작된 모든 Amazon EC2 Windows 인스턴스에 타사 에이전트가 설치되어 있는지 확인해야 합니다. 회사는 AWS Systems Manager를 사용하고 Windows 인스턴스에 적절하게 태그가 지정되어 있습니다. 회사는 업데이트가 이용 가능해질 때 타사 에이전트에 대한 정기적인 업데이트를 배포해야 합니다. 최소 운영 노력으로 이 요구 사항을 충족하는 단계의 조합은 무엇입니까? (2가지 선택)",
    "options": {
      "A": "타사 에이전트에 대한 Systems Manager Distributor 패키지를 생성합니다.",
      "B": "Windows 태그 값을 포함하는 Systems Manager OpsItem을 생성합니다. Systems Manager 인벤토리를 OpsItem에 연결합니다.",
      "C": "AWS Lambda 함수를 생성합니다. 각 인스턴스에 로그인하고 필요에 따라 타사 에이전트를 설치하거나 업데이트하도록 Lambda 함수를 프로그래밍합니다.",
      "D": "AWS-RunRemoteScript 문서를 실행하는 Systems Manager State Manager 연관을 생성합니다. 타사 에이전트 패키지의 세부 정보를 입력합니다.",
      "E": "AWS-ConfigureAWSPackage 문서를 실행하는 Systems Manager State Manager 연관을 생성합니다. 타사 에이전트 패키지의 세부 정보를 입력합니다. Windows에 대한 적절한 태그 값을 기반으로 인스턴스 태그를 지정합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ Systems Manager Distributor — AWS 서비스 및 타사 패키지의 중앙화된 배포 및 버전 관리 시스템으로, 패키지 메타데이터와 배포 스크립트 포함\n▸ State Manager — AWS Systems Manager의 자동화 기능으로, 정기적으로 인스턴스의 구성을 관리하고 AWS-ConfigureAWSPackage 문서로 패키지 관리\n▸ AWS-ConfigureAWSPackage — State Manager에서 사용하는 관리형 문서로, 패키지 설치, 업데이트, 제거를 자동화\n\n【정답 포인트】\n▸ \"타사 에이전트 배포\" → Distributor 패키지로 중앙화된 배포 관리\n▸ \"정기적 업데이트\" → State Manager 연관(Association)으로 자동 스케줄링 및 적용\n▸ \"최소 운영 노력\" → Distributor(배포) + State Manager(자동화) 조합으로 수동 작업 제거\n▸ 워크플로우 → Distributor 패키지 생성 → State Manager 연관 설정 → 태그 기반 대상 지정 → 자동 정기 배포\n\n【오답 체크】\n(B) OpsItem — 운영 이슈 추적 및 협업 도구로, 패키지 배포 메커니즘이 아님\n(C) Lambda 함수 → 비표준 접근으로, Systems Manager 기본 기능(Distributor + State Manager) 무시\n(D) AWS-RunRemoteScript → 스크립트만 실행 가능하며, 패키지 버전 관리와 정기 배포 자동화 기능 부족\n\n【시험 포인트】\n▸ Systems Manager 서비스 조합 — Distributor(중앙 배포) + State Manager(자동 관리)\n▸ 관리형 문서 선택 — AWS-ConfigureAWSPackage의 역할과 용도",
    "en_q": "A company must ensure that all Amazon EC2 Windows instances that are launched in an AWS account have a third-party agent installed. The company uses AWS Systems Manager, and the Windows instances are tagged appropriately. The company must deploy periodic updates to the third-party agent when the updates become available. Which combination of steps will meet these requirements with the LEAST operational effort? (Choose two.)",
    "en_opts": {
      "A": "Create a Systems Manager Distributor package for the third-party agent.",
      "B": "Create a Systems Manager OpsItem that includes the tag value for Windows. Attach the Systems Manager inventory to the OpsItem.",
      "C": "Create an AWS Lambda function. Program the Lambda function to log in to each instance and to install or update the third-party agent as needed.",
      "D": "Create a Systems Manager State Manager association to run the AWS-RunRemoteScript document Populate the details of the third-party agent package.",
      "E": "Create a Systems Manager State Manager association to run the AWS-ConfigureAWSPackage document. Populate the details of the third-party agent package. Specify instance tags based on the appropriate tag value for Windows."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369123-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 14,
    "question": "회사는 두 AWS 리전에 사용자 지정 Amazon Machine Images(AMIs)에서 Amazon EC2 인스턴스를 배포했습니다. 회사는 모든 인스턴스를 AWS Systems Manager에 등록했습니다. 회사는 일부 인스턴스의 운영 체제에 중대한 제로데이 악용이 있음을 발견했습니다. 그러나 회사는 영향을 받는 인스턴스가 몇 개인지 알지 못합니다. CloudOps 엔지니어는 영향을 받는 EC2 인스턴스에 대한 운영 체제 패치를 배포하는 솔루션을 구현해야 합니다. 최소 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Systems Manager Patch Manager에서 패치 기준선을 정의합니다. Patch Manager 스캔을 사용하여 영향을 받는 인스턴스를 식별합니다. 각 리전에서 Patch Now 옵션을 사용하여 영향을 받는 인스턴스를 업데이트합니다.",
      "B": "AWS Config를 사용하여 영향을 받는 인스턴스를 식별합니다. Systems Manager Patch Manager에서 패치 기준선을 정의합니다. Patch Manager에서 Patch Now 옵션을 사용하여 영향을 받는 인스턴스를 업데이트합니다.",
      "C": "Systems Manager Compliance 이벤트에 반응하는 Amazon EventBridge 규칙을 생성합니다. EventBridge 규칙을 구성하여 영향을 받는 인스턴스에서 패치 기준선을 실행합니다.",
      "D": "AWS Config를 사용하여 영향을 받는 인스턴스를 식별합니다. 원하는 패치로 기존 EC2 AMIs를 업데이트합니다. 새 AMIs에서 인스턴스를 수동으로 시작하여 두 리전의 영향을 받는 인스턴스를 대체합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Systems Manager Patch Manager — AWS Systems Manager의 패치 관리 서비스로, 패치 기준선 정의, 규정 준수 평가, 패치 배포를 통합 관리\n▸ 패치 기준선 스캔(Scan) — 패치 호환성을 미리 확인하는 작업으로, 실제 패치 적용 없이 영향받는 인스턴스 식별\n▸ Patch Now — 스캔 완료 후 확인된 영향 인스턴스에 즉시 패치를 배포하는 옵션\n\n【정답 포인트】\n▸ \"영향 인스턴스 수 불명확\" → Patch Manager의 Scan 작업으로 사전 식별\n▸ \"제로데이 악용 패치\" → Patch Manager는 OS 수준 보안 패치 배포 가능\n▸ \"최소 운영 오버헤드\" → Patch Manager 기본 기능(Scan → Patch Now)만으로 충분, 추가 자동화 불필요\n▸ 워크플로우 → 패치 기준선 정의 → Scan 실행 → 영향 인스턴스 확인 → 각 리전에서 Patch Now 실행\n\n【오답 체크】\n(B) AWS Config → 규정 준수 평가 및 추적 기능으로, 패치 배포 기능 없음\n(C) EventBridge + Patch Manager → 자동 트리거 추가로 복잡도 증가 (Patch Manager 기본 기능으로 충분)\n(D) AMI 수동 갱신 → OS 패치 적용 후 새 AMI 생성, 인스턴스 교체 필요로 운영 오버헤드 극대화\n\n【시험 포인트】\n▸ Systems Manager Patch Manager 효율성 — Scan을 통한 영향 범위 사전 파악\n▸ 정기적 패치 배포 vs. 비상 패치 배포 → Patch Manager의 유연성",
    "en_q": "A company has deployed Amazon EC2 instances from custom Amazon Machine Images (AMIs) in two AWS Regions. The company registered all the instances with AWS Systems Manager. The company discovers that the operating system on some instances has a significant zero-day exploit. However, the company does not know how many instances are affected. A CloudOps engineer must implement a solution to deploy operating system patches for the affected EC2 instances. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Define a patch baseline in Systems Manager Patch Manager. Use a Patch Manager scan to identify the affected instances. Use the Patch Now option in each Region to update the affected instances.",
      "B": "Use AWS Config to identify the affected instances. Define a patch baseline in Systems Manager Patch Manager. Use the Patch Now option in Patch Manager to update the affected instances.",
      "C": "Create an Amazon EventBridge rule to react to Systems Manager Compliance events. Configure the EventBridge rule to run a patch baseline on the affected instances.",
      "D": "Use AWS Config to identify the affected instances. Update the existing EC2 AMIs with the desired patch Manually launch instances from the new AMIs to replace the affected instances in both Regions."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369124-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 15,
    "question": "한 회사가 Amazon EC2 인스턴스에서 FTP 서버를 호스팅합니다. 회사의 AWS 환경에서 AWS Security Hub는 보안 그룹에서 FTP 포트가 공개되었기 때문에 EC2 인스턴스에 대한 문제를 Amazon EventBridge로 전송합니다. CloudOps 엔지니어는 Security Hub 문제와 유사한 노출된 포트 문제를 자동으로 해결하려고 합니다. CloudOps 엔지니어는 이벤트 기반 접근 방식을 사용하고 싶어 합니다. 어떤 솔루션이 이러한 요구사항을 충족할까요?",
    "options": {
      "A": "기존 EventBridge 이벤트를 구성하여 노출된 포트가 있는 EC2 인스턴스를 중지합니다.",
      "B": "FTP 서버용 크론 작업을 만들어 AWS Lambda 함수를 호출합니다. Lambda 함수를 구성하여 식별된 EC2 인스턴스의 보안 그룹을 수정하고 공개 액세스를 허용하는 인스턴스를 제거합니다.",
      "C": "FTP 서버용 크론 작업을 만들어 AWS Lambda 함수를 호출합니다. Lambda 함수를 구성하여 서버를 FTP 대신 SFTP를 사용하도록 수정합니다.",
      "D": "기존 EventBridge 이벤트를 구성하여 AWS Lambda 함수를 호출합니다. 함수를 구성하여 공개 액세스를 허용하는 보안 그룹 규칙을 제거합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ EventBridge—AWS 이벤트 기반 서비스, Security Hub 문제를 감지하여 실시간 트리거\n▸ Lambda—서버리스 컴퓨팅으로 자동 실행\n▸ Security Group Rule—보안 그룹의 특정 규칙만 제거\n\n【정답 포인트】\n▸ \"이벤트 기반\"→EventBridge로 Security Hub 문제를 캡처\n▸ \"자동 해결\"→Lambda 함수로 보안 그룹 규칙만 제거 (인스턴스 중지 X)\n▸ \"유사한 노출된 포트\"→이벤트 패턴으로 모든 노출 문제에 자동 대응\n\n【오답 체크】\n(A) 인스턴스 중지는 재수정이 필요하며, 근본적인 보안 규칙 제거가 아님 (60자)\n(B) 크론 작업은 스케줄 기반이지 이벤트 기반이 아니며, 인스턴스 제거는 과격함 (80자)\n(C) 크론 작업은 스케줄 기반이며, 모든 노출된 포트(HTTP, RDP 등)에 대응 불가 (70자)\n\n【시험 포인트】\n▸ \"이벤트 기반\" vs \"스케줄 기반\" 구분 (EventBridge vs cron)\n▸ Security Hub 문제→자동 트리거 패턴 이해\n▸ \"노출된 포트 제거\"의 가장 간단한 방법 = 보안 그룹 규칙 삭제\n▸ 함정: B/C는 크론 작업 사용으로 스케줄 기반이므로 탈락",
    "en_q": "A company hosts an FTP server on Amazon EC2 instances. In the company's AWS environment, AWS Security Hub sends findings for the EC2 instances to Amazon EventBridge because the FTP port has become publicly exposed in the security groups that are attached to the instances. A CloudOps engineer wants an automated solution to remediate the Security Hub finding and any similar exposed port findings. The CloudOps engineer wants to use an event-driven approach. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure the existing EventBridge event to stop the EC2 instances that have the exposed port.",
      "B": "Create a cron job for the FTP server to invoke an AWS Lambda function. Configure the Lambda function to modify the security group of the identified EC2 instances and to remove the instances that allow public access.",
      "C": "Create a cron job for the FTP server that invokes an AWS Lambda function. Configure the Lambda function to modify the server to use SFTP instead of FTP.",
      "D": "Configure the existing EventBridge event to invoke an AWS Lambda function. Configure the function to remove the security group rule that allows public access."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369125-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 16,
    "question": "한 회사가 여러 고성능 컴퓨팅(HPC) 가상 머신(VM)을 Amazon EC2 인스턴스로 AWS로 마이그레이션할 계획입니다. CloudOps 엔지니어는 이 배포를 위한 배치 그룹을 식별해야 합니다. 전략은 네트워크 지연을 최소화하고 HPC VM 간 네트워크 처리량을 최대화해야 합니다. CloudOps 엔지니어가 이러한 요구사항을 충족하려면 어떤 전략을 선택해야 할까요?",
    "options": {
      "A": "하나의 가용 영역에 있는 클러스터 배치 그룹에 인스턴스를 배포합니다.",
      "B": "두 개의 가용 영역에 있는 파티션 배치 그룹에 인스턴스를 배포합니다.",
      "C": "하나의 가용 영역에 있는 파티션 배치 그룹에 인스턴스를 배포합니다.",
      "D": "두 개의 가용 영역에 있는 스프레드 배치 그룹에 인스턴스를 배포합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Cluster Placement Group—단일 AZ 내 인스턴스 모음, 최저 지연시간 & 최고 처리량\n▸ Partition Placement Group—분산된 파티션 그룹, 대규모 분산 워크로드용\n▸ Spread Placement Group—인스턴스를 분산 배치, 고가용성(지연 증가)\n\n【정답 포인트】\n▸ \"HPC\" \"최소화 네트워크 지연\" \"최대화 처리량\"→Cluster가 유일한 선택\n▸ Cluster Placement Group = 단일 AZ 내 극저지연 네트워크 토폴로지\n▸ 클러스터 배치 그룹은 높은 대역폭, 저지연 EC2 클러스터 상호 간 통신 최적화\n\n【오답 체크】\n(B) Partition은 여러 AZ 지원이지만, 파티션 간 높은 지연시간 발생 (70자)\n(C) Partition 단일 AZ도 지연시간이 Cluster보다 높음 (60자)\n(D) Spread는 물리적으로 분산되어 지연시간 최악 (50자)\n\n【시험 포인트】\n▸ HPC→극저지연 필요→Cluster Placement Group 암기\n▸ 배치 그룹 3가지 유형의 사용 사례 구분\n▸ \"단일 AZ\" = 지연시간 최소, \"다중 AZ\" = 가용성 증대지만 지연증가\n▸ 함정: Partition은 빅데이터/메시지큐용, HPC는 아님",
    "en_q": "A company plans to migrate several of its high performance computing (HPC) virtual machines (VMs) to Amazon EC2 instances on AWS. A CloudOps engineer must identify a placement group for this deployment. The strategy must minimize network latency and must maximize network throughput between the HPC VMs. Which strategy should the CloudOps engineer choose to meet these requirements?",
    "en_opts": {
      "A": "Deploy the instances in a cluster placement group in one Availability Zone.",
      "B": "Deploy the instances in a partition placement group in two Availability Zones.",
      "C": "Deploy the instances in a partition placement group in one Availability Zone.",
      "D": "Deploy the instances in a spread placement group in two Availability Zones."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369126-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 17,
    "question": "한 회사가 AWS Organizations를 사용하여 AWS의 여러 계정을 관리합니다. 회사의 보안 팀은 네이티브 AWS 서비스를 사용하여 모든 AWS 계정을 CIS(Center for Internet Security) AWS Foundations Benchmark와 정기적으로 스캔하고 싶어 합니다. 이러한 요구사항을 충족하는 가장 운영상 효율적인 방법은 무엇입니까?",
    "options": {
      "A": "중앙 보안 계정을 AWS Security Hub 관리자 계정으로 지정합니다. Security Hub 관리자 계정에서 초대장을 보내고 구성원 계정에서 초대장을 수락하는 스크립트를 만듭니다. 새 계정이 생성될 때마다 스크립트를 실행합니다. Security Hub를 구성하여 CIS AWS Foundations Benchmark 스캔을 실행합니다.",
      "B": "Amazon Inspector를 사용하여 모든 계정에 걸쳐 CIS AWS Foundations Benchmark를 실행합니다.",
      "C": "중앙 보안 계정을 Amazon GuardDuty 관리자 계정으로 지정합니다. GuardDuty 관리자 계정에서 초대장을 보내고 구성원 계정에서 초대장을 수락하는 스크립트를 만듭니다. 새 계정이 생성될 때마다 스크립트를 실행합니다. GuardDuty를 구성하여 CIS AWS Foundations Benchmark 스캔을 실행합니다.",
      "D": "AWS Security Hub 관리자 계정을 지정합니다. 조직의 새 계정을 자동으로 구성원 계정이 되도록 구성합니다. CIS AWS Foundations Benchmark 스캔을 활성화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Security Hub—보안 표준 및 컴플라이언스 모니터링 (CIS Benchmark 지원)\n▸ AWS Organizations Integration—새 계정 자동 등록\n▸ CIS AWS Foundations Benchmark—구성 모범 사례 검사\n\n【정답 포인트】\n▸ \"가장 운영상 효율적\"→자동 통합 (수동 스크립트 X)\n▸ \"모든 계정\" \"정기적 스캔\"→Security Hub의 조직 정책 기능\n▸ \"새 계정 생성 시마다\"→자동 멤버쉽 기능으로 스크립트 불필요\n\n【오답 체크】\n(A) 수동 스크립트로 초대 관리 필요, 자동화 부족 (80자)\n(B) Inspector는 EC2 취약점 스캔용, CIS Benchmark 전용 아님 (70자)\n(C) GuardDuty는 위협 탐지(악성 행위), CIS Benchmark 실행 불가 (75자)\n\n【시험 포인트】\n▸ Security Hub = CIS Benchmark 표준 지원의 네이티브 서비스\n▸ Organizations 통합 = 자동 멤버쉽 등록 (A의 수동 스크립트 제거)\n▸ GuardDuty ≠ 구성 컴플라이언스 (위협 탐지만 수행)\n▸ Inspector ≠ CIS Benchmark (EC2/ECR 취약점만 스캔)\n▸ 함정: A는 수동 스크립트 때문에 \"운영상 효율적\"이 아님",
    "en_q": "A company manages a set of accounts on AWS by using AWS Organizations. The company's security team wants to use a native AWS service to regularly scan all AWS accounts against the Center for Internet Security (CIS) AWS Foundations Benchmark. What is the MOST operationally efficient way to meet these requirements?",
    "en_opts": {
      "A": "Designate a central security account as the AWS Security Hub administrator account. Create a script that sends an invitation from the Security Hub administrator account and accepts the invitation from the member account. Run the script every time a new account is created. Configure Security Hub to run the CIS AWS Foundations Benchmark scans.",
      "B": "Run the CIS AWS Foundations Benchmark across all accounts by using Amazon Inspector.",
      "C": "Designate a central security account as the Amazon GuardDuty administrator account. Create a script that sends an invitation from the GuardDuty administrator account and accepts the invitation from the member account. Run the script every time a new account is created. Configure GuardDuty to run the CIS AWS Foundations Benchmark scans.",
      "D": "Designate an AWS Security Hub administrator account. Configure new accounts in the organization to automatically become member accounts. Enable CIS AWS Foundations Benchmark scans."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369127-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 18,
    "question": "한 회사의 사용자가 필요한 것보다 더 많은 볼륨 성능 용량을 가진 Amazon EC2 인스턴스를 배포합니다. CloudOps 엔지니어는 인스턴스와 연결된 모든 Amazon Elastic Block Store(Amazon EBS) 볼륨을 검토하고 IOPS 및 처리량에 따른 비용 최적화 권장사항을 만들어야 합니다. CloudOps 엔지니어가 가장 운영상 효율적인 방식으로 이러한 요구사항을 충족하려면 어떻게 해야 할까요?",
    "options": {
      "A": "EC2 콘솔의 모니터링 그래프를 사용하여 EBS 볼륨에 대한 메트릭을 확인합니다. 각 볼륨의 프로비저닝된 공간에 대해 소비된 공간을 검토합니다. 낮은 활용도를 가진 볼륨을 식별합니다.",
      "B": "EC2 콘솔에서 EC2 인스턴스를 중지합니다. EC2 인스턴스 유형을 Amazon EBS 최적화로 변경합니다. EC2 인스턴스를 시작합니다.",
      "C": "AWS Compute Optimizer를 옵트인합니다. 메트릭이 수집될 충분한 시간을 허용합니다. EBS 볼륨에 대한 Compute Optimizer 문제를 검토합니다.",
      "D": "EC2 인스턴스에 fio 도구를 설치하고 필요한 워크로드를 근사하는 .cfg 파일을 만듭니다. 벤치마크 결과를 사용하여 프로비저닝된 EBS 볼륨이 가장 적절한 유형인지 판단합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Compute Optimizer—머신러닝 기반 리소스 우화 제안 도구\n▸ EBS 볼륨 분석—IOPS, 처리량, 스토리지 활용도 자동 검사\n▸ Cost Optimization Recommendations—데이터 기반 우화 제안\n\n【정답 포인트】\n▸ \"가장 운영상 효율적\"→자동화된 분석 도구 (수동 모니터링 X)\n▸ \"IOPS와 처리량\"→Compute Optimizer가 EBS 볼륨 분석 수행\n▸ \"모든 EBS 볼륨 검토\"→자동 스캔 & 권장사항 (스크립트 불필요)\n\n【오답 체크】\n(A) EC2 콘솔 그래프는 수동 비교 필요, 자동 우화 제안 없음 (80자)\n(B) 인스턴스 중지/변경은 EBS 볼륨 타입 분석과 무관 (70자)\n(D) fio 벤치마크는 수동 테스트, 모든 볼륨에 확장 불가 (75자)\n\n【시험 포인트】\n▸ Compute Optimizer = 우화 제안의 \"자동화\" 도구\n▸ \"충분한 시간 허용\" = 머신러닝 수렴 필요 (최소 14일)\n▸ EBS 볼륨 권장사항 = Compute Optimizer 기본 기능\n▸ 함정: A는 수동 분석이라 비효율적, D는 벤치마킹 비용 높음",
    "en_q": "A company has users that deploy Amazon EC2 instances that have more volume performance capacity than is required. A CloudOps engineer needs to review all Amazon Elastic Block Store (Amazon EBS) volumes that are associated with the instances and create cost optimization recommendations based on IOPS and throughput. What should the CloudOps engineer do to meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Use the monitoring graphs in the EC2 console to view metrics for EBS volumes. Review the consumed space against the provisioned space on each volume. Identify any volumes that have low utilization.",
      "B": "Stop the EC2 instances from the EC2 console. Change the EC2 instance type to Amazon EBS-optimized. Start the EC2 instances.",
      "C": "Opt in to AWS Compute Optimizer. Allow sufficient time for metrics to be gathered. Review the Compute Optimizer findings for EBS volumes.",
      "D": "Install the fio tool onto the EC2 instances and create a .cfg file to approximate the required workloads. Use the benchmark results to gauge whether the provisioned EBS volumes are of the most appropriate type."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369128-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 19,
    "question": "CloudOps 엔지니어는 회사의 현재 및 미래의 모든 Amazon S3 버킷이 로깅이 활성화되어 있는지 확인해야 합니다. S3 버킷이 로깅이 활성화되어 있지 않으면 자동화된 프로세스가 해당 S3 버킷에 대한 로깅을 활성화해야 합니다. 어떤 솔루션이 이러한 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Trusted Advisor를 사용하여 로깅이 활성화되지 않은 S3 버킷에 대한 검사를 수행합니다. 검사를 구성하여 로깅이 활성화되지 않은 S3 버킷에 대한 로깅을 활성화합니다.",
      "B": "모든 현재 및 미래 S3 버킷이 로깅을 활성화하도록 요구하는 S3 버킷 정책을 구성합니다.",
      "C": "s3-bucket-logging-enabled AWS Config 관리형 규칙을 사용합니다. AWS Lambda 함수를 사용하는 수정 조치를 추가합니다.",
      "D": "s3-bucket-logging-enabled AWS Config 관리형 규칙을 사용합니다. AWS-ConfigureS3BucketLogging AWS Systems Manager Automation runbook을 사용하는 수정 조치를 추가합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Config—리소스 컴플라이언스 모니터링 & 자동 수정\n▸ Config Remediation—비준수 리소스 자동 해결\n▸ AWS Systems Manager Automation—사전 검증된 runbook (AWS 공식)\n\n【정답 포인트】\n▸ \"현재 및 미래\"→Config로 지속적 모니터링\n▸ \"자동화된 프로세스\"→Remediation 액션으로 자동 수정\n▸ \"AWS-ConfigureS3BucketLogging\"→AWS 공식 검증 runbook (신뢰성 높음)\n\n【오답 체크】\n(A) Trusted Advisor는 실시간 수정 불가, 권장사항만 제공 (75자)\n(B) 버킷 정책은 로깅 활성화 강제 불가, 설정만 가능 (70자)\n(C) Lambda로 수정도 가능하지만, AWS 공식 runbook이 더 안정적 (80자)\n\n【시험 포인트】\n▸ Config Managed Rules = 자동 검사 & 수정 매커니즘\n▸ AWS Systems Manager Automation = AWS 공식 검증 솔루션\n▸ \"현재 및 미래\"의 미래 버킷도 자동 스캔 (Config의 기본)\n▸ C vs D 비교: 둘 다 Config 사용하지만, D가 검증된 runbook이라 우수\n▸ 함정: Trusted Advisor는 자동 수정 불가, 버킷 정책은 강제 불가",
    "en_q": "A CloudOps engineer must ensure that all of a company's current and future Amazon S3 buckets have logging enabled. If an S3 bucket does not have logging enabled, an automated process must enable logging for the S3 bucket. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS Trusted Advisor to perform a check for S3 buckets that do not have logging enabled. Configure the check to enable logging for S3 buckets that do not have logging enabled.",
      "B": "Configure an S3 bucket policy that requires all current and future S3 buckets to have logging enabled.",
      "C": "Use the s3-bucket-logging-enabled AWS Config managed rule. Add a remediation action that uses an AWS Lambda function to enable logging.",
      "D": "Use the s3-bucket-logging-enabled AWS Config managed rule. Add a remediation action that uses the AWS-ConfigureS3BucketLogging AWS Systems Manager Automation runbook to enable logging."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369129-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 20,
    "question": "한 회사가 수백만 명의 구독자를 보유하고 있습니다. 회사의 마케팅 부서는 매주 토요일에 구독자에게 알림을 보내는 프로세스를 자동화하고 싶어 합니다. 회사는 이미 Amazon Simple Notification Service(Amazon SNS)를 사용하여 구독자에게 알림을 보내는 메커니즘을 가지고 있습니다. 그러나 역사적으로 회사는 구독자에게 수동으로 알림을 보냈습니다. CloudOps 엔지니어는 스케줄에 따라 자동으로 알림을 보내는 솔루션이 필요합니다. 어떤 솔루션이 가장 운영상 효율적인 방식으로 이러한 요구사항을 충족할까요?",
    "options": {
      "A": "새로운 Amazon EC2 인스턴스를 시작합니다. AWS SDK를 사용하여 매주 토요일에 SNS 알림을 구독자에게 보내도록 크론 작업을 구성합니다.",
      "B": "매주 토요일마다 트리거되는 Amazon EventBridge에서 규칙을 만듭니다. SNS 주제에 알림을 게시하도록 규칙을 구성합니다.",
      "C": "모든 토요일마다 구독자에게 알림을 보내는 메시지 팬아웃에 SNS 구독을 만듭니다.",
      "D": "Step Functions 스케줄링 기능을 사용하여 매주 토요일마다 Step Functions 단계를 실행합니다. SNS 주제에 메시지를 게시하도록 단계를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ EventBridge Rules—시간 기반 이벤트 트리거 (cron 표현식 지원)\n▸ SNS Topic—메시지 게시/구독 메커니즘\n▸ Serverless—EC2 없이 완전 관리형 서비스\n\n【정답 포인트】\n▸ \"스케줄에 따라\"→EventBridge cron 규칙 (토요일 지정)\n▸ \"가장 운영상 효율적\"→서버리스 (EC2 유지보수 X)\n▸ \"기존 SNS\"→EventBridge→SNS 통합 (즉시 사용 가능)\n\n【오답 체크】\n(A) EC2 인스턴스 실행 비용, 패치/관리 오버헤드 발생 (75자)\n(C) \"메시지 팬아웃\"은 SNS 기능이 아님, 구독자가 이미 있음 (70자)\n(D) Step Functions 스케줄링도 가능하지만, EventBridge가 더 간단 (80자)\n\n【시험 포인트】\n▸ \"정기적 스케줄\" = EventBridge (cron) vs EC2 (크론 작업)\n▸ Serverless 선호도 = EventBridge > EC2\n▸ SNS 통합 대상 = EventBridge 네이티브 지원\n▸ 함정: A는 운영 부담 증가, D는 오버엔지니어링",
    "en_q": "A company has millions of subscribers. The company's marketing department wants to automate a process that sends notifications to subscribers every Saturday. The company already has a mechanism that uses Amazon Simple Notification Service (Amazon SNS) to send notifications to subscribers. However, the company has historically sent notifications to subscribers manually. A CloudOps engineer needs a solution to automatically send notifications on a schedule. Which solution will meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Launch a new Amazon EC2 instance. Configure a cron job to use the AWS SDK to send an SNS notification to subscribers every Saturday.",
      "B": "Create a rule in Amazon EventBridge that triggers every Saturday. Configure the rule to publish a notification to an SNS topic.",
      "C": "Create an SNS subscription to a message fanout that sends notifications to subscribers every Saturday.",
      "D": "Use the AWS Step Functions scheduling feature to run a Step Functions step every Saturday. Configure the step to publish a message to an SNS topic."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369130-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 21,
    "question": "CloudOps 엔지니어는 회사의 재해 복구 절차를 담당합니다. 회사는 프로덕션 계정에 소스 Amazon S3 버킷이 있으며 소스에서 비프로덕션 계정의 대상 S3 버킷으로 객체를 복제하려고 합니다. CloudOps 엔지니어는 소스 S3 버킷을 대상 S3 버킷으로 복사하도록 S3 교차 리전, 교차 계정 복제를 구성합니다. CloudOps 엔지니어가 대상 S3 버킷의 객체에 액세스하려고 할 때 Access Denied 오류가 발생합니다. 어떤 솔루션이 이 문제를 해결할까요?",
    "options": {
      "A": "복제 구성을 수정하여 객체 소유권을 대상 S3 버킷 소유자로 변경합니다.",
      "B": "복제 규칙이 소스 S3 버킷의 모든 객체에 적용되는지 확인하고 단일 접두사로 범위가 지정되지 않았는지 확인합니다.",
      "C": "S3 Replication Time Control(S3 RTC)이 경과했을 때 요청을 다시 시도합니다.",
      "D": "복제된 객체의 스토리지 클래스가 소스 S3 버킷과 대상 S3 버킷 간에 변경되지 않았는지 확인합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Cross-Account Replication—계정 간 S3 객체 복제\n▸ Object Ownership—객체의 소유권 설정 (복제 시 기본적으로 원본 소유자)\n▸ Access Denied—대상 계정이 복제 객체에 대한 권한 없음\n\n【정답 포인트】\n▸ \"Access Denied\"→대상 계정이 객체를 \"소유\"하지 않음\n▸ \"Object Ownership Rule\"→복제 시 소유권을 대상 버킷 소유자로 변경\n▸ 교차 계정 복제의 권한 문제 = 소유권 미전환\n\n【오답 체크】\n(B) 복제 규칙 범위는 Access Denied와 무관, 복제 여부 영향 (75자)\n(C) S3 RTC는 복제 시간 보장, 권한 문제 미해결 (70자)\n(D) 스토리지 클래스 변경은 객체 액세스 권한과 무관 (65자)\n\n【시험 포인트】\n▸ 교차 계정 복제 = 객체 소유권 문제 (AWS 공식 권장)\n▸ Replication Configuration → Owner Override 설정\n▸ Access Denied = 권한 (IAM/버킷 정책) + 소유권(Ownership) 모두 확인 필요\n▸ 함정: 복제 규칙이 맞아도, 소유권이 없으면 대상 계정이 액세스 불가",
    "en_q": "A CloudOps engineer is responsible for a company's disaster recovery procedures. The company has a source Amazon S3 bucket in a production account, and it wants to replicate objects from the source to a destination S3 bucket in a nonproduction account. The CloudOps engineer configures S3 cross-Region, cross-account replication to copy the source S3 bucket to the destination S3 bucket. When the CloudOps engineer attempts to access objects in the destination S3 bucket, they receive an Access Denied error. Which solution will resolve this problem?",
    "en_opts": {
      "A": "Modify the replication configuration to change object ownership to the destination S3 bucket owner.",
      "B": "Ensure that the replication rule applies to all objects in the source S3 bucket and is not scoped to a single prefix.",
      "C": "Retry the request when the S3 Replication Time Control (S3 RTC) has elapsed.",
      "D": "Verify that the storage class for the replicated objects did not change between the source S3 bucket and the destination S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369131-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 22,
    "question": "Amazon EC2 인스턴스는 Amazon Simple Queue Service(Amazon SQS) 큐를 사용하는 애플리케이션을 실행 중입니다. CloudOps 엔지니어는 애플리케이션이 SQS 큐에서 메시지를 읽기, 쓰기 및 삭제할 수 있는지 확인해야 합니다. 어떤 솔루션이 가장 안전한 방식으로 이러한 요구사항을 충족할까요?",
    "options": {
      "A": "sqs:SendMessage 권한, sqs:ReceiveMessage 권한 및 sqs:DeleteMessage 권한을 적절한 큐에 허용하는 IAM 정책으로 IAM 사용자를 만듭니다. IAM 사용자의 자격증명을 애플리케이션 구성에 포함합니다.",
      "B": "sqs:SendMessage 권한, sqs:ReceiveMessage 권한 및 sqs:DeleteMessage 권한을 적절한 큐에 허용하는 IAM 정책으로 IAM 사용자를 만듭니다. IAM 사용자의 액세스 키 및 비밀 액세스 키를 EC2 인스턴스의 환경 변수로 내보냅니다.",
      "C": "EC2 인스턴스가 AWS 서비스를 호출할 수 있도록 허용하는 IAM 역할을 만들고 연결합니다. 적절한 큐에 sqs:* 권한을 허용하는 IAM 정책을 역할에 연결합니다.",
      "D": "EC2 인스턴스가 AWS 서비스를 호출할 수 있도록 허용하는 IAM 역할을 만들고 연결합니다. sqs:SendMessage 권한, sqs:ReceiveMessage 권한 및 sqs:DeleteMessage 권한을 적절한 큐에 허용하는 IAM 정책을 역할에 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ IAM Role (Instance Profile)—EC2 인스턴스에 임시 자격증명 제공\n▸ Principle of Least Privilege—필요한 권한만 부여\n▸ Credential Exposure Risk—자격증명이 코드/로그에 노출될 위험\n\n【정답 포인트】\n▸ \"가장 안전한 방식\"→IAM 역할 (자격증명 저장 X)\n▸ \"EC2에서 SQS\"→IAM 역할 기반 임시 자격증명\n▸ \"3가지 권한\"→sqs:SendMessage, ReceiveMessage, DeleteMessage (sqs:* 아님)\n\n【오답 체크】\n(A) IAM 사용자 자격증명 포함 = 보안 위험 (코드 노출 시 영구 키) (75자)\n(B) 환경 변수에 액세스 키 저장 = 자격증명 노출 위험 (85자)\n(C) sqs:* = 최소 권한 원칙 위반 (DeleteQueue, PurgeQueue 등 추가) (70자)\n\n【시험 포인트】\n▸ \"EC2 + AWS 서비스\" = IAM 역할 (항상 최선)\n▸ \"최소 권한\" = 필요한 액션만 (SendMessage, ReceiveMessage, DeleteMessage)\n▸ IAM 사용자 자격증명 = EC2에서 금지 사항\n▸ 환경 변수 = 자격증명 저장소로 부적절\n▸ 함정: C는 역할 사용하지만, sqs:*로 과도한 권한",
    "en_q": "An Amazon EC2 instance is running an application that uses Amazon Simple Queue Service (Amazon SQS) queues. A CloudOps engineer must ensure that the application can read write, and delete messages from the SQS queues. Which solution will meet these requirements in the MOST secure manner?",
    "en_opts": {
      "A": "Create an IAM user with an IAM policy that allows the sqs:SendMessage permission, the sqsReceiveMessage permission, and the sqs:DeleteMessage permission to the appropriate queues. Embed the IAM user's credentials in the application's configuration.",
      "B": "Create an IAM user with an IAM policy that allows the sqs:SendMessage permission, the sqs:ReceiveMessage permission, and the sqs:DeleteMessage permission to the appropriate queues. Export the IAM user's access key and secret access key as environment variables on the EC2 instance.",
      "C": "Create and associate an IAM role that allows EC2 instances to call AWS services. Attach an IAM policy to the role that allows sqs:* permissions to the appropriate queues.",
      "D": "Create and associate an IAM role that allows EC2 instances to call AWS services. Attach an IAM policy to the role that allows the sqs:SendMessage permission, the sqs:ReceiveMessage permission, and the sqs:DeleteMessage permission to the appropriate queues."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369132-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 23,
    "question": "CloudOps 엔지니어는 Amazon RDS for PostgreSQL DB 인스턴스에 대한 솔루션을 설계하고 있습니다. 데이터베이스 자격증명을 저장하고 매달 회전해야 합니다. DB 인스턴스에 연결하는 애플리케이션은 쓰기 집약적 트래픽을 보내며 때로 단시간에 크게 증가하는 변동 클라이언트 연결이 있습니다. CloudOps 엔지니어가 이러한 요구사항을 충족하려면 어떤 솔루션을 선택해야 할까요?",
    "options": {
      "A": "AWS Key Management Service(AWS KMS)를 구성하여 DB 인스턴스의 키를 자동으로 회전합니다. 데이터베이스 연결의 증가를 처리하기 위해 RDS Proxy를 사용합니다.",
      "B": "AWS Key Management Service(AWS KMS)를 구성하여 DB 인스턴스의 키를 자동으로 회전합니다. 데이터베이스 연결의 증가를 처리하기 위해 RDS 읽기 복제본을 사용합니다.",
      "C": "AWS Secrets Manager를 구성하여 DB 인스턴스의 자격증명을 자동으로 회전합니다. 데이터베이스 연결의 증가를 처리하기 위해 RDS Proxy를 사용합니다.",
      "D": "AWS Secrets Manager를 구성하여 DB 인스턴스의 자격증명을 자동으로 회전합니다. 데이터베이스 연결의 증가를 처리하기 위해 RDS 읽기 복제본을 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Secrets Manager—자격증명 저장 & 자동 회전\n▸ AWS KMS—암호화 키 관리 (자격증명 아님)\n▸ RDS Proxy—DB 연결 풀링으로 연결 수 제한\n▸ RDS Read Replica—읽기 전용 복제본 (쓰기 연결 증가 미해결)\n\n【정답 포인트】\n▸ \"자격증명 회전\"→Secrets Manager (KMS는 암호화 키용)\n▸ \"변동 클라이언트 연결\"→RDS Proxy로 연결 풀링\n▸ \"쓰기 집약적\"→Read Replica 무관 (마스터 쓰기만 증가)\n\n【오답 체크】\n(A) KMS = 데이터 암호화 키 관리, 자격증명 회전 불가 (75자)\n(B) KMS + Read Replica = 자격증명 회전 불가, 읽기만 분산 (80자)\n(D) Secrets Manager 맞지만, Read Replica로 쓰기 연결 미증대 (85자)\n\n【시험 포인트】\n▸ \"자격증명\" = Secrets Manager (KMS는 암호화 키)\n▸ \"DB 연결 폭증\" = RDS Proxy (Read Replica는 쓰기 안 도움)\n▸ \"쓰기 집약적\" = 마스터 DB의 쓰기 부하, 읽기 복제본 무관\n▸ Secrets Manager 자동 회전 = Lambda 함수로 구성\n▸ 함정: A/B는 KMS 선택으로 탈락, D는 Read Replica로 쓰기 미해결",
    "en_q": "A CloudOps engineer is designing a solution for an Amazon RDS for PostgreSQL DB instance. Database credentials must be stored and rotated monthly. The applications that connect to the DB instance send write-intensive traffic with variable client connections that sometimes increase significantly in a short period of time. Which solution should a CloudOps engineer choose to meet these requirements?",
    "en_opts": {
      "A": "Configure AWS Key Management Service (AWS KMS) to automatically rotate the keys for the DB instance. Use RDS Proxy to handle the increases in database connections.",
      "B": "Configure AWS Key Management Service (AWS KMS) to automatically rotate the keys for the DB instance. Use RDS read replicas to handle the increases in database connections.",
      "C": "Configure AWS Secrets Manager to automatically rotate the credentials for the DB instance. Use RDS Proxy to handle the increases in database connections.",
      "D": "Configure AWS Secrets Manager to automatically rotate the credentials for the DB instance. Use RDS read replicas to handle the increases in database connections."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369133-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 24,
    "question": "한 회사는 VPC와 회사의 온프레미스 데이터 센터에서 컴퓨팅 리소스를 운영합니다. 회사는 이미 VPC와 온프레미스 데이터 센터 간에 AWS Direct Connect 연결이 있습니다. CloudOps 엔지니어는 VPC의 Amazon EC2 인스턴스가 온프레미스 데이터 센터의 호스트에 대한 DNS 이름을 확인할 수 있는지 확인해야 합니다. 어떤 솔루션이 가장 적은 지속적 유지보수로 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon Route 53 프라이빗 호스팅 영역을 만듭니다. 온프레미스 데이터 센터의 호스트의 호스트 이름과 IP 주소로 영역을 채웁니다.",
      "B": "Amazon Route 53 Resolver 아웃바운드 엔드포인트를 만듭니다. 전달해야 할 도메인 이름에 대해 온프레미스 DNS 서버의 IP 주소를 추가합니다.",
      "C": "Amazon Route 53 Resolver에서 역방향 DNS 쿼리에 대한 전달 규칙을 설정합니다. VPC에 대해 enableDnsHostnames 속성을 true로 설정합니다.",
      "D": "각 EC2 인스턴스의 /etc/hosts 파일에 온프레미스 호스트의 호스트 이름 및 IP 주소를 추가합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver Outbound Endpoint—VPC에서 온프레미스 DNS로 쿼리 전달\n▸ Forwarding Rule—특정 도메인의 DNS 쿼리를 외부 DNS로 전달\n▸ Direct Connect—VPC ↔ 온프레미스 네트워크 연결\n\n【정답 포인트】\n▸ \"최소 유지보수\"→자동화 (수동 /etc/hosts 유지 X)\n▸ \"온프레미스 DNS\"→Route 53 Resolver 아웃바운드 엔드포인트\n▸ \"도메인 기반 전달\"→온프레미스 DNS 서버로 쿼리 자동 라우팅\n\n【오답 체크】\n(A) Route 53 프라이빗 호스팅 영역 = 수동 레코드 유지 필요 (온프레미스 변경 시마다) (75자)\n(C) \"역방향 DNS\" + \"enableDnsHostnames\" = 구성이 명확하지 않고, 역 DNS 대한 것 (80자)\n(D) /etc/hosts 파일 = 각 EC2 인스턴스마다 수동 관리 (새 서버 추가 시마다) (80자)\n\n【시험 포인트】\n▸ \"온프레미스 호스트\" \"DNS 이름 해석\" = Route 53 Resolver Outbound\n▸ \"최소 유지보수\" = 중앙화된 DNS 전달 규칙 (개별 수동 관리 X)\n▸ \"도메인 기반 조건부 전달\" = Forwarding Rule의 핵심\n▸ Private Hosted Zone = VPC 내부 리소스용 (온프레미스 동기화 필요)\n▸ 함정: A는 수동 유지, D는 확장성 없음, C는 역 DNS만 다룸",
    "en_q": "A company operates compute resources in a VPC and in the company's on-premises data center. The company already has an AWS Direct Connect connection between the VPC and the on-premises data center. A CloudOps engineer needs to ensure that Amazon EC2 instances in the VPC can resolve DNS names for hosts in the on-premises data center. Which solution will meet this requirement with the LEAST amount of ongoing maintenance?",
    "en_opts": {
      "A": "Create an Amazon Route 53 private hosted zone. Populate the zone with the hostnames and IP addresses of the hosts in the on-premises data center.",
      "B": "Create an Amazon Route 53 Resolver outbound endpoint. Add the IP addresses of an on-premises DNS server for the domain names that need to be forwarded.",
      "C": "Set up a forwarding rule for reverse DNS queries in Amazon Route 53 Resolver. Set the enableDnsHostnames attribute to true for the VPC.",
      "D": "Add the hostnames and IP addresses for the on-premises hosts to the /etc/hosts file of each EC2 instance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369134-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 25,
    "question": "한 회사가 Amazon EC2 인스턴스에서 웹 애플리케이션을 호스팅합니다. 웹 서버 로그는 Amazon CloudWatch Logs에 게시됩니다. 로그 이벤트는 동일한 구조를 가지며 사용자 요청과 연결된 HTTP 응답 코드를 포함합니다. 회사는 웹 서버가 HTTP 404 응답을 반환하는 횟수를 모니터링해야 합니다. 이러한 요구사항을 충족하는 가장 운영상 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "웹 서버가 HTTP 404 응답을 반환하는 횟수를 세는 CloudWatch Logs 메트릭 필터를 만듭니다.",
      "B": "웹 서버가 HTTP 404 응답을 반환하는 횟수를 세는 CloudWatch Logs 구독 필터를 만듭니다.",
      "C": "지난 시간 동안의 로그 이벤트에서 404 코드의 수를 세는 CloudWatch Logs Insights 쿼리를 실행하는 AWS Lambda 함수를 만듭니다.",
      "D": "지난 시간 동안의 로그 이벤트에서 404 코드의 수를 세는 CloudWatch Logs Insights 쿼리를 실행하는 스크립트를 만듭니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudWatch Logs Metric Filter—로그 패턴 매칭으로 메트릭 생성\n▸ Subscription Filter—로그 필터로 다른 서비스(Lambda 등)로 전달\n▸ CloudWatch Logs Insights—임시 쿼리 도구 (연속 모니터링 X)\n\n【정답 포인트】\n▸ \"모니터링 필요\"→지속적인 메트릭 필요\n▸ \"HTTP 404 횟수\"→메트릭 필터로 자동 집계\n▸ \"가장 운영상 효율적\"→자동화된 메트릭 필터 (수동 쿼리 X)\n\n【오답 체크】\n(B) Subscription Filter = 로그를 다른 서비스로 전달용 (메트릭 생성 아님) (75자)\n(C) Lambda + Insights = 정기적 쿼리 (메트릭 필터보다 복잡) (70자)\n(D) 스크립트 실행 = 수동 관리 & 운영 부담 증가 (65자)\n\n【시험 포인트】\n▸ \"정기적 모니터링\" = Metric Filter (자동 메트릭)\n▸ \"Subscription vs Metric\" = Subscription은 데이터 라우팅, Metric은 메트릭 생성\n▸ Insights = 임시 분석용 (지속 모니터링 아님)\n▸ 메트릭 필터 → CloudWatch Alarm → SNS/Auto Scaling 연결 가능\n▸ 함정: C/D는 수동 쿼리 필요로 비효율적",
    "en_q": "A company hosts a web application on an Amazon EC2 instance. The web server logs are published to Amazon CloudWatch Logs. The log events have the same structure and include the HTTP response codes that are associated with the user requests. The company needs to monitor the number of times that the web server returns an HTTP 404 response. What is the MOST operationally efficient solution that meets these requirements?",
    "en_opts": {
      "A": "Create a CloudWatch Logs metric filter that counts the number of times that the web server returns an HTTP 404 response.",
      "B": "Create a CloudWatch Logs subscription filter that counts the number of times that the web server returns an HTTP 404 response.",
      "C": "Create an AWS Lambda function that runs a CloudWatch Logs Insights query that counts the number of 404 codes in the log events during the past hour.",
      "D": "Create a script that runs a CloudWatch Logs Insights query that counts the number of 404 codes in the log events during the past hour."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369340-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 26,
    "question": "한 회사는 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 실행되는 내부 웹 애플리케이션을 가지고 있습니다. 인스턴스는 단일 가용 영역의 Amazon EC2 Auto Scaling 그룹에서 실행됩니다. CloudOps 엔지니어는 애플리케이션을 고가용성으로 만들어야 합니다. CloudOps 엔지니어가 이 요구사항을 충족하려면 어떤 조치를 취해야 할까요?",
    "options": {
      "A": "Auto Scaling 그룹의 최대 인스턴스 수를 증가시켜 피크 사용량에 필요한 용량을 충족합니다.",
      "B": "Auto Scaling 그룹의 최소 인스턴스 수를 증가시켜 피크 사용량에 필요한 용량을 충족합니다.",
      "C": "Auto Scaling 그룹을 업데이트하여 동일한 AWS 리전의 두 번째 가용 영역에서 새 인스턴스를 시작합니다.",
      "D": "Auto Scaling 그룹을 업데이트하여 두 번째 AWS 리전의 가용 영역에서 새 인스턴스를 시작합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ High Availability—여러 가용 영역(AZ)에 리소스 분산\n▸ Single AZ Risk—한 AZ 장애 시 전체 중단\n▸ Multi-AZ Deployment—같은 리전 내 여러 AZ 배치\n\n【정답 포인트】\n▸ \"고가용성\"→AZ 장애 대비 필요\n▸ \"같은 리전 두 번째 AZ\"→지연 최소 & 비용 효율\n▸ Auto Scaling 그룹 = 다중 AZ 설정으로 자동 분산\n\n【오답 체크】\n(A) 최대 인스턴스만 증가 = 일반적 부하는 대응 X (60자)\n(B) 최소 인스턴스 증가 = AZ 장애 대비 아님 (70자)\n(D) 두 번째 리전 = 지연 증가 & 비용 높음 (리전 간 데이터 전송료) (80자)\n\n【시험 포인트】\n▸ \"고가용성\" = 다중 AZ (같은 리전)\n▸ \"단일 AZ → 고가용성\" = 두 번째 AZ 추가\n▸ 리전 vs AZ = 리전 간은 재해복구, AZ는 고가용성\n▸ Auto Scaling 그룹에 다중 AZ 설정 = 자동 분산\n▸ 함정: A/B는 용량 증가만, D는 과도한 지연",
    "en_q": "A company has an internal web application that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group in a single Availability Zone. A CloudOps engineer must make the application highly available. Which action should the CloudOps engineer take to meet this requirement?",
    "en_opts": {
      "A": "Increase the maximum number of instances in the Auto Scaling group to meet the capacity that is required at peak usage.",
      "B": "Increase the minimum number of instances in the Auto Scaling group to meet the capacity that is required at peak usage.",
      "C": "Update the Auto Scaling group to launch new instances in a second Availability Zone in the same AWS Region.",
      "D": "Update the Auto Scaling group to launch new instances in an Availability Zone in a second AWS Region."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369135-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 27,
    "question": "CloudOps 엔지니어는 Amazon EC2에서 실행되는 간단한 공개 웹사이트를 만들고 있습니다. CloudOps 엔지니어는 기존 공개 서브넷에서 EC2 인스턴스를 만들었고 인스턴스에 탄력적 IP 주소를 할당했습니다. 다음으로, CloudOps 엔지니어는 새 보안 그룹을 만들고 0.0.0.0/0에서 들어오는 HTTP 트래픽을 허용하도록 인스턴스에 적용했습니다. 마지막으로, CloudOps 엔지니어는 새로운 네트워크 ACL을 만들었고 0.0.0.0/0에서 들어오는 HTTP 트래픽을 허용하도록 서브넷에 적용했습니다. 그러나 웹사이트에 인터넷에서 접근할 수 없습니다. 이 문제의 원인은 무엇입니까?",
    "options": {
      "A": "CloudOps 엔지니어는 새로운 네트워크 ACL에서 임시 포트 반환 트래픽을 허용하는 아웃바운드 규칙을 만들지 않았습니다.",
      "B": "CloudOps 엔지니어는 포트 80에서 HTTP 트래픽을 허용하는 보안 그룹에서 아웃바운드 규칙을 만들지 않았습니다.",
      "C": "EC2 인스턴스에 할당된 탄력적 IP 주소가 변경되었습니다.",
      "D": "포트 80에서 들어오는 HTTP 트래픽을 거부하는 규칙을 포함하는 추가 네트워크 ACL이 서브넷과 연결되어 있습니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Network ACL—서브넷 수준 상태 비저장 방화벽 (인바운드/아웃바운드 모두)\n▸ Security Group—인스턴스 수준 상태 저장 방화벽 (아웃바운드 기본 허용)\n▸ Ephemeral Port—클라이언트의 응답 포트 (1024-65535)\n\n【정답 포인트】\n▸ \"새로운 네트워크 ACL\" \"HTTP 인바운드\"→아웃바운드 필요\n▸ \"클라이언트 응답\"→ephemeral 포트로 돌아옴\n▸ \"상태 비저장\" ACL→양방향 규칙 모두 명시 필요\n\n【오답 체크】\n(B) 보안 그룹은 상태 저장 (아웃바운드 기본 허용), HTTP 응답 자동 허용 (75자)\n(C) Elastic IP는 할당 후 변경 안 함 (재부팅 후에도 유지) (70자)\n(D) 추가 ACL이 있어도, \"새로운 ACL\"을 적용했으므로 이미 반영됨 (85자)\n\n【시험 포인트】\n▸ \"새로운 네트워크 ACL 적용\" = 기존 ACL 삭제됨 (D 오답)\n▸ ACL은 상태 비저장 = 응답 트래픽(Ephemeral 포트)도 명시 필요\n▸ 보안 그룹은 상태 저장 = 아웃바운드 자동 허용\n▸ \"클라이언트 → 서버 (포트 80)\" + \"서버 → 클라이언트 (ephemeral)\" 모두 필요\n▸ 함정: 보안 그룹만 설정했으면 OK, 하지만 새 ACL로 아웃바운드 ACL 규칙 제거됨",
    "en_q": "A CloudOps engineer is creating a simple, public-facing website running on Amazon EC2. The CloudOps engineer created the EC2 instance in an existing public subnet and assigned an Elastic IP address to the instance. Next, the CloudOps engineer created and applied a new security group to the instance to allow incoming HTTP traffic from 0.0.0.0/0. Finally, the CloudOps engineer created a new network ACL and applied it to the subnet to allow incoming HTTP traffic from 0.0.0.0/0. However, the website cannot be reached from the internet. What is the cause of this issue?",
    "en_opts": {
      "A": "The CloudOps engineer did not create an outbound rule that allows ephemeral port return traffic in the new network ACL",
      "B": "The CloudOps engineer did not create an outbound rule in the security group that allows HTTP traffic from port 80.",
      "C": "The Elastic IP address assigned to the EC2 instance has changed.",
      "D": "There is an additional network ACL associated with the subnet that includes a rule that denies inbound HTTP traffic from port 80."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369137-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 28,
    "question": "한 회사가 AWS Systems Manager를 사용하여 많은 Amazon EC2 인스턴스 플릿을 관리하고 싶어 합니다. 회사는 인스턴스를 프라이빗 서브넷에 호스팅합니다. 회사는 최소 권한 원칙에 따라 액세스 권한을 할당합니다. 모든 프라이빗 서브넷은 NAT 게이트웨이를 통해 인터넷 연결을 가지고 있습니다. CloudOps 엔지니어가 Systems Manager Agent(SSM Agent)의 최신 버전을 설치합니다. 그러나 EC2 인스턴스가 Systems Manager Fleet Manager에 나타나지 않습니다. CloudOps 엔지니어는 이 문제를 해결해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "NAT 게이트웨이를 공개 서브넷에 배포된 NAT 인스턴스로 교체합니다. 프라이빗 서브넷의 라우트 테이블을 NAT 인스턴스를 사용하도록 업데이트합니다.",
      "B": "Systems Manager용 VPC 엔드포인트를 만듭니다. 프라이빗 서브넷의 라우트 테이블에서 NAT 게이트웨이를 통한 인터넷 경로를 제거합니다.",
      "C": "인스턴스와 연결된 EC2 인스턴스 프로필에 AmazonSSMManagedInstanceCore AWS 관리형 정책을 첨부합니다.",
      "D": "인스턴스와 연결된 EC2 인스턴스 프로필에 ssm*에 대한 모든 작업을 허용하는 사용자 정책을 첨부합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SSM Agent—Systems Manager와 통신하는 EC2 에이전트\n▸ IAM Instance Profile—EC2 인스턴스에 권한 부여\n▸ AmazonSSMManagedInstanceCore—Systems Manager 기본 권한\n▸ VPC Endpoint—AWS 서비스에 대한 프라이빗 연결\n\n【정답 포인트】\n▸ \"Fleet Manager에 나타나지 않음\"→SSM Agent와 Systems Manager 통신 불가\n▸ \"SSM Agent 설치됨\"→권한 문제 (IAM 정책 확인 필요)\n▸ \"최소 권한 원칙\"→AmazonSSMManagedInstanceCore 정책 필요\n\n【오답 체크】\n(A) NAT 게이트웨이 → NAT 인스턴스 = 비용 증가 & 문제 미해결 (70자)\n(B) VPC 엔드포인트는 도움이 되지만, NAT 게이트웨이 제거 필수 아님 (75자)\n(D) ssm:* = 최소 권한 원칙 위반 (ssm:GetConnectionStatus 등 불필요) (70자)\n\n【시험 포인트】\n▸ \"Fleet Manager에 인스턴스 미표시\" = IAM 권한 부족\n▸ SSM Agent = 자체 설치 & 실행 (에이전트만으로 부족)\n▸ IAM Role (Instance Profile) = 인스턴스가 Systems Manager와 통신하기 위한 권한\n▸ AmazonSSMManagedInstanceCore = Systems Manager 최소 권한\n▸ 함정: VPC 엔드포인트는 이미 NAT 게이트웨이로 인터넷 접근 가능하므로 불필요",
    "en_q": "A company wants to use AWS Systems Manager to manage a large fleet of Amazon EC2 instances. The company hosts the instances in private subnets. The company follows the principle of least privilege to assign access permissions. All private subnets have internet connectivity through a NAT gateway. A CloudOps engineer installs the latest version of the Systems Manager Agent (SSM Agent). However, the EC2 instances do not appear in Systems Manager Fleet Manager. The CloudOps engineer must resolve this issue. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Replace the NAT gateway with a NAT instance that is deployed in the public subnet. Update the private subnet's route table to use the NAT instance.",
      "B": "Create a VPC endpoint for Systems Manager. Remove routes to the internet through the NAT gateway from the private subnet's route table.",
      "C": "Attach the AmazonSSMManagedInstanceCore AWS managed policy to the EC2 instance profile that is associated with the instances.",
      "D": "Attach a custom policy that allows all actions to ssm* to the EC2 instance profile that is associated with the instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369136-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 29,
    "question": "한 회사가 수천 개의 경보 시스템으로부터 알림을 수집하는 애플리케이션을 운영하고 있습니다. 알림에는 경보 알림과 정보 알림이 포함됩니다. 정보 알림은 시스템 무장 프로세스, 해제 프로세스, 센서 상태를 포함합니다. 모든 알림은 Amazon SQS 큐에 메시지로 보관됩니다. Auto Scaling 그룹에 속한 Amazon EC2 인스턴스가 메시지를 처리합니다. CloudOps 엔지니어는 경보 알림을 정보 알림보다 우선시하는 솔루션을 구현해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "큐에 많은 수의 메시지가 있을 때 더 빠르게 확장하도록 Auto Scaling 그룹을 조정합니다.",
      "B": "Amazon SNS 팬아웃 기능과 Amazon SQS를 사용하여 모든 EC2 인스턴스에 병렬로 알림을 전송합니다.",
      "C": "메시지 처리를 가속화하기 위해 Amazon DynamoDB 스트림을 추가합니다.",
      "D": "경보 알림용 큐와 정보 알림용 큐를 생성합니다. 애플리케이션을 업데이트하여 경보 알림 큐에서 메시지를 먼저 수집하도록 합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Amazon SQS — 메시지 큐 서비스로, FIFO(First-In-First-Out) 또는 Standard 큐 모드 지원\n▸ 우선순위 처리 — 중요도가 높은 작업을 먼저 처리하는 패턴\n▸ Auto Scaling — 워크로드에 따라 EC2 인스턴스 수를 자동 조정\n\n【정답 포인트】\n▸ \"별도 큐\" → 경보와 정보 알림을 분리하여 우선순위 제어 가능\n▸ \"먼저 수집\" → 애플리케이션 로직에서 경보 큐를 먼저 폴링하도록 구현\n▸ 우선순위 기반 처리 — 메시지 큐의 구조적 분리가 가장 직관적이고 효율적\n\n【오답 체크】\n(A) Auto Scaling 속도 조정 — 우선순위 결정과 무관하며, 단순히 인스턴스 수 증가만 가능\n(B) SNS 팬아웃 — 모든 메시지를 병렬로 전송하므로 우선순위 적용 불가능\n(C) DynamoDB 스트림 — 처리 속도를 높이지만 우선순위 메커니즘 제공 안 함\n\n【시험 포인트】\n▸ SQS 기반 우선순위 처리는 \"별도 큐 + 폴링 순서\" 패턴이 표준\n▸ 아키텍처 설계 문제에서 \"우선순위\" 요구사항이 있으면 리소스 분리 고려\n▸ SNS/SQS 팬아웃은 \"브로드캐스팅 및 확장성\" 목적용이지 우선순위 아님",
    "en_q": "A company has an application that collects notifications from thousands of alarm systems. The notifications include alarm notifications and information notifications. The information notifications include the system arming processes, disarming processes, and sensor status. All notifications are kept as messages in an Amazon Simple Queue Service (Amazon SQS) queue. Amazon EC2 instances that are in an Auto Scaling group process the messages. A CloudOps engineer needs to implement a solution that prioritizes alarm notifications over information notifications. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Adjust the Auto Scaling group to scale faster when a high number of messages is in the queue.",
      "B": "Use the Amazon Simple Notification Service (Amazon SNS) fanout feature with Amazon SQS to send the notifications in parallel to all the EC2 instances.",
      "C": "Add an Amazon DynamoDB stream to accelerate the message processing.",
      "D": "Create a queue for alarm notifications and a queue for information notifications. Update the application to collect messages from the alarm notifications queue first."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369138-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 30,
    "question": "한 회사가 AWS Trusted Advisor를 사용하여 보안 및 규정 준수를 구현하고 있습니다. 회사의 CloudOps 팀은 액세스할 수 있는 Trusted Advisor 검사 목록을 검증하고 있습니다. 어떤 요소가 사용 가능한 Trusted Advisor 검사의 수량에 영향을 미칩니까?",
    "options": {
      "A": "최소한 하나의 Amazon EC2 인스턴스가 실행 중 상태인지 여부",
      "B": "AWS Support 플랜",
      "C": "AWS Organizations 서비스 제어 정책(SCP)",
      "D": "AWS 계정 루트 사용자가 다중 인증(MFA)을 활성화했는지 여부"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Trusted Advisor — AWS 인프라의 보안, 성능, 비용 최적화를 검증하는 온라인 도구\n▸ Support 플랜 — Basic, Developer, Business, Enterprise 4개 수준\n▸ 검사(Checks) — Trusted Advisor가 제공하는 진단 항목들\n\n【정답 포인트】\n▸ \"Support 플랜\" → Basic(무료)은 5가지 핵심 검사만, Business/Enterprise는 전체 검사 제공\n▸ 계층별 차이 — 플랜 업그레이드 시 접근 가능한 검사 수 증가\n▸ AWS 서비스 리소스 수가 아니라 구독 수준이 결정 요소\n\n【오답 체크】\n(A) EC2 인스턴스 상태 — 개별 리소스 존재 여부는 검사 가용성에 무관\n(C) AWS Organizations SCP — 정책 제어는 Trusted Advisor 검사 수에 영향 없음\n(D) 루트 사용자 MFA — 보안 설정이지만 Trusted Advisor 검사 가용성과 무관\n\n【시험 포인트】\n▸ Trusted Advisor 접근성은 \"AWS Support 플랜 레벨\"에 전적으로 의존\n▸ 시험에서 \"가용 검사 수\"를 묻는 문제 → Support 플랜 답 선택\n▸ 다른 AWS 서비스(Organizations, IAM 등)와 독립적으로 동작",
    "en_q": "A company is implementing security and compliance by using AWS Trusted Advisor. The company's CloudOps team is validating the list of Trusted Advisor checks that it can access. Which factor will affect the quantity of available Trusted Advisor checks?",
    "en_opts": {
      "A": "Whether at least ono Amazon EC2 instance is in the running state",
      "B": "The AWS Support plan",
      "C": "An AWS Organizations service control policy (SCP)",
      "D": "Whether the AWS account root user has multi-factor authentication (MFA) enabled"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369139-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 31,
    "question": "CloudOps 엔지니어가 AWS CloudFormation 템플릿으로 VPC를 성공적으로 배포했습니다. CloudOps 엔지니어는 AWS Organizations를 통해 관리되는 여러 계정에 동일한 템플릿을 배포하려고 합니다. 이 요구사항을 충족하되 운영 오버헤드를 최소화하는 솔루션은 무엇입니까?",
    "options": {
      "A": "관리 계정에서 OrganizationAccountAccessRole IAM 역할을 맡습니다. 각 계정에서 템플릿을 배포합니다.",
      "B": "각 계정의 역할을 맡는 AWS Lambda 함수를 생성합니다. AWS CloudFormation CreateStack API 호출을 사용하여 템플릿을 배포합니다.",
      "C": "계정 목록을 쿼리하는 AWS Lambda 함수를 생성합니다. AWS CloudFormation CreateStack API 호출을 사용하여 템플릿을 배포합니다.",
      "D": "관리 계정에서 AWS CloudFormation StackSets을 사용하여 각 계정에 템플릿을 배포합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS CloudFormation StackSets — 여러 AWS 계정 및 리전에 걸쳐 스택을 배포하는 확장 기능\n▸ OrganizationAccountAccessRole — AWS Organizations 관리 계정에서 멤버 계정 접근용 역할\n▸ 운영 오버헤드 — 수동 개입, 반복 작업, 복잡한 로직 필요 정도\n\n【정답 포인트】\n▸ \"StackSets\" → 다중 계정 배포를 위해 AWS가 제공하는 네이티브 솔루션\n▸ \"관리 계정에서\" → 중앙 제어점에서 모든 배포 관리 가능\n▸ 최소 오버헤드 — 별도 스크립트, Lambda, 수동 역할 전환 없음\n\n【오답 체크】\n(A) 수동 역할 전환 — 각 계정마다 OrganizationAccountAccessRole 맡아야 하므로 반복 작업 많음\n(B) Lambda + CreateStack — 수동 Lambda 함수 작성 및 유지보수 필요, StackSets보다 운영 복잡\n(C) Lambda 쿼리 — 계정 목록 조회 후에도 여전히 각각 배포해야 하므로 자동화 미흡\n\n【시험 포인트】\n▸ 다중 계정 배포 문제 → \"StackSets\" 가장 우선 고려\n▸ \"운영 오버헤드 최소화\" 키워드 → AWS 매니지드 서비스(StackSets) 선택\n▸ Organizations와 CloudFormation 통합은 StackSets 기능",
    "en_q": "A CloudOps engineer has successfully deployed a VPC with an AWS CloudFormation template The CloudOps engineer wants to deploy the same template across multiple accounts that are managed through AWS Organizations. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Assume the OrganizationAccountAccessRole IAM role from the management account. Deploy the template in each of the accounts.",
      "B": "Create an AWS Lambda function to assume a role in each account. Deploy the template by using the AWS CloudFormation CreateStack API call.",
      "C": "Create an AWS Lambda function to query for a list of accounts. Deploy the template by using the AWS CloudFormation CreateStack API call.",
      "D": "Use AWS CloudFormation StackSets from the management account to deploy the template in each of the accounts."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369342-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 32,
    "question": "한 회사의 애플리케이션은 인터넷 제공업체에서 app.example.com으로 호스팅하고 있습니다. 회사는 Amazon Route 53으로 소유 및 관리하는 www.company.com을 사용하여 애플리케이션에 액세스하려고 합니다. 이를 해결하기 위해 생성해야 하는 Route 53 레코드는 무엇입니까?",
    "options": {
      "A": "A 레코드",
      "B": "Alias 레코드",
      "C": "CNAME 레코드",
      "D": "포인터(PTR) 레코드"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CNAME(Canonical Name) — 도메인 이름을 다른 도메인 이름으로 매핑하는 DNS 레코드\n▸ A 레코드 — 도메인을 IP 주소로 매핑\n▸ Alias 레코드 — AWS 리소스(ELB, CloudFront 등)에만 사용 가능한 AWS 확장\n▸ PTR 레코드 — IP 주소를 도메인으로 역매핑(역방향 DNS 조회)\n\n【정답 포인트】\n▸ \"도메인 → 도메인\" → CNAME 사용\n▸ \"외부 호스팅(app.example.com)\" → AWS 리소스가 아니므로 Alias 불가\n▸ \"단순 리다이렉트\" → CNAME이 표준 솔루션\n\n【오답 체크】\n(A) A 레코드 — IP 주소 필요하지만, 도메인으로 매핑 가능한 CNAME이 적절\n(B) Alias 레코드 — AWS 리소스(ALB, CloudFront, S3 등)에만 적용, 외부 도메인 불가\n(D) PTR 레코드 — 역방향 DNS 조회용이며, 정방향 도메인 매핑에 사용 불가\n\n【시험 포인트】\n▸ \"도메인 간 매핑\" → CNAME 답 선택\n▸ Alias vs CNAME — Alias는 AWS 리소스 전용, CNAME은 일반 도메인용\n▸ Route 53 레코드 타입 문제는 \"매핑 대상\" 파악이 핵심",
    "en_q": "A company's application is hosted by an internet provider at app.example.com. The company wants to access the application by using www.company.com, which the company owns and manages with Amazon Route 53. Which Route 53 record should be created to address this?",
    "en_opts": {
      "A": "A record",
      "B": "Alias record",
      "C": "CNAME record",
      "D": "Pointer (PTR) record"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369140-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 33,
    "question": "한 회사가 애플리케이션 데이터를 캐시하기 위해 Amazon ElastiCache(Redis OSS)를 사용합니다. CloudOps 엔지니어는 캐시의 복원력을 높이는 솔루션을 구현해야 합니다. 솔루션은 또한 복구 시간 목표(RTO)를 최소화해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "ElastiCache(Redis OSS)를 ElastiCache(Memcached)로 교체합니다.",
      "B": "매 시간마다 백업을 시작하는 Amazon EventBridge 규칙을 생성합니다. 필요할 때 백업을 복원합니다.",
      "C": "두 번째 가용 영역에서 읽기 전용 복제본을 생성합니다. ElastiCache(Redis OSS) 복제 그룹에 대해 Multi-AZ를 활성화합니다.",
      "D": "자동 백업을 활성화합니다. 필요할 때 백업을 복원합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ RTO(Recovery Time Objective) — 장애 발생 후 서비스 복구까지의 목표 시간\n▸ ElastiCache Multi-AZ — 자동 페일오버를 통한 고가용성 구성\n▸ 읽기 복제본 — 데이터 복사본을 다른 AZ에 실시간 동기화\n▸ Memcached vs Redis — Redis가 영구성과 복제 지원, Memcached는 기본 캐시만 제공\n\n【정답 포인트】\n▸ \"읽기 복제본 + 다른 AZ\" → 가용성 영역 장애 시 자동 페일오버 가능\n▸ \"Multi-AZ\" → ElastiCache의 네이티브 고가용성 기능\n▸ \"복원력 + 최소 RTO\" → 실시간 동기화되는 대기 인스턴스가 즉각 가능\n\n【오답 체크】\n(A) Memcached로 전환 — 캐시 기능만 제공하며 영구성 및 복제 지원 안 함\n(B) EventBridge 시간 백업 — RTO가 최대 1시간(백업 간격) 이상이므로 비효율\n(D) 자동 백업만 — 데이터 복구 시간이 길어서 RTO 최소화 불가\n\n【시험 포인트】\n▸ RTO 최소화 → \"실시간 복제\" 또는 \"자동 페일오버\" 메커니즘 필요\n▸ ElastiCache 고가용성 = Multi-AZ + 읽기 복제본\n▸ 백업은 장기 보존용이지, RTO 최소화에는 부적절",
    "en_q": "A company uses Amazon ElastiCache (Redis OSS) to cache application data. A CloudOps engineer must implement a solution to increase the resilience of the cache. The solution also must minimize the recovery time objective (RTO). Which solution will meet these requirements?",
    "en_opts": {
      "A": "Replace ElastiCache (Redis OSS) with ElastiCache (Memcached).",
      "B": "Create an Amazon EventBridge rule to initiate a backup every hour. Restore the backup when necessary.",
      "C": "Create a read replica in a second Availability Zone. Enable Multi-AZ for the ElastiCache (Redis OSS) replication group.",
      "D": "Enable automatic backups. Restore the backups when necessary."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369141-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 34,
    "question": "한 회사가 여러 AWS 계정을 보유하고 있습니다. CloudOps 엔지니어는 샌드박스 계정을 사용하여 프로덕션 계정에서 사용할 IAM 정책을 생성하고 검증합니다. CloudOps 엔지니어는 AWS CloudFormation을 사용하여 정책을 샌드박스 계정에 배포하여 테스트합니다. 테스트를 통과하면 CloudOps 엔지니어는 정책을 프로덕션에 배포합니다. CloudOps 엔지니어는 두 샌드박스 계정 및 프로덕션 계정에 AWS CloudTrail을 구성했습니다. CloudOps 엔지니어는 정책이 CloudFormation으로 배포된 후 IAM 정책의 변경 사항을 탐지하려고 합니다. CloudOps 엔지니어는 정책의 변경 사항에 대해 알림을 받아야 합니다. 최소한의 관리 노력으로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "CloudTrail에서 IAM 정책 변경을 감지할 때 CloudOps 엔지니어에게 이메일 알림을 보내도록 CloudTrail을 구성합니다.",
      "B": "AWS Lambda 함수를 호출하여 CloudFormation 스택의 드리프트를 확인하는 Amazon EventBridge 규칙을 생성합니다. CloudFormation 스택의 드리프트를 감지하면 Amazon SNS를 사용하여 CloudOps 엔지니어에게 알리도록 함수를 구성합니다.",
      "C": "AWS Identity and Access Management Access Analyzer를 사용하여 CloudTrail 활동을 기반으로 프로덕션 계정의 IAM 역할에 첨부된 IAM 정책의 정책을 생성합니다. 결과를 샌드박스 계정의 IAM 정책과 비교합니다. 정책이 다르면 CloudOps 엔지니어에게 알림을 보냅니다.",
      "D": "IAM 정책을 Amazon S3 버킷에 JSON 문서로 저장합니다. AWS Lambda 함수를 사용하여 정기적으로 IAM 정책을 S3 버킷에 저장된 JSON 문서와 비교합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudFormation 드리프트(Drift) — 스택 정의와 실제 배포된 리소스 상태 간의 차이\n▸ EventBridge — AWS 서비스 이벤트를 기반으로 자동 작업 트리거\n▸ CloudTrail — AWS API 호출 로그이지만 정책 변경 자동 알림 기능 없음\n▸ 최소 관리 노력 — 네이티브 AWS 서비스로 자동 검사 및 알림\n\n【정답 포인트】\n▸ \"드리프트 감지\" → CloudFormation의 네이티브 기능으로 의도하지 않은 변경 발견\n▸ \"EventBridge 규칙\" → 정기적 또는 이벤트 기반 Lambda 호출 자동화\n▸ \"SNS 알림\" → CloudOps 엔지니어에게 즉시 통보\n▸ 최소 오버헤드 — 기존 CloudTrail 데이터 활용하지만 AWS 매니지드 기능 사용\n\n【오답 체크】\n(A) CloudTrail 이메일 — CloudTrail은 로그 저장소일 뿐 자동 알림 기능 없음\n(C) Access Analyzer — 정책 검토용 도구이지, 정책 변경 감지 전용 솔루션 아님\n(D) S3 비교 함수 — 수동 Lambda 작성 및 주기적 실행 구성 필요하므로 운영 노력 많음\n\n【시험 포인트】\n▸ \"정책 변경 감지\" → CloudFormation 드리프트 탐지 활용\n▸ \"CloudFormation 기반 배포\" → 드리프트는 예상된 상태와 실제 상태 비교 기능\n▸ \"자동 알림\" → EventBridge + Lambda + SNS 조합이 표준 패턴",
    "en_q": "A company has multiple AWS accounts. A CloudOps engineer uses a sandbox account to create and verify IAM policies for use in a production account. The CloudOps engineer uses AWS CloudFormation to deploy policies to the sandbox account for testing. When tests pass, the CloudOps engineer deploys the policies to production. The CloudOps engineer has configured AWS CloudTrail in both the sandbox account and the production account. The CloudOps engineer wants to detect any changes to the IAM policies after the policies have been deployed by CloudFormation. The CloudOps engineer must receive notifications for any changes to the policies. Which solution will meet these requirements with the LEAST administrative effort?",
    "en_opts": {
      "A": "Configure CloudTrail to send email notifications to the CloudOps engineer when CloudTrail detects changes to the IAM policies.",
      "B": "Create an Amazon EventBridge rule to invoke an AWS Lambda function to check the CloudFormation stack for drift. Configure the function to use Amazon Simple Notification Service (Amazon SNS) to notify the CloudOps engineer if the function detects any drift.",
      "C": "Use AWS Identity and Access Management Access Analyzer to generate a policy based on CloudTrail activity for the IAM role that is attached to the IAM policies in the production account. Compare the results to the IAM policies that are in the sandbox account. Send a notification to the CloudOps engineer if the policies are different.",
      "D": "Store the IAM policies as a JSON document in an Amazon S3 bucket. Use an AWS Lambda function to periodically compare the IAM policies with the JSON document that is stored in the S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369142-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 35,
    "question": "한 금융 회사가 Amazon S3 버킷에 기밀 데이터를 저장하고 있습니다. 회사는 Amazon QuickSight를 사용하여 데이터를 분석하고 대시보드 보고서를 만듭니다. 회사는 모든 데이터 액세스 및 QuickSight 연결이 회사의 VPC 네트워크 경계 내에 유지되도록 요구합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "QuickSight용 인터페이스 VPC 엔드포인트를 생성합니다. AWS PrivateLink를 사용하여 VPC 내에서 QuickSight에 연결하도록 엔드포인트를 구성합니다. S3 데이터를 가리키는 매니페스트 파일을 생성합니다. QuickSight에 S3 버킷에 액세스할 수 있는 권한을 부여합니다.",
      "B": "QuickSight용 VPC 엔드포인트를 설정합니다. Amazon EC2 인스턴스를 프록시로 사용하여 VPC와 QuickSight 간에 직접 연결을 설정합니다. S3 데이터를 가리키는 매니페스트 파일을 생성합니다. 매니페스트를 EC2 인스턴스에 저장합니다. QuickSight에 EC2 인스턴스에 액세스할 수 있는 권한을 부여합니다.",
      "C": "Amazon S3 VPC 게이트웨이 엔드포인트를 구성합니다. QuickSight의 모든 데이터를 엔드포인트를 통해 라우팅하여 데이터를 전송합니다. QuickSight에 S3 버킷에 액세스할 수 있는 권한을 부여합니다.",
      "D": "회사의 VPC에 NAT 게이트웨이를 구성합니다. QuickSight의 모든 데이터를 NAT 게이트웨이를 통해 라우팅하여 데이터를 전송합니다. QuickSight에 S3 버킷에 액세스할 수 있는 권한을 부여합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ VPC 엔드포인트 — AWS 서비스에 VPC 내에서 직접 연결하는 AWS 리소스\n▸ Interface 엔드포인트 — PrivateLink 기술 사용, 대부분의 AWS 서비스 지원\n▸ Gateway 엔드포인트 — S3과 DynamoDB만 지원하는 단순한 엔드포인트\n▸ PrivateLink — VPC에서 AWS 서비스 또는 제3 파티 서비스에 비공개 연결\n\n【정답 포인트】\n▸ \"QuickSight 연결\" → Interface 엔드포인트 필요(Gateway 엔드포인트 미지원)\n▸ \"PrivateLink\" → QuickSight와 VPC 간 암호화된 비공개 연결\n▸ \"S3 데이터 매니페스트\" → QuickSight가 S3에 접근하도록 권한 설정\n▸ \"네트워크 경계 유지\" → 모든 트래픽이 VPC 내부에서만 이동\n\n【오답 체크】\n(B) EC2 프록시 — 복잡한 구성이며, VPC 내에서도 여전히 인터넷 게이트웨이 필요 가능성\n(C) S3 Gateway 엔드포인트 — S3 접근만 가능하며 QuickSight와의 연결 불가\n(D) NAT 게이트웨이 — 인터넷 경계를 벗어나므로 \"VPC 경계 내\" 요구사항 위반\n\n【시험 포인트】\n▸ \"AWS 서비스 + VPC 내 연결\" → Interface 엔드포인트(PrivateLink) 고려\n▸ \"데이터 보안 + 네트워크 격리\" → NAT/프록시보다 VPC 엔드포인트 우선\n▸ QuickSight는 Interface 엔드포인트만 지원 (Gateway 엔드포인트 아님)",
    "en_q": "A finance company stores confidential data in an Amazon S3 bucket. The company uses Amazon QuickSight to analyze the data and create dashboard reports. The company requires that all data access and connections to QuickSight remain within the company's VPC network boundary. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an interface VPC endpoint for QuickSight. Configure the endpoint to connect to QuickSight within the VPC by using AWS PrivateLink. Create a manifest file that points to the S3 data. Grant QuickSight permission to access the S3 bucket.",
      "B": "Set up a VPC endpoint for QuickSight. Use an Amazon EC2 instance as a proxy to establish a direct connection between the VPC and QuickSight. Create a manifest file that points to the S3 data. Store the manifest on the EC2 instance. Grant QuickSight permission to access the EC2 instance.",
      "C": "Configure an Amazon S3 VPC gateway endpoint. Route all data from QuickSight through the endpoint to transfer data. Grant QuickSight permission to access the S3 bucket.",
      "D": "Configure a NAT gateway in the company's VPC. Route all data from QuickSight through the NAT gateway to transfer data. Grant QuickSight permission to access the S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369143-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 36,
    "question": "한 회사가 프로덕션 파일 서버를 AWS로 마이그레이션하고 있습니다. 파일 서버에 저장된 모든 데이터는 가용 영역을 사용할 수 없거나 시스템 유지 관리가 수행되는 경우에도 액세스할 수 있어야 합니다. 사용자는 SMB 프로토콜을 통해 파일 서버와 상호작용할 수 있어야 합니다. 사용자는 또한 Windows ACL을 사용하여 파일 권한을 관리할 수 있어야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "단일 AWS Storage Gateway 파일 게이트웨이를 생성합니다.",
      "B": "Amazon FSx for Windows File Server Multi-AZ 파일 시스템을 생성합니다.",
      "C": "두 개의 가용 영역에 걸쳐 두 개의 AWS Storage Gateway 파일 게이트웨이를 배포합니다. 파일 게이트웨이 앞에 Application Load Balancer를 구성합니다.",
      "D": "두 개의 Amazon FSx for Windows File Server Single-AZ 파일 시스템을 배포합니다. Microsoft Distributed File System Replication(DFSR)을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon FSx for Windows File Server — AWS가 완전 관리하는 Windows 파일 공유 서비스\n▸ Multi-AZ — 여러 가용 영역에 걸친 고가용성 구성\n▸ SMB 프로토콜 — Windows 파일 공유의 표준 프로토콜\n▸ Windows ACL — NTFS 액세스 제어 목록으로 권한 관리\n▸ Storage Gateway — 온프레미스와 S3를 연결하는 하이브리드 스토리지\n\n【정답 포인트】\n▸ \"Multi-AZ\" → 자동 페일오버로 AZ 장애 시 고가용성 보장\n▸ \"SMB 프로토콜\" → FSx for Windows가 기본 지원\n▸ \"Windows ACL\" → FSx for Windows는 Active Directory 통합으로 ACL 완벽 지원\n▸ \"완전 관리 서비스\" → Storage Gateway 같은 하이브리드 솔루션보다 네이티브\n\n【오답 체크】\n(A) Storage Gateway 단일 인스턴스 — AZ 장애 시 이용 불가, 고가용성 미지원\n(C) Storage Gateway 다중 AZ + ALB — SMB는 ALB 지원이 충분하지 않으며, ACL 관리 복잡\n(D) FSx Single-AZ + DFSR — DFSR 수동 구성 필요, 관리 오버헤드 많음\n\n【시험 포인트】\n▸ \"Windows 파일 공유 + 고가용성\" → FSx for Windows Multi-AZ 최우선\n▸ \"가용 영역 장애 대비\" → Multi-AZ가 자동 페일오버 제공\n▸ AWS 매니지드 서비스(FSx) > 하이브리드 솔루션(Storage Gateway) 우선 고려",
    "en_q": "A company is migrating its production file server to AWS. All data that is stored on the file server must remain accessible if an Availability Zone becomes unavailable or when system maintenance is performed. Users must be able to interact with the file server through the SMB protocol Users also must have the ability to manage file permissions by using Windows ACLs. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a single AWS Storage Gateway file gateway.",
      "B": "Create an Amazon FSx for Windows File Server Multi-AZ file system.",
      "C": "Deploy two AWS Storage Gateway file gateways across two Availability Zones. Configure an Application Load Balancer in front of the file gateways.",
      "D": "Deploy two Amazon FSx for Windows File Server Single-AZ 2 file systems Configure Microsoft Distributed File System Replication (DFSR)."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369144-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 37,
    "question": "한 회사의 웹 애플리케이션이 밤에 여러 번 성능 문제를 경험하고 있습니다. 근본 원인 분석에 따르면 Amazon EC2 Linux 인스턴스에서 5분 동안 지속되는 CPU 사용률의 갑작스러운 증가가 나타나고 있습니다. CloudOps 엔지니어는 더 많은 CPU를 사용 중인 서비스 또는 프로세스의 프로세스 ID(PID)를 찾아야 합니다. CloudOps 엔지니어는 최소한의 노력으로 프로세스 사용률 정보를 수집하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "Amazon CloudWatch agent procstat 플러그인을 구성하여 CPU 프로세스 메트릭을 캡처합니다.",
      "B": "매 분마다 실행되도록 AWS Lambda 함수를 구성하여 PID를 캡처하고 알림을 보냅니다.",
      "C": ".pem 키를 사용하여 EC2 인스턴스에 매 밤 로그인합니다. 그런 다음 top 명령을 실행합니다.",
      "D": "기본 Amazon CloudWatch CPU 사용률 메트릭을 사용하여 CloudWatch에서 PID를 캡처합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudWatch Agent — EC2 인스턴스에서 상세 메트릭을 수집하는 AWS 에이전트\n▸ procstat 플러그인 — 프로세스별 CPU, 메모리 사용률 수집 기능\n▸ CloudWatch 메트릭 — 인스턴스 전체 CPU만 기본 제공, 프로세스별 상세 정보 없음\n▸ 최소 노력 — 자동화된 수집, 수동 로그인 불필요\n\n【정답 포인트】\n▸ \"프로세스별 CPU\" → procstat 플러그인이 정확한 PID 식별 가능\n▸ \"자동 수집\" → CloudWatch Agent 한 번 구성 후 계속 모니터링\n▸ \"중복 실행\" → 밤마다 반복되는 문제에 자동 대응\n▸ \"최소 노력\" → 매번 수동으로 로그인할 필요 없음\n\n【오답 체크】\n(B) Lambda 함수 — 프로세스 정보 수집이 복잡하며, 분 단위 실행은 오버헤드 높음\n(C) 수동 로그인 + top — 매 밤 수동 작업 필요하므로 운영 비효율\n(D) 기본 CloudWatch 메트릭 — 전체 인스턴스 CPU만 보여주고, 프로세스별 상세 정보 불가\n\n【시험 포인트】\n▸ \"프로세스별 메트릭\" → CloudWatch procstat 플러그인 표준 답\n▸ \"자동 모니터링 + 최소 운영\" → 에이전트 기반 솔루션 우선\n▸ 기본 CloudWatch 메트릭은 인스턴스 전체 수준만 제공",
    "en_q": "A company has a web application that is experiencing performance problems many times each night. A root cause analysis reveals sudden increases in CPU utilization that last 5 minutes on an Amazon EC2 Linux instance. A CloudOps engineer must find the process ID (PID) of the service or process that is consuming more CPU. What should the CloudOps engineer do to collect the process utilization information with the LEAST amount of effort?",
    "en_opts": {
      "A": "Configure the Amazon CloudWatch agent procstat plugin to capture CPU process metrics.",
      "B": "Configure an AWS Lambda function to run every minute to capture the PID and send a notification.",
      "C": "Log in to the EC2 instance by using a .pem key each night. Then run the top command.",
      "D": "Use the default Amazon CloudWatch CPU utilization metric to capture the PID in CloudWatch."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369215-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 38,
    "question": "한 회사가 웹사이트의 최종 사용자에 대한 가용성을 모니터링해야 합니다. 회사는 웹사이트의 가동 시간이 99% 미만으로 감소하는 경우 Amazon SNS 알림을 제공하는 솔루션이 필요합니다. 모니터링은 웹사이트에서의 사용자 경험에 대한 정확한 관점을 제공해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "웹사이트의 로그를 기반으로 Amazon CloudWatch 경보를 생성하여 CloudWatch Logs 로그 그룹에 게시합니다. HTTP 4xx 및 5xx 오류의 수가 지정된 임계값을 초과하는 경우 SNS 알림을 게시하도록 경보를 구성합니다.",
      "B": "CloudWatch에 게시된 웹사이트의 메트릭을 기반으로 Amazon CloudWatch 경보를 생성합니다. 변칙 탐지를 기반으로 SNS 알림을 게시하도록 경보를 구성합니다.",
      "C": "Amazon CloudWatch Synthetics 하트비트 모니터링 카나리를 생성합니다. 카나리를 최종 사용자용 웹사이트 URL과 연결합니다. 카나리에 대한 CloudWatch 경보를 생성합니다. SuccessPercent 메트릭 값이 99% 미만인 경우 SNS 알림을 게시하도록 경보를 구성합니다.",
      "D": "Amazon CloudWatch Synthetics 끊어진 링크 검사기 모니터링 카나리를 생성합니다. 카나리를 최종 사용자용 웹사이트 URL과 연결합니다. 카나리에 대한 CloudWatch 경보를 생성합니다. SuccessPercent 메트릭 값이 99% 미만인 경우 SNS 알림을 게시하도록 경보를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudWatch Synthetics — 사용자의 관점에서 애플리케이션 모니터링하는 합성 모니터링\n▸ 카나리(Canary) — 정기적으로 엔드포인트를 호출하여 가용성 테스트\n▸ SuccessPercent — 성공한 검사 비율 메트릭\n▸ 하트비트 모니터링 — 주기적 헬스 체크(일반적 목적)\n▸ 끊어진 링크 검사기 — 링크 유효성 확인 전용\n\n【정답 포인트】\n▸ \"최종 사용자 경험\" → Synthetics 카나리가 실제 사용자 관점 제공\n▸ \"가동 시간 99% 모니터링\" → SuccessPercent 메트릭으로 직접 측정\n▸ \"하트비트 모니터링\" → 일반적 가용성 테스트(링크 검사보다 광범위)\n▸ \"정확한 사용자 관점\" → 실제 HTTP 요청과 응답 검증\n\n【오답 체크】\n(A) CloudWatch Logs 기반 — 로그 기반 분석은 실시간성 낮으며, 사용자 경험을 직접 모니터링 아님\n(B) 변칙 탐지 — 애플리케이션 메트릭 기반이지, 사용자가 실제 경험하는 가용성 아님\n(D) 끊어진 링크 검사기 — 링크 유효성만 확인하며, 전체 가용성(99%) 모니터링에 부적절\n\n【시험 포인트】\n▸ \"사용자 경험\" + \"가용성 모니터링\" → Synthetics 카나리 표준 답\n▸ 하트비트 모니터링 vs 끊어진 링크 검사기 — 하트비트가 일반적 가용성용\n▸ 로그/메트릭 기반 모니터링은 간접적이므로 합성 모니터링에 미달",
    "en_q": "A company needs to monitor its website's availability to end users. The company needs a solution to provide an Amazon Simple Notification Service (Amazon SNS) notification if the website's uptime decreases to less than 99%. The monitoring must provide an accurate view of the user experience on the website. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an Amazon CloudWatch alarm that is based on the website's logs that are published to a CloudWatch Logs log group. Configure the alarm to publish an SNS notification if the number of HTTP 4xx errors and 5xx errors exceeds a specified threshold.",
      "B": "Create an Amazon CloudWatch alarm that is based on the website's published metrics in CloudWatch. Configure the alarm to publish an SNS notification that is based on anomaly detection.",
      "C": "Create an Amazon CloudWatch Synthetics heartbeat monitoring canary. Associate the canary with the website's URL for end users. Create a CloudWatch alarm for the canary. Configure the alarm to publish an SNS notification if the value of the SuccessPercent metric is less than 99%.",
      "D": "Create an Amazon CloudWatch Synthetics broken link checker monitoring canary. Associate the canary with the website's URL for end users. Create a CloudWatch alarm for the canary. Configure the alarm to publish an SNS notification if the value of the SuccessPercent metric is less than 99%."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369147-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 39,
    "question": "한 회사가 여러 가용 영역에 걸쳐 Amazon EC2 Auto Scaling을 사용합니다. 회사는 EC2 인스턴스가 프라이빗 서브넷에서 프로비저닝되는지 확인해야 합니다. 회사는 최근 회사의 VPC에서 NAT 게이트웨이 수를 1개로 줄여 클라우드 인프라를 최적화했습니다. 인프라 업데이트 후 일부 EC2 인스턴스가 인터넷 연결을 잃었습니다. CloudOps 엔지니어는 연결 문제를 해결해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기존 NAT 게이트웨이를 동일한 서브넷의 NAT 인스턴스로 교체합니다.",
      "B": "인터넷 트래픽을 위해 기존 NAT 게이트웨이를 대상으로 하도록 VPC 라우팅 테이블을 업데이트합니다.",
      "C": "인터넷 트래픽을 위해 인터넷 게이트웨이를 대상으로 하도록 VPC 라우팅 테이블을 업데이트합니다.",
      "D": "기존 NAT 게이트웨이에 보조 IP 주소를 추가합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ NAT 게이트웨이 — 프라이빗 서브넷이 인터넷과 통신하도록 중개하는 AWS 매니지드 서비스\n▸ VPC 라우팅 테이블 — 트래픽이 어느 경로로 이동할지 정의\n▸ 인터넷 게이트웨이 — 인터넷과 VPC 간의 연결(프라이빗 서브넷에서 직접 사용 불가)\n▸ NAT 인스턴스 — 수동 관리 필요한 EC2 기반 NAT(매니지드 서비스 아님)\n\n【정답 포인트】\n▸ \"NAT 게이트웨이 1개로 감소\" → 일부 프라이빗 서브넷이 NAT를 가리키지 않음 가능성\n▸ \"라우팅 테이블 업데이트\" → 각 프라이빗 서브넷의 기본 경로(0.0.0.0/0)를 NAT 게이트웨이로 설정\n▸ \"프라이빗 서브넷 유지\" → 프라이빗 서브넷은 NAT 게이트웨이를 통해서만 인터넷 접근\n▸ 근본 원인 — 일부 서브넷의 라우팅 테이블이 NAT를 가리키지 않음\n\n【오답 체크】\n(A) NAT 인스턴스로 교체 — 수동 관리 필요하며, 기존 NAT 게이트웨이 인프라 낭비\n(C) 인터넷 게이트웨이로 변경 — 프라이빗 서브넷이 인터넷 게이트웨이에 직접 접근 불가(아키텍처 위반)\n(D) 보조 IP 주소 추가 — 라우팅 문제와 무관하며, 수용 용량 개선만 가능\n\n【시험 포인트】\n▸ \"일부 인스턴스만 연결 손실\" → 라우팅 테이블 구성 불일치 의심\n▸ \"프라이빗 서브넷 + NAT 1개\" → 모든 프라이빗 서브넷의 기본 경로가 NAT를 가리켜야 함\n▸ 인프라 최적화 후 연결 문제 → 라우팅 테이블 재확인 필수",
    "en_q": "A company uses Amazon EC2 Auto Scaling across multiple Availability Zones. The company must ensure that EC2 instances are provisioned in private subnets. The company recently optimized its cloud infrastructure by reducing the number of NAT gateways in the company's VPC to one. Some EC2 instances lost internet connectivity after the infrastructure update. A CloudOps engineer must resolve the connectivity issue. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Replace the existing NAT gateway with a NAT instance in the same subnet.",
      "B": "Update VPC route tables to target the existing NAT gateway for internet traffic.",
      "C": "Update VPC route tables to target an internet gateway for internet traffic.",
      "D": "Add secondary IP addresses to the existing NAT gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369145-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 40,
    "question": "한 회사가 AWS CloudFormation을 사용하여 AWS의 Amazon EC2 인스턴스 스택을 관리합니다. CloudOps 엔지니어는 누군가 스택을 삭제하더라도 인스턴스 및 인스턴스의 모든 데이터를 유지해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "CloudFormation 템플릿의 EC2 인스턴스 리소스에 대해 DeletionPolicy 속성을 Snapshot으로 설정합니다.",
      "B": "Amazon Data Lifecycle Manager(Amazon DLM)를 사용하여 백업을 자동화합니다.",
      "C": "AWS Backup에서 백업 계획을 생성합니다.",
      "D": "CloudFormation 템플릿의 EC2 인스턴스 리소스에 대해 DeletionPolicy 속성을 Retain으로 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ CloudFormation DeletionPolicy — 스택 삭제 시 리소스 처리 방식 정의\n▸ Retain — 리소스를 보존하고 스택에서만 제거\n▸ Snapshot — EBS 볼륨의 스냅샷만 생성, 인스턴스 자체는 삭제\n▸ Delete — 기본값으로 리소스 삭제(데이터 손실)\n\n【정답 포인트】\n▸ \"인스턴스 및 모든 데이터 유지\" → Retain으로 리소스 완전 보존\n▸ \"스택 삭제\" → CloudFormation이 제거하되 실제 AWS 리소스는 유지\n▸ \"데이터 손실 방지\" → Snapshot은 스냅샷만 만들고 인스턴스는 삭제됨\n\n【오답 체크】\n(A) Snapshot 설정 — EBS 스냅샷은 생성되지만 인스턴스 자체는 삭제됨\n(B) DLM 자동화 — 백업은 생성되지만 스택 삭제 시 인스턴스는 여전히 삭제됨\n(C) AWS Backup — 백업 생성이지, 스택 삭제 시 보호 메커니즘 아님\n\n【시험 포인트】\n▸ \"스택 삭제해도 리소스 보존\" → DeletionPolicy: Retain 표준 답\n▸ Snapshot vs Retain — Snapshot은 스냅샷만, Retain은 전체 리소스 보존\n▸ CloudFormation 라이프사이클 정책 문제는 DeletionPolicy 속성 확인 필수",
    "en_q": "A company uses AWS CloudFormation to manage a stack of Amazon EC2 instances on AWS. A CloudOps engineer needs to keep the instances and all of the instances' data, even if someone deletes the stack. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Set the DeletionPolicy attribute to Snapshot for the EC2 instance resource in the CloudFormation template.",
      "B": "Automate backups by using Amazon Data Lifecycle Manager (Amazon DLM).",
      "C": "Create a backup plan in AWS Backup.",
      "D": "Set the DeletionPolicy attribute to Retain for the EC2 instance resource in the CloudFormation template."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369146-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 41,
    "question": "CloudOps 엔지니어가 Auto Scaling 그룹에 속하는 Amazon EC2 인스턴스에 애플리케이션을 배포할 준비를 하고 있습니다. 애플리케이션은 의존성을 설치해야 합니다. 애플리케이션 업데이트는 매주 발급됩니다. CloudOps 엔지니어는 정기적으로 애플리케이션 업데이트를 통합하는 솔루션을 구현해야 합니다. 솔루션은 또한 Amazon Machine Image(AMI) 생성 중에 취약점 검사를 수행해야 합니다. 이 요구사항을 충족하는 가장 운영적으로 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "Packer를 사용하는 스크립트를 생성합니다. cron 작업을 실행하도록 스크립트를 예약합니다.",
      "B": "EC2 인스턴스에 애플리케이션 및 의존성을 설치합니다. EC2 인스턴스의 AMI를 생성합니다.",
      "C": "EC2 Image Builder를 사용하여 애플리케이션 및 의존성을 설치하는 사용자 정의 레시피를 사용합니다.",
      "D": "Amazon EventBridge 예약 규칙을 사용하여 EC2 CreateImage API 작업을 호출합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ EC2 Image Builder — AWS의 완전 관리형 AMI 빌드 서비스\n▸ 취약점 검사 — AMI 생성 중 보안 스캔 자동 수행\n▸ 사용자 정의 레시피 — Image Builder의 구성 요소를 정의하는 설정\n▸ Packer — HashiCorp의 오픈소스 AMI 빌드 도구(AWS 미관리)\n▸ 운영 효율성 — 자동화, 최소 유지보수, 정기적 업데이트\n\n【정답 포인트】\n▸ \"Image Builder\" → AWS 완전 관리형으로 취약점 검사 자동 포함\n▸ \"사용자 정의 레시피\" → 애플리케이션 설치 및 의존성 정의\n▸ \"주간 업데이트\" → 일정 기반 AMI 자동 생성 가능\n▸ \"취약점 검사\" → Image Builder의 기본 기능\n\n【오답 체크】\n(A) Packer + cron 스크립트 — 취약점 검사 구현 필요하며, 유지보수 오버헤드 높음\n(B) 수동 설치 — 일회성 AMI이며, 주간 업데이트 자동화 불가\n(D) EventBridge + CreateImage API — 취약점 검사 기능 없으며, 이미지 구성 표준화 부재\n\n【시험 포인트】\n▸ \"AMI 빌드 + 취약점 검사 + 정기적 업데이트\" → EC2 Image Builder 표준 답\n▸ Image Builder는 AWS 네이티브 서비스이며 보안 검사 기본 포함\n▸ Packer는 수동 구성 필요하므로 \"운영 효율\" 측면에서 부적절",
    "en_q": "A CloudOps engineer is preparing to deploy an application to Amazon EC2 instances that are in an Auto Scaling group. The application requires dependencies to be installed. Application updates are issued weekly. The CloudOps engineer needs to implement a solution to incorporate the application updates on a regular basis. The solution also must conduct a vulnerability scan during Amazon Machine Image (AMI) creation. What is the MOST operationally efficient solution that meets these requirements?",
    "en_opts": {
      "A": "Create a script that uses Packer. Schedule a cron job to run the script.",
      "B": "Install the application and its dependencies on an EC2 instance. Create an AMI of the EC2 instance.",
      "C": "Use EC2 Image Builder with a custom recipe to install the application and its dependencies.",
      "D": "Invoke the EC2 CreateImage API operation by using an Amazon EventBridge scheduled rule."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369341-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 42,
    "question": "한 회사가 여러 가용 영역에 분산된 Amazon EC2 인스턴스 세트에서 애플리케이션을 호스팅할 계획을 세우고 있습니다. 애플리케이션은 초당 수백만 개의 요청으로 확장할 수 있어야 합니다. CloudOps 엔지니어는 EC2 인스턴스로 트래픽을 분산하는 솔루션을 설계해야 합니다. 솔루션은 갑작스럽고 변동성이 큰 트래픽 패턴을 처리하도록 최적화하면서 각 가용 영역에 대해 단일 정적 IP 주소를 사용해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Simple Queue Service(Amazon SQS) 큐",
      "B": "Application Load Balancer",
      "C": "AWS Global Accelerator",
      "D": "Network Load Balancer"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Network Load Balancer(NLB) — Layer 4(전송 계층) 로드 밸런서, 높은 처리량과 낮은 지연시간 제공\n▸ 정적 IP — 각 AZ마다 고정 IP 주소 할당 가능(Elastic IP)\n▸ 변동성 높은 트래픽 — 급격한 트래픽 변화에 빠르게 대응 필요\n▸ Application Load Balancer(ALB) — Layer 7(애플리케이션 계층) 로드 밸런서\n▸ Global Accelerator — 전 지역 다중 AZ 트래픽 최적화(과도한 기능)\n\n【정답 포인트】\n▸ \"초당 수백만 요청\" → NLB가 ALB보다 높은 처리량 제공\n▸ \"각 AZ에 정적 IP\" → NLB가 AZ별 Elastic IP 지원\n▸ \"변동성 높은 트래픽\" → NLB가 극도의 성능 변화에 최적화\n▸ \"트래픽 분산\" → 로드 밸런서 역할 명확\n\n【오답 체크】\n(A) Amazon SQS — 메시지 큐이며, 직접 트래픽 분산 기능 없음\n(B) Application Load Balancer — Layer 7 기반으로 처리 오버헤드 있으며, 초당 수백만 요청에는 NLB 부적합\n(C) AWS Global Accelerator — 초당 수백만 요청은 단일 리전 범위이므로 필요 없음, 다중 리전 최적화용\n\n【시험 포인트】\n▸ \"초당 수백만 요청\" + \"정적 IP\" + \"변동성 트래픽\" → Network Load Balancer 답\n▸ ALB(Layer 7) vs NLB(Layer 4) — 성능과 처리량이 핵심일 때 NLB 선택\n▸ Global Accelerator는 다중 리전, 지역 분산용이므로 단일 리전 문제에 과도",
    "en_q": "A company is planning to host an application on a set of Amazon EC2 instances that are distributed across multiple Availability Zones. The application must be able to scale to millions of requests each second. A CloudOps engineer must design a solution to distribute the traffic to the EC2 instances. The solution must be optimized to handle sudden and volatile traffic patterns while using a single static IP address for each Availability Zone. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Amazon Simple Queue Service (Amazon SQS) queue",
      "B": "Application Load Balancer",
      "C": "AWS Global Accelerator",
      "D": "Network Load Balancer"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369148-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 43,
    "question": "한 회사의 상태 저장 웹 애플리케이션이 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 호스팅됩니다. 인스턴스들은 단일 대상 그룹을 가진 Application Load Balancer(ALB) 뒤에서 실행됩니다. ALB는 Amazon CloudFront 배포의 원본으로 구성됩니다. 사용자들이 웹 애플리케이션에서 무작위로 로그아웃된다고 보고합니다. CloudOps 엔지니어가 이 문제를 해결하기 위해 취해야 할 조치의 조합은? (두 개 선택)",
    "options": [
      "A. ALB 대상 그룹에서 최소 미처리 요청 알고리즘으로 변경합니다.",
      "B. CloudFront 배포 캐시 동작에서 쿠키 포워딩을 구성합니다.",
      "C. CloudFront 배포 캐시 동작에서 헤더 포워딩을 구성합니다.",
      "D. ALB 리스너 규칙에서 그룹 수준 스티키니스를 활성화합니다.",
      "E. ALB 대상 그룹에서 스티키 세션을 활성화합니다."
    ],
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ CloudFront 캐시 동작—기본적으로 쿠키와 호스트 헤더를 캐시 키에서 제외하여 세션 정보 손실 유발\n▸ 스티키 세션(Sticky Session)—ALB가 동일 클라이언트 요청을 같은 인스턴스로 라우팅하는 기능\n▸ 상태 저장 애플리케이션—클라이언트의 세션 상태를 서버에 유지하는 형태\n\n【정답 포인트】\nB(쿠키 포워딩): CloudFront가 원본으로부터 응답받은 Set-Cookie 헤더를 클라이언트에 전달하고, 클라이언트 요청의 쿠키를 원본으로 포워딩해야 세션 쿠키가 보존됨\nE(스티키 세션): 같은 사용자의 요청이 항상 같은 EC2 인스턴스로 라우팅되어 세션 상태 유지 가능\n\n【오답 체크】\n(A) 최소 미처리 요청 알고리즘은 로드 밸런싱 방식일 뿐 세션 유지와 무관하며, 오히려 인스턴스 간 분산을 강화하여 문제 악화\n(C) 헤더 포워딩은 쿠키 포워딩과 달리 세션 정보(쿠키)는 캐시하지 않으므로 근본 해결책이 아님\n(D) ALB에는 '그룹 수준 스티키니스' 개념이 없으며, 스티키 세션\n(E)이 정확한 표현\n\n【시험 포인트】\n▸ CloudFront + 상태 저장 애플리케이션 조합에서는 쿠키 포워딩(cache behavior 설정)과 ALB 스티키 세션이 필수\n▸ 세션 유지 2계층: ① CloudFront에서 쿠키 투명 전달 ② ALB에서 동일 인스턴스로 라우팅\n▸ 속도 저하 원인: CloudFront 기본값은 쿠키를 캐시 키에서 제외하여 세션 정보 손실",
    "en_q": "A company has a stateful web application that is hosted on Amazon EC2 instances in an Auto Scaling group. The instances run behind an Application Load Balancer (ALB) that has a single target group. The ALB is configured as the origin in an Amazon CloudFront distribution. Users are reporting random logouts from the web application. Which combination of actions should a CloudOps engineer take to resolve this problem? (Choose two.)",
    "en_opts": [
      "A: Change to the least outstanding requests algorithm on the ALB target group",
      "B: Configure cookie forwarding in the CloudFront distribution cache behavior",
      "C: Configure header forwarding in the CloudFront distribution cache behavior",
      "D: Enable group-level stickiness on the ALB listener rule",
      "E: Enable sticky sessions on the ALB target group"
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369149-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 44,
    "question": "글로벌 회사가 AWS Organizations의 조직을 사용하여 여러 AWS 계정을 관리합니다. 규정 준수를 위해 회사는 5개 AWS 리전에 워크로드 환경을 배포합니다. 각 리전별로 별도의 AWS 계정이 있습니다. 회사는 모든 환경의 VPC를 디렉토리 역할의 중앙 공유 VPC와 공유 모니터링 VPC에 연결해야 합니다. 공유 계정들은 각각 별도의 AWS 계정에 있습니다. 이 요구사항을 충족하는 솔루션은?",
    "options": [
      "A. 중앙 공유 AWS 계정에 Transit Gateway를 생성합니다. Transit Gateway를 회사의 AWS 계정과 공유합니다. 모든 VPC를 중앙 Transit Gateway에 연결합니다.",
      "B. 회사가 리소스를 배포한 모든 리전에 각각 Transit Gateway를 생성합니다. Transit Gateway를 회사 AWS 계정과 공유합니다. 각 리전의 VPC를 같은 리전의 Transit Gateway에 연결합니다. Transit Gateway를 피어링합니다. 모든 라우팅 테이블에 적절한 경로를 생성합니다.",
      "C. 공유 VPC를 위한 가상 프라이빗 게이트웨이를 생성합니다. 워크로드 VPC를 위한 고객 게이트웨이를 생성합니다. 디렉토리 VPC, 모니터링 VPC 및 모든 워크로드 VPC 간 AWS Site-to-Site VPN 연결을 구성합니다.",
      "D. 중앙 공유 VPC, 공유 모니터링 VPC 및 모든 워크로드 VPC 간 VPC 피어링 연결을 생성합니다."
    ],
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Transit Gateway—리전 내 및 리전 간 VPC/온프레미스를 연결하는 중앙 허브(스포크 모델)\n▸ Transit Gateway Peering—서로 다른 리전의 Transit Gateway 간 연결\n▸ VPC 피어링—1:1 양방향 연결로, 다중 VPC 연결 시 메시인그래프 복잡도\n▸ Site-to-Site VPN—온프레미스 환경 연결용, 5개 리전 × 2개 공유 VPC = 최소 10개 VPN 필요\n\n【정답 포인트】\nB(리전별 Transit Gateway + 피어링): 5개 리전 각각에 TGW 배포 → 같은 리전의 모든 VPC(워크로드 + 공유)를 로컬 TGW에 연결 → 리전 간 TGW 피어링으로 전역 연결 → 확장성 우수, 중앙집중식 관리 최소화\n\n【오답 체크】\n(A) 중앙 TGW는 단일 리전의 VPC만 직접 연결 가능하며, 5개 리전 분산 배포에는 크로스 리전 능력 부족\n(C) Site-to-Site VPN은 온프레미스-AWS 간 용도이며, 각 VPC마다 별도 VPN 터널 필요로 관리 복잡도 극대\n(D) 5개 리전 × 3개 VPC(워크로드 1개 + 공유 2개) = 15개 VPC를 모두 피어링하면 조합 수(15×14/2=105)로 관리 불가능\n\n【시험 포인트】\n▸ 다중 VPC 다중 리전 환결 → Transit Gateway 피어링이 표준 패턴\n▸ 리전별 배포 = 각 리전의 지연 시간 최소화 + 로컬 라우팅 table 관리\n▸ VPC 피어링은 메시 수가 지수함수적으로 증가하므로 3개 이상 VPC 연결 시 TGW 선택",
    "en_q": "A global company uses an organization in AWS Organizations to manage multiple AWS accounts. To comply with regulations, the company deploys workload environments to five AWS Regions. The company has a separate AWS account for each Region. The company needs to connect every environment's VPC to a central shared VPC that serves as a directory and to a shared monitoring VPC. The shared accounts are each in separate AWS accounts. Which solution will meet these requirements?",
    "en_opts": [
      "A: Create a transit gateway in the central shared AWS account. Share the transit gateway with the company's AWS accounts. Connect all VPCs to the central transit gateway.",
      "B: Create a separate transit gateway in every Region where the company has deployed resources. Share the transit gateways with company's AWS accounts. Connect the VPC in each Region to the transit gateway that is in the same Region. Peer the transit gateways. Create appropriate routes in all route tables.",
      "C: Create a virtual private gateway for the shared VPCs. Create a customer gateway for the workload VPCs. Configure an AWS Site-to-Site VPN connection between the directory VPC, the monitoring VPC, and every workload VPC.",
      "D: Create VPC peering connections between the central shared VPC, the shared monitoring VPC, and every workload VPC."
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369150-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 45,
    "question": "한 회사가 Amazon RDS for PostgreSQL 데이터베이스에 중요 정보를 저장합니다. 회사는 피크 시간 동안 성능 저하, 높은 CPU 사용률, 증가된 쿼리 지연 시간, 연결 타임아웃을 확인합니다. 또한 피크 시간 동안 사용자 연결의 급증을 식별합니다. 연결 급증이 데이터베이스의 읽기 성능을 영향을 미칩니다. 회사가 데이터베이스 성능 문제를 해결하려고 합니다. 이 요구사항을 충족하는 단계의 조합은? (두 개 선택)",
    "options": [
      "A. Amazon RDS Performance Insights를 사용하여 데이터베이스 성능에 가장 영향을 미치는 SQL 쿼리를 분석합니다. 분석 결과에 따라 SQL 쿼리를 업데이트합니다.",
      "B. Amazon CloudWatch Logs Insights를 사용하여 데이터베이스 쿼리를 분석하고 성능 병목을 식별합니다. 분석 결과에 따라 쿼리를 업데이트합니다.",
      "C. 단일 가용 영역을 가진 Amazon RDS for PostgreSQL을 사용합니다.",
      "D. 연결 풀링을 완전히 비활성화하여 모든 사용자 연결이 피크 시간에도 동등하게 처리되도록 합니다.",
      "E. RDS Proxy를 구현하여 연결 풀링을 활성화합니다."
    ],
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ RDS Performance Insights—실시간 DB 성능 모니터링, 느린 쿼리 식별 및 대기 이벤트 분석\n▸ RDS Proxy—연결 풀링으로 데이터베이스 연결 재사용, 연결 오버헤드 감소(최대 1,000배)\n▸ CloudWatch Logs Insights—로그 쿼리 분석 도구지만, DB 성능 메트릭스(DB Load, Active Sessions) 직접 분석 불가\n▸ 연결 급증—애플리케이션이 새로운 연결을 계속 생성하면 데이터베이스 리소스(메모리, CPU) 소진\n\n【정답 포인트】\nA(Performance Insights): 실시간으로 느린 쿼리, 대기 이벤트(Lock, I/O), DB Load 분석 → 쿼리 최적화로 근본적 처리량 개선\nE(RDS Proxy): 애플리케이션 연결을 풀 내 기존 연결로 재사용 → 새 연결 생성 오버헤드 제거, CPU/메모리 절감\n\n【오답 체크】\n(B) CloudWatch Logs Insights는 텍스트 로그 분석 도구로, 데이터베이스의 성능 메트릭(DB Load, wait events)을 직접 측정하지 않음\n(C) 다중 AZ는 가용성 향상이지 피크 시간 성능 개선과 무관하며, CPU/메모리 병목은 해결되지 않음\n(D) 연결 풀링 비활성화는 반대 방향으로, 각 사용자 연결이 독립적 리소스를 점유하므로 성능 악화\n\n【시험 포인트】\n▸ 데이터베이스 성능 = 느린 쿼리(쿼리 최적화) + 연결 오버헤드(RDS Proxy)\n▸ Performance Insights는 어느 쿼리가 병목인지 식별 → 개발자가 쿼리 개선\n▸ RDS Proxy는 연결 수를 물리적으로 줄여 데이터베이스 리소스 절감\n▸ 연결 급증은 성능 저하의 주요 원인이므로 RDS Proxy 필수",
    "en_q": "A company stores critical information in an Amazon RDS for PostgreSQL database. The company notices degraded performance, high CPU utilization, increased query latency, and connection timeouts during peak shopping hours. The company also identifies surges in user connections during peak hours. The connection surges affect the read performance of the database. The company wants to resolve the database performance issues. Which combination of steps will meet this requirement? (Choose two.)",
    "en_opts": [
      "A: Use Amazon RDS Performance Insights to analyze the SQL queries that most affect database performance. Update the SQL queries based on the analysis findings.",
      "B: Use Amazon CloudWatch Logs Insights to analyze the database queries and identify performance bottlenecks. Update the queries based on the analysis findings.",
      "C: Use Amazon RDS for PostgreSQL with a single Availability Zone.",
      "D: Disable connection pooling entirely to ensure that all user connections are treated equally, even during peak hours.",
      "E: Implement RDS Proxy with connection pooling."
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369151-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 46,
    "question": "한 회사가 Application Load Balancer(ALB) 뒤의 3개 Amazon EC2 인스턴스에서 웹 애플리케이션을 실행합니다. 회사는 트래픽 증가의 무작위 주기가 애플리케이션의 성능 저하를 초래한다는 것을 알 수 있습니다. CloudOps 엔지니어는 증가된 트래픽을 수용하기 위해 애플리케이션을 확장해야 합니다. 이 요구사항을 충족하는 솔루션은?",
    "options": [
      "A. 애플리케이션 지연 시간을 모니터링하는 Amazon CloudWatch 알람을 생성합니다. 원하는 임계값에 도달하면 각 EC2 인스턴스의 크기를 늘리도록 알람을 구성합니다.",
      "B. 애플리케이션 지연 시간을 모니터링하는 Amazon EventBridge 규칙을 생성합니다. 원하는 임계값에 도달하면 EC2 인스턴스를 ALB에 추가하도록 구성합니다.",
      "C. 애플리케이션을 대상 추적 확장 정책이 있는 Auto Scaling 그룹의 EC2 인스턴스에 배포합니다. ALB를 Auto Scaling 그룹에 연결합니다.",
      "D. 애플리케이션을 예약 확장 정책이 있는 Auto Scaling 그룹의 EC2 인스턴스에 배포합니다. ALB를 Auto Scaling 그룹에 연결합니다."
    ],
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 수평 확장(Horizontal Scaling)—인스턴스 개수를 늘려 처리량 증가\n▸ 수직 확장(Vertical Scaling)—단일 인스턴스의 크기/성능을 증가(한계 존재)\n▸ 대상 추적 정책(Target Tracking)—특정 메트릭(CPU, ALB Target Response Time)에 따라 자동 확장\n▸ 예약 확장(Scheduled Scaling)—미리 정한 시간에 확장, 예측 가능한 트래픽 패턴용\n▸ EventBridge—이벤트 기반 워크플로우지만, 자동 확장은 전담 서비스 아님\n\n【정답 포인트】\nC(Auto Scaling + 대상 추적): 무작위 트래픽 급증에 대응하려면 메트릭 기반 동적 확장 필요 → 대상 추적 정책이 특정 메트릭(ALB Target Response Time, RequestCountPerTarget)을 모니터링 → 자동으로 인스턴스 개수 조정 → ALB 연결로 즉시 로드 밸런싱\n\n【오답 체크】\n(A) 수직 확장은 한계가 있고, CloudWatch 알람만으로는 자동 실행 불가능(Lambda 또는 Systems Manager 추가 필요)\n(B) EventBridge는 이벤트 라우팅 서비스이며, Auto Scaling의 전담 기능(대상 추적, 조정 정책)을 대체하지 못함\n(D) 예약 확장은 고정 시간 기반이므로 무작위 트래픽 급증에 대응 불가\n\n【시험 포인트】\n▸ 무작위 트래픽 = 메트릭 기반 동적 확장(대상 추적) 선택\n▸ 예측 가능한 시간대(오전 9-11시) = 예약 확장\n▸ Auto Scaling이 수평 확장의 표준 패턴(확장 그룹 내 인스턴스 개수 조정)\n▸ ALB와 Auto Scaling 통합이 필수(로드 밸런싱 + 동적 인스턴스 관리)",
    "en_q": "A company runs a web application on three Amazon EC2 instances behind an Application Load Balancer (ALB). The company notices that random periods of increased traffic cause a degradation in the application's performance. A CloudOps engineer must scale the application to meet the increased traffic. Which solution meets these requirements?",
    "en_opts": [
      "A: Create an Amazon CloudWatch alarm to monitor application latency and increase the size of each EC2 instance if the desired threshold is reached.",
      "B: Create an Amazon EventBridge rule to monitor application latency and add an EC2 instance to the ALB if the desired threshold is reached.",
      "C: Deploy the application to an Auto Scaling group of EC2 instances with a target tracking scaling policy. Attach the ALB to the Auto Scaling group.",
      "D: Deploy the application to an Auto Scaling group of EC2 instances with a scheduled scaling policy. Attach the ALB to the Auto Scaling group."
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369216-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 47,
    "question": "한 회사의 보고서 생성 작업이 예전에는 15분에 완료되었지만 이제 1시간이 걸립니다. 애플리케이션이 보고서를 생성합니다. 애플리케이션은 Amazon EC2 인스턴스에서 실행되고 Amazon RDS for MySQL 데이터베이스에서 데이터를 추출합니다. CloudOps 엔지니어가 RDS 인스턴스의 Amazon CloudWatch 대시보드를 확인하고 보고서가 실행되지 않을 때도 읽기 IOPS 메트릭이 높다는 것을 알 수 있습니다. CloudOps 엔지니어가 RDS 인스턴스의 성능과 가용성을 개선해야 합니다. 이 요구사항을 충족하는 솔루션은?",
    "options": [
      "A. RDS 인스턴스 앞에 Amazon ElastiCache 클러스터를 구성합니다. 보고서 생성 작업을 업데이트하여 ElastiCache 클러스터를 쿼리합니다.",
      "B. RDS 읽기 복제본을 배포합니다. 보고서 생성 작업을 업데이트하여 리더 엔드포인트를 쿼리합니다.",
      "C. Amazon CloudFront 배포를 생성합니다. RDS 인스턴스를 원본으로 설정합니다. 보고서 생성 작업을 업데이트하여 CloudFront 배포를 쿼리합니다.",
      "D. RDS 인스턴스의 크기를 늘립니다."
    ],
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 읽기 복제본(Read Replica)—쓰기는 Primary, 읽기는 Replica에서 처리하여 I/O 분산\n▸ 읽기 IOPS 지속—보고서 작업만의 문제가 아니라 백그라운드 작업도 높은 읽기 IOPS 유발\n▸ ElastiCache—애플리케이션 캐싱용이지만, 기존 쿼리 코드 대규모 수정 필요\n▸ CloudFront—정적 웹 콘텐츠용이며, 동적 데이터베이스 쿼리에는 부적합\n\n【정답 포인트】\nB(Read Replica): 읽기 복제본이 원본 데이터베이스와 동기화되므로 최신 데이터 반영 → 보고서 생성 작업은 복제본의 리더 엔드포인트로 재지정 → Primary는 애플리케이션의 쓰기/트랜잭션만 처리 → IOPS 부하 분산 → 복제본이 별도 인스턴스이므로 가용성도 향상\n\n【오답 체크】\n(A) ElastiCache는 애플리케이션 로직이 캐시 계층을 인식해야 하므로, 기존 SQL 쿼리를 Redis/Memcached 명령어로 재작성 필요 → 높은 개발 비용\n(C) CloudFront는 웹 페이지, 이미지 같은 정적 콘텐츠 캐싱용이며, 동적 데이터베이스 쿼리 응답은 캐싱하지 않음\n(D) 인스턴스 크기 증가는 수직 확장이지만, 읽기 부하 자체는 증가하므로 단기 해결책일 뿐 확장성 제한\n\n【시험 포인트】\n▸ 읽기 집약적 워크로드(보고서, 분석) = Read Replica 분리\n▸ 복제본은 비동기이므로 약간의 지연 가능하지만, 분석/보고서는 실시간 일관성 요구 낮음\n▸ \"보고서 작업 + 백그라운드 IOPS\" 조합 = 읽기 트래픽이 주 원인이므로 분산 필수\n▸ Read Replica는 \"최소 개발 노력\"으로 IOPS 분산 달성",
    "en_q": "A company's reporting job that used to run in 15 minutes is now taking an hour to run. An application generates the reports. The application runs on Amazon EC2 instances and extracts data from an Amazon RDS for MySQL database. A CloudOps engineer checks the Amazon CloudWatch dashboard for the RDS instance and notices that the Read IOPS metrics are high, even when the reports are not running. The CloudOps engineer needs to improve the performance and the availability of the RDS instance. Which solution will meet these requirements?",
    "en_opts": [
      "A: Configure an Amazon ElastiCache cluster in front of the RDS instance. Update the reporting job to query the ElastiCache cluster.",
      "B: Deploy an RDS read replica. Update the reporting job to query the reader endpoint.",
      "C: Create an Amazon CloudFront distribution. Set the RDS instance as the origin. Update the reporting job to query the CloudFront distribution.",
      "D: Increase the size of the RDS instance."
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369217-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 48,
    "question": "AWS에서 여러 워크로드를 실행하는 회사가 DNS 기반 위협 보호를 구현하여 보안 태세를 강화하려고 합니다. 회사는 DNS 기반 공격을 차단해야 합니다. 이 요구사항을 충족하는 솔루션은?",
    "options": [
      "A. DNS 쿼리를 필터링하고 악의적인 쿼리를 차단하기 위해 AWS Shield Advanced를 배포합니다. 도메인 필터링 정책을 설정합니다.",
      "B. AWS WAF를 사용하여 DNS 트래픽에서 악의적인 도메인을 검사합니다. 알려진 위협을 차단하는 사용자 지정 규칙을 생성합니다.",
      "C. Amazon Route 53 Resolver를 구성하여 DNS 쿼리를 Route 53 Resolver DNS Firewall Advanced로 포워딩하여 위협을 감지하고 필터링합니다.",
      "D. AWS Config를 구성하여 DNS 쿼리 및 DNS 트래픽 패턴을 모니터링합니다. AWS Lambda 함수를 사용하여 악의적인 도메인에 대한 액세스를 방지합니다."
    ],
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver DNS Firewall—DNS 쿼리를 인프라 수준에서 검사하여 악의적 도메인 탐지 및 차단\n▸ AWS Shield—DDoS 공격(Layer 3/4) 방어지만, DNS 위협 필터링 기능 없음\n▸ AWS WAF—웹 애플리케이션 방화벽(Layer 7), DNS 쿼리 자체는 검사 대상 아님\n▸ AWS Config—리소스 구성 변경 추적이지, DNS 보안 기능 없음\n\n【정답 포인트】\nC(Route 53 Resolver DNS Firewall): 모든 DNS 쿼리가 Route 53 Resolver를 통과 → DNS Firewall이 쿼리를 검사하여 위협 도메인 데이터베이스(예: 피싱, 랜섬웨어) 확인 → 악의적 도메인 요청 차단 → VPC 수준에서 적용되어 모든 인스턴스/서비스 보호\n\n【오답 체크】\n(A) AWS Shield Advanced는 L3/4 DDoS 공격(SYN flood, UDP flood)만 방어하며, DNS 도메인 필터링은 미지원\n(B) AWS WAF는 HTTP/HTTPS 트래픽(L7) 검사용이며, DNS 프로토콜(UDP 53)은 검사 범위 밖\n(D) AWS Config는 AWS 리소스 변경 이력만 추적하며, 실시간 DNS 위협 탐지 능력 없음\n\n【시험 포인트】\n▸ DNS 위협 차단 = Route 53 Resolver DNS Firewall (유일한 AWS 네이티브 솔루션)\n▸ 다른 서비스는 각각의 역할(DDoS, WAF, 설정 추적)이 다르므로 DNS 보안에는 부적합\n▸ \"DNS 기반 공격\" = 피싱, 랜섬웨어 C&C, 악의적 도메인 리다이렉트 → 도메인 명성 DB 기반 필터링 필수",
    "en_q": "A company that runs multiple workloads on AWS wants to enhance its security posture by implementing DNS-based threat protection. The company must block DNS-based attacks. Which solution will meet this requirement?",
    "en_opts": [
      "A: Deploy AWS Shield Advanced to filter and block malicious DNS queries. Set up domain filtering policies.",
      "B: Use AWS WAF to inspect DNS traffic for malicious domains. Create custom rules to block known threats.",
      "C: Configure Amazon Route 53 Resolver to forward DNS queries to Route 53 Resolver DNS Firewall Advanced to detect and filter threats.",
      "D: Configure AWS Config to monitor DNS queries and DNS traffic patterns. Use an AWS Lambda function to prevent access to malicious domains."
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369343-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 49,
    "question": "CloudOps 엔지니어가 프로덕션 데이터베이스를 마이그레이션 계정과 공유하려고 합니다. 프로덕션 데이터베이스는 Amazon RDS DB 인스턴스에서 호스팅되고 있으며, production-rds-key라는 별칭을 가진 AWS Key Management Service(AWS KMS) 키로 암호화됩니다. CloudOps 엔지니어가 최소한의 관리 부담으로 이 요구사항을 충족하기 위해 수행해야 할 작업은?",
    "options": [
      "A. 프로덕션 계정에서 RDS DB 인스턴스의 스냅샷을 생성합니다. production-rds-key KMS 키 정책을 수정하여 마이그레이션 계정의 루트 사용자에게 액세스 권한을 부여합니다. 스냅샷을 마이그레이션 계정과 공유합니다.",
      "B. 마이그레이션 계정에서 RDS 읽기 복제본을 생성합니다. KMS 키 정책을 구성하여 production-rds-key KMS 키를 마이그레이션 계정으로 복제합니다.",
      "C. 프로덕션 계정에서 RDS DB 인스턴스의 스냅샷을 생성합니다. 스냅샷을 마이그레이션 계정과 공유합니다. 마이그레이션 계정에서 동일한 별칭을 가진 새 KMS 키를 생성합니다.",
      "D. 네이티브 데이터베이스 툴셋을 사용하여 RDS DB 인스턴스를 Amazon S3로 내보냅니다. 프로덕션 계정과 마이그레이션 계정 간 크로스 계정 액세스를 위한 S3 버킷 및 S3 버킷 정책을 생성합니다. 네이티브 데이터베이스 툴셋을 사용하여 Amazon S3에서 새 RDS DB 인스턴스로 데이터베이스를 가져옵니다."
    ],
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RDS 스냅샷 공유—스냅샷과 암호화 KMS 키 접근 권한 모두 필요\n▸ KMS 크로스 계정 액세스—KMS 키 정책에서 대상 계정의 루트 또는 역할에 kms:Decrypt, kms:DescribeKey 권한 부여\n▸ 마이그레이션 계정 루트 사용자—크로스 계정 권한의 기본 보안 주체\n▸ 읽기 복제본 크로스 계정—KMS 키 복제 개념이 없음(Option B 오류)\n\n【정답 포인트】\nA(스냅샷 공유 + KMS 정책): ① RDS 스냅샷 생성(암호화 유지) → ② production-rds-key의 KMS 정책에 마이그레이션 계정 루트 권한 추가(kms:Decrypt 등) → ③ 스냅샷을 마이그레이션 계정과 공유 → 마이그레이션 계정에서 스냅샷 복원 시 기존 KMS 키 자동 사용 → \"최소 관리 부담\" 충족\n\n【오답 체크】\n(B) RDS는 \"계정 간 읽기 복제본 생성\" 미지원이며, \"KMS 키 복제\"는 KMS 기능이 아님\n(C) 스냅샷 공유 후 마이그레이션 계정에서 새 KMS 키 생성 → 기존 데이터 암호 해독 불가능(다른 키로 재암호화 필요, 복잡함)\n(D) S3 Export → 엑셀 포맷 변환 → Import는 관리 오버헤드 최대이며, 스냅샷 방식이 훨씬 간단\n\n【시험 포인트】\n▸ 암호화된 RDS 스냅샷 공유 = KMS 키 정책 + 스냅샷 공유 2단계 필수\n▸ 마이그레이션 계정은 스냅샷 복원 시 자동으로 기존 KMS 키 사용(새 키 생성 불필요)\n▸ \"최소 관리 부담\" = 스냅샷 기반 복사(옵션 A가 가장 간단)\n▸ S3 Export는 데이터 형식 변환이 필요하므로 오버헤드 증가",
    "en_q": "A CloudOps engineer wants to share a copy of a production database with a migration account. The production database is hosted on an Amazon RDS DB instance and is encrypted at rest with an AWS Key Management Service (AWS KMS) key that has an alias of production-rds-key. What must the CloudOps engineer do to meet these requirements with the LEAST administrative overhead?",
    "en_opts": [
      "A: Take a snapshot of the RDS DB instance in the production account. Amend the KMS key policy of the production-rds-key KMS key to give access to the migration account's root user. Share the snapshot with the migration account.",
      "B: Create an RDS read replica in the migration account. Configure the KMS key policy to replicate the production-rds-key KMS key to the migration account.",
      "C: Take a snapshot of the RDS DB instance in the production account. Share the snapshot with the migration account. In the migration account, create a new KMS key that has an identical alias.",
      "D: Use native database toolsets to export the RDS DB instance to Amazon S3. Create an S3 bucket and an S3 bucket policy for cross-account access between the production account and the migration account. Use native database toolsets to import the database from Amazon S3 to a new RDS DB instance."
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369152-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 50,
    "question": "한 회사가 여러 AWS Lambda 함수를 사용하는 중요한 서버리스 애플리케이션을 가지고 있습니다. 각 Lambda 함수는 자신의 Amazon CloudWatch Logs 로그 그룹에서 매일 1GB의 로그 데이터를 생성합니다. 회사의 보안팀이 모든 로그 그룹에서 애플리케이션 오류를 유형별로 그룹화한 개수를 요청합니다. CloudOps 엔지니어가 이 요구사항을 충족하기 위해 수행해야 할 작업은?",
    "options": [
      "A. stats 명령어와 count 함수를 사용하는 CloudWatch Logs Insights 쿼리를 실행합니다.",
      "B. groupby 키워드와 count 함수를 사용하는 CloudWatch Logs 검색을 실행합니다.",
      "C. SELECT와 GROUP BV 키워드를 사용하는 Amazon Athena 쿼리를 실행합니다.",
      "D. SELECT와 GROUP BY 키워드를 사용하는 Amazon RDS 쿼리를 실행합니다."
    ],
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudWatch Logs Insights—CloudWatch Logs 전문 쿼리 엔진(stat, fields, filter, count, avg 등 지원)\n▸ CloudWatch Logs 검색—간단한 전문 검색만 가능하고, groupby 기능 없음\n▸ Amazon Athena—S3에 저장된 데이터 쿼리(로그를 S3로 내보낸 후 사용)\n▸ Amazon RDS—구조화된 데이터베이스로, 로그 데이터 원본이 아님\n\n【정답 포인트】\nA(CloudWatch Logs Insights): 모든 로그 그룹을 Insights로 동시 쿼리 → stats count(*) by errorType → 오류를 유형별로 그룹화하고 개수 집계 → 실시간 분석 가능, 추가 설정 불필요\n\n【오답 체크】\n(B) CloudWatch Logs의 기본 검색은 \"검색어 기반 필터링\"만 가능하며, 통계 집계(groupby, count)는 Insights 전용 기능\n(C) Athena는 로그가 S3에 저장되어 있을 때만 사용 가능하며, CloudWatch Logs 데이터를 직접 쿼리할 수 없음\n(D) RDS는 데이터베이스이지 로그 저장소가 아니므로, CloudWatch Logs 데이터와 무관\n\n【시험 포인트】\n▸ CloudWatch Logs → 실시간 로그 분석 = CloudWatch Logs Insights 필수\n▸ \"모든 로그 그룹에서 오류 유형별 집계\" = stats count(*) by errorType 패턴\n▸ Insights는 초기 1GB 데이터 무료 분석 제공(매월)\n▸ S3로 내보낸 로그 = Athena 사용 가능, 하지만 CloudWatch Logs 직접 쿼리가 더 간단",
    "en_q": "A company has a critical serverless application that uses multiple AWS Lambda functions. Each Lambda function generates 1 GB of log data daily in its own Amazon CloudWatch Logs log group. The company's security team asks for a count of application errors, grouped by type, across all of the log groups. What should a CloudOps engineer do to meet this requirement?",
    "en_opts": [
      "A: Perform a CloudWatch Logs Insights query that uses the stats command and count function.",
      "B: Perform a CloudWatch Logs search that uses the groupby keyword and count function.",
      "C: Perform an Amazon Athena query that uses the SELECT and GROUP BV keywords.",
      "D: Perform an Amazon RDS query that uses the SELECT and GROUP BY keywords."
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369153-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 51,
    "question": "개발자가 Amazon Linux Amazon Machine Image(AMI)를 사용하여 타사 애플리케이션을 호스팅하는 EC2 인스턴스를 시작합니다. 애플리케이션이 가끔 불안정해집니다. CloudOps 엔지니어는 사용률이 15분 동안 90% 이상일 때마다 EC2 인스턴스를 자동으로 재부팅하고 개발자에게 재부팅에 대해 알려주는 솔루션이 필요합니다. 최소한의 관리 노력으로 이 요구사항을 충족하는 솔루션은?",
    "options": [
      "A. 인스턴스의 CPU 사용률을 모니터링하도록 Amazon CloudWatch 알람을 구성합니다. 알람이 활성화되면 AWS Lambda 함수를 호출하여 Amazon Simple Notification Service(Amazon SNS) 주제에 메시지를 발행하도록 알람을 구성합니다. Lambda 함수를 구성하여 EC2 인스턴스를 재부팅합니다. 개발자를 SNS 주제에 구독시킵니다.",
      "B. 인스턴스의 CPU 사용률을 모니터링하는 Amazon CloudWatch 알람을 생성합니다. 알람을 구성하여 Amazon Simple Notification Service(Amazon SNS) 주제에 알림을 발행하고 EC2 인스턴스를 재부팅하는 EC2 작업을 수행합니다. 개발자를 SNS 주제에 구독시킵니다.",
      "C. 인스턴스의 CPU 사용률을 모니터링하는 Amazon CloudWatch 알람을 생성합니다. 알람을 구성하여 AWS Systems Manager 작업을 호출하여 개발자에게 알림을 발행하고 재부팅을 요청하는 인시던트를 생성합니다.",
      "D. Amazon Simple Notification Service(Amazon SNS) 주제에 메시지를 발행하고 EC2 인스턴스를 재부팅하는 AWS Systems Manager 런북 스크립트를 생성합니다. 개발자를 SNS 주제에 구독시킵니다. 인스턴스의 CPU 사용률이 15분 이상 90% 이상으로 유지되면 Systems Manager 런북을 실행하도록 Amazon CloudWatch 알람을 구성합니다."
    ],
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudWatch 알람 EC2 작업—알람이 자동으로 EC2 재부팅/중지/시작(IAM 권한 필수)\n▸ Lambda + SNS—추가 개발(Lambda 함수 코드) 및 권한 관리 필요\n▸ Systems Manager Runbook—자동화 순서서이지만, 알람-런북 연결은 추가 설정 필요\n▸ SNS 알림—알람이 직접 SNS 발행 가능(EC2 작업 병렬 실행)\n\n【정답 포인트】\nB(CloudWatch 알람 직접 EC2 작업): CloudWatch 알람이 ① CPU 사용률 > 90%, 15분 평가 기간 → ② 동시에 SNS 주제에 알림 발행 + EC2 인스턴스 재부팅 EC2 작업 실행 → 개발자는 SNS 이메일 수신 → \"최소 관리 노력\" = 알람만 설정하면 자동화 완성, 추가 코드/권한 없음\n\n【오답 체크】\n(A) Lambda 함수 개발 필요 + Lambda 실행 역할 권한 설정 + EC2 재부팅 권한 추가 = 관리 오버헤드 증가\n(C) Systems Manager 인시던트 생성은 \"개발자가 직접 재부팅\"해야 함(자동 재부팅 아님), 요구사항 불충족\n(D) 런북 생성 + CloudWatch-런북 연결 설정 = \n(B)보다 복잡, \"최소 노력\" 위배\n\n【시험 포인트】\n▸ CloudWatch 알람이 EC2 작업을 \"직접\" 지원(중지, 시작, 재부팅, 복구)\n▸ SNS + EC2 작업을 병렬 실행하면 알림 + 자동화 동시 달성\n▸ Lambda, Runbook은 추가 자동화 로직이 필요할 때만 사용\n▸ \"최소 관리 노력\" = 기본 기능(CloudWatch 알람 + EC2 작업)만 사용",
    "en_q": "A developer uses an Amazon Linux Amazon Machine Image (AMI) to launch an EC2 instance that hosts a third-party application. The application occasionally becomes unstable. The CloudOps engineer needs a solution to automatically reboot the EC2 instance whenever utilization is above 90% for 15 minutes and to notify the developer about the reboot. Which solution will meet these requirements with the LEAST administrative effort?",
    "en_opts": [
      "A: Configure an Amazon CloudWatch alarm that evaluates the CPU utilization of the instance. Configure the alarm to invoke an AWS Lambda function to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the CloudWatch alarm activates. Configure the Lambda function to reboot the EC2 instance. Subscribe the developer to the SNS topic.",
      "B: Create an Amazon CloudWatch alarm that evaluates the CPU utilization of the instance. Configure the alarm to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic and to perform an EC2 action to reboot the instance. Subscribe the developer to the SNS topic.",
      "C: Create an Amazon CloudWatch alarm that evaluates the CPU utilization of the instance Configure the alarm to invoke an AWS Systems Manager action to create an incident to notify the developer and request the reboot.",
      "D: Create an AWS Systems Manager runbook script to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic and to reboot the EC2 instance. Subscribe the developer to the SNS topic. Configure an Amazon CloudWatch alarm to run the Systems Manager runbook when CPU utilization for the instance remains above 90% for more than 15 minutes."
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369218-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 52,
    "question": "한 회사가 Application Load Balancer(ALB) 뒤에서 실행되는 마이크로서비스 집합을 가지고 있습니다. CloudOps 엔지니어가 Amazon Route 53을 사용하여 ALB URL을 example.com에 매핑하는 레코드를 생성해야 합니다. 이 요구사항을 충족하는 레코드 유형은?",
    "options": [
      "A. A 레코드",
      "B. AAAA 레코드",
      "C. 별칭 레코드",
      "D. CNAME 레코드"
    ],
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ A 레코드—도메인을 IPv4 주소(예: 203.0.113.1)로 매핑\n▸ AAAA 레코드—도메인을 IPv6 주소로 매핑\n▸ CNAME 레코드—도메인을 다른 도메인으로 매핑(Canonical Name), 루트 도메인(example.com) 불가\n▸ 별칭 레코드—Route 53 전용, AWS 리소스(ALB, CloudFront, S3 등)에 직접 연결 가능, 루트 도메인 지원\n\n【정답 포인트】\nC(별칭 레코드): ALB는 DNS 이름(예: my-alb-123456.us-east-1.elb.amazonaws.com)을 가지므로 → Route 53 별칭 레코드로 example.com을 ALB의 DNS 이름에 매핑 → 별칭은 AWS 리소스 직결로 자동 IP 업데이트(수동 관리 불필요)\n\n【오답 체크】\n(A) A 레코드는 IPv4 고정 주소용이며, ALB는 관리형 서비스로 IP 변경 가능성 → 별칭이 더 적합\n(B) AAAA 레코드는 IPv6 매핑용이며, 일반적 ALB는 IPv4 기본\n(D) CNAME은 루트 도메인(example.com) 사용 불가(CNAME은 서브도메인 전용, www.example.com만 가능) + AWS 리소스 직결 미지원\n\n【시험 포인트】\n▸ ALB → Route 53 = 별칭 레코드 표준 패턴\n▸ 별칭 레코드는 AWS 리소스 매핑 전용(ALB, CloudFront, S3 정적 웹사이트 호스팅 등)\n▸ 루트 도메인 매핑 = A 또는 별칭 (CNAME 불가)\n▸ CNAME은 외부 도메인(타사 호스팅, GitHub Pages) 매핑용",
    "en_q": "A company has a microservice that runs on a set of Amazon EC2 instances. The EC2 instances run behind an Application Load Balancer (ALB). A CloudOps engineer must use Amazon Route 53 to create a record that maps the ALB URL to example.com. Which type of record will meet this requirement?",
    "en_opts": [
      "A: An A record",
      "B: An AAAA record",
      "C: An alias record",
      "D: A CNAME record"
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369154-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 53,
    "question": "애플리케이션이 Application Load Balancer(ALB) 뒤의 EC2 인스턴스에서 실행됩니다. 애플리케이션은 시작 후 로컬 캐시를 채우는 데 최대 2분이 걸립니다. 애플리케이션은 시작 후 몇 초 후 대상 그룹 상태 확인에서 정상으로 보고됩니다. CloudOps 엔지니어는 일부 인스턴스가 재부팅된 후 각 인스턴스가 정상으로 보고된 직후 인스턴스가 동일한 트래픽 점유율을 받는 것을 관찰합니다. 애플리케이션이 캐시를 채우는 동안 점진적으로 증가하는 트래픽 점유율을 받아야 합니다. 이 요구사항을 충족하는 솔루션은?",
    "options": [
      "A. slow_start.duration_seconds 대상 그룹 속성을 120초로 변경합니다. 인스턴스를 재부팅하기 전에 대상 그룹에서 인스턴스를 등록 해제합니다. 인스턴스를 재부팅한 후 대상 그룹에 인스턴스를 등록합니다.",
      "B. 대상 그룹의 HealthCheckTimeoutSeconds 파라미터를 120초로 변경합니다. 인스턴스를 재부팅하기 전에 대상 그룹에서 인스턴스를 등록 해제합니다. 인스턴스를 재부팅한 후 대상 그룹에 인스턴스를 등록합니다.",
      "C. 상태 확인 상태를 모니터링하도록 Amazon CloudWatch 알람을 구성합니다. 상태 확인이 실패하면 EC2 인스턴스를 재시작하도록 알람 작업을 구성합니다. loadbalancing.algorithm.type 대상 그룹 속성을 weighted_random으로 변경합니다.",
      "D. Amazon EC2 Auto Scaling 그룹을 생성합니다. 기존 EC2 인스턴스를 Auto Scaling 그룹에 연결합니다. EC2 Auto Scaling 라이프사이클 훅을 구성하여 시작 인스턴스를 Pending Wait 상태로 이동합니다. 로컬 캐시가 채워지면 라이프사이클 훅을 완료하도록 애플리케이션을 업데이트합니다."
    ],
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Slow Start Mode—ALB가 신규 등록 인스턴스에 처음 1~3분간 점진적으로 트래픽 할당(100%까지 선형 증가)\n▸ slow_start.duration_seconds—Slow Start 지속 시간 설정(기본 300초, 최대 3600초)\n▸ 상태 확인 정상—응용 프로그램 준비 상태와 무관하게 헬스 체크 통과 시 정상 판정\n▸ 라이프사이클 훅—Auto Scaling 인스턴스 상태 전이 중 대기(Pending Wait)\n\n【정답 포인트】\nA(Slow Start Mode): slow_start.duration_seconds = 120초 설정 → 인스턴스 재부팅 후 대상 그룹 등록(health check 통과) → ALB가 120초 동안 트래픽를 0%에서 100%까지 점진적 증가 → 로컬 캐시 채우는 2분(120초) 동안 충분한 Warm-up 시간 확보 → \"최소 코드 변경\" (ALB 속성 설정만)\n\n【오답 체크】\n(B) HealthCheckTimeoutSeconds는 헬스 체크 응답 대기 시간이며, 신규 인스턴스 트래픽 점진적 할당과 무관\n(C) CloudWatch 알람 + weighted_random은 상태 재시작 및 분산 방식 변경이지, 신규 인스턴스 Warm-up과 무관\n(D) 라이프사이클 훅은 응용 프로그램 코드 수정 필요(complete-lifecycle-action 호출) → 관리 오버헤드 증가 + 기존 인스턴스 Auto Scaling 그룹 통합의 복잡함\n\n【시험 포인트】\n▸ 신규 인스턴스 Warm-up (startup time) = Slow Start Mode(ALB 기본 제공)\n▸ 2분 Warm-up → slow_start.duration_seconds = 120초 이상 설정\n▸ 라이프사이클 훅은 Custom Logic 필요 시(응용 프로그램이 캐시 채우기 완료 신호 보낼 때)\n▸ \"최소 오버헤드\" = Slow Start Mode 설정 (속성 변경만)",
    "en_q": "An application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The application takes up to 2 minutes to populate a local cache after the application is started. The application reports as healthy in the target group health check a few seconds after starting. A CloudOps engineer observes that after some of the instances are rebooted, the instances receive an equal share of the traffic immediately after each instance reports as healthy. The application needs to receive a gradually increasing share of the traffic while the application cache is populated. Which solution will meet this requirement?",
    "en_opts": [
      "A: Change the slow_start.duration_seconds target group attribute to 120 seconds. Before rebooting the instances, deregister the instances from the target group. After rebooting the instances, register the instances with the target group.",
      "B: Change the HealthCheckTimeoutSeconds paramotor in the target group to 120 seconds. Before rebooting the instances, deregister the instances from the target group. After rebooting the instances, register the instances with the target group.",
      "C: Configure an Amazon CloudWatch alarm to monitor the health check status. Configure the action of the alarm to restart an EC2 instance if a health check fails. Change the loadbalancing.algorithm.type target group attribute to be weighted_random.",
      "D: Create an Amazon EC2 Auto Scaling group. Attach the existing EC2 instances to the Auto Scaling group. Configure an EC2 Auto Scaling lifecycle hook to move starting instances to the Pending Wait state. Update the application to complete the lifecycle hook when the local cache has been populated."
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369155-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 54,
    "question": "한 회사가 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 애플리케이션이 Amazon Aurora PostgreSQL 데이터베이스에서 데이터를 저장하고 검색합니다. 개발자가 실수로 데이터베이스에서 테이블을 삭제하면 애플리케이션 오류가 발생합니다. 2시간 후 CloudOps 엔지니어가 데이터를 복구하고 애플리케이션이 다시 작동하도록 해야 합니다. 이 요구사항을 충족하는 솔루션은?",
    "options": [
      "A. Aurora Backtrack 기능을 사용하여 2시간 전 데이터베이스를 지정된 시간으로 되감습니다.",
      "B. 기존 데이터베이스에서 포인트 인타임 복구(Point-In-Time Recovery)를 수행하여 2시간 전의 지정된 시점으로 데이터베이스를 복구합니다.",
      "C. 포인트 인타임 복구를 수행하고 새 데이터베이스를 생성하여 2시간 전의 지정된 시점으로 데이터베이스를 복구합니다. 애플리케이션을 새 데이터베이스 엔드포인트를 사용하도록 재구성합니다.",
      "D. 새 Aurora 클러스터를 생성합니다. S3 버킷에서 데이터 복원 옵션을 선택합니다. 2시간 전의 오류 시간까지의 로그 파일을 선택합니다."
    ],
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Aurora Backtrack—시점으로 \"복귀\"(원본 DB 변경, 다운타임 발생), 최대 72시간 보존\n▸ Point-In-Time Recovery(PITR)—지정 시점에서 \"새 DB 복구\"(기존 DB 유지), 최대 35일\n▸ Backtrack 제약—기존 DB에 쓰기 작업이 있으면 롤백 불가, 복귀 시 애플리케이션 중단 필요\n▸ PITR 새 DB—기존 DB는 유지하고 복구된 별도 DB 생성 → 비교 후 전환 가능\n\n【정답 포인트】\nC(PITR 새 DB): ① PITR로 2시간 전 시점 선택 → ② 새로운 Aurora 클러스터 생성(원본 DB 유지) → ③ 새 DB 엔드포인트로 애플리케이션 재구성 → 장점: 기존 DB 보존 가능, 롤백 시간 단축, 데이터 검증 후 전환\n\n【오답 체크】\n(A) Aurora Backtrack은 기존 DB를 즉시 복귀시키므로 → 복귀 중 애플리케이션 다운, 실패 시 복원 불가능, 위험\n(B) 기존 DB에서 PITR 수행 시 원본 테이블(삭제됨)은 여전히 삭제 상태이며, DB 내 데이터 복구 메커니즘 없음\n(D) S3 Export/Import는 Aurora의 기본 PITR 기능이 아니며, 복구 시간 증가\n\n【시험 포인트】\n▸ 테이블 삭제 = 즉시 복구 필요(2시간 후) → PITR 새 DB 표준 패턴\n▸ Backtrack은 \"실시간 복귀\"(빠름)이지만 위험 → 운영 환경에선 PITR 새 DB 권장\n▸ PITR 35일 유지 기본값 → 2시간은 충분히 가능\n▸ \"애플리케이션 다시 작동\" = 새 DB 엔드포인트로 재구성",
    "en_q": "A company runs an application on Amazon EC2 instances. The application stores and retrieves data from an Amazon Aurora PostgreSQL database. A developer accidentally drops a table from the database, which causes application errors. Two hours later, a CloudOps engineer needs to recover the data and make the application function again. Which solution will meet this requirement?",
    "en_opts": [
      "A: Use the Aurora Backtrack feature to rewind the database to a specified time, 2 hours in the past.",
      "B: Perform a point-in-time recovery on the existing database to restore the database to a specified point in time, 2 hours in the past.",
      "C: Perform a point-in-time recovery and create a new database to restore the database to a specified point in time, 2 hours in the past. Reconfigure the application to use a new database endpoint.",
      "D: Create a new Aurora cluster. Choose the Restore data from S3 bucket option. Choose log files up to the failure time 2 hours in the past."
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369222-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 55,
    "question": "한 회사가 AWS에서 여러 워크로드를 실행합니다. 회사는 특정 AWS 리전에서 5개의 AWS Trusted Advisor 서비스 할당량 메트릭을 모니터링하려고 합니다. 회사는 리소스 사용량이 서비스 할당량의 60%를 초과할 때마다 이메일 알림을 받기를 원합니다. 이 요구사항을 충족하는 솔루션은?",
    "options": [
      "A. 각 Trusted Advisor 서비스 할당량 메트릭마다 하나씩 5개의 Amazon CloudWatch 알람을 생성합니다. 사용량이 하나의 서비스 할당량의 60%를 초과할 때마다 이메일 알림을 위해 Amazon Simple Notification Service(Amazon SNS) 주제를 구성합니다.",
      "B. 각 Trusted Advisor 서비스 할당량 메트릭마다 하나씩 5개의 Amazon CloudWatch 알람을 생성합니다. 사용량이 하나의 서비스 할당량의 60%를 초과할 때마다 이메일 알림을 위해 Amazon Simple Queue Service(Amazon SQS) 큐를 구성합니다.",
      "C. AWS Health Dashboard를 사용하여 각 Trusted Advisor 서비스 할당량 메트릭을 모니터링합니다. 사용량이 하나의 서비스 할당량의 60%를 초과할 때마다 이메일 알림을 위해 Amazon Simple Queue Service(Amazon SQS) 큐를 구성합니다.",
      "D. AWS Health Dashboard를 사용하여 각 Trusted Advisor 서비스 할당량 메트릭을 모니터링합니다. 사용량이 하나의 서비스 할당량의 60%를 초과할 때마다 이메일 알림을 위해 Amazon Simple Notification Service(Amazon SNS) 주제를 구성합니다."
    ],
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Trusted Advisor—AWS 서비스 할당량, 보안 모범 사례, 비용 최적화 모니터링\n▸ Trusted Advisor 메트릭 → CloudWatch로 노출—Trusted Advisor의 메트릭을 CloudWatch 메트릭으로 발행\n▸ AWS Health Dashboard—계정 상태, 공지사항(Trusted Advisor와 다름)\n▸ SNS—이메일 알림용 메시지 서비스\n▸ SQS—메시지 큐(이메일 직접 발송 불가)\n\n【정답 포인트】\nA(CloudWatch 알람 + SNS): ① Trusted Advisor 메트릭이 CloudWatch에 자동 발행 → ② 각 5개 할당량 메트릭마다 CloudWatch 알람 생성(임계값 60%) → ③ 알람 > SNS 주제 발행 → ④ 개발자가 SNS 주제 구독(이메일) → 안정적이고 표준 패턴\n\n【오답 체크】\n(B) SQS는 메시지 큐이며, 이메일 직접 발송 불가(SNS와 통합 필요)\n(C) AWS Health Dashboard는 계정 이벤트/서비스 상태 모니터링용이며, Trusted Advisor 메트릭 직접 쿼리 불가\n(D) Health Dashboard는 Trusted Advisor 메트릭 임계값 알람 기능 없음(CloudWatch 전담)\n\n【시험 포인트】\n▸ Trusted Advisor 할당량 모니터링 = CloudWatch 메트릭 + CloudWatch 알람(표준)\n▸ \"이메일 알림\" = SNS (SQS 아님)\n▸ Health Dashboard는 일반 계정 상태, 공지사항용 (할당량 메트릭 임계값 설정 불가)\n▸ 5개 메트릭 = 5개 CloudWatch 알람 필요",
    "en_q": "A company runs several workloads on AWS. The company identifies five AWS Trusted Advisor service quota metrics to monitor in a specific AWS Region. The company wants to receive email notification each time resource usage exceeds 60% of one of the service quotas. Which solution will meet these requirements?",
    "en_opts": [
      "A: Create five Amazon CloudWatch alarms, one for each Trusted Advisor service quota metric. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification each time that usage exceeds 60% of one of the service quotas.",
      "B: Create five Amazon CloudWatch alarms, one for each Trusted Advisor service quota metric. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification each time that usage exceeds 60% of one of the service quotas.",
      "C: Use the AWS Health Dashboard to monitor each Trusted Advisor service quota metric. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification each time that usage exceeds 60% of one of the service quotas.",
      "D: Use the AWS Health Dashboard to monitor each Trusted Advisor service quota metric. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification each time that usage exceeds 60% of one of the service quotas."
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369156-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 56,
    "question": "CloudOps 엔지니어가 Amazon CloudWatch Synthetics 구현을 문제 해결 중입니다. CloudWatch Synthetics 결과를 Amazon S3 버킷으로 전송해야 합니다. CloudOps 엔지니어가 인터넷 게이트웨이가 연결된 VPC에서 실행되는 기존 카나리의 구성을 복사했습니다. 그러나 CloudOps 엔지니어가 인터넷 액세스가 없는 프라이빗 VPC에서 카나리를 성공적으로 시작할 수 없습니다. CloudOps 엔지니어가 프라이빗 VPC에서 카나리를 성공적으로 실행하려면 어떻게 해야 합니까?",
    "options": [
      "A. VPC에서 DNS 분석 옵션과 DNS 호스트명 옵션이 활성화되어 있는지 확인합니다. VPC에 synthetics:GetCanaryRuns 권한을 추가합니다. S3 버킷에서 CloudWatch Synthetics 역할에 IgnorePublicAcls 권한을 추가합니다.",
      "B. VPC에서 DNS 분석 옵션과 DNS 호스트명 옵션을 비활성화합니다. Amazon S3을 위한 게이트웨이 VPC 엔드포인트를 생성합니다. CloudWatch Synthetics이 S3 엔드포인트를 사용할 수 있도록 권한을 추가합니다.",
      "C. VPC에서 DNS 분석 옵션과 DNS 호스트명 옵션을 비활성화합니다. 카나리에 보안 그룹을 추가하여 DNS 포트에서 아웃바운드 트래픽을 허용합니다. CloudWatch Synthetics이 S3 버킷에 쓸 수 있는 권한을 추가합니다.",
      "D. VPC에서 DNS 분석 옵션과 DNS 호스트명 옵션이 활성화되어 있는지 확인합니다. CloudWatch를 위한 인터페이스 VPC 엔드포인트를 생성합니다. Amazon S3을 위한 게이트웨이 VPC 엔드포인트를 생성합니다. CloudWatch Synthetics이 두 엔드포인트를 모두 사용할 수 있도록 권한을 추가합니다."
    ],
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ CloudWatch Synthetics—카나리 스크립트로 웹 애플리케이션 가용성 모니터링\n▸ 프라이빗 VPC(인터넷 액세스 없음)—NAT Gateway/IGW 없음, AWS 서비스 접근 = VPC 엔드포인트 필수\n▸ 게이트웨이 엔드포인트—S3, DynamoDB 전용(프리티어)\n▸ 인터페이스 엔드포인트—CloudWatch, CloudWatch Logs, Systems Manager 등(요금 발생)\n▸ DNS 호스트명—VPC 내 EC2에 DNS 이름 할당하여 엔드포인트 접근 가능\n\n【정답 포인트】\nD(인터페이스 + 게이트웨이 엔드포인트): ① DNS 해석(enable_dns_hostnames=true) + DNS 지원(enable_dns_support=true) 활성화 → ② CloudWatch 인터페이스 엔드포인트(카나리 메트릭 발행) → ③ S3 게이트웨이 엔드포인트(결과 쓰기) → ④ 권한 추가(s3:PutObject, cloudwatch:PutMetricData) → 프라이빗 VPC에서 AWS 서비스 접근 완성\n\n【오답 체크】\n(A) synthetics:GetCanaryRuns은 실제 권한이 아니며, VPC에 권한 추가 불가(IAM 역할에만 추가)\n(B) DNS 옵션 비활성화하면 엔드포인트 DNS 이름 해석 불가능 → 반대 방향의 오류\n(C) DNS 비활성화 + DNS 포트 아웃바운드는 모순이며, 근본 해결책 아님(엔드포인트 없음)\n\n【시험 포인트】\n▸ 프라이빗 VPC CloudWatch Synthetics = CloudWatch + S3 엔드포인트 필수\n▸ CloudWatch는 인터페이스 엔드포인트(eni-xxxx.us-east-1.vpce.amazonaws.com)\n▸ S3는 게이트웨이 엔드포인트(s3.us-east-1.vpce.amazonaws.com)\n▸ DNS 호스트명 활성화 = 엔드포인트 DNS 이름 해석 가능\n▸ 카나리가 메트릭 발행 + 결과 저장 = 2개 엔드포인트 모두 필요",
    "en_q": "A CloudOps engineer is troubleshooting an implementation of Amazon CloudWatch Synthetics. The CloudWatch Synthetics results must be sent to an Amazon S3 bucket. The CloudOps engineer has copied the configuration of an existing canary that runs on a VPC that has an internet gateway attached. However, the CloudOps engineer cannot get the canary to successfully start on a private VPC that has no internet access. What should the CloudOps engineer do to successfully run the canary on the private VPC?",
    "en_opts": [
      "A: Ensure that the DNS resolution option and the DNS hostnames option are turned on in the VPC. Add the synthetics:GetCanaryRuns permission to the VPC. On the S3 bucket, add the IgnorePublicAcls permission to the CloudWatch Synthetics role.",
      "B: Ensure that the DNS resolution option and the DNS hostnames option are turned off in the VPC. Create a gateway VPC endpoint for Amazon S3. Add the permissions to allow CloudWatch Synthetics to use the S3 endpoint.",
      "C: Ensure that the DNS resolution option and the DNS hostnames option are turned off in the VPAdd a security group to the canary to allow outbound traffic on the DNS port. Add the permissions to allow CloudWatch Synthetics to write to the S3 bucket.",
      "D: Ensure that the DNS resolution option and the DNS hostnames option are turned on in the VPC. Create an interface VPC endpoint for CloudWatch. Create a gateway VPC endpoint for Amazon S3. Add the permissions to allow CloudWatch Synthetics to use both endpoints."
    ],
    "source": "https://www.examtopics.com/discussions/amazon/view/369157-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 57,
    "question": "회사가 인터넷 게이트웨이가 있는 VPC에 AWS 인프라를 배포합니다. VPC에는 퍼블릭 서브넷과 프라이빗 서브넷이 있습니다. Amazon RDS for MySQL DB 인스턴스가 프라이빗 서브넷에 배포되어 있습니다. AWS Lambda 함수가 동일한 프라이빗 서브넷을 사용하고 DB 인스턴스에 연결하여 데이터를 쿼리합니다. 개발자가 Lambda 함수를 수정하여 Amazon Simple Queue Service(Amazon SQS) 큐에 메시지를 게시하도록 변경합니다. 이 변경 후 Lambda 함수는 SQS 큐에 메시지를 게시하려고 할 때 시간 초과됩니다. 이 문제를 해결할 솔루션은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Lambda 함수를 다시 구성하여 VPC에 연결되지 않도록 합니다.",
      "B": "RDS 프록시를 배포합니다. Lambda 함수를 프록시를 통해 DB 인스턴스에 연결하도록 구성합니다.",
      "C": "NAT 게이트웨이를 배포합니다. 프라이빗 서브넷의 라우팅 테이블을 업데이트하여 모든 트래픽을 NAT 게이트웨이로 라우팅합니다.",
      "D": "VPC에서 Amazon SQS용 인터페이스 엔드포인트를 생성합니다.",
      "E": "VPC에서 Amazon SQS용 게이트웨이 엔드포인트를 생성합니다."
    },
    "answer": "CD",
    "explanation": "【핵심 용어】\n▸ NAT Gateway—프라이빗 서브넷의 인스턴스가 인터넷(AWS 서비스)으로 아웃바운드 트래픽을 전송할 수 있게 하는 관리형 서비스. 엔드포인트—VPC 내에서 AWS 서비스에 직접 접근할 수 있도록 하는 프라이빗 연결.\n▸ VPC 엔드포인트 종류: Gateway(S3, DynamoDB), Interface(대부분의 AWS 서비스)\n\n【정답 포인트】\n▸ \"프라이빗 서브넷\" → 인터넷 접근 불가 → SQS 호출 시 경로 문제 발생\n▸ \"NAT 게이트웨이\" → 아웃바운드 경로 제공, 인터넷 기반 AWS 서비스 접근 가능 (옵션 C)\n▸ \"SQS 엔드포인트\" → VPC 내 프라이빗 경로로 AWS 서비스 접근 (옵션 D, E 중 인터페이스 타입)\n▸ 2개 선택 → C와 D/E 중 하나 → 정답은 CD (NAT + Interface 엔드포인트의 조합)\n\n【오답 체크】\n(A) Lambda를 VPC에서 제거—DB 인스턴스 쿼리 불가능. RDS가 프라이빗 서브넷에 있으므로 VPC 연결 필수. 요구사항 충돌.\n(B) RDS 프록시—DB 연결 풀 관리용. SQS 접근 문제와 무관. 네트워크 경로를 해결하지 못함.\n(E) Gateway Endpoint는 S3, DynamoDB에만 사용. SQS는 Interface Endpoint 필요 (이미 선택된 D 참조).\n\n【시험 포인트】\n▸ VPC 내 프라이빗 리소스 → \"아웃바운드 경로\" 문제 진단 필수\n▸ NAT Gateway vs VPC Endpoint 선택: NAT(인터넷 기반), Endpoint(AWS 서비스 직접)\n▸ 엔드포인트 유형 구분: Gateway(S3/DDB만), Interface(나머지). SQS는 Interface 전용\n▸ \"2개 선택\" → 네트워크 접근성 해결 방법 2가지(또는 중복 방법 제시) 확인",
    "en_q": "A company deploys AWS infrastructure in a VPC that has an internet gateway. The VPC has public subnets and private subnets. An Amazon RDS for MySQL DB instance is deployed in a private subnet. An AWS Lambda function uses the same private subnet and connects to the DB instance to query data. A developer modifies the Lambda function to require the function to publish messages to an Amazon Simple Queue Service (Amazon SQS) queue. After these changes, the Lambda function times out when it tries to publish messages to the SQS queue. Which solutions will resolve this issue? (Choose two.)",
    "en_opts": {
      "A": "Reconfigure the Lambda function so that the function is not connected to the VPC.",
      "B": "Deploy an RDS proxy. Configure the Lambda function to connect to the DB instance through the proxy.",
      "C": "Deploy a NAT gateway. Update the private subnet's route table to route all traffic to the NAT gateway.",
      "D": "Create an interface endpoint for Amazon SQS in the VPC.",
      "E": "Create a gateway endpoint for Amazon SQS in the VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369219-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 58,
    "question": "회사의 보안 정책에 따르면 들어오는 SSH 트래픽을 정의된 주소 세트로 제한해야 합니다. 회사는 AWS Config 규칙을 사용하여 보안 그룹이 제한 없는 들어오는 SSH 트래픽을 허용하는지 확인합니다. CloudOps 엔지니어가 비준수 리소스를 발견하고 보안 그룹을 수동으로 수정합니다. CloudOps 엔지니어는 다른 비준수 리소스의 개선를 자동화하려고 합니다. 이 요구사항을 충족하는 가장 운영상 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Config 규칙의 상태 지표에 대한 Amazon CloudWatch 알람을 생성합니다. 보안 그룹에서 비준수 규칙을 제거할 수 있는 AWS Lambda 함수를 생성합니다. 알람 작업을 Lambda 함수를 호출하도록 구성합니다.",
      "B": "AWS Config 규칙에 자동 복구 작업을 구성합니다. AWS-DisableIncomingSSHOnPort22 복구 작업을 지정합니다.",
      "C": "AWS Config 구성 항목 변경 이벤트에 대한 Amazon EventBridge 규칙을 구성합니다. 보안 그룹에서 비준수 규칙을 제거할 수 있는 AWS Lambda 함수를 생성합니다. 규칙을 Lambda 함수를 호출하도록 구성합니다.",
      "D": "보안 그룹의 인바운드 규칙을 분석하여 제한 없는 SSH 접근을 확인할 수 있는 AWS Lambda 함수를 생성합니다. 비준수 규칙을 제거하도록 Lambda 함수를 구성합니다. 1시간마다 Lambda 함수를 호출하도록 Amazon EventBridge 규칙을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Config 자동 복구(Auto Remediation)—비준수 리소스를 자동으로 수정하는 AWS Config의 기본 기능\n▸ AWS-DisableIncomingSSHOnPort22—SSH 포트 22의 인바운드 규칙을 자동 제거하는 AWS 관리형 복구 작업\n▸ 운영상 효율성—최소 개발, 관리 오버헤드로 자동화 달성\n\n【정답 포인트】\n▸ \"자동 복구\" → AWS Config의 내장 기능 활용 (옵션 B 핵심)\n▸ \"AWS-DisableIncomingSSHOnPort22\" → AWS 관리형 복구 작업, 즉시 사용 가능\n▸ \"가장 운영상 효율적\" → 최소 구현 (CloudWatch + Lambda 같은 커스텀 솔루션 불필요)\n▸ 자동 복구는 Config 규칙 위반 감지 시 즉시 실행, 수동 개입 제거\n\n【오답 체크】\n(A) CloudWatch 알람 + Lambda 조합—수동 구현 필요, Config 자동 복구보다 복잡. 보안 그룹 수정 로직 직접 개발 필요.\n(C) EventBridge + Lambda—Config 변경 감지 후 처리하는 방식. 자동 복구 없이 이벤트 기반 커스텀 로직 필요. A보다 복잡.\n(D) 매시간 Lambda 실행—주기적 검사, 실시간 복구 아님. 비준수 상태가 1시간 지속 가능. 가장 비효율적.\n\n【시험 포인트】\n▸ AWS Config \"자동 복구\" 기능 이해—AWS 관리형 복구 작업 목록 숙지\n▸ SSH 관련 표준 복구 작업: AWS-DisableIncomingSSHOnPort22 (22번 포트)\n▸ 효율성 비교: 관리형 복구 > 커스텀 이벤트 기반 > 폴링 기반\n▸ \"운영상 효율적\"이라는 표현 → 최소 코드, 관리형 서비스 우선",
    "en_q": "A company's security policy requires incoming SSH traffic to be restricted to a defined set of addresses. The company is using an AWS Config rule to check whether security groups allow unrestricted incoming SSH traffic. A CloudOps engineer discovers a noncompliant resource and fixes the security group manually. The CloudOps engineer wants to automate the remediation of other noncompliant resources. What is the MOST operationally efficient solution that meets these requirements?",
    "en_opts": {
      "A": "Create an Amazon CloudWatch alarm for the AWS Config rule's status metric. Create an AWS Lambda function that can remove the noncompliant rule from the security group. Configure the alarm action to invoke the Lambda function.",
      "B": "Configure an automatic remediation action on the AWS Config rule. Specify the AWS-DisablolncomingSSHOnPort22 remediation action.",
      "C": "Configure an Amazon EventBridge rule for AWS Config configuration item change events. Create an AWS Lambda function that can remove the noncompliant rule from the security group Configure the rule to invoke the Lambda function.",
      "D": "Create an AWS Lambda function that can analyze a security group's inbound rules to check for unrestricted SSH access. Configure the Lambda function to remove the noncompliant rule from the security group. Configure an Amazon EventBridge rule to invoke the Lambda function every hour."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369158-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 59,
    "question": "CloudOps 엔지니어가 Amazon CloudFront 웹 배포, Application Load Balancer(ALB), Amazon RDS 및 VPC의 Amazon EC2를 사용하여 웹 애플리케이션을 유지합니다. 모든 서비스에 로깅이 활성화되어 있습니다. CloudOps 엔지니어는 웹 애플리케이션에서 HTTP Layer 7 상태 코드를 조사해야 합니다. 상태 코드를 포함하는 로그 소스는 무엇입니까? (2개 선택)",
    "options": {
      "A": "VPC Flow Logs",
      "B": "AWS CloudTrail 로그",
      "C": "ALB 액세스 로그",
      "D": "CloudFront 액세스 로그",
      "E": "RDS 로그"
    },
    "answer": "CD",
    "explanation": "【핵심 용어】\n▸ HTTP Layer 7 상태 코드—애플리케이션 계층 상태 (200, 404, 500 등)\n▸ ALB 액세스 로그—ALB를 통과하는 HTTP 요청의 상태, 경로, 응답 시간 기록\n▸ CloudFront 액세스 로그—CloudFront 엣지에서 클라이언트 요청의 상태, 캐시 상태 기록\n▸ VPC Flow Logs—계층 3/4 트래픽 (IP, 포트), HTTP 상태 미포함\n\n【정답 포인트】\n▸ \"HTTP Layer 7 상태 코드\" → 애플리케이션 계층 로그만 가능\n▸ \"ALB 액세스 로그\" → HTTP 요청/응답의 모든 상태 코드 기록 (옵션 C)\n▸ \"CloudFront 액세스 로그\" → 엣지 노드에서 클라이언트-CloudFront 간 HTTP 상태 기록 (옵션 D)\n▸ 2개 선택 → C(ALB)와 D(CloudFront) 모두 HTTP 상태 코드 포함\n\n【오답 체크】\n(A) VPC Flow Logs—네트워크 계층(Layer 3/4) 로그. IP, 포트, 패킷/바이트 정보만 기록. HTTP 상태 코드 없음.\n(B) CloudTrail—API 호출 감시. HTTP 요청 상태 아님. EC2, ALB, RDS 등 관리 API만 기록.\n(E) RDS 로그—데이터베이스 에러 로그, 쿼리 로그. HTTP 상태 코드 개념 없음(DB 계층).\n\n【시험 포인트】\n▸ 로그 유형별 계층 구분 필수: VPC Flow(L3/4), ALB/CloudFront Access(L7), CloudTrail(API)\n▸ CloudFront와 ALB의 차이: 엣지(CDN)와 로드밸런서(인프라) 관점\n▸ HTTP 상태 코드는 \"응용 계층\" → 엘리베이터 규칙: ALB, CloudFront, Application Logs만 해당\n▸ RDS, DynamoDB 같은 DB 로그 → 비즈니스 쿼리/에러, HTTP 상태 개념 없음",
    "en_q": "A CloudOps engineer is maintaining a web application using an Amazon CloudFront web distribution, an Application Load Balancer (ALB), Amazon RDS, and Amazon EC2 in a VPC. All services have logging enabled. The CloudOps engineer needs to investigate HTTP Layer 7 status codes from the web application. Which log sources contain the status codes? (Choose two.)",
    "en_opts": {
      "A": "VPC Flow Logs",
      "B": "AWS CloudTrail logs",
      "C": "ALB access logs",
      "D": "CloudFront access logs",
      "E": "RDS logs"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369159-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 60,
    "question": "오작동하는 프로세스가 전체 프로세서를 사용하고 100%로 실행되는 것으로 알려져 있습니다. CloudOps 엔지니어는 2분 이상 문제가 발생할 때 Amazon EC2 인스턴스를 자동으로 다시 시작하려고 합니다. 이를 어떻게 수행할 수 있습니까?",
    "options": {
      "A": "기본 모니터링이 있는 EC2 인스턴스에 대한 Amazon CloudWatch 알람을 생성합니다. 인스턴스를 다시 시작하는 작업을 추가합니다.",
      "B": "상세 모니터링이 있는 EC2 인스턴스에 대한 Amazon CloudWatch 알람을 생성합니다. 인스턴스를 다시 시작하는 작업을 추가합니다.",
      "C": "EC2 인스턴스를 다시 시작하는 AWS Lambda 함수를 생성합니다. 2분마다 일정한 기준으로 호출됩니다.",
      "D": "EC2 인스턴스를 다시 시작하는 AWS Lambda 함수를 생성합니다. EC2 상태 검사에 의해 호출됩니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 기본 모니터링—1분 간격 메트릭 (CPU, Network 등 기본 메트릭만)\n▸ 상세 모니터링—1분 간격 메트릭 (기본과 동일하나 \"2분\" 조건 평가 가능)\n▸ CloudWatch 알람—메트릭 조건 기반 자동 조치 (재시작, SNS 등)\n▸ \"2분 이상\" → 데이터포인트 2개 이상 조건, 상세 모니터링 필수\n\n【정답 포인트】\n▸ \"2분 이상 100%\" → 알람이 조건을 평가하려면 최소 2개 데이터포인트 필요\n▸ \"상세 모니터링\" → 1분마다 메트릭 수집 (기본은 5분), 2분 조건 충족 가능\n▸ \"CloudWatch 알람\" + \"재시작 작업\" → 자동 복구의 표준 방식 (옵션 B)\n▸ CPU 메트릭은 기본/상세 모두 제공, 상세가 빈도 높음\n\n【오답 체크】\n(A) 기본 모니터링—5분 간격 데이터. \"2분 조건\" 평가 불가. 1개 데이터포인트만으로 결정 → 오가양성 높음.\n(C) Lambda 2분마다 폴링—scheduled rule로 실행. 실제 CPU 상태 측정 아님. 상태 검사 없이 주기적 재시작 → 운영 효율성 낮음.\n(D) EC2 상태 검사—인스턴스 하드웨어 상태(실패/성공)만 확인. CPU 사용률 모니터링 아님. 프로세스 CPU 증가 감지 불가.\n\n【시험 포인트】\n▸ 모니터링 빈도 구분: 기본(5분), 상세(1분). \"2분\" 요구 → 상세 선택 필수\n▸ CloudWatch 알람 활용—메트릭 기반 자동 조치 (가장 효율적)\n▸ EC2 상태 검사는 인스턴스 가용성용, CPU 용도 아님\n▸ \"자동 재시작\" → CloudWatch 알람의 표준 작업 (Lambda 폴링보다 우수)",
    "en_q": "An errant process is known to use an entire processor and run at 100%. A CloudOps engineer wants to automate restarting an Amazon EC2 instance when the problem occurs for more than 2 minutes. How can this be accomplished?",
    "en_opts": {
      "A": "Create an Amazon CloudWatch alarm for the EC2 instance with basic monitoring. Add an action to restart the instance.",
      "B": "Create an Amazon CloudWatch alarm for the EC2 instance with detailed monitoring. Add an action to restart the instance.",
      "C": "Create an AWS Lambda function to restart the EC2 instance, invoked on a scheduled basis every 2 minutes.",
      "D": "Create an AWS Lambda function to restart the EC2 instance, invoked by EC2 health checks."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369160-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 61,
    "question": "CloudOps 엔지니어는 여러 IAM 사용자에게 IAM 정책을 연결하여 AWS 서비스에 대한 액세스를 제공하려고 합니다. CloudOps 엔지니어는 정책을 변경하고 새 버전을 생성할 수 있기를 원합니다. 이 요구사항을 충족하는 조치의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "사용자를 IAM 서비스 연결 역할에 추가합니다. 역할에 정책을 연결합니다.",
      "B": "사용자를 IAM 사용자 그룹에 추가합니다. 그룹에 정책을 연결합니다.",
      "C": "AWS 관리형 정책을 생성합니다.",
      "D": "고객 관리형 정책을 생성합니다.",
      "E": "인라인 정책을 생성합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ 사용자 그룹—여러 사용자에게 정책을 일괄 관리하는 메커니즘\n▸ 고객 관리형 정책(Customer Managed)—사용자가 생성/관리하는 정책, 버전 관리 가능 (최대 5개 버전)\n▸ AWS 관리형 정책(AWS Managed)—AWS에서 제공, 사용자가 버전 변경 불가 (AWS가 업데이트)\n▸ 인라인 정책—1:1 정책, 버전 관리 불가, 삭제 시 정책도 함께 삭제\n\n【정답 포인트】\n▸ \"여러 IAM 사용자\" → 개별 정책 연결 비효율 → 그룹 사용 (옵션 B)\n▸ \"정책 변경\" + \"새 버전 생성\" → 버전 관리 기능 필요 → 고객 관리형 정책 (옵션 D)\n▸ 2개 선택 조합: B(그룹) + D(정책 타입) 필수\n▸ 고객 관리형 정책만 버전 관리 가능 (생성, 설정, 삭제)\n\n【오답 체크】\n(A) 서비스 연결 역할—특정 AWS 서비스 자동 생성 역할. 사용자 추가 개념 없음. 수동 관리 불가.\n(C) AWS 관리형 정책—AWS에서 관리, 버전 변경 권한 없음. 새로운 버전 생성 불가(읽기 전용).\n(E) 인라인 정책—각 사용자/그룹에 직접 정책 포함. 버전 관리 메커니즘 없음. 수정 시 새 버전 생성 아님(덮어쓰기).\n\n【시험 포인트】\n▸ IAM 정책 유형 숙지: AWS 관리형(버전 없음), 고객 관리형(버전 관리), 인라인(버전 없음)\n▸ \"버전 관리\" 요구 → 항상 \"고객 관리형 정책\" 선택\n▸ \"여러 사용자\" + \"중앙 관리\" → 그룹 사용 (개별 정책 추적 용이)\n▸ 2개 선택 문제 → 정책 적용 방식(그룹) + 정책 타입(고객 관리형) 구분 필수",
    "en_q": "A CloudOps engineer wants to provide access to AWS services by attaching an IAM policy to multiple IAM users The CloudOps engineer also wants to be able to change the policy and create new versions. Which combination of actions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Add the users to an IAM service-linked role. Attach the policy to the role.",
      "B": "Add the users to an IAM user group. Attach the policy to the group.",
      "C": "Create an AWS managed policy.",
      "D": "Create a customer managed policy.",
      "E": "Create an inline policy."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369161-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 62,
    "question": "회사가 Amazon EC2 Auto Scaling 그룹에 있는 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 스케일 아웃 작업은 장시간 부팅 스크립트 때문에 완료하는 데 오랜 시간이 걸립니다. CloudOps 엔지니어는 Auto Scaling 그룹을 과도하게 프로비저닝하지 않고 스케일 아웃 작업에 필요한 시간을 줄여야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "더 큰 인스턴스 크기를 사용하도록 시작 구성을 변경합니다.",
      "B": "Auto Scaling 그룹의 최소 인스턴스 수를 증가시킵니다.",
      "C": "Auto Scaling 그룹에 예측 스케일링 정책을 추가합니다.",
      "D": "Auto Scaling 그룹에 따뜻한 풀을 추가합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Warm Pool—미리 시작된 인스턴스를 대기 상태로 유지. 스케일 아웃 시 즉시 활성화 (부팅 시간 제거)\n▸ 부팅 스크립트—인스턴스 초기화 시간 소비 (Application Load, Configuration 등)\n▸ 스케일 아웃 지연—부팅 완료 시까지 트래픽 처리 불가\n▸ 과도 프로비저닝—평상시 불필요한 높은 최소 인스턴스 수\n\n【정답 포인트】\n▸ \"스케일 아웃 시간\" + \"과도 프로비저닝 금지\" → Warm Pool 최적\n▸ Warm Pool—미리 준비된 인스턴스 (부팅 완료), 필요 시 활성화 (Standby → InService)\n▸ 부팅 스크립트 시간 문제 → Warm Pool이 완전히 초기화된 상태로 해결\n▸ 평상시 낮은 비용 + 스케일 아웃 빠름 = 최고 효율\n\n【오답 체크】\n(A) 더 큰 인스턴스—부팅 시간 감소 아님. 비용 증가, 크기 자체는 스케일 속도와 무관.\n(B) 최소 인스턴스 수 증가—평상시 항상 실행 → 과도 프로비저닝 (요구사항 위배). 스케일 아웃 지연도 해결 안 함.\n(C) 예측 스케일링—미래 트래픽 예측 후 미리 스케일 아웃. 현재 상황에서는 여전히 부팅 시간 필요. 예측 오류 시 비효율.\n\n【시험 포인트】\n▸ Warm Pool은 EC2 Auto Scaling의 비교적 새로운 기능. \"부팅 시간\" 문제 해결 최적화\n▸ 스케일 아웃 성능 개선 방법: 1)Warm Pool(우선), 2)더 간단한 부팅 스크립트, 3)AMI 최적화\n▸ 비용 효율성 + 성능 → Warm Pool 선택. 최소 인스턴스 증가는 평상시 낭비\n▸ \"과도 프로비저닝 금지\" 조건이 핵심—이를 피하면서 속도 개선하는 유일한 방법은 Warm Pool",
    "en_q": "A company runs an application on Amazon EC2 instances that are in an Amazon EC2 Auto Scaling group. Scale-out actions take a long time to become complete because of long-running boot scripts. A CloudOps engineer must implement a solution to reduce the required time for scale-out actions without overprovisioning the Auto Scaling group. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Change the launch configuration to use a larger instance size.",
      "B": "Increase the minimum number of instances in the Auto Scaling group.",
      "C": "Add a predictive scaling policy to the Auto Scaling group.",
      "D": "Add a warm pool to the Auto Scaling group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369220-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 63,
    "question": "CloudOps 엔지니어가 퍼블릭 서브넷과 프라이빗 서브넷을 포함하는 새로운 VPC를 생성합니다. CloudOps 엔지니어가 프라이빗 서브넷에 11개의 Amazon EC2 인스턴스를 성공적으로 시작합니다. CloudOps 엔지니어는 동일한 서브넷에서 하나 이상의 EC2 인스턴스를 시작하려고 시도합니다. 그러나 CloudOps 엔지니어는 사용 가능한 무료 IP 주소가 충분하지 않다는 오류 메시지를 받습니다. CloudOps 엔지니어는 더 많은 EC2 인스턴스를 배포하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "프라이빗 서브넷을 편집하여 CIDR 블록을 /27로 변경합니다.",
      "B": "프라이빗 서브넷을 편집하여 두 번째 가용 영역으로 확장합니다.",
      "C": "프라이빗 서브넷에 추가 탄력적 IP 주소를 할당합니다.",
      "D": "필요한 EC2 인스턴스를 유지하려면 새로운 프라이빗 서브넷을 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ VPC CIDR—기본값 /16 (65,536개 IP), 서브넷은 /24 (256개 IP) 등으로 분할\n▸ 서브넷 IP 고갈—할당된 CIDR 범위 내 주소 부족. 서브넷 확장 불가 (생성 후 고정)\n▸ 새 서브넷—다른 CIDR 범위의 독립적 서브넷, AZ별로 생성 가능\n▸ Elastic IP—퍼블릭 IP 주소. 프라이빗 인스턴스에는 프라이빗 IP 필요 (EIP 도움 안 됨)\n\n【정답 포인트】\n▸ \"IP 주소 충분하지 않음\" → 현재 서브넷의 CIDR 범위 초과\n▸ \"서브넷 CIDR 변경\" 불가능—서브넷 생성 후 수정/확장 불가 (AWS 정책)\n▸ \"새 프라이빗 서브넷\" → 다른 CIDR 블록으로 생성. 추가 IP 주소 공간 확보 (옵션 D)\n▸ 새 서브넷은 같은 AZ 또는 다른 AZ에 생성 가능\n\n【오답 체크】\n(A) CIDR 블록 변경(/27)—더 작은 범위로 축소, IP 수 감소. 확장 불가. 서브넷 생성 후 수정 불가능.\n(B) 두 번째 AZ로 확장—단일 서브넷은 1개 AZ에만 존재. 새 AZ 추가 = 새 서브넷 생성 필요 (B 자체 불가).\n(C) Elastic IP 할당—퍼블릭 IP 주소. 프라이빗 인스턴스의 프라이빗 IP 부족과 무관. 프라이빗 IP 부족 해결 안 함.\n\n【시험 포인트】\n▸ 서브넷 CIDR \"변경 불가\" 규칙 필수 인지—생성 후 고정\n▸ IP 고갈 해결 유일한 방법 → 새로운 CIDR 범위의 서브넷 생성\n▸ VPC 설계 시 적절한 CIDR 블록 크기 계획 중요 (사후 수정 불가)\n▸ Elastic IP ≠ Private IP. Private IP 부족 문제에는 효과 없음",
    "en_q": "A CloudOps engineer creates a new VPC that includes a public subnet and a private subnet. The CloudOps engineer successfully launches 11 Amazon EC2 instances in the private subnet The CloudOps engineer attempts to launch one more EC2 instance in the same subnet. However, the CloudOps engineer receives an error message that states that not enough free IP addresses are available. What must the CloudOps engineer do to deploy more EC2 instances?",
    "en_opts": {
      "A": "Edit the private subnet to change the CIDR block to /27.",
      "B": "Edit the private subnet to extend across a second Availability Zone.",
      "C": "Assign additional Elastic IP addresses to the private subnet.",
      "D": "Create a new private subnet to hold the required EC2 instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369162-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 64,
    "question": "CloudOps 엔지니어는 맞춤형 애플리케이션별 이벤트 세트를 위한 이벤트 인프라를 구축해야 합니다. 이벤트는 처리를 위해 AWS Lambda 함수로 전송되어야 합니다. CloudOps 엔지니어는 이벤트 유형 또는 이벤트 시간별로 나중에 재생하기 위해 이벤트를 기록해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EventBridge 커스텀 이벤트 버스를 생성합니다. 커스텀 이벤트 버스에서 아카이브를 생성합니다. 커스텀 이벤트를 Lambda 함수로 전송하는 규칙을 생성합니다.",
      "B": "Amazon EventBridge 기본 이벤트 버스에 아카이브를 생성합니다. 패턴 매칭을 사용하여 커스텀 이벤트를 기록합니다. 커스텀 이벤트를 Lambda 함수로 전송하는 규칙을 생성합니다.",
      "C": "Amazon EventBridge 기본 이벤트 버스에 아카이브를 생성합니다. 커스텀 이벤트를 수집하고 커스텀 이벤트를 아카이브에 저장하는 EventBridge 파이프를 생성합니다. 커스텀 이벤트를 Lambda 함수로 전송하는 규칙을 생성합니다.",
      "D": "Amazon CloudWatch Logs에서 로그 그룹을 생성합니다. Lambda 함수 및 로그 그룹으로 커스텀 이벤트를 전송하는 Amazon EventBridge 규칙을 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ EventBridge Archive—이벤트를 JSON 형식으로 저장. 이벤트 유형/시간으로 재생 가능\n▸ 커스텀 이벤트 버스—사용자 정의 이벤트 소스 전용. 기본 이벤트 버스(AWS 서비스 이벤트)와 분리\n▸ EventBridge Pipe—이벤트 수집/변환/라우팅. 아카이브 저장과는 다름\n▸ 패턴 매칭—이벤트 필터링, 아카이브 생성과 무관\n\n【정답 포인트】\n▸ \"커스텀 애플리케이션 이벤트\" → 커스텀 이벤트 버스 필수 (기본 버스는 AWS 관리 이벤트)\n▸ \"이벤트 기록\" + \"유형/시간별 재생\" → Archive 기능 (옵션 A)\n▸ \"Lambda 함수 전송\" + \"아카이빙\" 동시 지원 → 커스텀 버스 + Archive + Rule (옵션 A 완전 구현)\n\n【오답 체크】\n(B) 기본 이벤트 버스—AWS 서비스(EC2, RDS, S3) 이벤트용. 커스텀 애플리케이션 이벤트 구독 불가. 패턴 매칭은 필터링일 뿐 아카이빙 기능 아님.\n(C) EventBridge Pipe—이벤트 변환/라우팅용. 아카이브 저장 기능 없음 (Pipe 목적과 다름). 기본 버스는 커스텀 이벤트 부적절.\n(D) CloudWatch Logs—텍스트 로그 저장. 구조화된 이벤트 재생 불가. \"이벤트 유형별 재생\" 기능 없음. JSON 아카이빙과 다름.\n\n【시험 포인트】\n▸ EventBridge 버스 선택: 기본(AWS 서비스 이벤트), 커스텀(사용자 정의 이벤트)\n▸ Archive = 이벤트 영구 저장 + 유형/시간별 재생 검색 기능\n▸ EventBridge Pipe ≠ Archive. Pipe는 변환/라우팅, Archive는 저장소\n▸ 커스텀 애플리케이션 이벤트 → 항상 \"커스텀 이벤트 버스\" 필요",
    "en_q": "A CloudOps engineer needs to build an event infrastructure for a set of custom application-specific events. The events must be sent to an AWS Lambda function for processing. The CloudOps engineer must record the events to replay later by event type or event time. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an Amazon EventBridge custom event bus. Create an archive on the custom event bus. Create a rule to send the custom events to the Lambda function.",
      "B": "Create an archive on the Amazon EventBridge default event bus. Use pattern matching to record the custom events. Create a rule to send the custom events to the Lambda function.",
      "C": "Create an archive on the Amazon EventBridge default event bus. Create an EventBridge pipe to ingest the custom events and to save the custom events in the archive. Create a rule to send the custom events to the Lambda function.",
      "D": "Create a log group in Amazon CloudWatch Logs. Create an Amazon EventBridge rule to send the custom events to the Lambda function and to the log group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369221-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 65,
    "question": "CloudOps 엔지니어는 us-west-2의 회사 기존 인프라의 AWS CloudFormation 템플릿을 가지고 있습니다. CloudOps 엔지니어는 템플릿을 사용하여 eu-west-1에서 새 스택을 시작하려고 하지만 스택만 부분적으로 배포되고 오류 메시지를 받은 후 롤백됩니다. 이 템플릿이 배포되지 않는 이유는 무엇입니까? (2개 선택)",
    "options": {
      "A": "템플릿이 eu-west-1에서 사용할 수 없는 IAM 사용자를 참조했습니다.",
      "B": "템플릿이 eu-west-1에서 사용할 수 없는 Amazon Machine Image(AMI)를 참조했습니다.",
      "C": "템플릿에 리소스를 배포할 적절한 수준의 권한이 없었습니다.",
      "D": "템플릿이 eu-west-1에 존재하지 않는 서비스를 요청했습니다.",
      "E": "CloudFormation 템플릿은 기존 서비스를 업데이트하는 데만 사용할 수 있습니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ Region 간 리소스 호환성—AMI, 서비스 가용성은 리전별로 다름\n▸ AMI ID—리전별 고유 ID. 한 리전의 AMI ID를 다른 리전에 사용 불가\n▸ 서비스 가용성—일부 AWS 서비스는 특정 리전에만 지원 (예: Outposts, 특정 ML 서비스)\n▸ 권한 문제—CloudFormation 역할 권한 부족 (스택 생성 실패, 리전과 무관)\n\n【정답 포인트】\n▸ \"us-west-2에서 성공\" + \"eu-west-1 실패\" → 리전별 차이가 원인\n▸ \"AMI 참조\" → us-west-2의 AMI ID ≠ eu-west-1 AMI ID (옵션 B)\n▸ \"서비스 부재\" → 일부 서비스는 특정 리전만 지원 (옵션 D)\n▸ \"IAM 사용자\" → 글로벌 리소스, 리전 간 동일 (옵션 A 오답)\n▸ \"권한 부족\" → 템플릿 오류 아님, CloudFormation 실행 권한 이슈 (옵션 C 이유 아님)\n\n【오답 체크】\n(A) IAM 사용자는 글로벌 리소스. eu-west-1에 없다는 개념 자체 불가능. IAM은 모든 리전에서 접근 가능.\n(C) 권한 부족—CloudFormation 역할의 IAM 권한 문제. 템플릿 자체 오류 아님. \"스택 배포 실패\"의 원인은 될 수 있지만 \"템플릿이\" 문제라는 표현과 맞지 않음.\n(E) CloudFormation은 새 스택 생성(Create), 업데이트(Update), 삭제(Delete) 모두 가능. \"기존 서비스 업데이트만\" 오답.\n\n【시험 포인트】\n▸ 리전별 리소스 차이 인식—AMI, 서비스 가용성 확인 필수\n▸ 템플릿 마이그레이션—리전 간 리소스 ID 수정 필요 (AMI, 서비스 체크)\n▸ 글로벌 vs 리지널 리소스 구분: IAM(글로벌), EC2/S3/RDS(리지널)\n▸ 권한 문제 vs 템플릿 오류 구분—권한은 실행 환경, 템플릿은 설정 자체",
    "en_q": "A CloudOps engineer has an AWS CloudFormation template of the company's existing infrastructure in us-west-2. The CloudOps engineer attempts to use the template to launch a new stack in eu-west-1, but the stack only partially deploys, receives an error message, and then rolls back. Why would this template fail to deploy? (Choose two.)",
    "en_opts": {
      "A": "The template referenced an IAM user that is not available in eu-west-1.",
      "B": "The template referenced an Amazon Machine Image (AMI) that is not available in eu-west-1.",
      "C": "The template did not have the proper level of permissions to deploy the resources.",
      "D": "The template requested services that do not exist in eu-west-1.",
      "E": "CloudFormation templates can be used only to update existing services"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369163-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 66,
    "question": "회사의 웹 사이트는 Amazon EC2 Linux 인스턴스에서 실행됩니다. 웹 사이트는 Amazon S3 버킷에서 PDF 파일을 제공해야 합니다. 모든 공개 액세스가 계정 수준에서 S3 버킷으로 차단됩니다. 회사는 웹 사이트 사용자가 PDF 파일을 다운로드할 수 있도록 허용해야 합니다. 이 요구사항을 최소 관리 노력으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "s3:list* 및 s3:get* 권한을 허용하는 정책이 있는 IAM 역할을 생성합니다. EC2 인스턴스에 역할을 할당합니다. 요청된 PDF 파일을 EC2 인스턴스로 다운로드하고 웹 사이트 사용자에게 파일을 전달하도록 회사 직원을 할당합니다. 로컬 파일을 주기적으로 삭제하는 AWS Lambda 함수를 생성합니다.",
      "B": "S3 버킷을 가리키는 오리진 액세스 제어(OAC)를 사용하는 Amazon CloudFront 배포를 생성합니다. 배포에서의 연결을 허용하도록 버킷 정책을 적용합니다. 사용자가 PDF 파일을 요청할 때 회사 직원이 배포 URL과 객체 경로를 포함하는 다운로드 URL을 사용자에게 제공하도록 할당합니다.",
      "C": "S3 버킷 권한을 변경하여 소스 S3 버킷에 공개 액세스를 허용합니다. 사용자가 PDF 파일을 요청할 때 회사 직원이 PDF 파일 URL을 사용자에게 제공하도록 할당합니다.",
      "D": "공개 서브넷에 IAM 인스턴스 프로필이 있는 EC2 인스턴스를 배포합니다. EC2 인스턴스에서 서명된 URL을 사용하여 웹 사이트 사용자에게 S3 버킷에 대한 임시 액세스를 제공합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudFront 배포—CDN을 통한 콘텐츠 전달. 엣지 로케이션에서 캐싱\n▸ 오리진 액세스 제어(OAC)—CloudFront만 S3 버킷 액세스 가능. 직접 액세스 차단\n▸ 버킷 정책—특정 서비스/IAM에게만 S3 액세스 권한 부여\n▸ \"최소 관리 노력\" → 자동화, 수동 작업 최소화\n\n【정답 포인트】\n▸ \"공개 액세스 차단\" + \"사용자가 PDF 다운로드\" → S3 직접 접근 불가 → 프록시 필요\n▸ \"CloudFront\" + \"OAC\" → CloudFront만 S3 접근, 사용자는 CloudFront 통한 접근 (보안 + 캐싱)\n▸ \"최소 관리 노력\" → 자동화된 CDN 솔루션 (CloudFront)\n▸ 회사 직원 개입 최소—URL 제공만 하면 자동 처리\n\n【오답 체크】\n(A) EC2 + IAM 역할—수동 다운로드/전달 필요. 확장성 낮음. 회사 직원 부담 높음. Lambda로 로컬 파일 삭제 = 추가 복잡성.\n(C) 공개 액세스 허용—\"계정 수준 차단\" 정책 위반. 보안 위험. 누구나 S3 직접 접근 가능.\n(D) 서명된 URL—임시 액세스 제공. 기술적으로는 가능하지만, EC2가 서명 로직 처리 필요 (운영 복잡성). OAC 방식이 더 단순하고 자동화됨.\n\n【시험 포인트】\n▸ \"최소 관리 노력\" → CloudFront + OAC 조합 우선 검토\n▸ OAC의 이점—CloudFront만 S3 접근 가능, 사용자는 CDN 통함 (보안 + 성능)\n▸ 서명된 URL vs OAC: 서명 URL(동적 권한 필요), OAC(고정 정책, 설정 후 자동)\n▸ 수동 작업 제거가 핵심—EC2 직원 개입 최소화",
    "en_q": "A company's website runs on an Amazon EC2 Linux instance. The website needs to serve PDF files from an Amazon S3 bucket. All public access to S3 bucket is blocked at the account level. The company needs to allow website users to download the PDF files. Which solution will meet these requirements with the LEAST administrative effort?",
    "en_opts": {
      "A": "Create an IAM role that has a policy that allows s3:list* and s3:get* permissions. Assign the role to the EC2 instance. Assign a company employee to download requested PDF file to the EC2 instance and to deliver the files to website users. Create an AWS Lambda function to periodically delete local files.",
      "B": "Create an Amazon CloudFront distribution that uses an origin access control (OAC) that points to the S3 bucket. Apply a bucket policy to the bucket to allow connections from the CloudFront distribution. Assign a company employee to provide a download URL that contains the distribution URL and the object path to users when users request PDF files.",
      "C": "Change the S3 bucket permissions to allow public access on the source S3 bucket. Assign a company employee to provide a PDF file URL to users when users request the PDF files.",
      "D": "Deploy an EC2 instance that has an 1AM instance profile to a public subnet. Use a signed URL from the EC2 instance to provide temporary access to the S3 bucket for website users."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383646-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 67,
    "question": "금융 서비스 회사는 고객 이미지를 us-east-1 리전의 Amazon S3 버킷에 저장합니다. 규정을 준수하려면 회사는 모든 기존 객체가 두 번째 AWS 리전의 S3 버킷으로 복제되도록 해야 합니다. 객체 복제가 실패하면 회사는 객체에 대해 복제를 다시 시도할 수 있어야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 교차 리전 복제(CRR)를 구성합니다. Amazon S3 라이브 복제를 사용하여 기존 객체를 복제합니다.",
      "B": "Amazon S3 교차 리전 복제(CRR)를 구성합니다. S3 배치 복제를 사용하여 기존 객체를 복제합니다.",
      "C": "Amazon S3 교차 리전 복제(CRR)를 구성합니다. S3 복제 시간 제어(S3 RTC)를 사용하여 기존 객체를 복제합니다.",
      "D": "S3 라이프사이클 규칙을 사용하여 두 번째 리전의 대상 버킷으로 객체를 이동합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CRR(Cross-Region Replication)—새 객체 자동 복제. \"기존\" 객체는 복제 안 함 (CRR만으로는 불가)\n▸ S3 배치 복제(Batch Replication)—기존 객체 일괄 복제. 실패 시 재시도 가능\n▸ S3 라이브 복제—실시간 복제, 기존 객체 미포함\n▸ S3 RTC(Replication Time Control)—복제 시간 보장 (99.99% 15분 내 복제). 기존 객체용 아님\n\n【정답 포인트】\n▸ \"모든 기존 객체\" + \"두 번째 리전\" → 과거 객체 복제 필요\n▸ \"복제 실패\" + \"재시도\" → 배치 복제의 핵심 기능 (실패 처리)\n▸ CRR 기본 설정 + S3 배치 복제 → 기존 객체 일괄 처리\n▸ \"규정 준수\" → 모든 데이터 복제 완료 필수\n\n【오답 체크】\n(A) S3 라이브 복제—실시간 새 객체만 복제. \"기존\" 객체 미포함. 규정 준수 불가.\n(C) S3 RTC—복제 시간 보장 서비스. 새 객체에만 적용. \"기존 객체\" 복제 기능 아님. 복제 속도 보장일 뿐.\n(D) S3 라이프사이클 규칙—객체 이동(같은 S3 내 스토리지 클래스). 다른 리전 복제 불가. 지역 간 복제는 CRR/배치 복제만 가능.\n\n【시험 포인트】\n▸ CRR 한계 인식—새 객체만 복제. 기존 객체 = S3 배치 복제 필수\n▸ S3 배치 복제—실패 재시도, 진행 상황 추적, 보고서 생성 지원\n▸ \"기존\" vs \"신규\" 구분이 핵심—날짜별 복제 정책 필수\n▸ 라이프사이클 ≠ CRR. 라이프사이클은 스토리지 클래스 전환, 복제 아님",
    "en_q": "A financial services company stores customer images in an Amazon S3 bucket in the us-east-1 Region. To comply with regulations, the company must ensure that all existing objects are replicated to an S3 bucket in a second AWS Region. If an object replication fails, the company must be able to retry replication for the object. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure Amazon S3 Cross-Region Replication (CRR). Use Amazon S3 live replication to replicate existing objects.",
      "B": "Configure Amazon S3 Cross-Region Replication (CRR). Use S3 Batch Replication to replicate existing objects.",
      "C": "Configure Amazon S3 Cross-Region Replication (CRR). Use S3 Replication Time Control (S3 RTC) to replicate existing objects.",
      "D": "Use S3 Lifecycle rules to move objects to the destination bucket in a second Region."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383639-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 68,
    "question": "회사는 Application Load Balancer(ALB) 뒤의 메모리 최적화 Amazon EC2 인스턴스를 사용하여 애플리케이션을 실행합니다. CloudOps 엔지니어는 AWS 제공 Red Hat Enterprise Linux(RHEL) Amazon Machine Image(AMI)에서 EC2 인스턴스를 시작했습니다. CloudOps 엔지니어는 5분 간격으로 RAM 사용률을 모니터링해야 합니다. CloudOps 엔지니어는 들어오는 부하에 따라 EC2 인스턴스가 적절하게 스케일 인/아웃되도록 해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스에 대한 상세 모니터링을 구성합니다. EC2 인스턴스에 Amazon CloudWatch 에이전트를 구성합니다. EC2 Auto Scaling 그룹과 mem_active 메트릭에 기반한 Auto Scaling 정책을 생성합니다.",
      "B": "EC2 인스턴스에 대한 상세 모니터링을 구성합니다. 상세 모니터링 기능이 제공하는 mem_used_percent 메트릭을 사용합니다. CloudWatch 에이전트가 데이터를 업로드할 수 있도록 하는 IAM 역할을 생성합니다. EC2 Auto Scaling 그룹과 mem_used_percent 메트릭에 기반한 Auto Scaling 정책을 생성합니다.",
      "C": "EC2 인스턴스에 대한 기본 모니터링을 구성합니다. EC2 인스턴스에 Amazon CloudWatch 에이전트를 구성합니다. CloudWatch 에이전트가 데이터를 업로드할 수 있도록 하는 IAM 역할을 생성합니다. EC2 인스턴스와 mem_used_percent 메트릭에 기반한 Auto Scaling 정책을 생성합니다.",
      "D": "EC2 인스턴스에 대한 기본 모니터링을 구성합니다. 모니터링을 위해 표준 mem_used_percent 메트릭을 사용합니다. EC2 Auto Scaling 그룹과 mem_used_percent 메트릭에 기반한 Auto Scaling 정책을 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 기본 모니터링—AWS 제공 메트릭 (CPU, Network). RAM 메트릭 없음\n▸ 상세 모니터링—AWS 제공 메트릭 (기본과 동일), 1분 간격\n▸ CloudWatch 에이전트—EC2 인스턴스에서 커스텀 메트릭(RAM, 디스크 등) 수집 후 CloudWatch 업로드\n▸ mem_used_percent—커스텀 메트릭. CloudWatch 에이전트만 제공 (기본/상세 모니터링 아님)\n\n【정답 포인트】\n▸ \"RAM 사용률\" → AWS 기본 메트릭 부재 → CloudWatch 에이전트 필수\n▸ \"mem_used_percent\" → 에이전트가 수집하는 커스텀 메트릭\n▸ \"5분 간격\" → 기본 모니터링이 5분 간격 제공 (상세 = 1분)\n▸ \"IAM 역할\" → 에이전트가 CloudWatch에 데이터 업로드하려면 권한 필요\n▸ 조합: 기본 모니터링 + CloudWatch 에이전트 + IAM 역할 + mem_used_percent (옵션 C)\n\n【오답 체크】\n(A) mem_active 메트릭—일반적이지 않음. mem_used_percent (표준 커스텀 메트릭) 아님. CloudWatch 에이전트 설정해도 에이전트 업로드 권한(IAM) 없음.\n(B) 상세 모니터링 + mem_used_percent—상세 모니터링은 \"상세 메트릭\"을 제공하지만 mem_used_percent 없음. \"상세 모니터링 기능이 제공\"은 오답. 에이전트 필요.\n(D) 기본 모니터링만—mem_used_percent 메트릭 제공 불가 (에이전트 없음). \"표준 mem_used_percent\"는 존재하지 않음. 에이전트로만 가능.\n\n【시험 포인트】\n▸ 기본/상세 모니터링의 한계—OS 내부 메트릭(RAM, 디스크) 미지원\n▸ 커스텀 메트릭 = CloudWatch 에이전트 필수\n▸ 에이전트 업로드 권한 = IAM 역할 필수 (\"allow cloudwatch:PutMetricData\")\n▸ mem_used_percent는 \"커스텀\" 메트릭, 기본/상세와 구분",
    "en_q": "A company uses memory-optimized Amazon EC2 instances behind a Network Load Balancer (NLB) to run an application. The company launched the EC2 instances from an AWS provided Red Hat Enterprise Linux (RHEL) Amazon Machine Image (AMI). A CloudOps engineer must monitor RAM utilization in 5-minute intervals. The CloudOps engineer must ensure that the EC2 instances scale in and out appropriately based on incoming load. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure detailed monitoring for the EC2 instances. Configure the Amazon CloudWatch agent on the EC2 instances. Create an EC2 Auto Scaling group and Auto Scaling policy that is based on the mem_active metric.",
      "B": "Configure detailed monitoring for the EC2 instances. Use the mem_used_percent metric that the detailed monitoring feature provides. Create an IAM role that allows the CloudWatch agent to upload data. Create an EC2 Auto Scaling group and Auto Scaling policy that is based on the mem_used_percent metric.",
      "C": "Configure basic monitoring for the EC2 instances. Configure the Amazon CloudWatch agent on the EC2 instances. Create an IAM role that allows the CloudWatch agent to upload data. Create an EC2 Auto Scaling group and Auto Scaling policy that is based on the mem_used_percent metric.",
      "D": "Configure basic monitoring for the EC2 instances. Use the standard mem_used_percent metric for monitoring. Create an EC2 Auto Scaling group and Auto Scaling policy that is based on the mem_used_percent metric."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383644-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 69,
    "question": "다국적 회사는 AWS Organizations의 조직을 사용하여 여러 AWS 리전의 200개 이상의 멤버 계정을 관리합니다. 회사는 모든 AWS 리소스가 특정 보안 요구사항을 충족하도록 해야 합니다. 회사는 ap-southeast-2 리전에 EC2 인스턴스를 배포하면 안 됩니다. 회사는 모든 멤버 계정의 루트 사용자 작업을 완전히 차단해야 합니다. 회사는 관리자를 포함한 누구도 AWS CloudTrail 로그를 삭제하지 못하도록 해야 합니다. 회사는 조직의 모든 기존 및 향후 계정에 자동으로 적용할 수 있는 중앙 집중식 관리 솔루션을 필요로 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 계정에 AWS Config 규칙을 생성하여 정책 위반을 감지합니다. 계정 루트 사용자를 위해 IAM 권한 경계를 구현합니다.",
      "B": "조직 전체에서 AWS Security Hub를 활성화합니다. 보안 요구사항을 적용하는 커스텀 보안 표준을 생성합니다. AWS CloudFormation StackSets를 사용하여 조직의 모든 계정에 표준을 배포합니다. Security Hub 자동 복구 작업을 설정합니다.",
      "C": "계정 거버넌스를 위해 AWS Control Tower를 사용합니다. 리전 거부 제어를 구성합니다. 서비스 제어 정책(SCPs)을 사용하여 루트 사용자 액세스를 제한합니다.",
      "D": "AWS Firewall Manager를 사용하여 보안 요구사항을 충족하는 보안 정책을 구성합니다. 조직 전체 준수 팩이 있는 AWS Config 집계자를 사용하여 보안 정책 위반을 감지합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Control Tower—조직의 계정 거버넌스, 자동 규정 준수, 가드레일 적용\n▸ 가드레일(Guardrails)—리전 제한, 루트 MFA, CloudTrail 필수 등 기본 제어\n▸ 서비스 제어 정책(SCPs)—조직 차원의 권한 제한. 모든 계정에 강제\n▸ 리전 거부 제어—특정 리전 접근 차단 (Control Tower)\n\n【정답 포인트】\n▸ \"중앙 집중식\" + \"모든 기존/향후 계정\" → AWS Control Tower 필수\n▸ \"ap-southeast-2 배포 금지\" → Control Tower \"리전 거부 제어\" (Region Deny)\n▸ \"루트 사용자 차단\" → SCPs로 루트 액션 명시적 거부\n▸ \"CloudTrail 로그 삭제 금지\" → SCPs로 \"cloudtrail:DeleteTrail\" 거부 (모든 사용자 포함 관리자)\n▸ 3가지 요구사항을 1개 솔루션(Control Tower + SCP)으로 처리\n\n【오답 체크】\n(A) AWS Config + 권한 경계—각 계정별 구성 필요. \"중앙 집중식\" 아님. 루트 사용자 차단 불완전 (권한 경계는 IAM 사용자용). \"기존/향후 계정 자동 적용\" 불가.\n(B) Security Hub + StackSets—컴플라이언스 감지/보고용. \"차단\" 기능 약함. 리전 거부, 루트 차단, CloudTrail 보호는 주요 기능 아님. CloudFormation 템플릿 유지 필요.\n(D) Firewall Manager + Config—네트워크 보안(WAF, Shield) 관리용. 리전 제한, 루트 권한 제어 기능 제한적. \"중앙 집중식 강제\" 수준이 Control Tower보다 낮음.\n\n【시험 포인트】\n▸ Control Tower는 \"조직 전체 거버넌스\" 최우선 선택 (200+ 계정)\n▸ SCP의 힘—루트 포함 \"모든 주체\"에 적용. 권한 경계보다 강력\n▸ 리전 거부 vs 다른 제어: Control Tower 가드레일이 가장 간단\n▸ 3가지 독립적 요구사항 → 1개 통합 솔루션 필요 (Control Tower)\n▸ SCP는 \"거부\" 기반 (Blacklist), IAM 권한 경계는 \"허용\" 기반 (Whitelist)",
    "en_q": "A multinational company uses an organization in AWS Organizations to manage over 200 member accounts across multiple AWS Regions. The company must ensure that all AWS resources meet specific security requirements. The company must not deploy any EC2 instances in the ap-southeast-2 Region. The company must completely block root user actions in all member accounts. The company must prevent any user from deleting AWS CloudTrail logs, including administrators. The company requires a centrally managed solution that the company can automatically apply to all existing and future accounts. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create AWS Config rules with remediation actions in each account to detect policy violations. Implement IAM permissions boundaries for the account root users.",
      "B": "Enable AWS Security Hub across the organization. Create custom security standards to enforce the security requirements. Use AWS CloudFormation StackSets to deploy the standards to all the accounts in the organization. Set up Security Hub automated remediation actions.",
      "C": "Use AWS Control Tower for account governance. Configure Region deny controls. Use service control policies (SCPs) to restrict root user access.",
      "D": "Configure AWS Firewall Manager with security policies to meet the security requirements. Use an AWS Config aggregator with organization-wide conformance packs to detect security policy violations."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383637-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 70,
    "question": "회사는 수백 개의 Amazon EC2 온디맨드 인스턴스 및 스팟 인스턴스를 사용하여 프로덕션 및 비프로덕션 워크로드를 실행합니다. 회사는 EC2 인스턴스에 AWS Systems Manager 에이전트(SSM Agent)를 설치하고 구성합니다. 최근 인스턴스 패치 작업 중에 일부 인스턴스는 인스턴스가 바쁘거나 다운되었기 때문에 패치되지 않았습니다. 회사는 모든 인스턴스의 현재 패치 버전을 나열하는 보고서를 생성해야 합니다. 이 요구사항을 가장 운영상 효율적인 방식으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Systems Manager Inventory를 사용하여 패치 버전을 수집합니다. 모든 인스턴스의 보고서를 생성합니다.",
      "B": "Systems Manager Run Command를 사용하여 패치 버전 정보를 원격으로 수집합니다. 모든 인스턴스의 보고서를 생성합니다.",
      "C": "AWS Config를 사용하여 SSM 에이전트의 출력을 사용하여 EC2 인스턴스 구성 변경을 추적합니다. 패치 버전을 확인하는 커스텀 규칙을 생성합니다. 모든 비패치된 인스턴스의 보고서를 생성합니다.",
      "D": "AWS Config를 사용하여 SSM 에이전트의 출력을 사용하여 EC2 인스턴스의 패치 상태를 모니터링합니다. 패치가 설치되어 있는지 확인하는 구성 준수 규칙을 생성합니다. 모든 인스턴스의 보고서를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Systems Manager Inventory—SSM Agent가 자동으로 인스턴스 메타데이터 및 패치 정보 수집, 저장\n▸ Systems Manager Run Command—명령 실행용. 수집보다 명령 실행 목적\n▸ AWS Config—구성 변경 추적, 규칙 기반 준수 모니터링\n▸ \"운영상 효율적\" → 최소 구성, 기본 기능 활용\n\n【정답 포인트】\n▸ \"패치 버전 정보 수집\" → Systems Manager Inventory 최적\n▸ \"모든 인스턴스\" → Inventory는 자동으로 모든 인스턴스 추적\n▸ \"보고서 생성\" → Inventory 쿼리 결과 직접 보고서화 가능\n▸ \"SSM Agent 이미 설치\" → Inventory 사용 즉시 가능 (추가 설정 최소)\n\n【오답 체크】\n(B) Run Command—명령 원격 실행용. 스크립트로 패치 정보 수집 후 매번 실행 필요. 자동 수집 불가. Inventory보다 수동 작업 많음.\n(C) AWS Config + 커스텀 규칙—구성 변경 추적용. \"패치 버전 수집\"이 주요 기능 아님. 커스텀 규칙 개발 필요 (운영 복잡성 증가).\n(D) Config + 준수 규칙—패치 준수 여부 확인용 (\"설치됨/미설치\" 이진). \"버전\" 정보 추적 제한적. Inventory가 버전별 추적에 우수.\n\n【시험 포인트】\n▸ Systems Manager Inventory는 \"수집\" 전문, Run Command는 \"실행\" 전문\n▸ 패치 정보 → Inventory (자동, 저장, 쿼리). Config (규칙 기반 확인)\n▸ \"운영상 효율적\" = 기본 기능 활용, 커스텀 로직 최소\n▸ SSM Agent 이미 설치 → Inventory 추가 에이전트 불필요",
    "en_q": "A company uses hundreds of Amazon EC2 On-Demand Instances and Spot Instances to run production and non-production workloads. The company installs and configures the AWS Systems Manager Agent (SSM Agent) on the EC2 instances. During a recent instance patch operation, some instances were not patched because the instances were either busy or down. The company needs to generate a report that lists the current patch version of all instances. Which solution will meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Use Systems Manager Inventory to collect patch versions. Generate a report of all instances.",
      "B": "Use Systems Manager Run Command to remotely collect patch version information. Generate a report of all instances.",
      "C": "Use AWS Config to track EC2 instance configuration changes by using output from the SSM Agents. Create a custom rule to check for patch versions. Generate a report of all unpatched instances.",
      "D": "Use AWS Config to monitor the patch status of the EC2 instances by using output from the SSM Agents. Create a configuration compliance rule to check whether patches are installed. Generate a report of all instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383638-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 71,
    "question": "CloudOps 엔지니어가 Amazon EC2 인스턴스의 플릿에 대한 권장 사항을 생성하기 위해 AWS Compute Optimizer를 사용하고 있습니다. 일부 인스턴스는 새로 출시된 인스턴스 타입을 사용하고, 다른 인스턴스는 구형 인스턴스 타입을 사용합니다. 분석 완료 후 CloudOps 엔지니어는 Compute Optimizer 대시보드에서 일부 EC2 인스턴스가 누락되었음을 발견합니다. 이 문제의 가능한 원인은 무엇입니까?",
    "options": {
      "A": "누락된 인스턴스는 분석을 위한 Amazon CloudWatch 메트릭 데이터가 불충분합니다.",
      "B": "Compute Optimizer가 누락된 인스턴스의 인스턴스 타입을 지원하지 않습니다.",
      "C": "Compute Optimizer는 이미 누락된 인스턴스를 최적화된 것으로 간주합니다.",
      "D": "누락된 인스턴스는 Windows 운영 체제를 실행하고 있습니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Compute Optimizer — AWS 리소스 최적화 권장사항 제공 서비스\n▸ Instance Type Compatibility — 새 인스턴스 타입 지원 여부\n\n【정답 포인트】\n▸ \"지원하지 않음\" → Compute Optimizer는 특정 인스턴스 타입(특히 구형)에 대한 지원이 제한될 수 있습니다. 지원되지 않는 타입의 인스턴스는 분석 대상에서 제외되어 대시보드에 표시되지 않습니다.\n\n【오답 체크】\n(A) CloudWatch 데이터 부족은 인스턴스를 누락시키기보다 권장사항을 제공하지 못하거나 '데이터 불충분' 상태로 표시합니다. 60~100자\n(C) 최적화된 인스턴스도 대시보드에 표시되며, 상태가 'Optimized'로 표시될 뿐 완전히 제외되지 않습니다. 70자\n(D) Compute Optimizer는 OS 타입과 무관하게 작동하며, Windows/Linux 인스턴스를 동일하게 분석합니다. 65자\n\n【시험 포인트】\n▸ AWS 서비스 지원 범위 이해 필수\n▸ '누락된 리소스' 문제는 대부분 '지원 대상 밖' 또는 '권한 부족'",
    "en_q": "A CloudOps engineer is using AWS Compute Optimizer to generate recommendations for a fleet of Amazon EC2 instances. Some of the instances use newly released instance types, while other instances use older instance types. After the analysis is complete, the CloudOps engineer notices that some of the EC2 instances are missing from the Compute Optimizer dashboard. What is the likely cause of this issue?",
    "en_opts": {
      "A": "The missing instances have insufficient historical Amazon CloudWatch metric data for analysis.",
      "B": "Compute Optimizer does not support the instance types of the missing instances.",
      "C": "Compute Optimizer already considers the missing instances to be optimized.",
      "D": "The missing instances are running a Windows operating system."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383645-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 72,
    "question": "회사가 Amazon VPC에서 워크로드를 실행하고 있으며, CloudWatch Logs를 구성했습니다. 회사는 AWS 계정에서 비정상적인 API 활동 및 보안 이벤트를 자동으로 감지할 솔루션이 필요합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Inspector를 사용하여 VPC Flow Logs를 스캔합니다.",
      "B": "Amazon GuardDuty를 사용하여 CloudWatch Logs를 모니터링합니다.",
      "C": "AWS CloudTrail Insights를 구현합니다.",
      "D": "AWS Config 자동 이상 탐지를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudTrail Insights — API 활동 이상 탐지 및 행동 패턴 분석 기능\n▸ Anomaly Detection — CloudTrail이 기계학습으로 비정상 API 호출 감지\n\n【정답 포인트】\n▸ \"API 활동 + 보안 이벤트\" → CloudTrail Insights는 API 호출 패턴 분석으로 비정상 행동을 자동 탐지합니다. GuardDuty는 CloudWatch Logs 기반 탐지가 아닌 네트워크/위협 탐지에 특화되어 있습니다.\n\n【오답 체크】\n(A) Inspector는 EC2/컨테이너 취약점 스캔에 중점이며, VPC Flow Logs만으로 API 활동 이상 탐지는 부족합니다. 75자\n(B) GuardDuty는 VPC Flow Logs, CloudTrail, DNS 로그를 분석하며, CloudWatch Logs 모니터링은 기본 기능이 아닙니다. 80자\n(D) AWS Config는 구성 준수 평가용이며, API 활동 이상 탐지 기능이 없습니다. 55자\n\n【시험 포인트】\n▸ CloudTrail Insights = API 이상 탐지의 정답\n▸ GuardDuty ≠ CloudWatch Logs 기반 분석",
    "en_q": "A company runs a workload in an Amazon VPC. The company configures Amazon CloudWatch Logs for the workload. The company needs a solution to automatically detect unusual API activity and security events in the company's AWS account. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Use Amazon Inspector to scan VPC flow logs.",
      "B": "Use Amazon GuardDuty to monitor CloudWatch logs.",
      "C": "Implement AWS CloudTrail Insights.",
      "D": "Use AWS Config automatic anomaly detection."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383640-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 73,
    "question": "회사에서 수백 개의 이미지를 생성하여 Amazon S3 버킷에 업로드합니다. 회사는 처리를 위해 이미지를 항상 켜져 있는 Amazon EC2 인스턴스로 수동으로 복사합니다. 각 이미지 처리에 보통 30초에서 120초가 소요됩니다. CloudOps 엔지니어는 이미지 처리 솔루션을 자동화하여 S3 버킷에 도착하는 즉시 처리하기를 원합니다. 이 요구사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 Event Notifications를 구성하여 이미지가 S3 버킷에 업로드될 때 EC2 인스턴스를 호출합니다. EC2 인스턴스에서 이미지 처리 솔루션을 실행합니다.",
      "B": "S3 Event Notifications를 구성하여 Amazon EventBridge 규칙을 호출합니다. EventBridge 규칙을 구성하여 이미지 처리를 위해 사전 구성된 AWS Glue ETL 작업을 시작합니다.",
      "C": "S3 Event Notifications를 구성하여 원본 S3 버킷에 새 이미지가 업로드될 때 AWS Lambda 함수를 호출하여 이미지 처리 로직을 실행합니다.",
      "D": "S3 Event Notifications를 구성하여 이미지가 S3 버킷에 업로드될 때 EC2 인스턴스로 지원되는 Amazon ECS(Amazon Elastic Container Service) 컨테이너의 작업을 호출합니다. ECS 작업을 구성하여 이미지를 처리합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Event Notifications — 객체 업로드 시 AWS 서비스 자동 호출\n▸ Lambda Invocation — 30~120초 작업에 최적화된 이벤트 기반 컴퓨팅\n▸ Cost Efficiency — 사용량에 따른 요금 (서버리스 vs 항상 켜진 EC2)\n\n【정답 포인트】\n▸ \"30-120초 처리 + 가장 비용 효율적\" → Lambda는 실행 시간만 청구되며, 항상 켜진 EC2보다 훨씬 저렴합니다. 이벤트 기반으로 자동 확장되어 처리량에 대응합니다.\n\n【오답 체크】\n(A) EC2는 항상 켜있어서 유휴 시간도 비용 발생합니다. 이미지 도착이 간헐적이면 EC2 활용률이 낮아 비효율적입니다. 80자\n(B) Glue ETL은 데이터 변환/통합용 고비용 서비스로, 단순 이미지 처리에는 과도합니다. 75자\n(D) ECS도 EC2 기반 백엔드로 항상 비용 발생하며, Lambda보다 관리 오버헤드가 큽니다. 70자\n\n【시험 포인트】\n▸ \"비용 효율\" + \"자동화\" → Lambda 선택\n▸ Glue ≠ 단순 이미지 처리",
    "en_q": "A company generates hundreds of images and uploads the images to an Amazon S3 bucket. The company manually copies the images to an always-on Amazon EC2 instance for processing. It usually takes between 30 seconds and 120 seconds to process each image. A CloudOps engineer wants to automate the image processing solution to process the images as soon as they arrive in the S3 bucket. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Configure S3 Event Notifications to invoke the EC2 instance when images are uploaded to the S3 bucket. Run the image processing solution on the EC2 instance to process the images.",
      "B": "Configure S3 Event Notifications to invoke an Amazon EventBridge rule. Configure the EventBridge rule to start a preconfigured AWS Glue ETL job to process images.",
      "C": "Configure S3 Event Notifications to invoke an AWS Lambda function that runs image processing logic when new images are uploaded on the source S3 bucket.",
      "D": "Configure S3 Event Notifications to invoke a task on an Amazon Elastic Container Service (Amazon ECS) container that is backed by EC2 instances when the images are uploaded to the S3 bucket. Configure the ECS task to process the images."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383643-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 74,
    "question": "회사는 AWS Organizations의 조직을 사용하여 여러 AWS 계정을 관리합니다. 회사는 조직의 모든 계정에서 특정 이벤트를 새 수신자 계정으로 전송하여 AWS Lambda 함수가 이벤트를 처리하도록 해야 합니다. CloudOps 엔지니어는 Amazon EventBridge를 구성하여 us-west-2 리전의 새 수신자 계정에 있는 대상 이벤트 버스로 이벤트를 라우팅해야 합니다. CloudOps 엔지니어는 발신자 계정과 수신자 계정에 규칙을 생성하여 지정된 이벤트를 매칭합니다. 규칙은 이벤트 패턴에서 account 매개변수를 지정하지 않습니다. CloudOps 엔지니어는 발신자 계정에서 대상 이벤트 버스에 대한 PutEvents 작업을 허용하는 IAM 역할을 생성합니다. us-east-1 리전에서 시작된 첫 번째 테스트 이벤트가 수신 계정의 Lambda 함수에 의해 처리되지 않습니다. 이벤트가 처리되지 않는 가능한 원인은 무엇입니까?",
    "options": {
      "A": "발신자 계정과 수신자 계정에서 EventBridge용 인터페이스 VPC 엔드포인트가 필요합니다.",
      "B": "대상 Lambda 함수가 다른 AWS 리전에 있으므로 EventBridge에서 지원하지 않습니다.",
      "C": "대상 이벤트 버스의 리소스 기반 정책을 수정하여 발신자 계정에서의 PutEvents API 호출을 허용해야 합니다.",
      "D": "수신 계정의 규칙은 이벤트 패턴에 {\"account\": (\"sender-account-id\")}를 지정해야 하며, 수신 계정 ID를 포함해야 합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Cross-Account EventBridge — 다른 계정의 이벤트 버스로 이벤트 전송\n▸ Resource-Based Policy — 대상 리소스가 다른 계정의 접근 허용\n▸ PutEvents Permission — IAM 역할과 리소스 정책 양쪽 필요\n\n【정답 포인트】\n▸ \"리소스 기반 정책\" → 발신자 계정의 IAM 역할만으로는 부족합니다. 수신자 계정의 이벤트 버스 리소스 정책도 발신자 계정 PrincipalArn의 PutEvents 허용을 명시해야 합니다.\n\n【오답 체크】\n(A) VPC 엔드포인트는 EventBridge 크로스 계정 통신의 필수 요구사항이 아닙니다. 인터넷/API 기반 통신으로도 작동합니다. 85자\n(B) EventBridge는 크로스 리전 이벤트 라우팅을 지원하며, Lambda가 다른 리전에 있어도 문제없습니다. 75자\n(D) account 필터는 이벤트 패턴 매칭용일 뿐, 없어도 라우팅에 영향 없습니다. 문제는 정책 부족입니다. 70자\n\n【시험 포인트】\n▸ 크로스 계정 = IAM 역할 + 리소스 정책 양쪽 필요\n▸ '접근 거부' → 정책 확인 필수",
    "en_q": "A company uses an organization in AWS Organizations to manage multiple AWS accounts. The company needs to send specific events from all the accounts in the organization to a new receiver account so an AWS Lambda function can process the events. A CloudOps engineer needs to configure Amazon EventBridge to route the events to a target event bus in the us-west-2 Region in the new receiver account. The CloudOps engineer creates rules in the sender accounts and the receiver account that match the specified events. The rules do not specify an account parameter in the event pattern. The CloudOps engineer creates IAM roles in the sender accounts to allow PutEvents actions on the target event bus. The first test events that originate from the us-east-1 Region are not being processed by the Lambda function in the receiving account. What is the likely reason the events are not processed?",
    "en_opts": {
      "A": "Interface VPC endpoints for EventBridge are required in the sender accounts and receiver accounts.",
      "B": "The target Lambda function is in a different AWS Region, which is not supported by EventBridge.",
      "C": "The resource-based policy on the target event bus must be modified to allow PutEvents API calls from the sender accounts.",
      "D": "The rule in the receiving account must specify {\"account\": (\"sender-account-id\"!)} in its event pattern and must include the receiving account ID."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383641-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 75,
    "question": "개발자가 Amazon S3 버킷에서 버전 관리를 활성화합니다. 개발자가 버킷에서 쓰기 작업을 수행하려고 할 때, HTTP 404 NoSuchKey 오류가 발생합니다. CloudOps 엔지니어가 이 문제를 해결해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 버킷에서 버전 관리를 비활성화하고 쓰기 작업을 다시 시도합니다.",
      "B": "버킷 정책을 수정하여 버전이 지정된 객체에 대한 쓰기 작업을 허용합니다.",
      "C": "버전 관리를 활성화한 후 최소 15분을 기다린 다음 쓰기 작업을 수행합니다.",
      "D": "버킷에서 S3 Transfer Acceleration을 활성화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Versioning — 객체 버전 관리 기능 활성화\n▸ NoSuchKey Error — 객체를 찾을 수 없음 에러\n▸ Replication Propagation — 설정 변경 반영 지연\n\n【정답 포인트】\n▸ \"버전 관리 활성화 후 즉시 오류\" → AWS는 S3 버킷 설정 변경(버전 관리 활성화) 후 모든 리전에 반영되는 데 시간 지연(보통 15분)이 발생합니다. 충분한 시간 대기 후 재시도하면 정상 작동합니다.\n\n【오답 체크】\n(A) 비활성화하면 버전 관리 기능을 사용할 수 없으므로, 요구사항(버전 관리)을 포기하는 것입니다. 70자\n(B) S3 버킷 정책은 버전 관리 활성화와 무관하며, 쓰기 권한 문제는 아닙니다. 75자\n(D) Transfer Acceleration은 전송 속도 최적화이며, 버전 관리 설정 지연과 무관합니다. 65자\n\n【시험 포인트】\n▸ AWS 설정 변경 = 반영 시간 지연 발생 패턴\n▸ 즉시 오류 → 설정 반영 대기 필요",
    "en_q": "A developer enables versioning on an Amazon S3 bucket. When the developer attempts to perform a write operation on the bucket, the developer encounters an HTTP 404 NoSuchKey error. A CloudOps engineer must resolve this issue. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Disable versioning on the S3 bucket and retry the write operation.",
      "B": "Modify the bucket policy to allow write operations on versioned objects.",
      "C": "Wait at least 15 minutes after enabling versioning, and then perform the write operation.",
      "D": "Enable S3 Transfer Acceleration on the bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383642-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 76,
    "question": "회사가 회사의 Amazon S3 버킷에 대해 Cross-Region Replication(CRR)을 구현하고 있습니다. S3 버킷은 us-east-1 리전에 있습니다. 회사는 Amazon S3 관리형 키(SSE-S3)를 사용한 서버 측 암호화를 사용하여 버킷의 데이터를 보호합니다. CloudOps 엔지니어는 백업을 저장하기 위해 새 AWS 계정을 생성합니다. 모든 백업 버킷은 us-west-2 리전에 있습니다. CloudOps 엔지니어는 원본 버킷과 대상 버킷에서 버전 관리를 활성화합니다. CloudOps 엔지니어는 원본 계정에서 s3.amazonaws.com용 IAM 역할을 생성합니다. CloudOps 엔지니어는 원본 버킷에서 읽기 작업, 대상 버킷에서 복제 작업, 대상 버킷의 키를 사용한 암호화 작업을 수행할 권한을 IAM 역할에 부여합니다. 대상 버킷 정책은 IAM 역할이 복제 및 읽기 작업을 수행하도록 허용합니다. 복제 구성 완료 후 CloudOps 엔지니어는 객체가 복제되지 않음을 확인합니다. 객체가 복제되지 않는 가능한 원인은 무엇입니까?",
    "options": {
      "A": "IAM 역할과 버킷 정책은 ObjectOwnerOverrideToBucketOwner 권한이 있어야 합니다.",
      "B": "원본 버킷과 대상 버킷의 객체는 다중 리전 키로 암호화되어야 합니다.",
      "C": "Gateway VPC 엔드포인트를 원본 계정과 대상 계정에 생성해야 합니다.",
      "D": "대상 버킷은 AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화를 사용해야 합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Cross-Region Replication — 다른 리전의 S3 버킷으로 자동 복제\n▸ ObjectOwnerOverrideToBucketOwner — 복제된 객체 소유권을 대상 버킷 소유자로 변경\n▸ Ownership Conflict — 크로스 계정 복제 시 객체 소유권 문제\n\n【정답 포인트】\n▸ \"크로스 계정 CRR\" → 원본 계정(Account A)의 객체는 Account A 소유이며, 대상 계정(Account B)의 버킷에 복제될 때 소유권 충돌이 발생합니다. ObjectOwnerOverrideToBucketOwner를 활성화해야 대상 버킷 소유자(Account B)가 복제된 객체를 관리할 수 있습니다.\n\n【오답 체크】\n(A) 정답 — 크로스 계정 CRR의 필수 권한입니다.\n(B) 현재 SSE-S3 사용 중이며, 문제 원인은 암호화 방식이 아닌 소유권입니다. 70자\n(C) Gateway VPC 엔드포인트는 S3 복제 필수 요구사항이 아니며, 인터넷 기반으로도 작동합니다. 80자\n(D) SSE-S3에서 SSE-KMS로 변경해도 소유권 문제는 해결되지 않습니다. 75자\n\n【시험 포인트】\n▸ 크로스 계정 복제 = ObjectOwnerOverrideToBucketOwner 필수\n▸ 소유권 없음 = 복제 실패",
    "en_q": "A company is implementing Cross-Region Replication (CRR) for the company's Amazon S3 buckets. The S3 buckets are in the us-east-1 Region. The company uses server-side encryption with Amazon S3 managed keys (SSE-S3) to secure the data in the buckets. A CloudOps engineer creates a new AWS account to store backups in S3 buckets. All backup buckets are in the us-west-2 Region. The CloudOps engineer enables versioning on the source buckets and the destination buckets. The CloudOps engineer creates an IAM role in the source account for s3.amazonaws.com. The CloudOps engineer grants the IAM role permissions to perform read actions in the source buckets, replicate actions in the destination buckets, and encrypt actions that use the destination bucket's key. The destination bucket policy allows the IAM role to perform replicate and read actions. After the replication configuration is complete, the CloudOps engineer notices that objects are not replicating. What is the likely reason the objects are not replicating?",
    "en_opts": {
      "A": "The IAM role and bucket policies must have the ObjectOwnerOverrideToBucketOwner permission.",
      "B": "The objects in the source buckets and destination buckets must be encrypted by multi-Region keys.",
      "C": "Gateway VPC endpoints for Amazon S3 must be created in the source accounts and the destination account.",
      "D": "The destination buckets must use server-side encryption with AWS KMS keys (SSE-KMS)."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402894-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 77,
    "question": "회사는 퍼블릭 서브넷과 프라이빗 서브넷을 포함하는 VPC를 가지고 있습니다. 회사는 Amazon Linux Amazon Machine Image(AMI)를 사용하고 AWS Systems Manager Agent(SSM Agent)가 설치된 Amazon EC2 인스턴스를 프라이빗 서브넷에 배포합니다. EC2 인스턴스는 아웃바운드 트래픽만 허용하는 보안 그룹에 있습니다. CloudOps 엔지니어는 권한이 있는 관리자 그룹이 인스턴스를 인터넷에 노출하지 않고 SSH를 통해 인스턴스에 연결할 수 있도록 해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "프라이빗 서브넷에 EC2 Instance Connect 엔드포인트를 생성합니다. 인바운드 SSH 트래픽을 허용하도록 보안 그룹을 업데이트합니다. 권한이 있는 관리자를 위한 IAM 그룹을 생성합니다. PowerUserAccess 관리형 정책을 IAM 그룹에 할당합니다.",
      "B": "프라이빗 서브넷에 Systems Manager 엔드포인트를 생성합니다. Systems Manager 엔드포인트가 연결된 프라이빗 네트워크에서 SSH 트래픽을 허용하도록 보안 그룹을 업데이트합니다. 권한이 있는 관리자를 위한 IAM 그룹을 생성합니다. PowerUserAccess 관리형 정책을 IAM 그룹에 할당합니다.",
      "C": "퍼블릭 서브넷에 EC2 Instance Connect 엔드포인트를 생성합니다. 프라이빗 네트워크에서 SSH 트래픽을 허용하도록 보안 그룹을 업데이트합니다. 권한이 있는 관리자를 위한 IAM 그룹을 생성합니다. PowerUserAccess 관리형 정책을 IAM 그룹에 할당합니다.",
      "D": "퍼블릭 서브넷에 Systems Manager 엔드포인트를 생성합니다. EC2 인스턴스를 위한 AmazonSSMManagedInstanceCore 권한이 있는 IAM 역할을 생성합니다. 권한이 있는 관리자를 위한 IAM 그룹을 생성합니다. AmazonEC2ReadOnlyAccess IAM 정책을 IAM 그룹에 할당합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ EC2 Instance Connect Endpoint — SSH/RDP 접근을 위한 프라이빗 엔드포인트\n▸ Systems Manager Session Manager — 웹/CLI 기반 인스턴스 접근\n▸ Bastion Host 대체 — 인터넷 노출 없는 보안 접근\n\n【정답 포인트】\n▸ \"SSH 접근 + 인터넷 미노출\" → EC2 Instance Connect 엔드포인트는 프라이빗 서브넷에서 SSH를 인터넷 노출 없이 제공합니다. Systems Manager와 달리 기존 SSH 클라이언트/도구와 호환됩니다. PowerUserAccess는 관리자 권한 제공합니다.\n\n【오답 체크】\n(B) Systems Manager 엔드포인트는 Session Manager(웹/CLI) 기반이며, SSH 직접 연결은 지원하지 않습니다. 80자\n(C) 퍼블릭 서브넷 엔드포인트는 아키텍처 요구사항에 맞지 않으며, 프라이빗 서브넷에 배치해야 합니다. 75자\n(D) Systems Manager 엔드포인트는 Session Manager용이고, AmazonEC2ReadOnlyAccess는 읽기 전용이라 SSH 세션 시작 권한이 부족합니다. 85자\n\n【시험 포인트】\n▸ \"SSH\" → EC2 Instance Connect 엔드포인트\n▸ \"웹 기반 접근\" → Systems Manager Session Manager",
    "en_q": "A company has a VPC that contains a public subnet and a private subnet. The company deploys an Amazon EC2 instance that uses an Amazon Linux Amazon Machine Image (AMI) and has the AWS Systems Manager Agent (SSM Agent) installed in the private subnet. The EC2 instance is in a security group that allows only outbound traffic. A CloudOps engineer needs to give a group of privileged administrators the ability to connect to the instance through SSH without exposing the instance to the internet. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Create an EC2 Instance Connect endpoint in the private subnet. Update the security group to allow inbound SSH traffic. Create an IAM group for privileged administrators. Assign the PowerUserAccess managed policy to the IAM group.",
      "B": "Create a Systems Manager endpoint in the private subnet. Update the security group to allow SSH traffic from the private network where the Systems Manager endpoint is connected. Create an IAM group for privileged administrators. Assign the PowerUserAccess managed policy to the IAM group.",
      "C": "Create an EC2 Instance Connect endpoint in the public subnet. Update the security group to allow SSH traffic from the private network. Create an IAM group for privileged administrators. Assign the PowerUserAccess managed policy to the IAM group.",
      "D": "Create a Systems Manager endpoint in the public subnet. Create an IAM role that has the AmazonSSMManagedInstanceCore permission for the EC2 instance. Create an IAM group for privileged administrators. Assign the AmazonEC2ReadOnlyAccess IAM policy to the IAM group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402895-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 78,
    "question": "회사가 Application Load Balancer(ALB) 뒤의 us-east-1 리전 Amazon EC2 인스턴스에서 웹 기반 애플리케이션을 실행합니다. 전 세계 사용자가 애플리케이션에 접근합니다. 북미 지역 외부의 사용자는 높은 지연 시간과 일관되지 않은 애플리케이션 성능을 보고합니다. 회사는 모든 글로벌 사용자에 대한 지연 시간과 애플리케이션 성능을 개선해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "ALB 앞에 AWS Global Accelerator를 사용합니다.",
      "B": "ALB 앞에 Network Load Balancer(NLB)를 배포합니다.",
      "C": "ALB를 Network Load Balancer(NLB)로 교체합니다.",
      "D": "지연 시간 임계값을 기반으로 AWS 리전 간에 장애 조치하도록 Amazon Route 53 상태 확인을 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Global Accelerator — Anycast IP + 엣지 로케이션을 통한 글로벌 성능 최적화\n▸ Latency Reduction — 전 세계 사용자 연결 최적화\n▸ Single Region Limitation — 단일 리전 배포의 성능 한계\n\n【정답 포인트】\n▸ \"글로벌 지연 + 단일 리전\" → AWS Global Accelerator는 AWS 글로벌 네트워크를 활용하여 지연 시간을 최소화합니다. 엣지 로케이션에서 가장 가까운 경로를 선택하여 모든 지역 사용자에게 최적 성능을 제공합니다.\n\n【오답 체크】\n(B) NLB는 프로토콜/처리량 최적화(L4)이며, 지역 간 성능 최적화 기능이 없습니다. 75자\n(C) ALB → NLB 교체는 로드 밸런서 타입만 변경될 뿐, 글로벌 지연 개선에 효과 없습니다. 75자\n(D) Route 53은 DNS 기반 리전 간 장애 조치이며, 단일 리전 내 성능 개선에는 도움이 안 됩니다. 80자\n\n【시험 포인트】\n▸ \"글로벌 사용자 + 지연\" → Global Accelerator 필수\n▸ \"단일 리전\" = Global Accelerator/CloudFront 검토",
    "en_q": "A company runs a web-based application on Amazon EC2 instances behind an Application Load Balancer (ALB) in the us-east-1 Region. Users from around the world access the application. Users from outside North America report high latency and inconsistent application performance. The company must improve latency and application performance for all global users. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Use AWS Global Accelerator in front of the ALB.",
      "B": "Deploy a Network Load Balancer (NLB) in front of the ALB.",
      "C": "Replace the ALB with a Network Load Balancer (NLB).",
      "D": "Configure Amazon Route 53 health checks to failover between AWS Regions based on latency thresholds."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402896-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 80,
    "question": "CloudOps 엔지니어는 여러 AWS 계정에서 AWS 리소스에 일관된 태그를 지정해야 합니다. 회사는 AWS Organizations의 조직을 사용하여 계정을 중앙 집중식으로 관리합니다. 회사는 비용 할당 태그를 구현하여 각 비즈니스 단위에 할당된 비용을 정확하게 추적하고자 합니다. 이 요구사항을 LEAST 운영 오버헤드로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Organizations 태그 정책을 사용하여 모든 리소스에 필수 태깅을 적용합니다. AWS Billing and Cost Management 콘솔에서 비용 할당 태그를 활성화합니다.",
      "B": "AWS CloudTrail 이벤트를 구성하여 AWS Lambda 함수를 호출하여 태그가 없는 리소스를 감지하고 미리 정의된 규칙에 따라 자동으로 태그를 할당합니다.",
      "C": "AWS Config를 사용하여 태깅 준수를 평가합니다. AWS Budgets를 사용하여 비용 할당 태그를 적용합니다.",
      "D": "AWS Service Catalog를 사용하여 미리 태그가 지정된 리소스만 프로비저닝합니다. AWS Trusted Advisor를 사용하여 조직 전체에서 태깅을 적용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Organizations Tag Policies — 중앙 집중식 태그 정책 관리\n▸ Mandatory Tagging — 리소스 생성 시 필수 태그 적용\n▸ Cost Allocation Tags — 비용 추적용 태그\n\n【정답 포인트】\n▸ \"일관된 태깅 + 운영 오버헤드 최소\" → Organizations 태그 정책은 조직 전체에 자동으로 태깅 규칙을 적용하므로, 각 계정별 수동 관리가 불필요합니다. 리소스 생성 시점부터 정책을 강제하여 규정 위반을 방지합니다.\n\n【오답 체크】\n(B) Lambda 함수로 사후 감지 및 태깅하는 방식은 수동 개입, 지연, 모니터링 오버헤드가 발생합니다. 85자\n(C) Config는 준수 평가만 하며, 태그 적용을 강제하지 않습니다. Budgets도 적용 기능이 아닙니다. 80자\n(D) Service Catalog는 신규 프로비저닝만 커버하며, 기존 리소스 태깅 문제를 해결하지 못합니다. 75자\n\n【시험 포인트】\n▸ Organizations = 중앙 정책 관리\n▸ \"자동화 + 의무화\" → Organizations 정책 선택",
    "en_q": "A CloudOps engineer needs to ensure that AWS resources across multiple AWS accounts are tagged consistently. The company uses an organization in AWS Organizations to centrally manage the accounts. The company wants to implement cost allocation tags to accurately track the costs that are allocated to each business unit. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Organizations tag policies to enforce mandatory tagging on all resources. Enable cost allocation tags in the AWS Billing and Cost Management console.",
      "B": "Configure AWS CloudTrail events to invoke an AWS Lambda function to detect untagged resources and to automatically assign tags based on predefined rules.",
      "C": "Use AWS Config to evaluate tagging compliance. Use AWS Budgets to apply tags for cost allocation.",
      "D": "Use AWS Service Catalog to provision only pre-tagged resources. Use AWS Trusted Advisor to enforce tagging across the organization."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402897-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 81,
    "question": "회사에는 Ubuntu 운영 체제(OS)를 실행하는 여러 Amazon EC2 인스턴스가 있습니다. 회사는 OS를 정기적으로 패치해야 합니다. CloudOps 엔지니어는 매주 수동으로 패치를 설치합니다. 회사는 지속적으로 Ubuntu를 실행하는 새 EC2 인스턴스를 추가합니다. CloudOps 엔지니어는 패칭 프로세스를 자동화해야 합니다. 이 요구사항을 MOST 운영 효율적인 방식으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Lambda 함수를 생성하여 SSH를 사용하여 EC2 인스턴스에 연결하고 패치를 설치합니다. Lambda 함수를 구성하여 매주 실행합니다.",
      "B": "EC2 인스턴스에 AWS Systems Manager Agent(SSM Agent)를 설치합니다. Systems Manager Patch Manager를 구성하여 매주 인스턴스에 패치를 설치합니다.",
      "C": "AWS Systems Manager Inventory를 사용하여 패치되지 않은 EC2 인스턴스를 식별하고 OS 패치를 설치합니다.",
      "D": "Amazon EventBridge 규칙을 생성하여 cron 표현식을 사용하여 매주 패치를 설치합니다. EventBridge 규칙을 구성하여 EC2 인스턴스를 대상으로 합니다. 대상 인스턴스에서 OS 업데이트를 실행하도록 작업을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Systems Manager Patch Manager — 패치 관리 자동화 서비스\n▸ SSM Agent — EC2에서 Systems Manager 기능 활성화\n▸ Automated Patching — 운영 오버헤드 최소화\n\n【정답 포인트】\n▸ \"정기 패칭 + 자동화 + 운영 효율\" → Systems Manager Patch Manager는 Linux 패치 자동 적용, 재부팅 스케줄링, 패치 규정 준수 추적을 제공합니다. SSM Agent 설치 후 AWS 콘솔에서 정책을 지정하면 모든 인스턴스에 자동 적용됩니다. 새 인스턴스도 자동으로 정책 대상에 포함됩니다.\n\n【오답 체크】\n(A) Lambda + SSH는 관리 복잡성이 높고, 네트워크 접근/인증 오버헤드가 발생합니다. 85자\n(C) Inventory는 인벤토리 수집만 하며, 패치 자동 설치 기능이 없습니다. 수동 개입 필요합니다. 80자\n(D) EventBridge는 이벤트 라우팅 서비스이며, 패치 관리 기능(스케줄, 규정 준수, 자동 재부팅)이 없습니다. 80자\n\n【시험 포인트】\n▸ \"패치 관리\" = Patch Manager 필수\n▸ Systems Manager = EC2 운영 관리 통합 플랫폼",
    "en_q": "A company has multiple Amazon EC2 instances that run the Ubuntu operating system (OS). The company must patch the OS regularly. A CloudOps engineer installs patches manually every week. The company adds new EC2 instances that run Ubuntu continuously. The CloudOps engineer needs to automate the patching process. Which solution will meet this requirement in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Create an AWS Lambda function to connect to the EC2 instances by using SSH and to install the patches. Configure the Lambda function to run every week.",
      "B": "Install the AWS Systems Manager Agent (SSM Agent) on the EC2 instances. Configure Systems Manager Patch Manager to install patches on the instances every week.",
      "C": "Use AWS Systems Manager Inventory to identify unpatched EC2 instances and to install OS patches.",
      "D": "Create an Amazon EventBridge rule that has a cron expression to install the patches every week. Configure the EventBridge rule to target the EC2 instances. Configure an action to run OS updates on the targeted instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402898-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 82,
    "question": "글로벌 회사는 us-east-1 리전에서 중요한 기본 워크로드를 실행합니다. 회사는 워크로드 장애 시 다운타임 최소화로 비즈니스 연속성을 보장하고 싶습니다. 회사는 워크로드를 두 번째 AWS 리전으로 복제하려고 합니다. CloudOps 엔지니어는 10분 미만의 복구 시간 목표(RTO)와 0인 복구 지점 목표(RPO)를 달성하여 서비스 수준 계약을 충족해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "실시간 데이터 복제를 제공하는 파일럿 라이트 아키텍처를 구현합니다. 두 번째 리전에 Amazon Route 53 상태 확인 및 자동 DNS 장애 조치를 구성합니다.",
      "B": "두 번째 리전의 정기 데이터 복제를 제공하는 웜 스탠바이 아키텍처를 구현합니다. Amazon Route 53 상태 확인 및 자동 DNS 장애 조치를 구성합니다.",
      "C": "두 리전에 걸친 실시간 데이터 복제를 제공하는 액티브-액티브 아키텍처를 구현합니다. Amazon Route 53 상태 확인 및 가중 라우팅 정책을 사용합니다.",
      "D": "데이터의 정기 백업을 생성하고 두 번째 리전의 S3 버킷에 저장하는 사용자 지정 스크립트를 구현합니다. 워크로드 장애 시 백업을 사용하여 두 번째 리전에서 애플리케이션을 시작합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ RTO (Recovery Time Objective) — 10분 이내\n▸ RPO (Recovery Point Objective) — 0 (데이터 손실 없음)\n▸ Active-Active Architecture — 양쪽 리전에서 동시 운영\n▸ Real-time Replication — 실시간 데이터 동기화\n\n【정답 포인트】\n▸ \"RTO < 10분 + RPO = 0\" → 액티브-액티브 아키텍처만이 두 조건을 동시에 충족합니다. 양쪽 리전이 동시에 운영되므로 장애 시 즉시 다른 리전으로 트래픽 전환 가능(RTO 최소화), 실시간 데이터 복제로 데이터 손실 방지(RPO 0)합니다.\n\n【오답 체크】\n(A) 파일럿 라이트는 실시간 복제하지만, 리전 2에 리소스가 최소한이라 시작 시간(RTO)이 10분 초과합니다. 85자\n(B) 웜 스탠바이는 정기 복제(시간 단위)로 RPO > 0이며, 10분 이내 RTO 달성이 어렵습니다. 80자\n(D) 정기 백업은 RPO가 크고(보통 시간 단위), 복구 시 애플리케이션 시작 시간이 10분 초과합니다. 80자\n\n【시험 포인트】\n▸ RTO < 10분 + RPO = 0 → Active-Active 유일\n▸ Disaster Recovery 아키텍처 구분 필수",
    "en_q": "A global company runs a critical primary workload in the us-east-1 Region. The company wants to ensure business continuity with minimal downtime in case of a workload failure. The company wants to replicate the workload to a second AWS Region. A CloudOps engineer needs a solution that achieves a recovery time objective (RTO) of less than 10 minutes and a zero recovery point objective (RPO) to meet service level agreements. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Implement a pilot light architecture that provides real-time data replication in the second Region. Configure Amazon Route 53 health checks and automated DNS failover.",
      "B": "Implement a warm standby architecture that provides regular data replication in a second Region. Configure Amazon Route 53 health checks and automated DNS failover.",
      "C": "Implement an active-active architecture that provides real-time data replication across two Regions. Use Amazon Route 53 health checks and a weighted routing policy.",
      "D": "Implement a custom script to generate a regular backup of the data and store it in an S3 bucket that is in a second Region. Use the backup to launch the application in the second Region in the event of a workload failure."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402899-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 83,
    "question": "CloudOps 엔지니어는 Amazon Elastic Kubernetes Service(Amazon EKS)에서 실행되는 공개 웹사이트의 특정 메트릭 관측 가능성을 구성하고 싶습니다. CloudOps 엔지니어는 지연 시간, 트래픽, 오류 및 포화도 메트릭을 관찰하고 싶습니다. CloudOps 엔지니어는 서비스 수준 목표(SLO)를 정의하고 서비스 수준 지표(SLI)를 모니터링하고 싶습니다. CloudOps 엔지니어는 또한 메트릭, 로그 및 추적을 상관관계 지어 더 빠른 문제 해결 시간을 지원하고 싶습니다. 이 요구사항을 LEAST 운영 노력으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon CloudWatch Application Signals를 사용하여 EKS 워크로드에 대한 지정된 메트릭을 자동으로 수집하고 모니터링합니다.",
      "B": "AWS Distro for OpenTelemetry를 웹사이트에 구성하여 메트릭을 생성합니다. Amazon Managed Service for Prometheus를 사용하여 지정된 메트릭을 수집합니다. Amazon Managed Grafana를 사용하여 메트릭을 시각화합니다.",
      "C": "Amazon CloudWatch RUM 및 CloudWatch Synthetics 카나리를 구성하여 EKS 워크로드에 대한 지정된 메트릭을 자동으로 수집하고 모니터링합니다.",
      "D": "Amazon CloudWatch Application Insights를 구성하여 일반적인 애플리케이션 성능 문제 및 이상을 감지하고 EKS 워크로드에 대한 지정된 메트릭을 모니터링합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudWatch Application Signals — SLO/SLI 자동 수집 및 모니터링\n▸ Latency, Traffic, Errors, Saturation (LTES) — Golden Signal 메트릭\n▸ Operational Effort Minimization — 자동 측정, 낮은 오버헤드\n\n【정답 포인트】\n▸ \"SLO/SLI + 지표 상관관계 + 최소 운영 노력\" → CloudWatch Application Signals는 EKS에 자동으로 배포되어 LTES 메트릭, SLO/SLI를 즉시 수집합니다. OpenTelemetry 복잡성 없이, 메트릭/로그/추적 통합 제공으로 최소 운영 노력입니다.\n\n【오답 체크】\n(B) OpenTelemetry + Prometheus + Grafana는 수동 구성이 복잡하고, 통합 작업이 필요하여 운영 오버헤드가 높습니다. 85자\n(C) RUM(사용자 경험) + Synthetics(합성 모니터링)은 관측 가능성 완성도가 낮고, SLO/SLI 자동 계산 기능이 없습니다. 80자\n(D) Application Insights는 이상 탐지에 중점이며, SLO/SLI 정의 및 상관관계 분석이 부족합니다. 75자\n\n【시험 포인트】\n▸ \"SLO + SLI + LTES\" → Application Signals\n▸ \"최소 노력\" = 기본 제공 자동화",
    "en_q": "A CloudOps engineer wants to configure observability of specific metrics for a public website that runs on Amazon Elastic Kubernetes Service (Amazon EKS). The CloudOps engineer wants to observe latency, traffic, errors, and saturation metrics. The CloudOps engineer wants to define service level objectives (SLOs) and to monitor service level indicators (SLIs). The CloudOps engineer also wants to correlate metrics, logs, and traces to support faster time to issue resolution. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Use Amazon CloudWatch Application Signals to automatically collect and monitor the specified metrics for the EKS workloads.",
      "B": "Configure AWS Distro for OpenTelemetry for the website to generate metrics. Use Amazon Managed Service for Prometheus to collect the specified metrics. Use Amazon Managed Grafana to visualize metrics.",
      "C": "Configure Amazon CloudWatch RUM and CloudWatch Synthetics canaries to automatically collect and monitor the specified metrics for the EKS workloads.",
      "D": "Configure Amazon CloudWatch Application Insights to detect common application performance problems and anomalies and to monitor the specified metrics for the EKS workloads."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402900-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 84,
    "question": "CloudOps 엔지니어는 비용을 최적화하기 위해 Amazon RDS 인스턴스에 대한 자동 백업을 비활성화해야 합니다. CloudOps 엔지니어가 백업을 비활성화하려고 할 때, CloudOps 엔지니어는 보존 기간이 1~35 사이여야 한다는 오류 메시지를 받습니다. 이 문제의 가능한 원인은 무엇입니까?",
    "options": {
      "A": "RDS 인스턴스는 백업 보존 기간을 변경할 권한이 불충분합니다.",
      "B": "RDS 인스턴스에 대해 읽기 복제본이 구성되어 있습니다.",
      "C": "RDS 인스턴스는 기본 백업 창을 사용하고 있습니다.",
      "D": "RDS 인스턴스는 Multi-AZ 배포의 일부입니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ RDS Automated Backup — 자동 백업 기능\n▸ Backup Retention Period — 1~35일 범위 제한\n▸ Multi-AZ Deployment — 다중 가용 영역 배포\n▸ Backup Disable Restriction — 특정 구성에서 비활성화 불가\n\n【정답 포인트】\n▸ \"보존 기간 1~35 제한\" → Multi-AZ 배포 중인 RDS 인스턴스는 자동 백업을 완전히 비활성화할 수 없습니다. AWS는 장애 복구 및 자동 장애 조치 지원을 위해 백업을 의무화합니다. 최소 보존 기간(1일)으로 설정만 가능합니다.\n\n【오답 체크】\n(A) 권한 부족 문제라면 '권한 거부' 메시지가 나올 것이고, '보존 기간' 제한 메시지는 아닙니다. 75자\n(B) 읽기 복제본 구성도 백업 보존 기간 강제를 유발하지만, Multi-AZ만큼 엄격하지는 않습니다. 70자\n(C) 백업 창(Backup Window)은 시간 설정일 뿐, 비활성화와 무관합니다. 65자\n\n【시험 포인트】\n▸ Multi-AZ = 자동 백업 비활성화 불가\n▸ \"보존 기간 1~35\" = Multi-AZ 힌트",
    "en_q": "A CloudOps engineer needs to disable automatic backups for an Amazon RDS instance to optimize costs. When the CloudOps engineer attempts to disable the backups, the CloudOps engineer receives an error message that states the retention period must be between 1 and 35. What is the likely cause of this issue?",
    "en_opts": {
      "A": "The RDS instance has insufficient permissions to change the backup retention period.",
      "B": "Read replicas are configured for the RDS instance.",
      "C": "The RDS instance is using the default backup window.",
      "D": "The RDS instance is part of a Multi-AZ deployment."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402901-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  }
];
