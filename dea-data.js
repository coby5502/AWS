window.DEA_QUESTIONS = [
  {
    "id": 1,
    "question": "데이터 엔지니어가 AWS Glue 작업을 설정하여 Amazon S3 버킷에서 데이터를 읽으려고 합니다. 데이터 엔지니어는 필요한 AWS Glue 연결 세부 정보와 관련 IAM 역할을 설정했습니다. 그러나 AWS Glue 작업을 실행하려고 할 때 Amazon S3 VPC 게이트웨이 엔드포인트 문제를 나타내는 오류 메시지가 표시됩니다. 데이터 엔지니어는 오류를 해결하고 AWS Glue 작업을 S3 버킷에 연결해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue 보안 그룹을 업데이트하여 Amazon S3 VPC 게이트웨이 엔드포인트에서 인바운드 트래픽을 허용합니다.",
      "B": "S3 버킷 정책을 구성하여 AWS Glue 작업에 S3 버킷에 액세스할 수 있는 권한을 명시적으로 부여합니다.",
      "C": "AWS Glue 작업 코드를 검토하여 AWS Glue 연결 세부 정보에 정규화된 도메인 이름이 포함되어 있는지 확인합니다.",
      "D": "VPC의 경로 테이블에 Amazon S3 VPC 게이트웨이 엔드포인트에 대한 인바운드 및 아웃바운드 경로가 포함되어 있는지 확인합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ VPC 게이트웨이 엔드포인트 — S3에 프라이빗하게 접근하기 위한 VPC 엔드포인트. 인터넷 게이트웨이나 NAT 거치지 않음\n▸ 경로 테이블 — VPC 내 네트워크 트래픽을 라우팅하기 위한 규칙 집합\n▸ AWS Glue 연결 — 데이터 소스(S3, RDS 등)에 접근하기 위한 연결 설정\n\n【정답 포인트】\n▸ S3 VPC 게이트웨이 엔드포인트 사용 시, VPC 경로 테이블에 엔드포인트로의 경로가 필수\n▸ \"S3 VPC 게이트웨이 엔드포인트 문제\" 오류 = 라우팅 문제\n▸ 경로 테이블에 S3 트래픽을 게이트웨이 엔드포인트로 라우팅하는 규칙 추가 필요\n\n【오답 체크】\n(A) 보안 그룹 업데이트는 VPC 게이트웨이 엔드포인트와 직접 관련 없음. 엔드포인트는 보안 그룹을 사용하지 않음\n(B) S3 버킷 정책은 IAM 권한 문제 해결이지, VPC 엔드포인트 라우팅 문제와 무관\n(C) 정규화 도메인 이름은 Glue 연결 설정 시 선택사항이며, VPC 엔드포인트 라우팅과 무관\n\n【시험 포인트】\nVPC 엔드포인트 문제 → 경로 테이블 확인 (라우팅 규칙 검증)",
    "en_q": "A data engineer is configuring an AWS Glue job to read data from an Amazon S3 bucket. The data engineer has set up the necessary AWS Glue connection details and an associated IAM role. However, when the data engineer attempts to run the AWS Glue job, the data engineer receives an error message that indicates that there are problems with the Amazon S3 VPC gateway endpoint. The data engineer must resolve the error and connect the AWS Glue job to the S3 bucket. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Update the AWS Glue security group to allow inbound traffic from the Amazon S3 VPC gateway endpoint.",
      "B": "Configure an S3 bucket policy to explicitly grant the AWS Glue job permissions to access the S3 bucket.",
      "C": "Review the AWS Glue job code to ensure that the AWS Glue connection details include a fully qualified domain name.",
      "D": "Verify that the VPC's route table includes inbound and outbound routes for the Amazon S3 VPC gateway endpoint."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/133045-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 2,
    "question": "소매 회사는 Amazon S3 버킷에 고객 데이터 허브를 보관합니다. 여러 국가의 직원들이 데이터 허브를 사용하여 회사 전체 분석을 지원합니다. 거버넌스 팀은 분석가가 자신과 같은 국가의 고객 데이터에만 액세스할 수 있도록 보장해야 합니다. 이 요구 사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "각 국가의 고객 데이터에 대해 별도의 테이블을 생성합니다. 분석가가 담당하는 국가를 기반으로 각 분석가에게 액세스 권한을 제공합니다.",
      "B": "S3 버킷을 AWS Lake Formation에 데이터 레이크 위치로 등록합니다. Lake Formation의 행 수준 보안 기능을 사용하여 회사의 액세스 정책을 적용합니다.",
      "C": "데이터를 고객이 있는 국가 근처의 AWS 리전으로 이동합니다. 분석가가 담당하는 국가를 기반으로 각 분석가에게 액세스 권한을 제공합니다.",
      "D": "데이터를 Amazon Redshift로 로드합니다. 각 국가에 대해 뷰를 생성합니다. 각 국가의 데이터에 대한 액세스를 위해 각 국가별로 별도의 IAM 역할을 생성합니다. 분석가에게 적절한 역할을 할당합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Lake Formation — 데이터 레이크 구축과 데이터 거버넌스를 위한 관리형 서비스\n▸ 행 수준 보안(RLS) — 특정 행(레코드)에 대한 액세스를 제어하는 세분화된 권한 정책\n▸ 데이터 필터 — Lake Formation의 RLS를 구현하는 방식으로, 사용자 속성 기반으로 데이터 접근 제한\n\n【정답 포인트】\n▸ 같은 S3 버킷/테이블이지만 \"국가별로 다른 행\" 접근 제어 필요 → 행 수준 보안 필수\n▸ Lake Formation의 데이터 필터 기능으로 country 속성 기반 자동 필터링 가능\n▸ 테이블/뷰 분리보다 운영 효율적 (단일 데이터 소스 유지, 자동 필터링)\n\n【오답 체크】\n(A) 국가별 별도 테이블 생성 → 테이블 관리 증가, 데이터 중복, ETL 복잡도 상승\n(C) 리전 분리 → 비용 증가, 데이터 이동 오버헤드, 거버넌스 복잡성 증가\n(D) Redshift + 뷰 + 역할 → 각 분석가 역할을 개별 관리, 행 수준 필터링 불가, 운영 부담 증가\n\n【시험 포인트】\n행 수준 액세스 제어 필요 → Lake Formation의 데이터 필터 활용",
    "en_q": "A retail company has a customer data hub in an Amazon S3 bucket. Employees from many countries use the data hub to support company-wide analytics. A governance team must ensure that the company's data analysts can access data only for customers who are within the same country as the analysts. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Create a separate table for each country's customer data. Provide access to each analyst based on the country that the analyst serves.",
      "B": "Register the S3 bucket as a data lake location in AWS Lake Formation. Use the Lake Formation row-level security features to enforce the company's access policies.",
      "C": "Move the data to AWS Regions that are close to the countries where the customers are. Provide access to each analyst based on the country that the analyst serves.",
      "D": "Load the data into Amazon Redshift. Create a view for each country. Create separate IAM roles for each country to provide access to data from each country. Assign the appropriate roles to the analysts."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131714-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 3,
    "question": "미디어 회사는 사용자 행동과 선호도를 기반으로 고객에게 미디어 콘텐츠를 추천하는 시스템을 개선하려고 합니다. 추천 시스템을 개선하기 위해 회사는 제3자 데이터 집합의 인사이트를 회사의 기존 분석 플랫폼에 통합해야 합니다. 회사는 제3자 데이터 집합 통합에 필요한 노력과 시간을 최소화하려고 합니다. 이 요구 사항을 충족하는 가장 운영 오버헤드가 적은 솔루션은 무엇입니까?",
    "options": {
      "A": "API 호출을 사용하여 AWS Data Exchange에서 제3자 데이터 집합을 액세스하고 통합합니다.",
      "B": "API 호출을 사용하여 AWS DataSync에서 제3자 데이터 집합을 액세스하고 통합합니다.",
      "C": "Amazon Kinesis Data Streams를 사용하여 AWS CodeCommit 저장소에서 제3자 데이터 집합을 액세스하고 통합합니다.",
      "D": "Amazon Kinesis Data Streams를 사용하여 Amazon Elastic Container Registry(Amazon ECR)에서 제3자 데이터 집합을 액세스하고 통합합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Data Exchange — AWS 마켓플레이스에서 제3자 데이터를 구독하고 사용하는 서비스. 라이선스 관리 자동화\n▸ AWS DataSync — 온프레미스 저장소와 AWS 간 데이터 동기화. 대용량 데이터 전송용\n▸ Amazon Kinesis Data Streams — 실시간 데이터 스트리밍 처리 서비스\n\n【정답 포인트】\n▸ \"제3자 데이터 집합\"의 구독 및 통합 → Data Exchange 전문\n▸ Data Exchange는 라이선싱, 권한, 가용성을 자동으로 관리\n▸ API 호출로 간단하게 접근 가능, 설정 최소화\n\n【오답 체크】\n(B) DataSync는 온프레미스 데이터 센터 ↔ AWS 동기화용. 제3자 데이터 구독 관리 기능 없음\n(C) CodeCommit은 소스 코드 저장소. 데이터 집합 관리 용도 아님. Kinesis는 실시간 스트림 처리용\n(D) ECR은 컨테이너 이미지 저장소. 제3자 데이터 통합과 무관. Kinesis도 부적절\n\n【시험 포인트】\n제3자 데이터 통합 → Data Exchange 선택 (마켓플레이스 기반 구독 서비스)",
    "en_q": "A media company wants to improve a system that recommends media content to customer based on user behavior and preferences. To improve the recommendation system, the company needs to incorporate insights from third-party datasets into the company's existing analytics platform. The company wants to minimize the effort and time required to incorporate third-party datasets. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use API calls to access and integrate third-party datasets from AWS Data Exchange.",
      "B": "Use API calls to access and integrate third-party datasets from AWS DataSync.",
      "C": "Use Amazon Kinesis Data Streams to access and integrate third-party datasets from AWS CodeCommit repositories.",
      "D": "Use Amazon Kinesis Data Streams to access and integrate third-party datasets from Amazon Elastic Container Registry (Amazon ECR)."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131706-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 4,
    "question": "금융 회사는 데이터 메시(Data Mesh)를 구현하려고 합니다. 데이터 메시는 중앙화된 데이터 거버넌스, 데이터 분석, 데이터 액세스 제어를 지원해야 합니다. 회사는 AWS Glue를 데이터 카탈로그 및 추출, 변환, 로드(ETL) 작업에 사용하기로 결정했습니다. AWS 서비스의 어떤 조합이 데이터 메시를 구현할 것입니까? (2개 선택)",
    "options": {
      "A": "데이터 저장소로 Amazon Aurora를 사용합니다. 데이터 분석을 위해 Amazon Redshift 프로비저닝된 클러스터를 사용합니다.",
      "B": "데이터 저장소로 Amazon S3를 사용합니다. 데이터 분석을 위해 Amazon Athena를 사용합니다.",
      "C": "중앙화된 데이터 거버넌스 및 액세스 제어를 위해 AWS Glue DataBrew를 사용합니다.",
      "D": "데이터 저장소로 Amazon RDS를 사용합니다. 데이터 분석을 위해 Amazon EMR을 사용합니다.",
      "E": "중앙화된 데이터 거버넌스 및 액세스 제어를 위해 AWS Lake Formation을 사용합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ 데이터 메시 — 분산된 도메인별 데이터 소유권 + 중앙화된 거버넌스 모델\n▸ AWS Lake Formation — 중앙화된 데이터 거버넌스(권한, 태그, 감사)를 제공하는 서비스\n▸ Amazon S3 — 데이터 레이크의 기본 저장소. Athena 쿼리 지원\n▸ Amazon Athena — S3의 데이터를 SQL로 분석. 프로비저닝 불필요\n\n【정답 포인트】\n▸ 데이터 저장소 + 분석 + 거버넌스 3층 구조 필요\n▸ S3 + Athena — 저장소와 분석의 표준 조합. 확장성, 비용 효율성\n▸ Lake Formation — 중앙화된 거버넌스로 권한, RLS, 감사 추적 제공\n▸ Glue는 카탈로그와 ETL 역할. 이 조합으로 완성된 데이터 메시\n\n【오답 체크】\n(A) Aurora는 관계형 DB, 데이터 레이크 패턴에 부적합. Redshift 프로비저닝도 과비용\n(C) DataBrew는 데이터 정제/준비 도구. 거버넌스 및 액세스 제어 기능 없음\n(D) RDS는 OLTP DB, 데이터 메시 저장소로 부적합\n\n【시험 포인트】\n데이터 메시 구조 → S3(저장소) + Athena(분석) + Lake Formation(거버넌스)",
    "en_q": "A financial company wants to implement a data mesh. The data mesh must support centralized data governance, data analysis, and data access control. The company has decided to use AWS Glue for data catalogs and extract, transform, and load (ETL) operations. Which combination of AWS services will implement a data mesh? (Choose two.)",
    "en_opts": {
      "A": "Use Amazon Aurora for data storage. Use an Amazon Redshift provisioned cluster for data analysis.",
      "B": "Use Amazon S3 for data storage. Use Amazon Athena for data analysis.",
      "C": "Use AWS Glue DataBrew for centralized data governance and access control.",
      "D": "Use Amazon RDS for data storage. Use Amazon EMR for data analysis.",
      "E": "Use AWS Lake Formation for centralized data governance and access control."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131467-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 5,
    "question": "데이터 엔지니어는 많은 AWS Lambda 함수가 사용하는 데이터 포맷팅 프로세스를 수행하는 사용자 정의 Python 스크립트를 유지관리합니다. 데이터 엔지니어가 Python 스크립트를 수정해야 할 때마다 모든 Lambda 함수를 수동으로 업데이트해야 합니다. 데이터 엔지니어는 Lambda 함수를 업데이트하는 덜 수동적인 방법이 필요합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "사용자 정의 Python 스크립트에 대한 포인터를 실행 컨텍스트 객체에 저장하고 공유 Amazon S3 버킷에 저장합니다.",
      "B": "사용자 정의 Python 스크립트를 Lambda 레이어에 패키징합니다. Lambda 함수에 Lambda 레이어를 적용합니다.",
      "C": "사용자 정의 Python 스크립트에 대한 포인터를 환경 변수에 저장하고 공유 Amazon S3 버킷에 저장합니다.",
      "D": "각 Lambda 함수에 동일한 별칭을 할당합니다. 함수의 별칭을 지정하여 각 Lambda 함수를 호출합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Lambda 레이어(Lambda Layer) — 코드, 라이브러리, 커스텀 파일을 패키징하여 여러 Lambda 함수에서 재사용\n▸ Lambda 함수 버전관리 — 함수의 특정 배포판을 추적하고 관리\n▸ 공유 S3 버킷 패턴 — S3에서 공유 리소스를 참조하는 방식 (성능 저하)\n\n【정답 포인트】\n▸ 여러 Lambda 함수가 같은 Python 스크립트를 사용 → 코드 재사용 필요\n▸ Lambda 레이어는 코드를 중앙화하고, 함수들이 자동으로 레이어 업데이트 반영\n▸ 스크립트 수정 시 레이어만 업데이트 → 모든 함수에 즉시 반영. 자동 버전관리\n\n【오답 체크】\n(A) S3 버킷 포인터 참조 → 런타임마다 S3 조회 필요 (성능 저하). 여전히 함수 수정 필요\n(C) 환경 변수는 S3 경로만 저장 → \n(A)와 동일 문제. 동적 로드 오버헤드\n(D) 별칭은 함수 버전 관리용이지, 공유 코드 관리 기능 없음\n\n【시험 포인트】\n코드 재사용 및 중앙화 → Lambda 레이어 (설정 후 자동 업데이트)",
    "en_q": "A data engineer maintains custom Python scripts that perform a data formatting process that many AWS Lambda functions use. When the data engineer needs to modify the Python scripts, the data engineer must manually update all the Lambda functions. The data engineer requires a less manual way to update the Lambda functions. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Store a pointer to the custom Python scripts in the execution context object in a shared Amazon S3 bucket.",
      "B": "Package the custom Python scripts into Lambda layers. Apply the Lambda layers to the Lambda functions.",
      "C": "Store a pointer to the custom Python scripts in environment variables in a shared Amazon S3 bucket.",
      "D": "Assign the same alias to each Lambda function. Call reach Lambda function by specifying the function's alias."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131707-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 6,
    "question": "회사는 AWS Glue에서 추출, 변환, 로드(ETL) 데이터 파이프라인을 생성했습니다. 데이터 엔지니어는 Microsoft SQL Server에 있는 테이블을 크롤해야 합니다. 데이터 엔지니어는 크롤의 출력을 추출하고, 변환하고, Amazon S3 버킷으로 로드해야 합니다. 데이터 엔지니어는 또한 데이터 파이프라인을 오케스트레이션해야 합니다. 이 요구 사항을 가장 비용 효과적으로 충족하는 AWS 서비스 또는 기능은 무엇입니까?",
    "options": {
      "A": "AWS Step Functions",
      "B": "AWS Glue 워크플로우",
      "C": "AWS Glue Studio",
      "D": "Amazon Managed Workflows for Apache Airflow(Amazon MWAA)"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue 워크플로우(Workflow) — Glue 작업들의 실행 순서와 의존성을 정의하는 오케스트레이션 기능\n▸ AWS Step Functions — 범용 워크플로우 오케스트레이션 서비스 (상태 머신 기반)\n▸ AWS Glue Studio — Glue ETL 작업을 시각적으로 설계하는 IDE\n▸ Amazon MWAA — Apache Airflow 관리형 서비스 (복잡한 워크플로우용, 고비용)\n\n【정답 포인트】\n▸ Crawler + ETL 작업 + S3 로드 = Glue 내 모든 작업\n▸ Glue 워크플로우는 Glue 네이티브 오케스트레이션 (추가 비용 없음)\n▸ 간단한 선형 파이프라인 → Glue 워크플로우로 충분\n▸ Glue Crawler 실행 → ETL 작업 실행 → 자동 순차 처리\n\n【오답 체크】\n(A) Step Functions — Glue 작업 호출 가능하지만 별도 서비스이므로 추가 비용. 복잡한 워크플로우용\n(C) Glue Studio — ETL 작업 설계 도구일 뿐, 오케스트레이션 기능 없음\n(D) MWAA — Airflow 기반 오케스트레이션 (고비용). Glue 파이프라인은 Workflow로 충분\n\n【시험 포인트】\nGlue 기반 단순 파이프라인 → Glue Workflow (비용 효율적)",
    "en_q": "A company created an extract, transform, and load (ETL) data pipeline in AWS Glue. A data engineer must crawl a table that is in Microsoft SQL Server. The data engineer needs to extract, transform, and load the output of the crawl to an Amazon S3 bucket. The data engineer also must orchestrate the data pipeline. Which AWS service or feature will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "AWS Step Functions",
      "B": "AWS Glue workflows",
      "C": "AWS Glue Studio",
      "D": "Amazon Managed Workflows for Apache Airflow (Amazon MWAA)"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131469-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 7,
    "question": "금융 서비스 회사는 Amazon Redshift에 금융 데이터를 저장합니다. 데이터 엔지니어는 금융 데이터에 대한 실시간 쿼리를 실행하여 웹 기반 거래 애플리케이션을 지원하려고 합니다. 데이터 엔지니어는 거래 애플리케이션 내에서 쿼리를 실행하려고 합니다. 이 요구 사항을 가장 운영 오버헤드가 적게 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Redshift에 대한 WebSocket 연결을 설정합니다.",
      "B": "Amazon Redshift Data API를 사용합니다.",
      "C": "Amazon Redshift에 대한 Java Database Connectivity(JDBC) 연결을 설정합니다.",
      "D": "자주 액세스되는 데이터를 Amazon S3에 저장합니다. Amazon S3 Select를 사용하여 쿼리를 실행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Redshift Data API — HTTP REST 엔드포인트로 SQL 쿼리를 실행할 수 있는 API\n▸ JDBC 연결 — Java 애플리케이션이 데이터베이스에 연결하기 위한 프로토콜 (복잡한 설정)\n▸ WebSocket — 지속적인 양방향 연결 (Redshift는 WebSocket 지원하지 않음)\n\n【정답 포인트】\n▸ 웹 애플리케이션 내에서 Redshift 쿼리 실행 → HTTP REST 기반 API 필요\n▸ Redshift Data API는 IAM 기반 인증, 자동 커넥션 관리\n▸ JDBC보다 간단하고 빠름. 서버리스 패턴 지원 (Connection pool 관리 불필요)\n▸ 웹 애플리케이션은 HTTP 요청 전송만 하면 됨 → 낮은 오버헤드\n\n【오답 체크】\n(A) WebSocket — Redshift가 WebSocket 프로토콜을 네이티브로 지원하지 않음\n(C) JDBC — 데이터베이스 드라이버 설치, 커넥션 풀 관리, 네트워크 설정 필요 (복잡)\n(D) S3 Select — 실시간 쿼리 아님. 배치 처리 패턴. 거래 애플리케이션에 부적합\n\n【시험 포인트】\n웹 애플리케이션에서 데이터베이스 쿼리 → 관리형 API (Redshift Data API) 사용",
    "en_q": "A financial services company stores financial data in Amazon Redshift. A data engineer wants to run real-time queries on the financial data to support a web-based trading application. The data engineer wants to run the queries from within the trading application. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Establish WebSocket connections to Amazon Redshift.",
      "B": "Use the Amazon Redshift Data API.",
      "C": "Set up Java Database Connectivity (JDBC) connections to Amazon Redshift.",
      "D": "Store frequently accessed data in Amazon S3. Use Amazon S3 Select to run the queries."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131470-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 8,
    "question": "회사는 Amazon S3에 있는 데이터에 대해 일회성 쿼리를 위해 Amazon Athena를 사용합니다. 회사는 여러 사용 사례를 가지고 있습니다. 회사는 같은 AWS 계정에 있는 사용자, 팀, 애플리케이션 간에 쿼리 프로세스 및 쿼리 기록에 대한 액세스를 분리하기 위해 권한 제어를 구현해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 사용 사례에 대해 S3 버킷을 생성합니다. 적절한 개별 IAM 사용자에게 권한을 부여하는 S3 버킷 정책을 생성합니다. S3 버킷 정책을 S3 버킷에 적용합니다.",
      "B": "각 사용 사례에 대해 Athena 워크그룹을 생성합니다. 워크그룹에 태그를 적용합니다. 태그를 사용하여 워크그룹에 적절한 권한을 적용하는 IAM 정책을 생성합니다.",
      "C": "각 사용 사례에 대해 IAM 역할을 생성합니다. 각 사용 사례에 대해 역할에 적절한 권한을 할당합니다. 역할을 Athena와 연결합니다.",
      "D": "각 사용 사례에 대해 적절한 개별 IAM 사용자에게 권한을 부여하는 AWS Glue Data Catalog 리소스 정책을 생성합니다. Athena가 사용하는 특정 테이블에 리소스 정책을 적용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Athena 워크그룹 — Athena 쿼리 실행 환경. 워크그룹별로 결과 저장소, 타임아웃, 비용 제한 설정 가능\n▸ Athena 태그 — 워크그룹과 데이터 소스에 적용하는 메타데이터. IAM 정책 조건으로 사용\n▸ 쿼리 격리 — 각 팀/애플리케이션의 쿼리 기록, 결과, 권한을 분리\n\n【정답 포인트】\n▸ \"사용 사례별 권한 제어 + 쿼리 기록 분리\" → 워크그룹 레벨 격리 필수\n▸ Athena 워크그룹은 쿼리 실행, 결과 저장, 감시를 사용 사례별로 격리\n▸ 태그 기반 IAM 정책 → 각 팀/애플리케이션에 필요한 워크그룹만 액세스 가능\n▸ 자동으로 쿼리 기록과 비용도 워크그룹별로 추적\n\n【오답 체크】\n(A) S3 버킷 분리 → 데이터 저장소 분리일 뿐, Athena 쿼리 권한과 기록 격리 안 됨\n(C) IAM 역할 분리 → 워크그룹이 없으면 모든 쿼리가 같은 결과 저장소 사용. 기록 분리 불가\n(D) Glue 리소스 정책 → 테이블 액세스 제어. Athena 워크그룹 격리 불가. 쿼리 기록 분리 없음\n\n【시험 포인트】\nAthena 사용 사례 격리 → 워크그룹 + 태그 기반 IAM 정책 (권한 + 기록 분리)",
    "en_q": "A company uses Amazon Athena for one-time queries against data that is in Amazon S3. The company has several use cases. The company must implement permission controls to separate query processes and access to query history among users, teams, and applications that are in the same AWS account. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an S3 bucket for each use case. Create an S3 bucket policy that grants permissions to appropriate individual IAM users. Apply the S3 bucket policy to the S3 bucket.",
      "B": "Create an Athena workgroup for each use case. Apply tags to the workgroup. Create an IAM policy that uses the tags to apply appropriate permissions to the workgroup.",
      "C": "Create an IAM role for each use case. Assign appropriate permissions to the role for each use case. Associate the role with Athena.",
      "D": "Create an AWS Glue Data Catalog resource policy that grants permissions to appropriate individual IAM users for each use case. Apply the resource policy to the specific tables that Athena uses."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131471-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 9,
    "question": "데이터 엔지니어는 매일 AWS Glue 작업 세트를 실행하는 워크플로우를 스케줄링해야 합니다. 데이터 엔지니어는 Glue 작업이 특정 시간에 실행되거나 완료되어야 하는 요구 사항이 없습니다. 이 솔루션은 Glue 작업을 가장 비용 효과적인 방식으로 실행할 것입니까?",
    "options": {
      "A": "Glue 작업 속성에서 FLEX 실행 클래스를 선택합니다.",
      "B": "Glue 작업 속성에서 Spot 인스턴스 유형을 사용합니다.",
      "C": "Glue 작업 속성에서 STANDARD 실행 클래스를 선택합니다.",
      "D": "Glue 작업 속성에서 GlueVersion 필드의 최신 버전을 선택합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Glue 작업(Job) — ETL 작업을 실행하는 관리형 서비스\n▸ AWS EventBridge — 이벤트 기반 서비스. 특정 시간에 이벤트 트리거 가능\n▸ AWS Glue 트리거 — Glue 내 작업 스케줄링 및 종속성 관리\n\n【정답 포인트】\n▸ \"매일 실행되는 워크플로우\" = 예약된 실행 필요\n▸ Glue 트리거는 시간 기반 스케줄링 지원. Glue 네이티브 오케스트레이션\n▸ Glue 워크플로우 내에서 작업 간 종속성 관리 가능\n\n【오답 체크】\n(A) Lambda → 이벤트 소싱 기반. Glue 작업을 호출할 수는 있지만 추가 비용. 복잡함\n(B) CloudWatch Events (EventBridge) → 외부 이벤트 기반. Glue 트리거로 직접 스케줄 가능\n(D) Systems Manager → 온프레미스 및 AWS 리소스 자동화. Glue 스케줄링에 과다 기능\n\n【시험 포인트】\nGlue 작업 일일 스케줄 → Glue 트리거 (시간 기반 스케줄)",
    "en_q": "A data engineer needs to schedule a workflow that runs a set of AWS Glue jobs every day. The data engineer does not require the Glue jobs to run or finish at a specific time. Which solution will run the Glue jobs in the MOST cost-effective way?",
    "en_opts": {
      "A": "Choose the FLEX execution class in the Glue job properties.",
      "B": "Use the Spot Instance type in Glue job properties.",
      "C": "Choose the STANDARD execution class in the Glue job properties.",
      "D": "Choose the latest version in the GlueVersion field in the Glue job properties."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132628-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 10,
    "question": "데이터 엔지니어는 데이터 형식을 .csv에서 Apache Parquet로 변환하는 AWS Lambda 함수를 생성해야 합니다. Lambda 함수는 사용자가 .csv 파일을 Amazon S3 버킷에 업로드할 때만 실행되어야 합니다. 이 요구 사항을 가장 운영 오버헤드가 적게 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "s3:ObjectCreated:* 이벤트 유형이 있는 S3 이벤트 알림을 생성합니다. 필터 규칙을 사용하여 접미사에 .csv가 포함된 경우에만 알림을 생성합니다. Lambda 함수의 Amazon Resource Name(ARN)을 이벤트 알림의 대상으로 설정합니다.",
      "B": "이벤트 유형이 s3:ObjectTagging:*이고 태그가 .csv로 설정된 객체에 대해 S3 이벤트 알림을 생성합니다. Lambda 함수의 Amazon Resource Name(ARN)을 이벤트 알림의 대상으로 설정합니다.",
      "C": "이벤트 유형이 s3:*인 S3 이벤트 알림을 생성합니다. 필터 규칙을 사용하여 접미사에 .csv가 포함된 경우에만 알림을 생성합니다. Lambda 함수의 Amazon Resource Name(ARN)을 이벤트 알림의 대상으로 설정합니다.",
      "D": "s3:ObjectCreated:* 이벤트 유형이 있는 S3 이벤트 알림을 생성합니다. 필터 규칙을 사용하여 접미사에 .csv가 포함된 경우에만 알림을 생성합니다. Amazon Simple Notification Service(Amazon SNS) 주제를 이벤트 알림의 대상으로 설정합니다. Lambda 함수를 SNS 주제에 구독합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Lambda 함수 — 서버리스 컴퓨팅 서비스로 이벤트 기반으로 코드 실행\n▸ Apache Parquet — 열(column) 지향 저장 형식. 압축률 높음, 분석 성능 우수\n▸ .csv 형식 — 행(row) 기반 텍스트 형식\n\n【정답 포인트】\n▸ CSV → Parquet 변환은 데이터 변환 작업 (데이터 파이프라인의 일부)\n▸ Lambda는 단순 변환이나 짧은 작업에 적합 (15분 제한)\n▸ 프로비저닝 없이 이벤트 기반으로 자동 실행 가능. 비용 효율적\n\n【오답 체크】\n(A) Glue는 복잡한 ETL용. CSV → Parquet는 상대적으로 단순한 변환\n(B) Kinesis는 실시간 스트리밍용. 배치 변환에 부적합\n(D) EC2는 프로비저닝 필요. 비용 증가, 유지관리 부담\n\n【시험 포인트】\n파일 포맷 변환 (CSV → Parquet) → Lambda (단순 변환, 비용 효율)",
    "en_q": "A data engineer needs to create an AWS Lambda function that converts the format of data from .csv to Apache Parquet. The Lambda function must run only if a user uploads a .csv file to an Amazon S3 bucket. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create an S3 event notification that has an event type of s3:ObjectCreated:*. Use a filter rule to generate notifications only when the suffix includes .csv. Set the Amazon Resource Name (ARN) of the Lambda function as the destination for the event notification.",
      "B": "Create an S3 event notification that has an event type of s3:ObjectTagging:* for objects that have a tag set to .csv. Set the Amazon Resource Name (ARN) of the Lambda function as the destination for the event notification.",
      "C": "Create an S3 event notification that has an event type of s3:*. Use a filter rule to generate notifications only when the suffix includes .csv. Set the Amazon Resource Name (ARN) of the Lambda function as the destination for the event notification.",
      "D": "Create an S3 event notification that has an event type of s3:ObjectCreated:*. Use a filter rule to generate notifications only when the suffix includes .csv. Set an Amazon Simple Notification Service (Amazon SNS) topic as the destination for the event notification. Subscribe the Lambda function to the SNS topic."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131472-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 11,
    "question": "데이터 엔지니어는 Amazon Athena 쿼리가 더 빨리 완료되도록 해야 합니다. 데이터 엔지니어는 Athena 쿼리가 사용하는 모든 파일이 현재 압축되지 않은 .csv 형식으로 저장되어 있음을 알 수 있습니다. 또한 사용자는 대부분의 쿼리에서 특정 열을 선택합니다. 이 솔루션은 Athena 쿼리 성능을 가장 빠르게 할 것입니까?",
    "options": {
      "A": "데이터 형식을 .csv에서 JSON 형식으로 변경합니다. Snappy 압축을 적용합니다.",
      "B": ".csv 파일을 Snappy 압축을 사용하여 압축합니다.",
      "C": "데이터 형식을 .csv에서 Apache Parquet로 변경합니다. Snappy 압축을 적용합니다.",
      "D": ".csv 파일을 gzip 압축을 사용하여 압축합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Parquet 형식 — 열 지향 저장소. 선택적 열(column) 스캔으로 성능 우수\n▸ Athena 파티셔닝 — 데이터를 디렉토리 구조로 분할하여 스캔 범위 축소\n▸ 쿼리 성능 최적화 — 스캔할 데이터양 감소가 핵심\n\n【정답 포인트】\n▸ Athena는 스캔하는 데이터양에 따라 비용과 성능 결정\n▸ Parquet 형식으로 변환 → 열 지향 저장소로 필요한 열만 스캔 가능\n▸ S3에 Parquet 형식으로 저장 + 파티셔닝 추가 → 쿼리 성능 극대화\n\n【오답 체크】\n(A) S3 Select는 단순 필터링용. Athena 쿼리 성능 개선 기능 아님\n(B) Redshift는 별도의 DW 구성. CSV 데이터를 그대로 로드 시 여전히 성능 저하\n(D) RDS는 고비용. 배치 쿼리 용도로 부적합\n\n【시험 포인트】\nAthena 쿼리 성능 → Parquet 형식 + 파티셔닝",
    "en_q": "A data engineer needs Amazon Athena queries to finish faster. The data engineer notices that all the files the Athena queries use are currently stored in uncompressed .csv format. The data engineer also notices that users perform most queries by selecting a specific column. Which solution will MOST speed up the Athena query performance?",
    "en_opts": {
      "A": "Change the data format from .csv to JSON format. Apply Snappy compression.",
      "B": "Compress the .csv files by using Snappy compression.",
      "C": "Change the data format from .csv to Apache Parquet. Apply Snappy compression.",
      "D": "Compress the .csv files by using gzip compression."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131473-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 12,
    "question": "제조 회사는 공장 현장의 센서에서 데이터를 수집하여 운영 효율성을 모니터링하고 향상시킵니다. 회사는 Amazon Kinesis Data Streams를 사용하여 센서가 수집하는 데이터를 데이터 스트림에 게시합니다. 그런 다음 Amazon Kinesis Data Firehose가 데이터를 Amazon S3 버킷에 씁니다. 회사는 제조 시설의 큰 화면에 운영 효율성의 실시간 보기를 표시해야 합니다. 이 요구 사항을 가장 낮은 지연 시간으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Managed Service for Apache Flink(이전 Amazon Kinesis Data Analytics)를 사용하여 센서 데이터를 처리합니다. Apache Flink용 커넥터를 사용하여 Amazon Timestream 데이터베이스에 데이터를 작성합니다. Timestream 데이터베이스를 소스로 사용하여 Grafana 대시보드를 생성합니다.",
      "B": "새 객체가 생성될 때 S3 버킷을 구성하여 AWS Lambda 함수에 알림을 전송합니다. Lambda 함수를 사용하여 데이터를 Amazon Aurora에 게시합니다. Aurora를 소스로 사용하여 Amazon QuickSight 대시보드를 생성합니다.",
      "C": "Amazon Managed Service for Apache Flink(이전 Amazon Kinesis Data Analytics)를 사용하여 센서 데이터를 처리합니다. 새로운 Data Firehose 전달 스트림을 생성하여 Amazon Timestream 데이터베이스에 직접 데이터를 게시합니다. Timestream 데이터베이스를 소스로 사용하여 Amazon QuickSight 대시보드를 생성합니다.",
      "D": "AWS Glue 북마크를 사용하여 S3 버킷에서 센서 데이터를 실시간으로 읽습니다. Amazon Timestream 데이터베이스에 데이터를 게시합니다. Timestream 데이터베이스를 소스로 사용하여 Grafana 대시보드를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Kinesis Data Streams — 실시간 스트림 수집 서비스\n▸ AWS IoT Core — IoT 기기에서 데이터를 수신하고 처리하는 서비스\n▸ 실시간 모니터링 — 지연 시간 최소화\n\n【정답 포인트】\n▸ 센서 데이터 수집 → 실시간 스트리밍 필요\n▸ Kinesis Data Streams은 실시간 데이터 수집에 특화\n▸ AWS IoT Core를 통해 센서에서 데이터를 안전하게 수신\n\n【오답 체크】\n(A) Glue는 배치 ETL. 실시간 모니터링에 부적합\n(B) Athena는 S3 데이터 분석용. 실시간 수집 기능 없음\n(D) DMS는 데이터베이스 마이그레이션용. 센서 데이터 수집과 무관\n\n【시험 포인트】\n실시간 센서 데이터 수집 → AWS IoT Core + Kinesis Data Streams",
    "en_q": "A manufacturing company collects sensor data from its factory floor to monitor and enhance operational efficiency. The company uses Amazon Kinesis Data Streams to publish the data that the sensors collect to a data stream. Then Amazon Kinesis Data Firehose writes the data to an Amazon S3 bucket. The company needs to display a real-time view of operational efficiency on a large screen in the manufacturing facility. Which solution will meet these requirements with the LOWEST latency?",
    "en_opts": {
      "A": "Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) to process the sensor data. Use a connector for Apache Flink to write data to an Amazon Timestream database. Use the Timestream database as a source to create a Grafana dashboard.",
      "B": "Configure the S3 bucket to send a notification to an AWS Lambda function when any new object is created. Use the Lambda function to publish the data to Amazon Aurora. Use Aurora as a source to create an Amazon QuickSight dashboard.",
      "C": "Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) to process the sensor data. Create a new Data Firehose delivery stream to publish data directly to an Amazon Timestream database. Use the Timestream database as a source to create an Amazon QuickSight dashboard.",
      "D": "Use AWS Glue bookmarks to read sensor data from the S3 bucket in real time. Publish the data to an Amazon Timestream database. Use the Timestream database as a source to create a Grafana dashboard."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131474-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 13,
    "question": "회사는 투자 포트폴리오의 일일 재무 성과 기록을 .csv 형식으로 Amazon S3 버킷에 저장합니다. 데이터 엔지니어는 AWS Glue 크롤러를 사용하여 S3 데이터를 크롤합니다. 데이터 엔지니어는 S3 데이터를 매일 AWS Glue Data Catalog에서 액세스할 수 있도록 해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AmazonS3FullAccess 정책을 포함하는 IAM 역할을 생성합니다. 역할을 크롤러와 연결합니다. 크롤러의 데이터 저장소로 소스 데이터의 S3 버킷 경로를 지정합니다. 크롤러를 실행하는 일일 일정을 생성합니다. 출력 대상을 기존 S3 버킷의 새 경로로 구성합니다.",
      "B": "AWSGlueServiceRole 정책을 포함하는 IAM 역할을 생성합니다. 역할을 크롤러와 연결합니다. 크롤러의 데이터 저장소로 소스 데이터의 S3 버킷 경로를 지정합니다. 크롤러를 실행하는 일일 일정을 생성합니다. 출력 대상으로 데이터베이스 이름을 지정합니다.",
      "C": "AmazonS3FullAccess 정책을 포함하는 IAM 역할을 생성합니다. 역할을 크롤러와 연결합니다. 크롤러의 데이터 저장소로 소스 데이터의 S3 버킷 경로를 지정합니다. 데이터 처리 단위(DPU)를 할당하여 크롤러를 매일 실행합니다. 출력 대상으로 데이터베이스 이름을 지정합니다.",
      "D": "AWSGlueServiceRole 정책을 포함하는 IAM 역할을 생성합니다. 역할을 크롤러와 연결합니다. 크롤러의 데이터 저장소로 소스 데이터의 S3 버킷 경로를 지정합니다. 데이터 처리 단위(DPU)를 할당하여 크롤러를 매일 실행합니다. 출력 대상을 기존 S3 버킷의 새 경로로 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue Crawler — 데이터 저장소(S3, RDS 등)를 자동으로 스캔하여 스키마 감지\n▸ Glue Data Catalog — 데이터 메타데이터를 중앙화하여 관리\n▸ 스키마 진화(Schema Evolution) — 컬럼 추가/삭제 등 데이터 구조 변경 처리\n\n【정답 포인트】\n▸ CSV 파일이 매일 저장되고 스키마가 변할 수 있음 → 자동 스키마 감지 필요\n▸ Glue Crawler는 자동으로 스키마를 감지하고 Data Catalog 업데이트\n▸ 스키마 진화를 자동으로 처리하여 데이터 파이프라인의 유연성 증대\n\n【오답 체크】\n(A) Athena는 쿼리 도구. 스키마 자동 감지 기능 없음. 수동 테이블 정의 필요\n(B) EventBridge는 이벤트 기반 트리거. 스키마 감지 기능 없음\n(D) CloudFormation은 인프라 코드형(IaC). 데이터 스키마 감지 기능 없음\n\n【시험 포인트】\n자동 스키마 감지 및 Data Catalog 관리 → Glue Crawler",
    "en_q": "A company stores daily records of the financial performance of investment portfolios in .csv format in an Amazon S3 bucket. A data engineer uses AWS Glue crawlers to crawl the S3 data. The data engineer must make the S3 data accessible daily in the AWS Glue Data Catalog. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an IAM role that includes the AmazonS3FullAccess policy. Associate the role with the crawler. Specify the S3 bucket path of the source data as the crawler's data store. Create a daily schedule to run the crawler. Configure the output destination to a new path in the existing S3 bucket.",
      "B": "Create an IAM role that includes the AWSGlueServiceRole policy. Associate the role with the crawler. Specify the S3 bucket path of the source data as the crawler's data store. Create a daily schedule to run the crawler. Specify a database name for the output.",
      "C": "Create an IAM role that includes the AmazonS3FullAccess policy. Associate the role with the crawler. Specify the S3 bucket path of the source data as the crawler's data store. Allocate data processing units (DPUs) to run the crawler every day. Specify a database name for the output.",
      "D": "Create an IAM role that includes the AWSGlueServiceRole policy. Associate the role with the crawler. Specify the S3 bucket path of the source data as the crawler's data store. Allocate data processing units (DPUs) to run the crawler every day. Configure the output destination to a new path in the existing S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131709-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 14,
    "question": "회사는 매일 끝에 각 날의 트랜잭션 데이터를 Amazon Redshift 테이블로 로드합니다. 회사는 어떤 테이블이 로드되었는지, 어떤 테이블이 아직 로드될 필요가 있는지 추적할 수 있기를 원합니다. 데이터 엔지니어는 Redshift 테이블의 로드 상태를 Amazon DynamoDB 테이블에 저장하려고 합니다. 데이터 엔지니어는 AWS Lambda 함수를 생성하여 로드 상태의 세부 정보를 DynamoDB에 게시합니다. 데이터 엔지니어는 Lambda 함수를 호출하여 로드 상태를 DynamoDB 테이블에 어떻게 작성해야 합니까?",
    "options": {
      "A": "Amazon CloudWatch 이벤트를 기반으로 두 번째 Lambda 함수를 사용하여 첫 번째 Lambda 함수를 호출합니다.",
      "B": "Amazon Redshift Data API를 사용하여 Amazon EventBridge에 이벤트를 게시합니다. EventBridge 규칙을 구성하여 Lambda 함수를 호출합니다.",
      "C": "Amazon Redshift Data API를 사용하여 Amazon Simple Queue Service(Amazon SQS) 대기열에 메시지를 게시합니다. SQS 대기열을 구성하여 Lambda 함수를 호출합니다.",
      "D": "AWS CloudTrail 이벤트를 기반으로 두 번째 Lambda 함수를 사용하여 첫 번째 Lambda 함수를 호출합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Redshift 로드 → S3에서 Redshift로 데이터 적재\n▸ COPY 명령어 — Redshift의 대량 로드 명령어\n▸ 중복 제거 → 기존 데이터와 중복되지 않도록 처리\n\n【정답 포인트】\n▸ \"매일 끝에 트랜잭션 데이터 로드\" → 증분 로드(Incremental Load) 필요\n▸ 기존 데이터와 새 데이터의 충돌 방지 → MERGE 또는 DELETE + INSERT 패턴\n▸ 데이터 중복 제거는 데이터 품질 보장\n\n【오답 체크】\n(A) 전체 데이터를 매번 로드 → 시간 낭비, 리소스 낭비\n(B) 데이터 검증 없이 로드 → 중복 데이터 누적\n(D) CSV 파일을 그대로 로드 → 형식 변환 오버헤드, 성능 저하\n\n【시험 포인트】\n일일 증분 데이터 로드 → 기존 데이터 확인 후 중복 제거하여 적재",
    "en_q": "A company loads transaction data for each day into Amazon Redshift tables at the end of each day. The company wants to have the ability to track which tables have been loaded and which tables still need to be loaded. A data engineer wants to store the load statuses of Redshift tables in an Amazon DynamoDB table. The data engineer creates an AWS Lambda function to publish the details of the load statuses to DynamoDB. How should the data engineer invoke the Lambda function to write load statuses to the DynamoDB table?",
    "en_opts": {
      "A": "Use a second Lambda function to invoke the first Lambda function based on Amazon CloudWatch events.",
      "B": "Use the Amazon Redshift Data API to publish an event to Amazon EventBridge. Configure an EventBridge rule to invoke the Lambda function.",
      "C": "Use the Amazon Redshift Data API to publish a message to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the SQS queue to invoke the Lambda function.",
      "D": "Use a second Lambda function to invoke the first Lambda function based on AWS CloudTrail events."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131675-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 15,
    "question": "데이터 엔지니어는 온프레미스 데이터 센터에서 Amazon S3 버킷으로 5TB의 데이터를 안전하게 전송해야 합니다. 매일 약 5%의 데이터가 변경됩니다. 데이터 업데이트를 정기적으로 S3 버킷에 전파해야 합니다. 데이터는 여러 형식의 파일을 포함합니다. 데이터 엔지니어는 전송 프로세스를 자동화하고 프로세스를 주기적으로 실행하도록 스케줄링해야 합니다. 데이터 엔지니어는 가장 운영 효율적인 방식으로 데이터를 전송하기 위해 어떤 AWS 서비스를 사용해야 합니까?",
    "options": {
      "A": "AWS DataSync",
      "B": "AWS Glue",
      "C": "AWS Direct Connect",
      "D": "Amazon S3 Transfer Acceleration"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS DataSync — 온프레미스와 AWS 간 대용량 데이터 전송 서비스\n▸ AWS Direct Connect — 전용 네트워크 연결로 안전하고 빠른 데이터 전송\n▸ 데이터 무결성 — 전송 중 데이터 손상 방지\n\n【정답 포인트】\n▸ 5TB의 대용량 데이터 → 고속 전송 필요\n▸ DataSync는 자동 검증, 병렬 전송, 대역폭 제어로 안전하고 효율적\n▸ Direct Connect 통합 가능 → 보안 및 성능 향상\n\n【오답 체크】\n(A) S3 Standard 업로드 → 대용량 전송에 느림. 재시도 로직 필요\n(B) CloudFront → 컨텐츠 배포용. 데이터 수집과 무관\n(D) Kinesis → 실시간 스트리밍용. 배치 대용량 전송에 부적합\n\n【시험 포인트】\n온프레미스 → AWS 대용량 데이터 전송 → DataSync (자동 검증, 최적화)",
    "en_q": "A data engineer needs to securely transfer 5 TB of data from an on-premises data center to an Amazon S3 bucket. Approximately 5% of the data changes every day. Updates to the data need to be regularly proliferated to the S3 bucket. The data includes files that are in multiple formats. The data engineer needs to automate the transfer process and must schedule the process to run periodically. Which AWS service should the data engineer use to transfer the data in the MOST operationally efficient way?",
    "en_opts": {
      "A": "AWS DataSync",
      "B": "AWS Glue",
      "C": "AWS Direct Connect",
      "D": "Amazon S3 Transfer Acceleration"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131676-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 16,
    "question": "회사는 온프레미스 Microsoft SQL Server 데이터베이스를 사용하여 금융 트랜잭션 데이터를 저장합니다. 회사는 매월 말에 온프레미스 데이터베이스에서 AWS로 트랜잭션 데이터를 마이그레이션합니다. 회사는 온프레미스 데이터베이스에서 Amazon RDS for SQL Server 데이터베이스로 데이터를 마이그레이션하는 비용이 최근 증가했음을 알았습니다. 회사는 AWS로 데이터를 마이그레이션하는 비용 효율적인 솔루션이 필요합니다. 이 솔루션은 데이터베이스에 액세스하는 애플리케이션의 가동 중지 시간을 최소화해야 합니다. 이 요구 사항을 충족하기 위해 회사는 어떤 AWS 서비스를 사용해야 합니까?",
    "options": {
      "A": "AWS Lambda",
      "B": "AWS Database Migration Service(AWS DMS)",
      "C": "AWS Direct Connect",
      "D": "AWS DataSync"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Database Migration Service (DMS) — 데이터베이스 마이그레이션 서비스\n▸ AWS Glue — ETL 및 카탈로그 서비스\n▸ 이종 데이터베이스 마이그레이션 — SQL Server → AWS로의 전환\n\n【정답 포인트】\n▸ 온프레미스 SQL Server → AWS로 마이그레이션 필요\n▸ DMS는 데이터베이스 스키마, 데이터, 설정을 자동으로 마이그레이션\n▸ 다운타임 최소화 (CDC - Change Data Capture 지원)\n\n【오답 체크】\n(A) DataSync는 파일 레벨 동기화. 데이터베이스 구조 마이그레이션 불가\n(B) Glue는 ETL. 데이터베이스 마이그레이션 기능 없음\n(D) Lambda는 애플리케이션 로직 실행용. 데이터베이스 마이그레이션 부적합\n\n【시험 포인트】\n온프레미스 DB → AWS 마이그레이션 → DMS (자동화, 다운타임 최소화)",
    "en_q": "A company uses an on-premises Microsoft SQL Server database to store financial transaction data. The company migrates the transaction data from the on-premises database to AWS at the end of each month. The company has noticed that the cost to migrate data from the on-premises database to an Amazon RDS for SQL Server database has increased recently. The company requires a cost-effective solution to migrate the data to AWS. The solution must cause minimal downtown for the applications that access the database. Which AWS service should the company use to meet these requirements?",
    "en_opts": {
      "A": "AWS Lambda",
      "B": "AWS Database Migration Service (AWS DMS)",
      "C": "AWS Direct Connect",
      "D": "AWS DataSync"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131677-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 17,
    "question": "데이터 엔지니어는 AWS Glue 추출, 변환, 로드(ETL) 작업을 사용하여 AWS에서 데이터 파이프라인을 구축하고 있습니다. 데이터 엔지니어는 Amazon RDS 및 MongoDB에서 데이터를 처리하고, 변환을 수행하고, 변환된 데이터를 분석을 위해 Amazon Redshift로 로드해야 합니다. 데이터 업데이트는 매시간 발생해야 합니다. 이 요구 사항을 가장 운영 오버헤드가 적게 충족하는 작업의 어떤 조합이 충족할 것입니까? (2개 선택)",
    "options": {
      "A": "AWS Glue 트리거를 구성하여 매시간 ETL 작업을 실행합니다.",
      "B": "AWS Glue DataBrew를 사용하여 분석을 위해 데이터를 정제하고 준비합니다.",
      "C": "AWS Lambda 함수를 사용하여 매시간 ETL 작업을 스케줄링하고 실행합니다.",
      "D": "AWS Glue 연결을 사용하여 데이터 소스와 Amazon Redshift 간의 연결을 설정합니다.",
      "E": "Redshift Data API를 사용하여 변환된 데이터를 Amazon Redshift로 로드합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ AWS Glue 작업(Job) — ETL 작업 실행\n▸ Glue 점프 부분(Bookmarks) — 마지막 처리 지점을 기록하여 증분 처리\n▸ 증분 처리 — 이전에 처리한 데이터를 다시 처리하지 않음\n\n【정답 포인트】\n▸ \"처음 실행한 지점부터 계속 처리\" → 데이터 손실 없이 중단된 부분부터 재개\n▸ Glue Job Bookmark는 마지막 처리된 레코드를 기록\n▸ 작업 재실행 시 새로운 데이터만 처리 (효율성 증대)\n\n【오답 체크】\n(A) 수동으로 추적 → 실패 시 모든 데이터 재처리 위험\n(B) 타임스탬프 기반 필터링 → 클록 편차로 데이터 손실 가능\n(D) Checkpoint 파일 → Glue Bookmark보다 복잡한 구현\n\n【시험 포인트】\nETL 작업 실패 복구 → Glue Job Bookmark (자동 증분 추적)",
    "en_q": "A data engineer is building a data pipeline on AWS by using AWS Glue extract, transform, and load (ETL) jobs. The data engineer needs to process data from Amazon RDS and MongoDB, perform transformations, and load the transformed data into Amazon Redshift for analytics. The data updates must occur every hour. Which combination of tasks will meet these requirements with the LEAST operational overhead? (Choose two.)",
    "en_opts": {
      "A": "Configure AWS Glue triggers to run the ETL jobs every hour.",
      "B": "Use AWS Glue DataBrew to clean and prepare the data for analytics.",
      "C": "Use AWS Lambda functions to schedule and run the ETL jobs every hour.",
      "D": "Use AWS Glue connections to establish connectivity between the data sources and Amazon Redshift.",
      "E": "Use the Redshift Data API to load transformed data into Amazon Redshift."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131679-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 18,
    "question": "회사는 RA3 노드에서 실행되는 Amazon Redshift 클러스터를 사용합니다. 회사는 수요를 충족하기 위해 읽기 및 쓰기 용량을 확장하려고 합니다. 데이터 엔지니어는 Redshift의 동시성 확장(Concurrency Scaling)을 켜는 솔루션을 식별해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Redshift Serverless 워크그룹의 워크로드 관리(WLM)에서 동시성 확장을 켭니다.",
      "B": "Redshift 클러스터의 워크로드 관리(WLM) 큐 레벨에서 동시성 확장을 켭니다.",
      "C": "새로운 Redshift 클러스터 생성 중 설정에서 동시성 확장을 켭니다.",
      "D": "Redshift 클러스터의 일일 사용 할당량에 대해 동시성 확장을 켭니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Redshift RA3 노드 — 컴퓨팅과 스토리지 분리. 자동 스케일링 지원\n▸ 동시성 스케일링(Concurrency Scaling) — 더 많은 사용자 요청을 병렬 처리\n▸ 쿼리 성능 병목 → CPU, 메모리, 디스크 I/O 등의 리소스 부족\n\n【정답 포인트】\n▸ RA3 노드로 스토리지와 컴퓨팅을 독립적으로 확장 가능\n▸ 동시성 스케일링으로 쿼리 대기 시간 감소\n▸ 자동 스케일링으로 피크 로드 시 성능 유지\n\n【오답 체크】\n(A) 쿼리 최적화 → 리소스 부족이 근본 원인이면 성능 개선 미흡\n(B) 데이터 압축 → 스토리지 절감이지, 쿼리 성능 개선 미미\n(D) Athena로 전환 → 완전히 다른 아키텍처. 기존 Redshift 투자 손실\n\n【시험 포인트】\nRedshift 동시 사용자 처리 → 동시성 스케일링 (병렬 쿼리 실행)",
    "en_q": "A company uses an Amazon Redshift cluster that runs on RA3 nodes. The company wants to scale read and write capacity to meet demand. A data engineer needs to identify a solution that will turn on concurrency scaling. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Turn on concurrency scaling in workload management (WLM) for Redshift Serverless workgroups.",
      "B": "Turn on concurrency scaling at the workload management (WLM) queue level in the Redshift cluster.",
      "C": "Turn on concurrency scaling in the settings during the creation of any new Redshift cluster.",
      "D": "Turn on concurrency scaling for the daily usage quota for the Redshift cluster."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131680-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 19,
    "question": "데이터 엔지니어는 매일 실행될 일련의 Amazon Athena 쿼리를 오케스트레이션해야 합니다. 각 쿼리는 15분 이상 실행될 수 있습니다. 이 요구 사항을 가장 비용 효과적으로 충족하는 단계의 어떤 조합이 충족할 것입니까? (2개 선택)",
    "options": {
      "A": "AWS Lambda 함수 및 Athena Boto3 클라이언트 start_query_execution API 호출을 사용하여 Athena 쿼리를 프로그래밍 방식으로 호출합니다.",
      "B": "AWS Step Functions 워크플로우를 생성하고 두 개의 상태를 추가합니다. Lambda 함수 전에 첫 번째 상태를 추가합니다. 두 번째 상태를 Wait 상태로 구성하여 Athena Boto3 get_query_execution API 호출을 사용하여 Athena 쿼리가 완료되었는지 주기적으로 확인합니다. 현재 쿼리가 완료되면 다음 쿼리를 호출하도록 워크플로우를 구성합니다.",
      "C": "AWS Glue Python 셸 작업 및 Athena Boto3 클라이언트 start_query_execution API 호출을 사용하여 Athena 쿼리를 프로그래밍 방식으로 호출합니다.",
      "D": "AWS Glue Python 셸 스크립트를 사용하여 sleep 타이머를 실행하고 5분마다 확인하여 현재 Athena 쿼리가 성공적으로 완료되었는지 여부를 결정합니다. 현재 쿼리가 완료되면 다음 쿼리를 호출하도록 Python 셸 스크립트를 구성합니다.",
      "E": "Amazon Managed Workflows for Apache Airflow(Amazon MWAA)를 사용하여 AWS Batch에서 Athena 쿼리를 오케스트레이션합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ Amazon Athena 쿼리 순서 → 이전 쿼리 결과를 다음 쿼리가 필요로 함\n▸ AWS Step Functions — 워크플로우 오케스트레이션\n▸ 워크플로우 종속성 → 쿼리 간의 실행 순서와 조건 관리\n\n【정답 포인트】\n▸ \"각 쿼리는 이전 쿼리 결과에 의존\" → 순차 실행 필요\n▸ Step Functions의 상태 머신으로 쿼리 종속성 관리 가능\n▸ 콜백 패턴으로 쿼리 완료 대기 후 다음 쿼리 실행\n\n【오답 체크】\n(A) Glue Workflow → 주로 Glue Job 오케스트레이션용\n(B) EventBridge → 이벤트 기반. 복잡한 종속성 관리 어려움\n(D) MWAA → 오버헤드 많음. Step Functions로 충분\n\n【시험 포인트】\nAthena 쿼리 순차 실행 → Step Functions (상태 머신 기반 워크플로우)",
    "en_q": "A data engineer must orchestrate a series of Amazon Athena queries that will run every day. Each query can run for more than 15 minutes. Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)",
    "en_opts": {
      "A": "Use an AWS Lambda function and the Athena Boto3 client start_query_execution API call to invoke the Athena queries programmatically.",
      "B": "Create an AWS Step Functions workflow and add two states. Add the first state before the Lambda function. Configure the second state as a Wait state to periodically check whether the Athena query has finished using the Athena Boto3 get_query_execution API call. Configure the workflow to invoke the next query when the current query has finished running.",
      "C": "Use an AWS Glue Python shell job and the Athena Boto3 client start_query_execution API call to invoke the Athena queries programmatically.",
      "D": "Use an AWS Glue Python shell script to run a sleep timer that checks every 5 minutes to determine whether the current Athena query has finished running successfully. Configure the Python shell script to invoke the next query when the current query has finished running.",
      "E": "Use Amazon Managed Workflows for Apache Airflow (Amazon MWAA) to orchestrate the Athena queries in AWS Batch."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131683-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 20,
    "question": "회사가 온프레미스 워크로드를 AWS로 마이그레이션하고 있습니다. 회사는 전반적인 운영 오버헤드를 줄이고 서버리스 옵션을 탐색하고 싶어 합니다. 회사의 현재 워크로드는 Apache Pig, Apache Oozie, Apache Spark, Apache HBase 및 Apache Flink를 사용합니다. 온프레미스 워크로드는 페타바이트 규모의 데이터를 초 단위로 처리합니다. 회사는 마이그레이션 후 비슷하거나 더 나은 성능을 유지해야 합니다. 이러한 요구사항을 충족할 ETL 서비스는 무엇입니까?",
    "options": {
      "A": "AWS Glue",
      "B": "Amazon EMR",
      "C": "AWS Lambda",
      "D": "Amazon Redshift"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Redshift Spectrum — S3 데이터를 직접 쿼리 (Redshift 로드 불필요)\n▸ 데이터 레이크 패턴 — S3에 원본 데이터 보관, 필요시 쿼리\n▸ 운영 오버헤드 감소 → 서버 관리 최소화\n\n【정답 포인트】\n▸ 온프레미스 → AWS 마이그레이션 시 원본 데이터는 S3에 보관\n▸ Redshift Spectrum으로 S3 데이터를 직접 분석\n▸ Redshift 클러스터에 모든 데이터를 로드할 필요 없음 (비용 절감)\n\n【오답 체크】\n(A) 모든 데이터를 Redshift로 로드 → 스토리지 비용 증가, 유지관리 복잡\n(B) 데이터를 여러 AWS 리전에 분리 → 복잡도 증가\n(D) Athena만 사용 → Redshift 투자 낭비\n\n【시험 포인트】\n온프레미스 마이그레이션 + 데이터 레이크 → Redshift Spectrum + S3",
    "en_q": "A company is migrating on-premises workloads to AWS. The company wants to reduce overall operational overhead. The company also wants to explore serverless options. The company's current workloads use Apache Pig, Apache Oozie, Apache Spark, Apache Hbase, and Apache Flink. The on-premises workloads process petabytes of data in seconds. The company must maintain similar or better performance after the migration to AWS. Which extract, transform, and load (ETL) service will meet these requirements?",
    "en_opts": {
      "A": "AWS Glue",
      "B": "Amazon EMR",
      "C": "AWS Lambda",
      "D": "Amazon Redshift"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131684-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 21,
    "question": "데이터 엔지니어는 AWS 서비스를 사용하여 데이터셋을 Amazon S3 데이터 레이크로 수집해야 합니다. 데이터 엔지니어가 데이터셋을 프로파일링하고 데이터셋에 개인식별정보(PII)가 포함되어 있음을 발견했습니다. 데이터 엔지니어는 데이터셋을 프로파일링하고 PII를 난독화하는 솔루션을 구현해야 합니다. 운영 노력이 가장 적게 드는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Kinesis Data Firehose 전달 스트림을 사용하여 데이터셋을 처리합니다. AWS Lambda 변환 함수를 만들어 PII를 식별합니다. AWS SDK를 사용하여 PII를 난독화합니다. 전달 스트림의 대상으로 S3 데이터 레이크를 설정합니다.",
      "B": "AWS Glue Studio의 Detect PII 변환을 사용하여 PII를 식별합니다. PII를 난독화합니다. AWS Step Functions 상태 머신을 사용하여 데이터 파이프라인을 오케스트레이션하여 데이터를 S3 데이터 레이크로 수집합니다.",
      "C": "AWS Glue Studio의 Detect PII 변환을 사용하여 PII를 식별합니다. AWS Glue Data Quality의 규칙을 만들어 PII를 난독화합니다. AWS Step Functions 상태 머신을 사용하여 데이터 파이프라인을 오케스트레이션하여 데이터를 S3 데이터 레이크로 수집합니다.",
      "D": "데이터셋을 Amazon DynamoDB로 수집합니다. AWS Lambda 함수를 만들어 DynamoDB 테이블의 PII를 식별하고 난독화하며 데이터를 변환합니다. 동일한 Lambda 함수를 사용하여 데이터를 S3 데이터 레이크로 수집합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS AppFlow — SaaS 애플리케이션과 AWS 간 데이터 통합 서비스\n▸ AWS Glue — 온프레미스/AWS 데이터 통합용 ETL\n▸ AWS DataSync — 온프레미스 저장소 ↔ AWS 동기화\n\n【정답 포인트】\n▸ 다양한 소스에서 데이터 수집 → 통합 플랫폼 필요\n▸ AppFlow는 SaaS 데이터 통합, Glue는 일반 데이터 통합에 특화\n▸ 데이터 레이크로 자동 수집\n\n【오답 체크】\n(A) Lambda만으로 → 개별 소스마다 커스텀 코드 필요 (유지관리 부담)\n(B) DMS만으로 → 데이터베이스만 마이그레이션 가능\n(D) S3 Transfer Acceleration → 파일 업로드용. 데이터 수집 자동화 불가\n\n【시험 포인트】\n다중 소스 데이터 수집 → AppFlow + Glue (다양한 소스 통합)",
    "en_q": "A data engineer must use AWS services to ingest a dataset into an Amazon S3 data lake. The data engineer profiles the dataset and discovers that the dataset contains personally identifiable information (PII). The data engineer must implement a solution to profile the dataset and obfuscate the PII. Which solution will meet this requirement with the LEAST operational effort?",
    "en_opts": {
      "A": "Use an Amazon Kinesis Data Firehose delivery stream to process the dataset. Create an AWS Lambda transform function to identify the PII. Use an AWS SDK to obfuscate the PII. Set the S3 data lake as the target for the delivery stream.",
      "B": "Use the Detect PII transform in AWS Glue Studio to identify the PII. Obfuscate the PII. Use an AWS Step Functions state machine to orchestrate a data pipeline to ingest the data into the S3 data lake.",
      "C": "Use the Detect PII transform in AWS Glue Studio to identify the PII. Create a rule in AWS Glue Data Quality to obfuscate the PII. Use an AWS Step Functions state machine to orchestrate a data pipeline to ingest the data into the S3 data lake.",
      "D": "Ingest the dataset into Amazon DynamoDB. Create an AWS Lambda function to identify and obfuscate the PII in the DynamoDB table and to transform the data. Use the same Lambda function to ingest the data into the S3 data lake."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132653-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 22,
    "question": "회사는 운영 데이터베이스에서 Amazon S3 기반 데이터 레이크로 데이터를 수집하는 여러 ETL 워크플로우를 유지관리합니다. ETL 워크플로우는 AWS Glue와 Amazon EMR을 사용하여 데이터를 처리합니다. 회사는 기존 아키텍처를 개선하여 자동화된 오케스트레이션을 제공하고 최소한의 수동 작업이 필요한 솔루션을 원합니다. 운영 오버헤드가 가장 적게 드는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue 워크플로우",
      "B": "AWS Step Functions 작업",
      "C": "AWS Lambda 함수",
      "D": "Amazon Managed Workflows for Apache Airflow (Amazon MWAA) 워크플로우"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue Data Catalog — 중앙화된 메타데이터 저장소\n▸ 데이터 거버넌스 — 데이터 계보 추적, 데이터 품질 관리\n▸ Crawler → Catalog → ETL 워크플로우\n\n【정답 포인트】\n▸ 여러 ETL 워크플로우가 동일한 데이터 소스 사용 → 중앙화된 메타데이터 필요\n▸ Glue Catalog에서 스키마를 한 번 정의하고 모든 ETL이 재사용\n▸ 스키마 변경 시 Catalog만 업데이트 → 모든 ETL에 자동 반영\n\n【오답 체크】\n(A) 각 ETL에서 스키마 정의 → 중복, 유지관리 어려움\n(B) 데이터베이스 뷰만으로 → 메타데이터 중앙화 불가\n(D) 수동 문서화 → 버전 관리 어려움, 실제와 불일치 위험\n\n【시험 포인트】\n다중 ETL 워크플로우 관리 → Glue Data Catalog (중앙화된 메타데이터)",
    "en_q": "A company maintains multiple extract, transform, and load (ETL) workflows that ingest data from the company's operational databases into an Amazon S3 based data lake. The ETL workflows use AWS Glue and Amazon EMR to process data. The company wants to improve the existing architecture to provide automated orchestration and to require minimal manual effort. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "AWS Glue workflows",
      "B": "AWS Step Functions tasks",
      "C": "AWS Lambda functions",
      "D": "Amazon Managed Workflows for Apache Airflow (Amazon MWAA) workflows"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131710-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 23,
    "question": "회사는 현재 모든 데이터를 S3 Standard 스토리지 클래스를 사용하여 Amazon S3에 저장합니다. 데이터 엔지니어는 데이터 접근 패턴을 검토하여 추세를 파악했습니다. 처음 6개월 동안 대부분의 데이터 파일은 하루에 여러 번 액세스됩니다. 6개월에서 2년 사이에 대부분의 데이터 파일은 한 달에 한두 번 액세스됩니다. 2년 후 데이터 파일은 연간 한두 번만 액세스됩니다. 데이터 엔지니어는 S3 라이프사이클 정책을 사용하여 새로운 데이터 스토리지 규칙을 개발해야 합니다. 새 스토리지 솔루션은 계속 높은 가용성을 제공해야 합니다. 가장 비용 효율적인 방식으로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "6개월 후 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환합니다. 2년 후 객체를 S3 Glacier Flexible Retrieval로 이전합니다.",
      "B": "6개월 후 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다. 2년 후 객체를 S3 Glacier Flexible Retrieval로 이전합니다.",
      "C": "6개월 후 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환합니다. 2년 후 객체를 S3 Glacier Deep Archive로 이전합니다.",
      "D": "6개월 후 객체를 S3 One Zone-Infrequent Access(S3 One Zone-IA)로 전환합니다. 2년 후 객체를 S3 Glacier Deep Archive로 이전합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 스토리지 클래스 → Standard, IA, Glacier, Deep Archive 등\n▸ 생명 주기 정책(Lifecycle Policy) — 자동으로 스토리지 클래스 변경\n▸ 비용 최적화 → 접근 패턴에 따른 스토리지 선택\n\n【정답 포인트】\n▸ 자주 액세스하는 데이터 → S3 Standard\n▸ 덜 자주 액세스 → S3 Intelligent-Tiering으로 자동 최적화\n▸ 생명 주기 정책으로 일정 기간 후 자동으로 저비용 스토리지로 이동\n\n【오답 체크】\n(A) 모든 데이터를 Standard로 유지 → 비용 낭비\n(B) 수동으로 데이터 이동 → 운영 오버헤드 증가\n(D) Glacier로 즉시 이동 → 자주 액세스하는 데이터에 부적합 (검색 시간 증가)\n\n【시험 포인트】\nS3 비용 최적화 → 생명 주기 정책 + S3 Intelligent-Tiering",
    "en_q": "A company currently stores all of its data in Amazon S3 by using the S3 Standard storage class. A data engineer examined data access patterns to identify trends. During the first 6 months, most data files are accessed several times each day. Between 6 months and 2 years, most data files are accessed once or twice each month. After 2 years, data files are accessed only once or twice each year. The data engineer needs to use an S3 Lifecycle policy to develop new data storage rules. The new storage solution must continue to provide high availability. Which solution will meet these requirements in the MOST cost-effective way?",
    "en_opts": {
      "A": "Transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 6 months. Transfer objects to S3 Glacier Flexible Retrieval after 2 years.",
      "B": "Transition objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 6 months. Transfer objects to S3 Glacier Flexible Retrieval after 2 years.",
      "C": "Transition objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 6 months. Transfer objects to S3 Glacier Deep Archive after 2 years.",
      "D": "Transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 6 months. Transfer objects to S3 Glacier Deep Archive after 2 years."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132654-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 24,
    "question": "회사는 ETL 작업을 지원하는 중요한 분석 작업에 사용하는 Amazon Redshift 프로비저닝 클러스터를 유지관리합니다. 회사의 판매 팀은 비즈니스 인텔리전스(BI) 작업에 사용하는 Redshift 클러스터를 유지관리합니다. 판매 팀은 최근에 ETL Redshift 클러스터의 데이터에 대한 액세스를 요청했으므로 주간 요약 분석 작업을 수행할 수 있습니다. 판매 팀은 ETL 클러스터의 데이터와 판매 팀의 BI 클러스터의 데이터를 조인해야 합니다. 회사는 중요한 분석 작업을 방해하지 않으면서 ETL 클러스터 데이터를 판매 팀과 공유하는 솔루션이 필요합니다. 이 솔루션은 ETL 클러스터의 컴퓨팅 리소스 사용을 최소화해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Redshift 데이터 공유를 사용하여 판매 팀의 BI 클러스터를 ETL 클러스터의 컨슈머로 설정합니다.",
      "B": "판매 팀의 요구사항에 따라 구체화된 뷰를 생성합니다. 판매 팀에 ETL 클러스터에 대한 직접 액세스를 부여합니다.",
      "C": "판매 팀의 요구사항에 따라 데이터베이스 뷰를 생성합니다. 판매 팀에 ETL 클러스터에 대한 직접 액세스를 부여합니다.",
      "D": "매주 ETL 클러스터에서 Amazon S3 버킷으로 데이터를 언로드합니다. ETL 클러스터의 콘텐츠를 기반으로 Amazon Redshift Spectrum 테이블을 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Redshift 예약 인스턴스(RI) — 선결제로 1년/3년 할인\n▸ Redshift Spectrum → S3 데이터 직접 쿼리\n▸ 분석 워크로드 특성 → 예측 가능한 부하\n\n【정답 포인트】\n▸ 예측 가능한 분석 부하 → 예약 인스턴스(RI) 비용 효율적\n▸ RI로 온디맨드 대비 30~40% 비용 절감\n▸ 장기 계약으로 안정적인 인프라 구성\n\n【오답 체크】\n(A) 온디맨드 인스턴스 → 비용 높음. 예측 가능한 부하에 부적합\n(B) 스팟 인스턴스 → 중단 가능. 중요 분석 작업에 부적합\n(D) 서버리스로 전환 → 아키텍처 변경 필요, 기존 투자 손실\n\n【시험 포인트】\n장기 분석 워크로드 → Redshift RI (비용 절감)",
    "en_q": "A company maintains an Amazon Redshift provisioned cluster that the company uses for extract, transform, and load (ETL) operations to support critical analysis tasks. A sales team within the company maintains a Redshift cluster that the sales team uses for business intelligence (BI) tasks. The sales team recently requested access to the data that is in the ETL Redshift cluster so the team can perform weekly summary analysis tasks. The sales team needs to join data from the ETL cluster with data that is in the sales team's BI cluster. The company needs a solution that will share the ETL cluster data with the sales team without interrupting the critical analysis tasks. The solution must minimize usage of the computing resources of the ETL cluster. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Set up the sales team BI cluster as a consumer of the ETL cluster by using Redshift data sharing.",
      "B": "Create materialized views based on the sales team's requirements. Grant the sales team direct access to the ETL cluster.",
      "C": "Create database views based on the sales team's requirements. Grant the sales team direct access to the ETL cluster.",
      "D": "Unload a copy of the data from the ETL cluster to an Amazon S3 bucket every week. Create an Amazon Redshift Spectrum table based on the content of the ETL cluster."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131711-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 25,
    "question": "데이터 엔지니어는 일회성 분석 작업을 수행하기 위해 여러 소스의 데이터를 조인해야 합니다. 데이터는 Amazon DynamoDB, Amazon RDS, Amazon Redshift 및 Amazon S3에 저장되어 있습니다. 이 요구사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EMR 프로비저닝 클러스터를 사용하여 모든 소스에서 읽습니다. Apache Spark를 사용하여 데이터를 조인하고 분석을 수행합니다.",
      "B": "DynamoDB, Amazon RDS 및 Amazon Redshift의 데이터를 Amazon S3로 복사합니다. S3 파일에 대해 Amazon Athena 쿼리를 직접 실행합니다.",
      "C": "Amazon Athena Federated Query를 사용하여 모든 데이터 소스의 데이터를 조인합니다.",
      "D": "Redshift Spectrum을 사용하여 DynamoDB, Amazon RDS 및 Amazon S3의 데이터를 Redshift에서 직접 쿼리합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon Athena — S3 데이터를 SQL로 분석\n▸ 조인(Join) 연산 — 여러 테이블의 데이터를 결합\n▸ 일회성 분석 → 프로비저닝 불필요\n\n【정답 포인트】\n▸ 여러 소스의 데이터를 조인하여 분석 → Athena로 충분\n▸ S3에 있는 데이터를 직접 쿼리 (별도의 로드 작업 불필요)\n▸ 일회성이므로 비용 효율적 (사용한 만큼 비용 청구)\n\n【오답 체크】\n(A) Redshift → 정기적인 분석용. 일회성 분석에 비용 낭비\n(B) EMR → 복잡한 분석(머신러닝, 그래프 처리)에 사용\n(D) RDS → OLTP 데이터베이스. 대용량 일회성 분석에 부적합\n\n【시험 포인트】\n일회성 다중 소스 데이터 분석 → Athena (SQL 기반 쿼리)",
    "en_q": "A data engineer needs to join data from multiple sources to perform a one-time analysis job. The data is stored in Amazon DynamoDB, Amazon RDS, Amazon Redshift, and Amazon S3. Which solution will meet this requirement MOST cost-effectively?",
    "en_opts": {
      "A": "Use an Amazon EMR provisioned cluster to read from all sources. Use Apache Spark to join the data and perform the analysis.",
      "B": "Copy the data from DynamoDB, Amazon RDS, and Amazon Redshift into Amazon S3. Run Amazon Athena queries directly on the S3 files.",
      "C": "Use Amazon Athena Federated Query to join the data from all data sources.",
      "D": "Use Redshift Spectrum to query data from DynamoDB, Amazon RDS, and Amazon S3 directly from Redshift."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131712-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 26,
    "question": "회사는 Apache Spark 작업을 실행하기 위해 프로비저닝된 Amazon EMR 클러스터를 사용하여 빅데이터 분석을 수행할 계획입니다. 회사는 높은 신뢰성을 요구합니다. 빅데이터 팀은 Amazon EMR에서 비용 최적화 및 장기 실행 워크로드 실행 모범 사례를 따라야 합니다. 팀은 회사의 현재 성능 수준을 유지하는 솔루션을 찾아야 합니다. 이러한 요구사항을 가장 비용 효율적으로 충족하는 리소스 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Hadoop Distributed File System(HDFS)을 영구 데이터 저장소로 사용합니다.",
      "B": "Amazon S3을 영구 데이터 저장소로 사용합니다.",
      "C": "Core 노드와 Task 노드에 x86 기반 인스턴스를 사용합니다.",
      "D": "Core 노드와 Task 노드에 Graviton 인스턴스를 사용합니다.",
      "E": "모든 Primary 노드에 Spot Instance를 사용합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\naviton — ARM 기반 저비용 인스턴스\n▸ S3 → EMR 패턴 — 클라우드 최적화 데이터 레이어\n▸ Cost Optimization — Spot + Graviton 조합\n\n【정답 포인트】\nB: S3를 영구 저장소 → 클러스터 종료 후에도 데이터 유지, 탄력적 확장\n▸ 선택 D: Graviton 인스턴스 → x86 대비 30% 가격 저감, 성능 동등\n▸ 장기 실행 비용 최적화 → S3 + Graviton 조합\n\n【오답 체크】\nHDFS는 클러스터 삭제 시 데이터 손실\n(C) x86은 Graviton보다 비쌈\n(E) Primary 노드에 Spot 사용 → 클러스터 불안정 (신뢰성 저하)\n\n【시험 포인트】\n행 = S3 저장소 (탄력성)\nCost Optimization = Graviton (저비용, 동등 성능)\nSpot는 Core/Primary 제외",
    "en_q": "A company is planning to use a provisioned Amazon EMR cluster that runs Apache Spark jobs to perform big data analysis. The company requires high reliability. A big data team must follow best practices for running cost-optimized and long-running workloads on Amazon EMR. The team must find a solution that will maintain the company's current level of performance. Which combination of resources will meet these requirements MOST cost-effectively? (Choose two.)",
    "en_opts": {
      "A": "Use Hadoop Distributed File System (HDFS) as a persistent data store.",
      "B": "Use Amazon S3 as a persistent data store.",
      "C": "Use x86-based instances for core nodes and task nodes.",
      "D": "Use Graviton instances for core nodes and task nodes.",
      "E": "Use Spot Instances for all primary nodes."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131713-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 27,
    "question": "회사는 실시간 분석 기능을 구현하고자 합니다. 회사는 Amazon Kinesis Data Streams와 Amazon Redshift를 사용하여 초당 여러 기가바이트의 스트리밍 데이터를 수집하고 처리하고 싶어 합니다. 회사는 기존 비즈니스 인텔리전스(BI) 및 분석 도구를 사용하여 거의 실시간 인사이트를 도출하고 싶어 합니다. 운영 오버헤드가 가장 적게 드는 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Kinesis Data Streams 데이터를 Amazon S3에 스테이징합니다. COPY 명령을 사용하여 Amazon S3의 데이터를 Amazon Redshift에 직접 로드하여 실시간 분석을 즉시 사용할 수 있도록 합니다.",
      "B": "SQL 쿼리를 사용하여 Kinesis Data Streams의 데이터에 액세스합니다. 스트림 위에 구체화된 뷰를 직접 생성합니다. 최신 스트림 데이터를 쿼리하도록 구체화된 뷰를 정기적으로 새로 고칩니다.",
      "C": "Amazon Redshift에서 외부 스키마를 생성하여 Kinesis Data Streams의 데이터를 Amazon Redshift 객체에 매핑합니다. 스트림에서 읽을 구체화된 뷰를 생성합니다. 구체화된 뷰를 자동 새로 고침으로 설정합니다.",
      "D": "Kinesis Data Streams를 Amazon Kinesis Data Firehose에 연결합니다. Kinesis Data Firehose를 사용하여 Amazon S3에 데이터를 스테이징합니다. COPY 명령을 사용하여 S3의 데이터를 Amazon Redshift 테이블에 로드합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\ndshift External Schema — Kinesis 데이터 직접 쿼리\n▸ Materialized View + Auto Refresh — 실시간 갱신 자동화\n▸ 운영 오버헤드 최소 → 자동화된 파이프라인\n\n【정답 포인트】\n스키마 → Kinesis 데이터 메타데이터 매핑\n▸ 구체화된 뷰 + 자동 새로 고침 → 운영자 개입 불필요\n▸ 거의 실시간 → 자동 갱신 주기\n▸ 최소 운영 오버헤드 → 수동 COPY 불필요\n\n【오답 체크】\nS3 스테이징 + 수동 COPY → 지연 발생, 운영 개입 필요\n(B) 수동 뷰 새로 고침 → 운영 오버헤드 증가\n(D) Firehose + S3 → 추가 레이어, 지연 증가\n\n【시험 포인트】\n스트림 → Redshift External Schema\n자동 갱신 → Materialized View with Auto Refresh\n최소 운영 = 자동화된 인프라",
    "en_q": "A company wants to implement real-time analytics capabilities. The company wants to use Amazon Kinesis Data Streams and Amazon Redshift to ingest and process streaming data at the rate of several gigabytes per second. The company wants to derive near real-time insights by using existing business intelligence (BI) and analytics tools. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Kinesis Data Streams to stage data in Amazon S3. Use the COPY command to load data from Amazon S3 directly into Amazon Redshift to make the data immediately available for real-time analysis.",
      "B": "Access the data from Kinesis Data Streams by using SQL queries. Create materialized views directly on top of the stream. Refresh the materialized views regularly to query the most recent stream data.",
      "C": "Create an external schema in Amazon Redshift to map the data from Kinesis Data Streams to an Amazon Redshift object. Create a materialized view to read data from the stream. Set the materialized view to auto refresh.",
      "D": "Connect Kinesis Data Streams to Amazon Kinesis Data Firehose. Use Kinesis Data Firehose to stage the data in Amazon S3. Use the COPY command to load the data from Amazon S3 to a table in Amazon Redshift."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/133048-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 28,
    "question": "회사는 Amazon QuickSight 대시보드를 사용하여 회사의 애플리케이션 사용을 모니터링합니다. 회사는 AWS Glue 작업을 사용하여 대시보드를 위한 데이터를 처리합니다. 회사는 데이터를 단일 Amazon S3 버킷에 저장합니다. 회사는 매일 새 데이터를 추가합니다. 데이터 엔지니어는 대시보드 쿼리가 시간이 지남에 따라 느려지고 있음을 발견했습니다. 데이터 엔지니어는 쿼리 속도 저하의 근본 원인이 장시간 실행되는 AWS Glue 작업임을 파악했습니다. 데이터 엔지니어는 AWS Glue 작업의 성능을 향상시키기 위해 어떤 조치를 취해야 합니까? (2개 선택)",
    "options": {
      "A": "S3 버킷의 데이터를 분할합니다. 데이터를 연도, 월, 일로 구성합니다.",
      "B": "Worker 유형을 확장하여 AWS Glue 인스턴스 크기를 증가시킵니다.",
      "C": "AWS Glue 스키마를 DynamicFrame 스키마 클래스로 변환합니다.",
      "D": "AWS Glue 작업 스케줄링 빈도를 조정하여 작업이 하루에 절반 횟수로 실행되도록 합니다.",
      "E": "AWS Glue에 액세스를 제공하는 IAM 역할을 수정하여 모든 S3 기능에 액세스할 수 있도록 합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\nrtitioning — S3 데이터 구조화로 스캔 최적화\n▸ Worker Type Scale-Up — 병렬 처리 성능 향상\n▸ 장기 실행 → 데이터 증가에 따른 성능 저하\n\n【정답 포인트】\nA: 파티셔닝 (연도/월/일) → Glue가 필요한 데이터만 스캔\n▸ 선택 B: Worker Type 확장 → 병렬 처리 성능 증가\n▸ 두 조치 조합 → 스캔 범위 축소 + 처리 성능 향상\n\n【오답 체크】\nDynamicFrame은 스키마 클래스, 성능 개선과 무관\n(D) 작업 빈도 감소는 쿼리 지연만 증가\n(E) IAM 권한은 성능과 무관\n\n【시험 포인트】\n증가 → Partitioning으로 스캔 최적화\nGlue 성능 = Partitioning + Worker Scale",
    "en_q": "A company uses an Amazon QuickSight dashboard to monitor usage of one of the company's applications. The company uses AWS Glue jobs to process data for the dashboard. The company stores the data in a single Amazon S3 bucket. The company adds new data every day. A data engineer discovers that dashboard queries are becoming slower over time. The data engineer determines that the root cause of the slowing queries is long-running AWS Glue jobs. Which actions should the data engineer take to improve the performance of the AWS Glue jobs? (Choose two.)",
    "en_opts": {
      "A": "Partition the data that is in the S3 bucket. Organize the data by year, month, and day.",
      "B": "Increase the AWS Glue instance size by scaling up the worker type.",
      "C": "Convert the AWS Glue schema to the DynamicFrame schema class.",
      "D": "Adjust AWS Glue job scheduling frequency so the jobs run half as many times each day.",
      "E": "Modify the IAM role that grants access to AWS glue to grant access to all S3 features."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132734-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 29,
    "question": "데이터 엔지니어는 AWS Step Functions를 사용하여 오케스트레이션 워크플로우를 설계해야 합니다. 워크플로우는 대규모 데이터 파일 컬렉션을 병렬 처리하고 각 파일에 특정 변환을 적용해야 합니다. 이러한 요구사항을 충족하기 위해 데이터 엔지니어가 사용해야 하는 Step Functions 상태는 무엇입니까?",
    "options": {
      "A": "Parallel 상태",
      "B": "Choice 상태",
      "C": "Map 상태",
      "D": "Wait 상태"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\np State — 동일한 변환을 컬렉션의 각 항목에 적용\n▸ Parallel State — 독립적인 여러 브랜치 동시 실행\n▸ 병렬 데이터 처리 — 각 파일마다 동일 로직\n\n【정답 포인트】\np State = 컬렉션 반복 + 병렬 처리\n▸ \"각 파일에 특정 변환\" → Map State의 정확한 용도\n▸ 자동 병렬화 → 파일 수에 따라 동시 실행\n\n【오답 체크】\nParallel State는 고정된 브랜치 수, 동적 배열 처리 불가\n(B) Choice State는 조건부 분기, 병렬 처리 아님\n(D) Wait State는 지연만 담당\n\n【시험 포인트】\n반복 + 동일 로직 = Map State\nParallel ≠ Map (고정 vs 동적 브랜치 수)",
    "en_q": "A data engineer needs to use AWS Step Functions to design an orchestration workflow. The workflow must parallel process a large collection of data files and apply a specific transformation to each file. Which Step Functions state should the data engineer use to meet these requirements?",
    "en_opts": {
      "A": "Parallel state",
      "B": "Choice state",
      "C": "Map state",
      "D": "Wait state"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132773-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 30,
    "question": "회사는 레거시 애플리케이션을 Amazon S3 기반 데이터 레이크로 마이그레이션하고 있습니다. 데이터 엔지니어는 레거시 애플리케이션과 관련된 데이터를 검토했습니다. 데이터 엔지니어는 레거시 데이터에 중복 정보가 포함되어 있음을 발견했습니다. 데이터 엔지니어는 레거시 애플리케이션 데이터에서 중복 정보를 식별하고 제거해야 합니다. 운영 오버헤드가 가장 적게 드는 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Python에서 사용자 정의 ETL 작업을 작성합니다. Pandas 라이브러리를 가져와 DataFrame.drop_duplicates() 함수를 사용하여 데이터 중복 제거를 수행합니다.",
      "B": "AWS Glue ETL 작업을 작성합니다. FindMatches 머신 러닝(ML) 변환을 사용하여 데이터 중복 제거를 수행하도록 데이터를 변환합니다.",
      "C": "Python에서 사용자 정의 ETL 작업을 작성합니다. Python dedupe 라이브러리를 가져옵니다. dedupe 라이브러리를 사용하여 데이터 중복 제거를 수행합니다.",
      "D": "AWS Glue ETL 작업을 작성합니다. Python dedupe 라이브러리를 가져옵니다. dedupe 라이브러리를 사용하여 데이터 중복 제거를 수행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\nndMatches ML Transform — Glue의 머신러닝 기반 중복 검출\n▸ 완벽한 일치 vs 유사도 기반 — 중복 정의의 정교함\n▸ 최소 운영 오버헤드 → 코딩 최소화\n\n【정답 포인트】\nndMatches ML Transform → \"중복 정보\" 감지의 최적 도구\n▸ 정확한 일치만 아닌 유사 데이터도 감지\n▸ Glue 기본 제공 → 외부 라이브러리 불필요\n▸ 자동 학습 → 데이터 품질 향상\n\n【오답 체크】\nPandas drop_duplicates는 정확한 일치만 처리\n(C) \n(D) dedupe 라이브러리 → 외부 의존성, 학습 비용\n특히\n(C) 는 Pandas와 동일한 정확 일치 문제 + 라이브러리 의존\n\n【시험 포인트】\n정보\" 식별 = 정확 일치 + 유사도 기반\nFindMatches ML = 높은 정확도, 최소 코딩",
    "en_q": "A company is migrating a legacy application to an Amazon S3 based data lake. A data engineer reviewed data that is associated with the legacy application. The data engineer found that the legacy data contained some duplicate information. The data engineer must identify and remove duplicate information from the legacy application data. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Write a custom extract, transform, and load (ETL) job in Python. Use the DataFrame.drop_duplicates() function by importing the Pandas library to perform data deduplication.",
      "B": "Write an AWS Glue extract, transform, and load (ETL) job. Use the FindMatches machine learning (ML) transform to transform the data to perform data deduplication.",
      "C": "Write a custom extract, transform, and load (ETL) job in Python. Import the Python dedupe library. Use the dedupe library to perform data deduplication.",
      "D": "Write an AWS Glue extract, transform, and load (ETL) job. Import the Python dedupe library. Use the dedupe library to perform data deduplication."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132774-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 31,
    "question": "회사는 분석 솔루션을 구축하고 있습니다. 이 솔루션은 데이터 레이크 스토리지를 위해 Amazon S3을 사용하고 데이터 웨어하우스를 위해 Amazon Redshift를 사용합니다. 회사는 Amazon Redshift Spectrum을 사용하여 Amazon S3의 데이터를 쿼리하고 싶어 합니다. 어떤 조치가 가장 빠른 쿼리를 제공합니까? (2개 선택)",
    "options": {
      "A": "gzip 압축을 사용하여 개별 파일을 1GB에서 5GB 사이 크기로 압축합니다.",
      "B": "칼럼형 스토리지 파일 형식을 사용합니다.",
      "C": "가장 일반적인 쿼리 술어를 기반으로 데이터를 분할합니다.",
      "D": "데이터를 10KB 미만의 파일로 분할합니다.",
      "E": "분할할 수 없는 파일 형식을 사용합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\nlumnar Format (Parquet/ORC) — 선택적 열 스캔\n▸ Partitioning → WHERE 절 술어 푸시다운\n▸ 최적화 원칙 → 스캔 데이터 양 최소화\n\n【정답 포인트】\nB: 칼럼형 형식 → 필요한 열만 읽음, I/O 50-90% 감소\n▸ 선택 C: 파티션 분할 (술어 기반) → 파티션 프루닝으로 불필요한 파일 제외\n▸ Spectrum 성능 = 스캔 데이터 최소화\n\n【오답 체크】\n압축 크기는 성능에 관계없음 (오버헤드 가능)\n(D) 10KB 파일 → 메타데이터 오버헤드 증가, 성능 저하\n(E) 분할 불가능 형식 → 필요한 부분만 읽기 불가\n\n【시험 포인트】\ntrum 성능 = Columnar + Partitioning\n스캔 범위 최소화 = 격자형 형식 + 파티션 프루닝",
    "en_q": "A company is building an analytics solution. The solution uses Amazon S3 for data lake storage and Amazon Redshift for a data warehouse. The company wants to use Amazon Redshift Spectrum to query the data that is in Amazon S3. Which actions will provide the FASTEST queries? (Choose two.)",
    "en_opts": {
      "A": "Use gzip compression to compress individual files to sizes that are between 1 GB and 5 GB.",
      "B": "Use a columnar storage file format.",
      "C": "Partition the data based on the most common query predicates.",
      "D": "Split the data into files that are less than 10 KB.",
      "E": "Use file formats that are not splittable."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132737-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 32,
    "question": "회사는 Amazon RDS를 사용하여 트랜잭션 데이터를 저장합니다. 회사는 RDS DB 인스턴스를 프라이빗 서브넷에서 실행합니다. 개발자는 기본 설정으로 AWS Lambda 함수를 작성하여 DB 인스턴스의 데이터를 삽입, 업데이트 또는 삭제합니다. 개발자는 Lambda 함수가 공개 인터넷을 사용하지 않고 DB 인스턴스에 개인적으로 연결할 수 있는 기능을 제공해야 합니다. 운영 오버헤드가 가장 적게 드는 이 요구사항을 충족하는 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "DB 인스턴스의 공개 액세스 설정을 켭니다.",
      "B": "DB 인스턴스의 보안 그룹을 업데이트하여 데이터베이스 포트에서 Lambda 함수 호출만 허용합니다.",
      "C": "Lambda 함수를 DB 인스턴스가 사용하는 동일한 서브넷에서 실행되도록 구성합니다.",
      "D": "동일한 보안 그룹을 Lambda 함수와 DB 인스턴스에 연결합니다. 데이터베이스 포트를 통한 액세스를 허용하는 자체 참조 규칙을 포함합니다.",
      "E": "프라이빗 서브넷의 네트워크 ACL을 업데이트하여 데이터베이스 포트를 통한 액세스를 허용하는 자체 참조 규칙을 포함합니다."
    },
    "answer": "CD",
    "explanation": "【핵심 용어】\nC 프라이빗 연결 → ENI를 통한 직접 통신\n▸ 보안 그룹 자체 참조 → 같은 그룹 내 리소스 간 통신\n▸ Lambda 서브넷 배치 → DB와 동일 네트워크\n\n【정답 포인트】\nC: Lambda를 RDS 서브넷에 배치 → 같은 네트워크 내 직접 통신\n▸ 선택 D: 보안 그룹 자체 참조 → 같은 SG 내 리소스 통신 허용\n▸ 두 조치 조합 → 공개 인터넷 우회, 프라이빗 연결\n\n【오답 체크】\n공개 액세스 활성화 → 공개 인터넷 노출, 요구사항 반대\n(B) 보안 그룹만으로 부족 → Lambda가 다른 서브넷 기본 설정\n(E) 네트워크 ACL 자체 참조 → 복잡함, 보안 그룹만으로 충분\n\n【시험 포인트】\n프라이빗 연결 = 서브넷 + 보안 그룹\nLambda 기본 설정 = 관리 인터페이스 사용 (VPC 외)\nVPC 연결 = 명시적 서브넷 구성 필수",
    "en_q": "A company uses Amazon RDS to store transactional data. The company runs an RDS DB instance in a private subnet. A developer wrote an AWS Lambda function with default settings to insert, update, or delete data in the DB instance. The developer needs to give the Lambda function the ability to connect to the DB instance privately without using the public internet. Which combination of steps will meet this requirement with the LEAST operational overhead? (Choose two.)",
    "en_opts": {
      "A": "Turn on the public access setting for the DB instance.",
      "B": "Update the security group of the DB instance to allow only Lambda function invocations on the database port.",
      "C": "Configure the Lambda function to run in the same subnet that the DB instance uses.",
      "D": "Attach the same security group to the Lambda function and the DB instance. Include a self-referencing rule that allows access through the database port.",
      "E": "Update the network ACL of the private subnet to include a self-referencing rule that allows access through the database port."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132738-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 33,
    "question": "회사는 Amazon API Gateway를 사용하여 REST API를 호출하는 프런트엔드 ReactJS 웹사이트를 가지고 있습니다. API는 웹사이트의 기능을 수행합니다. 데이터 엔지니어는 API Gateway를 통해 가끔 호출할 수 있는 Python 스크립트를 작성해야 합니다. 코드는 API Gateway에 결과를 반환해야 합니다. 운영 오버헤드가 가장 적게 드는 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic Container Service(Amazon ECS) 클러스터에 사용자 정의 Python 스크립트를 배포합니다.",
      "B": "프로비저닝된 동시성으로 AWS Lambda Python 함수를 생성합니다.",
      "C": "Amazon Elastic Kubernetes Service(Amazon EKS)에서 API Gateway와 통합할 수 있는 사용자 정의 Python 스크립트를 배포합니다.",
      "D": "AWS Lambda 함수를 생성합니다. Amazon EventBridge 규칙을 사용하여 Mock 이벤트로 5분마다 Lambda 함수를 호출하여 함수를 따뜻하게 유지합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n호출 → 서버리스 모델 적합\n▸ API Gateway 통합 → Lambda 네이티브\n▸ Provisioned Concurrency → 콜드 스타트 제거\n\n【정답 포인트】\nI Gateway + Python → Lambda 최적 조합\n▸ Provisioned Concurrency → \"가끔\" 호출도 응답성 보장\n▸ 운영 오버헤드 최소 → 서버리스, 자동 스케일링\n\n【오답 체크】\nECS 클러스터 유지 → 컨테이너 관리 오버헤드\n(C) EKS → 클러스터 오케스트레이션 복잡성\n(D) 가끔 호출인데 5분마다 워밍업 → 낭비적\n\n【시험 포인트】\n출 + API Gateway = Lambda\nProvisioned Concurrency = 콜드 스타트 회피\n최소 운영 = 서버리스 선택",
    "en_q": "A company has a frontend ReactJS website that uses Amazon API Gateway to invoke REST APIs. The APIs perform the functionality of the website. A data engineer needs to write a Python script that can be occasionally invoked through API Gateway. The code must return results to API Gateway. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Deploy a custom Python script on an Amazon Elastic Container Service (Amazon ECS) cluster.",
      "B": "Create an AWS Lambda Python function with provisioned concurrency.",
      "C": "Deploy a custom Python script that can integrate with API Gateway on Amazon Elastic Kubernetes Service (Amazon EKS).",
      "D": "Create an AWS Lambda function. Ensure that the function is warm by scheduling an Amazon EventBridge rule to invoke the Lambda function every 5 minutes by using mock events."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132630-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 34,
    "question": "회사는 회사 워크로드를 실행하는 프로덕션 AWS 계정을 가지고 있습니다. 회사의 보안 팀은 프로덕션 AWS 계정의 보안 로그를 저장하고 분석하기 위해 보안 AWS 계정을 생성했습니다. 프로덕션 AWS 계정의 보안 로그는 Amazon CloudWatch Logs에 저장됩니다. 회사는 Amazon Kinesis Data Streams를 사용하여 보안 로그를 보안 AWS 계정으로 전달해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "프로덕션 AWS 계정에서 대상 데이터 스트림을 생성합니다. 보안 AWS 계정에서 프로덕션 AWS 계정의 Kinesis Data Streams에 대한 교차 계정 권한이 있는 IAM 역할을 생성합니다.",
      "B": "보안 AWS 계정에서 대상 데이터 스트림을 생성합니다. 스트림에 데이터를 입력할 CloudWatch Logs 권한을 부여하는 IAM 역할과 신뢰 정책을 생성합니다. 보안 AWS 계정에서 구독 필터를 생성합니다.",
      "C": "프로덕션 AWS 계정에서 대상 데이터 스트림을 생성합니다. 프로덕션 AWS 계정에서 보안 AWS 계정의 Kinesis Data Streams에 대한 교차 계정 권한이 있는 IAM 역할을 생성합니다.",
      "D": "보안 AWS 계정에서 대상 데이터 스트림을 생성합니다. 스트림에 데이터를 입력할 CloudWatch Logs 권한을 부여하는 IAM 역할과 신뢰 정책을 생성합니다. 프로덕션 AWS 계정에서 구독 필터를 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\noudWatch Logs Subscription Filter — 로그 자동 전달\n▸ 교차 계정 신뢰 → 프로덕션에서 보안 계정 스트림에 접근\n▸ 데이터 흐름 → Production Log → Kinesis (Security Account)\n\n【정답 포인트】\n림 위치 = 보안 계정 (데이터 최종 목적지)\n▸ 구독 필터 위치 = 프로덕션 계정 (로그 소스)\n▸ 신뢰 정책 = CloudWatch Logs → 보안 계정 스트림\n▸ 자동 전달 = CloudWatch Logs → Kinesis (메커니즘)\n\n【오답 체크】\n스트림 in Production → Destination은 Security에 있어야 함\n(B) 구독 필터 in Security → 로그 소스는 Production\n(C) 스트림 in Production + 역방향 교차 계정 → 아키텍처 복잡\n\n【시험 포인트】\n흐름 방향 = Source → Destination\n구독 필터 = 소스 계정 (로그 생성처)\n신뢰 정책 = 소스 → Destination 스트림 권한",
    "en_q": "A company has a production AWS account that runs company workloads. The company's security team created a security AWS account to store and analyze security logs from the production AWS account. The security logs in the production AWS account are stored in Amazon CloudWatch Logs. The company needs to use Amazon Kinesis Data Streams to deliver the security logs to the security AWS account. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a destination data stream in the production AWS account. In the security AWS account, create an IAM role that has cross-account permissions to Kinesis Data Streams in the production AWS account.",
      "B": "Create a destination data stream in the security AWS account. Create an IAM role and a trust policy to grant CloudWatch Logs the permission to put data into the stream. Create a subscription filter in the security AWS account.",
      "C": "Create a destination data stream in the production AWS account. In the production AWS account, create an IAM role that has cross-account permissions to Kinesis Data Streams in the security AWS account.",
      "D": "Create a destination data stream in the security AWS account. Create an IAM role and a trust policy to grant CloudWatch Logs the permission to put data into the stream. Create a subscription filter in the production AWS account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/133056-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 35,
    "question": "회사는 Amazon S3을 사용하여 트랜잭션 데이터 레이크에 반구조화 데이터를 저장합니다. 일부 데이터 파일은 작지만 다른 데이터 파일은 수십 테라바이트입니다. 데이터 엔지니어는 데이터 소스에서 변경된 데이터를 식별하기 위해 CDC(변경 데이터 캡처) 작업을 수행해야 합니다. 데이터 소스는 매일 JSON 파일로 전체 스냅샷을 전송하고 변경된 데이터를 데이터 레이크로 수집합니다. 변경된 데이터를 가장 비용 효율적으로 캡처하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Lambda 함수를 생성하여 이전 데이터와 현재 데이터 간의 변경을 식별합니다. Lambda 함수를 구성하여 변경사항을 데이터 레이크로 수집합니다.",
      "B": "데이터를 Amazon RDS for MySQL로 수집합니다. AWS Database Migration Service(AWS DMS)를 사용하여 변경된 데이터를 데이터 레이크로 작성합니다.",
      "C": "오픈 소스 데이터 레이크 형식을 사용하여 데이터 소스를 S3 데이터 레이크와 병합하여 새 데이터를 삽입하고 기존 데이터를 업데이트합니다.",
      "D": "데이터를 Aurora Serverless를 실행하는 Amazon Aurora MySQL DB 인스턴스로 수집합니다. AWS Database Migration Service(AWS DMS)를 사용하여 변경된 데이터를 데이터 레이크로 작성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\nlta Lake / Apache Iceberg — 오픈소스 데이터 레이크 형식\n▸ ACID 트랜잭션 → 데이터 일관성\n▸ 스냅샷 기반 CDC → 증분 병합 (UPSERT)\n\n【정답 포인트】\n소스 형식 (Delta/Iceberg) → S3 네이티브\n▸ 스냅샷 병합 → 새로운 행 INSERT, 기존 행 UPDATE\n▸ 비용 효율성 → 중간 DB 불필요\n▸ 대규모 파일 처리 → 증분 업데이트로 최적화\n\n【오답 체크】\nLambda로 JSON 비교 → 페타바이트 규모 처리 불가\n(B) \n(D) RDS/Aurora 중간 저장 → 데이터 이동 비용, 복잡성\nDMS는 관계형 DB CDC에 최적화, S3 스냅샷 병합 비효율적\n\n【시험 포인트】\n냅샷 기반 CDC = MERGE 작업\nDelta Lake/Iceberg = 효율적인 UPSERT\n최소 비용 = S3 네이티브 형식 활용",
    "en_q": "A company uses Amazon S3 to store semi-structured data in a transactional data lake. Some of the data files are small, but other data files are tens of terabytes. A data engineer must perform a change data capture (CDC) operation to identify changed data from the data source. The data source sends a full snapshot as a JSON file every day and ingests the changed data into the data lake. Which solution will capture the changed data MOST cost-effectively?",
    "en_opts": {
      "A": "Create an AWS Lambda function to identify the changes between the previous data and the current data. Configure the Lambda function to ingest the changes into the data lake.",
      "B": "Ingest the data into Amazon RDS for MySQL. Use AWS Database Migration Service (AWS DMS) to write the changed data to the data lake.",
      "C": "Use an open source data lake format to merge the data source with the S3 data lake to insert the new data and update the existing data.",
      "D": "Ingest the data into an Amazon Aurora MySQL DB instance that runs Aurora Serverless. Use AWS Database Migration Service (AWS DMS) to write the changed data to the data lake."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131705-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 36,
    "question": "데이터 엔지니어는 Amazon S3 버킷의 데이터에 대해 Amazon Athena 쿼리를 실행합니다. Athena 쿼리는 AWS Glue Data Catalog를 메타데이터 테이블로 사용합니다. 데이터 엔지니어는 Athena 쿼리 계획이 성능 병목 현상을 경험하고 있음을 주목합니다. 데이터 엔지니어는 성능 병목 현상의 원인이 S3 버킷의 많은 수의 파티션임을 파악했습니다. 데이터 엔지니어는 성능 병목 현상을 해결하고 Athena 쿼리 계획 시간을 줄여야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까? (2개 선택)",
    "options": {
      "A": "AWS Glue 파티션 인덱스를 생성합니다. 파티션 필터링을 활성화합니다.",
      "B": "데이터가 사용자 쿼리의 WHERE 절에서 공통으로 가지는 열을 기반으로 데이터를 버킷팅합니다.",
      "C": "S3 버킷 접두사를 기반으로 Athena 파티션 프로젝션을 사용합니다.",
      "D": "S3 버킷의 데이터를 Apache Parquet 형식으로 변환합니다.",
      "E": "Amazon EMR S3DistCP 유틸리티를 사용하여 S3 버킷의 더 작은 객체를 더 큰 객체로 병합합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\nrtition Index — Glue 메타스토어 인덱싱\n▸ Partition Projection — 동적 파티션 메타데이터\n▸ Query Planning Overhead — 파티션 메타 로드 비용\n\n【정답 포인트】\nA: 파티션 인덱스 + 필터링 → 메타스토어 검색 최적화\n▸ 선택 C: 파티션 프로젝션 → 메타스토어 조회 회피\n▸ 두 방법 모두 → 쿼리 계획 단계의 메타 로드 시간 감소\n\n【오답 체크】\nBucketing은 파티션 계획 오버헤드 해결 안 함\n(D) 파일 형식은 메타데이터 로드와 무관\n(E) 객체 병합은 쿼리 계획 아님, 쿼리 실행 최적화\n\n【시험 포인트】\n계획\" 시간 = 메타데이터 로드\nPartition Index = 인덱스 기반 빠른 메타 조회\nPartition Projection = 메타스토어 조회 제거",
    "en_q": "A data engineer runs Amazon Athena queries on data that is in an Amazon S3 bucket. The Athena queries use AWS Glue Data Catalog as a metadata table. The data engineer notices that the Athena query plans are experiencing a performance bottleneck. The data engineer determines that the cause of the performance bottleneck is the large number of partitions that are in the S3 bucket. The data engineer must resolve the performance bottleneck and reduce Athena query planning time. Which solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Create an AWS Glue partition index. Enable partition filtering.",
      "B": "Bucket the data based on a column that the data have in common in a WHERE clause of the user query.",
      "C": "Use Athena partition projection based on the S3 bucket prefix.",
      "D": "Transform the data that is in the S3 bucket to Apache Parquet format.",
      "E": "Use the Amazon EMR S3DistCP utility to combine smaller objects in the S3 bucket into larger objects."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/131708-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 37,
    "question": "데이터 엔지니어는 AWS로 실시간 스트리밍 데이터를 수집해야 합니다. 데이터 엔지니어는 시간 기반 집계를 사용하여 최대 30분의 기간에 대해 들어오는 스트리밍 데이터에 대해 실시간 분석을 수행하고 싶어 합니다. 데이터 엔지니어는 높은 수준의 내결함성을 갖춘 솔루션이 필요합니다. 운영 오버헤드가 가장 적게 드는 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Lambda 함수를 사용하여 Amazon Kinesis Data Streams의 데이터에 대해 최대 30분의 기간에 대해 시간 기반 집계를 수행하는 비즈니스 및 분석 로직을 포함합니다.",
      "B": "Amazon Managed Service for Apache Flink(이전에 Amazon Kinesis Data Analytics로 알려짐)를 사용하여 중복을 포함할 수 있는 데이터를 분석합니다. 여러 유형의 집계를 사용합니다.",
      "C": "AWS Lambda 함수를 사용하여 이벤트 타임스탬프를 기반으로 최대 30분의 tumbling window에 대해 집계를 수행하는 비즈니스 및 분석 로직을 포함합니다.",
      "D": "Amazon Managed Service for Apache Flink(이전에 Amazon Kinesis Data Analytics로 알려짐)를 사용하여 최대 30분의 기간에 대해 시간 기반 분석을 수행하기 위해 여러 유형의 집계를 사용하여 데이터를 분석합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\nache Flink — 상태 기반 스트림 처리\n▸ Windowing — 시간 기반 집계 (Tumbling/Sliding)\n▸ Fault Tolerance — 체크포인팅 기반 신뢰성\n▸ Exactly-Once 의미론 → 중복 제거\n\n【정답 포인트】\nazon Managed Service for Apache Flink → 30분 윈도우 최적화\n▸ 여러 집계 유형 → Flink 기본 기능 (합계, 평균 등)\n▸ 시간 기반 분석 → Event Time 의미론\n▸ 높은 내결함성 → Flink의 분산 체크포인팅\n▸ 최소 운영 오버헤드 → 서버리스 Flink\n\n【오답 체크】\nLambda는 상태 저장 불가 (윈도우 유지 불가)\n(B) 중복 언급은 구체적이지 않음 (D가 더 나음)\n(C) Lambda는 시간 윈도우 구현 수동 작성 → 복잡성\n\n【시험 포인트】\n시간 윈도우 = 상태 기반 스트림 처리\nFlink = 내결함성 있는 윈도우 집계\n최소 운영 = Managed Service for Flink",
    "en_q": "A data engineer must manage the ingestion of real-time streaming data into AWS. The data engineer wants to perform real-time analytics on the incoming streaming data by using time-based aggregations over a window of up to 30 minutes. The data engineer needs a solution that is highly fault tolerant. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use an AWS Lambda function that includes both the business and the analytics logic to perform time-based aggregations over a window of up to 30 minutes for the data in Amazon Kinesis Data Streams.",
      "B": "Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) to analyze the data that might occasionally contain duplicates by using multiple types of aggregations.",
      "C": "Use an AWS Lambda function that includes both the business and the analytics logic to perform aggregations for a tumbling window of up to 30 minutes, based on the event timestamp.",
      "D": "Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) to analyze the data by using multiple types of aggregations to perform time-based analytics over a window of up to 30 minutes."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132739-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 38,
    "question": "회사는 Amazon Elastic Block Store(Amazon EBS) General Purpose SSD 스토리지를 gp2에서 gp3로 업그레이드할 계획입니다. 회사는 Amazon EC2 인스턴스의 마이그레이션 중 데이터 손실을 초래하는 중단을 방지하고 싶어 합니다. 운영 오버헤드가 가장 적게 드는 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "gp2 볼륨의 스냅샷을 생성합니다. 스냅샷에서 새로운 gp3 볼륨을 생성합니다. 새 gp3 볼륨을 EC2 인스턴스에 연결합니다.",
      "B": "새로운 gp3 볼륨을 생성합니다. 점진적으로 데이터를 새 gp3 볼륨으로 전송합니다. 전송이 완료되면 새 gp3 볼륨을 EC2 인스턴스에 마운트하여 gp2 볼륨을 대체합니다.",
      "C": "기존 gp2 볼륨의 볼륨 유형을 gp3으로 변경합니다. 볼륨 크기, IOPS 및 처리량에 대한 새 값을 입력합니다.",
      "D": "AWS DataSync를 사용하여 새 gp3 볼륨을 생성합니다. 원본 gp2 볼륨에서 새 gp3 볼륨으로 데이터를 전송합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\nS 온라인 볼륨 유형 변경 — gp2→gp3 무중단 변환\n▸ 운영 오버헤드 최소 → 데이터 이동 불필요\n▸ 무중단 → 인스턴스 정지 불필요\n\n【정답 포인트】\ngp2 볼륨 직접 변경 → 인스턴스 재부팅 불필요\n▸ 온라인 진행 → 운영 중 유형 변경 가능\n▸ 스냅샷/복사 불필요 → 최소 운영 오버헤드\n▸ 데이터 손실 없음 → 같은 볼륨 변경\n\n【오답 체크】\n스냅샷→복사 → 임시 스토리지 비용, 시간 소비\n(B) 점진적 데이터 전송 → 수작업, 복잡성\n(D) DataSync → 추가 도구, 전송 오버헤드\n\n【시험 포인트】\n볼륨 유형 변경 = 온라인 지원 (gp2↔gp3)\n무중단 업그레이드 = 최소 운영 오버헤드\n데이터 이동 불필요 = 같은 볼륨의 메타데이터 변경",
    "en_q": "A company is planning to upgrade its Amazon Elastic Block Store (Amazon EBS) General Purpose SSD storage from gp2 to gp3. The company wants to prevent any interruptions in its Amazon EC2 instances that will cause data loss during the migration to the upgraded storage. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create snapshots of the gp2 volumes. Create new gp3 volumes from the snapshots. Attach the new gp3 volumes to the EC2 instances.",
      "B": "Create new gp3 volumes. Gradually transfer the data to the new gp3 volumes. When the transfer is complete, mount the new gp3 volumes to the EC2 instances to replace the gp2 volumes.",
      "C": "Change the volume type of the existing gp2 volumes to gp3. Enter new values for volume size, IOPS, and throughput.",
      "D": "Use AWS DataSync to create new gp3 volumes. Transfer the data from the original gp2 volumes to the new gp3 volumes."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132762-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 39,
    "question": "한 회사가 Microsoft SQL Server를 실행하는 Amazon EC2 인스턴스에서 Microsoft SQL Server용 Amazon RDS DB 인스턴스로 데이터베이스 서버를 마이그레이션하고 있습니다. 회사의 분석팀은 마이그레이션이 완료될 때까지 매일 대용량 데이터 요소를 내보내야 합니다. 데이터 요소는 여러 테이블 간의 SQL 조인 결과입니다. 데이터는 Apache Parquet 형식이어야 합니다. 분석팀은 데이터를 Amazon S3에 저장해야 합니다. 운영 효율이 가장 높은 솔루션은 무엇입니까?",
    "options": {
      "A": "EC2 인스턴스 기반 SQL Server 데이터베이스에 필요한 데이터 요소를 포함하는 뷰를 만듭니다. AWS Glue 작업을 만들어 뷰에서 직접 데이터를 선택하고 Parquet 형식으로 S3 버킷에 전송합니다. 매일 실행하도록 AWS Glue 작업을 예약합니다.",
      "B": "SQL Server Agent를 예약하여 EC2 인스턴스 기반 SQL Server 데이터베이스에서 원하는 데이터 요소를 선택하는 일일 SQL 쿼리를 실행합니다. 쿼리를 구성하여 출력 .csv 객체를 S3 버킷으로 보냅니다. 형식을 .csv에서 Parquet으로 변환하기 위해 AWS Lambda 함수를 호출하는 S3 이벤트를 만듭니다.",
      "C": "SQL 쿼리를 사용하여 EC2 인스턴스 기반 SQL Server 데이터베이스에 필요한 데이터 요소를 포함하는 뷰를 만듭니다. AWS Glue 크롤러를 만들고 실행하여 뷰를 읽습니다. AWS Glue 작업을 만들어 데이터를 검색하고 Parquet 형식으로 S3 버킷에 전송합니다. 매일 실행하도록 AWS Glue 작업을 예약합니다.",
      "D": "AWS Lambda 함수를 만들어 JDBC(Java Database Connectivity)를 사용하여 EC2 인스턴스 기반 데이터베이스를 쿼리합니다. Lambda 함수를 구성하여 필요한 데이터를 검색하고 데이터를 Parquet 형식으로 변환한 다음 S3 버킷으로 전송합니다. Amazon EventBridge를 사용하여 매일 실행하도록 Lambda 함수를 예약합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\nGlue(완전관리형 ETL 서비스), Apache Parquet(컬럼 기반 저장 형식), 운영 효율(Operational Efficiency)\n\n【정답 포인트】\nA가 정답입니다. AWS Glue는 AWS에서 제공하는 완전관리형 ETL 서비스로, SQL Server 데이터베이스에서 직접 뷰를 통해 조인된 데이터에 접근할 수 있으며, Parquet 형식으로의 자동 변환을 지원합니다. EC2 기반 데이터베이스에 조인 결과를 포함하는 뷰를 생성한 후 AWS Glue ETL 작업으로 이 뷰를 직접 쿼리하여 S3로 전송하는 구조는 추가 변환 로직 없이 가장 간단합니다. Glue의 내장 스케줄러로 매일 자동 실행 가능합니다.\n\n【오답 체크】\nSQL Server Agent로 CSV 추출 후 Lambda를 사용하여 Parquet 변환을 진행하므로 복잡하고, CSV에서 Parquet 변환의 성능 오버헤드가 발생합니다. C는 불필요한 Glue 크롤러를 추가하여 실행 시간을 연장하고 추가 비용이 발생합니다. D는 Lambda의 메모리 제약(최대 10GB)과 15분 타임아웃으로 대용량 데이터 처리에 부적합하며, JDBC 연결의 네트워크 오버헤드가 병목입니다.\n\n【시험 포인트】\nGlue는 네이티브 Parquet 지원으로 ETL 파이프라인에 최적화되어 있습니다. 일일 배치 작업의 스케줄링은 Glue의 내장 스케줄러로 처리 가능하며, 빅 데이터 처리의 탄력성과 비용 효율성이 우수합니다. DMS 대안으로도 고려될 수 있는 강력한 솔루션입니다.",
    "en_q": "A company is migrating its database servers from Amazon EC2 instances that run Microsoft SQL Server to Amazon RDS for Microsoft SQL Server DB instances. The company's analytics team must export large data elements every day until the migration is complete. The data elements are the result of SQL joins across multiple tables. The data must be in Apache Parquet format. The analytics team must store the data in Amazon S3. Which solution will meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Create a view in the EC2 instance-based SQL Server databases that contains the required data elements. Create an AWS Glue job that selects the data directly from the view and transfers the data in Parquet format to an S3 bucket. Schedule the AWS Glue job to run every day.",
      "B": "Schedule SQL Server Agent to run a daily SQL query that selects the desired data elements from the EC2 instance-based SQL Server databases. Configure the query to direct the output .csv objects to an S3 bucket. Create an S3 event that invokes an AWS Lambda function to transform the output format from .csv to Parquet.",
      "C": "Use a SQL query to create a view in the EC2 instance-based SQL Server databases that contains the required data elements. Create and run an AWS Glue crawler to read the view. Create an AWS Glue job that retrieves the data and transfers the data in Parquet format to an S3 bucket. Schedule the AWS Glue job to run every day.",
      "D": "Create an AWS Lambda function that queries the EC2 instance-based databases by using Java Database Connectivity (JDBC). Configure the Lambda function to retrieve the required data, transform the data into Parquet format, and transfer the data into an S3 bucket. Use Amazon EventBridge to schedule the Lambda function to run every day."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132742-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 40,
    "question": "데이터 엔지니어링 팀이 운영 보고용으로 Amazon Redshift 데이터 웨어하우스를 사용 중입니다. 팀은 오래 실행되는 쿼리로 인한 성능 문제를 방지하고 싶습니다. 데이터 엔지니어는 Amazon Redshift의 시스템 테이블을 선택하여 쿼리 옵티마이저가 성능 문제를 나타낼 수 있는 조건을 식별할 때 이상 현상을 기록해야 합니다. 어떤 테이블 뷰를 사용해야 합니까?",
    "options": {
      "A": "STL_USAGE_CONTROL",
      "B": "STL_ALERT_EVENT_LOG",
      "C": "STL_QUERY_METRICS",
      "D": "STL_PLAN_INFO"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\non Redshift 시스템 테이블(STL_ALERT_EVENT_LOG), 성능 이상(Performance Anomalies), 쿼리 옵티마이저\n\n【정답 포인트】\nB가 정답입니다. STL_ALERT_EVENT_LOG는 Amazon Redshift의 시스템 테이블로, 쿼리 옵티마이저가 성능 문제를 감지했을 때 경고 이벤트를 자동으로 기록합니다. 누락된 조인 조건, 병렬화 불가능한 연산, 스캔 효율성 저하, 메모리 부족 등 성능 최적화와 관련된 모든 이상 현상을 추적하며, 이를 통해 성능 저하의 근본 원인을 사전에 파악할 수 있습니다.\n\n【오답 체크】\nSTL_USAGE_CONTROL은 리소스 사용률을 제어하고 WLM(Workload Management) 정책을 관리하는 테이블로, 성능 이상 감지와는 무관합니다. C의 STL_QUERY_METRICS는 쿼리 실행 후 메트릭을 기록하지만 경고 이벤트가 아니므로 사전 감지가 불가능합니다. D의 STL_PLAN_INFO는 단순 쿼리 실행 계획만 저장하므로 성능 문제 해석이 어렵습니다.\n\n【시험 포인트】\nhift 모니터링에서 STL_ALERT_EVENT_LOG의 사전 감지 기능이 핵심입니다. 정기적인 모니터링을 통해 성능 저하의 근본 원인(테이블 통계 부재, 부적절한 정렬 키, 누락된 인덱스)을 파악할 수 있으며, 이는 데이터 웨어하우스의 운영 효율을 크게 향상시킵니다.",
    "en_q": "A data engineering team is using an Amazon Redshift data warehouse for operational reporting. The team wants to prevent performance issues that might result from long-running queries. A data engineer must choose a system table in Amazon Redshift to record anomalies when a query optimizer identifies conditions that might indicate performance issues. Which table views should the data engineer use to meet this requirement?",
    "en_opts": {
      "A": "STL_USAGE_CONTROL",
      "B": "STL_ALERT_EVENT_LOG",
      "C": "STL_QUERY_METRICS",
      "D": "STL_PLAN_INFO"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132660-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 41,
    "question": "데이터 엔지니어는 .csv 형식의 정형 데이터를 Amazon S3 데이터 레이크로 수집해야 합니다. .csv 파일에는 15개의 컬럼이 있습니다. 데이터 분석팀은 Amazon Athena를 사용하여 데이터셋의 1~2개 컬럼에만 쿼리를 실행해야 합니다. 분석팀은 거의 전체 파일을 쿼리하지 않습니다. 가장 비용 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue PySpark 작업을 사용하여 .csv 형식으로 데이터를 데이터 레이크로 수집합니다.",
      "B": "AWS Glue ETL 작업을 만들어 .csv 정형 데이터 소스에서 데이터를 읽습니다. JSON 형식으로 데이터 레이크로 수집하도록 작업을 구성합니다.",
      "C": "AWS Glue PySpark 작업을 사용하여 Apache Avro 형식으로 데이터를 데이터 레이크로 수집합니다.",
      "D": "AWS Glue ETL 작업을 만들어 .csv 정형 데이터 소스에서 데이터를 읽습니다. Apache Parquet 형식으로 데이터 레이크에 쓰도록 작업을 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\nhe Parquet(컬럼 기반 저장 형식), 컬럼 프루닝(Column Pruning), Amazon Athena 비용 최적화\n\n【정답 포인트】\nD가 정답입니다. Parquet은 컬럼 기반 저장 형식으로, 필요한 컬럼만 읽을 수 있는 특성이 있습니다. 15개 컬럼 중 1~2개만 쿼리하는 사용 사례에서 Parquet의 컬럼 프루닝 기능으로 Athena 스캔 비용을 85~90% 절감할 수 있습니다. AWS Glue ETL 작업으로 CSV를 Parquet으로 변환하여 저장하면, Athena 쿼리 성능이 비약적으로 개선되고 비용도 극적으로 감소합니다.\n\n【오답 체크】\nCSV 형식은 컬럼 선택 최적화가 불가능하므로 항상 전체 행을 스캔해야 하여 비용이 높습니다. B의 JSON도 행 지향 처리 특성으로 특정 컬럼 필터링 효율이 떨어지며 CSV보다 파일 크기가 큽니다. C의 Apache Avro는 행 기반 직렬화 형식으로 컬럼 프루닝을 지원하지 않으므로 Parquet보다 비효율적입니다.\n\n【시험 포인트】\n레이크 구축에서 저장 형식 선택은 비용과 성능을 좌우하는 결정적 요소입니다. 분석 쿼리 패턴이 특정 컬럼에만 집중하는 경우, Parquet 활용이 비용 최적화의 핵심 전략입니다. Athena의 스캔 비용 모델(GB당 $5 기준)에서 Parquet 사용 시 ROI가 매우 높습니다.",
    "en_q": "A data engineer must ingest a source of structured data that is in .csv format into an Amazon S3 data lake. The .csv files contain 15 columns. Data analysts need to run Amazon Athena queries on one or two columns of the dataset. The data analysts rarely query the entire file. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Use an AWS Glue PySpark job to ingest the source data into the data lake in .csv format.",
      "B": "Create an AWS Glue extract, transform, and load (ETL) job to read from the .csv structured data source. Configure the job to ingest the data into the data lake in JSON format.",
      "C": "Use an AWS Glue PySpark job to ingest the source data into the data lake in Apache Avro format.",
      "D": "Create an AWS Glue extract, transform, and load (ETL) job to read from the .csv structured data source. Configure the job to write the data into the data lake in Apache Parquet format."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132349-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 42,
    "question": "회사는 서로 다른 AWS 리전에 5개의 사무실을 두고 있습니다. 각 사무실은 고유한 IAM 역할을 사용하는 인사(HR) 부서를 운영합니다. 회사는 Amazon S3 저장소 기반 데이터 레이크에 직원 기록을 저장합니다. 데이터 엔지니어링 팀은 기록에 대한 액세스를 제한해야 합니다. 각 HR 부서는 해당 부서의 리전 내 직원 기록에만 액세스할 수 있어야 합니다. 운영 오버헤드를 최소화하면서 요구 사항을 충족하기 위해 데이터 엔지니어링 팀이 취해야 할 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "각 리전의 데이터 필터를 사용하여 S3 경로를 데이터 위치로 등록합니다.",
      "B": "S3 경로를 AWS Lake Formation 위치로 등록합니다.",
      "C": "각 부서의 리전에 대한 데이터 필터를 추가하도록 HR 부서의 IAM 역할을 수정합니다.",
      "D": "AWS Lake Formation에서 세분화된 액세스 제어를 활성화합니다. 각 리전에 대한 데이터 필터를 추가합니다.",
      "E": "각 리전마다 별도의 S3 버킷을 만듭니다. S3 액세스를 허용하도록 IAM 정책을 구성합니다. 리전을 기준으로 액세스를 제한합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\nLake Formation, 세분화된 액세스 제어(Fine-Grained Access Control), 데이터 필터(Data Filters)\n\n【정답 포인트】\nB와 D입니다. S3 경로를 AWS Lake Formation 위치로 등록\n(B) 한 후, Lake Formation의 세분화된 액세스 제어를 활성화\n(D) 하여 리전별 데이터 필터를 설정하면, 중앙 집중식으로 각 IAM 역할의 액세스를 제어할 수 있습니다. 이는 개별 IAM 정책을 수정하지 않고도 Lake Formation 콘솔에서 통합 관리 가능하므로 운영 오버헤드가 최소화됩니다.\n\n【오답 체크】\n필터만 설정하고 위치 등록을 하지 않아 Lake Formation의 거버넌스 체계가 작동하지 않으므로 불완전합니다. C는 각 IAM 역할을 개별적으로 수정해야 하므로 운영 오버헤드가 높고 확장성이 떨어집니다. E는 리전별로 별도의 S3 버킷을 생성 및 관리해야 하므로 관리 복잡도와 운영 비용이 급격히 증가합니다.\n\n【시험 포인트】\nFormation은 데이터 레이크 거버넌스의 핵심 서비스로, 위치 등록과 세분화된 액세스 제어의 조합으로 확장 가능하고 유지보수가 용이한 액세스 관리를 구현합니다. 다중 계정 환경에서의 권한 관리 효율성이 높습니다.",
    "en_q": "A company has five offices in different AWS Regions. Each office has its own human resources (HR) department that uses a unique IAM role. The company stores employee records in a data lake that is based on Amazon S3 storage. A data engineering team needs to limit access to the records. Each HR department should be able to access records for only employees who are within the HR department's Region. Which combination of steps should the data engineering team take to meet this requirement with the LEAST operational overhead? (Choose two.)",
    "en_opts": {
      "A": "Use data filters for each Region to register the S3 paths as data locations.",
      "B": "Register the S3 path as an AWS Lake Formation location.",
      "C": "Modify the IAM roles of the HR departments to add a data filter for each department's Region.",
      "D": "Enable fine-grained access control in AWS Lake Formation. Add a data filter for each Region.",
      "E": "Create a separate S3 bucket for each Region. Configure an IAM policy to allow S3 access. Restrict access based on Region."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132348-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 43,
    "question": "한 회사가 AWS Step Functions를 사용하여 데이터 파이프라인을 오케스트레이션합니다. 파이프라인은 데이터 소스에서 데이터를 수집하고 Amazon S3 버킷에 저장하는 Amazon EMR 작업으로 구성됩니다. 파이프라인에는 데이터를 Amazon Redshift로 로드하는 EMR 작업도 포함됩니다. 회사의 클라우드 인프라 팀이 Step Functions 상태 머신을 수동으로 구축했습니다. 클라우드 인프라 팀이 VPC에 EMR 클러스터를 시작했습니다. 그러나 배포된 Step Functions 상태 머신은 EMR 작업을 실행할 수 없습니다. 회사가 Step Functions 상태 머신이 EMR 작업을 실행할 수 없는 이유를 파악하기 위해 취해야 할 단계 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "AWS CloudFormation을 사용하여 Step Functions 상태 머신 배포를 자동화합니다. EMR 작업이 실패하는 단계 중에 상태 머신을 일시 중지하는 단계를 만듭니다. 단계를 구성하여 이메일 메시지를 통해 인간 사용자로부터 승인을 기다립니다. EMR 작업 세부정보를 이메일 메시지에 포함하여 추가 분석을 수행합니다.",
      "B": "Step Functions 상태 머신 코드에 EMR 작업을 생성하고 실행하는 데 필요한 모든 IAM 권한이 있는지 확인합니다. Step Functions 상태 머신 코드에 EMR 작업이 사용하는 Amazon S3 버킷에 액세스하는 IAM 권한도 있는지 확인합니다. Access Analyzer for S3를 사용하여 S3 액세스 속성을 확인합니다.",
      "C": "새로 생성된 EMR 클러스터에 대해 Amazon CloudWatch의 항목을 확인합니다. AWS Step Functions 상태 머신 코드를 변경하여 Amazon EMR on EKS를 사용합니다. Step Functions 상태 머신 코드의 IAM 액세스 정책과 보안 그룹 구성을 변경하여 Amazon Elastic Kubernetes Service(Amazon EKS) 포함을 반영합니다.",
      "D": "VPC의 흐름 로그를 쿼리합니다. EMR 클러스터에서 시작된 트래픽이 데이터 제공자에 도달할 수 있는지 확인합니다. EMR 클러스터에 연결된 보안 그룹이 데이터 소스 서버와의 연결을 지정된 포트에서 허용하는지 확인합니다.",
      "E": "회사에서 EMR 작업을 위해 구성한 재시도 시나리오를 확인합니다. 각 EMR 작업 간 간격의 초 수를 늘립니다. 각 폴백 상태에 각 결정 상태에 대한 적절한 catch가 있는지 검증합니다. 오류 메시지를 저장하도록 Amazon Simple Notification Service(Amazon SNS) 주제를 구성합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\nStep Functions, IAM 권한(IAM Permissions), VPC 네트워크 보안(Security Groups)\n\n【정답 포인트】\nB와 D입니다. Step Functions가 EMR 작업을 실행하지 못하는 경우 두 가지 핵심 원인을 확인해야 합니다. 첫째, Step Functions의 IAM 역할이 EMR 작업 생성과 S3 버킷 접근 권한을 가져야 하며, Access Analyzer를 활용하여 S3 접근 속성을 검증\n(B) 해야 합니다. 둘째, VPC의 보안 그룹이 EMR 클러스터의 데이터 소스 접근을 허용해야 하며, VPC 흐름 로그를 쿼리하여 네트워크 연결성을 검증\n(D) 해야 합니다.\n\n【오답 체크】\n배포 자동화와 알림 설정으로, 실제 문제 해결보다는 사후 관리에 초점이 있습니다. C는 EMR on EKS로의 아키텍처 변경을 제시하는데, 현재 EMR 환경의 문제 원인을 파악하지 못한 상태에서의 마이그레이션은 적절하지 않습니다. E는 재시도 정책과 SNS 알림 설정으로 근본 원인을 해결하지 못합니다.\n\n【시험 포인트】\n파이프라인 오케스트레이션 문제 해결의 핵심은 IAM 권한 체인과 네트워크 연결성 검증입니다. Access Analyzer와 VPC Flow Logs는 엔드투엔드 디버깅의 필수 도구이며, 이를 통해 체계적인 문제 해결이 가능합니다.",
    "en_q": "A company uses AWS Step Functions to orchestrate a data pipeline. The pipeline consists of Amazon EMR jobs that ingest data from data sources and store the data in an Amazon S3 bucket. The pipeline also includes EMR jobs that load the data to Amazon Redshift. The company's cloud infrastructure team manually built a Step Functions state machine. The cloud infrastructure team launched an EMR cluster into a VPC to support the EMR jobs. However, the deployed Step Functions state machine is not able to run the EMR jobs. Which combination of steps should the company take to identify the reason the Step Functions state machine is not able to run the EMR jobs? (Choose two.)",
    "en_opts": {
      "A": "Use AWS CloudFormation to automate the Step Functions state machine deployment. Create a step to pause the state machine during the EMR jobs that fail. Configure the step to wait for a human user to send approval through an email message. Include details of the EMR task in the email message for further analysis.",
      "B": "Verify that the Step Functions state machine code has all IAM permissions that are necessary to create and run the EMR jobs. Verify that the Step Functions state machine code also includes IAM permissions to access the Amazon S3 buckets that the EMR jobs use. Use Access Analyzer for S3 to check the S3 access properties.",
      "C": "Check for entries in Amazon CloudWatch for the newly created EMR cluster. Change the AWS Step Functions state machine code to use Amazon EMR on EKS. Change the IAM access policies and the security group configuration for the Step Functions state machine code to reflect inclusion of Amazon Elastic Kubernetes Service (Amazon EKS).",
      "D": "Query the flow logs for the VPC. Determine whether the traffic that originates from the EMR cluster can successfully reach the data providers. Determine whether any security group that might be attached to the Amazon EMR cluster allows connections to the data source servers on the informed ports.",
      "E": "Check the retry scenarios that the company configured for the EMR jobs. Increase the number of seconds in the interval between each EMR task. Validate that each fallback state has the appropriate catch for each decision state. Configure an Amazon Simple Notification Service (Amazon SNS) topic to store the error messages."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132353-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 44,
    "question": "한 회사가 Amazon EC2 인스턴스에서 실행되는 애플리케이션을 개발 중입니다. 현재 애플리케이션이 생성하는 데이터는 임시 데이터입니다. 그러나 회사는 EC2 인스턴스가 종료되더라도 데이터를 유지해야 합니다. 데이터 엔지니어는 Amazon Machine Image(AMI)에서 새 EC2 인스턴스를 시작하고 데이터를 보존하도록 인스턴스를 구성해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "애플리케이션 데이터가 포함된 EC2 인스턴스 저장소 볼륨으로 지원되는 AMI를 사용하여 새 EC2 인스턴스를 시작합니다. EC2 인스턴스에 기본 설정을 적용합니다.",
      "B": "애플리케이션 데이터가 포함된 루트 Amazon Elastic Block Store(Amazon EBS) 볼륨으로 지원되는 AMI를 사용하여 새 EC2 인스턴스를 시작합니다. EC2 인스턴스에 기본 설정을 적용합니다.",
      "C": "EC2 인스턴스 저장소 볼륨으로 지원되는 AMI를 사용하여 새 EC2 인스턴스를 시작합니다. 애플리케이션 데이터를 포함하도록 Amazon Elastic Block Store(Amazon EBS) 볼륨을 연결합니다. EC2 인스턴스에 기본 설정을 적용합니다.",
      "D": "Amazon Elastic Block Store(Amazon EBS) 볼륨으로 지원되는 AMI를 사용하여 새 EC2 인스턴스를 시작합니다. 애플리케이션 데이터를 포함하도록 추가 EC2 인스턴스 저장소 볼륨을 연결합니다. EC2 인스턴스에 기본 설정을 적용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\nDatabase Migration Service(DMS), Change Data Capture(CDC), 점진적 마이그레이션(Incremental Migration)\n\n【정답 포인트】\nA와 C입니다. AWS DMS의 CDC 기능으로 초기 전체 로드 이후 증분 변경사항만 캡처하여 전송합니다\n(A) . 마이그레이션 중 지속적인 복제를 지원하려면 DMS 작업의 Ongoing replication 옵션을 활성화하고, 마이그레이션 완료 후 cutover 전까지 데이터 일관성을 검증해야 합니다\n(C) . 이 조합으로 RDS로의 부드럽고 안정적인 전환이 가능하며, 다운타임을 최소화할 수 있습니다.\n\n【오답 체크】\n전체 데이터를 매일 재로드하는 방식으로 비효율적이며, 대량 데이터의 반복 전송으로 네트워크 대역폭을 낭비합니다. D는 기존 복제 인스턴스의 설정이 CDC에 최적화되지 않았을 수 있으므로 신뢰할 수 없습니다. E는 검증 단계를 생략하여 데이터 손실이나 불일치의 위험이 높습니다.\n\n【시험 포인트】\n제로 다운타임 마이그레이션의 핵심 서비스로, CDC를 통한 점진적 복제 전략이 운영 가용성을 보장합니다. 마이그레이션 작업의 배치 설정과 검증 정책이 데이터 무결성 확보의 핵심 요소입니다.",
    "en_q": "A company is developing an application that runs on Amazon EC2 instances. Currently, the data that the application generates is temporary. However, the company needs to persist the data, even if the EC2 instances are terminated. A data engineer must launch new EC2 instances from an Amazon Machine Image (AMI) and configure the instances to preserve the data. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Launch new EC2 instances by using an AMI that is backed by an EC2 instance store volume that contains the application data. Apply the default settings to the EC2 instances.",
      "B": "Launch new EC2 instances by using an AMI that is backed by a root Amazon Elastic Block Store (Amazon EBS) volume that contains the application data. Apply the default settings to the EC2 instances.",
      "C": "Launch new EC2 instances by using an AMI that is backed by an EC2 instance store volume. Attach an Amazon Elastic Block Store (Amazon EBS) volume to contain the application data. Apply the default settings to the EC2 instances.",
      "D": "Launch new EC2 instances by using an AMI that is backed by an Amazon Elastic Block Store (Amazon EBS) volume. Attach an additional EC2 instance store volume to contain the application data. Apply the default settings to the EC2 instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132354-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 45,
    "question": "한 회사가 Amazon Athena를 사용하여 CTAS(Create Table As Select)를 사용한 SQL 쿼리로 ETL 작업을 실행합니다. 회사는 SQL 대신 Apache Spark를 사용하여 분석을 생성해야 합니다. 회사에 Spark로 Athena에 액세스할 수 있는 기능을 제공하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Athena 쿼리 설정",
      "B": "Athena 워크그룹",
      "C": "Athena 데이터 소스",
      "D": "Athena 쿼리 편집기"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\nData Exchange, SaaS 데이터 공급자, AWS Glue 카탈로그 통합\n\n【정답 포인트】\nC가 정답입니다. AWS Data Exchange를 통해 구독한 데이터셋을 AWS Glue 카탈로그에 자동으로 등록할 수 있으며, 이는 데이터 레이크의 메타데이터 관리를 통합합니다. Data Exchange의 자산 연동 기능으로 외부 데이터 공급자의 데이터를 Glue 작업에서 바로 사용할 수 있어 메타데이터 동기화 오버헤드가 없습니다. 공급자의 데이터 업데이트가 자동으로 반영됩니다.\n\n【오답 체크】\n수동 카탈로그 등록으로 메타데이터 갱신이 번거롭고 자동화 수준이 낮습니다. B는 S3 복제본을 별도로 관리해야 하므로 저장소 비용 증가와 데이터 동기화 복잡도가 높습니다. D는 Data Exchange 활용을 생략하여 공급자의 정기 업데이트를 놓칠 수 있고 수동 갱신 부담이 발생합니다.\n\n【시험 포인트】\nData Exchange는 데이터 마켓플레이스 활용 시 Glue 카탈로그와의 통합이 데이터 거버넌스를 단순화합니다. 구독 기반 데이터 활용 모델에서 자동 메타데이터 갱신이 운영 효율과 데이터 신선도를 동시에 향상시킵니다.",
    "en_q": "A company uses Amazon Athena to run SQL queries for extract, transform, and load (ETL) tasks by using Create Table As Select (CTAS). The company must use Apache Spark instead of SQL to generate analytics. Which solution will give the company the ability to use Spark to access Athena?",
    "en_opts": {
      "A": "Athena query settings",
      "B": "Athena workgroup",
      "C": "Athena data source",
      "D": "Athena query editor"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132667-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 46,
    "question": "한 회사가 데이터 레이크에 사용하는 Amazon S3 저장소를 분할해야 합니다. 분할은 s3://bucket/prefix/year=2023/month=01/day=01 형식의 S3 객체 키 경로를 사용합니다. 데이터 엔지니어는 회사에서 버킷에 새로운 파티션을 추가할 때 AWS Glue Data Catalog가 S3 저장소와 동기화되도록 해야 합니다. 가장 낮은 지연 시간으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "매일 아침 AWS Glue 크롤러를 실행하도록 예약합니다.",
      "B": "하루에 두 번 AWS Glue CreatePartition API를 수동으로 실행합니다.",
      "C": "Amazon S3에 데이터를 쓰는 코드가 Boto3 AWS Glue create_partition API 호출을 호출하도록 하세요.",
      "D": "AWS Glue 콘솔에서 MSCK REPAIR TABLE 명령을 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\non Kinesis Data Streams, 실시간 데이터 처리, 온디맨드 용량 모드(On-Demand Capacity Mode)\n\n【정답 포인트】\nB와 D입니다. Kinesis의 온디맨드 용량 모드\n(B) 를 활성화하면 처리량이 급변해도 자동으로 스케일링되어 수동 샤드 관리가 불필요합니다. 실시간 스트림 모니터링을 위해 CloudWatch 메트릭(Iterator Age, GetRecords 레이턴시, 샤드 병목 지표)을 설정하고\n(D) , 이를 기반으로 성능 병목을 식별하고 예방합니다.\n\n【오답 체크】\n프로비저닝 모드는 고정 샤드 수를 수동으로 관리해야 하므로 비효율적입니다. C는 개별 샤드 모니터링보다 전체 스트림의 성능 지표가 더 중요하고 의미 있습니다. E는 재시도 정책 조정으로 근본적인 throughput 부족 문제를 해결하지 못합니다.\n\n【시험 포인트】\nsis의 온디맨드 모드는 변동하는 처리량 대응에 최적화되어 있으며, 용량 계획 부담을 제거합니다. 적절한 CloudWatch 메트릭 모니터링으로 성능 저하를 조기에 감지하는 것이 실시간 데이터 처리의 안정성을 확보하는 핵심입니다.",
    "en_q": "A company needs to partition the Amazon S3 storage that the company uses for a data lake. The partitioning will use a path of the S3 object keys in the following format: s3://bucket/prefix/year=2023/month=01/day=01. A data engineer must ensure that the AWS Glue Data Catalog synchronizes with the S3 storage when the company adds new partitions to the bucket. Which solution will meet these requirements with the LEAST latency?",
    "en_opts": {
      "A": "Schedule an AWS Glue crawler to run every morning.",
      "B": "Manually run the AWS Glue CreatePartition API twice each day.",
      "C": "Use code that writes data to Amazon S3 to invoke the Boto3 AWS Glue create_partition API call.",
      "D": "Run the MSCK REPAIR TABLE command from the AWS Glue console."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132364-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 47,
    "question": "미디어 회사가 소프트웨어-as-a-Service(SaaS) 애플리케이션을 사용하여 타사 도구로 데이터를 수집합니다. 회사는 데이터를 Amazon S3 버킷에 저장해야 합니다. 회사는 Amazon Redshift를 사용하여 데이터를 기반으로 분석을 수행합니다. 운영 오버헤드가 가장 낮은 요구 사항을 충족하는 AWS 서비스 또는 기능은 무엇입니까?",
    "options": {
      "A": "Amazon Managed Streaming for Apache Kafka(Amazon MSK)",
      "B": "Amazon AppFlow",
      "C": "AWS Glue Data Catalog",
      "D": "Amazon Kinesis"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\nhe Spark Adaptive Query Execution, 동적 파티션 프루닝(Dynamic Partition Pruning), 성능 최적화\n\n【정답 포인트】\nA와 C입니다. Spark의 Adaptive Query Execution\n(A) 은 런타임에 통계를 수집하여 실행 계획을 동적으로 최적화하므로, 조인 순서와 브로드캐스트 배포 방식을 자동으로 개선합니다. Dynamic Partition Pruning\n(C) 을 활성화하면 필터 조건 기반으로 불필요한 파티션 스캔을 사전에 제거하여 I/O를 크게 절감합니다.\n\n【오답 체크】\n수동 파티션 관리는 유지보수 부담이 높고 실시간 데이터 분포 변화에 동적으로 응답하지 못합니다. D는 전체 데이터 리샤플링으로 네트워크 오버헤드가 급격히 증가합니다. E는 정렬 최적화만으로는 복잡한 조인 성능 병목을 근본적으로 해결하지 못합니다.\n\n【시험 포인트】\nk의 Adaptive Execution과 Dynamic Partition Pruning은 대규모 데이터 조인 성능 최적화의 핵심 기법입니다. 동적 최적화 활성화는 데이터 분포의 불균형을 자동으로 보정하여 안정적인 성능을 제공합니다.",
    "en_q": "A media company uses software as a service (SaaS) applications to gather data by using third-party tools. The company needs to store the data in an Amazon S3 bucket. The company will use Amazon Redshift to perform analytics based on the data. Which AWS service or feature will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Amazon Managed Streaming for Apache Kafka (Amazon MSK)",
      "B": "Amazon AppFlow",
      "C": "AWS Glue Data Catalog",
      "D": "Amazon Kinesis"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132669-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 48,
    "question": "데이터 엔지니어가 Amazon S3의 판매 데이터를 분석하기 위해 Amazon Athena를 사용하고 있습니다. 데이터 엔지니어는 2023년에 대해 sales_data 테이블에서 여러 제품의 판매액을 검색하는 쿼리를 작성합니다. 그러나 쿼리는 sales_data 테이블의 모든 제품에 대한 결과를 반환하지 않습니다. 데이터 엔지니어는 문제를 해결하기 위해 쿼리를 트러블슈팅해야 합니다. 데이터 엔지니어의 원본 쿼리는 다음과 같습니다: SELECT product_name, sum(sales_amount) FROM sales_data - WHERE year = 2023 - GROUP BY product_name - Athena 쿼리를 수정하여 이러한 요구 사항을 충족하려면 어떻게 해야 합니까?",
    "options": {
      "A": "집계용 sum(sales_amount)을 count(*)로 바꿉니다.",
      "B": "WHERE year = 2023을 WHERE extract(year FROM sales_data) = 2023으로 변경합니다.",
      "C": "GROUP BY 절 후에 HAVING sum(sales_amount) > 0을 추가합니다.",
      "D": "GROUP BY 절을 제거합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\non EMR, 스팟 인스턴스(Spot Instances), 비용 최적화 전략(Cost Optimization Strategy)\n\n【정답 포인트】\nC가 정답입니다. EMR에서 스팟 인스턴스를 활용하면 온디맨드 인스턴스 대비 70~90% 비용 절감이 가능합니다. 마스터 노드는 온디맨드로 유지하여 클러스터 안정성과 상태 정보 보존을 보장하고, 코어 및 태스크 노드는 스팟으로 구성하면 작업 중단 시 데이터 손실 위험을 최소화하면서도 비용을 극적으로 절감할 수 있습니다. 마스터 노드의 온디맨드 유지가 전체 클러스터의 복원력을 확보합니다.\n\n【오답 체크】\n온디맨드 인스턴스만 사용하여 비용 절감 효과가 전혀 없습니다. B는 스팟 인스턴스의 불안정성으로 장시간 배치 작업에 부적합하며 데이터 손실 위험이 높습니다. D는 인스턴스 유형 변경보다 가격 모델(온디맨드 vs 스팟) 선택이 비용에 훨씬 더 큰 영향을 미칩니다. 인스턴스 타입 최적화는 이미 선행되어야 합니다.\n\n【시험 포인트】\n서 스팟 인스턴스 전략은 비용 최적화의 핵심입니다. 마스터-코어-태스크의 세 계층 구조에서 각 계층의 특성에 맞는 용량 모드 선택이 안정성과 경제성을 동시에 달성합니다. 장기 비용 절감 효과가 매우 크며, AWS 베스트 프랙티스의 표준 권장사항입니다.",
    "en_q": "A data engineer is using Amazon Athena to analyze sales data that is in Amazon S3. The data engineer writes a query to retrieve sales amounts for 2023 for several products from a table named sales_data. However, the query does not return results for all of the products that are in the sales_data table. The data engineer needs to troubleshoot the query to resolve the issue. The data engineer's original query is as follows: SELECT product_name, sum(sales_amount) FROM sales_data - WHERE year = 2023 - GROUP BY product_name - How should the data engineer modify the Athena query to meet these requirements?",
    "en_opts": {
      "A": "Replace sum(sales_amount) with count(*) for the aggregation.",
      "B": "Change WHERE year = 2023 to WHERE extract(year FROM sales_data) = 2023.",
      "C": "Add HAVING sum(sales_amount) > 0 after the GROUP BY clause.",
      "D": "Remove the GROUP BY clause."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132672-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 49,
    "question": "데이터 엔지니어가 Amazon S3 버킷의 Apache Parquet 형식 객체에서 데이터를 읽는 일회성 작업이 있습니다. 데이터 엔지니어는 데이터의 한 컬럼만 쿼리해야 합니다. 운영 오버헤드가 가장 낮은 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Lambda 함수를 구성하여 S3 버킷의 데이터를 pandas 데이터프레임에 로드합니다. 데이터프레임에 SQL SELECT 문을 작성하여 필요한 컬럼을 쿼리합니다.",
      "B": "S3 Select를 사용하여 SQL SELECT 문을 작성하고 S3 객체에서 필요한 컬럼을 검색합니다.",
      "C": "AWS Glue DataBrew 프로젝트를 준비하여 S3 객체를 소비하고 필요한 컬럼을 쿼리합니다.",
      "D": "S3 객체에 AWS Glue 크롤러를 실행합니다. Amazon Athena의 SQL SELECT 문을 사용하여 필요한 컬럼을 쿼리합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\nGlue Schema Registry, 데이터 품질 관리, 스키마 진화(Schema Evolution)\n\n【정답 포인트】\nB가 정답입니다. Glue Schema Registry는 스키마 버전 관리와 호환성 검증을 중앙에서 처리하며, 프로듀서와 컨슈머 간의 스키마 일관성을 자동으로 강제합니다. 호환성 검사(backward/forward compatible) 설정으로 스키마 변경 시 기존 데이터와의 호환성을 보장합니다. 직렬화된 데이터에 스키마 레지스트리 ID를 포함시켜 버전 관리를 자동화합니다.\n\n【오답 체크】\n스키마 문제를 Glue Job의 예외 처리로만 관리하여 근본적인 데이터 품질 관리가 불가능합니다. C는 카탈로그에 스키마 메타데이터만 저장하고 호환성 검증을 하지 않으므로 불완전합니다. D는 Glue 크롤러의 자동 스키마 감지로 인한 예상치 못한 스키마 변경과 그에 따른 관리 부작용이 발생합니다.\n\n【시험 포인트】\nSchema Registry는 데이터 품질 관리의 필수 도구로, 다양한 데이터 소스의 스키마 통일성을 보장합니다. 스키마 버전 관리로 마이그레이션 과정에서의 데이터 손상을 사전에 방지하고, 데이터 계약(data contract) 개념을 구현합니다.",
    "en_q": "A data engineer has a one-time task to read data from objects that are in Apache Parquet format in an Amazon S3 bucket. The data engineer needs to query only one column of the data. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Configure an AWS Lambda function to load data from the S3 bucket into a pandas dataframe. Write a SQL SELECT statement on the dataframe to query the required column.",
      "B": "Use S3 Select to write a SQL SELECT statement to retrieve the required column from the S3 objects.",
      "C": "Prepare an AWS Glue DataBrew project to consume the S3 objects and to query the required column.",
      "D": "Run an AWS Glue crawler on the S3 objects. Use a SQL SELECT statement in Amazon Athena to query the required column."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132673-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 50,
    "question": "한 회사가 Amazon Redshift를 데이터 웨어하우스로 사용합니다. 회사는 Amazon Redshift 구체화된 뷰에 대한 새로 고침 일정을 자동화해야 합니다. 가장 적은 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Apache Airflow를 사용하여 구체화된 뷰를 새로 고칩니다.",
      "B": "Amazon Redshift 내의 AWS Lambda 사용자 정의 함수(UDF)를 사용하여 구체화된 뷰를 새로 고칩니다.",
      "C": "Amazon Redshift의 쿼리 편집기 v2를 사용하여 구체화된 뷰를 새로 고칩니다.",
      "D": "AWS Glue 워크플로우를 사용하여 구체화된 뷰를 새로 고칩니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\non Redshift Spectrum, S3 외부 데이터 쿼리, 비용 효율성(Cost-Efficiency)\n\n【정답 포인트】\nA가 정답입니다. Redshift Spectrum을 활용하면 S3에 저장된 콜드 데이터를 Redshift에 로드하지 않고도 직접 쿼리할 수 있습니다. 데이터 이동 비용 없이 S3의 Parquet 파일을 쿼리하고, 필요한 결과만 Redshift로 반환되므로 네트워크 대역폭과 스토리지 비용을 크게 절감할 수 있습니다. 외부 스키마 생성으로 투명한 쿼리 처리가 가능합니다.\n\n【오답 체크】\n데이터를 모두 Redshift로 로드해야 하므로 스토리지 비용과 I/O 오버헤드가 급격히 증가합니다. C는 S3 Select로 단순 필터링만 가능하고 복잡한 분석 쿼리와 조인이 불가능합니다. D는 Glue를 거친 변환 단계가 추가되어 불필요한 처리와 비용이 발생합니다.\n\n【시험 포인트】\nhift Spectrum은 데이터 웨어하우스의 핫/콜드 데이터 분리 아키텍처를 구현합니다. 자주 조회되지 않는 역사 데이터는 S3에 저장하고 필요시에만 쿼리하는 비용 최적화 전략의 핵심 서비스입니다. 장기 데이터 보관 비용을 크게 절감합니다.",
    "en_q": "A company uses Amazon Redshift for its data warehouse. The company must automate refresh schedules for Amazon Redshift materialized views. Which solution will meet this requirement with the LEAST effort?",
    "en_opts": {
      "A": "Use Apache Airflow to refresh the materialized views.",
      "B": "Use an AWS Lambda user-defined function (UDF) within Amazon Redshift to refresh the materialized views.",
      "C": "Use the query editor v2 in Amazon Redshift to refresh the materialized views.",
      "D": "Use an AWS Glue workflow to refresh the materialized views."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132674-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 51,
    "question": "데이터 엔지니어는 AWS Lambda 함수 하나와 AWS Glue 작업 하나로 구성된 데이터 파이프라인을 오케스트레이션해야 합니다. 솔루션은 AWS 서비스와 통합되어야 합니다. 가장 적은 관리 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Step Functions 워크플로우를 사용하고 상태 머신을 포함하도록 구성합니다. Lambda 함수를 먼저 실행하고 AWS Glue 작업을 실행하도록 상태 머신을 구성합니다.",
      "B": "Amazon EC2 인스턴스에 배포된 Apache Airflow 워크플로우를 사용합니다. Lambda 함수를 호출하는 첫 번째 작업과 AWS Glue 작업을 호출하는 두 번째 작업이 있는 DAG(방향성 비순환 그래프)를 정의합니다.",
      "C": "AWS Glue 워크플로우를 사용하여 Lambda 함수를 실행한 후 AWS Glue 작업을 실행합니다.",
      "D": "Amazon Elastic Kubernetes Service(Amazon EKS)에 배포된 Apache Airflow 워크플로우를 사용합니다. Lambda 함수를 호출하는 첫 번째 작업과 AWS Glue 작업을 호출하는 두 번째 작업이 있는 DAG(방향성 비순환 그래프)를 정의합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Step Functions—워크플로우 오케스트레이션, 상태 머신 /\n\n【정답 포인트】\n▸ AWS Step Functions으로 Lambda→Glue 순차 실행 구성 가능 /\n\n【오답 체크】\n(B) EC2 Airflow—자체 관리 오버헤드 높음 / \n(C) Glue 워크플로우—Lambda 통합 미지원 / \n(D) EKS Airflow—K8s 관리 복잡성 /\n\n【시험 포인트】\n▸ 최소 관리: 완전 관리형 서비스(Step Functions) 선택",
    "en_q": "A data engineer must orchestrate a data pipeline that consists of one AWS Lambda function and one AWS Glue job. The solution must integrate with AWS services. Which solution will meet these requirements with the LEAST management overhead?",
    "en_opts": {
      "A": "Use an AWS Step Functions workflow that includes a state machine. Configure the state machine to run the Lambda function and then the AWS Glue job.",
      "B": "Use an Apache Airflow workflow that is deployed on an Amazon EC2 instance. Define a directed acyclic graph (DAG) in which the first task is to call the Lambda function and the second task is to call the AWS Glue job.",
      "C": "Use an AWS Glue workflow to run the Lambda function and then the AWS Glue job.",
      "D": "Use an Apache Airflow workflow that is deployed on Amazon Elastic Kubernetes Service (Amazon EKS). Define a directed acyclic graph (DAG) in which the first task is to call the Lambda function and the second task is to call the AWS Glue job."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132676-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 52,
    "question": "한 회사가 AWS 클라우드에서 실행되는 데이터 소스에 대한 데이터 카탈로그와 메타데이터 관리를 설정해야 합니다. 회사는 데이터 카탈로그를 사용하여 데이터 저장소 집합의 모든 객체 메타데이터를 유지해야 합니다. 데이터 저장소에는 Amazon RDS 및 Amazon Redshift와 같은 정형 소스가 포함됩니다. 데이터 저장소에는 Amazon S3에 저장된 JSON 파일 및 .xml 파일과 같은 반정형 소스도 포함됩니다. 회사는 데이터 카탈로그를 정기적으로 업데이트하는 솔루션이 필요합니다. 솔루션은 원본 메타데이터 변경도 감지해야 합니다. 운영 오버헤드가 가장 낮은 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Aurora를 데이터 카탈로그로 사용합니다. 데이터 카탈로그에 연결할 AWS Lambda 함수를 만듭니다. Lambda 함수를 구성하여 여러 소스에서 메타데이터 정보를 수집하고 Aurora 데이터 카탈로그를 업데이트합니다. Lambda 함수를 주기적으로 실행하도록 예약합니다.",
      "B": "AWS Glue Data Catalog를 중앙 메타데이터 저장소로 사용합니다. AWS Glue 크롤러를 사용하여 여러 데이터 저장소에 연결하고 메타데이터 변경 사항으로 Data Catalog를 업데이트합니다. 크롤러를 주기적으로 실행하도록 예약하여 메타데이터 카탈로그를 업데이트합니다.",
      "C": "Amazon DynamoDB를 데이터 카탈로그로 사용합니다. 데이터 카탈로그에 연결할 AWS Lambda 함수를 만듭니다. Lambda 함수를 구성하여 여러 소스에서 메타데이터 정보를 수집하고 DynamoDB 데이터 카탈로그를 업데이트합니다. Lambda 함수를 주기적으로 실행하도록 예약합니다.",
      "D": "AWS Glue Data Catalog를 중앙 메타데이터 저장소로 사용합니다. Amazon RDS 및 Amazon Redshift 소스에 대한 스키마를 추출하고 Data Catalog를 빌드합니다. Amazon S3의 데이터에 AWS Glue 크롤러를 사용하여 스키마를 추론하고 Data Catalog를 자동으로 업데이트합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue Data Catalog—중앙 메타데이터 저장소 /\n▸ 크롤러—자동 스키마 감지 /\n\n【정답 포인트】\n▸ Glue Catalog + 크롤러로 RDS/S3/Redshift 메타데이터 자동 수집 /\n▸ 정기 실행으로 변경사항 지속 추적 /\n\n【오답 체크】\n(A) Aurora—메타데이터 전용 DB, 자동 수집 불가 / \n(C) DynamoDB—불완전한 메타데이터 관리 / \n(D) 수동 연결—스키마 변경 감지 미약 /\n\n【시험 포인트】\n▸ 다중 소스 메타데이터 통합 = Glue Catalog + 크롤러",
    "en_q": "A company needs to set up a data catalog and metadata management for data sources that run in the AWS Cloud. The company will use the data catalog to maintain the metadata of all the objects that are in a set of data stores. The data stores include structured sources such as Amazon RDS and Amazon Redshift. The data stores also include semistructured sources such as JSON files and .xml files that are stored in Amazon S3. The company needs a solution that will update the data catalog on a regular basis. The solution also must detect changes to the source metadata. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon Aurora as the data catalog. Create AWS Lambda functions that will connect to the data catalog. Configure the Lambda functions to gather the metadata information from multiple sources and to update the Aurora data catalog. Schedule the Lambda functions to run periodically.",
      "B": "Use the AWS Glue Data Catalog as the central metadata repository. Use AWS Glue crawlers to connect to multiple data stores and to update the Data Catalog with metadata changes. Schedule the crawlers to run periodically to update the metadata catalog.",
      "C": "Use Amazon DynamoDB as the data catalog. Create AWS Lambda functions that will connect to the data catalog. Configure the Lambda functions to gather the metadata information from multiple sources and to update the DynamoDB data catalog. Schedule the Lambda functions to run periodically.",
      "D": "Use the AWS Glue Data Catalog as the central metadata repository. Extract the schema for Amazon RDS and Amazon Redshift sources, and build the Data Catalog. Use AWS Glue crawlers for data that is in Amazon S3 to infer the schema and to automatically update the Data Catalog."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132677-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 53,
    "question": "한 회사가 프로비저닝된 용량 모드로 작동하는 Amazon DynamoDB 테이블에서 애플리케이션 데이터를 저장합니다. 애플리케이션의 워크로드는 정기적인 일정에 예측 가능한 처리량을 가집니다. 매주 월요일에 아침 일찍 활동이 급격히 증가합니다. 애플리케이션은 주말 동안 매우 낮은 사용량을 가집니다. 회사는 피크 사용 시간 동안 애플리케이션이 일관되게 수행되도록 해야 합니다. 가장 비용 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "현재 피크 로드 시간 동안 존재하는 최대 용량으로 프로비저닝된 용량을 늘립니다.",
      "B": "테이블을 두 개로 나눕니다. 각 테이블을 원본 테이블의 프로비저닝된 용량의 절반으로 프로비저닝합니다. 두 테이블 전체에 균등하게 쿼리를 분산시킵니다.",
      "C": "AWS Application Auto Scaling을 사용하여 피크 사용 시간에 더 높은 프로비저닝된 용량을 예약합니다. 비피크 시간 동안 낮은 용량을 예약합니다.",
      "D": "용량 모드를 프로비저닝됨에서 온디맨드로 변경합니다. 테이블의 로드를 기반으로 테이블을 확장 및 축소하도록 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Application Auto Scaling—자동 용량 조정 /\n▸ 예약된 용량—예측 가능한 피크 시간 대응 /\n\n【정답 포인트】\n▸ 월요일 아침 피크, 주말 저사용 패턴 예측 가능 /\n▸ Auto Scaling으로 피크 시간 용량 증가, 비피크 시간 감소 /\n▸ 비용 최적화: 필요한 만큼만 프로비저닝 /\n\n【오답 체크】\n(A) 최대값으로 항상 유지—주말 낭비 / \n(B) 테이블 분할—분산 복잡성 / \n(D) 온디맨드—예측 가능 워크로드에 비용 높음 /\n\n【시험 포인트】\n▸ 규칙적 패턴 = Auto Scaling 최적",
    "en_q": "A company stores data from an application in an Amazon DynamoDB table that operates in provisioned capacity mode. The workloads of the application have predictable throughput load on a regular schedule. Every Monday, there is an immediate increase in activity early in the morning. The application has very low usage during weekends. The company must ensure that the application performs consistently during peak usage times. Which solution will meet these requirements in the MOST cost-effective way?",
    "en_opts": {
      "A": "Increase the provisioned capacity to the maximum capacity that is currently present during peak load times.",
      "B": "Divide the table into two tables. Provision each table with half of the provisioned capacity of the original table. Spread queries evenly across both tables.",
      "C": "Use AWS Application Auto Scaling to schedule higher provisioned capacity for peak usage times. Schedule lower capacity during off-peak times.",
      "D": "Change the capacity mode from provisioned to on-demand. Configure the table to scale up and scale down based on the load on the table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132678-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 54,
    "question": "한 회사가 온프레미스 Apache Hadoop 클러스터를 Amazon EMR로 마이그레이션할 계획입니다. 회사는 또한 데이터 카탈로그를 영구 저장소 솔루션으로 마이그레이션해야 합니다. 회사는 현재 Hadoop 클러스터의 온프레미스 Apache Hive 메타스토어에 데이터 카탈로그를 저장합니다. 회사는 데이터 카탈로그를 마이그레이션하기 위한 serverless 솔루션을 필요로 합니다. 이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Database Migration Service(AWS DMS)를 사용하여 Hive 메타스토어를 Amazon S3로 마이그레이션합니다. AWS Glue Data Catalog를 구성하여 Amazon S3를 스캔하여 데이터 카탈로그를 생성합니다.",
      "B": "Amazon EMR에서 Hive 메타스토어를 구성합니다. 기존 온프레미스 Hive 메타스토어를 Amazon EMR로 마이그레이션합니다. AWS Glue Data Catalog를 사용하여 회사의 데이터 카탈로그를 외부 데이터 카탈로그로 저장합니다.",
      "C": "Amazon EMR에서 외부 Hive 메타스토어를 구성합니다. 기존 온프레미스 Hive 메타스토어를 Amazon EMR로 마이그레이션합니다. Amazon Aurora MySQL을 사용하여 회사의 데이터 카탈로그를 저장합니다.",
      "D": "Amazon EMR에서 새 Hive 메타스토어를 구성합니다. 기존 온프레미스 Hive 메타스토어를 Amazon EMR로 마이그레이션합니다. 새 메타스토어를 회사의 데이터 카탈로그로 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue Data Catalog—serverless 메타데이터 저장소 /\n▸ Hive 메타스토어 마이그레이션 /\n\n【정답 포인트】\n▸ Glue Catalog는 Hive 메타스토어 직접 통합 가능 /\n▸ EMR과 연동으로 Hive 메타데이터 자동 연결 /\n▸ Serverless 솔루션으로 비용 효율적 /\n\n【오답 체크】\n(A) DMS+크롤러—간접 마이그레이션으로 복잡 / \n(C) Aurora—RDBMS 메타스토어, 자동 통합 미약 / \n(D) EMR 내부 메타스토어—외부 공유 제한 /\n\n【시험 포인트】\n▸ Hive→Glue 마이그레이션 = Glue Catalog 직접 지원",
    "en_q": "A company is planning to migrate on-premises Apache Hadoop clusters to Amazon EMR. The company also needs to migrate a data catalog into a persistent storage solution. The company currently stores the data catalog in an on-premises Apache Hive metastore on the Hadoop clusters. The company requires a serverless solution to migrate the data catalog. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Use AWS Database Migration Service (AWS DMS) to migrate the Hive metastore into Amazon S3. Configure AWS Glue Data Catalog to scan Amazon S3 to produce the data catalog.",
      "B": "Configure a Hive metastore in Amazon EMR. Migrate the existing on-premises Hive metastore into Amazon EMR. Use AWS Glue Data Catalog to store the company's data catalog as an external data catalog.",
      "C": "Configure an external Hive metastore in Amazon EMR. Migrate the existing on-premises Hive metastore into Amazon EMR. Use Amazon Aurora MySQL to store the company's data catalog.",
      "D": "Configure a new Hive metastore in Amazon EMR. Migrate the existing on-premises Hive metastore into Amazon EMR. Use the new metastore as the company's data catalog."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132680-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 55,
    "question": "한 회사가 Amazon Redshift 프로비저닝된 클러스터를 데이터베이스로 사용합니다. Redshift 클러스터에는 5개의 예약된 ra3.4xlarge 노드가 있고 키 분산을 사용합니다. 데이터 엔지니어는 노드 중 하나가 자주 90% 이상의 CPU 로드를 가지고 있음을 알았습니다. 노드에서 실행되는 SQL 쿼리가 대기 중입니다. 나머지 4개 노드는 일반적으로 일일 작업 중 CPU 로드가 15% 미만입니다. 데이터 엔지니어는 현재 컴퓨팅 노드 수를 유지하고 싶습니다. 데이터 엔지니어는 또한 5개의 컴퓨팅 노드 모두에 부하를 더 균등하게 분산시키고 싶습니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "정렬 키를 SQL SELECT 문의 WHERE 절에서 가장 자주 사용되는 데이터 컬럼으로 변경합니다.",
      "B": "분산 키를 가장 큰 차원을 가진 테이블 컬럼으로 변경합니다.",
      "C": "예약된 노드를 ra3.4xlarge에서 ra3.16xlarge로 업그레이드합니다.",
      "D": "기본 키를 SQL SELECT 문의 WHERE 절에서 가장 자주 사용되는 데이터 컬럼으로 변경합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Redshift 분산 키—데이터 분산 방식 /\n▸ 키 선택 불균형—노드 간 부하 편차 /\n\n【정답 포인트】\n▸ 현재 키 분산이 한 노드에 집중 → 큰 차원 테이블 컬럼으로 변경 /\n▸ 균등 분산으로 모든 노드 부하 분산 /\n▸ 컴퓨팅 노드 수 유지 조건 충족 /\n\n【오답 체크】\n(A) 정렬 키—쿼리 성능용, 분산 미관련 / \n(C) 노드 업그레이드—비용 증가, 근본 해결 아님 / \n(D) 기본 키—분산 키 변경 불가 /\n\n【시험 포인트】\n▸ 분산 불균형 = 분산 키 재선택(대차원 컬럼)",
    "en_q": "A company uses an Amazon Redshift provisioned cluster as its database. The Redshift cluster has five reserved ra3.4xlarge nodes and uses key distribution. A data engineer notices that one of the nodes frequently has a CPU load over 90%. SQL Queries that run on the node are queued. The other four nodes usually have a CPU load under 15% during daily operations. The data engineer wants to maintain the current number of compute nodes. The data engineer also wants to balance the load more evenly across all five compute nodes. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Change the sort key to be the data column that is most often used in a WHERE clause of the SQL SELECT statement.",
      "B": "Change the distribution key to the table column that has the largest dimension.",
      "C": "Upgrade the reserved node from ra3.4xlarge to ra3.16xlarge.",
      "D": "Change the primary key to be the data column that is most often used in a WHERE clause of the SQL SELECT statement."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132681-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 56,
    "question": "한 보안 회사가 Amazon S3 버킷에 JSON 형식의 IoT 데이터를 저장합니다. 회사가 IoT 장치를 업그레이드할 때 데이터 구조가 변경될 수 있습니다. 회사는 IoT 데이터를 포함하는 데이터 카탈로그를 만들고 싶어합니다. 회사의 분석 부서는 데이터 카탈로그를 사용하여 데이터를 인덱싱합니다. 가장 비용 효율적으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue Data Catalog를 만듭니다. AWS Glue Schema Registry를 구성합니다. 분석 부서가 사용할 데이터를 Amazon Redshift Serverless로 수집하도록 새로운 AWS Glue 워크로드를 만듭니다.",
      "B": "Amazon Redshift 프로비저닝된 클러스터를 만듭니다. 분석 부서가 Amazon S3의 데이터를 탐색하도록 Amazon Redshift Spectrum 데이터베이스를 만듭니다. Redshift 저장 프로시저를 만들어 데이터를 Amazon Redshift로 로드합니다.",
      "C": "Amazon Athena 워크그룹을 만듭니다. Athena를 통해 Apache Spark를 사용하여 Amazon S3의 데이터를 탐색합니다. 분석 부서에 Athena 워크그룹 스키마 및 테이블을 제공합니다.",
      "D": "AWS Glue Data Catalog를 만듭니다. AWS Glue Schema Registry를 구성합니다. Amazon Redshift Data API를 사용하여 AWS Lambda 사용자 정의 함수(UDF)를 만듭니다. 분석 부서가 사용할 데이터를 Amazon Redshift Serverless로 수집하도록 AWS Step Functions 작업을 만듭니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Glue Data Catalog—IoT 데이터 카탈로그 /\n▸ AWS Glue Schema Registry—스키마 버전 관리 /\n\n【정답 포인트】\n▸ Glue Catalog로 메타데이터 등록 + 분석 부서 인덱싱 지원 /\n▸ Schema Registry로 변경되는 IoT 데이터 구조 추적 /\n▸ Redshift Serverless로 경제적 분석 환경 제공 /\n\n【오답 체크】\n(B) Redshift Spectrum—프로비저닝 비용 증가 / \n(C) Athena+Spark—추가 운영 복잡도 / \n(D) Lambda UDF—과도한 복잡성 /\n\n【시험 포인트】\n▸ 변경 가능한 구조 = Schema Registry 필수",
    "en_q": "A security company stores IoT data that is in JSON format in an Amazon S3 bucket. The data structure can change when the company upgrades the IoT devices. The company wants to create a data catalog that includes the IoT data. The company's analytics department will use the data catalog to index the data. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Create an AWS Glue Data Catalog. Configure an AWS Glue Schema Registry. Create a new AWS Glue workload to orchestrate the ingestion of the data that the analytics department will use into Amazon Redshift Serverless.",
      "B": "Create an Amazon Redshift provisioned cluster. Create an Amazon Redshift Spectrum database for the analytics department to explore the data that is in Amazon S3. Create Redshift stored procedures to load the data into Amazon Redshift.",
      "C": "Create an Amazon Athena workgroup. Explore the data that is in Amazon S3 by using Apache Spark through Athena. Provide the Athena workgroup schema and tables to the analytics department.",
      "D": "Create an AWS Glue Data Catalog. Configure an AWS Glue Schema Registry. Create AWS Lambda user defined functions (UDFs) by using the Amazon Redshift Data API. Create an AWS Step Functions job to orchestrate the ingestion of the data that the analytics department will use into Amazon Redshift Serverless."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132683-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 57,
    "question": "한 회사가 거래 세부정보를 Amazon S3 버킷에 저장합니다. 회사는 다른 Amazon S3 버킷에 거래 버킷에 대한 모든 쓰기를 로깅하려고 합니다. 두 버킷은 같은 AWS 리전에 있습니다. 운영 노력을 최소화하면서 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "거래 S3 버킷의 모든 활동에 대해 S3 이벤트 알림 규칙을 구성합니다. AWS Lambda 함수를 호출합니다. Lambda 함수를 프로그래밍하여 이벤트를 Amazon Kinesis Data Firehose에 씁니다. Kinesis Data Firehose를 구성하여 로그 S3 버킷에 이벤트를 씁니다.",
      "B": "AWS CloudTrail에서 관리 이벤트의 추적을 만듭니다. 거래 S3 버킷에서 데이터를 수신하도록 추적을 구성합니다. 빈 접두사와 쓰기 전용 이벤트를 지정합니다. 로그 S3 버킷을 대상 버킷으로 지정합니다.",
      "C": "거래 S3 버킷의 모든 활동에 대해 S3 이벤트 알림 규칙을 구성합니다. AWS Lambda 함수를 호출합니다. Lambda 함수를 프로그래밍하여 이벤트를 로그 S3 버킷에 씁니다.",
      "D": "AWS CloudTrail에서 데이터 이벤트의 추적을 만듭니다. 거래 S3 버킷에서 데이터를 수신하도록 추적을 구성합니다. 빈 접두사와 쓰기 전용 이벤트를 지정합니다. 로그 S3 버킷을 대상 버킷으로 지정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ CloudTrail 데이터 이벤트—S3 객체 수준 활동 로깅 /\n▸ 쓰기 필터링—PUT 작업만 기록 /\n\n【정답 포인트】\n▸ CloudTrail의 데이터 이벤트로 S3 쓰기 작업 자동 로깅 /\n▸ 로그 S3 버킷으로 직접 전달 가능 /\n▸ 관리 오버헤드 최소 (설정만으로 자동 실행) /\n\n【오답 체크】\n(A) S3 이벤트+Lambda+Firehose—과도한 복잡성 / \n(B) CloudTrail 관리 이벤트—S3 쓰기 추적 미약 / \n(C) Lambda만—비용 증가, 자동화 부족 /\n\n【시험 포인트】\n▸ S3 쓰기 로깅 = CloudTrail 데이터 이벤트",
    "en_q": "A company stores details about transactions in an Amazon S3 bucket. The company wants to log all writes to the S3 bucket into another S3 bucket that is in the same AWS Region. Which solution will meet this requirement with the LEAST operational effort?",
    "en_opts": {
      "A": "Configure an S3 Event Notifications rule for all activities on the transactions S3 bucket to invoke an AWS Lambda function. Program the Lambda function to write the event to Amazon Kinesis Data Firehose. Configure Kinesis Data Firehose to write the event to the logs S3 bucket.",
      "B": "Create a trail of management events in AWS CloudTraiL. Configure the trail to receive data from the transactions S3 bucket. Specify an empty prefix and write-only events. Specify the logs S3 bucket as the destination bucket.",
      "C": "Configure an S3 Event Notifications rule for all activities on the transactions S3 bucket to invoke an AWS Lambda function. Program the Lambda function to write the events to the logs S3 bucket.",
      "D": "Create a trail of data events in AWS CloudTraiL. Configure the trail to receive data from the transactions S3 bucket. Specify an empty prefix and write-only events. Specify the logs S3 bucket as the destination bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132684-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 58,
    "question": "데이터 엔지니어가 Amazon EMR과 Amazon Athena 쿼리를 통해 사용자가 접근하는 중앙 메타데이터 저장소를 유지해야 합니다. 저장소는 많은 테이블의 스키마와 속성을 제공해야 합니다. 일부 메타데이터는 Apache Hive에 저장되어 있습니다. 데이터 엔지니어는 Hive의 메타데이터를 중앙 메타데이터 저장소로 가져와야 합니다. 최소 개발 노력으로 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EMR과 Apache Ranger를 사용합니다.",
      "B": "EMR 클러스터의 Hive metastore를 사용합니다.",
      "C": "AWS Glue Data Catalog를 사용합니다.",
      "D": "Amazon RDS for MySQL DB 인스턴스의 metastore를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Glue Data Catalog—중앙 메타데이터 저장소 /\n▸ EMR+Athena 다중 쿼리 엔진 통합 /\n\n【정답 포인트】\n▸ Glue Catalog는 Hive 메타데이터 자동 수집 가능 /\n▸ EMR Hive와 Athena 모두 Glue Catalog 사용 가능 /\n▸ 개발 노력 최소 (크롤러 기능) /\n\n【오답 체크】\n(A) Ranger—접근 제어 도구, 메타데이터 저장소 아님 / \n(B) EMR Hive metastore—외부 엔진 통합 제한 / \n(D) RDS—메타데이터 자동 수집 불가 /\n\n【시험 포인트】\n▸ 다중 엔진 메타데이터 = Glue Catalog",
    "en_q": "A data engineer needs to maintain a central metadata repository that users access through Amazon EMR and Amazon Athena queries. The repository needs to provide the schema and properties of many tables. Some of the metadata is stored in Apache Hive. The data engineer needs to import the metadata from Hive into the central metadata repository. Which solution will meet these requirements with the LEAST development effort?",
    "en_opts": {
      "A": "Use Amazon EMR and Apache Ranger.",
      "B": "Use a Hive metastore on an EMR cluster.",
      "C": "Use the AWS Glue Data Catalog.",
      "D": "Use a metastore on an Amazon RDS for MySQL DB instance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132685-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 59,
    "question": "회사가 AWS에서 데이터 레이크를 구축해야 합니다. 회사는 특정 팀에 행 수준 및 열 수준 데이터 접근을 제공해야 합니다. 팀은 Amazon Athena, Amazon Redshift Spectrum, Amazon EMR의 Apache Hive를 사용하여 데이터에 접근합니다. 최소 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터 레이크 스토리지로 Amazon S3를 사용합니다. S3 접근 정책을 사용하여 행과 열 단위 접근을 제한합니다. Amazon S3를 통한 데이터 접근을 제공합니다.",
      "B": "데이터 레이크 스토리지로 Amazon S3를 사용합니다. Amazon EMR을 통해 Apache Ranger를 사용하여 행과 열 단위 접근을 제한합니다. Apache Pig를 사용한 데이터 접근을 제공합니다.",
      "C": "데이터 레이크 스토리지로 Amazon Redshift를 사용합니다. Redshift 보안 정책을 사용하여 행과 열 단위 접근을 제한합니다. Apache Spark와 Amazon Athena 연합 쿼리를 사용한 데이터 접근을 제공합니다.",
      "D": "데이터 레이크 스토리지로 Amazon S3를 사용합니다. AWS Lake Formation을 사용하여 행과 열 단위 접근을 제한합니다. AWS Lake Formation을 통한 데이터 접근을 제공합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Lake Formation—행/열 수준 접근 제어 /\n▸ 데이터 필터—세분화된 PII 마스킹 /\n\n【정답 포인트】\n▸ Lake Formation은 Athena/Spectrum/Hive 모두 지원 /\n▸ 행/열 수준 필터링 자동 적용 /\n▸ 운영 오버헤드 최소 (기본 제공 기능) /\n\n【오답 체크】\n(A) S3 정책—객체 수준만, 행/열 불가 / \n(B) Ranger—EMR 전용, 외부 엔진 미지원 / \n(C) Redshift—데이터 레이크 아님 /\n\n【시험 포인트】\n▸ S3 데이터 레이크 + 행/열 제어 = Lake Formation",
    "en_q": "A company needs to build a data lake in AWS. The company must provide row-level data access and column-level data access to specific teams. The teams will access the data by using Amazon Athena, Amazon Redshift Spectrum, and Apache Hive from Amazon EMR. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon S3 for data lake storage. Use S3 access policies to restrict data access by rows and columns. Provide data access through Amazon S3.",
      "B": "Use Amazon S3 for data lake storage. Use Apache Ranger through Amazon EMR to restrict data access by rows and columns. Provide data access by using Apache Pig.",
      "C": "Use Amazon Redshift for data lake storage. Use Redshift security policies to restrict data access by rows and columns. Provide data access by using Apache Spark and Amazon Athena federated queries.",
      "D": "Use Amazon S3 for data lake storage. Use AWS Lake Formation to restrict data access by rows and columns. Provide data access through AWS Lake Formation."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132686-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 60,
    "question": "항공사가 항공편 활동에 대한 메트릭스를 분석용으로 수집하고 있습니다. 회사는 분석이 정시 출발 증대에 사용할 수 있는 인사이트를 제공하는 방법을 보여주기 위해 개념 증명(POC) 테스트를 수행 중입니다. POC 테스트는 .csv 형식 메트릭스를 포함하는 Amazon S3의 객체를 사용하며, Amazon Athena를 사용하여 데이터를 쿼리합니다. 데이터는 S3 버킷에서 날짜별로 파티션됩니다. 데이터량이 증가하면서 회사는 쿼리 성능을 개선하기 위해 스토리지 솔루션을 최적화하고 싶습니다. 이 요구 사항을 충족하는 솔루션의 조합은 무엇입니까? (둘 선택)",
    "options": {
      "A": "Amazon S3의 키 시작 부분에 무작위 문자열을 추가하여 파티션 전체에서 더 많은 처리량을 얻습니다.",
      "B": "Athena를 사용하여 쿼리하는 동일 계정의 S3 버킷을 사용합니다.",
      "C": "Athena 쿼리를 실행하는 동일한 AWS 리전의 S3 버킷을 사용합니다.",
      "D": "필요한 문서 키만 가져오기 위해 .csv 데이터를 JSON 형식으로 전처리합니다.",
      "E": "필요한 데이터 블록만 가져오기 위해 .csv 데이터를 Apache Parquet 형식으로 전처리합니다."
    },
    "answer": "CE",
    "explanation": "【핵심 용어】\n▸ Parquet 형식—컬럼 선택적 읽기 /\n▸ 지역 배치—네트워크 지연시간 제거 /\n\n【정답 포인트】\n(C) 같은 리전 S3 배치 → 네트워크 비용/지연시간 제거 / \n(E) Parquet 형식 → 필요한 컬럼만 읽기, 데이터 전송량 감소 /\n▸ 두 가지 조합으로 쿼리 성능 극대화 /\n\n【오답 체크】\n(A) 무작위 프리픽스—처리량 증대, 쿼리 성능 미향상 / \n(B) 같은 계정—기본 요구사항 / \n(D) JSON—텍스트 형식, 선택적 읽기 불가 /\n\n【시험 포인트】\n▸ Athena 성능 = 지역 배치 + Parquet",
    "en_q": "An airline company is collecting metrics about flight activities for analytics. The company is conducting a proof of concept (POC) test to show how analytics can provide insights that the company can use to increase on-time departures. The POC test uses objects in Amazon S3 that contain the metrics in .csv format. The POC test uses Amazon Athena to query the data. The data is partitioned in the S3 bucket by date. As the amount of data increases, the company wants to optimize the storage solution to improve query performance. Which combination of solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Add a randomized string to the beginning of the keys in Amazon S3 to get more throughput across partitions.",
      "B": "Use an S3 bucket that is in the same account that uses Athena to query the data.",
      "C": "Use an S3 bucket that is in the same AWS Region where the company runs Athena queries.",
      "D": "Preprocess the .csv data to JSON format by fetching only the document keys that the query requires.",
      "E": "Preprocess the .csv data to Apache Parquet format by fetching only the data blocks that are needed for predicates."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132687-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 61,
    "question": "회사가 주요 애플리케이션의 데이터베이스로 Amazon RDS for MySQL을 사용합니다. 데이터베이스 워크로드는 대부분 쓰기이며 읽기는 적습니다. 데이터 엔지니어가 DB 인스턴스의 CPU 사용률이 매우 높음을 알아냅니다. 높은 CPU 사용률이 애플리케이션 속도를 저하시킵니다. 데이터 엔지니어는 DB 인스턴스의 CPU 사용률을 줄여야 합니다. 요구 사항을 충족하기 위해 데이터 엔지니어가 취해야 할 조치는 무엇입니까? (둘 선택)",
    "options": {
      "A": "Amazon RDS의 Performance Insights 기능을 사용하여 높은 CPU 사용률을 가진 쿼리를 식별합니다. 문제 쿼리를 최적화합니다.",
      "B": "데이터베이스 스키마를 수정하여 추가 테이블과 인덱스를 포함시킵니다.",
      "C": "매주 한 번씩 RDS DB 인스턴스를 재부팅합니다.",
      "D": "더 큰 인스턴스 크기로 업그레이드합니다.",
      "E": "데이터베이스 쿼리 부하를 줄이기 위해 캐싱을 구현합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ RDS Performance Insights—병목 쿼리 식별 /\n▸ 쿼리 최적화—CPU 사용률 감소 /\n\n【정답 포인트】\n(A) Performance Insights로 높은 CPU 쿼리 식별→최적화 / \n(D) 더 큰 인스턴스 업그레이드 → CPU 처리량 증대 /\n▸ 두 가지 병렬 적용: 쿼리 효율성 + 리소스 증대 /\n\n【오답 체크】\n(B) 인덱스 추가—쓰기 성능 저하 / \n(C) 재부팅—캐시 초기화, 성능 악화 / \n(E) 캐싱—쓰기 위주 워크로드에 제한적 /\n\n【시험 포인트】\n▸ 높은 CPU = 식별 + 확장 조합",
    "en_q": "A company uses Amazon RDS for MySQL as the database for a critical application. The database workload is mostly writes, with a small number of reads. A data engineer notices that the CPU utilization of the DB instance is very high. The high CPU utilization is slowing down the application. The data engineer must reduce the CPU utilization of the DB Instance. Which actions should the data engineer take to meet this requirement? (Choose two.)",
    "en_opts": {
      "A": "Use the Performance Insights feature of Amazon RDS to identify queries that have high CPU utilization. Optimize the problematic queries.",
      "B": "Modify the database schema to include additional tables and indexes.",
      "C": "Reboot the RDS DB instance once each week.",
      "D": "Upgrade to a larger instance size.",
      "E": "Implement caching to reduce the database query load."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/135451-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 62,
    "question": "회사가 6개월 동안 Orders라는 Amazon Redshift 테이블을 사용해왔습니다. 회사는 테이블에 대해 주간 업데이트와 삭제를 수행합니다. 테이블은 AWS 리전을 포함하는 컬럼의 인터리브 정렬 키를 가집니다. 회사는 디스크 공간을 회수하여 스토리지 부족을 방지하고, 또한 정렬 키 컬럼을 분석하고 싶습니다. 요구 사항을 충족하는 Amazon Redshift 명령은 무엇입니까?",
    "options": {
      "A": "VACUUM FULL Orders",
      "B": "VACUUM DELETE ONLY Orders",
      "C": "VACUUM REINDEX Orders",
      "D": "VACUUM SORT ONLY Orders"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Redshift VACUUM—디스크 정리 및 인덱스 재구성 /\n▸ REINDEX—인터리브 정렬 키 최적화 /\n\n【정답 포인트】\n▸ VACUUM REINDEX → 삭제 행 제거 + 정렬 키 재구성 /\n▸ 인터리브 키 분석 가능하게 함 /\n▸ 디스크 공간 회수 + 성능 최적화 동시 달성 /\n\n【오답 체크】\n(A) FULL—전체 재정렬, 인터리브 미지원 / \n(B) DELETE ONLY—삭제만, 정렬 키 미처리 / \n(D) SORT ONLY—존재하지 않는 명령어 /\n\n【시험 포인트】\n▸ 인터리브 키 최적화 = REINDEX 필수",
    "en_q": "A company has used an Amazon Redshift table that is named Orders for 6 months. The company performs weekly updates and deletes on the table. The table has an interleaved sort key on a column that contains AWS Regions. The company wants to reclaim disk space so that the company will not run out of storage space. The company also wants to analyze the sort key column. Which Amazon Redshift command will meet these requirements?",
    "en_opts": {
      "A": "VACUUM FULL Orders",
      "B": "VACUUM DELETE ONLY Orders",
      "C": "VACUUM REINDEX Orders",
      "D": "VACUUM SORT ONLY Orders"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/135091-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 63,
    "question": "제조 회사가 센서에서 데이터를 수집하고 싶습니다. 데이터 엔지니어는 센서 데이터를 거의 실시간으로 수집하는 솔루션을 구현해야 합니다. 솔루션은 데이터를 영구 데이터 저장소에 저장해야 합니다. 솔루션은 중첩된 JSON 형식으로 데이터를 저장해야 합니다. 회사는 10밀리초 미만의 지연시간으로 데이터 저장소에서 쿼리할 수 있어야 합니다. 최소 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "자체 호스팅된 Apache Kafka 클러스터를 사용하여 센서 데이터를 캡처합니다. 쿼리용 데이터를 Amazon S3에 저장합니다.",
      "B": "AWS Lambda를 사용하여 센서 데이터를 처리합니다. 쿼리용 데이터를 Amazon S3에 저장합니다.",
      "C": "Amazon Kinesis Data Streams를 사용하여 센서 데이터를 캡처합니다. 쿼리용 데이터를 Amazon DynamoDB에 저장합니다.",
      "D": "Amazon Simple Queue Service(Amazon SQS)를 사용하여 들어오는 센서 데이터를 버퍼링합니다. AWS Glue를 사용하여 데이터를 Amazon RDS에 저장합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Kinesis Data Streams—실시간 스트리밍 수집 /\n▸ DynamoDB—밀리초 지연시간, 중첩 JSON 지원 /\n\n【정답 포인트】\n▸ Kinesis+DynamoDB = 완전 관리형, 운영 오버헤드 최소 /\n▸ 10ms 이하 쿼리 지연시간 달성 /\n▸ 중첩 JSON 네이티브 지원 /\n\n【오답 체크】\n(A) Kafka—자체 관리, S3 쿼리 10ms 불가능 / \n(B) Lambda—배치 처리용, 실시간 미적합 / \n(D) SQS+RDS—10ms 달성 어려움 /\n\n【시험 포인트】\n▸ 실시간 + NoSQL + 밀리초 = Kinesis + DynamoDB",
    "en_q": "A manufacturing company wants to collect data from sensors. A data engineer needs to implement a solution that ingests sensor data in near real time. The solution must store the data to a persistent data store. The solution must store the data in nested JSON format. The company must have the ability to query from the data store with a latency of less than 10 milliseconds. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use a self-hosted Apache Kafka cluster to capture the sensor data. Store the data in Amazon S3 for querying.",
      "B": "Use AWS Lambda to process the sensor data. Store the data in Amazon S3 for querying.",
      "C": "Use Amazon Kinesis Data Streams to capture the sensor data. Store the data in Amazon DynamoDB for querying.",
      "D": "Use Amazon Simple Queue Service (Amazon SQS) to buffer incoming sensor data. Use AWS Glue to store the data in Amazon RDS for querying."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132688-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 64,
    "question": "회사가 Amazon S3의 데이터 레이크에 데이터를 저장합니다. 회사가 데이터 레이크에 저장하는 일부 데이터에는 개인 식별 정보(PII)가 포함되어 있습니다. 여러 사용자 그룹이 원본 데이터에 접근해야 합니다. 회사는 사용자 그룹이 자신들이 필요한 PII만 접근할 수 있도록 해야 합니다. 최소 노력으로 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Athena를 사용하여 데이터를 쿼리합니다. AWS Lake Formation을 설정하고 회사의 IAM 역할에 대한 접근 수준을 설정하기 위해 데이터 필터를 생성합니다. 사용자의 PII 접근 요구사항과 일치하는 IAM 역할에 각 사용자를 할당합니다.",
      "B": "Amazon QuickSight를 사용하여 데이터에 접근합니다. QuickSight의 열 수준 보안 기능을 사용하여 사용자가 Amazon Athena를 통해 Amazon S3에서 검색할 수 있는 PII를 제한합니다. 사용자의 PII 접근 요구사항을 기반으로 QuickSight 접근 수준을 정의합니다.",
      "C": "Athena 쿼리를 배경에서 실행할 사용자 지정 쿼리 빌더 UI를 구축합니다. Amazon Cognito에서 사용자 그룹을 생성합니다. 사용자의 PII 접근 요구사항을 기반으로 사용자 그룹에 접근 수준을 할당합니다.",
      "D": "다양한 수준의 세분화된 접근이 있는 IAM 역할을 생성합니다. IAM 역할을 IAM 사용자 그룹에 할당합니다. ID 기반 정책을 사용하여 열 수준에서 사용자 그룹에 접근 수준을 할당합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Lake Formation 데이터 필터—PII 열 단위 마스킹 /\n▸ IAM 역할 기반 접근 /\n\n【정답 포인트】\n▸ Lake Formation 데이터 필터로 PII 자동 마스킹 /\n▸ IAM 역할 할당으로 사용자별 접근 정책 자동 적용 /\n▸ Athena 통합으로 투명한 필터링 /\n\n【오답 체크】\n(B) QuickSight—시각화 도구, Athena 백단 미지원 / \n(C) 커스텀 UI—개발 노력 높음 / \n(D) IAM 정책만—열 수준 필터링 자동화 불가 /\n\n【시험 포인트】\n▸ S3 + PII = Lake Formation 필수",
    "en_q": "A company stores data in a data lake that is in Amazon S3. Some data that the company stores in the data lake contains personally identifiable information (PII). Multiple user groups need to access the raw data. The company must ensure that user groups can access only the PII that they require. Which solution will meet these requirements with the LEAST effort?",
    "en_opts": {
      "A": "Use Amazon Athena to query the data. Set up AWS Lake Formation and create data filters to establish levels of access for the company's IAM roles. Assign each user to the IAM role that matches the user's PII access requirements.",
      "B": "Use Amazon QuickSight to access the data. Use column-level security features in QuickSight to limit the PII that users can retrieve from Amazon S3 by using Amazon Athena. Define QuickSight access levels based on the PII access requirements of the users.",
      "C": "Build a custom query builder UI that will run Athena queries in the background to access the data. Create user groups in Amazon Cognito. Assign access levels to the user groups based on the PII access requirements of the users.",
      "D": "Create IAM roles that have different levels of granular access. Assign the IAM roles to IAM user groups. Use an identity-based policy to assign access levels to user groups at the column level."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132689-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 65,
    "question": "데이터 엔지니어는 10개 소스 시스템에서 데이터를 추출, 변환, 로드(ETL)하여 Amazon Redshift 데이터베이스의 10개 테이블에 로드하는 파이프라인을 구축해야 합니다. 모든 소스 시스템은 15분마다 .csv, JSON 또는 Apache Parquet 파일을 생성합니다. 모든 소스 시스템이 하나의 Amazon S3 버킷에 파일을 전달합니다. 파일 크기는 10MB에서 20GB 범위입니다. ETL 파이프라인은 데이터 스키마 변경에도 불구하고 올바르게 작동해야 합니다. 이 요구 사항을 충족하는 데이터 파이프라인 솔루션은 무엇입니까? (둘 선택)",
    "options": {
      "A": "15분마다 AWS Glue 작업을 실행하기 위해 Amazon EventBridge 규칙을 사용합니다. 데이터를 처리하고 Amazon Redshift 테이블로 로드하도록 AWS Glue 작업을 구성합니다.",
      "B": "15분마다 AWS Glue 워크플로우 작업을 호출하기 위해 Amazon EventBridge 규칙을 사용합니다. AWS Glue 크롤러를 실행하고 크롤러가 성공적으로 실행된 후 AWS Glue 작업을 실행하도록 on-demand 트리거가 있는 AWS Glue 워크플로우를 구성합니다. 데이터를 처리하고 Amazon Redshift 테이블로 로드하도록 AWS Glue 작업을 구성합니다.",
      "C": "S3 버킷에 파일이 로드될 때 AWS Glue 크롤러를 호출하도록 AWS Lambda 함수를 구성합니다. 데이터를 처리하고 Amazon Redshift 테이블로 로드하도록 AWS Glue 작업을 구성합니다. AWS Glue 크롤러가 성공적으로 실행된 후 AWS Glue 작업을 실행하도록 두 번째 Lambda 함수를 생성합니다. AWS Glue 크롤러가 실행 완료 시 두 번째 Lambda 함수를 호출하도록 Amazon EventBridge 규칙을 생성합니다.",
      "D": "S3 버킷에 파일이 로드될 때 AWS Glue 워크플로우를 호출하도록 AWS Lambda 함수를 구성합니다. AWS Glue 크롤러를 실행하고 크롤러가 성공적으로 실행된 후 AWS Glue 작업을 실행하도록 on-demand 트리거가 있는 AWS Glue 워크플로우를 구성합니다. 데이터를 처리하고 Amazon Redshift 테이블로 로드하도록 AWS Glue 작업을 구성합니다.",
      "E": "S3 버킷에 파일이 로드될 때 AWS Glue 작업을 호출하도록 AWS Lambda 함수를 구성합니다. AWS Glue 작업을 구성하여 S3 버킷에서 파일을 Apache Spark DataFrame으로 읽습니다. AWS Glue 작업을 구성하여 DataFrame의 더 작은 파티션을 Amazon Kinesis Data Firehose 전달 스트림에 배치합니다. 전달 스트림을 구성하여 Amazon Redshift 테이블로 데이터를 로드합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ AWS Glue Workflow—작업 간 의존성 관리 /\n▸ Glue Crawler—자동 스키마 감지 /\n\n【정답 포인트】\n(B) EventBridge 정기(15분) + Workflow(크롤러→작업) / \n(D) Lambda 이벤트 트리거 + Workflow 오케스트레이션 /\n▸ 크롤러의 자동 스키마 감지로 데이터 변경 적응 /\n\n【오답 체크】\n(A) 크롤러 없음→스키마 변경 미감지 / \n(C) 다중 Lambda 체인—복잡성 높음 / \n(E) Firehose—배치 처리 부적합 /\n\n【시험 포인트】\n▸ 스키마 변경 = Crawler + Workflow 필수",
    "en_q": "A data engineer must build an extract, transform, and load (ETL) pipeline to process and load data from 10 source systems into 10 tables that are in an Amazon Redshift database. All the source systems generate .csv, JSON, or Apache Parquet files every 15 minutes. The source systems all deliver files into one Amazon S3 bucket. The file sizes range from 10 MB to 20 GB. The ETL pipeline must function correctly despite changes to the data schema. Which data pipeline solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Use an Amazon EventBridge rule to run an AWS Glue job every 15 minutes. Configure the AWS Glue job to process and load the data into the Amazon Redshift tables.",
      "B": "Use an Amazon EventBridge rule to invoke an AWS Glue workflow job every 15 minutes. Configure the AWS Glue workflow to have an on-demand trigger that runs an AWS Glue crawler and then runs an AWS Glue job when the crawler finishes running successfully. Configure the AWS Glue job to process and load the data into the Amazon Redshift tables.",
      "C": "Configure an AWS Lambda function to invoke an AWS Glue crawler when a file is loaded into the S3 bucket. Configure an AWS Glue job to process and load the data into the Amazon Redshift tables. Create a second Lambda function to run the AWS Glue job. Create an Amazon EventBridge rule to invoke the second Lambda function when the AWS Glue crawler finishes running successfully.",
      "D": "Configure an AWS Lambda function to invoke an AWS Glue workflow when a file is loaded into the S3 bucket. Configure the AWS Glue workflow to have an on-demand trigger that runs an AWS Glue crawler and then runs an AWS Glue job when the crawler finishes running successfully. Configure the AWS Glue job to process and load the data into the Amazon Redshift tables.",
      "E": "Configure an AWS Lambda function to invoke an AWS Glue job when a file is loaded into the S3 bucket. Configure the AWS Glue job to read the files from the S3 bucket into an Apache Spark DataFrame. Configure the AWS Glue job to also put smaller partitions of the DataFrame into an Amazon Kinesis Data Firehose delivery stream. Configure the delivery stream to load data into the Amazon Redshift tables."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132744-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 66,
    "question": "금융 회사가 Amazon Athena를 사용하여 페타바이트급 데이터셋에 대해 온디맨드 SQL 쿼리를 실행하여 비즈니스 인텔리전스(BI) 애플리케이션을 지원하고 싶습니다. 업무 시간 외에 실행되는 AWS Glue 작업은 매일 한 번 데이터셋을 업데이트합니다. BI 애플리케이션의 표준 데이터 새로고침 빈도는 회사 정책을 준수하기 위해 1시간입니다. 데이터 엔지니어는 추가 인프라 비용 없이 Amazon Athena의 사용을 비용 최적화하고 싶습니다. 최소 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "1일 후 데이터를 S3 Glacier Deep Archive 스토리지 클래스로 이동하도록 Amazon S3 Lifecycle 정책을 구성합니다.",
      "B": "SQL 쿼리에 대해 Amazon Athena의 쿼리 결과 재사용 기능을 사용합니다.",
      "C": "BI 애플리케이션과 Athena 사이에 Amazon ElastiCache 클러스터를 추가합니다.",
      "D": "데이터셋의 파일 형식을 Apache Parquet으로 변경합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Athena 쿼리 결과 재사용(Caching) /\n▸ 1시간 새로고침 주기 /\n\n【정답 포인트】\n▸ Athena 자동 결과 캐싱 기능 활용 /\n▸ 1일 1회 업데이트, 1시간 주기 쿼리 → 캐시 히트율 높음 /\n▸ 추가 비용/인프라 없음 /\n\n【오답 체크】\n(A) Glacier—쿼리 성능 미관련 / \n(C) ElastiCache—추가 비용 발생 / \n(D) Parquet—캐싱 미지원 /\n\n【시험 포인트】\n▸ Athena 비용 = 쿼리 결과 재사용",
    "en_q": "A financial company wants to use Amazon Athena to run on-demand SQL queries on a petabyte-scale dataset to support a business intelligence (BI) application. An AWS Glue job that runs during non-business hours updates the dataset once every day. The BI application has a standard data refresh frequency of 1 hour to comply with company policies. A data engineer wants to cost optimize the company's use of Amazon Athena without adding any additional infrastructure costs. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Configure an Amazon S3 Lifecycle policy to move data to the S3 Glacier Deep Archive storage class after 1 day.",
      "B": "Use the query result reuse feature of Amazon Athena for the SQL queries.",
      "C": "Add an Amazon ElastiCache cluster between the BI application and Athena.",
      "D": "Change the format of the files that are in the dataset to Apache Parquet."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132694-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 67,
    "question": "회사의 데이터 엔지니어는 테이블 SQL 쿼리의 성능을 최적화해야 합니다. 회사는 Amazon Redshift 클러스터에 데이터를 저장합니다. 데이터 엔지니어는 예산 제약으로 인해 클러스터 크기를 늘릴 수 없습니다. 회사는 여러 테이블에 데이터를 저장하고 EVEN 분배 스타일을 사용하여 데이터를 로드합니다. 일부 테이블은 수백 기가바이트 크기입니다. 다른 테이블은 10MB 미만 크기입니다. 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "모든 테이블에 EVEN 분배 스타일을 계속 사용합니다. 모든 테이블에 기본 키와 외래 키를 지정합니다.",
      "B": "대형 테이블에 ALL 분배 스타일을 사용합니다. 모든 테이블에 기본 키와 외래 키를 지정합니다.",
      "C": "거의 업데이트되지 않는 소형 테이블에 ALL 분배 스타일을 사용합니다. 모든 테이블에 기본 키와 외래 키를 지정합니다.",
      "D": "모든 테이블에 대해 분배, 정렬, 파티션 키의 조합을 지정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Redshift 분산 스타일—데이터 분산 방식 /\n▸ ALL 분산—소형 테이블 복제 /\n\n【정답 포인트】\n(B) 소형 테이블(10MB) 모두 ALL 분산 → 조인 성능 극대화 / \n(C) 대형 테이블(GB) EVEN 또는 KEY 분산 유지 /\n▸ 클러스터 크기 유지, 쿼리 성능 최적화 /\n\n【오답 체크】\n(A) 컬럼 추가—저장소 증가 / \n(D) 정렬 키—쿼리 필터링, 조인 성능 미향상 /\n\n【시험 포인트】\n▸ 조인 성능 = 소형 테이블 ALL 분산",
    "en_q": "A company's data engineer needs to optimize the performance of table SQL queries. The company stores data in an Amazon Redshift cluster. The data engineer cannot increase the size of the cluster because of budget constraints. The company stores the data in multiple tables and loads the data by using the EVEN distribution style. Some tables are hundreds of gigabytes in size. Other tables are less than 10 MB in size. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Keep using the EVEN distribution style for all tables. Specify primary and foreign keys for all tables.",
      "B": "Use the ALL distribution style for large tables. Specify primary and foreign keys for all tables.",
      "C": "Use the ALL distribution style for rarely updated small tables. Specify primary and foreign keys for all tables.",
      "D": "Specify a combination of distribution, sort, and partition keys for all tables."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132695-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 68,
    "question": "회사가 다음 이름의 컬럼을 가진 물리 주소 데이터를 포함하는 .csv 파일을 받습니다: Door_No, Street_Name, City, Zip_Code. 회사는 다음 형식으로 이러한 값을 저장할 단일 컬럼을 생성하고 싶습니다: {\"door_no\": \"123\", \"street_name\": \"Main St\", \"city\": \"Springfield\", \"zip_code\": \"12345\"}. 최소 코딩 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue DataBrew를 사용하여 파일을 읽습니다. NEST_TO_ARRAY 변환을 사용하여 새 컬럼을 생성합니다.",
      "B": "AWS Glue DataBrew를 사용하여 파일을 읽습니다. NEST_TO_MAP 변환을 사용하여 새 컬럼을 생성합니다.",
      "C": "AWS Glue DataBrew를 사용하여 파일을 읽습니다. PIVOT 변환을 사용하여 새 컬럼을 생성합니다.",
      "D": "Python에서 Lambda 함수를 작성합니다. Python 데이터 딕셔너리 타입을 사용하여 새 컬럼을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 저장소 최적화 /\n▸ Intelligent-Tiering—자동 저장소 클래스 전환 /\n\n【정답 포인트】\n(B) S3 Intelligent-Tiering으로 접근 패턴 자동 분석 / \n(D) Lifecycle 정책으로 오래된 데이터 Glacier 자동 전환 /\n▸ 설정 후 자동 운영, 비용 극적 절감 /\n\n【오답 체크】\n(A) 수동 전환—운영 오버헤드 / \n(C) 정책만—자동 전환 미실행 / \n(E) 삭제—규제 준수 위험 /\n\n【시험 포인트】\n▸ 데이터 레이크 비용 = Intelligent-Tiering + Lifecycle",
    "en_q": "A company receives .csv files that contain physical address data. The data is in columns that have the following names: Door_No, Street_Name, City, and Zip_Code. The company wants to create a single column to store these values in the following format: {\"door_no\": \"123\", \"street_name\": \"Main St\", \"city\": \"Springfield\", \"zip_code\": \"12345\"}. Which solution will meet this requirement with the LEAST coding effort?",
    "en_opts": {
      "A": "Use AWS Glue DataBrew to read the files. Use the NEST_TO_ARRAY transformation to create the new column.",
      "B": "Use AWS Glue DataBrew to read the files. Use the NEST_TO_MAP transformation to create the new column.",
      "C": "Use AWS Glue DataBrew to read the files. Use the PIVOT transformation to create the new column.",
      "D": "Write a Lambda function in Python to read the files. Use the Python data dictionary type to create the new column."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/135424-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 69,
    "question": "회사가 민감한 고객 정보를 포함하는 Amazon S3 객체로 통화 로그를 받습니다. 회사는 암호화를 사용하여 S3 객체를 보호해야 합니다. 회사는 또한 특정 직원만 접근할 수 있는 암호화 키를 사용해야 합니다. 최소 노력으로 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS CloudHSM 클러스터를 사용하여 암호화 키를 저장합니다. Amazon S3에 쓰는 프로세스를 구성하여 CloudHSM에 호출하여 객체를 암호화 및 복호화합니다. CloudHSM 클러스터에 대한 접근을 제한하는 IAM 정책을 배포합니다.",
      "B": "고객 정보를 포함하는 객체를 암호화하기 위해 고객 제공 키(SSE-C)를 사용한 서버 측 암호화를 사용합니다. 객체를 암호화하는 키에 대한 접근을 제한합니다.",
      "C": "고객 정보를 포함하는 객체를 암호화하기 위해 AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화를 사용합니다. 객체를 암호화하는 KMS 키에 대한 접근을 제한하는 IAM 정책을 구성합니다.",
      "D": "고객 정보를 포함하는 객체를 암호화하기 위해 Amazon S3 관리 키(SSE-S3)를 사용한 서버 측 암호화를 사용합니다. Amazon S3 관리 키에 대한 접근을 제한하는 IAM 정책을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SSE-KMS — AWS KMS 키 관리, 세분화된 접근 제어\n▸ SSE-C — 사용자 관리 키, 사용자가 키 관리\n▸ SSE-S3 — AWS 관리 키, 접근 제어 불가\n\n【정답 포인트】\n▸ AWS KMS = IAM 정책으로 키 접근 제어 가능\n▸ \"특정 직원만\" 접근 → KMS 권한 정책으로 세분화\n▸ 최소 노력 = AWS 관리 키 (자동 회전, 감사 로깅)\n\n【오답 체크】\n(A) CloudHSM = 자체 관리 복잡, 비용 높음\n(B) SSE-C = 사용자가 키 관리, 부담 높음\n(D) SSE-S3 = IAM 정책 적용 불가, 세분화 불가\n\n【시험 포인트】\nS3 암호화 + 접근 제어 = SSE-KMS (표준)\nIAM으로 세분화 제어 = KMS 필수\n최소 운영 오버헤드 = AWS 관리 서비스",
    "en_q": "A company receives call logs as Amazon S3 objects that contain sensitive customer information. The company must protect the S3 objects by using encryption. The company must also use encryption keys that only specific employees can access. Which solution will meet these requirements with the LEAST effort?",
    "en_opts": {
      "A": "Use an AWS CloudHSM cluster to store the encryption keys. Configure the process that writes to Amazon S3 to make calls to CloudHSM to encrypt and decrypt the objects. Deploy an IAM policy that restricts access to the CloudHSM cluster.",
      "B": "Use server-side encryption with customer-provided keys (SSE-C) to encrypt the objects that contain customer information. Restrict access to the keys that encrypt the objects.",
      "C": "Use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt the objects that contain customer information. Configure an IAM policy that restricts access to the KMS keys that encrypt the objects.",
      "D": "Use server-side encryption with Amazon S3 managed keys (SSE-S3) to encrypt the objects that contain customer information. Configure an IAM policy that restricts access to the Amazon S3 managed keys that encrypt the objects."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132696-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 70,
    "question": "회사가 S3 Standard 스토리지 클래스의 수천 개 Amazon S3 버킷에 페타바이트 규모의 데이터를 저장합니다. 데이터는 예측 불가능하고 가변적인 데이터 접근 패턴이 있는 분석 워크로드를 지원합니다. 회사는 수개월 동안 일부 데이터에 접근하지 않습니다. 그러나 회사는 모든 데이터를 밀리초 내에 검색할 수 있어야 합니다. 회사는 S3 스토리지 비용을 최적화해야 합니다. 최소 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 Storage Lens 표준 메트릭을 사용하여 객체를 비용 최적화된 스토리지 클래스로 이동할 때를 결정합니다. S3 버킷에 대한 S3 Lifecycle 정책을 생성하여 객체를 비용 최적화된 스토리지 클래스로 이동합니다. 향후 S3 Lifecycle 정책을 계속 개선하여 스토리지 비용을 최적화합니다.",
      "B": "S3 Storage Lens 활동 메트릭을 사용하여 회사가 드물게 접근하는 S3 버킷을 식별합니다. 데이터 나이에 따라 객체를 S3 Standard에서 S3 Standard-Infrequent Access(S3 Standard-IA) 및 S3 Glacier 스토리지 클래스로 이동하도록 S3 Lifecycle 규칙을 구성합니다.",
      "C": "S3 Intelligent-Tiering을 사용합니다. Deep Archive Access 티어를 활성화합니다.",
      "D": "S3 Intelligent-Tiering을 사용합니다. 기본 접근 티어를 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 Intelligent-Tiering — 자동 비용 최적화\n▸ 밀리초 검색 — Frequent, Infrequent, Archive tiers\n▸ 예측 불가능한 접근 — 자동 티어링 필수\n\n【정답 포인트】\n▸ Intelligent-Tiering = 접근 패턴 자동 감지 및 이동\n▸ 기본 설정 = Frequent(활성), Infrequent(30일), Archive(90일)\n▸ 밀리초 검색 = Archive 즉시 검색 지원 (On-Demand)\n▸ \"최소 운영 오버헤드\" = 설정 후 자동 관리\n\n【오답 체크】\n(A) Storage Lens 표준 = 메트릭만 제공, 정책 수동 관리 필요\n(B) Lifecycle 정책 = 수동 규칙, \"계속 개선\" = 운영 오버헤드 높음\n(C) Deep Archive 활성화 = 검색 시간 길어짐 (밀리초 미달)\n\n【시험 포인트】\n예측 불가능 접근 + 비용 최적화 = Intelligent-Tiering\n밀리초 검색 요구 = Archive Access tier 지원\n자동 운영 = \"기본 접근 티어\" (수동 정책 불필요)",
    "en_q": "A company stores petabytes of data in thousands of Amazon S3 buckets in the S3 Standard storage class. The data supports analytics workloads that have unpredictable and variable data access patterns. The company does not access some data for months. However, the company must be able to retrieve all data within milliseconds. The company needs to optimize S3 storage costs. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use S3 Storage Lens standard metrics to determine when to move objects to more cost-optimized storage classes. Create S3 Lifecycle policies for the S3 buckets to move objects to cost-optimized storage classes. Continue to refine the S3 Lifecycle policies in the future to optimize storage costs.",
      "B": "Use S3 Storage Lens activity metrics to identify S3 buckets that the company accesses infrequently. Configure S3 Lifecycle rules to move objects from S3 Standard to the S3 Standard-Infrequent Access (S3 Standard-IA) and S3 Glacier storage classes based on the age of the data.",
      "C": "Use S3 Intelligent-Tiering. Activate the Deep Archive Access tier.",
      "D": "Use S3 Intelligent-Tiering. Use the default access tier."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132697-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 71,
    "question": "보안 검토 중에 회사가 AWS Glue 작업의 취약점을 식별했습니다. 회사가 Amazon Redshift 클러스터에 접근하기 위한 자격 증명이 작업 스크립트에 하드코딩되어 있음을 발견했습니다. 데이터 엔지니어는 AWS Glue 작업의 보안 취약점을 해결해야 합니다. 솔루션은 자격 증명을 안전하게 저장해야 합니다. 요구 사항을 충족하기 위해 데이터 엔지니어가 취해야 할 조치의 조합은 무엇입니까? (둘 선택)",
    "options": {
      "A": "AWS Glue 작업 매개변수에 자격 증명을 저장합니다.",
      "B": "Amazon S3 버킷의 구성 파일에 자격 증명을 저장합니다.",
      "C": "AWS Glue 작업을 사용하여 Amazon S3 버킷의 구성 파일에서 자격 증명에 접근합니다.",
      "D": "AWS Secrets Manager에 자격 증명을 저장합니다.",
      "E": "AWS Glue 작업 IAM 역할에 저장된 자격 증명에 대한 접근을 부여합니다."
    },
    "answer": "DE",
    "explanation": "【핵심 용어】\n▸ AWS Secrets Manager — 자격 증명 중앙 관리\n▸ IAM 역할 — 서비스 인증 및 권한 관리\n▸ 보안 저장소 — 암호화, 감사 로깅, 자동 회전\n\n【정답 포인트】\n(D) Secrets Manager 저장 → 암호화, 버전 관리, 감사 로깅\n(E) Glue IAM 역할 권한 → Secrets Manager 접근 권한 부여\n▸ 두 가지 조합 = 안전한 자격 증명 관리\n\n【오답 체크】\n(A) Glue 매개변수는 평문 저장, 보안 미흡\n(B) S3는 기본 암호화 필수, Secrets Manager보다 보안 낮음\n(C) S3 파일 직접 접근 = 암호화 및 감사 로깅 미흡\n\n【시험 포인트】\nGlue 자격 증명 관리 = Secrets Manager (표준)\nIAM 역할 기반 접근 제어 = 최소 권한 원칙\n감사 추적 = Secrets Manager 자동 제공",
    "en_q": "During a security review, a company identified a vulnerability in an AWS Glue job. The company discovered that credentials to access an Amazon Redshift cluster were hard coded in the job script. A data engineer must remediate the security vulnerability in the AWS Glue job. The solution must securely store the credentials. Which combination of steps should the data engineer take to meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Store the credentials in the AWS Glue job parameters.",
      "B": "Store the credentials in a configuration file that is in an Amazon S3 bucket.",
      "C": "Access the credentials from a configuration file that is in an Amazon S3 bucket by using the AWS Glue job.",
      "D": "Store the credentials in AWS Secrets Manager.",
      "E": "Grant the AWS Glue job IAM role access to the stored credentials."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132698-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 72,
    "question": "데이터 엔지니어가 Amazon Redshift를 사용하여 매월 한 번씩 리소스 집약적인 분석 프로세스를 실행합니다. 매달 데이터 엔지니어는 새로운 Redshift 프로비저닝된 클러스터를 생성합니다. 분석 프로세스가 완료된 후 매달 데이터 엔지니어는 Redshift 프로비저닝된 클러스터를 삭제합니다. 데이터 엔지니어가 매월 클러스터를 삭제하기 전에 Amazon S3 버킷에서 클러스터 백업 데이터를 언로드합니다. 데이터 엔지니어는 월간 분석 프로세스를 실행하는 솔루션이 필요하며, 데이터 엔지니어가 인프라를 수동으로 관리할 필요가 없습니다. 최소 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Step Functions를 사용하여 분석 프로세스가 완료될 때 Redshift 클러스터를 일시 중지하고 매월 새로운 프로세스를 실행하도록 클러스터를 재개합니다.",
      "B": "Amazon Redshift Serverless를 사용하여 분석 워크로드를 자동으로 처리합니다.",
      "C": "AWS CLI를 사용하여 분석 워크로드를 자동으로 처리합니다.",
      "D": "AWS CloudFormation 템플릿을 사용하여 분석 워크로드를 자동으로 처리합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Redshift Serverless — 완전 관리형, 자동 스케일링\n▸ 일회용 분석 — 프로비저닝/삭제 자동화\n▸ 운영 오버헤드 최소 — 인프라 관리 불필요\n\n【정답 포인트】\n▸ Serverless = 클러스터 생성/삭제 자동화\n▸ 월간 분석만 실행 시 비용 청구 → 효율적\n▸ 데이터 백업/복원 자동 지원\n▸ SQL 호환성 유지\n\n【오답 체크】\n(A) Step Functions로 클러스터 관리 = 여전히 수동 운영\n(C) CLI = 스크립트 작성/유지보수 필요\n(D) CloudFormation = 클러스터 생성/삭제 자동화 가능하나 Serverless보다 복잡\n\n【시험 포인트】\n일회용/주기적 분석 = Redshift Serverless (표준)\n운영 최소화 = 완전 관리형 서비스\n프로비저닝 비용 절감 = Serverless 핵심 가치",
    "en_q": "A data engineer uses Amazon Redshift to run resource-intensive analytics processes once every month. Every month, the data engineer creates a new Redshift provisioned cluster. The data engineer deletes the Redshift provisioned cluster after the analytics processes are complete every month. Before the data engineer deletes the cluster each month, the data engineer unloads backup data from the cluster to an Amazon S3 bucket. The data engineer needs a solution to run the monthly analytics processes that does not require the data engineer to manage the infrastructure manually. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon Step Functions to pause the Redshift cluster when the analytics processes are complete and to resume the cluster to run new processes every month.",
      "B": "Use Amazon Redshift Serverless to automatically process the analytics workload.",
      "C": "Use the AWS CLI to automatically process the analytics workload.",
      "D": "Use AWS CloudFormation templates to automatically process the analytics workload."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132699-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 73,
    "question": "회사가 .xls 형식의 고객 데이터를 포함하는 일일 파일을 받습니다. 회사는 이 파일을 Amazon S3에 저장합니다. 일일 파일은 약 2GB 크기입니다. 데이터 엔지니어는 고객 이름을 포함하는 파일의 컬럼과 고객 성을 포함하는 컬럼을 연결합니다. 데이터 엔지니어는 파일의 고유 고객 수를 결정해야 합니다. 최소 운영 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue 노트북에서 Apache Spark 작업을 생성하고 실행합니다. S3 파일을 읽고 고유 고객 수를 계산하도록 작업을 구성합니다.",
      "B": "AWS Glue 크롤러를 생성하여 S3 파일의 AWS Glue Data Catalog를 생성합니다. Amazon Athena에서 SQL 쿼리를 실행하여 고유 고객 수를 계산합니다.",
      "C": "Amazon EMR Serverless에서 Apache Spark 작업을 생성하고 실행하여 고유 고객 수를 계산합니다.",
      "D": "AWS Glue DataBrew를 사용하여 COUNT_DISTINCT 집계 함수를 사용하는 레시피를 생성하여 고유 고객 수를 계산합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Glue DataBrew — 로우코드 데이터 준비\n▸ COUNT_DISTINCT — 중복 제거 카운트\n▸ 변환 + 집계 — 단일 레시피로 처리\n\n【정답 포인트】\n▸ DataBrew 레시피 = 코딩 없는 변환 및 집계\n▸ COUNT_DISTINCT = 고유값 계산 자동\n▸ 이름 연결 + 고유 수 계산 = 단일 레시피\n▸ 최소 노력 = GUI 기반 설정\n\n【오답 체크】\n(A) Spark Job = 코딩 필수 (Scala/Python)\n(B) Athena = 쿼리 작성 필요, 크롤러 설정 추가 단계\n(C) EMR Serverless = 코딩 + 컴퓨팅 자원 설정\n\n【시험 포인트】\n최소 운영 노력 = DataBrew (로우코드)\n집계 함수 활용 = COUNT_DISTINCT (표준)\nEXEL/CSV 변환 + 집계 = DataBrew 최적 활용",
    "en_q": "A company receives a daily file that contains customer data in .xls format. The company stores the file in Amazon S3. The daily file is approximately 2 GB in size. A data engineer concatenates the column in the file that contains customer first names and the column that contains customer last names. The data engineer needs to determine the number of distinct customers in the file. Which solution will meet this requirement with the LEAST operational effort?",
    "en_opts": {
      "A": "Create and run an Apache Spark job in an AWS Glue notebook. Configure the job to read the S3 file and calculate the number of distinct customers.",
      "B": "Create an AWS Glue crawler to create an AWS Glue Data Catalog of the S3 file. Run SQL queries from Amazon Athena to calculate the number of distinct customers.",
      "C": "Create and run an Apache Spark job in Amazon EMR Serverless to calculate the number of distinct customers.",
      "D": "Use AWS Glue DataBrew to create a recipe that uses the COUNT_DISTINCT aggregate function to calculate the number of distinct customers."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132700-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 74,
    "question": "의료 회사가 Amazon Kinesis Data Streams를 사용하여 웨어러블 기기, 병원 장비, 환자 기록에서 실시간 건강 데이터를 스트리밍합니다. 데이터 엔지니어는 스트리밍 데이터를 처리할 솔루션을 찾아야 합니다. 데이터 엔지니어는 Amazon Redshift Serverless 웨어하우스에 데이터를 저장해야 합니다. 솔루션은 스트리밍 데이터와 전날 데이터의 거의 실시간 분석을 지원해야 합니다. 최소 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터를 Amazon Kinesis Data Firehose에 로드합니다. Amazon Redshift에 데이터를 로드합니다.",
      "B": "Amazon Redshift의 스트리밍 수집 기능을 사용합니다.",
      "C": "데이터를 Amazon S3에 로드합니다. COPY 명령을 사용하여 Amazon Redshift에 데이터를 로드합니다.",
      "D": "Amazon Aurora zero-ETL 통합과 Amazon Redshift를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Redshift 스트리밍 수집 — 거의 실시간 데이터 로드\n▸ Kinesis Data Streams — 고속 스트리밍\n▸ 거의 실시간(Near real-time) → 초 단위 지연\n\n【정답 포인트】\n▸ Redshift 스트리밍 수집 = Kinesis 직접 통합\n▸ 지연시간 < 1초 (거의 실시간)\n▸ 배치 처리 불필요, 즉시 분석 가능\n▸ Serverless 완전 호환\n\n【오답 체크】\n(A) Firehose = 배치 로드(최대 몇 분), 거의 실시간 미달\n(C) S3 + COPY = 배치 처리, 지연시간 높음\n(D) Aurora zero-ETL = RDS 데이터용, Kinesis 스트림 미지원\n\n【시험 포인트】\nKinesis + Redshift 실시간 = 스트리밍 수집 (표준)\n거의 실시간 요구 = 배치 솔루션 배제\nServerless 호환성 = 선택 기준",
    "en_q": "A healthcare company uses Amazon Kinesis Data Streams to stream real-time health data from wearable devices, hospital equipment, and patient records. A data engineer needs to find a solution to process the streaming data. The data engineer needs to store the data in an Amazon Redshift Serverless warehouse. The solution must support near real-time analytics of the streaming data and the previous day's data. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Load data into Amazon Kinesis Data Firehose. Load the data into Amazon Redshift.",
      "B": "Use the streaming ingestion feature of Amazon Redshift.",
      "C": "Load the data into Amazon S3. Use the COPY command to load the data into Amazon Redshift.",
      "D": "Use the Amazon Aurora zero-ETL integration with Amazon Redshift."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132765-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 75,
    "question": "데이터 엔지니어가 Amazon S3 버킷에 저장된 데이터에 대한 Amazon Athena 쿼리를 기반으로 하는 Amazon QuickSight 대시보드를 사용해야 합니다. 데이터 엔지니어가 QuickSight 대시보드에 연결하면 권한 부족을 나타내는 오류 메시지를 받습니다. 권한 관련 오류를 초래할 수 있는 요소는 무엇입니까? (둘 선택)",
    "options": {
      "A": "QuickSight와 Athena 사이의 연결이 없습니다.",
      "B": "Athena 테이블이 카탈로그화되지 않았습니다.",
      "C": "QuickSight가 S3 버킷에 접근할 수 없습니다.",
      "D": "QuickSight가 S3 데이터 복호화에 접근할 수 없습니다.",
      "E": "QuickSight에 할당된 IAM 역할이 없습니다."
    },
    "answer": "CD",
    "explanation": "【핵심 용어】\n▸ 핵심 개념들 정의 /\n\n【정답 포인트】\n▸ 선택 이유 설명 /\n\n【오답 체크】\n▸ 각 오답 분석 /\n\n【시험 포인트】\n▸ 시험 출제 패턴",
    "en_q": "A data engineer needs to use an Amazon QuickSight dashboard that is based on Amazon Athena queries on data that is stored in an Amazon S3 bucket. When the data engineer connects to the QuickSight dashboard, the data engineer receives an error message that indicates insufficient permissions. Which factors could cause to the permissions-related errors? (Choose two.)",
    "en_opts": {
      "A": "There is no connection between QuickSight and Athena.",
      "B": "The Athena tables are not cataloged.",
      "C": "QuickSight does not have access to the S3 bucket.",
      "D": "QuickSight does not have access to decrypt S3 data.",
      "E": "There is no IAM role assigned to QuickSight."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132701-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 76,
    "question": "회사가 Amazon S3 버킷에 JSON 형식 및 .csv 형식의 데이터셋을 저장합니다. 회사는 Amazon RDS for Microsoft SQL Server 데이터베이스, 프로비저닝된 용량 모드의 Amazon DynamoDB 테이블, Amazon Redshift 클러스터를 보유하고 있습니다. 데이터 엔지니어 팀은 데이터 과학자가 SQL과 유사한 구문을 사용하여 모든 데이터 소스를 쿼리할 수 있도록 하는 솔루션을 개발해야 합니다. 최소 운영 오버헤드로 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue를 사용하여 데이터 소스를 크롤링합니다. AWS Glue Data Catalog에 메타데이터를 저장합니다. Amazon Athena를 사용하여 데이터를 쿼리합니다. 구조적 데이터 소스에는 SQL을 사용합니다. JSON 형식의 데이터에는 PartiQL을 사용합니다.",
      "B": "AWS Glue를 사용하여 데이터 소스를 크롤링합니다. AWS Glue Data Catalog에 메타데이터를 저장합니다. Redshift Spectrum을 사용하여 데이터를 쿼리합니다. 구조적 데이터 소스에는 SQL을 사용합니다. JSON 형식의 데이터에는 PartiQL을 사용합니다.",
      "C": "AWS Glue를 사용하여 데이터 소스를 크롤링합니다. AWS Glue Data Catalog에 메타데이터를 저장합니다. AWS Glue 작업을 사용하여 JSON 형식의 데이터를 Apache Parquet 또는 .csv 형식으로 변환합니다. 변환된 데이터를 S3 버킷에 저장합니다. Amazon Athena를 사용하여 S3 버킷에서 원본 및 변환된 데이터를 쿼리합니다.",
      "D": "AWS Lake Formation을 사용하여 데이터 레이크를 생성합니다. Lake Formation 작업을 사용하여 모든 데이터 소스의 데이터를 Apache Parquet 형식으로 변환합니다. 변환된 데이터를 S3 버킷에 저장합니다. Amazon Athena 또는 Redshift Spectrum을 사용하여 데이터를 쿼리합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Glue Data Catalog — 다중 소스 메타데이터 통합\n▸ Athena — SQL 연합 쿼리(Federated Query)\n▸ PartiQL — JSON 쿼리 언어\n▸ RDS/DynamoDB/S3 — 이기종 데이터 소스\n\n【정답 포인트】\n▸ 요구사항: SQL 유사 구문으로 모든 소스(RDS, DynamoDB, S3) 쿼리\n▸ 최소 운영 오버헤드 = 완전 관리형 서비스만 고려\n▸ Glue Crawler → RDS/DynamoDB/S3 메타데이터 자동 수집\n▸ Athena + PartiQL → 통합 쿼리 인터페이스(SQL + JSON)\n▸ S3 Object Lambda는 데이터 마스킹용이지 쿼리 통합용 아님\n\n【오답 체크】\n(B) Redshift Spectrum → S3 외부 데이터만 지원, RDS/DynamoDB 미지원, 요구사항 충족 불가\n(C) 수동 변환 작업 → 운영 오버헤드 높음, JSON을 Parquet 변환하면 schema 변경 시마다 재작업\n(D) Lake Formation → S3 데이터 레이크 구축용이며 RDS/DynamoDB 직접 쿼리 지원 안함\n\n【시험 포인트】\n다중 소스(RDS + DynamoDB + S3) 통합 쿼리 = Glue Catalog + Athena 연합 쿼리\nSQL + JSON 혼합 쿼리 = Athena(SQL) + PartiQL(JSON) 조합\nRDS/DynamoDB/S3 모두 지원하는 것은 Athena 연합 쿼리만 가능",
    "en_q": "A company stores datasets in JSON format and .csv format in an Amazon S3 bucket. The company has Amazon RDS for Microsoft SQL Server databases, Amazon DynamoDB tables that are in provisioned capacity mode, and an Amazon Redshift cluster. A data engineering team must develop a solution that will give data scientists the ability to query all data sources by using syntax similar to SQL. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use AWS Glue to crawl the data sources. Store metadata in the AWS Glue Data Catalog. Use Amazon Athena to query the data. Use SQL for structured data sources. Use PartiQL for data that is stored in JSON format.",
      "B": "Use AWS Glue to crawl the data sources. Store metadata in the AWS Glue Data Catalog. Use Redshift Spectrum to query the data. Use SQL for structured data sources. Use PartiQL for data that is stored in JSON format.",
      "C": "Use AWS Glue to crawl the data sources. Store metadata in the AWS Glue Data Catalog. Use AWS Glue jobs to transform data that is in JSON format to Apache Parquet or .csv format. Store the transformed data in an S3 bucket. Use Amazon Athena to query the original and transformed data from the S3 bucket.",
      "D": "Use AWS Lake Formation to create a data lake. Use Lake Formation jobs to transform the data from all data sources to Apache Parquet format. Store the transformed data in an S3 bucket. Use Amazon Athena or Redshift Spectrum to query the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132702-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 77,
    "question": "데이터 엔지니어가 AWS Glue 대화형 세션을 사용하도록 Amazon SageMaker Studio를 구성하여 머신러닝(ML) 모델의 데이터를 준비하고 있습니다. 데이터 엔지니어가 SageMaker Studio를 사용하여 데이터를 준비하려고 할 때 접근 거부 오류를 받습니다. SageMaker Studio에 접근하려면 어떤 변경을 해야 합니까?",
    "options": {
      "A": "데이터 엔지니어의 IAM 사용자에게 AWSGlueServiceRole 관리형 정책을 추가합니다.",
      "B": "데이터 엔지니어의 IAM 사용자에게 AWS Glue 및 SageMaker 서비스 프린시팔에 대한 신뢰 정책에서 sts:AssumeRole 작업을 포함하는 정책을 추가합니다.",
      "C": "데이터 엔지니어의 IAM 사용자에게 AmazonSageMakerFullAccess 관리형 정책을 추가합니다.",
      "D": "데이터 엔지니어의 IAM 사용자에게 AWS Glue 및 SageMaker 서비스 프린시팔에 대한 신뢰 정책에서 sts:AddAssociation 작업을 허용하는 정책을 추가합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue 대화형 세션 — SageMaker Studio 통합\n▸ SageMaker Studio — 관리형 Jupyter 환경\n▸ IAM 역할(Role) — 권한 관리\n▸ 신뢰 정책(Trust Policy) — 역할 수임 권한\n▸ sts:AssumeRole — 서비스 간 권한 위임\n▸ 서비스 프린시팔(Service Principal) — 서비스 주체\n\n【정답 포인트】\n▸ 문제: SageMaker Studio에서 AWS Glue 대화형 세션 접근 시 거부 오류\n▸ 근본 원인: SageMaker 실행 역할이 Glue 역할을 수임(Assume)할 권한 없음\n▸ 해결책: 신뢰 정책 내에 AWS Glue/SageMaker 서비스 프린시팔에 대한 sts:AssumeRole 명시\n▸ 메커니즘: SageMaker → sts:AssumeRole → Glue 역할 획득 → Glue 세션 실행\n\n【오답 체크】\n(A) AWSGlueServiceRole 추가 — 역할을 직접 부여하는 것으로 불충분, AssumeRole 권한 필요\n(C) AmazonSageMakerFullAccess — 최소 권한 원칙 위반, 과도한 권한 부여\n(D) sts:AddAssociation — AWS IAM에 실제로 존재하지 않는 작업, 오류\n\n【시험 포인트】\n신뢰 정책(Trust Policy)과 권한 정책(Permission Policy) 구분 필수\n크로스 서비스 통합(SageMaker ↔ Glue) = AssumeRole 권한 필수\nServiceRole 부여만으로는 불충분, AssumeRole 권한명시 필요",
    "en_q": "A data engineer is configuring Amazon SageMaker Studio to use AWS Glue interactive sessions to prepare data for machine learning (ML) models. The data engineer receives an access denied error when the data engineer tries to prepare the data by using SageMaker Studio. Which change should the engineer make to gain access to SageMaker Studio?",
    "en_opts": {
      "A": "Add the AWSGlueServiceRole managed policy to the data engineer's IAM user.",
      "B": "Add a policy to the data engineer's IAM user that includes the sts:AssumeRole action for the AWS Glue and SageMaker service principals in the trust policy.",
      "C": "Add the AmazonSageMakerFullAccess managed policy to the data engineer's IAM user.",
      "D": "Add a policy to the data engineer's IAM user that allows the sts:AddAssociation action for the AWS Glue and SageMaker service principals in the trust policy."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132703-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 78,
    "question": "회사가 SAP HANA, Microsoft SQL Server, MongoDB, Apache Kafka, Amazon DynamoDB와 같은 데이터 소스에서 매일 약 1TB의 데이터를 추출합니다. 일부 데이터 소스는 정의되지 않은 스키마 또는 변경되는 스키마를 가지고 있습니다. 데이터 엔지니어는 이러한 데이터 소스의 스키마를 감지할 수 있는 솔루션을 구현해야 합니다. 솔루션은 데이터를 Amazon S3 버킷으로 추출, 변환 및 로드해야 합니다. 회사는 데이터 생성 후 15분 이내에 데이터를 S3 버킷에 로드해야 한다는 서비스 수준 계약(SLA)을 가지고 있습니다. 어떤 솔루션이 최소한의 운영 오버헤드로 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon EMR을 사용하여 스키마를 감지하고 데이터를 S3 버킷으로 추출, 변환 및 로드합니다. Apache Spark에서 파이프라인을 생성합니다.",
      "B": "AWS Glue를 사용하여 스키마를 감지하고 데이터를 S3 버킷으로 추출, 변환 및 로드합니다. Apache Spark에서 파이프라인을 생성합니다.",
      "C": "AWS Lambda에서 PySpark 프로그램을 작성하여 데이터를 추출, 변환 및 로드합니다.",
      "D": "Amazon Redshift에서 저장 프로시저를 작성하여 스키마를 감지하고 데이터를 Redshift Spectrum 테이블로 추출, 변환 및 로드합니다. Amazon S3에서 테이블에 접근합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue — 관리형 ETL 서비스\n▸ 스키마 감지(Schema Detection) — 변동 스키마 자동 인식\n▸ 분류자(Classifier) — 데이터 형식 자동 분석\n▸ 운영 오버헤드 — 인프라 관리 비용\n▸ 완전 관리형 서비스 — 자동 확장, 유지보수 최소\n▸ 15분 SLA — 데이터 생성 후 15분 내 로드 필수\n\n【정답 포인트】\n▸ 데이터: 일일 1TB, 이기종 소스(SAP HANA, SQL Server, MongoDB, Kafka, DynamoDB)\n▸ 도전과제: 정의되지 않은/변경되는 스키마 → 자동 감지 필요\n▸ SLA: 15분 내 S3 로드 → 빠른 처리 필수\n▸ AWS Glue 선택 이유:\n  - 자동 스키마 감지 분류자 내장\n  - Apache Spark 기반 효율적 변환\n  - 완전 관리형으로 운영 오버헤드 최소\n  - 다양한 데이터 소스 커넥터 지원\n  - 1TB 규모는 Glue DPU로 충분히 15분 내 처리\n\n【오답 체크】\n(A) Amazon EMR → Hadoop 클러스터 프로비저닝/유지보수 오버헤드 높음, 확장성 제한\n(C) AWS Lambda → 메모리/타임아웃 제약(15분 내 1TB 처리 불가), PySpark 부하 과다\n(D) Amazon Redshift → 데이터 웨어하우스이지 ETL 도구 아님, 스키마 감지 기능 부족\n\n【시험 포인트】\n'스키마 감지' + '운영 오버헤드' = AWS Glue 최우선\n'최소 운영 오버헤드' 키워드 = 완전 관리형 서비스 선택\nTB 규모 다중 소스 ETL = Glue 표준 솔루션",
    "en_q": "A company extracts approximately 1 TB of data every day from data sources such as SAP HANA, Microsoft SQL Server, MongoDB, Apache Kafka, and Amazon DynamoDB. Some of the data sources have undefined data schemas or data schemas that change. A data engineer must implement a solution that can detect the schema for these data sources. The solution must extract, transform, and load the data to an Amazon S3 bucket. The company has a service level agreement (SLA) to load the data into the S3 bucket within 15 minutes of data creation. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon EMR to detect the schema and to extract, transform, and load the data into the S3 bucket. Create a pipeline in Apache Spark.",
      "B": "Use AWS Glue to detect the schema and to extract, transform, and load the data into the S3 bucket. Create a pipeline in Apache Spark.",
      "C": "Create a PySpark program in AWS Lambda to extract, transform, and load the data into the S3 bucket.",
      "D": "Create a stored procedure in Amazon Redshift to detect the schema and to extract, transform, and load the data into a Redshift Spectrum table. Access the table from Amazon S3."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132706-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 79,
    "question": "회사에는 Amazon S3 버킷에 저장된 데이터셋을 사용하는 여러 애플리케이션이 있습니다. 회사의 전자상거래 애플리케이션은 개인식별정보(PII)를 포함하는 데이터셋을 생성합니다. 회사의 내부 분석 애플리케이션은 PII에 접근할 필요가 없습니다. 규정 준수를 위해 회사는 불필요하게 PII를 공유하면 안 됩니다. 데이터 엔지니어는 각 애플리케이션의 필요에 따라 PII를 동적으로 마스킹(Redact)할 수 있는 솔루션을 구현해야 합니다. 어떤 솔루션이 최소한의 운영 오버헤드로 요구사항을 충족합니까?",
    "options": {
      "A": "S3 버킷 정책을 생성하여 각 애플리케이션의 접근을 제한합니다. 데이터셋의 여러 복사본을 생성합니다. 각 복사본에 해당 애플리케이션의 필요에 맞는 마스킹 수준을 부여합니다.",
      "B": "S3 Object Lambda 엔드포인트를 생성합니다. S3 Object Lambda 엔드포인트를 사용하여 S3 버킷에서 데이터를 읽습니다. S3 Object Lambda 함수 내에서 마스킹 로직을 구현하여 각 애플리케이션의 필요에 따라 PII를 동적으로 마스킹합니다.",
      "C": "AWS Glue를 사용하여 각 애플리케이션의 데이터를 변환합니다. 데이터셋의 여러 복사본을 생성합니다. 각 복사본에 해당 애플리케이션의 필요에 맞는 마스킹 수준을 부여합니다.",
      "D": "사용자 지정 권한 부여자가 있는 API Gateway 엔드포인트를 생성합니다. API Gateway 엔드포인트를 사용하여 S3 버킷에서 데이터를 읽습니다. REST API 호출을 시작하여 각 애플리케이션의 필요에 따라 PII를 동적으로 마스킹합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 Object Lambda — S3 객체 검색 시 실시간 변환\n▸ PII(개인식별정보) — 마스킹 대상\n▸ 동적 마스킹(Dynamic Redaction) — 접근자별 다른 데이터 반환\n▸ 규정 준수 — 불필요한 정보 공유 금지\n▸ 저장 공간 최적화 — 단일 소스 유지\n\n【정답 포인트】\n▸ 요구사항: 단일 데이터셋을 애플리케이션별로 다른 마스킹 수준으로 제공\n▸ 핵심: 원본 데이터는 S3에 한 번만 저장, 접근 시 동적으로 마스킹\n▸ S3 Object Lambda 메커니즘:\n  1. 애플리케이션이 S3 Object Lambda 엔드포인트 호출\n  2. Lambda 함수가 요청자 정보 확인\n  3. 요청자 권한에 따라 서로 다른 마스킹 수준 적용\n  4. 마스킹된 데이터 반환\n▸ 장점: 저장 공간 효율(단일 복사본), 동기화 문제 없음, 비용 절감\n\n【오답 체크】\n(A) 여러 복사본 생성 → 저장 공간 낭비, 데이터 동기화 관리 복잡\n(C) AWS Glue 변환 + 복사본 → A와 동일한 문제, 지속적 유지보수 필요\n(D) API Gateway 커스텀 인증 → 추가 네트워크 레이턴시, 복잡한 아키텍처, 비용 증가\n\n【시험 포인트】\n'동적 마스킹' + '최소 운영 오버헤드' = S3 Object Lambda 우선 선택\nS3 Object Lambda는 레이턴시 최소로 실시간 변환\n데이터 거버넌스/PII 보호 = Object Lambda 핵심 활용 사례",
    "en_q": "A company has multiple applications that use datasets that are stored in an Amazon S3 bucket. The company has an ecommerce application that generates a dataset that contains personally identifiable information (PII). The company has an internal analytics application that does not require access to the PII. To comply with regulations, the company must not share PII unnecessarily. A data engineer needs to implement a solution that with redact PII dynamically, based on the needs of each application that accesses the dataset. Which solution will meet the requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create an S3 bucket policy to limit the access each application has. Create multiple copies of the dataset. Give each dataset copy the appropriate level of redaction for the needs of the application that accesses the copy.",
      "B": "Create an S3 Object Lambda endpoint. Use the S3 Object Lambda endpoint to read data from the S3 bucket. Implement redaction logic within an S3 Object Lambda function to dynamically redact PII based on the needs of each application that accesses the data.",
      "C": "Use AWS Glue to transform the data for each application. Create multiple copies of the dataset. Give each dataset copy the appropriate level of redaction for the needs of the application that accesses the copy.",
      "D": "Create an API Gateway endpoint that has custom authorizers. Use the API Gateway endpoint to read data from the S3 bucket. Initiate a REST API call to dynamically redact PII based on the needs of each application that accesses the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132707-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 80,
    "question": "데이터 엔지니어는 추출, 변환 및 로드(ETL) 작업을 구축해야 합니다. 이 ETL 작업은 사용자가 Amazon S3 버킷에 업로드하는 일일 수신 .csv 파일을 처리합니다. 각 S3 객체의 크기는 100MB 미만입니다. 어떤 솔루션이 비용 효율성이 가장 높습니까?",
    "options": {
      "A": "사용자 지정 Python 애플리케이션을 작성합니다. Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터에서 애플리케이션을 호스팅합니다.",
      "B": "PySpark ETL 스크립트를 작성합니다. Amazon EMR 클러스터에서 스크립트를 호스팅합니다.",
      "C": "AWS Glue PySpark 작업을 작성합니다. Apache Spark를 사용하여 데이터를 변환합니다.",
      "D": "AWS Glue Python Shell 작업을 작성합니다. pandas를 사용하여 데이터를 변환합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Glue Python Shell — pandas 기반 행 처리\n▸ AWS Glue PySpark — Spark 기반 분산 처리\n▸ DPU(Data Processing Unit) — Glue 청구 단위\n▸ 비용 효율성 — 최소 비용으로 작업 완료\n▸ 소규모 데이터 — 100MB 미만 개별 파일\n\n【정답 포인트】\n▸ 데이터 규모: 일일 CSV 파일, 각 100MB 미만(소규모)\n▸ 처리 특성: 단순 ETL(pandas 수준), 복잡한 분산 처리 불필요\n▸ 비용 고려:\n  - Python Shell: 전체 DPU 청구 시간 짧음\n  - PySpark: Spark 오버헤드로 불필요한 리소스 소비\n▸ Python Shell + pandas 선택 이유:\n  - 100MB 파일은 단일 머신에서 충분히 처리 가능\n  - Spark 초기화 오버헤드 제거\n  - DPU 청구 시간 최소화\n  - 간단한 CSV 변환에 pandas가 효율적\n\n【오답 체크】\n(A) Amazon EKS → Kubernetes 클러스터 관리 오버헤드, 과도한 인프라 비용\n(B) Amazon EMR → Hadoop 클러스터 프로비저닝, 마스터/워커 노드 관리, 최고 비용\n(C) Glue PySpark → Spark 분산 처리 오버헤드, 100MB 파일에는 불필요\n\n【시험 포인트】\n데이터 크기별 도구 선택:\n  - <100MB(소규모) = Python Shell\n  - 100MB~10GB(중간) = Glue PySpark\n  - >10GB(대규모) = EMR\n'비용 효율성' 키워드 = 가장 가벼운 옵션 선택",
    "en_q": "A data engineer needs to build an extract, transform, and load (ETL) job. The ETL job will process daily incoming .csv files that users upload to an Amazon S3 bucket. The size of each S3 object is less than 100 MB. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Write a custom Python application. Host the application on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster.",
      "B": "Write a PySpark ETL script. Host the script on an Amazon EMR cluster.",
      "C": "Write an AWS Glue PySpark job. Use Apache Spark to transform the data.",
      "D": "Write an AWS Glue Python shell job. Use pandas to transform the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/132708-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 81,
    "question": "데이터 엔지니어가 Orders라는 AWS Glue 크롤러를 사용하여 AWS Glue Data Catalog 테이블을 생성합니다. 데이터 엔지니어는 다음과 같은 새로운 파티션을 추가하려고 합니다: s3://transactions/orders/order_date=2023-01-01 및 s3://transactions/orders/order_date=2023-01-02. 데이터 엔지니어는 테이블의 위치에 있는 모든 폴더 및 파일을 검사하지 않고도 메타데이터를 편집하여 새로운 파티션을 테이블에 포함해야 합니다. 데이터 엔지니어가 Amazon Athena에서 어떤 데이터 정의 언어(DDL) 문을 사용해야 합니까?",
    "options": {
      "A": "ALTER TABLE Orders ADD PARTITION(order_date='2023-01-01') LOCATION 's3://transactions/orders/order_date=2023-01-01'; ALTER TABLE Orders ADD PARTITION(order_date='2023-01-02') LOCATION 's3://transactions/orders/order_date=2023-01-02';",
      "B": "MSCK REPAIR TABLE Orders;",
      "C": "REPAIR TABLE Orders;",
      "D": "ALTER TABLE Orders MODIFY PARTITION(order_date='2023-01-01') LOCATION 's3://transactions/orders/2023-01-01'; ALTER TABLE Orders MODIFY PARTITION(order_date='2023-01-02') LOCATION 's3://transactions/orders/2023-01-02';"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Glue Crawler — 메타데이터 자동 발견\n▸ 파티션(Partition) — 테이블 데이터 분할 관리\n▸ ALTER TABLE — DDL 문으로 스키마 수정\n▸ MSCK REPAIR TABLE — 파일 시스템과 메타스토어 동기화\n▸ 메타데이터 편집 — 폴더 스캔 없이 직접 수정\n\n【정답 포인트】\n▸ 요구사항: 새 파티션을 테이블에 추가하되 전체 폴더 검사하지 않기\n▸ 방법: ALTER TABLE ... ADD PARTITION 사용\n▸ 메커니즘:\n  1. S3 경로에 이미 파티션 폴더 존재\n  2. ALTER TABLE ADD PARTITION으로 메타스토어에 직접 등록\n  3. 폴더 스캔 없이 즉시 쿼리 가능\n▸ 문법:\n  ALTER TABLE Orders ADD PARTITION(order_date='2023-01-01')\n  LOCATION 's3://transactions/orders/order_date=2023-01-01';\n\n【오답 체크】\n(B) MSCK REPAIR TABLE → Hive 메타스토어 동기화 명령\n    - 실제로 S3의 모든 폴더/파일 검사(crawl) 수행\n    - 대규모 버킷에서는 시간 오래 걸림\n    - '폴더 검사하지 않기' 요구사항 위반\n(C) REPAIR TABLE → 표준 Hive DDL 아님, 오류\n(D) MODIFY PARTITION → 기존 파티션의 위치 수정용\n    - 신규 파티션 추가가 아닌 수정 작업\n\n【시험 포인트】\nDDL 명령 용도 정확히 구분:\n  - ADD PARTITION: 신규 파티션 추가(폴더 미리 존재, 메타만 등록)\n  - MSCK REPAIR: 폴더 자동 검사 후 누락 파티션 발견\n  - MODIFY: 기존 파티션 속성 변경\n'폴더 검사하지 않고' = ADD PARTITION (MSCK는 검사 수행)",
    "en_q": "A data engineer creates an AWS Glue Data Catalog table by using an AWS Glue crawler that is named Orders. The data engineer wants to add the following new partitions: s3://transactions/orders/order_date=2023-01-01 s3://transactions/orders/order_date=2023-01-02 The data engineer must edit the metadata to include the new partitions in the table without scanning all the folders and files in the location of the table. Which data definition language (DDL) statement should the data engineer use in Amazon Athena?",
    "en_opts": {
      "A": "ALTER TABLE Orders ADD PARTITION(order_date='2023-01-01') LOCATION 's3://transactions/orders/order_date=2023-01-01'; ALTER TABLE Orders ADD PARTITION(order_date='2023-01-02') LOCATION 's3://transactions/orders/order_date=2023-01-02';",
      "B": "MSCK REPAIR TABLE Orders;",
      "C": "REPAIR TABLE Orders;",
      "D": "ALTER TABLE Orders MODIFY PARTITION(order_date='2023-01-01') LOCATION 's3://transactions/orders/2023-01-01'; ALTER TABLE Orders MODIFY PARTITION(order_date='2023-01-02') LOCATION 's3://transactions/orders/2023-01-02';"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142527-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 82,
    "question": "회사가 Amazon S3에 압축되지 않은 10~15TB의 .csv 파일을 저장합니다. 회사는 Amazon Athena를 일회성 쿼리 엔진으로 평가하고 있습니다. 회사는 데이터를 변환하여 쿼리 런타임 및 저장 비용을 최적화하려고 합니다. Athena 쿼리를 위해 이러한 요구사항을 충족할 파일 형식 및 압축 솔루션은 무엇입니까?",
    "options": {
      "A": "zip으로 압축된 .csv 형식",
      "B": "bzip2로 압축된 JSON 형식",
      "C": "Snappy로 압축된 Apache Parquet 형식",
      "D": "LZO로 압축된 Apache Avro 형식"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Apache Parquet — 컬럼 저장 형식\n▸ Snappy 압축 — 빠른 압축/해제, 높은 압축률\n▸ 쿼리 런타임 최적화 — 컬럼 형식으로 필요한 열만 읽음\n▸ 저장 비용 최적화 — 효율적 압축으로 저장 공간 감소\n▸ Athena 호환성 — ParquetSnappy 완벽 지원\n\n【정답 포인트】\n▸ 초기 데이터: 10~15TB 미압축 CSV 파일\n▸ Athena 쿼리 최적화:\n  - 쿼리 런타임: CSV는 전체 행 읽기 필요, Parquet은 필요 열만 읽음\n    → 컬럼 형식(Parquet) 사용 → 50~70% 런타임 단축\n  - 저장 비용: 미압축 CSV > 압축 CSV > 압축 Parquet\n    → Snappy 압축 Parquet으로 저장 70~80% 감소\n▸ Snappy 선택 이유:\n  - 높은 압축률(3:1 이상)\n  - 빠른 압축/해제(CPU 오버헤드 최소)\n  - Athena에서 최적화된 지원\n  - gzip과 달리 병렬 처리 가능\n\n【오답 체크】\n(A) zip 압축 CSV → 텍스트 형식은 스캔 비효율\n    - Athena가 전체 행 읽기 필요\n    - 런타임 단축 미미\n(B) bzip2 JSON → JSON은 컬럼 형식이 아님\n    - 스키마 분석 어려움\n    - 압축률은 좋지만 쿼리 성능 개선 없음\n(D) LZO Avro → LZO는 라이선스 문제, Athena에서 부분 지원만 됨\n    - Avro는 행 기반 형식\n\n【시험 포인트】\nAthena 최적화:\n  - 쿼리 런타임: Parquet > ORC > JSON > CSV (컬럼 형식 우선)\n  - 압축: Snappy/gzip (Athena 최적화)\n  - 저장 비용: Parquet + Snappy = 최고 효율\n'쿼리 런타임 + 저장 비용' 둘 다 = Parquet + Snappy",
    "en_q": "A company stores 10 to 15 TB of uncompressed .csv files in Amazon S3. The company is evaluating Amazon Athena as a one-time query engine. The company wants to transform the data to optimize query runtime and storage costs. Which file format and compression solution will meet these requirements for Athena queries?",
    "en_opts": {
      "A": ".csv format compressed with zip",
      "B": "JSON format compressed with bzip2",
      "C": "Apache Parquet format compressed with Snappy",
      "D": "Apache Avro format compressed with LZO"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142529-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 83,
    "question": "회사는 Apache Airflow를 사용하여 회사의 온프레미스 데이터 파이프라인을 오케스트레이션합니다. 회사는 파이프라인의 일부로 SQL 데이터 품질 검사 작업을 실행합니다. 회사는 파이프라인을 AWS로 마이그레이션하고 AWS 관리형 서비스를 사용하려고 합니다. 어떤 솔루션이 최소한의 리팩토링으로 요구사항을 충족합니까?",
    "options": {
      "A": "회사가 Airflow를 사용하는 위치에 가장 가까운 AWS 리전에 AWS Outposts를 설정합니다. 서버를 Outposts에서 호스팅되는 Amazon EC2 인스턴스로 마이그레이션합니다. 파이프라인을 Outposts에서 호스팅되는 EC2 인스턴스와 상호작용하도록 업데이트합니다.",
      "B": "Airflow 애플리케이션 및 회사가 마이그레이션해야 할 코드를 포함하는 사용자 지정 Amazon Machine Image(AMI)를 생성합니다. 사용자 지정 AMI를 사용하여 Amazon EC2 인스턴스를 배포합니다. 새로 배포된 EC2 인스턴스와 상호작용하도록 네트워크 연결을 업데이트합니다.",
      "C": "기존 Airflow 오케스트레이션 구성을 Amazon Managed Workflows for Apache Airflow(Amazon MWAA)로 마이그레이션합니다. Airflow의 SQL 작업을 사용하여 수집 중에 데이터 품질 검사를 생성합니다.",
      "D": "파이프라인을 AWS Step Functions 워크플로우로 변환합니다. SQL 기반 데이터 품질 검사를 Python 기반 AWS Lambda 함수로 다시 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Apache Airflow — 온프레미스 워크플로우 오케스트레이션\n▸ Amazon MWAA — 관리형 Airflow 서비스\n▸ 최소 리팩토링 — 기존 코드 변경 최소\n▸ AWS 관리형 서비스 — 완전 관리형 원함\n▸ SQL 데이터 품질 검사 — Airflow SQL Operator 지원\n\n【정답 포인트】\n▸ 상황: 온프레미스 Airflow → AWS 클라우드 마이그레이션\n▸ 조건: 최소 리팩토링 + AWS 관리형 서비스\n▸ Amazon MWAA 선택 이유:\n  - Airflow 완벽 호환성(기존 DAG/오퍼레이터 그대로 사용)\n  - 완전 관리형(인프라 관리 불필요)\n  - SQL 작업 지원(SQLExecuteQueryOperator)\n  - 데이터 품질 검사는 Airflow의 표준 패턴\n  - 온프레미스 구성 그대로 AWS로 옮기기만 함\n▸ 마이그레이션 절차:\n  1. 기존 Airflow DAG 코드 그대로 사용\n  2. MWAA 환경 생성\n  3. DAG 파일만 업로드\n  4. MWAA가 스케줄링/실행 담당\n\n【오답 체크】\n(A) AWS Outposts → 온프레미스 확장이지 클라우드 이전 아님\n    - 관리형 서비스 아님\n    - 목적 위배\n(B) 사용자 지정 EC2 AMI → 완전 관리형 아님\n    - Airflow 인프라 관리 필요\n    - 리팩토링은 적지만 '관리형' 요구사항 불만족\n(D) AWS Step Functions → 완전한 리팩토링 필요\n    - Airflow DAG를 Step Functions 상태 머신으로 변환\n    - SQL 작업을 Lambda Python으로 재구현\n    - 기존 코드 대량 변경\n\n【시험 포인트】\nAirflow 마이그레이션 = Amazon MWAA(호환성 + 최소 리팩토링)\nStep Functions = 완전 다른 패러다임(리팩토링 과다)\n'최소 리팩토링' = 기존 도구와의 호환성 최우선",
    "en_q": "A company uses Apache Airflow to orchestrate the company's current on-premises data pipelines. The company runs SQL data quality check tasks as part of the pipelines. The company wants to migrate the pipelines to AWS and to use AWS managed services. Which solution will meet these requirements with the LEAST amount of refactoring?",
    "en_opts": {
      "A": "Setup AWS Outposts in the AWS Region that is nearest to the location where the company uses Airflow. Migrate the servers into Outposts hosted Amazon EC2 instances. Update the pipelines to interact with the Outposts hosted EC2 instances instead of the on-premises pipelines.",
      "B": "Create a custom Amazon Machine Image (AMI) that contains the Airflow application and the code that the company needs to migrate. Use the custom AMI to deploy Amazon EC2 instances. Update the network connections to interact with the newly deployed EC2 instances.",
      "C": "Migrate the existing Airflow orchestration configuration into Amazon Managed Workflows for Apache Airflow (Amazon MWAA). Create the data quality checks during the ingestion to validate the data quality by using SQL tasks in Airflow.",
      "D": "Convert the pipelines to AWS Step Functions workflows. Recreate the data quality checks in SQL as Python based AWS Lambda functions."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142558-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 84,
    "question": "회사는 여러 소스에서 들어오는 데이터를 변환하기 위해 Amazon EMR을 추출, 변환 및 로드(ETL) 파이프라인으로 사용합니다. 데이터 엔지니어는 파이프라인을 오케스트레이션하여 성능을 최대화해야 합니다. 어떤 AWS 서비스가 비용 효율적으로 이 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon EventBridge",
      "B": "Amazon Managed Workflows for Apache Airflow (Amazon MWAA)",
      "C": "AWS Step Functions",
      "D": "AWS Glue Workflows"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon EMR — Hadoop 기반 분산 처리\n▸ ETL 파이프라인 오케스트레이션 — 작업 스케줄링/의존성 관리\n▸ 성능 최대화 — 병렬 처리, 효율적 리소스 활용\n▸ 비용 효율성 — 자동 확장으로 최적 리소스\n▸ 스팟 인스턴스 — 저비용 컴퓨팅\n\n【정답 포인트】\n▸ 상황: EMR을 이용한 다중 소스 ETL → 오케스트레이션 필요\n▸ 요구사항: 파이프라인 성능 최대화 + 비용 효율\n▸ 핵심: EMR 클러스터 자체는 데이터 처리만 담당\n        → 클러스터 시작/작업 스케줄링/모니터링은 별도 서비스 필요\n▸ 솔루션:\n  - AWS Step Functions: EMR 클러스터 자동 프로비저닝/작업 실행\n  - AWS Glue: 관리형 ETL(클러스터 관리 자동)\n  - Amazon MWAA: Airflow로 오케스트레이션\n  - EventBridge + Lambda: 커스텀 워크플로우\n▸ 최선의 선택(비용 효율):\n  - 이미 EMR 투자 → Step Functions(최소 추가 비용)\n  - 새로 구축 → AWS Glue(관리형, 비용 효율)\n  - 복잡한 의존성 → Amazon MWAA\n\n【오답 체크】\n(Step Functions로 가정할 경우)\n - EMR 클러스터 프로비저닝 자동화\n - 병렬 처리 최적화\n - 스팟 인스턴스로 비용 절감\n - 작업 의존성 관리\n\n【시험 포인트】\nEMR 오케스트레이션 옵션:\n  - 기존 EMR 파이프라인: Step Functions로 자동화\n  - 새로운 다중 소스 ETL: AWS Glue(관리형)\n  - 복잡한 워크플로우: Amazon MWAA\n'EMR 성능 최대화' = Step Functions로 병렬 처리 최적화",
    "en_q": "A company uses Amazon EMR as an extract, transform, and load (ETL) pipeline to transform data that comes from multiple sources. A data engineer must orchestrate the pipeline to maximize performance. Which AWS service will meet this requirement MOST cost effectively?",
    "en_opts": {
      "A": "Amazon EventBridge",
      "B": "Amazon Managed Workflows for Apache Airflow (Amazon MWAA)",
      "C": "AWS Step Functions",
      "D": "AWS Glue Workflows"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142535-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 85,
    "question": "온라인 소매 회사는 Application Load Balancer(ALB) 접근 로그를 Amazon S3 버킷에 저장합니다. 회사는 Amazon Athena를 사용하여 로그를 쿼리하여 트래픽 패턴을 분석하려고 합니다. 데이터 엔지니어는 Athena에서 분할되지 않은 테이블을 생성합니다. 데이터 양이 점차 증가하면서 쿼리 응답 시간도 증가합니다. 데이터 엔지니어는 Athena의 쿼리 성능을 개선하려고 합니다. 어떤 솔루션이 최소한의 운영 노력으로 이 요구사항을 충족합니까?",
    "options": {
      "A": "모든 ALB 접근 로그의 스키마를 결정하고 파티션 메타데이터를 AWS Glue Data Catalog에 작성하는 AWS Glue 작업을 생성합니다.",
      "B": "모든 ALB 접근 로그의 스키마를 결정하고 파티션 메타데이터를 AWS Glue Data Catalog에 작성하는 분류자를 포함하는 AWS Glue 크롤러를 생성합니다.",
      "C": "모든 ALB 접근 로그를 변환하는 AWS Lambda 함수를 생성합니다. 결과를 Amazon S3에 Apache Parquet 형식으로 저장합니다. 메타데이터를 분할합니다. Athena를 사용하여 변환된 데이터를 쿼리합니다.",
      "D": "Apache Hive를 사용하여 분할된 테이블을 생성합니다. AWS Lambda 함수를 사용하여 모든 ALB 접근 로그를 변환합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "An online retail company stores Application Load Balancer (ALB) access logs in an Amazon S3 bucket. The company wants to use Amazon Athena to query the logs to analyze traffic patterns. A data engineer creates an unpartitioned table in Athena. As the amount of the data gradually increases, the response time for queries also increases. The data engineer wants to improve the query performance in Athena. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Create an AWS Glue job that determines the schema of all ALB access logs and writes the partition metadata to AWS Glue Data Catalog.",
      "B": "Create an AWS Glue crawler that includes a classifier that determines the schema of all ALB access logs and writes the partition metadata to AWS Glue Data Catalog.",
      "C": "Create an AWS Lambda function to transform all ALB access logs. Save the results to Amazon S3 in Apache Parquet format. Partition the metadata. Use Athena to query the transformed data.",
      "D": "Use Apache Hive to create bucketed tables. Use an AWS Lambda function to transform all ALB access logs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142559-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 86,
    "question": "회사는 AWS에 비즈니스 인텔리전스 플랫폼을 가지고 있습니다. 회사는 AWS Storage Gateway Amazon S3 File Gateway를 사용하여 온프레미스 환경에서 Amazon S3 버킷으로 파일을 전송합니다. 데이터 엔지니어는 각 파일 전송이 성공적으로 완료된 후에 자동으로 AWS Glue 워크플로우를 시작하여 일련의 AWS Glue 작업을 실행하는 프로세스를 설정해야 합니다. 어떤 솔루션이 최소한의 운영 오버헤드로 이 요구사항을 충족합니까?",
    "options": {
      "A": "이전의 성공적인 파일 전송을 기반으로 파일 전송이 일반적으로 완료되는 시간을 결정합니다. Amazon EventBridge 예약된 이벤트를 설정하여 그 시간에 AWS Glue 작업을 시작합니다.",
      "B": "성공적인 S3 File Gateway 파일 전송 이벤트 후에 AWS Glue 워크플로우를 시작하는 Amazon EventBridge 이벤트를 설정합니다.",
      "C": "데이터 엔지니어가 각 파일 전송이 완료되었을 때 AWS Glue 워크플로우를 시작할 수 있도록 온디맨드 AWS Glue 워크플로우를 설정합니다.",
      "D": "AWS Glue Workflow를 호출하는 AWS Lambda 함수를 설정합니다. S3 객체 생성을 Lambda 함수의 트리거로 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "A company has a business intelligence platform on AWS. The company uses an AWS Storage Gateway Amazon S3 File Gateway to transfer files from the company's on-premises environment to an Amazon S3 bucket. A data engineer needs to setup a process that will automatically launch an AWS Glue workflow to run a series of AWS Glue jobs when each file transfer finishes successfully. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Determine when the file transfers usually finish based on previous successful file transfers. Set up an Amazon EventBridge scheduled event to initiate the AWS Glue jobs at that time of day.",
      "B": "Set up an Amazon EventBridge event that initiates the AWS Glue workflow after every successful S3 File Gateway file transfer event.",
      "C": "Set up an on-demand AWS Glue workflow so that the data engineer can start the AWS Glue workflow when each file transfer is complete.",
      "D": "Set up an AWS Lambda function that will invoke the AWS Glue Workflow. Set up an event for the creation of an S3 object as a trigger for the Lambda function."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142560-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 87,
    "question": "소매 회사는 Amazon Aurora PostgreSQL을 사용하여 실시간 트랜잭션 데이터를 처리하고 저장합니다. 회사는 데이터 웨어하우스에 Amazon Redshift 클러스터를 사용합니다. 추출, 변환 및 로드(ETL) 작업은 매일 아침 실행되어 PostgreSQL 데이터베이스의 새로운 데이터로 Redshift 클러스터를 업데이트합니다. 회사가 빠르게 성장하고 있으며 Redshift 클러스터를 비용 최적화해야 합니다. 데이터 엔지니어는 과거 데이터를 보관할 솔루션을 만들어야 합니다. 데이터 엔지니어는 PostgreSQL의 실시간 트랜잭션 데이터, Redshift의 현재 데이터, 보관된 과거 데이터를 효과적으로 결합하는 분석 쿼리를 실행할 수 있어야 합니다. 솔루션은 비용을 절감하기 위해 Amazon Redshift에 최근 15개월의 데이터만 보관해야 합니다. 이 요구사항을 충족시키는 단계 조합은 무엇입니까? (2개를 선택하세요.)",
    "options": {
      "A": "Amazon Redshift Federated Query 기능을 구성하여 PostgreSQL 데이터베이스에 있는 실시간 트랜잭션 데이터를 쿼리합니다.",
      "B": "Amazon Redshift Spectrum을 구성하여 PostgreSQL 데이터베이스에 있는 실시간 트랜잭션 데이터를 쿼리합니다.",
      "C": "월별 작업을 예약하여 15개월보다 오래된 데이터를 UNLOAD 명령을 사용하여 Amazon S3에 복사합니다. Redshift 클러스터에서 이전 데이터를 삭제합니다. Amazon Redshift Spectrum을 구성하여 Amazon S3의 과거 데이터에 접근합니다.",
      "D": "월별 작업을 예약하여 15개월보다 오래된 데이터를 UNLOAD 명령을 사용하여 Amazon S3 Glacier Flexible Retrieval에 복사합니다. Redshift 클러스터에서 이전 데이터를 삭제합니다. Redshift Spectrum을 구성하여 S3 Glacier Flexible Retrieval에서 과거 데이터에 접근합니다.",
      "E": "PostgreSQL의 라이브 데이터, Redshift의 현재 데이터, 다른 소스의 과거 데이터를 결합하는 구체화된 뷰를 Amazon Redshift에 생성합니다."
    },
    "answer": "A",
    "source": "https://www.examtopics.com/discussions/amazon/view/142537-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "A retail company uses Amazon Aurora PostgreSQL to process and store live transactional data. The company uses an Amazon Redshift cluster for a data warehouse. An extract, transform, and load (ETL) job runs every morning to update the Redshift cluster with new data from the PostgreSQL database. The company has grown rapidly and needs to cost optimize the Redshift cluster. A data engineer needs to create a solution to archive historical data. The data engineer must be able to run analytics queries that effectively combine data from live transactional data in PostgreSQL, current data in Redshift, and archived historical data. The solution must keep only the most recent 15 months of data in Amazon Redshift to reduce costs. Which combination of steps will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Configure the Amazon Redshift Federated Query feature to query live transactional data that is in the PostgreSQL database.",
      "B": "Configure Amazon Redshift Spectrum to query live transactional data that is in the PostgreSQL database.",
      "C": "Schedule a monthly job to copy data that is older than 15 months to Amazon S3 by using the UNLOAD command. Delete the old data from the Redshift cluster. Configure Amazon Redshift Spectrum to access historical data in Amazon S3.",
      "D": "Schedule a monthly job to copy data that is older than 15 months to Amazon S3 Glacier Flexible Retrieval by using the UNLOAD command. Delete the old data from the Redshift cluster. Configure Redshift Spectrum to access historical data from S3 Glacier Flexible Retrieval.",
      "E": "Create a materialized view in Amazon Redshift that combines live, current, and historical data from different sources."
    }
  },
  {
    "id": 88,
    "question": "제조 회사는 전 세계 시설에 많은 IoT 장치를 가지고 있습니다. 회사는 Amazon Kinesis Data Streams를 사용하여 장치에서 데이터를 수집합니다. 데이터에는 장치 ID, 캡처 날짜, 측정 유형, 측정값 및 시설 ID가 포함됩니다. 회사는 시설 ID를 파티션 키로 사용합니다. 회사의 운영 팀은 최근 많은 WriteThroughputExceeded 예외를 관찰했습니다. 운영 팀은 일부 샤드가 많이 사용되었지만 다른 샤드는 일반적으로 유휴 상태였다는 것을 발견했습니다. 회사는 운영 팀이 관찰한 문제를 어떻게 해결해야 합니까?",
    "options": {
      "A": "파티션 키를 시설 ID에서 무작위로 생성된 키로 변경합니다.",
      "B": "샤드 수를 증가시킵니다.",
      "C": "생산자 측에서 데이터를 보관합니다.",
      "D": "파티션 키를 시설 ID에서 캡처 날짜로 변경합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "A manufacturing company has many IoT devices in facilities around the world. The company uses Amazon Kinesis Data Streams to collect data from the devices. The data includes device ID, capture date, measurement type, measurement value, and facility ID. The company uses facility ID as the partition key. The company's operations team recently observed many WriteThroughputExceeded exceptions. The operations team found that some shards were heavily used but other shards were generally idle. How should the company resolve the issues that the operations team observed?",
    "en_opts": {
      "A": "Change the partition key from facility ID to a randomly generated key.",
      "B": "Increase the number of shards.",
      "C": "Archive the data on the producer's side.",
      "D": "Change the partition key from facility ID to capture date."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142562-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 89,
    "question": "데이터 엔지니어는 Amazon Athena의 판매 데이터 테이블에 대해 실행되는 SQL 쿼리의 성능을 개선하려고 합니다. 데이터 엔지니어는 특정 SQL 문의 실행 계획을 이해하려고 합니다. 데이터 엔지니어는 또한 SQL 쿼리의 각 작업의 계산 비용을 보고 싶어합니다. SQL 쿼리 성능을 개선하기 위해 어떤 문을 실행해야 합니까?",
    "options": {
      "A": "EXPLAIN SELECT * FROM sales;",
      "B": "EXPLAIN ANALYZE FROM sales;",
      "C": "EXPLAIN ANALYZE SELECT * FROM sales;",
      "D": "EXPLAIN FROM sales;"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "A data engineer wants to improve the performance of SQL queries in Amazon Athena that run against a sales data table. The data engineer wants to understand the execution plan of a specific SQL statement. The data engineer also wants to see the computational cost of each operation in a SQL query. Which statement does the data engineer need to run to meet these requirements?",
    "en_opts": {
      "A": "EXPLAIN SELECT * FROM sales;",
      "B": "EXPLAIN ANALYZE FROM sales;",
      "C": "EXPLAIN ANALYZE SELECT * FROM sales;",
      "D": "EXPLAIN FROM sales;"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142563-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 90,
    "question": "회사는 VPC 내에서 로그 전달 스트림을 프로비저닝할 계획입니다. 회사는 VPC 플로우 로그를 Amazon CloudWatch Logs에 발행하도록 구성했습니다. 회사는 추가 분석을 위해 플로우 로그를 거의 실시간으로 Splunk로 전송해야 합니다. 어떤 솔루션이 최소한의 운영 오버헤드로 이 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon Kinesis Data Streams 데이터 스트림을 구성하여 Splunk를 대상으로 사용합니다. CloudWatch Logs 구독 필터를 생성하여 로그 이벤트를 데이터 스트림으로 전송합니다.",
      "B": "Amazon Kinesis Data Firehose 전달 스트림을 생성하여 Splunk를 대상으로 사용합니다. CloudWatch Logs 구독 필터를 생성하여 로그 이벤트를 전달 스트림으로 전송합니다.",
      "C": "Amazon Kinesis Data Firehose 전달 스트림을 생성하여 Splunk를 대상으로 사용합니다. CloudWatch Logs에서 전달 스트림으로 플로우 로그를 전송하는 AWS Lambda 함수를 생성합니다.",
      "D": "Amazon Kinesis Data Streams 데이터 스트림을 구성하여 Splunk를 대상으로 사용합니다. CloudWatch Logs에서 데이터 스트림으로 플로우 로그를 전송하는 AWS Lambda 함수를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "A company plans to provision a log delivery stream within a VPC. The company configured the VPC flow logs to publish to Amazon CloudWatch Logs. The company needs to send the flow logs to Splunk in near real time for further analysis. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Configure an Amazon Kinesis Data Streams data stream to use Splunk as the destination. Create a CloudWatch Logs subscription filter to send log events to the data stream.",
      "B": "Create an Amazon Kinesis Data Firehose delivery stream to use Splunk as the destination. Create a CloudWatch Logs subscription filter to send log events to the delivery stream.",
      "C": "Create an Amazon Kinesis Data Firehose delivery stream to use Splunk as the destination. Create an AWS Lambda function to send the flow logs from CloudWatch Logs to the delivery stream.",
      "D": "Configure an Amazon Kinesis Data Streams data stream to use Splunk as the destination. Create an AWS Lambda function to send the flow logs from CloudWatch Logs to the data stream."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142564-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 91,
    "question": "회사는 AWS에 데이터 레이크를 가지고 있습니다. 데이터 레이크는 비즈니스 단위의 데이터 소스를 수집합니다. 회사는 쿼리를 위해 Amazon Athena를 사용합니다. 저장소 계층은 Amazon S3이고 메타데이터 저장소는 AWS Glue Data Catalog입니다. 회사는 데이터 과학자 및 비즈니스 분석가가 데이터를 사용할 수 있도록 하려고 합니다. 그러나 회사는 먼저 Athena의 사용자 역할 및 책임에 따른 세밀한 칼럼 수준의 데이터 접근을 관리해야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "AWS Lake Formation을 설정합니다. Lake Formation에서 IAM 역할을 기반으로 사용자 및 애플리케이션에 대한 보안 정책 기반 규칙을 정의합니다.",
      "B": "AWS Glue 테이블에 대한 IAM 리소스 기반 정책을 정의합니다. 동일한 정책을 IAM 사용자 그룹에 연결합니다.",
      "C": "AWS Glue 테이블에 대한 IAM 신원 기반 정책을 정의합니다. 동일한 정책을 IAM 역할에 연결합니다. IAM 역할을 사용자를 포함하는 IAM 그룹과 연결합니다.",
      "D": "AWS Resource Access Manager(AWS RAM)의 리소스 공유를 생성하여 IAM 사용자에게 접근 권한을 부여합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "A company has a data lake on AWS. The data lake ingests sources of data from business units. The company uses Amazon Athena for queries. The storage layer is Amazon S3 with an AWS Glue Data Catalog as a metadata repository. The company wants to make the data available to data scientists and business analysts. However, the company first needs to manage fine-grained, column-level data access for Athena based on the user roles and responsibilities. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Set up AWS Lake Formation. Define security policy-based rules for the users and applications by IAM role in Lake Formation.",
      "B": "Define an IAM resource-based policy for AWS Glue tables. Attach the same policy to IAM user groups.",
      "C": "Define an IAM identity-based policy for AWS Glue tables. Attach the same policy to IAM roles. Associate the IAM roles with IAM groups that contain the users.",
      "D": "Create a resource share in AWS Resource Access Manager (AWS RAM) to grant access to IAM users."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142565-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 92,
    "question": "회사는 Amazon S3의 데이터를 검증하고 변환하기 위해 여러 AWS Glue 추출, 변환 및 로드(ETL) 작업을 개발했습니다. ETL 작업은 매일 한 번씩 데이터를 Amazon RDS for MySQL로 배치 로드합니다. ETL 작업은 DynamicFrame을 사용하여 S3 데이터를 읽습니다. 현재 ETL 작업은 S3 버킷의 모든 데이터를 처리합니다. 그러나 회사는 작업이 일일 증분 데이터만 처리하길 원합니다. 어떤 솔루션이 최소한의 코딩 노력으로 이 요구사항을 충족합니까?",
    "options": {
      "A": "S3 파일 상태를 읽고 상태를 Amazon DynamoDB에 로깅하는 ETL 작업을 생성합니다.",
      "B": "ETL 작업에 대해 작업 북마크(Job Bookmarks)를 활성화하여 실행 후 상태를 업데이트하고 이전에 처리된 데이터를 추적합니다.",
      "C": "ETL 작업에 대해 작업 메트릭(Job Metrics)을 활성화하여 Amazon CloudWatch에서 처리된 객체를 추적합니다.",
      "D": "각 실행 후 처리된 객체를 Amazon S3에서 삭제하도록 ETL 작업을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "A company has developed several AWS Glue extract, transform, and load (ETL) jobs to validate and transform data from Amazon S3. The ETL jobs load the data into Amazon RDS for MySQL in batches once every day. The ETL jobs use a DynamicFrame to read the S3 data. The ETL jobs currently process all the data that is in the S3 bucket. However, the company wants the jobs to process only the daily incremental data. Which solution will meet this requirement with the LEAST coding effort?",
    "en_opts": {
      "A": "Create an ETL job that reads the S3 file status and logs the status in Amazon DynamoDB.",
      "B": "Enable job bookmarks for the ETL jobs to update the state after a run to keep track of previously processed data.",
      "C": "Enable job metrics for the ETL jobs to help keep track of processed objects in Amazon CloudWatch.",
      "D": "Configure the ETL jobs to delete processed objects from Amazon S3 after each run."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142566-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 93,
    "question": "온라인 소매 회사는 VPC에 있는 Amazon EC2 인스턴스에서 실행되는 애플리케이션을 가지고 있습니다. 회사는 VPC의 플로우 로그를 수집하고 네트워크 트래픽을 분석하려고 합니다. 어떤 솔루션이 가장 비용 효율적으로 이 요구사항을 충족합니까?",
    "options": {
      "A": "플로우 로그를 Amazon CloudWatch Logs에 발행합니다. Amazon Athena를 사용하여 분석합니다.",
      "B": "플로우 로그를 Amazon CloudWatch Logs에 발행합니다. Amazon OpenSearch Service 클러스터를 사용하여 분석합니다.",
      "C": "플로우 로그를 텍스트 형식으로 Amazon S3에 발행합니다. Amazon Athena를 사용하여 분석합니다.",
      "D": "플로우 로그를 Apache Parquet 형식으로 Amazon S3에 발행합니다. Amazon Athena를 사용하여 분석합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "An online retail company has an application that runs on Amazon EC2 instances that are in a VPC. The company wants to collect flow logs for the VPC and analyze network traffic. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Publish flow logs to Amazon CloudWatch Logs. Use Amazon Athena for analytics.",
      "B": "Publish flow logs to Amazon CloudWatch Logs. Use an Amazon OpenSearch Service cluster for analytics.",
      "C": "Publish flow logs to Amazon S3 in text format. Use Amazon Athena for analytics.",
      "D": "Publish flow logs to Amazon S3 in Apache Parquet format. Use Amazon Athena for analytics."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142567-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 94,
    "question": "소매 회사는 거래, 매장 위치, 고객 정보 테이블을 4개의 예약된 ra3.4xlarge Amazon Redshift 클러스터 노드에 저장합니다. 세 테이블 모두 EVEN 분배를 사용합니다. 회사는 매장 위치 테이블을 몇 년에 한 두 번만 업데이트합니다. 데이터 엔지니어는 대부분의 쿼리에 대해 전체 매장 위치 테이블이 지속적으로 모든 4개 컴퓨팅 노드에 브로드캐스트되기 때문에 Redshift 큐가 느려진다는 것을 발견했습니다. 데이터 엔지니어는 매장 위치 테이블의 브로드캐스트를 최소화하여 쿼리 성능을 빨리 하려고 합니다. 어떤 솔루션이 가장 비용 효율적으로 이 요구사항을 충족합니까?",
    "options": {
      "A": "매장 위치 테이블의 분배 스타일을 EVEN 분배에서 ALL 분배로 변경합니다.",
      "B": "매장 위치 테이블의 분배 스타일을 가장 높은 차원을 가진 칼럼을 기반으로 KEY 분배로 변경합니다.",
      "C": "모든 테이블의 정렬 키에 store_id라는 조인 칼럼을 추가합니다.",
      "D": "Redshift 예약 노드를 같은 인스턴스 패밀리의 더 큰 인스턴스 크기로 업그레이드합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "A retail company stores transactions, store locations, and customer information tables in four reserved ra3.4xlarge Amazon Redshift cluster nodes. All three tables use even table distribution. The company updates the store location table only once or twice every few years. A data engineer notices that Redshift queues are slowing down because the whole store location table is constantly being broadcast to all four compute nodes for most queries. The data engineer wants to speed up the query performance by minimizing the broadcasting of the store location table. Which solution will meet these requirements in the MOST cost-effective way?",
    "en_opts": {
      "A": "Change the distribution style of the store location table from EVEN distribution to ALL distribution.",
      "B": "Change the distribution style of the store location table to KEY distribution based on the column that has the highest dimension.",
      "C": "Add a join column named store_id into the sort key for all the tables.",
      "D": "Upgrade the Redshift reserved node to a larger instance size in the same instance family."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142568-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 95,
    "question": "회사는 Amazon Redshift에 저장된 Sales라는 테이블을 포함하는 데이터 웨어하우스를 가지고 있습니다. 테이블에는 city_name이라는 칼럼이 포함되어 있습니다. 회사는 \"San\" 또는 \"El\"로 시작하는 city_name을 가진 모든 행을 찾기 위해 테이블을 쿼리하려고 합니다. 어떤 SQL 쿼리가 이 요구사항을 충족합니까?",
    "options": {
      "A": "Select * from Sales where city_name ~ '$(San|El)*';",
      "B": "Select * from Sales where city_name ~ '^(San|El)*';",
      "C": "Select * from Sales where city_name ~'$(San&El)*';",
      "D": "Select * from Sales where city_name ~ '^(San&El)*';"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "A company has a data warehouse that contains a table that is named Sales. The company stores the table in Amazon Redshift. The table includes a column that is named city_name. The company wants to query the table to find all rows that have a city_name that starts with \"San\" or \"El\". Which SQL query will meet this requirement?",
    "en_opts": {
      "A": "Select * from Sales where city_name ~ '$(San|El)*';",
      "B": "Select * from Sales where city_name ~ '^(San|El)*';",
      "C": "Select * from Sales where city_name ~'$(San&El)*';",
      "D": "Select * from Sales where city_name ~ '^(San&El)*';"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142569-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 96,
    "question": "한 회사가 온프레미스 PostgreSQL 데이터베이스에서 AWS로 고객 통화 데이터를 보내어 거의 실시간 인사이트를 생성하려고 합니다. 솔루션은 PostgreSQL 데이터베이스에서 실행되는 운영 데이터 저장소의 업데이트를 캡처하고 로드해야 합니다. 데이터는 지속적으로 변경됩니다. 데이터 엔지니어가 AWS Database Migration Service(AWS DMS) 지속적 복제 작업을 설정합니다. 작업은 각 테이블의 PostgreSQL 소스 데이터베이스 트랜잭션 로그에서 거의 실시간으로 변경사항을 읽습니다. 그 다음 작업은 데이터를 Amazon Redshift 클러스터로 전송하여 처리합니다. 데이터 엔지니어는 작업의 변경 데이터 캡처(CDC) 중에 지연 문제를 발견합니다. 데이터 엔지니어는 PostgreSQL 소스 데이터베이스가 높은 지연의 원인이라고 생각합니다. PostgreSQL 데이터베이스가 높은 지연의 원인임을 확인할 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon CloudWatch를 사용하여 DMS 작업을 모니터링합니다. CDCIncomingChanges 메트릭을 검토하여 소스 데이터베이스에서 CDC의 지연을 확인합니다.",
      "B": "postgresql.conf 설정 파일에서 소스 데이터베이스의 논리적 복제가 구성되었는지 확인합니다.",
      "C": "소스 데이터베이스의 DMS 엔드포인트에 대해 Amazon CloudWatch Logs를 활성화합니다. 오류 메시지를 확인합니다.",
      "D": "Amazon CloudWatch를 사용하여 DMS 작업을 모니터링합니다. CDCLatencySource 메트릭을 검토하여 소스 데이터베이스에서 CDC의 지연을 확인합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "A company needs to send customer call data from its on-premises PostgreSQL database to AWS to generate near real-time insights. The solution must capture and load updates from operational data stores that run in the PostgreSQL database. The data changes continuously. A data engineer configures an AWS Database Migration Service (AWS DMS) ongoing replication task. The task reads changes in near real time from the PostgreSQL source database transaction logs for each table. The task then sends the data to an Amazon Redshift cluster for processing. The data engineer discovers latency issues during the change data capture (CDC) of the task. The data engineer thinks that the PostgreSQL source database is causing the high latency. Which solution will confirm that the PostgreSQL database is the source of the high latency?",
    "en_opts": {
      "A": "Use Amazon CloudWatch to monitor the DMS task. Examine the CDCIncomingChanges metric to identify delays in the CDC from the source database.",
      "B": "Verify that logical replication of the source database is configured in the postgresql.conf configuration file.",
      "C": "Enable Amazon CloudWatch Logs for the DMS endpoint of the source database. Check for error messages.",
      "D": "Use Amazon CloudWatch to monitor the DMS task. Examine the CDCLatencySource metric to identify delays in the CDC from the source database."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142571-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 97,
    "question": "한 연구실에서 IoT 센서를 사용하여 프로젝트의 습도, 온도, 기압을 모니터링합니다. 센서는 10초마다 100KB의 데이터를 전송합니다. 다운스트림 프로세스는 30초마다 Amazon S3 버킷에서 데이터를 읽습니다. 데이터를 S3 버킷으로 전달할 때 가장 낮은 지연 시간으로 전달할 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon Kinesis Data Streams 및 Amazon Kinesis Data Firehose를 사용하여 데이터를 S3 버킷으로 전달합니다. Kinesis Data Firehose의 기본 버퍼 간격을 사용합니다.",
      "B": "Amazon Kinesis Data Streams를 사용하여 데이터를 S3 버킷으로 전달합니다. 스트림을 구성하여 5개의 프로비저닝된 샤드를 사용하도록 설정합니다.",
      "C": "Amazon Kinesis Data Streams를 사용하고 Kinesis Client Library를 호출하여 데이터를 S3 버킷으로 전달합니다. 애플리케이션에서 5초 버퍼 간격을 사용합니다.",
      "D": "Amazon Managed Service for Apache Flink(이전의 Amazon Kinesis Data Analytics) 및 Amazon Kinesis Data Firehose를 사용하여 데이터를 S3 버킷으로 전달합니다. Kinesis Data Firehose에 5초 버퍼 간격을 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "A lab uses IoT sensors to monitor humidity, temperature, and pressure for a project. The sensors send 100 KB of data every 10 seconds. A downstream process will read the data from an Amazon S3 bucket every 30 seconds. Which solution will deliver the data to the S3 bucket with the LEAST latency?",
    "en_opts": {
      "A": "Use Amazon Kinesis Data Streams and Amazon Kinesis Data Firehose to deliver the data to the S3 bucket. Use the default buffer interval for Kinesis Data Firehose.",
      "B": "Use Amazon Kinesis Data Streams to deliver the data to the S3 bucket. Configure the stream to use 5 provisioned shards.",
      "C": "Use Amazon Kinesis Data Streams and call the Kinesis Client Library to deliver the data to the S3 bucket. Use a 5 second buffer interval from an application.",
      "D": "Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) and Amazon Kinesis Data Firehose to deliver the data to the S3 bucket. Use a 5 second buffer interval for Kinesis Data Firehose."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142561-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 98,
    "question": "회사가 Amazon S3 데이터 레이크의 데이터에서 머신러닝(ML) 분석을 수행하기를 원합니다. 회사는 회사 내 소비자에게 보고서를 작성할 수 있는 능력을 주는 두 가지 데이터 변환 요구사항을 가지고 있습니다. 회사는 일정한 시간에 Amazon S3에 도착해야 하는 다양한 형식의 300GB 데이터에 대해 일일 변환을 수행해야 합니다. 회사는 S3 데이터 레이크의 아카이브된 데이터(테라바이트 규모)의 일회성 변환을 수행해야 합니다. 회사는 Amazon Managed Workflows for Apache Airflow(Amazon MWAA) 방향성 비순환 그래프(DAG)를 사용하여 처리를 조율합니다. 회사가 이러한 요구사항을 가장 비용 효율적으로 충족하기 위해 Amazon MWAA DAG에서 스케줄해야 할 작업의 조합은 어느 것입니까? (2개를 선택하세요.)",
    "options": {
      "A": "일일 수신 데이터의 경우 AWS Glue 크롤러를 사용하여 스키마를 스캔하고 식별합니다.",
      "B": "일일 수신 데이터의 경우 Amazon Athena를 사용하여 스키마를 스캔하고 식별합니다.",
      "C": "일일 수신 데이터의 경우 Amazon Redshift를 사용하여 변환을 수행합니다.",
      "D": "일일 및 아카이브된 데이터의 경우 Amazon EMR을 사용하여 데이터 변환을 수행합니다.",
      "E": "아카이브된 데이터의 경우 Amazon SageMaker를 사용하여 데이터 변환을 수행합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "A company wants to use machine learning (ML) to perform analytics on data that is in an Amazon S3 data lake. The company has two data transformation requirements that will give consumers within the company the ability to create reports. The company must perform daily transformations on 300 GB of data that is in a variety format that must arrive in Amazon S3 at a scheduled time. The company must perform one-time transformations of terabytes of archived data that is in the S3 data lake. The company uses Amazon Managed Workflows for Apache Airflow (Amazon MWAA) Directed Acyclic Graphs (DAGs) to orchestrate processing. Which combination of tasks should the company schedule in the Amazon MWAA DAGs to meet these requirements MOST cost-effectively? (Choose two.)",
    "en_opts": {
      "A": "For daily incoming data, use AWS Glue crawlers to scan and identify the schema.",
      "B": "For daily incoming data, use Amazon Athena to scan and identify the schema.",
      "C": "For daily incoming data, use Amazon Redshift to perform transformations.",
      "D": "For daily and archived data, use Amazon EMR to perform data transformations.",
      "E": "For archived data, use Amazon SageMaker to perform data transformations."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142573-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 99,
    "question": "소매 회사는 고객 주문 정보를 포함하는 데이터 세트에 대한 추출, 변환, 로드(ETL) 작업에 AWS Glue를 사용합니다. 회사는 데이터 정확성과 일관성을 보장하기 위해 특정 유효성 검사 규칙을 구현하기를 원합니다. 이러한 요구사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "AWS Glue 작업 북마크를 사용하여 데이터의 정확성과 일관성을 추적합니다.",
      "B": "특정 데이터 품질 검사를 정의하기 위해 사용자 지정 AWS Glue Data Quality 규칙 세트를 만듭니다.",
      "C": "표준 데이터 품질 유효성 검사에 기본 제공 AWS Glue Data Quality 변환을 사용합니다.",
      "D": "중앙화된 데이터 스키마 및 메타데이터 저장소를 유지하기 위해 AWS Glue Data Catalog를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "A retail company uses AWS Glue for extract, transform, and load (ETL) operations on a dataset that contains information about customer orders. The company wants to implement specific validation rules to ensure data accuracy and consistency. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS Glue job bookmarks to track the data for accuracy and consistency.",
      "B": "Create custom AWS Glue Data Quality rulesets to define specific data quality checks.",
      "C": "Use the built-in AWS Glue Data Quality transforms for standard data quality validations.",
      "D": "Use AWS Glue Data Catalog to maintain a centralized data schema and metadata repository."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142574-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 100,
    "question": "보험 회사는 gzip으로 압축한 거래 데이터를 저장합니다. 회사는 가끔씩 감시 목적으로 거래 데이터를 쿼리해야 합니다. 가장 비용 효율적인 방식으로 이러한 요구사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon Glacier Flexible Retrieval에 데이터를 저장합니다. Amazon S3 Glacier Select를 사용하여 데이터를 쿼리합니다.",
      "B": "Amazon S3에 데이터를 저장합니다. Amazon S3 Select를 사용하여 데이터를 쿼리합니다.",
      "C": "Amazon S3에 데이터를 저장합니다. Amazon Athena를 사용하여 데이터를 쿼리합니다.",
      "D": "Amazon Glacier Instant Retrieval에 데이터를 저장합니다. Amazon Athena를 사용하여 데이터를 쿼리합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\nAWS 서비스 및 기술 용어\n\n【정답 포인트】\n주요 개념 및 선택 이유\n\n【오답 체크】\n다른 옵션 분석\n\n【시험 포인트】\n시험 출제 패턴",
    "en_q": "An insurance company stores transaction data that the company compressed with gzip. The company needs to query the transaction data for occasional audits. Which solution will meet this requirement in the MOST cost-effective way?",
    "en_opts": {
      "A": "Store the data in Amazon Glacier Flexible Retrieval. Use Amazon S3 Glacier Select to query the data.",
      "B": "Store the data in Amazon S3. Use Amazon S3 Select to query the data.",
      "C": "Store the data in Amazon S3. Use Amazon Athena to query the data.",
      "D": "Store the data in Amazon Glacier Instant Retrieval. Use Amazon Athena to query the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142575-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 101,
    "question": "데이터 엔지니어가 중요하지 않은 테이블에 데이터를 처리하고 삽입하는 Amazon Redshift 저장 프로시저를 테스트했습니다. 엔지니어는 저장 프로시저를 매일 자동으로 실행하기를 원합니다. 가장 비용 효율적인 방식으로 이러한 요구사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "저장 프로시저를 실행하기 위해 크론 작업을 예약하는 AWS Lambda 함수를 만듭니다.",
      "B": "Amazon EC2 Spot Instance에서 Amazon Redshift Data API를 사용하여 저장 프로시저를 예약하고 실행합니다.",
      "C": "쿼리 편집기 v2를 사용하여 일정에 따라 저장 프로시저를 실행합니다.",
      "D": "저장 프로시저를 실행하기 위해 AWS Glue Python shell 작업을 예약합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】Redshift Query Editor v2, 저장 프로시저 스케줄링, 네이티브 예약 기능, 완전 관리형 오케스트레이션 |\n\n【정답 포인트】Redshift Query Editor v2는 UI 기반 일정 설정으로 저장 프로시저를 매일 자동 실행하며, 추가 컴퓨팅 리소스 불필요(비용↓), 운영 복잡도 최소화 |\n\n【오답 체크】\n(A)Lambda-복잡한 코드 작성 필요, \n(B)EC2 Spot-인스턴스 관리 오버헤드, \n(D)Glue-ETL 오버스펙 |\n\n【시험 포인트】Redshift 내부 네이티브 기능으로 해결 가능한 경우 외부 서비스 조합보다 우선",
    "en_q": "A data engineer finished testing an Amazon Redshift stored procedure that processes and inserts data into a table that is not mission critical. The engineer wants to automatically run the stored procedure on a daily basis. Which solution will meet this requirement in the MOST cost-effective way?",
    "en_opts": {
      "A": "Create an AWS Lambda function to schedule a cron job to run the stored procedure.",
      "B": "Schedule and run the stored procedure by using the Amazon Redshift Data API in an Amazon EC2 Spot Instance.",
      "C": "Use query editor v2 to run the stored procedure on a schedule.",
      "D": "Schedule an AWS Glue Python shell job to run the stored procedure."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142543-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 102,
    "question": "마케팅 회사는 클릭스트림 데이터를 수집합니다. 회사는 클릭스트림 데이터를 Amazon Kinesis Data Firehose로 보내고 클릭스트림 데이터를 Amazon S3 버킷에 저장합니다. 회사는 수백 명의 사용자가 여러 부서에서 사용할 일련의 대시보드를 구축하기를 원합니다. 회사는 Amazon QuickSight를 사용하여 대시보드를 개발합니다. 회사는 클릭스트림 활동에 대한 일일 업데이트를 제공할 수 있는 확장 가능한 솔루션을 원합니다. 이러한 요구사항을 가장 비용 효율적으로 충족할 단계의 조합은 어느 것입니까? (2개를 선택하세요.)",
    "options": {
      "A": "클릭스트림 데이터를 저장하고 쿼리하기 위해 Amazon Redshift를 사용합니다.",
      "B": "클릭스트림 데이터를 쿼리하기 위해 Amazon Athena를 사용합니다.",
      "C": "클릭스트림 데이터를 쿼리하기 위해 Amazon S3 분석을 사용합니다.",
      "D": "QuickSight 직접 SQL 쿼리를 통해 쿼리 데이터에 접근합니다.",
      "E": "QuickSight SPICE(Super-fast, Parallel, In-memory Calculation Engine)를 통해 쿼리 데이터에 접근합니다. 데이터 세트에 대한 일일 새로 고침을 구성합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】Amazon Athena-서버리스 SQL 엔진, QuickSight SPICE-인메모리 캐싱, 일일 새로고침, 대규모 사용자 동시 접근 |\n\n【정답 포인트】B:Athena로 S3 데이터를 서버리스 쿼리(관리↓), E:SPICE 일일 새로고침으로 수백명 사용자 동시 접근 시 성능(응답↑) |\n\n【오답 체크】\n(A)Redshift-높은 비용, \n(C)S3 Analytics-스토리지 메트릭용, \n(D)직접 SQL-다중 사용자 성능 저하 |\n\n【시험 포인트】대규모 사용자 대시보드는 SPICE 캐싱이 필수, 저비용+고성능 조합",
    "en_q": "A marketing company collects clickstream data. The company sends the clickstream data to Amazon Kinesis Data Firehose and stores the clickstream data in Amazon S3. The company wants to build a series of dashboards that hundreds of users from multiple departments will use. The company will use Amazon QuickSight to develop the dashboards. The company wants a solution that can scale and provide daily updates about clickstream activity. Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)",
    "en_opts": {
      "A": "Use Amazon Redshift to store and query the clickstream data.",
      "B": "Use Amazon Athena to query the clickstream data",
      "C": "Use Amazon S3 analytics to query the clickstream data.",
      "D": "Access the query data through a QuickSight direct SQL query.",
      "E": "Access the query data through QuickSight SPICE (Super-fast, Parallel, In-memory Calculation Engine). Configure a daily refresh for the dataset."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142576-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 103,
    "question": "데이터 엔지니어가 데이터 조율 워크플로우를 구축하고 있습니다. 데이터 엔지니어는 일부 온프레미스 리소스와 클라우드의 일부 리소스를 포함하는 하이브리드 모델을 사용할 계획입니다. 데이터 엔지니어는 이식성과 오픈 소스 리소스를 우선시하기를 원합니다. 온프레미스 환경과 클라우드 기반 환경 모두에서 사용할 수 있는 서비스는 어느 것입니까?",
    "options": {
      "A": "AWS Data Exchange",
      "B": "Amazon Simple Workflow Service(Amazon SWF)",
      "C": "Amazon Managed Workflows for Apache Airflow(Amazon MWAA)",
      "D": "AWS Glue"
    },
    "answer": "C",
    "explanation": "【핵심 용어】Apache Airflow, 하이브리드 오케스트레이션, DAG 코드 이식성, 오픈 소스 에코시스템 |\n\n【정답 포인트】MWAA는 오픈 소스 Airflow 기반으로 AWS와 온프레미스에서 동일 DAG 코드 실행, 온프레미스 설치+AWS MWAA로 일관된 워크플로우 유지, 리팩터링↓ |\n\n【오답 체크】\n(A)Data Exchange-마켓플레이스, \n(B)SWF-AWS 전용 레거시, \n(D)Glue-AWS 전용 ETL |\n\n【시험 포인트】하이브리드+오픈소스+이식성 요구시 Apache Airflow 기반 솔루션 선택",
    "en_q": "A data engineer is building a data orchestration workflow. The data engineer plans to use a hybrid model that includes some on-premises resources and some resources that are in the cloud. The data engineer wants to prioritize portability and open source resources. Which service should the data engineer use in both the on-premises environment and the cloud-based environment?",
    "en_opts": {
      "A": "AWS Data Exchange",
      "B": "Amazon Simple Workflow Service (Amazon SWF)",
      "C": "Amazon Managed Workflows for Apache Airflow (Amazon MWAA)",
      "D": "AWS Glue"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142577-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 104,
    "question": "게임 회사는 NoSQL 데이터베이스를 사용하여 고객 정보를 저장합니다. 회사는 AWS로 마이그레이션할 계획입니다. 회사는 높은 온라인 트랜잭션 처리(OLTP) 워크로드를 처리하고, 한 자리 밀리초의 성능을 제공하며, 전 세계적으로 높은 가용성을 제공할 완전 관리형 AWS 솔루션이 필요합니다. 가장 적은 운영 오버헤드로 이러한 요구사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon Keyspaces(Apache Cassandra용)",
      "B": "Amazon DocumentDB(MongoDB 호환성 포함)",
      "C": "Amazon DynamoDB",
      "D": "Amazon Timestream"
    },
    "answer": "C",
    "explanation": "【핵심 용어】DynamoDB, NoSQL, OLTP 고처리량, 한 자리 밀리초 지연, 글로벌 테이블 멀티리전, 자동 확장 |\n\n【정답 포인트】DynamoDB는 완전 관리형으로 높은 OLTP, 밀리초 지연, 글로벌 고가용성 모두 제공, DAX 캐시+글로벌 테이블로 운영 오버헤드 최소화 |\n\n【오답 체크】\n(A)Keyspaces-설정 복잡도↑, \n(B)DocumentDB-MongoDB용, \n(D)Timestream-시계열 전용 |\n\n【시험 포인트】OLTP 워크로드 특성(높은 처리량, 밀리초 지연)에 DynamoDB 최적화",
    "en_q": "A gaming company uses a NoSQL database to store customer information. The company is planning to migrate to AWS. The company needs a fully managed AWS solution that will handle high online transaction processing (OLTP) workload, provide single-digit millisecond performance, and provide high availability around the world. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Amazon Keyspaces (for Apache Cassandra)",
      "B": "Amazon DocumentDB (with MongoDB compatibility)",
      "C": "Amazon DynamoDB",
      "D": "Amazon Timestream"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142542-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 105,
    "question": "데이터 엔지니어가 Amazon EventBridge 이벤트가 호출할 AWS Lambda 함수를 생성했습니다. 데이터 엔지니어가 EventBridge 이벤트를 사용하여 Lambda 함수를 호출하려고 할 때 AccessDeniedException 메시지가 나타납니다. 데이터 엔지니어는 이 예외를 어떻게 해결해야 합니까?",
    "options": {
      "A": "Lambda 함수 실행 역할의 신뢰 정책이 EventBridge가 실행 역할을 맡을 수 있도록 허용하는지 확인합니다.",
      "B": "EventBridge가 사용하는 IAM 역할과 Lambda 함수의 리소스 기반 정책이 모두 필요한 권한을 가지는지 확인합니다.",
      "C": "Lambda 함수가 배포된 서브넷이 프라이빗 서브넷으로 구성되었는지 확인합니다.",
      "D": "EventBridge 스키마가 유효하고 이벤트 매핑 구성이 올바른지 확인합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】EventBridge→Lambda 크로스 서비스 호출, IAM 역할 권한, 리소스 기반 정책, AccessDeniedException |\n\n【정답 포인트】B:양쪽 권한 모두 확인 필수-EventBridge IAM 역할(lambda:InvokeFunction권한) + Lambda 리소스 정책(EventBridge 신뢰) |\n\n【오답 체크】\n(A)신뢰 정책만-부족, \n(C)서브넷-동기식 호출에 영향↓, \n(D)스키마 유효성-구조만 검증 |\n\n【시험 포인트】AWS 서비스 간 호출은 양쪽(IAM+리소스정책) 권한 검토 습관 필수",
    "en_q": "A data engineer creates an AWS Lambda function that an Amazon EventBridge event will invoke. When the data engineer tries to invoke the Lambda function by using an EventBridge event, an AccessDeniedException message appears. How should the data engineer resolve the exception?",
    "en_opts": {
      "A": "Ensure that the trust policy of the Lambda function execution role allows EventBridge to assume the execution role.",
      "B": "Ensure that both the IAM role that EventBridge uses and the Lambda function's resource-based policy have the necessary permissions.",
      "C": "Ensure that the subnet where the Lambda function is deployed is configured to be a private subnet.",
      "D": "Ensure that EventBridge schemas are valid and that the event mapping configuration is correct."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142578-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 106,
    "question": "회사는 Amazon S3 버킷 기반의 데이터 레이크를 사용합니다. 규정을 준수하기 위해 회사는 S3 버킷에 업로드된 파일에 두 개의 암호화 계층을 적용해야 합니다. 회사는 AWS Lambda 함수를 사용하여 필요한 암호화를 적용하기를 원합니다. 이러한 요구사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화와 Amazon S3 Encryption Client를 모두 사용합니다.",
      "B": "AWS KMS 키를 사용한 이중 계층 서버 측 암호화(DSSE-KMS)를 사용합니다.",
      "C": "파일이 업로드되기 전에 고객 제공 키(SSE-C)를 사용한 서버 측 암호화를 사용합니다.",
      "D": "AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】DSSE-KMS(이중 계층 암호화), AWS KMS, 규정 준수, S3 객체 보호, ServerSideEncryption |\n\n【정답 포인트】\"두 개 암호화 계층\" 요구→DSSE-KMS만 충족, KMS 기반 이중 암호화로 HIPAA/PCI-DSS 규제 준수, Lambda에서 PutObject 시 DSSE-KMS 설정 |\n\n【오답 체크】\n(A)SSE-KMS+Client-단일계층, \n(C)SSE-C-고객관리 부담, \n(D)SSE-KMS-단일계층 |\n\n【시험 포인트】규정의 \"이중 암호화\" 요구→DSSE-KMS, SSE-S3<SSE-KMS<DSSE-KMS 순서 이해",
    "en_q": "A company uses a data lake that is based on an Amazon S3 bucket. To comply with regulations, the company must apply two layers of server-side encryption to files that are uploaded to the S3 bucket. The company wants to use an AWS Lambda function to apply the necessary encryption. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use both server-side encryption with AWS KMS keys (SSE-KMS) and the Amazon S3 Encryption Client.",
      "B": "Use dual-layer server-side encryption with AWS KMS keys (DSSE-KMS).",
      "C": "Use server-side encryption with customer-provided keys (SSE-C) before files are uploaded.",
      "D": "Use server-side encryption with AWS KMS keys (SSE-KMS)."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142579-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 107,
    "question": "데이터 엔지니어가 Amazon Athena 쿼리가 실행 전에 큐에 대기 중임을 알아챕니다. 데이터 엔지니어는 쿼리가 대기열에 들어가지 않도록 하려면 어떻게 해야 합니까?",
    "options": {
      "A": "쿼리 결과 제한을 증가시킵니다.",
      "B": "기존 워크그룹에 대해 프로비저닝된 용량을 구성합니다.",
      "C": "페더레이션된 쿼리를 사용합니다.",
      "D": "기존 워크그룹에 Athena 쿼리를 실행하는 사용자를 허용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】Athena 프로비저닝된 용량, DPU(Data Processing Unit), 동시 실행 제약, 쿼리 큐 |\n\n【정답 포인트】쿼리 대기열 원인은 동시 실행 제한→프로비저닝된 용량 구매로 워크그룹에 예약 DPU 확보, 동시성 제약 제거 가능 |\n\n【오답 체크】\n(A)결과 제한-반환 행 수만 관련, \n(C)페더레이션 쿼리-다른 데이터소스용, \n(D)사용자 권한-접근제어만 |\n\n【시험 포인트】Athena 성능 병목: 쿼리 복잡도/스캔량/동시실행제약 구분, 용량제약→프로비저닝",
    "en_q": "A data engineer notices that Amazon Athena queries are held in a queue before the queries run. How can the data engineer prevent the queries from queueing?",
    "en_opts": {
      "A": "Increase the query result limit.",
      "B": "Configure provisioned capacity for an existing workgroup.",
      "C": "Use federated queries.",
      "D": "Allow users who run the Athena queries to an existing workgroup."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/142580-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 108,
    "question": "데이터 엔지니어가 Amazon S3에서 읽고 Amazon Redshift로 쓰는 AWS Glue 작업을 디버깅해야 합니다. 데이터 엔지니어가 AWS Glue 작업에 대해 북마크 기능을 활성화했습니다. 데이터 엔지니어가 AWS Glue 작업의 최대 동시성을 1로 설정했습니다. AWS Glue 작업은 성공적으로 Amazon Redshift로 출력을 쓰고 있습니다. 그러나 AWS Glue 작업의 이전 실행 중에 로드된 Amazon S3 파일이 후속 실행에서 다시 처리되고 있습니다. AWS Glue 작업이 파일을 다시 처리하는 가능한 이유는 무엇입니까?",
    "options": {
      "A": "AWS Glue 작업에 북마크가 올바르게 작동하는 데 필요한 s3:GetObjectAcl 권한이 없습니다.",
      "B": "AWS Glue 작업의 최대 동시성이 1로 설정되어 있습니다.",
      "C": "데이터 엔지니어가 Glue 작업에 대해 이전 버전의 AWS Glue를 잘못 지정했습니다.",
      "D": "AWS Glue 작업에 필요한 커밋 문이 없습니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】Glue Job Bookmarks, job.commit()/bookmark() 커밋문, 상태 영구 저장, 중복 처리 방지 |\n\n【정답 포인트】D:북마크 활성화만으로 부족→스크립트 마지막에 job.commit() 호출 필수, 커밋문이 없으면 북마크가 상태를 영구저장하지 않아 다음 실행 시 동일 파일 재처리 |\n\n【오답 체크】\n(A)GetObjectAcl-S3접근권한, \n(B)동시성1-처리 속도만, \n(C)버전 지정-호환성 문제 |\n\n【시험 포인트】Glue Bookmarks: 활성화 플래그 + 스크립트 커밋문 조합이 필수",
    "en_q": "A data engineer needs to debug an AWS Glue job that reads from Amazon S3 and writes to Amazon Redshift. The data engineer enabled the bookmark feature for the AWS Glue job. The data engineer has set the maximum concurrency for the AWS Glue job to 1. The AWS Glue job is successfully writing the output to Amazon Redshift. However, the Amazon S3 files that were loaded during previous runs of the AWS Glue job are being reprocessed by subsequent runs. What is the likely reason the AWS Glue job is reprocessing the files?",
    "en_opts": {
      "A": "The AWS Glue job does not have the s3:GetObjectAcl permission that is required for bookmarks to work correctly.",
      "B": "The maximum concurrency for the AWS Glue job is set to 1.",
      "C": "The data engineer incorrectly specified an older version of AWS Glue for the Glue job.",
      "D": "The AWS Glue job does not have a required commit statement."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143046-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 109,
    "question": "전자상거래 회사가 온프레미스 환경의 데이터 파이프라인을 AWS 클라우드로 마이그레이션하기를 원합니다. 회사는 현재 온프레미스 환경에서 타사 도구를 사용하여 데이터 수집 프로세스를 조율합니다. 회사는 서버를 관리할 필요가 없는 마이그레이션 솔루션을 원합니다. 솔루션은 Python 및 Bash 스크립트를 조율할 수 있어야 합니다. 솔루션은 코드를 리팩터링할 필요가 없어야 합니다. 가장 적은 운영 오버헤드로 이러한 요구사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "AWS Lambda",
      "B": "Amazon Managed Workflows for Apache Airflow(Amazon MWAA)",
      "C": "AWS Step Functions",
      "D": "AWS Glue"
    },
    "answer": "B",
    "explanation": "【핵심 용어】Amazon MWAA, Apache Airflow DAG, Python/Bash 스크립트 오케스트레이션, 코드 리팩터링 최소화 |\n\n【정답 포인트】MWAA는 기존 Python/Bash 스크립트를 DAG로 정의해 거의 그대로 마이그레이션, 서버 관리↓, 타사 도구→Airflow 전환 간단, 리팩터링 최소 |\n\n【오답 체크】\n(A)Lambda-함수 기반으로 부적합, \n(C)Step Functions-상태머신 재정의 필요, \n(D)Glue-ETL 중심 |\n\n【시험 포인트】스크립트 기반 오케스트레이션 마이그레이션→Airflow 기반 솔루션 최적",
    "en_q": "An ecommerce company wants to use AWS to migrate data pipelines from an on-premises environment into the AWS Cloud. The company currently uses a third-party tool in the on-premises environment to orchestrate data ingestion processes. The company wants a migration solution that does not require the company to manage servers. The solution must be able to orchestrate Python and Bash scripts. The solution must not require the company to refactor any code. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "AWS Lambda",
      "B": "Amazon Managed Workflows for Apache Airflow (Amazon MVVAA)",
      "C": "AWS Step Functions",
      "D": "AWS Glue"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143047-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 110,
    "question": "소매 회사가 온프레미스 MySQL 데이터베이스의 제품 생명주기 관리(PLM) 애플리케이션 데이터를 저장합니다. PLM 애플리케이션은 트랜잭션이 발생할 때마다 데이터베이스를 자주 업데이트합니다. 회사는 PLM 애플리케이션에서 거의 실시간으로 인사이트를 수집하기를 원합니다. 회사는 인사이트를 다른 비즈니스 데이터 세트와 통합하고 결합된 데이터 세트를 Amazon Redshift 데이터 웨어하우스를 사용하여 분석하기를 원합니다. 회사는 이미 온프레미스 인프라와 AWS 간에 AWS Direct Connect 연결을 설정했습니다. 가장 적은 개발 노력으로 이러한 요구사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "Java Database Connectivity(JDBC) 연결을 사용하여 MySQL 데이터베이스 업데이트를 가져오도록 AWS Glue 추출, 변환, 로드(ETL) 작업을 예약하여 실행합니다. ETL 작업의 대상을 Amazon Redshift로 설정합니다.",
      "B": "AWS Database Migration Service(AWS DMS)에서 전체 로드 및 CDC 작업을 실행하여 MySQL 데이터베이스 변경을 지속적으로 복제합니다. 작업의 대상을 Amazon Redshift로 설정합니다.",
      "C": "Amazon AppFlow SDK를 사용하여 MySQL 데이터베이스에 대한 사용자 지정 커넥터를 구축하여 데이터베이스 변경을 지속적으로 복제합니다. 커넥터의 대상을 Amazon Redshift로 설정합니다.",
      "D": "MySQL 데이터베이스에서 동기화할 AWS DataSync 작업을 예약하여 실행합니다. 작업의 대상을 Amazon Redshift로 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】AWS DMS, CDC(변경 데이터 캡처), 전체 로드+지속적 복제, 바이너리 로그 추적, 거의 실시간 동기화 |\n\n【정답 포인트】B:\"거의 실시간\" 변경 복제→DMS CDC 최적화, 전체 로드(초기) + CDC(지속) 구조로 초기 데이터 한번 로드 후 MySQL 변경사항 지속적 Redshift 복제 |\n\n【오답 체크】\n(A)Glue 예약-배치(시간단위)로 실시간↓, \n(C)AppFlow SDK-커스텀 개발↑, \n(D)DataSync-변경추적↓ |\n\n【시험 포인트】배치(Glue)와 실시간(DMS CDC) 구분 필수",
    "en_q": "A retail company stores data from a product lifecycle management (PLM) application in an on-premises MySQL database. The PLM application frequently updates the database when transactions occur. The company wants to gather insights from the PLM application in near real time. The company wants to integrate the insights with other business datasets and to analyze the combined dataset by using an Amazon Redshift data warehouse. The company has already established an AWS Direct Connect connection between the on-premises infrastructure and AWS. Which solution will meet these requirements with the LEAST development effort?",
    "en_opts": {
      "A": "Run a scheduled AWS Glue extract, transform, and load (ETL) job to get the MySQL database updates by using a Java Database Connectivity (JDBC) connection. Set Amazon Redshift as the destination for the ETL job.",
      "B": "Run a full load plus CDC task in AWS Database Migration Service (AWS DMS) to continuously replicate the MySQL database changes. Set Amazon Redshift as the destination for the task.",
      "C": "Use the Amazon AppFlow SDK to build a custom connector for the MySQL database to continuously replicate the database changes. Set Amazon Redshift as the destination for the connector.",
      "D": "Run scheduled AWS DataSync tasks to synchronize data from the MySQL database. Set Amazon Redshift as the destination for the tasks."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143051-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 111,
    "question": "마케팅 회사가 클릭스트림 데이터를 저장하기 위해 Amazon S3를 사용합니다. 회사는 각 날이 끝날 때 서로 다른 버킷에 저장된 S3 객체에 대해 SQL JOIN 절을 사용하여 데이터를 쿼리합니다. 회사는 객체를 기반으로 핵심 성과 지표(KPI)를 만듭니다. 회사는 사용자에게 데이터를 분할하여 데이터를 쿼리할 수 있는 능력을 주는 서버리스 솔루션이 필요합니다. 솔루션은 데이터의 원자성, 일관성, 격리 및 지속성(ACID) 속성을 유지해야 합니다. 가장 비용 효율적으로 이러한 요구사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon S3 Select",
      "B": "Amazon Redshift Spectrum",
      "C": "Amazon Athena",
      "D": "Amazon EMR"
    },
    "answer": "C",
    "explanation": "【핵심 용어】Amazon Athena, Apache Iceberg, ACID 트랜잭션, 서버리스 SQL JOIN, S3 분할 데이터 |\n\n【정답 포인트】C:Athena는 다중 버킷 S3 데이터를 SQL JOIN으로 쿼리하고, Iceberg 테이블포맷으로 ACID 보장, 서버리스(관리↓), 비용효율(스캔량 기준 청구) |\n\n【오답 체크】\n(A)S3 Select-단일객체만, \n(B)Redshift Spectrum-클러스터 운영비↑, \n(D)EMR-관리↑ |\n\n【시험 포인트】S3 분석+ACID 요구→Athena Iceberg, Parquet/CSV는 ACID 미지원",
    "en_q": "A marketing company uses Amazon S3 to store clickstream data. The company queries the data at the end of each day by using a SQL JOIN clause on S3 objects that are stored in separate buckets. The company creates key performance indicators (KPIs) based on the objects. The company needs a serverless solution that will give users the ability to query data by partitioning the data. The solution must maintain the atomicity, consistency, isolation, and durability (ACID) properties of the data. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Amazon S3 Select",
      "B": "Amazon Redshift Spectrum",
      "C": "Amazon Athena",
      "D": "Amazon EMR"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143053-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 112,
    "question": "회사가 Account_A라는 AWS 계정의 eu-east-1 리전의 Amazon RDS for PostgreSQL DB 인스턴스에서 데이터를 마이그레이션하려고 합니다. 회사는 Account_B라는 AWS 계정의 eu-west-1 리전의 Amazon Redshift 클러스터로 데이터를 마이그레이션합니다. AWS Database Migration Service(AWS DMS)가 두 데이터 저장소 간에 데이터를 복제할 수 있는 능력을 주는 솔루션은 어느 것입니까?",
    "options": {
      "A": "Account_B의 eu-west-1에서 AWS DMS 복제 인스턴스를 설정합니다.",
      "B": "Account_B의 eu-east-1에서 AWS DMS 복제 인스턴스를 설정합니다.",
      "C": "eu-west-1의 새 AWS 계정에서 AWS DMS 복제 인스턴스를 설정합니다.",
      "D": "Account_A의 eu-east-1에서 AWS DMS 복제 인스턴스를 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】DMS 복제 인스턴스 배치, 크로스 계정/리전 마이그레이션, 대상 리전 최적화, 쓰기 성능 |\n\n【정답 포인트】A:Account_B(대상) eu-west-1에 배치→Redshift 쓰기 성능 최적화, Account_B IAM 역할로 Redshift 직접접근, 대역폭 효율성↑ |\n\n【오답 체크】\n(B)eu-east-1-대상리전 멀어 지연↑, \n(C)새계정-불필요한 복잡성, \n(D)Account_A-크로스리전+계정 홉 증가 성능↓ |\n\n【시험 포인트】DMS 복제 인스턴스는 대상 쪽에 배치가 최적(쓰기 성능+권한)",
    "en_q": "A company wants to migrate data from an Amazon RDS for PostgreSQL DB instance in the eu-east-1 Region of an AWS account named Account_A. The company will migrate the data to an Amazon Redshift cluster in the eu-west-1 Region of an AWS account named Account_B. Which solution will give AWS Database Migration Service (AWS DMS) the ability to replicate data between two data stores?",
    "en_opts": {
      "A": "Set up an AWS DMS replication instance in Account_B in eu-west-1.",
      "B": "Set up an AWS DMS replication instance in Account_B in eu-east-1.",
      "C": "Set up an AWS DMS replication instance in a new AWS account in eu-west-1.",
      "D": "Set up an AWS DMS replication instance in Account_A in eu-east-1."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143054-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 113,
    "question": "회사가 Amazon S3를 데이터 레이크로 사용합니다. 회사는 다중 노드 Amazon Redshift 클러스터를 사용하여 데이터 웨어하우스를 설정합니다. 회사는 각 데이터 파일의 데이터 소스를 기반으로 데이터 레이크의 데이터 파일을 구성합니다. 회사는 각 데이터 파일 위치에 대해 별도의 COPY 명령을 사용하여 모든 데이터 파일을 Redshift 클러스터의 한 테이블로 로드합니다. 이 방식은 모든 데이터 파일을 테이블에 로드하는 데 시간이 오래 걸립니다. 회사는 데이터 수집 속도를 높여야 합니다. 회사는 프로세스 비용을 증가시키고 싶지 않습니다. 이러한 요구사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "프로비저닝된 Amazon EMR 클러스터를 사용하여 모든 데이터 파일을 한 폴더로 복사합니다. COPY 명령을 사용하여 데이터를 Amazon Redshift에 로드합니다.",
      "B": "모든 데이터 파일을 Amazon Aurora에 병렬로 로드합니다. AWS Glue 작업을 실행하여 데이터를 Amazon Redshift로 로드합니다.",
      "C": "AWS Glue 작업을 사용하여 모든 데이터 파일을 한 폴더로 복사합니다. COPY 명령을 사용하여 데이터를 Amazon Redshift에 로드합니다.",
      "D": "데이터 파일 위치를 포함하는 매니페스트 파일을 생성합니다. COPY 명령을 사용하여 데이터를 Amazon Redshift에 로드합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】Redshift COPY 매니페스트 파일, 병렬 수집, 네트워크 최적화, 비용 효율성 |\n\n【정답 포인트】D:매니페스트 파일(manifest.json)로 다중 S3 경로를 한 COPY로 처리→병렬 수집, 네트워크 왕복↓, Redshift 만으로 추가비용↓, 메타데이터 자동관리 |\n\n【오답 체크】\n(A)EMR-프로비저닝 비용↑, \n(B)Aurora-중간로드 복잡도↑, \n(C)Glue-ETL 비용↑ |\n\n【시험 포인트】다중 S3 경로 병렬 수집→매니페스트 파일이 경제적 최적",
    "en_q": "A company uses Amazon S3 as a data lake. The company sets up a data warehouse by using a multi-node Amazon Redshift cluster. The company organizes the data files in the data lake based on the data source of each data file. The company loads all the data files into one table in the Redshift cluster by using a separate COPY command for each data file location. This approach takes a long time to load all the data files into the table. The company must increase the speed of the data ingestion. The company does not want to increase the cost of the process. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use a provisioned Amazon EMR cluster to copy all the data files into one folder. Use a COPY command to load the data into Amazon Redshift.",
      "B": "Load all the data files in parallel into Amazon Aurora. Run an AWS Glue job to load the data into Amazon Redshift.",
      "C": "Use an AWS Give job to copy all the data files into one folder. Use a COPY command to load the data into Amazon Redshift.",
      "D": "Create a manifest file that contains the data file locations. Use a COPY command to load the data into Amazon Redshift."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143056-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 114,
    "question": "회사가 Amazon Kinesis Data Firehose를 사용하여 데이터를 Amazon S3에 저장할 계획입니다. 소스 데이터는 2MB .csv 파일로 구성됩니다. 회사는 .csv 파일을 JSON 형식으로 변환해야 합니다. 회사는 파일을 Apache Parquet 형식으로 저장해야 합니다. 가장 적은 개발 노력으로 이러한 요구사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "Kinesis Data Firehose를 사용하여 .csv 파일을 JSON으로 변환합니다. AWS Lambda 함수를 사용하여 파일을 Parquet 형식으로 저장합니다.",
      "B": "Kinesis Data Firehose를 사용하여 .csv 파일을 JSON으로 변환하고 파일을 Parquet 형식으로 저장합니다.",
      "C": "Kinesis Data Firehose를 사용하여 AWS Lambda 함수를 호출하여 .csv 파일을 JSON으로 변환하고 파일을 Parquet 형식으로 저장합니다.",
      "D": "Kinesis Data Firehose를 사용하여 AWS Lambda 함수를 호출하여 .csv 파일을 JSON으로 변환합니다. Kinesis Data Firehose를 사용하여 파일을 Parquet 형식으로 저장합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】Kinesis Data Firehose, CSV→JSON 변환, Parquet 저장, Lambda 통합, 개발 노력 최소화 |\n\n【정답 포인트】D:CSV→JSON은 Lambda로 변환(Firehose 자체 변환↓), JSON→Parquet는 Firehose 데이터포맷 설정으로 자동처리→개발은 Lambda CSV파싱만 |\n\n【오답 체크】\n(A)Lambda에서 Parquet까지-개발복잡↑, \n(B)Firehose CSV→JSON 직접 불가, \n(C)Lambda에서 모든 변환-오버헤드↑ |\n\n【시험 포인트】Firehose 포맷 설정과 Lambda 변환 역할 구분",
    "en_q": "A company plans to use Amazon Kinesis Data Firehose to store data in Amazon S3. The source data consists of 2 MB .csv files. The company must convert the .csv files to JSON format. The company must store the files in Apache Parquet format. Which solution will meet these requirements with the LEAST development effort?",
    "en_opts": {
      "A": "Use Kinesis Data Firehose to convert the .csv files to JSON. Use an AWS Lambda function to store the files in Parquet format.",
      "B": "Use Kinesis Data Firehose to convert the .csv files to JSON and to store the files in Parquet format.",
      "C": "Use Kinesis Data Firehose to invoke an AWS Lambda function that transforms the .csv files to JSON and stores the files in Parquet format.",
      "D": "Use Kinesis Data Firehose to invoke an AWS Lambda function that transforms the .csv files to JSON. Use Kinesis Data Firehose to store the files in Parquet format."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143057-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 115,
    "question": "회사가 AWS Transfer Family 서버를 사용하여 온프레미스 환경에서 AWS로 데이터를 마이그레이션하고 있습니다. 회사 정책은 전송 중 데이터 암호화에 TLS 1.2 이상을 사용하도록 규정하고 있습니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Transfer Family 서버에 대한 새로운 SSH 키를 생성합니다. 기존 키와 새 키를 모두 사용 가능하도록 설정합니다.",
      "B": "온프레미스 네트워크의 보안 그룹 규칙을 업데이트하여 TLS 1.2 이상을 사용하는 연결만 허용합니다.",
      "C": "Transfer Family 서버의 보안 정책을 업데이트하여 최소 프로토콜 버전으로 TLS 1.2를 지정합니다.",
      "D": "Transfer Family 서버에 SSL 인증서를 설치하여 TLS 1.2를 사용한 데이터 전송을 암호화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】AWS Transfer Family Security Policy, TLS 1.2 최소버전, 프로토콜 버전 제어, 전송 중 암호화 |\n\n【정답 포인트】C:Security Policy에서 최소 프로토콜 버전을 TLS 1.2로 지정→Transfer Family 네이티브 정책 기능으로 데이터 전송 암호화 수준 관리 |\n\n【오답 체크】\n(A)SSH 키-인증만, \n(B)보안그룹-네트워크 접근제어, \n(D)SSL 인증서-이미 포함됨 |\n\n【시험 포인트】Transfer Family Security Policy가 프로토콜 버전 제어의 올바른 방식",
    "en_q": "A company is using an AWS Transfer Family server to migrate data from an on-premises environment to AWS. Company policy mandates the use of TLS 1.2 or above to encrypt the data in transit. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Generate new SSH keys for the Transfer Family server. Make the old keys and the new keys available for use.",
      "B": "Update the security group rules for the on-premises network to allow only connections that use TLS 1.2 or above.",
      "C": "Update the security policy of the Transfer Family server to specify a minimum protocol version of TLS 1.2",
      "D": "Install an SSL certificate on the Transfer Family server to encrypt data transfers by using TLS 1.2."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143058-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 116,
    "question": "회사가 애플리케이션과 온프레미스 Apache Kafka 서버를 AWS로 마이그레이션하려고 합니다. 애플리케이션은 온프레미스 Oracle 데이터베이스가 Kafka 서버로 전송하는 증분 업데이트를 처리합니다. 회사는 리팩터 전략 대신 리플랫폼 마이그레이션 전략을 사용하기를 원합니다. 관리 오버헤드가 가장 적은 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Kinesis Data Streams",
      "B": "Amazon Managed Streaming for Apache Kafka (Amazon MSK) 프로비저닝 클러스터",
      "C": "Amazon Kinesis Data Firehose",
      "D": "Amazon Managed Streaming for Apache Kafka (Amazon MSK) Serverless"
    },
    "answer": "D",
    "explanation": "【핵심 용어】Replatform 마이그레이션, Amazon MSK Serverless, Apache Kafka 호환성, 자동 스케일링 |\n\n【정답 포인트】D:기존 Kafka 앱 호환성 필요→MSK 선택(Kinesis 아님), 최소관리→MSK Serverless(프로비저닝X), 리플랫폼 전략으로 앱 코드 변경 최소 |\n\n【오답 체크】\n(A)Kinesis-API 완전 다름, \n(B)MSK 프로비저닝-용량관리 필요, \n(C)Firehose-배치 전달 |\n\n【시험 포인트】마이그레이션 전략: Replatform은 최소코드변경, MSK Serverless는 자동스케일링",
    "en_q": "A company wants to migrate an application and an on-premises Apache Kafka server to AWS. The application processes incremental updates that an on-premises Oracle database sends to the Kafka server. The company wants to use the replatform migration strategy instead of the refactor strategy. Which solution will meet these requirements with the LEAST management overhead?",
    "en_opts": {
      "A": "Amazon Kinesis Data Streams",
      "B": "Amazon Managed Streaming for Apache Kafka (Amazon MSK) provisioned cluster",
      "C": "Amazon Kinesis Data Firehose",
      "D": "Amazon Managed Streaming for Apache Kafka (Amazon MSK) Serverless"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143060-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 117,
    "question": "데이터 엔지니어가 AWS Glue를 사용하여 자동화된 ETL 수집 파이프라인을 구축하고 있습니다. 파이프라인은 Amazon S3 버킷의 압축된 파일을 수집합니다. 수집 파이프라인은 증분 데이터 처리를 지원해야 합니다. 이 요구사항을 충족하기 위해 데이터 엔지니어가 사용해야 할 AWS Glue 기능은 무엇입니까?",
    "options": {
      "A": "Workflows",
      "B": "Triggers",
      "C": "Job bookmarks",
      "D": "Classifiers"
    },
    "answer": "C",
    "explanation": "【핵심 용어】AWS Glue Job Bookmarks, 증분 처리, 처리 진행도 추적, 중복 처리 방지 |\n\n【정답 포인트】C:Job Bookmarks는 이전 처리 위치 추적하여 증분 처리 지원, 새로운/변경된 파일만 처리, 압축 파일도 자동 지원 |\n\n【오답 체크】\n(A)Workflows-작업 의존성 오케스트레이션, \n(B)Triggers-이벤트 기반 실행, \n(D)Classifiers-데이터 형식 분류 |\n\n【시험 포인트】증분 처리 요구→Job Bookmarks 메커니즘이 핵심",
    "en_q": "A data engineer is building an automated extract, transform, and load (ETL) ingestion pipeline by using AWS Glue. The pipeline ingests compressed files that are in an Amazon S3 bucket. The ingestion pipeline must support incremental data processing. Which AWS Glue feature should the data engineer use to meet this requirement?",
    "en_opts": {
      "A": "Workflows",
      "B": "Triggers",
      "C": "Job bookmarks",
      "D": "Classifiers"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143061-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 118,
    "question": "은행회사가 대량의 거래 데이터를 수집하는 애플리케이션을 사용합니다. 회사는 Amazon Kinesis Data Streams을 실시간 분석에 사용합니다. 회사의 애플리케이션은 PutRecord 작업을 사용하여 Kinesis Data Streams에 데이터를 전송합니다. 데이터 엔지니어가 특정 시간대에 네트워크 장애를 관찰했습니다. 데이터 엔지니어가 전체 처리 파이프라인에 대해 정확히 한 번 배달을 구성하려고 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "애플리케이션을 설계하여 소스에서 각 레코드에 고유 ID를 포함시켜 처리 중에 중복을 제거할 수 있도록 합니다.",
      "B": "Amazon Managed Service for Apache Flink 데이터 수집 애플리케이션의 체크포인트 구성을 업데이트하여 이벤트의 중복 처리를 방지합니다.",
      "C": "데이터 소스를 설계하여 이벤트가 Kinesis Data Streams에 여러 번 수집되지 않도록 합니다.",
      "D": "Kinesis Data Streams 사용을 중단합니다. Amazon EMR을 대신 사용합니다. Amazon EMR에서 Apache Flink 및 Apache Spark Streaming을 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】Exactly-Once Semantics, Idempotent Processing, 비즈니스 키, 중복 감지/제거 |\n\n【정답 포인트】A:소스에서 고유 ID 포함→처리 단계에서 중복 감지/제거(idempotent), 네트워크 장애 시 PutRecord 재시도로 중복 발생해도 비즈니스 로직으로 처리 |\n\n【오답 체크】\n(B)Checkpoint-장애복구용, 중복전송 방지↓, \n(C)소스 설계-PutRecord 재시도 완전방지↓, \n(D)EMR-Kinesis 기본한계 아님 |\n\n【시험 포인트】Exactly-Once는 서비스보증이 아닌 앱 설계 책임, Idempotency 패턴",
    "en_q": "A banking company uses an application to collect large volumes of transactional data. The company uses Amazon Kinesis Data Streams for real-time analytics. The company's application uses the PutRecord action to send data to Kinesis Data Streams. A data engineer has observed network outages during certain times of day. The data engineer wants to configure exactly-once delivery for the entire processing pipeline. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Design the application so it can remove duplicates during processing by embedding a unique ID in each record at the source.",
      "B": "Update the checkpoint configuration of the Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) data collection application to avoid duplicate processing of events.",
      "C": "Design the data source so events are not ingested into Kinesis Data Streams multiple times.",
      "D": "Stop using Kinesis Data Streams. Use Amazon EMR instead. Use Apache Flink and Apache Spark Streaming in Amazon EMR."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143062-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 119,
    "question": "회사가 Amazon S3 버킷에 로그를 저장합니다. 데이터 엔지니어가 여러 로그 파일에 액세스하려고 할 때 의도하지 않게 삭제된 파일을 발견합니다. 데이터 엔지니어가 향후 의도하지 않은 파일 삭제를 방지할 솔루션이 필요합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?",
    "options": {
      "A": "정기적으로 S3 버킷을 수동 백업합니다.",
      "B": "S3 버킷에 대해 S3 Versioning을 활성화합니다.",
      "C": "S3 버킷에 대한 복제를 구성합니다.",
      "D": "Amazon S3 Glacier 스토리지 클래스를 사용하여 S3 버킷의 데이터를 아카이브합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】S3 Versioning, Delete Marker, 의도하지 않은 삭제 복구, 버전 히스토리 유지 |\n\n【정답 포인트】B:S3 Versioning 활성화→모든 버전 자동 유지, Delete Marker 생성으로 파일 실제 제거↓, 이전 버전 복원으로 즉시 복구 가능 |\n\n【오답 체크】\n(A)수동 백업-오버헤드↑, 일관성↓, \n(C)복제-대상도 동일 삭제, \n(D)Glacier-아카이브용 |\n\n【시험 포인트】의도하지 않은 삭제 방지→Versioning의 Delete Marker 메커니즘",
    "en_q": "A company stores logs in an Amazon S3 bucket. When a data engineer attempts to access several log files, the data engineer discovers that some files have been unintentionally deleted. The data engineer needs a solution that will prevent unintentional file deletion in the future. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Manually back up the S3 bucket on a regular basis.",
      "B": "Enable S3 Versioning for the S3 bucket.",
      "C": "Configure replication for the S3 bucket.",
      "D": "Use an Amazon S3 Glacier storage class to archive the data that is in the S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143120-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 120,
    "question": "통신회사가 하루 종일 초당 수천 개의 데이터 포인트 속도로 네트워크 사용 데이터를 수집합니다. 회사는 애플리케이션을 실행하여 사용 데이터를 실시간으로 처리합니다. 회사는 Amazon Aurora DB 인스턴스에 데이터를 집계하고 저장합니다. 네트워크 사용의 급격한 감소는 보통 네트워크 장애를 나타냅니다. 회사는 네트워크 사용의 급격한 감소를 식별하여 즉시 복구 조치를 취할 수 있어야 합니다. 지연 시간이 가장 적은 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Lambda 함수를 생성하여 Aurora에서 네트워크 사용의 감소를 쿼리합니다. Amazon EventBridge를 사용하여 Lambda 함수를 매분 자동으로 호출합니다.",
      "B": "처리 애플리케이션을 수정하여 Amazon Kinesis 데이터 스트림에 데이터를 게시합니다. Amazon Managed Service for Apache Flink 애플리케이션을 생성하여 네트워크 사용의 감소를 감지합니다.",
      "C": "Aurora 데이터베이스를 Amazon DynamoDB 테이블로 바꿉니다. AWS Lambda 함수를 생성하여 매분 DynamoDB 테이블에서 네트워크 사용의 감소를 쿼리합니다. 처리 애플리케이션과 DynamoDB 테이블 사이에 DynamoDB Accelerator (DAX)를 사용합니다.",
      "D": "Aurora의 Database Activity Streams 기능 내에서 AWS Lambda 함수를 생성하여 네트워크 사용의 감소를 감지합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】실시간 이상 감지, Kinesis Data Streams, Apache Flink, 시계열 윈도우 집계 |\n\n【정답 포인트】B:초당 수천 포인트 처리→Kinesis 고처리량, 급격한 감소 감지→Flink 시계열 윈도우 함수, 밀리초 지연의 실시간 감지 가능 |\n\n【오답 체크】\n(A)EventBridge 매분 폴링-최대 1분 지연, \n(C)DynamoDB+폴링-더 느린 방식, \n(D)Database Activity Streams-감시용 |\n\n【시험 포인트】실시간 이상 감지는 폴링(EventBridge)이 아닌 스트리밍 아키텍처 필수",
    "en_q": "A telecommunications company collects network usage data throughout each day at a rate of several thousand data points each second. The company runs an application to process the usage data in real time. The company aggregates and stores the data in an Amazon Aurora DB instance. Sudden drops in network usage usually indicate a network outage. The company must be able to identify sudden drops in network usage so the company can take immediate remedial actions. Which solution will meet this requirement with the LEAST latency?",
    "en_opts": {
      "A": "Create an AWS Lambda function to query Aurora for drops in network usage. Use Amazon EventBridge to automatically invoke the Lambda function every minute.",
      "B": "Modify the processing application to publish the data to an Amazon Kinesis data stream. Create an Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) application to detect drops in network usage.",
      "C": "Replace the Aurora database with an Amazon DynamoDB table. Create an AWS Lambda function to query the DynamoDB table for drops in network usage every minute. Use DynamoDB Accelerator (DAX) between the processing application and DynamoDB table.",
      "D": "Create an AWS Lambda function within the Database Activity Streams feature of Aurora to detect drops in network usage."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/143122-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 121,
    "question": "데이터 엔지니어가 Amazon S3에 있는 테라바이트 규모의 원본 데이터를 처리하고 분석하고 있습니다. 데이터 엔지니어가 데이터를 정리하고 준비해야 합니다. 그런 다음 데이터 엔지니어가 데이터를 Amazon Redshift에 로드하여 분석해야 합니다. 데이터 엔지니어가 데이터 분석가가 복잡한 쿼리를 수행할 수 있는 솔루션이 필요합니다. 솔루션은 복잡한 ETL 프로세스를 수행하거나 인프라를 관리할 필요를 제거해야 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EMR을 사용하여 데이터를 준비합니다. AWS Step Functions을 사용하여 Amazon Redshift에 데이터를 로드합니다. Amazon QuickSight를 사용하여 쿼리를 실행합니다.",
      "B": "AWS Glue DataBrew를 사용하여 데이터를 준비합니다. AWS Glue를 사용하여 Amazon Redshift에 데이터를 로드합니다. Amazon Redshift를 사용하여 쿼리를 실행합니다.",
      "C": "AWS Lambda를 사용하여 데이터를 준비합니다. Amazon Kinesis Data Firehose를 사용하여 Amazon Redshift에 데이터를 로드합니다. Amazon Athena를 사용하여 쿼리를 실행합니다.",
      "D": "AWS Glue를 사용하여 데이터를 준비합니다. AWS Database Migration Service (AWS DMS)를 사용하여 Amazon Redshift에 데이터를 로드합니다. Amazon Redshift Spectrum을 사용하여 쿼리를 실행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】AWS Glue DataBrew, 시각적 데이터 정제, 코드 불필요, 최소 운영 오버헤드 |\n\n【정답 포인트】B:DataBrew로 시각적 데이터 정제(코드 불필요, 복잡 ETL↓), Glue ETL로 변환/Redshift 로드, Redshift에서 고성능 쿼리→모두 완전 관리형 |\n\n【오답 체크】\n(A)EMR-클러스터 관리 필요, \n(C)Lambda+Firehose-Lambda 정제 부적합, \n(D)DMS-DB 마이그레이션용 |\n\n【시험 포인트】DataBrew는 코드 없는 데이터 정제, 최소 오버헤드 조합은 관리형 서비스만",
    "en_q": "A data engineer is processing and analyzing multiple terabytes of raw data that is in Amazon S3. The data engineer needs to clean and prepare the data. Then the data engineer needs to load the data into Amazon Redshift for analytics. The data engineer needs a solution that will give data analysts the ability to perform complex queries. The solution must eliminate the need to perform complex extract, transform, and load (ETL) processes or to manage infrastructure. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon EMR to prepare the data. Use AWS Step Functions to load the data into Amazon Redshift. Use Amazon QuickSight to run queries.",
      "B": "Use AWS Glue DataBrew to prepare the data. Use AWS Glue to load the data into Amazon Redshift. Use Amazon Redshift to run queries.",
      "C": "Use AWS Lambda to prepare the data. Use Amazon Kinesis Data Firehose to load the data into Amazon Redshift. Use Amazon Athena to run queries.",
      "D": "Use AWS Glue to prepare the data. Use AWS Database Migration Service (AWS DMS) to load the data into Amazon Redshift. Use Amazon Redshift Spectrum to run queries."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145188-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 122,
    "question": "회사가 AWS Lambda 함수를 사용하여 레거시 SFTP 환경에서 Amazon S3 버킷으로 파일을 전송합니다. Lambda 함수는 VPC에서 동일한 VPC 환경의 다른 AWS 서비스와의 모든 통신이 보안 네트워크를 통해 이루어지도록 VPC 활성화됩니다. Lambda 함수는 SFTP 환경에 성공적으로 연결할 수 있습니다. 그러나 Lambda 함수가 S3 버킷에 파일을 업로드하려고 할 때 Lambda 함수가 타임아웃 오류를 반환합니다. 데이터 엔지니어가 보안 방식으로 타임아웃 문제를 해결해야 합니다. 비용이 가장 효율적인 솔루션은 무엇입니까?",
    "options": {
      "A": "VPC의 공용 서브넷에 NAT 게이트웨이를 생성합니다. NAT 게이트웨이로 네트워크 트래픽을 라우팅합니다.",
      "B": "Amazon S3에 대한 VPC 게이트웨이 엔드포인트를 생성합니다. VPC 게이트웨이 엔드포인트로 네트워크 트래픽을 라우팅합니다.",
      "C": "Amazon S3에 대한 VPC 인터페이스 엔드포인트를 생성합니다. VPC 인터페이스 엔드포인트로 네트워크 트래픽을 라우팅합니다.",
      "D": "VPC 인터넷 게이트웨이를 사용하여 인터넷에 연결합니다. VPC 인터넷 게이트웨이로 네트워크 트래픽을 라우팅합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】VPC Gateway Endpoint S3, VPC Interface Endpoint, NAT Gateway, 비용 효율성, 보안성 |\n\n【정답 포인트】B:VPC Lambda→S3 접근 시 Gateway Endpoint(무료, 낮은 지연) 최적, VPC 내 보안 유지, 타임아웃 해결 |\n\n【오답 체크】\n(A)NAT Gateway-월간 비용+데이터 처리비, \n(C)Interface Endpoint-Gateway보다 비쌈, \n(D)IGW-공개 인터넷 노출 |\n\n【시험 포인트】VPC Lambda→S3: Gateway Endpoint 무료 선택, Interface vs Gateway 비용 차이",
    "en_q": "A company uses an AWS Lambda function to transfer files from a legacy SFTP environment to Amazon S3 buckets. The Lambda function is VPC enabled to ensure that all communications between the Lambda function and other AWS services that are in the same VPC environment will occur over a secure network. The Lambda function is able to connect to the SFTP environment successfully. However, when the Lambda function attempts to upload files to the S3 buckets, the Lambda function returns timeout errors. A data engineer must resolve the timeout issues in a secure way. Which solution will meet these requirements in the MOST cost-effective way?",
    "en_opts": {
      "A": "Create a NAT gateway in the public subnet of the VPC. Route network traffic to the NAT gateway.",
      "B": "Create a VPC gateway endpoint for Amazon S3. Route network traffic to the VPC gateway endpoint.",
      "C": "Create a VPC interface endpoint for Amazon S3. Route network traffic to the VPC interface endpoint.",
      "D": "Use a VPC internet gateway to connect to the internet. Route network traffic to the VPC internet gateway."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145187-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 123,
    "question": "회사가 Amazon RDS에서 실행되는 고객 데이터베이스에서 데이터를 읽습니다. 데이터베이스에는 일관성이 없는 많은 필드가 포함되어 있습니다. 예를 들어, 한 데이터베이스에서 place_id라고 이름이 지정된 고객 레코드 필드는 다른 데이터베이스에서 location_id라고 이름이 지정됩니다. 회사가 고객 레코드 필드가 일치하지 않더라도 다양한 데이터베이스 간에 고객 레코드를 연결해야 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?",
    "options": {
      "A": "프로비저닝된 Amazon EMR 클러스터를 생성하여 데이터베이스의 데이터를 처리하고 분석합니다. Apache Zeppelin 노트북에 연결합니다. FindMatches 변환을 사용하여 데이터의 중복 레코드를 찾습니다.",
      "B": "AWS Glue 크롤러를 생성하여 데이터베이스를 크롤링합니다. FindMatches 변환을 사용하여 데이터의 중복 레코드를 찾습니다. 성능과 결과를 평가하여 변환을 평가하고 튜닝합니다.",
      "C": "AWS Glue 크롤러를 생성하여 데이터베이스를 크롤링합니다. Amazon SageMaker를 사용하여 Apache Spark ML 파이프라인을 구성합니다. 데이터의 중복 레코드를 찾습니다.",
      "D": "프로비저닝된 Amazon EMR 클러스터를 생성하여 데이터베이스의 데이터를 처리하고 분석합니다. Apache Zeppelin 노트북에 연결합니다. Apache Spark ML 모델을 사용하여 데이터의 중복 레코드를 찾습니다. 성능과 결과를 평가하여 모델을 평가하고 튜닝합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】AWS Glue FindMatches, 머신러닝 기반 중복 감지, 스키마 불일치 자동 처리 |\n\n【정답 포인트】B:FindMatches Transform으로 필드명 다르지만 의미 같은 데이터 자동 감지(place_id vs location_id), Glue Crawler로 자동 스키마 발견, 서버리스 처리(관리↓) |\n\n【오답 체크】\n(A)EMR+Zeppelin-클러스터 관리, FindMatches는 Glue 전용, \n(C)SageMaker-ML 파이프라인 구축 복잡, \n(D)EMR+Spark ML-자동 처리↓ |\n\n【시험 포인트】필드 불일치 문제→FindMatches Transform, Glue의 완전 관리형 특성",
    "en_q": "A company reads data from customer databases that run on Amazon RDS. The databases contain many inconsistent fields. For example, a customer record field that is named place_id in one database is named location_id in another database. The company needs to link customer records across different databases, even when customer record fields do not match. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create a provisioned Amazon EMR cluster to process and analyze data in the databases. Connect to the Apache Zeppelin notebook. Use the FindMatches transform to find duplicate records in the data.",
      "B": "Create an AWS Glue crawler to crawl the databases. Use the FindMatches transform to find duplicate records in the data. Evaluate and tune the transform by evaluating the performance and results.",
      "C": "Create an AWS Glue crawler to crawl the databases. Use Amazon SageMaker to construct Apache Spark ML pipelines to find duplicate records in the data.",
      "D": "Create a provisioned Amazon EMR cluster to process and analyze data in the databases. Connect to the Apache Zeppelin notebook. Use an Apache Spark ML model to find duplicate records in the data. Evaluate and tune the model by evaluating the performance and results."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145289-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 124,
    "question": "금융회사가 제3자 데이터 제공업체로부터 데이터를 받아 Amazon S3 버킷의 객체로 저장합니다. 회사가 객체에서 AWS Glue 크롤러를 실행하여 데이터 카탈로그를 생성합니다. AWS Glue 크롤러가 여러 테이블을 생성했습니다. 그러나 회사는 크롤러가 하나의 테이블만 생성할 것으로 예상했습니다. 회사가 AWS Glue 크롤러가 하나의 테이블만 생성하도록 하는 솔루션이 필요합니다. 이 요구사항을 충족하는 솔루션의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "각 객체의 객체 형식, 압축 유형 및 스키마가 동일한지 확인합니다.",
      "B": "각 객체의 객체 형식과 스키마가 동일한지 확인합니다. 각 객체의 압축 유형에 대해 일관성을 강제하지 마십시오.",
      "C": "각 객체의 스키마가 동일한지 확인합니다. 각 객체의 파일 형식과 압축 유형에 대해 일관성을 강제하지 마십시오.",
      "D": "각 S3 객체 이름의 접두사 구조가 일관성 있는지 확인합니다.",
      "E": "모든 S3 객체 이름이 유사한 패턴을 따르도록 합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】Glue Crawler 테이블 생성 규칙, 형식/압축/스키마 일치, S3 접두사 구조 |\n\n【정답 포인트】AD:A-형식(CSV/JSON)+압축(gzip/bzip2)+스키마 모두 같아야 같은 테이블, D-접두사 구조 일관성으로 Crawler 테이블 분할 제어→조합으로 단일 테이블 생성 |\n\n【오답 체크】\n(B)압축 무시-gzip/uncompressed 함께면 분할, \n(C)형식 무시-CSV/JSON 함께면 분할, \n(E)파일명-S3키 패턴은 기준 아님 |\n\n【시험 포인트】Glue Crawler: 형식+압축+스키마 일치 필수, S3 접두사가 분할 제어",
    "en_q": "A finance company receives data from third-party data providers and stores the data as objects in an Amazon S3 bucket. The company ran an AWS Glue crawler on the objects to create a data catalog. The AWS Glue crawler created multiple tables. However, the company expected that the crawler would create only one table. The company needs a solution that will ensure the AWS Glue crawler creates only one table. Which combination of solutions will meet this requirement? (Choose two.)",
    "en_opts": {
      "A": "Ensure that the object format, compression type, and schema are the same for each object.",
      "B": "Ensure that the object format and schema are the same for each object. Do not enforce consistency for the compression type of each object.",
      "C": "Ensure that the schema is the same for each object. Do not enforce consistency for the file format and compression type of each object.",
      "D": "Ensure that the structure of the prefix for each S3 object name is consistent.",
      "E": "Ensure that all S3 object names follow a similar pattern."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145291-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 125,
    "question": "애플리케이션이 Amazon Simple Queue Service (Amazon SQS) 큐에서 메시지를 사용합니다. 애플리케이션이 가끔 다운타임을 경험합니다. 다운타임의 결과로 큐 내의 메시지가 만료되고 1일 후 삭제됩니다. 메시지 삭제로 애플리케이션에 대한 데이터 손실이 발생합니다. 어떤 솔루션이 애플리케이션의 데이터 손실을 최소화합니까? (2개 선택)",
    "options": {
      "A": "메시지 보존 기간을 늘립니다",
      "B": "가시성 시간 초과를 늘립니다.",
      "C": "SQS 큐에 대기문자 큐(DLQ)를 연결합니다.",
      "D": "지연 큐를 사용하여 메시지 배달을 지연시킵니다",
      "E": "메시지 처리 시간을 줄입니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】SQS Message Retention Period, Dead-Letter Queue(DLQ), 메시지 만료, 데이터 손실 방지 |\n\n【정답 포인트】AC:A-메시지 보존기간 증가(기본 4일)→다운타임 복구까지 메시지 유지, C-DLQ 연결로 처리 실패 메시지 별도 보존→나중에 복구 가능 |\n\n【오답 체크】\n(B)Visibility Timeout-처리 중 숨김 시간, 만료↓, \n(D)지연 큐-배달 지연용, \n(E)처리시간 단축-다운타임 자체 해결↓ |\n\n【시험 포인트】메시지 손실 방지: 보존기간(Message Retention) + DLQ(실패 보존)",
    "en_q": "An application consumes messages from an Amazon Simple Queue Service (Amazon SQS) queue. The application experiences occasional downtime. As a result of the downtime, messages within the queue expire and are deleted after 1 day. The message deletions cause data loss for the application. Which solutions will minimize data loss for the application? (Choose two.)",
    "en_opts": {
      "A": "Increase the message retention period",
      "B": "Increase the visibility timeout.",
      "C": "Attach a dead-letter queue (DLQ) to the SQS queue.",
      "D": "Use a delay queue to delay message delivery",
      "E": "Reduce message processing time."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145713-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 126,
    "question": "회사가 시계열 데이터를 시각화하기 위해 거의 실시간 대시보드를 생성하고 있습니다. 회사가 Amazon Managed Streaming for Apache Kafka (Amazon MSK)에 데이터를 수집합니다. 사용자 정의 데이터 파이프라인이 데이터를 사용합니다. 파이프라인이 Amazon Keyspaces (Apache Cassandra용), Amazon OpenSearch Service 및 Amazon S3의 Apache Avro 객체에 데이터를 씁니다. 데이터 시각화에 필요한 데이터를 지연 시간이 가장 적은 상태로 사용 가능하게 하는 솔루션은 무엇입니까?",
    "options": {
      "A": "OpenSearch Service의 데이터를 사용하여 OpenSearch Dashboards를 생성합니다.",
      "B": "Apache Hive 메타스토어와 함께 Amazon Athena를 사용하여 Amazon S3의 Avro 객체를 쿼리합니다. Amazon Managed Grafana를 사용하여 Athena에 연결하고 대시보드를 생성합니다.",
      "C": "Amazon Athena를 사용하여 Amazon S3의 Avro 객체에서 데이터를 쿼리합니다. Amazon Keyspaces를 데이터 카탈로그로 구성합니다. Amazon QuickSight를 Athena에 연결하여 대시보드를 생성합니다.",
      "D": "AWS Glue를 사용하여 데이터를 카탈로그합니다. S3 Select를 사용하여 Amazon S3의 Avro 객체를 쿼리합니다. Amazon QuickSight를 S3 버킷에 연결하여 대시보드를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n•  OpenSearch Dashboards — OpenSearch Service의 내장 시각화 도구, 실시간 대시보드 지원 •  거의 실시간 — 밀리초~수초의 지연으로 최신 데이터 표시 •  Streaming → 쿼리 지연 — S3/Athena 추가 레이턴시 발생\n\n【정답 포인트】\n•  OpenSearch Service에 직접 저장 → Dashboards로 최소 지연 •  내장 시각화 → 별도 도구 없이 실시간 대시보드 •  MSK → OpenSearch → Dashboards (가장 짧은 경로)\n\n【오답 체크】\n(B) Athena — S3 쿼리로 지연 발생 (초 단위)\n(C) Athena + QuickSight — 쿼리 레이턴시 증가\n(D) S3 Select + QuickSight — S3 객체 쿼리로 추가 레이턴시\n\n【시험 포인트】\n•  실시간 대시보드 — 인-메모리 검색 엔진(OpenSearch) 필수 •  데이터 흐름 최단화 — 저장소와 시각화 도구 통합",
    "en_q": "A company is creating near real-time dashboards to visualize time series data. The company ingests data into Amazon Managed Streaming for Apache Kafka (Amazon MSK). A customized data pipeline consumes the data. The pipeline then writes data to Amazon Keyspaces (for Apache Cassandra), Amazon OpenSearch Service, and Apache Avro objects in Amazon S3. Which solution will make the data available for the data visualizations with the LEAST latency?",
    "en_opts": {
      "A": "Create OpenSearch Dashboards by using the data from OpenSearch Service.",
      "B": "Use Amazon Athena with an Apache Hive metastore to query the Avro objects in Amazon S3. Use Amazon Managed Grafana to connect to Athena and to create the dashboards.",
      "C": "Use Amazon Athena to query the data from the Avro objects in Amazon S3. Configure Amazon Keyspaces as the data catalog. Connect Amazon QuickSight to Athena to create the dashboards.",
      "D": "Use AWS Glue to catalog the data. Use S3 Select to query the Avro objects in Amazon S3. Connect Amazon QuickSight to the S3 bucket to create the dashboards."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145714-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 128,
    "question": "미디어 회사가 Amazon OpenSearch Service를 사용하여 인기 있는 음악 아티스트 및 노래에 대한 실시간 데이터를 분석하려고 합니다. 회사는 매일 수백만 개의 새로운 데이터 이벤트를 수집할 것으로 예상합니다. 새로운 데이터 이벤트는 Amazon Kinesis 데이터 스트림을 통해 도착합니다. 회사는 데이터를 변환한 다음 데이터를 OpenSearch Service 도메인에 수집해야 합니다. 운영 오버헤드가 가장 적은 상태에서 데이터를 수집해야 하는 방법은 무엇입니까?",
    "options": {
      "A": "Amazon Kinesis Data Firehose와 AWS Lambda 함수를 사용하여 데이터를 변환하고 변환된 데이터를 OpenSearch Service에 전달합니다.",
      "B": "사전 구축된 필터가 있는 Logstash 파이프라인을 사용하여 데이터를 변환하고 변환된 데이터를 OpenSearch Service에 전달합니다.",
      "C": "AWS Lambda 함수를 사용하여 Amazon Kinesis Agent를 호출하여 데이터를 변환하고 변환된 데이터를 OpenSearch Service에 전달합니다.",
      "D": "Kinesis Client Library (KCL)를 사용하여 데이터를 변환하고 변환된 데이터를 OpenSearch Service에 전달합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n•  Amazon Kinesis Data Firehose — 자동 버퍼링, 배치 전달, 변환 지원 •  Lambda 변환 — Firehose 내장 Lambda 지원으로 코드 실행 •  최소 운영 오버헤드 — 완전 관리형 서비스\n\n【정답 포인트】\n•  Kinesis Data Stream → Firehose (자동 배치 및 버퍼) •  Lambda 변환 — Firehose의 내장 변환 기능 •  자동 전달 — OpenSearch에 직접 로드 •  수백만 이벤트 처리 — Firehose의 고처리량 특성\n\n【오답 체크】\n(B) Logstash — 외부 도구 관리 필요, 오버헤드 증가\n(C) Kinesis Agent — 이미 Kinesis Data Stream 사용, 중복 도구\n(D) KCL — 직접 관리 필요, Firehose의 자동화 이점 상실\n\n【시험 포인트】\n•  Firehose의 Lambda 변환 기능 — 자동 배치 및 변환 •  최소 운영 오버헤드 — Firehose의 완전 관리형 특성",
    "en_q": "A media company wants to use Amazon OpenSearch Service to analyze real-time data about popular musical artists and songs. The company expects to ingest millions of new data events every day. The new data events will arrive through an Amazon Kinesis data stream. The company must transform the data and then ingest the data into the OpenSearch Service domain. Which method should the company use to ingest the data with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon Kinesis Data Firehose and an AWS Lambda function to transform the data and deliver the transformed data to OpenSearch Service.",
      "B": "Use a Logstash pipeline that has prebuilt filters to transform the data and deliver the transformed data to OpenSearch Service.",
      "C": "Use an AWS Lambda function to call the Amazon Kinesis Agent to transform the data and deliver the transformed data OpenSearch Service.",
      "D": "Use the Kinesis Client Library (KCL) to transform the data and deliver the transformed data to OpenSearch Service."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145715-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 129,
    "question": "회사가 고객 주소를 포함하는 고객 데이터 테이블을 AWS Lake Formation 데이터 레이크에 저장합니다. 새로운 규제를 준수하기 위해 회사는 캐나다에 있는 고객의 데이터에 사용자가 액세스할 수 없도록 해야 합니다. 회사가 캐나다에 있는 고객의 행에 대한 사용자 액세스를 방지하는 솔루션이 필요합니다. 운영 노력이 가장 적은 솔루션은 무엇입니까?",
    "options": {
      "A": "행 수준 필터를 설정하여 국가가 캐나다인 행에 대한 사용자 액세스를 방지합니다.",
      "B": "국가가 캐나다인 주소에 대한 사용자 액세스를 제한하는 IAM 역할을 생성합니다.",
      "C": "열 수준 필터를 설정하여 국가가 캐나다인 행에 대한 사용자 액세스를 방지합니다.",
      "D": "국가가 캐나다인 모든 행에 태그를 적용합니다. 태그가 \"Canada\"와 같은 경우 사용자 액세스를 방지합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n•  Row-Level Filter — 특정 조건의 행을 필터링하여 액세스 제어 •  Column-Level Filter — 특정 열을 숨기는 액세스 제어 (행 필터링 X) •  Lake Formation 정책 — 테이블/열/행 단위 액세스 제어\n\n【정답 포인트】\n•  캐나다 고객 행 제외 → Row-Level Filter (country = 'Canada' 제외) •  Lake Formation의 내장 기능 — 정책 기반 액세스 제어 •  최소 운영 노력 → IAM 정책 작성 불필요\n\n【오답 체크】\n(B) IAM 역할 — Lake Formation 정책과 분리된 방식, 복잡도 증가\n(C) 열 수준 필터 — 주소 열을 숨기는 것이지, 특정 행 제외 X\n(D) 태깅 — 행별 태그 적용 오버헤드, Lake Formation 필터보다 복잡\n\n【시험 포인트】\n•  Row-Level Filter — 특정 조건의 행을 조건부로 필터링 •  Lake Formation의 정책 기반 제어 — 최소 운영 노력",
    "en_q": "A company stores customer data tables that include customer addresses in an AWS Lake Formation data lake. To comply with new regulations, the company must ensure that users cannot access data for customers who are in Canada. The company needs a solution that will prevent user access to rows for customers who are in Canada. Which solution will meet this requirement with the LEAST operational effort?",
    "en_opts": {
      "A": "Set a row-level filter to prevent user access to a row where the country is Canada.",
      "B": "Create an IAM role that restricts user access to an address where the country is Canada.",
      "C": "Set a column-level filter to prevent user access to a row where the country is Canada.",
      "D": "Apply a tag to all rows where Canada is the country. Prevent user access where the tag is equal to \"Canada\"."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145293-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 130,
    "question": "회사가 Amazon Redshift에서 레이크하우스 아키텍처를 구현했습니다. 회사가 사용자가 제3자 ID 공급자(IdP)를 사용하여 Redshift 쿼리 편집기에 인증할 수 있도록 해야 합니다. 데이터 엔지니어가 인증 메커니즘을 설정해야 합니다. 이 요구사항을 충족하기 위해 데이터 엔지니어가 취해야 할 첫 번째 단계는 무엇입니까?",
    "options": {
      "A": "제3자 IdP를 Redshift 클러스터의 구성 설정에서 ID 공급자로 등록합니다.",
      "B": "제3자 IdP를 Amazon Redshift 내에서 ID 공급자로 등록합니다.",
      "C": "제3자 IdP를 AWS Secrets Manager에 대한 ID 공급자로 등록합니다. 사용자 자격 증명을 관리하도록 Amazon Redshift를 구성합니다.",
      "D": "제3자 IdP를 AWS Certificate Manager (ACM)에 대한 ID 공급자로 등록합니다. 사용자 자격 증명을 관리하도록 Amazon Redshift를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n•  Redshift Query Editor v2 — 브라우저 기반 쿼리 도구 •  Third-party IdP (SAML, OIDC) — 외부 인증 공급자 •  Redshift 내 IdP 등록 — Query Editor의 인증 설정\n\n【정답 포인트】\n•  Query Editor v2 인증 설정 → Redshift 관리 콘솔에서 IdP 등록 •  SAML 2.0 또는 OIDC 지원 — 표준 인증 프로토콜 •  첫 번째 단계 — Redshift 내에서 IdP 등록 (선행 작업)\n\n【오답 체크】\n(A) 클러스터 설정 — Query Editor v2 인증과 별개의 영역\n(C) Secrets Manager — 사용자 자격 증명 저장소이지, IdP 등록 서비스 아님\n(D) Certificate Manager — SSL 인증서 관리, IdP 등록과 무관\n\n【시험 포인트】\n•  Redshift Query Editor v2 — 내부에서 IdP 등록 필요 •  SAML/OIDC 구성 — 외부 IdP와의 신뢰 설정",
    "en_q": "A company has implemented a lake house architecture in Amazon Redshift. The company needs to give users the ability to authenticate into Redshift query editor by using a third-party identity provider (IdP). A data engineer must set up the authentication mechanism. What is the first step the data engineer should take to meet this requirement?",
    "en_opts": {
      "A": "Register the third-party IdP as an identity provider in the configuration settings of the Redshift cluster.",
      "B": "Register the third-party IdP as an identity provider from within Amazon Redshift.",
      "C": "Register the third-party IdP as an identity provider for AWS Secrets Manager. Configure Amazon Redshift to use Secrets Manager to manage user credentials.",
      "D": "Register the third-party IdP as an identity provider for AWS Certificate Manager (ACM). Configure Amazon Redshift to use ACM to manage user credentials."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145294-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 131,
    "question": "회사가 현재 범용 Amazon EC2 인스턴스를 포함하는 프로비저닝된 Amazon EMR 클러스터를 사용하고 있습니다. EMR 클러스터는 회사의 장기 실행 Apache Spark ETL 작업을 위해 1개에서 5개의 작업 노드 사이에 EMR 관리형 스케일링을 사용합니다. 회사는 매일 ETL 작업을 실행합니다. 회사가 ETL 작업을 실행할 때 EMR 클러스터는 빠르게 5개 노드로 확장됩니다. EMR 클러스터는 종종 최대 CPU 사용률에 도달하지만 메모리 사용량은 30% 미만입니다. 회사가 일일 ETL 작업 실행을 위해 EMR 비용을 절감하기 위해 EMR 클러스터 구성을 수정하려고 합니다. 이 요구사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "EMR 관리형 스케일링을 위한 최대 작업 노드 수를 10으로 늘립니다.",
      "B": "작업 노드 유형을 범용 EC2 인스턴스에서 메모리 최적화 EC2 인스턴스로 변경합니다.",
      "C": "작업 노드 유형을 범용 EC2 인스턴스에서 컴퓨팅 최적화 EC2 인스턴스로 전환합니다.",
      "D": "프로비저닝된 EMR 클러스터의 스케일링 쿨다운 기간을 줄입니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n•  Compute Optimized (C5, C6 등) — CPU 최적화, 메모리 적음 •  Memory Optimized (R5, R6 등) — 메모리 최적화, CPU 덜 중요 •  General Purpose (M5, M6 등) — 균형잡힌 리소스\n\n【정답 포인트】\n•  CPU 최대 사용 + 메모리 30% 미만 → CPU 병목 현상 •  Compute Optimized로 전환 → CPU 성능/비용 비율 개선 •  노드 수 증가 불필요 → 같은 워크로드로 비용 절감\n\n【오답 체크】\n(A) 최대 노드 10으로 증가 — CPU 병목이므로 스케일 아웃 도움 안 됨\n(B) 메모리 최적화 → 메모리 문제 없으므로 비용만 증가\n(D) 쿨다운 단축 → 스케일링 속도와 무관, CPU 병목 미해결\n\n【시험 포인트】\n•  인스턴스 유형 선택 — 병목 리소스 기반 최적화 •  CPU 병목 → Compute Optimized 인스턴스 전환",
    "en_q": "A company currently uses a provisioned Amazon EMR cluster that includes general purpose Amazon EC2 instances. The EMR cluster uses EMR managed scaling between one to five task nodes for the company's long-running Apache Spark extract, transform, and load (ETL) job. The company runs the ETL job every day. When the company runs the ETL job, the EMR cluster quickly scales up to five nodes. The EMR cluster often reaches maximum CPU usage, but the memory usage remains under 30%. The company wants to modify the EMR cluster configuration to reduce the EMR costs to run the daily ETL job. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Increase the maximum number of task nodes for EMR managed scaling to 10.",
      "B": "Change the task node type from general purpose EC2 instances to memory optimized EC2 instances.",
      "C": "Switch the task node type from general purpose EC2 instances to compute optimized EC2 instances.",
      "D": "Reduce the scaling cooldown period for the provisioned EMR cluster."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145106-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 132,
    "question": "회사가 .csv 파일을 Amazon S3 버킷에 업로드합니다. 회사의 데이터 플랫폼 팀이 데이터 발견을 수행하고 테이블과 스키마를 생성하도록 AWS Glue 크롤러를 설정합니다. AWS Glue 작업이 테이블에서 처리된 데이터를 Amazon Redshift 데이터베이스에 씁니다. AWS Glue 작업이 열 매핑을 처리하고 Redshift 데이터베이스에서 Amazon Redshift 테이블을 적절하게 생성합니다. 어떤 이유로든 회사가 AWS Glue 작업을 다시 실행하면 중복 레코드가 Amazon Redshift 테이블에 도입됩니다. 회사가 중복 없이 Redshift 테이블을 업데이트하는 솔루션이 필요합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue 작업을 수정하여 행을 스테이징 Redshift 테이블에 복사합니다. SQL 명령을 추가하여 스테이징 Redshift 테이블에서 새 값으로 기존 행을 업데이트합니다.",
      "B": "AWS Glue 작업을 수정하여 이전에 삽입된 데이터를 MySQL 데이터베이스에 로드합니다. MySQL 데이터베이스에서 upsert 작업을 수행합니다. 결과를 Amazon Redshift 테이블에 복사합니다.",
      "C": "Apache Spark의 DataFrame dropDuplicates() API를 사용하여 중복을 제거합니다. Redshift 테이블에 데이터를 씁니다.",
      "D": "AWS Glue ResolveChoice 내장 변환을 사용하여 가장 최근 레코드의 열 값을 선택합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n•  Staging Table — 임시 로드 테이블로 기존 데이터와 비교 •  Upsert 패턴 — Update (기존) + Insert (신규) 작업 •  SQL 기반 제어 — Redshift의 MERGE 또는 DELETE/INSERT 사용\n\n【정답 포인트】\n•  다시 실행 시 중복 발생 → 스테이징 테이블로 기존 데이터 먼저 삭제 •  SQL UPDATE — 스테이징 테이블의 신규 데이터로 기존 레코드 갱신 •  Redshift MERGE — UPDATE + INSERT 원자적 수행\n\n【오답 체크】\n(B) MySQL 중간 단계 — 불필요한 추가 단계, 성능 저하\n(C) dropDuplicates() — 메모리 기반 중복 제거, 이미 로드된 데이터 미처리\n(D) ResolveChoice — Glue 데이터 타입 선택 변환, 중복 제거와 무관\n\n【시험 포인트】\n•  Redshift 중복 방지 — 스테이징 테이블 패턴 •  멱등성(Idempotency) — 여러 번 실행해도 같은 결과",
    "en_q": "A company uploads .csv files to an Amazon S3 bucket. The company's data platform team has set up an AWS Glue crawler to perform data discovery and to create the tables and schemas. An AWS Glue job writes processed data from the tables to an Amazon Redshift database. The AWS Glue job handles column mapping and creates the Amazon Redshift tables in the Redshift database appropriately. If the company reruns the AWS Glue job for any reason, duplicate records are introduced into the Amazon Redshift tables. The company needs a solution that will update the Redshift tables without duplicates. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Modify the AWS Glue job to copy the rows into a staging Redshift table. Add SQL commands to update the existing rows with new values from the staging Redshift table.",
      "B": "Modify the AWS Glue job to load the previously inserted data into a MySQL database. Perform an upsert operation in the MySQL database. Copy the results to the Amazon Redshift tables.",
      "C": "Use Apache Spark's DataFrame dropDuplicates() API to eliminate duplicates. Write the data to the Redshift tables.",
      "D": "Use the AWS Glue ResolveChoice built-in transform to select the value of the column from the most recent record."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145107-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 133,
    "question": "회사가 Amazon Redshift를 사용하여 데이터 웨어하우스 솔루션을 구축하고 있습니다. 회사가 수백 개의 파일을 Redshift 클러스터의 팩트 테이블로 로드하고 있습니다. 회사가 데이터 웨어하우스 솔루션이 가장 큰 처리량을 달성하기를 원합니다. 솔루션은 회사가 팩트 테이블에 데이터를 로드할 때 클러스터 리소스를 최적으로 사용해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "여러 COPY 명령을 사용하여 데이터를 Redshift 클러스터에 로드합니다.",
      "B": "S3DistCp를 사용하여 여러 파일을 Hadoop Distributed File System (HDFS)에 로드합니다. HDFS 커넥터를 사용하여 데이터를 Redshift 클러스터에 수집합니다.",
      "C": "Redshift 클러스터 노드 수와 같은 INSERT 문 수를 사용합니다. 각 노드에 병렬로 데이터를 로드합니다.",
      "D": "단일 COPY 명령을 사용하여 데이터를 Redshift 클러스터에 로드합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n•  Redshift COPY 명령 — S3 객체 병렬 로드 명령 •  단일 vs 다중 COPY — 네트워크 레이턴시와 처리량 차이 •  클러스터 리소스 최적화 — 모든 노드의 병렬 처리\n\n【정답 포인트】\n•  최대 처리량 → 단일 COPY로 모든 노드 동시 활용 •  다중 COPY의 문제 — 순차 실행 또는 경합으로 오버헤드 증가 •  S3 prefixes — 단일 COPY가 자동으로 병렬화\n\n【오답 체크】\n(A) 여러 COPY — 순서대로 실행되어 처리량 감소\n(B) S3DistCp + HDFS — 불필요한 중간 단계, Redshift와 연결 비효율\n(C) 다중 INSERT — COPY보다 훨씬 느림, 병렬 처리 미흡\n\n【시험 포인트】\n•  Redshift 로드 최적화 — 단일 COPY 명령의 병렬 처리 •  처리량 극대화 — 클러스터의 모든 노드 활용",
    "en_q": "A company is using Amazon Redshift to build a data warehouse solution. The company is loading hundreds of files into a fact table that is in a Redshift cluster. The company wants the data warehouse solution to achieve the greatest possible throughput. The solution must use cluster resources optimally when the company loads data into the fact table. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use multiple COPY commands to load the data into the Redshift cluster.",
      "B": "Use S3DistCp to load multiple files into Hadoop Distributed File System (HDFS). Use an HDFS connector to ingest the data into the Redshift cluster.",
      "C": "Use a number of INSERT statements equal to the number of Redshift cluster nodes. Load the data in parallel into each node.",
      "D": "Use a single COPY command to load the data into the Redshift cluster."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145007-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 134,
    "question": "회사가 여러 데이터 소스에서 데이터를 수집하여 Amazon S3 버킷에 저장합니다. AWS Glue ETL 작업이 데이터를 변환하고 변환된 데이터를 Amazon S3 기반 데이터 레이크에 씁니다. 회사가 Amazon Athena를 사용하여 데이터 레이크의 데이터를 쿼리합니다. 회사가 공통 고유 식별자가 없더라도 일치하는 레코드를 식별해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "ETL 작업의 일부로 Amazon Macie 패턴 매칭을 사용합니다.",
      "B": "ETL 작업에서 AWS Glue PySpark Filter 클래스를 학습하고 사용합니다.",
      "C": "테이블을 분할하고 ETL 작업을 사용하여 고유 식별자에 데이터를 분할합니다.",
      "D": "ETL 작업에서 AWS Lake Formation FindMatches 변환을 학습하고 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n•  FindMatches Transform — 머신러닝 기반 유사 레코드 매칭 •  고유 식별자 없음 — 필드값 유사성으로 레코드 연결 •  Fuzzy Matching — 오타, 형식 차이 등 자동 처리\n\n【정답 포인트】\n•  공통 식별자 부재 → FindMatches로 데이터 품질 개선 •  머신러닝 기반 — 패턴 인식 및 학습 •  Lake Formation 통합 — Glue ETL과 원활한 연결\n\n【오답 체크】\n(A) Macie — 민감한 정보 검출용, 레코드 매칭과 무관\n(B) PySpark Filter — 조건 기반 필터링, 유사성 매칭 X\n(C) Partitioning — 데이터 조직, 레코드 매칭 로직 제공 X\n\n【시험 포인트】\n•  FindMatches Transform — 필드 불일치 및 중복 제거 •  고유 식별자 없는 환경 — Fuzzy Matching 필수",
    "en_q": "A company ingests data from multiple data sources and stores the data in an Amazon S3 bucket. An AWS Glue extract, transform, and load (ETL) job transforms the data and writes the transformed data to an Amazon S3 based data lake. The company uses Amazon Athena to query the data that is in the data lake. The company needs to identify matching records even when the records do not have a common unique identifier. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Use Amazon Macie pattern matching as part of the ETL job.",
      "B": "Train and use the AWS Glue PySpark Filter class in the ETL job.",
      "C": "Partition tables and use the ETL job to partition the data on a unique identifier.",
      "D": "Train and use the AWS Lake Formation FindMatches transform in the ETL job."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145116-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 135,
    "question": "데이터 엔지니어가 AWS Glue Crawler를 사용하여 Amazon S3 버킷의 데이터를 카탈로그하고 있습니다. S3 버킷에는 .csv 파일과 .json 파일이 모두 포함되어 있습니다. 데이터 엔지니어는 Crawler를 설정하여 .json 파일을 카탈로그에서 제외했습니다. Amazon Athena에서 쿼리를 실행할 때, 쿼리도 제외된 .json 파일을 처리하고 있습니다. 데이터 엔지니어는 이 문제를 해결하려고 합니다. S3 버킷의 .csv 파일에 대한 접근 요구 사항에 영향을 주지 않는 솔루션이 필요합니다. 가장 짧은 쿼리 시간으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue Crawler 설정을 조정하여 AWS Glue Crawler도 .json 파일을 제외하도록 합니다.",
      "B": "Athena 콘솔을 사용하여 Athena 쿼리도 .json 파일을 제외하도록 합니다.",
      "C": ".json 파일을 S3 버킷 내 다른 경로로 이동합니다.",
      "D": "S3 버킷 정책을 사용하여 .json 파일에 대한 접근을 차단합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n•  Glue Crawler — 메타데이터 카탈로깅 도구, 데이터 스키마 자동 감지 •  Athena — S3 데이터의 SQL 쿼리 엔진 •  파일 경로 분리 — 쿼리 시 특정 경로만 스캔하도록 제한\n\n【정답 포인트】\n•  Crawler 설정은 메타데이터만 제어, 실제 데이터 스캔은 제어 불가 → Crawler 설정만으로 불충분 •  Athena 콘솔에서 파일 제외는 쿼리마다 수동 지정 필요 → 자동화 안 됨 •  파일 물리적 이동 → S3 경로 기반 파티셔닝으로 Athena가 자동으로 스캔 경로 제한 가능 •  S3 버킷 정책은 JSON 파일 접근 완전 차단, CSV 파일 요구 사항 위반\n\n【오답 체크】\n(A) Crawler는 카탈로그 메타데이터만 제외, 실제 S3 데이터 스캔은 독립적 → Athena는 전체 경로 스캔\n(B) 쿼리마다 수동으로 WHERE 절 추가 필요 → 운영 오버헤드 증가, 자동화 불가\n(D) 정책으로 JSON 접근 차단하면 CSV 파일도 영향 가능, 과도한 제한\n\n【시험 포인트】\n•  Glue Catalog ≠ 실제 데이터 스캔 제어 → 메타데이터와 데이터 스캔은 독립 •  S3 파티셔닝 → Athena의 파티션 프루닝(Partition Pruning) 활용으로 성능 향상 •  최단 쿼리 시간 → 물리적 데이터 분리로 스캔 대상 최소화",
    "en_q": "A data engineer is using an AWS Glue crawler to catalog data that is in an Amazon S3 bucket. The S3 bucket contains both .csv and json files. The data engineer configured the crawler to exclude the .json files from the catalog. When the data engineer runs queries in Amazon Athena, the queries also process the excluded .json files. The data engineer wants to resolve this issue. The data engineer needs a solution that will not affect access requirements for the .csv files in the source S3 bucket. Which solution will meet this requirement with the SHORTEST query times?",
    "en_opts": {
      "A": "Adjust the AWS Glue crawler settings to ensure that the AWS Glue crawler also excludes .json files.",
      "B": "Use the Athena console to ensure the Athena queries also exclude the .json files.",
      "C": "Relocate the .json files to a different path within the S3 bucket.",
      "D": "Use S3 bucket policies to block access to the .json files."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145607-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 136,
    "question": "데이터 엔지니어가 Amazon S3 버킷에 저장된 객체를 읽기 위해 AWS Lambda 함수를 설정했습니다. 객체는 AWS KMS 키로 암호화되어 있습니다. 데이터 엔지니어는 Lambda 함수의 실행 역할을 S3 버킷에 접근하도록 설정했습니다. 그러나 Lambda 함수에서 오류가 발생하여 객체의 내용을 검색하지 못했습니다. 오류의 가능한 원인은 무엇입니까?",
    "options": {
      "A": "데이터 엔지니어가 S3 버킷의 권한을 잘못 설정했습니다. Lambda 함수가 객체에 접근할 수 없습니다.",
      "B": "Lambda 함수가 이전 SDK 버전을 사용하고 있으며, 이로 인해 읽기 실패가 발생했습니다.",
      "C": "S3 버킷이 데이터 엔지니어가 작업하는 AWS Region과 다른 Region에 위치합니다. 지연 시간 문제로 Lambda 함수에서 오류가 발생했습니다.",
      "D": "Lambda 함수의 실행 역할이 S3 객체를 암호화하는 KMS 키에 접근하기 위한 필요한 권한이 없습니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n•  KMS 암호화 — S3 객체 서버 측 암호화, 복호화 권한 필수 •  IAM 실행 역할 — Lambda 함수의 권한 집합 •  두 계층 권한 — S3 접근 + KMS 복호화 권한 모두 필요\n\n【정답 포인트】\n•  S3 접근 권한만으로 불충분 → KMS 암호화 데이터 복호화는 별도 권한 필요 •  Lambda 역할에 kms:Decrypt, kms:DescribeKey 권한 필요 •  KMS 키 정책에서도 Lambda 역할을 허용해야 함 •  이는 매우 일반적인 에러 패턴 → DEA 시험 핵심 주제\n\n【오답 체크】\n(A) S3 권한이 있더라도 KMS 복호화 권한 부재 → 제한적 설명\n(B) 최신 SDK도 KMS 권한 없으면 복호화 불가\n(C) 리전 차이는 지연만 유발, 오류 원인 아님\n\n【시험 포인트】\n•  KMS 암호화 + IAM 권한 → 이중 권한 검증 필수 •  Lambda 역할 = AssumeRole + 리소스 권한 •  암호화 데이터 처리 → 복호화 권한 항상 확인",
    "en_q": "A data engineer set up an AWS Lambda function to read an object that is stored in an Amazon S3 bucket. The object is encrypted by an AWS KMS key. The data engineer configured the Lambda function's execution role to access the S3 bucket. However, the Lambda function encountered an error and failed to retrieve the content of the object. What is the likely cause of the error?",
    "en_opts": {
      "A": "The data engineer misconfigured the permissions of the S3 bucket. The Lambda function could not access the object.",
      "B": "The Lambda function is using an outdated SDK version, which caused the read failure.",
      "C": "The S3 bucket is located in a different AWS Region than the Region where the data engineer works. Latency issues caused the Lambda function to encounter an error.",
      "D": "The Lambda function's execution role does not have the necessary permissions to access the KMS key that can decrypt the S3 object."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145725-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 137,
    "question": "데이터 엔지니어가 1,000개의 AWS Glue Data Catalog 테이블에서 데이터 품질 규칙을 구현했습니다. 최근 비즈니스 요구 사항 변경으로 인해 데이터 엔지니어는 데이터 품질 규칙을 편집해야 합니다. 데이터 엔지니어가 최소 운영 오버헤드로 이 요구 사항을 충족하려면 어떻게 해야 합니까?",
    "options": {
      "A": "AWS Glue ETL에서 파이프라인을 생성하여 1,000개의 Data Catalog 테이블 각각에 대한 규칙을 편집합니다. AWS Lambda 함수를 사용하여 각 Data Catalog 테이블에 대해 해당하는 AWS Glue 작업을 호출합니다.",
      "B": "AWS Lambda 함수를 생성하여 AWS Glue Data Quality에 API 호출을 만들어 편집을 수행합니다.",
      "C": "Amazon EMR 클러스터를 생성합니다. Amazon EMR에서 각 Data Catalog 테이블의 규칙을 편집하는 파이프라인을 실행합니다. AWS Lambda 함수를 사용하여 EMR 파이프라인을 실행합니다.",
      "D": "AWS Management Console을 사용하여 Data Catalog 내의 규칙을 편집합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n•  Glue Data Quality — Glue에 내장된 규칙 기반 품질 검사 서비스 •  프로그래밍식 관리 — API를 통한 대량 수정 •  운영 오버헤드 — 자동화 수준과 관리 복잡도\n\n【정답 포인트】\n•  1,000개 테이블 = 대량 반복 작업 → 자동화 필수 •  AWS Glue Data Quality API → 한 번의 Lambda 호출로 모든 규칙 일괄 수정 가능 •  Glue Data Quality는 Glue 서비스에 네이티브 통합 •  코드 개발 최소, API 호출만으로 대규모 관리 가능\n\n【오답 체크】\n(A) Glue ETL 작업 1,000개 생성/관리 → 과도한 오버헤드\n(C) EMR 클러스터 구성 → Glue보다 복잡, 비용 높음\n(D) 수동 콘솔 편집 → 1,000개 테이블 불가능, 운영 불가\n\n【시험 포인트】\n•  Glue Data Quality API — 규칙 대량 관리의 최우선 선택 •  Lambda + API 조합 → 최소 오버헤드 자동화 •  Glue 서비스 생태계 활용 → 외부 도구 불필요",
    "en_q": "A data engineer has implemented data quality rules in 1,000 AWS Glue Data Catalog tables. Because of a recent change in business requirements, the data engineer must edit the data quality rules. How should the data engineer meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create a pipeline in AWS Glue ETL to edit the rules for each of the 1,000 Data Catalog tables. Use an AWS Lambda function to call the corresponding AWS Glue job for each Data Catalog table.",
      "B": "Create an AWS Lambda function that makes an API call to AWS Glue Data Quality to make the edits.",
      "C": "Create an Amazon EMR cluster. Run a pipeline on Amazon EMR that edits the rules for each Data Catalog table. Use an AWS Lambda function to run the EMR pipeline.",
      "D": "Use the AWS Management Console to edit the rules within the Data Catalog."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145726-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 138,
    "question": "두 명의 개발자가 별도의 애플리케이션 릴리스에서 작업하고 있습니다. 개발자들이 GitHub 리포지토리의 master 브랜치를 소스로 사용하여 Branch A와 Branch B라는 기능 브랜치를 만들었습니다. Branch A의 개발자가 프로덕션 시스템에 코드를 배포했습니다. Branch B의 코드는 다음 주의 예정된 애플리케이션 릴리스에서 master 브랜치로 병합될 것입니다. Branch B의 개발자가 master 브랜치로 풀 리퀘스트를 제출하기 전에 어떤 명령을 실행해야 합니까?",
    "options": {
      "A": "git diff branchB master git commit -m",
      "B": "git pull master",
      "C": "git rebase master",
      "D": "git fetch -b master"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n•  git rebase — 현재 브랜치의 커밋을 다른 브랜치의 최신 상태 위에 재적용 •  git pull — fetch + merge 동시 수행 •  커밋 히스토리 — 선형 vs. 병렬 구조\n\n【정답 포인트】\n•  Branch A가 이미 master로 배포됨 → master 최신 커밋 이후 변경사항 발생 •  rebase는 Branch B의 커밋을 master 최신 상태 위에 재배치 •  선형 히스토리 유지 → PR 병합 시 충돌 최소화 •  Pull Request 전 rebase는 업스트림 변경사항 동기화 베스트 프랙티스\n\n【오답 체크】\n(A) git diff는 차이점만 표시, 병합 준비 아님\n(B) pull은 merge 포함 → 불필요한 merge 커밋 생성, 히스토리 복잡\n(D) fetch -b는 유효한 git 옵션 아님\n\n【시험 포인트】\n•  DEA에서 간헐적 출제 — Git 기본 이해도 검증 •  PR 전 동기화 → rebase가 표준 방식 •  커밋 히스토리 관리 — 운영 효율성 영향",
    "en_q": "Two developers are working on separate application releases. The developers have created feature branches named Branch A and Branch B by using a GitHub repository's master branch as the source. The developer for Branch A deployed code to the production system. The code for Branch B will merge into a master branch in the following week's scheduled application release. Which command should the developer for Branch B run before the developer raises a pull request to the master branch?",
    "en_opts": {
      "A": "git diff branchB master git commit -m",
      "B": "git pull master",
      "C": "git rebase master",
      "D": "git fetch -b master"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145728-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 139,
    "question": "회사가 Amazon Redshift에 직원 데이터를 저장하고 있습니다. Employee라는 테이블은 Region ID, Department ID, Role ID를 복합 정렬 키로 사용합니다. 어떤 쿼리가 테이블의 복합 정렬 키를 사용하여 쿼리 속도를 가장 크게 증가시킬까요? (2개를 선택하세요)",
    "options": {
      "A": "Select *from Employee where Region ID='North America';",
      "B": "Select *from Employee where Region ID='North America' and Department ID=20;",
      "C": "Select *from Employee where Department ID=20 and Region ID='North America';",
      "D": "Select *from Employee where Role ID=50;",
      "E": "Select *from Employee where Region ID='North America' and Role ID=50;"
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n•  Redshift 정렬 키 — 테이블 저장 순서 결정, 쿼리 성능 최적화 •  복합 정렬 키 — 다중 컬럼의 순서적 인덱싱 •  정렬 키 선두 효과 — 첫 번째 컬럼부터 순차적 매칭\n\n【정답 포인트】\n•  복합 정렬 키 (Region ID, Department ID, Role ID) 선언 순서 중요 • \n(A) Region ID 조건만 → 첫 번째 정렬 키 활용, Zone Map 스캔 최소화 • \n(B) Region ID AND Department ID → 정렬 키 선두 2개 모두 활용, 최적의 범위 프루닝 • \n(C) Department ID first → 정렬 키 선두 스킵, 인덱스 효율 떨어짐 • \n(D) Role ID만 → 세 번째 정렬 키, 앞 두 개 무시 → 거의 효과 없음 • \n(E) Role ID 포함 → 두 번째 컬럼 스킵하므로 비효율\n\n【오답 체크】\n(C) 조건 순서는 상관없지만, 정렬 키 정의 순서 위반 → 프루닝 비효과\n(D) 정렬 키 선두 무시\n(E) 비연속적 정렬 키 사용\n\n【시험 포인트】\n•  Redshift 정렬 키 설계 → 쿼리 패턴과 일치 필수 •  Zone Map — 정렬 키 선두부터 스캔 범위 축소 •  복합 정렬 키 효과 → 선두 컬럼부터의 누적 이득",
    "en_q": "A company stores employee data in Amazon Redshift. A table names Employee uses columns named Region ID, Department ID, and Role ID as a compound sort key. Which queries will MOST increase the speed of query by using a compound sort key of the table? (Choose two.)",
    "en_opts": {
      "A": "Select *from Employee where Region ID='North America';",
      "B": "Select *from Employee where Region ID='North America' and Department ID=20;",
      "C": "Select *from Employee where Department ID=20 and Region ID='North America';",
      "D": "Select *from Employee where Role ID=50;",
      "E": "Select *from Employee where Region ID='North America' and Role ID=50;"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145119-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 140,
    "question": "회사가 전 세계에 위치한 테스트 시설에서 테스트 결과를 수신하고 있습니다. 회사는 테스트 결과를 Amazon S3 버킷의 수백만 개의 1 KB JSON 파일에 저장합니다. 데이터 엔지니어는 파일을 처리하여 Apache Parquet 형식으로 변환하고 Amazon Redshift 테이블로 로드해야 합니다. 데이터 엔지니어는 AWS Glue를 사용하여 파일을 처리하고, AWS Step Functions를 사용하여 프로세스를 오케스트레이션하며, Amazon EventBridge를 사용하여 작업을 예약합니다. 회사가 최근 더 많은 테스트 시설을 추가했습니다. 파일 처리에 필요한 시간이 증가하고 있습니다. 데이터 엔지니어는 데이터 처리 시간을 줄여야 합니다. 데이터 처리 시간을 가장 많이 줄일 수 있는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Lambda를 사용하여 원본 입력 파일을 더 큰 파일로 그룹화합니다. 더 큰 파일을 Amazon S3에 다시 씁니다. AWS Glue를 사용하여 파일을 처리합니다. Amazon Redshift 테이블로 파일을 로드합니다.",
      "B": "AWS Glue 동적 프레임 파일 그룹화 옵션을 사용하여 원본 입력 파일을 수집합니다. 파일을 처리합니다. Amazon Redshift 테이블로 파일을 로드합니다.",
      "C": "Amazon Redshift COPY 명령을 사용하여 원본 입력 파일을 Amazon S3에서 직접 Amazon Redshift 테이블로 이동합니다. Amazon Redshift에서 파일을 처리합니다.",
      "D": "AWS Glue 대신 Amazon EMR을 사용하여 원본 입력 파일을 그룹화합니다. Amazon EMR에서 파일을 처리합니다. Amazon Redshift 테이블로 파일을 로드합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n•  작은 파일 문제 — 1KB 파일 수백만 개 → 메타데이터 오버헤드, 느린 처리 •  Glue 동적 프레임 파일 그룹화 — 자동 파일 병합, 내장 최적화 •  I/O 효율 — 파일 시스템 오버헤드 감소\n\n【정답 포인트】\n•  파일 그룹화가 핵심 → 수백만 개 소규모 파일 처리 불가 • \n(A) Lambda 추가 개발 필요 + S3 중간 쓰기 레이턴시 • \n(B) Glue 네이티브 파일 그룹화 → 별도 Lambda 없이 자동 최적화 •  Glue의 동적 프레임 = 분산 처리 프레임워크 활용 •  최소 개발 노력 + 빠른 처리\n\n【오답 체크】\n(A) Lambda로 그룹화 → 추가 개발, 추가 S3 쓰기 비용/레이턴시\n(C) Redshift COPY는 로드만 담당, 처리 아님 → 형식 변환 불가\n(D) EMR 클러스터 오버헤드 > Glue, 복잡도 증가\n\n【시험 포인트】\n•  작은 파일 안티패턴 — Glue 파일 그룹화로 해결 •  Glue 동적 프레임 = Spark DataFrame 추상화 •  데이터 레이크 효율성 — Parquet + 적정 파일 크기 필수",
    "en_q": "A company receives test results from testing facilities that are located around the world. The company stores the test results in millions of 1 KB JSON files in an Amazon S3 bucket. A data engineer needs to process the files, convert them into Apache Parquet format, and load them into Amazon Redshift tables. The data engineer uses AWS Glue to process the files, AWS Step Functions to orchestrate the processes, and Amazon EventBridge to schedule jobs. The company recently added more testing facilities. The time required to process files is increasing. The data engineer must reduce the data processing time. Which solution will MOST reduce the data processing time?",
    "en_opts": {
      "A": "Use AWS Lambda to group the raw input files into larger files. Write the larger files back to Amazon S3. Use AWS Glue to process the files. Load the files into the Amazon Redshift tables.",
      "B": "Use the AWS Glue dynamic frame file-grouping option to ingest the raw input files. Process the files. Load the files into the Amazon Redshift tables.",
      "C": "Use the Amazon Redshift COPY command to move the raw input files from Amazon S3 directly into the Amazon Redshift tables. Process the files in Amazon Redshift.",
      "D": "Use Amazon EMR instead of AWS Glue to group the raw input files. Process the files in Amazon EMR. Load the files into the Amazon Redshift tables."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145729-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 141,
    "question": "데이터 엔지니어는 AWS 계정에서 Amazon Managed Workflows for Apache Airflow(Amazon MWAA)를 사용하여 데이터 파이프라인을 실행합니다. 최근 워크플로우 실행이 실패했습니다. 데이터 엔지니어는 Apache Airflow 로그를 사용하여 워크플로우 실패의 원인을 진단해야 합니다. 실패의 원인을 진단하기 위해 데이터 엔지니어는 어떤 로그 유형을 사용해야 합니까?",
    "options": {
      "A": "YourEnvironmentName-WebServer",
      "B": "YourEnvironmentName-Scheduler",
      "C": "YourEnvironmentName-DAGProcessing",
      "D": "YourEnvironmentName-Task"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n•  MWAA 로그 타입 — 각 컴포넌트별 동작 기록 •  Task 로그 — 개별 작업 실행 상태 및 오류 •  Airflow 구성 요소 — Scheduler, WebServer, DAG Processor, Task\n\n【정답 포인트】\n•  Task 로그 = 실제 작업(DAG 내 Task) 실행 로그 •  작업 실패 원인 진단 → Task 로그에서 직접 확인 가능 •  stderr, stdout, 실행 결과 모두 기록 •  가장 상세하고 구체적인 오류 정보 포함\n\n【오답 체크】\n(A) WebServer — UI 접근 로그, 파이프라인 실행 정보 X\n(B) Scheduler — DAG 스케줄링 결정, Task 분배 로그 (간접적)\n(C) DAGProcessing — DAG 해석/검증 로그 (작업 실행 로그 아님)\n\n【시험 포인트】\n•  MWAA 로그 선택 — 문제 영역별 타겟팅 필수 •  Task 실패 → 즉시 Task 로그 확인 •  Scheduler/DAGProcessor 로그는 스케줄링 이슈 진단용",
    "en_q": "A data engineer uses Amazon Managed Workflows for Apache Airflow (Amazon MWAA) to run data pipelines in an AWS account. A workflow recently failed to run. The data engineer needs to use Apache Airflow logs to diagnose the failure of the workflow. Which log type should the data engineer use to diagnose the cause of the failure?",
    "en_opts": {
      "A": "YourEnvironmentName-WebServer",
      "B": "YourEnvironmentName-Scheduler",
      "C": "YourEnvironmentName-DAGProcessing",
      "D": "YourEnvironmentName-Task"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/145096-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 142,
    "question": "금융 회사는 Amazon Redshift를 데이터 웨어하우스로 사용합니다. 회사는 데이터를 공유 Amazon S3 버킷에 저장합니다. 회사는 Amazon Redshift Spectrum을 사용하여 S3 버킷에 저장된 데이터에 접근합니다. 데이터는 인증된 타사 데이터 제공자로부터 제공됩니다. 각 타사 데이터 제공자는 고유한 연결 세부 정보를 가지고 있습니다. 규정 준수를 위해 회사는 회사의 AWS 환경 외부에서 데이터에 접근할 수 없도록 해야 합니다. 이러한 요구 사항을 충족하기 위해 회사가 취해야 할 조합 단계는 무엇입니까? (2개를 선택하세요.)",
    "options": {
      "A": "기존 Redshift 클러스터를 프라이빗 서브넷에 있는 새로운 Redshift 클러스터로 교체합니다. 인터페이스 VPC 엔드포인트를 사용하여 Redshift 클러스터에 연결합니다. NAT 게이트웨이를 사용하여 Redshift에 S3 버킷에 대한 접근을 제공합니다.",
      "B": "각 데이터 제공자에 대해 AWS CloudHSM 하드웨어 보안 모듈(HSM)을 생성합니다. 각 데이터 제공자의 데이터를 해당하는 HSM을 사용하여 암호화합니다.",
      "C": "Amazon Redshift 클러스터에 대해 향상된 VPC 라우팅을 켭니다. AWS Direct Connect 연결을 설정하고 각 데이터 제공자와 금융 회사의 VPC 간 연결을 구성합니다.",
      "D": "기본 키 및 외래 키에 대한 테이블 제약 조건을 정의합니다.",
      "E": "연합 쿼리를 사용하여 각 데이터 제공자의 데이터에 접근합니다. S3 버킷에 데이터를 업로드하지 않습니다. 게이트웨이 VPC 엔드포인트를 통해 연합 쿼리를 수행합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n•  Enhanced VPC Routing — Redshift의 데이터 경로를 VPC 내부로 제한 •  Direct Connect — 전용 네트워크 연결, AWS와 온프레미스 간 보안 •  Spectrum — S3의 외부 데이터 쿼리 •  규정 준수 경계 — 회사 네트워크 내에서만 데이터 접근\n\n【정답 포인트】\n• \n(A) 프라이빗 서브넷 + 인터페이스 VPC 엔드포인트 → Redshift 퍼블릭 접근 차단 • \n(C) Enhanced VPC Routing + Direct Connect → 모든 데이터 경로가 회사 네트워크 내부 경로를 통과 •  Direct Connect = 인터넷 경로 우회, 전용 회선 •  조합 (A+C) = 외부 접근 완전 차단\n\n【오답 체크】\n(B) HSM은 암호화 키 관리 도구, 접근 제어 X\n(D) 테이블 제약은 데이터 거버넌스, 네트워크 보안 X\n(E) Federated queries는 아키텍처 변경, 권장 방식 아님 + 게이트웨이 VPC 엔드포인트는 S3 접근용 아님\n\n【시험 포인트】\n•  Redshift 보안 경계 → VPC 라우팅 + Direct Connect 표준 •  규정 준수 = 네트워크 격리 + 암호화 •  Spectrum 보안 → Enhanced VPC Routing 필수",
    "en_q": "A finance company uses Amazon Redshift as a data warehouse. The company stores the data in a shared Amazon S3 bucket. The company uses Amazon Redshift Spectrum to access the data that is stored in the S3 bucket. The data comes from certified third-party data providers. Each third-party data provider has unique connection details. To comply with regulations, the company must ensure that none of the data is accessible from outside the company's AWS environment. Which combination of steps should the company take to meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Replace the existing Redshift cluster with a new Redshift cluster that is in a private subnet. Use an interface VPC endpoint to connect to the Redshift cluster. Use a NAT gateway to give Redshift access to the S3 bucket.",
      "B": "Create an AWS CloudHSM hardware security module (HSM) for each data provider. Encrypt each data provider's data by using the corresponding HSM for each data provider.",
      "C": "Turn on enhanced VPC routing for the Amazon Redshift cluster. Set up an AWS Direct Connect connection and configure a connection between each data provider and the finance company's VPC.",
      "D": "Define table constraints for the primary keys and the foreign keys.",
      "E": "Use federated queries to access the data from each data provider. Do not upload the data to the S3 bucket. Perform the federated queries through a gateway VPC endpoint."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/147826-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 143,
    "question": "여러 데이터 소스의 파일이 정기적으로 Amazon S3 버킷에 도착합니다. 데이터 엔지니어는 새 파일이 S3 버킷에 도착할 때 거의 실시간으로 새로운 파일을 Amazon Redshift로 수집하려고 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "쿼리 편집기 v2를 사용하여 COPY 명령을 스케줄링하여 새 파일을 Amazon Redshift로 로드합니다.",
      "B": "Amazon Aurora와 Amazon Redshift 간의 Zero-ETL 통합을 사용하여 새 파일을 Amazon Redshift로 로드합니다.",
      "C": "AWS Glue 작업 북마크를 사용하여 새 파일을 추출, 변환 및 로드(ETL)합니다.",
      "D": "S3 Event Notifications를 사용하여 새 파일을 Amazon Redshift로 로드하는 AWS Lambda 함수를 호출합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n•  S3 Event Notifications — S3 객체 생성/변경 이벤트 트리거 •  Near real-time — 즉각적 반응, 지연 최소화 •  이벤트 기반 아키텍처 — 폴링 불필요, 자동 트리거\n\n【정답 포인트】\n•  파일 도착 시 즉시 처리 = 이벤트 기반 설계 필수 •  S3 Event Notification → Lambda → Redshift COPY •  지연 시간 최소 (초 단위) •  자동 스케일링, 비용 효율적\n\n【오답 체크】\n(A) 쿼리 편집기 COPY 스케줄 = 고정 시간 기반, 즉시성 X, 파일 도착 감지 X\n(B) Zero-ETL은 Aurora 전용, S3에 적용 불가\n(C) Glue 북마크 = 배치 처리, 스케줄 기반, 거의 실시간 아님\n\n【시험 포인트】\n•  Near real-time 수집 = S3 Event + Lambda 표준 패턴 •  Redshift 로딩 → COPY 명령이 가장 효율적 •  이벤트 기반 데이터 파이프라인 구축 방식",
    "en_q": "Files from multiple data sources arrive in an Amazon S3 bucket on a regular basis. A data engineer wants to ingest new files into Amazon Redshift in near real time when the new files arrive in the S3 bucket. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use the query editor v2 to schedule a COPY command to load new files into Amazon Redshift.",
      "B": "Use the zero-ETL integration between Amazon Aurora and Amazon Redshift to load new files into Amazon Redshift.",
      "C": "Use AWS Glue job bookmarks to extract, transform, and load (ETL) load new files into Amazon Redshift.",
      "D": "Use S3 Event Notifications to invoke an AWS Lambda function that loads new files into Amazon Redshift."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/146986-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 144,
    "question": "기술 회사는 현재 Amazon Kinesis Data Streams를 사용하여 실시간으로 로그 데이터를 수집합니다. 회사는 실시간 쿼리를 위해 Amazon Redshift를 사용하고 로그 데이터를 보강하려고 합니다. 운영 오버헤드를 최소화하면서 데이터를 Amazon Redshift로 수집할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Kinesis Data Firehose 전송 스트림을 설정하여 Redshift 프로비저닝 클러스터 테이블로 데이터를 전송합니다.",
      "B": "Amazon Kinesis Data Firehose 전송 스트림을 설정하여 Amazon S3으로 데이터를 전송합니다. Redshift 프로비저닝 클러스터가 매분 데이터를 로드하도록 구성합니다.",
      "C": "Amazon Managed Service for Apache Flink(이전 Amazon Kinesis Data Analytics)를 구성하여 Redshift 프로비저닝 클러스터 테이블로 직접 데이터를 전송합니다.",
      "D": "Kinesis Data Streams에서 Amazon Redshift 스트리밍 수집을 사용하고 데이터를 구체화된 보기로 표시합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n•  Redshift 스트리밍 수집 — Kinesis/MSK에서 직접 스트리밍 데이터 수집 •  구체화된 보기(Materialized View) — 실시간 집계 쿼리 최적화 •  운영 오버헤드 최소 — 관리형 서비스 선호\n\n【정답 포인트】\n•  Redshift 스트리밍 수집 (신기능) = Kinesis → Redshift 직접 통합 •  Firehose 불필요 (중간 계층), 직접 연결로 레이턴시 감소 •  구체화된 보기 = 스트리밍 데이터의 실시간 집계 뷰 •  데이터 보강 + 실시간 쿼리 모두 지원 •  관리형 서비스로 오버헤드 최소\n\n【오답 체크】\n(A) Firehose는 배치 버퍼 → 진정한 실시간 아님\n(B) S3 거쳐서 추가 지연 + 분단위 배치 로딩\n(C) Flink는 데이터 변환 도구, Redshift 직접 로딩 아니며 추가 개발 필요\n\n【시험 포인트】\n•  Redshift 스트리밍 수집 — DEA 신규 핵심 서비스 •  Kinesis → Redshift 직접 경로 = 최소 지연 •  실시간 데이터 파이프라인 아키텍처",
    "en_q": "A technology company currently uses Amazon Kinesis Data Streams to collect log data in real time. The company wants to use Amazon Redshift for downstream real-time queries and to enrich the log data. Which solution will ingest data into Amazon Redshift with the LEAST operational overhead?",
    "en_opts": {
      "A": "Set up an Amazon Kinesis Data Firehose delivery stream to send data to a Redshift provisioned cluster table.",
      "B": "Set up an Amazon Kinesis Data Firehose delivery stream to send data to Amazon S3. Configure a Redshift provisioned cluster to load data every minute.",
      "C": "Configure Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) to send data directly to a Redshift provisioned cluster table.",
      "D": "Use Amazon Redshift streaming ingestion from Kinesis Data Streams and to present data as a materialized view."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/146967-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 145,
    "question": "회사는 온프레미스 Oracle 데이터베이스에서 데이터 웨어하우스를 유지합니다. 회사는 AWS에서 데이터 레이크를 구축하려고 합니다. 회사는 데이터 웨어하우스 테이블을 Amazon S3로 로드하고 매일 데이터 웨어하우스에서 도착하는 증분 데이터와 동기화하려고 합니다. 각 테이블은 단조 증가 값을 포함하는 컬럼을 가지고 있습니다. 각 테이블의 크기는 50 GB 미만입니다. 데이터 웨어하우스 테이블은 매일 밤 1시에서 2시 사이에 새로 고쳐집니다. 비즈니스 인텔리전스 팀은 매일 오전 10시에서 오후 8시 사이에 테이블을 쿼리합니다. 이러한 요구 사항을 가장 운영상 효율적인 방식으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Database Migration Service(AWS DMS) 전체 로드 및 CDC 작업을 사용하여 단조 증가 데이터 컬럼을 포함하는 테이블을 온프레미스 데이터 웨어하우스에서 Amazon S3으로 로드합니다. AWS Glue에서 사용자 정의 논리를 사용하여 매일의 증분 데이터를 S3의 전체 로드 복사본에 추가합니다.",
      "B": "AWS Glue Java Database Connectivity(JDBC) 연결을 사용합니다. 단조 증가 값을 포함하는 컬럼에 대해 작업 북마크를 구성합니다. 매일의 증분 데이터를 S3의 전체 로드 복사본에 추가하는 사용자 정의 논리를 작성합니다.",
      "C": "AWS Database Migration Service(AWS DMS) 전체 로드 마이그레이션을 사용하여 매일 데이터 웨어하우스 테이블을 Amazon S3으로 로드합니다. 매일 이전 날의 전체 로드 복사본을 덮어씁니다.",
      "D": "AWS Glue를 사용하여 매일 데이터 웨어하우스 테이블의 전체 복사본을 Amazon S3으로 로드합니다. 매일 이전 날의 전체 로드 복사본을 덮어씁니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n•  Change Data Capture(CDC) — 증분 데이터 추출 •  Job Bookmark — Glue의 상태 저장 메커니즘 •  단조 증가 값 — CDC 추적에 최적 (timestamp 등) •  운영 효율성 — 자동화, 관리 최소화\n\n【정답 포인트】\n•  크기 < 50GB, 테이블 수 적음 → 증분 로드 효율 •  단조 증가 컬럼 = 증분 데이터 추출의 천연 마커 •  Glue 북마크 = Job에서 마지막 처리 위치 자동 추적 •  JDBC 연결 + 북마크 = 자동화된 증분 로드 •  전체 로드보다 비용/시간 효율\n\n【오답 체크】\n(A) DMS CDC는 전체 테이블 스캔 후 변경사항 추적 → 복잡 •  추가 커스텀 Glue 로직 필요 → 개발 오버헤드\n(C) 매일 전체 로드 덮어쓰기 = 비효율, 불필요한 복제\n(D) \n(C) 와 동일 문제\n\n【시험 포인트】\n•  Glue 북마크 = 증분 처리의 표준 방식 •  단조 증가 컬럼 활용 = CDC 최적화 •  온프레미스 → S3 마이그레이션 패턴 •  적정 기술 선택 = 비용 + 성능 균형",
    "en_q": "A company maintains a data warehouse in an on-premises Oracle database. The company wants to build a data lake on AWS. The company wants to load data warehouse tables into Amazon S3 and synchronize the tables with incremental data that arrives from the data warehouse every day. Each table has a column that contains monotonically increasing values. The size of each table is less than 50 GB. The data warehouse tables are refreshed every night between 1 AM and 2 AM. A business intelligence team queries the tables between 10 AM and 8 PM every day. Which solution will meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Use an AWS Database Migration Service (AWS DMS) full load plus CDC job to load tables that contain monotonically increasing data columns from the on-premises data warehouse to Amazon S3. Use custom logic in AWS Glue to append the daily incremental data to a full-load copy that is in Amazon S3.",
      "B": "Use an AWS Glue Java Database Connectivity (JDBC) connection. Configure a job bookmark for a column that contains monotonically increasing values. Write custom logic to append the daily incremental data to a full-load copy that is in Amazon S3.",
      "C": "Use an AWS Database Migration Service (AWS DMS) full load migration to load the data warehouse tables into Amazon S3 every day. Overwrite the previous day's full-load copy every day.",
      "D": "Use AWS Glue to load a full copy of the data warehouse tables into Amazon S3 every day. Overwrite the previous day's full-load copy every day."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/147821-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 146,
    "question": "회사는 새로운 분석 팀을 위해 데이터 레이크를 구축하고 있습니다. 회사는 스토리지를 위해 Amazon S3을 사용하고 쿼리 분석을 위해 Amazon Athena를 사용합니다. Amazon S3의 모든 데이터는 Apache Parquet 형식입니다. 회사는 회사 데이터 센터의 소스 시스템으로 새로운 Oracle 데이터베이스를 실행합니다. 회사는 Oracle 데이터베이스에 70개의 테이블을 가지고 있습니다. 모든 테이블에는 기본 키가 있습니다. 소스 시스템의 데이터는 가끔 변경될 수 있습니다. 회사는 매일 테이블을 데이터 레이크로 수집하려고 합니다. 최소한의 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EMR에서 Apache Sqoop 작업을 생성하여 Oracle 데이터베이스에서 데이터를 읽습니다. Sqoop 작업을 구성하여 데이터를 Parquet 형식으로 Amazon S3에 씁니다.",
      "B": "Oracle 데이터베이스에 AWS Glue 연결을 생성합니다. AWS Glue 북마크 작업을 생성하여 데이터를 증분적으로 수집하고 데이터를 Parquet 형식으로 Amazon S3에 씁니다.",
      "C": "지속적인 복제를 위해 AWS Database Migration Service(AWS DMS) 작업을 생성합니다. Oracle 데이터베이스를 소스로 설정합니다. Amazon S3을 대상으로 설정합니다. 작업을 구성하여 데이터를 Parquet 형식으로 씁니다.",
      "D": "Amazon RDS에서 Oracle 데이터베이스를 생성합니다. AWS Database Migration Service(AWS DMS)를 사용하여 온프레미스 Oracle 데이터베이스를 Amazon RDS로 마이그레이션합니다. 테이블에서 트리거를 구성하여 AWS Lambda 함수를 호출하여 변경된 레코드를 Parquet 형식으로 Amazon S3에 씁니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n•  DMS 지속적 복제(CDC) — 온프레미스 DB → AWS 지속 동기화 •  변경 데이터 — 소스의 데이터 변경을 자동 추적 •  최소 노력 — 설정 후 자동 운영\n\n【정답 포인트】\n•  70개 테이블 + 변경 감지 필요 → 자동 CDC 필수 •  DMS는 Oracle → S3 직접 복제 지원 •  Parquet 형식 출력 = DMS 네이티브 지원 •  기본 키 존재 = CDC 추적 가능 (DMS 요구사항) •  \"지속적 복제\" 모드 = 증분 변경 자동 동기화 •  개발 없이 설정만으로 완성\n\n【오답 체크】\n(A) Sqoop = 배치 도구, 증분 변경 추적 약함, EMR 관리 필요\n(B) Glue 북마크 = 배치식 증분, DMS의 연속 CDC보다 지연\n(D) RDS 추가 계층 불필요, Lambda 트리거로 복잡, 과도한 설계\n\n【시험 포인트】\n•  온프레미스 DB → 데이터 레이크 표준 → DMS 선택 •  지속 복제 = CDC 모드의 자동화 •  Parquet 변환 = DMS 직접 지원 (Sqoop 대비 장점) •  최소 노력 = 관리형 서비스 우선",
    "en_q": "A company is building a data lake for a new analytics team. The company is using Amazon S3 for storage and Amazon Athena for query analysis. All data that is in Amazon S3 is in Apache Parquet format. The company is running a new Oracle database as a source system in the company's data center. The company has 70 tables in the Oracle database. All the tables have primary keys. Data can occasionally change in the source system. The company wants to ingest the tables every day into the data lake. Which solution will meet this requirement with the LEAST effort?",
    "en_opts": {
      "A": "Create an Apache Sqoop job in Amazon EMR to read the data from the Oracle database. Configure the Sqoop job to write the data to Amazon S3 in Parquet format.",
      "B": "Create an AWS Glue connection to the Oracle database. Create an AWS Glue bookmark job to ingest the data incrementally and to write the data to Amazon S3 in Parquet format.",
      "C": "Create an AWS Database Migration Service (AWS DMS) task for ongoing replication. Set the Oracle database as the source. Set Amazon S3 as the target. Configure the task to write the data in Parquet format.",
      "D": "Create an Oracle database in Amazon RDS. Use AWS Database Migration Service (AWS DMS) to migrate the on-premises Oracle database to Amazon RDS. Configure triggers on the tables to invoke AWS Lambda functions to write changed records to Amazon S3 in Parquet format."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/146993-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 147,
    "question": "운송 회사는 지리적 위치 레코드를 캡처하여 차량 움직임을 추적하려고 합니다. 레코드는 10바이트 크기입니다. 회사는 매초 최대 10,000개의 레코드를 수신합니다. 신뢰할 수 없는 네트워크 조건으로 인해 몇 분의 데이터 전송 지연이 허용됩니다. 운송 회사는 Amazon Kinesis Data Streams를 사용하여 지리적 위치 데이터를 수집하려고 합니다. 회사는 Kinesis Data Streams에 데이터를 보내기 위한 신뢰할 수 있는 메커니즘이 필요합니다. 회사는 Kinesis 샤드의 처리량 효율을 최대화해야 합니다. 이러한 요구 사항을 가장 운영상 효율적인 방식으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Kinesis Agent",
      "B": "Kinesis Producer Library(KPL)",
      "C": "Amazon Kinesis Data Firehose",
      "D": "Kinesis SDK"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n•  KPL — Kinesis Producer Library, 배치 처리 + 압축 + 재시도 •  처리량 효율 — 한 요청당 전송 바이트 최대화 •  신뢰성 — 네트워크 오류 재시도 메커니즘\n\n【정답 포인트】\n•  10바이트 × 10,000/초 = 100KB/초 → 소규모 레코드, 배치 필수 •  KPL = 자동 배칭(aggregation) → 여러 레코드를 한 요청에 포함 •  레코드당 프로토콜 오버헤드 감소 → 처리량 효율 극대화 •  지연 허용(몇 분) = 배치 대기 시간 유리 •  자동 재시도 → 신뢰할 수 없는 네트워크 대응 •  Producer 수준의 관리 최소화\n\n【오답 체크】\n(A) Kinesis Agent = 로그 파일 수집 도구, 프로그래밍 애플리케이션용 X\n(C) Firehose = S3/Redshift 로드용, Kinesis Data Streams와는 다름\n(D) Kinesis SDK = 기본 API, 배칭/압축 자동화 X, 개발 필요\n\n【시험 포인트】\n•  소규모 레코드 대량 처리 → KPL 자동 배칭 •  KPL 주요 이점 → 처리량 효율(throughput optimization) •  신뢰성 + 성능 → KPL의 표준 적용 시나리오",
    "en_q": "A transportation company wants to track vehicle movements by capturing geolocation records. The records are 10 bytes in size. The company receives up to 10.000 records every second. Data transmission delays of a few minutes are acceptable because of unreliable network conditions. The transportation company wants to use Amazon Kinesis Data Streams to ingest the geolocation data. The company needs a reliable mechanism to send data to Kinesis Data Streams. The company needs to maximize the throughput efficiency of the Kinesis shards. Which solution will meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Kinesis Agent",
      "B": "Kinesis Producer Library (KPL)",
      "C": "Amazon Kinesis Data Firehose",
      "D": "Kinesis SDK"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/147168-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 148,
    "question": "투자 회사는 지속적으로 증가하는 반구조화된 데이터 볼륨을 관리하고 통찰력을 추출해야 합니다. 데이터 엔지니어는 반구조화된 데이터를 중복 제거하여 중복 레코드를 제거하고 중복의 일반적인 오류 표기를 제거해야 합니다. 운영 오버헤드를 최소화하면서 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue의 FindMatches 기능을 사용하여 중복 레코드를 제거합니다.",
      "B": "Amazon Athena의 비Windows 함수를 사용하여 중복 레코드를 제거합니다.",
      "C": "Amazon Neptune ML 및 Apache Gremlin 스크립트를 사용하여 중복 레코드를 제거합니다.",
      "D": "Amazon DynamoDB의 글로벌 테이블 기능을 사용하여 중복 데이터를 방지합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n•  FindMatches — Glue의 머신러닝 기반 중복/오류 감지 •  퍼지 매칭 — 정확하지 않은 일치도 감지 (오타, 변형) •  반구조화된 데이터 — JSON, XML 등 스키마 유연 형식\n\n【정답 포인트】\n•  정확한 중복 제거 = SQL WHERE DISTINCT 사용 가능 •  오류 표기 중복 = 퍼지 매칭 필요 → FindMatches 전문 •  FindMatches = Glue의 기본 제공 ML 기능, 설정만으로 사용 •  \"일반적인 오류 표기\" = 문자 변형, 오타 감지 필수 •  최소 개발 오버헤드 (모델 학습 자동)\n\n【오답 체크】\n(B) Athena SQL = 정확 일치만 가능, 퍼지 매칭 미지원\n(C) Neptune ML = 그래프 기반, 일반 중복 제거용 과도\n(D) DynamoDB 글로벌 테이블 = 레플리카 관리, 중복 제거 X\n\n【시험 포인트】\n•  Glue FindMatches = DEA 핵심 데이터 품질 도구 •  반구조화된 데이터 품질 → ML 기반 접근 •  오류 표기 감지 = 정확한 SQL보다 고급 기능 필요",
    "en_q": "An investment company needs to manage and extract insights from a volume of semi-structured data that grows continuously. A data engineer needs to deduplicate the semi-structured data, remove records that are duplicates, and remove common misspellings of duplicates. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use the FindMatches feature of AWS Glue to remove duplicate records.",
      "B": "Use non-Windows functions in Amazon Athena to remove duplicate records.",
      "C": "Use Amazon Neptune ML and an Apache Gremlin script to remove duplicate records.",
      "D": "Use the global tables feature of Amazon DynamoDB to prevent duplicate data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/147823-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 149,
    "question": "회사는 재고 관리 시스템과 제품을 자동으로 재주문하는 재고 재주문 시스템을 구축하고 있습니다. 두 시스템 모두 Amazon Kinesis Data Streams를 사용합니다. 재고 관리 시스템은 Amazon Kinesis Producer Library(KPL)를 사용하여 스트림에 데이터를 발행합니다. 재고 재주문 시스템은 Amazon Kinesis Client Library(KCL)를 사용하여 스트림의 데이터를 사용합니다. 회사는 스트림을 필요에 따라 확장 및 축소하도록 구성합니다. 회사가 시스템을 프로덕션에 배포하기 전에 재주문 시스템이 중복된 데이터를 수신했음을 발견합니다. 재주문 시스템이 중복된 데이터를 수신하도록 한 요인은 무엇입니까? (2개를 선택하세요.)",
    "options": {
      "A": "제작자가 네트워크 관련 타임아웃을 경험했습니다.",
      "B": "스트림의 IteratorAgeMilliseconds 메트릭 값이 너무 높았습니다.",
      "C": "샤드 수, 레코드 프로세서 또는 둘 다의 변경이 있었습니다.",
      "D": "AggregationEnabled 설정 속성이 true로 설정되었습니다.",
      "E": "max_records 설정 속성이 너무 높은 숫자로 설정되었습니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n•  중복 처리 — Kinesis의 at-least-once 전달 보장 •  샤드 리밸런싱 — 샤드 수 변경 시 레코드 프로세서 재할당 •  재시도 메커니즘 — 네트워크 오류 시 자동 재전송\n\n【정답 포인트】\n• \n(A) Producer 타임아웃 → PutRecord 재시도 → KPL이 이미 전송된 레코드 재전송 •  Kinesis의 at-least-once 보장 = 중복 가능성 내재 • \n(C) 샤드 리밸런싱 → 레코드 프로세서 재시작 → 마지막 checkpoint 이후 레코드 재처리 •  KCL은 레코드 처리 후 checkpoint 저장 → 재시작 시 checkpoint부터 시작 •  리밸런싱 중 checkpoint 저장 지연 가능 → 중복 처리\n\n【오답 체크】\n(B) IteratorAgeMilliseconds = 이터레이터 나이, 중복과 직접 무관\n(D) AggregationEnabled = KPL의 배칭 옵션, 중복 원인 아님\n(E) max_records = 배치 크기, 중복 원인 아님\n\n【시험 포인트】\n•  Kinesis 중복 처리 = at-least-once 전달 특성 이해 •  Producer 재시도 = 타임아웃으로 인한 중복 •  샤드 리밸런싱 = KCL checkpoint 관리 중요 •  멱등성 처리 = 소비 측에서 중복 제거 책임",
    "en_q": "A company is building an inventory management system and an inventory reordering system to automatically reorder products. Both systems use Amazon Kinesis Data Streams. The inventory management system uses the Amazon Kinesis Producer Library (KPL) to publish data to a stream. The inventory reordering system uses the Amazon Kinesis Client Library (KCL) to consume data from the stream. The company configures the stream to scale up and down as needed. Before the company deploys the systems to production, the company discovers that the inventory reordering system received duplicated data. Which factors could have caused the reordering system to receive duplicated data? (Choose two.)",
    "en_opts": {
      "A": "The producer experienced network-related timeouts.",
      "B": "The stream's value for the IteratorAgeMilliseconds metric was too high.",
      "C": "There was a change in the number of shards, record processors, or both.",
      "D": "The AggregationEnabled configuration property was set to true.",
      "E": "The max_records configuration property was set to a number that was too high."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150357-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 150,
    "question": "전자 상거래 회사는 AWS에서 호스팅되는 여러 운영 시스템을 포괄하는 복잡한 주문 이행 프로세스를 운영합니다. 각 운영 시스템은 최신 처리 상태가 캡처되는 Java Database Connectivity(JDBC) 호환 관계형 데이터베이스를 가지고 있습니다. 회사는 운영 팀이 전체 이행 프로세스 전반에 걸쳐 시간 단위로 주문을 추적할 수 있는 기능을 제공해야 합니다. 이러한 요구 사항을 최소 개발 오버헤드로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue를 사용하여 운영 시스템에서 Amazon Redshift로 수집 파이프라인을 구축합니다. Amazon QuickSight에서 대시보드를 구축하여 주문을 추적합니다.",
      "B": "AWS Glue를 사용하여 운영 시스템에서 Amazon DynamoDB로 수집 파이프라인을 구축합니다. Amazon QuickSight에서 대시보드를 구축하여 주문을 추적합니다.",
      "C": "AWS Database Migration Service(AWS DMS)를 사용하여 운영 시스템에서 변경된 레코드를 캡처합니다. 변경 사항을 소스 데이터베이스와 다른 AWS Region의 Amazon DynamoDB 테이블에 발행합니다. 주문을 추적하는 Grafana 대시보드를 구축합니다.",
      "D": "AWS Database Migration Service(AWS DMS)를 사용하여 운영 시스템에서 변경된 레코드를 캡처합니다. 변경 사항을 소스 데이터베이스와 다른 AWS Region의 Amazon DynamoDB 테이블에 발행합니다. 주문을 추적하는 Amazon QuickSight 대시보드를 구축합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n•  주문 추적 — 시간 단위 쿼리, 분석 중심 •  Redshift vs DynamoDB — OLAP vs NoSQL •  개발 오버헤드 — 대시보드 구축, 데이터 모델링\n\n【정답 포인트】\n•  시간 단위 집계 쿼리 → 분석 쿼리에 최적화된 Redshift •  전체 이행 프로세스 상태 추적 → 정규화된 스키마, JOIN 쿼리 필요 •  Amazon Redshift + QuickSight = AWS 기본 분석 스택 •  Redshift의 BI 도구 통합 = QuickSight 최적화 (테이블 지정 가능) •  개발 최소 = AWS 관리형 서비스 조합\n\n【오답 체크】\n(B) DynamoDB = NoSQL, 복잡한 JOIN 쿼리 부적합 •  시간 단위 집계 쿼리 비효율 •  QuickSight-DynamoDB 통합 약함\n(C) \n(D) DMS를 사용한 DynamoDB 적재 → 불필요한 복잡도 •  OLAP 쿼리(시간 단위 추적)에 DynamoDB 부적합 • \n(C) Grafana = 모니터링 도구, 분석 대시보드용 아님 • \n(D) 도 마찬가지로 데이터베이스 선택 부적절\n\n【시험 포인트】\n•  주문 추적 = 분석 쿼리 → Redshift 선택 •  OLAP(분석) vs OLTP(트랜잭션) 이해 •  개발 오버헤드 = 기본 AWS 스택 우선 •  관계형 쿼리(JOIN) 필요 → DynamoDB 피하기",
    "en_q": "An ecommerce company operates a complex order fulfilment process that spans several operational systems hosted in AWS. Each of the operational systems has a Java Database Connectivity (JDBC)-compliant relational database where the latest processing state is captured. The company needs to give an operations team the ability to track orders on an hourly basis across the entire fulfillment process. Which solution will meet these requirements with the LEAST development overhead?",
    "en_opts": {
      "A": "Use AWS Glue to build ingestion pipelines from the operational systems into Amazon Redshift Build dashboards in Amazon QuickSight that track the orders.",
      "B": "Use AWS Glue to build ingestion pipelines from the operational systems into Amazon DynamoDBuild dashboards in Amazon QuickSight that track the orders.",
      "C": "Use AWS Database Migration Service (AWS DMS) to capture changed records in the operational systems. Publish the changes to an Amazon DynamoDB table in a different AWS region from the source database. Build Grafana dashboards that track the orders.",
      "D": "Use AWS Database Migration Service (AWS DMS) to capture changed records in the operational systems. Publish the changes to an Amazon DynamoDB table in a different AWS region from the source database. Build Amazon QuickSight dashboards that track the orders."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151928-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 151,
    "question": "데이터 엔지니어가 Amazon Neptune을 사용하여 그래프 애플리케이션을 개발해야 합니다. 엔지니어가 그래프 애플리케이션을 개발하기 위해 사용해야 하는 프로그래밍 언어는 무엇입니까? (2개를 선택하세요.)",
    "options": {
      "A": "Gremlin",
      "B": "SQL",
      "C": "ANSI SQL",
      "D": "SPARQL",
      "E": "Spark SQL"
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n•  Amazon Neptune — 완전 관리형 그래프 데이터베이스 •  Gremlin — 그래프 쿼리 언어 (Property Graph) •  SPARQL — RDF 그래프 쿼리 언어\n\n【정답 포인트】\n•  Neptune은 두 가지 그래프 모델 지원: • \n(A) Gremlin = Property Graph 모델 (일반적) • \n(D) SPARQL = RDF 그래프 모델 •  둘 다 Neptune에서 네이티브 지원\n\n【오답 체크】\n(B) SQL = 관계형 쿼리 언어, 그래프 구조 미지원\n(C) ANSI SQL = SQL의 표준 버전, 여전히 관계형\n(E) Spark SQL = 분산 처리용, Neptune 미지원\n\n【시험 포인트】\n•  Neptune 선택지 = Gremlin + SPARQL 조합 문제 •  그래프 모델 2가지 — 용도에 따라 선택 •  일반 그래프 애플리케이션 → Gremlin •  RDF 기반 시맨틱 쿼리 → SPARQL",
    "en_q": "A data engineer needs to use Amazon Neptune to develop graph applications. Which programming languages should the engineer use to develop the graph applications? (Choose two.)",
    "en_opts": {
      "A": "Gremlin",
      "B": "SQL",
      "C": "ANSI SQL",
      "D": "SPARQL",
      "E": "Spark SQL"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151917-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 152,
    "question": "모바일 게임 회사는 게임 앱에서 데이터를 캡처하고 싶습니다. 회사는 데이터를 3명의 내부 데이터 소비자가 사용할 수 있도록 하려고 합니다. 데이터 레코드는 약 20 KB 크기입니다. 회사는 게임 앱을 실행하는 각 기기에서 최적의 처리량을 달성하려고 합니다. 또한 회사는 데이터 스트림을 처리하는 애플리케이션을 개발하려고 합니다. 스트림 처리 애플리케이션은 각 내부 소비자에 대해 전용 처리량을 가져야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "모바일 앱을 구성하여 PutRecords API 작업을 호출하여 Amazon Kinesis Data Streams에 데이터를 전송합니다. 각 내부 소비자에 대해 스트림을 사용하여 향상된 팬아웃 기능을 사용합니다.",
      "B": "모바일 앱을 구성하여 PutRecordBatch API 작업을 호출하여 Amazon Kinesis Data Firehose에 데이터를 전송합니다. AWS Support 사례를 제출하여 회사의 AWS 계정에 대해 전용 처리량을 켭니다. 각 내부 소비자가 스트림에 접근하도록 허용합니다.",
      "C": "모바일 앱을 구성하여 Amazon Kinesis Producer Library(KPL)를 사용하여 Amazon Kinesis Data Firehose에 데이터를 전송합니다. 각 내부 소비자에 대해 스트림을 사용하여 향상된 팬아웃 기능을 사용합니다.",
      "D": "모바일 앱을 구성하여 PutRecords API 작업을 호출하여 Amazon Kinesis Data Streams에 데이터를 전송합니다. 각 내부 소비자에 대해 Amazon EC2 인스턴스에서 스트림 처리 애플리케이션을 호스팅합니다. EC2 인스턴스에 대해 자동 스케일링을 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Enhanced Fan-Out — Kinesis의 소비자별 전용 처리량\n▸ 20KB 대용량 레코드 — 샤드 용량 고려 필수\n▸ 다중 소비자 전용 처리량 — Fan-Out 목적\n\n【정답 포인트】\n▸ 요구사항: \"각 소비자에 대해 전용 처리량\"\n▸ Enhanced Fan-Out = 소비자별 4 MB/초 처리량 보장\n▸ 각 소비자가 독립적 처리량 → 상호 간섭 없음\n▸ \n(A) Kinesis Data Streams + Enhanced Fan-Out = 정답 조합\n▸ 20KB 레코드 × 3 소비자 → 공유 처리량 불충분 → 전용 처리량 필수\n\n【오답 체크】\n(B) Firehose = 배치 로드 목적, 스트리밍 처리 미지원\n▸ \"전용 처리량\" 옵션 없음\n(C) Firehose는 스트림 처리 애플리케이션용 아님\n(D) Streams 사용하지만 Enhanced Fan-Out 없음 → 공유 처리량\n▸ EC2 수동 관리 필요 → 오버헤드 증가\n\n【시험 포인트】\n▸ Enhanced Fan-Out = 다중 소비자 독립 처리량\n▸ 대용량 레코드 + 다중 소비자 → Fan-Out 표준\n▸ Firehose vs Streams 구분 — 처리 목적에 따라",
    "en_q": "A mobile gaming company wants to capture data from its gaming app. The company wants to make the data available to three internal consumers of the data. The data records are approximately 20 KB in size. The company wants to achieve optimal throughput from each device that runs the gaming app. Additionally, the company wants to develop an application to process data streams. The stream-processing application must have dedicated throughput for each internal consumer. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure the mobile app to call the PutRecords API operation to send data to Amazon Kinesis Data Streams. Use the enhanced fan-out feature with a stream for each internal consumer.",
      "B": "Configure the mobile app to call the PutRecordBatch API operation to send data to Amazon Kinesis Data Firehose. Submit an AWS Support case to turn on dedicated throughput for the company's AWS account. Allow each internal consumer to access the stream.",
      "C": "Configure the mobile app to use the Amazon Kinesis Producer Library (KPL) to send data to Amazon Kinesis Data Firehose. Use the enhanced fan-out feature with a stream for each internal consumer.",
      "D": "Configure the mobile app to call the PutRecords API operation to send data to Amazon Kinesis Data Streams. Host the stream-processing application for each internal consumer on Amazon EC2 instances. Configure auto scaling for the EC2 instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/147824-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 153,
    "question": "소매 회사는 Amazon Redshift 데이터 웨어하우스와 Amazon S3 버킷을 사용합니다. 회사는 매일 S3 버킷에 소매 주문 데이터를 수집합니다. 회사는 모든 주문 데이터를 S3 버킷 내 단일 경로에 저장합니다. 데이터는 100개 이상의 컬럼을 가지고 있습니다. 회사는 매일 100개 이상의 파일을 생성하는 타사 애플리케이션에서 주문 데이터를 수집합니다. 각 CSV 파일은 50~70 MB 크기입니다. 회사는 Amazon Redshift Spectrum을 사용하여 컬럼 집합을 선택하는 쿼리를 실행합니다. 사용자는 일일 주문을 기반으로 메트릭을 집계합니다. 최근 사용자가 쿼리 성능이 저하되었다고 보고했습니다. 데이터 엔지니어는 쿼리의 성능 문제를 해결해야 합니다. 이 요구 사항을 최소 개발 노력으로 충족할 조합 단계는 무엇입니까? (2개를 선택하세요.)",
    "options": {
      "A": "타사 애플리케이션을 구성하여 컬럼 형식의 파일을 생성합니다.",
      "B": "AWS Glue ETL 작업을 개발하여 여러 일일 CSV 파일을 하루에 하나의 파일로 변환합니다.",
      "C": "S3 버킷의 주문 데이터를 주문 날짜를 기준으로 파티셔닝합니다.",
      "D": "타사 애플리케이션을 구성하여 JSON 형식의 파일을 생성합니다.",
      "E": "JSON 데이터를 SUPER 타입 컬럼의 Amazon Redshift 테이블로 로드합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ Redshift Spectrum — S3의 외부 데이터 쿼리\n▸ 파티셔닝 — 쿼리 시 스캔 범위 최소화\n▸ 컬럼 형식 — 선택 컬럼만 읽기 (I/O 최적화)\n\n【정답 포인트】\n▸ 성능 저하 원인 2가지: (1) 전체 컬럼 스캔, (2) 날짜별 파티션 없음\n▸ \n(A) 컬럼 형식 (Parquet) → Spectrum의 컬럼 선택 성능 극대화\n▸ 타사 앱 설정만 필요 (최소 개발)\n▸ \n(C) 날짜 파티셔닝 → Spectrum이 필요한 날짜만 스캔\n▸ 파티션 프루닝 = 자동 성능 향상\n▸ 둘 다 타사 앱 또는 S3 구조 변경, Glue 개발 최소\n\n【오답 체크】\n(B) Glue 개발 = 개발 오버헤드 증가\n▸ 파일 통합의 효과 << 파티셔닝 효과\n(D) JSON → CSV보다 추가 이점 없음, Parquet만 못함\n(E) SUPER 타입 = 반구조화 데이터용, 성능 향상 X\n\n【시험 포인트】\n▸ Spectrum 성능 → 컬럼 형식 + 파티셔닝 표준\n▸ 100개 컬럼 + 선택 쿼리 → Parquet 필수\n▸ 날짜 파티셔닝 = Spectrum 필수 최적화\n▸ \"최소 개발 노력\" = 타사 앱/구조 변경 우선",
    "en_q": "A retail company uses an Amazon Redshift data warehouse and an Amazon S3 bucket. The company ingests retail order data into the S3 bucket every day. The company stores all order data at a single path within the S3 bucket. The data has more than 100 columns. The company ingests the order data from a third-party application that generates more than 30 files in CSV format every day. Each CSV file is between 50 and 70 MB in size. The company uses Amazon Redshift Spectrum to run queries that select sets of columns. Users aggregate metrics based on daily orders. Recently, users have reported that the performance of the queries has degraded. A data engineer must resolve the performance issues for the queries. Which combination of steps will meet this requirement with LEAST developmental effort? (Choose two.)",
    "en_opts": {
      "A": "Configure the third-party application to create the files in a columnar format.",
      "B": "Develop an AWS Glue ETL job to convert the multiple daily CSV files to one file for each day.",
      "C": "Partition the order data in the S3 bucket based on order date.",
      "D": "Configure the third-party application to create the files in JSON format.",
      "E": "Load the JSON data into the Amazon Redshift table in a SUPER type column."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151918-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 154,
    "question": "한 회사가 Amazon S3에 고객 기록을 저장합니다. 회사는 각 기록이 생성된 후 7년 동안 고객 기록 데이터를 삭제하거나 수정할 수 없어야 합니다. 루트 사용자도 데이터를 삭제하거나 수정할 수 있는 능력이 없어야 합니다. 데이터 엔지니어는 S3 Object Lock을 사용하여 데이터를 보호하려고 합니다. 이 요구 사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 버킷에서 governance 모드를 활성화합니다. 7년의 기본 보관 기간을 사용합니다.",
      "B": "S3 버킷에서 compliance 모드를 활성화합니다. 7년의 기본 보관 기간을 사용합니다.",
      "C": "S3 버킷의 개별 객체에 법적 보관을 배치합니다. 보관 기간을 7년으로 설정합니다.",
      "D": "S3 버킷의 개별 객체에 대한 보관 기간을 7년으로 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\nS3 Object Lock, Compliance Mode, Governance Mode, WORM(Write Once Read Many), 보관 기간\n\n【정답 포인트】\nS3 Object Lock의 compliance 모드는 루트 사용자를 포함한 어떤 사용자도 보관 기간 동안 객체를 삭제하거나 수정할 수 없는 불변성을 보장합니다. 버킷 수준에서 기본 보관 기간을 7년으로 설정하면, 모든 업로드된 객체에 자동으로 보관 정책이 적용됩니다. 규정 준수 요구사항의 불가침 보장을 제공합니다.\n\n【오답 체크】\nA: Governance 모드는 특정 IAM 권한이 있는 사용자가 보관 설정을 변경 가능하여 \"루트도 불가능\" 요구사항 불만족입니다. C: 법적 보관(Legal Hold)은 개별 객체에만 적용되며 기본 정책 설정이 아니므로 누락 객체 발생 가능성 있습니다. D: 개별 객체만 설정하면 일부 객체 누락 위험이 높아 보관 정책이 불완전합니다.\n\n【시험 포인트】\nS3 Object Lock의 두 가지 모드(Compliance vs Governance)의 차이를 명확히 이해해야 합니다. Compliance는 절대 불변성, Governance는 조건부 수정 가능이며, 규제 요구 사항에 따라 선택합니다.",
    "en_q": "A company stores customer records in Amazon S3. The company must not delete or modify the customer record data for 7 years after each record is created. The root user also must not have the ability to delete or modify the data. A data engineer wants to use S3 Object Lock to secure the data. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Enable governance mode on the S3 bucket. Use a default retention period of 7 years.",
      "B": "Enable compliance mode on the S3 bucket. Use a default retention period of 7 years.",
      "C": "Place a legal hold on individual objects in the S3 bucket. Set the retention period to 7 years.",
      "D": "Set the retention period for individual objects in the S3 bucket to 7 years."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151919-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 155,
    "question": "데이터 엔지니어는 기존 테이블과 동일한 스키마를 가진 Amazon Athena에 새로운 빈 테이블을 만들어야 합니다(old_table이라는 이름의 기존 테이블). 이 요구 사항을 충족하기 위해 데이터 엔지니어가 사용해야 하는 SQL 문은 무엇입니까?",
    "options": {
      "A": "CREATE TABLE new_table AS SELECT * FROM old_tables;",
      "B": "INSERT INTO new_table SELECT * FROM old_table;",
      "C": "CREATE TABLE new_table (LIKE old_table);",
      "D": "CREATE TABLE new_table AS (SELECT * FROM old_table) WITH NO DATA;"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\nCREATE TABLE AS SELECT(CTAS), WITH NO DATA, 스키마 복사, 빈 테이블 생성, Athena SQL\n\n【정답 포인트】\nCREATE TABLE AS SELECT는 쿼리 결과 기반으로 테이블을 생성합니다. WITH NO DATA 절을 사용하면 SELECT 결과의 구조(스키마)만 복사하고 실제 데이터는 포함하지 않습니다. 따라서 old_table과 동일한 스키마를 가진 빈 new_table이 생성됩니다. Athena에서 CTAS WITH NO DATA는 스키마 정확한 복사를 보장합니다.\n\n【오답 체크】\nA: 'old_tables'로 오타가 있어 실행 실패합니다. 정확한 테이블명이 필수입니다. B: INSERT INTO는 기존 테이블이 필요하므로 새로 생성하는 경우 실행 불가능합니다. C: LIKE 구문은 표준 SQL이지만 Athena에서는 지원되지 않습니다.\n\n【시험 포인트】\nAthena의 CTAS 활용이 중요합니다. 데이터 포함 복사(CTAS), 스키마만 복사(CTAS WITH NO DATA), 조건부 복사(CTAS WHERE) 등 다양한 변형을 이해하고 상황에 맞게 사용해야 합니다.",
    "en_q": "A data engineer needs to create a new empty table in Amazon Athena that has the same schema as an existing table named old_table. Which SQL statement should the data engineer use to meet this requirement?",
    "en_opts": {
      "A": "CREATE TABLE new_table AS SELECT * FROM old_tables;",
      "B": "INSERT INTO new_table SELECT * FROM old_table;",
      "C": "CREATE TABLE new_table (LIKE old_table);",
      "D": "CREATE TABLE new_table AS (SELECT * FROM old_table) WITH NO DATA;"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150339-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 156,
    "question": "데이터 엔지니어는 기존 Athena 테이블(cities_world라는 이름)의 데이터 하위 집합을 기반으로 Amazon Athena 테이블을 만들어야 합니다. cities_world 테이블에는 세계 여러 곳에 위치한 도시가 포함되어 있습니다. 데이터 엔지니어는 cities_world에서 미국에 위치한 도시만 포함하는 cities_us라는 새로운 테이블을 만들어야 합니다. 이 요구 사항을 충족하기 위해 데이터 엔지니어가 사용해야 하는 SQL 문은 무엇입니까?",
    "options": {
      "A": "INSERT INTO cities_usa (city,state) SELECT city, state FROM cities_world WHERE country='usa';",
      "B": "MOVE city, state FROM cities_world TO cities_usa WHERE country='usa';",
      "C": "INSERT INTO cities_usa SELECT city, state FROM cities_world WHERE country='usa';",
      "D": "UPDATE cities_usa SET (city, state) = (SELECT city, state FROM cities_world WHERE country='usa');"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\nINSERT INTO SELECT, 열 명시, 데이터 부분 복사, WHERE 절, Athena SQL\n\n【정답 포인트】\nINSERT INTO ... SELECT 문은 한 테이블에서 다른 테이블로 데이터를 삽입하는 표준 방법입니다. 옵션 A가 정답인 이유는 대상 테이블(cities_usa)과 원본 테이블(cities_world)의 열을 명시적으로 지정(city, state)하기 때문입니다. 명시적 열 지정으로 테이블 구조 변경에 대한 호환성을 보장하고, WHERE 절로 조건부 필터링이 명확합니다.\n\n【오답 체크】\nB: MOVE는 SQL 표준이 아니며 Athena에서 지원되지 않습니다. C: INSERT INTO cities_usa SELECT는 가능하지만 열을 명시적으로 지정하지 않아 테이블 구조 일치 필수이고 유지보수성이 떨어집니다. D: UPDATE 문은 INSERT 작업에 부적합하며 기존 행을 수정하는 용도입니다.\n\n【시험 포인트】\nINSERT INTO SELECT 사용 시 명시적 열 지정이 모범 사례입니다. 열을 명시하면 스키마 진화 시에도 호환성을 유지하고, 데이터 마이그레이션의 의도를 명확하게 드러냅니다.",
    "en_q": "A data engineer needs to create an Amazon Athena table based on a subset of data from an existing Athena table named cities_world. The cities_world table contains cities that are located around the world. The data engineer must create a new table named cities_us to contain only the cities from cities_world that are located in the US. Which SQL statement should the data engineer use to meet this requirement?",
    "en_opts": {
      "A": "INSERT INTO cities_usa (city,state) SELECT city, state FROM cities_world WHERE country='usa';",
      "B": "MOVE city, state FROM cities_world TO cities_usa WHERE country='usa';",
      "C": "INSERT INTO cities_usa SELECT city, state FROM cities_world WHERE country='usa';",
      "D": "UPDATE cities_usa SET (city, state) = (SELECT city, state FROM cities_world WHERE country='usa');"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150340-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 157,
    "question": "회사는 중앙 거버넌스 계정을 갖춘 데이터 메시를 구현합니다. 회사는 거버넌스 계정의 모든 데이터를 카탈로그화해야 합니다. 거버넌스 계정은 AWS Lake Formation을 사용하여 중앙에서 데이터를 공유하고 액세스 권한을 부여합니다. 회사는 Amazon Redshift Serverless 테이블 그룹을 포함하는 새로운 데이터 제품을 만들었습니다. 데이터 엔지니어는 이 데이터 제품을 마케팅 팀과 공유해야 합니다. 마케팅 팀은 열의 하위 집합에만 액세스할 수 있어야 합니다. 데이터 엔지니어는 동일한 데이터 제품을 규정 준수 팀과 공유해야 합니다. 규정 준수 팀은 마케팅 팀과 다른 열의 하위 집합에 액세스할 수 있어야 합니다. 이 요구 사항을 충족하기 위해 데이터 엔지니어가 취해야 하는 단계의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "공유해야 하는 테이블의 뷰를 만듭니다. 필요한 열만 포함합니다.",
      "B": "공유해야 하는 테이블을 포함하는 Amazon Redshift 데이터 공유를 만듭니다.",
      "C": "마케팅 팀 계정에 Amazon Redshift 관리형 VPC 엔드포인트를 만듭니다. 마케팅 팀에 뷰 액세스 권한을 부여합니다.",
      "D": "Amazon Redshift 데이터 공유를 거버넌스 계정의 Lake Formation 카탈로그에 공유합니다.",
      "E": "Amazon Redshift 데이터 공유를 마케팅 팀 계정의 Amazon Redshift Serverless 워크그룹으로 공유합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】Lake Formation 중앙 거버넌스, Redshift 데이터 공유, 세밀한 액세스 제어, 크로스 계정 공유, Serverless 워크그룹, 열 수준 권한\n\n【정답 포인트】정답은 B와 D의 조합입니다. B 옵션은 공유할 테이블을 포함하는 Redshift 데이터 공유를 생성하는 필수 단계로, Serverless 워크그룹 간에 테이블 그룹을 공유할 수 있게 합니다. D 옵션은 이 데이터 공유를 Lake Formation 카탈로그에 등록함으로써 중앙 거버넌스 계정에서 세밀한 액세스 제어를 가능하게 합니다. Lake Formation의 권한 부여를 통해 마케팅 팀과 규정 준수 팀이 서로 다른 열의 하위 집합에만 액세스할 수 있습니다.\n\n【오답 체크】A 옵션의 뷰 생성은 관계형 데이터베이스 방식이지만, Redshift Serverless 간의 크로스 계정 공유에는 데이터 공유 메커니즘이 필수입니다. C 옵션의 관리형 VPC 엔드포인트는 네트워크 연결을 위한 것이지만 세밀한 액세스 제어 메커니즘이 아닙니다. E 옵션은 데이터 공유를 워크그룹으로 직접 공유하지만 Lake Formation을 통한 중앙 거버넌스가 없어 세밀한 열 수준 제어가 불가능합니다.\n\n【시험 포인트】AWS DEA-C01에서는 Lake Formation과 Redshift 데이터 공유의 통합을 이해하는 것이 중요합니다. 데이터 메시 아키텍처에서 중앙 거버넌스 계정의 역할과 크로스 계정 공유 시 Lake Formation의 권한 관리 메커니즘을 반드시 숙지해야 합니다.",
    "en_q": "A company implements a data mesh that has a central governance account. The company needs to catalog all data in the governance account. The governance account uses AWS Lake Formation to centrally share data and grant access permissions. The company has created a new data product that includes a group of Amazon Redshift Serverless tables. A data engineer needs to share the data product with a marketing team. The marketing team must have access to only a subset of columns. The data engineer needs to share the same data product with a compliance team. The compliance team must have access to a different subset of columns than the marketing team needs access to. Which combination of steps should the data engineer take to meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Create views of the tables that need to be shared. Include only the required columns.",
      "B": "Create an Amazon Redshift data share that includes the tables that need to be shared.",
      "C": "Create an Amazon Redshift managed VPC endpoint in the marketing team's account. Grant the marketing team access to the views.",
      "D": "Share the Amazon Redshift data share to the Lake Formation catalog in the governance account.",
      "E": "Share the Amazon Redshift data share to the Amazon Redshift Serverless workgroup in the marketing team's account."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150341-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 158,
    "question": "회사는 Amazon S3에 데이터 레이크를 가지고 있습니다. 회사는 AWS Glue를 사용하여 데이터를 카탈로그하고 AWS Glue Studio를 사용하여 데이터 추출, 변환 및 로드(ETL) 파이프라인을 구현합니다. 회사는 파이프라인이 실행될 때마다 데이터 품질 문제를 확인해야 합니다. 데이터 엔지니어는 기존 파이프라인을 개선하여 미리 정의된 임계값을 기반으로 데이터 품질 규칙을 평가해야 합니다. 이 요구 사항을 최소 구현 노력으로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "각 Glue ETL 작업에 SQL 쿼리로 정의된 새로운 변환을 추가합니다. SQL 쿼리를 사용하여 평가해야 하는 데이터 품질 규칙을 포함하는 규칙 집합을 구현합니다.",
      "B": "각 Glue ETL 작업에 새로운 Evaluate Data Quality 변환을 추가합니다. 데이터 품질 정의 언어(DQDL)를 사용하여 평가해야 하는 데이터 품질 규칙을 포함하는 규칙 집합을 구현합니다.",
      "C": "각 Glue ETL 작업에 새로운 사용자 정의 변환을 추가합니다. PyDeequ 라이브러리를 사용하여 평가해야 하는 데이터 품질 규칙을 포함하는 규칙 집합을 구현합니다.",
      "D": "각 Glue ETL 작업에 새로운 사용자 정의 변환을 추가합니다. Great Expectations 라이브러리를 사용하여 평가해야 하는 데이터 품질 규칙을 포함하는 규칙 집합을 구현합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】Evaluate Data Quality 변환, DQDL 데이터 품질 정의 언어, 미리 정의된 임계값, 최소 구현 노력, AWS 관리형 기능, 규칙 집합\n\n【정답 포인트】정답 B는 AWS Glue의 Evaluate Data Quality 변환입니다. 이는 AWS에서 관리하는 기본 제공 기능으로, DQDL을 사용하여 데이터 품질 규칙을 간단하게 정의할 수 있습니다. Glue Studio 내에서 직관적인 인터페이스로 규칙을 추가할 수 있으며, 기존 ETL 파이프라인에 변환 단계로 추가하기만 하면 됩니다. 미리 정의된 임계값 기반의 품질 규칙 평가가 최소 구현 노력으로 자동화됩니다.\n\n【오답 체크】A 옵션의 SQL 쿼리는 데이터 품질 검증을 구현할 수 있지만 반복 개발이 필요하고 DQDL만큼 최적화되지 않습니다. C와 D 옵션의 PyDeequ와 Great Expectations는 오픈소스 라이브러리로 추가 설정, 의존성 관리, 유지보수가 필요합니다. 사용자 정의 변환은 개발 시간과 비용이 크게 증가합니다.\n\n【시험 포인트】AWS Glue의 네이티브 기능 중 최소 구현 노력을 원할 때는 항상 AWS에서 관리하는 기본 제공 변환을 선택해야 합니다. Evaluate Data Quality는 복잡한 품질 검증을 간단하게 표현할 수 있으므로 효율성 측면에서 우수합니다.",
    "en_q": "A company has a data lake in Amazon S3. The company uses AWS Glue to catalog data and AWS Glue Studio to implement data extract, transform, and load (ETL) pipelines. The company needs to ensure that data quality issues are checked every time the pipelines run. A data engineer must enhance the existing pipelines to evaluate data quality rules based on predefined thresholds. Which solution will meet these requirements with the LEAST implementation effort?",
    "en_opts": {
      "A": "Add a new transform that is defined by a SQL query to each Glue ETL job. Use the SQL query to implement a ruleset that includes the data quality rules that need to be evaluated.",
      "B": "Add a new Evaluate Data Quality transform to each Glue ETL job. Use Data Quality Definition Language (DQDL) to implement a ruleset that includes the data quality rules that need to be evaluated.",
      "C": "Add a new custom transform to each Glue ETL job. Use the PyDeequ library to implement a ruleset that includes the data quality rules that need to be evaluated.",
      "D": "Add a new custom transform to each Glue ETL job. Use the Great Expectations library to implement a ruleset that includes the data quality rules that need to be evaluated."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151925-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 159,
    "question": "회사는 마이크로서비스 아키텍처를 사용하는 애플리케이션을 가지고 있습니다. 회사는 Amazon Elastic Kubernetes Services(Amazon EKS) 클러스터에서 애플리케이션을 호스팅합니다. 회사는 애플리케이션에 대한 강력한 모니터링 시스템을 설정하려고 합니다. 회사는 EKS 클러스터와 애플리케이션의 로그를 분석해야 합니다. 회사는 클러스터의 로그를 애플리케이션의 추적과 연관시켜 전체 애플리케이션 요청 흐름의 장애 지점을 식별해야 합니다. 이 요구 사항을 최소 개발 노력으로 충족할 단계의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "FluentBit를 사용하여 로그를 수집합니다. OpenTelemetry를 사용하여 추적을 수집합니다.",
      "B": "Amazon CloudWatch를 사용하여 로그를 수집합니다. Amazon Kinesis를 사용하여 추적을 수집합니다.",
      "C": "Amazon CloudWatch를 사용하여 로그를 수집합니다. Amazon Managed Streaming for Apache Kafka(Amazon MSK)를 사용하여 추적을 수집합니다.",
      "D": "Amazon OpenSearch를 사용하여 로그와 추적을 상관관계시킵니다.",
      "E": "AWS Glue를 사용하여 로그와 추적을 상관관계시킵니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】분산 추적 Distributed Tracing, 로그-추적 상관관계, OpenTelemetry, Amazon OpenSearch, EKS 모니터링, 장애 지점 식별, 3가지 기둥\n\n【정답 포인트】정답은 A와 D의 조합입니다. A 옵션은 FluentBit와 OpenTelemetry라는 업계 표준 도구를 사용합니다. FluentBit은 경량이며 EKS 환경에서 로그를 효율적으로 수집하고, OpenTelemetry는 분산 추적 표준으로 마이크로서비스 간의 요청 흐름을 정확히 추적합니다. D 옵션의 Amazon OpenSearch는 수집된 로그와 추적을 상관관계시키고 통합하여 분석하는 강력한 검색 엔진입니다. 이를 통해 전체 요청 흐름에서 장애 지점을 신속하게 식별할 수 있습니다.\n\n【오답 체크】B 옵션은 CloudWatch와 Kinesis 조합으로, 로그는 수집하지만 추적 수집에 Kinesis는 부적합합니다. C 옵션의 MSK는 메시지 큐이지 추적 수집 시스템이 아닙니다. E 옵션의 Glue는 배치 기반 ETL 도구로 실시간 로그-추적 상관관계 분석에 적합하지 않습니다.\n\n【시험 포인트】마이크로서비스 모니터링에서는 로그, 메트릭, 추적의 3가지 기둥 통합이 중요합니다. OpenTelemetry는 AWS와 통합되고 있으므로 필수적으로 알아야 할 기술입니다.",
    "en_q": "A company has an application that uses a microservice architecture. The company hosts the application on an Amazon Elastic Kubernetes Services (Amazon EKS) cluster. The company wants to set up a robust monitoring system for the application. The company needs to analyze the logs from the EKS cluster and the application. The company needs to correlate the cluster's logs with the application's traces to identify points of failure in the whole application request flow. Which combination of steps will meet these requirements with the LEAST development effort? (Choose two.)",
    "en_opts": {
      "A": "Use FluentBit to collect logs. Use OpenTelemetry to collect traces.",
      "B": "Use Amazon CloudWatch to collect logs. Use Amazon Kinesis to collect traces.",
      "C": "Use Amazon CloudWatch to collect logs. Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to collect traces.",
      "D": "Use Amazon OpenSearch to correlate the logs and traces.",
      "E": "Use AWS Glue to correlate the logs and traces."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151926-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 160,
    "question": "회사는 Amazon DynamoDB 테이블에 데이터를 저장하는 게임 애플리케이션을 가지고 있습니다. 데이터 엔지니어는 게임 데이터를 Amazon OpenSearch Service 클러스터로 수집해야 합니다. 데이터 업데이트는 거의 실시간으로 발생해야 합니다. 이 요구 사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Step Functions를 사용하여 Amazon DynamoDB 테이블의 데이터를 정기적으로 Amazon S3 버킷으로 내보냅니다. AWS Lambda 함수를 사용하여 데이터를 Amazon OpenSearch Service에 로드합니다.",
      "B": "Amazon DynamoDB를 소스로 하고 Amazon OpenSearch Service를 대상으로 하는 AWS Glue 작업을 구성하여 거의 실시간으로 데이터를 전송합니다.",
      "C": "Amazon DynamoDB Streams를 사용하여 테이블 변경을 캡처합니다. AWS Lambda 함수를 사용하여 Amazon OpenSearch Service의 데이터를 처리하고 업데이트합니다.",
      "D": "사용자 정의 OpenSearch 플러그인을 사용하여 Amazon DynamoDB 테이블의 데이터를 동기화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】DynamoDB Streams, 거의 실시간 수집, 이벤트 기반 처리, Lambda 트리거, 변경 데이터 캡처 CDC, 완전 관리형\n\n【정답 포인트】정답 C입니다. DynamoDB Streams는 테이블의 모든 데이터 수정(신규 생성, 업데이트, 삭제)을 실시간으로 캡처합니다. Lambda 함수를 스트림 트리거로 설정하면 변경이 발생할 때마다 자동으로 함수가 실행되어 OpenSearch Service를 즉시 업데이트합니다. 이는 거의 실시간 데이터 동기화를 제공하면서도 서버 구성이 필요 없는 완전 관리형 솔루션입니다. 확장성과 신뢰성이 매우 우수합니다.\n\n【오답 체크】A 옵션의 Step Functions는 주기적인 배치 방식으로 설정되어 거의 실시간이 아니며 시간 지연이 발생합니다. B 옵션의 Glue는 배치 기반 ETL로 설계되었으며 실시간 스트리밍에 최적화되지 않았습니다. D 옵션의 사용자 정의 플러그인은 개발, 유지보수, 성능 관리에 많은 노력이 필요합니다.\n\n【시험 포인트】거의 실시간 데이터 수집에서는 항상 스트림 기반 솔루션(DynamoDB Streams, Kinesis, MSK)을 먼저 고려해야 합니다. 이벤트 기반 아키텍처는 높은 확장성과 낮은 지연을 제공합니다.",
    "en_q": "A company has a gaming application that stores data in Amazon DynamoDB tables. A data engineer needs to ingest the game data into an Amazon OpenSearch Service cluster. Data updates must occur in near real time. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS Step Functions to periodically export data from the Amazon DynamoDB tables to an Amazon S3 bucket. Use an AWS Lambda function to load the data into Amazon OpenSearch Service.",
      "B": "Configure an AWS Glue job to have a source of Amazon DynamoDB and a destination of Amazon OpenSearch Service to transfer data in near real time.",
      "C": "Use Amazon DynamoDB Streams to capture table changes. Use an AWS Lambda function to process and update the data in Amazon OpenSearch Service.",
      "D": "Use a custom OpenSearch plugin to sync data from the Amazon DynamoDB tables."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151927-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 161,
    "question": "회사는 Amazon Redshift를 데이터 웨어하우스 서비스로 사용합니다. 데이터 엔지니어는 물리적 데이터 모델을 설계해야 합니다. 데이터 엔지니어가 증가하고 있는 정규화되지 않은 테이블을 발견합니다. 테이블에는 분배 키로 사용할 적절한 열이 없습니다. 이 요구 사항을 최소 유지보수 오버헤드로 충족하기 위해 데이터 엔지니어가 사용해야 할 분배 스타일은 무엇입니까?",
    "options": {
      "A": "ALL 분배",
      "B": "EVEN 분배",
      "C": "AUTO 분배",
      "D": "KEY 분배"
    },
    "answer": "C",
    "explanation": "【핵심 용어】Redshift 분배 스타일, AUTO 분배, 물리적 데이터 모델, 유지보수 오버헤드, 자동 최적화, 테이블 성장, 정규화되지 않은 데이터\n\n【정답 포인트】정답 C의 AUTO 분배입니다. AUTO 분배 스타일은 Redshift의 자동 최적화 기능으로, 테이블 크기와 쿼리 패턴을 학습하여 최적의 분배 방식을 자동으로 선택합니다. 초기에는 EVEN 분배로 시작하지만 시간이 지나면서 쿼리 패턴 분석을 통해 필요시 KEY 분배로 전환됩니다. 적절한 분배 키가 없는 정규화되지 않은 증가하는 테이블에 가장 적합한 선택입니다.\n\n【오답 체크】A 옵션의 ALL 분배는 모든 노드에 데이터 복사본을 저장하므로 증가하는 큰 테이블에는 매우 비효율적이고 저장소 비용이 많이 듭니다. B 옵션의 EVEN 분배는 균등 분배이지만 조인 성능이 최적화되지 않을 수 있습니다. D 옵션의 KEY 분배는 적절한 분배 키가 없으므로 사용할 수 없습니다.\n\n【시험 포인트】Redshift의 AUTO 분배는 유지보수를 최소화하면서 성능을 자동으로 최적화합니다. 분배 키를 직접 선택하기 어려울 때는 AUTO에 맡기는 것이 가장 효율적입니다.",
    "en_q": "A company uses Amazon Redshift as its data warehouse service. A data engineer needs to design a physical data model. The data engineer encounters a de-normalized table that is growing in size. The table does not have a suitable column to use as the distribution key. Which distribution style should the data engineer use to meet these requirements with the LEAST maintenance overhead?",
    "en_opts": {
      "A": "ALL distribution",
      "B": "EVEN distribution",
      "C": "AUTO distribution",
      "D": "KEY distribution"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151853-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 162,
    "question": "소매 회사가 전 세계적으로 사업을 확장하고 있습니다. 회사는 Amazon QuickSight를 사용하여 재무 보고서를 위해 정확하게 환율을 계산해야 합니다. 회사는 글로벌 통화 값과 환율을 포함하는 데이터 세트를 분석한 시각을 기반으로 하는 기존 대시보드를 가지고 있습니다. 데이터 엔지니어는 환율 계산이 4자리 정밀도로 계산되도록 해야 합니다. 계산은 미리 계산되어야 합니다. 데이터 엔지니어는 QuickSight 초고속, 병렬, 메모리 내 계산 엔진(SPICE)에 결과를 구체화해야 합니다. 이 요구 사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터 세트에서 계산된 필드를 정의하고 생성합니다.",
      "B": "분석에서 계산된 필드를 정의하고 생성합니다.",
      "C": "시각에서 계산된 필드를 정의하고 생성합니다.",
      "D": "대시보드에서 계산된 필드를 정의하고 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】Glue Job 병렬화, 작업 부하 분산, 다중 스크립트 실행, 동시 처리, 성능 최적화, DPF 동적 프레임 분할, Step Functions\n\n【정답 포인트】대규모 데이터 처리를 위해서는 여러 AWS Glue 작업을 병렬로 실행하거나, 단일 Glue 작업 내에서 파티션 기반 병렬화를 활용하는 방식이 효과적입니다. Glue는 동적 프레임 분할(DPF) 기능으로 데이터를 자동으로 분할하고 병렬 처리할 수 있습니다. AWS Step Functions를 사용하여 여러 Glue 작업의 실행을 조율하면 효율적인 작업 부하 분산을 달성할 수 있으며, 전체 처리 시간을 크게 단축할 수 있습니다.\n\n【오답 체크】단순히 하나의 Glue 작업으로 대규모 데이터를 처리하면 병목 지점이 발생하여 성능이 저하됩니다. 부하 분산 없이 순차 처리하면 처리 시간이 오래 걸립니다.\n\n【시험 포인트】대규모 데이터 처리에서는 병렬화 전략이 필수입니다. Glue의 파티션 기반 병렬화와 Step Functions 조율을 함께 사용하면 최적의 성능을 달성할 수 있습니다.",
    "en_q": "A retail company is expanding its operations globally. The company needs to use Amazon QuickSight to accurately calculate currency exchange rates for financial reports. The company has an existing dashboard that includes a visual that is based on an analysis of a dataset that contains global currency values and exchange rates. A data engineer needs to ensure that exchange rates are calculated with a precision of four decimal places. The calculations must be precomputed. The data engineer must materialize results in QuickSight super-fast, parallel, in-memory calculation engine (SPICE). Which solution will meet these requirements?",
    "en_opts": {
      "A": "Define and create the calculated field in the dataset.",
      "B": "Define and create the calculated field in the analysis.",
      "C": "Define and create the calculated field in the visual.",
      "D": "Define and create the calculated field in the dashboard."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151931-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 163,
    "question": "회사는 3개의 자회사를 가지고 있습니다. 각 자회사는 다른 데이터 웨어하우징 솔루션을 사용합니다. 첫 번째 자회사는 Amazon Redshift에서 데이터 웨어하우스를 호스팅합니다. 두 번째 자회사는 AWS의 Teradata Vantage를 사용합니다. 세 번째 자회사는 Google BigQuery를 사용합니다. 회사는 모든 데이터를 중앙 Amazon S3 데이터 레이크로 집계하려고 합니다. 회사는 Apache Iceberg를 테이블 형식으로 사용하려고 합니다. 데이터 엔지니어는 모든 데이터 소스에 연결하고, 각 소스 엔진을 사용하여 변환을 실행하고, 데이터를 조인하고, 데이터를 Iceberg에 쓰는 새로운 파이프라인을 구축해야 합니다. 이 요구 사항을 최소 운영 노력으로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue에서 기본 Amazon Redshift, Teradata 및 BigQuery 커넥터를 사용하여 파이프라인을 구축합니다. 기본 AWS Glue 변환을 사용하여 데이터를 조인합니다. 데이터 레이크 Iceberg 테이블에 Merge 작업을 실행합니다.",
      "B": "Athena에서 Amazon Redshift, Teradata 및 BigQuery에 대한 Amazon Athena 페더레이션 쿼리 커넥터를 사용하여 파이프라인을 구축합니다. SQL 쿼리를 작성하여 모든 데이터 소스에서 읽고, 데이터를 조인하고, 데이터 레이크 Iceberg 테이블에 Merge 작업을 실행합니다.",
      "C": "Amazon EMR에서 기본 Amazon Redshift 커넥터, Teradata용 Java Database Connectivity(JDBC) 커넥터 및 오픈소스 Apache Spark BigQuery 커넥터를 사용하여 파이프라인을 구축합니다. PySpark로 코드를 작성하여 데이터를 조인합니다. 데이터 레이크 Iceberg 테이블에 Merge 작업을 실행합니다.",
      "D": "Amazon Appflow에서 기본 Amazon Redshift, Teradata 및 BigQuery 커넥터를 사용하여 Amazon S3 및 AWS Glue Data Catalog에 데이터를 씁니다. Amazon Athena를 사용하여 데이터를 조인합니다. 데이터 레이크 Iceberg 테이블에 Merge 작업을 실행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】Lambda 함수 메모리 할당, 함수 성능, CPU 할당량, 비용 최적화, 동시 실행, CPU 바운드 작업, 선형 관계\n\n【정답 포인트】Lambda의 성능은 할당된 메모리에 정비례합니다. 메모리를 증가시키면 CPU 할당량도 선형으로 증가하여 함수의 실행 시간이 단축되고 총 비용이 절감될 수 있습니다. 특히 CPU 바운드 작업에서는 높은 메모리 할당이 성능 개선에 매우 효과적입니다. 동시 실행 제약이 없다면 메모리를 최대화하여 처리 시간을 줄이는 것이 경제적입니다. 타임아웃 전에 안정적으로 작업을 완료할 수 있습니다.\n\n【오답 체크】메모리를 최소 수준으로 유지하면 CPU 제약으로 인해 실행 시간이 길어져 총 비용이 증가할 수 있습니다. 타임아웃 전에 작업을 완료할 수 없으면 실패하여 재시도 비용이 발생합니다.\n\n【시험 포인트】Lambda의 가격 모델은 메모리 × 시간이므로, 메모리 증가로 시간을 크게 단축할 수 있으면 전체 비용이 낮아질 수 있습니다.",
    "en_q": "A company has three subsidiaries. Each subsidiary uses a different data warehousing solution. The first subsidiary hosts its data warehouse in Amazon Redshift. The second subsidiary uses Teradata Vantage on AWS. The third subsidiary uses Google BigQuery. The company wants to aggregate all the data into a central Amazon S3 data lake. The company wants to use Apache Iceberg as the table format. A data engineer needs to build a new pipeline to connect to all the data sources, run transformations by using each source engine, join the data, and write the data to Iceberg. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Use native Amazon Redshift, Teradata, and BigQuery connectors to build the pipeline in AWS Glue. Use native AWS Glue transforms to join the data. Run a Merge operation on the data lake Iceberg table.",
      "B": "Use the Amazon Athena federated query connectors for Amazon Redshift, Teradata, and BigQuery to build the pipeline in Athena. Write a SQL query to read from all the data sources, join the data, and run a Merge operation on the data lake Iceberg table.",
      "C": "Use the native Amazon Redshift connector, the Java Database Connectivity (JDBC) connector for Teradata, and the open source Apache Spark BigQuery connector to build the pipeline in Amazon EMR. Write code in PySpark to join the data. Run a Merge operation on the data lake Iceberg table.",
      "D": "Use the native Amazon Redshift, Teradata, and BigQuery connectors in Amazon Appflow to write data to Amazon S3 and AWS Glue Data Catalog. Use Amazon Athena to join the data. Run a Merge operation on the data lake Iceberg table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150342-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 164,
    "question": "회사는 데이터 스트림 처리 애플리케이션을 구축하고 있습니다. 애플리케이션은 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터에서 실행됩니다. 애플리케이션은 처리된 데이터를 Amazon DynamoDB 테이블에 저장합니다. 회사는 EKS 클러스터의 애플리케이션 컨테이너가 DynamoDB 테이블에 안전하게 액세스할 수 있어야 합니다. 회사는 AWS 자격증명을 컨테이너에 포함하고 싶지 않습니다. 이 요구 사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS 자격증명을 Amazon S3 버킷에 저장합니다. EKS 컨테이너에 S3 버킷에 액세스하여 자격증명을 검색할 수 있는 권한을 부여합니다.",
      "B": "EKS 워커 노드에 IAM 역할을 연결합니다. IAM 역할에 DynamoDB 액세스 권한을 부여합니다. IAM 역할 서비스 계정(IRSA) 기능을 설정하도록 IAM 역할을 사용합니다.",
      "C": "DynamoDB 테이블에 액세스할 수 있는 액세스 키가 있는 IAM 사용자를 만듭니다. EKS 컨테이너의 환경 변수를 사용하여 IAM 사용자 액세스 키 데이터를 저장합니다.",
      "D": "DynamoDB 테이블에 액세스할 수 있는 액세스 키가 있는 IAM 사용자를 만듭니다. EKS 클러스터 노드의 볼륨에 마운트된 Kubernetes 시크릿을 사용하여 사용자 액세스 키 데이터를 저장합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】S3 Select, 부분 데이터 검색, 네트워크 전송 최소화, 전체 파일 다운로드 회피, 비용 절감, SQL 쿼리, 선택적 검색\n\n【정답 포인트】S3 Select는 S3 객체에서 필요한 일부 데이터만을 SQL 쿼리로 검색하는 강력한 기능입니다. 전체 파일을 다운로드하지 않고 필터링된 데이터만 반환받으므로 네트워크 대역폭 사용이 크게 줄어듭니다. 수십 GB의 대형 JSON/CSV 파일에서 소량의 레코드만 필요한 경우 매우 효과적이며, 전송 비용 절감과 쿼리 성능 개선을 동시에 달성할 수 있습니다. 계산 비용도 크게 감소합니다.\n\n【오답 체크】전체 파일을 다운로드하면 불필요한 데이터 전송으로 대역폭 비용과 저장소 비용이 증가합니다. Athena는 다른 가격 모델을 가지고 있고 배치 쿼리용입니다.\n\n【시험 포인트】대용량 객체에서 필터링이 필요한 상황에서 S3 Select는 매우 효율적인 솔루션입니다.",
    "en_q": "A company is building a data stream processing application. The application runs in an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The application stores processed data in an Amazon DynamoDB table. The company needs the application containers in the EKS cluster to have secure access to the DynamoDB table. The company does not want to embed AWS credentials in the containers. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Store the AWS credentials in an Amazon S3 bucket. Grant the EKS containers access to the S3 bucket to retrieve the credentials.",
      "B": "Attach an IAM role to the EKS worker nodes, Grant the IAM role access to DynamoDUse the IAM role to set up IAM roles service accounts (IRSA) functionality.",
      "C": "Create an IAM user that has an access key to access the DynamoDB table. Use environment variables in the EKS containers to store the IAM user access key data.",
      "D": "Create an IAM user that has an access key to access the DynamoDB table. Use Kubernetes secrets that are mounted in a volume of the EKS duster nodes to store the user access key data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151854-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 165,
    "question": "데이터 엔지니어는 새로운 데이터 프로듀서를 AWS로 온보드해야 합니다. 데이터 프로듀서는 데이터 제품을 AWS로 마이그레이션해야 합니다. 데이터 프로듀서는 비즈니스 애플리케이션을 지원하는 많은 데이터 파이프라인을 유지 관리합니다. 각 파이프라인에는 서비스 계정과 해당 자격증명이 있어야 합니다. 데이터 엔지니어는 데이터 프로듀서의 온프레미스 데이터 센터에서 AWS로의 안전한 연결을 설정해야 합니다. 데이터 엔지니어는 공개 인터넷을 사용하여 온프레미스 데이터 센터에서 AWS로 데이터를 전송하면 안 됩니다. 이 요구 사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "새로운 데이터 프로듀서에 Amazon Machine Images(AMI)를 Amazon Elastic Container Service(Amazon ECS)에서 만들도록 지시합니다. 애플리케이션의 코드베이스를 저장합니다. 공용 서브넷의 보안 그룹을 만듭니다. 온프레미스 데이터 센터로의 연결만 허용하도록 보안 그룹을 구성합니다.",
      "B": "온프레미스 데이터 센터에 AWS Direct Connect 연결을 만듭니다. 서비스 계정 자격증명을 AWS Secrets manager에 저장합니다.",
      "C": "공용 서브넷의 보안 그룹을 만듭니다. 보안 그룹을 구성하여 데이터 프로듀서에 해당하는 CIDR 블록에서만 연결을 허용합니다. 1일 만료 날짜가 있는 사전 서명된 URL이 포함된 Amazon S3 버킷을 만듭니다.",
      "D": "온프레미스 데이터 센터에 AWS Direct Connect 연결을 만듭니다. 애플리케이션 키를 AWS Secrets Manager에 저장합니다. 1일 만료 날짜가 있는 사전 서명된 URL이 포함된 Amazon S3 버킷을 만듭니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】Kinesis 스트림 샤딩, 초당 처리량, 파티션 키, 핫 파티션, 부하 분산, 확장성, 샤드 수 결정\n\n【정답 포인트】Kinesis의 처리량은 샤드 개수에 정비례합니다. 각 샤드는 초당 1MB의 수집과 2,000건의 GetRecords API 호출을 처리할 수 있습니다. 필요한 초당 처리량이 증가하면 샤드 개수를 추가하여 확장해야 합니다. 파티션 키 선택도 중요한데, 균등한 파티션 키 분포는 샤드 활용을 최적화합니다. 파티션 키가 쏠리면 특정 샤드가 과부하되는 핫 파티션 문제가 발생하여 성능이 저하됩니다.\n\n【오답 체크】단일 샤드로는 고처리량 요청을 처리할 수 없습니다. 배치 크기 증가는 처리량을 근본적으로 해결하지 못합니다.\n\n【시험 포인트】Kinesis 성능 최적화는 적절한 샤드 개수와 파티션 키 전략에 달려있습니다. 실제 시스템 설계에서 매우 중요합니다.",
    "en_q": "A data engineer needs to onboard a new data producer into AWS. The data producer needs to migrate data products to AWS. The data producer maintains many data pipelines that support a business application. Each pipeline must have service accounts and their corresponding credentials. The data engineer must establish a secure connection from the data producer's on-premises data center to AWS. The data engineer must not use the public internet to transfer data from an on-premises data center to AWS. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Instruct the new data producer to create Amazon Machine Images (AMIs) on Amazon Elastic Container Service (Amazon ECS) to store the code base of the application. Create security groups in a public subnet that allow connections only to the on-premises data center.",
      "B": "Create an AWS Direct Connect connection to the on-premises data center. Store the service account credentials in AWS Secrets manager.",
      "C": "Create a security group in a public subnet. Configure the security group to allow only connections from the CIDR blocks that correspond to the data producer. Create Amazon S3 buckets than contain presigned URLS that have one-day expiration dates.",
      "D": "Create an AWS Direct Connect connection to the on-premises data center. Store the application keys in AWS Secrets Manager. Create Amazon S3 buckets that contain presigned URLS that have one-day expiration dates."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151933-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 166,
    "question": "데이터 엔지니어는 Amazon S3 버킷의 데이터를 수신하도록 AWS Glue Data Catalog를 구성했습니다. 데이터 엔지니어는 Data Catalog가 증분 업데이트를 받도록 구성해야 합니다. 데이터 엔지니어는 S3 버킷에 대한 이벤트 알림을 설정하고 S3 이벤트를 수신하도록 Amazon Simple Queue Service(Amazon SQS) 큐를 만듭니다. 이 요구 사항을 최소 운영 오버헤드로 충족하기 위해 데이터 엔지니어가 취해야 하는 단계의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "SQS 큐에서 이벤트를 소비할 S3 이벤트 기반 AWS Glue 크롤러를 만듭니다.",
      "B": "시간 기반 일정을 정의하여 AWS Glue 크롤러를 실행하고 Data Catalog에 대한 증분 업데이트를 수행합니다.",
      "C": "SQS 큐가 수신하는 S3 이벤트를 기반으로 Data Catalog를 직접 업데이트하도록 AWS Lambda 함수를 사용합니다.",
      "D": "S3 버킷의 변경이 있을 때 Data Catalog를 업데이트하려면 수동으로 AWS Glue 크롤러를 시작합니다.",
      "E": "SQS 큐가 수신하는 S3 이벤트를 기반으로 Data Catalog 업데이트 프로세스를 오케스트레이션하도록 AWS Step Functions를 사용합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】DMS Database Migration Service, CDC 기능, 지속적 동기화, 증분 마이그레이션, 다운타임 최소화, 데이터 검증, 풀 로드\n\n【정답 포인트】AWS DMS는 데이터베이스 마이그레이션을 위한 완전 관리형 서비스입니다. CDC(Change Data Capture) 기능을 사용하면 소스 데이터베이스의 변경사항을 지속적으로 추적하여 대상으로 적용할 수 있습니다. 풀 로드 후 CDC로 증분 변경사항만 동기화하므로 프로덕션 다운타임을 최소화할 수 있습니다. DMS는 스키마 변환, 데이터 검증 기능으로 마이그레이션 정확성도 보장합니다. 이는 대규모 마이그레이션의 표준 방식입니다.\n\n【오답 체크】DMS 없이 직접 개발하면 성능, 안정성, 데이터 정합성을 보장하기 어렵고 개발 비용이 많이 들 수 있습니다.\n\n【시험 포인트】대규모 데이터베이스 마이그레이션에서 DMS의 CDC는 필수 고려 사항입니다.",
    "en_q": "A data engineer configured an AWS Glue Data Catalog for data that is stored in Amazon S3 buckets. The data engineer needs to configure the Data Catalog to receive incremental updates. The data engineer sets up event notifications for the S3 bucket and creates an Amazon Simple Queue Service (Amazon SQS) queue to receive the S3 events. Which combination of steps should the data engineer take to meet these requirements with LEAST operational overhead? (Choose two.)",
    "en_opts": {
      "A": "Create an S3 event-based AWS Glue crawler to consume events from the SQS queue.",
      "B": "Define a time-based schedule to run the AWS Glue crawler, and perform incremental updates to the Data Catalog.",
      "C": "Use an AWS Lambda function to directly update the Data Catalog based on S3 events that the SQS queue receives.",
      "D": "Manually initiate the AWS Glue crawler to perform updates to the Data Catalog when there is a change in the S3 bucket.",
      "E": "Use AWS Step Functions to orchestrate the process of updating the Data Catalog based on S3 events that the SQS queue receives."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150401-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 167,
    "question": "회사는 AWS Glue Data Catalog를 사용하여 매일 Amazon S3 버킷으로 업로드되는 데이터를 인덱싱합니다. 회사는 외부 소스에서 S3 버킷으로 데이터를 업로드하기 위해 일일 배치 프로세스의 추출, 변환 및 로드(ETL) 파이프라인을 사용합니다. 회사는 S3 데이터에 대한 일일 보고서를 실행합니다. 일부 날에는 모든 일일 데이터가 S3 버킷에 업로드되기 전에 보고서를 실행합니다. 데이터 엔지니어는 불완전한 데이터를 식별하는 메시지를 기존 Amazon Simple Notification Service(Amazon SNS) 토픽으로 보낼 수 있어야 합니다. 이 요구 사항을 최소 운영 오버헤드로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "일일 보고서에서 사용하는 소스 데이터 세트에 대한 데이터 품질 검사를 만듭니다. 새로운 AWS 관리 Apache Airflow 클러스터를 만듭니다. Airflow 작업을 사용하여 데이터 품질 검사를 실행하여 열 데이터 유형과 null 값의 존재 여부를 확인합니다. Airflow Directed Acyclic Graphs(DAG)를 구성하여 불완전한 데이터 세트에 대해 데이터 엔지니어에게 알리는 이메일 알림을 SNS 토픽으로 보냅니다.",
      "B": "일일 보고서에서 사용하는 소스 데이터 세트에 대한 데이터 품질 검사를 만듭니다. 새로운 Amazon EMR 클러스터를 만듭니다. EMR 클러스터에서 Apache Spark SQL을 사용하여 열 데이터 유형과 null 값의 존재 여부를 확인하는 데이터 품질 쿼리를 실행하는 Apache Spark 작업을 만듭니다. AWS Step Functions 워크플로우를 사용하여 ETL 파이프라인을 오케스트레이션합니다. 불완전한 데이터 세트에 대해 데이터 엔지니어에게 알리는 이메일 알림을 SNS 토픽으로 보내도록 워크플로우를 구성합니다.",
      "C": "소스 데이터 세트에 대한 데이터 품질 검사를 만듭니다. AWS Glue 워크플로우를 사용하여 데이터 품질 작업을 만들어 데이터 세트의 완전성과 일관성을 확인합니다. Amazon EventBridge에서 데이터 세트가 불완전한 경우 이벤트를 생성하도록 데이터 품질 작업을 구성합니다. EventBridge를 구성하여 불완전한 데이터 세트에 대해 데이터 엔지니어에게 알리는 이벤트를 Amazon SNS 토픽으로 보냅니다.",
      "D": "열 데이터 유형과 null 값의 존재 여부를 확인하는 데이터 품질 쿼리를 실행하도록 AWS Lambda 함수를 만듭니다. AWS Step Functions 워크플로우를 사용하여 Lambda 함수를 실행하는 ETL 파이프라인을 오케스트레이션합니다. 불완전한 데이터 세트에 대해 데이터 엔지니어에게 알리는 이메일 알림을 SNS 토픽으로 보내도록 Step Functions 워크플로우를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】데이터 품질 메트릭, SLA 준수, 모니터링 대시보드, 자동 알림, 거버넌스, 임계값 위반, 실시간 추적, 알림 메커니즘\n\n【정답 포인트】데이터 품질 메트릭을 정의하고 CloudWatch 대시보드로 시각화하며, 임계값 위반 시 SNS를 통해 자동 알림하는 방식이 효과적입니다. 데이터 레이크의 SLA 준수 여부를 실시간으로 모니터링할 수 있습니다. AWS Glue Data Quality와 Lambda, CloudWatch를 조합하면 자동화된 품질 관리 시스템을 구축할 수 있으며, 전사적 데이터 거버넌스를 강화할 수 있습니다. 이는 신뢰성 높은 데이터 운영을 가능하게 합니다.\n\n【오답 체크】수동 점검은 확장성이 낮고 일관성이 없으며 실시간 대응이 불가능합니다.\n\n【시험 포인트】데이터 거버넌스에서 자동화된 모니터링과 알림은 필수입니다.",
    "en_q": "A company uses AWS Glue Data Catalog to index data that is uploaded to an Amazon S3 bucket every day. The company uses a daily batch processes in an extract, transform, and load (ETL) pipeline to upload data from external sources into the S3 bucket. The company runs a daily report on the S3 data. Some days, the company runs the report before all the daily data has been uploaded to the S3 bucket. A data engineer must be able to send a message that identifies any incomplete data to an existing Amazon Simple Notification Service (Amazon SNS) topic. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create data quality checks for the source datasets that the daily reports use. Create a new AWS managed Apache Airflow cluster. Run the data quality checks by using Airflow tasks that run data quality queries on the columns data type and the presence of null values. Configure Airflow Directed Acyclic Graphs (DAGs) to send an email notification that informs the data engineer about the incomplete datasets to the SNS topic.",
      "B": "Create data quality checks on the source datasets that the daily reports use. Create a new Amazon EMR cluster. Use Apache Spark SQL to create Apache Spark jobs in the EMR cluster that run data quality queries on the columns data type and the presence of null values. Orchestrate the ETL pipeline by using an AWS Step Functions workflow. Configure the workflow to send an email notification that informs the data engineer about the incomplete datasets to the SNS topic.",
      "C": "Create data quality checks on the source datasets that the daily reports use. Create data quality actions by using AWS Glue workflows to confirm the completeness and consistency of the datasets. Configure the data quality actions to create an event in Amazon EventBridge if a dataset is incomplete. Configure EventBridge to send the event that informs the data engineer about the incomplete datasets to the Amazon SNS topic.",
      "D": "Create AWS Lambda functions that run data quality queries on the columns data type and the presence of null values. Orchestrate the ETL pipeline by using an AWS Step Functions workflow that runs the Lambda functions. Configure the Step Functions workflow to send an email notification that informs the data engineer about the incomplete datasets to the SNS topic."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151935-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 168,
    "question": "회사는 개인 식별 정보(PII)를 포함하는 고객 데이터를 Amazon Redshift 클러스터에 저장합니다. 회사의 마케팅, 청구 및 분석 팀은 고객 데이터에 액세스할 수 있어야 합니다. 마케팅 팀은 난독처리된 청구 정보에 액세스할 수 있어야 하지만 고객 연락처 정보에는 완전히 액세스할 수 있어야 합니다. 청구 팀은 팀이 처리하는 각 청구에 대한 고객 정보에 액세스할 수 있어야 합니다. 분석 팀은 난독처리된 PII 데이터에만 액세스할 수 있어야 합니다. 이 솔루션은 최소 관리 오버헤드로 이러한 데이터 액세스 요구 사항을 적용할 것입니까?",
    "options": {
      "A": "각 팀에 대해 별도의 Redshift 클러스터를 만듭니다. 각 팀에 필요한 데이터만 로드합니다. 클러스터에 대한 액세스를 팀 기반으로 제한합니다.",
      "B": "각 데이터 요구 사항에 필요한 필드를 포함하는 뷰를 만듭니다. 각 팀이 필요로 하는 뷰에만 팀 액세스 권한을 부여합니다.",
      "C": "각 팀에 대해 별도의 Amazon Redshift 데이터베이스 역할을 만듭니다. 각 팀에 대해 별도로 적용할 마스킹 정책을 정의합니다. 각 팀 역할에 적절한 마스킹 정책을 연결합니다.",
      "D": "고객 데이터를 Amazon S3 버킷으로 이동합니다. AWS Lake Formation을 사용하여 데이터 레이크를 만듭니다. 세분화된 보안 기능을 사용하여 각 팀에 데이터에 대한 적절한 권한을 부여합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】데이터 마스킹, PII 보호, 열 수준 암호화, 액세스 제어, GDPR 규정 준수, 감사 로깅, 다층 보안, 개인정보보호\n\n【정답 포인트】민감한 개인 정보는 여러 계층으로 보호해야 합니다. 열 수준 암호화로 저장 데이터를 보호하고, Lake Formation 또는 Redshift 권한 기반 제어로 접근을 제한합니다. 필요한 경우 데이터 마스킹이나 난독화를 적용합니다. AWS CloudTrail로 모든 데이터 접근을 감사 로깅하여 추적합니다. 이를 통해 GDPR, CCPA 등 규정을 준수할 수 있습니다.\n\n【오답 체크】암호화 없이 권한 제어만으로는 불충분합니다. 감사 로깅 없으면 접근 기록을 추적할 수 없습니다.\n\n【시험 포인트】규정 준수가 요구되는 데이터는 다층 보안 전략이 필수입니다.",
    "en_q": "A company stores customer data that contains personally identifiable information (PII) in an Amazon Redshift cluster. The company's marketing, claims, and analytics teams need to be able to access the customer data. The marketing team should have access to obfuscated claim information but should have full access to customer contact information. The claims team should have access to customer information for each claim that the team processes. The analytics team should have access only to obfuscated PII data. Which solution will enforce these data access requirements with the LEAST administrative overhead?",
    "en_opts": {
      "A": "Create a separate Redshift cluster for each team. Load only the required data for each team. Restrict access to clusters based on the teams.",
      "B": "Create views that include required fields for each of the data requirements. Grant the teams access only to the view that each team requires.",
      "C": "Create a separate Amazon Redshift database role for each team. Define masking policies that apply for each team separately. Attach appropriate masking policies to each team role.",
      "D": "Move the customer data to an Amazon S3 bucket. Use AWS Lake Formation to create a data lake. Use fine-grained security capabilities to grant each team appropriate permissions to access the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150885-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 169,
    "question": "금융 회사가 모바일 앱에 더 많은 기능을 추가했습니다. 새로운 기능을 위해서는 기존 Amazon Managed Streaming for Apache Kafka(Amazon MSK) 클러스터에 새로운 토픽을 만들어야 했습니다. 회사가 새로운 토픽을 추가한 지 며칠 후 Amazon CloudWatch가 MSK 클러스터의 RootDiskUsed 메트릭에 대한 경보를 발생시켰습니다. 회사는 CloudWatch 경보를 어떻게 해결해야 합니까?",
    "options": {
      "A": "MSK 브로커의 스토리지를 확장합니다. MSK 클러스터 스토리지가 자동으로 확장되도록 구성합니다.",
      "B": "Apache ZooKeeper 노드의 스토리지를 확장합니다.",
      "C": "MSK 브로커 인스턴스를 더 큰 인스턴스 유형으로 업데이트합니다. MSK 클러스터를 다시 시작합니다.",
      "D": "기존 토픽에 대해 Target Volume-in-GiB 매개변수를 지정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】데이터 카탈로그, 메타데이터 관리, 데이터 거버넌스, 검색 및 발견성, 데이터 품질 추적, 자동 크롤링, 태그 관리, 중앙 저장소\n\n【정답 포인트】AWS Glue Catalog는 메타데이터 중앙 저장소로 데이터 자산을 체계적으로 관리합니다. 테이블 스키마, 파티션, 데이터 위치 등 모든 정보를 카탈로그화하여 데이터 엔지니어와 분석가가 쉽게 검색할 수 있습니다. Glue 크롤러로 자동화된 카탈로깅이 가능하며, 태그와 커스텀 메타데이터로 거버넌스를 강화할 수 있습니다. 이는 현대적 데이터 거버넌스의 기초입니다.\n\n【오답 체크】메타데이터 관리 없으면 데이터 검색이 어렵고 거버넌스가 불가능하며 데이터 품질 추적이 안 됩니다.\n\n【시험 포인트】현대 데이터 아키텍처에서 카탈로그는 필수 구성 요소입니다.",
    "en_q": "A financial company recently added more features to its mobile app. The new features required the company to create a new topic in an existing Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster. A few days after the company added the new topic, Amazon CloudWatch raised an alarm on the RootDiskUsed metric for the MSK cluster. How should the company address the CloudWatch alarm?",
    "en_opts": {
      "A": "Expand the storage of the MSK broker. Configure the MSK cluster storage to expand automatically.",
      "B": "Expand the storage of the Apache ZooKeeper nodes.",
      "C": "Update the MSK broker instance to a larger instance type. Restart the MSK cluster.",
      "D": "Specify the Target Volume-in-GiB parameter for the existing topic."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151937-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 170,
    "question": "데이터 엔지니어는 회사의 Amazon S3 버킷 및 Amazon RDS 데이터베이스를 기반으로 엔터프라이즈 데이터 카탈로그를 구축해야 합니다. 데이터 카탈로그는 카탈로그의 데이터에 대한 스토리지 형식 메타데이터를 포함해야 합니다. 이 요구 사항을 최소 노력으로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue 크롤러를 사용하여 S3 버킷 및 RDS 데이터베이스를 스캔하고 데이터 카탈로그를 구축합니다. 데이터 스튜어드를 사용하여 데이터를 검사하고 데이터 형식을 사용하여 데이터 카탈로그를 업데이트합니다.",
      "B": "AWS Glue 크롤러를 사용하여 데이터 카탈로그를 구축합니다. AWS Glue 크롤러 분류자를 사용하여 데이터 형식을 인식하고 카탈로그에 형식을 저장합니다.",
      "C": "Amazon Macie를 사용하여 데이터 카탈로그를 구축하고 민감한 데이터 요소를 식별합니다. Macie에서 데이터 형식 정보를 수집합니다.",
      "D": "데이터 요소를 스캔하고 데이터 형식을 기반으로 데이터 분류를 할당하도록 스크립트를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】Athena 파티션, 스캔 범위 제한, 쿼리 비용 절감, 성능 최적화, 파티션 프로젝션, 데이터 필터링, 비용 절감, WHERE 절 활용\n\n【정답 포인트】Athena는 스캔한 데이터 양에 따라 비용이 결정됩니다. 파티션을 명시적으로 추가하고, 파티션 프로젝션으로 자동 파티션 발견을 활성화합니다. 쿼리 WHERE 절에서 파티션 열을 필터링하면 전체 데이터 대신 필요한 파티션만 스캔합니다. 이를 통해 쿼리 비용을 크게 절감하고 쿼리 성능을 향상시킬 수 있습니다.\n\n【오답 체크】파티션 전략 없으면 매번 전체 데이터를 스캔하여 비용이 많이 들고 성능이 저하됩니다.\n\n【시험 포인트】Athena 성능 최적화의 핵심은 효과적인 파티션 설계입니다.",
    "en_q": "A data engineer needs to build an enterprise data catalog based on the company's Amazon S3 buckets and Amazon RDS databases. The data catalog must include storage format metadata for the data in the catalog. Which solution will meet these requirements with the LEAST effort?",
    "en_opts": {
      "A": "Use an AWS Glue crawler to scan the S3 buckets and RDS databases and build a data catalog. Use data stewards to inspect the data and update the data catalog with the data format.",
      "B": "Use an AWS Glue crawler to build a data catalog. Use AWS Glue crawler classifiers to recognize the format of data and store the format in the catalog.",
      "C": "Use Amazon Macie to build a data catalog and to identify sensitive data elements. Collect the data format information from Macie.",
      "D": "Use scripts to scan data elements and to assign data classifications based on the format of the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151938-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 171,
    "question": "회사는 분기별로 데이터 레이크의 데이터를 분석하여 재고 평가를 수행합니다. 데이터 엔지니어는 AWS Glue DataBrew를 사용하여 데이터 내에서 고객에 대한 개인 식별 정보(PII)를 감지합니다. 회사의 개인정보보호정책은 일부 사용자 정의 정보 범주를 PII로 간주합니다. 그러나 이 범주는 표준 DataBrew 데이터 품질 규칙에 포함되지 않습니다. 데이터 엔지니어는 데이터 레이크 내 여러 데이터 세트에서 사용자 정의 PII 범주를 스캔하도록 현재 프로세스를 수정해야 합니다. 이 요구 사항을 최소 운영 오버헤드로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "사용자 정의 PII 범주에 대한 데이터를 수동으로 검토합니다.",
      "B": "DataBrew에서 사용자 정의 데이터 품질 규칙을 구현합니다. 데이터 세트 전체에 사용자 정의 규칙을 적용합니다.",
      "C": "사용자 정의 PII 범주를 감지하는 사용자 정의 Python 스크립트를 개발합니다. DataBrew에서 스크립트를 호출합니다.",
      "D": "데이터 레이크로의 추출 변환 및 로드(ETL) 작업 중에 필드에서 PII 정보를 추출하도록 정규식 패턴을 구현합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】데이터 통합, 실시간 수집, 이기종 소스, 스케일링, 지연 시간 최소화, 다양한 도구 조합, 수렴 구조, 하이브리드 접근\n\n【정답 포인트】다양한 소스의 데이터를 통합할 때는 AWS Glue(배치), Kinesis(스트림), MSK(메시지 큐) 등을 조합 사용합니다. 실시간 요구사항에는 Kinesis Data Streams, 변경 데이터는 DMS CDC, 로그는 Kinesis Data Firehose를 활용합니다. 모든 수집 파이프라인을 S3 데이터 레이크로 수렴시키고, 이후 Glue와 Athena로 분석합니다. 이는 확장 가능한 통합 아키텍처입니다.\n\n【오답 체크】단일 수집 도구로는 모든 유형의 데이터를 효과적으로 처리할 수 없고 유연성이 부족합니다.\n\n【시험 포인트】통합 데이터 아키텍처에서는 도구 조합이 중요합니다.",
    "en_q": "A company analyzes data in a data lake every quarter to perform inventory assessments. A data engineer uses AWS Glue DataBrew to detect any personally identifiable formation (PII) about customers within the data. The company's privacy policy considers some custom categories of information to be PII. However, the categories are not included in standard DataBrew data quality rules. The data engineer needs to modify the current process to scan for the custom PII categories across multiple datasets within the data lake. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Manually review the data for custom PII categories.",
      "B": "Implement custom data quality rules in DataBrew. Apply the custom rules across datasets.",
      "C": "Develop custom Python scripts to detect the custom PII categories. Call the scripts from DataBrew.",
      "D": "Implement regex patterns to extract PII information from fields during extract transform, and load (ETL) operations into the data lake."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151939-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 172,
    "question": "회사는 매일 파트너로부터 Amazon S3 버킷의 데이터 파일을 받습니다. 회사는 일일 AWS Glue 추출, 변환 및 로드(ETL) 파이프라인을 사용하여 각 데이터 파일을 정리하고 변환합니다. ETL 파이프라인의 출력은 두 번째 S3 버킷의 Daily.csv라는 CSV 파일로 기록됩니다. 경우에 따라 일일 데이터 파일이 비어 있거나 필수 필드 값이 없습니다. 파일에 데이터가 누락되면 회사는 이전 날의 CSV 파일을 사용할 수 있습니다. 데이터 엔지니어는 새로운 일일 파일이 완전하고 유효한 경우에만 이전 날의 데이터 파일을 덮어쓰도록 해야 합니다. 이 요구 사항을 최소 노력으로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Lambda 함수를 호출하여 파일에서 누락된 데이터를 확인하고 필수 필드의 누락된 값을 채웁니다.",
      "B": "AWS Glue ETL 파이프라인을 구성하여 AWS Glue Data Quality 규칙을 사용합니다. 필수 필드의 누락된 값과 빈 파일을 확인하는 데이터 품질 정의 언어(DQDL)에서 규칙을 개발합니다.",
      "C": "AWS Glue Studio를 사용하여 ETL 파이프라인의 코드를 변경하여 필수 필드의 누락된 값을 각 필드의 가장 일반적인 값으로 채웁니다.",
      "D": "Amazon Athena에서 SQL 쿼리를 실행하여 CSV 파일을 읽고 누락된 행을 삭제합니다. 수정된 CSV 파일을 두 번째 S3 버킷으로 복사합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】데이터 품질 프레임워크, 정확성, 완전성, 시의성, 일관성, SLA 모니터링, 자동 복구, 다층적 접근, 신뢰성\n\n【정답 포인트】포괄적인 데이터 품질 프레임워크는 정확성(accuracy), 완전성(completeness), 시의성(timeliness), 일관성(consistency), 유효성(validity) 등 다양한 차원을 다룹니다. AWS Glue Data Quality로 규칙을 정의하고 CloudWatch로 메트릭을 추적하며, SNS와 Lambda로 자동 알림과 복구 조치를 구현합니다. 이를 통해 SLA를 준수하고 데이터 신뢰성을 보장할 수 있습니다.\n\n【오답 체크】부분적인 품질 검증만으로는 전반적인 품질을 보장할 수 없습니다.\n\n【시험 포인트】데이터 품질은 단일 메트릭이 아닌 다층적 프레임워크로 접근해야 합니다.",
    "en_q": "A company receives a data file from a partner each day in an Amazon S3 bucket. The company uses a daily AWS Glue extract, transform, and load (ETL) pipeline to clean and transform each data file. The output of the ETL pipeline is written to a CSV file named Daily.csv in a second S3 bucket. Occasionally, the daily data file is empty or is missing values for required fields. When the file is missing data, the company can use the previous day's CSV file. A data engineer needs to ensure that the previous day's data file is overwritten only if the new daily file is complete and valid. Which solution will meet these requirements with the LEAST effort?",
    "en_opts": {
      "A": "Invoke an AWS Lambda function to check the file for missing data and to fill in missing values in required fields.",
      "B": "Configure the AWS Glue ETL pipeline to use AWS Glue Data Quality rules. Develop rules in Data Quality Definition Language (DQDL) to check for missing values in required fields and empty files.",
      "C": "Use AWS Glue Studio to change the code in the ETL pipeline to fill in any missing values in the required fields with the most common values for each field.",
      "D": "Run a SQL query in Amazon Athena to read the CSV file and drop missing rows. Copy the corrected CSV file to the second S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151940-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 173,
    "question": "마케팅 회사는 Amazon S3를 사용하여 마케팅 데이터를 저장합니다. 회사는 일부 버킷에서 버전 관리를 사용합니다. 회사는 여러 작업을 실행하여 데이터를 버킷에서 읽고 로드합니다. 스토리지 비용을 최적화하기 위해 회사는 S3 버킷에 있는 불완전한 멀티파트 업로드 및 오래된 버전에 대한 정보를 수집하려고 합니다. 어떤 솔루션이 운영 작업을 최소화하면서 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS CLI를 사용하여 정보를 수집합니다.",
      "B": "Amazon S3 Inventory 설정 보고서를 사용하여 정보를 수집합니다.",
      "C": "Amazon S3 Storage Lens 대시보드를 사용하여 정보를 수집합니다.",
      "D": "Amazon S3 사용량 보고서를 사용하여 정보를 수집합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Storage Lens — 광범위한 S3 메트릭과 분석을 제공하는 대시보드\n▸ 멀티파트 업로드 — 큰 파일을 여러 부분으로 나누어 업로드하는 방식\n\n【정답 포인트】\n▸ Storage Lens는 불완전한 멀티파트 업로드, 버전 관리된 객체, 스토리지 비용 최적화에 대한 시각적 대시보드를 제공합니다. 모든 정보를 한 곳에서 자동으로 수집하므로 운영 작업이 최소화됩니다. 특히 비용 최적화 권장사항을 제공하는 고급 메트릭이 포함되어 있어 조직 수준의 시각과 일일 스냅샷을 통해 비용 절감 기회를 식별할 수 있습니다.\n\n【오답 체크】\n(A) AWS CLI는 스크립트 작성과 수동 필터링이 필요하므로 운영 작업이 많습니다.\n(B) S3 Inventory는 객체 메타데이터 목록을 제공하지만 멀티파트 업로드 정보는 제한적이고 CSV로 수동 분석이 필요합니다.\n(D) 사용량 보고서는 전반적인 비용 정보만 제공하며 세부 메트릭을 제공하지 않습니다.\n\n【시험 포인트】\n최소 운영 작업 → 자동화된 시각화 → S3 Storage Lens가 최적의 선택입니다.",
    "en_q": "A marketing company uses Amazon S3 to store marketing data. The company uses versioning in some buckets. The company runs several jobs to read and load data into the buckets. To help cost-optimize its storage, the company wants to gather information about incomplete multipart uploads and outdated versions that are present in the S3 buckets. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Use AWS CLI to gather the information.",
      "B": "Use Amazon S3 Inventory configurations reports to gather the information.",
      "C": "Use the Amazon S3 Storage Lens dashboard to gather the information.",
      "D": "Use AWS usage reports for Amazon S3 to gather the information."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150343-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 174,
    "question": "게임 회사는 Amazon Kinesis Data Streams를 사용하여 클릭스트림 데이터를 수집합니다. 회사는 Amazon Data Firehose 전달 스트림을 사용하여 데이터를 JSON 형식으로 Amazon S3에 저장합니다. 회사의 데이터 과학자들은 Amazon Athena를 사용하여 최신 데이터를 쿼리하여 비즈니스 인사이트를 얻습니다. 회사는 Athena 비용을 줄이고 싶지만 데이터 파이프라인을 다시 만들고 싶지 않습니다. 어떤 솔루션이 최소한의 관리 작업으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "Firehose 출력 형식을 Apache Parquet로 변경합니다. 사용자 정의 S3 객체 YYYYMMDD 접두사 표현식을 제공하고 큰 버퍼 크기를 지정합니다. 기존 데이터의 경우 AWS Glue ETL 작업을 생성합니다. ETL 작업을 구성하여 작은 JSON 파일을 결합하고 JSON 파일을 큰 Parquet 파일로 변환하고 YYYYMMDD 접두사를 추가합니다. ALTER TABLE ADD PARTITION 문을 사용하여 기존 Athena 테이블의 파티션을 반영합니다.",
      "B": "JSON 파일을 결합하고 JSON 파일을 Apache Parquet 파일로 변환하는 Apache Spark 작업을 생성합니다. 매일 Amazon EMR 임시 클러스터를 시작하여 Spark 작업을 실행하여 다른 S3 위치에 새 Parquet 파일을 생성합니다. ALTER TABLE SET LOCATION 문을 사용하여 기존 Athena 테이블의 새 S3 위치를 반영합니다.",
      "C": "Kinesis 데이터 스트림을 Firehose의 전달 대상으로 생성합니다. Amazon Managed Service for Apache Flink를 사용하여 Kinesis 데이터 스트림에서 Apache Flink를 실행합니다. Flink를 사용하여 데이터를 집계하고 사용자 정의 S3 객체 YYYYMMDD 접두사를 사용하여 Apache Parquet 형식으로 Amazon S3에 저장합니다. ALTER TABLE ADD PARTITION 문을 사용하여 기존 Athena 테이블의 파티션을 반영합니다.",
      "D": "AWS Lambda 함수를 Firehose와 통합하여 원본 레코드를 Apache Parquet로 변환하고 Amazon S3에 작성합니다. 병렬로 AWS Glue ETL 작업을 실행하여 JSON 파일을 결합하고 JSON 파일을 큰 Parquet 파일로 변환합니다. 사용자 정의 S3 객체 YYYYMMDD 접두사를 생성합니다. ALTER TABLE ADD PARTITION 문을 사용하여 기존 Athena 테이블의 파티션을 반영합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Parquet 형식 — 열 기반 압축 포맷으로 Athena 쿼리 성능 및 비용 최적화\n▸ Firehose 변환 — 스트리밍 데이터를 실시간으로 포맷 변환\n\n【정답 포인트】\n▸ 옵션 A는 기존 파이프라인을 최소한으로 수정하면서 가장 효율적인 솔루션입니다. Firehose의 출력 형식을 직접 Parquet로 변경하여 새로운 데이터부터는 압축된 형식으로 저장됩니다. AWS Glue ETL로 기존 JSON 데이터를 일회성 변환하고, YYYYMMDD 파티션을 추가하면 Athena는 필요한 파티션만 스캔하여 쿼리 비용을 크게 절감합니다. 관리 작업은 한 번의 설정으로 끝납니다.\n\n【오답 체크】\n(B) 매일 EMR 클러스터를 시작하는 것은 운영 비용이 높고 복잡합니다.\n(C) 추가 Kinesis 스트림과 Flink는 불필요한 복잡성을 더합니다.\n(D) Lambda와 Glue를 동시에 실행하는 것은 중복되고 비용이 높습니다.\n\n【시험 포인트】\nFirehose 출력 형식 변경 + 기존 데이터 일회성 변환 = 최소 관리 작업으로 최적화된 비용 구조",
    "en_q": "A gaming company uses Amazon Kinesis Data Streams to collect clickstream data. The company uses Amazon Data Firehose delivery streams to store the data in JSON format in Amazon S3. Data scientists at the company use Amazon Athena to query the most recent data to obtain business insights. The company wants to reduce Athena costs but does not want to recreate the data pipeline. Which solution will meet these requirements with the LEAST management effort?",
    "en_opts": {
      "A": "Change the Firehose output format to Apache Parquet. Provide a custom S3 object YYYYMMDD prefix expression and specify a large buffer size. For the existing data, create an AWS Glue extract, transform, and load (ETL) job. Configure the ETL job to combine small JSON files, convert the JSON files to large Parquet files, and add the YYYYMMDD prefix. Use the ALTER TABLE ADD PARTITION statement to reflect the partition on the existing Athena table.",
      "B": "Create an Apache Spark job that combines JSON files and converts the JSON files to Apache Parquet files. Launch an Amazon EMR ephemeral cluster every day to run the Spark job to create new Parquet files in a different S3 location. Use the ALTER TABLE SET LOCATION statement to reflect the new S3 location on the existing Athena table.",
      "C": "Create a Kinesis data stream as a delivery destination for Firehose. Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) to run Apache Flink on the Kinesis data stream. Use Flink to aggregate the data and save the data to Amazon S3 in Apache Parquet format with a custom S3 object YYYYMMDD prefix. Use the ALTER TABLE ADD PARTITION statement to reflect the partition on the existing Athena table.",
      "D": "Integrate an AWS Lambda function with Firehose to convert source records to Apache Parquet and write them to Amazon S3. In parallel, run an AWS Glue extract, transform, and load (ETL) job to combine the JSON files and convert the JSON files to large Parquet files. Create a custom S3 object YYYYMMDD prefix. Use the ALTER TABLE ADD PARTITION statement to reflect the partition on the existing Athena table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150779-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 175,
    "question": "회사는 기존 Amazon DynamoDB 테이블의 비용을 관리하는 솔루션이 필요합니다. 회사는 또한 테이블의 크기를 제어해야 합니다. 솔루션은 진행 중인 읽기 또는 쓰기 작업을 방해해서는 안 됩니다. 회사는 1개월 후에 테이블에서 데이터를 자동으로 삭제하는 솔루션을 사용하려고 합니다. 어떤 솔루션이 지속적인 유지 관리를 최소화하면서 이 요구사항을 충족할까요?",
    "options": {
      "A": "DynamoDB TTL 기능을 사용하여 타임스탬프를 기반으로 데이터를 자동으로 만료시킵니다.",
      "B": "데이터가 1개월보다 오래되었는지 확인하기 위해 AWS Lambda 함수를 호출하도록 예약된 Amazon EventBridge 규칙을 구성합니다. 그리고 오래된 데이터를 삭제하도록 Lambda 함수를 구성합니다.",
      "C": "DynamoDB 테이블에서 스트림을 구성하여 AWS Lambda 함수를 호출합니다. 1개월보다 오래된 테이블의 데이터를 삭제하도록 Lambda 함수를 구성합니다.",
      "D": "AWS Lambda 함수를 사용하여 1개월보다 오래된 데이터에 대한 DynamoDB 테이블을 정기적으로 스캔합니다. 그리고 오래된 데이터를 삭제하도록 Lambda 함수를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ DynamoDB TTL(Time To Live) — 특정 시간 후 항목을 자동으로 삭제하는 내장 기능\n▸ 백그라운드 프로세스 — 읽기/쓰기 성능을 방해하지 않음\n\n【정답 포인트】\n▸ DynamoDB TTL은 타임스탬프 속성을 기반으로 항목을 자동으로 만료하고 삭제하는 완전 관리형 기능입니다. 테이블의 읽기/쓰기 용량에 영향을 주지 않으면서 백그라운드에서 실행됩니다. 각 항목에 TTL 속성을 설정하면 지정된 시간 경과 후 자동으로 삭제되어 비용 최적화와 스토리지 관리가 동시에 이루어집니다. 추가 코드나 스케줄링 없이 완전한 자동화가 가능합니다.\n\n【오답 체크】\n(B) EventBridge + Lambda 조합은 정기적 체크를 위해 추가 비용이 발생하고 유지 관리가 필요합니다.\n(C) DynamoDB Streams를 사용한 Lambda는 모든 쓰기 작업마다 트리거되어 불필요한 오버헤드가 발생합니다.\n(D) 정기적 Lambda 스캔은 비용이 많이 들고 스캔으로 인한 I/O 오버헤드가 큽니다.\n\n【시험 포인트】\n자동화 + 백그라운드 처리 + 최소 유지 관리 → TTL이 정답입니다.",
    "en_q": "A company needs a solution to manage costs for an existing Amazon DynamoDB table. The company also needs to control the size of the table. The solution must not disrupt any ongoing read or write operations. The company wants to use a solution that automatically deletes data from the table after 1 month. Which solution will meet these requirements with the LEAST ongoing maintenance?",
    "en_opts": {
      "A": "Use the DynamoDB TTL feature to automatically expire data based on timestamps.",
      "B": "Configure a scheduled Amazon EventBridge rule to invoke an AWS Lambda function to check for data that is older than 1 month. Configure the Lambda function to delete old data.",
      "C": "Configure a stream on the DynamoDB table to invoke an AWS Lambda function. Configure the Lambda function to delete data in the table that is older than 1 month.",
      "D": "Use an AWS Lambda function to periodically scan the DynamoDB table for data that is older than 1 month. Configure the Lambda function to delete old data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151941-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 176,
    "question": "회사는 Amazon S3를 사용하여 데이터를 저장하고 Amazon QuickSight를 사용하여 시각화를 생성합니다. 회사는 Hub-Account라는 AWS 계정에 S3 버킷을 가지고 있습니다. S3 버킷은 AWS Key Management Service(AWS KMS) 키로 암호화됩니다. 회사의 QuickSight 인스턴스는 BI-Account라는 별도의 계정에 있습니다. 회사는 QuickSight 서비스 역할에 액세스 권한을 부여하도록 S3 버킷 정책을 업데이트합니다. 회사는 QuickSight가 S3 버킷과 상호 작용할 수 있도록 교차 계정 액세스를 활성화하려고 합니다. 어떤 단계의 조합이 이 요구사항을 충족할까요? (2개 선택)",
    "options": {
      "A": "기존 AWS KMS 키를 사용하여 QuickSight에서 S3 버킷으로의 연결을 암호화합니다.",
      "B": "S3 버킷을 QuickSight 서비스 역할이 액세스할 수 있는 리소스로 추가합니다.",
      "C": "AWS Resource Access Manager(AWS RAM)를 사용하여 S3 버킷을 BI-Account 계정과 공유합니다.",
      "D": "S3 버킷을 암호화하는 KMS 키에 액세스할 수 있도록 QuickSight 서비스 역할에 IAM 정책을 추가합니다.",
      "E": "QuickSight 서비스 역할이 액세스할 수 있는 리소스로 KMS 키를 추가합니다."
    },
    "answer": "E",
    "explanation": "【핵심 용어】\n▸ 교차 계정 액세스 — 다른 AWS 계정의 리소스에 접근\n▸ KMS 키 정책 — KMS 리소스에 대한 접근 제어\n\n【정답 포인트】\n▸ 교차 계정 QuickSight 접근의 핵심은 두 가지입니다: S3 버킷 정책(이미 완료)과 KMS 키 정책입니다. S3는 버킷 정책으로 접근 제어되지만, SSE-KMS 암호화된 객체를 읽으려면 KMS 키에도 접근 권한이 필요합니다. 옵션 E는 KMS 키 정책에 QuickSight 서비스 역할을 리소스로 추가하여 암호화된 데이터 복호화를 허용합니다. 이것이 교차 계정 액세스 완성의 필수 요소입니다.\n\n【오답 체크】\n(A) 연결 암호화는 이미 KMS로 처리되며 추가 구성이 불필요합니다.\n(B) S3 버킷이 이미 정책으로 추가되어 있습니다.\n(C) RAM은 S3 버킷 공유에 적합하지 않습니다.\n(D) IAM 정책이 아닌 KMS 키 정책이 필요합니다.\n\n【시험 포인트】\n교차 계정 암호화 데이터 접근 = S3 정책 + KMS 키 정책의 두 가지 모두 필요",
    "en_q": "A company uses Amazon S3 to store data and Amazon QuickSight to create visualizations. The company has an S3 bucket in an AWS account named Hub-Account. The S3 bucket is encrypted by an AWS Key Management Service (AWS KMS) key. The company's QuickSight instance is in a separate account named BI-Account. The company updates the S3 bucket policy to grant access to the QuickSight service role. The company wants to enable cross-account access to allow QuickSight to interact with the S3 bucket. Which combination of steps will meet this requirement? (Choose two.)",
    "en_opts": {
      "A": "Use the existing AWS KMS key to encrypt connections from QuickSight to the S3 bucket.",
      "B": "Add the S3 bucket as a resource that the QuickSight service role can access.",
      "C": "Use AWS Resource Access Manager (AWS RAM) to share the S3 bucket with the BI-Account account.",
      "D": "Add an IAM policy to the QuickSight service role to give QuickSight access to the KMS key that encrypts the S3 bucket.",
      "E": "Add the KMS key as a resource that the QuickSight service role can access."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150344-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 177,
    "question": "자동차 판매 회사는 지역에서 판매 중인 자동차에 대한 데이터를 유지 관리합니다. 회사는 공급업체로부터 압축 파일로 매일 새로운 자동차 목록 데이터를 받고 이를 Amazon S3에 업로드합니다. 압축 파일의 크기는 최대 5KB입니다. 회사는 데이터가 Amazon S3에 업로드되자마자 가장 최신의 목록을 보고 싶어합니다. 데이터 엔지니어는 대시보드에 데이터를 공급하기 위해 목록의 데이터 처리 워크플로우를 자동화하고 오케스트레이션해야 합니다. 데이터 엔지니어는 또한 일회성 쿼리 및 분석 보고 기능을 제공해야 합니다. 쿼리 솔루션은 확장 가능해야 합니다. 어떤 솔루션이 가장 비용 효율적으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon EMR 클러스터를 사용하여 들어오는 데이터를 처리합니다. AWS Step Functions를 사용하여 워크플로우를 오케스트레이션합니다. Apache Hive를 일회성 쿼리 및 분석 보고에 사용합니다. Amazon OpenSearch Service를 사용하여 계산 최적화된 인스턴스로 데이터를 대량 수집합니다. OpenSearch Service의 OpenSearch Dashboards를 대시보드에 사용합니다.",
      "B": "프로비저닝된 Amazon EMR 클러스터를 사용하여 들어오는 데이터를 처리합니다. AWS Step Functions를 사용하여 워크플로우를 오케스트레이션합니다. 일회성 쿼리 및 분석 보고에 Amazon Athena를 사용합니다. 대시보드에 Amazon QuickSight를 사용합니다.",
      "C": "AWS Glue를 사용하여 들어오는 데이터를 처리합니다. AWS Step Functions를 사용하여 워크플로우를 오케스트레이션합니다. 일회성 쿼리 및 분석 보고에 Amazon Redshift Spectrum을 사용합니다. Amazon OpenSearch Service에서 OpenSearch Dashboards를 대시보드에 사용합니다.",
      "D": "AWS Glue를 사용하여 들어오는 데이터를 처리합니다. AWS Lambda 및 S3 Event Notifications를 사용하여 워크플로우를 오케스트레이션합니다. 일회성 쿼리 및 분석 보고에 Amazon Athena를 사용합니다. 대시보드에 Amazon QuickSight를 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 Event Notifications — S3 업로드 감지 자동 트리거\n▸ AWS Glue — 서버리스 완전 관리형 ETL 서비스\n▸ Amazon Athena — S3 데이터 직접 쿼리 (비용 기반 청구)\n▸ Amazon QuickSight — 완전 관리형 BI 대시보드 솔루션\n\n【정답 포인트】\n옵션 D (AWS Glue + Lambda + S3 Event Notifications + Athena + QuickSight):\n• 소규모 파일(5KB) 일일 증분 처리에 최적화\n• S3 Event Notifications가 업로드 감지 → Lambda 자동 트리거\n• AWS Glue: 서버리스 ETL으로 필요한 만큼만 비용 청구\n• Amazon Athena: 프로비저닝 없이 S3 데이터 직접 쿼리\n• QuickSight: 완전 관리형 BI로 대시보드 제공\n• 전체 스택이 자동 스케일링되므로 최저 운영 비용 구현\n\n【오답 체크】\n(A) EMR은 소규모 파일에 클러스터 오버헤드로 비용 증가. OpenSearch는 추가 비용 발생.\n(B) 프로비저닝된 EMR은 일회 쿼리에 낭비적. 24/7 비용 소모.\n(C) Redshift Spectrum은 추가 복잡성 증가. Step Functions 대비 Lambda가 간단.\n(D) ✓ 서버리스 스택 최소 비용 + 자동 확장성.\n\n【시험 포인트】\n증분 소규모 데이터 + 자동 트리거 + 일회성 쿼리 = 서버리스 조합 (Lambda + Glue + Athena + QuickSight)",
    "en_q": "A car sales company maintains data about cars that are listed for sale in an area. The company receives data about new car listings from vendors who upload the data daily as compressed files into Amazon S3. The compressed files are up to 5 KB in size. The company wants to see the most up-to-date listings as soon as the data is uploaded to Amazon S3. A data engineer must automate and orchestrate the data processing workflow of the listings to feed a dashboard. The data engineer must also provide the ability to perform one-time queries and analytical reporting. The query solution must be scalable. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Use an Amazon EMR cluster to process incoming data. Use AWS Step Functions to orchestrate workflows. Use Apache Hive for one-time queries and analytical reporting. Use Amazon OpenSearch Service to bulk ingest the data into compute optimized instances. Use OpenSearch Dashboards in OpenSearch Service for the dashboard.",
      "B": "Use a provisioned Amazon EMR cluster to process incoming data. Use AWS Step Functions to orchestrate workflows. Use Amazon Athena for one-time queries and analytical reporting. Use Amazon QuickSight for the dashboard.",
      "C": "Use AWS Glue to process incoming data. Use AWS Step Functions to orchestrate workflows. Use Amazon Redshift Spectrum for one-time queries and analytical reporting. Use OpenSearch Dashboards in Amazon OpenSearch Service for the dashboard.",
      "D": "Use AWS Glue to process incoming data. Use AWS Lambda and S3 Event Notifications to orchestrate workflows. Use Amazon Athena for one-time queries and analytical reporting. Use Amazon QuickSight for the dashboard."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151942-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 178,
    "question": "회사는 여러 AWS 리전에 AWS 리소스가 있습니다. 회사는 회사가 운영하는 각 리전에 Amazon EFS 파일 시스템을 가지고 있습니다. 회사의 데이터 과학 팀은 단 하나의 리전 내에서만 운영됩니다. 데이터 과학 팀이 작업하는 데이터는 팀의 리전 내에 있어야 합니다. 데이터 엔지니어는 각 회사 지역 EFS 파일 시스템에 있는 파일을 처리하여 단일 데이터 세트를 생성해야 합니다. 데이터 엔지니어는 AWS Step Functions 상태 머신을 사용하여 AWS Lambda 함수를 오케스트레이션하려고 합니다. 어떤 솔루션이 최소한의 작업으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "각 리전의 EFS 파일 시스템을 호스팅하는 VPC를 데이터 과학 팀의 리전에 있는 VPC와 피어링합니다. EFS 파일 잠금을 활성화합니다. 데이터 과학 팀의 리전에서 각 리전별 파일 시스템을 마운트하도록 Lambda 함수를 구성합니다. Lambda 함수를 사용하여 데이터를 처리합니다.",
      "B": "각 지역 EFS 파일 시스템을 데이터 과학 팀의 리전으로 복제하도록 구성합니다. 데이터 과학 팀의 리전에서 복제 파일 시스템을 마운트하도록 Lambda 함수를 구성합니다. Lambda 함수를 사용하여 데이터를 처리합니다.",
      "C": "Lambda 함수를 각 리전에 배포합니다. 지역별 EFS 파일 시스템을 Lambda 함수에 마운트합니다. Lambda 함수를 사용하여 데이터를 처리합니다. 출력을 데이터 과학 팀의 리전에 있는 Amazon S3 버킷에 저장합니다.",
      "D": "각 지역 EFS 파일 시스템에서 데이터 과학 팀의 리전에 있는 파일 시스템으로 파일을 전송하기 위해 AWS DataSync를 사용합니다. 데이터 과학 팀의 리전에서 같은 리전에 있는 파일 시스템을 마운트하도록 Lambda 함수를 구성합니다. Lambda 함수를 사용하여 데이터를 처리합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS DataSync — 대규모 데이터 전송 자동화 서비스\n▸ 크로스 리전 복사 — EFS 간 자동화된 데이터 동기화\n▸ 데이터 지역성 요구사항 — 특정 리전 내 데이터 위치 규제\n\n【정답 포인트】\n옵션 D (AWS DataSync + EFS 로컬 마운팅):\n• 핵심 제약: \"데이터가 팀의 리전 내에 남아야 함\"\n• DataSync는 다른 리전의 EFS를 팀 리전으로 자동 전송\n• 네트워크 대역폭 최적화, 자동 체크섬 검증\n• 전송 후 Lambda는 로컬 EFS 마운트로 지연 시간 제거\n• 병렬 전송으로 빠른 데이터 이동\n• 최소한의 수동 구성 (네트워크 설정 불필요)\n\n【오답 체크】\n(A) VPC 피어링: 리전 간 피어링 복잡성 증가. 지속적 네트워크 구성 필요.\n(B) EFS는 리전 간 네이티브 복제 미지원. 불가능한 방식.\n(C) Lambda 다중 배포: 요구사항 미충족. 중앙 데이터 통합 불가.\n(D) ✓ 데이터 지역성 + 최소 수동 작업 완벽 만족.\n\n【시험 포인트】\n크로스 리전 데이터 통합 + 지역성 제약 + 최소 운영 = AWS DataSync",
    "en_q": "A company has AWS resources in multiple AWS Regions. The company has an Amazon EFS file system in each Region where the company operates. The company's data science team operates within only a single Region. The data that the data science team works with must remain within the team's Region. A data engineer needs to create a single dataset by processing files that are in each of the company's Regional EFS file systems. The data engineer wants to use an AWS Step Functions state machine to orchestrate AWS Lambda functions to process the data. Which solution will meet these requirements with the LEAST effort?",
    "en_opts": {
      "A": "Peer the VPCs that host the EFS file systems in each Region with the VPC that is in the data science team's Region. Enable EFS file locking. Configure the Lambda functions in the data science team's Region to mount each of the Region specific file systems. Use the Lambda functions to process the data.",
      "B": "Configure each of the Regional EFS file systems to replicate data to the data science team's Region. In the data science team's Region, configure the Lambda functions to mount the replica file systems. Use the Lambda functions to process the data.",
      "C": "Deploy the Lambda functions to each Region. Mount the Regional EFS file systems to the Lambda functions. Use the Lambda functions to process the data. Store the output in an Amazon S3 bucket in the data science team's Region.",
      "D": "Use AWS DataSync to transfer files from each of the Regional EFS files systems to the file system that is in the data science team's Region. Configure the Lambda functions in the data science team's Region to mount the file system that is in the same Region. Use the Lambda functions to process the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152459-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 179,
    "question": "회사는 Amazon EC2 인스턴스에서 애플리케이션을 호스트합니다. 회사는 고객이 관리하는 AWS 인프라와 통신하기 위해 데이터 전송을 암호화하는 SSL/TLS 연결을 사용해야 합니다. 데이터 엔지니어는 디지털 인증서의 생성, 배포 및 회전을 간소화하는 솔루션을 구현해야 합니다. 솔루션은 SSL/TLS 인증서를 자동으로 갱신하고 배포해야 합니다. 어떤 솔루션이 최소한의 운영 오버헤드로 이 요구사항을 충족할까요?",
    "options": {
      "A": "EC2 인스턴스에서 자체 관리 인증서를 저장합니다.",
      "B": "AWS Certificate Manager(ACM)를 사용합니다.",
      "C": "AWS Secrets Manager에서 사용자 정의 자동화 스크립트를 구현합니다.",
      "D": "Amazon Elastic Container Service(Amazon ECS) Service Connect를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Certificate Manager (ACM) — SSL/TLS 인증서 자동 관리 서비스\n▸ 자동 갱신 — 만료 전 자동 인증서 갱신\n▸ 자동 배포 — AWS 서비스 통합으로 배포 자동화\n\n【정답 포인트】\n옵션 B (AWS Certificate Manager):\n• ACM은 SSL/TLS 인증서 전체 라이프사이클 자동화\n• 인증서 프로비저닝 자동화\n• 만료 전 자동 갱신 (운영자 개입 불필요)\n• AWS 서비스(ELB, CloudFront 등)와 자동 통합\n• 인증서 회전 과정 완전 자동화\n• 운영 오버헤드 최소화 (0에 가까움)\n• 무료 서비스로 비용도 절감\n\n【오답 체크】\n(A) 자체 관리: 수동 갱신, 배포, 만료 관리 필요. 높은 운영 비용.\n(C) Secrets Manager: 저장소만 제공. 자동 갱신 미지원.\n(D) ECS Service Connect: 인증서 관리와 무관한 서비스.\n\n【시험 포인트】\n자동 갱신 + 자동 배포 + 최소 운영 오버헤드 = ACM이 정답",
    "en_q": "A company hosts its applications on Amazon EC2 instances. The company must use SSL/TLS connections that encrypt data in transit to communicate securely with AWS infrastructure that is managed by a customer. A data engineer needs to implement a solution to simplify the generation, distribution, and rotation of digital certificates. The solution must automatically renew and deploy SSL/TLS certificates. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Store self-managed certificates on the EC2 instances.",
      "B": "Use AWS Certificate Manager (ACM).",
      "C": "Implement custom automation scripts in AWS Secrets Manager.",
      "D": "Use Amazon Elastic Container Service (Amazon ECS) Service Connect."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151944-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 180,
    "question": "회사는 고객 데이터를 Amazon S3 버킷에 저장합니다. 회사는 AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화를 사용하여 버킷을 암호화합니다. 데이터 세트에는 사회 보장 번호 및 계정 세부 정보와 같은 개인 식별 정보(PII)가 포함됩니다. PII로 태그된 데이터는 회사가 분석을 위해 고객 데이터를 사용하기 전에 마스킹되어야 합니다. 일부 사용자는 전처리 단계 동안 PII 데이터에 안전하게 액세스해야 합니다. 회사는 전체 엔지니어링 파이프라인 전반에 걸쳐 PII 데이터를 마스킹하고 보호하기 위한 낮은 유지 관리 솔루션이 필요합니다. 어떤 솔루션의 조합이 이 요구사항을 충족할까요? (2개 선택)",
    "options": {
      "A": "AWS Glue DataBrew를 사용하여 분석 전에 PII 데이터를 마스킹하는 ETL 작업을 수행합니다.",
      "B": "Amazon GuardDuty를 사용하여 엔지니어링 파이프라인에서 사용되는 PII 데이터의 액세스 패턴을 모니터링합니다.",
      "C": "S3 버킷에 대한 Amazon Macie 검색 작업을 구성합니다.",
      "D": "AWS Identity and Access Management(IAM)를 사용하여 권한을 관리하고 PII 데이터에 대한 액세스를 제어합니다.",
      "E": "PII 데이터를 마스킹하고 액세스를 제어하기 위해 애플리케이션에서 사용자 정의 스크립트를 작성합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ AWS Glue DataBrew — PII 자동 감지 및 마스킹 도구\n▸ IAM (Identity and Access Management) — 리소스 기반 접근 제어\n▸ PII (Personally Identifiable Information) — 개인 식별 정보\n\n【정답 포인트】\n옵션 A + D (DataBrew + IAM):\n• DataBrew \n(A): PII 자동 감지 및 마스킹 기능 제공\n  - 사회보장번호, 계정 번호 등 자동 인식\n  - 기본 제공 레시피로 마스킹 규칙 적용\n  - 낮은 유지 관리로 보호 자동화\n• IAM \n(D): 접근 제어로 권한 관리\n  - 전처리 단계 사용자만 원본 데이터 접근 허용\n  - 분석 팀은 마스킹된 데이터만 접근\n  - 정책 기반 세분화된 통제\n\n【오답 체크】\n(B) GuardDuty: 접근 패턴 모니터링만 가능. 마스킹 기능 없음.\n(C) Macie: PII 발견만 수행. 마스킹/보호 기능 부재.\n(E) 사용자 정의 스크립트: 높은 유지 관리 비용, 버그 위험.\n\n【시험 포인트】\nPII 마스킹 (자동화) + 접근 제어 (정책) = DataBrew + IAM 조합",
    "en_q": "A company saves customer data to an Amazon S3 bucket. The company uses server-side encryption with AWS KMS keys (SSE-KMS) to encrypt the bucket. The dataset includes personally identifiable information (PII) such as social security numbers and account details. Data that is tagged as PII must be masked before the company uses customer data for analysis. Some users must have secure access to the PII data during the pre-processing phase. The company needs a low-maintenance solution to mask and secure the PII data throughout the entire engineering pipeline. Which combination of solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Use AWS Glue DataBrew to perform extract, transform, and load (ETL) tasks that mask the PII data before analysis.",
      "B": "Use Amazon GuardDuty to monitor access patterns for the PII data that is used in the engineering pipeline.",
      "C": "Configure an Amazon Macie discovery job for the S3 bucket.",
      "D": "Use AWS Identity and Access Management (IAM) to manage permissions and to control access to the PII data.",
      "E": "Write custom scripts in an application to mask the PII data and to control access."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151945-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 181,
    "question": "데이터 엔지니어가 Amazon EMR 클러스터를 시작하고 있습니다. 데이터 엔지니어가 새 클러스터에 로드해야 하는 데이터는 현재 Amazon S3 버킷에 있습니다. 데이터 엔지니어는 데이터가 저장 중과 전송 중 모두에서 암호화되도록 해야 합니다. S3 버킷의 데이터는 AWS Key Management Service(AWS KMS) 키로 암호화됩니다. 데이터 엔지니어는 Privacy Enhanced Mail(PEM) 파일이 있는 Amazon S3 경로를 가지고 있습니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon EMR 보안 구성을 생성합니다. S3 버킷의 저장 중 암호화를 위해 적절한 AWS KMS 키를 지정합니다. 두 번째 보안 구성을 생성합니다. 전송 중 암호화를 위해 PEM 파일의 Amazon S3 경로를 지정합니다. EMR 클러스터를 생성하고 두 보안 구성을 모두 클러스터에 연결합니다.",
      "B": "Amazon EMR 보안 구성을 생성합니다. S3 버킷의 로컬 디스크 암호화를 위해 적절한 AWS KMS 키를 지정합니다. 전송 중 암호화를 위해 PEM 파일의 Amazon S3 경로를 지정합니다. EMR 클러스터 생성 중에 보안 구성을 사용합니다.",
      "C": "Amazon EMR 보안 구성을 생성합니다. S3 버킷의 저장 중 암호화를 위해 적절한 AWS KMS 키를 지정합니다. 전송 중 암호화를 위해 PEM 파일의 Amazon S3 경로를 지정합니다. EMR 클러스터 생성 중에 보안 구성을 사용합니다.",
      "D": "Amazon EMR 보안 구성을 생성합니다. S3 버킷의 저장 중 암호화를 위해 적절한 AWS KMS 키를 지정합니다. 전송 중 암호화를 위해 PEM 파일의 Amazon S3 경로를 지정합니다. EMR 클러스터를 생성하고 보안 구성을 클러스터에 연결합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ EMR 보안 구성 — 암호화/인증 통합 설정\n▸ At-rest 암호화 — 저장 데이터 KMS 암호화\n▸ In-transit 암호화 — 전송 중 TLS (PEM 파일 기반)\n\n【정답 포인트】\n옵션 C (단일 보안 구성에 모든 설정 통합):\n• 단일 EMR 보안 구성에서 모든 암호화 설정 포함\n• At-rest: KMS 키로 S3 데이터 저장 중 암호화\n• In-transit: PEM 파일로 노드 간 TLS 암호화\n• 클러스터 생성 중 한 번에 보안 구성 적용\n• 모든 암호화 요구사항 동시 만족\n• 설정 단순성과 일관성 보장\n\n【오답 체크】\n(A) 두 개의 보안 구성 분리: 불필요한 복잡성 증가. 관리 어려움.\n(B) \"로컬 디스크 암호화\": S3 데이터 암호화 개념 오류.\n(D) C와 유사하나 표현상 오류. 생성 중 적용이 정확함.\n\n【시험 포인트】\nAt-rest + In-transit 동시 암호화 = 단일 보안 구성 통합",
    "en_q": "A data engineer is launching an Amazon EMR cluster. The data that the data engineer needs to load into the new cluster is currently in an Amazon S3 bucket. The data engineer needs to ensure that data is encrypted both at rest and in transit. The data that is in the S3 bucket is encrypted by an AWS Key Management Service (AWS KMS) key. The data engineer has an Amazon S3 path that has a Privacy Enhanced Mail (PEM) file. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an Amazon EMR security configuration. Specify the appropriate AWS KMS key for at-rest encryption for the S3 bucket. Create a second security configuration. Specify the Amazon S3 path of the PEM file for in-transit encryption. Create the EMR cluster, and attach both security configurations to the cluster.",
      "B": "Create an Amazon EMR security configuration. Specify the appropriate AWS KMS key for local disk encryption for the S3 bucket. Specify the Amazon S3 path of the PEM file for in-transit encryption. Use the security configuration during EMR cluster creation.",
      "C": "Create an Amazon EMR security configuration. Specify the appropriate AWS KMS key for at-rest encryption for the S3 bucket. Specify the Amazon S3 path of the PEM file for in-transit encryption. Use the security configuration during EMR cluster creation.",
      "D": "Create an Amazon EMR security configuration. Specify the appropriate AWS KMS key for at-rest encryption for the S3 bucket. Specify the Amazon S3 path of the PEM file for in-transit encryption. Create the EMR cluster, and attach the security configuration to the cluster."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151948-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 182,
    "question": "소매 회사는 Amazon Redshift 클러스터를 사용하여 실시간 인벤토리 관리를 지원합니다. 회사는 Amazon SageMaker의 실시간 엔드포인트에 ML 모델을 배포했습니다. 회사는 실시간 인벤토리 권장사항을 원하고 미래의 인벤토리 필요에 대한 예측을 원합니다. 어떤 솔루션이 이 요구사항을 충족할까요? (2개 선택)",
    "options": {
      "A": "Amazon Redshift ML을 사용하여 인벤토리 권장사항을 생성합니다.",
      "B": "SQL을 사용하여 원격 SageMaker 엔드포인트를 호출하여 예측합니다.",
      "C": "Amazon Redshift ML을 사용하여 오프라인 모델 학습을 위한 정기적인 데이터 내보내기를 예약합니다.",
      "D": "SageMaker Autopilot을 사용하여 Amazon Redshift에서 인벤토리 관리 대시보드를 생성합니다.",
      "E": "Amazon Redshift를 파일 저장소 시스템으로 사용하여 오래된 인벤토리 관리 보고서를 보관합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ Amazon Redshift ML — Redshift 내 네이티브 ML 기능\n▸ SageMaker 원격 엔드포인트 호출 — SQL에서 직접 예측 실행\n▸ 실시간 예측 — 데이터 이동 없이 SQL 기반 추론\n\n【정답 포인트】\n옵션 A + B (Redshift ML + SageMaker 원격 호출):\n• A (Redshift ML): Redshift 테이블 데이터로 자동 학습\n  - SQL 기반 모델 학습 및 배포\n  - 인벤토리 패턴 분석으로 권장사항 생성\n  - Redshift 내 통합으로 데이터 이동 불필요\n• B (SageMaker 원격 호출): SQL에서 외부 엔드포인트 호출\n  - 배포된 SageMaker 실시간 엔드포인트 사용\n  - SQL 함수로 직접 예측 실행\n  - 기존 ML 모델 활용 가능\n  - 미래 인벤토리 필요 예측 수행\n\n【오답 체크】\n(C) 오프라인 내보내기: 실시간 권장사항과 비동기적. 응답성 낮음.\n(D) SageMaker Autopilot: 대시보드 생성 기능 없음. 도구 기능 오류.\n(E) 보관 기능: 권장사항/예측과 무관. 요구사항 미충족.\n\n【시험 포인트】\n실시간 + 권장사항 + 예측 = Redshift ML(학습) + SageMaker 호출(추론)",
    "en_q": "A retail company is using an Amazon Redshift cluster to support real-time inventory management. The company has deployed an ML model on a real-time endpoint in Amazon SageMaker. The company wants to make real-time inventory recommendations. The company also wants to make predictions about future inventory needs. Which solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Use Amazon Redshift ML to generate inventory recommendations.",
      "B": "Use SQL to invoke a remote SageMaker endpoint for prediction.",
      "C": "Use Amazon Redshift ML to schedule regular data exports for offline model training.",
      "D": "Use SageMaker Autopilot to create inventory management dashboards in Amazon Redshift.",
      "E": "Use Amazon Redshift as a file storage system to archive old inventory management reports."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/151958-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 183,
    "question": "회사는 CSV 파일을 Amazon S3 버킷에 저장합니다. 데이터 엔지니어는 CSV 파일의 데이터를 처리하고 처리된 데이터를 새 S3 버킷에 저장해야 합니다. 프로세스는 열의 이름을 바꾸고, 특정 열을 제거하고, 각 파일의 두 번째 행을 무시하고, 첫 번째 행의 값을 기반으로 새 열을 생성하고, 열의 숫자 값으로 결과를 필터링해야 합니다. 어떤 솔루션이 최소한의 개발 작업으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Glue Python 작업을 사용하여 CSV 파일을 읽고 변환합니다.",
      "B": "AWS Glue 사용자 정의 크롤러를 사용하여 CSV 파일을 읽고 변환합니다.",
      "C": "AWS Glue 워크플로우를 사용하여 CSV 파일을 크롤링하고 변환하는 작업의 집합을 구축합니다.",
      "D": "AWS Glue DataBrew 레시피를 사용하여 CSV 파일을 읽고 변환합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Glue DataBrew — 코드 없는 데이터 준비 도구\n▸ 데이터 변환 레시피 — 재사용 가능한 변환 규칙 모음\n▸ 시각적 인터페이스 — GUI 기반 변환 규칙 정의\n\n【정답 포인트】\n옵션 D (AWS Glue DataBrew 레시피):\n• 복잡한 CSV 변환을 코드 없이 구현\n• 기본 제공 함수로 모든 변환 지원:\n  - 열 이름 바꾸기\n  - 열 제거\n  - 행 필터링 (두 번째 행 무시)\n  - 조건부 열 생성 (첫 행 값 기반)\n  - 숫자 필터링\n• 레시피 저장으로 다른 파일에 재사용\n• Python 코드 작성 불필요\n• 개발 시간 최소화\n• 시각적 검증으로 오류 감소\n\n【오답 체크】\n(A) Python 작업: 복잡한 코드 작성 필요. 개발 시간 많음.\n(B) 커스텀 크롤러: 변환 기능이 제한적. 스키마 추론 도구.\n(C) Glue 워크플로우: 다중 작업 조율 오버헤드. 복잡성 증가.\n\n【시험 포인트】\n최소 개발 + 복잡한 CSV 변환 = DataBrew 레시피",
    "en_q": "A company stores CSV files in an Amazon S3 bucket. A data engineer needs to process the data in the CSV files and store the processed data in a new S3 bucket. The process needs to rename a column, remove specific columns, ignore the second row of each file, create a new column based on the values of the first row of the data, and filter the results by a numeric value of a column. Which solution will meet these requirements with the LEAST development effort?",
    "en_opts": {
      "A": "Use AWS Glue Python jobs to read and transform the CSV files.",
      "B": "Use an AWS Glue custom crawler to read and transform the CSV files.",
      "C": "Use an AWS Glue workflow to build a set of jobs to crawl and transform the CSV files.",
      "D": "Use AWS Glue DataBrew recipes to read and transform the CSV files."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152017-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 184,
    "question": "회사는 Amazon Redshift를 데이터 웨어하우스로 사용합니다. 데이터 인코딩이 데이터 웨어하우스의 기존 테이블에 적용됩니다. 데이터 엔지니어는 일부 테이블에 적용된 압축 인코딩이 데이터에 최적의 형태가 아님을 발견합니다. 데이터 엔지니어는 최적이 아닌 인코딩을 가진 테이블의 데이터 인코딩을 개선해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "식별된 테이블에 대해 ANALYZE 명령을 실행합니다. 명령의 출력을 기반으로 열의 압축 인코딩을 수동으로 업데이트합니다.",
      "B": "식별된 테이블에 대해 ANALYZE COMPRESSION 명령을 실행합니다. 명령의 출력을 기반으로 열의 압축 인코딩을 수동으로 업데이트합니다.",
      "C": "식별된 테이블에 대해 VACUUM REINDEX 명령을 실행합니다.",
      "D": "식별된 테이블에 대해 VACUUM RECLUSTER 명령을 실행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ ANALYZE COMPRESSION — 최적 압축 인코딩 분석 명령\n▸ 압축 인코딩 — 스토리지 효율성을 높이는 압축 방식\n▸ Redshift 최적화 — 쿼리 성능과 스토리지 효율성 개선\n\n【정답 포인트】\n옵션 B (ANALYZE COMPRESSION + 수동 업데이트):\n• ANALYZE COMPRESSION 실행\n  - 현재 인코딩 vs 권장 인코딩 비교\n  - 각 열별 예상 공간 절감률 제시\n  - 최적화 전 분석 및 검증\n• 분석 결과 기반 수동 업데이트\n  - ALTER TABLE로 열 인코딩 변경\n  - 선택적 업데이트로 필요한 열만 최적화\n  - 안정성 보장 (기존 데이터 유지)\n\n【오답 체크】\n(A) ANALYZE: 테이블 통계만 수집. 압축 분석 불가.\n(C) VACUUM REINDEX: 정렬 순서 재정렬. 압축 관계 없음.\n(D) VACUUM RECLUSTER: 클러스터 재구성. 인코딩 최적화 안 함.\n\n【시험 포인트】\n압축 인코딩 최적화 = ANALYZE COMPRESSION(분석) + 수동 업데이트(적용)",
    "en_q": "A company uses Amazon Redshift as its data warehouse. Data encoding is applied to the existing tables of the data warehouse. A data engineer discovers that the compression encoding applied to some of the tables is not the best fit for the data. The data engineer needs to improve the data encoding for the tables that have sub-optimal encoding. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Run the ANALYZE command against the identified tables. Manually update the compression encoding of columns based on the output of the command.",
      "B": "Run the ANALYZE COMPRESSION command against the identified tables. Manually update the compression encoding of columns based on the output of the command.",
      "C": "Run the VACUUM REINDEX command against the identified tables.",
      "D": "Run the VACUUM RECLUSTER command against the identified tables."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150749-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 185,
    "question": "회사는 Amazon S3에 많은 고객 기록을 저장합니다. 규정을 준수하기 위해 회사는 기록이 생성된 후 처음 30일 동안 새 고객 기록에 즉시 액세스할 수 있어야 합니다. 회사는 30일보다 오래된 기록에 거의 액세스하지 않습니다. 회사는 Amazon S3 스토리지 비용을 최적화해야 합니다. 어떤 솔루션이 가장 비용 효율적으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "30일 후에 기록을 S3 Standard-Infrequent Access(S3 Standard-IA) 스토리지로 전환하는 라이프사이클 정책을 적용합니다.",
      "B": "S3 Intelligent-Tiering 스토리지를 사용합니다.",
      "C": "30일 후에 기록을 S3 Glacier Deep Archive 스토리지로 전환합니다.",
      "D": "모든 고객 기록에 S3 Standard-Infrequent Access(S3 Standard-IA) 스토리지를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 Lifecycle Policy — 객체 자동 전환/삭제 규칙\n▸ S3 Intelligent-Tiering — 자동 접근 패턴 기반 계층화\n▸ 규정 준수 보유 기간 — 법적 요구사항 데이터 보관\n\n【정답 포인트】\n옵션이 필요 (일반적 정답):\n• S3 Lifecycle 정책으로 자동 전환\n  - 생성 후 X일: Standard → Standard-IA\n  - 생성 후 Y일: Standard-IA → Glacier\n  - 생성 후 Z일 (규정 기간 후): 자동 삭제\n• 규정 준수 보유 기간 동안 장기 보관\n• 보관 기간 후 자동 삭제\n• 비용 최소화 (스토리지 티어링)\n• 운영 자동화 (수동 관리 불필요)\n\n【오답 체크】\n(A) CloudTrail: 감사 로그용. 고객 기록 보관 목적 아님.\n(B) S3 버전 관리: 버전 관리. 보관 자동화 안 함.\n(D) Glacier Vault Lock: 즉시 Glacier는 비효율. 점진적 전환 필요.\n\n【시험 포인트】\n자동 보관 + 규정 준수 + 비용 효율 = S3 Lifecycle Policy",
    "en_q": "The company stores a large volume of customer records in Amazon S3. To comply with regulations, the company must be able to access new customer records immediately for the first 30 days after the records are created. The company accesses records that are older than 30 days infrequently. The company needs to cost-optimize its Amazon S3 storage. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Apply a lifecycle policy to transition records to S3 Standard Infrequent-Access (S3 Standard-IA) storage after 30 days.",
      "B": "Use S3 Intelligent-Tiering storage.",
      "C": "Transition records to S3 Glacier Deep Archive storage after 30 days.",
      "D": "Use S3 Standard-Infrequent Access (S3 Standard-IA) storage for all customer records."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152018-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 186,
    "question": "데이터 엔지니어는 Amazon QuickSight를 사용하여 여러 AWS 리전의 회사 수익을 보고하는 대시보드를 구축합니다. 데이터 엔지니어는 시각화에 표시된 드릴다운 수준에 관계없이 리전의 총 수익을 표시하기를 원합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "테이블 계산을 생성합니다.",
      "B": "간단한 계산 필드를 생성합니다.",
      "C": "레벨 인식 계산 - 집계(LAC-A) 함수를 생성합니다.",
      "D": "레벨 인식 계산 - 윈도우(LAC-W) 함수를 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon QuickSight — 완전 관리형 BI 및 대시보드 서비스\n▸ 다중 리전 데이터 집계 — 여러 AWS 리전 데이터 통합\n▸ 직접 쿼리 vs 데이터셋 — 실시간 vs 미리 계산된 분석\n\n【정답 포인트】\nQuickSight 구현 방식:\n• 여러 리전의 Redshift/Athena 데이터 소스 연결\n• QuickSight 데이터셋으로 여러 소스 통합\n• 대시보드에 시각화 구성\n• 자동 새로고침으로 최신 데이터 반영\n• 일일/주간 스케줄로 성능 최적화 가능\n• 권한 관리로 팀별 접근 제어\n• 공유 기능으로 동료와 대시보드 배포\n\n【오답 체크】\n(다른 옵션 분석):\n- Redshift 내 직접: 복잡하고 유연성 낮음\n- EC2 기반 커스텀: 운영 오버헤드 높음\n- QuickSight가 완전 관리형 최적해\n\n【시험 포인트】\n다중 리전 수익 보고 = QuickSight 다중 데이터 소스 통합",
    "en_q": "A data engineer is using Amazon QuickSight to build a dashboard to report a company's revenue in multiple AWS Regions. The data engineer wants the dashboard to display the total revenue for a Region, regardless of the drill-down levels shown in the visual. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a table calculation.",
      "B": "Create a simple calculated field.",
      "C": "Create a level-aware calculation - aggregate (LAC-A) function.",
      "D": "Create a level-aware calculation - window (LAC-W) function."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152019-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 187,
    "question": "소매 회사는 Amazon S3 버킷에 고객 데이터를 저장합니다. 일부 고객 데이터에는 고객에 대한 개인 식별 정보(PII)가 포함됩니다. 회사는 PII 데이터를 비즈니스 파트너와 공유해서는 안 됩니다. 데이터 엔지니어는 데이터 세트에 PII가 포함되어 있는지 확인한 후에야 데이터 세트의 객체를 비즈니스 파트너에게 사용 가능하게 해야 합니다. 어떤 솔루션이 가장 적은 수동 개입으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "S3 버킷과 S3 객체를 Amazon Macie에 액세스할 수 있도록 구성합니다. Macie에서 자동 민감 데이터 검색을 사용합니다.",
      "B": "AWS CloudTrail을 구성하여 S3 PUT 작업을 모니터링합니다. CloudTrail 추적을 검사하여 PII를 저장하는 작업을 식별합니다.",
      "C": "S3 객체에서 PII를 식별하기 위해 AWS Lambda 함수를 생성합니다. 함수를 정기적으로 실행하도록 예약합니다.",
      "D": "AWS Glue Data Catalog에서 테이블을 생성합니다. 테이블에서 PII를 식별하기 위해 사용자 정의 SQL 쿼리를 작성합니다. Amazon Athena를 사용하여 쿼리를 실행합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 Bucket Policy — S3 버킷 레벨 접근 제어\n▸ 객체 암호화 — SSE-S3 또는 SSE-KMS\n▸ 민감 데이터 마스킹 — PII 자동 감지 및 마스킹\n\n【정답 포인트】\n옵션 조합:\n• 버킷 정책: IP 제한, VPC Endpoint 기반 접근 제어\n• 암호화 강제: 모든 객체 SSE-KMS 의무화\n• Macie: PII 자동 스캔 및 발견\n• 마스킹: DataBrew 또는 Glue로 자동화\n• 액세스 로깅: CloudTrail/S3 액세스 로그 추적\n• 객체 잠금: 의도하지 않은 삭제 방지\n\n【오답 체크】\n(부분 솔루션):\n- 암호화만: PII 마스킹 미흡\n- Macie만: 발견만 가능, 보호 안 함\n- DataBrew만: 접근 제어 부재\n- 조합 필요\n\n【시험 포인트】\nPII 고객 데이터 = 암호화 + 발견 + 마스킹 + 접근 제어 조합",
    "en_q": "A retail company stores customer data in an Amazon S3 bucket. Some of the customer data contains personally identifiable information (PII) about customers. The company must not share PII data with business partners. A data engineer must determine whether a dataset contains PII before making objects in the dataset available to business partners. Which solution will meet this requirement with the LEAST manual intervention?",
    "en_opts": {
      "A": "Configure the S3 bucket and S3 objects to allow access to Amazon Macie. Use automated sensitive data discovery in Macie.",
      "B": "Configure AWS CloudTrail to monitor S3 PUT operations. Inspect the CloudTrail trails to identify operations that save PII.",
      "C": "Create an AWS Lambda function to identify PII in S3 objects. Schedule the function to run periodically.",
      "D": "Create a table in AWS Glue Data Catalog. Write custom SQL queries to identify PII in the table. Use Amazon Athena to run the queries."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150748-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 188,
    "question": "데이터 엔지니어는 Amazon Athena에서 기존 테이블의 빈 복사본을 생성하여 데이터 처리 작업을 수행해야 합니다. Athena의 기존 테이블에는 1,000개의 행이 포함됩니다. 어떤 쿼리가 이 요구사항을 충족할까요?",
    "options": {
      "A": "CREATE TABLE new_table - LIKE old_table;",
      "B": "CREATE TABLE new_table - AS SELECT * FROM old_table - WITH NO DATA;",
      "C": "CREATE TABLE new_table - AS SELECT * FROM old_table;",
      "D": "CREATE TABLE new_table - as SELECT * FROM old_cable - WHERE 1=1;"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Athena — S3 데이터 직접 쿼리 (SQL)\n▸ CREATE TABLE AS SELECT (CTAS) — 테이블 복사 쿼리\n▸ 빈 테이블 복사 — 스키마만 복사, 데이터 없음\n\n【정답 포인트】\nAthena에서 빈 테이블 복사:\n• CREATE TABLE AS SELECT 쿼리 사용\n• WHERE 1=0 조건으로 데이터 제외\n• 기존 테이블의 스키마만 복사\n• 신규 처리 테이블로 사용\n• 쿼리 비용 최소화 (데이터 스캔 최소)\n• 기존 테이블 구조 유지\n\n【오답 체크】\n(대안 솔루션):\n- 메타데이터만 복사: 복잡한 설정\n- 수동 스키마 정의: 오류 위험 높음\n- 전체 데이터 복사 후 삭제: 비용 낭비\n\n【시험 포인트】\nAthena 빈 테이블 복사 = CREATE TABLE AS SELECT + WHERE 1=0",
    "en_q": "A data engineer needs to create an empty copy of an existing table in Amazon Athena to perform data processing tasks. The existing table in Athena contains 1,000 rows. Which query will meet this requirement?",
    "en_opts": {
      "A": "CREATE TABLE new_table - LIKE old_table;",
      "B": "CREATE TABLE new_table - AS SELECT * FROM old_table - WITH NO DATA;",
      "C": "CREATE TABLE new_table - AS SELECT * FROM old_table;",
      "D": "CREATE TABLE new_table - as SELECT * FROM old_cable - WHERE 1=1;"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150345-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 189,
    "question": "회사는 Amazon S3의 데이터 레이크를 가지고 있습니다. 회사는 여러 애플리케이션에 대한 AWS CloudTrail 로그를 수집합니다. 회사는 로그를 데이터 레이크에 저장하고, AWS Glue에서 로그를 카탈로그하며, 연도를 기준으로 로그를 분할합니다. 회사는 Amazon Athena를 사용하여 로그를 분석합니다. 최근에 고객들은 Athena 테이블의 쿼리가 데이터를 반환하지 않았다고 보고했습니다. 데이터 엔지니어는 이 문제를 해결해야 합니다. 데이터 엔지니어가 어떤 문제 해결 단계의 조합을 수행해야 할까요? (2개 선택)",
    "options": {
      "A": "Athena가 올바른 Amazon S3 위치를 가리키고 있는지 확인합니다.",
      "B": "쿼리 타임아웃 기간을 증가시킵니다.",
      "C": "MSCK REPAIR TABLE 명령을 사용합니다.",
      "D": "Athena를 다시 시작합니다.",
      "E": "문제가 있는 Athena 테이블을 삭제하고 다시 생성합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ AWS Glue — 서버리스 ETL 및 데이터 카탈로그\n▸ CloudFormation — IaC 기반 인프라 자동 배포\n▸ 다중 애플리케이션 데이터 공유 — 중앙 데이터 카탈로그\n\n【정답 포인트】\n옵션 조합:\n• S3 데이터 레이크: 중앙 저장소\n• Glue Data Catalog: 메타데이터 관리\n• Glue Crawler: 자동 스키마 추론\n• CloudFormation: 리소스 코드화 및 자동 배포\n• 여러 애플리케이션 공유: API/Athena 통합\n• 버전 관리: 스키마 진화 추적\n\n【오답 체크】\n(불완전한 솔루션):\n- Glue만: 배포 자동화 미흡\n- CloudFormation만: 데이터 카탈로그 부재\n- 수동 배포: 확장성 낮음\n\n【시험 포인트】\n데이터 레이크 + 다중 애플리케이션 = Glue Catalog + CloudFormation",
    "en_q": "A company has a data lake in Amazon S3. The company collects AWS CloudTrail logs for multiple applications. The company stores the logs in the data lake, catalogs the logs in AWS Glue, and partitions the logs based on the year. The company uses Amazon Athena to analyze the logs. Recently, customers reported that a query on one of the Athena tables did not return any data. A data engineer must resolve the issue. Which combination of troubleshooting steps should the data engineer take? (Choose two.)",
    "en_opts": {
      "A": "Confirm that Athena is pointing to the correct Amazon S3 location.",
      "B": "Increase the query timeout duration.",
      "C": "Use the MSCK REPAIR TABLE command.",
      "D": "Restart Athena.",
      "E": "Delete and recreate the problematic Athena table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150586-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 190,
    "question": "데이터 엔지니어는 AWS에서 실행되는 ETL 작업 집합을 오케스트레이션하려고 합니다. ETL 작업에는 Amazon EMR에서 Apache Spark 작업을 실행하고, Salesforce에 대한 API 호출을 만들고, Amazon Redshift에 데이터를 로드하는 작업이 포함됩니다. ETL 작업은 자동으로 장애 및 재시도를 처리해야 합니다. 데이터 엔지니어는 Python을 사용하여 작업을 오케스트레이션해야 합니다. 어떤 서비스가 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon Managed Workflows for Apache Airflow(Amazon MWAA)",
      "B": "AWS Step Functions",
      "C": "AWS Glue",
      "D": "Amazon EventBridge"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Step Functions — 서버리스 워크플로우 오케스트레이션\n▸ 병렬 처리 — 여러 작업 동시 실행\n▸ 조건부 분기 — 결과에 따른 단계 선택\n\n【정답 포인트】\nStep Functions 설계:\n• 상태 머신으로 ETL 작업 흐름 정의\n• Pass, Task, Choice 상태로 제어 로직 구성\n• Lambda/Glue/EMR 작업 오케스트레이션\n• 병렬 처리로 성능 최적화\n• 재시도/오류 처리 자동화\n• 실행 이력 추적 (감사 가능)\n• 완전 관리형 (서버 운영 불필요)\n\n【오답 체크】\n(대안):\n- Airflow: 자체 운영 필요\n- Cron: 단순 스케줄만 지원\n- Lambda 체인: 순차 처리 비효율\n\n【시험 포인트】\n복잡한 ETL 오케스트레이션 = AWS Step Functions",
    "en_q": "A data engineer wants to orchestrate a set of extract, transform, and load (ETL) jobs that run on AWS. The ETL jobs contain tasks that must run Apache Spark jobs on Amazon EMR, make API calls to Salesforce, and load data into Amazon Redshift. The ETL jobs need to handle failures and retries automatically. The data engineer needs to use Python to orchestrate the jobs. Which service will meet these requirements?",
    "en_opts": {
      "A": "Amazon Managed Workflows for Apache Airflow (Amazon MWAA)",
      "B": "AWS Step Functions",
      "C": "AWS Glue",
      "D": "Amazon EventBridge"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150746-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 191,
    "question": "데이터 엔지니어는 많은 AWS Lambda 함수가 사용하는 데이터 포맷팅 프로세스를 수행하는 사용자 정의 Python 스크립트를 유지 관리합니다. 데이터 엔지니어가 Python 스크립트를 수정해야 할 때, 데이터 엔지니어는 모든 Lambda 함수를 수동으로 업데이트해야 합니다. 데이터 엔지니어는 Lambda 함수를 업데이트하는 덜 수동적인 방법이 필요합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "사용자 정의 Python 스크립트를 공유 Amazon S3 버킷에 저장합니다. 실행 컨텍스트 객체의 사용자 정의 스크립트에 대한 포인터를 저장합니다.",
      "B": "사용자 정의 Python 스크립트를 Lambda 레이어로 패키징합니다. Lambda 함수에 Lambda 레이어를 적용합니다.",
      "C": "사용자 정의 Python 스크립트를 공유 Amazon S3 버킷에 저장합니다. 환경 변수의 고객 스크립트에 대한 포인터를 저장합니다.",
      "D": "각 Lambda 함수에 동일한 별칭을 할당합니다. 함수의 별칭을 지정하여 각 Lambda 함수를 호출합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Lambda Layers — 공유 코드/라이브러리 패키지\n▸ 코드 재사용 — 여러 함수에서 동일 로직 공유\n▸ 패키지 관리 — 버전 관리 및 배포 자동화\n\n【정답 포인트】\nLambda Layer 구현:\n• 데이터 포맷팅 로직을 Layer로 패키지화\n• 모든 Lambda 함수에서 공유\n• 업데이트 시 한 번만 수정\n• 함수 코드 간결성 향상\n• 버전 관리로 호환성 유지\n• 배포 자동화 가능\n\n【오답 체크】\n(대안):\n- 각 함수마다 코드 복사: 유지 관리 어려움\n- 별도 마이크로서비스: 오버헤드 증가\n- 공유 라이브러리 미사용: 중복 코드\n\n【시험 포인트】\nLambda 함수 간 공유 로직 = Lambda Layers",
    "en_q": "A data engineer maintains custom Python scripts that perform a data formatting process that many AWS Lambda functions use. When the data engineer needs to modify the Python scripts, the data engineer must manually update all the Lambda functions. The data engineer requires a less manual way to update the Lambda functions. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Store the custom Python scripts in a shared Amazon S3 bucket. Store a pointer to the custom scripts in the execution context object.",
      "B": "Package the custom Python scripts into Lambda layers. Apply the Lambda layers to the Lambda functions.",
      "C": "Store the custom Python scripts in a shared Amazon S3 bucket. Store a pointer to the customer scripts in environment variables.",
      "D": "Assign the same alias to each Lambda function. Call each Lambda function by specifying the function's alias."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150745-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 192,
    "question": "회사가 고객 데이터를 Amazon S3 버킷에 저장합니다. 회사 내 여러 팀이 고객 데이터를 다운스트림 분석에 사용하려고 합니다. 회사는 팀이 고객의 개인식별정보(PII)에 접근할 수 없도록 보장해야 합니다. 가장 낮은 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Macie를 사용하여 민감한 데이터 검색 작업을 생성 및 실행하여 PII를 감지 및 제거합니다.",
      "B": "S3 Object Lambda를 사용하여 데이터에 접근하고 Amazon Comprehend를 사용하여 PII를 감지 및 제거합니다.",
      "C": "Amazon Data Firehose와 Amazon Comprehend를 사용하여 PII를 감지 및 제거합니다.",
      "D": "AWS Glue DataBrew 작업을 사용하여 PII 데이터를 두 번째 S3 버킷에 저장합니다. 원본 S3 버킷에 남아 있는 데이터에 대한 분석을 수행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 액세스 정책 — 버킷/객체 레벨 권한\n▸ IAM 역할 — 팀별/서비스별 권한 그룹\n▸ 최소 권한 원칙 — 필요한 권한만 부여\n\n【정답 포인트】\n다중 팀 데이터 공유:\n• S3 Bucket Policy: 버킷 레벨 접근 허용/거부\n• IAM 역할: 각 팀별 세분화된 권한\n• 접두사 기반 분할: team-a/, team-b/ 등\n• 교차 계정 접근: AssumeRole로 다른 계정 지원\n• 암호화 키 권한: KMS 정책과 조합\n• 감사 로깅: S3 액세스 로그 활성화\n\n【오답 체크】\n(약한 보안):\n- 공개 버킷: 보안 위험\n- 루트 권한만: 세분화 불가\n- 정책 없음: 접근 통제 미흡\n\n【시험 포인트】\n다중 팀 데이터 공유 = S3 정책 + IAM 역할 + 최소 권한",
    "en_q": "A company stores customer data in an Amazon S3 bucket. Multiple teams in the company want to use the customer data for downstream analysis. The company needs to ensure that the teams do not have access to personally identifiable information (PII) about the customers. Which solution will meet this requirement with LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon Macie to create and run a sensitive data discovery job to detect and remove PII.",
      "B": "Use S3 Object Lambda to access the data, and use Amazon Comprehend to detect and remove PII.",
      "C": "Use Amazon Data Firehose and Amazon Comprehend to detect and remove PII.",
      "D": "Use an AWS Glue DataBrew job to store the PII data in a second S3 bucket. Perform analysis on the data that remains in the original S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150743-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 193,
    "question": "회사가 S3 버킷에 처리된 데이터를 저장합니다. 회사는 엄격한 데이터 접근 정책을 가지고 있습니다. 회사는 IAM 역할을 사용하여 S3 버킷에 대해 회사 내 팀에 다양한 수준의 접근 권한을 부여합니다. 회사는 사용자가 데이터 접근 정책을 위반할 때 알림을 받으려고 합니다. 각 알림에는 정책을 위반한 사용자의 사용자 이름이 포함되어야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Config 규칙을 사용하여 데이터 접근 정책 위반을 감지합니다. 규정 준수 알람을 설정합니다.",
      "B": "Amazon CloudWatch 메트릭을 사용하여 객체 수준 메트릭을 수집합니다. CloudWatch 알람을 설정합니다.",
      "C": "AWS CloudTrail을 사용하여 S3 버킷의 객체 수준 이벤트를 추적합니다. 이벤트를 Amazon CloudWatch로 전달하여 CloudWatch 알람을 설정합니다.",
      "D": "Amazon S3 서버 접근 로그를 사용하여 버킷 접근을 모니터링합니다. 접근 로그를 Amazon CloudWatch 로그 그룹으로 전달합니다. 로그 그룹에서 메트릭 필터를 사용하여 CloudWatch 알람을 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Object Lock — 규정 준수 잠금 모드\n▸ WORM (Write Once Read Many) — 한 번 쓰기, 여러 번 읽기\n▸ 법적 보유 — 규정 요구 데이터 보호\n\n【정답 포인트】\n엄격한 접근 정책:\n• S3 Object Lock (Compliance Mode)\n  - 객체 삭제/수정 원칙적 불가\n  - 관리자도 우회 불가\n  - 규정 준수 보장\n• Bucket Policy: 특정 IAM만 접근\n• 암호화 의무화: SSE-KMS 강제\n• 버전 관리: 변경 이력 추적\n• 액세스 로깅: 누가 언제 접근했는지 기록\n• 대기열 쓰기 권한 제한: 최소 인원만 허용\n\n【오답 체크】\n(약한 통제):\n- 정책만: 실수로 삭제 가능\n- 로깅만: 접근 방지 안 함\n- 암호화만: 무결성 보장 부족\n\n【시험 포인트】\n엄격한 데이터 접근 제어 = Object Lock + 정책 + 암호화 + 로깅",
    "en_q": "A company stores its processed data in an S3 bucket. The company has a strict data access policy. The company uses IAM roles to grant teams within the company different levels of access to the S3 bucket. The company wants to receive notifications when a user violates the data access policy. Each notification must include the username of the user who violated the policy. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS Config rules to detect violations of the data access policy. Set up compliance alarms.",
      "B": "Use Amazon CloudWatch metrics to gather object-level metrics. Set up CloudWatch alarms.",
      "C": "Use AWS CloudTrail to track object-level events for the S3 bucket. Forward events to Amazon CloudWatch to set up CloudWatch alarms.",
      "D": "Use Amazon S3 server access logs to monitor access to the bucket. Forward the access logs to an Amazon CloudWatch log group. Use metric filters on the log group to set up CloudWatch alarms."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150741-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 194,
    "question": "회사가 제3자로부터 오는 고객 데이터를 Amazon Redshift 데이터 웨어하우스로 로드하려고 합니다. 회사는 주문 데이터와 제품 데이터를 동일한 데이터 웨어하우스에 저장합니다. 회사는 결합된 데이터셋을 사용하여 잠재적 신규 고객을 식별하려고 합니다. 데이터 엔지니어는 소스 데이터의 필드 중 하나에 JSON 형식의 값이 포함되어 있음을 알 수 있습니다. 데이터 엔지니어는 데이터 웨어하우스에 JSON 데이터를 가장 적은 노력으로 로드해야 합니다. 어떻게 해야 합니까?",
    "options": {
      "A": "SUPER 데이터 타입을 사용하여 Amazon Redshift 테이블에 데이터를 저장합니다.",
      "B": "AWS Glue를 사용하여 JSON 데이터를 평면화하고 Amazon Redshift 테이블에 수집합니다.",
      "C": "Amazon S3를 사용하여 JSON 데이터를 저장합니다. Amazon Athena를 사용하여 데이터를 쿼리합니다.",
      "D": "AWS Lambda 함수를 사용하여 JSON 데이터를 평면화합니다. 데이터를 Amazon S3에 저장합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Redshift Spectrum — S3 데이터 직접 쿼리\n▸ 데이터 검증 — ETL 단계 품질 확인\n▸ 데이터 워프 — 외부 데이터 변환 후 로드\n\n【정답 포인트】\n제3자 데이터 로드:\n• 데이터 검증\n  - Schema 확인\n  - 데이터 타입 검증\n  - 필드 완성도 확인\n  - 형식 변환 (CSV→Parquet)\n• Redshift Spectrum으로 S3 데이터 검증\n  - SELECT로 샘플 확인\n  - 오류 행 식별\n• 정제 후 Redshift 로드\n  - COPY 명령으로 배치 로드\n  - 또는 Redshift ML 학습 데이터로 사용\n\n【오답 체크】\n(위험한 방식):\n- 검증 없이 직접 로드: 데이터 품질 미흡\n- Athena만: Redshift 로드 단계 없음\n- 수동 검증: 확장성 낮음\n\n【시험 포인트】\n제3자 데이터 로드 = 검증(Spectrum) → 정제(Glue) → 로드(COPY)",
    "en_q": "A company needs to load customer data that comes from a third party into an Amazon Redshift data warehouse. The company stores order data and product data in the same data warehouse. The company wants to use the combined dataset to identify potential new customers. A data engineer notices that one of the fields in the source data includes values that are in JSON format. How should the data engineer load the JSON data into the data warehouse with the LEAST effort?",
    "en_opts": {
      "A": "Use the SUPER data type to store the data in the Amazon Redshift table.",
      "B": "Use AWS Glue to flatten the JSON data and ingest it into the Amazon Redshift table.",
      "C": "Use Amazon S3 to store the JSON data. Use Amazon Athena to query the data.",
      "D": "Use an AWS Lambda function to flatten the JSON data. Store the data in Amazon S3."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/150740-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 195,
    "question": "회사가 MySQL 데이터베이스에 저장된 판매 기록을 분석하려고 합니다. 회사는 Salesforce에서 식별한 판매 기회와 기록을 상관관계를 찾으려고 합니다. 회사는 매일 2GB의 판매 기록을 받습니다. 회사는 식별된 판매 기회 100GB를 보유하고 있습니다. 데이터 엔지니어는 판매 기록과 판매 기회를 분석하고 상관관계를 찾는 프로세스를 개발해야 합니다. 프로세스는 매일 밤 한 번씩 실행되어야 합니다. 가장 낮은 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Managed Workflows for Apache Airflow(Amazon MWAA)를 사용하여 두 데이터셋을 가져옵니다. AWS Lambda 함수를 사용하여 데이터셋을 상관관계 짓습니다. AWS Step Functions을 사용하여 프로세스를 조율합니다.",
      "B": "Amazon AppFlow를 사용하여 Salesforce에서 판매 기회를 가져옵니다. AWS Glue를 사용하여 MySQL 데이터베이스에서 판매 기록을 가져옵니다. 판매 기록과 판매 기회를 상관관계 짓습니다. Amazon Managed Workflows for Apache Airflow(Amazon MWAA)를 사용하여 프로세스를 조율합니다.",
      "C": "Amazon AppFlow를 사용하여 Salesforce에서 판매 기회를 가져옵니다. AWS Glue를 사용하여 MySQL 데이터베이스에서 판매 기록을 가져옵니다. 판매 기록과 판매 기회를 상관관계 짓습니다. AWS Step Functions을 사용하여 프로세스를 조율합니다.",
      "D": "Amazon AppFlow를 사용하여 Salesforce에서 판매 기회를 가져옵니다. Amazon Kinesis Data Streams을 사용하여 MySQL 데이터베이스에서 판매 기록을 가져옵니다. Amazon Managed Service for Apache Flink를 사용하여 데이터셋을 상관관계 짓습니다. AWS Step Functions을 사용하여 프로세스를 조율합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Salesforce 데이터 통합 — 고객 시스템 연동\n▸ AWS Appflow — Salesforce와 AWS 간 자동 데이터 이동\n▸ 데이터 워프 — 실시간 데이터 동기화\n\n【정답 포인트】\nMySQL + Salesforce 통합 분석:\n• MySQL 판매 기록: 내부 데이터 베이스\n• Salesforce 고객 식별: 외부 CRM 데이터\n• AWS Appflow\n  - Salesforce → S3로 자동 이동\n  - 실시간/스케줄 동기화\n  - 필터링/맵핑 지원\n• AWS Glue\n  - MySQL + S3 데이터 통합\n  - 고객 ID 기반 조인\n  - 처리된 데이터 저장\n• Amazon Athena/Redshift로 분석\n\n【오답 체크】\n(불완전):\n- Appflow만: MySQL 통합 안 함\n- Glue만: Salesforce 자동 동기화 부재\n- EC2 기반: 운영 오버헤드\n\n【시험 포인트】\n다중 데이터 소스 통합 = Appflow(SaaS) + Glue(통합) + 분석(Athena)",
    "en_q": "A company wants to analyze sales records that the company stores in a MySQL database. The company wants to correlate the records with sales opportunities identified by Salesforce. The company receives 2 GB of sales records every day. The company has 100 GB of identified sales opportunities. A data engineer needs to develop a process that will analyze and correlate sales records and sales opportunities. The process must run once each night. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon Managed Workflows for Apache Airflow (Amazon MWAA) to fetch both datasets. Use AWS Lambda functions to correlate the datasets. Use AWS Step Functions to orchestrate the process.",
      "B": "Use Amazon AppFlow to fetch sales opportunities from Salesforce. Use AWS Glue to fetch sales records from the MySQL database. Correlate the sales records with the sales opportunities. Use Amazon Managed Workflows for Apache Airflow (Amazon MWAA) to orchestrate the process.",
      "C": "Use Amazon AppFlow to fetch sales opportunities from Salesforce. Use AWS Glue to fetch sales records from the MySQL database. Correlate the sales records with sales opportunities. Use AWS Step Functions to orchestrate the process.",
      "D": "Use Amazon AppFlow to fetch sales opportunities from Salesforce. Use Amazon Kinesis Data Streams to fetch sales records from the MySQL database. Use Amazon Managed Service for Apache Flink to correlate the datasets. Use AWS Step Functions to orchestrate the process."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153160-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 196,
    "question": "회사가 Amazon S3 버킷에 서버 로그를 저장합니다. 회사는 로그를 1년 동안 유지해야 합니다. 1년 후 로그는 필요하지 않습니다. 데이터 엔지니어는 1년보다 오래된 로그를 자동으로 삭제하는 솔루션이 필요합니다. 가장 낮은 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 Lifecycle 구성을 정의하여 1년 후 로그를 삭제합니다.",
      "B": "AWS Lambda 함수를 생성하여 1년 후 로그를 삭제합니다.",
      "C": "Amazon EC2 인스턴스에서 cron 작업을 예약하여 1년 후 로그를 삭제합니다.",
      "D": "AWS Step Functions 상태 머신을 구성하여 1년 후 로그를 삭제합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 Lifecycle 정책 — 객체 자동 삭제/보관 규칙\n▸ Glacier 티어 — 장기 보관용 저가 스토리지\n▸ 데이터 보관 정책 — 규제 요구 보유 기간\n\n【정답 포인트】\n서버 로그 1년 보관 후 삭제:\n• S3 Standard에 즉시 저장 (빠른 접근)\n• Lifecycle 정책으로 자동 전환\n  - 30일 후: Intelligent-Tiering\n  - 90일 후: Glacier (장기 보관)\n  - 365일 후: 자동 삭제\n• 비용 최적화\n  - Standard: 최초 핫 데이터\n  - Glacier: 규정 기간 보관\n  - 자동 삭제: 불필요 데이터 제거\n\n【오답 체크】\n(비효율):\n- 12개월 Standard: 높은 스토리지 비용\n- 즉시 Glacier: 접근 지연 있음\n- 정책 없이 수동: 운영 어려움\n\n【시험 포인트】\n자동 보관 + 비용 효율 = S3 Lifecycle Policy",
    "en_q": "A company stores server logs in an Amazon S3 bucket. The company needs to keep the logs for 1 year. The logs are not required after 1 year. A data engineer needs a solution to automatically delete logs that are older than 1 year. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Define an S3 Lifecycle configuration to delete the logs after 1 year.",
      "B": "Create an AWS Lambda function to delete the logs after 1 year.",
      "C": "Schedule a cron job on an Amazon EC2 instance to delete the logs after 1 year.",
      "D": "Configure an AWS Step Functions state machine to delete the logs after 1 year."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153366-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 197,
    "question": "회사가 AWS Step Functions에서 여러 단계를 포함하는 서버리스 데이터 처리 워크플로우를 설계합니다. 처리 워크플로우는 외부 API에서 데이터를 수집하고, 여러 AWS Lambda 함수를 사용하여 데이터를 변환하고, 변환된 데이터를 Amazon DynamoDB에 로드합니다. 회사는 워크플로우가 들어오는 데이터의 콘텐츠에 따라 특정 단계를 수행해야 합니다. 이 요구 사항을 충족하기 위해 회사는 어떤 Step Functions 상태 타입을 사용해야 합니까?",
    "options": {
      "A": "Parallel",
      "B": "Choice",
      "C": "Task",
      "D": "Map"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Step Functions — 워크플로우 오케스트레이션\n▸ 장기 실행 작업 — 상태 유지 워크플로우\n▸ 오류 처리 — 재시도/Fallback 로직\n\n【정답 포인트】\n서버리스 워크플로우 설계:\n• Step Functions 상태 머신 정의\n  - Lambda: 데이터 검증, 변환\n  - SQS/SNS: 비동기 메시징\n  - DynamoDB: 상태 저장\n  - Glue/EMR: 대규모 처리\n• 병렬 처리: Parallel 상태\n• 조건부 로직: Choice 상태\n• 오류 처리: Catch, Retry\n• 모니터링: 실행 이력 추적\n\n【오답 체크】\n(대안):\n- Lambda 체인: 장기 실행 불안정\n- Cron: 단순 스케줄만 지원\n- 수동 조율: 오류 처리 어려움\n\n【시험 포인트】\n복잡한 서버리스 워크플로우 = Step Functions",
    "en_q": "A company is designing a serverless data processing workflow in AWS Step Functions that involves multiple steps. The processing workflow ingests data from an external API, transforms the data by using multiple AWS Lambda functions, and loads the transformed data into Amazon DynamoDB. The company needs the workflow to perform specific steps based on the content of the incoming data. Which Step Functions state type should the company use to meet this requirement?",
    "en_opts": {
      "A": "Parallel",
      "B": "Choice",
      "C": "Task",
      "D": "Map"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153367-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 198,
    "question": "데이터 엔지니어가 AWS CloudTrail 로그를 쿼리하고 감사 데이터를 준비하기 위해 Amazon Athena에서 cloudtrail_logs라는 테이블을 생성했습니다. 데이터 엔지니어는 2024년 초부터 발생한 오류 코드가 있는 오류를 표시하는 쿼리를 작성해야 합니다. 쿼리는 가장 최근 10개의 오류를 반환해야 합니다. 이 요구 사항을 충족하는 쿼리는 무엇입니까?",
    "options": {
      "A": "select count(*) as TotalEvents, eventname, errorcode, errormessage from cloudtrail_logs where errorcode is not null and eventtime >= '2024-01-01T00:00:00Z' group by eventname, errorcode, errormessage order by TotalEvents desc limit 10;",
      "B": "select count(*) as TotalEvents, eventname, errorcode, errormessage from cloudtrail_logs where eventtime >= '2024-01-01T00:00:00Z' group by eventname, errorcode, errormessage order by TotalEvents desc limit 10;",
      "C": "select count(*) as TotalEvents, eventname, errorcode, errormessage from cloudtrail_logs where eventtime >= '2024-01-01T00:00:00Z' group by eventname, errorcode, errormessage order by eventname asc limit 10;",
      "D": "select count(*) as TotalEvents, eventname, errorcode, errormessage from cloudtrail_logs where errorcode is not null and eventtime >= '2024-01-01T00:00:00Z' group by eventname, errorcode, errormessage limit 10;"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS CloudTrail — API 감사 로그\n▸ Amazon Athena — 로그 쿼리 (SQL)\n▸ 규정 준수 감사 — API 호출 이력 추적\n\n【정답 포인트】\nCloudTrail 감사 쿼리:\n• CloudTrail로 모든 API 호출 기록\n  - S3, IAM, Redshift 등 리소스 접근\n  - 사용자/역할별 실행 기록\n  - 타임스탬프/결과 포함\n• S3에 저장 (장기 보관)\n• Athena로 SQL 쿼리\n  - 특정 리소스 접근 누구/언제\n  - 변경 작업 추적\n  - 실패한 인증 시도 확인\n  - 규정 준수 보고\n\n【오답 체크】\n(약한 감사):\n- CloudWatch Logs: API 레벨 추적 미흡\n- Config: 리소스 상태만 추적\n- VPC Flow Logs: 네트워크 레벨만 기록\n\n【시험 포인트】\n감사 및 규정 준수 = CloudTrail(기록) + Athena(쿼리)",
    "en_q": "A data engineer created a table named cloudtrail_logs in Amazon Athena to query AWS CloudTrail logs and prepare data for audits. The data engineer needs to write a query to display errors with error codes that have occurred since the beginning of 2024. The query must return the 10 most recent errors. Which query will meet these requirements?",
    "en_opts": {
      "A": "select count (*) as TotalEvents, eventname, errorcode, errormessage from cloudtrail_logswhere errorcode is not nulland eventtime >= '2024-01-01T00:00:00Z' group by eventname, errorcode, errormessageorder by TotalEvents desclimit 10;",
      "B": "select count (*) as TotalEvents, eventname, errorcode, errormessage from cloudtrail_logs where eventtime >= '2024-01-01T00:00:00Z' group by eventname, errorcode, errormessage order by TotalEvents desc limit 10;",
      "C": "select count (*) as TotalEvents, eventname, errorcode, errormessage from cloudtrail_logswhere eventtime >= '2024-01-01T00:00:00Z' group by eventname, errorcode, errormessageorder by eventname asc limit 10;",
      "D": "select count (*) as TotalEvents, eventname, errorcode, errormessage from cloudtrail_logs where errorcode is not nulland eventtime >= '2024-01-01T00:00:00Z' group by eventname, errorcode, errormessagelimit 10;"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153159-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 199,
    "question": "온라인 소매업체가 여러 배송 파트너를 사용하여 고객에게 제품을 배송합니다. 배송 파트너는 소매업체에 주문 요약을 보냅니다. 소매업체는 주문 요약을 Amazon S3에 저장합니다. 일부 주문 요약에는 고객의 개인식별정보(PII)가 포함되어 있습니다. 데이터 엔지니어는 회사가 PII를 수정할 수 있도록 주문 요약에서 PII를 감지해야 합니다. 가장 낮은 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Textract",
      "B": "Amazon S3 Storage Lens",
      "C": "Amazon Macie",
      "D": "Amazon SageMaker Data Wrangler"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon SQS — 메시지 큐 (비동기 처리)\n▸ Lambda 트리거 — SQS 메시지 자동 처리\n▸ 주문 추적 — 배송 파트너 데이터 통합\n\n【정답 포인트】\n배송 파트너 주문 데이터 수신:\n• 배송 파트너 API → SQS 큐 (메시지 저장)\n• Lambda 함수 트리거 (SQS 이벤트)\n  - 메시지 처리\n  - 주문 데이터 검증\n  - DynamoDB/RDS 저장\n• 비동기 처리\n  - 파트너 시스템과 느슨한 결합\n  - 스파이크 트래픽 대응\n  - 실패 재시도 자동화\n• 모니터링: CloudWatch 메트릭\n\n【오답 체크】\n(약한 설계):\n- API Gateway만: 동기 처리, 지연 가능\n- Kinesis: 스트림 비용이 높음\n- 직접 DB 저장: 오류 처리 어려움\n\n【시험 포인트】\n비동기 주문 처리 = SQS + Lambda + DynamoDB",
    "en_q": "An online retailer uses multiple delivery partners to deliver products to customers. The delivery partners send order summaries to the retailer. The retailer stores the order summaries in Amazon S3. Some of the order summaries contain personally identifiable information (PII) about customers. A data engineer needs to detect PII in the order summaries so the company can redact the PII. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Amazon Textract",
      "B": "Amazon S3 Storage Lens",
      "C": "Amazon Macie",
      "D": "Amazon SageMaker Data Wrangler"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153157-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 200,
    "question": "회사가 다양한 IAM 역할을 사용하여 Amazon Redshift 데이터 웨어하우스에 접근합니다. 100명 이상의 사용자가 매일 데이터 웨어하우스에 접근합니다. 회사는 각 사용자의 직무 역할, 권한 및 데이터의 민감도에 따라 객체 접근을 제어하려고 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Redshift의 역할 기반 접근 제어(RBAC) 기능을 사용합니다.",
      "B": "Amazon Redshift의 행 수준 보안(RLS) 기능을 사용합니다.",
      "C": "Amazon Redshift의 컬럼 수준 보안(CLS) 기능을 사용합니다.",
      "D": "Amazon Redshift에서 동적 데이터 마스킹 정책을 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Redshift 행 기반 보안 (RLS) — 행 단위 액세스 제어\n▸ 동적 권한 — 역할/사용자별 데이터 필터링\n▸ 감사 정책 — 접근 이력 추적\n\n【정답 포인트】\n100명 사용자 권한 관리:\n• Redshift 행 기반 보안 (RLS)\n  - 각 역할의 보기(View) 생성\n  - WHERE 절로 행 필터링\n  - department_id = current_user_id 등\n• IAM 역할 + Redshift 사용자 매핑\n  - SQL 쿼리 권한 관리\n  - 데이터 접근 제한\n• 감사 로깅\n  - 누가 어떤 데이터 쿼리했는지\n  - 실패한 쿼리 기록\n• 그룹 기반 권한\n  - 부서/팀별 그룹화\n  - 유지 관리 간소화\n\n【오답 체크】\n(약한 방식):\n- 테이블별 권한: 행 단위 제어 부재\n- IAM만: SQL 레벨 제어 불완전\n- 수동 관리: 100명 확장성 낮음\n\n【시험 포인트】\n대규모 사용자 권한 관리 = Redshift RLS + IAM + 그룹",
    "en_q": "A company has an Amazon Redshift data warehouse that users access by using a variety of IAM roles. More than 100 users access the data warehouse every day. The company wants to control user access to the objects based on each user's job role, permissions, and how sensitive the data is. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use the role-based access control (RBAC) feature of Amazon Redshift.",
      "B": "Use the row-level security (RLS) feature of Amazon Redshift.",
      "C": "Use the column-level security (CLS) feature of Amazon Redshift.",
      "D": "Use dynamic data masking policies in Amazon Redshift."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153158-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 201,
    "question": "회사가 데이터 거버넌스 및 비즈니스 카탈로그 솔루션으로 Amazon DataZone을 사용합니다. 회사는 Amazon S3 데이터 레이크에 데이터를 저장합니다. 회사는 AWS Glue Data Catalog와 함께 AWS Glue를 사용합니다. 데이터 엔지니어는 AWS Glue 데이터 품질 점수를 Amazon DataZone 포털에 게시해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터 품질 정의 언어(DQDL) 규칙을 포함하는 데이터 품질 규칙 집합을 생성합니다(특정 AWS Glue 테이블에 적용). 규칙 집합을 매일 실행하도록 예약합니다. Amazon Redshift 데이터 소스를 갖도록 Amazon DataZone 프로젝트를 구성합니다. 데이터 소스에 대한 데이터 품질 구성을 활성화합니다.",
      "B": "AWS Glue 데이터 품질 평가 변환을 사용하도록 AWS Glue ETL 작업을 구성합니다. 작업 내에 데이터 품질 규칙 집합을 정의합니다. AWS Glue 데이터 소스를 갖도록 Amazon DataZone 프로젝트를 구성합니다. 데이터 소스에 대한 데이터 품질 구성을 활성화합니다.",
      "C": "데이터 품질 정의 언어(DQDL) 규칙을 포함하는 데이터 품질 규칙 집합을 생성합니다(특정 AWS Glue 테이블에 적용). 규칙 집합을 매일 실행하도록 예약합니다. AWS Glue 데이터 소스를 갖도록 Amazon DataZone 프로젝트를 구성합니다. 데이터 소스에 대한 데이터 품질 구성을 활성화합니다.",
      "D": "AWS Glue 데이터 품질 평가 변환을 사용하도록 AWS Glue ETL 작업을 구성합니다. 작업 내에 데이터 품질 규칙 집합을 정의합니다. Amazon Redshift 데이터 소스를 갖도록 Amazon DataZone 프로젝트를 구성합니다. 데이터 소스에 대한 데이터 품질 구성을 활성화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon DataZone — 데이터 카탈로그 및 거버넌스\n▸ AWS Glue Data Quality — 데이터 품질 규칙\n▸ Glue Data Catalog — 메타데이터 저장소\n▸ DQDL (Data Quality Definition Language) — 품질 규칙 언어\n\n【정답 포인트】\nDataZone 품질 점수 구현:\n• 1단계: AWS Glue Data Catalog\n  - S3 데이터 메타데이터 저장\n  - 스키마, 유형, 파티션 정보\n• 2단계: Glue Data Quality (DQDL)\n  - 테이블별 품질 규칙 정의\n  - NULL 비율, 중복 확인 등\n  - 매일 자동 실행\n• 3단계: DataZone 프로젝트 구성\n  - Glue 데이터 소스 등록\n  - 품질 구성 활성화\n  - 점수 자동 계산\n  - 거버넌스 포털에 표시\n\n【오답 체크】\n(불완전):\n(A) Redshift 기반: 문제는 S3 레이크 사용\n(B) ETL 내 규칙: DataZone과 연계 약함\n(D) Redshift + ETL: 두 가지 오류 조합\n\n【시험 포인트】\n데이터 품질 거버넌스 = Glue Data Catalog + DQDL(품질 규칙) + DataZone(포털)",
    "en_q": "A company uses Amazon DataZone as a data governance and business catalog solution. The company stores data in an Amazon S3 data lake. The company uses AWS Glue with an AWS Glue Data Catalog. A data engineer needs to publish AWS Glue Data Quality scores to the Amazon DataZone portal. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Create a data quality ruleset with Data Quality Definition language (DQDL) rules that apply to a specific AWS Glue table. Schedule the ruleset to run daily. Configure the Amazon DataZone project to have an Amazon Redshift data source. Enable the data quality configuration for the data source.",
      "B": "Configure AWS Glue ETL jobs to use an Evaluate Data Quality transform. Define a data quality ruleset inside the jobs. Configure the Amazon DataZone project to have an AWS Glue data source. Enable the data quality configuration for the data source.",
      "C": "Create a data quality ruleset with Data Quality Definition language (DQDL) rules that apply to a specific AWS Glue table. Schedule the ruleset to run daily. Configure the Amazon DataZone project to have an AWS Glue data source. Enable the data quality configuration for the data source.",
      "D": "Configure AWS Glue ETL jobs to use an Evaluate Data Quality transform. Define a data quality ruleset inside the jobs. Configure the Amazon DataZone project to have an Amazon Redshift data source. Enable the data quality configuration for the data source."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153156-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 202,
    "question": "회사가 Amazon Redshift의 데이터 웨어하우스를 보유하고 있습니다. 보안 규정을 준수하려면 회사는 데이터 웨어하우스에 대한 모든 사용자 활동 및 연결 활동을 기록하고 저장해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 버킷을 생성합니다. Amazon Redshift 클러스터에 대한 로깅을 활성화합니다. 로깅 구성에서 S3 버킷을 지정하여 로그를 저장합니다.",
      "B": "Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성합니다. Amazon Redshift 클러스터에 대한 로깅을 활성화합니다. 로그를 EFS 파일 시스템에 씁니다.",
      "C": "Amazon Aurora MySQL 데이터베이스를 생성합니다. Amazon Redshift 클러스터에 대한 로깅을 활성화합니다. 로그를 Aurora MySQL 데이터베이스의 테이블에 씁니다.",
      "D": "Amazon Elastic Block Store(Amazon EBS) 볼륨을 생성합니다. Amazon Redshift 클러스터에 대한 로깅을 활성화합니다. 로그를 EBS 볼륨에 씁니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Redshift Enhanced Logging — 사용자 활동, 연결, 쿼리 로그 기록\n▸ Audit Logging — 보안 규정(SOC 2, HIPAA 등) 준수\n▸ S3 Destination — Redshift 로그의 표준 저장소\n\n【정답 포인트】\nA가 정답인 이유:\n• Redshift 네이티브: 로깅 기능은 S3로 직접 쓰기 지원\n• 감사 추적: 사용자 활동(로그인, 쿼리 실행) 기록\n• 규정 준수: 장기 보관, 접근 제어, 삭제 금지 설정 가능\n• 비용 효율: S3 저장소는 저렴, 필요시 Glacier로 아카이빙\n• 표준 방식: AWS 공식 권장 Redshift 로깅 대상\n\n【오답 체크】\n(B) EFS: 파일 시스템이지 로깅 대상 아님, 규정 준수 기능 부족\n(C) Aurora MySQL: 불필요한 데이터베이스 추가, 로깅 용도 부적합\n(D) EBS: 단일 EC2 인스턴스 볼륨, Redshift 클러스터와 분리된 저장소\n\n【시험 포인트】\nRedshift 로깅 아키텍처:\n• Connection Logs = S3 저장\n• User Activity = S3 저장\n• Query Logs = S3 저장 또는 CloudWatch Logs\n• Enhanced Logging = S3 필수\n보안 감사 요구 사항 = S3 + Lifecycle Policy (삭제 금지, 버전 관리) + CloudTrail(S3 접근 추적).",
    "en_q": "A company has a data warehouse in Amazon Redshift. To comply with security regulations, the company needs to log and store all user activities and connection activities for the data warehouse. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an Amazon S3 bucket. Enable logging for the Amazon Redshift cluster. Specify the S3 bucket in the logging configuration to store the logs.",
      "B": "Create an Amazon Elastic File System (Amazon EFS) file system. Enable logging for the Amazon Redshift cluster. Write logs to the EFS file system.",
      "C": "Create an Amazon Aurora MySQL database. Enable logging for the Amazon Redshift cluster. Write the logs to a table in the Aurora MySQL database.",
      "D": "Create an Amazon Elastic Block Store (Amazon EBS) volume. Enable logging for the Amazon Redshift cluster. Write the logs to the EBS volume."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153155-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 203,
    "question": "회사가 데이터 웨어하우스를 Teradata에서 Amazon Redshift로 마이그레이션하려고 합니다. 가장 적은 운영 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Database Migration Service(AWS DMS) Schema Conversion을 사용하여 스키마를 마이그레이션합니다. AWS DMS를 사용하여 데이터를 마이그레이션합니다.",
      "B": "AWS Schema Conversion Tool(AWS SCT)을 사용하여 스키마를 마이그레이션합니다. AWS Database Migration Service(AWS DMS)를 사용하여 데이터를 마이그레이션합니다.",
      "C": "AWS Database Migration Service(AWS DMS)를 사용하여 데이터를 마이그레이션합니다. 자동 스키마 변환을 사용합니다.",
      "D": "Teradata에서 스키마 정의를 수동으로 내보냅니다. Amazon Redshift 데이터베이스에 스키마를 적용합니다. AWS Database Migration Service(AWS DMS)를 사용하여 데이터를 마이그레이션합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS SCT (Schema Conversion Tool) — Teradata → Redshift 스키마 변환 전문 도구\n▸ AWS DMS (Database Migration Service) — 데이터 이관 및 지속적 동기화\n▸ Heterogeneous Migration — 다른 데이터베이스 플랫폼 간 마이그레이션\n\n【정답 포인트】\nB가 정답인 이유:\n• SCT 사용: Teradata → Redshift 스키마 변환 최적화 (문법, 함수, 타입 변환)\n• DMS 사용: 데이터 이관 (대용량 처리, 병렬 전송, 검증)\n• 역할 분담: SCT는 스키마, DMS는 데이터\n• LEAST EFFORT: SCT의 자동 변환 기능이 수동 작업 최소화\n\n【오답 체크】\n(A) DMS Schema Conversion: DMS의 schema conversion 기능은 기본적, SCT 전문도구보다 낮은 품질\n(C) Auto Conversion: DMS 자동 변환만 사용 = 복잡한 Teradata 스키마 손실 가능\n(D) Manual Export: 수동 변환 = LEAST EFFORT 위반, 가장 높은 노력 필요\n\n【시험 포인트】\n마이그레이션 도구 맵:\n• SCT = 복잡한 스키마 변환 (저장 프로시저, 함수, 트리거 등)\n• DMS = 데이터 이관 + CDC (지속적 동기화)\n• 조합: 이기종 마이그레이션(예: Oracle → PostgreSQL, Teradata → Redshift)의 표준\nTeradata 같은 복잡한 데이터베이스는 SCT 필수.",
    "en_q": "A company wants to migrate a data warehouse from Teradata to Amazon Redshift. Which solution will meet this requirement with the LEAST operational effort?",
    "en_opts": {
      "A": "Use AWS Database Migration Service (AWS DMS) Schema Conversion to migrate the schema. Use AWS DMS to migrate the data.",
      "B": "Use the AWS Schema Conversion Tool (AWS SCT) to migrate the schema. Use AWS Database Migration Service (AWS DMS) to migrate the data.",
      "C": "Use AWS Database Migration Service (AWS DMS) to migrate the data. Use automatic schema conversion.",
      "D": "Manually export the schema definition from Teradata. Apply the schema to the Amazon Redshift database. Use AWS Database Migration Service (AWS DMS) to migrate the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/153154-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 204,
    "question": "회사가 다양한 AWS 및 타사 데이터 저장소를 사용합니다. 회사는 모든 데이터를 중앙 데이터 웨어하우스로 통합하여 분석을 수행하려고 합니다. 사용자는 분석 쿼리에 대해 빠른 응답 시간이 필요합니다. 회사는 Amazon QuickSight를 직접 쿼리 모드로 사용하여 데이터를 시각화합니다. 사용자는 일반적으로 하루 중 몇 시간 동안 예측할 수 없는 급증 현상으로 쿼리를 실행합니다. 가장 낮은 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Redshift Serverless를 사용하여 모든 데이터를 Amazon Redshift 관리형 저장소(RMS)로 로드합니다.",
      "B": "Amazon Athena를 사용하여 모든 데이터를 Amazon S3에 Apache Parquet 형식으로 로드합니다.",
      "C": "Amazon Redshift 프로비저닝된 클러스터를 사용하여 모든 데이터를 Amazon Redshift 관리형 저장소(RMS)로 로드합니다.",
      "D": "Amazon Aurora PostgreSQL을 사용하여 모든 데이터를 Aurora로 로드합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Redshift Serverless — 서버리스 데이터 웨어하우스, 자동 스케일링\n▸ RMS (Redshift Managed Storage) — 컴퓨트와 저장소 독립적 확장\n▸ \"예측할 수 없는 급증\" — 자동 스케일링 필요\n▸ \"가장 낮은 운영 오버헤드\" — 관리 최소화\n\n【정답 포인트】\nA(Redshift Serverless)가 정답인 이유:\n• 자동 스케일링: 쿼리 부하 자동 감지, RPU(Redshift Processing Units) 자동 조정\n• \"예측할 수 없는 급증\"에 완벽 대응: 사용 시간만 과금\n• 관리 최소화: 클러스터 관리, 유지보수 불필요\n• QuickSight 직접 쿼리: Redshift와 완벽 호환\n• 비용: 쿼리 실행 시간만 청구, 유휴 시간 비용 없음\n\n【오답 체크】\n(B) Athena: S3에서 직접 쿼리, 대규모 통합 데이터 웨어하우스 아님, QuickSight 직접 쿼리 모드 성능 저하\n(C) Provisioned Clusters: 고정 용량 필요, \"예측할 수 없는 급증\"에 대응 어려움, 유휴 시간 비용 증가\n(D) Aurora PostgreSQL: 소규모 데이터베이스용, 대규모 분석 성능 미흡\n\n【시험 포인트】\n워크로드별 선택:\n• 일정한 부하 = Provisioned Redshift\n• 불규칙한 부하 = Redshift Serverless\n• 쿼리 빈도 낮음 = Athena\n• 실시간 분석 = QuickSight + Redshift Serverless\nServerless = 자동 스케일링 + 사용량 기반 과금의 조합.",
    "en_q": "A company uses a variety of AWS and third-party data stores. The company wants to consolidate all the data into a central data warehouse to perform analytics. Users need fast response times for analytics queries. The company uses Amazon QuickSight in direct query mode to visualize the data. Users normally run queries during a few hours each day with unpredictable spikes. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon Redshift Serverless to load all the data into Amazon Redshift managed storage (RMS).",
      "B": "Use Amazon Athena to load all the data into Amazon S3 in Apache Parquet format.",
      "C": "Use Amazon Redshift provisioned clusters to load all the data into Amazon Redshift managed storage (RMS).",
      "D": "Use Amazon Aurora PostgreSQL to load all the data into Aurora."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152992-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 205,
    "question": "회사가 개인식별정보(PII) 데이터와 비-PII 데이터를 포함하는 JSON 파일을 보유하고 있습니다. 회사는 데이터를 쿼리 및 분석에 사용 가능하게 하려고 합니다. 비-PII 데이터는 회사의 모든 사람이 사용할 수 있어야 합니다. PII 데이터는 제한된 직원 그룹만 사용할 수 있어야 합니다. 가장 낮은 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "JSON 파일을 Amazon S3 버킷에 저장합니다. AWS Glue를 구성하여 파일을 PII 데이터가 포함된 파일과 비-PII 데이터가 포함된 파일로 분할합니다. 출력 파일을 별도의 S3 버킷에 저장합니다. 사용자 유형에 따라 필요한 버킷 접근 권한을 부여합니다.",
      "B": "JSON 파일을 Amazon S3 버킷에 저장합니다. Amazon Macie를 사용하여 PII 데이터를 식별하고 사용자 유형에 따라 접근 권한을 부여합니다.",
      "C": "JSON 파일을 Amazon S3 버킷에 저장합니다. AWS Lake Formation에서 파일 스키마를 카탈로깅합니다. Lake Formation 권한을 사용하여 사용자 유형에 따라 필요한 데이터에 대한 접근을 제공합니다.",
      "D": "두 개의 Amazon RDS PostgreSQL 데이터베이스를 생성합니다. PII 데이터와 비-PII 데이터를 별도의 데이터베이스에 로드합니다. 사용자 유형에 따라 데이터베이스에 대한 접근 권한을 부여합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Lake Formation — 데이터 레이크 설정, 거버넌스, 세분화된 접근 제어\n▸ Lake Formation Permissions — 테이블, 컬럼, 행 수준 접근 제어\n▸ Schema Cataloging — Glue Data Catalog에 메타데이터 등록\n▸ \"LEAST OPERATIONAL OVERHEAD\" — 최소 관리 작업\n\n【정답 포인트】\nC(Lake Formation)가 정답인 이유:\n• 통합 거버넌스: S3 데이터의 카탈로깅 + 접근 제어를 한 곳에서 관리\n• 세분화된 권한: 사용자 유형별로 특정 컬럼/행 접근 제어 가능\n• PII 보호: 테이블 수준이 아닌 \"컬럼 수준\"으로 PII 컬럼 숨김\n• 데이터 중복 없음: 파일을 분할하지 않고 원본 유지\n• 자동화: Glue Data Catalog와 자동 연계\n\n【오답 체크】\n(A) Glue 분할: PII/비-PII를 별도 버킷에 물리적 분할 = 운영 오버헤드 증가 (중복 데이터, S3 버킷 관리)\n(B) Macie: PII 감지만 가능, \"접근 제어\" 기능 없음 (접근 제어 별도 설정 필요)\n(D) RDS 데이터베이스 2개: JSON → RDB 변환 필요, 관리 복잡, 분석 성능 낮음\n\n【시험 포인트】\nLake Formation은 데이터 레이크 거버넌스의 핵심:\n• S3 데이터 레이크 + Glue Catalog = Lake Formation의 중심\n• PII/민감 데이터 보호 = 컬럼/행 수준 권한\n• 사용자 유형별 차별화 접근 = Lake Formation 권한의 핵심 기능\n\"비-PII는 모두, PII는 제한\" = 컬럼 수준 권한 = Lake Formation만이 효율적으로 제공.",
    "en_q": "A company has as JSON file that contains personally identifiable information (PII) data and non-PII data. The company needs to make the data available for querying and analysis. The non-PII data must be available to everyone in the company. The PII data must be available only to a limited group of employees. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Store the JSON file in an Amazon S3 bucket. Configure AWS Glue to split the file into one file that contains the PII data and one file that contains the non-PII data. Store the output files in separate S3 buckets. Grant the required access to the buckets based on the type of user.",
      "B": "Store the JSON file in an Amazon S3 bucket. Use Amazon Macie to identify PII data and to grant access based on the type of user.",
      "C": "Store the JSON file in an Amazon S3 bucket. Catalog the file schema in AWS Lake Formation. Use Lake Formation permissions to provide access to the required data based on the type of user.",
      "D": "Create two Amazon RDS PostgreSQL databases. Load the PII data and the non-PII data into the separate databases. Grant access to the databases based on the type of user."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/304999-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 206,
    "question": "회사가 Amazon Redshift 클러스터를 암호화하기 위해 AWS Key Management Service(AWS KMS)를 사용합니다. 회사는 재해 복구(DR) 전략의 일부로 Redshift 클러스터의 크로스 리전 스냅샷을 구성하려고 합니다. 데이터 엔지니어는 AWS CLI를 사용하여 크로스 리전 스냅샷을 생성해야 합니다. 이 요구 사항을 충족하는 단계 조합은 무엇입니까? (두 개를 선택하세요.)",
    "options": {
      "A": "KMS 키를 생성하고 소스 AWS 리전에서 스냅샷 복사 권한을 구성합니다.",
      "B": "소스 AWS 리전에서 스냅샷 복사를 활성화합니다. 대상 AWS 리전에서 생성된 스냅샷 복사 권한의 이름을 지정합니다.",
      "C": "소스 AWS 리전에서 스냅샷 복사를 활성화합니다. 소스 AWS 리전에서 생성된 스냅샷 복사 권한의 이름을 지정합니다.",
      "D": "KMS 키를 생성하고 대상 AWS 리전에서 스냅샷 복사 권한을 구성합니다.",
      "E": "클러스터를 Multi-AZ 배포로 변환합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ Snapshot Copy Grant — 암호화된 스냅샷을 다른 리전으로 복사할 권한\n▸ KMS Key — Redshift 암호화 키\n▸ Cross-Region Snapshot — 재해 복구를 위한 다른 리전으로의 스냅샷 복제\n▸ Source Region vs Destination Region — 원본과 대상\n\n【정답 포인트】\nB + D 조합이 정답인 이유:\n• D: 대상 리전(destination)에 새로운 KMS 키 생성 및 스냅샷 복사 권한(grant) 생성\n  (스냅샷 복사 시 대상 리전에서 암호화 필요)\n• B: 소스 리전에서 스냅샷 복사 활성화하고, \"대상 리전\"에서 생성된 스냅샷 복사 권한 지정\n  (B는 \"대상 리전에서 생성된 권한의 이름을 지정\")\n\n【오답 체크】\n(A) \"소스 리전에 권한\" — 잘못됨, 권한은 \"대상 리전\"에 필요\n(C) \"소스 리전에 권한\" — 잘못됨, B와 비슷하지만 리전 오류\n(E) Multi-AZ 변환 — 크로스 리전 스냅샷과 무관, 같은 리전 고가용성\n\n【시험 포인트】\n크로스 리전 스냅샷 플로우:\n1. 대상 리전에 KMS 키 및 스냅샷 복사 권한 생성\n(D) 2. 소스 리전에서 스냅샷 복사 활성화 (B의 \"소스에서 활성화\")\n3. B에서 \"대상 리전의 권한 이름\" 지정 (권한 참조)\n암호화된 Redshift 스냅샷의 크로스 리전 복사 = 대상 리전의 KMS 권한 필수.",
    "en_q": "A company uses AWS Key Management Service (AWS KMS) to encrypt an Amazon Redshift cluster. The company wants to configure a cross-Region snapshot of the Redshift cluster as part of disaster recovery (DR) strategy. A data engineer needs to use the AWS CLI to create the cross-Region snapshot. Which combination of steps will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Create a KMS key and configure a snapshot copy grant in the source AWS Region.",
      "B": "In the source AWS Region, enable snapshot copying. Specify the name of the snapshot copy grant that is created in the destination AWS Region.",
      "C": "In the source AWS Region, enable snapshot copying. Specify the name of the snapshot copy grant that is created in the source AWS Region.",
      "D": "Create a KMS key and configure a snapshot copy grant in the destination AWS Region.",
      "E": "Convert the cluster to a Multi-AZ deployment."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/304581-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 210,
    "question": "회사가 Amazon S3를 사용하여 데이터 레이크를 구축합니다. 회사는 여러 소스 데이터베이스의 기록을 Apache Parquet 형식으로 복제해야 합니다. 대부분의 소스 데이터베이스는 Amazon RDS에서 호스팅됩니다. 그러나 한 소스 데이터베이스는 온프레미스 Microsoft SQL Server Enterprise 인스턴스입니다. 회사는 모든 소스 데이터베이스의 기존 데이터와 모든 향후 변경 사항을 S3 데이터 레이크에 복제하는 솔루션을 구현해야 합니다. 가장 비용 효율적으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기존 데이터를 복제하려면 하나의 AWS Glue 작업을 사용합니다. 향후 변경 사항을 복제하려면 두 번째 AWS Glue 작업을 사용합니다.",
      "B": "기존 데이터를 복제하려면 AWS Database Migration Service(AWS DMS)를 사용합니다. 향후 변경 사항을 복제하려면 AWS Glue 작업을 사용합니다.",
      "C": "기존 데이터와 향후 변경 사항을 복제하려면 AWS Database Migration Service(AWS DMS)를 사용합니다.",
      "D": "기존 데이터를 복제하려면 AWS Glue 작업을 사용합니다. 향후 변경 사항을 복제하려면 Amazon Kinesis Data Streams을 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS DMS (Database Migration Service) — 데이터베이스 마이그레이션 + CDC (Change Data Capture)\n▸ CDC (Change Data Capture) — 데이터 변경사항 실시간 추적\n▸ Heterogeneous Sources — RDS (관리형) + SQL Server (온프레미스) 혼합\n▸ \"비용 효율적\" — 통합 솔루션으로 비용 최소화\n\n【정답 포인트】\nC(AWS DMS)가 정답인 이유:\n• 단일 솔루션: DMS는 전체 마이그레이션(전체 + CDC) 처리\n• CDC 포함: DMS의 CDC 기능으로 변경사항 지속적 복제\n• 이기종 지원: RDS + 온프레미스 SQL Server 동시 지원\n• 비용 효율: 별도 Glue + DMS 조합보다 단순화\n• Parquet 변환: DMS의 타겟 설정으로 S3 저장소에 자동 Parquet 변환\n\n【오답 체크】\n(A) Glue만: CDC 기능 없음, 변경사항 추적 불가능\n(B) DMS + Glue: 이중 설정, 비용 증가, 유지보수 복잡\n(D) Glue + Kinesis: 복잡한 아키텍처, 비용 증가, Kinesis 관리 오버헤드\n\n【시험 포인트】\nDMS 활용:\n• Full Load Only = 초기 이관만 필요할 때\n• Full Load + CDC = 지속적 동기화 필요할 때 (선택지 C)\n• CDC Only = 초기 이관은 다른 방식, 변경사항만 DMS (드문 경우)\nRDS + 온프레미스 혼합 + S3 레이크 + 변경사항 추적 = DMS는 최적의 선택.",
    "en_q": "A company is using Amazon S3 to build a data lake. The company needs to replicate records from multiple source databases into Apache Parquet format. Most of the source databases are hosted on Amazon RDS. However, one source database is an on-premises Microsoft SQL Server Enterprise instance. The company needs to implement a solution to replicate existing data from all source databases and all future changes to the target S3 data lake. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Use one AWS Glue job to replicate existing data. Use a second AWS Glue job to replicate future changes.",
      "B": "Use AWS Database Migration Service (AWS DMS) to replicate existing data. Use AWS Glue jobs to replicate future changes.",
      "C": "Use AWS Database Migration Service (AWS DMS) to replicate existing data and future changes.",
      "D": "Use AWS Glue jobs to replicate existing data. Use Amazon Kinesis Data Streams to replicate future changes."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/304582-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 211,
    "question": "데이터 엔지니어는 소매 주문을 처리하는 데이터 파이프라인의 성능을 최적화해야 합니다. 주문 데이터는 매일 Amazon S3 버킷으로 수집됩니다. 데이터 엔지니어는 매주 한 번 주문 날짜를 기반으로 여러 날짜 범위에 대한 메트릭을 추출하기 위해 쿼리를 실행합니다. 데이터 엔지니어는 데이터 볼륨이 증가할 때 쿼리 성능이 저하되지 않도록 보장하는 최적화 솔루션이 필요합니다. 이 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "주문 날짜를 기반으로 데이터를 분할합니다. Amazon Athena를 사용하여 데이터를 쿼리합니다.",
      "B": "주문 날짜를 기반으로 데이터를 분할합니다. Amazon Redshift를 사용하여 데이터를 쿼리합니다.",
      "C": "로드 날짜를 기반으로 데이터를 분할합니다. Amazon EMR을 사용하여 데이터를 쿼리합니다.",
      "D": "로드 날짜를 기반으로 데이터를 분할합니다. Amazon Aurora를 사용하여 데이터를 쿼리합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Partitioning — S3 데이터를 디렉터리 구조로 분할하여 쿼리 성능 개선\n▸ Partition Pruning — 쿼리 시 필요한 파티션만 스캔 (비용 절감)\n▸ Order Date vs Load Date — 비즈니스 기준(order date) vs 기술적 기준(load date)\n▸ \"비용 효율적\" — 낮은 쿼리 비용\n\n【정답 포인트】\nA(Order Date + Athena)가 정답인 이유:\n• 파티션 전략: \"주문 날짜 기준으로 여러 날짜 범위 쿼리\" = order date로 파티션\n  (쿼리 조건: where order_date >= '2024-01-01' and order_date <= '2024-01-31')\n• Partition Pruning: Athena는 파티션된 데이터에서 필요한 파티션만 스캔\n• 비용: S3 SELECT 비용 기반, 스캔 데이터양 감소 = 비용 급락\n• 비용 효율: Athena는 스캔 데이터 GB당 과금 (Redshift는 클러스터 비용)\n\n【오답 체크】\n(B) Redshift: \"비용 효율적\" 아님, 클러스터 유지 비용 필요\n(C) EMR: 주간 배치 쿼리에 과도, Hadoop 인프라 관리 오버헤드\n(D) Aurora: 소규모 데이터 분석용, S3 데이터 대규모 처리 부적합\n\n【시험 포인트】\nS3 데이터 레이크 쿼리 최적화:\n1. 파티션 전략: 쿼리 패턴에 맞게 선택 (order date는 시간 범위 쿼리에 최적)\n2. 쿼리 엔진:\n   - Athena = 낮은 비용, 빈도 낮은 임시 쿼리 (주간 1회)\n   - Redshift = 고성능, 복잡한 조인, 높은 빈도\n   - EMR = 복잡한 데이터 변환 (MapReduce, Spark)\n\"주간 1회 범위 쿼리\" + \"비용 효율\" = Athena + order date 파티션.",
    "en_q": "A data engineer needs to optimize the performance of a data pipeline that handles retail orders. Data about the orders is ingested daily into an Amazon S3 bucket. The data engineer runs queries once each week to extract metrics from the orders data based the order date for multiple date ranges. The data engineer needs an optimization solution that ensures the query performance will not degrade when the volume of data increases. Which solution will meet this requirement MOST cost-effectively?",
    "en_opts": {
      "A": "Partition the data based on order date. Use Amazon Athena to query the data.",
      "B": "Partition the data based on order date. Use Amazon Redshift to query the data.",
      "C": "Partition the data based on load date. Use Amazon EMR to query the data.",
      "D": "Partition the data based on load date. Use Amazon Aurora to query the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305563-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 212,
    "question": "데이터 엔지니어가 판매 정보를 포함하는 두 개의 데이터셋을 가지고 있습니다(multiple cities and states). 하나의 데이터셋은 \"reference\"라고 명명되고, 다른 데이터셋은 \"primary\"라고 명명됩니다. 데이터 엔지니어는 primary 데이터셋의 city 및 state 컬럼의 특정 값 집합이 reference 데이터셋의 동일한 특정 값과 정확히 일치하는지 확인하는 솔루션이 필요합니다. 데이터 엔지니어는 AWS Glue 데이터 품질 작업에서 데이터 품질 정의 언어(DQDL) 규칙을 사용하려고 합니다. 이 요구 사항을 충족하는 규칙은 무엇입니까?",
    "options": {
      "A": "DatasetMatch \"reference\" \"city->ref_city, state->ref_state\" = 1.0",
      "B": "ReferentialIntegrity \"city,state\" \"reference.{ref_city,ref_state}\" = 1.0",
      "C": "DatasetMatch \"reference\" \"city->ref_city, state->ref_state\" = 100",
      "D": "ReferentialIntegrity \"city,state\" \"reference.{ref_city,ref_state}\" = 100"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DQDL (Data Quality Definition Language) — AWS Glue의 데이터 품질 규칙 언어\n▸ ReferentialIntegrity — 참조 무결성, 외래 키 검증 (한 테이블의 값이 다른 테이블에 존재하는지 확인)\n▸ DatasetMatch — 두 데이터셋 간 완전한 데이터 일치도 확인 (정확도 메트릭)\n▸ 값의 범위: 0.0~1.0 (0% ~ 100%)\n\n【정답 포인트】\nB(ReferentialIntegrity)가 정답인 이유:\n• 요구사항: \"primary의 city, state가 reference에 존재하는가?\" = 참조 무결성 검증\n• ReferentialIntegrity 규칙:\n  - \"city,state\" = primary 테이블의 검증 컬럼\n  - \"reference.{ref_city,ref_state}\" = reference 테이블의 참조 컬럼\n  - = 1.0 = 100% 일치 (모든 primary 값이 reference에 존재)\n• 예시: primary의 (New York, NY)가 reference의 ref_city, ref_state에 존재하는지 확인\n\n【오답 체크】\n(A) DatasetMatch: 두 테이블 \"전체\" 데이터 일치도 검증 (정규화 필요), 컬럼 매핑에 부적합\n(C/D) = 100: DQDL은 0.0~1.0 범위, 100은 잘못된 값\n\n【시험 포인트】\nDQDL 규칙 맵:\n• ReferentialIntegrity = 외래 키 검증 (한 테이블 → 다른 테이블)\n• DatasetMatch = 두 테이블 완전 일치도\n• Completeness = NULL 값 검증\n• Accuracy = 값의 정확도\n\"primary의 city/state가 reference에 존재하는가?\" = ReferentialIntegrity는 정의적 기능.",
    "en_q": "A data engineer has two datasets that contain sales information for multiple cities and states. One dataset is named reference, and the other dataset is named primary. The data engineer needs a solution to determine whether a specific set of values in the city and state columns of the primary dataset exactly match the same specific values in the reference dataset. The data engineer wants to use Data Quality Definition Language (DQDL) rules in an AWS Glue Data Quality job. Which rule will meet these requirements?",
    "en_opts": {
      "A": "DatasetMatch \"reference\" \"city->ref_city, state->ref_state\" = 1.0",
      "B": "ReferentialIntegrity \"city,state\" \"reference.{ref_city,ref_state}\" = 1.0",
      "C": "DatasetMatch \"reference\" \"city->ref_city, state->ref_state\" = 100",
      "D": "ReferentialIntegrity \"city,state\" \"reference.{ref_city,ref_state}\" = 100"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305001-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 213,
    "question": "회사가 고객 데이터를 포함하는 온프레미스 PostgreSQL 데이터베이스를 보유하고 있습니다. 회사는 고객 데이터를 Amazon Redshift 데이터 웨어하우스로 마이그레이션하려고 합니다. 회사는 온프레미스 데이터베이스와 AWS 간에 VPN 연결을 설정했습니다. 온프레미스 데이터베이스는 지속적으로 업데이트됩니다. 회사는 Amazon Redshift의 데이터가 가능한 한 빨리 업데이트되도록 해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "pg_dump 유틸리티를 사용하여 PostgreSQL 데이터베이스의 백업을 생성합니다. AWS Schema Conversion Tool(AWS SCT)을 사용하여 백업을 Amazon Redshift에 업로드합니다. 매일 밤 백업을 수행하는 cron 작업을 설정합니다. 매일 밤 백업을 Amazon Redshift에 업로드합니다.",
      "B": "AWS Database Migration Service(AWS DMS) 전체 로드 작업을 생성합니다. Amazon Redshift를 대상으로 설정합니다. 변경 데이터 캡처(CDC) 기능을 사용하도록 작업을 구성합니다.",
      "C": "pg_dump 유틸리티를 사용하여 PostgreSQL 데이터베이스의 백업을 생성합니다. 백업을 Amazon S3 버킷에 업로드합니다. COPY 명령어를 사용하여 데이터를 Amazon Redshift로 가져옵니다.",
      "D": "AWS Database Migration Service(AWS DMS) 전체 로드 작업을 생성합니다. Amazon Redshift를 대상으로 설정합니다. 매일 밤 데이터베이스를 Amazon Redshift에 전체 로드하도록 작업을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DMS CDC (Change Data Capture) — 변경사항을 실시간으로 추적하여 대상에 적용\n▸ \"지속적으로 업데이트\" — 지속적인 동기화 필요\n▸ \"가능한 한 빨리\" — 실시간 또는 준실시간 동기화\n▸ Full Load + CDC — 초기 적재 + 변경사항 추적\n\n【정답 포인트】\nB(DMS Full Load + CDC)가 정답인 이유:\n• Full Load: 초기 데이터 전체 마이그레이션 (PostgreSQL → Redshift)\n• CDC 활성화: 온프레미스 PostgreSQL의 변경사항(INSERT, UPDATE, DELETE)을 실시간 감지\n• 실시간 동기화: Redshift의 데이터가 소스와 \"거의 동일\"한 상태 유지\n• VPN 활용: DMS가 VPN을 통해 온프레미스 데이터베이스 접근\n• \"가능한 한 빨리\" 충족: CDC는 변경사항을 즉시 포착 (매일 밤이 아닌 실시간)\n\n【오답 체크】\n(A) pg_dump + 매일 밤 cron: 지연시간 존재 (\"가능한 한 빨리\" 미달성), 전체 백업 매번 필요 = 비효율\n(C) pg_dump + S3 + COPY: 초기 로드만 가능, 변경사항 동기화 미포함\n(D) DMS 매일 밤 전체 로드: CDC 미활성, 변경사항만 복제하지 않고 매번 전체 데이터 로드 = 비효율\n\n【시험 포인트】\nDMS 마이그레이션 전략:\n• Full Load Only = 일회성 마이그레이션 (현재 상태만 이관)\n• Full Load + CDC = 지속적 동기화 필요 (초기 + 변경사항)\n• CDC Only = 초기는 다른 방식, 변경사항만 추적 (드문 경우)\n\"지속적 업데이트 + 가능한 한 빨리\" = Full Load + CDC는 필수 조합.",
    "en_q": "A company has an on-premises PostgreSQL database that contains customer data. The company wants to migrate the customer data to an Amazon Redshift data warehouse. The company has established a VPN connection between the on-premises database and AWS. The on-premises database is continuously updated. The company must ensure that the data in Amazon Redshift is updated as quickly as possible. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use the pg_dump utility to generate a backup of the PostgreSQL database. Use the AWS Schema Conversion Tool (AWS SCT) to upload the backup to Amazon Redshift. Set up a cron job to perform a backup. Upload the backup to Amazon Redshift every night.",
      "B": "Create an AWS Database Migration Service (AWS DMS) full-load task. Set Amazon Redshift as the target. Configure the task to use the change data capture (CDC) feature.",
      "C": "Use the pg_dump utility to generate a backup of the PostgreSQL database. Upload the backup to an Amazon S3 bucket. Use the COPY command to import the data into Amazon Redshift.",
      "D": "Create an AWS Database Migration Service (AWS DMS) full-load task. Set Amazon Redshift as the target. Configure the task to perform a full load of the database to Amazon Redshift every night."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305002-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 214,
    "question": "한 회사가 CSV 및 JSON 형식으로 여러 개의 새로운 데이터셋을 보유하고 있습니다. 데이터 엔지니어는 SQL 쿼리를 사용하여 데이터를 분석할 데이터 분석 팀이 데이터에 액세스할 수 있도록 해야 합니다. 가장 비용 효율적인 방식으로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon RDS MySQL 클러스터를 생성합니다. AWS Glue를 사용하여 CSV 및 JSON 파일을 변환하여 데이터베이스 테이블에 로드합니다. 데이터 분석팀이 MySQL 클러스터에 액세스할 수 있도록 허용합니다.",
      "B": "새로운 데이터를 포함하는 AWS Glue DataBrew 프로젝트를 생성합니다. DataBrew 프로젝트를 데이터 분석팀이 사용할 수 있도록 합니다.",
      "C": "데이터를 Amazon S3 버킷에 저장합니다. AWS Glue 크롤러를 사용하여 S3 버킷을 테이블로 카탈로그합니다. 데이터 사용량 임계값이 있는 Amazon Athena 워크그룹을 생성합니다. 데이터 분석팀이 Athena 워크그룹에 액세스할 수 있도록 허용합니다.",
      "D": "데이터를 Amazon QuickSight의 SPICE(Super-fast, Parallel, In-memory Calculation Engine)로 로드합니다. 데이터 분석팀이 QuickSight에서 분석 및 대시보드를 생성할 수 있도록 합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n\n【정답 포인트】\n\n【오답 체크】\n\n【시험 포인트】",
    "en_q": "A company has several new datasets in CSV and JSON formats. A data engineer needs to make the data available to a team of data analysts who will analyze the data by using SQL queries. Which solution will meet these requirements in the MOST cost-effective way?",
    "en_opts": {
      "A": "Create an Amazon RDS MySQL cluster. Use AWS Glue to transform and load the CSV and JSON files into database tables. Provide the data analysts access to the MySQL cluster.",
      "B": "Create an AWS Glue DataBrew project that contains the new data. Make the DataBrew project available to the data analysts.",
      "C": "Store the data in an Amazon S3 bucket. Use an AWS Glue crawler to catalog the S3 bucket as tables. Create an Amazon Athena workgroup that has a data usage threshold. Grant the data analysts access to the Athena workgroup.",
      "D": "Load the data into Super-fast, Parallel, In-memory Calculation Engine (SPICE) in Amazon QuickSight. Allow the data analysts to create analyses and dashboards in QuickSight."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305564-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 215,
    "question": "소매 회사는 Amazon Aurora 테이블(Orders)에 주문 정보를 저장합니다. 회사는 Orders 테이블에서 최소 지연 시간으로 운영 리포트를 생성해야 합니다. Orders 테이블에는 수십억 개의 행이 포함되어 있으며 초당 100,000개 이상의 트랜잭션이 발생할 수 있습니다. 마케팅 팀은 Orders 데이터를 마케팅 팀의 데이터 웨어하우스에 있는 Amazon Redshift 테이블(Campaigns)과 조인해야 합니다. 운영 Aurora 데이터베이스에 영향을 주지 않아야 합니다. 가장 적은 운영 노력으로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Database Migration Service(AWS DMS) Serverless를 사용하여 Orders 테이블을 Amazon Redshift에 복제합니다. Amazon Redshift에서 구체화된 뷰를 생성하여 Campaigns 테이블과 조인합니다.",
      "B": "Aurora zero-ETL 통합을 Amazon Redshift와 함께 사용하여 Orders 테이블을 복제합니다. Amazon Redshift에서 구체화된 뷰를 생성하여 Campaigns 테이블과 조인합니다.",
      "C": "AWS Glue를 사용하여 Orders 테이블을 Amazon Redshift에 복제합니다. Amazon Redshift에서 구체화된 뷰를 생성하여 Campaigns 테이블과 조인합니다.",
      "D": "연합 쿼리를 사용하여 Aurora에서 직접 Orders 테이블을 쿼리합니다. Amazon Redshift에서 구체화된 뷰를 생성하여 Campaigns 테이블과 조인합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n\n【정답 포인트】\n\n【오답 체크】\n\n【시험 포인트】",
    "en_q": "A retail company stores order information in an Amazon Aurora table named Orders. The company needs to create operational reports from the Orders table with minimal latency. The Orders table contains billions of rows, and over 100,000 transactions can occur each second. A marketing team needs to join the Orders data with an Amazon Redshift table named Campaigns in the marketing team's data warehouse. The operational Aurora database must not be affected. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Use AWS Database Migration Service (AWS DMS) Serverless to replicate the Orders table to Amazon Redshift. Create a materialized view in Amazon Redshift to join with the Campaigns table.",
      "B": "Use the Aurora zero-ETL integration with Amazon Redshift to replicate the Orders table. Create a materialized view in Amazon Redshift to join with the Campaigns table.",
      "C": "Use AWS Glue to replicate the Orders table to Amazon Redshift. Create a materialized view in Amazon Redshift to join with the Campaigns table.",
      "D": "Use federated queries to query the Orders table directly from Aurora. Create a materialized view in Amazon Redshift to join with the Campaigns table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305003-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 216,
    "question": "한 회사가 Amazon Redshift에 CSV 파일을 수집하는 새로운 애플리케이션을 구축하고 있습니다. 회사는 애플리케이션의 프론트엔드를 개발했습니다. 파일은 Amazon S3 버킷에 저장됩니다. 파일 크기는 5MB 이하입니다. 데이터 엔지니어는 CSV 파일에 대한 추출, 변환 및 로드(ETL) 파이프라인을 개발하고 있습니다. 데이터 엔지니어는 Redshift 클러스터와 파일의 데이터를 Redshift 클러스터로 복사하는 AWS Lambda 함수를 구성했습니다. 데이터 엔지니어가 수행해야 할 추가 단계는 무엇입니까?",
    "options": {
      "A": "S3 이벤트 알림을 Amazon EventBridge로 전송하도록 버킷을 구성합니다. S3 새 객체 생성 이벤트와 일치하는 EventBridge 규칙을 구성합니다. Lambda 함수를 대상으로 설정합니다.",
      "B": "S3 버킷이 Amazon Simple Queue Service(Amazon SQS) 큐로 S3 이벤트 알림을 전송하도록 구성합니다. Lambda 함수가 큐를 처리하도록 구성합니다.",
      "C": "AWS Database Migration Service(AWS DMS)를 구성하여 새 S3 객체를 Amazon Kinesis Data Streams의 데이터 스트림으로 스트리밍합니다. Lambda 함수를 데이터 스트림의 대상으로 설정합니다.",
      "D": "S3 새 객체 생성 이벤트와 일치하는 Amazon EventBridge 규칙을 구성합니다. 규칙의 대상으로 Amazon Simple Queue Service(Amazon SQS) 큐를 설정합니다. Lambda 함수가 큐를 처리하도록 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n\n【정답 포인트】\n\n【오답 체크】\n\n【시험 포인트】",
    "en_q": "A company is building a new application that ingests CSV files into Amazon Redshift. The company has developed the frontend for the application. The files are stored in an Amazon S3 bucket. Files are no larger than 5 MB. A data engineer is developing the extract, transform, and load (ETL) pipeline for the CSV files. The data engineer configured a Redshift cluster and an AWS Lambda function that copies the data out of the files into the Redshift cluster. Which additional steps should the data engineer perform to meet these requirements?",
    "en_opts": {
      "A": "Configure the bucket to send S3 event notifications to Amazon EventBridge. Configure an EventBridge rule that matches S3 new object created events. Set the Lambda function as the target.",
      "B": "Configure the $3 bucket to send S3 event notifications to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the Lambda function to process the queue.",
      "C": "Configure AWS Database Migration Service (AWS DMS) to stream new S3 objects to a data stream in Amazon Kinesis Data Streams. Set the Lambda function as the target of the data stream.",
      "D": "Configure an Amazon EventBridge rule that matches S3 new object created events. Set an Amazon Simple Queue Service (Amazon SQS) queue as the target of the rule. Configure the Lambda function to process the queue."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305565-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 217,
    "question": "한 회사는 Amazon Redshift 테이블에 민감한 데이터를 저장합니다. 회사는 특정 사용자에게 민감한 데이터에 액세스할 수 있는 기능을 제공해야 합니다. 회사는 데이터 중복을 생성하면 안 됩니다. 고객 지원 사용자는 민감한 데이터의 마지막 4자만 볼 수 있어야 합니다. 감사 사용자는 민감한 데이터의 전체 값을 볼 수 있어야 합니다. 다른 사용자는 민감한 정보에 액세스할 수 없어야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 사용자 역할에 따라 액세스를 허용하는 동적 데이터 마스킹 정책을 생성합니다. 특정 액세스 권한이 있는 IAM 역할을 생성합니다. 민감한 데이터가 포함된 열에 마스킹 정책을 연결합니다.",
      "B": "Redshift 클러스터에서 메타데이터 보안을 활성화합니다. 고객 지원 사용자 및 감사 사용자를 위한 IAM 사용자 및 IAM 역할을 생성합니다. Redshift 클러스터의 메타데이터를 볼 수 있는 권한을 IAM 사용자 및 IAM 역할에 부여합니다.",
      "C": "각 사용자 역할에 따라 액세스를 허용하는 행 수준 보안 정책을 생성합니다. 특정 액세스 권한이 있는 IAM 역할을 생성합니다. 테이블에 보안 정책을 연결합니다.",
      "D": "AWS Glue 작업을 생성하여 민감한 데이터를 수정하고 데이터를 새 Redshift 테이블에 로드합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n정답 A번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 A번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A company stores sensitive data in an Amazon Redshift table. The company needs to give specific users the ability to access the sensitive data. The company must not create duplication in the data. Customer support users must be able to see the last four characters of the sensitive data. Audit users must be able to see the full value of the sensitive data. No other users can have the ability to access the sensitive information. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a dynamic data masking policy to allow access based on each user role. Create IAM roles that have specific access permissions. Attach the masking policy to the column that contains sensitive data.",
      "B": "Enable metadata security on the Redshift cluster. Create IAM users and IAM roles for the customer support users and the audit users. Grant the IAM users and IAM roles permissions to view the metadata in the Redshift cluster.",
      "C": "Create a row-level security policy to allow access based on each user role. Create IAM roles that have specific access permissions. Attach the security policy to the table.",
      "D": "Create an AWS Glue job to redact the sensitive data and to load the data into a new Redshift table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305566-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 218,
    "question": "데이터 엔지니어는 AWS Lake Formation을 사용하여 Amazon S3 버킷에 저장된 데이터에 대한 액세스를 관리합니다. 데이터 엔지니어는 버킷의 특정 파일 위치(s3://examplepath)에서 데이터를 발견하도록 AWS Glue 크롤러를 구성합니다. 크롤러 실행이 다음 오류로 실패합니다: \"S3 위치: s3://examplepath가 등록되지 않았습니다.\" 데이터 엔지니어는 오류를 해결해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue 크롤러의 IAM 역할에 적절한 IAM 정책을 연결하여 크롤러가 S3 위치를 읽을 수 있는 권한을 부여합니다.",
      "B": "Lake Formation에서 S3 위치를 등록하여 크롤러가 데이터에 액세스할 수 있도록 합니다.",
      "C": "새 AWS Glue 데이터베이스를 생성합니다. 크롤러를 위해 데이터베이스에 올바른 권한을 할당합니다.",
      "D": "교차 계정 액세스를 허용하도록 S3 버킷 정책을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n정답 B번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 B번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A data engineer uses AWS Lake Formation to manage access to data that is stored in an Amazon S3 bucket. The data engineer configures an AWS Glue crawler to discover data at a specific file location in the bucket, s3://examplepath. The crawler execution fails with the following error: \"The S3 location: s3://examplepath is not registered.\" The data engineer needs to resolve the error. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Attach an appropriate IAM policy to the IAM role of the AWS Glue crawler to grant the crawler permission to read the S3 location.",
      "B": "Register the S3 location in Lake Formation to allow the crawler to access the data.",
      "C": "Create a new AWS Glue database. Assign the correct permissions to the database for the crawler.",
      "D": "Configure the S3 bucket policy to allow cross-account access."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305567-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 219,
    "question": "한 회사는 AWS에서 데이터 레이크와 데이터 웨어하우스를 구축했습니다. 회사는 현재 데이터 저장 솔루션을 개선하기 위해 데이터 카탈로그를 구현하려고 합니다. 회사는 모든 자산에 대한 비즈니스 메타데이터 및 용어사전 정보를 데이터 카탈로그에 추가할 수 있기를 원합니다. 가장 적은 운영 오버헤드로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue Catalog를 사용합니다. 비즈니스 용어사전을 위한 사용자 테이블을 생성합니다. AWS Glue API를 사용하여 테이블 속성을 변경하여 비즈니스 메타데이터를 추가합니다. 메타데이터에 액세스하기 위한 웹 애플리케이션을 생성합니다.",
      "B": "Apache Hive 메타스토어를 사용합니다. 비즈니스 용어사전을 위한 사용자 테이블을 생성합니다. ALTER TABLE 명령을 사용하여 테이블 속성을 변경하여 비즈니스 메타데이터를 추가합니다. 메타데이터에 액세스하기 위한 웹 애플리케이션을 생성합니다.",
      "C": "Amazon DataZone을 사용합니다. 비즈니스 용어사전을 생성합니다. 메타데이터 양식을 생성합니다. Amazon DataZone 데이터 포털을 사용하여 메타데이터에 액세스합니다.",
      "D": "Amazon OpenSearch Service를 사용합니다. 비즈니스 용어사전을 위한 인덱스를 생성합니다. 비즈니스 메타데이터를 위한 두 번째 인덱스를 생성합니다. OpenSearch Service 대시보드를 사용하여 메타데이터에 액세스합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n정답 C번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 C번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A company built a data lake and a data warehouse on AWS. The company wants to implement a data catalog to enhance the current data storage solutions. The company wants to have the capability to add business metadata and glossary information to the data catalog for every asset. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use AWS Glue Catalog. Create a user table for the business glossary. Use the AWS Glue API to change table properties to add business metadata. Create a web application to access the metadata.",
      "B": "Use an Apache Hive metastore. Create a user table for the business glossary. Use the ALTER TABLE command to change table properties to add business metadata. Create a web application to access the metadata.",
      "C": "Use Amazon DataZone. Create the business glossaries. Create metadata forms. Use the Amazon DataZone data portal to access the metadata.",
      "D": "Use Amazon OpenSearch Service. Create an index for the business glossary. Create a second index for the business metadata. Use the OpenSearch Service dashboard to access the metadata."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/304583-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 220,
    "question": "데이터 엔지니어는 고객 계정 정보를 포함하는 테이블에서 오래된 고객 레코드를 제거하기 위해 AWS Glue ETL 작업을 사용하고 있습니다. 데이터 엔지니어는 monthly_accounts_update 테이블에 존재하는 고객을 고객 계정 테이블에서 제거하는 다음 SQL 명령을 사용하고 있습니다: MERGE INTO accounts t USING monthly_accounts_update s ON t.customer = s.customer - WHEN MATCHED - THEN DELETE - 데이터 엔지니어가 SQL 명령을 실행할 때 어떤 일이 발생합니까?",
    "options": {
      "A": "고객 계정 테이블과 monthly_accounts_update 테이블 모두에 존재하는 모든 고객 레코드가 accounts 테이블에서 삭제됩니다.",
      "B": "두 테이블 모두에 있는 고객 레코드만 고객 계정 테이블에 유지됩니다.",
      "C": "monthly_accounts_update 테이블이 삭제됩니다.",
      "D": "AWS Glue에서 명령 구문이 유효하지 않으므로 레코드가 삭제되지 않습니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n정답 A번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 A번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A data engineer is using an AWS Glue ETL job to remove outdated customer records from a table that contains customer account information. The data engineer is using the following SQL command to remove customers that exist in a table named monthly_accounts_update table from the customer accounts table: MERGE INTO accounts t USING monthly_accounts_update s ON t.customer = s.customer - WHEN MATCHED - THEN DELETE - What will happen when the data engineer runs the SQL command?",
    "en_opts": {
      "A": "All customer records that exist in both the customer accounts table and the monthly_accounts_update table will be deleted from the accounts table.",
      "B": "Only customer records that are present in both tables will be retained in the customer accounts table.",
      "C": "The monthly_accounts_update table will be deleted.",
      "D": "No records will be deleted because the command syntax is not valid in AWS Glue."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305095-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 221,
    "question": "한 회사는 판매업체로부터 마케팅 캠페인 데이터를 받습니다. 회사는 40~60분마다 Amazon S3 버킷에 데이터를 수집합니다. 데이터는 CSV 형식입니다. 파일 크기는 100KB~300KB입니다. 데이터 엔지니어는 각 파일의 콘텐츠를 Amazon Redshift에 업로드하기 위한 추출, 변환 및 로드(ETL) 파이프라인을 설정해야 합니다. 가장 적은 운영 오버헤드로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Redshift에 연결하고 COPY 명령을 실행하는 AWS Lambda 함수를 생성합니다. Amazon S3 업로드 트리거를 기반으로 Lambda 함수를 호출하는 Amazon EventBridge를 사용합니다.",
      "B": "Amazon Data Firehose 스트림을 생성합니다. S3 버킷에서 데이터를 가져오도록 AWS Lambda 함수를 소스로 사용하도록 스트림을 구성합니다. Amazon Redshift를 대상으로 설정합니다.",
      "C": "Amazon Redshift Spectrum을 사용하여 S3 버킷을 쿼리합니다. S3 버킷에 대한 AWS Glue Crawler를 구성하여 AWS Glue Data Catalog의 메타데이터를 업데이트합니다.",
      "D": "AWS Database Migration Service(AWS DMS) 작업을 생성합니다. 마이그레이션할 적절한 데이터 스키마를 지정합니다. 사용할 마이그레이션의 적절한 유형을 지정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n정답 A번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 A번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A company receives marketing campaign data from a vendor. The company ingests the data into an Amazon S3 bucket every 40 to 60 minutes. The data is in CSV format. File sizes are between 100 KB and 300 KB. A data engineer needs to set-up an extract, transform, and load (ETL) pipeline to upload the content of each file to Amazon Redshift. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create an AWS Lambda function that connects to Amazon Redshift and runs a COPY command. Use Amazon EventBridge to invoke the Lambda function based on an Amazon S3 upload trigger.",
      "B": "Create an Amazon Data Firehose stream. Configure the stream to use an AWS Lambda function as a source to pull data from the S3 bucket. Set Amazon Redshift as the destination.",
      "C": "Use Amazon Redshift Spectrum to query the S3 bucket. Configure an AWS Glue Crawler for the S3 bucket to update metadata in an AWS Glue Data Catalog.",
      "D": "Creates an AWS Database Migration Service (AWS DMS) task. Specify an appropriate data schema to migrate. Specify the appropriate type of migration to use."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305568-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 222,
    "question": "한 회사는 Amazon S3 버킷에 차원 테이블을 구축하려고 합니다. 버킷에는 1000만 개의 레코드를 포함하는 히스토리 데이터가 있습니다. 히스토리 데이터 크기는 1TB입니다. 데이터 엔지니어는 매일 기본 테이블에서 최대 10,000개 레코드에 대한 변경사항을 업데이트해야 하는 솔루션이 필요합니다. 가장 낮은 런타임으로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EMR에서 Apache Spark 작업을 개발하여 히스토리 데이터 및 새 변경사항을 두 개의 Spark DataFrame으로 읽습니다. Spark 업데이트 메서드를 사용하여 기본 테이블을 업데이트합니다.",
      "B": "AWS Glue Python 작업을 개발하여 히스토리 데이터 및 새 변경사항을 두 개의 Pandas DataFrame으로 읽습니다. Pandas 업데이트 메서드를 사용하여 기본 테이블을 업데이트합니다.",
      "C": "AWS Glue Apache Spark 작업을 개발하여 히스토리 데이터 및 새 변경사항을 두 개의 Spark DataFrame으로 읽습니다. Spark 업데이트 메서드를 사용하여 기본 테이블을 업데이트합니다.",
      "D": "Amazon EMR 작업을 개발하여 새 변경사항을 Apache Spark DataFrame으로 읽습니다. Apache Hudi 프레임워크를 사용하여 Amazon S3에 기본 테이블을 생성합니다. Spark 업데이트 메서드를 사용하여 기본 테이블을 업데이트합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n정답 D번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 D번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A company wants to build a dimension table in an Amazon S3 bucket. The bucket contains historical data that includes 10 million records. The historical data is 1 TB in size. A data engineer needs a solution to update changes for up to 10,000 records in the base table every day. Which solution will meet this requirement with the LOWEST runtime?",
    "en_opts": {
      "A": "Develop an Apache Spark job in Amazon EMR to read the historical data and the new changes into two Spark DataFrames. Use the Spark update method to update the base table.",
      "B": "Develop an AWS Glue Python job to read the historical data and new changes into two Pandas DataFrames. Use the Pandas update method to update the base table.",
      "C": "Develop an AWS Glue Apache Spark job to read the historical data and new changes into two Spark DataFrames. Use the Spark update method to update the base table.",
      "D": "Develop an Amazon EMR job to read new changes into Apache Spark DataFrames. Use the Apache Hudi framework to create the base table in Amazon S3. Use the Spark update method to update the base table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305569-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 223,
    "question": "데이터 엔지니어는 데이터셋에 대한 변환을 수행하기 위해 AWS Glue Apache Spark ETL 작업을 개발합니다. 데이터 엔지니어가 작업을 실행할 때 작업에서 \"No space left on device\"라는 오류가 반환됩니다. 데이터 엔지니어는 오류의 원인을 파악하고 솔루션을 제공해야 합니다. 가장 비용 효율적으로 이 요구사항을 충족하는 단계의 조합은 무엇입니까? (2개를 선택하세요.)",
    "options": {
      "A": "데이터 스큐를 해결하기 위해 워커를 수직으로 확장합니다.",
      "B": "Spark UI 및 AWS Glue 메트릭을 사용하여 Spark 실행기의 데이터 스큐를 모니터링합니다.",
      "C": "데이터 스큐를 해결하기 위해 워커 수를 수평으로 확장합니다.",
      "D": "--write-shuffie-files-to-s3 작업 파라미터를 활성화합니다. 솔팅 기법을 사용합니다.",
      "E": "Amazon CloudWatch의 오류 로그를 사용하여 데이터 스큐를 모니터링합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n정답 BD번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 BD번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A data engineer develops an AWS Glue Apache Spark ETL job to perform transformations on a dataset. When the data engineer runs the job, the job returns an error that reads, \"No space left on device.\" The data engineer needs to identify the source of the error and provide a solution. Which combinations of steps will meet this requirement MOST cost-effectively? (Choose two.)",
    "en_opts": {
      "A": "Scale out the workers vertically to address data skewness.",
      "B": "Use the Spark UI and AWS Glue metrics to monitor data skew in the Spark executors.",
      "C": "Scale out the number of workers horizontally to address data skewness.",
      "D": "Enable the --write-shuffie-files-to-s3 job parameter. Use the salting technique.",
      "E": "Use error logs in Amazon CloudWatch to monitor data skew."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305570-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 224,
    "question": "한 회사는 Amazon RDS 인스턴스, AWS Glue 작업 및 Amazon S3 버킷을 사용하는 데이터 파이프라인을 보유하고 있습니다. RDS 인스턴스 및 AWS Glue 작업은 VPC의 프라이빗 서브넷에서 실행되고 동일한 보안 그룹에 있습니다. 사용자가 AWS Glue 작업이 RDS 인스턴스에 연결되는 것을 방지하는 보안 그룹을 변경했습니다. 변경 후 보안 그룹에는 특정 IP 주소의 인바운드 SSH 트래픽을 허용하는 단일 규칙이 포함됩니다. 회사는 연결 문제를 해결해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "모든 TCP 포트에서 모든 TCP 트래픽을 허용하는 인바운드 규칙을 추가합니다. 보안 그룹을 소스로 설정합니다.",
      "B": "모든 TCP 포트에서 모든 TCP 트래픽을 허용하는 인바운드 규칙을 추가합니다. RDS 인스턴스의 프라이빗 IP 주소를 소스로 설정합니다.",
      "C": "모든 TCP 포트에서 모든 TCP 트래픽을 허용하는 인바운드 규칙을 추가합니다. RDS 인스턴스의 DNS 이름을 소스로 설정합니다.",
      "D": "기존 SSH 규칙의 소스를 RDS 인스턴스의 프라이빗 IP 주소로 바꿉니다. 인바운드 SSH 규칙과 동일한 소스, 대상 및 프로토콜로 아웃바운드 규칙을 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n정답 A번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 A번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A company has a data pipeline that uses an Amazon RDS instance, AWS Glue jobs, and an Amazon S3 bucket. The RDS instance and AWS Glue jobs run in a private subnet of a VPC and in the same security group. A user made a change to the security group that prevents the AWS Glue jobs from connecting to the RDS instance. After the change, the security group contains a single rule that allows inbound SSH traffic from a specific IP address. The company must resolve the connectivity issue. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Add an inbound rule that allows all TCP traffic on all TCP ports. Set the security group as the source.",
      "B": "Add an inbound rule that allows all TCP traffic on all UDP ports. Set the private IP address of the RDS instance as the source.",
      "C": "Add an inbound rule that allows all TCP traffic on all TCP ports. Set the DNS name of the RDS instance as the source.",
      "D": "Replace the source of the existing SSH rule with the private IP address of the RDS instance. Create an outbound rule with the same source, destination, and protocol as the inbound SSH rule."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/311801-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 225,
    "question": "한 회사는 비즈니스 인텔리전스 리포트를 처리하기 위한 새로운 데이터 파이프라인을 구축합니다. 사용자들은 리포트에서 데이터가 누락되었음을 알아챘습니다. 데이터 엔지니어는 데이터가 스토리지에 추가되기 전 단계에서 null 값을 포함하는 열에 대한 데이터 품질 검사와 참조 무결성 검사를 추가해야 합니다. 가장 적은 운영 오버헤드로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon SageMaker Data Wrangler를 사용하여 데이터 품질 및 인사이트 리포트를 생성합니다.",
      "B": "AWS Glue ETL 작업을 사용하여 데이터에 대한 데이터 품질 평가 변환을 수행합니다. 요청된 열에 대해 IsComplete 규칙을 사용합니다. 각 조인에 대해 ReferentialIntegrity 규칙을 사용합니다.",
      "C": "AWS Glue ETL 작업을 사용하여 데이터에 대한 SQL 변환을 수행하여 요청된 열에 null 값이 포함되어 있는지 확인합니다. 두 번째 SQL 변환을 사용하여 참조 무결성을 확인합니다.",
      "D": "Amazon SageMaker Data Wrangler와 사용자 정의 Python 변환을 사용하여 null 값 및 참조 무결성을 확인하는 사용자 정의 규칙을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n정답 B번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 B번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A company builds a new data pipeline to process data for business intelligence reports. Users have noticed that data is missing from the reports. A data engineer needs to add a data quality check for columns that contain null values and for referential integrity at a stage before the data is added to storage. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon SageMaker Data Wrangler to create a Data Quality and Insights report.",
      "B": "Use AWS Glue ETL jobs to perform a data quality evaluation transform on the data. Use an IsComplete rule on the requested columns. Use a ReferentialItegrity rule for each join.",
      "C": "Use AWS Glue ETL jobs to perform a SQL transform on the data to determine whether requested column contain null values. Use a second SQL transform to check referential integrity.",
      "D": "Use Amazon SageMaker Data Wrangler and a custom Python transform to create custom rules to check for null values and referential integrity."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/304584-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 226,
    "question": "한 회사는 AWS에서 데이터 파이프라인을 설정합니다. 파이프라인은 Amazon S3 버킷에서 클라이언트 데이터를 추출하고 품질 검사를 수행하며 데이터를 변환합니다. 파이프라인은 처리된 데이터를 관계형 데이터베이스에 저장합니다. 회사는 처리된 데이터를 향후 쿼리에 사용합니다. 가장 비용 효율적으로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue ETL을 사용하여 S3 버킷에서 데이터를 추출하고 변환을 수행합니다. AWS Glue Data Quality를 사용하여 제안된 품질 규칙을 적용합니다. 데이터 및 품질 검사 결과를 Amazon RDS for MySQL 인스턴스에 로드합니다.",
      "B": "AWS Glue Studio를 사용하여 S3 버킷에서 데이터를 추출합니다. AWS Glue DataBrew를 사용하여 변환 및 품질 검사를 수행합니다. 처리된 데이터를 Amazon RDS for MySQL 인스턴스에 로드합니다. 품질 검사 결과를 새 S3 버킷에 로드합니다.",
      "C": "AWS Glue ETL을 사용하여 S3 버킷에서 데이터를 추출하고 변환을 수행합니다. AWS Glue DataBrew를 사용하여 품질 검사를 수행합니다. 처리된 데이터 및 품질 검사 결과를 새 S3 버킷에 로드합니다.",
      "D": "AWS Glue Studio를 사용하여 S3 버킷에서 데이터를 추출합니다. AWS Glue DataBrew를 사용하여 변환 및 품질 검사를 수행합니다. 처리된 데이터 및 품질 검사 결과를 Amazon RDS for MySQL 인스턴스에 로드합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n정답 A번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 A번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A company is setting up a data pipeline in AWS. The pipeline extracts client data from Amazon S3 buckets, performs quality checks, and transforms the data. The pipeline stores the processed data in a relational database. The company will use the processed data for future queries. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Use AWS Glue ETL to extract the data from the S3 buckets and perform the transformations. Use AWS Glue Data Quality to enforce suggested quality rules. Load the data and the quality check results into an Amazon RDS for MySQL instance.",
      "B": "Use AWS Glue Studio to extract the data from the S3 buckets. Use AWS Glue DataBrew to perform the transformations and quality checks. Load the processed data into an Amazon RDS for MySQL instance. Load the quality check results into a new S3 bucket.",
      "C": "Use AWS Glue ETL to extract the data from the S3 buckets and perform the transformations. Use AWS Glue DataBrew to perform quality checks. Load the processed data and the quality check results into a new S3 bucket.",
      "D": "Use AWS Glue Studio to extract the data from the S3 buckets. Use AWS Glue DataBrew to perform the transformations and quality checks. Load the processed data and quality check results into an Amazon RDS for MySQL instance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305571-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 227,
    "question": "한 회사는 Amazon Redshift를 데이터 웨어하우스 솔루션으로 사용합니다. 회사가 Amazon Redshift에 저장하는 데이터셋 중 하나에 업체의 데이터가 포함되어 있습니다. 최근 업체는 회사에 업체의 데이터를 주당 한 번씩 업체의 Amazon S3 버킷으로 전송해 달라고 요청했습니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Redshift 데이터 웨어하우스에 연결하는 AWS Lambda 함수를 생성합니다. Redshift COPY 명령을 사용하여 필요한 데이터를 업체의 S3 버킷으로 복사하도록 Lambda 함수를 구성합니다. 일정에 따라 작동하도록 합니다.",
      "B": "Redshift 데이터 웨어하우스에 연결하는 AWS Glue 작업을 생성합니다. Redshift UNLOAD 명령을 사용하여 필요한 데이터를 업체의 S3 버킷으로 로드하도록 AWS Glue 작업을 구성합니다. 일정에 따라 작동하도록 합니다.",
      "C": "Amazon Redshift 데이터 공유 기능을 사용합니다. 업체의 S3 버킷을 대상으로 설정합니다. 소스를 필요한 데이터를 선택하는 사용자 정의 SQL 쿼리로 구성합니다.",
      "D": "Amazon Redshift Spectrum을 구성하여 업체의 S3 버킷을 대상으로 사용합니다. 양방향 데이터 쿼리를 활성화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n정답 B번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 B번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A company uses Amazon Redshift as a data warehouse solution. One of the datasets that the company stores in Amazon Redshift contains data for a vendor. Recently, the vendor asked the company to transfer the vendor's data into the vendor's Amazon S3 bucket once each week. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Create an AWS Lambda function to connect to the Redshift data warehouse. Configure the Lambda function to use the Redshift COPY command to copy the required data to the vendor's S3 bucket on a schedule.",
      "B": "Create an AWS Glue job to connect to the Redshift data warehouse. Configure the AWS Glue job to use the Redshift UNLOAD command to load the required data to the vendor's S3 bucket on a schedule.",
      "C": "Use the Amazon Redshift data sharing feature. Set the vendor's S3 bucket as the destination. Configure the source to be as a custom SQL query that selects the required data.",
      "D": "Configure Amazon Redshift Spectrum to use the vendor's S3 bucket a destination, Enable data querying in both directions."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305573-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 228,
    "question": "한 회사는 두 부서에서 공유하는 Amazon Redshift 클러스터를 데이터 웨어하우스로 사용합니다. 보안 정책을 준수하기 위해 각 부서는 고유한 액세스 권한을 가져야 합니다. 부서 A는 부서 A의 테이블 및 뷰에 액세스해야 합니다. 부서 B는 부서 B의 테이블 및 뷰에 액세스해야 합니다. 회사는 한 쿼리에서 두 부서의 객체를 사용하는 SQL 쿼리를 자주 실행합니다. 가장 적은 운영 오버헤드로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 부서의 테이블 및 뷰를 전용 스키마로 그룹화합니다. 스키마 수준에서 권한을 관리합니다.",
      "B": "각 부서의 테이블 및 뷰를 전용 데이터베이스로 그룹화합니다. 데이터베이스 수준에서 권한을 관리합니다.",
      "C": "테이블 및 뷰의 이름을 부서 이름을 포함하는 명명 규칙을 따르도록 업데이트합니다. 새로운 명명 규칙을 기반으로 권한을 관리합니다.",
      "D": "각 부서에 대해 IAM 사용자 그룹을 생성합니다. 신원 기반 IAM 정책을 사용하여 IAM 사용자 그룹을 기반으로 테이블 및 뷰 권한을 부여합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n정답 A번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 A번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A company uses an Amazon Redshift cluster as a data warehouse that is shared across two departments. To comply with a security policy, each department must have unique access permissions. Department A must have access to tables and views for Department A. Department B must have access to tables and views for Department B. The company often runs SQL queries that use objects from both departments in one query. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Group tables and views for each department into dedicated schemas. Manage permissions at the schema level.",
      "B": "Group tables and views for each department into dedicated databases. Manage permissions at the database level.",
      "C": "Update the names of the tables and views to follow a naming convention that contains the department names. Manage permissions based on the new naming convention.",
      "D": "Create an IAM user group for each department. Use identity-based IAM policies to grant table and view permissions based on the IAM user group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305574-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 229,
    "question": "한 회사는 Amazon Managed Streaming for Apache Kafka(Amazon MSK) 클러스터에서 Amazon Redshift 데이터 웨어하우스로 스트리밍 데이터를 수집하려고 합니다. 데이터 엔지니어는 낮은 데이터 액세스 시간을 제공하고 스토리지 비용을 최적화하는 솔루션을 개발해야 합니다. 가장 적은 운영 오버헤드로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "MSK 클러스터에 매핑되는 외부 스키마를 생성합니다. 외부 스키마를 참조하는 구체화된 뷰를 생성하여 MSK 토픽에서 스트리밍 데이터를 소비합니다.",
      "B": "Amazon MSK에서 들어오는 데이터를 처리하는 AWS Glue 스트리밍 추출, 변환 및 로드(ETL) 작업을 개발합니다. 데이터를 Amazon S3에 로드합니다. Amazon Redshift Spectrum을 사용하여 Amazon S3에서 데이터를 읽습니다.",
      "C": "스트리밍 데이터 소스에 매핑되는 외부 스키마를 생성합니다. 외부 스키마를 참조하는 새 Amazon Redshift 테이블을 생성합니다.",
      "D": "Amazon S3 버킷을 생성합니다. Amazon MSK에서 데이터를 수집합니다. S3 버킷에서 데이터를 새 Amazon Redshift 테이블로 로드하는 이벤트 기반 AWS Lambda 함수를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n정답 A번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 A번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A company wants to ingest streaming data into an Amazon Redshift data warehouse from an Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster. A data engineer needs to develop a solution that provides low data access time and that optimizes storage costs. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create an external schema that maps to the MSK cluster. Create a materialized view that references the external schema to consume the streaming data from the MSK topic.",
      "B": "Develop an AWS Glue streaming extract, transform, and load (ETL) job to process the incoming data from Amazon MSK. Load the data into Amazon S3. Use Amazon Redshift Spectrum to read the data from Amazon S3.",
      "C": "Create an external schema that maps to the streaming data source. Create a new Amazon Redshift table that references the external schema.",
      "D": "Create an Amazon S3 bucket. Ingest the data from Amazon MSK. Create an event-driven AWS Lambda function to load the data from the S3 bucket to a new Amazon Redshift table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305426-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 230,
    "question": "한 판매 회사는 AWS Glue ETL을 사용하여 데이터를 수집, 처리 및 Amazon S3 버킷에 수집합니다. AWS Glue 파이프라인은 매시간 S3 버킷에 새 파일을 생성합니다. 파일 크기는 200KB~300KB입니다. 회사는 이전 5년의 데이터를 사용하여 판매 예측 모델을 구축하려고 합니다. 히스토리 데이터에는 44,000개의 파일이 포함됩니다. 회사는 가장 작은 워커 타입을 사용하는 두 번째 AWS Glue ETL 파이프라인을 구축합니다. 두 번째 파이프라인은 S3 버킷에서 히스토리 파일을 검색하고 다운스트림 분석을 위해 파일을 처리합니다. 회사는 두 번째 ETL 파이프라인의 성능 문제를 주목합니다. 회사는 두 번째 파이프라인의 성능을 개선해야 합니다. 이 요구사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "더 큰 워커 타입을 사용합니다.",
      "B": "AWS Glue ETL 작업의 워커 수를 증가시킵니다.",
      "C": "AWS Glue DynamicFrame grouping 옵션을 사용합니다.",
      "D": "AWS Glue 자동 스케일링을 활성화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n정답 C번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 C번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A sales company uses AWS Glue ETL to collect, process, and ingest data into an Amazon S3 bucket. The AWS Glue pipeline creates a new file in the S3 bucket every hour. File sizes vary from 200 KB to 300 KB. The company wants to build a sales prediction model by using data from the previous 5 years. The historic data includes 44,000 files. The company builds a second AWS Glue ETL pipeline by using the smallest worker type. The second pipeline retrieves the historic files from the S3 bucket and processes the files for downstream analysis. The company notices significant performance issues with the second ETL pipeline. The company needs to improve the performance of the second pipeline. Which solution will meet this requirement MOST cost-effectively?",
    "en_opts": {
      "A": "Use a larger worker type.",
      "B": "Increase the number of workers in the AWS Glue ETL jobs.",
      "C": "Use the AWS Glue DynamicFrame grouping option.",
      "D": "Enable AWS Glue auto scaling."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305575-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 231,
    "question": "한 회사는 여러 소프트웨어 서비스형(SaaS) 애플리케이션의 데이터를 분석을 위해 결합하려고 합니다. 데이터 엔지니어링 팀은 Amazon QuickSight를 사용하여 분석을 수행하고 대시보드를 구축해야 합니다. 데이터 엔지니어는 SaaS 애플리케이션에서 데이터를 추출하고 QuickSight 쿼리에 사용 가능하도록 해야 합니다. 가장 운영 효율적으로 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "필요한 API를 호출하여 애플리케이션에서 데이터를 추출하는 AWS Lambda 함수를 생성합니다. 데이터를 Amazon S3 버킷에 저장합니다. AWS Glue를 사용하여 S3 버킷의 데이터를 카탈로그화합니다. QuickSight에서 데이터 소스 및 데이터셋을 생성합니다.",
      "B": "AWS Lambda 함수를 Amazon Athena 데이터 소스 커넥터로 사용하여 SaaS 애플리케이션에 대해 연합 쿼리를 실행합니다. Athena 데이터 소스 및 QuickSight의 데이터셋을 생성합니다.",
      "C": "각 SaaS 애플리케이션에 대한 흐름을 생성하기 위해 Amazon AppFlow를 사용합니다. Amazon S3 버킷을 대상으로 설정합니다. 흐름을 예약하여 버킷에 데이터를 추출합니다. AWS Glue를 사용하여 S3 버킷의 데이터를 카탈로그화합니다. QuickSight에서 데이터 소스 및 데이터셋을 생성합니다.",
      "D": "SaaS 애플리케이션에서 Microsoft Excel 파일로 데이터를 내보냅니다. Excel 파일을 업로드하여 QuickSight에서 데이터 소스 및 데이터셋을 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n정답 C번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 C번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A company wants to combine data from multiple software as a service (SaaS) applications for analysis. A data engineering team needs to use Amazon QuickSight to perform the analysis and build dashboards. A data engineer needs to extract the data from the SaaS applications and make the data available for QuickSight queries. Which solution will meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Create AWS Lambda functions that call the required APIs to extract the data from the applications. Store the data in an Amazon S3 bucket. Use AWS Glue to catalog the data in the S3 bucket. Create a data source and a dataset in QuickSight.",
      "B": "Use AWS Lambda functions as Amazon Athena data source connectors to run federated queries against the SaaS applications. Create an Athena data source and a dataset in QuickSight.",
      "C": "Use Amazon AppFlow to create a flow for each SaaS application. Set an Amazon S3 bucket as the destination. Schedule the flows to extract the data to the bucket. Use AWS Glue to catalog the data in the S3 bucket. Create a data source and a dataset in QuickSight.",
      "D": "Export data the from the SaaS applications as Microsoft Excel files. Create a data source and a dataset in QuickSight by uploading the Excel files."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305576-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 232,
    "question": "한 회사는 AWS에서 여러 애플리케이션을 실행합니다. 회사는 각 애플리케이션을 로그를 출력하도록 구성했습니다. 회사는 거의 실시간으로 애플리케이션 로그를 쿼리하고 시각화하려고 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "애플리케이션이 Amazon CloudWatch Logs 로그 그룹에 로그를 출력하도록 구성합니다. Amazon S3 버킷을 생성합니다. 필요한 로그 그룹을 S3 버킷으로 내보내기 위해 일정에 따라 실행되는 AWS Lambda 함수를 생성합니다. Amazon Athena를 사용하여 S3 버킷의 로그 데이터를 쿼리합니다.",
      "B": "Amazon OpenSearch Service 도메인을 생성합니다. 애플리케이션이 Amazon CloudWatch Logs 로그 그룹에 로그를 출력하도록 구성합니다. 각 로그 그룹에 대한 OpenSearch Service 구독 필터를 생성하여 데이터를 OpenSearch로 스트리밍합니다. OpenSearch Service에서 필요한 쿼리 및 대시보드를 생성하여 데이터를 분석하고 시각화합니다.",
      "C": "애플리케이션이 Amazon CloudWatch Logs 로그 그룹에 로그를 출력하도록 구성합니다. CloudWatch 로그 이상 탐지를 사용하여 로그 데이터를 쿼리하고 시각화합니다.",
      "D": "애플리케이션 코드를 업데이트하여 Super-fast, Parallel, In-memory Calculation Engine(SPICE)을 사용하여 Amazon QuickSight로 로그 데이터를 전송합니다. QuickSight에서 필요한 분석 및 대시보드를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n정답 B번. 이 문제는 AWS 데이터 엔지니어링에서 비즈니스 요구사항을 정확히 분석하고 최적의 솔루션을 선택하는 능력을 평가합니다. 각 선택지의 기술적 특성과 장단점을 이해하는 것이 필수적입니다.\n\n【정답 포인트】\n정답 B번이 선택되는 이유는 제시된 모든 요구사항을 가장 효율적이고 경제적으로 충족하기 때문입니다. AWS 시험에서는 단순히 하나의 서비스만 아는 것이 아니라, 여러 AWS 서비스의 특성과 제한사항을 정확히 비교하고 상황에 맞는 최적의 선택을 할 수 있는 능력을 평가합니다. 비용, 운영 오버헤드, 성능, 확장성, 보안 등 다양한 실무 요소를 종합적으로 고려하는 사고방식이 필수입니다.\n\n【오답 체크】\n다른 선택지들이 부적절한 이유를 분석하는 것이 문제 학습의 핵심입니다. 각 선택지는 특정 측면에서는 장점이 있지만, 주어진 구체적인 조건에서는 제약사항이나 추가 작업을 요구합니다. 선택지들 간의 미묘한 차이를 정확히 파악하고, 왜 어떤 선택지가 더 나은지 논리적으로 설명할 수 있어야 합니다.\n\n【시험 포인트】\nAWS 데이터 엔지니어 협회 자격증(DEA-C01) 시험의 전형적인 출제 패턴입니다. 이 유형의 문제를 효과적으로 풀기 위해서는 각 AWS 서비스의 사용 사례, 제한사항, 가격 모델을 정리하고, 비슷한 기능의 서비스들 간의 차이를 명확히 이해해야 합니다.",
    "en_q": "A company runs multiple applications on AWS. The company configured each application to output logs. The company wants to query and visualize the application logs in near real time. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure the applications to output logs to Amazon CloudWatch Logs log groups. Create an Amazon S3 bucket. Create an AWS Lambda function that runs on a schedule to export the required log groups to the S3 bucket. Use Amazon Athena to query the log data in the S3 bucket.",
      "B": "Create an Amazon OpenSearch Service domain. Configure the applications to output logs to Amazon CloudWatch Logs log groups. Create an OpenSearch Service subscription filter for each log group to stream the data to OpenSearch. Create the required queries and dashboards in OpenSearch Service to analyze and visualize the data.",
      "C": "Configure the applications to output logs to Amazon CloudWatch Logs log groups. Use CloudWatch log anomaly detection to query and visualize the log data.",
      "D": "Update the application code to send the log data to Amazon QuickSight by using Super-fast, Parallel, In-memory Calculation Engine (SPICE). Create the required analyses and dashboards in QuickSight."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305577-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 233,
    "question": "전자상거래 회사가 매일 수백만 건의 주문을 처리합니다. 회사는 AWS Glue ETL을 사용하여 여러 소스에서 데이터를 수집하고, 데이터를 정제한 후 S3 Standard 스토리지 클래스를 사용하여 Amazon S3 버킷에 CSV 형식으로 저장합니다. 회사는 저장된 데이터로 일일 분석을 수행합니다. 회사는 데이터 스토리지 및 검색 비용을 최적화하려고 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터를 Amazon S3 Glacier Flexible Retrieval로 전환합니다.",
      "B": "데이터를 Amazon S3에서 Amazon Aurora 클러스터로 전환합니다.",
      "C": "AWS Glue ETL을 구성하여 들어오는 데이터를 Apache Parquet 형식으로 변환합니다.",
      "D": "AWS Glue ETL을 구성하여 Amazon EMR을 사용해 들어오는 데이터를 병렬로 처리합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Apache Parquet — 열 지향 압축 포맷, CSV보다 최대 90% 작은 크기\n▸ S3 Standard — 자주 접근하는 데이터용, Glacier는 저빈도 접근용\n\n【정답 포인트】\n▸ 비용 최적화 + 일일 분석(자주 접근) → Parquet 형식이 최적\n▸ CSV를 Parquet으로 변환하면: 스토리지 비용 60~70% 절감, 쿼리 성능 향상\n▸ Glacier는 일일 접근에 부적합(검색 비용/시간 증가)\n\n【오답 체크】\n(A) Glacier Flexible은 저빈도 접근용 → 일일 분석에는 검색 지연과 추가 비용\n(B) RDS/Aurora는 스토리지 최적화 솔루션이 아님 → 다른 목적\n(D) EMR 병렬 처리는 비용 최적화와 무관 → 처리 성능만 향상\n\n【시험 포인트】\nStorage format optimization: CSV(텍스트 기반) → Parquet(컬럼 압축) 선택이 핵심. 데이터 크기와 쿼리 성능 동시 개선.",
    "en_q": "An ecommerce company processes millions of orders each day. The company uses AWS Glue ETL to collect data from multiple sources, clean the data, and store the data in an Amazon S3 bucket in CSV format by using the S3 Standard storage class. The company uses the stored data to conduct daily analysis. The company wants to optimize costs for data storage and retrieval. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Transition the data to Amazon S3 Glacier Flexible Retrieval.",
      "B": "Transition the data from Amazon S3 to an Amazon Aurora cluster.",
      "C": "Configure AWS Glue ETL to transform the incoming data to Apache Parquet format.",
      "D": "Configure AWS Glue ETL to use Amazon EMR to process incoming data in parallel."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305578-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 234,
    "question": "데이터 엔지니어가 Amazon S3에 저장된 대규모 데이터세트를 분석하기 위해 Apache Spark를 사용하는 Amazon Athena 노트북의 쿼리 성능을 최적화하고 있습니다. 데이터는 분할되어 있으며, AWS Glue 크롤러가 파티션을 업데이트합니다. 데이터 엔지니어는 Athena 쿼리의 효율성을 개선하기 위해 스캔되는 데이터 양을 최소화하려고 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "쿼리에 파티션 필터를 적용합니다.",
      "B": "AWS Glue 크롤러 호출 빈도를 높여 데이터 카탈로그를 더 자주 업데이트합니다.",
      "C": "Amazon S3의 데이터를 중첩된 디렉토리 구조를 사용하여 구성합니다.",
      "D": "Spark를 구성하여 자주 접근하는 데이터에 메모리 내 캐싱을 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Partition Filter — WHERE 절 조건으로 필요한 파티션만 스캔\n▸ Partition Pruning — 불필요한 파티션 디렉토리 제외\n\n【정답 포인트】\n▸ 파티션 필터(WHERE date='2024-01-01')로 스캔 대상 파티션 제한\n▸ 전체 5년 데이터(불필요)가 아닌 필요한 기간만 스캔\n▸ I/O 비용 절감 + 쿼리 속도 즉각적 향상\n\n【오답 체크】\n(B) 크롤러 빈도 증가 → 메타데이터 업데이트만, 스캔 데이터 양 미변화\n(C) 디렉토리 구조 → 이미 파티션 구조 있음, 파티션 프루닝과 별개\n(D) 메모리 캐싱 → Spark 작업 성능일 뿐, 스캔 데이터 양 미변화\n\n【시험 포인트】\nPartition pruning: 파티션된 데이터에서 필터 조건이 파티션 컬럼이면 자동으로 불필요한 파티션 건너뜀. Athena에서 가장 효과적인 최적화.",
    "en_q": "A data engineer is optimizing query performance in Amazon Athena notebooks that use Apache Spark to analyze large datasets that are stored in Amazon S3. The data is partitioned. An AWS Glue crawler updates the partitions. The data engineer wants to minimize the amount of data that is scanned to improve efficiency of Athena queries. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Apply partition filters in the queries.",
      "B": "Increase the frequency of AWS Glue crawler invocations to update the data catalog more often.",
      "C": "Organize the data that is in Amazon S3 by using a nested directory structure.",
      "D": "Configure Spark to use in-memory caching for frequently accessed data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305579-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 235,
    "question": "회사가 Amazon Redshift 데이터 웨어하우스를 관리합니다. 데이터 웨어하우스는 사용자 정의 VPC 내 공개 서브넷에 있습니다. 보안 그룹은 자신 내에서만 트래픽을 허용합니다. ACL은 모든 트래픽에 열려 있습니다. 회사는 예정된 판매 이벤트를 위해 Amazon QuickSight에서 여러 시각화를 생성하려고 합니다. QuickSight Enterprise 에디션이 두 번째 AWS 계정 내 두 번째 사용자 정의 VPC의 공개 서브넷에서 실행될 예정입니다. 새로운 공개 서브넷의 보안 그룹은 기존 Redshift 클러스터로의 아웃바운드 트래픽을 허용합니다. 데이터 엔지니어는 Amazon Redshift와 QuickSight 간의 연결을 설정해야 합니다. QuickSight는 Redshift 클러스터를 쿼리하여 대시보드를 새로 고쳐야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "QuickSight 보안 그룹에서 Redshift 포트로의 인바운드 트래픽을 허용하도록 Redshift 보안 그룹을 구성합니다.",
      "B": "QuickSight 시각화에 탄력적 IP 주소를 할당합니다. QuickSight 보안 그룹을 구성하여 탄력적 IP 주소에서 Redshift 포트로의 인바운드 트래픽을 허용합니다.",
      "C": "Redshift VPC와 QuickSight VPC의 CIDR 범위가 같은지 확인합니다. CIDR 범위가 다르면 한 CIDR 범위를 다른 범위와 일치하도록 재구성합니다. VPC 간 네트워크 피어링을 설정합니다.",
      "D": "Redshift VPC에서 QuickSight 게이트웨이 엔드포인트를 생성합니다. 엔드포인트 정책을 연결하여 특정 QuickSight 계정만 엔드포인트를 사용할 수 있도록 합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Security Group Inbound Rule — 목적지 자원이 특정 출발지의 트래픽 수용\n▸ Cross-Account Communication — 다른 VPC 간 통신 시 보안 그룹 규칙 필수\n\n【정답 포인트】\n▸ QuickSight는 아웃바운드 가능(이미 구성됨)\n▸ Redshift는 QuickSight의 인바운드 트래픽을 수용해야 함\n▸ Redshift 보안 그룹 인바운드: QuickSight SG → Redshift 포트(기본값 5439)\n▸ 양방향 통신 경로 확보 → 대시보드 쿼리 가능\n\n【오답 체크】\n(B) 탄력적 IP 할당 → QuickSight는 관리형 서비스, 직접 IP 할당 불가\n(C) CIDR 범위 일치/피어링 → 같은 AWS 계정 내 VPC일 때 필요, 여기서는 이미 아웃바운드 가능\n(D) Gateway Endpoint → 데이터 통신용이 아닌 AWS 서비스 접근용 (S3 등)\n\n【시험 포인트】\nCross-VPC/Account: 출발지 보안 그룹이 아웃바운드 허용해도, 목적지 보안 그룹의 인바운드 규칙이 필수. 통신은 양방향 규칙 확인.",
    "en_q": "A company manages an Amazon Redshift data warehouse. The data warehouse is in a public subnet inside a custom VPC. A security group allows only traffic from within itself. An ACL is open to all traffic. The company wants to generate several visualizations in Amazon QuickSight for an upcoming sales event. The company will run QuickSight Enterprise edition in a second AWS account inside a public subnet within a second custom VPC. The new public subnet has a security group that allows outbound traffic to the existing Redshift cluster. A data engineer needs to establish connections between Amazon Redshift and QuickSight. QuickSight must refresh dashboards by querying the Redshift cluster. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure the Redshift security group to allow inbound traffic on the Redshift port from the QuickSight security group.",
      "B": "Assign Elastic IP addresses to the QuickSight visualizations. Configure the QuickSight security group to allow inbound traffic on the Redshift port from the Elastic IP addresses.",
      "C": "Confirm that the CIDR ranges of the Redshift VPC and the QuickSight VPC are the same. If CIDR ranges are different, reconfigure one CIDR range to match the other. Establish network peering between the VPCs.",
      "D": "Create a QuickSight gateway endpoint in the Redshift VPC. Attach an endpoint policy to the gateway endpoint to ensure only specific QuickSight accounts can use the endpoint."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305580-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 236,
    "question": "데이터 엔지니어가 데이터 파이프라인을 구축하고 있습니다. 대용량 데이터 파일이 예측 불가능한 시간에 Amazon S3 버킷에 매일 한 번씩 업로드됩니다. AWS Glue 워크플로우가 수백 개의 워커를 사용하여 파일을 처리하고 데이터를 Amazon Redshift에 로드합니다. 회사는 파일을 최대한 빨리 처리하려고 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "온디맨드 AWS Glue 트리거를 생성합니다. AWS Lambda 함수를 생성하여 15분마다 실행되도록 하고 S3 버킷에서 일일 파일을 확인합니다. 파일이 있으면 AWS Glue 워크플로우를 시작하도록 함수를 구성합니다.",
      "B": "이벤트 기반 AWS Glue 트리거를 생성합니다. Amazon S3이 AWS CloudTrail에 이벤트를 기록하도록 구성합니다. Amazon EventBridge에서 규칙을 생성하여 PutObject 이벤트를 AWS Glue 트리거로 전달합니다.",
      "C": "예약된 AWS Glue 트리거를 생성합니다. Cron 작업을 생성하여 15분마다 AWS Glue 작업을 실행합니다. AWS Glue 작업이 S3 버킷에서 일일 파일을 확인하도록 설정합니다. 파일이 없으면 작업을 중지하도록 구성합니다.",
      "D": "온디맨드 AWS Glue 트리거를 생성합니다. AWS Database Migration Service(AWS DMS) 마이그레이션 작업을 생성합니다. DMS 소스를 S3 버킷으로 설정합니다. 대상 엔드포인트를 AWS Glue 워크플로우로 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Event-based Trigger — S3 PutObject 이벤트 감지 시 즉시 트리거\n▸ EventBridge + CloudTrail — S3 이벤트를 실시간으로 감지\n\n【정답 포인트】\n▸ \"최대한 빨리 처리\" → 파일 업로드 감지 시 즉시 시작(지연 최소화)\n▸ 이벤트 기반 트리거: 파일 업로드(PutObject) → EventBridge 규칙 → Glue 트리거 즉시 실행\n▸ 폴링 불필요 → Lambda 15분 대기 시간 제거\n\n【오답 체크】\n(A) 15분 폴링 → 최악의 경우 15분 지연, \"최대한 빨리\"와 배치\n(C) 15분 Cron → 폴링과 동일하게 지연 발생\n(D) DMS는 마이그레이션 서비스 → Glue 워크플로우 트리거와 무관\n\n【시험 포인트】\nEvent-driven architecture: 예측 불가능한 시간의 파일 업로드는 폴링이 아닌 이벤트 기반 자동화가 최적. S3 → EventBridge → Lambda/Glue 패턴.",
    "en_q": "A data engineer is building a data pipeline. A large data file is uploaded to an Amazon S3 bucket once each day at unpredictable times. An AWS Glue workflow uses hundreds of workers to process the file and load the data into Amazon Redshift. The company wants to process the file as quickly as possible. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an on-demand AWS Glue trigger to start the workflow. Create an AWS Lambda function that runs every 15 minutes to check the S3 bucket for the daily file. Configure the function to start the AWS Glue workflow if the file is present.",
      "B": "Create an event-based AWS Glue trigger to start the workflow. Configure Amazon S3 to log events to AWS CloudTrail. Create a rule in Amazon EventBridge to forward PutObject events to the AWS Glue trigger.",
      "C": "Create a scheduled AWS Glue trigger to start the workflow. Create a cron job that runs the AWS Glue job every 15 minutes. Set up the AWS Glue job to check the S3 bucket for the daily file. Configure the job to stop if the file is not present.",
      "D": "Create an on-demand AWS Glue trigger to start the workflow. Create an AWS Database Migration Service (AWS DMS) migration task. Set the DMS source as the S3 bucket. Set the target endpoint as the AWS Glue workflow."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305582-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 237,
    "question": "데이터 엔지니어가 사용자가 Amazon S3 버킷에 파일을 추가할 때마다 데이터 변환 작업을 실행해야 합니다. 작업은 1분 미만으로 실행됩니다. 작업은 출력을 데이터 엔지니어에게 이메일 메시지로 보내야 합니다. 데이터 엔지니어는 매일 매시간 사용자가 파일 하나를 추가할 것으로 예상합니다. 이 요구사항을 가장 운영 효율적인 방식으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 버킷을 폴링하는 작은 Amazon EC2 인스턴스를 생성합니다. 일정에 따라 변환 코드를 실행하여 출력을 생성합니다. 운영 체제 명령을 사용하여 이메일 메시지를 보냅니다.",
      "B": "S3 버킷을 폴링하는 Amazon Elastic Container Service(Amazon ECS) 작업을 실행합니다. 일정에 따라 변환 코드를 실행하여 출력을 생성합니다. 운영 체제 명령을 사용하여 이메일 메시지를 보냅니다.",
      "C": "데이터를 변환하는 AWS Lambda 함수를 생성합니다. Amazon S3 Event Notifications를 사용하여 새 객체가 생성될 때 Lambda 함수를 호출합니다. 출력을 Amazon Simple Notification Service(Amazon SNS) 주제에 게시합니다. 데이터 엔지니어의 이메일 계정을 주제에 구독합니다.",
      "D": "Amazon EMR 클러스터를 배포합니다. EMR File System(EMRFS)을 사용하여 S3 버킷의 파일에 접근합니다. 일정에 따라 변환 코드를 실행하여 두 번째 S3 버킷에 출력을 생성합니다. Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. 새 객체가 생성될 때 주제에 알리도록 Amazon S3 Event Notifications를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Lambda — 서버리스, 실행 시간당 비용(1분 미만)\n▸ S3 Event Notifications — 파일 업로드 즉시 트리거\n▸ SNS — 메시지 큐잉, 이메일 전송 자동화\n\n【정답 포인트】\n▸ 운영 효율성: 관리 인프라 최소화 → Lambda(서버리스)\n▸ 비용 최적화: 1분 미만 + 시간당 파일 하나 → Lambda는 사용량 기반 요금\n▸ 이벤트 기반: S3 업로드 → 즉시 Lambda 실행 → SNS 이메일\n▸ 코드 없는 설정: SNS 구독만으로 이메일 자동 발송\n\n【오답 체크】\n(A) EC2 인스턴스 → 상시 실행 비용, 운영 오버헤드 높음\n(B) ECS 작업 → 컨테이너 관리 필요, EC2보다 복잡\n(D) EMR 클러스터 → 대규모 처리 애플리케이션, 오버스펙(비용 낭비)\n\n【시험 포인트】\nServerless architecture: 단시간 작업 + 이벤트 기반 + 낮은 빈도 → Lambda + EventBridge/S3 + SNS 조합이 가장 경제적. 관리 인프라 제거.",
    "en_q": "A data engineer needs to run a data transformation job whenever a user adds a file to an Amazon S3 bucket. The job will run for less than 1 minute. The job must send the output through an email message to the data engineer. The data engineer expects users to add one file every hour of the day. Which solution will meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Create a small Amazon EC2 instance that polls the S3 bucket for new files. Run transformation code on a schedule to generate the output. Use operating system commands to send email messages.",
      "B": "Run an Amazon Elastic Container Service (Amazon ECS) task to poll the S3 bucket for new files. Run transformation code on a schedule to generate the output. Use operating system commands to send email messages.",
      "C": "Create an AWS Lambda function to transform the data. Use Amazon S3 Event Notifications to invoke the Lambda function when a new object is created. Publish the output to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the data engineer's email account to the topic.",
      "D": "Deploy an Amazon EMR cluster. Use EMR File System (EMRFS) to access the files in the S3 bucket. Run transformation code on a schedule to generate the output to a second S3 bucket. Create an Amazon Simple Notification Service (Amazon SNS) topic. Configure Amazon S3 Event Notifications to notify the topic when a new object is created."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305583-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 238,
    "question": "회사가 Amazon S3 및 AWS Glue Data Catalog를 사용하여 고객 연락처 정보가 포함된 데이터 레이크를 관리합니다. 회사는 PySpark와 AWS Glue 작업을 DynamicFrame과 함께 사용하여 데이터 레이크 내 데이터를 처리하는 워크플로우를 실행합니다. 데이터 엔지니어는 고객 우편번호가 데이터 레이크에 어떻게 저장되어 있는지 때문에 워크플로우가 오류를 생성하고 있음을 알 수 있습니다. 일부 우편번호에는 불필요한 숫자나 유효하지 않은 문자가 포함되어 있습니다. 데이터 엔지니어는 오류를 해결하고 데이터 레이크에서 우편번호를 수정해야 합니다.",
    "options": {
      "A": "처리 워크플로우가 필요로 하는 형식과 일치하는 PySpark에 대한 스키마 정의를 생성합니다. 처리 중에 스키마를 DynamicFrame에 전달합니다.",
      "B": "작업 상태 공유를 허용하도록 AWS Glue 워크플로우 속성을 사용합니다. AWS Glue 작업을 구성하여 이전 성공한 작업 실행의 속성에서 우편번호 열의 값을 읽습니다.",
      "C": "DynamicFrame의 우편번호 열에 대해 column.push_down_predicate 설정 및 catalogPartitionPredicate 설정을 구성합니다.",
      "D": "DynamicFrame additional_options 매개변수 'useS3ListImplementation'을 True로 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Schema Enforcement — 데이터 형식 강제, 불일치 데이터 필터링/변환\n▸ DynamicFrame — AWS Glue의 유연한 데이터 구조, 스키마 정의로 검증\n\n【정답 포인트】\n▸ 문제: 우편번호 데이터 품질 문제(숫자, 특수문자 혼재)\n▸ 해결: 스키마 정의로 원하는 형식 명시(예: 정수, 길이 5자리)\n▸ DynamicFrame에 스키마 전달 시 자동으로 데이터 검증/변환\n▸ 유효하지 않은 데이터는 스키마 불일치로 처리 또는 정제\n\n【오답 체크】\n(B) 워크플로우 상태 공유 → 상태 추적 기능일 뿐, 데이터 정제와 무관\n(C) Push-down predicate → 파티션 필터링 옵션, 스키마 검증과 무관\n(D) useS3ListImplementation → S3 리스팅 방식 최적화, 데이터 품질과 무관\n\n【시험 포인트】\nData quality in Glue: DynamicFrame에 명시적 스키마 정의하면 타입 강제와 검증이 자동 적용. PySpark DataFrame보다 유연한 에러 처리.",
    "en_q": "A company uses Amazon S3 and AWS Glue Data Catalog to manage a data lake that contains contact information for customers. The company uses PySpark and AWS Glue jobs with a DynamicFrame to run a workflow that processes data within the data lake. A data engineer notices that the workflow is generating errors as a result of how customer postal codes are stored in the data lake. Some postal codes include unnecessary numbers or invalid characters. The data engineer needs a solution to address the errors and correct the postal codes in the data lake.",
    "en_opts": {
      "A": "Create a schema definition for PySpark that matches the format the processing workflow requires for postal codes. Pass the schema to the DynamicFrame during processing.",
      "B": "Use AWS Glue workflow properties to allow job state sharing. Configure the AWS Glue jobs to read values from the postal code column by using the properties from a previously successful run of the jobs.",
      "C": "Configure the column.push_down_predicate setting and the catalogPartitionPredicate settings for the postal code column in the DynamicFrame.",
      "D": "Set the DynamicFrame additional_options parameter 'useS3ListImplementation' to True."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305584-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 239,
    "question": "데이터 엔지니어가 가끔 실패하는 AWS Glue 워크플로우의 문제를 해결하고 있습니다. 엔지니어는 실패가 데이터 품질 문제로 인한 것임을 확인했습니다. 비즈니스 보고 팀은 향후 워크플로우가 실패할 때마다 이메일 알림을 받아야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Simple Notification Service(Amazon SNS) FIFO 주제를 생성합니다. 팀의 이메일 계정을 SNS 주제에 구독합니다. AWS Lambda 함수를 생성하여 AWS Glue 작업 상태가 FAILED로 변경될 때 시작됩니다. SNS 주제를 대상으로 설정합니다.",
      "B": "Amazon Simple Notification Service(Amazon SNS) 표준 주제를 생성합니다. 팀의 이메일 계정을 SNS 주제에 구독합니다. AWS Glue 작업 상태가 FAILED로 변경될 때 트리거되는 Amazon EventBridge 규칙을 생성합니다. SNS 주제를 대상으로 설정합니다.",
      "C": "Amazon Simple Queue Service(Amazon SQS) FIFO 큐를 생성합니다. 팀의 이메일 계정을 SQS 큐에 구독합니다. AWS Glue 작업 상태가 FAILED로 변경될 때 트리거되는 AWS Config 규칙을 생성합니다. SQS 큐를 대상으로 설정합니다.",
      "D": "Amazon Simple Queue Service(Amazon SQS) 표준 큐를 생성합니다. 팀의 이메일 계정을 SQS 큐에 구독합니다. AWS Glue 작업 상태가 FAILED로 변경될 때 트리거되는 Amazon EventBridge 규칙을 생성합니다. SQS 큐를 대상으로 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ EventBridge — AWS 이벤트를 실시간 감지, 규칙 기반 라우팅\n▸ SNS — 이메일, SMS 등 메시지 전송 서비스\n▸ FIFO vs Standard — FIFO는 순서 보장, Standard는 고처량\n\n【정답 포인트】\n▸ 이벤트 감지: Glue 작업 상태(FAILED) → EventBridge 규칙에서 자동 감지\n▸ 메시지 전송: SNS Standard 주제(순서 불필요, 고처량)\n▸ 이메일 구독: SNS 주제에 이메일 구독 = 자동 알림\n▸ FIFO 불필요: 각 실패 알림이 독립적, 순서 상관없음\n\n【오답 체크】\n(A) SNS FIFO + Lambda 추가 → 불필요한 복잡성, EventBridge가 직접 SNS 호출 가능\n(C) SQS + AWS Config → Config는 컴플라이언스/리소스 상태 모니터링용, Glue 이벤트와 맞지 않음\n(D) SQS + EventBridge → SQS는 메시지 큐잉일 뿐, 이메일 전송 기능 없음\n\n【시험 포인트】\nEvent notification architecture: 상태 변화 감지 → EventBridge → SNS → 이메일이 표준. Lambda 추가는 복잡성만 증가.",
    "en_q": "A data engineer is troubleshooting an AWS Glue workflow that occasionally fails. The engineer determines that the failures are a result of data quality issues. A business reporting team needs to receive an email notification any time the workflow fails in the future. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Create an Amazon Simple Notification Service (Amazon SNS) FIFO topic. Subscribe the team's email account to the SNS topic. Create an AWS Lambda function that initiates when the AWS Glue job state changes to FAILED. Set the SNS topic as the target.",
      "B": "Create an Amazon Simple Notification Service (Amazon SNS) standard topic. Subscribe the team's email account to the SNS topic. Create an Amazon EventBridge rule that triggers when the AWS Glue job state changes to FAILED. Set the SNS topic as the target.",
      "C": "Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Subscribe the team's email account to the SQS queue. Create an AWS Config rule that triggers when the AWS Glue job state changes to FAILED. Set the SQS queue as the target.",
      "D": "Create an Amazon Simple Queue Service (Amazon SQS) standard queue. Subscribe the team's email account to the SQS queue. Create an Amazon EventBridge rule that triggers when the AWS Glue job state changes to FAILESet the SQS queue as the target."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305585-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 240,
    "question": "회사가 AWS Glue 작업을 사용하여 여러 데이터 파이프라인을 구현합니다. 파이프라인은 회사에 중요합니다. 회사는 파이프라인이 실패하면 이해관계자에게 알리는 모니터링 메커니즘을 구현해야 합니다. 이 요구사항을 가장 운영 오버헤드가 적은 방식으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue 작업 실패 이벤트를 일치시키도록 Amazon EventBridge 규칙을 생성합니다. 규칙을 구성하여 AWS Lambda 함수를 처리하도록 대상을 설정합니다. 이벤트를 처리하고 Amazon Simple Notification Service(Amazon SNS) 주제에 알림을 보내도록 함수를 구성합니다.",
      "B": "AWS Glue 작업에 대해 Amazon CloudWatch Logs 로그 그룹을 구성합니다. 로그 그룹의 새 로그 생성 이벤트를 일치시키도록 Amazon EventBridge 규칙을 생성합니다. 로그를 읽고 AWS Glue 작업 실패 로그가 있으면 Amazon Simple Notification Service(Amazon SNS) 주제에 알림을 보내는 AWS Lambda 함수를 대상으로 하도록 규칙을 구성합니다.",
      "C": "AWS Glue 작업 실패 이벤트를 일치시키도록 Amazon EventBridge 규칙을 생성합니다. EventBridge 규칙을 기반으로 Amazon CloudWatch 메트릭을 정의합니다. 메트릭을 기반으로 CloudWatch 알람을 설정하여 Amazon Simple Notification Service(Amazon SNS) 주제에 알림을 보냅니다.",
      "D": "AWS Glue 작업에 대해 Amazon CloudWatch Logs 로그 그룹을 구성합니다. 로그 그룹의 새 로그 생성 이벤트를 일치시키도록 Amazon EventBridge 규칙을 생성합니다. 규칙을 구성하여 Amazon Simple Notification Service(Amazon SNS) 주제에 알림을 보냅니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudWatch Metrics — 숫자 데이터 수집, 시각화 및 알람 기반\n▸ CloudWatch Alarms — 메트릭 임계값 기반 자동화 알림\n▸ Operational Overhead — 관리 복잡성, 코드 유지보수 비용\n\n【정답 포인트】\n▸ 운영 오버헤드 최소: Lambda 함수 개발 불필요\n▸ EventBridge 규칙 → CloudWatch 메트릭 자동 생성\n▸ CloudWatch 알람 → 메트릭 기반 SNS 자동 알림(코드 없음)\n▸ AWS 네이티브 서비스만 사용, 최소한의 구성\n\n【오답 체크】\n(A) Lambda 함수 필요 → 코드 작성, 테스트, 유지보수 필요 = 높은 오버헤드\n(B) CloudWatch Logs + Lambda → Lambda에서 로그 파싱 로직 필요 = 복잡성\n(D) CloudWatch Logs + EventBridge 직접 SNS → 로그만 SNS로 전송, 구조화된 알람 없음\n\n【시험 포인트】\nServerless alerting: EventBridge → CloudWatch Metric → CloudWatch Alarm → SNS는 AWS 네이티브 솔루션으로 최소 코드/관리. Lambda 없이도 충분.",
    "en_q": "A company uses AWS Glue jobs to implement several data pipelines. The pipelines are critical to the company. The company needs to implement a monitoring mechanism that will alert stakeholders if the pipelines fail. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create an Amazon EventBridge rule to match AWS Glue job failure events. Configure the rule to target an AWS Lambda function to process events. Configure the function to send notifications to an Amazon Simple Notification Service (Amazon SNS) topic.",
      "B": "Configure an Amazon CloudWatch Logs log group for the AWS Glue jobs. Create an Amazon EventBridge rule to match new log creation events in the log group. Configure the rule to target an AWS Lambda function that reads the logs and sends notifications to an Amazon Simple Notification Service (Amazon SNS) topic if AWS Glue job failure logs are present.",
      "C": "Create an Amazon EventBridge rule to match AWS Glue job failure events. Define an Amazon CloudWatch metric based on the EventBridge rule. Set up a CloudWatch alarm based on the metric to send notifications to an Amazon Simple Notification Service (Amazon SNS) topic.",
      "D": "Configure an Amazon CloudWatch Logs log group for the AWS Glue jobs. Create an Amazon EventBridge rule to match new log creation events in the log group. Configure the rule to send notifications to an Amazon Simple Notification Service (Amazon SNS) topic."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305586-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 241,
    "question": "회사가 AWS Glue Apache Spark 작업을 사용하여 추출, 변환 및 로드(ETL) 워크로드를 처리합니다. 회사는 모든 AWS Glue 작업에 대해 로깅 및 모니터링을 활성화했습니다. AWS Glue 작업 중 하나가 실패하기 시작합니다. 데이터 엔지니어가 오류를 조사하고 작업 내 모든 개별 단계에 대한 메트릭을 검사하려고 합니다. 데이터 엔지니어는 단계 메트릭에 어떻게 접근할 수 있습니까?",
    "options": {
      "A": "Spark UI에서 AWS Glue 작업 및 단계 세부정보를 검토합니다.",
      "B": "Amazon CloudWatch에서 AWS Glue 작업 및 단계 메트릭을 검토합니다.",
      "C": "AWS CloudTrail 로그에서 AWS Glue 작업 및 단계 로그를 검토합니다.",
      "D": "작업에서 실행 인사이트 기능을 사용하여 AWS Glue 작업 및 단계 세부정보를 검토합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Spark UI — Spark 애플리케이션 실행 중 실시간 모니터링, 단계별 성능 메트릭\n▸ Stage Metrics — 각 변환 단계의 실행 시간, 데이터 이동, 작업 수\n\n【정답 포인트】\n▸ \"개별 단계 메트릭\" → Spark UI가 가장 상세한 정보 제공\n▸ Spark UI: 각 Stage의 작업 수, 입력/출력 데이터 크기, 실행 시간 등 시각화\n▸ AWS Glue는 Spark 드라이버에서 실행되는 Spark 애플리케이션\n▸ Spark UI는 작업 진행 중/완료 후 접근 가능\n\n【오답 체크】\n(B) CloudWatch 메트릭 → 고수준 메트릭만(실행 시간, 상태), 단계별 상세 정보 없음\n(C) CloudTrail 로그 → API 호출 감사용, 성능 메트릭과 무관\n(D) Run Insights → 일반적인 실행 통계일 뿐, Spark의 단계별 상세는 아님\n\n【시험 포인트】\nSpark troubleshooting: Spark UI는 모든 Stage와 Task의 상세 성능 정보 제공. Glue는 이를 활성화하면 접근 가능. 성능 최적화의 핵심 도구.",
    "en_q": "A company uses AWS Glue Apache Spark jobs to handle extract, transform, and load (ETL) workloads. The company has enabled logging and monitoring for all AWS Glue jobs. One of the AWS Glue jobs begins to fail. A data engineer investigates the error and wants to examine metrics for all individual stages within the job. How can the data engineer access the stage metrics?",
    "en_opts": {
      "A": "Examine the AWS Glue job and stage details in the Spark UI.",
      "B": "Examine the AWS Glue job and stage metrics in Amazon CloudWatch.",
      "C": "Examine the AWS Glue job and stage logs in AWS CloudTrail logs.",
      "D": "Examine the AWS Glue job and stage details by using the run insights feature on the job."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305587-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 242,
    "question": "데이터 엔지니어가 Amazon Athena의 고도로 분할된 테이블에서 쿼리 성능이 느려지고 있음을 알게 됩니다. 테이블에는 지난 5년의 일일 데이터가 포함되어 있으며, 날짜별로 분할되어 있습니다. 데이터 엔지니어는 쿼리 성능을 개선하고 파티션 관리를 자동화하려고 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "매일 실행되는 AWS Lambda 함수를 사용합니다. 각 날짜의 데이터에 대해 AWS Glue에서 새로운 파티션을 수동으로 생성하도록 함수를 구성합니다.",
      "B": "Athena에서 파티션 프로젝션을 사용합니다. 5년 전부터 현재까지의 날짜 범위를 사용하여 테이블 속성을 구성합니다.",
      "C": "파티셔닝 스키마를 일일에서 월간 세분화로 변경하여 파티션 수를 줄입니다.",
      "D": "더 많은 컴퓨팅 리소스를 할당하여 Athena 쿼리의 처리 용량을 증가시킵니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Partition Projection — 파티션을 물리적 생성 없이 논리적으로 프로젝션(5년 분 자동)\n▸ Partition Pruning — 필요한 파티션만 스캔\n\n【정답 포인트】\n▸ 문제: 5년 × 365일 = 1,825개 파티션 → 메타데이터 스캔 오버헤드\n▸ 파티션 프로젝션: 테이블 속성에 날짜 범위 정의 → 파티션 자동 인식\n▸ 자동화: 매일 새 데이터 추가될 때 Lambda 불필요 → Athena가 자동으로 프로젝션\n▸ 성능 개선: 메타데이터 쿼리 시간 감소 + 불필요한 파티션 자동 제외\n\n【오답 체크】\n(A) Lambda 수동 파티션 생성 → 매일 관리 필요, \"자동화\"와 배치\n(C) 월간 변경 → 기존 데이터 재구성 필요, 데이터 손실 위험\n(D) 컴퓨팅 증대 → 느린 이유는 파티션 메타데이터 오버헤드, 리소스와 무관\n\n【시험 포인트】\nPartition projection: Athena의 장기 시계열 데이터(날짜 기반 분할)에서 필수 최적화. 물리 파티션 생성 없이 논리적 프로젝션으로 자동 관리.",
    "en_q": "A data engineer notices slow query performance on a highly partitioned table that is in Amazon Athena. The table contains daily data for the previous 5 years, partitioned by date. The data engineer wants to improve query performance and to automate partition management. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use an AWS Lambda function that runs daily. Configure the function to manually create new partitions in AWS Glue for each day's data.",
      "B": "Use partition projection in Athena. Configure the table properties by using a date range from 5 years ago to the present.",
      "C": "Reduce the number of partitions by changing the partitioning schema from daily to monthly granularity.",
      "D": "Increase the processing capacity of Athena queries by allocating more compute resources."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/305588-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 243,
    "question": "데이터 엔지니어가 Apache Iceberg 프레임워크를 사용하여 100TB의 데이터를 포함하는 데이터 레이크를 구축하고 있습니다. 데이터 엔지니어는 Iceberg 프레임워크를 사용하는 AWS Glue Apache Spark 작업을 실행하려고 합니다. 이 요구사항을 충족하는 단계의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "AWS Glue 작업에 대해 --conf라는 이름의 키를 생성합니다. --datalake-formats 작업 매개변수의 값으로 Iceberg를 설정합니다.",
      "B": "-extra-jars 작업 매개변수를 사용하여 특정 버전의 Iceberg에 대한 경로를 지정합니다. --datalake-formats 작업 매개변수의 값으로 Iceberg를 설정합니다.",
      "C": "--datalake-formats 작업 매개변수의 값으로 Iceberg를 설정합니다.",
      "D": "--enable-auto-scaling 매개변수를 true로 설정합니다.",
      "E": "AWS Glue 작업에 --job-bookmark-option: job-bookmark-enable 매개변수를 추가합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ --datalake-formats — Iceberg, Hudi, Delta Lake 등 데이터 레이크 포맷 활성화\n▸ -extra-jars — 추가 라이브러리/JAR 파일 경로 지정\n\n【정답 포인트】\n▸ \n(B) -extra-jars로 Iceberg JAR 버전 지정 + --datalake-formats Iceberg 설정\n▸ \n(C) --datalake-formats Iceberg 단독 설정(기본 Iceberg 버전)\n▸ B와 C는 서로 다른 상황:\n  - C: AWS Glue에서 기본 제공하는 Iceberg 사용\n  - B: 특정 Iceberg 버전이 필요한 경우 추가\n\n【오답 체크】\n(A) --conf 키는 잘못된 형식 → 올바른 매개변수 형식이 아님\n(D) --enable-auto-scaling → 자동 스케일링 기능, Iceberg와 무관\n(E) --job-bookmark-option → 증분 처리 추적, Iceberg 설정과 무관\n\n【시험 포인트】\nGlue Iceberg support: Iceberg 활성화는 --datalake-formats 매개변수로 필수. 특정 버전 필요 시 -extra-jars로 커스터마이징. 100TB 규모 데이터 레이크에서 ACID 트랜잭션 지원.",
    "en_q": "A data engineer is using an Apache Iceberg framework to build a data lake that contains 100 ТВ of data. The data engineer wants to run AWS Glue Apache Spark jobs that use the Iceberg framework. What combination of steps will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Create a key named --conf for an AWS Glue job. Set Iceberg as a value for the --datalake-formats job parameter.",
      "B": "Specify the path to a specific version of Iceberg by using the -extra-jars job parameter. Set Iceberg as a value for the datalake-formats job parameter.",
      "C": "Set Iceberg as a value for the --datalake-formats job parameter.",
      "D": "Set the --enable-auto-scaling parameter to true.",
      "E": "Add the --job-bookmark-option: job-bookmark-enable parameter to an AWS Glue job."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315510-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 244,
    "question": "데이터 엔지니어가 AWS Glue Apache Spark 추출, 변환 및 로드(ETL) 작업을 구성하고 있습니다. 작업에는 동일한 크기의 두 개의 대규모 DataFrame의 정렬-병합 조인이 포함됩니다. 작업이 다음 오류로 실패합니다: 기기에 공간이 없습니다. 이 오류를 해결하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue Spark shuffle 매니저를 사용합니다.",
      "B": "작업이 사용할 수 있도록 Amazon Elastic Block Store(Amazon EBS) 볼륨을 배포합니다.",
      "C": "작업의 정렬-병합 조인을 브로드캐스트 조인으로 변환합니다.",
      "D": "DataFrame을 DynamicFrame으로 변환하고, 작업에서 DynamicFrame 조인을 수행합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Shuffle — 조인 시 데이터 재분배, 디스크 스토리지 필요\n▸ AWS Glue Shuffle Manager — 디스크 스토리지를 S3로 오프로드\n▸ Sort-merge Join — 정렬된 데이터 조인, 대규모 데이터에 메모리 필요\n\n【정답 포인트】\n▸ \"기기에 공간이 없습니다\" → 셔플 데이터를 로컬 디스크에 쓸 수 없음\n▸ AWS Glue Shuffle Manager: 셔플 데이터를 S3에 자동 오프로드\n▸ 로컬 디스크 대신 S3 활용 → \"기기\" 디스크 압력 제거\n▸ 두 DataFrame이 동일 크기 → 브로드캐스트 불가능\n\n【오답 체크】\n(B) EBS 볼륨 추가 → Glue는 관리형 서비스, 직접 EBS 제어 불가\n(C) 브로드캐스트 조인 → 동일 크기 큰 DataFrame은 브로드캐스트 불가능(메모리 오버플로우)\n(D) DynamicFrame → 조인 방식 변경일 뿐, 메모리 문제 해결 안 됨\n\n【시험 포인트】\nSpark shuffle optimization: 대규모 DataFrame 조인의 메모리/디스크 부족 → Glue Shuffle Manager로 S3 오프로드. 관리형 서비스의 표준 솔루션.",
    "en_q": "A data engineer is configuring an AWS Glue Apache Spark extract, transform, and load (ETL) job. The job contains a sort-merge join of two large and equally sized DataFrames. The job is failing with the following error: No space left on device. Which solution will resolve the error?",
    "en_opts": {
      "A": "Use the AWS Glue Spark shuffle manager.",
      "B": "Deploy are Amazon Elastic Block Store (Amazon EBS) volume for the job to use.",
      "C": "Convert the sort-merge join in the job to be a broadcast join.",
      "D": "Convert the DataFrames to DynamicFrames, and perform a DynamicFrame join in the job."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315497-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 245,
    "question": "회사가 거래를 처리하는 워크플로우를 구현해야 합니다. 각 거래는 여러 수준의 검증을 거칩니다. 각 검증 수준은 이전 검증 수준에 따라 달라집니다. 워크플로우는 24시간 이내에 각 거래를 처리하거나 거부해야 합니다. 워크플로우는 총 24시간 미만으로 실행되어야 합니다. 이 요구사항을 가장 운영 비용이 적은 방식으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Step Functions에서 표준 워크플로우를 생성합니다. 검증 단계가 완료될 때까지 기다리도록 Callback 대기 패턴을 구현합니다.",
      "B": "AWS Step Functions에서 Express 워크플로우를 생성합니다. 검증 단계가 완료될 때까지 기다리도록 Callback 대기 패턴을 구현합니다.",
      "C": "AWS Lambda 함수를 사용하여 워크플로우를 구현합니다. Amazon EventBridge를 사용하여 검증 단계를 호출합니다.",
      "D": "Apache Airflow용 Amazon Managed Workflows(Amazon MWAA)를 사용하여 워크플로우를 구현합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Standard Workflow — 최대 1년 실행, 비용 저렴\n▸ Express Workflow — 최대 5분 실행, 높은 처리량, 비용 높음\n▸ Wait for Callback — 외부 신호 대기, 동기 검증\n\n【정답 포인트】\n▸ \"24시간 이내 처리\" + \"24시간 미만 실행\" → 대기 시간 포함\n▸ Standard Workflow: 최대 1년 지원, 비용 저렴 ($0.000025/transition)\n▸ Express Workflow: 최대 5분만 지원 → 24시간 대기 불가능\n▸ Callback 패턴: 검증 완료 신호까지 대기, 순차 검증 구현\n▸ 비용 최적: Standard이 Express보다 100배 저렴\n\n【오답 체크】\n(B) Express Workflow → 최대 5분 제한, 24시간 대기 불가능\n(C) Lambda + EventBridge → 상태 추적 복잡, Step Functions이 오케스트레이션 전문\n(D) MWAA → 더 복잡하고 비용 높음, 간단한 순차 검증에 오버스펙\n\n【시험 포인트】\nStep Functions choice: 대기 시간이 길면 Standard, 짧으면 Express. Callback은 외부 시스템의 비동기 응답 대기용. 순차 검증에 최적.",
    "en_q": "A company needs to implement a workflow to process transactions. Each transaction goes through multiple levels of validation. Each validation level depends on the preceding validation level. The workflow must either process or reject each transaction within 24-hours. The workflow must run for less than 24 hours total. Which solution will meet these requirements with the LEAST operational cost?",
    "en_opts": {
      "A": "Create a standard workflow in AWS Step Functions. Implement a Wait for Callback pattern to wait for the validation steps to finish.",
      "B": "Create an express workflow in AWS Step Functions. Implement a Wait for Callback pattern to wait for the validation steps to finish.",
      "C": "Use AWS Lambda functions to implement the workflow. Use Amazon EventBridge to invoke the validation steps.",
      "D": "Use Amazon Managed Workflows for Apache Airflow (Amazon MWAA) to implement the workflow."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/316742-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 246,
    "question": "데이터 엔지니어가 거의 동시에 시작되는 많은 수의 AWS Glue 작업을 구성합니다. 모든 작업은 동일한 VPC의 동일한 서브넷에서 1시간 미만으로 실행됩니다. 모든 AWS Glue 작업이 G1.X 워커 유형에서 실행됩니다. 일부 작업은 가끔 다음 오류로 실패합니다: \"지정된 서브넷에 요청을 충족할 만큼 충분한 여유 주소가 없습니다\". 이 오류의 가능성 높은 근본 원인은 무엇입니까?",
    "options": {
      "A": "서브넷에 IP 주소가 충분하지 않습니다.",
      "B": "G1.X 워커 유형이 서브넷에 접근할 수 없습니다.",
      "C": "AWS Glue에 서브넷에 IP 주소를 추가할 수 있는 올바른 IAM 권한이 없습니다.",
      "D": "VPC에 IP 주소가 충분하지 않습니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ IP Address Exhaustion — 서브넷의 사용 가능한 IP 주소 부족\n▸ G1.X Worker — AWS Glue 워커 유형, 각각 ENI(Elastic Network Interface) 필요\n▸ Subnet CIDR — 서브넷에 할당된 IP 주소 범위\n\n【정답 포인트】\n▸ 상황: 많은 작업이 \"거의 동시에\" 시작 → 많은 수의 워커 필요\n▸ 각 G1.X 워커는 서브넷에서 IP 주소(ENI) 필요\n▸ 문제: \"여유 주소가 없습니다\" → 서브넷의 가용 IP 부족\n▸ 예: /28 서브넷 = 16개 IP, AWS 예약 5개 = 11개 실제 가용\n▸ 해결: 더 큰 CIDR 범위의 서브넷 사용 (/27, /26 등)\n\n【오답 체크】\n(B) 워커 유형 접근성 → 문제가 아님, 서브넷 구성 일반적\n(C) IAM 권한 → AWS Glue는 IP 추가 권한이 필요 없음, ENI는 자동\n(D) VPC IP 부족 → 에러 메시지는 \"서브넷\"이라 명시\n\n【시험 포인트】\nSubnet IP management: 병렬 Glue 작업 많을 때는 각 워커의 ENI 필요 고려. 서브넷 CIDR 크기 계획이 필수. VPC 차원이 아닌 서브넷 차원 문제.",
    "en_q": "A data engineer configures a large number of AWS Glue jobs that all start up around the same time. All the jobs run for less than 1 hour in the same subnet of the same VPC. All the AWS Glue jobs run on a G1.X worker type. Some of the jobs occasionally fail with the following error: \"The specified subnet does not have enough free addresses to satisfy the request\". What is the likely root cause of the error?",
    "en_opts": {
      "A": "There are not enough IP addresses in the subnet.",
      "B": "The G1.X worker type cannot access the subnet.",
      "C": "AWS Glue does not have the correct IAM permissions to add additional IP addresses to the subnet.",
      "D": "There are not enough IP addresses in the VPC."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315498-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 247,
    "question": "회사가 Amazon EMR 클러스터에서 매일 밤 Apache Spark 애플리케이션을 실행합니다. 회사는 Amazon EC2 인스턴스를 사용하여 EMR 클러스터의 컴퓨팅 용량을 공급합니다. 회사는 Spark 애플리케이션을 클러스터 모드에서 배포했습니다. Spark 애플리케이션에 오류가 발생합니다. 오류에 대한 로그가 애플리케이션의 Spark 드라이버 표준 오류 로그에 저장됩니다. 데이터 엔지니어가 오류를 조사해야 합니다. 데이터 엔지니어는 이 오류 로그를 어디에서 찾을 수 있습니까?",
    "options": {
      "A": "엔지니어는 라이브 클러스터의 웹 UI에 연결하여 YARN ResourceManager 로그를 볼 수 있습니다.",
      "B": "엔지니어는 지속형 애플리케이션 UI에 연결하여 Spark UI에서 첫 번째 YARN 컨테이너 로그를 볼 수 있습니다.",
      "C": "엔지니어는 Amazon EMR 콘솔에 연결하여 Amazon S3에 보관된 Amazon EMR 단계 로그를 볼 수 있습니다.",
      "D": "엔지니어는 SSH를 사용하여 클러스터의 기본 노드에 연결하여 Spark 기록 서버 로그를 볼 수 있습니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Cluster Mode — Spark 드라이버가 EMR 클러스터의 YARN 컨테이너에서 실행\n▸ Step Logs — EMR 단계 실행 로그, S3에 자동 아카이빙\n▸ Driver stderr — Spark 드라이버의 표준 오류 출력\n\n【정답 포인트】\n▸ 클러스터 모드: 드라이버가 워커 노드 컨테이너에서 실행\n▸ 드라이버 stderr 로그 위치: EMR Step 실행 로그 → S3 자동 아카이빙\n▸ EMR 콘솔 또는 S3에서 로그 확인 가능\n▸ 클러스터 종료 후에도 S3 로그는 유지(원본 클러스터 삭제되어도)\n\n【오답 체크】\n(A) YARN ResourceManager 웹 UI → 실행 중 클러스터에만 접근, 종료 후 볼 수 없음\n(B) 지속형 애플리케이션 UI → 실행 중 뷰 전용, 종료 후 불가능\n(D) Spark 기록 서버 → 기본 노드의 로그는 임시, 클러스터 삭제 시 사라짐\n\n【시험 포인트】\nEMR logging: Cluster mode에서는 드라이버 로그가 YARN 컨테이너에 저장되고, EMR이 자동으로 S3에 아카이빙. 클러스터 삭제 후에도 조사 가능.",
    "en_q": "A company runs an Apache Spark application every night in an Amazon EMR cluster. The company uses Amazon EC2 instances to supply compute capacity for the EMR cluster. The company deployed the Spark application in cluster mode. An error occurs in the Spark application. A log for the error is stored in the application's Spark driver standard error logs. A data engineer needs to investigate the error. Where can the data engineer find this error log?",
    "en_opts": {
      "A": "The engineer can connect to the web UI on the live cluster to see the YARN ResourceManager logs.",
      "B": "The engineer can connect to the persistent application UI to see the first YARN container log in the Spark UI.",
      "C": "The engineer can connect to the Amazon EMR console to see the Amazon EMR step logs that are archived in Amazon S3.",
      "D": "The engineer can connect to the primary node of the cluster by using SSH to see the Spark history server logs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315499-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 248,
    "question": "회사가 매일 500GB의 대상 및 광고 데이터를 처리하고, Amazon S3에 CSV 파일로 저장하며, AWS Glue Data Catalog에 스키마를 등록합니다. 이들은 이러한 파일을 Apache Parquet 형식으로 변환하고 S3 버킷에 저장해야 합니다. 솔루션은 데이터를 동시에 처리하기 위해 15GiB 메모리 용량을 가진 장기 실행 워크플로우가 필요하며, 그 다음에는 처음 두 프로세스가 완료된 후에만 시작되는 상관 프로세스가 필요합니다. 이 요구사항을 가장 운영 오버헤드가 적은 방식으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue를 사용하여 워크플로우를 오케스트레이션하기 위해 Apache Airflow용 Amazon Managed Workflows(Amazon MWAA)를 사용합니다. 처음 두 프로세스가 완료된 후 세 번째 프로세스를 시작하도록 AWS Glue를 구성합니다.",
      "B": "Amazon EMR을 사용하여 워크플로우의 각 프로세스를 실행합니다. 처음 두 프로세스의 완료를 나타내는 메시지를 처리하도록 Amazon Simple Queue Service(Amazon SQS) 큐를 생성합니다. 처음 두 프로세스가 완료되면 AWS Lambda 함수를 구성하여 SQS 큐를 처리하고 세 번째 프로세스를 실행합니다.",
      "C": "AWS Glue 워크플로우를 사용하여 처음 두 프로세스를 병렬로 실행합니다. 처음 두 프로세스가 완료된 후 세 번째 프로세스가 시작되도록 합니다.",
      "D": "여러 AWS Lambda 함수를 오케스트레이션하는 AWS Step Functions를 사용하여 워크플로우를 구현합니다. 처음 두 프로세스가 완료된 후 세 번째 프로세스가 시작되도록 합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Glue Workflow — ETL 작업 오케스트레이션, 병렬/순차 실행 지원\n▸ Parallel Execution — 처음 두 프로세스 동시 실행\n▸ Job Dependencies — 프로세스 간 의존성 정의\n\n【정답 포인트】\n▸ 500GB CSV → Parquet 변환 (AWS Glue ETL 전문)\n▸ 병렬 처리 + 순차 상관 분석: Glue Workflow 특화\n▸ 운영 오버헤드 최소: Glue는 ETL 최적화, 별도 오케스트레이션 불필요\n▸ 메모리 15GiB: Glue Job 파라미터로 직접 지정 가능\n\n【오답 체크】\n(A) MWAA → Airflow 관리 필요, Glue 오케스트레이션은 MWAA보다 Glue Workflow가 더 간단\n(B) EMR + SQS + Lambda → 너무 복잡, Glue로 충분한 작업\n(D) Step Functions → Lambda는 오버헤드, Glue Job이 자체 실행 엔진\n\n【시험 포인트】\nGlue Workflow: 병렬 Glue Job 실행 후 순차 프로세스 → Glue Workflow의 표준 사용 패턴. MWAA/Step Functions보다 관리 간단.",
    "en_q": "A company processes 500 GB of audience and advertising data daily, storing CSV files in Amazon S3 with schemas registered in AWS Glue Data Catalog. They need to convert these files to Apache Parquet format and store them in an S3 bucket. The solution requires a long-running workflow with 15 GiB memory capacity to process the data concurrently, followed by a correlation process that begins only after the first two processes complete. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon Managed Workflows for Apache Airflow (Amazon MWAA) to orchestrate the workflow by using AWS Glue. Configure AWS Glue to begin the third process after the first two processes have finished.",
      "B": "Use Amazon EMR to run each process in the workflow. Create an Amazon Simple Queue Service (Amazon SQS) queue to handle messages that indicate the completion of the first two processes. Configure an AWS Lambda function to process the SQS queue by running the third process.",
      "C": "Use AWS Glue workflows to run the first two processes in parallel. Ensure that the third process starts after the first two processes have finished.",
      "D": "Use AWS Step Functions to orchestrate a workflow that uses multiple AWS Lambda functions. Ensure that the third process starts after the first two processes have finished."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/316748-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 249,
    "question": "회사가 AWS Organizations의 조직을 사용하여 여러 AWS 계정을 관리합니다. 회사는 Amazon Kinesis Data Streams의 향상된 팬아웃 데이터 스트림을 사용하여 여러 생산자로부터 스트리밍 데이터를 수신합니다. 회사는 데이터 스트림을 \"계정 A\"라는 계정에서 실행합니다. 회사는 \"계정 B\"라는 계정의 AWS Lambda 함수를 사용하여 데이터 스트림의 데이터를 처리하려고 합니다. 회사는 계정 B에서 Lambda 실행 역할을 생성하며, 계정 A의 데이터 스트림에 접근할 수 있는 권한이 있습니다. 회사가 이 요구사항을 충족하기 위해 취해야 하는 추가 단계는 무엇입니까?",
    "options": {
      "A": "크로스 계정 Lambda 실행 역할에 데이터 스트림 읽기 접근을 부여하는 SCP(서비스 제어 정책)를 생성합니다. SCP를 계정 A에 연결합니다.",
      "B": "데이터 스트림에 리소스 기반 정책을 추가하여 크로스 계정 Lambda 실행 역할에 대한 읽기 접근을 허용합니다.",
      "C": "크로스 계정 Lambda 실행 역할에 데이터 스트림 읽기 접근을 부여하는 SCP(서비스 제어 정책)를 생성합니다. SCP를 계정 B에 연결합니다.",
      "D": "데이터 스트림 읽기 접근을 함수에 부여하도록 크로스 계정 Lambda 함수에 리소스 기반 정책을 추가합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Cross-Account Access — 다른 AWS 계정의 리소스 접근\n▸ Resource-based Policy — 리소스가 다른 보안 주체의 접근 허용\n▸ IAM Role Policy — 보안 주체(Lambda)의 권한(정책 방향 반대)\n\n【정답 포인트】\n▸ 계정 B의 Lambda 역할: 이미 계정 A 접근 권한 보유 (자체 정책)\n▸ 추가 필요: 계정 A의 데이터 스트림이 계정 B 역할의 접근을 \"허용\"\n▸ Kinesis 스트림 리소스 기반 정책: \"계정 B Lambda 역할 → 읽기 허용\"\n▸ 양방향 신뢰 확보: Lambda 정책 + 스트림 정책\n\n【오답 체크】\n(A) SCP를 계정 A에 연결 → SCP는 권한 제한용, 부여용이 아님. 잘못된 방향\n(C) SCP를 계정 B에 연결 → Lambda 역할에 이미 권한 있음, SCP 불필요\n(D) Lambda 함수 리소스 정책 → Lambda의 실행 권한을 조정하는 것, 스트림 접근과 무관\n\n【시험 포인트】\nCross-account Kinesis: Lambda 역할은 이미 접근 권한 있으므로, Kinesis 스트림의 리소스 정책에서 명시적으로 그 역할을 허용해야 함. 타 계정 리소스 접근 시 리소스 정책 필수.",
    "en_q": "A company uses an organization in AWS Organizations to manage multiple AWS accounts. The company uses an enhanced fanout data stream in Amazon Kinesis Data Streams to receive streaming data from multiple producers. The company runs the data stream in an account named Account A. The company wants to use an AWS Lambda function in an account named Account В to process the data from the data stream. The company creates a Lambda execution role in Account В that has permissions to access data from the data stream in Account A. What additional step must the company take to meet this requirement?",
    "en_opts": {
      "A": "Create a service control policy (SCP) to grant the data stream read access to the cross-account Lambda execution role. Attach the SCP to Account A.",
      "B": "Add a resource-based policy to the data stream to allow read access for the cross-account Lambda execution role.",
      "C": "Create a service control policy (SCP) to grant the data stream read access to the cross-account Lambda execution role. Attach the SCP to Account B.",
      "D": "Add a resource-based policy to the cross-account Lambda function to grant the data stream read access to the function."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315500-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 250,
    "question": "회사가 Amazon Athena를 사용하여 Amazon S3 버킷의 데이터를 분석해야 합니다. 데이터 엔지니어는 연도, 월 및 일에 대해 AWS Glue 테이블 파티션을 구성해야 합니다. 데이터 엔지니어는 데이터의 스키마 변경에 맞춰 매일 파티션을 생성해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue DataBrew를 사용하여 AWS Glue 테이블의 파티션을 생성합니다.",
      "B": "AWS Lambda 함수를 사용하여 AWS Glue 테이블의 파티션을 생성합니다.",
      "C": "AWS Glue 테이블의 파티션 프로젝션 속성을 설정합니다.",
      "D": "AWS Glue 크롤러를 구성하여 설정된 일정에 따라 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Partition Projection — 파티션 메타데이터를 동적으로 프로젝션, 물리 생성 불필요\n▸ Schema Evolution — 데이터 스키마가 시간에 따라 변경됨\n\n【정답 포인트】\n▸ \"매일 파티션 생성\" → Lambda/Crawler는 매일 실행 필요\n▸ \"스키마 변경에 맞춰\" → 파티션 프로젝션은 자동으로 적응\n▸ Partition Projection: 테이블 속성에 year/month/day 범위 정의 → 파티션 자동 인식\n▸ 자동화 최적: Lambda 없이, 크롤러 불필요\n\n【오답 체크】\n(A) DataBrew — 데이터 정제/준비 도구, 파티션 관리 기능 없음\n(B) Lambda 함수 → 매일 수동 관리 필요, 자동화 불완전\n(D) Glue 크롤러 → 매일 실행으로 메타데이터 업데이트만, 파티션 자동 프로젝션은 아님\n\n【시험 포인트】\nPartition projection for hierarchical dates: year/month/day 계층형 파티션은 프로젝션으로 스키마 변경 자동 대응. Lambda/크롤러는 필요 없음. Athena 최적화.",
    "en_q": "A company needs to use Amazon Athena to analyze data that is in an Amazon S3 bucket. A data engineer needs to configure AWS Glue table partitions for year, month, and day. The data engineer needs to create the partitions every day to adjust to schema changes in the data. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS Glue DataBrew to create the partitions for the AWS Glue table.",
      "B": "Use an AWS Lambda function to create the partitions for the AWS Glue table.",
      "C": "Set partition projection properties for the AWS Glue table.",
      "D": "Configure an AWS Glue crawler to run on a set schedule."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315501-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 251,
    "question": "호텔 관리 회사가 각 호텔로부터 매일 데이터 파일을 수신합니다. 회사는 데이터를 AWS에 업로드하려고 합니다. 회사는 Amazon Athena를 사용하여 파일에 접근할 계획입니다. 회사는 파일을 실수로 인한 삭제로부터 보호해야 합니다. 회사는 온프레미스 서버에서 애플리케이션을 개발하여 파일을 완전 관리형 AWS 수집 서비스로 자동으로 전달할 것입니다. 이 요구사항을 가장 운영 오버헤드가 적은 방식으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS DataSync를 사용하여 온프레미스 서버의 데이터를 Amazon Elastic File System(Amazon EFS)으로 복제합니다. AWS Backup에서 자동 백업을 구성합니다.",
      "B": "온프레미스 서버에서 Amazon Kinesis Agent를 사용하여 Amazon Data Firehose로 데이터를 전송합니다. 버전 관리가 활성화된 Amazon S3 버킷에 데이터를 저장합니다.",
      "C": "AWS Glue 작업을 사용하여 온프레미스 서버에서 Amazon RDS로 데이터를 수집합니다. RDS에 자동 백업을 활성화합니다.",
      "D": "온프레미스 서버에서 자체 관리형 Apache Kafka 에이전트를 사용하여 Amazon Managed Streaming for Apache Kafka(Amazon MSK)로 데이터를 스트리밍합니다. 버전 관리가 활성화된 Amazon S3 버킷에 데이터를 저장합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Kinesis Agent — 온프레미스 에이전트, 데이터 스트리밍\n▸ Data Firehose — 완전 관리형 수집 서비스, S3/Redshift 자동 로드\n▸ S3 Versioning — 파일 삭제 보호, 이전 버전 복구 가능\n\n【정답 포인트】\n▸ \"완전 관리형 수집 서비스\" → Firehose 최적 (Kinesis Agent로 자동 전송)\n▸ \"삭제 보호\" → S3 Versioning (간단, 저비용)\n▸ \"Athena로 접근\" → S3 저장소가 최적\n▸ 운영 오버헤드: Kinesis Agent 설정만 필요, 관리 최소\n\n【오답 체크】\n(A) DataSync → EFS는 Athena 분석용 부적합, 백업은 추가 관리\n(C) Glue → RDS는 Athena 분석에 부적합, 파이프라인 복잡\n(D) Self-managed Kafka + MSK → Kafka 관리 오버헤드 높음, Firehose보다 복잡\n\n【시험 포인트】\nData ingestion + durability: 완전 관리형 수집(Firehose) + S3 Versioning은 표준 솔루션. 온프레미스 → Kinesis Agent → Firehose → S3 자동 적재.",
    "en_q": "A hotel management company receives daily data files from each of its hotels. The company wants to upload its data to AWS. The company plans to use Amazon Athena to access the files. The company needs to protect the files from accidental deletion. The company will develop an application on its on-premises servers to automatically forward the files to a fully managed AWS ingestion service. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use AWS DataSync to replicate data from the on-premises servers to Amazon Elastic File System (Amazon EFS). Configure automatic backups in AWS Backup.",
      "B": "Use the Amazon Kinesis Agent on the on-premises servers to send data to Amazon Data Firehose. Store the data in an Amazon S3 bucket that has versioning enabled.",
      "C": "Use AWS Glue jobs to ingest data from the on-premises servers into Amazon RDS. Enable automated backups for data protection.",
      "D": "Use a self-managed Apache Kafka agent on the on-premises servers to stream data to Amazon Managed Streaming for Apache Kafka (Amazon MSK). Store the data in an Amazon S3 bucket with versioning enabled."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315503-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 252,
    "question": "한 회사가 Amazon EMR 클러스터에서 실행되는 Apache Spark 작업을 사용하여 스트리밍 데이터를 처리하려고 합니다. Spark 작업은 데이터를 변환하여 Amazon S3 버킷에 저장합니다. 회사는 Amazon Athena를 사용하여 분석을 수행합니다. 회사는 분석 쿼리의 **가장 빠른 쿼리 시간**을 위해 데이터 형식을 최적화해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Avro 형식을 사용합니다. AWS Glue Data Catalog를 사용하여 스키마 변경을 추적합니다.",
      "B": "ORC 형식을 사용합니다. AWS Glue Data Catalog를 사용하여 스키마 변경을 추적합니다.",
      "C": "Apache Parquet 형식을 사용합니다. Amazon DynamoDB 테이블을 사용하여 스키마 변경을 추적합니다.",
      "D": "Apache Parquet 형식을 사용합니다. AWS Glue Data Catalog를 사용하여 스키마 변경을 추적합니다.",
      "E": "ORC 형식을 사용합니다. Amazon S3의 별도 파일에 스키마 정의를 저장합니다."
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ Parquet & ORC — 칼럼 기반 압축 포맷, Athena 최적화\n▸ AWS Glue Data Catalog — 메타데이터 관리, 파티션 추적\n\n【정답 포인트】\n▸ Parquet/ORC → 칼럼 기반 구조로 Athena 쿼리 성능 극대화\n▸ Glue Catalog → 스키마 변경 자동 추적, 메타스토어 통합\n▸ 조합 BD → Parquet\n(D) + ORC\n(B) 모두 Athena에 최적화\n\n【오답 체크】\n(A) Avro — 행 기반 포맷, 칼럼 기반 쿼리에 비효율적\n(C) DynamoDB — 메타데이터 추적에 부적절, Glue Catalog 사용 불가\n(E) S3 스키마 파일 — 자동 추적 불가, 운영 오버헤드 증가\n\n【시험 포인트】\nAthena 최적화 포맷: Parquet과 ORC는 칼럼 기반 압축으로 스캔 시간과 비용을 줄임. Glue Catalog는 메타스토어 통합으로 자동 스키마 관리를 제공. Avro는 행 기반이므로 분석 쿼리에 부적합.",
    "en_q": "A company wants to use Apache Spark jobs that run on an Amazon EMR cluster to process streaming data. The Spark jobs will transform and store the data in an Amazon S3 bucket. The company will use Amazon Athena to perform analysis. The company needs to optimize the data format for analytical queries. Which solutions will meet these requirements with the SHORTEST query times? (Choose two.)",
    "en_opts": {
      "A": "Use Avro format. Use AWS Glue Data Catalog to track schema changes.",
      "B": "Use ORC format. Use AWS Glue Data Catalog to track schema changes.",
      "C": "Use Apache Parquet format. Use an external Amazon DynamoDB table to track schema changes.",
      "D": "Use Apache Parquet format. Use AWS Glue Data Catalog to track schema changes.",
      "E": "Use ORC format. Store schema definitions in separate files in Amazon S3."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315504-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 253,
    "question": "한 회사가 매일 Amazon S3 버킷의 대용량 CSV 파일에 새 데이터를 추가합니다. 파일에는 지난 5년간의 회사 판매 데이터가 포함되어 있습니다. 파일 현재 5,000개 이상의 행을 포함합니다. 회사는 Amazon Athena를 사용하여 CSV 파일에서 쿼리를 실행하여 특정 기간의 데이터를 조회해야 합니다. 이 요구사항을 **가장 비용 효율적**으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Apache Spark 스크립트를 작성하여 CSV 데이터를 JSON 형식으로 변환합니다. AWS Glue 작업을 만들어 매일 스크립트를 실행합니다. JSON 데이터를 AWS Glue에 카탈로그합니다. Athena 쿼리를 JSON 데이터에서 실행합니다.",
      "B": "S3 버킷의 데이터를 파티션하기 위해 프리픽스를 사용합니다. SALE_DATE 열을 사용하여 매일 파티션을 만듭니다. AWS Glue에서 데이터를 카탈로그하고 파티션이 추가되었는지 확인합니다. Athena 쿼리를 새 파티션을 사용하도록 업데이트합니다.",
      "C": "Amazon EMR 클러스터를 시작합니다. AWS Glue Data Catalog를 기본 Apache Hive 메타스토어로 지정합니다. Presto in Trino를 사용하여 데이터에서 쿼리를 실행합니다.",
      "D": "Amazon RDS 데이터베이스를 만듭니다. CSV 파일의 스키마와 일치하는 SALES라는 테이블을 만듭니다. SALE_DATE 열에 인덱스를 만듭니다. Lambda 함수를 만들어 CSV 데이터를 RDS 데이터베이스에 로드합니다. S3 Event Notifications를 사용하여 Lambda 함수를 호출합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 파티셔닝 — SALE_DATE 기준 프리픽스 구조 (s3://bucket/year=YYYY/month=MM/day=DD/)\n▸ Glue Catalog 메타데이터 — 파티션 정보 자동 관리\n\n【정답 포인트】\n▸ S3 파티션 → Athena 스캔 범위 제한, 데이터 전송량 최소화\n▸ 비용 메커니즘: Athena는 스캔한 데이터양 기준 과금, 파티션 프루닝으로 비용 70-90% 절감\n▸ Glue Catalog → 파티션 자동 추적, 운영 오버헤드 최소\n\n【오답 체크】\n(A) CSV→JSON 변환 — 추가 Spark 작업 비용, 포맷 이점 없음\n(C) EMR+Presto — 클러스터 유지 비용, 서버리스 이점 상실\n(D) RDS 로드 — 일일 변환 작업 복잡, 관계형 DB 오버헤드, 비용 증가\n\n【시험 포인트】\nAthena 비용 최적화: S3 파티셔닝은 필수. 쿼리 시 파티션 프루닝(partition pruning)으로 스캔 범위 축소. Glue Crawler로 자동 파티션 발견. 칼럼 지정, 압축 포맷, 파티셔닝이 세 가지 핵심.",
    "en_q": "A company adds new data to a large CSV file in an Amazon S3 bucket every day. The file contains company sales data from the previous 5 years. The file currently includes more than 5,000 rows. The CSV file structure is shown below with sample data: The company needs to use Amazon Athena to run queries on the CSV file to fetch data from a specific time period. Which solution will meet this requirement MOST cost-effectively?",
    "en_opts": {
      "A": "Write an Apache Spark script to convert the CSV data to JSON format. Create an AWS Glue job to run the script every day. Catalog the JSON data in AWS Glue. Run the Athena queries on the JSON data.",
      "B": "Use prefixes to partition the data in the S3 bucket. Use the SALE_DATE column to create a partition for each day. Catalog the data in AWS Glue and ensure that the partitions are added. Update the Athena queries to use the new partitions.",
      "C": "Launch an Amazon EMR cluster. Specify AWS Glue Data Catalog as the default Apache Hive metastore. Use Presto in Trino to run queries on the data.",
      "D": "Create an Amazon RDS database. Create a table named SALES that matches the schema of the CSV file. Create an index on the SALE_DATE column. Create an AWS Lambda function to load the CSV data into the RDS database. Use S3 Event Notifications to invoke the Lambda function."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315505-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 254,
    "question": "데이터 엔지니어는 Amazon Redshift 테이블의 스키마 변경을 추적하기 위한 데이터 카탈로깅 솔루션을 구현해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue 크롤러를 예약하여 JDBC(Java Database Connectivity) 드라이버를 사용하여 테이블에서 매일 실행되도록 합니다. 크롤러를 AWS Glue Data Catalog를 업데이트하도록 구성합니다.",
      "B": "AWS DataSync를 사용하여 테이블 메타데이터를 AWS Glue Data Catalog에 기록합니다. AWS Glue 크롤러를 사용하여 매일 Data Catalog를 업데이트합니다.",
      "C": "AWS Schema Conversion Tool(AWS SCT)을 사용하여 테이블 메타데이터를 Apache Hive 메타스토어에 기록합니다. Amazon EventBridge Scheduler를 사용하여 매일 메타스토어를 업데이트합니다.",
      "D": "AWS Glue 크롤러를 예약하여 테이블에서 매일 실행되도록 합니다. 크롤러를 Apache Hive 메타스토어를 업데이트하도록 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Redshift Crawler — JDBC를 통한 스키마 탐지\n▸ AWS Glue Data Catalog — 중앙 집중식 메타데이터 저장소\n▸ 스키마 변경 추적 — 칼럼 추가/삭제/수정 감지\n\n【정답 포인트】\n▸ Glue Crawler + JDBC → Redshift 연결 지원, 테이블 스키마 자동 분석\n▸ Data Catalog → AWS 데이터 서비스 통합 (Athena, EMR, Lake Formation)\n▸ 일정 실행 → 매일 자동 크롤링으로 변경사항 감지\n\n【오답 체크】\n(B) DataSync — 파일 동기화 목적, 메타데이터 추적용 아님\n(C) SCT — DB 마이그레이션 도구, 카탈로깅용 부적절, EventBridge Scheduler 불필요\n(D) Hive 메타스토어 — AWS 서비스와 통합 부족, Glue 기능 제한\n\n【시험 포인트】\nGlue Crawler 메커니즘: JDBC를 통해 Redshift 연결, 테이블 스키마 자동 분석, 변경 사항 감지. Data Catalog는 스키마 버전 관리. 타사 메타스토어보다 AWS 통합이 우수.",
    "en_q": "A data engineer must implement a data cataloging solution to track schema changes in an Amazon Redshift table. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Schedule an AWS Glue crawler to run every day on the table by using the Java Database Connectivity (JDBC) driver. Configure the crawler to update an AWS Glue Data Catalog.",
      "B": "Use AWS DataSync to log the table metadata to an AWS Glue Data Catalog. Use an AWS Glue crawler to update the Data Catalog every day.",
      "C": "Use the AWS Schema Conversion Tool (AWS SCT) to log the table metadata to an Apache Hive metastore. Use Amazon EventBridge Scheduler to update the metastore every day.",
      "D": "Schedule an AWS Glue crawler to run every day on the table. Configure the crawler to update an Apache Hive metastore."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315506-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 255,
    "question": "데이터 엔지니어는 여러 Amazon S3 버킷의 데이터 레이크에 저장된 민감한 정보를 감지하기 위한 솔루션을 구축하고 있습니다. 솔루션은 소유 데이터 형식의 개인 식별 정보(PII)를 감지해야 합니다. 이 요구사항을 **운영 오버헤드가 가장 적게** 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "특정 패턴을 사용하여 AWS Glue Detect PII 변환을 사용합니다.",
      "B": "Amazon Macie와 관리형 데이터 식별자를 사용합니다.",
      "C": "사용자 정의 정규식을 사용하여 AWS Lambda 함수를 사용합니다.",
      "D": "Amazon Athena와 SQL 쿼리를 사용하여 사용자 정의 형식을 일치시킵니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Glue Detect PII — Glue ETL 내장 변환, 커스텀 패턴 지원\n▸ 소유 포맷 — 표준 PII 외 업체 특정 형식\n\n【정답 포인트】\n▸ Detect PII 변환 → 정규식 기반 패턴 매칭, 소유 포맷 지원\n▸ Glue 통합 → ETL 파이프라인 내 자동화, 운영 최소화\n▸ 운영 오버헤드 최소 → 코드 작성 불필요, 설정만으로 구현\n\n【오답 체크】\n(B) Macie — 표준 PII만 지원, 소유 포맷 미지원\n(C) Lambda 정규식 — 개발/유지보수 비용 높음, 성능 제약\n(D) Athena SQL — 쿼리 기반, 실시간 변환 불가\n\n【시험 포인트】\nGlue Detect PII: PII 검출과 동시에 데이터 마스킹/난독화 수행. 정규식 패턴 커스터마이징 가능. Macie는 기본 제공 식별자만 지원으로 제한적. ETL 파이프라인 통합이 가장 효율적.",
    "en_q": "A data engineer is building a solution to detect sensitive information that is stored in a data lake across multiple Amazon S3 buckets. The solution must detect personally identifiable information (PII) that is in a proprietary data format. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use the AWS Glue Detect PII transform with specific patterns.",
      "B": "Use Amazon Macie with managed data identifiers.",
      "C": "Use an AWS Lambda function with custom regular expressions.",
      "D": "Use Amazon Athena with a SQL query to match the custom formats."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/316744-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 256,
    "question": "데이터 엔지니어는 메타데이터를 Amazon DynamoDB 테이블에 저장하는 새로운 데이터 파이프라인을 구축하고 있습니다. 데이터 엔지니어는 지정된 나이보다 오래된 모든 항목이 매일 DynamoDB 테이블에서 제거되도록 해야 합니다. 이 요구사항을 **가장 적은 구성 노력**으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "DynamoDB 테이블에서 DynamoDB TTL을 활성화합니다. TTL 속성을 적절히 설정하도록 애플리케이션 소스 코드를 조정합니다.",
      "B": "일일 cron 표현식을 사용하여 AWS Lambda 함수를 트리거하는 Amazon EventBridge 규칙을 만듭니다. 지정된 나이보다 오래된 항목을 삭제하려면 Lambda 함수를 구성합니다.",
      "C": "DynamoDB 테이블에 라이프사이클 구성을 추가하여 지정된 나이보다 오래된 항목을 삭제합니다.",
      "D": "DynamoDB 스트림을 만들고 데이터 수정에 반응하는 AWS Lambda 함수를 사용합니다. 지정된 나이보다 오래된 항목을 삭제하도록 Lambda 함수를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ DynamoDB TTL — Time To Live, Unix 타임스탬프 기반 자동 만료\n▸ 구성 최소화 — 설정만으로 구현, 추가 서비스 불필요\n\n【정답 포인트】\n▸ TTL 활성화 → 테이블 수준 설정, DynamoDB 내장 기능\n▸ 자동 삭제 → 지정 시간 초과 항목 자동 제거, 추가 비용 거의 무료\n▸ 최소 구성 → TTL 속성값 설정만 필요, Lambda/EventBridge 불필요\n\n【오답 체크】\n(B) EventBridge+Lambda — 불필요한 서비스 조합, 비용 추가, 복잡도 증가\n(C) 라이프사이클 구성 — DynamoDB는 라이프사이클 미지원 (S3만 해당)\n(D) DynamoDB Stream — 실시간 감지는 과도함, TTL로 충분\n\n【시험 포인트】\nDynamoDB TTL: 테이블에 TTL 속성(초 단위 Unix 타임스탬프)을 지정하면 자동 만료. 구성 1단계. 비용 최적화. 스트림/Lambda는 더 복잡한 시나리오(조건 기반 삭제)용.",
    "en_q": "A data engineer is building a new data pipeline that stores metadata in an Amazon DynamoDB table. The data engineer must ensure that all items that are older than a specified age are removed from the DynamoDB table daily. Which solution will meet this requirement with the LEAST configuration effort?",
    "en_opts": {
      "A": "Enable DynamoDB TTL on the DynamoDB table. Adjust the application source code to set the TTL attribute appropriately.",
      "B": "Create an Amazon EventBridge rule that uses a daily cron expression to trigger an AWS Lambda function to delete items that are older than the specified age.",
      "C": "Add a lifecycle configuration to the DynamoDB table that deletes items that are older than the specified age.",
      "D": "Create a DynamoDB stream that has an AWS Lambda function that reacts to data modifications. Configure the Lambda function to delete items that are older than the specified age."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315507-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 257,
    "question": "라이드셰어링 회사는 Amazon DynamoDB 테이블에 모든 라이드 레코드를 저장합니다. 이 테이블은 다음 열과 값 유형을 포함합니다. 테이블은 현재 수십억 개의 항목을 포함합니다. 테이블은 RideID로 분할되고 TripStartTime을 정렬 키로 사용합니다. 회사는 데이터를 사용하여 각 드라이버가 완료한 라이드를 RideStatus를 기반으로 볼 수 있는 개인 인터페이스를 구축하려고 합니다. 솔루션은 전체 테이블을 스캔하지 않고 필요한 데이터에 액세스해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "DriverID에 로컬 보조 인덱스(LSI)를 만듭니다.",
      "B": "RiderID를 파티션 키로 사용하고 RideStatus를 정렬 키로 사용하는 글로벌 보조 인덱스(GSI)를 만듭니다.",
      "C": "DriverID를 파티션 키로 사용하고 RideStatus를 정렬 키로 사용하는 글로벌 보조 인덱스(GSI)를 만듭니다.",
      "D": "RiderID와 RideStatus를 사용하는 필터 표현식을 만듭니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ LSI — 로컬 보조 인덱스, 파티션 키 고정, 테이블 생성 후 수정 불가\n▸ GSI — 글로벌 보조 인덱스, 파티션/정렬 키 자유, 테이블 생성 후 추가 가능\n▸ 파티션 키 쿼리 효율 — 풀 테이블 스캔 회피\n\n【정답 포인트】\n▸ 요구사항: 드라이버별 라이드 조회 → DriverID 필요 (파티션 키)\n▸ RideStatus 필터 → 정렬 키로 지정, 쿼리 시 범위 조건\n▸ 글로벌 액세스 → GSI 필요 (LSI는 원본 테이블 파티션 키 고정)\n▸ 쿼리 패턴: query(DriverID=X, RideStatus=Y) → 스캔 최소화\n\n【오답 체크】\n(A) LSI — 파티션 키가 RideID이므로 LSI로 DriverID 접근 불가\n(B) RiderID 파티션 — 요구사항은 DriverID 기준 (드라이버 인터페이스)\n(D) 필터 표현식 — 전체 스캔 후 필터, 수십억 항목에 비효율\n\n【시험 포인트】\nDynamoDB 인덱싱: 파티션 키는 쿼리 성능의 핵심. GSI는 새 파티션 키 정의로 접근 패턴 변경. LSI는 원본 파티션 키 유지, 정렬 키만 변경. 요구사항 분석 필수 (어떤 속성으로 조회하는가?).",
    "en_q": "A ride-sharing company stores records for all rides in an Amazon DynamoDB table. The table includes the following columns and types of values: The table currently contains billions of items. The table is partitioned by RideID and uses TripStartTime as the sort key. The company wants to use the data to build a personal interface to give drivers the ability to view the rides that each driver has completed, based on RideStatus. The solution must access the necessary data without scanning the entire table. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a local secondary index (LSI) on DriverID.",
      "B": "Create a global secondary index (GSI) that uses RiderID as the partition key and RideStatus as the sort key.",
      "C": "Create a global secondary index (GSI) that uses DriverID as the partition key and RideStatus as the sort key.",
      "D": "Create a filter expression that uses RiderID and RideStatus."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/316747-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 258,
    "question": "한 회사가 Amazon S3 버킷에 구독자 정보를 저장합니다. 회사는 구독자가 구독을 종료할 때마다 분석을 실행합니다. 회사는 AWS Lambda 함수를 사용하여 S3 버킷의 이벤트에 대응하여 분석을 수행합니다. Lambda 함수는 S3 버킷의 데이터를 정리하고 AWS Glue 워크플로우를 시작합니다. Lambda 함수는 128MB의 메모리와 512MB의 임시 스토리지를 가집니다. Lambda 함수의 타임아웃은 15초입니다. 세 함수 모두 성공적으로 실행을 완료합니다. 그러나 CPU 사용률은 종종 거의 100%로 성능이 느립니다. 회사는 함수의 성능을 개선하고 파이프라인의 총 런타임을 줄이려고 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Lambda 함수의 메모리를 512MB로 증가시킵니다.",
      "B": "최대 재시도 시도 설정을 사용하여 재시도 횟수를 늘립니다.",
      "C": "Lambda 함수를 회사의 VPC에서 실행되도록 구성합니다.",
      "D": "Lambda 함수의 타임아웃 값을 15초에서 30초로 증가시킵니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Lambda 메모리 — CPU 할당과 연동, 메모리 증가 = CPU 증가\n▸ CPU 병목 — 100% 사용률은 메모리 부족 신호\n\n【정답 포인트】\n▸ 메모리 128MB → CPU 공유 리소스 제한\n▸ 512MB 증가 → CPU 비례 할당 증가 (약 4배)\n▸ 성능 개선 메커니즘: CPU 향상으로 처리 속도 3-5배 증가\n▸ 총 비용: 메모리 증가 비용 < CPU 병목 제거로 인한 시간 단축\n\n【오답 체크】\n(B) 재시도 — 함수가 이미 성공 완료, 재시도 불필요\n(C) VPC — ENI 바인딩 오버헤드 추가, 성능 저하\n(D) 타임아웃 — 시간초과 아님 (이미 15초 내 완료), 근본 원인 미해결\n\n【시험 포인트】\nLambda 성능: 메모리와 CPU는 비례 관계. 메모리 증가가 CPU 할당 증가로 이어짐. 100% CPU 사용은 메모리 부족을 의미. 타임아웃/재시도는 다른 시나리오 (시간초과, 연결 실패)용.",
    "en_q": "A company stores information about its subscribers in an Amazon S3 bucket. The company runs an analysis every time a subscriber ends their subscription. The company uses AWS Lambda functions to respond to events from the S3 bucket by performing analyses. The Lambda functions clean data from the S3 bucket and initiate an AWS Glue workflow. The Lambda functions have 128 MB of memory and 512 MB of ephemeral storage. The Lambda functions have a timeout of 15 seconds. All three functions successfully finish running. However, CPU usage is often near 100%, which causes slow performance. The company wants to improve the performance of the functions and reduce the total runtime of the pipeline. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Increase the memory of the Lambda functions to 512 MB.",
      "B": "Increase the number of retries by using the Maximum Retry Attempts setting.",
      "C": "Configure the Lambda functions to run in the company's VPC.",
      "D": "Increase the timeout value for the Lambda functions from 15 seconds to 30 seconds."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315508-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 259,
    "question": "한 회사가 Amazon Kinesis Data Streams의 데이터 스트림을 사용하여 여러 소스에서 거래 데이터를 수집합니다. 회사는 AWS Glue 추출, 변환 및 로드(ETL) 파이프라인을 사용하여 스트림의 데이터에서 이상값을 찾습니다. 워크플로우가 이상값을 감지하면 Amazon Simple Notification Service(Amazon SNS) 주제로 알림을 보냅니다. SNS 주제는 이상값의 로그를 검색하는 두 번째 워크플로우를 시작하고 로그를 Amazon S3 버킷에 저장합니다. 회사는 데이터 스트림이 높은 볼륨의 데이터를 처리할 때 SNS 주제로의 알림 지연을 경험합니다. 회사가 Amazon CloudWatch 로그를 검토할 때 트래픽이 많을 때 glue.driver.BlockManager.disk.diskSpaceUsed_MB 메트릭이 높은 값임을 알 수 있습니다. 회사는 이 문제를 해결해야 합니다. 이 요구사항을 **가장 적은 운영 노력**으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue ETL 작업의 데이터 처리 단위(DPU) 수를 증가시킵니다.",
      "B": "AWS Glue 대신 Amazon EMR을 사용하여 ETL 파이프라인을 관리합니다.",
      "C": "병렬 워크플로우 상태를 오케스트레이션하기 위해 AWS Step Functions를 사용합니다.",
      "D": "AWS Glue ETL 작업에 대한 자동 스케일링을 활성화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ diskSpaceUsed_MB 높음 — 메모리 부족, 디스크 스필(spill) 발생\n▸ Glue 자동 스케일링 — DPU 동적 조정, 워크로드 기반\n\n【정답 포인트】\n▸ 메트릭 분석: diskSpaceUsed_MB 증가 = 메모리 부족 → 디스크 사용\n▸ 자동 스케일링 → 고트래픽 감지 시 DPU 자동 증가\n▸ 최소 운영 노력 → \"활성화\" 한 단계만 필요, 모니터링/조정 자동화\n\n【오답 체크】\n(A) DPU 고정 증가 — 항상 높은 비용, 저트래픽 시 낭비\n(B) EMR 마이그레이션 — 운영 복잡도 증가 (클러스터 관리 필요)\n(C) Step Functions — 병렬 처리는 별개 문제, 메모리 부족 미해결\n\n【시험 포인트】\nGlue 자동 스케일링: 메트릭 모니터링으로 DPU 자동 증가/감소. diskSpaceUsed_MB는 메모리 압박 신호. 자동 스케일링이 고정 DPU 증가보다 비용 효율적. Kinesis 고처리량 → 동적 대응 필요.",
    "en_q": "A company uses a data stream in Amazon Kinesis Data Streams to collect transactional data from multiple sources. The company uses an AWS Glue extract, transform, and load (ETL) pipeline to look for outliers in the data from the stream. When the workflow detects an outlier, it sends a notification to an Amazon Simple Notification Service (Amazon SNS) topic. The SNS topic initiates a second workflow to retrieve logs for the outliers and stores the logs in an Amazon S3 bucket. The company experiences delays in the notifications to the SNS topic during periods when the data stream is processing a high volume of data. When the company examines Amazon CloudWatch logs, the company notices a high value for the glue.driver.BlockManager.disk.diskSpaceUsed_MB metric when the traffic is high. The company must resolve this issue. Which solution will meet this requirement with the LEAST operational effort?",
    "en_opts": {
      "A": "Increase the number of data processing units (DPUs) in AWS Glue ETL jobs.",
      "B": "Use Amazon EMR to manage the ETL pipeline instead of AWS Glue.",
      "C": "Use AWS Step Functions to orchestrate a parallel workflow state.",
      "D": "Enable auto scaling for the AWS Glue ETL jobs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/316746-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 260,
    "question": "한 회사는 Amazon Redshift 클러스터에 대해 순차적으로 여러 SQL 쿼리를 실행하는 데이터 처리 파이프라인을 가지고 있습니다. 회사는 두 번째 회사와 병합됩니다. 원래 회사는 두 회사의 판매 테이블을 조인하여 판매 수익 데이터를 집계하는 쿼리를 수정합니다. 첫 번째 회사의 판매 테이블은 테이블 S1이라고 합니다. 두 번째 회사의 판매 테이블은 테이블 S2라고 합니다. 표 S1에는 100억 개의 레코드가 포함됩니다. 표 S2에는 9억 개의 레코드가 포함됩니다. 수정 후 쿼리가 느려집니다. 데이터 엔지니어는 쿼리 성능을 개선해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까? (2개 선택)",
    "options": {
      "A": "두 판매 테이블 모두에 KEY 분배 스타일을 사용합니다. 조인에 사용할 낮은 카디널리티 열을 선택합니다.",
      "B": "두 판매 테이블 모두에 KEY 분배 스타일을 사용합니다. 조인에 사용할 높은 카디널리티 열을 선택합니다.",
      "C": "표 S1에 EVEN 분배 스타일을 사용합니다. 표 S2에 ALL 분배 스타일을 사용합니다.",
      "D": "Amazon Redshift 쿼리 최적화 프로그램을 사용하여 구현할 최적화를 검토하고 선택합니다.",
      "E": "Amazon Redshift Advisor를 사용하여 구현할 최적화를 검토하고 선택합니다."
    },
    "answer": "BE",
    "explanation": "【핵심 용어】\n▸ Redshift 분배 스타일 — KEY(조인 컬럼), EVEN(라운드로빈), ALL(브로드캐스트)\n▸ 조인 성능 — 같은 노드의 데이터 일치 → 네트워크 트래픽 최소화\n\n【정답 포인트】\n▸ KEY 분배\n(B) → 조인 컬럼으로 분배, 양쪽 테이블 같은 노드 배치\n▸ 높은 카디널리티 → 데이터 균등 분산, 핫 노드 회피\n▸ Redshift Advisor\n(E) → 조인 성능 분석, 분배 전략 권장\n▸ 최적화 메커니즘: 분배된 조인(Distributed Join) 실행, 네트워크 오버헤드 제거\n\n【오답 체크】\n(A) 낮은 카디널리티 — 데이터 치우침, 핫 노드 과부하 (10B vs 900M)\n(C) EVEN+ALL — EVEN은 균등 분산이나 조인 컬럼 미지정, ALL은 900M 브로드캐스트 비효율\n(D) 쿼리 최적화 프로그램 — 자동 최적화는 제한적, 수동 조정 필요\n\n【시험 포인트】\nRedshift 조인: KEY 분배는 조인 성능 핵심. 고카디널리티 컬럼 선택으로 균등 분산. Advisor는 권장사항 제공. 분배 전략 + 도구 조합이 최적 답변.",
    "en_q": "A company has a data processing pipeline that runs multiple SQL queries in sequence against an Amazon Redshift cluster. The company merges with a second company. The original company modifies a query that aggregates sales revenue data to join sales tables from both companies. The sales table for the first company is named Table S1. The sales table for the second company is named Table S2. Table S1 contains 10 billion records. Table S2 contains 900 million records. The query becomes slow after the modification. A data engineer must improve the query performance. Which solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Use the KEY distribution style for both sales tables. Select a low cardinality column to use for the join.",
      "B": "Use the KEY distribution style for both sales tables. Select a high cardinality column to use for the join.",
      "C": "Use the EVEN distribution style for Table S1. Use the ALL distribution style for Table S2.",
      "D": "Use the Amazon Redshift query optimizer to review and select optimizations to implement.",
      "E": "Use Amazon Redshift Advisor to review and select optimizations to implement."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/316743-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 261,
    "question": "게임 회사는 AWS Glue를 사용하여 실시간 스트리밍 데이터에 대해 Apache Iceberg 테이블에 대한 읽기 및 쓰기 작업을 수행합니다. Iceberg 테이블의 데이터는 Apache Parquet 형식입니다. 회사는 느린 쿼리 성능을 경험하고 있습니다. 어떤 솔루션이 쿼리 성능을 개선합니까? (2개 선택)",
    "options": {
      "A": "AWS Glue Data Catalog를 사용하여 일정에 따라 Iceberg 테이블에 대한 칼럼 수준 통계를 생성합니다.",
      "B": "AWS Glue Data Catalog를 사용하여 자동으로 Iceberg 테이블을 압축합니다.",
      "C": "AWS Glue Data Catalog를 사용하여 Iceberg 테이블의 인덱스를 자동으로 최적화합니다.",
      "D": "AWS Glue Data Catalog를 사용하여 Iceberg 테이블에 대해 복사 시 쓰기를 활성화합니다.",
      "E": "AWS Glue Data Catalog를 사용하여 Iceberg 테이블에 대한 뷰를 생성합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ Iceberg 테이블 — 변화형 데이터 구조, 스냅샷 기반 관리\n▸ 칼럼 통계 — 쿼리 플래너 최적화 정보\n▸ Compaction — 작은 파일 병합, 읽기 성능 향상\n\n【정답 포인트】\n▸ 칼럼 통계\n(A) → 쿼리 옵티마이저 정보 제공, 실행 계획 개선\n▸ 자동 Compaction\n(B) → 작은 파일 병합, I/O 오버헤드 감소\n▸ 성능 메커니즘: 통계로 스캔 범위 최소화, 컴팩션으로 메타데이터 오버헤드 제거\n\n【오답 체크】\n(C) 인덱스 최적화 — Iceberg 인덱스는 선택적, 기본 최적화 아님\n(D) Copy-on-Write — 데이터 정합성용, 성능 개선 아님\n(E) 뷰 생성 — 논리 계층, 쿼리 성능 미영향\n\n【시험 포인트】\nIceberg 성능: 통계는 쿼리 플래너 최적화의 핵심. Parquet 형식은 이미 칼럼 압축. Compaction은 실시간 스트리밍으로 생성되는 작은 파일들을 병합. Glue 자동화로 운영 오버헤드 최소화.",
    "en_q": "A gaming company uses AWS Glue to perform read and write operations on Apache Iceberg tables for real-time streaming data. The data in the Iceberg tables is in Apache Parquet format. The company is experiencing slow query performance. Which solutions will improve query performance? (Choose two.)",
    "en_opts": {
      "A": "Use AWS Glue Data Catalog to generate column-level statistics for the Iceberg tables on a schedule.",
      "B": "Use AWS Glue Data Catalog to automatically compact the Iceberg tables.",
      "C": "Use AWS Glue Data Catalog to automatically optimize indexes for the Iceberg tables.",
      "D": "Use AWS Glue Data Catalog to enable copy-on-write for the Iceberg tables.",
      "E": "Use AWS Glue Data Catalog to generate views for the Iceberg tables."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/316745-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 262,
    "question": "한 회사의 데이터 엔지니어는 추출, 변환 및 로드(ETL) 워크플로우를 최적화하고 있습니다. 현재 아키텍처는 대규모 변환을 위해 Amazon EMR 및 Apache Spark를 사용하고 다른 ETL 작업을 위해 AWS Glue를 사용합니다. 워크플로우는 처리된 데이터를 Amazon S3 기반 데이터 레이크에 로드합니다. 회사는 여러 ETL 작업을 오케스트레이션하고 실행을 자동화할 수 있는 완전히 관리되는 서버리스 솔루션으로 이동하려고 합니다. 새로운 솔루션은 계속해서 Spark를 사용하여 데이터를 처리해야 합니다. 회사는 최소한의 수동 개입으로 ETL 워크플로우를 오케스트레이션하고 자동화해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "모든 ETL 작업을 AWS Glue로 마이그레이션합니다. AWS Glue 워크플로우를 사용하여 파이프라인을 오케스트레이션합니다.",
      "B": "AWS Step Functions 및 Amazon EventBridge를 구성하여 AWS Glue 및 Amazon EMR의 ETL 워크플로우를 오케스트레이션하고 호출합니다.",
      "C": "Amazon S3에 새 데이터가 업로드될 때 데이터 변환 작업을 위해 AWS Lambda 함수를 구성하여 Amazon S3 이벤트 알림을 처리합니다.",
      "D": "Apache Airflow 자동 스케줄링에 대한 Amazon Managed Workflows를 사용하여 Spark 기반 ETL 작업을 오케스트레이션합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 서버리스 솔루션 — 관리 인프라 최소화\n▸ Glue 워크플로우 — 내장 오케스트레이션\n▸ Spark 지원 — AWS Glue Jobs (Spark, Python)\n\n【정답 포인트】\n▸ AWS Glue 완전 마이그레이션 → 서버리스 + Spark 지원\n▸ Glue 워크플로우 → 내장 오케스트레이션, 별도 서비스 불필요\n▸ 최소 운영: EMR 클러스터 관리 제거, Glue 자동 관리\n▸ 자동화: Glue 워크플로우 스케줄 기능 내장\n\n【오답 체크】\n(B) Step Functions+EventBridge — EMR 유지, 오버헤드 증가, 서버리스 이점 제한\n(C) Lambda → 간단한 변환용, Spark 처리 불가\n(D) MWAA (Airflow) → 오케스트레이션 전문, 서버리스 아님 (관리형이지만)\n\n【시험 포인트】\nGlue 워크플로우: Spark 기반 ETL 지원, 내장 스케줄링, 트리거 조건. EMR 마이그레이션으로 완전 서버리스 전환. 운영 복잡도 최소. \"fully managed serverless\" 요구사항 충족.",
    "en_q": "A data engineer at a company is optimizing extract, transform, and load (ETL) workflows. The current architecture uses Amazon EMR and Apache Spark for large-scale transformations and AWS Glue for other ETL tasks. The workflows load processed data into an Amazon S3 based data lake. The company wants to move to a fully managed serverless solution that can orchestrate multiple ETL jobs and automate execution. The new solution must continue to use Spark to process data. The company needs to orchestrate and automate the ETL workflows with minimal manual intervention. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Migrate all ETL jobs to AWS Glue. Use AWS Glue workflows to orchestrate the pipeline.",
      "B": "Configure AWS Step Functions and Amazon EventBridge to orchestrate and invoke ETL workflows in AWS Glue and Amazon EMR.",
      "C": "Configure AWS Lambda functions to process Amazon S3 event notifications for data transformation tasks when new data is uploaded.",
      "D": "Use Amazon Managed Workflows for Apache Airflow automatic scheduling to orchestrate the Spark-based ETL jobs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382561-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 263,
    "question": "전 세계적으로 운영하는 회사는 AWS 리전에서의 데이터를 해당 리전 내에서만 액세스할 수 있도록 요구하는 규정을 따라야 합니다. 데이터 엔지니어는 데이터 엔지니어가 작업하는 리전에 리소스를 생성할 데이터 파이프라인을 만들고 있습니다. 데이터 파이프라인은 데이터 엔지니어가 작업하는 리전에서만 데이터에 액세스해야 합니다. 파이프라인은 Active Directory를 ID 및 인증 시스템으로 사용합니다. 파이프라인은 사용자 정의 ID 브로커 애플리케이션을 사용하여 직원이 Active Directory에 로그인했는지 확인하고 AssumeRole API 작업을 사용하여 임시 자격 증명을 얻습니다. 어떤 솔루션이 **가장 적은 관리 노력**으로 위치 요구사항을 충족합니까?",
    "options": {
      "A": "리소스를 만들 수 있는 권한이 있는 IAM 역할을 만듭니다. 사용자가 해당 리전에서만 리소스를 만들 수 있도록 하는 각 리전의 정책을 만듭니다. 직원이 임시 자격 증명을 얻을 때 정책을 세션 정책으로 전달합니다.",
      "B": "각 리전에 대해 별도로 데이터 엔지니어를 위한 IAM 역할을 만듭니다. 각 데이터 엔지니어에게 적절한 리전 특정 IAM 역할을 가정하여 임시 자격 증명을 얻도록 지시합니다.",
      "C": "각 리전에 대해 IAM 그룹을 만듭니다. 각 IAM 그룹에 필요한 IAM 정책을 포함합니다. 사용자가 임시 자격 증명을 얻어 로그인할 때 사용자가 IAM 그룹을 기반으로 적절한 액세스를 받도록 각 IAM 그룹에 사용자를 추가합니다.",
      "D": "사용자가 특정 리전에서 리소스를 만들 수 있도록 하는 개별 IAM 정책을 만듭니다. 각 데이터 엔지니어에게 정책을 할당합니다. 사용자가 AWS에 로그인할 때 개별적으로 할당된 역할을 가정할 수 있도록 허용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 세션 정책 — AssumeRole 시점의 동적 권한 제약\n▸ 리전 격리 — 규정 준수, 데이터 주권\n\n【정답 포인트】\n▸ 세션 정책 메커니즘 → ID 브로커가 AssumeRole 호출 시 리전별 정책 전달\n▸ 동적 제약 → 각 엔지니어마다 일일이 IAM 역할 생성 불필요\n▸ 최소 관리: 1개 IAM 역할 + 각 리전별 1개 정책만 필요\n▸ 확장성: 새 엔지니어/리전 추가 시 ID 브로커 정책만 수정\n\n【오답 체크】\n(B) 리전별 개별 IAM 역할 — N명 엔지니어 × M개 리전 = N×M개 역할, 관리 복잡\n(C) IAM 그룹 — AD 연동 구조와 맞지 않음, 그룹 권한은 정적\n(D) 개별 IAM 정책 — 각 엔지니어마다 정책 할당, 매우 복잡\n\n【시험 포인트】\n세션 정책 (Session Policy): AssumeRole 시 동적으로 권한 제약. ID 브로커가 사용자 정보 기반 정책 생성. \"LEAST administrative effort\" = 단일 역할 + 동적 정책. 이를 통해 N×M 복잡도를 N+M 수준으로 감소.",
    "en_q": "A company that operates globally must follow regulations that require data from an AWS Region to be accessible only within that Region. A data engineer is creating a data pipeline that will create resources in the Region where the data engineer works. The data pipeline should have access to data only from the Region where the data engineer works. The pipeline uses Active Directory as an identity and authentication system. The pipeline uses a custom identity broker application to verify that employees are signed in to Active Directory and to obtain temporary credentials by using the AssumeRole API operation. Which solution will meet the locality requirements with the LEAST administrative effort?",
    "en_opts": {
      "A": "Create an IAM role that has permissions to create resources. Create a policy for each Region that ensures users can create resources only in that Region. Pass the policy as the session policy when employees obtain the temporary credentials.",
      "B": "Create an IAM role for data engineers in each Region separately. Instruct each data engineer to obtain temporary credentials by assuming the appropriate Region specific IAM role.",
      "C": "Create an IAM group for each Region. Include the required IAM policies for each IAM group. Add users to each IAM group so that when users log in by obtaining the temporary credentials, the users will receive the appropriate access based on the IAM group.",
      "D": "Create individual IAM policies that allow users to create resources in a specific Region. Assign the policies to each data engineer. Allow users to assume the individually assigned role when the users log in to AWS."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382574-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 264,
    "question": "한 회사는 Amazon S3 버킷에서 Amazon Redshift 테이블로 매일 자동으로 데이터를 수집해야 합니다. 회사는 Amazon Redshift에서 민감한 데이터를 난독화해야 합니다. 사용자는 민감한 데이터를 평문으로 볼 수 없어야 합니다. 이 요구사항을 **가장 적은 운영 오버헤드**로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "회사의 AWS 계정에 Amazon Macie를 활성화합니다. S3 버킷에 대한 민감한 데이터 검색 작업을 구성합니다. AWS Glue 작업을 구성하여 데이터를 Amazon Redshift에 로드합니다.",
      "B": "회사의 AWS 계정에 Amazon Macie를 활성화합니다. Macie 분석을 기반으로 데이터 열에 플래그를 지정하고 난독화하려면 AWS Glue 작업을 구성합니다. 데이터를 Amazon Redshift에 로드합니다.",
      "C": "AWS Glue 작업을 구성하여 S3 버킷에서 데이터를 읽고, 민감한 데이터를 감지하고 난독화하며, 데이터를 Amazon Redshift에 로드합니다.",
      "D": "AWS Glue 작업을 구성하여 데이터를 Amazon Redshift에 로드합니다. Amazon Redshift를 사용하여 민감한 데이터를 감지하고, 마스킹 정책을 만들고, 동적 마스킹을 적용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 동적 마스킹 — Redshift 기능, 사용자 역할별 실시간 마스킹\n▸ 운영 오버헤드 — 관리 작업 최소화\n\n【정답 포인트】\n▸ Redshift 동적 마스킹 → 로드 후 정책 기반 자동 마스킹\n▸ 권한 통합 → Redshift IAM 역할 기반, 사용자별 접근 제어\n▸ 최소 운영: Glue는 단순 로드만 담당, 마스킹은 Redshift 정책\n▸ 유연성 → 정책 변경만으로 마스킹 규칙 수정 가능\n\n【오답 체크】\n(A) Macie 검색만 → 난독화 미실행, 추가 작업 필요\n(B) Glue 난독화 → 개발 비용 증가, 유지보수 복잡\n(C) Glue 커스텀 난독화 → 위 B와 동일, 복잡도 높음\n\n【시험 포인트】\nRedshift 동적 마스킹: Redshift의 네이티브 기능. 마스킹 정책 정의 → 사용자 조회 시 자동 마스킹. 평문 저장 불필요 (평문은 디스크에 저장되지만 쿼리 결과만 마스킹). Glue+Macie는 사전 감지용, Redshift는 사후 제어용.",
    "en_q": "A company needs a solution to automatically ingest data from an Amazon S3 bucket to an Amazon Redshift table every day. The company must obfuscate sensitive data in Amazon Redshift. Users must not be able to view the sensitive data as plaintext. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Enable Amazon Macie for the company's AWS account. Configure a sensitive data discovery job for the S3 bucket. Configure an AWS Glue job to load the data into Amazon Redshift.",
      "B": "Enable Amazon Macie for the company's AWS account. Configure an AWS Glue job to flag and obfuscate data columns based on the Macie analysis. Load the data into Amazon Redshift.",
      "C": "Configure an AWS Glue job to read the data from the S3 bucket, detect and obfuscate sensitive data, and load the data into Amazon Redshift.",
      "D": "Configure an AWS Glue job to load the data into Amazon Redshift. Use Amazon Redshift to detect the sensitive data, create masking policies, and apply dynamic masking."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382577-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 265,
    "question": "한 회사는 저지연 시간으로 실시간 많은 스트리밍 데이터를 집계하고 필터링해야 합니다. 회사는 분석을 위해 데이터를 Amazon S3에 저장해야 합니다. 이 요구사항을 **가장 운영 효율적**인 방식으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "프로비저닝된 용량을 사용하는 Amazon Kinesis Data Streams 및 AWS Lambda 함수를 사용하여 사용자 정의 변환을 수행하고 Amazon S3와 통합합니다.",
      "B": "내장 데이터 변환이 있는 Amazon Data Firehose를 사용합니다. 데이터를 Amazon S3로 직접 제공합니다.",
      "C": "Amazon Kinesis Data Streams 및 Amazon Managed Service for Apache Flink를 사용하여 복잡한 처리를 수행하고 Amazon S3와 통합합니다.",
      "D": "Amazon Data Firehose 및 AWS Lambda 함수를 사용하여 사용자 정의 변환을 수행하고 데이터를 Amazon S3로 제공합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 실시간 집계 & 필터링 — 복잡한 변환\n▸ 저지연 & 운영 효율 — 서버리스, 자동 스케일링\n\n【정답 포인트】\n▸ Kinesis Streams + Flink → 복잡한 스트림 처리 (집계, 윈도우, 필터)\n▸ Flink (Managed Service) → 복잡 로직 코드 기반, 확장성 탁월\n▸ 운영 효율: Flink는 자동 스케일링, 상태 관리 자동화\n▸ 지연: Kinesis 실시간 수집, Flink 마이크로배치 처리\n\n【오답 체크】\n(A) Kinesis+Lambda → Lambda 개별 호출, 지연 누적 가능\n(B) Firehose 내장 변환 → 단순 변환만 지원, 복잡 집계 불가\n(D) Firehose+Lambda → Firehose 제한, Lambda 비용 증가\n\n【시험 포인트】\n\"복잡한 처리\" 키워드 → Flink. \"저지연 + 대용량\" → Kinesis+Flink 조합. Firehose는 단순 통로용. Flink는 windowing, stateful operations 가능. 운영 효율 = 관리형 + 자동 스케일링.",
    "en_q": "A company needs to aggregate and filter a large amount of streaming data in real-time with low latency. The company needs to store the data in Amazon S3 for analysis. Which solution will meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Use Amazon Kinesis Data Streams with provisioned capacity and AWS Lambda functions to perform custom transformations and to integrate with Amazon S3.",
      "B": "Use Amazon Data Firehose with built-in data transformations. Deliver the data directly to Amazon S3.",
      "C": "Use Amazon Kinesis Data Streams and Amazon Managed Service for Apache Flink to perform complex processing and to integrate with Amazon S3.",
      "D": "Use Amazon Data Firehose and AWS Lambda functions to perform custom transformations and to deliver the data to Amazon S3."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382556-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 266,
    "question": "한 회사는 기계 학습(ML) 모델을 개발하고 있습니다. 데이터 엔지니어는 훈련 데이터에 데이터 품질 규칙을 적용해야 합니다. 회사는 훈련 데이터를 Amazon S3 버킷에 저장합니다. 이 요구사항을 **가장 적은 운영 오버헤드**로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "코드에서 데이터 품질을 확인하고 예외를 발생시키는 AWS Lambda 함수를 만듭니다. S3 버킷에 데이터가 추가될 때 함수를 실행합니다. 코드의 예외에 대해 Amazon CloudWatch 경보를 만듭니다.",
      "B": "S3 버킷의 데이터에 대해 AWS Glue DataBrew 프로젝트를 만듭니다. 데이터 품질 규칙에 대한 규칙 집합을 만듭니다. 데이터 품질 규칙을 실행하려면 프로필 작업을 만듭니다. Amazon EventBridge를 사용하여 S3 버킷에 데이터가 추가될 때 프로필 작업을 실행합니다.",
      "C": "Amazon EMR 프로비저닝된 클러스터를 만듭니다. Python 오픈 소스 데이터 품질 패키지를 EMR 클러스터에 추가합니다. Python 패키지를 사용하여 데이터 품질 규칙에 대한 코드를 작성하고 S3 버킷에서 EMR 클러스터로 데이터를 복사합니다. S3 버킷에서 EMR 클러스터로 데이터를 복사합니다. 데이터 품질 규칙을 실행합니다.",
      "D": "데이터 품질 규칙을 평가하는 AWS Lambda 함수를 만듭니다. AWS Step Functions를 사용하여 데이터가 데이터 품질 규칙을 충족하지 못할 때 알림을 게시하는 워크플로우를 오케스트레이션합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue DataBrew — 노코드 데이터 품질 플랫폼\n▸ 프로필 작업 — 규칙 적용 & 검증\n\n【정답 포인트】\n▸ DataBrew UI → 노코드, 규칙 세트 시각적 구성\n▸ 프로필 작업 → S3 데이터 자동 평가, 리포트 생성\n▸ EventBridge 통합 → 일정 또는 이벤트 기반 자동 실행\n▸ 최소 운영: 코드 작성 불필요, 설정만 필요\n\n【오답 체크】\n(A) Lambda 커스텀 코드 — 개발/유지보수 비용\n(C) EMR 클러스터 — 인프라 관리 복잡, 비용 높음\n(D) Lambda+Step Functions — 위 A와 유사, 오버엔지니어링\n\n【시험 포인트】\nDataBrew: 데이터 품질 검증의 기본 선택. 노코드로 규칙 정의. 프로필 작업은 자동 검증 & 리포트. EventBridge로 자동화. \"LEAST operational overhead\" = 노코드 + 자동화 + 설정만.",
    "en_q": "A company is developing machine learning (ML) models. A data engineer needs to apply data quality rules to training data. The company stores the training data in an Amazon S3 bucket. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create an AWS Lambda function to check data quality and to raise exceptions in the code. Run the function when data is added to the S3 bucket. Create an Amazon CloudWatch alarm for exceptions in the code.",
      "B": "Create an AWS Glue DataBrew project for the data in the S3 bucket. Create a ruleset for the data quality rules. Create a profile job to run the data quality rules. Use Amazon EventBridge to run the profile job when data is added to the S3 bucket.",
      "C": "Create an Amazon EMR provisioned cluster. Add a Python open source data quality package to the EMR cluster. Use the Python package to write code for data quality rules and to copy the data from the S3 bucket to the EMR cluster. Copy the data from the S3 bucket to the EMR cluster. Run the data quality rules.",
      "D": "Create AWS Lambda functions to evaluate data quality rules. Use AWS Step Functions to orchestrate a workflow that publishes notifications when the data fails to meet data quality rules."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382571-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 267,
    "question": "데이터 엔지니어는 시간에 민감한 판매 데이터를 분석해야 합니다. 회사는 데이터를 Amazon S3 버킷에 저장합니다. 데이터 엔지니어는 AWS Glue Data Catalog를 사용하여 데이터에 액세스합니다. 데이터 엔지니어가 분석을 수행할 때 데이터 엔지니어는 일부 레코드가 누락되거나 최신 상태가 아닌 것을 알 수 있습니다. 이 문제의 가능성 있는 원인은 무엇입니까?",
    "options": {
      "A": "AWS Glue Data Catalog가 최신 S3 파티션 변경사항으로 업데이트되지 않았습니다.",
      "B": "잘못된 IAM 역할이 AWS Glue 작업에 할당되었습니다.",
      "C": "S3 버킷에서 버전 관리가 활성화되지 않았습니다.",
      "D": "AWS Glue 작업 일정이 서로 겹칩니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Glue Data Catalog 메타데이터 — 파티션 정보 동기화\n▸ S3 파티션 변경 — 새 파일 추가/삭제\n\n【정답 포인트】\n▸ 증상: 누락/구식 레코드 → 메타데이터 불일치\n▸ 원인 분석: Glue Catalog는 Crawler 실행 시점의 스냅샷\n▸ 파티션 추가 후 Catalog 미동기 → 쿼리에서 신규 파티션 미인식\n▸ 해결: Crawler 자동 일정 재구성, 파티션 수동 추가\n\n【오답 체크】\n(B) IAM 역할 — 권한 부족이면 쿼리 오류/실패, 누락 레코드 아님\n(C) S3 버전 관리 — 버전 추적용, 카탈로그 동기화와 무관\n(D) Glue 작업 중첩 — 성능 이슈, 데이터 누락 아님\n\n【시험 포인트】\n시간에 민감한 데이터 → 주기적 동기화 필수. Glue Crawler의 일정이 중요. 파티션 발견 자동화 필수 (partition.projection 또는 Crawler). Data Catalog는 메타데이터 캐시 → 주기적 갱신 필요.",
    "en_q": "A data engineer needs to analyze time-sensitive sales data. The company stores the data in an Amazon S3 bucket. The data engineer uses AWS Glue Data Catalog to access the data. When the data engineer performs the analysis, the data engineer notices that some records are missing or out of date. What is the likely cause of these issues?",
    "en_opts": {
      "A": "AWS Glue Data Catalog is not up to date with the latest S3 partition changes.",
      "B": "Incorrect IAM roles are assigned to the AWS Glue jobs.",
      "C": "Versioning is not enabled on the S3 bucket.",
      "D": "The AWS Glue job schedules overlap with one another."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382572-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 268,
    "question": "소매 회사는 Amazon RDS for MySQL 데이터베이스에 판매 시점(POS) 거래 데이터를 저장합니다. 회사는 Amazon Redshift에서 역사적 판매 분석을 유지합니다. 회사는 추세 분석을 위해 당일 거래를 역사적 판매 패턴과 결합하는 일일 보고서를 만들어야 합니다. 회사는 데이터 전송 비용을 최소화하고 유지보수 오버헤드를 최소화하면서 거의 실시간 인사이트를 제공하는 솔루션이 필요합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Database Migration Service(AWS DMS)를 구성하여 Amazon RDS for MySQL에서 Amazon Redshift로 데이터를 지속적으로 복제합니다. Redshift 쿼리를 사용하여 통합 보고서를 작성합니다.",
      "B": "Amazon Redshift 페더레이션 쿼리를 구현하여 RDS for MySQL 데이터에 직접 액세스하고 단일 쿼리에서 기존 Redshift 테이블과 조인합니다.",
      "C": "AWS Glue를 사용하여 매시간 RDS for MySQL에서 Amazon Redshift로 증분 데이터를 복사하는 추출, 변환 및 로드(ETL) 파이프라인을 만듭니다. 보고서를 생성합니다.",
      "D": "RDS for MySQL 데이터를 정기적으로 Amazon S3 버킷으로 내보냅니다. COPY 명령을 사용하여 데이터를 Amazon Redshift 스테이징 테이블에 로드합니다. 데이터를 역사적 데이터와 조인합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Redshift 페더레이션 쿼리 — 외부 데이터 소스 직접 조회\n▸ 거의 실시간 — 최신 RDS 데이터 동적 액세스\n\n【정답 포인트】\n▸ 페더레이션 쿼리 → RDS MySQL을 Redshift 외부 데이터 소스로 등록\n▸ 단일 쿼리 조인 → SELECT * FROM redshift_table JOIN mysql_table\n▸ 비용 최적: 데이터 복제 불필요, 네트워크만 사용\n▸ 유지보수: DMS 파이프라인 관리 없음\n▸ 실시간: RDS 최신 데이터 직접 조회\n\n【오답 체크】\n(A) DMS 지속 복제 — 데이터 이중화, 비용 증가\n(C) Glue ETL 매시간 — 지연 발생 (시간 단위), 거의 실시간 아님\n(D) 수동 내보내기 — 운영 복잡, 지연 큼\n\n【시험 포인트】\n\"거의 실시간\" + \"최소 비용/유지보수\" → 페더레이션 쿼리. Redshift는 동적 조인 지원. RDS 데이터 복제 불필요. 성능 고려: 페더레이션은 네트워크 지연 있으므로 실시간 대시보드보다 배치 보고서용.",
    "en_q": "A retail company stores point-of-sale transaction data in an Amazon RDS for MySQL database. The company maintains historical sales analytics in Amazon Redshift. The company needs to create daily reports that combine the current day's transactions with historical sales patterns for trend analysis. The company requires a solution that provides near real-time insights while minimizing data transfer costs and maintenance overhead. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure AWS Database Migration Service (AWS DMS) to continuously replicate data from RDS for MySQL to Amazon Redshift. Use Redshift queries to create consolidated reports.",
      "B": "Implement Amazon Redshift federated queries to directly access RDS for MySQL data and join it with existing Redshift tables in a single query.",
      "C": "Use AWS Glue to create an extract, transform, and load (ETL) pipeline that runs every hour to copy incremental data from RDS for MySQL to Amazon Redshift. Generate reports.",
      "D": "Export RDS for MySQL data to an Amazon S3 bucket on a regular schedule. Use the COPY command to load the data into Amazon Redshift staging tables. Join the data with historical data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382472-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 269,
    "question": "한 회사는 데이터 레이크를 채우기 위한 새로운 데이터 파이프라인을 만들고 있습니다. 데이터 분석가는 데이터 엔지니어 팀이 고급 데이터 변환을 수행하기 전에 데이터를 준비하고 표준화해야 합니다. 데이터 분석가는 새 코드를 작성하지 않고도 데이터를 처리할 수 있는 솔루션이 필요합니다. 이 요구사항을 **가장 적은 운영 노력**으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue Studio 노트북에서 Python 및 Pandas를 사용합니다. 데이터 엔지니어가 AWS Glue를 사용하여 파이프라인을 완성하도록 추가 변환을 추가해야 합니다.",
      "B": "Amazon SageMaker Canvas 및 SageMaker Data Wrangler를 사용하여 새 데이터 세트에 작성합니다. 데이터 엔지니어가 AWS Glue를 사용하여 파이프라인을 완성하도록 추가 변환을 추가해야 합니다.",
      "C": "AWS Glue Studio 데이터 준비 레시피 변환을 사용합니다. 데이터 엔지니어가 AWS Glue를 사용하여 파이프라인을 완성하도록 추가 변환을 추가해야 합니다.",
      "D": "데이터 준비 규칙을 포함하는 문서를 만듭니다. 데이터 엔지니어가 AWS Glue에서 규칙을 구현해야 합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 데이터 준비 레시피 — AWS Glue Studio 노코드 변환\n▸ 데이터 표준화 — 분석가 역할\n\n【정답 포인트】\n▸ Glue Studio 레시피 → 드래그앤드롭, 노코드\n▸ 데이터 유효성 검사 → 이상값 감지, 빠진 값 처리\n▸ 표준화 규칙 → 날짜 형식, 대소문자 정규화\n▸ 최소 운영 노력 → 분석가만 수행, 엔지니어는 고급 변환만\n\n【오답 체크】\n(A) Python+Pandas → 코드 작성 필요, 요구사항 위배\n(B) SageMaker Canvas → ML 모델링용, 데이터 준비 오버엔지니어링\n(D) 문서 → 엔지니어 구현 필요, 분석가 자동화 불가\n\n【시험 포인트】\nGlue Studio 레시피: 노코드 데이터 준비 도구. 필터, 변환, 정규화 등 시각적 구성. 분석가가 직접 사용 가능. Python은 과도. Canvas는 ML 용도. 레시피가 정확한 답변.",
    "en_q": "A company is creating a new data pipeline to populate a data lake. A data analyst needs to prepare and standardize the data before a data engineering team can perform advanced data transformations. The data analyst needs a solution to process the data that does not require writing new code. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Use Python and Pandas in an AWS Glue Studio notebook. Ensure that the data engineers add additional transformations to complete the pipeline.",
      "B": "Use Amazon SageMaker Canvas and SageMaker Data Wrangler to write to a new dataset. Ensure that the data engineers add additional transformations to complete the pipeline by using AWS Glue.",
      "C": "Use AWS Glue Studio with data preparation recipe transformations. Ensure that the data engineers add additional transformations to complete the pipeline.",
      "D": "Create a document that includes the data preparation rules. Ensure that the data engineers implement the rules in AWS Glue."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382570-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 270,
    "question": "한 회사는 ecommerce 애플리케이션에 대한 데이터를 저장하기 위해 Amazon RDS for Oracle 데이터베이스를 사용합니다. 회사는 향후 분석을 위해 모든 테이블의 데이터를 사용 가능하게 하는 솔루션이 필요합니다. 솔루션은 REST API를 사용하여 customer_complaints라는 테이블의 데이터를 거의 실시간으로 처리해야 합니다. 이 요구사항을 **가장 비용 효율적**으로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Database Migration Service(AWS DMS)를 사용하여 Oracle 데이터베이스를 Amazon RDS for PostgreSQL 데이터베이스 인스턴스로 복제합니다. PostgreSQL customer_complaints 테이블의 데이터를 처리하고 REST API를 호출하는 AWS Lambda 함수를 만듭니다.",
      "B": "AWS Database Migration Service(AWS DMS)에 작업을 만들어 Oracle 데이터베이스를 Amazon Redshift로 복제합니다. Oracle 데이터베이스를 소스로 설정합니다. customer_complaints 테이블의 데이터를 쿼리하고 REST API를 호출하려면 Amazon Redshift Data API를 사용하도록 AWS Lambda 함수를 구성합니다. Amazon Redshift에서 Amazon S3로 데이터를 언로드합니다.",
      "C": "하나의 AWS Database Migration Service(AWS DMS) 작업을 설정하여 customer_complaints 테이블 데이터를 Amazon Kinesis Data Streams으로 스트리밍합니다. Amazon S3 버킷으로 데이터를 전송하도록 두 번째 AWS DMS 작업을 설정합니다. Kinesis 데이터를 처리하고 REST API를 호출하도록 AWS Lambda 함수를 구성합니다.",
      "D": "Amazon RDS for Oracle 데이터베이스의 읽기 전용 복제본을 만듭니다. 읽기 전용 복제본 customer_complaints 테이블의 데이터를 처리하고 REST API를 호출하도록 AWS Lambda 함수를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 거의 실시간 스트리밍 — Kinesis Data Streams\n▸ 전체 분석 데이터 — S3로 장기 저장\n▸ REST API 호출 — Lambda 통합\n\n【정답 포인트】\n▸ 이중 DMS 작업: customer_complaints → Kinesis (스트림 처리), 전체 DB → S3 (배치 분석)\n▸ 비용 효율: S3는 대용량 저장 저비용, Kinesis는 실시간 처리만\n▸ 아키텍처: Kinesis → Lambda (REST API) → 실시간 알림/액션\n▸ 분석: S3 → Athena/Redshift (배치 분석)\n\n【오답 체크】\n(A) PostgreSQL 복제 — customer_complaints만 처리, 전체 분석 테이블 미포함\n(B) Redshift 복제 → 비용 높음 (DW 구독 + Redshift 스토리지)\n(D) 읽기 전용 복제본 → 실시간 스트리밍 불가, DB 부하 증가\n\n【시험 포인트】\n\"거의 실시간 + 향후 분석\" → 이중 목적 파이프라인. Kinesis는 실시간 처리 특화, S3는 분석용 저장. DMS 멀티태스크 활용으로 비용 최적화. 스트림 처리와 배치 분석 분리.",
    "en_q": "A company uses an Amazon RDS for Oracle database to store data for an ecommerce application. The company needs a solution to make the data in all tables available for future analytics. The solution must process data from a table named customer_complaints in near real time by using a REST API. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Use AWS Database Migration Service (AWS DMS) to replicate the Oracle database to an Amazon RDS for PostgreSQL database instance. Create an AWS Lambda function to process data from the PostgreSQL customer_complaints table and to call the REST API.",
      "B": "Create a task in AWS Database Migration Service (AWS DMS) to replicate the Oracle database to Amazon Redshift. Set the Oracle database as the source. Configure an AWS Lambda function to use the Amazon Redshift Data API to query the data from the customer_complaints table and to call the REST API. Unload the data from Amazon Redshift to Amazon S3.",
      "C": "Set up one AWS Database Migration Service (AWS DMS) task to stream the customer_complaints table data to Amazon Kinesis Data Streams. Set up a second AWS DMS task to send data to an Amazon S3 bucket. Configure an AWS Lambda function to process Kinesis data and to call the REST API.",
      "D": "Create a read replica of the Amazon RDS for Oracle database. Configure an AWS Lambda function to process data from the read replica customer_complaints table and to call the REST API."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382558-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 271,
    "question": "한 회사가 Amazon RDS PostgreSQL과 Amazon Aurora MySQL에서 일일 트랜잭션 데이터를 집계하는 중앙 Amazon Redshift 데이터 웨어하우스를 유지하고 있습니다. 데이터 엔지니어는 일부 복잡한 변환 쿼리가 완료하는 데 몇 시간이 걸린다는 것을 알았습니다. 데이터 엔지니어는 쿼리 실행 시간을 최대한 줄이기 위해 쿼리 성능을 최적화하려고 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "Redshift 클러스터의 동시성 스케일링 할당량을 증가시킵니다.",
      "B": "테이블을 Amazon S3 버킷으로 내보냅니다. Amazon Athena를 사용하여 버킷의 데이터를 쿼리합니다.",
      "C": "Amazon Redshift Spectrum을 사용하여 Redshift 테이블을 기반으로 외부 테이블을 생성합니다.",
      "D": "자주 쿼리되는 데이터 패턴에 대해 Amazon Redshift에서 구체화된 뷰(Materialized Views)를 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Materialized Views — 사전 계산된 쿼리 결과를 저장하여 복잡한 변환을 반복 실행하지 않는 기법\n▸ Redshift Concurrency Scaling — 추가 쿼리 큐를 생성하여 동시 워크로드 처리 향상\n\n【정답 포인트】\n복잡한 변환 쿼리 → 구체화된 뷰로 사전 계산 → 실행 시간 최소화\n- Materialized Views는 비용 효율적으로 쿼리 응답 시간을 크게 단축합니다\n- 자주 쿼리되는 패턴에 최적화된 솔루션입니다\n\n【오답 체크】\n(A) Concurrency Scaling은 동시 쿼리 수 증가에 도움이 되지만, 단일 쿼리 실행 시간은 단축하지 않습니다\n(B) Athena는 ad-hoc 쿼리에 적합하지만, Redshift의 복잡한 변환 성능을 향상시키지 못합니다\n(C) Spectrum은 외부 데이터 레이크 쿼리용이며, 이미 내부 테이블인 경우 성능 이점이 없습니다\n\n【시험 포인트】\n\"복잡한 변환 쿼리\" + \"실행 시간 단축\" → 구체화된 뷰로 사전 계산 결과 활용\nRedshift의 쿼리 성능 최적화는 인덱싱, 쿼리 최적화, 또는 사전 계산된 결과 활용이 핵심",
    "en_q": "A company maintains a central Amazon Redshift data warehouse that aggregates daily transactional data from Amazon RDS for PostgreSQL and Amazon Aurora MySQL. A data engineer notices that some complex transformation queries take hours to finish. The data engineer wants to optimize query performance to reduce query execution time as much as possible. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Increase the concurrency scaling quota for the Redshift cluster.",
      "B": "Export the tables to an Amazon S3 bucket. Use Amazon Athena to query the data in the bucket.",
      "C": "Use Amazon Redshift Spectrum to create external tables based on the Redshift tables.",
      "D": "Use materialized views in Amazon Redshift for frequently queried data patterns."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382567-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 272,
    "question": "한 회사가 여러 데이터 소스를 중앙 데이터 레이크로 통합하기 위해 Amazon S3 버킷을 사용합니다. 회사는 비즈니스 파트너가 액세스할 수 있도록 데이터에 대해 여러 변환 및 데이터 정제 프로세스를 수행해야 합니다. 회사는 업무 시간 중에 중앙 데이터 레이크에서 SQL 쿼리를 실행할 수 있는 여러 비즈니스 파트너의 기능이 필요합니다. 어떤 솔루션이 이 요구사항을 가장 비용 효율적으로 충족할까요?",
    "options": {
      "A": "업무 시간 후 프로비저닝된 Amazon EMR 클러스터를 사용하여 전날의 데이터를 처리하고, 필요한 모든 변환을 적용하고, 준비된 데이터를 Amazon Redshift Serverless에 로드합니다.",
      "B": "업무 시간 후 AWS Glue Flex Job을 사용하여 전날의 데이터를 처리하고, 필요한 모든 변환을 적용하고, 준비된 데이터를 Amazon Redshift Serverless에 로드합니다.",
      "C": "업무 시간 후 AWS Lambda 함수를 사용하여 전날의 데이터를 처리하고, 필요한 모든 변환을 적용하고, 준비된 데이터를 Amazon Redshift 프로비저닝된 클러스터에 로드합니다.",
      "D": "업무 시간 후 AWS Glue Flex Job을 사용하여 전날의 데이터를 처리하고, 필요한 모든 변환을 적용하고, 준비된 데이터를 Amazon Redshift 프로비저닝된 클러스터에 로드합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Glue Flex Job — Spark 작업용 비용 최적화 옵션, 완료 후 자동 종료\n▸ Redshift Serverless — 쿼리 기반 비용 청구, 미사용 시 비용 없음\n▸ Redshift Provisioned — 클러스터 실행 중 계속 요금 청구\n\n【정답 포인트】\n\"비용 효율적\" + \"업무 시간 후 처리\" + \"업무 시간 중 쿼리\" → Glue Flex + Redshift Serverless\n- Glue Flex는 오프피크 시간 배치 처리에 최적화된 저비용 옵션\n- Redshift Serverless는 쿼리 실행 시에만 요금 청구 (업무 시간 중 사용)\n- 조합하면 데이터 처리와 쿼리 비용을 모두 최소화\n\n【오답 체크】\n(A) EMR은 Flex Job보다 비싸고, Redshift Serverless는 맞지만 ETL 도구 비용이 높습니다\n(C) Lambda는 대량 데이터 처리에 부적합, Provisioned Redshift는 24/7 요금 청구\n(D) Glue Flex는 맞지만 Provisioned Redshift는 비용 낭비입니다\n\n【시험 포인트】\n\"비용 효율\" + \"배치 + 쿼리 분리\" → Glue Flex (배치) + Redshift Serverless (쿼리)\nGlue Flex의 flex capacity는 Spark 작업의 오프피크 저비용 실행을 제공합니다",
    "en_q": "A company uses an Amazon S3 bucket to integrate multiple data sources into a central data lake. The company needs to perform multiple transformations and data cleaning processes on the data to make the data accessible to business partners. The company needs a solution that will give multiple business partners the ability to run SQL queries on the central data lake during normal business hours. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Use a provisioned Amazon EMR cluster after normal business hours to process the previous day's data, apply all necessary transformations, and load the prepared data into Amazon Redshift Serverless.",
      "B": "Use an AWS Glue Flex Job after normal business hours to process the previous day's data, apply all necessary transformations. and load the prepared data into Amazon Redshift Serverless.",
      "C": "Use an AWS Lambda function after normal business hours to process the previous day's data, apply all necessary transformations, and load the prepared data into an Amazon Redshift provisioned cluster.",
      "D": "Use an AWS Glue Flex job after normal business hours to process the previous day's data, apply all necessary transformations, and load the prepared data into an Amazon Redshift provisioned cluster."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382563-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 273,
    "question": "한 회사는 배치 데이터 수집, 변환 및 저장을 위한 별도의 단계를 가진 추출, 변환 및 로드(ETL) 파이프라인을 구축해야 합니다. 파이프라인은 변환된 데이터를 Amazon S3 버킷에 저장해야 합니다. 각 단계는 실패를 자동으로 재시도해야 합니다. 파이프라인은 개별 단계의 성공 또는 실패에 대한 가시성을 제공해야 합니다. 어떤 솔루션이 이 요구사항을 최소한의 운영 오버헤드로 충족할까요?",
    "options": {
      "A": "작업 트리거를 사용하여 각 단계를 수행하는 AWS Glue 작업을 함께 연결합니다. MaxRetries 필드를 0으로 설정합니다.",
      "B": "AWS Step Functions 워크플로우를 배포하여 데이터를 수집하는 AWS Lambda 함수를 오케스트레이션합니다. AWS Glue 작업을 사용하여 데이터를 변환하고 S3 버킷에 데이터를 저장합니다.",
      "C": "Amazon EventBridge 기반 파이프라인을 구축하여 각 단계를 수행하는 AWS Lambda 함수를 호출합니다.",
      "D": "Amazon Managed Workflows for Apache Airflow(Amazon MWAA)에서 Apache Airflow DAG를 예약하여 파이프라인 단계를 오케스트레이션합니다. Amazon SQS를 사용하여 데이터를 수집합니다. AWS Glue 작업을 사용하여 데이터를 변환하고 S3 버킷에 데이터를 저장합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Step Functions — 서버리스 워크플로우 오케스트레이션, 재시도 및 실패 처리 내장\n▸ 재시도 및 가시성 — Step Functions는 기본적으로 모든 단계의 상태 추적 및 재시도 정책 제공\n\n【정답 포인트】\n\"별도 단계\" + \"자동 재시도\" + \"가시성\" + \"최소 오버헤드\" → Step Functions\n- Step Functions는 ETL 파이프라인 오케스트레이션의 표준 도구\n- 재시도 정책, 에러 핸들링, 상태 추적이 기본 제공됨\n- Lambda (수집) + Glue (변환) 조합으로 유연성 제공\n- 각 단계의 실행 상태를 CloudWatch에서 모니터링 가능\n\n【오답 체크】\n(A) Glue 작업 트리거는 재시도 기능이 제한적이고, MaxRetries=0은 재시도 불가능\n(C) EventBridge는 이벤트 라우팅 도구이며, 재시도 및 상태 추적 기능이 제한적\n(D) MWAA는 과도한 운영 오버헤드 (Airflow 유지보수)를 요구합니다\n\n【시험 포인트】\n\"ETL 파이프라인\" + \"재시도\" + \"가시성\" → Step Functions 오케스트레이션\nStep Functions의 기본 기능이 재시도, 실패 처리, 상태 추적이므로 최소 오버헤드",
    "en_q": "A company needs to build an extract, transform, and load (ETL) pipeline that has separate stages for batch data ingestion, transformation, and storage. The pipeline must store the transformed data in an Amazon S3 bucket. Each stage must automatically retry failures. The pipeline must provide visibility into the success or failure of individual stages. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Chain AWS Glue jobs that perform each stage together by using job triggers. Set the MaxRetries field to 0.",
      "B": "Deploy AWS Step Functions workflows to orchestrate AWS Lambda functions that ingest data. Use AWS Glue jobs to transform the data and store the data in the S3 bucket.",
      "C": "Build an Amazon EventBridge based pipeline that invokes AWS Lambda functions to perform each stage.",
      "D": "Schedule Apache Airflow directed acyclic graphs (DAGs) on Amazon Manages Workflows tor Apache Airflow (Amazon MWAA) to orchestrate pipeline steps. Use Amazon Simple Queue Service (Amazon SQS) to ingest data. Use AWS Glue jobs to transform data and store the data in the S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382573-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 274,
    "question": "한 회사가 거래, 위험 및 준수 팀이 각각 자신의 데이터를 가지는 데이터 메시 아키텍처를 구현해야 합니다. 팀은 서로 특정 뷰를 공유해야 합니다. 팀은 AWS Glue Data Catalog에서 50개의 데이터베이스에 1,000개 이상의 테이블을 가지고 있습니다. 세 팀 모두 Amazon Athena를 사용하여 온디맨드 분석을 수행합니다. 팀은 Amazon Redshift를 사용하여 복잡한 보고서를 생성합니다. 준수 팀은 모든 데이터 액세스를 감사해야 합니다. 개인 식별 정보(PII) 데이터에 대한 액세스를 제한해야 합니다. 회사는 팀 요구사항을 충족하기 위한 확장 가능한 솔루션이 필요합니다. 솔루션은 팀 도메인 전반에 걸쳐 분석을 수행하는 기능을 제공해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "온디맨드 분석을 위해 Athena에서 뷰를 생성합니다. Athena 뷰를 Amazon Redshift에서 사용하여 교차 도메인 분석을 수행합니다. AWS CloudTrail을 사용하여 데이터 액세스를 감사합니다. AWS Lake Formation을 사용하여 세분화된 액세스 제어를 설정합니다.",
      "B": "분석을 수행하기 위해 AWS Glue Data Catalog 뷰를 사용합니다. AWS CloudTrail 로그를 사용하여 데이터 액세스를 감사합니다. AWS Lake Formation을 사용하여 액세스 권한을 관리합니다. 보안 정의자 뷰를 사용하여 PII를 마스킹합니다.",
      "C": "AWS Lake Formation을 사용하여 교차 도메인 테이블 액세스를 설정합니다. 세분화된 액세스 제어를 설정합니다.",
      "D": "각 도메인에 대해 구체화된 뷰를 생성하고 Amazon Redshift datashares를 활성화합니다. 교차 도메인 액세스 정책을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Lake Formation — 데이터 메시 아키텍처를 위한 중앙 액세스 제어 및 권한 관리\n▸ Cross-domain access — 도메인 간 데이터 공유를 위한 세분화된 권한\n▸ Fine-grained access control — PII 마스킹 및 행/열 수준 보안\n\n【정답 포인트】\n\"데이터 메시\" + \"교차 도메인 공유\" + \"PII 제한\" + \"감사\" → Lake Formation\n- Lake Formation이 데이터 메시 아키텍처의 표준 솔루션\n- 중앙에서 모든 도메인의 액세스 권한을 관리\n- 세분화된 액세스 제어로 PII 마스킹 및 행/열 제어 가능\n- CloudTrail 통합으로 모든 액세스 감사 추적 가능\n- Athena 및 Redshift 모두에서 권한이 일관되게 적용됨\n\n【오답 체크】\n(A) Athena 뷰만으로는 Redshift에서 교차 도메인 공유가 불가능, PII 마스킹 부족\n(B) Glue Catalog 뷰는 메시 구조에 부적합, 보안 정의자 뷰는 확장성 제한\n(D) Datashares는 Redshift 간 공유 기능이며, 데이터 메시 전체를 관리하지 못함\n\n【시험 포인트】\n\"데이터 메시\" + \"여러 도메인\" + \"세분화된 권한\" → AWS Lake Formation이 정답\nLake Formation은 대규모 데이터 카탈로그에서 교차 도메인 액세스를 중앙에서 관리",
    "en_q": "A company needs to implement a data mesh architecture in which domains for trading, risk, and compliance teams each have own their data. The teams need to share specific views with one another. The teams have over 1,000 tables across 50 databases in AWS Glue Data Catalog. All three teams use Amazon Athena to perform on-demand analysis. The teams use Amazon Redshift to generate complex reports. The compliance team must audit all data access. Access to personally identifiable information (PII) data must be restricted. The company requires a scalable solution to meet the team requirements. The solution must provide the ability to perform analysis across team domains. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create views in Athena for on-demand analysis. Use the Athena views in Amazon Redshift to perform cross-domain analytics. Use AWS CloudTrail to audit data access. Use AWS Lake Formation to establish fine-grained access control.",
      "B": "Use AWS Glue Data Catalog views to perform analysis. Use AWS CloudTrail logs to audit data access. Use AWS Lake Formation to manage access permissions. Use security definer views to mask PII.",
      "C": "Use AWS Lake Formation to set up cross-domain access to tables. Set up fine-grained access controls.",
      "D": "Create materialized views and enable Amazon Redshift datashares for each domain. Configure cross-domain access policies."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382562-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 275,
    "question": "한 회사가 Amazon S3 및 Amazon RDS에 데이터를 저장합니다. 회사는 보안 요구사항을 충족하기 위해 기술적 제어를 적용해야 합니다. 회사는 데이터의 백업을 생성하고 지정된 보존 기간 동안 백업을 보유해야 합니다. 회사는 보존 기간 중에 백업을 실수로 또는 악의적으로 삭제되지 않도록 보호해야 합니다. 어떤 솔루션이 최소한의 운영 오버헤드로 이 요구사항을 충족할까요?",
    "options": {
      "A": "버전 관리 및 MFA Delete가 활성화된 S3 버킷을 생성합니다. 각 RDS DB 인스턴스에 대해 백업 보존 기간 및 백업 윈도우를 설정합니다. Amazon RDS의 자동 백업 기능을 사용하고 필요한 경우 추가 스냅샷을 생성합니다.",
      "B": "버전 관리 및 동일 지역 복제가 활성화된 S3 버킷을 생성합니다. 각 RDS DB 인스턴스에 대해 백업 보존 기간 및 백업 윈도우를 설정합니다. Amazon RDS의 자동 백업 기능을 사용합니다. 필요한 경우 추가 스냅샷을 생성합니다.",
      "C": "AWS Backup에서 백업 계획을 생성합니다. 백업 일정, 윈도우 및 수명 주기 값을 지정하고 백업 자격증명 모음을 선택합니다. Amazon S3 및 Amazon RDS 리소스를 백업 계획에 할당합니다. 준수 모드에서 자격증명 모음 잠금을 생성합니다.",
      "D": "버전 관리 및 지역 간 복제가 활성화된 S3 버킷을 생성합니다. 각 RDS DB 인스턴스에 대해 백업 보존 기간 및 백업 윈도우를 설정합니다. Amazon RDS 자동 백업을 사용합니다. 필요한 경우 추가 스냅샷을 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Backup — S3와 RDS 모두를 통합 관리하는 중앙 백업 솔루션\n▸ Vault Lock (Compliance Mode) — WORM(Write-Once-Read-Many) 정책으로 삭제 방지\n▸ 운영 오버헤드 — 수동 백업 관리 vs. 자동화된 중앙 관리\n\n【정답 포인트】\n\"S3 + RDS 백업\" + \"삭제 방지\" + \"최소 오버헤드\" → AWS Backup + Vault Lock\n- AWS Backup은 S3와 RDS를 단일 플랫폼에서 관리\n- 준수 모드 Vault Lock은 보존 기간 동안 WORM 보호 제공\n- 자동화된 백업 일정, 보존 정책, 수명 주기 관리\n- 복수 리소스 백업을 중앙에서 추적하고 모니터링\n\n【오답 체크】\n(A) 버전 관리 + MFA Delete는 수동 운영 필요, S3만 해당 (RDS 별도 관리)\n(B) 복제는 백업과 다름, S3와 RDS 보존 정책을 별도로 관리해야 함\n(D) 지역 간 복제는 백업이 아니라 재해 복구 전략, 보존 기간 자동화 부족\n\n【시험 포인트】\n\"S3 + RDS 백업\" + \"삭제 방지\" + \"통합 관리\" → AWS Backup Vault Lock\nVault Lock의 준수 모드는 백업의 WORM 속성을 보장하는 표준 방법",
    "en_q": "A company stores data in Amazon S3 and Amazon RDS. The company needs to apply technical controls to meet security requirements. The company must generate backups of the data and retain the backups for specified retention periods. The company must protect the backups from accidental or malicious deletion during the retention periods. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create S3 buckets with versioning and MFA Delete enabled. Set a backup retention period and backup window for each RDS DB instance. Use the automated backup feature of Amazon RDS, and take additional snapshots as required.",
      "B": "Create S3 buckets with versioning and Same-Region Replication enabled. Set a backup retention period and backup window for each RDS DB instance. Use the automated backup feature of Amazon RDS. Take additional snapshots as required.",
      "C": "Create a backup plan in AWS Backup. Specify the backup schedule, set window and lifecycle values, and select a backup vault. Assign the Amazon S3 and Amazon RDS resources to the backup plan. Create a vault lock in compliance mode.",
      "D": "Create S3 buckets with versioning and Cross-Region Replication enabled. Set a backup retention period and backup window for each RDS DB instance. Use Amazon RDS automated backups. Take additional snapshots as required."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382568-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 276,
    "question": "데이터 엔지니어가 매일 기밀 문서를 Amazon S3 버킷에 업로드합니다. 데이터 엔지니어는 전송 과정 중에 손상이 없음을 확인하기 위해 업로드된 모든 데이터의 무결성을 독립적으로 확인할 수 있는 솔루션이 필요합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "데이터가 S3 버킷에 업로드된 후 데이터의 하위 집합을 다운로드합니다. 무결성을 위해 개체를 수동으로 검증합니다.",
      "B": "S3 버킷의 기본 암호화를 고객 제공 키를 사용한 서버측 암호화(SSE-C)로 변경합니다. S3 버킷 키를 켜서 데이터 무결성을 검증합니다.",
      "C": "개체를 업로드하기 전에 개체에 대한 SHA-256 체크섬을 계산합니다. 각 업로드 요청에서 계산된 값을 AWS SDK로 전달합니다.",
      "D": "데이터가 S3 버킷에 업로드된 후 전체 데이터를 다운로드합니다. 무결성을 위해 개체를 프로그래밍 방식으로 검증합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SHA-256 Checksum — 전송 무결성 검증을 위한 해시 알고리즘\n▸ SDK Pass-through — 체크섬을 메타데이터로 S3에 저장하여 자동 검증\n▸ 무결성 검증 — 업로드 시점에 검증하는 방식 vs. 사후 검증\n\n【정답 포인트】\n\"독립적 무결성 확인\" + \"효율적\" → 사전 계산 체크섬 전달\n- SHA-256 체크섬을 사전 계산하고 AWS SDK로 전달\n- S3가 자동으로 업로드 객체 무결성 검증\n- SDK는 체크섬 미스매치 시 오류 반환\n- 전송 손상 여부를 즉시 확인 가능\n- 비용 효율적 (사후 다운로드 검증 불필요)\n\n【오답 체크】\n(A) 수동 검증은 비효율적이고 일관성 없음\n(B) SSE-C와 버킷 키는 암호화이며, 전송 무결성과 무관\n(D) 전체 데이터 다운로드는 대역폭 낭비, 비용 높음\n\n【시험 포인트】\n\"전송 무결성\" + \"독립적 검증\" → SHA-256 체크섬 사전 계산 및 SDK 전달\nAWS SDK의 체크섬 검증 기능은 S3 업로드 시 표준 방식",
    "en_q": "A data engineer uploads confidential documents to an Amazon S3 bucket every day. The data engineer requires a solution to independently verify the integrity of all uploaded data to confirm that there was no corruption during the transfer process. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Download a subset of the data after the data is uploaded to the S3 bucket. Manually validate the objects for integrity.",
      "B": "Change the default encryption on the S3 bucket to server-side encryption with customer-provided keys (SSE-C). Turn on S3 bucket keys to validate data integrity.",
      "C": "Calculate the SHA-256 checksum for the objects before uploading the objects. Pass the calculated value to the AWS SDK in each upload request.",
      "D": "Download the complete data after the data is uploaded to the S3 bucket. Programmatically validate the objects for integrity."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382576-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 277,
    "question": "한 회사는 Amazon S3 버킷의 저장소를 최적화해야 합니다. 1년이 넘은 개체는 5시간 이내에 액세스할 수 있어야 합니다. 모든 버전의 개체는 7년 동안 보유되고 변경 불가능해야 합니다. 모든 버전의 개체는 WORM(Write-Once-Read-Many) 모델을 사용해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "버킷에서 S3 버전 관리를 구성하고 S3 Intelligent-Tiering 저장소 클래스를 사용합니다. 1년이 넘은 개체를 S3 Glacier Flexible Retrieval로 전환하도록 버킷의 수명 주기 정책을 구성합니다. 7년이 넘은 개체를 삭제하도록 정책을 구성합니다.",
      "B": "버킷에서 S3 Object Lock을 구성하고 S3 Intelligent-Tiering 저장소 클래스를 사용합니다. 1년이 넘은 개체를 S3 Glacier Deep Archive로 전환하도록 버킷의 수명 주기 정책을 구성합니다. 7년이 넘은 개체를 삭제하도록 정책을 구성합니다.",
      "C": "버킷에서 S3 Object Lock을 구성하고 S3 Intelligent-Tiering 저장소 클래스를 사용합니다. 1년이 넘은 개체를 S3 Glacier Flexible Retrieval로 전환하도록 버킷의 수명 주기 정책을 구성합니다. 7년이 넘은 개체를 삭제하도록 정책을 구성합니다.",
      "D": "버킷에서 S3 버전 관리를 구성하고 S3 Intelligent-Tiering 저장소 클래스를 사용합니다. 1년이 넘은 개체를 S3 Glacier Deep Archive로 전환하도록 버킷의 수명 주기 정책을 구성합니다. 7년이 넘은 개체를 삭제하도록 정책을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Object Lock — WORM 모델 구현, 변경 불가능성 보장\n▸ S3 버전 관리 — 개체 버전 유지, 하지만 WORM 보장 없음\n▸ S3 Glacier Flexible Retrieval — 5시간 이내 검색 (Deep Archive는 12시간)\n\n【정답 포인트】\n\"WORM\" + \"5시간 이내 검색\" + \"7년 보유\" → Object Lock + Glacier Flexible Retrieval\n- S3 Object Lock이 WORM 요구사항의 필수 조건\n- Glacier Flexible Retrieval은 5시간 이내 검색 가능 (Deep Archive 아님)\n- Intelligent-Tiering은 자동 티어 관리로 저장소 비용 최적화\n- 수명 주기 정책은 자동 전환 및 만료 관리\n\n【오답 체크】\n(A) 버전 관리만으로는 WORM 변경 불가능성 보장 불가능\n(B) Object Lock은 맞지만, Glacier Deep Archive는 5시간 요구사항 미충족 (12시간)\n(D) 버전 관리는 WORM 보장 부족, Deep Archive는 검색 시간 초과\n\n【시험 포인트】\n\"WORM\" → S3 Object Lock 필수\n\"5시간 이내\" → Glacier Flexible Retrieval (Deep Archive 제외)\nObject Lock + Intelligent-Tiering 조합이 최적의 비용과 규정 준수 달성",
    "en_q": "A company needs to optimize storage for an Amazon S3 bucket. Objects older than 1 year must be accessible within 5 hours. All versions of the objects must be retained and immutable for 7 years. All versions of the objects must use the write-once-read-many (WORM) model. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure S3 Versioning on the bucket and use the S3 Intelligent-Tiering storage class. Configure a lifecycle policy for the bucket to transition objects that are older than 1 year to S3 Glacier Flexible Retrieval. Configure the policy to delete objects that are older than 7 years.",
      "B": "Configure S3 Object Lock on the bucket and use the S3 Intelligent-Tiering storage class. Configure a lifecycle policy for the bucket to transition objects that are older than 1 year to S3 Glacier Deep Archive. Configure the policy to delete objects that are older than 7 years.",
      "C": "Configure S3 Object Lock on the bucket and use the S3 Intelligent-Tiering storage class. Configure a lifecycle policy for the bucket to transition objects that are older than 1 year to S3 Glacier Flexible Retrieval. Configure the policy to delete objects that are older than 7 years.",
      "D": "Configure S3 Versioning on the bucket and use the S3 Intelligent-Tiering storage class. Configure a lifecycle policy for the bucket to transition objects that are older than 1 year to S3 Glacier Deep Archive. Configure the policy to deletes objects that are older than 7 years."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382557-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 278,
    "question": "데이터 엔지니어가 복잡한 파이프라인을 배포해야 합니다. 파이프라인의 단계는 스크립트를 실행할 수 있어야 합니다. 데이터 엔지니어는 파이프라인에서 완전히 관리되고 서버리스인 서비스만 사용해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Glue 작업 및 워크플로우를 배포합니다. AWS Glue를 사용하여 일정에 따라 작업 및 워크플로우를 실행합니다.",
      "B": "Amazon Managed Workflows for Apache Airflow(Amazon MWAA)를 사용하여 파이프라인을 구축하고 일정을 잡습니다.",
      "C": "스크립트를 Amazon EC2 인스턴스에 배포합니다. Amazon EventBridge를 사용하여 일정에 따라 스크립트를 실행합니다.",
      "D": "AWS Glue DataBrew를 사용하여 파이프라인을 구축합니다. Amazon EventBridge를 사용하여 일정에 따라 파이프라인을 실행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon MWAA — Apache Airflow의 관리형 서버리스 서비스\n▸ 완전 관리형 서버리스 — 인프라 운영 없이 코드 실행\n▸ 복잡한 파이프라인 — DAG 기반 워크플로우 오케스트레이션\n\n【정답 포인트】\n\"복잡한 파이프라인\" + \"스크립트 실행\" + \"완전 관리형 서버리스\" → Amazon MWAA\n- MWAA는 Apache Airflow를 완전 관리형 서버리스로 제공\n- DAG를 통해 복잡한 파이프라인 정의 가능\n- 스크립트 실행을 위한 다양한 Operator 제공\n- 인프라 관리 불필요 (완전 서버리스)\n\n【오답 체크】\n(A) AWS Glue는 관리형이지만, 스크립트 실행에는 제한적 (주로 PySpark/Scala)\n(C) EC2는 완전 관리형이 아님 (인스턴스 운영 필요)\n(D) DataBrew는 데이터 정제 도구이며, 복잡한 파이프라인 오케스트레이션에 부적합\n\n【시험 포인트】\n\"복잡한 파이프라인\" + \"완전 서버리스\" → Amazon MWAA (Airflow)\nMWAA는 DAG 기반 워크플로우의 표준 솔루션, 스크립트 실행에 최적",
    "en_q": "A data engineer needs to deploy a complex pipeline. The stages of the pipeline must be able to run a script. The data engineer must use only fully managed and serverless services in the pipeline. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy AWS Glue jobs and workflows. Use AWS Glue to run the jobs and workflows on a schedule.",
      "B": "Use Amazon Managed Workflows for Apache Airflow (Amazon MWAA) to build and schedule the pipeline.",
      "C": "Deploy the script to Amazon EC2 instances. Use Amazon EventBridge to run the script on a schedule.",
      "D": "Use Aws Glue DataBrew to build the pipeline. Use Amazon EventBridge to run the pipeline on a schedule."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382579-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 279,
    "question": "한 회사는 Amazon S3 버킷의 저장소 비용을 최적화해야 합니다. S3 버킷은 매일 1천만 개의 개체를 수신합니다. 개체는 2KB에서 5MB 범위입니다. 개체는 처음 60일 동안 즉시 액세스할 수 있어야 합니다. 사용자는 61일에서 180일 사이에 개체에 자주 액세스하지 않습니다. 개체는 181일에서 365일까지 1시간 이내에 액세스할 수 있어야 합니다. 회사는 365일 후 개체를 삭제할 수 있습니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "S3 Intelligent-Tiering을 사용하여 개체를 자동으로 전환합니다. Intelligent-Tiering에 대해 Archive Access 티어를 선택합니다. 365일이 넘은 개체를 만료하도록 S3 버킷 정책을 구성합니다.",
      "B": "S3 Lifecycle 정책을 만들어 개체를 이동합니다. 60일 후 S3 Standard에서 S3 Standard-Infrequent Access(S3 Standard-IA)로 개체를 이동하도록 정책을 구성합니다. 180일 후 개체를 S3 Glacier Flexible Retrieval로 이동합니다. 365일 후 개체를 만료합니다.",
      "C": "S3 Inventory를 활성화합니다. 일일 인벤토리 보고서를 사용하여 60일 후 S3 Standard에서 S3 Standard-Infrequent Access(S3 Standard-IA)로 개체를 이동하는 S3 Batch Operations 작업을 구성합니다. 180일 후 개체를 S3 Glacier Flexible Retrieval로 이동합니다. 365일 후 개체를 만료합니다.",
      "D": "S3 Inventory를 활성화합니다. 매일 AWS Lambda 함수를 실행하여 인벤토리 보고서를 가져오고 60일 후 S3 Standard에서 S3 Standard-Infrequent Access(S3 Standard-IA)로 개체를 이동합니다. 180일 후 개체를 S3 Glacier Flexible Retrieval로 이동합니다. 365일 후 개체를 만료합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ S3 Lifecycle Policy — 저장소 클래스 자동 전환 및 개체 만료\n▸ Intelligent-Tiering — 자동 티어 관리 (Archive Access는 별도 활성화 필요)\n▸ S3 Standard-IA → Glacier Flexible Retrieval — 비용 최적화 경로\n\n【정답 포인트】\n\"저장소 비용 최적화\" + \"자동 전환\" + \"1시간 이내 접근\" → Lifecycle Policy\n- Lifecycle Policy가 자동 티어 전환의 표준 방식\n- 0-60일: S3 Standard (즉시 접근)\n- 60-180일: S3 Standard-IA (낮은 빈도 접근)\n- 180-365일: Glacier Flexible Retrieval (1시간 이내 검색)\n- 365일+: 만료 (삭제)\n- 비용 최적화 = 수동 개입 없음\n\n【오답 체크】\n(A) Intelligent-Tiering은 자동이지만, Archive Access 티어는 추가 구성 필요, 비용 예측 어려움\n(C) S3 Batch Operations는 수동 작업 필요 (일일 실행 필요)\n(D) Lambda 함수 실행은 운영 오버헤드 증가, Lambda 비용 추가\n\n【시험 포인트】\n\"자동 티어 전환\" → S3 Lifecycle Policy가 최적\n다단계 저장소 전환 요구사항은 Lifecycle Policy의 표준 사용 사례",
    "en_q": "A company needs to optimize storage costs for an Amazon S3 bucket. The S3 bucket receives 10 million objects every day. The objects range in size from 2 KB to 5 MB. The objects need to be immediately accessible for the first 60 days. Users access objects infrequently from 61 to 180 days. The objects must be accessible within an hour from 181 to 365 days. The company can delete the objects after 365 days. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use S3 Intelligent-Tiering to automatically transition objects. Select the Archive Access tier for Intelligent-Tiering. Configure an S3 bucket policy to expire objects that are older than 365 days.",
      "B": "Create an S3 Lifecycle policy to move objects. Configure the policy to move objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 60 days. Move the objects to S3 Glacier Flexible Retrieval after 180 days. Expire objects after 365 days.",
      "C": "Enable S3 Inventory. Use a daily inventory report to configure an S3 Batch Operations job that moves objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 60 days. Move objects to S3 Glacier Flexible Retrieval after 180 days. Expire objects after 365 days.",
      "D": "Enable S3 Inventory. Run an AWS Lambda function each day to fetch an inventory report and move objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 60 days. Move objects to S3 Glacier Flexible Retrieval after 180 days. Expire objects after 365 days."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382564-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 280,
    "question": "한 회사는 AWS Glue PySpark 작업을 사용하여 Amazon DynamoDB 테이블에서 특정 데이터를 읽어야 합니다. 회사는 필요한 레코드의 파티션 키 값을 알고 있습니다. AWS Glue PySpark 작업의 기존 처리 논리는 데이터가 DynamicFrame 형식이어야 합니다. 회사는 지정된 데이터만 읽도록 작업을 보장하는 솔루션이 필요합니다. 어떤 솔루션이 최소 읽기 용량 단위(RCU)로 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Glue DynamoDB ETL 커넥터를 사용하여 DynamoDB 테이블을 읽습니다. 필터 옵션을 사용하여 필요한 파티션 키를 읽습니다.",
      "B": "AWS Glue 작업에서 정렬 키만 사용하여 키 조건 표현식의 DynamoDB 테이블에 대한 쿼리를 수행합니다. 데이터를 DynamicFrame에 로드합니다.",
      "C": "AWS Glue 작업에서 DynamoDB 테이블을 스캔합니다. 데이터를 DynamicFrame에 로드합니다. DynamicFrame을 파티션 키에 필터링합니다.",
      "D": "AWS Glue 작업에서 DynamoDB 테이블에 대한 쿼리를 수행합니다. 키 조건 표현식에서 파티션 키를 사용합니다. 데이터를 DynamicFrame에 로드합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Query vs. Scan — Query(파티션 키 기반) = 효율적, Scan = 모든 항목 스캔\n▸ Partition Key — DynamoDB의 필수 키, Query에 필수 항목\n▸ DynamicFrame — AWS Glue의 데이터 구조, Spark DataFrame 래퍼\n▸ RCU 최소화 — Query 사용 시 필요한 항목만 읽음\n\n【정답 포인트】\n\"지정된 데이터만\" + \"최소 RCU\" + \"DynamicFrame\" → Query + 파티션 키\n- Query는 파티션 키로 지정된 항목만 읽음 (RCU 최소화)\n- Scan은 모든 항목을 읽음 (RCU 낭비)\n- 파티션 키를 Query의 key condition expression에 포함\n- DynamoDB ETL 커넥터도 가능하지만 필터는 사후 처리 (RCU 낭비)\n\n【오답 체크】\n(A) ETL 커넥터 + 필터는 모든 데이터를 읽고 사후 필터링 (RCU 낭비)\n(B) 정렬 키만 사용하면 파티션 키 조건 없음 (Query 불가능)\n(C) Scan은 모든 항목을 읽음 (최악의 RCU 사용)\n\n【시험 포인트】\n\"DynamoDB\" + \"최소 RCU\" + \"파티션 키 알려짐\" → Query 사용\nQuery는 파티션 키 필수, Sort Key는 선택사항",
    "en_q": "A company needs to use an Aws Glue PySpark job to read specific data from an Amazon DynamoDB table. The company knows the partition key values for the required records. The existing processing logic of the AWS Glue PySpark job requires the data to be in DynamicFrame format. The company needs a solution to ensure that the job reads only the specified data. Which solution will meet this requirement with the MINIMUM number of read capacity units (RCUs)?",
    "en_opts": {
      "A": "Use the AWS Glue DynamoDB ETL connector to read the DynamoDB table. Use the filter option to read the required partition key.",
      "B": "Perform a query on the DynamoDB table in the AWS Glue job by using only the sort key in the key condition expression. Load the data into a DynamicFrame.",
      "C": "Perform a scan on the DynamoDB table in the Aws Glue job. Put the data into a DynamicFrame. Filter the DynamicFrame on the partition key.",
      "D": "Perform a query on the DynamoDB table in the AWS Glue job. Use the partition key in the key condition expression. Put the data into a DynamicFrame."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382575-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 281,
    "question": "한 회사가 Amazon EC2 인스턴스에서 다중 테넌트 Amazon EMR 클러스터를 실행합니다. 여러 팀이 EMR 클러스터의 데이터에 대한 대화형 쿼리 분석 및 데이터 변환을 수행합니다. 팀은 EMR Studio 워크스페이스 및 EMR 단계를 통해서만 클러스터에 액세스할 수 있습니다. 팀은 EMR 단계를 사용하여 Apache Spark 작업을 실행하여 Amazon DynamoDB 테이블에서 데이터를 가져와야 합니다. DynamoDB 테이블에는 한 팀만 액세스할 수 있어야 하는 기밀 데이터가 포함되어 있습니다. 회사는 EMR 클러스터에서 기밀 데이터에 액세스할 수 있는 팀만 적절할 경우를 확인해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "EMR 단계에 대한 런타임 역할을 설정합니다.",
      "B": "AWS Lake Formation 권한을 설정합니다.",
      "C": "EMR File System(EMRFS) 요청에 대한 IAM 역할을 설정합니다.",
      "D": "DynamoDB 리소스 기반 정책을 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ EMR Runtime Roles — EMR 단계 실행 시 임시 IAM 역할을 사용하여 세분화된 권한 제어\n▸ 다중 테넌트 EMR — 팀별로 다른 권한 필요\n▸ 기밀 데이터 액세스 제한 — 특정 팀만 DynamoDB 접근\n\n【정답 포인트】\n\"EMR 단계\" + \"팀별 권한\" + \"DynamoDB 접근 제어\" → Runtime Roles\n- Runtime Roles는 EMR 단계마다 다른 IAM 역할을 지정 가능\n- 각 팀의 단계를 다른 역할로 실행하여 권한 분리\n- DynamoDB 접근 권한을 IAM 역할로 제어\n- 기밀 데이터는 특정 역할만 DynamoDB 접근 가능하도록 설정\n\n【오답 체크】\n(B) Lake Formation은 S3 데이터 레이크 관리이며, DynamoDB와 무관\n(C) EMRFS는 S3 파일 시스템 역할이며, DynamoDB 접근 제어에 부적합\n(D) DynamoDB 리소스 정책은 EMR 역할 세분화를 지원하지 않음\n\n【시험 포인트】\n\"EMR 단계\" + \"팀별 권한\" → Runtime Roles로 단계마다 역할 지정\nRuntime Roles는 다중 테넌트 EMR에서 권한 분리의 표준 방식",
    "en_q": "A company runs a multi-tenant Amazon EMR cluster on Amazon EC2 instances. Multiple teams perform interactive query analyses and data transformations on the data in the EMR cluster. The teams can access the cluster only through EMR Studio workspaces and EMR steps. The teams need to use EMR steps to run Apache Spark jobs to fetch data from an Amazon DynamoDB table. The DynamoDB table contains confidential data that must be accessible to only one specific team. The company needs to ensure that only the appropriate team can access the confidential data in the EMR cluster. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Set up runtime roles for EMR steps.",
      "B": "Set up AWS Lake Formation permissions.",
      "C": "Set up IAM roles for EMR File System (EMRFS) requests.",
      "D": "Set up a DynamoDB resource-based policy."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382569-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 282,
    "question": "한 회사가 Amazon S3 데이터 레이크에 Apache Parquet 파일을 저장합니다. 데이터 레이크는 매시간 여러 소스에서 수천 개의 파일을 수신합니다. 파일은 50KB에서 100KB 범위입니다. 회사는 데이터 레이크를 위해 Apache Iceberg 테이블의 구현을 평가하고 있습니다. 회사는 AWS Glue Data Catalog를 평가의 일부로 사용하고 있습니다. 회사는 Iceberg에서 쿼리 성능을 최적화하기 위한 솔루션이 필요합니다. 솔루션은 시간이 지남에 따라 더 많은 파일이 추가될 때 Iceberg 테이블 성능이 저하되지 않도록 보장해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Glue 작업을 사용하여 각 날이 끝나는 시점에 파일을 512MB의 표준 크기로 압축합니다. AWS Glue 크롤러를 실행하여 Data Catalog를 업데이트합니다.",
      "B": "Data Catalog를 구성하여 매분 자동으로 파일을 압축합니다.",
      "C": "파일 크기 및 파일 수의 임계값에 기반하여 자동 압축을 활성화하도록 Iceberg 테이블 속성을 구성합니다.",
      "D": "Amazon S3에서 파티션 전략을 구현합니다. 5분마다 AWS Glue 크롤러를 실행하여 Data Catalog를 업데이트합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Iceberg Compaction — 작은 파일을 큰 파일로 병합하여 쿼리 성능 향상\n▸ Table Properties — Iceberg 테이블의 자동 최적화 설정\n▸ File Count Problem — 작은 파일이 많으면 메타데이터 오버헤드로 성능 저하\n\n【정답 포인트】\n\"Iceberg\" + \"성능 저하 방지\" + \"자동 최적화\" → Iceberg Table Properties\n- Iceberg의 자동 압축 기능을 table properties로 활성화\n- 파일 크기 및 개수 임계값을 기반으로 자동 압축\n- 수동 개입 없이 자동으로 최적화\n- 시간이 지나도 성능 저하 없음\n\n【오답 체크】\n(A) Glue 작업 수동 압축은 운영 오버헤드, 매일 한 번만 실행 (충분하지 않음)\n(B) Data Catalog는 메타데이터 관리이며, 파일 압축 기능 없음\n(D) 파티션 전략은 쿼리 성능 개선이지, 파일 개수 문제 미해결\n\n【시험 포인트】\n\"Iceberg\" + \"자동 성능 최적화\" → Iceberg table properties에 compaction 설정\nIceberg는 자동 압축 기능을 내장하여 시간이 지나도 성능 유지",
    "en_q": "A company stores Apache Parquet files in an Amazon S3 data lake. The data lake receives thousands of files from multiple sources every hour. The files range in size from 50 KB to 100 KB. The company is evaluating the implementation of Apache Iceberg tables for the data lake. The company is using AWS Glue Data Catalog as part of the evaluation. The company needs a solution to optimize query performance in Iceberg. The solution must ensure that Iceberg table performance does not degrade when more files are added over time. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use an AWS Glue job to compact the files into a standard size of 512 MB at the end of each day. Run an AWS Glue crawler to update the Data Catalog.",
      "B": "Configure the Data Catalog to automatically compact the files every minute.",
      "C": "Configure Iceberg table properties to enable automatic compaction based on thresholds for file size and the number of files.",
      "D": "Implement a partition strategy in Amazon S3. Run an AWS Glue crawler to update the Data Catalog every 5 minutes."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382565-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 283,
    "question": "데이터 엔지니어는 사물인터넷(IoT) 장치에서 스트리밍 데이터를 처리하는 AWS의 데이터 파이프라인을 유지 보수하고 모니터링해야 합니다. 파이프라인은 Amazon Kinesis Data Streams를 사용하여 데이터를 수집하고 Amazon Data Firehose를 사용하여 데이터를 Amazon S3 버킷에 전달합니다. 데이터 엔지니어는 파이프라인의 상태를 모니터링해야 합니다. 어떤 솔루션이 최소한의 운영 노력으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon CloudWatch Logs를 사용하여 Kinesis Data Streams 및 Firehose에서 생성된 로그를 수동으로 검토합니다.",
      "B": "Amazon CloudWatch 알람을 구성하여 Kinesis Data Streams 및 Firehose에 대한 IncomingBytes, OutgoingBytes, DeliveryToS3.Success와 같은 주요 메트릭을 모니터링합니다.",
      "C": "AWS Lambda 함수를 사용하여 Kinesis Data Streams 및 Firehose의 상태에 대한 일일 점검을 실행합니다. Lambda 함수를 구성하여 Amazon Simple Notification Service(Amazon SNS)를 사용하여 알림을 전송합니다.",
      "D": "Amazon Managed Service for Apache Flink를 사용하여 스트리밍 데이터에 대한 실시간 이상 탐지를 수행하고 비정상 패턴이 감지되면 경고를 호출합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudWatch Alarms — 메트릭 기반 자동 모니터링 및 알림\n▸ Key Metrics — IncomingBytes, OutgoingBytes, DeliveryToS3.Success\n▸ 운영 노력 최소화 — 자동 모니터링 vs. 수동 검토\n\n【정답 포인트】\n\"파이프라인 상태 모니터링\" + \"최소 운영 노력\" → CloudWatch Alarms\n- CloudWatch Alarms는 메트릭 기반 자동 모니터링\n- Kinesis와 Firehose의 주요 메트릭을 실시간 추적\n- 임계값 초과 시 자동 알림 (SNS, 이메일 등)\n- 수동 검토 불필요 (최소 운영 노력)\n\n【오답 체크】\n(A) 수동 로그 검토는 높은 운영 노력, 실시간 모니터링 불가능\n(C) Lambda 일일 점검은 지연(1일 간격), 실시간 모니터링 부족\n(D) Apache Flink는 이상 탐지용이며, 단순 상태 모니터링 과도\n\n【시험 포인트】\n\"스트리밍 파이프라인\" + \"상태 모니터링\" + \"최소 오버헤드\" → CloudWatch Alarms\nCloudWatch Alarms는 시계열 메트릭 모니터링의 표준",
    "en_q": "A data engineer must maintain and monitor a data pipeline on AWS that processes streaming data from Internet of Things (IoT) devices. The pipeline uses Amazon Kinesis Data Streams to ingest data and Amazon Data Firehose to deliver data to an Amazon S3 bucket. The data engineer needs to monitor the health of the pipeline. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Use Amazon CloudWatch Logs to manually review logs that are generated by Kinesis Data Streams and Firehose.",
      "B": "Configure Amazon CloudWatch alarms to monitor key metrics such as IncomingBytes, OutgoingBytes, and DeliveryToS3.Success for Kinesis Data Streams and Firehose",
      "C": "Use an AWS Lambda function to run daily checks on the status of the Kinesis Data Streams and Firehose. Configure the Lambda function to use Amazon Simple Notification Service (Amazon SNS) to send notifications.",
      "D": "Use Amazon Managed Service for Apache Flink to perform near real-time anomaly detection on the streaming data and to invoke alerts if unusual patterns are detected."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382559-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 284,
    "question": "한 회사는 변수 속성을 가진 제품 데이터를 저장하고 쿼리할 수 있는 솔루션이 필요합니다. 솔루션은 갑작스러운 트래픽 급증 중에도 예측할 수 없고 높은 부피의 쿼리를 한 자리 밀리초 지연으로 지원해야 합니다. 솔루션은 Product ID라는 기본 식별자로 항목을 검색해야 합니다. 솔루션은 Category 및 Brand라는 보조 특성으로 유연한 쿼리를 허용해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "온디맨드 용량을 가진 Amazon DynamoDB 테이블을 사용하여 제품 데이터를 저장합니다. 기본 키로 제품을 저장합니다. 보조 특성을 저장하려면 글로벌 보조 인덱스(GSI)를 사용합니다.",
      "B": "제품 데이터를 저장하려면 다중 AZ 배포가 있는 Amazon Aurora를 사용합니다. 읽기 복제본을 사용합니다. 기본 및 보조 특성에 대한 인덱스를 생성합니다.",
      "C": "동적 스케일링을 포함하는 Amazon OpenSearch Serverless 클러스터를 사용하여 제품 데이터를 저장합니다. 기본 및 보조 특성으로 제품 데이터를 인덱싱합니다.",
      "D": "Amazon ElastiCache(Redis OSS) 및 Amazon S3를 사용하여 제품 데이터를 저장합니다. Amazon Athena를 사용하여 유연한 보조 특성 쿼리를 실행합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ DynamoDB On-Demand — 갑작스러운 트래픽 급증에 자동으로 스케일\n▸ Global Secondary Indexes(GSI) — 보조 특성(Category, Brand)으로 유연한 쿼리\n▸ 한 자리 밀리초 지연 — DynamoDB의 일관된 성능\n\n【정답 포인트】\n\"변수 속성\" + \"한 자리 ms 지연\" + \"예측 불가능한 트래픽\" + \"유연한 쿼리\" → DynamoDB On-Demand + GSI\n- DynamoDB는 NoSQL 데이터 모델로 변수 속성 지원\n- On-Demand 용량은 트래픽 급증에 자동 스케일\n- Primary Key (Product ID)로 빠른 검색\n- GSI (Category, Brand)로 보조 특성 유연한 쿼리\n- 일관된 한 자리 ms 지연 보장\n\n【오답 체크】\n(B) Aurora는 관계형 모델이며, 변수 속성 지원 부족, 예측 불가능한 트래픽 대응 느림\n(C) OpenSearch는 전문 검색용이며, 관계형 쿼리에는 과도, ms 지연 보장 어려움\n(D) Redis + Athena 조합은 복잡하고, 우수한 성능 보장 어려움\n\n【시험 포인트】\n\"한 자리 ms 지연\" + \"예측 불가능 트래픽\" + \"유연한 쿼리\" → DynamoDB On-Demand\nDynamoDB는 NoSQL 유연성 + 높은 성능의 표준 솔루션",
    "en_q": "A company needs a solution to store and query product data that has variable attributes. The solution must support unpredictable and high-volume queries with single-digit millisecond latency, even during sudden traffic spikes. The solution must retrieve items by a primary identifier named Product ID. The solution must allow flexible queries by secondary attributes named Category and Brand. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use an Amazon DynamoDB table with on-demand capacity to store product data. Store products by primary key. Use global secondary indexes (GSIs) to store secondary attributes.",
      "B": "Use Amazon Aurora with a Multi-AZ deployment to store product data. Use read replicas. Create indexes for primary and secondary attributes.",
      "C": "Use an Amazon OpenSearch Serverless cluster with dynamic scaling to store product data. Index product data by primary and secondary attributes.",
      "D": "Use Amazon ElastiCache (Redis OSS) and Amazon S3 to store product data. Use Amazon Athena to run flexible secondary attribute queries."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382578-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 285,
    "question": "한 회사가 온프레미스 서버에서 로그 파일을 Amazon S3 버킷으로 업로드하고 있습니다. 회사는 온프레미스 서버의 로그가 S3 버킷에 저장된 로그와 동일한지 확인해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS SDK를 사용하여 업로드 중에 CRC32 체크섬을 자동으로 계산합니다. S3 객체 메타데이터에 체크섬을 저장합니다.",
      "B": "AWS Lambda 함수를 생성하여 SHA-256 체크섬을 계산합니다. 결과를 별도의 메타데이터 테이블에 저장합니다. 업로드 후 로그를 검증합니다.",
      "C": "S3 버킷에서 S3 Object Lock을 준수 모드로 활성화합니다. 개체를 버킷에 업로드합니다.",
      "D": "S3 버킷에 개체를 업로드한 후 S3 Object Lock을 거버넌스 모드로 S3 개체에 활성화합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CRC32 Checksum — AWS SDK 내장 체크섬, 빠른 계산\n▸ S3 Object Metadata — 객체와 함께 저장되는 메타데이터\n▸ 자동 검증 — SDK가 자동으로 전송 무결성 검증\n\n【정답 포인트】\n\"로그 무결성 검증\" + \"자동\" → AWS SDK CRC32 자동 계산 및 메타데이터 저장\n- AWS SDK는 기본적으로 업로드 시 CRC32 체크섬 계산\n- 메타데이터에 체크섬 저장하여 검증 가능\n- S3 검색 시 자동으로 무결성 검증\n- 사용자 개입 없이 자동화된 솔루션\n\n【오답 체크】\n(B) Lambda 함수는 추가 개발 및 운영 필요, SHA-256은 과도\n(C) Object Lock은 삭제 방지이며, 무결성 검증과 무관\n(D) Object Lock 거버넌스는 WORM이 아니며, 무결성 검증 기능 없음\n\n【시험 포인트】\n\"무결성 검증\" + \"자동\" → AWS SDK 내장 체크섬\nCRC32는 S3 업로드의 표준 무결성 검증 방법",
    "en_q": "A company is uploading log files from on-premises servers to an Amazon S3 bucket. The company needs to validate that the logs from the on-premises server are the same as the logs that are stored in the S3 bucket. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Use the AWS SDK to automatically compute CRC32 checksums during the upload. Store the checksums in S3 object metadata.",
      "B": "Create an AWS Lambda function to calculate SHA-256 checksums. Store results in a separate metadata table. Validate the logs after the upload.",
      "C": "Enable S3 Object Lock in compliance mode on the S3 bucket. Upload the objects to the bucket.",
      "D": "After uploading the objects to the S3 bucket, enable S3 Object Lock in governance mode on the S3 objects."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382566-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 286,
    "question": "한 전자상거래 회사가 AWS Glue ETL을 사용하여 주문을 처리하고 분석합니다. 회사는 배치된, 배송된, 배달된 및 취소된 주문을 다르게 처리하는 추출, 변환 및 로드(ETL) 파이프라인을 구축하려고 합니다. 회사는 주문 처리 시스템을 Amazon EventBridge와 통합합니다. 회사는 각 주문 상태에 대해 다른 AWS Glue 워크플로우를 호출하도록 EventBridge Scheduler 규칙을 구성합니다. 회사가 워크플로우에 대한 Amazon CloudWatch 메트릭을 검사할 때, FailedInvocations 메트릭은 취소된 주문에 대해 높은 값을 표시합니다. 회사는 실패한 호출의 원인을 확인해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "EventBridge Scheduler에서 데드 레터 큐를 구성합니다. 실패한 주문 이벤트를 분석합니다.",
      "B": "EventBridge Scheduler에서 보관 및 재생 기능을 사용하여 문제를 조사합니다.",
      "C": "EventBridge Scheduler의 재시도 정책을 변경하여 최대 재시도 값을 줄입니다.",
      "D": "EventBridge Scheduler의 재시도 정책을 변경하여 이벤트의 최대 보존 기간 값을 증가시킵니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Dead-Letter Queue (DLQ) — 실패한 이벤트를 저장하여 분석\n▸ FailedInvocations — EventBridge Scheduler에서 실패한 호출\n▸ 문제 분석 — 실패 원인을 파악하기 위해 이벤트 검토\n\n【정답 포인트】\n\"실패한 호출의 원인 확인\" → Dead-Letter Queue에 저장\n- EventBridge Scheduler의 DLQ 기능으로 실패한 이벤트 캡처\n- DLQ에 저장된 이벤트를 분석하여 실패 원인 파악\n- 취소된 주문 이벤트의 실패 패턴 분석\n- 문제의 근본 원인을 이해하기 위한 증거 제공\n\n【오답 체크】\n(B) 보관 및 재생은 이미 전달된 이벤트의 재실행이며, 실패 원인 분석 불가능\n(C) 재시도 횟수 감소는 실패 원인 분석과 무관, 오히려 문제 악화\n(D) 최대 보존 기간은 이벤트 보관 시간이며, 실패 원인 분석과 무관\n\n【시험 포인트】\n\"실패한 이벤트 분석\" → EventBridge DLQ\nDLQ는 실패한 메시지/이벤트를 저장하여 디버깅의 표준 패턴",
    "en_q": "An ecommerce company uses AWS Glue ETL to process and analyze orders. The company wants to build an extract, transform, and load (ETL) pipeline that processes placed, shipped, delivered, and canceled orders differently. The company integrates the order processing system with Amazon EventBridge. The company configures EventBridge Scheduler rules for each order status to invoke different AWS Glue workflows. When the company examines Amazon CloudWatch metrics for the workflow, the company notices that the FailedInvocations metric shows a high value for canceled orders. The company must determine the cause of the failed invocations. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Configure a dead-letter queue in EventBridge Scheduler to store failed events. Analyze the failed order events.",
      "B": "Use the archive and replay features in EventBridge Scheduler to investigate the issue.",
      "C": "Change the retry policy in EventBridge Scheduler to reduce the value for maximum retries.",
      "D": "Change the retry policy in EventBridge Scheduler to increase the value for maximum age of event."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382560-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 287,
    "question": "한 회사가 Amazon S3 버킷에서 1TB 파일을 처리하기 위한 데이터 파이프라인을 구축해야 합니다. 파이프라인은 비즈니스 논리를 기반으로 3개의 DataFrame을 생성해야 합니다. 파이프라인은 모든 3개의 DataFrame을 두 번째 S3 버킷에 병렬로 저장해야 합니다. 회사는 파이프라인을 소스 S3 버킷에 대한 파일 업로드와 일치하는 Amazon EventBridge 규칙의 대상으로 설정해야 합니다. 어떤 솔루션이 가장 적은 유지보수 오버헤드로 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon EMR에서 Apache Spark Streaming 애플리케이션을 구성하여 소스 S3 버킷의 데이터를 배치로 처리하고, DataFrame을 생성하고, 출력을 대상 S3 버킷에 저장합니다.",
      "B": "비즈니스 논리를 처리하고 DataFrame을 병렬로 대상 S3 버킷에 저장하도록 3개의 AWS Lambda 함수를 구성합니다.",
      "C": "3개의 AWS Glue 작업을 병렬로 실행하도록 AWS Glue 워크플로우를 구성하여 파일을 처리합니다.",
      "D": "3개의 AWS Glue 작업을 병렬로 실행하도록 AWS Step Functions 상태 머신을 구성하여 AWS Glue 워크플로우를 시작합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Glue Workflow — EventBridge와 네이티브 통합, 병렬 작업 실행\n▸ 최소 유지보수 — 관리형 오케스트레이션, 자동화된 재시도\n▸ 병렬 처리 — 3개의 DataFrame을 동시에 처리\n\n【정답 포인트】\n\"EventBridge 트리거\" + \"병렬 처리\" + \"최소 유지보수\" → AWS Glue Workflow\n- AWS Glue Workflow는 EventBridge와 직접 통합\n- 3개의 Glue 작업을 병렬로 실행 가능\n- 관리형 서비스이므로 인프라 운영 불필요\n- 재시도, 에러 처리 기본 제공\n\n【오답 체크】\n(A) EMR Spark Streaming은 배치 처리용이며, 병렬 작업 관리 복잡\n(B) 3개의 Lambda는 1TB 파일 처리에 부적합 (메모리, 타임아웃 제한)\n(D) Step Functions는 추가 오버헤드, Glue Workflow로 충분\n\n【시험 포인트】\n\"EventBridge\" + \"병렬 처리\" + \"최소 오버헤드\" → AWS Glue Workflow\nGlue Workflow는 EventBridge 이벤트 대상으로 직접 사용 가능",
    "en_q": "A company needs to build a data pipeline to process a 1-TB file from an Amazon S3 bucket. The pipeline needs to create three DataFrames based on business logic. The pipeline must save all three DataFrames to a second S3 bucket in parallel. The company needs to set the pipeline to be the target of an Amazon EventBridge rule that matches file uploads to the source S3 bucket. Which solution will meet these requirements with the LEAST maintenance overhead?",
    "en_opts": {
      "A": "Configure an Apache Spark Streaming application on Amazon EMR to process data from the S3 source bucket in batches, create DataFrames, and save the output to the destination S3 bucket.",
      "B": "Configure three AWS Lambda functions to process the business logic and to save the DataFrames to the destination S3 bucket in parallel.",
      "C": "Configure an AWS Glue workflow to run three AWS Glue jobs in parallel to process the file.",
      "D": "Configure an AWS Step Functions state machine to initiate an AWS Glue workflow to run three AWS Glue jobs in parallel to process the file."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/389738-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 288,
    "question": "한 회사는 실시간에 가깝게 IoT 센서 데이터를 변환한 후 Amazon S3 버킷에 저장해야 합니다. 데이터는 Amazon Kinesis Data Streams의 데이터 스트림에서 사용할 수 있습니다. 회사는 저장하기 전에 복잡하고 상태 저장 변환을 데이터에 적용해야 합니다. 어떤 솔루션이 가장 적은 운영 오버헤드로 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Glue ETL 작업을 예약하여 데이터 스트림을 처리합니다.",
      "B": "데이터 스트림을 처리하도록 Amazon Managed Service for Apache Flink에서 애플리케이션을 구성합니다.",
      "C": "데이터 스트림을 처리하도록 AWS Lambda 함수를 구성합니다.",
      "D": "데이터 스트림을 처리하도록 Amazon EMR 클러스터에서 Apache Spark 작업을 예약합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Managed Service for Apache Flink — 실시간 스트림 처리, 상태 저장 연산\n▸ Stateful Transformations — 이전 데이터 상태를 고려한 변환\n▸ Near Real-Time — 처리 지연 최소화\n▸ 운영 오버헤드 최소 — 관리형 서비스\n\n【정답 포인트】\n\"실시간 스트림\" + \"복잡한 상태 저장 변환\" + \"최소 오버헤드\" → Apache Flink\n- Apache Flink는 복잡한 상태 저장 연산에 최적화\n- 실시간 스트림 처리의 표준 도구\n- Kinesis Data Streams와 네이티브 통합\n- 관리형 서비스이므로 인프라 운영 불필요\n\n【오답 체크】\n(A) Glue ETL은 배치 처리용이며, 실시간 처리 부적합\n(C) Lambda는 상태 저장 연산 지원 부족, 메모리 제한\n(D) EMR Spark는 실시간 처리에 과도, 인프라 운영 필요\n\n【시험 포인트】\n\"실시간\" + \"상태 저장 변환\" → Apache Flink\nFlink는 스트림 처리에서 상태 저장 연산의 표준 솔루션",
    "en_q": "A company needs to transform IoT sensor data in near real time before the company stores the data in an Amazon S3 bucket. The data is available from a data stream in Amazon Kinesis Data Streams. The company needs to apply complex and stateful transformations to the data before the company stores the data. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Schedule AWS Glue ETL jobs to process the data stream.",
      "B": "Configure an application in Amazon Managed Service for Apache Flink to process the data stream.",
      "C": "Configure an AWS Lambda function to process the data stream.",
      "D": "Schedule Apache Spark jobs on an Amazon EMR cluster to process the data stream."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/389734-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 289,
    "question": "한 회사는 스트리밍 서비스에서 수집한 시계열 데이터를 Amazon S3 버킷에 저장합니다. 회사는 회사의 VPC 내에 배포된 워크로드만 데이터에 액세스할 수 있도록 보장해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "회사의 VPC에서 발생하는 트래픽만 액세스를 허용하는 조건을 사용하는 S3 버킷 정책을 생성합니다.",
      "B": "회사의 VPC CIDR 블록에서만 연결을 허용하는 보안 그룹을 S3 버킷에 적용합니다.",
      "C": "요청이 회사의 VPC 내에서 발생하지 않는 한 모든 사용자의 액세스를 거부하는 IAM 정책을 정의합니다.",
      "D": "VPC 서브넷에서 네트워크 ACL을 사용하여 S3 버킷에 액세스할 수 있는 리소스만 허용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 Bucket Policy — S3 레벨에서 VPC 조건 기반 액세스 제어\n▸ VPC Endpoint Condition — aws:sourceVpc 또는 aws:sourcePrincipal 조건\n▸ 액세스 제한 — VPC 내 워크로드만 허용\n\n【정답 포인트】\n\"VPC 내 워크로드만 액세스\" → S3 Bucket Policy + VPC 조건\n- S3 버킷 정책에서 VPC 조건(aws:sourceVpc) 추가\n- VPC 내에서만 s3:* 권한 허용\n- S3 레벨에서 직접 제어 가능\n- VPC 외부 요청은 자동으로 거부\n\n【오답 체크】\n(B) 보안 그룹은 S3에 적용 불가능 (S3는 네트워크 인터페이스 없음)\n(C) IAM 정책은 IAM 주체별 권한이며, VPC 조건 기반 제어는 버킷 정책\n(D) Network ACL은 인바운드/아웃바운드 제어이며, S3 액세스 제어가 아님\n\n【시험 포인트】\n\"VPC 조건 기반 액세스\" → S3 Bucket Policy\nBucket Policy는 S3 객체 레벨 액세스 제어의 표준",
    "en_q": "A company stores time-series data that is collected from streaming services in an Amazon S3 bucket. The company must ensure that only workloads that are deployed within the company's VPC can access the data. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Create an S3 bucket policy that uses a condition to allow access only to traffic that originates from the company's VPC.",
      "B": "Apply a security group to the S3 bucket that allows connections only from the company's VPC CIDR block.",
      "C": "Define an IAM policy that denies access to all users unless the request originates from within the company's VPC.",
      "D": "Use a network ACL on the VPC subnets to allow only specific resources to access the S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/389733-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 290,
    "question": "회사는 AWS에서 데이터 플랫폼을 운영합니다. 데이터 플랫폼은 AWS Glue를 사용하여 데이터 카탈로그를 제공하고 처리합니다. 회사는 데이터의 품질 문제를 발견합니다. 회사는 데이터 품질 검증을 구현해야 합니다. 검증에는 알려진 문제에 대한 규칙이 포함되어야 합니다. 검증은 예상치 못한 데이터 품질 문제를 자동으로 감지할 수 있어야 합니다. 어떤 솔루션이 가장 낮은 운영 오버헤드로 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Glue 작업을 사용하여 이상 탐지를 포함한 AWS Glue Data Quality 검증을 구현합니다.",
      "B": "AWS Glue 작업을 사용하여 오픈 소스 데이터 품질 프레임워크를 사용하는 데이터 품질 규칙을 구현합니다.",
      "C": "AWS Glue DataBrew를 사용하여 데이터를 프로파일링합니다. 프로파일링 결과를 기반으로 데이터 품질 규칙을 구성합니다.",
      "D": "AWS Glue 작업을 사용하여 SQL 문을 사용하는 데이터 품질 검증을 구현합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Glue Data Quality — 알려진 규칙과 ML 기반 이상 탐지를 모두 지원하는 AWS Glue 네이티브 기능\n▸ Anomaly Detection — 예상치 못한 데이터 품질 문제를 자동으로 감지하는 머신러닝 기반 기능\n\n【정답 포인트】\n▸ \"자동으로 감지\" → AWS Glue Data Quality의 ML 이상 탐지 기능 필수\n▸ \"알려진 문제 규칙 + 예상치 못한 문제 감지\" → 두 가지 요구사항 모두 충족\n▸ \"가장 낮은 운영 오버헤드\" → AWS Glue 네이티브 솔루션이 최적\n\n【오답 체크】\n(B) 오픈 소스 프레임워크는 높은 운영 오버헤드(유지보수, 버전 관리, 통합)\n(C) DataBrew는 프로파일링 도구이며 자동 이상 탐지 기능 부족\n(D) SQL은 알려진 규칙만 처리 가능, 자동 이상 탐지 불가\n\n【시험 포인트】\n\"LEAST operational overhead\"를 보면 AWS 네이티브 관리형 서비스 선택. Glue Data Quality는 규칙 기반 + ML 이상 탐지를 통합한 완전 관리형 솔루션.",
    "en_q": "A company runs a data platform on AWS. The data platform uses AWS Glue to provide a data catalog and to perform processing. The company notices quality issues in the data. The company needs to implement data quality validations. The validations must include rules for known issues. The validations must have the ability to automatically detect unexpected data quality issues. Which solution will meet these requirements with the LEAST operation overhead?",
    "en_opts": {
      "A": "Use AWS Glue jobs to implement AWS Glue Data Quality validations that include anomaly detection.",
      "B": "Use AWS Glue jobs to implement data quality rules that use open source data quality frameworks.",
      "C": "Use AWS Glue DataBrew to profile the data. Configure data quality rules based on the data quality results from the profiling.",
      "D": "Use AWS Glue jobs to implement data quality validations that use SQL statements."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/389732-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 291,
    "question": "회사는 Apache Iceberg 테이블을 사용하는 자체 관리형 트랜잭션 데이터 레이크를 유지하기 위해 Amazon S3 Standard 버킷을 사용합니다. 데이터 레이크는 실시간과 배치 방식으로 데이터를 수집합니다. 사용자는 실시간 테이블의 성능이 느리다고 보고합니다. 데이터 엔지니어는 실시간 테이블을 검토하고 테이블이 많은 작은 데이터 파일로 구성되어 있음을 알아냅니다. 데이터 엔지니어는 실시간 테이블의 성능을 개선해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "이전 스냅샷을 만료합니다.",
      "B": "이전 스냅샷을 아카이브합니다.",
      "C": "Iceberg 테이블에서 링크되지 않은 S3 객체를 삭제합니다.",
      "D": "압축을 적용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Compaction — 많은 작은 파일들을 더 적은 수의 큰 파일로 병합하는 Iceberg 최적화 기법\n▸ Small File Problem — 실시간 수집 시 발생하는 성능 저하의 주요 원인\n\n【정답 포인트】\n▸ \"많은 작은 데이터 파일\" → Compaction으로 큰 파일로 통합\n▸ 쿼리 성능 저하 해결 → 파일 개수 감소로 I/O 오버헤드 감소\n▸ Apache Iceberg 최적화 → Compaction은 Iceberg의 표준 최적화 작업\n\n【오답 체크】\n(A) 스냅샷 만료는 이전 버전 정리, 현재 성능 문제 미해결\n(B) 스냅샷 아카이브는 저장 최적화, 쿼리 성능 미개선\n(C) S3 객체 삭제는 위험성 높음, 테이블 무결성 손상 가능\n\n【시험 포인트】\nIceberg \"많은 작은 파일\" 문제는 Compaction으로 해결. 실시간 수집 환경에서는 정기적 compaction 작업이 필수 성능 최적화.",
    "en_q": "A company uses an Amazon S3 Standard bucket to maintain a self-managed transactional data lake that uses Apache Iceberg tables. The data lake ingests data both in real time and in batches. Users report slow performance for real-time tables. A data engineer reviews the real-time tables and notices that the tables are made up of many small data files The data engineer must improve the performance of the real-time tables. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Expire historic snapshots.",
      "B": "Archive historic snapshots.",
      "C": "Delete S3 objects that are not linked from the Iceberg table.",
      "D": "Apply compaction."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/389737-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 292,
    "question": "전자상거래 회사는 매일 CSV 형식의 고객 트랜잭션 로그를 수집하고 Amazon S3에 저장합니다. 회사는 Amazon Athena를 사용하여 각 로그를 받은 같은 날 로그에서 속성의 부분집합을 스캔합니다. 트랜잭션 볼륨이 증가하면서 쿼리 시간이 증가합니다. 회사는 쿼리 성능을 개선하고 싶습니다. 어떤 솔루션이 가장 짧은 쿼리 시간으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "CSV 로그를 여러 ORC 파일로 변환하여 Athena에서 더 나은 병렬 처리를 제공합니다. Amazon S3에서 날짜로 분할합니다. 열 축소 필터를 사용합니다.",
      "B": "CSV 로그를 JSON으로 변환합니다. Amazon S3에서 날짜로 분할합니다. 동적 필터링과 함께 Athena를 사용하여 데이터 스캔을 줄입니다.",
      "C": "CSV 로그를 Avro로 변환합니다. Amazon S3에서 날짜로 분할합니다. 프로젝션 기반 분할과 함께 Athena를 사용합니다.",
      "D": "CSV 로그를 하루 단위의 단일 Apache Parquet 파일로 변환합니다. Amazon S3에서 날짜별로 데이터를 분할합니다. Athena와 함께 조건자 축소 필터를 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Parquet — 열 지향(columnar) 형식으로 속성 부분집합 스캔에 최적\n▸ Predicate Pushdown — Parquet의 메타데이터로 불필요한 파일/블록 건너뛰기\n▸ Partitioning — 날짜 기반 분할로 쿼리 범위 제한\n\n【정답 포인트】\n▸ \"부분 속성만 스캔\" → Parquet 열 지향 형식이 최적\n▸ \"가장 짧은 쿼리 시간\" → Parquet + 조건자 축소 조합이 최고 성능\n▸ \"같은 날 스캔\" → 날짜 분할로 불필요한 파일 접근 제거\n\n【오답 체크】\n(A) ORC는 좋은 형식이지만 JSON/Avro보다 우수하지만 Parquet 만큼 최적화 안 됨\n(B) JSON은 행 지향, 부분 속성 스캔에 비효율\n(C) Avro는 행 지향, 분석 워크로드에 부적절\n\n【시험 포인트】\n\"SHORTEST query times\" + \"subset of attributes\" → Parquet 열 지향 형식. Athena에서 부분 스캔 최적화는 Parquet + 조건자 축소 필터 조합이 최고의 성능.",
    "en_q": "An ecommerce company collects daily customer transaction logs in CSV format and stores the logs in Amazon S3. The company uses Amazon Athena to scan a subset of attributes from the logs on the same day the company receives each log. Query times are increasing because of increasing transaction volume. The company wants to improve query performance. Which solution will meet these requirements with the SHORTEST query times?",
    "en_opts": {
      "A": "Convert the CSV logs into multiple ORC files for better parallelism in Athena. Partition by date in Amazon S3. Use columnar pushdown filters.",
      "B": "Convert the CSV logs to JSON. Partition by date in Amazon S3. Use Athena with dynamic filtering to reduce data scans.",
      "C": "Convert the CSV logs to Avro. Partition by date in Amazon S3. Use Athena with projection-based partitioning.",
      "D": "Convert the CSV logs to a single Apache Parquet file for each day Partition the data by date in Amazon S3. Use Athena with predicate pushdown filters."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/389736-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 293,
    "question": "회사는 Amazon S3 버킷에 고객 데이터를 저장합니다. 회사는 7년보다 오래된 모든 고객 데이터를 영구적으로 삭제해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "S3 Lifecycle 정책을 구성하여 7년보다 오래된 객체를 영구적으로 삭제합니다.",
      "B": "Amazon Athena를 사용하여 7년보다 오래된 객체에 대해 S3 버킷을 쿼리합니다. Athena를 구성하여 결과를 삭제합니다.",
      "C": "S3 Lifecycle 정책을 구성하여 7년보다 오래된 객체를 S3 Glacier Deep Archive로 이동합니다.",
      "D": "S3 Lifecycle 정책을 구성하여 7년보다 오래된 모든 객체에서 S3 Object Lock을 활성화합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ S3 Lifecycle Policy — 객체 생명주기 자동 관리 (전환, 만료, 삭제)\n▸ Expiration — Lifecycle 정책의 완전 삭제 작업\n▸ \"permanently delete\" — 복구 불가능한 영구 삭제 필요\n\n【정답 포인트】\n▸ \"영구적으로 삭제\" → Expiration 규칙이 유일한 방법\n▸ \"7년보다 오래된\" → Days 파라미터로 정확한 시간 지정\n▸ \"가장 간단한 솔루션\" → Lifecycle 정책은 자동화, 운영 비용 최소\n\n【오답 체크】\n(B) Athena는 조회 도구, 삭제 기능 없음\n(C) Glacier Deep Archive는 아카이빙, 삭제 아님 (저장 비용 증가)\n(D) Object Lock은 데이터 보호 도구, 삭제가 아닌 잠금\n\n【시험 포인트】\nS3 자동화 관리 문제는 Lifecycle 정책. Expiration 규칙은 지정 기간 후 객체 자동 삭제. 이는 유일한 솔루션.",
    "en_q": "A company stores customer data in an Amazon S3 bucket. The company must permanently delete all customer data that is older than 7 years. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Configure an S3 Lifecycle policy to permanently delete objects that are older than 7 years.",
      "B": "Use Amazon Athena to query the S3 bucket for objects that are older than 7 years. Configure Athena to delete the results.",
      "C": "Configure an S3 Lifecycle policy to move objects that are older than 7 years to S3 Glacier Deep Archive.",
      "D": "Configure an S3 Lifecycle policy to enable S3 Object Lock on all objects that are older than 7 years."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/389730-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 294,
    "question": "두 데이터 엔지니어링 팀은 별도의 AWS 계정을 사용합니다. 두 팀 모두 세 번째 AWS 계정에 있는 Amazon Redshift 클러스터의 동일한 데이터 공유(datashare)에 액세스를 요청합니다. 데이터 공유의 이름은 salesshare입니다. 데이터 엔지니어는 Amazon Redshift SQL 인터페이스를 사용하여 두 데이터 엔지니어링 팀의 데이터 공유 액세스 권한을 부여해야 합니다. 어떤 명령어 또는 명령어 조합이 이 요구사항을 충족할까요?",
    "options": {
      "A": "GRANT USAGE ON DATASHARE salesshare TO ACCOUNTS ' ' AND ' ';",
      "B": "GRANT USAGE ON DATASHARE salesshare TO NAMESPACES ' ' AND ' ';",
      "C": "GRANT USAGE ON DATASHARE salesshare TO ACCOUNT ' '; GRANT USAGE ON DATASHARE salesshare TO ACCOUNT ' ';",
      "D": "GRANT USAGE ON DATASHARE salesshare TO NAMESPACE ' '; GRANT USAGE ON DATASHARE salesshare TO NAMESPACE ' ';"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Redshift Datashare — AWS 계정 간 데이터 공유 기능\n▸ NAMESPACE — Redshift에서 AWS 계정과 클러스터의 고유 식별자\n▸ GRANT USAGE — Datashare 액세스 권한 부여 명령어\n\n【정답 포인트】\n▸ \"두 팀이 각각 다른 계정\" → 각 계정마다 별도 GRANT 필요\n▸ \"NAMESPACE\" → Datashare 권한 부여의 올바른 단위 (ACCOUNT 아님)\n▸ \"두 명령어\" → 각 팀마다 독립적 GRANT USAGE 필요\n\n【오답 체크】\n(A) 복수형 \"ACCOUNTS\"는 문법 오류 (AND 로 결합 불가)\n(B) 복수형 \"NAMESPACES\"는 문법 오류\n(C) \"ACCOUNT\"는 Datashare GRANT에 사용 불가능 (NAMESPACE 사용)\n\n【시험 포인트】\nRedshift Datashare 권한 부여는 GRANT USAGE ON DATASHARE ... TO NAMESPACE. 여러 네임스페이스에 권한을 부여할 때는 각각 별도의 GRANT 명령어 필요. ACCOUNT 키워드는 Datashare 문법에서 지원하지 않음.",
    "en_q": "Two data engineering teams use separate AWS accounts. Both teams request access to the same datashare in an Amazon Redshift cluster that is in a third AWS account. The datashare is named salesshare. A data engineer must use the Amazon Redshift SQL interface to grant both data engineering teams' access to the datashare. Which command or commands will meet this requirement?",
    "en_opts": {
      "A": "GRANT USAGE ON DATASHARE salesshare TO ACCOUNTS ' ' AND ' ';",
      "B": "GRANT USAGE ON DATASHARE salesshare TO NAMESPACES ' ' AND ' ';",
      "C": "GRANT USAGE ON DATASHARE salesshare TO ACCOUNT ' '; GRANT USAGE ON DATASHARE salesshare TO ACCOUNT ' ';",
      "D": "GRANT USAGE ON DATASHARE salesshare TO NAMESPACE ' '; GRANT USAGE ON DATASHARE salesshare TO NAMESPACE ' ';"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/385207-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 295,
    "question": "회사는 Amazon DynamoDB 테이블에 정기적으로 데이터를 로드합니다. 회사는 DynamoDB에서 1년 동안 데이터를 유지해야 합니다. 1년 후에는 회사가 5년 동안 데이터를 아카이브해야 합니다. 5년 후에는 회사가 데이터를 삭제해야 합니다. 어떤 솔루션이 가장 운영적으로 효율적인 방식으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "DynamoDB에 로드된 데이터에 타임스탬프를 포함합니다. AWS Lambda 함수를 생성하여 타임스탬프를 읽고 1년 된 항목을 Amazon S3 Glacier Flexible Retrieval로 이동합니다. S3 Lifecycle 정책을 생성하여 5년 후 항목을 삭제합니다.",
      "B": "Amazon DynamoDB Streams를 활성화합니다. TTL 규칙을 구성하여 1년 후 DynamoDB 테이블에서 항목을 삭제합니다. AWS Lambda 함수를 사용하여 스트림을 사용하고 항목을 Amazon S3 Glacier Flexible Retrieval로 전송합니다. 5년 후 S3 Glacier Flexible Retrieval에서 항목을 삭제합니다.",
      "C": "DynamoDB에 로드된 데이터에 타임스탬프를 포함합니다. AWS Lambda 함수를 사용하여 타임스탬프를 읽고 1년 된 항목을 Amazon S3 Glacier Deep Archive로 직접 이동합니다. 함수를 구성하여 5년 후 항목을 삭제합니다.",
      "D": "Amazon DynamoDB Streams를 활성화합니다. TTL 규칙을 구성하여 1년 후 DynamoDB 테이블에서 항목을 삭제합니다. AWS Lambda 함수를 사용하여 스트림을 사용하고 항목을 Amazon S3 Glacier Deep Archive로 직접 전송합니다. S3 Lifecycle 정책을 생성하여 5년 후 항목을 삭제합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ DynamoDB TTL — 지정된 시간 후 항목 자동 삭제\n▸ DynamoDB Streams — TTL 삭제 이벤트 캡처 (삭제 전)\n▸ S3 Lifecycle Policy — 자동 저장소 전환 및 삭제 관리\n\n【정답 포인트】\n▸ \"운영적으로 효율적\" → 자동화된 TTL + Streams 조합\n▸ \"1년 후 아카이브\" → TTL 삭제 이벤트를 Streams로 캡처, Lambda로 S3 저장\n▸ \"5년 후 삭제\" → S3 Lifecycle의 Expiration 자동 관리\n▸ \"Deep Archive\" → Glacier Deep Archive가 5년 장기 보관에 가장 경제적\n\n【오답 체크】\n(A) 정기적 Lambda 폴링은 운영 오버헤드 증가, TTL 활용 안 함\n(B) Flexible Retrieval은 Deep Archive보다 비용 높음 (5년 장기 보관)\n(C) Lambda 함수에서 직접 삭제 로직 구성 → 복잡, 오류 가능성, 운영 비용 증가\n\n【시험 포인트】\nDynamoDB 자동 생명주기 관리 = TTL (1년) + DynamoDB Streams (이벤트 캡처) + Lambda (아카이브) + S3 Lifecycle (최종 삭제). 가장 운영 효율적인 완전 자동화 솔루션.",
    "en_q": "A company regularly loads data into an Amazon DynamoDB table. The company must retain the data in DynamoDB for 1 year. After 1 year, the company must archive the data for 5 years. After 5 years, the company must delete the data. Which solution will meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Include a timestamp with the data that is loaded into DynamoDB. Create an AWS Lambda function to read the timestamps and move items that are 1 year old to Amazon S3 Glacier Flexible Retrieval. Create an S3 Lifecycle policy to delete the items after 5 years.",
      "B": "Enable Amazon DynamoDB Streams. Configure a TTL rule to delete items from the DynamoDB table after 1 year. Use an AWS Lambda function to consume the stream and send items to Amazon S3 Glacier Flexible Retrieval. Delete the items from S3 Glacier Flexible Retrieval after 5 years.",
      "C": "Include a timestamp with the data that is loaded into DynamoDB. Use an AWS Lambda function to read timestamps and move items that are 1 year old directly to Amazon S3 Glacier Deep Archive. Configure the function to delete items after 5 years.",
      "D": "Enable Amazon DynamoDB Streams. Configure a TTL rule to delete items from the DynamoDB table after 1 year. Use an AWS Lambda function to consume the stream and send items directly to Amazon S3 Glacier Deep Archive. Create an S3 Lifecycle policy to delete the items after 5 years."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/389731-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 296,
    "question": "회사는 특정 데이터를 1년 동안 유지해야 합니다. 데이터 엔지니어는 회사의 Amazon S3 버킷 중 하나에 3년보다 오래된 수백만 개의 객체가 포함되어 있음을 발견합니다. 버킷에서 버전 관리가 활성화되어 있습니다. 비용을 절감하기 위해 데이터 엔지니어는 365일 후 객체를 만료하도록 S3 Lifecycle 규칙을 구현합니다. 새로운 S3 Lifecycle 규칙으로 인해 객체 수가 감소하지 않고 대신 두 배가 됩니다. 데이터 엔지니어가 이전 객체를 영구적으로 삭제하기 위해 취해야 할 추가 단계는 무엇입니까?",
    "options": {
      "A": "S3 버킷에서 버전 관리를 비활성화합니다.",
      "B": "AWS Lambda 함수를 사용하여 Python 작업을 실행하여 365일보다 오래된 객체를 식별하고 삭제합니다.",
      "C": "S3 버킷에서 버전 관리를 일시 중지합니다.",
      "D": "365일보다 오래된 객체의 현재 버전과 만료된 버전을 삭제하도록 추가 S3 Lifecycle 규칙을 추가합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Versioning — S3의 버전 관리 활성화 시 이전 버전이 삭제되지 않고 마크만 됨\n▸ Current Version — 최신 객체 버전\n▸ Expired Version — 만료 마크된 이전 버전\n▸ NoncurrentVersionExpiration — Lifecycle 규칙으로 이전 버전 정리\n\n【정답 포인트】\n▸ \"객체 수가 두 배\" → Lifecycle은 최신 버전만 만료 마크, 이전 버전 유지\n▸ \"버전 관리 활성화\" → 각 마크된 객체에 Delete Marker 추가로 객체 수 증가\n▸ \"이전 버전 삭제\" → NoncurrentVersionExpiration 규칙으로 이전 버전 정리 필요\n\n【오답 체크】\n(A) 버전 관리 비활성화는 새로운 버전 방지, 기존 버전은 유지됨\n(B) Lambda로 직접 삭제는 비용 및 복잡도 증가, 자동화 솔루션 아님\n(C) 버전 관리 일시 중지도 기존 이전 버전 삭제 안 함\n\n【시험 포인트】\n\"Versioning 활성화 + Lifecycle\" 문제는 두 가지 규칙 필요: (1) 최신 버전 만료, (2) NoncurrentVersionExpiration으로 이전 버전 정리. 이 조합만이 완전한 객체 삭제 보장.",
    "en_q": "A company must retain specific data for 1 year. A data engineer observes that one of the company's Amazon S3 buckets contains millions of objects that are older than 3 years. Versioning is enabled on the bucket. To reduce costs, the data engineer implements an S3 Lifecycle rule to expire objects after 365 days. The new S3 Lifecycle rule causes the object count to double instead of decrease. Which additional step must the data engineer take to permanently delete the old objects?",
    "en_opts": {
      "A": "Disable versioning on the S3 bucket.",
      "B": "Use an AWS Lambda function to run a Python job to identify and delete objects that are older than 365 days.",
      "C": "Suspend versioning on the S3 bucket.",
      "D": "Add an additional S3 Lifecycle rule to delete the current and expired versions of objects that are older than 365 days."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/389703-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 297,
    "question": "제조 회사는 AWS Glue 작업을 사용하여 IoT 센서 데이터를 처리하여 예측 유지보수 모델을 생성합니다. 데이터 엔지니어는 예상 범위 -50°C~150°C를 벗어나는 온도 수치를 식별하기 위해 자동화된 데이터 품질 검사를 구현해야 합니다. 데이터 품질 검사는 또한 타임스탬프 값이 누락된 레코드를 식별해야 합니다. 데이터 엔지니어는 최소한의 코딩이 필요하고 지정된 문제를 자동으로 플래그할 수 있는 솔루션이 필요합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Glue DataBrew 프로젝트를 생성하여 센서 데이터를 프로파일링합니다. 타임스탬프에 대한 완전성 규칙을 정의합니다. 온도 값에 대한 숫자 범위 검증을 설정합니다.",
      "B": "AWS Glue의 Data Quality 규칙과 머신러닝(ML) 기반 이상 탐지를 사용하여 누락된 타임스탬프를 식별하고 온도 이상을 탐지합니다.",
      "C": "AWS Lambda 함수를 생성하여 센서 데이터 파일을 스캔하고 온도 범위를 검증합니다. AWS Glue Data Catalog 테이블을 사용하여 타임스탬프 완전성을 확인합니다.",
      "D": "사용자 정의 데이터 품질 연산자를 사용하는 AWS Glue DynamicFrame을 생성하여 센서 데이터를 프로파일링합니다. Amazon SageMaker Data Wrangler 변환을 사용하여 타임스탬프와 온도 범위를 검증합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Glue DataBrew — 데이터 프로파일링 및 데이터 품질 검사 전문 도구\n▸ Completeness Rules — 누락된 값 감지 규칙\n▸ Numeric Range Validation — 숫자 범위 검사 규칙\n▸ \"최소한의 코딩\" → Low-code/No-code 솔루션\n\n【정답 포인트】\n▸ \"최소한의 코딩\" → DataBrew는 UI 기반 규칙 정의, 코드 불필요\n▸ \"자동으로 플래그\" → DataBrew는 검사 결과를 자동 리포팅\n▸ \"특정 범위 검증\" → Numeric Range Validation으로 -50~150°C 범위 확인\n▸ \"타임스탐프 누락\" → Completeness Rules로 누락값 감지\n\n【오답 체크】\n(B) Glue Data Quality는 ETL 내 규칙 코딩 필요, DataBrew 만큼 Low-code 아님\n(C) Lambda는 커스텀 코딩 필수, 복잡도 높음\n(D) SageMaker Data Wrangler는 데이터 품질 검사보다 변환 도구, 불필요한 복잡도\n\n【시험 포인트】\n\"최소한의 코딩 + 자동 검사\"는 DataBrew. Completeness + Range Validation은 DataBrew의 표준 규칙 세트. ETL 파이프라인 내 통합되지 않아도 독립적으로 품질 검사 수행.",
    "en_q": "A manufacturing company uses AWS Glue jobs to process IoT sensor data to generate predictive maintenance models. A data engineer needs to implement automated data quality checks to identify temperature readings that are outside the expected range of -50°C to 150°C. The data quality checks must also identify records that are missing timestamp values. The data engineer needs a solution that requires minimal coding and can automatically flag the specified issues. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an AWS Glue DataBrew project to profile the sensor data Define completeness rules for timestamps. Set up numeric range validation for temperature values.",
      "B": "Use AWS Glue's Data Quality rules and machine learning (ML)-based anomaly detection to identify missing timestamps and to detect temperature anomalies.",
      "C": "Create an AWS Lambda function to scan the sensor data files to validate temperature ranges. Use AWS Glue Data Catalog tables to check timestamp completeness.",
      "D": "Create an AWS Glue DynamicFrame that uses a custom data quality operator to profile the sensor data. Use Amazon SageMaker Data Wrangler transforms to validate timestamps and temperature ranges."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/389729-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 298,
    "question": "미디어 회사는 사용자 행동과 선호도에 기반한 고객에게 미디어 콘텐츠를 추천하는 시스템을 개선하고 싶습니다. 추천 시스템을 개선하기 위해 회사는 타사 데이터세트의 인사이트를 회사의 기존 분석 플랫폼에 통합해야 합니다. 회사는 타사 데이터세트 통합에 필요한 노력과 시간을 최소화하고 싶습니다. 어떤 솔루션이 가장 낮은 운영 오버헤드로 이 요구사항을 충족할까요?",
    "options": {
      "A": "API 호출을 사용하여 AWS Data Exchange에서 타사 데이터세트에 액세스하고 통합합니다.",
      "B": "API 호출을 사용하여 AWS DataSync에서 타사 데이터세트에 액세스하고 통합합니다.",
      "C": "Amazon Kinesis Data Streams를 사용하여 Git 저장소에서 타사 데이터세트에 액세스하고 통합합니다.",
      "D": "Amazon Kinesis Data Streams를 사용하여 Amazon Elastic Container Registry(Amazon ECR)에서 타사 데이터세트에 액세스하고 통합합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Data Exchange — 타사 데이터세트를 쉽게 발견, 구독, 통합하는 마켓플레이스\n▸ \"최소한의 노력\" → Data Exchange는 사전 검증된 데이터, 구독 기반\n▸ API Integration — 데이터 발견부터 통합까지 자동화\n\n【정답 포인트】\n▸ \"타사 데이터세트\" → Data Exchange는 검증된 상용 데이터 소스\n▸ \"최소한의 노력과 시간\" → Data Exchange는 1-click 구독, 즉시 통합\n▸ \"운영 오버헤드 최소\" → 데이터 포맷, 라이선스, 계약 관리 자동화\n\n【오답 체크】\n(B) DataSync는 온프레미스→AWS 데이터 동기화 도구, 타사 마켓플레이스 아님\n(C) Kinesis Data Streams는 실시간 스트리밍, Git은 데이터 저장소 아님 (개발자 도구)\n(D) ECR은 컨테이너 이미지 레지스트리, 데이터세트 통합 도구 아님\n\n【시험 포인트】\n\"타사 데이터세트 + 최소 노력\"은 항상 AWS Data Exchange. 상용 데이터 마켓플레이스로 사전 검증, 즉시 통합 가능. 다른 서비스는 각각 다른 용도의 도구.",
    "en_q": "A media company wants to improve a system that recommends media content to customers based on user behavior and preferences. To improve the recommendation system, the company needs to incorporate insights from third-party datasets into the company's existing analytics platform. The company wants to minimize the effort and time required to incorporate third-party datasets. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use API calls to access and integrate third-party datasets from AWS Data Exchange.",
      "B": "Use API calls to access and integrate third-party datasets from AWS DataSync.",
      "C": "Use Amazon Kinesis Data Streams to access and integrate third-party datasets from a Git repository.",
      "D": "Use Amazon Kinesis Data Streams to access and integrate third-party datasets from Amazon Elastic Container Registry (Amazon ECR)."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/389728-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 299,
    "question": "회사는 고객을 위해 매년 재무제표를 생성하고 Amazon S3 버킷에 저장합니다. 고객은 1주일 후 문서에 거의 접근하지 않습니다. 회사는 제표를 7년 동안 유지해야 합니다. 제표는 고객이 쉽게 접근할 수 있어야 합니다. 어떤 솔루션이 가장 비용 효율적인 방식으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "S3 Lifecycle 규칙을 생성하여 7일 후 객체를 S3 Glacier Deep Archive로 전환합니다. 7년 후 객체를 만료합니다.",
      "B": "새로운 객체가 업로드될 때 S3 Intelligent-Tiering을 사용하도록 S3 버킷을 설정합니다. 7년 후 객체를 만료하도록 설정합니다.",
      "C": "S3 Lifecycle 규칙을 생성하여 7일 후 객체를 S3 Glacier Instant Retrieval로 전환합니다. 7년 후 객체를 만료합니다.",
      "D": "새로운 객체가 업로드될 때 S3 Glacier Instant Retrieval을 사용하도록 S3 버킷을 설정합니다. 7년보다 오래된 객체를 삭제하기 위해 매일 실행되는 AWS Lambda 함수를 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ S3 Glacier Instant Retrieval — 밀리초 단위 검색 (즉시 접근), Glacier 중 최고 성능\n▸ S3 Glacier Deep Archive — 가장 저렴하지만 시간 단위 검색 (접근 느림)\n▸ \"쉽게 접근 가능\" → 밀리초 응답 시간 필수\n▸ \"7년 유지\" → 장기 저장 비용 최소화\n\n【정답 포인트】\n▸ \"1주일 후 거의 접근 안 함\" → 7일 후 저장소 전환 최적\n▸ \"쉽게 접근\" → Glacier Instant Retrieval (즉시 검색, Deep Archive 아님)\n▸ \"비용 효율\" → Instant Retrieval은 Deep Archive보다 비싸지만, 고객 접근성 필요\n▸ \"7년 후 삭제\" → Expiration 규칙으로 자동 관리\n\n【오답 체크】\n(A) Deep Archive는 시간 단위 검색, \"쉽게 접근\" 요구 불만족\n(B) Intelligent-Tiering은 자동 계층화, Lifecycle 명시적 제어 없음 (비용 예측 어려움)\n(D) Lambda 일일 실행은 운영 오버헤드, Lifecycle이 더 효율적\n\n【시험 포인트】\n\"비용 + 즉시 접근 가능\" 조합은 Glacier Instant Retrieval. Deep Archive는 접근 시간이 길어 부적절. Intelligent-Tiering은 자동화이지만 비용 제어 명확하지 않음.",
    "en_q": "A company generates yearly financial statements for customers and stores the statements in an Amazon S3 bucket. Customers rarely access the documents after 1 week. The company must retain the statements for 7 years. The statements must remain readily accessible for customers. Which solution will meet these requirements in the MOST cost-effective way?",
    "en_opts": {
      "A": "Create an S3 Lifecycle rule to transition objects to S3 Glacier Deep Archive after 7 days. Expire the objects after 7 years.",
      "B": "Set the S3 bucket to use S3 Intelligent-Tiering when new objects are uploaded. Set objects to expire after 7 years.",
      "C": "Create an S3 Lifecycle rule to transition objects to S3 Glacier Instant Retrieval after 7 days. Expire the objects after 7 years.",
      "D": "Set the S3 bucket to use S3 Glacier Instant Retrieval when new objects are uploaded. Create an AWS Lambda function that runs daily to delete any objects that are older than 7 years."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401526-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 300,
    "question": "회사는 AWS Glue에서 추출, 변환 및 로드(ETL) 작업을 실행합니다. 작업은 개인 식별 정보(PII) 데이터를 처리하고 로그를 Amazon CloudWatch Logs 로그 그룹에 작성합니다. 데이터 엔지니어는 CloudWatch 로그 그룹에서 PII 데이터를 마스킹해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Glue 보안 구성을 ETL 작업에 연결합니다.",
      "B": "데이터 보호 정책을 구성합니다. CloudWatch 로그 그룹에 정책을 연결합니다.",
      "C": "Amazon Macie 민감한 데이터 발견 작업을 실행합니다.",
      "D": "ETL 작업에서 AWS Glue 민감한 데이터 탐지 API를 호출합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudWatch Logs Data Protection Policy — 로그 그룹의 민감한 데이터 자동 마스킹\n▸ PII Masking — 민감 정보를 \"***\" 또는 대체 값으로 변환\n▸ \"CloudWatch Logs 그룹에서\" → CloudWatch 로그 보호가 필수\n\n【정답 포인트】\n▸ \"CloudWatch 로그 그룹\" → CloudWatch 네이티브 기능으로 마스킹 필요\n▸ \"PII 데이터 마스킹\" → Data Protection Policy가 유일한 솔루션\n▸ \"자동 마스킹\" → 정책 설정 후 자동으로 민감한 데이터 감지 및 마스킹\n\n【오답 체크】\n(A) Glue 보안 구성은 Glue 내 암호화/감사, CloudWatch 마스킹 아님\n(C) Macie는 데이터 발견(탐지), 마스킹 기능 없음\n(D) Glue 민감 데이터 탐지 API는 ETL 내 검출, CloudWatch 로그 마스킹 아님\n\n【시험 포인트】\n\"CloudWatch Logs + PII 마스킹\"은 항상 Data Protection Policy. 로그 그룹 레벨에서 자동으로 민감한 패턴 (이메일, 신용카드, SSN 등) 감지 및 마스킹.",
    "en_q": "A company runs an extract, transform, and load (ETL) job in AWS Glue. The job processes personally identifiable information (PII) data and writes logs to an Amazon CloudWatch Logs log group. A data engineer needs to mask PII data in the CloudWatch logs group. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Attach an AWS Glue security configuration to the ETL job.",
      "B": "Configure a data protection policy. Attach the policy to the CloudWatch log group.",
      "C": "Run an Amazon Macie sensitive data discovery job.",
      "D": "Call AWS Glue sensitive data detection APIs in the ETL job."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401527-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 301,
    "question": "회사는 Amazon EC2 인스턴스에서 실행되는 새로운 비프로덕션 애플리케이션을 생성합니다. 애플리케이션은 Java Database Connectivity(JDBC)를 사용하여 Amazon RDS 데이터베이스 인스턴스와 통신해야 합니다. EC2 인스턴스와 RDS 데이터베이스 인스턴스는 동일한 서브넷에 있습니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "데이터베이스 인스턴스에 할당된 IAM 역할을 수정하여 EC2 인스턴스에서의 연결을 허용합니다.",
      "B": "RDS 파라미터 그룹에서 ec2_authorized_hosts 파라미터를 수정하여 EC2 인스턴스를 포함합니다. 데이터베이스 인스턴스를 다시 시작합니다.",
      "C": "데이터베이스 보안 그룹을 업데이트하여 EC2 인스턴스의 연결을 허용합니다.",
      "D": "Amazon RDS Data API를 활성화하고 JDBC 연결 문자열에 데이터베이스 인스턴스의 Amazon Resource Name(ARN)을 지정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Security Group — RDS 네트워크 접근 제어 (포트, 프로토콜, 소스 제한)\n▸ JDBC Connection — TCP/IP 기반 데이터베이스 연결 (포트 3306 MySQL, 5432 PostgreSQL)\n▸ \"동일한 서브넷\" → 네트워크 라우팅 완료, 보안 그룹만 설정\n\n【정답 포인트】\n▸ \"JDBC 연결\" → 데이터베이스 포트 접근 필요 (기본값 3306/5432)\n▸ \"보안 그룹\" → RDS 인바운드 규칙에서 EC2 보안 그룹/IP 허용\n▸ \"동일 서브넷\" → 네트워크 ACL 문제 없음, 보안 그룹만 해결\n\n【오답 체크】\n(A) IAM 역할은 AWS 서비스 인증 (RDS Proxy, Data API용), JDBC 접속 제어 아님\n(B) ec2_authorized_hosts는 존재하지 않는 파라미터\n(D) RDS Data API는 HTTPS 기반 대안, JDBC 직접 연결 대체 (JDBC 사용 시 불필요)\n\n【시험 포인트】\nRDS 네트워크 접근 = Security Group 인바운드 규칙. JDBC 연결은 TCP 포트 3306/5432이므로 EC2 보안 그룹 또는 IP를 명시적으로 허용.",
    "en_q": "A company creates a new non-production application that runs on an Amazon EC2 instance. The application needs to communicate with an Amazon RDS database instance using Java Database Connectivity (JDBC). The EC2 instances and the RDS database instance are in the same subnet. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Modify the IAM role that is assigned to the database instance to allow connections from the EC2 instances.",
      "B": "Modify the ec2_authorized_hosts parameter in the RDS parameter group to include the EC2 instances. Restart the database instance.",
      "C": "Update the database security group to allow connections from the EC2 instances.",
      "D": "Enable the Amazon RDS Data API and specify the Amazon Resource Name (ARN) of the database instance in the JDBC connection string."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401528-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 302,
    "question": "소매 회사는 전자상거래 플랫폼을 위한 실시간 분석을 구현하고 싶습니다. 회사는 회사의 웹사이트와 모바일 앱에서 클릭스트림 데이터를 수집해야 합니다. 회사는 분석을 위해 데이터를 저장해야 합니다. 어떤 솔루션이 가장 낮은 지속적인 유지 관리로 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon Data Firehose를 사용하여 스트리밍 데이터를 수집합니다. 처리된 데이터를 프로비저닝된 Amazon Redshift 클러스터로 직접 전달합니다.",
      "B": "Amazon EC2 인스턴스에 에이전트를 배포하여 스트리밍 데이터를 수집합니다. AWS CLI를 사용하여 데이터를 정기적으로 Amazon S3 버킷으로 배치 업로드합니다.",
      "C": "Amazon Kinesis Data Streams를 사용하여 스트리밍 데이터를 수집합니다. Amazon Data Firehose를 사용하여 데이터를 Amazon S3 버킷으로 전달합니다.",
      "D": "Amazon Managed Streaming for Apache Kafka(Amazon MSK) 브로커를 사용하여 데이터를 수집합니다. 데이터를 Amazon RDS DB 인스턴스에 저장합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Kinesis Data Streams — 높은 처리량, 실시간 스트리밍 수집\n▸ Data Firehose — 자동 배치 처리, S3 저장, 운영 오버헤드 최소\n▸ \"실시간 분석\" → 스트리밍 수집 필수\n▸ \"가장 낮은 지속적 유지 관리\" → 서버리스/관리형 서비스 조합\n\n【정답 포인트】\n▸ \"클릭스트림 데이터 수집\" → Kinesis Data Streams (고성능 스트리밍)\n▸ \"지속적 유지 관리 최소\" → Data Firehose (완전 관리형, 자동 배치)\n▸ \"분석을 위해 저장\" → S3 (데이터 레이크, 저비용)\n▸ \"조합 최적성\" → Kinesis + Firehose는 완전 자동화, 프로비저닝 불필요\n\n【오답 체크】\n(A) Firehose만으로 Redshift 직접 전달 가능하지만, Kinesis 사용 안 함 (고처리량 처리 부족)\n(B) EC2 에이전트는 높은 유지 관리 (인스턴스 관리, 스케일링 복잡)\n(D) MSK는 관리 오버헤드 높음 (클러스터 관리), RDS는 OLTP 시스템 (분석 부적절)\n\n【시험 포인트】\n\"실시간 스트리밍 수집 + 저비용 저장 + 최소 유지 관리\" = Kinesis Data Streams (수집) + Data Firehose (자동 배치) + S3 (저장)의 완전 서버리스 조합.",
    "en_q": "A retail company wants to implement real-time analytics for an ecommerce platform. The company needs to collect clickstream data from the company's website and mobile apps. The company needs to store the data for analytics. Which solution will meet these requirements with the LEAST ongoing maintenance?",
    "en_opts": {
      "A": "Use Amazon Data Firehose to ingest the streaming data. Deliver the processed data directly to a provisioned Amazon Redshift cluster.",
      "B": "Deploy agents on Amazon EC2 instances to collect the streaming data. Use the AWS CLI to periodically batch upload the data to an Amazon S3 bucket.",
      "C": "Use Amazon Kinesis Data Streams to collect the streaming data. Use Amazon Data Firehose to deliver the data to an Amazon S3 bucket.",
      "D": "Use an Amazon Managed Streaming for Apache Kafka (Amazon MSK) broker to collect the data. Store the data in an Amazon RDS DB instance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401529-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 303,
    "question": "회사는 AWS Glue ETL 파이프라인을 사용하여 데이터를 처리합니다. 회사는 Amazon Athena를 사용하여 Amazon S3 버킷의 데이터를 분석합니다. 배송 일정을 더 잘 이해하기 위해 회사는 주문 데이터 외에 배송 및 배달 날짜를 수집하고 저장하기로 결정합니다. 회사는 배송 날짜가 주문 날짜보다 크고 배달 날짜가 배송 날짜보다 큰지 확인하는 데이터 품질 검사를 추가합니다. 품질 검사에 실패한 주문은 두 번째 S3 버킷에 저장되어야 합니다. 어떤 솔루션이 가장 비용 효율적으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Glue DataBrew DATEDIFF 함수를 사용하여 두 개의 추가 열을 생성합니다. 새로운 열을 확인합니다.",
      "B": "Athena를 사용하여 세 개의 날짜 열을 모두 쿼리하고 열을 비교합니다.",
      "C": "AWS Glue Data Quality를 사용하여 세 개의 날짜 열을 사용하는 사용자 정의 규칙을 생성합니다.",
      "D": "AWS Glue Crawler를 사용하여 AWS Glue Data Catalog를 채웁니다. 세 개의 날짜 열을 사용하여 필터를 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Glue Data Quality — ETL 내장 품질 검사, 사용자 정의 규칙 지원\n▸ Custom Rule — 복잡한 논리 (시간 비교) 구현 가능\n▸ \"품질 검사에 실패한 주문\" → 검사 결과에 따라 분기 처리\n\n【정답 포인트】\n▸ \"ETL 파이프라인\" → Glue 내 통합된 품질 검사가 최적 (비용, 성능)\n▸ \"세 날짜 비교 로직\" → Glue Data Quality 사용자 정의 규칙으로 구현\n▸ \"실패한 주문 분리\" → Glue Data Quality는 실패 레코드 자동 분리 기능\n▸ \"비용 효율\" → DataBrew나 Athena보다 ETL 내 통합이 저비용\n\n【오답 체크】\n(A) DataBrew는 프로파일링 도구, ETL 분기 처리(실패 레코드 분리) 불가\n(B) Athena는 조회 도구, ETL 레코드 분기 처리 불가능, 추가 비용 발생\n(D) Glue Crawler는 메타데이터 수집, 데이터 검증 및 분기 처리 아님\n\n【시험 포인트】\n\"ETL 내 복잡한 품질 검사 + 조건부 분기\"는 Glue Data Quality가 최적. 사용자 정의 규칙으로 날짜 비교 가능하고, 실패 레코드를 자동으로 별도 경로로 라우팅.",
    "en_q": "A company uses AWS Glue ETL pipelines to process data. The company uses Amazon Athena to analyze data in an Amazon S3 bucket. To better understand shipping timelines, the company decides to collect and store shipping and delivery dates in addition to order data. The company adds a data quality check to ensure that shipping date is greater than order date and that delivery date is greater than shipping date. Orders that fail the quality check must be stored in a second S3 bucket. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Use the AWS Glue DataBrew DATEDIFF function to create two additional columns. Check the new columns.",
      "B": "Use Athena to query all three date columns, and compare the columns.",
      "C": "Use AWS Glue Data Quality to create a custom rule that uses the three date columns.",
      "D": "Use an AWS Glue crawler to populate an AWS Glue Data Catalog. Use the three date columns to create a filter."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401530-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 304,
    "question": "데이터 엔지니어는 지속적인 수집이 필요한 애플리케이션을 위한 로그 테이블을 설계하고 있습니다. 애플리케이션은 다른 애플리케이션에서 특정 레코드에 대한 신뢰할 수 있는 API 기반 접근을 제공해야 합니다. 애플리케이션은 초당 4,000개 이상의 동시 쓰기 작업과 초당 6,500개의 읽기 작업을 처리해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "KEY 분산 스타일을 사용하여 Amazon Redshift 테이블을 생성합니다. Amazon Redshift Data API를 사용하여 모든 읽기 및 쓰기 작업을 수행합니다.",
      "B": "Amazon S3 Standard 버킷에 로그 파일을 저장합니다. AWS Glue Data Catalog에 스키마를 등록합니다. AWS Glue 스키마를 가리키는 외부 Redshift 테이블을 생성합니다. 테이블을 사용하여 Amazon Redshift Spectrum 읽기 작업을 수행합니다.",
      "C": "EVEN 분산 스타일을 사용하여 Amazon Redshift 테이블을 생성합니다. Amazon Redshift Java Database Connectivity(JDBC) 커넥터를 사용하여 데이터베이스 연결을 설정합니다. 데이터베이스 연결을 사용하여 모든 읽기 및 쓰기 작업을 수행합니다.",
      "D": "애플리케이션의 용량 요구사항을 충족하도록 프로비저닝된 용량을 갖춘 Amazon DynamoDB 테이블을 생성합니다. DynamoDB API를 사용하여 DynamoDB 테이블을 사용하여 모든 읽기 및 쓰기 작업을 수행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ DynamoDB — 초당 수천 건의 동시 요청 처리 (4K write, 6.5K read)\n▸ Provisioned Capacity — 처리량 기반 용량 관리\n▸ DynamoDB API — REST 기반 신뢰할 수 있는 접근\n▸ \"API 기반 접근\" → HTTP REST 지원 필수\n\n【정답 포인트】\n▸ \"초당 4,000+ 쓰기\" → Redshift는 OLTP 부적절, DynamoDB 필수\n▸ \"초당 6,500 읽기\" → DynamoDB는 이 수준의 처리량 네이티브 지원\n▸ \"신뢰할 수 있는 API\" → DynamoDB API는 ACID 준수\n▸ \"지속적인 수집\" → 실시간 쓰기에 최적화\n\n【오답 체크】\n(A) Redshift는 분석 데이터웨어하우스, 초당 4K 쓰기 부하에 부적절\n(B) Spectrum은 읽기만 지원, 쓰기 불가능\n(C) Redshift JDBC는 OLTP 워크로드 미지원, 성능 저하\n\n【시험 포인트】\n\"초당 4K+ 쓰기 + 6.5K 읽기 + API 기반\"은 항상 DynamoDB. Redshift는 분석(OLAP) 전용, 트랜잭션 워크로드는 DynamoDB.",
    "en_q": "A data engineer is designing a log table for an application that requires continuous ingestion. The application must provide dependable API-based access to specific records from other applications. The application must handle more than 4,000 concurrent write operations and 6,500 read operations every second. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an Amazon Redshift table with the KEY distribution style. Use the Amazon Redshift Data API to perform all read and write operations.",
      "B": "Store the log files in an Amazon S3 Standard bucket. Register the schema in AWS Glue Data Catalog. Create an external Redshift table that points to the AWS Glue schema. Use the table to perform Amazon Redshift Spectrum read operations.",
      "C": "Create an Amazon Redshift table with the EVEN distribution style. Use the Amazon Redshift Java Database Connectivity (JDBC) connector to establish a database connection. Use the database connection to perform all read and write operations.",
      "D": "Create an Amazon DynamoDB table that has provisioned capacity to meet the application's capacity needs. Use the DynamoDB table to perform all read and write operations by using DynamoDB APIs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401531-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 305,
    "question": "회사는 대량의 IoT 센서 데이터를 저장하고 분석해야 합니다. 회사는 데이터를 무기한 유지해야 합니다. 회사는 Amazon Redshift 클러스터에서 데이터를 분석합니다. 어떤 솔루션이 가장 비용 효율적으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon S3 버킷에 JSON 형식으로 데이터를 저장합니다. Redshift 클러스터에서 S3 버킷으로부터 자동 복사 데이터 수집을 구성합니다.",
      "B": "Amazon S3 버킷에 Apache Parquet 형식으로 데이터를 저장합니다. Amazon Redshift Spectrum을 통한 쿼리 접근을 구성합니다.",
      "C": "Amazon S3 버킷에 JSON 형식으로 데이터를 저장합니다. Amazon Redshift Spectrum을 통한 쿼리 접근을 구성합니다.",
      "D": "Amazon S3 버킷에 Apache Parquet 형식으로 데이터를 저장합니다. Redshift 클러스터에서 S3 버킷으로부터 자동 복사 데이터 수집을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Redshift Spectrum — Redshift에서 S3의 외부 데이터 쿼리 (복사 불필요)\n▸ Apache Parquet — 열 지향 형식, 압축률 높음 (저장소 비용 최소)\n▸ Auto-copy — Redshift 클러스터에 데이터 로드 (저장소 비용 증가)\n▸ \"무기한 유지\" → 저장소 비용 최소화 중요\n\n【정답 포인트】\n▸ \"무기한 유지\" → S3 저장이 가장 저렴\n▸ \"가장 비용 효율\" → Spectrum (Redshift 로드 불필요) + Parquet (압축)\n▸ \"분석\" → Spectrum으로 S3의 데이터 직접 쿼리 가능\n▸ \"IoT 센서 데이터\" → 시계열 데이터, Parquet 압축 효과 높음\n\n【오답 체크】\n(A) JSON은 비효율적 형식, Spectrum 쿼리는 가능하나 비용 높음\n(C) JSON + Auto-copy는 Redshift 저장소 비용 급증 (무기한 유지 불가)\n(D) Parquet + Auto-copy도 Redshift 저장소 비용 높음\n\n【시험 포인트】\n\"무기한 저장 + 비용 최소\"는 S3 + Spectrum. Auto-copy는 Redshift 내 저장이라 비용 증가. Parquet은 JSON보다 압축 효율 5~10배 우수. Spectrum만으로 충분한 쿼리 성능 제공.",
    "en_q": "A company needs to store and analyze a large amount of IoT sensor data. The company needs to retain the data indefinitely. The company analyzes the data in an Amazon Redshift cluster. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Store the data in an Amazon S3 bucket in JSON format. Configure auto-copy data ingestion from the S3 bucket to the Redshift cluster.",
      "B": "Store the data in an Amazon S3 bucket in Apache Parquet format. Configure query access through Amazon Redshift Spectrum.",
      "C": "Store the data in an Amazon S3 bucket in JSON format. Configure query access through Amazon Redshift Spectrum.",
      "D": "Store the data in an Amazon S3 bucket in Apache Parquet format. Configure auto-copy data ingestion from the S3 bucket to the Redshift cluster."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401532-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 306,
    "question": "회사는 Amazon S3 기반 데이터 레이크를 가지고 있습니다. 데이터 레이크에는 여러 부서에 속한 데이터세트가 포함되어 있습니다. 데이터 레이크는 매일 수백만 개의 고객 레코드를 수집합니다. 데이터 엔지니어는 각 부서가 각 부서에 필요한 회사 데이터세트의 부분집합에만 액세스할 수 있도록 하는 액세스 및 저장소 솔루션을 설계해야 합니다. 솔루션은 최소 권한 원칙을 따라야 합니다. 어떤 솔루션이 가장 낮은 운영 비용으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "각 부서에 대한 IAM 정책 및 IAM 역할을 정의합니다. 각 팀이 액세스할 수 있는 데이터 레이크의 S3 액세스 경로를 지정합니다.",
      "B": "Amazon Redshift 및 Amazon Redshift Spectrum을 데이터 레이크의 기본 진입점으로 설정합니다. Amazon Redshift이 가정할 수 있는 IAM 역할을 정의합니다. IAM 역할을 구성하여 Amazon S3의 데이터에 액세스할 수 있도록 합니다.",
      "C": "AWS Lake Formation을 설정합니다. AWS Glue Data Catalog 리소스에 LF-Tags를 할당합니다. Lake Formation 태그 기반 액세스 제어(LF-TBAC)를 활성화합니다.",
      "D": "aws_s3 확장이 설치된 Amazon RDS for PostgreSQL 데이터베이스를 배포합니다. AWS Step Functions 이벤트를 구성하여 AWS Lambda 함수를 호출하고 데이터 레이크를 데이터베이스와 동기화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Lake Formation — 데이터 레이크의 중앙화된 액세스 제어\n▸ LF-Tags — 데이터 기반 세밀한 권한 관리\n▸ LF-TBAC (Tag-Based Access Control) — 태그 기반 접근 제어\n▸ \"최소 권한 원칙\" → 부서별로 필요한 데이터만 액세스\n\n【정답 포인트】\n▸ \"데이터 레이크\" → Lake Formation이 표준 솔루션\n▸ \"부서별 데이터 부분집합\" → LF-Tags로 데이터 분류 및 제어\n▸ \"최소 권한\" → LF-TBAC는 정책 기반 보다 세밀한 제어 가능\n▸ \"가장 낮은 운영 비용\" → 중앙화된 관리로 정책 유지보수 간소화\n▸ \"수백만 레코드 수집\" → Lake Formation은 Glue Data Catalog와 통합, 대규모 메타데이터 관리 최적화\n\n【오답 체크】\n(A) IAM 정책 경로 기반은 부서 추가/변경 시마다 정책 수정 필요 (운영 비용 높음)\n(B) Redshift Spectrum은 Athena보다 비용 높음, 중앙화 권한 관리 어려움\n(D) RDS 동기화는 복잡, 데이터 레이크 관리 솔루션 아님\n\n【시험 포인트】\n\"데이터 레이크 + 부서별 액세스 + 최소 권한\"은 항상 Lake Formation + LF-Tags. 정책 기반(IAM)보다 데이터 태그 기반 제어가 확장성과 유지보수성 우수.",
    "en_q": "A company has an Amazon S3 based data lake. The data lake contains datasets that belong to multiple departments. The data lake ingests millions of customer records each day. A data engineer needs to design an access and storage solution that allows departments to access only the subset of the company's dataset that each department requires. The solution must follow the principle of least privilege. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Define IAM policies and IAM roles for each department. Specify the S3 access paths from the data lake that each team can access.",
      "B": "Set up Amazon Redshift and Amazon Redshift Spectrum as the primary entry points for the data lake. Define an IAM role that Amazon Redshift can assume. Configure the IAM role to grant access to the data that is in Amazon S3.",
      "C": "Set up AWS Lake Formation. Assign LF-Tags to AWS Glue Data Catalog resources. Enable Lake Formation tag-based access control (LF-TBAC).",
      "D": "Deploy an Amazon RDS for PostgreSQL database that has the aws_s3 extension installed. Configure AWS Step Functions events to invoke an AWS Lambda function to sync the data lake with the database."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401533-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 307,
    "question": "의료 회사는 온프레미스 MySQL 데이터베이스에 환자 기록을 저장합니다. 회사는 MySQL 데이터베이스에 액세스하는 애플리케이션을 만듭니다. 회사는 환자 기록을 보호하기 위해 보안 프로토콜을 적용해야 합니다. 회사는 현재 미인증 액세스의 위험을 최소화하기 위해 30일마다 데이터베이스 자격증명을 로테이션합니다. 회사는 자격증명 로테이션마다 애플리케이션 코드를 수정하지 않아도 되는 솔루션이 필요합니다. 어떤 솔루션이 가장 낮은 운영 오버헤드로 이 요구사항을 충족할까요?",
    "options": {
      "A": "데이터베이스에 대한 IAM 역할 액세스 권한을 할당합니다. 애플리케이션을 구성하여 IAM 역할을 통해 임시 자격증명을 얻습니다.",
      "B": "AWS Key Management Service(AWS KMS)를 사용하여 암호화 키를 생성합니다. 자동 키 로테이션을 구성합니다. Amazon DynamoDB 테이블에 암호화된 자격증명을 저장합니다.",
      "C": "AWS Secrets Manager를 사용하여 자격증명을 자동으로 로테이션합니다. 애플리케이션이 API 호출을 사용하여 자격증명을 검색하도록 허용합니다.",
      "D": "암호화된 Amazon S3 버킷에 자격증명을 저장합니다. S3 Lifecycle 정책을 사용하여 매달 자격증명을 로테이션합니다. 버킷 정책을 사용하여 액세스를 제어합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Secrets Manager — 데이터베이스 자격증명의 자동 로테이션 및 관리\n▸ Automatic Rotation — 지정된 주기마다 자격증명 자동 업데이트\n▸ \"코드 수정 없음\" → 애플리케이션은 API 호출로 최신 자격증명 획득\n\n【정답 포인트】\n▸ \"자동 로테이션\" → Secrets Manager 전용 기능\n▸ \"코드 수정 없음\" → API 호출로 동적으로 자격증명 획득\n▸ \"MySQL 온프레미스\" → IAM 역할 불가능 (AWS 서비스 아님)\n▸ \"30일 로테이션\" → Secrets Manager는 1-90일 주기 설정 가능\n\n【오답 체크】\n(A) IAM 역할은 온프레미스 MySQL 지원 불가 (AWS 리소스만)\n(B) KMS 키 로테이션은 암호화 키 관리, 자격증명 로테이션 아님\n(D) S3 Lifecycle은 객체 만료/전환만 지원, 자격증명 로테이션 기능 없음\n\n【시험 포인트】\n\"온프레미스 데이터베이스 + 자동 자격증명 로테이션 + 코드 수정 없음\"은 항상 Secrets Manager. API 호출로 최신 자격증명 동적 획득, 자동 로테이션 처리.",
    "en_q": "A healthcare company stores patient records in an on-premises MySQL database. The company creates an application to access the MySQL database. The company must enforce security protocols to protect the patient records. The company currently rotates database credentials every 30 days to minimize the risk of unauthorized access. The company wants a solution that does require the company to modify the application code for each credential rotation. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Assign an IAM role access permissions to the database. Configure the application to obtain temporary credentials through the IAM role.",
      "B": "Use AWS Key Management Service (AWS KMS) to generate encryption keys. Configure automatic key rotation. Store the encrypted credentials in an Amazon DynamoDB table.",
      "C": "Use AWS Secrets Manager to automatically rotate credentials. Allow the application to retrieve the credentials by using API calls.",
      "D": "Store credentials in an encrypted Amazon S3 bucket. Rotate the credentials every month by using an S3 Lifecycle policy. Use bucket policies to control access."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401534-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 308,
    "question": "소매 회사는 여러 Amazon Aurora MySQL 데이터베이스에서 데이터 업데이트를 캡처하는 솔루션을 구현해야 합니다. 회사는 거의 실시간으로 업데이트를 분석에 활용할 수 있도록 해야 합니다. 솔루션은 서버리스이어야 하고 최소한의 유지보수가 필요해야 합니다. 어떤 솔루션이 가장 낮은 운영 오버헤드로 이 요구사항을 충족할까요?",
    "options": {
      "A": "각 데이터베이스에 대해 스키마 변환을 수행하는 AWS Database Migration Service(AWS DMS) 작업을 설정합니다. Amazon Redshift Serverless에 변경사항을 로드합니다.",
      "B": "Debezium 커넥터와 함께 Amazon Managed Streaming for Apache Kafka(Amazon MSK) Connect를 사용하여 Amazon Redshift Serverless에 데이터를 로드합니다.",
      "C": "AWS Database Migration Service(AWS DMS)를 사용하여 이진 로그 복제를 Amazon Kinesis Data Streams로 설정합니다. 스키마 변환 후 Amazon Redshift Serverless에 데이터를 로드합니다.",
      "D": "각 데이터베이스에 대해 Aurora zero-ETL 통합을 Amazon Redshift Serverless로 사용하여 Aurora MySQL 변경사항을 Amazon Redshift Serverless에 로드합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Aurora zero-ETL — 자동 실시간 데이터 동기화 (추가 도구/변환 불필요)\n▸ \"여러 데이터베이스\" → 각 데이터베이스마다 zero-ETL 설정\n▸ \"거의 실시간\" → zero-ETL은 밀리초 단위 동기화\n▸ \"서버리스\" → Redshift Serverless + Aurora zero-ETL 조합\n\n【정답 포인트】\n▸ \"서버리스 + 최소 유지보수\" → Aurora zero-ETL이 가장 간단\n▸ \"여러 Aurora MySQL\" → 각 데이터베이스마다 zero-ETL 구성\n▸ \"거의 실시간\" → zero-ETL은 바이너리 로그 자동 처리\n▸ \"운영 오버헤드 최소\" → 클러스터/커넥터 관리 불필요\n\n【오답 체크】\n(A) DMS는 마이그레이션 도구, 지속적 동기화에 오버헤드 (스키마 변환 복잡)\n(B) MSK Connect는 Kafka 운영 필요, zero-ETL보다 운영 비용 높음\n(C) DMS 바이너리 로그 + Kinesis도 운영 복잡도 증가\n\n【시험 포인트】\n\"Aurora to Redshift + 실시간 + 최소 유지 관리\" = Aurora zero-ETL. 2023년 이후 Aurora/Redshift 통합 기능으로, DMS/Kinesis보다 훨씬 간단하고 운영 비용 최소.",
    "en_q": "A retail company needs to implement a solution to capture data updates from multiple Amazon Aurora MySQL databases. The company needs to make the updates available for analytics in near real time. The solution must be serverless and require minimal maintenance. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Set up AWS Database Migration Service (AWS DMS) tasks that perform schema conversions for each database. Load the changes into Amazon Redshift Serverless.",
      "B": "Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) Connect with Debezium connectors to load data into Amazon Redshift Serverless.",
      "C": "Use AWS Database Migration Service (AWS DMS) to set up binary log replication to Amazon Kinesis Data Streams. Load the data into Amazon Redshift Serverless after schema conversion.",
      "D": "Use Aurora zero-ETL integrations with Amazon Redshift Serverless for each database to load Aurora MySQL changes in Amazon Redshift Serverless."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401535-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 309,
    "question": "데이터 엔지니어가 Amazon Athena에서 두 테이블을 조인하는 쿼리를 작성하고 있습니다. 데이터 엔지니어는 쿼리 성능을 최적화하기 위해 테이블의 올바른 조인 순서를 선택해야 합니다. 이 요구사항을 충족하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "조인의 왼쪽에 작은 테이블을 지정하고 오른쪽에 큰 테이블을 지정합니다.",
      "B": "조인의 왼쪽에 큰 테이블을 지정하고 오른쪽에 작은 테이블을 지정합니다.",
      "C": "조인을 수행하기 전에 AWS Glue를 사용하여 테이블을 전처리합니다.",
      "D": "테이블 통계를 사용하여 조인 순서를 자동으로 결정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ A번 — 정답 선택지\n▸ 비용 최적화 / 운영 효율성 / 기술 적합성\n▸ 요구사항 분석: 핵심 키워드 매핑\n\n【정답 포인트】\n▸ \"A\"번이 정답인 이유:\n  - 모든 요구사항을 가장 효율적으로 충족\n  - 비용과 운영 오버헤드 최소화\n  - 확장성과 유지보수성 우수\n  - 질문의 핵심 키워드와 정확히 매핑\n\n【오답 체크】\n(B) 조인의 왼쪽에 큰 테이블을 지정하고 오른쪽에 작은 테이블을 지정합니다. — 운영 복잡도 증가\n(C) 조인을 수행하기 전에 AWS Glue를 사용하여 테이블을 전처리합니다. — 요구사항 일부만 충족\n(D) 테이블 통계를 사용하여 조인 순서를 자동으로 결정합니다. — 추가 오버헤드 유발\n\n【시험 포인트】\n▸ AWS DEA-C01 시험 패턴: 단순 기능 비교보다 실무적 최적성 평가\n▸ 비용, 운영 오버헤드, 확장성, 보안을 종합적으로 고려\n▸ 유사 서비스 간 차이점 정확히 이해 필수\n▸ \"A\" 조합이 제시된 조건에서 유일한 최적 솔루션",
    "en_q": "A data engineer is writing a query to join two tables in Amazon Athena. The data engineer needs to choose the correct join order for the tables to optimize query performance. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Specify the smaller table on the left side of the join and the larger table on the right side of the join.",
      "B": "Specify the larger table on the left side of the join and the smaller table on the right side of the join.",
      "C": "Use AWS Glue to pre-process the tables before performing the join.",
      "D": "Use table statistics to automatically determine the join order."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401536-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 310,
    "question": "회사가 Amazon Redshift 데이터 웨어하우스의 30개 테이블에서 보고서를 생성합니다. 데이터 원본은 100개 테이블을 포함하는 Amazon Aurora MySQL 운영 데이터베이스입니다. 현재 회사는 매시간 Aurora에서 Amazon Redshift로 모든 데이터를 새로고침하므로 보고서 생성에 지연이 발생합니다. 이 요구사항을 충족하면서 운영 오버헤드를 최소화하는 단계의 조합은 무엇입니까? (2개를 선택하세요.)",
    "options": {
      "A": "AWS Database Migration Service(AWS DMS)를 사용하여 복제 작업을 생성합니다. 필요한 테이블만 선택합니다.",
      "B": "Amazon Redshift에서 통합을 사용하는 데이터베이스를 생성합니다.",
      "C": "Amazon Aurora에서 제로-ETL 통합을 생성합니다. 필요한 테이블만 선택합니다.",
      "D": "Amazon Redshift의 쿼리 편집기 v2를 사용하여 Aurora의 데이터에 액세스합니다.",
      "E": "AWS Glue 작업을 생성하여 각 필요한 테이블을 전송합니다. AWS Glue 워크플로우를 실행하여 5분마다 작업을 시작합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ BC번 — 정답 선택지\n▸ 비용 최적화 / 운영 효율성 / 기술 적합성\n▸ 요구사항 분석: 핵심 키워드 매핑\n\n【정답 포인트】\n▸ \"BC\"번이 정답인 이유:\n  - 모든 요구사항을 가장 효율적으로 충족\n  - 비용과 운영 오버헤드 최소화\n  - 확장성과 유지보수성 우수\n  - 질문의 핵심 키워드와 정확히 매핑\n\n【오답 체크】\n(A) AWS Database Migration Service(AWS DMS)를 사용하여 복제 작... — 비용 증가 또는 기능 제약\n(D) Amazon Redshift의 쿼리 편집기 v2를 사용하여 Aurora의 데이터에 액세스합... — 추가 오버헤드 유발\n(E) AWS Glue 작업을 생성하여 각 필요한 테이블을 전송합니다. AWS Glue 워크플로우... — 최적성 부족\n\n【시험 포인트】\n▸ AWS DEA-C01 시험 패턴: 단순 기능 비교보다 실무적 최적성 평가\n▸ 비용, 운영 오버헤드, 확장성, 보안을 종합적으로 고려\n▸ 유사 서비스 간 차이점 정확히 이해 필수\n▸ \"BC\" 조합이 제시된 조건에서 유일한 최적 솔루션",
    "en_q": "A company generates reports from 30 tables in an Amazon Redshift data warehouse. The data source is an operational Amazon Aurora MySQL database that contains 100 tables. Currently, the company refreshes all data from Aurora to Amazon Redshift every hour, which causes delays in report generation. Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)",
    "en_opts": {
      "A": "Use AWS Database Migration Service (AWS DMS) to create a replication task. Select only the required tables.",
      "B": "Create a database in Amazon Redshift that uses the integration.",
      "C": "Create a zero-ETL integration in Amazon Aurora. Select only the required tables.",
      "D": "Use query editor v2 in Amazon Redshift to access the data in Aurora.",
      "E": "Create an AWS Glue job to transfer each required table. Run an AWS Glue workflow to initiate the jobs every 5 minutes."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401537-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 311,
    "question": "데이터 엔지니어는 여러 데이터베이스에서 새로운 데이터를 확인하고 발견한 데이터를 처리하는 완전 자동화 솔루션이 필요합니다. 솔루션은 매시간 실행되어야 합니다. 솔루션은 Amazon RDS, Amazon DynamoDB 및 Amazon OpenSearch Service와 호환되어야 합니다. 솔루션은 한 번에 최대 10MB의 데이터를 처리할 수 있어야 합니다. 솔루션은 비용과 운영 오버헤드에 최적화되어야 합니다. 솔루션은 강력한 오류 처리 기능을 가져야 합니다. 이 요구사항을 충족하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "Amazon EventBridge를 사용하여 매시간 AWS Step Functions를 호출하고 AWS Lambda 함수를 배포하여 데이터를 확인합니다. Step Functions 단계를 구성하여 Lambda 함수가 발견한 데이터를 처리합니다. 각 상태에서 오류 처리를 구현합니다.",
      "B": "Amazon EventBridge를 사용하여 매시간 AWS Lambda 함수를 호출하여 데이터를 확인합니다. 함수가 새 데이터를 발견할 때 Amazon Simple Queue Service(Amazon SQS) 큐에 메시지를 보내도록 함수를 구성합니다. 두 번째 Lambda 함수를 사용하여 큐를 읽고 처리를 수행합니다.",
      "C": "Amazon EMR에서 실행할 Apache Spark 애플리케이션을 구성합니다. 애플리케이션에서 오류 처리를 구현합니다. Amazon EventBridge를 사용하여 매시간 애플리케이션을 호출합니다.",
      "D": "Amazon Managed Workflows for Apache Airflow(Amazon MWAA)를 사용하여 매시간 데이터를 확인하는 DAG(방향성 비순환 그래프)를 실행하는 워크플로우를 생성합니다. 식별된 데이터를 처리하도록 DAG를 구성합니다. Python 연산자에서 오류 처리를 구현합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ A번 — 정답 선택지\n▸ 비용 최적화 / 운영 효율성 / 기술 적합성\n▸ 요구사항 분석: 핵심 키워드 매핑\n\n【정답 포인트】\n▸ \"A\"번이 정답인 이유:\n  - 모든 요구사항을 가장 효율적으로 충족\n  - 비용과 운영 오버헤드 최소화\n  - 확장성과 유지보수성 우수\n  - 질문의 핵심 키워드와 정확히 매핑\n\n【오답 체크】\n(B) Amazon EventBridge를 사용하여 매시간 AWS Lambda 함수를 호출하여 데... — 운영 복잡도 증가\n(C) Amazon EMR에서 실행할 Apache Spark 애플리케이션을 구성합니다. 애플리케이... — 요구사항 일부만 충족\n(D) Amazon Managed Workflows for Apache Airflow(Amazon... — 추가 오버헤드 유발\n\n【시험 포인트】\n▸ AWS DEA-C01 시험 패턴: 단순 기능 비교보다 실무적 최적성 평가\n▸ 비용, 운영 오버헤드, 확장성, 보안을 종합적으로 고려\n▸ 유사 서비스 간 차이점 정확히 이해 필수\n▸ \"A\" 조합이 제시된 조건에서 유일한 최적 솔루션",
    "en_q": "A data engineer needs a fully automated solution to check for new data in multiple databases and process data that the solution finds. The solution must run every hour. The solution must be compatible with Amazon RDS, Amazon DynamoDB, and Amazon OpenSearch Service. The solution must be able to process up to 10 MB of data at one time. The solution must be optimized for costs and operational overhead. The solution must have robust error handling capabilities. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon EventBridge to invoke AWS Step Functions every hour to deploy an AWS Lambda function to check for data. Configure Step Functions steps to process data that the Lambda function finds. Implement error handling in each state.",
      "B": "Use Amazon EventBridge to invoke an AWS Lambda function every hour to check for data. Configure the function to send a message to an Amazon Simple Queue Service (Amazon SQS) queue when the function finds new data. Use a second Lambda function to read the queue and perform the processing.",
      "C": "Configure an Apache Spark application to run on Amazon EMR to check for data. Implement error handling in the application. Use Amazon EventBridge to invoke the application every hour.",
      "D": "Use Amazon Managed Workflows for Apache Airflow (Amazon MWAA) to create a workflow that runs a directed acyclic graph (DAG) every hour to check for data. Configure the DAG to process identified data. Implement error handling in a Python operator."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401538-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 312,
    "question": "회사가 Amazon Redshift 클러스터를 사용하여 판매자 판매 데이터를 포함한 데이터를 관리합니다. 회사는 판매자 데이터의 사본을 Amazon S3 버킷에 저장하고자 합니다. 데이터 엔지니어가 AWS Glue 작업을 설정하여 데이터를 스케줄에 따라 S3 버킷에 업로드합니다. 데이터 엔지니어가 Amazon Redshift와 Amazon S3 사이의 비공개 트래픽을 허용하도록 네트워크 연결을 설정했습니다. 이 요구사항을 충족하기 위해 필요한 다음 단계는 무엇입니까?",
    "options": {
      "A": "S3 버킷에 쓰기 권한이 있는 IAM 역할을 생성합니다. IAM 역할을 Amazon Redshift 클러스터와 연결합니다.",
      "B": "S3 버킷을 AWS Glue Data Catalog에 추가합니다. Amazon Redshift Spectrum이 Data Catalog에 액세스하도록 구성합니다.",
      "C": "Amazon Redshift 데이터 공유 기능을 활성화합니다. S3 버킷을 데이터 공유의 대상 버킷으로 설정합니다.",
      "D": "Amazon Redshift의 로그인 자격증명을 AWS Secrets Manager에 저장합니다. Glue 작업 구성에 비밀 참조를 추가합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\nAWS Glue, IAM 역할, Amazon Redshift, Amazon S3, 권한 관리\n\n【정답 포인트】\nAWS Glue 작업에서 Redshift 데이터를 S3로 전달하려면 S3에 대한 쓰기 권한(s3:PutObject, s3:GetObject)이 필수입니다. IAM 역할을 생성하여 이러한 권한을 명시하고, 이 역할을 Redshift 클러스터에 연결하는 것이 핵심 단계입니다. 네트워크 연결이 이미 구성되었으므로, 이제 필요한 것은 인증 및 권한 설정입니다.\n\n【오답 체크】\nB의 Redshift Spectrum은 S3 데이터를 읽기 위한 외부 테이블 기능이며, 데이터 쓰기와 무관합니다. C의 데이터 공유 기능은 Redshift 클러스터 간의 데이터 공유 메커니즘으로, S3 업로드 요구사항과 맞지 않습니다. D의 Secrets Manager는 자격증명 저장소일 뿐, 근본적인 S3 쓰기 권한 문제를 해결하지 못합니다.\n\n【시험 포인트】\n데이터 파이프라인에서 IAM 역할과 권한은 보안과 기능성의 기본입니다. 시험에서는 특정 서비스 간 데이터 이동 시 필요한 권한 설정을 묻는 문제가 빈번하게 출제됩니다. Redshift와 S3의 통합에서는 항상 IAM 역할과 버킷 정책의 조합을 고려해야 합니다.",
    "en_q": "A company uses an Amazon Redshift cluster to manage data, including vendor sales data. The company wants to store a copy of the vendor data in an Amazon S3 bucket. A data engineer sets up an AWS Glue job to upload the data to the S3 bucket data on a schedule. The data engineer set up a network connection to allow private traffic between Amazon Redshift and Amazon S3. What is the next step required to meet this requirement?",
    "en_opts": {
      "A": "Create an IAM role that has permission to write to the S3 bucket. Associate the IAM role with the Amazon Redshift cluster.",
      "B": "Add the S3 bucket to an AWS Glue Data Catalog. Configure Amazon Redshift Spectrum to access the Data Catalog.",
      "C": "Enable the Amazon Redshift data sharing feature. Set the S3 bucket as a target bucket for data sharing.",
      "D": "Store login credentials for Amazon Redshift in AWS Secrets Manager. Add a reference to the secret to the Glue job configuration."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401539-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 313,
    "question": "회사가 Amazon S3 버킷에 Apache Parquet 파일로 100MB 데이터세트를 저장합니다. 데이터 엔지니어는 데이터 준비 단계를 수행하기 전에 데이터를 프로파일링해야 합니다. 이 요구사항을 운영상 가장 효율적인 방식으로 충족하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "AWS Glue DataBrew에서 데이터세트에 대한 프로파일 작업을 생성합니다. 프로파일 작업 결과를 검토합니다.",
      "B": "데이터를 Amazon Managed Service for Apache Flink로 스트리밍합니다. SQL 쿼리를 위해 Apache Flink 대시보드를 사용합니다.",
      "C": "데이터를 Amazon Redshift Spectrum에 수집합니다. SQL 쿼리를 사용하여 데이터를 프로파일링합니다.",
      "D": "데이터를 Amazon QuickSight 데이터세트로 로드합니다. 질문으로 데이터를 프로파일링하기 위해 주제를 작성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n데이터 프로파일링, AWS Glue DataBrew, 데이터 품질 분석, 자동화\n\n【정답 포인트】\n데이터 프로파일링은 데이터 품질 검증 단계의 필수 과정으로, 통계 분석, 중복값 감지, 누락값 확인, 데이터 패턴 분석을 포함합니다. AWS Glue DataBrew는 이 목적으로 특화된 관리형 서비스로, 100MB 규모 데이터세트에 대해 최소한의 구성으로 자동으로 프로파일링 보고서를 생성합니다. 클릭 몇 번으로 데이터 품질 상태를 파악할 수 있습니다.\n\n【오답 체크】\nB의 Apache Flink는 대용량 스트리밍 데이터 처리 엔진으로, 정적 데이터 프로파일링에는 오버엔지니어링입니다. C의 Redshift Spectrum은 외부 S3 테이블을 쿼리하는 도구이며, 자동화된 프로파일링 기능이 부족합니다. D의 QuickSight는 BI 및 시각화 도구로, 데이터 프로파일링 자동화 기능이 없습니다.\n\n【시험 포인트】\nAWS 서비스 선택 문제에서 각 도구의 주요 용도를 파악하는 것이 중요합니다. DataBrew는 데이터 품질, 프로파일링, 정제에 최적화되어 있으며, 시험에서는 \"운영 효율성\" 키워드와 함께 자동화된 데이터 분석 도구를 찾는 문제가 출제됩니다.",
    "en_q": "A company stores a 100 MB dataset in an Amazon S3 bucket as an Apache Parquet file. A data engineer needs to profile the data before performing data preparation steps on the data. Which solution will meet this requirement in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Create a profile job on the dataset in AWS Glue DataBrew. Review the profile job results.",
      "B": "Stream the data into Amazon Managed Service for Apache Flink for SQL queries. Use the Apache Flink dashboard to profile the data.",
      "C": "Ingest the data into Amazon Redshift Spectrum. Use SQL queries to profile the data.",
      "D": "Load the data into an Amazon QuickSight dataset. Build a topic to profile the data with questions."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401540-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 314,
    "question": "회사가 소매 쇼핑 플랫폼을 위해 실시간 분석을 구현해야 합니다. 회사는 클릭스트림 데이터를 캡처하고, 데이터를 처리하고, 분석을 위해 데이터를 Amazon Redshift에 로드하고자 합니다. 솔루션은 매초 수백 메가바이트의 데이터를 처리해야 합니다. 분석을 위한 쿼리 지연시간을 최소화하면서 이 요구사항을 충족하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "Amazon Data Firehose를 사용하여 데이터를 캡처합니다. Amazon S3 버킷에 데이터를 저장합니다. COPY 명령을 사용하여 데이터를 Amazon Redshift로 로드합니다.",
      "B": "Amazon Managed Streaming for Apache Kafka(Amazon MSK)를 사용하여 데이터를 캡처합니다. Amazon EMR을 사용하여 데이터를 처리합니다. Amazon Redshift의 데이터에 액세스하기 위해 페더레이션 쿼리를 사용합니다.",
      "C": "Amazon Kinesis Data Streams를 사용하여 데이터를 캡처합니다. Amazon Redshift 스트리밍 수집을 사용하여 데이터를 구체화된 뷰에 직접 로드합니다.",
      "D": "Amazon DynamoDB Streams를 사용하여 데이터를 캡처합니다. AWS Glue를 사용하여 데이터를 처리합니다. 제로-ETL 통합을 사용하여 데이터를 Amazon Redshift로 로드합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n실시간 분석, Amazon Kinesis Data Streams, Redshift 스트리밍 수집, 저지연 시간\n\n【정답 포인트】\n실시간 분석의 핵심 요구사항은 지연시간 최소화입니다. Amazon Kinesis Data Streams는 초당 수백 MB의 고처리량 데이터 수집에 최적화되어 있으며, Redshift의 스트리밍 수집 기능은 Kinesis 데이터를 S3 중간 저장소를 거치지 않고 직접 Redshift 구체화된 뷰로 로드할 수 있습니다. 이는 배치 프로세싱의 지연시간을 완전히 제거합니다.\n\n【오답 체크】\nA의 Firehose와 S3 방식은 배치 로딩이므로 최소 수십 초의 지연시간이 발생합니다. B의 MSK와 EMR 조합은 처리 오버헤드가 크고, 페더레이션 쿼리는 원격 테이블 접근으로 인한 추가 지연시간이 있습니다. D의 DynamoDB Streams와 Glue는 고처리량 실시간 스트리밍에 최적화되지 않았습니다.\n\n【시험 포인트】\n\"LEAST query latency\" 또는 \"minimal latency\" 키워드는 Kinesis + Redshift 스트리밍 수집 조합을 가리킵니다. 시험에서는 지연시간, 처리량, 비용 최적화 요구사항에 따라 올바른 서비스 조합을 선택하는 문제가 자주 출제됩니다.",
    "en_q": "A company needs to implement real-time analytics for a retail shopping platform. The company wants to capture clickstream data, process the data, and load the data into Amazon Redshift for analysis. The solution must handle hundreds of megabytes of data every second. Which solution will meet these requirements with the LEAST query latency for analytics?",
    "en_opts": {
      "A": "Use Amazon Data Firehose to capture the data. Store the data in an Amazon S3 bucket. Use the COPY command to load data into Amazon Redshift.",
      "B": "Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to capture the data. Use Amazon EMR to process the data. Use federated queries to access data in Amazon Redshift.",
      "C": "Use Amazon Kinesis Data Streams to capture the data. Use Amazon Redshift streaming ingestion to load data directly into materialized views.",
      "D": "Use Amazon DynamoDB Streams to capture the data. Use AWS Glue to process the data. Use a zero-ETL integration to load the data into Amazon Redshift."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401541-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 315,
    "question": "회사가 실시간으로 트랜잭션 데이터를 처리하는 데이터 파이프라인을 가지고 있습니다. 회사는 지연 없이 처리 오류 유형에 따라 다양한 팀에 알림을 보내는 알림 시스템이 필요합니다. 보안 관련 오류의 경우 시스템은 즉시 보안 팀에 알려야 합니다. 데이터 검증 오류의 경우 데이터 품질 팀에 알려야 합니다. 시스템 오류의 경우 운영 팀에 알려야 합니다. 운영 오버헤드를 최소화하면서 이 요구사항을 충족하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "Amazon Simple Notification Service(Amazon SNS) 주제를 생성하고 AWS Lambda 함수 구독자를 추가합니다. 함수가 오류 유형을 평가하고 오류를 적절한 이메일 주소로 전달하도록 합니다.",
      "B": "각 오류 유형에 대해 서로 다른 이벤트 패턴으로 Amazon EventBridge 규칙을 구성합니다. 각 오류 유형을 팀별 알림을 위한 전용 Amazon Simple Notification Service(Amazon SNS) 주제로 라우팅합니다.",
      "C": "메시지 속성으로 오류를 분류하는 Amazon Simple Queue Service(Amazon SQS)를 사용합니다. 각 팀이 관련 오류에 대해 각각의 SQS 큐를 폴링하도록 허용합니다.",
      "D": "각 오류 유형에 대해 서로 다른 메트릭으로 Amazon CloudWatch 경보를 설정합니다. 메트릭 임계값을 초과할 때마다 서로 다른 Amazon Simple Notification Service(Amazon SNS) 알림을 호출합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n이벤트 기반 아키텍처, Amazon EventBridge, 이벤트 패턴 라우팅, 자동화\n\n【정답 포인트】\n다양한 오류 유형을 기반으로 다른 팀에 즉시 알림을 보내는 것은 이벤트 기반 라우팅의 전형적인 사용 사례입니다. Amazon EventBridge는 이벤트 패턴 기반 라우팅을 지원하므로, 오류 유형 필드 값에 따라 자동으로 보안팀/품질팀/운영팀 각각의 SNS 주제로 라우팅할 수 있습니다. 이는 선언적이고 간단하며 운영 오버헤드가 최소입니다.\n\n【오답 체크】\nA의 Lambda 구독자 방식은 라우팅 로직을 코드로 구현해야 하므로 개발과 유지보수 오버헤드가 증가합니다. C의 SQS 폴링 방식은 능동적 모니터링이므로 지연시간이 발생하고, 폴링 빈도에 따라 오버헤드가 생깁니다. D의 CloudWatch 경보는 메트릭 기반이며, 실시간 이벤트 패턴 라우팅에 부적절합니다.\n\n【시험 포인트】\nEventBridge는 이벤트 패턴 기반 의사결정이 필요한 시나리오에서 최적의 서비스입니다. \"지연 없이(without any delay)\", \"operational overhead 최소화\" 키워드는 EventBridge 선택을 강하게 암시합니다. 시험에서는 이벤트 기반 아키텍처 설계 문제가 증가 추세입니다.",
    "en_q": "A company has a data pipeline that processes transaction data in real time. The company needs a notification system that alerts different teams based on the type of processing error without any delay. For security-related errors, the system must immediately notify the security team. For data validation errors, the system must notify the data quality team. For system errors, the system must notify the operations team. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create an Amazon Simple Notification Service (Amazon SNS) topic with an AWS Lambda function subscriber that evaluates the error type and forwards the error to the appropriate email addresses.",
      "B": "Configure Amazon EventBridge rules with distinct event patterns for each error type. Route each error type to a dedicated Amazon Simple Notification Service (Amazon SNS) topic for team-specific alerts.",
      "C": "Use Amazon Simple Queue Service (Amazon SQS) with message attributes to categorize errors. Allow each team to poll their respective SQS queue for relevant errors.",
      "D": "Set up Amazon CloudWatch alarms with different metrics for each error type. Invoke a different Amazon Simple Notification Service (Amazon SNS) notification each time a metrics threshold is crossed."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401542-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 316,
    "question": "글로벌 전자상거래 회사가 여러 AWS 서비스에서 고객 트랜잭션, 재고 업데이트 및 사용자 활동 로그를 처리합니다. 회사는 복잡한 추출, 변환 및 로드(ETL) 워크플로우를 조정하기 위해 확장 가능하고 완전히 관리되며 이벤트 기반 오케스트레이션 솔루션이 필요합니다. 솔루션은 AWS Glue와 Amazon EMR을 사용하여 데이터를 처리해야 합니다. 데이터는 Amazon Redshift 및 Amazon S3에 저장됩니다. 솔루션은 종속성 관리, 자동화된 재시도 및 데이터 파이프라인 모니터링을 지원해야 합니다. 이 요구사항을 충족하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "AWS Step Functions를 사용하여 Amazon EMR 및 AWS Glue를 통해 데이터 변환 및 로딩 작업을 호출하는 익스프레스 워크플로우를 정의합니다.",
      "B": "워크플로우의 각 단계에 대해 AWS Lambda 함수를 생성합니다. AWS Glue 작업을 호출하도록 Amazon EventBridge를 구성합니다. Lambda 함수가 파이프라인을 통해 데이터를 처리하고 이동하도록 구성합니다.",
      "C": "Apache Airflow를 Amazon Managed Workflows for Apache Airflow(Amazon MWAA)에서 사용하여 ETL 워크플로우를 관리하는 DAG(방향성 비순환 그래프)를 생성합니다.",
      "D": "워크플로우의 각 단계를 실행하는 AWS Lambda 함수를 생성합니다. 매일 함수를 호출하도록 Amazon EventBridge 예약 규칙을 생성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\nETL 오케스트레이션, Amazon MWAA, Apache Airflow, DAG, 워크플로우 관리\n\n【정답 포인트】\n복잡한 ETL 워크플로우의 오케스트레이션에는 종속성 관리, 자동 재시도, 파이프라인 모니터링 같은 고급 기능이 필수입니다. Amazon Managed Workflows for Apache Airflow(MWAA)는 Apache Airflow 기반으로, DAG를 통해 작업 간 명확한 종속성을 정의할 수 있고, 내장된 자동 재시도 메커니즘과 Airflow UI를 통한 완전한 파이프라인 시각화 및 모니터링을 제공합니다.\n\n【오답 체크】\nA의 Step Functions는 서버리스 오케스트레이션이 가능하지만, 복잡한 DAG 표현과 모니터링 UI가 Airflow보다 제한적입니다. B와 D의 Lambda와 EventBridge 기반 방식은 종속성 관리, 재시도, 모니터링 기능이 부족하며 복잡한 워크플로우에는 부적절합니다. Lambda는 자동 재시도 메커니즘이 약하고, 파이프라인 가시성도 낮습니다.\n\n【시험 포인트】\nMWAA는 엔터프라이즈급 데이터 파이프라인 관리를 위한 표준 솔루션입니다. \"dependency management\", \"automated retries\", \"pipeline monitoring\" 키워드가 모두 포함되면 Airflow/MWAA를 선택하세요. 시험에서는 오케스트레이션 도구 선택 문제가 자주 출제되므로, 각 도구의 강점을 명확히 이해해야 합니다.",
    "en_q": "A global ecommerce company processes customer transactions, inventory updates, and user activity logs across multiple AWS services. The company needs a scalable, fully managed, and event-driven orchestration solution to coordinate complex extract, transform, and load (ETL) workflows. The solution must use AWS Glue and Amazon EMR to process data. The data will be stored in Amazon Redshift and Amazon S3. The solution must support dependency management, automated retries, and data pipeline monitoring. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS Step Functions to define an express workflow that invokes the data transformation and loading tasks across Amazon EMR and AWS Glue.",
      "B": "Create AWS Lambda functions for each step of the workflow Configure Amazon EventBridge to invoke AWS Glue jobs. Configure the Lambda functions to process and move data through the pipeline.",
      "C": "Use Apache Airflow on Amazon Managed Workflows for Apache Airflow (Amazon MWAA) to create Directed Acyclic Graphs (DAGs) to manage ETL workflows.",
      "D": "Create an AWS Lambda function that runs each step of the workflow. Create an Amazon EventBridge scheduled rule to invoke the function every day."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401543-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 317,
    "question": "글로벌 회사는 현재 Amazon Redshift를 사용하여 데이터를 저장하고 Amazon Quick Suite(이전의 Amazon QuickSight)를 사용하여 보고서를 생성합니다. 비즈니스 분석가 팀은 기술 전문성 수준이 다양합니다. 일부 분석가는 SQL 지식이 부족합니다. 모든 분석가가 자주 새로운 보고서를 생성해야 합니다. 회사는 자연어 쿼리를 사용하여 대시보드와 보고서를 더 효율적으로 생성하고자 합니다. 최소 운영 노력으로 이 요구사항을 충족하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "Amazon Redshift에 제로-ETL 액세스가 있는 Quick Suite 대시보드를 사용합니다.",
      "B": "Quick Suite에서 Amazon Q를 활성화합니다. Quick Suite 대시보드 및 보고서를 생성합니다.",
      "C": "Tableau를 Amazon Redshift와 통합하여 Tableau에 Amazon Redshift에 직접 액세스할 수 있도록 합니다.",
      "D": "Amazon Redshift에 페더레이션 쿼리 액세스가 있는 Quick Suite 대시보드를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ B번 — 정답 선택지\n▸ 비용 최적화 / 운영 효율성 / 기술 적합성\n▸ 요구사항 분석: 핵심 키워드 매핑\n\n【정답 포인트】\n▸ \"B\"번이 정답인 이유:\n  - 모든 요구사항을 가장 효율적으로 충족\n  - 비용과 운영 오버헤드 최소화\n  - 확장성과 유지보수성 우수\n  - 질문의 핵심 키워드와 정확히 매핑\n\n【오답 체크】\n(A) Amazon Redshift에 제로-ETL 액세스가 있는 Quick Suite 대시보드를 ... — 비용 증가 또는 기능 제약\n(C) Tableau를 Amazon Redshift와 통합하여 Tableau에 Amazon Red... — 요구사항 일부만 충족\n(D) Amazon Redshift에 페더레이션 쿼리 액세스가 있는 Quick Suite 대시보드... — 추가 오버헤드 유발\n\n【시험 포인트】\n▸ AWS DEA-C01 시험 패턴: 단순 기능 비교보다 실무적 최적성 평가\n▸ 비용, 운영 오버헤드, 확장성, 보안을 종합적으로 고려\n▸ 유사 서비스 간 차이점 정확히 이해 필수\n▸ \"B\" 조합이 제시된 조건에서 유일한 최적 솔루션",
    "en_q": "A global company currently uses Amazon Redshift to store data and Amazon Quick Suite (previously known as Amazon QuickSight) to generate reports. A team of business analysts have varying levels of technical expertise. Some analysts lack SQL knowledge. All the analysts need to create new reports frequently. The company wants to use natural program language queries to create dashboards and reports more efficiently. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Use Quick Suite dashboards that have zero-ETL access to Amazon Redshift.",
      "B": "Enable Amazon Q in Quick Suite. Generate Quick Suite dashboards and reports.",
      "C": "Integrate Tableau with Amazon Redshift to give Tableau direct access to the data.",
      "D": "Use Quick Suite dashboards that have federated query access to Amazon Redshift."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401544-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 318,
    "question": "회사가 새로운 Amazon SageMaker Unified Studio 도메인을 설정하고 있습니다. 각 비즈니스 부서는 자체 자산, 프로젝트 및 메타데이터에 대한 격리된 제어가 필요합니다. 특정 데이터세트는 승인 시 다른 비즈니스 부서와 공유 가능해야 합니다. 회사는 또한 중앙화된 사용자 인증 및 ID 매핑이 필요합니다. 이 요구사항을 충족하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "각 비즈니스 부서를 위임된 소유권과 세분화된 권한 정책이 있는 도메인 단위로 구성합니다. 명시적 액세스 제어를 통해 도메인 단위 간의 자산 공유 기능을 사용자에게 제공합니다. 도메인 포털에 액세스하기 위해 사용자에게 API 키를 할당합니다.",
      "B": "비즈니스 부서를 소유자 권한이 있는 별도의 도메인 단위로 구성합니다. 프로젝트를 소유자만으로 제한하여 도메인 간 데이터 공유를 방지합니다. 중앙화된 인증을 위해 AWS IAM Identity Center를 구성합니다. 사용자 프로필을 각각의 도메인 단위에 매핑합니다.",
      "C": "비즈니스 부서를 별도의 도메인으로 표현하도록 구성합니다. 공유된 관리 정책이 없는 격리된 환경을 설정합니다. 중앙화된 인증을 위해 AWS IAM Identity Center를 구성합니다. 도메인 수준에서 관리를 위임합니다.",
      "D": "각 비즈니스 부서를 자산, 프로젝트 및 메타데이터의 권한을 관리하는 별도의 도메인 단위로 구성합니다. 중앙화된 인증을 위해 AWS IAM Identity Center를 구성합니다. 사용자 프로필을 각각의 도메인 단위에 매핑합니다. 도메인 단위 간 공유를 액세스 요청을 통해 활성화합니다. 도메인 단위 소유자가 요청을 승인 또는 거부하도록 지시합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ D번 — 정답 선택지\n▸ 비용 최적화 / 운영 효율성 / 기술 적합성\n▸ 요구사항 분석: 핵심 키워드 매핑\n\n【정답 포인트】\n▸ \"D\"번이 정답인 이유:\n  - 모든 요구사항을 가장 효율적으로 충족\n  - 비용과 운영 오버헤드 최소화\n  - 확장성과 유지보수성 우수\n  - 질문의 핵심 키워드와 정확히 매핑\n\n【오답 체크】\n(A) 각 비즈니스 부서를 위임된 소유권과 세분화된 권한 정책이 있는 도메인 단위로 구성합니다. ... — 비용 증가 또는 기능 제약\n(B) 비즈니스 부서를 소유자 권한이 있는 별도의 도메인 단위로 구성합니다. 프로젝트를 소유자만으... — 운영 복잡도 증가\n(C) 비즈니스 부서를 별도의 도메인으로 표현하도록 구성합니다. 공유된 관리 정책이 없는 격리된 ... — 요구사항 일부만 충족\n\n【시험 포인트】\n▸ AWS DEA-C01 시험 패턴: 단순 기능 비교보다 실무적 최적성 평가\n▸ 비용, 운영 오버헤드, 확장성, 보안을 종합적으로 고려\n▸ 유사 서비스 간 차이점 정확히 이해 필수\n▸ \"D\" 조합이 제시된 조건에서 유일한 최적 솔루션",
    "en_q": "A company is setting up a new Amazon SageMaker Unified Studio domain. Each of the company's business units needs isolated control over its own assets, projects, and metadata. Specific datasets must be shareable with other business units upon approval. The company also requires centralized user authentication and identity mapping. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure each business unit as a domain unit with delegated ownership and fine-grained permissions policies. Give users the ability to share assets across domain units with explicit access control. Assign API keys to users for authentication to access the domain portal.",
      "B": "Configure business units as separate domain units with owner permissions. Restrict projects exclusively to owners to prevent data sharing between domains. Configure AWS IAM Identity Center for centralized authentication. Map user profiles to their respective domain units.",
      "C": "Configure business units to be represented as separate domains. Establish isolated environments with no shared administrative policies. Configure AWS IAM Identity Center for centralized authentication. Delegate administration at the domain level.",
      "D": "Configure each business unit as a separate domain unit to manage permissions on assets, projects, and metadata. Configure AWS IAM Identity Center for centralized authentication. Map user profiles to their respective domain units. Enable cross-business unit sharing through access requests. Instruct domain unit owners to approve or deny the requests."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401545-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 319,
    "question": "대규모 회사의 데이터 엔지니어가 Amazon Redshift 성능에 최적화된 중앙화된 데이터세트를 생성해야 합니다. 회사는 자체 AWS 계정과 RA3 노드가 있는 전용 Amazon Redshift 클러스터를 사용하는 여러 다운스트림 팀이 있습니다. 모든 다운스트림 팀이 중앙화된 데이터세트에 액세스해야 합니다. 데이터세트에 즉시 액세스할 수 있게 하고 현재 Amazon Redshift 성능을 유지하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "UNLOAD 명령을 사용하여 데이터세트를 Amazon S3 버킷에 복사합니다. 전용 AWS Glue Data Catalog 스키마에서 테이블 정의를 등록합니다. AWS Lake Formation을 사용하여 다른 AWS 계정과 스키마를 공유합니다. Amazon Redshift Spectrum을 사용하여 데이터에 액세스합니다.",
      "B": "매일 추출, 변환 및 로드(ETL) 작업을 생성하여 데이터를 Amazon S3 스테이징 영역으로 언로드합니다. 팀에게 데이터를 자신의 Amazon Redshift 클러스터로 복사하도록 지시합니다.",
      "C": "Amazon Redshift 프로듀서 클러스터와 컨슈머 클러스터 간에 Amazon Redshift 데이터 공유를 설정합니다.",
      "D": "Amazon Redshift 프로듀서 클러스터와 컨슈머 클러스터 간에 데이터를 자동으로 동기화하는 AWS DataSync 작업을 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ C번 — 정답 선택지\n▸ 비용 최적화 / 운영 효율성 / 기술 적합성\n▸ 요구사항 분석: 핵심 키워드 매핑\n\n【정답 포인트】\n▸ \"C\"번이 정답인 이유:\n  - 모든 요구사항을 가장 효율적으로 충족\n  - 비용과 운영 오버헤드 최소화\n  - 확장성과 유지보수성 우수\n  - 질문의 핵심 키워드와 정확히 매핑\n\n【오답 체크】\n(A) UNLOAD 명령을 사용하여 데이터세트를 Amazon S3 버킷에 복사합니다. 전용 AWS... — 비용 증가 또는 기능 제약\n(B) 매일 추출, 변환 및 로드(ETL) 작업을 생성하여 데이터를 Amazon S3 스테이징 영... — 운영 복잡도 증가\n(D) Amazon Redshift 프로듀서 클러스터와 컨슈머 클러스터 간에 데이터를 자동으로 동... — 추가 오버헤드 유발\n\n【시험 포인트】\n▸ AWS DEA-C01 시험 패턴: 단순 기능 비교보다 실무적 최적성 평가\n▸ 비용, 운영 오버헤드, 확장성, 보안을 종합적으로 고려\n▸ 유사 서비스 간 차이점 정확히 이해 필수\n▸ \"C\" 조합이 제시된 조건에서 유일한 최적 솔루션",
    "en_q": "A data engineer at a large company needs to create centralized datasets that are optimized for Amazon Redshift performance. The company has multiple downstream teams that use their own AWS accounts and dedicated Amazon Redshift clusters with RA3 nodes. All downstream teams need access to the centralized datasets. Which solution will provide immediate access to the datasets and maintain the current Amazon Redshift performance?",
    "en_opts": {
      "A": "Copy the datasets to an Amazon S3 bucket by using the UNLOAD command. Register the table definitions in a dedicated AWS Glue Data Catalog schema. Share the schema with the other AWS accounts by using AWS Lake Formation. Use Amazon Redshift Spectrum to access the data.",
      "B": "Create a daily extract, transform, and load (ETL) job to unload the data to an Amazon S3 staging area. Instruct the teams to copy the data into their Amazon Redshift clusters.",
      "C": "Set up Amazon Redshift data sharing between the Amazon Redshift producer clusters and the consumer clusters to provide access to the centralized datasets.",
      "D": "Set up an AWS DataSync job that automatically syncs the data between the Amazon Redshift producer clusters and the consumer clusters."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401546-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 320,
    "question": "글로벌 금융 회사가 us-east-1 리전, eu-west-2 리전 및 ap-northeast-1 리전의 거래 센터 간에 거래 데이터의 거의 실시간 교차 리전 동기화를 구현해야 합니다. 회사는 전송 중에 데이터가 암호화되도록 해야 합니다. 솔루션은 데이터 순서 지정과 일관성을 보장해야 하며 교차 리전 재해 복구를 지원해야 합니다. 솔루션은 500밀리초 미만의 데이터 지연시간을 제공해야 합니다. 운영 노력을 최소화하면서 이 요구사항을 충족하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "각 AWS 리전에 Apache Kafka Connect를 배포합니다. 교차 리전 데이터 복제를 설정하기 위해 사용자 정의 커넥터를 사용합니다. SSL 보안 프로토콜을 구성합니다.",
      "B": "Amazon Managed Streaming for Apache Kafka(Amazon MSK) Replicator를 사용하여 세 AWS 리전의 MSK 클러스터 간에 완전히 상호 연결된 복제 관계를 설정합니다. TLS 암호화 및 IAM 인증을 활성화합니다. 교차 리전 백업 구성을 설정합니다.",
      "C": "각 AWS 리전에 Apache Kafka Mirror Maker 2.0을 배포합니다. 교차 리전 데이터 동기화를 처리하도록 사용자 정의 복제 정책을 설정합니다. SSL 보안 프로토콜을 구성합니다.",
      "D": "각 AWS 리전에서 거래 데이터를 수신하도록 Amazon Kinesis Data Streams를 사용합니다. Amazon Data Firehose를 사용하여 각 리전의 Amazon Managed Streaming for Apache Kafka(Amazon MSK) 클러스터 간에 데이터를 복제합니다. AWS Key Management Service(AWS KMS) 암호화 및 IAM 역할을 구성하여 액세스를 관리합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\nApache Spark, 병렬 처리, 분산 컴퓨팅, 성능 최적화\n\n【정답 포인트】\n대규모 데이터 처리에서 성능과 확장성을 달성하려면 분산 처리 프레임워크가 필수입니다. Apache Spark는 메모리 기반 병렬 처리로 Hadoop MapReduce보다 훨씬 빠른 성능을 제공하며, 다양한 프로그래밍 언어(Python, Scala, SQL)를 지원합니다. AWS EMR에서 Spark 클러스터를 관리형으로 운영할 수 있습니다.\n\n【오답 체크】\n순차 처리나 단일 머신 기반 도구는 대용량 데이터에 부적절합니다.\n\n【시험 포인트】\n\"고성능\", \"확장 가능\", \"대규모 데이터\" 키워드는 Spark 기반 솔루션을 가리킵니다. 시험에서는 적절한 분산 처리 기술 선택 문제가 자주 출제됩니다.",
    "en_q": "A global finance company needs to implement near real-time cross-Region synchronization of trading data between trading centers in the us-east-1 Region, the eu-west-2 Region, and the ap-northeast-1 Region. The company must ensure that data is encrypted in transit. The solution must ensure data ordering and consistency and must support cross-Region disaster recovery. The solution must provide data latency of less than 500 milliseconds. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Deploy Apache Kafka Connect in each AWS Region. Use custom-developed connectors to set up cross-Region data replication. Configure the SSL security protocol.",
      "B": "Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) Replicator to establish fully interconnected replication relationships between MSK clusters in the three AWS Regions. Enable TLS encryption and IAM authentication. Set up cross-Region backup configurations.",
      "C": "Deploy Apache Kafka Mirror Maker 2.0 in each AWS Region. Set up custom replication policies to handle cross-Region data synchronization. Configure the SSL security protocol.",
      "D": "Use Amazon Kinesis Data Streams to receive trading data from each AWS Region. Use Amazon Data Firehose to replicate data between Amazon Managed Streaming for Apache Kafka (Amazon MSK) clusters in each Region. Configure AWS Key Management Service (AWS KMS) encryption and IAM roles to manage access."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401547-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 321,
    "question": "회사의 애플리케이션이 거의 실시간으로 데이터를 검색하고 분석해야 합니다. 애플리케이션은 초당 최대 1,000개의 요청을 낮은 쿼리 지연시간으로 처리해야 합니다. 회사는 각 데이터 팀이 각 팀의 비용 및 성능 최적화 요구사항을 충족하도록 자신을 소유하고 구성할 수 있는 솔루션을 원합니다. 이 요구사항을 충족하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "Amazon S3 버킷을 사용하여 데이터를 저장합니다. Amazon Athena를 사용하여 데이터를 쿼리하고 분석합니다. 각 데이터 팀에 S3 버킷 접두사를 할당하여 쿼리를 최적화합니다.",
      "B": "Amazon Kinesis Data Streams의 스트림과 Amazon Managed Service for Apache Flink을 사용하여 데이터를 쿼리하고 분석합니다. 각 데이터 팀에 스트림을 할당하여 관리 및 소비합니다.",
      "C": "인덱싱이 있는 Amazon OpenSearch Service 클러스터를 사용하여 데이터를 쿼리합니다. 각 데이터 팀에 스토리지 및 쿼리를 구성할 수 있는 별도의 클러스터를 할당합니다.",
      "D": "Aurora I/O 최적화 인스턴스에서 실행되는 Amazon Aurora 클러스터를 사용합니다. 각 데이터 팀에 스토리지 및 쿼리를 구성할 수 있는 별도의 Aurora 클러스터를 할당합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ C번 — 정답 선택지\n▸ 비용 최적화 / 운영 효율성 / 기술 적합성\n▸ 요구사항 분석: 핵심 키워드 매핑\n\n【정답 포인트】\n▸ \"C\"번이 정답인 이유:\n  - 모든 요구사항을 가장 효율적으로 충족\n  - 비용과 운영 오버헤드 최소화\n  - 확장성과 유지보수성 우수\n  - 질문의 핵심 키워드와 정확히 매핑\n\n【오답 체크】\n(A) Amazon S3 버킷을 사용하여 데이터를 저장합니다. Amazon Athena를 사용하여... — 비용 증가 또는 기능 제약\n(B) Amazon Kinesis Data Streams의 스트림과 Amazon Managed S... — 운영 복잡도 증가\n(D) Aurora I/O 최적화 인스턴스에서 실행되는 Amazon Aurora 클러스터를 사용합... — 추가 오버헤드 유발\n\n【시험 포인트】\n▸ AWS DEA-C01 시험 패턴: 단순 기능 비교보다 실무적 최적성 평가\n▸ 비용, 운영 오버헤드, 확장성, 보안을 종합적으로 고려\n▸ 유사 서비스 간 차이점 정확히 이해 필수\n▸ \"C\" 조합이 제시된 조건에서 유일한 최적 솔루션",
    "en_q": "A company's application needs to search and analyze data in near real time. The application must handle up to 1,000 requests each second with low query latency. The company wants a solution that individual data teams can own and configure to meet each team's cost and performance optimization requirements. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon S3 buckets to store the data. Use Amazon Athena to query and analyze the data. Assign each data team a separate S3 bucket prefix to optimize queries.",
      "B": "Use streams in Amazon Kinesis Data Streams and Amazon Managed Service for Apache Flink to query and analyze the data. Assign each data team a separate stream to manage and consume.",
      "C": "Use Amazon OpenSearch Service clusters with indexing to query the data. Assign each data team a separate cluster to configure for storage and queries.",
      "D": "Use Amazon Aurora clusters that run on Aurora I/O-Optimized instances. Assign each data team a separate Aurora cluster to configure for storage and queries."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401548-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 322,
    "question": "회사가 데이터 웨어하우스로 Amazon Redshift를 사용합니다. 데이터 엔지니어는 100개의 열을 포함하는 orders.complete_orders_history라는 테이블을 쿼리해야 합니다. 쿼리는 companyId 및 unique_system_id라는 열을 제외한 모든 열을 반환해야 합니다. 이 요구사항을 충족하는 Amazon Redshift SQL 문은 어떤 것입니까?",
    "options": {
      "A": "",
      "B": "",
      "C": "",
      "D": ""
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ A번 — 정답 선택지\n▸ 비용 최적화 / 운영 효율성 / 기술 적합성\n▸ 요구사항 분석: 핵심 키워드 매핑\n\n【정답 포인트】\n▸ \"A\"번이 정답인 이유:\n  - 모든 요구사항을 가장 효율적으로 충족\n  - 비용과 운영 오버헤드 최소화\n  - 확장성과 유지보수성 우수\n  - 질문의 핵심 키워드와 정확히 매핑\n\n【오답 체크】\n(B)  — 운영 복잡도 증가\n(C)  — 요구사항 일부만 충족\n(D)  — 추가 오버헤드 유발\n\n【시험 포인트】\n▸ AWS DEA-C01 시험 패턴: 단순 기능 비교보다 실무적 최적성 평가\n▸ 비용, 운영 오버헤드, 확장성, 보안을 종합적으로 고려\n▸ 유사 서비스 간 차이점 정확히 이해 필수\n▸ \"A\" 조합이 제시된 조건에서 유일한 최적 솔루션",
    "en_q": "A company uses Amazon Redshift for its data warehouse. A data engineer must query a table named orders.complete_orders_history, which contains 100 columns. The query must return all columns except columns named companyId and unique_system_id. Which Amazon Redshift SQL statement will meet this requirement?",
    "en_opts": {
      "A": "",
      "B": "",
      "C": "",
      "D": ""
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401549-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 323,
    "question": "회사가 민감한 트랜잭션 데이터를 Amazon S3 버킷에 저장합니다. 데이터 엔지니어는 실수로 인한 삭제를 방지하기 위해 제어를 구현해야 합니다. 이 요구사항을 충족하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "S3 버킷에서 버전 관리를 활성화하고 MFA 삭제를 구성합니다.",
      "B": "S3 버킷 정책 규칙을 구성하여 S3 삭제 마커 생성을 거부합니다.",
      "C": "S3 Lifecycle 규칙을 생성하여 삭제된 파일을 S3 Glacier Deep Archive로 이동합니다.",
      "D": "AWS Config 자동화 조치를 설정하여 사용자가 S3 객체를 삭제하지 못하도록 방지합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n데이터 검증, AWS Glue DataBrew, 규칙 기반 검증, 자동화\n\n【정답 포인트】\n데이터 수집 후 다운스트림 시스템에 로드하기 전에 데이터 검증은 필수입니다. AWS Glue DataBrew는 규칙 기반 검증 프로필을 만들 수 있으며, 지정된 규칙을 위반하는 레코드를 자동으로 탐지하고 분류합니다. 이를 통해 낮은 품질의 데이터가 분석 시스템으로 들어가는 것을 방지할 수 있습니다.\n\n【오답 체크】\n수동 검증이나 정해진 규칙 없는 검증은 일관성이 없습니다.\n\n【시험 포인트】\n\"데이터 검증\", \"규칙\", \"자동화\" 키워드는 DataBrew 규칙 검증을 선택하게 합니다.",
    "en_q": "A company stores sensitive transaction data in an Amazon S3 bucket. A data engineer must implement controls to prevent accidental deletions. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Enable versioning on the S3 bucket and configure MFA delete.",
      "B": "Configure an S3 bucket policy rule that denies the creation of S3 delete markers.",
      "C": "Create an S3 Lifecycle rule that moves deleted files to S3 Glacier Deep Archive.",
      "D": "Set up AWS Config remediation actions to prevent users from deleting S3 objects."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401550-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 324,
    "question": "회사가 Amazon Redshift 테이블에 기록 고객 데이터를 저장합니다. Email이라는 열에는 null 항목과 이메일 주소가 아닌 값이 포함되어 있습니다. Email 열의 품질은 여러 다운스트림 프로세스에 중요합니다. 데이터 엔지니어는 Email 열의 유효한 이메일 주소 비율이 90% 미만일 때 실패하는 AWS Glue 데이터 품질 규칙을 생성해야 합니다. AWS Glue 데이터 품질 규칙의 어느 구성요소가 이 요구사항을 충족합니까?",
    "options": {
      "A": "Uniqueness \"Email\" matches \"[%@%.%]\" with a threshold set to > 0.9",
      "B": "ColumnValues \"Email\" matches \"[%@%.%]\" with a threshold set to > 0.1",
      "C": "ColumnValues \"Email\" matches \"[%@%.%]\" with a threshold set to > 0.9",
      "D": "UniqueValueRatio \"Email\" matches \"[%@%.%]\" with a threshold set to > 0.1"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n증분 처리, 변경 데이터 캡처(CDC), DMS, 성능 최적화\n\n【정답 포인트】\n대용량 데이터베이스에서 모든 데이터를 매번 전송하면 비효율적입니다. AWS Database Migration Service(DMS)의 변경 데이터 캡처(CDC) 기능을 사용하면 마지막 동기화 이후 변경된 레코드만 캡처하여 전송할 수 있습니다. 이는 네트워크 대역폭을 절약하고, 동기화 시간을 단축하며, 비용을 크게 절감합니다.\n\n【오답 체크】\n전체 데이터를 매번 추출하는 방식은 확장성이 낮습니다.\n\n【시험 포인트】\n\"증분 처리\", \"변경 추적\", \"성능 개선\" 키워드는 DMS CDC를 가리킵니다. 시험에서는 대용량 데이터 동기화 문제가 자주 출제됩니다.",
    "en_q": "A company stores historical customer data in an Amazon Redshift table. A column named Email contains null entries and values that are not email addresses. The quality of the Email column is critical for multiple downstream processes. A data engineer must create an AWS Glue Data Quality rule that fails when the percentage of valid email addresses in the Email column is less than 90%. Which component of an AWS Glue Data Quality rule will meet these requirements?",
    "en_opts": {
      "A": "Uniqueness \"Email\" matches \"[%@%.%]\" with a threshold set to > 0.9",
      "B": "ColumnValues \"Email\" matches \"[%@%.%]\" with a threshold set to > 0.1",
      "C": "ColumnValues \"Email\" matches \"[%@%.%]\" with a threshold set to > 0.9",
      "D": "UniqueValueRatio \"Email\" matches \"[%@%.%]\" with a threshold set to > 0.1"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401551-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 325,
    "question": "회사가 AWS Glue를 사용하여 데이터 처리 파이프라인을 구축하고 있습니다. 파이프라인은 Amazon S3에 저장된 데이터에 액세스합니다. 회사는 데이터를 다양한 분류 수준을 나타내는 접두사가 있는 폴더로 구성했습니다. 회사는 AWS Glue 작업이 데이터 분류에 따라 특정 접두사만 액세스하도록 제한해야 합니다. 또한 회사는 업무 시간(오전 9시~오후 5시)으로 액세스를 제한해야 합니다. 이 요구사항을 충족하기 위해 회사가 사용자 정의 IAM 정책에 포함해야 하는 요소는 무엇입니까?",
    "options": {
      "A": "각 접두사에 대해 와일드카드를 사용하는 S3 객체 Amazon Resource Name(ARN) 패턴이 있는 Resource 요소와 TimeGreaterThan 및 TimeLessThan 연산자와 함께 $util.time 변수를 사용하는 Condition 요소",
      "B": "각 접두사에 대해 와일드카드를 사용하는 S3 객체 Amazon Resource Name(ARN) 패턴이 있는 Resource 요소와 DateGreaterThan 및 DateLessThan 연산자와 함께 aws:CurrentTime 조건 키를 사용하는 Condition 요소",
      "C": "폴더 액세스를 제한하는 s3:prefix 조건 키와 운영 시간을 제한하는 DateGreaterThanEquals 및 DateLessThanEquals와 함께 aws:CurrentTime을 사용하는 Condition 요소",
      "D": "버킷 액세스를 제한하는 s3:ResourceAccount 조건 키와 업무 시간 외에 적용되는 Deny 문"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n스트림 처리, Amazon Kinesis, 실시간 분석, 윈도우 함수\n\n【정답 포인트】\n실시간 스트림 데이터에서 시간 기반 집계(시간당 평균, 분당 최대값)를 계산하려면 스트림 처리 엔진이 필요합니다. Amazon Kinesis Data Analytics는 표준 SQL의 윈도우 함수(TUMBLING WINDOW, SLIDING WINDOW)를 사용하여 시간 기반 집계를 수행할 수 있습니다. 이는 실시간 인사이트 도출을 가능하게 합니다.\n\n【오답 체크】\n배치 처리로는 실시간성을 만족할 수 없습니다.\n\n【시험 포인트】\n\"실시간\", \"집계\", \"윈도우\" 키워드는 Kinesis Analytics를 선택하게 합니다. 시험에서는 실시간 분석 요구사항이 자주 출제됩니다.",
    "en_q": "A company is building data processing pipelines by using AWS Glue. The pipelines access data stored in Amazon S3. The company has organized the data into folders with prefixes that represent different classification levels. The company needs to restrict AWS Glue jobs to access only specific prefixes based on the data classification. The company must also restrict access to business hours (9 AM to 5 PM). Which elements must the company include in a custom IAM policy to meet these requirements?",
    "en_opts": {
      "A": "A Resource element with S3 object Amazon Resource Name (ARN) patterns that use wildcards for each prefix and a Condition element that uses the $util.time variable with TimeGreaterThan and TimeLessThan operators",
      "B": "A Resource element with S3 object Amazon Resource Name (ARN) patterns that use wildcards for each prefix and a Condition element that uses the aws:CurrentTime condition key with DateGreaterThan and DateLessThan operators",
      "C": "A Condition element that uses the s3:prefix condition key to restrict folder access and aws:CurrentTime with DateGreaterThanEquals and DateLessThanEquals to restrict hours of operation",
      "D": "A Condition element that uses the s3:ResourceAccount condition key to restrict bucket access and a Deny statement that applies outside of business hours"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401552-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 326,
    "question": "회사가 Amazon RDS for MySQL 데이터베이스의 로그를 수집하고 감사를 위해 로그를 사용 가능하게 해야 합니다. 로그는 데이터베이스에서 데이터를 수정하거나 데이터베이스 인스턴스를 변경하는 각 사용자를 추적해야 합니다. 이 요구사항을 충족하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "Amazon CloudWatch Logs를 활성화합니다. 데이터베이스 변경 및 인스턴스 수준 변경을 모니터링하기 위해 메트릭 필터를 생성합니다. 의심스러운 데이터베이스 작업에 대한 거의 실시간 경고를 보내도록 자동화된 알림 시스템을 구성합니다.",
      "B": "데이터베이스 활동을 모니터링하도록 Amazon EventBridge 규칙을 구성합니다. EventBridge 이벤트를 처리하는 AWS Lambda 함수를 생성하고 이를 Amazon OpenSearch Service에 저장합니다.",
      "C": "AWS CloudTrail를 구성하여 API 호출을 기록합니다. Amazon CloudWatch Logs를 기본 모니터링에 사용합니다. IAM 정책을 사용하여 로그 액세스를 제어합니다. 로그 감사를 위해 예약된 보고를 설정합니다.",
      "D": "기본 Amazon RDS 데이터베이스 감시(audit) 로깅을 활성화하고 구성합니다. Amazon CloudWatch Logs를 활성화합니다. 메트릭 필터와 경보를 구성합니다. AWS CloudTrail 감시 로깅을 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n데이터 파티셔닝, 성능 최적화, Parquet, 컬럼 기반 스토리지\n\n【정답 포인트】\n대규모 데이터셋의 쿼리 성능을 최적화하려면 파티셔닝과 최적화된 파일 형식이 중요합니다. Apache Parquet은 컬럼 기반 형식으로 필요한 컬럼만 읽어 성능을 향상시키고, 높은 압축률로 스토리지 비용도 절감합니다. S3에 년도/월/일 기준으로 파티션하면 쿼리 성능이 수십 배 향상될 수 있습니다.\n\n【오답 체크】\n행 기반 형식이나 파티셔닝 없는 구조는 불필요한 데이터를 많이 스캔합니다.\n\n【시험 포인트】\n\"성능 최적화\", \"파티셔닝\", \"Parquet\" 키워드는 컬럼 기반 파티셔닝을 선택하게 합니다.",
    "en_q": "A company needs to collect logs for an Amazon RDS for MySQL database and make the logs available for audits. The logs must track each user that modifies data in the database or makes changes to the database instance. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Enable Amazon CloudWatch Logs. Create metric filters to monitor database changes and instance-level changes. Configure automated notification systems to send near real-time alerts for suspicious database operations.",
      "B": "Configure an Amazon EventBridge rule to monitor database activity. Create an AWS Lambda function to process EventBridge events and store them in Amazon OpenSearch Service.",
      "C": "Configure AWS CloudTrail to log API calls. Use Amazon CloudWatch Logs for basic monitoring. Use IAM policies to control access to the logs. Set up scheduled reporting for log audits.",
      "D": "Enable and configure native Amazon RDS database audit logging. Enable Amazon CloudWatch Logs. Configure metric filters and alarms. Configure AWS CloudTrail audit logging."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401553-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 327,
    "question": "회사가 매일 수백만 개의 트랜잭션 레코드를 포함하는 CSV 파일을 처리합니다. 파일은 Amazon S3에 저장됩니다. 각 트랜잭션을 데이터베이스 업데이트 전에 검증해야 합니다. 회사는 데이터를 병렬로 처리할 솔루션이 필요합니다. 솔루션은 레코드의 15% 이상이 검증에 실패하면 전체 프로세스를 중지하는 오류 처리를 사용해야 합니다. 운영 오버헤드를 최소화하면서 이 요구사항을 충족하는 솔루션은 어떤 것입니까?",
    "options": {
      "A": "파일의 청크를 병렬로 처리하는 AWS Batch 작업을 생성합니다. 사용자 정의 오류 추적 메커니즘을 사용합니다.",
      "B": "ToleratedFailurePercentage 필드를 15%로 설정하여 AWS Step Functions Distributed Map 상태를 사용합니다.",
      "C": "Spark를 사용하여 파일을 처리하는 Amazon EMR 클러스터를 배포합니다. 실패 임계값을 15%로 설정하도록 사용자 정의 구성합니다.",
      "D": "S3 Batch Operations와 함께 AWS Lambda를 사용하여 파일을 처리하고 검증 실패를 추적하여 15% 미만이 되도록 합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ B번 — 정답 선택지\n▸ 비용 최적화 / 운영 효율성 / 기술 적합성\n▸ 요구사항 분석: 핵심 키워드 매핑\n\n【정답 포인트】\n▸ \"B\"번이 정답인 이유:\n  - 모든 요구사항을 가장 효율적으로 충족\n  - 비용과 운영 오버헤드 최소화\n  - 확장성과 유지보수성 우수\n  - 질문의 핵심 키워드와 정확히 매핑\n\n【오답 체크】\n(A) 파일의 청크를 병렬로 처리하는 AWS Batch 작업을 생성합니다. 사용자 정의 오류 추적... — 비용 증가 또는 기능 제약\n(C) Spark를 사용하여 파일을 처리하는 Amazon EMR 클러스터를 배포합니다. 실패 임계... — 요구사항 일부만 충족\n(D) S3 Batch Operations와 함께 AWS Lambda를 사용하여 파일을 처리하고 ... — 추가 오버헤드 유발\n\n【시험 포인트】\n▸ AWS DEA-C01 시험 패턴: 단순 기능 비교보다 실무적 최적성 평가\n▸ 비용, 운영 오버헤드, 확장성, 보안을 종합적으로 고려\n▸ 유사 서비스 간 차이점 정확히 이해 필수\n▸ \"B\" 조합이 제시된 조건에서 유일한 최적 솔루션",
    "en_q": "A company processes a CSV file that contains millions of transaction records every day. The file is stored in Amazon S3. Each transaction must be validated before updating a database. The company needs a solution that will process the data in parallel. The solution must use error handling that stops the entire process if more than 15% of the records fail validation. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create an AWS Batch job that processes chunks of the file in parallel with a custom error tracking mechanism.",
      "B": "Use AWS Step Functions Distributed Map state with the ToleratedFailurePercentage field set to 15%.",
      "C": "Deploy an Amazon EMR cluster with Spark to process the file Configure a custom failure threshold to 15%.",
      "D": "Use AWS Lambda with S3 Batch Operations to process the file and track validation failures to be less than 15%."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401554-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 328,
    "question": "회사는 Amazon DynamoDB, Amazon RDS, Amazon Redshift, Amazon S3에 저장된 데이터를 조인하여 일회성 성능 보고서를 생성해야 합니다. 회사는 불필요한 데이터 이동을 피하고 쿼리 실행 시간을 최소화하고 싶습니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "DynamoDB Streams를 사용하여 DynamoDB에서 데이터를 캡처합니다. AWS DMS를 사용하여 Amazon RDS에서 데이터를 마이그레이션합니다. Amazon Redshift 데이터를 내보냅니다. 모든 데이터를 Amazon S3에 저장합니다. Redshift Spectrum을 사용하여 쿼리를 실행합니다.",
      "B": "AWS Glue ETL 파이프라인을 설정하여 데이터를 추출, 변환 및 중앙화하여 Amazon S3에 저장합니다. Amazon Athena를 사용하여 분석 쿼리를 실행합니다.",
      "C": "Apache Spark로 지원되는 Amazon EMR 클러스터를 배포하여 여러 소스의 데이터 세트를 수집, 처리 및 병합합니다. 병합된 데이터에 대해 분석 워크로드를 실행합니다.",
      "D": "Amazon Athena Federated Query를 사용하여 DynamoDB, Amazon RDS, Amazon Redshift 및 Amazon S3에서 일회성 조인 및 분석을 수행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ D번 — 정답 선택지\n▸ 비용 최적화 / 운영 효율성 / 기술 적합성\n▸ 요구사항 분석: 핵심 키워드 매핑\n\n【정답 포인트】\n▸ \"D\"번이 정답인 이유:\n  - 모든 요구사항을 가장 효율적으로 충족\n  - 비용과 운영 오버헤드 최소화\n  - 확장성과 유지보수성 우수\n  - 질문의 핵심 키워드와 정확히 매핑\n\n【오답 체크】\n(A) DynamoDB Streams를 사용하여 DynamoDB에서 데이터를 캡처합니다. AWS ... — 비용 증가 또는 기능 제약\n(B) AWS Glue ETL 파이프라인을 설정하여 데이터를 추출, 변환 및 중앙화하여 Amazo... — 운영 복잡도 증가\n(C) Apache Spark로 지원되는 Amazon EMR 클러스터를 배포하여 여러 소스의 데이... — 요구사항 일부만 충족\n\n【시험 포인트】\n▸ AWS DEA-C01 시험 패턴: 단순 기능 비교보다 실무적 최적성 평가\n▸ 비용, 운영 오버헤드, 확장성, 보안을 종합적으로 고려\n▸ 유사 서비스 간 차이점 정확히 이해 필수\n▸ \"D\" 조합이 제시된 조건에서 유일한 최적 솔루션",
    "en_q": "A company needs to generate a one-time performance report by joining data that is stored in Amazon DynamoDB. Amazon RDS. Amazon Redshift. and Amazon S3. The company wants to avoid unnecessary data movement and to minimize query execution time. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Capture data from DynamoDB by using DynamoDB Streams. Migrate data from Amazon RDS by using AWS DMS. Export Amazon Redshift data. Store all data in Amazon S3. Use Redshift Spectrum to run queries.",
      "B": "Set up an AWS Glue ETL pipeline to extract, transform, and centralize data in Amazon S3. Use Amazon Athena to run analytical queries.",
      "C": "Deploy an Amazon EMR cluster powered by Apache Spark to ingest, process, and merge datasets from multiple sources. Run analytical workloads on the merged data.",
      "D": "Use Amazon Athena Federated Query to perform one-time joins and analysis across DynamoDB, Amazon RDS, Amazon Redshift, and Amazon S3."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401555-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 329,
    "question": "데이터 엔지니어는 서버리스 멀티 스텝 추출, 변환 및 로드(ETL) 파이프라인을 구축하고 있습니다. 파이프라인은 Amazon S3 데이터 레이크에서 데이터를 추출하고 AWS Glue ETL 작업을 사용하여 데이터를 변환한 다음 결과를 Amazon Redshift 데이터베이스에 로드합니다. 데이터 엔지니어는 서버리스 ETL 워크플로우를 오케스트레이션해야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까? (두 개를 선택하십시오.)",
    "options": {
      "A": "AWS Step Functions를 사용하여 워크플로우를 구현합니다. Step Functions를 구성하여 AWS Glue ETL 작업을 조정하고 자동 재시도로 오류 조건을 처리합니다.",
      "B": "AWS Glue 워크플로우를 사용하여 작업 간의 종속성과 작업 트리거를 시각적으로 나타내는 ETL 작업의 그래프를 만듭니다.",
      "C": "항상 켜져 있는 Amazon EC2 인스턴스를 프로비저닝합니다. 미리 정의된 일정에 따라 순차적으로 AWS Glue ETL 작업을 호출하는 cron 작업을 만듭니다.",
      "D": "Amazon EventBridge 규칙을 사용하여 S3 객체 생성 이벤트에 따라 AWS Glue ETL 작업을 호출합니다. 규칙을 구성하여 순차적으로 AWS Glue ETL 작업을 연결하고 복잡한 작업 종속성을 처리합니다.",
      "E": "AWS CodePipeline을 사용하여 ETL 파이프라인과 종속성 기반 인프라 변경 사항을 조정하는 오케스트레이션 솔루션을 구축합니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n비용 최적화, 온디맨드, 예약 인스턴스, 스팟 인스턴스\n\n【정답 포인트】\n클러스터 운영 비용을 최적화하려면 워크로드 특성에 맞는 인스턴스 타입을 조합해야 합니다. 기본 작업(항상 필요한 부분)은 예약 인스턴스로, 변동하는 부분은 스팟 인스턴스로 구성하면 온디맨드 대비 70% 이상의 비용을 절감할 수 있습니다. AWS EMR은 이러한 인스턴스 타입 혼합을 쉽게 구성할 수 있습니다.\n\n【오답 체크】\n모든 인스턴스를 온디맨드로 운영하면 비용이 높습니다.\n\n【시험 포인트】\n\"비용 최적화\", \"인스턴스 혼합\" 키워드는 예약/스팟 조합을 선택하게 합니다.",
    "en_q": "A data engineer is building a serverless, multi-step extract, transform, and load (ETL) pipeline. The pipeline extracts data from an Amazon S3 data lake and transforms the data by using AWS Glue ETL jobs. The pipeline then loads the results into an Amazon Redshift database. The data engineer needs to orchestrate the serverless ETL workflow. Which solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Implement the workflow by using AWS Step Functions. Configure Step Functions to coordinate the AWS Glue ETL jobs and handle error conditions with automatic retries.",
      "B": "Use AWS Glue workflows to create a graph of the ETL tasks that visually represents the dependencies between jobs and the job triggers.",
      "C": "Provision an always on Amazon EC2 instance. Create a cron job that invokes the AWS Glue ETL jobs in sequence based on a predefined schedule.",
      "D": "Use Amazon EventBridge rules to invoke the AWS Glue ETL jobs based on S3 object creation events. Configure the rules to chain the AWS Glue ETL jobs in sequence and handle complex job dependencies.",
      "E": "Build an orchestration solution by using AWS CodePipeline to coordinate the ETL pipeline and infrastructure changes based on the dependencies."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401556-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 330,
    "question": "미디어 회사는 처리를 위해 Amazon S3에 큰 비디오 파일을 업로드합니다. 처리 후 회사는 재처리가 필요한 경우를 대비하여 원본 파일을 90일 동안 유지해야 합니다. 90일 후 회사는 저장 비용을 줄이기 위해 파일을 삭제할 수 있습니다. 회사는 처리된 비디오를 다른 S3 버킷에 저장합니다. 원본 파일에 대해 가장 비용 효율적으로 요구사항을 충족하는 S3 라이프사이클 구성은 무엇입니까?",
    "options": {
      "A": "파일을 S3 Standard에 90일 동안 저장합니다. 파일을 S3 Glacier Flexible Retrieval로 전환합니다. 그 후 파일을 만료합니다.",
      "B": "파일을 S3 Standard에 90일 동안 저장합니다. 버전 관리를 활성화합니다. 90일 동안 파일에 대해 Object Lock을 활성화합니다. 그 후 파일을 만료합니다.",
      "C": "파일을 S3 Standard에 90일 동안 저장합니다. S3 라이프사이클 관리를 구현하여 파일을 만료합니다.",
      "D": "파일을 S3 Intelligent-Tiering에 90일 동안 저장합니다. 버전 관리를 활성화합니다. 파일을 만료하는 S3 라이프사이클 관리를 추가합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】S3 라이프사이클 관리, 비용 최적화, 자동 삭제\n\n【정답 포인트】90일 이내에 재처리 가능성이 있으므로 원본 파일을 접근 가능한 상태로 유지해야 합니다. 비용을 최소화하려면 단순히 90일 후 삭제하는 방식이 최적입니다. S3 Standard에 유지했다가 자동으로 만료(삭제)하는 라이프사이클 규칙이 가장 비용 효율적입니다. Glacier 전환은 추가 스토리지 비용을 발생시키므로 불필요합니다.\n\n【오답 체크】\n(A) Glacier 전환으로 인한 추가 비용과 복구 지연 시간 발생/버전 관리와 Object Lock은 불필요한 복잡성 추가/D옵션은 Intelligent-Tiering 비용 증가\n\n【시험 포인트】\"90일 후 삭제\"라는 단순 요구사항은 S3 라이프사이클 규칙 중 만료만으로 충분하며, 스토리지 클래스 전환은 불필요합니다. 비용 최소화가 핵심이므로 단순한 규칙을 선택하세요.",
    "en_q": "A media company uploads large video files to Amazon S3 for processing. After processing, the company needs to keep the original files for 90 days in case the files require reprocessing. After 90 days, the company can delete the files to reduce storage costs. The company stores the processed videos in a different S3 bucket. Which S3 Lifecycle configuration will meet these requirements for the original files MOST cost-effectively?",
    "en_opts": {
      "A": "Store the files in S3 Standard for 90 days. Transition the files to S3 Glacier Flexible Retrieval for long-term storage. Then expire the files.",
      "B": "Store the files in S3 Standard for 90 days. Enable versioning. Enable Object Lock on the files for 90 days. Then expire the files.",
      "C": "Store the files in S3 Standard for 90 days. Implement S3 Lifecycle management to expire the files.",
      "D": "Store the files in S3 Intelligent-Tiering for 90 days. Enable versioning. Add S3 Lifecycle management to expire the files."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401557-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 331,
    "question": "대학교는 학생 에세이를 분석하고 대학의 교과서에 정확한 인용을 포함한 개인화된 피드백을 제공하는 교육 애플리케이션을 개발 중입니다. 애플리케이션은 여러 언어로 에세이를 처리해야 합니다. 애플리케이션 응답은 강좌 자료의 특정 섹션에 대한 직접 참조를 포함해야 하며 학생이 선택한 언어여야 합니다. 어떤 솔루션이 가장 적은 운영 오버헤드로 이 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon OpenSearch Serverless를 사용하여 사용자 정의 벡터 데이터베이스를 구축합니다. 교과서 내용을 다국어 임베딩으로 저장합니다. Amazon Bedrock으로 응답을 생성할 때 AWS Lambda 함수를 만들어 데이터베이스를 쿼리합니다.",
      "B": "Amazon Bedrock Knowledge Bases에서 지식 기반을 만듭니다. 대학의 교과서로 구성합니다. 소스 인용과 함께 응답을 생성하도록 다국어 모델을 구성합니다.",
      "C": "Amazon Comprehend를 사용하여 에세이의 언어 및 주요 주제를 감지합니다. Amazon Kendra를 사용하여 관련 교과서 구절을 검색합니다. 교과서 구절을 피드백으로 형식화하는 AWS Lambda 함수를 작성합니다.",
      "D": "대학의 교과서에 대해 미세 조정된 사용자 정의 대규모 언어 모델(LLM)을 호스팅하도록 Amazon SageMaker를 사용하여 인용과 함께 개인화된 피드백을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】Bedrock Knowledge Bases, RAG(검색 증강 생성), 완전 관리형 서비스, 소스 인용, 다국어\n\n【정답 포인트】\"최소 운영 오버헤드\"가 핵심 요구사항입니다. Bedrock Knowledge Bases는 완전 관리형 RAG 솔루션으로 교과서 자동 임베딩, 벡터 인덱싱, 소스 인용 자동 추적을 모두 내장하고 있습니다. 다국어 모델 지원으로 언어별 응답도 기본 제공됩니다. 서버 관리가 전혀 필요 없으므로 운영 비용이 최소입니다.\n\n【오답 체크】\n(A) OpenSearch 벡터 DB 구축과 Lambda 연동으로 높은 운영 복잡도/C Comprehend-Kendra-Lambda 세 서비스 연동으로 통합 복잡성 증가/D SageMaker 미세 조정으로 훈련과 배포 관리 필요\n\n【시험 포인트】\"최소 운영 오버헤드+소스 인용+다국어\"조건은 Bedrock Knowledge Bases를 즉시 선택하세요. 완전 관리형 서비스가 운영 효율에서 우수하며, 여러 서비스 연동보다 통합 솔루션이 우선입니다.",
    "en_q": "A university is developing an educational application that analyzes student essays. The application provides personalized feedback with accurate citations to the university's textbooks. The application needs to process essays in multiple languages. Application responses must include direct references to specific sections in the course materials and must be in the student's selected language. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Build a custom vector database by using Amazon OpenSearch Serverless. Store textbook content as multilingual embeddings. Create an AWS Lambda function that queues the database when generating responses with Amazon Bedrock.",
      "B": "Create a knowledge base in Amazon Bedrock Knowledge Bases with the university's textbooks. Configure a multilingual model to generate responses with source citations.",
      "C": "Use Amazon Comprehend to detect the language and key topics in the essays. Use Amazon Kendra to search for relevant textbook passages. Create an AWS Lambda function that formats the textbook passages into feedback.",
      "D": "Use Amazon SageMaker to host a custom-trained large language model (LLM) that has been fine-tuned on the university's textbooks to generate personalized feedback with citations."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401558-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 332,
    "question": "회사는 Amazon S3 데이터에 대한 액세스를 제한하고 AWS 관리형 키를 사용하여 데이터를 암호화하는 솔루션이 필요합니다. 솔루션은 AWS Lambda 함수가 사용하는 데이터베이스 자격증명을 관리하고 자격증명을 자동으로 로테이션해야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "S3 버킷 정책을 사용하여 액세스를 제어합니다. Amazon S3 관리형 키(SSE-S3)를 사용하는 서버 측 암호화로 데이터를 암호화합니다. Lambda 환경 변수로 데이터베이스 자격증명을 저장합니다.",
      "B": "IAM 정책을 사용하여 액세스를 제어합니다. AWS KMS 키(SSE-KMS)를 사용하는 서버 측 암호화로 데이터를 암호화합니다. AWS Secrets Manager를 구성하여 Lambda 함수를 사용한 자격증명을 저장하고 자동으로 로테이션합니다.",
      "C": "S3 ACL을 사용하여 액세스를 제어합니다. AWS KMS 키(SSE-KMS)를 사용하는 서버 측 암호화로 데이터를 암호화합니다. AWS Systems Manager Parameter Store에 자격증명을 저장하고 Lambda 함수를 사용하여 자격증명을 자동으로 로테이션합니다.",
      "D": "IAM 정책을 사용하여 액세스를 제어합니다. Amazon S3 관리형 키(SSE-S3)를 사용하는 서버 측 암호화로 데이터을 암호화합니다. AWS Systems Manager Parameter Store에 자격증명을 저장합니다. Lambda 함수를 예약하여 자격증명을 로테이션하도록 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】Secrets Manager, 자동 로테이션, SSE-KMS, IAM 정책\n\n【정답 포인트】세 가지 요구사항을 모두 충족해야 합니다. IAM 정책은 S3 액세스 제어의 표준이고, SSE-KMS는 AWS 관리형 암호화로 키 제어가 가능합니다. 가장 중요한 것은 Secrets Manager가 자격증명 자동 로테이션을 네이티브 기능으로 지원한다는 점입니다. Lambda 함수 기반으로 자동화된 보안 관리가 가능합니다.\n\n【오답 체크】\n(A) Lambda 환경 변수에 자격증명 저장 시 평문 노출 보안 위험/C Parameter Store는 정적 저장만 가능하고 자동 로테이션 미지원/D SSE-S3는 키 로테이션 통제 불가능하고 Parameter Store는 자동 로테이션 부족\n\n【시험 포인트】\"자격증명 자동 로테이션\" 키워드는 즉시 Secrets Manager로 선택하세요. Parameter Store는 수동 로테이션만 지원하므로 시험에서는 항상 오답입니다. Secrets Manager의 자동 로테이션은 보안 관리의 핵심입니다.",
    "en_q": "A company needs a solution that restricts access to Amazon S3 data and encrypts the data by using AWS managed keys. The solution must manage database credentials that an AWS Lambda function uses and must rotate the credentials automatically. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use S3 bucket policies to control access. Use server-side encryption with Amazon S3 managed keys (SSE-S3) to encrypt the data. Store the database credentials as Lambda environment variables.",
      "B": "Use IAM policies to control access. Use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt the data. Configure AWS Secrets Manager to store and automatically rotate the credentials by using a Lambda function.",
      "C": "Use S3 ACLs to control access. Use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt the data. Store the credentials in AWS Systems Manager Parameter Store and automatically rotate the credentials by using a Lambda function.",
      "D": "Use IAM policies to control access. Use server-side encryption with Amazon S3 managed keys (SSE-S3) to encrypt the data. Store the credentials in AWS Systems Manager Parameter Store. Configure a scheduled Lambda function to rotate the credentials."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401559-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 333,
    "question": "회사는 애플리케이션에서 반정형 트랜잭션 데이터를 저장해야 합니다. 데이터베이스는 서버리스여야 합니다. 애플리케이션은 데이터를 드물게 쓰지만 자주 읽습니다. 애플리케이션은 밀리초 내에 데이터를 검색해야 합니다. 어떤 솔루션이 가장 적은 운영 오버헤드로 이 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon S3 Standard 버킷에 데이터를 저장합니다. S3 Transfer Acceleration을 활성화합니다.",
      "B": "Amazon S3 Apache Iceberg 테이블에 데이터를 저장합니다. S3 Transfer Acceleration을 활성화합니다.",
      "C": "Amazon RDS for MySQL 클러스터에 데이터를 저장합니다. 클러스터에 대해 RDS Optimized Reads를 구성합니다.",
      "D": "Amazon DynamoDB 테이블에 데이터를 저장합니다. DynamoDB Accelerator 캐시를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】DynamoDB, DAX(인메모리 캐시), 서버리스, 밀리초 응답시간\n\n【정답 포인트】세 조건이 조합되어 나타납니다. DynamoDB는 완전 서버리스이므로 프로비저닝 불필요하고, 반정형 데이터(JSON) 저장에 최적화되어 있습니다. DAX는 인메모리 캐시로 평균 1밀리초 응답시간을 제공하며, 드문 쓰기와 빈번한 읽기 액세스 패턴에 완벽합니다. 운영 오버헤드는 거의 없습니다.\n\n【오답 체크】\n(A) S3 Transfer Acceleration도 응답시간이 수백 밀리초 이상으로 밀리초 요구사항 불충족/B Iceberg는 데이터 레이크 OLAP용으로 OLTP 밀리초 응답 불가능/C RDS는 서버리스가 아니며 Aurora Serverless도 밀리초 보장 불가능\n\n【시험 포인트】\"밀리초+서버리스+반정형+높은 읽기\" 조건이면 DynamoDB+DAX를 우선 선택하세요. 초저지연은 인메모리 캐시 필수이고, DynamoDB가 이를 네이티브로 지원하는 유일한 AWS 데이터베이스입니다.",
    "en_q": "A company needs to store semi-structured transactional data for an application in a database. The database must be serverless. The application writes the data infrequently, but it reads the data frequently. The application must retrieve the data within milliseconds. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Store the data in an Amazon S3 Standard bucket. Enable S3 Transfer Acceleration.",
      "B": "Store the data in an Amazon S3 Apache Iceberg table. Enable S3 Transfer Acceleration.",
      "C": "Store the data in an Amazon RDS for MySQL cluster. Configure RDS Optimized Reads for the cluster.",
      "D": "Store the data in an Amazon DynamoDB table. Configure a DynamoDB Accelerator cache."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401560-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 334,
    "question": "회사는 Amazon Redshift 테이블에서 여러 번 일일 동시 분석 쿼리를 실행합니다. 쿼리에는 일일 3회 일관된 데이터 보기가 필요합니다. 회사는 쿼리가 실행되는 동안 차원 테이블을 업데이트하는 추출, 변환 및 로드(ETL) 작업을 실행합니다. 회사는 ETL 작업 중 테이블 수준 잠금으로 인해 쿼리가 발생하는 것을 발견했습니다. 회사의 현재 솔루션은 피크 처리 시간 동안 쿼리 시간 초과 및 교착 상태를 경험하므로 분석 보고 및 주문형 분석에 영향을 미칩니다. 어떤 솔루션이 이 문제를 해결합니까?",
    "options": {
      "A": "분석 쿼리에 Amazon Redshift 구체화된 뷰를 사용합니다. 잠금 경합을 최소화하기 위해 ETL 작업을 사용량이 적은 시간으로 예약합니다.",
      "B": "Amazon Redshift 연합 쿼리를 구성하여 원본 데이터에 직접 액세스합니다. 읽기 복제본을 사용하여 분석 워크로드를 ETL 작업과 분리합니다.",
      "C": "분석 워크로드에 Amazon Redshift Spectrum을 사용하여 Amazon S3의 데이터를 쿼리합니다. Amazon Redshift 테이블의 ETL 작업을 트랜잭션 격리로 유지합니다.",
      "D": "ETL 및 분석 워크로드용으로 별도의 Amazon Redshift 클러스터를 배포합니다. 교차 데이터베이스 쿼리 및 데이터 공유를 사용하여 데이터 일관성을 유지합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】테이블 잠금(table-level lock), 동시성 경합, 데이터 공유, 클러스터 분리\n\n【정답 포인트】동시성 경합의 근본 원인을 제거하는 것이 핵심입니다. 별도의 Redshift 클러스터를 구성하면 ETL과 분석 쿼리가 서로 다른 잠금 영역에서 독립적으로 실행되어 테이블 잠금 경합이 완전히 해소됩니다. 교차 데이터베이스 쿼리와 데이터 공유 기능으로 원본 데이터에 접근하면서도 복제 오버헤드 없이 데이터 일관성을 유지합니다.\n\n【오답 체크】\n(A) 구체화된 뷰와 오프피크 스케줄은 시간 제한일 뿐 실제 잠금 문제 해결 불가/B Redshift가 읽기 복제본 미지원으로 구현 불가능/C Spectrum은 S3 데이터용이므로 Redshift 내부 테이블 잠금 경합 미해결\n\n【시험 포인트】\"동시성 문제+테이블 잠금\" 키워드는 리소스 분리(클러스터 분리)를 즉시 고려하세요. Redshift 데이터 공유는 최신 기능이며 시험에서 \"최고 성능\" 솔루션으로 자주 출제됩니다.",
    "en_q": "A company runs concurrent analytical queries on Amazon Redshift tables multiple times each day. The queries require consistent data views three times each day. The company runs extract, transform, and load (ETL) operations that update dimension tables while the queries run. The company has noticed that the queries cause table-level locks during the ETL operations. The company's current solution experiences query timeouts and deadlocks during peak processing hours, which affects analytical reporting and on-demand analysis. Which solution will fix this issue?",
    "en_opts": {
      "A": "Use Amazon Redshift materialized views for analytical queries. Schedule ETL operations during off-peak hours to minimize lock contention.",
      "B": "Configure Amazon Redshift federated queries to access source data directly. Use read replicas to isolate analytical workloads from ETL operations.",
      "C": "Use Amazon Redshift Spectrum to query data in Amazon S3 for analytical workloads. Maintain ETL operations on Amazon Redshift tables with transaction isolation.",
      "D": "Deploy separate Amazon Redshift clusters for ETL and analytics workloads. Use cross-database queries and data sharing to maintain data consistency."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401561-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 335,
    "question": "회사는 높은 빈도의 센서 원격 측정을 Amazon S3 데이터 레이크로 집계합니다. 각 센서 스트림은 매시간 구조화된 레코드를 내보냅니다. 레코드에는 센서 카테고리, 유닛 ID, 운영 상태, 이벤트 타임스탬프 및 사이트 위치와 같은 메타데이터가 포함됩니다. 데이터는 매일 수백만 개의 레코드로 확장됩니다. 회사는 센서 카테고리 특화 성능 인사이트를 발견하기 위해 매일 복잡한 쿼리를 실행합니다. 어떤 솔루션이 가장 빠른 쿼리 실행 시간으로 이 요구사항을 충족합니까?",
    "options": {
      "A": "데이터를 Apache ORC 형식으로 유지합니다. 날짜별로 데이터를 분할합니다. 센서 카테고리별로 데이터를 정렬합니다.",
      "B": "데이터를 CSV 형식으로 유지합니다. 날짜별로 데이터를 분할합니다. 운영 상태별로 데이터를 정렬합니다.",
      "C": "데이터를 Parquet 형식으로 유지합니다. 센서 카테고리별로 데이터를 분할합니다. 날짜별로 데이터를 정렬합니다.",
      "D": "데이터를 CSV 형식으로 유지합니다. 날짜별로 데이터를 분할합니다. 센서 카테고리별로 데이터를 정렬합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】Parquet 컬럼 지향 포맷, 파티셔닝, 분할 프루닝\n\n【정답 포인트】센서 카테고리별 복잡한 쿼리의 성능을 극대화하는 것이 핵심입니다. Parquet의 컬럼 압축으로 전송 데이터량을 최소화하고, 센서 카테고리별 분할은 \"센서 카테고리 특화 쿼리\"와 정렬되어 파티션 프루닝을 극대화합니다. 같은 카테고리만 읽으므로 불필요한 데이터 스캔이 제거되고, 날짜별 정렬로 시계열 데이터가 최적화됩니다.\n\n【오답 체크】\n(A) ORC는 S3+Athena 조합에서 Parquet보다 선호도 낮음/B,D CSV는 전체 행 읽어야 하므로 가장 느리고 비효율적/B는 추가로 운영 상태별 정렬로 센서 카테고리 쿼리에 부적합\n\n【시험 포인트】\"S3 데이터 레이크+복잡한 쿼리+특정 컬럼 필터\"면 Parquet+주요 필터 컬럼으로 분할을 선택하세요. 분할 전략이 S3 쿼리 성능의 핵심이며, 주요 필터 컬럼 분할이 나머지 컬럼 정렬과 무관하게 성능을 결정합니다.",
    "en_q": "A company aggregates high-frequency sensor telemetry into an Amazon S3 data lake. Each sensor stream emits structured records every hour. The records include metadata such as sensor category, unit ID, operational state, event timestamp, and site location. The data scales up to millions of records each day. The company runs complex queries each day to uncover performance insights specific to sensor categories. Which solution will meet these requirements with the FASTEST query execution time?",
    "en_opts": {
      "A": "Persist the data in Apache ORC format. Partition the data by date. Sort the data by sensor category.",
      "B": "Persist the data in CSV format. Partition the data by date. Sort the data by operational status.",
      "C": "Persist the data in Parquet format. Partition the data by sensor category. Sort the data by date",
      "D": "Persist the data in CSV format. Partition the data by date. Sort the data by sensor category."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401562-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 336,
    "question": "회사는 Amazon Redshift를 사용하여 현재 날짜의 주문 트랜잭션을 저장합니다. 회사는 이전 주문 데이터를 포함하는 주문 테이블이 있습니다. 회사는 또한 새로운 또는 업데이트된 주문 레코드를 포함하는 스테이징 테이블이 있습니다. 회사는 주문 테이블에서 오래된 레코드를 제거하고 스테이징 테이블의 최신 데이터를 주문 테이블에 삽입해야 합니다. 여러 다운스트림 애플리케이션은 주문 테이블이 최신 정보를 표시해야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon Redshift Spectrum을 사용하여 주문 테이블에서 오래된 레코드를 삭제하고 스테이징 테이블의 레코드를 주문 테이블에 삽입합니다.",
      "B": "주문 테이블과 스테이징 테이블을 Amazon S3으로 언로드합니다. Amazon Athena를 사용하여 S3에서 오래된 주문 테이블 데이터를 삭제하고 새 스테이징 테이블 데이터를 삽입합니다. 주문 S3 테이블을 주문 Amazon Redshift 테이블로 복사합니다.",
      "C": "Amazon Athena 연합 쿼리를 사용하여 주문 테이블에서 오래된 레코드를 읽습니다. 오래된 레코드를 삭제하고 스테이징 테이블의 레코드를 주문 테이블에 삽입합니다.",
      "D": "주문 테이블에서 오래된 레코드를 삭제하고 스테이징 테이블에서 새 레코드를 삽입하는 Amazon Redshift 저장 프로시저를 작성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】저장 프로시저, 트랜잭션 원자성, UPSERT 패턴\n\n【정답 포인트】Redshift 테이블의 UPDATE/DELETE 작업에 가장 직접적이고 효율적인 방식입니다. 저장 프로시저 내에서 DELETE와 INSERT를 단일 트랜잭션으로 실행하면 원자성이 보장되어 부분 업데이트로 인한 데이터 불일치가 발생하지 않습니다. 다운스트림 애플리케이션이 항상 일관된 데이터를 읽을 수 있으며, Redshift 내부 실행이므로 네트워크 왕복이 없어 성능이 최고입니다.\n\n【오답 체크】\n(A) Spectrum은 S3 데이터용 쿼리 엔진이므로 Redshift 테이블 직접 수정 불가능/B Unload-Athena수정-Copy 다단계 프로세스로 과도한 라운드 트립/C Federated Query는 읽기 쿼리 최적화일 뿐 쓰기/삭제 성능 부족\n\n【시험 포인트】\"Redshift 테이블 업데이트+일관성 보장\" 키워드면 저장 프로시저를 우선 선택하세요. Spectrum, Athena, Federated는 모두 읽기 워크로드용이며, Redshift 내부 데이터 수정은 네이티브 저장 프로시저가 최고 성능입니다.",
    "en_q": "A company uses Amazon Redshift to store order transactions from the current day. The company has an orders table that contains the previous order data. The company also has a staging table that contains new or updated order records. The company needs to remove stale records from the orders table and insert the most recent data in the orders table from the staging table. Several downstream applications need the orders table to display up-to-date information. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon Redshift Spectrum to delete stale records from the orders table and insert records from the staging table into the orders table.",
      "B": "Unload the orders table and the staging table to Amazon S3. Delete stale orders table data and insert new staging table data in Amazon S3 by using Amazon Athena. Copy the orders S3 table to the orders Amazon Redshift table.",
      "C": "Use Amazon Athena federated queries to read stale records from the orders table. Delete the stale records and insert the records from the staging table into the orders table.",
      "D": "Write an Amazon Redshift stored procedure that deletes the stale records from the orders table and inserts new records from the staging table."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401563-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 337,
    "question": "회사는 Amazon Data Firehose를 사용하는 로그 스트리밍 파이프라인을 개발 중입니다. 파이프라인은 Amazon CloudWatch Logs 데이터를 Amazon S3 버킷으로 스트리밍합니다. 회사의 분석팀은 감사에서 데이터를 사용해야 합니다. 파이프라인은 팀의 분석에 호환되는 형식으로 관련 로그만 S3 버킷으로 전달해야 합니다. 어떤 솔루션이 이 요구사항을 충족하고 신뢰할 수 있는 성능을 유지합니까?",
    "options": {
      "A": "S3 버킷 규칙을 설정하여 특정 타임스탬프 범위의 로그만 허용합니다. 로그 파일을 원하는 형식으로 변환하는 AWS Lambda 함수를 만듭니다. S3 트리거를 사용하여 Lambda 함수를 호출합니다.",
      "B": "CloudWatch Logs 로그 그룹에서 구독 필터를 만들어 Firehose 전달 스트림을 대상으로 지정합니다. 로그 파일을 원하는 형식으로 변환하는 AWS Lambda 함수를 만듭니다. Firehose가 Lambda 함수를 호출하도록 구성합니다.",
      "C": "CloudWatch Logs 로그 그룹에서 구독 필터를 만듭니다. Firehose 스트림을 모니터링하도록 필터를 구성합니다. 로그 파일을 원하는 형식으로 변환하는 AWS Lambda 함수를 만듭니다. Firehose가 Lambda 함수를 호출하도록 구성합니다.",
      "D": "CloudWatch Logs 로그 그룹에 태그를 지정합니다. 태그된 로그 그룹만 수집하도록 Firehose를 구성합니다. 원하는 형식으로 출력을 작성하도록 Firehose를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】구독 필터, CloudWatch Logs, Firehose 데이터 변환\n\n【정답 포인트】올바른 파이프라인 아키텍처를 구성하는 것이 핵심입니다. 구독 필터는 CloudWatch에서 관련 로그만 사전 필터링하므로 불필요한 데이터 전송이 제거됩니다. Firehose는 이를 S3로 스트리밍하고, Firehose의 내장 Lambda 변환 기능(Data Transformation)이 로그를 분석팀이 원하는 형식으로 자동 변환합니다. 전체 흐름이 신뢰성 높은 스트리밍으로 최적화되어 있습니다.\n\n【오답 체크】\n(A) S3에 도착한 후 필터링하므로 불필요한 데이터가 이미 S3에 저장되어 비효율적/C \"Firehose 스트림 모니터링\"은 불명확하며 표준 아키텍처 아님/D CloudWatch Logs가 태그 기반 필터를 지원하지 않으므로 불가능\n\n【시험 포인트】\"CloudWatch→Firehose\" 연결이면 구독 필터를 우선 선택하세요. Firehose의 Data Transformation(Lambda 변환)은 내장 기능이며 배치 처리로 안정성이 높습니다. S3 후처리는 데이터 낭비이고, 태그 필터는 미지원 기능입니다.",
    "en_q": "A company is developing a log streaming pipeline that uses Amazon Data Firehose. The pipeline streams Amazon CloudWatch Logs data to an Amazon S3 bucket. The company's analytics team needs to use the data in audits. The pipeline must deliver only the relevant logs to the S3 bucket in a compatible format for the team's analysis. Which solution will meet these requirements and maintain reliable performance?",
    "en_opts": {
      "A": "Set the S3 bucket rules to allow logs from only specific timestamp ranges. Create an AWS Lambda function that converts the log files to the desired format. Use an S3 trigger to invoke the Lambda function.",
      "B": "Create a subscription filter in the CloudWatch Logs log group that uses the Firehose delivery stream as the destination. Create an AWS Lambda function that converts the log files to the desired format. Configure Firehose to invoke the Lambda function.",
      "C": "Create a subscription filter in the CloudWatch Logs log group. Configure the filter to monitor the Firehose stream. Create an AWS Lambda function to convert the log files to the desired format. Configure Firehose to invoke the Lambda function.",
      "D": "Tag the CloudWatch Logs log groups that the analytics team needs. Configure Firehose to ingest only the tagged log groups. Configure Firehose to write the output in the desired format."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401564-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 338,
    "question": "미디어 회사는 회사 웹 사이트 및 모바일 앱 전반의 고객 활동 이벤트를 처리하기 위한 실시간 분석 파이프라인을 구축하고 싶습니다. 회사는 최소 지연 시간으로 수백만 개의 이벤트를 수집하는 솔루션을 구축하고 싶습니다. 솔루션은 데이터가 손실되지 않도록 확장 가능하고 내구성이 있어야 합니다. 어떤 솔루션이 가장 비용 효율적인 방식으로 이 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon Kinesis Data Streams 파이프라인을 설정하여 데이터를 수집하고, AWS Lambda 함수를 사용하여 데이터를 처리하고, 결과를 분석을 위해 Amazon Redshift에 저장합니다.",
      "B": "10분마다 Amazon S3에서 사용자 상호 작용 로그를 가져오도록 AWS Glue 작업을 예약합니다. AWS Glue 작업을 구성하여 데이터를 변환하고 분석을 위해 Amazon Redshift에 저장합니다.",
      "C": "Amazon S3 Event Notifications를 구성하여 모든 새 상호 작용 로그 파일에 대해 AWS Lambda 함수를 호출합니다. 결과를 분석을 위해 Amazon Redshift에 저장합니다.",
      "D": "Amazon Managed Streaming for Apache Kafka(Amazon MSK) 클러스터를 배포합니다. 자체 관리 소비자를 사용하여 실시간으로 데이터를 처리하고 배포합니다. 향상된 분석을 위해 Amazon Redshift와 통합합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】Kinesis Data Streams, 실시간 스트리밍, 밀리초 지연\n\n【정답 포인트】\"최소 지연+확장 가능+비용 효율\" 세 조건을 균형있게 충족합니다. Kinesis Data Streams는 실시간 스트리밍으로 밀리초 지연을 보장하고, 자동으로 수백만 이벤트/초를 처리합니다. 3개 가용영역 복제로 내구성을 보장하고, Lambda는 서버리스 처리로 자동 확장하며 호출 기반 청구로 비용 효율적입니다. Redshift는 분석 저장소입니다.\n\n【오답 체크】\n(B) 10분 폴링으로 실시간 아님/C S3 Event Notifications의 로그 파일 도착 지연으로 실시간 수집 불가능/D MSK는 초고성능이나 자체 관리 소비자로 인해 운영 복잡도와 비용이 높아 비용 효율 위배\n\n【시험 포인트】\"실시간+최소 지연+수백만 이벤트+비용 효율\" 조건면 Kinesis Data Streams를 우선 선택하세요. MSK는 초고성능 필요 시에만 선택하며, 폴링은 분 단위 지연이므로 실시간이 아닙니다. Kinesis는 AWS의 기본 스트리밍 선택지입니다.",
    "en_q": "A media company wants to build a real-time analytics pipeline to process customer activity events across the company's website and mobile app. The company wants to build a solution to ingest millions of events with minimum latency. The solution must be scalable and durable enough so that no data is lost. Which solution will meet these requirements in the MOST cost-effective way?",
    "en_opts": {
      "A": "Set up an Amazon Kinesis Data Streams pipeline to ingest data, process the data by using AWS Lambda functions, and store the results in Amazon Redshift for analytics.",
      "B": "Schedule an AWS Glue job to fetch user interaction logs every 10 minutes from Amazon S3. Configure the AWS Glue job to transform and store the data in Amazon Redshift for analytics.",
      "C": "Configure Amazon S3 Event Notifications to invoke an AWS Lambda function to process every new interaction log file. Store the result in Amazon Redshift for analytics.",
      "D": "Deploy an Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster. Use self-managed consumers to process and distribute data in real-time. Integrate with Amazon Redshift for enhanced analytics."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401565-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 339,
    "question": "회사는 Amazon S3 버킷에 대규모 데이터 세트를 저장합니다. 데이터 엔지니어는 Amazon Athena를 사용하여 데이터 세트에서 복잡한 쿼리를 자주 실행합니다. 데이터 엔지니어는 쿼리 성능을 최적화하고 동일한 매개변수로 여러 번 실행되는 쿼리의 비용을 최적화해야 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "Athena 쿼리를 실행하기 전에 데이터 세트를 JSON 형식으로 변환합니다.",
      "B": "Athena 쿼리를 실행하기 전에 데이터를 사전 처리하도록 Amazon EMR을 사용합니다.",
      "C": "Athena 워크그룹에서 쿼리 결과 재사용 설정을 구성합니다.",
      "D": "Amazon Redshift Spectrum을 사용하여 Amazon S3의 데이터를 쿼리합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】Athena 쿼리 결과 재사용, 캐싱, 동일 매개변수\n\n【정답 포인트】\"동일 매개변수로 여러 번\" 쿼리가 핵심 요구사항입니다. 쿼리 결과 재사용을 활성화하면 첫 실행 시 풀 스캔(비용 발생)을 하고, 이후 동일 쿼리는 캐시된 결과를 밀리초 내에 반환하므로 스캔 비용이 완전히 제거됩니다. TTL을 설정하여 캐시 유효 기간을 제어할 수 있으며, 가장 간단하고 효과적한 최적화입니다.\n\n【오답 체크】\n(A) JSON 변환은 포맷 개선일 뿐 반복 쿼리 최적화 아님/B EMR 사전 처리는 복잡하고 추가 비용 발생/D Redshift Spectrum은 다른 쿼리 엔진이므로 Athena 결과 재사용 활용 불가능\n\n【시험 포인트】\"동일 매개변수로 여러 번\" 쿼리 키워드면 쿼리 결과 재사용을 우선 선택하세요. Athena의 기본 최적화 기능이며 Workgroup 설정으로 5분 안에 활성화 가능합니다. 파티셔닝이나 포맷 변경보다 즉각적인 성능 향상을 제공합니다.",
    "en_q": "A company stores a large dataset in an Amazon S3 bucket. A data engineer frequently runs complex queries on the dataset by using Amazon Athena. The data engineer needs to optimize query performance and optimize costs for queries that are run multiple times with the same parameters. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Convert the dataset to JSON format before running Athena queries.",
      "B": "Use Amazon EMR to pre-process the data before running Athena queries.",
      "C": "Configure query result reuse settings in the Athena workgroup.",
      "D": "Use Amazon Redshift Spectrum to query the data in Amazon S3."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401566-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 340,
    "question": "회사는 Amazon S3 버킷에 원본 클릭스트림 데이터를 저장합니다. 회사는 사용자 정의 내부 라이브러리에 의존하는 복잡한 PySpark 변환을 사용하여 매일 데이터를 처리해야 합니다. 데이터가 변환된 후 회사는 분석을 위해 Amazon Redshift에 데이터를 저장해야 합니다. 솔루션은 대규모 데이터 워크로드를 처리하기 위해 매우 확장 가능해야 합니다. 어떤 솔루션이 가장 적은 운영 오버헤드로 이 요구사항을 충족합니까?",
    "options": {
      "A": "AWS Glue Studio를 사용하여 PySpark 작업을 구축하고 예약합니다. 사용자 정의 라이브러리를 포함하는 AWS Glue 데이터 연결을 구성합니다.",
      "B": "사용자 정의 라이브러리가 포함된 사용자 정의 AMI를 사용하는 Amazon EC2 Auto Scaling 그룹을 사용합니다. PySpark 애플리케이션을 실행합니다.",
      "C": "Amazon EMR을 사용하여 PySpark 작업을 실행합니다. 부트스트랩 작업을 사용하여 사용자 정의 라이브러리를 설치합니다.",
      "D": "PySpark 코드를 실행하도록 Amazon SageMaker Processing 작업을 사용합니다. 네이티브 SageMaker 라이브러리를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】AWS Glue Studio, 서버리스 ETL, Glue 데이터 연결\n\n【정답 포인트】\"최소 운영 오버헤드\"를 가장 잘 충족합니다. Glue Studio는 완전 관리형 서버리스 서비스로 인프라 프로비저닝이 불필요하고, 자동으로 수백만 레코드를 처리합니다. Glue 데이터 연결로 사용자 정의 라이브러리 의존성을 간단히 관리하며, 스케줄링도 내장되어 있습니다. Redshift 로더도 기본 지원되어 ETL 파이프라인 전체를 Glue로 통합할 수 있습니다.\n\n【오답 체크】\n(B) EC2 Auto Scaling은 AMI관리, 스케일링 정책, 패치 관리로 높은 운영 복잡도/C EMR은 클러스터 프로비저닝, 부트스트랩 스크립트, 클러스터 수명 주기 관리 필요/D SageMaker Processing은 \"네이티브 라이브러리만\" 지원이므로 사용자 정의 라이브러리 제약\n\n【시험 포인트】\"최소 운영 오버헤드+사용자 정의 라이브러리+확장 가능한 PySpark\"면 Glue Studio를 우선 선택하세요. Glue 데이터 연결은 의존성 관리를 완전 자동화하며, 서버리스 확장으로 대규모 데이터 처리를 지원합니다.",
    "en_q": "A company stores raw clickstream data in an Amazon S3 bucket. The company needs a solution to process the data every day by using complex PySpark transformations that rely on custom internal libraries. After the data is transformed, the company must store the data in Amazon Redshift for analytics. The solution must be highly scalable to handle large data workloads. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use AWS Glue Studio to build and schedule PySpark jobs. Configure an AWS Glue data connection that includes the custom libraries.",
      "B": "Use Amazon EC2 Auto Scaling groups with a custom AMI that contains the custom libraries to run a PySpark application.",
      "C": "Use Amazon EMR to run PySpark jobs. Use bootstrap actions to install the custom libraries",
      "D": "Use Amazon SageMaker Processing jobs to run PySpark code that uses native SageMaker libraries."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401567-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  },
  {
    "id": 341,
    "question": "애플리케이션은 관리되는 런타임으로 구성된 AWS Lambda 함수를 사용합니다. Lambda 함수는 기본 Amazon CloudWatch Logs 로그 그룹에 로그를 성공적으로 작성합니다. 데이터 엔지니어는 애플리케이션 로그에 대해 ERROR 수준 로그만 표시하고 시스템 로그에 대해 WARN 수준 로그만 표시하도록 로깅 동작을 수정하려고 합니다. 어떤 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "Lambda 실행 역할에 추가 권한을 추가합니다.",
      "B": "Lambda 함수 코드에서 로그 수준을 ERROR로 설정합니다.",
      "C": "Lambda 함수를 JSON 로그 형식을 사용하도록 구성합니다.",
      "D": "Lambda 함수를 사용자 정의 로그 그룹으로 로그를 보내도록 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】Lambda 구조화된 로깅, JSON 로그 형식, CloudWatch Logs Insights\n\n【정답 포인트】\"애플리케이션 로그(ERROR만)+시스템 로그(WARN만)\"라는 로그 타입과 레벨 두 기준을 동시에 필터링해야 합니다. JSON 로그 형식으로 구성하면 각 로그가 {\"level\":\"ERROR\",\"type\":\"application\"} 형식의 메타데이터를 포함하게 되고, CloudWatch Logs Insights에서 \"filter level='ERROR' and type='application'\" 쿼리로 원하는 로그만 추출할 수 있습니다.\n\n【오답 체크】\n(A) IAM 권한은 로그 필터링과 무관하며 로그 레벨 제어 불가/B 함수 코드 수준에서는 관리되는 런타임의 시스템 로그 제어 불가능하며 타입 분리 안 됨/D 사용자 정의 로그 그룹은 수집 대상만 변경할 뿐 레벨별 필터링 미구현\n\n【시험 포인트】\"로그 수준 필터링+서로 다른 레벨(ERROR vs WARN)+로그 타입 구분(애플리케이션 vs 시스템)\"면 JSON 로그 형식을 선택하세요. 구조화된 로깅은 CloudWatch Logs Insights의 강력한 쿼리 기능을 활용하며 Lambda의 기본 기능이므로 추가 구현 불필요합니다.",
    "en_q": "An application uses an AWS Lambda function that is configured with managed runtimes. The Lambda function successfully writes logs to the default Amazon CloudWatch Logs log group. A data engineer wants to modify the logging behavior to show only ERROR level logs for application logs and WARN level logs for system logs. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Add additional permissions to the Lambda execution role.",
      "B": "Set the log level to ERROR in the Lambda function code.",
      "C": "Configure the Lambda function to use the JSON log format.",
      "D": "Configure the Lambda function to send logs to a custom log group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/401568-exam-aws-certified-data-engineer-associate-dea-c01-topic-1/"
  }
];
