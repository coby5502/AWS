window.SOA_QUESTIONS = [
  {
    "id": 1,
    "question": "CloudOps 엔지니어가 다음 AWS CloudFormation 템플릿을 검토하고 있습니다. 스택 생성이 실패하는 이유는 무엇입니까?",
    "options": {
      "A": "CloudFormation 템플릿의 Outputs 섹션이 생략되었습니다.",
      "B": "CloudFormation 템플릿의 Parameters 섹션이 생략되었습니다.",
      "C": "PrivateDnsName은 CloudFormation 템플릿에서 설정될 수 없습니다.",
      "D": "VPC가 CloudFormation 템플릿에 지정되지 않았습니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ PrivateDnsName — EC2 인스턴스의 읽기 전용 속성으로, CloudFormation에서 직접 설정할 수 없는 속성\n▸ CloudFormation Property — 사용자가 설정 가능한 리소스 속성만 템플릿에서 명시 가능\n\n【정답 포인트】\n▸ PrivateDnsName은 인스턴스가 VPC에 시작된 후 자동으로 할당되는 읽기 전용(Read-only) 속성입니다.\n▸ CloudFormation 템플릿에서는 설정 가능한(Writable) 속성만 지정할 수 있으며, 읽기 전용 속성을 명시하려고 하면 스택 생성 실패가 발생합니다.\n▸ CloudFormation이 PrivateDnsName을 속성으로 설정하려 하면 \"AWS::EC2::Instance does not support property PrivateDnsName\" 오류 발생합니다.\n\n【오답 체크】\n(A) Outputs 섹션은 선택사항(Optional)으로, 스택 생성을 위해 필수가 아닙니다.\n(B) Parameters 섹션도 선택사항으로, 스택 생성은 기본값으로 가능합니다.\n(D) VPC는 지정하지 않으면 Default VPC가 사용되므로 필수가 아닙니다.\n\n【시험 포인트】\nCloudFormation에서 읽기 전용 속성과 설정 가능한 속성을 구분하는 것이 중요합니다. AWS 공식 문서의 Resource Properties 섹션에서 명시된 속성만 사용 가능합니다.",
    "en_q": "A CloudOps engineer is examining the following AWS CloudFormation template: Why will the stack creation fail?",
    "en_opts": {
      "A": "The Outputs section of the CloudFormation template was omitted.",
      "B": "The Parameters section of the CloudFormation template was omitted.",
      "C": "The PrivateDnsName cannot be set from a CloudFormation template.",
      "D": "The VPC was not specified in the CloudFormation template."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369111-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 2,
    "question": "회사가 AWS 워크로드와 관련된 리소스에 사용자 정의 태그를 적용했습니다. 태그 적용 후 20일째, 회사는 AWS Cost Explorer 콘솔에서 태그를 사용하여 보기를 필터링할 수 없다는 것을 발견했습니다. 이 문제의 원인은 무엇입니까?",
    "options": {
      "A": "Cost Explorer에서 태그를 사용하여 보기를 필터링할 수 있으려면 최소 30일이 필요합니다.",
      "B": "회사가 비용 할당에 대한 사용자 정의 태그를 활성화하지 않았습니다.",
      "C": "회사가 AWS Cost and Usage Report를 작성하지 않았습니다.",
      "D": "회사가 AWS Budgets에서 사용 예산을 작성하지 않았습니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Cost Allocation Tags — Cost Explorer에서 사용 가능하도록 활성화된 태그\n▸ User-Defined Tags — 사용자가 수동으로 생성한 태그로, 기본적으로 비용 할당 기능이 비활성화 상태\n\n【정답 포인트】\n▸ 사용자 정의 태그는 생성 직후 Cost Explorer에서 자동으로 사용 가능한 것이 아닙니다.\n▸ AWS 계정 소유자 또는 IAM 관리자가 명시적으로 \"Activate\" 작업을 통해 각 태그를 비용 할당에 활성화해야 합니다.\n▸ Billing and Cost Management 콘솔의 \"Cost Allocation Tags\" 섹션에서 각 태그 옆의 \"Activate\" 버튼을 클릭해야 합니다.\n▸ 활성화 후 최대 24시간 내에 Cost Explorer에서 해당 태그를 사용하여 필터링할 수 있습니다.\n\n【오답 체크】\n(A) 30일이라는 기준은 없으며, 활성화 후 최대 24시간 내에 사용 가능합니다.\n(C) Cost and Usage Report는 태그 필터링의 필수 요건이 아닙니다.\n(D) AWS Budgets는 태그 활성화와 무관한 별개 서비스입니다.\n\n【시험 포인트】\nCost Management 관련 문제에서 사용자 정의 태그는 \"활성화\" 단계를 반드시 거쳐야 함을 기억해야 합니다. CloudTrail 또는 resource group tagging API와 달리, Cost Explorer는 명시적 활성화가 필수입니다.",
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
    "question": "환경은 100개의 Amazon EC2 Windows 인스턴스로 구성됩니다. Amazon CloudWatch 에이전트가 모든 EC2 인스턴스에 배포 및 실행 중이며, 로그 파일을 캡처하기 위한 기본 구성 파일이 있습니다. 이제 50개 인스턴스에 존재하는 DHCP 로그 파일을 캡처해야 합니다. 이 새로운 요구사항을 충족하는 가장 운영 효율적인 방법은 무엇입니까?",
    "options": {
      "A": "DHCP 로그를 캡처하는 추가 CloudWatch 에이전트 구성 파일을 만듭니다. AWS Systems Manager Run Command를 사용하여 append-config 옵션으로 각 EC2 인스턴스에서 CloudWatch 에이전트를 다시 시작합니다.",
      "B": "관리자 권한으로 각 EC2 인스턴스에 로그인합니다. PowerShell 스크립트를 작성하여 필요한 기본 로그 파일과 DHCP 로그 파일을 CloudWatch로 푸시합니다.",
      "C": "각 EC2 인스턴스에서 CloudWatch 에이전트 구성 파일 마법사를 실행합니다. 기본 로그 파일이 포함되어 있는지 확인하고 마법사 생성 프로세스 중에 DHCP 로그 파일을 추가합니다.",
      "D": "각 EC2 인스턴스에서 CloudWatch 에이전트 구성 파일 마법사를 실행하고 고급 상세 수준을 선택합니다. 이렇게 하면 운영 체제 로그 파일이 캡처됩니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudWatch Agent Configuration — JSON 형식의 에이전트 구성 파일로 로그, 메트릭 수집 설정 명시\n▸ append-config — 기존 구성에 새로운 구성을 병합하는 옵션 (기존 설정 유지)\n▸ Systems Manager Run Command — 여러 인스턴스에 명령 배포 자동화\n\n【정답 포인트】\n▸ 이미 100개 인스턴스에 CloudWatch 에이전트가 배포되어 기본 구성으로 실행 중입니다.\n▸ 50개 인스턴스에 DHCP 로그만 추가로 수집하려면 전체 구성을 재작성할 필요가 없습니다.\n▸ append-config 옵션을 사용하면 기존의 기본 로그 수집 설정을 유지하면서 DHCP 로그 설정을 추가할 수 있습니다.\n▸ Systems Manager Run Command를 통해 대규모 인스턴스에 대한 원격 배포를 자동화할 수 있어 수동 개입을 최소화합니다.\n\n【오답 체크】\n(B) 각 인스턴스에 수동으로 로그인하는 것은 50개 인스턴스 관리 측면에서 운영 효율성이 매우 떨어집니다.\n(C) CloudWatch 에이전트 마법사를 수동으로 실행하면 50개 인스턴스 각각에서 개별 작업이 필요하므로 확장성이 없습니다.\n(D) 고급 상세 수준은 필요한 DHCP 로그만을 선택적으로 캡처하지 못하고, 불필요한 로그도 함께 수집합니다.\n\n【시험 포인트】\nSystems Manager를 활용한 대규모 자동화 문제에서는 기존 구성 유지와 부분 업데이트 능력을 평가합니다. append-config는 CloudWatch 에이전트의 핵심 기능입니다.",
    "en_q": "An environment consists of 100 Amazon EC2 Windows instances. The Amazon CloudWatch agent is deployed and running on all EC2 instances with a baseline configuration file to capture log files. There is a new requirement to capture the DHCP log files that exist on 50 of the instances. What is the MOST operationally efficient way to meet this new requirement?",
    "en_opts": {
      "A": "Create an additional CloudWatch agent configuration file to capture the DHCP logs. Use the AWS Systems Manager Run Command to restart the CloudWatch agent on each EC2 instance with the append-config option to apply the additional configuration file.",
      "B": "Log in to each EC2 instance with administrator rights. Create a PowerShell script to push the needed baseline log files and DHCP log files to CloudWatch.",
      "C": "Run the CloudWatch agent configuration file wizard on each EC2 instance. Verify that the baseline log files are included and add the DHCP log files during the wizard creation process.",
      "D": "Run the CloudWatch agent configuration file wizard on each EC2 instance and select the advanced detail level. This will capture the operating system log files."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369114-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 4,
    "question": "회사가 Amazon S3 버킷에 백업을 저장합니다. 백업은 생성 후 최소 3개월 동안 삭제되면 안 됩니다. CloudOps 엔지니어가 이 요구사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "모든 사용자에 대해 s3:DeleteObject 작업을 거부하는 IAM 정책을 구성합니다. 객체 작성 후 3개월이 지나면 정책을 제거합니다.",
      "B": "새 S3 버킷에서 S3 Object Lock을 활성화하고 준수(compliance) 모드로 설정합니다. 3개월의 보존 기간으로 모든 백업을 새 버킷에 배치합니다.",
      "C": "기존 S3 버킷에서 S3 Versioning을 활성화합니다. 백업을 보호하기 위해 S3 Lifecycle 규칙을 구성합니다.",
      "D": "새 S3 버킷에서 S3 Object Lock을 활성화하고 거버넌스(governance) 모드로 설정합니다. 3개월의 보존 기간으로 모든 백업을 새 버킷에 배치합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 Object Lock — 객체 삭제 및 덮어쓰기를 방지하는 WORM(Write Once Read Many) 기능\n▸ Compliance Mode — 루트 사용자도 보존 기간 동안 객체를 삭제할 수 없는 강력한 보호 모드\n▸ Governance Mode — 특정 권한이 있는 사용자가 보존 기간을 단축할 수 있는 유연한 모드\n▸ Retention Period — 객체 삭제 불가능 기간의 명시적 설정\n\n【정답 포인트】\n▸ 백업이 \"최소 3개월 동안 삭제되면 안 된다\"는 것은 법적 또는 규정상 강력한 보호가 필요함을 의미합니다.\n▸ S3 Object Lock의 Compliance 모드는 보존 기간 동안 루트 사용자를 포함한 모든 사용자가 객체를 삭제할 수 없으므로 최상의 보호를 제공합니다.\n▸ Retention Period를 3개월로 설정하면 자동으로 해당 기간 후 삭제 가능해집니다.\n▸ 기존 버킷에 Object Lock을 적용할 수 없으므로 새 버킷 생성이 필수입니다.\n\n【오답 체크】\n(A) IAM 정책 기반 보호는 정책 수정으로 언제든 우회 가능하므로 규정 준수 요구사항을 충족할 수 없습니다.\n(C) Lifecycle 규칙만으로는 강제성 있는 보호를 보장할 수 없으며, 정책 변경으로 언제든 삭제 가능합니다.\n(D) Governance 모드는 권한이 있는 사용자가 보존 기간을 단축할 수 있으므로 \"최소 3개월 보호\"라는 요구사항에 부적합합니다.\n\n【시험 포인트】\nObject Lock의 두 모드 차이가 핵심입니다. Compliance Mode는 강제성 보호(규정 준수), Governance Mode는 유연한 관리(임시 보호)로 구분됩니다. \"최소 기간 보호\"는 항상 Compliance Mode를 선택해야 합니다.",
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
    "question": "회사의 CloudOps 엔지니어가 애플리케이션 컴포넌트 간의 통신을 문제해결하고 있습니다. 회사가 VPC Flow Logs를 Amazon CloudWatch Logs에 게시하도록 구성했으나, CloudWatch Logs에 로그가 없습니다. VPC Flow Logs가 CloudWatch Logs로 게시되는 것을 차단하고 있을 수 있는 것은 무엇입니까?",
    "options": {
      "A": "Flow Log용 IAM 역할에 연결된 IAM 정책에 logs:CreateLogGroup 권한이 없습니다.",
      "B": "Flow Log용 IAM 역할에 연결된 IAM 정책에 logs:CreateExportTask 권한이 없습니다.",
      "C": "VPC가 IPv6 주소로 구성되어 있습니다.",
      "D": "VPC가 AWS 계정의 다른 VPC와 피어링되어 있습니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ VPC Flow Logs — VPC의 네트워크 인터페이스로 전달되는 IP 트래픽 정보 기록\n▸ CloudWatch Logs 대상 — Flow Logs가 작성할 로그 그룹 및 스트림이 필요\n▸ IAM Role Permissions — CloudWatch Logs에 쓰기 권한 필수\n\n【정답 포인트】\n▸ VPC Flow Logs를 CloudWatch Logs에 게시하려면 해당 로그 그룹이 존재해야 합니다.\n▸ Flow Log용 IAM 역할은 최소한 logs:CreateLogGroup, logs:CreateLogStream, logs:PutLogEvents 권한을 가져야 합니다.\n▸ logs:CreateLogGroup 권한이 없으면 Flow Logs 서비스가 로그 그룹을 자동으로 생성할 수 없어 게시 실패가 발생합니다.\n▸ CloudWatch Logs에 로그가 나타나지 않는 현상은 대부분 IAM 권한 부족이 원인입니다.\n\n【오답 체크】\n(B) logs:CreateExportTask는 CloudWatch Logs 데이터를 S3로 내보낼 때 필요한 권한이며, Flow Logs 게시와는 무관합니다.\n(C) VPC Flow Logs는 IPv4와 IPv6 모두를 지원하므로 IPv6 구성은 문제가 되지 않습니다.\n(D) VPC 피어링은 VPC Flow Logs의 기능에 영향을 주지 않으며, 로그 게시와 무관합니다.\n\n【시험 포인트】\nCloudWatch Logs로의 로그 전송 문제는 거의 대부분 IAM 권한입니다. 특히 logs:CreateLogGroup은 로그 그룹이 사전 생성되지 않은 경우 Flow Log 서비스에서 자동으로 생성하기 위해 필수적입니다.",
    "en_q": "A company's CloudOps engineer is troubleshooting communication between the components of an application. The company configured VPC flow logs to be published to Amazon CloudWatch Logs. However, there are no logs in CloudWatch Logs. What could be blocking the VPC flow logs from being published to CloudWatch Logs?",
    "en_opts": {
      "A": "The IAM policy that is attached to the IAM role for the flow log is missing the logs:CreateLogGroup permission.",
      "B": "The IAM policy that is attached to the IAM role for the flow log is missing the logs:CreateExportTask permission.",
      "C": "The VPC is configured for IPv6 addresses.",
      "D": "The VPC is peered with another VPC in the AWS account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369115-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 6,
    "question": "회사가 레거시 애플리케이션을 AWS로 마이그레이션합니다. 회사가 여러 가용 영역에 걸쳐 Amazon EC2 인스턴스에서 레거시 애플리케이션을 수동으로 설치 및 구성합니다. 회사가 애플리케이션용 Application Load Balancer(ALB)를 설정했습니다. 회사가 대상 그룹 라우팅 알고리즘을 weighted random으로 설정했습니다. 애플리케이션이 세션 affinity를 요구합니다. 회사가 애플리케이션을 배포한 후 사용자들이 레거시 버전에서 없던 임의의 애플리케이션 오류를 보고합니다. 대상 그룹 상태 확인에 실패가 표시되지 않습니다. 회사가 애플리케이션 오류를 해결해야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "대상 그룹의 라우팅 알고리즘을 least outstanding requests로 설정합니다.",
      "B": "대상 그룹에 대해 이상 완화(anomaly mitigation)를 켭니다.",
      "C": "대상 그룹의 cross-zone load balancing 속성을 꺼집니다.",
      "D": "대상 그룹의 deregistration delay 속성을 증가시킵니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Session Affinity — 같은 클라이언트의 요청이 항상 같은 대상으로 라우팅되는 특성\n▸ Weighted Random — 확률 기반 균등 분산으로 세션 유지를 보장하지 않음\n▸ Least Outstanding Requests — 처리 중인 요청이 적은 대상으로 라우팅하여 세션 유지 가능\n\n【정답 포인트】\n▸ 문제의 핵심은 \"애플리케이션이 세션 affinity를 요구\"하는 반면 \"weighted random 알고리즘\"이 사용되고 있다는 모순입니다.\n▸ Weighted random은 확률 기반 분산이므로 같은 클라이언트의 요청이 서로 다른 인스턴스로 라우팅될 수 있습니다.\n▸ 세션 affinity가 필요한 경우, ALB 자체는 sticky session을 직접 지원하지 않으므로 대신 connection 레벨에서의 일관성이 있는 라우팅 알고리즘으로 변경해야 합니다.\n▸ \"least outstanding requests\"는 각 대상의 활성 연결 수를 기준으로 하므로 같은 클라이언트가 같은 대상으로 라우팅될 확률이 높아집니다.\n\n【오답 체크】\n(B) 이상 완화는 트래픽 스파이크 또는 비정상 패턴에 대한 기능이며, 세션 유지와 무관합니다.\n(C) Cross-zone load balancing은 가용 영역 간 트래픽 분산이며, 세션 affinity 문제와 직접 연관이 없습니다.\n(D) Deregistration delay는 연결 종료 대기 시간이며, 오류 원인과는 무관합니다.\n\n【시험 포인트】\nALB 라우팅 알고리즘과 세션 유지의 관계를 이해하는 것이 중요합니다. Weighted random은 \"순수 확률\"이므로 세션 유지가 불가능하며, 연결 수 기반 알고리즘(least outstanding requests)이 더 나은 세션 유지를 제공합니다.",
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
    "question": "회사가 point-in-time recovery, backtracking, automatic backup이 활성화된 Amazon Aurora MySQL DB 클러스터를 사용합니다. CloudOps 엔지니어가 지난 72시간 내의 특정 복구 지점으로 DB 클러스터를 롤백할 수 있어야 합니다. 복원은 동일한 프로덕션 DB 클러스터에서 완료되어야 합니다. 어떤 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "Aurora Replica를 생성합니다. 레플리카를 프로모트하여 주 DB 인스턴스를 대체합니다.",
      "B": "AWS Lambda 함수를 생성하여 자동 백업을 기존 DB 클러스터로 복원합니다.",
      "C": "Backtracking을 사용하여 기존 DB 클러스터를 원하는 복구 지점으로 되감습니다.",
      "D": "Point-in-time recovery를 사용하여 기존 DB 클러스터를 원하는 복구 지점으로 복원합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Backtracking — 기존 DB 클러스터를 과거의 특정 시점으로 되감으며, 인스턴스 교체 불필요\n▸ Point-in-time Recovery — 새로운 DB 클러스터를 생성하여 복원하는 방식\n▸ 72시간 제한 — Aurora 자동 백트래킹의 기본 보존 기간\n\n【정답 포인트】\n▸ 요구사항에서 \"동일한 프로덕션 DB 클러스터\"에서 복원해야 한다는 것이 핵심 키워드입니다.\n▸ Backtracking은 기존 클러스터의 데이터를 과거 상태로 되감는 in-place 작업으로, 클러스터를 유지합니다.\n▸ Point-in-time recovery는 새로운 클러스터를 생성하므로 \"동일한 프로덕션 DB 클러스터\"라는 조건을 충족할 수 없습니다.\n▸ Backtracking은 Aurora MySQL 독점 기능이며, 최대 72시간의 변경 사항을 저장합니다.\n\n【오답 체크】\n(A) Aurora Replica는 읽기 전용이므로 롤백 용도로 사용할 수 없습니다.\n(B) Lambda 함수는 자동화된 복원 메커니즘이 아니며, 복원 방식의 선택지가 될 수 없습니다.\n(D) Point-in-time recovery는 새 클러스터 생성 방식으로, \"동일한\" 클러스터라는 요구사항 위배합니다.\n\n【시험 포인트】\nBacktracking은 Aurora의 고유한 기능으로, \"in-place 롤백\"을 의미합니다. \"동일한 클러스터에서 복원\" 또는 \"가동 중단 최소화\" 요구사항이 있을 때 항상 Backtracking을 우선 선택해야 합니다.",
    "en_q": "A company is using an Amazon Aurora MySQL DB cluster that has point-in-time recovery, backtracking, and automatic backup enabled. A CloudOps engineer needs to be able to roll back the DB cluster to a specific recovery point within the previous 72 hours. Restores must be completed in the same production DB cluster. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an Aurora Replica. Promote the replica to replace the primary DB instance.",
      "B": "Create an AWS Lambda function to restore an automatic backup to the existing DB cluster.",
      "C": "Use backtracking to rewind the existing DB cluster to the desired recovery point.",
      "D": "Use point-in-time recovery to restore the existing DB cluster to the desired recovery point."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369118-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 8,
    "question": "CloudOps 엔지니어가 AWS CloudFormation 스택 생성 실패를 문제해결하고 있습니다. CloudOps 엔지니어가 문제를 파악하기 전에 스택과 그 리소스가 삭제됩니다. 향후 배포를 위해 CloudOps 엔지니어는 CloudFormation이 성공적으로 생성한 모든 리소스를 보존해야 합니다. CloudOps 엔지니어가 이 요구사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "스택 생성 중 DisableRollback 파라미터의 값을 False로 설정합니다.",
      "B": "스택 생성 중 OnFailure 파라미터의 값을 DO_NOTHING으로 설정합니다.",
      "C": "스택 생성 중 DO_NOTHING의 롤백 트리거를 가진 롤백 구성을 지정합니다.",
      "D": "스택 생성 중 OnFailure 파라미터의 값을 ROLLBACK으로 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ OnFailure Parameter — 스택 생성 실패 시 CloudFormation의 동작 지정\n▸ DO_NOTHING — 성공적으로 생성된 리소스를 유지하고 스택 생성 중단\n▸ ROLLBACK — 생성된 모든 리소스를 삭제하고 초기 상태로 복구\n▸ DisableRollback — 스택 업데이트 실패 시의 동작 (생성 단계와 다름)\n\n【정답 포인트】\n▸ CloudFormation 스택 생성 실패 시 \"성공적으로 생성된 리소스를 보존\"하기 위해서는 OnFailure를 DO_NOTHING으로 설정해야 합니다.\n▸ DO_NOTHING을 선택하면, 생성 중 일부 리소스가 생성되고 나중에 실패하더라도 이미 생성된 리소스는 유지됩니다.\n▸ 엔지니어는 생성된 리소스를 검토하여 문제 원인을 파악할 수 있습니다.\n▸ OnFailure는 스택 생성(create) 단계에서만 사용되는 파라미터입니다.\n\n【오답 체크】\n(A) DisableRollback은 스택 생성이 아닌 스택 업데이트(update) 실패 시 롤백을 방지하는 파라미터입니다.\n(C) 롤백 트리거가 DO_NOTHING인 구성은 존재하지 않으며, 롤백 트리거는 특정 CloudWatch 알람을 지정합니다.\n(D) ROLLBACK은 생성된 모든 리소스를 삭제하므로, \"리소스 보존\" 요구사항에 반대입니다.\n\n【시험 포인트】\nCloudFormation의 OnFailure와 DisableRollback을 혼동하면 안 됩니다. OnFailure는 \"생성 단계\" 실패, DisableRollback은 \"업데이트 단계\" 실패 시 사용됩니다.",
    "en_q": "A CloudOps engineer is troubleshooting an AWS CloudFormation stack creation that failed. Before the CloudOps engineer can identify the problem, the stack and its resources are deleted. For future deployments, the CloudOps engineer must preserve any resources that CloudFormation successfully created. What should the CloudOps engineer do to meet this requirement?",
    "en_opts": {
      "A": "Set the value of the DisableRollback parameter to False during stack creation.",
      "B": "Set the value of the OnFailure parameter to DO_NOTHING during stack creation.",
      "C": "Specify a rollback configuration that has a rollback trigger of DO_NOTHING during stack creation.",
      "D": "Set the value of the OnFailure parameter to ROLLBACK during stack creation."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369119-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 9,
    "question": "회사가 Elastic Load Balancing(ELB) 로드 밸런서 뒤의 Amazon EC2 인스턴스에서 공용 웹 애플리케이션을 실행할 계획입니다. 회사의 보안팀이 AWS Certificate Manager(ACM) 인증서를 사용하여 웹 사이트를 보호하려고 합니다. 로드 밸런서가 모든 HTTP 요청을 HTTPS로 자동 리디렉션해야 합니다. 어떤 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "포트 80에서 HTTPS 리스너 하나가 있는 Application Load Balancer를 생성합니다. 리스너 포트 80에 SSL/TLS 인증서를 연결합니다. HTTP에서 HTTPS로 요청을 리디렉션하는 규칙을 생성합니다.",
      "B": "포트 80의 HTTP 리스너 하나와 포트 443의 HTTPS 프로토콜 리스너 하나가 있는 Application Load Balancer를 생성합니다. 리스너 포트 443에 SSL/TLS 인증서를 연결합니다. 포트 80에서 포트 443으로 요청을 리디렉션하는 규칙을 생성합니다.",
      "C": "포트 80과 포트 443의 TCP 리스너 두 개가 있는 Application Load Balancer를 생성합니다. 리스너 포트 443에 SSL/TLS 인증서를 연결합니다. 포트 80에서 포트 443으로 요청을 리디렉션하는 규칙을 생성합니다.",
      "D": "포트 80과 포트 443의 TCP 리스너 두 개가 있는 Network Load Balancer를 생성합니다. 리스너 포트 443에 SSL/TLS 인증서를 연결합니다. 포트 80에서 포트 443으로 요청을 리디렉션하는 규칙을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ HTTPS 리디렉션 — HTTP 요청을 HTTPS로 자동 변환하는 Application Load Balancer 기능\n▸ ALB Listener Rules — HTTP/HTTPS 프로토콜별로 다른 규칙을 적용\n▸ Network Load Balancer(NLB) — 레이어 4(Transport) 작동으로 HTTP 리디렉션 미지원\n\n【정답 포인트】\n▸ HTTP를 HTTPS로 리디렉션하려면 ALB가 HTTP 요청을 받을 수 있어야 하므로 HTTP 리스너(포트 80)가 필요합니다.\n▸ HTTPS 응답을 보내려면 HTTPS 리스너(포트 443)와 SSL/TLS 인증서도 필요합니다.\n▸ ALB의 HTTP 리스너는 요청을 수신 후 리디렉션 규칙(redirect action)으로 HTTPS 포트로 변환합니다.\n▸ 포트 80에 HTTPS를 바인딩할 수는 없으므로\n(A) 는 기술적으로 불가능합니다.\n▸ NLB는 레이어 4(TCP/UDP)에서만 작동하므로 HTTP/HTTPS 레이어 7 리디렉션을 지원하지 않습니다.\n\n【오답 체크】\n(A) HTTPS 프로토콜을 포트 80에 바인딩하는 것은 불가능합니다. 포트 80은 HTTP 전용입니다.\n(C) TCP 리스너는 프로토콜 기반 판별이 불가능하므로 HTTP/HTTPS 리디렉션 규칙을 설정할 수 없습니다.\n(D) NLB는 레이어 7 리디렉션을 지원하지 않으므로 HTTP → HTTPS 변환이 불가능합니다.\n\n【시험 포인트】\nALB vs NLB의 기능 차이가 핵심입니다. ALB는 레이어 7(애플리케이션)에서 작동하므로 HTTP/HTTPS 리디렉션이 가능하지만, NLB는 레이어 4(전송)만 지원합니다.",
    "en_q": "A company plans to run a public web application on Amazon EC2 instances behind an Elastic Load Balancing (ELB) load balancer. The company's security team wants to protect the website by using AWS Certificate Manager (ACM) certificates. The load balancer must automatically redirect any HTTP requests to HTTPS. Which solution will meet these requirements?",
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
    "question": "회사가 AWS Organizations를 사용하여 AWS 계정 집합을 관리합니다. 회사가 조직에서 조직 단위(OU)를 설정했습니다. 애플리케이션 OU가 다양한 애플리케이션을 지원합니다. CloudOps 엔지니어가 사용자가 CostCenter-Project 태그가 없는 Amazon EC2 인스턴스를 애플리케이션 OU의 계정에 시작하는 것을 방지해야 합니다. 제한이 애플리케이션 OU의 계정에만 적용되어야 합니다. 어떤 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "CostCenter-Project 태그가 있을 때 ec2:RunInstances 작업을 허용하는 정책이 있는 IAM 그룹을 생성합니다. 애플리케이션 계정에 액세스해야 하는 모든 IAM 사용자를 IAM 그룹에 배치합니다.",
      "B": "CostCenter-Project 태그가 없을 때 ec2:RunInstances 작업을 거부하는 서비스 제어 정책(SCP)을 생성합니다. 애플리케이션 OU에 SCP를 연결합니다.",
      "C": "CostCenter-Project 태그가 있을 때 ec2:RunInstances 작업을 허용하는 정책이 있는 IAM 역할을 생성합니다. IAM 역할을 애플리케이션 OU 계정의 IAM 사용자에게 연결합니다.",
      "D": "CostCenter-Project 태그가 없을 때 ec2:RunInstances 작업을 거부하는 서비스 제어 정책(SCP)을 생성합니다. 루트 OU에 SCP를 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Service Control Policy(SCP) — AWS Organizations에서 계정/OU의 권한 상한선을 정의하는 정책\n▸ Organizational Unit(OU) — 조직 내 계정을 그룹화하는 구조\n▸ Deny-based SCP — 특정 조건에서 작업을 차단하는 거부 기반 정책\n\n【정답 포인트】\n▸ 요구사항이 \"애플리케이션 OU의 계정에만 적용\"되어야 한다는 점이 핵심입니다.\n▸ IAM 정책은 개별 사용자/역할 수준에서만 작동하므로 조직 수준의 제한을 구현할 수 없습니다.\n▸ SCP는 조직 수준에서 OU 또는 계정 전체에 권한을 제어할 수 있습니다.\n▸ SCP를 애플리케이션 OU에만 연결하면, 해당 OU 내의 모든 계정과 사용자에 자동으로 적용됩니다.\n▸ \"태그가 없을 때 거부\"라는 조건은 SCP의 Deny 문으로 구현 가능합니다.\n\n【오답 체크】\n(A) IAM 그룹은 개별 계정 내의 사용자 권한만 제어하므로, 여러 계정에 일관되게 적용할 수 없습니다.\n(C) IAM 역할도 마찬가지로 계정 내 사용자 권한이며, 조직 수준 제어가 아닙니다.\n(D) 루트 OU에 SCP를 연결하면 전체 조직의 모든 계정에 적용되어, \"애플리케이션 OU만\" 제한이라는 요구사항 위배합니다.\n\n【시험 포인트】\nSCP vs IAM 정책의 사용 범위 차이가 중요합니다. \"조직 수준의 제한\" 또는 \"특정 OU에만 적용\"이라는 요구사항은 SCP의 영역입니다. 또한 SCP를 적용할 때는 반드시 해당 OU를 명확히 지정해야 합니다.",
    "en_q": "A company uses AWS Organizations to manage a set of AWS accounts. The company has set up organizational units (OUs) in the organization. An application OU supports various applications. A CloudOps engineer must prevent users from launching Amazon EC2 instances that do not have a CostCenter-Project tag into any account in the application OU. The restriction must apply only to accounts in the application OU. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an IAM group that has a policy that allows the ec2:RunInstances action when the CostCenter-Project tag is present. Place all IAM users who need access to the application accounts in the IAM group.",
      "B": "Create a service control policy (SCP) that denies the ec2:RunInstances action when the CostCenter-Project tag is missing. Attach the SCP to the application OU.",
      "C": "Create an IAM role that has a policy that allows the ec2:RunInstances action when the CostCenter-Project tag is present. Attach the IAM role to the IAM users that are in the application OU accounts.",
      "D": "Create a service control policy (SCP) that denies the ec2:RunInstances action when the CostCenter-Project tag is missing. Attach the SCP to the root OU."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369338-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 11,
    "question": "회사가 300개 이상의 Linux 기반 인스턴스에서 비즈니스 애플리케이션을 실행합니다. 각 인스턴스에는 AWS Systems Manager Agent(SSM Agent)가 설치되어 있습니다. 회사는 향후 인스턴스 수가 증가할 것으로 예상합니다. 모든 비즈니스 애플리케이션 인스턴스는 동일한 사용자 정의 태그를 가집니다. CloudOps 엔지니어가 모든 비즈니스 애플리케이션 인스턴스에서 명령을 실행하여 프라이빗 리포지토리에서 패키지를 다운로드하고 설치하려고 합니다. 리포지토리를 압도하지 않도록 하기 위해 CloudOps 엔지니어는 한 번에 최대 30개의 다운로드가 발생하도록 해야 합니다. 어떤 솔루션이 이 요구사항을 가장 운영 효율적으로 충족합니까?",
    "options": {
      "A": "보조 태그를 사용하여 30개 인스턴스씩 10개의 배치를 생성합니다. Systems Manager Run Command 문서를 사용하여 패키지를 다운로드하고 설치합니다. Run Command 문서의 일부로 보조 태그를 사용하여 대상을 지정합니다. 각 배치를 한 번씩 실행합니다.",
      "B": "AWS Lambda 함수를 사용하여 사용자 정의 태그를 가진 인스턴스 ID 목록을 로드하는 Systems Manager Run Command 문서를 자동으로 실행합니다. Lambda 함수의 예약된 동시성을 30으로 설정합니다.",
      "C": "패키지를 다운로드하고 설치하는 Systems Manager Run Command 문서를 사용합니다. 동시성을 30으로 설정하는 속도 제어를 사용합니다. Run Command 문서의 일부로 사용자 정의 태그를 사용하여 대상을 지정합니다.",
      "D": "AWS Step Functions의 병렬 워크플로우 상태를 사용하여 사용자 정의 태그를 가진 인스턴스 ID 목록을 읽는 Systems Manager Run Command 문서를 자동으로 실행합니다. 병렬 상태의 개수를 30으로 설정합니다. Step Functions 워크플로우를 10번 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Rate Control(속도 제어) — Systems Manager Run Command에서 동시 실행 인스턴스 수를 제한하는 기능\n▸ Concurrency — 동시에 실행할 수 있는 최대 작업 수\n▸ Target Tagging — 태그를 기반으로 명령 대상 인스턴스를 자동 선택\n\n【정답 포인트】\n▸ \"가장 운영 효율적\"이라는 조건에서 가장 단순하고 자동화된 방식을 찾아야 합니다.\n▸ Systems Manager Run Command는 \"Rate Control\"(속도 제어) 기능으로 동시 실행 수를 제한할 수 있습니다.\n▸ Run Command는 사용자 정의 태그를 기반으로 대상을 자동으로 선택하므로, 기존/미래의 모든 인스턴스에 적용 가능합니다.\n▸ Rate Control을 concurrency=30으로 설정하면 한 번에 정확히 30개 인스턴스만 명령을 실행합니다.\n▸ 나머지 인스턴스들은 자동으로 큐에 들어가 순차 처리되므로 수동 개입이 필요 없습니다.\n\n【오답 체크】\n(A) 보조 태그를 수동으로 관리하고 배치를 여러 번 실행해야 하므로 확장성과 운영 효율성이 떨어집니다.\n(B) Lambda의 예약된 동시성(reserved concurrency)은 Lambda 함수 실행 수를 제한할 뿐, Run Command의 실제 실행 속도를 제어하지 못합니다.\n(D) Step Functions는 불필요한 오버헤드이며, 워크플로우를 10번 수동 실행해야 하므로 자동화 부족합니다.\n\n【시험 포인트】\nSystems Manager Run Command의 \"Rate Control\" 기능은 대규모 인스턴스에 대한 동시 실행 제어의 표준 방식입니다. 태그 기반 자동 대상 선택과 결합하면 가장 효율적인 솔루션이 됩니다.",
    "en_q": "A company runs a business application on more than 300 Linux-based instances. Each instance has the AWS Systems Manager Agent (SSM Agent) installed. The company expects the number of instances to grow in the future. All business application instances have the same user-defined tag. A CloudOps engineer wants to run a command on all the business application instances to download and install a package from a private repository. To avoid overwhelming the repository, the CloudOps engineer wants to ensure that no more than 30 downloads occur at one time. Which solution will meet this requirement in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Use a secondary tag to create 10 batches of 30 instances each. Use a Systems Manager Run Command document to download and install the package. Specify the target as part of the Run Command document by using the secondary tag. Run each batch one time.",
      "B": "Use an AWS Lambda function to automatically run a Systems Manager Run Command document that reads a list of instance IDs that have the user-defined tag. Set reserved concurrency for the Lambda function to 30.",
      "C": "Use a Systems Manager Run Command document to download and install the package. Use rate control to set concurrency to 30. Specify the target by using the user-defined tag as part of the Run Command document.",
      "D": "Use a parallel workflow state in AWS Step Functions to automatically run a Systems Manager Run Command document that reads a list of instance IDs that have the user-defined tag. Set the number of parallel states to 30. Run the Step Functions workflow 10 times."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369121-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 12,
    "question": "회사가 Amazon Route 53과 복수 AWS 리전 간의 지연 시간 기반 라우팅을 사용하여 복원력을 제공합니다. 회사가 Route 53과 지연 시간 기반 라우팅을 사용하여 가장 가까운 리전으로 트래픽을 전달합니다. 각 리전 내에서 가중치 A 레코드가 복수의 가용 영역 간에 트래픽을 분산합니다. 최근 업데이트 중에 일부 가용 영역 엔드포인트가 건강하지 않게 되었습니다. Route 53이 건강하지 않은 엔드포인트로 트래픽을 계속 라우팅했습니다. 회사가 향후 이 문제를 방지해야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "최근 업데이트 중에 트래픽을 수신한 각 가중치 레코드에 대해 Route 53 상태 확인을 추가합니다.",
      "B": "업데이트 중에 트래픽이 이동해야 하는 리전의 Route 53 레코드 가중치를 증가시킵니다.",
      "C": "모든 레코드를 모든 리전에 걸쳐 균등하게 지연 시간 기반 라우팅을 사용하도록 재구성합니다.",
      "D": "지연 시간 기반 라우팅의 TTL 값을 줄여 변경 사항을 더 빠르게 감지합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Health Check(상태 확인) — Route 53이 엔드포인트의 상태를 주기적으로 검증하는 기능\n▸ Weighted Records — 가중치 기반 트래픽 분산 레코드\n▸ Failover Behavior — 건강하지 않은 엔드포인트로의 라우팅 자동 방지\n\n【정답 포인트】\n▸ Route 53이 건강하지 않은 엔드포인트로 계속 트래픽을 보낸 이유는 해당 엔드포인트의 상태를 알 수 없었기 때문입니다.\n▸ Health Check를 추가하면 Route 53이 각 엔드포인트의 실시간 상태를 모니터링할 수 있습니다.\n▸ Health Check 실패 시 Route 53은 자동으로 해당 레코드를 라우팅 결정에서 제외합니다.\n▸ 가중치 레코드에도 각각의 Health Check를 연결할 수 있으며, 이는 Route 53의 표준 모범 사례입니다.\n\n【오답 체크】\n(B) 가중치 증감은 정상 엔드포인트의 트래픽 분산 비율을 조정할 뿐, 건강하지 않은 엔드포인트의 문제를 감지하지 못합니다.\n(C) 라우팅 정책 재구성은 근본적인 상태 감시 문제를 해결하지 못합니다.\n(D) TTL은 DNS 캐싱 시간이며, 엔드포인트 상태 변화와는 다른 개념입니다. TTL 감소는 Route 53의 상태 감지 메커니즘이 아닙니다.\n\n【시험 포인트】\nRoute 53의 라우팅 정책(weighted, latency, failover 등)은 각각 Health Check와 함께 작동합니다. \"엔드포인트 상태 자동 감지\"가 필요하면 항상 Health Check 추가를 고려해야 합니다.",
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
    "question": "회사가 AWS 계정에서 시작된 모든 Amazon EC2 Windows 인스턴스에 타사 에이전트가 설치되어 있어야 합니다. 회사가 AWS Systems Manager를 사용하고, Windows 인스턴스에 적절한 태그가 지정됩니다. 회사가 업데이트를 사용할 수 있게 되면 타사 에이전트에 대한 정기적인 업데이트를 배포해야 합니다. 가장 적은 운영 노력으로 이러한 요구사항을 충족하는 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "타사 에이전트에 대한 Systems Manager Distributor 패키지를 생성합니다.",
      "B": "Windows의 태그 값을 포함하는 Systems Manager OpsItem을 생성합니다. Systems Manager 인벤토리를 OpsItem에 연결합니다.",
      "C": "AWS Lambda 함수를 생성합니다. 각 인스턴스에 로그인하고 필요에 따라 타사 에이전트를 설치 또는 업데이트하도록 Lambda 함수를 프로그래밍합니다.",
      "D": "AWS-RunRemoteScript 문서를 실행하는 Systems Manager State Manager 연결을 생성합니다. 타사 에이전트 패키지의 세부 정보를 채웁니다.",
      "E": "AWS-ConfigureAWSPackage 문서를 실행하는 Systems Manager State Manager 연결을 생성합니다. 타사 에이전트 패키지의 세부 정보를 채웁니다. Windows의 적절한 태그 값을 기반으로 인스턴스 태그를 지정합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ Systems Manager Distributor — 패키지의 배포 및 관리를 위한 중앙 저장소 및 배포 도구\n▸ State Manager — 정기적인 또는 예약된 작업 실행을 위한 자동화 서비스\n▸ AWS-ConfigureAWSPackage — Distributor 패키지를 설치 및 업데이트하는 SSM 문서\n\n【정답 포인트】\n▸ 정기적인 업데이트 배포를 자동화하려면 두 가지 구성 요소가 필요합니다: 패키지 저장소(Distributor)와 정기 실행 엔진(State Manager).\n▸ Step A: Distributor 패키지는 타사 에이전트의 버전 관리와 중앙 배포를 담당합니다.\n▸ Step E: State Manager + AWS-ConfigureAWSPackage를 조합하면, 선택된 인스턴스에 정기적으로 최신 패키지를 설치합니다.\n▸ 태그 기반 인스턴스 선택으로 확장성을 보장합니다.\n▸ AWS-ConfigureAWSPackage는 Distributor 패키지 설치의 표준 방식입니다.\n\n【오답 체크】\n(B) OpsItem과 Inventory는 현황 추적 목적이며, 자동 배포와는 무관합니다.\n(C) Lambda를 사용한 수동 로그인은 운영 오버헤드가 크며, SSM의 자동화 기능을 무시합니다.\n(D) AWS-RunRemoteScript는 일반적인 스크립트 실행 문서이며, Distributor 패키지와의 통합이 직접적이지 않습니다.\n\n【시험 포인트】\nSystems Manager의 세 가지 핵심 기능: Distributor(패키지 중앙 관리) + State Manager(정기 실행) + AWS-ConfigureAWSPackage(패키지 설치 자동화)의 조합은 대규모 소프트웨어 배포의 표준 패턴입니다.",
    "en_q": "A company must ensure that all Amazon EC2 Windows instances that are launched in an AWS account have a third-party agent installed. The company uses AWS Systems Manager, and the Windows instances are tagged appropriately. The company must deploy periodic updates to the third-party agent when the updates become available. Which combination of steps will meet these requirements with the LEAST operational effort? (Choose two.)",
    "en_opts": {
      "A": "Create a Systems Manager Distributor package for the third-party agent.",
      "B": "Create a Systems Manager OpsItem that includes the tag value for Windows. Attach the Systems Manager inventory to the OpsItem.",
      "C": "Create an AWS Lambda function. Program the Lambda function to log in to each instance and to install or update the third-party agent as needed.",
      "D": "Create a Systems Manager State Manager association to run the AWS-RunRemoteScript document. Populate the details of the third-party agent package.",
      "E": "Create a Systems Manager State Manager association to run the AWS-ConfigureAWSPackage document. Populate the details of the third-party agent package. Specify instance tags based on the appropriate tag value for Windows."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369123-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 14,
    "question": "회사가 두 AWS 리전의 사용자 정의 Amazon Machine Images(AMI)에서 Amazon EC2 인스턴스를 배포했습니다. 회사가 모든 인스턴스를 AWS Systems Manager에 등록했습니다. 회사가 일부 인스턴스의 운영 체제에 중대한 zero-day 익스플로잇이 있음을 발견했습니다. 그러나 회사는 영향을 받는 인스턴스 수를 알 수 없습니다. CloudOps 엔지니어가 영향을 받는 EC2 인스턴스에 대해 운영 체제 패치를 배포하는 솔루션을 구현해야 합니다. 어떤 솔루션이 이 요구사항을 가장 적은 운영 오버헤드로 충족합니까?",
    "options": {
      "A": "Systems Manager Patch Manager에서 패치 기준선을 정의합니다. Patch Manager 스캔을 사용하여 영향을 받는 인스턴스를 식별합니다. 각 리전에서 Patch Now 옵션을 사용하여 영향을 받는 인스턴스를 업데이트합니다.",
      "B": "AWS Config를 사용하여 영향을 받는 인스턴스를 식별합니다. Systems Manager Patch Manager에서 패치 기준선을 정의합니다. Patch Manager에서 Patch Now 옵션을 사용하여 영향을 받는 인스턴스를 업데이트합니다.",
      "C": "Amazon EventBridge 규칙을 생성하여 Systems Manager Compliance 이벤트에 반응합니다. 영향을 받는 인스턴스에서 패치 기준선을 실행하도록 EventBridge 규칙을 구성합니다.",
      "D": "AWS Config를 사용하여 영향을 받는 인스턴스를 식별합니다. 기존 EC2 AMI를 원하는 패치로 업데이트합니다. 새 AMI에서 인스턴스를 수동으로 시작하여 두 리전의 영향을 받는 인스턴스를 교체합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Systems Manager Patch Manager — EC2 인스턴스의 패치 적용 관리 서비스\n▸ Patch Baseline — 패치 그룹별 패치 정책 정의\n▸ Patch Scan — 현재 패치 준수 상태 평가\n▸ Patch Now — 즉시 패치 적용 시작\n\n【정답 포인트】\n▸ 요구사항은 \"영향을 받는 인스턴스\"를 식별하고 패치를 적용하는 것입니다.\n▸ Patch Manager는 이를 위해 설계된 목적 기반 서비스입니다.\n▸ 패치 기준선 정의 → 스캔 실행 → 영향받은 인스턴스 자동 식별 → Patch Now로 적용\n▸ 최소한의 단계로 원스톱 솔루션을 제공합니다.\n▸ 인스턴스 수가 알려지지 않은 경우에도 Patch Scan이 자동으로 모든 인스턴스를 평가합니다.\n\n【오답 체크】\n(B) AWS Config는 리소스 컴플라이언스 추적 서비스이며, 패치 적용 도구가 아닙니다. Config + Patch Manager는 중복적입니다.\n(C) EventBridge + Compliance는 자동화 트리거로 유용하지만, 초기 영향 인스턴스 식별에는 Patch Scan이 더 직접적입니다.\n(D) AMI 업데이트 후 수동 인스턴스 교체는 \"운영 오버헤드 최소화\" 요구사항에 맞지 않습니다. 다운타임도 발생합니다.\n\n【시험 포인트】\nPatch Manager는 \"패치 검사\"(scan)와 \"패치 적용\"(patch now) 두 핵심 기능을 제공합니다. 영향 인스턴스 수가 불명일 때는 스캔을 통해 자동으로 식별할 수 있습니다.",
    "en_q": "A company has deployed Amazon EC2 instances from custom Amazon Machine Images (AMIs) in two AWS Regions. The company registered all the instances with AWS Systems Manager. The company discovers that the operating system on some instances has a significant zero-day exploit. However, the company does not know how many instances are affected. A CloudOps engineer must implement a solution to deploy operating system patches for the affected EC2 instances. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Define a patch baseline in Systems Manager Patch Manager. Use a Patch Manager scan to identify the affected instances. Use the Patch Now option in each Region to update the affected instances.",
      "B": "Use AWS Config to identify the affected instances. Define a patch baseline in Systems Manager Patch Manager. Use the Patch Now option in Patch Manager to update the affected instances.",
      "C": "Create an Amazon EventBridge rule to react to Systems Manager Compliance events. Configure the EventBridge rule to run a patch baseline on the affected instances.",
      "D": "Use AWS Config to identify the affected instances. Update the existing EC2 AMIs with the desired patch. Manually launch instances from the new AMIs to replace the affected instances in both Regions."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369124-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 15,
    "question": "회사가 Amazon EC2 인스턴스에서 FTP 서버를 호스팅합니다. 회사의 AWS 환경에서 AWS Security Hub는 EC2 인스턴스의 보안 그룹에서 FTP 포트가 공개적으로 노출되었기 때문에 Amazon EventBridge로 EC2 인스턴스에 대한 결과를 전송합니다. CloudOps 엔지니어가 Security Hub 결과 및 유사한 노출된 포트 결과를 자동으로 해결하려고 합니다. CloudOps 엔지니어가 이벤트 주도 접근 방식을 사용하려고 합니다. 어떤 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "기존 EventBridge 이벤트를 구성하여 노출된 포트가 있는 EC2 인스턴스를 중지합니다.",
      "B": "FTP 서버의 cron 작업을 생성하여 AWS Lambda 함수를 호출합니다. 식별된 EC2 인스턴스의 보안 그룹을 수정하고 공개 액세스를 허용하는 인스턴스를 제거하도록 Lambda 함수를 구성합니다.",
      "C": "FTP 서버의 cron 작업을 생성하여 AWS Lambda 함수를 호출합니다. FTP 대신 SFTP를 사용하도록 서버를 수정하도록 Lambda 함수를 구성합니다.",
      "D": "기존 EventBridge 이벤트를 구성하여 AWS Lambda 함수를 호출합니다. 공개 액세스를 허용하는 보안 그룹 규칙을 제거하도록 함수를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ EventBridge — AWS 서비스 이벤트를 자동으로 감지하고 규칙 기반으로 작업 트리거\n▸ Security Hub Findings — 보안 문제를 EventBridge 이벤트로 게시\n▸ Event-Driven Remediation — Security Hub 이벤트를 감지하여 자동 수정\n\n【정답 포인트】\n▸ 요구사항: \"이벤트 주도 접근\" + \"자동 해결\"이 핵심입니다.\n▸ Security Hub가 FTP 포트 노출 결과를 EventBridge로 전송합니다.\n▸ EventBridge 규칙이 이 이벤트를 감지하여 Lambda 함수를 자동으로 호출합니다.\n▸ Lambda 함수는 해당 보안 그룹에서 공개 액세스(0.0.0.0/0)를 허용하는 인바운드 규칙을 제거합니다.\n▸ 이 흐름은 완전히 자동화되고 이벤트 기반입니다.\n\n【오답 체크】\n(A) EC2 인스턴스를 중지하는 것은 문제 해결이 아니며, 서비스 중단을 야기합니다.\n(B) Cron 작업은 이벤트 주도 방식이 아닙니다. \"정기적 실행\"이므로 즉시 대응이 아닙니다.\n(C) FTP에서 SFTP로 프로토콜 변경은 과도한 조치이며, 보안 그룹 규칙 제거만으로 충분합니다.\n\n【시험 포인트】\nSecurity Hub 보안 결과 자동 수정의 표준 패턴은: Security Hub Finding → EventBridge Rule → Lambda Remediation 입니다. 이는 AWS 보안 자동화의 모범 사례입니다.",
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
    "question": "회사가 여러 고성능 컴퓨팅(HPC) 가상 머신(VM)을 Amazon EC2 인스턴스로 AWS에 마이그레이션할 계획입니다. CloudOps 엔지니어가 이 배포에 대한 배치 그룹을 식별해야 합니다. 전략은 HPC VM 간의 네트워크 지연 시간을 최소화하고 네트워크 처리량을 최대화해야 합니다. CloudOps 엔지니어가 이러한 요구사항을 충족하기 위해 어떤 전략을 선택해야 합니까?",
    "options": {
      "A": "인스턴스를 한 가용 영역의 클러스터 배치 그룹에 배포합니다.",
      "B": "인스턴스를 두 가용 영역의 파티션 배치 그룹에 배포합니다.",
      "C": "인스턴스를 한 가용 영역의 파티션 배치 그룹에 배포합니다.",
      "D": "인스턴스를 두 가용 영역의 스프레드 배치 그룹에 배포합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Cluster Placement Group — 단일 AZ 내에서 인스턴스를 밀집 배치하여 최저 지연 및 최고 처리량 제공\n▸ Partition Placement Group — 여러 AZ에 파티션 단위로 분산하여 부분 장애 격리\n▸ Spread Placement Group — 여러 AZ에 인스턴스를 최대한 분산하여 개별 장애 격리\n\n【정답 포인트】\n▸ \"네트워크 지연 시간 최소화\" + \"네트워크 처리량 최대화\" 요구사항은 HPC 워크로드의 전형적 특성입니다.\n▸ Cluster Placement Group은 **단일 AZ 내에서** 인스턴스를 밀집 배치합니다.\n▸ 인스턴스 간 물리적 거리가 최소화되므로 지연 시간은 최저(sub-millisecond), 처리량은 최고(10Gbps+)입니다.\n▸ 클러스터 배치 그룹은 HPC, 빅데이터 분석, 분산 머신러닝 등 높은 네트워크 성능이 필요한 워크로드의 표준 선택입니다.\n\n【오답 체크】\n(B) \n(C) Partition Placement Group은 여러 파티션(각 파티션이 물리적으로 격리됨)에 데이터를 분산하는 구조로, HPC의 \"최저 지연\" 요구사항보다는 \"장애 격리\"에 최적화됩니다.\n(D) Spread Placement Group은 인스턴스를 최대한 떨어뜨려 배치하므로, 네트워크 처리량과 지연 시간 측면에서 HPC에 부적합합니다.\n\n【시험 포인트】\nEC2 배치 그룹의 선택은 워크로드 특성에 따라 결정됩니다. \"최저 지연 + 최고 처리량\" = Cluster, \"부분 장애 격리\" = Partition, \"개별 장애 격리\" = Spread로 기억하면 됩니다.",
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
    "question": "회사가 AWS Organizations를 사용하여 AWS 계정 집합을 관리합니다. 회사의 보안팀이 네이티브 AWS 서비스를 사용하여 Center for Internet Security(CIS) AWS Foundations Benchmark에 대해 모든 AWS 계정을 정기적으로 스캔하려고 합니다. 이러한 요구사항을 충족하는 가장 운영 효율적인 방법은 무엇입니까?",
    "options": {
      "A": "중앙 보안 계정을 AWS Security Hub 관리자 계정으로 지정합니다. Security Hub 관리자 계정에서 초대를 보내고 멤버 계정에서 초대를 수락하는 스크립트를 생성합니다. 새 계정을 생성할 때마다 스크립트를 실행합니다. CIS AWS Foundations Benchmark 스캔을 실행하도록 Security Hub를 구성합니다.",
      "B": "Amazon Inspector를 사용하여 모든 계정에 대해 CIS AWS Foundations Benchmark를 실행합니다.",
      "C": "중앙 보안 계정을 Amazon GuardDuty 관리자 계정으로 지정합니다. GuardDuty 관리자 계정에서 초대를 보내고 멤버 계정에서 초대를 수락하는 스크립트를 생성합니다. 새 계정을 생성할 때마다 스크립트를 실행합니다. CIS AWS Foundations Benchmark 스캔을 실행하도록 GuardDuty를 구성합니다.",
      "D": "AWS Security Hub 관리자 계정을 지정합니다. 조직의 새 계정이 자동으로 멤버 계정이 되도록 구성합니다. CIS AWS Foundations Benchmark 스캔을 활성화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Security Hub — 보안 상태 점검, 컴플라이언스 검증, CIS 벤치마크 평가\n▸ CIS AWS Foundations Benchmark — AWS 보안 모범 사례 점검 표준\n▸ Organizations 자동 온보딩 — 새로운 조직 계정이 자동으로 Security Hub에 등록\n\n【정답 포인트】\n▸ \"가장 운영 효율적인 방법\"은 자동화를 최대화하는 솔루션입니다.\n▸ Security Hub는 CIS Benchmark를 기본 제공하는 네이티브 AWS 서비스입니다.\n▸ Security Hub의 Organizations 자동 온보딩 기능(Step D)을 사용하면:\n  - 새 계정 생성 시 자동으로 멤버 계정이 됨\n  - 수동 초대/수락 스크립트 불필요\n  - 중앙 관리가 단순화됨\n  - 모든 계정에 일관된 정책 적용 가능\n▸ 자동화로 인한 운영 오버헤드가 최소화됩니다.\n\n【오답 체크】\n(A) 수동 스크립트 기반 초대/수락 방식은 매번 실행이 필요하므로 운영 비용이 높습니다. Organizations 자동 온보딩이 더 효율적입니다.\n(B) Amazon Inspector는 EC2, ECR, Lambda 등의 취약점 검사 도구이며, CIS AWS Foundations Benchmark(계정 수준 컴플라이언스)는 지원 대상이 아닙니다.\n(C) GuardDuty는 위협 탐지(침입, 악성 API) 서비스이며, 컴플라이언스 벤치마크 평가는 지원하지 않습니다.\n\n【시험 포인트】\nAWS Organizations와 Security Hub의 통합은 CIS 벤치마크의 중앙화된 관리를 가능하게 합니다. \"자동 온보딩\" 기능이 최신 업데이트이며, 수동 스크립트 방식보다 훨씬 운영 효율적입니다.",
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
    "question": "회사의 사용자들이 필요한 것보다 더 많은 볼륨 성능 용량을 가진 Amazon EC2 인스턴스를 배포합니다. CloudOps 엔지니어가 인스턴스와 관련된 모든 Amazon Elastic Block Store(Amazon EBS) 볼륨을 검토하고 IOPS 및 처리량을 기반으로 비용 최적화 권장사항을 만들어야 합니다. CloudOps 엔지니어가 이 요구사항을 충족하기 위해 가장 운영 효율적인 방법으로 무엇을 해야 합니까?",
    "options": {
      "A": "EC2 콘솔의 모니터링 그래프를 사용하여 EBS 볼륨의 메트릭을 봅니다. 각 볼륨의 할당된 공간에 대해 소비된 공간을 검토합니다. 사용 률이 낮은 볼륨을 식별합니다.",
      "B": "EC2 콘솔에서 EC2 인스턴스를 중지합니다. EC2 인스턴스 유형을 Amazon EBS 최적화로 변경합니다. EC2 인스턴스를 시작합니다.",
      "C": "AWS Compute Optimizer를 선택합니다. 메트릭이 수집될 충분한 시간을 허용합니다. Compute Optimizer 결과를 검토합니다.",
      "D": "EC2 인스턴스에 fio 도구를 설치하고 필요한 워크로드를 근사화하는 .cfg 파일을 생성합니다. 벤치마크 결과를 사용하여 프로비저닝된 EBS 볼륨이 가장 적절한 유형인지 판단합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Compute Optimizer — EC2 인스턴스 및 EBS 볼륨의 성능과 비용 권장사항을 제공하는 ML 기반 서비스\n▸ EBS 볼륨 분석 — IOPS, 처리량, 사용률 메트릭 기반 최적화 제안\n▸ Sizing Recommendations — 과다 프로비저닝된 리소스 축소 권장\n\n【정답 포인트】\n▸ \"IOPS 및 처리량 기반 비용 최적화 권장사항\"을 체계적으로 도출해야 합니다.\n▸ AWS Compute Optimizer는 이 목적으로 특별히 설계된 서비스입니다.\n▸ CloudWatch 메트릭을 분석하여 EBS 볼륨의 프로비저닝 vs 실제 사용량을 비교합니다.\n▸ 메트릭 수집에는 며칠이 필요하지만, 수집 후 자동으로 권장사항이 생성됩니다.\n▸ 가장 운영 효율적인 방법이며, 수동 분석이 불필요합니다.\n\n【오답 체크】\n(A) EC2 콘솔의 기본 모니터링 그래프는 IOPS/처리량 메트릭 상세 분석을 지원하지 않으며, CloudWatch 커스텀 메트릭 설정이 필요합니다.\n(B) EBS 최적화 변경은 인스턴스 유형 변경이 아니며, EBS 볼륨 타입 권장과는 무관합니다.\n(D) fio 벤치마크 도구는 수동 테스트 방식이며, 모든 인스턴스에 대해 반복 실행하기에는 운영 비용이 큽니다.\n\n【시험 포인트】\nAWS Compute Optimizer는 \"비용 최적화 권장사항\" 요구사항의 표준 도구입니다. EC2, EBS, RDS, Lambda에 대한 종합적인 추천을 ML 분석으로 제공합니다.",
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
    "question": "CloudOps 엔지니어가 회사의 현재 및 미래의 모든 Amazon S3 버킷에서 로깅이 활성화되어 있는지 확인해야 합니다. S3 버킷에서 로깅이 활성화되지 않은 경우 자동화된 프로세스가 해당 S3 버킷에 대해 로깅을 활성화해야 합니다. 어떤 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "AWS Trusted Advisor를 사용하여 로깅이 활성화되지 않은 S3 버킷을 확인합니다. 로깅이 활성화되지 않은 S3 버킷에 대해 로깅을 활성화하는 확인을 구성합니다.",
      "B": "모든 현재 및 미래의 S3 버킷이 로깅이 활성화되어 있어야 한다는 것을 요구하는 S3 버킷 정책을 구성합니다.",
      "C": "s3-bucket-logging-enabled AWS Config 관리 규칙을 사용합니다. AWS Lambda 함수를 사용하는 수정 작업을 추가하여 로깅을 활성화합니다.",
      "D": "s3-bucket-logging-enabled AWS Config 관리 규칙을 사용합니다. 로깅을 활성화하는 AWS-ConfigureS3BucketLogging AWS Systems Manager Automation 런북을 사용하는 수정 작업을 추가합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Config — 리소스 구성 변화 추적 및 컴플라이언스 검증 서비스\n▸ Managed Rule (s3-bucket-logging-enabled) — S3 로깅 활성화 여부를 자동으로 평가\n▸ Remediation Action — 컴플라이언스 위반을 자동으로 수정하는 작업\n▸ AWS Systems Manager Automation Runbook — 사전 정의된 자동화 문서\n\n【정답 포인트】\n▸ \"현재 및 미래의 모든 S3 버킷\"을 대상으로 자동 검증과 수정이 필요합니다.\n▸ AWS Config의 s3-bucket-logging-enabled 규칙은 모든 S3 버킷을 지속적으로 평가합니다.\n▸ 규칙 위반 시 자동 수정(remediation)을 구성하면, 로깅이 비활성화된 버킷을 자동으로 활성화합니다.\n▸ AWS Systems Manager Automation 런북 (AWS-ConfigureS3BucketLogging)은 AWS 공식 제공 문서로 S3 로깅 설정의 표준 방식입니다.\n▸ Config + Remediation + Automation 조합은 규정 준수 자동화의 모범 사례입니다.\n\n【오답 체크】\n(A) Trusted Advisor는 체크만 수행하며, 자동 수정 기능이 없습니다. 수동 조치가 필요합니다.\n(B) S3 버킷 정책은 요청 권한(access control)을 정의하며, 기존 버킷의 로깅 설정을 강제할 수 없습니다.\n(C) Lambda 함수를 직접 개발하는 것보다 AWS 공식 Automation 런북(AWS-ConfigureS3BucketLogging)을 사용하는 것이 표준이며 유지보수도 간편합니다.\n\n【시험 포인트】\nAWS Config의 Remediation은 두 가지 옵션을 지원합니다: (1) AWS Systems Manager Automation 런북 사용, (2) Lambda 함수 커스텀 개발. 공식 런북이 있으면 항상 그것을 선택하는 것이 모범 사례입니다.",
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
    "question": "한 회사에 수백만 명의 구독자가 있습니다. 회사의 마케팅 부서는 매주 토요일에 구독자에게 알림을 자동으로 보내는 프로세스를 자동화하려고 합니다. 회사는 이미 Amazon Simple Notification Service(SNS)를 사용하여 구독자에게 알림을 보내는 메커니즘을 보유하고 있습니다. 그러나 회사는 역사적으로 구독자에게 알림을 수동으로 보냈습니다. CloudOps 엔지니어는 일정에 따라 자동으로 알림을 보내는 솔루션이 필요합니다. 다음 중 가장 운영상 효율적인 방식으로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "새 Amazon EC2 인스턴스를 시작합니다. cron 작업을 구성하여 AWS SDK를 사용하여 매주 토요일에 SNS 알림을 구독자에게 보냅니다.",
      "B": "Amazon EventBridge에서 매주 토요일마다 트리거하는 규칙을 만듭니다. SNS 주제에 알림을 발행하도록 규칙을 구성합니다.",
      "C": "매주 토요일에 구독자에게 알림을 보내는 메시지 팬아웃에 SNS 구독을 만듭니다.",
      "D": "AWS Step Functions 스케줄링 기능을 사용하여 매주 토요일마다 Step Functions 단계를 실행합니다. SNS 주제에 메시지를 발행하도록 단계를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ EventBridge — 완전 관리형 이벤트 라우팅 서비스, 일정 기반 트리거 지원\n▸ Cron 표현식 — 주기적 실행 정의 (매주 토요일)\n\n【정답 포인트】\n▸ EventBridge 규칙 → 가장 운영상 효율적: 서버리스, 관리 오버헤드 없음\n▸ 인프라 미관리 → 토요일 스케줄링만 구성하면 완벽 자동화\n▸ SNS 통합 → 기존 알림 메커니즘과 직접 연동\n\n【오답 체크】\n(A) EC2 인스턴스: cron 작업 실행 위해 EC2 항상 실행 필요 → 비용 증가, 관리 필요\n(C) SNS 구독: 메시지 팬아웃은 알림 분배이지, 일정 기반 트리거 아님\n(D) Step Functions: 기능상 가능하나 EventBridge 대비 더 복잡한 구성\n\n【시험 포인트】\n운영상 효율성 키워드 → 서버리스 솔루션 우선: EventBridge는 코드 배포/관리 필요 없이 규칙으로 스케줄링 가능. EC2 기반 솔루션은 항상 실행되는 인스턴스와 cron 관리 오버헤드 발생.",
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
    "question": "CloudOps 엔지니어는 회사의 재해 복구 절차를 담당합니다. 회사는 프로덕션 계정에 소스 Amazon S3 버킷을 보유하고 있으며, 소스에서 비프로덕션 계정의 대상 S3 버킷으로 객체를 복제하려고 합니다. CloudOps 엔지니어는 S3 크로스 리전, 크로스 계정 복제를 구성하여 소스 S3 버킷을 대상 S3 버킷으로 복사합니다. CloudOps 엔지니어가 대상 S3 버킷의 객체에 액세스하려고 할 때 'Access Denied' 오류가 발생합니다. 이 문제를 해결하는 솔루션은 무엇입니까?",
    "options": {
      "A": "복제 구성을 수정하여 객체 소유권을 대상 S3 버킷 소유자로 변경합니다.",
      "B": "복제 규칙이 단일 접두사로 제한되지 않고 소스 S3 버킷의 모든 객체에 적용되도록 합니다.",
      "C": "S3 Replication Time Control(S3 RTC)이 경과한 후 요청을 다시 시도합니다.",
      "D": "복제된 객체의 스토리지 클래스가 소스 S3 버킷과 대상 S3 버킷 사이에서 변경되지 않았는지 확인합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 복제 (Replication) — 소스 버킷 객체가 대상 버킷으로 자동 복사\n▸ 소유권 문제 — 크로스 계정 복제 시, 소유권이 소스 계정 유지\n▸ ObjectOwnerOverride — 대상 버킷 소유자로 소유권 변경 옵션\n\n【정답 포인트】\n▸ 크로스 계정 복제 기본 동작: 객체 소유권 = 소스 계정 유지\n▸ 대상 계정의 엔지니어가 객체 액세스 불가 → 소유권 문제 확실\n▸ 해결책: 복제 규칙에서 \"Destination object ownership\" 설정으로 소유권 이전\n\n【오답 체크】\n(B) 복제 규칙 범위: 객체 액세스 권한 문제와 무관\n(C) S3 RTC: 복제 지연 시간 관련, Access Denied 오류 원인 아님\n(D) 스토리지 클래스: 객체 액세스 권한과 독립적\n\n【시험 포인트】\nAccess Denied in 크로스 계정 복제 → 95% 소유권 문제. 복제 설정 시 \"change object ownership\" 또는 \"ObjectOwnerOverride\" 옵션 필수. 대상 계정에서 객체 사용 가능하려면 대상 소유권 필요.",
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
    "question": "Amazon EC2 인스턴스는 Amazon Simple Queue Service(SQS) 큐를 사용하는 애플리케이션을 실행 중입니다. CloudOps 엔지니어는 애플리케이션이 SQS 큐에서 메시지를 읽고, 쓰고, 삭제할 수 있는지 확인해야 합니다. 가장 안전한 방식으로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "sqs:SendMessage 권한, sqs:ReceiveMessage 권한, sqs:DeleteMessage 권한을 허용하는 IAM 정책을 포함한 IAM 사용자를 만듭니다. IAM 사용자의 자격증명을 애플리케이션 구성에 포함합니다.",
      "B": "sqs:SendMessage 권한, sqs:ReceiveMessage 권한, sqs:DeleteMessage 권한을 허용하는 IAM 정책을 포함한 IAM 사용자를 만듭니다. IAM 사용자의 액세스 키와 보안 액세스 키를 EC2 인스턴스의 환경 변수로 내보냅니다.",
      "C": "EC2 인스턴스가 AWS 서비스를 호출할 수 있도록 하는 IAM 역할을 만들고 연결합니다. sqs:* 권한을 적절한 큐에 허용하는 IAM 정책을 역할에 연결합니다.",
      "D": "EC2 인스턴스가 AWS 서비스를 호출할 수 있도록 하는 IAM 역할을 만들고 연결합니다. sqs:SendMessage 권한, sqs:ReceiveMessage 권한, sqs:DeleteMessage 권한을 적절한 큐에 허용하는 IAM 정책을 역할에 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ IAM 역할 (Role) — EC2가 AWS 서비스에 임시 자격증명으로 접근\n▸ 최소 권한 원칙 — 필요한 권한만 부여 (sqs:* 제외)\n▸ 자격증명 노출 위험 — 키를 환경 변수/코드에 하드코딩 금지\n\n【정답 포인트】\n▸ 가장 안전: IAM 역할 사용 → 자격증명 관리 불필요\n▸ 임시 토큰 자동 로테이션 → 노출 위험 최소화\n▸ 최소 권한: sqs:* 아닌 필요한 3가지 권한만 (SendMessage, ReceiveMessage, DeleteMessage)\n\n【오답 체크】\n(A) IAM 사용자 자격증명을 코드에 포함 → 버전 관리, 로그에 노출 위험\n(B) 환경 변수로 액세스 키 저장 → 프로세스 메모리, 컨테이너 환경에서 노출 가능성\n(C) IAM 역할 사용이지만 sqs:* 권한 → 최소 권한 원칙 위배\n\n【시험 포인트】\nEC2 on AWS 서비스 접근 → IAM 역할 필수. 사용자 자격증명 방식은 보안 안티패턴. sqs:* vs 구체적 권한: 항상 구체적 권한 선택 (최소 권한 원칙). CloudOps 시험 보안 문제 자주 출제.",
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
    "question": "CloudOps 엔지니어는 Amazon RDS for PostgreSQL DB 인스턴스 솔루션을 설계하고 있습니다. 데이터베이스 자격증명을 저장하고 매달 회전해야 합니다. DB 인스턴스에 연결하는 애플리케이션은 쓰기 집약적인 트래픽을 보내며, 클라이언트 연결이 때로는 짧은 시간 내에 크게 증가합니다. 이 요구사항을 충족해야 하는 CloudOps 엔지니어가 선택해야 할 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Key Management Service(AWS KMS)를 구성하여 DB 인스턴스의 키를 자동으로 회전합니다. RDS Proxy를 사용하여 데이터베이스 연결 증가를 처리합니다.",
      "B": "AWS Key Management Service(AWS KMS)를 구성하여 DB 인스턴스의 키를 자동으로 회전합니다. RDS 읽기 복제본을 사용하여 데이터베이스 연결 증가를 처리합니다.",
      "C": "AWS Secrets Manager를 구성하여 DB 인스턴스의 자격증명을 자동으로 회전합니다. RDS Proxy를 사용하여 데이터베이스 연결 증가를 처리합니다.",
      "D": "AWS Secrets Manager를 구성하여 DB 인스턴스의 자격증명을 자동으로 회전합니다. RDS 읽기 복제본을 사용하여 데이터베이스 연결 증가를 처리합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Secrets Manager — 데이터베이스 자격증명(사용자명, 암호) 자동 회전\n▸ KMS — 암호화 키 관리, 자격증명 관리 아님\n▸ RDS Proxy — 연결 풀링, 변동하는 클라이언트 연결 처리\n▸ RDS 읽기 복제본 — 읽기 쿼리 분산 (쓰기 트래픽 처리 불가)\n\n【정답 포인트】\n▸ \"자격증명을 저장하고 회전\" → Secrets Manager 확실\n▸ KMS는 암호화 키이지, 데이터베이스 자격증명 아님\n▸ \"쓰기 집약적 + 연결 변동\" → RDS Proxy (연결 풀링 관리)\n▸ 읽기 복제본은 읽기 쿼리만 분산, 쓰기는 주 인스턴스\n\n【오답 체크】\n(A) \n(B) KMS: 암호화 키 회전 vs 자격증명 회전은 별개 개념\n(D) 읽기 복제본: 쓰기 집약적 트래픽 + 클라이언트 연결 증가에 대응 불가\n\n【시험 포인트】\n\"자격증명 자동 회전\" → Secrets Manager만 가능. KMS는 암호화 키 전용. RDS Proxy vs 읽기 복제본: 연결 수 관리 목적 = Proxy 선택. RDS Proxy는 \"매직 기능\" - 앱 코드 변경 없이 연결 문제 해결.",
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
    "question": "한 회사는 VPC와 회사 온프레미스 데이터 센터에서 컴퓨팅 리소스를 운영합니다. 회사는 이미 VPC와 온프레미스 데이터 센터 사이에 AWS Direct Connect 연결을 보유하고 있습니다. CloudOps 엔지니어는 VPC의 Amazon EC2 인스턴스가 온프레미스 데이터 센터의 호스트에 대한 DNS 이름을 확인할 수 있도록 해야 합니다. 이 요구사항을 충족하려면 LEAST 지속적인 유지보수로 다음 중 어느 솔루션이 사용되어야 합니까?",
    "options": {
      "A": "Amazon Route 53 프라이빗 호스팅 영역을 만듭니다. 온프레미스 데이터 센터의 호스트의 호스트명과 IP 주소를 영역에 채웁니다.",
      "B": "Amazon Route 53 Resolver 아웃바운드 엔드포인트를 만듭니다. 포워드할 도메인 이름에 대해 온프레미스 DNS 서버의 IP 주소를 추가합니다.",
      "C": "Amazon Route 53 Resolver에서 역 DNS 쿼리에 대한 포워딩 규칙을 설정합니다. VPC에 대해 enableDnsHostnames 속성을 true로 설정합니다.",
      "D": "온프레미스 호스트의 호스트명과 IP 주소를 각 EC2 인스턴스의 /etc/hosts 파일에 추가합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver — VPC 기반 DNS 확인 서비스\n▸ 아웃바운드 엔드포인트 — VPC에서 온프레미스 DNS로 쿼리 포워드\n▸ Direct Connect — 온프레미스와 VPC 간 전용 네트워크\n\n【정답 포인트】\n▸ 유지보수 최소화 → 자동화된 솔루션 필수\n▸ Route 53 Resolver 아웃바운드 엔드포인트: \"조회 규칙\" + 온프레미스 DNS 지정\n▸ 호스트 데이터가 변경되어도 자동으로 온프레미스 DNS 참조 → 추가 관리 불필요\n\n【오답 체크】\n(A) 프라이빗 호스팅 영역: 수동으로 호스트명/IP 입력 → 온프레미스 변경 시마다 수동 업데이트 필수\n(C) 포워딩 규칙 + enableDnsHostnames: reverse DNS와 정방향 확인은 별개\n(D) /etc/hosts 파일: 수동 관리, 확장성 없음, 모든 인스턴스마다 반복 필요\n\n【시험 포인트】\n온프레미스 DNS 통합 + 최소 유지보수 → Route 53 Resolver 아웃바운드 엔드포인트 정답. Direct Connect가 있으므로 네트워크 연결 이미 확보된 상태. DNS 포워딩 규칙으로 도메인을 온프레미스 DNS로 리다이렉트.",
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
    "question": "한 회사는 Amazon EC2 인스턴스에서 웹 애플리케이션을 호스팅합니다. 웹 서버 로그는 Amazon CloudWatch Logs에 발행됩니다. 로그 이벤트는 동일한 구조를 가지며 사용자 요청과 관련된 HTTP 응답 코드를 포함합니다. 회사는 웹 서버가 HTTP 404 응답을 반환하는 횟수를 모니터링해야 합니다. 이 요구사항을 충족하는 가장 운영상 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "웹 서버가 HTTP 404 응답을 반환하는 횟수를 세는 CloudWatch Logs 메트릭 필터를 만듭니다.",
      "B": "웹 서버가 HTTP 404 응답을 반환하는 횟수를 세는 CloudWatch Logs 구독 필터를 만듭니다.",
      "C": "지난 시간 동안 로그 이벤트의 404 코드 수를 세는 CloudWatch Logs Insights 쿼리를 실행하는 AWS Lambda 함수를 만듭니다.",
      "D": "지난 시간 동안 로그 이벤트의 404 코드 수를 세는 CloudWatch Logs Insights 쿼리를 실행하는 스크립트를 만듭니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 메트릭 필터 (Metric Filter) — CloudWatch Logs 내 패턴 기반 메트릭 생성\n▸ 구독 필터 (Subscription Filter) — 로그 스트림을 Lambda/Kinesis로 전송\n▸ CloudWatch Logs Insights — 임시 쿼리 분석, 지속적 모니터링 용도 아님\n\n【정답 포인트】\n▸ \"운영상 효율적\" → 자동화, 최소 오버헤드\n▸ 메트릭 필터: 로그 패턴에서 자동으로 메트릭 추출\n▸ CloudWatch 대시보드/알람으로 직접 연동\n▸ 설정 후 관리 불필요\n\n【오답 체크】\n(B) 구독 필터: 로그 데이터를 외부로 전송, 메트릭 생성 역할 아님\n(C) Lambda + Insights: 임시 분석, 반복 실행 필요, 비용 증가\n(D) 스크립트: 수동 실행, 자동화 안 됨\n\n【시험 포인트】\n\"모니터링 + 효율성\" → 메트릭 필터 정답. 로그 기반 실시간 메트릭이 필요할 때 항상 메트릭 필터 선택. Insights는 임시 조사용, 지속적 모니터링은 메트릭 필터 또는 에이전트.",
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
    "question": "한 회사는 Application Load Balancer 뒤에서 Amazon EC2 인스턴스에서 실행되는 내부 웹 애플리케이션을 보유하고 있습니다. 인스턴스는 단일 가용 영역의 Amazon EC2 Auto Scaling 그룹에서 실행됩니다. CloudOps 엔지니어는 애플리케이션을 고가용성으로 만들어야 합니다. CloudOps 엔지니어가 이 요구사항을 충족하기 위해 취해야 할 조치는 무엇입니까?",
    "options": {
      "A": "Auto Scaling 그룹의 최대 인스턴스 수를 증가시켜 피크 사용 시 필요한 용량을 충족합니다.",
      "B": "Auto Scaling 그룹의 최소 인스턴스 수를 증가시켜 피크 사용 시 필요한 용량을 충족합니다.",
      "C": "Auto Scaling 그룹을 업데이트하여 같은 AWS 리전의 두 번째 가용 영역에서 새 인스턴스를 시작합니다.",
      "D": "Auto Scaling 그룹을 업데이트하여 두 번째 AWS 리전의 가용 영역에서 새 인스턴스를 시작합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 고가용성 (HA) — 가용 영역 장애 시에도 서비스 지속\n▸ Multi-AZ 배포 — 두 개 이상의 가용 영역에 리소스 분산\n▸ Auto Scaling 그룹 — 여러 AZ에 걸쳐 인스턴스 시작 가능\n\n【정답 포인트】\n▸ \"고가용성\" → 하나의 AZ 장애에 견딜 수 있어야 함\n▸ 현재: 단일 AZ → 그 AZ가 다운되면 전체 애플리케이션 중단\n▸ 해결책: Auto Scaling 그룹 설정에서 두 번째 AZ 추가\n▸ ALB가 이미 있으므로 트래픽 분산 자동 처리\n\n【오답 체크】\n(A) \n(B) 최대/최소 인스턴스 수: 용량 조정일 뿐, AZ 장애 대응 아님\n(D) 다른 리전: 높은 비용, 복잡한 설정, 리전 간 지연 증가\n\n【시험 포인트】\n\"고가용성\" + \"단일 AZ\" → 다중 AZ 추가 필수. 같은 리전 내 다른 AZ 선택이 가장 경제적/효율적. 리전 간은 재해 복구(DR)용, 고가용성용으로는 같은 리전의 다중 AZ.",
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
    "question": "CloudOps 엔지니어가 Amazon EC2에서 실행 중인 간단한 공개 웹사이트를 만들고 있습니다. CloudOps 엔지니어는 기존 공개 서브넷에 EC2 인스턴스를 만들었고 인스턴스에 Elastic IP 주소를 할당했습니다. 다음으로 CloudOps 엔지니어는 인스턴스에 새 보안 그룹을 만들고 적용하여 0.0.0.0/0에서 들어오는 HTTP 트래픽을 허용했습니다. 마지막으로 CloudOps 엔지니어는 새 네트워크 ACL을 만들었고 서브넷에 적용하여 0.0.0.0/0에서 들어오는 HTTP 트래픽을 허용했습니다. 그러나 웹사이트는 인터넷에서 접근할 수 없습니다. 이 문제의 원인은 무엇입니까?",
    "options": {
      "A": "CloudOps 엔지니어가 새 네트워크 ACL에서 임시 포트 반환 트래픽을 허용하는 아웃바운드 규칙을 만들지 않았습니다.",
      "B": "CloudOps 엔지니어가 보안 그룹에서 포트 80의 HTTP 트래픽을 허용하는 아웃바운드 규칙을 만들지 않았습니다.",
      "C": "EC2 인스턴스에 할당된 Elastic IP 주소가 변경되었습니다.",
      "D": "포트 80에서 들어오는 HTTP 트래픽을 거부하는 규칙이 포함된 추가 네트워크 ACL이 서브넷과 연결되어 있습니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 네트워크 ACL — 서브넷 수준 방화벽, 상태 비저장(Stateless)\n▸ 보안 그룹 — 인스턴스 수준 방화벽, 상태 저장(Stateful)\n▸ 임시 포트 (Ephemeral Port) — 클라이언트 요청 응답 시 사용 포트 (1024~65535)\n\n【정답 포인트】\n▸ HTTP 요청(포트 80): 인바운드 규칙으로 허용됨 ✓\n▸ 그러나 응답이 나갈 때: 임시 포트 범위로 돌아가야 함\n▸ 네트워크 ACL이 상태 비저장 → 아웃바운드 명시적 규칙 필요\n▸ 아웃바운드 임시 포트 규칙 없음 → 응답 차단 → 웹사이트 접근 불가\n\n【오답 체크】\n(B) 보안 그룹: 상태 저장 → 인바운드 허용하면 아웃바운드 자동 허용\n(C) Elastic IP: 정적 주소, 변경되지 않음\n(D) 추가 네트워크 ACL: 문제에서 \"새 네트워크 ACL만 만들었다\"고 명시\n\n【시험 포인트】\nNetworking ACL 상태 비저장 특성 핵심: 요청과 응답이 별도 규칙 필요. HTTP(80) 인바운드만으로는 부족, 응답 경로(1024~65535 범위) 아웃바운드 규칙도 필수. 보안 그룹과의 차이점 - 상태 저장 vs 상태 비저장.",
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
    "question": "한 회사는 AWS Systems Manager를 사용하여 Amazon EC2 인스턴스의 대규모 플릿을 관리하려고 합니다. 회사는 프라이빗 서브넷에서 인스턴스를 호스팅합니다. 회사는 최소 권한 원칙을 따르며 액세스 권한을 할당합니다. 모든 프라이빗 서브넷은 NAT 게이트웨이를 통해 인터넷 연결이 가능합니다. CloudOps 엔지니어는 최신 버전의 Systems Manager Agent(SSM Agent)를 설치합니다. 하지만 EC2 인스턴스는 Systems Manager Fleet Manager에 표시되지 않습니다. CloudOps 엔지니어가 이 문제를 해결해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "NAT 게이트웨이를 공개 서브넷에 배포된 NAT 인스턴스로 대체합니다. 프라이빗 서브넷의 경로 테이블을 NAT 인스턴스를 사용하도록 업데이트합니다.",
      "B": "Systems Manager용 VPC 엔드포인트를 만듭니다. 프라이빗 서브넷의 경로 테이블에서 NAT 게이트웨이를 통한 인터넷 경로를 제거합니다.",
      "C": "인스턴스와 연결된 EC2 인스턴스 프로필에 AmazonSSMManagedInstanceCore AWS 관리 정책을 연결합니다.",
      "D": "인스턴스와 연결된 EC2 인스턴스 프로필에 ssm*에 모든 작업을 허용하는 사용자 정책을 연결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Systems Manager Agent (SSM Agent) — EC2 인스턴스 관리 에이전트\n▸ Fleet Manager — SSM으로 인스턴스 관리 중앙 허브\n▸ AmazonSSMManagedInstanceCore — SSM 필수 IAM 권한 포함\n▸ VPC 엔드포인트 — 네트워크 연결 최적화\n\n【정답 포인트】\n▸ EC2 인스턴스가 Fleet Manager에 표시되지 않음 → 권한 부족\n▸ SSM Agent는 설치됨 → 네트워크나 권한 문제\n▸ NAT 게이트웨이 이미 있음 → 네트워크 연결은 OK\n▸ 해결책: EC2 인스턴스 프로필에 AmazonSSMManagedInstanceCore 정책 연결\n▸ 최소 권한 원칙: ssm* 모두 vs AmazonSSMManagedInstanceCore (구체적 권한)\n\n【오답 체크】\n(A) NAT 인스턴스로 교체: 불필요한 아키텍처 변경, 네트워크는 이미 정상\n(B) VPC 엔드포인트 생성: 선택사항이지만 PRIMARY 문제는 IAM 권한\n(D) ssm* 모든 권한: 과도한 권한, 최소 권한 원칙 위배\n\n【시험 포인트】\nFleet Manager \"인스턴스 보이지 않음\" → 90% 확률 IAM 권한. NAT 게이트웨이 이미 있으므로 VPC 엔드포인트는 옵션(성능 개선용). AmazonSSMManagedInstanceCore는 SSM 기본 매니지드 정책.",
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
    "question": "한 회사에는 수천 개의 알람 시스템으로부터 알림을 수집하는 애플리케이션이 있습니다. 알림에는 알람 알림과 정보 알림이 포함됩니다. 정보 알림에는 시스템 활성화 프로세스, 비활성화 프로세스, 센서 상태가 포함됩니다. 모든 알림은 Amazon Simple Queue Service(SQS) 큐의 메시지로 유지됩니다. Auto Scaling 그룹에 있는 Amazon EC2 인스턴스가 메시지를 처리합니다. CloudOps 엔지니어는 정보 알림보다 알람 알림을 우선순위로 하는 솔루션을 구현해야 합니다. 다음 중 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "큐에 메시지가 많은 경우 Auto Scaling 그룹이 더 빠르게 확장되도록 조정합니다.",
      "B": "Amazon Simple Notification Service(SNS) 팬아웃 기능을 Amazon SQS와 함께 사용하여 모든 EC2 인스턴스에 알림을 병렬로 보냅니다.",
      "C": "메시지 처리를 가속화하기 위해 Amazon DynamoDB 스트림을 추가합니다.",
      "D": "알람 알림용 큐와 정보 알림용 큐를 만듭니다. 애플리케이션을 업데이트하여 먼저 알람 알림 큐에서 메시지를 수집합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 메시지 우선순위 — SQS의 기본 기능은 없음, 별도 메커니즘 필요\n▸ FIFO vs Standard SQS — Standard는 무순서, 우선순위 처리 불가\n▸ 우선순위 큐 패턴 — 여러 큐를 별도로 관리\n\n【정답 포인트】\n▸ \"알람 알림을 정보 알림보다 우선순위\" → 처리 순서 제어 필수\n▸ 솔루션: 두 개의 SQS 큐 생성 (알람 vs 정보)\n▸ 애플리케이션: 먼저 알람 큐를 폴링, 그 다음 정보 큐\n▸ 간단하고 확실한 구현\n\n【오답 체크】\n(A) Auto Scaling 조정: 처리 우선순위와 무관, 단순 용량 증가만\n(B) SNS 팬아웃: 분산 처리, 우선순위 제어 불가\n(C) DynamoDB 스트림: 메시지 처리 가속화 vs 우선순위 제어는 다른 문제\n\n【시험 포인트】\nSQS 우선순위 처리 패턴: Standard SQS에는 우선순위 없으므로 \"두 개 큐 사용\" 정석. 또는 SQS FIFO + MessageGroupId + 메시지 속성 활용도 가능하나, 가장 간단한 방식은 두 큐 분리. 클라이언트 코드에서 처리 순서만 제어.",
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
    "question": "한 회사는 AWS Trusted Advisor를 사용하여 보안 및 규정 준수를 구현하고 있습니다. 회사의 CloudOps 팀은 액세스할 수 있는 Trusted Advisor 점검 목록을 검증하고 있습니다. 사용 가능한 Trusted Advisor 점검의 수량에 영향을 미치는 요인은 무엇입니까?",
    "options": {
      "A": "최소한 하나의 Amazon EC2 인스턴스가 실행 중인 상태인지 여부",
      "B": "AWS 지원 플랜",
      "C": "AWS Organizations 서비스 제어 정책(SCP)",
      "D": "AWS 계정 루트 사용자가 다중 인증(MFA)을 활성화했는지 여부"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Trusted Advisor — AWS 환경 점검 및 권장사항 제공\n▸ AWS 지원 플랜 — Basic, Developer, Business, Enterprise\n▸ 점검 범위 — 지원 플랜에 따라 가능한 점검 수 다름\n\n【정답 포인트】\n▸ Basic Support: 6가지 코어 점검만 제공\n▸ Business/Enterprise: 모든 점검 활성화 (100+)\n▸ 지원 플랜 = Trusted Advisor 점검 범위 결정\n▸ 다른 요소 (EC2 상태, SCP, MFA) 는 점검 수에 영향 없음\n\n【오답 체크】\n(A) EC2 인스턴스 상태: 특정 점검 결과에 영향, 점검 자체 수에 영향 안 함\n(C) SCP: IAM 권한 제어, Trusted Advisor 점검 범위에 영향 안 함\n(D) MFA 활성화: 보안 모범 사례, 점검 수 제어 안 함\n\n【시험 포인트】\nTrusted Advisor = AWS 지원 플랜 종속. Basic은 제한적, Business 이상은 전체. 시험에서 \"Trusted Advisor 점검\" 관련 문제면 무조건 \"지원 플랜\" 확인.",
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
    "question": "CloudOps 엔지니어가 AWS CloudFormation 템플릿을 사용하여 VPC를 성공적으로 배포했습니다. CloudOps 엔지니어는 AWS Organizations을 통해 관리되는 여러 계정에 걸쳐 동일한 템플릿을 배포하려고 합니다. 다음 중 가장 운영상 오버헤드가 적은 솔루션은 무엇입니까?",
    "options": {
      "A": "관리 계정에서 OrganizationAccountAccessRole IAM 역할을 담당합니다. 각 계정에 템플릿을 배포합니다.",
      "B": "AWS Lambda 함수를 만들어 각 계정의 역할을 담당합니다. AWS CloudFormation CreateStack API 호출을 사용하여 템플릿을 배포합니다.",
      "C": "AWS Lambda 함수를 만들어 계정 목록을 쿼리합니다. AWS CloudFormation CreateStack API 호출을 사용하여 템플릿을 배포합니다.",
      "D": "관리 계정에서 AWS CloudFormation StackSets를 사용하여 각 계정에 템플릿을 배포합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ StackSets — CloudFormation을 여러 계정/리전에 배포하는 기능\n▸ 자동화 — 일회성 설정으로 반복 배포 가능\n▸ 오버헤드 최소화 — 추가 코드/스크립트 불필요\n\n【정답 포인트】\n▸ \"운영상 오버헤드 최소\" → 자동화된 솔루션\n▸ StackSets: CloudFormation 네이티브 기능\n▸ 관리 계정에서 일회 설정 → 모든 멤버 계정에 자동 배포\n▸ 업데이트, 삭제 등 관리 용이\n\n【오답 체크】\n(A) 역할 담당 후 수동 배포: 각 계정마다 반복, 오버헤드 증가\n(B) \n(C) Lambda + API 호출: 커스텀 코드, 유지보수 필요, 복잡도 증가\n\n【시험 포인트】\n여러 계정 배포 = StackSets 정답. StackSets는 CloudFormation의 \"마법\" 기능 - 자동으로 모든 멤버 계정에 스택 생성, 업데이트, 삭제. Organizations와 완벽 통합.",
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
    "question": "한 회사의 애플리케이션은 인터넷 공급자가 app.example.com에서 호스팅합니다. 회사는 Amazon Route 53으로 소유하고 관리하는 www.company.com을 사용하여 애플리케이션에 접근하려고 합니다. 이를 해결하기 위해 만들어야 할 Route 53 레코드는 무엇입니까?",
    "options": {
      "A": "A 레코드",
      "B": "별칭 레코드",
      "C": "CNAME 레코드",
      "D": "포인터(PTR) 레코드"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CNAME (Canonical Name) — 도메인명을 다른 도메인명으로 매핑\n▸ A 레코드 — 도메인명을 IP 주소로 매핑\n▸ 별칭 레코드 — AWS 리소스 (ALB, CloudFront 등)로 매핑\n▸ PTR 레코드 — IP 주소를 도메인명으로 역매핑\n\n【정답 포인트】\n▸ 원본: www.company.com (자사 도메인)\n▸ 대상: app.example.com (외부 도메인, AWS 비관리)\n▸ 해결책: CNAME 레코드로 도메인→도메인 매핑\n▸ www.company.com CNAME app.example.com\n\n【오답 체크】\n(A) A 레코드: IP 주소 매핑, 도메인명 변경 불가\n(B) 별칭 레코드: AWS 리소스 (CloudFront, ELB 등) 전용, 일반 도메인 불가\n(D) PTR: 역 DNS 조회용, 정방향 매핑 아님\n\n【시험 포인트】\nRoute 53 레코드 선택:\n- AWS 리소스 → 별칭 레코드\n- 외부 도메인 → CNAME\n- IP 주소 → A 또는 AAAA\n- 역 DNS → PTR\n이 문제는 CNAME의 핵심 용도 시험: 도메인 이름 변경.",
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
    "question": "한 회사는 애플리케이션 데이터를 캐시하기 위해 Amazon ElastiCache(Redis OSS)를 사용합니다. CloudOps 엔지니어는 캐시의 복원력을 높이는 솔루션을 구현해야 합니다. 또한 이 솔루션은 복구 시간 목표(RTO)를 최소화해야 합니다. 다음 중 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "ElastiCache(Redis OSS)를 ElastiCache(Memcached)로 교체합니다.",
      "B": "매시간 백업을 시작하는 Amazon EventBridge 규칙을 만듭니다. 필요할 때 백업을 복원합니다.",
      "C": "두 번째 가용 영역에서 읽기 복제본을 만듭니다. ElastiCache(Redis OSS) 복제 그룹에 Multi-AZ를 활성화합니다.",
      "D": "자동 백업을 활성화합니다. 필요할 때 백업을 복원합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 복원력 (Resilience) — 장애 시에도 서비스 지속\n▸ RTO (Recovery Time Objective) — 복구까지 필요한 최소 시간\n▸ Multi-AZ Replication — 동기식 복제, 즉시 failover\n▸ 백업/복원 — 시간 소요, RTO 증가\n\n【정답 포인트】\n▸ \"복원력\" + \"RTO 최소화\" → 즉시 failover 필요\n▸ Multi-AZ 활성화: 자동 장애 조치, 다운타임 최소\n▸ 동기식 복제 → 데이터 손실 없음, 빠른 복구\n▸ 읽기 복제본 또는 Multi-AZ 설정 필요\n\n【오답 체크】\n(A) Memcached로 교체: 영속성 없음, 데이터 손실 위험 증가\n(B) \n(D) 백업/복원: RTO 길어짐 (자동 백업 포함), 데이터 손실 가능\n\n【시험 포인트】\nRTO \"최소화\" → 백업/복원 피하기. \"높은 복원력\" → Multi-AZ, read replica, failover 패턴. Redis Multi-AZ는 자동 failover 지원, ElastiCache 고가용성 표준.",
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
    "question": "한 회사에는 여러 AWS 계정이 있습니다. CloudOps 엔지니어는 샌드박스 계정을 사용하여 프로덕션 계정에서 사용할 IAM 정책을 만들고 검증합니다. CloudOps 엔지니어는 AWS CloudFormation을 사용하여 정책을 샌드박스 계정에 배포하여 테스트합니다. 테스트가 통과하면 CloudOps 엔지니어는 정책을 프로덕션에 배포합니다. CloudOps 엔지니어는 두 샌드박스 계정과 프로덕션 계정에서 AWS CloudTrail을 구성했습니다. CloudOps 엔지니어는 CloudFormation에서 정책을 배포한 후 IAM 정책의 변경 사항을 감지하려고 합니다. CloudOps 엔지니어는 정책의 변경 사항에 대해 알림을 받아야 합니다. 다음 중 가장 적은 관리 노력으로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "CloudTrail이 IAM 정책의 변경 사항을 감지할 때 CloudOps 엔지니어에게 이메일 알림을 보내도록 CloudTrail을 구성합니다.",
      "B": "CloudFormation 스택의 드리프트를 확인하는 AWS Lambda 함수를 호출하기 위해 Amazon EventBridge 규칙을 만듭니다. 함수가 드리프트를 감지하면 Amazon Simple Notification Service(SNS)를 사용하여 CloudOps 엔지니어에게 알리도록 함수를 구성합니다.",
      "C": "AWS Identity and Access Management Access Analyzer를 사용하여 프로덕션 계정에서 IAM 역할에 연결된 IAM 정책에 대한 CloudTrail 활동을 기반으로 정책을 생성합니다. 결과를 샌드박스 계정의 IAM 정책과 비교합니다. 정책이 다르면 CloudOps 엔지니어에게 알림을 보냅니다.",
      "D": "IAM 정책을 Amazon S3 버킷에 JSON 문서로 저장합니다. AWS Lambda 함수를 사용하여 IAM 정책을 S3 버킷에 저장된 JSON 문서와 주기적으로 비교합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudFormation 드리프트 — 스택이 정의된 템플릿과 다른 상태\n▸ Drift Detection — CloudFormation 자체 기능으로 변경 감지\n▸ EventBridge — 자동 스케줄 기반 실행\n▸ SNS — 알림 전송\n\n【정답 포인트】\n▸ \"CloudFormation 배포 후 정책 변경 감지\" → Drift Detection\n▸ 관리 노력 최소 → CloudFormation 네이티브 기능 활용\n▸ EventBridge + Lambda: 자동화된 드리프트 감지\n▸ SNS: 변경 알림\n\n【오답 체크】\n(A) CloudTrail 이메일: CloudTrail은 이메일 알림 미지원, 로깅만 제공\n(C) Access Analyzer: 정책 생성/분석 도구, 드리프트 감지 아님\n(D) S3 JSON 문서: 수동 비교, 자동화 불가\n\n【시험 포인트】\nCloudFormation 정책 변경 감지 = Drift Detection + EventBridge 스케줄. CloudFormation Drift는 \"템플릿 vs 실제 상태\" 비교하는 표준 기능. Access Analyzer는 정책 분석용 (생성, 공개 범위 확인 등), Drift 감지는 아님.",
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
    "question": "금융 회사는 Amazon S3 버킷에 기밀 데이터를 저장합니다. 회사는 Amazon QuickSight를 사용하여 데이터를 분석하고 대시보드 보고서를 만듭니다. 회사는 모든 데이터 액세스 및 QuickSight 연결이 회사의 VPC 네트워크 경계 내에 남아 있어야 합니다. 다음 중 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "QuickSight용 인터페이스 VPC 엔드포인트를 만듭니다. AWS PrivateLink를 사용하여 VPC 내에서 QuickSight에 연결하도록 엔드포인트를 구성합니다. S3 데이터를 가리키는 매니페스트 파일을 만듭니다. QuickSight에 S3 버킷에 액세스할 수 있는 권한을 부여합니다.",
      "B": "QuickSight용 VPC 엔드포인트를 설정합니다. Amazon EC2 인스턴스를 프록시로 사용하여 VPC와 QuickSight 간의 직접 연결을 설정합니다. S3 데이터를 가리키는 매니페스트 파일을 만듭니다. 매니페스트를 EC2 인스턴스에 저장합니다. QuickSight에 EC2 인스턴스에 액세스할 수 있는 권한을 부여합니다.",
      "C": "Amazon S3 VPC 게이트웨이 엔드포인트를 구성합니다. 모든 QuickSight의 데이터를 엔드포인트를 통해 라우팅합니다. QuickSight에 S3 버킷에 액세스할 수 있는 권한을 부여합니다.",
      "D": "회사의 VPC에 NAT 게이트웨이를 구성합니다. QuickSight의 모든 데이터를 NAT 게이트웨이를 통해 라우팅합니다. QuickSight에 S3 버킷에 액세스할 수 있는 권한을 부여합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 인터페이스 VPC 엔드포인트 — SaaS 서비스 (QuickSight) 접근\n▸ AWS PrivateLink — VPC 내부 프라이빗 연결\n▸ 게이트웨이 VPC 엔드포인트 — S3, DynamoDB만 지원\n▸ VPC 경계 내 — 인터넷 미노출\n\n【정답 포인트】\n▸ \"VPC 네트워크 경계 내\" → 인터페이스 VPC 엔드포인트 필수\n▸ QuickSight는 SaaS → 게이트웨이 엔드포인트 불가\n▸ PrivateLink로 AWS 관리 엔드포인트 통해 QuickSight 접근\n▸ 매니페스트 파일 + S3 권한: QuickSight가 S3 데이터 직접 참조\n▸ NAT 게이트웨이: 인터넷 노출 (공개 IP 사용)\n\n【오답 체크】\n(B) EC2 프록시: 불필요한 복잡도, VPC 엔드포인트 활용 안 함\n(C) S3 게이트웨이: QuickSight ↔ VPC 연결 문제 해결 안 됨\n(D) NAT 게이트웨이: 인터넷 통해 퍼블릭 IP 사용, \"경계 내\" 조건 위배\n\n【시험 포인트】\nVPC 경계 내 + SaaS 서비스 = 인터페이스 VPC 엔드포인트 + PrivateLink. S3는 별도 게이트웨이 엔드포인트로 처리 가능하나, QuickSight ↔ VPC 통신이 핵심. 매니페스트 파일: QuickSight가 S3 위치 알아야 함.",
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
    "question": "한 회사는 프로덕션 파일 서버를 AWS로 마이그레이션하고 있습니다. 가용 영역이 사용 불가능하거나 시스템 유지보수가 수행될 때 파일 서버에 저장된 모든 데이터에 계속 액세스할 수 있어야 합니다. 사용자는 SMB 프로토콜을 통해 파일 서버와 상호작용할 수 있어야 합니다. 사용자는 또한 Windows ACL을 사용하여 파일 권한을 관리할 수 있어야 합니다. 다음 중 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "단일 AWS Storage Gateway 파일 게이트웨이를 만듭니다.",
      "B": "Amazon FSx for Windows File Server Multi-AZ 파일 시스템을 만듭니다.",
      "C": "두 개의 가용 영역에 두 개의 AWS Storage Gateway 파일 게이트웨이를 배포합니다. 파일 게이트웨이 앞에 Application Load Balancer를 구성합니다.",
      "D": "두 개의 Amazon FSx for Windows File Server Single-AZ 파일 시스템을 배포합니다. Microsoft Distributed File System Replication(DFSR)을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ FSx for Windows File Server — SMB 프로토콜, Windows ACL 지원\n▸ Multi-AZ — AZ 장애 시에도 자동 failover\n▸ Storage Gateway — 온프레미스 데이터 백업용\n▸ DFSR — 수동 복제, 자동화 없음\n\n【정답 포인트】\n▸ SMB + Windows ACL → FSx for Windows 필수 (Storage Gateway는 SMB 미지원)\n▸ \"AZ 불가능할 때 접근 가능\" → Multi-AZ failover 필요\n▸ FSx Multi-AZ: 동기식 복제 + 자동 failover\n▸ 관리형 서비스 → 유지보수 불필요\n\n【오답 체크】\n(A) 단일 Storage Gateway: Single AZ, AZ 장애 시 다운\n(C) 두 개 Storage Gateway + ALB: SMB 프로토콜 기반 파일 공유, ALB로 로드 밸런싱 부적절 (파일 잠금 문제)\n(D) 두 개 Single-AZ FSx + DFSR: 수동 복제, 자동 failover 없음, DFSR 운영 복잡\n\n【시험 포인트】\nWindows 파일 서버 마이그레이션 = FSx for Windows File Server. Storage Gateway는 \"온프레미스 ↔ AWS\" 연결용, 순수 AWS 내 고가용성은 FSx. Multi-AZ + 관리형 = 최소 운영 오버헤드.",
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
    "question": "한 회사의 웹 애플리케이션이 매일 밤 성능 문제를 겪고 있습니다. 근본 원인 분석 결과 Amazon EC2 Linux 인스턴스의 CPU 사용률이 5분 동안 급증하는 것으로 나타났습니다. CloudOps 엔지니어는 더 많은 CPU를 소비하는 서비스 또는 프로세스의 프로세스 ID(PID)를 찾아야 합니다. CloudOps 엔지니어가 최소한의 노력으로 프로세스 사용률 정보를 수집해야 하려면 어떻게 해야 합니까?",
    "options": {
      "A": "Amazon CloudWatch 에이전트 procstat 플러그인을 구성하여 CPU 프로세스 메트릭을 캡처합니다.",
      "B": "매분 PID를 캡처하고 알림을 보내도록 매분 실행하는 AWS Lambda 함수를 구성합니다.",
      "C": "매일 밤 .pem 키를 사용하여 EC2 인스턴스에 로그인합니다. 그런 다음 top 명령을 실행합니다.",
      "D": "기본 Amazon CloudWatch CPU 사용률 메트릭을 사용하여 CloudWatch에서 PID를 캡처합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudWatch 에이전트 — EC2 상세 모니터링 (기본 메트릭 이상)\n▸ procstat 플러그인 — 프로세스별 CPU 메트릭 수집\n▸ 자동화 — 매일 밤 자동 수집\n▸ 최소 노력 — 수동 로그인 불필요\n\n【정답 포인트】\n▸ \"최소한의 노력\" → 자동화, 수동 작업 제거\n▸ \"프로세스 CPU 사용률 + PID\" → procstat 플러그인 필수\n▸ CloudWatch 에이전트 설치 후 설정 → 자동 메트릭 수집\n▸ 대시보드/알람으로 실시간 모니터링 가능\n\n【오답 체크】\n(B) Lambda 함수: 매분 실행 → 비용 증가, procstat보다 복잡\n(C) 수동 로그인 + top: 매일 밤 반복, 자동화 없음, \"최소 노력\" 위배\n(D) 기본 CPU 메트릭: 전체 CPU만 제공, PID 정보 없음\n\n【시험 포인트】\nLinux EC2 프로세스별 모니터링 = CloudWatch 에이전트 + procstat. procstat은 경량 수집 플러그인, per-process CPU 메트릭 추출. 자동화된 모니터링 ≠ 수동 명령 실행.",
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
    "question": "한 회사는 최종 사용자에 대한 웹사이트의 가용성을 모니터링해야 합니다. 회사는 웹사이트의 가동 시간이 99% 미만으로 감소하면 Amazon Simple Notification Service(SNS) 알림을 제공하는 솔루션이 필요합니다. 모니터링은 웹사이트에서 사용자 경험에 대한 정확한 보기를 제공해야 합니다. 다음 중 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "CloudWatch Logs 로그 그룹에 발행되는 웹사이트의 로그를 기반으로 Amazon CloudWatch 알람을 만듭니다. HTTP 4xx 오류 및 5xx 오류의 수가 지정된 임계값을 초과하면 SNS 알림을 발행하도록 알람을 구성합니다.",
      "B": "CloudWatch에 발행된 웹사이트의 메트릭을 기반으로 Amazon CloudWatch 알람을 만듭니다. 이상 감지를 기반으로 SNS 알림을 발행하도록 알람을 구성합니다.",
      "C": "Amazon CloudWatch Synthetics 하트비트 모니터링 카나리를 만듭니다. 카나리를 최종 사용자용 웹사이트의 URL과 연결합니다. 카나리용 CloudWatch 알람을 만듭니다. SuccessPercent 메트릭의 값이 99% 미만이면 SNS 알림을 발행하도록 알람을 구성합니다.",
      "D": "Amazon CloudWatch Synthetics 끊어진 링크 확인자 모니터링 카나리를 만듭니다. 카나리를 최종 사용자용 웹사이트의 URL과 연결합니다. 카나리용 CloudWatch 알람을 만듭니다. SuccessPercent 메트릭의 값이 99% 미만이면 SNS 알림을 발행하도록 알람을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudWatch Synthetics Canary — 실제 사용자 경험 시뮬레이션\n▸ 하트비트 모니터링 — 기본 가용성 확인 (페이지 로드)\n▸ 끊어진 링크 확인자 — 링크 유효성 검사 (가용성 ≠ 링크)\n▸ SuccessPercent — 성공한 카나리 실행 비율 (99% = 가용성)\n\n【정답 포인트】\n▸ \"최종 사용자 경험\" → CloudWatch Synthetics Canary 필수\n▸ 실제 브라우저로 웹사이트 접근 시뮬레이션\n▸ 하트비트 모니터링: 간단한 가용성 확인 (페이지 로드)\n▸ SuccessPercent < 99% → SNS 알림\n▸ 로그 기반 오류 수 vs Synthetics: Synthetics가 실제 사용자 경험 정확히 반영\n\n【오답 체크】\n(A) 로그 기반: HTTP 오류 수 ≠ 가용성 (예: 4xx는 오류이지만 웹사이트 작동)\n(B) 이상 감지: 임계값 불명확, \"99% 정확히\" 감지 불가\n(D) 끊어진 링크 확인자: 링크 유효성 vs 웹사이트 가용성 다름\n\n【시험 포인트】\n\"사용자 경험\" + \"가용성 모니터링\" = CloudWatch Synthetics Canary. 하트비트 모니터링은 기본 가용성 (페이지 응답), 끊어진 링크는 추가 기능. SuccessPercent = Canary 성공률 = 웹사이트 가용성.",
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
    "question": "한 기업이 여러 가용 영역(AZ)에 걸쳐 Amazon EC2 Auto Scaling을 사용합니다. 기업은 EC2 인스턴스가 프라이빗 서브넷에서 프로비저닝되도록 보장해야 합니다. 최근 클라우드 인프라를 최적화하여 VPC의 NAT 게이트웨이 수를 하나로 줄였습니다. 인프라 업데이트 후 일부 EC2 인스턴스가 인터넷 연결을 잃었습니다. CloudOps 엔지니어가 이 연결 문제를 해결해야 합니다. 어떤 솔루션이 이 요구사항을 만족합니까?",
    "options": {
      "A": "기존 NAT 게이트웨이를 같은 서브넷의 NAT 인스턴스로 교체합니다.",
      "B": "VPC 라우트 테이블을 업데이트하여 인터넷 트래픽의 대상을 기존 NAT 게이트웨이로 지정합니다.",
      "C": "VPC 라우트 테이블을 업데이트하여 인터넷 트래픽의 대상을 인터넷 게이트웨이로 지정합니다.",
      "D": "기존 NAT 게이트웨이에 보조 IP 주소를 추가합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ NAT Gateway — VPC 내 프라이빗 인스턴스의 아웃바운드 인터넷 접근을 제공하는 AWS 관리 서비스\n▸ Route Table — VPC 내 트래픽 라우팅 규칙을 정의하는 네트워크 구성 요소\n▸ Auto Scaling — 자동으로 인스턴스 수를 조정하는 AWS 기능\n\n【정답 포인트】\n▸ 문제 분석 → NAT 게이트웨이 수를 1개로 줄였으나 일부 인스턴스가 인터넷 연결 상실\n▸ 근본 원인 → 프라이빗 서브넷의 라우트 테이블이 NAT 게이트웨이로 설정되지 않음\n▸ 해결책 → VPC 라우트 테이블의 0.0.0.0/0 경로를 기존 NAT 게이트웨이로 리다이렉트\n▸ 효과 → 프라이빗 서브넷의 모든 인스턴스가 NAT 게이트웨이를 통해 인터넷 접근 가능\n\n【오답 체크】\n(A) NAT 인스턴스는 NAT 게이트웨이보다 성능이 떨어지고 관리 오버헤드가 크며, 가용성 문제 발생 가능\n(C) 인터넷 게이트웨이는 프라이빗 서브넷의 인스턴스에 직접 접근 불가 (공개 IP 필요)\n(D) NAT 게이트웨이에 보조 IP를 추가해도 라우팅 문제는 해결되지 않음\n\n【시험 포인트】\n▸ Auto Scaling + NAT Gateway 조합에서는 라우트 테이블 설정이 핵심\n▸ NAT 게이트웨이는 고가용성을 위해 각 AZ마다 1개씩 배포하는 것이 권장 아키텍처\n▸ 단일 NAT 게이트웨이는 비용 최적화를 위해서만 사용되며 가용성 위험 존재\n▸ SOA 시험에서 네트워크 연결 문제는 종종 라우트 테이블 설정 누락이 원인",
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
    "question": "한 기업이 AWS CloudFormation을 사용하여 Amazon EC2 인스턴스 스택을 관리합니다. CloudOps 엔지니어는 스택이 삭제되더라도 인스턴스와 인스턴스의 모든 데이터를 유지해야 합니다. 어떤 솔루션이 이 요구사항을 만족합니까?",
    "options": {
      "A": "CloudFormation 템플릿의 EC2 인스턴스 리소스에 DeletionPolicy 속성을 Snapshot으로 설정합니다.",
      "B": "Amazon Data Lifecycle Manager(Amazon DLM)를 사용하여 백업을 자동화합니다.",
      "C": "AWS Backup에서 백업 계획을 생성합니다.",
      "D": "CloudFormation 템플릿의 EC2 인스턴스 리소스에 DeletionPolicy 속성을 Retain으로 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ DeletionPolicy — CloudFormation에서 스택 삭제 시 리소스 동작을 정의하는 속성\n▸ Retain — 스택 삭제 시에도 리소스를 유지하는 정책 (기본값: Delete)\n▸ Snapshot — EBS 볼륨의 스냅샷 생성 (EC2 인스턴스 자체는 삭제됨)\n\n【정답 포인트】\n▸ 요구사항 → \"인스턴스와 인스턴스의 모든 데이터\"를 스택 삭제 후에도 유지\n▸ DeletionPolicy: Retain → 리소스를 CloudFormation 스택에서만 분리, 실제 리소스는 유지\n▸ 데이터 유지 → EBS 볼륨이 분리되지만 인스턴스는 존재하며 모든 데이터 보존\n▸ 효과 → 스택 재구성 또는 마이그레이션 시에도 데이터 접근 가능\n\n【오답 체크】\n(A) DeletionPolicy: Snapshot은 EBS 볼륨만 스냅샷 생성, 인스턴스는 삭제됨\n(B) DLM은 정기 백업 자동화이나 DeletionPolicy와 무관하게 스택 삭제 시 인스턴스는 삭제\n(C) AWS Backup도 마찬가지로 백업 계획이지, 스택 삭제 시 리소스 보존을 직접 지정하지 않음\n\n【시험 포인트】\n▸ CloudFormation DeletionPolicy는 Delete(기본), Retain, Snapshot 3가지 옵션\n▸ Retain은 데이터베이스, EC2, 스토리지 등 중요 리소스 보호에 자주 사용\n▸ RDS의 경우 Snapshot이 권장되지만, EC2는 Retain이 적절 (인스턴스 자체와 데이터 모두 유지)\n▸ SOA 시험에서는 CloudFormation 라이프사이클 관리 문제가 빈출",
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
    "question": "CloudOps 엔지니어가 Auto Scaling 그룹의 Amazon EC2 인스턴스에 애플리케이션을 배포 준비 중입니다. 애플리케이션에는 의존성이 설치되어야 합니다. 애플리케이션 업데이트는 매주 발급됩니다. CloudOps 엔지니어는 정기적으로 애플리케이션 업데이트를 적용하는 솔루션을 구현해야 합니다. 솔루션은 Amazon Machine Image(AMI) 생성 중에 취약성 스캔도 수행해야 합니다. 이 요구사항을 만족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "Packer를 사용하는 스크립트를 생성합니다. cron 작업을 예약하여 스크립트를 실행합니다.",
      "B": "EC2 인스턴스에 애플리케이션과 의존성을 설치합니다. EC2 인스턴스의 AMI를 생성합니다.",
      "C": "사용자 정의 레시피를 사용하여 EC2 Image Builder를 사용하여 애플리케이션과 의존성을 설치합니다.",
      "D": "Amazon EventBridge 예약 규칙을 사용하여 EC2 CreateImage API 작업을 호출합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ EC2 Image Builder — AWS 관리 서비스로 AMI 자동 생성 및 테스트, 취약성 스캔 통합\n▸ Packer — HashiCorp 오픈소스 도구 (비AWS), 복잡한 구성 필요\n▸ Golden AMI — 테스트 및 보안 검증을 거친 표준 이미지\n\n【정답 포인트】\n▸ \"매주\" 반복 업데이트 → 자동화된 AMI 빌드 파이프라인 필수\n▸ 취약성 스캔 → EC2 Image Builder가 기본 제공 기능으로 포함\n▸ 운영 효율성 → 관리형 서비스(EC2 Image Builder)가 Packer보다 우수\n▸ 의존성 설치 → 사용자 정의 레시피를 통해 자동화 가능\n▸ Auto Scaling → 새 AMI 버전이 자동으로 배포 그룹에 적용\n\n【오답 체크】\n(A) Packer는 저수준 도구이며 취약성 스캔을 별도로 구성해야 하고, cron은 AWS 서비스 연동 약함\n(B) 수동 AMI 생성은 매주 반복 작업에 비효율적이고 취약성 스캔 미지원\n(D) EventBridge + CreateImage API는 AMI 생성만 가능, 취약성 스캔과 테스트 기능 없음\n\n【시험 포인트】\n▸ EC2 Image Builder는 자동화된 AMI 라이프사이클 관리의 표준 솔루션\n▸ 내장 취약성 스캔(Inspector 통합) 및 테스트 프레임워크 제공\n▸ CloudFormation, Systems Manager와 통합되어 운영 효율성 극대화\n▸ Golden AMI 전략: 정기적 스캔/테스트 → 배포 그룹 자동 업데이트\n▸ SOA 시험에서 \"운영 효율성\"이 언급되면 AWS 관리형 서비스(EC2 Image Builder) 선택",
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
    "question": "한 기업이 여러 가용 영역에 분산된 Amazon EC2 인스턴스 세트에 애플리케이션을 호스팅할 계획입니다. 애플리케이션은 초당 수백만 건의 요청으로 확장할 수 있어야 합니다. CloudOps 엔지니어는 EC2 인스턴스로 트래픽을 분배하는 솔루션을 설계해야 합니다. 솔루션은 급격하고 변동성 있는 트래픽 패턴을 처리하도록 최적화되면서 각 가용 영역마다 단일 정적 IP 주소를 사용해야 합니다. 어떤 솔루션이 이 요구사항을 만족합니까?",
    "options": {
      "A": "Amazon Simple Queue Service(Amazon SQS) 큐",
      "B": "Application Load Balancer",
      "C": "AWS Global Accelerator",
      "D": "Network Load Balancer"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Network Load Balancer(NLB) — L4 (전송 계층) 로드 밸런서, 극도의 성능과 정적 IP 제공\n▸ Application Load Balancer(ALB) — L7 (애플리케이션 계층), 가변 IP 주소 사용\n▸ Global Accelerator — 글로벌 트래픽 가속, 고정 IP 제공하나 지역 간 라우팅용\n▸ Ultra-high performance — 초당 수백만 요청(Ultra high throughput)\n\n【정답 포인트】\n▸ \"초당 수백만 요청\" → NLB (극단적 성능 필요, ALB는 최대 25K RPS)\n▸ \"단일 정적 IP 주소 각 AZ마다\" → NLB가 AZ당 정적 탄력적 IP 제공\n▸ \"급격하고 변동성 있는 트래픽\" → NLB의 비연결형 UDP, 초저지연 처리 최적\n▸ 성능 순위 → NLB(극도) > ALB(높음) > ELB(낮음)\n\n【오답 체크】\n(A) SQS는 로드 밸런서가 아니며 큐 메시징 서비스로 실시간 분배 불가\n(B) ALB는 L7 처리로 인한 오버헤드로 NLB보다 성능 낮음 (초당 최대 25K RPS)\n(C) Global Accelerator는 지역 간 글로벌 라우팅용이며 단일 지역 내 EC2 분배에는 부적절\n\n【시험 포인트】\n▸ 로드 밸런서 선택 기준: 성능 필요도 → NLB, L7 라우팅 필요 → ALB\n▸ \"초당 수백만 요청\" 키워드 → 항상 NLB 선택\n▸ \"정적 IP\", \"극도의 성능\" → NLB의 차별화 기능\n▸ NLB 아키텍처: 각 AZ의 NLB 엔드포인트는 독립적 Elastic IP 보유\n▸ SOA 시험 출제율: 로드 밸런서 선택 문제가 고빈도로 출제, 성능 수치 암기 필수",
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
    "question": "한 기업은 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 호스팅되는 상태 저장 웹 애플리케이션을 보유합니다. 인스턴스는 단일 대상 그룹이 있는 Application Load Balancer(ALB) 뒤에서 실행됩니다. ALB는 Amazon CloudFront 배포의 원점으로 구성됩니다. 사용자가 웹 애플리케이션에서 무작위로 로그아웃된다고 보고합니다. CloudOps 엔지니어가 이 문제를 해결하기 위해 취해야 할 조치의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "ALB 대상 그룹의 로드 밸런싱 알고리즘을 가장 적은 미처리 요청(least outstanding requests)으로 변경합니다.",
      "B": "CloudFront 배포 캐시 동작에서 쿠키 포워딩을 구성합니다.",
      "C": "CloudFront 배포 캐시 동작에서 헤더 포워딩을 구성합니다.",
      "D": "ALB 리스너 규칙에서 그룹 수준 세션 고정성(stickiness)을 활성화합니다.",
      "E": "ALB 대상 그룹에서 고정 세션(sticky sessions)을 활성화합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ Sticky Sessions — ALB가 특정 사용자를 동일한 대상 인스턴스로 라우팅하는 기능\n▸ Cookie-Based Stickiness — AWSALB 쿠키를 사용해 사용자-인스턴스 바인딩 유지\n▸ CloudFront Cache Behavior — 원점으로 전달할 헤더/쿠키/쿼리 문자열 정의\n▸ Stateful Application — 세션 상태를 인메모리 유지하는 애플리케이션\n\n【정답 포인트】\n▸ 문제: \"무작위 로그아웃\" → 사용자가 다른 인스턴스로 라우팅되어 세션 손실\n▸ 원인 분석 → CloudFront 캐시가 쿠키를 제거하고 ALB의 고정 세션 미활성화\n▸ 해결책 B: CloudFront에서 쿠키 포워딩 → 세션 쿠키가 원점(ALB)에 전달됨\n▸ 해결책 E: ALB에서 Sticky Sessions 활성화 → AWSALB 쿠키로 동일 인스턴스 보장\n▸ 결합 효과: 쿠키(세션 ID) → CloudFront 통과 → ALB에서 고정 세션으로 라우팅\n\n【오답 체크】\n(A) 로드 밸런싱 알고리즘 변경은 세션 유지와 무관, 문제 해결 불가\n(C) 헤더 포워딩만으로는 충분하지 않으며, 쿠키 포워딩이 필수\n(D) ALB 리스너 규칙 수준의 stickiness는 존재하지 않으며, 대상 그룹 수준에서만 설정\n\n【시험 포인트】\n▸ CloudFront + 상태 저장 애플리케이션 조합: 항상 쿠키/헤더 포워딩 고려\n▸ Sticky Sessions 활성화 시 AWSALB 또는 AWSALBAPP 쿠키 자동 생성\n▸ CloudFront의 Cache Settings에서 \"Forward Cookies\"를 \"Whitelist\" 또는 \"All\"로 설정\n▸ ALB 고정 세션 지속 시간(기본 1일)도 중요한 운영 파라미터\n▸ 다중 선택(Multiple Choice) 문제는 각 옵션의 상호작용 이해 필수",
    "en_q": "A company has a stateful web application that is hosted on Amazon EC2 instances in an Auto Scaling group. The instances run behind an Application Load Balancer (ALB) that has a single target group. The ALB is configured as the origin in an Amazon CloudFront distribution. Users are reporting random logouts from the web application. Which combination of actions should a CloudOps engineer take to resolve this problem? (Choose two.)",
    "en_opts": {
      "A": "Change to the least outstanding requests algorithm on the ALB target group.",
      "B": "Configure cookie forwarding in the CloudFront distribution cache behavior.",
      "C": "Configure header forwarding in the CloudFront distribution cache behavior.",
      "D": "Enable group-level stickiness on the ALB listener rule.",
      "E": "Enable sticky sessions on the ALB target group"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369149-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 44,
    "question": "글로벌 기업은 AWS Organizations의 조직을 사용하여 여러 AWS 계정을 관리합니다. 규정 준수를 위해 기업은 워크로드 환경을 5개의 AWS 지역에 배포합니다. 기업은 각 지역마다 별도의 AWS 계정을 보유합니다. 기업은 모든 환경의 VPC를 디렉토리로 제공하는 중앙 공유 VPC와 공유 모니터링 VPC에 연결해야 합니다. 공유 계정은 각각 별도의 AWS 계정에 있습니다. 어떤 솔루션이 이 요구사항을 만족합니까?",
    "options": {
      "A": "중앙 공유 AWS 계정에서 Transit Gateway를 생성합니다. 기업의 AWS 계정과 Transit Gateway를 공유합니다. 모든 VPC를 중앙 Transit Gateway에 연결합니다.",
      "B": "기업이 리소스를 배포한 모든 지역에서 별도의 Transit Gateway를 생성합니다. 기업의 AWS 계정과 Transit Gateway를 공유합니다. 각 지역의 VPC를 해당 지역의 Transit Gateway에 연결합니다. Transit Gateway를 피어링합니다. 모든 라우트 테이블에서 적절한 경로를 생성합니다.",
      "C": "공유 VPC에 대한 Virtual Private Gateway를 생성합니다. 워크로드 VPC에 대한 Customer Gateway를 생성합니다. 디렉토리 VPC, 모니터링 VPC 및 모든 워크로드 VPC 간의 AWS Site-to-Site VPN 연결을 구성합니다.",
      "D": "중앙 공유 VPC, 공유 모니터링 VPC 및 모든 워크로드 VPC 간의 VPC 피어링 연결을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Transit Gateway — 다중 VPC와 온프레미스 네트워크를 중앙에서 연결하는 허브\n▸ Transit Gateway Peering — 지역 간 Transit Gateway를 연결하는 기능\n▸ VPC Peering — 2개 VPC 간 1:1 연결 (확장성 제한)\n▸ Site-to-Site VPN — 온프레미스와 AWS 간 암호화 연결\n\n【정답 포인트】\n▸ \"5개 AWS 지역에 각각 별도 계정\" → 지역별 Transit Gateway 필요\n▸ \"모든 환경 VPC를 중앙 공유 VPC에 연결\" → 각 지역 내 TGW로 로컬 연결\n▸ \"지역 간 연결\" → Transit Gateway Peering으로 글로벌 연결망 구성\n▸ 확장성 → TGW Peering이 VPC Peering의 메시 문제(n×(n-1)/2) 해결\n▸ 운영 효율성 → 라우트 테이블 중앙화 및 정책 기반 라우팅 가능\n\n【오답 체크】\n(A) 단일 중앙 TGW는 지역 간 전송을 지원하지 않음 (각 지역 TGW 필수)\n(C) VPN은 암호화 오버헤드 크고 관리 복잡, 5개 지역 × 2개 공유 VPC = 10개 VPN 연결 필요\n(D) VPC Peering은 메시 토폴로지로 5개 지역 × 3개 VPC = 15개 피어링 필요, 운영 복잡성 극대\n\n【시험 포인트】\n▸ 다중 지역 + 다중 VPC 아키텍처 → Transit Gateway Peering 표준 솔루션\n▸ Transit Gateway 설계 패턴: 지역 내 Hub(TGW) + 지역 간 TGW Peering\n▸ 라우트 테이블 설정: 각 워크로드 서브넷 → 로컬 TGW → (Peering) → 다른 지역 TGW\n▸ SOA 시험에서 \"규모\" 언급 시 VPC Peering보다 Transit Gateway 우선 선택\n▸ AWS Organizations + Transit Gateway sharing으로 크로스 계정 리소스 공유 가능",
    "en_q": "A global company uses an organization in AWS Organizations to manage multiple AWS accounts. To comply with regulations, the company deploys workload environments to five AWS Regions. The company has a separate AWS account for each Region. The company needs to connect every environment's VPC to a central shared VPC that serves as a directory and to a shared monitoring VPC. The shared accounts are each in separate AWS accounts. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a transit gateway in the central shared AWS account. Share the transit gateway with the company's AWS accounts. Connect all VPCs to the central transit gateway.",
      "B": "Create a separate transit gateway in every Region where the company has deployed resources. Share the transit gateways with company's AWS accounts. Connect the VPC in each Region to the transit gateway that is in the same Region. Peer the transit gateways. Create appropriate routes in all route tables.",
      "C": "Create a virtual private gateway for the shared VPCs. Create a customer gateway for the workload VPCs. Configure an AWS Site-to-Site VPN connection between the directory VPC, the monitoring VPC, and every workload VPC.",
      "D": "Create VPC peering connections between the central shared VPC, the shared monitoring VPC, and every workload VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369150-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 45,
    "question": "한 기업은 Amazon RDS for PostgreSQL 데이터베이스에 중요 정보를 저장합니다. 기업은 쇼핑 피크 시간 동안 성능 저하, 높은 CPU 사용률, 증가된 쿼리 지연 시간 및 연결 타임아웃을 감지합니다. 또한 피크 시간 동안 사용자 연결 급증을 식별합니다. 연결 급증은 데이터베이스의 읽기 성능에 영향을 미칩니다. 기업은 데이터베이스 성능 문제를 해결하려고 합니다. 이 요구사항을 만족할 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Amazon RDS Performance Insights를 사용하여 데이터베이스 성능에 가장 영향을 미치는 SQL 쿼리를 분석합니다. 분석 결과를 바탕으로 SQL 쿼리를 업데이트합니다.",
      "B": "Amazon CloudWatch Logs Insights를 사용하여 데이터베이스 쿼리를 분석하고 성능 병목을 식별합니다. 분석 결과를 바탕으로 쿼리를 업데이트합니다.",
      "C": "단일 가용 영역이 있는 Amazon RDS for PostgreSQL을 사용합니다.",
      "D": "연결 풀링을 완전히 비활성화하여 피크 시간 동안에도 모든 사용자 연결이 동등하게 처리되도록 합니다.",
      "E": "연결 풀링을 사용하여 RDS Proxy를 구현합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ RDS Performance Insights — 데이터베이스 부하의 \"언제\"와 \"무엇이\" 원인인지 시각화\n▸ RDS Proxy — 연결 풀링으로 데이터베이스 연결 수 최소화, 애플리케이션 재부팅 불필요\n▸ Connection Pooling — 애플리케이션 연결을 재사용 가능한 풀로 관리\n▸ Query Performance — SQL 최적화와 연결 관리의 조합으로 개선\n\n【정답 포인트】\n▸ 문제 분석: \"높은 CPU\" + \"쿼리 지연\" + \"연결 타임아웃\" → 2가지 원인\n▸ 원인 1: 비효율적 쿼리 → Performance Insights로 식별 + 최적화\n(A) ▸ 원인 2: 연결 급증 → RDS Proxy의 연결 풀링으로 해결\n(E) ▸ 복합 솔루션 → 쿼리 최적화(성능) + 연결 효율화(확장성)\n▸ 결합 효과: Proxy가 연결을 효율화하고, 최적화된 쿼리가 각 연결의 처리 시간 단축\n\n【오답 체크】\n(B) CloudWatch Logs Insights는 애플리케이션 로그 분석용이며 DB 성능 메트릭 부재\n(C) 단일 AZ는 가용성 저하이며 성능 문제 해결과 무관\n(D) 연결 풀링 비활성화는 성능을 악화시키므로 상반됨\n\n【시험 포인트】\n▸ RDS 성능 저하의 2가지 유형: (1) 쿼리 비효율, (2) 리소스 부족/연결 관리 문제\n▸ Performance Insights는 DB 부하 분석의 필수 도구 (load chart, dimensions 제공)\n▸ RDS Proxy는 \"연결 수 제한\", \"타임아웃 감소\"의 핵심 솔루션\n▸ 다중 선택: 각 원인에 대응하는 서로 다른 솔루션을 조합\n▸ SOA 시험 패턴: RDS 성능 문제는 항상 \"원인 분석\" → \"각각 해결책\" 구조",
    "en_q": "A company stores critical information in an Amazon RDS for PostgreSQL database. The company notices degraded performance, high CPU utilization, increased query latency, and connection timeouts during peak shopping hours. The company also identifies surges in user connections during peak hours. The connection surges affect the read performance of the database. The company wants to resolve the database performance issues. Which combination of steps will meet this requirement? (Choose two.)",
    "en_opts": {
      "A": "Use Amazon RDS Performance Insights to analyze the SQL queries that most affect database performance. Update the SQL queries based on the analysis findings.",
      "B": "Use Amazon CloudWatch Logs Insights to analyze the database queries and identify performance bottlenecks. Update the queries based on the analysis findings.",
      "C": "Use Amazon RDS for PostgreSQL with a single Availability Zone.",
      "D": "Disable connection pooling entirely to ensure that all user connections are treated equally, even during peak hours.",
      "E": "Implement RDS Proxy with connection pooling."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369151-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 46,
    "question": "한 기업이 Application Load Balancer(ALB) 뒤의 3개 Amazon EC2 인스턴스에서 웹 애플리케이션을 실행합니다. 기업은 트래픽 증가의 무작위 기간이 애플리케이션의 성능 저하를 야기한다는 것을 인지합니다. CloudOps 엔지니어는 증가된 트래픽을 충족하도록 애플리케이션을 확장해야 합니다. 어떤 솔루션이 이 요구사항을 만족합니까?",
    "options": {
      "A": "애플리케이션 지연 시간을 모니터링하는 Amazon CloudWatch 알람을 생성합니다. 원하는 임계값에 도달하면 각 EC2 인스턴스의 크기를 늘리도록 알람을 구성합니다.",
      "B": "애플리케이션 지연 시간을 모니터링하는 Amazon EventBridge 규칙을 생성합니다. 원하는 임계값에 도달하면 ALB에 EC2 인스턴스를 추가하도록 구성합니다.",
      "C": "목표 추적 스케일링 정책을 사용하는 Auto Scaling 그룹에 애플리케이션을 배포합니다. ALB를 Auto Scaling 그룹에 연결합니다.",
      "D": "예약 스케일링 정책을 사용하는 Auto Scaling 그룹에 애플리케이션을 배포합니다. ALB를 Auto Scaling 그룹에 연결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Target Tracking Scaling Policy — 대상 메트릭(CPU, 네트워크)을 지정하면 ASG가 자동 조정\n▸ Scheduled Scaling Policy — 정해진 시간에 미리 수정된 용량으로 확장\n▸ Vertical Scaling(Scale Up) — 인스턴스 크기 증가 (다운타임 필요)\n▸ Horizontal Scaling(Scale Out) — 인스턴스 개수 증가 (무중단)\n\n【정답 포인트】\n▸ \"무작위 기간의 트래픽 증가\" → 예측 불가능 → 목표 추적 정책 (반응형)\n▸ 스케일링 방식: 수평 확장(인스턴스 추가)이 수직 확장(크기 증가)보다 우수\n▸ ASG + Target Tracking → 메트릭 임계값 초과 시 자동으로 인스턴스 추가/제거\n▸ ALB 연결 → 새 인스턴스가 자동으로 대상 그룹에 등록되고 트래픽 수신 시작\n▸ 반응 속도 → 목표 추적이 예약 정책보다 실시간 대응 우수\n\n【오답 체크】\n(A) 인스턴스 크기 증가(수직 확장)는 재부팅 필요하여 다운타임 발생, 확장 시간도 김\n(B) EventBridge는 하나의 인스턴스만 추가 가능하며 자동화 불완전, ASG의 자동 조정보다 열악\n(D) 예약 스케일링은 피크 시간을 미리 알아야 하는데, 문제에서 \"무작위 기간\"이라 불적절\n\n【시험 포인트】\n▸ Auto Scaling 정책 선택: 예측 불가 → 목표 추적, 예측 가능 → 예약\n▸ Target Tracking 메트릭: CPU, 네트워크, ALB 요청 수, 사용자 정의 메트릭 가능\n▸ ASG 라이프사이클: 인스턴스 추가 → 로드 밸런서 등록 → 헬스 체크 → 트래픽 수신\n▸ 수평 확장 vs 수직 확장: 클라우드는 항상 수평 확장이 권장\n▸ SOA 시험: \"무작위\", \"예측 불가\"는 목표 추적, \"정기적\", \"피크 시간\"은 예약 스케일링",
    "en_q": "A company runs a web application on three Amazon EC2 instances behind an Application Load Balancer (ALB). The company notices that random periods of increased traffic cause a degradation in the application's performance. A CloudOps engineer must scale the application to meet the increased traffic. Which solution meets these requirements?",
    "en_opts": {
      "A": "Create an Amazon CloudWatch alarm to monitor application latency and increase the size of each EC2 instance if the desired threshold is reached.",
      "B": "Create an Amazon EventBridge rule to monitor application latency and add an EC2 instance to the ALB if the desired threshold is reached.",
      "C": "Deploy the application to an Auto Scaling group of EC2 instances with a target tracking scaling policy. Attach the ALB to the Auto Scaling group.",
      "D": "Deploy the application to an Auto Scaling group of EC2 instances with a scheduled scaling policy. Attach the ALB to the Auto Scaling group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369216-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 47,
    "question": "한 기업의 보고 작업이 15분에 완료되던 것이 이제 1시간이 걸립니다. 애플리케이션이 보고서를 생성합니다. 애플리케이션은 Amazon EC2 인스턴스에서 실행되고 Amazon RDS for MySQL 데이터베이스에서 데이터를 추출합니다. CloudOps 엔지니어가 RDS 인스턴스의 Amazon CloudWatch 대시보드를 확인하고 보고서가 실행되지 않을 때에도 읽기 IOPS 메트릭이 높다는 것을 알아챕니다. CloudOps 엔지니어는 RDS 인스턴스의 성능과 가용성을 개선해야 합니다. 어떤 솔루션이 이 요구사항을 만족합니까?",
    "options": {
      "A": "Amazon ElastiCache 클러스터를 RDS 인스턴스 앞에 구성합니다. 보고 작업을 업데이트하여 ElastiCache 클러스터를 쿼리합니다.",
      "B": "RDS 읽기 복제본을 배포합니다. 보고 작업을 업데이트하여 reader 엔드포인트를 쿼리합니다.",
      "C": "Amazon CloudFront 배포를 생성합니다. RDS 인스턴스를 원점으로 설정합니다. 보고 작업을 업데이트하여 CloudFront 배포를 쿼리합니다.",
      "D": "RDS 인스턴스의 크기를 늘립니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ RDS Read Replica — 읽기 전용 복제본, 읽기 트래픽 분산, 실시간 동기화\n▸ Reader Endpoint — RDS가 관리하는 복제본 그룹의 로드 밸런싱 엔드포인트\n▸ Read IOPS — 데이터베이스에서 발생하는 읽기 입출력 작업 수\n▸ ElastiCache — 인메모리 캐시 (자주 변경되지 않는 데이터용)\n\n【정답 포인트】\n▸ \"보고서 실행 시가 아닐 때도 높은 읽기 IOPS\" → 지속적 읽기 부하 (다른 애플리케이션 등)\n▸ 근본 원인 → 주 DB 인스턴스가 모든 읽기 요청 처리\n▸ 해결책 → Read Replica로 읽기 트래픽 분산\n▸ Reader Endpoint → 자동 로드 밸런싱으로 여러 복제본에 읽기 요청 분배\n▸ 효과 → 주 DB의 읽기 부하 감소, 보고서 성능 개선, 주 DB 가용성 보호\n\n【오답 체크】\n(A) ElastiCache는 캐시(자주 변경 X, 캐시 미스 시 DB 조회)용이며, 보고 데이터는 일회성 쿼리라 캐시 효율 낮음\n(C) CloudFront는 정적 웹 콘텐츠(이미지, CSS) 캐싱용이며, 동적 DB 쿼리 결과 캐싱 부적절\n(D) 인스턴스 크기 증가는 임시 해결책이며, 지속적 읽기 부하는 복제본으로 분산이 정석\n\n【시험 포인트】\n▸ RDS 성능 문제: 읽기 부하 → Read Replica, 연결 수 → RDS Proxy, 쿼리 비효율 → 최적화\n▸ Read Replica는 비동기 복제(약간의 지연 가능) but 읽기 전용 데이터에 충분\n▸ Reader Endpoint는 복제본 자동 추가/제거 시 엔드포인트 업데이트 불필요\n▸ 보고서 작업은 약간의 데이터 지연(1-2초)을 허용하므로 Read Replica 이상적\n▸ SOA 시험: RDS 읽기 성능 저하 → 항상 Read Replica 우선 선택",
    "en_q": "A company's reporting job that used to run in 15 minutes is now taking an hour to run. An application generates the reports. The application runs on Amazon EC2 instances and extracts data from an Amazon RDS for MySQL database. A CloudOps engineer checks the Amazon CloudWatch dashboard for the RDS instance and notices that the Read IOPS metrics are high, even when the reports are not running. The CloudOps engineer needs to improve the performance and the availability of the RDS instance. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure an Amazon ElastiCache cluster in front of the RDS instance. Update the reporting job to query the ElastiCache cluster.",
      "B": "Deploy an RDS read replica. Update the reporting job to query the reader endpoint.",
      "C": "Create an Amazon CloudFront distribution. Set the RDS instance as the origin. Update the reporting job to query the CloudFront distribution.",
      "D": "Increase the size of the RDS instance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369217-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 48,
    "question": "AWS에서 여러 워크로드를 실행하는 기업은 DNS 기반 위협 보호를 구현하여 보안 태세를 강화하려고 합니다. 기업은 DNS 기반 공격을 차단해야 합니다. 어떤 솔루션이 이 요구사항을 만족합니까?",
    "options": {
      "A": "AWS Shield Advanced를 배포하여 악의적인 DNS 쿼리를 필터링하고 차단합니다. 도메인 필터링 정책을 설정합니다.",
      "B": "AWS WAF를 사용하여 DNS 트래픽에서 악의적인 도메인을 검사합니다. 알려진 위협을 차단하는 사용자 정의 규칙을 생성합니다.",
      "C": "Amazon Route 53 Resolver를 구성하여 DNS 쿼리를 Route 53 Resolver DNS Firewall Advanced로 전달하여 위협을 감지하고 필터링합니다.",
      "D": "AWS Config를 구성하여 DNS 쿼리와 DNS 트래픽 패턴을 모니터링합니다. AWS Lambda 함수를 사용하여 악의적인 도메인으로의 액세스를 방지합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Route 53 Resolver DNS Firewall — DNS 쿼리 수준의 위협 차단 전용 서비스\n▸ AWS Shield Advanced — DDoS 공격 방어 (Layer 3/4)\n▸ AWS WAF — 애플리케이션 계층(Layer 7) 웹 공격 방어\n▸ DNS Threat Protection — 악의적 도메인 접근 차단, C2 서버 통신 방지\n\n【정답 포인트】\n▸ \"DNS 기반 위협 보호\" → DNS 쿼리 검사 및 차단 필요\n▸ Route 53 Resolver DNS Firewall의 기능:\n  - 악의적 도메인 목록(공개/사용자 정의)에 대해 DNS 쿼리 차단\n  - 알려진 악성 도메인 및 C2 서버 통신 방지\n  - 쿼리 수준 정책 적용으로 인스턴스 수준 보호 우회 불가\n▸ VPC 내 모든 DNS 쿼리를 Route 53 Resolver가 통제\n▸ Advanced 기능 → 항상 최신 위협 인텔리전스 적용\n\n【오답 체크】\n(A) AWS Shield Advanced는 DDoS(Layer 3/4) 방어이며, DNS 쿼리 필터링 불가\n(B) AWS WAF는 HTTP/HTTPS 트래픽 검사용이며, DNS 프로토콜(UDP 53) 직접 검사 불가\n(D) AWS Config는 리소스 컴플라이언스 모니터링용이며, DNS 위협 탐지 기능 없음\n\n【시험 포인트】\n▸ AWS 보안 서비스별 역할:\n  - Shield: DDoS(Layer 3/4)\n  - WAF: 웹 공격(Layer 7)\n  - Route 53 Resolver DNS Firewall: DNS 위협\n▸ DNS Firewall은 VPC 내 모든 DNS 쿼리를 중앙에서 관제 가능\n▸ 마이그레이션 공격, 수익 창출 악성 광고(malvertising) 등 DNS 기반 위협 다양\n▸ SOA 시험: \"DNS 기반\", \"위협 보호\", \"도메인 차단\" → Route 53 Resolver DNS Firewall",
    "en_q": "A company that runs multiple workloads on AWS wants to enhance its security posture by implementing DNS-based threat protection. The company must block DNS-based attacks. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Deploy AWS Shield Advanced to filter and block malicious DNS queries. Set up domain filtering policies.",
      "B": "Use AWS WAF to inspect DNS traffic for malicious domains. Create custom rules to block known threats.",
      "C": "Configure Amazon Route 53 Resolver to forward DNS queries to Route 53 Resolver DNS Firewall Advanced to detect and filter threats.",
      "D": "Configure AWS Config to monitor DNS queries and DNS traffic patterns. Use an AWS Lambda function to prevent access to malicious domains."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369343-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 49,
    "question": "CloudOps 엔지니어는 프로덕션 데이터베이스의 복사본을 마이그레이션 계정과 공유하려고 합니다. 프로덕션 데이터베이스는 Amazon RDS DB 인스턴스에서 호스팅되고 production-rds-key의 별칭을 가진 AWS Key Management Service(AWS KMS) 키로 저장 중 암호화됩니다. CloudOps 엔지니어는 최소의 관리 오버헤드로 이 요구사항을 충족해야 합니다. CloudOps 엔지니어는 무엇을 해야 합니까?",
    "options": {
      "A": "프로덕션 계정에서 RDS DB 인스턴스의 스냅샷을 가져갑니다. production-rds-key KMS 키의 KMS 키 정책을 수정하여 마이그레이션 계정의 루트 사용자에게 액세스 권한을 부여합니다. 마이그레이션 계정과 스냅샷을 공유합니다.",
      "B": "마이그레이션 계정에서 RDS 읽기 복제본을 생성합니다. KMS 키 정책을 구성하여 production-rds-key KMS 키를 마이그레이션 계정으로 복제합니다.",
      "C": "프로덕션 계정에서 RDS DB 인스턴스의 스냅샷을 가져갑니다. 마이그레이션 계정과 스냅샷을 공유합니다. 마이그레이션 계정에서 동일한 별칭을 가진 새 KMS 키를 생성합니다.",
      "D": "기본 데이터베이스 도구 세트를 사용하여 RDS DB 인스턴스를 Amazon S3로 내보냅니다. 프로덕션 계정과 마이그레이션 계정 간의 크로스 계정 액세스를 위한 S3 버킷 및 S3 버킷 정책을 생성합니다. 기본 데이터베이스 도구 세트를 사용하여 Amazon S3에서 새 RDS DB 인스턴스로 데이터베이스를 가져옵니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RDS Snapshot — DB 인스턴스의 전체 백업, KMS 암호화 상태 유지\n▸ Cross-Account Sharing — KMS 키 정책으로 다른 계정의 루트 사용자에게 액세스 권한 부여\n▸ KMS Key Policy — 키 사용 권한을 정의하는 AWS 정책\n▸ Least Administrative Overhead — 최소 구성 복잡도\n\n【정답 포인트】\n▸ 스냅샷 생성 → 프로덕션 DB 데이터 캡처\n▸ KMS 키 정책 수정 → 마이그레이션 계정에 decrypt 권한 부여\n▸ 스냅샷 공유 → Cross-Account Sharing으로 마이그레이션 계정 액세스\n▸ 마이그레이션 계정에서 스냅샷 → DB 인스턴스 복원 가능 (새 KMS 키 생성 불필요)\n▸ 최소 오버헤드: 스냅샷 공유 + KMS 정책만 수정 (단 2가지)\n\n【오답 체크】\n(B) Read Replica는 교차 계정 불가능하며, KMS 키 복제(replication) 기능 없음\n(C) 스냅샷 암호화 상태로 공유하면서 새 KMS 키 생성은 재암호화 필요 (복잡)\n(D) S3 export/import는 데이터 손실 위험 있고, 자체 KMS 정책 + S3 정책 + 재암호화 필요 (오버헤드 큼)\n\n【시험 포인트】\n▸ KMS 암호화된 RDS 스냅샷 공유 패턴:\n  1. 스냅샷 생성 (프로덕션)\n  2. KMS 키 정책에 마이그레이션 계정 추가\n  3. 스냅샷 공유 (AWS Console 또는 API)\n  4. 마이그레이션 계정에서 스냅샷 복원\n▸ KMS 키 정책 구문: Effect: Allow, Principal: arn:aws:iam::MIGRATION_ACCOUNT:root, Action: kms:*\n▸ \"최소 오버헤드\" 키워드 → 기본 AWS 기능 활용, 복잡한 도구/프로세스 회피\n▸ SOA 시험: 크로스 계정 + KMS 암호화 → 항상 KMS 정책 수정 필수",
    "en_q": "A CloudOps engineer wants to share a copy of a production database with a migration account. The production database is hosted on an Amazon RDS DB instance and is encrypted at rest with an AWS Key Management Service (AWS KMS) key that has an alias of production-rds-key. What must the CloudOps engineer do to meet these requirements with the LEAST administrative overhead?",
    "en_opts": {
      "A": "Take a snapshot of the RDS DB instance in the production account. Amend the KMS key policy of the production-rds-key KMS key to give access to the migration account's root user. Share the snapshot with the migration account.",
      "B": "Create an RDS read replica in the migration account. Configure the KMS key policy to replicate the production-rds-key KMS key to the migration account.",
      "C": "Take a snapshot of the RDS DB instance in the production account. Share the snapshot with the migration account. In the migration account, create a new KMS key that has an identical alias.",
      "D": "Use native database toolsets to export the RDS DB instance to Amazon S3. Create an S3 bucket and an S3 bucket policy for cross-account access between the production account and the migration account. Use native database toolsets to import the database from Amazon S3 to a new RDS DB instance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369152-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 50,
    "question": "한 기업은 여러 AWS Lambda 함수를 사용하는 중요 서버리스 애플리케이션을 보유합니다. 각 Lambda 함수는 자신의 Amazon CloudWatch Logs 로그 그룹에서 매일 1GB의 로그 데이터를 생성합니다. 기업의 보안 팀은 유형별로 그룹화된 모든 로그 그룹에서 애플리케이션 오류의 수를 원합니다. CloudOps 엔지니어는 무엇을 해야 합니까?",
    "options": {
      "A": "stats 명령 및 count 함수를 사용하는 CloudWatch Logs Insights 쿼리를 수행합니다.",
      "B": "groupby 키워드 및 count 함수를 사용하는 CloudWatch Logs 검색을 수행합니다.",
      "C": "SELECT 및 GROUP BY 키워드를 사용하는 Amazon Athena 쿼리를 수행합니다.",
      "D": "SELECT 및 GROUP BY 키워드를 사용하는 Amazon RDS 쿼리를 수행합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudWatch Logs Insights — 로그 데이터 분석 및 통계 쿼리 서비스 (실시간)\n▸ stats 명령 — 통계 집계 (count, sum, avg 등)\n▸ groupby — stats 명령의 매개변수로 필드별 그룹화\n▸ count 함수 — 일치하는 로그 라인 수 계산\n\n【정답 포인트】\n▸ 요구사항: \"모든 로그 그룹에서\", \"오류 수\", \"유형별 그룹화\"\n▸ CloudWatch Logs Insights 쿼리 구조:\n  fields @timestamp, @message | filter @message like /ERROR/ | stats count() by @message\n▸ 다중 로그 그룹 동시 쿼리 → Insights가 기본 제공\n▸ stats + count + by(groupby) → 에러 유형별 집계\n▸ 장점: 실시간 결과, AWS 네이티브, 추가 도구/ETL 불필요\n\n【오답 체크】\n(B) CloudWatch Logs 검색(기본 검색)은 단순 텍스트 매칭만 가능, 통계 집계 불가\n(C) Athena는 S3 저장된 로그 분석용이며, 실시간 CloudWatch Logs 직접 쿼리 불가\n(D) RDS는 데이터베이스이며, CloudWatch Logs와 무관 (로그 로드 필요)\n\n【시험 포인트】\n▸ CloudWatch Logs Insights 기본 쿼리 패턴:\n  - fields: 조회할 필드 선택\n  - filter: 조건 필터링\n  - stats: 통계 계산 (count, sum, avg, max, pct 등)\n  - by: 그룹화 필드\n▸ 예: fields @timestamp, @message | filter @message like /ERROR/ | stats count() as ErrorCount by @message\n▸ 다중 로그 그룹은 Insights에서 자동 통합 쿼리 가능\n▸ 성능: 매일 1GB × 수십 개 함수 = 수십~수백 GB → Insights의 병렬 처리로 초 단위 결과\n▸ SOA 시험: \"로그 분석\", \"집계\", \"통계\" → CloudWatch Logs Insights",
    "en_q": "A company has a critical serverless application that uses multiple AWS Lambda functions. Each Lambda function generates 1 GB of log data daily in its own Amazon CloudWatch Logs log group. The company's security team asks for a count of application errors, grouped by type, across all of the log groups. What should a CloudOps engineer do to meet this requirement?",
    "en_opts": {
      "A": "Perform a CloudWatch Logs Insights query that uses the stats command and count function.",
      "B": "Perform a CloudWatch Logs search that uses the groupby keyword and count function.",
      "C": "Perform an Amazon Athena query that uses the SELECT and GROUP BY keywords.",
      "D": "Perform an Amazon RDS query that uses the SELECT and GROUP BY keywords."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369153-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 51,
    "question": "개발자가 Amazon Linux Amazon Machine Image(AMI)를 사용하여 타사 애플리케이션을 호스팅하는 EC2 인스턴스를 시작합니다. 애플리케이션이 때때로 불안정해집니다. CloudOps 엔지니어는 CPU 사용률이 15분 동안 90% 이상일 때마다 EC2 인스턴스를 자동으로 재부팅하고 개발자에게 재부팅을 알리는 솔루션이 필요합니다. 어떤 솔루션이 이 요구사항을 최소의 관리 노력으로 만족합니까?",
    "options": {
      "A": "인스턴스의 CPU 사용률을 평가하는 Amazon CloudWatch 알람을 구성합니다. CloudWatch 알람이 활성화되면 AWS Lambda 함수를 호출하도록 알람을 구성합니다. Lambda 함수가 Amazon Simple Notification Service(Amazon SNS) 주제에 메시지를 게시하고 EC2 인스턴스를 재부팅하도록 구성합니다. 개발자를 SNS 주제에 구독합니다.",
      "B": "인스턴스의 CPU 사용률을 평가하는 Amazon CloudWatch 알람을 생성합니다. 알람을 Amazon Simple Notification Service(Amazon SNS) 주제에 알림을 게시하고 인스턴스를 재부팅하는 EC2 조치를 수행하도록 구성합니다. 개발자를 SNS 주제에 구독합니다.",
      "C": "인스턴스의 CPU 사용률을 평가하는 Amazon CloudWatch 알람을 생성합니다. 알람을 AWS Systems Manager 조치를 호출하도록 구성하여 인시던트를 생성하고 개발자에게 알리며 재부팅을 요청합니다.",
      "D": "Amazon Simple Notification Service(Amazon SNS) 주제에 메시지를 게시하고 EC2 인스턴스를 재부팅하는 AWS Systems Manager Runbook 스크립트를 생성합니다. 개발자를 SNS 주제에 구독합니다. CPU 사용률이 15분 이상 90% 이상으로 유지될 때 Systems Manager Runbook을 실행하도록 Amazon CloudWatch 알람을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudWatch Alarm → EC2 Action — CloudWatch에서 직접 EC2 인스턴스 재부팅 가능\n▸ SNS Notification — 알람 발생 시 이메일/문자 알림 자동 발송\n▸ Lambda Invocation — CloudWatch → Lambda 함수 호출 (IAM 역할 구성 필요)\n▸ EC2 Action — CloudWatch 알람에서 지원하는 기본 EC2 동작 (Reboot, Stop, Terminate)\n\n【정답 포인트】\n▸ \"최소 관리 노력\" → AWS 네이티브 기능 활용, 추가 함수/스크립트 불필요\n▸ CloudWatch 알람 기능:\n  1. CPU 사용률 95% 평가\n  2. 15분(Evaluation Periods × Period) 임계값 초과 감지\n  3. 알람 상태 전환 → 2가지 동작 자동 실행:\n     - EC2 Action: Reboot Instance (재부팅)\n     - SNS Publish: 개발자 알림\n▸ 이점: Lambda/Runbook 작성 불필요, CloudWatch에서 직접 제공\n\n【오답 체크】\n(A) Lambda 함수 작성 + IAM 역할 설정 필요 → 관리 오버헤드 증가\n(C) Systems Manager Action은 \"인시던트 생성\"이며 자동 재부팅 불가 (수동 요청)\n(D) Runbook 스크립트 작성 + 권한 설정 + EventBridge 규칙 필요 → 가장 복잡함\n\n【시험 포인트】\n▸ CloudWatch 알람 구성 체크리스트:\n  - Namespace: AWS/EC2\n  - Metric: CPUUtilization\n  - Statistic: Average (또는 Sum)\n  - Period: 300초 (5분) ← \"15분\" = 3 × Period\n  - Evaluation Periods: 3\n  - Threshold: 90%\n  - Action: EC2 Reboot + SNS Publish\n▸ CloudWatch EC2 Actions:\n  - Reboot Instances\n  - Stop Instances\n  - Terminate Instances\n  - Recover Instances (EBS 볼륨 재부팅)\n▸ SNS 구독: 이메일, SMS, Lambda, SQS, HTTP 등 지원\n▸ SOA 시험: \"자동화\" + \"최소 오버헤드\" → CloudWatch 기본 기능 우선",
    "en_q": "A developer uses an Amazon Linux Amazon Machine Image (AMI) to launch an EC2 instance that hosts a third-party application. The application occasionally becomes unstable. The CloudOps engineer needs a solution to automatically reboot the EC2 instance whenever utilization is above 90% for 15 minutes and to notify the developer about the reboot. Which solution will meet these requirements with the LEAST administrative effort?",
    "en_opts": {
      "A": "Configure an Amazon CloudWatch alarm that evaluates the CPU utilization of the instance. Configure the alarm to invoke an AWS Lambda function to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the CloudWatch alarm activates. Configure the Lambda function to reboot the EC2 instance. Subscribe the developer to the SNS topic.",
      "B": "Create an Amazon CloudWatch alarm that evaluates the CPU utilization of the instance. Configure the alarm to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic and to perform an EC2 action to reboot the instance. Subscribe the developer to the SNS topic.",
      "C": "Create an Amazon CloudWatch alarm that evaluates the CPU utilization of the instance Configure the alarm to invoke an AWS Systems Manager action to create an incident to notify the developer and request the reboot.",
      "D": "Create an AWS Systems Manager runbook script to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic and to reboot the EC2 instance. Subscribe the developer to the SNS topic. Configure an Amazon CloudWatch alarm to run the Systems Manager runbook when CPU utilization for the instance remains above 90% for more than 15 minutes."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369218-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 52,
    "question": "한 기업이 Application Load Balancer(ALB) 뒤에서 Amazon EC2 인스턴스 세트에서 실행되는 마이크로서비스를 보유합니다. CloudOps 엔지니어는 Amazon Route 53을 사용하여 ALB URL을 example.com에 매핑하는 레코드를 생성해야 합니다. 어떤 유형의 레코드가 이 요구사항을 만족합니까?",
    "options": {
      "A": "A 레코드",
      "B": "AAAA 레코드",
      "C": "별칭 레코드",
      "D": "CNAME 레코드"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Alias Record — AWS 리소스(ALB, CloudFront, API Gateway 등)를 가리키는 Route 53 전용 레코드\n▸ CNAME Record — 도메인 이름을 다른 도메인에 매핑 (표준 DNS)\n▸ A Record — IPv4 주소(예: 192.0.2.1)를 도메인에 매핑\n▸ AAAA Record — IPv6 주소를 도메인에 매핑\n\n【정답 포인트】\n▸ ALB는 고정 IP 주소가 아니며, DNS 이름(예: my-alb-12345.us-east-1.elb.amazonaws.com)으로 식별\n▸ Alias Record의 장점:\n  1. AWS 리소스 자동 해석: ALB DNS 이름 → 현재 IP 주소(들) 자동 업데이트\n  2. Route 53에서 제공하는 기본 기능이므로 추가 비용 없음\n  3. 상태 확인(Health Check) 통합: ALB 상태 → 라우팅 자동 변경\n  4. 루트 도메인(@example.com) 지원 (CNAME은 불가)\n▸ \"example.com\" → Apex 도메인 → CNAME 사용 불가 → Alias 필수\n\n【오답 체크】\n(A) A Record는 고정 IPv4 주소 필요 (ALB는 탄력적 IP 미지원, DNS 이름만 제공)\n(B) AAAA는 IPv6 주소 매핑 (별도의 IPv6 지원 필요)\n(D) CNAME은 example.com 루트 도메인에 사용 불가 (RFC 제약), 서브도메인만 가능\n\n【시험 포인트】\n▸ Route 53 레코드 선택 기준:\n  - AWS 리소스(ALB, CloudFront, API Gateway, S3 웹사이트 호스팅, 다른 Route 53 레코드) → Alias\n  - 외부 도메인 → CNAME 또는 A\n  - 루트 도메인(@) → A 또는 Alias (CNAME 불가)\n▸ Alias 레코드 대상: ALB/NLB, CloudFront, API Gateway, S3, VPC 엔드포인트, Route 53 레코드\n▸ 비용: 일반 레코드 쿼리 $0.40/백만, Alias는 무료\n▸ Health Check: Alias는 대상의 상태 확인 자동 포함\n▸ SOA 시험: \"ALB\", \"Route 53\" 조합 → 항상 Alias Record",
    "en_q": "A company has a microservice that runs on a set of Amazon EC2 instances. The EC2 instances run behind an Application Load Balancer (ALB). A CloudOps engineer must use Amazon Route 53 to create a record that maps the ALB URL to example.com. Which type of record will meet this requirement?",
    "en_opts": {
      "A": "An A record",
      "B": "An AAAA record",
      "C": "An alias record",
      "D": "A CNAME record"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369154-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 53,
    "question": "애플리케이션이 Application Load Balancer(ALB) 뒤의 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션이 시작된 후 로컬 캐시를 채우는 데 최대 2분이 걸립니다. 애플리케이션이 시작 후 몇 초 만에 대상 그룹 헬스 체크에서 정상으로 보고됩니다. CloudOps 엔지니어는 일부 인스턴스가 재부팅된 후 각 인스턴스가 정상으로 보고된 직후 인스턴스가 트래픽의 동등한 공유를 받는다는 것을 관찰합니다. 애플리케이션은 애플리케이션 캐시가 채워지는 동안 트래픽의 점진적으로 증가하는 공유를 받아야 합니다. 어떤 솔루션이 이 요구사항을 만족합니까?",
    "options": {
      "A": "slow_start.duration_seconds 대상 그룹 속성을 120초로 변경합니다. 인스턴스를 재부팅하기 전에 대상 그룹에서 인스턴스를 등록 해제합니다. 인스턴스를 재부팅한 후 대상 그룹에 인스턴스를 등록합니다.",
      "B": "HealthCheckTimeoutSeconds 파라미터를 대상 그룹에서 120초로 변경합니다. 인스턴스를 재부팅하기 전에 대상 그룹에서 인스턴스를 등록 해제합니다. 인스턴스를 재부팅한 후 대상 그룹에 인스턴스를 등록합니다.",
      "C": "헬스 체크 상태를 모니터링하도록 Amazon CloudWatch 알람을 구성합니다. 헬스 체크가 실패하면 EC2 인스턴스를 재시작하도록 알람의 조치를 구성합니다. loadbalancing.algorithm.type 대상 그룹 속성을 weighted_random으로 변경합니다.",
      "D": "Amazon EC2 Auto Scaling 그룹을 생성합니다. 기존 EC2 인스턴스를 Auto Scaling 그룹에 연결합니다. EC2 Auto Scaling 라이프사이클 훅을 구성하여 시작 인스턴스를 Pending Wait 상태로 이동합니다. 로컬 캐시가 채워질 때 라이프사이클 훅을 완료하도록 애플리케이션을 업데이트합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ slow_start.duration_seconds — ALB가 새 인스턴스의 트래픽을 점진적으로 증가시키는 기능 (0~900초)\n▸ Deregister/Register Cycle — 인스턴스 재부팅 시 대상 그룹에서 제거 후 재등록 (Slow Start 재시작)\n▸ Health Check Grace Period — 인스턴스 시작 후 헬스 체크 기간 (기본 300초)\n▸ Warm-up Period — \"Slow Start\"와 동의어\n\n【정답 포인트】\n▸ 문제 분석: \"애플리케이션 초기화 2분 필요\" but \"헬스 체크 통과는 수초\" → 즉시 트래픽 수신\n▸ Slow Start 기능:\n  - 새 인스턴스 등록 → 초기 트래픽 0%에서 시작\n  - 설정된 기간(120초) 동안 트래픽 선형 증가\n  - 120초 후 정상 로드 밸런싱 → 동등한 공유\n▸ 재부팅 프로세스:\n  1. 인스턴스 deregister (대상 그룹에서 제거) → 현재 연결 drain\n  2. 인스턴스 재부팅 (2분 소요)\n  3. 인스턴스 register (다시 추가) → Slow Start 카운터 0초부터 시작\n  4. 120초 동안 점진적 트래픽 증가 → 캐시 채우기 완료 시점과 일치\n\n【오답 체크】\n(B) HealthCheckTimeoutSeconds는 헬스 체크 응답 대기 시간이며, 트래픽 증가 스케줄과 무관\n(C) CloudWatch 알람 + weighted_random은 느린 시작과 무관, 오히려 부하 불균형 가능\n(D) Auto Scaling 라이프사이클 훅은 애플리케이션 코드 수정 필요 (관리 오버헤드 증가)\n\n【시험 포인트】\n▸ slow_start.duration_seconds 값 선택: 애플리케이션 워밍업 시간과 일치\n▸ deregister → reboot → register 순서 필수: deregister 없이 재부팅하면 Slow Start 미작동\n▸ ALB 알고리즘: least_outstanding_requests (기본), round_robin, weighted_random\n▸ 다른 ALB 기능들:\n  - Stickiness: 사용자를 동일 대상으로 유지\n  - Deregistration Delay(연결 drain): 기존 연결 완료 대기\n  - Health Check Healthy/Unhealthy Threshold: 상태 판정 회수\n▸ SOA 시험: \"점진적 증가\", \"워밍업\" → slow_start.duration_seconds",
    "en_q": "An application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The application takes up to 2 minutes to populate a local cache after the application is started. The application reports as healthy in the target group health check a few seconds after starting. A CloudOps engineer observes that after some of the instances are rebooted, the instances receive an equal share of the traffic immediately after each instance reports as healthy. The application needs to receive a gradually increasing share of the traffic while the application cache is populated. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Change the slow_start.duration_seconds target group attribute to 120 seconds. Before rebooting the instances, deregister the instances from the target group. After rebooting the instances, register the instances with the target group.",
      "B": "Change the HealthCheckTimeoutSeconds paramotor in the target group to 120 seconds. Before rebooting the instances, deregister the instances from the target group. After rebooting the instances, register the instances with the target group.",
      "C": "Configure an Amazon CloudWatch alarm to monitor the health check status. Configure the action of the alarm to restart an EC2 instance if a health check fails. Change the loadbalancing.algorithm.type target group attribute to be weighted_random.",
      "D": "Create an Amazon EC2 Auto Scaling group. Attach the existing EC2 instances to the Auto Scaling group. Configure an EC2 Auto Scaling lifecycle hook to move starting instances to the Pending Wait state. Update the application to complete the lifecycle hook when the local cache has been populated."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369155-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 54,
    "question": "한 기업이 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 애플리케이션은 Amazon Aurora PostgreSQL 데이터베이스에서 데이터를 저장하고 검색합니다. 개발자가 실수로 데이터베이스에서 테이블을 삭제하여 애플리케이션 오류를 발생시킵니다. 2시간 후 CloudOps 엔지니어는 데이터를 복구하고 애플리케이션을 다시 작동시켜야 합니다. 어떤 솔루션이 이 요구사항을 만족합니까?",
    "options": {
      "A": "Aurora Backtrack 기능을 사용하여 데이터베이스를 2시간 전의 특정 시간으로 되감습니다.",
      "B": "기존 데이터베이스에 시점 복구를 수행하여 데이터베이스를 2시간 전의 특정 시간으로 복원합니다.",
      "C": "시점 복구를 수행하고 새 데이터베이스를 생성하여 데이터베이스를 2시간 전의 특정 시간으로 복원합니다. 애플리케이션을 새 데이터베이스 엔드포인트를 사용하도록 재구성합니다.",
      "D": "새 Aurora 클러스터를 생성합니다. S3 버킷에서 데이터 복원 옵션을 선택합니다. 2시간 전의 실패 시간까지의 로그 파일을 선택합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Aurora Backtrack — 기존 DB 클러스터를 이전 시간으로 \"되감기\" (클러스터 자체 수정)\n▸ Point-in-Time Recovery (PITR) — 특정 시점 백업에서 복구 (기존 or 새 클러스터)\n▸ Backup Window — 자동 일일 백업 기간 (기본 유지 기간 35일)\n▸ Application Connectivity — 애플리케이션이 DB 엔드포인트를 통해 연결\n\n【정답 포인트】\n▸ Aurora Backtrack의 제약:\n  - 동일 클러스터를 물리적으로 되감기 (기존 엔드포인트 유지)\n  - but 되감는 동안 클러스터는 오프라인 상태 (다운타임 발생)\n  - 업무 연속성 무시\n▸ 기존 DB에 PITR: 불가능 (복구 중 기존 DB는 사용 불가)\n▸ 새 DB 생성 후 PITR (정답):\n  1. PITR로 새로운 Aurora 클러스터 생성 (2시간 전 시점)\n  2. 기존 클러스터는 삭제된 상태 유지 (또는 병렬 운영)\n  3. 애플리케이션 엔드포인트 변경 → 새 클러스터로 즉시 전환\n  4. 다운타임 최소화 (엔드포인트 변경 시간만)\n▸ 효과: 기존 데이터 손실 방지, 애플리케이션 즉시 복구\n\n【오답 체크】\n(A) Backtrack은 2시간 이내 되감기 가능하나, 기존 클러스터 오프라인 필요 (다운타임)\n(B) 기존 DB에 PITR 불가능 (새 DB가 아닌 기존 수정 불가)\n(D) S3에서 복원은 전체 DB 마이그레이션 기능이며, 2시간 전 시점 복원 구성 복잡\n\n【시험 포인트】\n▸ Aurora 복구 전략:\n  - 짧은 다운타임 허용 → Backtrack (빠름, 동일 엔드포인트)\n  - 다운타임 최소화 → 새 DB + 엔드포인트 전환 (PITR)\n▸ PITR 설정: 자동 일일 백업 + 트랜잭션 로그 보관 (기본 35일)\n▸ 애플리케이션 고가용성: 단일 엔드포인트가 아닌 connection pooling/DNS 기반 구조\n▸ 클러스터 엔드포인트 타입:\n  - Cluster Endpoint (Reader + Writer 모두 지원) → 자동 failover 불가\n  - Instance Endpoint (특정 인스턴스) → 프라이머리/레플리카 구분\n▸ SOA 시험: 재해 복구 시나리오에서 \"다운타임 최소화\" → 새 DB 생성이 정답",
    "en_q": "A company runs an application on Amazon EC2 instances. The application stores and retrieves data from an Amazon Aurora PostgreSQL database. A developer accidentally drops a table from the database, which causes application errors. Two hours later, a CloudOps engineer needs to recover the data and make the application function again. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Use the Aurora Backtrack feature to rewind the database to a specified time, 2 hours in the past.",
      "B": "Perform a point-in-time recovery on the existing database to restore the database to a specified point in time, 2 hours in the past.",
      "C": "Perform a point-in-time recovery and create a new database to restore the database to a specified point in time, 2 hours in the past. Reconfigure the application to use a new database endpoint.",
      "D": "Create a new Aurora cluster. Choose the Restore data from S3 bucket option. Choose log files up to the failure time 2 hours in the past."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369222-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 55,
    "question": "한 기업이 AWS에서 여러 워크로드를 실행합니다. 기업은 특정 AWS 지역에서 모니터링할 5개의 AWS Trusted Advisor 서비스 할당량 메트릭을 식별합니다. 기업은 리소스 사용량이 서비스 할당량의 60%를 초과할 때마다 이메일 알림을 받기를 원합니다. 어떤 솔루션이 이 요구사항을 만족합니까?",
    "options": {
      "A": "각 Trusted Advisor 서비스 할당량 메트릭마다 하나씩 5개의 Amazon CloudWatch 알람을 생성합니다. 리소스 사용량이 서비스 할당량의 60%를 초과할 때마다 Amazon Simple Notification Service(Amazon SNS) 주제로 알림을 게시하도록 알람을 구성합니다.",
      "B": "각 Trusted Advisor 서비스 할당량 메트릭마다 하나씩 5개의 Amazon CloudWatch 알람을 생성합니다. 리소스 사용량이 서비스 할당량의 60%를 초과할 때마다 Amazon Simple Queue Service(Amazon SQS) 큐로 알림을 게시하도록 알람을 구성합니다.",
      "C": "AWS Health Dashboard를 사용하여 각 Trusted Advisor 서비스 할당량 메트릭을 모니터링합니다. 리소스 사용량이 서비스 할당량의 60%를 초과할 때마다 Amazon Simple Queue Service(Amazon SQS) 큐로 알림을 게시하도록 구성합니다.",
      "D": "AWS Health Dashboard를 사용하여 각 Trusted Advisor 서비스 할당량 메트릭을 모니터링합니다. 리소스 사용량이 서비스 할당량의 60%를 초과할 때마다 Amazon Simple Notification Service(Amazon SNS) 주제로 알림을 게시하도록 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Trusted Advisor — AWS 계정의 비용, 성능, 보안, 장애 허용, 서비스 할당량 검사 서비스\n▸ Service Quota Checks — Trusted Advisor의 5가지 범주 중 하나 (할당량 사용률 모니터링)\n▸ CloudWatch Alarms — 임계값 기반 알림 및 자동화 작업\n▸ SNS vs SQS — SNS: 즉시 알림(이메일), SQS: 메시지 큐(비동기)\n\n【정답 포인트】\n▸ Trusted Advisor 메트릭은 CloudWatch로 내보내기 가능\n▸ CloudWatch 알람 구성:\n  - 5개 메트릭 = 5개 알람 필요\n  - Metric: Trusted Advisor Service Quota (할당량별)\n  - Threshold: 60% (리소스 사용률)\n  - Action: SNS Publish → 이메일 알림\n▸ SNS 선택 이유: \"이메일 알림\" 명시 → SNS가 이메일 구독 지원\n▸ 자동화: CloudWatch가 매우 적합 (일회성 체크 아닌 지속적 모니터링)\n\n【오답 체크】\n(B) SQS는 메시지 큐로 \"이메일 알림\" 미지원 (별도 Lambda 처리 필요)\n(C) AWS Health Dashboard는 AWS 계정 상태 변화만 모니터링하며, 커스텀 임계값 설정 불가\n(D) Health Dashboard도 마찬가지로 할당량 메트릭 기반 모니터링 불가\n\n【시험 포인트】\n▸ Trusted Advisor 메트릭 내보내기:\n  - AWS Support 플랜 등급에 따라 제한 (Full Check는 Business/Enterprise)\n  - CloudWatch로 자동 내보내기 지원\n▸ CloudWatch 알람 구성 패턴:\n  - 비용/성능 문제: SNS → 이메일\n  - 시스템 통합: SQS → Lambda → 자동화\n  - 모니터링만: CloudWatch Logs\n▸ 서비스 할당량 모니터링 방법 2가지:\n  1. Service Quotas Console (AWS 네이티브) — 현재 사용률, 요청\n  2. Trusted Advisor (관리형) — 권장사항 + CloudWatch 연동\n▸ SOA 시험: \"이메일 알림\" → SNS, \"즉시 알림\" → SNS, \"나중 처리\" → SQS",
    "en_q": "A company runs several workloads on AWS. The company identifies five AWS Trusted Advisor service quota metrics to monitor in a specific AWS Region. The company wants to receive email notification each time resource usage exceeds 60% of one of the service quotas. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create five Amazon CloudWatch alarms, one for each Trusted Advisor service quota metric. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification each time that usage exceeds 60% of one of the service quotas.",
      "B": "Create five Amazon CloudWatch alarms, one for each Trusted Advisor service quota metric. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification each time that usage exceeds 60% of one of the service quotas.",
      "C": "Use the AWS Health Dashboard to monitor each Trusted Advisor service quota metric. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification each time that usage exceeds 60% of one of the service quotas.",
      "D": "Use the AWS Health Dashboard to monitor each Trusted Advisor service quota metric. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification each time that usage exceeds 60% of one of the service quotas."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369156-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 56,
    "question": "CloudOps 엔지니어가 Amazon CloudWatch Synthetics의 구현을 문제 해결 중입니다. CloudWatch Synthetics 결과를 Amazon S3 버킷으로 전송해야 합니다. CloudOps 엔지니어는 인터넷 게이트웨이가 연결된 VPC에서 실행되는 기존 카나리의 구성을 복사했습니다. 그러나 CloudOps 엔지니어는 인터넷 액세스가 없는 프라이빗 VPC에서 카나리를 성공적으로 시작할 수 없습니다. CloudOps 엔지니어는 프라이빗 VPC에서 카나리를 성공적으로 실행하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "VPC의 DNS 해석 옵션과 DNS 호스트명 옵션이 켜져 있는지 확인합니다. CloudWatch Synthetics에 synthetics:GetCanaryRuns 권한을 추가합니다. S3 버킷에서 CloudWatch Synthetics 역할에 IgnorePublicAcls 권한을 추가합니다.",
      "B": "VPC의 DNS 해석 옵션과 DNS 호스트명 옵션이 꺼져 있는지 확인합니다. Amazon S3에 대한 게이트웨이 VPC 엔드포인트를 생성합니다. CloudWatch Synthetics이 S3 엔드포인트를 사용할 수 있도록 권한을 추가합니다.",
      "C": "VPC의 DNS 해석 옵션과 DNS 호스트명 옵션이 꺼져 있는지 확인합니다. DNS 포트의 아웃바운드 트래픽을 허용하는 카나리에 보안 그룹을 추가합니다. CloudWatch Synthetics이 S3 버킷에 쓸 수 있도록 권한을 추가합니다.",
      "D": "VPC의 DNS 해석 옵션과 DNS 호스트명 옵션이 켜져 있는지 확인합니다. CloudWatch에 대한 인터페이스 VPC 엔드포인트를 생성합니다. Amazon S3에 대한 게이트웨이 VPC 엔드포인트를 생성합니다. CloudWatch Synthetics이 두 엔드포인트를 모두 사용할 수 있도록 권한을 추가합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ VPC Endpoint — AWS 서비스에 프라이빗 연결 (인터넷 게이트웨이 불필요)\n▸ Gateway Endpoint — S3, DynamoDB용 (서브넷 라우트 테이블에 추가)\n▸ Interface Endpoint — 대부분의 AWS 서비스용 (ENI 기반, 보안 그룹 필요)\n▸ CloudWatch Synthetics — API 호출(모니터링) + S3 쓰기(결과 저장)\n▸ DNS Hostnames — VPC 내 리소스가 퍼블릭 DNS 이름을 가질 수 있는 옵션\n\n【정답 포인트】\n▸ CloudWatch Synthetics의 2가지 필요 통신:\n  1. CloudWatch API 호출 (카나리 상태 보고, 메트릭 전송)\n  2. S3 버킷 쓰기 (카나리 결과 저장)\n▸ 프라이빗 VPC 설정:\n  - \"인터넷 액세스 없음\" → NAT Gateway/인터넷 게이트웨이 불가\n  - 대신 VPC Endpoint로 AWS 서비스 접근\n▸ DNS 해석 활성화 필수:\n  - DNS Resolution: ON → VPC가 Route 53 resolver 사용\n  - DNS Hostnames: ON → 리소스가 DNS 이름 할당받음\n  - 엔드포인트도 DNS 이름으로 접근 (IP 주소 대신)\n▸ 엔드포인트 요구사항:\n  - Interface Endpoint for CloudWatch: 모니터링 API 호출용\n  - Gateway Endpoint for S3: 결과 저장용\n  - 둘 다 필수 (하나만으로 불완전)\n\n【오답 체크】\n(A) 권한만으로는 네트워크 연결 불가 (엔드포인트 없음)\n(B) DNS Hostnames OFF는 잘못됨 (엔드포인트 접근 불가), Gateway Endpoint만으로 S3만 가능 (CloudWatch 미포함)\n(C) DNS Hostnames OFF는 잘못됨, CloudWatch API 호출용 엔드포인트 없음\n\n【시험 포인트】\n▸ VPC Endpoint 선택 기준:\n  - S3, DynamoDB → Gateway Endpoint (S3는 둘 다 지원)\n  - CloudWatch, CloudFormation, EC2, RDS, 등 대부분 → Interface Endpoint\n▸ CloudWatch Synthetics 구성 체크리스트:\n  1. VPC 내 서브넷에 배포\n  2. DNS Resolution = ON, DNS Hostnames = ON\n  3. Interface Endpoint for CloudWatch (모든 CloudWatch API)\n  4. Gateway Endpoint for S3 (또는 Interface Endpoint)\n  5. IAM Role: s3:PutObject 권한 (결과 저장)\n▸ Interface Endpoint는 보안 그룹으로 접근 제어 가능\n▸ SOA 시험: \"프라이빗 VPC\" + \"외부 서비스 접근\" → VPC Endpoint 조합",
    "en_q": "A CloudOps engineer is troubleshooting an implementation of Amazon CloudWatch Synthetics. The CloudWatch Synthetics results must be sent to an Amazon S3 bucket. The CloudOps engineer has copied the configuration of an existing canary that runs on a VPC that has an internet gateway attached. However, the CloudOps engineer cannot get the canary to successfully start on a private VPC that has no internet access. What should the CloudOps engineer do to successfully run the canary on the private VPC?",
    "en_opts": {
      "A": "Ensure that the DNS resolution option and the DNS hostnames option are turned on in the VPC. Add the synthetics:GetCanaryRuns permission to the VPC. On the S3 bucket, add the IgnorePublicAcls permission to the CloudWatch Synthetics role.",
      "B": "Ensure that the DNS resolution option and the DNS hostnames option are turned off in the VPC. Create a gateway VPC endpoint for Amazon S3. Add the permissions to allow CloudWatch Synthetics to use the S3 endpoint.",
      "C": "Ensure that the DNS resolution option and the DNS hostnames option are turned off in the VPAdd a security group to the canary to allow outbound traffic on the DNS port. Add the permissions to allow CloudWatch Synthetics to write to the S3 bucket.",
      "D": "Ensure that the DNS resolution option and the DNS hostnames option are turned on in the VPC. Create an interface VPC endpoint for CloudWatch. Create a gateway VPC endpoint for Amazon S3. Add the permissions to allow CloudWatch Synthetics to use both endpoints."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369157-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 57,
    "question": "한 기업이 인터넷 게이트웨이가 있는 VPC에 AWS 인프라를 배포합니다. VPC에는 공개 서브넷과 프라이빗 서브넷이 있습니다. Amazon RDS for MySQL DB 인스턴스는 프라이빗 서브넷에 배포됩니다. AWS Lambda 함수는 동일한 프라이빗 서브넷을 사용하고 DB 인스턴스에 연결하여 데이터를 쿼리합니다. 개발자가 Lambda 함수를 수정하여 Amazon Simple Queue Service(Amazon SQS) 큐에 메시지를 게시하도록 함수가 필요하게 합니다. 이러한 변경 후 Lambda 함수는 SQS 큐에 메시지를 게시하려고 할 때 시간을 초과합니다. 이 문제를 해결할 솔루션은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Lambda 함수가 VPC에 연결되지 않도록 Lambda 함수를 재구성합니다.",
      "B": "RDS 프록시를 배포합니다. Lambda 함수를 구성하여 프록시를 통해 DB 인스턴스에 연결하도록 합니다.",
      "C": "NAT 게이트웨이를 배포합니다. 모든 트래픽을 NAT 게이트웨이로 라우팅하도록 프라이빗 서브넷의 라우트 테이블을 업데이트합니다.",
      "D": "VPC에서 Amazon SQS에 대한 인터페이스 엔드포인트를 생성합니다.",
      "E": "VPC에서 Amazon SQS에 대한 게이트웨이 엔드포인트를 생성합니다."
    },
    "answer": "CD",
    "explanation": "【핵심 용어】\n▸ VPC Lambda — Lambda가 VPC 서브넷에서 실행되어 RDS, ElastiCache 등 접근 가능\n▸ NAT Gateway — 프라이빗 서브넷의 아웃바운드 트래픽을 공개 IP로 변환 (인터넷 접근)\n▸ Interface Endpoint — 프라이빗 네트워크를 통해 AWS API 호출 (SQS 포함)\n▸ Gateway Endpoint — S3, DynamoDB만 지원 (SQS 미지원)\n\n【정답 포인트】\n▸ 문제 분석:\n  - Lambda: 프라이빗 서브넷 → 인터넷 접근 불가\n  - RDS 쿼리: 프라이빗 서브넷 내 RDS와 직접 통신 (OK)\n  - SQS 메시지 게시: AWS 서비스 API 호출 → 인터넷 필요 (FAIL)\n▸ 2가지 해결책:\n  1. NAT Gateway\n(C) : 프라이빗 → 아웃바운드 인터넷 접근 가능\n     - 라우트 테이블: 0.0.0.0/0 → NAT Gateway\n     - Lambda → SQS API (퍼블릭) 호출 가능\n  2. Interface Endpoint for SQS\n(D) : 프라이빗 네트워크 내 SQS API 엔드포인트\n     - VPC 내 ENI로 SQS 접근 (인터넷 불필요)\n     - Lambda → SQS 엔드포인트 → SQS 통신\n\n【오답 체크】\n(A) VPC 분리하면 RDS 접근 불가 → 요구사항 위반\n(B) RDS Proxy는 DB 연결 풀링용이며, SQS 접근과 무관\n(E) Gateway Endpoint는 S3/DynamoDB만 지원, SQS 미지원\n\n【시험 포인트】\n▸ VPC Lambda의 아웃바운드 패턴:\n  - 같은 VPC 리소스 (RDS, ElastiCache): 직접 통신 (라우트 테이블 필요)\n  - AWS 서비스 API (S3, SQS, SNS): 2가지 방법\n    1. NAT Gateway (공개 IP로 인터넷 통신)\n    2. VPC Endpoint (프라이빗 네트워크)\n▸ VPC Endpoint 지원 서비스:\n  - Gateway: S3, DynamoDB\n  - Interface: CloudWatch, CloudFormation, SQS, SNS, Kinesis, Secrets Manager 등\n▸ NAT Gateway vs VPC Endpoint:\n  - NAT: 모든 아웃바운드 트래픽 처리, 시간 비용, 데이터 전송 비용\n  - Endpoint: 특정 서비스만, 고정 비용 또는 무료 (S3/DynamoDB)\n▸ 다중 선택: 두 방법 모두 유효한 솔루션 (선택)하나 또는 둘 다 가능)\n▸ SOA 시험: \"VPC Lambda\" + \"AWS 서비스 접근 불가\" → NAT 또는 Endpoint",
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
    "question": "회사의 보안 정책은 SSH 트래픽을 정의된 주소 집합으로만 제한해야 합니다. 회사는 AWS Config 규칙을 사용하여 보안 그룹이 제한되지 않은 들어오는 SSH 트래픽을 허용하는지 확인합니다. CloudOps 엔지니어가 비준수 리소스를 발견하고 수동으로 보안 그룹을 수정합니다. CloudOps 엔지니어는 다른 비준수 리소스의 수정을 자동화하려고 합니다. 이 요구사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Config 규칙의 상태 메트릭에 대한 Amazon CloudWatch 알람을 생성합니다. 보안 그룹에서 비준수 규칙을 제거할 수 있는 AWS Lambda 함수를 생성합니다. 알람 작업을 Lambda 함수를 호출하도록 구성합니다.",
      "B": "AWS Config 규칙에서 자동 수정 작업을 구성합니다. AWS-DisableIncomingSSHOnPort22 수정 작업을 지정합니다.",
      "C": "AWS Config 구성 항목 변경 이벤트에 대해 Amazon EventBridge 규칙을 구성합니다. 보안 그룹에서 비준수 규칙을 제거할 수 있는 AWS Lambda 함수를 생성합니다. 규칙을 Lambda 함수를 호출하도록 구성합니다.",
      "D": "보안 그룹의 인바운드 규칙을 분석하여 제한되지 않은 SSH 액세스를 확인할 수 있는 AWS Lambda 함수를 생성합니다. 비준수 규칙을 제거하도록 Lambda 함수를 구성합니다. 매시간 Lambda 함수를 호출하도록 Amazon EventBridge 규칙을 구성합니다."
    },
    "answer": "B",
    "explanation": "이 문제는 AWS Config의 자동 수정(Automatic Remediation) 기능의 이해를 테스트합니다. AWS Config는 AWS Systems Manager 문서를 활용하여 비준수 리소스를 자동으로 수정할 수 있습니다. 'AWS-DisableIncomingSSHOnPort22'는 이러한 용도를 위해 AWS에서 제공하는 관리형 문서입니다.\n\n옵션 A는 CloudWatch 알람을 사용하여 메트릭 기반 자동화를 시도하는데, 이는 구성 규칙 위반에 직접 대응하는 방식이 아닙니다.\n\n옵션 C는 EventBridge를 통한 이벤트 기반 처리인데, Config 규칙 자체의 내장 수정 기능보다 복잡합니다.\n\n옵션 D는 시간 기반 스케줄 실행으로, 실시간 수정이 아니므로 효율성이 떨어집니다. AWS Config의 자동 수정은 규칙 위반이 감지되자마자 즉각 대응하므로 가장 효율적입니다.",
    "en_q": "A company's security policy requires incoming SSH traffic to be restricted to a defined set of addresses. The company is using an AWS Config rule to check whether security groups allow unrestricted incoming SSH traffic. A CloudOps engineer discovers a noncompliant resource and fixes the security group manually. The CloudOps engineer wants to automate the remediation of other noncompliant resources. What is the MOST operationally efficient solution that meets these requirements?",
    "en_opts": {
      "A": "Create an Amazon CloudWatch alarm for the AWS Config rule's status metric. Create an AWS Lambda function that can remove the noncompliant rule from the security group. Configure the alarm action to invoke the Lambda function.",
      "B": "Configure an automatic remediation action on the AWS Config rule. Specify the AWS-DisableIncomingSSHOnPort22 remediation action.",
      "C": "Configure an Amazon EventBridge rule for AWS Config configuration item change events. Create an AWS Lambda function that can remove the noncompliant rule from the security group Configure the rule to invoke the Lambda function.",
      "D": "Create an AWS Lambda function that can analyze a security group's inbound rules to check for unrestricted SSH access. Configure the Lambda function to remove the noncompliant rule from the security group. Configure an Amazon EventBridge rule to invoke the Lambda function every hour."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/369158-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 59,
    "question": "CloudOps 엔지니어는 Amazon CloudFront 웹 배포, Application Load Balancer(ALB), Amazon RDS, VPC의 Amazon EC2를 사용하여 웹 애플리케이션을 유지합니다. 모든 서비스에 로깅이 활성화되어 있습니다. CloudOps 엔지니어는 웹 애플리케이션의 HTTP Layer 7 상태 코드를 조사해야 합니다. 상태 코드를 포함하는 로그 소스는 무엇입니까? (2개를 선택하세요)",
    "options": {
      "A": "VPC Flow Logs",
      "B": "AWS CloudTrail logs",
      "C": "ALB access logs",
      "D": "CloudFront access logs",
      "E": "RDS logs"
    },
    "answer": "CD",
    "explanation": "HTTP Layer 7 상태 코드는 애플리케이션 계층의 HTTP 응답 코드(200, 404, 500 등)를 의미합니다.\n\nVPC Flow Logs는 Layer 3/4 네트워크 트래픽만 기록하므로 HTTP 상태 코드 정보를 포함하지 않습니다.\n\nCloudTrail은 AWS API 호출 이력을 추적하는 것이지, 애플리케이션의 HTTP 응답을 기록하지 않습니다.\n\nRDS 로그는 데이터베이스 활동을 기록할 뿐 HTTP 상태 코드를 포함하지 않습니다.\n\n반면 ALB(Application Load Balancer)는 Layer 7에서 작동하므로 접근 로그에 HTTP 상태 코드(요청한 HTTP 메서드, URI, 응답 코드)를 기록합니다.\n\nCloudFront도 웹 배포 수준에서 HTTP 요청/응답을 처리하므로 CloudFront 접근 로그에 HTTP 상태 코드가 포함됩니다.",
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
    "question": "오류가 있는 프로세스는 전체 프로세서를 사용하고 100%로 실행되는 것으로 알려져 있습니다. CloudOps 엔지니어는 이 문제가 2분 이상 지속될 때 Amazon EC2 인스턴스를 자동으로 재시작하려고 합니다. 어떻게 수행할 수 있습니까?",
    "options": {
      "A": "기본 모니터링을 사용하여 EC2 인스턴스에 대한 Amazon CloudWatch 알람을 생성합니다. 인스턴스를 재시작하는 작업을 추가합니다.",
      "B": "자세한 모니터링을 사용하여 EC2 인스턴스에 대한 Amazon CloudWatch 알람을 생성합니다. 인스턴스를 재시작하는 작업을 추가합니다.",
      "C": "매 2분마다 예약된 기반으로 호출되는 EC2 인스턴스를 재시작하는 AWS Lambda 함수를 생성합니다.",
      "D": "EC2 health checks로 호출되는 EC2 인스턴스를 재시작하는 AWS Lambda 함수를 생성합니다."
    },
    "answer": "B",
    "explanation": "이 문제는 CloudWatch 알람을 사용한 자동 인스턴스 복구의 개념을 테스트합니다.\n\n기본 모니터링(Basic Monitoring)은 5분 간격의 메트릭을 제공하는 반면, 자세한 모니터링(Detailed Monitoring)은 1분 간격의 메트릭을 제공합니다.\n\n문제에서 '2분 이상 지속될 때'라고 명시했으므로, 1분 간격의 메트릭을 수집할 수 있는 자세한 모니터링이 필요합니다.\n\n기본 모니터링으로는 CPU 상태 변화를 2분 단위로 정확히 포착할 수 없습니다.\n\nCloudWatch 알람은 설정된 임계값을 초과할 때 자동으로 작업을 수행하므로 실시간 대응이 가능합니다.\n\n옵션 C와 D는 시간 기반 또는 health check 기반이라 요구사항을 충족하지 않습니다.",
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
    "question": "CloudOps 엔지니어는 여러 IAM 사용자에게 IAM 정책을 연결하여 AWS 서비스에 액세스를 제공하려고 합니다. CloudOps 엔지니어는 또한 정책을 변경하고 새 버전을 생성할 수 있기를 원합니다. 이 요구사항을 충족하는 작업 조합은 무엇입니까? (2개를 선택하세요)",
    "options": {
      "A": "사용자를 IAM 서비스 연결 역할에 추가합니다. 정책을 역할에 연결합니다.",
      "B": "사용자를 IAM 사용자 그룹에 추가합니다. 정책을 그룹에 연결합니다.",
      "C": "AWS 관리형 정책을 생성합니다.",
      "D": "고객 관리형 정책을 생성합니다.",
      "E": "인라인 정책을 생성합니다."
    },
    "answer": "BD",
    "explanation": "이 문제는 IAM 정책 관리 방식과 다중 사용자에게의 정책 배포 전략을 테스트합니다. 여러 사용자에게 동일한 정책을 적용하면서 버전 관리가 가능해야 합니다. 옵션 B(IAM 사용자 그룹)는 다중 사용자에게 정책을 일괄 적용할 수 있는 표준 방법입니다. 옵션 D(고객 관리형 정책)는 사용자가 생성하고 관리하는 독립 정책으로, 버전 관리 기능을 지원하여 정책 변경 시 이전 버전으로 롤백할 수 있습니다.\n\n옵션 A는 서비스 연결 역할로, AWS 서비스가 관리하므로 사용자가 수정할 수 없습니다.\n\n옵션 C는 AWS 관리형 정책으로 AWS가 업데이트하므로 버전 관리를 사용자가 제어할 수 없습니다.\n\n옵션 E는 인라인 정책으로 개별 사용자에게만 적용되므로 다중 관리가 어렵습니다.",
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
    "question": "회사는 Amazon EC2 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 장시간 실행되는 부팅 스크립트로 인해 규모 확장 작업에 시간이 오래 걸립니다. CloudOps 엔지니어는 Auto Scaling 그룹을 과도하게 프로비저닝하지 않으면서 규모 확장 작업에 필요한 시간을 줄이는 솔루션을 구현해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "출시 구성을 변경하여 더 큰 인스턴스 크기를 사용합니다.",
      "B": "Auto Scaling 그룹의 최소 인스턴스 수를 증가시킵니다.",
      "C": "Auto Scaling 그룹에 예측 스케일링 정책을 추가합니다.",
      "D": "Auto Scaling 그룹에 warm pool을 추가합니다."
    },
    "answer": "D",
    "explanation": "Warm Pool은 EC2 Auto Scaling의 기능으로, 미리 구성된 인스턴스들을 준비 상태로 유지하다가 스케일아웃 필요 시 빠르게 활성화하는 메커니즘입니다. 부팅 스크립트로 인한 지연을 피할 수 있으므로 응답 시간을 크게 단축할 수 있습니다.\n\n옵션 A는 인스턴스 크기 변경으로 부팅 시간 문제를 해결하지 못합니다.\n\n옵션 B는 항상 최소 개수의 인스턴스를 실행하므로 과도한 프로비저닝이 되어 비용 증가를 초래합니다. 옵션 C의 예측 스케일링은 미래의 부하를 예측하여 미리 스케일아웃하는 기능이지만, 각 인스턴스의 부팅 시간 자체는 단축하지 못합니다. Warm Pool은 과도한 프로비저닝 없이(필요할 때만 활성화) 빠른 대응을 가능하게 합니다.",
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
    "question": "CloudOps 엔지니어는 공용 서브넷과 비공개 서브넷을 포함하는 새로운 VPC를 생성합니다. CloudOps 엔지니어는 비공개 서브넷에 11개의 Amazon EC2 인스턴스를 성공적으로 시작합니다. CloudOps 엔지니어는 동일한 서브넷에 하나의 EC2 인스턴스를 더 시작하려고 시도합니다. 그러나 CloudOps 엔지니어는 사용 가능한 무료 IP 주소가 부족하다는 오류 메시지를 받습니다. CloudOps 엔지니어가 더 많은 EC2 인스턴스를 배포하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "비공개 서브넷을 편집하여 CIDR 블록을 /27로 변경합니다.",
      "B": "비공개 서브넷을 편집하여 두 번째 가용 영역에 확장합니다.",
      "C": "추가 탄력적 IP 주소를 비공개 서브넷에 할당합니다.",
      "D": "필요한 EC2 인스턴스를 보유할 새로운 비공개 서브넷을 생성합니다."
    },
    "answer": "D",
    "explanation": "VPC의 서브넷은 생성 후 CIDR 블록을 축소할 수 없습니다. 서브넷은 AWS에서 관리 목적으로 예약한 5개의 IP 주소를 포함합니다(네트워크 주소, 라우터, DNS, 향후 사용, 브로드캐스트). 11개 인스턴스가 11개의 IP를 사용하면 최소 16개 이상의 IP가 필요한 서브넷(/28 이상)이어야 합니다.\n\n옵션 A는 CIDR을 /27로 변경하면 더 적은 주소 공간을 제공하므로 역효과입니다.\n\n옵션 B는 기존 서브넷을 다른 AZ로 확장할 수 없습니다(서브넷은 단일 AZ 리소스).\n\n옵션 C는 탄력적 IP는 공개 IP를 위한 것이며 프라이빗 서브넷 IP 부족 문제를 해결하지 못합니다. 옵션 D만이 추가 IP 주소 공간을 제공합니다.",
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
    "question": "CloudOps 엔지니어는 사용자 정의 애플리케이션 특정 이벤트 세트를 위한 이벤트 인프라를 구축해야 합니다. 이벤트는 처리를 위해 AWS Lambda 함수로 전송되어야 합니다. CloudOps 엔지니어는 이벤트를 기록하여 나중에 이벤트 유형 또는 이벤트 시간별로 재생할 수 있어야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EventBridge 사용자 정의 이벤트 버스를 생성합니다. 사용자 정의 이벤트 버스에서 아카이브를 생성합니다. Lambda 함수로 사용자 정의 이벤트를 전송하는 규칙을 생성합니다.",
      "B": "Amazon EventBridge 기본 이벤트 버스에서 아카이브를 생성합니다. 패턴 매칭을 사용하여 사용자 정의 이벤트를 기록합니다. Lambda 함수로 사용자 정의 이벤트를 전송하는 규칙을 생성합니다.",
      "C": "Amazon EventBridge 기본 이벤트 버스에서 아카이브를 생성합니다. EventBridge 파이프를 생성하여 사용자 정의 이벤트를 수집하고 아카이브에 저장합니다. Lambda 함수로 사용자 정의 이벤트를 전송하는 규칙을 생성합니다.",
      "D": "Amazon CloudWatch Logs에서 로그 그룹을 생성합니다. Lambda 함수 및 로그 그룹으로 사용자 정의 이벤트를 전송하는 Amazon EventBridge 규칙을 생성합니다."
    },
    "answer": "A",
    "explanation": "이 문제는 EventBridge의 아카이브 기능과 사용자 정의 이벤트 버스의 개념을 테스트합니다.\n\n아카이브는 EventBridge에서 이벤트를 저장하고 나중에 재생(Replay)할 수 있는 기능으로, 시간 또는 이벤트 패턴에 기반하여 필터링할 수 있습니다.\n\n애플리케이션 특정 이벤트는 기본 이벤트 버스가 아닌 사용자 정의 이벤트 버스로 관리하는 것이 베스트 프랙티스입니다.\n\n옵션 B와 C는 기본 이벤트 버스를 사용하므로 권장되지 않습니다.\n\n옵션 D는 CloudWatch Logs를 사용하는데, 이는 구조화된 이벤트 재생 기능을 제공하지 않습니다.\n\nEventBridge 아카이브 기능만이 시간/타입 기반 이벤트 재생을 네이티브로 지원합니다.",
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
    "question": "CloudOps 엔지니어는 us-west-2의 회사 기존 인프라의 AWS CloudFormation 템플릿을 가지고 있습니다. CloudOps 엔지니어는 템플릿을 사용하여 eu-west-1에서 새 스택을 시작하려고 시도하지만, 스택은 부분적으로만 배포되고, 오류 메시지를 받은 후 롤백됩니다. 이 템플릿이 배포되지 않는 이유는 무엇입니까? (2개를 선택하세요)",
    "options": {
      "A": "템플릿이 eu-west-1에서 사용할 수 없는 IAM 사용자를 참조했습니다.",
      "B": "템플릿이 eu-west-1에서 사용할 수 없는 Amazon Machine Image(AMI)를 참조했습니다.",
      "C": "템플릿은 리소스를 배포할 수 있는 적절한 수준의 권한이 없습니다.",
      "D": "템플릿이 eu-west-1에 존재하지 않는 서비스를 요청했습니다.",
      "E": "CloudFormation 템플릿은 기존 서비스를 업데이트하는 데만 사용할 수 있습니다."
    },
    "answer": "BD",
    "explanation": "CloudFormation 템플릿의 리전 간 호환성 문제를 다룹니다.\n\n옵션 B는 올바른 답입니다. AMI는 특정 리전 내에만 존재하므로, us-west-2에서 사용 가능한 AMI를 eu-west-1에서 직접 참조하면 배포 실패합니다. 옵션 D도 맞습니다. 일부 AWS 서비스는 특정 리전에만 제공되므로, 지원되지 않는 서비스를 요청하면 배포가 실패합니다.\n\n옵션 A는 부정확합니다. IAM은 글로벌 서비스이므로 리전 제약이 없습니다.\n\n옵션 C는 권한 문제로, 템플릿 자체의 리전 호환성 문제가 아니라 인증 문제입니다.\n\n옵션 E는 거짓입니다. CloudFormation은 새로운 스택 생성과 업데이트 모두에 사용됩니다.",
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
    "question": "회사의 웹사이트는 Amazon EC2 Linux 인스턴스에서 실행됩니다. 웹사이트는 Amazon S3 버킷에서 PDF 파일을 제공해야 합니다. S3 버킷에 대한 모든 공개 액세스는 계정 수준에서 차단됩니다. 회사는 웹사이트 사용자가 PDF 파일을 다운로드할 수 있도록 허용해야 합니다. 이 요구사항을 최소 관리 노력으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "s3:list* 및 s3:get* 권한을 허용하는 정책이 있는 IAM 역할을 생성합니다. 역할을 EC2 인스턴스에 할당합니다. 회사 직원을 지정하여 요청된 PDF 파일을 EC2 인스턴스로 다운로드하고 파일을 웹사이트 사용자에게 전달합니다. 로컬 파일을 주기적으로 삭제하도록 AWS Lambda 함수를 생성합니다.",
      "B": "S3 버킷을 가리키는 origin access control(OAC)을 사용하는 Amazon CloudFront 배포를 생성합니다. CloudFront 배포의 연결을 허용하도록 버킷 정책을 적용합니다. 사용자가 PDF 파일을 요청할 때 사용자에게 배포 URL과 객체 경로를 포함하는 다운로드 URL을 제공하도록 회사 직원을 지정합니다.",
      "C": "원본 S3 버킷에서 공개 액세스를 허용하도록 S3 버킷 권한을 변경합니다. 사용자가 PDF 파일을 요청할 때 사용자에게 PDF 파일 URL을 제공하도록 회사 직원을 지정합니다.",
      "D": "공용 서브넷에 IAM 인스턴스 프로필이 있는 EC2 인스턴스를 배포합니다. EC2 인스턴스에서 서명된 URL을 사용하여 웹사이트 사용자를 위한 S3 버킷에 대한 임시 액세스를 제공합니다."
    },
    "answer": "B",
    "explanation": "이 문제는 공개 액세스 차단 상태에서 안전하게 S3 콘텐츠를 제공하는 방법을 테스트합니다. CloudFront를 OAC(Origin Access Control)와 함께 사용하면 CloudFront만 S3 버킷에 액세스할 수 있으며, 사용자는 공개 인터넷을 통해 직접 접근할 수 없습니다. 이는 최소 관리 노력으로 보안을 유지할 수 있습니다.\n\n옵션 A는 직원의 수동 개입이 필요하므로 확장성이 떨어집니다.\n\n옵션 C는 공개 액세스를 허용하므로 보안 정책에 위배됩니다.\n\n옵션 D는 가능하지만 직원이 서명된 URL을 생성/배포해야 하므로 옵션 B보다 관리 오버헤드가 높습니다. CloudFront + OAC는 자동화되고 확장 가능한 솔루션입니다.",
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
    "question": "금융 서비스 회사는 고객 이미지를 us-east-1 리전의 Amazon S3 버킷에 저장합니다. 규정을 준수하기 위해 회사는 모든 기존 객체가 두 번째 AWS 리전의 S3 버킷으로 복제되도록 해야 합니다. 객체 복제가 실패하는 경우 회사는 객체에 대한 복제를 다시 시도할 수 있어야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 Cross-Region Replication(CRR)을 구성합니다. Amazon S3 live replication을 사용하여 기존 객체를 복제합니다.",
      "B": "Amazon S3 Cross-Region Replication(CRR)을 구성합니다. S3 Batch Replication을 사용하여 기존 객체를 복제합니다.",
      "C": "Amazon S3 Cross-Region Replication(CRR)을 구성합니다. S3 Replication Time Control(S3 RTC)을 사용하여 기존 객체를 복제합니다.",
      "D": "S3 Lifecycle 규칙을 사용하여 객체를 두 번째 리전의 대상 버킷으로 이동합니다."
    },
    "answer": "B",
    "explanation": "S3 CRR 설정 시 기존 객체와 새로운 객체의 처리 방식이 다릅니다.\n\nCRR(Cross-Region Replication)은 기본적으로 설정 이후에 생성되는 새 객체만 복제합니다.\n\n기존 객체를 복제하려면 S3 Batch Replication을 사용해야 합니다.\n\nS3 Batch Replication은 실패한 복제 작업을 재시도하는 기능을 제공합니다.\n\n옵션 A의 'live replication'은 실제 AWS 용어가 아닙니다.\n\n옵션 C의 S3 RTC(Replication Time Control)는 복제 시간을 보장하는 기능이지, 기존 객체 복제나 재시도 메커니즘이 아닙니다.\n\n옵션 D의 Lifecycle 규칙은 객체 이동/삭제 정책으로, 리전 간 복제 기능을 제공하지 않습니다.",
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
    "question": "회사는 메모리 최적화 Amazon EC2 인스턴스를 Network Load Balancer(NLB) 뒤에서 사용하여 애플리케이션을 실행합니다. 회사는 AWS 제공 Red Hat Enterprise Linux(RHEL) Amazon Machine Image(AMI)에서 EC2 인스턴스를 시작했습니다. CloudOps 엔지니어는 5분 간격으로 RAM 사용률을 모니터링해야 합니다. CloudOps 엔지니어는 들어오는 부하에 따라 EC2 인스턴스가 적절하게 스케일 인/아웃되도록 해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스에 대한 자세한 모니터링을 구성합니다. EC2 인스턴스에 Amazon CloudWatch 에이전트를 구성합니다. mem_active 메트릭을 기반으로 하는 EC2 Auto Scaling 그룹 및 Auto Scaling 정책을 생성합니다.",
      "B": "EC2 인스턴스에 대한 자세한 모니터링을 구성합니다. 자세한 모니터링 기능이 제공하는 mem_used_percent 메트릭을 사용합니다. CloudWatch 에이전트가 데이터를 업로드할 수 있도록 하는 IAM 역할을 생성합니다. mem_used_percent 메트릭을 기반으로 하는 EC2 Auto Scaling 그룹 및 Auto Scaling 정책을 생성합니다.",
      "C": "EC2 인스턴스에 대한 기본 모니터링을 구성합니다. EC2 인스턴스에 Amazon CloudWatch 에이전트를 구성합니다. CloudWatch 에이전트가 데이터를 업로드할 수 있도록 하는 IAM 역할을 생성합니다. mem_used_percent 메트릭을 기반으로 하는 EC2 Auto Scaling 그룹 및 Auto Scaling 정책을 생성합니다.",
      "D": "EC2 인스턴스에 대한 기본 모니터링을 구성합니다. 모니터링을 위해 표준 mem_used_percent 메트릭을 사용합니다. mem_used_percent 메트릭을 기반으로 하는 EC2 Auto Scaling 그룹 및 Auto Scaling 정책을 생성합니다."
    },
    "answer": "C",
    "explanation": "메모리 메트릭은 EC2 기본 모니터링(Basic Monitoring)에서 제공되지 않습니다. 메모리, 디스크, 네트워크 인터페이스 세부 정보 등의 커스텀 메트릭을 수집하려면 CloudWatch Agent를 설치해야 합니다. Agent가 데이터를 업로드하려면 IAM 권한이 필요합니다. 5분 간격 모니터링은 기본 모니터링으로도 충분하므로(1분 간격이 아님) 자세한 모니터링을 구성할 필요는 없습니다.\n\n옵션 A는 자세한 모니터링이 불필요하고 mem_active는 CloudWatch 표준 메트릭이 아닙니다.\n\n옵션 B는 자세한 모니터링이 메모리 메트릭을 기본 제공하지 않으므로 잘못되었습니다.\n\n옵션 D는 IAM 역할이 없어 CloudWatch Agent가 메트릭을 업로드할 수 없습니다.\n\n옵션 C가 가장 완전한 솔루션입니다.",
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
    "question": "다국적 회사는 AWS Organizations의 조직을 사용하여 여러 AWS 리전에서 200개 이상의 회원 계정을 관리합니다. 회사는 모든 AWS 리소스가 특정 보안 요구사항을 충족하도록 해야 합니다. 회사는 ap-southeast-2 리전에 EC2 인스턴스를 배포하면 안 됩니다. 회사는 모든 회원 계정의 루트 사용자 작업을 완전히 차단해야 합니다. 회사는 CloudTrail 로그 삭제를 관리자를 포함한 모든 사용자가 차단해야 합니다. 회사는 모든 기존 및 향후 계정에 자동으로 적용할 수 있는 중앙 집중식 관리 솔루션이 필요합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 계정에서 수정 작업이 있는 AWS Config 규칙을 생성하여 정책 위반을 감지합니다. 계정 루트 사용자를 위해 IAM 권한 경계를 구현합니다.",
      "B": "조직 전체에서 AWS Security Hub를 활성화합니다. 보안 요구사항을 적용할 사용자 정의 보안 표준을 생성합니다. AWS CloudFormation StackSets를 사용하여 표준을 조직의 모든 계정에 배포합니다. Security Hub 자동 수정 작업을 설정합니다.",
      "C": "AWS Control Tower를 계정 거버넌스에 사용합니다. 리전 거부 컨트롤을 구성합니다. 서비스 제어 정책(SCP)을 사용하여 루트 사용자 액세스를 제한합니다.",
      "D": "AWS Firewall Manager를 보안 정책으로 구성하여 보안 요구사항을 충족합니다. AWS Config aggregator와 조직 전체 준수 팩을 사용하여 보안 정책 위반을 감지합니다."
    },
    "answer": "C",
    "explanation": "이 문제는 AWS Organizations 환경에서 조직 전체 거버넌스를 구현하는 방법을 테스트합니다.\n\nAWS Control Tower는 AWS Organizations에 기반한 완전한 계정 거버넌스 솔루션으로, Guardrails를 통해 자동으로 여러 계정에 정책을 적용할 수 있습니다.\n\n'Region deny controls'는 특정 리전에 리소스 배포를 차단하는 Control Tower의 Guardrail입니다.\n\nService Control Policies(SCP)는 IAM과 별도로 작동하며 루트 사용자를 포함한 모든 주체를 제한합니다.\n\nCloudTrail 로그 삭제는 SCP로 차단할 수 있습니다.\n\n옵션 A는 각 계정마다 개별 설정이 필요하므로 확장성이 떨어집니다.\n\n옵션 B의 Security Hub는 위협 탐지 도구이지, 리전 제한이나 루트 사용자 제한을 기본 제공하지 않습니다.\n\n옵션 D의 Firewall Manager는 네트워크 보안에 중점을 두므로 요구사항을 완전히 충족하지 못합니다.",
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
    "question": "회사는 수백 개의 Amazon EC2 On-Demand 인스턴스와 Spot 인스턴스를 사용하여 프로덕션 및 비프로덕션 워크로드를 실행합니다. 회사는 EC2 인스턴스에 AWS Systems Manager Agent(SSM Agent)를 설치하고 구성합니다. 최근 인스턴스 패치 작업 중 일부 인스턴스는 바쁜 상태이거나 다운된 상태여서 패치되지 않았습니다. 회사는 모든 인스턴스의 현재 패치 버전을 나열하는 보고서를 생성해야 합니다. 이 요구사항을 가장 운영 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Systems Manager Inventory를 사용하여 패치 버전을 수집합니다. 모든 인스턴스의 보고서를 생성합니다.",
      "B": "Systems Manager Run Command를 사용하여 원격으로 패치 버전 정보를 수집합니다. 모든 인스턴스의 보고서를 생성합니다.",
      "C": "SSM Agent의 출력을 사용하여 AWS Config를 사용하여 EC2 인스턴스 구성 변경을 추적합니다. 패치 버전을 확인하는 사용자 정의 규칙을 생성합니다. 패치되지 않은 모든 인스턴스의 보고서를 생성합니다.",
      "D": "SSM Agent의 출력을 사용하여 AWS Config로 EC2 인스턴스의 패치 상태를 모니터링합니다. 패치 설치 여부를 확인하는 구성 준수 규칙을 생성합니다. 모든 인스턴스의 보고서를 생성합니다."
    },
    "answer": "A",
    "explanation": "Systems Manager Inventory는 EC2 인스턴스 및 온프레미스 서버의 소프트웨어, 업데이트, 구성 정보를 수집하는 기능입니다.\n\nSSM Agent가 설치되어 있으면 자동으로 패치 버전을 포함한 메타데이터를 수집할 수 있습니다.\n\n이는 가장 직접적이고 효율적인 방법입니다.\n\n옵션 B의 Run Command는 모든 인스턴스에 명령을 실행해야 하는 추가 오버헤드가 있습니다.\n\n옵션 C와 D는 AWS Config를 사용하는데, 이는 변경 추적과 준수 모니터링에는 좋지만 패치 버전 수집 보고에는 Inventory만큼 효율적이지 않습니다.\n\nInventory는 이 목적을 위해 AWS에서 제공하는 네이티브 도구입니다.",
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
    "question": "CloudOps 엔지니어는 AWS Compute Optimizer를 사용하여 Amazon EC2 인스턴스 플릿에 대한 권장사항을 생성합니다. 일부 인스턴스는 새로 출시된 인스턴스 유형을 사용하는 반면, 다른 인스턴스는 오래된 인스턴스 유형을 사용합니다. 분석이 완료되면 CloudOps 엔지니어는 일부 EC2 인스턴스가 Compute Optimizer 대시보드에서 누락된 것을 알게 됩니다. 이 문제의 가능한 원인은 무엇입니까?",
    "options": {
      "A": "누락된 인스턴스는 분석을 위해 불충분한 Amazon CloudWatch 메트릭 데이터를 가지고 있습니다.",
      "B": "Compute Optimizer는 누락된 인스턴스의 인스턴스 유형을 지원하지 않습니다.",
      "C": "Compute Optimizer는 이미 누락된 인스턴스를 최적화된 것으로 간주합니다.",
      "D": "누락된 인스턴스는 Windows 운영 체제를 실행 중입니다."
    },
    "answer": "B",
    "explanation": "AWS Compute Optimizer는 모든 EC2 인스턴스 유형을 지원하지 않습니다. 매우 새로운 인스턴스 유형(최신 세대)이나 구식 인스턴스 유형의 경우 Compute Optimizer가 충분한 성능 메트릭 데이터를 가지지 않거나 지원 목록에 포함되지 않을 수 있습니다. 문제에서 '일부 인스턴스는 새로 출시된 인스턴스 유형을 사용'한다고 명시했으므로, 이는 Compute Optimizer의 지원 범위를 벗어날 수 있습니다.\n\n옵션 A는 3주 이상 충분한 메트릭이 있으면 분석 가능하므로 부정확합니다.\n\n옵션 C는 최적화된 인스턴스는 대시보드에 '이미 최적화됨'으로 표시되지 누락되지 않습니다.\n\n옵션 D는 거짓입니다. Compute Optimizer는 Windows 인스턴스도 지원합니다.",
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
    "question": "회사는 Amazon VPC에서 워크로드를 실행합니다. 회사는 워크로드에 대해 Amazon CloudWatch Logs를 구성합니다. 회사는 회사의 AWS 계정에서 비정상적인 API 활동 및 보안 이벤트를 자동으로 감지하는 솔루션이 필요합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Inspector를 사용하여 VPC flow logs를 스캔합니다.",
      "B": "Amazon GuardDuty를 사용하여 CloudWatch logs를 모니터링합니다.",
      "C": "AWS CloudTrail Insights를 구현합니다.",
      "D": "AWS Config automatic anomaly detection을 사용합니다."
    },
    "answer": "B",
    "explanation": "이 문제는 AWS 보안 서비스 간의 기능 차이를 테스트합니다.\n\nAmazon GuardDuty는 위협 탐지 서비스로, CloudWatch Logs와 VPC Flow Logs를 분석하여 비정상적인 패턴, 의심스러운 API 호출, 멀웨어 활동 등을 자동으로 감지합니다.\n\n옵션 A의 Inspector는 EC2 인스턴스, ECR 이미지, Lambda 함수의 취약점을 스캔하는 것이지, VPC Flow Logs의 비정상 활동 감지가 아닙니다.\n\n옵션 C의 CloudTrail Insights는 API 호출 패턴의 이상을 감지하지만, 실시간 위협 탐지 서비스가 아닙니다.\n\n옵션 D의 AWS Config는 리소스 구성 준수를 모니터링하는 서비스로, 보안 이벤트 탐지에는 적합하지 않습니다.\n\nGuardDuty만이 CloudWatch Logs를 통한 자동 이상 탐지 전문 서비스입니다.",
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
    "question": "회사는 수백 개의 이미지를 생성하고 Amazon S3 버킷에 업로드합니다. 회사는 수동으로 이미지를 항상 켜져 있는 Amazon EC2 인스턴스로 복사하여 처리합니다. 각 이미지를 처리하는 데 보통 30초에서 120초가 걸립니다. CloudOps 엔지니어는 이미지 처리 솔루션을 자동화하여 이미지가 S3 버킷에 도착하자마자 처리하려고 합니다. 이 요구사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "이미지가 S3 버킷에 업로드될 때 EC2 인스턴스를 호출하도록 S3 Event Notifications를 구성합니다. EC2 인스턴스에서 이미지 처리 솔루션을 실행하여 이미지를 처리합니다.",
      "B": "Amazon EventBridge 규칙을 호출하도록 S3 Event Notifications를 구성합니다. 이미지를 처리하기 위해 EventBridge 규칙을 사전 구성된 AWS Glue ETL 작업을 시작하도록 구성합니다.",
      "C": "새 이미지가 원본 S3 버킷에 업로드될 때 이미지 처리 로직을 실행하는 AWS Lambda 함수를 호출하도록 S3 Event Notifications를 구성합니다.",
      "D": "이미지가 S3 버킷에 업로드될 때 EC2 인스턴스가 지원하는 Amazon Elastic Container Service(Amazon ECS) 컨테이너의 작업을 호출하도록 S3 Event Notifications를 구성합니다. 이미지를 처리하도록 ECS 작업을 구성합니다."
    },
    "answer": "C",
    "explanation": "이 문제는 비용 최적화와 운영 효율성을 함께 고려한 솔루션을 테스트합니다.\n\nLambda 함수는 초당 단위로 요금을 부과하므로(약 30~120초 작업), 실행 시간에 대해서만 비용을 지불합니다.\n\n옵션 A의 EC2 인스턴스는 항상 실행되어야 하므로 지속적인 비용이 발생합니다(이미 '항상 켜져 있다'고 명시). 옵션 B의 AWS Glue는 ETL 작업으로, 이미지 처리에는 과도한 리소스입니다.\n\n옵션 D의 ECS도 지속적인 컨테이너 실행 비용이 발생합니다.\n\nLambda는 이벤트 기반 자동화와 종량제 요금 모델로 이 시나리오에 가장 적합합니다.\n\n처리 시간이 15분 이내이므로 Lambda의 시간 제한도 충족합니다.",
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
    "question": "회사는 AWS Organizations의 조직을 사용하여 여러 AWS 계정을 관리합니다. 회사는 조직의 모든 계정의 특정 이벤트를 새로운 수신 계정으로 전송해야 하므로 AWS Lambda 함수가 이벤트를 처리할 수 있습니다. CloudOps 엔지니어는 Amazon EventBridge를 구성하여 이벤트를 새 수신 계정의 us-west-2 리전의 대상 이벤트 버스로 라우팅해야 합니다. CloudOps 엔지니어는 발신자 계정과 수신 계정에서 지정된 이벤트와 일치하는 규칙을 생성합니다. 규칙은 이벤트 패턴에서 계정 매개변수를 지정하지 않습니다. CloudOps 엔지니어는 발신자 계정에서 대상 이벤트 버스의 PutEvents 작업을 허용하는 IAM 역할을 생성합니다. us-east-1 리전에서 시작되는 첫 번째 테스트 이벤트는 수신 계정의 Lambda 함수로 처리되지 않습니다. 이벤트가 처리되지 않는 가능한 이유는 무엇입니까?",
    "options": {
      "A": "EventBridge용 Interface VPC 엔드포인트가 발신자 계정과 수신자 계정에 필요합니다.",
      "B": "대상 Lambda 함수가 다른 AWS 리전에 있으므로 EventBridge에서 지원되지 않습니다.",
      "C": "대상 이벤트 버스의 리소스 기반 정책을 수정하여 발신자 계정의 PutEvents API 호출을 허용해야 합니다.",
      "D": "수신 계정의 규칙은 이벤트 패턴에 {\"account\": [\"sender-account-id\"]}를 지정해야 하며 수신 계정 ID를 포함해야 합니다."
    },
    "answer": "C",
    "explanation": "EventBridge의 크로스 계정 이벤트 라우팅에서 발신자가 다른 계정의 이벤트 버스에 이벤트를 전송하려면, 대상 버스의 리소스 기반 정책(Resource-based Policy)이 발신자 계정에 PutEvents 권한을 부여해야 합니다. IAM 역할만으로는 충분하지 않으며, 대상 버스 자체에서도 접근을 명시적으로 허용해야 합니다.\n\n옵션 A는 VPC 내에서만 필요하며, 크로스 계정 통신 기본 조건이 아닙니다.\n\n옵션 B는 거짓입니다. EventBridge는 크로스 리전 이벤트 전송을 지원합니다(Lambda는 타겟이므로 같은 리전일 필요 없음).\n\n옵션 D는 이벤트 필터링을 위한 것이지, 접근 제어와는 무관합니다.",
    "en_q": "A company uses an organization in AWS Organizations to manage multiple AWS accounts. The company needs to send specific events from all the accounts in the organization to a new receiver account so an AWS Lambda function can process the events. A CloudOps engineer needs to configure Amazon EventBridge to route the events to a target event bus in the us-west-2 Region in the new receiver account. The CloudOps engineer creates rules in the sender accounts and the receiver account that match the specified events. The rules do not specify an account parameter in the event pattern. The CloudOps engineer creates IAM roles in the sender accounts to allow PutEvents actions on the target event bus. The first test events that originate from the us-east-1 Region are not being processed by the Lambda function in the receiving account. What is the likely reason the events are not processed?",
    "en_opts": {
      "A": "Interface VPC endpoints for EventBridge are required in the sender accounts and receiver accounts.",
      "B": "The target Lambda function is in a different AWS Region, which is not supported by EventBridge.",
      "C": "The resource-based policy on the target event bus must be modified to allow PutEvents API calls from the sender accounts.",
      "D": "The rule in the receiving account must specify {\"account\": (\"sender-account-id\"!) in its event pattern and must include the receiving account ID."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383641-exam-aws-certified-cloudops-engineer-associate-soa-c03-topic/"
  },
  {
    "id": 75,
    "question": "개발자는 Amazon S3 버킷에 버전 관리를 활성화합니다. 개발자가 버킷에 쓰기 작업을 수행하려고 시도할 때 HTTP 404 NoSuchKey 오류가 발생합니다. CloudOps 엔지니어는 이 문제를 해결해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 버킷에 대한 버전 관리를 비활성화하고 쓰기 작업을 다시 시도합니다.",
      "B": "버킷 정책을 수정하여 버전이 지정된 객체에 대한 쓰기 작업을 허용합니다.",
      "C": "버전 관리를 활성화한 후 최소 15분을 기다린 다음 쓰기 작업을 수행합니다.",
      "D": "버킷에서 S3 Transfer Acceleration을 활성화합니다."
    },
    "answer": "C",
    "explanation": "AWS S3 버킷에 버전 관리를 활성화하면, 설정 변경이 전파되어 완전히 활성화되기까지 약 15분의 지연이 발생할 수 있습니다. 이는 S3의 글로벌 인프라 전체에 변경사항을 배포하는 데 필요한 시간입니다. 이 시간 내에 쓰기 작업을 시도하면 일부 요청이 버전 관리 비활성화 상태로 처리될 수 있어 HTTP 404 오류가 발생할 수 있습니다.\n\n옵션 A는 근본적인 해결책이 아니며 버전 관리의 목적을 무시합니다.\n\n옵션 B는 버킷 정책과 무관한 문제입니다. 옵션 D의 Transfer Acceleration은 업로드 성능과 무관합니다. 이는 S3 버전 관리 활성화 후 충분한 시간을 기다려야 한다는 운영 지식을 테스트하는 문제입니다.",
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
    "question": "회사는 회사의 Amazon S3 버킷에 대해 Cross-Region Replication(CRR)을 구현합니다. S3 버킷은 us-east-1 리전에 있습니다. 회사는 Amazon S3 관리형 키(SSE-S3)를 사용한 서버 측 암호화를 사용하여 버킷의 데이터를 보호합니다. CloudOps 엔지니어는 백업을 저장할 새로운 AWS 계정을 생성합니다. 모든 백업 버킷은 us-west-2 리전에 있습니다. CloudOps 엔지니어는 원본 버킷과 대상 버킷에서 버전 관리를 활성화합니다. CloudOps 엔지니어는 원본 계정에서 s3.amazonaws.com을 위한 IAM 역할을 생성합니다. CloudOps 엔지니어는 IAM 역할에 원본 버킷에서 읽기 작업, 대상 버킷에서 복제 작업, 대상 버킷의 키를 사용한 암호화 작업을 수행할 권한을 부여합니다. 대상 버킷 정책은 IAM 역할이 복제 및 읽기 작업을 수행하도록 허용합니다. 복제 구성이 완료된 후 CloudOps 엔지니어는 객체가 복제되지 않는 것을 알게 됩니다. 객체가 복제되지 않는 가능한 이유는 무엇입니까?",
    "options": {
      "A": "IAM 역할과 버킷 정책은 ObjectOwnerOverrideToBucketOwner 권한이 있어야 합니다.",
      "B": "원본 버킷과 대상 버킷의 객체는 다중 리전 키로 암호화되어야 합니다.",
      "C": "원본 계정과 대상 계정에서 Amazon S3에 대한 Gateway VPC 엔드포인트를 생성해야 합니다.",
      "D": "대상 버킷은 AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화를 사용해야 합니다."
    },
    "answer": "A",
    "explanation": "S3 CRR에서 원본 계정과 대상 계정이 다를 때, 복제 후 객체의 소유권이 문제가 될 수 있습니다. 기본적으로 복제된 객체는 여전히 원본 버킷의 소유자(원본 계정)에 의해 소유됩니다. 대상 버킷의 소유자가 객체를 관리할 수 없게 되는 상황이 발생할 수 있습니다. 이를 해결하려면 ObjectOwnerOverrideToBucketOwner 권한을 IAM 역할과 버킷 정책에 추가하여, 복제된 객체의 소유권을 대상 버킷 소유자에게 넘겨야 합니다.\n\n옵션 B는 거짓입니다. SSE-S3는 CRR에서 잘 작동하며, 다중 리전 키는 선택사항입니다.\n\n옵션 C는 필수가 아닙니다. VPC 엔드포인트 없이도 CRR이 작동할 수 있습니다.\n\n옵션 D는 부정확합니다. SSE-S3에서 SSE-KMS로 변경할 필요 없습니다.",
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
    "question": "회사가 공개 서브넷과 프라이빗 서브넷이 포함된 VPC를 가지고 있습니다. 회사는 프라이빗 서브넷에 AWS Systems Manager Agent(SSM Agent)가 설치된 Amazon Linux AMI를 사용하는 Amazon EC2 인스턴스를 배포합니다. EC2 인스턴스는 아웃바운드 트래픽만 허용하는 보안 그룹에 있습니다. CloudOps 엔지니어는 권한이 있는 관리자 그룹이 인스턴스를 인터넷에 노출하지 않고 SSH를 통해 인스턴스에 연결할 수 있도록 해야 합니다. 이 요구사항을 충족할 해결책은 무엇입니까?",
    "options": {
      "A": "프라이빗 서브넷에 EC2 Instance Connect 엔드포인트를 생성합니다. 보안 그룹을 업데이트하여 인바운드 SSH 트래픽을 허용합니다. 권한이 있는 관리자를 위한 IAM 그룹을 생성합니다. PowerUserAccess 관리형 정책을 IAM 그룹에 할당합니다.",
      "B": "프라이빗 서브넷에 Systems Manager 엔드포인트를 생성합니다. 보안 그룹을 업데이트하여 Systems Manager 엔드포인트가 연결된 프라이빗 네트워크의 SSH 트래픽을 허용합니다. 권한이 있는 관리자를 위한 IAM 그룹을 생성합니다. PowerUserAccess 관리형 정책을 IAM 그룹에 할당합니다.",
      "C": "공개 서브넷에 EC2 Instance Connect 엔드포인트를 생성합니다. 보안 그룹을 업데이트하여 프라이빗 네트워크의 SSH 트래픽을 허용합니다. 권한이 있는 관리자를 위한 IAM 그룹을 생성합니다. PowerUserAccess 관리형 정책을 IAM 그룹에 할당합니다.",
      "D": "공개 서브넷에 Systems Manager 엔드포인트를 생성합니다. EC2 인스턴스에 대한 AmazonSSMManagedInstanceCore 권한이 있는 IAM 역할을 생성합니다. 권한이 있는 관리자를 위한 IAM 그룹을 생성합니다. AmazonEC2ReadOnlyAccess IAM 정책을 IAM 그룹에 할당합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ EC2 Instance Connect Endpoint — SSH 접근을 위해 Bastion 호스트 없이 프라이빗 EC2에 안전하게 연결 가능\n▸ Systems Manager Endpoint (VPC Endpoint) — AWS 서비스와 프라이빗 통신하기 위한 VPC 엔드포인트\n\n【정답 포인트】\n▸ 프라이빗 서브넷에 배포된 EC2에 인터넷 노출 없이 SSH 접근 → EC2 Instance Connect Endpoint 사용\n▸ EC2 Instance Connect Endpoint는 프라이빗 서브넷에 배포되어야 하고, 연결하는 클라이언트가 서브넷 내에서 인스턴스에 접근 가능\n▸ 보안 그룹은 인바운드 SSH(22번 포트)를 허용해야 함\n▸ PowerUserAccess는 불필요한 권한 과부여 (EC2 Instance Connect 접근 자체는 IAM 권한 필요 없음)\n\n【오답 체크】\n(B) Systems Manager Endpoint는 Systems Manager 서비스 통신용이지, SSH 직접 접근 용이 아님\n(C) 공개 서브넷의 엔드포인트는 인스턴스를 인터넷에 노출할 위험 증가\n(D) Systems Manager Endpoint는 Systems Manager Session Manager를 통한 접근에만 사용되며, 직접 SSH 접근 불가\n\n【시험 포인트】\n▸ VPC Endpoint 종류 구분: EC2 Instance Connect vs Systems Manager (Session Manager)\n▸ 엔드포인트 배포 위치: 퍼블릭 vs 프라이빗 선택의 중요성\n▸ 보안 그룹 설정으로 SSH 트래픽 제어\n▸ 최소 권한 원칙 (Least Privilege) 고려",
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
    "question": "회사가 us-east-1 리전에서 Application Load Balancer(ALB) 뒤의 Amazon EC2 인스턴스에서 웹 기반 애플리케이션을 실행합니다. 전 세계 사용자가 애플리케이션에 접근합니다. 북미 외부의 사용자들은 높은 지연 시간과 불안정한 애플리케이션 성능을 보고합니다. 회사는 모든 전역 사용자의 지연 시간과 애플리케이션 성능을 개선해야 합니다. 이 요구사항을 충족할 해결책은 무엇입니까?",
    "options": {
      "A": "ALB 앞에 AWS Global Accelerator를 사용합니다.",
      "B": "ALB 앞에 Network Load Balancer(NLB)를 배포합니다.",
      "C": "ALB를 Network Load Balancer(NLB)로 교체합니다.",
      "D": "Amazon Route 53 상태 확인을 설정하여 지연 시간 임계값을 기반으로 AWS 리전 간 장애 조치를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Global Accelerator — 전역 사용자 트래픽을 AWS 엣지 로케이션으로 라우팅하여 지연 시간 감소\n▸ Application Load Balancer(ALB) — Layer 7(애플리케이션 계층) 로드 밸런싱\n\n【정답 포인트】\n▸ 북미 외부 사용자의 높은 지연 시간 문제 → 지리적으로 분산된 전역 성능 개선 필요\n▸ AWS Global Accelerator는 Anycast IP 사용으로 가장 가까운 엣지 로케이션으로 트래픽 라우팅\n▸ ALB 앞에 Global Accelerator를 배치하면 전역 사용자의 지연 시간 대폭 감소\n▸ 단일 리전(us-east-1)에서도 엣지 네트워크 통해 성능 개선\n\n【오답 체크】\n(B) \n(C) NLB는 Layer 4(전송 계층) 로드 밸런싱으로 지연 시간 개선과 직접 관계 없음\n(D) Route 53 장애 조치는 리전 간 멀티 리전 아키텍처가 필요하며, 현재 단일 리전 시나리오에 부적합\n\n【시험 포인트】\n▸ Global Accelerator vs CloudFront: 지연 시간 최소화는 Global Accelerator 사용\n▸ 단일 리전 애플리케이션의 전역 성능 개선 전략\n▸ ALB와 Global Accelerator의 결합으로 Layer 7 기능 유지 + 전역 성능 향상",
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
    "question": "CloudOps 엔지니어는 여러 AWS 계정에 걸쳐 AWS 리소스 태깅을 일관되게 하기 위해 보장해야 합니다. 회사는 AWS Organizations의 조직을 사용하여 계정을 중앙에서 관리합니다. 회사는 각 사업부에 할당된 비용을 정확하게 추적하기 위해 비용 할당 태그를 구현하려고 합니다. 이 요구사항을 운영 오버헤드가 최소화된 상태로 충족할 해결책은 무엇입니까?",
    "options": {
      "A": "Organizations 태그 정책을 사용하여 모든 리소스에서 필수 태깅을 강제합니다. AWS Billing and Cost Management 콘솔에서 비용 할당 태그를 활성화합니다.",
      "B": "AWS CloudTrail 이벤트를 구성하여 AWS Lambda 함수를 호출하고, 태그가 지정되지 않은 리소스를 감지하고, 사전 정의된 규칙을 기반으로 자동으로 태그를 할당합니다.",
      "C": "AWS Config를 사용하여 태깅 준수를 평가합니다. AWS Budgets를 사용하여 비용 할당을 위한 태그를 적용합니다.",
      "D": "AWS Service Catalog를 사용하여 미리 태그된 리소스만 프로비저닝합니다. AWS Trusted Advisor를 사용하여 조직 전체에서 태깅을 강제합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Organizations Tag Policy — AWS Organizations에서 필수 태그를 강제하고 태깅 규칙을 관리\n▸ Cost Allocation Tags — AWS Billing and Cost Management에서 비용 추적 및 할당을 위한 태그\n\n【정답 포인트】\n▸ 다중 계정 환경에서 일관된 태깅 강제 → Organizations 태그 정책 사용 (중앙 집중식)\n▸ Organizations 태그 정책은 아래쪽 계정의 모든 리소스에 필수 태깅 적용\n▸ 비용 할당 태그를 활성화하면 태그 기반으로 비용을 자동으로 추적 및 할당\n▸ 수동 개입 최소화로 운영 오버헤드 가장 낮음\n\n【오답 체크】\n(B) Lambda로 자동화는 CloudTrail 이벤트 감시 + Lambda 함수 관리 필요 → 운영 오버헤드 증가\n(C) AWS Config는 준수 모니터링만 가능하고 태그 강제나 비용 할당 담당 불가\n(D) Service Catalog는 프로비저닝 시점의 태깅만 가능하며, 기존 리소스나 다른 방법의 생성 리소스 제어 불가\n\n【시험 포인트】\n▸ Organizations 기능: 태그 정책, SCP의 차이점\n▸ 비용 할당 태그와 Cost Allocation Tag 활성화의 관계\n▸ 다중 계정 환경에서의 중앙 집중식 제어 전략",
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
    "question": "회사에 Ubuntu 운영 체제(OS)를 실행하는 여러 Amazon EC2 인스턴스가 있습니다. 회사는 정기적으로 OS를 패치해야 합니다. CloudOps 엔지니어는 매주 수동으로 패치를 설치합니다. 회사는 지속적으로 Ubuntu를 실행하는 새로운 EC2 인스턴스를 추가합니다. CloudOps 엔지니어는 패칭 프로세스를 자동화해야 합니다. 이 요구사항을 가장 운영 효율적인 방식으로 충족할 해결책은 무엇입니까?",
    "options": {
      "A": "SSH를 사용하여 EC2 인스턴스에 연결하고 패치를 설치하는 AWS Lambda 함수를 생성합니다. Lambda 함수를 매주 실행하도록 구성합니다.",
      "B": "EC2 인스턴스에 AWS Systems Manager Agent(SSM Agent)를 설치합니다. Systems Manager Patch Manager를 구성하여 매주 인스턴스에 패치를 설치합니다.",
      "C": "AWS Systems Manager Inventory를 사용하여 패치되지 않은 EC2 인스턴스를 식별하고 OS 패치를 설치합니다.",
      "D": "Cron 표현식이 있는 Amazon EventBridge 규칙을 생성하여 매주 패치를 설치합니다. EC2 인스턴스를 대상으로 하도록 EventBridge 규칙을 구성합니다. 대상 인스턴스에서 OS 업데이트를 실행하는 동작을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Systems Manager Agent(SSM Agent) — EC2 인스턴스를 Systems Manager로 관리하기 위한 에이전트\n▸ Patch Manager — Systems Manager 서비스로 EC2 인스턴스의 패치를 중앙에서 관리\n\n【정답 포인트】\n▸ EC2 인스턴스 자동 패칭 → Systems Manager Patch Manager 사용 (AWS 표준 솔루션)\n▸ SSM Agent는 Amazon Linux 2 기본 포함, Ubuntu는 수동 설치 필요\n▸ Patch Manager는 패치 스케줄 자동화, 보고, 규정 준수 추적 제공\n▸ 새로운 인스턴스 추가 시 자동으로 Patch Manager의 패칭 대상에 포함 가능\n▸ 가장 간편하고 확장 가능한 운영 효율적 방법\n\n【오답 체크】\n(A) Lambda는 SSH 연결 설정, 에러 처리, 로깅 등 추가 개발 필요 → 복잡성 증가\n(C) Inventory는 리소스 조회 목적이며, 패치 설치 자동화 기능 없음\n(D) EventBridge는 이벤트 스케줄링만 가능하고, 실제 패치 명령 실행 메커니즘 불명확\n\n【시험 포인트】\n▸ Systems Manager 서비스: Patch Manager, Session Manager, Run Command의 용도 구분\n▸ SSM Agent의 필수성과 설치 방법\n▸ AWS 관리형 패칭 솔루션으로 운영 오버헤드 최소화",
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
    "question": "글로벌 회사가 us-east-1 리전에서 중요한 주 업무를 실행합니다. 회사는 업무 장애 시 최소 다운타임으로 비즈니스 연속성을 보장하고자 합니다. 회사는 업무를 두 번째 AWS 리전에 복제하려고 합니다. CloudOps 엔지니어는 서비스 수준 계약을 충족하기 위해 10분 미만의 복구 시간 목표(RTO)와 0의 복구 지점 목표(RPO)를 달성하는 솔루션이 필요합니다. 이 요구사항을 충족할 해결책은 무엇입니까?",
    "options": {
      "A": "두 번째 리전에 실시간 데이터 복제를 제공하는 파일럿 라이트 아키텍처를 구현합니다. Amazon Route 53 상태 확인 및 자동 DNS 장애 조치를 구성합니다.",
      "B": "두 번째 리전에 정기적인 데이터 복제를 제공하는 웜 스탠바이 아키텍처를 구현합니다. Amazon Route 53 상태 확인 및 자동 DNS 장애 조치를 구성합니다.",
      "C": "두 리전 간 실시간 데이터 복제를 제공하는 액티브-액티브 아키텍처를 구현합니다. Amazon Route 53 상태 확인 및 가중치 라우팅 정책을 사용합니다.",
      "D": "데이터의 정기적인 백업을 생성하고 두 번째 리전의 S3 버킷에 저장하는 사용자 정의 스크립트를 구현합니다. 업무 장애 이벤트 시 백업을 사용하여 두 번째 리전에서 애플리케이션을 시작합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ RTO(Recovery Time Objective) — 목표 복구 시간: 10분 미만\n▸ RPO(Recovery Point Objective) — 목표 복구 지점: 0 (데이터 손실 없음)\n▸ Active-Active Architecture — 양쪽 리전이 동시에 트래픽 처리\n\n【정답 포인트】\n▸ RPO = 0 → 실시간 데이터 복제 필수 (지속적인 동기화)\n▸ RTO < 10분 → 이미 활성화된 리소스가 즉시 트래픽 수용 가능해야 함\n▸ Active-Active: 양쪽 리전이 동시에 활성화되어 있으므로 즉각적인 장애 조치 가능\n▸ Route 53 가중치 라우팅: 양쪽 엔드포인트로 트래픽 분산\n▸ 실시간 복제로 데이터 손실 0 달성\n\n【오답 체크】\n(A) 파일럿 라이트: 리소스가 최소화되어 있어 복구 시간 10분 이상, RPO 0 달성 어려움\n(B) 웜 스탠바이: 정기적 복제로 RPO = 0 불가능, 복구 시간도 상대적으로 길다\n(D) 정기 백업: RPO = 0 불가능 (복제 간격 동안 데이터 손실), RTO도 길다\n\n【시험 포인트】\n▸ 재해 복구 아키텍처: 파일럿 라이트, 웜 스탠바이, 핫 스탠바이, Active-Active\n▸ RTO/RPO 요구사항 분석으로 아키텍처 선택\n▸ 비용 vs 복구 효율성 트레이드오프",
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
    "question": "CloudOps 엔지니어는 Amazon Elastic Kubernetes Service(Amazon EKS)에서 실행되는 공개 웹 사이트의 특정 메트릭 가시성을 구성하려고 합니다. CloudOps 엔지니어는 지연 시간, 트래픽, 오류 및 포화도 메트릭을 관찰하려고 합니다. CloudOps 엔지니어는 서비스 수준 목표(SLO) 및 서비스 수준 지표(SLI)를 정의하고 모니터링하려고 합니다. CloudOps 엔지니어는 또한 메트릭, 로그 및 트레이스를 상호 연관시켜 더 빠른 문제 해결을 지원하고자 합니다. 이 요구사항을 가장 적은 운영 노력으로 충족할 해결책은 무엇입니까?",
    "options": {
      "A": "Amazon CloudWatch Application Signals를 사용하여 EKS 워크로드에 대한 지정된 메트릭을 자동으로 수집하고 모니터링합니다.",
      "B": "웹 사이트에 대해 AWS Distro for OpenTelemetry를 구성하여 메트릭을 생성합니다. Amazon Managed Service for Prometheus를 사용하여 지정된 메트릭을 수집합니다. Amazon Managed Grafana를 사용하여 메트릭을 시각화합니다.",
      "C": "Amazon CloudWatch RUM 및 CloudWatch Synthetics 카나리를 구성하여 EKS 워크로드에 대한 지정된 메트릭을 자동으로 수집하고 모니터링합니다.",
      "D": "Amazon CloudWatch Application Insights를 구성하여 일반적인 애플리케이션 성능 문제 및 이상을 감지하고 EKS 워크로드에 대한 지정된 메트릭을 모니터링합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudWatch Application Signals — 애플리케이션 성능 모니터링(APM)으로 메트릭/로그/트레이스 자동 수집\n▸ SLO/SLI — 서비스 수준 목표/지표 정의 및 모니터링\n▸ RED 메트릭 — Rate, Error, Duration (= 지연시간, 트래픽, 오류)\n\n【정답 포인트】\n▸ CloudWatch Application Signals는 EKS에서 자동 계측 없이 메트릭 수집\n▸ 메트릭, 로그, 트레이스 자동 상호 연관(Correlation) 제공\n▸ SLO/SLI 정의 및 모니터링 기능 내장\n▸ 최소한의 수동 설정으로 즉시 시작 가능 (적은 운영 노력)\n▸ AWS 관리형 솔루션으로 인프라 관리 오버헤드 최소\n\n【오답 체크】\n(B) AWS Distro for OpenTelemetry는 수동 계측 필요, Prometheus + Grafana 조합은 3개 서비스 관리 필요 → 운영 복잡성 증가\n(C) RUM은 클라이언트 측, Synthetics는 외부 모니터링으로 포화도/내부 메트릭 수집 불가\n(D) Application Insights는 문제 감지는 가능하지만 SLO/SLI 모니터링 기능 제한적\n\n【시험 포인트】\n▸ CloudWatch Application Signals: 자동 APM으로 관찰성(Observability) 확보\n▸ OpenTelemetry vs Application Signals 선택 기준: 운영 복잡성\n▸ 메트릭, 로그, 트레이스 상호 연관의 중요성",
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
    "question": "CloudOps 엔지니어는 비용을 최적화하기 위해 Amazon RDS 인스턴스의 자동 백업을 비활성화해야 합니다. CloudOps 엔지니어가 백업을 비활성화하려고 시도할 때, CloudOps 엔지니어는 보존 기간이 1과 35 사이여야 한다는 오류 메시지를 받습니다. 이 문제의 가능한 원인은 무엇입니까?",
    "options": {
      "A": "RDS 인스턴스는 백업 보존 기간을 변경할 권한이 부족합니다.",
      "B": "RDS 인스턴스에 대해 읽기 복제본이 구성되어 있습니다.",
      "C": "RDS 인스턴스는 기본 백업 윈도우를 사용하고 있습니다.",
      "D": "RDS 인스턴스는 Multi-AZ 배포의 일부입니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Multi-AZ Deployment — RDS 자동 장애 조치를 위해 스탠바이 복제본을 다른 AZ에 유지\n▸ Backup Retention Period — 자동 백업 보존 기간 설정\n\n【정답 포인트】\n▸ RDS Multi-AZ의 경우 스탠바이 복제본 유지를 위해 최소 백업 보존 필요\n▸ Multi-AZ에서는 자동 백업 완전 비활성화 불가능 (보존 기간 최소 1일)\n▸ 0으로 설정하려면 Multi-AZ 비활성화 후 진행 필요\n▸ 현재 오류는 Multi-AZ 상태에서 보존 기간을 0으로 설정하려는 시도의 결과\n\n【오답 체크】\n(A) 권한 문제라면 명확한 권한 거부 오류 표시 (다른 메시지)\n(B) 읽기 복제본은 백업 정책에 영향 없음 (독립적 백업 관리)\n(C) 백업 윈도우는 보존 기간 설정과 독립적\n\n【시험 포인트】\n▸ RDS Multi-AZ의 제약: 백업 보존, 스탠바이 복제본 유지\n▸ 백업 비활성화 시나리오: 먼저 Multi-AZ 비활성화 필요\n▸ AWS 오류 메시지 해석: 보존 기간 범위 오류는 Multi-AZ 상태 표지",
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
