window.MLA_QUESTIONS = [
  {
    "id": 1,
    "question": "한 회사가 Amazon SageMaker를 사용해 웹 기반 AI 애플리케이션을 구축하고 있다. 이 앱은 ML 실험, 학습, 중앙 모델 레지스트리, 모델 배포, 모델 모니터링 기능을 제공해야 한다. ML 라이프사이클 전반에서 학습 데이터의 안전하고 격리된 사용이 보장되어야 하며, 학습 데이터는 Amazon S3에 저장돼 있다. 회사는 애플리케이션의 여러 모델 버전을 관리하기 위해 중앙 모델 레지스트리를 사용해야 한다. 운영 부담(operational overhead)이 가장 적은 방법은?",
    "options": {
      "A": "모델마다 별도의 Amazon Elastic Container Registry (ECR) 레포지토리를 생성한다.",
      "B": "Amazon ECR을 사용하고 모델 버전마다 고유 태그를 부여한다.",
      "C": "SageMaker Model Registry와 model group을 사용해 모델을 카탈로그화한다.",
      "D": "SageMaker Model Registry를 사용하고 모델 버전마다 고유 태그를 부여한다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Registry — ML 모델의 중앙 카탈로그. 버전 관리·승인·배포 워크플로 제공.\n▸ Model Group — 동일한 목적을 가진 모델 버전들의 묶음. Model Group에 새 Model Package가 추가될 때마다 버전 번호가 1,2,3…로 자동 증가.\n\n【정답 포인트】\n▸ \"중앙 모델 레지스트리\"·\"여러 버전 관리\"·\"LEAST operational overhead\" → Model Registry + Model Group이 네이티브 솔루션.\n▸ Model Group은 자동 버전 관리를 제공하므로 태그로 수작업 관리할 필요가 없음.\n\n【오답 체크】\n(A) ECR은 컨테이너 이미지 저장소이지 모델 레지스트리가 아님. 운영 부담 큼.\n(B) 같은 이유로 ECR은 부적절.\n(D) Model Registry를 사용하더라도 Model Group 없이 태그만으로 관리하면 수작업 부담 발생 → Group이 정답.\n\n【시험 포인트】\n\"central model registry\" + \"versioning\" + \"LEAST operational overhead\" = SageMaker Model Registry + Model Groups.",
    "en_q": "A company is building a web-based AI application by using Amazon SageMaker. The application will provide the following capabilities and features: ML experimentation, training, a central model registry, model deployment, and model monitoring. The application must ensure secure and isolated use of training data during the ML lifecycle. The training data is stored in Amazon S3. The company needs to use the central model registry to manage different versions of models in the application. Which action will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create a separate Amazon Elastic Container Registry (Amazon ECR) repository for each model.",
      "B": "Use Amazon Elastic Container Registry (Amazon ECR) and unique tags for each model version.",
      "C": "Use the SageMaker Model Registry and model groups to catalog the models.",
      "D": "Use the SageMaker Model Registry and unique tags for each model version."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152098-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 2,
    "question": "한 회사가 Amazon SageMaker를 사용해 웹 기반 AI 애플리케이션을 구축하고 있다. 앱은 ML 실험, 학습, 중앙 모델 레지스트리, 모델 배포, 모델 모니터링 기능을 제공해야 한다. 학습 데이터는 Amazon S3에 저장돼 있고, 회사는 연속적인 학습 작업(consecutive training jobs)을 실험하고 있다. 이 작업들의 인프라 시작 시간(startup time)을 최소화하려면?",
    "options": {
      "A": "Managed Spot Training을 사용한다.",
      "B": "SageMaker managed warm pools를 사용한다.",
      "C": "SageMaker Training Compiler를 사용한다.",
      "D": "SageMaker distributed data parallelism (SMDDP) 라이브러리를 사용한다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SageMaker Managed Warm Pool — 학습 작업 완료 후 인스턴스를 일정 시간 유지하여 다음 학습 작업에서 재사용. 프로비저닝(인프라 준비) 시간을 크게 단축.\n▸ Managed Spot Training — 비용 절감(최대 90%)용. 시작 시간과는 무관.\n▸ Training Compiler — 학습 성능(GPU 활용률) 최적화용. 시작 시간과는 무관.\n▸ SMDDP — 다중 인스턴스 분산 학습 속도 가속용.\n\n【정답 포인트】\n▸ \"연속 학습 작업 startup time 최소화\" → Warm Pool이 정확한 네이티브 기능.\n▸ 기본적으로 학습 작업은 시작 시 새 인스턴스 프로비저닝으로 수 분 소요 → Warm Pool 사용 시 이 시간을 절약.\n\n【오답 체크】\n(A) Spot은 비용 절감, 시작 시간 단축 아님.\n(C) Training Compiler는 학습 최적화, 인프라 시작 시간과 무관.\n(D) SMDDP는 분산 학습 가속, 시작 시간과 무관.\n\n【시험 포인트】\n\"startup time\" + \"consecutive training jobs\" = Warm Pool.\n\"reduce training cost\" = Spot.\n\"optimize training compute\" = Training Compiler.\n\"speed up training across instances\" = SMDDP.",
    "en_q": "A company is building a web-based AI application by using Amazon SageMaker. The application will provide the following capabilities and features: ML experimentation, training, a central model registry, model deployment, and model monitoring. The training data is stored in Amazon S3. The company is experimenting with consecutive training jobs. How can the company MINIMIZE infrastructure startup times for these jobs?",
    "en_opts": {
      "A": "Use Managed Spot Training.",
      "B": "Use SageMaker managed warm pools.",
      "C": "Use SageMaker Training Compiler.",
      "D": "Use the SageMaker distributed data parallelism (SMDDP) library."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152135-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 3,
    "question": "한 회사가 Amazon SageMaker를 사용해 웹 기반 AI 애플리케이션을 구축 중이다. 앱은 ML 실험, 학습, 중앙 모델 레지스트리, 모델 배포, 모델 모니터링 기능을 제공해야 한다. 학습 데이터는 S3에 저장돼 있다. 회사는 승인된 모델만 운영 엔드포인트(production endpoints)에 배포될 수 있도록 수동 승인 기반 워크플로를 구현해야 한다. 어떤 솔루션이 요구사항을 만족하는가?",
    "options": {
      "A": "SageMaker Experiments를 사용해 모델 등록 중 승인 프로세스를 지원한다.",
      "B": "중앙 모델 레지스트리에서 SageMaker ML Lineage Tracking을 사용하고, 승인 프로세스용 tracking entity를 만든다.",
      "C": "SageMaker Model Monitor로 모델 성능을 평가하고 승인을 관리한다.",
      "D": "SageMaker Pipelines를 사용한다. 모델 버전이 등록되면 AWS SDK로 승인 상태를 \"Approved\"로 변경한다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Registry 승인 상태 — 각 Model Package(버전)는 \"PendingManualApproval\", \"Approved\", \"Rejected\" 상태를 가짐.\n▸ SageMaker Pipelines — ML 워크플로 오케스트레이터. condition step 또는 외부 AWS SDK 호출로 승인 상태를 변경 가능.\n▸ ML Lineage Tracking — 아티팩트·데이터셋·작업 간의 계보 추적. 승인 워크플로와 무관.\n▸ Model Monitor — 배포된 모델의 드리프트 탐지. 승인 워크플로와 무관.\n▸ SageMaker Experiments — 실험 비교·추적용. 승인 워크플로와 무관.\n\n【정답 포인트】\n▸ \"수동 승인 기반 워크플로\" = Model Registry의 Approval Status + Pipelines 통합.\n▸ Pipelines에서 학습 후 모델 버전이 등록되면, 외부 검토 후 AWS SDK로 상태를 Approved로 업데이트 → 배포 단계가 이 상태를 조건으로 트리거.\n\n【오답 체크】\n(A) Experiments는 실험 추적 도구로 승인 기능 없음.\n(B) Lineage Tracking은 계보 가시성용, 승인 플로 아님.\n(C) Model Monitor는 운영 중 드리프트 감지용이지 배포 전 승인용 아님.\n\n【시험 포인트】\n\"manual approval\" + \"deployment\" = SageMaker Pipelines + Model Registry Approval Status.\n배포 전 체크포인트로서의 승인 = Pipelines의 정석 패턴.",
    "en_q": "A company is building a web-based AI application by using Amazon SageMaker. The application will provide the following capabilities and features: ML experimentation, training, a central model registry, model deployment, and model monitoring. The training data is stored in Amazon S3. The company must implement a manual approval-based workflow to ensure that only approved models can be deployed to production endpoints. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Use SageMaker Experiments to facilitate the approval process during model registration.",
      "B": "Use SageMaker ML Lineage Tracking on the central model registry. Create tracking entities for the approval process.",
      "C": "Use SageMaker Model Monitor to evaluate the performance of the model and to manage the approval.",
      "D": "Use SageMaker Pipelines. When a model version is registered, use the AWS SDK to change the approval status to \"Approved.\""
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152136-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 4,
    "question": "회사가 Amazon SageMaker를 사용하여 웹 기반 AI 애플리케이션을 구축하고 있습니다. 애플리케이션은 ML 실험, 학습, 중앙 모델 레지스트리, 모델 배포 및 모델 모니터링 기능을 제공합니다. ML 라이프사이클 동안 학습 데이터의 안전하고 격리된 사용을 보장해야 합니다. 학습 데이터는 Amazon S3에 저장되어 있습니다. 회사는 실시간 endpoint로 배포된 모델의 bias drift를 모니터링하기 위해 온디맨드 워크플로우를 실행해야 합니다. 어떤 조치가 이 요구사항을 충족할까요?",
    "options": {
      "A": "애플리케이션을 구성하여 SageMaker Clarify job을 실행하는 AWS Lambda 함수를 호출합니다.",
      "B": "sagemaker-model-monitor-analyzer 기본 제공 SageMaker 이미지를 가져오는 AWS Lambda 함수를 호출합니다.",
      "C": "AWS Glue Data Quality를 사용하여 bias를 모니터링합니다.",
      "D": "SageMaker notebook을 사용하여 bias를 비교합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker Clarify — 모델 예측의 bias와 feature importance를 감지·분석하는 AWS 관리형 서비스. 모델 배포 후 실시간 bias drift 모니터링에 최적화.\n▸ Model Monitor — SageMaker 내 모델 품질 저하(data drift, bias drift 등)를 지속적으로 감지하는 모니터링 솔루션.\n▸ AWS Lambda — 온디맨드 워크플로우 트리거를 위한 서버리스 컴퓨팅. 스케줄링된 job 실행에 이상적.\n\n【정답 포인트】\n▸ 문제의 핵심: \"on-demand workflow\" + \"monitor bias drift\" + \"real-time endpoints\"\n▸ SageMaker Clarify는 정확히 실시간 배포 모델의 bias를 감지하기 위해 설계됨.\n▸ Lambda로 온디맨드 워크플로우를 트리거하면, 필요할 때만 Clarify job을 실행하여 비용 효율적.\n\n【오답 체크】\n(B) sagemaker-model-monitor-analyzer는 Model Monitor를 위한 내부 이미지일 뿐, bias drift 감지 기능은 Clarify에 있음. 또한 직접 이미지를 pulling하는 것은 불필요한 복잡도 증가.\n(C) AWS Glue Data Quality는 데이터 품질(null, duplicates 등)을 감시하는 도구이지, ML 모델의 bias drift 감지 기능은 없음.\n(D) SageMaker notebook을 수동으로 사용하는 것은 \"on-demand workflow\" 요구사항과 맞지 않으며, 자동화되지 않음.\n\n【시험 포인트】\n\"bias drift\" + \"real-time monitoring\" + \"on-demand\" → **SageMaker Clarify + Lambda**. Clarify는 deployment bias 감지 전담, Lambda는 트리거 자동화.",
    "en_q": "Case Study - A company is building a web-based AI application by using Amazon SageMaker. The application will provide the following capabilities and features: ML experimentation, training, a central model registry, model deployment, and model monitoring. The application must ensure secure and isolated use of training data during the ML lifecycle. The training data is stored in Amazon S3. The company needs to run an on-demand workflow to monitor bias drift for models that are deployed to real-time endpoints from the application. Which action will meet this requirement?",
    "en_opts": {
      "A": "Configure the application to invoke an AWS Lambda function that runs a SageMaker Clarify job.",
      "B": "Invoke an AWS Lambda function to pull the sagemaker-model-monitor-analyzer built-in SageMaker image.",
      "C": "Use AWS Glue Data Quality to monitor bias.",
      "D": "Use SageMaker notebooks to compare the bias."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152137-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 10,
    "question": "ML 엔지니어가 AWS에서 부정거래 탐지 모델을 개발 중입니다. 학습 데이터셋에는 거래 로그, 고객 프로필 및 온프레미스 MySQL 데이터베이스의 테이블이 포함되어 있습니다. 거래 로그와 고객 프로필은 Amazon S3에 저장되어 있습니다. 데이터셋은 모델 알고리즘의 학습에 영향을 미치는 클래스 불균형을 가지고 있습니다. 또한 많은 feature들이 상호 의존성을 가지고 있습니다. 알고리즘이 데이터의 모든 원하는 기본 패턴을 포착하지 못하고 있습니다. 여러 데이터 소스의 데이터를 수집할 수 있는 AWS 서비스 또는 기능은 무엇입니까?",
    "options": {
      "A": "Amazon EMR Spark job",
      "B": "Amazon Kinesis Data Streams",
      "C": "Amazon DynamoDB",
      "D": "AWS Lake Formation"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Lake Formation — 다양한 소스(S3, RDS, on-premises DB 등)에서 데이터를 수집하고 정규화하여 중앙 데이터 레이크를 구축하는 AWS 관리형 서비스. 메타데이터 관리, 카탈로그화, 접근 제어 포함.\n▸ Amazon EMR Spark job — 빅데이터 처리 프레임워크. 데이터 수집보다는 이미 준비된 데이터를 변환·분석하는 데 사용.\n▸ Amazon Kinesis Data Streams — 실시간 스트림 수집 서비스. 배치 데이터 집계가 아닌 연속적인 이벤트 스트림에 최적화.\n▸ Amazon DynamoDB — NoSQL 데이터베이스. 데이터 수집·집계 기능이 없음.\n\n【정답 포인트】\n▸ 문제의 핵심: \"aggregate data from various data sources\" (S3, on-premises MySQL)\n▸ Lake Formation은 여러 이종(heterogeneous) 데이터 소스를 단일 데이터 레이크로 통합·관리하기 위해 설계됨.\n▸ 온프레미스 DB와 S3 양쪽을 지원하는 유일한 서비스.\n\n【오답 체크】\n(A) EMR Spark는 데이터 처리·변환 도구이지, 이종 소스에서 데이터를 \"aggregate/수집\"하는 것이 목적이 아님. 이미 준비된 데이터를 입력받아 ETL을 수행.\n(B) Kinesis는 실시간 스트림 데이터(예: IoT 센서, 로그 스트림)를 수집하는 서비스. 정적인 S3 객체와 on-premises DB를 배치로 집계하는 데는 부적절.\n(C) DynamoDB는 단순 데이터베이스일 뿐 데이터 소스 통합·집계 기능이 없음.\n\n【시험 포인트】\n\"multiple data sources\" + \"aggregate\" + \"structured+unstructured\" → **AWS Lake Formation**. on-premises DB 포함 여부가 핵심: Lake Formation만 지원.",
    "en_q": "Case study - An ML engineer is developing a fraud detection model on AWS. The training dataset includes transaction logs, customer profiles, and tables from an on-premises MySQL database. The transaction logs and customer profiles are stored in Amazon S3. The dataset has a class imbalance that affects the learning of the model's algorithm. Additionally, many of the features have interdependencies. The algorithm is not capturing all the desired underlying patterns in the data. Which AWS service or feature can aggregate the data from the various data sources?",
    "en_opts": {
      "A": "Amazon EMR Spark jobs",
      "B": "Amazon Kinesis Data Streams",
      "C": "Amazon DynamoDB",
      "D": "AWS Lake Formation"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152088-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 11,
    "question": "ML 엔지니어가 AWS에서 부정거래 탐지 모델을 개발 중입니다. 데이터가 수집된 후, ML 엔지니어는 데이터의 이상값을 자동으로 감지하고 결과를 시각화하는 솔루션을 구현해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon Athena를 사용하여 이상값을 자동으로 감지하고 결과를 시각화합니다.",
      "B": "Amazon Redshift Spectrum을 사용하여 이상값을 자동으로 감지합니다. Amazon QuickSight를 사용하여 결과를 시각화합니다.",
      "C": "Amazon SageMaker Data Wrangler를 사용하여 이상값을 자동으로 감지하고 결과를 시각화합니다.",
      "D": "AWS Batch를 사용하여 이상값을 자동으로 감지합니다. Amazon QuickSight를 사용하여 결과를 시각화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Data Wrangler — 데이터 준비 및 시각화 전용 도구. 이상값 감지(anomaly detection), 통계 분석, 자동 변환, 인터랙티브 시각화를 단일 UI에서 제공. 코드 작성 불필요.\n▸ Amazon Athena — SQL 쿼리 엔진. 데이터 쿼리는 가능하지만 이상값 \"자동 감지\" 기능이 없음.\n▸ Amazon Redshift Spectrum — 데이터 웨어하우스 쿼리 서비스. Athena와 유사하게 분석은 하지만 자동 이상값 감지 기능 없음.\n▸ AWS Batch — 배치 컴퓨팅. 사용자가 직접 이상값 감지 로직을 작성해야 함 → 개발 오버헤드 증가.\n\n【정답 포인트】\n▸ 문제의 핵심: \"automatically detect anomalies\" + \"visualize the result\"\n▸ Data Wrangler는 정확히 데이터 품질 문제(이상값, 아웃라이어)를 자동으로 식별하고 시각화하도록 설계됨.\n▸ 내장 통계 변환(IQR, z-score 등)으로 코드 작성 없이 이상값 감지 가능.\n▸ 동일 도구 내에서 감지와 시각화를 함께 수행 → \"all-in-one\" 솔루션.\n\n【오답 체크】\n(A) Athena는 SQL 쿼리만 실행 → 이상값을 \"자동 감지\"하려면 별도 쿼리 로직 작성 필요. 시각화도 지원하지 않음.\n(B) Redshift Spectrum + QuickSight 조합은 데이터 탐색에는 좋지만, Spectrum은 이상값 자동 감지 기능이 없어 사용자 정의 SQL 필요.\n(D) AWS Batch는 컨테이너 기반 배치 작업 관리일 뿐, 이상값 감지 로직은 사용자가 직접 구현해야 함 → 개발 부담 높음.\n\n【시험 포인트】\n\"automatically detect anomalies\" + \"visualize\" + \"LEAST code\" → **SageMaker Data Wrangler**. 내장 통계 변환 + 인터랙티브 UI.",
    "en_q": "Case study - An ML engineer is developing a fraud detection model on AWS. The training dataset includes transaction logs, customer profiles, and tables from an on-premises MySQL database. The transaction logs and customer profiles are stored in Amazon S3. The dataset has a class imbalance that affects the learning of the model's algorithm. Additionally, many of the features have interdependencies. The algorithm is not capturing all the desired underlying patterns in the data. After the data is aggregated, the ML engineer must implement a solution to automatically detect anomalies in the data and to visualize the result. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon Athena to automatically detect the anomalies and to visualize the result.",
      "B": "Use Amazon Redshift Spectrum to automatically detect the anomalies. Use Amazon QuickSight to visualize the result.",
      "C": "Use Amazon SageMaker Data Wrangler to automatically detect the anomalies and to visualize the result.",
      "D": "Use AWS Batch to automatically detect the anomalies. Use Amazon QuickSight to visualize the result."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152145-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 12,
    "question": "ML 엔지니어가 AWS에서 부정거래 탐지 모델을 개발 중입니다. 학습 데이터셋에는 카테고리형 데이터와 수치형 데이터가 포함되어 있습니다. ML 엔지니어는 모델의 정확도를 최대화하기 위해 학습 데이터셋을 준비해야 합니다. 어떤 조치가 운영 부담이 가장 적으면서 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Glue를 사용하여 카테고리형 데이터를 수치형 데이터로 변환합니다.",
      "B": "AWS Glue를 사용하여 수치형 데이터를 카테고리형 데이터로 변환합니다.",
      "C": "Amazon SageMaker Data Wrangler를 사용하여 카테고리형 데이터를 수치형 데이터로 변환합니다.",
      "D": "Amazon SageMaker Data Wrangler를 사용하여 수치형 데이터를 카테고리형 데이터로 변환합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Data Wrangler — 데이터 준비 UI 도구. 카테고리형 데이터를 수치형으로 변환(encoding: one-hot, label encoding 등)하는 내장 변환 제공. 코드 없이 클릭만으로 수행.\n▸ AWS Glue — ETL 서비스. 데이터 변환을 위해 Apache Spark job을 작성·관리해야 함. 개발 시간 필요.\n▸ Feature encoding — 머신러닝 모델이 처리할 수 있도록 범주형 변수를 수치형으로 변환하는 필수 전처리.\n\n【정답 포인트】\n▸ 문제의 핵심: \"categorical data\" + \"numerical data\" → 인코딩 필요\n▸ \"LEAST operational overhead\" = 코드 작성 최소화\n▸ Data Wrangler는 내장 인코딩 변환(one-hot, ordinal, target encoding 등)으로 몇 클릭만에 완료.\n▸ Glue는 job 작성, 배포, 모니터링이 필요 → 운영 부담 증가.\n\n【오답 체크】\n(A) Glue를 사용하면 PySpark/Scala 코드를 작성·테스트해야 하므로 개발 오버헤드 발생. Data Wrangler보다 느림.\n(B) 수치형을 카테고리형으로 변환하는 것은 정확도 향상에 직접 기여하지 않음. 오히려 정보 손실 가능 (binning은 특수 경우만).\n(D) \n(B) 와 동일 이유. 또한 이미 수치 데이터가 있다면 굳이 변환할 이유 없음.\n\n【시험 포인트】\n\"categorical → numerical\" + \"LEAST operational overhead\" → **SageMaker Data Wrangler**. 내장 encoding UI, 코드 불필요.",
    "en_q": "Case study - An ML engineer is developing a fraud detection model on AWS. The training dataset includes transaction logs, customer profiles, and tables from an on-premises MySQL database. The transaction logs and customer profiles are stored in Amazon S3. The dataset has a class imbalance that affects the learning of the model's algorithm. Additionally, many of the features have interdependencies. The algorithm is not capturing all the desired underlying patterns in the data. The training dataset includes categorical data and numerical data. The ML engineer must prepare the training dataset to maximize the accuracy of the model. Which action will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use AWS Glue to transform the categorical data into numerical data.",
      "B": "Use AWS Glue to transform the numerical data into categorical data.",
      "C": "Use Amazon SageMaker Data Wrangler to transform the categorical data into numerical data.",
      "D": "Use Amazon SageMaker Data Wrangler to transform the numerical data into categorical data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152147-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 13,
    "question": "ML 엔지니어가 AWS에서 부정거래 탐지 모델을 개발 중입니다. ML 엔지니어는 모델을 학습하기 전에 불균형 데이터 문제를 해결해야 합니다. 어떤 솔루션이 운영 노력이 가장 적으면서 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon Athena를 사용하여 불균형에 기여하는 패턴을 식별합니다. 그에 따라 데이터셋을 조정합니다.",
      "B": "Amazon SageMaker Studio Classic 기본 제공 알고리즘을 사용하여 불균형 데이터셋을 처리합니다.",
      "C": "AWS Glue DataBrew 기본 제공 기능을 사용하여 소수 클래스를 오버샘플링합니다.",
      "D": "Amazon SageMaker Data Wrangler balance data 연산을 사용하여 소수 클래스를 오버샘플링합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Data Wrangler balance data operation — 클래스 불균형을 해결하기 위한 내장 기능. oversampling/undersampling을 한 번의 클릭으로 자동 수행. 코드 작성 불필요.\n▸ Class imbalance — 한 클래스의 샘플이 다른 클래스보다 훨씬 많은 데이터 문제. 모델이 다수 클래스에 편향됨.\n▸ Oversampling — 소수 클래스 샘플을 복제하거나 synthetic하게 생성(SMOTE)하여 클래스 비율을 균형있게 만드는 기법.\n\n【정답 포인트】\n▸ 문제의 핵심: \"imbalanced data\" + \"LEAST operational effort\"\n▸ Data Wrangler의 \"balance data\" 연산은 정확히 이 목적으로 설계됨. 클릭 하나로 oversampling 수행.\n▸ 다른 옵션들은 모두 수동 작업이나 추가 개발이 필요.\n\n【오답 체크】\n(A) Athena는 데이터 분석 쿼리 도구. 불균형을 \"식별\"할 수 있지만 자동으로 \"해결\"하지 못함. 사용자가 수동으로 sampling 로직을 구현해야 함.\n(B) SageMaker Studio Classic의 기본 알고리즘은 불균형을 \"처리\"할 수 있지만(예: class weights), 이는 학습 중의 대응일 뿐 데이터 준비 단계의 해결이 아님. 또한 모든 알고리즘이 class weights를 지원하는 것은 아님.\n(C) AWS Glue DataBrew는 데이터 품질(missing values, duplicates 등)에 초점. 클래스 불균형 \"오버샘플링\" 기능이 없음. 사용자가 custom recipe를 작성해야 함.\n\n【시험 포인트】\n\"class imbalance\" + \"LEAST operational effort\" → **SageMaker Data Wrangler balance data**. SMOTE/oversampling 자동화.",
    "en_q": "Case study - An ML engineer is developing a fraud detection model on AWS. The training dataset includes transaction logs, customer profiles, and tables from an on-premises MySQL database. The transaction logs and customer profiles are stored in Amazon S3. The dataset has a class imbalance that affects the learning of the model's algorithm. Additionally, many of the features have interdependencies. The algorithm is not capturing all the desired underlying patterns in the data. Before the ML engineer trains the model, the ML engineer must resolve the issue of the imbalanced data. Which solution will meet this requirement with the LEAST operational effort?",
    "en_opts": {
      "A": "Use Amazon Athena to identify patterns that contribute to the imbalance. Adjust the dataset accordingly.",
      "B": "Use Amazon SageMaker Studio Classic built-in algorithms to process the imbalanced dataset.",
      "C": "Use AWS Glue DataBrew built-in features to oversample the minority class.",
      "D": "Use the Amazon SageMaker Data Wrangler balance data operation to oversample the minority class."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152148-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 14,
    "question": "ML 엔지니어가 AWS에서 부정거래 탐지 모델을 개발 중입니다. ML 엔지니어는 모델을 학습하기 위해 Amazon SageMaker 기본 제공 알고리즘을 사용해야 합니다. ML 엔지니어는 어떤 알고리즘을 사용해야 할까요?",
    "options": {
      "A": "LightGBM",
      "B": "Linear learner",
      "C": "K-means clustering",
      "D": "Neural Topic Model (NTM)"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ LightGBM — 부정거래 탐지, 이탈 예측 등 binary classification 문제에 최적화된 gradient boosting 트리 모델. SageMaker 기본 제공 알고리즘.\n▸ Linear learner — 선형 회귀/분류 알고리즘. feature 간 비선형 상호작용(interdependencies)을 포착하지 못함.\n▸ K-means clustering — 비지도학습 알고리즘. 레이블이 있는 부정거래 탐지(지도학습)에는 부적절.\n▸ NTM (Neural Topic Model) — 텍스트 토픽 추출용 비지도학습. 거래 로그 및 고객 프로필 수치 데이터에 부적합.\n\n【정답 포인트】\n▸ 문제의 핵심: \"fraud detection\" (binary classification) + \"feature interdependencies\" (비선형 관계) + \"SageMaker built-in algorithm\"\n▸ LightGBM은 정확히 이 요구사항 충족: gradient boosting으로 비선형 패턴 포착, feature interaction 자동 학습, 부정거래 탐지에 산업 표준.\n▸ SageMaker에서 공식 지원되는 LightGBM 용기 이미지 제공.\n\n【오답 체크】\n(B) Linear learner는 선형 결정 경계만 학습. 거래 데이터의 \"많은 feature 상호의존성\"을 포착할 수 없음. 부정거래는 복잡한 비선형 패턴.\n(C) K-means는 비지도학습 clustering 알고리즘. 부정/정상 레이블이 있는 classification 문제에 사용되지 않음. 또한 \"이상값 탐지\"와 \"분류\" 목표가 다름.\n(D) NTM은 텍스트 문서의 토픽 분포를 학습하는 알고리즘. 거래 로그와 고객 프로필의 구조화된 수치/카테고리 데이터에는 전혀 맞지 않음.\n\n【시험 포인트】\n\"fraud detection\" + \"feature interdependencies\" + \"SageMaker built-in\" → **LightGBM** (또는 XGBoost). gradient boosting은 비선형 상호작용 자동 학습.",
    "en_q": "Case study - An ML engineer is developing a fraud detection model on AWS. The training dataset includes transaction logs, customer profiles, and tables from an on-premises MySQL database. The transaction logs and customer profiles are stored in Amazon S3. The dataset has a class imbalance that affects the learning of the model's algorithm. Additionally, many of the features have interdependencies. The algorithm is not capturing all the desired underlying patterns in the data. The ML engineer needs to use an Amazon SageMaker built-in algorithm to train the model. Which algorithm should the ML engineer use to meet this requirement?",
    "en_opts": {
      "A": "LightGBM",
      "B": "Linear learner",
      "C": "K-means clustering",
      "D": "Neural Topic Model (NTM)"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152212-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 15,
    "question": "회사가 XGBoost 예측 모델을 프로덕션에 배포하여 고객이 구독을 취소할 가능성을 예측합니다. 회사는 Amazon SageMaker Model Monitor를 사용하여 F1 score의 편차를 감지합니다. 모델 품질의 기준선 분석 동안 회사가 F1 score에 대한 임계값을 기록했습니다. 몇 개월 동안 변화가 없었으나 모델의 F1 score가 크게 감소했습니다. F1 score 저하의 원인은 무엇일까요?",
    "options": {
      "A": "예측에 사용되는 기본 고객 데이터에서 concept drift가 발생했습니다.",
      "B": "모델이 원래 기준선 데이터의 모든 패턴을 포착할 만큼 충분히 복잡하지 않았습니다.",
      "C": "원래 기준선 데이터에 누락된 값의 데이터 품질 문제가 있었습니다.",
      "D": "Model Monitor의 기준선 계산 중 잘못된 ground truth 레이블이 제공되었습니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Concept drift — 시간 경과에 따라 입력 데이터(feature) 또는 타겟 변수의 분포가 변하는 현상. 기준선과 프로덕션 데이터의 특성이 달라짐. 모델 성능 저하의 주요 원인.\n▸ Data drift — feature 분포만 변함 (개인의 소비 행동 패턴 변화 등).\n▸ SageMaker Model Monitor — 배포된 모델의 performance metric(F1, precision 등) 저하를 지속적으로 감시.\n▸ Baseline — 초기 학습 데이터의 모델 성능 기준점.\n\n【정답 포인트】\n▸ 문제의 시간 흐름: 기준선 분석 시 F1 OK → 몇 개월 후 F1 급락\n▸ \"몇 개월\" = 실제 운영 환경에서 데이터 분포가 변했다는 신호. 고객 이탈 패턴 자체가 변함 (경제 상황, 경쟁사, 요금 변경 등).\n▸ 모델은 과거 데이터로 학습했으나, 현재 고객의 이탈 결정 요인이 달라짐 → concept drift.\n\n【오답 체크】\n(B) 모델 복잡도 부족이면 \"처음부터\" (기준선 분석 시점에서도) F1이 낮아야 함. \"몇 개월 후에 갑자기 감소\"한다면 모델 능력이 아니라 데이터 변화 때문.\n(C) 기준선 데이터의 품질 문제(missing values)라면 기준선 분석 당시에 이미 F1이 낮았을 것. \"이후 갑자기 저하\"와는 관계 없음.\n(D) Ground truth 레이블 오류는 기준선 계산 시점의 문제. 이후 몇 개월간의 성능 저하를 설명하지 못함. 또한 Model Monitor는 실시간 prediction drift를 감시하지, 과거 기준선 레이블을 재검증하지 않음.\n\n【시험 포인트】\n\"months later\" + \"F1 score suddenly decreases\" → **Concept drift**. 데이터 분포 변화(고객 이탈 패턴 변화)가 모델 성능 저하의 주된 원인. 모델 재학습 필요.",
    "en_q": "A company has deployed an XGBoost prediction model in production to predict if a customer is likely to cancel a subscription. The company uses Amazon SageMaker Model Monitor to detect deviations in the F1 score. During a baseline analysis of model quality, the company recorded a threshold for the F1 score. After several months of no change, the model's F1 score decreases significantly. What could be the reason for the reduced F1 score?",
    "en_opts": {
      "A": "Concept drift occurred in the underlying customer data that was used for predictions.",
      "B": "The model was not sufficiently complex to capture all the patterns in the original baseline data.",
      "C": "The original baseline data had a data quality issue of missing values.",
      "D": "Incorrect ground truth labels were provided to Model Monitor during the calculation of the baseline."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152149-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 16,
    "question": "데이터 과학 팀이 Amazon SageMaker notebook 인스턴스를 사용하여 ML 모델을 테스트합니다. 데이터 과학자가 새로운 권한이 필요할 때마다, 회사는 SageMaker notebook 인스턴스 생성 중에 생성된 각 개별 역할에 권한을 추가합니다. 회사는 팀의 권한 관리를 중앙화해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "필요한 권한이 있는 단일 IAM 역할을 생성합니다. 팀이 사용하는 각 notebook 인스턴스에 역할을 추가합니다.",
      "B": "단일 IAM 그룹을 생성합니다. 데이터 과학자를 그룹에 추가합니다. 팀이 사용하는 각 notebook 인스턴스에 그룹을 연결합니다.",
      "C": "단일 IAM 사용자를 생성합니다. AdministratorAccess AWS 관리형 IAM 정책을 사용자에게 추가합니다. 각 notebook 인스턴스를 IAM 사용자를 사용하도록 구성합니다.",
      "D": "단일 IAM 그룹을 생성합니다. 데이터 과학자를 그룹에 추가합니다. IAM 역할을 생성합니다. AdministratorAccess AWS 관리형 IAM 정책을 역할에 추가합니다. 역할을 그룹과 연결합니다. 그룹을 각 notebook 인스턴스와 연결합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ IAM Role (역할) — AWS 서비스(EC2, SageMaker 등)가 맡을 수 있는 권한 모음. 사용자가 아닌 \"서비스\"에 할당됨.\n▸ IAM User (사용자) — 사람에게 할당되는 자격증명(AccessKey 등). 서비스에 직접 할당되지 않음.\n▸ IAM Group (그룹) — 여러 사용자를 묶어 한 번에 권한 할당. 하지만 SageMaker notebook 인스턴스에 직접 \"attach\"할 수 없음.\n▸ Notebook execution role — SageMaker notebook이 AWS 리소스(S3, ECR 등)에 접근할 때 맡는 IAM 역할.\n\n【정답 포인트】\n▸ 문제의 핵심: \"centralize management of permissions\" + \"multiple notebook instances\"\n▸ SageMaker notebook 인스턴스는 \"IAM 역할\"을 인수하고 실행함. 사용자나 그룹을 직접 지정할 수 없음.\n▸ 단일 IAM 역할을 생성하고 모든 notebook에 \"attach\"하면, 권한 수정 시 역할 정책만 업데이트하면 모든 노트북에 즉시 반영.\n▸ 여러 notebook에서 각각의 역할을 관리하는 것보다 중앙화됨.\n\n【오답 체크】\n(B) IAM 그룹은 \"사용자\" 관리용. SageMaker notebook 인스턴스는 그룹을 \"assume\"할 수 없음. Notebook은 역할만 인수.\n(C) IAM 사용자(개인 자격증명)를 notebook에 할당하는 것은 AWS 모범 사례 위배. 또한 AdministratorAccess는 과도한 권한(최소 권한 원칙 위반). 그리고 notebook은 사용자를 \"assume\"할 수 없음.\n(D) 그룹과 역할을 \"연결\"하려고 하지만, AWS IAM에서는 \"role을 group에 attach\"할 수 없음. 역할은 서비스나 사용자에게만 할당됨. 또한 AdministratorAccess는 불필요한 과도한 권한.\n\n【시험 포인트】\n\"Notebook instance\" + \"centralize permissions\" → **Single IAM Role**. Notebook은 역할을 인수(assume)하며, 단일 역할로 중앙화 관리 가능. 권한 변경 시 역할만 수정.",
    "en_q": "A company has a team of data scientists who use Amazon SageMaker notebook instances to test ML models. When the data scientists need new permissions, the company attaches the permissions to each individual role that was created during the creation of the SageMaker notebook instance. The company needs to centralize management of the team's permissions. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Create a single IAM role that has the necessary permissions. Attach the role to each notebook instance that the team uses.",
      "B": "Create a single IAM group. Add the data scientists to the group. Associate the group with each notebook instance that the team uses.",
      "C": "Create a single IAM user. Attach the AdministratorAccess AWS managed IAM policy to the user. Configure each notebook instance to use the IAM user.",
      "D": "Create a single IAM group. Add the data scientists to the group. Create an IAM role. Attach the AdministratorAccess AWS managed IAM policy to the role. Associate the role with the group. Associate the group with each notebook instance that the team uses."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152166-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 17,
    "question": "ML 엔지니어가 특정 위치의 아파트 가격을 예측하기 위해 ML 모델을 사용해야 합니다. ML 엔지니어는 모델의 성능을 평가하기 위해 어떤 메트릭을 사용해야 할까요?",
    "options": {
      "A": "Accuracy (정확도)",
      "B": "Area Under the ROC Curve (AUC)",
      "C": "F1 score",
      "D": "Mean absolute error (MAE)"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Mean Absolute Error (MAE) — 연속형(회귀) 문제의 평가 메트릭. 예측값과 실제값의 평균 절대 오차. 해석이 직관적(예: \"평균적으로 $10,000 오차\").\n▸ Accuracy — 분류(classification) 문제 메트릭. 맞은 샘플 비율. 회귀에는 적용 불가.\n▸ AUC (ROC curve 아래 영역) — binary classification의 분류 성능 메트릭. 회귀에는 적용 불가.\n▸ F1 score — binary/multiclass 분류의 정밀도와 재현율의 조화평균. 회귀에는 적용 불가.\n▸ Regression vs Classification — 가격 예측 = 연속형 수치 출력 = 회귀(regression).\n\n【정답 포인트】\n▸ 문제의 핵심: \"predict the price of apartments\" = 회귀 문제(숫자 예측)\n▸ Accuracy, AUC, F1은 모두 \"분류\" 문제용 메트릭.\n▸ MAE는 회귀 문제의 표준 메트릭. MSE(Mean Squared Error)와 함께 가장 일반적.\n▸ MAE는 이상값(outlier)에 덜 민감하고 해석이 직관적 (실제 금액 단위의 오차).\n\n【오답 체크】\n(A) Accuracy는 \"맞은 것의 비율\" (%)로 표현됨. 연속형 숫자 예측(가격)에는 의미 없음. 예: \"예측이 70% 정확\"은 회귀에서 의미 없음.\n(B) AUC는 binary classification의 순위 매김(ranking) 성능을 평가. 가격 예측의 연속형 출력에는 적용 불가.\n(C) F1 score는 분류 문제의 precision과 recall을 조합. 회귀에는 정의되지 않음.\n\n【시험 포인트】\n\"predict the price\" (회귀) → **MAE, RMSE, R²** 등의 회귀 메트릭. Accuracy/AUC/F1은 분류(classification) 전용.",
    "en_q": "An ML engineer needs to use an ML model to predict the price of apartments in a specific location. Which metric should the ML engineer use to evaluate the model's performance?",
    "en_opts": {
      "A": "Accuracy",
      "B": "Area Under the ROC Curve (AUC)",
      "C": "F1 score",
      "D": "Mean absolute error (MAE)"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152167-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 18,
    "question": "ML 엔지니어가 stochastic gradient descent (SGD)를 사용하여 신경망을 학습했습니다. 신경망은 테스트 셋에서 성능이 좋지 않습니다. 학습 손실(training loss)과 검증 손실(validation loss)의 값은 높게 유지되며 진동 패턴을 보입니다. 값이 몇 epoch 동안 감소했다가 몇 epoch 동안 증가한 후 같은 사이클을 반복합니다. ML 엔지니어는 학습 프로세스를 개선하기 위해 무엇을 해야 할까요?",
    "options": {
      "A": "Early stopping을 도입합니다.",
      "B": "테스트 셋의 크기를 늘립니다.",
      "C": "Learning rate를 증가시킵니다.",
      "D": "Learning rate를 감소시킵니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Stochastic Gradient Descent (SGD) — 경사 하강법. 각 배치마다 가중치를 업데이트하는 최적화 알고리즘.\n▸ Learning rate — SGD에서 가중치 업데이트 크기를 조절하는 하이퍼파라미터. 크면 수렴이 불안정, 작으면 수렴이 느림.\n▸ Oscillating loss — 손실이 진동하며 수렴하지 않는 현상. 보통 learning rate가 너무 높을 때 발생.\n▸ Underfitting vs Overfitting — 현재 상황은 둘 다 아님 (training loss도 높음) = convergence 문제.\n\n【정답 포인트】\n▸ 문제의 핵심: \"training loss AND validation loss both high\" + \"oscillating pattern\" (진동)\n▸ 진동 패턴은 학습이 최적점 주변을 \"왕복\"하는 현상 = learning rate가 너무 높음.\n▸ Learning rate를 낮추면 가중치 업데이트 크기가 작아져, 안정적으로 수렴.\n\n【오답 체크】\n(A) Early stopping은 \"validation loss가 증가\"할 때 학습을 중단하는 기법 (overfitting 방지). 하지만 현재 문제는 \"둘 다 높고 진동\" = 수렴 실패. 중단해도 좋은 성능 달성 불가.\n(B) 테스트 셋 크기 증가는 평가 데이터만 늘림. 학습 과정 개선과 무관. 또한 \"training loss도 높음\" = 데이터 부족이 아니라 수렴 실패.\n(C) Learning rate 증가는 현재 문제를 악화시킴. 진동이 더 심해질 것. SGD 진동의 원인 자체가 높은 learning rate.\n\n【시험 포인트】\n\"oscillating loss\" + \"high training & validation loss\" → **Decrease learning rate**. Learning rate가 너무 높으면 최적점 주변에서 진동. 감소시켜 안정적 수렴 달성.",
    "en_q": "An ML engineer has trained a neural network by using stochastic gradient descent (SGD). The neural network performs poorly on the test set. The values for training loss and validation loss remain high and show an oscillating pattern. The values decrease for a few epochs and then increase for a few epochs before repeating the same cycle. What should the ML engineer do to improve the training process?",
    "en_opts": {
      "A": "Introduce early stopping.",
      "B": "Increase the size of the test set.",
      "C": "Increase the learning rate.",
      "D": "Decrease the learning rate."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152168-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 19,
    "question": "ML 엔지니어는 수천 개의 기존 CSV 객체와 업로드되는 새로운 CSV 객체를 처리해야 합니다. CSV 객체는 중앙 Amazon S3 버킷에 저장되며 같은 수의 열을 가지고 있습니다. 열 중 하나는 거래 날짜입니다. ML 엔지니어는 거래 날짜를 기반으로 데이터를 쿼리할 수 있어야 합니다. 어떤 솔루션이 운영 부담이 가장 적으면서 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon Athena CREATE TABLE AS SELECT (CTAS) 문을 사용하여 중앙 S3 버킷의 데이터에서 거래 날짜를 기반으로 테이블을 생성합니다. 테이블에서 객체를 쿼리합니다.",
      "B": "처리된 데이터용 새로운 S3 버킷을 생성합니다. 중앙 S3 버킷에서 새 S3 버킷으로 S3 복제를 설정합니다. S3 Object Lambda를 사용하여 거래 날짜를 기반으로 객체를 쿼리합니다.",
      "C": "처리된 데이터용 새로운 S3 버킷을 생성합니다. AWS Glue for Apache Spark를 사용하여 job을 만들어 거래 날짜를 기반으로 CSV 객체를 쿼리합니다. 결과를 새 S3 버킷에 저장하도록 job을 구성합니다. 새 S3 버킷에서 객체를 쿼리합니다.",
      "D": "처리된 데이터용 새로운 S3 버킷을 생성합니다. Amazon Data Firehose를 사용하여 중앙 S3 버킷에서 새 S3 버킷으로 데이터를 전송합니다. Firehose가 AWS Lambda 함수를 실행하여 거래 날짜를 기반으로 데이터를 쿼리하도록 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Athena — S3에 저장된 데이터를 SQL로 직접 쿼리하는 서버리스 분석 서비스. \"in-place\" 쿼리 (별도 복제 불필요).\n▸ CTAS (CREATE TABLE AS SELECT) — SQL 쿼리 결과를 새 테이블로 생성하는 DDL 문. Athena에서 S3 데이터의 메타데이터 기반 관리.\n▸ S3 partition — 거래 날짜 같은 열을 기준으로 S3 경로를 구조화. 쿼리 성능과 비용 최적화.\n▸ Glue Data Catalog — Athena와 통합되어 테이블 스키마 관리.\n\n【정답 포인트】\n▸ 문제의 핵심: \"query CSV objects based on transaction date\" + \"LEAST operational overhead\"\n▸ Athena + CTAS는 S3 데이터를 별도 변환/복제 없이 즉시 쿼리 가능.\n▸ CTAS로 transaction date를 partition key로 하는 메타데이터를 생성하면, 이후 쿼리는 자동으로 필요한 파일만 스캔 (partition pruning).\n▸ \"새 버킷\"이나 \"별도 job\" 없이 기존 S3 데이터를 그대로 활용 → 운영 부담 최소.\n\n【오답 체크】\n(B) S3 Object Lambda는 S3 쿼리 응답을 실시간으로 변환하는 고급 기능. 거래 날짜 필터링 같은 단순 쿼리에는 과도한 복잡도. 또한 S3 복제는 추가 스토리지 비용.\n(C) AWS Glue for Spark job은 강력하지만, job 작성·배포·모니터링이 필요 (개발 오버헤드). 또한 결과를 새 버킷에 저장하면 데이터 중복 + 유지보수 부담 증가.\n(D) Amazon Data Firehose는 실시간 스트림 데이터 수집용 (예: Kinesis → S3). \"거래 날짜 쿼리\" 같은 배치 분석에는 부적합. Lambda 함수로 쿼리 로직 구현도 불필요한 개발.\n\n【시험 포인트】\n\"query CSV in S3\" + \"LEAST operational overhead\" → **Amazon Athena + CTAS**. 별도 복제/변환 없이 S3 데이터를 즉시 SQL로 쿼리.",
    "en_q": "An ML engineer needs to process thousands of existing CSV objects and new CSV objects that are uploaded. The CSV objects are stored in a central Amazon S3 bucket and have the same number of columns. One of the columns is a transaction date. The ML engineer must query the data based on the transaction date. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use an Amazon Athena CREATE TABLE AS SELECT (CTAS) statement to create a table based on the transaction date from data in the central S3 bucket. Query the objects from the table.",
      "B": "Create a new S3 bucket for processed data. Set up S3 replication from the central S3 bucket to the new S3 bucket. Use S3 Object Lambda to query the objects based on transaction date.",
      "C": "Create a new S3 bucket for processed data. Use AWS Glue for Apache Spark to create a job to query the CSV objects based on transaction date. Configure the job to store the results in the new S3 bucket. Query the objects from the new S3 bucket.",
      "D": "Create a new S3 bucket for processed data. Use Amazon Data Firehose to transfer the data from the central S3 bucket to the new S3 bucket. Configure Firehose to run an AWS Lambda function to query the data based on transaction date."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152169-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 20,
    "question": "회사가 대규모의 비정형 데이터셋을 가지고 있습니다. 데이터셋에는 여러 핵심 속성 전체에 많은 중복 레코드가 포함되어 있습니다. AWS에서 어떤 솔루션이 최소한의 코드 개발으로 데이터셋의 중복을 감지할까요?",
    "options": {
      "A": "Amazon Mechanical Turk job을 사용하여 중복을 감지합니다.",
      "B": "Amazon QuickSight ML Insights를 사용하여 맞춤형 중복 제거 모델을 구축합니다.",
      "C": "Amazon SageMaker Data Wrangler를 사용하여 전처리 및 중복 감지를 수행합니다.",
      "D": "AWS Glue FindMatches transform을 사용하여 중복을 감지합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Glue FindMatches — 중복 또는 유사한 레코드를 식별하기 위한 ML 기반 Glue ETL transform. 코드 작성 최소화. 유사성 임계값 자동 학습.\n▸ Deduplication — 데이터셋에서 중복 레코드를 제거하거나 표시하는 프로세스. 데이터 품질 개선의 필수 단계.\n▸ Unstructured data — 정형화되지 않은 텍스트, 이미지, 센서 데이터 등. 정규식이나 SQL로 처리 어려움 → ML 필요.\n\n【정답 포인트】\n▸ 문제의 핵심: \"detect duplicates\" + \"unstructured dataset\" + \"LEAST code development\"\n▸ FindMatches는 정확히 대규모 중복 감지를 위해 AWS에서 제공하는 ML 변환. 여러 속성을 자동으로 비교.\n▸ 사용자는 변환만 Glue job에 추가하면 됨. 중복 감지 로직 작성 불필요.\n\n【오답 체크】\n(A) Amazon Mechanical Turk는 사람(크라우드워킹)을 사용한 수동 레이블링 서비스. \"자동\" 감지가 아니며, 비용과 시간 소요 증가. 대규모 데이터셋에는 비현실적.\n(B) Amazon QuickSight ML Insights는 BI/시각화 분석 도구. \"맞춤형 중복 제거 모델\" 구축이 목적이 아님. 그리고 모델을 구축하려면 정의와 학습 필요 → 코드 개발 증가.\n(C) SageMaker Data Wrangler는 데이터 준비(전처리, 인코딩, 이상값 감지 등) 도구. FindMatches 같은 \"중복 감지\" 특화 기능은 없음. 사용자가 logic을 정의해야 함.\n\n【시험 포인트】\n\"duplicate detection\" + \"unstructured data\" + \"LEAST code\" → **AWS Glue FindMatches**. ML 기반 자동 중복 식별, Glue ETL transform으로 통합.",
    "en_q": "A company has a large, unstructured dataset. The dataset includes many duplicate records across several key attributes. Which solution on AWS will detect duplicates in the dataset with the LEAST code development?",
    "en_opts": {
      "A": "Use Amazon Mechanical Turk jobs to detect duplicates.",
      "B": "Use Amazon QuickSight ML Insights to build a custom deduplication model.",
      "C": "Use Amazon SageMaker Data Wrangler to pre-process and detect duplicates.",
      "D": "Use the AWS Glue FindMatches transform to detect duplicates."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152170-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 21,
    "question": "회사는 Amazon EC2 인스턴스에서 배치 데이터 처리 작업을 실행해야 합니다. 작업은 주말에 실행되며 완료하는 데 90분이 소요됩니다. 처리는 중단을 처리할 수 있습니다. 회사는 앞으로 6개월 동안 매주 작업을 실행할 것입니다. 어떤 EC2 인스턴스 구매 옵션이 가장 비용 효율적이면서 이 요구사항을 충족할까요?",
    "options": {
      "A": "Spot Instances",
      "B": "Reserved Instances",
      "C": "On-Demand Instances",
      "D": "Dedicated Instances"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Spot Instances — AWS의 유휴 용량을 저가로 제공하는 인스턴스. 2분 예고로 중단 가능. On-Demand 대비 최대 90% 할인. \"처리는 중단을 처리할 수 있음\" 조건에 최적.\n▸ Reserved Instances (RI) — 1년 또는 3년 약정 계약. On-Demand 대비 약 30~40% 할인. 비용 절감하지만, 사용 안 할 때도 비용 발생.\n▸ On-Demand Instances — 시간 기반 종량 요금. 가장 비쌈.\n▸ Dedicated Instances — 단일 고객 전용 하드웨어. 가장 비쌈. 규정 준수 목적 (일반 배치 작업에는 불필요).\n▸ Interruption tolerance — 작업이 중단되어도 재개 가능 (fault-tolerant)한 특성.\n\n【정답 포인트】\n▸ 문제의 핵심: \"weekend batch job\" + \"90 minutes\" + \"interruptible\" + \"MOST cost-effective\"\n▸ Spot Instances는 \"처리는 중단을 처리할 수 있다\"는 조건을 만족하는 유일한 초저가 옵션.\n▸ 주말에만 실행되고 6개월 동안 26회 실행 (총 39시간) → RI(약정) 불필요. Spot이 최저가.\n▸ Spot 중단 가능성도 낮음 (주말, 배치 작업, 예측 가능한 시간).\n\n【오답 체크】\n(B) Reserved Instances는 1년/3년 약정 필요. 6개월 + 26회(39시간) 사용량에는 비효율적. RI는 지속적인 사용에 최적화.\n(C) On-Demand는 시간당 최고 요금. Spot의 10배 이상 비쌈.\n(D) Dedicated Instances는 규정/보안 요구사항이 없는 일반 배치 작업에는 불필요한 낭비. 가장 비쌈.\n\n【시험 포인트】\n\"batch job\" + \"interruptible/fault-tolerant\" + \"weekend\" + \"short duration\" + \"MOST cost-effective\" → **Spot Instances**. 중단 가능성이 조건이면 Spot 할인(up to 90%) 활용.",
    "en_q": "A company needs to run a batch data-processing job on Amazon EC2 instances. The job will run during the weekend and will take 90 minutes to finish running. The processing can handle interruptions. The company will run the job every weekend for the next 6 months. Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Spot Instances",
      "B": "Reserved Instances",
      "C": "On-Demand Instances",
      "D": "Dedicated Instances"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152171-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 22,
    "question": "ML 엔지니어가 Account A의 us-east-1 Region에 Amazon Comprehend 맞춤형 모델을 가지고 있습니다. ML 엔지니어는 같은 Region의 Account B로 모델을 복사해야 합니다. 어떤 솔루션이 개발 노력이 가장 적으면서 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon S3를 사용하여 모델 사본을 만듭니다. 사본을 Account B로 전송합니다.",
      "B": "리소스 기반 IAM 정책을 생성합니다. Amazon Comprehend ImportModel API 연산을 사용하여 모델을 Account B로 복사합니다.",
      "C": "AWS DataSync를 사용하여 Account A에서 Account B로 모델을 복제합니다.",
      "D": "Account A와 Account B 사이의 AWS Site-to-Site VPN 연결을 생성하여 모델을 전송합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Comprehend ImportModel API — Account 간 또는 Region 간 Comprehend 모델을 import하기 위한 네이티브 API. 모델 소유권 변경 가능 (cross-account).\n▸ Resource-based IAM policy — 리소스(모델)에 대해 다른 AWS 계정의 사용자/역할이 특정 작업을 수행하도록 허용하는 정책.\n▸ Comprehend custom model — NLP 모델. 학습 데이터와 모델 아티팩트는 Comprehend 내부 저장소에서 관리됨.\n\n【정답 포인트】\n▸ 문제의 핵심: \"copy model from Account A to Account B\" + \"same Region\" + \"LEAST development effort\"\n▸ ImportModel API는 정확히 cross-account 모델 이동을 위해 설계된 네이티브 솔루션.\n▸ 리소스 기반 IAM 정책으로 권한 설정 후 API 호출만으로 완료 → 개발 노력 최소.\n▸ S3 전송이나 DataSync 같은 workaround 불필요.\n\n【오답 체크】\n(A) Amazon S3로 수동 복사하는 것은 Comprehend 모델의 메타데이터·버전·권한 정보를 손실할 가능성. 또한 모델 포맷 불일치 위험. \"copy\" 작업이 AWS 네이티브 API로 지원되지 않음.\n(C) AWS DataSync는 데이터 동기화 도구 (예: on-premises ↔ S3). Comprehend 모델(학습된 ML 아티팩트) 이동에는 부적합. 모델 메타데이터 손실.\n(D) Site-to-Site VPN은 네트워크 연결 도구. 모델 \"복사\" 메커니즘이 아님. 추가로 VPN 설정·관리의 오버헤드 증가.\n\n【시험 포인트】\n\"Comprehend custom model\" + \"cross-account\" + \"same region\" + \"LEAST effort\" → **ImportModel API + resource-based IAM policy**. AWS 네이티브 cross-account 전송.",
    "en_q": "An ML engineer has an Amazon Comprehend custom model in Account A in the us-east-1 Region. The ML engineer needs to copy the model to Account В in the same Region. Which solution will meet this requirement with the LEAST development effort?",
    "en_opts": {
      "A": "Use Amazon S3 to make a copy of the model. Transfer the copy to Account B.",
      "B": "Create a resource-based IAM policy. Use the Amazon Comprehend ImportModel API operation to copy the model to Account B.",
      "C": "Use AWS DataSync to replicate the model from Account A to Account B.",
      "D": "Create an AWS Site-to-Site VPN connection between Account A and Account В to transfer the model."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152172-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 23,
    "question": "ML 엔지니어가 간단한 신경망 모델을 학습하고 있습니다. ML 엔지니어는 검증 데이터셋에서 시간 경과에 따른 모델 성능을 추적합니다. 모델의 성능은 처음에는 크게 개선되다가 특정 epoch 수 이후에 저하됩니다. 어떤 솔루션이 이 문제를 완화할까요? (2개를 선택)",
    "options": {
      "A": "모델에서 early stopping을 활성화합니다.",
      "B": "레이어에서 dropout을 증가시킵니다.",
      "C": "레이어 수를 증가시킵니다.",
      "D": "뉴런 수를 증가시킵니다.",
      "E": "모델 bias의 원인을 조사하여 감소시킵니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ Early stopping — 검증 성능이 개선되지 않을 때 학습을 중단하는 정규화 기법. overfitting 방지. \"처음 개선 후 저하\"의 직접 해결책.\n▸ Dropout — 학습 중 일부 뉴런을 무작위로 비활성화하는 정규화 기법. overfitting 감소.\n▸ Overfitting — 모델이 학습 데이터에 과도하게 적응하여 검증/테스트 데이터에서 성능 저하.\n▸ Model bias — 모델의 체계적 오류 (예측 편향). \"성능 저하\" 문제와 별개. 문제 진단 후 처리할 사항.\n\n【정답 포인트】\n▸ 문제 상황: \"improves at first\" → \"degrades after specific epochs\" = 전형적인 overfitting 신호.\n▸ Early stopping\n(A) : 검증 성능 저하 시점에서 학습 중단 → 최적 시점 포착 가능.\n▸ Dropout\n(B) : 레이어 내 뉴런 비활성화로 co-adaptation 방지 → overfitting 근본 완화.\n▸ 둘 다 overfitting 완화 전략 → 정답.\n\n【오답 체크】\n(C) 레이어 수 증가는 모델 용량 증가 → overfitting 악화 가능. 문제 해결 X.\n(D) 뉴런 수 증가도 모델 복잡도 증가 → overfitting 악화. 문제 해결 X.\n(E) \"Model bias\" (체계적 오류)는 \"성능 저하\" 현상과 다른 개념. 현재 상황(early improvement then degradation)은 bias가 아니라 overfitting. 조사·감소해도 현재 문제 해결 X.\n\n【시험 포인트】\n\"improves then degrades\" → **Early stopping + Dropout** = overfitting 완화. 모델 용량 증가(C, D)는 악화.\n**2개 선택 문제**: overfitting 방지 기법 2가지 조합 = A + B.",
    "en_q": "An ML engineer is training a simple neural network model. The ML engineer tracks the performance of the model over time on a validation dataset. The model's performance improves substantially at first and then degrades after a specific number of epochs. Which solutions will mitigate this problem? (Choose two.)",
    "en_opts": {
      "A": "Enable early stopping on the model.",
      "B": "Increase dropout in the layers.",
      "C": "Increase the number of layers.",
      "D": "Increase the number of neurons.",
      "E": "Investigate and reduce the sources of model bias."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152173-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 24,
    "question": "회사가 vector database를 사용하여 문서의 embedding을 저장하는 Retrieval Augmented Generation (RAG) 애플리케이션을 보유하고 있습니다. 회사는 애플리케이션을 AWS로 마이그레이션해야 하며, 텍스트 파일의 의미론적 검색을 제공하는 솔루션을 구현해야 합니다. 회사는 이미 텍스트 저장소를 Amazon S3 버킷으로 마이그레이션했습니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Batch job을 사용하여 파일을 처리하고 embedding을 생성합니다. AWS Glue를 사용하여 embedding을 저장합니다. SQL 쿼리를 사용하여 의미론적 검색을 수행합니다.",
      "B": "맞춤형 Amazon SageMaker notebook을 사용하여 embedding을 생성하는 맞춤형 script를 실행합니다. SageMaker Feature Store를 사용하여 embedding을 저장합니다. SQL 쿼리를 사용하여 의미론적 검색을 수행합니다.",
      "C": "Amazon Kendra S3 connector를 사용하여 S3 버킷의 문서를 Amazon Kendra로 수집합니다. Amazon Kendra를 쿼리하여 의미론적 검색을 수행합니다.",
      "D": "Amazon Textract 비동기 job을 사용하여 S3 버킷의 문서를 수집합니다. Amazon Textract를 쿼리하여 의미론적 검색을 수행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon Kendra — 의미론적 검색 엔진. 문서의 내용을 이해하고 사용자 쿼리와의 의미적 유사성을 기반으로 검색. embedding 생성·저장·검색을 완전 관리.\n▸ S3 connector — Kendra가 S3에서 문서를 자동으로 수집, 인덱싱하는 통합 기능.\n▸ RAG (Retrieval Augmented Generation) — 검색 기반 LLM 응답. 외부 문서에서 관련 정보를 검색 후 LLM 입력으로 사용.\n▸ Semantic search — 단어 일치가 아닌 의미(의도) 기반 검색.\n\n【정답 포인트】\n▸ 문제의 핵심: \"semantic search of text files\" + \"migrate RAG application to AWS\" + \"S3 text repository\"\n▸ Amazon Kendra는 정확히 S3 기반 문서의 의미론적 검색을 위해 설계됨.\n▸ S3 connector로 자동 수집·인덱싱 → 사용자는 관리할 vector DB 없음 (완전 관리형).\n▸ \"embedding 생성·저장·쿼리\"가 모두 Kendra 내에 통합 → embedding 외부 관리 불필요.\n\n【오답 체크】\n(A) AWS Batch (계산) + AWS Glue (저장소)로 embedding을 생성·저장하는 것은 복잡함. 또한 \"SQL 쿼리\"로 embedding 검색(cosine similarity 등)을 수행하기 어려움. vector index 구축 필요 → 개발 부담.\n(B) SageMaker notebook + Feature Store도 유사한 문제. 사용자가 embedding 생성 script 작성 필요 (개발 오버헤드). \"SQL로 의미론적 검색\"은 vector similarity 계산이 필요해서 SQL만으로 불가능.\n(D) Amazon Textract는 문서의 \"텍스트 추출\" 도구 (OCR/테이블 분석). 의미론적 검색 기능 없음. 검색을 구현하려면 별도 embedding + vector DB 구축 필요 → 개발 부담 심함.\n\n【시험 포인트】\n\"RAG\" + \"semantic search\" + \"S3 documents\" + \"fully managed\" → **Amazon Kendra + S3 connector**. 의미론적 검색 전담, embedding 관리 자동화.",
    "en_q": "A company has a Retrieval Augmented Generation (RAG) application that uses a vector database to store embeddings of documents. The company must migrate the application to AWS and must implement a solution that provides semantic search of text files. The company has already migrated the text repository to an Amazon S3 bucket. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use an AWS Batch job to process the files and generate embeddings. Use AWS Glue to store the embeddings. Use SQL queries to perform the semantic searches.",
      "B": "Use a custom Amazon SageMaker notebook to run a custom script to generate embeddings. Use SageMaker Feature Store to store the embeddings. Use SQL queries to perform the semantic searches.",
      "C": "Use the Amazon Kendra S3 connector to ingest the documents from the S3 bucket into Amazon Kendra. Query Amazon Kendra to perform the semantic searches.",
      "D": "Use an Amazon Textract asynchronous job to ingest the documents from the S3 bucket. Query Amazon Textract to perform the semantic searches."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152174-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 25,
    "question": "회사가 Amazon Athena를 사용하여 Amazon S3의 데이터셋을 쿼리합니다. 데이터셋에는 회사가 예측하고 싶어 하는 타겟 변수가 있습니다. 회사는 모델이 타겟 변수를 예측할 수 있는지 확인하기 위해 데이터셋을 사용하는 솔루션을 필요로 합니다. 어떤 솔루션이 개발 노력이 가장 적으면서 이 정보를 제공할까요?",
    "options": {
      "A": "Amazon SageMaker Autopilot을 사용하여 새로운 모델을 생성합니다. 모델이 달성한 성능을 보고합니다.",
      "B": "데이터 전처리, 다중선형회귀 및 성능 평가를 수행하는 맞춤형 script를 구현합니다. Amazon EC2 인스턴스에서 script를 실행합니다.",
      "C": "데이터셋을 분석하고 모델을 생성하도록 Amazon Macie를 구성합니다. 모델이 달성한 성능을 보고합니다.",
      "D": "Amazon Bedrock에서 모델을 선택합니다. 데이터로 모델을 튜닝합니다. 모델이 달성한 성능을 보고합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker Autopilot — 자동 머신러닝(AutoML) 서비스. 데이터셋을 입력받으면 데이터 준비, 특성 공학, 알고리즘 선택, 하이퍼파라미터 튜닝을 자동으로 수행 후 최적 모델 반환. 코드 불필요.\n▸ Predictability assessment — 데이터에서 \"이 타겟 변수를 예측할 수 있는가\"를 평가하는 작업. 모델 구축 전 사전 분석.\n▸ AutoML — 자동으로 최적 모델과 성능을 도출하는 기술. 개발 오버헤드 최소화.\n\n【정답 포인트】\n▸ 문제의 핵심: \"determine if a model can predict the target variable\" + \"LEAST development effort\"\n▸ Autopilot은 자동 데이터 준비 + 자동 모델 선택 + 성능 리포트를 한 번에 제공.\n▸ \"target variable을 예측할 수 있는가\"를 가장 빠르게 검증 → Autopilot의 예측 성능 보고.\n▸ 코드 작성 전혀 불필요 → 개발 노력 최소.\n\n【오답 체크】\n(B) 맞춤형 script 구현은 데이터 탐색, 전처리, 모델링, 평가를 모두 수동으로 작성 필요 → 상당한 개발 시간. \"LEAST development effort\"와 거리 멈.\n(C) Amazon Macie는 \"데이터 보안 및 프라이버시\" 도구 (민감한 정보 감지). ML 모델 구축 기능이 없음. 문제와 무관.\n(D) Amazon Bedrock은 기학습 LLM(Claude, Llama 등)을 제공하는 서비스. \"구조화된 정형 데이터의 타겟 예측\"(회귀/분류) 목적이 아님. LLM을 사용자 데이터로 \"tuning\"하는 것은 비효율적 + 비용 높음.\n\n【시험 포인트】\n\"predict target variable\" + \"LEAST development\" + \"assess predictability\" → **SageMaker Autopilot**. AutoML로 자동 모델 생성·성능 평가.",
    "en_q": "A company uses Amazon Athena to query a dataset in Amazon S3. The dataset has a target variable that the company wants to predict. The company needs to use the dataset in a solution to determine if a model can predict the target variable. Which solution will provide this information with the LEAST development effort?",
    "en_opts": {
      "A": "Create a new model by using Amazon SageMaker Autopilot. Report the model's achieved performance.",
      "B": "Implement custom scripts to perform data pre-processing, multiple linear regression, and performance evaluation. Run the scripts on Amazon EC2 instances.",
      "C": "Configure Amazon Macie to analyze the dataset and to create a model. Report the model's achieved performance.",
      "D": "Select a model from Amazon Bedrock. Tune the model with the data. Report the model's achieved performance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152175-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 26,
    "question": "회사가 각 광고의 색 구성을 고려하여 광고 캠페인의 성공을 예측하고 싶어 합니다. ML 엔지니어가 신경망 모델을 위해 데이터를 준비하고 있습니다. 데이터셋은 색상 정보를 카테고리형 데이터로 포함하고 있습니다. ML 엔지니어가 모델을 위해 사용해야 할 특성 공학 기법은 무엇입니까?",
    "options": {
      "A": "색상 카테고리에 label encoding을 적용합니다. 각 색상에 고유한 정수를 자동으로 할당합니다.",
      "B": "모든 색상 feature vector가 같은 길이를 가지도록 padding을 구현합니다.",
      "C": "색상 카테고리에 대해 차원 축소를 수행합니다.",
      "D": "색상 카테고리를 one-hot encode하여 색상 구성 feature를 이진 행렬로 변환합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ One-hot encoding — 카테고리형 변수를 이진 벡터로 변환. 각 카테고리마다 하나의 1과 나머지는 0. 신경망에 최적.\n▸ Label encoding — 카테고리를 정수(0, 1, 2, ...)로 변환. 순서 관계 암시 가능 → 신경망에서 부적절 (색상은 순서 없음).\n▸ Categorical feature — 순서 없는 카테고리 데이터. 신경망은 수치 입력 필요 → encoding 필수.\n▸ Neural network input — 신경망은 연속 수치 값을 선호. 카테고리는 one-hot 형식이 표현력 좋음.\n\n【정답 포인트】\n▸ 문제의 핵심: \"neural network model\" + \"categorical color data\" → 인코딩 필요\n▸ One-hot encoding은 신경망의 입력층에 최적화됨. 각 색상이 독립적 특성으로 취급 → 신경망이 색상 간 관계를 학습.\n▸ 색상은 순서가 없는 명목형(nominal) 카테고리 → one-hot이 정확한 표현.\n\n【오답 체크】\n(A) Label encoding (정수 할당)은 신경망에 부적절. 정수 순서(0<1<2)가 모델에 암시적 순서 관계를 주게 됨. \"빨강=0, 파랑=1, 초록=2\"라고 하면 모델이 \"파랑 > 빨강\"이라고 학습할 우려.\n(B) Padding은 가변 길이 시퀀스(텍스트, 시계열)를 고정 길이로 맞추는 기법. 색상 데이터는 이미 고정 길이 벡터라 padding 불필요.\n(C) 차원 축소는 이미 수치형인 고차원 feature를 감소시킬 때 사용 (예: PCA). 색상 카테고리 수가 적으면(예: 10가지 색) one-hot 후 벡터 길이는 10 → 차원 축소 필요 없음.\n\n【시험 포인트】\n\"categorical color data\" + \"neural network\" → **One-hot encoding**. 신경망은 카테고리를 이진 벡터로 변환 선호. label encoding은 순서 관계 암시.",
    "en_q": "A company wants to predict the success of advertising campaigns by considering the color scheme of each advertisement. An ML engineer is preparing data for a neural network model. The dataset includes color information as categorical data. Which technique for feature engineering should the ML engineer use for the model?",
    "en_opts": {
      "A": "Apply label encoding to the color categories. Automatically assign each color a unique integer.",
      "B": "Implement padding to ensure that all color feature vectors have the same length.",
      "C": "Perform dimensionality reduction on the color categories.",
      "D": "One-hot encode the color categories to transform the color scheme feature into a binary matrix."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152176-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 27,
    "question": "회사가 하이브리드 클라우드 환경을 사용합니다. 온프레미스에 배포된 모델이 Amazon S3의 데이터를 사용하여 고객에게 실시간 conversational engine을 제공합니다. 모델이 민감한 데이터를 사용하고 있습니다. ML 엔지니어는 민감한 데이터를 식별하고 제거하는 솔루션을 구현해야 합니다. 어떤 솔루션이 운영 부담이 가장 적으면서 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon SageMaker에 모델을 배포합니다. 민감한 데이터를 식별하고 제거하는 AWS Lambda 함수 세트를 생성합니다.",
      "B": "AWS Fargate를 사용하는 Amazon Elastic Container Service (Amazon ECS) 클러스터에 모델을 배포합니다. 민감한 데이터를 식별하고 제거하는 AWS Batch job을 생성합니다.",
      "C": "Amazon Macie를 사용하여 민감한 데이터를 식별합니다. 민감한 데이터를 제거하는 AWS Lambda 함수 세트를 생성합니다.",
      "D": "Amazon Comprehend를 사용하여 민감한 데이터를 식별합니다. 민감한 데이터를 제거하는 Amazon EC2 인스턴스를 시작합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon Macie — 민감한 데이터(PII, 신용카드, SSN 등)를 자동으로 \"탐지\"하는 AWS 보안 서비스. ML 기반 패턴 인식. S3 데이터 스캔 가능.\n▸ Amazon Comprehend — 자연어 처리(NLP) 서비스. 텍스트에서 엔티티(사람, 장소)나 감정을 분석. PII 탐지도 가능하지만 Macie보다 덜 초점화됨.\n▸ PII (Personally Identifiable Information) — 개인 식별 정보. 민감한 데이터의 대표 예.\n▸ Lambda — 서버리스 함수. 데이터 제거 작업에 이상적 (경량, 빠름).\n\n【정답 포인트】\n▸ 문제의 핵심: \"identify and remove sensitive data\" + \"S3 data\" + \"LEAST operational overhead\"\n▸ Amazon Macie는 \"민감한 데이터 탐지\" 전담 서비스. S3 버킷 자동 스캔, PII 패턴 인식.\n▸ Macie가 민감 데이터 위치를 식별 → Lambda 함수로 제거 (간단함).\n▸ \"모델을 어디에 배포\"하는지는 핵심이 아님. 민감 데이터 \"식별\"이 가장 중요.\n\n【오답 체크】\n(A) SageMaker 배포는 모델 제공용일 뿐, 민감 데이터 식별 기능 없음. Lambda만으로는 \"자동\" 민감 데이터 패턴 인식 어려움. 사용자가 식별 로직 구현 필요 → 개발 부담.\n(B) ECS + Fargate + Batch는 모두 모델 실행/배치 작업 관리용. 민감 데이터 \"식별\" 전담 기능 없음. AWS Batch job으로 식별 로직을 구현해야 함 → 개발 오버헤드.\n(D) Amazon Comprehend는 NLP 엔티티 추출/감정 분석 도구. 민감 데이터 탐지가 주 목적이 아님. 또한 EC2 인스턴스는 서버 관리 필요 → Fargate보다 오버헤드 높음.\n\n【시험 포인트】\n\"identify sensitive data\" + \"S3\" + \"LEAST operational overhead\" → **Amazon Macie + Lambda**. Macie는 민감 데이터 탐지 전담, Lambda는 제거 자동화.",
    "en_q": "A company uses a hybrid cloud environment. A model that is deployed on premises uses data in Amazon 53 to provide customers with a live conversational engine. The model is using sensitive data. An ML engineer needs to implement a solution to identify and remove the sensitive data. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Deploy the model on Amazon SageMaker. Create a set of AWS Lambda functions to identify and remove the sensitive data.",
      "B": "Deploy the model on an Amazon Elastic Container Service (Amazon ECS) cluster that uses AWS Fargate. Create an AWS Batch job to identify and remove the sensitive data.",
      "C": "Use Amazon Macie to identify the sensitive data. Create a set of AWS Lambda functions to remove the sensitive data.",
      "D": "Use Amazon Comprehend to identify the sensitive data. Launch Amazon EC2 instances to remove the sensitive data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152177-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 28,
    "question": "ML 엔지니어가 AWS에서 데이터 수집 파이프라인과 ML 모델 배포 파이프라인을 만들어야 합니다. 모든 원본 데이터는 Amazon S3 버킷에 저장되어 있습니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "데이터 수집 파이프라인을 만들기 위해 Amazon Data Firehose를 사용합니다. 모델 배포 파이프라인을 만들기 위해 Amazon SageMaker Studio Classic을 사용합니다.",
      "B": "데이터 수집 파이프라인을 만들기 위해 AWS Glue를 사용합니다. 모델 배포 파이프라인을 만들기 위해 Amazon SageMaker Studio Classic을 사용합니다.",
      "C": "데이터 수집 파이프라인을 만들기 위해 Amazon Redshift ML을 사용합니다. 모델 배포 파이프라인을 만들기 위해 Amazon SageMaker Studio Classic을 사용합니다.",
      "D": "데이터 수집 파이프라인을 만들기 위해 Amazon Athena를 사용합니다. 모델 배포 파이프라인을 만들기 위해 Amazon SageMaker 노트북을 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue — ETL(Extract, Transform, Load) 작업을 위한 완전관리형 서비스로 S3 데이터를 처리하고 변환하는 데 특화됨\n▸ Amazon Data Firehose — 실시간 스트리밍 데이터 전송 서비스로 Kinesis Streams의 데이터를 대상으로 전달하는 용도\n▸ Amazon SageMaker Studio Classic — 통합 IDE로 노트북, 모델 배포(엔드포인트) 등을 관리할 수 있음\n\n【정답 포인트】\n문제에서 \"모든 원본 데이터가 S3에 저장\"이고 \"데이터 수집 및 ML 모델 배포 파이프라인\"이 필요합니다. AWS Glue는 S3의 정형·비정형 데이터를 ETL로 처리하고 데이터 카탈로그를 만드는 데 최적화되어 있으며, SageMaker Studio Classic은 그 처리된 데이터로 모델을 학습하고 배포하는 완전한 환경을 제공합니다. 두 서비스의 조합이 파이프라인 구축에 가장 자연스럽습니다.\n\n【오답 체크】\n(A) Data Firehose는 실시간 스트리밍 데이터를 다른 서비스(Redshift, OpenSearch 등)로 자동 전달하는 서비스입니다. 배치 형태의 S3 데이터를 처리하고 변환하는 ETL용으로는 Glue가 더 적합합니다.\n(C) Redshift ML은 SQL 쿼리 기반으로 Redshift 데이터웨어하우스 내에서 모델을 만드는 서비스이며, S3의 원본 데이터를 일반적인 ETL 형태로 처리하는 데는 맞지 않습니다.\n(D) Athena는 S3 데이터를 SQL로 분석하는 쿼리 서비스일 뿐 \"데이터 수집 파이프라인\"을 만드는 도구가 아니며, 배포는 SageMaker 노트북만으로는 엔드포인트 관리가 불완전합니다.\n\n【시험 포인트】\n\"S3 + 데이터 처리 + 모델 배포\" → \"Glue + SageMaker Studio/Endpoint\". Firehose는 스트리밍, Athena는 쿼리 분석, Redshift ML은 DW 내 모델이라는 각 서비스의 용도를 구분해야 합니다.",
    "en_q": "An ML engineer needs to create data ingestion pipelines and ML model deployment pipelines on AWS. All the raw data is stored in Amazon S3 buckets. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon Data Firehose to create the data ingestion pipelines. Use Amazon SageMaker Studio Classic to create the model deployment pipelines.",
      "B": "Use AWS Glue to create the data ingestion pipelines. Use Amazon SageMaker Studio Classic to create the model deployment pipelines.",
      "C": "Use Amazon Redshift ML to create the data ingestion pipelines. Use Amazon SageMaker Studio Classic to create the model deployment pipelines.",
      "D": "Use Amazon Athena to create the data ingestion pipelines. Use an Amazon SageMaker notebook to create the model deployment pipelines."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152178-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 29,
    "question": "수백 명의 데이터 과학자가 있는 회사는 Amazon SageMaker로 ML 모델을 만들고 있습니다. 모델들은 SageMaker Model Registry의 모델 그룹에 있습니다. 데이터 과학자들은 세 가지 범주로 분류됩니다: 컴퓨터 비전, 자연어 처리(NLP), 음성 인식. ML 엔지니어는 규모에 맞게 모델 발견성을 개선하기 위해 기존 모델들을 이들 그룹으로 구성하는 솔루션을 구현해야 합니다. 이 솔루션은 모델 아티팩트의 무결성과 기존 그룹화에 영향을 주지 않아야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "세 가지 범주 각각에 대해 사용자 정의 태그를 생성합니다. SageMaker Model Registry의 모델 패키지에 태그를 추가합니다.",
      "B": "각 범주에 대해 모델 그룹을 생성합니다. 기존 모델들을 이들 범주 모델 그룹으로 이동합니다.",
      "C": "SageMaker ML Lineage Tracking을 사용하여 어떤 모델 그룹이 모델을 포함해야 하는지 자동으로 식별하고 태깅합니다.",
      "D": "세 가지 범주 각각에 대해 Model Registry 컬렉션을 생성합니다. 기존 모델 그룹들을 이들 컬렉션으로 이동합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Registry — 모델의 메타데이터, 버전, 상태를 일원화로 관리하는 저장소\n▸ Model Registry Collections — 여러 모델 그룹을 논리적으로 조직화하기 위한 상위 계층 구조로, 기존 모델 그룹 구조는 유지하면서 추가 카테고리화가 가능\n▸ ML Lineage Tracking — 데이터 및 모델의 출처와 변환 이력을 추적하는 기능으로 자동 태깅용이 아님\n\n【정답 포인트】\n문제의 핵심은 \"기존 모델 아티팩트와 그룹화는 유지하면서\" \"범주별로 발견성을 개선\"하는 것입니다. Model Registry Collections는 모델 그룹들 위에 추상화 계층을 추가하여 기존 구조를 건드리지 않으면서도 세 가지 도메인별 조직화를 제공합니다. 모델 그룹을 이동하기만 하면 되므로 무결성이 보장됩니다.\n\n【오답 체크】\n(A) 태그는 메타데이터 추가일 뿐이며 \"그룹화\"를 이루지 못합니다. 또한 문제에서 요구하는 \"조직화\" 수준의 계층 구조를 제공하지 않습니다.\n(B) 모델 그룹을 새로 만들고 기존 모델을 \"이동\"하면 원래 모델 그룹이 비워지거나 재구성되어 \"기존 그룹화에 영향\"을 줍니다.\n(C) ML Lineage Tracking은 데이터와 모델 간의 변환 이력을 추적하는 기능이며 자동 분류나 카테고리 태깅 기능이 아닙니다.\n\n【시험 포인트】\n\"기존 구조 유지 + 상위 카테고리화\" → \"Collections\". \"태그 추가\", \"그룹 이동\", \"Lineage 추적\"은 각각 목표를 달성할 수 없습니다.",
    "en_q": "A company that has hundreds of data scientists is using Amazon SageMaker to create ML models. The models are in model groups in the SageMaker Model Registry. The data scientists are grouped into three categories: computer vision, natural language processing (NLP), and speech recognition. An ML engineer needs to implement a solution to organize the existing models into these groups to improve model discoverability at scale. The solution must not affect the integrity of the model artifacts and their existing groupings. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a custom tag for each of the three categories. Add the tags to the model packages in the SageMaker Model Registry.",
      "B": "Create a model group for each category. Move the existing models into these category model groups.",
      "C": "Use SageMaker ML Lineage Tracking to automatically identify and tag which model groups should contain the models.",
      "D": "Create a Model Registry collection for each of the three categories. Move the existing model groups into the collections."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152090-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 30,
    "question": "회사는 새로 만든 VPC의 공용 서브넷에서 Amazon SageMaker 도메인을 실행합니다. 네트워크가 적절하게 구성되어 있고 ML 엔지니어들이 SageMaker 도메인에 액세스할 수 있습니다. 최근 회사는 특정 IP 주소에서 도메인으로의 의심스러운 트래픽을 발견했습니다. 회사는 특정 IP 주소의 트래픽을 차단해야 합니다. 어떤 네트워크 구성 업데이트가 이 요구사항을 충족할까요?",
    "options": {
      "A": "보안 그룹 인바운드 규칙을 생성하여 특정 IP 주소의 트래픽을 거부합니다. 보안 그룹을 도메인에 할당합니다.",
      "B": "네트워크 ACL 인바운드 규칙을 생성하여 특정 IP 주소의 트래픽을 거부합니다. 도메인이 있는 서브넷의 기본 네트워크 ACL에 규칙을 할당합니다.",
      "C": "도메인의 섀도우 변형을 생성합니다. SageMaker Inference Recommender를 구성하여 특정 IP 주소의 트래픽을 섀도우 엔드포인트로 보냅니다.",
      "D": "특정 IP 주소의 인바운드 트래픽을 거부하는 VPC 라우트 테이블을 생성합니다. 라우트 테이블을 도메인에 할당합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Security Group — 인스턴스 레벨의 Stateful 방화벽으로 Inbound/Outbound 규칙으로 트래픽 제어\n▸ Network ACL — 서브넷 레벨의 Stateless 방화벽으로 명시적 거부 규칙이 가능하며 모든 인바운드 트래픽에 먼저 적용됨\n▸ Route Table — 트래픽의 라우팅 경로를 결정하는 역할이며 트래픽 거부에 사용되지 않음\n\n【정답 포인트】\n공용 서브넷에 있는 SageMaker 도메인으로의 특정 IP 트래픽을 \"거부\"해야 합니다. Security Group은 Stateful이므로 명시적 \"거부\" 규칙(Deny)을 지원하지 않습니다(기본 거부만 함). 그러나 Network ACL은 서브넷 레벨에서 명시적 Deny 규칙을 우선 처리할 수 있으며, 해당 IP의 모든 트래픽을 차단할 수 있습니다. 서브넷의 기본 Network ACL에 거부 규칙을 추가하면 서브넷의 모든 리소스(도메인 포함)에 적용됩니다.\n\n【오답 체크】\n(A) Security Group은 Stateful이지만 명시적 Deny 규칙을 지원하지 않습니다. SageMaker 도메인은 독립적인 보안 그룹 할당이 제한적이며, Deny를 통한 거부는 불가능합니다.\n(C) Shadow Variant와 Inference Recommender는 모델 배포 성능 비교 도구이지 보안 차단 메커니즘이 아닙니다.\n(D) Route Table은 패킷의 경로를 결정하는 것이지 거부하는 역할이 아닙니다. IP 기반 트래픽 차단에는 사용되지 않습니다.\n\n【시험 포인트】\n\"특정 IP 차단\" → \"Network ACL Deny 규칙\" (명시적 거부). Security Group은 Deny가 없고, Route Table은 라우팅용이며, Shadow Variant는 성능 비교용입니다.",
    "en_q": "A company runs an Amazon SageMaker domain in a public subnet of a newly created VPC. The network is configured properly, and ML engineers can access the SageMaker domain. Recently, the company discovered suspicious traffic to the domain from a specific IP address. The company needs to block traffic from the specific IP address. Which update to the network configuration will meet this requirement?",
    "en_opts": {
      "A": "Create a security group inbound rule to deny traffic from the specific IP address. Assign the security group to the domain.",
      "B": "Create a network ACL inbound rule to deny traffic from the specific IP address. Assign the rule to the default network ACL for the subnet where the domain is located.",
      "C": "Create a shadow variant for the domain. Configure SageMaker Inference Recommender to send traffic from the specific IP address to the shadow endpoint.",
      "D": "Create a VPC route table to deny inbound traffic from the specific IP address. Assign the route table to the domain."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152181-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 31,
    "question": "회사는 다양한 언어로 음성, 비디오, 텍스트 데이터를 수집하고 있습니다. 회사는 대규모 언어 모델(LLM)을 사용하여 스페인어로 된 수집된 데이터를 요약해야 합니다. 어떤 솔루션이 이 요구사항을 최소한의 시간에 충족할까요?",
    "options": {
      "A": "Amazon SageMaker에서 데이터를 영어 텍스트로 변환하는 모델을 학습 및 배포합니다. SageMaker에서 요약을 위해 LLM을 학습 및 배포합니다.",
      "B": "Amazon Transcribe와 Amazon Translate를 사용하여 데이터를 영어 텍스트로 변환합니다. Amazon Bedrock의 Jurassic 모델을 사용하여 텍스트를 요약합니다.",
      "C": "Amazon Rekognition과 Amazon Translate를 사용하여 데이터를 영어 텍스트로 변환합니다. Amazon Bedrock의 Anthropic Claude 모델을 사용하여 텍스트를 요약합니다.",
      "D": "Amazon Comprehend와 Amazon Translate를 사용하여 데이터를 영어 텍스트로 변환합니다. Amazon Bedrock의 Stable Diffusion 모델을 사용하여 텍스트를 요약합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Transcribe — 음성 파일을 텍스트로 자동 변환하는 완전관리형 서비스\n▸ Amazon Translate — 텍스트를 여러 언어 간 자동으로 번역하는 관리형 서비스\n▸ Amazon Bedrock — Jurassic, Claude, Stable Diffusion 등 다양한 기반 모델에 접근할 수 있는 서비스로 추가 학습 없이 즉시 사용 가능\n▸ Amazon Rekognition — 이미지 및 비디오의 물체, 얼굴, 텍스트 감지 서비스 (음성 변환 아님)\n\n【정답 포인트】\n문제에서 \"최소한의 시간\"으로 해결해야 합니다. 음성·비디오·텍스트를 스페인어에서 영어로 변환 후 요약해야 합니다. Transcribe는 음성→텍스트, Translate는 스페인어→영어 변환이 가능하고, Bedrock의 Jurassic 모델은 텍스트 요약에 최적화되어 있으며 추가 학습 없이 즉시 사용할 수 있습니다. 기 구축된 서비스들을 조합하므로 새로 모델을 학습하는 시간이 없습니다.\n\n【오답 체크】\n(A) SageMaker에서 데이터 변환 및 LLM을 처음부터 학습해야 하므로 매우 오래 걸립니다. 이미 검증된 서비스 조합이 훨씬 빠릅니다.\n(C) Rekognition은 이미지와 비디오 내 텍스트/물체 감지 서비스이지 음성을 텍스트로 변환하지 못합니다. Transcribe의 대체 불가능한 역할을 수행할 수 없습니다.\n(D) Stable Diffusion은 텍스트→이미지 생성 모델로 텍스트 요약에 전혀 맞지 않습니다.\n\n【시험 포인트】\n\"음성+비디오+텍스트 + 스페인어 → 요약\" → \"Transcribe + Translate + Bedrock(LLM)\". Rekognition은 음성 변환 불가, Stable Diffusion은 이미지 생성용, 모델 학습은 시간 소모.",
    "en_q": "A company is gathering audio, video, and text data in various languages. The company needs to use a large language model (LLM) to summarize the gathered data that is in Spanish. Which solution will meet these requirements in the LEAST amount of time?",
    "en_opts": {
      "A": "Train and deploy a model in Amazon SageMaker to convert the data into English text. Train and deploy an LLM in SageMaker to summarize the text.",
      "B": "Use Amazon Transcribe and Amazon Translate to convert the data into English text. Use Amazon Bedrock with the Jurassic model to summarize the text.",
      "C": "Use Amazon Rekognition and Amazon Translate to convert the data into English text. Use Amazon Bedrock with the Anthropic Claude model to summarize the text.",
      "D": "Use Amazon Comprehend and Amazon Translate to convert the data into English text. Use Amazon Bedrock with the Stable Diffusion model to summarize the text."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152182-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 32,
    "question": "금융 회사는 외부 제공자로부터 높은 양의 실시간 시장 데이터 스트림을 받습니다. 스트림은 매초 수천 개의 JSON 레코드로 구성됩니다. 회사는 이상 데이터 포인트를 식별하기 위해 AWS에서 확장성 있는 솔루션을 구현해야 합니다. 어떤 솔루션이 운영 부담이 가장 적으면서 이 요구사항을 충족할까요?",
    "options": {
      "A": "실시간 데이터를 Amazon Kinesis 데이터 스트림으로 수집합니다. 데이터 스트림을 처리하고 데이터 이상을 감지하기 위해 Amazon Managed Service for Apache Flink의 기본 제공 RANDOM_CUT_FOREST 함수를 사용합니다.",
      "B": "실시간 데이터를 Amazon Kinesis 데이터 스트림으로 수집합니다. 실시간 이상 감지를 위해 Amazon SageMaker 엔드포인트를 배포합니다. 이상을 감지하기 위해 AWS Lambda 함수를 생성합니다. 데이터 스트림을 사용하여 Lambda 함수를 호출합니다.",
      "C": "Apache Kafka를 Amazon EC2 인스턴스에 수집합니다. 실시간 이상 감지를 위해 Amazon SageMaker 엔드포인트를 배포합니다. 이상을 감지하기 위해 AWS Lambda 함수를 생성합니다. 데이터 스트림을 사용하여 Lambda 함수를 호출합니다.",
      "D": "실시간 데이터를 Amazon Simple Queue Service(Amazon SQS) FIFO 큐로 보냅니다. AWS Lambda 함수를 생성하여 큐 메시지를 사용합니다. Lambda 함수를 프로그래밍하여 배치 처리 및 이상 감지를 위해 AWS Glue ETL 작업을 시작합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Kinesis Streams — 실시간 스트리밍 데이터 수집을 위한 완전관리형 서비스\n▸ Amazon Managed Service for Apache Flink — Kinesis 스트림을 실시간으로 분석하는 관리형 서비스로 SQL/Java/Python 지원\n▸ RANDOM_CUT_FOREST — Flink에 기본 제공되는 이상 감지(Anomaly Detection) 알고리즘으로 별도 모델 구축 불필요\n▸ AWS Lambda + SageMaker — 기존 모델을 호출하는 방식으로 추가 관리 필요\n\n【정답 포인트】\n\"운영 부담이 가장 적으면서\" 실시간 스트림의 이상을 감지해야 합니다. Kinesis Streams로 데이터를 수집하고, Flink의 기본 제공 RANDOM_CUT_FOREST 알고리즘으로 즉시 이상 감지가 가능합니다. 별도의 모델 학습·배포·유지보수가 없으므로 운영 부담이 최소화됩니다. Flink 자체가 완전관리형이므로 인프라 관리도 불필요합니다.\n\n【오답 체크】\n(B) Kinesis + Lambda + SageMaker 조합은 여러 서비스를 통합해야 하며, SageMaker 엔드포인트를 별도로 배포·관리해야 하므로 운영 부담이 큽니다. 또한 Lambda 이벤트 소스 매핑 구성도 필요합니다.\n(C) EC2에서 Kafka를 자체 관리하면 운영 부담이 극도로 높습니다. 패치, 확장, 모니터링 모두 수동으로 처리해야 합니다.\n(D) SQS FIFO + Lambda + Glue 조합은 배치 처리이므로 \"실시간\" 요구사항에 맞지 않으며, 지연이 발생합니다.\n\n【시험 포인트】\n\"실시간 스트림 + 이상 감지 + 최소 운영 부담\" → \"Kinesis + Managed Flink + RANDOM_CUT_FOREST\". EC2 관리, SageMaker 배포, 배치 처리는 모두 운영 부담이 큽니다.",
    "en_q": "A financial company receives a high volume of real-time market data streams from an external provider. The streams consist of thousands of JSON records every second. The company needs to implement a scalable solution on AWS to identify anomalous data points. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Ingest real-time data into Amazon Kinesis data streams. Use the built-in RANDOM_CUT_FOREST function in Amazon Managed Service for Apache Flink to process the data streams and to detect data anomalies.",
      "B": "Ingest real-time data into Amazon Kinesis data streams. Deploy an Amazon SageMaker endpoint for real-time outlier detection. Create an AWS Lambda function to detect anomalies. Use the data streams to invoke the Lambda function.",
      "C": "Ingest real-time data into Apache Kafka on Amazon EC2 instances. Deploy an Amazon SageMaker endpoint for real-time outlier detection. Create an AWS Lambda function to detect anomalies. Use the data streams to invoke the Lambda function.",
      "D": "Send real-time data to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create an AWS Lambda function to consume the queue messages. Program the Lambda function to start an AWS Glue extract, transform, and load (ETL) job for batch processing and anomaly detection."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152183-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 33,
    "question": "회사는 제품 출시 후 고객 상호작용으로부터 많은 수의 채팅 기록을 보유하고 있습니다. ML 엔지니어는 채팅 데이터를 분석하기 위해 ML 모델을 만들어야 합니다. ML 엔지니어는 제품에 대한 고객 감정을 검토하여 제품의 성공 여부를 판단해야 합니다. 어떤 조치를 ML 엔지니어가 최소한의 시간으로 평가를 완료해야 할까요?",
    "options": {
      "A": "채팅 대화의 감정을 분석하기 위해 Amazon Rekognition을 사용합니다.",
      "B": "채팅 대화의 감정을 분석하기 위해 Naive Bayes 분류기를 학습합니다.",
      "C": "채팅 대화의 감정을 분석하기 위해 Amazon Comprehend를 사용합니다.",
      "D": "채팅 대화의 감정을 분류하기 위해 Random Forests를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon Comprehend — 텍스트 데이터에서 감정 분석(Sentiment Analysis), 엔티티 추출, 핵심 구문 추출 등을 제공하는 완전관리형 자연어 처리 서비스\n▸ Amazon Rekognition — 이미지와 비디오 분석 서비스로 텍스트 감정 분석 기능이 없음\n▸ Naive Bayes / Random Forests — 직접 학습해야 하는 모델로 학습 데이터, 전처리, 하이퍼파라미터 튜닝에 시간 소모\n\n【정답 포인트】\n\"최소한의 시간\"으로 텍스트 기반 채팅의 감정 분석을 완료해야 합니다. Amazon Comprehend는 사전 학습된 자연어 처리 모델로 텍스트를 입력하면 즉시 감정(Positive/Negative/Neutral/Mixed)을 반환합니다. 별도의 모델 학습, 데이터 준비, 특성 엔지니어링이 불필요하므로 매우 빠르게 평가를 완료할 수 있습니다.\n\n【오답 체크】\n(A) Rekognition은 이미지와 비디오 분석 서비스이며 텍스트 감정 분석 기능이 없습니다. 채팅 텍스트 분석에는 적합하지 않습니다.\n(B) Naive Bayes 분류기를 처음부터 학습하려면 레이블이 지정된 학습 데이터, 전처리, 모델 학습, 평가 등 많은 시간이 필요합니다.\n(D) Random Forests 역시 학습 데이터 준비, 특성 엔지니어링, 하이퍼파라미터 튜닝, 모델 평가 등에 상당한 시간이 소모됩니다.\n\n【시험 포인트】\n\"텍스트 감정 분석 + 최소 시간\" → \"Amazon Comprehend (기 학습된 서비스)\". Rekognition은 이미지용, Naive Bayes/Random Forests는 학습 필요, SageMaker 모델은 더욱 오래 걸림.",
    "en_q": "A company has a large collection of chat recordings from customer interactions after a product release. An ML engineer needs to create an ML model to analyze the chat data. The ML engineer needs to determine the success of the product by reviewing customer sentiments about the product. Which action should the ML engineer take to complete the evaluation in the LEAST amount of time?",
    "en_opts": {
      "A": "Use Amazon Rekognition to analyze sentiments of the chat conversations.",
      "B": "Train a Naive Bayes classifier to analyze sentiments of the chat conversations.",
      "C": "Use Amazon Comprehend to analyze sentiments of the chat conversations.",
      "D": "Use random forests to classify sentiments of the chat conversations."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152184-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 34,
    "question": "회사는 Amazon Bedrock을 통해 Anthropic Claude 대규모 언어 모델(LLM)로 요청을 보내는 대화형 AI 어시스턴트를 가지고 있습니다. 사용자들이 유사한 질문을 여러 번 할 때 때때로 다른 답변을 받는다고 보고합니다. ML 엔지니어는 응답의 일관성을 개선하고 무작위성을 줄이기 위한 솔루션을 구현해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "temperature 파라미터와 top_k 파라미터를 증가시킵니다.",
      "B": "temperature 파라미터를 증가시킵니다. top_k 파라미터를 감소시킵니다.",
      "C": "temperature 파라미터를 감소시킵니다. top_k 파라미터를 증가시킵니다.",
      "D": "temperature 파라미터와 top_k 파라미터를 감소시킵니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Temperature — LLM의 출력 무작위성을 제어하는 파라미터. 높을수록 다양한 응답, 낮을수록 일관된 응답\n▸ Top_k — 다음 토큰 선택 시 확률이 높은 상위 k개의 토큰만 고려하는 샘플링 방식. 높을수록 선택지 넓음(다양성↑), 낮을수록 좁음(일관성↑)\n▸ 일관성과 무작위성 — Temperature와 Top_k를 낮추면 모델의 출력이 결정적(deterministic)으로 수렴함\n\n【정답 포인트】\n문제에서 \"유사한 질문에 대해 다른 답변(무작위성)\"을 받으므로 \"일관성을 개선\"해야 합니다. Temperature를 낮추면 모델이 높은 확률의 토큰만 선택하게 되어 일관성이 높아지고, Top_k를 낮추면 선택 범위를 축소하여 다양성을 제한합니다. 두 파라미터를 모두 낮추면 거의 동일한 조건에서는 거의 동일한 응답이 생성됩니다.\n\n【오답 체크】\n(A) Temperature와 Top_k를 모두 증가시키면 무작위성이 더 높아져 응답의 다양성만 증가하고 일관성은 악화됩니다.\n(B) Temperature를 증가시키면 무작위성이 높아지고(일관성 감소), Top_k를 감소시키면 선택지가 줄어듭니다(상충되는 효과). 일관성 개선 효과가 혼재됩니다.\n(C) Temperature를 감소시키면 일관성이 개선되지만, Top_k를 증가시키면 선택지가 넓어져 무작위성이 증가합니다(상충). 일관성 개선 효과가 약화됩니다.\n\n【시험 포인트】\n\"응답 일관성 개선 + 무작위성 감소\" → \"Temperature↓ + Top_k↓\". Temperature는 기본 무작위성 제어, Top_k는 샘플링 범위 제한. 둘 다 낮춰야 최대 일관성을 달성합니다.",
    "en_q": "A company has a conversational AI assistant that sends requests through Amazon Bedrock to an Anthropic Claude large language model (LLM). Users report that when they ask similar questions multiple times, they sometimes receive different answers. An ML engineer needs to improve the responses to be more consistent and less random. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Increase the temperature parameter and the top_k parameter.",
      "B": "Increase the temperature parameter. Decrease the top_k parameter.",
      "C": "Decrease the temperature parameter. Increase the top_k parameter.",
      "D": "Decrease the temperature parameter and the top_k parameter."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152185-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 35,
    "question": "회사는 ML을 사용하여 농부의 밭에 특정 잡초의 존재를 예측합니다. 회사는 predictor_type 하이퍼파라미터의 multiclass_classifier 값으로 Amazon SageMaker linear learner 기본 알고리즘을 사용합니다. 회사는 거짓 양성을 최소화하기 위해 무엇을 해야 할까요?",
    "options": {
      "A": "weight decay 하이퍼파라미터의 값을 0으로 설정합니다.",
      "B": "학습 에포크 수를 증가시킵니다.",
      "C": "target_precision 하이퍼파라미터의 값을 증가시킵니다.",
      "D": "predictor_type 하이퍼파라미터의 값을 regressor로 변경합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Linear Learner — 선형 회귀와 분류를 위한 확장 가능한 알고리즘\n▸ target_precision — Linear Learner의 하이퍼파라미터로 모델이 달성해야 할 정밀도(Precision) 목표값. 높을수록 거짓 양성을 줄임\n▸ False Positives — 실제로는 음성(no weed)인데 양성(weed)으로 잘못 예측한 경우\n▸ Precision — 양성으로 예측한 것 중 실제 양성의 비율. Precision이 높으면 거짓 양성이 적음\n\n【정답 포인트】\n거짓 양성을 최소화하려면 Precision을 높여야 합니다. SageMaker Linear Learner의 target_precision 하이퍼파라미터를 증가시키면 모델이 양성 예측을 더 보수적으로 하게 되어, 높은 확신이 있을 때만 잡초가 있다고 예측합니다. 이는 \"이것이 정말 잡초인가?\"라는 기준을 높이는 것과 같아 거짓 양성이 감소합니다.\n\n【오답 체크】\n(A) Weight decay는 L2 정규화 강도를 제어하는 것으로 과적합을 방지하는 역할입니다. 거짓 양성 감소와 직접적 연관이 없습니다.\n(B) 에포크를 증가시키면 모델이 더 오래 학습되지만 거짓 양성 감소에 대한 직접적 영향이 없습니다. 오히려 과적합 위험이 있습니다.\n(D) Linear Learner의 predictor_type을 regressor로 변경하면 분류 모델이 회귀 모델로 바뀌어 \"잡초 있음/없음\"을 연속값으로 예측하게 되므로 목표(분류)와 맞지 않습니다.\n\n【시험 포인트】\n\"거짓 양성 최소화\" → \"Precision 증가\" → \"SageMaker Linear Learner의 target_precision 파라미터 증가\". Weight decay는 정규화, 에포크는 학습 반복, regressor는 모델 유형 변경으로 모두 무관합니다.",
    "en_q": "A company is using ML to predict the presence of a specific weed in a farmer's field. The company is using the Amazon SageMaker linear learner built-in algorithm with a value of multiclass_classifier for the predictor_type hyperparameter. What should the company do to MINIMIZE false positives?",
    "en_opts": {
      "A": "Set the value of the weight decay hyperparameter to zero.",
      "B": "Increase the number of training epochs.",
      "C": "Increase the value of the target_precision hyperparameter.",
      "D": "Change the value of the predictor_type hyperparameter to regressor."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152186-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 36,
    "question": "회사는 전자상거래 웹사이트로부터 판매 거래에 대한 데이터 수집 파이프라인을 구현했습니다. 회사는 Amazon Data Firehose를 사용하여 Amazon OpenSearch Service로 데이터를 수집합니다. Firehose 스트림의 버퍼 간격은 60초로 설정되어 있습니다. OpenSearch 선형 모델이 데이터를 기반으로 실시간 판매 예측을 생성하고 OpenSearch 대시보드에 데이터를 표시합니다. 회사는 데이터 수집 파이프라인을 최적화하여 실시간 대시보드에 대해 1초 미만의 지연을 지원해야 합니다. 어떤 아키텍처 변경이 이 요구사항을 충족할까요?",
    "options": {
      "A": "Firehose 스트림에서 0 버퍼링을 사용합니다. PutRecordBatch 작업에 사용되는 배치 크기를 조정합니다.",
      "B": "Firehose 스트림을 AWS DataSync 작업으로 바꿉니다. 작업을 향상된 팬아웃 소비자로 구성합니다.",
      "C": "Firehose 스트림의 버퍼 간격을 60초에서 120초로 증가시킵니다.",
      "D": "Firehose 스트림을 Amazon Simple Queue Service(Amazon SQS) 큐로 바꿉니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Data Firehose — 배치 기반 실시간 데이터 전달 서비스로 버퍼 크기나 시간 중 하나가 도달하면 데이터를 대상으로 전달\n▸ Buffer Interval — Firehose가 데이터를 모아두는 시간. 길수록 지연 증가\n▸ PutRecordBatch — Firehose에 여러 레코드를 한 번에 전송하는 작업으로 배치 크기 제어 가능\n▸ Sub-second Latency — 1초 미만의 지연을 목표로 함\n\n【정답 포인트】\n현재 60초 버퍼 간격으로 인해 1초 미만의 지연 요구사항을 만족하지 못합니다. \"0 버퍼링\"으로 설정하면 버퍼링 지연을 완전히 제거하고, PutRecordBatch 배치 크기를 작게 조정하여 레코드가 즉시 OpenSearch로 전달됩니다. 이렇게 하면 데이터가 거의 실시간으로(sub-second) 대시보드에 나타나게 됩니다.\n\n【오답 체크】\n(B) AWS DataSync는 온프레미스와 AWS 간의 데이터 동기화 서비스로 Firehose의 대체재가 아닙니다. \"향상된 팬아웃 소비자\"는 Kinesis 스트림의 개념이지 DataSync의 기능이 아닙니다.\n(C) 버퍼 간격을 60초에서 120초로 증가시키면 지연이 2배 증가하여 1초 미만 요구사항을 더욱 만족할 수 없습니다.\n(D) SQS 큐는 배치 처리 및 비동기 처리용 서비스로 실시간 대시보드 업데이트에는 지연이 발생합니다. Firehose보다 지연이 더 클 가능성이 높습니다.\n\n【시험 포인트】\n\"버퍼 지연 감소 + sub-second latency\" → \"Firehose 버퍼 간격 0 + PutRecordBatch 배치 크기 조정\". 버퍼 간격 증가, 서비스 변경은 모두 틀립니다.",
    "en_q": "A company has implemented a data ingestion pipeline for sales transactions from its ecommerce website. The company uses Amazon Data Firehose to ingest data into Amazon OpenSearch Service. The buffer interval of the Firehose stream is set for 60 seconds. An OpenSearch linear model generates real-time sales forecasts based on the data and presents the data in an OpenSearch dashboard. The company needs to optimize the data ingestion pipeline to support sub-second latency for the real-time dashboard. Which change to the architecture will meet these requirements?",
    "en_opts": {
      "A": "Use zero buffering in the Firehose stream. Tune the batch size that is used in the PutRecordBatch operation.",
      "B": "Replace the Firehose stream with an AWS DataSync task. Configure the task with enhanced fan-out consumers.",
      "C": "Increase the buffer interval of the Firehose stream from 60 seconds to 120 seconds.",
      "D": "Replace the Firehose stream with an Amazon Simple Queue Service (Amazon SQS) queue."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152187-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 37,
    "question": "회사는 Amazon SageMaker에서 ML 모델을 학습했습니다. 회사는 모델을 호스팅하여 프로덕션 환경에서 추론을 제공해야 합니다. 모델은 높은 가용성을 갖추어야 하고 최소 지연 시간으로 응답해야 합니다. 각 요청의 크기는 1KB~3MB 사이입니다. 모델은 하루 종일 예측 불가능한 요청 급증을 받습니다. 추론은 수요의 변화에 따라 비례적으로 조정되어야 합니다. 회사는 모델을 프로덕션에 배포하여 이 요구사항을 충족해야 할까요?",
    "options": {
      "A": "SageMaker 실시간 추론 엔드포인트를 생성합니다. 자동 스케일링을 구성합니다. 기존 모델을 제시하도록 엔드포인트를 구성합니다.",
      "B": "Amazon Elastic Container Service(Amazon ECS) 클러스터에 모델을 배포합니다. ECS 클러스터의 CPU를 기반으로 하는 ECS 예정된 스케일링을 사용합니다.",
      "C": "Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터에 SageMaker Operator를 설치합니다. Amazon EKS에서 모델을 배포합니다. 메모리 메트릭을 기반으로 레플리카를 스케일링하도록 가로 포드 자동 스케일링을 설정합니다.",
      "D": "ALB(Application Load Balancer) 뒤에 Spot Fleet을 가진 Spot Instances를 사용합니다. 추론을 위해 ALBRequestCountPerTarget 메트릭을 자동 스케일링의 메트릭으로 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker Real-time Inference Endpoint — 낮은 지연 시간에 소수의 요청을 처리하는 엔드포인트로 높은 가용성과 자동 스케일링 기본 지원\n▸ Auto Scaling — 요청 수에 따라 엔드포인트의 인스턴스 수를 자동으로 조정하는 기능\n▸ Elastic Load Balancer — 여러 엔드포인트 인스턴스 간 트래픽 분산으로 높은 가용성 제공\n▸ Spot Instances — 비용 효율적이지만 예측 불가능한 중단(interruption) 가능성으로 높은 가용성이 필요한 프로덕션에는 부적절\n\n【정답 포인트】\n요구사항: \"높은 가용성\" + \"최소 지연\" + \"예측 불가능한 요청 급증\" + \"비례적 확장\". SageMaker 실시간 추론 엔드포인트는 이 모든 요구사항을 기본으로 제공합니다. 자동 스케일링으로 요청 수에 따라 자동 확장되고, 여러 인스턴스 간 로드 밸런싱으로 높은 가용성이 보장되며, 실시간 추론 최적화로 최소 지연이 달성됩니다. 완전관리형이므로 운영 부담도 적습니다.\n\n【오답 체크】\n(B) ECS 클러스터에 수동 배포하면 인프라 관리 부담이 크고, \"예정된 스케일링\"(시간 기반)은 \"예측 불가능한 급증\"에 대응할 수 없습니다. 지연도 더 높을 가능성이 있습니다.\n(C) EKS에 Operator를 설치하는 것은 복잡하며, \"메모리 메트릭\"은 요청 수와의 상관관계가 약할 수 있습니다. 지연 시간 최적화가 SageMaker 엔드포인트만큼 좋지 않습니다.\n(D) Spot Instances는 언제든 중단될 수 있으므로 \"높은 가용성\" 요구사항을 만족할 수 없습니다. 프로덕션 환경에는 부적절합니다.\n\n【시험 포인트】\n\"높은 가용성 + 최소 지연 + 예측 불가능한 트래픽\" → \"SageMaker 실시간 엔드포인트 + 자동 스케일링\". ECS/EKS는 관리 부담, Spot Instances는 중단 가능성, 예정된 스케일링은 트래픽 급증 대응 불가.",
    "en_q": "A company has trained an ML model in Amazon SageMaker. The company needs to host the model to provide inferences in a production environment. The model must be highly available and must respond with minimum latency. The size of each request will be between 1 KB and 3 MB. The model will receive unpredictable bursts of requests during the day. The inferences must adapt proportionally to the changes in demand. How should the company deploy the model into production to meet these requirements?",
    "en_opts": {
      "A": "Create a SageMaker real-time inference endpoint. Configure auto scaling. Configure the endpoint to present the existing model.",
      "B": "Deploy the model on an Amazon Elastic Container Service (Amazon ECS) cluster. Use ECS scheduled scaling that is based on the CPU of the ECS cluster.",
      "C": "Install SageMaker Operator on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Deploy the model in Amazon EKS. Set horizontal pod auto scaling to scale replicas based on the memory metric.",
      "D": "Use Spot Instances with a Spot Fleet behind an Application Load Balancer (ALB) for inferences. Use the ALBRequestCountPerTarget metric as the metric for auto scaling."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152188-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 38,
    "question": "ML 엔지니어는 Amazon EMR 클러스터를 사용하여 대량의 데이터를 배치로 처리해야 합니다. 데이터 손실은 허용되지 않습니다. 어떤 인스턴스 구매 옵션이 가장 비용 효율적으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "기본 노드, 코어 노드, 작업 노드를 모두 온디맨드 인스턴스로 실행합니다.",
      "B": "기본 노드, 코어 노드, 작업 노드를 모두 Spot 인스턴스로 실행합니다.",
      "C": "기본 노드를 온디맨드 인스턴스로 실행합니다. 코어 노드와 작업 노드를 Spot 인스턴스로 실행합니다.",
      "D": "기본 노드와 코어 노드를 온디맨드 인스턴스로 실행합니다. 작업 노드를 Spot 인스턴스로 실행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ EMR Primary Node — EMR 클러스터의 마스터 노드로 작업 관리, 조정, 메타데이터 저장 (중단 불가)\n▸ EMR Core Nodes — HDFS 데이터스토어를 유지하는 데이터 노드 (중단 시 데이터 손실)\n▸ EMR Task Nodes — 데이터 저장 없이 순수 계산만 수행 (중단 가능, 재계산 가능)\n▸ Spot Instances — 온디맨드보다 90% 저렴하지만 언제든 중단될 수 있음\n▸ On-Demand Instances — 높은 비용이지만 안정적\n\n【정답 포인트】\n\"데이터 손실 불허용\" + \"최대 비용 효율\". Primary Node는 클러스터 마스터로 중단되면 전체 작업이 실패하므로 반드시 On-Demand여야 합니다. Core Nodes는 HDFS 데이터를 저장하므로 Spot으로 중단되면 데이터 손실 위험이 있어 On-Demand가 필요합니다. Task Nodes는 데이터를 저장하지 않으므로 Spot으로 중단되어도 손실이 없으며, 재계산 가능하므로 비용 절감을 위해 Spot 사용 가능합니다.\n\n【오답 체크】\n(A) 모든 노드를 On-Demand로 실행하면 데이터 손실 위험은 없지만 최대 비용이 발생합니다. Spot 활용 가능성이 없습니다.\n(B) Task Nodes를 Spot으로 실행하는 것은 OK이지만, Primary와 Core Nodes를 Spot으로 실행하면 \"데이터 손실 불허용\" 요구사항 위배입니다. Core Nodes의 HDFS 데이터가 손실될 수 있습니다.\n(C) Primary Node만 On-Demand이고 Core Nodes를 Spot으로 실행하면 HDFS 데이터 손실 위험이 있습니다.\n\n【시험 포인트】\n\"데이터 손실 불허용 + 최대 비용 효율\" → \"Primary(On-Demand) + Core(On-Demand) + Task(Spot)\". 데이터 저장 여부로 구분: 저장 노드는 On-Demand, 계산 노드는 Spot.",
    "en_q": "An ML engineer needs to use an Amazon EMR cluster to process large volumes of data in batches. Any data loss is unacceptable. Which instance purchasing option will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Run the primary node, core nodes, and task nodes on On-Demand Instances.",
      "B": "Run the primary node, core nodes, and task nodes on Spot Instances.",
      "C": "Run the primary node on an On-Demand Instance. Run the core nodes and task nodes on Spot Instances.",
      "D": "Run the primary node and core nodes on On-Demand Instances. Run the task nodes on Spot Instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152189-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 39,
    "question": "회사는 ML 운영의 지속 가능성을 개선하고 싶어합니다. 어떤 조치가 회사의 학습 작업과 관련된 에너지 사용 및 계산 리소스를 줄일까요? (2개 선택)",
    "options": {
      "A": "Amazon SageMaker Debugger를 사용하여 수렴하지 않는 조건이 감지될 때 학습 작업을 중지합니다.",
      "B": "데이터 레이블링을 위해 Amazon SageMaker Ground Truth를 사용합니다.",
      "C": "AWS Lambda 함수를 사용하여 모델을 배포합니다.",
      "D": "학습을 위해 AWS Trainium 인스턴스를 사용합니다.",
      "E": "분산 학습 옵션을 사용하여 PyTorch 또는 TensorFlow를 사용합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ SageMaker Debugger — 학습 작업 중 지표를 실시간 모니터링하고 문제 감지 시 작업 중지 가능 (무의미한 학습 방지)\n▸ AWS Trainium — ML 학습 최적화 전용 칩으로 에너지 효율이 높고 학습 속도 향상\n▸ SageMaker Ground Truth — 데이터 레이블링 서비스로 학습 데이터 준비에 사용 (학습 자체의 에너지는 줄이지 않음)\n▸ AWS Lambda — 추론(배포) 관련 기능으로 학습 에너지와 무관\n▸ Distributed Training — 학습을 여러 인스턴스에 분산하는 방식으로 개별 인스턴스 부하 감소하지만 전체 계산 리소스는 더 사용\n\n【정답 포인트】\n\"에너지 사용 및 계산 리소스 감소\"는 학습 단계에서 불필요한 계산을 줄이거나 더 효율적인 하드웨어를 사용해야 합니다.\n(A) SageMaker Debugger는 수렴하지 않는 조건(loss가 계속 증가, 메트릭이 개선 안 됨 등)을 감지하고 학습을 일찍 중지하여 낭비되는 계산 리소스를 제거합니다.\n(D) AWS Trainium은 학습 전용 칩으로 GPU/CPU 대비 에너지 효율이 훨씬 높아 동일한 작업에 더 적은 전력 소모합니다.\n\n【오답 체크】\n(B) SageMaker Ground Truth는 데이터 레이블링(준비 단계)에 사용되며, 학습 작업 자체의 에너지나 계산 리소스를 줄이지 않습니다.\n(C) AWS Lambda는 배포(추론) 환경의 기능으로 학습 단계의 에너지 사용과 직접 관련이 없습니다.\n(E) 분산 학습(PyTorch/TensorFlow distributed)은 여러 인스턴스를 사용하므로 전체 계산 리소스가 증가하고 통신 오버헤드도 발생합니다. 에너지 절감과 반대입니다.\n\n【시험 포인트】\n\"학습 에너지/리소스 감소\" → \"불필요한 학습 중지(Debugger) + 효율 칩(Trainium)\". Ground Truth는 레이블링, Lambda는 배포, 분산학습은 리소스 증가.",
    "en_q": "A company wants to improve the sustainability of its ML operations. Which actions will reduce the energy usage and computational resources that are associated with the company's training jobs? (Choose two.)",
    "en_opts": {
      "A": "Use Amazon SageMaker Debugger to stop training jobs when non-converging conditions are detected.",
      "B": "Use Amazon SageMaker Ground Truth for data labeling.",
      "C": "Deploy models by using AWS Lambda functions.",
      "D": "Use AWS Trainium instances for training.",
      "E": "Use PyTorch or TensorFlow with the distributed training option."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152190-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 40,
    "question": "회사는 여러 ML 예측 모델을 만들 계획입니다. 학습 데이터는 Amazon S3에 저장되어 있습니다. 전체 데이터세트는 5TB 이상의 크기이며 CSV, JSON, Apache Parquet 및 단순 텍스트 파일로 구성됩니다. 데이터는 여러 연속 단계에서 처리되어야 합니다. 단계에는 시간이 걸릴 수 있는 복잡한 조작이 포함됩니다. 일부 처리에는 자연어 처리(NLP) 변환이 포함됩니다. 전체 프로세스는 자동화되어야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "SageMaker Data Wrangler를 사용하여 각 단계에서 데이터를 처리합니다. Data Wrangler 작업을 사용하여 프로세스를 자동화합니다.",
      "B": "각 데이터 처리 단계에 Amazon SageMaker 노트북을 사용합니다. Amazon EventBridge를 사용하여 프로세스를 자동화합니다.",
      "C": "AWS Lambda 함수를 사용하여 각 단계에서 데이터를 처리합니다. AWS Step Functions과 Amazon EventBridge를 사용하여 프로세스를 자동화합니다.",
      "D": "Amazon SageMaker Pipelines를 사용하여 데이터 처리 단계의 파이프라인을 생성합니다. Amazon EventBridge를 사용하여 파이프라인을 자동화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Data Wrangler — 데이터 준비 전용으로 5TB 이상의 대용량 데이터와 복잡한 NLP 변환에는 제한적\n▸ SageMaker Pipelines — 데이터 처리, 특성 엔지니어링, 모델 학습, 배포 등 전체 ML 워크플로우를 단계별로 정의하고 자동화하는 완전 관리형 서비스\n▸ AWS Step Functions — 서버리스 워크플로우 조정 서비스로 Lambda 함수 등을 연결 (복잡한 ETL/NLP에는 부적절)\n▸ Amazon EventBridge — 이벤트 기반 자동 트리거 서비스\n▸ Lambda — 계산 시간 제약(15분 제한)으로 시간이 걸리는 복잡한 처리에 부적절\n\n【정답 포인트】\n\"5TB 이상 + CSV/JSON/Parquet/텍스트 + 복잡한 조작(시간 소모) + NLP 변환 + 완전 자동화\". SageMaker Pipelines는 다양한 파일 형식을 처리할 수 있고, Processing Steps로 복잡한 변환(NLP 포함)을 실행하며, 파이프라인 내에서 순차 및 병렬 실행을 정의할 수 있습니다. 또한 EventBridge와 통합하여 트리거 기반 자동화가 가능합니다. 대용량 데이터의 다단계 처리에 최적화된 솔루션입니다.\n\n【오답 체크】\n(A) Data Wrangler는 대화형 데이터 준비 도구로 자동화와 확장성이 제한적이며, NLP 변환 기능도 제한적입니다. 5TB 규모의 자동 파이프라인 구축에 부적절합니다.\n(B) 노트북 + EventBridge 조합은 노트북 실행을 자동화할 수 있지만, 노트북 기반 파이프라인은 운영 복잡도가 높고 확장성도 떨어집니다. ML 파이프라인 자동화에 최적화되지 않았습니다.\n(C) Lambda는 최대 15분 실행 제한이 있으므로 \"시간이 걸리는\" 복잡한 처리에 부적절합니다. Step Functions로 연결해도 Lambda의 시간 제약은 해결 불가능합니다.\n\n【시험 포인트】\n\"대용량(5TB) + 다양한 형식 + 복잡한 처리(NLP) + 자동화\" → \"SageMaker Pipelines\". Data Wrangler는 대화형, Lambda는 시간 제약, 노트북은 운영 부담 높음.",
    "en_q": "A company is planning to create several ML prediction models. The training data is stored in Amazon S3. The entire dataset is more than 5 TB in size and consists of CSV, JSON, Apache Parquet, and simple text files. The data must be processed in several consecutive steps. The steps include complex manipulations that can take hours to finish running. Some of the processing involves natural language processing (NLP) transformations. The entire process must be automated. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Process data at each step by using Amazon SageMaker Data Wrangler. Automate the process by using Data Wrangler jobs.",
      "B": "Use Amazon SageMaker notebooks for each data processing step. Automate the process by using Amazon EventBridge.",
      "C": "Process data at each step by using AWS Lambda functions. Automate the process by using AWS Step Functions and Amazon EventBridge.",
      "D": "Use Amazon SageMaker Pipelines to create a pipeline of data processing steps. Automate the pipeline by using Amazon EventBridge."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152191-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 41,
    "question": "ML 엔지니어는 AWS CloudFormation을 사용하여 Amazon SageMaker 엔드포인트가 호스팅할 ML 모델을 만들어야 합니다. ML 엔지니어는 CloudFormation 템플릿에서 어떤 리소스를 선언해야 할까요?",
    "options": {
      "A": "AWS::SageMaker::Model",
      "B": "AWS::SageMaker::Endpoint",
      "C": "AWS::SageMaker::NotebookInstance",
      "D": "AWS::SageMaker::Pipeline"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS::SageMaker::Model — 모델 아티팩트(가중치, 메타데이터)를 CloudFormation에서 정의하는 리소스\n▸ AWS::SageMaker::Endpoint — 모델을 호스팅하는 엔드포인트를 정의하는 리소스로, Model 리소스를 참조해야 함\n▸ AWS::SageMaker::NotebookInstance — 개발/실험용 Jupyter 노트북 인스턴스\n▸ AWS::SageMaker::Pipeline — SageMaker Pipelines 워크플로우 정의\n\n【정답 포인트】\n문제에서 \"SageMaker 엔드포인트가 호스팅할 ML 모델\"을 CloudFormation으로 \"만들어야\" 합니다. 모델 자체를 정의하려면 먼저 AWS::SageMaker::Model 리소스를 선언해야 합니다. 이 리소스는 모델 아티팩트의 위치(S3), 컨테이너 이미지, IAM 역할 등을 정의합니다. 그 다음 AWS::SageMaker::Endpoint 리소스가 이 Model을 참조하여 호스팅합니다.\n\n【오답 체크】\n(B) AWS::SageMaker::Endpoint는 모델을 호스팅하는 \"엔드포인트\"를 정의하는 것이지 \"모델 자체\"를 정의하는 것이 아닙니다. 엔드포인트는 Model 리소스를 참조해야 하므로 Model이 먼저 정의되어야 합니다.\n(C) NotebookInstance는 개발 환경이지 모델을 호스팅하지 않으며 엔드포인트와도 직접 관련이 없습니다.\n(D) Pipeline은 ML 워크플로우 정의(학습, 평가, 배포 단계)이지 개별 모델 정의가 아닙니다.\n\n【시험 포인트】\n\"CloudFormation에서 SageMaker 엔드포인트가 호스팅할 모델 정의\" → \"AWS::SageMaker::Model\". Endpoint는 Model을 참조하는 상위 리소스이므로 Model이 선행되어야 합니다.",
    "en_q": "An ML engineer needs to use AWS CloudFormation to create an ML model that an Amazon SageMaker endpoint will host. Which resource should the ML engineer declare in the CloudFormation template to meet this requirement?",
    "en_opts": {
      "A": "AWS::SageMaker::Model",
      "B": "AWS::SageMaker::Endpoint",
      "C": "AWS::SageMaker::NotebookInstance",
      "D": "AWS::SageMaker::Pipeline"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152192-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 42,
    "question": "광고 회사는 AWS Lake Formation을 사용하여 데이터 레이크를 관리합니다. 데이터 레이크에는 정형 및 비정형 데이터가 포함되어 있습니다. 회사의 ML 엔지니어들은 특정 광고 캠페인에 할당됩니다. ML 엔지니어는 Amazon Athena를 통해 데이터와 상호 작용해야 하며 Amazon S3 버킷에서 직접 데이터를 탐색해야 합니다. ML 엔지니어는 할당된 광고 캠페인에 특정적인 리소스에만 액세스할 수 있어야 합니다. 어떤 솔루션이 가장 운영 효율적인 방식으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Glue Data Catalog에 IAM 정책을 구성하여 Athena의 캠페인을 기반으로 액세스를 제한합니다.",
      "B": "Amazon DynamoDB 테이블에 사용자 및 캠페인 정보를 저장합니다. DynamoDB Streams를 구성하여 AWS Lambda 함수를 호출하고 S3 버킷 정책을 업데이트합니다.",
      "C": "Lake Formation을 사용하여 AWS Glue가 S3 버킷에 액세스하도록 권한 부여합니다. Lake Formation 태그를 구성하여 ML 엔지니어를 캠페인에 매핑합니다.",
      "D": "S3 버킷 정책을 구성하여 ML 엔지니어의 캠페인을 기반으로 S3 버킷에 대한 액세스를 제한합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Lake Formation — 데이터 레이크의 중앙 권한 관리 및 정책 집행 서비스로 세밀한 접근 제어(Fine-Grained Access Control) 제공\n▸ Lake Formation Tags — 리소스(테이블, 열, 행)에 태그를 붙여 사용자/역할을 태그로 매핑하는 방식으로 캠페인별 액세스 제어\n▸ IAM Policies — AWS Glue Catalog 메타데이터만 제어하며 실제 S3 데이터 접근 제어는 불완전\n▸ DynamoDB Streams + Lambda — S3 버킷 정책을 동적 업데이트하는 복잡한 과정으로 운영 부담 높음\n▸ S3 Bucket Policies — IAM 기반으로 세밀한 캠페인별 제어 어려움\n\n【정답 포인트】\n\"가장 운영 효율적\" + \"Athena 쿼리 + S3 직접 탐색 + 캠페인별 접근 제어\". Lake Formation의 태그 기반 액세스 제어가 최적입니다. 각 엔지니어에게 태그를 할당하고(예: campaign-A), 각 데이터 리소스에도 태그를 붙입니다(예: campaign-A). Lake Formation이 태그 기반 자동 권한 집행을 처리하므로 IAM 정책 수동 관리가 불필요합니다. Athena 쿼리와 S3 직접 액세스 모두 Lake Formation의 통합 권한 제어를 받습니다.\n\n【오답 체크】\n(A) AWS Glue Data Catalog에 IAM 정책을 설정하면 메타데이터(테이블, 파티션)만 제어되고 실제 S3 데이터는 IAM만으로 충분히 제어되지 않습니다. 또한 세밀한 캠페인별 제어도 어렵습니다.\n(B) DynamoDB Streams + Lambda로 S3 버킷 정책을 동적으로 수정하는 방식은 매우 복잡하고 운영 부담이 큽니다. 또한 S3 버킷 정책만으로는 세밀한 행/열 수준 제어가 불가능합니다.\n(D) S3 버킷 정책 단독으로는 IAM 기반 제어만 가능하며, Athena 쿼리 시 추가 권한 검증이 필요합니다. 캠페인별 세밀한 제어가 어렵고, DynamoDB나 외부 시스템과의 동기화가 필요합니다.\n\n【시험 포인트】\n\"데이터 레이크 + 캠페인별 세밀한 접근 제어 + Athena + S3 + 운영 효율\" → \"Lake Formation 태그 기반 권한\". IAM 정책은 메타데이터 제어, 동적 S3 정책 업데이트는 복잡함.",
    "en_q": "An advertising company uses AWS Lake Formation to manage a data lake. The data lake contains structured data and unstructured data. The company's ML engineers are assigned to specific advertisement campaigns. The ML engineers must interact with the data through Amazon Athena and by browsing the data directly in an Amazon S3 bucket. The ML engineers must have access to only the resources that are specific to their assigned advertisement campaigns. Which solution will meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Configure IAM policies on an AWS Glue Data Catalog to restrict access to Athena based on the ML engineers' campaigns.",
      "B": "Store users and campaign information in an Amazon DynamoDB table. Configure DynamoDB Streams to invoke an AWS Lambda function to update S3 bucket policies.",
      "C": "Use Lake Formation to authorize AWS Glue to access the S3 bucket. Configure Lake Formation tags to map ML engineers to their campaigns.",
      "D": "Configure S3 bucket policies to restrict access to the S3 bucket based on the ML engineers' campaigns."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152193-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 43,
    "question": "ML 엔지니어는 Amazon SageMaker Canvas로 데이터를 사용하여 ML 모델을 학습해야 합니다. 데이터는 Amazon S3에 저장되어 있으며 복잡한 구조입니다. ML 엔지니어는 데이터의 처리 시간을 최소화하는 파일 형식을 사용해야 합니다. 어떤 파일 형식이 이 요구사항을 충족할까요?",
    "options": {
      "A": "Snappy로 압축된 CSV 파일",
      "B": "JSONL 형식의 JSON 객체",
      "C": "gzip으로 압축된 JSON 파일",
      "D": "Apache Parquet 파일"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Apache Parquet — 컬럼 기반 스토리지 형식으로 스키마, 메타데이터 내장, 압축, 선택적 컬럼 읽기 지원으로 매우 효율적\n▸ CSV — 행 기반 텍스트 형식으로 파싱 오버헤드 크고 데이터 타입 정보 없음\n▸ JSON/JSONL — 비정형이며 파싱 비용 높고 복잡한 구조 처리 오버헤드 큼\n▸ Snappy/gzip 압축 — 저장 공간은 절약하지만 읽기 시 압축 해제 오버헤드 발생\n\n【정답 포인트】\n\"복잡한 구조 + 처리 시간 최소화\". SageMaker Canvas는 S3의 데이터를 자동으로 로드하여 모델 학습에 사용합니다. Apache Parquet은 다음 특성으로 처리 시간을 최소화합니다: (1) 컬럼 기반으로 필요한 컬럼만 읽을 수 있어 I/O 감소, (2) 스키마와 메타데이터가 내장되어 파싱 불필요, (3) 압축 알고리즘이 최적화되어 빠른 읽기, (4) 복잡한 데이터 구조를 효율적으로 표현. 결과적으로 로드 및 처리 시간이 CSV나 JSON 대비 훨씬 짧습니다.\n\n【오답 체크】\n(A) CSV는 행 기반 텍스트 형식으로 전체 파일을 파싱해야 하며, 복잡한 중첩 구조 표현도 어렵습니다. Snappy 압축도 읽기 시 압축 해제 오버헤드가 발생합니다.\n(B) JSONL(한 줄에 한 객체)은 JSON의 변형이지만 여전히 비정형이며 파싱 비용이 큽니다. 복잡한 구조 처리는 느립니다.\n(C) JSON은 비정형이고 파싱 비용이 매우 높으며, gzip 압축은 추가 압축 해제 오버헤드를 발생시킵니다.\n\n【시험 포인트】\n\"복잡한 데이터 구조 + 처리 시간 최소화\" → \"Apache Parquet (컬럼 기반 + 스키마 + 최적화된 압축)\". CSV는 행 기반, JSON은 비정형 파싱 비용 높음, 압축은 오버헤드.",
    "en_q": "An ML engineer needs to use data with Amazon SageMaker Canvas to train an ML model. The data is stored in Amazon S3 and is complex in structure. The ML engineer must use a file format that minimizes processing time for the data. Which file format will meet these requirements?",
    "en_opts": {
      "A": "CSV files compressed with Snappy",
      "B": "JSON objects in JSONL format",
      "C": "JSON files compressed with gzip",
      "D": "Apache Parquet files"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152194-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 44,
    "question": "ML 엔지니어는 여러 ML 모델을 평가하고 프로덕션에 사용할 모델을 선택해야 합니다. 모델의 거짓 음성 예측 비용이 거짓 양성 예측 비용보다 훨씬 높습니다. ML 엔지니어는 모델을 선택할 때 가장 우선시할 메트릭 결과는 무엇일까요?",
    "options": {
      "A": "낮은 정밀도(Low Precision)",
      "B": "높은 정밀도(High Precision)",
      "C": "낮은 재현율(Low Recall)",
      "D": "높은 재현율(High Recall)"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Recall (재현율) — 실제 양성(Positive) 중에서 모델이 올바르게 예측한 비율 = TP / (TP + FN). \"실제 양성을 놓친 비율(FN)\"을 반영\n▸ Precision (정밀도) — 양성으로 예측한 것 중 실제 양성의 비율 = TP / (TP + FP). \"잘못된 양성 예측(FP)\"을 반영\n▸ False Negative (FN) — 실제 양성인데 음성으로 예측 (놓친 양성)\n▸ False Positive (FP) — 실제 음성인데 양성으로 예측 (잘못된 양성)\n\n【정답 포인트】\n\"거짓 음성 비용 >> 거짓 양성 비용\". 거짓 음성은 실제 양성(긍정적 경우)을 음성(부정적)으로 잘못 예측하는 것입니다. 문제에서 이 비용이 매우 높다는 것은 실제 양성을 놓치는 것이 심각하다는 의미입니다. 따라서 실제 양성을 최대한 많이 포착해야 하며, 이를 최대화하는 메트릭은 Recall(재현율)입니다. Recall을 높이려면 \"양성 예측 기준\"을 낮춰 더 많은 케이스를 양성으로 예측하게 되므로, 필연적으로 거짓 음성이 감소합니다.\n\n【오답 체크】\n(A) 낮은 정밀도는 잘못된 양성 예측(FP)이 많다는 의미이므로 거짓 양성 비용이 높을 때 원하는 조건입니다. 하지만 문제에서는 거짓 음성 비용이 높으므로 정밀도는 덜 중요합니다.\n(B) 높은 정밀도는 양성 예측이 매우 정확하다는 의미이지만, 이를 위해 거짓 음성이 증가합니다(실제 양성을 놓칠 가능성 높음). 거짓 음성 비용이 높은 상황에 맞지 않습니다.\n(C) 낮은 재현율은 실제 양성을 더 많이 놓친다는 의미로 거짓 음성이 많다는 뜻입니다. 문제의 요구사항과 정반대입니다.\n\n【시험 포인트】\n\"거짓 음성 비용 높음\" → \"재현율(Recall) 최대화\". 재현율은 \"실제 양성을 올바르게 포착한 비율\"이므로 높을수록 거짓 음성이 적습니다.",
    "en_q": "An ML engineer is evaluating several ML models and must choose one model to use in production. The cost of false negative predictions by the models is much higher than the cost of false positive predictions. Which metric finding should the ML engineer prioritize the MOST when choosing the model?",
    "en_opts": {
      "A": "Low precision",
      "B": "High precision",
      "C": "Low recall",
      "D": "High recall"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152195-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 45,
    "question": "회사는 Amazon SageMaker를 사용하여 ML 모델을 학습하고 배포했습니다. 회사는 SageMaker 엔드포인트의 모든 API 호출 이벤트를 기록하고 모니터링하는 솔루션을 구현해야 합니다. 솔루션은 API 호출 이벤트 수가 임계값을 초과할 때 알림을 제공해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "SageMaker Debugger를 사용하여 추론을 추적하고 메트릭을 보고합니다. 임계값을 초과하면 알림을 제공하는 사용자 정의 규칙을 생성합니다.",
      "B": "SageMaker Debugger를 사용하여 추론을 추적하고 메트릭을 보고합니다. 임계값을 초과하면 알림을 제공하는 tensor_variance 기본 제공 규칙을 사용합니다.",
      "C": "AWS CloudTrail을 사용하여 모든 엔드포인트 호출 API 이벤트를 기록합니다. 모니터링을 위해 Amazon CloudWatch 대시보드를 사용합니다. 임계값을 초과하면 알림을 제공하는 CloudWatch 알람을 설정합니다.",
      "D": "모니터링을 위해 Invocations 메트릭을 Amazon CloudWatch 대시보드에 추가합니다. 임계값을 초과하면 알림을 제공하는 CloudWatch 알람을 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS CloudTrail — AWS API 호출(누가, 언제, 무엇을 했는지)을 기록하는 감시 및 감사 서비스\n▸ SageMaker Debugger — 모델 학습 중 텐서 값, 그래디언트, 가중치 변화를 추적하는 도구로 추론 모니터링은 아님\n▸ Amazon CloudWatch — 메트릭 모니터링 및 알람 설정을 위한 관리형 서비스\n▸ Invocations Metric — SageMaker 엔드포인트의 호출 횟수를 나타내는 내장 메트릭이지만 API 호출 \"이벤트\" 기록은 아님\n\n【정답 포인트】\n\"모든 API 호출 이벤트를 기록 + 모니터링 + 임계값 초과 시 알림\". CloudTrail은 모든 AWS API 호출(SageMaker 엔드포인트 호출 포함)을 자세히 기록하므로 \"API 호출 이벤트 기록\" 요구사항을 충족합니다. CloudWatch 대시보드에서 CloudTrail 로그를 분석하고, CloudWatch 알람으로 호출 수 임계값 초과 시 알림을 설정합니다. 이 조합이 \"기록 + 모니터링 + 알림\" 전체를 가장 포괄적으로 제공합니다.\n\n【오답 체크】\n(A) SageMaker Debugger는 학습 중 모델의 내부 상태(텐서, 그래디언트)를 추적하는 것이지, 배포된 엔드포인트의 \"API 호출 이벤트\"를 기록하지 않습니다. 추론 모니터링에는 부적절합니다.\n(B) tensor_variance 규칙은 텐서 분산을 감지하는 학습 모니터링 규칙이며, 엔드포인트 API 호출 기록과는 무관합니다.\n(D) Invocations 메트릭은 호출 \"횟수\"를 나타내는 메트릭이지, \"API 호출 이벤트\"를 기록하지 않습니다. 또한 CloudWatch 메트릭만으로는 \"누가, 언제, 무엇을\" 등의 상세 감사 정보를 제공하지 않습니다.\n\n【시험 포인트】\n\"API 호출 이벤트 기록 + 모니터링 + 알림\" → \"CloudTrail(기록) + CloudWatch(모니터링 + 알람)\". SageMaker Debugger는 학습용, Invocations는 메트릭일 뿐 이벤트 기록 아님.",
    "en_q": "A company has trained and deployed an ML model by using Amazon SageMaker. The company needs to implement a solution to record and monitor all the API call events for the SageMaker endpoint. The solution also must provide a notification when the number of API call events breaches a threshold. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use SageMaker Debugger to track the inferences and to report metrics. Create a custom rule to provide a notification when the threshold is breached.",
      "B": "Use SageMaker Debugger to track the inferences and to report metrics. Use the tensor_variance built-in rule to provide a notification when the threshold is breached.",
      "C": "Log all the endpoint invocation API events by using AWS CloudTrail. Use an Amazon CloudWatch dashboard for monitoring. Set up a CloudWatch alarm to provide notification when the threshold is breached.",
      "D": "Add the Invocations metric to an Amazon CloudWatch dashboard for monitoring. Set up a CloudWatch alarm to provide notification when the threshold is breached."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152091-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 46,
    "question": "회사는 AWS Glue 워크플로우에 의해 조정되는 AWS Glue 데이터 처리 작업을 가지고 있습니다. AWS Glue 작업은 일정에 따라 실행되거나 수동으로 시작될 수 있습니다. 회사는 ML 모델 개발을 위해 Amazon SageMaker Pipelines에서 파이프라인을 개발하고 있습니다. 파이프라인은 데이터 처리 단계 중에 AWS Glue 작업의 출력을 사용합니다. ML 엔지니어는 AWS Glue 작업을 파이프라인과 통합하는 솔루션을 구현해야 합니다. 어떤 솔루션이 운영 부담이 가장 적으면서 이 요구사항을 충족할까요?",
    "options": {
      "A": "파이프라인과 AWS Glue 작업의 조정을 위해 AWS Step Functions를 사용합니다.",
      "B": "SageMaker Pipelines의 처리 단계를 사용합니다. AWS Glue 작업의 Amazon Resource Name(ARNs)을 가리키는 입력을 구성합니다.",
      "C": "SageMaker Pipelines의 Callback 단계를 사용하여 AWS Glue 워크플로우를 시작하고 AWS Glue 작업 완료까지 파이프라인을 중지합니다.",
      "D": "파이프라인과 AWS Glue 작업을 원하는 순서로 호출하기 위해 Amazon EventBridge를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Pipelines Callback Steps — 외부 비동기 작업(AWS Glue 워크플로우 등)을 시작하고, 완료될 때까지 파이프라인을 \"일시 중지\"했다가 재개하는 메커니즘\n▸ SageMaker Processing Steps — SageMaker 처리 작업을 실행하는 단계로 다른 서비스 작업을 \"시작\"할 수는 없음\n▸ AWS Step Functions — 복잡한 워크플로우 조정을 위한 일반 목적 서비스로 SageMaker Pipelines보다 많은 관리 코드 필요\n▸ Amazon EventBridge — 이벤트 기반 트리거 서비스로 순차적 대기(동기식 완료 대기) 메커니즘이 없음\n\n【정답 포인트】\n\"AWS Glue 작업의 출력을 SageMaker Pipelines 데이터 처리 단계에서 사용\" + \"최소 운영 부담\". SageMaker Pipelines의 Callback Step은 정확히 이런 시나리오를 위해 설계되었습니다: (1) Callback Step이 AWS Glue 워크플로우를 시작 (2) Glue 작업이 완료될 때까지 대기 (3) 완료 신호 수신 후 다음 단계 진행. 이렇게 하면 SageMaker Pipelines 내에서 모든 단계를 선언적으로 정의하고, 자동 조정 및 에러 처리를 위임할 수 있으므로 운영 부담이 최소입니다.\n\n【오답 체크】\n(A) Step Functions를 사용하면 SageMaker Pipelines 외부에 추가 워크플로우 정의가 필요하고, 두 서비스 간 통합도 복잡합니다. 관리할 조정 로직이 증가하여 운영 부담이 커집니다.\n(B) Processing Steps는 SageMaker Processing 작업(컨테이너 기반)을 실행하는 것이지, 외부 Glue 워크플로우를 \"시작\"할 수 없습니다. ARN을 지정해도 작업이 실행되지 않으며 Glue 워크플로우 결과를 파이프라인이 기다릴 수 없습니다.\n(D) EventBridge는 이벤트 기반 트리거이므로 \"Glue 작업이 완료될 때까지 대기\"하는 동기식 메커니즘이 없습니다. Glue 작업 시작과 Pipelines 다음 단계 진행 간에 순서 보장이 어렵습니다.\n\n【시험 포인트】\n\"Glue 작업 완료 대기 + SageMaker Pipelines 통합 + 최소 운영 부담\" → \"Callback Step\". Step Functions는 외부 조정 로직, Processing Steps는 Glue 작업 실행 불가, EventBridge는 동기식 대기 불가.",
    "en_q": "A company has AWS Glue data processing jobs that are orchestrated by an AWS Glue workflow. The AWS Glue jobs can run on a schedule or can be launched manually. The company is developing pipelines in Amazon SageMaker Pipelines for ML model development. The pipelines will use the output of the AWS Glue jobs during the data processing phase of model development. An ML engineer needs to implement a solution that integrates the AWS Glue jobs with the pipelines. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use AWS Step Functions for orchestration of the pipelines and the AWS Glue jobs.",
      "B": "Use processing steps in SageMaker Pipelines. Configure inputs that point to the Amazon Resource Names (ARNs) of the AWS Glue jobs.",
      "C": "Use Callback steps in SageMaker Pipelines to start the AWS Glue workflow and to stop the pipelines until the AWS Glue jobs finish running.",
      "D": "Use Amazon EventBridge to invoke the pipelines and the AWS Glue jobs in the desired order."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152099-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 47,
    "question": "한 회사가 Amazon Redshift 데이터베이스를 유일한 데이터 소스로 사용 중입니다. 일부 데이터는 민감한 정보입니다. 데이터 과학자가 데이터베이스의 일부 민감한 데이터를 사용해야 합니다. ML 엔지니어는 원본 데이터를 변환하지 않고 데이터베이스에 익명화된 데이터를 저장하지 않으면서 데이터 과학자에게 데이터 액세스 권한을 부여해야 합니다. 구현 노력이 가장 적은 솔루션은 무엇입니까?",
    "options": {
      "A": "동적 데이터 마스킹 정책을 구성하여 쿼리 시 민감한 데이터가 데이터 과학자와 공유되는 방식을 제어합니다.",
      "B": "데이터베이스 위에 마스킹 로직을 사용하는 구체화된 뷰를 생성합니다. 데이터 과학자에게 필요한 읽기 권한을 부여합니다.",
      "C": "Amazon Redshift 데이터를 Amazon S3로 언로드합니다. Amazon Athena를 사용하여 마스킹 로직이 포함된 스키마온리드를 생성합니다. 뷰를 데이터 과학자와 공유합니다.",
      "D": "Amazon Redshift 데이터를 Amazon S3로 언로드합니다. AWS Glue 작업을 생성하여 데이터를 익명화합니다. 데이터 세트를 데이터 과학자와 공유합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 동적 데이터 마스킹(Dynamic Data Masking) — 쿼리 시점에 사용자별로 민감 데이터를 자동으로 마스킹하는 Redshift 기능\n▸ 구체화된 뷰(Materialized View) — 정적으로 저장되는 뷰로 데이터 변환이 필요함\n▸ 원본 데이터 보존(Source Data Integrity) — 원본 데이터는 변경 없이 액세스 계층에서만 제어\n\n【정답 포인트】\n동적 데이터 마스킹은 Redshift에서 기본 제공되는 기능으로, 쿼리 실행 시점에 민감한 열(column)을 대상 사용자에게만 마스킹합니다. 원본 데이터는 전혀 변경되지 않으며, 마스킹 정책만 설정하면 되어 구현 복잡도가 최소입니다. B 옵션의 구체화된 뷰는 물리적 저장소가 필요하고, C와 D는 데이터를 S3로 언로드하는 추가 단계가 필요합니다.\n\n【오답 체크】\n(B) 구체화된 뷰 — Redshift에서 뷰를 생성하려면 별도의 테이블 공간을 할당하고 마스킹 로직을 SQL로 작성해야 하므로 개발 오버헤드가 큽니다. 또한 데이터 동기화 문제도 발생합니다.\n(C) Athena 기반 스키마온리드 — 데이터를 Redshift에서 S3로 언로드하는 ETL 과정이 필요하고, Athena에서 추가로 마스킹 로직을 구현해야 하므로 구현 복잡도가 매우 높습니다.\n(D) Glue 익명화 작업 — 매번 전체 데이터를 S3로 복사하고 Glue 작업으로 변환하는 방식이므로 운영 오버헤드가 가장 큽니다. 실시간 업데이트도 어렵습니다.\n\n【시험 포인트】\n'원본 데이터 변환 없이', '저장 없이', '구현 노력 최소' 키워드 → Redshift 동적 마스킹이 최적. 데이터 보안 제어 계층의 효율성 판단이 핵심.",
    "en_q": "A company is using an Amazon Redshift database as its single data source. Some of the data is sensitive. A data scientist needs to use some of the sensitive data from the database. An ML engineer must give the data scientist access to the data without transforming the source data and without storing anonymized data in the database. Which solution will meet these requirements with the LEAST implementation effort?",
    "en_opts": {
      "A": "Configure dynamic data masking policies to control how sensitive data is shared with the data scientist at query time.",
      "B": "Create a materialized view with masking logic on top of the database. Grant the necessary read permissions to the data scientist.",
      "C": "Unload the Amazon Redshift data to Amazon S3. Use Amazon Athena to create schema-on-read with masking logic. Share the view with the data scientist.",
      "D": "Unload the Amazon Redshift data to Amazon S3. Create an AWS Glue job to anonymize the data. Share the dataset with the data scientist."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152196-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 48,
    "question": "ML 엔지니어가 Amazon SageMaker Studio에서 심층 학습 모델을 미세 조정하기 위한 학습 작업을 사용하고 있습니다. ML 엔지니어는 이전에 유사한 데이터 세트에서 동일한 사전 학습 모델을 사용했습니다. ML 엔지니어는 기울기 소실(vanishing gradient), GPU 활용도 저하, 과적합 문제가 발생할 것으로 예상합니다. ML 엔지니어는 이러한 문제를 감지하고 문제 발생 시 미리 정의된 방식으로 반응하는 솔루션을 구현해야 합니다. 또한 솔루션은 학습 중 포괄적인 실시간 메트릭을 제공해야 합니다. 운영 부담이 가장 적은 솔루션은 무엇입니까?",
    "options": {
      "A": "TensorBoard를 사용하여 학습 작업을 모니터링합니다. Amazon Simple Notification Service(Amazon SNS) 주제에 결과를 발행합니다. AWS Lambda 함수를 생성하여 결과를 사용하고 미리 정의된 작업을 시작합니다.",
      "B": "Amazon CloudWatch 기본 메트릭을 사용하여 학습 작업에 대한 인사이트를 얻습니다. 메트릭을 사용하여 AWS Lambda 함수를 호출하여 미리 정의된 작업을 시작합니다.",
      "C": "Amazon CloudWatch의 메트릭을 확대하여 각 학습 단계의 기울기를 포함시킵니다. 메트릭을 사용하여 AWS Lambda 함수를 호출하여 미리 정의된 작업을 시작합니다.",
      "D": "SageMaker Debugger 기본 제공 규칙을 사용하여 학습 작업을 모니터링합니다. 미리 정의된 작업을 시작하도록 규칙을 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Debugger — 학습 과정의 기울기, 활성화값, 가중치 등을 자동으로 추적하는 SageMaker 기본 기능\n▸ 기본 제공 규칙(Built-in Rules) — Vanishing Gradient, Overtraining, LowGPUUtilization 등 사전 정의된 이상 탐지 규칙\n▸ 실시간 메트릭(Real-time Metrics) — 학습 중 즉시 계산되고 표시되는 성능 지표\n\n【정답 포인트】\n문제에서 '기울기 소실, GPU 활용도 저하, 과적합'을 명시적으로 언급하고 있습니다. SageMaker Debugger는 정확히 이 세 가지 문제를 감지하는 기본 제공 규칙(VanishingGradient, LowGPUUtilization, Overtraining)을 제공합니다. 규칙을 설정하면 조건 충족 시 자동으로 Lambda 함수를 호출할 수 있어 운영 부담이 최소입니다. 다른 옵션들은 수동 모니터링, 커스텀 스크립트 작성, 메트릭 확대 등의 추가 작업이 필요합니다.\n\n【오답 체크】\n(A) TensorBoard + SNS — TensorBoard는 시각화 도구일 뿐 자동 이상 감지 기능이 없으며, SNS 구독자가 수동으로 결과를 처리해야 하므로 실시간 자동 반응이 어렵습니다.\n(B) CloudWatch 기본 메트릭 — EC2 인스턴스의 CPU, 메모리, 네트워크만 제공하며, 학습별 기울기, 모델 수렴성 등의 ML 특화 메트릭은 포함되지 않습니다.\n(C) CloudWatch 메트릭 확대 — 기울기를 CloudWatch에 로깅하려면 학습 코드 수정, 커스텀 메트릭 발행 코드 작성이 필요하므로 개발 복잡도가 높습니다.\n\n【시험 포인트】\n'vanishing gradient, GPU utilization, overfitting' 세 가지 명시 → SageMaker Debugger의 세 가지 기본 규칙 매핑. '실시간 메트릭 + 자동 반응' → Debugger의 핵심 가치.",
    "en_q": "An ML engineer is using a training job to fine-tune a deep learning model in Amazon SageMaker Studio. The ML engineer previously used the same pre-trained model with a similar dataset. The ML engineer expects vanishing gradient, underutilized GPU, and overfitting problems. The ML engineer needs to implement a solution to detect these issues and to react in predefined ways when the issues occur. The solution also must provide comprehensive real-time metrics during the training. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use TensorBoard to monitor the training job. Publish the findings to an Amazon Simple Notification Service (Amazon SNS) topic. Create an AWS Lambda function to consume the findings and to initiate the predefined actions.",
      "B": "Use Amazon CloudWatch default metrics to gain insights about the training job. Use the metrics to invoke an AWS Lambda function to initiate the predefined actions.",
      "C": "Expand the metrics in Amazon CloudWatch to include the gradients in each training step. Use the metrics to invoke an AWS Lambda function to initiate the predefined actions.",
      "D": "Use SageMaker Debugger built-in rules to monitor the training job. Configure the rules to initiate the predefined actions."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152197-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 49,
    "question": "신용카드 회사가 Amazon SageMaker 엔드포인트의 프로덕션 환경에 부정거래 탐지 모델을 배포했습니다. 회사가 새로운 버전의 모델을 개발했습니다. 회사는 실시간 데이터를 사용하여 새 모델의 성능을 평가하고 프로덕션 최종 사용자에게 영향을 주지 않아야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker Debugger를 설정하고 커스텀 규칙을 생성합니다.",
      "B": "블루/그린 배포를 설정하고 전체 트래픽을 한 번에 전환합니다.",
      "C": "블루/그린 배포를 설정하고 카나리 트래픽 전환을 합니다.",
      "D": "섀도우 테스트를 설정하고 새 모델의 섀도우 변형을 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 섀도우 테스트(Shadow Testing) — 실시간 요청을 기존 모델과 새 모델에 동시 전달하되, 새 모델의 응답은 사용자에게 반환하지 않는 방식\n▸ 섀도우 변형(Shadow Variant) — SageMaker 엔드포인트의 변형으로, 프로덕션 트래픽 일부를 받지만 응답이 사용하되지 않음\n▸ 카나리 배포(Canary Deployment) — 트래픽의 일부만 새 모델로 라우팅하고 나머지는 기존 모델 유지\n\n【정답 포인트】\n'실시간 데이터를 사용하여 성능 평가' + '프로덕션 사용자 영향 없음'이 핵심 요구사항입니다. 섀도우 테스트는 정확히 이 목적으로 설계되었습니다. 실시간 트래픽을 새 모델에 전달하여 동작을 관찰하지만, 새 모델의 응답은 사용자에게 돌아가지 않습니다. 따라서 프로덕션에 미치는 영향이 없으면서 실제 데이터로 평가가 가능합니다. 카나리 배포\n(C) 는 일부 사용자가 새 모델의 응답을 받게 되어 위험성이 있고, Debugger\n(A) 는 모니터링 도구일 뿐 배포 전략이 아닙니다.\n\n【오답 체크】\n(A) SageMaker Debugger — 학습 과정의 이상을 감지하는 모니터링 도구이며, 배포된 모델의 성능 평가나 신버전 검증 기능이 없습니다.\n(B) 전체 트래픽 전환 — 블루/그린의 all-at-once 방식은 문제 발생 시 모든 사용자가 영향을 받으므로 신규 모델 검증에 부적절합니다.\n(C) 카나리 트래픽 전환 — 트래픽 일부를 새 모델로 라우팅하므로 그 사용자들은 새 모델의 응답(정확도 미검증)을 받게 되어 비즈니스 리스크가 발생합니다.\n\n【시험 포인트】\n'실시간 데이터 + 프로덕션 영향 없음' → 섀도우 테스트. 배포 전 신버전 모델의 안전성 검증이 주제의 패턴.",
    "en_q": "A credit card company has a fraud detection model in production on an Amazon SageMaker endpoint. The company develops a new version of the model. The company needs to assess the new model's performance by using live data and without affecting production end users. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Set up SageMaker Debugger and create a custom rule.",
      "B": "Set up blue/green deployments with all-at-once traffic shifting.",
      "C": "Set up blue/green deployments with canary traffic shifting.",
      "D": "Set up shadow testing with a shadow variant of the new model."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152198-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 50,
    "question": "한 회사가 Amazon S3 버킷에 사용자 클릭 관련 시계열 데이터를 저장합니다. 원본 데이터는 매일 수백만 행의 사용자 활동으로 구성됩니다. ML 엔지니어들이 데이터에 접근하여 ML 모델을 개발합니다. ML 엔지니어들은 Amazon Athena를 사용하여 일일 보고서를 생성하고 지난 3일간의 클릭 트렌드를 분석해야 합니다. 회사는 데이터를 아카이빙하기 전에 30일간 보존해야 합니다. 데이터 검색 성능이 가장 높은 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 버킷에 분할 없이 모든 시계열 데이터를 유지합니다. 30일 이상 된 데이터를 별도의 S3 버킷으로 수동으로 이동합니다.",
      "B": "AWS Lambda 함수를 생성하여 시계열 데이터를 별도의 S3 버킷에 복사합니다. 30일 이상 된 데이터를 S3 Glacier Flexible Retrieval로 아카이빙하는 S3 Lifecycle 정책을 적용합니다.",
      "C": "S3 버킷에서 날짜 접두사로 시계열 데이터를 파티션으로 구성합니다. 30일 이상 된 파티션을 S3 Glacier Flexible Retrieval로 아카이빙하는 S3 Lifecycle 정책을 적용합니다.",
      "D": "각 날의 시계열 데이터를 자체 S3 버킷에 배치합니다. 30일 이상 된 데이터가 있는 S3 버킷을 S3 Glacier Flexible Retrieval로 아카이빙하는 S3 Lifecycle 정책을 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 파티션(Partition) — S3 객체를 구조화된 경로(예: s3://bucket/year=2025/month=04/day=21/)로 구성하는 방식\n▸ 프루닝(Pruning) — Athena 쿼리 시 필요한 파티션만 스캔하여 비용과 성능 향상\n▸ Lifecycle 정책 — 객체의 나이에 따라 스토리지 클래스를 자동으로 전환하는 S3 기능\n\n【정답 포인트】\n'지난 3일간 분석' + '30일 보존' 요구사항에서 일별 데이터 접근 패턴이 분명합니다. 날짜 기반 파티션(예: /date=20250420/)을 사용하면 Athena가 쿼리 시 필요한 파티션만 스캔하므로 전체 데이터 스캔 없이 빠른 응답을 얻습니다. 파티션 프루닝은 Athena 성능 최적화의 필수 요소입니다. 또한 Lifecycle 정책으로 30일 후 자동 아카이빙되어 운영 부담이 없습니다. A는 분할 없어 매번 전체 스캔, B는 Lambda로 수동 복사하는 오버헤드, D는 버킷당 파티션 구조가 없어 비효율적입니다.\n\n【오답 체크】\n(A) 파티션 없음 — Athena가 매 쿼리마다 수백만 행 전체를 스캔해야 하므로 쿼리 응답 시간이 느리고, 스캔 비용도 높습니다. 특히 '3일 데이터만' 필요한 경우에도 전체 30일을 스캔합니다.\n(B) Lambda 복사 + Lifecycle — Lambda로 별도 버킷에 복사하는 추가 처리 단계가 필요하고, 복사 중 I/O 비용도 발생합니다. Athena 쿼리 성능 개선이 아닙니다.\n(D) 버킷당 하나의 날 데이터 — 버킷 수가 30개 이상으로 증가하고, Athena에서 여러 버킷을 크로스 쿼리할 때 오버헤드가 발생합니다. S3 요청 비용도 높아집니다.\n\n【시험 포인트】\n'Amazon Athena 성능' → 파티션 프루닝이 핵심. 시계열 + 날짜 필터 → 날짜 접두사 파티션이 정석.",
    "en_q": "A company stores time-series data about user clicks in an Amazon S3 bucket. The raw data consists of millions of rows of user activity every day. ML engineers access the data to develop their ML models. The ML engineers need to generate daily reports and analyze click trends over the past 3 days by using Amazon Athena. The company must retain the data for 30 days before archiving the data. Which solution will provide the HIGHEST performance for data retrieval?",
    "en_opts": {
      "A": "Keep all the time-series data without partitioning in the S3 bucket. Manually move data that is older than 30 days to separate S3 buckets.",
      "B": "Create AWS Lambda functions to copy the time-series data into separate S3 buckets. Apply S3 Lifecycle policies to archive data that is older than 30 days to S3 Glacier Flexible Retrieval.",
      "C": "Organize the time-series data into partitions by date prefix in the S3 bucket. Apply S3 Lifecycle policies to archive partitions that are older than 30 days to S3 Glacier Flexible Retrieval.",
      "D": "Put each day's time-series data into its own S3 bucket. Use S3 Lifecycle policies to archive S3 buckets that hold data that is older than 30 days to S3 Glacier Flexible Retrieval."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152199-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 51,
    "question": "한 회사가 은행 애플리케이션에서 실시간으로 부정거래를 탐지하는 ML 모델을 배포했습니다. 모델은 Amazon SageMaker Asynchronous Inference를 사용합니다. 소비자들이 추론 결과 수신 시 지연이 발생한다고 보고하고 있습니다. ML 엔지니어는 추론 성능을 개선하는 솔루션을 구현해야 합니다. 또한 솔루션은 모델 품질 편차가 발생할 때 알림을 제공해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "추론에 SageMaker 실시간 추론을 사용합니다. 모델 품질 알림을 위해 SageMaker Model Monitor를 사용합니다.",
      "B": "추론에 SageMaker 배치 변환을 사용합니다. 모델 품질 알림을 위해 SageMaker Model Monitor를 사용합니다.",
      "C": "추론에 SageMaker Serverless Inference를 사용합니다. 모델 품질 알림을 위해 SageMaker Inference Recommender를 사용합니다.",
      "D": "추론에 SageMaker Asynchronous Inference를 계속 사용합니다. 모델 품질 알림을 위해 SageMaker Inference Recommender를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker 실시간 추론(Real-time Inference) — 동기식 API 호출로 즉시 응답을 반환하는 배포 방식\n▸ Asynchronous Inference — 요청을 큐에 저장하고 비동기로 처리하여 응답 시간이 길 수 있음\n▸ SageMaker Model Monitor — 프로덕션 모델의 데이터 드리프트, 모델 성능 저하를 감지하는 모니터링 서비스\n\n【정답 포인트】\n문제의 핵심은 '지연 발생'입니다. Asynchronous Inference는 의도적으로 응답 대기를 포함하는 방식이므로, 지연 제거를 위해서는 real-time inference로 변경해야 합니다. Real-time inference는 즉시 응답을 제공하므로 '실시간' 부정거래 탐지에 적합합니다. 모델 품질 모니터링은 Model Monitor가 표준이며, Inference Recommender는 모델 성능 최적화 제안 도구일 뿐 모니터링 알림 기능이 없습니다.\n\n【오답 체크】\n(B) 배치 변환 — 배치 처리이므로 오프라인 작업용이며, 실시간 추론 요구사항에 부적합합니다. 또한 지연 문제는 더욱 심해집니다.\n(C) Serverless Inference + Inference Recommender — Serverless는 cold start 오버헤드가 있어 지연 개선에 최적이 아니며, Inference Recommender는 배포 구성 최적화 도구일 뿐 모니터링 알림 기능이 없습니다.\n(D) Asynchronous 유지 — 지연 문제의 근본 원인을 해결하지 않으며, Inference Recommender도 모니터링 목적에 부적합합니다.\n\n【시험 포인트】\n'실시간 추론 + 지연 제거' → Real-time Inference. '모델 품질 알림' → Model Monitor. 각 도구의 용도 구분이 핵심.",
    "en_q": "A company has deployed an ML model that detects fraudulent credit card transactions in real time in a banking application. The model uses Amazon SageMaker Asynchronous Inference. Consumers are reporting delays in receiving the inference results. An ML engineer needs to implement a solution to improve the inference performance. The solution also must provide a notification when a deviation in model quality occurs. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use SageMaker real-time inference for inference. Use SageMaker Model Monitor for notifications about model quality.",
      "B": "Use SageMaker batch transform for inference. Use SageMaker Model Monitor for notifications about model quality.",
      "C": "Use SageMaker Serverless Inference for inference. Use SageMaker Inference Recommender for notifications about model quality.",
      "D": "Keep using SageMaker Asynchronous Inference for inference. Use SageMaker Inference Recommender for notifications about model quality."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152200-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 52,
    "question": "ML 엔지니어는 학습된 ML 모델을 호스팅하는 솔루션을 구현해야 합니다. 하루 종일 모델에 대한 요청 비율이 불균형합니다. ML 엔지니어는 모델을 사용하지 않을 때 비용을 최소화하는 확장 가능한 솔루션이 필요합니다. 또한 솔루션은 사용량이 많은 시간대에 요청에 대응할 수 있는 모델의 수용력을 유지해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "고정 동시성을 가진 AWS Lambda 함수를 생성합니다. 모델에 대한 요청 수를 기반으로 자동으로 확장되도록 Lambda 함수를 구성합니다.",
      "B": "AWS Fargate를 사용하는 Amazon Elastic Container Service(Amazon ECS) 클러스터에 모델을 배포합니다. 사용량이 많은 시간대에 요청을 처리하기 위해 정적인 수의 작업으로 설정합니다.",
      "C": "모델을 Amazon SageMaker 엔드포인트에 배포합니다. 여러 모델 복사본을 엔드포인트에 배포합니다. Application Load Balancer를 생성하여 엔드포인트의 다른 모델 복사본 간에 트래픽을 라우팅합니다.",
      "D": "모델을 Amazon SageMaker 엔드포인트에 배포합니다. Amazon CloudWatch 메트릭을 기반으로 인스턴스 수를 동적으로 조정하도록 SageMaker 엔드포인트 자동 확장 정책을 생성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker 엔드포인트 오토스케일링 — CloudWatch 메트릭(CPU, 메모리, 요청 지연)에 따라 인스턴스 개수를 자동 조정\n▸ 비용 최적화(Cost Optimization) — 미사용 시 인스턴스 0으로 축소하거나 최소화\n▸ 피크 시간대 용량(Peak Capacity) — 트래픽 급증 시 자동으로 확장하여 처리 능력 보장\n\n【정답 포인트】\n'불균형한 요청 비율' + '미사용 시 비용 최소' + '피크 시간 용량 보장'의 세 가지 요구사항을 모두 만족해야 합니다. SageMaker 엔드포인트의 오토스케일링은 CloudWatch 메트릭을 기반으로 인스턴스 수를 동적으로 조정합니다. 저사용 시간에는 인스턴스를 0(또는 최소값)으로 축소하여 비용을 절감하고, 피크 시간에는 자동으로 확장하여 용량을 확보합니다. Lambda\n(A) 는 고정 동시성으로는 비용 절감이 불가능하고, ECS 정적 구성\n(B) 은 피크 시간만 고려하여 저사용 시간 비용 낭비, ALB 수동 라우팅\n(C) 은 자동화가 아닙니다.\n\n【오답 체크】\n(A) Lambda 고정 동시성 — '고정'이므로 미사용 시간도 비용이 발생합니다. 또한 Lambda는 모델 호스팅의 주 목적이 아니며, ML 모델 배포에 부적합합니다.\n(B) ECS 정적 작업 수 — 피크 시간만 고려하여 설정하면 저사용 시간에도 같은 수의 작업이 실행되어 비용 낭비입니다. 동적 조정이 없습니다.\n(C) SageMaker + ALB 수동 라우팅 — 다중 모델 복사본 관리와 ALB 구성이 복잡하고, 자동 확장이 아니므로 수동 개입이 필요합니다.\n\n【시험 포인트】\n'불균형 요청 + 비용 최소 + 피크 수용' → 오토스케일링. SageMaker 엔드포인트의 자동 확장이 정석 솔루션.",
    "en_q": "An ML engineer needs to implement a solution to host a trained ML model. The rate of requests to the model will be inconsistent throughout the day. The ML engineer needs a scalable solution that minimizes costs when the model is not in use. The solution also must maintain the model's capacity to respond to requests during times of peak usage. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create AWS Lambda functions that have fixed concurrency to host the model. Configure the Lambda functions to automatically scale based on the number of requests to the model.",
      "B": "Deploy the model on an Amazon Elastic Container Service (Amazon ECS) cluster that uses AWS Fargate. Set a static number of tasks to handle requests during times of peak usage.",
      "C": "Deploy the model to an Amazon SageMaker endpoint. Deploy multiple copies of the model to the endpoint. Create an Application Load Balancer to route traffic between the different copies of the model at the endpoint.",
      "D": "Deploy the model to an Amazon SageMaker endpoint. Create SageMaker endpoint auto scaling policies that are based on Amazon CloudWatch metrics to adjust the number of instances dynamically."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152201-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 53,
    "question": "한 회사가 Amazon SageMaker Studio를 사용하여 ML 모델을 개발합니다. 회사는 단일 SageMaker Studio 도메인을 가지고 있습니다. ML 엔지니어는 SageMaker 컴퓨팅 비용이 특정 임계값에 도달할 때 자동 알림을 제공하는 솔루션을 구현해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker 도메인의 SageMaker 사용자 프로필을 편집하여 리소스 태깅을 추가합니다. 임계값에 도달했을 때 알림을 보내도록 AWS Cost Explorer를 구성합니다.",
      "B": "SageMaker 도메인의 SageMaker 사용자 프로필을 편집하여 리소스 태깅을 추가합니다. 임계값에 도달했을 때 알림을 보내도록 AWS Budgets를 구성합니다.",
      "C": "각 사용자의 IAM 프로필을 편집하여 리소스 태깅을 추가합니다. 임계값에 도달했을 때 알림을 보내도록 AWS Cost Explorer를 구성합니다.",
      "D": "각 사용자의 IAM 프로필을 편집하여 리소스 태깅을 추가합니다. 임계값에 도달했을 때 알림을 보내도록 AWS Budgets를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SageMaker 사용자 프로필(User Profile) — SageMaker Studio에서 사용자 레벨의 설정 및 태깅을 관리하는 엔티티\n▸ AWS Budgets — 비용 임계값을 설정하고 초과 시 자동 알림을 보내는 AWS Cost Management 서비스\n▸ AWS Cost Explorer — 비용 데이터를 시각화하고 분석하는 도구 (알림 기능 미포함)\n\n【정답 포인트】\n'임계값 도달 시 자동 알림'이라는 요구사항의 핵심은 알림 기능입니다. AWS Budgets는 예산을 설정하고 초과할 때 SNS로 알림을 보내는 전용 서비스입니다. AWS Cost Explorer는 비용 데이터를 시각화하고 분석하는 도구일 뿐 능동적 알림 기능이 없습니다. 또한 SageMaker Studio에서 리소스 태깅을 설정하려면 SageMaker 도메인 내 사용자 프로필을 편집해야 하며, 각 사용자의 IAM 프로필을 개별 편집하는 것은 비효율적입니다.\n\n【오답 체크】\n(A) Cost Explorer + 사용자 프로필 — Cost Explorer는 비용 분석 도구일 뿐 자동 알림 기능이 없습니다. 임계값 도달 시 수동으로 모니터링해야 합니다.\n(C) Cost Explorer + IAM 프로필 — Cost Explorer 자체의 알림 기능 부재와 IAM 프로필 개별 편집의 복잡성 문제를 모두 포함합니다.\n(D) Budgets + IAM 프로필 — Budgets는 올바른 도구이지만, SageMaker 도메인 차원의 태깅\n(B) 이 더 효율적입니다. IAM 프로필 개별 편집은 관리 복잡도가 높습니다.\n\n【시험 포인트】\n'자동 알림' → AWS Budgets. 'SageMaker 환경' → SageMaker 사용자 프로필 태깅. Cost Management 도구의 용도 구분.",
    "en_q": "A company uses Amazon SageMaker Studio to develop an ML model. The company has a single SageMaker Studio domain. An ML engineer needs to implement a solution that provides an automated alert when SageMaker compute costs reach a specific threshold. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Add resource tagging by editing the SageMaker user profile in the SageMaker domain. Configure AWS Cost Explorer to send an alert when the threshold is reached.",
      "B": "Add resource tagging by editing the SageMaker user profile in the SageMaker domain. Configure AWS Budgets to send an alert when the threshold is reached.",
      "C": "Add resource tagging by editing each user's IAM profile. Configure AWS Cost Explorer to send an alert when the threshold is reached.",
      "D": "Add resource tagging by editing each user's IAM profile. Configure AWS Budgets to send an alert when the threshold is reached."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152202-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 54,
    "question": "한 회사가 Amazon SageMaker를 ML 워크로드에 사용합니다. ML 엔지니어는 부정거래 탐지 모델을 구축하기 위해 50MB Apache Parquet 데이터 파일을 받습니다. 파일에는 필요하지 않은 여러 상관관계 있는 열이 포함되어 있습니다. ML 엔지니어가 파일의 불필요한 열을 가장 적은 노력으로 삭제하려면 무엇을 해야 합니까?",
    "options": {
      "A": "로컬 워크스테이션에 파일을 다운로드합니다. 커스텀 Python 스크립트를 사용하여 원-핫 인코딩을 수행합니다.",
      "B": "Amazon EMR에서 커스텀 처리 스크립트를 사용하는 Apache Spark 작업을 생성합니다.",
      "C": "SageMaker Python SDK를 호출하여 SageMaker 처리 작업을 생성합니다.",
      "D": "SageMaker Data Wrangler에서 데이터 플로우를 생성합니다. 변환 단계를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Data Wrangler — 코드 작성 없이 드래그-드롭으로 데이터 전처리를 수행하는 low-code 도구\n▸ 변환 단계(Transform Step) — 열 선택, 필터링, 인코딩 등 다양한 데이터 변환을 GUI로 구성\n▸ 저노력 솔루션(Least Effort) — 코딩 최소화, 클릭 기반 설정\n\n【정답 포인트】\n'가장 적은 노력으로'라는 조건이 핵심입니다. 50MB 파일에서 불필요한 열을 삭제하는 작업은 매우 간단합니다. Data Wrangler는 정확히 이런 간단한 데이터 정제 작업을 위한 no-code 도구입니다. GUI에서 제거할 열을 선택하고 변환 단계를 구성하면 됩니다. 코드 작성이나 복잡한 인프라 구성이 필요 없습니다. Python 스크립트\n(A) 나 EMR/Spark\n(B) , SageMaker 처리\n(C) 는 모두 코드 작성이 필요하거나 인프라 오버헤드가 있습니다.\n\n【오답 체크】\n(A) 수동 다운로드 + Python 스크립트 — 로컬에서 파일을 처리하는 방식이므로 네트워크 전송 시간, 스크립트 작성 및 디버깅 시간이 소비됩니다. 또한 원-핫 인코딩은 열 선택과 무관한 작업입니다.\n(B) EMR + Spark — 클러스터 프로비저닝, Spark 작업 작성, 실행 모니터링 등 복잡한 절차가 필요합니다. 50MB 같은 작은 파일에는 오버엔지니어링입니다.\n(C) SageMaker 처리 작업 — Python SDK로 처리 코드를 작성해야 하므로 개발 시간이 필요합니다. Data Wrangler보다 복잡합니다.\n\n【시험 포인트】\n'간단한 열 선택 + 노력 최소' → Data Wrangler. No-code 도구의 최적 사용 사례 판단.",
    "en_q": "A company uses Amazon SageMaker for its ML workloads. The company's ML engineer receives a 50 MB Apache Parquet data file to build a fraud detection model. The file includes several correlated columns that are not required. What should the ML engineer do to drop the unnecessary columns in the file with the LEAST effort?",
    "en_opts": {
      "A": "Download the file to a local workstation. Perform one-hot encoding by using a custom Python script.",
      "B": "Create an Apache Spark job that uses a custom processing script on Amazon EMR.",
      "C": "Create a SageMaker processing job by calling the SageMaker Python SDK.",
      "D": "Create a data flow in SageMaker Data Wrangler. Configure a transform step."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152203-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 55,
    "question": "한 회사가 Amazon Q Business에 API 호출을 수행하는 애플리케이션을 생성합니다. 회사는 Amazon Q Business의 응답에 회사의 주요 경쟁사 이름이 포함되지 않도록 해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Q Business에서 경쟁사 이름을 차단된 구문으로 구성합니다.",
      "B": "Amazon Q Business 검색기를 구성하여 경쟁사 이름을 제외합니다.",
      "C": "Amazon Kendra 검색기를 Amazon Q Business용으로 구성하여 경쟁사 이름을 제외하는 인덱스를 구축합니다.",
      "D": "Amazon Q Business에서 문서 속성 부스팅을 구성하여 경쟁사 이름을 우선순위를 낮게 처리합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 차단된 구문(Blocked Phrases) — Amazon Q Business의 응답에서 특정 단어나 구문을 자동으로 제거하거나 마스킹\n▸ Amazon Q Business 검색기(Retriever) — RAG 시스템에서 문서를 검색하는 컴포넌트\n▸ 문서 속성 부스팅(Document Attribute Boosting) — 특정 속성을 가진 문서의 검색 순위를 높이거나 낮추는 기능\n\n【정답 포인트】\n'응답에 포함되지 않도록'이라는 요구사항은 최종 사용자에게 반환되는 텍스트에서 경쟁사 이름을 제거하는 것을 의미합니다. Amazon Q Business의 '차단된 구문' 기능은 정확히 이 목적으로 설계되었습니다. LLM이 생성한 응답에서 지정된 구문을 자동으로 필터링하거나 마스킹합니다. 검색기 제외\n(B) 나 Kendra 인덱싱\n(C) 은 검색 단계에서의 제어일 뿐, LLM이 이미 학습된 내용에서 경쟁사 정보를 생성할 수 있습니다. 문서 속성 부스팅\n(D) 은 우선순위 조정일 뿐 완전한 제외가 아닙니다.\n\n【오답 체크】\n(B) 검색기 제외 — Retriever에서 경쟁사 관련 문서를 검색하지 않더라도, LLM의 사전 학습 지식에서 경쟁사 이름이 포함된 응답을 생성할 수 있습니다.\n(C) Kendra 인덱싱 제외 — 외부 데이터 소스의 인덱싱만 제어하며, 기업 지식(회사 이미지, 마케팅 자료)에 경쟁사 언급이 있으면 검색될 수 있습니다.\n(D) 문서 속성 부스팅 낮춤 — 우선순위만 낮출 뿐, 관련 문서가 부족하면 결국 경쟁사 정보를 포함하는 응답이 생성될 수 있습니다.\n\n【시험 포인트】\n'응답에서 제거' → 차단된 구문. 최종 출력 필터링이 핵심. RAG 컴포넌트 (Retriever vs 응답 필터링) 구분.",
    "en_q": "A company is creating an application that will recommend products for customers to purchase. The application will make API calls to Amazon Q Business. The company must ensure that responses from Amazon Q Business do not include the name of the company's main competitor. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Configure the competitor's name as a blocked phrase in Amazon Q Business.",
      "B": "Configure an Amazon Q Business retriever to exclude the competitor's name.",
      "C": "Configure an Amazon Kendra retriever for Amazon Q Business to build indexes that exclude the competitor's name.",
      "D": "Configure document attribute boosting in Amazon Q Business to deprioritize the competitor's name."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152204-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 56,
    "question": "ML 엔지니어가 Amazon SageMaker를 사용하여 텍스트 요약(text summarization)을 위한 대규모 언어 모델(LLM)을 미세 조정해야 합니다. ML 엔지니어는 저코드 무코드(LCNC) 접근 방식을 따라야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker Studio를 사용하여 Amazon EC2 인스턴스에 배포된 LLM을 미세 조정합니다.",
      "B": "SageMaker Autopilot을 사용하여 커스텀 API 엔드포인트로 배포된 LLM을 미세 조정합니다.",
      "C": "SageMaker Autopilot을 사용하여 Amazon EC2 인스턴스에 배포된 LLM을 미세 조정합니다.",
      "D": "SageMaker Autopilot을 사용하여 SageMaker JumpStart로 배포된 LLM을 미세 조정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Autopilot — 자동화된 머신러닝으로 특성 엔지니어링, 모델 선택, 하이퍼파라미터 튜닝을 자동 수행\n▸ SageMaker JumpStart — 사전 학습된 모델과 노트북을 한 클릭으로 제공하는 SageMaker 허브\n▸ LCNC(Low-Code No-Code) — 코드 작성 최소화 또는 불필요한 접근 방식\n\n【정답 포인트】\n'LLM 미세 조정' + 'LCNC 접근'의 결합이 핵심입니다. SageMaker Autopilot은 정확히 자동화된 머신러닝을 제공하는 LCNC 도구입니다. 그런데 Autopilot이 LLM 미세 조정을 수행하려면, 사전 학습된 LLM이 필요합니다. SageMaker JumpStart는 사전 학습된 LLM(예: Hugging Face의 BERT, GPT 계열 모델)을 제공하므로, Autopilot과 결합하면 LCNC 방식으로 LLM 미세 조정이 가능합니다. SageMaker Studio\n(A) 는 노트북 환경일 뿐 자동화가 아니며, 커스텀 API\n(B) 나 EC2\n(C) 는 모두 배포 위치일 뿐 LCNC 요구사항과 무관합니다.\n\n【오답 체크】\n(A) SageMaker Studio — IDE 도구이며 LCNC가 아니라 코드 작성 환경입니다. 사전 학습 모델 제공도 없어 LLM 미세 조정 프로세스를 직접 구현해야 합니다.\n(B) Autopilot + 커스텀 API — Autopilot은 올바른 도구이지만, 커스텀 API 엔드포인트는 사전 학습 모델 제공이 아니며, 자체 배포해야 하므로 복잡도가 증가합니다.\n(C) Autopilot + EC2 — EC2 인스턴스는 SageMaker 생태계 내 배포 위치가 아니며, EC2에서의 LLM 관리는 LCNC 원칙에 맞지 않습니다.\n\n【시험 포인트】\n'LLM 미세 조정 + LCNC' → Autopilot + JumpStart. 사전 학습 모델 제공(JumpStart)과 자동 학습(Autopilot)의 결합.",
    "en_q": "An ML engineer needs to use Amazon SageMaker to fine-tune a large language model (LLM) for text summarization. The ML engineer must follow a low-code no-code (LCNC) approach. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use SageMaker Studio to fine-tune an LLM that is deployed on Amazon EC2 instances.",
      "B": "Use SageMaker Autopilot to fine-tune an LLM that is deployed by a custom API endpoint.",
      "C": "Use SageMaker Autopilot to fine-tune an LLM that is deployed on Amazon EC2 instances.",
      "D": "Use SageMaker Autopilot to fine-tune an LLM that is deployed by SageMaker JumpStart."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152205-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 57,
    "question": "한 회사가 매일 밤 한 번씩 실행되는 주가 예측 ML 모델을 필요로 합니다. 모델 입력은 당일 수집된 3MB의 데이터입니다. 모델은 다음날의 예측을 생성합니다. 예측 프로세스는 1분 미만으로 실행됩니다. 회사가 Amazon SageMaker에 모델을 배포하려면 어떻게 해야 합니까?",
    "options": {
      "A": "다중 모델 서버리스 엔드포인트를 사용합니다. 캐싱을 활성화합니다.",
      "B": "비동기 추론 엔드포인트를 사용합니다. InitialInstanceCount 매개변수를 0으로 설정합니다.",
      "C": "실시간 엔드포인트를 사용합니다. 모델을 사용하지 않을 때 0으로 확장되도록 자동 확장 정책을 구성합니다.",
      "D": "서버리스 추론 엔드포인트를 사용합니다. MaxConcurrency 매개변수를 1로 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Serverless Inference — 사용 시간만큼 자동 스케일, 미사용 시 자동 종료\n▸ MaxConcurrency — 서버리스 엔드포인트가 동시에 처리하는 요청 수\n▸ 일일 배치(Daily Batch) — 정해진 시간(밤)에 한 번만 실행되는 작업\n\n【정답 포인트】\n'매일 밤 한 번씩' + '1분 미만 실행' + '미사용 시간 긴'이라는 특성이 핵심입니다. 서버리스 추론은 정확히 이런 불규칙하고 간헐적인 사용 패턴을 위해 설계되었습니다. 사용하지 않을 때는 비용이 0이고, 요청이 들어오면 자동으로 프로비저닝되어 실행됩니다. MaxConcurrency=1은 동시에 1개 요청만 처리하면 되는 간단한 작업에 적합합니다. 비동기 추론\n(B) 은 비동기 처리가 필요 없는 배치 작업에 부적절하고, 실시간 + 오토스케일\n(C) 은 Scale-to-Zero가 아니어서 최소 비용이 발생합니다. 다중 모델\n(A) 은 요구사항과 무관합니다.\n\n【오답 체크】\n(A) 다중 모델 서버리스 — 하나의 엔드포인트에서 여러 모델을 전환하며 실행하는 방식이므로 이 문제의 단일 모델 요구사항과 맞지 않으며, 캐싱도 필요하지 않습니다.\n(B) 비동기 + InitialInstanceCount=0 — 비동기 추론은 요청을 큐에 저장하고 나중에 처리하는 방식이므로, '밤 1회 빠른 실행'의 배치 특성과 맞지 않습니다. 또한 InitialInstanceCount=0은 추가 오버헤드를 초래합니다.\n(C) 실시간 + 오토스케일 — 실시간 엔드포인트는 최소 1개 인스턴스를 항상 실행 중으로 유지해야 하므로, 하루 종일 미사용 시간에도 비용이 발생합니다. Scale-to-Zero는 지원하지 않습니다(현재 기준).\n\n【시험 포인트】\n'간헐적 배치 + 장시간 미사용' → Serverless Inference. MaxConcurrency는 동시 요청 수를 제한하는 파라미터.",
    "en_q": "A company has an ML model that needs to run one time each night to predict stock values. The model input is 3 MB of data that is collected during the current day. The model produces the predictions for the next day. The prediction process takes less than 1 minute to finish running. How should the company deploy the model on Amazon SageMaker to meet these requirements?",
    "en_opts": {
      "A": "Use a multi-model serverless endpoint. Enable caching.",
      "B": "Use an asynchronous inference endpoint. Set the InitialInstanceCount parameter to 0.",
      "C": "Use a real-time endpoint. Configure an auto scaling policy to scale the model to 0 when the model is not in use.",
      "D": "Use a serverless inference endpoint. Set the MaxConcurrency parameter to 1."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152206-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 58,
    "question": "ML 엔지니어가 Amazon SageMaker에서 폐쇄회로 CCTV 영상의 자동차 사고를 탐지하는 ML 모델을 학습했습니다. ML 엔지니어는 SageMaker Data Wrangler를 사용하여 사고 이미지와 비사고 이미지로 구성된 학습 데이터 세트를 생성했습니다. 모델은 학습 및 검증 중 잘 수행되었습니다. 그러나 다양한 카메라의 이미지 품질 변동으로 인해 프로덕션 환경에서 모델의 성능이 저하되고 있습니다. 가장 적은 시간에 모델의 정확도를 향상시킬 솔루션은 무엇입니까?",
    "options": {
      "A": "모든 카메라에서 더 많은 이미지를 수집합니다. Data Wrangler를 사용하여 새 학습 데이터 세트를 준비합니다.",
      "B": "Data Wrangler 손상 이미지 변환(corrupt image transform)을 사용하여 학습 데이터 세트를 다시 생성합니다. 임펄스 노이즈(impulse noise) 옵션을 지정합니다.",
      "C": "Data Wrangler 이미지 명도 대비 향상 변환(enhance image contrast transform)을 사용하여 학습 데이터 세트를 다시 생성합니다. Gamma 명도 대비 옵션을 지정합니다.",
      "D": "Data Wrangler 이미지 크기 변환(resize image transform)을 사용하여 학습 데이터 세트를 다시 생성합니다. 모든 이미지를 같은 크기로 자릅니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 데이터 증강(Data Augmentation) — 기존 데이터에 변환을 가해 학습 샘플을 늘리고 모델의 일반화 능력 향상\n▸ 손상 이미지 변환 — 임펄스 노이즈, 흐림, 왜곡 등을 추가하여 품질 저하 시뮬레이션\n▸ 분포 불일치(Distribution Mismatch) — 학습 데이터와 실제 프로덕션 데이터의 특성 차이\n\n【정답 포인트】\n문제의 핵심은 '학습 중 잘 수행, 프로덕션 저성능' = 학습 데이터와 프로덕션 데이터의 분포 불일치입니다. 다양한 카메라의 이미지 품질 변동(노이즈, 블러, 조명 차이)이 원인입니다. 이를 해결하려면 학습 데이터에 동일한 품질 변동을 추가하여 모델을 강건하게 만들어야 합니다. Data Wrangler의 손상 이미지 변환(특히 임펄스 노이즈)은 정확히 카메라 센서 노이즈를 시뮬레이션합니다. 이 방식은 새로운 데이터 수집\n(A) 과 달리 기존 데이터로 즉시 처리 가능하므로 시간이 가장 적게 소비됩니다. 명도 대비 향상\n(C) 은 이미지 복원 목적이고, 크기 변환\n(D) 은 해상도 표준화일 뿐 노이즈 강건성과 무관합니다.\n\n【오답 체크】\n(A) 추가 데이터 수집 — 새로운 이미지를 모든 카메라에서 수집하고 라벨링하는 과정이 매우 오래 걸립니다. 한 달 이상의 시간이 필요할 수 있습니다.\n(C) 명도 대비 향상 — 이미지를 복원하거나 개선하는 전처리이므로, 낮은 품질 이미지에 대한 모델의 강건성을 학습시키지 못합니다. 프로덕션 카메라의 낮은 품질을 고품질로 변환할 수 없습니다.\n(D) 크기 표준화 — 크기 조정은 이미지 품질 변동(노이즈, 해상도 차이)과 무관합니다. 학습 데이터의 다양성을 증가시키지 않습니다.\n\n【시험 포인트】\n'학습과 프로덕션 성능 갭 + 품질 변동' → 데이터 증강으로 분포 불일치 해결. 임펄스 노이즈 시뮬레이션이 최빠른 해결책.",
    "en_q": "An ML engineer trained an ML model on Amazon SageMaker to detect automobile accidents from dosed-circuit TV footage. The ML engineer used SageMaker Data Wrangler to create a training dataset of images of accidents and non-accidents. The model performed well during training and validation. However, the model is underperforming in production because of variations in the quality of the images from various cameras. Which solution will improve the model's accuracy in the LEAST amount of time?",
    "en_opts": {
      "A": "Collect more images from all the cameras. Use Data Wrangler to prepare a new training dataset.",
      "B": "Recreate the training dataset by using the Data Wrangler corrupt image transform. Specify the impulse noise option.",
      "C": "Recreate the training dataset by using the Data Wrangler enhance image contrast transform. Specify the Gamma contrast option.",
      "D": "Recreate the training dataset by using the Data Wrangler resize image transform. Crop all images to the same size."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152093-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 59,
    "question": "한 회사가 입력 텍스트에 대한 임베딩을 생성하기 위해 다양한 API를 사용합니다. 회사는 3개월마다 API 토큰을 자동으로 회전하는 솔루션을 구현해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Secrets Manager에 토큰을 저장합니다. 회전을 수행하는 AWS Lambda 함수를 생성합니다.",
      "B": "AWS Systems Manager Parameter Store에 토큰을 저장합니다. 회전을 수행하는 AWS Lambda 함수를 생성합니다.",
      "C": "AWS Key Management Service(AWS KMS)에 토큰을 저장합니다. AWS 관리 키를 사용하여 회전을 수행합니다.",
      "D": "AWS Key Management Service(AWS KMS)에 토큰을 저장합니다. AWS 소유 키를 사용하여 회전을 수행합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Secrets Manager — API 키, 데이터베이스 비밀번호, OAuth 토큰 등을 저장하고 자동 회전하는 서비스\n▸ 자동 회전(Automatic Rotation) — Secrets Manager의 기본 기능으로 Lambda를 호출하여 비밀번호/토큰 업데이트\n▸ Parameter Store — 구성 데이터와 비밀을 저장하지만 자동 회전 기능이 없음\n\n【정답 포인트】\n'API 토큰 자동 회전'은 Secrets Manager의 대표 사용 사례입니다. Secrets Manager는 정확히 이 목적으로 설계된 서비스로, 사용자 정의 회전 Lambda를 지정하면 설정된 일정(예: 3개월)에 따라 자동으로 실행됩니다. 회전 프로세스(1. 새 토큰 생성 2. 기존 토큰과 교체 3. 테스트 4. 커밋)를 Lambda에서 구현하면, Secrets Manager가 모두 자동화합니다. Parameter Store\n(B) 는 구성 데이터 저장 목적이며 자동 회전 기능이 없습니다. KMS(C, D)는 암호화 키 관리 서비스이며 토큰 회전 기능이 없습니다.\n\n【오답 체크】\n(B) Parameter Store + Lambda — Parameter Store는 구성 데이터(환경변수, 앱 설정) 저장에 최적화되었으며, Secrets Manager와 달리 자동 회전 오케스트레이션 기능이 없습니다. Lambda 함수를 직접 구성해도 회전 일정 관리, 버저닝, 롤백이 복잡합니다.\n(C) KMS + 관리 키 — KMS는 암호화 키의 회전을 관리하지만, API 토큰과 같은 비밀 데이터의 저장 및 회전 기능이 없습니다. 토큰 자동 회전에 부적절합니다.\n(D) KMS + 소유 키 — AWS 소유 키는 AWS가 관리하는 키로, 사용자 제어가 불가능하며 토큰 회전과 무관합니다.\n\n【시험 포인트】\n'비밀 데이터 자동 회전' → AWS Secrets Manager. 서비스 간 목적 구분: Secrets Manager(비밀 회전) vs Parameter Store(구성 데이터) vs KMS(암호화 키).",
    "en_q": "A company has an application that uses different APIs to generate embeddings for input text. The company needs to implement a solution to automatically rotate the API tokens every 3 months. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Store the tokens in AWS Secrets Manager. Create an AWS Lambda function to perform the rotation.",
      "B": "Store the tokens in AWS Systems Manager Parameter Store. Create an AWS Lambda function to perform the rotation.",
      "C": "Store the tokens in AWS Key Management Service (AWS KMS). Use an AWS managed key to perform the rotation.",
      "D": "Store the tokens in AWS Key Management Service (AWS KMS). Use an AWS owned key to perform the rotation."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152209-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 60,
    "question": "ML 엔지니어가 누락된 값, 중복, 극값 이상치를 포함하는 데이터 세트를 수집합니다. ML 엔지니어는 이러한 데이터 세트를 단일 데이터 프레임으로 통합하고 ML을 위해 데이터를 준비해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon SageMaker Data Wrangler를 사용하여 데이터 세트를 가져오고 단일 데이터 프레임으로 통합합니다. 정제 및 보강 기능을 사용하여 데이터를 준비합니다.",
      "B": "Amazon SageMaker Ground Truth를 사용하여 데이터 세트를 가져오고 단일 데이터 프레임으로 통합합니다. 인간 중심 루프(human-in-the-loop) 기능을 사용하여 데이터를 준비합니다.",
      "C": "데이터 세트를 수동으로 가져오고 병합합니다. 데이터를 단일 데이터 프레임으로 통합합니다. Amazon Q Developer를 사용하여 데이터를 준비할 코드 스니펫을 생성합니다.",
      "D": "데이터 세트를 수동으로 가져오고 병합합니다. 데이터를 단일 데이터 프레임으로 통합합니다. 데이터를 준비하기 위해 Amazon SageMaker 데이터 라벨링을 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker Data Wrangler — 데이터 통합, 정제, 변환을 GUI 기반으로 수행하는 SageMaker 도구\n▸ 정제(Cleansing) — 누락된 값 채우기, 중복 제거, 이상치 처리\n▸ 보강(Enrichment) — 새로운 특성 추출, 데이터 유형 변환\n\n【정답 포인트】\n'여러 데이터 세트 통합 + 정제 + 보강'의 전체 데이터 준비 워크플로우가 필요합니다. SageMaker Data Wrangler는 정확히 이 전체 파이프라인을 GUI 기반으로 제공합니다: (1) 여러 소스에서 데이터 가져오기 (2) 자동 병합 및 통합 (3) Missing Value, Duplicate, Outlier 처리 기능 (4) Feature Engineering. 코드 작성 없이 드래그-드롭으로 수행 가능합니다. Ground Truth\n(B) 는 라벨링 도구이며 데이터 정제와 무관하고, Q Developer\n(C) 나 데이터 라벨링\n(D) 도 이 문제의 정제 목표와 맞지 않습니다.\n\n【오답 체크】\n(B) Ground Truth + 인간 중심 루프 — Ground Truth는 데이터 라벨링(labeling, annotation)을 위한 서비스이며, 누락된 값 채우기나 이상치 제거 같은 데이터 정제 기능이 없습니다. 라벨 작업자를 통한 수동 라벨링은 정제 목표와 다릅니다.\n(C) 수동 병합 + Q Developer — 데이터 세트 병합을 수동으로 수행하고 Q Developer로 코드를 생성하는 방식은 많은 시간을 소비합니다. 또한 코드 생성만 가능하고 데이터 정제 작업 자체는 여전히 개발자가 구현해야 합니다.\n(D) 수동 병합 + 데이터 라벨링 — 데이터 라벨링은 이상치 제거나 누락된 값 처리가 아니라, 데이터에 정답 레이블을 부여하는 작업입니다. 이 문제의 정제 목표와 완전히 다릅니다.\n\n【시험 포인트】\n'데이터 통합 + 정제 + 보강' 전체 워크플로우 → Data Wrangler. No-code 데이터 준비 도구의 사용 사례.",
    "en_q": "An ML engineer receives datasets that contain missing values, duplicates, and extreme outliers. The ML engineer must consolidate these datasets into a single data frame and must prepare the data for ML. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon SageMaker Data Wrangler to import the datasets and to consolidate them into a single data frame. Use the cleansing and enrichment functionalities to prepare the data.",
      "B": "Use Amazon SageMaker Ground Truth to import the datasets and to consolidate them into a single data frame. Use the human-in-the-loop capability to prepare the data.",
      "C": "Manually import and merge the datasets. Consolidate the datasets into a single data frame. Use Amazon Q Developer to generate code snippets that will prepare the data.",
      "D": "Manually import and merge the datasets. Consolidate the datasets into a single data frame. Use Amazon SageMaker data labeling to prepare the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152210-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 61,
    "question": "한 회사가 고객이 회사 직원으로부터 장기간 지원을 필요로 했는지 여부를 보여주는 과거 데이터를 가지고 있습니다. 회사는 새로운 고객이 장기간 지원을 필요로 할지 여부를 예측하는 ML 모델을 개발해야 합니다. 회사가 이 요구사항을 충족하기 위해 사용해야 하는 모델링 접근 방식은 무엇입니까?",
    "options": {
      "A": "이상 탐지(Anomaly detection)",
      "B": "선형 회귀(Linear regression)",
      "C": "로지스틱 회귀(Logistic regression)",
      "D": "의미론적 분할(Semantic segmentation)"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 로지스틱 회귀(Logistic Regression) — 이진 분류(Binary Classification)를 위한 통계 모델로, 확률 출력\n▸ 이진 분류 — '예/아니오', '필요/불필요' 같은 두 가지 결과만 있는 문제\n▸ 확률 추정 — 입력 특성에 기반해 특정 클래스에 속할 확률을 계산\n\n【정답 포인트】\n문제의 핵심: '장기간 지원 필요 여부를 예측' = 이진 분류 문제입니다. 결과는 '필요(1)' 또는 '불필요(0)' 두 가지입니다. 로지스틱 회귀는 정확히 이진 분류를 위해 설계된 알고리즘으로, 입력 특성(고객 정보)에 기반해 특정 클래스일 확률을 출력합니다. 확률을 0.5 임계값으로 비교하여 최종 분류를 수행합니다. 선형 회귀\n(B) 는 연속 값 예측(회귀)이므로 이진 분류에 부적절하고, 이상 탐지\n(A) 는 비정상 행동을 찾는 것이며, 의미론적 분할\n(D) 은 이미지의 픽셀 단위 분류입니다.\n\n【오답 체크】\n(A) 이상 탐지 — 정상/비정상 데이터 패턴을 구분하는 기법으로, '고객 특성'에 기반한 '지원 필요 여부' 예측과는 다릅니다. 이상치를 찾는 데 사용됩니다.\n(B) 선형 회귀 — 연속형 수치를 예측하는 기법(예: 주가, 판매량)으로, 이진 분류(Yes/No)에 부적합합니다. 로지스틱 회귀가 선형 회귀를 비선형으로 변환하여 이진 분류를 수행합니다.\n(D) 의미론적 분할 — 이미지의 각 픽셀을 특정 클래스로 분할하는 컴퓨터 비전 기법으로, 고객 정보 테이블 기반 이진 분류와 무관합니다.\n\n【시험 포인트】\n'Yes/No 예측' → 이진 분류 → 로지스틱 회귀. 문제 유형 판단: 회귀(선형) vs 분류(로지스틱).",
    "en_q": "A company has historical data that shows whether customers needed long-term support from company staff. The company needs to develop an ML model to predict whether new customers will require long-term support. Which modeling approach should the company use to meet this requirement?",
    "en_opts": {
      "A": "Anomaly detection",
      "B": "Linear regression",
      "C": "Logistic regression",
      "D": "Semantic segmentation"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152217-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 62,
    "question": "ML 엔지니어가 Amazon SageMaker 외부에서 이진 분류 모델을 개발했습니다. ML 엔지니어는 SageMaker Canvas 사용자가 추가 튜닝할 수 있도록 모델을 접근 가능하게 해야 합니다. 모델 아티팩트는 Amazon S3 버킷에 저장되어 있습니다. ML 엔지니어와 Canvas 사용자는 동일한 SageMaker 도메인에 속합니다. ML 엔지니어가 Canvas 사용자와 모델을 공유할 수 있도록 충족되어야 하는 요구사항의 조합은 무엇입니까? (2가지를 선택하세요.)",
    "options": {
      "A": "ML 엔지니어와 Canvas 사용자는 별도의 SageMaker 도메인에 있어야 합니다.",
      "B": "Canvas 사용자는 모델 아티팩트가 저장된 S3 버킷에 액세스할 수 있는 권한이 있어야 합니다.",
      "C": "모델은 SageMaker Model Registry에 등록되어야 합니다.",
      "D": "ML 엔지니어는 AWS Marketplace에 모델을 호스팅해야 합니다.",
      "E": "ML 엔지니어는 모델을 SageMaker 엔드포인트에 배포해야 합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Registry — 모델 메타데이터(버전, 성능, 아티팩트 경로)를 중앙화하여 관리\n▸ Canvas 사용자 권한 — Canvas에서 모델을 로드하려면 아티팩트가 저장된 리소스에 접근 권한 필요\n▸ 동일 도메인(Same Domain) — 같은 SageMaker 도메인 내 사용자 간 리소스 공유의 전제\n\n【정답 포인트】\n'ML 엔지니어가 Canvas 사용자와 모델을 공유'하기 위한 필수 조건을 찾는 문제입니다.\n(B) Canvas 사용자가 S3 버킷에 접근할 수 있어야 → Canvas가 S3에서 모델 아티팩트를 로드할 수 있습니다.\n(C) 모델을 Model Registry에 등록 → Canvas에서 공유 모델을 발견하고 로드하는 메커니즘입니다. Model Registry는 SageMaker 도메인 내에서 모델을 중앙화하여 관리하고, Canvas 사용자는 Registry를 통해 모델을 찾아 자신의 프로젝트로 가져올 수 있습니다.\n(A) 별도 도메인은 오히려 공유를 방해하므로 거짓이고,\n(D) Marketplace는 외부 공유용이며 내부 공유와 무관하고,\n(E) SageMaker 엔드포인트 배포는 Canvas 사용 목적과 무관합니다.\n\n【오답 체크】\n(A) 별도 도메인 — 문제에서 '동일한 SageMaker 도메인에 속합니다'라고 명시되어 있으며, 별도 도메인은 공유를 더 어렵게 만듭니다. 거짓입니다.\n(D) AWS Marketplace — Marketplace 호스팅은 외부 고객들과 모델을 판매하는 경우이며, 내부 Canvas 사용자 간 공유와 무관합니다.\n(E) SageMaker 엔드포인트 배포 — Canvas는 배포된 엔드포인트가 아닌 모델 아티팩트 파일을 직접 로드합니다. Canvas 사용자가 모델을 추가 튜닝하려면 엔드포인트가 아닌 학습 가능한 모델 파일 접근이 필요합니다.\n\n【시험 포인트】\n다중 선택 문제 — Canvas 공유 = Model Registry 등록 + S3 접근 권한. 배포 vs 공유의 개념 구분 필수.",
    "en_q": "An ML engineer has developed a binary classification model outside of Amazon SageMaker. The ML engineer needs to make the model accessible to a SageMaker Canvas user for additional tuning. The model artifacts are stored in an Amazon S3 bucket. The ML engineer and the Canvas user are part of the same SageMaker domain. Which combination of requirements must be met so that the ML engineer can share the model with the Canvas user? (Choose two.)",
    "en_opts": {
      "A": "The ML engineer and the Canvas user must be in separate SageMaker domains.",
      "B": "The Canvas user must have permissions to access the S3 bucket where the model artifacts are stored.",
      "C": "The model must be registered in the SageMaker Model Registry.",
      "D": "The ML engineer must host the model on AWS Marketplace.",
      "E": "The ML engineer must deploy the model to a SageMaker endpoint."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152223-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 63,
    "question": "한 회사가 Amazon SageMaker에서 심층 학습 모델을 구축합니다. 회사는 학습 데이터 세트로 많은 양의 데이터를 사용합니다. 회사는 검증 데이터 세트에서 손실 함수를 최소화하기 위해 모델의 하이퍼파라미터를 최적화해야 합니다. 가장 적은 계산 시간으로 이 목표를 달성할 하이퍼파라미터 튜닝 전략은 무엇입니까?",
    "options": {
      "A": "Hyperband",
      "B": "격자 탐색(Grid search)",
      "C": "베이지안 최적화(Bayesian optimization)",
      "D": "무작위 탐색(Random search)"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Hyperband — 무작위 탐색과 연속 반감(successive halving)을 결합하여 계산 효율 최적화\n▸ 연속 반감(Successive Halving) — 저성능 하이퍼파라미터 조합을 조기에 제거\n▸ 계산 시간 최소화 — Early stopping과 리소스 할당 최적화\n\n【정답 포인트】\n'가장 적은 계산 시간'이 핵심 요구사항입니다. Hyperband는 정확히 이 목표를 위해 설계된 알고리즘입니다. 작동 원리: (1) 무작위 하이퍼파라미터 후보 샘플링 (2) 작은 리소스(에포크/데이터)로 초기 평가 (3) 성능이 낮은 조합 조기 제거 (4) 남은 조합에 더 많은 리소스 할당 (5) 반복). 이 방식은 저성능 후보를 빠르게 제거하므로 전체 계산 시간을 크게 단축합니다. 격자 탐색\n(B) 은 모든 조합을 평가하므로 계산량이 많고, 베이지안\n(C) 은 순차 기반이므로 병렬화 어렵고, 무작위 탐색\n(D) 은 모든 후보를 동등하게 평가합니다.\n\n【오답 체크】\n(B) 격자 탐색 — 모든 하이퍼파라미터 조합을 완전히 평가해야 하므로, 후보 수가 지수적으로 증가할 때 계산 시간이 급증합니다(차원의 저주).\n(C) 베이지안 최적화 — 확률 모델을 기반으로 순차적 탐색을 수행하므로, 병렬 처리가 어렵고 각 평가에 시간이 걸립니다. 대규모 데이터에는 부적합합니다.\n(D) 무작위 탐색 — 무작위 샘플링은 효율적이지만, 모든 후보를 동등하게 평가하므로 저성능 조합에도 리소스를 낭비합니다.\n\n【시험 포인트】\n'계산 시간 최소 + 대량 데이터' → Hyperband. Early stopping과 리소스 할당 최적화의 결합.",
    "en_q": "A company is building a deep learning model on Amazon SageMaker. The company uses a large amount of data as the training dataset. The company needs to optimize the model's hyperparameters to minimize the loss function on the validation dataset. Which hyperparameter tuning strategy will accomplish this goal with the LEAST computation time?",
    "en_opts": {
      "A": "Hyperband",
      "B": "Grid search",
      "C": "Bayesian optimization",
      "D": "Random search"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152224-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 64,
    "question": "한 회사가 기본 AWS 계정에서 Amazon Redshift ML을 사용할 계획입니다. 소스 데이터는 보조 계정의 Amazon S3 버킷에 있습니다. ML 엔지니어는 기본 계정에서 보조 계정의 S3 버킷에 액세스하는 ML 파이프라인을 설정해야 합니다. 솔루션은 공개 IPv4 주소를 요구하지 않아야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기본 계정에서 VPC 내에 공개 액세스를 활성화하지 않도록 Redshift 클러스터와 Amazon SageMaker Studio를 프로비저닝합니다. 계정 간 VPC 피어링 연결을 생성합니다. VPC 경로 테이블을 업데이트하여 0.0.0.0/0으로의 경로를 제거합니다.",
      "B": "기본 계정에서 VPC 내에 공개 액세스를 활성화하지 않도록 Redshift 클러스터와 Amazon SageMaker Studio를 프로비저닝합니다. AWS Direct Connect 연결과 전송 게이트웨이를 생성합니다. 두 계정의 VPC를 전송 게이트웨이와 연결합니다. VPC 경로 테이블을 업데이트하여 0.0.0.0/0으로의 경로를 제거합니다.",
      "C": "기본 계정의 VPC에 Redshift 클러스터와 Amazon SageMaker Studio를 프로비저닝합니다. 계정 간 2개의 암호화된 IPsec 터널이 있는 AWS Site-to-Site VPN 연결을 생성합니다. Amazon S3용 인터페이스 VPC 엔드포인트를 설정합니다.",
      "D": "기본 계정의 VPC에 Redshift 클러스터와 Amazon SageMaker Studio를 프로비저닝합니다. S3 게이트웨이 엔드포인트를 생성합니다. 기본 계정의 IAM 주체에서 S3 버킷 정책을 업데이트하여 액세스를 허용합니다. SageMaker와 Amazon Redshift용 인터페이스 VPC 엔드포인트를 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 게이트웨이 엔드포인트 — VPC 내에서 인터넷 게이트웨이 없이 S3에 접근하는 최적 방식\n▸ 계정 간 액세스(Cross-Account Access) — 다른 AWS 계정의 S3 버킷에 접근하려면 버킷 정책 + IAM 권한 조합\n▸ 공개 IPv4 없음(No Public IP) — 인터넷 게이트웨이 또는 NAT 없이 비공개 서브넷에서만 운영\n\n【정답 포인트】\n'공개 IPv4 없음' + '계정 간 S3 액세스'의 조합입니다. S3 게이트웨이 엔드포인트는 VPC 내 Redshift와 SageMaker에서 S3에 직접 접근하는 가장 간단하고 효율적인 방식입니다. 게이트웨이 엔드포인트는 추가 비용이 없고, NAT나 인터넷 게이트웨이 없이도 작동합니다. 계정 간 액세스를 위해 보조 계정의 S3 버킷 정책을 업데이트하여 기본 계정의 IAM 주체(Redshift의 IAM 역할, SageMaker 실행 역할)를 허용합니다. VPC 피어링\n(A) 이나 Direct Connect\n(B) 는 VPC 간 연결이지만 S3 액세스 자체는 별도 구성이 필요하고, Site-to-Site VPN\n(C) 은 IPsec 오버헤드가 있습니다.\n\n【오답 체크】\n(A) VPC 피어링 — 두 VPC를 피어링 연결하지만, 보조 계정의 S3 버킷 접근을 위해 여전히 공개 IPv4가 필요합니다. 또한 피어링만으로는 계정 간 S3 액세스 권한 설정이 불완전합니다.\n(B) Direct Connect + 전송 게이트웨이 — 기업 전용선 연결로 비용이 매우 높고, 보조 계정의 S3 접근을 위한 게이트웨이 엔드포인트 구성이 여전히 필요합니다. 오버엔지니어링입니다.\n(C) Site-to-Site VPN + 인터페이스 엔드포인트 — VPN은 IPsec 터널링 오버헤드가 있고, 인터페이스 엔드포인트는 시간당 비용이 발생합니다(게이트웨이는 무료). S3 접근에 인터페이스 엔드포인트는 과도합니다.\n\n【시험 포인트】\n'S3 + 계정 간 + 공개 IP 없음' → S3 게이트웨이 엔드포인트 + 버킷 정책. VPC 엔드포인트 유형 (게이트웨이 vs 인터페이스) 선택 기준.",
    "en_q": "A company is planning to use Amazon Redshift ML in its primary AWS account. The source data is in an Amazon S3 bucket in a secondary account. An ML engineer needs to set up an ML pipeline in the primary account to access the S3 bucket in the secondary account. The solution must not require public IPv4 addresses. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Provision a Redshift cluster and Amazon SageMaker Studio in a VPC with no public access enabled in the primary account. Create a VPC peering connection between the accounts. Update the VPC route tables to remove the route to 0.0.0.0/0.",
      "B": "Provision a Redshift cluster and Amazon SageMaker Studio in a VPC with no public access enabled in the primary account. Create an AWS Direct Connect connection and a transit gateway. Associate the VPCs from both accounts with the transit gateway. Update the VPC route tables to remove the route to 0.0.0.0/0.",
      "C": "Provision a Redshift cluster and Amazon SageMaker Studio in a VPC in the primary account. Create an AWS Site-to-Site VPN connection with two encrypted IPsec tunnels between the accounts. Set up interface VPC endpoints for Amazon S3.",
      "D": "Provision a Redshift cluster and Amazon SageMaker Studio in a VPC in the primary account. Create an S3 gateway endpoint. Update the S3 bucket policy to allow IAM principals from the primary account. Set up interface VPC endpoints for SageMaker and Amazon Redshift."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152225-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 65,
    "question": "한 회사가 AWS Lambda 함수를 사용하여 ML 모델의 메트릭을 모니터링합니다. ML 엔지니어는 메트릭이 임계값을 초과할 때 이메일 메시지를 보내는 솔루션을 구현해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Lambda 함수에서 메트릭을 AWS CloudTrail에 기록합니다. 이메일 메시지를 보내도록 CloudTrail 추적을 구성합니다.",
      "B": "Lambda 함수에서 메트릭을 Amazon CloudFront에 기록합니다. 이메일 메시지를 보내도록 Amazon CloudWatch 알람을 구성합니다.",
      "C": "Lambda 함수에서 메트릭을 Amazon CloudWatch에 기록합니다. 이메일 메시지를 보내도록 CloudWatch 알람을 구성합니다.",
      "D": "Lambda 함수에서 메트릭을 Amazon CloudWatch에 기록합니다. 이메일 메시지를 보내도록 Amazon CloudFront 규칙을 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon CloudWatch — 애플리케이션 메트릭 수집, 저장, 분석하는 모니터링 서비스\n▸ CloudWatch 알람 — 메트릭 임계값 초과 시 자동으로 SNS 알림 발송\n▸ AWS CloudTrail — API 호출 감사 로그 (메트릭 모니터링 목적 아님)\n\n【정답 포인트】\n'메트릭 모니터링 + 임계값 초과 시 이메일'은 CloudWatch의 표준 사용 사례입니다. 프로세스: (1) Lambda에서 메트릭을 CloudWatch에 발행 (2) CloudWatch에 알람 규칙 설정 (임계값, 지속 시간 등) (3) 알람이 SNS 주제로 메시지 발송 (4) SNS가 구독자(이메일)에게 알림. CloudTrail\n(A) 은 API 호출 감사 로그이며 메트릭 기반 알림이 아니고, CloudFront(B, D)는 CDN 콘텐츠 배포 서비스로 메트릭 모니터링과 무관합니다.\n\n【오답 체크】\n(A) CloudTrail + 이메일 — CloudTrail은 AWS API 호출 기록을 저장하는 감사 로그 서비스일 뿐, 메트릭 값 기반 알람 기능이 없습니다. 또한 CloudTrail 자체는 이메일 알림을 보낼 수 없습니다.\n(B) CloudFront + CloudWatch 알람 — CloudFront는 CDN(콘텐츠 배포 네트워크)이며, 애플리케이션 메트릭 저장 목적이 아닙니다. CloudWatch 알람으로 CloudFront 메트릭은 모니터링할 수 있지만, Lambda가 생성하는 모델 메트릭과 무관합니다.\n(D) CloudWatch + CloudFront 규칙 — CloudFront는 CDN 캐시 규칙만 가능하며, CloudWatch 메트릭 임계값 기반 알림 기능이 없습니다.\n\n【시험 포인트】\n'메트릭 임계값 알림' → CloudWatch Alarm → SNS → 이메일. 서비스 간 용도 구분: CloudTrail(감사), CloudFront(CDN), CloudWatch(모니터링).",
    "en_q": "A company is using an AWS Lambda function to monitor the metrics from an ML model. An ML engineer needs to implement a solution to send an email message when the metrics breach a threshold. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Log the metrics from the Lambda function to AWS CloudTrail. Configure a CloudTrail trail to send the email message.",
      "B": "Log the metrics from the Lambda function to Amazon CloudFront. Configure an Amazon CloudWatch alarm to send the email message.",
      "C": "Log the metrics from the Lambda function to Amazon CloudWatch. Configure a CloudWatch alarm to send the email message.",
      "D": "Log the metrics from the Lambda function to Amazon CloudWatch. Configure an Amazon CloudFront rule to send the email message."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152226-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 66,
    "question": "한 회사가 Amazon SageMaker를 사용하여 프로덕션에 예측 ML 모델을 배포했습니다. 회사는 모델에 SageMaker Model Monitor를 사용하고 있습니다. 모델 업데이트 후 ML 엔지니어는 Model Monitor 확인에서 데이터 품질 문제를 발견했습니다. ML 엔지니어는 Model Monitor가 식별한 데이터 품질 문제를 완화하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "모델의 매개변수 및 하이퍼파라미터를 조정합니다.",
      "B": "최신 프로덕션 데이터를 사용하는 수동 Model Monitor 작업을 시작합니다.",
      "C": "최신 데이터세트에서 새 베이스라인을 생성합니다. 새 베이스라인을 사용하도록 Model Monitor를 업데이트합니다.",
      "D": "기존 훈련 세트에 추가 데이터를 포함합니다. 모델을 재훈련하고 재배포합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Model Monitor — 프로덕션 모델의 데이터 품질, 모델 품질, 편향 드리프트를 모니터링하는 SageMaker 서비스\n▸ Baseline — Model Monitor가 현재 데이터를 비교할 참조 통계치 (평균, 표준편차 등)\n\n【정답 포인트】\n▸ \"데이터 품질 문제\" 키워드 → 베이스라인 업데이트가 핵심 — 모델 업데이트 후 프로덕션 데이터의 분포가 변했으므로, 이전 훈련 데이터 기반 베이스라인이 더 이상 유효하지 않음. 최신 데이터로 새 베이스라인을 생성하고 Model Monitor가 이를 사용하도록 재구성해야 Model Monitor의 드리프트 탐지가 정상 작동\n\n【오답 체크】\n(A) 하이퍼파라미터 조정 — 모델 성능 개선용이며, 데이터 품질 모니터링 기준과 무관. Model Monitor가 식별한 것은 입력 데이터의 분포 변화이지 모델 매개변수 문제 아님\n(B) 수동 Model Monitor 작업 — 일회성 점검일 뿐 근본 해결 불가. 지속적 모니터링을 위해 베이스라인을 갱신해야 함\n(D) 추가 데이터 재훈련 — 모델 정확도를 높이려는 시도이지만, 현재 문제는 모니터링 기준(베이스라인)의 만료임. 재훈련 후에도 베이스라인을 업데이트하지 않으면 같은 문제 반복\n\n【시험 포인트】\n\"데이터 품질 문제\" + \"Model Monitor\" → 베이스라인 교체. 드리프트 감지는 항상 베이스라인이 최신 데이터 분포를 반영하도록 유지해야 작동함",
    "en_q": "A company has used Amazon SageMaker to deploy a predictive ML model in production. The company is using SageMaker Model Monitor on the model. After a model update, an ML engineer notices data quality issues in the Model Monitor checks. What should the ML engineer do to mitigate the data quality issues that Model Monitor has identified?",
    "en_opts": {
      "A": "Adjust the model's parameters and hyperparameters.",
      "B": "Initiate a manual Model Monitor job that uses the most recent production data.",
      "C": "Create a new baseline from the latest dataset. Update Model Monitor to use the new baseline for evaluations.",
      "D": "Include additional data in the existing training set for the model. Retrain and redeploy the model."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152227-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 67,
    "question": "한 회사가 고객이 회사 웹사이트에 업로드하는 이미지를 기반으로 텍스트 설명을 생성하는 ML 모델을 보유하고 있습니다. 이미지의 총 크기는 최대 50MB입니다. ML 엔지니어는 이미지를 Amazon S3 버킷에 저장하기로 결정했습니다. ML 엔지니어는 수요 변화에 맞춰 확장할 수 있는 처리 솔루션을 구현해야 합니다. 어떤 솔루션이 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon SageMaker 배치 변환 작업을 생성하여 S3 버킷의 모든 이미지를 처리합니다.",
      "B": "Amazon SageMaker 비동기 추론 엔드포인트와 스케일링 정책을 생성합니다. 각 이미지에 대해 추론 요청을 하는 스크립트를 실행합니다.",
      "C": "Karpenter를 사용하는 Amazon EKS(Elastic Kubernetes Service) 클러스터를 생성합니다. EKS 클러스터에서 모델을 호스팅합니다. 각 이미지에 대해 추론 요청을 하는 스크립트를 실행합니다.",
      "D": "Amazon ECS(Elastic Container Service) 클러스터를 사용하는 AWS Batch 작업을 생성합니다. 각 AWS Batch 작업에 대해 처리할 이미지 목록을 지정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SageMaker Asynchronous Inference — 엔드포인트 기반 비동기 추론으로 요청-응답 시간 제약 없음. 자동 스케일링 지원, 서버리스 수준의 관리\n▸ Batch Transform — 대량 데이터 일괄 처리용이지만 정해진 시각에 작업 시작해야 하고 지속적 요청 처리에 부적합\n\n【정답 포인트】\n▸ \"스케일링 수요 변화\" + \"운영 오버헤드 최소\" 키워드 → Asynchronous Inference 정답. 고객이 실시간으로 업로드하면 각 이미지마다 추론 요청이 발생하므로 동적 스케일링 필요. Async Inference는 자동으로 부하에 따라 스케일링되며 관리할 인프라 최소\n\n【오답 체크】\n(A) Batch Transform — 배치 처리용으로 지정된 시간에 S3 데이터 일괄 처리. 실시간 요청 스트림에는 부적합. 매 요청마다 배치 작업을 시작하면 오버헤드 급증\n(C) EKS + Karpenter — 클러스터 구성, 네트워킹, 스토리지 관리 필요. 운영 오버헤드 가장 높음. Karpenter도 포드 레벨 오토스케일링일 뿐 전체 인프라 관리는 별도\n(D) AWS Batch + ECS — Batch는 큐 기반 배치 처리 시스템. 실시간 추론 엔드포인트 아님. 스크립트로 매번 작업 제출하면 지연 증가\n\n【시험 포인트】\n\"동적 요청\" + \"자동 스케일링\" + \"최소 관리\" → SageMaker Asynchronous Inference. Batch Transform은 배치 시점 기반, Async는 요청 기반",
    "en_q": "A company has an ML model that generates text descriptions based on images that customers upload to the company's website. The images can be up to 50 MB in total size. An ML engineer decides to store the images in an Amazon S3 bucket. The ML engineer must implement a processing solution that can scale to accommodate changes in demand. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create an Amazon SageMaker batch transform job to process all the images in the S3 bucket.",
      "B": "Create an Amazon SageMaker Asynchronous Inference endpoint and a scaling policy. Run a script to make an inference request for each image.",
      "C": "Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster that uses Karpenter for auto scaling. Host the model on the EKS cluster. Run a script to make an inference request for each image.",
      "D": "Create an AWS Batch job that uses an Amazon Elastic Container Service (Amazon ECS) cluster. Specify a list of images to process for each AWS Batch job."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152228-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 68,
    "question": "ML 엔지니어가 문서에서 의미 있는 고유 키워드를 식별하고 추출하기 위해 AWS 서비스를 사용해야 합니다. 어떤 솔루션이 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon EC2 인스턴스에서 NLTK(자연어 툴킷) 라이브러리를 텍스트 전처리에 사용합니다. LDA(잠재 디리클레 할당) 알고리즘을 사용하여 관련 키워드를 식별하고 추출합니다.",
      "B": "Amazon SageMaker와 BlazingText 알고리즘을 사용합니다. 어간 추출 및 불용어 제거를 위해 사용자 정의 전처리 단계를 적용합니다. TF-IDF(용어 빈도-역 문서 빈도) 점수를 계산하여 관련 키워드를 식별하고 추출합니다.",
      "C": "Amazon S3 버킷에 문서를 저장합니다. 문서를 처리하고 어간 추출 및 불용어 제거를 위해 Python 스크립트를 실행하는 AWS Lambda 함수를 생성합니다. 이그램 및 삼그램 기법을 사용하여 관련 키워드를 식별하고 추출합니다.",
      "D": "Amazon Comprehend 사용자 정의 엔터티 인식 및 핵심 구문 추출을 사용하여 관련 키워드를 식별하고 추출합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Amazon Comprehend — 자연어 처리 완전 관리형 서비스. 핵심 구문 추출, 엔터티 인식, 감정 분석 등을 사전 학습 모델로 바로 제공\n▸ BlazingText — SageMaker 자체 텍스트 알고리즘. 단어 임베딩, 분류 등 구현 필요\n▸ LDA — 주제 모델링용. 키워드 추출과 직결 아님\n\n【정답 포인트】\n▸ \"의미 있는 고유 키워드 추출\" + \"최소 운영 오버헤드\" 키워드 → Amazon Comprehend 정답. Comprehend의 Key Phrase Extraction은 사전 학습되어 배포 즉시 사용 가능. 모델 훈련, 전처리 파이프라인 구축 불필요. 완전 관리형 서비스로 운영 오버헤드 최소\n\n【오답 체크】\n(A) EC2 + NLTK + LDA — 인스턴스 관리, 라이브러리 설치, LDA 모델 훈련, 하이퍼파라미터 튜닝 모두 필수. 운영 오버헤드 매우 높음. LDA는 주제 추출이지 키워드 추출 아님\n(B) SageMaker BlazingText + 사용자 정의 전처리 — 전처리 파이프라인 구축, 모델 훈련 필요. TF-IDF 계산도 별도 구현. 운영 복잡도 높음\n(C) Lambda + S3 + n-gram — Lambda 함수 작성, 유지보수, 콜드 스타트 고려 필요. NLTK 의존성 관리도 복잡. 대량 문서 처리 시 Lambda 실행 시간 제약 문제\n\n【시험 포인트】\n\"키워드 추출\" + \"최소 오버헤드\" → Amazon Comprehend Key Phrase Extraction. NLP는 항상 Comprehend 같은 완전 관리형 서비스가 우선",
    "en_q": "An ML engineer needs to use AWS services to identify and extract meaningful unique keywords from documents. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use the Natural Language Toolkit (NLTK) library on Amazon EC2 instances for text pre-processing. Use the Latent Dirichlet Allocation (LDA) algorithm to identify and extract relevant keywords.",
      "B": "Use Amazon SageMaker and the BlazingText algorithm. Apply custom pre-processing steps for stemming and removal of stop words. Calculate term frequency-inverse document frequency (TF-IDF) scores to identify and extract relevant keywords.",
      "C": "Store the documents in an Amazon S3 bucket. Create AWS Lambda functions to process the documents and to run Python scripts for stemming and removal of stop words. Use bigram and trigram techniques to identify and extract relevant keywords.",
      "D": "Use Amazon Comprehend custom entity recognition and key phrase extraction to identify and extract relevant keywords."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152229-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 69,
    "question": "한 회사가 ML 엔지니어에게 훈련 데이터에 대한 적절한 액세스를 제공해야 합니다. ML 엔지니어는 자신의 비즈니스 그룹의 훈련 데이터만 액세스할 수 있어야 합니다. ML 엔지니어는 다른 비즈니스 그룹의 훈련 데이터에 액세스하지 못해야 합니다. 회사는 단일 AWS 계정을 사용하며 모든 훈련 데이터를 Amazon S3 버킷에 저장합니다. 모든 ML 모델 훈련은 Amazon SageMaker에서 발생합니다. 어떤 솔루션이 ML 엔지니어에게 적절한 액세스를 제공합니까?",
    "options": {
      "A": "S3 버킷 버전 관리를 활성화합니다.",
      "B": "각 사용자에 대해 S3 Object Lock 설정을 구성합니다.",
      "C": "S3 버킷에 CORS(교차 출처 리소스 공유) 정책을 추가합니다.",
      "D": "IAM 정책을 생성합니다. 정책을 IAM 사용자 또는 IAM 역할에 연결합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ IAM 정책 — AWS 리소스 액세스 제어의 핵심. 특정 S3 버킷/프리픽스에 대한 세밀한 권한 정의 가능\n▸ S3 버킷 버전 관리 — 객체의 이전 버전 관리용. 액세스 제어와 무관\n▸ S3 Object Lock — 데이터 불변성 및 보존 기능. 접근 제어 아님\n\n【정답 포인트】\n▸ \"비즈니스 그룹별 데이터 접근 제한\" + \"단일 AWS 계정\" 키워드 → IAM 정책 정답. IAM 정책으로 각 엔지니어 역할에 특정 S3 경로(예: s3:::bucket/group-a/*) 만 액세스 권한 부여 가능. SageMaker 작업도 IAM 역할로 실행되므로 그룹별 데이터 격리 가능\n\n【오답 체크】\n(A) S3 버전 관리 — 객체 버전 히스토리 관리. 접근 통제 기능 아님. 누구든 모든 버전 액세스 가능\n(B) Object Lock — 특정 기간 객체 삭제/수정 불가 설정. 접근 제어 아님. 모든 사용자가 읽을 수 있음\n(C) CORS 정책 — 브라우저 기반 크로스 도메인 요청 허용용. 사용자 수준 접근 제어 불가. 회사 내부 데이터 격리에 무관\n\n【시험 포인트】\n\"액세스 제어\" + \"그룹별 권한\" → IAM 정책. AWS에서 리소스 접근 권한은 항상 IAM 정책으로 관리",
    "en_q": "A company needs to give its ML engineers appropriate access to training data. The ML engineers must access training data from only their own business group. The ML engineers must not be allowed to access training data from other business groups. The company uses a single AWS account and stores all the training data in Amazon S3 buckets. All ML model training occurs in Amazon SageMaker. Which solution will provide the ML engineers with the appropriate access?",
    "en_opts": {
      "A": "Enable S3 bucket versioning.",
      "B": "Configure S3 Object Lock settings for each user.",
      "C": "Add cross-origin resource sharing (CORS) policies to the S3 buckets.",
      "D": "Create IAM policies. Attach the policies to IAM users or IAM roles."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152230-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 70,
    "question": "한 회사가 예측 분석을 수행할 사용자 정의 ML 모델을 호스팅해야 합니다. 예측 분석은 매일 같은 2시간 기간 동안 예측 가능하고 지속적인 부하로 발생합니다. 분석 기간 중 여러 호출이 빠른 응답을 요구합니다. 회사는 AWS가 기본 인프라 및 모든 자동 스케일링 활동을 관리하도록 해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS Lambda를 사용하여 Amazon SageMaker 배치 변환 작업을 예약합니다.",
      "B": "예약된 스케일링을 사용하도록 Amazon EC2 인스턴스의 Auto Scaling 그룹을 구성합니다.",
      "C": "프로비저닝된 동시성과 함께 Amazon SageMaker Serverless Inference를 사용합니다.",
      "D": "Amazon EC2의 Amazon EKS(Elastic Kubernetes Service) 클러스터에서 포드 자동 스케일링을 사용하여 모델을 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Serverless Inference — 엔드포인트 자동 생성/삭제. 프로비저닝된 동시성으로 미리 준비해둔 리소스 풀 유지. AWS 완전 관리\n▸ Provisioned Concurrency — 서버리스에서 콜드 스타트 방지용. 미리 정해진 동시 요청 수만큼 인스턴스 준비\n\n【정답 포인트】\n▸ \"예측 가능한 2시간 부하\" + \"빠른 응답\" + \"AWS 완전 관리\" 키워드 → SageMaker Serverless with Provisioned Concurrency 정답. 예측 가능한 부하이므로 프로비저닝된 동시성으로 충분한 리소스 미리 할당. 콜드 스타트 없음. 부하 시간 이외 자동 스케일다운으로 비용 절감. AWS가 모든 인프라 관리\n\n【오답 체크】\n(A) Lambda + Batch Transform — Batch Transform은 배치 처리 작업. 실시간 응답 요구하는 분석에 부적합. 지연 높음\n(B) EC2 Auto Scaling + 예약된 스케일링 — 수동으로 시간대별 인스턴스 설정 필요. 피크 시간대 용량 부족 가능. 인프라 관리 오버헤드 높음\n(D) EKS + 포드 오토스케일링 — 클러스터 관리, 네트워킹, 스토리지 설정 필수. AWS 완전 관리 아님. 운영 복잡도 높음\n\n【시험 포인트】\n\"예측 가능한 부하\" + \"빠른 응답\" + \"완전 관리\" → SageMaker Serverless Inference + Provisioned Concurrency. 일반적으로는 Async, 동기 응답이 필요하면 Serverless",
    "en_q": "A company needs to host a custom ML model to perform forecast analysis. The forecast analysis will occur with predictable and sustained load during the same 2-hour period every day. Multiple invocations during the analysis period will require quick responses. The company needs AWS to manage the underlying infrastructure and any auto scaling activities. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Schedule an Amazon SageMaker batch transform job by using AWS Lambda.",
      "B": "Configure an Auto Scaling group of Amazon EC2 instances to use scheduled scaling.",
      "C": "Use Amazon SageMaker Serverless Inference with provisioned concurrency.",
      "D": "Run the model on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster on Amazon EC2 with pod auto scaling."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152231-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 71,
    "question": "한 회사가 감정 분석을 위해 Amazon SageMaker 엔드포인트에 ML 모델을 배포했습니다. ML 엔지니어는 회사 이해관계자에게 모델이 예측을 하는 방식을 설명해야 합니다. 어떤 솔루션이 모델의 예측에 대한 설명을 제공합니까?",
    "options": {
      "A": "배포된 모델에 SageMaker Model Monitor를 사용합니다.",
      "B": "배포된 모델에 SageMaker Clarify를 사용합니다.",
      "C": "Amazon CloudWatch에서 A/B 테스트의 추론 분포를 표시합니다.",
      "D": "섀도우 엔드포인트를 추가합니다. 샘플에 대한 예측 차이를 분석합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SageMaker Clarify — 모델 해석성 및 편향 탐지용. SHAP, LIME 등을 사용해 개별 예측의 피처 기여도 설명\n▸ Model Monitor — 데이터/모델 품질, 드리프트 모니터링. 예측 과정 설명 아님\n▸ SHAP — 예측의 피처별 기여도 계산\n\n【정답 포인트】\n▸ \"모델이 예측을 하는 방식\" + \"이해관계자 설명\" 키워드 → SageMaker Clarify 정답. Clarify는 각 예측에 대해 어떤 피처가 얼마나 영향을 미쳤는지 시각화로 보여줌. SHAP, LIME, 앵커 등 해석성 방법론 지원. 이해관계자에게 모델의 의사결정 로직을 투명하게 설명 가능\n\n【오답 체크】\n(A) Model Monitor — 데이터 품질, 모델 성능 드리프트 감지용. 예측 메커니즘 설명 기능 없음\n(C) CloudWatch A/B 테스팅 분포 — 모델 간 성능 비교용. 개별 예측 설명 안 함\n(D) 섀도우 엔드포인트 — 새 모델과 구 모델 비교용. 예측 설명 기능 없음. 성능 차이만 보여줌\n\n【시험 포인트】\n\"예측 설명\" + \"투명성\" → SageMaker Clarify. 모델 해석성(explainability) 문제는 항상 Clarify",
    "en_q": "An ML engineer has deployed an ML model for sentiment analysis to an Amazon SageMaker endpoint. The ML engineer needs to explain to company stakeholders how the model makes predictions. Which solution will provide an explanation for the model's predictions?",
    "en_opts": {
      "A": "Use SageMaker Model Monitor on the deployed model.",
      "B": "Use SageMaker Clarify on the deployed model.",
      "C": "Show the distribution of inferences from A/В testing in Amazon CloudWatch.",
      "D": "Add a shadow endpoint. Analyze prediction differences on samples."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152232-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 72,
    "question": "ML 엔지니어가 분산 훈련이 필요한 깊은 학습 모델을 훈련하기 위해 Amazon SageMaker를 사용하고 있습니다. 일부 훈련 시도 후 ML 엔지니어는 인스턴스가 예상대로 작동하지 않는다는 것을 발견합니다. ML 엔지니어는 훈련 인스턴스 간의 통신 오버헤드를 식별합니다. ML 엔지니어는 인스턴스 간의 통신 오버헤드를 최소화하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "인스턴스를 동일한 VPC 서브넷에 배치합니다. 인스턴스가 배포된 것과 다른 AWS 리전에 데이터를 저장합니다.",
      "B": "인스턴스를 동일한 VPC 서브넷에 배치하되 다른 가용 영역에 배치합니다. 인스턴스가 배포된 것과 다른 AWS 리전에 데이터를 저장합니다.",
      "C": "인스턴스를 동일한 VPC 서브넷에 배치합니다. 데이터를 인스턴스가 배포된 것과 동일한 AWS 리전 및 가용 영역에 저장합니다.",
      "D": "인스턴스를 동일한 VPC 서브넷에 배치합니다. 데이터를 인스턴스가 배포된 것과 동일한 AWS 리전이지만 다른 가용 영역에 저장합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 배치 병렬화(Batch Parallelism) — 훈련 데이터를 여러 인스턴스에 분산. 인스턴스 간 그래디언트/가중치 동기화 필요\n▸ 통신 오버헤드 — AllReduce 같은 동기화 작업의 네트워크 지연\n▸ 가용 영역(AZ) — AWS 리전 내 물리적으로 분리된 데이터센터\n\n【정답 포인트】\n▸ \"통신 오버헤드 최소화\" + \"분산 훈련\" 키워드 → 인스턴스와 데이터 같은 AZ에 배치. 분산 훈련에서 AllReduce 같은 동기화는 모든 인스턴스 간에 빈번히 일어남. 같은 서브넷(그리고 가장 중요하게 같은 AZ)에 있으면 네트워크 지연 최소. 같은 AZ 내에서는 같은 물리적 데이터센터이므로 네트워크 지연 ms 단위. 다른 AZ는 장거리 통신이므로 지연 증가\n\n【오답 체크】\n(A) 다른 리전 데이터 — 리전 간 데이터 전송은 지연 최악. 훈련마다 데이터 다운로드 필요. 통신 오버헤드 극대화\n(B) 다른 AZ + 다른 리전 — AZ 간 통신도 문제인데 리전 간까지 추가. 최악의 선택\n(D) 다른 AZ 데이터 — 같은 리전이지만 AZ 간 통신은 높은 지연. 데이터 읽기도 AZ 간 이동 필요\n\n【시험 포인트】\n\"분산 훈련\" + \"통신 오버헤드\" → \"같은 서브넷\" + \"같은 AZ\" + \"같은 리전\". 데이터 지역성이 핵심. 분산 훈련은 그래디언트 동기화 빈번 → 네트워크 지연 최소 구조 필수",
    "en_q": "An ML engineer is using Amazon SageMaker to train a deep learning model that requires distributed training. After some training attempts, the ML engineer observes that the instances are not performing as expected. The ML engineer identifies communication overhead between the training instances. What should the ML engineer do to MINIMIZE the communication overhead between the instances?",
    "en_opts": {
      "A": "Place the instances in the same VPC subnet. Store the data in a different AWS Region from where the instances are deployed.",
      "B": "Place the instances in the same VPC subnet but in different Availability Zones. Store the data in a different AWS Region from where the instances are deployed.",
      "C": "Place the instances in the same VPC subnet. Store the data in the same AWS Region and Availability Zone where the instances are deployed.",
      "D": "Place the instances in the same VPC subnet. Store the data in the same AWS Region but in a different Availability Zone from where the instances are deployed."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152233-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 73,
    "question": "한 회사가 온프레미스에서 사용자 정의 Python 스크립트 및 소유 데이터세트를 사용하여 ML 모델을 실행하고 있습니다. 회사는 PyTorch를 사용하고 있습니다. 모델 구축에는 고유한 도메인 지식이 필요합니다. 회사는 모델을 AWS로 이동해야 합니다. 어떤 솔루션이 가장 적은 노력으로 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "SageMaker 기본 제공 알고리즘을 사용하여 소유 데이터세트를 훈련합니다.",
      "B": "SageMaker 스크립트 모드 및 ML 프레임워크용 사전 구성된 이미지를 사용합니다.",
      "C": "사용자 정의 패키지 및 ML 프레임워크 선택을 포함하는 AWS 컨테이너를 빌드합니다.",
      "D": "AWS Marketplace를 통해 유사한 프로덕션 모델을 구매합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SageMaker Script Mode — 기존 Python 스크립트를 SageMaker에서 그대로 실행. PyTorch, TensorFlow 등의 사전 구성 이미지 제공\n▸ 사전 구성 이미지(Pre-built Images) — Docker 컨테이너로 PyTorch 등 프레임워크 설치됨. 스크립트만 추가하면 바로 훈련 가능\n\n【정답 포인트】\n▸ \"사용자 정의 Python 스크립트\" + \"PyTorch\" + \"최소 노력\" 키워드 → SageMaker Script Mode 정답. 온프레미스 PyTorch 스크립트를 거의 수정 없이 SageMaker에서 실행 가능. 사전 구성된 PyTorch 이미지(Conda 환경 포함)가 있어서 Docker 파일 작성, 이미지 빌드 불필요. entry_point로 스크립트 지정하면 바로 훈련 시작\n\n【오답 체크】\n(A) SageMaker 기본 제공 알고리즘 — 회사의 사용자 정의 PyTorch 코드 실행 불가. 알고리즘이 정해져 있음. 도메인 지식 활용 불가\n(C) 사용자 정의 컨테이너 — Dockerfile 작성, 이미지 빌드, ECR 푸시 필요. 복잡도 높음. 사전 구성 이미지 활용하는 것이 더 간편\n(D) Marketplace 모델 구매 — 회사의 고유 도메인 지식 반영 불가. 커스터마이징 불가능\n\n【시험 포인트】\n\"기존 스크립트\" + \"특정 프레임워크\" + \"최소 변경\" → SageMaker Script Mode. 온프레미스 코드를 AWS로 \"들어올리기\"(lift-and-shift) 시나리오는 Script Mode가 최적",
    "en_q": "A company is running ML models on premises by using custom Python scripts and proprietary datasets. The company is using PyTorch. The model building requires unique domain knowledge. The company needs to move the models to AWS. Which solution will meet these requirements with the LEAST effort?",
    "en_opts": {
      "A": "Use SageMaker built-in algorithms to train the proprietary datasets.",
      "B": "Use SageMaker script mode and premade images for ML frameworks.",
      "C": "Build a container on AWS that includes custom packages and a choice of ML frameworks.",
      "D": "Purchase similar production models through AWS Marketplace."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152234-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 74,
    "question": "한 회사가 Amazon SageMaker와 수백만 개의 파일을 사용하여 ML 모델을 훈련하고 있습니다. 각 파일은 크기가 여러 메가바이트입니다. 파일은 Amazon S3 버킷에 저장되어 있습니다. 회사는 훈련 성능을 개선해야 합니다. 어떤 솔루션이 가장 짧은 시간 내에 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "S3 Express One Zone 스토리지를 제공하는 새 S3 버킷으로 데이터를 전송합니다. 새 S3 버킷을 사용하도록 훈련 작업을 조정합니다.",
      "B": "Amazon FSx for Lustre 파일 시스템을 생성합니다. 파일 시스템을 기존 S3 버킷에 링크합니다. 파일 시스템에서 읽도록 훈련 작업을 조정합니다.",
      "C": "Amazon EFS(Elastic File System) 파일 시스템을 생성합니다. 기존 데이터를 파일 시스템으로 전송합니다. 파일 시스템에서 읽도록 훈련 작업을 조정합니다.",
      "D": "Amazon ElastiCache(Redis OSS) 클러스터를 생성합니다. Redis OSS 클러스터를 기존 S3 버킷에 링크합니다. Redis OSS 클러스터에서 훈련 작업으로 데이터를 직접 스트리밍합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ FSx for Lustre — 고성능 병렬 파일 시스템. S3 통합으로 자동 캐싱. 수백만 개 작은 파일 접근 최적화\n▸ S3 Express One Zone — S3의 고성능 옵션이지만 캐싱 아님. 여전히 네트워크 지연 있음\n▸ EFS — NFS 기반 일반 목적 파일 시스템. 대량 소규모 파일 읽기에 최적화 안 됨\n\n【정답 포인트】\n▸ \"수백만 개 파일\" + \"각 몇 MB\" + \"성능 개선\" + \"가장 빠른 시간\" 키워드 → FSx for Lustre 정답. Lustre는 고속 병렬 파일 시스템으로 메타데이터 접근도 빠름. S3 링크 기능으로 S3에서 자동으로 Lustre 캐시로 로드. 훈련 인스턴스들이 로컬 캐시에서 병렬로 고속 읽기. 초기 동기화 후에는 캐시 히트로 매우 빠름. \"가장 짧은 시간\"이라는 조건에 최적\n\n【오답 체크】\n(A) S3 Express One Zone — S3 수준의 성능 개선일 뿐 캐싱 없음. S3에서 읽는 것 자체가 병목. 수백만 파일 메타데이터 요청 지연\n(C) EFS — NFS 기반으로 메타데이터 요청마다 네트워크 왕복. 수백만 소규모 파일은 메타데이터 오버헤드 심각. 병렬 성능도 낮음\n(D) ElastiCache Redis — 메모리 캐시로 용량 제약 심각. 수백만 개 MB급 파일 메모리 로드 불가능. 초기화/캐시 전략도 복잡\n\n【시험 포인트】\n\"수백만 개 파일\" + \"성능\" → FSx for Lustre. S3 + Lustre 통합은 \"지금 당장 훈련 시작\"할 때 최고 성능. EFS는 작은 규모 공유 스토리지용",
    "en_q": "A company is using Amazon SageMaker and millions of files to train an ML model. Each file is several megabytes in size. The files are stored in an Amazon S3 bucket. The company needs to improve training performance. Which solution will meet these requirements in the LEAST amount of time?",
    "en_opts": {
      "A": "Transfer the data to a new S3 bucket that provides S3 Express One Zone storage. Adjust the training job to use the new S3 bucket.",
      "B": "Create an Amazon FSx for Lustre file system. Link the file system to the existing S3 bucket. Adjust the training job to read from the file system.",
      "C": "Create an Amazon Elastic File System (Amazon EFS) file system. Transfer the existing data to the file system. Adjust the training job to read from the file system.",
      "D": "Create an Amazon ElastiCache (Redis OSS) cluster. Link the Redis OSS cluster to the existing S3 bucket. Stream the data from the Redis OSS cluster directly to the training job."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152235-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 75,
    "question": "한 회사가 고객의 테이블형 데이터를 사용하여 ML 모델을 개발하려고 합니다. 데이터는 폐기해서는 안 되는 민감한 정보가 있는 의미 있는 순서 피처를 포함합니다. ML 엔지니어는 다른 팀이 모델을 구축하기 시작하기 전에 민감한 데이터가 마스킹되도록 보장해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "Amazon Macie를 사용하여 민감한 데이터를 분류합니다.",
      "B": "AWS Glue DataBrew를 사용하여 데이터를 준비합니다.",
      "C": "민감한 데이터를 임의 값으로 변경하는 AWS Batch 작업을 실행합니다.",
      "D": "민감한 데이터를 임의 값으로 변경하는 Amazon EMR 작업을 실행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue DataBrew — 비주얼 데이터 준비 서비스. 마스킹, 중복 제거, 정규화 등 레시피 기반 변환. 코드 불필요\n▸ Amazon Macie — 민감한 데이터 탐지 서비스. 분류만 함. 마스킹 기능 없음\n▸ 순서 피처(Ordered Features) — 시계열 같이 순서가 의미 있는 데이터\n\n【정답 포인트】\n▸ \"민감한 정보 마스킹\" + \"순서 피처 보존\" 키워드 → AWS Glue DataBrew 정답. DataBrew는 시각적 인터페이스로 마스킹 레시피 정의 가능. 무작위 대체보다 더 정교한 변환(예: 마스킹 패턴, 토큰화, 범주 유지)으로 순서 정보 유지 가능. 노-코드 도구로 ML 엔지니어도 쉽게 사용 가능. 레시피 재사용 및 자동화 간편\n\n【오답 체크】\n(A) Amazon Macie — 민감한 데이터 탐지(classification) 전문. 마스킹, 변환 기능 없음. 발견만 할 뿐 데이터 처리 불가\n(C) AWS Batch + 무작위 값 — 순서 피처의 시간적 의존성 파괴 가능. \"순서 의미 있는 피처\"라는 조건 무시. 무작위 치환은 통계적 관계 손상\n(D) Amazon EMR + 무작위 값 — 분석용 대규모 병렬 처리 플랫폼. 단순 마스킹에는 과도. 복잡도 높음. 순서 피처 보존 문제도\n(C) 와 동일\n\n【시험 포인트】\n\"민감한 데이터 마스킹\" + \"피처 의미 보존\" → AWS Glue DataBrew. 데이터 준비는 항상 DataBrew 우선. Batch/EMR은 대규모 ETL용",
    "en_q": "A company wants to develop an ML model by using tabular data from its customers. The data contains meaningful ordered features with sensitive information that should not be discarded. An ML engineer must ensure that the sensitive data is masked before another team starts to build the model. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon Made to categorize the sensitive data.",
      "B": "Prepare the data by using AWS Glue DataBrew.",
      "C": "Run an AWS Batch job to change the sensitive data to random values.",
      "D": "Run an Amazon EMR job to change the sensitive data to random values."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152288-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 76,
    "question": "ML 엔지니어가 비동기 방식으로 큰 데이터세트에서 추론을 얻기 위해 ML 모델을 배포해야 합니다. ML 엔지니어는 또한 모델 데이터 품질의 예약된 모니터링을 구현해야 합니다. ML 엔지니어는 데이터 품질 변화가 발생할 때 경고를 받아야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "예약된 AWS Glue 작업을 사용하여 모델을 배포합니다. Amazon CloudWatch 알람을 사용하여 데이터 품질을 모니터링하고 알람을 전송합니다.",
      "B": "예약된 AWS Batch 작업을 사용하여 모델을 배포합니다. AWS CloudTrail을 사용하여 데이터 품질을 모니터링하고 알람을 전송합니다.",
      "C": "Amazon ECS(Elastic Container Service) on AWS Fargate를 사용하여 모델을 배포합니다. Amazon EventBridge를 사용하여 데이터 품질을 모니터링하고 알람을 전송합니다.",
      "D": "Amazon SageMaker 배치 변환을 사용하여 모델을 배포합니다. SageMaker Model Monitor를 사용하여 데이터 품질을 모니터링하고 알람을 전송합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Batch Transform — ML 모델 배치 추론용. S3 입력 → 처리 → S3 출력\n▸ SageMaker Model Monitor — 배포된 모델의 데이터 품질, 모델 성능 드리프트 자동 모니터링. CloudWatch 알람 통합\n▸ AWS Glue — ETL 서비스. 모델 배포 및 추론 용도 아님\n\n【정답 포인트】\n▸ \"비동기 배포\" + \"데이터 품질 모니터링\" + \"드리프트 알람\" 키워드 → SageMaker Batch Transform + Model Monitor 정답. Batch Transform은 대량 비동기 추론 최적화. Model Monitor는 배치 작업 간의 데이터 품질 변화(드리프트)를 자동으로 감지하고 CloudWatch 알람 발송. SageMaker 생태계 내에서 통합된 완벽한 솔루션\n\n【오답 체크】\n(A) AWS Glue + CloudWatch — Glue는 데이터 통합/변환 서비스. 모델 배포/추론 기능 없음. 데이터 품질 모니터링도 Model Monitor 같은 ML 특화 기능 아님\n(B) AWS Batch + CloudTrail — Batch는 배치 작업 관리용이지만 ML 모델 추론에 최적화 아님. CloudTrail은 API 감사 로깅 서비스. 데이터 품질 모니터링 기능 없음\n(C) ECS + Fargate + EventBridge — 컨테이너 오케스트레이션용. 모델 배포는 가능하지만 데이터 품질 모니터링 기능 없음. EventBridge는 이벤트 라우팅 서비스이지 품질 모니터링 아님\n\n【시험 포인트】\n\"배치 추론\" + \"데이터 품질 모니터링\" → SageMaker Batch Transform + Model Monitor 조합. ML 모델 관련 모니터링은 항상 Model Monitor",
    "en_q": "An ML engineer needs to deploy ML models to get inferences from large datasets in an asynchronous manner. The ML engineer also needs to implement scheduled monitoring of the data quality of the models. The ML engineer must receive alerts when changes in data quality occur. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy the models by using scheduled AWS Glue jobs. Use Amazon CloudWatch alarms to monitor the data quality and to send alerts.",
      "B": "Deploy the models by using scheduled AWS Batch jobs. Use AWS CloudTrail to monitor the data quality and to send alerts.",
      "C": "Deploy the models by using Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. Use Amazon EventBridge to monitor the data quality and to send alerts.",
      "D": "Deploy the models by using Amazon SageMaker batch transform. Use SageMaker Model Monitor to monitor the data quality and to send alerts."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152289-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 77,
    "question": "ML 엔지니어가 AWS Glue DataBrew를 사용하여 min-max 정규화를 사용하여 훈련 데이터를 정규화했습니다. ML 엔지니어는 훈련 데이터와 동일한 방식으로 프로덕션 추론 데이터를 정규화하고 정규화된 프로덕션 추론 데이터를 예측을 위해 모델로 전달해야 합니다. 어떤 솔루션이 이 요구 사항을 충족합니까?",
    "options": {
      "A": "잘 알려진 데이터세트의 통계를 적용하여 프로덕션 샘플을 정규화합니다.",
      "B": "훈련 세트의 min-max 정규화 통계를 유지합니다. 이러한 값을 사용하여 프로덕션 샘플을 정규화합니다.",
      "C": "프로덕션 샘플 배치에서 새로운 min-max 정규화 통계 세트를 계산합니다. 이러한 값을 사용하여 모든 프로덕션 샘플을 정규화합니다.",
      "D": "각 프로덕션 샘플에서 새로운 min-max 정규화 통계 세트를 계산합니다. 이러한 값을 사용하여 모든 프로덕션 샘플을 정규화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Min-max 정규화 — (X - min) / (max - min) 공식. min/max 값이 고정되어야 함\n▸ 데이터 누출(Data Leakage) — 훈련과 추론 시 다른 통계 사용하면 모델 성능 저하\n▸ 피처 스케일링 일관성 — 훈련과 추론의 피처 범위가 같아야 함\n\n【정답 포인트】\n▸ \"동일한 방식으로 정규화\" 키워드 → 훈련 통계 재사용 정답. Min-max 정규화는 훈련 데이터에서 계산한 min/max 값을 \"고정 상수\"로 사용해야 함. 프로덕션 데이터도 같은 min/max로 정규화해야 모델이 훈련과 동일한 피처 범위를 받음. 다른 통계 사용하면 모델은 예상하지 못한 범위의 입력 받음 → 성능 저하\n\n【오답 체크】\n(A) 잘 알려진 데이터세트 통계 — 회사 데이터와 무관한 통계 사용. 완전히 잘못된 정규화. 모델 성능 실패\n(C) 프로덕션 배치 통계 계산 — 훈련 때와 다른 min/max 사용. 데이터 누출/분포 변경. 첫 번째 배치 샘플은 범위 0-1이 아니면서 시작하므로 모델 혼동\n(D) 각 샘플마다 통계 계산 — 한 샘플의 min/max만으로 정규화하면 항상 0-1 범위 아님(실제로 0에서 자기 자신이 되는 버그). 비현실적이고 의미 없음\n\n【시험 포인트】\n\"정규화 일관성\" → \"훈련 통계 저장\" → \"추론 시 적용\". ML 파이프라인의 가장 기본 원칙. 훈련과 추론의 전처리는 항상 동일",
    "en_q": "An ML engineer normalized training data by using min-max normalization in AWS Glue DataBrew. The ML engineer must normalize the production inference data in the same way as the training data before passing the production inference data to the model for predictions. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Apply statistics from a well-known dataset to normalize the production samples.",
      "B": "Keep the min-max normalization statistics from the training set. Use these values to normalize the production samples.",
      "C": "Calculate a new set of min-max normalization statistics from a batch of production samples. Use these values to normalize all the production samples.",
      "D": "Calculate a new set of min-max normalization statistics from each production sample. Use these values to normalize all the production samples."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152292-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 78,
    "question": "한 회사가 Amazon SageMaker를 사용하여 이미지를 기반으로 분류 등급을 매기려고 합니다. 회사는 Amazon FSx for NetApp ONTAP 시스템 가상 머신(SVM)에 저장된 6TB의 훈련 데이터를 보유하고 있습니다. SVM은 SageMaker와 동일한 VPC에 있습니다. ML 엔지니어는 SageMaker 환경에서 ML 모델이 훈련 데이터에 액세스할 수 있도록 해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "FSx for ONTAP 파일 시스템을 SageMaker 인스턴스에 볼륨으로 마운트합니다.",
      "B": "Amazon S3 버킷을 생성합니다. Mountpoint for Amazon S3를 사용하여 S3 버킷을 FSx for ONTAP 파일 시스템에 링크합니다.",
      "C": "SageMaker Data Wrangler에서 FSx for ONTAP 파일 시스템으로 카탈로그 연결을 생성합니다.",
      "D": "SageMaker Data Wrangler에서 FSx for ONTAP 파일 시스템으로 직접 연결을 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ FSx for NetApp ONTAP — 엔터프라이즈급 NFS/SMB 파일 시스템. SageMaker와 같은 VPC에서 네이티브 마운트 가능\n▸ NFS 마운트 — 파일 시스템을 인스턴스에 직접 부착. 가장 빠른 액세스\n▸ Data Wrangler — 시각적 데이터 준비 도구. 실시간 변환 탐색용\n\n【정답 포인트】\n▸ \"6TB 훈련 데이터\" + \"같은 VPC\" + \"SageMaker 인스턴스 액세스\" 키워드 → FSx for ONTAP 직접 마운트 정답. 같은 VPC에 있으므로 NFS/SMB로 직접 마운트 가능. 마운트 후 훈련 스크립트에서 로컬 파일 경로처럼 액세스. 대용량 데이터(6TB)도 고속 스루풋으로 읽기 가능. 데이터 복사 불필요\n\n【오답 체크】\n(A) ... (정답)\n(B) S3 Mountpoint + FSx — 역방향. FSx에서 S3로 가는 게 아니라 S3에서 FSx로 가야 함. 논리 반전. 그리고 6TB S3 복사 필요 → 시간 낭비\n(C) Data Wrangler 카탈로그 연결 — Data Wrangler는 데이터 탐색/시각화용. \"카탈로그 연결\"은 메타데이터 연결이지 훈련 작업의 데이터 액세스 경로 아님. 훈련 스크립트에서 실제 데이터 읽을 때는 작동 불가\n(D) Data Wrangler 직접 연결 —\n(C) 와 유사. Data Wrangler는 대화형 준비 도구이지 배치 훈련 데이터 공급 메커니즘 아님\n\n【시험 포인트】\n\"FSx\" + \"같은 VPC\" + \"훈련 데이터 액세스\" → NFS 마운트. AWS 네이티브 파일 시스템은 항상 직접 마운트",
    "en_q": "A company is planning to use Amazon SageMaker to make classification ratings that are based on images. The company has 6 ТВ of training data that is stored on an Amazon FSx for NetApp ONTAP system virtual machine (SVM). The SVM is in the same VPC as SageMaker. An ML engineer must make the training data accessible for ML models that are in the SageMaker environment. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Mount the FSx for ONTAP file system as a volume to the SageMaker Instance.",
      "B": "Create an Amazon S3 bucket. Use Mountpoint for Amazon S3 to link the S3 bucket to the FSx for ONTAP file system.",
      "C": "Create a catalog connection from SageMaker Data Wrangler to the FSx for ONTAP file system.",
      "D": "Create a direct connection from SageMaker Data Wrangler to the FSx for ONTAP file system."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152294-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 79,
    "question": "한 회사가 정기적으로 ML 모델의 공급업체로부터 새로운 훈련 데이터를 받습니다. 공급업체는 정제되고 준비된 데이터를 회사의 Amazon S3 버킷에 3-4일마다 전달합니다. 회사는 모델을 재훈련하는 Amazon SageMaker 파이프라인을 가지고 있습니다. ML 엔지니어는 새 데이터가 S3 버킷에 업로드될 때 파이프라인을 실행하는 솔루션을 구현해야 합니다. 어떤 솔루션이 가장 적은 운영 노력으로 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "S3 수명 주기 규칙을 생성하여 데이터를 SageMaker 훈련 인스턴스로 전송하고 훈련을 시작합니다.",
      "B": "S3 버킷을 스캔하는 AWS Lambda 함수를 생성합니다. 새 데이터가 업로드될 때 파이프라인을 시작하도록 Lambda 함수를 프로그래밍합니다.",
      "C": "S3 업로드와 일치하는 이벤트 패턴이 있는 Amazon EventBridge 규칙을 생성합니다. 파이프라인을 규칙의 대상으로 구성합니다.",
      "D": "Apache Airflow용 Amazon Managed Workflows(Amazon MWAA)를 사용하여 새 데이터가 업로드될 때 파이프라인을 오케스트레이트합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon EventBridge — 서버리스 이벤트 버스. S3 PutObject 이벤트 감지 → SageMaker 파이프라인 자동 트리거\n▸ S3 Event Notifications — S3 이벤트를 EventBridge로 라우팅. 네이티브 통합\n▸ SageMaker Pipelines — 재현 가능한 ML 워크플로우\n\n【정답 포인트】\n▸ \"새 데이터 업로드 감지\" + \"자동 파이프라인 실행\" + \"최소 운영 노력\" 키워드 → Amazon EventBridge 정답. EventBridge는 S3 PutObject 이벤트를 네이티브로 감지 가능. 파이프라인을 대상으로 직접 설정하면 조건 일치 시 자동 트리거. 서버리스이므로 관리할 인프라 없음. Lambda 함수 작성/관리 불필요\n\n【오답 체크】\n(A) S3 Lifecycle — 데이터 티어링, 삭제 등 수명 주기 정책용. 파이프라인 트리거 기능 없음. 훈련 시작도 불가능\n(B) Lambda 폴링 — Lambda 함수 작성, 배포, 트리거 설정, 오류 처리 모두 개발자 책임. 운영 노력 높음. 폴링 간격 설정도 필요\n(D) Amazon MWAA — Apache Airflow 기반 복잡한 DAG 오케스트레이션. 수동으로 Airflow 코드 작성 필요. 단순 이벤트 트리거에는 오버엔지니어링\n\n【시험 포인트】\n\"S3 이벤트\" + \"자동 트리거\" + \"최소 관리\" → Amazon EventBridge. 이벤트 기반 자동화는 항상 EventBridge 우선",
    "en_q": "A company regularly receives new training data from the vendor of an ML model. The vendor delivers cleaned and prepared data to the company's Amazon S3 bucket every 3-4 days. The company has an Amazon SageMaker pipeline to retrain the model. An ML engineer needs to implement a solution to run the pipeline when new data is uploaded to the S3 bucket. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Create an S3 Lifecycle rule to transfer the data to the SageMaker training instance and to initiate training.",
      "B": "Create an AWS Lambda function that scans the S3 bucket. Program the Lambda function to initiate the pipeline when new data is uploaded.",
      "C": "Create an Amazon EventBridge rule that has an event pattern that matches the S3 upload. Configure the pipeline as the target of the rule.",
      "D": "Use Amazon Managed Workflows for Apache Airflow (Amazon MWAA) to orchestrate the pipeline when new data is uploaded."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152295-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 80,
    "question": "ML 엔지니어가 Amazon SageMaker XGBoost 알고리즘을 사용하여 사기 탐지 모델을 개발하고 있습니다. 모델은 거래를 사기 또는 정상으로 분류합니다. 테스트 중에 모델은 훈련 데이터세트에서 사기를 식별하는 데 탁월합니다. 그러나 모델은 새로운 미 확인 거래에서 사기를 식별하는 데 비효율적입니다. ML 엔지니어는 새로운 거래에 대한 사기 탐지를 개선하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "학습률을 높입니다.",
      "B": "훈련 데이터세트에서 일부 관련 없는 피처를 제거합니다.",
      "C": "max_depth 하이퍼파라미터의 값을 증가시킵니다.",
      "D": "max_depth 하이퍼파라미터의 값을 감소시킵니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 과적합(Overfitting) — 훈련 데이터에 과도하게 맞춤. 새 데이터에서 성능 저하\n▸ max_depth — XGBoost 나무의 최대 깊이. 작을수록 단순 모델, 클수록 복잡 모델\n▸ 정규화(Regularization) — 과적합 방지용 하이퍼파라미터\n\n【정답 포인트】\n▸ \"훈련 데이터에서 높은 성능\" + \"미확인 거래에서 낮은 성능\" = 과적합 신호 키워드 → max_depth 감소 정답. XGBoost의 max_depth를 줄이면 트리의 복잡도 감소. 훈련 데이터의 노이즈까지 학습하는 것 방지. 더 단순한 의사결정 규칙으로 일반화 성능 향상. 새로운 거래에서도 사기 패턴을 더 잘 포착\n\n【오답 체크】\n(A) 학습률 증가 — 학습률은 수렴 속도 관련. 과적합과 무관. 오히려 높은 학습률은 진동으로 수렴 방해 가능\n(B) 관련 없는 피처 제거 — 현재 훈련 성능이 좋으므로 피처는 충분히 유용. 문제는 과적합이지 피처 부족 아님. \"관련 없는\" 판단도 주관적\n(C) max_depth 증가 — 나무 깊이 증가 → 모델 더 복잡해짐 → 과적합 악화. 정반대 처방. 훈련 성능은 더 높아질 수 있지만 미확인 데이터 성능 악화\n\n【시험 포인트】\n\"훈련 vs 미확인 성능 차이\" = 과적합 → 정규화 파라미터 조정(max_depth 감소). XGBoost에서 과적합 완화는 max_depth, min_child_weight, lambda(L2 규칙화) 감소",
    "en_q": "An ML engineer is developing a fraud detection model by using the Amazon SageMaker XGBoost algorithm. The model classifies transactions as either fraudulent or legitimate. During testing, the model excels at identifying fraud in the training dataset. However, the model is inefficient at identifying fraud in new and unseen transactions. What should the ML engineer do to improve the fraud detection for new transactions?",
    "en_opts": {
      "A": "Increase the learning rate.",
      "B": "Remove some irrelevant features from the training dataset.",
      "C": "Increase the value of the max_depth hyperparameter.",
      "D": "Decrease the value of the max_depth hyperparameter."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152298-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 81,
    "question": "한 회사가 프로덕션에서 이진 분류 모델을 보유하고 있습니다. ML 엔지니어는 모델의 새 버전을 개발해야 합니다. 새 모델 버전은 양성 레이블과 음성 레이블의 올바른 예측을 최대화해야 합니다. ML 엔지니어는 이러한 요구 사항을 충족하도록 모델을 재조정하기 위해 메트릭을 사용해야 합니다. ML 엔지니어는 모델 재조정에 어떤 메트릭을 사용해야 합니까?",
    "options": {
      "A": "정확도(Accuracy)",
      "B": "정밀도(Precision)",
      "C": "재현율(Recall)",
      "D": "특이성(Specificity)"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Accuracy — (TP + TN) / (TP + FN + FP + TN) = 전체 정답률. 양성과 음성 모두 맞춘 비율\n▸ Precision — TP / (TP + FP) = 양성 예측 중 정답 비율. 거짓 양성(False Alarm) 줄이기\n▸ Recall — TP / (TP + FN) = 실제 양성 중 찾은 비율. 거짓 음성(누락) 줄이기\n▸ Specificity — TN / (TN + FP) = 실제 음성 중 맞춘 비율. 음성 클래스 정확도\n\n【정답 포인트】\n▸ \"양성 예측 최대화\" + \"음성 예측 최대화\" = \"양성과 음성 모두 균형\" 키워드 → Accuracy 정답. 이진 분류에서 양성 레이블 정확도와 음성 레이블 정확도를 모두 고려해야 함. Accuracy는 유일하게 TP와 TN을 동등하게 취급하는 메트릭. (TP + TN) / 전체 정답 = 양성도 맞고 음성도 맞은 비율\n\n【오답 체크】\n(A) ... (정답)\n(B) Precision — 양성 예측의 정확도만 봄. 음성 클래스 성능 무시. \"음성 레이블 최대화\" 미충족\n(C) Recall — 실제 양성을 모두 찾으려 함. 거짓 양성 허용. 음성 정확도 고려 안 함\n(D) Specificity — 음성 클래스만 잘 맞춤. 양성 클래스 무시. \"양성 레이블 최대화\" 미충족\n\n【시험 포인트】\n\"양쪽 클래스 균형\" → Accuracy. \"한쪽만 중시\" → Precision/Recall/Specificity 중 선택",
    "en_q": "A company has a binary classification model in production. An ML engineer needs to develop a new version of the model. The new model version must maximize correct predictions of positive labels and negative labels. The ML engineer must use a metric to recalibrate the model to meet these requirements. Which metric should the ML engineer use for the model recalibration?",
    "en_opts": {
      "A": "Accuracy",
      "B": "Precision",
      "C": "Recall",
      "D": "Specificity"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152299-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 82,
    "question": "한 회사가 Amazon SageMaker를 사용하여 ML 모델을 생성하고 있습니다. 회사의 데이터 과학자들은 오케스트레이션하는 ML 워크플로우에 대한 세밀한 제어가 필요합니다. 데이터 과학자들은 또한 SageMaker 작업 및 워크플로우를 방향 비순환 그래프(DAG)로 시각화할 수 있어야 합니다. 데이터 과학자들은 모델 검색 실험의 실행 이력을 유지하고 감사 및 규정 준수 검증을 위한 모델 거버넌스를 설정해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "AWS CodePipeline과 SageMaker Studio의 통합을 사용하여 전체 ML 워크플로우를 관리합니다. 실험의 실행 이력과 감사 및 규정 준수 검증을 위해 SageMaker ML Lineage Tracking을 사용합니다.",
      "B": "AWS CodePipeline과 SageMaker Experiments의 통합을 사용하여 전체 ML 워크플로우를 관리합니다. 실험의 실행 이력과 감사 및 규정 준수 검증을 위해 SageMaker Experiments를 사용합니다.",
      "C": "SageMaker Pipelines과 SageMaker Studio의 통합을 사용하여 전체 ML 워크플로우를 관리합니다. 실험의 실행 이력과 감사 및 규정 준수 검증을 위해 SageMaker ML Lineage Tracking을 사용합니다.",
      "D": "SageMaker Pipelines과 SageMaker Experiments의 통합을 사용하여 전체 ML 워크플로우를 관리합니다. 실험의 실행 이력과 감사 및 규정 준수 검증을 위해 SageMaker Experiments를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Pipelines — DAG 기반 ML 워크플로우 오케스트레이션. 단계별 재현 가능한 파이프라인\n▸ SageMaker ML Lineage Tracking — 학습 데이터부터 모델까지 전체 계보 추적. 감사/규정 준수 지원\n▸ SageMaker Experiments — 실험 추적용. 파라미터/메트릭 비교\n▸ AWS CodePipeline — CI/CD 파이프라인. ML 워크플로우 오케스트레이션용 아님\n\n【정답 포인트】\n▸ \"DAG 시각화\" + \"워크플로우 세밀한 제어\" + \"실행 이력\" + \"감사/규정 준수\" 키워드 → SageMaker Pipelines + ML Lineage Tracking 정답. Pipelines은 DAG 기반으로 워크플로우를 시각적으로 구성 가능. 각 단계(전처리, 훈련, 평가 등) 정의. ML Lineage Tracking은 데이터에서부터 최종 모델까지 모든 자산의 계보 기록. 감사 추적과 규정 준수 입증에 필수\n\n【오답 체크】\n(A) CodePipeline + ML Lineage Tracking — CodePipeline은 CI/CD용. ML 워크플로우 오케스트레이션에 부적합. 파이프라인 단계 정의도 복잡\n(B) CodePipeline + Experiments — 문제는\n(A) 와 동일. CodePipeline이 ML 워크플로우 오케스트레이션 도구 아님\n(C) ... (정답)\n(D) Pipelines + Experiments — Experiments는 하이퍼파라미터 실험 추적용. Lineage Tracking처럼 전체 계보와 감사 추적 기능은 없음\n\n【시험 포인트】\n\"DAG\" + \"감사 추적\" → SageMaker Pipelines + ML Lineage Tracking. ML 거버넌스/규정 준수는 항상 Lineage Tracking",
    "en_q": "A company is using Amazon SageMaker to create ML models. The company's data scientists need fine-grained control of the ML workflows that they orchestrate. The data scientists also need the ability to visualize SageMaker jobs and workflows as a directed acyclic graph (DAG). The data scientists must keep a running history of model discovery experiments and must establish model governance for auditing and compliance verifications. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS CodePipeline and its integration with SageMaker Studio to manage the entire ML workflows. Use SageMaker ML Lineage Tracking for the running history of experiments and for auditing and compliance verifications.",
      "B": "Use AWS CodePipeline and its integration with SageMaker Experiments to manage the entire ML workflows. Use SageMaker Experiments for the running history of experiments and for auditing and compliance verifications.",
      "C": "Use SageMaker Pipelines and its integration with SageMaker Studio to manage the entire ML workflows. Use SageMaker ML Lineage Tracking for the running history of experiments and for auditing and compliance verifications.",
      "D": "Use SageMaker Pipelines and its integration with SageMaker Experiments to manage the entire ML workflows. Use SageMaker Experiments for the running history of experiments and for auditing and compliance verifications."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152095-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 83,
    "question": "한 회사가 컨테이너화된 ML 애플리케이션의 비용을 줄이려고 합니다. 애플리케이션은 Amazon EC2 인스턴스, AWS Lambda 함수 및 Amazon ECS(Elastic Container Service) 클러스터에서 실행되는 ML 모델을 사용합니다. EC2 워크로드 및 ECS 워크로드는 예측 및 아티팩트를 저장하기 위해 Amazon EBS(Elastic Block Store) 볼륨을 사용합니다. ML 엔지니어는 비효율적으로 사용되고 있는 리소스를 식별해야 합니다. ML 엔지니어는 또한 이러한 리소스의 비용을 줄이기 위한 권장 사항을 생성해야 합니다. 어떤 솔루션이 가장 적은 개발 노력으로 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "각 인스턴스의 메모리 및 컴퓨팅 사용량을 평가하는 코드를 생성합니다.",
      "B": "리소스에 비용 할당 태그를 추가합니다. AWS Billing and Cost Management에서 태그를 활성화합니다.",
      "C": "CloudTrail 이벤트 이력에서 리소스 생성을 확인합니다.",
      "D": "AWS Compute Optimizer를 실행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Compute Optimizer — 기계 학습으로 EC2, Lambda, EBS 사용 분석. 우버프로비저닝 인스턴스 식별 → 비용 절감 권장\n▸ CloudTrail — API 감사 로깅. 비용 최적화와 무관\n▸ 비용 할당 태그 — 비용 분류/추적용. 최적화 권장 안 함\n\n【정답 포인트】\n▸ \"비효율적 리소스 식별\" + \"비용 감소 권장\" + \"최소 개발 노력\" 키워드 → AWS Compute Optimizer 정답. Compute Optimizer는 모든 EC2, Lambda, EBS 메트릭을 자동 분석. 언더유틸라이제이션된 인스턴스, 잘못 구성된 Lambda, 불필요한 EBS 볼륨 식별. 해당 리소스별 구체적인 권장사항(예: t3.large → t3.small로 다운사이징 시 연 X달러 절감) 제공. 개발 0, AWS 완전 관리형 서비스\n\n【오답 체크】\n(A) 커스텀 코드 작성 — 메모리/CPU 메트릭 수집, 임계값 설정, 분석 로직 모두 개발자 책임. 개발 노력 매우 높음. 복잡도 관리도 필요\n(B) 비용 할당 태그 — 비용을 부서/프로젝트별로 분류만 함. 최적화 권장 기능 없음. 낭비 리소스 식별 불가\n(C) CloudTrail — 리소스 생성 이력만 기록. 사용 패턴 분석 불가. 최적화와 무관\n\n【시험 포인트】\n\"비용 최적화\" + \"권장사항\" → AWS Compute Optimizer. 리소스 낭비 식별 → 항상 Compute Optimizer 우선",
    "en_q": "A company wants to reduce the cost of its containerized ML applications. The applications use ML models that run on Amazon EC2 instances, AWS Lambda functions, and an Amazon Elastic Container Service (Amazon ECS) cluster. The EC2 workloads and ECS workloads use Amazon Elastic Block Store (Amazon EBS) volumes to save predictions and artifacts. An ML engineer must identify resources that are being used inefficiently. The ML engineer also must generate recommendations to reduce the cost of these resources. Which solution will meet these requirements with the LEAST development effort?",
    "en_opts": {
      "A": "Create code to evaluate each instance's memory and compute usage.",
      "B": "Add cost allocation tags to the resources. Activate the tags in AWS Billing and Cost Management.",
      "C": "Check AWS CloudTrail event history for the creation of the resources.",
      "D": "Run AWS Compute Optimizer."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152305-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 84,
    "question": "한 회사가 모든 회사의 ML 모델을 위한 중앙 카탈로그를 생성해야 합니다. 모델은 처음 개발된 AWS 계정에 있습니다. 모델은 Amazon ECR(Elastic Container Registry) 리포지토리에서 호스팅됩니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
    "options": {
      "A": "각 기존 ECR 리포지토리에 대해 ECR 교차 계정 복제를 구성합니다. 각 모델이 각 AWS 계정에서 표시되도록 합니다.",
      "B": "중앙 카탈로그로 새 ECR 리포지토리가 있는 새 AWS 계정을 생성합니다. 초기 ECR 리포지토리와 중앙 카탈로그 간의 ECR 교차 계정 복제를 구성합니다.",
      "C": "Amazon ECR에 호스팅된 모델에 대한 모델 그룹을 생성하기 위해 Amazon SageMaker Model Registry를 사용합니다. 새 AWS 계정을 생성합니다. 새 계정에서 SageMaker Model Registry를 중앙 카탈로그로 사용합니다. 초기 AWS 계정의 각 모델 그룹에 교차 계정 리소스 정책을 연결합니다.",
      "D": "AWS Glue Data Catalog를 사용하여 모델을 저장합니다. AWS Glue 크롤러를 실행하여 ECR 리포지토리에서 Data Catalog로 모델을 마이그레이션합니다. Data Catalog에 대한 교차 계정 액세스를 구성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Registry — ML 모델 버전 관리, 메타데이터, 승인 워크플로우 지원. 프로덕션 거버넌스용\n▸ ECR 교차 계정 복제 — 이미지 복사만 함. 모델 메타데이터, 버전 관리 기능 없음\n▸ AWS Glue Data Catalog — 데이터셋 메타데이터 저장용. ML 모델 버전 관리 미지원\n\n【정답 포인트】\n▸ \"중앙 카탈로그\" + \"모든 모델\" + \"여러 계정\" + \"거버넌스\" 키워드 → SageMaker Model Registry 정답. Model Registry는 모델 메타데이터(버전, 승인 상태, 성능 지표)를 중앙 집중식으로 관리. ECR에 호스팅된 모델도 Model Registry의 모델 그룹으로 등록 가능. 교차 계정 리소스 정책으로 다른 계정의 모델 그룹을 중앙 계정에서 카탈로그화. 단순 이미지 저장소(ECR)를 넘어 ML 모델 거버넌스(승인, 추적, 감사) 지원\n\n【오답 체크】\n(A) ECR 교차 계정 복제 — 이미지만 복사. 모델 메타데이터, 버전 정보, 승인 워크플로우 없음. \"카탈로그\" 기능 부족\n(B) 새 ECR 리포지토리 + 교차 계정 복제 — ECR은 컨테이너 이미지 저장소. 모델 거버넌스 기능 없음. 버전, 승인 상태 추적 불가\n(D) AWS Glue Data Catalog — 데이터셋 메타데이터용. ML 모델의 버전 관리, 승인 워크플로우 미지원. ECR 크롤러도 존재하지 않음\n\n【시험 포인트】\n\"모델 카탈로그\" + \"거버넌스\" + \"다중 계정\" → SageMaker Model Registry. 모델 메타데이터 관리는 항상 Model Registry",
    "en_q": "A company needs to create a central catalog for all the company's ML models. The models are in AWS accounts where the company developed the models initially. The models are hosted in Amazon Elastic Container Registry (Amazon ECR) repositories. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure ECR cross-account replication for each existing ECR repository. Ensure that each model is visible in each AWS account.",
      "B": "Create a new AWS account with a new ECR repository as the central catalog. Configure ECR cross-account replication between the initial ECR repositories and the central catalog.",
      "C": "Use the Amazon SageMaker Model Registry to create a model group for models hosted in Amazon ECR. Create a new AWS account. In the new account, use the SageMaker Model Registry as the central catalog. Attach a cross-account resource policy to each model group in the initial AWS accounts.",
      "D": "Use an AWS Glue Data Catalog to store the models. Run an AWS Glue crawler to migrate the models from the ECR repositories to the Data Catalog. Configure cross-account access to the Data Catalog."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152097-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 85,
    "question": "한 회사가 새로운 ML 모델을 개발했습니다. 이 회사는 모델을 프로덕션에 완전히 배포하기 전에 트래픽의 10%에서 온라인 모델 검증을 수행해야 합니다. 회사는 Application Load Balancer(ALB) 뒤의 Amazon SageMaker 엔드포인트를 사용하여 모델을 제공합니다. 운영 오버헤드를 최소화하면서 필요한 온라인 검증을 설정하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Production variants를 사용하여 기존 SageMaker 엔드포인트에 새 모델을 추가합니다. 새 모델의 variant weight를 0.1로 설정합니다. Amazon CloudWatch를 사용하여 호출 수를 모니터링합니다.",
      "B": "Production variants를 사용하여 기존 SageMaker 엔드포인트에 새 모델을 추가합니다. 새 모델의 variant weight를 1로 설정합니다. Amazon CloudWatch를 사용하여 호출 수를 모니터링합니다.",
      "C": "새로운 SageMaker 엔드포인트를 생성합니다. Production variants를 사용하여 새로운 엔드포인트에 새 모델을 추가합니다. Amazon CloudWatch를 사용하여 호출 수를 모니터링합니다.",
      "D": "ALB를 구성하여 트래픽의 10%를 기존 SageMaker 엔드포인트의 새 모델로 라우팅합니다. AWS CloudTrail을 사용하여 호출 수를 모니터링합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Production variants — SageMaker 엔드포인트에서 여러 모델 버전을 동시에 호스팅할 수 있는 기능\n▸ Variant weight — 각 variant에 할당할 트래픽의 비율\n\n【정답 포인트】\n▸ 10% 트래픽 라우팅 → variant weight 0.1 설정이 정확한 트래픽 분배\n▸ Production variants는 단일 엔드포인트에서 여러 모델 버전을 관리할 수 있으므로 새 엔드포인트 생성 불필요\n▸ CloudWatch는 SageMaker 메트릭 모니터링의 표준 서비스\n\n【오답 체크】\n(B) weight 1.0은 100% 트래픽을 의미하므로 10% 검증 요구사항을 충족하지 못함\n(C) 새로운 엔드포인트를 생성하면 운영 복잡도 증가 및 ALB 설정 변경 필요\n(D) ALB는 SageMaker 엔드포인트의 내부 트래픽 분배를 제어할 수 없으며, CloudTrail은 모니터링 목적이 아닌 감사 로깅 서비스\n\n【시험 포인트】\n▸ 트래픽 10% → variant weight 0.1\n▸ 최소 운영 오버헤드 → 기존 엔드포인트 활용\n▸ SageMaker production variants = 단일 엔드포인트에서의 A/B 테스트 표준 패턴",
    "en_q": "A company has developed a new ML model. The company requires online model validation on 10% of the traffic before the company fully releases the model in production. The company uses an Amazon SageMaker endpoint behind an Application Load Balancer (ALB) to serve the model. Which solution will set up the required online validation with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use production variants to add the new model to the existing SageMaker endpoint. Set the variant weight to 0.1 for the new model. Monitor the number of invocations by using Amazon CloudWatch.",
      "B": "Use production variants to add the new model to the existing SageMaker endpoint. Set the variant weight to 1 for the new model. Monitor the number of invocations by using Amazon CloudWatch.",
      "C": "Create a new SageMaker endpoint. Use production variants to add the new model to the new endpoint. Monitor the number of invocations by using Amazon CloudWatch.",
      "D": "Configure the ALB to route 10% of the traffic to the new model at the existing SageMaker endpoint. Monitor the number of invocations by using AWS CloudTrail."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152310-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 86,
    "question": "한 회사는 ML 모델을 개발해야 합니다. 이 모델은 이미지에서 항목을 식별하고 항목의 위치를 제공해야 합니다. 이러한 요구사항을 충족하는 Amazon SageMaker 알고리즘은 무엇입니까?",
    "options": {
      "A": "Image classification",
      "B": "XGBoost",
      "C": "Object detection",
      "D": "K-nearest neighbors (k-NN)"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Image classification — 이미지를 분류하여 객체가 무엇인지만 식별 (위치 정보 없음)\n▸ Object detection — 이미지에서 객체를 식별하고 경계 상자로 위치를 표시\n\n【정답 포인트】\n▸ \"항목을 식별\" + \"위치를 제공\" → 경계 상자(bounding box) 필요\n▸ Object detection은 이미지 내 객체의 위치(좌표)를 반환하는 알고리즘\n▸ YOLO, Faster R-CNN 등이 대표적인 object detection 알고리즘\n\n【오답 체크】\n(A) Image classification은 이미지 전체를 한 카테고리로 분류하기만 하므로 위치 정보를 제공하지 않음\n(B) XGBoost는 표 형식 데이터 분류/회귀용 트리 기반 알고리즘이며 이미지 처리 불가\n(D) k-NN은 분류 알고리즘이지만 이미지에서 객체 위치를 찾을 수 없음\n\n【시험 포인트】\n▸ 객체 \"위치\" 요구 → Object detection\n▸ 위치 없이 분류만 → Image classification\n▸ 구조화 데이터용 → XGBoost, k-NN",
    "en_q": "A company needs to develop an ML model. The model must identify an item in an image and must provide the location of the item. Which Amazon SageMaker algorithm will meet these requirements?",
    "en_opts": {
      "A": "Image classification",
      "B": "XGBoost",
      "C": "Object detection",
      "D": "K-nearest neighbors (k-NN)"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168847-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 87,
    "question": "한 회사는 여러 출처의 파일이 포함된 Amazon S3 버킷을 가지고 있습니다. S3 버킷의 동일한 폴더에는 CSV, JSON, XLSX 및 Apache Parquet 파일이 포함되어 있습니다. ML 엔지니어는 AWS Glue DataBrew를 사용하여 데이터를 처리하는 솔루션을 구현해야 합니다. ML 엔지니어는 최종 출력을 Amazon S3에 저장하여 AWS Glue가 향후 출력을 사용할 수 있도록 해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "DataBrew를 사용하여 기존 S3 폴더를 처리합니다. Apache Parquet 형식으로 출력을 저장합니다.",
      "B": "DataBrew를 사용하여 기존 S3 폴더를 처리합니다. AWS Glue Parquet 형식으로 출력을 저장합니다.",
      "C": "파일 유형별로 데이터를 다른 폴더로 분리합니다. DataBrew를 사용하여 각 폴더를 개별적으로 처리합니다. Apache Parquet 형식으로 출력을 저장합니다.",
      "D": "파일 유형별로 데이터를 다른 폴더로 분리합니다. DataBrew를 사용하여 각 폴더를 개별적으로 처리합니다. AWS Glue Parquet 형식으로 출력을 저장합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS Glue DataBrew — 이기종 데이터 형식을 처리하기 위한 데이터 정제 서비스\n▸ Apache Parquet — AWS Glue가 기본적으로 지원하는 표준 열 지향 형식\n\n【정답 포인트】\n▸ CSV, JSON, XLSX, Parquet이 섞여 있음 → DataBrew는 단일 형식만 효율적으로 처리\n▸ 파일 유형별 폴더 분리 필수 → 각 형식을 개별 처리\n▸ Apache Parquet은 Glue의 표준 출력 형식이므로 AWS Glue Parquet 같은 독점 형식 불필요\n\n【오답 체크】\n(A) 다양한 파일 형식을 섞여 있는 상태로 처리하면 데이터 손상 위험 또는 처리 실패 가능\n(B) AWS Glue Parquet은 실제 형식이 아니며, 표준은 Apache Parquet만 존재\n(D) AWS Glue Parquet이라는 형식은 존재하지 않으므로 Glue가 인식 불가\n\n【시험 포인트】\n▸ 이기종 형식 → 파일 유형별 분리\n▸ DataBrew 호환성 → 단일 형식 폴더\n▸ Glue 호환 출력 → Apache Parquet (표준)",
    "en_q": "A company has an Amazon S3 bucket that contains 1 TB of files from different sources. The S3 bucket contains the following file types in the same S3 folder: CSV, JSON, XLSX, and Apache Parquet. An ML engineer must implement a solution that uses AWS Glue DataBrew to process the data. The ML engineer also must store the final output in Amazon S3 so that AWS Glue can consume the output in the future. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use DataBrew to process the existing S3 folder. Store the output in Apache Parquet format.",
      "B": "Use DataBrew to process the existing S3 folder. Store the output in AWS Glue Parquet format.",
      "C": "Separate the data into a different folder for each file type. Use DataBrew to process each folder individually. Store the output in Apache Parquet format.",
      "D": "Separate the data into a different folder for each file type. Use DataBrew to process each folder individually. Store the output in AWS Glue Parquet format."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/157315-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 88,
    "question": "제조 회사는 ML 모델을 사용하여 제품이 품질 표준을 충족하는지 결정합니다. 이 모델은 \"합격\" 또는 \"불합격\"의 출력을 생성합니다. 로봇은 이 모델을 사용하여 조립 라인의 사진을 분석함으로써 제품을 두 카테고리로 분류합니다. 모델의 성능을 평가하기 위해 회사가 사용해야 할 메트릭은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Precision과 recall",
      "B": "Root mean square error (RMSE)와 mean absolute percentage error (MAPE)",
      "C": "Accuracy와 F1 score",
      "D": "Bilingual Evaluation Understudy (BLEU) score",
      "E": "Perplexity"
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ Precision — 예측한 양성 중 실제 양성의 비율 (오탐(False Positive) 최소화)\n▸ Recall — 실제 양성 중 예측한 양성의 비율 (미탐(False Negative) 최소화)\n▸ Accuracy — 전체 예측 중 정확한 예측의 비율\n▸ F1 Score — Precision과 Recall의 조화 평균 (불균형 데이터셋에서 유용)\n\n【정답 포인트】\n▸ 이진 분류 문제 (합격/불합격) → Precision, Recall, Accuracy, F1 Score 모두 적용 가능\n▸ 제조 품질 검증에서는 거짓 불합격(Type I error)과 거짓 합격(Type II error) 모두 중요\n▸ Accuracy + F1 Score 조합이 가장 포괄적인 평가 (클래스 균형 고려)\n\n【오답 체크】\n(B) RMSE와 MAPE는 회귀 문제의 메트릭이므로 이진 분류에 부적합\n(D) BLEU score는 머신 번역의 성능 평가용 메트릭으로 이미지 분류와 무관\n(E) Perplexity는 언어 모델의 성능을 측정하는 메트릭으로 이미지 분류에 부적합\n\n【시험 포인트】\n▸ 이진 분류 → Precision, Recall, Accuracy, F1 Score\n▸ 회귀 문제 → RMSE, MAE, MAPE\n▸ NLP 문제 → BLEU, Perplexity\n▸ A+C 모두 정확한 평가 가능",
    "en_q": "A manufacturing company uses an ML model to determine whether products meet a standard for quality. The model produces an output of \"Passed\" or \"Failed.\" Robots separate the products into the two categories by using the model to analyze photos on the assembly line. Which metrics should the company use to evaluate the model's performance? (Choose two.)",
    "en_opts": {
      "A": "Precision and recall",
      "B": "Root mean square error (RMSE) and mean absolute percentage error (MAPE)",
      "C": "Accuracy and F1 score",
      "D": "Bilingual Evaluation Understudy (BLEU) score",
      "E": "Perplexity"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/157316-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 89,
    "question": "ML 엔지니어는 ML 훈련 작업이 실행될 때 전송 중 모든 데이터를 암호화해야 합니다. ML 엔지니어는 Amazon SageMaker가 훈련 작업 중에 사용하는 프로세스에 전송 중 암호화가 적용되도록 해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "배치 처리를 위한 노드 간 통신을 암호화합니다.",
      "B": "훈련 클러스터의 노드 간 통신을 암호화합니다.",
      "C": "훈련 작업 요청 생성 중 AWS Key Management Service (AWS KMS) 키를 지정합니다.",
      "D": "SageMaker 도메인 생성 중 AWS Key Management Service (AWS KMS) 키를 지정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Inter-node encryption — 분산 훈련 시 여러 컴퓨팅 노드 간의 통신 암호화\n▸ In-transit encryption — 데이터가 이동 중일 때의 암호화\n▸ KMS key — 저장 데이터(at-rest) 암호화용으로 사용\n\n【정답 포인트】\n▸ \"전송 중(in transit)\" 암호화 → 네트워크 통신 암호화 필요\n▸ SageMaker 훈련은 멀티 노드로 분산 처리 시 노드 간 통신 발생\n▸ Enable inter-container traffic encryption 파라미터로 노드 간 통신 암호화\n\n【오답 체크】\n(A) 배치 처리는 SageMaker Batch Transform용 기능이며 훈련과 별개\n(C) KMS 키는 저장 데이터 암호화(at-rest)용이지 전송 중 암호화(in-transit)와 다름\n(D) SageMaker 도메인은 스튜디오 환경 설정으로 훈련 작업의 전송 암호화와 무관\n\n【시험 포인트】\n▸ In-transit → 노드 간 통신 암호화\n▸ At-rest → KMS 키 설정\n▸ 훈련 작업 = 분산 처리 = 노드 간 통신 필수",
    "en_q": "An ML engineer needs to encrypt all data in transit when an ML training job runs. The ML engineer must ensure that encryption in transit is applied to processes that Amazon SageMaker uses during the training job. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Encrypt communication between nodes for batch processing.",
      "B": "Encrypt communication between nodes in a training cluster.",
      "C": "Specify an AWS Key Management Service (AWS KMS) key during creation of the training job request.",
      "D": "Specify an AWS Key Management Service (AWS KMS) key during creation of the SageMaker domain."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168853-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 90,
    "question": "ML 엔지니어는 시계열 예측 모델의 품질을 평가하기 위해 메트릭을 사용해야 합니다. 이 모델에 적용되는 메트릭은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Recall",
      "B": "LogLoss",
      "C": "Root mean square error (RMSE)",
      "D": "InferenceLatency",
      "E": "Average weighted quantile loss (wQL)"
    },
    "answer": "CE",
    "explanation": "【핵심 용어】\n▸ RMSE — 예측값과 실제값의 차이(오차)의 제곱 평균을 제곱근 처리한 회귀 평가 메트릭\n▸ Recall — 이진 분류에서 실제 양성 중 예측 양성의 비율\n▸ LogLoss — 확률 기반 분류의 로그 손실 메트릭\n▸ wQL — 시계열 예측에서 분위수 손실을 가중치와 함께 계산하는 메트릭\n▸ InferenceLatency — 추론 실행 시간으로 성능 메트릭이 아님\n\n【정답 포인트】\n▸ 시계열 예측은 연속 값을 예측하는 회귀 문제 → RMSE 적용\n▸ 확률적 예측 구간 필요 시 → wQL(가중 분위수 손실) 사용\n▸ SageMaker의 시계열 예측(DeepAR) 평가 메트릭이 wQL, RMSE\n\n【오답 체크】\n(A) Recall은 이진/다중 분류의 메트릭으로 연속값 예측과 무관\n(B) LogLoss는 분류 문제의 확률 손실로 회귀 예측에 부적합\n(D) InferenceLatency는 모델 성능 평가가 아닌 시스템 성능 지표\n\n【시험 포인트】\n▸ 시계열 예측(회귀) → RMSE, MAE, wQL\n▸ 이진 분류 → Precision, Recall, LogLoss\n▸ 시계열 확률 예측 → wQL(분위수 손실)\n▸ C+E 조합이 표준",
    "en_q": "An ML engineer needs to use metrics to assess the quality of a time-series forecasting model. Which metrics apply to this model? (Choose two.)",
    "en_opts": {
      "A": "Recall",
      "B": "LogLoss",
      "C": "Root mean square error (RMSE)",
      "D": "InferenceLatency",
      "E": "Average weighted quantile loss (wQL)"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169486-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 91,
    "question": "한 회사는 가속화된 인스턴스를 사용하는 Amazon SageMaker ML 모델을 운영합니다. 이 모델은 실시간 응답이 필요합니다. 각 모델은 다른 스케일링 요구사항을 가지고 있습니다. 회사는 모델에 대한 콜드 스타트를 허용하지 않아야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 모델에 대해 SageMaker Serverless Inference 엔드포인트를 만듭니다. 엔드포인트에 프로비저닝된 동시성을 사용합니다.",
      "B": "각 모델에 대해 SageMaker Asynchronous Inference 엔드포인트를 만듭니다. 각 엔드포인트에 대해 자동 스케일링 정책을 만듭니다.",
      "C": "SageMaker 엔드포인트를 만듭니다. 각 모델에 대해 inference component를 만듭니다. Inference component 설정에서 새로 생성한 엔드포인트를 지정합니다. 각 inference component에 대해 자동 스케일링 정책을 만듭니다. 최소 복사본 수 파라미터를 1 이상으로 설정합니다.",
      "D": "Amazon S3 버킷을 만듭니다. 모든 모델 아티팩트를 S3 버킷에 저장합니다. SageMaker 멀티 모델 엔드포인트를 만듭니다. 엔드포인트를 S3 버킷으로 가리킵니다. 엔드포인트에 대해 자동 스케일링 정책을 만듭니다. 최소 복사본 수 파라미터를 1 이상으로 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Inference component — SageMaker 엔드포인트 내에서 개별 모델을 독립적으로 관리하는 단위\n▸ Serverless Inference — 자동 스케일링되지만 콜드 스타트 지연 발생\n▸ Asynchronous Inference — 비동기 처리로 실시간 응답 불가\n▸ Cold start — 엔드포인트가 유휴 상태에서 요청 처리 시작 시의 초기 지연\n\n【정답 포인트】\n▸ \"실시간 응답\" + \"콜드 스타트 금지\" → 최소 인스턴스 1개 항상 실행\n▸ \"다양한 스케일링 요구사항\" → inference component로 모델별 독립 관리\n▸ 단일 엔드포인트로 다중 모델 호스팅 → 비용 효율적\n▸ minimum number of copies = 1 → 콜드 스타트 방지\n\n【오답 체크】\n(A) Serverless Inference는 콜드 스타트 지연 발생 (밀리초~초 수준)\n(B) Asynchronous Inference는 비동기 처리로 실시간 응답 불가\n(D) Multi-model endpoint는 모든 모델이 하나의 스케일링 정책을 공유하므로 독립적 스케일링 불가\n\n【시험 포인트】\n▸ 실시간 + 콜드 스타트 금지 → Min copies ≥ 1\n▸ 모델별 독립 스케일링 → Inference component\n▸ 비용 최적화 → 단일 엔드포인트 활용",
    "en_q": "A company runs Amazon SageMaker ML models that use accelerated instances. The models require real-time responses. Each model has different scaling requirements. The company must not allow a cold start for the models. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a SageMaker Serverless Inference endpoint for each model. Use provisioned concurrency for the endpoints.",
      "B": "Create a SageMaker Asynchronous Inference endpoint for each model. Create an auto scaling policy for each endpoint.",
      "C": "Create a SageMaker endpoint. Create an inference component for each model. In the inference component settings, specify the newly created endpoint. Create an auto scaling policy for each inference component. Set the parameter for the minimum number of copies to at least 1.",
      "D": "Create an Amazon S3 bucket. Store all the model artifacts in the S3 bucket. Create a SageMaker multi-model endpoint. Point the endpoint to the S3 bucket. Create an auto scaling policy for the endpoint. Set the parameter for the minimum number of copies to at least 1."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169487-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 92,
    "question": "한 회사는 ML 프로세스에 Amazon SageMaker를 사용합니다. 준수 감사 결과 훈련 데이터용 Amazon S3 버킷이 S3 관리 키(SSE-S3)를 사용하는 서버 측 암호화를 사용하고 있음을 발견했습니다. 회사는 고객 관리 키가 필요합니다. ML 엔지니어가 S3 버킷을 AWS KMS 키(SSE-KMS)를 사용하는 서버 측 암호화를 사용하도록 변경합니다. ML 엔지니어는 다른 구성 변경을 하지 않습니다. 암호화 설정 변경 후 SageMaker 훈련 작업이 AccessDenied 오류로 실패하기 시작합니다. ML 엔지니어는 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "훈련 작업에 대한 실행 역할에 연결된 IAM 정책을 업데이트합니다. s3:ListBucket 및 s3:GetObject 권한을 포함합니다.",
      "B": "S3 버킷에 연결된 S3 버킷 정책을 업데이트합니다. aws:SecureTransport 조건 키의 값을 True로 설정합니다.",
      "C": "훈련 작업에 대한 실행 역할에 연결된 IAM 정책을 업데이트합니다. kms:Encrypt 및 kms:Decrypt 권한을 포함합니다.",
      "D": "훈련 작업을 생성한 사용자에게 연결된 IAM 정책을 업데이트합니다. kms:CreateGrant 권한을 포함합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SSE-S3 — S3가 관리하는 암호화 키 (자동 처리)\n▸ SSE-KMS — 고객이 AWS KMS에서 관리하는 암호화 키\n▸ Execution role — SageMaker 훈련 작업이 AWS 리소스에 접근할 권한\n▸ AccessDenied — IAM 권한 부족으로 인한 접근 거부\n\n【정답 포인트】\n▸ SSE-S3 → SSE-KMS 변경 후 AccessDenied 발생\n▸ KMS 기반 암호화는 KMS 권한 필요 → kms:Decrypt (복호화), kms:Encrypt (암호화)\n▸ SageMaker 훈련 작업의 실행 역할에 KMS 권한 부족\n\n【오답 체크】\n(A) S3 기본 권한(ListBucket, GetObject)은 이미 있으므로 문제 해결 불가\n(B) aws:SecureTransport는 HTTPS 강제로 S3 암호화 방식 변경과 무관\n(D) kms:CreateGrant는 특정 보안 요구사항이 아니며, 표준 복호화에는 필요 없음\n\n【시험 포인트】\n▸ KMS 암호화 적용 후 AccessDenied → KMS 권한 추가\n▸ 훈련 작업 = 실행 역할이 권한 보유 필수\n▸ 데이터 접근 → kms:Decrypt 필수",
    "en_q": "A company uses Amazon SageMaker for its ML process. A compliance audit discovers that an Amazon S3 bucket for training data uses server-side encryption with S3 managed keys (SSE-S3). The company requires customer managed keys. An ML engineer changes the S3 bucket to use server-side encryption with AWS KMS keys (SSE-KMS). The ML engineer makes no other configuration changes. After the change to the encryption settings, SageMaker training jobs start to fail with AccessDenied errors. What should the ML engineer do to resolve this problem?",
    "en_opts": {
      "A": "Update the IAM policy that is attached to the execution role for the training jobs. Include the s3:ListBucket and s3:GetObject permissions.",
      "B": "Update the S3 bucket policy that is attached to the S3 bucket. Set the value of the aws:SecureTransport condition key to True.",
      "C": "Update the IAM policy that is attached to the execution role for the training jobs. Include the kms:Encrypt and kms:Decrypt permissions.",
      "D": "Update the IAM policy that is attached to the user that created the training jobs. Include the kms:CreateGrant permission."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169489-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 93,
    "question": "한 회사는 컴퓨팅 최적화 인스턴스를 사용하여 Amazon SageMaker에서 훈련 작업을 실행합니다. 향후 55주 동안 훈련 실행 수요는 일정하게 유지될 것입니다. 인스턴스는 매주 35시간 동안 실행되어야 합니다. 회사는 모델 훈련 비용을 줄여야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 주마다 35시간의 프로비저닝된 동시성이 있는 서버리스 엔드포인트를 사용합니다. 엔드포인트에서 훈련을 실행합니다.",
      "B": "훈련에 SageMaker Edge Manager를 사용합니다. 에지 디바이스 구성에서 인스턴스 요구사항을 지정합니다. 훈련을 실행합니다.",
      "C": "SageMaker Training의 이기종 클러스터 기능을 사용합니다. instance_type, instance_count 및 instance_groups 인수를 구성하여 훈련 작업을 실행합니다.",
      "D": "1년 기간 및 선결제 결제 옵션으로 SageMaker Savings Plan에 등록합니다. 인스턴스에서 SageMaker Training 작업을 실행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Compute optimized instance — CPU 성능 최적화 인스턴스 (훈련용)\n▸ Savings Plan — 사용 약정으로 할인 제공 (AWS 범용 가격 정책)\n▸ Reserved Instance — 특정 인스턴스 예약으로 할인\n▸ Serverless endpoint — 서버리스 추론용 (훈련용 아님)\n\n【정답 포인트】\n▸ \"55주 일정한 수요\" + \"주당 35시간\" → 사용 패턴이 예측 가능\n▸ SageMaker Savings Plan은 훈련/추론 비용 할인 제공\n▸ 1년 약정 + All Upfront 선결제 → 최대 할인율 적용\n▸ 컴퓨팅 최적화 인스턴스의 지속적 사용에 최적\n\n【오답 체크】\n(A) Serverless endpoint는 추론용이며 훈련에 사용 불가\n(B) Edge Manager는 엣지 디바이스 배포용으로 클라우드 훈련과 무관\n(C) Heterogeneous cluster는 비용 절감과 무관하며 서로 다른 인스턴스 조합 활용\n\n【시험 포인트】\n▸ 예측 가능한 장기 수요 → Savings Plan 또는 Reserved Instance\n▸ 훈련 비용 절감 → SageMaker Savings Plan\n▸ All Upfront 선결제 → 최대 할인",
    "en_q": "A company runs training jobs on Amazon SageMaker by using a compute optimized instance. Demand for training runs will remain constant for the next 55 weeks. The instance needs to run for 35 hours each week. The company needs to reduce its model training costs. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use a serverless endpoint with a provisioned concurrency of 35 hours for each week. Run the training on the endpoint.",
      "B": "Use SageMaker Edge Manager for the training. Specify the instance requirement in the edge device configuration. Run the training.",
      "C": "Use the heterogeneous cluster feature of SageMaker Training. Configure the instance_type, instance_count, and instance_groups arguments to run training jobs.",
      "D": "Opt in to a SageMaker Savings Plan with a 1-year term and an All Upfront payment. Run a SageMaker Training job on the instance."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168854-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 95,
    "question": "한 회사는 제품 고장을 예측하는 XGBoost 알고리즘을 사용하는 ML 모델을 배포했습니다. 이 모델은 Amazon SageMaker 엔드포인트에 호스팅되며 정상 작동 데이터로 훈련되었습니다. AWS Lambda 함수가 회사 애플리케이션에 예측을 제공합니다. ML 엔지니어는 들어오는 라이브 데이터를 사용하여 시간에 따른 모델 정확도 저하를 감지하는 솔루션을 구현해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon CloudWatch를 사용하여 실시간 추론 데이터 및 모델 예측을 모니터링하는 대시보드를 만듭니다. 대시보드를 사용하여 드리프트를 감지합니다.",
      "B": "Lambda 함수를 수정하여 실시간 추론 데이터 및 모델 예측을 사용해 모델 드리프트를 계산합니다. 프로그래밍으로 경고를 전송하도록 Lambda 함수를 설정합니다.",
      "C": "SageMaker Model Monitor에서 모니터링 작업을 예약합니다. 훈련 데이터 통계 및 제약 조건의 기준선에 대해 라이브 데이터를 분석하여 드리프트를 감지하도록 작업을 사용합니다.",
      "D": "SageMaker Debugger에서 모니터링 작업을 예약합니다. 훈련 데이터 통계 및 제약 조건의 기준선에 대해 라이브 데이터를 분석하여 드리프트를 감지하도록 작업을 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Model drift — 시간에 따라 모델의 예측 성능이 저하되는 현상\n▸ SageMaker Model Monitor — 배포된 모델의 데이터 및 예측 드리프트 감지 전용 서비스\n▸ SageMaker Debugger — 훈련 중 모델의 내부 상태 분석 및 오버피팅/언더피팅 감지\n▸ Data drift — 입력 데이터의 분포 변화\n▸ Prediction drift — 모델 출력 분포 변화\n\n【정답 포인트】\n▸ \"라이브 데이터\" + \"모델 정확도 저하\" → 배포된 모델의 드리프트 감지\n▸ SageMaker Model Monitor는 프로덕션 모델의 데이터/예측 드리프트 전담\n▸ 기준선(baseline) 통계와 제약조건(constraints) 비교로 자동 모니터링\n▸ 스케줄 기반 모니터링 작업으로 운영 오버헤드 최소화\n\n【오답 체크】\n(A) CloudWatch는 메트릭 시각화이며 통계 기반 드리프트 감지 불가\n(B) Lambda로 수동 구현하면 운영 복잡도 증가 및 자동화 불가\n(D) Debugger는 훈련 중 모델 품질 분석용이며 배포 후 프로덕션 모니터링 불가\n\n【시험 포인트】\n▸ 프로덕션 드리프트 감지 → SageMaker Model Monitor (표준)\n▸ 훈련 중 품질 분석 → SageMaker Debugger\n▸ 실시간 모니터링 → CloudWatch (시각화)\n▸ 기준선 vs 라이브 데이터 비교 = Model Monitor 핵심",
    "en_q": "A company deployed an ML model that uses the XGBoost algorithm to predict product failures. The model is hosted on an Amazon SageMaker endpoint and is trained on normal operating data. An AWS Lambda function provides the predictions to the company's application. An ML engineer must implement a solution that uses incoming live data to detect decreased model accuracy over time. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon CloudWatch to create a dashboard that monitors real-time inference data and model predictions. Use the dashboard to detect drift.",
      "B": "Modify the Lambda function to calculate model drift by using real-time inference data and model predictions. Program the Lambda function to send alerts.",
      "C": "Schedule a monitoring job in SageMaker Model Monitor. Use the job to detect drift by analyzing the live data against a baseline of the training data statistics and constraints.",
      "D": "Schedule a monitoring job in SageMaker Debugger. Use the job to detect drift by analyzing the live data against a baseline of the training data statistics and constraints."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168855-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 96,
    "question": "한 회사는 과거 트랜잭션 데이터를 사용하여 고객 행동을 예측하는 ML 모델을 보유하고 있습니다. ML 엔지니어는 모델의 예측 정확도를 향상시키기 위해 Amazon SageMaker에서 모델을 최적화하고 있습니다. ML 엔지니어는 입력 데이터와 결과 예측을 검토하여 다양한 인구통계에 걸쳐 모델의 성능을 왜곡할 수 있는 추세를 식별해야 합니다. 어떤 솔루션이 이 수준의 분석을 제공할까요?",
    "options": {
      "A": "Amazon CloudWatch를 사용하여 모델 훈련 중 리소스 최적화를 위해 네트워크 메트릭 및 CPU 메트릭을 모니터링합니다.",
      "B": "모델 출력의 통계에 기반하여 데이터를 수정하는 AWS Glue DataBrew 레시피를 만듭니다.",
      "C": "SageMaker Clarify를 사용하여 모델과 훈련 데이터를 평가하고 정확도에 영향을 미칠 수 있는 내재된 패턴을 찾습니다.",
      "D": "데이터 전처리를 자동화하고 모델의 입력 데이터 품질 일관성을 보장하는 AWS Lambda 함수를 만듭니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Clarify — 모델의 편향(bias), 공정성(fairness), 설명 가능성(explainability) 분석\n▸ Feature importance — 모델 결정에 영향을 미치는 입력 특성의 중요도\n▸ Bias detection — 인구통계(성, 나이, 인종 등)에 따른 불공정한 예측\n▸ SHAP values — 예측에 대한 특성의 기여도 분석\n\n【정답 포인트】\n▸ \"입력 데이터와 예측 검토\" → 모델 분석 필요\n▸ \"다양한 인구통계에 걸쳐\" → 편향(bias) 감지\n▸ \"추세를 식별\" → 설명 가능성 분석\n▸ SageMaker Clarify는 모델 공정성과 편향 분석의 표준 도구\n\n【오답 체크】\n(A) CloudWatch는 시스템 성능(네트워크, CPU) 모니터링용이며 모델 편향 분석 불가\n(B) DataBrew는 데이터 정제용이지만 모델 편향이나 인구통계별 성능 분석 불가\n(D) Lambda는 데이터 품질 일관성 보장이지만 모델의 내재된 패턴(편향) 분석 불가\n\n【시험 포인트】\n▸ 모델 편향 + 공정성 분석 → SageMaker Clarify (표준)\n▸ 인구통계별 성능 격차 → Clarify로 감지\n▸ 예측 설명 가능성 → SHAP, LIME 분석 (Clarify 내 포함)",
    "en_q": "A company has an ML model that uses historical transaction data to predict customer behavior. An ML engineer is optimizing the model in Amazon SageMaker to enhance the model's predictive accuracy. The ML engineer must examine the input data and the resulting predictions to identify trends that could skew the model's performance across different demographics. Which solution will provide this level of analysis?",
    "en_opts": {
      "A": "Use Amazon CloudWatch to monitor network metrics and CPU metrics for resource optimization during model training.",
      "B": "Create AWS Glue DataBrew recipes to correct the data based on statistics from the model output.",
      "C": "Use SageMaker Clarify to evaluate the model and training data for underlying patterns that might affect accuracy.",
      "D": "Create AWS Lambda functions to automate data pre-processing and to ensure consistent quality of input data for the model."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168856-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 97,
    "question": "한 회사는 가속화된 인스턴스의 10개 Reserved Instance를 사용하여 ML 모델의 현재 버전을 제공합니다. ML 엔지니어는 Amazon SageMaker 실시간 추론 엔드포인트에 모델의 새 버전을 배포해야 합니다. 솔루션은 원래 10개 인스턴스를 사용하여 두 버전의 모델을 모두 제공해야 합니다. 솔루션에는 배포 프로세스에 사용할 수 있는 추가 Reserved Instance 1개도 포함되어야 합니다. 버전 간 전환은 다운타임 또는 서비스 중단 없이 발생해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "All-at-once 트래픽 이동을 사용하여 blue/green 배포를 구성합니다.",
      "B": "10% 크기의 Canary 트래픽 이동을 사용하여 blue/green 배포를 구성합니다.",
      "C": "10%의 트래픽 샘플링 비율을 사용하여 섀도우 테스트를 구성합니다.",
      "D": "Rolling batch size 1을 사용하여 Rolling 배포를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Blue/green deployment — 이전 버전(blue) 삭제 후 새 버전(green) 시작\n▸ Rolling deployment — 인스턴스를 순차적으로 업데이트\n▸ Canary deployment — 소량의 트래픽으로 새 버전 검증\n▸ Shadow testing — 새 버전으로 트래픽 복제 (트래픽 영향 없음)\n▸ Reserved Instance — 예약된 컴퓨팅 용량\n\n【정답 포인트】\n▸ 원래 10개 인스턴스 사용 + 추가 1개 인스턴스로 배포\n▸ \"다운타임 없이\" + \"서비스 중단 없이\" → 0 downtime 배포 필수\n▸ Rolling deployment with batch size 1:\n  - 1개 인스턴스를 새 버전으로 업데이트\n  - 기존 9개 + 새 1개 = 10개 용량 유지\n  - 순차 업데이트로 10개 → 10개 유지\n  - 추가 1개로 안전한 업데이트 가능\n\n【오답 체크】\n(A) All-at-once는 모든 인스턴스 동시 업데이트로 다운타임 발생\n(B) Canary는 트래픽 분배일 뿐 배포 메커니즘이 아니며, 10개 이상의 리소스 필요\n(C) Shadow testing은 배포가 아닌 테스트 방식\n\n【시험 포인트】\n▸ \"다운타임 없이\" → Rolling deployment 선택\n▸ \"배포 프로세스용 추가 인스턴스\" → Rolling batch size 1로 순차 업데이트\n▸ 기존 용량 유지 → 10개 구성 변경 없음",
    "en_q": "A company uses 10 Reserved Instances of accelerated instance types to serve the current version of an ML model. An ML engineer needs to deploy a new version of the model to an Amazon SageMaker real-time inference endpoint. The solution must use the original 10 instances to serve both versions of the model. The solution also must include one additional Reserved Instance that is available to use in the deployment process. The transition between versions must occur with no downtime or service interruptions. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure a blue/green deployment with all-at-once traffic shifting.",
      "B": "Configure a blue/green deployment with canary traffic shifting and a size of 10%.",
      "C": "Configure a shadow test with a traffic sampling percentage of 10%.",
      "D": "Configure a rolling deployment with a rolling batch size of 1."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168857-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 98,
    "question": "IoT 회사는 객체 감지를 위해 XGBoost 모델을 훈련하고 테스트하기 위해 Amazon SageMaker를 사용합니다. ML 엔지니어는 하이퍼파라미터 변형으로 모델을 훈련할 때 성능 메트릭을 모니터링해야 합니다. ML 엔지니어는 또한 훈련 완료 후에 Short Message Service (SMS) 문자 메시지를 전송해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "성능 메트릭 모니터링을 위해 Amazon CloudWatch를 사용합니다. 메시지 배달을 위해 Amazon Simple Queue Service (Amazon SQS)를 사용합니다.",
      "B": "성능 메트릭 모니터링을 위해 Amazon CloudWatch를 사용합니다. 메시지 배달을 위해 Amazon Simple Notification Service (Amazon SNS)를 사용합니다.",
      "C": "성능 메트릭 모니터링을 위해 AWS CloudTrail을 사용합니다. 메시지 배달을 위해 Amazon Simple Queue Service (Amazon SQS)를 사용합니다.",
      "D": "성능 메트릭 모니터링을 위해 AWS CloudTrail을 사용합니다. 메시지 배달을 위해 Amazon Simple Notification Service (Amazon SNS)를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudWatch — AWS 리소스의 메트릭, 로그, 이벤트 모니터링\n▸ CloudTrail — AWS API 호출 감사 및 추적 (규정 준수용)\n▸ SNS — 푸시 알림, 이메일, SMS 메시지 발송 서비스\n▸ SQS — 메시지 큐 서비스 (비동기 처리용)\n\n【정답 포인트】\n▸ \"하이퍼파라미터 변형 모니터링\" → CloudWatch 메트릭\n▸ \"SMS 문자 메시지 전송\" → SNS가 SMS 발송 지원\n▸ CloudWatch는 SageMaker 훈련 메트릭(loss, accuracy 등) 수집\n▸ SNS는 SMTP, SMS, SQS, Lambda 등 다양한 메시지 배달 지원\n\n【오답 체크】\n(A) SQS는 메시지 큐로 SMS 발송 불가 (메시지 저장만 가능)\n(C) CloudTrail은 API 감사용이며 성능 메트릭 수집 불가\n(D) CloudTrail + SNS 조합은 메트릭 모니터링 불가\n\n【시험 포인트】\n▸ SageMaker 훈련 메트릭 → CloudWatch (표준)\n▸ SMS 발송 → SNS (전용)\n▸ 메시지 큐 → SQS (비동기 처리)\n▸ API 감사 → CloudTrail (규정 준수)",
    "en_q": "An IoT company uses Amazon SageMaker to train and test an XGBoost model for object detection. ML engineers need to monitor performance metrics when they train the model with variants in hyperparameters. The ML engineers also need to send Short Message Service (SMS) text messages after training is complete. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon CloudWatch to monitor performance metrics. Use Amazon Simple Queue Service (Amazon SQS) for message delivery.",
      "B": "Use Amazon CloudWatch to monitor performance metrics. Use Amazon Simple Notification Service (Amazon SNS) for message delivery.",
      "C": "Use AWS CloudTrail to monitor performance metrics. Use Amazon Simple Queue Service (Amazon SQS) for message delivery.",
      "D": "Use AWS CloudTrail to monitor performance metrics. Use Amazon Simple Notification Service (Amazon SNS) for message delivery."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168858-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 99,
    "question": "한 회사는 Amazon SageMaker 노트북 인스턴스를 포함할 ML 프로젝트를 작업 중입니다. ML 엔지니어는 SageMaker 노트북 인스턴스가 루트 액세스를 허용하지 않도록 해야 합니다. 루트 액세스를 허용하는 노트북 인스턴스의 배포를 방지하는 솔루션은 무엇입니까?",
    "options": {
      "A": "IAM 조건 키를 사용하여 루트 액세스를 허용하는 SageMaker 노트북 인스턴스의 배포를 중지합니다.",
      "B": "AWS Key Management Service (AWS KMS) 키를 사용하여 루트 액세스를 허용하는 SageMaker 노트북 인스턴스의 배포를 중지합니다.",
      "C": "Amazon EventBridge 이벤트를 사용하여 리소스 생성을 모니터링합니다. 루트 액세스를 허용하는 배포된 모든 SageMaker 노트북 인스턴스를 삭제하는 AWS Lambda 함수를 만듭니다.",
      "D": "AWS CloudFormation 이벤트를 사용하여 리소스 생성을 모니터링합니다. 루트 액세스를 허용하는 배포된 모든 SageMaker 노트북 인스턴스를 삭제하는 AWS Lambda 함수를 만듭니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ IAM condition keys — IAM 정책에 조건을 추가하여 특정 작업 제약\n▸ RootAccess parameter — SageMaker 노트북 인스턴스의 루트 권한 설정\n▸ CloudFormation — IaC(Infrastructure as Code) 서비스\n▸ EventBridge — AWS 이벤트 기반 자동화\n\n【정답 포인트】\n▸ \"배포를 방지\" → 사전 예방(preventive) 방식\n▸ IAM 조건 키로 CreateNotebookInstance API 호출 시 RootAccess=False 강제\n▸ \"배포 금지\" + \"최소 운영 오버헤드\" → IAM 정책 기반 차단이 최적\n▸ 예: sagemaker:RootAccess condition key = \"Disabled\" 강제\n\n【오답 체크】\n(B) KMS 키는 암호화 키 관리용이며 접근 제어와 무관\n(C) EventBridge + Lambda는 이미 배포된 후 삭제(reactive)하는 방식\n(D) CloudFormation 이벤트 모니터링은 불가능하며, Lambda로 삭제 후처리는 사전 예방 아님\n\n【시험 포인트】\n▸ \"배포 방지\" = \"사전 제어\" → IAM 정책\n▸ \"이미 배포된 후 삭제\" → EventBridge + Lambda (사후 대응)\n▸ SageMaker 보안 정책 → IAM 조건 키 (표준)",
    "en_q": "A company is working on an ML project that will include Amazon SageMaker notebook instances. An ML engineer must ensure that the SageMaker notebook instances do not allow root access. Which solution will prevent the deployment of notebook instances that allow root access?",
    "en_opts": {
      "A": "Use IAM condition keys to stop deployments of SageMaker notebook instances that allow root access.",
      "B": "Use AWS Key Management Service (AWS KMS) keys to stop deployments of SageMaker notebook instances that allow root access.",
      "C": "Monitor resource creation by using Amazon EventBridge events. Create an AWS Lambda function that deletes all deployed SageMaker notebook instances that allow root access.",
      "D": "Monitor resource creation by using AWS CloudFormation events. Create an AWS Lambda function that deletes all deployed SageMaker notebook instances that allow root access."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168859-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 100,
    "question": "한 회사는 Amazon SageMaker를 사용하여 ML 모델을 개발하고 있습니다. 회사는 민감한 훈련 데이터를 Amazon S3 버킷에 저장합니다. 모델 훈련은 인터넷으로부터 네트워크 격리를 가져야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker 훈련 작업을 프라이빗 서브넷에서 실행합니다. NAT 게이트웨이를 만듭니다. NAT 게이트웨이를 통해 훈련 트래픽을 라우팅합니다.",
      "B": "SageMaker 훈련 작업을 프라이빗 서브넷에서 실행합니다. S3 게이트웨이 VPC 엔드포인트를 만듭니다. S3 게이트웨이 VPC 엔드포인트를 통해 훈련 트래픽을 라우팅합니다.",
      "C": "SageMaker 훈련 작업을 보안 그룹이 연결된 퍼블릭 서브넷에서 실행합니다. 보안 그룹에서 인바운드 규칙을 사용하여 인터넷의 트래픽을 제한합니다. AWS KMS 키(SSE-KMS)를 사용하는 서버 측 암호화를 사용하여 SageMaker 인스턴스 스토리지를 암호화합니다.",
      "D": "AWS KMS 키를 사용하는 서버 측 암호화(SSE-KMS)를 사용하여 Amazon S3로의 트래픽을 암호화합니다. Amazon S3에 기본 저장 암호화를 사용합니다. AWS KMS 키(SSE-KMS)를 사용하는 서버 측 암호화를 사용하여 SageMaker 인스턴스 스토리지를 암호화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Network isolation — 인터넷으로부터 완전히 격리된 네트워크 환경\n▸ NAT gateway — 프라이빗 리소스의 아웃바운드 인터넷 액세스 제공\n▸ VPC endpoint — AWS 서비스에 대한 프라이빗 연결 (인터넷 게이트웨이 불필요)\n▸ Gateway VPC endpoint — S3, DynamoDB 등 AWS 서비스에 대한 프라이빗 라우트\n\n【정답 포인트】\n▸ \"인터넷으로부터 네트워크 격리\" → 아웃바운드 인터넷 액세스 차단\n▸ S3 게이트웨이 VPC 엔드포인트 → S3에 대한 프라이빗 연결\n▸ 프라이빗 서브넷 + VPC endpoint → NAT gateway 불필요\n▸ S3에 대한 모든 트래픽이 AWS 네트워크 내부에서 이동\n\n【오답 체크】\n(A) NAT 게이트웨이는 인터넷 게이트웨이를 통해 인터넷 액세스 제공 → 격리 위반\n(C) 퍼블릭 서브넷은 인터넷 게이트웨이 존재 → 네트워크 격리 불가\n(D) 암호화는 네트워크 격리와 다른 개념이며, 아웃바운드 인터넷 연결 차단 불가\n\n【시험 포인트】\n▸ 네트워크 격리(No internet) → Private subnet + VPC endpoint\n▸ 데이터 암호화(In transit/At rest) → KMS, SSE-KMS\n▸ S3 접근 → Gateway VPC endpoint (최적)",
    "en_q": "A company is using Amazon SageMaker to develop ML models. The company stores sensitive training data in an Amazon S3 bucket. The model training must have network isolation from the internet. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Run the SageMaker training jobs in private subnets. Create a NAT gateway. Route traffic for training through the NAT gateway.",
      "B": "Run the SageMaker training jobs in private subnets. Create an S3 gateway VPC endpoint. Route traffic for training through the S3 gateway VPC endpoint.",
      "C": "Run the SageMaker training jobs in public subnets that have an attached security group. In the security group, use inbound rules to limit traffic from the internet. Encrypt SageMaker instance storage by using server-side encryption with AWS KMS keys (SSE-KMS).",
      "D": "Encrypt traffic to Amazon S3 by using a bucket policy that includes a value of True for the aws:SecureTransport condition key. Use default at-rest encryption for Amazon S3. Encrypt SageMaker instance storage by using server-side encryption with AWS KMS keys (SSE-KMS)."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168860-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 101,
    "question": "한 회사는 모델이 생성되면서 자동으로 ML 모델의 버전을 만드는 AWS 솔루션이 필요합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic Container Registry (Amazon ECR)",
      "B": "Amazon SageMaker Marketplace의 모델 패키지",
      "C": "Amazon SageMaker ML Lineage Tracking",
      "D": "Amazon SageMaker Model Registry"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Model Registry — SageMaker의 모델 버전 관리 및 메타데이터 저장소\n▸ Model versioning — 모델의 변형 추적 및 버전 관리\n▸ ML Lineage Tracking — 훈련 데이터, 코드, 모델의 계보 추적\n▸ ECR — 도커 이미지 저장소 (모델 아티팩트 아님)\n\n【정답 포인트】\n▸ \"모델 버전을 자동으로 생성\" → 모델 버전 관리 기능 필수\n▸ SageMaker Model Registry는 모델 메타데이터, 버전, 상태 관리\n▸ \"생성되면서\" = \"훈련 작업 완료 후\" → 자동 등록 가능\n▸ 모델의 approval 상태 관리 가능 (Draft → Approved → Production)\n\n【오답 체크】\n(A) ECR은 도커 컨테이너 이미지 저장소로 모델 버전 관리 불가\n(B) SageMaker Marketplace는 타사 모델 구매/판매 플랫폼\n(C) ML Lineage Tracking은 훈련 과정의 계보 추적이지 모델 버전 관리 아님\n\n【시험 포인트】\n▸ 모델 버전 관리 → SageMaker Model Registry (표준)\n▸ 훈련 과정 추적 → ML Lineage Tracking\n▸ 도커 이미지 저장 → ECR (모델 아님)\n▸ 제3자 모델 마켓 → SageMaker Marketplace",
    "en_q": "A company needs an AWS solution that will automatically create versions of ML models as the models are created. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Amazon Elastic Container Registry (Amazon ECR)",
      "B": "Model packages from Amazon SageMaker Marketplace",
      "C": "Amazon SageMaker ML Lineage Tracking",
      "D": "Amazon SageMaker Model Registry"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169494-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 102,
    "question": "한 회사는 Amazon Bedrock에서 실행되는 오픈소스 대형 언어 모델(LLM)을 보완하기 위해 Retrieval Augmented Generation (RAG)을 사용해야 합니다. RAG용 회사 데이터는 Amazon S3 버킷의 문서 집합입니다. 이 문서들은 .csv 파일과 .docx 파일로 구성됩니다. 운영 오버헤드를 최소화하면서 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon SageMaker Pipelines에서 파이프라인을 만듭니다. 새 모델을 생성합니다. Amazon Bedrock에서 새 모델을 호출하여 RAG 쿼리를 수행합니다.",
      "B": "데이터를 벡터로 변환합니다. Amazon Neptune 데이터베이스에 데이터를 저장합니다. 데이터베이스를 Amazon Bedrock에 연결합니다. Amazon Bedrock API를 호출하여 RAG 쿼리를 수행합니다.",
      "C": "Amazon SageMaker의 AutoML 작업을 사용하여 기존 LLM을 미세 조정합니다. S3 버킷을 AutoML 작업의 데이터 소스로 구성합니다. LLM을 SageMaker 엔드포인트에 배포합니다. 엔드포인트를 사용하여 RAG 쿼리를 수행합니다.",
      "D": "Amazon Bedrock용 knowledge base를 만듭니다. S3 버킷을 참조하는 데이터 소스를 구성합니다. Amazon Bedrock API를 사용하여 RAG 쿼리를 수행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Retrieval Augmented Generation (RAG) — 외부 문서 기반 정보로 LLM의 응답 강화\n▸ Amazon Bedrock Knowledge Base — Bedrock의 RAG 전담 서비스\n▸ Vector embedding — 문서를 벡터 형식으로 변환\n▸ Data source — RAG의 외부 문서 저장소\n\n【정답 포인트】\n▸ \"Amazon Bedrock LLM\" + \"RAG\" → Bedrock Knowledge Base 통합 기능 사용\n▸ S3 CSV, DOCX 문서 → 자동으로 embedding 생성 및 벡터 저장\n▸ \"최소 운영 오버헤드\" → 완전 관리형 서비스 선택\n▸ Knowledge Base는 S3 데이터 소스를 자동으로 인덱싱 및 검색\n\n【오답 체크】\n(A) SageMaker Pipelines로 새 모델 생성은 기존 LLM 활용이 아닌 재학습\n(B) Neptune + 수동 벡터 변환은 운영 오버헤드 높음 (관리형 아님)\n(C) AutoML로 미세 조정 후 SageMaker 엔드포인트 배포는 복잡성 증가\n\n【시험 포인트】\n▸ Bedrock LLM + RAG → Bedrock Knowledge Base (표준)\n▸ 자동 벡터화 + 검색 → Knowledge Base 내장\n▸ 다양한 문서 형식 지원 → 자동 처리\n▸ 최소 코딩 → 완전 관리형",
    "en_q": "A company needs to use Retrieval Augmented Generation (RAG) to supplement an open source large language model (LLM) that runs on Amazon Bedrock. The company's data for RAG is a set of documents in an Amazon S3 bucket. The documents consist of .csv files and .docx files. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create a pipeline in Amazon SageMaker Pipelines to generate a new model. Call the new model from Amazon Bedrock to perform RAG queries.",
      "B": "Convert the data into vectors. Store the data in an Amazon Neptune database. Connect the database to Amazon Bedrock. Call the Amazon Bedrock API to perform RAG queries.",
      "C": "Fine-tune an existing LLM by using an AutoML job in Amazon SageMaker. Configure the S3 bucket as a data source for the AutoML job. Deploy the LLM to a SageMaker endpoint. Use the endpoint to perform RAG queries.",
      "D": "Create a knowledge base for Amazon Bedrock. Configure a data source that references the S3 bucket. Use the Amazon Bedrock API to perform RAG queries."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168861-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 103,
    "question": "한 회사는 프로덕션 추론을 위해 Amazon SageMaker 엔드포인트에 ML 모델을 배포할 계획입니다. 평균 추론 페이로드 크기는 100MB에서 300MB까지 다양합니다. 추론 요청은 60분 이내에 처리되어야 합니다. 이러한 요구사항을 충족하는 SageMaker 추론 옵션은 무엇입니까?",
    "options": {
      "A": "Serverless inference",
      "B": "Asynchronous inference",
      "C": "Real-time inference",
      "D": "Batch transform"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Serverless Inference — 자동 스케일링 추론 (대용량 페이로드 미지원)\n▸ Asynchronous Inference — 비동기 처리로 응답 지연 허용 (대용량 페이로드 지원)\n▸ Real-time Inference — 동기식 실시간 추론 (응답 지연 최소화)\n▸ Batch Transform — 배치 데이터 처리 (예약 작업용)\n\n【정답 포인트】\n▸ \"100~300MB 페이로드\" → 대용량 (Serverless는 최대 6MB)\n▸ \"60분 이내 처리\" → 비동기 처리 가능 (실시간 불필요)\n▸ Asynchronous Inference:\n  - S3 입력 → 결과는 S3에 저장\n  - 최대 15분 처리 시간 (60분 SLA 충분)\n  - 대용량 페이로드 지원\n\n【오답 체크】\n(A) Serverless는 최대 페이로드 6MB, 최대 응답 900초(15분)\n(C) Real-time은 대용량 페이로드에 높은 비용 + 지연 시간 증가\n(D) Batch Transform은 배치 작업용 (온디맨드 추론 아님)\n\n【시험 포인트】\n▸ 100~300MB + 지연 허용 → Asynchronous Inference\n▸ 소용량 + 즉시 응답 → Real-time Inference\n▸ 소용량 + 변동 트래픽 → Serverless Inference\n▸ 배치 데이터 + 예약 처리 → Batch Transform",
    "en_q": "A company plans to deploy an ML model for production inference on an Amazon SageMaker endpoint. The average inference payload size will vary from 100 MB to 300 MB. Inference requests must be processed in 60 minutes or less. Which SageMaker inference option will meet these requirements?",
    "en_opts": {
      "A": "Serverless inference",
      "B": "Asynchronous inference",
      "C": "Real-time inference",
      "D": "Batch transform"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168862-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 104,
    "question": "ML 엔지니어는 이미지 분류 훈련 작업에서 클래스 불균형을 발견합니다. ML 엔지니어는 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "데이터셋의 크기를 줄입니다.",
      "B": "데이터셋의 일부 이미지를 변환합니다.",
      "C": "데이터셋에 random oversampling을 적용합니다.",
      "D": "데이터셋에 random data splitting을 적용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Class imbalance — 일부 클래스의 샘플이 다른 클래스보다 훨씬 적은 상태\n▸ Oversampling — 소수 클래스의 샘플을 복제하여 증가\n▸ Undersampling — 다수 클래스의 샘플을 감소\n▸ Data augmentation — 이미지 변환으로 합성 샘플 생성\n\n【정답 포인트】\n▸ \"클래스 불균형\" → 훈련 데이터의 클래스 분포 비정상\n▸ Random oversampling → 소수 클래스를 무작위로 복제\n▸ 이미지 분류에서 표준 해결 방식\n▸ 클래스 가중치 조정보다 간단하고 효과적\n\n【오답 체크】\n(A) 데이터셋 크기 감소는 클래스 불균형 해결이 아니라 악화\n(B) 이미지 변환(data augmentation)은 샘플 개수 증가이지 클래스 균형 맞춤은 아님\n(D) Random data splitting은 훈련/테스트 분할이며 클래스 불균형 해결 불가\n\n【시험 포인트】\n▸ 클래스 불균형 → Oversampling (소수 증가) 또는 Undersampling (다수 감소)\n▸ 이미지 분류 → Oversampling + Data Augmentation 조합\n▸ SMOTE, Random oversampling 등 기법 존재\n▸ 클래스 가중치 조정도 보조 기법으로 활용 가능",
    "en_q": "An ML engineer notices class imbalance in an image classification training job. What should the ML engineer do to resolve this issue?",
    "en_opts": {
      "A": "Reduce the size of the dataset.",
      "B": "Transform some of the images in the dataset.",
      "C": "Apply random oversampling on the dataset.",
      "D": "Apply random data splitting on the dataset."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169496-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 105,
    "question": "한 회사가 고객과 ML 모델의 상호작용에 관한 일일 .csv 파일을 받습니다. 회사는 파일을 Amazon S3에 저장하고 파일을 사용하여 모델을 재학습합니다. ML 엔지니어는 모델을 재학습하기 전에 파일의 신용카드 번호를 마스킹하는 솔루션을 구현해야 합니다. 개발 노력이 가장 적은 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon Macie에서 검색 작업을 생성합니다. 민감한 데이터를 찾아 마스킹하도록 작업을 구성합니다.",
      "B": "AWS Glue 작업에서 실행할 Apache Spark 코드를 생성합니다. AWS Glue의 민감한 데이터 감지 기능을 사용하여 민감한 데이터를 찾아 마스킹합니다.",
      "C": "AWS Glue 작업에서 실행할 Apache Spark 코드를 생성합니다. 정규식 작업을 수행하여 민감한 데이터를 찾아 마스킹하도록 코드를 프로그래밍합니다.",
      "D": "Amazon EC2 인스턴스에서 실행할 Apache Spark 코드를 생성합니다. 민감한 데이터를 찾아 마스킹하도록 코드를 프로그래밍합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue — 완전관리형 ETL 서비스로 자동으로 민감한 데이터 감지 기능 제공\n▸ Amazon Macie — PII 검색에 특화되나 마스킹 자동화 미지원\n▸ Regex (정규식) — 신용카드 패턴을 수동으로 일일이 작성해야 함\n\n【정답 포인트】\n\"Sensitive Data Detection functionality\" → AWS Glue는 기본 제공 라이브러리로 신용카드, SSN 등 패턴을 자동 인식하므로, 개발자가 정규식을 직접 작성할 필요가 없음. Apache Spark 환경에서 즉시 사용 가능하여 개발 시간 최소화.\n\n【오답 체크】\n(A) Amazon Macie — PII 발견에는 탁월하나 마스킹 자동화 기능이 없어 추가 개발 필요\n(C) 정규식 코드 — 신용카드 번호 패턴을 개발자가 정규식으로 직접 작성/검증해야 하므로 개발 시간 증가\n(D) EC2 + Spark — Glue의 관리형 환경을 포기하고 인스턴스 관리 오버헤드 발생\n\n【시험 포인트】\n\"LEAST development effort\" 키워드 → 기본 제공 기능(Sensitive Data Detection)이 있는 서비스 선택. AWS Glue의 내장 민감 데이터 라이브러리는 정규식 작성을 대체하는 효율적 솔루션.",
    "en_q": "A company receives daily .csv files about customer interactions with its ML model. The company stores the files in Amazon S3 and uses the files to retrain the model. An ML engineer needs to implement a solution to mask credit card numbers in the files before the model is retrained. Which solution will meet this requirement with the LEAST development effort?",
    "en_opts": {
      "A": "Create a discovery job in Amazon Macie. Configure the job to find and mask sensitive data.",
      "B": "Create Apache Spark code to run on an AWS Glue job. Use the Sensitive Data Detection functionality in AWS Glue to find and mask sensitive data.",
      "C": "Create Apache Spark code to run on an AWS Glue job. Program the code to perform a regex operation to find and mask sensitive data.",
      "D": "Create Apache Spark code to run on an Amazon EC2 instance. Program the code to perform an operation to find and mask sensitive data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168863-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 106,
    "question": "한 의료회사가 환자에게 치료를 추천하는 도구를 구축하기 위해 AWS를 사용하고 있습니다. 회사는 환자로부터 영문 건강 기록과 자기보고식 텍스트 정보를 수집했습니다. 회사는 이 정보를 사용하여 환자에 대한 통찰력을 얻어야 합니다. 개발 노력이 가장 적은 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon SageMaker를 사용하여 데이터를 요약하는 순환신경망(RNN)을 구축합니다.",
      "B": "Amazon Comprehend Medical을 사용하여 데이터를 요약합니다.",
      "C": "Amazon Kendra를 사용하여 데이터를 쿼리하는 빠른 검색 도구를 생성합니다.",
      "D": "Amazon SageMaker 시퀀스-투-시퀀스(seq2seq) 알고리즘을 사용하여 데이터에서 텍스트 요약을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Comprehend Medical — 의료용 텍스트에서 엔티티, 관계, 속성을 자동 추출하는 사전학습 모델\n▸ SageMaker RNN/seq2seq — 처음부터 학습해야 하므로 개발 시간 소요\n▸ Amazon Kendra — 검색 엔진으로 요약이 아닌 검색에 최적화\n\n【정답 포인트】\n의료 텍스트 기반 \"insight 도출\" → Comprehend Medical은 의료 도메인에 특화된 사전학습 모델로, 약물, 질환, 증상, 용량 등을 자동으로 인식. 모델 학습 없이 즉시 API 호출로 결과 획득 가능.\n\n【오답 체크】\n(A) SageMaker RNN — 충분한 학습 데이터 확보, 모델 구축 및 튜닝에 시간과 비용 소요\n(C) Amazon Kendra — 검색/정보 검색 목적으로 설계되었으며 NLP 요약 기능 미지원\n(D) seq2seq 알고리즘 — 커스텀 모델 학습이 필요하여 개발 시간 최대\n\n【시험 포인트】\n의료(Medical) + 텍스트 분석 + \"LEAST development effort\" → Comprehend Medical 같은 도메인 특화 관리형 서비스 선택. 도메인 특화 모델이 가장 빠르고 신뢰도 높음.",
    "en_q": "A medical company is using AWS to build a tool to recommend treatments for patients. The company has obtained health records and self-reported textual information in English from patients. The company needs to use this information to gain insight about the patients. Which solution will meet this requirement with the LEAST development effort?",
    "en_opts": {
      "A": "Use Amazon SageMaker to build a recurrent neural network (RNN) to summarize the data.",
      "B": "Use Amazon Comprehend Medical to summarize the data.",
      "C": "Use Amazon Kendra to create a quick-search tool to query the data.",
      "D": "Use the Amazon SageMaker Sequence-to-Sequence (seq2seq) algorithm to create a text summary from the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168864-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 107,
    "question": "한 회사가 PDF 문서에서 엔티티를 추출하여 분류 모델을 구축해야 합니다. 엔티티를 추출하고 저장하는 시간이 가장 적은 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon Comprehend를 사용하여 엔티티를 추출합니다. 출력을 Amazon S3에 저장합니다.",
      "B": "Amazon SageMaker에서 오픈소스 AI 광학 문자 인식(OCR) 도구를 사용하여 엔티티를 추출합니다. 출력을 Amazon S3에 저장합니다.",
      "C": "Amazon Textract를 사용하여 엔티티를 추출합니다. Amazon Comprehend를 사용하여 엔티티를 텍스트로 변환합니다. 출력을 Amazon S3에 저장합니다.",
      "D": "Amazon Textract와 Amazon Augmented AI(Amazon A2I)를 통합하여 엔티티를 추출합니다. 출력을 Amazon S3에 저장합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Textract — PDF/스캔 이미지에서 텍스트 추출하는 OCR 도구\n▸ Amazon Comprehend — 추출된 텍스트에서 엔티티 인식(NER) 수행\n▸ Amazon A2I — 휴먼 인-더-루프 검증(느림)\n\n【정답 포인트】\n\"extract and store entities in the LEAST amount of time\" → PDF에서 직접 엔티티 추출을 원한다면? Comprehend는 텍스트 입력으로 즉시 엔티티를 추출 가능. Textract는 OCR 전처리 단계이므로 불필요한 오버헤드. 직접 PDF 텍스트를 Comprehend에 전달하면 가장 빠름.\n\n【오답 체크】\n(B) 오픈소스 OCR + SageMaker — OCR 도구를 SageMaker에서 실행하는 관리 오버헤드, 엔티티 추출 추가 필요\n(C) Textract + Comprehend 조합 — OCR(Textract)에서 텍스트 추출 후 Comprehend 호출은 2단계 처리로 시간 증가\n(D) Textract + A2I — 휴먼 검증 루프가 포함되어 자동화된 시간이 아니라 사람 개입으로 시간 대폭 증가\n\n【시험 포인트】\nPDF에서 엔티티 추출 → PDF가 텍스트 기반이라면 Comprehend만으로 충분. Textract는 스캔 이미지 같은 OCR이 필요한 경우에만 사용. 문제에서 \"entities in PDF\"는 대개 텍스트 PDF를 의미하므로 Comprehend 직접 사용이 최적.",
    "en_q": "A company needs to extract entities from a PDF document to build a classifier model. Which solution will extract and store the entities in the LEAST amount of time?",
    "en_opts": {
      "A": "Use Amazon Comprehend to extract the entities. Store the output in Amazon S3.",
      "B": "Use an open source AI optical character recognition (OCR) tool on Amazon SageMaker to extract the entities. Store the output in Amazon S3.",
      "C": "Use Amazon Textract to extract the entities. Use Amazon Comprehend to convert the entities to text. Store the output in Amazon S3.",
      "D": "Use Amazon Textract integrated with Amazon Augmented AI (Amazon A2I) to extract the entities. Store the output in Amazon S3."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168865-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 108,
    "question": "한 회사가 VPN을 통해 접근 가능한 Amazon SageMaker Studio 노트북을 공유하고 있습니다. 회사는 악의적인 행위자가 사전 서명된 URL을 악용하여 노트북에 접근하는 것을 방지하기 위해 접근 제어를 적용해야 합니다. 이 요구사항을 충족하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "aws:sourceIp IAM 정책 조건을 사용하여 Studio 클라이언트 IP 검증을 설정합니다.",
      "B": "aws:sourceVpc IAM 정책 조건을 사용하여 Studio 클라이언트 VPC 검증을 설정합니다.",
      "C": "aws:PrimaryTag IAM 정책 조건을 사용하여 Studio 클라이언트 역할 엔드포인트 검증을 설정합니다.",
      "D": "aws:PrincipalTag IAM 정책 조건을 사용하여 Studio 클라이언트 사용자 엔드포인트 검증을 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ aws:sourceIp — 요청 출처 IP 주소 기반 접근 제어\n▸ aws:sourceVpc — 요청 출처 VPC 기반 접근 제어\n▸ Presigned URL — 임시 인증 토큰 포함 URL로 외부 공유 시 악용 위험\n\n【정답 포인트】\n\"presigned URLs\" 악용 방지 → 사전 서명된 URL은 정당한 사용자가 생성하지만, 악의적 행위자가 탈취하면 어디서든 사용 가능. VPN을 통한 제한된 네트워크만 허용하려면, IP 기반 정책(aws:sourceIp)으로 특정 VPN IP 범위만 승인하여 외부 사용 차단.\n\n【오답 체크】\n(B) aws:sourceVpc — VPC 기반 제어는 VPC 엔드포인트 사용 시에만 적용되며, presigned URL 악용 방지에는 직접적 연관성 약함\n(C) aws:PrimaryTag — 역할(Role) 자체의 태그로 접근자 신원 검증 불가. VPN IP 제한과 무관\n(D) aws:PrincipalTag — 사용자(Principal) 태그로 신원 검증하나, presigned URL은 토큰 탈취 시 사용자 신원 우회 가능\n\n【시험 포인트】\nPresigned URL 악용 방지 + VPN 제한 환경 → IP 기반 정책(aws:sourceIp)으로 특정 네트워크 IP 범위만 허용하여 VPN 외부 접근 차단. 가장 직접적인 보안 메커니즘.",
    "en_q": "A company shares Amazon SageMaker Studio notebooks that are accessible through a VPN. The company must enforce access controls to prevent malicious actors from exploiting presigned URLs to access the notebooks. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Set up Studio client IP validation by using the aws:sourceIp IAM policy condition.",
      "B": "Set up Studio client VPC validation by using the aws:sourceVpc IAM policy condition.",
      "C": "Set up Studio client role endpoint validation by using the aws:PrimaryTag IAM policy condition.",
      "D": "Set up Studio client user endpoint validation by using the aws:PrincipalTag IAM policy condition."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/157638-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 109,
    "question": "ML 엔지니어가 두 소스의 데이터를 병합 및 변환하여 기존 ML 모델을 재학습해야 합니다. 한 데이터 소스는 Amazon S3 버킷에 저장된 .csv 파일입니다. 각 .csv 파일은 수백만 개의 레코드로 구성됩니다. 다른 데이터 소스는 Amazon Aurora DB 클러스터입니다. 병합 프로세스의 결과는 두 번째 S3 버킷에 기록되어야 합니다. ML 엔지니어는 매주 이 병합 및 변환 작업을 수행해야 합니다. 운영 부담이 가장 적은 솔루션은 어느 것입니까?",
    "options": {
      "A": "매주 일시적인 Amazon EMR 클러스터를 생성합니다. 클러스터를 사용하여 Apache Spark 작업을 실행하여 데이터를 병합 및 변환합니다.",
      "B": "Apache Spark 엔진을 사용하는 주간 AWS Glue 작업을 생성합니다. DynamicFrame 기본 작업을 사용하여 데이터를 병합 및 변환합니다.",
      "C": "매주 Apache Spark 코드를 실행하는 AWS Lambda 함수를 생성합니다. Lambda 함수를 구성하여 초기 S3 버킷과 DB 클러스터에 연결하도록 합니다.",
      "D": "매주 Amazon EC2 인스턴스에서 Apache Spark 코드를 실행하는 AWS Batch 작업을 생성합니다. Spark 코드를 구성하여 EC2 인스턴스의 데이터를 두 번째 S3 버킷에 저장하도록 합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue — 관리형 ETL 서비스, 자동 스케일링, 메타데이터 카탈로그 제공\n▸ DynamicFrame — Glue의 네이티브 데이터 구조, 스키마 유연성 제공\n▸ Amazon EMR — Spark 클러스터 관리 필요 (운영 오버헤드)\n▸ AWS Lambda — 최대 15분 제한으로 수백만 레코드 처리 부적합\n\n【정답 포인트】\n\"LEAST operational overhead\" + 주간 병합 작업 → AWS Glue는 관리형 서비스로 클러스터 생성/해제 자동화, 메타데이터 자동 관리. DynamicFrame의 기본 작업(join, transform)으로 명시적 Spark 코드 최소화. S3-Aurora 연결도 Glue가 자동 처리.\n\n【오답 체크】\n(A) EMR 클러스터 — 매주 클러스터 생성/구성/삭제 운영, 비용 최적화 고려 필요\n(C) Lambda — 15분 타임아웃 제한으로 수백만 레코드 처리 불가능, 작은 데이터셋에만 적합\n(D) AWS Batch + EC2 — EC2 인스턴스 관리, 비용 계산, 클러스터 구성 필요로 운영 복잡도 높음\n\n【시험 포인트】\n\"운영 부담이 적은\" + \"매주 반복\" + \"대규모 ETL\" → Glue 같은 완전관리형 서비스 우선. EMR은 더 세밀한 제어 필요할 때만 선택.",
    "en_q": "An ML engineer needs to merge and transform data from two sources to retrain an existing ML model. One data source consists of .csv files that are stored in an Amazon S3 bucket. Each .csv file consists of millions of records. The other data source is an Amazon Aurora DB cluster. The result of the merge process must be written to a second S3 bucket. The ML engineer needs to perform this merge-and-transform task every week. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create a transient Amazon EMR cluster every week. Use the cluster to run an Apache Spark job to merge and transform the data.",
      "B": "Create a weekly AWS Glue job that uses the Apache Spark engine. Use DynamicFrame native operations to merge and transform the data.",
      "C": "Create an AWS Lambda function that runs Apache Spark code every week to merge and transform the data. Configure the Lambda function to connect to the initial S3 bucket and the DB cluster.",
      "D": "Create an AWS Batch job that runs Apache Spark code on Amazon EC2 instances every week. Configure the Spark code to save the data from the EC2 instances to the second S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169506-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 110,
    "question": "ML 엔지니어가 Amazon SageMaker 모델을 프로덕션 서버리스 엔드포인트에 배포했습니다. 모델은 InvokeEndpoint API 작업으로 호출됩니다. 프로덕션의 모델 지연 시간이 테스트 환경의 기준 지연 시간보다 높습니다. ML 엔지니어는 지연 시간 증가가 모델 시작 시간 때문이라고 생각합니다. 이 가설을 확인 또는 부정하기 위해 ML 엔지니어가 해야 할 일은 무엇입니까?",
    "options": {
      "A": "SageMaker Model Monitor 작업을 예약합니다. 모델 품질에 대한 메트릭을 관찰합니다.",
      "B": "Amazon CloudWatch 메트릭을 활성화하여 SageMaker Model Monitor 작업을 예약합니다.",
      "C": "Amazon CloudWatch 메트릭을 활성화합니다. SageMaker 네임스페이스에서 ModelSetupTime 메트릭을 관찰합니다.",
      "D": "Amazon CloudWatch 메트릭을 활성화합니다. SageMaker 네임스페이스에서 ModelLoadingWaitTime 메트릭을 관찰합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ ModelSetupTime — 서버리스 엔드포인트 콜드 스타트 시 모델 초기화 및 로딩 시간\n▸ ModelLoadingWaitTime — 존재하지 않는 메트릭\n▸ Model Monitor — 데이터 품질, 모델 품질, 편향 탐지용으로 지연 시간 측정 목적 아님\n\n【정답 포인트】\n\"모델 시작 시간\"(model startup time) 확인 → 서버리스 엔드포인트는 콜드 스타트(요청 시 인스턴스 생성)로 인해 지연 발생. SageMaker CloudWatch 네임스페이스의 ModelSetupTime 메트릭은 정확히 이 초기화 단계 시간을 기록. 가설 검증에 직접 유용.\n\n【오답 체크】\n(A) Model Monitor — 데이터 품질(drift), 모델 품질 모니터링용. 지연 시간 분석과 무관\n(B) CloudWatch 메트릭 활성화 + Model Monitor — Model Monitor는 시작 시간 메트릭 제공 안함\n(D) ModelLoadingWaitTime — SageMaker에 존재하지 않는 공식 메트릭명. 정확한 메트릭은 ModelSetupTime\n\n【시험 포인트】\n서버리스 엔드포인트 + \"latency 증가\" + \"startup time 원인 규명\" → ModelSetupTime 메트릭이 정답. SageMaker의 정확한 메트릭명 암기 필수.",
    "en_q": "An ML engineer has deployed an Amazon SageMaker model to a serverless endpoint in production. The model is invoked by the InvokeEndpoint API operation. The model's latency in production is higher than the baseline latency in the test environment. The ML engineer thinks that the increase in latency is because of model startup time. What should the ML engineer do to confirm or deny this hypothesis?",
    "en_opts": {
      "A": "Schedule a SageMaker Model Monitor job. Observe metrics about model quality.",
      "B": "Schedule a SageMaker Model Monitor job with Amazon CloudWatch metrics enabled.",
      "C": "Enable Amazon CloudWatch metrics. Observe the ModelSetupTime metric in the SageMaker namespace.",
      "D": "Enable Amazon CloudWatch metrics. Observe the ModelLoadingWaitTime metric in the SageMaker namespace."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168918-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 111,
    "question": "ML 엔지니어가 개인식별정보(PII)에 대한 규정을 준수하도록 데이터셋을 보장해야 합니다. ML 엔지니어는 Amazon SageMaker 인스턴스에서 ML 모델을 학습하는 데 데이터를 사용합니다. SageMaker는 PII를 전혀 사용하지 않아야 합니다. 이 요구사항을 가장 운영적으로 효율적인 방식으로 충족하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon Comprehend DetectPiiEntities API 호출을 사용하여 데이터의 PII를 삭제합니다. Amazon S3 버킷에 데이터를 저장합니다. SageMaker 인스턴스에서 S3 버킷에 접근하여 모델을 학습합니다.",
      "B": "Amazon Comprehend DetectPiiEntities API 호출을 사용하여 데이터의 PII를 삭제합니다. Amazon Elastic File System(Amazon EFS) 파일 시스템에 데이터를 저장합니다. SageMaker 인스턴스에 EFS 파일 시스템을 마운트하여 모델을 학습합니다.",
      "C": "AWS Glue DataBrew를 사용하여 PII의 데이터셋을 정제합니다. Amazon Elastic File System(Amazon EFS) 파일 시스템에 데이터를 저장합니다. SageMaker 인스턴스에 EFS 파일 시스템을 마운트하여 모델을 학습합니다.",
      "D": "PII를 자동으로 발견하기 위해 Amazon Macie를 사용합니다. PII를 제거합니다. Amazon S3 버킷에 데이터를 저장합니다. S3 버킷을 SageMaker 인스턴스에 마운트하여 모델을 학습합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Comprehend DetectPiiEntities — PII 자동 감지 및 마스킹 API\n▸ AWS Glue DataBrew — UI 기반 데이터 정제 도구 (관리 오버헤드)\n▸ Amazon Macie — 발견만 제공, 자동 마스킹 미지원\n▸ Amazon EFS — 추가 네트워크 I/O 오버헤드\n\n【정답 포인트】\n\"가장 운영적으로 효율적인\" → PII 감지/제거는 API 호출로 자동화 가능. Comprehend DetectPiiEntities는 단 2줄 코드로 PII를 감지하고 마스킹. 정제된 데이터를 S3에 저장하면 SageMaker 학습 시 표준 S3 연결 사용 가능. 관리 오버헤드 최소.\n\n【오답 체크】\n(B) EFS 마운트 — S3보다 높은 네트워크 I/O 비용과 마운트 구성 복잡도 증가\n(C) DataBrew — UI 기반 시각적 정제로 자동화 어려움. 규칙 정의 및 관리 오버헤드 증가\n(D) Macie — PII 자동 발견만 가능하고 마스킹 기능 미지원. 제거 후 저장 프로세스 추가 필요\n\n【시험 포인트】\nPII 규정 준수 + \"운영 효율\" → Comprehend API 자동화 + S3 저장이 가장 간단. DataBrew는 관리 UI 오버헤드, Macie는 발견만 지원.",
    "en_q": "An ML engineer needs to ensure that a dataset complies with regulations for personally identifiable information (PII). The ML engineer will use the data to train an ML model on Amazon SageMaker instances. SageMaker must not use any of the PII. Which solution will meet these requirements in the MOST operationally efficient way?",
    "en_opts": {
      "A": "Use the Amazon Comprehend DetectPiiEntities API call to redact the PII from the data. Store the data in an Amazon S3 bucket. Access the S3 bucket from the SageMaker instances for model training.",
      "B": "Use the Amazon Comprehend DetectPiiEntities API call to redact the PII from the data. Store the data in an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system to the SageMaker instances for model training.",
      "C": "Use AWS Glue DataBrew to cleanse the dataset of PII. Store the data in an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system to the SageMaker instances for model training.",
      "D": "Use Amazon Macie for automatic discovery of PII in the data. Remove the PII. Store the data in an Amazon S3 bucket. Mount the S3 bucket to the SageMaker instances for model training."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169509-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 112,
    "question": "한 회사가 새로 생성된 Amazon SageMaker 노트북 인스턴스에 커스텀 스크립트를 설치해야 합니다. 운영 부담이 가장 적은 솔루션은 어느 것입니까?",
    "options": {
      "A": "새로운 SageMaker 노트북이 생성될 때 커스텀 스크립트를 설치하는 라이프사이클 구성 스크립트를 생성합니다. 생성 단계의 일부로 새로운 모든 SageMaker 노트북에 라이프사이클 구성을 첨부합니다.",
      "B": "커스텀 스크립트를 포함하는 커스텀 Amazon Elastic Container Registry(Amazon ECR) 이미지를 생성합니다. ECR 이미지를 Docker 레지스트리에 푸시합니다. Docker 이미지를 SageMaker Studio 도메인에 첨부합니다. 노트북 커널로 실행하도록 커널을 선택합니다.",
      "C": "커스텀 패키지 인덱스 저장소를 생성합니다. AWS CodeArtifact를 사용하여 커스텀 스크립트 설치를 관리합니다. CodeArtifact를 SageMaker 인스턴스에 연결하도록 AWS PrivateLink 엔드포인트를 설정합니다. 스크립트를 설치합니다.",
      "D": "커스텀 스크립트를 Amazon S3에 저장합니다. 새로운 SageMaker 노트북에 커스텀 스크립트를 설치하는 AWS Lambda 함수를 생성합니다. 새로운 SageMaker 노트북이 초기화될 때 Lambda 함수를 호출하도록 Amazon EventBridge를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Lifecycle Configuration — SageMaker 노트북 생성/시작 시 자동 실행 스크립트\n▸ ECR + Docker — 컨테이너 레지스트리 관리 오버헤드\n▸ CodeArtifact — 패키지 저장소 관리 (복잡도 증가)\n▸ Lambda + EventBridge — 이벤트 기반 트리거로 불필요한 복잡도\n\n【정답 포인트】\n\"새로운 노트북 인스턴스에 자동 설치\" + \"운영 부담 최소\" → Lifecycle Configuration은 SageMaker 네이티브 기능으로, 노트북 생성 옵션에 직접 첨부. 노트북 생성 시 자동 실행되므로 별도 트리거/이벤트 처리 불필요. 가장 간단한 솔루션.\n\n【오답 체크】\n(B) ECR + Docker — 이미지 빌드, 레지스트리 관리, Studio 도메인 통합 모두 수동 작업 필요\n(C) CodeArtifact + PrivateLink — 패키지 저장소 생성 및 관리로 복잡도 대폭 증가\n(D) Lambda + EventBridge — EventBridge 규칙 생성, Lambda 함수 배포, 권한 설정 등 여러 단계 필요\n\n【시험 포인트】\nSageMaker 노트북 자동 설정 → Lifecycle Configuration이 표준 솔루션. 생성 시점에 자동 실행되는 네이티브 기능 활용이 핵심.",
    "en_q": "A company must install a custom script on any newly created Amazon SageMaker notebook instances. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create a lifecycle configuration script to install the custom script when a new SageMaker notebook is created. Attach the lifecycle configuration to every new SageMaker notebook as part of the creation steps.",
      "B": "Create a custom Amazon Elastic Container Registry (Amazon ECR) image that contains the custom script. Push the ECR image to a Docker registry. Attach the Docker image to a SageMaker Studio domain. Select the kernel to run as part of the SageMaker notebook.",
      "C": "Create a custom package index repository. Use AWS CodeArtifact to manage the installation of the custom script. Set up AWS PrivateLink endpoints to connect CodeArtifact to the SageMaker instance. Install the script.",
      "D": "Store the custom script in Amazon S3. Create an AWS Lambda function to install the custom script on new SageMaker notebooks. Configure Amazon EventBridge to invoke the Lambda function when a new SageMaker notebook is initialized."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169510-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 113,
    "question": "한 회사가 전자상거래 애플리케이션을 위한 실시간 데이터 처리 파이프라인을 구축하고 있습니다. 애플리케이션은 거의 실시간으로 수집, 처리 및 시각화되어야 하는 높은 볼륨의 클릭스트림 데이터를 생성합니다. 회사는 데이터 처리용 SQL과 상호작용형 분석용 Jupyter 노트북을 지원하는 솔루션이 필요합니다. 이 요구사항을 충족하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon Data Firehose를 사용하여 데이터를 수집합니다. AWS Lambda 함수를 생성하여 데이터를 처리합니다. 처리된 데이터를 Amazon S3에 저장합니다. Amazon QuickSight를 사용하여 데이터를 시각화합니다.",
      "B": "Amazon Kinesis Data Streams를 사용하여 데이터를 수집합니다. Amazon Data Firehose를 사용하여 데이터를 변환합니다. Amazon Athena를 사용하여 데이터를 처리합니다. Amazon QuickSight를 사용하여 데이터를 시각화합니다.",
      "C": "Amazon Managed Streaming for Apache Kafka(Amazon MSK)를 사용하여 데이터를 수집합니다. AWS Glue with PySpark를 사용하여 데이터를 처리합니다. 처리된 데이터를 Amazon S3에 저장합니다. Amazon QuickSight를 사용하여 데이터를 시각화합니다.",
      "D": "Amazon Managed Streaming for Apache Kafka(Amazon MSK)를 사용하여 데이터를 수집합니다. Amazon Managed Service for Apache Flink를 사용하여 데이터를 처리합니다. 기본 제공 Flink 대시보드를 사용하여 데이터를 시각화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Amazon MSK — 고성능 스트림 처리용 관리형 Kafka\n▸ Amazon Managed Service for Apache Flink — SQL + Jupyter 지원하는 실시간 스트림 처리\n▸ Amazon Kinesis Data Streams — 실시간 처리 가능하나 Jupyter 미지원\n▸ Amazon Athena — 배치 쿼리용으로 실시간 처리 부적합\n\n【정답 포인트】\n\"SQL for processing\" + \"Jupyter notebooks\" + \"near real time\" → Apache Flink는 SQL 쿼리(Flink SQL)와 Jupyter 노트북 통합을 모두 지원하는 유일한 오픈소스 스트림 처리 엔진. MSK에서 높은 볼륨 데이터를 수집하고 Flink에서 실시간 SQL 처리 및 Jupyter 분석 모두 가능.\n\n【오답 체크】\n(A) Firehose + Lambda + S3 — Jupyter 노트북 지원 미흡, Lambda는 SQL 쿼리 미지원\n(B) Kinesis + Athena — Athena는 배치 쿼리 도구로 \"near real time\" 미지원. Jupyter 노트북 적분 약함\n(C) MSK + Glue PySpark — PySpark는 SQL 지원하나 Jupyter와의 통합이 약함. 배치 성격의 Glue는 실시간 처리에 부적합\n\n【시험 포인트】\n\"SQL\" + \"Jupyter\" + \"streaming\" + \"near real time\" 모두 만족 → Apache Flink 관리형 서비스 선택. SQL + Jupyter 동시 지원 유일한 솔루션.",
    "en_q": "A company is building a real-time data processing pipeline for an ecommerce application. The application generates a high volume of clickstream data that must be ingested, processed, and visualized in near real time. The company needs a solution that supports SQL for data processing and Jupyter notebooks for interactive analysis. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon Data Firehose to ingest the data. Create an AWS Lambda function to process the data. Store the processed data in Amazon S3. Use Amazon QuickSight to visualize the data.",
      "B": "Use Amazon Kinesis Data Streams to ingest the data. Use Amazon Data Firehose to transform the data. Use Amazon Athena to process the data. Use Amazon QuickSight to visualize the data.",
      "C": "Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to ingest the data. Use AWS Glue with PySpark to process the data. Store the processed data in Amazon S3. Use Amazon QuickSight to visualize the data.",
      "D": "Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to ingest the data. Use Amazon Managed Service for Apache Flink to process the data. Use the built-in Flink dashboard to visualize the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168979-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 114,
    "question": "한 의료회사가 임상 데이터를 저장해야 합니다. 데이터에는 개인식별정보(PII)와 보호된 건강정보(PHI)가 포함됩니다. ML 엔지니어는 PII와 PHI가 ML 모델을 학습하는 데 사용되지 않도록 솔루션을 구현해야 합니다. 이 요구사항을 충족하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "임상 데이터를 Amazon S3 버킷에 저장합니다. AWS Glue DataBrew를 사용하여 모델 학습에 사용되기 전에 PII와 PHI를 마스킹합니다.",
      "B": "임상 데이터를 Amazon Redshift 데이터베이스에 업로드합니다. 기본 제공 SQL 저장 프로시저를 사용하여 모델 학습에 사용되기 전에 자동으로 PII와 PHI를 분류하고 마스킹합니다.",
      "C": "Amazon Comprehend를 사용하여 모델 학습에 사용되기 전에 PII를 감지하고 마스킹합니다. Amazon Comprehend Medical을 사용하여 모델 학습에 사용되기 전에 PHI를 감지하고 마스킹합니다.",
      "D": "PII와 PHI를 암호화하는 AWS Lambda 함수를 생성합니다. 암호화된 데이터를 Amazon S3 버킷에 저장하도록 Lambda 함수를 프로그래밍합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon Comprehend — 일반 텍스트의 PII (이름, SSN, 주소) 감지\n▸ Amazon Comprehend Medical — 의료 특화 PHI (약물, 질환, 환자명, 의료기록번호) 감지\n▸ AWS Glue DataBrew — UI 기반 데이터 정제로 PII/PHI 자동화 어려움\n▸ 암호화 — 마스킹이 아닌 암호화는 모델 학습에 방해요소\n\n【정답 포인트】\nPII + PHI 동시 제거 → PII와 PHI는 완전히 다른 도메인. Comprehend는 일반적 개인정보(이름, 이메일), Comprehend Medical은 의료 용어(약물명, 진단코드, 의료기록번호) 인식. 두 서비스를 순차적으로 사용하면 모든 민감정보 마스킹 가능.\n\n【오답 체크】\n(A) DataBrew — UI 기반 정제로 자동화된 PII/PHI 감지 규칙 구성 복잡. 정기적 업데이트 어려움\n(B) Redshift SQL 저장프로시저 — SQL만으로는 의료용어(PHI) 패턴 인식 한계. 커스텀 로직 필요로 복잡\n(D) 암호화 — 암호화된 데이터는 모델이 학습 불가. 마스킹과 암호화 다름\n\n【시험 포인트】\nPII + PHI 감지 동시 필요 → 도메인별 전문화된 Comprehend 서비스 두 개 조합. 일반 Comprehend + 의료 특화 Comprehend Medical 순서로 사용.",
    "en_q": "A medical company needs to store clinical data. The data includes personally identifiable information (PII) and protected health information (PHI). An ML engineer needs to implement a solution to ensure that the PII and PHI are not used to train ML models. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Store the clinical data in Amazon S3 buckets. Use AWS Glue DataBrew to mask the PII and PHI before the data is used for model training.",
      "B": "Upload the clinical data to an Amazon Redshift database. Use built-in SQL stored procedures to automatically classify and mask the PII and PHI before the data is used for model training.",
      "C": "Use Amazon Comprehend to detect and mask the PII before the data is used for model training. Use Amazon Comprehend Medical to detect and mask the PHI before the data is used for model training.",
      "D": "Create an AWS Lambda function to encrypt the PII and PHI. Program the Lambda function to save the encrypted data to an Amazon S3 bucket for model training."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169514-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 115,
    "question": "ML 엔지니어가 분류 모델을 개발하고 있습니다. ML 엔지니어는 Amazon SageMaker의 처리 작업, 학습 작업 및 파이프라인에서 커스텀 라이브러리를 사용해야 합니다. 이 기능을 제공하는 솔루션 중 구현 노력이 가장 적은 것은 어느 것입니까?",
    "options": {
      "A": "SageMaker 컨테이너에 라이브러리를 수동으로 설치합니다.",
      "B": "필요한 라이브러리를 포함하는 커스텀 Docker 컨테이너를 구축합니다. 컨테이너를 Amazon Elastic Container Registry(Amazon ECR)에 호스트합니다. SageMaker 작업 및 파이프라인에서 ECR 이미지를 사용합니다.",
      "C": "작업을 호스트할 SageMaker 노트북 인스턴스를 생성합니다. 노트북 인스턴스가 시작될 때 인스턴스에 라이브러리를 설치하는 AWS Lambda 함수를 생성합니다. SageMaker 작업 및 파이프라인을 노트북 인스턴스에서 실행하도록 구성합니다.",
      "D": "라이브러리 코드를 Amazon EC2 인스턴스에서 외부적으로 실행합니다. Amazon S3에 결과를 저장합니다. SageMaker 작업 및 파이프라인에 결과를 가져옵니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Custom Docker Container — 모든 처리/학습/파이프라인 작업에서 재사용 가능\n▸ ECR (Elastic Container Registry) — 완전관리형 컨테이너 저장소\n▸ 수동 설치 — 매번 인스턴스마다 반복해야 함\n▸ Lambda + 노트북 — 노트북 인스턴스 관리 오버헤드\n\n【정답 포인트】\n\"처리 작업, 학습 작업, 파이프라인\" 모두에서 커스텀 라이브러리 필요 → 커스텀 Docker 이미지를 ECR에 저장하면, SageMaker 모든 작업 타입에서 동일 이미지 참조 가능. 라이브러리 버전 일관성 유지, 이미지 재구축 시 모든 작업 자동 반영.\n\n【오답 체크】\n(A) 수동 설치 — 처리/학습/파이프라인 작업마다 반복 설치. 라이브러리 버전 일관성 관리 불가\n(C) Lambda + Notebook — 노트북 인스턴스 생성/관리 오버헤드. 파이프라인 통합 복잡\n(D) EC2 외부 실행 — 결과만 S3에 저장하므로, 작업 내 라이브러리 사용 불가. 파이프라인 통합 불가능\n\n【시험 포인트】\n\"처리/학습/파이프라인\" 모든 컨텍스트에서 커스텀 라이브러리 필요 → Docker 이미지 한 번 구축 후 ECR에 저장. 모든 SageMaker 작업에서 동일 이미지 참조하는 것이 가장 효율적.",
    "en_q": "An ML engineer is developing a classification model. The ML engineer needs to use custom libraries in processing jobs, training jobs, and pipelines in Amazon SageMaker. Which solution will provide this functionality with the LEAST implementation effort?",
    "en_opts": {
      "A": "Manually install the libraries in the SageMaker containers.",
      "B": "Build a custom Docker container that includes the required libraries. Host the container in Amazon Elastic Container Registry (Amazon ECR). Use the ECR image in the SageMaker jobs and pipelines.",
      "C": "Create a SageMaker notebook instance to host the jobs. Create an AWS Lambda function to install the libraries on the notebook instance when the notebook instance starts. Configure the SageMaker jobs and pipelines to run on the notebook instance.",
      "D": "Run code for the libraries externally on Amazon EC2 instances. Store the results in Amazon S3. Import the results into the SageMaker jobs and pipelines."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315658-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 116,
    "question": "ML 엔지니어가 학습된 모델을 Amazon SageMaker 엔드포인트에 배포하고 있습니다. ML 엔지니어는 프로덕션에서 데이터 품질 문제가 발생할 때 알림을 받아야 합니다. 이 요구사항을 충족하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon CloudWatch 메트릭 알람을 구성하고 Amazon Simple Notification Service(Amazon SNS) 알림을 보내는 해당 작업을 구성합니다.",
      "B": "SageMaker 엔드포인트를 SageMaker Clarify 처리 작업과 통합합니다. Amazon CloudWatch 알람을 제공하도록 구성합니다.",
      "C": "SageMaker Model Monitor에서 모니터링 작업을 구성합니다. Model Monitor를 Amazon CloudWatch와 통합하여 알림을 제공합니다.",
      "D": "SageMaker Data Wrangler에서 데이터 흐름을 구성합니다. Data Wrangler를 Amazon CloudWatch와 통합하여 알림을 제공합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Monitor — 프로덕션 모델의 데이터 품질(drift), 모델 품질, 편향 자동 감지\n▸ SageMaker Clarify — 모델 해석 가능성(explainability), 편향 분석용\n▸ CloudWatch 메트릭 알람 — 일반적 메트릭만 모니터링\n▸ SageMaker Data Wrangler — 데이터 전처리 도구\n\n【정답 포인트】\n\"데이터 품질 문제 감지\" → Model Monitor는 baseline 데이터와 비교하여 프로덕션 데이터의 drift(데이터 분포 변화), 누락된 값, 이상값 등 데이터 품질 문제를 자동 감지. CloudWatch와 통합하여 경보 설정 가능.\n\n【오답 체크】\n(A) CloudWatch 메트릭 알람 — 일반 시스템 메트릭(CPU, 메모리)만 모니터링 가능. 데이터 품질 drift 감지 불가\n(B) SageMaker Clarify — 모델 출력 해석가능성(feature importance) 및 편향 분석용. 데이터 품질 모니터링 목적 아님\n(D) SageMaker Data Wrangler — 데이터 정제/변환 도구로 실시간 모니터링 용도 아님\n\n【시험 포인트】\n\"데이터 품질 문제\" + \"프로덕션 모니터링\" → SageMaker Model Monitor 전용 솔루션. drift 감지 및 CloudWatch 알림 통합 표준 패턴.",
    "en_q": "An ML engineer is deploying a trained model to an Amazon SageMaker endpoint. The ML engineer needs to receive alerts when data quality issues occur in production. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Configure an Amazon CloudWatch metric alarm and a corresponding action to send an Amazon Simple Notification Service (Amazon SNS) notification.",
      "B": "Integrate the SageMaker endpoint with a SageMaker Clarify processing job. Configure an Amazon CloudWatch alarm to provide alerts.",
      "C": "Configure a monitoring job in SageMaker Model Monitor. Integrate Model Monitor with Amazon CloudWatch to provide alerts.",
      "D": "Configure a data flow in SageMaker Data Wrangler. Integrate Data Wrangler with Amazon CloudWatch to provide alerts."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315648-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 117,
    "question": "한 회사가 300GB 이상의 데이터로 모델을 학습하기 위해 Amazon SageMaker를 사용해야 합니다. 학습 데이터는 200MB 크기의 파일로 구성되어 있습니다. 데이터는 Amazon S3 Standard 스토리지에 저장되고 대시보드 도구를 제공합니다. 이 시나리오에 가장 비용 효율적인 SageMaker 학습 수집 메커니즘은 어느 것입니까?",
    "options": {
      "A": "Amazon Elastic File System(Amazon EFS) 파일 시스템",
      "B": "Amazon FSx for Lustre 파일 시스템",
      "C": "S3 Express One Zone을 사용하면서 S3 fast file 모드",
      "D": "S3 Express One Zone을 사용하지 않으면서 S3 fast file 모드"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 fast file 모드 — SageMaker에서 파일 단위로 병렬 다운로드 최적화\n▸ S3 Express One Zone — 고성능 S3이나 추가 비용 발생\n▸ Amazon FSx for Lustre — 고성능 파일시스템이나 높은 비용\n▸ Amazon EFS — NFS 프로토콜로 네트워크 I/O 오버헤드\n\n【정답 포인트】\n\"MOST cost-effective\" + 300GB + 200MB 파일 다수 → S3 fast file 모드는 S3 Standard에서 파일 병렬화를 통해 처리량 최적화. S3 Express One Zone 추가 비용 없이도 효율적 성능 달성. 대시보드 도구 연결도 S3 Standard 유지 가능.\n\n【오답 체크】\n(A) Amazon EFS — NFS 네트워크 오버헤드로 성능 낮음. 지속적 스토리지 비용 발생\n(B) FSx for Lustre — HPC 워크로드용 고성능이나 높은 월별 요금. 300GB 규모에는 과도한 비용\n(C) S3 Express One Zone — Express 티어는 1년 비용이 Standard의 수십 배. 300GB에는 비용 비효율\n\n【시험 포인트】\n\"비용 효율\" + \"S3 Standard\" + \"다수 파일\" → fast file 모드로 파일 병렬화. Express One Zone 추가 비용 회피가 정답.",
    "en_q": "A company needs to use Amazon SageMaker to train a model on more than 300 GB of data. The training data is composed of files that are 200 MB in size. The data is stored in Amazon S3 Standard storage and feeds a dashboard tool. Which SageMaker training ingestion mechanism is the MOST cost-effective solution for this scenario?",
    "en_opts": {
      "A": "Amazon Elastic File System (Amazon EFS) file system",
      "B": "Amazon FSx for Lustre file system",
      "C": "Amazon S3 in fast file mode while using S3 Express One Zone",
      "D": "Amazon S3 in fast file mode without using S3 Express One Zone"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315647-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 118,
    "question": "한 회사가 Amazon SageMaker 엔드포인트에 배포된 ML 모델을 보유하고 있습니다. 회사가 새로운 모델을 배포해야 합니다. 회사는 모든 트래픽을 새로운 모델로 전환하기 전에 새 모델의 성능을 현재 배포된 모델의 성능과 비교해야 합니다. 운영 노력이 가장 적은 솔루션은 어느 것입니까?",
    "options": {
      "A": "새 모델을 별도의 엔드포인트에 배포합니다. 두 엔드포인트 간 트래픽을 수동으로 분할합니다.",
      "B": "새 모델을 별도의 엔드포인트에 배포합니다. Amazon CloudFront를 사용하여 두 엔드포인트 간의 트래픽을 분배합니다.",
      "C": "현재 모델과 동일한 엔드포인트에서 새 모델을 섀도우 변형으로 배포합니다. 평가를 위해 실시간 트래픽의 일부를 섀도우 모델로 라우팅합니다.",
      "D": "현재 모델과 새로운 모델 간에 트래픽을 라우팅하기 위해 커스텀 로직이 있는 AWS Lambda 함수를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Shadow Variant — 프로덕션 트래픽 일부를 신규 모델로 라우팅하여 성능 테스트\n▸ A/B Testing (A/B 테스트) — SageMaker Endpoint에서 shadow variant로 구현 가능\n▸ 수동 트래픽 분할 — 운영 부담 증가\n▸ Lambda 커스텀 로직 — 라우팅 로직 유지보수 복잡\n\n【정답 포인트】\n\"새 모델 성능 비교\" + \"운영 노력 최소\" → SageMaker의 shadow variant 기능으로 기존 엔드포인트에 신규 모델 추가. 프로덕션 트래픽 일부(예: 10%)를 자동으로 섀도우 모델에 분산. 정성평가 후 트래픽 100% 전환으로 무중단 배포.\n\n【오답 체크】\n(A) 수동 분할 — 클라이언트 코드 수정으로 매요청마다 엔드포인트 선택 로직 필요. 운영 부담 증가\n(B) CloudFront — CDN은 캐싱으로 실시간 트래픽 분석에 부적합. 모델 성능 메트릭 수집 어려움\n(D) Lambda 커스텀 로직 — 라우팅 로직 배포, 에러 처리, 모니터링 모두 수동 구현. 유지보수 오버헤드\n\n【시험 포인트】\n\"A/B 테스트\" + \"새 모델 배포\" → SageMaker shadow variant 네이티브 기능 활용. 엔드포인트 레벨에서 자동 트래픽 분산으로 최소 운영 노력.",
    "en_q": "A company has an ML model that is deployed to an Amazon SageMaker endpoint for real-time inference. The company needs to deploy a new model. The company must compare the new model's performance to the currently deployed model's performance before shifting all traffic to the new model. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Deploy the new model to a separate endpoint. Manually split traffic between the two endpoints.",
      "B": "Deploy the new model to a separate endpoint. Use Amazon CloudFront to distribute traffic between the two endpoints.",
      "C": "Deploy the new model as a shadow variant on the same endpoint as the current model. Route a portion of live traffic to the shadow model for evaluation.",
      "D": "Use AWS Lambda functions with custom logic to route traffic between the current model and the new model."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315649-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 119,
    "question": "한 회사가 Amazon SageMaker에서 ML 모델을 실행합니다. 회사는 학습 작업을 생성하기 위해 API 호출을 하는 자동화된 프로세스를 사용합니다. 회사는 새로운 규정 준수 규칙이 학습 작업에서 집계된 메타데이터 수집을 금지한다고 합니다. SageMaker가 학습 작업에서 메타데이터를 수집하는 것을 방지하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "제출되는 학습 작업에 대해 메타데이터 추적을 거부합니다.",
      "B": "학습 작업이 커스텀 VPC의 프라이빗 서브넷에서 실행 중인지 확인합니다.",
      "C": "학습 데이터를 AWS Key Management Service(AWS KMS) 고객 관리 키로 암호화합니다.",
      "D": "AWS Nitro 인스턴스만 사용하도록 학습 작업을 재구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Metadata Tracking Opt-out — SageMaker API에서 학습 작업의 메타데이터 수집 거부 옵션\n▸ Private Subnet — 네트워크 격리이지 메타데이터 수집과 무관\n▸ KMS 암호화 — 데이터 암호화이지 메타데이터 수집 방지 아님\n▸ AWS Nitro — 인스턴스 타입 선택으로 메타데이터 수집 방지 불가\n\n【정답 포인트】\n\"aggregated metadata collection 금지\" → SageMaker CreateTrainingJob API에는 EnableManagedSpotTraining, MetadataServiceConfiguration 등 메타데이터 거부 옵션 존재. API 파라미터에서 명시적으로 메타데이터 추적 비활성화하면 AWS가 집계 메타데이터 수집 중단.\n\n【오답 체크】\n(B) Private Subnet — VPC 격리는 네트워크 보안이나, AWS 내부의 메타데이터 수집과는 독립적\n(C) KMS 고객 관리 키 — 데이터 암호화로 메타데이터 수집 방지 불가. 규정은 메타데이터 수집 자체 금지\n(D) AWS Nitro — 인스턴스 CPU 아키텍처로 메타데이터 정책 제어 불가\n\n【시험 포인트】\n\"메타데이터 수집 금지\" → SageMaker API에서 메타데이터 거부 옵션 명시적 활성화. CreateTrainingJob의 파라미터 검토 필수.",
    "en_q": "A company runs an ML model on Amazon SageMaker. The company uses an automatic process that makes API calls to create training jobs for the model. The company has new compliance rules that prohibit the collection of aggregated metadata from training jobs. Which solution will prevent SageMaker from collecting metadata from the training jobs?",
    "en_opts": {
      "A": "Opt out of metadata tracking for any training job that is submitted.",
      "B": "Ensure that training jobs are running in a private subnet in a custom VPC.",
      "C": "Encrypt the training data with an AWS Key Management Service (AWS KMS) customer managed key.",
      "D": "Reconfigure the training jobs to use only AWS Nitro instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315656-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 120,
    "question": "한 회사가 생성형 AI를 탐색하고 있으며 새로운 제품 기능을 추가하려고 합니다. ML 엔지니어는 기존 Amazon EC2 인스턴스에서 Amazon Bedrock으로 API 호출을 하고 있습니다. EC2 인스턴스는 프라이빗 서브넷에 있으며 구현 중에 프라이빗 상태를 유지해야 합니다. EC2 인스턴스에는 프라이빗 서브넷의 모든 IP 주소로의 접근을 허용하는 할당된 보안 그룹이 있습니다. ML 엔지니어는 EC2 인스턴스와 Amazon Bedrock 간의 연결을 설정하기 위해 어떻게 해야 합니까?",
    "options": {
      "A": "보안 그룹을 수정하여 Amazon Bedrock과의 인바운드 및 아웃바운드 트래픽을 허용합니다.",
      "B": "AWS PrivateLink를 사용하여 인터페이스 VPC 엔드포인트를 통해 Amazon Bedrock에 접근합니다.",
      "C": "EC2 인스턴스가 배포된 프라이빗 서브넷을 사용하도록 Amazon Bedrock을 구성합니다.",
      "D": "AWS Direct Connect 연결을 사용하여 기존 VPC를 Amazon Bedrock에 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS PrivateLink — VPC 엔드포인트를 통해 AWS 서비스에 프라이빗 연결\n▸ VPC Endpoint (Interface) — 서비스 API를 VPC 내부에서 호출 가능\n▸ 보안 그룹 수정 — 인터넷 게이트웨이 없이 외부 IP 접근 불가능하므로 효과 없음\n▸ Direct Connect — 데이터센터-AWS 간 전용 네트워크 연결로 과도\n\n【정답 포인트】\n\"프라이빗 서브넷 유지\" + \"Bedrock API 호출\" → AWS PrivateLink를 통해 VPC 내부에 Bedrock 인터페이스 엔드포인트 생성. 인터넷 게이트웨이 없이도 EC2에서 비공개로 Bedrock API 호출 가능. 보안 그룹은 VPC 엔드포인트의 보안 그룹만 열면 됨.\n\n【오답 체크】\n(A) 보안 그룹 수정 — EC2가 프라이빗 서브넷에 있고 인터넷 게이트웨이 없으면, 보안 그룹 규칙만으로는 Bedrock(퍼블릭 API) 접근 불가\n(C) Bedrock 프라이빗 구성 — Bedrock은 AWS 관리형 서비스로 고객이 VPC 구성 불가능\n(D) Direct Connect — 온프레미스와 AWS 간 전용 연결로 EC2-Bedrock 통신에는 필요 없음. 비용 과다\n\n【시험 포인트】\n\"프라이빗 서브넷\" + \"AWS 서비스 접근\" → PrivateLink를 통한 VPC 엔드포인트 표준 패턴. VPC 외부 서비스 비공개 접근 솔루션.",
    "en_q": "A company is exploring generative AI and wants to add a new product feature. An ML engineer is making API calls from existing Amazon EC2 instances to Amazon Bedrock. The EC2 instances are in a private subnet and must remain private during the implementation. The EC2 instances have an assigned security group that allows access to all IP addresses in the private subnet. What should the ML engineer do to establish a connection between the EC2 instances and Amazon Bedrock?",
    "en_opts": {
      "A": "Modify the security group to allow inbound and outbound traffic to and from Amazon Bedrock.",
      "B": "Use AWS PrivateLink to access Amazon Bedrock through an interface VPC endpoint.",
      "C": "Configure Amazon Bedrock to use the private subnet where the EC2 instances are deployed.",
      "D": "Link the existing VPC to Amazon Bedrock by using an AWS Direct Connect connection."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315650-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 122,
    "question": "한 회사가 사용자 질문에 답변하는 새로운 내부 생성형 AI 인터페이스를 출시하고 싶어합니다. 인터페이스는 인기 있는 오픈소스 대형 언어 모델(LLM)을 기반으로 합니다. 운영 부담이 가장 적은 방식으로 인터페이스를 배포하는 단계 조합은 어느 것입니까? (2개 선택)",
    "options": {
      "A": "Amazon SageMaker JumpStart를 사용하여 LLM을 배포합니다.",
      "B": "LLM을 .zip 파일로 다운로드합니다. GPU 기반 Amazon EC2 인스턴스에 LLM을 배포합니다.",
      "C": "Amazon API Gateway WebSocket API와 AWS Lambda 함수를 사용하는 프론트엔드 HTML 인터페이스를 생성합니다.",
      "D": "Amazon QuickSight를 사용하여 사용자 상호작용을 처리하는 UI를 생성합니다.",
      "E": "Amazon Lex를 사용하여 사용자 상호작용을 처리하는 UI를 생성합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ Amazon SageMaker JumpStart — 사전학습 오픈소스 모델 사전 최적화 배포\n▸ API Gateway + Lambda — 서버리스 대화형 UI 구축 (낮은 오버헤드)\n▸ EC2 + GPU — 모델 서버 관리, GPU 비용, 운영 복잡도 증가\n▸ QuickSight — BI/대시보드 도구로 대화형 AI 인터페이스 부적합\n▸ Amazon Lex — 챗봇 플랫폼이나 LLM 통합 복잡\n\n【정답 포인트】\n\"운영 부담 최소\" + \"LLM 배포\" + \"사용자 질문\" →\n(A) SageMaker JumpStart는 오픈소스 LLM을 사전 최적화하여 한 클릭 배포 가능. 모델 선택, 인스턴스 자동 결정.\n(C) API Gateway + Lambda는 서버리스 인프라로 자동 스케일링, 관리 불필요. 두 서비스 모두 관리형이므로 운영 오버헤드 최소.\n\n【오답 체크】\n(B) EC2 + .zip — 모델 바이너리 다운로드, GPU 인스턴스 관리, 스케일링 설정 모두 수동\n(D) QuickSight — BI 시각화 도구로 실시간 대화형 AI 부적합\n(E) Amazon Lex — ASR/NLU 챗봇 플랫폼으로 커스텀 LLM 통합에 제약 많음\n\n【시험 포인트】\n\"오픈소스 LLM\" + \"내부 인터페이스\" + \"최소 운영\" → JumpStart (모델 배포) + API Gateway/Lambda (UI 백엔드) 조합. 완전관리형 서비스로 구성.",
    "en_q": "A company wants to launch a new internal generative AI interface to answer user questions. The interface will be based on a popular open source large language model (LLM). Which combination of steps will deploy the interface with the LEAST operational overhead? (Choose two.)",
    "en_opts": {
      "A": "Use Amazon SageMaker JumpStart to deploy the LLM.",
      "B": "Download the LLM as a .zip file. Deploy the LLM on a GPU-based Amazon EC2 instance.",
      "C": "Create a frontend HTML interface that uses an Amazon API Gateway WebSocket API with AWS Lambda functions to handle the user interaction.",
      "D": "Use Amazon QuickSight to create a UI to handle the user interaction.",
      "E": "Use Amazon Lex to create a UI to handle the user interaction."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315652-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 123,
    "question": "한 회사가 소셜 미디어의 스트리밍 데이터를 사용하는 실시간 분석 애플리케이션을 구축하려고 합니다. ML 엔지니어는 분당 5GB의 데이터를 수집하고 변환하는 솔루션을 구현해야 합니다. 또한 솔루션은 실시간 분석을 위한 빠른 쿼리를 지원하는 데이터 저장소에 데이터를 로드해야 합니다. 이 요구사항을 충족하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon EventBridge를 사용하여 소셜 미디어 데이터를 수집합니다. AWS Glue를 사용하여 데이터를 변환합니다. 변환된 데이터를 Amazon ElastiCache(Memcached)에 저장합니다.",
      "B": "Amazon Simple Queue Service(Amazon SQS)를 사용하여 소셜 미디어 데이터를 수집합니다. AWS Lambda를 사용하여 데이터를 변환합니다. 변환된 데이터를 Amazon S3에 저장합니다.",
      "C": "Amazon Simple Notification Service(Amazon SNS)를 사용하여 소셜 미디어 데이터를 수집합니다. Amazon EMR을 사용하여 데이터를 변환합니다. 변환된 데이터를 Amazon RDS에 저장합니다.",
      "D": "Amazon Kinesis Data Streams를 사용하여 소셜 미디어 데이터를 수집합니다. Amazon Managed Service for Apache Flink를 사용하여 데이터를 변환합니다. 변환된 데이터를 Amazon DynamoDB에 저장합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Amazon Kinesis Data Streams — 분당 GB 규모 고속 스트림 수집 (실시간 최적)\n▸ Amazon Managed Service for Apache Flink — 스트림 변환 (SQL/Python 지원)\n▸ Amazon DynamoDB — NoSQL로 빠른 쿼리, 자동 스케일링 (실시간 최적)\n▸ Amazon EventBridge — 이벤트 라우팅용 (대용량 스트림 부적합)\n▸ Amazon SQS — 배치 처리용 (실시간 분석 지연)\n\n【정답 포인트】\n\"분당 5GB\" + \"실시간 변환\" + \"빠른 쿼리\" → Kinesis Data Streams는 고처리량 스트림 수집에 최적. Flink는 실시간 스트림 변환(지연 ms 단위). DynamoDB는 NoSQL로 밀리초 응답시간 보장 및 자동 스케일링으로 분당 GB 규모 데이터 처리 가능.\n\n【오답 체크】\n(A) EventBridge + Glue + ElastiCache — EventBridge는 이벤트 라우팅용으로 분당 GB 스트림 부적합. Glue는 배치 ETL 도구\n(B) SQS + Lambda + S3 — SQS 처리 지연, Lambda 15분 제한으로 대용량 스트림 처리 불가. S3는 쿼리 느림\n(C) SNS + EMR + RDS — SNS는 pub/sub만 가능. EMR은 배치 클러스터로 실시간 변환 부적합. RDS는 행 기반 쿼리 느림\n\n【시험 포인트】\n\"분당 5GB\" + \"실시간\" + \"빠른 쿼리\" → Kinesis (수집) + Flink (변환) + DynamoDB (저장) 조합. 모두 스트림/NoSQL 기반으로 밀리초 지연.",
    "en_q": "A company wants to build a real-time analytics application that uses streaming data from social media. An ML engineer must implement a solution that ingests and transforms 5 GB of data each minute. The solution also must load the data into a data store that supports fast queries for the real-time analytics. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon EventBridge to ingest the social media data. Use AWS Glue to transform the data. Store the transformed data in Amazon ElastiCache (Memcached).",
      "B": "Use Amazon Simple Queue Service (Amazon SQS) to ingest the social media data. Use AWS Lambda to transform the data. Store the transformed data in Amazon S3.",
      "C": "Use Amazon Simple Notification Service (Amazon SNS) to ingest the social media data. Use Amazon EMR to transform the data. Store the transformed data in Amazon RDS.",
      "D": "Use Amazon Kinesis Data Streams to ingest the social media data. Use Amazon Managed Service for Apache Flink to transform the data. Store the transformed data in Amazon DynamoDB."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315654-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 124,
    "question": "한 회사가 Amazon S3 버킷에 .csv 파일로 학습 데이터를 저장합니다. 회사는 데이터를 암호화해야 하며 암호화 키에 접근할 수 있는 애플리케이션을 제어해야 합니다. 이 요구사항을 충족하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "새로운 SSH 접근 키를 생성합니다. 새로운 접근 키를 참조하여 AWS Encryption CLI를 사용하여 파일을 암호화합니다.",
      "B": "Amazon API Gateway CreateApiKey API 작업을 사용하여 새로운 API 키를 생성합니다. 새로운 API 키를 참조하여 AWS CLI를 사용하여 파일을 암호화합니다.",
      "C": "새로운 IAM 역할을 생성합니다. AWS Key Management Service(AWS KMS) GenerateDataKey 작업을 허용하는 정책을 첨부합니다. 역할을 사용하여 파일을 암호화합니다.",
      "D": "새로운 AWS Key Management Service(AWS KMS) 키를 생성합니다. 새로운 KMS 키를 참조하여 AWS Encryption CLI를 사용하여 파일을 암호화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS KMS (Key Management Service) — AWS의 표준 암호화 키 관리 서비스\n▸ AWS Encryption CLI — S3 파일 암호화 표준 도구\n▸ SSH 접근 키 — 로컬 머신 인증용 (S3 암호화 불가)\n▸ API Gateway 키 — API 인증용 (암호화 키 아님)\n▸ IAM 역할 + GenerateDataKey — 수동 키 생성 프로세스로 복잡\n\n【정답 포인트】\n\"암호화 + 접근 제어\" → AWS KMS는 암호화 키 생성/관리/권한 제어 통합 솔루션. KMS 키로 생성한 후 AWS Encryption CLI와 함께 사용하면 자동으로 KMS 권한 체크. 누가 KMS 키 접근 가능한지 IAM 정책으로 명확히 제어.\n\n【오답 체크】\n(A) SSH 접근 키 — SSH는 로컬 머신 인증 용도. S3 파일 암호화 불가능\n(B) API Gateway 키 — API 클라이언트 인증용. 암호화 키 아님\n(C) IAM 역할 + GenerateDataKey — 직접 데이터 키 생성하는 수동 프로세스. KMS 자동 통합 미흡. 키 로테이션, 접근 감시 복잡\n\n【시험 포인트】\nS3 암호화 + \"접근 제어\" → AWS KMS 표준 솔루션. Encryption CLI와 조합으로 권한 자동 검증. IAM과 KMS 정책 이중 제어.",
    "en_q": "A company stores training data as a .csv file in an Amazon S3 bucket. The company must encrypt the data and must control which applications have access to the encryption key. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a new SSH access key. Use the AWS Encryption CLI with a reference to the new access key to encrypt the file.",
      "B": "Create a new API key by using the Amazon API Gateway CreateApiKey API operation. Use the AWS CLI with a reference to the new API key to encrypt the file.",
      "C": "Create a new IAM role. Attach a policy that allows the AWS Key Management Service (AWS KMS) GenerateDataKey action. Use the role to encrypt the file.",
      "D": "Create a new AWS Key Management Service (AWS KMS) key. Use the AWS Encryption CLI with a reference to the new KMS key to encrypt the file."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315655-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 125,
    "question": "회사가 기능 엔지니어링, 집계 및 데이터 준비를 수행해야 합니다. 피처가 생성된 후 회사는 AWS에서 피처를 처리하고 저장하는 솔루션을 구현해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon SageMaker Feature Processing을 사용하여 데이터를 처리하고 수집합니다. SageMaker Feature Store를 사용하여 피처를 관리하고 저장합니다.",
      "B": "Amazon SageMaker Model Monitor를 사용하여 자동으로 데이터를 수집하고 변환합니다. Amazon S3 버킷을 생성하여 JSON 형식의 피처를 저장합니다.",
      "C": "Amazon Managed Service for Apache Flink를 사용하여 데이터를 변환하고 Amazon SageMaker Feature Store에 직접 수집합니다. Feature Store를 사용하여 피처를 관리하고 저장합니다.",
      "D": "Amazon SageMaker batch transform 작업을 사용하여 데이터를 분석, 변환 및 수집합니다. Amazon DynamoDB 테이블을 생성하여 피처를 저장합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker Feature Processing — 피처 엔지니어링, 데이터 변환 및 정규화를 위한 서버리스 완전관리형 서비스\n▸ SageMaker Feature Store — 머신러닝 피처의 중앙집중식 저장소로 온라인/오프라인 스토어 제공\n\n【정답 포인트】\n▸ 기능 엔지니어링 + 피처 저장 → Feature Processing과 Feature Store의 네이티브 통합이 가장 자연스럽고 효율적입니다. Feature Processing은 데이터 준비 전문, Feature Store는 피처 관리 전문입니다.\n\n【오답 체크】\n(B) Model Monitor는 프로덕션 모델 성능 모니터링용이며 데이터 수집/변환 도구가 아닙니다. S3는 피처 저장소로 부적절합니다.\n(C) Managed Flink는 실시간 스트리밍 전문이고 feature engineering이 아니며, 초기 데이터 준비에는 오버킬입니다.\n(D) Batch transform은 모델 추론용이며 데이터 변환용이 아닙니다. DynamoDB는 피처 저장소 용도로 설계되지 않았습니다.\n\n【시험 포인트】\n기능 엔지니어링 → Feature Processing / 피처 저장 → Feature Store 는 MLA-C01의 핵심 매핑입니다.",
    "en_q": "A company needs to perform feature engineering, aggregation, and data preparation. After the features are produced, the company must implement a solution on AWS to process and store the features. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon SageMaker Feature Processing to process and ingest the data. Use SageMaker Feature Store to manage and store the features.",
      "B": "Use Amazon SageMaker Model Monitor to automatically ingest and transform the data. Create an Amazon S3 bucket to store the features in JSON format.",
      "C": "Use Amazon Managed Service for Apache Flink to transform the data and to ingest the data directly into Amazon SageMaker Feature Store. Use Feature Store to manage and store the features.",
      "D": "Use an Amazon SageMaker batch transform job to analyze, transform, and ingest the data. Create an Amazon DynamoDB table to store the features."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315646-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 126,
    "question": "회사가 고객 정보를 수집하는 새로운 온라인 애플리케이션을 개발하고 있습니다. ML 엔지니어가 각 고객에 대한 점수를 결정하는 새로운 ML 모델을 개발했습니다. 이 모델은 점수를 사용하여 고객에게 표시할 제품을 결정합니다. ML 엔지니어는 모델의 응답 시간 지연을 최소화해야 합니다. ML 엔지니어가 이 요구사항을 충족하려면 Amazon SageMaker에 애플리케이션을 어떻게 배포해야 합니까?",
    "options": {
      "A": "배치 변환을 구성합니다.",
      "B": "실시간 추론 엔드포인트를 구성합니다.",
      "C": "서버리스 추론 엔드포인트를 구성합니다.",
      "D": "비동기 추론 엔드포인트를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Real-time Inference Endpoint — 동기식 즉시 응답을 위한 엔드포인트로 밀리초 단위 지연 보장\n▸ Serverless Inference — 부하에 따라 자동 스케일링되는 비용 효율적 옵션이지만 콜드 스타트 지연 존재\n\n【정답 포인트】\n▸ \"응답 시간 지연 최소화\" → Real-time endpoint의 낮은 지연 시간이 가장 중요합니다. 제품 추천 애플리케이션은 온라인 고객이 기다리므로 지연이 치명적입니다. 실시간 엔드포인트는 보장된 응답 시간을 제공합니다.\n\n【오답 체크】\n(A) Batch transform은 오프라인 배치 처리용이며 실시간 요청에 부적절합니다.\n(C) Serverless endpoint는 비용 효율적이지만 콜드 스타트로 인한 지연이 발생하여 \"응답 시간 최소화\" 요구사항을 충족하지 못합니다.\n(D) Asynchronous endpoint는 수 분 이상의 처리 시간이 필요한 경우용이며 온라인 고객 상호작용에 부적절합니다.\n\n【시험 포인트】\n응답 시간 최소화 → Real-time endpoint / 비용 최적화 → Serverless endpoint 는 구분이 명확합니다.",
    "en_q": "A company is developing a new online application to gather information from customers. An ML engineer has developed a new ML model that will determine a score for each customer. The model will use the score to determine which product to display to the customer. The ML engineer needs to minimize response-time latency for the model. How should the ML engineer deploy the application in Amazon SageMaker to meet these requirements?",
    "en_opts": {
      "A": "Configure batch transform.",
      "B": "Configure a real-time inference endpoint.",
      "C": "Configure a serverless inference endpoint.",
      "D": "Configure an asynchronous inference endpoint."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315653-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 127,
    "question": "회사가 Amazon EMR을 사용 중입니다. 회사는 Amazon S3의 대규모 데이터셋을 Amazon SageMaker Feature Store로 수집해야 합니다. 데이터셋에는 과거 데이터와 실시간 스트리밍 데이터가 포함되어 있습니다. 회사는 데이터가 사용 가능해지는 즉시 Feature Store 온라인 스토어를 최신 데이터로 업데이트해야 합니다. 회사는 배치 처리를 위해 완전한 Feature Store 오프라인 스토어를 유지해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Feature Store Runtime의 PutRecord API를 사용하여 모든 데이터를 온라인 스토어로 수집합니다.",
      "B": "Feature Store Runtime의 PutRecord API를 사용하여 모든 데이터를 오프라인 스토어로 수집합니다.",
      "C": "Feature Store Spark connector를 사용하여 온라인 스토어와 오프라인 스토어를 모두 활성화한 상태로 Spark DataFrames로 데이터를 수집합니다.",
      "D": "Feature Store Spark connector를 사용하여 오직 온라인 스토어만 활성화한 상태로 Spark DataFrames로 데이터를 수집합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ PutRecord API — 개별 레코드를 온라인 스토어에만 저장하는 저수준 인터페이스\n▸ Feature Store Spark connector — 온/오프라인 스토어 동시 수집을 지원하는 고수준 통합 도구\n\n【정답 포인트】\n▸ \"온라인 + 오프라인 모두 필요\" + \"실시간 + 배치 데이터\" → Spark connector with both stores enabled가 유일한 완전한 솔루션입니다. 온라인은 실시간 제공, 오프라인은 배치 처리를 담당합니다.\n\n【오답 체크】\n(A) PutRecord는 온라인만 지원하며 오프라인 스토어 요구사항을 충족하지 못합니다.\n(B) PutRecord는 오프라인 수집을 지원하지 않습니다.\n(D) 오프라인 스토어를 비활성화하면 배치 처리 요구사항을 충족할 수 없습니다.\n\n【시험 포인트】\n온/오프라인 동시 필요 → Spark connector with both enabled 는 명확한 선택입니다.",
    "en_q": "A company is using Amazon EMR. The company has a large dataset in Amazon S3 that needs to be ingested into Amazon SageMaker Feature Store. The dataset contains historical data and real-time streaming data. The company must ensure that the Feature Store online store is updated with the most recent data as soon as the data becomes available. The company also must maintain a complete Feature Store offline store for batch processing. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use the PutRecord API in Feature Store Runtime to ingest all the data into the online store.",
      "B": "Use the PutRecord API in Feature Store Runtime to ingest all the data into the offline store.",
      "C": "Use the Feature Store Spark connector to ingest the data as Spark DataFrames with the online store and offline store enabled.",
      "D": "Use the Feature Store Spark connector to ingest the data as Spark DataFrames with only the online store enabled."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315651-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 128,
    "question": "ML 엔지니어가 Amazon SageMaker 추론 파이프라인에 4개의 ML 모델을 배포해야 합니다. 모델은 다른 프레임워크로 빌드되었습니다. ML 엔지니어는 클라이언트가 invoke_endpoint 호출을 사용하여 각 모델에 대한 추론을 수행할 수 있도록 해야 합니다. 이 요구사항을 가장 비용 효율적으로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker 멀티 모델 엔드포인트를 생성합니다.",
      "B": "SageMaker 멀티 컨테이너 엔드포인트를 생성합니다.",
      "C": "여러 SageMaker 단일 모델 엔드포인트를 생성합니다.",
      "D": "SparkML 작업을 실행하여 여러 엔드포인트를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Multi-model Endpoint — 동일 프레임워크의 여러 모델을 하나의 엔드포인트에서 동적 로드\n▸ Multi-container Endpoint — 다양한 프레임워크의 여러 모델을 하나의 엔드포인트 내 별도 컨테이너에서 실행\n\n【정답 포인트】\n▸ \"다양한 프레임워크\" + \"하나의 invoke_endpoint\" → Multi-container endpoint는 각 모델이 고유 컨테이너에서 실행되므로 프레임워크 독립적입니다. Single endpoint로 관리 오버헤드 최소화, 비용 효율적입니다.\n\n【오답 체크】\n(A) Multi-model endpoint는 동일 프레임워크(예: 여러 XGBoost 모델) 제약이 있어 부적절합니다.\n(C) 3개 엔드포인트 필요 = 인스턴스 리소스 3배 이상 비용 증가\n(D) SparkML은 모델 배포 도구가 아니며 엔드포인트 생성 불가능합니다.\n\n【시험 포인트】\n다양한 프레임워크 → Multi-container endpoint / 동일 프레임워크 → Multi-model endpoint 구분이 중요합니다.",
    "en_q": "An ML engineer needs to deploy four ML models in an Amazon SageMaker inference pipeline. The models were built with different frameworks. The ML engineer also needs to give clients the ability to use the invoke_endpoint call to perform inference for each model. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Create a SageMaker multi-model endpoint.",
      "B": "Create a SageMaker multi-container endpoint.",
      "C": "Create multiple SageMaker single-model endpoints.",
      "D": "Run a SparkML job to generate multiple endpoints."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315659-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 129,
    "question": "ML 엔지니어는 Amazon SageMaker 노트북이 1시간의 유휴 시간 후에 자동으로 중지되기를 원합니다. ML 엔지니어가 이 목표를 달성하려면 어떻게 해야 합니까?",
    "options": {
      "A": "SageMaker에서 라이프사이클 구성을 생성합니다. GitHub에서 auto-stop-idle 스크립트를 시작 노트북 섹션에 복사합니다.",
      "B": "SageMaker에서 라이프사이클 구성을 생성합니다. GitHub에서 auto-stop-idle 스크립트를 노트북 생성 섹션에 복사합니다.",
      "C": "Amazon CloudWatch Logs를 사용하여 노트북의 CPU 메트릭을 추적합니다. CloudWatch Logs에서 AWS Lambda 함수를 호출하여 CPU 사용률이 0이 되면 노트북 인스턴스를 종료합니다.",
      "D": "Amazon CloudWatch Logs를 사용하여 노트북의 메모리 메트릭을 추적합니다. CloudWatch Logs에서 AWS Lambda 함수를 호출하여 메모리 사용률이 0이 되면 노트북 인스턴스를 종료합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Lifecycle Configuration — 노트북 인스턴스 생성/시작 시 실행되는 스크립트 설정\n▸ auto-stop-idle script — AWS가 제공하는 표준 유휴 종료 스크립트\n\n【정답 포인트】\n▸ \"1시간 유휴 후 자동 중지\" → Start Notebook section에서 실행되는 라이프사이클 스크립트가 계속 모니터링합니다. GitHub의 auto-stop-idle은 SageMaker 공식 권장 구현입니다.\n\n【오답 체크】\n(B) Create Notebook section은 노트북 생성 시만 실행되며 지속적 모니터링 불가능합니다.\n(C) CloudWatch Logs는 노트북 활동 로깅용이며 Lambda 트리거로 인스턴스 종료는 비표준 구현입니다.\n(D) 메모리 기반 판단은 신뢰성이 낮으며 실제 유휴 상태를 정확히 반영하지 못합니다.\n\n【시험 포인트】\nLifecycle configuration + auto-stop-idle은 SageMaker 유휴 관리의 표준 패턴입니다.",
    "en_q": "An ML engineer wants an Amazon SageMaker notebook to automatically stop running after 1 hour of idle time. How can the ML engineer accomplish this goal?",
    "en_opts": {
      "A": "Create a lifecycle configuration in SageMaker. Copy the auto-stop-idle script from GitHub to the Start Notebook section.",
      "B": "Create a lifecycle configuration in SageMaker. Copy the auto-stop-idle script from GitHub to the Create Notebook section.",
      "C": "Track the notebook's CPU metric by using Amazon CloudWatch Logs. Invoke an AWS Lambda function from CloudWatch Logs to shut down the notebook instance if CPU utilization becomes zero.",
      "D": "Track the notebook's memory metric by using Amazon CloudWatch Logs. Invoke an AWS Lambda function from CloudWatch Logs to shut down the notebook instance if memory utilization becomes zero."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315664-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 130,
    "question": "회사가 다른 비즈니스에 이미지 라벨링 서비스를 제공하려고 합니다. 회사는 라벨링 전문가가 AWS에서 인간 라벨링 작업을 완료하기를 원합니다. 회사가 AWS에서 라벨링 전문가를 등록하여 작업을 받으려면 어떻게 해야 합니까?",
    "options": {
      "A": "AWS Data Exchange를 사용합니다.",
      "B": "Amazon SageMaker Ground Truth에서 내부 워크포스를 생성하고 사용합니다.",
      "C": "Amazon SageMaker 인간 루프에서 Amazon Mechanical Turk 엔티티를 생성하고 사용합니다.",
      "D": "Amazon Mechanical Turk 웹사이트를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Ground Truth Internal Workforce — 조직 내부 직원을 라벨러로 등록하여 관리\n▸ Mechanical Turk — AWS의 크라우드소싱 마켓플레이스로 일반 대중에 작업 공개\n\n【정답 포인트】\n▸ \"회사의 라벨링 전문가\" + \"내부만\" → Ground Truth Internal Workforce가 정확한 선택입니다. 회사의 전속 라벨링팀을 AWS 시스템에 통합하여 관리합니다.\n\n【오답 체크】\n(A) Data Exchange는 데이터 거래 마켓플레이스이며 라벨링 워크포스 관리 기능 없습니다.\n(C) Mechanical Turk human loop는 외부 크라우드 워커용이며 내부 팀 관리에 부적절합니다.\n(D) Mechanical Turk 웹사이트는 AWS Ground Truth 없이 별도 시스템이며 enterprise management 기능이 부족합니다.\n\n【시험 포인트】\n내부 라벨러 → Ground Truth Internal Workforce / 크라우드 아웃소싱 → Mechanical Turk",
    "en_q": "A company wants to provide services to help other businesses label images. The company wants its labeling specialists to complete human labeling tasks on AWS. How should the company register the labeling specialists to receive tasks on AWS?",
    "en_opts": {
      "A": "Use AWS Data Exchange.",
      "B": "Create and use an internal workforce in Amazon SageMaker Ground Truth.",
      "C": "Create and use Amazon Mechanical Turk entities in an Amazon SageMaker human loop.",
      "D": "Use the Amazon Mechanical Turk website."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315662-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 131,
    "question": "회사가 CPU에서 실행되는 ML 모델을 실시간 예측을 위해 Amazon SageMaker에서 호스팅하려고 합니다. 모델은 업무 시간 중에 간헐적인 트래픽을 받고 업무 시간 이후에 트래픽이 없을 것입니다. 회사는 추론 요청을 가장 비용 효율적인 방식으로 제공하는 솔루션이 필요합니다. 이 요구사항을 충족할 호스팅 옵션은 무엇입니까?",
    "options": {
      "A": "모델을 SageMaker 실시간 엔드포인트에 배포합니다. 업무 시간 중 트래픽 급증을 처리하기 위해 스케줄 기반 자동 스케일링 정책을 추가합니다.",
      "B": "모델을 SageMaker 서버리스 추론 엔드포인트에 배포합니다. 업무 시간 중에 프로비저닝된 동시성을 증가시키도록 구성합니다.",
      "C": "모델을 SageMaker 비동기 추론 엔드포인트에 배포합니다. 업무 시간 외에 0으로 스케일 인하는 자동 스케일링 정책을 구성합니다.",
      "D": "모델을 SageMaker 실시간 엔드포인트에 배포합니다. 업무 시간 동안만 엔드포인트를 활성화하는 예약된 AWS Lambda 함수를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Serverless Inference — 요청 기반 자동 스케일링으로 유휴 시 0 비용, 콜드 스타트 존재\n▸ Provisioned Concurrency — 워밍 인스턴스를 사전 할당하여 콜드 스타트 제거\n\n【정답 포인트】\n▸ \"간헐적 트래픽\" + \"비용 효율적\" → Serverless endpoint가 최적입니다. 트래픽 없을 때 비용 0, 업무 시간에 provisioned concurrency로 응답 시간 보장합니다.\n\n【오답 체크】\n(A) Real-time endpoint는 상시 인스턴스 비용이 발생하므로 간헐적 트래픽에는 비용 비효율적입니다.\n(C) Asynchronous endpoint는 수 분 이상 지연을 수용할 수 있는 배치 처리용이며 실시간 예측 부적절합니다.\n(D) Lambda 함수로 endpoint 시작/중지는 복잡하고 신뢰성 낮으며 비표준 구현입니다.\n\n【시험 포인트】\n간헐적 트래픽 + 비용 최소화 → Serverless endpoint with provisioned concurrency 는 MLA-C01 핵심입니다.",
    "en_q": "A company wants to use Amazon SageMaker to host an ML model that runs on CPU for real-time predictions. The model will have intermittent traffic during business hours and will have periods of no traffic after business hours. The company needs a solution that will serve inference requests in the most cost-effective manner. Which hosting option will meet these requirements?",
    "en_opts": {
      "A": "Deploy the model to a SageMaker real-time endpoint. Add a schedule-based auto scaling policy to handle traffic surges during business hours.",
      "B": "Deploy the model to a SageMaker Serverless Inference endpoint. Configure increased provisioned concurrency during business hours.",
      "C": "Deploy the model to a SageMaker Asynchronous Inference endpoint. Configure an auto scaling policy that scales in to zero outside business hours.",
      "D": "Deploy the model to a SageMaker real-time endpoint. Create a scheduled AWS Lambda function that activates the endpoint during business hours only."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315663-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 132,
    "question": "ML 엔지니어가 감독 학습 딥러닝 모델을 훈련해야 합니다. 사용 가능한 데이터셋은 직원만 접근할 수 있는 대량의 레이블되지 않은 이미지입니다. ML 엔지니어는 가장 높은 정확도로 데이터셋에 레이블을 지정하는 솔루션을 구현해야 합니다. ML 엔지니어가 이 요구사항을 충족하기 위해 수행해야 할 단계의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Amazon Rekognition을 사용하여 데이터셋에 자동으로 레이블을 지정합니다.",
      "B": "딥러닝 모델을 원본 데이터에서 직접 훈련합니다. 모델이 레이블을 자체적으로 추론하도록 합니다.",
      "C": "Amazon SageMaker Ground Truth를 사용하여 레이블링 작업과 요구사항을 지정하는 주석 작업을 생성합니다.",
      "D": "프라이빗 워크포스에 액세스하는 워크포스 팀을 설정하여 Amazon SageMaker Ground Truth에서 생성한 주석 작업을 실행하고 검토합니다.",
      "E": "Amazon Mechanical Turk를 사용하여 Amazon SageMaker Ground Truth에서 생성한 주석 작업을 완료합니다."
    },
    "answer": "CD",
    "explanation": "【핵심 용어】\n▸ Ground Truth Annotation Job — 레이블링 작업 정의 및 관리 플랫폼\n▸ Private Workforce — 조직 내부 직원을 레이블러로 사용하는 보안 솔루션\n\n【정답 포인트】\n▸ \"직원만 접근\" + \"높은 정확도\" →\n(C) Ground Truth로 작업 정의 +\n(D) Private workforce로 내부 직원 관리가 최적 조합입니다. 보안과 품질을 모두 확보합니다.\n\n【오답 체크】\n(A) Rekognition은 사전학습 모델로 사용자 특화 라벨링이 불가능합니다.\n(B) 레이블 없이 모델 훈련은 불가능하며 unsupervised learning이 될 수 없습니다.\n(E) Mechanical Turk는 일반 대중 크라우드소싱이므로 \"직원만 접근\" 요구사항을 위반합니다.\n\n【시험 포인트】\nGround Truth + Private workforce = 보안이 필요한 고정확도 내부 라벨링\nGround Truth + Mechanical Turk = 대규모 저비용 크라우드 라벨링",
    "en_q": "An ML engineer needs to train a supervised deep learning model. The available dataset is a large number of unlabeled images that only employees should access. The ML engineer needs to implement a solution that labels the dataset with the highest possible accuracy. Which combination of steps should the ML engineer take to meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Use Amazon Rekognition to automatically label the dataset.",
      "B": "Train the deep learning model directly on the raw data. Let the model infer the labels by itself.",
      "C": "Use Amazon SageMaker Ground Truth to create an annotation job that specifies the labeling task and requirements.",
      "D": "Set up workforce teams to access a private workforce to run and review the annotation job created by Amazon SageMaker Ground Truth.",
      "E": "Use Amazon Mechanical Turk to complete the annotation job created by Amazon SageMaker Ground Truth."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315666-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 133,
    "question": "회사가 ML 워크플로우에 사용할 데이터를 수집하기 위해 Amazon S3 버킷을 사용 중입니다. 회사는 AWS Glue DataBrew를 사용하여 데이터를 정리하고 정규화해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 경로를 사용하여 DataBrew 데이터셋을 생성합니다. DataBrew 프로필 작업을 사용하여 데이터를 정리하고 정규화합니다.",
      "B": "S3 경로를 사용하여 DataBrew 데이터셋을 생성합니다. DataBrew 레시피 작업을 사용하여 데이터를 정리하고 정규화합니다.",
      "C": "JDBC 드라이버를 사용하여 S3 버킷에 연결하는 DataBrew 데이터셋을 생성합니다. DataBrew 프로필 작업을 사용하여 데이터를 정리하고 정규화합니다.",
      "D": "JDBC 드라이버를 사용하여 S3 버킷에 연결하는 DataBrew 데이터셋을 생성합니다. DataBrew 레시피 작업을 사용하여 데이터를 정리하고 정규화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Profile Job — 데이터 품질 분석/통계 생성용으로 변환은 미지원\n▸ Recipe Job — 데이터 정규화, 정제, 변환을 위한 실제 처리 엔진\n\n【정답 포인트】\n▸ \"정리하고 정규화\" → Recipe job이 필수적입니다. Profile은 분석만 하고 Recipe가 변환을 실행합니다. S3 경로 직접 연결로 충분합니다.\n\n【오답 체크】\n(A) Profile job은 데이터 분석만 지원하며 실제 정규화 변환 기능 없습니다.\n(C) DataBrew는 S3 경로를 직접 지원하므로 JDBC 연결은 불필요합니다.\n(D) JDBC는 관계형 DB용이며 S3 직접 액세스보다 복잡합니다.\n\n【시험 포인트】\nDataBrew Profile = 분석 / DataBrew Recipe = 변환 은 명확한 구분입니다.",
    "en_q": "A company is using an Amazon S3 bucket to collect data that will be used for ML workflows. The company needs to use AWS Glue DataBrew to clean and normalize the data. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a DataBrew dataset by using the S3 path. Clean and normalize the data by using a DataBrew profile job.",
      "B": "Create a DataBrew dataset by using the S3 path. Clean and normalize the data by using a DataBrew recipe job.",
      "C": "Create a DataBrew dataset by using a Java Database Connectivity (JDBC) driver to connect to the S3 bucket. Clean and normalize the data by using a DataBrew profile job.",
      "D": "Create a DataBrew dataset by using a Java Database Connectivity (JDBC) driver to connect to the S3 bucket. Clean and normalize the data by using a DataBrew recipe job."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315661-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 134,
    "question": "회사가 XGBoost 알고리즘을 사용하는 새로운 ML 모델을 개발 중입니다. 회사는 Amazon S3 버킷에 저장된 데이터에 대해 모델을 훈련할 것입니다. 데이터는 중첩된 JSON 형식입니다. ML 엔지니어가 JSON 파일을 표 형식으로 변환해야 합니다. 최소한의 운영 오버헤드로 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Relationalize 변환을 사용하는 AWS Glue PySpark 작업을 생성합니다.",
      "B": "파일을 변환하는 사용자 정의 Scala 코드를 작성합니다. Amazon EMR Serverless를 사용하여 Scala 코드를 실행합니다.",
      "C": "Python 런타임을 사용하는 AWS Lambda 함수를 생성하고 reduce() 함수를 호출하여 파일을 변환합니다. Lambda 함수를 호출합니다.",
      "D": "JSON 파일을 기반으로 Amazon Athena 데이터베이스를 생성합니다. Athena flatten 함수를 사용하여 데이터를 변환합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Glue Relationalize Transform — 중첩된 JSON을 자동으로 정규화하는 빌트인 변환\n▸ 최소 운영 오버헤드 — 완전관리형 서비스, 코드 작성 불필요\n\n【정답 포인트】\n▸ \"중첩 JSON → 표 형식\" + \"최소 오버헤드\" → AWS Glue의 Relationalize transform이 표준 솔루션입니다. 선언적 변환으로 코드 작성 불필요하며 완전관리형입니다.\n\n【오답 체크】\n(B) 사용자 정의 Scala 코드는 운영 오버헤드 증가하며 기존 기능으로 충분합니다.\n(C) Lambda는 15분 타임아웃으로 대규모 JSON 처리에 부적절합니다.\n(D) Athena flatten은 쿼리 시점의 변환이며 데이터 사전 변환 불가능합니다.\n\n【시험 포인트】\nJSON → 표 형식 변환 → Glue Relationalize transform이 표준 패턴입니다.",
    "en_q": "A company is developing a new ML model that uses the XGBoost algorithm. The company will train the model on data that is stored in an Amazon S3 bucket. The data is in a nested JSON format. An ML engineer needs to convert the JSON files into a tabular format. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create an AWS Glue PySpark job that uses the Relationalize transform to convert the files.",
      "B": "Write custom Scala code to convert the files. Use Amazon EMR Serverless to run the Scala code.",
      "C": "Create an AWS Lambda function that uses a Python runtime and invokes the reduce() function to convert the files. Invoke the Lambda function.",
      "D": "Create an Amazon Athena database that is based on the JSON files. Use the Athena flatten function to convert the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315671-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 135,
    "question": "의료 회사가 환자의 생체 신호를 모니터링하는 장비에서 데이터 스트림을 수집합니다. 회사는 Amazon SageMaker를 사용하며 환자의 부작용 사건을 예측하는 ML 모델을 준비할 계획입니다. 데이터셋은 수천 개의 기능이 있는 대규모 데이터입니다. ML 엔지니어는 다양한 기능 세트, 다양한 알고리즘 및 많은 잠재 매개변수를 사용하여 수백 번의 훈련 반복을 실행해야 합니다. ML 엔지니어는 각 훈련 반복의 특성과 결과를 기록하는 솔루션을 구현해야 합니다. 최소한의 구현 노력으로 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon CloudWatch를 사용하여 각 반복의 특성에 대한 사용자 정의 메트릭을 생성합니다.",
      "B": "각 반복의 특성을 Amazon S3의 로그에 작성합니다. AWS Glue 및 Amazon Athena를 사용하여 로그를 검색합니다.",
      "C": "SageMaker Model Registry를 사용하여 각 반복의 특성과 결과를 추적합니다.",
      "D": "SageMaker Experiments를 사용하여 각 반복의 특성과 결과를 추적합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Experiments — 하이퍼파라미터, 메트릭, 아티팩트를 자동 추적하는 ML 실험 플랫폼\n▸ 최소 구현 노력 — 빌트인 자동 추적, 별도 코드 최소화\n\n【정답 포인트】\n▸ \"수백 번 훈련 반복\" + \"특성 + 결과 기록\" → SageMaker Experiments가 정확한 선택입니다. 자동 메트릭 수집, 파라미터 추적, 비교 기능이 내장되어 최소 코드로 완벽 추적됩니다.\n\n【오답 체크】\n(A) CloudWatch 메트릭은 실시간 모니터링용이며 대규모 파라미터 세트 추적 부적절합니다.\n(B) 수동 S3 로깅 + Glue 쿼리는 구현 복잡도 높고 관리 오버헤드 큽니다.\n(C) Model Registry는 검증된 모델 버전 관리용이며 모든 실험 추적 아님입니다.\n\n【시험 포인트】\n머신러닝 실험 추적 → SageMaker Experiments는 명확한 선택입니다.",
    "en_q": "A medical company ingests streams of data from devices that monitor patients' vital signs. The company uses Amazon SageMaker and plans to prepare ML models to predict adverse events for patients. The dataset is large with thousands of features. An ML engineer needs to run several hundred training iterations with different sets of features, different algorithms, and many potential parameters. The ML engineer must implement a solution to log the characteristics and results of each training iteration. Which solution will meet these requirements with the LEAST implementation effort?",
    "en_opts": {
      "A": "Use Amazon CloudWatch to create custom metrics for the characteristics of each iteration.",
      "B": "Write the characteristics of each iteration to logs in Amazon S3. Use AWS Glue and Amazon Athena to search the logs.",
      "C": "Use the SageMaker Model Registry to track the characteristics and results of each iteration.",
      "D": "Use SageMaker Experiments to track the characteristics and results of each iteration."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315675-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 136,
    "question": "회사가 직원들이 고객 질문을 처리하도록 도움을 주기 위해 내부 전용 대화 인터페이스를 만들려고 합니다. 현재 직원들은 고객 문제를 해결하기 위해 방대한 내부 문서 데이터베이스를 참조해야 합니다. 새 솔루션은 서버리스여야 합니다. 이 요구사항을 충족할 단계의 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "Anthropic Claude 기초 모델과 함께 Amazon Bedrock을 설정합니다.",
      "B": "Llama 기초 모델과 함께 Amazon SageMaker JumpStart를 설정합니다.",
      "C": "Amazon EC2 인스턴스를 모델 API 호출을 위해 Amazon API Gateway와 함께 사용합니다.",
      "D": "AWS Lambda 함수를 모델 API 호출을 위해 Amazon API Gateway와 함께 사용합니다.",
      "E": "벡터 데이터베이스 덤프와 임베딩을 저장하기 위해 Amazon S3 버킷을 사용합니다.",
      "F": "벡터 데이터베이스 덤프와 임베딩을 저장하기 위해 Amazon RDS for MySQL을 사용합니다."
    },
    "answer": "ADE",
    "explanation": "【핵심 용어】\n▸ Bedrock — 서버리스 기초 모델 API로 완전관리형\n▸ Lambda + API Gateway — 서버리스 애플리케이션 계층\n▸ S3 — 벡터 저장용 비용 효율적 스토리지\n\n【정답 포인트】\n▸ \"서버리스\" + \"내부 문서 RAG\" → \n(A) Bedrock Claude + \n(D) Lambda+API Gateway + \n(E) S3 조합이 최적입니다. 모두 완전관리형 서버리스이며 RAG 구현에 필수 요소들입니다.\n\n【오답 체크】\n(B) SageMaker JumpStart는 관리형이지만 Bedrock보다 운영 오버헤드 높습니다.\n(C) EC2는 서버리스가 아니며 프로비저닝 및 관리 필요합니다.\n(F) RDS는 관계형 DB이며 벡터 검색 최적화 부족합니다.\n\n【시험 포인트】\n서버리스 + 내부 문서 → Bedrock + Lambda + S3 기반 RAG 패턴입니다.",
    "en_q": "A company is planning to create an internal-only chat interface to help employees handle customer queries. Currently, the employees need to refer to a massive knowledge base of internal documents to address customer issues. The new solution must be serverless. Which combination of steps will meet these requirements?",
    "en_opts": {
      "A": "Set up Amazon Bedrock with the Anthropic Claude foundation model.",
      "B": "Set up Amazon SageMaker JumpStart with the Llama foundation model.",
      "C": "Use Amazon EC2 instances with Amazon API Gateway to invoke the model API.",
      "D": "Use AWS Lambda functions with Amazon API Gateway to invoke the model API.",
      "E": "Use an Amazon S3 bucket to store vector database dumps and embeddings.",
      "F": "Use Amazon RDS for MySQL to store vector database dumps and embeddings."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315668-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 137,
    "question": "ML 엔지니어가 유전 알고리즘을 기반으로 한 훈련된 모델을 배포해야 합니다. 이 알고리즘은 복잡한 문제를 해결하며 예측을 생성하는 데 수 분이 걸릴 수 있습니다. 모델이 배포될 때, 모델은 요청을 처리하기 위해 대량의 데이터에 액세스해야 합니다. 요청은 최대 100 MB의 데이터를 포함할 수 있습니다. 최소한의 운영 오버헤드로 이 요구사항을 충족할 배포 솔루션은 무엇입니까?",
    "options": {
      "A": "모델을 Application Load Balancer 뒤의 Auto Scaling 그룹의 Amazon EC2 인스턴스에 배포합니다.",
      "B": "모델을 Amazon SageMaker 실시간 엔드포인트에 배포합니다.",
      "C": "모델을 Amazon SageMaker 비동기 추론 엔드포인트에 배포합니다.",
      "D": "모델을 컨테이너로 패키징합니다. 모델을 Amazon EC2 인스턴스의 Amazon Elastic Container Service(Amazon ECS)에 배포합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Asynchronous Inference — 장시간 처리용으로 S3 입출력 기본 지원\n▸ 최소 운영 오버헤드 — 완전관리형, 자동 스케일링\n\n【정답 포인트】\n▸ \"수 분 처리\" + \"100MB 데이터\" + \"최소 오버헤드\" → Asynchronous endpoint가 정확한 선택입니다. S3에서 대용량 입력 수신, S3로 결과 저장하는 완벽한 구조입니다.\n\n【오답 체크】\n(A) EC2 Auto Scaling은 관리 오버헤드 높고 운영 복잡도 증가합니다.\n(B) Real-time endpoint는 동기식이므로 수 분 대기는 타임아웃 위험 높습니다.\n(D) ECS는 컨테이너 오케스트레이션 관리 필요하므로 오버헤드 높습니다.\n\n【시험 포인트】\n장시간 처리 + 대용량 데이터 → Asynchronous endpoint는 명확한 선택입니다.",
    "en_q": "An ML engineer needs to deploy a trained model that is based on a genetic algorithm. The algorithm solves a complex problem and can take several minutes to generate predictions. When the model is deployed, the model needs to access large amounts of data to process requests. The requests can involve as much as 100 MB of data. Which deployment solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Deploy the model to Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer.",
      "B": "Deploy the model to an Amazon SageMaker real-time endpoint.",
      "C": "Deploy the model to an Amazon SageMaker Asynchronous Inference endpoint.",
      "D": "Package the model as a container. Deploy the model to Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315667-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 138,
    "question": "ML 엔지니어가 설문조사 응답 세트를 ML 분류기의 훈련 데이터로 사용하려고 합니다. 모든 설문조사 응답은 \"예\" 또는 \"아니오\"입니다. ML 엔지니어는 응답을 더 나은 모델 훈련 결과를 생성할 기능으로 변환해야 합니다. ML 엔지니어는 데이터셋의 차원성을 증가시키지 않아야 합니다. 이 요구사항을 충족할 방법은 무엇입니까? (2개 선택)",
    "options": {
      "A": "이진 인코딩",
      "B": "레이블 인코딩",
      "C": "원-핫 인코딩",
      "D": "통계적 대체",
      "E": "토큰화"
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ Binary Encoding — 카테고리를 이진 비트로 표현 (2진수로 표현)\n▸ Label Encoding — 카테고리를 정수로 매핑\n▸ 차원성 유지 필수 — 특성 개수 증가 금지\n\n【정답 포인트】\n▸ \"차원성 증가 금지\" → \n(A) Binary, \n(B) Label encoding만 가능합니다. 둘 다 2개 카테고리를 1개 차원으로 표현합니다.\n\n【오답 체크】\n(C) One-hot은 2개 값당 2개 열로 차원성이 2배 증가합니다.\n(D) Statistical imputation은 결측값 처리용이며 인코딩이 아닙니다.\n(E) Tokenization은 텍스트 처리용이며 예/아니오 이진 값 인코딩 부적절합니다.\n\n【시험 포인트】\n차원성 유지 필수 → Binary/Label encoding / 차원성 확대 가능 → One-hot",
    "en_q": "An ML engineer wants to use a set of survey responses as training data for an ML classifier. All the survey responses are either \"yes\" or \"no.\" The ML engineer needs to convert the responses into a feature that will produce better model training results. The ML engineer must not increase the dimensionality of the dataset. Which methods will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Binary encoding",
      "B": "Label encoding",
      "C": "One-hot encoding",
      "D": "Statistical imputation",
      "E": "Tokenization"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315665-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 140,
    "question": "회사가 추천 모델을 생성하기 위해 Amazon SageMaker 사전 구축 알고리즘을 사용할 계획입니다. 이 알고리즘은 고차원 희소 데이터에 대해 예측을 할 수 있어야 합니다. 회사가 추천 모델을 위해 선택해야 할 SageMaker 알고리즘은 무엇입니까?",
    "options": {
      "A": "k-최근접 이웃 (k-NN)",
      "B": "인수분해 머신(Factorization Machines)",
      "C": "주성분 분석 (PCA)",
      "D": "시퀀스-투-시퀀스 (seq2seq)"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Factorization Machines — 희소 데이터에서 특성 간 상호작용을 학습하는 추천 알고리즘\n▸ 고차원 희소 데이터 — 많은 특성, 많은 0 값\n\n【정답 포인트】\n▸ \"고차원 희소 데이터\" + \"추천 모델\" → Factorization Machines가 정확한 선택입니다. 협업 필터링과 콘텐츠 기반 필터링 모두 지원하며 희소성 극복에 특화되어 있습니다.\n\n【오답 체크】\n(A) k-NN은 희소 고차원 데이터에서 거리 메트릭 신뢰성 낮습니다.\n(C) PCA는 차원 축소용이며 예측 모델이 아닙니다.\n(D) seq2seq는 시계열/기계번역용이며 추천 알고리즘이 아닙니다.\n\n【시험 포인트】\n희소 데이터 추천 → Factorization Machines는 SageMaker 알고리즘 선택의 중요 문제입니다.",
    "en_q": "A company is planning to use an Amazon SageMaker prebuilt algorithm to create a recommendation model. The algorithm must be able to make predictions on high-dimensional sparse data. Which SageMaker algorithm should the company choose for the recommendation model?",
    "en_opts": {
      "A": "K-nearest neighbors (k-NN)",
      "B": "Factorization Machines",
      "C": "Principal component analysis (PCA)",
      "D": "Sequence-to-Sequence (seq2seq)"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315660-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 141,
    "question": "회사가 노트북에서 개발한 몇 개의 예측 모델을 보유하고 있습니다. 팀들은 scikit-learn 및 TensorFlow 프레임워크를 사용하는 Python으로 모델을 개발했습니다. 회사는 모델을 재구축해야 하며 회사가 Amazon SageMaker를 사용하여 관리하는 ML 인프라에 모델을 통합해야 합니다. 회사는 또한 모델을 모델 레지스트리에 통합해야 합니다. 최소한의 운영 오버헤드로 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "노트북에서 모델을 Amazon S3 버킷으로 내보냅니다. SageMaker 엔드포인트로 모델에 액세스하기 위해 Amazon API Gateway REST API 및 AWS Lambda 함수를 사용합니다. SageMaker Model Registry에 모델을 등록합니다.",
      "B": "모델을 SageMaker Model Registry로 가져옵니다. 가져온 모델을 실행하기 위해 SageMaker를 사용합니다.",
      "C": "노트북의 코드를 사용하여 모델용 컨테이너를 생성합니다. SageMaker의 bring your own container(BYOC) 기능을 사용하여 모델을 가져오고 사용합니다. SageMaker Model Registry에 모델을 등록합니다.",
      "D": "Python 기반 모델을 SageMaker로 가져옵니다. SageMaker에서 scikit-learn 및 TensorFlow 모델을 재구축합니다. 모든 모델을 SageMaker Model Registry에 등록합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Registry — 모델 생명주기 관리 및 버전 추적\n▸ 다중 프레임워크 통합 — scikit-learn, TensorFlow 통일 관리\n\n【정답 포인트】\n▸ \"여러 팀\" + \"다양한 노트북 코드\" + \"통합 인프라\" → 모델을 SageMaker 네이티브 형식으로 재구축하고 Model Registry에 등록이 최적입니다. 일관된 관리, 버전 추적, 배포 파이프라인 통합이 용이합니다.\n\n【오답 체크】\n(A) API Gateway + Lambda는 복잡하고 Registry 통합이 느슨합니다.\n(B) 단순 가져오기만으로는 SageMaker 운영 기능 미활용입니다.\n(C) BYOC는 프레임워크별 커스텀 이미지 유지 오버헤드 높습니다.\n\n【시험 포인트】\n다양한 프레임워크 모델 통합 → SageMaker 네이티브 재구축 + Model Registry가 표준입니다.",
    "en_q": "A company has several teams that have developed separate prediction models on their own laptops. The teams developed the models by using Python with scikit-learn and TensorFlow frameworks. The company must rebuild the models and must integrate the models into an ML infrastructure that the company manages by using Amazon SageMaker. The company also must incorporate the models into a model registry. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Export the models from the laptops to an Amazon S3 bucket. Use an Amazon API Gateway REST API and AWS Lambda functions with SageMaker endpoints to access the models. Register the models in the SageMaker Model Registry.",
      "B": "Import the models into the SageMaker Model Registry. Use SageMaker to run the imported models.",
      "C": "Use code from the laptops to create containers for the models. Use the bring your own container (BYOC) functionality of SageMaker to import and use the models. Register the models in the SageMaker Model Registry.",
      "D": "Import the Python-based models into SageMaker. Rebuild the scikit-learn and TensorFlow models in SageMaker. Register all the models in the SageMaker Model Registry."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315669-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 142,
    "question": "회사가 온프레미스 인프라를 사용하여 대규모 언어 모델(LLM)을 훈련하고 있습니다. 라이브 대화형 엔진은 LLM을 사용하여 고객들이 신용카드 데이터의 실시간 통찰력을 찾을 수 있도록 도움을 줍니다. ML 엔지니어는 Amazon SageMaker에서 LLM을 훈련하고 배포하는 솔루션을 구현해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker Training Compiler를 사용하여 LLM을 훈련합니다. SageMaker 실시간 추론을 사용하여 LLM을 배포합니다.",
      "B": "대형 모델 추론을 위한 심화 학습 컨테이너를 사용하여 SageMaker를 사용합니다. SageMaker 실시간 추론을 사용하여 LLM을 배포합니다.",
      "C": "SageMaker Notebook Jobs를 사용하여 LLM을 훈련합니다. SageMaker 비동기 추론을 사용하여 LLM을 배포합니다.",
      "D": "SageMaker Studio를 사용하여 LLM을 훈련합니다. SageMaker 배치 변환을 사용하여 LLM을 배포합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker Training Compiler — 대규모 모델 훈련 최적화\n▸ 실시간 대화형 배포 — 낮은 지연시간 필수\n\n【정답 포인트】\n▸ \"LLM 훈련\" + \"실시간 대화형 배포\" → Training Compiler로 최적화된 훈련 + Real-time endpoint로 즉시 응답 구조가 최적입니다. 대규모 모델의 훈련 성능 극대화 및 실시간 사용자 상호작용을 지원합니다.\n\n【오답 체크】\n(B) DLC는 훈련 최적화가 Compiler보다 약하며 배포 공식입니다.\n(C) Notebook Jobs는 대규모 LLM 훈련에 부적절합니다. Async inference는 실시간 대화 부적합합니다.\n(D) Studio는 개발 환경이며 훈련용 아님입니다. Batch transform은 비대화형입니다.\n\n【시험 포인트】\nLLM 훈련 + 실시간 배포 → Training Compiler + Real-time endpoint 조합입니다.",
    "en_q": "A company is training a large language model (LLM) by using on-premises infrastructure. A live conversational engine uses the LLM to help customers find real-time insights in credit card data. An ML engineer must implement a solution to train and deploy the LLM on Amazon SageMaker. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use SageMaker Training Compiler to train the LLM. Deploy the LLM by using SageMaker real-time inference.",
      "B": "Use SageMaker with deep learning containers for large model inference to train the LLM. Deploy the LLM by using SageMaker real-time inference.",
      "C": "Use SageMaker Notebook Jobs to train the LLM. Deploy the LLM by using SageMaker Asynchronous Inference.",
      "D": "Use SageMaker Studio to train the LLM. Deploy the LLM by using SageMaker batch transform."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315674-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 143,
    "question": "회사가 프로덕션 엔드포인트에 기존 Amazon SageMaker 모델(v1)을 보유하고 있습니다. 회사는 새 모델 버전(v2)을 개발하며 v2를 v1을 대체하기 전에 프로덕션에서 테스트해야 합니다. 회사는 v2가 프로덕션에서 잘못된 출력을 생성할 위험을 최소화하는 솔루션을 구현해야 합니다. 솔루션은 v2 변경 중에 프로덕션 트래픽 중단을 방지해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "v2용 두 번째 프로덕션 변형을 생성합니다. v2에 1%의 트래픽을, v1에 99%의 트래픽을 할당합니다. v2의 모든 출력을 Amazon S3 버킷으로 수집합니다. v2가 예상대로 수행되면 모든 트래픽을 v2로 전환합니다.",
      "B": "v2용 두 번째 프로덕션 변형을 생성합니다. v2에 10%의 트래픽을, v1에 90%의 트래픽을 할당합니다. v2의 모든 출력을 Amazon S3 버킷으로 수집합니다. v2가 예상대로 수행되면 모든 트래픽을 v2로 전환합니다.",
      "C": "v2를 새 엔드포인트에 배포합니다. 프로덕션 엔드포인트에 대한 데이터 캡처를 켭니다. 100%의 입력 데이터를 v2로 전달하도록 스크립트를 작성합니다. v2가 예상대로 수행되면 v1 엔드포인트를 비활성화하고 트래픽을 v2로 지정합니다.",
      "D": "v2를 100%의 추론 요청을 샘플링하는 섀도우 변형으로 배포합니다. 모든 출력을 Amazon S3 버킷으로 수집합니다. v2가 예상대로 수행되면 v2를 프로덕션으로 승격합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Shadow Variant — 프로덕션 트래픽 100%를 샘플링하며 실제 사용자 영향 없음\n▸ 무중단 프로덕션 검증 — 기존 모델 영향 제로\n\n【정답 포인트】\n▸ \"위험 최소화\" + \"트래픽 중단 금지\" + \"프로덕션 검증\" → Shadow variant가 유일한 완벽한 솔루션입니다. 실제 사용자 영향 없이 v2를 100% 실시간 데이터로 검증하는 최안전 방법입니다.\n\n【오답 체크】\n(A) \n(B) Canary 배포는 최소 1% 실제 사용자에게 v2 배포하므로 위험 존재합니다.\n(C) 별도 엔드포인트 + 데이터 캡처는 복잡하고 신뢰성 낮습니다.\n\n【시험 포인트】\n무중단 프로덕션 검증 → Shadow variant는 SageMaker 배포 전략의 핵심입니다.",
    "en_q": "A company has an existing Amazon SageMaker model (v1) on a production endpoint. The company develops a new model version (v2) and needs to test v2 in production before substituting v2 for v1. The company needs to implement a solution to minimize the risk of v2 generating incorrect output in production. The solution must prevent any disruption of production traffic during the change to v2. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a second production variant for v2. Assign 1% of the traffic to v2 and 99% of the traffic to v1. Collect all the output of v2 in an Amazon S3 bucket. If v2 performs as expected, switch all the traffic to v2.",
      "B": "Create a second production variant for v2. Assign 10% of the traffic to v2 and 90% of the traffic to v1. Collect all the output of v2 in an Amazon S3 bucket. If v2 performs as expected, switch all the traffic to v2.",
      "C": "Deploy v2 to a new endpoint. Turn on data capturing for the production endpoint. Write a script to pass 100% of input data to v2. If v2 performs as expected, deactivate the v1 endpoint and direct the traffic to v2.",
      "D": "Deploy v2 into a shadow variant that samples 100% of the inference requests. Collect all the output in an Amazon S3 bucket. If v2 performs as expected, promote v2 to production."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315670-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 144,
    "question": "회사가 Amazon SageMaker, AWS 소유 라이브러리 및 오픈 소스 라이브러리를 사용하여 ML 모델을 구축하고 있습니다. 회사는 SageMaker가 훈련 중 사용량 및 오류에 대한 메타데이터를 수집하지 않도록 해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker 도메인을 커스텀 IAM 역할과 연결합니다. 역할에 Amazon CloudWatch 서비스 사용량 로그를 거부하는 정책을 연결합니다.",
      "B": "SageMaker 도메인에 IAM 역할을 추가하여 Amazon CloudWatch가 메타데이터 보고 권한을 거부합니다.",
      "C": "SageMaker 도메인의 콘솔 작업에 대한 메타데이터 공유 설정을 해제합니다. AWS CLI 또는 AWS SDK를 통해 제출된 각 훈련 작업에 대해 메타데이터 수집을 거부합니다.",
      "D": "AWS CLI, Boto3 또는 SageMaker Python SDK를 통해 제출된 각 훈련 작업에 대해 메타데이터 수집을 거부하도록 파라미터를 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ DisableProfiling — SageMaker training job 메타데이터 수집 비활성화 파라미터\n▸ Training job 수준 제어 — 작업별 세밀한 설정\n\n【정답 포인트】\n▸ \"훈련 중 메타데이터 수집 금지\" → training job 단위 파라미터 설정이 가장 정확합니다. AWS CLI, Boto3, SageMaker Python SDK의 DisableProfiling=true 파라미터로 각 작업별 제어합니다.\n\n【오답 체크】\n(A) CloudWatch 로그 거부는 메트릭/로깅 차단이지만 프로파일링 데이터 메타데이터 차단 불완전합니다.\n(B) CloudWatch 권한 거부는 IAM 정책 수준이며 세분화 불가능합니다.\n(C) 콘솔 설정과 SDK 설정 분리로 일관성 부족하며 모든 경로 커버 불가능합니다.\n\n【시험 포인트】\n훈련 작업별 메타데이터 opt-out → DisableProfiling 파라미터가 핵심입니다.",
    "en_q": "A company is building an ML model by using Amazon SageMaker, AWS owned libraries, and open source libraries. The company must ensure that SageMaker does not collect metadata about usage and errors during training. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Associate the SageMaker domain with a custom IAM role. Attach the role to a policy that denies Amazon CloudWatch service usage logs.",
      "B": "Add an IAM role to the SageMaker domain to deny Amazon CloudWatch the permission to report metadata.",
      "C": "Turn off the setting in the SageMaker domain to share metadata for console jobs. Opt out of metadata collection for each training job that is submitted through the AWS CLI or AWS SDKs.",
      "D": "Set a parameter to opt out of metadata collection for each training job that is submitted through the AWS CLI, Boto3, or the SageMaker Python SDK."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315672-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 145,
    "question": "ML 엔지니어가 20개의 피처와 1개의 타겟을 가진 데이터셋으로 사람의 건강 위험도를 식별하는 ML 모델을 학습하고 있습니다. 타겟 클래스는 두 가지 값을 가집니다: • 건강 위험도가 높을 것으로 예상됨(양성 클래스) • 건강 위험도가 낮을 것으로 예상됨(음성 클래스) 데이터셋의 사람들의 나이 범위는 30세에서 60세입니다. 나이는 피처 중 하나입니다. ML 엔지니어가 피처를 분석합니다. 양성 클래스의 경우, 40~45세 연령대에서 다른 모든 연령대에 비해 라벨의 비율 차이(DPL) 값이 (+0.9)입니다. ML 엔지니어가 이 데이터 불균형을 바로잡기 위해 어떻게 해야 합니까?",
    "options": {
      "A": "40~45세 연령대의 양성 클래스를 오버샘플링합니다.",
      "B": "40~45세 연령대의 양성 클래스를 언더샘플링합니다.",
      "C": "40~45세를 제외한 모든 연령대의 양성 클래스를 언더샘플링합니다.",
      "D": "40~45세를 제외한 모든 연령대의 음성 클래스를 오버샘플링합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DPL(차이 비율) — 특정 세그먼트에서 양성 클래스의 비율 차이 측정\n▸ 언더샘플링 — 과도하게 대표되는 클래스 샘플 감소\n\n【정답 포인트】\n▸ DPL 값이 +0.9로 매우 높음 → 40~45세 구간에서 양성 클래스가 과도하게 대표됨입니다. 과도하게 대표되는 세그먼트를 줄이려면 언더샘플링 적용이 필요합니다.\n\n【오답 체크】\n(A) 오버샘플링하면 이미 과도한 양성 클래스를 더 증가시켜 불균형 악화합니다.\n(C) 다른 연령대의 양성 클래스를 줄이면 40~45세의 편향은 더 심해집니다.\n(D) 음성 클래스를 다루는 것은 문제가 되는 양성 클래스의 과도한 표현을 해결하지 못합니다.\n\n【시험 포인트】\nDPL 값 해석 → 높은 DPL은 세그먼트에서 양성이 과도 → 언더샘플링으로 correction",
    "en_q": "An ML engineer is training an ML model to identify people's health risk based on 20 features and 1 target. The target class has two values: • Likely to have health risk (positive class) • Unlikely to have health risk (negative class) The age range of people in the dataset is 30 years old to 60 years old. Age is one of the features. The ML engineer analyzes the features. For the positive class, the difference in proportions of labels (DPL) value is (+0.9) for the age range of 40 to 45 compared with all other age ranges. What should the ML engineer do to correct this data imbalance?",
    "en_opts": {
      "A": "Oversample the positive class for the age range of 40 to 45.",
      "B": "Undersample the positive class for the age range of 40 to 45.",
      "C": "Undersample the positive class for all age ranges except 40 to 45.",
      "D": "Oversample the negative class for all age ranges except 40 to 45."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/315477-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 146,
    "question": "회사가 ML 모델을 위한 Amazon SageMaker AI 파이프라인을 구축하고 있습니다. 파이프라인은 분산 처리 및 학습을 사용합니다. ML 엔지니어는 분산 작업을 실행하는 인스턴스 간의 네트워크 통신을 암호화해야 합니다. ML 엔지니어는 분산 작업을 프라이빗 VPC에서 실행하도록 구성했습니다. ML 엔지니어가 암호화 요구사항을 충족하기 위해 어떻게 해야 합니까?",
    "options": {
      "A": "네트워크 격리를 활성화합니다.",
      "B": "보안 그룹을 사용하여 트래픽 암호화를 구성합니다.",
      "C": "컨테이너 간 트래픽 암호화를 활성화합니다.",
      "D": "VPC 플로우 로그를 활성화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Inter-container traffic encryption — SageMaker 분산 학습에서 컨테이너 간 통신 암호화\n▸ TLS 암호화 — 전송 중 데이터 보호\n\n【정답 포인트】\n▸ 분산 학습에서 여러 인스턴스 간 통신이 발생 → 컨테이너 간 데이터 전송 암호화 필요입니다. SageMaker는 inter-container traffic encryption 옵션을 제공하며 TLS 암호화를 적용합니다.\n\n【오답 체크】\n(A) 네트워크 격리는 네트워크 경계를 정의하지만 암호화를 제공하지 않습니다.\n(B) 보안 그룹은 방화벽 규칙 관리이며 자체적으로 데이터 암호화하지 않습니다.\n(D) VPC 플로우 로그는 트래픽 로깅만 하며 암호화 기능 없습니다.\n\n【시험 포인트】\n분산 학습 + 암호화 필요 → inter-container traffic encryption 옵션입니다.",
    "en_q": "A company is building an Amazon SageMaker AI pipeline for an ML model. The pipeline uses distributed processing and training. An ML engineer needs to encrypt network communication between instances that run distributed jobs. The ML engineer configures the distributed jobs to run in a private VPC. What should the ML engineer do to meet the encryption requirement?",
    "en_opts": {
      "A": "Enable network isolation.",
      "B": "Configure traffic encryption by using security groups.",
      "C": "Enable inter-container traffic encryption.",
      "D": "Enable VPC flow logs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382271-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 147,
    "question": "프로덕션에 배포된 ML 모델이 여러 개월 동안 성능이 우수했으며 메트릭 임계값을 충족했습니다. 모델을 모니터링하는 ML 엔지니어가 갑작스러운 성능 저하를 관찰합니다. 모델의 성능 메트릭이 이제 임계값 아래입니다. 성능 저하의 원인은 무엇일 수 있습니까?",
    "options": {
      "A": "학습 데이터 부족",
      "B": "프로덕션 데이터 분포의 드리프트",
      "C": "컴퓨팅 리소스 제약",
      "D": "모델 오버피팅"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Data drift — 시간 경과에 따라 프로덕션 데이터의 분포가 학습 데이터와 달라지는 현상\n▸ 모델 성능 저하 원인 — 데이터 변화로 인한 부적응\n\n【정답 포인트】\n▸ 모델이 장기간 성능 유지 → 학습 데이터 부족은 원인 아닙니다. 갑작스러운 성능 저하 → 실시간 데이터 변화로 인한 drift 발생입니다. 프로덕션 데이터의 특성이 학습 시점의 데이터와 다르면 모델 성능 급감합니다.\n\n【오답 체크】\n(A) 이미 학습 완료되어 있으며 긴 시간 성공 → 초기 데이터 부족은 아닙니다.\n(C) 리소스 제약은 점진적 성능 저하 발생, 급격한 저하 아닙니다.\n(D) 오버피팅은 학습/테스트 성능 불일치로 초기에 나타남, 배포 후 갑작스럽지 않습니다.\n\n【시험 포인트】\n장기 배포 후 갑작스러운 성능 저하 → Data drift 의심 → SageMaker Model Monitor로 감지",
    "en_q": "An ML model is deployed in production. The model has performed well and has met its metric thresholds for months. An ML engineer who is monitoring the model observes a sudden degradation. The performance metrics of the model are now below the thresholds. What could be the cause of the performance degradation?",
    "en_opts": {
      "A": "Lack of training data",
      "B": "Drift in production data distribution",
      "C": "Compute resource constraints",
      "D": "Model overfitting"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382257-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 148,
    "question": "ML 엔지니어가 AWS Glue를 사용하여 타사 공급업체의 독점 데이터를 Amazon SageMaker DeepAR 예측 알고리즘과 함께 사용할 목적의 형식으로 변환하고 있습니다. 데이터에는 ML 엔지니어가 적절한 형식으로 변환해야 하는 여러 개의 유사한 시계열 데이터 파일이 포함되어 있습니다. ML 엔지니어는 저장 비용을 최적화하기 위해 파일을 압축해야 합니다. 이러한 요구사항을 충족하는 솔루션은 어느 것입니까?",
    "options": {
      "A": "Snappy를 사용하여 파일을 RecordIO-Protobuf로 변환하고 파일을 압축합니다.",
      "B": "XZ를 사용하여 파일을 RecordIO-Protobuf로 변환하고 파일을 압축합니다.",
      "C": "XZ를 사용하여 파일을 Apache Parquet 형식으로 변환하고 파일을 압축합니다.",
      "D": "gzip을 사용하여 파일을 Apache Parquet 형식으로 변환하고 파일을 압축합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ DeepAR — SageMaker 내장 알고리즘, Parquet 형식 권장\n▸ Gzip — 범용 압축 포맷, Parquet과 호환성 우수\n\n【정답 포인트】\n▸ DeepAR 알고리즘은 시계열 데이터 처리 → Parquet 형식이 권장입니다. Parquet는 구조화된 데이터에 최적화된 칼럼 기반 형식이며, gzip은 Parquet과 표준 호환성을 제공하면서 좋은 압축률을 달성합니다.\n\n【오답 체크】\n(A) Snappy는 빠른 압축이지만 최적 압축률을 제공하지 않습니다.\n(B) RecordIO-Protobuf는 시계열 데이터에 부적합하며 DeepAR용이 아닙니다.\n(C) XZ는 높은 압축률이나 Parquet 처리 시 호환성 문제, 느린 처리가 발생합니다.\n\n【시험 포인트】\nDeepAR 시계열 → Parquet 형식 + gzip 압축 조합입니다.",
    "en_q": "An ML engineer is using AWS Glue to transform proprietary data from a third-party vendor to a format that the ML engineer intends to use with the Amazon SageMaker DeepAR forecasting algorithm. The data includes several similar time series data files that the ML engineer must convert to the appropriate format. The ML engineer must compress the files to optimize storage costs. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Snappy to convert the files to RecordIO-Protobuf and to compress the files.",
      "B": "Use XZ to convert the files to RecordIO-Protobuf and to compress the files.",
      "C": "Use XZ to convert the files to Apache Parquet format and to compress the files.",
      "D": "Use gzip to convert the files to Apache Parquet and to compress the files."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382291-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 149,
    "question": "회사가 Amazon S3 버킷에 저장된 .csv 파일의 데이터 양을 대폭 증가시켰습니다. 데이터 변환 스크립트와 쿼리가 이제 이전보다 훨씬 오래 걸립니다. ML 엔지니어는 쿼리 성능을 최적화하기 위한 솔루션을 구현해야 합니다. 어느 솔루션이 이 요구사항을 최소 운영 오버헤드로 충족합니까?",
    "options": {
      "A": "AWS Lambda 함수를 구성하여 .csv 파일을 S3 버킷의 더 작은 객체로 분할합니다.",
      "B": "AWS Glue 작업을 구성하여 문자열 타입 값이 있는 열을 제거하고 결과를 S3 버킷에 저장합니다.",
      "C": "AWS Glue 추출, 변환 및 로드(ETL) 작업을 구성하여 .csv 파일을 Apache Parquet 형식으로 변환합니다.",
      "D": "Amazon EMR 클러스터를 구성하여 S3 버킷의 데이터를 처리합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Parquet — 칼럼 기반 저장 형식, 쿼리 성능 최적화에 탁월\n▸ AWS Glue ETL — 관리형 데이터 변환 서비스\n\n【정답 포인트】\n▸ CSV는 전체 행을 읽어야 하므로 대용량 데이터 쿼리가 비효율적입니다. Parquet는 필요한 칼럼만 읽음으로써 IO를 50-90% 감소시킵니다. AWS Glue는 완전 관리형 서비스로 인프라 관리가 불필요합니다.\n\n【오답 체크】\n(A) 파일 분할은 성능 개선이 미미하며 데이터 형식 최적화가 아닙니다.\n(B) 칼럼 삭제는 쿼리 성능 근본 개선이 아니며 형식 최적화가 필요합니다.\n(D) EMR은 클러스터 관리가 필요하므로 운영 오버헤드가 높습니다.\n\n【시험 포인트】\n최소 오버헤드 + 쿼리 성능 → Glue ETL + Parquet 조합입니다.",
    "en_q": "A company has significantly increased the amount of data that is stored as .csv files in an Amazon S3 bucket. Data transformation scripts and queries are now taking much longer than they used to take. An ML engineer must implement a solution to optimize the data for query performance. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Configure an AWS Lambda function to split the .csv files into smaller objects in the S3 bucket.",
      "B": "Configure an AWS Glue job to drop columns that have string type values and to save the results to the S3 bucket.",
      "C": "Configure an AWS Glue extract, transform, and load (ETL) job to convert the .csv files to Apache Parquet format.",
      "D": "Configure an Amazon EMR cluster to process the data that is in the S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382292-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 150,
    "question": "ML 엔지니어가 Amazon SageMaker AI에서 모델을 학습하기 전에 분류 데이터셋을 분석하고 있습니다. ML 엔지니어는 데이터셋에 클래스 라벨 간의 현저한 불균형이 있어 편향된 모델 예측으로 이어질 수 있다고 의심합니다. 클래스 불균형을 확인하기 위해 ML 엔지니어는 적절한 사전 학습 편향 메트릭을 선택해야 합니다. 어느 메트릭이 이 요구사항을 충족합니까?",
    "options": {
      "A": "평균 제곱 오차(MSE)",
      "B": "라벨의 비율 차이(DPL)",
      "C": "실루엣 점수(Silhouette score)",
      "D": "구조 유사성 지수 측정(SSIM)"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DPL — 클래스 라벨의 비율 차이를 측정, 클래스 불균형 감지용\n▸ 사전학습 편향 메트릭 — 모델 학습 전 데이터 편향 확인\n\n【정답 포인트】\n▸ \"클래스 불균형 확인\" → 클래스 라벨의 분포 이상을 확인해야 합니다. DPL은 특정 세그먼트에서 양성 클래스 비율이 전체 데이터와 얼마나 다른지 측정하며, DPL 값이 크면 클래스 불균형이 심해서 편향 위험이 높습니다.\n\n【오답 체크】\n(A) MSE는 회귀용 손실 함수이며 클래스 라벨 불균형 감지가 불가능합니다.\n(C) Silhouette score는 비지도 학습(클러스터링)용이며 분류 문제와 무관합니다.\n(D) SSIM은 이미지 처리용이며 테이블 형식 분류 데이터에 미적용됩니다.\n\n【시험 포인트】\n사전학습 편향 측정 = DPL로 클래스 라벨 비율 불균형 확인",
    "en_q": "An ML engineer is analyzing a classification dataset before training a model in Amazon SageMarker AI. The ML engineer suspects that the dataset has a significant imbalance between class labels that could lead to biased model predictions. To confirm class imbalance, the ML engineer needs to select an appropriate pre-training bias metric. Which metric will meet this requirement?",
    "en_opts": {
      "A": "Mean square error (MSE)",
      "B": "Difference in proportions of labels (DPL)",
      "C": "Silhouette score",
      "D": "Structural similarity index measure (SSIM)"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382276-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 151,
    "question": "ML 엔지니어가 하나의 ML 프레임워크를 사용하여 여러 ML 모델을 학습합니다. ML 엔지니어는 추론 비용을 최적화하고 모델을 Amazon SageMaker AI에서 호스팅해야 합니다. 어느 솔루션이 이러한 요구사항을 가장 비용 효율적으로 충족합니까?",
    "options": {
      "A": "직접 호출을 위한 다중 컨테이너 추론 엔드포인트를 생성합니다.",
      "B": "모든 모델에 대한 다중 모델 추론 엔드포인트를 생성합니다.",
      "C": "순차 호출을 위한 다중 컨테이너 추론 엔드포인트를 생성합니다.",
      "D": "각 모델에 대해 여러 개의 단일 모델 추론 엔드포인트를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Multi-model endpoint — 단일 엔드포인트에서 여러 모델 호스팅, 동적 로딩\n▸ 추론 비용 최적화 — 컴퓨팅 리소스 효율성 극대화\n\n【정답 포인트】\n▸ \"여러 ML 모델\" + \"비용 최적화\" → 공유 리소스 활용이 필수입니다. Multi-model endpoint는 같은 프레임워크의 모델들을 동일 컨테이너에서 로드/언로드하며, 사용하지 않는 모델을 메모리에서 제거해서 메모리를 절약하고 비용을 감소시킵니다.\n\n【오답 체크】\n(A) Multi-container는 모든 컨테이너가 메모리에 상주하므로 비용이 높습니다.\n(C) Sequential invocation은 성능 저하를 야기하며 동시 요청 처리가 불가능합니다.\n(D) 모델당 별도 엔드포인트는 가장 비용 비효율적입니다.\n\n【시험 포인트】\n같은 프레임워크 + 여러 모델 + 비용 최적화 → Multi-model endpoint",
    "en_q": "An ML engineer uses one ML framework to train multiple ML models. The ML engineer needs to optimize the inference costs and host the models on Amazon SageMaker AI. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Create a multi-container inference endpoint for direct invocation.",
      "B": "Create a multi-model inference endpoint for all the models.",
      "C": "Create a multi-container inference endpoint for sequential invocation.",
      "D": "Create multiple single-model inference endpoint for each model."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382264-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 152,
    "question": "회사가 MP4 형식의 비디오에서 움직임을 분류하는 ML 모델을 사용하고 있습니다. 데이터는 Amazon S3에 저장되어 있습니다. 회사가 모델을 생성할 당시에는 모든 비디오 프레임에 라벨을 지정하는 데 4개월이 걸렸습니다. 회사는 Amazon SageMaker AI에서 기존 학습 워크플로우를 사용하여 모델을 재학습해야 합니다. ML 엔지니어는 라벨 지정 시간을 단축하는 솔루션을 구현해야 합니다. 어느 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "SageMaker Ground Truth를 사용하여 비디오 프레임에 주석을 달습니다.",
      "B": "SageMaker JumpStart를 사용하여 사전학습된 컴퓨터 비전 모델을 사용하여 라벨 지정 모델을 개발합니다.",
      "C": "SageMaker Data Wrangler를 사용하여 데이터 워크플로우를 생성합니다. 워크플로우를 사용하여 라벨 지정 프로세스를 최적화합니다.",
      "D": "Amazon Augmented AI(Amazon A2I)의 라벨 지정 인터페이스를 Amazon Rekognition과 함께 사용하여 비디오 프레임에 라벨을 지정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Amazon Rekognition — 컴퓨터 비전 서비스, 객체/동작 감지 자동화\n▸ Amazon A2I — 인간 검수 워크플로우, 머신 예측 + 사람 판단 결합\n\n【정답 포인트】\n▸ 비디오 움직임 분류 → 컴퓨터 비전 + 자동 감지가 필요합니다. Amazon Rekognition이 자동으로 비디오의 동작을 감지하며, A2I가 Rekognition 결과에 대한 인간 검수를 제공해서 라벨 지정 시간을 4개월 대비 훨씬 빠르게 단축할 수 있습니다.\n\n【오답 체크】\n(A) Ground Truth는 수동 라벨 지정 조율로 자동화가 부족합니다.\n(B) JumpStart는 모델 사용/학습용이며 라벨 지정 시간 단축 기능이 없습니다.\n(C) Data Wrangler는 데이터 변환 도구로 라벨 지정 가속 기능이 없습니다.\n\n【시험 포인트】\n비디오 라벨 시간 단축 → Rekognition 자동 감지 + A2I 인간 검수",
    "en_q": "A company is using an ML model to classify motion in videos. The data is stored in MP4 format in Amazon S3. When the company created the model, the company needed 4 months to label all the video frames. The company needs to retrain the model with an existing training workflow in Amazon SageMaker AI. An ML engineer must implement a solution that decreases the labeling time. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use SageMaker Ground Truth to annotate the video frames.",
      "B": "Use SageMaker JumpStart to use pre-trained computer vision models to develop a labeling model.",
      "C": "Use SageMaker Data Wrangler to create a data workflow. Use the workflow to optimize the labeling process.",
      "D": "Use the labeling interface of Amazon Augmented AI (Amazon A2I) with Amazon Rekognition to label the video frames."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382281-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 153,
    "question": "전자상거래 회사가 실시간 재고 관리를 위해 과거 고객 활동을 기반으로 수요를 예측하는 ML 모델을 학습합니다. 회사가 학습된 모델을 프로덕션 Amazon SageMaker AI 엔드포인트에 성공적으로 배포합니다. 그러나 회사는 모델의 예측 성능이 시간 경과에 따라 저하된다는 것을 알아챕니다. 회사는 성능 저하를 완화하기 위한 장기간 및 자동화된 솔루션이 필요합니다. 어느 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon SageMaker Debugger를 사용하여 모델 성능 이상이 감지될 때 자동으로 경고를 보냅니다.",
      "B": "AWS X-Ray를 사용하여 SageMaker AI 엔드포인트의 성능과 들어오는 요청을 모니터링하여 모델 재학습을 알립니다.",
      "C": "Amazon SageMaker Ground Truth를 사용하여 고품질 데이터셋을 정리합니다. 데이터셋을 사용하여 모델을 재학습합니다.",
      "D": "Amazon SageMaker Clarify를 사용하여 모델 및 피처 속성 편향을 모니터링하여 모델 재학습을 알립니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Clarify — 모델 편향/공정성 모니터링, 피처 중요도 분석\n▸ Model drift 감지 — 배포 후 모델 편향 변화 모니터링\n\n【정답 포인트】\n▸ \"시간 경과에 따른 성능 저하\" → drift 또는 편향 증가 가능성이 있습니다. SageMaker Clarify는 배포 후 모델의 편향 변화를 지속 모니터링하며, 피처 속성 편향을 감지해서 모델 재학습을 자동으로 트리거할 수 있습니다.\n\n【오답 체크】\n(A) Debugger는 학습 중 이상 감지이며 배포 후 자동 재학습 트리거 기능이 약합니다.\n(B) X-Ray는 요청 지연 시간/에러율 추적이지만 모델 편향 감지는 불가능합니다.\n(C) Ground Truth는 데이터셋 큐레이션용이며 자동 재학습 트리거 기능이 없습니다.\n\n【시험 포인트】\n장기 배포 + 자동 재학습 + 편향 모니터링 → SageMaker Clarify",
    "en_q": "An ecommerce company trains an ML model to forecast demand for near real-time inventory management based on historical customer activity. The company successfully deploys the trained model to a production Amazon SageMaker AI endpoint. However, the company notices that the model's forecast performance degrades over time. The company needs a long-term and automated solution to mitigate the performance degradation. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon SageMaker Debugger to automatically send alerts when model performance anomalies are detected.",
      "B": "Use AWS X-Ray to monitor the performance of the SageMaker AI endpoint and the incoming requests to inform model re-training.",
      "C": "Use Amazon SageMaker Ground Truth to curate a high-quality dataset. Use the dataset to re-train the model.",
      "D": "Use Amazon SageMaker Clarify to monitor model and feature attribution bias to inform model re-training."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382255-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 154,
    "question": "물류 회사가 운전자의 기본 모니터링을 위해 차량 카메라를 설치했습니다. 회사는 사고로 이어질 수 있는 산만함을 식별하여 운전자 안전을 개선하고 싶어합니다. 어느 솔루션이 최소 운영 노력으로 이 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon Rekognition 시선 방향 감지를 사용하여 운전자 행동을 모니터링하고 산만함을 식별합니다.",
      "B": "Amazon SageMaker AI를 사용하여 AI 모델을 사용자 지정하여 운전자 행동을 모니터링하고 산만함을 식별합니다.",
      "C": "타사 운전자 모니터링 시스템을 Amazon Rekognition과 통합하여 운전자 행동을 모니터링하고 산만함을 식별합니다.",
      "D": "Amazon Comprehend를 사용하여 텍스트 기반 운전자 피드백을 분석하고 산만함을 식별합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Rekognition eye gaze detection — 눈동자 움직임/응시 방향 감지\n▸ 최소 운영 노력 — 관리형 서비스, 커스텀 개발 최소화\n\n【정답 포인트】\n▸ 차량 카메라 → 이미지/비디오 데이터 수집이 가능합니다. Rekognition은 관리형 컴퓨터 비전 서비스로 즉시 사용 가능하며, Eye gaze detection은 운전 집중도 판단으로 산만함 감지에 직결됩니다. 별도 모델 개발/학습이 불필요해서 최소 운영 노력입니다.\n\n【오답 체크】\n(B) SageMaker는 커스텀 모델 학습이 필요해서 개발 노력이 높습니다.\n(C) 타사 시스템 + Rekognition 통합은 복잡도 증가로 비용이 높습니다.\n(D) Comprehend는 텍스트 분석이며 카메라 영상 처리가 불가능합니다.\n\n【시험 포인트】\n비디오 카메라 + 운전자 안전 + 최소 운영 → Rekognition eye gaze detection",
    "en_q": "A logistics company has installed in-vehicle cameras for basic monitoring of its drivers. The company wants to improve driver safety by identifying distractions that could lead to accidents. Which solution will meet this requirement with the LEAST operational effort?",
    "en_opts": {
      "A": "Use Amazon Rekognition eye gaze direction detection to monitor driver behavior and identify distractions.",
      "B": "Use Amazon SageMaker AI to customize an AI model to monitor driver behavior and identify distractions.",
      "C": "Integrate a third-party driver monitoring system with Amazon Rekognition to monitor driver behavior and identify distractions",
      "D": "Use Amazon Comprehend to analyze text-based driver feedback and identify distractions."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382288-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 155,
    "question": "회사가 컨테이너에 패키징된 ML 모델을 학습했습니다. 회사는 모델을 기존 Python 웹 애플리케이션과 통합합니다. 회사는 Kubernetes를 사용하여 AWS에서 모델을 호스팅해야 합니다. 회사는 컨트롤 플레인을 관리하지 않으려고 하며 리소스를 반복 가능한 방식으로 프로비저닝해야 합니다. 인프라는 Python을 사용하여 프로비저닝되어야 합니다. 어느 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "AWS CloudFormation을 사용하여 여러 가용 영역에서 Amazon EC2 인스턴스를 프로비저닝합니다. Kubernetes 클러스터를 설정합니다. 모델 컨테이너를 Kubernetes 클러스터에 호스팅합니다.",
      "B": "AWS CLI를 사용하여 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 프로비저닝합니다. Amazon Elastic Container Registry(Amazon ECR) 리포지토리에 이미지를 저장합니다. 모델 컨테이너를 EKS 클러스터에 호스팅합니다.",
      "C": "AWS Cloud Development Kit(AWS CDK)를 사용하여 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 프로비저닝합니다. Amazon Elastic Container Registry(Amazon ECR) 리포지토리에 이미지를 저장합니다. 모델 컨테이너를 EKS 클러스터에 호스팅합니다.",
      "D": "AWS CloudFormation을 사용하여 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 프로비저닝합니다. Amazon Elastic Container Registry(Amazon ECR) 리포지토리에 이미지를 저장합니다. 모델 컨테이너를 EKS 클러스터에 호스팅합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS CDK — Python/TypeScript로 Infrastructure as Code, 프로그래밍 친화적\n▸ Amazon EKS — AWS 관리형 Kubernetes, 컨트롤 플레인 자동 관리\n\n【정답 포인트】\n▸ \"Python을 사용하여 프로비저닝\" → CDK는 Python/TypeScript를 지원합니다. (CloudFormation은 JSON/YAML) \"컨트롤 플레인 관리 불필요\" → EKS는 완전 관리형 서비스입니다. \"반복 가능한 방식\" → Infrastructure as Code가 필수이며 CDK는 Python 코드로 EKS 생성 자동화가 가능합니다.\n\n【오답 체크】\n(A) CloudFormation은 JSON/YAML이며 Python이 아닙니다. EC2 직접 관리이므로 컨트롤 플레인 관리가 필요합니다.\n(B) CLI는 반복 가능한 IaC 제공이 못 됩니다.\n(D) CloudFormation은 Python 기반이 아닙니다.\n\n【시험 포인트】\nKubernetes + Python IaC + 관리형 → AWS CDK + Amazon EKS",
    "en_q": "A company has trained an ML model that is packaged in a container. The company will integrate the model with an existing Python web application. The company needs to host the model on AWS by using Kubernetes. The company does not want to manage the control plane and must provision the resources in a repeatable manner. The infrastructure must be provisioned by using Python. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS CloudFormation to provision Amazon EC2 instances in multiple Availability Zones. Set up a Kubernetes cluster. Host the model container on the Kubernetes cluster.",
      "B": "Use the AWS CLI to provision an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Store the image in an Amazon Elastic Container Registry (Amazon ECR) repository. Host the model container on the EKS cluster.",
      "C": "Use the AWS Cloud Development Kit (AWS CDK) to provision an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Store the image in an Amazon Elastic Container Registry (Amazon ECR) repository. Host the model container on the EKS cluster.",
      "D": "Use AWS CloudFormation to provision an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Store the image in an Amazon Elastic Container Registry (Amazon ECR) repository. Host the model container on the EKS cluster."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382306-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 156,
    "question": "ML 엔지니어가 선형 회귀 ML 모델을 개발하고 있습니다. 모델은 학습 데이터셋에서 높은 정확도를 보이지만 보지 못한 새로운 데이터에서는 성능이 좋지 않습니다. ML 엔지니어가 이 문제를 해결하기 위해 어떤 조치를 취해야 합니까?",
    "options": {
      "A": "모델의 복잡성을 증가시켜 학습 데이터의 더 많은 패턴을 캡처합니다. Amazon SageMaker Debugger를 사용하여 수렴 문제를 모니터링합니다.",
      "B": "교차 검증 및 정규화와 같은 ML 기법을 적용합니다. Amazon SageMaker Experiments를 사용하여 다양한 모델 버전과 해당 성능 메트릭을 추적하고 비교합니다.",
      "C": "모델을 직접 프로덕션에 배포합니다. Amazon SageMaker Clarify를 사용하여 새 데이터에 대한 모델 출력을 해석합니다. 이러한 인사이트를 바탕으로 모델을 조정합니다.",
      "D": "모델 크기를 조정하지 않고 학습 데이터셋의 크기를 증가시킵니다. 새 데이터로 모델을 재학습합니다. 결과를 분석하기 위해 혼동 행렬을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 오버피팅 — 학습 데이터에 과도 적응, 새 데이터 성능 저하\n▸ 정규화(Regularization) — L1/L2 제약으로 복잡도 제어\n\n【정답 포인트】\n▸ 학습 정확도 높음 + 테스트 성능 저하 → 오버피팅 특징입니다. 오버피팅 해결 → 정규화 + 교차 검증이 필수입니다. Experiments로 여러 정규화 강도/모델 버전을 체계적으로 비교하면서 최적 하이퍼파라미터를 찾아 성능을 개선하고 검증할 수 있습니다.\n\n【오답 체크】\n(A) 복잡도 증가는 오버피팅을 악화시키며 근본 해결이 아닙니다.\n(C) 배포 전 오버피팅 해결이 필요하며 배포 후 조정은 비효율입니다.\n(D) 데이터 증가만으로는 부족하며 모델 복잡도 제어가 필요합니다.\n\n【시험 포인트】\n오버피팅(train high, test low) → 정규화 + 교차검증 + Experiments",
    "en_q": "An ML engineer is developing a linear regression ML model. The model shows high accuracy on the training dataset but performs poorly on unseen new data. Which action should the ML engineer take to address this issue?",
    "en_opts": {
      "A": "Increase the complexity of the model to capture more patterns in the training data. Use Amazon SageMaker Debugger to monitor for convergence issues.",
      "B": "Apply ML techniques such as cross-validation and regularization. Use Amazon SageMaker Experiments to track and compare different model versions and their performance metrics.",
      "C": "Directly deploy the model into production. Use Amazon SageMaker Clarify to interpret model outputs on new data. Adjust the model based on these insights.",
      "D": "Increase the size of the training dataset without adjusting the size of the model. Retrain the model on the new data. Generate a confusion matrix to analyze the results."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382322-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 157,
    "question": "회사가 Amazon SageMaker AI 실시간 엔드포인트에 배포된 모델을 교체할 새로운 ML 모델을 학습하고 있습니다. ML 엔지니어는 새 모델의 지연 시간과 정확도를 결정해야 합니다. ML 엔지니어는 기존 모델의 사용자에게 영향을 주지 않고 프로덕션 시나리오에서 새 모델을 평가해야 합니다. 어느 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "선형 트래픽 전환을 사용하여 Blue/Green 배포를 수행합니다.",
      "B": "카나리 트래픽 전환을 사용하여 Blue/Green 배포를 수행합니다.",
      "C": "현재 플릿의 50%의 롤링 배치 크기로 롤링 배포를 수행합니다.",
      "D": "트래픽 샘플링 비율이 100%인 섀도우 테스트를 수행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Shadow testing — 신 버전에서 동일 요청 처리, 결과는 사용자에게 미제공\n▸ 프로덕션 영향 최소 — 기존 사용자 경험 변화 없음\n\n【정답 포인트】\n▸ \"기존 모델 사용자에게 영향 주지 않고\" → 기존 모델은 그대로 운영되어야 합니다. \"프로덕션 시나리오에서 평가\" → 실제 트래픽으로 테스트해야 합니다. Shadow testing은 100% 트래픽을 신 모델에도 전달해서 정확 성능을 측정하며, 신 모델 결과는 사용자 응답에 미포함되므로 위험이 제로입니다.\n\n【오답 체크】\n(A) Linear shifting도 일부 사용자가 신 모델의 영향을 받습니다.\n(B) Canary도 실제 사용자 트래픽 일부를 신 모델로 라우팅하므로 영향 가능성이 있습니다.\n(C) Rolling은 점진적 전환으로 기존 모델 일부가 중단됩니다.\n\n【시험 포인트】\n기존 무영향 + 실제 트래픽 테스트 → Shadow testing 100%",
    "en_q": "A company is training a new ML model to replace a model that is deployed on an Amazon SageMaker AI real-time endpoint. An ML engineer needs to determine the latency and the accuracy of the new model. The ML engineer must evaluate the new model in a production scenario without affecting the users of the existing model. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Perform a blue/green deployment with linear traffic shifting.",
      "B": "Perform a blue/green deployment with canary traffic shifting.",
      "C": "Perform a rolling deployment with a rolling batch size of 50% of the current fleet.",
      "D": "Perform shadow testing with a traffic sampling percentage of 100%."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382267-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 158,
    "question": "ML 엔지니어가 분석용 Amazon S3의 데이터를 준비하고 로드하고 싶어합니다. ML 엔지니어는 추출, 변환 및 로드(ETL) 작업을 실행하여 데이터 스키마를 발견하고 메타데이터를 저장해야 합니다. 어느 솔루션이 최소 수동 작업으로 이 요구사항을 충족합니까?",
    "options": {
      "A": "AWS Glue를 사용하여 ETL 작업을 실행합니다. AWS Glue Data Catalog에 스키마와 관련 메타데이터를 저장합니다.",
      "B": "Amazon SageMaker Data Wrangler 플로우를 생성하여 ETL 작업을 실행합니다. S3 버킷에 스키마와 관련 메타데이터를 저장합니다.",
      "C": "Amazon Athena와 AWS Step Functions를 통합하여 ETL 파이프라인을 생성합니다. 파이프라인을 사용하여 ETL 작업을 실행하고 S3 버킷에 스키마와 관련 메타데이터를 저장합니다.",
      "D": "scikit-learn 라이브러리를 포함하는 Amazon EC2 인스턴스를 시작합니다. ETL 작업을 실행하여 스키마를 발견하고 관련 메타데이터를 Amazon Redshift에 저장합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Glue — 관리형 ETL 서비스, Data Catalog로 메타데이터 자동 저장\n▸ Glue Crawler — 데이터 스키마 자동 감지, 카탈로그 자동 생성\n\n【정답 포인트】\n▸ \"스키마 발견\" + \"메타데이터 저장\" → Glue Crawler가 자동으로 수행합니다. Glue Crawler가 S3 데이터를 스캔해서 스키마를 자동 감지하며, 감지된 스키마는 Data Catalog에 자동 저장됩니다. 분석 도구(Athena, EMR 등)가 Catalog를 활용해서 최소 설정으로 작동합니다.\n\n【오답 체크】\n(B) Data Wrangler는 시각적 변환 도구이며 메타데이터 자동 저장 기능이 약합니다.\n(C) Athena는 쿼리 엔진으로 스키마 감지 기능이 제한적이며 메타데이터 관리가 필요합니다.\n(D) EC2 직접 관리는 운영 오버헤드가 높고 메타데이터 저장이 수동입니다.\n\n【시험 포인트】\n최소 수동 작업 + 스키마 자동 감지 + 메타데이터 저장 → AWS Glue Crawler",
    "en_q": "An ML engineer wants to use, prepare, and load data from Amazon S3 for analytics. The ML engineer must run an extract, transform, and load (ETL) job to discover the schema of the data and to store the metadata. Which solution will meet these requirements with the LEAST manual effort?",
    "en_opts": {
      "A": "Use AWS Glue to run the ETL job. Use the job to discover the schema and to store the associated metadata in the AWS Glue Data Catalog.",
      "B": "Create an Amazon SageMaker Data Wrangler flow to run the ETL job. Use the job to discover the schema and to store the associated metadata in an S3 bucket.",
      "C": "Create an ETL pipeline by using Amazon Athena integrated with AWs Step Functions. Use the pipeline to run the ETL job to discover the schema and to store the associated metadata in an S3 bucket.",
      "D": "Launch an Amazon EC2 instance that includes the scikit-learn library to run the ETL job. Use the job to discover the schema and to store the associated metadata in Amazon Redshift."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382256-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 159,
    "question": "ML 엔지니어가 ML 파이프라인을 구축하고 있습니다. 파이프라인은 Amazon Athena를 사용하여 두 가지 방식으로 데이터셋을 처리해야 합니다. 파이프라인은 배치 처리를 사용하여 대규모 데이터 변환 및 모델 학습을 수행해야 합니다. 파이프라인은 또한 실시간 및 낮은 지연 시간의 쿼리를 위해 거의 실시간 처리를 수행하여 추론 및 분석을 해야 합니다. 어느 파일 형식이 두 가지 처리 유형 모두에 최소 지연 시간을 제공합니까?",
    "options": {
      "A": "CSV",
      "B": "Apache Parquet",
      "C": "중첩된 JSON",
      "D": "역직렬화된 JSON"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Parquet — 칼럼 기반 저장 형식, 배치/실시간 모두 최적화\n▸ Athena — S3 파일 직접 쿼리, 형식 선택이 성능 좌우\n\n【정답 포인트】\n▸ 배치 처리 → 대용량 데이터 스캔 효율성이 필요합니다. 실시간 쿼리 → 낮은 지연 시간이 필요합니다. Parquet는 칼럼 프루닝으로 필요 칼럼만 읽으며 스냅시 압축이 내장되어 IO를 50-90% 감소시킵니다. Athena + Parquet = 배치/실시간 모두 최상의 성능입니다.\n\n【오답 체크】\n(A) CSV는 전체 행을 읽어야 하므로 대규모 데이터 배치 처리가 느립니다.\n(C) 중첩 JSON은 파싱 오버헤드가 높아서 실시간 쿼리가 느립니다.\n(D) 역직렬화 JSON도 동일하게 성능 저하가 발생합니다.\n\n【시험 포인트】\nAthena + 배치/실시간 혼합 → Parquet이 유일한 최적 선택입니다.",
    "en_q": "An ML engineer is building an ML pipeline. The pipeline must process a dataset in two ways by using Amazon Athena. The pipeline must use batch processing to perform large-scale data transformations and for model training. The pipeline must also use near real-time processing to perform low-latency queries for inference and analytics. Which file format will provide the LEAST latency for both types of processing?",
    "en_opts": {
      "A": "CSV",
      "B": "Apache Parquet",
      "C": "Nested JSON",
      "D": "Deserialized JSON"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382274-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 160,
    "question": "회사가 Amazon SageMaker AI ML 모델을 사용하여 실시간 추론을 수행합니다. 회사는 SageMaker AI가 추론을 위해 사용하는 Amazon EC2 인스턴스에 대한 자동 확장을 구성했습니다. 최대 사용량 시간 동안 새 인스턴스가 기존 인스턴스가 완전히 준비되기 전에 시작됩니다. 그 결과 모델은 비효율성과 지연을 경험합니다. 어느 솔루션이 응답 시간에 영향을 주지 않고 확장 프로세스를 최적화합니까?",
    "options": {
      "A": "SageMaker AI에서 다중 모델 엔드포인트 구성으로 변경합니다.",
      "B": "SageMaker AI 추론 엔드포인트의 호출을 관리하기 위해 Amazon API Gateway와 AWS Lambda를 통합합니다.",
      "C": "축소 활동의 쿨다운 기간을 감소시키고 인스턴스의 최대 개수를 증가시킵니다.",
      "D": "확장 활동 후에 쿨다운 기간을 증가시킵니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Cooldown period—최근 확장 후 다음 확장을 시작하기 전 대기 시간\n▸ Scale-out—인스턴스 추가 증가 (수평 확장)\n▸ Scale-in—인스턴스 감소 (축소)\n▸ Warmup time—신규 인스턴스가 요청 처리 준비 완료 시간\n\n【정답 포인트】\n▸ 문제: 새 인스턴스 시작 전 기존 인스턴스 준비 완료 안 됨\n▸ 원인: 확장 후 쿨다운 너무 짧음→신규 인스턴스 준비 전 또 다른 확장 트리거\n▸ 해결: 확장 후 쿨다운 증가→기존 인스턴스 완전히 준비될 때까지 대기\n▸ 결과: 중복 확장 방지→지연 제거\n\n【오답 체크】\n(A)Multi-model endpoint는 확장 문제 해결 아님\n(B)Lambda+API Gateway는 레이턴시 추가, 문제 악화\n(C)축소 쿨다운 단축은 문제와 무관, 최대 인스턴스 증가는 비용만 증가\n\n【시험 포인트】Scale-out 후 쿨다운 증가→신규 인스턴스 준비 완료까지 대기",
    "en_q": "A company uses an Amazon SageMaker AI ML model to make real-time inferences. The company has configured auto scaling for the Amazon EC2 instances that SageMaker AI uses for the inferences. During times of peak usage, new instances launch before existing instances are fully ready. As a result, the model experiences inefficiencies and delays. Which solution will optimize the scaling process without affecting response times?",
    "en_opts": {
      "A": "Change to a multi-model endpoint configuration in SageMaker AI.",
      "B": "Integrate Amazon API Gateway and AWS Lambda to manage invocations of the SageMaker AI inference endpoint.",
      "C": "Decrease the cooldown period for scale-in activities. Increase the maximum number of instances.",
      "D": "Increase the cooldown period after scale-out activities."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382263-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 161,
    "question": "회사가 CreateModel API 작업을 호출하여 Amazon SageMaker AI ML 모델을 엔드포인트에 배포했습니다. API 호출로 설정된 네트워크는 두 개의 프라이빗 서브넷과 하나의 보안 그룹을 포함합니다. 모델은 Amazon S3 버킷에서 데이터를 다운로드하고 S3 버킷에 데이터를 업로드해야 합니다. S3 버킷으로의 트래픽은 인터넷을 통해 이동하면 안 됩니다. 어느 솔루션이 이러한 요구사항을 충족합니까?",
    "options": {
      "A": "NAT 게이트웨이를 생성합니다. S3 버킷으로의 아웃바운드 연결을 허용하도록 보안 그룹을 구성합니다. S3 버킷으로의 모든 트래픽을 NAT 게이트웨이를 통해 리디렉션하도록 라우트 테이블을 구성합니다.",
      "B": "게이트웨이 VPC 엔드포인트를 생성합니다. S3 버킷에 대한 액세스를 제한하는 엔드포인트 정책을 구성합니다. S3 버킷으로의 모든 트래픽을 엔드포인트를 통해 리디렉션하도록 라우트 테이블을 구성합니다.",
      "C": "인터페이스 VPC 엔드포인트를 생성합니다. 보안 그룹이 인바운드 연결만 허용하는지 확인합니다. S3 버킷으로의 모든 트래픽을 엔드포인트를 통해 리디렉션하도록 라우트 테이블을 구성합니다.",
      "D": "게이트웨이 로드 밸런서 VPC 엔드포인트를 생성합니다. S3 버킷에 대한 액세스를 제한하는 IAM 정책을 구성합니다. S3 버킷으로의 모든 트래픽을 엔드포인트를 통해 리디렉션하도록 라우트 테이블을 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Gateway VPC endpoint—S3/DynamoDB용 특화, 라우트 테이블 통합\n▸ Interface VPC endpoint—대부분의 AWS 서비스용, ENI 생성\n▸ NAT gateway—아웃바운드 인터넷 접근용, 인터넷 게이트웨이 필요\n▸ 인터넷 무경유—프라이빗 네트워크 내 통신만 사용\n\n【정답 포인트】\n▸ \"S3 버킷으로 트래픽, 인터넷 무경유\"→VPC 엔드포인트 필수\n▸ S3 전용 엔드포인트→Gateway VPC endpoint 최적화\n▸ 엔드포인트 정책으로 S3 버킷 접근 제어\n▸ 라우트 테이블이 S3 트래픽을 엔드포인트로 자동 라우팅\n\n【오답 체크】\n(A)NAT gateway는 인터넷 게이트웨이 필요→인터넷 경유\n(C)Interface endpoint는 S3에 불필요한 복잡성 추가, ENI 비용\n(D)Gateway Load Balancer endpoint는 S3 지원 안 함, NLB 용도\n\n【시험 포인트】S3+프라이빗 네트워크+인터넷 무경유→Gateway VPC endpoint",
    "en_q": "A company deployed an Amazon SageMaker AI ML model to an endpoint by calling the CreateModel API operation. The network that was established with the API call includes two private subnets and one security group. The model must download data from an Amazon S3 bucket and must upload data to the S3 bucket. The traffic to the S3 bucket must not travel across the internet. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a NAT gateway. Configure the security group to allow outbound connections. Configure route tables to redirect any traffic to the S3 bucket through the NAT gateway.",
      "B": "Create a gateway VPC endpoint. Configure an endpoint policy that restricts access to the S3 bucket. Configure route tables to redirect any traffic to the S3 bucket through the endpoint.",
      "C": "Create an interface VPC endpoint. Verify that the security group allows only inbound connections. Configure route tables to redirect any traffic to the S3 bucket through the endpoint.",
      "D": "Create a Gateway Load Balancer VPC endpoint. Configure an IAM policy that restricts access to the S3 bucket. Configure route tables to redirect any traffic to the S3 bucket through the endpoint."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382290-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 162,
    "question": "회사가 대출금 상환 가능성에 따라 고객을 순위 매기는 새로운 ML 모델을 개발하고 있습니다. 회사는 Amazon SageMaker AI 내장 알고리즘을 사용해야 합니다. 회사가 사용해야 할 알고리즘은 무엇입니까?",
    "options": {
      "A": "XGBoost",
      "B": "K-means 클러스터링",
      "C": "주성분 분석(PCA)",
      "D": "신경 토픽 모델(NTM)"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ XGBoost—랭킹/회귀/분류 모두 가능한 부스팅 앙상블\n▸ K-means clustering—비지도 클러스터링, 순위 매기기 불가\n▸ PCA—차원 감소 기법, 예측 모델 아님\n▸ NTM—토픽 모델링, 텍스트 분석용\n\n【정답 포인트】\n▸ \"고객을 순위 매기기\"→Ranking 또는 Scoring 필요\n▸ \"대출금 상환 가능성\"→연속값 스코어 필요→회귀 가능\n▸ XGBoost는 LambdaMART 알고리즘→랭킹 최적화\n▸ SageMaker 내장 XGBoost 제공→직접 사용 가능\n\n【오답 체크】\n(B)K-means는 비지도 학습, 고객 순위 매기기 불가\n(C)PCA는 피처 축소 기법, 예측/순위 기능 없음\n(D)NTM은 토픽 모델링, 수치 타겟 예측 불가\n\n【시험 포인트】고객 랭킹/점수화→XGBoost (회귀/분류/랭킹 통합)",
    "en_q": "A company is developing a new ML model to rank customers in order of their potential to pay back loans. The company needs to use an Amazon SageMaker AI built-in algorithm. Which algorithm should the company use to meet these requirements?",
    "en_opts": {
      "A": "XGBoost",
      "B": "K-means clustering",
      "C": "Principal component analysis (PCA)",
      "D": "Neural Topic Model (NTM)"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382280-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 163,
    "question": "ML 엔지니어가 Amazon SageMaker AI 파이프라인을 설정하고 있습니다. 파이프라인은 데이터 드리프트가 감지되면 자동으로 재학습 작업을 시작해야 합니다. ML 엔지니어가 이 요구사항을 충족하도록 파이프라인을 설정해야 합니까?",
    "options": {
      "A": "AWS Glue 크롤러와 AWS Glue 추출, 변환 및 로드(ETL) 작업을 사용하여 데이터 드리프트를 감지합니다. AWS Glue 트리거를 사용하여 재학습 작업을 자동화합니다.",
      "B": "Amazon Managed Service for Apache Flink를 사용하여 데이터 드리프트를 감지합니다. AWS Lambda 함수를 사용하여 재학습 작업을 자동화합니다.",
      "C": "SageMaker Model Monitor를 사용하여 데이터 드리프트를 감지합니다. AWS Lambda 함수를 사용하여 재학습 작업을 자동화합니다.",
      "D": "Amazon QuickSight 이상 감지를 사용하여 데이터 드리프트를 감지합니다. AWS Step Functions 워크플로우를 사용하여 재학습 작업을 자동화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Monitor—배포 모델의 drift 감지 전문\n▸ Data drift—입력 데이터 분포 변화\n▸ Concept drift—타겟 변수/피처 관계 변화\n▸ CloudWatch Events—Model Monitor 경보 트리거\n▸ Lambda—경보 기반 자동 재학습 실행\n\n【정답 포인트】\n▸ \"배포된 모델의 드리프트 감지\"→SageMaker Model Monitor 전문 도구\n▸ Model Monitor가 프로덕션 데이터 모니터링→드리프트 자동 감지\n▸ CloudWatch Events 통합→Lambda 트리거\n▸ Lambda 함수가 재학습 작업(SageMaker Training) 시작\n▸ 완전 자동화 파이프라인 구성\n\n【오답 체크】\n(A)Glue는 데이터 파이프라인용, 배포 후 모델 모니터링 기능 약함\n(B)Apache Flink는 스트림 처리, 모델 드리프트 감지 전문 아님\n(D)QuickSight는 시각화 도구, 자동화된 drift 감지 부족\n\n【시험 포인트】배포 모델+자동 재학습+드리프트 감지→SageMaker Model Monitor+Lambda",
    "en_q": "An ML engineer is setting up an Amazon SageMaker AI pipeline for an ML model. The pipeline must automatically initiate a re-training job if any data drift is detected. How should the ML engineer set up the pipeline to meet this requirement?",
    "en_opts": {
      "A": "Use an AWS Glue crawler and an AWS Glue extract, transform and load (ETL) job to detect data drift. Use AWS Glue triggers to automate the re-training job.",
      "B": "Use Amazon Managed Service for Apache Flink to detect data drift. Use an AWS Lambda function to automate the re-training job.",
      "C": "Use SageMaker Model Monitor to detect data drift. Use an AWS Lambda function to automate the re-training job.",
      "D": "Use Amazon QuickSight anomaly detection to detect data drift. Use an AWS Step Functions workflow to automate the re-training job."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382279-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 164,
    "question": "한 회사가 컴퓨터 비전 모델을 개발했습니다. 이 회사는 Amazon SageMaker AI에서 모델을 프로덕션에 배포해야 합니다. 이 회사는 이전에 SageMaker AI에서 모델을 호스팅한 적이 없습니다. ML 엔지니어는 모델 버전을 추적하기 위한 솔루션을 구현해야 합니다. 또한 솔루션은 모델을 호스팅하는 데 사용할 Amazon EC2 인스턴스 유형에 대한 권장사항을 제공해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic Container Registry(Amazon ECR)에 모델을 등록합니다. 인스턴스 유형 권장사항을 위해 AWS Compute Optimizer를 사용합니다.",
      "B": "SageMaker Model Registry에 모델을 등록합니다. 인스턴스 유형 권장사항을 위해 SageMaker Autopilot을 사용합니다.",
      "C": "SageMaker Model Registry에 모델을 등록합니다. 인스턴스 유형 권장사항을 위해 SageMaker Inference Recommender를 사용합니다.",
      "D": "Amazon Elastic Container Registry(Amazon ECR)에 모델을 등록합니다. 인스턴스 유형 권장사항을 위해 SageMaker Experiments를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Registry—모델 버전 관리, 메타데이터 추적, 프로덕션 배포를 위한 중앙화된 저장소\n▸ SageMaker Inference Recommender—실제 트래픽 패턴 분석을 통해 최적의 EC2 인스턴스 유형 추천\n\n【정답 포인트】\n▸ 버전 추적+인스턴스 권장→SageMaker Model Registry+SageMaker Inference Recommender 조합\n▸ Model Registry는 AWS 기본 모델 관리 도구로 버전 관리, 메타데이터, 승인 워크플로우 지원\n▸ Inference Recommender는 모델 성능과 비용을 기반으로 최적 인스턴스 타입 추천\n\n【오답 체크】\n(A)ECR은 컨테이너 이미지 저장소일 뿐 모델 버전 관리 기능 부족+Compute Optimizer는 일반 워크로드용이지 SageMaker 추론 최적화 미지원\n(B)Autopilot은 자동 모델 학습 서비스로 인스턴스 권장 기능 없음\n(D)ECR은 버전 관리 미흡+SageMaker Experiments는 실험 추적 도구로 인스턴스 권장 미지원\n\n【시험 포인트】모델 관리 서비스별 용도 구분→Model Registry(저장소/버전), Inference Recommender(최적화)",
    "en_q": "A company has developed a computer vision model. The company needs to deploy the model into production on Amazon SageMaker AI. The company has not hosted a model on SageMaker AI previously. An ML engineer needs to implement a solution to track model versions. The solution also must provide recommendations about which Amazon EC2 instance types to use to host the model. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Register the model in Amazon Elastic Container Registry (Amazon ECR). Use AWS Compute Optimizer for recommendations about instance types.",
      "B": "Register the model in the SageMaker Model Registry. Use SageMaker Autopilot for recommendations about instance types.",
      "C": "Register the model in the SageMaker Model Registry. Use SageMaker Inference Recommender for recommendations about instance types.",
      "D": "Register the model in Amazon Elastic Container Registry (Amazon ECR). Use SageMaker Experiments for recommendations about instance types."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382323-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 165,
    "question": "한 회사가 Amazon SageMaker AI를 사용하여 신용 위험 평가 모델을 개발하고 있습니다. 모델 검증 중에 회사는 모델이 검증 데이터에서 82% 정확도를 달성했음을 발견합니다. 하지만 모델은 훈련 데이터에서 99% 정확도를 달성했습니다. 회사는 배포 전에 모델 정확도 문제를 해결해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "모델 복잡도를 높이기 위해 더 많은 조밀한 레이어를 추가합니다. 배치 정규화를 구현합니다. 훈련 중 조기 종료를 사용합니다.",
      "B": "드롭아웃 레이어를 구현합니다. L1 또는 L2 정규화를 사용합니다. k-폴드 교차 검증을 수행합니다.",
      "C": "주성분 분석(PCA)을 사용하여 특성 차원성을 줄입니다. 모델 레이어를 감소시킵니다. 교차 엔트로피 손실 함수를 구현합니다.",
      "D": "훈련 데이터셋을 증강합니다. 훈련 데이터셋에서 중복 레코드를 제거합니다. 계층화된 샘플링을 구현합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 과적합(Overfitting)—훈련 데이터에는 우수하지만 검증/테스트에서 성능 저하 (99%vs82%)\n▸ 정규화(Regularization)—모델 복잡도 제한하여 일반화 능력 향상\n▸ 드롭아웃(Dropout)—훈련 중 무작위로 뉴런 비활성화하여 과적합 방지\n\n【정답 포인트】\n▸ 증상: 훈련/검증 정확도 격차 큼→과적합 진단\n▸ 드롭아웃+정규화(L1/L2)→모델 복잡도 제한으로 검증 성능 개선\n▸ k-폴드 교차검증→검증 안정성 확보, 일반화 능력 검증\n\n【오답 체크】\n(A)레이어 추가+배치정규화→오히려 복잡도 증가로 과적합 악화 (조기종료만 유용)\n(C)PCA 차원축소는 정보손실 야기+레이어 감소는 구조 변경일 뿐 정규화 미흡\n(D)데이터 증강/중복제거는 훈련데이터 품질 개선이지 과적합 직접 해결 미흡\n\n【시험 포인트】과적합 증상 인식→정규화 기법(드롭아웃, L1/L2) 적용이 해결책",
    "en_q": "A company is using Amazon SageMaker AI to develop a credit risk assessment model. During model validation, the company finds that the model achieves 82% accuracy on the validation data. However, the model achieved 99% accuracy on the training data. The company needs to address the model accuracy issue before deployment. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Add more dense layers to increase model complexity. Implement batch normalization. Use early stopping during training.",
      "B": "Implement dropout layers. Use L1 or L2 regularization. Perform k-fold cross-validation.",
      "C": "Use principal component analysis (PCA) to reduce the feature dimensionality. Decrease model layers. Implement cross-entropy loss functions.",
      "D": "Augment the training dataset. Remove duplicate records from the training dataset. Implement stratified sampling."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382305-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 166,
    "question": "한 회사가 매일 고객 데이터를 수집합니다. 이 회사는 데이터를 날짜별로 분할된 Amazon S3 버킷의 압축 파일로 저장합니다. 매월 분석가들은 데이터를 다운로드하고 데이터를 처리하여 데이터 품질을 확인한 후 데이터를 Amazon QuickSight 대시보드에 업로드합니다. ML 엔지니어는 데이터를 QuickSight로 보내기 전에 자동으로 데이터 품질을 확인하는 솔루션을 구현해야 합니다. 이 요구사항을 가장 낮은 운영 오버헤드로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "매월 AWS Glue 크롤러를 실행하여 AWS Glue 데이터 카탈로그를 업데이트합니다. AWS Glue 데이터 품질 규칙을 사용하여 데이터 품질을 확인합니다.",
      "B": "AWS Glue 트리거를 사용하여 매월 AWS Glue 크롤러를 실행합니다. 데이터를 PySpark DataFrame에 로드하는 AWS Glue 작업을 생성합니다. 사용자 정의 함수를 적용하고 데이터 품질을 평가하도록 작업을 구성합니다.",
      "C": "매월 AWS Lambda 함수에서 Python 스크립트를 실행하여 데이터 품질을 평가합니다. S3 버킷을 구성하여 객체가 S3 버킷에 추가될 때 Lambda 함수를 호출합니다.",
      "D": "S3 버킷을 구성하여 객체가 업로드될 때 Amazon Simple Queue Service(Amazon SQS) 큐로 이벤트 알림을 전송합니다. SQS 큐에 대해 매월 Amazon CloudWatch Insights를 사용하여 데이터 품질을 평가합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Glue Crawler—데이터 소스 자동 스캔하여 AWS Glue Data Catalog 메타데이터 생성/업데이트\n▸ AWS Glue Data Quality—데이터 품질 규칙 정의/실행하여 DQ 메트릭 자동 평가\n▸ 운영 오버헤드 최소화—기존 AWS 서비스로 자동화\n\n【정답 포인트】\n▸ 월간 자동 확인→크롤러+DQ 규칙 조합\n▸ Glue Data Quality는 정상/이상 데이터 패턴 자동 감지 기능\n▸ 추가 코딩/관리 최소화→기본 제공 서비스만 사용\n\n【오답 체크】\n(B)Glue 작업으로 구현 가능하나 커스텀 함수 개발/관리 필요→오버헤드 증가\n(C)Lambda 수동 실행 또는 S3 이벤트 트리거→일관된 월간 스케줄 관리 복잡+코드 관리 필요\n(D)CloudWatch Insights는 로그 분석 도구지 DQ 평가 기능 없음+SQS는 메시징만 담당\n\n【시험 포인트】기본 제공 DQ 기능(Glue Data Quality) 우선→커스텀 코드는 최후의 수단",
    "en_q": "A company collects customer data every day. The company stores the data as compressed files in an Amazon S3 bucket that is partitioned by date. Every month, analysts download the data, process the data to check the data quality, and then upload the data to Amazon QuickSight dashboards. An ML engineer needs to implement a solution to automatically check the data quality before the data is sent to QuickSight. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Run an AWS Glue crawler every month to update the AWS Glue Data Catalog. Use AWS Glue Data Quality rules to check the data quality.",
      "B": "Use an AWS Glue trigger to run an AWS Glue crawler every month to update the AWS Glue Data Catalog. Create an AWS Glue job that loads the data into a PySpark DataFrame. Configure the job to apply custom functions and to evaluate the data quality.",
      "C": "Run Python scripts on an AWS Lambda function every month to evaluate data quality. Configure the S3 bucket to invoke the Lambda function when objects are added to the S3 bucket.",
      "D": "Configure the S3 bucket to send event notifications to an Amazon Simple Queue Service (Amazon SQS) queue when objects are uploaded. Use Amazon CloudWatch insights every month for the SQS queue to evaluate the data quality."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382254-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 167,
    "question": "한 회사가 Amazon SageMaker AI에서 ML 모델을 운영 중입니다. ML 엔지니어는 모델 특성의 입력 데이터 분포 변화를 자동으로 감지하는 모니터링 솔루션을 구현해야 합니다. 이 요구사항을 가장 낮은 운영 오버헤드로 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker Model Monitor를 구성합니다. 데이터 품질 기준선을 설정합니다. 기준선 제약 조건 파일에서 emit_metrics 옵션이 활성화되어 있는지 확인합니다. 데이터 품질과 관련된 특정 메트릭 변화에 대해 회사에 알리도록 Amazon CloudWatch 알람을 구성합니다.",
      "B": "SageMaker Model Monitor를 구성합니다. 모델 품질 기준선을 설정합니다. 기준선 제약 조건 파일에서 comparison_method 옵션이 Robust로 설정되어 있는지 확인합니다. 모델 품질 메트릭 변화에 대해 회사에 알리도록 Amazon CloudWatch 알람을 구성합니다.",
      "C": "SageMaker Debugger를 사용하여 특성 분포 변화를 추적하는 커스텀 규칙을 사용합니다. 규칙이 중요한 변화를 감지할 때 회사에 알리도록 Amazon CloudWatch 알람을 구성합니다.",
      "D": "Amazon CloudWatch를 사용하여 SageMaker AI 엔드포인트의 성능 메트릭을 직접 관찰합니다. 데이터 드리프트 또는 특성 분포 변화의 지표에 대해 CloudWatch 로그를 수동으로 분석합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Monitor—프로덕션 모델의 데이터/모델 품질, 편향 모니터링 자동화 도구\n▸ Data Quality 기준선—훈련 데이터 특성 정의하여 추론 시 입력 분포 변화 감지\n▸ emit_metrics—기준선 제약 조건을 CloudWatch 메트릭으로 내보내는 옵션\n\n【정답 포인트】\n▸ 입력 데이터 분포 변화 감지→데이터 품질(Data Quality) 모니터링\n▸ 자동 감지→Model Monitor+기준선 설정으로 실현\n▸ CloudWatch 연동→emit_metrics+알람으로 알림 자동화\n\n【오답 체크】\n(B)모델 품질 기준선은 예측/실제값 비교용→입력 분포 변화 감지 미흡\n(C)SageMaker Debugger는 훈련 중 모델 디버깅 도구→프로덕션 추론 모니터링 미설계\n(D)CloudWatch 직접 관찰+수동 분석→자동화 불가능, 운영 오버헤드 최대\n\n【시험 포인트】Data Drift 감지=SageMaker Model Monitor+Data Quality 기준선",
    "en_q": "A company has an ML model in Amazon SageMaker AI. An ML engineer needs to implement a monitoring solution to automatically detect changes in the input data distribution of model features. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Configure SageMaker Model Monitor. Establish a data quality baseline. Ensure that the emit_metrics option is enabled in the baseline constraints file. Configure an Amazon CloudWatch alarm to notify the company about changes in specific metrics that are related to data quality.",
      "B": "Configure SageMaker Model Monitor. Establish a model quality baseline. Ensure that the comparison_method option is set to Robust in the baseline constraints file. Configure an Amazon CloudWatch alarm to notify the company about changes in model quality metrics.",
      "C": "Use SageMaker Debugger with custom rules to track shifts in feature distributions. Configure Amazon CloudWatch alarms to notify the company when the rules detect significant changes.",
      "D": "Use Amazon CloudWatch to directly observe the SageMaker AI endpoint's performance metrics. Manually analyze the CloudWatch logs for indicators of data drift or shifts in feature distribution."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382262-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 168,
    "question": "한 회사가 Amazon SageMaker AI를 사용하여 전자상거래 웹사이트를 위한 새로운 추천 모델을 배포합니다. 이 모델은 모든 클라이언트 웹사이트 상호작용의 데이터를 입력으로 사용해야 합니다. 트래픽은 하루 종일 변합니다. 회사는 모델을 위해 추론 엔드포인트를 생성해야 합니다. 이 요구사항을 가장 비용 효율적으로 충족하는 추론 엔드포인트 유형은 무엇입니까?",
    "options": {
      "A": "배치 변환 추론 엔드포인트",
      "B": "비동기 추론 엔드포인트",
      "C": "실시간 추론 엔드포인트",
      "D": "Serverless 추론 엔드포인트"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Serverless 추론—트래픽에 따라 자동 스케일링, 사용 시간만 요금 청구\n▸ 변동 트래픽—일일 트래픽 패턴이 일정하지 않음\n▸ 비용 효율성—유휴 리소스 최소화\n\n【정답 포인트】\n▸ 변동 트래픽+비용 효율→Serverless 추론\n▸ Serverless는 자동 스케일링으로 피크/오프피크 대응\n▸ 시간당 비용 아님→호출 기반 청구로 저비용\n\n【오답 체크】\n(A)Batch Transform—예정된 배치 작업용, 실시간 요청 미지원\n(B)Asynchronous—실시간이 아닌 지연 가능 작업용 (추천은 즉시 필요)\n(C)Real-time—상시 실행으로 변동 트래픽 시 비용 낭비\n\n【시험 포인트】변동 트래픽+즉각적 응답=Serverless 추론 엔드포인트",
    "en_q": "A company is using Amazon SageMaker AI to deploy a new recommendation model for its ecommerce website. The model must use data from all client website interactions as input. Traffic is variable throughout the day. The company needs to create an inference endpoint for the model. Which type of inference endpoint will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Batch transform inference endpoint",
      "B": "Asynchronous inference endpoint",
      "C": "Real-time inference endpoint",
      "D": "Serverless inference endpoint"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382294-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 169,
    "question": "한 회사가 새로 생성된 VPC의 퍼블릭 서브넷에서 Amazon SageMaker AI 도메인을 실행합니다. 네트워크가 올바르게 구성되어 있고 ML 엔지니어들이 SageMaker AI 도메인에 접근할 수 있습니다. 최근 회사는 특정 IP 주소에서 도메인으로의 의심스러운 트래픽을 발견했습니다. 회사는 특정 IP 주소에서의 트래픽을 차단해야 합니다. 이 요구사항을 충족하는 네트워크 구성 업데이트는 무엇입니까?",
    "options": {
      "A": "특정 IP 주소에서의 트래픽을 거부하는 보안 그룹 인바운드 규칙을 생성합니다. 도메인에 보안 그룹을 할당합니다.",
      "B": "특정 IP 주소에서의 트래픽을 거부하는 네트워크 ACL 인바운드 규칙을 생성합니다. 도메인이 위치한 서브넷의 기본 네트워크 ACL에 규칙을 할당합니다.",
      "C": "도메인에 대한 섀도우 변형을 생성합니다. SageMaker Inference Recommender를 구성하여 특정 IP 주소에서의 트래픽을 섀도우 엔드포인트로 보냅니다.",
      "D": "특정 IP 주소에서의 인바운드 트래픽을 거부하도록 VPC 라우트 테이블을 생성합니다. 도메인에 라우트 테이블을 할당합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Security Group—상태 추적 방화벽(stateful), 명시적 거부 규칙 불가능, 오직 허용만 지정\n▸ Network ACL—상태 비추적 방화벽(stateless), 명시적 거부/허용 규칙 모두 지원\n▸ 퍼블릭 서브넷—인터넷 게이트웨이 연결 필요, NACL 우선 적용\n\n【정답 포인트】\n▸ 특정 IP 거부→명시적 거부 규칙 필요\n▸ Security Group은 거부 불가능→NACL만 해결책\n▸ NACL을 서브넷(도메인 위치)에 할당→유입 트래픽 차단\n\n【오답 체크】\n(A)Security Group은 기본적으로 허용 패턴(화이트리스트)→명시적 거부 규칙 미지원\n(C)Shadow Variant는 카나리 배포 기법→특정 IP 차단 용도 아님\n(D)Route Table은 L3 라우팅만 담당→트래픽 거부 불가능\n\n【시험 포인트】Security Group의 한계 인식→NACL만 명시적 거부 지원",
    "en_q": "A company runs an Amazon SageMaker AI domain in a public subnet of a newly created VPC. The network is configured properly, and ML engineers can access the SageMaker AI domain. Recently, the company discovered suspicious traffic to the domain from a specific IP address. The company needs to block traffic from the specific IP address. Which update to the network configuration will meet this requirement?",
    "en_opts": {
      "A": "Create a security group inbound rule to deny traffic from the specific IP address. Assign the security group to the domain.",
      "B": "Create a network ACL inbound rule to deny traffic from the specific IP address. Assign the rule to the default network ACL for the subnet where the domain is located.",
      "C": "Create a shadow variant for the domain. Configure SageMaker Inference Recommender to send traffic from the specific IP address to the shadow endpoint.",
      "D": "Create a VPC route table to deny inbound traffic from the specific IP address. Assign the route table to the domain."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382258-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 170,
    "question": "한 회사의 ML 엔지니어가 분류 모델을 생성하고 있습니다. ML 엔지니어는 데이터셋을 탐색하다가 day_of_week라는 열을 발견합니다. 열의 데이터는 Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday로 구성되어 있습니다. ML 엔지니어는 이 열의 데이터를 이진 값으로 변환하기 위해 어떤 기법을 사용해야 합니까?",
    "options": {
      "A": "이진 인코딩(Binary Encoding)",
      "B": "레이블 인코딩(Label Encoding)",
      "C": "원-핫 인코딩(One-hot Encoding)",
      "D": "토큰화(Tokenization)"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ One-hot Encoding—카테고리 특성을 이진 벡터로 변환 (각 카테고리마다 0/1 컬럼)\n▸ 명목형 데이터(Nominal)—day_of_week처럼 순서 없는 카테고리\n▸ 이진 값 변환—각 클래스를 별도의 이진 특성으로 표현\n\n【정답 포인트】\n▸ 7가지 요일→7개 이진 컬럼으로 변환\n▸ Monday=[1,0,0,0,0,0,0], Tuesday=[0,1,0,0,0,0,0] 등\n▸ 순서 없는 명목 데이터→One-hot 표준 기법\n\n【오답 체크】\n(A)Binary Encoding—카테고리를 2진수로 변환 (001, 010 등)→순서 암시 가능, 명목형 부적절\n(B)Label Encoding—0~6 정수로 순차 할당→순서 암시 (월요일이 목요일보다 \"작다\") 모델 혼동\n(D)Tokenization—텍스트 단어 분할용→구조화 데이터에 부적절\n\n【시험 포인트】명목형 카테고리=One-hot Encoding 선택지",
    "en_q": "A company's ML engineer is creating a classification model. The ML engineer explores the dataset and notices a column that is named day_of_week. The column's data consists of the following values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday. Which technique should the ML engineer use to convert this column's data to binary values?",
    "en_opts": {
      "A": "Binary encoding",
      "B": "Label encoding",
      "C": "One-hot encoding",
      "D": "Tokenization"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382261-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 171,
    "question": "ML 엔지니어가 Amazon SageMaker AI를 사용하여 훈련을 위한 데이터를 준비하려고 합니다. 탐색적 데이터 분석 중에 ML 엔지니어는 여러 범주형 특성에 누락된 값이 있음을 발견합니다. ML 엔지니어는 SageMaker AI를 사용하여 이 문제를 해결할 수 있는 방법은 무엇입니까?",
    "options": {
      "A": "SageMaker Clarify를 사용하여 범주형 특성을 평균값으로 보간합니다.",
      "B": "SageMaker Clarity를 사용하여 범주형 특성을 최빈값으로 보간합니다.",
      "C": "SageMaker Data Wrangler를 사용하여 범주형 특성을 평균값으로 보간합니다.",
      "D": "SageMaker Data Wrangler를 사용하여 범주형 특성을 최빈값으로 보간합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Data Wrangler—ETL/데이터 준비 도구, 결측치 처리 기능 내장\n▸ SageMaker Clarify—모델 설명/편향 분석 도구 (데이터 전처리 아님)\n▸ 최빈값(Mode)—범주형 데이터 결측 대체의 표준 방법\n\n【정답 포인트】\n▸ 범주형 결측치→Mode 보간 (분류형 데이터 특성상)\n▸ SageMaker Data Wrangler→데이터 전처리 전문 도구\n▸ 평균값은 수치형 데이터 전용\n\n【오답 체크】\n(A)Clarify는 해석가능성/편향 분석→데이터 보간 기능 없음\n(B)Clarity는 실제 존재하지 않는 서비스명 (오타)\n(C)Data Wrangler 맞으나 평균값 사용→범주형에는 부적절\n\n【시험 포인트】범주형 결측치=Mode 보간+Data Wrangler 사용",
    "en_q": "An ML engineer wants to use Amazon SageMaker AI to prepare data for training. During exploratory data analysis, the ML engineer notices that several categorical features are missing values. How can the ML engineer use SageMaker AI to solve this problem?",
    "en_opts": {
      "A": "Use SageMaker Clarify to impute categorical features with the mean value.",
      "B": "Use SageMaker Clarity to impute categorical features with the mode value.",
      "C": "Use SageMaker Data Wrangler to impute categorical features with the mean value.",
      "D": "Use SageMaker Data Wrangler to impute categorical features with the mode value."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382260-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 172,
    "question": "한 회사가 AWS Account A의 Amazon S3 버킷에 사용자 클릭스트림 데이터를 저장합니다. 회사는 AWS Account B의 Amazon SageMaker AI에서 ML 모델을 훈련하기 위해 데이터를 사용해야 합니다. 훈련은 10일이 걸릴 것입니다. 회사는 훈련에서 오직 프라이빗 IP 주소만 사용해야 합니다. 회사는 또한 훈련 메타데이터를 AWS와 공유하지 않도록 해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Account A와 Account B 간 VPC 피어링을 설정합니다. AWS에 이메일을 보내 메타데이터 수집 거부를 요청합니다.",
      "B": "S3 버킷을 위한 VPC 엔드포인트를 설정합니다. 훈련 작업에서 SageMaker AI OPT_OUT_TRACKING 환경 변수를 1로 설정합니다.",
      "C": "Account A의 S3 버킷에 할당된 보안 그룹 정책을 구성하여 Account B에서만 접근하도록 합니다. AI 서비스 거부 정책을 생성합니다.",
      "D": "만료 시간이 있는 서명된 URL을 생성합니다. 서명된 URL을 사용하여 데이터에 접근합니다. 훈련 작업에서 SageMaker AI OPT_OUT_TRACKING 환경 변수를 1로 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ VPC Endpoint—AWS 서비스와 프라이빗 연결, 인터넷 게이트웨이 거치지 않음\n▸ OPT_OUT_TRACKING—AWS에 훈련 메타데이터 전송 거부 환경 변수\n▸ Cross-Account 접근—계정 간 안전한 데이터 공유\n\n【정답 포인트】\n▸ 프라이빗 IP 만 사용→VPC Endpoint (인터넷 경로 회피)\n▸ 메타데이터 비공유→OPT_OUT_TRACKING=1 설정\n▸ 두 조건 동시 만족 필요\n\n【오답 체크】\n(A)VPC 피어링은 프라이빗 연결 가능하지만 메타데이터 거부는 이메일 수동 요청 불안정\n(C)보안 그룹은 EC2 인스턴스용→S3 버킷에 할당 불가능\n(D)Presigned URL은 인터넷 경로 필요 가능→프라이빗 IP 요구사항 미충족\n\n【시험 포인트】프라이빗+메타데이터 비공유=VPC Endpoint+OPT_OUT_TRACKING",
    "en_q": "A company stores user clickstream data in an Amazon S3 bucket in AWS Account A. The company needs to use the data to train an ML model in Amazon SageMaker AI in AWS Account B. The training will take 10 days. The company needs to use only private IP addresses in the training. The company also must make sure that no training metadata is shared with AWS. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Set up VPC peering between Account A and Account B. Contact AWS by email to opt out of metadata collection.",
      "B": "Set up a VPC endpoint for the S3 bucket. Set the SageMaker AI OPT_OUT_TRACKING environment variable to 1 in the training job.",
      "C": "Configure a security group policy that is assigned to the S3 bucket in Account A to allow access from only Account B. Create AI services opt-out policies.",
      "D": "Generate presigned URLs with expiration times for the objects that are stored in the S3 bucket. Access the data by using the presigned URLs. Set the SageMaker AI OPT_OUT_TRACKING environment variable to 1 in the training job."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382309-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 173,
    "question": "음악 스트리밍 회사가 애플리케이션에서 Amazon S3 버킷으로 노래 평점을 지속적으로 스트리밍합니다. 회사는 이 평점들을 Amazon SageMaker AI 모델의 훈련 및 추론 입력으로 사용하고 싶어합니다. 회사는 S3 버킷을 소스로 구성한 AWS Glue 데이터 카탈로그를 가지고 있습니다. ML 엔지니어는 이 데이터를 위한 저장소를 생성하기 위한 솔루션을 구현해야 합니다. 솔루션은 배치 훈련 및 실시간 추론 중에 데이터가 동기화 상태를 유지하도록 해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 버킷에서 SageMaker Feature Store로 데이터를 수집합니다. 태그 및 인덱스를 적용합니다.",
      "B": "Amazon Athena를 사용합니다. CREATE TABLE AS SELECT(CTAS) 쿼리를 사용하여 데이터를 그룹화하는 테이블을 생성합니다.",
      "C": "AWS Lake Formation을 사용합니다. 데이터에 태그 기반 제어를 적용합니다.",
      "D": "SageMaker Data Wrangler에서 Generate Data Insights 함수를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker Feature Store—훈련/추론 시 피처를 중앙에서 관리하는 저장소\n▸ 동기화—배치/실시간에서 동일한 피처 데이터 사용 보장\n▸ 온라인/오프라인 스토어—실시간/배치 용 이중 저장소\n\n【정답 포인트】\n▸ 피처 저장소 구축→SageMaker Feature Store 표준\n▸ 배치/실시간 동시 지원→온라인(실시간용)+오프라인(배치용) 스토어\n▸ 자동 동기화→일관된 피처 데이터 제공\n\n【오답 체크】\n(B)Athena—쿼리 엔진, 피처 저장소 미흡, 실시간 추론 성능 부족\n(C)Lake Formation—데이터 거버넌스 도구, 피처 저장소 역할 아님\n(D)Data Wrangler—데이터 탐색/정제 도구, 지속 가능한 저장소 아님\n\n【시험 포인트】배치+실시간 동기화 필요=SageMaker Feature Store 유일 해결책",
    "en_q": "A music streaming company constantly streams song ratings from an application to an Amazon S3 bucket. The company wants to use the ratings as an input for training and inference of an Amazon SageMaker AI model. The company has an AWS Glue Data Catalog that is configured with the S3 bucket as the source. An ML engineer needs to implement a solution to create a repository for this data. The solution must ensure that the data stays synchronized during batch training and real-time inference. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Ingest data into SageMaker Feature Store from the S3 bucket. Apply tags and indexes.",
      "B": "Use Amazon Athena. Create tables by using CREATE TABLE AS SELECT (CTAS) queries to group data.",
      "C": "Use AWS Lake Formation. Apply tag-based control on the data.",
      "D": "Use the Generate Data Insights function in SageMaker Data Wrangler."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382321-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 174,
    "question": "한 병원이 ML 모델을 사용하여 엑스레이 결과를 검증합니다. 병원은 매일 밤 배치 추론 작업을 실행합니다. 병원은 모델 데이터 품질과 모델 성능에 관한 일일 보고서를 생성해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon SageMaker Model Monitor에서 모니터링 작업을 스케줄링합니다. 모델 및 데이터에 대한 모니터링 결과를 생성합니다.",
      "B": "야간 배치 추론 작업의 처리 단계에 대한 메트릭을 포함하는 Amazon CloudWatch 대시보드를 생성합니다. 기준선 리소스 메트릭과 비교합니다. 대시보드 링크를 공유합니다.",
      "C": "AWS Glue DataBrew를 사용하여 모델 파일에 대해 수치 통계 데이터 품질 확인을 사용하는 커스텀 레시피 작업을 생성합니다. 결과를 생성합니다.",
      "D": "모니터링 작업을 실행하는 QualityCheck 단계를 포함하는 SageMaker AI 파이프라인을 생성합니다. 모델 및 데이터에 대한 모니터링 결과를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Monitor—배포된 모델의 데이터/모델 품질 자동 모니터링\n▸ 스케줄 모니터링—정기적 실행으로 일일 보고서 생성\n▸ 모니터링 결과—품질 메트릭 자동 계산\n\n【정답 포인트】\n▸ 일일 자동 보고서→Model Monitor 스케줄 설정\n▸ 데이터+모델 품질 동시 체크→Model Monitor 기본 기능\n▸ 배치 추론 후 평가 용이→배치 작업 후 자동 실행\n\n【오답 체크】\n(B)CloudWatch는 인프라 메트릭(CPU, 메모리) 추적→데이터/모델 품질 평가 불가\n(C)DataBrew는 데이터 품질 규칙 생성→모델 성능 평가 미흡\n(D)SageMaker Pipeline의 QualityCheck는 가능하나 Model Monitor가 표준이며 더 간단\n\n【시험 포인트】데이터+모델 품질 일일 보고=SageMaker Model Monitor 스케줄 기능",
    "en_q": "A hospital is using an ML model to validate x-ray results. The hospital runs a nightly batch inference job. The hospital needs to produce a daily report about model data quality and model performance. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Schedule a monitoring job in Amazon SageMaker Model Monitor. Generate the monitoring results for the model and data.",
      "B": "Create an Amazon CloudWatch dashboard that includes the metrics for processing steps in the nightly batch inference job. Compare the baseline resource metrics. Share the dashboard link.",
      "C": "Use AWS Glue DataBrew to create a custom recipe job that uses the Numerical Statistics data quality check for the model file. Generate the results.",
      "D": "Create a SageMaker AI pipeline that includes a QualityCheck step to run monitoring jobs. Generate the monitoring results for the model and the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382259-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 175,
    "question": "한 회사가 Amazon SageMaker Data Wrangler에 여러 데이터 소스에서 데이터를 수집해야 합니다. 데이터 소스는 Amazon S3, Amazon Redshift, Snowflake입니다. 수집한 데이터는 항상 원본 시스템의 최신 변경사항과 최신 상태여야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "직접 연결을 사용하여 데이터 소스에서 Data Wrangler로 데이터를 가져옵니다.",
      "B": "카탈로그된 연결을 사용하여 데이터 소스에서 Data Wrangler로 데이터를 가져옵니다.",
      "C": "AWS Glue를 사용하여 데이터 소스에서 데이터를 추출합니다. AWS Glue를 사용하여 데이터를 Data Wrangler로 직접 가져옵니다.",
      "D": "AWS Lambda를 사용하여 데이터 소스에서 데이터를 추출합니다. Lambda를 사용하여 데이터를 Data Wrangler로 직접 가져옵니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Cataloged Connection—데이터 소스 메타데이터 저장, 재사용 가능한 연결\n▸ Direct Connection—일회성 연결, 메타데이터 저장 미흡\n▸ 최신 상태 유지—변경 내역 감지 및 자동 동기화\n\n【정답 포인트】\n▸ 지속적 최신화→Cataloged Connection으로 연결 관리\n▸ 자동 동기화→카탈로그 연결은 원본 변경 감지 및 업데이트\n▸ 운영 효율→재사용 가능한 연결 구성\n\n【오답 체크】\n(A)Direct Connection은 일회성→지속적 동기화 메커니즘 미흡\n(C)Glue를 거치는 중간 계층→불필요한 복잡도 증가\n(D)Lambda 커스텀 개발→관리 오버헤드 증가, 표준 기능 미사용\n\n【시험 포인트】자동 최신화 유지=Cataloged Connection으로 원본 변경 동기화",
    "en_q": "A company needs to ingest data from data sources into Amazon SageMaker Data Wrangler. The data sources are Amazon S3, Amazon Redshift, and Snowflake. The ingested data must always be up to date with the latest changes in the source systems. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use direct connections to import data from the data sources into Data Wrangler.",
      "B": "Use cataloged connections to import data from the data sources into Data Wrangler.",
      "C": "Use AWS Glue to extract data from the data sources. Use AWS Glue also to import the data directly into Data Wrangler.",
      "D": "Use AWS Lambda to extract data from the data sources. Use Lambda also to import the data directly into Data Wrangler."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382286-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 176,
    "question": "ML 엔지니어가 Amazon SageMaker Canvas를 사용하여 가져온 데이터셋에서 커스텀 ML 모델을 구축합니다. ML 엔지니어는 모델이 10년 데이터를 기반으로 지속적인 수치 예측을 하기를 원합니다. ML 엔지니어는 모델의 성능을 평가하기 위해 어떤 메트릭을 사용해야 합니까?",
    "options": {
      "A": "정확도(Accuracy)",
      "B": "추론 지연시간(InferenceLatency)",
      "C": "ROC 곡선 아래 영역(Area Under the ROC Curve, AUC)",
      "D": "평균 제곱근 오차(Root Mean Square Error, RMSE)"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 회귀(Regression)—연속 수치 예측 (분류 아님)\n▸ RMSE—회귀 모델의 표준 평가 메트릭, 잔차의 제곱 평균 제곱근\n▸ Accuracy/AUC—분류 모델 전용 메트릭\n\n【정답 포인트】\n▸ \"지속적인 수치 예측\"→회귀 문제\n▸ 회귀 평가→RMSE, MAE, MAPE 등\n▸ RMSE는 원래 단위 해석 용이\n\n【오답 체크】\n(A)Accuracy—분류 모델의 정답률→회귀 미지원\n(B)InferenceLatency—성능 메트릭 아님 (추론 시간만 측정)\n(C)AUC—이진/다중 분류 평가 메트릭→회귀에 부적합\n\n【시험 포인트】연속 수치 예측=회귀=RMSE 메트릭 선택",
    "en_q": "An ML engineer is using Amazon SageMaker Canvas to build a custom ML model from an imported dataset. The ML engineer wants the model to make continuous numeric predictions based on 10 years of data. Which metric should the ML engineer use to evaluate the model's performance?",
    "en_opts": {
      "A": "Accuracy",
      "B": "InferenceLatency",
      "C": "Area Under the ROC Curve (AUC)",
      "D": "Root mean square error (RMSE)"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382304-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 177,
    "question": "한 회사가 두 개의 새로운 ML 모델을 구축, 훈련, 튜닝했습니다:\n• 모델 A는 IP 주소, 위치, 사용자 자격증명을 기반으로 거래가 사기인지 감지합니다. 이 모델은 거래가 발생할 때마다 접근됩니다.\n• 모델 B는 과거 판매 데이터를 기반으로 다음 달의 판매 총액을 예측합니다. 이 모델은 매월 한 번만 접근됩니다.\n회사는 Amazon SageMaker AI를 사용하여 두 모델을 프로덕션에 배포해야 합니다. 회사는 이 요구사항을 충족하기 위해 어떤 호스팅 솔루션을 사용해야 합니까?",
    "options": {
      "A": "두 모델을 하나의 컨테이너에서 하나의 실시간 엔드포인트 뒤에 호스팅합니다.",
      "B": "모델 A를 비동기 엔드포인트로 호스팅합니다. 모델 B를 실시간 엔드포인트로 호스팅합니다.",
      "C": "모델 A를 실시간 엔드포인트로 호스팅합니다. 모델 B에 배치 변환을 사용합니다.",
      "D": "모델 A에 배치 변환을 사용합니다. 모델 B를 비동기 엔드포인트로 호스팅합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Real-time Endpoint—지연시간 중요, 즉각적 응답 필요\n▸ Batch Transform—예정된 배치 작업, 지연 가능\n▸ Asynchronous Endpoint—실시간보다 느린 응답, 비용 효율\n\n【정답 포인트】\n▸ 모델 A (매 거래 접근, 즉시 응답 필요)→Real-time Endpoint\n▸ 모델 B (월 1회 접근, 지연 허용)→Batch Transform\n▸ 각 모델 특성에 맞는 호스팅 방식 선택\n\n【오답 체크】\n(A)하나의 엔드포인트→모델 B 요청 빈도 적음에 불필요한 비용 낭비\n(B)모델 A를 비동기→사기 감지는 즉시 응답 필수, 부적절\n(D)모델 A를 배치→매 거래마다 배치 실행 불가능, 비실용적\n\n【시험 포인트】빈번한 요청+즉시 응답=Real-time, 드문 배치 작업=Batch Transform",
    "en_q": "A company has built, trained, and tuned two new ML models: • Model A detects if a transaction is fraudulent based on the IP address, location, and user credentials. This model will be accessed every time a transaction occurs. • Model B forecasts sales totals for the next month based on historical sales data. This model will be accessed one time each month. The company must deploy both models to production by using Amazon SageMaker AI. Which hosting solution for the models should the company use to meet these requirements?",
    "en_opts": {
      "A": "Host both models in one container behind one real-time endpoint.",
      "B": "Host Model A with an asynchronous endpoint. Host Model B with a real-time endpoint.",
      "C": "Host Model A with a real-time endpoint. Use batch transform for Model B.",
      "D": "Use batch transform for Model A. Host Model B with an asynchronous endpoint."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382313-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 178,
    "question": "한 은행이 Amazon SageMaker AI를 사용하여 어떤 고객이 새로운 상품을 받을 자격이 있는지 결정하는 ML 모델을 생성해야 합니다. 은행은 SageMaker AI가 직접 지원하는 알고리즘을 사용해야 합니다. 모델은 은행의 규제 담당자에게 설명 가능해야 합니다. 이 요구사항을 충족하는 모델링 접근 방식은 무엇입니까?",
    "options": {
      "A": "Object2Vec 알고리즘을 사용하여 모델을 훈련합니다.",
      "B": "Linear Learner 알고리즘을 사용하여 모델을 훈련합니다.",
      "C": "신경망을 훈련합니다.",
      "D": "k-means 알고리즘을 사용하여 모델을 훈련합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Linear Learner—선형 회귀/분류 알고리즘, 높은 해석가능성\n▸ 설명가능성(Explainability)—규제 요구사항, 계수 및 피처 기여도 명확\n▸ SageMaker 기본 알고리즘—AWS 내장 지원\n\n【정답 포인트】\n▸ 규제 규정→모델 투명성/해석가능성 필수\n▸ Linear Learner→가중치 계수로 피처 기여도 명확 해석 가능\n▸ AWS 기본 지원 알고리즘\n\n【오답 체크】\n(A)Object2Vec—임베딩 생성 알고리즘, 해석가능성 낮음\n(C)신경망—블랙박스 모델, 규제 설명 어려움\n(D)k-means—비지도 클러스터링, 분류 예측 불가\n\n【시험 포인트】설명가능+SageMaker 기본=Linear Learner 선택",
    "en_q": "A bank needs to use Amazon SageMaker AI to create an ML model to determine which customers qualify for a new product. The bank must use algorithms that SageMaker AI directly supports. The model must be explainable to the bank's regulators. Which modeling approach will meet these requirements?",
    "en_opts": {
      "A": "Train the model by using the Object2Vec algorithm.",
      "B": "Train the model by using the linear learner algorithm.",
      "C": "Train a neural network.",
      "D": "Train the model by using the k-means algorithm."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382300-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 179,
    "question": "한 회사가 Amazon SageMaker AI에서 새로운 ML 모델을 훈련하기 위해 데이터를 준비하고 있습니다. 이 데이터는 ML 훈련에 이전에 사용된 적이 없습니다. 데이터에는 중복과 누락된 값이 있습니다. 회사는 데이터 품질을 증가시키고 데이터의 통계적 편향을 감지해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker Clarify를 사용하여 데이터 품질 규칙을 생성합니다. SageMaker Model Monitor를 사용하여 편향을 감지합니다.",
      "B": "SageMaker Data Wrangler를 사용하여 데이터 품질 규칙을 생성합니다. SageMaker Clarify를 사용하여 편향을 감지합니다.",
      "C": "SageMaker Debugger를 사용하여 데이터 품질 규칙을 생성합니다. SageMaker Model Monitor를 사용하여 편향을 감지합니다.",
      "D": "SageMaker Model Monitor를 사용하여 데이터 품질 규칙을 생성합니다. SageMaker Clarify를 사용하여 편향을 감지합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SageMaker Data Wrangler—데이터 품질 규칙, 결측치/중복 처리 전문\n▸ SageMaker Clarify—훈련 데이터의 통계적 편향 감지 및 분석\n▸ 훈련 전 데이터 준비→Wrangler 우선, 편향 검증→Clarify\n\n【정답 포인트】\n▸ 데이터 품질 (중복/결측) 개선→Data Wrangler\n▸ 통계적 편향 감지→SageMaker Clarify의 bias detection\n▸ 훈련 전 단계에 Data Wrangler, 데이터 검증 단계에 Clarify\n\n【오답 체크】\n(A)Clarify는 편향 감지 전문→데이터 품질 규칙 미흡, Model Monitor는 프로덕션 배포 후 모니터링용\n(C)Debugger는 훈련 중 모델 디버깅→데이터 품질 규칙 생성 미흡\n(D)Model Monitor는 배포 후 모니터링→훈련 전 데이터 준비 미흡\n\n【시험 포인트】데이터 정제=Data Wrangler, 편향 검증=SageMaker Clarify",
    "en_q": "A company is preparing data to train a new ML model on Amazon SageMaker AI. The data has not been used before for ML training. The data includes duplicates and is missing some values. The company needs to increase the data quality and detect any statistical bias in the data. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use SageMaker Clarify to create data quality rules. Use SageMaker Model Monitor to detect bias.",
      "B": "Use SageMaker Data Wrangler to create data quality rules. Use SageMaker Clarify to detect bias.",
      "C": "Use SageMaker Debugger to create data quality rules. Use SageMaker Model Monitor to detect bias.",
      "D": "Use SageMaker Model Monitor to create data quality rules. Use SageMaker Clarify to detect bias."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382293-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 180,
    "question": "ML 엔지니어가 주택 및 아파트 가격을 예측하는 모델을 구축하고 있습니다. 모델은 세 가지 특성을 사용합니다: 제곱 미터, 가격, 건설 연도. 데이터셋에는 10,000개의 데이터 행이 있습니다. 데이터에는 한 채의 거대한 저택과 하나의 극도로 작은 아파트에 대한 데이터 지점이 포함되어 있습니다. ML 엔지니어는 모델이 일반적인 주택이나 아파트에 대해 정확한 예측을 하도록 데이터셋에서 전처리를 수행해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "이상치를 제거하고 제곱 미터 변수에 대해 로그 변환을 수행합니다.",
      "B": "이상치를 유지하고 제곱 미터 변수에 대해 정규화를 수행합니다.",
      "C": "이상치를 제거하고 제곱 미터 변수에 대해 원-핫 인코딩을 수행합니다.",
      "D": "이상치를 유지하고 제곱 미터 변수에 대해 원-핫 인코딩을 수행합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 이상치(Outlier)—극단적 값 (저택/아파트 사례)\n▸ 로그 변환—극단값 범위 축소, 분포 정규화\n▸ 회귀 모델 성능—\"일반적\" 데이터에 최적화\n\n【정답 포인트】\n▸ 저택/아파트 이상치→모델 학습 왜곡\n▸ 제거+로그 변환→이상치 영향 완전 제거+정규분포 유사도 향상\n▸ 일반적 데이터 예측 정확도 향상\n\n【오답 체크】\n(B)정규화(0~1 범위)는 극단값 유지→모델 편향 여전히 발생\n(C)원-핫 인코딩은 범주형 데이터용→수치형 제곱미터에 부적절\n(D)이상치 유지+잘못된 인코딩→이중 오류\n\n【시험 포인트】극단 이상치+수치형 변수=제거+로그 변환",
    "en_q": "An ML engineer is building a model to predict house and apartment prices. The model uses three features: Square Meters, Price, and Age of Building. The dataset has 10,000 data rows. The data includes data points for one large mansion and one extremely small apartment. The ML engineer must perform preprocessing on the dataset to ensure that the model produces accurate predictions for the typical house or apartment. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Remove the outliers and perform a log transformation on the Square Meters variable.",
      "B": "Keep the outliers and perform normalization on the Square Meters variable.",
      "C": "Remove the outliers and perform one-hot encoding on the Square Meters variable.",
      "D": "Keep the outliers and perform one-hot encoding on the Square Meters variable."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382303-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 181,
    "question": "한 회사가 Amazon SageMaker AI를 사용하여 ML 모델을 개발하고 있습니다. 회사는 모델의 편향을 모니터링하고 대시보드에 결과를 표시해야 합니다. ML 엔지니어는 편향 모니터링 작업을 생성합니다. ML 엔지니어는 대시보드에 표시하기 위해 어떻게 편향 메트릭을 캡처해야 합니까?",
    "options": {
      "A": "SageMaker Clarify에서 AWS CloudTrail 메트릭을 캡처합니다.",
      "B": "SageMaker Clarify에서 Amazon CloudWatch 메트릭을 캡처합니다.",
      "C": "Amazon EventBridge에서 SageMaker Model Monitor 메트릭을 캡처합니다.",
      "D": "Amazon Simple Notification Service(Amazon SNS)에서 SageMaker Model Monitor 메트릭을 캡처합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SageMaker Clarify—편향/공정성 분석 도구\n▸ CloudWatch Metrics—메트릭 수집 및 대시보드 표시 표준\n▸ CloudTrail—감사 로그 (메트릭 아님)\n\n【정답 포인트】\n▸ Clarify 편향 분석→CloudWatch 메트릭으로 내보내기\n▸ CloudWatch 대시보드→시각화 및 실시간 모니터링\n▸ 표준 메트릭 수집 방식\n\n【오답 체크】\n(A)CloudTrail은 API 감사 로그→메트릭 아님, 대시보드 표시 불가\n(C)EventBridge는 이벤트 라우팅 서비스→메트릭 수집/표시 미흡\n(D)SNS는 알림 서비스→메트릭 저장/시각화 기능 없음\n\n【시험 포인트】Clarify 편향 메트릭→CloudWatch로 수집 및 대시보드 표시",
    "en_q": "A company is developing an ML model by using Amazon SageMaker AI. The company must monitor bias in the model and must display the results on a dashboard. An ML engineer creates a bias monitoring job. How should the ML engineer capture bias metrics to display on the dashboard?",
    "en_opts": {
      "A": "Capture AWS CloudTrail metrics from SageMaker Clarify.",
      "B": "Capture Amazon CloudWatch metrics from SageMaker Clarify.",
      "C": "Capture SageMaker Model Monitor metrics from Amazon EventBridge.",
      "D": "Capture SageMaker Model Monitor metrics from Amazon Simple Notification Service (Amazon SNS)."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382282-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 182,
    "question": "한 회사가 Amazon SageMaker AI ML 모델을 사용하여 포트홀이 야기하는 교통 사고를 예측합니다. ML 엔지니어는 SageMaker AI 파이프라인의 일부로 SageMaker Model Monitor를 실행하도록 구성했습니다. MonitoringExecution 출력에서 ML 엔지니어는 파이프라인을 실패하게 하는 여러 baseline_drift_check 위반을 관찰합니다. 이 문제를 해결하기 위해 ML 엔지니어는 무엇을 해야 합니까?",
    "options": {
      "A": "새로운 SageMaker AI 훈련 작업을 사용하여 모델을 재훈련합니다. SageMaker Debugger를 사용하여 오류를 확인합니다.",
      "B": "새로운 훈련 데이터로 모델을 재훈련합니다. Model Monitor에서 원본 기준선을 재사용합니다.",
      "C": "새로운 훈련 데이터로 모델을 재훈련합니다. Model Monitor에서 새로운 기준선을 사용합니다.",
      "D": "기준선 제약 조건 파일에서 emit_metrics 옵션을 활성화한 후 SageMaker AI 파이프라인을 다시 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Baseline Drift—추론 데이터가 훈련 데이터의 기준선과 다름 (데이터 드리프트)\n▸ 기준선 업데이트—새 훈련 데이터로 재생성해야 함\n▸ Model Retraining—새 데이터로 모델 학습\n\n【정답 포인트】\n▸ Baseline drift 위반→기준선과 실제 데이터 분포 이탈\n▸ 새 훈련 데이터→새 기준선 생성 필수\n▸ 원본 기준선 재사용→계속 위반 발생\n\n【오답 체크】\n(A)SageMaker Debugger는 훈련 프로세스 디버깅→드리프트 해결 미흡\n(B)재훈련하나 원본 기준선 유지→드리프트 문제 계속 발생\n(D)emit_metrics 활성화는 메트릭 출력일 뿐→드리프트 해결 미흡\n\n【시험 포인트】재훈련 후 새로운 기준선 생성이 필수→데이터 드리프트 해결",
    "en_q": "A company is using an Amazon SageMaker AI ML model to predict traffic accidents that potholes cause. An ML engineer has configured SageMaker Model Monitor to run as part of a SageMaker AI pipeline. In the MonitoringExecution output, the ML engineer observes several baseline_drift_check violations that are failing the pipeline. What should the ML engineer do to resolve this issue?",
    "en_opts": {
      "A": "Retrain the model by using a new SageMaker AI training job. Check for errors by using SageMaker Debugger.",
      "B": "Retrain the model with new training data. Reuse the original baseline in Model Monitor.",
      "C": "Retrain the model with new training data. Use the new baseline in Model Monitor.",
      "D": "Rerun the SageMaker AI pipeline after enabling the emit_metrics option in the baseline constraints file."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382315-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 183,
    "question": "한 기업이 거래가 사기인지 예측하는 ML 모델을 사용합니다. 기업은 가능한 많은 사기 거래를 식별해야 합니다. 이 요구사항을 충족하기 위해 회사가 모델을 평가하는 데 사용해야 할 평가 지표는 무엇입니까?",
    "options": {
      "A": "F1 점수",
      "B": "ROC 곡선 아래 면적(AUC)",
      "C": "정밀도(Precision)",
      "D": "재현율(Recall)"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Recall(재현율)—실제 양성 중에서 올바르게 예측된 양성의 비율. TP/(TP+FN)\n▸ Precision(정밀도)—양성으로 예측된 것 중 실제 양성의 비율. TP/(TP+FP)\n\n【정답 포인트】\n▸ '가능한 많은 사기 거래를 식별'→거짓음성(FN) 최소화 필요\n▸ 사기 탐지에서 놓친 사기 거래(FN)가 비용이 매우 높음\n▸ Recall이 FN을 직접 반영: TP/(TP+FN)→FN이 낮을수록 높은 Recall\n▸ '많은 식별'은 검출률 극대화를 의미하므로 Recall이 핵심 지표\n\n【오답 체크】\n(A)F1 점수: Precision과 Recall의 조화평균으로 둘 다 고려. 사기 탐지에서는 Recall을 더 중시하므로 부적절\n(B)AUC: 전체 분류 성능을 평가하지만 특정 목표(높은 검출률)에는 최적화되지 않음\n(C)Precision: 오탐지(FP) 최소화에 초점. 사기를 놓치는 것보다 정상 거래를 거부하는 비용이 낮으므로 부적절\n\n【시험 포인트】거짓음성 최소화→Recall 지표 선택. 의료/보안/사기 탐지 도메인에서 검출률 극대화 요구사항 인식.",
    "en_q": "A company uses ML models to predict whether transactions are fraudulent. The company needs to identify as many fraudulent transactions as possible. Which evaluation metric should the company use to evaluate the models to meet this requirement?",
    "en_opts": {
      "A": "F1 score",
      "B": "Area Under the ROC Curve (AUC)",
      "C": "Precision",
      "D": "Recall"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382319-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 184,
    "question": "추천 모델이 ML을 사용하여 Amazon SageMaker AI 엔드포인트를 호출하여 추천을 받습니다. ML 엔지니어는 예상되는 사용자 트래픽 증가 중에 모델이 사용 가능하게 유지되도록 보장해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker AI 엔드포인트에서 자동 스케일링을 구성합니다.",
      "B": "새 SageMaker AI 엔드포인트를 생성합니다. 새 엔드포인트에 모델을 배포합니다.",
      "C": "SageMaker Neo를 사용하여 추론을 위해 모델을 최적화합니다.",
      "D": "SageMaker AI 엔드포인트에 Auto Scaling 그룹을 연결합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Auto Scaling—메트릭(요청 수, CPU) 기반으로 인스턴스 자동 증감\n▸ SageMaker Endpoint—배포된 모델의 실시간 추론 서비스\n\n【정답 포인트】\n▸ 트래픽 증가 중 '모델 가용성 유지'→동적 용량 조정 필요\n▸ SageMaker 엔드포인트는 Auto Scaling 네이티브 지원\n▸ Target Tracking Scaling Policy로 요청/초 메트릭 기반 자동 스케일\n▸ 비용 효율적이고 빠른 응답 시간 제공\n\n【오답 체크】\n(B)새 엔드포인트 생성: 현재 트래픽에 대응 불가, 수동 개입 필요, 비효율적\n(C)SageMaker Neo: 모델 최적화 도구로 스케일링 문제 해결 불가\n(D)Auto Scaling 그룹: EC2 Auto Scaling Group은 SageMaker 엔드포인트와 호환되지 않음. SageMaker는 내부 스케일링 메커니즘 사용\n\n【시험 포인트】SageMaker 엔드포인트 트래픽 증가 대응→Auto Scaling 구성. AWS 서비스별 스케일링 메커니즘 차이 이해.",
    "en_q": "A recommendation model uses ML and calls an Amazon SageMaker AI endpoint to get recommendations. An ML engineer must ensure that the model stays available during an expected increase in user traffic. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure auto scaling on the SageMaker AI endpoint.",
      "B": "Create a new SageMaker AI endpoint. Deploy the model to the new endpoint.",
      "C": "Use SageMaker Neo to optimize the model for inference.",
      "D": "Attach an Auto Scaling group to the SageMaker AI endpoint."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382287-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 186,
    "question": "ML 엔지니어가 Amazon SageMaker AI를 사용하여 ML 모델을 학습했습니다. ML 엔지니어는 모델이 과적합되고 있으며 학습 데이터에 불필요한 피처가 포함되어 있다고 판단합니다. ML 엔지니어는 과적합을 줄이고 불필요한 피처의 영향을 감소시켜야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "학습 반복 횟수를 증가시킵니다. 모델을 재학습합니다.",
      "B": "학습 데이터에 L1 정규화를 적용합니다. 모델을 재학습합니다.",
      "C": "학습 반복 횟수를 감소시킵니다. 모델을 재학습합니다.",
      "D": "SageMaker Debugger를 사용하여 실행 중인 모델에 L1 정규화를 적용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ L1 정규화(Lasso) — 가중치의 절대값 합을 손실함수에 추가(∑|w|). 불필요한 가중치를 0으로 축소하여 피처 선택 효과\n▸ 과적합(Overfitting) — 학습 데이터에 과도하게 적응하여 일반화 성능 저하\n\n【정답 포인트】\n▸ 과적합 + 불필요 피처 제거 → L1 정규화 선택\n▸ L1은 가중치 축소(weight shrinkage)로 비중요 피처의 계수를 정확히 0으로 만듦\n▸ L2(Ridge)는 가중치를 작게 하지만 0으로 만들지 않음 → 피처 제거 효과 없음\n▸ 재학습으로 정규화 효과 적용 필수\n\n【오답 체크】\n(A) 반복 횟수 증가: 과적합을 더 악화시킬 뿐 피처 선택 효과 없음\n(C) 반복 횟수 감소: 모델이 충분히 수렴하지 않아 과소적합(Underfitting) 유발\n(D) SageMaker Debugger: 디버깅 및 모니터링 도구이지 정규화 적용 도구가 아님\n\n【시험 포인트】\nL1 정규화의 피처 선택 특성(sparsity) 이해. 과적합 + 차원 축소 → L1 정규화 조합.",
    "en_q": "An ML engineer has trained an ML model by using Amazon SageMaker AI. The ML engineer determines that the model is overfitting and that the training data contains unnecessary features. The ML engineer must reduce the overfitting and the impact of the unnecessary features. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Increase the number of training iterations. Retrain the model.",
      "B": "Apply L1 regularization to the training data. Retrain the model.",
      "C": "Decrease the number of training iterations. Retrain the model.",
      "D": "Use SageMaker Debugger to apply L1 regularization to the running model."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382278-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 187,
    "question": "ML 엔지니어가 Amazon SageMaker Data Wrangler를 사용하여 데이터셋에 전처리를 수행하려고 합니다. ML 엔지니어는 처리된 데이터셋을 사용하여 분류 모델을 학습하려고 합니다. 전처리 중에 ML 엔지니어는 텍스트 피처에 철자 오류로만 다른 수천 개의 값이 있음을 알아챕니다. ML 엔지니어는 전처리가 완료된 후 텍스트 피처를 모델 학습에 사용할 수 있도록 인코딩 방법을 적용해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "피처의 범주를 나타내기 위해 순서 인코딩을 수행합니다.",
      "B": "피처의 범주를 나타내기 위해 유사성 인코딩을 수행합니다.",
      "C": "피처의 범주를 나타내기 위해 원-핫 인코딩을 수행합니다.",
      "D": "피처의 범주를 나타내기 위해 대상 인코딩을 수행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Similarity Encoding(유사성 인코딩) — 철자 오류나 유사한 문자열을 같은 범주로 그룹화. 편집 거리(Edit Distance) 또는 유사도 메트릭 기반\n▸ 철자 오류(Spelling Errors) — 같은 의미의 값이 다르게 표기(예: \"Smith\", \"Smyth\", \"Smythe\")\n\n【정답 포인트】\n▸ '철자 오류로만 다른 수천 개 값' → 실제로는 소수의 실제 범주\n▸ 유사성 인코딩이 철자 변이를 감지하여 자동으로 그룹화\n▸ 범주 축소로 과적합 방지, 모델 성능 개선\n▸ SageMaker Data Wrangler에서 기본 지원\n\n【오답 체크】\n(A) Ordinal Encoding: 순서가 있는 범주에만 적합(예: 우수/양호/보통). 철자 변이 처리 불가\n(C) One-Hot Encoding: 수천 개 범주 각각을 새 열로 생성하여 차원 폭발 발생. 과적합 악화\n(D) Target Encoding: 목표 변수와 관계 없이 철자 유사성 처리 불가\n\n【시험 포인트】\n범주 문제(철자 오류, 유사 텍스트) → Similarity Encoding. Data Wrangler의 텍스트 전처리 특화 기능 인식.",
    "en_q": "An ML engineer wants to use Amazon SageMaker Data Wrangler to perform preprocessing on a dataset. The ML engineer wants to use the processed dataset to train a classification model. During preprocessing, the ML engineer notices that a text feature has a range of thousands of values that differ only by spelling errors. The ML engineer needs to apply an encoding method so that after preprocessing is complete, the text feature can be used to train the model. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Perform ordinal encoding to represent categories of the feature.",
      "B": "Perform similarity encoding to represent categories of the feature.",
      "C": "Perform one-hot encoding to represent categories of the feature.",
      "D": "Perform target encoding to represent categories of the feature."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382314-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 188,
    "question": "ML 엔지니어가 Amazon SageMaker AI에서 텍스트 생성 모델을 학습하고 있습니다. 몇 가지 에포크 후 손실 함수가 수렴하지 않으며 검증 데이터셋에서 모델의 정확도가 진동하는 결과를 보여줍니다. ML 엔지니어는 모델이 일반화를 달성하도록 보장해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "학습률을 증가시키고 미니배치 크기를 감소시킵니다.",
      "B": "에포크 수가 증가함에 따라 학습률을 증가시킵니다.",
      "C": "학습률을 감소시키고 미니배치 크기를 증가시킵니다.",
      "D": "학습률을 감소시키고 미니배치 크기를 감소시킵니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Learning Rate(학습률) — 각 업데이트에서 가중치 변화 크기. 높을수록 큰 스텝, 낮을수록 작은 스텝\n▸ Mini-batch Size(미니배치 크기) — 한 번의 가중치 업데이트에 사용된 샘플 수\n▸ 진동(Oscillating) — 손실이 수렴 대신 상하로 변함 → 불안정한 학습\n\n【정답 포인트】\n▸ '손실 함수가 수렴하지 않고 정확도 진동' → 학습률이 너무 높음 (불안정)\n▸ 학습률 감소: 스텝 크기 축소로 최적값 근처에서 미세한 조정 → 수렴 안정화\n▸ 미니배치 크기 증가: 그래디언트 추정 분산 감소 → 더 안정적인 학습\n▸ 둘 다 조합하면 일반화 성능 향상 및 안정성 극대화\n\n【오답 체크】\n(A) 학습률 증가 + 배치 감소: 불안정성을 더 악화시킴\n(B) 학습률을 에포크에 따라 증가: 에포크가 진행될수록 더 불안정해짐\n(D) 학습률 감소 + 배치 감소: 배치가 작으면 노이즈 증가로 수렴 어려움\n\n【시험 포인트】\n진동하는 손실 → 학습률 감소. 불안정한 학습 → 배치 크기 증가. 하이퍼파라미터 튜닝 직관.",
    "en_q": "An ML engineer is training a text generation model on Amazon SageMaker AI. After several epochs, the loss function does not converge, and the model's accuracy on the validation dataset starts to show oscillating results. The ML engineer needs to ensure that the model achieves generalization. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Increase the learning rate and decrease the mini-batch size.",
      "B": "Increase the learning rate as the number of epochs increases.",
      "C": "Decrease the learning rate and increase the mini-batch size.",
      "D": "Decrease the learning rate and decrease the mini-batch size."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382299-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 189,
    "question": "한 기업이 NFS 기반 데이터 저장소를 사용하여 ML 학습용 데이터를 저장합니다. Linux 기반 시스템은 데이터 저장소에 액세스합니다. 기업은 온프레미스 서버와 데이터를 사용할 Amazon SageMaker AI 노트북에 공유 데이터 저장소를 액세스 가능하게 하는 하이브리드 시스템이 필요합니다. 데이터 생산자에 대해 파일 잠금이 필요합니다. 이 요구사항을 충족할 AWS 저장소 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 버킷을 사용하여 데이터를 저장합니다. Mountpoint for Amazon S3를 사용하여 S3 버킷을 온프레미스 서버와 SageMaker AI 노트북에 마운트합니다.",
      "B": "Amazon Elastic File System(Amazon EFS) 파일 시스템을 사용하여 데이터를 저장합니다. 파일 시스템을 온프레미스 서버와 SageMaker AI 노트북에 마운트합니다.",
      "C": "Amazon FSx for Lustre 파일 시스템을 사용하여 데이터를 저장합니다. 파일 시스템을 온프레미스 서버와 SageMaker AI 노트북에 마운트합니다.",
      "D": "Amazon Elastic Block Store(Amazon EBS) 볼륨을 사용하여 데이터를 저장합니다. 볼륨을 온프레미스 서버와 SageMaker AI 노트북에 마운트합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon EFS — NFS 프로토콜 기반 관리형 파일 시스템. 파일 잠금(file locking) 지원, VPC 내 AWS 리소스 및 온프레미스 연결 가능\n▸ File Locking(파일 잠금) — 동시 접근 제어로 데이터 무결성 보장. NFS 표준 지원\n\n【정답 포인트】\n▸ 'NFS 기반' → NFS 프로토콜 지원 필수\n▸ '온프레미스 + AWS' → 하이브리드 연결 필요 (AWS Direct Connect 또는 VPN)\n▸ '파일 잠금 필요' → EFS가 POSIX 호환 파일 잠금 기본 지원\n▸ EFS는 다중 EC2, SageMaker, 온프레미스 서버 동시 마운트 지원\n▸ 관리형 NFS 호환 파일 시스템으로 NFS 마이그레이션에 최적\n\n【오답 체크】\n(A) S3 + Mountpoint: 객체 저장소로 NFS 프로토콜 미지원. 파일 잠금 불가능\n(C) FSx for Lustre: 고성능 HPC/빅 데이터용. NFS 미지원, 온프레미스 연결 불가\n(D) EBS: 단일 EC2 인스턴스 전용. 온프레미스 접근 불가, 공유 파일 시스템 아님\n\n【시험 포인트】\nNFS 호환 + 하이브리드 + 파일 잠금 → EFS. AWS 파일 시스템별 기능 매핑 필수.",
    "en_q": "A company uses an NFS-based data store to store data for ML training. Linux-based systems access the data store. The company needs a hybrid system to make the shared data store accessible to on-premises servers and Amazon SageMaker AI notebooks that will consume the data. File locking is required for the data producers. Which AWS storage solution will meet these requirements?",
    "en_opts": {
      "A": "Use an Amazon S3 bucket to store the data. Use Mountpoint for Amazon S3 to mount the S3 bucket to the on-premises servers and the SageMaker AI notebooks.",
      "B": "Use an Amazon Elastic File System (Amazon EFS) file system to store the data. Mount the file system to the on-premises servers and the SageMaker AI notebooks.",
      "C": "Use an Amazon FSx for Lustre file system to store the data. Mount the file system to the on-premises servers and the SageMaker AI notebooks.",
      "D": "Use an Amazon Elastic Block Store (Amazon EBS) volume to store the data. Mount the volume to the on-premises servers and the SageMaker AI notebooks."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382273-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 190,
    "question": "한 기업이 Amazon S3에 Apache Parquet 형식으로 저장된 대규모 데이터셋을 분석해야 합니다. 기업은 일부 열에 원-핫 인코딩을 사용하려고 합니다. 기업은 데이터를 변환하기 위해 코드 불필요한 솔루션이 필요합니다. 솔루션은 모델 학습을 위해 변환된 데이터를 동일한 S3 버킷으로 다시 저장해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue DataBrew 프로젝트를 구성하여 데이터에 연결합니다. DataBrew 대화형 인터페이스를 사용하여 원-핫 인코딩 변환을 수행하는 레시피를 만듭니다. 변환을 적용하고 출력을 S3 버킷으로 다시 쓰는 작업을 만듭니다.",
      "B": "데이터를 가리키는 AWS Glue Data Catalog 테이블을 구성합니다. Amazon Athena를 사용하여 원-핫 인코딩 변환을 수행하는 SQL 명령을 작성합니다. Athena를 구성하여 쿼리 결과를 S3 버킷으로 다시 씁니다.",
      "C": "데이터를 가리키는 AWS Glue Data Catalog 테이블을 구성합니다. AWS Glue ETL 대화형 노트북을 만듭니다. 노트북을 사용하여 원-핫 인코딩 변환을 수행합니다. 구성된 셀을 실행하고 결과를 S3 버킷으로 다시 씁니다.",
      "D": "Amazon Redshift 클러스터를 구성하여 Redshift Spectrum을 사용하는 데이터에 액세스합니다. SQL 명령을 사용하여 Amazon Redshift 내에서 원-핫 인코딩 변환을 수행합니다. Amazon Redshift를 구성하여 결과를 S3 버킷으로 다시 씁니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Glue DataBrew — 시각적 데이터 준비 도구. 코드 불필요, 드래그-드롭으로 레시피 작성. 원-핫 인코딩 변환 기본 지원\n▸ One-Hot Encoding — 범주형 변수를 이진 열들로 변환 (예: \"색상\" → \"색상_빨강\", \"색상_파랑\" 열)\n\n【정답 포인트】\n▸ '코드 불필요한(no-code) 솔루션' → DataBrew 선택 기준\n▸ DataBrew는 원-핫 인코딩 변환을 UI 레시피로 직접 지원\n▸ 대화형 인터페이스로 미리보기 후 작업 생성\n▸ 자동으로 S3 결과 저장 구성 가능\n▸ 비기술 사용자도 사용 가능한 완전 관리형 서비스\n\n【오답 체크】\n(B) Athena + SQL: 원-핫 인코딩을 SQL로 구현하기 어려움. CASE WHEN 조합으로 가능하지만 복잡\n(C) Glue ETL Notebook: 코딩 필요 (PySpark). '코드 불필요' 요구사항 미충족\n(D) Redshift + Spectrum: 클러스터 관리 오버헤드. 데이터 준비보다 분석용. 비용 높음\n\n【시험 포인트】\n코드 불필요 + 데이터 변환 → DataBrew. Glue 서비스 차이(DataBrew/ETL/Catalog) 이해.",
    "en_q": "A company needs to analyze a large dataset that is stored in Amazon S3 in Apache Parquet format. The company wants to use one-hot encoding for some of the columns. The company needs a no-code solution to transform the data. The solution must store the transformed data back to the same S3 bucket for model training. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure an AWS Glue DataBrew project that connects to the data. Use the DataBrew interactive interface to create a recipe that performs the one-hot encoding transformation. Create a job to apply the transformation and to write the output back to an S3 bucket.",
      "B": "Configure an AWS Glue Data Catalog table that points to the data. Use Amazon Athena to write SQL commands to perform the one-hot encoding transformation. Configure Athena to write the query results back to an S3 bucket.",
      "C": "Configure an AWS Glue Data Catalog table that points to the data. Create an AWS Glue ETL interactive notebook. Use the notebook to perform the one-hot encoding transformation. Run the configured cells and write the results back to an S3 bucket.",
      "D": "Configure an Amazon Redshift cluster to access the data by using Redshift Spectrum. Use SQL commands to perform the one-hot encoding transformation within Amazon Redshift. Configure Amazon Redshift to write the results back to an S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382266-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 191,
    "question": "한 기업이 온프레미스 환경의 ML 모델을 Amazon SageMaker AI로 마이그레이션하려고 합니다. 모델은 PyTorch 알고리즘을 기반으로 합니다. 기업은 기존 사용자 지정 스크립트를 AWS에서 최대한 재사용해야 합니다. 이 요구사항을 충족하기 위해 회사가 사용해야 할 SageMaker AI의 기능은 무엇입니까?",
    "options": {
      "A": "SageMaker AI 기본 제공 알고리즘",
      "B": "SageMaker Canvas",
      "C": "SageMaker JumpStart",
      "D": "SageMaker AI 스크립트 모드"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Script Mode(스크립트 모드) — SageMaker의 기존 스크립트를 최소 수정으로 실행 가능. 사용자 정의 학습 코드 지원\n▸ PyTorch Training Script — 온프레미스 Python/PyTorch 코드 그대로 사용 가능\n\n【정답 포인트】\n▸ 'PyTorch 알고리즘' + '기존 스크립트 재사용' → Script Mode 최적 선택\n▸ Script Mode는 사용자 스크립트(train.py)를 SageMaker에서 직접 실행\n▸ PyTorch Framework 컨테이너 자동 제공\n▸ 최소한의 코드 수정만으로 마이그레이션 가능\n▸ on-premises → cloud 전환 시간 최소화\n\n【오답 체크】\n(A) 기본 제공 알고리즘: 사전 구현된 알고리즘만 제공. 커스텀 PyTorch 코드 실행 불가\n(B) Canvas: 노-코드 비즈니스 인텔리전스 도구. 개발자 스크립트 지원 안 함\n(C) JumpStart: 사전 학습된 모델과 예제 제공. 기존 스크립트 재사용 목적 아님\n\n【시험 포인트】\n커스텀 프레임워크 코드 마이그레이션 → Script Mode. SageMaker 기능별 사용 시나리오 차이.",
    "en_q": "A company wants to migrate ML models from an on-premises environment to Amazon SageMaker AI. The models are based on the PyTorch algorithm. The company needs to reuse its existing custom scripts as much as possible on AWS. Which feature of SageMaker AI should the company use to meet these requirements?",
    "en_opts": {
      "A": "SageMaker AI built-in algorithms",
      "B": "SageMaker Canvas",
      "C": "SageMaker JumpStart",
      "D": "SageMaker AI script mode"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382301-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 192,
    "question": "한 기업이 Amazon QuickSight 대시보드를 사용하여 운동화의 판매 가격을 시간에 따라 추적합니다. 대시보드는 많은 소매 웹사이트에서 긁어모은 판매 가격을 집계합니다. 기업은 어떤 가격이 비정상적으로 높은 이상치인지 확인하고 이상치를 시각적으로 표시하려고 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "세로 막대 차트를 사용하여 이상치를 시각화합니다. QuickSight의 계산 필드를 사용하여 이상치 가격의 제곱근을 취하여 차트를 생성합니다. AWS Lambda 함수를 구성하여 이상을 스캔합니다.",
      "B": "AWS Glue DataBrew를 사용하여 데이터를 전처리합니다. REMOVE_OUTLIERS 작업을 설정하여 비정상적으로 높은 가격이 포함된 데이터 행을 제거합니다. AWS Lambda 함수를 호출하여 제거된 행을 Amazon DynamoDB에 저장합니다.",
      "C": "세로 막대 차트를 사용하여 이상치를 시각화합니다. QuickSight의 계산 필드를 사용하여 이상치 가격을 제곱하여 차트를 생성합니다. QuickSight 이상 탐지 인사이트를 사용하여 비정상적으로 높은 가격을 결정합니다.",
      "D": "QuickSight 필터를 사용하여 운동화 가격의 최하위 10개 값을 찾습니다. 10개의 최하위 값에 특정 색상을 할당합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ QuickSight Anomaly Detection Insights — AI 기반 이상치 자동 감지. 통계 모델 활용\n▸ Calculated Field — 기존 필드의 수식 조합으로 새 필드 생성. 시각화 보강용\n\n【정답 포인트】\n▸ '이상치를 시각적으로 표시' + '어떤 가격이 비정상적인지 결정' → 이상 탐지 인사이트 필수\n▸ QuickSight의 Anomaly Detection Insights가 ML 기반으로 이상치 자동 식별\n▸ 막대 차트와 이상 탐지 조합으로 시각화 + 분석 동시 제공\n▸ 계산 필드는 시각화 표현만 개선할 뿐 이상치 식별은 못함\n\n【오답 체크】\n(A) 제곱근 계산: 가격 시각화만 변형. 이상치 식별 로직 없음. Lambda 스캔은 과도\n(B) DataBrew REMOVE_OUTLIERS: 이상치를 제거하는 것이지 시각화 목표 미충족. 식별 후 표시해야 함\n(D) 하위 10개 필터: 고정된 수의 최소값만 선택. 동적 이상치 감지 불가. 통계 근거 없음\n\n【시험 포인트】\n이상치 시각화 + 감지 → QuickSight Anomaly Detection Insights. 계산 필드는 표현 도구일 뿐.",
    "en_q": "A company uses an Amazon QuickSight dashboard to track the sale prices of sneakers over time. The dashboard aggregates sale prices scraped from many retail websites. The company wants to determine which prices are unusually high outliers and to display the outliers visually. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use a vertical bar chart to visualize the outliers. Use a calculated field in QuickSight to take the square roots of the outlier prices to generate the chart. Configure a custom AWS Lambda function to scan the data for anomalies.",
      "B": "Use AWS Glue DataBrew to preprocess the data. Set the REMOVE_OUTLIERS operation to eliminate data rows that include unusually high prices. Invoke an AWS Lambda function to store the removed rows in Amazon DynamoDB.",
      "C": "Use a vertical bar chart to visualize the outliers. Use a calculated field in QuickSight to square the outlier prices to generate the chart. Use QuickSight anomaly detection insights to determine which prices are unusually high.",
      "D": "Use a QuickSight filter to find the lowest 10 values for sneaker price. Assign a specific color to the 10 lowest values."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382268-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 193,
    "question": "ML 엔지니어가 Amazon QuickSight 이상 탐지를 사용하여 정상 대비 매우 높거나 낮은 기계 작동 온도를 감지합니다. ML 엔지니어는 심각도 매개변수를 '낮음 이상'으로 설정합니다. ML 엔지니어는 방향 매개변수를 '모두'로 설정합니다. ML 엔지니어가 방향 매개변수를 '예상보다 낮음'으로 변경하면 이상 탐지 결과에 어떤 영향을 미치겠습니까?",
    "options": {
      "A": "이상 식별 빈도 증가 및 재현율 증가",
      "B": "이상 식별 빈도 감소 및 재현율 감소",
      "C": "이상 식별 빈도 증가 및 재현율 감소",
      "D": "이상 식별 빈도 감소 및 재현율 증가"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Direction Parameter(방향) — 이상 탐지 범위 제한. 'All'=높음/낮음 모두, 'Lower'=낮은 것만, 'Upper'=높은 것만\n▸ Anomaly Frequency(식별 빈도) — 탐지된 이상치의 수\n▸ Recall(재현율) — 실제 이상치 중 올바르게 감지된 비율\n\n【정답 포인트】\n▸ 'All' → 'Lower than expected'로 변경 = 탐지 범위 축소\n▸ 기존: 높음 + 낮음 이상치 모두 감지\n▸ 변경 후: 낮은 이상치만 감지\n▸ 탐지 대상이 절반으로 감소 → 식별 빈도 ↓\n▸ Recall도 감소: 실제 높은 이상치들을 감지하지 못하므로 TP/(TP+FN) 감소\n\n【오답 체크】\n(A) 빈도 증가: 반대. 범위 축소로 감지 수 감소\n(C) 빈도 증가: 위와 동일한 오류\n(D) 빈도 감소 + 재현율 증가: 모순. 빈도가 감소하면 절대 재현율도 감소\n\n【시험 포인트】\n파라미터 범위 제한 → 감지 대상 감소 → 식별 빈도 & 재현율 동시 감소. 이상 탐지 파라미터 영향 이해.",
    "en_q": "An ML engineer is using Amazon QuickSight anomaly detection to detect very high or very low machine operating temperatures compared to normal. The ML engineer sets the Severity parameter to Low and above. The ML engineer sets the Direction parameter to All. What effect will the ML engineer observe in the anomaly detection results if the ML engineer changes the Direction parameter to Lower than expected?",
    "en_opts": {
      "A": "Increased anomaly identification frequency and increased recall",
      "B": "Decreased anomaly identification frequency and decreased recall",
      "C": "Increased anomaly identification frequency and decreased recall",
      "D": "Decreased anomaly identification frequency and increased recall"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382312-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 194,
    "question": "한 기업이 온프레미스 Kubernetes 클러스터에서 ML 워크플로우를 실행합니다. ML 워크플로우에는 ML 모델의 학습 및 추론을 수행하는 ML 서비스가 포함됩니다. 각 ML 서비스는 자체 독립형 Docker 이미지에서 실행됩니다. 기업은 온프레미스 Kubernetes 클러스터에서 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터로 리프트 앤 시프트를 수행해야 합니다. 이 요구사항을 최소한의 운영 오버헤드로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "ML 서비스를 Kubeflow에서 구성되도록 재설계합니다. 새로운 Kubeflow 관리형 ML 서비스를 EKS 클러스터에 배포합니다.",
      "B": "Docker 이미지를 Amazon Elastic Container Registry(Amazon ECR) 리포지토리로 업로드합니다. 배포 파이프라인을 구성하여 이미지를 EKS 클러스터에 배포합니다.",
      "C": "학습 데이터를 Amazon Redshift 클러스터로 마이그레이션합니다. 마이그레이션된 학습 데이터를 사용하여 Amazon Redshift ML로 모델을 재학습합니다. 재학습된 모델을 EKS 클러스터에 배포합니다.",
      "D": "Amazon SageMaker AI 노트북을 구성합니다. 동일한 코드로 모델을 재학습합니다. 재학습된 모델을 EKS 클러스터에 배포합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Lift and Shift(리프트 앤 시프트) — 최소 수정으로 온프레미스 시스템을 클라우드로 이전\n▸ Docker Image — 애플리케이션과 의존성을 포함한 컨테이너 이미지\n▸ ECR(Elastic Container Registry) — AWS 관리형 Docker 이미지 레지스트리\n\n【정답 포인트】\n▸ '각 서비스가 자체 독립형 Docker 이미지' → 기존 이미지 그대로 사용 가능\n▸ '최소 운영 오버헤드' → 코드 재설계/재학습 제외\n▸ 온프레미스 K8s → EKS로 변경 필요 최소화\n▸ ECR 업로드 + EKS 배포 파이프라인 구성 = 가장 직접적인 마이그레이션\n▸ 서비스 로직은 변경 없음, 인프라만 변경\n\n【오답 체크】\n(A) Kubeflow 재설계: 기존 Docker 이미지 무시, 전체 서비스 재구현 필요. 높은 오버헤드\n(C) Redshift ML 재학습: 다른 플랫폼으로 마이그레이션. Kubernetes 환경 무시. 복잡도 증가\n(D) SageMaker 노트북: 재학습 필요, 배포 구조 변경. EKS 목표 달성 불가\n\n【시험 포인트】\nDocker 이미지 재사용 + 최소 오버헤드 → ECR + EKS 배포. 리프트 앤 시프트 전략 이해.",
    "en_q": "A company runs its ML workflows on an on-premises Kubernetes cluster. The ML workflows include ML services that perform training and inferences for ML models. Each ML service runs from its own standalone Docker image. The company needs to perform a lift and shift from the on-premises Kubernetes cluster to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Redesign the ML services to be configured in Kubeflow. Deploy the new Kubeflow managed ML services to the EKS cluster.",
      "B": "Upload the Docker images to an Amazon Elastic Container Registry (Amazon ECR) repository. Configure a deployment pipeline to deploy the images to the EKS cluster.",
      "C": "Migrate the training data to an Amazon Redshift cluster. Retrain the models from the migrated training data by using Amazon Redshift ML. Deploy the retrained models to the EKS cluster.",
      "D": "Configure an Amazon SageMaker AI notebook. Retrain the models with the same code. Deploy the retrained models to the EKS cluster."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382297-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 195,
    "question": "ML 엔지니어는 매달 48~72시간 실행될 수 있는 집약적인 모델 학습 작업을 실행해야 합니다. 학습 작업은 중단했다가 재개할 수 있습니다. ML 엔지니어는 고정 예산이 있으므로 컴퓨팅 리소스를 최적화해야 합니다. 이 요구사항을 가장 비용 효율적으로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "부분 선결제로 Reserved Instances를 구매합니다.",
      "B": "약정 없이 On-Demand Instances를 구매합니다.",
      "C": "Amazon SageMaker AI Savings Plans를 구매합니다.",
      "D": "자동화된 체크포인트를 사용하는 Spot Instances를 구매합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Spot Instances — 온디맨드 대비 70~90% 할인. 언제든 중단 가능하지만 가격은 저렴\n▸ Interruption — AWS가 필요시 인스턴스를 회수할 수 있음. 2분 공지\n▸ Checkpoint(체크포인트) — 학습 상태 저장. 재개 시점부터 다시 시작 가능\n\n【정답 포인트】\n▸ '48~72시간 집약적 작업' + '중단 및 재개 가능' → Spot Instances 최적 조건\n▸ '고정 예산' → 최저 비용 필수 = Spot 가장 저렴\n▸ 자동 체크포인팅으로 Spot 중단 후 재개 가능 (지속성 보장)\n▸ SageMaker Training은 자동 체크포인트 지원\n▸ 비용 = Reserved보다 70~90% 저렴\n\n【오답 체크】\n(A) Reserved Instances: 1년/3년 약정 필요. 필요 시점 불확실하면 비용 낭비\n(B) On-Demand: 가장 비싼 옵션. 고정 예산 제약 위반\n(C) Savings Plans: Reserved와 유사하게 장기 약정. Spot만큼 저렴하지 않음\n\n【시험 포인트】\n장시간 + 중단 가능 + 저비용 → Spot + Checkpoint. 예산 최적화 시나리오에서 Spot 활용.",
    "en_q": "An ML engineer needs to run intensive model training jobs each month that can take 48 to 72 hours to run. The training jobs can be interrupted and resumed without major issues. The ML engineer has a fixed budget and needs to optimize computing resources. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Purchase Reserved Instances with a partial upfront payment.",
      "B": "Purchase On-Demand Instances with no commitment.",
      "C": "Purchase Amazon SageMaker AI Savings Plans.",
      "D": "Purchase Spot Instances that use automated checkpoints."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382285-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 198,
    "question": "한 소매 기업이 고객용 AI 보조자를 만들고 있습니다. 기업은 보조자가 일반 문의에 사용해야 할 대규모 문서 본문을 보유하고 있습니다. 기업은 가격에 대한 모든 응답이 1개월 미만인 문서만 사용하도록 원합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Q Business를 사용하여 응답을 개발합니다. 가격에 대한 응답이 지난 달의 문서만 사용하도록 문서 속성 필터를 구성합니다.",
      "B": "Amazon Q Business를 사용하여 응답을 개발합니다. 가격에 대한 응답이 지난 달의 문서만 사용하도록 소스 귀속 인용을 구성합니다.",
      "C": "문서를 문서 작성 월을 기준으로 폴더로 분할합니다. Amazon Q Developer를 구성하여 가격에 대한 응답을 개발하기 위해 지난 달의 문서만 사용하도록 합니다.",
      "D": "문서를 문서 작성 월을 기준으로 폴더로 분할합니다. 가격에 대한 응답을 위해 지난 달의 문서에만 보조자 액세스를 부여합니다. Amazon Q Developer를 사용하여 응답을 개발합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Q Business — 기업 데이터 기반 RAG 생성형 AI. 접근 제어 및 필터링 지원\n▸ Document Attribute Filter — 메타데이터(생성 날짜 등) 기반으로 문서 자동 필터링\n▸ Source Attribution — 응답의 출처 문서만 표시. 필터링 기능 없음\n\n【정답 포인트】\n▸ '가격에 대한 응답이 1개월 미만 문서만 사용' → 질의 유형별 필터 필요\n▸ Document Attribute Filter가 문서 메타데이터(created_date)로 동적 필터링\n▸ 특정 질의 주제(가격)별로 필터 조건 설정 가능\n▸ Amazon Q Business가 이 기능을 네이티브 지원\n▸ RAG 파이프라인에서 소스 문서를 사전에 필터링\n\n【오답 체크】\n(B) Source Attribution: 인용 표시만. 문서 선택 필터링 기능 없음. 이전 문서도 응답에 포함될 수 있음\n(C) Amazon Q Developer: 개발자용 AI 어시스턴트. 기업 RAG 및 속성 필터링 기능 부족\n(D) 폴더 분할 + 접근 제어: 수동 관리, 확장성 떨어짐. 동적 필터링 불가\n\n【시험 포인트】\nRAG 시스템에서 질의 유형별 소스 필터링 → Document Attribute Filter. Amazon Q 기능차이(Business vs Developer) 이해.",
    "en_q": "A retail company is creating an AI-powered assistant for customers. The company has a large body of documentation that the assistant needs to use for general inquiries. The company wants any responses about prices to use only documentation that is less than 1 month old. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon Q Business to develop the responses. Configure a document attribute filter so that responses about prices use only the documents from the past month.",
      "B": "Use Amazon Q Business to develop the responses. Configure the source attribution citation so that responses about prices use only the documents from the past month.",
      "C": "Segment the documents into folders based on the month of document creation. Configure Amazon Q Developer to use only the documents from the past month to develop responses about prices.",
      "D": "Segment the documents into folders based on the month of document creation. Grant the assistant access to only the documents from the past month for responses about prices. Use Amazon Q Developer to develop the responses."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382317-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 202,
    "question": "한 여행사가 사용자를 위한 다음 공항 목적지를 추천하는 ML 모델을 만들려고 합니다. 기업은 사용자 위치, 회사 웹사이트의 최근 검색 기록, 그리고 2,000개의 사용 가능한 공항에 대한 수백만 개의 데이터 기록을 수집했습니다. 데이터에는 높은 차원의 희소 행렬이 될 것으로 예상되는 대상 열이 있는 여러 범주형 피처가 있습니다. 기업은 Amazon SageMaker AI 기본 제공 알고리즘을 사용해야 합니다. ML 엔지니어는 원-핫 인코딩을 사용하여 범주형 피처를 변환합니다. 이 요구사항을 충족하기 위해 ML 엔지니어가 구현해야 할 알고리즘은 무엇입니까?",
    "options": {
      "A": "CatBoost 알고리즘을 사용하여 다음 공항 목적지를 추천합니다.",
      "B": "DeepAR 예측 알고리즘을 사용하여 다음 공항 목적지를 추천합니다.",
      "C": "Factorization Machines 알고리즘을 사용하여 다음 공항 목적지를 추천합니다.",
      "D": "k-means 알고리즘을 사용하여 사용자를 그룹으로 클러스터링합니다. 각 그룹을 사용자 검색 기록을 기반으로 다음 공항 목적지에 매핑합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Factorization Machines(FM) — 고차원 희소 데이터의 상호작용 학습에 최적화. 저수준 인수분해로 효율적 계산\n▸ Sparse Matrix(희소 행렬) — 대부분 0인 행렬. 원-핫 인코딩된 2,000개 범주는 매우 희소\n▸ Recommendation Problem — 사용자 피처로 카테고리(공항) 예측\n\n【정답 포인트】\n▸ '높은 차원 희소 행렬' + '범주형 피처 + 원-핫 인코딩' → FM 전문 분야\n▸ FM은 인수분해로 2,000개 범주의 희소성 효율적 처리\n▸ 피처 간 상호작용(사용자 위치 × 검색 기록) 자동 학습\n▸ SageMaker FM은 다중 클래스 분류(어느 공항인지) 지원\n▸ 추천 시스템에 최적화된 SageMaker 기본 알고리즘\n\n【오답 체크】\n(A) CatBoost: 범주형 데이터 전문이지만, 희소 데이터 처리는 덜 효율적. 원-핫 이후 차원 폭발\n(B) DeepAR: 시계열 예측 알고리즘. 시간 시리즈 데이터 필요. 상황 미맞음\n(D) k-means: 비지도 클러스터링. 목표 변수(다음 공항)를 무시. 추천 모델 아님\n\n【시험 포인트】\n희소 고차원 + 추천 → Factorization Machines. SageMaker 알고리즘별 최적 사용 시나리오.",
    "en_q": "A travel company wants to create an ML model to recommend the next airport destination for its users. The company has collected millions of data records about user location, recent search history on the company's website, and 2,000 available airports. The data has several categorical features with a target column that is expected to have a high-dimensional sparse matrix. The company needs to use Amazon SageMaker AI built-in algorithms for the model. An ML engineer converts the categorical features by using one-hot encoding. Which algorithm should the ML engineer implement to meet these requirements?",
    "en_opts": {
      "A": "Use the CatBoost algorithm to recommend the next airport destination.",
      "B": "Use the DeepAR forecasting algorithm to recommend the next airport destination.",
      "C": "Use the Factorization Machines algorithm to recommend the next airport destination.",
      "D": "Use the k-means algorithm to cluster users into groups. Map each group to the next airport destination based on user search history."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382269-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 203,
    "question": "ML 엔지니어가 Amazon SageMaker AI 엔드포인트 뒤에서 실행되는 모델의 추론 구성 요소에 대한 자동 스케일링을 구성합니다. ML 엔지니어는 SageMaker AI 자동 스케일링을 분당 모델당 100개의 호출로 설정된 목표 추적 스케일링 정책으로 구성합니다. SageMaker AI 엔드포인트는 정상 업무 시간 중에 적절하게 스케일됩니다. 그러나 ML 엔지니어는 각 업무일이 시작될 때 요청을 처리할 사용 가능한 인스턴스가 0개라고 알아챕니다. 이로 인해 처리가 지연됩니다. ML 엔지니어는 SageMaker AI 엔드포인트가 업무일 시작 시 들어오는 요청을 처리할 수 있도록 보장해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker AI 자동 스케일링 쿨다운 기간을 지원되는 최소값으로 줄입니다. 자동 스케일링 라이프사이클 후크를 추가하여 SageMaker AI 인스턴스를 스케일링합니다.",
      "B": "대상 메트릭을 CPU 사용률로 변경합니다.",
      "C": "스케일링 정책 대상 값을 1로 수정합니다.",
      "D": "Amazon CloudWatch 알람을 기반으로 스케일링하는 단계 스케일링 정책을 적용합니다. 업무일 시작 시 최소 인스턴스 수를 0에서 1로 스케일링하는 두 번째 CloudWatch 알람 및 스케일링 정책을 적용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Target Tracking Scaling Policy — 메트릭(호출/분)을 목표로 자동 스케일. 반응 기반\n▸ Cold Start Problem — 초기 인스턴스 0개로 첫 요청 대응 지연\n▸ Step Scaling + CloudWatch Alarm — 특정 시간/조건에 사전 스케일링\n\n【정답 포인트】\n▸ '분당 100 호출' 목표는 현재 요청에만 반응 → 예측 기반 사전 스케일링 불가\n▸ '업무일 시작 시 0 인스턴스' → Cold Start 발생\n▸ 해결책: CloudWatch Alarm으로 시간 기반 트리거\n▸ 업무일 시작 전에 최소값을 0→1로 증가시키는 별도 정책 필요\n▸ 이렇게 하면 트래픽 도착 시 즉시 처리 가능\n▸ 스케일 다운: 다른 타이밍에 다시 0으로 (비용 절감)\n\n【오답 체크】\n(A) 쿨다운 감소: 스케일링 반응 속도만 높임. 초기 0 문제는 해결 못함\n(B) CPU 메트릭 변경: 목표 여전히 반응 기반. 사전 스케일링 불가\n(C) 목표값을 1로: 항상 1개 이상 유지하면 비용 증가. 유연성 감소\n\n【시험 포인트】\n예측 불가능한 트래픽 스파이크 → 시간 기반 CloudWatch Alarm + Step Scaling. Cold Start 해결 패턴.",
    "en_q": "An ML engineer is configuring auto scaling for an inference component of a model that runs behind an Amazon SageMaker AI endpoint. The ML engineer configures SageMaker AI auto scaling with a target tracking scaling policy set to 100 invocations per model per minute. The SageMaker AI endpoint scales appropriately during normal business hours. However, the ML engineer notices that at the start of each business day, there are zero instances available to handle requests, which causes delays in processing. The ML engineer must ensure that the SageMaker AI endpoint can handle incoming requests at the start of each business day. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Reduce the SageMaker AI auto scaling cooldown period to the minimum supported value. Add an auto scaling lifecycle hook to scale the SageMaker AI instances.",
      "B": "Change the target metric to CPU utilization.",
      "C": "Modify the scaling policy target value to one.",
      "D": "Apply a step scaling policy that scales based on an Amazon CloudWatch alarm. Apply a second CloudWatch alarm and scaling policy to scale the minimum number of instances from zero to one at the start of each business day."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382307-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 204,
    "question": "ML 엔지니어가 Amazon SageMaker Studio 노트북을 사용하여 추정기를 생성하여 신경망을 학습합니다. 추정기는 단일 인스턴스에서 Distributed Data Parallel(DDP)을 사용하는 Python 학습 스크립트를 실행합니다. 이 인스턴스에는 하나 이상의 GPU가 있습니다. ML 엔지니어는 학습 스크립트가 GPU 리소스를 충분히 활용하지 못하고 있음을 발견합니다. ML 엔지니어는 리소스 활용을 최적화할 수 있는 학습 스크립트의 지점을 식별해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon CloudWatch 메트릭을 사용하여 시간에 따른 GPU 사용률을 설명하는 보고서를 만듭니다.",
      "B": "학습 스크립트에 SageMaker Profiler 주석을 추가합니다. 스크립트를 실행하고 결과에서 보고서를 생성합니다.",
      "C": "AWS CloudTrail을 사용하여 시간에 따른 GPU 사용률 및 GPU 메모리 사용률을 설명하는 보고서를 생성합니다.",
      "D": "Amazon SageMaker Model Monitor에서 기본 모니터를 생성하고 기준을 제안합니다. 모니터가 생성하는 제약 조건 및 통계를 기반으로 보고서를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SageMaker Profiler — 학습 중 CPU, GPU, 메모리, I/O 성능을 세부 프로파일링. 병목 지점 식별\n▸ DDP(Distributed Data Parallel) — 다중 GPU 병렬 학습. 동기화 오버헤드 존재 가능\n▸ GPU Underutilization — GPU 컴퓨팅 능력을 충분히 사용하지 못함\n\n【정답 포인트】\n▸ '스크립트의 어느 지점에서 활용 최적화 가능' → 상세한 성능 분석 필요\n▸ SageMaker Profiler가 학습 중 초 단위 성능 메트릭 수집\n▸ 주석(annotation)으로 코드 섹션별 성능 추적\n▸ 병목 지점(데이터 로딩, 동기화, 통신) 정확히 식별\n▸ 생성된 보고서로 최적화 영역 특정 가능\n\n【오답 체크】\n(A) CloudWatch: 인스턴스 수준 메트릭만 제공. 스크립트 내부 코드별 상세 분석 불가\n(C) CloudTrail: API 호출 감사 로그. GPU 성능 메트릭 기록 안 함\n(D) Model Monitor: 모델 성능 모니터링(데이터 드리프트). 학습 시 GPU 성능 프로파일링 아님\n\n【시험 포인트】\n학습 스크립트 성능 병목 지점 식별 → SageMaker Profiler. 학습 최적화 도구 선택.",
    "en_q": "An ML engineer is using an Amazon SageMaker Studio notebook to train a neural network by creating an estimator. The estimator runs a Python training script that uses Distributed Data Parallel (DDP) on a single instance that has more than one GPU. The ML engineer discovers that the training script is underutilizing GPU resources. The ML engineer must identify the point in the training script where resource utilization can be optimized. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Use Amazon CloudWatch metrics to create a report that describes GPU utilization over time.",
      "B": "Add SageMaker Profiler annotations to the training script. Run the script and generate a report from the results.",
      "C": "Use AWS CloudTrail to create a report that describes GPU utilization and GPU memory utilization over time.",
      "D": "Create a default monitor in Amazon SageMaker Model Monitor and suggest a baseline. Generate a report based on the constraints and statistics the monitor generates."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382320-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 205,
    "question": "한 보험사의 ML 엔지니어가 매달 보험 정책 판매 수를 예측하는 회귀 모델을 학습합니다. 모델을 학습한 후 ML 엔지니어는 Amazon SageMaker AI를 사용하여 추론을 위해 모델을 배포합니다. ML 엔지니어는 모델 예측을 모니터링하여 고객 행동 변화가 있을 때 프로덕션 데이터 분포가 학습 데이터 분포와 다른지 감지하려고 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터 품질의 드리프트가 있는지 확인합니다.",
      "B": "모델 품질의 드리프트가 있는지 확인합니다.",
      "C": "모델 편향의 드리프트가 있는지 확인합니다.",
      "D": "피처 속성의 드리프트가 있는지 확인합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Data Drift(데이터 드리프트) — 프로덕션 데이터의 통계적 특성이 학습 데이터와 변함\n▸ Model Drift — 모델의 예측 정확도 자체가 시간에 따라 저하\n▸ Distribution Shift — 입력 데이터 분포(X)가 변함\n\n【정답 포인트】\n▸ '프로덕션 데이터 분포가 학습 데이터 분포와 다른지 감지' → Data Drift 정의와 일치\n▸ '고객 행동 변화' = 입력 피처 분포의 변화\n▸ Data Drift 감지 = 입력 분포 모니터링\n▸ SageMaker Model Monitor의 Data Quality Monitoring 기능\n▸ 통계 기반 드리프트 감지 (KL Divergence, Chi-Square 등)\n\n【오답 체크】\n(B) Model Quality Drift: 예측 정확도(예: RMSE) 저하 감지. 드리프트 원인 파악 아님\n(C) Model Bias Drift: 그룹별 예측 공정성 변화. 데이터 분포 변화와 다름\n(D) Feature Attribution Drift: 피처 중요도 순위 변화. 분포 자체 변화 아님\n\n【시험 포인트】\n입력 데이터 분포 변화 감지 → Data Quality Drift. 드리프트 유형별 모니터링 대상 이해.",
    "en_q": "An ML engineer at an insurance company trains a regression model to predict the number of insurance policy sales each month. After training the model, the ML engineer uses Amazon SageMaker AI to deploy the model for inference. The ML engineer wants to monitor the model predictions to detect whether the production data distribution differs from the training data distribution when there are changes in customer behaviors. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Determine whether there is drift in the data quality.",
      "B": "Determine whether there is drift in the model quality.",
      "C": "Determine whether there is drift in the model bias.",
      "D": "Determine whether there is drift in the feature attribution."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382270-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 206,
    "question": "한 기업이 Amazon SageMaker AI에서 ML 모델을 사용하는 내부 비용 추정 도구를 개발 중입니다. 사용자가 고해상도 이미지를 도구에 업로드합니다. 모델은 각 이미지를 처리하고 이미지의 물체 비용을 예측해야 합니다. 모델은 또한 처리가 완료되면 사용자에게 알려야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 버킷에 이미지를 저장합니다. SageMaker AI에서 모델을 배포합니다. 모델 추론을 위해 배치 변환 작업을 사용합니다. 사용자에게 알리기 위해 Amazon Simple Queue Service(Amazon SQS) 큐를 사용합니다.",
      "B": "Amazon S3 버킷에 이미지를 저장합니다. SageMaker AI에서 모델을 배포합니다. 모델 추론을 위해 비동기 추론 전략을 사용합니다. 사용자에게 알리기 위해 Amazon Simple Notification Service(Amazon SNS) 주제를 사용합니다.",
      "C": "Amazon Elastic File System(Amazon EFS) 파일 시스템에 이미지를 저장합니다. SageMaker AI에서 모델을 배포합니다. 모델 추론을 위해 배치 변환 작업을 사용합니다. 사용자에게 알리기 위해 Amazon Simple Queue Service(Amazon SQS) 큐를 사용합니다.",
      "D": "Amazon Elastic File System(Amazon EFS) 파일 시스템에 이미지를 저장합니다. SageMaker AI에서 모델을 배포합니다. 모델 추론을 위해 비동기 추론 전략을 사용합니다. 사용자에게 알리기 위해 Amazon Simple Notification Service(Amazon SNS) 주제를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Asynchronous Inference — 장시간 실행 추론에 최적. 요청 즉시 완료 후 결과 콜백\n▸ Batch Transform — 대량 오프라인 추론. 실시간 사용자 피드백 불가\n▸ SNS(Simple Notification Service) — 푸시 기반 메시지 전송. 사용자 즉시 알림 가능\n\n【정답 포인트】\n▸ '고해상도 이미지 처리' → 장시간 추론 (수 초~수 분)\n▸ '처리 완료 후 알림' → 비동기 콜백 필요\n▸ Asynchronous Inference: 요청 받으면 OutputLocation 반환 → 결과 준비 후 SNS 알림\n▸ S3: 고해상도 이미지 저장소로 표준 (EFS는 오버스펙)\n▸ SNS: 푸시 기반으로 사용자에게 즉시 알림 가능\n\n【오답 체크】\n(A) Batch Transform + SQS: 배치는 정시 처리(scheduled) 또는 수동 실행. 실시간 처리 안 됨. SQS는 풀 기반으로 지연 가능\n(C) EFS + Batch: EFS는 고성능 파일 시스템이지만 여기선 불필요. 배치 방식 부적절\n(D) EFS 사용: 고해상도 이미지는 S3 더 적합. 스토리지 선택 오류\n\n【시험 포인트】\n장시간 추론 + 즉시 알림 → Asynchronous + SNS. 비동기 패턴 이해. 스토리지 선택(S3 vs EFS).",
    "en_q": "A company is developing an internal cost-estimation tool that uses an ML model in Amazon SageMaker AI. Users upload high-resolution images to the tool. The model must process each image and predict the cost of the object in the image. The model also must notify the user when processing is complete. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Store the images in an Amazon S3 bucket. Deploy the model on SageMaker AI. Use batch transform jobs for model inference. Use an Amazon Simple Queue Service (Amazon SQS) queue to notify users.",
      "B": "Store the images in an Amazon S3 bucket. Deploy the model on SageMaker AI. Use an asynchronous inference strategy for model inference. Use an Amazon Simple Notification Service (Amazon SNS) topic to notify users.",
      "C": "Store the images in an Amazon Elastic File System (Amazon EFS) file system. Deploy the model on SageMaker AI. Use batch transform jobs for model inference. Use an Amazon Simple Queue Service (Amazon SQS) queue to notify users.",
      "D": "Store the images in an Amazon Elastic File System (Amazon EFS) file system. Deploy the model on SageMaker AI. Use an asynchronous inference strategy for model inference. Use an Amazon Simple Notification Service (Amazon SNS) topic to notify users."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382310-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 207,
    "question": "한 의료 회사가 Amazon SageMaker AI 엔드포인트를 사용하여 환자의 재입원 위험을 예측하는 모델을 호스팅합니다. 회사는 높은 정확도로 환자 재입원을 예측하려고 하며 위양성을 용인할 의향이 있습니다. 현재 모델 성능은 작년 동안 저하되었습니다. 회사는 새 모델을 섀도우 변형으로 학습하고 배포하여 라이브 트래픽에 대해 테스트합니다. 회사는 한 달 동안 새 모델의 성능을 모니터링합니다. 테스트 달 동안 섀도우 변형은 기존 모델보다 높은 재현율을 가지지만 낮은 정밀도를 가집니다. 회사가 다음에 해야 할 일은 무엇입니까?",
    "options": {
      "A": "섀도우 변형을 전체 프로덕션으로 승격합니다.",
      "B": "섀도우 테스트 기간을 연장하여 더 많은 데이터를 캡처합니다. 정밀도가 개선되는지 확인하기 위해 새 모델을 모니터링합니다.",
      "C": "Blue/Green 배포 전략을 사용하여 섀도우 변형에 트래픽의 작은 비율을 할당하여 모델 오류를 줄입니다.",
      "D": "섀도우 변형을 비활성화하고 주 변형으로 롤백합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Recall(재현율) — 실제 양성 중 올바르게 예측된 양성. TP/(TP+FN)\n▸ Precision(정밀도) — 양성 예측 중 실제 양성. TP/(TP+FP)\n▸ 재입원 위험 — 의료 도메인 → 놓친 고위험 환자(FN) 비용 > 불필요한 개입(FP) 비용\n\n【정답 포인트】\n▸ '위양성을 용인할 의향' = FP 증가 허용 = Recall 중시 전략\n▸ '높은 재현율 + 낮은 정밀도' = FN 감소 + FP 증가\n▸ 의료 도메인에서는 위음성(놓친 고위험 환자)이 훨씬 비쌈\n▸ 섀도우 변형이 기존 모델보다 더 많은 재입원 위험자 감지\n▸ 목표(높은 정확도 + FP 용인) 달성 → 승격 진행\n\n【오답 체크】\n(B) 테스트 연장: 정밀도 개선이 목표가 아님. 이미 충분한 데이터로 재현율 높음 확인\n(C) Blue/Green 부분 배포: 점진적 롤아웃은 좋지만 이미 테스트 완료. 즉시 승격 가능\n(D) 롤백: 새 모델이 목표(높은 재현율) 달성했으므로 불필요\n\n【시험 포인트】\n도메인별 메트릭 우선순위: 의료(Recall > Precision) vs 사기탐지(Recall) vs 스팸필터(Precision). Shadow testing 완료 후 승격 결정.",
    "en_q": "A healthcare company uses an Amazon SageMaker AI endpoint to host a model that predicts patient readmission risk to hospitals. The company wants to predict patient readmissions with high accuracy and is willing to tolerate false positives. The current model performance has degraded over the previous year. The company trains and deploys a new model as a shadow variant for testing on live traffic from hospitals. The company monitors the performance of the new model for a month. During the month of testing, the shadow variant has a higher recall than the existing model but has a lower precision. What should the company do next?",
    "en_opts": {
      "A": "Promote the shadow variant to full production.",
      "B": "Extend the shadow testing period to capture more data. Monitor the new model to determine whether precision improves.",
      "C": "Use a blue/green deployment strategy to allocate a small percentage of traffic to the shadow variant to reduce model errors.",
      "D": "Disable the shadow variant and roll back to the main variant."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382316-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 210,
    "question": "항공사는 수요에 따라 항공권 가격을 조정하는 ML 모델을 사용하고 있으며, Amazon SageMaker 실시간 엔드포인트에서 실행 중입니다. 이전 배포 중에는 웹사이트 트래픽 증가 시 모델이 충분히 빠르게 확장되지 않아 가격 조정에 지연이 발생했습니다. ML 엔지니어는 트래픽 변화에 빠르게 대응하도록 SageMaker 엔드포인트에 대한 자동 확장을 구성해야 합니다. 솔루션은 대상 추적 확장 정책을 사용해야 합니다. 트래픽의 갑작스러운 변화에 가장 빠르게 반응하는 구성은 어느 것입니까?",
    "options": {
      "A": "SageMaker AI InvocationsPerInstance 표준 메트릭을 기반으로 자동 확장을 구성합니다. 10초 간격 해상도를 구성하고, 기본 300초 축소 대기 시간을 설정합니다.",
      "B": "SageMaker AI InvocationsPerInstance 메트릭을 기반으로 자동 확장을 구성합니다. 고해상도 10초 간격을 구성하고, 600초 축소 대기 시간을 설정합니다.",
      "C": "SageMaker InvocationsPerInstance 표준 메트릭을 기반으로 자동 확장을 구성합니다. 10초 간격 해상도를 구성하고, 600초 축소 대기 시간을 설정합니다.",
      "D": "SageMaker InvocationsPerInstance 메트릭을 기반으로 자동 확장을 구성합니다. 고해상도 10초 간격을 구성하고, 기본 300초 축소 대기 시간을 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ High-resolution metric — 1초 단위 세밀한 모니터링으로 변화를 빠르게 감지\n▸ Scale-in cooldown — 축소 후 재확장 전 대기 시간(짧을수록 반응성 높음)\n▸ InvocationsPerInstance — 인스턴스당 호출 수 기반 메트릭\n\n【정답 포인트】\n▸ 갑작스러운 트래픽 변화 대응 → 고해상도(high-resolution) 메트릭 필수\n▸ 빠른 응답성 → 300초 축소 대기(기본값)가 600초보다 우수\n▸ 키워드 \"MOST responsive\" → 고해상도 + 짧은 대기 시간 = D\n\n【오답 체크】\n(A) 표준 해상도 + 300초: 표준 메트릭은 세밀도 부족으로 변화 감지 지연\n(B) 고해상도 + 600초: 고해상도는 맞으나, 600초 대기로 축소 후 재확장 지연\n(C) 표준 해상도 + 600초: 표준 메트릭 + 긴 대기로 가장 느린 응답성\n\n【시험 포인트】\n트래픽 급증 시나리오 → 고해상도 메트릭(1초 단위 감시) + 짧은 cooldown(빠른 재확장). SageMaker 자동 확장에서 \"high-resolution\"은 정밀한 추적의 핵심. 실시간 가격 조정처럼 지연이 중요한 경우 이 조합 필수.",
    "en_q": "An airline company uses an ML model to adjust ticket prices based on demand. The model runs on Amazon SageMaker real-time endpoints. During previous deployments, the model failed to scale quickly enough when website traffic increased, which caused delays in price adjustments. An ML engineer needs to configure auto scaling for the SageMaker endpoints to respond rapidly to traffic changes. The solution must use target tracking scaling policies. Which configuration will be MOST responsive to sudden changes in traffic?",
    "en_opts": {
      "A": "Configure auto scaling based on the SageMaker AI InvocationsPerInstance standard metric. Configure 10-second interval resolution, and set the default 300-second scale-in cooldown period.",
      "B": "Configure auto scaling based on the SageMaker AI InvocationsPerInstance metric. Configure high-resolution 10-second intervals, and set a 600-second scale-in cooldown period.",
      "C": "Configure auto scaling based on the SageMaker InvocationsPerInstance standard metric. Configure 10-second intervals resolution, and set a 600-second scale-in cooldown period.",
      "D": "Configure auto scaling based on the SageMaker InvocationsPerInstance metric. Configure high-resolution 10-second intervals, and set the default 300-second scale-in cooldown period."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382308-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 211,
    "question": "ML 엔지니어는 Amazon SageMaker AI를 사용하여 분류 ML 모델을 학습할 데이터를 수집하고 있습니다. 대상 열은 Class A 또는 Class B의 두 가지 값을 가질 수 있습니다. ML 엔지니어는 Class A와 Class B의 샘플 수가 균형을 이루면서도 기존 학습 데이터를 모두 유지하도록 해야 합니다. ML 엔지니어는 학습 데이터의 균형을 테스트해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker Clarify를 사용하여 클래스 불균형(CI)을 확인합니다. 값이 0과 같으면 SageMaker Data Wrangler에서 무작위 언더샘플링을 사용하여 클래스 균형을 맞춥니다.",
      "B": "SageMaker Clarify를 사용하여 클래스 불균형(CI)을 확인합니다. 값이 0보다 크면 SageMaker Data Wrangler에서 합성 소수집단 과잉샘플링 기법(SMOTE)을 사용하여 클래스 균형을 맞춥니다.",
      "C": "SageMaker JumpStart를 사용하여 클래스 불균형(CI) 보고서를 생성합니다. 값이 0보다 크면 SageMaker Studio에서 무작위 언더샘플링을 사용하여 클래스 균형을 맞춥니다.",
      "D": "SageMaker JumpStart를 사용하여 클래스 불균형(CI) 보고서를 생성합니다. 값이 0과 같으면 SageMaker Studio에서 합성 소수집단 과잉샘플링 기법(SMOTE)을 사용하여 클래스 균형을 맞춥니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SageMaker Clarify — 모델 편향성 및 데이터 불균형 감지 도구\n▸ Class Imbalance(CI) — CI > 0이면 불균형 존재, CI = 0이면 완벽한 균형\n▸ SMOTE — 소수 클래스 샘플을 합성 생성하여 전체 데이터 보존(언더샘플링 아님)\n\n【정답 포인트】\n▸ \"기존 데이터 손실 없음\" → SMOTE(합성) 필수, 언더샘플링 제외\n▸ 불균형 감지 → Clarify 사용(JumpStart 아님)\n▸ CI > 0 = 불균형 존재 → SMOTE 적용 시점\n\n【오답 체크】\n(A) Clarify는 맞으나 CI=0일 때 언더샘플링: 균형 상태에서 제거는 불필요\n(C) JumpStart로 보고서 생성: Clarify보다 덜 정확한 불균형 감지\n(D) JumpStart + CI=0 판단: 불균형 감지 도구로 Clarify가 표준\n\n【시험 포인트】\n데이터 손실 금지 요구사항 = SMOTE 필수. SageMaker에서 불균형 감지는 Clarify(专用도구) 사용. CI > 0이 불균형의 표지(선택지의 수를 결정하는 핵심). 언더샘플링은 다수 클래스 삭제로 정보 손실 발생.",
    "en_q": "An ML engineer is collecting data to train a classification ML model by using Amazon SageMaker AI. The target column can have two possible values: Class A or Class B. The ML engineer wants to ensure that the number of samples for both Class A and Class B are balanced, without losing any existing training data. The ML engineer must test the balance of the training data. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Use SageMaker Clarify to check for class imbalance (CI). If the value is equal to 0, then use random undersampling in SageMaker Data Wrangler to balance the classes.",
      "B": "Use SageMaker Clarify to check for class imbalance (CI). If the value is greater than 0, then use synthetic minority oversampling technique (SMOTE) in SageMaker Data Wrangler to balance the classes.",
      "C": "Use SageMaker JumpStart to generate a class imbalance (CI) report. If the value is greater than 0, then use random undersampling in SageMaker Studio to balance the classes.",
      "D": "Use SageMaker JumpStart to generate a class imbalance (CI) report. If the value is equal to 0, then use synthetic minority oversampling technique (SMOTE) in SageMaker Studio to balance the classes."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382275-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 212,
    "question": "ML 엔지니어는 구독 서비스의 고객 이탈을 예측하는 로지스틱 회귀 모델을 구축하고 있습니다. ML 엔지니어는 두 개의 문자열 변수를 포함하는 데이터셋을 사용하고 있습니다: location과 job_seniority_level입니다. location 변수는 3개의 서로 다른 값을 가지고, job_seniority_level 변수는 10개 이상의 서로 다른 값을 가집니다. ML 엔지니어는 변수에 대한 전처리를 수행해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "location에 토큰화를 적용합니다. job_seniority_level에 서수형 인코딩을 적용합니다.",
      "B": "location에 원-핫 인코딩을 적용합니다. job_seniority_level에 서수형 인코딩을 적용합니다.",
      "C": "location에 binning을 적용합니다. job_seniority_level에 표준 스케일링을 적용합니다.",
      "D": "location에 원-핫 인코딩을 적용합니다. job_seniority_level에 표준 스케일링을 적용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ One-hot encoding — 카테고리별 이진 컬럼 생성(3개 값 = 3개 컬럼, 차원 증가 최소)\n▸ Ordinal encoding — 순서 있는 카테고리를 정수로 변환(대소 관계 존재)\n▸ Tokenization — 텍스트를 토큰 단위로 분해(NLP용, 로지스틱 회귀 부적합)\n\n【정답 포인트】\n▸ location: 3개 값(소수) → 원-핫 인코딩(3개 바이너리 피처)\n▸ job_seniority_level: 10+개 순서형 데이터 → 서수형 인코딩(1,2,3...순서 매핑)\n▸ 로지스틱 회귀: 수치형 입력 필수 → 인코딩 필수\n\n【오답 체크】\n(A) Tokenization: 텍스트 분해는 로지스틱 회귀에 부적절\n(C) Binning: location의 범주형 값을 구간화할 이유 없음, 표준화는 범주형에 불가\n(D) 원-핫은 맞으나 job_seniority_level을 표준화: 순서형 데이터는 서수형 인코딩이 낫음\n\n【시험 포인트】\n카테고리 개수 → 3개(작음)=원-핫, 10개+(크거나 순서형)=서수형 선택. 로지스틱 회귀는 선형 모델이므로 범주 간 거리 관계 유지하는 인코딩 필요. 직급(seniority)처럼 순위 의미가 있으면 서수형이 의미론적으로 우월.",
    "en_q": "An ML engineer is building a logistic regression model to predict customer churn for subscription services. The ML engineer is using a dataset that contains two string variables: location and job_seniority_level. The location variable has 3 distinct values, and the job_seniority_level variable has over 10 distinct values. The ML engineer must perform preprocessing on the variables. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Apply tokenization to location. Apply ordinal encoding to job_seniority_level.",
      "B": "Apply one-hot encoding to location. Apply ordinal encoding to job_seniority_level",
      "C": "Apply binning to location. Apply standard scaling to job_seniority_level.",
      "D": "Apply one-hot encoding to location. Apply standard scaling to job_seniority_level."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382289-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 214,
    "question": "회사는 AWS에 맞춤형 학습된 분류 ML 모델을 배포해야 합니다. 모델은 낮은 지연 시간으로 거의 실시간 예측을 수행해야 하며, 변동하는 요청량을 처리할 수 있어야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon SageMaker AI 배치 변환 작업을 생성하여 배치로 추론 요청을 처리합니다.",
      "B": "Amazon API Gateway를 사용하여 예측 요청을 수신합니다. Amazon S3 버킷을 사용하여 모델을 호스트하고 제공합니다.",
      "C": "Amazon SageMaker AI 엔드포인트를 배포합니다. 엔드포인트에 대한 자동 확장을 구성합니다.",
      "D": "AWS Deep Learning AMI(DLAMI)를 두 개의 Amazon EC2 인스턴스에서 시작합니다. Application Load Balancer 뒤에 인스턴스를 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Real-time endpoint — 즉시 예측 응답(밀리초 단위 지연)\n▸ Auto scaling — 요청량 변화에 따른 자동 인스턴스 조정\n▸ Batch transform — 배치 처리(지연 허용 시나리오용, 실시간 부적합)\n\n【정답 포인트】\n▸ \"near real-time predictions with low latency\" → SageMaker endpoint 필수\n▸ \"variable request volumes\" → auto scaling으로 비용 효율화\n▸ 실시간 예측 요구 = 배치 변환 제외\n\n【오답 체크】\n(A) Batch transform: 배치 처리로 지연 발생, 실시간 예측 부적합\n(B) API Gateway + S3: S3는 모델 저장소(추론 서버 아님), 지연 높음\n(D) EC2 + ALB: 관리 오버헤드 높고, 자동 확장 복잡도 증가\n\n【시험 포인트】\n요구사항 분석: (1) near real-time = endpoint, (2) low latency = managed service, (3) variable volume = auto scaling. SageMaker endpoint는 완전 관리형이므로 배포 및 확장 자동화. EC2는 운영 복잡도 높음. 배치 변환은 데이터 레이크 처리용.",
    "en_q": "A company needs to deploy a custom-trained classification ML model on AWS. The model must make near real-time predictions with low latency and must handle variable request volumes. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an Amazon SageMaker AI batch transform job to process inference requests in batches.",
      "B": "Use Amazon API Gateway to receive prediction requests. Use an Amazon S3 bucket to host and serve the model.",
      "C": "Deploy an Amazon SageMaker AI endpoint. Configure auto scaling for the endpoint.",
      "D": "Launch AWS Deep Learning AMIs (DLAMI) on two Amazon EC2 instances. Run the instances behind an Application Load Balancer."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382283-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 215,
    "question": "회사는 신경망 모델을 실행하며, 성능이 저하되면 모델을 재학습합니다. 회사는 Amazon SageMaker AI 분산 데이터 병렬 처리(DDP)를 사용하는 학습 작업을 사용합니다. 학습 작업은 실행하는 데 여러 시간이 걸립니다. 회사는 학습 작업에 필요한 시간을 줄이고 싶습니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "에포크 수를 증가합니다.",
      "B": "은닉층의 뉴런 수를 증가합니다.",
      "C": "레이어 수를 증가합니다.",
      "D": "인스턴스 수를 증가합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Distributed Data Parallelism(DDP) — 데이터를 여러 인스턴스에 분산, 병렬 처리\n▸ Epochs — 전체 데이터셋 반복 학습(컴퓨팅 시간에 영향, 처리량 아님)\n▸ Model complexity — 뉴런/레이어 수 증가는 학습 시간 증가(시간 단축 반대)\n\n【정답 포인트】\n▸ DDP 활성화 상황 → 인스턴스 추가로 병렬도 확대 가능\n▸ \"decrease required time\" → 처리량 증가만 효과(변수 추가 아님)\n▸ 인스턴스 수 ↑ = 병렬 처리량 ↑ = 전체 학습 시간 ↓\n\n【오답 체크】\n(A) Epochs 증가: 반복 횟수 증가 = 학습 시간 증가(역효과)\n(B) 뉴런 수 증가: 모델 복잡도 ↑ = 계산량 ↑ = 시간 증가\n(C) 레이어 수 증가: 모델 깊이 ↑ = 학습 비용 ↑ = 시간 증가\n\n【시험 포인트】\nDDP는 수평 확장 기법 → 인스턴스 증가만이 학습 시간 단축. 모델 구조 변경(뉴런, 레이어, epoch)은 학습 횟수나 복잡도 증가로 역효과. \"decrease time\" 문맥에서 인프라 확장 선택이 정답.",
    "en_q": "A company runs a neural network model and retrains the model when the performance degrades. The company uses a training job that uses Amazon SageMaker AI distributed data parallelism (DDP). The training job takes several hours to run. The company wants to decrease the required time for the training job. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Increase the number of epochs.",
      "B": "Increase the number of neurons in the hidden layers.",
      "C": "Increase the number of layers.",
      "D": "Increase the number of instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382272-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 216,
    "question": "ML 엔지니어는 하이퍼파라미터 최적화(HPO)를 위해 Amazon SageMaker AI 자동 모델 튜닝(AMT)을 사용하기로 결정했습니다. ML 엔지니어는 회귀를 사용하여 이전 실행을 기반으로 다음 하이퍼파라미터 집합을 천천히 순차적으로 선택하는 튜닝 전략이 필요합니다. 전략은 작은 하이퍼파라미터 범위에서 작동해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "그리드 탐색",
      "B": "무작위 탐색",
      "C": "베이지안 최적화",
      "D": "Hyperband"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Bayesian optimization — 이전 결과 학습으로 최적점 추정, 순차 탐색(샘플 효율 높음)\n▸ Grid search — 모든 조합 시도(샘플 효율 낮음, 큰 범위 부적합)\n▸ Random search — 무작위 샘플링(순서 없음, 학습 없음)\n▸ Hyperband — 조기 중단으로 빠른 탐색(소수 상위 조합)\n\n【정답 포인트】\n▸ \"slowly and sequentially\" → 순차 탐색 방식 필수\n▸ \"regression-based\" → 이전 데이터로 예측 모델 구성\n▸ \"small hyperparameter ranges\" → 세밀한 탐색(Bayesian 최적)\n▸ 샘플 효율성 = Bayesian > Grid/Random\n\n【오답 체크】\n(A) Grid search: 모든 조합 탐색으로 순차성 없음, 작은 범위에도 비효율\n(B) Random search: 이전 결과 반영 없음, \"regression\" 요구사항 미충족\n(D) Hyperband: 조기 중단으로 \"slowly sequential\" 특성 부족, 신속 탐색 지향\n\n【시험 포인트】\n\"regression-based sequential selection\" = Bayesian optimization의 정의. 베이지안은 가우시안 프로세스로 모델링하여 다음 시도할 지점을 확률적으로 선택. 작은 범위에서 소수 시도로 최적값 찾기(Grid보다 효율). SageMaker HPO 기본 알고리즘.",
    "en_q": "An ML engineer decides to use Amazon SageMaker AI automated model tuning (AMT) for hyperparameter optimization (HPO). The ML engineer requires a tuning strategy that uses regression to slowly and sequentially select the next set of hyperparameters based on previous runs. The strategy must work across small hyperparameter ranges. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Grid search",
      "B": "Random search",
      "C": "Bayesian optimization",
      "D": "Hyperband"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383764-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 217,
    "question": "의료 회사는 의료 상태의 초기 징후를 나타낼 수 있는 환자 생체 신호의 이상을 감지하고 싶어합니다. 회사는 환자 건강 기록, 약물 복용력, 생활 방식 변화를 포함하는 레이블이 없는 데이터셋을 가지고 있습니다. 회사가 이 요구 사항을 충족하기 위해 사용해야 할 알고리즘과 하이퍼파라미터는 무엇입니까?",
    "options": {
      "A": "Amazon SageMaker AI XGBoost 알고리즘을 사용합니다. 트리 복잡도를 규제하기 위해 max_depth를 100보다 크게 설정합니다.",
      "B": "Amazon SageMaker AI k-means 클러스터링 알고리즘을 사용합니다. 클러스터 수를 결정하기 위해 k를 설정합니다.",
      "C": "Amazon SageMaker AI DeepAR 알고리즘을 사용합니다. 학습 반복 수를 위해 epochs를 설정합니다.",
      "D": "Amazon SageMaker AI Random Cut Forest(RCF) 알고리즘을 사용합니다. 이상 탐지를 위해 num_trees를 100보다 크게 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Random Cut Forest(RCF) — 비지도 이상 탐지(anomaly detection), 레이블 불필요\n▸ Unsupervised learning — 레이블 없는 데이터에서 패턴 발견\n▸ Anomaly detection — 정상에서 벗어난 이상 지점 식별\n\n【정답 포인트】\n▸ \"unlabeled dataset\" → 비지도 학습 알고리즘 필수\n▸ \"detect irregularities\" = 이상 탐지 시나리오\n▸ 생체 신호 모니터링 → RCF(시계열 이상 탐지 적합)\n▸ num_trees ↑ = 앙상블 성능 향상\n\n【오답 체크】\n(A) XGBoost: 지도 학습(분류/회귀), 레이블 필요, max_depth 과다 = 과적합\n(B) k-means: 클러스터링(분할만 함), 이상 탐지 아님, 생체 신호 이상 감지 부적합\n(C) DeepAR: 시계열 예측(시점 이후 값 예측), 이상 탐지 아님\n\n【시험 포인트】\n비지도 + 이상 탐지 = RCF 필수. RCF는 고차원 데이터의 이상을 효율적으로 감지. 의료/IoT 시나리오에서 표준 선택. num_trees는 앙상블 크기(더 많을수록 정확도 상승하지만 비용 증가).",
    "en_q": "A healthcare company wants to detect irregularities in patient vital signs that could indicate early signs of a medical condition. The company has an unlabeled dataset that includes patient health records, medication history, and lifestyle changes. Which algorithm and hyperparameter should the company use to meet this requirement?",
    "en_opts": {
      "A": "Use the Amazon SageMaker AI XGBoost algorithm. Set max_depth to greater than 100 to regulate tree complexity.",
      "B": "Use the Amazon SageMaker AI k-means clustering algorithm. Set k to determine the number of clusters.",
      "C": "Use the Amazon SageMaker AI DeepAR algorithm. Set epochs to the number of training iterations.",
      "D": "Use the Amazon SageMaker AI Random Cut Forest (RCF) algorithm. Set num_trees to greater than 100."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382787-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 218,
    "question": "회사는 Amazon SageMaker AI에서 고양이와 개의 이미지를 구분하는 이미지 분류 모델을 학습하고 있습니다. 회사는 제3자 소스의 이미지를 사용하고 있습니다. 회사는 각 이미지에 첨부된 메타데이터 요약 파일에 올바른 레이블을 추가하여 고양이와 개의 이미지에 레이블을 지정해야 합니다. 회사는 고양이와 개의 이미지 수가 같도록 해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker Clarify를 사용하여 클래스 불균형(CI)을 확인합니다. 값이 1에 가까우면 데이터셋이 균형을 이룹니다.",
      "B": "SageMaker Clarify를 사용하여 클래스 불균형(CI)을 확인합니다. 값이 0에 가까우면 데이터셋이 균형을 이룹니다.",
      "C": "SageMaker Data Wrangler를 사용하여 레이블의 비율 차이(DPL)를 확인합니다. 값이 1에 가까우면 데이터셋이 균형을 이룹니다.",
      "D": "SageMaker Data Wrangler를 사용하여 레이블의 비율 차이(DPL)를 확인합니다. 값이 -1에 가까우면 데이터셋이 균형을 이룹니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Class Imbalance(CI) 메트릭 — 범위 [-1, 1], 0 = 완벽 균형, ±1 = 극심 불균형\n▸ SageMaker Clarify — 데이터 편향성 및 공정성 분석 도구\n▸ Balanced dataset — 클래스별 샘플 수 동등\n\n【정답 포인트】\n▸ 균형 이미지 데이터셋 검증 → CI 메트릭 = 0 = 균형\n▸ CI 값 해석: CI → 0 = 균형, CI → ±1 = 불균형\n▸ \"equal number\" = CI ≈ 0\n\n【오답 체크】\n(A) CI ≈ 1: 극도로 한쪽 클래스에 치우친 상태(불균형)\n(C) DPL 메트릭: Data Wrangler의 메트릭이지만 편향성 감지용(불균형 감지 아님)\n(D) DPL ≈ -1: DPL은 그룹 간 차별 지표(여기서는 부적절)\n\n【시험 포인트】\nCI의 수학적 정의: CI = (n_major - n_minor) / (n_major + n_minor). 균형 데이터에서 n_major ≈ n_minor이므로 CI → 0. 이진 분류에서 0에 가까울수록 균형. Clarify는 공정성/편향 감지 표준 도구. 이미지 분류 데이터셋 검증에 필수.",
    "en_q": "A company is training an image classification model on Amazon SageMaker AI to differentiate between images of cats and dogs. The company is using images from a third-party source. The company needs to label the images of cats and dogs by adding the correct label to a metadata summary file that is attached to each image. The company wants to ensure that the dataset includes an equal number of images of cats and dogs. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Use SageMaker Clarify to check for class imbalance (CI). If the value is close to 1, then the dataset is balanced.",
      "B": "Use SageMaker Clarify to check for class imbalance (CI). If the value is close to 0, then the dataset is balanced.",
      "C": "Use SageMaker Data Wrangler to check for difference in proportions of labels (DPL). If the value is close to 1, then the dataset is balanced.",
      "D": "Use SageMaker Data Wrangler to check for difference in proportions of labels (DPL). If the value is close to -1, then the dataset is balanced."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383765-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 219,
    "question": "엔터테인먼트 회사의 ML 엔지니어는 시청자 선호도를 예측하는 ML 모델을 개선하고 있습니다. 모델이 데이터에서 학습함에 따라 ML 엔지니어는 모델의 성능이 초기에 최고조에 도달한 후 점진적으로 저하되기 시작하는 것을 알아챕니다. ML 엔지니어는 초기 성공 후 성능 저하를 방지해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "레이어 수를 증가합니다.",
      "B": "조기 중단을 구현합니다.",
      "C": "복잡한 패턴을 포착하기 위해 각 레이어의 뉴런 수를 추가합니다.",
      "D": "모델 편향과 분산을 검토하여 성능 문제를 이해합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Early stopping — 검증 오류가 증가하기 시작할 때 모델 학습을 조기에 종료하는 정규화 기법(과적합 방지)\n▸ Overfitting — 학습 데이터에 과도하게 특화되어 검증/테스트 성능이 저하되는 현상\n▸ Training loss vs Validation loss — 학습 손실은 감소하지만 검증 손실은 증가하는 패턴\n▸ Epoch — 전체 학습 데이터를 한 번 순회하는 단위\n\n【정답 포인트】\n▸ \"performance peaks early then declines\" = 과적합의 전형적인 신호(학습곡선 패턴)\n▸ 초기 성공 후 점진적 저하 → 모델이 학습 데이터의 잡음까지 학습한 증거\n▸ Early stopping은 검증 성능 지표가 최고값에서 개선되지 않을 때 학습 중단\n▸ SageMaker에서 검증 메트릭 모니터링 → 자동 또는 수동 조기 중단 구현 가능\n\n【오답 체크】\n(A) 레이어 수 증가: 모델 용량/복잡도가 증가하면 과적합 위험이 더욱 심화(악화 방향)\n(C) 뉴런 수 추가: 각 레이어의 표현 능력을 높이면 복잡 패턴뿐만 아니라 잡음도 학습(과적합 심화)\n(D) 편향/분산 검토: 편향-분산 트레이드오프를 이해하는 것은 진단 도구지만, 문제 해결 방법 아님\n\n【시험 포인트】\n과적합 대응의 핵심: (1) 학습곡선 분석으로 과적합 조기 발견, (2) Early stopping으로 최적 학습 시점 포착. 엔터테인먼트 추천 시스템처럼 복잡한 패턴이 많은 도메인에서 정규화 필수. Patience 파라미터(개선 없이 기다리는 에포크 수)로 미세 조정 가능. 정규화(L1/L2), 드롭아웃과 함께 결합하면 더욱 효과적.",
    "en_q": "An ML engineer at an entertainment company is refining an ML model to predict audience preferences. As the model learns from data, the ML engineer notices that the model's performance peaks early and then begins to gradually decline. The ML engineer must prevent the performance degradation after initial success. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Increase the number of layers.",
      "B": "Implement early stopping.",
      "C": "Add more neurons to each layer to capture complex patterns.",
      "D": "Examine model bias and variance to understand performance issues."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383766-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 220,
    "question": "ML 엔지니어는 예측 중 두 개의 이용 가능한 클래스 중 하나에서 성능이 좋지 않은 이미지 분류 모델을 튜닝하고 있습니다. 분석에 따르면 모델이 성능이 좋지 않은 클래스의 이미지는 전체 학습 데이터셋의 극히 작은 부분입니다. ML 엔지니어는 모델의 성능을 개선해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "정확도로 최적화합니다. 덜 일반적인 이미지에 대해 이미지 증강을 사용하여 새 샘플을 생성합니다.",
      "B": "F1 스코어로 최적화합니다. 덜 일반적인 이미지에 대해 이미지 증강을 사용하여 새 샘플을 생성합니다.",
      "C": "정확도로 최적화합니다. 덜 일반적인 이미지에 대해 합성 소수집단 과잉샘플링 기법(SMOTE)을 사용하여 새 샘플을 생성합니다.",
      "D": "F1 스코어로 최적화합니다. 덜 일반적인 이미지에 대해 합성 소수집단 과잉샘플링 기법(SMOTE)을 사용하여 새 샘플을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ F1 Score — Precision과 Recall의 조화평균(minority class 성능을 동시에 평가)\n▸ Accuracy — 전체 정확도(다수 클래스 편향으로 불균형 데이터에 부적합)\n▸ Class imbalance — 한 클래스의 샘플 수가 다른 클래스보다 훨씬 적은 상황\n▸ Image augmentation — 기존 이미지를 회전, 확대, 잡음 추가 등으로 변형하여 새로운 샘플 생성\n▸ SMOTE — 합성 소수집단 과잉샘플링(수치형 특성에만 적합, 이미지 아님)\n\n【정답 포인트】\n▸ \"extremely small fraction\" + \"poor on one class\" = 전형적인 불균형 분류 문제\n▸ 불균형 데이터 평가 메트릭 = F1 Score(minority class 가중치 반영)\n▸ Accuracy는 다수 클래스만으로도 높은 값 도출 가능(소수 클래스 무시)\n▸ 이미지 데이터 증강 = 기존 이미지 변환(SMOTE는 수치형 데이터용)\n\n【오답 체크】\n(A) 정확도 최적화 + 이미지 증강: 증강은 맞으나, 정확도는 불균형 데이터에 거짓 신뢰도 제공(소수 클래스 1%일 때 정확도 99% 달성 가능)\n(C) 정확도 + SMOTE: 정확도 선택 오류 + SMOTE는 수치 테이블 데이터용(이미지 처리 시 부자연스러운 합성 이미지 발생)\n(D) F1 + SMOTE: F1은 올바른 메트릭이나, SMOTE는 이미지 처리에 표준 방법 아님(이미지 도메인에서는 증강이 표준)\n\n【시험 포인트】\n불균형 분류의 2-축 솔루션: (1) 메트릭 선택 = Recall, Precision, F1(소수 클래스 성능 강조), (2) 샘플링 전략 = 이미지는 augmentation, 수치는 SMOTE/oversampling. 소수 클래스가 전체의 1-5%일 때 F1이 모델 진정한 성능을 반영. Amazon SageMaker에서 자동 이미지 증강 지원.",
    "en_q": "An ML engineer is tuning an image classification model that shows poor performance on one of two available classes during prediction. Analysis reveals that the images whose class the model performed poorly on represent an extremely small fraction of the whole training dataset. The ML engineer must improve the model's performance. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Optimize for accuracy. Use image augmentation on the less common images to generate new samples.",
      "B": "Optimize for F1 score. Use image augmentation on the less common images to generate new samples.",
      "C": "Optimize for accuracy. Use Synthetic Minority Oversampling Technique (SMOTE) on the less common images to generate new samples.",
      "D": "Optimize for F1 score. Use Synthetic Minority Oversampling Technique (SMOTE) on the less common images to generate new samples."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383767-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 221,
    "question": "의료 분석 회사는 개인화된 치료 계획을 개발하기 위해 환자를 유사한 위험 요소를 가진 그룹으로 분할하고 싶어합니다. 회사는 환자 건강 기록, 약물 복용력, 생활 방식 변화를 포함하는 데이터셋을 가지고 있습니다. 회사는 하이퍼파라미터를 사용하여 그룹의 수를 결정하는 적절한 알고리즘을 식별해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon SageMaker AI XGBoost 알고리즘을 사용합니다. 위험 그룹의 트리 복잡도를 제어하기 위해 max_depth를 설정합니다.",
      "B": "Amazon SageMaker k-means 클러스터링 알고리즘을 사용합니다. 클러스터 수를 지정하기 위해 k를 설정합니다.",
      "C": "Amazon SageMaker AI DeepAR 알고리즘을 사용합니다. 위험 그룹의 학습 반복 수를 결정하기 위해 epochs를 설정합니다.",
      "D": "Amazon SageMaker AI Random Cut Forest(RCF) 알고리즘을 사용합니다. 위험 이상 그룹을 위해 contamination 하이퍼파라미터를 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ k-means clustering — 비지도 학습 알고리즘으로 데이터를 k개의 동질적 클러스터로 분할\n▸ Segmentation — 유사한 특성을 가진 객체(환자)들을 그룹화하는 작업\n▸ Hyperparameter k — 클러스터 개수를 사용자가 직접 지정하는 파라미터\n▸ Centroid — 각 클러스터의 중심점(거리 계산의 기준)\n▸ Unsupervised learning — 레이블 없이 데이터의 내재적 구조 발견\n\n【정답 포인트】\n▸ \"segment patients into groups\" = 비지도 학습 클러스터링(명확한 타겟 라벨 없음)\n▸ \"determine the number of groups by using hyperparameters\" = k 파라미터 설정(저위험/중위험/고위험 = k=3)\n▸ \"similar risk factors\" = 동질적 클러스터 형성(환자들의 건강 특성 유사도 기반)\n▸ k-means는 거리 기반으로 작동하므로 전처리된 수치 데이터 필요\n\n【오답 체크】\n(A) XGBoost: 지도 학습 앙상블 알고리즘(분류/회귀용, 세분화 아님)\n(C) DeepAR: 시계열 예측 알고리즘(미래 시점 예측용, 환자 분류와 무관)\n(D) RCF(Random Cut Forest): 이상 탐지 알고리즘(정상/이상 이원 분류, 다중 그룹 세분화 아님)\n\n【시험 포인트】\n의료 데이터 분석의 표준: 환자를 위험도 수준별로 그룹화하면 맞춤형 치료 계획 수립 가능. k-means는 (1) 거리 기반 응집도(cohesion) 최대화, (2) 클러스터 간 분리도(separation) 최대화. k 값 선택은 엘보우 방법(elbow method) 또는 실리엣 분석(silhouette analysis) 사용. 환자 건강 기록, 약물 복용력, 생활 방식을 수치화 후 정규화하여 입력.",
    "en_q": "A healthcare analytics company wants to segment patients into groups that have similar risk factors to develop personalized treatment plans. The company has a dataset that includes patient health records, medication history, and lifestyle changes. The company must identify the appropriate algorithm to determine the number of groups by using hyperparameters. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use the Amazon SageMaker AI XGBoost algorithm. Set max_depth to control tree complexity for risk groups.",
      "B": "Use the Amazon SageMaker k-means clustering algorithm. Set k to specify the number of clusters.",
      "C": "Use the Amazon SageMaker AI DeepAR algorithm. Set epochs to determine the number of training iterations for risk groups.",
      "D": "Use the Amazon SageMaker AI Random Cut Forest (RCF) algorithm. Set a contamination hyperparameter for risk anomaly groups."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383768-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 222,
    "question": "ML 엔지니어는 Amazon Bedrock에서 Retrieval Augmented Generation(RAG)을 사용하여 AI 어시스턴트를 개발해야 합니다. 회사는 Amazon S3 버킷에 PDF 텍스트 파일 컬렉션을 저장하고 있습니다. ML 엔지니어는 PDF 파일을 처리하고 처리된 파일을 벡터 저장소에 저장하는 Amazon Bedrock 지식 기반을 만들어야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "최신 Amazon Titan Text Premier 버전을 사용하여 문서 임베딩을 수행합니다.",
      "B": "최신 Mistral 7B Instruct 버전을 사용하여 지시 조정을 수행합니다.",
      "C": "최신 Anthropic Claude Sonnet 버전을 사용하여 지시 조정을 수행합니다.",
      "D": "Cohere Embed Multilingual을 사용하여 문서 임베딩을 수행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Retrieval Augmented Generation(RAG) — 기존 문서 검색 후 그 결과를 바탕으로 텍스트 생성\n▸ Document embedding — 문서를 고정 크기의 수치 벡터로 변환하여 의미적 유사성 계산 가능하게 함\n▸ Vector store — 임베딩된 벡터들을 저장하고 유사도 검색을 지원하는 데이터베이스\n▸ Instruction tuning — 모델을 특정 명령이나 작업에 최적화하도록 미세조정하는 기법\n▸ Bedrock knowledge base — S3 문서를 임베딩하여 검색 가능하게 관리하는 AWS 기능\n\n【정답 포인트】\n▸ RAG 시스템의 핵심: (1) 문서 검색(embedding 필수), (2) 유사 문서 검색, (3) LLM으로 답변 생성\n▸ \"process PDF files and store in vector store\" = embedding 모델 필수\n▸ Cohere Embed Multilingual = Bedrock 지식 기반의 표준/권장 임베딩 모델\n▸ 다국어 지원으로 글로벌 PDF 컬렉션 처리 가능(768차원 벡터 출력)\n\n【오답 체크】\n(A) Titan Text Premier: 텍스트 생성 모델(embedding 모델 아님, 응답 생성 단계에만 사용)\n(B) Mistral 7B Instruct: 지시 조정된 LLM(문서 임베딩 기능 없음)\n(C) Claude Sonnet: 대화형 대규모 언어 모델(임베딩 기능 없음, 최종 응답 생성 단계에만 사용)\n\n【시험 포인트】\nBedrock RAG 구현 흐름: (1) 문서 수집(S3) → (2) Cohere Embed로 벡터화 → (3) OpenSearch/Pinecone 벡터 저장소 저장 → (4) 쿼리 벡터화 후 유사 문서 검색 → (5) Claude/Titan으로 검색 결과 기반 답변 생성. Cohere Embed는 768차원 조밀 벡터로 의미 정보 압축. Bedrock 지식 기반은 자동 청킹(chunking)과 메타데이터 추출 지원.",
    "en_q": "An ML engineer needs to develop an AI assistant by using Retrieval Augmented Generation (RAG) in Amazon Bedrock. The company stores a collection of PDF text files in an Amazon S3 bucket. The ML engineer must create an Amazon Bedrock knowledge base to process the PDF files and to store the processed files in a vector store. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use the latest version of Amazon Titan Text Premier to perform document embedding.",
      "B": "Use the latest version of Mistral 7B Instruct to perform instruction tuning.",
      "C": "Use the latest version of Anthropic Claude Sonnet to perform instruction tuning.",
      "D": "Use Cohere Embed Multilingual to perform document embedding."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383769-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 223,
    "question": "ML 엔지니어는 개인 식별 정보(PII)를 페타바이트의 비정형 데이터에서 식별하고 제거하는 처리 파이프라인을 구축해야 합니다. ML 엔지니어는 처리된 데이터를 사용하여 Amazon SageMaker AI에서 ML 모델을 학습합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue 대화형 세션의 Apache Spark 기반 서버리스 엔진을 사용합니다. PII 감지 변환 기능을 사용하여 PII 데이터를 식별하고 제거합니다.",
      "B": "Amazon SageMaker Canvas 내 AWS Glue Data Wrangler를 사용하여 PII를 감지하고 제거합니다.",
      "C": "Amazon SageMaker Clarify API를 사용하여 PII 데이터를 감지하고 마스킹합니다.",
      "D": "Amazon Comprehend의 DetectEntities API 작업을 사용하여 PII를 식별하고 제거합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Glue interactive sessions — 서버리스 Apache Spark 환경으로 대규모 ETL 작업 실행\n▸ PII detection transform — AWS Glue의 내장 변환 기능으로 개인식별정보(이름, 주민번호, 신용카드번호 등) 자동 감지/제거\n▸ Petabyte-scale data — 매우 큰 규모 데이터(분산 처리 필수)\n▸ Unstructured data — 정형화되지 않은 텍스트, 문서, 이메일 등\n▸ Serverless processing — 인프라 관리 없이 필요한 만큼 리소스 자동 할당\n\n【정답 포인트】\n▸ \"petabytes of unstructured data\" = 분산 처리 엔진(Spark) 필수\n▸ \"identify and remove PII\" = Glue의 Detect PII transform 기능 활용\n▸ AWS Glue interactive sessions = 서버리스(비용 효율) + 확장 자동화\n▸ \"prepare data for SageMaker ML\" = 전처리 후 모델 학습용 데이터셋 생성\n\n【오답 체크】\n(B) SageMaker Canvas: 노코드 ML 도구(대규모 ETL 파이프라인 설계에 부적합)\n(C) SageMaker Clarify: 모델 편향성/공정성/설명성 분석(PII 자동 제거 기능 없음)\n(D) Amazon Comprehend DetectEntities: NLP 개체 명인식(PII 감지하나, 자동 제거 기능 제한적, API 호출 비용 높음)\n\n【시험 포인트】\nGDPR, HIPAA, CCPA 같은 규제 준수 요구사항에서 Glue의 PII detection transform은 핵심. 페타바이트 규모는 단일 머신 처리 불가능(Spark 분산 병렬 처리 필수). Glue interactive sessions는 (1) 빠른 프로토타입, (2) 디버깅 용이, (3) SageMaker와 원활 통합. 의료/금융/개인정보 취급 데이터셋의 표준 전처리 솔루션.",
    "en_q": "An ML engineer needs to build a processing pipeline to identify and remove personally identifiable information (PII) from petabytes of unstructured data. The ML engineer will use the processed data to train ML models in Amazon SageMaker AI. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use the Apache Spark-based serverless engine from AWS Glue interactive sessions. Use the Detect PII transform feature to identify and remove the PII data.",
      "B": "Use AWS Glue Data Wrangler within Amazon SageMaker Canvas to detect and remove the PII.",
      "C": "Use the Amazon SageMaker Clarify API to detect and mask the PII data.",
      "D": "Use the DetectEntities API action in Amazon Comprehend to identify and remove the PII data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/382788-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 224,
    "question": "회사는 Amazon SageMaker AI 엔드포인트에서 추천 모델을 개발하고 호스팅합니다. 모델은 SageMaker AI 엔드포인트를 사용하여 거의 실시간 추론을 수행하여 열람 기록, 구매 기록, 앱 내 사용자 상호 작용을 기반으로 고객에게 개인화된 제품 추천을 제공합니다. 주요 마케팅 캠페인 후 회사는 모델 성능의 급격한 저하를 관찰합니다. 회사는 향후 마케팅 캠페인 전에 모델 성능을 선제적으로 모니터링, 감지 및 검증하는 솔루션이 필요합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker Clarify를 사용하여 기능 분포의 변화를 분석합니다. 거의 실시간 입력 검증을 위해 SageMaker Model Monitor를 구성합니다.",
      "B": "Amazon CloudWatch 대시보드를 사용하여 엔드포인트 메트릭을 모니터링합니다. SageMaker Model Monitor를 사용하여 기능 속성을 추적합니다.",
      "C": "SageMaker Clarify를 사용하여 편향을 감지합니다. 모델 지연 시간을 모니터링하기 위해 Amazon CloudWatch 알람을 설정합니다.",
      "D": "SageMaker Model Monitor를 사용하여 제약 조건을 모니터링합니다. Amazon CloudWatch Logs Insights를 사용하여 오류 패턴을 분석합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Monitor — 프로덕션 모델의 데이터 드리프트(distribution shift) 자동 감지\n▸ Feature distribution drift — 입력 데이터의 통계적 분포가 기준값과 달라지는 현상(마케팅 캠페인으로 인한 고객 행동 변화)\n▸ SageMaker Clarify — 데이터 편향, 피처 분포 변화, 모델 해석성 분석 도구\n▸ Baseline statistics — 모델 학습 시 사용한 데이터의 통계 기준값(평균, 분산, 분포)\n▸ Proactive monitoring — 성능 문제 발생 전 조기 감지\n\n【정답 포인트】\n▸ \"sharp drop in performance\" = 데이터 분포 변화 신호(feature distribution shift)\n▸ \"detect feature distribution changes\" = SageMaker Clarify 분석\n▸ \"near real-time input validation\" = Model Monitor(거의 즉시 드리프트 감지)\n▸ \"before future campaigns\" = 선제적 모니터링으로 조기 경보\n\n【오답 체크】\n(B) CloudWatch + feature attribution: 속성 추적은 설명성 강화용(성능 저하 예측/방지 아님)\n(C) Clarify bias detection + latency alarm: 편향 감지와 지연시간은 성능 저하의 일부 원인이나 근본 원인(분포 변화) 미반영\n(D) Constraints monitoring + error logs: 로그 분석은 사후 대응(선제적 감지 아님)\n\n【시험 포인트】\n마케팅 캠페인의 영향: 새로운 고객 층 유입 → 과거 데이터와 다른 특성 분포(예: 연령, 지역, 구매력) → 모델이 학습하지 않은 패턴 → 추천 정확도 저하. Model Monitor는 (1) 기준 통계(mean, variance, histogram) 설정, (2) 실시간 입력 모니터링, (3) 편차 자동 감지, (4) CloudWatch 경보 트리거. Clarify는 근본 원인 분석(어느 feature가 변했나?)에 활용. 추천 시스템의 성능 저하 대응 표준 절차.",
    "en_q": "A company develops a recommendation model and hosts the model on an Amazon SageMaker AI endpoint. The model uses the SageMaker AI endpoint to perform near real-time inference to deliver personalized product recommendations to customers based on browsing history, purchase records, and in-app user interactions. After a major marketing campaign, the company observes a sharp drop in the model's performance. The company needs a solution to proactively monitor, detect, and validate model performance before future marketing campaigns. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use SageMaker Clarify to analyze changes in feature distribution. Configure SageMaker Model Monitor for near real-time input validation.",
      "B": "Use Amazon CloudWatch dashboards to monitor endpoint metrics. Use SageMaker Model Monitor to track feature attribution.",
      "C": "Use SageMaker Clarify for bias detection. Set up Amazon CloudWatch alarms to monitor model latency.",
      "D": "Use SageMaker Model Monitor to monitor constraints. Use Amazon CloudWatch Logs Insights to analyze error patterns."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/389700-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 225,
    "question": "회사는 Amazon SageMaker AI를 사용하여 지난 20년 동안 매월 회사의 판매 성과를 1~5 척도로 분류하는 분류 모델을 만들고 있습니다. 데이터셋에는 월, 판매 지역, 지역 집계 판매, 각 판매 지역의 매장 수에 대한 필드가 포함됩니다. 회사는 매년 두 달 동안 집계 판매 값이 예상치 않게 높다는 것을 알아챕니다. 회사는 학습 및 검증 데이터셋의 모든 비수치 기능에 대해 원-핫 인코딩을 수행합니다. 회사는 학습 데이터셋을 사용하여 분류 모델을 학습합니다. 회사가 모델을 검증 데이터셋에 대해 평가할 때 결과는 예상보다 정확도가 낮습니다. 회사는 검증 데이터셋에서 모델의 정확도를 개선해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "모든 기능에서 이상값을 포함하는 기록을 제거합니다.",
      "B": "월 및 판매 지역 기능에 대해 층화된 분할을 사용합니다.",
      "C": "집계 판매 기능에 정규화를 수행합니다.",
      "D": "각 판매 지역의 집계 판매 기능에 정규화를 수행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Stratified split — 각 그룹(월, 지역)의 비율을 학습/검증 데이터셋에 동일하게 유지\n▸ Seasonality — 특정 시기(계절 또는 월별)에 특이한 패턴을 보이는 현상(높은 판매 월)\n▸ Distribution mismatch — 학습 데이터와 검증 데이터의 분포가 다를 때 발생(왜곡된 성능 평가)\n▸ Random split — 임의로 데이터를 나누면 계절성 같은 편향이 검증셋에 과다/과소 포함될 위험\n▸ Normalization — 수치 피처의 스케일을 표준화(평균 0, 표준편차 1로 변환)\n\n【정답 포인트】\n▸ \"특정 두 달마다 높은 판매\" = 월별 계절성 패턴 존재\n▸ 무작위 분할 → 검증셋이 높은 판매 월 과다/과소 포함 → 검증 성능 왜곡\n▸ 층화된 분할 = 각 월과 지역의 비율을 학습/검증에 균등 배분\n▸ 공정한 성능 평가 = 학습과 검증의 분포 일치\n\n【오답 체크】\n(A) 이상값 제거: 높은 판매는 유효한 패턴(잡음 아님), 정보 손실 초래\n(C) 전체 정규화: 수치 스케일만 조정(월 간 판매량 편차와 계절성은 미반영)\n(D) 지역별 정규화: 지역 내 편차는 감소하나 월별 계절성 패턴 해결 안 함\n\n【시험 포인트】\n시계열 분류 + 계절성 = 층화된 분할 필수. 20년 월간 데이터(240개 샘플)에서 계절성은 강력한 신호. 임의 분할 시 검증셋이 높은 판매 월(예: 11월, 12월) 과다 포함 → 검증 정확도 거짓으로 높음, 또는 과소 포함 → 거짓으로 낮음. Stratified split은 month와 region 같은 그룹 변수의 클래스 분포를 학습/검증에 동일 비율로 배분. SageMaker에서 sklearn의 StratifiedKFold 또는 StratifiedShuffleSplit 사용.",
    "en_q": "A company is using Amazon SageMaker AI to create a classification model to categorize the company's sales performance for each month of the previous 20 years on a scale from 1 to 5. The dataset includes fields for month, sales region, regional aggregate sales, and the number of stores in each sales region. The company notices that during two months of every year, the aggregate sales values are unexpectedly high. The company performs one-hot encoding on all non-numerical features in the training and validation datasets. The company uses the training dataset to train the classification model. When the company evaluates the model against the validation dataset, the results are less accurate than expected. The company must improve the model's accuracy on the validation dataset. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Remove records that include outliers across all features.",
      "B": "Use a stratified split on the month and sales region features.",
      "C": "Perform normalization on the aggregate sales feature.",
      "D": "Perform normalization on the aggregate sales feature for each sales region."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383770-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 227,
    "question": "ML 엔지니어는 Amazon SageMaker AI에서 ML 모델을 구축하고 있습니다. ML 엔지니어는 Amazon S3, Amazon Athena, Snowflake에서 직접 기록 데이터를 SageMaker AI로 로드해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue DataBrew를 사용하여 데이터를 SageMaker AI로 가져옵니다.",
      "B": "SageMaker Pipelines에서 파이프라인을 구축합니다. AWS DataSync를 사용하여 처리된 데이터를 SageMaker AI로 로드합니다.",
      "C": "SageMaker Feature Store에서 기능 저장소를 만듭니다. Feature Store에 Apache Spark 커넥터를 사용하여 데이터에 액세스합니다.",
      "D": "SageMaker Data Wrangler를 사용하여 데이터를 쿼리하고 가져옵니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Data Wrangler — S3, Athena, Redshift, Snowflake 등 다양한 데이터 소스에 직접 연결\n▸ Multi-source integration — 여러 데이터베이스/저장소의 데이터를 단일 도구에서 수집/변환\n▸ Direct data loading — 중간 ETL 도구 거치지 않고 소스에서 직접 데이터 로드\n▸ Data profiling — 데이터 통계, 결측치, 이상값 자동 분석\n▸ Data transformation — 결측치 처리, 인코딩, 정규화 등 전처리\n\n【정답 포인트】\n▸ \"directly from S3, Athena, and Snowflake\" = 다중 소스 단일 도구로 지원\n▸ SageMaker Data Wrangler = 통합 데이터 수집 + 변환 + 검증\n▸ 직접 로드(Direct load) = DataSync 같은 중간 동기화 도구 불필요\n▸ UI 기반 작업 = 코드 최소화, 시각적 워크플로우\n\n【오답 체크】\n(A) AWS Glue DataBrew: 데이터 정제 도구(다중 소스 연결 기능 제한적)\n(B) SageMaker Pipelines + DataSync: Pipelines은 ML 오케스트레이션 프레임워크, DataSync는 온프레미스-AWS 간 동기화(클라우드 데이터 로드에 부적합)\n(C) Feature Store + Spark: Feature Store는 ML 피처 저장/관리용(사후 단계), S3/Athena 직접 연결보다는 처리된 피처 저장용\n\n【시험 포인트】\nSageMaker Data Wrangler는 (1) 커넥터 UI로 S3, Athena, Snowflake 쿼리, (2) 데이터 로드, (3) 통계 및 결측치/이상값 시각화, (4) 자동 변환(인코딩, 정규화, 필터링), (5) SageMaker 학습용 내보내기를 원클릭으로 처리. 다중 데이터 소스 통합 시나리오의 표준 솔루션. 데이터 과학자가 코드 없이 빠르게 데이터 준비.",
    "en_q": "An ML engineer is building an ML model in Amazon SageMaker AI. The ML engineer needs to load historical data directly from Amazon S3, Amazon Athena, and Snowflake into SageMaker AI. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Use AWS Glue DataBrew to import the data into SageMaker AI.",
      "B": "Build a pipeline in SageMaker Pipelines to process the data. Use AWS DataSync to load the processed data into SageMaker AI.",
      "C": "Create a feature store in SageMaker Feature Store. Use an Apache Spark connector to Feature Store to access the data.",
      "D": "Use SageMaker Data Wrangler to query and import the data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383772-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 228,
    "question": "ML 엔지니어는 표 형식 데이터를 변환하는 맞춤형 scikit-learn 스크립트를 개발했습니다. ML 엔지니어는 Amazon SageMaker AI를 사용하여 데이터를 준비하고 모델을 학습하고 평가하고 싶어합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Lambda 함수를 생성하여 맞춤형 스크립트를 실행합니다. 처리된 데이터를 SageMaker AI로 로드하여 모델을 학습합니다.",
      "B": "SageMaker Python SDK 내에서 SKLearnProcessor 클래스를 사용하여 맞춤형 스크립트를 실행합니다.",
      "C": "SageMaker Python SDK 내에서 HuggingFaceProcessor 클래스를 사용하여 맞춤형 스크립트를 실행합니다.",
      "D": "AWS Glue ETL 맞춤형 레시피를 사용하여 데이터 변환을 수행합니다. 처리된 데이터를 SageMaker AI로 로드하여 모델을 학습합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SKLearnProcessor — SageMaker에서 scikit-learn 스크립트를 실행하는 처리 작업 컨테이너\n▸ Processing job — 데이터 전처리를 별도 EC2 인스턴스에서 실행하는 SageMaker 작업\n▸ Custom preprocessing script — 사용자 정의 데이터 변환 로직(scikit-learn 패키지 활용)\n▸ SageMaker Python SDK — AWS와 SageMaker를 프로그래밍으로 제어하는 도구\n▸ Docker image — 프레임워크별 사전 구성된 컨테이너(scikit-learn용 자동 관리)\n\n【정답 포인트】\n▸ \"custom scikit-learn script\" = SKLearnProcessor 필수\n▸ \"prepare data and train\" = Processing job(전처리) + Training job(모델 학습)\n▸ SageMaker Python SDK = 모든 작업 오케스트레이션(스크립트 업로드, 실행, 결과 저장)\n▸ 프레임워크별 Processor = scikit-learn, PyTorch, TensorFlow 등 각각 최적화된 환경\n\n【오답 체크】\n(A) AWS Lambda: 함수 실행 시간 제한(최대 15분), 메모리 제한(최대 10GB) → 대규모 데이터 처리 부적합\n(C) HuggingFaceProcessor: Hugging Face 모델 및 변환용(scikit-learn 스크립트 아님)\n(D) AWS Glue ETL: Glue 맞춤형 레시피는 PySpark 또는 Python 스크립트로 작성(scikit-learn 라이브러리 지원하나 SageMaker 통합 약함)\n\n【시험 포인트】\nSageMaker는 각 프레임워크별 Processor 클래스 제공: SKLearnProcessor(scikit-learn), PyTorchProcessor(PyTorch), TensorFlowProcessor(TensorFlow), XGBoostProcessor(XGBoost). SKLearnProcessor는 (1) 로컬 스크립트 → S3에 업로드, (2) EC2 인스턴스에서 컨테이너 실행, (3) 결과 S3 저장을 자동 처리. 데이터 과학자의 기존 scikit-learn 코드를 SageMaker 프로덕션 파이프라인으로 바로 적용 가능. 표 형식 데이터 변환의 표준 방법.",
    "en_q": "An ML engineer has developed a custom scikit-learn script to transform tabular data to train a regression model. The ML engineer wants to use Amazon SageMaker AI to prepare data and to train and evaluate the model. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create an AWS Lambda function to run the custom script. Load the processed data into SageMaker AI to train the model.",
      "B": "Use the SKLearnProcessor class within the SageMaker Python SDK to run the custom script.",
      "C": "Apply the HuggingFaceProcessor class within the SageMaker Python SDK to run the custom script.",
      "D": "Use AWS Glue ETL custom recipes to perform data transformations. Load the processed data into SageMaker AI to train the model."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/383771-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 230,
    "question": "회사는 사용자 프롬프트에서 동물 설명을 읽고 프롬프트의 정보를 기반으로 이미지를 생성하는 애플리케이션을 개발하고 있습니다. 애플리케이션은 Amazon Simple Queue Service(Amazon SQS) 큐에서 메시지를 읽습니다. 그런 다음 애플리케이션은 Amazon Bedrock의 Amazon Titan Image Generator를 사용하여 메시지의 정보를 기반으로 이미지를 생성합니다. 마지막으로 애플리케이션은 SQS 큐에서 메시지를 제거합니다. 애플리케이션의 IAM 역할에 할당해야 하는 IAM 권한은 무엇입니까? (2가지 선택)",
    "options": {
      "A": "Amazon Titan Image Generator 리소스에 대해 bedrock:InvokeModel 작업을 허용합니다.",
      "B": "Amazon Titan Image Generator 리소스에 대해 bedrock:Get* 작업을 허용합니다.",
      "C": "SQS 큐 리소스에 대해 sqs:ReceiveMessage 작업과 sqs:DeleteMessage 작업을 허용합니다.",
      "D": "SQS 큐 리소스에 대해 sqs:GetQueueAttributes 작업과 sqs:DeleteMessage 작업을 허용합니다.",
      "E": "Amazon Titan Image Generator 리소스에 대해 sagemaker:PutRecord* 작업을 허용합니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ bedrock:InvokeModel — Amazon Bedrock의 모든 기초 모델(Titan, Claude, Mistral 등) 호출 권한\n▸ sqs:ReceiveMessage — Amazon SQS 큐에서 메시지를 수신하는 권한\n▸ sqs:DeleteMessage — 처리 완료 후 SQS 큐에서 메시지를 제거하는 권한\n▸ bedrock:Get* — Bedrock 모델 정보, 메타데이터 조회(호출 아님)\n▸ IAM 최소 권한 원칙(Least Privilege) — 필요한 최소 권한만 부여\n\n【정답 포인트】\n▸ 애플리케이션 3단계 흐름: (1) SQS 메시지 읽기, (2) Bedrock 모델 호출(이미지 생성), (3) 메시지 삭제\n▸ (1) SQS 작업: sqs:ReceiveMessage 필수\n▸ (2) Bedrock 작업: bedrock:InvokeModel 필수(정답 AC에서 A에 해당)\n▸ (3) SQS 정리: sqs:DeleteMessage 필수(정답 AC에서 C에 해당)\n\n【오답 체크】\n(B) bedrock:Get*: 모델 정보/메타데이터 조회만 가능(실제 모델 호출 불가)\n(D) sqs:GetQueueAttributes: 큐 속성(메시지 수, 가시성 타임아웃 등) 조회만(메시지 수신/삭제 권한 없음)\n(E) sagemaker:PutRecord*: SageMaker Feature Store 기록 추가(Bedrock/SQS와 무관)\n\n【시험 포인트】\n다중 AWS 서비스 권한 설계의 핵심: (1) 각 서비스별 필요한 작업 식별, (2) 필요한 최소 권한만 부여(불필요한 권한은 거부). SQS와 Bedrock은 독립적인 서비스이므로 각각의 권한이 필요. bedrock:InvokeModel은 특정 모델 리소스(예: arn:aws:bedrock:region::foundation-model/amazon.titan-image-generator-v1)에 대한 Action. sqs:ReceiveMessage와 sqs:DeleteMessage는 특정 SQS 큐 ARN에 대한 Action. 2-선택 문제에서 서비스별로 최소 하나씩 선택되도록 출제.",
    "en_q": "A company is developing an application that reads animal descriptions from user prompts and generates images based on the information from the prompts. The application reads a message from an Amazon Simple Queue Service (Amazon SQS) queue. Then the application uses Amazon Titan Image Generator on Amazon Bedrock to generate an image based on the information in the message. Finally, the application removes the message from SQS queue. Which IAM permissions should the company assign to the application's IAM role? (Choose two.)",
    "en_opts": {
      "A": "Allow the bedrock:InvokeModel action for the Amazon Titan Image Generator resource.",
      "B": "Allow the bedrock:Get* action for the Amazon Titan Image Generator resource.",
      "C": "Allow the sqs:ReceiveMessage action and the sqs:DeleteMessage action for the SQS queue resource.",
      "D": "Allow the sqs:GetQueueAttributes action and the sqs:DeleteMessage action for the SQS queue resource.",
      "E": "Allow the sagemaker:PutRecord* action for the Amazon Titan Image Generator resource."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/389698-exam-aws-certified-machine-learning-engineer-associate-mla/"
  }
];
