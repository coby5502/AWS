window.SCS_QUESTIONS = [
  {
    "id": 1,
    "question": "보안 엔지니어가 MyLambdaFunction이라는 AWS Lambda 함수를 문제해결하고 있습니다. 함수가 DOC-EXAMPLE-BUCKET이라는 Amazon S3 버킷의 객체를 읽으려고 할 때 오류가 발생합니다. S3 버킷에는 다음 버킷 정책이 있습니다. 보안 엔지니어가 Lambda 함수가 버킷 객체를 읽을 수 있도록 정책에 어떤 변경을 해야 합니까?",
    "options": {
      "A": "Condition 요소를 제거하고 Principal 요소를 다음으로 변경합니다.",
      "B": "Action 요소를 다음으로 변경합니다.",
      "C": "Resource 요소를 \"arn:aws:s3:::DOC-EXAMPLE-BUCKET/*\"로 변경합니다.",
      "D": "Resource 요소를 \"arn:aws:lambda:::function:MyLambdaFunction\"로 변경하고 Principal 요소를 다음으로 변경합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Bucket Policy — 버킷 수준에서 리소스 접근을 제어하는 정책\n▸ Resource ARN — 정책이 적용되는 AWS 리소스의 식별자\n\n【정답 포인트】\n▸ Lambda가 S3 객체를 읽으려면 s3:GetObject 권한이 필요합니다\n▸ Resource는 버킷 자체(arn:aws:s3:::bucket-name)가 아니라 버킷 내 객체(arn:aws:s3:::bucket-name/*)를 지정해야 합니다\n▸ 버킷 정책의 Resource 요소는 버킷의 객체에 대한 권한을 명시해야 함\n\n【오답 체크】\n(A) Condition 제거는 정책 제약을 약화시킬 뿐 근본 문제를 해결하지 못함\n(B) Action 변경만으로는 Resource 범위 부족 문제를 해결하지 못함\n(D) Lambda ARN은 S3 버킷 정책의 Resource로 부적절하며, Principal 변경도 필요하지 않음\n\n【시험 포인트】\n▸ S3 버킷 정책에서 객체 접근은 \"/*\" 와일드카드로 지정\n▸ 정책 구조: Principal(누가) → Action(무엇) → Resource(어디에)\n▸ GetObject 권한은 객체 수준이므로 Resource에 /* 필수",
    "en_q": "A security engineer is troubleshooting an AWS Lambda function that is named MyLambdaFunction. The function is encountering an error when the function attempts to read the objects in an Amazon S3 bucket that is named DOC-EXAMPLE-BUCKET. Which change should the security engineer make to the policy to ensure that the Lambda function can read the bucket objects?",
    "en_opts": {
      "A": "Remove the Condition element. Change the Principal element to the following:",
      "B": "Change the Action element to the following:",
      "C": "Change the Resource element to \"arn:aws:s3:::DOC-EXAMPLE-BUCKET/*\".",
      "D": "Change the Resource element to \"arn:aws:lambda:::function:MyLambdaFunction\". Change the Principal element to the following:"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382889-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 3,
    "question": "AWS 계정 관리자가 IAM 그룹을 생성하고 각 사용자가 다중 인증(MFA)을 사용하여 인증하도록 요구하는 다음 관리형 정책을 적용했습니다. 정책 구현 후 관리자는 사용자가 AWS CLI를 사용하여 Amazon EC2 명령을 실행할 수 없다는 보고를 받습니다. MFA를 계속 적용하면서 이 문제를 해결하기 위해 관리자가 해야 할 일은 무엇입니까?",
    "options": {
      "A": "aws:MultiFactorAuthPresent 값을 true로 변경합니다.",
      "B": "사용자에게 aws sts get-session-token CLI 명령을 실행하고 MFA --serial-number 및 --token-code 파라미터를 전달하도록 지시합니다. 결과 값을 사용하여 API/CLI 호출을 수행합니다.",
      "C": "SAML 2.0을 사용한 페더레이션 API/CLI 접근을 구현한 후 ID 공급자가 MFA를 적용하도록 구성합니다.",
      "D": "역할을 생성하고 역할 신뢰 정책에서 MFA를 적용합니다. 사용자에게 sts assume-role CLI 명령을 실행하고 --serial-number 및 --token-code 파라미터를 전달하도록 지시합니다. 결과 값을 환경 변수에 저장하고 정책의 NotAction에 sts:AssumeRole을 추가합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ STS (Security Token Service) — 임시 보안 자격증명을 발급하는 서비스\n▸ aws:MultiFactorAuthPresent — MFA 인증 여부를 검증하는 정책 조건\n▸ get-session-token — MFA 기기의 코드로 임시 자격증명을 얻는 명령어\n\n【정답 포인트】\n▸ MFA를 요구하는 정책은 aws:MultiFactorAuthPresent가 true일 때만 권한 부여\n▸ CLI에서 직접 API 호출 시 이 조건을 만족할 수 없음 (임시 토큰 없음)\n▸ get-session-token으로 MFA 인증 후 임시 자격증명을 얻어 사용해야 함\n▸ 임시 토큰에는 MFA 시간 정보가 포함되어 정책 조건을 만족\n\n【오답 체크】\n(A) 값을 true로 변경해도 MFA 인증 없이는 조건을 만족할 수 없음\n(C) 페더레이션은 별도 인프라 필요하고 복잡도 증가\n(D) 역할 가정도 get-session-token 사용과 동일하게 MFA 요구, 더 복잡한 추가 단계\n\n【시험 포인트】\n▸ MFA 요구 정책으로 인한 CLI 실패 = get-session-token 사용 필수\n▸ get-session-token은 mfa_serial과 token_code로 임시 자격증명 발급\n▸ 발급된 토큰(AWS_ACCESS_KEY_ID 등)을 환경변수로 설정하여 사용",
    "en_q": "An AWS account administrator created an IAM group and applied the following managed policy to require that each individual user authenticate using multi-factor authentication. After implementing the policy, the administrator receives reports that users are unable to perform Amazon EC2 commands using the AWS CLI. What should the administrator do to resolve this problem while still enforcing multi-factor authentication?",
    "en_opts": {
      "A": "Change the value of aws:MultiFactorAuthPresent to true.",
      "B": "Instruct users to run the aws sts get-session-token CLI command and pass the multi-factor authentication --serial-number and --token-code parameters. Use these resulting values to make API/CLI calls.",
      "C": "Implement federated API/CLI access using SAML 2.0, then configure the identity provider to enforce multi-factor authentication.",
      "D": "Create a role and enforce multi-factor authentication in the role trust policy. Instruct users to run the sts assume-role CLI command and pass --serial-number and --token-code parameters. Store the resulting values in environment variables. Add sts:AssumeRole to NotAction in the policy."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382901-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 4,
    "question": "회사가 AWS Organizations를 기본 SCP와 함께 사용하고 있습니다. 회사는 특정 OU의 모든 AWS 계정에 대한 AWS 사용을 제한해야 합니다. 일부 원하는 글로벌 서비스를 제외하고 OU의 모든 계정에 대해 AWS 사용은 eu-west-1 리전에서만 발생해야 합니다. 보안 엔지니어는 기존 계정과 OU의 새로운 계정에 대해 제한을 적용하는 SCP를 생성해야 합니다. 이 요구사항을 충족하는 SCP는 무엇입니까?",
    "options": {
      "A": "",
      "B": "",
      "C": "",
      "D": ""
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Service Control Policy (SCP) — Organizations 계정에 대한 최대 권한을 정의하는 정책\n▸ aws:RequestedRegion — API 요청이 타겟팅하는 리전을 나타내는 조건 키\n▸ Deny 효과 — 명시적으로 권한을 거부하는 SCP 문\n\n【정답 포인트】\n▸ SCP는 eu-west-1 리전의 작업만 허용하고 나머지는 거부해야 함\n▸ 글로벌 서비스(IAM, CloudFront 등)는 리전 조건이 적용되지 않음\n▸ Condition에 aws:RequestedRegion 조건을 사용하여 리전 제한 구현\n▸ Action은 모든 서비스(\"*\")에 적용되지만 특정 글로벌 서비스는 제외\n▸ NotAction을 사용하여 글로벌 서비스를 예외 처리\n\n【오답 체크】\n(A) \n(B) \n(D) — 리전 기반 제약이 부족하거나 글로벌 서비스 예외 처리 미흡\n\n【시험 포인트】\n▸ SCP는 Deny 기반으로 최대 권한 설정 (화이트리스트 방식)\n▸ RequestedRegion 조건으로 리전 제한 구현\n▸ NotAction으로 글로벌 서비스(iam:*, cloudfront:* 등) 제외\n▸ OU와 계정 모두에 적용되는 조직 정책 구조",
    "en_q": "A company is using AWS Organizations with the default SCP. The company needs to restrict AWS usage for all AWS accounts that are in a specific OU. Except for some desired global services, the AWS usage must occur only in the eu-west-1 Region for all accounts in the OU. A security engineer must create an SCP that applies the restriction to existing accounts and any new accounts in the OU. Which SCP will meet these requirements?",
    "en_opts": {
      "A": "",
      "B": "",
      "C": "",
      "D": ""
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382899-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 6,
    "question": "고객 관리형 키에 연결된 다음 AWS Key Management Service(AWS KMS) 키 정책의 효과는 무엇입니까?",
    "options": {
      "A": "Amazon WorkMail 및 Amazon Simple Email Service(Amazon SES)는 111122223333 계정의 ExampleRole 보안 주체에 위임된 KMS 암호화 및 복호화 권한이 있습니다.",
      "B": "ExampleRole 보안 주체는 ExampleRole과 AWS 간의 이메일 교환을 명시적으로 암호화하고 복호화할 수 있습니다.",
      "C": "고객 관리형 키는 보안 주체가 ExampleRole이고 요청이 지정된 AWS 리전의 Amazon WorkMail 또는 Amazon Simple Email Service(Amazon SES)에서 오는 경우에만 암호화 및 복호화에 사용할 수 있습니다.",
      "D": "키 정책은 Amazon WorkMail 또는 Amazon Simple Email Service(Amazon SES)가 ExampleRole을 대신하여 계정의 모든 고객 관리형 키를 암호화하거나 복호화할 수 있도록 허용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ KMS Key Policy — KMS 키에 대한 접근을 제어하는 리소스 기반 정책\n▸ Condition — 정책이 적용되기 위한 추가 조건(서비스, 리전 등)\n▸ kms:ViaService — 특정 AWS 서비스를 통한 접근만 허용\n\n【정답 포인트】\n▸ 키 정책의 Principal은 ExampleRole 역할을 지정\n▸ Condition은 kms:ViaService로 WorkMail 또는 SES만 가능\n▸ Condition은 aws:RequestedRegion으로 특정 리전만 허용\n▸ 이 세 가지 조건이 모두 충족될 때만 암호화/복호화 가능\n▸ \"위임된 권한\"이 아니라 \"조건부 직접 권한\"\n\n【오답 체크】\n(A) \"위임된\" 권한이라는 표현은 정확하지 않음. WorkMail/SES가 독립적으로 권한 갖는 것이 아님\n(B) ExampleRole과 AWS 간 직접 암호화는 정책 조건과 맞지 않음\n(D) 계정 전체 키에 대한 권한이 아니라 특정 키에만 적용되고, 조건이 모두 만족해야 함\n\n【시험 포인트】\n▸ KMS 키 정책: Principal + Action + Condition의 조합으로 접근 제어\n▸ kms:ViaService 조건으로 특정 AWS 서비스 경로만 허용\n▸ 리전 조건도 포함되어 지정된 리전에서만 작동\n▸ 모든 조건이 AND 논리로 조합됨",
    "en_q": "What is the effect of the following AWS Key Management Service (AWS KMS) key policy that is attached to a customer managed key?",
    "en_opts": {
      "A": "Amazon WorkMail and Amazon Simple Email Service (Amazon SES) have delegated KMS encrypt and decrypt permissions to the ExampleRole principal in the 111122223333 account.",
      "B": "The ExampleRole principal can transparently encrypt and decrypt email exchanges specifically between ExampleRole and AWS.",
      "C": "The customer managed key can be used for encrypting and decrypting only when the principal is ExampleRole and when the request comes from Amazon WorkMail or Amazon Simple Email Service (Amazon SES) in the specified AWS Region.",
      "D": "The key policy allows Amazon WorkMail or Amazon Simple Email Service (Amazon SES) to encrypt or decrypt on behalf of the ExampleRole for any customer managed key in the account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382949-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 7,
    "question": "회사가 Bob이라는 특정 페더레이션 사용자의 DOC-EXAMPLE-BUCKET이라는 Amazon S3 버킷에 대한 액세스를 거부하려고 합니다. 회사는 버킷 정책을 사용하여 이 요구사항을 충족하려고 합니다. 회사는 또한 이 버킷 정책이 Bob의 S3 권한에만 영향을 미치도록 해야 합니다. Bob이 가진 다른 권한은 그대로 유지되어야 합니다. 회사가 이 요구사항을 충족하기 위해 사용해야 하는 정책은 무엇입니까?",
    "options": {
      "A": "",
      "B": "",
      "C": "",
      "D": ""
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Bucket Policy — S3 버킷 수준에서 리소스 접근을 제어하는 정책\n▸ Explicit Deny — 명시적 거부로, 모든 Allow보다 우선순위가 높음\n▸ Principal — 페더레이션 사용자를 AWS principal ARN으로 지정\n\n【정답 포인트】\n▸ 버킷 정책만으로 특정 사용자를 거부하려면 명시적 Deny 사용\n▸ Effect: \"Deny\"로 설정하여 Bob의 모든 S3 액션을 거부\n▸ Principal은 Bob의 페더레이션 사용자 ARN으로 지정\n▸ Resource는 버킷 및 객체(bucket, bucket/*)를 포함\n▸ IAM 정책이 아닌 버킷 정책이므로 Bob의 다른 권한에 영향 없음\n\n【오답 체크】\n(A) \n(C) \n(D) — 명시적 Deny 없이 Allow 정책만으로는 거부 효과 제한적\n\n【시험 포인트】\n▸ 버킷 정책의 Deny는 IAM 정책과 무관하게 작동\n▸ 페더레이션 사용자의 Principal은 arn:aws:iam::account:federated-user/name 형식\n▸ Explicit Deny가 모든 Allow를 오버라이드함 (우선순위 최고)\n▸ 다른 권한에 영향 주지 않으려면 리소스를 특정 버킷으로 제한",
    "en_q": "A company wants to deny a specific federated user named Bob access to an Amazon S3 bucket named DOC-EXAMPLE-BUCKET. The company wants to meet this requirement by using a bucket policy. The company also needs to ensure that this bucket policy affects Bob's S3 permissions only. Any other permissions that Bob has must remain intact. Which policy should the company use to meet these requirements?",
    "en_opts": {
      "A": "",
      "B": "",
      "C": "",
      "D": ""
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382936-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 9,
    "question": "회사는 중요한 데이터가 영구적으로 삭제되는 것을 방지해야 합니다. 데이터는 Amazon S3 버킷에 저장됩니다. 회사는 기본 AWS 리전에서 S3 객체를 2차 리전으로 복제하여 재해 복구 요구사항을 충족해야 합니다. 회사는 또한 관리자 액세스 권한이 있는 사용자가 2차 리전의 데이터를 영구적으로 삭제할 수 없도록 해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Backup을 구성하여 교차 리전 S3 백업을 수행합니다. 2차 리전에서 백업 자격 증명 모음을 선택합니다. 2차 리전의 백업에 대해 AWS Backup Vault Lock을 governance 모드로 활성화합니다.",
      "B": "기본 리전에서 S3 Object Lock을 compliance 모드로 구현합니다. S3 복제를 구성하여 객체를 2차 리전의 S3 버킷으로 복제합니다.",
      "C": "S3 복제를 구성하여 객체를 2차 리전의 S3 버킷으로 복제합니다. 2차 리전의 S3 버킷에서 s3:ReplicateDelete 작업을 거부하는 S3 버킷 정책을 생성합니다.",
      "D": "S3 복제를 구성하여 객체를 2차 리전의 S3 버킷으로 복제합니다. 2차 리전의 S3 버킷에서 S3 객체 버전 관리를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 Object Lock — S3 객체를 WORM(Write-Once-Read-Many) 모델로 보호\n▸ Compliance Mode — 관리자도 설정된 보유 기간 전에 삭제할 수 없음\n▸ S3 Replication — 한 버킷의 객체를 다른 버킷으로 자동 복제\n\n【정답 포인트】\n▸ Object Lock compliance mode는 root 사용자도 삭제 불가\n▸ 복제 대상 버킷에 Object Lock 설정되면 같은 WORM 보호 유지\n▸ 관리자 권한을 가져도 retention 기간 전 삭제 불가능\n▸ 재해 복구와 데이터 보호를 동시에 만족\n\n【오답 체크】\n(A) Backup Vault Lock governance mode는 관리자가 잠금 해제 가능 (insufficient)\n(C) 버킷 정책은 IAM 정책으로 우회 가능하며, 버킷 정책 변경으로 삭제 가능\n(D) 버전 관리만으로는 영구 삭제를 완전히 방지할 수 없음\n\n【시험 포인트】\n▸ 데이터 불변성 요구 = S3 Object Lock compliance mode\n▸ Compliance mode가 유일한 \"관리자도 변경 불가\" 옵션\n▸ Object Lock은 복제 시 자동으로 대상에도 적용됨\n▸ 거버넌스 모드(governance)는 관리자가 변경 가능 → 부족",
    "en_q": "A company needs a solution to protect critical data from being permanently deleted. The data is stored in Amazon S3 buckets. The company needs to replicate the S3 objects from the company's primary AWS Region to a secondary Region to meet disaster recovery requirements. The company must also ensure that users who have administrator access cannot permanently delete the data in the secondary Region. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure AWS Backup to perform cross-Region S3 backups. Select a backup vault in the secondary Region. Enable AWS Backup Vault Lock in governance mode for the backups in the secondary Region.",
      "B": "Implement S3 Object Lock in compliance mode in the primary Region. Configure S3 replication to replicate the objects to an S3 bucket in the secondary Region.",
      "C": "Configure S3 replication to replicate the objects to an S3 bucket in the secondary Region. Create an S3 bucket policy to deny the s3:ReplicateDelete action on the S3 bucket in the secondary Region.",
      "D": "Configure S3 replication to replicate the objects to an S3 bucket in the secondary Region. Configure S3 object versioning on the S3 bucket in the secondary Region."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382895-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 10,
    "question": "보안 엔지니어가 AWS 계정(ID: 1234156789012)에 영향을 미치는 인시던트에 대응하고 있습니다. 공격으로 인해 여러 AWS 리전에 분산된 워크로드가 생성되었습니다. 보안 엔지니어가 공격을 차단하고 모든 영향을 받는 리전에서 모든 컴퓨팅 및 스토리지 리소스를 제거했습니다. 그러나 공격자는 AWS KMS 키도 생성했습니다. KMS 키의 키 정책은 명시적으로 IAM 보안 주체에 kms:* 권한을 허용합니다. 키는 전날 삭제하도록 예약되었으나 여전히 활성화되어 있고 사용 가능합니다. 키 ARN은 arn:aws;kms:us-east-2:123456789012:key/mrk-0bb0212cd9864fdea0dcamzo26efb5670입니다. 보안 엔지니어는 가능한 한 빨리 키를 삭제해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "계정 루트 사용자 자격증명을 사용하여 로그인합니다. 7일의 대기 기간으로 KMS 키 삭제 요청을 다시 발급합니다.",
      "B": "KMS 키 ID가 있는 다른 리전을 식별하고 7일 후 키 삭제를 예약합니다.",
      "C": "IAM 보안 주체를 업데이트하여 KMS 키 ARN에 대해 kms:* 권한을 허용합니다. 7일의 대기 기간으로 KMS 키 삭제 요청을 다시 발급합니다.",
      "D": "KMS 키를 비활성화합니다. 30일 후 KMS 키 삭제 요청을 다시 발급합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Multi-Region Key (mrk-) — 여러 리전에서 사용 가능한 KMS 키\n▸ Key Deletion Waiting Period — KMS 키 삭제 시 7~30일 대기 기간 필수\n▸ Replica Key — 다른 리전의 동일 키 복사본\n\n【정답 포인트】\n▸ ARN의 mrk- 접두사는 Multi-Region Key를 나타냄\n▸ Multi-Region Key는 모든 복제 리전에서 동시에 삭제해야 함\n▸ 한 리전에서만 삭제 요청 시 다른 리전의 복제가 남아있을 수 있음\n▸ 모든 리전에서 7일 대기 기간으로 삭제 예약하면 동시 삭제 가능\n\n【오답 체크】\n(A) Root 사용자로도 대기 기간을 우회할 수 없음, 7일은 필수\n(C) 키 정책 수정으로는 삭제 가능성 없음, 이미 kms:* 권한 있음\n(D) 비활성화만으로는 보안 요구사항 미충족, 완전 삭제 필요\n\n【시험 포인트】\n▸ Multi-Region Key 식별: mrk- 접두사가 있는 ARN\n▸ MRK 삭제 시 모든 복제 리전 확인 필수\n▸ KMS 삭제 대기 기간은 우회 불가능 (보안 메커니즘)\n▸ 인시던트 응답 시 모든 리전의 악성 리소스 제거 필수",
    "en_q": "A security engineer is responding to an incident that is affecting an AWS account. The ID of the account is 1234156789012. The attack created workloads that are distributed across multiple AWS Regions. The security engineer contains the attack. The security engineer removes all compute and storage resources from all affected Regions. However, the attacker also created an AWS KMS key. The key policy on the KMS key explicitly allows IAM principal kms:* permissions. The key was scheduled to be deleted the previous day. However, the key is still enabled and usable. The key has an ARN of arn:aws;kms:us-east-2:123456789012:key/mrk-0bb0212cd9864fdea0dcamzo26efb5670. The security engineer must delete the key as quickly as possible. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Log in to the account by using the account root user credentials. Re-issue the deletion request for the KMS key with a waiting period of 7 days.",
      "B": "Identify the other Regions where the KMS key ID is present and schedule the key for deletion in 7 days.",
      "C": "Update the IAM principal lo allow kms:* permissions on the KMS key ARN. Re-issue the deletion request for the KMS key with a waiting period of 7 days.",
      "D": "Disable the KMS key. Re-issue the deletion request for the KMS key in 30 days."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382890-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 11,
    "question": "회사가 여러 Amazon EC2 인스턴스 및 온프레미스 서버에 분산된 타사 애플리케이션을 설치했습니다. IT 팀은 때때로 SSH를 사용하여 각 머신에 연결하여 소프트웨어 유지보수 작업을 수행해야 합니다. 이러한 시간 슬롯 외에는 머신이 나머지 네트워크로부터 완전히 격리되어야 합니다. 회사는 SSH 키를 유지보수하고 싶지 않습니다. 또한 회사는 SSH 연결이 있을 때만 머신 시간에 대해 요금을 지불하려고 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "베이션 호스트를 생성하여 머신에 포트 포워딩으로 연결합니다.",
      "B": "AWS Systems Manager Session Manager를 설정하여 임시 연결을 허용합니다.",
      "C": "AWS CloudShell을 사용하여 서버리스 연결을 생성합니다.",
      "D": "각 머신에 대한 인터페이스 VPC 엔드포인트를 설정하여 프라이빗 연결을 만듭니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Session Manager — IAM 역할 기반으로 EC2/온프레미스 서버에 접근 (SSH 키 불필요)\n▸ Bastion Host — SSH 키를 관리해야 하고, 계속 실행 필요\n▸ Systems Manager Agent — Session Manager 사용을 위한 필수 에이전트\n\n【정답 포인트】\n▸ SSH 키 유지보수 불필요 → Session Manager (IAM 기반)\n▸ 임시 연결 → Session Manager로 on-demand 세션 생성\n▸ 네트워크 격리 → Session Manager는 최소 권한으로 접근 제어\n▸ 비용 최적화 → 연결 시간만 비용 발생 (베이션은 24/7 실행)\n▸ EC2 + 온프레미스 모두 지원 → Hybrid Activations 사용\n\n【오답 체크】\n(A) Bastion Host는 SSH 키 관리 필요하고, 항상 실행 → 비용 낭비\n(C) CloudShell은 AWS Management Console 내 셸로, 온프레미스 직접 접근 불가\n(D) Interface VPC Endpoint는 SSH 액세스 제공하지 않음 (API 엔드포인트용)\n\n【시험 포인트】\n▸ SSH 키 없음 = Session Manager (IAM 기반 인증)\n▸ 임시/on-demand 접근 = Session Manager의 강점\n▸ EC2 + 온프레미스 모두 = Hybrid Activations으로 해결\n▸ 비용 최적화 = 연결 시간만 청구되는 Session Manager 활용",
    "en_q": "A company has installed a third-party application that is distributed on several Amazon EC2 instances and on-premises servers. Occasionally, the company's IT team needs to use SSH to connect to each machine to perform software maintenance tasks. Outside these time slots, the machines must be completely isolated from the rest of the network. The company does not want to maintain any SSH keys. Additionally, the company wants to pay only for machine hours when there is an SSH connection. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a bastion host with port forwarding to connect to the machines.",
      "B": "Set up AWS Systems Manager Session Manager to allow temporary connections.",
      "C": "Use AWS CloudShell to create serverless connections.",
      "D": "Set up an interface VPC endpoint for each machine for private connection."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382918-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 12,
    "question": "회사는 Amazon Elastic Kubernetes Service(Amazon EKS)에서 여러 애플리케이션을 실행합니다. 회사는 Amazon EKS 감사 로그와 함께 운영 체제, 네트워킹 및 파일 이벤트를 모니터링하여 Kubernetes 보안 위험을 탐지하는 솔루션이 필요합니다. 솔루션은 식별된 위험에 대해 보안 팀과 연결된 메일링 리스트로 이메일 경고를 보내야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Security Hub를 배포하고 EKS 제어를 포함하는 보안 표준을 활성화합니다. Amazon Simple Notification Service(Amazon SNS) 주제를 생성하고 보안 팀의 메일링 리스트를 구독자로 설정합니다. Amazon EventBridge 규칙을 사용하여 관련 Security Hub 이벤트를 SNS 주제로 전송합니다.",
      "B": "Amazon Inspector 컨테이너 이미지 스캔을 활성화합니다. Amazon Detective를 구성하여 EKS 보안 로그를 분석합니다. EKS 감사 로그에 대한 Amazon CloudWatch 로그 그룹을 생성합니다. AWS Lambda 함수를 사용하여 로그를 처리하고 보안 팀에 이메일 경고를 보냅니다.",
      "C": "Amazon GuardDuty를 활성화합니다. GuardDuty에서 Amazon EKS용 EKS Protection 및 Runtime Monitoring을 활성화합니다. Amazon Simple Notification Service(Amazon SNS) 주제를 생성하고 보안 팀의 메일링 리스트를 구독자로 설정합니다. Amazon EventBridge 규칙을 사용하여 관련 GuardDuty 이벤트를 SNS 주제로 전송합니다.",
      "D": "모든 EKS 노드에 AWS Systems Manager Agent(SSM Agent)를 설치합니다. Amazon CloudWatch Logs를 구성하여 EKS 감사 로그를 수집합니다. Amazon Simple Notification Service(Amazon SNS) 주제를 생성하고 보안 팀의 메일링 리스트를 구독자로 설정합니다. 새 감사 로그가 생성되지 않을 때 SNS 주제에 메시지를 게시하도록 CloudWatch 경보를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ GuardDuty — AWS 전체의 위협 탐지 서비스\n▸ EKS Protection — GuardDuty의 EKS 특화 기능\n▸ Runtime Monitoring — 런타임 동작 감시 (파일, 네트워킹 등)\n▸ EventBridge → SNS → Email — 자동 알림 흐름\n\n【정답 포인트】\n▸ EKS 감사 로그 모니터링 = GuardDuty EKS Protection\n▸ 운영체제/네트워킹/파일 이벤트 = GuardDuty Runtime Monitoring\n▸ 실시간 위협 탐지 = GuardDuty의 기계학습 기반 탐지\n▸ 자동 알림 = EventBridge + SNS + 메일링 리스트\n▸ AWS 관리형 서비스 = 최소 운영 오버헤드\n\n【오답 체크】\n(A) Security Hub는 설정 규정 준수 중심이고, 런타임 위협 탐지 부족\n(B) Inspector는 이미지 취약성 스캔 중심, 감사 로그/런타임 모니터링 부족\n(D) 수동 CloudWatch 로그 처리는 Lambda 필요하고, 복잡도 높음\n\n【시험 포인트】\n▸ EKS + 감사 로그 + 런타임 모니터링 = GuardDuty 선택\n▸ GuardDuty EKS Protection은 감사 로그 + 런타임 이벤트 종합 분석\n▸ Runtime Monitoring으로 파일/네트워킹/프로세스 감지\n▸ 실제 위협 탐지(Threat Detection) = GuardDuty, 규정 준수(Compliance) = Security Hub",
    "en_q": "A company runs several applications on Amazon Elastic Kubernetes Service (Amazon EKS). The company needs a solution to detect any Kubernetes security risks by monitoring Amazon EKS audit logs in addition to operating system, networking, and file events. The solution must send email alerts for any identified risks to a mailing list that is associated with a security team. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy AWS Security Hub and enable security standards that contain EKS controls. Create an Amazon Simple Notification Service (Amazon SNS) topic and set the security team's mailiing list as a subscriber. Use an Amazon EventBridge rule to send relevant Security Hub events to the SNS topic.",
      "B": "Enable Amazon Inspector container image scanning. Configure Amazon Detective to analyze EKS security logs. Create Amazon CloudWatch log groups for EKS audit logs. Use an AWS Lambda function to process the logs and to send email alerts to the security team.",
      "C": "Enable Amazon GuardDuty Enable EKS Protection and Runtime Monitoring for Amazon EKS in GuardDuty. Create an Amazon Simple Notification Service (Amazon SNS) topic and set the security team's mailing list as a subscriber. Use an Amazon EventBridge rule to send relevant GuardDuty events to the SNS topic.",
      "D": "Install the AWS Systems Manager Agent (SSM Agent) on all EKS nodes. Configure Amazon CloudWatch Logs lo collect EKS audit logs. Create an Amazon Simple Notification Service (Amazon SNS) topic and set the security team's mailing list as a subscriber. Configure a CloudWatch alarm to publish a message to the SNS topic when now audit logs are generated."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382891-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 13,
    "question": "회사가 사용자들이 자신의 휴대폰에 모바일 앱을 다운로드하도록 허용합니다. 앱은 MQTT 기반이며 AWS IoT Core에 연결하여 클라이언트 관련 주제를 구독합니다. 최근 회사는 악의적인 공격자들이 정상 애플리케이션을 가장하고 특수 문자가 삽입된 클라이언트 ID를 사용하여 클라이언트의 권한 범위를 벗어난 주제에 액세스하려고 시도하고 있음을 발견했습니다. 회사가 이 위협을 방지하기 위해 취해야 할 조치 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "애플리케이션에서 IoT thing 이름을 클라이언트 ID로 사용하여 기기를 AWS IoT Core에 연결합니다.",
      "B": "애플리케이션에서 클라이언트 ID 확인을 추가합니다. 특수 문자가 감지되면 서버에서 연결을 끊습니다.",
      "C": "principal을 \"client/${iot:Connection.Thing.ThingName}\"로 설정하여 \"AWSIoTWirelessDataAccess\"를 허용하는 AWS IoT Core 정책을 적용합니다.",
      "D": "리소스를 \"client/${iot:ClientId}\"로 설정하여 \"iot:Connect\"를 허용하는 AWS IoT Core 정책을 기기에 적용합니다.",
      "E": "리소스를 \"client/${iot:Connection.Thing.ThingName}\"로 설정하여 \"iot:Connect\"를 허용하는 AWS IoT Core 정책을 기기에 적용합니다."
    },
    "answer": "AE",
    "explanation": "【핵심 용어】\n▸ IoT Thing Name — IoT Core의 보안 주체로 등록된 안전한 식별자\n▸ Client ID — MQTT 연결 시 클라이언트가 제공하는 ID (공격자 조작 가능)\n▸ Policy Variable — iot:ClientId vs iot:Connection.Thing.ThingName\n\n【정답 포인트】\n▸ \n(A) IoT Thing Name 사용 → 클라이언트 ID 조작 방지 (안전한 인증)\n▸ \n(E) iot:Connection.Thing.ThingName 사용 → Thing 검증된 이름으로 권한 확인\n▸ \n(A) +\n(E) 조합: 인증(Thing Name) + 인가(Thing Name 기반 정책)\n▸ ClientId 대신 Thing Name을 사용하면 특수 문자 주입 불가능\n\n【오답 체크】\n(B) 애플리케이션 검증은 부족하고, Trojan 탐지 어려움\n(C) AWSIoTWirelessDataAccess는 LoRaWAN용으로 MQTT 주제와 무관\n(D) iot:ClientId 기반 정책은 ClientId 조작으로 권한 범위 우회 가능\n\n【시험 포인트】\n▸ IoT 보안: Thing 기반 인증이 ClientId 기반보다 안전\n▸ iot:Connection.Thing.ThingName은 AWS가 검증한 안전한 값\n▸ ${iot:ClientId}는 클라이언트 제공 값으로 신뢰할 수 없음\n▸ 두 가지 조치 (인증+인가) 모두 필요 → defense in depth",
    "en_q": "A company allows users to download its mobile app onto their phones. The app is MQTT based and connects to AWS IoT Core lo subscribe la specific client-related topics. Recently, the company discovered that some malicious attackers have been trying to get a Trojan horse onto legitimate mobile phones. The Trojan horse poses as the authentic application and uses a client ID with injected special characters to gain access to topics outside the client's privilege scope. Which combination of actions should the company take to prevent this threat? (Choose two.)",
    "en_opts": {
      "A": "In the application, use an IoT thing name as the client ID to conned the device to AWS IoT Core.",
      "B": "In the application, add a client ID check. Disconnect from the server if any special character is detected.",
      "C": "Apply an AWS IoT Core policy that allows \"AWSIoTWirelessDataAccess\" with the principal set to \"client/${iot:Connection.Thing.ThingName}\"",
      "D": "Apply an AWS IoT Core policy to the device to allow \"iot:Connect\" with the resource set to \"client/${iot:ClientId}\".",
      "E": "Apply an AWS IoT Core policy to the device to allow \"iot:Connect\" with the resource set to \"client/${iot:Connection.Thing.ThingName)\"."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382892-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 14,
    "question": "보안 엔지니어가 특정 AWS 리소스에 대한 설정 변경을 평가하여 리소스가 규정 준수 표준을 충족하는지 확인하려고 합니다. 그러나 보안 엔지니어는 여러 설정 변경이 빠르게 연속으로 리소스에 적용되는 상황이 우려됩니다. 보안 엔지니어는 변경 집합의 누적 영향을 나타내기 위해 해당 리소스의 최신 설정만 기록하려고 합니다. 이 요구사항을 가장 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS CloudTrail을 사용하여 API 호출을 필터링하여 설정 변경을 감지합니다. 가장 최근의 API 호출을 사용하여 여러 호출의 누적 영향을 나타냅니다.",
      "B": "AWS Config를 사용하여 설정 변경을 감지하고 여러 설정 변경이 발생한 경우 최신 설정을 기록합니다.",
      "C": "Amazon CloudWatch를 사용하여 API 호출을 필터링하여 설정 변경을 감지합니다. 가장 최근의 API 호출을 사용하여 여러 호출의 누적 영향을 나타냅니다.",
      "D": "AWS Cloud Map을 사용하여 설정 변경을 감지합니다. AWS Cloud Map에서 설정 변경 보고서를 생성하여 슬라이딩 시간 윈도우를 사용하는 최신 상태를 추적합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Config — 리소스 설정의 스냅샷을 기록하고 변경 추적\n▸ Configuration Snapshot — 리소스의 현재 상태를 자동 기록\n▸ Change Aggregation — 빠른 변경 여러 개를 하나로 집계\n\n【정답 포인트】\n▸ Config는 \"최신 설정만 기록\" 하는 것이 핵심 기능\n▸ 빠른 연속 변경 시에도 마지막 상태만 저장 (자동 집계)\n▸ 규정 준수 평가에 최적화된 서비스\n▸ 운영 효율성 높음 (자동 추적, 별도 처리 불필요)\n\n【오답 체크】\n(A) CloudTrail은 모든 API 호출을 기록하므로 중복 분석 필요\n(C) CloudWatch는 메트릭/로그 모니터링 중심으로 설정 추적 부적합\n(D) Cloud Map은 서비스 디스커버리 서비스로 설정 감시 목적이 아님\n\n【시험 포인트】\n▸ 리소스 설정 추적 = AWS Config (전문 서비스)\n▸ \"최신 상태만\" 요구사항 = Config의 기본 동작\n▸ 규정 준수 중심 = Config가 최적 (Compliance 평가 내장)\n▸ CloudTrail은 감사/인증 추적용이지, 설정 상태 추적용 아님",
    "en_q": "A security engineer wants to evaluate configuration changes to a specific AWS resource to ensure that the resource meets compliance standards. However, the security engineer is concerned about a situation in which several configuration changes are made to the resource in quick succession. The security engineer wants to record only the latest configuration of that resource to indicate the cumulative impact of the set of changes. Which solution will meet this requirement in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Use AWS CloudTrail to detect the configuration changes by filtering API calls to monitor the changes. Use the most recent API call to indicate the cumulative impact of multiple calls.",
      "B": "Use AWS Config to detect the configuration changes and to record the latest configuration in case of multiple configuration changes.",
      "C": "Use Amazon CloudWatch to detect the configuration changes by filtering API calls to monitor the changes. Use the most recent API call to indicate the cumulative impact of multiple calls.",
      "D": "Use AWS Cloud Map to detect the configuration changes. Generate a report of configuration changes from AWS Cloud Map to track the latest state by using a sliding time window."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382894-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 15,
    "question": "보안 엔지니어는 회사가 암호화 작업에 사용하는 키를 생성하고 제어하는 솔루션을 구현해야 합니다. 보안 엔지니어는 AWS CloudHSM 클러스터가 지원하는 커스텀 키 스토어에서 키 자료가 생성되고 사용되는 대칭 키를 생성해야 합니다. 보안 엔지니어는 애플리케이션 내에서 로컬 사용을 위한 대칭 및 비대칭 데이터 키 쌍을 사용합니다. 보안 엔지니어는 또한 키 사용을 감사해야 합니다. 보안 엔지니어는 이 요구사항을 어떻게 충족할 수 있습니까?",
    "options": {
      "A": "키를 생성하려면 AWS Key Management Service(AWS KMS)와 CloudHSM 클러스터를 포함한 커스텀 키 스토어를 사용합니다. 감사를 위해 Amazon Athena를 사용합니다.",
      "B": "키를 생성하려면 Amazon S3과 CloudHSM 클러스터를 포함한 커스텀 키 스토어를 사용합니다. 감사를 위해 AWS CloudTrail을 사용합니다.",
      "C": "키를 생성하려면 AWS Key Management Service(AWS KMS)와 CloudHSM 클러스터를 포함한 커스텀 키 스토어를 사용합니다. 감사를 위해 Amazon GuardDuty를 사용합니다.",
      "D": "키를 생성하려면 AWS Key Management Service(AWS KMS)와 CloudHSM 클러스터를 포함한 커스텀 키 스토어를 사용합니다. 감사를 위해 AWS CloudTrail을 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS KMS Custom Key Store — CloudHSM 클러스터로 백업되는 KMS 키\n▸ CloudHSM — 고객 관리형 HSM으로 키 자료를 완전 제어\n▸ CloudTrail — KMS API 호출 및 키 사용을 감시하는 감사 로그\n\n【정답 포인트】\n▸ 커스텀 키 스토어 = KMS (CloudHSM 백엔드 옵션)\n▸ 키 감시 = CloudTrail (KMS API 로그 기록)\n▸ CloudHSM은 물리적 보안과 키 제어, KMS는 관리 계층\n▸ 규정/감사 요구사항 = CloudTrail이 표준\n\n【오답 체크】\n(A) Amazon Athena는 데이터 분석 도구로 감사 로그 전용 아님\n(B) Amazon S3은 키 저장소가 아니라 데이터 저장소\n(C) Amazon GuardDuty는 위협 탐지 서비스로 KMS 감시 목적 아님\n\n【시험 포인트】\n▸ CloudHSM 기반 KMS = Custom Key Store 필수\n▸ KMS 키 감사 = CloudTrail (표준 감시)\n▸ HSM + KMS 조합으로 최고 수준의 암호화 키 보안\n▸ KMS API 호출 추적 = CloudTrail 로그에 기록됨",
    "en_q": "A security engineer needs to implement a solution to create and control the keys that a company uses for cryptographic operations. The security engineer must create symmetric keys in which the key material is generated and used within a custom key store that is backed by an AWS CloudHSM cluster. The security engineer will use symmetric and asymmetric data key pairs for local use within applications. The security engineer also must audit the use of the keys. How can the security engineer meet these requirements?",
    "en_opts": {
      "A": "To create the keys, use AWS Key Management Service (AWS KMS) and the custom key stores with the CloudHSM cluster. For auditing, use Amazon Athena.",
      "B": "To create the keys, use Amazon S3 and the custom key stores with the CloudHSM cluster. For auditing, use AWS CloudTrail.",
      "C": "To create the keys, use AWS Key Management Service (AWS KMS) and the custom key stores with the CloudHSM cluster. For auditing, use Amazon GuardDuty.",
      "D": "To create the keys, use AWS Key Management Service (AWS KMS) and the custom key stores with the CloudHSM cluster. For auditing, use AWS CloudTrail."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382929-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 16,
    "question": "회사는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 애플리케이션을 실행하고 있습니다. 애플리케이션은 로그를 로컬에 저장합니다. 보안 엔지니어는 스케일 인 이벤트 후 로그가 손실된 것을 발견했습니다. 보안 엔지니어는 로그 데이터의 내구성과 가용성을 보장하는 솔루션을 권장해야 합니다. 모든 로그는 감사 목적으로 최소 1년간 보관되어야 합니다. 보안 엔지니어가 권장해야 할 사항은 무엇입니까?",
    "options": {
      "A": "Auto Scaling 라이프사이클 내에서 EC2 인스턴스가 생성될 때마다 Amazon Elastic Block Store(Amazon EBS) 로그 볼륨을 생성하고 연결하는 후크를 추가합니다. 인스턴스가 종료될 때 EBS 볼륨을 다른 인스턴스에 재연결하여 로그를 검토할 수 있습니다.",
      "B": "Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성하고 Auto Scaling 시작 템플릿의 사용자 데이터 섹션에 명령을 추가하여 EC2 인스턴스 생성 중 EFS 파일 시스템을 마운트합니다. 인스턴스에서 매일 Amazon Elastic Block Store(Amazon EBS) 볼륨의 로그를 EFS 파일 시스템의 디렉토리로 복사하는 프로세스를 구성합니다.",
      "C": "Amazon CloudWatch agent를 Auto Scaling 그룹에서 사용하는 AMI에 추가합니다. CloudWatch agent를 구성하여 로그를 Amazon CloudWatch Logs로 전송합니다.",
      "D": "Auto Scaling 라이프사이클 내에서 종료 상태 전환에서 라이프사이클 후크를 추가하고 Amazon Simple Notification Service(Amazon SNS)를 사용하여 엔지니어링 팀에 라이프사이클 알림을 보냅니다. 인스턴스 종료 전에 보안 로그를 수동 검토할 수 있도록 후크를 Terminating:Wait 상태로 1시간 동안 유지하도록 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudWatch Logs — 중앙화된 로그 스토리지로 인스턴스 독립적\n▸ CloudWatch Agent — EC2에 설치되어 로그를 CloudWatch Logs로 전송\n▸ Auto Scaling 라이프사이클 — 인스턴스 시작/종료 시 자동 처리\n\n【정답 포인트】\n▸ 로그 손실 방지 = 중앙 로그 수집 (CloudWatch Logs)\n▸ 자동화 = CloudWatch Agent가 자동으로 로그 전송\n▸ 내구성 = AWS 관리형 스토리지 (1년 보관 정책 설정 가능)\n▸ 스케일링 무관 = 인스턴스가 아닌 CloudWatch에 저장\n▸ 가용성 = CloudWatch Logs 자동 복제\n\n【오답 체크】\n(A) EBS 재연결은 복잡하고, 스케일 아웃 시 대응 불가\n(B) EFS 마운트는 복잡하고, 매일 복사 자동화도 필요\n(D) 수동 검토는 자동화 부족, 로그 손실 완전 방지 불가\n\n【시험 포인트】\n▸ Auto Scaling 환경 = 중앙 로그 수집 (CloudWatch Logs 필수)\n▸ CloudWatch Agent = AMI 한 번 추가로 자동 적용\n▸ 1년 보관 = CloudWatch Logs 보관 정책으로 자동 관리\n▸ 인스턴스 독립적 = 스케일 인 후에도 로그 유지",
    "en_q": "A company is running an application on Amazon EC2 instances in an Auto Scaling group. The application stores logs locally. A security engineer noticed that logs were lost after a scale-in event. The security engineer needs to recommend a solution to ensure the durability and availability of log data. All logs must be kept for a minimum of 1 year for auditing purposes. What should the security engineer recommend?",
    "en_opts": {
      "A": "Within the Auto Scaling lifecycle, add a hook to create and attach an Amazon Elastic Block Store (Amazon EBS) log volume each time an EC2 instance is created. When the instance is terminated, the EBS volume can be reattached to another instance for log review.",
      "B": "Create an Amazon Elastic File System (Amazon EFS) file system and add a command in the user data section of the Auto Scaling launch template to mount the EFS file system during EC2 instance creation. Configure a process on the instance to copy the logs once a day from an instance Amazon Elastic Block Store (Amazon EBS) volume to a directory in the EFS file system.",
      "C": "Add an Amazon CloudWatch agent into the AMI used in the Auto Scaling group. Configure the CloudWatch agent to send the logs to Amazon CloudWatch Logs for review.",
      "D": "Within the Auto Scaling lifecycle, add a lifecycle hook at the terminating state transition and alert the engineering team by using a lifecycle notification to Amazon Simple Notification Service (Amazon SNS). Configure the hook to remain in the Terminating:Wait state for 1 hour to allow manual review of the security logs prior to instance termination."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382948-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 17,
    "question": "회사는 AWS를 사용하여 Amazon S3 버킷에 저장된 데이터에 대한 장기 분석 프로세스를 실행합니다. 프로세스는 Auto Scaling 그룹에 있는 Amazon EC2 인스턴스의 플릿에서 실행됩니다. EC2 인스턴스는 인터넷 접근이 없는 VPC의 프라이빗 서브넷에 배포됩니다. EC2 인스턴스와 S3 버킷은 동일한 AWS 계정에 있습니다. EC2 인스턴스는 기본 접근 정책이 있는 S3 게이트웨이 엔드포인트를 통해 S3 버킷에 액세스합니다. 각 EC2 인스턴스는 필요한 S3 버킷에만 s3:GetObject 작업과 s3:PutObject 작업을 명시적으로 허용하는 정책이 있는 인스턴스 프로필 역할과 연결됩니다. 회사는 하나 이상의 EC2 인스턴스가 손상되어 회사의 AWS Organizations 외부의 S3 버킷으로 데이터를 유출하고 있음을 알게 됩니다. 보안 엔지니어는 이 데이터 유출을 중지하고 EC2 처리 작업을 계속 작동시키는 솔루션을 구현해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 게이트웨이 엔드포인트의 정책을 업데이트하여 aws:ResourceOrgID와 aws:PrincipalOrgID 조건 키의 값이 회사의 값과 일치할 때만 S3 작업을 허용합니다.",
      "B": "인스턴스 프로필 역할의 정책을 업데이트하여 aws:ResourceOrgID 조건 키의 값이 회사의 값과 일치할 때만 S3 작업을 허용합니다.",
      "C": "EC2 인스턴스의 서브넷에 네트워크 ACL 규칙을 추가하여 포트 443에서의 아웃바운드 연결을 차단합니다.",
      "D": "AWS 계정에 SCP를 적용하여 aws:ResourceOrgID와 aws:PrincipalOrgID 조건 키의 값이 회사의 값과 일치할 때만 S3 작업을 허용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 Gateway Endpoint — VPC 내에서 인터넷 없이 S3 접근 가능\n▸ aws:ResourceOrgID — 리소스가 속한 AWS Organizations ID\n▸ aws:PrincipalOrgID — 요청자가 속한 Organizations ID\n▸ Endpoint Policy — VPC 엔드포인트 수준의 접근 제어\n\n【정답 포인트】\n▸ 게이트웨이 엔드포인트 정책은 VPC 내 모든 트래픽을 제어\n▸ 두 OrgID 조건으로 Organizations 내부 버킷만 허용\n▸ 외부 버킷 접근 자동 차단 (엔드포인트 수준)\n▸ IAM 정책은 이미 최소 권한 설정됨\n▸ 엔드포인트 정책이 더 효과적한 통제점\n\n【오답 체크】\n(B) ResourceOrgID만으로는 PrincipalOrgID 검증 부족\n(C) 포트 443 차단은 S3 데이터 플레인 영향, 관리 작업 차단 가능\n(D) SCP는 조직 전체에 영향, 계정 내 조직이 없으면 비효과적\n\n【시험 포인트】\n▸ Organizations 내부 리소스만 허용 = 양쪽 OrgID 조건 필수\n▸ VPC 엔드포인트 정책이 첫 번째 방어선 (가장 가까운 지점)\n▸ 아웃바운드 필터링 = 포트 차단(L4)보다 리소스 수준(L7) 통제 선호\n▸ EC2 프로세스 계속 작동 = 내부 리소스만 허용하면 OK",
    "en_q": "A company is using AWS to run a long-running analysis process on data that is stored in Amazon S3 buckets. The process runs on a fleet of Amazon EC2 instances that are in an Auto Scaling group. The EC2 instances are deployed in a private subnet of a VPC that does not have internet access. The EC2 instances and the S3 buckets are in the same AWS account. The EC2 instances access the S3 buckets through an S3 gateway endpoint that has the default access policy. Each EC2 instance is associated with an instance profile role that has a policy that explicitly allows the s3:GetObject action and the s3:PutObject action for only the required S3 buckets. The company learns that one or more of the EC2 instances are compromised and are exfiltrating data to an S3 bucket that is outside the company's organization in AWS Organizations. A security engineer must implement a solution to stop this exfiltration of data and to keep the EC2 processing job functional. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Update the policy on the S3 gateway endpoint to allow the S3 actions only if the values of the aws:ResourceOrgID and aws:PrincipalOrgID condition keys match the company's values.",
      "B": "Update the policy on the instance profile role to allow the S3 actions only if the value of the aws:ResourceOrgID condition key matches the company's value.",
      "C": "Add a network ACL rule to the subnet of the EC2 instances to block outgoing connections on port 443.",
      "D": "Apply an SCP on the AWS account to allow the S3 actions only if the values of the aws:ResourceOrgID and aws:PrincipalOrgID condition keys match the company's values."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382893-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 18,
    "question": "회사는 최근 클라우드 기반 환경에서 악의적인 공격을 받았습니다. 회사가 성공적으로 공격을 차단하고 제거했습니다. 보안 엔지니어가 인시던트 대응 작업을 수행하고 있습니다. 보안 엔지니어는 Amazon RDS 데이터베이스 클러스터를 마지막으로 알려진 좋은 상태로 복구해야 합니다. 데이터베이스 클러스터는 14일의 보관 기간으로 자동화된 백업을 생성하도록 구성됩니다. 초기 공격은 정확히 5일 전의 오후 3시 15분에 발생했습니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터베이스의 리전 클러스터 ARN을 식별합니다. ARN을 사용하여 시간 복원 지점으로 복원 기능을 사용하여 리전 클러스터를 복원합니다. 대상 시간을 5일 전 오후 3시 14분으로 설정합니다.",
      "B": "데이터베이스의 리전 클러스터 ARN을 식별합니다. 클러스터의 스냅샷 목록을 작성합니다. 생성 시간이 5일 전 오후 3시 14분에 가장 가까운 스냅샷을 사용하여 데이터베이스를 복원합니다.",
      "C": "회사의 모든 RDS 데이터베이스의 스냅샷을 모두 나열합니다. 5일 전 오후 3시 14분에 가장 가까운 시간에 작성된 스냅샷을 식별하고 복원합니다.",
      "D": "데이터베이스의 리전 클러스터 ARN을 식별합니다. ARN을 사용하여 시간 복원 지점으로 복원 기능을 사용하여 리전 클러스터를 복원합니다. 대상 시간을 14일 전으로 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Point-in-Time Recovery (PITR) — 특정 시간으로 데이터베이스 복구\n▸ Automated Backup — RDS가 자동으로 생성하는 백업\n▸ Backup Retention Period — 백업이 유지되는 기간 (14일)\n\n【정답 포인트】\n▸ 공격이 오후 3:15에 발생 → 그 직전(3:14)로 복구 필요\n▸ PITR은 자동 백업 기반으로 초 단위 복구 가능\n▸ 5일 < 14일 보관 기간 → 자동 백업으로 충분\n▸ ARN 사용 → 특정 클러스터 지정 필수\n▸ 정확한 시간 지정 가능 (3:14 vs 3:15)\n\n【오답 체크】\n(B) 스냅샷은 자동 생성되지 않고 수동 생성/정기 생성 필요\n(C) 전체 스냅샷 목록은 비효율적, 특정 클러스터만 필요\n(D) 14일 전은 공격 발생 전 너무 오래전 상태 (공격 후 변경사항 포함)\n\n【시험 포인트】\n▸ RDS PITR = 자동 백업 기반, 보관 기간 내 가능\n▸ 정확한 타이밍 = 공격 발생 직전 시간으로 복구\n▸ 초 단위 정밀도 = 3:14 vs 3:15 차이 중요\n▸ 클러스터 ARN = 특정 리소스 복구 보장",
    "en_q": "A company recently experienced a malicious attack on its cloud-based environment. The company successfully contained and eradicated the attack A security engineer is performing incident response work. The security engineer needs to recover an Amazon RDS database cluster to the last known good version. The database cluster is configured to generate automated backups with a retention period of 14 days. The initial attack occurred 5 days ago at exactly 3:15 PM Which solution will meet this requirement?",
    "en_opts": {
      "A": "Identify the Regional duster ARN for the database. Use the ARN to restore the Regional cluster by using the Restore to point in time feature. Set a target time 5 days ago at 3:14 PM.",
      "B": "Identify the Regional cluster ARN for the database. List snapshots that have been taken of the cluster. Restore the database by using the snapshot that has a creation time that is closest to 5 days ago at 3:14 PM.",
      "C": "List all snapshots that have been taken of all the company's RDS databases. Identify the snapshot that was taken closest to 5 days ago at 3:14 PM and restore it.",
      "D": "Identify the Regional cluster ARN for the database. Use the ARN to restore the Regional cluster by using the Restore to point in time feature. Set a target time 14 days ago."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382907-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 19,
    "question": "회사의 보안 엔지니어는 손상된 IAM 사용자 계정 자격증명을 다루는 인시던트 대응 계획을 설계해야 합니다. 회사는 AWS Organizations의 조직과 AWS IAM Identity Center를 사용하여 사용자 접근을 관리합니다. 회사는 AWS Security Hub를 구현하기 위해 위임된 관리자 계정을 사용합니다. 위임된 관리자 계정에는 모든 이벤트를 Amazon S3 버킷에 기록하는 AWS CloudTrail의 조직 추적이 있습니다. 회사는 또한 추적의 모든 이벤트를 캡처하는 조직 이벤트 데이터 스토어를 구성했습니다. 인시던트 대응 계획은 보안 엔지니어가 보안 인시던트 알림을 받을 때 손상된 IAM 사용자를 즉시 비활성화할 수 있는 단계를 제공해야 합니다. 계획은 IAM 사용자가 모든 AWS 계정에서 사용되는 것을 방지해야 합니다. 또한 계획은 손상된 IAM 사용자가 지난 7일 동안 수행한 모든 AWS 작업을 수집해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "조직 관리 계정에서 손상된 IAM 사용자를 비활성화합니다. Amazon Athena를 사용하여 S3 버킷의 조직 CloudTrail 로그에서 IAM 사용자가 지난 7일 동안 수행한 작업을 쿼리합니다.",
      "B": "조직 관리 계정에서 IAM 사용자에게 연결된 모든 IAM 정책을 제거합니다. Security Hub를 사용하여 IAM 사용자가 지난 7일 동안 수행한 작업에 대한 CloudTrail 로그를 쿼리합니다.",
      "C": "IAM Identity Center에서 IAM 사용자에게 할당된 모든 권한 집합을 제거합니다. Amazon CloudWatch Logs Insights를 사용하여 S3 버킷의 조직 CloudTrail 로그를 직접 쿼리하여 IAM 사용자가 지난 7일 동안 수행한 작업을 찾습니다.",
      "D": "IAM Identity Center에서 IAM 사용자의 액세스를 비활성화합니다. CloudTrail을 사용하여 조직 이벤트 데이터 스토어에서 IAM 사용자가 지난 7일 동안 수행한 작업을 쿼리합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ IAM Identity Center — 조직 전체 사용자 접근 관리 (federated user)\n▸ Organizational Event Data Store — CloudTrail의 이벤트 데이터베이스 (쿼리 가능)\n▸ Organization Trail — 조직의 모든 계정 이벤트 기록\n▸ CloudTrail Insights Query — 이벤트 데이터 스토어 조회\n\n【정답 포인트】\n▸ 즉시 비활성화 = IAM Identity Center에서 사용자 비활성화 (모든 계정 영향)\n▸ 모든 AWS 계정 차단 = Identity Center 비활성화가 가장 효과적\n▸ 과거 7일 활동 조회 = 이미 구성된 조직 이벤트 데이터 스토어 사용\n▸ CloudTrail 쿼리 = CloudTrail 서비스로 이벤트 데이터 스토어 직접 쿼리\n\n【오답 체크】\n(A) 조직 관리 계정만 비활성화로는 다른 계정 영향 없음\n(B) 정책 제거만으로는 사용자 완전 비활성화 보장 불가\n(C) 권한 집합 제거는 부분적, CloudWatch Logs Insights는 S3 직접 쿼리로 느림\n\n【시험 포인트】\n▸ IAM Identity Center 사용 = Identity Center 비활성화로 조직 전체 영향\n▸ 조직 이벤트 데이터 스토어 = 이미 존재하므로 바로 쿼리 가능\n▸ CloudTrail 서비스 쿼리 = S3 → Athena보다 직관적, 빠름\n▸ 가장 효율적 = Identity Center + 이미 구성된 이벤트 데이터 스토어 활용",
    "en_q": "A security engineer for a company needs to design an incident response plan that addresses compromised IAM user account credentials. The company uses an organization in AWS Organizations and AWS IAM Identify Center to manage user access. The company uses a delegated administrator account to implement AWS Security Hub. The delegated administrator account contains an organizational trail in AWS CloudTrail that logs all events to an Amazon S3 bucket. The company has also configured an organizational event data store that captures all events from the trail. The incident response plan must provide steps that the security engineer can take to immediately disable any compromised IAM user when the security engineer receives a notification of a security incident. The plan must prevent the IAM user from being used in any AWS account. The plan must also collect all AWS actions that the compromised IAM user performed across all accounts in the previous 7 days. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Disable the compromised IAM user in the organization management account. Use Amazon Athena to query the organizational CloudTrail logs in the S3 bucket for actions that the IAM user performed in the previous 7 days.",
      "B": "Remove all IAM policies that are attached to the IAM user in the organization management account. Use Security Hub to query the CloudTrail logs for actions that the IAM user performed in the previous 7 days.",
      "C": "Remove any permission sets that arc assigned to the IAM user in IAM Identity Center. Use Amazon CloudWatch Logs Insights to directly query the organizational CloudTrail logs in the S3 bucket for actions that the IAM user performed m the previous 7 days.",
      "D": "Disable the IAM user's access in IAM Identity Center. Use CloudTrail to query the organizational event data store for actions that the IAM user performed in the previous 7 days."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382926-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 20,
    "question": "보안 엔지니어는 VPC에서 민감한 워크로드를 실행하는 Amazon EC2 인스턴스 플릿의 보안 제어를 설계하고 있습니다. 보안 엔지니어는 EC2 인스턴스에서 소프트웨어 취약점을 탐지하고 완화하는 솔루션을 구현해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Inspector를 사용하여 EC2 인스턴스를 스캔합니다. AWS Systems Manager Patch Manager를 사용하여 보안 패치 및 업데이트를 적용합니다.",
      "B": "각 EC2 인스턴스에 호스트 기반 방화벽 및 안티바이러스 소프트웨어를 설치합니다. AWS Systems Manager Run Command를 사용하여 방화벽 및 안티바이러스 소프트웨어를 업데이트합니다.",
      "C": "Amazon CloudWatch agent를 EC2 인스턴스에 설치합니다. 상세 로깅을 활성화합니다. Amazon EventBridge를 사용하여 소프트웨어 로그에서 이상 현상을 검토합니다.",
      "D": "Amazon GuardDuty Malware Protection을 사용하여 EC2 인스턴스를 스캔합니다. AWS Systems Manager Patch Manager를 사용하여 보안 패치 및 업데이트를 적용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Inspector — 취약점 스캔 도구 (EC2, ECR, Lambda 지원)\n▸ AWS Systems Manager Patch Manager — OS 패치 적용 자동화\n▸ GuardDuty Malware Protection — 악성코드 탐지 (취약점 아님)\n\n【정답 포인트】\n▸ 소프트웨어 취약점 탐지 = Amazon Inspector 전문\n▸ 취약점 평가 + 패치 적용 = Inspector + Patch Manager 조합\n▸ 자동화 = Patch Manager로 패치 자동 배포\n▸ 규모 확장 = Patch Manager가 EC2 플릿 관리\n\n【오답 체크】\n(B) 호스트 기반 방화벽/안티바이러스는 취약점 관리 아님\n(C) CloudWatch 로깅은 모니터링이지 취약점 탐지 아님\n(D) GuardDuty Malware Protection은 악성코드 탐지 (취약점 스캔 아님)\n\n【시험 포인트】\n▸ 취약점 탐지 = Amazon Inspector 유일한 선택\n▸ Inspector + Patch Manager = SCS 표준 조합\n▸ GuardDuty = 위협 탐지 (악성코드, 행위 기반)\n▸ Inspector = 취약점 관리 (CVSS 기반 스캔)",
    "en_q": "A security engineer is designing security controls for a fleet of Amazon EC2 instances that run sensitive workloads in a VPC. The security engineer needs to implement a solution to detect and mitigate software vulnerabilities on the EC2 instances. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Scan the EC2 instances by using Amazon Inspector. Apply security patches and updates by using AWS Systems Manager Patch Manager.",
      "B": "Install host-based firewall and antivirus software on each EC2 instance. Use AWS Systems Manager Run Command to update the firewall and antivirus software.",
      "C": "Install the Amazon CloudWatch agent on the EC2 instances. Enable detailed logging. Use Amazon EventBridge to review the software logs for anomalies.",
      "D": "Scan the EC2 instances by using Amazon GuardDuty Malware Protection. Apply security patches and updates by using AWS Systems Manager Patch Manager."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382924-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 21,
    "question": "보안 엔지니어가 Amazon Macie를 사용하여 회사의 Amazon S3 버킷에서 민감한 데이터를 스캔합니다. 회사는 많은 S3 버킷과 S3 버킷에 저장된 많은 객체를 가지고 있습니다. 보안 엔지니어는 민감한 데이터를 포함하는 S3 버킷을 식별하고 해당 S3 버킷에 대해 추가 스캔을 수행해야 합니다. 이 요구사항을 최소 관리 오버헤드로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 Cross-Region Replication(CRR)를 S3 버킷에서 구성합니다. 객체를 두 번째 AWS 리전으로 복제합니다. Macie를 두 번째 리전에서 구성하여 복제된 객체를 매일 스캔합니다.",
      "B": "S3 이벤트 대상으로 AWS Lambda 함수를 생성합니다. Lambda 함수를 구성하여 객체가 S3 버킷에 업로드될 때 객체에 대해 Macie 스캔을 시작합니다.",
      "C": "Macie 자동 디스커버리를 구성하여 S3 버킷에서 데이터를 지속적으로 샘플링합니다. Macie가 민감한 데이터를 발견하는 S3 버킷에 대해 전체 스캔을 수행합니다.",
      "D": "S3 버킷에서 Macie 스캔을 실행하도록 구성합니다. 스캔 결과를 Amazon DynamoDB 테이블에 집계합니다. DynamoDB 테이블을 사용하여 쿼리를 수행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Macie Automated Discovery — 샘플링으로 민감한 데이터 보유 버킷 식별\n▸ Full Scan — 특정 버킷의 전체 객체 스캔\n▸ Sampling — 통계 기반으로 민감 데이터 여부 추측\n\n【정답 포인트】\n▸ 최소 관리 오버헤드 = 자동 디스커버리 활용\n▸ Automated Discovery = 주기적 샘플링으로 리스크 버킷 식별\n▸ 선택적 스캔 = 민감 데이터 있는 버킷만 전체 스캔\n▸ 비용 최적화 = 모든 버킷 스캔 불필요\n▸ 자동화 = 수동 개입 최소\n\n【오답 체크】\n(A) CRR 구성은 복잡하고, 복제 비용 증가\n(B) Lambda + 이벤트 트리거는 객체 단위 스캔으로 비용 높음\n(D) 스캔 결과 집계는 자동화 부족, 수동 쿼리 필요\n\n【시험 포인트】\n▸ 대규모 S3 환경 = Macie Automated Discovery 필수\n▸ 샘플링 → 전체 스캔 = 2단계 접근으로 효율적\n▸ 관리 오버헤드 최소 = 자동 디스커버리가 최고\n▸ Macie 고급 기능 = Automated Discovery로 스캔 최적화",
    "en_q": "A security engineer uses Amazon Macie to scan a company's Amazon S3 buckets for sensitive data. The company has many S3 buckets and many objects stored in the S3 buckets. The security engineer must identify S3 buckets that contain sensitive data and must perform additional scanning on those S3 buckets. Which solution will meet these requirements with the LEAST administrative overhead?",
    "en_opts": {
      "A": "Configure S3 Cross-Region Replication (CRR) on the S3 buckets to replicate the objects to a second AWS Region. Configure Macie in the second Region to scan the replicated objects daily.",
      "B": "Create an AWS Lambda function as an S3 event destination for the S3 buckets. Configure the Lambda function to start a Macie scan of an object when the object is uploaded to an S3 bucket.",
      "C": "Configure Macie automated discovery to continuously sample data from the S3 buckets. Perform full scans of the S3 buckets where Macie discovers sensitive data.",
      "D": "Configure Macie scans to run on the S3 buckets. Aggregate the results of the scans in an Amazon DynamoDB table. Use the DynamoDB table for queries."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382921-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 22,
    "question": "회사가 재해 복구(DR) 계획의 일부로 Amazon RDS 스냅샷을 두 계정으로 전송합니다. 스냅샷은 암호화되어야 합니다. 그러나 DR 이벤트 발생 시 각 계정이 스냅샷을 복호화할 수 있어야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기본 AWS Key Management Service(AWS KMS) 키를 사용하여 스냅샷을 생성합니다. 두 계정으로 KMS 암호화 키를 복사하는 AWS Lambda 함수를 생성합니다.",
      "B": "AWS Key Management Service(AWS KMS) 고객 관리형 키를 사용하여 스냅샷을 생성합니다. 두 계정에서 KMS 키를 가져오는 AWS Lambda 함수를 생성합니다.",
      "C": "기본 AWS Key Management Service(AWS KMS) 키를 사용하여 스냅샷을 생성합니다. 각 계정에서 적절한 KMS 권한을 가진 IAM 보안 주체를 사용하여 두 계정과 KMS 키를 공유합니다.",
      "D": "AWS Key Management Service(AWS KMS) 고객 관리형 키를 사용하여 스냅샷을 생성합니다. 각 계정에서 적절한 KMS 권한을 가진 IAM 보안 주체를 사용하여 두 계정과 KMS 키를 공유합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Cross-Account KMS Sharing — KMS 키 정책으로 다른 계정에 권한 부여\n▸ Customer Managed Key — 고객이 생성하고 관리하는 KMS 키\n▸ AWS Managed Key — AWS가 관리하는 기본 키 (공유 불가)\n\n【정답 포인트】\n▸ 고객 관리형 키 = 다른 계정과 공유 가능\n▸ 기본 KMS 키 = 다른 계정과 공유 불가능\n▸ 키 정책에 다른 계정의 IAM principal 추가\n▸ Lambda 함수로 키 복사 = KMS API 불가능\n▸ 키 정책 기반 공유 = 가장 직관적\n\n【오답 체크】\n(A) 기본 KMS 키는 공유 불가, Lambda로 키 복사 불가\n(B) 고객 관리형 키는 import 불가 (복사/export도 불가)\n(C) 기본 KMS 키는 공유 불가능\n\n【시험 포인트】\n▸ 교차 계정 KMS = Customer Managed Key 필수\n▸ KMS 키 공유 = 키 정책에 principal 추가\n▸ Lambda로 키 복사/import = 불가능한 작업\n▸ RDS 스냅샷 암호화 = KMS 키 복호화 권한 필수",
    "en_q": "A company sands Amazon RDS snapshots to two accounts as part of its disaster recovery (DR) plan. The snapshots must be encrypted. However, each account needs to be able to decrypt the snapshots in case of a DR event. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use the default AWS Key Management Sen/ice (AWS KMS) key to generate the snapshots. Create an AWS Lambda function that copies the KMS encryption key to the two accounts.",
      "B": "Use an AWS Key Management Service (AWS KMS) customer managed key to generate the snapshots. Create an AWS Lambda function that imports the KMS key in the two accounts.",
      "C": "Use the default AWS Key Management Service (AWS KMS) key to generate the snapshots. Share the KMS key with the two accounts by using an IAM principal that has the proper KMS permissions in each account.",
      "D": "Use an AWS Key Management Service (AWS KMS) customer managed key to generate the snapshots. Share the KMS key with the two accounts by using an IAM principal that has the proper KMS permissions in each account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382922-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 23,
    "question": "회사는 전송 중인 모든 데이터를 암호화해야 하는 규정 준수 요구사항이 있습니다. 회사는 최근 이 요구사항을 충족하지 않는 Amazon Aurora 클러스터를 발견했습니다. Aurora 클러스터에 대한 모든 연결에 대해 암호화를 적용하려면 어떻게 해야 합니까?",
    "options": {
      "A": "Aurora 클러스터 구성에서 require_secure_transport DB 클러스터 매개변수를 ON으로 설정합니다.",
      "B": "AWS Directory Service for Microsoft Active Directory를 사용하여 사용자 디렉토리를 만들고 Aurora와 Kerberos 인증을 적용합니다.",
      "C": "Aurora 클러스터를 AWS Certificate Manager(ACM)를 사용하여 암호화 인증서를 제공하도록 구성합니다.",
      "D": "Amazon RDS Proxy를 생성합니다. Proxy를 Aurora 클러스터에 연결하여 암호화를 활성화합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ require_secure_transport — Aurora 데이터베이스 클러스터 매개변수로, SSL/TLS를 통한 보안 연결만 허용\n▸ Data in transit encryption — 전송 중 암호화를 강제하는 메커니즘\n\n【정답 포인트】\n▸ require_secure_transport = ON 설정 → 모든 클라이언트 연결이 TLS/SSL을 사용해야 함\n▸ Aurora의 기본 제공 기능으로 추가 구성 요소 없이 즉시 적용 가능\n▸ DB 클러스터 파라미터 그룹에서 직접 구성하여 규정 준수 요구사항 충족\n\n【오답 체크】\n(B) AWS Directory Service — 인증 메커니즘이지만, 전송 암호화 강제와 무관\n(C) ACM 인증서 — Aurora는 AWS 관리 인증서를 자동으로 사용하므로 별도 구성 불필요\n(D) RDS Proxy — 연결 풀링 기능이지만, 전송 암호화를 직접 강제하지 않음\n\n【시험 포인트】\n▸ Aurora 보안 파라미터: require_secure_transport, require_authentication 등\n▸ 전송 암호화(in-transit) vs 저장 암호화(at-rest) 구분\n▸ 최소 권한 원칙으로 필요한 연결만 허용하도록 설정",
    "en_q": "A company has a compliance requirement to encrypt all data in transit. The company recently discovered an Amazon Aurora cluster that does not meet this requirement. How can the company enforce encryption for all connections to the Aurora cluster?",
    "en_opts": {
      "A": "In the Aurora cluster configuration, set the require_secure_transport DB cluster parameter to ON.",
      "B": "Use AWS Directory Service for Microsoft Active Directory to create a user directory and to enforce Kerberos authentication with Aurora.",
      "C": "Configure the Aurora cluster to use AWS Certificate Manager (ACM) to provide encryption certificates.",
      "D": "Create an Amazon RDS proxy. Connect the proxy to the Aurora cluster to enable encryption."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382914-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 24,
    "question": "회사의 공개 웹사이트는 Application Load Balancer(ALB), ALB 뒤에 있는 상태 비저장 애플리케이션을 실행하는 Amazon EC2 인스턴스 집합, 그리고 애플리케이션이 데이터를 읽는 Amazon DynamoDB 테이블로 구성됩니다. 회사는 악의적인 스캔과 DDoS 공격에 대해 걱정합니다. 회사는 각 클라이언트 IP 주소가 5분의 임의의 기간에 데이터를 최대 3번만 읽을 수 있도록 제한하려고 합니다. 이 요구사항을 최소한의 노력으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "ALB 앞에 AWS WAF를 설정합니다. 각 IP 주소에 대해 5분의 임의 기간에 3개 요청 한도를 초과하는 요청을 차단하는 규칙을 만듭니다.",
      "B": "Amazon CloudWatch 요청 기반 AWS Lambda 함수를 생성합니다. Lambda 함수를 구성하여 5분 롤링 간격에서 각 IP 주소의 요청을 계산하고 개수가 3을 초과하면 알림을 제공합니다.",
      "C": "EC2 애플리케이션을 수정하여 요청의 출발지 IP 주소를 계산하고 5분 롤링 합계를 계산합니다. 합계가 3보다 크면 오류 메시지를 반환합니다.",
      "D": "DynamoDB 테이블에 출발지 IP 주소와 요청 시간을 추가합니다. 요청 시간 기준으로 5분 TTL 설정을 추가합니다. DynamoDB 테이블 처리량의 읽기 용량을 3으로 변경합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS WAF rate limiting — IP별 요청 빈도를 제한하는 보안 정책\n▸ CloudWatch-based rule — 시간 범위 내 요청 횟수를 추적하는 WAF 규칙\n\n【정답 포인트】\n▸ WAF는 ALB 계층에서 요청을 필터링하여 애플리케이션 부하 감소\n▸ Rate limiting 규칙 → 5분 윈도우에서 IP당 3개 요청만 허용\n▸ 추가 인프라 구성 없이 WAF의 기본 기능으로 즉시 구현 가능\n▸ DDoS/rate-based 공격 방어의 표준 패턴\n\n【오답 체크】\n(B) Lambda + CloudWatch — 복잡한 구현이 필요하고 운영 오버헤드가 큼\n(C) EC2 애플리케이션 수정 — 모든 인스턴스에 코드 배포 필요, 유지보수 어려움\n(D) DynamoDB TTL — 읽기 제한과 관계없고, 용량 조정이 목적이 아님\n\n【시험 포인트】\n▸ WAF rate-based rules: 시간 기반 요청 횟수 제한 문제의 최적 솔루션\n▸ 가장 적은 노력(least effort) → 기존 기능 활용이 정답\n▸ ALB + WAF 조합으로 애플리케이션 변경 없이 보안 강화",
    "en_q": "A company's public website consists of an Application Load Balancer (ALB), a set of Amazon EC2 instances that run a stateless application behind the ALB, and an Amazon DynamoDB table from which the application reads data. The company is concerned about malicious scanning and DDoS attacks. The company wants to impose a restriction in which each client IP address can read the data only 3 times in any 5-minute period. Which solution will meet this requirement with the LEAST effort?",
    "en_opts": {
      "A": "Set up AWS WAF in front of the ALB. Create a rule that blocks requests that exceed the limit of 3 requests in any 5-minute period for each IP address.",
      "B": "Create an AWS Lambda function based on an Amazon CloudWatch request. Configure the Lambda function to count the requests for each IP address in rolling 5-minute intervals and to provide notification if the count exceeds 3.",
      "C": "Modify the EC2 application to count the source IP address of requests and calculate a rolling 5-minute sum. Return an error message if the count sum is greater than 3.",
      "D": "Add source IP address and request time to the DynamoDB table. Add a 5-minute TTL setting based on request time. Change the read capacity of the DynamoDB table throughput to 3."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382941-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 25,
    "question": "공용 서브넷에 2개의 Amazon EC2 인스턴스가 있습니다. 서브넷에는 사용자 지정 네트워크 ACL이 있습니다. 보안 엔지니어는 서브넷 보안을 개선하는 솔루션을 설계하고 있습니다. 솔루션은 포트 443을 통해 TLS를 사용하는 인터넷 서비스에 대한 아웃바운드 트래픽을 허용해야 합니다. 솔루션은 또한 MySQL 포트 3306을 대상으로 하는 인바운드 트래픽을 거부해야 합니다. 이 요구사항을 충족하는 네트워크 ACL 규칙 집합은 무엇입니까?",
    "options": {
      "A": "인바운드 규칙 100을 사용하여 TCP 포트 443의 트래픽을 허용합니다. 인바운드 규칙 200을 사용하여 TCP 포트 3306의 트래픽을 거부합니다. 아웃바운드 규칙 100을 사용하여 TCP 포트 443의 트래픽을 허용합니다.",
      "B": "인바운드 규칙 100을 사용하여 TCP 포트 3306의 트래픽을 거부합니다. 인바운드 규칙 200을 사용하여 TCP 포트 범위 1024-65535의 트래픽을 허용합니다. 아웃바운드 규칙 100을 사용하여 TCP 포트 443의 트래픽을 허용합니다.",
      "C": "인바운드 규칙 100을 사용하여 TCP 포트 범위 1024-65535의 트래픽을 허용합니다. 인바운드 규칙 200을 사용하여 TCP 포트 3306의 트래픽을 거부합니다. 아웃바운드 규칙 100을 사용하여 TCP 포트 443의 트래픽을 허용합니다.",
      "D": "인바운드 규칙 100을 사용하여 TCP 포트 3306의 트래픽을 거부합니다. 인바운드 규칙 200을 사용하여 TCP 포트 443의 트래픽을 허용합니다. 아웃바운드 규칙 100을 사용하여 TCP 포트 443의 트래픽을 허용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Network ACL — VPC 서브넷 수준 상태 비저장 방화벽 (인바운드/아웃바운드 분리)\n▸ Ephemeral ports (1024-65535) — 클라이언트가 응답을 수신하는 임시 포트 범위\n▸ Rule priority — 낮은 번호부터 순서대로 평가, 일치하면 처리\n\n【정답 포인트】\n▸ 인바운드 규칙 100 → MySQL(3306) 거부 (명시적 차단)\n▸ 인바운드 규칙 200 → 임시 포트 범위 허용 (HTTPS 응답 받기)\n  - TLS 클라이언트는 포트 443으로 요청하고 1024-65535에서 응답 수신\n▸ 아웃바운드 규칙 100 → 포트 443 허용 (외부 서비스 접근)\n▸ 규칙 번호 순서가 중요 → 100이 200보다 먼저 평가됨\n\n【오답 체크】\n(A) 임시 포트를 허용하지 않음 → 서버 응답 수신 불가\n(C) 규칙 순서 역전 → 포트 1024-65535를 먼저 허용하면 3306 거부 규칙이 의미 없음\n(D) 임시 포트 범위 미포함 → 클라이언트가 응답을 받을 수 없음\n\n【시험 포인트】\n▸ Network ACL 설계: 방향성(inbound/outbound) 분리 필수\n▸ 임시 포트 개념: 클라이언트-서버 양방향 통신을 위한 필수 규칙\n▸ 규칙 번호가 낮을수록 우선순위 높음 → 명시적 거부를 먼저 배치",
    "en_q": "A public subnet contains two Amazon EC2 instances. The subnet has a custom network ACL. A security engineer is designing a solution to improve the subnet security. The solution must allow outbound traffic to an internet service that uses TLS through port 443. The solution also must deny inbound traffic that is destined for MySQL port 3306. Which network ACL rule set meets these requirements?",
    "en_opts": {
      "A": "Use inbound rule 100 to allow traffic on TCP port 443. Use inbound rule 200 to deny traffic on TCP port 3306. Use outbound rule 100 to allow traffic on TCP port 443.",
      "B": "Use inbound rule 100 to deny traffic on TCP port 3306. Use inbound rule 200 to allow traffic on TCP port range 1024-65535. Use outbound rule 100 to allow traffic on TCP port 443.",
      "C": "Use inbound rule 100 to allow traffic on TCP port range 1024-65535. Use inbound rule 200 to deny traffic on TCP port 3306. Use outbound rule 100 to allow traffic on TCP port 443.",
      "D": "Use inbound rule 100 to deny traffic on TCP port 3306. Use inbound rule 200 to allow traffic on TCP port 443. Use outbound rule 100 to allow traffic on TCP port 443."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382932-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 26,
    "question": "회사는 Amazon Elastic Container Service(Amazon ECS)를 사용하여 민감한 데이터를 처리하는 애플리케이션을 배포하고 있습니다. 최근 보안 감사 중에 회사는 Amazon RDS 자격증명이 회사 소스 코드 저장소의 애플리케이션 코드와 함께 저장되는 보안 문제를 식별했습니다. 보안 엔지니어는 데이터베이스 자격증명을 안전하게 저장하고 주기적으로 회전시키는 솔루션을 개발해야 합니다. 자격증명은 애플리케이션에만 액세스할 수 있어야 합니다. 엔지니어는 또한 데이터베이스 관리자가 데이터베이스 자격증명을 다른 팀원과 일반 텍스트로 공유하는 것을 방지해야 합니다. 솔루션은 관리 오버헤드를 최소화해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Systems Manager Parameter Store를 사용하여 데이터베이스 자격증명을 생성합니다. ECS 작업용 IAM 프로필을 사용하여 특정 컨테이너만 데이터베이스 자격증명에 액세스하도록 제한합니다.",
      "B": "AWS Secrets Manager를 사용하여 데이터베이스 자격증명을 저장합니다. ECS 작업용 IAM 인라인 정책을 사용하여 특정 컨테이너만 데이터베이스 자격증명에 액세스하도록 제한합니다.",
      "C": "AWS Systems Manager Parameter Store를 사용하여 데이터베이스 자격증명을 저장합니다. ECS 작업용 IAM 역할을 사용하여 특정 컨테이너만 데이터베이스 자격증명에 액세스하도록 제한합니다.",
      "D": "AWS Secrets Manager를 사용하여 데이터베이스 자격증명을 저장합니다. ECS 작업용 IAM 역할을 사용하여 특정 컨테이너만 데이터베이스 자격증명에 액세스하도록 제한합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Secrets Manager — 암호 자동 회전, 감사 로깅, 액세스 제어 지원\n▸ AWS Systems Manager Parameter Store — 단순 KV 저장소, 회전 기능 제한적\n▸ IAM role vs inline policy — 역할(권장)은 재사용 가능, 인라인은 사용자/역할에만 적용\n\n【정답 포인트】\n▸ Secrets Manager → 자동 회전 기능, 감시 및 로깅, 규정 준수 지원\n▸ IAM role (task role) → ECS 컨테이너가 시작 시 임시 자격증명 획득\n▸ 최소 권한 + 감사 추적: DB 관리자가 평문으로 접근 불가능\n▸ 인라인 정책보다 역할 사용 → 정책 재사용 및 관리 용이\n\n【오답 체크】\n(A) Parameter Store — 회전 기능 없음, 단순 저장소 역할\n(B) Secrets Manager 선택은 맞으나, 인라인 정책 → 관리 오버헤드 증가\n(C) Parameter Store + 역할 → 자동 회전 기능 부족\n\n【시험 포인트】\n▸ 자동 회전이 필요하면 → Secrets Manager 필수\n▸ ECS 보안: task role 활용으로 임시 자격증명 관리\n▸ 규정 준수 시나리오에서 Secrets Manager 선택이 일반적 패턴",
    "en_q": "A company is using Amazon Elastic Container Service (Amazon ECS) to deploy an application that deals with sensitive data. During a recent security audit, the company identified a security issue in which Amazon RDS credentials were stored with the application code in the company's source code repository. A security engineer needs to develop a solution to ensure that database credentials are stored securely and rotated periodically. The credentials should be accessible to the application only. The engineer also needs to prevent database administrators from sharing database credentials as plaintext with other teammates. The solution must also minimize administrative overhead. Which solution meets these requirements?",
    "en_opts": {
      "A": "Use the AWS Systems Manager Parameter Store to generate database credentials. Use an IAM profile for ECS tasks to restrict access to database credentials to specific containers only.",
      "B": "Use AWS Secrets Manager to store database credentials. Use an IAM inline policy for ECS tasks to restrict access to database credentials to specific containers only.",
      "C": "Use the AWS Systems Manager Parameter Store to store database credentials. Use IAM roles for ECS tasks to restrict access to database credentials to specific containers only.",
      "D": "Use AWS Secrets Manager to store database credentials. Use IAM roles for ECS tasks to restrict access to database credentials to specific containers only."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382910-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 27,
    "question": "회사 클라우드 보안 정책은 회사의 VPC와 KMS 간의 통신이 AWS 네트워크 내에서 완전히 이루어져야 하며 공개 서비스 엔드포인트를 사용하지 않아야 합니다. 이 요구사항을 가장 잘 충족하는 다음 조치의 어떤 조합이 가장 만족합니까? (2개를 선택하세요.)",
    "options": {
      "A": "회사의 VPC 엔드포인트 ID를 참조하는 AWS KMS 키 정책에 aws:sourceVpce 조건을 추가합니다.",
      "B": "VPC에서 VPC 인터넷 게이트웨이를 제거하고 가상 프라이빗 게이트웨이를 추가하여 직접 공개 인터넷 연결을 방지합니다.",
      "C": "프라이빗 DNS가 활성화된 AWS KMS용 VPC 엔드포인트를 생성합니다.",
      "D": "KMS Import Key 기능을 사용하여 VPN을 통해 AWS KMS 키를 안전하게 전송합니다.",
      "E": "AWS KMS 키 정책에 다음 조건을 추가합니다: \"aws:SourceIp\": \"10.0.0.0/16\"."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ VPC Endpoint for KMS — AWS 네트워크 내 전용 경로로 KMS 접근\n▸ Private DNS — VPC 엔드포인트 사용 시 자동으로 KMS API 호출 라우팅\n▸ aws:sourceVpce — KMS 키 정책에서 특정 VPC 엔드포인트만 허용하는 조건\n\n【정답 포인트】\n▸ \n(A) aws:sourceVpce 조건 → KMS 키 정책에서 특정 VPC 엔드포인트만 허용\n▸ \n(C) VPC Endpoint + Private DNS → KMS API 호출이 공개 인터넷을 거치지 않음\n▸ 두 조치 조합으로 AWS 네트워크 내 완전한 격리 달성\n  - 엔드포인트 생성\n(C) → 전용 경로 설정\n  - 정책 조건 추가\n(A) → 특정 엔드포인트만 허용\n\n【오답 체크】\n(B) IGW 제거 — KMS 접근과 무관, 일반 인터넷 연결 제어일 뿐\n(D) Import Key — KMS 키 생성 방식이지, VPC 내 통신 경로와 무관\n(E) SourceIp 조건 — VPC CIDR을 정책에 추가하면, 공개 IP 경로 사용 시에도 통과 가능\n\n【시험 포인트】\n▸ Private link 기반 VPC 엔드포인트: AWS 서비스 격리의 표준 방법\n▸ Private DNS 활성화: 애플리케이션 코드 변경 없이 엔드포인트로 라우팅\n▸ 키 정책 조건화: sourceVpce로 특정 엔드포인트만 승인, 일반 API 호출 차단",
    "en_q": "A corporate cloud security policy states that communications between the company's VPC and KMS must travel entirely within the AWS network and not use public service endpoints. Which combination of the following actions MOST satisfies this requirement? (Choose two.)",
    "en_opts": {
      "A": "Add the aws:sourceVpce condition to the AWS KMS key policy referencing the company's VPC endpoint ID.",
      "B": "Remove the VPC internet gateway from the VPC and add a virtual private gateway to the VPC to prevent direct, public internet connectivity.",
      "C": "Create a VPC endpoint for AWS KMS with private DNS enabled.",
      "D": "Use the KMS Import Key feature to securely transfer the AWS KMS key over a VPN.",
      "E": "Add the following condition to the AWS KMS key policy: \"aws:SourceIp\": \"10.0.0.0/16\"."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382920-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 28,
    "question": "보안 엔지니어는 회사의 기본 웹사이트를 호스팅하는 Amazon EC2 인스턴스와 관련된 Amazon GuardDuty 경고를 받았습니다. GuardDuty 발견은 \"UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration\"을 읽었습니다. 보안 엔지니어는 악의적 행위자가 EC2 인스턴스용 API 액세스 키를 회사가 운영하지 않는 국가에서 사용했음을 확인했습니다. 보안 엔지니어는 악의적 행위자의 액세스를 거부해야 합니다. 보안 엔지니어가 취해야 할 첫 번째 단계는 무엇입니까?",
    "options": {
      "A": "EC2 콘솔을 열고 0.0.0.0/0에서 인바운드 트래픽을 허용하는 보안 그룹을 제거합니다.",
      "B": "EC2 인스턴스에 AWS Systems Manager Agent를 설치하고 인벤토리 보고서를 실행합니다.",
      "C": "호스트에 Amazon Inspector 에이전트를 설치하고 CVE 규칙 패키지로 평가를 실행합니다.",
      "D": "IAM 콘솔을 열고 인스턴스 프로필과 관련된 모든 IAM 세션을 취소합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ InstanceCredentialExfiltration — EC2 인스턴스 프로필의 임시 자격증명이 유출되어 외부 사용\n▸ IAM session revoke — IAM 사용자/역할의 모든 활성 세션을 즉시 무효화\n▸ Credential compromise — 악의적 행위자가 탈취한 자격증명의 즉시 차단\n\n【정답 포인트】\n▸ GuardDuty 발견 → EC2 인스턴스의 임시 자격증명이 외국에서 사용 중\n▸ 즉시 취할 조치 → 인스턴스 프로필의 모든 IAM 세션 취소\n(D)\n▸ 자격증명이 이미 탈취되었으므로, 보안 그룹/네트워크 제어는 효과 없음\n▸ 취소 후 새 임시 자격증명 발급으로 악의적 행위자의 액세스 차단\n\n【오답 체크】\n(A) 보안 그룹 변경 — 이미 탈취된 API 키 사용을 막을 수 없음\n(B) Systems Manager Agent — 인스턴스 인벤토리와 무관, 악의적 사용 차단 불가\n(C) Inspector Agent — 취약점 스캔이지, 활성 악의적 사용을 차단하지 못함\n\n【시험 포인트】\n▸ 자격증명 유출(exfiltration): 네트워크 제어가 아닌 IAM 레벨 대응 필요\n▸ \"첫 번째 단계\" → 피해 확대 방지를 위한 즉시 액션 (세션 취소)\n▸ GuardDuty 이벤트 대응: credential revocation이 최우선",
    "en_q": "A security engineer received an Amazon GuardDuty alert indicating a finding involving the Amazon EC2 instance that hosts the company's primary website. The GuardDuty finding read: UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration. The security engineer confirmed that a malicious actor used API access keys intended for the EC2 instance from a country where the company does not operate. The security engineer needs to deny access to the malicious actor. What is the first step the security engineer should take?",
    "en_opts": {
      "A": "Open the EC2 console and remove any security groups that allow inbound traffic from 0.0.0.0/0.",
      "B": "Install the AWS Systems Manager Agent on the EC2 instance and run an inventory report.",
      "C": "Install the Amazon Inspector agent on the host and run an assessment with the CVE rules package.",
      "D": "Open the IAM console and revoke all IAM sessions that are associated with the instance profile."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382904-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 29,
    "question": "회사는 민감한 데이터를 포함하는 모든 객체를 Amazon S3 버킷에 저장하려고 합니다. 회사는 S3 버킷을 암호화하기 위해 서버 측 암호화를 사용합니다. 회사의 운영 팀은 회사의 S3 버킷에 대한 액세스를 관리합니다. 회사의 보안 팀은 암호화 키에 대한 액세스를 관리합니다. 회사는 두 팀의 직무를 분리하여 한 팀의 구성 오류만으로는 평문 데이터에 대한 무단 액세스를 부여하여 데이터가 손상되지 않도록 보장하려고 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "운영 팀이 S3 버킷에 기본 버킷 암호화를 구성하여 Amazon S3 관리 암호화 키(SSE-S3)로 서버 측 암호화를 사용하도록 합니다. 보안 팀이 암호화 키에 대한 액세스를 제어하는 IAM 정책을 만들도록 합니다.",
      "B": "운영 팀이 고객 관리 AWS KMS 키(SSE-KMS)로 서버 측 암호화를 사용하도록 요구하는 버킷 정책을 만들도록 합니다. 보안 팀이 암호화 키에 대한 액세스를 제어하는 키 정책을 만들도록 합니다.",
      "C": "운영 팀이 Amazon S3 관리 키(SSE-S3)로 서버 측 암호화를 사용하도록 요구하는 버킷 정책을 만들도록 합니다. 보안 팀이 암호화 키에 대한 액세스를 제어하는 IAM 정책을 만들도록 합니다.",
      "D": "운영 팀이 고객 제공 암호화 키(SSE-C)로 서버 측 암호화를 사용하도록 요구하는 버킷 정책을 만들도록 합니다. 보안 팀이 고객 제공 키를 AWS Key Management Service(AWS KMS)에 저장하도록 합니다. 보안 팀이 암호화 키에 대한 액세스를 제어하는 키 정책을 만들도록 합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Duty separation — 운영팀과 보안팀의 권한 분리로 단일 팀의 오류 영향 최소화\n▸ SSE-KMS (customer managed) — 별도의 KMS 키 정책으로 완전한 접근 제어\n▸ Key policy vs Bucket policy — 키 정책과 버킷 정책의 독립적 관리\n\n【정답 포인트】\n▸ SSE-KMS (고객 관리) → 운영팀과 보안팀이 독립적으로 제어 가능\n▸ 버킷 정책 (운영팀) → KMS 암호화 사용 강제\n▸ 키 정책 (보안팀) → 실제 키 사용 권한 제어\n▸ 두 정책 모두 필요 → AND 조건: 버킷 접근 권한 + 키 사용 권한\n▸ 한 팀의 실수만으로는 평문 데이터 노출 불가능\n\n【오답 체크】\n(A) SSE-S3 — AWS 관리 키이므로 키 정책 제어 불가능, 운영팀 오류 시 보안 취약\n(C) SSE-S3 + IAM — AWS 관리 키는 IAM 정책으로 제어 불가능, 직무 분리 불가\n(D) SSE-C — 고객이 직접 키 관리하므로 AWS 중앙 통제 불가능, 관리 복잡도 증가\n\n【시험 포인트】\n▸ 직무 분리는 KMS 고객 관리 키가 필수: 키 정책과 버킷 정책 분리\n▸ AWS 관리 키(SSE-S3)는 IAM 정책 제어 불가능\n▸ SSE-C는 개별 키 관리로 중앙 통제 및 감시 어려움",
    "en_q": "A company wants to store all objects that contain sensitive data in an Amazon S3 bucket. The company will use server-side encryption to encrypt the S3 bucket. The company's operations team manages access to the company's S3 buckets. The company's security team manages access to encryption keys. The company wants to separate the duties of the two teams to ensure that configuration errors by only one of these teams will not compromise the data by granting unauthorized access to plaintext data. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Ensure that the operations team configures default bucket encryption on the S3 bucket to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Ensure that the security team creates an IAM policy that controls access to use the encryption keys.",
      "B": "Ensure that the operations team creates a bucket policy that requires requests to use server-side encryption with AWS KMS keys (SSE-KMS) that are customer managed. Ensure that the security team creates a key policy that controls access to the encryption keys.",
      "C": "Ensure that the operations team creates a bucket policy that requires requests to use server-side encryption with Amazon S3 managed keys (SSE-S3). Ensure that the security team creates an IAM policy that controls access to the encryption keys.",
      "D": "Ensure that the operations team creates a bucket policy that requires requests to use server-side encryption with customer-provided encryption keys (SSE-C). Ensure that the security team stores the customer-provided keys in AWS Key Management Service (AWS KMS). Ensure that the security team creates a key policy that controls access to the encryption keys."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382944-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 30,
    "question": "회사는 AWS에서 애플리케이션을 실행하고 있습니다. 회사는 다중 환경 설정을 가지고 있으며 각 환경은 별도의 AWS 계정으로 격리되어 있습니다. 회사는 AWS Organizations에서 계정을 관리하는 조직이 있습니다. 조직용 전용 보안 계정이 하나 있습니다. 회사는 조직의 계정 전체에서 Amazon S3 버킷에 저장된 모든 민감한 데이터의 인벤토리를 만들어야 합니다. 발견사항은 한 위치에서 볼 수 있어야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "보안 계정을 Amazon Macie 및 AWS Security Hub의 위임된 관리자로 설정합니다. Macie를 활성화하고 구성하여 민감한 데이터 발견사항을 Security Hub에 게시합니다.",
      "B": "보안 계정을 AWS Security Hub의 위임된 관리자로 설정합니다. 각 계정에서 Amazon Inspector를 구성하여 S3 버킷에서 민감한 데이터를 스캔합니다. 민감한 데이터 발견사항을 Security Hub에 게시합니다.",
      "C": "각 계정에서 Amazon Inspector를 구성하여 S3 버킷에서 민감한 데이터를 스캔합니다. Amazon Inspector 통합을 AWS Trusted Advisor와 함께 활성화합니다. 민감한 데이터 발견사항을 Trusted Advisor에 게시합니다.",
      "D": "각 계정에서 Amazon Macie를 활성화하고 구성하여 민감한 데이터를 감지합니다. Macie 통합을 AWS Trusted Advisor와 함께 활성화합니다. 민감한 데이터 발견사항을 Trusted Advisor에 게시합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Organizations — 다중 계정 관리 및 통합 정책 적용\n▸ AWS Security Hub — 멀티 계정 보안 발견사항 통합 대시보드\n▸ Amazon Macie — 민감한 데이터 발견 및 분류 서비스\n▸ Cross-account access — 보안 계정에서 다른 계정의 리소스 접근\n\n【정답 포인트】\n▸ Macie 사용 → 민감한 데이터(PII, PCI 등) 자동 발견\n▸ 보안 계정에서 활성화 → 한 위치에서 모든 발견사항 확인\n▸ Organizations 통합 → 모든 계정의 리소스 스캔 가능\n▸ 중앙 집계 → 보안 팀이 단일 대시보드에서 통합 관리\n\n【오답 체크】\n(A) S3 액세스 로그 — 데이터 분류 기능 없음, 민감 데이터 식별 어려움\n(B) CloudTrail — API 활동만 추적, 데이터 콘텐츠 분석 불가능\n(D) Config — 리소스 구성 추적만 가능, 데이터 콘텐츠 스캔 불가능\n\n【시험 포인트】\n▸ Macie는 데이터 발견 및 분류 전문 서비스\n▸ 멀티 계정: Organizations 권장 계정에서 수행\n▸ 보안 계정 중심 집계로 통합 관리 효율성 증대",
    "en_q": "A company is running its application on AWS. The company has a multi-environment setup, and each environment is isolated in a separate AWS account. The company has an organization in AWS Organizations to manage the accounts. There is a single dedicated security account for the organization. The company must create an inventory of all sensitive data that is stored in Amazon S3 buckets across the organization's accounts. The findings must be visible from a single location. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Set the security account as the delegated administrator for Amazon Macie and AWS Security Hub. Enable and configure Macie to publish sensitive data findings to Security Hub.",
      "B": "Set the security account as the delegated administrator for AWS Security Hub. In each account, configure Amazon Inspector to scan the S3 buckets for sensitive data. Publish sensitive data findings to Security Hub.",
      "C": "In each account, configure Amazon Inspector to scan the S3 buckets for sensitive data. Enable Amazon Inspector integration with AWS Trusted Advisor. Publish sensitive data findings to Trusted Advisor.",
      "D": "In each account, enable and configure Amazon Macie to detect sensitive data. Enable Macie integration with AWS Trusted Advisor. Publish sensitive data findings to Trusted Advisor."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382923-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 31,
    "question": "회사는 AWS Organizations의 조직에 수백 개의 AWS 계정을 가지고 있습니다. 회사는 단일 AWS 리전에서 운영합니다. 회사는 조직의 Amazon GuardDuty 및 AWS Security Hub의 위임된 관리자로 구성된 전용 보안 도구 AWS 계정을 보유합니다. 회사는 기존 AWS 계정과 새로운 AWS 계정을 위해 GuardDuty와 Security Hub를 자동으로 활성화하도록 환경을 구성했습니다. 회사는 특정 GuardDuty 발견사항에 대한 제어 테스트를 수행하고 있어 회사의 보안 팀이 보안 이벤트를 감지하고 대응할 수 있는지 확인합니다. 보안 팀이 Amazon EC2 인스턴스를 시작하고 테스트 도메인 example.com에 대해 DNS 요청을 시도하여 DNS 발견을 생성했습니다. 그러나 GuardDuty 발견은 Security Hub 위임 관리자 계정에서 생성되지 않았습니다. Security Hub 위임 관리자 계정에서 발견이 생성되지 않은 이유는 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스가 시작된 VPC에 대해 VPC 흐름 로그가 켜지지 않았습니다.",
      "B": "EC2 인스턴스가 시작된 VPC에는 사용자 지정 OpenDNS 리졸버용으로 구성된 DHCP 옵션이 있었습니다.",
      "C": "발견이 생성된 AWS 계정에서 GuardDuty와 Security Hub 간의 통합이 활성화되지 않았습니다.",
      "D": "Security Hub에서 Cross-Region 집계가 구성되지 않았습니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Cross-account access — 다른 AWS 계정의 리소스 접근 권한\n▸ IAM role assume — 임시 보안 자격증명으로 권한 위임\n▸ External ID — 역할 가정 시 추가 인증 레이어로 신원 확인\n▸ Trust policy — 역할을 가정할 수 있는 주체 정의\n\n【정답 포인트】\n▸ IAM role 생성 (외부 파트너 계정용) → 권한 포함\n▸ Trust policy에 파트너 계정 ARN 추가 → 가정 권한 부여\n▸ External ID 필수 포함 → 권한 남용 방지\n▸ MFA 조건 추가 가능 → 추가 보안 강화\n▸ 임시 자격증명 기반 → 장기 키 관리 불필요\n\n【오답 체크】\n(A) IAM 사용자 + 액세스 키 — 장기 자격증명, External ID 제어 불가능\n(C) Cognito Identity Pools — 모바일/웹 앱용, 엔터프라이즈 크로스 계정 용도 아님\n(D) 버킷 정책 직접 설정 — S3만 가능, 다른 AWS 서비스 통제 불가능\n\n【시험 포인트】\n▸ 외부 계정 접근은 반드시 역할(role)과 External ID 사용\n▸ 트러스트 정책: 파트너 계정 ARN + External ID 필수\n▸ 임시 자격증명으로 감시 및 감사(CloudTrail) 용이",
    "en_q": "A company has hundreds of AWS accounts in an organization in AWS Organizations. The company operates out of a single AWS Region. The company has a dedicated security tooling AWS account in the organization. The security tooling account is configured as the organization's delegated administrator for Amazon GuardDuty and AWS Security Hub. The company has configured the environment to automatically enable GuardDuty and Security Hub for existing AWS accounts and new AWS accounts. The company is performing control tests on specific GuardDuty findings to make sure that the company's security team can detect and respond to security events. The security team launched an Amazon EC2 instance and attempted to run DNS requests against a test domain, example.com, to generate a DNS finding. However, the GuardDuty finding was never created in the Security Hub delegated administrator account. Why was the finding was not created in the Security Hub delegated administrator account?",
    "en_opts": {
      "A": "VPC flow logs were not turned on for the VPC where the EC2 instance was launched.",
      "B": "The VPC where the EC2 instance was launched had the DHCP option configured for a custom OpenDNS resolver.",
      "C": "The GuardDuty integration with Security Hub was never activated in the AWS account where the finding was generated.",
      "D": "Cross-Region aggregation in Security Hub was not configured."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382897-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 32,
    "question": "보안 엔지니어는 회사의 사용자 비밀번호에 필요한 최소 길이가 없음을 발견했습니다. 회사는 다음 두 가지 ID 공급자(IdPs)를 사용하고 있습니다: AWS Identity and Access Management(IAM)는 온프레미스 Active Directory와 통합되었으며, Amazon Cognito 사용자 풀은 회사가 개발한 AWS 클라우드 애플리케이션의 사용자 데이터베이스를 포함합니다. 보안 엔지니어가 비밀번호에 대해 필요한 최소 길이를 구현하기 위해 취해야 할 조치의 어떤 조합입니까? (2개를 선택하세요.)",
    "options": {
      "A": "IAM 구성에서 비밀번호 길이 정책을 업데이트합니다.",
      "B": "Cognito 구성에서 비밀번호 길이 정책을 업데이트합니다.",
      "C": "온프레미스 Active Directory 구성에서 비밀번호 길이 정책을 업데이트합니다.",
      "D": "AWS Organizations에서 SCP를 생성합니다. SCP를 구성하여 IAM 및 Cognito에 대해 최소 비밀번호 길이를 적용합니다.",
      "E": "최소 비밀번호 길이에 대한 조건을 포함하는 IAM 정책을 생성합니다. IAM 및 Cognito에 대해 정책을 적용합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ VPC Flow Logs — 네트워크 인터페이스 트래픽 로그\n▸ CloudWatch Logs — 로그 저장 및 분석 서비스\n▸ AWS Lambda — 자동화된 트래픽 분석 및 대응\n▸ Insights — 로그 검색 및 패턴 분석 기능\n\n【정답 포인트】\n▸ VPC Flow Logs → CloudWatch Logs로 전송\n▸ CloudWatch Logs Insights → 쿼리로 비정상 트래픽 검사\n▸ Lambda 함수 구성 → 임계값 초과 시 자동 알림\n▸ 메트릭 필터 + 알람 → 실시간 탐지 및 대응\n▸ 중앙 로깅 → 모든 VPC 트래픽 가시성\n\n【오답 체크】\n(A) CloudTrail — API 활동만 추적, 네트워크 흐름 기록 안 함\n(B) Config — 리소스 구성 변화 추적만 가능, 트래픽 분석 안 함\n(D) GuardDuty — 위협 탐지 서비스, VPC 트래픽 상세 분석 기능 제한적\n\n【시험 포인트】\n▸ VPC Flow Logs는 네트워크 수준 트래픽 분석 기본 도구\n▸ CloudWatch Logs + Insights: 로그 검색 및 실시간 쿼리\n▸ Lambda 자동화로 수동 모니터링 제거",
    "en_q": "A security engineer discovers that a company's user passwords have no required minimum length. The company is using the following two identity providers (IdPs): AWS Identity and Access Management (IAM) federated with on-premises Active Directory Amazon Cognito user pools that contain the user database for an AWS Cloud application that the company developed Which combination of actions should the security engineer take to implement a required minimum length for the passwords? (Choose two.)",
    "en_opts": {
      "A": "Update the password length policy in the IAM configuration.",
      "B": "Update the password length policy in the Cognito configuration.",
      "C": "Update the password length policy in the on-premises Active Directory configuration",
      "D": "Create an SCP in AWS Organizations. Configure the SCP to enforce a minimum password length for IAM and Cognito.",
      "E": "Create an IAM policy that includes a condition for minimum password length. Enforce the policy for IAM and Cognito."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382896-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 33,
    "question": "회사는 Application Load Balancer(ALB) 뒤에서 실행되는 웹 기반 애플리케이션을 보유하고 있습니다. 애플리케이션은 실패한 로그인 시도가 많이 발생하는 자격증명 채우기 공격을 경험하고 있습니다. 공격은 많은 IP 주소에서 오고 있습니다. 로그인 시도는 알려진 모바일 디바이스 에뮬레이터의 사용자 에이전트 문자열을 사용하고 있습니다. 보안 엔지니어는 자격증명 채우기 공격을 완화하는 솔루션을 구현해야 합니다. 솔루션은 여전히 애플리케이션에 대한 합법적인 로그인을 허용해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "지정된 사용자 에이전트 문자열을 포함하는 로그인 시도에 반응하는 Amazon CloudWatch 알람을 생성합니다. Amazon Simple Notification Service(Amazon SNS) 주제를 알람에 추가합니다.",
      "B": "ALB의 인바운드 보안 그룹을 수정하여 공격 관련 IP 주소의 트래픽을 거부합니다.",
      "C": "ALB에 대해 AWS WAF 웹 ACL을 생성합니다. 디바이스 에뮬레이터의 사용자 에이전트 문자열을 포함하는 요청을 차단하는 사용자 지정 규칙을 생성합니다.",
      "D": "ALB에 대해 AWS WAF 웹 ACL을 생성합니다. 합법적인 사용자 에이전트 문자열의 요청을 허용하는 사용자 지정 규칙을 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Default encryption — 모든 객체 암호화 자동 적용\n▸ SSE-KMS — AWS Key Management Service 기반 암호화\n▸ Bucket policy — 버킷 수준 접근 제어 정책\n▸ PutObject 권한 제어 — 암호화되지 않은 객체 업로드 차단\n\n【정답 포인트】\n▸ 기본 암호화 설정 (SSE-KMS) → 모든 신규 객체 자동 암호화\n▸ 버킷 정책에 x-amz-server-side-encryption 조건 추가 → 암호화 강제\n▸ Effect: Deny + 암호화 헤더 미포함 검사 → 평문 업로드 차단\n▸ 기존 객체는 별도 배치 작업 필요 → Batch Operations 활용\n▸ 키 정책으로 권한 제어 → 특정 역할만 사용 가능\n\n【오답 체크】\n(A) 수동 설정만 — 자동화 없이 운영 오류 위험 높음\n(C) 암호화만 설정 — 업로드 제어 없으면 우회 가능\n(D) 정책 중복 확인 — 초기 요구사항 충족하나 지속성 부족\n\n【시험 포인트】\n▸ 기본 암호화 + 버킷 정책 조합이 가장 안전\n▸ Deny 규칙: 암호화 헤더 검증 필수\n▸ 기존 객체 마이그레이션은 별도 전략 필요",
    "en_q": "A company has a web-based application that runs behind an Application Load Balancer (ALB). The application is experiencing a credential stuffing attack that is producing many failed login attempts. The attack is coming from many IP addresses. The login attempts are using a user agent string of a known mobile device emulator. A security engineer needs to implement a solution to mitigate the credential stuffing attack. The solution must still allow legitimate logins to the application. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an Amazon CloudWatch alarm that reacts to login attempts that contain the specified user agent string Add an Amazon Simple Notification Service (Amazon SNS) topic to the alarm.",
      "B": "Modify the inbound security group on the ALB to deny traffic from the IP addresses that are involved in the attack.",
      "C": "Create an AWS WAF web ACL for the ALB Create a custom rule that blocks requests that contain the user agent string of the device emulator.",
      "D": "Create an AWS WAF web ACL for the ALB. Create a custom rule that allows requests from legitimate user agent strings."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382925-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 34,
    "question": "회사는 인터넷에 노출된 오픈 소스 소프트웨어 플랫폼을 운영하고 있습니다. 레거시 소프트웨어 플랫폼은 더 이상 보안 업데이트를 받지 않습니다. 소프트웨어 플랫폼은 Amazon Route 53 가중치 부하 분산을 사용하여 2개의 Amazon EC2 인스턴스로 트래픽을 전송하고 이는 Amazon RDS 클러스터에 연결합니다. 최근 보고서는 이 소프트웨어 플랫폼이 SQL 주입 공격에 취약하다고 제안하며 공격 샘플을 제공합니다. 회사의 보안 엔지니어는 24시간 내에 SQL 주입 공격으로부터 이 시스템을 보호해야 합니다. 보안 엔지니어의 솔루션은 최소한의 노력이 필요하고 구현 중에 정상적인 운영을 유지해야 합니다. 보안 엔지니어가 이 요구사항을 충족하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "기존 EC2 인스턴스를 대상 그룹으로 사용하여 Application Load Balancer를 생성합니다. 이 공격으로부터 애플리케이션을 보호하는 규칙이 포함된 AWS WAF 웹 ACL을 생성한 다음 ALB에 적용합니다. 취약점이 완화되었는지 확인하기 위해 테스트한 다음 Route 53 레코드를 ALB를 가리키도록 리디렉션합니다. EC2 인스턴스의 보안 그룹을 업데이트하여 인터넷에서 직접 액세스를 방지합니다.",
      "B": "Amazon CloudFront 배포를 생성하여 한 EC2 인스턴스를 원본으로 지정합니다. 이 공격으로부터 애플리케이션을 보호하는 규칙이 포함된 AWS WAF 웹 ACL을 생성한 다음 배포에 적용합니다. 취약점이 완화되었는지 확인하기 위해 테스트한 다음 Route 53 레코드를 CloudFront를 가리키도록 리디렉션합니다.",
      "C": "플랫폼의 최신 소스 코드를 획득하고 필요한 업데이트를 수행합니다. 취약점이 완화되었는지 확인하기 위해 업데이트된 코드를 테스트한 다음 EC2 인스턴스에 패치된 버전의 플랫폼을 배포합니다.",
      "D": "EC2 인스턴스에 연결된 보안 그룹을 업데이트하여 SQL 데이터베이스에서 사용하는 TCP 포트에서 인터넷으로의 액세스를 제거합니다. 이 공격으로부터 애플리케이션을 보호하는 규칙이 포함된 AWS WAF 웹 ACL을 생성한 다음 EC2 인스턴스에 적용합니다. 취약점이 완화되었는지 확인하기 위해 테스트한 다음 보안 그룹을 원래 설정으로 복원합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudTrail — API 활동 로깅 및 감시\n▸ AWS Organizations trails — 조직 전체 로깅\n▸ 중앙 S3 버킷 — 모든 계정 로그 통합 저장\n▸ MFA Delete — 로그 삭제 보호 메커니즘\n\n【정답 포인트】\n▸ Organizations trail 생성 → 모든 멤버 계정 포함\n▸ 중앙 보안 계정 S3 버킷 → 로그 수집 및 보관\n▸ 버킷 버전 관리 + MFA Delete → 로그 무결성 보호\n▸ CloudTrail 로그 파일 검증 → 조작 탐지\n▸ 장기 보존을 위해 S3 Glacier로 수명 주기 설정\n▸ 교차 계정 S3 버킷 정책 → 쓰기 권한 제어\n\n【오답 체크】\n(A) 각 계정별 로그 — 중앙화 불가능, 관리 복잡도 높음\n(C) CloudWatch Logs만 — 로그 저장 기간 제한, 실시간만 가능\n(D) 감시 없음 — 요구사항 미충족, 규정 준수 불가능\n\n【시험 포인트】\n▸ Organizations trail이 멀티 계정 감시 표준\n▸ 중앙 S3 버킷: 로그 무결성과 장기 보존 동시 달성\n▸ MFA Delete: 실수나 악의적 삭제로부터 보호",
    "en_q": "A company is operating an open-source software platform that is internet facing. The legacy software platform no longer receives security updates. The software platform operates using Amazon Route 53 weighted load balancing to send traffic to two Amazon EC2 instances that connect to an Amazon RDS cluster. A recent report suggests this software platform is vulnerable to SQL injection attacks, with samples of attacks provided. The company's security engineer must secure this system against SQL injection attacks within 24 hours. The security engineer's solution must involve the least amount of effort and maintain normal operations during implementation. What should the security engineer do to meet these requirements?",
    "en_opts": {
      "A": "Create an Application Load Balancer with the existing EC2 instances as a target group. Create an AWS WAF web ACL containing rules that protect the application from this attack, then apply it to the ALB. Test to ensure the vulnerability has been mitigated, then redirect the Route 53 records to point to the ALB. Update security groups on the EC2 instances to prevent direct access from the internet.",
      "B": "Create an Amazon CloudFront distribution specifying one EC2 instance as an origin. Create an AWS WAF web ACL containing rules that protect the application from this attack, then apply it to the distribution. Test to ensure the vulnerability has been mitigated, then redirect the Route 53 records to point to CloudFront.",
      "C": "Obtain the latest source code for the platform and make the necessary updates. Test the updated code to ensure that the vulnerability has been mitigated, then deploy the patched version of the platform to the EC2 instances.",
      "D": "Update the security group that is attached to the EC2 instances, removing access from the internet to the TCP port used by the SQL database. Create an AWS WAF web ACL containing rules that protect the application from this attack, then apply it to the EC2 instances. Test to ensure the vulnerability has been mitigated, then restore the security group to the original setting."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382902-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 35,
    "question": "보안 엔지니어는 최근 Amazon EC2 인스턴스의 호스트 키를 회전했습니다. 보안 엔지니어는 EC2 Instance Connect 기능을 사용하여 EC2 인스턴스에 액세스하려고 시도하고 있습니다. 그러나 보안 엔지니어는 호스트 키 검증 실패 오류를 받습니다. 호스트 키 회전 전에 EC2 Instance Connect는 이 EC2 인스턴스에서 정상적으로 작동했습니다. 보안 엔지니어가 이 오류를 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "키 자료를 AWS Key Management Service(AWS KMS)로 가져옵니다.",
      "B": "새 호스트 키를 AWS 신뢰할 수 있는 호스트 키 데이터베이스에 수동으로 업로드합니다.",
      "C": "AmazonSSMManagedInstanceCore 정책이 EC2 인스턴스 프로필에 연결되어 있는지 확인합니다.",
      "D": "EC2 인스턴스에 대한 새 SSH 키 쌍을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Instance profile — EC2 인스턴스에 IAM 역할 연결\n▸ Assume role — EC2가 역할 가정으로 임시 자격증명 획득\n▸ IMDSv2 — 메타데이터 토큰 기반 보안 액세스\n▸ Permission boundary — 역할 권한의 최대 범위 제한\n\n【정답 포인트】\n▸ Instance profile + IAM role → EC2 인스턴스에 권한 부여\n▸ S3 버킷 액세스 정책 포함 → 특정 버킷만 허용\n▸ IMDSv2 필수 설정 → 메타데이터 접근 보안 강화\n▸ 임시 자격증명 자동 갱신 → 장기 키 관리 불필요\n▸ STS AssumeRole로 권한 위임 → 감사 추적 가능\n\n【오답 체크】\n(A) IAM 사용자 + 액세스 키 — EC2에 하드코딩 위험, 회전 관리 복잡\n(B) 루트 계정 자격증명 — 보안 위험 극대화, 감사 불가능\n(D) 정책 없음 — 권한 부족으로 서비스 작동 불가능\n\n【시험 포인트】\n▸ Instance profile이 EC2 권한 부여의 표준 방식\n▸ IMDSv2 필수: SSRF 공격으로부터 메타데이터 보호\n▸ 최소 권한 원칙: 필요한 버킷만 명시",
    "en_q": "A security engineer recently rotated the host keys for an Amazon EC2 instance. The security engineer is trying to access the EC2 instance by using the EC2 Instance Connect feature. However, the security engineer receives an error for failed host key validation. Before the rotation of the host keys, EC2 Instance Connect worked correctly with this EC2 instance. What should the security engineer do lo resolve this error?",
    "en_opts": {
      "A": "Import the key material into AWS Key Management Service (AWS KMS).",
      "B": "Manually upload the new host key to the AWS trusted host keys database",
      "C": "Ensure that the AmazonSSMManagedInstanceCore policy is attached to the EC2 instance profile.",
      "D": "Create a new SSH key pair for the EC2 instance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382946-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 36,
    "question": "보안 엔지니어는 Amazon S3 버킷에 저장된 민감한 데이터를 식별하는 솔루션을 구현해야 합니다. 솔루션은 기존 Amazon Simple Notification Service(Amazon SNS) 주제를 사용하여 S3 버킷의 민감한 데이터에 대해 보고해야 합니다. 이 요구사항을 최소 구현 노력으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Config를 활성화합니다. AWS Config를 구성하여 S3 버킷의 민감한 데이터를 모니터링하고 SNS 주제로 알림을 보냅니다.",
      "B": "패턴과 일치하는 민감한 데이터에 대해 S3 버킷을 스캔하는 AWS Lambda 함수를 생성합니다. SNS 주제로 알림을 보내도록 Lambda 함수를 프로그래밍합니다.",
      "C": "Amazon Macie를 구성하여 관리형 데이터 식별자를 사용하여 민감한 데이터를 식별하고 분류합니다. SNS 주제로 알림을 보내는 Amazon EventBridge 규칙을 생성합니다.",
      "D": "Amazon GuardDuty를 활성화합니다. AWS CloudTrail S3 데이터 이벤트를 구성합니다. GuardDuty 발견사항에 반응하고 SNS 주제로 알림을 보내는 Amazon CloudWatch 알람을 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ IAM policy 평가 논리 — Explicit Deny > Explicit Allow > Default Deny\n▸ 권한 경계(permission boundary) — 역할 권한의 최대 상한선\n▸ 리소스 기반 정책 — S3 버킷 정책, KMS 키 정책 등\n▸ 트러스트 정책 — 역할을 가정할 수 있는 주체 정의\n\n【정답 포인트】\n▸ 서비스가 권한 있으려면 Allow 정책 필수 → Explicit Deny 우선\n▸ 권한 경계 설정 → 역할 권한 상한선 제어\n▸ 리소스 정책도 동시에 Allow 필요 → S3 버킷 정책 확인\n▸ Default는 Deny → 명시적 Allow 없으면 거부\n▸ 최소 권한 원칙 적용 → 필요한 것만 허용\n\n【오답 체크】\n(A) 트러스트 정책만 — 역할 가정만 가능, 실제 권한 없음\n(B) 권한 경계만 — 상한선만 정의, Allow는 별도 정책 필요\n(D) 정책 없음 — 권한 부족으로 서비스 거부\n\n【시험 포인트】\n▸ Allow 정책 필수 + Deny 정책으로 예외 처리\n▸ 권한 경계는 보안 강화 도구, 필수 아님\n▸ 정책 평가: 트러스트 → 권한 경계 → 권한 정책 순서",
    "en_q": "A security engineer needs to implement a solution to identify any sensitive data that is stored in an Amazon S3 bucket. The solution must report on sensitive data in the S3 bucket by using an existing Amazon Simple Notification Service (Amazon SNS) topic. Which solution will meet these requirements with the LEAST implementation effort?",
    "en_opts": {
      "A": "Enable AWS Config. Configure AWS Config to monitor for sensitive data in the S3 bucket and to send notifications to the SNS topic.",
      "B": "Create an AWS Lambda function to scan the S3 bucket for sensitive data that matches a pattern. Program the Lambda function to send notifications to the SNS topic.",
      "C": "Configure Amazon Macie to use managed data identifiers to identify and categorize sensitive data. Create an Amazon EventBridge rule to send notifications to the SNS topic.",
      "D": "Enable Amazon GuardDuty. Configure AWS CloudTrail S3 data events. Create an Amazon CloudWatch alarm that reacts to GuardDuty findings and sends notifications to the SNS topic."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382930-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 37,
    "question": "회사는 AWS Organizations의 동일한 조직에서 12개의 AWS 계정으로 나뉜 플랫폼을 보유하고 있습니다. 이들 중 많은 계정이 Amazon API Gateway를 사용하여 API를 회사의 프론트엔드 애플리케이션에 노출합니다. 회사는 기존 API와 향후 배포될 모든 리소스를 일반적인 SQL 주입 및 봇 공격으로부터 보호해야 합니다. 이 요구사항을 최소한의 운영 오버헤드로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 API에 대해 AWS WAF 웹 ACL을 생성합니다. SQL 주입 및 봇 공격을 차단하는 관리형 규칙을 포함합니다. AWS Config를 사용하여 웹 ACL이 없는 새 리소스를 감지합니다. 이러한 리소스에 대해 웹 ACL을 프로비저닝하도록 수정 작업을 구성합니다.",
      "B": "AWS Firewall Manager를 사용하여 AWS WAF 정책을 생성합니다. AWS Bot Control과 SQL 데이터베이스 관리형 규칙 그룹을 포함하도록 정책을 구성합니다. 정책 범위를 API Gateway 단계를 리소스 유형으로 포함하도록 설정합니다.",
      "C": "SQL 주입 및 봇 공격을 차단하는 규칙을 포함하는 AWS WAF 웹 ACL용 AWS Service Catalog 제품을 생성합니다. AWS Config를 사용하여 이 제품이 적용되지 않은 새 리소스를 감지합니다. 이러한 리소스에 대해 웹 ACL을 프로비저닝하도록 수정 작업을 구성합니다.",
      "D": "AWS Security Hub를 사용하여 보호되지 않은 리소스를 감지하고 사용자 지정 작업 이벤트로 Amazon EventBridge에 발견사항을 보냅니다. 이러한 이벤트에 대해 AWS Lambda 함수를 생성하여 SQL 주입 및 봇 공격을 차단하는 관리형 규칙을 포함하는 AWS WAF 웹 ACL을 프로비저닝합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Secrets Manager — 암호, API 키 등 민감 정보 관리\n▸ Secret rotation — 자동 암호 주기적 변경\n▸ Lambda function — 회전 로직 실행\n▸ 데이터베이스 연결 — 암호 변경 시 즉시 적용\n\n【정답 포인트】\n▸ Secrets Manager에 암호 저장 → 암호화된 저장소\n▸ 회전 설정 (90일 예: TTL) → 자동 주기 순환\n▸ Lambda 함수 구성 → 암호 변경 로직 실행\n▸ 데이터베이스 인증 정보 업데이트 → 동기화\n▸ 감시 로그 → CloudTrail로 접근 기록 추적\n▸ 재해 복구 — 이전 암호 버전 보관\n\n【오답 체크】\n(A) 수동 관리 — 운영 오류 위험, 규정 준수 어려움\n(C) Parameter Store — 일반 설정용, 회전 기능 제한적\n(D) 감시 없음 — 무단 접근 탐지 불가능\n\n【시험 포인트】\n▸ Secrets Manager: 자동 회전이 핵심 기능\n▸ Lambda: 회전 로직 커스터마이징 가능\n▸ 감시: CloudTrail로 접근 제어 및 감시",
    "en_q": "A company has a platform that is divided into 12 AWS accounts under the same organization in AWS Organizations. Many of these accounts use Amazon API Gateway to expose APIs to the company's frontend applications. The company needs to protect the ousting APIs and any resources that will be deployed in the future against common SQL injection and bot attacks. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create an AWS WAF web ACL for each API. Include managed rules to block SQL injection and bot attacks. Use AWS Config to detect new resources that do not have a web ACL. Configure a remediation action to provision a web ACL for these resources.",
      "B": "Use AWS Firewall Manager to create an AWS WAF policy. Configure the policy to include the AWS Bot Control and SQL database managed rule groups. Set the policy scope to include the API Gateway stage as the resource type.",
      "C": "Create an AWS Service Catalog product for an AWS WAF web ACL that includes rules to block SQL injection and bot attacks. Use AWS Config to detect new resources that do not have this product applied. Configure a remediation action to provision a web ACL for these resources.",
      "D": "Use AWS Security Hub to detect unprotected resources and to send the findings as custom action events to Amazon EventBridge. Create an AWS Lambda function for these events to provision an AWS WAF web ACL for the unprotected resources. Include managed rules to block SQL injection and bot attacks."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382909-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 38,
    "question": "회사는 새로운 AWS 계정에서 새로운 애플리케이션을 구현하고 있습니다. VPC와 서브넷이 애플리케이션을 위해 생성되었습니다. 애플리케이션이 데이터베이스 액세스를 위해 다른 계정의 기존 VPC로 피어링되어 있습니다. Amazon EC2 인스턴스는 애플리케이션 VPC에서 정기적으로 생성되고 종료되지만 피어링된 VPC의 데이터베이스에 TCP 포트 1521을 통해 액세스해야 하는 인스턴스는 일부뿐입니다. 보안 엔지니어는 데이터베이스에 액세스해야 하는 EC2 인스턴스만 피어링된 VPC의 데이터베이스에 액세스할 수 있도록 해야 합니다. 보안 엔지니어가 이 솔루션을 어떻게 구현할 수 있습니까?",
    "options": {
      "A": "데이터베이스 VPC에서 새 보안 그룹을 생성하고 애플리케이션 VPC의 IP 주소 범위에서 모든 트래픽을 허용하는 인바운드 규칙을 만듭니다. 데이터베이스 서브넷에 새 네트워크 ACL 규칙을 추가합니다. 규칙을 애플리케이션 VPC의 IP 주소 범위에서 TCP 포트 1521로 구성합니다. 애플리케이션 인스턴스가 액세스해야 하는 데이터베이스 인스턴스에 새 보안 그룹을 연결합니다.",
      "B": "애플리케이션 VPC에서 새 보안 그룹을 생성하고 데이터베이스 VPC의 IP 주소 범위에서 TCP 포트 1521을 허용하는 인바운드 규칙을 만듭니다. 데이터베이스 VPC에서 데이터베이스 VPC의 IP 주소 범위에서 포트 1521을 허용하는 인바운드 규칙을 포함하는 새 보안 그룹을 만듭니다. 새 보안 그룹을 데이터베이스 인스턴스와 데이터베이스 액세스가 필요한 애플리케이션 인스턴스에 연결합니다.",
      "C": "애플리케이션 VPC에서 인바운드 규칙이 없는 새 보안 그룹을 생성합니다. 데이터베이스 VPC에서 애플리케이션 VPC의 새 애플리케이션 보안 그룹에서 TCP 포트 1521을 허용하는 인바운드 규칙이 있는 새 보안 그룹을 만듭니다. 애플리케이션 보안 그룹을 데이터베이스 액세스가 필요한 애플리케이션 인스턴스에 연결하고 데이터베이스 보안 그룹을 데이터베이스 인스턴스에 연결합니다.",
      "D": "애플리케이션 VPC에서 새 보안 그룹을 생성하고 데이터베이스 VPC의 IP 주소 범위에서 TCP 포트 1521을 허용하는 인바운드 규칙을 만듭니다. 데이터베이스 서브넷에 새 네트워크 ACL 규칙을 추가합니다. 규칙을 애플리케이션 VPC의 IP 주소 범위에서 모든 트래픽을 허용하도록 구성합니다. 데이터베이스 액세스가 필요한 애플리케이션 인스턴스에 새 보안 그룹을 연결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Shield Standard — 기본 DDoS 보호 (무료)\n▸ AWS Shield Advanced — 고급 DDoS 보호 (고비용)\n▸ AWS WAF — 웹 애플리케이션 방화벽\n▸ CloudFront — CDN 및 DDoS 완화\n\n【정답 포인트】\n▸ Shield Advanced 구독 → 전용 DDoS 대응팀\n▸ CloudFront + WAF 조합 → 애플리케이션 계층 보호\n▸ 트래픽 분산 → 대역폭 공격 완화\n▸ 비용 보호 → Shield Advanced에서 스케일 공격 비용 지원\n▸ 실시간 모니터링 → 공격 탐지 및 대응 자동화\n\n【오답 체크】\n(A) Shield Standard만 — 기본 보호만 가능, 대규모 공격 대응 불가능\n(B) WAF만 — 네트워크 계층 공격 방어 불가능\n(D) 보호 없음 — 요구사항 미충족\n\n【시험 포인트】\n▸ Shield Advanced: 대규모 DDoS 공격 대비 필수\n▸ CloudFront + WAF: 애플리케이션 보호 강화\n▸ 계층화 방어: 네트워크 + 애플리케이션 동시 보호",
    "en_q": "A company is implementing a new application in a new AWS account. A VPC and subnets have been created for the application. The application has been peered to an existing VPC in another account in the same AWS Region for database access Amazon EC2 instances will regularly be created and terminated in the application VPC, but only some of them will need access to the databases in the peered VPC over TCP port 1521. A security engineer must ensure that only the EC2 instances that need access to the databases can access them through the network. How can the security engineer implement this solution?",
    "en_opts": {
      "A": "Create a new security group in the database VPC and create an inbound rule that allows all traffic from the IP address range of the application VPC. Add a new network ACL rule on the database subnets. Configure the rule to TCP port 1521 from the IP address range of the application VPC. Attach the new security group to the database instances that the application instances need to access.",
      "B": "Create a new security group in the application VPC with an inbound rule that allows the IP address range of the database VPC over TCP port 1521. Create a new security group in the database VPC with an inbound rule that allows the IP address range of the application VPC over port 1521. Attach the new security group to the database instances and the application instances that need database access.",
      "C": "Create a new security group in the application VPC with no inbound rules. Create a new security group in the database VPC with an inbound rule that allows TCP port 1521 from the new application security group in the application VPAttach the application security group to the application instances that need database access and attach the database security group to the database instances.",
      "D": "Create a new security group in the application VPC with an inbound rule that allows the IP address range of the database VPC over TCP port 1521. Add a new network ACL rule on the database subnets. Configure the rule to allow all traffic from the IP address range of the application VPC. Attach the new security group to the application instances that need database access."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382942-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 39,
    "question": "회사는 AWS 클라우드에 여러 계정을 보유하고 있습니다. 개발자 계정의 사용자는 프로덕션 계정의 특정 리소스에 액세스해야 합니다. 이 액세스를 제공하는 가장 안전한 방법은 무엇입니까?",
    "options": {
      "A": "프로덕션 계정에서 1명의 IAM 사용자를 생성합니다. 필요한 리소스에 대한 적절한 권한을 부여합니다. 액세스가 필요한 사용자와만 비밀번호를 공유합니다.",
      "B": "개발자 계정에서 IAM 역할로 크로스 계정 액세스를 생성합니다. 이 역할에 적절한 권한을 부여합니다. 개발자 계정의 사용자가 이 역할을 맡아 프로덕션 리소스에 액세스할 수 있도록 합니다.",
      "C": "프로덕션 계정에서 IAM 사용자 계정으로 크로스 계정 액세스를 생성합니다. 이 사용자 계정에 적절한 권한을 부여합니다. 개발자 계정의 사용자가 이 사용자 계정을 사용하여 프로덕션 리소스에 액세스할 수 있도록 합니다.",
      "D": "프로덕션 계정에서 IAM 역할로 크로스 계정 액세스를 생성합니다. 이 역할에 적절한 권한을 부여합니다. 개발자 계정의 사용자가 이 역할을 맡아 프로덕션 리소스에 액세스할 수 있도록 합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Multi-region KMS key — 여러 지역에서 사용 가능한 암호화 키\n▸ Primary key — 기본 키 생성 및 관리 지역\n▸ Replica key — 다른 지역의 읽기 전용 복제 키\n▸ Key policy — KMS 키 접근 제어 정책\n\n【정답 포인트】\n▸ Multi-region primary key 생성 → 주 지역에서 생성\n▸ Replica keys 추가 → 다른 지역에서 사용 가능\n▸ 자동 동기화 → 키 자료 복제 및 유지\n▸ 재해 복구 — Replica key를 primary로 승격 가능\n▸ 규정 준수 — 데이터 상주 요구사항 충족\n▸ 성능 개선 — 로컬 지역 암호화로 지연 감소\n\n【오답 체크】\n(A) 지역별 키 생성 — 다중 키 관리 복잡, 정책 동기화 어려움\n(B) 중앙 키만 사용 — 다른 지역에서 성능 저하\n(C) 키 복사 — 독립적 키 관리로 정책 일관성 어려움\n\n【시험 포인트】\n▸ Multi-region key가 글로벌 애플리케이션 표준\n▸ Replica key는 읽기 전용, 교체 시 승격 가능\n▸ 자동 동기화로 관리 부담 감소",
    "en_q": "A company has multiple accounts in the AWS Cloud. Users in the developer account need to have access to specific resources in the production account. What is the MOST secure way to provide this access?",
    "en_opts": {
      "A": "Create one IAM user in the production account Grant the appropriate permissions to the resources that are needed. Share the password only with the users that need access.",
      "B": "Create cross-account access with an IAM role in the developer account. Grant the appropriate permissions to this role. Allow users in the developer account to assume this role to access the production resources.",
      "C": "Create cross-account access with an IAM user account in the production account. Grant the appropriate permissions to this user account. Allow users in the developer account to use this user account to access the production resources.",
      "D": "Create cross-account access with an IAM role in the production account. Grant the appropriate permissions to this rote Allow users in the developer account to assume this role to access the production resources."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382916-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 40,
    "question": "의료 회사는 1백만 건 이상의 환자 기록을 Amazon S3 버킷에 저장합니다. 환자 기록에는 개인식별정보(PII)가 포함됩니다. S3 버킷에는 수백 테라바이트의 데이터가 포함되어 있습니다. 보안 엔지니어는 Amazon GuardDuty Exfiltration:S3/AnomalousBehavior 발견사항으로 인해 트리거된 경고를 받습니다. 보안 엔지니어는 공격자가 S3 버킷에 대한 s3:GetObject 권한이 있는 손상된 Amazon EC2 인스턴스에서 얻은 임시 자격증명을 사용하고 있음을 확인합니다. 공격자가 버킷 내용을 다운로드하기 시작했습니다. 보안 엔지니어는 개발 팀에 연락합니다. 개발 팀은 수정을 구현하고 배포하는 데 4시간이 필요합니다. 보안 엔지니어는 공격자가 S3 버킷에서 더 이상 데이터를 다운로드하는 것을 방지하기 위해 즉시 조치를 취해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스 프로필과 관련된 임시 세션을 취소합니다.",
      "B": "기존 보안 그룹을 규칙이 적용되지 않은 새 보안 그룹으로 바꿔 EC2 인스턴스를 격리합니다.",
      "C": "S3 버킷에서 Amazon Macie를 활성화합니다. 개인식별정보(PII)에 대한 관리형 데이터 식별자를 구성합니다. Macie가 플래그를 표시한 객체에 S3 Object Lock을 활성화합니다.",
      "D": "S3 버킷 정책을 임시로 적용합니다. 정책을 구성하여 모든 주체에 대해 읽기 액세스를 거부하여 개발 팀이 취약점을 해결하는 동안 다운로드를 차단합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Security group — 인스턴스 수준의 상태 저장 방화벽\n▸ Ingress rule — 인바운드 트래픽 제어\n▸ Egress rule — 아웃바운드 트래픽 제어\n▸ 최소 권한 원칙 — 필요한 포트/프로토콜만 허용\n\n【정답 포인트】\n▸ Ingress: HTTP(80)/HTTPS(443) → 특정 CIDR만 허용\n▸ Egress: 아웃바운드 필요 서비스만 허용 → 기본 모두 거부\n▸ 0.0.0.0/0 피하기 → 특정 IP/보안 그룹 사용\n▸ 세그멘테이션 — 애플리케이션별 독립 그룹\n▸ VPC Flow Logs — 트래픽 모니터링\n▸ 정기 감시 — 사용하지 않는 규칙 제거\n\n【오답 체크】\n(A) 모든 포트 허용 — 0.0.0.0/0은 보안 위험\n(B) Egress 제한 없음 — 데이터 유출 위험\n(D) 감시 없음 — 비정상 트래픽 탐지 불가능\n\n【시험 포인트】\n▸ 기본 설정: 모든 인바운드 거부, 필요한 것만 Allow\n▸ Egress: 필요한 것만 허용으로 데이터 유출 방지\n▸ 정기 감사: CloudTrail 및 VPC Flow Logs 활용",
    "en_q": "A healthcare company stares mare than 1 million patient records in an Amazon S3 bucket. The patient records include personally identifiable information (Pit). The S3 bucket contains hundreds of terabytes of data. A security engineer receives an alert that was triggered by an Amazon GuardDuty Exfiltration:S3/AnomalousBehavior finding. The security engineer confirms that an attacker is using temporary credentials that were obtained from a compromised Amazon EC2 instance that has s3:GetObject permissions for the S3 bucket. The attacker has begun downloading the contents of the bucket. The security engineer contacts a development team. The development team will require 4 hours to implement and deploy a fix. The security engineer must take immediate action to prevent the attacker from downloading more data from the S3 bucket. Which solution will moot this requirement?",
    "en_opts": {
      "A": "Revoke the temporary session that is associated with the instance profile that is attached to the EC2 instance.",
      "B": "Quarantine the EC2 instance by replacing the existing security group with a new security group that has no rules applied.",
      "C": "Enable Amazon Made on the S3 bucket. Configure the managed data identifiers for personally identifiable information (PII). Enable S3 Object Lock on objects that Macie flags.",
      "D": "Apply an S3 bucket policy temporarily. Configure the policy to deny read access for all principals to block downloads while the development team address the vulnerability."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382947-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 41,
    "question": "회사는 AWS 월간 청구 증가를 조사하고 있습니다. 회사는 악의적 행위자가 일부 Amazon EC2 인스턴스를 손상시키고 대규모 이메일 피싱 캠페인을 위해 웹페이지를 제공했음을 발견했습니다. 보안 엔지니어는 향후 비용 증가를 모니터링하여 악의적 활동을 감지하는 데 도움이 되는 솔루션을 구현해야 합니다. 어느 솔루션이 회사에 비용 증가를 가장 빨리 감지할 수 있습니까?",
    "options": {
      "A": "Amazon EventBridge 규칙을 생성하여 매시간 AWS Lambda 함수를 호출합니다. Lambda 함수를 프로그래밍하여 AWS Data Exports에서 모든 서비스의 AWS 사용 보고서를 다운로드합니다. Lambda 함수를 프로그래밍하여 보고서를 분석하고 이상 현상이 감지되면 알림을 보냅니다.",
      "B": "AWS Cost Anomaly Detection에서 비용 모니터를 생성합니다. Amazon Simple Notification Service(Amazon SNS) 주제에 알림을 보내도록 예상 비용을 초과하는 백분율이 임계값을 초과할 때 개별 경고를 구성합니다.",
      "C": "AWS Cost Explorer를 매일 검토하여 이전 달의 이상 현상을 감지합니다. 비용이 크게 증가한 이전 달의 서비스 사용량을 검토합니다.",
      "D": "EC2 인스턴스가 실행되는 VPC에서 VPC 흐름 로그를 캡처합니다. 타사 네트워크 분석 도구를 사용하여 흐름 로그를 분석하고 비용을 증가시킬 수 있는 네트워크 트래픽의 이상 현상을 감지합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ IAM policy condition — 정책 적용 조건\n▸ aws:username — 현재 사용자명\n▸ aws:SourceIp — 요청 출처 IP 주소\n▸ 문자열 연산자 — StringEquals, StringLike 등\n\n【정답 포인트】\n▸ Condition 블록에서 제한 조건 정의 → 보안 강화\n▸ aws:username으로 사용자별 폴더 접근 제한 → /username/ 경로만\n▸ aws:SourceIp로 회사망만 허용 → IP 범위 제한\n▸ 조건 조합 (AND) → 모든 조건 만족 시에만 허용\n▸ 최소 권한 원칙 → 필요한 조건만 적용\n\n【오답 체크】\n(A) 조건 없음 — 모든 사용자가 모든 폴더 접근 가능\n(B) IP 확인만 — 사용자 격리 불가능\n(D) 정책 없음 — 권한 부족\n\n【시험 포인트】\n▸ Condition으로 정책 세분화: 사용자, IP, 시간 등\n▸ StringEquals: 정확한 일치 필요\n▸ AND 조건: 모두 만족해야 Allow",
    "en_q": "A company is investigating an increase in its AWS monthly bill. The company discovers that bad actors compromised some Amazon EC2 instances and served webpages for a large email phishing campaign. A security engineer must implement a solution to monitor for cost increases in the future to help detect malicious activity. Which solution will offer the company the EARLIEST detection of cost increases?",
    "en_opts": {
      "A": "Create an Amazon EventBridge rule that invokes an AWS Lambda function hourly. Program the Lambda function to download an AWS usage report from AWS Data Exports about usage of all services. Program the Lambda function to analyze the report and to send a notification when anomalies are detected.",
      "B": "Create a cost monitor in AWS Cost Anomaly Detection. Configure an individual alert to notify an Amazon Simple Notification Service (Amazon SNS) topic when the percentage above the expected cost exceeds a threshold.",
      "C": "Review AWS Cost Explorer daily to detect anomalies in cost from prior months. Review the usage of any services that experience a significant cost increase from prior months.",
      "D": "Capture VPC flow logs from the VPC where the EC2 instances run. Use a third-party network analysis tool to analyze the flow logs and to detect anomalies in network traffic that might increase cost."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382931-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 42,
    "question": "한 회사가 Amazon API Gateway를 사용하여 REST API를 사용자에게 제공합니다. API 개발자는 로그 파일을 파싱할 필요 없이 API 액세스 패턴을 분석하고 싶습니다. 최소한의 노력으로 이 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "필수 API 스테이지에 대한 액세스 로깅을 구성합니다.",
      "B": "API Gateway 이벤트에 대한 AWS CloudTrail 추적 대상을 구성합니다. userIdentity, userAgent 및 sourceIPAddress 필드에서 필터를 구성합니다.",
      "C": "API Gateway 로그에 대해 Amazon S3 대상을 구성합니다. Amazon Athena 쿼리를 실행하여 API 액세스 정보를 분석합니다.",
      "D": "Amazon CloudWatch Logs Insights를 사용하여 API 액세스 정보를 분석합니다.",
      "E": "필수 API 스테이지에서 상세 CloudWatch 메트릭 활성화 옵션을 선택합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ AWS Certificate Manager (ACM) — SSL/TLS 인증서 관리\n▸ Domain validation — 도메인 소유권 확인\n▸ Auto-renewal — 만료 전 자동 갱신\n▸ HTTPS 종료 — ALB/CloudFront에서 암호화 처리\n\n【정답 포인트】\n▸ ACM 인증서 요청 → 공인 인증서 무료 발급\n▸ Domain validation (DNS) → Route 53 자동 검증\n▸ ALB/CloudFront에 연결 → HTTPS 트래픽 처리\n▸ 자동 갱신 → 90일 전 자동 재발급\n▸ 백엔드 암호화 (옵션) — 엔드투엔드 보안\n▸ 로그 모니터링 → CloudTrail 감시\n\n【오답 체크】\n(A) 자체 서명 인증서 — 브라우저 경고, 신뢰성 문제\n(B) 타사 CA — 관리 복잡도, 비용 증가\n(D) HTTPS 미사용 — 규정 준수 불가능\n\n【시험 포인트】\n▸ ACM: AWS에서 HTTPS 인증서 관리 표준\n▸ 자동 갱신으로 인증서 만료 예방\n▸ Domain validation으로 도메인 소유권 확인",
    "en_q": "A company uses Amazon API Gateway to present REST APIs to users. An API developer wants to analyze API access patterns without the need to parse the log files. Which combination of steps will meet these requirements with the LEAST effort? (Choose two.)",
    "en_opts": {
      "A": "Configure access logging for the required API stage.",
      "B": "Configure an AWS CloudTrail trail destination for API Gateway events. Configure filters on the userIdentity, userAgent, and sourceIPAddress fields.",
      "C": "Configure an Amazon S3 destination for API Gateway logs. Run Amazon Athena queries to analyze API access information.",
      "D": "Use Amazon CloudWatch Logs Insights to analyze API access information.",
      "E": "Select the Enable Detailed CloudWatch Metrics option on the required API stage."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382898-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 43,
    "question": "한 스타트업이 단일 AWS 계정에서 단일 AWS 리전의 리소스를 사용합니다. 보안 엔지니어는 AWS CLI를 사용하여 로그 파일을 Amazon S3 버킷으로 전달하기 위해 같은 리전에서 AWS CloudTrail 추적을 구성합니다. 확장으로 인해 회사가 여러 리전에 리소스를 추가합니다. 보안 엔지니어는 새 리전의 로그가 S3 버킷에 도달하지 않는 것을 알아차립니다. 보안 엔지니어가 최소한의 운영 오버헤드로 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "새 CloudTrail 추적을 만듭니다. 회사가 리소스를 추가한 새 리전을 선택합니다.",
      "B": "S3 버킷을 변경하여 모든 리전의 모든 작업을 추적하기 위한 알림을 수신합니다.",
      "C": "모든 리전에 적용되는 새 CloudTrail 추적을 만듭니다.",
      "D": "기존 CloudTrail 추적을 변경하여 모든 리전에 적용되도록 합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Data residency — 데이터 저장 위치 제한 (규정 준수)\n▸ AWS Region — 지리적으로 독립된 데이터 센터 집합\n▸ S3 bucket policy — 리전 기반 저장 위치 제어\n▸ 교차 리전 복제 (CRR) — 다중 지역 재해 복구\n\n【정답 포인트】\n▸ 리전별 S3 버킷 분리 → 데이터 상주 요구사항 충족\n▸ 버킷 정책 설정 → 특정 리전에만 객체 저장 허용\n▸ 조건: aws:RequestedRegion → PutObject 시 지역 검증\n▸ Effect: Deny → 다른 리전 업로드 차단\n▸ 감시 로그 → CloudTrail로 위치 위반 탐지\n▸ 백업 — 규정 준수 범위 내에서 복제\n\n【오답 체크】\n(A) 다중 리전 저장 — 규정 위반, 데이터 상주 불가능\n(B) 정책 없음 — 자동 위치 보장 불가능\n(D) 감시 없음 — 위반 사항 탐지 불가능\n\n【시험 포인트】\n▸ 리전 기반 정책으로 규정 준수 자동화\n▸ aws:RequestedRegion 조건으로 업로드 위치 제어\n▸ CloudTrail로 정책 위반 이력 추적",
    "en_q": "A startup company is using a single AWS account that has resources in a single AWS Region. A security engineer configures an AWS CloudTrail trail in the same Region to deliver log files to an Amazon S3 bucket by using the AWS CLI. Because of expansion, the company adds resources in multiple Regions. The security engineer notices that the logs from the new Regions are not reaching the S3 bucket. What should the security engineer do to fix this issue with the LEAST amount of operational overhead?",
    "en_opts": {
      "A": "Create a new CloudTrail trail. Select the new Regions where the company added resources.",
      "B": "Change the S3 bucket to receive notifications to track all actions from all Regions.",
      "C": "Create a new CloudTrail trail that applies to all Regions.",
      "D": "Change the existing CloudTrail trail so that it applies to all Regions."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382915-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 44,
    "question": "한 회사의 보안 팀이 AWS Key Management Service (AWS KMS) 고객 관리 키를 관리합니다. 보안 팀의 멤버만 KMS 키를 관리할 수 있습니다. 회사의 애플리케이션 팀에는 가끔 키에 일시적으로 액세스해야 하는 소프트웨어 프로세스가 있습니다. 보안 팀은 애플리케이션 팀의 소프트웨어 프로세스에 키 액세스 권한을 제공해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "KMS 키 자료를 온프레미스 하드웨어 보안 모듈(HSM)로 내보냅니다. 애플리케이션 팀이 키 자료에 액세스할 수 있도록 합니다.",
      "B": "보안 팀에 액세스 권한을 부여하는 키 정책을 편집하여 애플리케이션 팀을 주체로 추가합니다. 애플리케이션 팀이 더 이상 액세스할 필요가 없으면 이 변경 사항을 되돌립니다.",
      "C": "애플리케이션 팀이 KMS 키를 사용할 수 있도록 허용하는 키 그랜트를 만듭니다. 애플리케이션 팀이 더 이상 액세스할 필요가 없으면 그랜트를 취소합니다.",
      "D": "온프레미스에서 키 자료를 생성하여 새 KMS 키를 만듭니다. 애플리케이션 팀이 액세스해야 할 때마다 키 자료를 AWS KMS로 가져옵니다. 애플리케이션 팀이 키를 사용할 수 있는 권한을 부여합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ VPC Endpoint — VPC 내부에서 AWS 서비스에 비공개 연결\n▸ Gateway endpoint — S3, DynamoDB용 (무료)\n▸ Interface endpoint — 대부분의 AWS 서비스 (유료)\n▸ PrivateLink — AWS 서비스 비공개 연결 기술\n\n【정답 포인트】\n▸ 인터넷 게이트웨이 제거 → 인스턴스가 프라이빗 서브넷만 사용\n▸ Gateway endpoint (S3) → NAT 없이 프라이빗 접근\n▸ 엔드포인트 정책 → 리소스별 접근 제어\n▸ 트래픽 비용 절감 → 인터넷 전송 제거\n▸ 보안 강화 — 인터넷 노출 제거\n▸ 로그 모니터링 → VPC Flow Logs 활용\n\n【오답 체크】\n(A) NAT Gateway — 비용 발생, 인터넷 접근 필요\n(B) 퍼블릭 서브넷 — 보안 위험, 인스턴스 노출\n(D) VPN — 복잡도 높음, VPC Endpoint 간단\n\n【시험 포인트】\n▸ Gateway endpoint (S3/DynamoDB): 무료, 비용 절감\n▸ 프라이빗 서브넷: 인터넷 접근 제거로 보안 강화\n▸ 엔드포인트 정책: 세밀한 접근 제어",
    "en_q": "A security team manages a company's AWS Key Management Service (AWS KMS) customer managed keys. Only members of the security learn can administer the KMS keys. The company's application team has a software process that needs temporary access to the keys occasionally. The security team needs to provide the application team's software process with access to the keys. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Export the KMS key material to an on-premises hardware security module (HSM). Give the application team access to the key material.",
      "B": "Edit the key policy that grants the security team access to the KMS keys by adding the application team as principals. Revert this change when the application team no longer needs access",
      "C": "Create a key grant to allow the application team to use the KMS keys. Revoke the grant when the application team no longer needs access.",
      "D": "Create a new KMS key by generating key material on promises. Import the key material to AWS KMS whenever the application team needs access. Grant the application team permissions to use the key."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382900-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 45,
    "question": "한 회사는 AWS Organizations의 조직에 속한 계정들에서 새로운 워크로드를 실행하고 있습니다. 실행 중인 모든 리소스에는 CostCenter 태그가 있어야 하며, 이 태그는 승인된 3개의 값 중 하나를 가져야 합니다. 이 정책을 적용하고 CostCenter 태그가 승인되지 않은 값으로 변경되는 것을 방지해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS CloudFormation Guard를 사용하여 AWS Config 사용자 정의 정책 규칙을 만듭니다. CostCenter의 태그 키와 승인된 값을 포함합니다. aws:RequestTagCostCenter 조건 키 값이 승인된 3개의 값 중 하나가 아닐 때 리소스 생성을 거부하는 SCP를 만듭니다.",
      "B": "AWS CloudTrail 추적을 만듭니다. 새 리소스 생성과 일치하는 규칙 문장이 포함된 Amazon EventBridge 규칙을 만듭니다. CostCenter 태그를 확인하는 AWS Lambda 함수를 호출하도록 EventBridge 규칙을 구성합니다. 준수하지 않는 값의 경우 생성을 차단하도록 Lambda 함수를 프로그래밍합니다.",
      "C": "조직에 대한 태그 정책을 활성화합니다. CostCenter의 태그 키와 승인된 값을 지정하는 태그 정책을 만듭니다. 준수하지 않는 작업을 적용하도록 정책을 구성합니다. aws:RequestTag.CostCenter 조건 키가 null 값일 때 리소스 생성을 거부하는 SCP를 만듭니다.",
      "D": "조직에 대한 태그 정책을 활성화합니다. CostCenter의 태그 키와 승인된 값을 지정하는 태그 정책을 만듭니다. 준수하지 않는 태그가 생성될 때 AWS Lambda 함수를 호출하는 Amazon EventBridge 규칙을 만듭니다. 태그 변경을 차단하도록 Lambda 함수를 프로그래밍합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Backup — 중앙화된 백업 관리 서비스\n▸ Backup plan — 자동 백업 스케줄 및 보존 정책\n▸ Cross-region backup — 재해 복구용 다중 지역 복제\n▸ RPO/RTO — 복구 목표 시간 및 손실 시간\n\n【정답 포인트】\n▸ Backup vault 생성 → 리소스 백업 중앙 저장소\n▸ Backup plan 설정 → 자동 일일/주간/월간 백업\n▸ Cross-region replication → 재해 복구 시뮬레이션\n▸ 암호화 (KMS) → 백업 데이터 보호\n▸ 액세스 제어 → IAM 정책으로 복구 권한 제한\n▸ 보존 정책 — 규정 준수 기간 설정\n\n【오답 체크】\n(A) 수동 백업 — 일관성 없음, 운영 오류 위험\n(B) 단일 리전 — 재해 복구 불가능\n(D) 백업 없음 — 데이터 손실 위험\n\n【시험 포인트】\n▸ AWS Backup: 멀티 서비스 중앙 백업 관리\n▸ Cross-region: 지역 재해 대비 필수\n▸ 보존 정책: 규정 준수 및 비용 최적화",
    "en_q": "A company is running a new workload across accounts that are in an organization in AWS Organizations. All running resources must have a tag of CostCenter, and the tag must have one of three approved values. The company must enforce this policy and must prevent any changes of the CostCenter tag to a non-approved value. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an AWS Config Custom Policy rule by using AWS CloudFormatlon Guard. Include the tag key of CostCenter and the approved values. Create an SCP that denies the creation of resources when the value of the aws:RequestTagCostCenter condition key is not one of the three approved values.",
      "B": "Create an AWS CloudTrail trail. Create an Amazon EventBridge rule that includes a rule statement that matches the creation of new resources. Configure the EventBridge rule to invoke an AWS Lambda function that checks for the CostCenter tag. Program the Lambda function to block creation in case of a noncompliant value.",
      "C": "Enable tag policies for the organization. Create a tag policy that specifies a tag key of CostCenter and the approved values. Configure the policy to enforce noncompliant operations. Create an SCP that denies the creation of resources when the aws:RequestTag.CostCenter condition key has a null value.",
      "D": "Enable tag policies for the organization. Create a tag policy that specifies a tag key of CostCenter and the approved values. Create an Amazon EventBridge rule that invokes an AWS Lambda function when a noncompliant tag is created. Program the Lambda function to block changes to the tag."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382935-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 46,
    "question": "한 회사는 AWS Organizations를 사용합니다. 회사의 팀들은 중앙 AWS 계정에서 호스팅되는 AWS CloudHSM 하드웨어 보안 모듈(HSM)을 사용합니다. 팀 중 하나가 새로운 전용 AWS 계정을 만들고 중앙 계정에서 호스팅되는 HSM을 사용하고 싶어 합니다. 보안 엔지니어는 중앙 계정에서 호스팅되는 HSM을 새로운 전용 계정과 공유하려면 어떻게 해야 합니까?",
    "options": {
      "A": "AWS Resource Access Manager (AWS RAM)를 사용하여 중앙 계정에서 호스팅되는 HSM의 VPC 서브넷 ID를 새로운 전용 계정과 공유합니다. CloudHSM 보안 그룹을 구성하여 새로운 전용 계정의 클라이언트 인스턴스의 프라이빗 IP 주소에서 인바운드 트래픽을 수락합니다.",
      "B": "AWS Identity and Access Management (IAM)를 사용하여 중앙 계정의 CloudHSM 클러스터에 액세스할 수 있는 크로스 계정 역할을 만듭니다. 새로운 전용 계정에서 새 IAM 사용자를 만듭니다. 새 IAM 사용자에게 크로스 계정 역할을 할당합니다.",
      "C": "AWS IAM Identity Center를 사용하여 새로운 전용 계정에서 중앙 계정으로 인증할 수 있는 AWS Security Token Service (AWS STS) 토큰을 만듭니다. STS 토큰에 할당된 크로스 계정 권한을 사용하여 중앙 계정의 HSM에서 작업을 호출합니다.",
      "D": "AWS Resource Access Manager (AWS RAM)를 사용하여 중앙 계정에서 호스팅되는 HSM의 ID를 새로운 전용 계정과 공유합니다. CloudHSM 보안 그룹을 구성하여 새로운 전용 계정의 클라이언트 인스턴스의 프라이빗 IP 주소에서 인바운드 트래픽을 수락합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ IAM Access Analyzer — 과도한 권한 검사 및 외부 액세스 탐지\n▸ Finding — 접근 권한 분석 결과\n▸ External access — 외부 AWS 계정이나 서비스에 노출된 리소스\n▸ Permission boundary — 역할 권한 제한\n\n【정답 포인트】\n▸ Access Analyzer 활성화 → 조직 전체 권한 분석\n▸ 외부 액세스 탐지 → 의도하지 않은 노출 식별\n▸ 정책 검증 → 과도한 권한 권장사항 제공\n▸ 이력 추적 → 정책 변경 감시\n▸ 자동화 → EventBridge로 발견사항 알림\n▸ 최소 권한 원칙 실행 → 권한 제거 자동화\n\n【오답 체크】\n(A) 수동 감시 — 놓친 권한 위험\n(B) CloudTrail만 — API 활동만 추적, 권한 검증 안 함\n(D) 감시 없음 — 보안 위험 증가\n\n【시험 포인트】\n▸ Access Analyzer: 권한 분석 자동화 도구\n▸ 외부 액세스 탐지: 의도하지 않은 노출 방지\n▸ 정책 검증: 최소 권한 원칙 강화",
    "en_q": "A company uses AWS Organizations. The company has learns that use an AWS CloudHSM hardware security module (HSM) that is hosted in a central AWS account. One of the teams creates its own new dedicated AWS account and wants to use the HSM that is hosted in the central account. How should a security engineer share the HSM that is hosted in the central account with the new dedicated account?",
    "en_opts": {
      "A": "Use AWS Resource Access Manager (AWS RAM) to share the VPC subnet ID of the HSM that is hosted in the central account with the new dedicated account. Configure the CloudHSM security group to accept inbound traffic from the private IP addresses of client instances in the new dedicated account.",
      "B": "Use AWS Identity and Access Management (IAM) to create a cross-account role to access the CloudHSM cluster that is in the central account. Create a new IAM user in the new dedicated account. Assign the cross-account role to the new IAM user.",
      "C": "Use AWS IAM Identity Center to create an AWS Security Token Service (AWS STS) token to authenticate from the new dedicated account to the central account. Use the cross-account permissions that are assigned to the STS token to invoke an operation on the HSM in the central account.",
      "D": "Use AWS Resource Access Manager (AWS RAM) to share the ID of the HSM that is hosted in the central account with the new dedicated account. Configure the CloudHSM security group to accept inbound traffic from the private IP addresses of client instances in the now dedicated account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382939-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 47,
    "question": "한 회사는 AWS Config 규칙을 사용하여 회사의 데이터 보호 정책을 준수하지 않는 Amazon S3 버킷을 식별합니다. S3 버킷은 여러 AWS 리전과 여러 AWS 계정에서 호스팅됩니다. 계정들은 AWS Organizations의 조직에 속합니다. 회사는 조직의 기존 비준수 S3 버킷을 재구성하고 향후 생성되는 비준수 S3 버킷도 자동으로 재구성하는 솔루션이 필요합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "조직 차원의 리소스 데이터 수집을 사용하는 AWS Config 수집기를 배포합니다. 비준수 S3 버킷의 AWS Config 결과에 응답하여 S3 버킷을 삭제하거나 재구성하는 AWS Lambda 함수를 만듭니다.",
      "B": "조직 차원의 리소스 데이터 수집을 사용하는 AWS Config 수집기를 배포합니다. 비준수 S3 버킷 생성을 방지하는 Deny 문이 포함된 SCP를 만듭니다. 조직의 모든 OU에 SCP를 적용합니다.",
      "C": "회사에서 현재 사용하는 계정과 리전만 범위로 하는 AWS Config 수집기를 배포합니다. 비준수 S3 버킷의 AWS Config 결과에 응답하여 S3 버킷을 삭제하거나 재구성하는 AWS Lambda 함수를 만듭니다.",
      "D": "회사에서 현재 사용하는 계정과 리전만 범위로 하는 AWS Config 수집기를 배포합니다. 비준수 S3 버킷 생성을 방지하는 Deny 문이 포함된 SCP를 만듭니다. 조직의 모든 OU에 SCP를 적용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon GuardDuty — AI 기반 위협 탐지 서비스\n▸ Finding — 의심스러운 활동 탐지 결과\n▸ CloudTrail event — API 활동 로그\n▸ VPC Flow Logs — 네트워크 트래픽 로그\n\n【정답 포인트】\n▸ GuardDuty 활성화 → CloudTrail, VPC Flow Logs 자동 분석\n▸ 위협 탐지 → 비정상 행동, 악성 IP 연결 감지\n▸ Finding 심각도 — High/Medium/Low 분류\n▸ 자동 대응 → EventBridge로 Lambda 트리거\n▸ 멀티 계정 — 조직 전체 위협 통합 모니터링\n▸ 로그 분석 — CloudWatch 대시보드 통합\n\n【오답 체크】\n(A) CloudTrail만 — 위협 탐지 기능 없음, 수동 분석 필요\n(B) VPC Flow Logs만 — API 위협 탐지 불가능\n(D) 감시 없음 — 위협 조기 탐지 불가능\n\n【시험 포인트】\n▸ GuardDuty: 머신러닝 기반 위협 탐지\n▸ 멀티 데이터 소스: CloudTrail + VPC Flow Logs + DNS\n▸ 자동 대응: EventBridge 통합으로 신속 대응",
    "en_q": "A company uses AWS Config rules to identify Amazon S3 buckets that are not compliant with the company's data protection policy. The S3 buckets are hosted in several AWS Regions and several AWS accounts. The accounts are in an organization in AWS Organizations. The company needs a solution to remediate the organization's existing noncompliant S3 buckets and any noncompliant S3 buckets that are created in the future. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy an AWS Config aggregator with organization-wide resource data aggregation. Create an AWS Lambda function that responds to AWS Config findings of noncompliant S3 buckets by deleting or reconfiguring the S3 buckets.",
      "B": "Deploy an AWS Config aggregator with organization-wide resource data aggregation. Create an SCP that contains a Deny statement that prevents the creation of new noncompliant S3 buckets. Apply the SCP to all OUs in the organization.",
      "C": "Deploy an AWS Config aggregator that scopes only the accounts and Regions that the company currently uses. Create an AWS Lambda function that responds to AWS Config findings of noncompliant S3 buckets by deleting or reconfiguring the S3 buckets.",
      "D": "Deploy an AWS Config aggregator that scopes only the accounts and Regions that the company currently uses. Create an SCP that contains a Deny statement that prevents the creation of new noncompliant S3 buckets. Apply the SCP to all OUs in the organization."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382903-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 48,
    "question": "한 회사가 제3자와 계약하여 여러 AWS 계정을 감시합니다. 감시를 활성화하기 위해 감시 대상 각 계정에서 크로스 계정 IAM 역할이 생성되었습니다. 감시자가 일부 계정에 액세스하는 데 문제가 있습니다. 다음 중 이 문제를 야기할 수 있는 것은 무엇입니까? (3개 선택)",
    "options": {
      "A": "감시자가 사용한 외부 ID가 누락되었거나 잘못되었습니다.",
      "B": "감시자가 잘못된 비밀번호를 사용하고 있습니다.",
      "C": "감시자는 대상 계정의 역할에 대해 sts:AssumeRole이 부여되지 않았습니다.",
      "D": "감시자가 사용하는 Amazon EC2 역할이 대상 계정 역할로 설정되어야 합니다.",
      "E": "감시자가 사용한 시크릿 키가 누락되었거나 잘못되었습니다.",
      "F": "감시자가 사용한 역할 ARN이 누락되었거나 잘못되었습니다."
    },
    "answer": "ACF",
    "explanation": "【핵심 용어】\n▸ S3 Public Access Block — 버킷 수준에서 공개 액세스 차단\n▸ Block public ACLs — 공개 ACL 설정 방지\n▸ Block public bucket policies — 공개 정책 적용 방지\n▸ Ignore public ACLs — 기존 공개 ACL 무시\n▸ Restrict public buckets — 공개 액세스 제한\n\n【정답 포인트】\n▸ 모든 차단 설정 활성화 → 의도하지 않은 공개 노출 방지\n▸ 조직 수준 정책 — 모든 버킷에 자동 적용\n▸ 감시 로그 — CloudTrail로 공개 설정 시도 추적\n▸ 예외 관리 — 공개 필요 리소스는 명시적 허용\n▸ 정기 감사 — Config로 준수 확인\n▸ 경고 설정 — 공개 정책 시도 알림\n\n【오답 체크】\n(A) 차단 없음 — 실수로 공개 노출 위험\n(B) 정책만 — ACL 기반 공개는 방지 안 함\n(D) 감시 없음 — 위반 사항 탐지 불가능\n\n【시험 포인트】\n▸ Public Access Block 모든 설정 활성화 권장\n▸ 조직 정책: 중앙 관리로 일관성 보장\n▸ 예외 관리: 명시적 정책으로 필요한 공개만 허용",
    "en_q": "A company has contracted with a third party to audit several AWS accounts. To enable the audit, cross-account IAM roles have been created in each account targeted for audit. The auditor is having trouble accessing some of the accounts. Which of the following may be causing this problem? (Choose three.)",
    "en_opts": {
      "A": "The external ID used by the auditor is missing or incorrect.",
      "B": "The auditor is using the incorrect password.",
      "C": "The auditor has not been granted sts:AssumeRole for the role in the destination account.",
      "D": "The Amazon EC2 role used by the auditor must be set to the destination account role.",
      "E": "The secret key used by the auditor is missing or incorrect.",
      "F": "The role ARN used by the auditor is missing or incorrect."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382937-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 49,
    "question": "한 회사는 AWS Organizations를 사용하여 AWS 계정을 관리합니다. 회사에는 개발 계정과 프로덕션 계정이 있습니다. 감시자가 프로덕션 계정 워크로드가 중단에 탄력적이라는 증거를 요청했습니다. 회사는 각 프로덕션 계정 워크로드의 탄력성을 개선하는 솔루션이 필요합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Audit Manager를 사용하여 프로덕션 계정에서 AWS Operational Best Practices를 기반으로 한 새로운 평가를 만듭니다. 평가가 완료되면 감시자에게 보고서에 대한 직접 액세스를 제공합니다.",
      "B": "AWS Well-Architected Tool을 사용하여 아키텍처를 검토합니다. Well-Architected Framework를 사용하고 Operational Excellence, Security, Reliability 기둥에 중점을 둡니다. 식별된 위험에 대한 완화 조치를 문서화하고 구현합니다. 문서를 감시자에게 제공합니다.",
      "C": "멀티 계정 환경에서 Amazon Inspector를 사용하여 프로덕션 계정 워크로드를 취약점 평가합니다. Amazon Inspector에서 CIS 스캔을 만듭니다. CIS 스캔을 Benchmark Level 2의 일회성 스캔으로 구성합니다. 스캔이 완료되면 PDF 보고서를 다운로드하여 감시자에게 제공합니다.",
      "D": "AWS Fault Injection Service를 사용하여 개발 계정에서 각 워크로드에 대한 실험을 만듭니다. 워크로드의 구성과 아키텍처를 조정하여 탄력성을 개선합니다. 실험을 다시 실행합니다. PDF 보고서를 다운로드하여 감시자에게 제공합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Network ACL — 서브넷 수준 상태 비저장 방화벽\n▸ Security group — 인스턴스 수준 상태 저장 방화벽\n▸ 계층화 방어 — 여러 보안 계층\n▸ 세그멘테이션 — 보안 그룹별 트래픽 격리\n\n【정답 포인트】\n▸ VPC 분리 → 프라이빗/퍼블릭 서브넷 분리\n▸ 다층 방화벽 → Network ACL + Security Group\n▸ Network ACL 규칙 — 서브넷 진입/탈출 제어\n▸ 보안 그룹 규칙 — 인스턴스 진입/탈출 제어\n▸ 최소 권한 — 필요한 트래픽만 허용\n▸ VPC Flow Logs — 트래픽 모니터링 및 감시\n\n【오답 체크】\n(A) 보안 그룹만 — Network ACL 없으면 서브넷 수준 제어 불가능\n(B) Network ACL만 — 인스턴스 수준 보안 취약\n(D) 제어 없음 — 모든 트래픽 허용, 보안 위험\n\n【시험 포인트】\n▸ 계층화 방어: Network ACL + Security Group 병행\n▸ Stateless vs Stateful: ACL는 상태 비저장, SG는 상태 저장\n▸ VPC Flow Logs: 네트워크 트래픽 가시성 제공",
    "en_q": "A company uses AWS Organizations to manage its AWS accounts. The company has a development account and a production account. An auditor has requested evidence that the production account workloads are resilient to disruption. The company needs a solution that improves the resilience of each production account workload. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS Audit Manager to create a new assessment based on AWS Operational Best Practices in the production account. After the assessments are finished, provide the auditor with direct access to the reports.",
      "B": "Review the architecture by using the AWS Well-Architected Tool. Use the Well-Architected Framework and focus on the Operational Excellence, Security, and Reliability pillars. Document and implement mitigations for the identified risks. Provide the documentation to the auditor.",
      "C": "Use Amazon Inspector with a multi-account environment to assess the production account workloads for vulnerabilities. Create a CIS scan in Amazon Inspector. Configure the CIS scan as a one time scan with Benchmark Level 2. After the scan is finished, download the PDF report and provide the report to the auditor.",
      "D": "Use the AWS Fault Injection Service to create experiments in the development account for each workload. Adjust the configuration and architecture of the workloads to improve resilience. Run the experiments again. Download the PDF reports and provide the reports to the auditor."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382934-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 50,
    "question": "한 회사가 온프레미스 데이터 센터에서 AWS로 레거시 시스템을 마이그레이션하고 있습니다. 애플리케이션 서버는 AWS에서 실행되지만, 규정 준수 상의 이유로 데이터베이스는 온프레미스 데이터 센터에 남아 있어야 합니다. 데이터베이스는 네트워크 지연에 민감합니다. 또한 온프레미스 데이터 센터와 AWS 사이를 이동하는 데이터는 IPsec 암호화를 해야 합니다. 이러한 요구 사항을 충족하는 AWS 솔루션 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "AWS Site-to-Site VPN",
      "B": "AWS Direct Connect",
      "C": "AWS VPN CloudHub",
      "D": "VPC 피어링",
      "E": "NAT 게이트웨이"
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ AWS Config — 리소스 구성 변화 추적 및 규정 준수 평가\n▸ Conformance pack — 사전 정의된 규정 준수 규칙 모음\n▸ CloudTrail — API 활동 로깅 및 감사 추적\n▸ Remediation — 비규정 리소스 자동 수정\n\n【정답 포인트】\n▸ Config 활성화 → 리소스 구성 기록 및 변화 추적\n▸ Conformance pack 적용 → 규정 준수 자동 평가\n▸ CloudTrail 활성화 → 모든 API 활동 기록\n▸ Config Rules → 규정 위반 자동 탐지\n▸ Remediation Actions → 자동 수정 (옵션)\n▸ 감사 대시보드 — Config 준수 상태 시각화\n\n【오답 체크】\n(A) CloudTrail만 — 구성 변화 추적 불가능, API 활동만 기록\n(B) Config만 — API 활동 감사 추적 불가능\n(D) 감시 없음 — 규정 준수 증명 불가능\n\n【시험 포인트】\n▸ Config: 구성 변화 및 규정 준수 평가\n▸ CloudTrail: API 활동 및 감사 추적\n▸ Conformance pack: 규정 준수 자동화",
    "en_q": "A company is migrating one of its legacy systems from an on-premises data center to AWS. The application server will run on AWS, but the database must remain in the on-premises data center for compliance reasons. The database is sensitive to network latency. Additionally, the data that travels between the on-premises data center and AWS must have IPsec encryption. Which combination of AWS solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "AWS Site-to-Site VPN",
      "B": "AWS Direct Connect",
      "C": "AWS VPN CloudHub",
      "D": "VPC peering",
      "E": "NAT gateway"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382943-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 51,
    "question": "한 회사는 AWS Organizations의 조직을 위해 AWS Config를 활성화했습니다. 회사는 조직 전체에 수백 개의 Amazon S3 버킷을 배포했습니다. 보안 엔지니어는 AWS Key Management Service (AWS KMS)로 암호화되지 않은 S3 버킷을 식별해야 합니다. 보안 엔지니어는 또한 AWS KMS로 암호화되지 않은 객체가 S3 버킷에 업로드되는 것을 방지해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "암호화되지 않은 S3 버킷을 식별하려면 s3-default-encryption-kms AWS Config 관리형 규칙을 사용합니다. 객체가 AWS KMS로 암호화될 때만 s3:PutObject 작업을 허용하는 SCP를 만듭니다.",
      "B": "암호화되지 않은 S3 버킷을 식별하려면 s3-default-encryption-kms AWS Config 관리형 규칙을 사용합니다. 객체가 S3 관리 키(SSE-S3)를 사용한 서버 측 암호화를 사용할 때만 s3:PutObject 작업을 거부하도록 각 S3 버킷에 대해 버킷 정책을 만듭니다.",
      "C": "암호화되지 않은 S3 버킷을 식별하려면 s3-bucket-ssl-requests-only AWS Config 관리형 규칙을 사용합니다. 객체가 AWS KMS로 암호화될 때만 s3:PutObject 작업을 허용하는 SCP를 만듭니다.",
      "D": "암호화되지 않은 S3 버킷을 식별하려면 s3-bucket-ssl-requests-only AWS Config 관리형 규칙을 사용합니다. 객체가 AWS KMS로 암호화될 때만 s3:PutObject 작업을 허용하도록 각 S3 버킷에 대해 버킷 정책을 만듭니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Automatic key rotation — KMS 키 자동 주기적 교체\n▸ Manual key rotation — 새 키 생성 및 기존 키 비활성화\n▸ Key metadata — 키 생성 및 회전 이력\n▸ Cryptographic operations — 암호화 작업 수행\n\n【정답 포인트】\n▸ KMS에서 자동 회전 활성화 → 1년(365일) 주기\n▸ 자동 회전은 투명 → 기존 암호화 데이터 계속 접근 가능\n▸ 회전 이력 추적 → CloudTrail로 기록\n▸ Manual rotation — 필요 시 신규 키 생성\n▸ 기존 데이터 — 자동으로 신규 키로 재암호화 (선택)\n▸ 규정 준수 — 규제 요구사항 충족\n\n【오답 체크】\n(A) 회전 없음 — 장기 키 사용으로 보안 위험\n(B) 수동 회전만 — 운영 오류 위험, 일관성 부족\n(D) 빈번한 회전 — 성능 저하, 관리 복잡도 증가\n\n【시험 포인트】\n▸ 자동 회전: 1년 주기로 투명하게 수행\n▸ 기존 데이터: 회전 후에도 계속 접근 가능\n▸ CloudTrail로 회전 이력 감시",
    "en_q": "A company has enabled AWS Config for its organization in AWS Organizations. The company has deployed hundreds of Amazon S3 buckets across the organization. A security engineer needs to identify any S3 buckets that are not encrypted with AWS Key Management Service (AWS KMS). The security engineer also must prevent objects that are not encrypted with AWS KMS from being uploaded to the S3 buckets. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use the s3-default-encryplion-kms AWS. Config managed rule to identity unencrypted S3 buckets. Create an SCP to allow the s3:PutObject action only when the object is encrypted with AWS KMS.",
      "B": "Use the s3-default-encryption-kms AWS. Config managed rule to identify unencrypted S3 buckets. Create bucket policies for each S3 bucket to deny the s3:PutObject action only when the object has server-since encryption with S3 managed keys (SSE-S3).",
      "C": "Use the s3-bucket-ssl-requests-only AWS Config managed rule to identify unencrypted S3 buckets. Create an SCP to allow the s3:PutObject action only when the object is encrypted with AWS KMS.",
      "D": "Use the s3-bucket-ssl-requests-only AWS Config managed rule to identify unencrypted S3 buckets. Create bucket policies for each S3 bucket to allow the s3:PutObject action only when the object is encrypted with AWS KMS."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382933-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 52,
    "question": "한 회사는 Amazon EC2 인스턴스의 플릿에서 애플리케이션을 실행합니다. 회사는 애플리케이션에 위험을 주지 않고 플릿에서 인스턴스를 제거할 수 있습니다. 모든 EC2 인스턴스는 ProdFleet이라는 보안 그룹을 사용합니다. Amazon GuardDuty와 AWS Config가 회사의 AWS 계정에서 활성화되어 있습니다. 보안 엔지니어는 GuardDuty에서 암호화폐 추적 이벤트를 생성할 때 EC2 인스턴스가 아웃바운드 트래픽을 보내는 것을 방지하는 솔루션을 제공해야 합니다. 보안 엔지니어는 아웃바운드 규칙이 없는 isolate라는 새로운 보안 그룹을 만듭니다. 보안 엔지니어는 EC2 인스턴스를 ProdFleet 보안 그룹에서 제거하고 isolate 보안 그룹으로 추가하는 AWS Lambda 함수를 구성합니다. 이 요구 사항을 충족하기 위해 취해야 할 추가 단계는 무엇입니까?",
    "options": {
      "A": "GuardDuty가 CryptoCurrency:EC2/* 추적 이벤트를 생성할 때 Lambda 함수를 직접 호출하도록 GuardDuty를 구성합니다.",
      "B": "EC2 인스턴스에 대해 CryptoCurrency:EC2/* 구성 변경 이벤트가 발생할 때 Lambda 함수를 호출하는 AWS Config 규칙을 구성합니다.",
      "C": "GuardDuty가 CryptoCurrency:EC2/* 추적 이벤트를 생성할 때 Lambda 함수를 호출하는 Amazon EventBridge 규칙을 구성합니다.",
      "D": "AWS Config이 EC2 인스턴스에 대해 CryptoCurrency:EC2/* 구성 변경 이벤트를 감지할 때 Lambda 함수를 호출하는 Amazon EventBridge 규칙을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Privilege escalation — 낮은 권한 사용자가 높은 권한 획득\n▸ Permission boundary — 역할이 가질 수 있는 최대 권한\n▸ Session policy — 임시 자격증명 사용 시 권한 제한\n▸ AssumeRole 권한 — 특정 역할만 가정 가능\n\n【정답 포인트】\n▸ 권한 경계 설정 → 역할 권한의 상한선 제어\n▸ AssumeRole 제한 → 특정 역할만 가정 가능\n▸ 세션 정책 적용 → 임시 자격증명 권한 제한\n▸ 역할 체이닝 차단 → 다단계 권한 상승 방지\n▸ 액세스 분석 → 과도한 권한 식별\n▸ 정기 감사 — IAM 정책 검토\n\n【오답 체크】\n(A) 권한 경계 없음 — 권한 상승 제어 불가능\n(B) AssumeRole 제한 없음 — 모든 역할 가능, 권한 상승 위험\n(D) 감시 없음 — 비정상 권한 상승 탐지 불가능\n\n【시험 포인트】\n▸ 권한 경계: 역할의 최대 권한 제한\n▸ AssumeRole 조건: 특정 역할만 가정 가능\n▸ 세션 정책: 임시 자격증명 권한 추가 제한",
    "en_q": "A company runs an application on a fleet of Amazon EC2 instances. The company can remove instances from the fleet without risk to the application. All EC2 instances use the same security group named ProdFleet. Amazon GuardDuty and AWS Config are active in the company's AWS account. A security engineer needs to provide a solution that will prevent an EC2 instance from sending outbound traffic if GuardDuty generates a cryptocurrency finding event. The security engineer creates a new security group named isolate that contains no outbound rules. The security engineer configures an AWS Lambda function to remove an EC2 instance from the ProdFleet security group and add it to the isolate security group. Which additional step will meet this requirement?",
    "en_opts": {
      "A": "Configure GuardDuty to directly invoke the Lambda function if GuardDuty generates a CryptoCurrency:EC2/* finding event.",
      "B": "Configure an AWS Config rule that invokes the Lambda function if a CryptoCurroncy:EC2/* configuration change event occurs for an EC2 instance.",
      "C": "Configure an Amazon EventBridge rule that invokes the Lambda function if GuardDuty generates a CryptoCurrency:EC2/* finding event.",
      "D": "Configure an Amazon EventBridge rule that invokes the Lambda function if AWS Config detects a CryptoCurrency:ЕС2/* configuration change event for an EC2 instance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382940-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 53,
    "question": "한 회사는 Amazon EC2 인스턴스를 사용하여 Application Load Balancer 뒤의 프런트엔드 서비스를 호스팅합니다. Amazon Elastic Block Store(Amazon EBS) 볼륨이 EC2 인스턴스에 연결되어 있습니다. 회사는 Amazon S3 버킷을 사용하여 이미지 및 음악의 대용량 파일을 저장합니다. 회사는 AWS에서 보안 아키텍처를 구현하여 잠재적 랜섬웨어 공격을 방지, 식별 및 격리합니다. 회사는 이제 위험을 더욱 줄이기를 원합니다. 보안 엔지니어는 예방 및 탐지 제어를 우회하는 공격자로부터 복구할 수 있도록 재해 복구 솔루션을 개발해야 합니다. 솔루션은 1시간의 RPO를 충족해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Backup을 사용하여 EC2 인스턴스 및 S3 버킷의 백업을 매시간 만듭니다. 기존 아키텍처 구성 요소를 복제하는 AWS CloudFormation 템플릿을 만듭니다. CloudFormation 템플릿을 애플리케이션 구성 코드와 함께 저장하려면 AWS CodeCommit을 사용합니다.",
      "B": "AWS Backup을 사용하여 EBS 볼륨 및 S3 객체의 백업을 매일 만듭니다. Amazon Security Lake를 사용하여 AWS CloudTrail 로그 및 VPC flow 로그의 중앙 집중식 데이터 레이크를 만듭니다. 로그를 자동화된 응답으로 사용합니다.",
      "C": "Amazon Security Lake를 사용하여 AWS CloudTrail 로그 및 VPC flow 로그의 중앙 집중식 데이터 레이크를 만듭니다. 로그를 자동화된 응답으로 사용합니다. AWS Security Hub를 활성화하여 복구 절차의 단일 위치를 설정합니다. 기존 아키텍처 구성 요소를 복제하는 AWS CloudFormation 템플릿을 만듭니다. CloudFormation 템플릿을 애플리케이션 구성 코드와 함께 저장하려면 AWS CodeCommit을 사용합니다.",
      "D": "4시간마다 EBS 스냅샷을 만듭니다. Amazon GuardDuty Malware Protection을 활성화합니다. GuardDuty에서 Execution:EC2/MaliciousFile 추적을 생성하는 EC2 인스턴스에 대해 최신 스냅샷을 즉시 복구하는 자동화를 만듭니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ MFA (Multi-Factor Authentication) — 다중 인증 (비밀번호 + 디바이스)\n▸ Virtual MFA device — 스마트폰 앱 (Google Authenticator 등)\n▸ Hardware MFA device — FIDO2 보안 키\n▸ U2F (Universal 2nd Factor) — 피싱 저항 인증\n\n【정답 포인트】\n▸ 모든 IAM 사용자 MFA 필수 → 콘솔 로그인 및 API 호출\n▸ 루트 계정 MFA 필수 → 계정 보안 강화\n▸ 정책으로 MFA 강제 → MFA 없으면 권한 거부\n▸ 하드웨어 키 권장 → 스미싱, 피싱 저항\n▸ MFA 디바이스 백업 — 분실 시 복구 계획\n▸ 정기 감시 — CloudTrail로 MFA 활동 추적\n\n【오답 체크】\n(A) MFA 없음 — 비밀번호 유출 시 계정 탈취 위험\n(B) 선택적 MFA — 사용자 무시 가능, 실효성 낮음\n(D) 정책 없음 — MFA 강제 불가능\n\n【시험 포인트】\n▸ MFA: 비밀번호 기반 인증의 보안 강화 필수\n▸ 정책으로 강제: IAM 정책에 MFA 조건 포함\n▸ 하드웨어 키: 피싱 저항이 가장 안전",
    "en_q": "A company runs an application on a fleet of Amazon EC2 instances. The company can remove instances from the fleet without risk to the application. All EC2 instances use the same security group named ProdFleet. Amazon GuardDuty and AWS Config are active in the company's AWS account. A security engineer needs to provide a solution that will prevent an EC2 instance from sending outbound traffic if GuardDuty generates a cryptocurrency finding event. The security engineer creates a new security group named isolate that contains no outbound rules. The security engineer configures an AWS Lambda function to remove an EC2 instance from the ProdFleet security group and add it to the isolate security group. Which additional step will meet this requirement?",
    "en_opts": {
      "A": "Use AWS Backup to create backups of the EC2 instances and S3 buckets every hour. Create AWS CloudFormation templates that replicate existing architecture components. Use AWS CodeCommit to store the CloudFormation templates alongside application configuration code.",
      "B": "Use AWS Backup to create backups of the EBS volumes and S3 objects every day. Use Amazon Security Lake to create a centralized data lake for AWS CloudTrail logs and VPC flow logs. Use the logs for automated response.",
      "C": "Use Amazon Security Lake to create a centralized data lake for AWS CloudTrail logs and VPC flow logs. Use the logs for automated response. Enable AWS Security Hub to establish a single location for recovery procedures. Create AWS CloudFormation templates that replicate existing architecture components. Use AWS CodeCommit to store the CloudFormation templates alongside application configuration code.",
      "D": "Create EBS snapshots every 4 hours. Enable Amazon GuardDuty Malware Protection. Create automation to immediately restore the most recent snapshot for any EC2 instances that produce an Execution:EC2/MaliciousFile finding in GuardDuty."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382905-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 54,
    "question": "한 회사는 AWS IAM Identity Center를 사용하여 AWS 계정에 대한 액세스를 관리합니다. 계정들은 AWS Organizations의 조직에 속합니다. 보안 엔지니어는 조직의 관리 계정에서 IAM Identity Center의 위임된 관리를 설정해야 합니다. 보안 엔지니어가 위임된 관리를 구성하기 전에 IAM Identity Center에서 수행해야 할 단계 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "조직의 관리 계정에 최소 권한 액세스를 부여합니다.",
      "B": "조직의 관리 계정에 새로운 IAM Identity Center 디렉터리를 만듭니다.",
      "C": "조직의 관리 계정에 두 번째 AWS 리전을 설정합니다.",
      "D": "조직의 관리 계정에서만 사용할 권한 집합을 만듭니다.",
      "E": "조직의 관리 계정에서만 사용할 IAM 사용자를 만듭니다.",
      "F": "조직의 관리 계정에서만 사용자 할당을 만듭니다."
    },
    "answer": "BDF",
    "explanation": "【핵심 용어】\n▸ IAM Identity Center — 중앙 집중식 ID 및 액세스 관리\n▸ Delegated Administration — 관리 계정이 다른 계정에 관리 권한 위임\n▸ Directory — Identity Center의 사용자/그룹 저장소\n▸ Permission Set — 권한 템플릿, 사용자/그룹에 할당\n\n【정답 포인트】\n▸ \n(B) 디렉터리 생성 → 사용자/그룹 저장\n▸ \n(D) 권한 집합 생성 → 위임 관리에 필요한 권한 템플릿\n▸ (F) 사용자 할당 → 권한 집합을 관리 계정 사용자에게 할당\n▸ 셋의 조합: 디렉터리 → 권한 집합 → 사용자 할당 순서\n\n【오답 체크】\n(A) 최소 권한은 SCP 정책 차원, Identity Center 내 설정 아님\n(C) 리전 추가는 위임 관리와 무관\n(E) IAM 사용자는 Identity Center와 별개 (Identity Center 사용하면 IAM 사용자 불필요)\n\n【시험 포인트】\nIdentity Center 설정 순서: 디렉터리 → 권한 집합 → 사용자 할당\n위임 관리 = 관리 계정에서 준비 후 다른 계정 위임\nIAM 사용자 ≠ Identity Center 사용자",
    "en_q": "A company uses AWS IAM Identity Center to manage access to its AWS accounts. The accounts are in an organization in AWS Organizations. A security engineer needs to set up delegated administration of IAM Identity Center in the organization's management account. Which combination of steps should the security engineer perform in IAM Identity Center before configuring delegated administration? (Choose three.)",
    "en_opts": {
      "A": "Grant least privilege access to the organization's management account.",
      "B": "Create a new IAM Identity Center directory in the organization's management account.",
      "C": "Set up a second AWS Region in the organization's management account.",
      "D": "Create permission sets for use only in the organization's management account.",
      "E": "Create IAM users for use only in the organization's management account.",
      "F": "Create user assignments only in the organization's management account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382928-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 55,
    "question": "한 회사는 Amazon EC2 인스턴스 중 하나가 갑자기 높은 CPU 사용률을 보이는 것을 발견합니다. 회사는 EC2 인스턴스가 손상되었는지 또는 운영 체제가 백그라운드 정리를 수행 중인지 알 수 없습니다. 보안 엔지니어가 문제를 조사하기 전에 취해야 할 단계 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "종료 방지가 비활성화되지 않은 경우 EC2 인스턴스의 종료 방지를 비활성화합니다.",
      "B": "종료 방지가 활성화되지 않은 경우 EC2 인스턴스의 종료 방지를 활성화합니다.",
      "C": "EC2 인스턴스에 연결된 Amazon Elastic Block Store(Amazon EBS) 데이터 볼륨의 스냅샷을 만듭니다.",
      "D": "EC2 인스턴스에 연결된 Amazon Elastic Block Store(Amazon EBS) 데이터 볼륨의 모든 스냅샷을 제거합니다.",
      "E": "EC2 인스턴스 메타데이터를 캡처한 다음 EC2 인스턴스를 격리 상태로 태그를 지정합니다.",
      "F": "EC2 인스턴스 메타데이터에서 민감한 정보가 포함된 모든 항목을 즉시 제거합니다."
    },
    "answer": "BCE",
    "explanation": "【핵심 용어】\n▸ Termination Protection — EC2 실수 삭제 방지\n▸ EBS Snapshot — 볼륨 데이터 법의학 증거 보존\n▸ Instance Metadata — 인스턴스 ID, 역할, 태그 정보\n▸ Quarantine Tag — 의심 인스턴스 격리 표시\n\n【정답 포인트】\n▸ \n(B) 종료 방지 활성화 → 실수 삭제 방지, 조사 중 보호\n▸ \n(C) EBS 스냅샷 생성 → 법의학 증거 보존 (손상 시 분석)\n▸ \n(E) 메타데이터 캡처 + 격리 태그 → 인스턴스 상태 기록 및 격리 표시\n\n【오답 체크】\n(A) 종료 방지 비활성화 = 조사 중 위험\n(D) 스냅샷 제거 = 증거 파괴, 법의학 불가능\n(F) 메타데이터 제거 = 증거 파괴, 조사 방해\n\n【시험 포인트】\n사건 대응 초기 단계: 증거 보존 우선\nTermination Protection + Snapshot + Quarantine Tag\n메타데이터/스냅샷 삭제는 금지",
    "en_q": "A company finds that one of its Amazon EC2 instances suddenly has a high CPU usage. The company does not know whether the EC2 instance is compromised or whether the operating system is performing background cleanup. Which combination of steps should a security engineer take before investigating the issue? (Choose three.)",
    "en_opts": {
      "A": "Disable termination protection for the EC2 instance if termination protection has not been disabled.",
      "B": "Enable termination protection for the EC2 instance if termination protection has not been enabled.",
      "C": "Take snapshots of the Amazon Elastic Block Store (Amazon EBS) data volumes that are attached to the EC2 instance.",
      "D": "Remove all snapshots of the Amazon Elastic Block Store (Amazon EBS) data volumes that are attached to the EC2 instance.",
      "E": "Capture the EC2 instance metadata, and then tag the EC2 instance as under quarantine.",
      "F": "Immediately remove any entries in the EC2 instance metadata that contain sensitive information."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382908-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 56,
    "question": "한 회사의 보안 엔지니어는 사건 대응 계획의 일부로 Amazon EC2 인스턴스에 대한 격리 절차를 설계합니다. 보안 엔지니어는 대상 인스턴스를 격리하여 회사의 법의학 팀의 트래픽을 제외한 대상 인스턴스 간의 모든 트래픽을 차단해야 합니다. 회사의 각 EC2 인스턴스에는 자체 전용 보안 그룹이 있습니다. EC2 인스턴스는 VPC의 서브넷에 배포됩니다. 한 서브넷은 여러 인스턴스를 포함할 수 있습니다. 보안 엔지니어는 EC2 격리 절차를 테스트하고 대상 인스턴스에 SSH 세션을 엽니다. 절차는 공격자가 대상 인스턴스에 액세스하는 것을 시뮬레이션하기 시작합니다. 보안 엔지니어는 기존 보안 그룹 규칙을 제거하고 22번 포트에서 법의학 팀에 액세스할 수 있도록 보안 그룹 규칙을 추가합니다. 이러한 변경 후 보안 엔지니어는 SSH 연결이 여전히 활성 상태이고 사용 가능함을 알아차립니다. 보안 엔지니어가 대상 인스턴스의 공용 IP 주소에 대해 ping 명령을 실행하면 ping 명령이 차단됩니다. 보안 엔지니어가 대상 인스턴스를 격리하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "0.0.0.0/0의 모든 포트에 대해 트래픽을 허용하는 인바운드 규칙을 추가합니다. 0.0.0.0/0의 모든 포트에 대해 트래픽을 허용하는 아웃바운드 규칙을 추가합니다. 그런 다음 즉시 이러한 규칙을 삭제합니다.",
      "B": "22번 포트 보안 그룹 규칙을 제거합니다. 법의학 팀이 AWS Systems Manager Session Manager 연결을 사용하여 대상 인스턴스에 액세스할 수 있도록 하는 인스턴스 역할 정책을 연결합니다.",
      "C": "대상 인스턴스의 서브넷과 연결된 Network ACL을 만듭니다. 인바운드 규칙 집합의 상단에 0.0.0.0/0의 모든 트래픽을 거부하는 규칙을 추가합니다. 아웃바운드 규칙 집합의 상단에 0.0.0.0/0의 모든 트래픽을 거부하는 규칙을 추가합니다.",
      "D": "대상 인스턴스에서 모든 인바운드 트래픽과 아웃바운드 트래픽을 차단하는 호스트 레벨 방화벽 규칙을 추가하는 AWS Systems Manager 문서를 만듭니다. 대상 인스턴스에서 문서를 실행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Security Group — Stateful 방화벽 (기존 연결 유지)\n▸ Network ACL — 서브넷 레벨 Stateless 방화벽\n▸ Session Manager — SSM을 통한 에이전트 기반 접근 (SSH 포트 불필요)\n▸ Stateful vs Stateless — 기존 연결 상태 추적 여부\n\n【정답 포인트】\n▸ \n(B) SSH 포트 22 규칙 제거 → 기존 SSH 세션도 차단\n▸ Session Manager IAM 정책 추가 → SSM Agent로 안전한 관리자 접근\n▸ Session Manager는 포트 기반 아님 = 보안 그룹 규칙 불필요\n\n【오답 체크】\n(A) 규칙 추가 후 삭제 = 순간적 접근 만 가능, 차단 아님\n(C) Network ACL은 서브넷 전체 적용 (다른 인스턴스도 차단)\n    서브넷 레벨이므로 세분화된 격리 불가능\n(D) SSM 문서는 OS 레벨 변경, 보안 그룹 제어보다 복잡\n\n【시험 포인트】\nStateful Security Group: 기존 연결(established) 자동 허용\n포트 22 규칙 제거 = 신규 연결 + 기존 연결 모두 차단\nSession Manager = 포트 기반 아님, SSM Agent 기반\nQuarantine = SSH 제거 + 안전한 대체 접근(Session Manager)",
    "en_q": "A company's security engineer is designing an isolation procedure for Amazon EC2 instances as part of an incident response plan. The security engineer needs to isolate a target instance to block any traffic to and from the target instance, except for traffic from the company's forensics team. Each of the company's EC2 instances has its own dedicated security group. The EC2 instances are deployed in subnets of a VPC. A subnet can contain multiple instances. The security engineer is testing the procedure for EC2 isolation and opens an SSH session to the target instance. The procedure starts to simulate access to the target instance by an attacker. The security engineer removes the existing security group rules and adds security group rules to give the forensics team access to the target instance on port 22. After these changes, the security engineer notices that the SSH connection is still active and usable. When the security engineer runs a ping command to the public IP address of the target instance, the ping command is blocked. What should the security engineer do to isolate the target instance?",
    "en_opts": {
      "A": "Add an inbound rule to the security group to allow traffic from 0.0.0.0/0 for all ports. Add an outbound rule to the security group to allow traffic to 0.0.0.0/0 for all ports. Then immediately delete these rules.",
      "B": "Remove the port 22 security group rule. Attach an instance role policy that allows AWS Systems Manager Session Manager connections so that the forensics team can access the target instance.",
      "C": "Create a network ACL that is associated with the target instance's subnet. Add a rule at the top of the inbound rule set to deny all traffic from 0.0.0.0/0. Add a rule at the top of the outbound rule set to deny all traffic to 0.0.0.0/0.",
      "D": "Create an AWS Systems Manager document that adds a host-level firewall rule to block all inbound traffic and outbound traffic. Run the document on the target instance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382927-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 57,
    "question": "AWS Organizations를 사용하는 회사는 AWS IAM Identity Center (AWS Single Sign-On)를 사용하여 AWS 계정에 대한 액세스를 관리합니다. 보안 엔지니어는 IAM Identity Center에서 사용자 정의 권한 집합을 만들고 있습니다. 회사는 여러 계정에서 권한 집합을 사용합니다. AWS 관리형 정책과 고객 관리형 정책이 권한 집합에 연결됩니다. 보안 엔지니어는 전체 관리 권한을 가지고 있으며 관리 계정에서 작동합니다. 보안 엔지니어가 여러 계정에 액세스할 수 있는 IAM Identity Center 사용자에게 권한 집합을 할당하려고 할 때 할당이 실패합니다. 이 실패를 해결하기 위해 보안 엔지니어는 무엇을 해야 합니까?",
    "options": {
      "A": "권한 집합이 할당된 모든 계정에서 고객 관리형 정책을 만듭니다. 각 계정에서 고객 관리형 정책에 동일한 이름과 동일한 권한을 제공합니다.",
      "B": "AWS 관리형 정책 또는 고객 관리형 정책 중 하나를 권한 집합에서 제거합니다. 제거된 정책을 포함하는 두 번째 권한 집합을 만듭니다. 권한 집합을 사용자에게 별도로 적용합니다.",
      "C": "AWS 관리형 정책 및 고객 관리형 정책의 논리를 평가합니다. 배포 전에 권한 집합의 정책 충돌을 해결합니다.",
      "D": "사용자에게 새 권한 집합을 추가하지 마십시오. 대신 사용자의 기존 권한 집합을 편집하여 AWS 관리형 정책과 고객 관리형 정책을 포함합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Permission Set — 여러 계정에 일관되게 적용되는 IAM 권한 템플릿\n▸ Customer Managed Policy — 사용자 정의 정책, 계정별로 존재\n▸ AWS Managed Policy — AWS에서 제공, 자동으로 모든 계정에서 사용 가능\n▸ Policy Scope — 정책이 존재하는 계정 범위\n\n【정답 포인트】\n▸ \n(A) 고객 관리형 정책은 정책이 정의된 계정에만 존재\n▸ 권한 집합이 할당되는 모든 계정에서 동일한 이름/권한의 정책 필요\n▸ 각 계정에서 정책 복제 → Permission Set 사용 가능\n\n【오답 체크】\n(B) 두 개의 권한 집합 분리 = 복잡한 관리, 대증요법\n(C) 정책 충돌 해결 = 근본 원인 아님 (정책 범위 문제)\n(D) 기존 권한 집합 편집 = 다른 사용자도 영향, 신규 사용자 할당 문제 해결 안 함\n\n【시험 포인트】\nCustomer Managed Policy는 계정 단위로 존재\nPermission Set은 여러 계정에 적용되므로\n각 대상 계정에서 동일한 이름의 정책 필요\nAWS Managed Policy는 자동으로 사용 가능",
    "en_q": "A company uses AWS Organizations to manage its AWS accounts. A security engineer is creating a custom permission set in IAM Identity Center. The company will use the permission set across multiple accounts. An AWS managed policy and a customer managed policy are attached to the permission set. The security engineer has full administrative permissions and is operating in the management account. When the security engineer attempts to assign the permission set to an IAM Identity Center user who has access to multiple accounts, the assignment fails. What should the security engineer do to resolve this failure?",
    "en_opts": {
      "A": "Create the customer managed policy in every account where the permission set is assigned. Give the customer managed policy the same name and same permissions in each account.",
      "B": "Remove either the AWS managed policy or the customer managed policy from the permission set. Create a second permission set that includes the removed policy. Apply the permission sets separately to the user.",
      "C": "Evaluate the logic of the AWS managed policy and the customer managed policy. Resolve any policy conflicts in the permission set before deployment.",
      "D": "Do not add the new permission set to the user. Instead, edit the user's existing permission set to include the AWS managed policy and the customer managed policy."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382913-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 58,
    "question": "IAM 사용자가 Amazon S3 버킷의 객체에 액세스하려고 할 때 액세스 거부 메시지를 받습니다. 사용자와 S3 버킷은 같은 AWS 계정에 있습니다. S3 버킷은 AWS KMS 키(SSE-KMS)로 서버 측 암호화를 사용하여 같은 AWS 계정의 고객 관리 키를 사용하는 모든 객체를 저장할 때 암호화하도록 구성됩니다. S3 버킷에는 버킷 정책이 정의되어 있지 않습니다. IAM 사용자는 고객 관리 키에 대한 kms:Decrypt 권한을 허용하는 IAM 정책을 통해 권한이 부여되었습니다. IAM 정책은 또한 S3 버킷 및 해당 객체에 대한 s3:List* 및 s3:Get* 권한을 허용합니다. IAM 사용자가 S3 버킷의 객체에 액세스할 수 없는 이유는 무엇입니까?",
    "options": {
      "A": "IAM 정책이 kms:DescribeKey 권한을 허용해야 합니다.",
      "B": "S3 버킷이 객체를 저장할 때 암호화하도록 AWS 관리형 키를 사용하도록 변경되었습니다.",
      "C": "IAM 사용자가 객체에 액세스할 수 있도록 하는 S3 버킷 정책을 추가해야 합니다.",
      "D": "KMS 키 정책이 편집되어 AWS 계정이 키에 대한 전체 액세스 권한을 가질 수 있는 기능을 제거했습니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ IAM Policy — 사용자/역할 권한 정의\n▸ KMS Key Policy — 키 자체에 대한 접근 제어 (반드시 확인 필요)\n▸ SSE-KMS — 객체 암호화 시 KMS 키 사용\n▸ Key Policy Statement — 계정에 대한 전체 권한(Principal: AWS Account)\n\n【정답 포인트】\n▸ \n(D) KMS 키 정책에서 AWS 계정의 전체 액세스 권한 제거\n▸ IAM 정책만 있으면 부족 → 키 정책도 허용해야 함\n▸ 키 정책에서 계정 권한 제거 = Decrypt 거부\n▸ 이중 검증 필요: IAM 정책 AND 키 정책\n\n【오답 체크】\n(A) DescribeKey도 필요할 수 있지만, 근본 원인은 키 정책\n(B) AWS 관리형 키로 변경되면 새 KMS 권한이 필요함 (설정만으로 수정 안 됨)\n(C) 버킷 정책은 S3 객체 액세스 제어, KMS 권한은 별개\n\n【시험 포인트】\nKMS + S3: IAM 정책 + 키 정책 모두 필요\n키 정책에서 계정 권한 제거 = 모든 사용자 거부\n키 정책의 Principal: AWS Account를 확인할 것",
    "en_q": "An IAM user receives an Access Denied message when the user attempts to access objects in an Amazon S3 bucket. The user and the S3 bucket are in the same AWS account. The S3 bucket is configured to use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt all of its objects at rest by using a customer managed key from the same AWS account. The S3 bucket has no bucket policy defined. The IAM user has been granted permissions through an IAM policy that allows the kms:Decrypt permission to the customer managed key. The IAM policy also allows the s3:List* and s3:Get* permissions for the S3 bucket and its objects. Which of the following is a possible reason that the IAM user cannot access the objects in the S3 bucket?",
    "en_opts": {
      "A": "The IAM policy needs to allow the kms:DescribeKey permission.",
      "B": "The S3 bucket has been changed to use the AWS managed key to encrypt objects at rest.",
      "C": "An S3 bucket policy needs to be added to allow the IAM user to access the objects.",
      "D": "The KMS key policy has been edited to remove the ability for the AWS account to have full access to the key."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382938-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 59,
    "question": "한 회사는 us-east-1 리전에서 워크로드를 실행합니다. 회사는 다른 AWS 리전에 리소스를 배포한 적이 없으며 멀티 리전 리소스가 없습니다. 회사는 워크로드 및 인프라를 us-west-1 리전에 복제해야 합니다. 보안 엔지니어는 AWS Secrets Manager를 사용하여 양쪽 리전에 비밀을 저장하는 솔루션을 구현해야 합니다. 솔루션은 AWS Key Management Service (AWS KMS)를 사용하여 비밀을 암호화해야 합니다. 솔루션은 지연시간을 최소화해야 하며 한 리전만 사용 가능할 때도 작동할 수 있어야 합니다. 보안 엔지니어는 Secrets Manager를 사용하여 us-east-1에서 비밀을 만듭니다. 보안 엔지니어는 다음으로 무엇을 해야 합니까?",
    "options": {
      "A": "us-east-1에서 AWS 관리형 KMS 키로 비밀을 암호화합니다. us-west-1에 비밀을 복제합니다. us-west-1에서 us-west-1의 새로운 AWS 관리형 KMS 키로 비밀을 암호화합니다.",
      "B": "us-east-1에서 AWS 관리형 KMS 키로 비밀을 암호화합니다. us-west-1의 리소스가 us-east-1의 Secrets Manager 끝점을 호출하도록 구성합니다.",
      "C": "us-east-1에서 고객 관리 KMS 키로 비밀을 암호화합니다. us-west-1의 리소스가 us-east-1의 Secrets Manager 끝점을 호출하도록 구성합니다.",
      "D": "us-east-1에서 고객 관리 KMS 키로 비밀을 암호화합니다. us-west-1에 비밀을 복제합니다. us-west-1에서 us-east-1의 고객 관리 KMS 키로 비밀을 암호화합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Secrets Manager Replication — 다중 리전 복제\n▸ AWS Managed KMS Key — 리전별 별도 키, 자동 관리\n▸ Customer Managed Key — 수동 복제/관리 필요, 크로스 리전 복제 복잡\n▸ Single Region Failure — 한 리전 장애 시에도 작동\n\n【정답 포인트】\n▸ \n(A) AWS 관리형 키 사용 → 각 리전에서 자동 회전/관리\n▸ 비밀 복제 → 두 리전 모두에 독립적 사본\n▸ 각 리전의 AWS 관리형 키로 암호화 → 리전 독립성\n▸ 한 리전 장애 → 다른 리전에서 독립적으로 작동\n\n【오답 체크】\n(B) us-east-1 엔드포인트 호출 → us-west-1 리전 장애 시 비밀 접근 불가\n(C) us-east-1 엔드포인트에만 의존 → 리전 이중화 미달성\n(D) 고객 관리 키 크로스 리전 복제 → 키 정책 동기화 복잡\n\n【시험 포인트】\nMulti-Region Secrets = AWS 관리형 키 + 비밀 복제\n각 리전 독립적 KMS 키 필요\nAWS 관리형 키가 가장 간편한 선택\n지연시간 최소화 = 리전별 로컬 비밀/키",
    "en_q": "A company runs workloads in the us-east-1 Region. The company has never deployed resources to other AWS Regions and does not have any multi-Region resources. The company needs to replicate its workloads and infrastructure to the us-west-1 Region. A security engineer must implement a solution that uses AWS Secrets Manager to store secrets in both Regions. The solution must use AWS Key Management Service (AWS KMS) to encrypt the secrets. The solution must minimize latency and must be able to work if only one Region is available. The security engineer uses Secrets Manager to create the secrets in us-east-1. What should the security engineer do next to meet the requirements?",
    "en_opts": {
      "A": "Encrypt the secrets in us-east-1 by using an AWS managed KMS key. Replicate the secrets to us-west-1. Encrypt the secrets in us-west-1 by using a new AWS managed KMS key in us-west-1.",
      "B": "Encrypt the secrets in us-east-1 by using an AWS managed KMS key. Configure resources in us-west-1 to call the Secrets Manager endpoint in us-east-1.",
      "C": "Encrypt the secrets in us-east-1 by using a customer managed KMS key. Configure resources in us-west-1 to call the Secrets Manager endpoint in us-east-1.",
      "D": "Encrypt the secrets in us-east-1 by using a customer managed KMS key. Replicate the secrets to us-west-1. Encrypt the secrets in us-west-1 by using the customer managed KMS key from us-east-1."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382917-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 60,
    "question": "한 회사가 AWS 계정에서 워크로드를 실행합니다. 보안 엔지니어가 Amazon GuardDuty에서 비정상적인 결과를 관찰합니다. 보안 엔지니어는 특정 IAM 역할을 조사하고 조사 보고서를 생성하고 싶어 합니다. 보고서에는 비정상적인 행동의 세부 사항과 손상의 어떤 지표가 포함되어야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Detective를 사용하여 IAM 역할에 대한 조사를 수행합니다.",
      "B": "AWS Audit Manager를 사용하여 평가를 만듭니다. IAM 역할을 지정합니다. 평가 보고서를 실행합니다.",
      "C": "Amazon Inspector를 사용하여 평가를 만듭니다. IAM 역할을 지정합니다. 평가 보고서를 실행합니다.",
      "D": "Amazon Inspector를 사용하여 IAM 역할에 대해 주문형 스캔을 실행합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Detective — GuardDuty 결과 심화 조사 및 법의학 분석\n▸ Indicators of Compromise (IoC) — 손상 지표 식별\n▸ Anomalous Behavior — 비정상적 활동 패턴 분석\n▸ AWS Audit Manager — 규정 준수 감시 (조사 아님)\n▸ Amazon Inspector — 취약점 평가 (법의학 아님)\n\n【정답 포인트】\n▸ \n(A) Amazon Detective 사용 → GuardDuty 결과 연계 분석\n▸ IAM 역할 활동 추적 → 비정상 행동 시각화\n▸ 법의학 그래프 분석 → IoC 식별\n▸ 상세 조사 보고서 생성\n\n【오답 체크】\n(B) Audit Manager = 규정 준수 평가 (보안 조사 아님)\n(C) Inspector = 취약점 스캔 (법의학 분석 아님)\n(D) Inspector 주문형 스캔 = 정적 취약점 스캔 (역할 조사 아님)\n\n【시험 포인트】\nGuardDuty 결과 → Detective 자동 연계\nDetective = 법의학 분석 + 비정상 행동 패턴 탐지\nAnomalies + IoC 리포트 생성 가능\nAudit Manager / Inspector는 다른 용도",
    "en_q": "A company runs workloads in an AWS account. A security engineer observes some unusual findings in Amazon GuardDuty. The security engineer wants to investigate a specific IAM role and generate an investigation report. The report must contain details about anomalous behavior and any indicators of compromise. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon Detective to perform an investigation on the IAM role.",
      "B": "Use AWS Audit Manager to create an assessment. Specify the IAM role Run an assessment report.",
      "C": "Use Amazon Inspector to create an assessment. Specify the IAM role. Run an assessment report.",
      "D": "Use Amazon Inspector to run an on-demand scan of the IAM role."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382919-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 61,
    "question": "회사에서 Amazon GuardDuty를 최근 설정했고 회사 내부 IP 주소에서 많은 수의 findings를 받고 있습니다. 보안 엔지니어가 이 IP 주소들이 신뢰할 수 있고 허용된 주소임을 확인했습니다. 보안 엔지니어가 GuardDuty를 설정하여 이 IP 주소들로부터 findings가 생성되지 않도록 해야 합니다. 어떤 조합의 단계를 따라야 합니까? (2개 선택)",
    "options": {
      "A": "신뢰할 수 있는 IP 주소가 포함된 평문 구성 파일을 작성합니다.",
      "B": "신뢰할 수 있는 IP 주소가 포함된 JSON 구성 파일을 작성합니다.",
      "C": "구성 파일을 직접 GuardDuty에 업로드합니다.",
      "D": "구성 파일을 Amazon S3에 업로드합니다. GuardDuty에 새로운 신뢰 IP 목록을 추가하고 이 파일을 가리키도록 설정합니다.",
      "E": "구성 파일 데이터를 수동으로 복사하여 GuardDuty의 신뢰 IP 목록에 붙여넣습니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ GuardDuty Trusted IP List — GuardDuty가 특정 IP에서의 활동을 무시하도록 설정하는 기능\n▸ S3 백업 — GuardDuty가 지원하는 신뢰 IP 목록의 저장 위치\n\n【정답 포인트】\n▸ 구성 파일 형식 → A(평문) 또는 B(JSON) 중 선택하지 않음, 모두 지원되는 형식이므로 관계없음\n▸ 업로드 방식 → D 선택: S3 업로드 + GuardDuty에서 S3 URI를 참조하는 것이 공식 지원 방식\n▸ 직접 업로드(C, E) → GuardDuty는 S3 경로로 신뢰 IP 목록을 참조하므로 직접 업로드 불가\n\n【오답 체크】\n(A) 평문 파일은 가능하지만, A만으로는 불완전함. D와 함께 선택되어야 함\n(B) JSON 형식도 가능하지만 문제에서는 형식보다 '업로드 방식'이 중요\n(C) 직접 업로드는 지원되지 않음. GuardDuty는 S3 경로 참조만 지원\n(E) 수동 붙여넣기는 확장성 없고 자동화되지 않음\n\n【시험 포인트】\nGuardDuty Trusted IP List 설정 패턴: 파일 생성 + S3 업로드 + S3 경로를 GuardDuty에서 참조. 많은 수의 IP를 관리할 때는 파일 형식(평문/JSON)과 무관하게 S3를 통한 자동화된 관리가 필수입니다.",
    "en_q": "A company recently set up Amazon GuardDuty and is receiving a high number of findings from IP addresses within the company. A security engineer has verified that these IP addresses are trusted and allowed. Which combination of steps should the security engineer take to configure GuardDuty so that it does not produce findings for these IP addresses? (Choose two.)",
    "en_opts": {
      "A": "Create a plaintext configuration file that contains the trusted IP addresses.",
      "B": "Create a JSON configuration file that contains the trusted IP addresses.",
      "C": "Upload the configuration file directly to GuardDuty.",
      "D": "Upload the configuration file to Amazon S3. Add a new trusted IP list to GuardDuty that points to the file.",
      "E": "Manually copy and paste the configuration file data into the trusted IP list in GuardDuty."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382945-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 62,
    "question": "개발팀이 회사의 SaaS(Software as a Service) 애플리케이션을 관리하는 오픈소스 도구 세트를 만들고 있습니다. 회사가 누구나 도구 세트의 코드를 보고 다운로드할 수 있도록 공개 저장소에 코드를 저장합니다. 회사는 코드에 회사의 AWS 환경 내 내부 리소스에 접근할 수 있는 IAM 액세스 키와 보안 키가 포함되어 있다는 것을 발견했습니다. 보안 엔지니어는 노출된 자격 증명의 무단 사용 여부를 파악하고, 노출된 자격 증명의 추가 사용을 방지하는 솔루션을 구현해야 합니다. 이 요구사항을 충족하는 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "AWS Identity and Access Management Access Analyzer를 사용하여 노출된 자격 증명이 어떤 리소스에 접근했는지, 누가 사용했는지 파악합니다.",
      "B": "사용자의 IAM 계정에서 노출된 IAM 액세스 키를 비활성화합니다.",
      "C": "Amazon GuardDuty에서 소스 코드의 액세스 키를 차단하는 규칙을 생성합니다.",
      "D": "노출된 자격 증명을 가진 사용자에 대해 새로운 IAM 액세스 키와 보안 키를 생성합니다.",
      "E": "IAM 자격 증명 보고서를 생성합니다. 보고서를 확인하여 액세스 키를 소유한 사용자가 마지막으로 로그인한 시간을 파악합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ IAM Access Analyzer — 리소스 접근 기록 확인, 하지만 자격 증명 남용 감지는 CloudTrail 기반\n▸ IAM 자격 증명 보고서 — 각 사용자의 액세스 키 활동, 마지막 사용 시간 기록\n▸ 키 비활성화 — 보안 키 사용 중단의 직접적인 방법\n\n【정답 포인트】\n▸ B 선택: 노출된 액세스 키를 즉시 비활성화하여 추가 무단 사용 방지 (요구사항 2 충족)\n▸ E 선택: IAM 자격 증명 보고서에서 마지막 사용 시간 확인 → 무단 사용 여부 파악 (요구사항 1 충족)\n▸ 해설: E는 \"이미 발생했는지\" 탐지, B는 \"앞으로 방지\"하는 역할 분담\n\n【오답 체크】\n(A) Access Analyzer는 리소스 접근 기록을 보지만, 자격 증명 노출로 인한 \"누가 언제 사용했는지\"는 IAM 자격 증명 보고서와 CloudTrail 확인이 더 정확\n(C) GuardDuty는 threat detection이지, 코드의 노출된 키를 \"차단\"하는 기능은 없음. 이미 공개 저장소에 있는 키는 차단 불가\n(D) 새 키 생성은 \"방지\" 조치가 아니라 대체 조치. 먼저 기존 키를 비활성화해야 함\n\n【시험 포인트】\nIAM 자격 증명 노출 시나리오: 1) 탐지(CloudTrail/자격 증명 보고서) → 2) 즉시 비활성화(키 revoke) → 3) 대체 키 생성. 문제에서 \"무단 사용 여부 파악\" + \"추가 사용 방지\" 두 요구사항이 있으므로, 탐지 도구\n(E) 와 차단 도구\n(B) 를 모두 선택해야 합니다.",
    "en_q": "A development team is creating an open source toolset to manage a company's software as a service (SaaS) application. The company stores the code in a public repository so that anyone can view and download the toolset's code. The company discovers that the code contains an IAM access key and secret key that provide access to internal resources in the company's AWS environment. A security engineer must implement a solution to identify whether unauthorized usage of the exposed credentials has occurred. The solution also must prevent any additional usage of the exposed credentials. Which combination of steps will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Use AWS Identity and Access Management Access Analyzer to determine which resources the exposed credentials accessed and who used them.",
      "B": "Deactivate the exposed IAM access key from the user's IAM account.",
      "C": "Create a rule in Amazon GuardDuty to block the access key in the source code from being used.",
      "D": "Create a new IAM access key and secret key for the user whose credentials were exposed.",
      "E": "Generate an IAM credential report. Check the report to determine when the user that owns the access key last logged in."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382906-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 63,
    "question": "회사가 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 애플리케이션은 송장을 생성하고 Amazon S3 버킷에 저장합니다. 인스턴스에 연결된 인스턴스 프로필에는 S3 버킷에 대한 적절한 액세스 권한이 있습니다. 회사는 AWS 자격 증명이 없는 여러 클라이언트와 각 송장을 공유해야 합니다. 각 클라이언트는 자신의 송장만 다운로드할 수 있어야 합니다. 클라이언트는 송장 생성 후 1시간 이내에 송장을 다운로드해야 합니다. 클라이언트는 AWS 리소스에 접근할 때 임시 자격 증명만 사용해야 합니다. 보안 엔지니어가 EC2 인스턴스에서 실행되는 스크립트를 만듭니다. 스크립트는 인스턴스 프로필을 사용하여 클라이언트를 위한 S3 presigned URL을 생성합니다. 각 presigned URL은 1시간 후 만료됩니다. 요구사항을 충족하기 위해 추가로 필요한 단계는 무엇입니까?",
    "options": {
      "A": "S3 버킷 정책을 업데이트하여 presigned URL을 사용하는 클라이언트가 S3:Get* 권한과 S3:List* 권한을 가지도록 합니다.",
      "B": "EC2 인스턴스 프로필의 IAM 역할 정책에 StringEquals 조건을 추가합니다. 각 송장의 ClientId 태그를 기반으로 접근을 제한하도록 정책 조건을 설정합니다. 생성된 각 송장에 해당 클라이언트의 ID로 태그를 지정합니다.",
      "C": "스크립트를 업데이트하여 AWS Security Token Service(AWS STS)를 사용하여 스크립트가 실행될 때마다 새로운 역할을 가정함으로써 새로운 자격 증명을 얻습니다. 이 자격 증명을 사용하여 presigned URL을 생성합니다.",
      "D": "S3 버킷에 대한 S3:GetObject 권한을 가진 IAM 사용자에 대한 액세스 키와 보안 키를 생성합니다. 이 키를 스크립트에 포함하고 이를 사용하여 presigned URL을 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Presigned URL — 임시 토큰이 포함된 URL, 일시적 접근 권한을 부여\n▸ AWS STS (Security Token Service) — 임시 보안 자격 증명 발급 서비스\n▸ Instance Profile — EC2의 IAM 역할, 장기 자격 증명 보유\n\n【정답 포인트】\n▸ 요구사항: \"클라이언트는 임시 자격 증명만 사용\" → presigned URL 생성에 사용되는 자격 증명도 임시여야 함\n▸ C 선택: STS를 사용하여 역할을 가정 → 임시 자격 증명 획득 → presigned URL 생성\n▸ 로직: Instance Profile(장기) → STS AssumeRole(임시) → Presigned URL 생성 → 클라이언트 전달\n▸ 목적: Presigned URL 자체는 임시이지만, \"생성에 사용된 자격 증명\"도 임시 자격 증명으로부터 생성되어야 함\n\n【오답 체크】\n(A) S3 버킷 정책은 presigned URL 생성 방식과 무관. Presigned URL은 생성 시점의 자격 증명에 기반하며, 리소스 태그 기반 필터링 필요\n(B) 클라이언트별 태그 기반 제한은 좋은 실무 방법이지만, \"임시 자격 증명\" 요구사항을 직접 충족하지 않음\n(D) IAM 사용자의 장기 액세스 키를 스크립트에 포함 → 보안상 가장 위험한 방식. \"임시 자격 증명\" 요구사항 위반\n\n【시험 포인트】\nPresigned URL 보안 모범 사례: 생성 시 사용되는 자격 증명은 가능한 한 단기 권한 집합으로 제한. STS로 \"적절한 권한\"을 가진 임시 역할을 가정한 후 presigned URL을 생성하면, 임시 자격 증명 요구사항과 최소 권한 원칙을 모두 만족합니다.",
    "en_q": "A company runs an application on an Amazon EC2 instance. The application generates invoices and stores them in an Amazon S3 bucket. The instance profile that is attached to the instance has appropriate access to the S3 bucket. The company needs to share each invoice with multiple clients that do not have AWS credentials. Each client must be able to download only the client's own invoices. Clients must download their invoices within 1 hour of invoice creation. Clients must use only temporary credentials to access the company's AWS resources. A security engineer creates a script that runs on the EC2 instance. The script uses the instance profile to generate an S3 presigned URL for the clients. Each presigned URL expires after 1 hour. Which additional step will meet these requirements?",
    "en_opts": {
      "A": "Update the S3 bucket policy to ensure that clients that use presigned URLs have the S3:Get* permission and the S3:List* permission to access S3 objects in the bucket.",
      "B": "Add a StringEquals condition to the IAM role policy for the EC2 instance profile. Configure the policy condition to restrict access based on the s3:ResourceTag/ClientId tag of each invoice. Tag each generated invoice with the ID of its corresponding client.",
      "C": "Update the script to use AWS Security Token Service (AWS STS) to obtain new credentials each time the script runs by assuming a new role that has S3 GetObject permissions. Use the credentials to generate the presigned URLs.",
      "D": "Generate an access key and a secret key for an IAM user that has S3:GetObject permissions on the S3 bucket. Embed the keys into the script. Use the keys to generate the presigned URLs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404534-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 64,
    "question": "회사가 AWS 계정에서 Amazon Macie, AWS Firewall Manager, Amazon Inspector, AWS Shield Advanced를 사용하고 있습니다. 회사는 계정에 대한 DDoS 공격이 발생할 경우 알림을 받고 싶어합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "Macie를 사용하여 활성 DDoS 이벤트를 탐지합니다. Macie findings에 응답하는 Amazon CloudWatch 알람을 생성합니다.",
      "B": "Amazon Inspector를 사용하여 리소스를 검토하고 DDoS 공격에 취약한 리소스에 대해 Amazon CloudWatch 알람을 트리거합니다.",
      "C": "Firewall Manager 메트릭에서 활성 DDoS 이벤트를 모니터링하는 Amazon CloudWatch 알람을 생성합니다.",
      "D": "Shield Advanced 메트릭에서 활성 DDoS 이벤트를 모니터링하는 Amazon CloudWatch 알람을 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Shield Advanced — DDoS 공격 탐지 및 완화 전담 서비스\n▸ Amazon Macie — 민감한 데이터 탐지(DDoS 아님)\n▸ AWS WAF/Firewall Manager — 애플리케이션 계층 규칙(DDoS 트래픽 탐지 아님)\n▸ Amazon Inspector — 취약점 스캔(DDoS 탐지 아님)\n\n【정답 포인트】\n▸ DDoS \"활성 이벤트\" 탐지는 Shield Advanced의 전담 기능\n▸ Shield Advanced는 DDoS 공격 시 CloudWatch 메트릭 발행 → CloudWatch 알람으로 실시간 모니터링 가능\n▸ DDoS \"발생 감지\" → Shield Advanced Metrics → CloudWatch Alarm → SNS/Email 알림\n\n【오답 체크】\n(A) Macie는 S3의 민감한 데이터(PII, 신용카드 번호 등) 탐지 전문. 네트워크 트래픽 DDoS 탐지 불가\n(B) Inspector는 EC2, ECR 취약점 스캔. DDoS 공격 탐지와 무관\n(C) Firewall Manager는 여러 계정의 WAF/Shield 중앙 관리. DDoS \"활성 이벤트\" 메트릭 제공 안 함\n(D) ✓ Shield Advanced만이 DDoS 공격 실시간 탐지 및 CloudWatch 메트릭 발행\n\n【시험 포인트】\nAWS 보안 서비스 역할 구분: Macie(데이터), Inspector(취약점), Firewall Manager(중앙 관리), Shield Advanced(DDoS). \"DDoS 공격 발생 알림\"은 Shield Advanced 메트릭만 사용 가능합니다.",
    "en_q": "A company is using Amazon Macie, AWS Firewall Manager, Amazon Inspector, and AWS Shield Advanced in its AWS account. The company wants to receive alerts if a DDoS attack occurs against the account. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Use Macie to detect an active DDoS event. Create Amazon CloudWatch alarms that respond to Macie findings.",
      "B": "Use Amazon Inspector to review resources and to invoke Amazon CloudWatch alarms for any resources that are vulnerable to DDoS attacks.",
      "C": "Create an Amazon CloudWatch alarm that monitors Firewall Manager metrics for an active DDoS event.",
      "D": "Create an Amazon CloudWatch alarm that monitors Shield Advanced metrics for an active DDoS event."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404535-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 65,
    "question": "회사가 온프레미스 데이터 센터에서 중요한 워크로드를 실행합니다. 회사는 RTO(Recovery Time Objective)가 1시간 미만인 AWS 기반의 재해 복구(DR) 솔루션을 구현하고 싶어합니다. 회사는 물리 서버와 가상 서버를 지속적으로 복제해야 합니다. 회사는 데이터 스토리지 및 대역폭 사용 비용을 최적화해야 합니다. DR 솔루션은 자동화되어야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "AWS Backup을 사용하여 온프레미스 서버를 AWS에 직접 복제합니다. 크로스 리전 백업 복사 및 데이터 보관을 활성화합니다. 정의된 RTO와 일치하도록 복구 지점을 설정합니다. AWS Step Functions를 사용하여 복구 단계를 자동화합니다.",
      "B": "AWS Storage Gateway Volume Gateway를 사용하여 Amazon Elastic Block Store(Amazon EBS) 스냅샷으로 복구를 설정합니다. AWS Backup으로 스냅샷을 관리하도록 설정합니다. 자동화된 복구 절차를 생성합니다.",
      "C": "AWS Elastic Disaster Recovery를 활성화합니다. 각 온프레미스 서버를 지속적으로 복제하도록 복제 에이전트를 설정합니다. 기본 스테이징 영역 서브넷 설정을 활성화합니다.",
      "D": "온프레미스 데이터 센터와 AWS 간에 AWS Direct Connect 연결을 생성합니다. 장애를 모니터링하고 장애 발생 시 AMI에서 사전 구성된 Amazon EC2 인스턴스를 시작하는 AWS Lambda 함수를 호출하도록 Amazon EventBridge를 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Elastic Disaster Recovery (DRS) — 온프레미스에서 AWS로의 지속적 서버 복제 전담 서비스\n▸ RTO 1시간 미만 → 지속적 블록 레벨 복제 필수\n▸ RPO (Recovery Point Objective) → DRS의 복제 에이전트는 거의 실시간 동기화\n\n【정답 포인트】\n▸ \"물리 서버와 가상 서버 지속적 복제\" → AWS DRS의 핵심 기능\n▸ \"RTO 1시간 미만\" → DRS의 Continuous Replication + Automated Recovery으로 가능\n▸ \"비용 최적화\" → DRS는 증분 블록 복제로 대역폭 효율적\n▸ \"자동화\" → DRS의 기본 스테이징 영역(Default Staging Area)은 자동 설정\n▸ C 로직: 온프레미스 에이전트 설치 → 지속적 복제 → 장애 시 자동 failover\n\n【오답 체크】\n(A) AWS Backup은 \"앱-인식 백업\"이지, \"지속적 블록 레벨 복제\"가 아님. 복구 지점 간격이 크면 RPO 충족 어려움\n(B) Storage Gateway Volume Gateway는 블록 스토리지 게이트웨이이지, \"DR 레플리케이션\" 전담 아님. EBS 스냅샷은 증분이지만 지속적 동기 복제 아님\n(D) Direct Connect + Lambda + EventBridge는 수동 구성 필요. \"자동화\"와 \"RTO 1시간\" 달성 어려움\n(C) ✓ DRS만이 온프레미스 물리/가상 서버의 지속적 복제, RTO < 1시간, 자동 failover 모두 지원\n\n【시험 포인트】\nDR 솔루션 선택 기준: \"지속적 복제\" + \"RTO < 1시간\" + \"물리/가상 서버 혼합\" → AWS Elastic Disaster Recovery (DRS). Backup/Storage Gateway/Direct Connect는 부분적 요구사항만 충족합니다.",
    "en_q": "A company runs critical workloads in an on-premises data center. The company wants to implement an AWS based disaster recovery (DR) solution that will achieve an RTO of less than 1 hour. The company needs to continuously replicate physical and virtual servers. The company must optimize costs for data storage and bandwidth usage. The DR solution must be automated. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS Backup to directly replicate the on-premises servers to AWS. Enable cross-Region backup copying and data vaulting. Configure recovery points to match the defined RTO. Use AWS Step Functions to automate recovery steps.",
      "B": "Configure an AWS Storage Gateway Volume Gateway to use Amazon Elastic Block Store (Amazon EBS) snapshots for recovery. Configure AWS Backup to manage the snapshots. Create automated recovery procedures.",
      "C": "Enable AWS Elastic Disaster Recovery. Configure replication agents to continuously replicate each on-premises server. Enable the default staging area subnet configuration.",
      "D": "Create an AWS Direct Connect connection between the on-premises data center and AWS. Configure Amazon EventBridge to monitor for failures and to invoke AWS Lambda functions that launch preconfigured Amazon EC2 instances from AMIs in the event of an incident."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404536-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 66,
    "question": "프랑스의 한 회사가 Amazon Cognito와 Cognito Hosted UI를 ID 브로커로 사용하여 로그인 및 가입 프로세스를 처리합니다. 회사는 애플리케이션의 모든 사용자가 프랑스에서 올 것으로 예상하고 있습니다. 애플리케이션을 시작했을 때 회사의 보안팀이 애플리케이션에 대한 부정 행위 가입을 관찰합니다. 대부분의 부정 행위 등록은 프랑스 외부의 사용자로부터 발생합니다. 보안팀은 가입 시 맞춤형 검증을 수행할 수 있는 솔루션이 필요합니다. 검증 결과에 따라 등록 요청을 수락하거나 거부해야 합니다. 어떤 조합의 단계가 요구사항을 충족합니까? (2개 선택)",
    "options": {
      "A": "가입 전(pre sign-up) AWS Lambda 트리거를 생성합니다. Amazon Cognito 사용자 풀과 이 함수를 연결합니다.",
      "B": "지리 매칭 규칙 문(geographic match rule statement)을 사용하여 AWS WAF 웹 ACL을 설정합니다. 웹 ACL을 Amazon Cognito 사용자 풀과 연결합니다.",
      "C": "애플리케이션의 Amazon Cognito 사용자 풀에 대한 앱 클라이언트를 설정합니다. 앱 클라이언트 ID를 사용하여 Hosted UI의 요청을 검증합니다.",
      "D": "애플리케이션의 Amazon Cognito 사용자 풀을 업데이트하여 지리 제한 설정을 설정합니다.",
      "E": "Amazon Cognito에서 소셜 ID 공급자(IdP)를 설정하여 Hosted UI의 요청을 검증합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ Cognito Pre Sign-up Lambda Trigger — 사용자 가입 직전 커스텀 검증 로직 실행\n▸ AWS WAF Geographic Matching — IP 지역 정보 기반 요청 필터링\n▸ Cognito Hosted UI — 관리형 인증 UI, WAF 연결 가능\n\n【정답 포인트】\n▸ \"커스텀 검증\" + \"수락/거부\" → Lambda Pre Sign-up Trigger\n(A)\n▸ \"지리적 위치 기반 필터링\" → AWS WAF Geographic Match Rule\n(B)\n▸ 두 가지 보호층: 1) WAF에서 지역 외 요청 조기 차단 2) Lambda에서 추가 비즈니스 로직 검증\n▸ Lambda는 요청의 userAttributes, validationData를 받아 AutoConfirmUser 플래그로 수락/거부 결정\n▸ WAF는 Source IP 기반 지역 판별 → Block 또는 Allow\n\n【오답 체크】\n(C) 앱 클라이언트 ID는 인증 클라이언트 식별용. \"지역 기반 검증\" 기능 없음\n(D) Cognito 자체에는 \"지리 제한 설정\"이 없음 (4.x 시점). WAF나 Lambda로 구현 필요\n(E) 소셜 IdP (Google, Facebook 등)는 \"위치 검증\"과 무관. 가입자 본인 인증만 담당\n\n【시험 포인트】\nCognito 보안 강화 패턴: Lambda Trigger (비즈니스 로직) + WAF (네트워크 레벨). \"지역 외 부정 가입 차단\"은 WAF의 지리 매칭 규칙으로 조기 차단하고, Lambda Pre Sign-up으로 추가 커스텀 검증을 수행하는 2단계 방어입니다.",
    "en_q": "A company in France uses Amazon Cognito with the Cognito Hosted UI as an identity broker for sign-in and sign-up processes. The company is marketing an application and expects that all the application's users will come from France. When the company launches the application, the company's security team observes fraudulent sign-ups for the application. Most of the fraudulent registrations are from users outside of France. The security team needs a solution to perform custom validation at sign-up. Based on the results of the validation, the solution must accept or deny the registration request. Which combination of steps will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Create a pre sign-up AWS Lambda trigger. Associate the Amazon Cognito function with the Amazon Cognito user pool.",
      "B": "Use a geographic match rule statement to configure an AWS WAF web ACL. Associate the web ACL with the Amazon Cognito user pool.",
      "C": "Configure an app client for the application's Amazon Cognito user pool. Use the app client ID to validate the requests in the hosted UI.",
      "D": "Update the application's Amazon Cognito user pool to configure a geographic restriction setting.",
      "E": "Use Amazon Cognito to configure a social identity provider (IdP) to validate the requests on the hosted UI."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404537-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 67,
    "question": "회사가 AWS Organizations의 조직을 사용하여 여러 AWS 계정을 관리합니다. 회사는 중앙에서 사용자에게 Amazon Q Developer에 대한 접근 권한을 부여하고 싶어합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "AWS IAM Identity Center를 활성화하고 Amazon Q Developer를 AWS 관리형 애플리케이션으로 설정합니다.",
      "B": "Amazon Cognito를 활성화하고 Amazon Q Developer를 위한 새로운 ID 풀을 생성합니다.",
      "C": "Amazon Cognito를 활성화하고 Amazon Q Developer를 AWS 관리형 애플리케이션으로 설정합니다.",
      "D": "AWS IAM Identity Center를 활성화하고 Amazon Q Developer를 위한 새로운 ID 풀을 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS IAM Identity Center — 조직 전체 중앙 SSO 관리 서비스\n▸ AWS Managed Application — Identity Center와 통합된 SaaS 애플리케이션\n▸ Amazon Cognito — 애플리케이션 수준 인증(조직 전체 중앙 관리용 아님)\n▸ Identity Pool — Cognito의 임시 AWS 자격 증명 발급 (AWS 리소스 접근용)\n\n【정답 포인트】\n▸ \"조직 전체\" + \"중앙 관리\" → IAM Identity Center (AWS Organizations과 통합)\n▸ \"Amazon Q Developer\" → AWS 관리형 애플리케이션으로 등록 가능\n▸ IAM Identity Center에 Q Developer를 추가 → 모든 멤버 계정 사용자에게 SSO로 접근 권한 부여\n▸ 로직: Organizations 조직 → Identity Center 활성화 → Q Developer (AWS Managed App) 추가 → 사용자/그룹에 권한 할당\n\n【오답 체크】\n(B) Cognito + \"새로운 ID 풀\" → 애플리케이션별 임시 AWS 자격 증명 발급용. \"조직 전체 중앙 SSO\" 구조 아님\n(C) Cognito + AWS Managed Application → 조직 수준이 아닌 개별 애플리케이션 수준 인증. 중앙 관리 불가\n(D) IAM Identity Center + \"ID 풀\" → Identity Center는 권한 집합으로 관리. ID 풀은 Cognito 개념\n(A) ✓ IAM Identity Center + AWS Managed Application = 조직 전체 중앙 SSO 관리\n\n【시험 포인트】\nAWS Organizations 통합 SSO: IAM Identity Center (formerly AWS SSO) 사용. \"조직 전체 중앙 관리\" 요구사항은 IAM Identity Center의 설계 목적입니다. Amazon Q Developer는 AWS 관리형 애플리케이션으로서 Identity Center와 즉시 통합됩니다.",
    "en_q": "A company uses an organization in AWS Organizations to manage multiple AWS accounts. The company wants to centrally give users the ability to access Amazon Q Developer. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Enable AWS IAM Identity Center and set up Amazon Q Developer as an AWS managed application.",
      "B": "Enable Amazon Cognito and create a new identity pool for Amazon Q Developer.",
      "C": "Enable Amazon Cognito and set up Amazon Q Developer as an AWS managed application",
      "D": "Enable AWS IAM Identity Center and create a new identity pool for Amazon Q Developer."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404538-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 68,
    "question": "전자상거래 웹사이트가 DDoS 공격 이후 1시간 동안 다운되었습니다. 사용자들은 공격 기간 동안 웹사이트에 접속할 수 없었습니다. 전자상거래 회사의 보안팀은 향후 유사한 공격에 대해 걱정하고 있으며 그에 대비하고 싶어합니다. 회사는 향후 유사한 공격에 대한 대응 시간을 최소화해야 합니다. 이를 달성하는 데 도움이 될 단계는 무엇입니까? (2개 선택)",
    "options": {
      "A": "Amazon GuardDuty를 활성화하여 악성 활동을 자동으로 모니터링하고 무단 접근을 차단합니다.",
      "B": "AWS Shield Advanced를 구독하고 공격 발생 시 AWS Support에 연락합니다.",
      "C": "VPC Flow Logs를 사용하여 네트워크 트래픽을 모니터링하고 AWS Lambda 함수를 사용하여 공격자의 IP를 보안 그룹으로 자동 차단합니다.",
      "D": "AWS CloudTrail 이벤트를 실시간으로 모니터링하는 Amazon EventBridge 규칙을 설정하고, AWS Config 규칙로 설정을 감사하며, AWS Systems Manager로 복구합니다.",
      "E": "AWS WAF를 사용하여 이러한 공격에 대응하는 규칙을 생성합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ AWS Shield Advanced — DDoS 공격 완화, AWS DDoS Response Team(DRT) 지원\n▸ AWS WAF — 애플리케이션 계층(L7) DDoS 규칙 기반 차단\n▸ VPC Flow Logs — 네트워크 트래픽 로그 수집 (실시간 차단은 아님)\n▸ GuardDuty — 위협 탐지 (DDoS 공격 특화 아님)\n\n【정답 포인트】\n▸ B 선택: Shield Advanced 구독 → AWS DRT 지원 → \"대응 시간 최소화\"\n  - DRT는 공격 분석, 완화 규칙 추천, 실시간 지원 제공\n  - Shield Advanced의 자동 완화 + 전문가 지원으로 빠른 대응\n▸ E 선택: AWS WAF 규칙 생성 → L7 DDoS 트래픽 필터링\n  - Rate-based 규칙, IP reputation, 지역 제한 등으로 자동 차단\n▸ 조합: Shield Advanced(L3-L4) + WAF(L7) = 다층 DDoS 방어\n\n【오답 체크】\n(A) GuardDuty는 악성 활동(malware, intrusion 탐지). DDoS \"공격 감지 및 자동 차단\" 기능 없음\n(C) VPC Flow Logs는 분석용(사후 조사). Lambda로 \"자동 차단\"은 지연 발생. \"최소화 다운타임\" 요구사항 충족 어려움\n(D) CloudTrail/Config/Systems Manager는 설정 감사/복구. \"네트워크 트래픽\" DDoS 차단과 무관\n(B) ✓ Shield Advanced + DRT = 가장 빠른 전문가 지원\n(E) ✓ WAF 규칙 = L7 DDoS 자동 필터링\n\n【시험 포인트】\nDDoS 공격 대응 \"다운타임 최소화\": 1) Shield Advanced 가입 (DRT 지원 포함) → 전문가 조언 + 자동 완화 2) WAF 규칙 사전 구성 → 공격 패턴 자동 차단. \"자동화된 빠른 대응\"이 핵심입니다.",
    "en_q": "An ecommerce website was down for 1 hour following a DDoS attack. Users were unable to connect to the website during the attack period. The ecommerce company's security team is worried about future potential attacks and wants to prepare for such events. The company needs to minimize downtime in its response to similar attacks in the future. Which steps would help achieve this? (Choose two.)",
    "en_opts": {
      "A": "Enable Amazon GuardDuty to automatically monitor for malicious activity and block unauthorized access.",
      "B": "Subscribe to AWS Shield Advanced and reach out to AWS Support in the event of an attack.",
      "C": "Use VPC Flow Logs to monitor network traffic and an AWS Lambda function to automatically block an attacker's IP using security groups.",
      "D": "Set up an Amazon EventBridge rule to monitor the AWS CloudTrail events in real time, use AWS Config rules to audit the configuration, and use AWS Systems Manager for remediation.",
      "E": "Use AWS WAF to create rules to respond to such attacks."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404539-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 69,
    "question": "회사가 Account A와 Account B 두 개의 AWS 계정을 보유하고 있습니다. 각 계정에는 VPC가 있습니다. Account A의 VPC에서 실행되는 애플리케이션이 Account B의 Amazon S3 버킷에 쓰기를 수행해야 합니다. Account A의 애플리케이션에는 이미 Account B의 S3 버킷에 쓸 수 있는 권한이 있습니다. 애플리케이션과 S3 버킷은 같은 AWS 리전에 있습니다. 회사는 공개 인터넷으로 네트워크 트래픽을 보낼 수 없습니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "두 계정에서 Transit Gateway와 각 가용성 영역의 서브넷에 대한 VPC 연결(VPC attachments)을 생성합니다. VPC 라우팅 테이블을 업데이트합니다.",
      "B": "Account A에 소프트웨어 VPN 어플라이언스를 배포합니다. 소프트웨어 VPN 어플라이언스와 Account B의 가상 프라이빗 게이트웨이 간에 VPN 연결을 생성합니다.",
      "C": "Account A의 VPC와 Account B의 VPC 간 VPC 피어링 연결을 생성합니다. VPC 라우팅 테이블, 네트워크 ACL 및 보안 그룹을 업데이트하여 피어 IP 범위 간 네트워크 트래픽을 허용합니다.",
      "D": "Account A에서 Amazon S3에 대한 Gateway VPC Endpoint를 생성합니다. Account A의 VPC 라우팅 테이블을 업데이트합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Gateway VPC Endpoint for S3 — S3 접근을 위한 프라이빗 경로, 공개 인터넷 불필요\n▸ VPC Peering — VPC 간 직접 연결 (다른 계정도 가능)\n▸ Transit Gateway — 중앙 집중식 VPC 연결 허브\n▸ VPN Connection — 암호화 터널 (오버헤드 증가)\n\n【정답 포인트】\n▸ 요구사항: \"공개 인터넷 사용 불가\" + \"Account A → Account B S3 쓰기\"\n▸ \"이미 권한 있음\" → IAM 권한은 OK, \"네트워크 경로\"만 필요\n▸ Gateway VPC Endpoint는:\n  - Account A 내 VPC에만 생성\n  - S3로의 트래픽을 AWS 내부 경로로 라우팅 (공개 인터넷 불필요)\n  - 크로스 계정 S3 접근도 지원 (IAM 정책으로 제어)\n  - 추가 비용 없음\n  - 간단한 라우팅 테이블 업데이트만 필요\n\n【오답 체크】\n(A) Transit Gateway는 다중 VPC 연결에 유용하지만, \"Account A → S3\" 단순 경로는 과도\n(B) VPN 어플라이언스는 암호화 오버헤드 + 관리 복잡. Gateway Endpoint가 더 효율적\n(C) VPC Peering은 Account A ↔ Account B VPC 연결만 가능. 이미 권한 있으면 S3 접근 가능하지만, \"더 효율적인\" Gateway Endpoint가 있음\n(D) ✓ Gateway Endpoint = 최단 경로, 비용 효율적, 공개 인터넷 우회\n\n【시험 포인트】\nVPC Endpoint 선택: \"특정 AWS 서비스로의 프라이빗 접근\" → Gateway Endpoint (S3, DynamoDB). \"프라이빗 서비스 엔드포인트\" → Interface Endpoint. Account 간 S3 접근은 \"권한\" (IAM) + \"경로\" (Gateway Endpoint)로 충분합니다.",
    "en_q": "A company has two AWS accounts: Account A and Account B. Each account has a VPC. An application that runs in the VPC in Account A needs to write to an Amazon S3 bucket in Account B. The application in Account A already has permission to write to the S3 bucket in Account B. The application and the S3 bucket are in the same AWS Region. The company cannot send network traffic over the public internet. Which solution will meet these requirements?",
    "en_opts": {
      "A": "In both accounts, create a transit gateway and VPC attachments in a subnet in each Availability Zone. Update the VPC route tables.",
      "B": "Deploy a software VPN appliance in Account A. Create a VPN connection between the software VPN appliance and a virtual private gateway in Account B.",
      "C": "Create a VPC peering connection between the VPC in Account A and the VPC in Account B. Update the VPC route tables, network ACLs, and security groups to allow network traffic between the peered IP ranges.",
      "D": "In Account A, create a gateway VPC endpoint for Amazon S3. Update the VPC route table in Account A."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404540-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 70,
    "question": "보안 엔지니어가 여러 AWS 리전에서 AWS CloudTrail이 꺼져 있는 경우 다시 켜도록 하는 솔루션을 구축해야 합니다. 이 솔루션을 구현하는 가장 효율적인 방법은 무엇입니까?",
    "options": {
      "A": "AWS Config를 관리형 규칙과 함께 사용하여 AWS-EnableCloudTrail 복구를 시작합니다.",
      "B": "cloudtrail.amazonaws.com 이벤트 소스와 StartLogging 이벤트 이름을 포함하는 Amazon EventBridge 이벤트를 생성하고 AWS Lambda 함수를 호출하여 StartLogging API를 호출합니다.",
      "C": "cloudtrail.amazonaws.com 이벤트 소스와 StopLogging 이벤트 이름을 포함하는 Amazon CloudWatch 알람을 생성하고 AWS Lambda 함수를 호출하여 StartLogging API를 호출합니다.",
      "D": "AWS Trusted Advisor를 모니터링하여 CloudTrail 로깅이 활성화되어 있는지 확인합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Config Managed Rule — 리소스 규정 준수 자동 확인\n▸ AWS-EnableCloudTrail — CloudTrail 상태 확인 + 자동 복구 규칙\n▸ EventBridge → Lambda — 이벤트 기반 트리거 (이벤트 순서 의존)\n▸ Automated Remediation — Config의 자동 복구 기능\n\n【정답 포인트】\n▸ \"여러 리전에서\" + \"자동 복구\" → Config Managed Rule + Auto Remediation\n▸ AWS-EnableCloudTrail (Managed Rule) 의 기능:\n  - 모든 리전에서 CloudTrail 활성화 상태 주기적 확인\n  - CloudTrail이 비활성화되면 자동으로 StartLogging 호출\n  - Compliance 대시보드에서 추적\n▸ \"가장 효율적\" → Config의 관리형 규칙은 사전 검증, 유지보수 불필요\n\n【오답 체크】\n(B) EventBridge + Lambda는 이벤트 기반 반응형 접근\n  - CloudTrail \"중지\" 이벤트를 감지해야 하는데, 이는 CloudTrail 자체가 비활성화되면 이벤트 생성 안 됨 (catch-22)\n  - EventBridge는 실시간이지만 정기적 확인 안 함\n(C) CloudWatch 알람은 메트릭 기반. CloudTrail 상태(활성/비활성)는 메트릭 아님\n(D) Trusted Advisor는 \"주 1회\" 수준의 검사. \"자동 복구\" 기능 없음\n(A) ✓ Config Managed Rule = 정기적 확인 + 자동 복구 + 다중 리전 지원\n\n【시험 포인트】\nCloudTrail 자동 보호: AWS Config의 \"AWS-EnableCloudTrail\" Managed Rule이 표준. \"자동\" + \"다중 리전\" + \"효율적\"이라는 조건에서 Config의 Managed Rule은 사전 구성되어 있으므로 즉시 배포 가능합니다.",
    "en_q": "A security engineer needs to build a solution to turn AWS CloudTrail back on in multiple AWS Regions in case it is ever turned off. What is the MOST efficient way to implement this solution?",
    "en_opts": {
      "A": "Use AWS Config with a managed rule to initiate the AWS-EnableCloudTrail remediation.",
      "B": "Create an Amazon EventBridge event with a cloudtrail.amazonaws.com event source and a StartLogging event name to invoke an AWS Lambda function to call the StartLogging API.",
      "C": "Create an Amazon CloudWatch alarm with a cloudtrail.amazonaws.com event source and a StopLogging event name to invoke an AWS Lambda function to call the StartLogging API.",
      "D": "Monitor AWS Trusted Advisor to ensure CloudTrail logging is enabled."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404541-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 71,
    "question": "회사가 온프레미스 레거시 시스템과 AWS의 리소스를 모두 유지합니다. AWS 리소스에는 Amazon DynamoDB 테이블과 Amazon S3 버킷이 포함됩니다. 온프레미스 레거시 시스템은 정기적으로 DynamoDB와 Amazon S3에 연결해야 합니다. 회사는 현재 공개 서브넷의 VPC에 bastion host를 사용합니다. 회사는 온프레미스에 저장된 SSH 개인 키를 사용하여 bastion host에 연결합니다. Bastion host에 할당된 인스턴스 프로필에는 Amazon S3 및 DynamoDB에 대한 전체 접근 권한이 있습니다. 보안팀이 모든 bastion host를 제거하도록 요구하는 새로운 내부 정책을 발령했습니다. 정책은 모든 시스템이 인증서 기반 인증을 사용하도록 요구합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "AWS Direct Connect 연결을 설정하고 필요한 서비스에 대한 VPC 엔드포인트가 있는 VPC로의 VPN 연결을 생성합니다.",
      "B": "온프레미스 시스템을 AWS IAM Roles Anywhere를 사용하도록 설정합니다.",
      "C": "AWS Private Certificate Authority를 사용하여 온프레미스 시스템에 SSL 인증서를 발급합니다.",
      "D": "IAM 사용자가 IAM 역할을 임시로 가정하고 임시로 가정된 역할 자격 증명을 사용하여 필요한 리소스에 접근할 수 있도록 IAM 사용자를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ IAM Roles Anywhere — 온프레미스 시스템에서 X.509 인증서로 임시 AWS 자격 증명 획득\n▸ Certificate-based Authentication — 공개 키 인증서(X.509) 사용\n▸ AWS Private CA — 조직 내 인증서 발급 (IAM Roles Anywhere와 함께 사용)\n▸ Bastion Host — SSH 키 기반 점프 서버 (제거 대상)\n\n【정답 포인트】\n▸ \"Bastion host 제거\" + \"인증서 기반 인증\" + \"온프레미스 → AWS 리소스\" → IAM Roles Anywhere\n▸ IAM Roles Anywhere 아키텍처:\n  1. Private CA에서 온프레미스 시스템을 위한 X.509 인증서 발급\n  2. 온프레미스 시스템이 Credential Helper Tool로 인증서 제시\n  3. IAM Roles Anywhere이 인증서 검증 후 임시 자격 증명 발급 (STS AssumeRole)\n  4. 임시 자격 증명으로 S3, DynamoDB 접근\n▸ \"인증서 기반\" 요구사항 ✓, \"Bastion 제거\" ✓, \"임시 자격 증명\" ✓\n\n【오답 체크】\n(A) Direct Connect + VPC Endpoint는 \"네트워크 경로\" 개선이지, \"인증 방식\"을 바꾸지 않음. Bastion 대체 안 됨\n(B) ✓ IAM Roles Anywhere = 인증서 기반 인증 + 임시 자격 증명 + Bastion 불필요\n(C) Private CA만으로는 AWS 리소스 접근 불가. IAM Roles Anywhere와 함께 사용되어야 함 (부분적)\n(D) IAM 사용자의 장기 액세스 키 기반. \"인증서 기반\"이 아니고, Bastion과 같이 온프레미스에서 키 관리 필요\n\n【시험 포인트】\nBastionless 온프레미스 → AWS: IAM Roles Anywhere + Private CA 조합. 온프레미스 시스템의 X.509 인증서로 임시 AWS 자격 증명을 획득하는 \"인증서 기반 인증\" 패턴은 SCS-C03의 핵심 주제입니다.",
    "en_q": "A company maintains both on-premises legacy systems and resources in AWS. The AWS resources include an Amazon DynamoDB table and an Amazon S3 bucket. The on-premises legacy systems need to connect to DynamoDB and Amazon S3 on a regular basis. The company currently uses a bastion host in a public subnet in a VPC. The company connects to the bastion host by using an SSH private key that the company stores on-premises. The instance profile that is assigned to the bastion host has full access to Amazon S3 and DynamoDB. A security team issues a new internal policy that requires all bastion hosts to be removed. The policy requires all systems to authenticate by using certificate-based authentication. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Set up an AWS Direct Connect connection and create a VPN connection to a VPC that has access to VPC endpoints for the required services.",
      "B": "Set up the on-premises systems to use AWS IAM Roles Anywhere to authenticate.",
      "C": "Use AWS Private Certificate Authority to issue SSL certificates to give on-premises systems access to resources on AWS.",
      "D": "Create an IAM user that has permission to temporarily assume an IAM role and to use temporarily assumed role credentials to access the required resources."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404542-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 72,
    "question": "회사가 AWS Organizations의 조직을 사용하여 여러 AWS 계정을 관리합니다. 사용자가 IAM 사용자와 보안 액세스 키를 사용하여 AWS 계정에 접근합니다. 보안팀은 모든 계정 접근이 60분 후 만료되는 임시 보안 자격 증명을 사용하도록 요구합니다. 사용자는 SAML 기반 ID 공급자(IdP)를 사용하여 계정에 접근해야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "AWS Security Token Service(AWS STS)에 대한 접근을 활성화합니다. 사용자가 적절한 기간으로 get-session-token AWS CLI 명령을 실행하도록 합니다. 사용자가 STS 임시 자격 증명을 사용하여 AWS 계정에 접근하도록 요구합니다.",
      "B": "AWS IAM Identity Center를 설정하고 외부 IdP를 설정합니다. 사용자가 필요로 하는 접근을 허용하는 권한 집합을 설정합니다. 세션 기간 제한을 설정합니다. 사용자가 AWS CLI를 사용하여 SSO 자격 증명을 검색하도록 요구합니다. AWS 계정에서 IAM 사용자를 제거합니다.",
      "C": "각 AWS 계정에 AWS Secrets Manager와 Amazon Cognito를 설정합니다. Cognito ID 풀을 외부 IdP를 사용하도록 설정하고 Secrets Manager에 연결합니다. Secrets Manager에서 관리형 보안 로테이션을 활성화합니다. 사용자가 get-secret-value AWS CLI 명령을 실행하여 AWS 계정에 접근하도록 합니다.",
      "D": "조직 관리 계정에서 AWS IAM Roles Anywhere를 활성화합니다. 사용자가 자격 증명 도우미 도구를 설치하도록 합니다. 조직 관리 계정 내에서 적절한 세션 기간으로 IAM 역할을 설정합니다. 사용자가 자격 증명 도우미 도구에서 임시 자격 증명을 검색하도록 합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS IAM Identity Center — 조직 전체 중앙 SSO, 외부 IdP 연결, 임시 자격 증명 발급\n▸ SAML-based IdP — 온프레미스 또는 클라우드의 ID 공급자 (Okta, Azure AD 등)\n▸ Permission Set — Identity Center의 권한 모음 (IAM 정책과 유사)\n▸ Session Duration Limit — 자동으로 임시 자격 증명 만료 시간 설정\n\n【정답 포인트】\n▸ \"조직 전체\" + \"SAML 기반 IdP\" + \"60분 임시 자격 증명\" → IAM Identity Center\n▸ IAM Identity Center 설정:\n  1. External IdP (SAML) 설정\n  2. Permission Set 생성 (사용자 권한 정의)\n  3. Session Duration Limit = 60분\n  4. 사용자가 SSO 포털 또는 AWS CLI로 로그인 → 자동으로 임시 자격 증명 발급\n▸ \"IAM 사용자 제거\" → 장기 액세스 키 제거, SSO 중심으로 전환\n\n【오답 체크】\n(A) AWS STS 직접 사용은 \"조직 전체 중앙 관리\"가 아님. \"사용자가 수동으로 get-session-token\" 실행 필요\n(B) ✓ IAM Identity Center = SAML + 임시 자격 증명 + 세션 기간 제한 + 조직 전체 SSO\n(C) Secrets Manager + Cognito는 애플리케이션 수준 인증. \"조직 전체 SSO\" 구조 아님\n(D) IAM Roles Anywhere는 \"인증서 기반 온프레미스 접근\". \"SAML IdP\" + \"조직 전체 SSO\" 요구사항과 맞지 않음\n\n【시험 포인트】\nAWS Organizations 전체 SSO + SAML: IAM Identity Center (formerly AWS SSO) 사용. Identity Center는 외부 SAML IdP 연결, 권한 집합(Permission Set) 기반 권한 관리, 세션 기간 제한 (자동 임시 자격 증명 만료)을 지원하는 조직 수준 SSO 솔루션입니다.",
    "en_q": "A company uses an organization in AWS Organizations to manage multiple AWS accounts. Users access AWS accounts by using IAM users and secret access keys. A security team requires all access to accounts to use temporary security credentials that expire after 60 minutes. Users must use a SAML-based identity provider (IdP) to access the accounts. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Enable access to the AWS Security Token Service (AWS STS). Ensure that users run the get-session-token AWS CLI command with an appropriate duration. Require users to use STS temporary credentials to access AWS accounts.",
      "B": "Set up AWS IAM Identity Center and configure an external IdP. Configure permission sets that allow the access that the users require. Configure a session duration limit. Require the users to retrieve SSO credentials by using the AWS CLI. Remove the IAM users from the AWS accounts.",
      "C": "Set up AWS Secrets Manager and Amazon Cognito in each AWS account. Configure a Cognito identity pool to use an external IdP and connect to Secrets Manager. Enable managed secret rotation in Secrets Manager. Ensure that the users run the get-secret-value AWS CLI command to access the AWS accounts.",
      "D": "Enable AWS IAM Roles Anywhere in the organization management account. Ensure that users install the credential helper tool. Configure IAM roles within the management account with an appropriate session duration. Ensure that the users retrieve temporary credentials from the credential helper tool to access the AWS accounts."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404543-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 74,
    "question": "회사가 공개 웹 애플리케이션으로의 트래픽 증가를 경험한 후 AWS WAF를 사용하기 시작했습니다. 보안 엔지니어는 트래픽의 증가가 애플리케이션 계층 공격 때문인지 파악해야 합니다. 보안 엔지니어는 AWS WAF 트래픽을 분석할 수 있는 솔루션이 필요합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "AWS WAF가 로그를 AWS CloudTrail의 트레일로 보내도록 설정합니다. Amazon Data Firehose 전달 스트림을 생성하여 로그를 Amazon OpenSearch Service로 보냅니다. OpenSearch Dashboards와 Amazon Athena 커넥터를 사용하여 로그를 쿼리합니다.",
      "B": "AWS WAF가 로그를 Amazon S3 버킷으로 보내도록 설정합니다. S3 버킷의 파티션 프로젝션으로 OpenSearch 테이블을 설정합니다. OpenSearch를 사용하여 S3 버킷의 데이터를 쿼리합니다.",
      "C": "AWS WAF가 로그를 Amazon S3 버킷으로 보내도록 설정합니다. S3 버킷의 파티션 프로젝션으로 Amazon Athena 테이블을 설정합니다. Athena를 사용하여 S3 버킷의 데이터를 쿼리합니다.",
      "D": "AWS WAF가 로그를 AWS CloudTrail의 트레일로 보내도록 설정합니다. Amazon Data Firehose 전달 스트림을 생성하여 로그를 Amazon S3 버킷으로 보냅니다. Amazon Athena를 사용하여 S3 버킷의 데이터를 쿼리합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS WAF Logging — 애플리케이션 계층(L7) 요청 분석 로그\n▸ S3 → Athena — 비용 효율적, 즉시 쿼리 가능한 분석\n▸ Partition Projection — Athena의 자동 파티션 추론 기능\n▸ CloudTrail — API 호출 기록 (WAF 로그용 아님)\n\n【정답 포인트】\n▸ WAF 로그는 \"CloudTrail이 아닌 S3\"로 직접 전송\n▸ S3 로그 + Athena = 표준 WAF 분석 스택:\n  1. WAF → S3 로그 저장\n  2. Athena 테이블 생성 + Partition Projection\n  3. SQL로 WAF 로그 쿼리: User-Agent, Source IP, Request Count, Block/Allow 통계 등\n▸ 비용: Athena 요금만 (Firehose 추가 비용 없음)\n▸ 속도: 바로 쿼리 가능\n\n【오답 체크】\n(A) CloudTrail은 AWS API 호출 기록. WAF 로그는 CloudTrail에 저장되지 않음. \"WAF가 CloudTrail로 전송\"은 오류\n(B) OpenSearch는 실시간 스트리밍에 유리하지만, S3 기반 배치 분석에는 오버헤드. Partition Projection은 Athena 기능 (OpenSearch 아님)\n(C) ✓ WAF → S3 → Athena + Partition Projection = 표준\n(D) CloudTrail 오류 + Firehose 추가 비용\n\n【시험 포인트】\nWAF 로그 분석: 저장소(S3) + 쿼리 엔진(Athena). \"애플리케이션 계층 공격 분석\"은 WAF 로그의 Request/Response 필드, User-Agent, Source IP, 차단된 규칙 등을 SQL로 분석합니다.",
    "en_q": "A company begins to use AWS WAF after experiencing an increase in traffic to the company's public web applications. A security engineer needs to determine if the increase in traffic is because of application-layer attacks. The security engineer needs a solution to analyze AWS WAF traffic. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Configure AWS WAF to send logs to a trail in AWS CloudTrail. Create an Amazon Data Firehose delivery stream to send the logs to Amazon OpenSearch Service. Use OpenSearch Dashboards and an Amazon Athena connector to query the logs.",
      "B": "Configure AWS WAF to send logs to an Amazon S3 bucket Configure an OpenSearch table with a partition projection of the S3 bucket. Use OpenSearch to query the data in the S3 bucket",
      "C": "Configure AWS WAF to send logs to an Amazon S3 bucket. Configure an Amazon Athena table with a partition projection of the S3 bucket. Use Athena to query the data in the S3 bucket.",
      "D": "Configure AWS WAF to send logs to a trail in AWS CloudTrail. Create an Amazon Data Firehose delivery stream to send the logs to an Amazon S3 bucket. Use Amazon Athena to query the data in the S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404545-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 75,
    "question": "AWS Organizations를 통해 관리되는 50개의 AWS 계정을 가진 회사가 중앙화된 위협 탐지 솔루션을 설정해야 합니다. 솔루션은 조직 내 모든 계정에서 의심스럽고 잠재적으로 악의적인 활동을 파악해야 합니다. 회사는 AWS Control Tower를 사용하고 감사 계정으로 보안 findings를 중앙화하고 싶어합니다. 보안팀은 새로운 보안 findings 발생 후 5분 이내에 이메일 알림을 받아야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon GuardDuty를 감사 계정의 위임된 관리자로 설정합니다. 위임된 관리자 계정을 통해 모든 멤버 계정에서 GuardDuty를 활성화합니다. GuardDuty findings를 보안팀에게 이메일 알림을 전달하는 Amazon SNS 주제로 보내도록 Amazon EventBridge 규칙을 생성합니다.",
      "B": "각 멤버 계정에서 Amazon GuardDuty를 설정하고, 감사 계정에서 크로스 계정 접근을 허용하는 IAM 역할을 생성합니다. 각 계정에서 보안 findings를 모니터링하고 감사 계정의 Amazon SNS 주제로 알림을 보내도록 Amazon CloudWatch 알람을 설정합니다.",
      "C": "감사 계정에서 AWS Config를 활성화하고 조직 전체에서 보안 문제를 감지하는 커스텀 규칙을 생성합니다. AWS Systems Manager를 사용하여 모든 멤버 계정에서 보안 findings를 수집하고 중앙화된 Amazon S3 버킷에 저장합니다. S3 버킷을 모니터링하고 새로운 findings 발견 시 보안팀에게 이메일 알림을 보내는 AWS Lambda 함수를 생성합니다.",
      "D": "조직 전체의 모든 Amazon EC2 인스턴스에 Amazon Inspector 에이전트를 배포합니다. Amazon Inspector 에이전트를 감사 계정의 중앙 Amazon Inspector 콘솔로 보고하도록 설정합니다. 각 멤버 계정에서 findings를 감사 계정의 Amazon SNS 주제로 전달하도록 Amazon EventBridge 규칙을 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon GuardDuty Delegated Administrator — 중앙 계정에서 모든 멤버 계정 관리\n▸ AWS Organizations Integration — GuardDuty는 조직 전체 멤버 자동 검색\n▸ GuardDuty Findings → EventBridge → SNS → Email — 5분 이내 실시간 알림\n▸ AWS Control Tower Audit Account — 보안 findings 중앙화 대상\n\n【정답 포인트】\n▸ \"50개 계정 중앙화\" + \"실시간 5분 이내 알림\" → GuardDuty Delegated Administrator\n▸ GuardDuty 아키텍처:\n  1. 감사 계정 = GuardDuty Delegated Administrator\n  2. 조직의 모든 멤버 계정 자동 관리 (수동 초대 불필요)\n  3. 모든 findings는 감사 계정에 중앙화\n  4. EventBridge가 GuardDuty findings 실시간 감지\n  5. SNS로 이메일 알림 (5분 이내)\n▸ \"가장 효율적\": Delegated Administrator는 초기 설정 후 자동 관리\n\n【오답 체크】\n(A) ✓ GuardDuty Delegated Administrator = 중앙화 + 자동 관리 + 실시간 findings\n(B) 각 계정에 수동으로 GuardDuty 설정 → 확장성 낮음. CloudWatch 알람은 \"findings\"가 아닌 \"메트릭\" 기반\n(C) AWS Config는 \"리소스 규정 준수\" 감시 (위협 탐지 아님). Lambda로 S3 폴링은 지연 발생 (5분 내 어려움)\n(D) Amazon Inspector는 \"취약점 스캔\" (EC2만 해당). \"모든 계정의 위협 탐지\" 요구사항과 맞지 않음\n\n【시험 포인트】\n다중 계정 위협 탐지 중앙화: GuardDuty Delegated Administrator + EventBridge + SNS. GuardDuty의 \"조직 통합\" 기능으로 모든 멤버 계정을 자동으로 관리하고, findings는 실시간으로 감사 계정으로 중앙화됩니다.",
    "en_q": "A company with 50 AWS accounts managed through AWS Organizations needs to set up a centralized threat detection solution. The solution must identify suspicious and potentially malicious activity across all accounts in the organization. The company uses AWS Control Tower and wants to centralize security findings into an audit account. A security team must receive email alerts within 5 minutes of any new security findings. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure Amazon GuardDuty with a delegated administrator in the audit account. Enable GuardDuty across all member accounts through the delegated administrator account. Create an Amazon EventBridge rule to send GuardDuty findings to an Amazon SNS topic that delivers email notifications to the security team.",
      "B": "Set up Amazon GuardDuty in each member account, and create IAM roles to allow cross-account access from the audit account. Configure Amazon CloudWatch alarms in each account to monitor for security findings and to send notifications to an Amazon Simple Notification Service (Amazon SNS) topic in the audit account.",
      "C": "Enable AWS Config in the audit account and create custom rules to detect security issues across the organization. Use AWS Systems Manager to collect security findings from all member accounts and to store the findings in a centralized Amazon S3 bucket. Create an AWS Lambda function to monitor the S3 bucket and to send email notifications to the security team when new findings are detected.",
      "D": "Deploy Amazon Inspector agents across all Amazon EC2 instances in the organization. Configure the Amazon Inspector agents to report to a central Amazon Inspector console in the audit account. Create Amazon EventBridge rules in each member account to forward findings to an Amazon Simple Notification Service (Amazon SNS) topic in the audit account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404546-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 76,
    "question": "보안 엔지니어가 VPC에서 실행되는 공개 웹 애플리케이션을 보호해야 합니다. VPC는 Amazon CloudFront 배포의 출처입니다. 애플리케이션이 여러 Layer 7 DDoS 공격을 경험했습니다. AWS WAF 웹 ACL이 CloudFront 배포에 연결되어 있습니다. 웹 ACL에는 나쁜 평판을 가진 알려진 IP 주소로부터 보호하기 위한 AWS 관리형 규칙이 포함되어 있습니다. 보안 엔지니어는 Layer 7 DDoS 공격을 실시간으로 탐지하고 완화하는 자동 솔루션을 설정해야 하며 수동 작업이 필요 없어야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "CloudFront 배포에서 AWS Shield Advanced를 활성화합니다. CloudWatch에서 DDoS 지표에 대한 알림을 설정합니다.",
      "B": "AWS Shield Advanced를 활성화하고 AWS DDoS Response Team과의 선제적 참여를 설정합니다.",
      "C": "VPC에서 AWS Network Firewall을 배포합니다. DDoS 지표를 감지하는 보안 정책을 생성합니다. 공격 중에 웹 ACL 규칙을 자동으로 업데이트하는 AWS Lambda 함수를 생성합니다.",
      "D": "웹 ACL에 Rate-based 규칙을 추가합니다. AWS Shield Advanced를 활성화합니다. CloudFront 배포에서 자동 애플리케이션 계층 DDoS 완화를 활성화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Shield Advanced Automatic Application Layer DDoS Mitigation — L7 DDoS \"자동\" 완화\n▸ WAF Rate-based Rules — 요청 속도 기반 자동 차단\n▸ CloudFront Shield Advanced Integration — CloudFront에서 L3-L4 + L7 보호\n\n【정답 포인트】\n▸ \"실시간 자동\" + \"Layer 7 DDoS\" → Shield Advanced + Automatic DDoS Mitigation\n▸ Shield Advanced (CloudFront)의 자동 완화 기능:\n  1. L3-L4 공격: 자동 스크러빙 센터 필터링\n  2. L7 공격: \"Automatic Application Layer DDoS Mitigation\" 옵션으로 자동 차단\n  3. WAF Rate-based 규칙과 함께 사용 시 효과 극대화\n▸ \"수동 작업 불필요\" → Lambda 커스텀 규칙 관리 불필요\n▸ D의 조합: Rate-based Rules(정밀) + Shield Advanced(자동) = 다층 방어\n\n【오답 체크】\n(A) Shield Advanced만으로는 \"자동 완화\" 기능 미흡. CloudWatch 알람은 \"탐지\" (완화 아님)\n(B) Proactive Engagement는 DRT의 \"전문가 지원\". \"자동 완화\" 아님\n(C) Network Firewall + Lambda → 수동 규칙 업데이트 필요. \"자동\" 요구사항 미충족\n(D) ✓ Rate-based Rules + Shield Advanced + Automatic Mitigation = 완전 자동\n\n【시험 포인트】\nCloudFront L7 DDoS 완전 자동 방어: Shield Advanced의 \"Automatic Application Layer DDoS Mitigation\" 옵션 활성화. 이 옵션은 AWS ML 모델로 비정상 패턴 자동 감지 후 임시 규칙 생성 및 적용하여 수동 개입 없이 공격 완화합니다.",
    "en_q": "A security engineer needs to protect a public web application that runs in a VPC. The VPC hosts the origin for an Amazon CloudFront distribution. The application has experienced multiple layer 7 DDoS attacks. An AWS WAF web ACL is associated with the CloudFront distribution. The web ACL contains one AWS managed rule to protect against known IP addresses that have bad reputations. The security engineer must configure an automated solution that detects and mitigates layer 7 DDoS attacks in real time with no manual effort. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Enable AWS Shield Advanced on the CloudFront distribution. Configure alerts in Amazon CloudWatch for DDoS indicators.",
      "B": "Enable AWS Shield Advanced and configure proactive engagement with the AWS DDoS Response Team.",
      "C": "Deploy AWS Network Firewall in the VPCreate security policies that detect DDoS indicators. Create an AWS Lambda function to automatically update the web ACL rules during an attack.",
      "D": "Add a rate-based rule to the web ACL. Enable AWS Shield Advanced. Enable automatic application layer DDoS mitigation on the CloudFront distribution."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404547-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  },
  {
    "id": 77,
    "question": "회사가 모든 기능을 활성화한 상태로 AWS Organizations의 조직을 사용합니다. 회사는 모든 멤버 계정과 모든 AWS 리전에서 AWS Security Hub를 활성화했습니다. 회사가 멤버 AWS 계정의 eu-central-1 리전에 VPC를 생성했습니다. 보안 엔지니어가 VPC에서 인바운드 트래픽을 모든 IP 주소에서 TCP 포트 22로 허용하는 보안 그룹 규칙이 없는지 확인했습니다. 보안 엔지니어는 자동화된 시스템이 필요합니다. 시스템은 VPC에서 모든 IP 주소의 TCP 포트 22에서 트래픽을 허용하는 보안 그룹 규칙의 생성을 방지해야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "AWS CloudTrail 조직 트레일을 활성화하여 Amazon CloudWatch Logs 로그 그룹에 로그합니다. 로그 그룹 메트릭 필터를 기반으로 CloudWatch 알람을 생성합니다. 보안 그룹 규칙이 모든 IP 주소에서 인바운드 트래픽을 허용할 때 Amazon SNS 주제로 발행하도록 알람을 설정합니다. 보안 엔지니어의 이메일 주소를 SNS 주제에 구독합니다.",
      "B": "모든 IP 주소의 TCP 포트 22에서 인바운드 트래픽을 허용하는 보안 그룹 규칙에 대한 Security Hub findings를 필터링하는 Amazon EventBridge 규칙을 생성합니다. 원하지 않는 보안 그룹 규칙을 제거하는 AWS Lambda 함수를 호출하도록 EventBridge 규칙을 설정합니다.",
      "C": "모든 IP 주소의 TCP 포트 22에서 인바운드 트래픽을 허용하는 보안 그룹 규칙의 생성 또는 수정을 방지하는 SCP를 생성합니다.",
      "D": "VPC에서 모든 인바운드 트래픽을 검사하고 TCP 포트 22에서의 들어오는 트래픽을 방지하는 규칙이 있는 AWS Network Firewall을 배포합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Service Control Policy (SCP) — 조직 전체 또는 계정 단위 \"거부\" 권한 정책 (IAM 정책보다 상위)\n▸ \"Prevention\" (방지) vs \"Detection\" (탐지) → \"생성 방지\"는 SCP 영역\n▸ Security Group Rule 생성 → ec2:AuthorizeSecurityGroupIngress API\n\n【정답 포인트】\n▸ \"보안 그룹 규칙 생성을 방지\" → \"사후 탐지\"가 아닌 \"사전 방지\"가 필요\n▸ SCP의 거부 문(Deny statement)로 구현:\n  ```json\n  {\n    \"Effect\": \"Deny\",\n    \"Action\": \"ec2:AuthorizeSecurityGroupIngress\",\n    \"Resource\": \"arn:aws:ec2:eu-central-1:*:security-group/*\",\n    \"Condition\": {\n      \"StringLike\": {\"ec2:IpProtocol\": \"tcp\"},\n      \"NumericLike\": {\"ec2:FromPort\": \"22\"},\n      \"IpAddress\": {\"ec2:CidrIp\": \"0.0.0.0/0\"}\n    }\n  }\n  ```\n▸ SCP는 조직의 모든 멤버 계정에 적용 (실수 방지)\n\n【오답 체크】\n(A) CloudTrail + CloudWatch + SNS = \"탐지 + 알림\". \"방지\"하지 못함. 규칙 생성 후 알림 받음\n(B) EventBridge + Lambda = \"탐지 후 삭제\". \"생성 방지\"가 아님. 이미 생성된 규칙을 제거하는 사후 조치\n(D) Network Firewall = \"네트워크 트래픽\" 필터링 (\"보안 그룹 규칙 생성\" 방지와 무관)\n(C) ✓ SCP = \"보안 그룹 규칙 생성 자체를 거부\" → 가장 확실한 방지\n\n【시험 포인트】\nAWS Organizations 규정 준수 강화: \"생성 방지\"는 \"탐지 후 수정\"보다 강력. SCP는 조직 수준에서 위험한 액션 전체를 거부하므로, 개별 계정의 IAM 정책이나 수동 규칙으로 우회 불가능합니다. 이 문제는 \"방지(Prevention)\"가 명시되어 있으므로 SCP 선택이 확실합니다.",
    "en_q": "A company uses AWS Organizations with all features enabled. The company has enabled AWS Security Hub in all member accounts and in all AWS Regions. The company has created a VPC in the eu-central-1 Region in a member AWS account. A security engineer has verified that no security group rules in the VPC allow inbound traffic from all IP addresses on TCP port 22. The security engineer needs an automated system. The system must prevent the creation of security group rules in the VPC that allow traffic from all IP addresses on TCP port 22. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Enable an AWS CloudTrail organization trail that logs to an Amazon CloudWatch Logs log group. Create a CloudWatch alarm based on a log group metric filter. Configure the alarm to publish to an Amazon Simple Notification Service (Amazon SNS) topic when a security group rule is added that allows inbound traffic from all IP addresses. Subscribe the security engineer's email address to the SNS topic.",
      "B": "Create an Amazon EventBridge rule that filters for Security Hub findings about security group rules that allow inbound traffic from all IP addresses on TCP port 22. Configure the EventBridge rule to target an AWS Lambda function that removes the unwanted security group rule.",
      "C": "Create an SCP that prevents the creation or modification of security group rules that allow inbound traffic from all IP addresses on TCP port 22.",
      "D": "Deploy AWS Network Firewall with a rule that inspects all inbound traffic and prevents incoming traffic on TCP port 22."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/404548-exam-aws-certified-security-specialty-scs-c03-topic-1/"
  }
];
