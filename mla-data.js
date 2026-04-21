// AWS Certified Machine Learning Engineer - Associate (MLA-C01) 한국어 문제 데이터
// 수집일: 2026-04-21 · 출처: ExamTopics Community (via komorebi.tistory.com)
// 총 211문제 (다지선다 형식 전체)
// 원본 228문제 중 17개 HOTSPOT/복수선택 문제는 별도 처리 (현재 제외)
// AWS 서비스명·기술 용어(SageMaker, Bedrock, LLM, RAG 등)는 원어 유지, 설명문은 한글화

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
    "question": "웹 기반 AI 애플리케이션을 Amazon SageMaker로 구축하는 회사가 있습니다. 이 애플리케이션은 ML 실험, 훈련, 중앙 모델 레지스트리, 모델 배포 및 모델 모니터링을 제공합니다. ML 라이프사이클 동안 훈련 데이터의 안전하고 격리된 사용을 보장해야 합니다. 훈련 데이터는 Amazon S3에 저장됩니다. 회사는 실시간 엔드포인트에 배포된 모델의 편향 드리프트를 모니터링하기 위해 온디맨드 워크플로우를 실행해야 합니다. 어떤 조치가 이 요구사항을 충족합니까?",
    "options": {
      "A": "SageMaker Clarify 작업을 실행하는 AWS Lambda 함수를 호출하도록 애플리케이션을 구성합니다.",
      "B": "sagemaker-model-monitor-analyzer 기본 제공 SageMaker 이미지를 가져오기 위해 AWS Lambda 함수를 호출합니다.",
      "C": "AWS Glue Data Quality를 사용하여 편향을 모니터링합니다.",
      "D": "SageMaker 노트북을 사용하여 편향을 비교합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker Clarify — 편향 감지 및 모니터링 서비스\n▸ Lambda 트리거 — 온디맨드 워크플로우 자동화\n\n【정답 포인트】\nClarify는 배포 후 실시간 데이터에서 편향 드리프트 감지용 전문 서비스입니다. Lambda는 스케줄된 트리거로 온디맨드 실행을 지원합니다.\n\n【오답 체크】\n(B) sagemaker-model-monitor-analyzer는 데이터 품질용, 편향 감지 아님\n(C) Glue Data Quality는 편향 모니터링 미지원\n(D) 수동 비교는 자동화 안 됨",
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
    "question": "ML 엔지니어가 AWS에서 부정 거래 탐지 모델을 개발하고 있습니다. 훈련 데이터셋은 온프레미스 MySQL 데이터베이스의 거래 로그, 고객 프로필 및 테이블을 포함합니다. 거래 로그와 고객 프로필은 Amazon S3에 저장됩니다. 데이터셋의 클래스 불균형이 모델 알고리즘의 학습에 영향을 미칩니다. 또한 많은 피처에 상호 의존성이 있습니다. 알고리즘이 데이터의 모든 원하는 기본 패턴을 캡처하지 못합니다. 다양한 데이터 소스의 데이터를 집계할 수 있는 AWS 서비스 또는 기능은 무엇입니까?",
    "options": {
      "A": "Amazon EMR Spark 작업",
      "B": "Amazon Kinesis Data Streams",
      "C": "Amazon DynamoDB",
      "D": "AWS Lake Formation"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Lake Formation — 멀티소스 데이터 통합 및 데이터 레이크 구축 서비스\n▸ 데이터 집계 — S3, 온프레미스 DB 통합\n\n【정답 포인트】\nLake Formation은 S3, RDS, 온프레미스 DB 등 다양한 소스에서 데이터를 수집·정제·통합합니다.\n\n【오답 체크】\n(A) EMR Spark는 처리용, 통합 미흡\n(B) Kinesis는 스트림 수집, 배치 통합 아님\n(C) DynamoDB는 데이터 집계 서비스 아님",
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
    "question": "ML 엔지니어가 AWS에서 부정 거래 탐지 모델을 개발하고 있습니다. 훈련 데이터셋은 온프레미스 MySQL 데이터베이스의 거래 로그, 고객 프로필 및 테이블을 포함합니다. 거래 로그와 고객 프로필은 Amazon S3에 저장됩니다. 데이터셋의 클래스 불균형이 모델 알고리즘의 학습에 영향을 미칩니다. 또한 많은 피처에 상호 의존성이 있습니다. 알고리즘이 데이터의 모든 원하는 기본 패턴을 캡처하지 못합니다. 데이터 집계 후 ML 엔지니어는 자동으로 데이터의 이상을 감지하고 결과를 시각화할 수 있는 솔루션을 구현해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Athena를 사용하여 자동으로 이상을 감지하고 결과를 시각화합니다.",
      "B": "Amazon Redshift Spectrum을 사용하여 자동으로 이상을 감지합니다. Amazon QuickSight를 사용하여 결과를 시각화합니다.",
      "C": "Amazon SageMaker Data Wrangler를 사용하여 자동으로 이상을 감지하고 결과를 시각화합니다.",
      "D": "AWS Batch를 사용하여 자동으로 이상을 감지합니다. Amazon QuickSight를 사용하여 결과를 시각화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Data Wrangler — 자동 이상 탐지 및 시각화 기능 포함\n▸ 통합 솔루션 — 하나 서비스로 감지+시각화\n\n【정답 포인트】\nData Wrangler는 EDA(탐색적 데이터 분석) 도구로 이상 감지와 시각화를 한 곳에서 제공합니다.\n\n【오답 체크】\n(A) Athena는 쿼리 엔진, 이상 탐지 미지원\n(B) Spectrum은 쿼리만, 자동 탐지 아님\n(D) AWS Batch는 배치 처리, 이상 탐지 전문 아님",
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
    "question": "ML 엔지니어가 AWS에서 부정 거래 탐지 모델을 개발하고 있습니다. 훈련 데이터셋은 온프레미스 MySQL 데이터베이스의 거래 로그, 고객 프로필 및 테이블을 포함합니다. 거래 로그와 고객 프로필은 Amazon S3에 저장됩니다. 데이터셋의 클래스 불균형이 모델 알고리즘의 학습에 영향을 미칩니다. 또한 많은 피처에 상호 의존성이 있습니다. 알고리즘이 데이터의 모든 원하는 기본 패턴을 캡처하지 못합니다. 훈련 데이터셋은 범주형 데이터와 수치형 데이터를 포함합니다. ML 엔지니어는 모델의 정확성을 최대화하기 위해 훈련 데이터셋을 준비해야 합니다. 운영 부담이 가장 적은 이 요구사항을 충족할 조치는 무엇입니까?",
    "options": {
      "A": "AWS Glue를 사용하여 범주형 데이터를 수치형 데이터로 변환합니다.",
      "B": "AWS Glue를 사용하여 수치형 데이터를 범주형 데이터로 변환합니다.",
      "C": "Amazon SageMaker Data Wrangler를 사용하여 범주형 데이터를 수치형 데이터로 변환합니다.",
      "D": "Amazon SageMaker Data Wrangler를 사용하여 수치형 데이터를 범주형 데이터로 변환합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Data Wrangler — 저코드 데이터 전처리 UI\n▸ LEAST overhead — 자동화된 변환 기능\n\n【정답 포인트】\nData Wrangler는 GUI 기반 자동 변환으로 Glue보다 코딩 부담 적습니다. 범주→수치는 인코딩 표준 과정입니다.\n\n【오답 체크】\n(A) Glue는 스크립트 작성 필요, 오버헤드 높음\n(B) 수치→범주는 부정확, 손실 발생\n(D) 수치→범주 변환은 검토 기준 역행",
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
    "question": "ML 엔지니어가 AWS에서 부정 거래 탐지 모델을 개발하고 있습니다. 훈련 데이터셋은 온프레미스 MySQL 데이터베이스의 거래 로그, 고객 프로필 및 테이블을 포함합니다. 거래 로그와 고객 프로필은 Amazon S3에 저장됩니다. 데이터셋의 클래스 불균형이 모델 알고리즘의 학습에 영향을 미칩니다. 또한 많은 피처에 상호 의존성이 있습니다. 알고리즘이 데이터의 모든 원하는 기본 패턴을 캡처하지 못합니다. ML 엔지니어가 모델을 훈련하기 전에 불균형 데이터 문제를 해결해야 합니다. 운영 노력이 가장 적은 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Athena를 사용하여 불균형에 기여하는 패턴을 식별합니다. 그에 따라 데이터셋을 조정합니다.",
      "B": "Amazon SageMaker Studio Classic 기본 제공 알고리즘을 사용하여 불균형 데이터셋을 처리합니다.",
      "C": "AWS Glue DataBrew 기본 제공 기능을 사용하여 소수 클래스를 과샘플링합니다.",
      "D": "Amazon SageMaker Data Wrangler 밸런스 데이터 작업을 사용하여 소수 클래스를 과샘플링합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Balance Data 작업 — Data Wrangler의 자동 SMOTE/오버샘플링\n▸ 최소 노력 — 클릭 한 번의 자동화\n\n【정답 포인트】\nData Wrangler의 Balance Data는 GUI 기반 자동 불균형 해결(SMOTE 포함), 가장 낮은 노력입니다.\n\n【오답 체크】\n(A) Athena는 분석만, 자동 조정 미지원\n(B) Studio Classic은 알고리즘 자동화, 데이터 처리 아님\n(C) DataBrew는 데이터 퀄리티 도구, 밸런싱 전문 아님",
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
    "question": "ML 엔지니어가 AWS에서 부정 거래 탐지 모델을 개발하고 있습니다. 훈련 데이터셋은 온프레미스 MySQL 데이터베이스의 거래 로그, 고객 프로필 및 테이블을 포함합니다. 거래 로그와 고객 프로필은 Amazon S3에 저장됩니다. 데이터셋의 클래스 불균형이 모델 알고리즘의 학습에 영향을 미칩니다. 또한 많은 피처에 상호 의존성이 있습니다. 알고리즘이 데이터의 모든 원하는 기본 패턴을 캡처하지 못합니다. ML 엔지니어가 모델을 훈련하기 위해 Amazon SageMaker 기본 제공 알고리즘을 사용해야 합니다. ML 엔지니어가 이 요구사항을 충족하기 위해 어떤 알고리즘을 사용해야 합니까?",
    "options": {
      "A": "LightGBM",
      "B": "Linear learner",
      "C": "К-means clustering",
      "D": "Neural Topic Model (NTM)"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ LightGBM — SageMaker 기본 제공 부스팅 알고리즘\n▸ 클래스 불균형 — LightGBM의 강점\n▸ 피처 상호작용 — 트리 기반 자동 학습\n\n【정답 포인트】\nLightGBM은 SageMaker 기본 제공, 불균형 데이터와 피처 상호작용 자동 학습합니다.\n\n【오답 체크】\n(B) Linear learner는 선형 문제용, 상호작용 미학습\n(C) K-means는 비지도, 분류 아님\n(D) NTM은 토픽 모델링, 분류 미전문",
    "en_q": "Case study - An ML engineer is developing a fraud detection model on AWS. The training dataset includes transaction logs, customer profiles, and tables from an on-premises MySQL database. The transaction logs and customer profiles are stored in Amazon S3. The dataset has a class imbalance that affects the learning of the model's algorithm. Additionally, many of the features have interdependencies. The algorithm is not capturing all the desired underlying patterns in the data. The ML engineer needs to use an Amazon SageMaker built-in algorithm to train the model. Which algorithm should the ML engineer use to meet this requirement?",
    "en_opts": {
      "A": "LightGBM",
      "B": "Linear learner",
      "C": "К-means clustering",
      "D": "Neural Topic Model (NTM)"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152212-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 15,
    "question": "회사가 고객이 구독을 취소할 가능성을 예측하기 위해 XGBoost 예측 모델을 프로덕션에 배포했습니다. 회사는 Amazon SageMaker Model Monitor를 사용하여 F1 스코어의 편차를 감지합니다. 모델 품질의 기선 분석 중에 회사는 F1 스코어의 임계값을 기록했습니다. 몇 개월 동안 변화가 없은 후 모델의 F1 스코어가 크게 감소합니다. F1 스코어 감소의 원인은 무엇일 수 있습니까?",
    "options": {
      "A": "기본 고객 데이터에서 개념 드리프트가 발생했습니다.",
      "B": "모델이 원본 기선 데이터의 모든 패턴을 캡처할 수 있을 만큼 충분히 복잡하지 않았습니다.",
      "C": "원본 기선 데이터에 누락된 값의 데이터 품질 문제가 있었습니다.",
      "D": "기선 계산 중에 Model Monitor에 잘못된 정답 레이블이 제공되었습니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Concept Drift — 기선 이후 데이터 패턴 변화\n▸ Model Monitor — 프로덕션 성능 저하 감지\n\n【정답 포인트】\n기선 후 수개월 지나 성능 저하는 개념 드리프트(고객 행동 변화) 신호입니다.\n\n【오답 체크】\n(B) 훈련 시점 모델 능력 부족은 즉시 나타남\n(C) 기선 데이터 결함은 초기 감지됨\n(D) 잘못된 정답은 기선 자체 신뢰성 훼손",
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
    "question": "데이터 과학자 팀이 Amazon SageMaker 노트북 인스턴스를 사용하여 ML 모델을 테스트합니다. 데이터 과학자가 새 권한이 필요할 때 회사는 SageMaker 노트북 인스턴스 생성 중에 생성된 각 개별 역할에 권한을 연결합니다. 회사는 팀의 권한 관리를 중앙화해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "필요한 권한이 있는 단일 IAM 역할을 생성합니다. 역할을 팀이 사용하는 각 노트북 인스턴스에 연결합니다.",
      "B": "단일 IAM 그룹을 생성합니다. 그룹에 데이터 과학자를 추가합니다. 그룹을 팀이 사용하는 각 노트북 인스턴스에 연결합니다.",
      "C": "단일 IAM 사용자를 생성합니다. AdministratorAccess AWS 관리형 IAM 정책을 사용자에게 연결합니다. 각 노트북 인스턴스를 IAM 사용자를 사용하도록 구성합니다.",
      "D": "단일 IAM 그룹을 생성합니다. 그룹에 데이터 과학자를 추가합니다. IAM 역할을 생성합니다. AdministratorAccess AWS 관리형 IAM 정책을 역할에 연결합니다. 역할을 그룹과 연결합니다. 그룹을 팀이 사용하는 각 노트북 인스턴스에 연결합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ IAM 역할 — EC2/SageMaker 인스턴스의 표준 권한 부여\n▸ 중앙화 — 단일 역할 재사용\n\n【정답 포인트】\nSageMaker 인스턴스는 IAM 역할에 attach하며, 한 역할을 여러 인스턴스에 적용 가능합니다.\n\n【오답 체크】\n(B) IAM 그룹은 사용자 관리용, 인스턴스 권한 적용 불가\n(C) AdministratorAccess는 과권한, 사용자는 중앙화 아님\n(D) 복잡한 그룹-역할 매핑은 필요 없음",
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
    "question": "ML 엔지니어가 특정 위치의 아파트 가격을 예측하기 위해 ML 모델을 사용해야 합니다. ML 엔지니어가 모델의 성능을 평가하기 위해 어떤 메트릭을 사용해야 합니까?",
    "options": {
      "A": "정확도",
      "B": "ROC 곡선 아래 영역(AUC)",
      "C": "F1 스코어",
      "D": "평균 절대 오차(MAE)"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 회귀 문제 — 가격 예측(연속값)\n▸ MAE — 회귀 모델 평가 표준 메트릭\n\n【정답 포인트】\n가격 예측은 회귀 문제. MAE는 예측값과 실제값의 평균 차이를 직관적으로 표현합니다.\n\n【오답 체크】\n(A) 정확도는 분류 메트릭\n(B) AUC는 이진 분류 메트릭\n(C) F1은 분류 불균형 평가 메트릭",
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
    "question": "ML 엔지니어가 확률적 경사 하강법(SGD)을 사용하여 신경망을 훈련했습니다. 신경망은 테스트 셋에서 성능이 좋지 않습니다. 훈련 손실과 검증 손실 값은 높게 유지되며 진동 패턴을 보입니다. 값이 몇 에포크 동안 감소한 후 몇 에포크 동안 증가한 후 같은 사이클을 반복합니다. ML 엔지니어는 훈련 프로세스를 개선하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "조기 정지를 도입합니다.",
      "B": "테스트 셋의 크기를 증가시킵니다.",
      "C": "학습률을 증가시킵니다.",
      "D": "학습률을 감소시킵니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 진동 손실 — 학습률이 너무 높음 신호\n▸ SGD — 배치 기반 경사 하강\n\n【정답 포인트】\n손실이 진동(cycling)하면 학습률이 최적값을 과도하게 넘어갑니다. 학습률 감소로 수렴 안정화.\n\n【오답 체크】\n(A) 조기 정지는 과적합 방지, 진동 해결 아님\n(B) 테스트 셋 크기는 성능 영향 없음\n(C) 학습률 증가는 진동 악화",
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
    "question": "ML 엔지니어는 수천 개의 기존 CSV 객체와 업로드된 새 CSV 객체를 처리해야 합니다. CSV 객체는 중앙 Amazon S3 버킷에 저장되며 같은 수의 열을 가집니다. 열 중 하나는 거래 날짜입니다. ML 엔지니어는 거래 날짜를 기준으로 데이터를 쿼리해야 합니다. 운영 부담이 가장 적은 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Athena CREATE TABLE AS SELECT(CTAS) 명령문을 사용하여 중앙 S3 버킷의 거래 날짜를 기반으로 테이블을 생성합니다. 테이블에서 객체를 쿼리합니다.",
      "B": "처리된 데이터용 새 S3 버킷을 생성합니다. 중앙 S3 버킷에서 새 S3 버킷으로 S3 복제를 설정합니다. S3 Object Lambda를 사용하여 거래 날짜를 기준으로 객체를 쿼리합니다.",
      "C": "처리된 데이터용 새 S3 버킷을 생성합니다. AWS Glue for Apache Spark를 사용하여 거래 날짜를 기준으로 CSV 객체를 쿼리하는 작업을 생성합니다. 결과를 새 S3 버킷에 저장하도록 작업을 구성합니다. 새 S3 버킷에서 객체를 쿼리합니다.",
      "D": "처리된 데이터용 새 S3 버킷을 생성합니다. Amazon Data Firehose를 사용하여 중앙 S3 버킷의 데이터를 새 S3 버킷으로 전송합니다. Firehose를 구성하여 AWS Lambda 함수를 실행하고 거래 날짜를 기준으로 데이터를 쿼리합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Athena CTAS — S3 CSV 직접 쿼리, 테이블 자동 생성\n▸ 최소 오버헤드 — 추가 버킷·복제 불필요\n\n【정답 포인트】\nAthena는 S3 CSV를 SQL로 직접 쿼리하며, CTAS로 날짜 기반 분할 테이블 자동 생성합니다.\n\n【오답 체크】\n(B) Object Lambda는 변환용, 거래 날짜 쿼리 부담\n(C) Glue Spark는 스크립트 필요, 오버헤드 높음\n(D) Firehose는 스트림 수집, 배치 처리 비효율적",
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
    "question": "회사가 크고 구조화되지 않은 데이터셋을 보유하고 있습니다. 데이터셋은 여러 핵심 속성 전반에 걸쳐 많은 중복 레코드를 포함합니다. AWS의 어떤 솔루션이 최소 코드 개발으로 데이터셋의 중복을 감지합니까?",
    "options": {
      "A": "Amazon Mechanical Turk 작업을 사용하여 중복을 감지합니다.",
      "B": "Amazon QuickSight ML Insights를 사용하여 사용자 정의 중복 제거 모델을 구축합니다.",
      "C": "Amazon SageMaker Data Wrangler를 사용하여 사전 처리하고 중복을 감지합니다.",
      "D": "AWS Glue FindMatches 변환을 사용하여 중복을 감지합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ FindMatches — AWS Glue 기본 제공 중복 감지 변환\n▸ 최소 코드 — ML 자동화\n\n【정답 포인트】\nFindMatches는 Glue의 기본 제공 ML 기반 중복 감지로, 설정만으로 중복 찾음.\n\n【오답 체크】\n(A) Mechanical Turk는 수동, 코드 개발 많음\n(B) QuickSight Insights는 시각화, 중복 감지 전문 아님\n(C) Data Wrangler는 데이터 정제, 중복 감지 특화 아님",
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
    "question": "회사가 Amazon EC2 인스턴스에서 배치 데이터 처리 작업을 실행해야 합니다. 작업은 주말에 실행되며 90분이 소요됩니다. 처리는 중단을 견딜 수 있습니다. 회사는 향후 6개월 동안 매주 작업을 실행할 것입니다. 이 요구사항을 가장 비용 효율적으로 충족할 EC2 인스턴스 구매 옵션은 무엇입니까?",
    "options": {
      "A": "스팟 인스턴스",
      "B": "예약 인스턴스",
      "C": "온디맨드 인스턴스",
      "D": "전용 인스턴스"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Spot Instances — 최대 90% 할인, 중단 허용\n▸ 배치 작업 — 중단 복구 가능\n▸ 주말 한정 — 6개월 단기\n\n【정답 포인트】\n중단 허용, 단기 주말만 실행 → Spot이 가장 저렴합니다.\n\n【오답 체크】\n(B) 예약 인스턴스는 1년/3년 약정 필요\n(C) 온디맨드는 Spot보다 비쌈\n(D) 전용 인스턴스는 물리 분리, 비용 높음",
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
    "question": "ML 엔지니어가 계정 A의 us-east-1 지역에서 Amazon Comprehend 사용자 정의 모델을 보유하고 있습니다. ML 엔지니어는 모델을 같은 지역의 계정 B로 복사해야 합니다. 최소 개발 노력으로 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3를 사용하여 모델의 사본을 만듭니다. 사본을 계정 B로 전송합니다.",
      "B": "리소스 기반 IAM 정책을 생성합니다. Amazon Comprehend ImportModel API 작업을 사용하여 모델을 계정 B로 복사합니다.",
      "C": "AWS DataSync를 사용하여 모델을 계정 A에서 계정 B로 복제합니다.",
      "D": "계정 A와 계정 B 간에 AWS 사이트 간 VPN 연결을 생성하여 모델을 전송합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ ImportModel API — Comprehend 모델 계정 간 복사\n▸ 리소스 기반 정책 — 계정 간 권한 위임\n\n【정답 포인트】\nComprehend의 ImportModel은 계정 간 모델 이전 전용 API, 최소 노력입니다.\n\n【오답 체크】\n(A) S3 복사는 모델 포맷 손상 위험\n(C) DataSync는 파일 동기화, 모델 메타데이터 미지원\n(D) VPN은 과복잡, 직접 API 지원",
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
    "question": "ML 엔지니어가 간단한 신경망 모델을 훈련하고 있습니다. ML 엔지니어는 검증 데이터셋에서 시간에 따른 모델의 성능을 추적합니다. 모델의 성능은 처음에 크게 개선된 후 특정 에포크 수 후에 저하됩니다. 이 문제를 완화할 솔루션은 무엇입니까?(두 가지를 선택합니다)",
    "options": {
      "A": "모델에 조기 정지를 활성화합니다.",
      "B": "레이어의 드롭아웃을 증가시킵니다.",
      "C": "레이어의 개수를 증가시킵니다.",
      "D": "뉴런의 개수를 증가시킵니다.",
      "E": "모델 편향의 원인을 조사하고 줄입니다."
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ 성능 저하 — 과적합 신호\n▸ 조기 정지 — 최적점 전에 훈련 중단\n▸ 드롭아웃 — 정규화, 과적합 방지\n\n【정답 포인트】\n(A) 조기 정지는 저하 시점 정지로 과적합 방지\n(B) 드롭아웃 증가는 모델 복잡도 감소로 일반화 개선\n\n【오답 체크】\n(C) 레이어 증가는 과적합 악화\n(D) 뉴런 증가는 복잡도 증가, 과적합 악화\n(E) 모델 편향 감소는 성능 저하와 무관",
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
    "question": "회사가 벡터 데이터베이스를 사용하여 문서 임베딩을 저장하는 검색 증강 생성(RAG) 애플리케이션을 보유하고 있습니다. 회사는 애플리케이션을 AWS로 마이그레이션해야 하고 텍스트 파일의 의미론적 검색을 제공하는 솔루션을 구현해야 합니다. 회사는 이미 텍스트 저장소를 Amazon S3 버킷으로 마이그레이션했습니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Batch 작업을 사용하여 파일을 처리하고 임베딩을 생성합니다. AWS Glue를 사용하여 임베딩을 저장합니다. SQL 쿼리를 사용하여 의미론적 검색을 수행합니다.",
      "B": "사용자 정의 Amazon SageMaker 노트북을 사용하여 사용자 정의 스크립트를 실행하여 임베딩을 생성합니다. SageMaker Feature Store를 사용하여 임베딩을 저장합니다. SQL 쿼리를 사용하여 의미론적 검색을 수행합니다.",
      "C": "Amazon Kendra S3 커넥터를 사용하여 S3 버킷의 문서를 Amazon Kendra로 수집합니다. Amazon Kendra를 쿼리하여 의미론적 검색을 수행합니다.",
      "D": "Amazon Textract 비동기 작업을 사용하여 S3 버킷의 문서를 수집합니다. Amazon Textract를 쿼리하여 의미론적 검색을 수행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon Kendra — 의미론적 검색 전문 서비스\n▸ S3 커넥터 — S3 문서 자동 수집\n▸ RAG — 검색 증강 생성\n\n【정답 포인트】\nKendra는 임베딩·검색·의미론적 이해를 통합 제공, S3 커넥터로 원스텝 수집.\n\n【오답 체크】\n(A) Batch는 처리만, 의미론적 검색 미지원\n(B) Feature Store는 벡터 저장용, 검색 엔진 아님\n(D) Textract는 OCR, 의미론적 검색 미지원",
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
    "question": "회사가 Amazon Athena를 사용하여 Amazon S3의 데이터셋을 쿼리합니다. 데이터셋에는 회사가 예측하고 싶어 하는 목표 변수가 있습니다. 회사는 모델이 목표 변수를 예측할 수 있는지 확인하기 위한 솔루션에서 데이터셋을 사용해야 합니다. 최소 개발 노력으로 이 정보를 제공할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon SageMaker Autopilot을 사용하여 새 모델을 생성합니다. 모델의 달성한 성능을 보고합니다.",
      "B": "데이터 사전 처리, 다중 선형 회귀 및 성능 평가를 수행하는 사용자 정의 스크립트를 구현합니다. Amazon EC2 인스턴스에서 스크립트를 실행합니다.",
      "C": "Amazon Macie를 구성하여 데이터셋을 분석하고 모델을 생성합니다. 모델의 달성한 성능을 보고합니다.",
      "D": "Amazon Bedrock에서 모델을 선택합니다. 데이터로 모델을 조정합니다. 모델의 달성한 성능을 보고합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Autopilot — 자동 ML, 최소 코드\n▸ 예측 가능성 검증 — 부스트 모델 성능 보고\n\n【정답 포인트】\nAutopilot은 Athena 데이터를 직접 읽어 자동으로 최적 모델 훈련, 성능 보고합니다.\n\n【오답 체크】\n(B) 사용자 정의 스크립트는 개발 노력 높음\n(C) Macie는 데이터 분류, 예측 모델 생성 아님\n(D) Bedrock은 LLM, 회귀/분류 예측 미전문",
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
    "question": "회사가 각 광고의 색 구성표를 고려하여 광고 캠페인의 성공을 예측하고 싶어 합니다. ML 엔지니어가 신경망 모델을 위한 데이터를 준비하고 있습니다. 데이터셋은 색 정보를 범주형 데이터로 포함합니다. ML 엔지니어가 모델을 위해 어떤 피처 엔지니어링 기법을 사용해야 합니까?",
    "options": {
      "A": "색 범주에 레이블 인코딩을 적용합니다. 각 색에 자동으로 고유 정수를 할당합니다.",
      "B": "모든 색 피처 벡터의 길이가 같은지 확인하기 위해 패딩을 구현합니다.",
      "C": "색 범주에 대한 차원성 감소를 수행합니다.",
      "D": "색 범주를 원-핫 인코딩하여 색 구성표 피처를 이진 행렬로 변환합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ One-hot encoding — 범주형→이진 벡터\n▸ 신경망 — 순서 관계 없는 범주 처리\n\n【정답 포인트】\n신경망은 범주의 순서 관계를 학습할 수 있으므로, one-hot 인코딩으로 독립 이진 피처 생성.\n\n【오답 체크】\n(A) 레이블 인코딩은 순서 암시, 색깔 순서는 의미 없음\n(B) 패딩은 시계열용, 색 독립 범주에 불필요\n(C) 차원성 감소는 정보 손실, 색 종류 적음",
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
    "question": "회사가 하이브리드 클라우드 환경을 사용합니다. 온프레미스에 배포된 모델이 Amazon S3의 데이터를 사용하여 고객에게 라이브 대화형 엔진을 제공합니다. 모델이 민감한 데이터를 사용하고 있습니다. ML 엔지니어는 민감한 데이터를 식별하고 제거하기 위한 솔루션을 구현해야 합니다. 운영 부담이 가장 적은 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "모델을 Amazon SageMaker에 배포합니다. 민감한 데이터를 식별하고 제거하기 위해 AWS Lambda 함수 집합을 생성합니다.",
      "B": "모델을 AWS Fargate를 사용하는 Amazon Elastic Container Service(Amazon ECS) 클러스터에 배포합니다. 민감한 데이터를 식별하고 제거하기 위해 AWS Batch 작업을 생성합니다.",
      "C": "Amazon Macie를 사용하여 민감한 데이터를 식별합니다. 민감한 데이터를 제거하기 위해 AWS Lambda 함수 집합을 생성합니다.",
      "D": "Amazon Comprehend를 사용하여 민감한 데이터를 식별합니다. 민감한 데이터를 제거하기 위해 Amazon EC2 인스턴스를 시작합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon Macie — PII(개인정보) 자동 감지 전문\n▸ Lambda — 실시간 제거 자동화\n\n【정답 포인트】\nMacie는 PII 식별 전문, Lambda로 자동 제거, 온프레미스+S3 데이터 모두 처리 가능.\n\n【오답 체크】\n(A) SageMaker는 모델 배포용, PII 감지 비전문\n(B) ECS/Batch는 복잡한 배포 구조\n(D) Comprehend는 텍스트 분석, PII 감지 미전문",
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
    "question": "ML 엔지니어가 AWS에서 데이터 수집 파이프라인과 ML 모델 배포 파이프라인을 생성해야 합니다. 모든 원본 데이터는 Amazon S3 버킷에 저장됩니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Data Firehose를 사용하여 데이터 수집 파이프라인을 생성합니다. Amazon SageMaker Studio Classic을 사용하여 모델 배포 파이프라인을 생성합니다.",
      "B": "AWS Glue를 사용하여 데이터 수집 파이프라인을 생성합니다. Amazon SageMaker Studio Classic을 사용하여 모델 배포 파이프라인을 생성합니다.",
      "C": "Amazon Redshift ML을 사용하여 데이터 수집 파이프라인을 생성합니다. Amazon SageMaker Studio Classic을 사용하여 모델 배포 파이프라인을 생성합니다.",
      "D": "Amazon Athena를 사용하여 데이터 수집 파이프라인을 생성합니다. Amazon SageMaker 노트북을 사용하여 모델 배포 파이프라인을 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue — S3 배치 데이터 처리, 파이프라인 자동화\n▸ SageMaker Studio Classic — 엔드-투-엔드 ML 배포\n\n【정답 포인트】\nGlue는 S3 데이터 수집·ETL·파이프라인화, SageMaker Studio는 모델 배포 통합 플랫폼.\n\n【오답 체크】\n(A) Firehose는 스트림 수집, 배치 아님\n(C) Redshift ML은 데이터 웨어하우스용, 수집 파이프라인 아님\n(D) Athena는 쿼리만, 수집 파이프라인 아님",
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
    "question": "한 회사가 수백 명의 데이터 과학자를 보유하고 있으며 Amazon SageMaker를 사용하여 ML 모델을 만들고 있습니다. 모델들은 SageMaker Model Registry의 모델 그룹에 있습니다. 데이터 과학자들은 컴퓨터 비전, 자연어 처리(NLP), 음성 인식 세 가지 범주로 나뉘어 있습니다. ML 엔지니어는 대규모 모델 검색 용이성을 향상시키기 위해 기존 모델을 이 세 그룹으로 정리하는 솔루션을 구현해야 합니다. 이 솔루션은 모델 아티팩트의 무결성과 기존 그룹화에 영향을 미치지 않아야 합니다. 어떤 솔루션이 이러한 요구사항을 충족할까요?",
    "options": {
      "A": "세 가지 범주 각각에 대한 사용자 정의 태그를 만듭니다. SageMaker Model Registry의 모델 패키지에 태그를 추가합니다.",
      "B": "각 범주별로 모델 그룹을 만듭니다. 기존 모델들을 이 범주 모델 그룹으로 이동합니다.",
      "C": "SageMaker ML Lineage Tracking을 사용하여 어떤 모델 그룹이 모델을 포함해야 하는지 자동으로 식별하고 태그를 지정합니다.",
      "D": "세 가지 범주 각각에 대해 Model Registry 컬렉션을 만듭니다. 기존 모델 그룹들을 이 컬렉션으로 이동합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Model Registry 컬렉션 — 모델 그룹을 논리적으로 조직화하는 상위 레벨 컨테이너\n▸ 무결성 유지 — 기존 구조 보존\n\n【정답 포인트】\n▸ 컬렉션은 기존 모델 그룹들을 그대로 유지하면서 상위 레벨에서 조직화\n▸ 태그(A)는 메타데이터 추가일 뿐 조직화 X\n▸ 그룹 이동(B)은 기존 그룹 구조 변경 = 무결성 훼손\n\n【시험 포인트】\n컬렉션 → 기존 그룹 유지 + 상위 조직화",
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
    "question": "한 회사가 새로 생성된 VPC의 공개 서브넷에서 Amazon SageMaker 도메인을 실행하고 있습니다. 네트워크가 올바르게 구성되어 있고 ML 엔지니어가 SageMaker 도메인에 액세스할 수 있습니다. 최근 회사가 특정 IP 주소에서 도메인으로의 의심스러운 트래픽을 발견했습니다. 회사는 특정 IP 주소의 트래픽을 차단해야 합니다. 이 요구사항을 충족하기 위해 네트워크 구성에 어떤 업데이트가 필요할까요?",
    "options": {
      "A": "특정 IP 주소의 트래픽을 거부하는 보안 그룹 인바운드 규칙을 만듭니다. 도메인에 보안 그룹을 할당합니다.",
      "B": "특정 IP 주소의 트래픽을 거부하는 네트워크 ACL 인바운드 규칙을 만듭니다. 도메인이 위치한 서브넷의 기본 네트워크 ACL에 규칙을 할당합니다.",
      "C": "도메인에 대한 shadow variant를 만듭니다. SageMaker Inference Recommender가 특정 IP 주소의 트래픽을 shadow 엔드포인트로 보내도록 구성합니다.",
      "D": "특정 IP 주소의 인바운드 트래픽을 거부하는 VPC 라우트 테이블을 만듭니다. 도메인에 라우트 테이블을 할당합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Network ACL — 서브넷 레벨에서 작동하는 상태 비저장 방화벽\n▸ Security Group — 인스턴스 레벨에서 작동하는 상태 저장 방화벽\n\n【정답 포인트】\n▸ SageMaker 도메인 → 서브넷 내 실행\n▸ 서브넷 레벨 차단 → Network ACL 사용\n▸ Security Group(A) — SageMaker에 할당 불가\n▸ Route Table(D) — 트래픽 거부 기능 없음\n\n【시험 포인트】\n서브넷 차단 → Network ACL",
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
    "question": "한 회사가 여러 언어로 된 오디오, 비디오 및 텍스트 데이터를 수집하고 있습니다. 회사는 LLM을 사용하여 스페인어로 된 수집된 데이터를 요약해야 합니다. 어떤 솔루션이 가장 적은 시간 내에 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon SageMaker에서 데이터를 영어 텍스트로 변환하는 모델을 훈련하고 배포합니다. SageMaker에서 LLM을 훈련하고 배포합니다.",
      "B": "Amazon Transcribe 및 Amazon Translate를 사용하여 데이터를 영어 텍스트로 변환합니다. Amazon Bedrock with Jurassic 모델을 사용하여 텍스트를 요약합니다.",
      "C": "Amazon Rekognition 및 Amazon Translate를 사용하여 데이터를 영어 텍스트로 변환합니다. Amazon Bedrock with Anthropic Claude 모델을 사용하여 텍스트를 요약합니다.",
      "D": "Amazon Comprehend 및 Amazon Translate를 사용하여 데이터를 영어 텍스트로 변환합니다. Amazon Bedrock with Stable Diffusion 모델을 사용하여 텍스트를 요약합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Transcribe — 음성 → 텍스트 변환\n▸ Rekognition — 이미지/비디오 분석\n▸ Bedrock — 관리형 LLM 서비스\n\n【정답 포인트】\n▸ 오디오 변환 → Transcribe 필요\n▸ Rekognition(C) — 음성/텍스트 분석 X, 이미지용\n▸ Comprehensive(D) — NLP 엔티티 추출, 요약 X\n▸ 직접 훈련(A) — 시간 최소화 X\n\n【시험 포인트】\n관리형 서비스 → 최소 시간",
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
    "question": "한 금융 회사가 외부 제공자로부터 실시간 시장 데이터 스트림을 대량으로 받고 있습니다. 스트림은 매초 수천 개의 JSON 레코드로 구성됩니다. 회사는 AWS에서 확장 가능한 솔루션을 구현하여 이상 데이터 포인트를 식별해야 합니다. 어떤 솔루션이 운영 부담이 가장 적으면서 이 요구사항을 충족할까요?",
    "options": {
      "A": "실시간 데이터를 Amazon Kinesis 데이터 스트림으로 수집합니다. Amazon Managed Service for Apache Flink의 내장 RANDOM_CUT_FOREST 함수를 사용하여 데이터 스트림을 처리하고 데이터 이상을 감지합니다.",
      "B": "실시간 데이터를 Amazon Kinesis 데이터 스트림으로 수집합니다. 실시간 이상 감지를 위해 Amazon SageMaker 엔드포인트를 배포합니다. 이상을 감지하기 위해 AWS Lambda 함수를 만듭니다. 데이터 스트림을 사용하여 Lambda 함수를 호출합니다.",
      "C": "Apache Kafka를 Amazon EC2 인스턴스에 수집합니다. 실시간 이상 감지를 위해 Amazon SageMaker 엔드포인트를 배포합니다. 이상을 감지하기 위해 AWS Lambda 함수를 만듭니다. 데이터 스트림을 사용하여 Lambda 함수를 호출합니다.",
      "D": "실시간 데이터를 Amazon SQS FIFO 큐로 전송합니다. 큐 메시지를 사용하기 위해 AWS Lambda 함수를 만듭니다. Lambda 함수를 프로그래밍하여 배치 처리 및 이상 감지를 위해 AWS Glue ETL 작업을 시작합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ RANDOM_CUT_FOREST — Kinesis 내장 이상 감지 알고리즘\n▸ 운영 부담 최소 — 관리형 서비스 선호\n\n【정답 포인트】\n▸ Flink + 내장함수 → 구현 X, 설정만\n▸ SageMaker(B,C) — 엔드포인트 관리 필요\n▸ EC2(C) — 직접 관리 필요\n▸ SQS(D) — 배치 → 실시간 X\n\n【시험 포인트】\n실시간 + 최소 부담 → Flink 내장함수",
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
    "question": "한 회사가 제품 출시 후 고객 상호작용의 대량 채팅 녹음 모음을 보유하고 있습니다. ML 엔지니어는 채팅 데이터를 분석하기 위해 ML 모델을 만들어야 합니다. ML 엔지니어는 제품에 대한 고객 감정을 검토하여 제품의 성공 여부를 결정해야 합니다. ML 엔지니어가 최소 시간 내에 평가를 완료하기 위해 어떤 조치를 취해야 할까요?",
    "options": {
      "A": "Amazon Rekognition을 사용하여 채팅 대화의 감정을 분석합니다.",
      "B": "Naive Bayes 분류기를 훈련하여 채팅 대화의 감정을 분석합니다.",
      "C": "Amazon Comprehend를 사용하여 채팅 대화의 감정을 분석합니다.",
      "D": "Random Forests를 사용하여 채팅 대화의 감정을 분류합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Comprehend — 자동 감정 분석 서비스\n▸ Rekognition — 이미지/비디오 분석\n\n【정답 포인트】\n▸ 텍스트 감정 분석 → Comprehend 최적\n▸ Rekognition(A) — 비전 서비스, 텍스트 감정 X\n▸ 모델 훈련(B,D) — 시간 소요\n\n【시험 포인트】\n텍스트 감정 + 최소 시간 → Comprehend",
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
    "question": "한 회사가 Amazon Bedrock을 통해 Anthropic Claude LLM으로 요청을 전송하는 대화형 AI 어시스턴트를 보유하고 있습니다. 사용자는 유사한 질문을 여러 번 할 때 때때로 다른 답변을 받는다고 보고합니다. ML 엔지니어는 응답의 일관성을 높이고 무작위성을 줄여야 합니다. 어떤 솔루션이 이러한 요구사항을 충족할까요?",
    "options": {
      "A": "temperature 파라미터와 top_k 파라미터를 증가시킵니다.",
      "B": "temperature 파라미터를 증가시킵니다. top_k 파라미터를 감소시킵니다.",
      "C": "temperature 파라미터를 감소시킵니다. top_k 파라미터를 증가시킵니다.",
      "D": "temperature 파라미터와 top_k 파라미터를 감소시킵니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ temperature — 높을수록 무작위성 증가\n▸ top_k — 샘플링 후보 토큰 수\n\n【정답 포인트】\n▸ 일관성 증가 → temperature 감소\n▸ 무작위성 감소 → top_k 감소\n▸ 둘 다 감소 = 결정론적 응답\n\n【시험 포인트】\n일관성 → temperature/top_k 모두 감소",
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
    "question": "한 회사는 ML을 사용하여 농장의 특정 잡초 존재 여부를 예측하고 있습니다. 회사는 predictor_type 하이퍼파라미터에 multiclass_classifier 값을 사용하여 Amazon SageMaker linear learner 내장 알고리즘을 사용하고 있습니다. 회사가 거짓 양성을 최소화하기 위해 어떻게 해야 할까요?",
    "options": {
      "A": "weight decay 하이퍼파라미터의 값을 0으로 설정합니다.",
      "B": "훈련 epochs의 수를 증가시킵니다.",
      "C": "target_precision 하이퍼파라미터의 값을 증가시킵니다.",
      "D": "predictor_type 하이퍼파라미터의 값을 regressor로 변경합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ target_precision — 허용하는 거짓 양성 비율\n▸ 거짓 양성 최소화 — precision 최대화\n\n【정답 포인트】\n▸ precision 증가 → target_precision 증가\n▸ Weight decay(A) — 정규화, 거짓 양성과 무관\n▸ Epochs(B) — 과적합 위험\n▸ Regressor(D) — 분류 문제 X\n\n【시험 포인트】\n거짓 양성 최소화 → target_precision ↑",
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
    "question": "한 회사가 전자상거래 웹사이트의 판매 거래에 대한 데이터 수집 파이프라인을 구현했습니다. 회사는 Amazon Data Firehose를 사용하여 Amazon OpenSearch Service로 데이터를 수집합니다. Firehose 스트림의 버퍼 간격이 60초로 설정되어 있습니다. OpenSearch 선형 모델은 데이터를 기반으로 실시간 판매 예측을 생성하고 OpenSearch 대시보드에 데이터를 표시합니다. 회사는 실시간 대시보드에 대해 기하급수적 지연을 지원하도록 데이터 수집 파이프라인을 최적화해야 합니다. 이 요구사항을 충족하기 위해 아키텍처에 어떤 변경이 필요할까요?",
    "options": {
      "A": "Firehose 스트림에서 0 버퍼링을 사용합니다. PutRecordBatch 작업에 사용되는 배치 크기를 조정합니다.",
      "B": "Firehose 스트림을 AWS DataSync 작업으로 바꿉니다. 향상된 팬아웃 컨슈머로 작업을 구성합니다.",
      "C": "Firehose 스트림의 버퍼 간격을 60초에서 120초로 증가시킵니다.",
      "D": "Firehose 스트림을 Amazon SQS 큐로 바꿉니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 버퍼 간격 — 데이터 전송 전 대기 시간\n▸ 기하급수적 지연 → 서브초 지연\n\n【정답 포인트】\n▸ 0 버퍼링 → 즉시 전송\n▸ 버퍼 간격 증가(C) — 지연 증가\n▸ DataSync(B) — 배치 전송용, 실시간 X\n▸ SQS(D) — 지연 보장 X\n\n【시험 포인트】\n서브초 지연 → 0 버퍼링",
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
    "question": "한 회사가 Amazon SageMaker에서 ML 모델을 훈련했습니다. 회사는 프로덕션 환경에서 추론을 제공하기 위해 모델을 호스트해야 합니다. 모델은 높은 가용성을 갖추어야 하며 최소 지연 시간으로 응답해야 합니다. 각 요청의 크기는 1KB에서 3MB 사이입니다. 모델은 하루 중 예측 불가능한 버스트 요청을 받게 됩니다. 추론은 수요 변화에 비례하여 적응해야 합니다. 이 요구사항을 충족하기 위해 회사는 모델을 프로덕션에 어떻게 배포해야 할까요?",
    "options": {
      "A": "SageMaker 실시간 추론 엔드포인트를 만듭니다. 자동 스케일링을 구성합니다. 엔드포인트가 기존 모델을 제시하도록 구성합니다.",
      "B": "모델을 Amazon ECS 클러스터에 배포합니다. ECS 클러스터의 CPU에 기반한 ECS 예약된 스케일링을 사용합니다.",
      "C": "Amazon EKS 클러스터에 SageMaker Operator를 설치합니다. Amazon EKS에 모델을 배포합니다. 메모리 메트릭을 기반으로 복제본을 스케일할 수평 pod 자동 스케일링을 설정합니다.",
      "D": "ALB 뒤의 Spot Fleet을 사용하여 추론용 Spot Instances를 사용합니다. 자동 스케일링 메트릭으로 ALBRequestCountPerTarget 메트릭을 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 실시간 추론 — SageMaker endpoint\n▸ 최소 지연 — 관리형 서비스\n\n【정답 포인트】\n▸ 실시간 + 버스트 → SageMaker endpoint + 자동 스케일\n▸ ECS/EKS(B,C) — 관리 부담 증가\n▸ Spot(D) — 중단 위험\n▸ 요청 크기(1KB-3MB) → Lambda 부적합\n\n【시험 포인트】\n최소 지연 + 버스트 → SageMaker 자동 스케일",
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
    "question": "ML 엔지니어가 Amazon EMR 클러스터를 사용하여 대량 데이터를 배치 처리해야 합니다. 데이터 손실은 허용되지 않습니다. 이 요구사항을 가장 비용 효율적으로 충족할 인스턴스 구매 옵션은 무엇일까요?",
    "options": {
      "A": "기본 노드, 코어 노드, 태스크 노드를 온디맨드 인스턴스에서 실행합니다.",
      "B": "기본 노드, 코어 노드, 태스크 노드를 Spot 인스턴스에서 실행합니다.",
      "C": "기본 노드를 온디맨드 인스턴스에서 실행합니다. 코어 노드와 태스크 노드를 Spot 인스턴스에서 실행합니다.",
      "D": "기본 노드와 코어 노드를 온디맨드 인스턴스에서 실행합니다. 태스크 노드를 Spot 인스턴스에서 실행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Primary Node — 클러스터 조정, 중단 불가\n▸ Core Node — 데이터 저장, HDFS\n▸ Task Node — 계산만, 중단 가능\n\n【정답 포인트】\n▸ 데이터 손실 X → Core Node 온디맨드\n▸ 비용 절감 → Task Node Spot 사용\n▸ Spot(B,C) — Core 중단 = 데이터 손실\n\n【시험 포인트】\nEMR 비용 최적화 → Primary/Core 온디맨드 + Task Spot",
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
    "question": "한 회사가 ML 운영의 지속 가능성을 개선하고자 합니다. 어떤 조치가 회사의 훈련 작업과 관련된 에너지 사용 및 계산 리소스를 줄일까요? (두 가지 선택)",
    "options": {
      "A": "Amazon SageMaker Debugger를 사용하여 수렴하지 않는 조건이 감지되면 훈련 작업을 중지합니다.",
      "B": "데이터 라벨링을 위해 Amazon SageMaker Ground Truth를 사용합니다.",
      "C": "AWS Lambda 함수를 사용하여 모델을 배포합니다.",
      "D": "훈련을 위해 AWS Trainium 인스턴스를 사용합니다.",
      "E": "분산 훈련 옵션으로 PyTorch 또는 TensorFlow를 사용합니다."
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ Debugger — 비수렴 감지 후 조기 중지\n▸ Trainium — 훈련용 전문 칩, 효율 증가\n▸ Ground Truth — 라벨링 전문, 리소스 절감 X\n▸ Lambda — 배포용, 훈련 X\n\n【정답 포인트】\n▸ (A) 비수렴 중지 → 불필요 계산 제거\n▸ (D) Trainium → 에너지 효율 증가\n▸ (B) 라벨링 → 훈련 리소스 X\n▸ (C) 배포 → 훈련 리소스 X\n\n【시험 포인트】\n훈련 효율 → Debugger 조기 중지 + Trainium",
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
    "question": "한 회사가 여러 ML 예측 모델을 만들 계획을 세우고 있습니다. 훈련 데이터는 Amazon S3에 저장됩니다. 전체 데이터 세트는 5TB 이상이며 CSV, JSON, Apache Parquet 및 간단한 텍스트 파일로 구성됩니다. 데이터는 여러 연속 단계에서 처리되어야 합니다. 단계에는 몇 시간 이상 걸릴 수 있는 복잡한 조작이 포함됩니다. 일부 처리에는 자연어 처리(NLP) 변환이 포함됩니다. 전체 프로세스는 자동화되어야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "Amazon SageMaker Data Wrangler를 사용하여 각 단계에서 데이터를 처리합니다. Data Wrangler 작업을 사용하여 프로세스를 자동화합니다.",
      "B": "각 데이터 처리 단계에 Amazon SageMaker 노트북을 사용합니다. Amazon EventBridge를 사용하여 프로세스를 자동화합니다.",
      "C": "AWS Lambda 함수를 사용하여 각 단계에서 데이터를 처리합니다. AWS Step Functions 및 Amazon EventBridge를 사용하여 프로세스를 자동화합니다.",
      "D": "Amazon SageMaker Pipelines를 사용하여 데이터 처리 단계의 파이프라인을 만듭니다. Amazon EventBridge를 사용하여 파이프라인을 자동화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Pipelines — ML 워크플로우 자동화\n▸ 복합 NLP 변환 — SageMaker Processing 단계\n\n【정답 포인트】\n▸ 5TB + 복잡 처리 → SageMaker Pipelines 최적\n▸ Data Wrangler(A) — 시각적 도구, 대용량 X\n▸ 노트북(B) — 자동화 약함\n▸ Lambda(C) — 오래 실행되는 작업 부적합(15분 제한)\n\n【시험 포인트】\n대용량 + 복잡 NLP → SageMaker Pipelines",
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
    "question": "ML 엔지니어가 AWS CloudFormation을 사용하여 Amazon SageMaker 엔드포인트가 호스트할 ML 모델을 만들어야 합니다. 이 요구사항을 충족하기 위해 ML 엔지니어가 CloudFormation 템플릿에서 선언해야 할 리소스는 무엇일까요?",
    "options": {
      "A": "AWS::SageMaker::Model",
      "B": "AWS::SageMaker::Endpoint",
      "C": "AWS::SageMaker::NotebookInstance",
      "D": "AWS::SageMaker::Pipeline"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ CloudFormation 모델 선언 → AWS::SageMaker::Model\n▸ Endpoint는 Model 리소스 이후 생성\n\n【정답 포인트】\n▸ 모델 정의 → Model 리소스\n▸ Endpoint(B) — Model 필요조건\n▸ NotebookInstance(C) — 개발용\n▸ Pipeline(D) — 데이터 파이프라인\n\n【시험 포인트】\n모델 호스팅 선언 → AWS::SageMaker::Model",
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
    "question": "한 광고 회사가 AWS Lake Formation을 사용하여 데이터 레이크를 관리합니다. 데이터 레이크는 구조화된 데이터와 구조화되지 않은 데이터를 포함합니다. 회사의 ML 엔지니어는 특정 광고 캠페인에 할당됩니다. ML 엔지니어는 Amazon Athena를 통해 데이터와 Amazon S3 버킷의 데이터를 직접 탐색하여 데이터와 상호작용해야 합니다. ML 엔지니어는 자신의 할당된 광고 캠페인에 관련된 리소스에만 액세스해야 합니다. 어떤 솔루션이 가장 운영 효율적인 방식으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "AWS Glue Data Catalog에 IAM 정책을 구성하여 ML 엔지니어의 캠페인을 기반으로 Athena에 대한 액세스를 제한합니다.",
      "B": "Amazon DynamoDB 테이블에 사용자 및 캠페인 정보를 저장합니다. DynamoDB Streams를 구성하여 AWS Lambda 함수를 호출하고 S3 버킷 정책을 업데이트합니다.",
      "C": "Lake Formation을 사용하여 AWS Glue가 S3 버킷에 액세스하도록 인증합니다. Lake Formation 태그를 구성하여 ML 엔지니어를 캠페인에 매핑합니다.",
      "D": "S3 버킷 정책을 구성하여 ML 엔지니어의 캠페인을 기반으로 S3 버킷에 대한 액세스를 제한합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Lake Formation 태그 — 세밀한 접근 제어\n▸ 캠페인별 격리 — LF-Tags로 매핑\n\n【정답 포인트】\n▸ Lake Formation 태그 → 운영 효율 높음\n▸ IAM 정책(A) — 세밀한 제어 어려움\n▸ DynamoDB 스트림(B) — 복잡도 증가\n▸ S3 정책(D) — Athena와 S3 탐색 모두 지원 X\n\n【시험 포인트】\nLake Formation 태그 → 캠페인 기반 접근 제어",
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
    "question": "ML 엔지니어가 Amazon SageMaker Canvas를 사용하여 ML 모델을 훈련하기 위해 데이터를 사용해야 합니다. 데이터는 Amazon S3에 저장되어 있으며 복잡한 구조입니다. ML 엔지니어는 데이터의 처리 시간을 최소화하는 파일 형식을 사용해야 합니다. 이 요구사항을 충족할 파일 형식은 무엇일까요?",
    "options": {
      "A": "Snappy로 압축된 CSV 파일",
      "B": "JSONL 형식의 JSON 객체",
      "C": "gzip으로 압축된 JSON 파일",
      "D": "Apache Parquet 파일"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Parquet — 열 기반, 빠른 읽기, 압축률 높음\n▸ CSV/JSON — 행 기반, 처리 느림\n\n【정답 포인트】\n▸ 복잡한 구조 + 최소 처리 → Parquet\n▸ Parquet → 스키마 유추 빠름\n▸ CSV(A) — 수치형 최적화 X\n▸ JSON(B,C) — 파싱 오버헤드\n\n【시험 포인트】\nSageMaker Canvas → Parquet 최적",
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
    "question": "ML 엔지니어가 여러 ML 모델을 평가하고 프로덕션에 사용할 하나의 모델을 선택해야 합니다. 모델의 거짓 음성 예측의 비용이 거짓 양성 예측의 비용보다 훨씬 높습니다. ML 엔지니어가 모델을 선택할 때 가장 우선적으로 고려해야 할 지표 결과는 무엇일까요?",
    "options": {
      "A": "낮은 precision",
      "B": "높은 precision",
      "C": "낮은 recall",
      "D": "높은 recall"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Recall — 실제 양성 중 정확히 식별\n▸ FN 높은 비용 → Recall 최대화 필요\n\n【정답 포인트】\n▸ 거짓 음성 비용 높음 → recall 최대화\n▸ Precision(A,B) — 거짓 양성 제어, FN과 무관\n▸ Low Recall(C) — 거짓 음성 증가\n▸ High Recall(D) → FN 최소화\n\n【시험 포인트】\n거짓 음성 비용 높음 → 높은 recall",
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
    "question": "한 회사가 Amazon SageMaker를 사용하여 ML 모델을 훈련하고 배포했습니다. 회사는 SageMaker 엔드포인트에 대한 모든 API 호출 이벤트를 기록하고 모니터링하는 솔루션을 구현해야 합니다. 솔루션은 또한 API 호출 이벤트 수가 임계값을 초과할 때 알림을 제공해야 합니다. 어떤 솔루션이 이 요구사항을 충족할까요?",
    "options": {
      "A": "SageMaker Debugger를 사용하여 추론을 추적하고 메트릭을 보고합니다. 임계값을 초과할 때 알림을 제공하는 사용자 정의 규칙을 만듭니다.",
      "B": "SageMaker Debugger를 사용하여 추론을 추적하고 메트릭을 보고합니다. 임계값을 초과할 때 알림을 제공하려면 tensor_variance 내장 규칙을 사용합니다.",
      "C": "AWS CloudTrail을 사용하여 모든 엔드포인트 호출 API 이벤트를 기록합니다. 모니터링을 위해 Amazon CloudWatch 대시보드를 사용합니다. 임계값을 초과할 때 알림을 제공하려면 CloudWatch 경보를 설정합니다.",
      "D": "Amazon CloudWatch 대시보드에 Invocations 메트릭을 추가하여 모니터링합니다. 임계값을 초과할 때 알림을 제공하려면 CloudWatch 경보를 설정합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudTrail — API 호출 기록\n▸ Debugger — 훈련 모니터링\n\n【정답 포인트】\n▸ API 호출 이벤트 기록 → CloudTrail\n▸ CloudTrail + CloudWatch + 경보\n▸ Debugger(A,B) — 훈련용, 엔드포인트 X\n▸ Invocations(D) — 기본 메트릭, API 이벤트 기록 X\n\n【시험 포인트】\nAPI 호출 기록 + 모니터링 → CloudTrail + CloudWatch",
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
    "question": "한 회사가 AWS Glue 워크플로우로 오케스트레이션되는 AWS Glue 데이터 처리 작업을 보유하고 있습니다. AWS Glue 작업은 일정에 따라 실행되거나 수동으로 시작할 수 있습니다. 회사는 ML 모델 개발을 위해 Amazon SageMaker Pipelines에서 파이프라인을 개발하고 있습니다. 파이프라인은 모델 개발의 데이터 처리 단계 중 AWS Glue 작업의 출력을 사용합니다. ML 엔지니어는 AWS Glue 작업을 파이프라인과 통합하는 솔루션을 구현해야 합니다. 어떤 솔루션이 운영 부담이 가장 적으면서 이 요구사항을 충족할까요?",
    "options": {
      "A": "파이프라인 및 AWS Glue 작업의 오케스트레이션을 위해 AWS Step Functions를 사용합니다.",
      "B": "SageMaker Pipelines에서 처리 단계를 사용합니다. AWS Glue 작업의 Amazon 리소스 이름(ARNs)을 가리키는 입력을 구성합니다.",
      "C": "SageMaker Pipelines의 Callback 단계를 사용하여 AWS Glue 워크플로우를 시작하고 AWS Glue 작업이 실행을 마칠 때까지 파이프라인을 중지합니다.",
      "D": "Amazon EventBridge를 사용하여 원하는 순서로 파이프라인 및 AWS Glue 작업을 호출합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Callback 단계 — 외부 작업 완료 대기\n▸ 최소 운영 부담 — 네이티브 통합\n\n【정답 포인트】\n▸ Callback → Glue 작업 완료 대기 가능\n▸ SageMaker Pipelines 네이티브 지원\n▸ Step Functions(A) — 추가 오케스트레이션\n▸ Processing 단계(B) — ARN 호출 불가\n▸ EventBridge(D) — 순서 보장 약함\n\n【시험 포인트】\nGlue → SageMaker 통합 → Callback 단계",
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
    "question": "한 회사가 Amazon Redshift 데이터베이스를 단일 데이터 소스로 사용하고 있습니다. 일부 데이터는 민감합니다. 데이터 과학자는 데이터베이스의 민감한 데이터 일부를 사용해야 합니다. ML 엔지니어는 소스 데이터를 변환하지 않고 익명화된 데이터를 데이터베이스에 저장하지 않으면서 데이터 과학자에게 데이터에 대한 액세스 권한을 부여해야 합니다. 어떤 솔루션이 가장 적은 구현 노력으로 이 요구사항을 충족할까요?",
    "options": {
      "A": "쿼리 시간에 민감한 데이터가 데이터 과학자와 공유되는 방식을 제어하도록 동적 데이터 마스킹 정책을 구성합니다.",
      "B": "데이터베이스 위에 마스킹 논리를 사용한 구체화된 뷰를 만듭니다. 필요한 읽기 권한을 데이터 과학자에게 부여합니다.",
      "C": "Amazon Redshift 데이터를 Amazon S3로 언로드합니다. 마스킹 논리를 사용하여 Amazon Athena에서 schema-on-read를 만듭니다. 데이터 과학자와 뷰를 공유합니다.",
      "D": "Amazon Redshift 데이터를 Amazon S3로 언로드합니다. AWS Glue 작업을 만들어 데이터를 익명화합니다. 데이터 세트를 데이터 과학자와 공유합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 동적 데이터 마스킹 — 쿼리 시간 마스킹\n▸ 소스 데이터 변환 X → 마스킹\n\n【정답 포인트】\n▸ 동적 마스킹 → 최소 구현 노력\n▸ 쿼리 시간 마스킹 → 소스 변환 X\n▸ 구체화 뷰(B) — Redshift 제한\n▸ S3 언로드(C,D) — 추가 단계\n\n【시험 포인트】\n최소 노력 + 마스킹 → 동적 데이터 마스킹",
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
    "question": "ML 엔지니어가 Amazon SageMaker Studio에서 훈련 작업을 사용하여 딥 러닝 모델을 미세 조정하고 있습니다. ML 엔지니어는 이전에 유사한 데이터 세트와 함께 동일한 사전 훈련된 모델을 사용했습니다. ML 엔지니어는 gradient vanishing, 미충분한 GPU 사용률, 과적합 문제가 발생할 것으로 예상합니다. ML 엔지니어는 이러한 문제를 감지하고 문제가 발생할 때 사전 정의된 방식으로 대응하는 솔루션을 구현해야 합니다. 솔루션은 또한 훈련 중에 포괄적인 실시간 메트릭을 제공해야 합니다. 어떤 솔루션이 운영 부담이 가장 적으면서 이 요구사항을 충족할까요?",
    "options": {
      "A": "TensorBoard를 사용하여 훈련 작업을 모니터링합니다. Amazon SNS 토픽으로 결과를 게시합니다. 결과를 사용하기 위해 AWS Lambda 함수를 만들고 사전 정의된 조치를 시작합니다.",
      "B": "훈련 작업에 대한 인사이트를 얻기 위해 Amazon CloudWatch 기본 메트릭을 사용합니다. 메트릭을 사용하여 AWS Lambda 함수를 호출하고 사전 정의된 조치를 시작합니다.",
      "C": "Amazon CloudWatch의 메트릭을 확장하여 각 훈련 단계의 gradient를 포함합니다. 메트릭을 사용하여 AWS Lambda 함수를 호출하고 사전 정의된 조치를 시작합니다.",
      "D": "SageMaker Debugger 내장 규칙을 사용하여 훈련 작업을 모니터링합니다. 규칙을 구성하여 사전 정의된 조치를 시작합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Debugger 규칙 — gradient vanishing, overtraining 감지\n▸ 최소 운영 부담 — 내장 규칙 사용\n\n【정답 포인트】\n▸ Debugger 규칙 → 네이티브 감지 + 자동 대응\n▸ gradient vanishing/overtraining 감지 가능\n▸ TensorBoard(A) — 수동 분석 필요\n▸ CloudWatch(B,C) — Gradient 메트릭 복잡\n\n【시험 포인트】\n자동 문제 감지 → SageMaker Debugger 규칙",
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
    "question": "신용카드 회사가 프로덕션 환경의 Amazon SageMaker 엔드포인트에 배포된 사기 탐지 모델을 운영 중이다. 회사가 새로운 모델 버전을 개발했다. 회사는 라이브 데이터를 사용하여 새 모델의 성능을 평가하면서 프로덕션 최종 사용자에게 영향을 주지 않아야 한다. 이 요구사항을 충족하는 솔루션은 무엇인가?",
    "options": {
      "A": "SageMaker Debugger 사용자 정의 규칙",
      "B": "blue/green all-at-once",
      "C": "blue/green canary",
      "D": "shadow testing shadow variant"
    },
    "answer": "D",
    "explanation": "【핵심】shadow testing과 shadow variant는 라이브 트래픽으로 새 모델을 평가하면서 프로덕션 영향 없음\n【정답】라이브 데이터 + 프로덕션 영향 없음 = shadow variant\n【오답】(A)훈련 중 분석용 (B,C)실제 프로덕션 영향",
    "en_q": "A credit card company has a fraud detection model in production on an Amazon SageMaker endpoint. The company develops a new version of the model. The company needs to assess the new model's performance by using live data and without affecting production end users. Which solution will meet these requirements?",
    "en_opts": {
      "A": "SageMaker Debugger",
      "B": "blue/green all-at-once",
      "C": "blue/green canary",
      "D": "shadow variant"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152198-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 50,
    "question": "회사가 사용자 클릭 시계열 데이터를 S3에 저장한다. 매일 수백만 행이 생성된다. ML 엔지니어는 Athena로 지난 3일 트렌드를 분석하고 일일 보고서를 생성해야 한다. 30일 후 아카이빙. 성능 최우선 솔루션은?",
    "options": {
      "A": "파티션 없음 수동 이동",
      "B": "Lambda 복사 + Lifecycle",
      "C": "날짜 파티션 + Lifecycle",
      "D": "버킷당 1일"
    },
    "answer": "C",
    "explanation": "【핵심】날짜별 파티션 = Athena 파티션 프루닝으로 최신 데이터만 스캔\n【정답】파티션 프루닝 + Lifecycle 자동화\n【오답】(A)풀스캔 (B)수동 (D)관리복잡도",
    "en_q": "HIGHEST performance for time-series data retrieval with 3-day analysis and 30-day retention?",
    "en_opts": {
      "A": "No partition",
      "B": "Lambda copy",
      "C": "Date partition + Lifecycle",
      "D": "Bucket per day"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152199-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 51,
    "question": "은행 애플리케이션에서 Asynchronous Inference로 사기 탐지. 지연 문제 발생. 성능 개선 + 품질 모니터링 필요. 솔루션?",
    "options": {
      "A": "real-time + Model Monitor",
      "B": "batch transform + Model Monitor",
      "C": "serverless + Inference Recommender",
      "D": "async + Inference Recommender"
    },
    "answer": "A",
    "explanation": "【핵심】실시간 지연 해결 = real-time inference\n【정답】품질 모니터링 = Model Monitor\n【오답】(B)배치는 실시간 아님 (C,D)Recommender는 모니터링 도구 아님",
    "en_q": "Real-time fraud detection with Asynchronous Inference delays and quality monitoring?",
    "en_opts": {
      "A": "real-time + Model Monitor",
      "B": "batch + Model Monitor",
      "C": "serverless + Recommender",
      "D": "async + Recommender"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152200-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 52,
    "question": "일정하지 않은 요청 비율 + 미사용 시간 비용 최소화 + 피크 용량 유지. 솔루션?",
    "options": {
      "A": "Lambda 고정동시성",
      "B": "ECS Fargate 정적",
      "C": "SageMaker endpoint + ALB",
      "D": "SageMaker endpoint + auto scaling"
    },
    "answer": "D",
    "explanation": "【핵심】동적 스케일링 = CloudWatch 메트릭 기반\n【정답】SageMaker endpoint auto scaling\n【오답】(A,B)정적 또는 수동 (C)ALB 수동라우팅",
    "en_q": "Inconsistent traffic + minimize idle costs + peak capacity?",
    "en_opts": {
      "A": "Lambda fixed",
      "B": "ECS static",
      "C": "SageMaker + ALB",
      "D": "SageMaker + auto scaling"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152201-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 53,
    "question": "SageMaker Studio 계산 비용 임계값 자동 알림. 솔루션?",
    "options": {
      "A": "사용자프로필태깅 + Cost Explorer",
      "B": "사용자프로필태깅 + AWS Budgets",
      "C": "IAM태깅 + Cost Explorer",
      "D": "IAM태깅 + AWS Budgets"
    },
    "answer": "B",
    "explanation": "【핵심】Studio 도메인 = 사용자 프로필 태깅\n【정답】AWS Budgets = 임계값 알림\n【오답】(A)Cost Explorer는 분석용 (C,D)IAM은 부적합",
    "en_q": "SageMaker Studio compute cost threshold alert?",
    "en_opts": {
      "A": "user profile + Cost Explorer",
      "B": "user profile + Budgets",
      "C": "IAM + Cost Explorer",
      "D": "IAM + Budgets"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152202-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 54,
    "question": "50MB Parquet 파일에서 불필요한 열 제거. LEAST 노력?",
    "options": {
      "A": "로컬 + 원-핫",
      "B": "EMR Spark",
      "C": "SageMaker Processing",
      "D": "Data Wrangler transform"
    },
    "answer": "D",
    "explanation": "【핵심】LEAST effort = UI 기반 노-코드\n【정답】Data Wrangler transform step\n【오답】(A,B,C)코드 필요",
    "en_q": "Drop unnecessary columns from 50MB Parquet with LEAST effort?",
    "en_opts": {
      "A": "local script",
      "B": "EMR",
      "C": "SageMaker Processing",
      "D": "Data Wrangler"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152203-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 55,
    "question": "Amazon Q Business 응답에서 경쟁사 이름 제외. 솔루션?",
    "options": {
      "A": "차단구문설정",
      "B": "retriever 제외",
      "C": "Kendra 인덱싱",
      "D": "문서속성부스팅"
    },
    "answer": "A",
    "explanation": "【핵심】완전 제외 = blocked phrase\n【정답】경쟁사 이름을 차단 구문으로 설정\n【오답】(B,C)검색단계 (D)우선순위 조정",
    "en_q": "Amazon Q Business exclude competitor name from responses?",
    "en_opts": {
      "A": "blocked phrase",
      "B": "retriever exclude",
      "C": "Kendra indexing",
      "D": "document boosting"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152204-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 56,
    "question": "LLM 미세조정 텍스트 요약. LCNC 접근. 솔루션?",
    "options": {
      "A": "Studio + EC2",
      "B": "Autopilot + 커스텀API",
      "C": "Autopilot + EC2",
      "D": "Autopilot + JumpStart"
    },
    "answer": "D",
    "explanation": "【핵심】LCNC = Autopilot 자동화\n【정답】JumpStart 사전훈련 LLM\n【오답】(A)코드필요 (B,C)인프라관리필요",
    "en_q": "Fine-tune LLM for text summarization with LCNC?",
    "en_opts": {
      "A": "Studio + EC2",
      "B": "Autopilot + custom",
      "C": "Autopilot + EC2",
      "D": "Autopilot + JumpStart"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152205-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 57,
    "question": "매일 밤 1번 주식예측. 3MB 데이터 < 1분. 배포 방식?",
    "options": {
      "A": "serverless 다중모델 캐싱",
      "B": "async InitialInstanceCount=0",
      "C": "실시간 0스케일",
      "D": "serverless MaxConcurrency=1"
    },
    "answer": "D",
    "explanation": "【핵심】예측가능한 시간 + cold start OK + 소규모\n【정답】serverless MaxConcurrency=1\n【오답】(A)다중모델불필요 (B)async는 응답지연 (C)비용비효율",
    "en_q": "Deploy model for nightly 1-min stock prediction with 3MB data?",
    "en_opts": {
      "A": "serverless multi-model",
      "B": "async InitialInstanceCount=0",
      "C": "real-time scale-to-0",
      "D": "serverless MaxConcurrency=1"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152206-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 58,
    "question": "사고영상탐지 모델 프로덕션에서 이미지품질편차로 성능저하. LEAST 시간?",
    "options": {
      "A": "이미지수집",
      "B": "corrupt image + impulse noise",
      "C": "enhance contrast",
      "D": "resize crop"
    },
    "answer": "B",
    "explanation": "【핵심】데이터오그멘테이션 = corrupt + impulse\n【정답】기존 데이터로 강건성 향상\n【오답】(A)시간오래 (C,D)다른문제",
    "en_q": "Improve accuracy for image quality variations in LEAST time?",
    "en_opts": {
      "A": "collect images",
      "B": "corrupt + impulse",
      "C": "enhance contrast",
      "D": "resize crop"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152093-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 59,
    "question": "API 토큰 3개월마다 자동 회전. 솔루션?",
    "options": {
      "A": "Secrets Manager + Lambda",
      "B": "Parameter Store + Lambda",
      "C": "KMS + 관리형키",
      "D": "KMS + 소유형키"
    },
    "answer": "A",
    "explanation": "【핵심】API 토큰 = Secrets Manager\n【정답】Lambda로 자동 로테이션\n【오답】(B)Parameter는 비밀 로테이션 안됨 (C,D)KMS는 암호화키",
    "en_q": "Automatically rotate API tokens every 3 months?",
    "en_opts": {
      "A": "Secrets Manager + Lambda",
      "B": "Parameter Store + Lambda",
      "C": "KMS managed",
      "D": "KMS owned"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152209-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 60,
    "question": "누락값 중복 이상치 포함. 통합+전처리. 솔루션?",
    "options": {
      "A": "Data Wrangler 정제+강화",
      "B": "Ground Truth 휴먼인더루프",
      "C": "수동+Q Developer",
      "D": "수동+data labeling"
    },
    "answer": "A",
    "explanation": "【핵심】정제+강화 = Data Wrangler\n【정답】GUI 기반 통합+전처리\n【오답】(B,D)레이블링도구 (C)코드생성보조",
    "en_q": "Consolidate and prepare data with missing values and outliers?",
    "en_opts": {
      "A": "Data Wrangler",
      "B": "Ground Truth",
      "C": "Q Developer",
      "D": "data labeling"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152210-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 61,
    "question": "과거 장기지원 필요 여부 데이터로 신규고객 예측. 모델링?",
    "options": {
      "A": "Anomaly detection",
      "B": "Linear regression",
      "C": "Logistic regression",
      "D": "Semantic segmentation"
    },
    "answer": "C",
    "explanation": "【핵심】Yes/No 이진분류 = Logistic regression\n【정답】확률 기반 이진분류\n【오답】(A)비정상탐지 (B)연속값 (D)이미지픽셀",
    "en_q": "Predict long-term support need (Yes/No)?",
    "en_opts": {
      "A": "Anomaly",
      "B": "Linear",
      "C": "Logistic",
      "D": "Semantic"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152217-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 62,
    "question": "Canvas 사용자와 모델 공유. 같은 도메인. 요구사항? (2개)",
    "options": {
      "A": "별도도메인",
      "B": "S3권한",
      "C": "Model Registry등록",
      "D": "AWS Marketplace",
      "E": "엔드포인트배포"
    },
    "answer": "BC",
    "explanation": "【핵심】Model Registry + S3권한\n【정답】(B)아티팩트액세스 (C)메타데이터\n【오답】(A)같은도메인 (D,E)공유불필요",
    "en_q": "Share model with Canvas user in same domain? (Choose 2)",
    "en_opts": {
      "A": "separate domains",
      "B": "S3 permissions",
      "C": "Model Registry",
      "D": "Marketplace",
      "E": "endpoint"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152223-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 63,
    "question": "대량 데이터 하이퍼파라미터 튜닝 검증손실 최소화. LEAST 계산시간?",
    "options": {
      "A": "Hyperband",
      "B": "Grid search",
      "C": "Bayesian",
      "D": "Random"
    },
    "answer": "A",
    "explanation": "【핵심】리소스효율 = Hyperband\n【정답】조기탈락+동적할당\n【오답】(B)전수조사 (C)순차탐색 (D)구조없음",
    "en_q": "Hyperparameter tuning with LEAST computation time?",
    "en_opts": {
      "A": "Hyperband",
      "B": "Grid",
      "C": "Bayesian",
      "D": "Random"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152224-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 64,
    "question": "기본계정 Redshift ML + 보조계정 S3 데이터. IPv4없음. 솔루션?",
    "options": {
      "A": "VPC피어링",
      "B": "Direct Connect + transit",
      "C": "Site-to-Site VPN",
      "D": "S3gateway + endpoint + 정책"
    },
    "answer": "D",
    "explanation": "【핵심】IPv4없음 + 크로스계정 = VPC endpoint\n【정답】S3gateway + interface + 정책\n【오답】(A)권한해결안됨 (B)과도한복잡 (C)VPN불필요",
    "en_q": "Redshift ML cross-account S3 without public IPv4?",
    "en_opts": {
      "A": "VPC peering",
      "B": "Direct Connect",
      "C": "Site-to-Site VPN",
      "D": "endpoints + policy"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152225-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 65,
    "question": "Lambda 모델메트릭 모니터링 + 임계값 이메일 알림?",
    "options": {
      "A": "CloudTrail",
      "B": "CloudFront",
      "C": "CloudWatch alarm",
      "D": "CloudFront규칙"
    },
    "answer": "C",
    "explanation": "【핵심】메트릭 = CloudWatch\n【정답】CloudWatch alarm + SNS 이메일\n【오답】(A)감사 (B,D)CDN",
    "en_q": "Monitor metrics and send email when threshold breached?",
    "en_opts": {
      "A": "CloudTrail",
      "B": "CloudFront",
      "C": "CloudWatch",
      "D": "CloudFront rule"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152226-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 66,
    "question": "모델업데이트 후 Model Monitor 데이터품질이슈. 완화?",
    "options": {
      "A": "파라미터조정",
      "B": "수동작업",
      "C": "새baseline",
      "D": "재훈련"
    },
    "answer": "C",
    "explanation": "【핵심】데이터드리프트 = baseline 변경\n【정답】최신 데이터로 새 baseline\n【오답】(A)미해결 (B)임시 (D)과도",
    "en_q": "Data quality issues after model update in Model Monitor?",
    "en_opts": {
      "A": "adjust params",
      "B": "manual job",
      "C": "new baseline",
      "D": "retrain"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152227-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 67,
    "question": "이미지→텍스트설명 모델 50MB S3 저장. 수요변화대응. LEAST운영?",
    "options": {
      "A": "batch transform",
      "B": "Async Inference + scaling",
      "C": "EKS + Karpenter",
      "D": "Batch + ECS"
    },
    "answer": "B",
    "explanation": "【핵심】동적스케일 + LEAST운영 = Async + policy\n【정답】관리형서비스\n【오답】(A)배치고정 (C,D)클러스터관리필요",
    "en_q": "Image-to-text with scale-to-demand and LEAST operational overhead?",
    "en_opts": {
      "A": "batch",
      "B": "Async + scaling",
      "C": "EKS",
      "D": "Batch job"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152228-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 68,
    "question": "문서 키워드 식별추출. LEAST운영?",
    "options": {
      "A": "NLTK + LDA",
      "B": "SageMaker + BlazingText",
      "C": "Lambda + TF-IDF",
      "D": "Comprehend"
    },
    "answer": "D",
    "explanation": "【핵심】LEAST운영 = 완전관리형\n【정답】Amazon Comprehend\n【오답】(A,B,C)코드작성필요",
    "en_q": "Identify and extract keywords with LEAST operational overhead?",
    "en_opts": {
      "A": "NLTK",
      "B": "BlazingText",
      "C": "Lambda",
      "D": "Comprehend"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152229-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 69,
    "question": "ML엔지니어 자신의 비즈니스그룹만 훈련데이터액세스. 솔루션?",
    "options": {
      "A": "S3 versioning",
      "B": "Object Lock",
      "C": "CORS",
      "D": "IAM정책"
    },
    "answer": "D",
    "explanation": "【핵심】액세스제어 = IAM\n【정답】IAM정책 + S3경로\n【오답】(A,B)보호기능 (C)도메인",
    "en_q": "ML engineers access only their business group's training data?",
    "en_opts": {
      "A": "versioning",
      "B": "Object Lock",
      "C": "CORS",
      "D": "IAM policies"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152230-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 70,
    "question": "매일 2시간 예측가능한부하 + 빠른응답. AWS관리. 솔루션?",
    "options": {
      "A": "Lambda batch",
      "B": "EC2 Auto Scaling",
      "C": "Serverless + provisioned",
      "D": "EKS"
    },
    "answer": "C",
    "explanation": "【핵심】예측가능 + AWS관리 = Serverless + provisioned\n【정답】미리예약된용량\n【오답】(A)비동기 (B)관리필요 (D)복잡도",
    "en_q": "Predictable 2-hour load daily with quick responses and AWS-managed?",
    "en_opts": {
      "A": "Lambda batch",
      "B": "EC2 scaling",
      "C": "Serverless provisioned",
      "D": "EKS"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152231-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 71,
    "question": "감정분석모델 예측 설명. 이해관계자대상. 솔루션?",
    "options": {
      "A": "Model Monitor",
      "B": "Clarify",
      "C": "CloudWatch A/B",
      "D": "shadow endpoint"
    },
    "answer": "B",
    "explanation": "【핵심】예측해석 = Clarify\n【정답】SHAP/LIME/PDP\n【오답】(A)모니터링 (C)분포 (D)비교",
    "en_q": "Explain model predictions to stakeholders?",
    "en_opts": {
      "A": "Model Monitor",
      "B": "Clarify",
      "C": "CloudWatch",
      "D": "shadow"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152232-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 72,
    "question": "분산훈련 인스턴스 간 통신오버헤드. MINIMIZE?",
    "options": {
      "A": "같은subnet 다른Region",
      "B": "같은subnet 다른AZ",
      "C": "같은subnet+AZ",
      "D": "같은subnet 다른AZ 데이터"
    },
    "answer": "C",
    "explanation": "【핵심】최소지연 = 같은AZ\n【정답】같은물리위치\n【오답】다른AZ/Region 지연증가",
    "en_q": "MINIMIZE communication overhead in distributed training?",
    "en_opts": {
      "A": "same subnet diff region",
      "B": "same subnet diff AZ",
      "C": "same AZ",
      "D": "same region diff AZ data"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152233-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 73,
    "question": "온프레미스 PyTorch 커스텀스크립트 + 소유데이터. AWS이동. LEAST노력?",
    "options": {
      "A": "기본제공알고리즘",
      "B": "script mode + premade",
      "C": "custom container",
      "D": "AWS Marketplace"
    },
    "answer": "B",
    "explanation": "【핵심】LEAST노력 = script mode\n【정답】PyTorch 기존스크립트 그대로\n【오답】(A)로직제한 (C)복잡 (D)도메인손실",
    "en_q": "Move on-premises PyTorch to AWS with LEAST effort?",
    "en_opts": {
      "A": "built-in algorithms",
      "B": "script mode + premade",
      "C": "custom container",
      "D": "Marketplace"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152234-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 74,
    "question": "수백만개 파일 MB단위 S3 훈련. 성능개선. LEAST시간?",
    "options": {
      "A": "S3 Express",
      "B": "FSx for Lustre",
      "C": "EFS",
      "D": "ElastiCache"
    },
    "answer": "B",
    "explanation": "【핵심】고성능병렬 = FSx for Lustre\n【정답】IOPS + 대역폭\n【오답】(A)여전히네트워크 (C)네트워크파일 (D)캐시",
    "en_q": "Improve training performance for millions of MB files in LEAST time?",
    "en_opts": {
      "A": "S3 Express",
      "B": "FSx Lustre",
      "C": "EFS",
      "D": "ElastiCache"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152235-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 75,
    "question": "고객표형식데이터 순서특성포함 민감정보마스킹. 솔루션?",
    "options": {
      "A": "Macie분류",
      "B": "DataBrew",
      "C": "AWS Batch",
      "D": "Amazon EMR"
    },
    "answer": "B",
    "explanation": "【핵심】마스킹 = DataBrew\n【정답】의미보존\n【오답】(A)분류만 (C,D)의미손실",
    "en_q": "Mask sensitive tabular data while preserving ordered features?",
    "en_opts": {
      "A": "Macie",
      "B": "DataBrew",
      "C": "AWS Batch",
      "D": "EMR"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152288-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 76,
    "question": "대규모데이터 비동기추론 + 데이터품질예약모니터링 + 알림. 솔루션?",
    "options": {
      "A": "Glue job + CloudWatch",
      "B": "Batch job + CloudTrail",
      "C": "ECS Fargate + EventBridge",
      "D": "batch transform + Model Monitor"
    },
    "answer": "D",
    "explanation": "【핵심】Batch Transform + Model Monitor\n【정답】통합모니터링\n【오답】(A,B)부적합 (C)자동화제한",
    "en_q": "Async inference with scheduled data quality monitoring and alerts?",
    "en_opts": {
      "A": "Glue + CloudWatch",
      "B": "Batch + CloudTrail",
      "C": "ECS + EventBridge",
      "D": "batch + Model Monitor"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152289-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 77,
    "question": "훈련데이터 min-max정규화. 프로덕션추론동일방식정규화. 솔루션?",
    "options": {
      "A": "알려진통계적용",
      "B": "훈련통계보존",
      "C": "배치새통계",
      "D": "샘플별새통계"
    },
    "answer": "B",
    "explanation": "【핵심】일관성 = 훈련통계유지\n【정답】데이터누출방지\n【오답】(A)다른통계 (C,D)배치/샘플별변동",
    "en_q": "Apply training min-max normalization to production data?",
    "en_opts": {
      "A": "known stats",
      "B": "keep training stats",
      "C": "batch new stats",
      "D": "per-sample stats"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152292-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 78,
    "question": "SageMaker이미지분류 6TB FSx ONTAP 같은VPC. 데이터액세스. 솔루션?",
    "options": {
      "A": "마운트볼륨",
      "B": "S3 Mountpoint",
      "C": "Data Wrangler카탈로그",
      "D": "Data Wrangler직접"
    },
    "answer": "A",
    "explanation": "【핵심】NFS마운트 = 직접액세스\n【정답】SageMaker Instance 볼륨마운트\n【오답】(B,C,D)부적합",
    "en_q": "Access 6TB FSx ONTAP data from SageMaker?",
    "en_opts": {
      "A": "mount volume",
      "B": "S3 Mountpoint",
      "C": "Data Wrangler catalog",
      "D": "Data Wrangler direct"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152294-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 79,
    "question": "3-4일마다 S3업로드 새훈련데이터 → SageMaker파이프라인재훈련. LEAST운영?",
    "options": {
      "A": "S3 Lifecycle",
      "B": "Lambda스캔",
      "C": "EventBridge규칙",
      "D": "MWAA오케스트레이션"
    },
    "answer": "C",
    "explanation": "【핵심】S3이벤트 = EventBridge\n【정답】자동트리거\n【오답】(A)데이터이동 (B)추가코드 (D)오버헤드",
    "en_q": "Trigger SageMaker pipeline when S3 data uploaded?",
    "en_opts": {
      "A": "S3 Lifecycle",
      "B": "Lambda",
      "C": "EventBridge",
      "D": "MWAA"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152295-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 80,
    "question": "XGBoost사기탐지 훈련셋성능좋음 신규거래성능나쁨. 개선?",
    "options": {
      "A": "학습률증가",
      "B": "관련없는특성제거",
      "C": "max_depth증가",
      "D": "max_depth감소"
    },
    "answer": "D",
    "explanation": "【핵심】과적합 = max_depth감소\n【정답】모델복잡도제한\n【오답】(A,C)과적합심화 (B)특성문제아님",
    "en_q": "Improve fraud detection for new transactions (overfitting)?",
    "en_opts": {
      "A": "increase learning rate",
      "B": "remove features",
      "C": "increase max_depth",
      "D": "decrease max_depth"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152298-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 81,
    "question": "이진분류모델 양성+음성예측최대화. 재보정메트릭?",
    "options": {
      "A": "Accuracy",
      "B": "Precision",
      "C": "Recall",
      "D": "Specificity"
    },
    "answer": "A",
    "explanation": "【핵심】양성+음성모두 = Accuracy\n【정답】전체정확도\n【오답】(B)양성만 (C)양성재현 (D)음성만",
    "en_q": "Maximize correct predictions for both positive and negative?",
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
    "question": "데이터과학자 ML워크플로우세부제어 DAG시각화 이력+거버넌스. 솔루션?",
    "options": {
      "A": "CodePipeline + Lineage",
      "B": "CodePipeline + Experiments",
      "C": "Pipelines + Lineage",
      "D": "Pipelines + Experiments"
    },
    "answer": "C",
    "explanation": "【핵심】DAG = SageMaker Pipelines\n【정답】Lineage = 감사\n【오답】(A,B)CodePipeline은CI/CD (D)Experiments는DAG미지원",
    "en_q": "Fine-grained control with DAG and lineage tracking?",
    "en_opts": {
      "A": "CodePipeline + Lineage",
      "B": "CodePipeline + Experiments",
      "C": "Pipelines + Lineage",
      "D": "Pipelines + Experiments"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152095-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 83,
    "question": "EC2 Lambda ECS ML컨테이너앱비용절감. 비효율리소스식별+권장사항. LEAST노력?",
    "options": {
      "A": "코드작성",
      "B": "비용태그",
      "C": "CloudTrail",
      "D": "Compute Optimizer"
    },
    "answer": "D",
    "explanation": "【핵심】자동분석 = Compute Optimizer\n【정답】관리형권장사항\n【오답】(A)코드필요 (B)분류만 (C)감사",
    "en_q": "Identify inefficient resources and reduce costs with LEAST effort?",
    "en_opts": {
      "A": "code",
      "B": "cost tags",
      "C": "CloudTrail",
      "D": "Compute Optimizer"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152305-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 84,
    "question": "ECR모델 중앙카탈로그 여러계정. 솔루션?",
    "options": {
      "A": "ECR복제",
      "B": "중앙계정ECR복제",
      "C": "Model Registry + 크로스정책",
      "D": "Glue Data Catalog"
    },
    "answer": "C",
    "explanation": "【핵심】모델카탈로그 = SageMaker Model Registry\n【정답】크로스계정리소스정책\n【오답】(A,B)ECR저장소만 (D)데이터카탈로그",
    "en_q": "Central catalog for ECR models across accounts?",
    "en_opts": {
      "A": "ECR replication",
      "B": "central ECR",
      "C": "Model Registry + policy",
      "D": "Glue Catalog"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152097-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 85,
    "question": "새모델 트래픽10% 온라인검증 후 전체릴리스. LEAST운영?",
    "options": {
      "A": "variant weight 0.1",
      "B": "variant weight 1",
      "C": "새엔드포인트",
      "D": "ALB라우팅"
    },
    "answer": "A",
    "explanation": "【핵심】10% = 가중치0.1\n【정답】같은엔드포인트\n【오답】(B)100% (C)새엔드포인트 (D)수동라우팅",
    "en_q": "10% traffic online validation with LEAST operational overhead?",
    "en_opts": {
      "A": "weight 0.1",
      "B": "weight 1",
      "C": "new endpoint",
      "D": "ALB"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/152310-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 86,
    "question": "이미지아이템식별 + 위치제공. SageMaker알고리즘?",
    "options": {
      "A": "Image classification",
      "B": "XGBoost",
      "C": "Object detection",
      "D": "k-NN"
    },
    "answer": "C",
    "explanation": "【핵심】위치 = bounding box\n【정답】Object Detection\n【오답】(A)분류만 (B)표형 (D)거리기반",
    "en_q": "Identify item and provide location in image?",
    "en_opts": {
      "A": "Image classification",
      "B": "XGBoost",
      "C": "Object detection",
      "D": "k-NN"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168847-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 87,
    "question": "1TB 다양형식 CSV/JSON/XLSX/Parquet DataBrew처리. Glue호환. 솔루션?",
    "options": {
      "A": "기존폴더 Parquet",
      "B": "기존폴더 GlueParquet",
      "C": "형식분리 Parquet",
      "D": "형식분리 GlueParquet"
    },
    "answer": "C",
    "explanation": "【핵심】형식분리 = DataBrew처리가능\n【정답】Apache Parquet\n【오답】(A,B)형식혼재 (B,D)Glue Parquet없음",
    "en_q": "Process mixed file formats with DataBrew for Glue compatibility?",
    "en_opts": {
      "A": "existing Parquet",
      "B": "existing Glue Parquet",
      "C": "separate Parquet",
      "D": "separate Glue Parquet"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/157315-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 88,
    "question": "품질Pass/Fail분류 로봇사용. 성능평가메트릭? (2개)",
    "options": {
      "A": "Precision recall",
      "B": "RMSE MAPE",
      "C": "Accuracy F1",
      "D": "BLEU",
      "E": "Perplexity"
    },
    "answer": "AC",
    "explanation": "【핵심】이진분류 Pass/Fail\n【정답】(A)또는(C)\n【오답】(B)회귀 (D,E)NLP",
    "en_q": "Quality Pass/Fail classification metrics? (Choose 2)",
    "en_opts": {
      "A": "Precision recall",
      "B": "RMSE MAPE",
      "C": "Accuracy F1",
      "D": "BLEU",
      "E": "Perplexity"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/157316-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 89,
    "question": "훈련작업중 전송데이터암호화. SageMaker프로세스포함. 솔루션?",
    "options": {
      "A": "배치노드간",
      "B": "훈련클러스터노드간",
      "C": "훈련작업KMS",
      "D": "도메인KMS"
    },
    "answer": "B",
    "explanation": "【핵심】훈련노드간 = inter-node encryption\n【정답】분산훈련통신암호화\n【오답】(A)배치 (C,D)저장데이터",
    "en_q": "Encrypt data in transit during training between nodes?",
    "en_opts": {
      "A": "batch nodes",
      "B": "training cluster nodes",
      "C": "training job KMS",
      "D": "domain KMS"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/168853-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 90,
    "question": "시계열예측모델품질평가메트릭? (2개)",
    "options": {
      "A": "Recall",
      "B": "LogLoss",
      "C": "RMSE",
      "D": "InferenceLatency",
      "E": "wQL"
    },
    "answer": "CE",
    "explanation": "【핵심】시계열예측 = 연속값\n【정답】(C)RMSE (E)weighted quantile loss\n【오답】(A,B)분류 (D)성능지표",
    "en_q": "Time-series forecasting quality metrics? (Choose 2)",
    "en_opts": {
      "A": "Recall",
      "B": "LogLoss",
      "C": "RMSE",
      "D": "InferenceLatency",
      "E": "wQL"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169486-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 91,
    "question": "가속인스턴스 실시간+다양스케일링+cold start없음. 솔루션?",
    "options": {
      "A": "Serverless + provisioned",
      "B": "Async + auto scaling",
      "C": "endpoint + inference components + min 1",
      "D": "multi-model endpoint + min 1"
    },
    "answer": "C",
    "explanation": "【핵심】다양스케일링 = inference components\n【정답】min copies>=1 = cold start방지\n【오답】(A)cold start문제 (B)실시간아님 (D)비효율",
    "en_q": "Accelerated real-time with per-model scaling and no cold start?",
    "en_opts": {
      "A": "Serverless provisioned",
      "B": "Async scaling",
      "C": "inference components min 1",
      "D": "multi-model min 1"
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/169487-exam-aws-certified-machine-learning-engineer-associate-mla/"
  },
  {
    "id": 92,
    "question": "한 회사가 ML 프로세스를 위해 Amazon SageMaker를 사용합니다. 컴플라이언스 감사에서 훈련 데이터용 Amazon S3 버킷이 S3 관리형 키(SSE-S3)를 사용한 서버 측 암호화를 사용하고 있음을 발견했습니다. 회사는 고객 관리형 키가 필요합니다. ML 엔지니어가 S3 버킷을 AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화로 변경합니다. ML 엔지니어는 다른 구성 변경을 하지 않습니다. 암호화 설정 변경 후 SageMaker 훈련 작업이 AccessDenied 오류로 실패하기 시작합니다. ML 엔지니어가 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "훈련 작업의 실행 역할에 연결된 IAM 정책을 업데이트합니다. s3:ListBucket 및 s3:GetObject 권한을 포함합니다.",
      "B": "S3 버킷에 연결된 S3 버킷 정책을 업데이트합니다. aws:SecureTransport 조건 키의 값을 True로 설정합니다.",
      "C": "훈련 작업의 실행 역할에 연결된 IAM 정책을 업데이트합니다. kms:Encrypt 및 kms:Decrypt 권한을 포함합니다.",
      "D": "훈련 작업을 생성한 사용자에게 연결된 IAM 정책을 업데이트합니다. kms:CreateGrant 권한을 포함합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SSE-KMS — AWS KMS 키를 사용한 암호화로 변경 시 실행 역할에 KMS 권한 필요\n▸ AccessDenied — 암호화 키 접근 권한 부재로 인한 오류\n▸ 실행 역할 — SageMaker 훈련 작업이 사용하는 역할\n\n【정답 포인트】\n▸ S3 버킷을 SSE-KMS로 변경하면 SageMaker 훈련 작업이 데이터를 복호화하기 위해 kms:Decrypt 권한이 필요\n▸ 데이터를 읽기 위해 kms:Encrypt도 필요할 수 있음\n▸ 실행 역할의 IAM 정책에 이 권한들을 추가해야 함\n\n【오답 체크】\n(A) s3:ListBucket, s3:GetObject는 이미 있었을 가능성 높음\n(B) SecureTransport는 암호화 키 접근 권한과 무관\n(D) CreateGrant는 사용자가 아닌 실행 역할에 필요\n\n【시험 포인트】\n암호화 방식 변경 → 관련 권한 변경 필요",
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
    "question": "한 회사가 컴퓨팅 최적화 인스턴스를 사용하여 Amazon SageMaker에서 훈련 작업을 실행합니다. 향후 55주 동안 훈련 실행 수요는 일정하게 유지될 것입니다. 인스턴스는 매주 35시간 동안 실행되어야 합니다. 회사는 모델 훈련 비용을 줄여야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "각 주마다 프로비저닝된 동시성 35시간으로 서버리스 엔드포인트를 사용합니다. 엔드포인트에서 훈련을 실행합니다.",
      "B": "훈련을 위해 SageMaker Edge Manager를 사용합니다. 엣지 디바이스 구성에서 인스턴스 요구사항을 지정합니다. 훈련을 실행합니다.",
      "C": "SageMaker Training의 이기종 클러스터 기능을 사용합니다. instance_type, instance_count 및 instance_groups 인수를 구성하여 훈련 작업을 실행합니다.",
      "D": "1년 기간 및 선불 결제로 SageMaker Savings Plan에 가입합니다. 인스턴스에서 SageMaker Training 작업을 실행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Savings Plan — 장기 약정으로 최대 72% 할인\n▸ 55주 일정 수요 — 1년 약정 Savings Plan 최적화\n▸ 35시간/주 × 55주 = 1,925시간 = 상당한 비용 절감 기회\n\n【정답 포인트】\n▸ 55주 동안 일정한 수요는 1년 Savings Plan의 영역\n▸ All Upfront 결제 옵션이 최대 할인 제공\n▸ Reserved Instances보다 Savings Plan이 더 유연\n\n【오답 체크】\n(A) 서버리스 엔드포인트는 훈련이 아닌 추론용\n(B) Edge Manager는 엣지 디바이스용, 클라우드 훈련에 부적절\n(C) 이기종 클러스터는 비용 절감과 무관\n\n【시험 포인트】\n일정한 장기 수요 → Savings Plan 고려",
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
    "question": "한 회사가 제품 고장을 예측하기 위해 XGBoost 알고리즘을 사용하는 ML 모델을 배포했습니다. 모델은 Amazon SageMaker 엔드포인트에서 호스팅되며 정상 작동 데이터로 훈련되었습니다. AWS Lambda 함수는 회사 애플리케이션에 예측을 제공합니다. ML 엔지니어는 들어오는 라이브 데이터를 사용하여 시간 경과에 따른 모델 정확도 감소를 감지하는 솔루션을 구현해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "실시간 추론 데이터 및 모델 예측을 모니터링하는 대시보드를 만들기 위해 Amazon CloudWatch를 사용합니다. 대시보드를 사용하여 드리프트를 감지합니다.",
      "B": "실시간 추론 데이터 및 모델 예측을 사용하여 모델 드리프트를 계산하도록 Lambda 함수를 수정합니다. 경고를 보내도록 Lambda 함수를 프로그래밍합니다.",
      "C": "SageMaker Model Monitor에서 모니터링 작업을 예약합니다. 훈련 데이터 통계 및 제약 조건의 기준선에 대해 라이브 데이터를 분석하여 드리프트를 감지하도록 작업을 사용합니다.",
      "D": "SageMaker Debugger에서 모니터링 작업을 예약합니다. 훈련 데이터 통계 및 제약 조건의 기준선에 대해 라이브 데이터를 분석하여 드리프트를 감지하도록 작업을 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Model Monitor — 프로덕션 모델의 데이터/모델 드리프트 감지 전용\n▸ 드리프트 감지 — 훈련 데이터 통계 기준선과 라이브 데이터 비교\n▸ Debugger — 훈련 과정 분석, 프로덕션 드리프트 감지 아님\n\n【정답 포인트】\n▸ SageMaker Model Monitor는 프로덕션 모델의 데이터/모델 드리프트 감지 전담\n▸ 훈련 데이터 통계와 제약 조건을 기준선으로 사용\n▸ 자동화된 드리프트 감지 기능 제공\n\n【오답 체크】\n(A) CloudWatch는 메트릭 모니터링만 가능, 드리프트 기능 없음\n(B) Lambda로 직접 구현하면 복잡하고 유지보수 어려움\n(D) Debugger는 훈련 중 모델 동작 분석용\n\n【시험 포인트】\n프로덕션 드리프트 감지 → Model Monitor",
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
    "question": "한 회사가 고객 행동을 예측하기 위해 과거 거래 데이터를 사용하는 ML 모델을 보유하고 있습니다. ML 엔지니어는 Amazon SageMaker에서 모델 예측 정확도를 높이도록 모델을 최적화하고 있습니다. ML 엔지니어는 입력 데이터 및 결과 예측을 검토하여 다양한 인구통계 범주에서 모델의 성능을 왜곡할 수 있는 추세를 식별해야 합니다. 이 수준의 분석을 제공할 솔루션은 무엇입니까?",
    "options": {
      "A": "모델 훈련 중 리소스 최적화를 위해 Amazon CloudWatch를 사용하여 네트워크 메트릭과 CPU 메트릭을 모니터링합니다.",
      "B": "모델 출력의 통계를 기반으로 데이터를 수정하기 위해 AWS Glue DataBrew 레시피를 만듭니다.",
      "C": "SageMaker Clarify를 사용하여 정확도에 영향을 줄 수 있는 기본 패턴을 찾기 위해 모델 및 훈련 데이터를 평가합니다.",
      "D": "데이터 전처리를 자동화하고 모델의 입력 데이터 품질을 일관되게 보장하기 위해 AWS Lambda 함수를 만듭니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Clarify — 모델 편향, 변수 중요도, SHAP, LIME 제공\n▸ 편향 감지 — 인구통계별 성능 차이 분석\n▸ 설명성 — 모델 예측 근거 분석\n\n【정답 포인트】\n▸ SageMaker Clarify는 모델 편향과 설명성 분석 전담\n▸ 인구통계별 정확도 왜곡 패턴 감지\n▸ 특성 중요도 및 SHAP 값으로 영향 분석\n\n【오답 체크】\n(A) CloudWatch는 리소스 메트릭만, 모델 편향 분석 불가\n(B) DataBrew는 데이터 정제, 편향 분석 아님\n(D) Lambda는 자동화 도구, 편향 분석 기능 없음\n\n【시험 포인트】\n모델 편향 및 설명성 → SageMaker Clarify",
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
    "question": "한 회사가 가속화된 인스턴스 유형의 10개 Reserved Instance를 사용하여 ML 모델의 현재 버전을 제공합니다. ML 엔지니어는 Amazon SageMaker 실시간 추론 엔드포인트에 새 버전의 모델을 배포해야 합니다. 솔루션은 원래 10개 인스턴스를 사용하여 두 버전의 모델을 모두 제공해야 합니다. 또한 배포 과정에서 사용할 수 있는 추가 Reserved Instance 1개를 포함해야 합니다. 버전 간의 전환은 가동 중지 시간이나 서비스 중단 없이 발생해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "All-at-once 트래픽 시프팅을 사용하여 블루/그린 배포를 구성합니다.",
      "B": "10% 크기의 카나리 트래픽 시프팅을 사용하여 블루/그린 배포를 구성합니다.",
      "C": "10%의 트래픽 샘플링 비율을 사용하여 섀도우 테스트를 구성합니다.",
      "D": "rolling batch size 1을 사용하여 롤링 배포를 구성합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Rolling Deployment — 1개 인스턴스씩 순차적으로 교체, 무중단 배포\n▸ 11개 인스턴스 가용 — 추가 1개로 점진적 전환 가능\n▸ 가동 중지 시간 없음 — 항상 10개 이상 가동\n\n【정답 포인트】\n▸ 11개 인스턴스(10개 기존 + 1개 추가)로 rolling batch size 1 가능\n▸ 1개씩 교체하면 항상 최소 10개 인스턴스 운영\n▸ 무중단 배포 달성\n\n【오답 체크】\n(A) All-at-once는 모든 트래픽 동시 전환, 중단 위험\n(B) 카나리는 트래픽 분산이지 버전 교체 메커니즘 아님\n(C) 섀도우 테스트는 평가용, 배포 방식이 아님\n\n【시험 포인트】\n무중단 배포 + 최소 인스턴스 유지 → Rolling Deployment",
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
    "question": "한 IoT 회사가 물체 감지를 위해 XGBoost 모델을 훈련하고 테스트하기 위해 Amazon SageMaker를 사용합니다. ML 엔지니어는 하이퍼파라미터 변형으로 모델을 훈련할 때 성능 메트릭을 모니터링해야 합니다. ML 엔지니어는 또한 훈련 완료 후 Short Message Service(SMS) 문자 메시지를 보내야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "성능 메트릭을 모니터링하기 위해 Amazon CloudWatch를 사용합니다. 메시지 전달을 위해 Amazon Simple Queue Service(Amazon SQS)를 사용합니다.",
      "B": "성능 메트릭을 모니터링하기 위해 Amazon CloudWatch를 사용합니다. 메시지 전달을 위해 Amazon Simple Notification Service(Amazon SNS)를 사용합니다.",
      "C": "성능 메트릭을 모니터링하기 위해 AWS CloudTrail을 사용합니다. 메시지 전달을 위해 Amazon Simple Queue Service(Amazon SQS)를 사용합니다.",
      "D": "성능 메트릭을 모니터링하기 위해 AWS CloudTrail을 사용합니다. 메시지 전달을 위해 Amazon Simple Notification Service(Amazon SNS)를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudWatch — 성능 메트릭 모니터링용 (CloudTrail은 API 로그)\n▸ SNS — SMS 메시지 발송 (SQS는 큐 기반 메시지)\n▸ 성능 메트릭 — 훈련 손실, 정확도 등\n\n【정답 포인트】\n▸ CloudWatch는 SageMaker 훈련 메트릭 수집\n▸ SNS는 SMS 알림 발송 기능 제공\n▸ SNS는 push 기반 메시징, SMS 지원\n\n【오답 체크】\n(A) SQS는 큐 기반, SMS 발송 직접 지원 안 함\n(C) CloudTrail은 API 감사 로그, 성능 메트릭 아님\n(D) CloudTrail 사용은 부적절\n\n【시험 포인트】\nCloudWatch = 메트릭 모니터링, SNS = SMS 알림",
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
    "question": "한 회사가 Amazon SageMaker 노트북 인스턴스를 포함할 ML 프로젝트를 진행하고 있습니다. ML 엔지니어는 SageMaker 노트북 인스턴스가 루트 액세스를 허용하지 않도록 보장해야 합니다. 루트 액세스를 허용하는 노트북 인스턴스의 배포를 어떤 솔루션이 방지할까요?",
    "options": {
      "A": "IAM 조건 키를 사용하여 루트 액세스를 허용하는 SageMaker 노트북 인스턴스의 배포를 중단합니다.",
      "B": "AWS Key Management Service(AWS KMS) 키를 사용하여 루트 액세스를 허용하는 SageMaker 노트북 인스턴스의 배포를 중단합니다.",
      "C": "Amazon EventBridge 이벤트를 사용하여 리소스 생성을 모니터링합니다. 루트 액세스를 허용하는 배포된 모든 SageMaker 노트북 인스턴스를 삭제하는 AWS Lambda 함수를 만듭니다.",
      "D": "AWS CloudFormation 이벤트를 사용하여 리소스 생성을 모니터링합니다. 루트 액세스를 허용하는 배포된 모든 SageMaker 노트북 인스턴스를 삭제하는 AWS Lambda 함수를 만듭니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ IAM 조건 키 — 정책에서 SageMaker 노트북 생성 조건 지정\n▸ 사전 방지 — 배포 전 차단 (사후 삭제 아님)\n▸ RootAccess 파라미터 — 루트 액세스 설정\n\n【정답 포인트】\n▸ IAM 정책의 조건 키로 RootAccess=true 요청 거부\n▸ 배포 전에 차단하는 사전 예방 접근\n▸ AWS KMS가 아닌 IAM이 SageMaker 리소스 제어\n\n【오답 체크】\n(B) KMS는 암호화 제어, 리소스 생성 제어 안 함\n(C) EventBridge + Lambda는 사후 대응 (배포 후 삭제)\n(D) CloudFormation 이벤트는 CloudFormation 스택 전용\n\n【시험 포인트】\n배포 방지 → IAM 조건 키 (사후 대응 아님)",
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
    "question": "한 회사가 Amazon SageMaker를 사용하여 ML 모델을 개발합니다. 회사는 민감한 훈련 데이터를 Amazon S3 버킷에 저장합니다. 모델 훈련은 인터넷으로부터 네트워크 격리를 가져야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker 훈련 작업을 프라이빗 서브넷에서 실행합니다. NAT 게이트웨이를 만듭니다. NAT 게이트웨이를 통해 훈련 트래픽을 라우팅합니다.",
      "B": "SageMaker 훈련 작업을 프라이빗 서브넷에서 실행합니다. S3 게이트웨이 VPC 엔드포인트를 만듭니다. S3 게이트웨이 VPC 엔드포인트를 통해 훈련 트래픽을 라우팅합니다.",
      "C": "연결된 보안 그룹이 있는 퍼블릭 서브넷에서 SageMaker 훈련 작업을 실행합니다. 보안 그룹에서 인바운드 규칙을 사용하여 인터넷의 트래픽을 제한합니다. AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화로 SageMaker 인스턴스 스토리지를 암호화합니다.",
      "D": "aws:SecureTransport 조건 키 값을 True로 설정하는 버킷 정책을 사용하여 Amazon S3로의 트래픽을 암호화합니다. Amazon S3에 대해 기본 저장 시 암호화를 사용합니다. AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화로 SageMaker 인스턴스 스토리지를 암호화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 네트워크 격리 — 인터넷 연결 차단\n▸ VPC 엔드포인트 — AWS 서비스 프라이빗 액세스\n▸ S3 게이트웨이 엔드포인트 — NAT 없이 S3 접근\n\n【정답 포인트】\n▸ 프라이빗 서브넷은 인터넷 게이트웨이 연결 안 함\n▸ S3 게이트웨이 엔드포인트로 S3 직접 접근\n▸ NAT보다 비용 절감, 더 안전\n\n【오답 체크】\n(A) NAT은 여전히 인터넷 게이트웨이 경유\n(C) 퍼블릭 서브넷은 인터넷 연결 가능성\n(D) 암호화는 네트워크 격리와 무관\n\n【시험 포인트】\nS3 격리 접근 → VPC 게이트웨이 엔드포인트",
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
    "question": "한 회사가 모델이 생성될 때 ML 모델의 버전을 자동으로 생성할 AWS 솔루션이 필요합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic Container Registry(Amazon ECR)",
      "B": "Amazon SageMaker Marketplace의 모델 패키지",
      "C": "Amazon SageMaker ML Lineage Tracking",
      "D": "Amazon SageMaker Model Registry"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Model Registry — 모델 버전 관리 및 메타데이터 추적\n▸ 버전 자동 생성 — 모델 등록 시 자동 버전 할당\n▸ 모델 계보 — 학습 작업 및 리소스 추적\n\n【정답 포인트】\n▸ Model Registry는 모델 버전 관리 전담\n▸ 모델 등록 시 자동 버전 생성\n▸ 승인 프로세스 및 메타데이터 추적\n\n【오답 체크】\n(A) ECR은 컨테이너 이미지 저장소, 모델 버전 관리 아님\n(B) Marketplace는 외부 모델 구매 마켓플레이스\n(C) Lineage Tracking은 계보 기록만, 버전 관리 아님\n\n【시험 포인트】\n모델 버전 관리 → Model Registry",
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
    "question": "한 회사가 Amazon Bedrock에서 실행되는 오픈 소스 대규모 언어 모델(LLM)을 보완하기 위해 Retrieval Augmented Generation(RAG)을 사용해야 합니다. RAG용 회사 데이터는 Amazon S3 버킷의 문서 세트입니다. 문서는 .csv 파일과 .docx 파일로 구성되어 있습니다. 운영 부담이 가장 적은 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon SageMaker Pipelines에서 파이프라인을 만들어 새 모델을 생성합니다. Amazon Bedrock에서 새 모델을 호출하여 RAG 쿼리를 수행합니다.",
      "B": "데이터를 벡터로 변환합니다. 데이터를 Amazon Neptune 데이터베이스에 저장합니다. 데이터베이스를 Amazon Bedrock에 연결합니다. Amazon Bedrock API를 호출하여 RAG 쿼리를 수행합니다.",
      "C": "Amazon SageMaker의 AutoML 작업을 사용하여 기존 LLM을 미세 조정합니다. S3 버킷을 AutoML 작업의 데이터 소스로 구성합니다. LLM을 SageMaker 엔드포인트에 배포합니다. 엔드포인트를 사용하여 RAG 쿼리를 수행합니다.",
      "D": "Amazon Bedrock용 지식 기반을 만듭니다. S3 버킷을 참조하는 데이터 소스를 구성합니다. Amazon Bedrock API를 사용하여 RAG 쿼리를 수행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Bedrock Knowledge Base — Bedrock용 RAG 통합 솔루션\n▸ 자동 벡터화 — 문서 자동 처리\n▸ 최소 운영 부담 — 관리형 서비스\n\n【정답 포인트】\n▸ Bedrock Knowledge Base는 RAG용 관리형 솔루션\n▸ S3 직접 연결 가능\n▸ 벡터화 및 검색 자동화\n▸ .csv, .docx 포함 다양한 형식 지원\n\n【오답 체크】\n(A) SageMaker Pipelines는 모델 생성 파이프라인\n(B) Neptune + 벡터화 수동 구성 필요\n(C) AutoML은 미세 조정, RAG 솔루션 아님\n\n【시험 포인트】\nBedrock RAG = Knowledge Base (최소 운영 부담)",
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
    "question": "한 회사가 Amazon SageMaker 엔드포인트에서 프로덕션 추론을 위해 ML 모델을 배포할 계획입니다. 평균 추론 페이로드 크기는 100MB에서 300MB까지 다양합니다. 추론 요청은 60분 이내에 처리되어야 합니다. 이 요구사항을 충족할 SageMaker 추론 옵션은 무엇입니까?",
    "options": {
      "A": "서버리스 추론",
      "B": "비동기 추론",
      "C": "실시간 추론",
      "D": "배치 변환"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 대용량 페이로드 — 100-300 MB (실시간 제한 초과)\n▸ 60분 SLA — 즉시 응답 불필요\n▸ 비동기 추론 — 최대 1시간 지연 허용\n\n【정답 포인트】\n▸ 비동기 추론은 대용량 페이로드 처리\n▸ 60분 이내 처리 가능\n▸ S3 기반 요청/응답\n\n【오답 체크】\n(A) 서버리스는 페이로드 6MB 제한\n(C) 실시간은 페이로드 6MB, 지연 최소화\n(D) 배치 변환은 배치 처리용\n\n【시험 포인트】\n대용량 + 장시간 허용 → 비동기 추론",
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
    "question": "ML 엔지니어가 이미지 분류 훈련 작업에서 클래스 불균형을 알아냅니다. ML 엔지니어가 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "데이터 세트의 크기를 줄입니다.",
      "B": "데이터 세트의 일부 이미지를 변환합니다.",
      "C": "데이터 세트에 무작위 오버샘플링을 적용합니다.",
      "D": "데이터 세트에 무작위 데이터 분할을 적용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 클래스 불균형 — 특정 클래스 샘플 부족\n▸ 오버샘플링 — 소수 클래스 샘플 복제\n▸ SMOTE — 합성 샘플 생성\n\n【정답 포인트】\n▸ 무작위 오버샘플링은 소수 클래스 샘플 반복\n▸ 클래스 분포 균형 맞춤\n▸ 간단하고 효과적\n\n【오답 체크】\n(A) 데이터 크기 감소는 문제 악화\n(B) 이미지 변환은 불균형 해결 아님\n(D) 랜덤 분할은 불균형 처리 아님\n\n【시험 포인트】\n클래스 불균형 → 오버샘플링 (또는 SMOTE)",
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
    "question": "한 회사가 ML 모델과의 고객 상호작용에 대한 일일 .csv 파일을 받습니다. 회사는 파일을 Amazon S3에 저장하고 파일을 사용하여 모델을 재훈련합니다. ML 엔지니어는 모델이 재훈련되기 전에 파일의 신용 카드 번호를 마스킹하는 솔루션을 구현해야 합니다. 개발 노력이 가장 적은 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Macie에서 발견 작업을 만듭니다. 민감한 데이터를 찾고 마스킹하도록 작업을 구성합니다.",
      "B": "AWS Glue 작업에서 실행할 Apache Spark 코드를 만듭니다. AWS Glue의 민감한 데이터 감지 기능을 사용하여 민감한 데이터를 찾고 마스킹합니다.",
      "C": "AWS Glue 작업에서 실행할 Apache Spark 코드를 만듭니다. 코드를 프로그래밍하여 정규 표현식 작업을 수행하여 민감한 데이터를 찾고 마스킹합니다.",
      "D": "Amazon EC2 인스턴스에서 실행할 Apache Spark 코드를 만듭니다. 코드를 프로그래밍하여 민감한 데이터를 찾고 마스킹하는 작업을 수행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue — 데이터 통합 및 정제 서비스\n▸ Sensitive Data Detection — Glue 내장 기능\n▸ 최소 개발 노력 — 관리형 서비스\n\n【정답 포인트】\n▸ AWS Glue는 PII/민감 데이터 감지 내장\n▸ 정규식 작성 필요 없음\n▸ 자동화된 마스킹 기능\n\n【오답 체크】\n(A) Macie는 발견만, 마스킹 기능 제한적\n(C) 정규식 수동 작성 필요 (개발 노력 증가)\n(D) EC2는 관리형 서비스 아님\n\n【시험 포인트】\nPII 마스킹 최소 노력 → AWS Glue Sensitive Data Detection",
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
    "question": "한 의료 회사가 환자의 치료를 권장하는 도구를 구축하기 위해 AWS를 사용하고 있습니다. 회사는 환자의 건강 기록과 영어로 된 자체 보고 텍스트 정보를 얻었습니다. 회사는 이 정보를 사용하여 환자에 대한 통찰력을 얻어야 합니다. 개발 노력이 가장 적은 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터를 요약하기 위해 Amazon SageMaker를 사용하여 순환 신경망(RNN)을 구축합니다.",
      "B": "데이터를 요약하기 위해 Amazon Comprehend Medical을 사용합니다.",
      "C": "데이터를 쿼리하기 위해 빠른 검색 도구를 생성하려면 Amazon Kendra를 사용합니다.",
      "D": "데이터에서 텍스트 요약을 만들기 위해 Amazon SageMaker Sequence-to-Sequence(seq2seq) 알고리즘을 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Comprehend Medical — 의료 NLP 관리형 서비스\n▸ 의료 텍스트 분석 — 병력, 처방, 진단 추출\n▸ 최소 개발 노력 — API 호출만으로 처리\n\n【정답 포인트】\n▸ Amazon Comprehend Medical은 의료 텍스트 전문\n▸ 건강 기록 자동 분석\n▸ 관리형 서비스\n\n【오답 체크】\n(A) RNN은 직접 구축 필요 (개발 복잡)\n(C) Kendra는 검색 엔진, 요약 아님\n(D) Seq2seq는 모델 훈련 필요\n\n【시험 포인트】\n의료 텍스트 분석 → Comprehend Medical",
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
    "question": "한 회사가 분류자 모델을 구축하기 위해 PDF 문서에서 엔티티를 추출해야 합니다. 가장 적은 시간에 엔티티를 추출하고 저장할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Comprehend를 사용하여 엔티티를 추출합니다. 출력을 Amazon S3에 저장합니다.",
      "B": "Amazon SageMaker에서 오픈 소스 AI 광학 문자 인식(OCR) 도구를 사용하여 엔티티를 추출합니다. 출력을 Amazon S3에 저장합니다.",
      "C": "Amazon Textract를 사용하여 엔티티를 추출합니다. Amazon Comprehend를 사용하여 엔티티를 텍스트로 변환합니다. 출력을 Amazon S3에 저장합니다.",
      "D": "Amazon Textract를 Amazon Augmented AI(Amazon A2I)와 통합하여 엔티티를 추출합니다. 출력을 Amazon S3에 저장합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Textract — 문서에서 구조화된 데이터 추출\n▸ Comprehend — 텍스트에서 엔티티 추출\n▸ 최소 시간 — 직접 추출 vs 추가 처리 단계\n\n【정답 포인트】\n▸ Amazon Comprehend는 텍스트 엔티티 추출 전담\n▸ PDF → 텍스트 변환 불필요\n▸ 가장 직접적인 경로\n\n【오답 체크】\n(B) OCR은 수동 설정 필요, 복잡\n(C) Textract + Comprehend는 2단계 (시간 증가)\n(D) A2I는 인간 검토 추가 (시간 증가)\n\n【시험 포인트】\nPDF 엔티티 추출 → Textract (구조) or Comprehend (텍스트)",
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
    "question": "한 회사가 VPN을 통해 액세스 가능한 Amazon SageMaker Studio 노트북을 공유합니다. 회사는 악의적 행위자가 미리 서명된 URL을 악용하여 노트북에 액세스하는 것을 방지하기 위해 액세스 제어를 적용해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "aws:sourceIp IAM 정책 조건을 사용하여 Studio 클라이언트 IP 검증을 설정합니다.",
      "B": "aws:sourceVpc IAM 정책 조건을 사용하여 Studio 클라이언트 VPC 검증을 설정합니다.",
      "C": "aws:PrimaryTag IAM 정책 조건을 사용하여 Studio 클라이언트 역할 엔드포인트 검증을 설정합니다.",
      "D": "aws:PrincipalTag IAM 정책 조건을 사용하여 Studio 클라이언트 사용자 엔드포인트 검증을 설정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 미리 서명된 URL — 시간 제한 임시 액세스\n▸ IP 검증 — aws:sourceIp로 IP 기반 제한\n▸ VPN 액세스 — 특정 IP 범위만 허용\n\n【정답 포인트】\n▸ aws:sourceIp로 VPN IP만 허용\n▸ 미리 서명된 URL 악용 방지\n▸ IAM 조건 기반 제어\n\n【오답 체크】\n(B) sourceVpc는 VPC 내부 제어용, 외부 VPN 제한 못 함\n(C) PrimaryTag는 리소스 태그용\n(D) PrincipalTag는 사용자 태그용\n\n【시험 포인트】\nVPN IP 제한 → aws:sourceIp",
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
    "question": "ML 엔지니어는 기존 ML 모델을 재훈련하기 위해 두 소스의 데이터를 병합하고 변환해야 합니다. 한 데이터 소스는 Amazon S3 버킷에 저장된 .csv 파일로 구성됩니다. 각 .csv 파일은 수백만 개의 레코드로 구성됩니다. 다른 데이터 소스는 Amazon Aurora DB 클러스터입니다. 병합 프로세스의 결과를 두 번째 S3 버킷에 쓰려면 합니다. ML 엔지니어는 이 병합 및 변환 작업을 매주 수행해야 합니다. 운영 부담이 가장 적은 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "매주 임시 Amazon EMR 클러스터를 만듭니다. 클러스터를 사용하여 Apache Spark 작업을 실행하여 데이터를 병합하고 변환합니다.",
      "B": "Apache Spark 엔진을 사용하는 주간 AWS Glue 작업을 만듭니다. DynamicFrame 기본 작업을 사용하여 데이터를 병합하고 변환합니다.",
      "C": "매주 데이터를 병합하고 변환하기 위해 Apache Spark 코드를 실행하는 AWS Lambda 함수를 만듭니다. 초기 S3 버킷 및 DB 클러스터에 연결하도록 Lambda 함수를 구성합니다.",
      "D": "매주 Amazon EC2 인스턴스에서 Apache Spark 코드를 실행하는 AWS Batch 작업을 만듭니다. EC2 인스턴스에서 두 번째 S3 버킷으로 데이터를 저장하도록 Spark 코드를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AWS Glue — ETL 관리형 서비스\n▸ DynamicFrame — Spark DataFrame + Glue 최적화\n▸ 최소 운영 부담 — 서버리스\n\n【정답 포인트】\n▸ AWS Glue는 ETL용 관리형 서비스\n▸ 자동 스케일링, 스케줄링 내장\n▸ DynamicFrame은 S3/DB 연동 최적화\n\n【오답 체크】\n(A) EMR은 클러스터 관리 필요\n(C) Lambda는 15분 제한, 대규모 Spark 부적절\n(D) Batch는 EC2 관리 필요\n\n【시험 포인트】\nETL 정기 작업 → AWS Glue",
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
    "question": "ML 엔지니어는 Amazon SageMaker 모델을 프로덕션의 서버리스 엔드포인트에 배포했습니다. 모델은 InvokeEndpoint API 작업으로 호출됩니다. 프로덕션에서 모델의 지연 시간은 테스트 환경의 기준 지연 시간보다 높습니다. ML 엔지니어는 지연 시간 증가가 모델 시작 시간 때문이라고 생각합니다. ML 엔지니어가 이 가설을 확인하거나 부정하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "SageMaker Model Monitor 작업을 예약합니다. 모델 품질에 대한 메트릭을 관찰합니다.",
      "B": "Amazon CloudWatch 메트릭이 활성화된 상태로 SageMaker Model Monitor 작업을 예약합니다.",
      "C": "Amazon CloudWatch 메트릭을 활성화합니다. SageMaker 네임스페이스의 ModelSetupTime 메트릭을 관찰합니다.",
      "D": "Amazon CloudWatch 메트릭을 활성화합니다. SageMaker 네임스페이스의 ModelLoadingWaitTime 메트릭을 관찰합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ ModelSetupTime — 서버리스 엔드포인트 모델 로드 시간\n▸ 콜드 스타트 — 첫 호출 시 모델 초기화\n▸ CloudWatch 메트릭 — SageMaker 네임스페이스\n\n【정답 포인트】\n▸ ModelSetupTime은 모델 시작 시간 측정\n▸ 서버리스 엔드포인트 콜드 스타트 감지\n▸ CloudWatch에서 SageMaker 메트릭 조회\n\n【오답 체크】\n(A) Model Monitor는 모델 품질, 지연 시간 아님\n(B) Model Monitor는 품질 모니터링\n(D) ModelLoadingWaitTime은 정확한 메트릭명 아님\n\n【시험 포인트】\n서버리스 엔드포인트 콜드 스타트 → ModelSetupTime",
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
    "question": "ML 엔지니어는 데이터 세트가 개인 식별 정보(PII)에 대한 규정을 준수하는지 확인해야 합니다. ML 엔지니어는 Amazon SageMaker 인스턴스에서 ML 모델을 훈련하기 위해 데이터를 사용할 것입니다. SageMaker는 PII를 사용하면 안 됩니다. 가장 운영 효율적인 방식으로 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Comprehend DetectPiiEntities API 호출을 사용하여 데이터에서 PII를 수정합니다. 데이터를 Amazon S3 버킷에 저장합니다. 모델 훈련을 위해 SageMaker 인스턴스에서 S3 버킷에 액세스합니다.",
      "B": "Amazon Comprehend DetectPiiEntities API 호출을 사용하여 데이터에서 PII를 수정합니다. 데이터를 Amazon Elastic File System(Amazon EFS) 파일 시스템에 저장합니다. 모델 훈련을 위해 EFS 파일 시스템을 SageMaker 인스턴스에 마운트합니다.",
      "C": "AWS Glue DataBrew를 사용하여 PII의 데이터 세트를 정제합니다. 데이터를 Amazon Elastic File System(Amazon EFS) 파일 시스템에 저장합니다. 모델 훈련을 위해 EFS 파일 시스템을 SageMaker 인스턴스에 마운트합니다.",
      "D": "Amazon Macie를 사용하여 데이터에서 PII의 자동 발견을 수행합니다. PII를 제거합니다. 데이터를 Amazon S3 버킷에 저장합니다. S3 버킷을 SageMaker 인스턴스에 마운트합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Comprehend DetectPiiEntities — PII 감지 및 수정\n▸ 운영 효율성 — S3가 EFS보다 관리 용이\n▸ PII 제거 — 규정 준수\n\n【정답 포인트】\n▸ Amazon Comprehend는 PII 감지 및 수정 자동화\n▸ S3는 서버리스, 관리 부담 없음\n▸ SageMaker는 S3와 기본 통합\n\n【오답 체크】\n(B) EFS는 마운트 관리 필요 (운영 오버헤드)\n(C) DataBrew는 수정만, 감지 자동화 아님\n(D) Macie는 감지만, 수정 기능 제한적\n\n【시험 포인트】\nPII 자동 감지 및 수정 → Comprehend DetectPiiEntities",
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
    "question": "한 회사는 새로 생성된 모든 Amazon SageMaker 노트북 인스턴스에 맞춤형 스크립트를 설치해야 합니다. 운영 부담이 가장 적은 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "새 SageMaker 노트북이 생성될 때 맞춤형 스크립트를 설치하는 수명 주기 구성 스크립트를 만듭니다. 생성 단계의 일부로 모든 새 SageMaker 노트북에 수명 주기 구성을 연결합니다.",
      "B": "맞춤형 스크립트를 포함하는 사용자 정의 Amazon Elastic Container Registry(Amazon ECR) 이미지를 만듭니다. ECR 이미지를 Docker 레지스트리로 푸시합니다. Docker 이미지를 SageMaker Studio 도메인에 연결합니다. SageMaker 노트북의 일부로 실행할 커널을 선택합니다.",
      "C": "사용자 정의 패키지 인덱스 리포지토리를 만듭니다. AWS CodeArtifact를 사용하여 맞춤형 스크립트의 설치를 관리합니다. CodeArtifact를 SageMaker 인스턴스에 연결하도록 AWS PrivateLink 엔드포인트를 설정합니다. 스크립트를 설치합니다.",
      "D": "맞춤형 스크립트를 Amazon S3에 저장합니다. 새 SageMaker 노트북에 맞춤형 스크립트를 설치하는 AWS Lambda 함수를 만듭니다. 새 SageMaker 노트북이 초기화될 때 Lambda 함수를 호출하도록 Amazon EventBridge를 구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Lifecycle Configuration — 노트북 생성/시작 시 자동 실행\n▸ Start Notebook — 노트북 시작 시 실행\n▸ 최소 운영 부담 — 내장 기능 사용\n\n【정답 포인트】\n▸ 수명 주기 구성은 SageMaker 내장 기능\n▸ 모든 새 노트북에 자동 적용\n▸ 별도 자동화 도구 불필요\n\n【오답 체크】\n(B) ECR 이미지는 추가 관리 필요\n(C) CodeArtifact는 패키지 저장소, 스크립트 설치 아님\n(D) EventBridge + Lambda는 추가 복잡성\n\n【시험 포인트】\n노트북 자동 설정 → Lifecycle Configuration",
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
    "question": "한 회사가 전자상거래 애플리케이션을 위한 실시간 데이터 처리 파이프라인을 구축하고 있습니다. 애플리케이션은 거의 실시간으로 수집, 처리 및 시각화되어야 하는 대량의 클릭스트림 데이터를 생성합니다. 회사는 데이터 처리를 위해 SQL을 지원하고 대화형 분석을 위해 Jupyter 노트북을 지원하는 솔루션이 필요합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Data Firehose를 사용하여 데이터를 수집합니다. AWS Lambda 함수를 만들어 데이터를 처리합니다. 처리된 데이터를 Amazon S3에 저장합니다. Amazon QuickSight를 사용하여 데이터를 시각화합니다.",
      "B": "Amazon Kinesis Data Streams를 사용하여 데이터를 수집합니다. Amazon Data Firehose를 사용하여 데이터를 변환합니다. Amazon Athena를 사용하여 데이터를 처리합니다. Amazon QuickSight를 사용하여 데이터를 시각화합니다.",
      "C": "Amazon Managed Streaming for Apache Kafka(Amazon MSK)를 사용하여 데이터를 수집합니다. AWS Glue와 PySpark를 사용하여 데이터를 처리합니다. 처리된 데이터를 Amazon S3에 저장합니다. Amazon QuickSight를 사용하여 데이터를 시각화합니다.",
      "D": "Amazon Managed Streaming for Apache Kafka(Amazon MSK)를 사용하여 데이터를 수집합니다. Amazon Managed Service for Apache Flink을 사용하여 데이터를 처리합니다. Flink 내장 대시보드를 사용하여 데이터를 시각화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 실시간 처리 — Apache Flink 실시간 처리 엔진\n▸ Jupyter 노트북 — Flink SQL 노트북 지원\n▸ SQL 지원 — Flink SQL\n\n【정답 포인트】\n▸ Apache Flink는 실시간 스트림 처리 최적화\n▸ Flink SQL로 SQL 쿼리 가능\n▸ 내장 대시보드 및 Jupyter 통합\n▸ MSK와 자연스러운 조합\n\n【오답 체크】\n(A) Lambda는 배치 처리, 실시간 아님\n(B) Athena는 배치 SQL, 실시간 아님\n(C) Glue는 배치 처리\n\n【시험 포인트】\n실시간 SQL + Jupyter → Apache Flink",
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
    "question": "한 의료 회사가 임상 데이터를 저장해야 합니다. 데이터는 개인 식별 정보(PII)와 보호된 건강 정보(PHI)를 포함합니다. ML 엔지니어는 PII와 PHI를 ML 모델 훈련에 사용하지 않도록 보장하는 솔루션을 구현해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon S3 버킷에 임상 데이터를 저장합니다. AWS Glue DataBrew를 사용하여 모델 훈련에 사용하기 전에 PII 및 PHI를 마스킹합니다.",
      "B": "임상 데이터를 Amazon Redshift 데이터베이스에 업로드합니다. 내장 SQL 저장 프로시저를 사용하여 모델 훈련에 사용하기 전에 PII 및 PHI를 자동으로 분류하고 마스킹합니다.",
      "C": "Amazon Comprehend를 사용하여 모델 훈련에 사용하기 전에 PII를 감지하고 마스킹합니다. Amazon Comprehend Medical을 사용하여 모델 훈련에 사용하기 전에 PHI를 감지하고 마스킹합니다.",
      "D": "PII 및 PHI를 암호화하는 AWS Lambda 함수를 만듭니다. 암호화된 데이터를 Amazon S3 버킷에 저장하도록 Lambda 함수를 프로그래밍합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ PII — 개인 식별 정보 (Amazon Comprehend)\n▸ PHI — 보호된 건강 정보 (Amazon Comprehend Medical)\n▸ 감지 및 마스킹 — 자동화 기능\n\n【정답 포인트】\n▸ Amazon Comprehend는 PII 감지 및 마스킹\n▸ Amazon Comprehend Medical은 의료 용어 포함 PHI 감지\n▸ 두 서비스 조합으로 모든 민감 정보 처리\n\n【오답 체크】\n(A) DataBrew는 일반 데이터 정제, PII/PHI 전문 아님\n(B) Redshift는 저장소, 마스킹 자동화 제한적\n(D) 암호화는 마스킹이 아님, 모델 훈련 불가\n\n【시험 포인트】\nPII + PHI 감지 및 마스킹 → Comprehend + Comprehend Medical",
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
    "question": "ML 엔지니어는 분류 모델을 개발하고 있습니다. ML 엔지니어는 Amazon SageMaker의 처리 작업, 훈련 작업 및 파이프라인에서 맞춤형 라이브러리를 사용해야 합니다. 가장 적은 구현 노력으로 이 기능을 제공할 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker 컨테이너에 수동으로 라이브러리를 설치합니다.",
      "B": "필요한 라이브러리를 포함하는 사용자 정의 Docker 컨테이너를 작성합니다. Amazon Elastic Container Registry(Amazon ECR)에서 컨테이너를 호스팅합니다. SageMaker 작업 및 파이프라인에서 ECR 이미지를 사용합니다.",
      "C": "작업을 호스팅할 SageMaker 노트북 인스턴스를 만듭니다. 노트북 인스턴스가 시작될 때 노트북 인스턴스에 라이브러리를 설치하는 AWS Lambda 함수를 만듭니다. SageMaker 작업 및 파이프라인을 노트북 인스턴스에서 실행하도록 구성합니다.",
      "D": "Amazon EC2 인스턴스에서 라이브러리용 코드를 외부에서 실행합니다. Amazon S3에 결과를 저장합니다. SageMaker 작업 및 파이프라인으로 결과를 가져옵니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Custom Docker Container — 모든 처리/훈련/파이프라인 작업에 사용\n▸ ECR — 컨테이너 이미지 호스팅\n▸ 최소 구현 노력 — 한 번 작성, 모든 곳에서 사용\n\n【정답 포인트】\n▸ Docker 컨테이너는 모든 SageMaker 작업 지원\n▸ ECR에서 호스팅하여 재사용\n▸ 버전 관리 및 일관성 보장\n\n【오답 체크】\n(A) 수동 설치는 매번 필요\n(C) 노트북 인스턴스는 작업 호스팅용 아님\n(D) 외부 실행은 통합 불편\n\n【시험 포인트】\n재사용 가능한 맞춤형 라이브러리 → Custom Docker + ECR",
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
    "question": "ML 엔지니어는 훈련된 모델을 Amazon SageMaker 엔드포인트에 배포합니다. ML 엔지니어는 프로덕션에서 데이터 품질 문제가 발생할 때 경고를 받아야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon CloudWatch 메트릭 경보를 구성하고 Amazon Simple Notification Service(Amazon SNS) 알림을 보내는 해당 조치를 구성합니다.",
      "B": "SageMaker 엔드포인트를 SageMaker Clarify 처리 작업과 통합합니다. Amazon CloudWatch 경보를 구성하여 경고를 제공합니다.",
      "C": "SageMaker Model Monitor에서 모니터링 작업을 구성합니다. Model Monitor를 Amazon CloudWatch와 통합하여 경고를 제공합니다.",
      "D": "SageMaker Data Wrangler에서 데이터 흐름을 구성합니다. Data Wrangler를 Amazon CloudWatch와 통합하여 경고를 제공합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Model Monitor — 프로덕션 데이터/모델 품질 모니터링\n▸ CloudWatch 통합 — 경고 알림\n▸ 데이터 품질 문제 감지\n\n【정답 포인트】\n▸ SageMaker Model Monitor는 프로덕션 데이터 품질 감지\n▸ CloudWatch와 통합하여 경보 설정\n▸ 자동화된 모니터링 및 경고\n\n【오답 체크】\n(A) CloudWatch만으로는 품질 문제 감지 불가\n(B) Clarify는 모델 편향, 품질 모니터링 아님\n(D) Data Wrangler는 데이터 정제, 모니터링 아님\n\n【시험 포인트】\n프로덕션 데이터 품질 모니터링 → Model Monitor",
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
    "question": "한 회사가 300GB 이상의 데이터에 대해 Amazon SageMaker로 모델을 훈련해야 합니다. 훈련 데이터는 200MB 크기의 파일로 구성됩니다. 데이터는 Amazon S3 Standard 스토리지에 저장되고 대시보드 도구를 공급합니다. 이 시나리오에서 가장 비용 효과적인 SageMaker 훈련 수집 메커니즘은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic File System(Amazon EFS) 파일 시스템",
      "B": "Amazon FSx for Lustre 파일 시스템",
      "C": "S3 Express One Zone을 사용하는 동안 Amazon S3를 빠른 파일 모드로 사용합니다.",
      "D": "S3 Express One Zone을 사용하지 않고 Amazon S3를 빠른 파일 모드로 사용합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ S3 Fast File Mode — S3에서 직접 스트리밍\n▸ S3 Express One Zone — 추가 비용 발생\n▸ 비용 최적화 — Standard S3 + Fast File\n\n【정답 포인트】\n▸ 300GB는 FSx Lustre 비용 효율적 범위 아님\n▸ S3 Fast File Mode는 성능과 비용 최적\n▸ S3 Express는 고가, 필요 없음\n▸ 대시보드는 S3와 충돌 없음\n\n【오답 체크】\n(A) EFS는 비용 높음, 대규모 파일 비효율\n(B) FSx는 고가\n(C) S3 Express One Zone은 고가\n\n【시험 포인트】\n300GB 훈련 데이터 비용 최적 → S3 Fast File Mode",
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
    "question": "한 회사가 실시간 추론을 위해 Amazon SageMaker 엔드포인트에 ML 모델을 배포했습니다. 회사는 새 모델을 배포해야 합니다. 회사는 모든 트래픽을 새 모델로 이동하기 전에 새 모델의 성능을 현재 배포된 모델의 성능과 비교해야 합니다. 가장 적은 운영 노력으로 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "새 모델을 별도의 엔드포인트에 배포합니다. 두 엔드포인트 간에 트래픽을 수동으로 분할합니다.",
      "B": "새 모델을 별도의 엔드포인트에 배포합니다. Amazon CloudFront를 사용하여 두 엔드포인트 간에 트래픽을 배포합니다.",
      "C": "새 모델을 현재 모델과 같은 엔드포인트의 섀도우 변형으로 배포합니다. 평가를 위해 라이브 트래픽의 일부를 섀도우 모델로 라우팅합니다.",
      "D": "현재 모델과 새 모델 간에 트래픽을 라우팅하는 맞춤형 로직으로 AWS Lambda 함수를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Shadow Variant — 라이브 트래픽의 일부 복제\n▸ 성능 비교 — 프로덕션 트래픽으로 평가\n▸ 최소 운영 노력 — 내장 기능\n\n【정답 포인트】\n▸ SageMaker Shadow Variant는 A/B 테스트용 내장 기능\n▸ 같은 엔드포인트에서 두 변형 운영\n▸ 라이브 트래픽으로 성능 비교\n\n【오답 체크】\n(A) 수동 분할은 운영 오버헤드\n(B) CloudFront는 CDN, 트래픽 분할만 가능\n(D) Lambda는 추가 개발 필요\n\n【시험 포인트】\n배포 전 성능 비교 → Shadow Variant",
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
    "question": "한 회사가 Amazon SageMaker에서 ML 모델을 실행합니다. 회사는 훈련 작업을 생성하기 위해 API 호출을 수행하는 자동 프로세스를 사용합니다. 회사에는 훈련 작업에서 집계된 메타데이터 수집을 금지하는 새로운 컴플라이언스 규칙이 있습니다. SageMaker가 훈련 작업에서 메타데이터를 수집하는 것을 방지할 솔루션은 무엇입니까?",
    "options": {
      "A": "제출된 모든 훈련 작업에 대해 메타데이터 추적을 거부합니다.",
      "B": "훈련 작업이 사용자 정의 VPC의 프라이빗 서브넷에서 실행되고 있는지 확인합니다.",
      "C": "AWS Key Management Service(AWS KMS) 고객 관리형 키로 훈련 데이터를 암호화합니다.",
      "D": "훈련 작업을 AWS Nitro 인스턴스만 사용하도록 재구성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 메타데이터 추적 — SageMaker 기본 동작\n▸ Opt Out — API 파라미터로 비활성화\n▸ 컴플라이언스 — 메타데이터 수집 금지\n\n【정답 포인트】\n▸ SageMaker API 호출 시 DisableProfiler=True 설정\n▸ CreateTrainingJob API의 메타데이터 추적 거부 옵션\n▸ 유일한 직접적인 해결책\n\n【오답 체크】\n(B) VPC는 메타데이터 수집 제어 불가\n(C) 암호화는 메타데이터 수집과 무관\n(D) Nitro 인스턴스는 메타데이터 수집 제어 안 함\n\n【시험 포인트】\n메타데이터 추적 거부 → Opt Out 파라미터",
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
    "question": "한 회사가 생성형 AI를 탐색하고 새로운 제품 기능을 추가하려고 합니다. ML 엔지니어는 기존 Amazon EC2 인스턴스에서 Amazon Bedrock으로 API 호출을 하고 있습니다. EC2 인스턴스는 프라이빗 서브넷에 있으며 구현 중에 프라이빗 상태를 유지해야 합니다. EC2 인스턴스에는 프라이빗 서브넷의 모든 IP 주소로 액세스를 허용하는 보안 그룹이 할당되어 있습니다. ML 엔지니어가 EC2 인스턴스와 Amazon Bedrock 간에 연결을 설정하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "보안 그룹을 수정하여 Amazon Bedrock에서 수신 및 발신 트래픽을 허용합니다.",
      "B": "AWS PrivateLink를 사용하여 인터페이스 VPC 엔드포인트를 통해 Amazon Bedrock에 액세스합니다.",
      "C": "EC2 인스턴스가 배포된 프라이빗 서브넷을 사용하도록 Amazon Bedrock을 구성합니다.",
      "D": "AWS Direct Connect 연결을 사용하여 기존 VPC를 Amazon Bedrock에 연결합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ PrivateLink — AWS 서비스 프라이빗 액세스\n▸ 인터페이스 VPC 엔드포인트 — Bedrock 프라이빗 접근\n▸ 프라이빗 상태 유지 — 인터넷 게이트웨이 불필요\n\n【정답 포인트】\n▸ AWS PrivateLink는 AWS 서비스 프라이빗 연결\n▸ VPC 엔드포인트로 Bedrock 직접 접근\n▸ 보안 그룹 수정 불필요\n\n【오답 체크】\n(A) 보안 그룹은 인터넷 주소 대상 불가\n(C) Bedrock은 사용자 VPC 구성 불가\n(D) Direct Connect는 과복잡\n\n【시험 포인트】\n프라이빗 EC2 → Bedrock → VPC Endpoint (PrivateLink)",
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
    "question": "한 회사가 새로운 내부 생성형 AI 인터페이스를 시작하여 사용자 질문에 답변하기를 원합니다. 인터페이스는 인기 있는 오픈 소스 대규모 언어 모델(LLM)을 기반으로 합니다. 최소 운영 부담으로 인터페이스를 배포할 단계 조합은 무엇입니까? (둘을 선택합니다.)",
    "options": {
      "A": "Amazon SageMaker JumpStart를 사용하여 LLM을 배포합니다.",
      "B": "LLM을 .zip 파일로 다운로드합니다. GPU 기반 Amazon EC2 인스턴스에 LLM을 배포합니다.",
      "C": "Amazon API Gateway WebSocket API를 사용하는 프론트엔드 HTML 인터페이스를 만듭니다. 사용자 상호작용을 처리하기 위해 AWS Lambda 함수를 사용합니다.",
      "D": "Amazon QuickSight를 사용하여 사용자 상호작용을 처리할 UI를 만듭니다.",
      "E": "Amazon Lex를 사용하여 사용자 상호작용을 처리할 UI를 만듭니다."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ SageMaker JumpStart — 사전 훈련된 LLM 배포\n▸ API Gateway + Lambda — 서버리스 인터페이스\n▸ 최소 운영 부담 — 관리형 서비스\n\n【정답 포인트】\n▸ (A) SageMaker JumpStart는 LLM 배포 최적화\n▸ (C) API Gateway + Lambda는 서버리스 프론트엔드\n▸ 두 가지 조합으로 완전한 솔루션\n\n【오답 체크】\n(B) EC2는 관리 필요 (운영 오버헤드)\n(D) QuickSight는 BI, 챗봇 인터페이스 아님\n(E) Lex는 챗봇 서비스이지만 JumpStart LLM 정의 필요\n\n【시험 포인트】\nLLM 배포 + 서버리스 인터페이스 → JumpStart + API Gateway + Lambda",
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
    "question": "한 회사가 소셜 미디어의 스트리밍 데이터를 사용하는 실시간 분석 애플리케이션을 구축하려고 합니다. ML 엔지니어는 분당 5GB의 데이터를 수집하고 변환하는 솔루션을 구현해야 합니다. 또한 솔루션은 데이터를 실시간 분석을 위한 빠른 쿼리를 지원하는 데이터 스토어에 로드해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon EventBridge를 사용하여 소셜 미디어 데이터를 수집합니다. AWS Glue를 사용하여 데이터를 변환합니다. 변환된 데이터를 Amazon ElastiCache(Memcached)에 저장합니다.",
      "B": "Amazon Simple Queue Service(Amazon SQS)를 사용하여 소셜 미디어 데이터를 수집합니다. AWS Lambda를 사용하여 데이터를 변환합니다. 변환된 데이터를 Amazon S3에 저장합니다.",
      "C": "Amazon Simple Notification Service(Amazon SNS)를 사용하여 소셜 미디어 데이터를 수집합니다. Amazon EMR을 사용하여 데이터를 변환합니다. 변환된 데이터를 Amazon RDS에 저장합니다.",
      "D": "Amazon Kinesis Data Streams를 사용하여 소셜 미디어 데이터를 수집합니다. Amazon Managed Service for Apache Flink을 사용하여 데이터를 변환합니다. 변환된 데이터를 Amazon DynamoDB에 저장합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Kinesis Data Streams — 대규모 실시간 스트림 수집\n▸ Apache Flink — 실시간 변환 처리\n▸ DynamoDB — 빠른 쿼리 지원\n▸ 5GB/분 — 고처리량\n\n【정답 포인트】\n▸ Kinesis는 초당 5GB+ 스트림 처리\n▸ Flink는 실시간 변환 최적화\n▸ DynamoDB는 밀리초 쿼리\n▸ 완벽한 실시간 아키텍처\n\n【오답 체크】\n(A) EventBridge는 이벤트 기반, 5GB/분 처리 불가\n(B) SQS + Lambda는 배치 처리 특성\n(C) SNS는 브로드캐스트 기반\n\n【시험 포인트】\n대규모 실시간 스트림 + 빠른 쿼리 → Kinesis + Flink + DynamoDB",
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
    "question": "한 회사가 훈련 데이터를 Amazon S3 버킷의 .csv 파일로 저장합니다. 회사는 데이터를 암호화해야 하며 암호화 키에 액세스할 수 있는 애플리케이션을 제어해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "새 SSH 액세스 키를 만듭니다. 새 액세스 키를 참조하여 AWS Encryption CLI를 사용하여 파일을 암호화합니다.",
      "B": "Amazon API Gateway CreateApiKey API 작업을 사용하여 새 API 키를 만듭니다. 새 API 키를 참조하여 AWS CLI를 사용하여 파일을 암호화합니다.",
      "C": "새 IAM 역할을 만듭니다. AWS Key Management Service(AWS KMS) GenerateDataKey 작업을 허용하는 정책을 연결합니다. 역할을 사용하여 파일을 암호화합니다.",
      "D": "새 AWS Key Management Service(AWS KMS) 키를 만듭니다. 새 KMS 키를 참조하여 AWS Encryption CLI를 사용하여 파일을 암호화합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS KMS — 고객 관리형 암호화 키 관리\n▸ AWS Encryption CLI — KMS와 통합 암호화 도구\n▸ 접근 제어 — KMS IAM 정책\n\n【정답 포인트】\n▸ AWS KMS는 암호화 키 중앙 관리\n▸ AWS Encryption CLI는 KMS 통합\n▸ KMS IAM 정책로 접근 제어\n\n【오답 체크】\n(A) SSH 키는 KMS 대체 불가\n(B) API 키는 암호화 도구 아님\n(C) GenerateDataKey는 데이터 키 생성만, 암호화 키 관리 아님\n\n【시험 포인트】\n고객 관리형 암호화 + 접근 제어 → AWS KMS",
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
    "question": "한 회사가 특성 엔지니어링, 집계 및 데이터 준비를 수행해야 합니다. 특성이 생성된 후 회사는 AWS에서 특성을 처리하고 저장하는 솔루션을 구현해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon SageMaker Feature Processing을 사용하여 데이터를 처리하고 수집합니다. SageMaker Feature Store를 사용하여 특성을 관리하고 저장합니다.",
      "B": "Amazon SageMaker Model Monitor를 사용하여 자동으로 데이터를 수집하고 변환합니다. JSON 형식으로 특성을 저장하기 위해 Amazon S3 버킷을 만듭니다.",
      "C": "데이터를 변환하고 데이터를 Amazon SageMaker Feature Store에 직접 수집하기 위해 Amazon Managed Service for Apache Flink를 사용합니다. Feature Store를 사용하여 특성을 관리하고 저장합니다.",
      "D": "데이터를 분석, 변환 및 수집하기 위해 Amazon SageMaker 배치 변환 작업을 사용합니다. 특성을 저장하기 위해 Amazon DynamoDB 테이블을 만듭니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker Feature Processing — 특성 처리 및 엔지니어링\n▸ SageMaker Feature Store — 특성 저장 및 관리\n▸ 통합 솔루션 — 처리 + 저장\n\n【정답 포인트】\n▸ SageMaker Feature Processing은 특성 엔지니어링 전담\n▸ Feature Store는 온/오프라인 특성 저장\n▸ 네이티브 SageMaker 통합\n\n【오답 체크】\n(B) Model Monitor는 모니터링, 처리 아님\n(C) Flink는 변환만, Feature Store 관리 아님\n(D) Batch Transform은 배치 처리\n\n【시험 포인트】\n특성 엔지니어링 + 저장 → Feature Processing + Feature Store",
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
    "question": "한 회사가 고객의 정보를 수집하는 새로운 온라인 애플리케이션을 개발하고 있습니다. ML 엔지니어가 각 고객의 점수를 결정할 새로운 ML 모델을 개발했습니다. 모델은 점수를 사용하여 고객에게 표시할 제품을 결정합니다. ML 엔지니어는 모델의 응답 시간 지연을 최소화해야 합니다. ML 엔지니어가 이 요구사항을 충족하도록 Amazon SageMaker에서 애플리케이션을 배포하려면 어떻게 해야 합니까?",
    "options": {
      "A": "배치 변환을 구성합니다.",
      "B": "실시간 추론 엔드포인트를 구성합니다.",
      "C": "서버리스 추론 엔드포인트를 구성합니다.",
      "D": "비동기 추론 엔드포인트를 구성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 응답 시간 지연 최소화 — 실시간 처리\n▸ 온라인 애플리케이션 — 즉시 응답 필요\n▸ 실시간 추론 — 밀리초 수준 지연\n\n【정답 포인트】\n▸ 실시간 추론 엔드포인트는 낮은 지연 시간\n▸ SLA 보장 (일반적으로 100ms 이하)\n▸ 항상 대기 인스턴스 유지\n\n【오답 체크】\n(A) 배치는 배치 처리, 즉시 응답 아님\n(C) 서버리스는 콜드 스타트 지연\n(D) 비동기는 최대 1시간 지연\n\n【시험 포인트】\n온라인 즉시 응답 → 실시간 추론 엔드포인트",
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
    "question": "한 회사가 Amazon EMR을 사용합니다. 회사는 Amazon S3의 대규모 데이터 세트를 Amazon SageMaker Feature Store에 수집해야 합니다. 데이터 세트는 과거 데이터와 실시간 스트리밍 데이터를 포함합니다. 회사는 데이터를 사용할 수 있게 되는 즉시 Feature Store 온라인 저장소가 최신 데이터로 업데이트되는지 확인해야 합니다. 또한 회사는 배치 처리를 위해 완전한 Feature Store 오프라인 저장소를 유지해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Feature Store Runtime의 PutRecord API를 사용하여 모든 데이터를 온라인 저장소에 수집합니다.",
      "B": "Feature Store Runtime의 PutRecord API를 사용하여 모든 데이터를 오프라인 저장소에 수집합니다.",
      "C": "Feature Store Spark 커넥터를 사용하여 온라인 저장소 및 오프라인 저장소가 활성화된 상태로 Spark DataFrame으로 데이터를 수집합니다.",
      "D": "Feature Store Spark 커넥터를 사용하여 온라인 저장소만 활성화된 상태로 Spark DataFrame으로 데이터를 수집합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Feature Store Spark Connector — S3 데이터 대량 수집\n▸ 온라인 + 오프라인 저장소 — 동시 활성화\n▸ 실시간 + 배치 — 이중 저장\n\n【정답 포인트】\n▸ Spark Connector는 대규모 데이터 효율적 수집\n▸ 온/오프라인 저장소 동시 활성화\n▸ EMR Spark와 자연스러운 통합\n\n【오답 체크】\n(A) PutRecord는 소규모 실시간 수집용\n(B) 오프라인만으로는 실시간 업데이트 불가\n(D) 온라인만으로는 배치 저장소 부족\n\n【시험 포인트】\n실시간 + 배치 동시 저장 → Spark Connector (온/오프 활성)",
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
    "question": "ML 엔지니어는 Amazon SageMaker 추론 파이프라인에서 4개의 ML 모델을 배포해야 합니다. 모델은 다양한 프레임워크로 구축되었습니다. ML 엔지니어는 또한 클라이언트가 invoke_endpoint 호출을 사용하여 각 모델에 대한 추론을 수행할 수 있도록 해야 합니다. 비용 효율적인 방식으로 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker 다중 모델 엔드포인트를 만듭니다.",
      "B": "SageMaker 다중 컨테이너 엔드포인트를 만듭니다.",
      "C": "여러 SageMaker 단일 모델 엔드포인트를 만듭니다.",
      "D": "SparkML 작업을 실행하여 여러 엔드포인트를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Multi-Container Endpoint — 다양한 프레임워크 모델\n▸ invoke_endpoint — 단일 호출로 여러 모델\n▸ 비용 효율성 — 단일 엔드포인트\n\n【정답 포인트】\n▸ Multi-Container Endpoint는 다양한 프레임워크 지원\n▸ 단일 엔드포인트에서 여러 모델 운영\n▸ 비용 효율적 (vs 여러 엔드포인트)\n\n【오답 체크】\n(A) Multi-Model은 같은 프레임워크 모델\n(C) 여러 엔드포인트는 고비용\n(D) SparkML은 모델 배포 도구 아님\n\n【시험 포인트】\n다양한 프레임워크 + 단일 호출 → Multi-Container Endpoint",
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
    "question": "ML 엔지니어는 Amazon SageMaker 노트북이 유휴 시간 1시간 후에 자동으로 중지되도록 하려고 합니다. ML 엔지니어가 이 목표를 달성하는 방법은 무엇입니까?",
    "options": {
      "A": "SageMaker에서 수명 주기 구성을 만듭니다. GitHub의 auto-stop-idle 스크립트를 노트북 시작 섹션으로 복사합니다.",
      "B": "SageMaker에서 수명 주기 구성을 만듭니다. GitHub의 auto-stop-idle 스크립트를 노트북 생성 섹션으로 복사합니다.",
      "C": "Amazon CloudWatch Logs를 사용하여 노트북의 CPU 메트릭을 추적합니다. CloudWatch Logs에서 AWS Lambda 함수를 호출합니다. CPU 사용률이 0이 되면 노트북 인스턴스를 종료합니다.",
      "D": "Amazon CloudWatch Logs를 사용하여 노트북의 메모리 메트릭을 추적합니다. CloudWatch Logs에서 AWS Lambda 함수를 호출합니다. 메모리 사용률이 0이 되면 노트북 인스턴스를 종료합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Lifecycle Configuration — 노트북 시작/생성 시 실행\n▸ Start Notebook — 노트북 시작할 때마다 실행\n▸ auto-stop-idle — GitHub 사전 정의 스크립트\n\n【정답 포인트】\n▸ 수명 주기 구성의 Start Notebook 섹션 사용\n▸ 노트북 시작할 때마다 유휴 모니터링 시작\n▸ GitHub의 사전 정의 스크립트 활용\n\n【오답 체크】\n(B) Create Notebook은 생성 시만 실행\n(C) CloudWatch는 노트북 자동 중지 메커니즘 아님\n(D) CloudWatch + Lambda는 과복잡\n\n【시험 포인트】\n노트북 자동 중지 → Lifecycle Configuration Start 섹션",
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
    "question": "한 회사가 다른 비즈니스가 이미지에 레이블을 지정하도록 돕는 서비스를 제공하려고 합니다. 회사는 라벨링 전문가가 AWS에서 인간 라벨링 작업을 완료하도록 등록하려고 합니다. 회사가 라벨링 전문가를 등록하여 AWS에서 작업을 받도록 해야 하는 방법은 무엇입니까?",
    "options": {
      "A": "AWS Data Exchange를 사용합니다.",
      "B": "Amazon SageMaker Ground Truth에서 내부 워크포스를 만들고 사용합니다.",
      "C": "Amazon SageMaker 휴먼 루프에서 Amazon Mechanical Turk 엔티티를 만들고 사용합니다.",
      "D": "Amazon Mechanical Turk 웹사이트를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Internal Workforce — 회사 직원 또는 계약자\n▸ Ground Truth — SageMaker 라벨링 플랫폼\n▸ 라벨링 전문가 — 라벨링 서비스 제공자\n\n【정답 포인트】\n▸ Ground Truth의 Internal Workforce로 전문가 등록\n▸ 회사 내부 통제 유지\n▸ 라벨링 작업 할당 및 관리\n\n【오답 체크】\n(A) Data Exchange는 데이터 마켓플레이스\n(C) Mechanical Turk는 외부 크라우드소싱\n(D) Mechanical Turk는 회사 통제 불가\n\n【시험 포인트】\n내부 라벨링 전문가 등록 → Ground Truth Internal Workforce",
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
    "question": "한 회사가 Amazon SageMaker를 사용하여 실시간 예측을 위해 CPU에서 실행되는 ML 모델을 호스팅하려고 합니다. 모델은 업무 시간 동안 간헐적 트래픽이 있고 업무 시간 이후 트래픽이 없는 기간이 있습니다. 회사는 추론 요청을 가장 비용 효율적인 방식으로 제공할 솔루션이 필요합니다. 이 요구사항을 충족할 호스팅 옵션은 무엇입니까?",
    "options": {
      "A": "SageMaker 실시간 엔드포인트에 모델을 배포합니다. 업무 시간 동안 트래픽 급증을 처리하기 위해 일정 기반 자동 스케일링 정책을 추가합니다.",
      "B": "SageMaker 서버리스 추론 엔드포인트에 모델을 배포합니다. 업무 시간 동안 프로비저닝된 동시성을 증가시키도록 구성합니다.",
      "C": "SageMaker 비동기 추론 엔드포인트에 모델을 배포합니다. 업무 시간 외에 0으로 확장되는 자동 스케일링 정책을 구성합니다.",
      "D": "SageMaker 실시간 엔드포인트에 모델을 배포합니다. 업무 시간 동안만 엔드포인트를 활성화하는 예약된 AWS Lambda 함수를 만듭니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Serverless Inference — 자동 스케일링 (0 포함)\n▸ Provisioned Concurrency — 업무 시간 내 성능\n▸ 비용 효율성 — 사용하지 않을 때 0 비용\n▸ CPU 모델 — 가벼운 워크로드\n\n【정답 포인트】\n▸ 서버리스는 자동 스케일링으로 비용 절감\n▸ 프로비저닝된 동시성으로 성능 보장\n▸ CPU 모델은 콜드 스타트 영향 최소\n\n【오답 체크】\n(A) 실시간은 항상 인스턴스 실행\n(C) 비동기는 실시간 예측 부적합\n(D) Lambda 스케줄은 수동 관리\n\n【시험 포인트】\n간헐적 CPU 트래픽 + 비용 효율 → Serverless + Provisioned Concurrency",
    "en_q": "A company wants to host an ML model that runs on CPU for real-time predictions using Amazon SageMaker. The model will have intermittent traffic during business hours and will have periods of no traffic after business hours. The company needs a solution that will serve inference requests in the most cost-effective manner. Which hosting option will meet these requirements?",
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
    "question": "ML 엔지니어는 감독된 심층 학습 모델을 훈련해야 합니다. 사용 가능한 데이터 세트는 직원만 액세스할 수 있는 많은 수의 레이블이 지정되지 않은 이미지입니다. ML 엔지니어는 가장 높은 정확도로 데이터 세트에 레이블을 지정하는 솔루션을 구현해야 합니다. ML 엔지니어가 이 요구사항을 충족하기 위해 취해야 할 단계 조합은 무엇입니까? (둘을 선택합니다.)",
    "options": {
      "A": "Amazon Rekognition을 사용하여 데이터 세트에 자동으로 레이블을 지정합니다.",
      "B": "딥 러닝 모델을 원본 데이터에 직접 훈련합니다. 모델이 자신의 레이블을 추론하도록 합니다.",
      "C": "Amazon SageMaker Ground Truth를 사용하여 라벨링 작업 및 요구사항을 지정하는 주석 작업을 만듭니다.",
      "D": "워크포스 팀을 설정하여 프라이빗 워크포스에 액세스하여 Amazon SageMaker Ground Truth에서 만든 주석 작업을 실행하고 검토합니다.",
      "E": "Amazon Mechanical Turk를 사용하여 Amazon SageMaker Ground Truth에서 만든 주석 작업을 완료합니다."
    },
    "answer": "CD",
    "explanation": "【핵심 용어】\n▸ Ground Truth — SageMaker 라벨링 플랫폼\n▸ Internal Workforce — 직원 전용 (보안)\n▸ 최고 정확도 — 전문가 라벨링\n\n【정답 포인트】\n▸ (C) Ground Truth로 주석 작업 생성\n▸ (D) Private Workforce로 직원만 라벨링\n▸ 높은 정확도 및 보안 보장\n\n【오답 체크】\n(A) Rekognition은 자동 인식, 높은 정확도 아님\n(B) 무감독 학습 (감독 학습 아님)\n(E) Mechanical Turk는 외부 (직원만 요구)\n\n【시험 포인트】\n고정확도 직원 라벨링 → Ground Truth + Private Workforce",
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
    "question": "한 회사가 Amazon S3 버킷을 사용하여 ML 워크플로우에 사용할 데이터를 수집합니다. 회사는 AWS Glue DataBrew를 사용하여 데이터를 정제하고 정규화해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 경로를 사용하여 DataBrew 데이터 세트를 만듭니다. DataBrew 프로필 작업을 사용하여 데이터를 정제하고 정규화합니다.",
      "B": "S3 경로를 사용하여 DataBrew 데이터 세트를 만듭니다. DataBrew 레시피 작업을 사용하여 데이터를 정제하고 정규화합니다.",
      "C": "Java Database Connectivity(JDBC) 드라이버를 사용하여 DataBrew 데이터 세트를 만들어 S3 버킷에 연결합니다. DataBrew 프로필 작업을 사용하여 데이터를 정제하고 정규화합니다.",
      "D": "Java Database Connectivity(JDBC) 드라이버를 사용하여 DataBrew 데이터 세트를 만들어 S3 버킷에 연결합니다. DataBrew 레시피 작업을 사용하여 데이터를 정제하고 정규화합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DataBrew Profile Job — 데이터 분석 및 통계\n▸ DataBrew Recipe Job — 변환 및 정제\n▸ S3 직접 연결 — JDBC 불필요\n\n【정답 포인트】\n▸ S3 경로는 직접 연결 지원\n▸ Recipe Job은 정제 및 변환\n▸ Profile은 분석만, 정제 아님\n\n【오답 체크】\n(A) Profile Job은 통계만, 정제 아님\n(C) S3는 JDBC 드라이버 불필요\n(D) JDBC는 데이터베이스용\n\n【시험 포인트】\nS3 데이터 정제 → DataBrew S3 직접 + Recipe Job",
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
    "question": "한 회사가 XGBoost 알고리즘을 사용하는 새로운 ML 모델을 개발합니다. 회사는 Amazon S3 버킷에 저장된 데이터에서 모델을 훈련합니다. 데이터는 중첩된 JSON 형식입니다. ML 엔지니어는 JSON 파일을 표 형식으로 변환해야 합니다. 운영 부담이 가장 적은 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Relationalize 변환을 사용하는 AWS Glue PySpark 작업을 만듭니다.",
      "B": "파일을 변환하는 사용자 정의 Scala 코드를 작성합니다. Amazon EMR Serverless를 사용하여 Scala 코드를 실행합니다.",
      "C": "Python 런타임을 사용하는 AWS Lambda 함수를 만들고 reduce() 함수를 호출하여 파일을 변환합니다. Lambda 함수를 호출합니다.",
      "D": "JSON 파일을 기반으로 Amazon Athena 데이터베이스를 만듭니다. Athena flatten 함수를 사용하여 데이터를 변환합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Relationalize Transform — 중첩 JSON 표 형식 변환\n▸ AWS Glue — ETL 관리형 서비스\n▸ 최소 운영 부담 — 내장 기능\n\n【정답 포인트】\n▸ Glue Relationalize는 JSON 변환 전담\n▸ PySpark는 Glue와 통합\n▸ 한 번에 완료\n\n【오답 체크】\n(B) Scala는 사용자 정의, 복잡\n(C) Lambda는 15분 제한\n(D) Athena flatten은 중첩 변환 제한\n\n【시험 포인트】\n중첩 JSON 표 형식 변환 → Glue Relationalize",
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
    "question": "한 의료 회사가 환자의 생명징후를 모니터링하는 디바이스의 데이터 스트림을 수집합니다. 회사는 Amazon SageMaker를 사용하고 환자의 부작용 이벤트를 예측하는 ML 모델을 준비할 계획입니다. 데이터 세트는 수천 개의 특성이 있는 대규모입니다. ML 엔지니어는 다양한 특성 세트, 다양한 알고리즘 및 많은 잠재적 파라미터를 사용하여 수백 개의 훈련 반복을 실행해야 합니다. ML 엔지니어는 각 훈련 반복의 특성 및 결과를 기록하는 솔루션을 구현해야 합니다. 가장 적은 구현 노력으로 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "각 반복의 특성에 대한 사용자 정의 메트릭을 만들기 위해 Amazon CloudWatch를 사용합니다.",
      "B": "각 반복의 특성을 Amazon S3의 로그에 작성합니다. AWS Glue 및 Amazon Athena를 사용하여 로그를 검색합니다.",
      "C": "SageMaker Model Registry를 사용하여 각 반복의 특성 및 결과를 추적합니다.",
      "D": "SageMaker Experiments를 사용하여 각 반복의 특성 및 결과를 추적합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Experiments — 훈련 실험 추적\n▸ 파라미터 및 메트릭 기록 — 자동화\n▸ 비교 및 분석 — 실험 관리\n\n【정답 포인트】\n▸ SageMaker Experiments는 훈련 반복 추적 전담\n▸ 파라미터, 메트릭, 결과 자동 기록\n▸ 실험 간 비교 기능\n\n【오답 체크】\n(A) CloudWatch는 커스텀 메트릭 수동 관리\n(B) S3 로그는 쿼리 복잡\n(C) Model Registry는 최종 모델, 실험 추적 아님\n\n【시험 포인트】\n훈련 반복 실험 추적 → SageMaker Experiments",
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
    "question": "한 회사가 직원이 고객 쿼리를 처리하도록 도와주는 내부 전용 챗 인터페이스를 만들려고 합니다. 현재 직원은 고객 문제를 해결하기 위해 방대한 내부 문서 지식 기반을 참조해야 합니다. 새 솔루션은 서버리스여야 합니다. 이 요구사항을 충족할 단계 조합은 무엇입니까?",
    "options": {
      "A": "Anthropic Claude 기초 모델을 사용하여 Amazon Bedrock을 설정합니다.",
      "B": "Llama 기초 모델을 사용하여 Amazon SageMaker JumpStart를 설정합니다.",
      "C": "Amazon EC2 인스턴스를 Amazon API Gateway와 함께 사용하여 모델 API를 호출합니다.",
      "D": "AWS Lambda 함수를 Amazon API Gateway와 함께 사용하여 모델 API를 호출합니다.",
      "E": "벡터 데이터베이스 덤프 및 임베딩을 저장하기 위해 Amazon S3 버킷을 사용합니다.",
      "F": "벡터 데이터베이스 덤프 및 임베딩을 저장하기 위해 Amazon RDS for MySQL을 사용합니다."
    },
    "answer": "ADE",
    "explanation": "【핵심 용어】\n▸ Bedrock + Claude — 서버리스 LLM\n▸ Lambda + API Gateway — 서버리스 인터페이스\n▸ S3 — 벡터 저장소 (RAG)\n▸ 서버리스 — 모든 관리형 서비스\n\n【정답 포인트】\n▸ (A) Bedrock은 서버리스 LLM 호스팅\n▸ (D) Lambda + API Gateway는 서버리스 API\n▸ (E) S3는 벡터/임베딩 저장 (RAG 지원)\n▸ 세 가지 조합으로 완전한 서버리스 솔루션\n\n【오답 체크】\n(B) JumpStart는 SageMaker 엔드포인트 (서버리스 아님)\n(C) EC2는 관리형 아님\n(F) RDS는 일반 DB (벡터 저장소 최적화 아님)\n\n【시험 포인트】\n서버리스 LLM + 인터페이스 + RAG → Bedrock + Lambda + S3",
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
    "question": "ML 엔지니어가 유전 알고리즘 기반의 훈련된 모델을 배포해야 합니다. 이 알고리즘은 복잡한 문제를 해결하며 예측 생성에 몇 분이 걸릴 수 있습니다. 모델이 배포되면 요청을 처리하기 위해 대량의 데이터에 접근해야 합니다. 요청에는 최대 100MB의 데이터가 포함될 수 있습니다. 운영 부담이 가장 적은 배포 솔루션은 무엇입니까?",
    "options": {
      "A": "모델을 Application Load Balancer 뒤의 Auto Scaling 그룹의 Amazon EC2 인스턴스에 배포합니다.",
      "B": "모델을 Amazon SageMaker 실시간 엔드포인트에 배포합니다.",
      "C": "모델을 Amazon SageMaker 비동기 추론 엔드포인트에 배포합니다.",
      "D": "모델을 컨테이너로 패키징합니다. 모델을 Amazon EC2 인스턴스의 Amazon Elastic Container Service(Amazon ECS)에 배포합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 비동기 추론(Asynchronous Inference) — 장시간 실행되는 요청과 대용량 데이터 처리에 최적\n▸ SageMaker 실시간 엔드포인트 — 저지연 응답 필요, 동기식\n▸ Auto Scaling — 인프라 관리 오버헤드 증가\n\n【정답 포인트】\n▸ 유전 알고리즘은 수 분 소요(장시간 처리)\n▸ 100MB 대용량 데이터 처리\n▸ 비동기 모드가 운영 부담 최소화(자동 큐잉, 스케일링)\n\n【오답 체크】\n(A) EC2 Auto Scaling — 인프라 관리 오버헤드 높음\n(B) 실시간 엔드포인트 — 동기식이므로 장시간 작업 부적합\n(D) ECS 자체 관리 — 직접 운영 부담 증가\n\n【시험 포인트】\n수 분 이상 처리 시간 → 비동기 추론 선택",
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
    "question": "ML 엔지니어가 설문 응답 집합을 ML 분류기의 훈련 데이터로 사용하려고 합니다. 모든 설문 응답은 \"예\" 또는 \"아니오\"입니다. ML 엔지니어는 응답을 모델 훈련 결과를 향상시킬 피처로 변환해야 합니다. ML 엔지니어는 데이터세트의 차원성을 증가시키면 안 됩니다. 이 요구사항을 충족하는 방법은 무엇입니까? (2개 선택)",
    "options": {
      "A": "이진 인코딩(Binary encoding)",
      "B": "레이블 인코딩(Label encoding)",
      "C": "원-핫 인코딩(One-hot encoding)",
      "D": "통계적 대체(Statistical imputation)",
      "E": "토큰화(Tokenization)"
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ 이진 인코딩(Binary encoding) — 범주를 이진수로 변환 (예: 0, 1)\n▸ 레이블 인코딩(Label encoding) — 범주에 정수 라벨 할당 (예: 0, 1)\n▸ 원-핫 인코딩(One-hot encoding) — 이진수 벡터로 변환 (차원성 증가)\n\n【정답 포인트】\n▸ 이진/레이블 인코딩 — 차원성 유지 (2개 범주 → 1개 열)\n▸ 원-핫 인코딩 — 차원성 증가 (2개 범주 → 2개 열) → 제외\n\n【오답 체크】\n(C) 원-핫 인코딩 — 차원성 증가로 요구사항 위배\n(D) 통계적 대체 — 결측값 처리용, 변환 방법 아님\n(E) 토큰화 — 텍스트 처리용, 이진 데이터 부적합\n\n【시험 포인트】\n이진 데이터 + 차원성 유지 → 이진/레이블 인코딩",
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
    "question": "회사가 Amazon SageMaker 내장 알고리즘을 사용하여 추천 모델을 만들려고 합니다. 이 알고리즘은 고차원 희소(sparse) 데이터에 대해 예측을 생성할 수 있어야 합니다. 회사가 추천 모델을 위해 어떤 SageMaker 알고리즘을 선택해야 합니까?",
    "options": {
      "A": "K-최근접 이웃(K-nearest neighbors, k-NN)",
      "B": "인수분해 머신(Factorization Machines)",
      "C": "주성분 분석(Principal component analysis, PCA)",
      "D": "시퀀스-투-시퀀스(Sequence-to-Sequence, seq2seq)"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Factorization Machines — 희소 데이터의 피처 상호작용 모델링\n▸ 희소 데이터(Sparse data) — 대부분의 값이 0\n▸ 고차원 데이터(High-dimensional) — 피처 수가 많음\n\n【정답 포인트】\n▸ Factorization Machines — 희소 데이터, 추천 시스템 전문\n▸ 피처 상호작용 효율적 학습\n\n【오답 체크】\n(A) k-NN — 희소 데이터에서 거리 계산 부적합\n(C) PCA — 차원 축소 목적, 추천 모델 아님\n(D) seq2seq — 시계열 또는 자연어 처리용\n\n【시험 포인트】\n희소 데이터 + 추천 시스템 → Factorization Machines",
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
    "question": "회사에 scikit-learn 및 TensorFlow 프레임워크를 사용하여 자신의 노트북에서 개발한 별도의 예측 모델이 있습니다. 회사는 모델을 재구성하고 Amazon SageMaker를 사용하여 관리하는 ML 인프라에 모델을 통합해야 합니다. 회사는 또한 모델을 모델 레지스트리에 통합해야 합니다. 운영 부담이 가장 적은 솔루션은 무엇입니까?",
    "options": {
      "A": "모델을 노트북에서 Amazon S3 버킷으로 내보냅니다. Amazon API Gateway REST API 및 AWS Lambda 함수와 SageMaker 엔드포인트를 사용하여 모델에 액세스합니다. SageMaker Model Registry에 모델을 등록합니다.",
      "B": "모델을 SageMaker Model Registry로 가져옵니다. SageMaker를 사용하여 가져온 모델을 실행합니다.",
      "C": "노트북의 코드를 사용하여 모델용 컨테이너를 만듭니다. SageMaker의 bring your own container(BYOC) 기능을 사용하여 모델을 가져오고 사용합니다. SageMaker Model Registry에 모델을 등록합니다.",
      "D": "Python 기반 모델을 SageMaker로 가져옵니다. SageMaker에서 scikit-learn 및 TensorFlow 모델을 재구성합니다. 모든 모델을 SageMaker Model Registry에 등록합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Registry — 모델 버전 관리 및 추적\n▸ BYOC(Bring Your Own Container) — 커스텀 컨테이너 활용\n▸ 모델 재구성 — 프레임워크 호환성 확보\n\n【정답 포인트】\n▸ SageMaker 내에서 모델 재구성 — 프레임워크 호환성 보장\n▸ Model Registry 등록 — 통합 관리\n▸ 최소 운영 부담 — SageMaker 직접 지원\n\n【오답 체크】\n(A) API Gateway + Lambda — 추가 인프라 관리 필요\n(B) 직접 가져오기만 — 모델 호환성 문제 해결 안함\n(C) BYOC — 컨테이너 자체 관리 오버헤드\n\n【시험 포인트】\n프레임워크 호환성 + 통합 관리 → SageMaker 재구성",
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
    "question": "회사가 온프레미스 인프라를 사용하여 대규모 언어 모델(LLM)을 훈련하고 있습니다. 실시간 대화형 엔진이 LLM을 사용하여 고객이 신용 카드 데이터에서 실시간 인사이트를 찾을 수 있도록 도와줍니다. ML 엔지니어가 Amazon SageMaker에서 LLM을 훈련하고 배포할 솔루션을 구현해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker Training Compiler를 사용하여 LLM을 훈련합니다. SageMaker 실시간 추론을 사용하여 LLM을 배포합니다.",
      "B": "대규모 모델 추론을 위한 딥러닝 컨테이너와 함께 SageMaker를 사용하여 LLM을 훈련합니다. SageMaker 실시간 추론을 사용하여 LLM을 배포합니다.",
      "C": "SageMaker Notebook Jobs를 사용하여 LLM을 훈련합니다. SageMaker 비동기 추론을 사용하여 LLM을 배포합니다.",
      "D": "SageMaker Studio를 사용하여 LLM을 훈련합니다. SageMaker 배치 변환을 사용하여 LLM을 배포합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Training Compiler — LLM 훈련 최적화, 병렬화 지원\n▸ 실시간 대화형 엔진 — 저지연 응답 필요\n▸ 딥러닝 컨테이너 — 추론 최적화 (A와 혼동)\n\n【정답 포인트】\n▸ Training Compiler — LLM 훈련 가속화\n▸ 실시간 추론 — 실시간 대화형 엔진 요구\n▸ 조합이 LLM 훈련/배포 최적\n\n【오답 체크】\n(B) 딥러닝 컨테이너 — 추론용 최적화, 훈련 가속화 아님\n(C) 비동기 추론 — 실시간 대화형 엔진 부적합\n(D) 배치 변환 — 일괄 처리용, 실시간 부적합\n\n【시험 포인트】\n LLM 훈련 + 실시간 대화형 → Training Compiler + 실시간 추론",
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
    "question": "회사가 프로덕션 엔드포인트에 기존 Amazon SageMaker 모델(v1)을 가지고 있습니다. 회사가 새 모델 버전(v2)을 개발하고 v2를 v1로 대체하기 전에 프로덕션에서 v2를 테스트해야 합니다. 회사가 v2가 프로덕션에서 잘못된 출력을 생성할 위험을 최소화하는 솔루션을 구현해야 합니다. 이 솔루션은 v2로 변경하는 동안 프로덕션 트래픽의 중단을 방지해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "v2용 두 번째 프로덕션 변형을 만듭니다. v2에 트래픽의 1%, v1에 99%를 할당합니다. v2의 모든 출력을 Amazon S3 버킷에 수집합니다. v2가 예상대로 작동하면 모든 트래픽을 v2로 전환합니다.",
      "B": "v2용 두 번째 프로덕션 변형을 만듭니다. v2에 트래픽의 10%, v1에 90%를 할당합니다. v2의 모든 출력을 Amazon S3 버킷에 수집합니다. v2가 예상대로 작동하면 모든 트래픽을 v2로 전환합니다.",
      "C": "v2를 새 엔드포인트에 배포합니다. 프로덕션 엔드포인트에서 데이터 캡처를 켭니다. 100%의 입력 데이터를 v2로 전달하는 스크립트를 작성합니다. v2가 예상대로 작동하면 v1 엔드포인트를 비활성화하고 트래픽을 v2로 지정합니다.",
      "D": "v2를 shadow 변형에 배포하여 100%의 추론 요청을 샘플링합니다. 모든 출력을 Amazon S3 버킷에 수집합니다. v2가 예상대로 작동하면 v2를 프로덕션으로 승격합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Shadow 변형 — 프로덕션 트래픽의 비용 없이 모델 테스트\n▸ Canary 배포 — 점진적 트래픽 전환 (1%, 10% 옵션)\n▸ 프로덕션 중단 방지 — 실시간 트래픽 영향 없음\n\n【정답 포인트】\n▸ Shadow 변형 — 100% 샘플링으로 완전한 검증\n▸ 실제 프로덕션 트래픽 영향 없음\n▸ 모든 출력을 S3에 수집하여 사후 분석\n\n【오답 체크】\n(A, B) Canary 배포 — 부분 트래픽으로 위험 노출\n(C) 새 엔드포인트 배포 — 동시 운영 복잡, v1 중단 위험\n\n【시험 포인트】\n무중단 테스트 + 완전 검증 → Shadow 변형",
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
    "question": "회사가 Amazon SageMaker, AWS 소유 라이브러리 및 오픈 소스 라이브러리를 사용하여 ML 모델을 구축하고 있습니다. 회사는 SageMaker가 훈련 중 사용 및 오류에 대한 메타데이터를 수집하지 않도록 보장해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker 도메인을 사용자 정의 IAM 역할과 연결합니다. 역할을 Amazon CloudWatch 서비스 사용 로그를 거부하는 정책에 연결합니다.",
      "B": "SageMaker 도메인에 IAM 역할을 추가하여 Amazon CloudWatch가 메타데이터를 보고할 권한을 거부합니다.",
      "C": "SageMaker 도메인의 설정을 켜서 콘솔 작업의 메타데이터 공유를 중지합니다. AWS CLI 또는 AWS SDK를 통해 제출된 각 훈련 작업에 대해 메타데이터 수집을 거부합니다.",
      "D": "AWS CLI, Boto3 또는 SageMaker Python SDK를 통해 제출된 각 훈련 작업에 대해 메타데이터 수집을 거부하도록 파라미터를 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ OPT_OUT_TRACKING — SageMaker 메타데이터 수집 거부\n▸ 훈련 작업별 설정 — 세분화된 제어\n▸ CloudWatch 정책 — IAM 수준 제어 (부족)\n\n【정답 포인트】\n▸ 훈련 작업 제출 시 메타데이터 거부 파라미터 설정\n▸ CLI, Boto3, Python SDK 모두 지원\n▸ 가장 직접적이고 유연한 방법\n\n【오답 체크】\n(A) CloudWatch 로그 거부 정책 — 메타데이터 수집 차단 불완전\n(B) IAM 역할 권한 거부 — 도메인 단위, 작업별 제어 아님\n(C) 도메인 설정 + 거부 — 중복적, 복잡함\n\n【시험 포인트】\n훈련 작업별 메타데이터 제어 → OPT_OUT_TRACKING 파라미터",
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
    "question": "ML 엔지니어가 20개의 피처와 1개의 타겟을 기반으로 사람의 건강 위험을 식별하는 ML 모델을 훈련하고 있습니다. 타겟 클래스에는 두 가지 값이 있습니다: • 건강 위험이 있을 가능성(양성 클래스) • 건강 위험이 없을 가능성(음성 클래스) 데이터세트의 사람들의 나이 범위는 30세에서 60세입니다. 나이는 피처 중 하나입니다. ML 엔지니어가 피처를 분석합니다. 양성 클래스의 경우, 40~45 연령대에 대한 레이블 비율의 차이(DPL) 값은 다른 모든 연령대에 비해 (+0.9)입니다. 이 데이터 불균형을 수정하기 위해 ML 엔지니어가 무엇을 해야 합니까?",
    "options": {
      "A": "40~45 연령대의 양성 클래스를 오버샘플링합니다.",
      "B": "40~45 연령대의 양성 클래스를 언더샘플링합니다.",
      "C": "40~45를 제외한 모든 연령대의 양성 클래스를 언더샘플링합니다.",
      "D": "40~45를 제외한 모든 연령대의 음성 클래스를 오버샘플링합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DPL(Difference in Proportions of Labels) — 양성 클래스 편향 측정\n▸ DPL = +0.9 — 40~45 연령대에서 양성 클래스 과다 대표\n▸ 언더샘플링 — 과다 대표 클래스 감소\n▸ 오버샘플링 — 소수 클래스 증가\n\n【정답 포인트】\n▸ DPL +0.9 → 40~45 범위에서 양성 클래스 과다\n▸ 해당 범위의 양성 클래스 언더샘플링으로 DPL 균형화\n\n【오답 체크】\n(A) 오버샘플링 — 불균형 악화\n(C) 다른 범위 언더샘플링 — 역방향 조정\n(D) 음성 클래스 오버샘플링 — 관련 없음\n\n【시험 포인트】\n과다 대표 피처 + DPL 양수 → 언더샘플링",
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
    "question": "회사가 Amazon SageMaker AI 파이프라인을 구축하고 있습니다. 파이프라인은 분산 처리 및 훈련을 사용합니다. ML 엔지니어가 분산 작업을 실행하는 인스턴스 간의 네트워크 통신을 암호화해야 합니다. ML 엔지니어가 분산 작업을 프라이빗 VPC에서 실행하도록 구성합니다. 암호화 요구사항을 충족하기 위해 ML 엔지니어가 무엇을 해야 합니까?",
    "options": {
      "A": "네트워크 격리를 활성화합니다.",
      "B": "보안 그룹을 사용하여 트래픽 암호화를 구성합니다.",
      "C": "컨테이너 간 트래픽 암호화를 활성화합니다.",
      "D": "VPC 플로우 로그를 활성화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 컨테이너 간 트래픽 암호화(Inter-container traffic encryption) — 분산 작업 보안\n▸ 네트워크 격리(Network isolation) — 외부 접근 차단\n▸ 보안 그룹 — 방화벽 규칙\n▸ VPC 플로우 로그 — 모니터링/로깅\n\n【정답 포인트】\n▸ 인스턴스 간(컨테이너 간) 통신 암호화 필요\n▸ SageMaker 분산 훈련 설정에서 지원\n▸ TLS/SSL 기반 암호화\n\n【오답 체크】\n(A) 네트워크 격리 — 외부 접근 제어, 내부 암호화 아님\n(B) 보안 그룹 — 액세스 제어용, 암호화 아님\n(D) VPC 플로우 로그 — 모니터링용, 암호화 아님\n\n【시험 포인트】\n분산 작업 인스턴스 간 암호화 → Inter-container traffic encryption",
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
    "question": "ML 모델이 프로덕션에 배포되어 있습니다. 모델이 잘 작동했으며 몇 개월 동안 메트릭 임계값을 충족했습니다. 모델을 모니터링하는 ML 엔지니어가 갑작스러운 성능 저하를 관찰합니다. 모델의 성능 메트릭이 이제 임계값 이하입니다. 성능 저하의 원인이 될 수 있는 것은 무엇입니까?",
    "options": {
      "A": "훈련 데이터 부족",
      "B": "프로덕션 데이터 분포의 드리프트(Data drift)",
      "C": "계산 리소스 제약",
      "D": "모델 과적합(Model overfitting)"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Data drift — 프로덕션 입력 데이터 분포 변화\n▸ Model drift — 모델 성능 저하\n▸ 갑작스러운 저하 — 최근 데이터 변화 시사\n▸ 과적합 — 훈련 중 발생, 배포 후 갑작스러운 저하 아님\n\n【정답 포인트】\n▸ 몇 개월 잘 작동 → 훈련 데이터 부족 아님\n▸ 갑작스러운 저하 → 최근 데이터 변화(드리프트)\n▸ 프로덕션 환경 변화 → 입력 분포 변화\n\n【오답 체크】\n(A) 훈련 데이터 부족 — 배포 전 이슈\n(C) 계산 리소스 제약 — 성능 저하 아닌 지연\n(D) 과적합 — 훈련 중 발생, 몇 개월 후 갑작스러운 저하 아님\n\n【시험 포인트】\n배포 후 갑작스러운 성능 저하 → Data drift 의심",
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
    "question": "ML 엔지니어가 AWS Glue를 사용하여 제3자 공급업체의 소유 데이터를 Amazon SageMaker DeepAR 예측 알고리즘에서 사용할 의도의 형식으로 변환하고 있습니다. 데이터에는 ML 엔지니어가 적절한 형식으로 변환해야 하는 여러 개의 유사한 시계열 데이터 파일이 포함되어 있습니다. ML 엔지니어는 저장소 비용을 최적화하기 위해 파일을 압축해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Snappy를 사용하여 파일을 RecordIO-Protobuf로 변환하고 파일을 압축합니다.",
      "B": "XZ를 사용하여 파일을 RecordIO-Protobuf로 변환하고 파일을 압축합니다.",
      "C": "XZ를 사용하여 파일을 Apache Parquet 형식으로 변환하고 파일을 압축합니다.",
      "D": "gzip을 사용하여 파일을 Apache Parquet로 변환하고 파일을 압축합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ DeepAR — SageMaker 시계열 예측 알고리즘\n▸ RecordIO-Protobuf — SageMaker 학습용 형식\n▸ Apache Parquet — 컬럼 저장, 압축 효율\n▸ gzip — 높은 압축률\n▸ Snappy — 빠른 속도, 낮은 압축률\n\n【정답 포인트】\n▸ DeepAR은 JSON 또는 Parquet 형식 권장\n▸ Parquet — 컬럼 기반, 저장소 최적화\n▸ gzip — 최고의 압축률\n\n【오답 체크】\n(A) Snappy + RecordIO-Protobuf — 압축률 낮음\n(B) XZ + RecordIO-Protobuf — DeepAR 호환성 이슈\n(C) XZ + Parquet — XZ 압축률 높지만 느림, gzip 더 나음\n\n【시험 포인트】\nDeepAR + 저장소 최적화 → Parquet + gzip",
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
    "question": "회사가 Amazon S3 버킷에 .csv 파일로 저장된 데이터의 양을 크게 증가시켰습니다. 데이터 변환 스크립트와 쿼리가 이제 예전보다 훨씬 오래 걸립니다. ML 엔지니어가 쿼리 성능을 위해 데이터를 최적화하는 솔루션을 구현해야 합니다. 운영 부담이 가장 적은 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Lambda 함수를 구성하여 .csv 파일을 S3 버킷의 더 작은 객체로 분할합니다.",
      "B": "AWS Glue 작업을 구성하여 문자열 유형 값을 가진 열을 삭제하고 결과를 S3 버킷에 저장합니다.",
      "C": "AWS Glue 추출, 변환, 로드(ETL) 작업을 구성하여 .csv 파일을 Apache Parquet 형식으로 변환합니다.",
      "D": "Amazon EMR 클러스터를 구성하여 S3 버킷의 데이터를 처리합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Apache Parquet — 컬럼 저장, 빠른 쿼리, 압축\n▸ CSV — 행 저장, 쿼리 성능 낮음\n▸ AWS Glue ETL — 자동 변환 도구\n▸ EMR — 자체 관리 오버헤드\n\n【정답 포인트】\n▸ CSV → Parquet 변환 — 쿼리 성능 극대화\n▸ Glue ETL — 운영 부담 최소\n▸ 압축과 컬럼 저장으로 비용 절감\n\n【오답 체크】\n(A) 파일 분할 — 쿼리 성능 개선 아님\n(B) 열 삭제 — 부분적 해결, 형식 최적화 아님\n(D) EMR — 클러스터 관리 오버헤드\n\n【시험 포인트】\nCSV 쿼리 성능 + 자동화 → Glue ETL + Parquet",
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
    "question": "ML 엔지니어가 Amazon SageMarker AI에서 모델을 훈련하기 전에 분류 데이터세트를 분석하고 있습니다. ML 엔지니어는 데이터세트가 클래스 레이블 간에 상당한 불균형이 있어 편향된 모델 예측으로 이어질 수 있다고 의심합니다. 클래스 불균형을 확인하기 위해 ML 엔지니어는 적절한 훈련 전 편향 메트릭을 선택해야 합니다. 이 요구사항을 충족하는 메트릭은 무엇입니까?",
    "options": {
      "A": "평균 제곱 오차(Mean square error, MSE)",
      "B": "레이블 비율의 차이(Difference in proportions of labels, DPL)",
      "C": "실루엣 점수(Silhouette score)",
      "D": "구조 유사성 지수 측정(Structural similarity index measure, SSIM)"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ DPL — 클래스 레이블 불균형 측정\n▸ MSE — 회귀 모델 오차\n▸ Silhouette score — 클러스터링 평가\n▸ SSIM — 이미지 유사성 비교\n\n【정답 포인트】\n▸ DPL — 분류 데이터세트 클래스 불균형 측정\n▸ 훈련 전 편향 감지 메트릭\n▸ 범위: -1 ~ 1 (0이 완벽한 균형)\n\n【오답 체크】\n(A) MSE — 회귀 문제 평가\n(C) Silhouette score — 비지도 클러스터링\n(D) SSIM — 이미지 처리\n\n【시험 포인트】\n분류 클래스 불균형 + 훈련 전 편향 → DPL",
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
    "question": "ML 엔지니어가 하나의 ML 프레임워크를 사용하여 여러 ML 모델을 훈련합니다. ML 엔지니어가 추론 비용을 최적화하고 모델을 Amazon SageMaker AI에서 호스팅해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "직접 호출을 위한 다중 컨테이너 추론 엔드포인트를 만듭니다.",
      "B": "모든 모델을 위한 다중 모델 추론 엔드포인트를 만듭니다.",
      "C": "순차적 호출을 위한 다중 컨테이너 추론 엔드포인트를 만듭니다.",
      "D": "각 모델에 대해 여러 개의 단일 모델 추론 엔드포인트를 만듭니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Multi-model endpoint — 단일 엔드포인트에서 여러 모델 호스팅\n▸ Multi-container endpoint — 여러 컨테이너 조합\n▸ Single-model endpoint — 모델당 별도 엔드포인트 (비용 높음)\n\n【정답 포인트】\n▸ 다중 모델 엔드포인트 — 가장 비용 효율적\n▸ 동일 프레임워크 → 컨테이너 재사용\n▸ 온디맨드 로딩으로 리소스 절감\n\n【오답 체크】\n(A) 다중 컨테이너 직접 호출 — 비용 이득 미미\n(C) 다중 컨테이너 순차 호출 — 레이턴시 증가\n(D) 단일 모델 엔드포인트 — 개별 비용 누적\n\n【시험 포인트】\n다중 모델 + 비용 최적화 → Multi-model endpoint",
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
    "question": "회사가 비디오에서 모션을 분류하는 ML 모델을 사용하고 있습니다. 데이터는 Amazon S3의 MP4 형식으로 저장됩니다. 회사가 모델을 만들 때 모든 비디오 프레임에 라벨을 지정하는 데 4개월이 필요했습니다. 회사가 Amazon SageMaker AI의 기존 훈련 워크플로우로 모델을 재훈련해야 합니다. ML 엔지니어가 라벨링 시간을 단축하는 솔루션을 구현해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker Ground Truth를 사용하여 비디오 프레임에 주석을 답니다.",
      "B": "SageMaker JumpStart를 사용하여 사전 훈련된 컴퓨터 비전 모델을 사용하여 라벨링 모델을 개발합니다.",
      "C": "SageMaker Data Wrangler를 사용하여 데이터 워크플로우를 만듭니다. 워크플로우를 사용하여 라벨링 프로세스를 최적화합니다.",
      "D": "Amazon Augmented AI(Amazon A2I)의 라벨링 인터페이스를 Amazon Rekognition과 함께 사용하여 비디오 프레임에 라벨을 지정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Amazon A2I(Augmented AI) — 인간-AI 협력 라벨링\n▸ Amazon Rekognition — 비디오 분석 전문\n▸ Ground Truth — 수동 라벨링 (느림)\n▸ JumpStart — 모델 개발용\n\n【정답 포인트】\n▸ A2I + Rekognition — 자동 감지 + 인간 검증\n▸ 라벨링 시간 극대 단축\n▸ 비디오 프레임 처리 최적화\n\n【오답 체크】\n(A) Ground Truth — 전적으로 수동\n(B) JumpStart — 라벨링 가속화 아님\n(C) Data Wrangler — 데이터 변환용, 라벨링 아님\n\n【시험 포인트】\n비디오 라벨링 + 시간 단축 → A2I + Rekognition",
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
    "question": "전자상거래 회사가 고객 활동 기록을 기반으로 실시간 재고 관리를 위한 수요를 예측하는 ML 모델을 훈련합니다. 회사가 훈련된 모델을 프로덕션 Amazon SageMaker AI 엔드포인트에 성공적으로 배포했습니다. 그러나 회사가 모델의 예측 성능이 시간이 지남에 따라 저하된다는 것을 알았습니다. 회사가 성능 저하를 완화하기 위한 장기적이고 자동화된 솔루션이 필요합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon SageMaker Debugger를 사용하여 모델 성능 이상이 감지되면 자동으로 경고를 보냅니다.",
      "B": "AWS X-Ray를 사용하여 SageMaker AI 엔드포인트와 들어오는 요청의 성능을 모니터링하여 모델 재훈련을 알립니다.",
      "C": "Amazon SageMaker Ground Truth를 사용하여 고품질 데이터세트를 큐레이션합니다. 데이터세트를 사용하여 모델을 재훈련합니다.",
      "D": "Amazon SageMaker Clarify를 사용하여 모델과 피처 속성 편향을 모니터링하여 모델 재훈련을 알립니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ SageMaker Clarify — 모델 및 피처 편향 모니터링\n▸ Model Monitor — 데이터/모델 품질 감시\n▸ Debugger — 훈련 중 문제 감지\n▸ X-Ray — 성능 추적\n\n【정답 포인트】\n▸ 장시간 자동 모니터링 필요\n▸ Clarify로 편향 감지 → 재훈련 트리거\n▸ 성능 저하의 근본 원인(편향) 해결\n\n【오답 체크】\n(A) Debugger — 훈련 중 문제, 배포 후 모니터링 아님\n(B) X-Ray — 성능 추적용, 재훈련 자동화 아님\n(C) Ground Truth — 자동 재훈련 시스템 아님\n\n【시험 포인트】\n배포 후 자동 모니터링 + 편향 감지 → Clarify",
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
    "question": "물류 회사가 운전자의 기본 모니터링을 위해 차량 카메라를 설치했습니다. 회사가 사고로 이어질 수 있는 주의 산만을 식별하여 운전자 안전을 개선하려고 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Rekognition 눈 응시 방향 감지를 사용하여 운전자 행동을 모니터링하고 주의 산만을 식별합니다.",
      "B": "Amazon SageMaker AI를 사용하여 AI 모델을 사용자 지정하여 운전자 행동을 모니터링하고 주의 산만을 식별합니다.",
      "C": "제3자 운전자 모니터링 시스템을 Amazon Rekognition과 통합하여 운전자 행동을 모니터링하고 주의 산만을 식별합니다.",
      "D": "Amazon Comprehend를 사용하여 텍스트 기반 운전자 피드백을 분석하고 주의 산만을 식별합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Rekognition 눈 응시 감지 — 눈 초점 추적\n▸ SageMaker 커스텀 모델 — 높은 구축 비용\n▸ Comprehend — 텍스트 분석\n▸ 최소 운영 노력\n\n【정답 포인트】\n▸ Rekognition 기본 기능 — 즉시 사용 가능\n▸ 눈 응시 방향 — 주의산만 감지 지표\n▸ 최소 운영 노력\n\n【오답 체크】\n(B) SageMaker 커스텀 — 모델 개발 오버헤드\n(C) 제3자 시스템 통합 — 복잡성 증가\n(D) Comprehend — 텍스트용, 카메라 영상 부적합\n\n【시험 포인트】\n카메라 기반 모니터링 + 최소 노력 → Rekognition 눈 응시 감지",
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
    "question": "회사가 컨테이너로 패키징된 ML 모델을 훈련했습니다. 회사가 모델을 기존 Python 웹 애플리케이션과 통합할 것입니다. 회사가 Kubernetes를 사용하여 AWS에서 모델을 호스팅해야 합니다. 회사가 제어 플레인을 관리하지 않으려고 하며 리소스를 반복 가능한 방식으로 프로비저닝해야 합니다. 인프라는 Python을 사용하여 프로비저닝해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS CloudFormation을 사용하여 여러 가용 영역의 Amazon EC2 인스턴스를 프로비저닝합니다. Kubernetes 클러스터를 설정합니다. 모델 컨테이너를 Kubernetes 클러스터에서 호스팅합니다.",
      "B": "AWS CLI를 사용하여 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 프로비저닝합니다. 이미지를 Amazon Elastic Container Registry(Amazon ECR) 저장소에 저장합니다. 모델 컨테이너를 EKS 클러스터에서 호스팅합니다.",
      "C": "AWS Cloud Development Kit(AWS CDK)를 사용하여 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 프로비저닝합니다. 이미지를 Amazon Elastic Container Registry(Amazon ECR) 저장소에 저장합니다. 모델 컨테이너를 EKS 클러스터에서 호스팅합니다.",
      "D": "AWS CloudFormation을 사용하여 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 프로비저닝합니다. 이미지를 Amazon Elastic Container Registry(Amazon ECR) 저장소에 저장합니다. 모델 컨테이너를 EKS 클러스터에서 호스팅합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS CDK — Python 기반 IaC\n▸ CloudFormation — YAML/JSON 기반\n▸ EKS — 관리형 Kubernetes (제어 플레인 불필요)\n▸ ECR — 컨테이너 이미지 저장소\n\n【정답 포인트】\n▸ Python으로 프로비저닝 → AWS CDK\n▸ 관리형 Kubernetes → EKS\n▸ 반복 가능한 인프라 → IaC\n\n【오답 체크】\n(A) CloudFormation + 자체 관리 — 제어 플레인 관리 필요\n(B) AWS CLI — 프로그래밍 가능한 IaC 아님\n(D) CloudFormation — Python 아님\n\n【시험 포인트】\nPython + EKS + IaC → AWS CDK",
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
    "question": "ML 엔지니어가 선형 회귀 ML 모델을 개발하고 있습니다. 모델은 훈련 데이터세트에서 높은 정확도를 보이지만 보이지 않은 새 데이터에서는 성능이 저조합니다. 이 문제를 해결하기 위해 ML 엔지니어가 어떤 조치를 취해야 합니까?",
    "options": {
      "A": "모델 복잡도를 증가시켜 훈련 데이터의 더 많은 패턴을 캡처합니다. Amazon SageMaker Debugger를 사용하여 수렴 문제를 모니터링합니다.",
      "B": "교차 검증 및 정규화와 같은 ML 기법을 적용합니다. Amazon SageMaker Experiments를 사용하여 다양한 모델 버전과 해당 성능 메트릭을 추적하고 비교합니다.",
      "C": "모델을 직접 프로덕션에 배포합니다. Amazon SageMaker Clarify를 사용하여 새 데이터에서 모델 출력을 해석합니다. 이러한 인사이트를 기반으로 모델을 조정합니다.",
      "D": "모델 크기를 조정하지 않고 훈련 데이터세트의 크기를 늘립니다. 새 데이터에서 모델을 재훈련합니다. 혼동 행렬을 생성하여 결과를 분석합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 과적합(Overfitting) — 높은 훈련 정확도, 낮은 테스트 성능\n▸ 교차 검증(Cross-validation) — 과적합 감지\n▸ 정규화(Regularization) — 과적합 완화\n▸ SageMaker Experiments — 모델 버전 추적\n\n【정답 포인트】\n▸ 과적합 문제 해결 → 정규화 + 교차 검증\n▸ 모델 버전 비교 → Experiments\n▸ 체계적 개선\n\n【오답 체크】\n(A) 복잡도 증가 — 과적합 악화\n(C) 프로덕션 배포 → 문제 악화\n(D) 데이터 크기만 증가 — 정규화 없음\n\n【시험 포인트】\n과적합 + 시스템적 해결 → 정규화 + 교차 검증 + 추적",
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
    "question": "회사가 Amazon SageMaker AI 실시간 엔드포인트에 배포된 모델을 대체할 새로운 ML 모델을 훈련하고 있습니다. ML 엔지니어가 새 모델의 레이턴시와 정확도를 결정해야 합니다. ML 엔지니어는 기존 모델의 사용자에게 영향을 주지 않고 프로덕션 시나리오에서 새 모델을 평가해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "선형 트래픽 이동이 있는 블루/그린 배포를 수행합니다.",
      "B": "카나리 트래픽 이동이 있는 블루/그린 배포를 수행합니다.",
      "C": "현재 플릿의 50% 롤링 배치 크기로 롤링 배포를 수행합니다.",
      "D": "100%의 트래픽 샘플링 백분율로 shadow 테스트를 수행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Shadow 테스트 — 프로덕션 트래픽 영향 없이 완전 검증\n▸ Canary 배포 — 점진적 트래픽 전환\n▸ 무중단 평가 — 기존 사용자 영향 없음\n\n【정답 포인트】\n▸ 100% 트래픽 샘플링 — 완전한 성능 평가\n▸ 실제 프로덕션 트래픽 사용\n▸ 기존 모델 사용자 영향 없음\n\n【오답 체크】\n(A, B) 블루/그린 — 부분 트래픽 전환\n(C) 롤링 배포 — 부분 영향 발생\n\n【시험 포인트】\n완전 평가 + 무중단 → Shadow 테스트 100%",
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
    "question": "ML 엔지니어가 Amazon S3에서 분석용 데이터를 준비하고 로드하려고 합니다. ML 엔지니어가 추출, 변환, 로드(ETL) 작업을 실행하여 데이터의 스키마를 발견하고 메타데이터를 저장해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue를 사용하여 ETL 작업을 실행합니다. 작업을 사용하여 스키마를 발견하고 연결된 메타데이터를 AWS Glue Data Catalog에 저장합니다.",
      "B": "Amazon SageMaker Data Wrangler 흐름을 만들어 ETL 작업을 실행합니다. 작업을 사용하여 스키마를 발견하고 연결된 메타데이터를 S3 버킷에 저장합니다.",
      "C": "Amazon Athena와 통합된 AWS Step Functions를 사용하여 ETL 파이프라인을 만듭니다. 파이프라인을 사용하여 ETL 작업을 실행하여 스키마를 발견하고 연결된 메타데이터를 S3 버킷에 저장합니다.",
      "D": "scikit-learn 라이브러리를 포함하는 Amazon EC2 인스턴스를 시작합니다. ETL 작업을 실행하기 위해 인스턴스를 사용합니다. 작업을 사용하여 스키마를 발견하고 연결된 메타데이터를 Amazon Redshift에 저장합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Glue — ETL 및 메타데이터 카탈로그\n▸ Glue Data Catalog — 스키마 자동 발견 및 저장\n▸ Data Wrangler — 데이터 변환 UI\n▸ Athena — 쿼리 엔진\n\n【정답 포인트】\n▸ Glue ETL — 스키마 발견 + 메타데이터 자동 저장\n▸ Data Catalog — 통합 메타데이터 관리\n▸ 최소 수동 노력\n\n【오답 체크】\n(B) Data Wrangler — 변환 UI, 메타데이터 카탈로그 아님\n(C) Athena + Step Functions — 복잡함\n(D) EC2 + Redshift — 수동 작업 필요\n\n【시험 포인트】\nETL + 스키마 발견 + 메타데이터 저장 → AWS Glue + Data Catalog",
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
    "question": "ML 엔지니어가 ML 파이프라인을 구축하고 있습니다. 파이프라인은 Amazon Athena를 사용하여 데이터세트를 두 가지 방식으로 처리해야 합니다. 파이프라인은 대규모 데이터 변환 및 모델 훈련을 수행하기 위해 배치 처리를 사용해야 합니다. 파이프라인은 또한 추론 및 분석을 위한 저지연 쿼리를 수행하기 위해 거의 실시간 처리를 사용해야 합니다. 두 유형의 처리 모두에 대해 최소 지연을 제공하는 파일 형식은 무엇입니까?",
    "options": {
      "A": "CSV",
      "B": "Apache Parquet",
      "C": "Nested JSON",
      "D": "Deserialized JSON"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Apache Parquet — 컬럼 저장, 압축, 빠른 쿼리\n▸ CSV — 행 저장, 느린 쿼리\n▸ JSON — 비구조적, 파싱 오버헤드\n▸ 배치 + 실시간 처리\n\n【정답 포인트】\n▸ Parquet — 컬럼 저장으로 쿼리 성능 최적화\n▸ 배치/실시간 모두 최고 성능\n▸ Athena 표준 형식\n\n【오답 체크】\n(A) CSV — 행 저장, 느린 쿼리\n(C) Nested JSON — 파싱 오버헤드\n(D) Deserialized JSON — 동일한 문제\n\n【시험 포인트】\n배치 + 실시간 쿼리 → Parquet",
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
    "question": "회사가 Amazon SageMaker AI ML 모델을 사용하여 실시간 추론을 수행합니다. 회사가 SageMaker AI가 추론에 사용하는 Amazon EC2 인스턴스에 대해 자동 스케일링을 구성했습니다. 최고 사용 시간에 새 인스턴스가 시작되기 전에 기존 인스턴스가 완전히 준비되지 않습니다. 결과적으로 모델이 비효율성과 지연을 경험합니다. 응답 시간에 영향을 주지 않고 스케일링 프로세스를 최적화할 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker AI의 다중 모델 엔드포인트 구성으로 변경합니다.",
      "B": "Amazon API Gateway 및 AWS Lambda를 통합하여 SageMaker AI 추론 엔드포인트 호출을 관리합니다.",
      "C": "축소 활동의 쿨다운 기간을 줄입니다. 최대 인스턴스 수를 늘립니다.",
      "D": "확장 활동 후 쿨다운 기간을 늘립니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 쿨다운 기간(Cooldown period) — 스케일링 후 대기 시간\n▸ 확장(Scale-out) — 인스턴스 추가\n▸ 축소(Scale-in) — 인스턴스 제거\n\n【정답 포인트】\n▸ 새 인스턴스 완전 준비 전 트래픽 증가 문제\n▸ 확장 후 쿨다운 증가 → 인스턴스 완전 준비까지 대기\n▸ 응답 시간 영향 최소\n\n【오답 체크】\n(A) 다중 모델 엔드포인트 — 스케일링과 무관\n(B) API Gateway + Lambda — 추가 레이턴시 유입\n(C) 축소 쿨다운 감소 — 문제 악화\n\n【시험 포인트】\n스케일링 지연 + 인스턴스 준비 → 확장 쿨다운 증가",
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
    "question": "회사가 CreateModel API 작업을 호출하여 Amazon SageMaker AI ML 모델을 엔드포인트에 배포했습니다. API 호출을 통해 설정된 네트워크에는 두 개의 프라이빗 서브넷과 하나의 보안 그룹이 포함됩니다. 모델은 Amazon S3 버킷에서 데이터를 다운로드해야 하며 S3 버킷에 데이터를 업로드해야 합니다. S3 버킷으로의 트래픽은 인터넷을 통해 이동하면 안 됩니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "NAT 게이트웨이를 만듭니다. 보안 그룹을 구성하여 아웃바운드 연결을 허용합니다. 라우팅 테이블을 구성하여 S3 버킷으로의 트래픽을 NAT 게이트웨이를 통해 리디렉션합니다.",
      "B": "게이트웨이 VPC 엔드포인트를 만듭니다. S3 버킷으로의 액세스를 제한하는 엔드포인트 정책을 구성합니다. 라우팅 테이블을 구성하여 S3 버킷으로의 트래픽을 엔드포인트를 통해 리디렉션합니다.",
      "C": "인터페이스 VPC 엔드포인트를 만듭니다. 보안 그룹이 인바운드 연결만 허용하는지 확인합니다. 라우팅 테이블을 구성하여 S3 버킷으로의 트래픽을 엔드포인트를 통해 리디렉션합니다.",
      "D": "Gateway Load Balancer VPC 엔드포인트를 만듭니다. S3 버킷으로의 액세스를 제한하는 IAM 정책을 구성합니다. 라우팅 테이블을 구성하여 S3 버킷으로의 트래픽을 엔드포인트를 통해 리디렉션합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Gateway VPC endpoint — S3용 전용 연결 (인터넷 우회)\n▸ Interface VPC endpoint — 다양한 서비스용\n▸ NAT gateway — 인터넷 접근 (부적합)\n▸ 프라이빗 서브넷 → S3 직접 접근 불가\n\n【정답 포인트】\n▸ Gateway VPC endpoint — S3 전용\n▸ 인터넷 우회 직접 연결\n▸ 엔드포인트 정책으로 액세스 제어\n\n【오답 체크】\n(A) NAT gateway — 인터넷 통과 (요구사항 위배)\n(C) Interface endpoint — 추가 비용, S3에는 Gateway 권장\n(D) Gateway Load Balancer — 다른 용도\n\n【시험 포인트】\n프라이빗 + S3 + 무인터넷 → Gateway VPC endpoint",
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
    "question": "회사가 고객이 대출금을 상환할 수 있을 가능성에 따라 고객을 순위 매기는 새로운 ML 모델을 개발하고 있습니다. 회사가 Amazon SageMaker AI 내장 알고리즘을 사용해야 합니다. 이 요구사항을 충족하기 위해 회사가 어떤 알고리즘을 사용해야 합니까?",
    "options": {
      "A": "XGBoost",
      "B": "K-평균(K-means clustering)",
      "C": "주성분 분석(Principal component analysis, PCA)",
      "D": "신경망 토픽 모델(Neural Topic Model, NTM)"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ XGBoost — 분류 및 순위 매기기용 그래디언트 부스팅\n▸ K-means — 비지도 클러스터링\n▸ PCA — 차원 축소\n▸ NTM — 토픽 모델링\n\n【정답 포인트】\n▸ 대출금 상환 가능성 순위 → 순위 매기기/회귀 문제\n▸ XGBoost — SageMaker 내장 알고리즘\n▸ 최고 성능의 범용 알고리즘\n\n【오답 체크】\n(B) K-means — 클러스터링, 순위 아님\n(C) PCA — 차원 축소\n(D) NTM — 토픽 분석\n\n【시험 포인트】\n순위 매기기/분류 → XGBoost",
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
    "question": "ML 엔지니어가 Amazon SageMaker AI 파이프라인을 설정하고 있습니다. 파이프라인이 데이터 드리프트가 감지되면 자동으로 재훈련 작업을 시작해야 합니다. ML 엔지니어가 이 요구사항을 충족하도록 파이프라인을 설정해야 하는 방법은 무엇입니까?",
    "options": {
      "A": "AWS Glue 크롤러 및 AWS Glue 추출, 변환 및 로드(ETL) 작업을 사용하여 데이터 드리프트를 감지합니다. AWS Glue 트리거를 사용하여 재훈련 작업을 자동화합니다.",
      "B": "데이터 드리프트를 감지하려면 Amazon Managed Service for Apache Flink를 사용합니다. 재훈련 작업을 자동화하려면 AWS Lambda 함수를 사용합니다.",
      "C": "데이터 드리프트를 감지하려면 SageMaker Model Monitor를 사용합니다. 재훈련 작업을 자동화하려면 AWS Lambda 함수를 사용합니다.",
      "D": "데이터 드리프트를 감지하려면 Amazon QuickSight 이상 감지를 사용합니다. 재훈련 작업을 자동화하려면 AWS Step Functions 워크플로우를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Monitor — 배포된 모델 모니터링 및 드리프트 감지\n▸ AWS Lambda — 자동화 트리거\n▸ Glue — 데이터 파이프라인\n▸ QuickSight — BI 도구\n\n【정답 포인트】\n▸ Model Monitor — SageMaker 배포 모델용 표준 모니터링\n▸ Lambda — 간단한 재훈련 트리거\n▸ 통합된 솔루션\n\n【오답 체크】\n(A) Glue — 데이터 처리 파이프라인용\n(B) Flink — 실시간 스트리밍용\n(D) QuickSight — 비즈니스 분석용, 드리프트 감지 아님\n\n【시험 포인트】\n배포된 모델 모니터링 + 드리프트 → Model Monitor + Lambda",
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
    "question": "회사가 컴퓨터 비전 모델을 개발했습니다. 회사가 모델을 Amazon SageMaker AI의 프로덕션에 배포해야 합니다. 회사가 SageMaker AI에서 모델을 호스팅한 적이 없습니다. ML 엔지니어가 모델 버전을 추적하는 솔루션을 구현해야 합니다. 솔루션은 또한 모델을 호스팅할 Amazon EC2 인스턴스 유형에 대한 권장 사항을 제공해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Elastic Container Registry(Amazon ECR)에 모델을 등록합니다. 인스턴스 유형에 대한 권장 사항을 위해 AWS Compute Optimizer를 사용합니다.",
      "B": "SageMaker Model Registry에 모델을 등록합니다. 인스턴스 유형에 대한 권장 사항을 위해 SageMaker Autopilot를 사용합니다.",
      "C": "SageMaker Model Registry에 모델을 등록합니다. 인스턴스 유형에 대한 권장 사항을 위해 SageMaker Inference Recommender를 사용합니다.",
      "D": "Amazon Elastic Container Registry(Amazon ECR)에 모델을 등록합니다. 인스턴스 유형에 대한 권장 사항을 위해 SageMaker Experiments를 사용합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Model Registry — 모델 버전 관리\n▸ SageMaker Inference Recommender — 엔드포인트 인스턴스 권장\n▸ ECR — 컨테이너 이미지 저장소\n▸ Compute Optimizer — 범용 리소스 최적화\n\n【정답 포인트】\n▸ Model Registry — SageMaker 모델 버전 추적\n▸ Inference Recommender — 배포용 인스턴스 타입 권장\n▸ 모두 SageMaker 통합\n\n【오답 체크】\n(A) ECR — 컨테이너 저장소, 버전 관리 아님\n(B) Autopilot — 모델 자동 훈련용\n(D) Experiments — 모델 성능 비교, 인스턴스 권장 아님\n\n【시험 포인트】\n모델 버전 + 배포 권장사항 → Model Registry + Inference Recommender",
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
    "question": "회사가 Amazon SageMaker AI를 사용하여 신용 위험 평가 모델을 개발하고 있습니다. 모델 검증 중에 회사가 모델이 검증 데이터에서 82% 정확도를 달성하는 것을 발견했습니다. 그러나 모델이 훈련 데이터에서 99% 정확도를 달성했습니다. 회사가 배포 전에 모델 정확도 문제를 해결해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "더 많은 조밀한 계층을 추가하여 모델 복잡도를 늘립니다. 배치 정규화를 구현합니다. 훈련 중 조기 중지를 사용합니다.",
      "B": "드롭아웃 계층을 구현합니다. L1 또는 L2 정규화를 사용합니다. k-겹 교차 검증을 수행합니다.",
      "C": "주성분 분석(PCA)을 사용하여 피처 차원성을 줄입니다. 모델 계층을 감소시킵니다. 교차 엔트로피 손실 함수를 구현합니다.",
      "D": "훈련 데이터세트를 보강합니다. 훈련 데이터세트에서 중복 레코드를 제거합니다. 계층화된 샘플링을 구현합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 과적합 — 훈련 정확도 높음(99%), 검증 정확도 낮음(82%)\n▸ 드롭아웃(Dropout) — 과적합 완화\n▸ 정규화(L1/L2) — 가중치 제약\n▸ 교차 검증(k-fold) — 과적합 감지\n\n【정답 포인트】\n▸ 과적합 직접 해결 — Dropout + 정규화\n▸ 교차 검증으로 검증\n▸ 모두 과적합 완화 기법\n\n【오답 체크】\n(A) 복잡도 증가 — 과적합 악화\n(C) 특징 축소 — 부분적 해결, dropout 없음\n(D) 데이터 보강 — 불충분\n\n【시험 포인트】\n훈련/검증 정확도 차이 큼 → 과적합 → Dropout + 정규화",
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
    "question": "회사가 매일 고객 데이터를 수집합니다. 회사는 데이터를 날짜별로 분할된 Amazon S3 버킷에 압축된 파일로 저장합니다. 매월 분석가가 데이터를 다운로드하고 데이터를 처리하여 데이터 품질을 확인한 후 데이터를 Amazon QuickSight 대시보드에 업로드합니다. ML 엔지니어가 QuickSight로 전송되기 전에 데이터 품질을 자동으로 확인하는 솔루션을 구현해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "매월 AWS Glue 크롤러를 실행하여 AWS Glue Data Catalog를 업데이트합니다. AWS Glue Data Quality 규칙을 사용하여 데이터 품질을 확인합니다.",
      "B": "AWS Glue 트리거를 사용하여 매월 AWS Glue 크롤러를 실행합니다. AWS Glue 데이터를 PySpark DataFrame으로 로드하는 작업을 만듭니다. 작업을 구성하여 사용자 정의 함수를 적용하고 데이터 품질을 평가합니다.",
      "C": "AWS Lambda 함수에서 Python 스크립트를 매월 실행하여 데이터 품질을 평가합니다. S3 버킷을 구성하여 객체가 S3 버킷에 추가될 때 Lambda 함수를 호출합니다.",
      "D": "S3 버킷을 구성하여 객체가 업로드될 때 Amazon Simple Queue Service(Amazon SQS) 큐로 이벤트 알림을 보냅니다. 매월 SQS 큐에 대해 Amazon CloudWatch Insights를 사용하여 데이터 품질을 평가합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Glue Data Quality — 데이터 품질 규칙 자동 검증\n▸ Glue Data Catalog — 메타데이터 관리\n▸ Glue Crawler — 스키마 자동 감지\n▸ 최소 운영 부담\n\n【정답 포인트】\n▸ Glue Data Quality — 데이터 품질 자동 검증\n▸ Crawler — 스키마 업데이트\n▸ 최소 수동 개입\n\n【오답 체크】\n(B) Trigger + 커스텀 코드 — 복잡함\n(C) Lambda + S3 이벤트 — 매월 실행 아님\n(D) SQS + CloudWatch — 모니터링용, 품질 검증 아님\n\n【시험 포인트】\n자동 데이터 품질 검증 → Glue Data Quality + Crawler",
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
    "question": "회사가 Amazon SageMaker AI의 ML 모델을 가지고 있습니다. ML 엔지니어가 모델 피처의 입력 데이터 분포 변화를 자동으로 감지하는 모니터링 솔루션을 구현해야 합니다. 운영 부담이 가장 적은 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker Model Monitor를 구성합니다. 데이터 품질 기준선을 설정합니다. 기준선 제약 파일에서 emit_metrics 옵션이 활성화되었는지 확인합니다. 데이터 품질과 관련된 특정 메트릭의 변화를 알리도록 Amazon CloudWatch 경보를 구성합니다.",
      "B": "SageMaker Model Monitor를 구성합니다. 모델 품질 기준선을 설정합니다. 기준선 제약 파일에서 comparison_method 옵션이 Robust로 설정되었는지 확인합니다. 모델 품질 메트릭의 변화를 알리도록 Amazon CloudWatch 경보를 구성합니다.",
      "C": "맞춤형 규칙이 있는 SageMaker Debugger를 사용하여 피처 분포의 이동을 추적합니다. 규칙이 중요한 변화를 감지할 때 회사에 알리도록 Amazon CloudWatch 경보를 구성합니다.",
      "D": "Amazon CloudWatch를 사용하여 SageMaker AI 엔드포인트의 성능 메트릭을 직접 관찰합니다. 데이터 드리프트 또는 피처 분포 이동의 지표를 위해 CloudWatch 로그를 수동으로 분석합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Model Monitor 데이터 품질 기준선 — 입력 분포 모니터링\n▸ emit_metrics — 메트릭 수집 활성화\n▸ Data drift — 입력 데이터 분포 변화\n▸ CloudWatch 경보 — 자동 알림\n\n【정답 포인트】\n▸ 입력 데이터 분포 변화 감지 → 데이터 품질 기준선\n▸ emit_metrics 옵션 → 메트릭 자동 수집\n▸ CloudWatch 경보 → 자동 알림\n\n【오답 체크】\n(B) 모델 품질 기준선 — 출력 성능 모니터링, 입력 분포 아님\n(C) Debugger — 훈련 모니터링용\n(D) 수동 분석 — 자동화 아님\n\n【시험 포인트】\n입력 데이터 분포 모니터링 → Model Monitor + 데이터 품질",
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
    "question": "회사가 Amazon SageMaker AI를 사용하여 전자상거래 웹사이트용 새로운 추천 모델을 배포하고 있습니다. 모델은 모든 클라이언트 웹사이트 상호작용의 데이터를 입력으로 사용해야 합니다. 트래픽은 하루 종일 변합니다. 회사가 모델용 추론 엔드포인트를 만들어야 합니다. 이 요구사항을 충족하는 데 가장 비용 효율적인 추론 엔드포인트 유형은 무엇입니까?",
    "options": {
      "A": "배치 변환 추론 엔드포인트",
      "B": "비동기 추론 엔드포인트",
      "C": "실시간 추론 엔드포인트",
      "D": "서버리스 추론 엔드포인트"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Serverless inference endpoint — 수요에 따라 자동 스케일링\n▸ Real-time endpoint — 고정 리소스, 변동 트래픽에 비효율\n▸ 변동 트래픽(Variable traffic)\n▸ 비용 효율성\n\n【정답 포인트】\n▸ 변동 트래픽 → 유휴 리소스 낭비\n▸ Serverless — 필요한 만큼만 비용\n▸ 자동 스케일링 + 자동 축소\n\n【오답 체크】\n(A) Batch transform — 일괄 처리용\n(B) Asynchronous — 비동기용\n(C) Real-time — 고정 비용\n\n【시험 포인트】\n변동 트래픽 + 비용 최적화 → Serverless endpoint",
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
    "question": "회사가 새로 만든 VPC의 공개 서브넷에서 Amazon SageMaker AI 도메인을 실행합니다. 네트워크가 제대로 구성되었으며 ML 엔지니어가 SageMaker AI 도메인에 액세스할 수 있습니다. 최근에 회사가 특정 IP 주소의 도메인으로 의심스러운 트래픽을 발견했습니다. 회사가 특정 IP 주소의 트래픽을 차단해야 합니다. 이 요구사항을 충족하는 네트워크 구성 업데이트는 무엇입니까?",
    "options": {
      "A": "특정 IP 주소의 트래픽을 거부하는 보안 그룹 인바운드 규칙을 만듭니다. 보안 그룹을 도메인에 할당합니다.",
      "B": "특정 IP 주소의 트래픽을 거부하는 네트워크 ACL 인바운드 규칙을 만듭니다. 규칙을 도메인이 위치한 서브넷의 기본 네트워크 ACL에 할당합니다.",
      "C": "도메인용 shadow 변형을 만듭니다. SageMaker Inference Recommender를 구성하여 특정 IP 주소의 트래픽을 shadow 엔드포인트로 보냅니다.",
      "D": "특정 IP 주소의 인바운드 트래픽을 거부하는 VPC 라우팅 테이블을 만듭니다. 라우팅 테이블을 도메인에 할당합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Network ACL — 서브넷 수준 방화벽 (명시적 거부 가능)\n▸ Security Group — 인스턴스 수준 방화벽 (명시적 거부 불가)\n▸ 공개 서브넷 → 외부 접근 가능\n▸ 특정 IP 차단 → 명시적 거부\n\n【정답 포인트】\n▸ Network ACL만 명시적 거부(Deny) 규칙 지원\n▸ Security Group은 Allow 규칙만 가능\n▸ 서브넷 수준 차단\n\n【오답 체크】\n(A) Security Group — 거부 규칙 미지원\n(C) Shadow variant — 트래픽 차단 아님\n(D) Route table — IP 기반 차단 불가\n\n【시험 포인트】\n특정 IP 거부 → Network ACL 명시적 거부",
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
    "question": "회사의 ML 엔지니어가 분류 모델을 만들고 있습니다. ML 엔지니어가 데이터세트를 탐색하고 day_of_week라는 열을 발견했습니다. 열의 데이터는 다음 값으로 구성됩니다: 월요일, 화요일, 수요일, 목요일, 금요일, 토요일 및 일요일. ML 엔지니어가 이 열의 데이터를 이진 값으로 변환하기 위해 어떤 기술을 사용해야 합니까?",
    "options": {
      "A": "이진 인코딩(Binary encoding)",
      "B": "레이블 인코딩(Label encoding)",
      "C": "원-핫 인코딩(One-hot encoding)",
      "D": "토큰화(Tokenization)"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 원-핫 인코딩(One-hot encoding) — 범주 변수를 이진 벡터로 변환\n▸ 이진 인코딩 — 이진수로 변환 (순서 정보 암시)\n▸ 레이블 인코딩 — 정수로 변환 (순서 정보 암시)\n▸ 7개 범주 (월~일)\n\n【정답 포인트】\n▸ 7개 비서열 범주 → 원-핫 인코딩\n▸ 순서 없는 주중 데이터\n▸ 각 날짜를 이진 벡터로 표현\n\n【오답 체크】\n(A) 이진 인코딩 — 이진수 표현, 원-핫 아님\n(B) 레이블 인코딩 — 순서 암시\n(D) 토큰화 — 텍스트 분석용\n\n【시험 포인트】\n비서열 범주 변수 → 원-핫 인코딩",
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
    "question": "ML 엔지니어가 Amazon SageMaker AI를 사용하여 훈련용 데이터를 준비하려고 합니다. 탐색적 데이터 분석 중에 ML 엔지니어가 여러 범주형 피처가 값을 놓치고 있다는 것을 알았습니다. ML 엔지니어가 SageMaker AI를 사용하여 이 문제를 어떻게 해결할 수 있습니까?",
    "options": {
      "A": "SageMaker Clarify를 사용하여 범주형 피처를 평균값으로 대체합니다.",
      "B": "SageMaker Clarity를 사용하여 범주형 피처를 모드 값으로 대체합니다.",
      "C": "SageMaker Data Wrangler를 사용하여 범주형 피처를 평균값으로 대체합니다.",
      "D": "SageMaker Data Wrangler를 사용하여 범주형 피처를 모드 값으로 대체합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Data Wrangler — 데이터 변환 도구\n▸ Clarify — 모델 해석력 및 편향 분석\n▸ 모드(Mode) — 범주형 데이터의 최빈값\n▸ 평균(Mean) — 숫자 데이터\n\n【정답 포인트】\n▸ 범주형 결측값 → 모드(최빈값)\n▸ Data Wrangler — 데이터 변환\n▸ 평균은 숫자 데이터용\n\n【오답 체크】\n(A, B) Clarify — 데이터 변환이 아닌 해석력\n(C) 평균 대체 — 범주형 부적합\n\n【시험 포인트】\n범주형 결측값 + Data Wrangler → 모드 대체",
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
    "question": "회사가 AWS 계정 A의 Amazon S3 버킷에 사용자 클릭스트림 데이터를 저장합니다. 회사가 AWS 계정 B의 Amazon SageMaker AI에서 ML 모델을 훈련하기 위해 데이터를 사용해야 합니다. 훈련에는 10일이 걸립니다. 회사가 훈련에서 프라이빗 IP 주소만 사용해야 합니다. 회사는 또한 훈련 메타데이터가 AWS와 공유되지 않도록 해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "계정 A와 B 간 VPC 피어링을 설정합니다. 메타데이터 수집을 거부하려면 AWS에 이메일로 문의합니다.",
      "B": "S3 버킷용 VPC 엔드포인트를 설정합니다. SageMaker AI 훈련 작업에서 OPT_OUT_TRACKING 환경 변수를 1로 설정합니다.",
      "C": "계정 A의 S3 버킷에 할당된 보안 그룹 정책을 구성하여 계정 B의 액세스만 허용합니다. AI 서비스 거부 정책을 만듭니다.",
      "D": "저장된 객체에 대해 만료 시간이 있는 사전 서명된 URL을 생성합니다. 사전 서명된 URL을 사용하여 데이터에 액세스합니다. SageMaker AI 훈련 작업에서 OPT_OUT_TRACKING 환경 변수를 1로 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ VPC endpoint — 프라이빗 IP 연결\n▸ OPT_OUT_TRACKING — 메타데이터 수집 거부\n▸ 크로스 계정 접근\n▸ 10일 훈련 기간\n\n【정답 포인트】\n▸ VPC endpoint — 프라이빗 IP 유지\n▸ OPT_OUT_TRACKING — 메타데이터 안내\n▸ 환경 변수 설정 → 프로그래밍 가능\n\n【오답 체크】\n(A) VPC 피어링 — 끝점 설정 필요, 이메일 거부 미흡\n(C) 보안 그룹 — S3에 직접 적용 불가, \"AI 서비스\" 정책 불명확\n(D) 사전 서명 URL — 만료 문제, 10일 훈련 중 만료 위험\n\n【시험 포인트】\n크로스 계정 + 프라이빗 + 메타데이터 거부 → VPC endpoint + OPT_OUT_TRACKING",
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
    "question": "음악 스트리밍 회사가 애플리케이션에서 Amazon S3 버킷으로 노래 평가를 지속적으로 스트리밍합니다. 회사가 평가를 Amazon SageMaker AI 모델의 훈련 및 추론 입력으로 사용하려고 합니다. 회사는 S3 버킷을 소스로 구성된 AWS Glue Data Catalog를 가지고 있습니다. ML 엔지니어가 이 데이터에 대한 저장소를 만들기 위한 솔루션을 구현해야 합니다. 솔루션은 배치 훈련 및 실시간 추론 중에 데이터가 동기화 상태로 유지되는지 확인해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "S3 버킷에서 SageMaker Feature Store로 데이터를 수집합니다. 태그 및 인덱스를 적용합니다.",
      "B": "Amazon Athena를 사용합니다. CREATE TABLE AS SELECT(CTAS) 쿼리를 사용하여 데이터를 그룹화할 테이블을 만듭니다.",
      "C": "AWS Lake Formation을 사용합니다. 데이터에 태그 기반 제어를 적용합니다.",
      "D": "SageMaker Data Wrangler의 Generate Data Insights 함수를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ SageMaker Feature Store — 훈련/추론 간 동기화된 피처 저장소\n▸ 실시간 및 배치 기능 지원\n▸ 자동 동기화\n▸ 태그/인덱스 지원\n\n【정답 포인트】\n▸ Feature Store — 배치/실시간 동기화\n▸ 훈련/추론 데이터 일관성 보장\n▸ 스트리밍 데이터 수집 지원\n\n【오답 체크】\n(B) Athena — 쿼리 엔진, 동기화 저장소 아님\n(C) Lake Formation — 데이터 거버넌스\n(D) Data Wrangler — 데이터 분석\n\n【시험 포인트】\n배치/실시간 동기화 저장소 → SageMaker Feature Store",
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
    "question": "병원이 X선 결과를 검증하는 ML 모델을 사용하고 있습니다. 병원은 매일 밤 배치 추론 작업을 실행합니다. 병원이 모델 데이터 품질 및 모델 성능에 대한 일일 보고서를 생성해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon SageMaker Model Monitor에서 모니터링 작업을 예약합니다. 모델 및 데이터의 모니터링 결과를 생성합니다.",
      "B": "야간 배치 추론 작업의 처리 단계에 대한 메트릭이 포함된 Amazon CloudWatch 대시보드를 만듭니다. 기준선 리소스 메트릭과 비교합니다. 대시보드 링크를 공유합니다.",
      "C": "AWS Glue DataBrew를 사용하여 모델 파일에 대한 Numerical Statistics 데이터 품질 검사를 사용하는 커스텀 레시피 작업을 만듭니다. 결과를 생성합니다.",
      "D": "모니터링 작업을 실행하는 QualityCheck 단계를 포함하는 SageMaker AI 파이프라인을 만듭니다. 모델 및 데이터의 모니터링 결과를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Model Monitor — 배포된 모델 모니터링\n▸ Scheduled job — 매일 밤 자동 실행\n▸ 일일 보고서\n▸ 데이터 품질 + 모델 성능\n\n【정답 포인트】\n▸ Model Monitor 예약 작업 → 자동 매일 실행\n▸ 데이터 품질 및 모델 성능 메트릭\n▸ 시각화된 결과\n\n【오답 체크】\n(B) CloudWatch — 수동 대시보드\n(C) DataBrew — 데이터 정제용\n(D) Pipeline — 더 복잡함\n\n【시험 포인트】\n배치 추론 + 일일 모니터링 보고서 → Model Monitor 예약",
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
    "question": "회사가 Amazon SageMaker Data Wrangler에 데이터 소스에서 데이터를 수집해야 합니다. 데이터 소스는 Amazon S3, Amazon Redshift 및 Snowflake입니다. 수집된 데이터는 항상 소스 시스템의 최신 변경 사항으로 최신이어야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "직접 연결을 사용하여 데이터 소스에서 Data Wrangler로 데이터를 가져옵니다.",
      "B": "카탈로그된 연결을 사용하여 데이터 소스에서 Data Wrangler로 데이터를 가져옵니다.",
      "C": "AWS Glue를 사용하여 데이터 소스에서 데이터를 추출합니다. AWS Glue를 사용하여 데이터를 직접 Data Wrangler로 가져옵니다.",
      "D": "AWS Lambda를 사용하여 데이터 소스에서 데이터를 추출합니다. Lambda를 사용하여 데이터를 직접 Data Wrangler로 가져옵니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Cataloged connection — 메타데이터 기반 연결, 자동 업데이트\n▸ Direct connection — 일회성 연결\n▸ 최신 데이터 유지\n▸ 다중 소스\n\n【정답 포인트】\n▸ Cataloged connection — 메타데이터 관리, 자동 동기화\n▸ 여러 데이터 소스 통합\n▸ 항상 최신 상태 유지\n\n【오답 체크】\n(A) Direct — 일회성 연결, 자동 업데이트 아님\n(C) Glue 추출 → Data Wrangler — 추가 단계\n(D) Lambda 커스텀 — 복잡함\n\n【시험 포인트】\n다중 소스 + 자동 동기화 → Cataloged connection",
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
    "question": "ML 엔지니어가 가져온 데이터세트에서 Amazon SageMaker Canvas를 사용하여 커스텀 ML 모델을 구축하고 있습니다. ML 엔지니어가 모델이 10년간의 데이터를 기반으로 연속 숫자 예측을 하기를 원합니다. ML 엔지니어가 모델의 성능을 평가하기 위해 어떤 메트릭을 사용해야 합니까?",
    "options": {
      "A": "정확도(Accuracy)",
      "B": "추론 지연(InferenceLatency)",
      "C": "ROC 곡선 아래의 영역(Area Under the ROC Curve, AUC)",
      "D": "제곱 평균 제곱근 오차(Root mean square error, RMSE)"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ RMSE — 회귀 모델 평가 메트릭\n▸ 정확도(Accuracy) — 분류 메트릭\n▸ AUC — 분류 메트릭\n▸ 연속 숫자 예측(Regression)\n\n【정답 포인트】\n▸ 연속 숫자 예측 → 회귀 문제\n▸ RMSE — 회귀 모델 성능 평가\n▸ 예측 오차를 제곱 근으로 표현\n\n【오답 체크】\n(A) 정확도 — 분류용\n(B) 추론 지연 — 성능이 아닌 속도\n(C) AUC — 분류용\n\n【시험 포인트】\n연속 숫자 예측(회귀) → RMSE",
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
    "question": "회사가 두 개의 새로운 ML 모델을 구축, 훈련 및 조정했습니다: • 모델 A는 IP 주소, 위치 및 사용자 자격 증명을 기반으로 거래가 사기인지 감지합니다. 이 모델은 거래가 발생할 때마다 액세스됩니다. • 모델 B는 역사적 판매 데이터를 기반으로 다음 달의 판매 합계를 예측합니다. 이 모델은 매달 한 번 액세스됩니다. 회사가 Amazon SageMaker AI를 사용하여 두 모델을 프로덕션에 배포해야 합니다. 회사가 이 요구사항을 충족하기 위해 모델에 어떤 호스팅 솔루션을 사용해야 합니까?",
    "options": {
      "A": "두 모델을 한 컨테이너에 호스팅하고 하나의 실시간 엔드포인트 뒤에 호스팅합니다.",
      "B": "모델 A를 비동기 엔드포인트와 함께 호스팅합니다. 모델 B를 실시간 엔드포인트와 함께 호스팅합니다.",
      "C": "모델 A를 실시간 엔드포인트와 함께 호스팅합니다. 모델 B에 배치 변환을 사용합니다.",
      "D": "모델 A에 배치 변환을 사용합니다. 모델 B를 비동기 엔드포인트와 함께 호스팅합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 모델 A — 실시간 필요 (매 거래마다)\n▸ 모델 B — 배치 처리 (월 1회)\n▸ 비동기 — 장시간 처리\n▸ 배치 변환 — 일괄 처리\n\n【정답 포인트】\n▸ 모델 A: 높은 빈도 → 실시간 엔드포인트\n▸ 모델 B: 저빈도 → 배치 변환\n▸ 각 모델의 사용 패턴에 최적화\n\n【오답 체크】\n(A) 컨테이너 조합 — 불필요\n(B) 비동기 — 거래 실시간 처리 부적합\n(D) 반대 할당\n\n【시험 포인트】\n실시간(높은 빈도) + 배치(저빈도) → 실시간 + 배치 변환",
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
    "question": "은행이 Amazon SageMaker AI를 사용하여 새 상품 자격 여부를 판단할 ML 모델을 만들어야 합니다. 은행이 SageMaker AI가 직접 지원하는 알고리즘을 사용해야 합니다. 모델이 은행의 규제 기관에 설명 가능해야 합니다. 이 요구사항을 충족하는 모델링 접근 방식은 무엇입니까?",
    "options": {
      "A": "Object2Vec 알고리즘을 사용하여 모델을 훈련합니다.",
      "B": "선형 학습자(linear learner) 알고리즘을 사용하여 모델을 훈련합니다.",
      "C": "신경망을 훈련합니다.",
      "D": "k-평균 알고리즘을 사용하여 모델을 훈련합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Linear learner — 해석 가능한 선형 모델\n▸ 설명 가능성 — 규제 요구\n▸ Object2Vec — 임베딩\n▸ 신경망 — 블랙박스\n\n【정답 포인트】\n▸ Linear learner — 계수 해석 가능\n▸ 규제 기관에 설명 용이\n▸ SageMaker 내장 알고리즘\n\n【오답 체크】\n(A) Object2Vec — 임베딩 학습, 설명 곤란\n(C) 신경망 — 블랙박스, 설명 곤란\n(D) k-means — 비지도, 분류 아님\n\n【시험 포인트】\n설명 가능한 분류 → Linear learner",
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
    "question": "회사가 Amazon SageMaker AI에서 새로운 ML 모델을 훈련하기 위해 데이터를 준비하고 있습니다. 데이터가 ML 훈련에 사용되지 않았습니다. 데이터에는 중복 항목이 있고 일부 값이 누락되었습니다. 회사가 데이터 품질을 높이고 데이터에서 통계적 편향을 감지해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker Clarify를 사용하여 데이터 품질 규칙을 만듭니다. SageMaker Model Monitor를 사용하여 편향을 감지합니다.",
      "B": "SageMaker Data Wrangler를 사용하여 데이터 품질 규칙을 만듭니다. SageMaker Clarify를 사용하여 편향을 감지합니다.",
      "C": "SageMaker Debugger를 사용하여 데이터 품질 규칙을 만듭니다. SageMaker Model Monitor를 사용하여 편향을 감지합니다.",
      "D": "SageMaker Model Monitor를 사용하여 데이터 품질 규칙을 만듭니다. SageMaker Clarify를 사용하여 편향을 감지합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Data Wrangler — 데이터 품질 규칙 및 변환\n▸ Clarify — 편향 감지 및 해석력\n▸ Model Monitor — 배포 후 모니터링\n▸ Debugger — 훈련 중 문제 감지\n\n【정답 포인트】\n▸ Data Wrangler — 데이터 정제 및 품질\n▸ Clarify — 통계적 편향 감지\n▸ 훈련 전 데이터 준비 흐름\n\n【오답 체크】\n(A) Clarify — 품질 규칙 아님\n(C) Debugger — 훈련 중 모니터링\n(D) Model Monitor — 배포 후 모니터링\n\n【시험 포인트】\n데이터 준비 + 품질 + 편향 → Data Wrangler + Clarify",
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
    "question": "ML 엔지니어가 주택 및 아파트 가격을 예측하는 모델을 구축하고 있습니다. 모델은 3개의 피처를 사용합니다: 평방미터, 가격 및 건물의 나이입니다. 데이터세트에는 10,000개의 데이터 행이 있습니다. 데이터에는 한 개의 대형 저택과 매우 작은 아파트에 대한 데이터 포인트가 포함됩니다. ML 엔지니어가 전형적인 주택 또는 아파트에 대해 모델이 정확한 예측을 생성하도록 데이터세트에 전처리를 수행해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "이상치를 제거하고 Square Meters 변수에 대해 로그 변환을 수행합니다.",
      "B": "이상치를 유지하고 Square Meters 변수에 대해 정규화를 수행합니다.",
      "C": "이상치를 제거하고 Square Meters 변수에 대해 원-핫 인코딩을 수행합니다.",
      "D": "이상치를 유지하고 Square Meters 변수에 대해 원-핫 인코딩을 수행합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 이상치(Outliers) — 매우 크거나 작은 값\n▸ 로그 변환(Log transformation) — 비선형 스케일링, 이상치 영향 완화\n▸ 정규화(Normalization) — 스케일 조정\n▸ 원-핫 인코딩 — 범주형 변수\n\n【정답 포인트】\n▸ 이상치 제거 — 전형적 패턴 중심\n▸ 로그 변환 — 비정규 분포 정규화\n▸ 회귀 모델 성능 향상\n\n【오답 체크】\n(B) 이상치 유지 — 전형적 예측 부정확\n(C, D) 원-핫 인코딩 — 숫자 변수 부적합\n\n【시험 포인트】\n이상치 + 수치형 변수 → 제거 + 로그 변환",
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
    "question": "한 회사가 Amazon SageMaker를 사용하여 ML 모델을 개발하고 있습니다. 회사는 모델의 편향(bias)을 모니터링하고 결과를 대시보드에 표시해야 합니다. ML 엔지니어가 편향 모니터링 작업을 생성했습니다. ML 엔지니어는 대시보드에 표시할 편향 메트릭을 어떻게 수집해야 합니까?",
    "options": {
      "A": "SageMaker Clarify에서 AWS CloudTrail 메트릭을 캡처합니다.",
      "B": "SageMaker Clarify에서 Amazon CloudWatch 메트릭을 캡처합니다.",
      "C": "Amazon EventBridge에서 SageMaker Model Monitor 메트릭을 캡처합니다.",
      "D": "Amazon SNS에서 SageMaker Model Monitor 메트릭을 캡처합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SageMaker Clarify — 모델 편향 및 설명성 모니터링 도구\n▸ CloudWatch — AWS 메트릭 수집 및 모니터링 서비스\n▸ CloudTrail — API 호출 감사 로그\n▸ EventBridge — 이벤트 기반 라우팅 서비스\n\n【정답 포인트】\n▸ SageMaker Clarify는 편향 모니터링 작업 결과를 CloudWatch 메트릭으로 자동 전송\n▸ CloudWatch는 대시보드에서 메트릭을 시각화하는 표준 방식\n▸ 편향 메트릭 모니터링은 CloudWatch와의 native 통합 사용\n\n【오답 체크】\n(A) CloudTrail은 API 감사 로그용이며, 편향 메트릭을 저장하지 않음\n(C) EventBridge는 이벤트 라우팅용이지 메트릭 저장소가 아님\n(D) SNS는 알림 서비스이며, 메트릭 저장소가 아님\n\n【시험 포인트】\nClarify → CloudWatch는 SageMaker 모니터링의 표준 패턴",
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
    "question": "한 회사가 포트홀로 인한 교통사고를 예측하기 위해 Amazon SageMaker AI ML 모델을 사용하고 있습니다. ML 엔지니어가 SageMaker Model Monitor를 SageMaker AI 파이프라인의 일부로 실행하도록 구성했습니다. MonitoringExecution 출력에서 ML 엔지니어는 파이프라인을 실패하게 하는 여러 baseline_drift_check 위반을 관찰합니다. ML 엔지니어가 이 문제를 해결하기 위해 무엇을 해야 합니까?",
    "options": {
      "A": "새로운 SageMaker AI 훈련 작업을 사용하여 모델을 재훈련합니다. SageMaker Debugger를 사용하여 오류를 확인합니다.",
      "B": "새로운 훈련 데이터로 모델을 재훈련합니다. Model Monitor에서 원본 baseline을 재사용합니다.",
      "C": "새로운 훈련 데이터로 모델을 재훈련합니다. Model Monitor에서 새로운 baseline을 사용합니다.",
      "D": "baseline 제약 파일에서 emit_metrics 옵션을 활성화한 후 SageMaker AI 파이프라인을 다시 실행합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ baseline_drift_check — 프로덕션 데이터와 훈련 데이터의 분포 차이 감지\n▸ Model Monitor — 모델 성능 모니터링 도구\n\n【정답 포인트】\n▸ 새 데이터로 재훈련 시 새로운 baseline 필요\n▸ 기존 baseline은 오래된 데이터에 기반\n\n【오답 체크】\n(A) Debugger는 훈련 오류 분석용, drift 문제 해결 안 함\n(B) 원본 baseline으로는 새 데이터 편차 감지 불가\n(D) emit_metrics는 metric 수집 설정, drift 해결 안 함\n\n【시험 포인트】\nData Drift → 새 Baseline 설정",
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
    "question": "한 회사가 거래가 부정행위인지 예측하기 위해 ML 모델을 사용합니다. 회사는 가능한 많은 부정거래를 식별해야 합니다. 회사가 이 요구사항을 충족하기 위해 모델을 평가할 때 사용해야 할 평가 메트릭은 무엇입니까?",
    "options": {
      "A": "F1 점수",
      "B": "ROC 곡선 아래 영역(AUC)",
      "C": "정확도(Precision)",
      "D": "재현율(Recall)"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Recall — TP / (TP + FN) = 실제 양성 중 올바르게 식별한 비율\n▸ Precision — TP / (TP + FP) = 예측한 양성 중 실제 양성 비율\n\n【정답 포인트】\n▸ 가능한 많은 부정거래 식별 = 놓치지 않아야 함\n▸ Recall 높음 = False Negative 최소화\n\n【오답 체크】\n(A) F1은 정확도와 재현율 조화평균\n(B) AUC는 균형잡힌 평가 지표\n(C) Precision은 오탐지 중심, 부정거래 놓칠 수 있음\n\n【시험 포인트】\n놓치지 않기 → Recall 최대화",
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
    "question": "추천 모델이 ML을 사용하고 Amazon SageMaker AI 엔드포인트를 호출하여 추천을 받습니다. ML 엔지니어는 예상되는 사용자 트래픽 증가 동안 모델이 가용성을 유지하도록 해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker AI 엔드포인트에서 자동 스케일링을 구성합니다.",
      "B": "새로운 SageMaker AI 엔드포인트를 생성합니다. 새 엔드포인트에 모델을 배포합니다.",
      "C": "SageMaker Neo를 사용하여 추론을 위해 모델을 최적화합니다.",
      "D": "Auto Scaling 그룹을 SageMaker AI 엔드포인트에 연결합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Auto Scaling — 트래픽에 따라 인스턴스 수 자동 조절\n▸ Target Tracking — 목표 메트릭 기반 자동 스케일링\n\n【정답 포인트】\n▸ SageMaker 엔드포인트 자체 Auto Scaling 기능 있음\n▸ 트래픽 증가에 자동 대응\n\n【오답 체크】\n(B) 새 엔드포인트 생성은 번거로움, 자동 아님\n(C) Neo는 모델 최적화, 스케일링 아님\n(D) EC2 Auto Scaling Group은 SageMaker와 별개\n\n【시험 포인트】\n트래픽 급증 → SageMaker Auto Scaling",
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
    "question": "ML 엔지니어가 Amazon SageMaker AI를 사용하여 ML 모델을 훈련했습니다. ML 엔지니어는 모델이 과적합되어 있으며 훈련 데이터에 불필요한 특성이 포함되어 있다고 판단합니다. ML 엔지니어는 과적합과 불필요한 특성의 영향을 줄여야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "훈련 반복 횟수를 증가합니다. 모델을 재훈련합니다.",
      "B": "훈련 데이터에 L1 정규화를 적용합니다. 모델을 재훈련합니다.",
      "C": "훈련 반복 횟수를 감소합니다. 모델을 재훈련합니다.",
      "D": "실행 중인 모델에 L1 정규화를 적용하기 위해 SageMaker Debugger를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ L1 정규화 — 가중치를 0으로 수렴하게 하여 특성 선택\n▸ 과적합 — 훈련 데이터에 과도하게 학습\n\n【정답 포인트】\n▸ L1은 불필요한 특성 계수를 0으로 만듦\n▸ 특성 선택과 정규화 동시 달성\n\n【오답 체크】\n(A) 반복 증가는 과적합 악화\n(C) 반복 감소도 특성 선택 달성 못함\n(D) Debugger는 훈련 후 프로파일링, 정규화 미적용\n\n【시험 포인트】\n과적합 + 특성 선택 → L1 정규화",
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
    "question": "ML 엔지니어가 Amazon SageMaker Data Wrangler를 사용하여 데이터셋에 전처리를 수행하려고 합니다. ML 엔지니어는 처리된 데이터셋을 사용하여 분류 모델을 훈련하려고 합니다. 전처리 중에 ML 엔지니어는 텍스트 특성이 철자 오류로만 다른 수천 개의 값을 가지고 있음을 알아챕니다. ML 엔지니어는 전처리가 완료된 후 텍스트 특성을 모델 훈련에 사용할 수 있도록 인코딩 방법을 적용해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "특성의 카테고리를 나타내기 위해 서수 인코딩을 수행합니다.",
      "B": "특성의 카테고리를 나타내기 위해 유사도 인코딩을 수행합니다.",
      "C": "특성의 카테고리를 나타내기 위해 원-핫 인코딩을 수행합니다.",
      "D": "특성의 카테고리를 나타내기 위해 대상 인코딩을 수행합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Similarity Encoding — 철자 오류/오타 같은 유사 값 그룹화\n▸ 문자 거리(Levenshtein) — 문자열 유사도 측정\n\n【정답 포인트】\n▸ 철자 오류로만 다른 값들 → 유사도 인식 필요\n▸ 수천 개 → 원-핫 생성할 수 없음\n\n【오답 체크】\n(A) 서수는 순서 있는 카테고리용\n(C) 원-핫은 희소 행렬 생성, 수천 개 불가\n(D) 대상은 타겟 변수 활용, 철자 오류 처리 안 함\n\n【시험 포인트】\n철자 오류 유사값 → Similarity Encoding",
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
    "question": "ML 엔지니어가 Amazon SageMaker AI에서 텍스트 생성 모델을 훈련하고 있습니다. 여러 에포크 후 손실 함수가 수렴하지 않으며 검증 데이터셋에서 모델의 정확도가 진동하는 결과를 보입니다. ML 엔지니어는 모델이 일반화를 달성하도록 해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "학습률을 증가하고 미니배치 크기를 감소합니다.",
      "B": "에포크 수가 증가함에 따라 학습률을 증가합니다.",
      "C": "학습률을 감소하고 미니배치 크기를 증가합니다.",
      "D": "학습률을 감소하고 미니배치 크기를 감소합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 손실 함수 진동(oscillating) — 학습률 너무 높음\n▸ 미니배치 크기 — 그래디언트 추정 안정성\n\n【정답 포인트】\n▸ 학습률 ↓ = 수렴 안정화\n▸ 배치 ↑ = 그래디언트 추정 안정, 잡음 감소\n\n【오답 체크】\n(A) 학습률 ↑ 진동 악화\n(B) 학습률 증가는 불안정\n(D) 배치 ↓ + 학습률 ↓ = 너무 보수적\n\n【시험 포인트】\n진동 → 학습률 ↓ + 배치 ↑ = 안정화",
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
    "question": "한 회사가 NFS 기반 데이터 스토어를 사용하여 ML 훈련용 데이터를 저장합니다. Linux 기반 시스템이 데이터 스토어에 액세스합니다. 회사는 공유 데이터 스토어를 온프레미스 서버와 데이터를 사용할 Amazon SageMaker AI 노트북에 액세스할 수 있도록 하는 하이브리드 시스템이 필요합니다. 데이터 생산자를 위해 파일 잠금이 필요합니다. 이 요구사항을 충족할 AWS 스토리지 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터를 저장하기 위해 Amazon S3 버킷을 사용합니다. Amazon S3용 Mountpoint를 사용하여 S3 버킷을 온프레미스 서버와 SageMaker AI 노트북에 마운트합니다.",
      "B": "데이터를 저장하기 위해 Amazon Elastic File System(Amazon EFS) 파일 시스템을 사용합니다. 파일 시스템을 온프레미스 서버와 SageMaker AI 노트북에 마운트합니다.",
      "C": "데이터를 저장하기 위해 Amazon FSx for Lustre 파일 시스템을 사용합니다. 파일 시스템을 온프레미스 서버와 SageMaker AI 노트북에 마운트합니다.",
      "D": "데이터를 저장하기 위해 Amazon Elastic Block Store(Amazon EBS) 볼륨을 사용합니다. 볼륨을 온프레미스 서버와 SageMaker AI 노트북에 마운트합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ EFS — 여러 인스턴스에서 NFS 마운트 가능, 파일 잠금 지원\n▸ 하이브리드 — 온프레미스 + AWS 클라우드\n\n【정답 포인트】\n▸ NFS 기반 → EFS가 NFS 호환\n▸ 파일 잠금 → EFS 지원(잠금 메커니즘)\n▸ 온프레미스 + SageMaker 모두 마운트 가능\n\n【오답 체크】\n(A) S3는 파일 잠금 미지원, NFS 아님\n(C) FSx Lustre는 HPC/고성능 계산용\n(D) EBS는 단일 인스턴스 전용\n\n【시험 포인트】\nNFS + 파일 잠금 + 하이브리드 → EFS",
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
    "question": "한 회사가 Apache Parquet 형식으로 Amazon S3에 저장된 대규모 데이터셋을 분석해야 합니다. 회사는 일부 열에 대해 원-핫 인코딩을 사용하려고 합니다. 회사는 코드가 없는 솔루션이 필요합니다. 솔루션은 변환된 데이터를 모델 훈련을 위해 동일한 S3 버킷으로 다시 저장해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Glue DataBrew 프로젝트를 구성하여 데이터에 연결합니다. DataBrew 대화형 인터페이스를 사용하여 원-핫 인코딩 변환을 수행하는 레시피를 생성합니다. 작업을 생성하여 변환을 적용하고 S3 버킷에 출력을 작성합니다.",
      "B": "AWS Glue Data Catalog 테이블을 구성하여 데이터를 가리킵니다. Amazon Athena를 사용하여 원-핫 인코딩 변환을 수행하는 SQL 명령을 작성합니다. Athena를 구성하여 쿼리 결과를 S3 버킷에 다시 작성합니다.",
      "C": "AWS Glue Data Catalog 테이블을 구성하여 데이터를 가리킵니다. AWS Glue ETL 대화형 노트북을 생성합니다. 노트북을 사용하여 원-핫 인코딩 변환을 수행합니다. 구성된 셀을 실행하고 결과를 S3 버킷에 다시 작성합니다.",
      "D": "Amazon Redshift 클러스터를 구성하여 Redshift Spectrum을 사용하여 데이터에 액세스합니다. Amazon Redshift 내에서 원-핫 인코딩 변환을 수행하는 SQL 명령을 사용합니다. Amazon Redshift를 구성하여 결과를 S3 버킷에 다시 작성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ DataBrew — AWS의 시각적, 코드 없는 데이터 준비 도구\n▸ 레시피 — 재사용 가능한 변환 규칙\n\n【정답 포인트】\n▸ 코드 없음 → DataBrew 선택\n▸ 대화형 인터페이스로 쉬운 구성\n▸ 작업으로 자동화 가능\n\n【오답 체크】\n(B) Athena는 SQL 쿼리, 원-핫 인코딩 복잡\n(C) Glue ETL은 코드 필요(PySpark)\n(D) Redshift는 분석 데이터웨어하우스, 오버킬\n\n【시험 포인트】\n코드 없음 + 데이터 변환 → DataBrew",
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
    "question": "한 회사가 온프레미스 환경에서 Amazon SageMaker AI로 ML 모델을 마이그레이션하려고 합니다. 모델은 PyTorch 알고리즘을 기반으로 합니다. 회사는 AWS에서 가능한 한 많이 기존 사용자 정의 스크립트를 재사용해야 합니다. 이 요구사항을 충족하기 위해 회사가 사용해야 할 SageMaker AI의 기능은 무엇입니까?",
    "options": {
      "A": "SageMaker AI 기본 제공 알고리즘",
      "B": "SageMaker Canvas",
      "C": "SageMaker JumpStart",
      "D": "SageMaker AI 스크립트 모드"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Script Mode — 사용자 정의 훈련 스크립트 실행 가능\n▸ 프레임워크 컨테이너 — PyTorch, TensorFlow 지원\n\n【정답 포인트】\n▸ 기존 PyTorch 스크립트 재사용 가능\n▸ 최소 변경으로 AWS 이동\n▸ 사용자 정의 훈련 로직 유지\n\n【오답 체크】\n(A) 기본 제공은 사전 정의된 알고리즘\n(B) Canvas는 시각적 ML, 코드 기반 아님\n(C) JumpStart는 사전 훈련된 모델\n\n【시험 포인트】\n기존 스크립트 재사용 → Script Mode",
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
    "question": "한 회사가 Amazon QuickSight 대시보드를 사용하여 시간 경과에 따른 운동화의 판매 가격을 추적합니다. 대시보드는 많은 소매 웹사이트에서 스크래핑한 판매 가격을 집계합니다. 회사는 비정상적으로 높은 이상치인 가격을 결정하고 이상치를 시각적으로 표시하려고 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "세로 막대 차트를 사용하여 이상치를 시각화합니다. QuickSight의 계산된 필드를 사용하여 이상치 가격의 제곱근을 취하여 차트를 생성합니다. 맞춤형 AWS Lambda 함수를 구성하여 데이터를 검사하고 이상을 감지합니다.",
      "B": "AWS Glue DataBrew를 사용하여 데이터를 전처리합니다. REMOVE_OUTLIERS 작업을 설정하여 비정상적으로 높은 가격을 포함하는 데이터 행을 제거합니다. AWS Lambda 함수를 호출하여 제거된 행을 Amazon DynamoDB에 저장합니다.",
      "C": "세로 막대 차트를 사용하여 이상치를 시각화합니다. QuickSight의 계산된 필드를 사용하여 이상치 가격을 제곱하여 차트를 생성합니다. QuickSight 이상 감지 인사이트를 사용하여 비정상적으로 높은 가격을 결정합니다.",
      "D": "QuickSight 필터를 사용하여 운동화 가격의 최저 10개 값을 찾습니다. 최저 10개 값에 특정 색상을 할당합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ QuickSight Anomaly Detection — ML 기반 이상치 탐지\n▸ Calculated Field — 분석을 위한 파생 메트릭\n\n【정답 포인트】\n▸ QuickSight 자체 이상 감지 기능 활용\n▸ 시각화 + 분석 동시 해결\n▸ 맞춤 코드 불필요\n\n【오답 체크】\n(A) Lambda 함수는 과복잡, 제곱근도 의미 없음\n(B) 이상치 제거는 분석, 시각화 안 함\n(D) 최저값은 높은 이상치 감지 불가\n\n【시험 포인트】\n이상치 시각화 + 탐지 → QuickSight 이상 감지",
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
    "question": "ML 엔지니어가 Amazon QuickSight 이상 감지를 사용하여 정상과 비교하여 매우 높거나 매우 낮은 기계 작동 온도를 감지하고 있습니다. ML 엔지니어는 심각도 매개변수를 낮음 이상으로 설정합니다. ML 엔지니어는 방향 매개변수를 모두로 설정합니다. ML 엔지니어가 방향 매개변수를 예상보다 낮음으로 변경하면 이상 감지 결과에서 ML 엔지니어가 관찰할 영향은 무엇입니까?",
    "options": {
      "A": "이상 감지 빈도 증가 및 재현율 증가",
      "B": "이상 감지 빈도 감소 및 재현율 감소",
      "C": "이상 감지 빈도 증가 및 재현율 감소",
      "D": "이상 감지 빈도 감소 및 재현율 증가"
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Direction All — 높음과 낮음 모두 감지\n▸ Direction Lower — 예상보다 낮은 값만 감지\n\n【정답 포인트】\n▸ Direction 범위 축소 → 감지할 이상 감소\n▸ 재현율 = 실제 이상 중 감지한 비율 → 감소\n\n【오답 체크】\n(A) 범위 축소는 감지 빈도 감소\n(C) 범위 축소 시 빈도 감소\n(D) 재현율도 감소\n\n【시험 포인트】\n방향 범위 축소 → 감지율 및 재현율 모두 감소",
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
    "question": "한 회사가 온프레미스 Kubernetes 클러스터에서 ML 워크플로를 실행합니다. ML 워크플로는 ML 모델에 대해 훈련 및 추론을 수행하는 ML 서비스를 포함합니다. 각 ML 서비스는 자체 독립형 Docker 이미지에서 실행됩니다. 회사는 온프레미스 Kubernetes 클러스터에서 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터로 리프트 앤 시프트를 수행해야 합니다. 이 요구사항을 충족할 솔루션은 LEAST 운영 오버헤드로 무엇입니까?",
    "options": {
      "A": "ML 서비스를 Kubeflow에서 구성되도록 재설계합니다. 새로운 Kubeflow 관리 ML 서비스를 EKS 클러스터에 배포합니다.",
      "B": "Docker 이미지를 Amazon Elastic Container Registry(Amazon ECR) 리포지토리에 업로드합니다. 배포 파이프라인을 구성하여 이미지를 EKS 클러스터에 배포합니다.",
      "C": "훈련 데이터를 Amazon Redshift 클러스터로 마이그레이션합니다. 마이그레이션된 훈련 데이터에서 Amazon Redshift ML을 사용하여 모델을 재훈련합니다. 재훈련된 모델을 EKS 클러스터에 배포합니다.",
      "D": "Amazon SageMaker AI 노트북을 구성합니다. 동일한 코드로 모델을 재훈련합니다. 재훈련된 모델을 EKS 클러스터에 배포합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Lift and Shift — 기존 코드/이미지 최소 변경으로 이동\n▸ ECR — AWS의 컨테이너 레지스트리\n\n【정답 포인트】\n▸ Docker 이미지 그대로 재사용\n▸ 최소 재설계\n▸ 직접 배포 파이프라인 설정\n\n【오답 체크】\n(A) Kubeflow로 재설계 필요 = 오버헤드 증가\n(C) Redshift 마이그레이션 필요 = 복잡함\n(D) SageMaker 사용은 Kubernetes 아님\n\n【시험 포인트】\n기존 이미지 재사용 → ECR + EKS 배포",
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
    "question": "ML 엔지니어는 48~72시간이 걸릴 수 있는 월별로 집약적인 모델 훈련 작업을 실행해야 합니다. 훈련 작업은 중단되었다가 주요 문제 없이 다시 시작할 수 있습니다. ML 엔지니어는 고정 예산이 있으며 컴퓨팅 리소스를 최적화해야 합니다. 이 요구사항을 MOST 비용 효율적으로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "부분 선금으로 예약 인스턴스를 구매합니다.",
      "B": "약정 없이 온디맨드 인스턴스를 구매합니다.",
      "C": "Amazon SageMaker AI Savings Plans을 구매합니다.",
      "D": "자동화된 체크포인트를 사용하는 Spot 인스턴스를 구매합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Spot Instance — 온디맨드의 70~90% 저가\n▸ 체크포인트 — 중단 후 복구 가능\n\n【정답 포인트】\n▸ 중단 가능한 작업 → Spot 최적\n▸ 자동 체크포인트로 손실 방지\n▸ 최저 비용(70~90% 절감)\n\n【오답 체크】\n(A) 예약은 월별 작업에 과함\n(B) 온디맨드는 가장 비쌈\n(C) Savings Plan도 온디맨드 기반\n\n【시험 포인트】\n중단 가능 + 최저 비용 → Spot Instance",
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
    "question": "한 소매 회사가 고객을 위한 AI 기반 어시스턴트를 만들고 있습니다. 회사는 어시스턴트가 일반적인 문의에 사용해야 하는 대량의 설명서를 가지고 있습니다. 회사는 가격에 대한 응답이 1개월 미만인 설명서만 사용하기를 원합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "응답 개발을 위해 Amazon Q Business를 사용합니다. 가격에 대한 응답이 지난 달의 문서만 사용하도록 문서 속성 필터를 구성합니다.",
      "B": "응답 개발을 위해 Amazon Q Business를 사용합니다. 가격에 대한 응답이 지난 달의 문서만 사용하도록 출처 속성 인용을 구성합니다.",
      "C": "문서를 문서 생성 월을 기반으로 폴더로 분할합니다. 가격에 대한 응답을 위해 Amazon Q Developer를 구성하여 지난 달의 문서만 사용합니다.",
      "D": "문서를 문서 생성 월을 기반으로 폴더로 분할합니다. 가격에 대한 응답을 위해 어시스턴트에게 지난 달의 문서에만 액세스하도록 권한을 부여합니다. 응답을 개발하기 위해 Amazon Q Developer를 사용합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Q Business — RAG 기반 엔터프라이즈 QA\n▸ Document Attribute Filter — 문서 메타데이터 기반 필터\n\n【정답 포인트】\n▸ 속성 필터로 문서 시간 기반 선택\n▸ 가격 정보는 최신 문서만 사용\n▸ Q Business의 표준 기능\n\n【오답 체크】\n(B) 출처 인용은 문서 선택 필터 아님\n(C) Q Developer는 개발자용 코딩 어시스턴트\n(D) 폴더 분할은 수동, 속성 필터 아님\n\n【시험 포인트】\n조건부 문서 필터링 → 속성 필터",
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
    "question": "한 여행사가 사용자를 위한 다음 공항 목적지를 추천하는 ML 모델을 만들려고 합니다. 회사는 사용자 위치, 회사 웹사이트의 최근 검색 기록 및 2,000개의 사용 가능한 공항에 대한 수백만 개의 데이터 레코드를 수집했습니다. 데이터에는 고차원 희소 행렬이 필요한 여러 카테고리 특성과 대상 열이 있습니다. 회사는 Amazon SageMaker AI 기본 제공 알고리즘을 사용해야 합니다. ML 엔지니어는 원-핫 인코딩을 사용하여 카테고리 특성을 변환합니다. ML 엔지니어가 이 요구사항을 충족하기 위해 구현해야 할 알고리즘은 무엇입니까?",
    "options": {
      "A": "CatBoost 알고리즘을 사용하여 다음 공항 목적지를 추천합니다.",
      "B": "DeepAR 예측 알고리즘을 사용하여 다음 공항 목적지를 추천합니다.",
      "C": "Factorization Machines 알고리즘을 사용하여 다음 공항 목적지를 추천합니다.",
      "D": "k-means 알고리즘을 사용하여 사용자를 그룹으로 클러스터링합니다. 각 그룹을 사용자 검색 기록을 기반으로 다음 공항 목적지에 매핑합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Factorization Machines — 희소 고차원 카테고리 데이터 최적\n▸ 추천 시스템 — 특성 상호작용 중요\n\n【정답 포인트】\n▸ 고차원 희소 행렬(2000 공항) → FM\n▸ 원-핫 인코딩 후 → FM 처리 최적\n▸ 특성 교차 자동 학습\n\n【오답 체크】\n(A) CatBoost는 의사결정 트리, 희소 문제 약함\n(B) DeepAR은 시계열 예측\n(D) k-means는 비지도 클러스터링, 회귀 아님\n\n【시험 포인트】\n희소 고차원 추천 → Factorization Machines",
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
    "question": "ML 엔지니어가 Amazon SageMaker AI 엔드포인트 뒤에서 실행되는 모델의 추론 구성요소를 위해 자동 스케일링을 구성하고 있습니다. ML 엔지니어는 목표 추적 스케일링 정책이 분당 모델당 100개의 호출로 설정된 SageMaker AI 자동 스케일링을 구성합니다. SageMaker AI 엔드포인트는 정상적인 업무 시간 동안 적절하게 스케일링됩니다. 그러나 ML 엔지니어는 각 업무일의 시작 시점에 요청을 처리할 수 있는 사용 가능한 인스턴스가 0개여서 처리 지연이 발생함을 알아챕니다. ML 엔지니어는 업무일 시작 시점에 SageMaker AI 엔드포인트가 들어오는 요청을 처리할 수 있도록 해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "SageMaker AI 자동 스케일링 쿨다운 기간을 지원되는 최소값으로 줄입니다. 자동 스케일링 lifecycle hook을 추가하여 SageMaker AI 인스턴스를 스케일링합니다.",
      "B": "대상 메트릭을 CPU 사용률로 변경합니다.",
      "C": "스케일링 정책 대상 값을 1로 수정합니다.",
      "D": "Amazon CloudWatch 경보를 기반으로 스케일링하는 단계 스케일링 정책을 적용합니다. 두 번째 CloudWatch 경보와 스케일링 정책을 적용하여 업무일 시작 시 최소 인스턴스 수를 0에서 1로 스케일링합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Step Scaling Policy — CloudWatch 경보로 트리거\n▸ Scheduled Scaling — 시간 기반 미리 스케일\n\n【정답 포인트】\n▸ 업무일 시작 → 예측 가능한 시간\n▸ 최소값 0 → 수요 전 최소 1로\n▸ Step Policy + 정시 경보로 해결\n\n【오답 체크】\n(A) Lifecycle hook은 스케일링 속도 안 올림\n(B) CPU는 인스턴스 0일 때 호출 불가\n(C) 목표값 1은 비용 낭비, 정시 대응 아님\n\n【시험 포인트】\n정시 미리스케일 → 경보 기반 Step Policy",
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
    "question": "ML 엔지니어가 Amazon SageMaker Studio 노트북을 사용하여 추정기를 생성하여 신경망을 훈련하고 있습니다. 추정기는 1개 이상의 GPU가 있는 단일 인스턴스에서 분산 데이터 병렬(DDP)을 사용하는 Python 훈련 스크립트를 실행합니다. ML 엔지니어는 훈련 스크립트가 GPU 리소스를 충분히 활용하지 못하고 있음을 발견합니다. ML 엔지니어는 리소스 사용률을 최적화할 수 있는 훈련 스크립트의 지점을 식별해야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "시간 경과에 따른 GPU 사용률을 설명하는 보고서를 생성하기 위해 Amazon CloudWatch 메트릭을 사용합니다.",
      "B": "훈련 스크립트에 SageMaker Profiler 주석을 추가합니다. 스크립트를 실행하고 결과에서 보고서를 생성합니다.",
      "C": "시간 경과에 따른 GPU 사용률 및 GPU 메모리 사용률을 설명하는 보고서를 생성하기 위해 AWS CloudTrail을 사용합니다.",
      "D": "Amazon SageMaker Model Monitor에서 기본 모니터를 생성하고 baseline을 제시합니다. 모니터가 생성하는 제약 조건 및 통계에 따라 보고서를 생성합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SageMaker Profiler — 훈련 스크립트 성능 프로파일링\n▸ GPU 병목 감지 — 특정 지점 식별\n\n【정답 포인트】\n▸ Profiler가 코드 수준의 상세한 분석\n▸ 주석으로 관심 구간 지정\n▸ GPU 활용 저하 지점 정확히 파악\n\n【오답 체크】\n(A) CloudWatch는 고수준 메트릭만\n(C) CloudTrail은 API 감사, GPU 모니터링 안 함\n(D) Model Monitor는 배포 후 모니터링\n\n【시험 포인트】\n훈련 성능 상세 분석 → SageMaker Profiler",
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
    "question": "보험 회사의 ML 엔지니어가 매월 보험 정책 판매 수를 예측하기 위해 회귀 모델을 훈련합니다. 모델 훈련 후 ML 엔지니어는 Amazon SageMaker AI를 사용하여 추론을 위해 모델을 배포합니다. ML 엔지니어는 모델 예측을 모니터링하여 고객 행동의 변화가 있을 때 프로덕션 데이터 분포가 훈련 데이터 분포와 다른지 감지하려고 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "데이터 품질의 편차가 있는지 결정합니다.",
      "B": "모델 품질의 편차가 있는지 결정합니다.",
      "C": "모델 편향의 편차가 있는지 결정합니다.",
      "D": "특성 속성의 편차가 있는지 결정합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Data Drift — 프로덕션 데이터의 분포 변화\n▸ Model Drift — 모델 성능 저하\n\n【정답 포인트】\n▸ 프로덕션 ≠ 훈련 분포 → Data Drift\n▸ 고객 행동 변화 → 데이터 특성 변화\n▸ 데이터 품질 모니터링\n\n【오답 체크】\n(B) Model Quality는 예측 성능 저하\n(C) Bias는 공정성, 분포 변화 아님\n(D) Feature Attribution은 특성 중요도\n\n【시험 포인트】\n분포 변화 감지 → Data Drift 모니터링",
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
    "question": "한 회사가 Amazon SageMaker AI에서 ML 모델을 사용하는 내부 비용 추정 도구를 개발하고 있습니다. 사용자는 고해상도 이미지를 도구에 업로드합니다. 모델은 각 이미지를 처리하고 이미지의 개체 비용을 예측해야 합니다. 모델은 처리가 완료되면 사용자에게 알려야 합니다. 이 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "이미지를 Amazon S3 버킷에 저장합니다. SageMaker AI에 모델을 배포합니다. 모델 추론을 위해 배치 변환 작업을 사용합니다. 사용자에게 알리기 위해 Amazon Simple Queue Service(Amazon SQS) 큐를 사용합니다.",
      "B": "이미지를 Amazon S3 버킷에 저장합니다. SageMaker AI에 모델을 배포합니다. 모델 추론을 위해 비동기 추론 전략을 사용합니다. 사용자에게 알리기 위해 Amazon Simple Notification Service(Amazon SNS) 주제를 사용합니다.",
      "C": "이미지를 Amazon Elastic File System(Amazon EFS) 파일 시스템에 저장합니다. SageMaker AI에 모델을 배포합니다. 모델 추론을 위해 배치 변환 작업을 사용합니다. 사용자에게 알리기 위해 Amazon Simple Queue Service(Amazon SQS) 큐를 사용합니다.",
      "D": "이미지를 Amazon Elastic File System(Amazon EFS) 파일 시스템에 저장합니다. SageMaker AI에 모델을 배포합니다. 모델 추론을 위해 비동기 추론 전략을 사용합니다. 사용자에게 알리기 위해 Amazon Simple Notification Service(Amazon SNS) 주제를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Asynchronous Inference — 요청 후 나중에 결과 확인\n▸ SNS — 푸시 알림으로 완료 통지\n\n【정답 포인트】\n▸ 고해상도 이미지 → 처리 시간 필요\n▸ 사용자 완료 알림 → SNS 발행\n▸ S3에서 이미지 읽기 + 비동기 처리\n\n【오답 체크】\n(A) 배치는 스케줄 기반, 즉시 완료 알림 안 함\n(C) EFS는 온프레미스 스토리지, S3 권장\n(D) EFS는 SageMaker와 마운트 복잡\n\n【시험 포인트】\n비동기 처리 + 완료 알림 → Async + SNS",
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
    "question": "의료 회사가 Amazon SageMaker AI 엔드포인트를 사용하여 환자 재입원 위험을 예측하는 모델을 호스팅합니다. 회사는 높은 정확도로 환자 재입원을 예측하려고 하며 거짓 양성을 허용할 의향이 있습니다. 현재 모델 성능은 전년도에 저하되었습니다. 회사는 새로운 모델을 섀도우 변형으로 훈련하고 배포하여 병원의 라이브 트래픽에서 테스트합니다. 회사는 1개월 동안 새로운 모델의 성능을 모니터링합니다. 테스트 월 동안 섀도우 변형은 기존 모델보다 높은 재현율을 가지지만 낮은 정확도를 가집니다. 회사가 다음으로 무엇을 해야 합니까?",
    "options": {
      "A": "섀도우 변형을 전체 프로덕션으로 승격합니다.",
      "B": "섀도우 테스트 기간을 연장하여 더 많은 데이터를 캡처합니다. 새로운 모델을 모니터링하여 정확도가 개선되는지 결정합니다.",
      "C": "blue/green 배포 전략을 사용하여 섀도우 변형에 트래픽의 작은 부분을 할당하여 모델 오류를 줄입니다.",
      "D": "섀도우 변형을 비활성화하고 주 변형으로 롤백합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Recall — 실제 재입원 중 놓친 비율\n▸ Precision — 예측한 재입원 중 정확한 비율\n\n【정답 포인트】\n▸ 높은 정확도 필요, 거짓양성 허용\n▸ 높은 Recall → 놓치는 것 최소\n▸ 낮은 Precision → 거짓양성 있음 (허용)\n▸ 요구사항 충족\n\n【오답 체크】\n(B) 정확도 개선 기대 어려움, 이미 충족\n(C) 비용, 복잡도 증가, 불필요\n(D) 더 우수한 모델 포기\n\n【시험 포인트】\n높은 재현율 + 거짓양성 허용 → 승격",
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
    "question": "항공사는 수요 기반 항공권 가격 조정하는 ML 모델을 SageMaker 실시간 엔드포인트에서 운영합니다. 이전 배포에서 웹사이트 트래픽 증가 시 모델이 빠르게 확장되지 못해 가격 조정이 지연됐습니다. ML 엔지니어는 타겟 추적 확장 정책을 사용해 SageMaker 엔드포인트의 자동 확장을 구성해야 합니다. 트래픽 급변화에 가장 반응이 빠른 구성은?",
    "options": {
      "A": "SageMaker AI InvocationsPerInstance 표준 메트릭으로 자동 확장 구성. 10초 간격 해상도, 300초 축소 대기시간.",
      "B": "SageMaker AI InvocationsPerInstance 메트릭으로 자동 확장 구성. 고해상도 10초 간격, 600초 축소 대기시간.",
      "C": "SageMaker InvocationsPerInstance 표준 메트릭으로 자동 확장 구성. 10초 간격 해상도, 600초 축소 대기시간.",
      "D": "SageMaker InvocationsPerInstance 메트릭으로 자동 확장 구성. 고해상도 10초 간격, 300초 축소 대기시간."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 고해상도(High-resolution) — 10초 단위 메트릭 수집으로 빠른 반응\n▸ 축소 대기시간 — 짧을수록 신속한 응답\n【정답 포인트】\n▸ 고해상도 10초 + 300초 축소 = 가장 반응성 우수\n【오답 체크】\n(A)(B)(C) 표준 해상도, 600초 대기시간 = 반응 지연\n【시험 포인트】\n급변화 감지 → 고해상도 → 빠른 확장",
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
    "question": "ML 엔지니어가 SageMaker로 분류 모델 학습용 데이터를 수집합니다. 타겟 열은 클래스 A 또는 클래스 B 중 하나입니다. 기존 데이터를 손실하지 않으면서 클래스 A와 B의 샘플 수를 균형 있게 유지하고, 학습 데이터의 균형을 테스트해야 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "SageMaker Clarify로 클래스 불균형(CI) 확인. CI=0이면 SageMaker Data Wrangler에서 무작위 언더샘플링 적용.",
      "B": "SageMaker Clarify로 클래스 불균형(CI) 확인. CI>0이면 SageMaker Data Wrangler에서 SMOTE 적용.",
      "C": "SageMaker JumpStart로 클래스 불균형(CI) 보고서 생성. CI>0이면 SageMaker Studio에서 무작위 언더샘플링 적용.",
      "D": "SageMaker JumpStart로 클래스 불균형(CI) 보고서 생성. CI=0이면 SageMaker Studio에서 SMOTE 적용."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 클래스 불균형(CI>0) — 데이터 불균형 존재\n▸ SMOTE — 소수 클래스 데이터 생성으로 균형 조정\n【정답 포인트】\n▸ Clarify + SMOTE = 데이터 손실 없음\n【오답 체크】\n(A)(C)(D) JumpStart(보고서용)나 언더샘플링(데이터 손실)\n【시험 포인트】\n데이터 손실 금지 → SMOTE 선택 → CI>0일 때",
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
    "question": "ML 엔지니어가 구독 서비스의 고객 이탈 예측 로지스틱 회귀 모델을 구축합니다. 데이터셋에는 문자열 변수 2개가 포함됩니다: location(3개 고유값), job_seniority_level(10개 이상 고유값). 이 변수들에 전처리를 수행해야 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "location에 토큰화 적용. job_seniority_level에 서수 인코딩 적용.",
      "B": "location에 원-핫 인코딩 적용. job_seniority_level에 서수 인코딩 적용.",
      "C": "location에 분할 적용. job_seniority_level에 표준화 적용.",
      "D": "location에 원-핫 인코딩 적용. job_seniority_level에 표준화 적용."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 원-핫 인코딩 — 소수 범주(3개)에 최적\n▸ 서수 인코딩 — 순서 있는 다수 범주(10개+)에 최적\n【정답 포인트】\n▸ location(3개) → 원-핫 인코딩 → 차원 저\n▸ job_seniority_level(10+개) → 서수 인코딩 → 순서 유지\n【오답 체크】\n(A) 토큰화(자연어 전용) (C)(D) 표준화(분류변수 불가)\n【시험 포인트】\n범주 개수 → 인코딩 선택",
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
    "question": "회사가 사용자 정의 분류 모델을 AWS에 배포해야 합니다. 모델은 낮은 지연시간으로 거의 실시간 예측을 수행하고 가변적인 요청량을 처리해야 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "Amazon SageMaker 배치 변환 작업을 생성해 추론 요청을 배치로 처리.",
      "B": "Amazon API Gateway로 예측 요청 수신. S3 버킷으로 모델 호스팅.",
      "C": "Amazon SageMaker 엔드포인트 배포. 엔드포인트에 자동 확장 구성.",
      "D": "AWS Deep Learning AMI를 EC2 인스턴스 2개에 시작. Application Load Balancer 뒤에서 운영."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 실시간 예측 — SageMaker 엔드포인트\n▸ 자동 확장 — 가변 요청량 대응\n【정답 포인트】\n▸ 실시간 + 낮은 지연 + 탄력성 = 엔드포인트\n【오답 체크】\n(A) 배치 = 지연(실시간 불가) (B) S3 = 느림\n(D) EC2 = 관리 복잡\n【시험 포인트】\n저지연 실시간 → SageMaker 엔드포인트",
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
    "question": "회사가 신경망 모델을 실행하고 성능 저하 시 재학습합니다. SageMaker 분산 데이터 병렬화(DDP) 사용 학습 작업은 수 시간이 소요됩니다. 학습 시간을 단축해야 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "에포크 수 증가.",
      "B": "은닉층의 뉴런 수 증가.",
      "C": "레이어 수 증가.",
      "D": "인스턴스 수 증가."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 분산 데이터 병렬화(DDP) — 여러 인스턴스에서 학습\n▸ 학습 시간 단축 — 병렬 처리 확대\n【정답 포인트】\n▸ 인스턴스 증가 → 병렬 처리 증대 → 총 시간 감소\n【오답 체크】\n(A)(B)(C) 모델 구조 = 학습 시간 증가\n【시험 포인트】\n분산 학습에서 속도 → 인스턴스 수",
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
    "question": "ML 엔지니어가 하이퍼파라미터 최적화(HPO)를 위해 SageMaker 자동 모델 튜닝(AMT)을 사용합니다. 이전 실행을 기반으로 회귀를 통해 천천히 순차적으로 다음 하이퍼파라미터를 선택하는 튜닝 전략이 필요합니다. 전략은 작은 하이퍼파라미터 범위에서 작동해야 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "그리드 탐색.",
      "B": "무작위 탐색.",
      "C": "베이지안 최적화.",
      "D": "Hyperband."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 베이지안 최적화 — 회귀 기반 순차 선택\n▸ 작은 범위 — 소규모 하이퍼파라미터 공간\n【정답 포인트】\n▸ 회귀 + 순차적 선택 + 작은 범위 = 베이지안\n【오답 체크】\n(A) 그리드 = 전체 격자 탐색 (B) 무작위 = 독립적\n(D) Hyperband = 리소스 할당 최적화\n【시험 포인트】\n순차 회귀 기반 → 베이지안 최적화",
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
    "question": "의료 회사가 조기 징후를 나타낼 수 있는 환자 생체신호의 불규칙성을 감지해야 합니다. 레이블이 없는 환자 건강 기록, 의약품 이력, 생활습관 변화 데이터셋이 있습니다. 요구사항을 충족하는 알고리즘과 하이퍼파라미터는?",
    "options": {
      "A": "SageMaker XGBoost 알고리즘 사용. max_depth를 100 이상으로 설정해 트리 복잡도 조절.",
      "B": "SageMaker k-means 클러스터링 알고리즘 사용. k를 설정해 클러스터 개수 결정.",
      "C": "SageMaker DeepAR 알고리즘 사용. epochs를 학습 반복 수로 설정.",
      "D": "SageMaker Random Cut Forest(RCF) 알고리즘 사용. num_trees를 100 이상으로 설정."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ RCF — 비정상 탐지 알고리즘\n▸ 레이블 없음 — 비지도 학습\n【정답 포인트】\n▸ 불규칙성/이상 감지 → RCF\n▸ 레이블 없음 → 비지도 알고리즘\n【오답 체크】\n(A) XGBoost = 지도학습 (B) k-means = 클러스터링\n(C) DeepAR = 시계열 예측\n【시험 포인트】\n비정상 탐지 + 레이블 없음 → RCF",
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
    "question": "회사가 SageMaker에서 고양이와 개의 이미지를 구분하는 이미지 분류 모델을 학습합니다. 제3자 소스의 이미지를 사용하고, 각 이미지에 첨부된 메타데이터 요약 파일에 올바른 레이블을 추가해야 합니다. 고양이 이미지와 개 이미지 개수가 같아야 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "SageMaker Clarify로 클래스 불균형(CI) 확인. CI가 1에 가까우면 데이터셋이 균형 있음.",
      "B": "SageMaker Clarify로 클래스 불균형(CI) 확인. CI가 0에 가까우면 데이터셋이 균형 있음.",
      "C": "SageMaker Data Wrangler로 레이블 비율 차이(DPL) 확인. DPL이 1에 가까우면 데이터셋이 균형 있음.",
      "D": "SageMaker Data Wrangler로 레이블 비율 차이(DPL) 확인. DPL이 -1에 가까우면 데이터셋이 균형 있음."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 클래스 불균형(CI) — 0에 가까울수록 균형\n▸ CI=0 — 완벽한 균형\n【정답 포인트】\n▸ CI 값 0 → 동등한 클래스 분포\n【오답 체크】\n(A) CI 1 = 완전 불균형 (C)(D) DPL은 편향 감지용\n【시험 포인트】\n클래스 균형 확인 → CI 값 0",
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
    "question": "엔터테인먼트 회사의 ML 엔지니어가 청중 선호도 예측 모델을 개선합니다. 모델이 데이터를 학습하면서 성능이 초기에 최고에 달한 후 서서히 저하됩니다. 초기 성공 후 성능 저하를 방지해야 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "레이어 수 증가.",
      "B": "조기 종료 구현.",
      "C": "각 레이어에 더 많은 뉴런 추가로 복잡한 패턴 포착.",
      "D": "모델 편향과 분산을 검토해 성능 문제 이해."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 조기 종료(Early stopping) — 과적합 방지\n▸ 성능 저하 — 검증 손실 증가\n【정답 포인트】\n▸ 성능 피크 후 저하 = 과적합 신호\n▸ 조기 종료로 최적 지점에서 중단\n【오답 체크】\n(A)(C) 모델 복잡도 증가 = 과적합 악화\n(D) 분석만 해서는 해결 불가\n【시험 포인트】\n과적합(피크 후 저하) → 조기 종료",
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
    "question": "ML 엔지니어가 두 개의 이용 가능한 클래스 중 하나에서 예측 성능이 저조한 이미지 분류 모델을 튜닝합니다. 분석 결과 모델이 성능이 낮은 클래스의 이미지는 전체 학습 데이터셋의 극히 작은 부분입니다. 모델 성능을 개선해야 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "정확도 최적화. 덜 일반적인 이미지에 이미지 증강 적용해 새 샘플 생성.",
      "B": "F1 스코어 최적화. 덜 일반적인 이미지에 이미지 증강 적용해 새 샘플 생성.",
      "C": "정확도 최적화. 덜 일반적인 이미지에 SMOTE 적용해 새 샘플 생성.",
      "D": "F1 스코어 최적화. 덜 일반적인 이미지에 SMOTE 적용해 새 샘플 생성."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ F1 스코어 — 불균형 데이터의 정확한 평가\n▸ 이미지 증강 — 이미지 데이터 확대 기법\n【정답 포인트】\n▸ 소수 클래스 성능 저조 → F1 스코어 우선\n▸ 이미지 → 증강(픽셀 변환) 효과적\n【오답 체크】\n(A) 정확도 = 불균형에서 오도 (C)(D) SMOTE = 수치 데이터\n【시험 포인트】\n이미지 불균형 + F1 → 증강 기법",
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
    "question": "의료 분석 회사가 환자를 유사한 위험 요소를 가진 그룹으로 분할해 개인화된 치료 계획을 개발합니다. 환자 건강 기록, 의약품 이력, 생활습관 변화 데이터셋이 있습니다. 하이퍼파라미터로 그룹 개수를 결정하는 적절한 알고리즘을 선택해야 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "SageMaker XGBoost 알고리즘 사용. max_depth를 설정해 위험 그룹의 트리 복잡도 제어.",
      "B": "SageMaker k-means 클러스터링 알고리즘 사용. k를 설정해 클러스터 개수 지정.",
      "C": "SageMaker DeepAR 알고리즘 사용. epochs를 위험 그룹의 학습 반복 수로 결정.",
      "D": "SageMaker Random Cut Forest(RCF) 알고리즘 사용. contamination 하이퍼파라미터를 위험 이상 그룹으로 설정."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ k-means — 클러스터링 알고리즘\n▸ k — 클러스터(그룹) 개수\n【정답 포인트】\n▸ 환자 분할 → 클러스터링\n▸ 그룹 개수 → k 하이퍼파라미터\n【오답 체크】\n(A) XGBoost = 분류(지도학습) (C) DeepAR = 시계열\n(D) RCF = 이상 탐지\n【시험 포인트】\n그룹 분할 + 개수 결정 → k-means",
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
    "question": "ML 엔지니어가 Amazon Bedrock에서 RAG(검색 증강 생성)를 사용해 AI 어시스턴트를 개발합니다. 회사는 S3 버킷에 PDF 텍스트 파일 모음을 저장합니다. Bedrock 지식 기반을 생성해 PDF 파일을 처리하고 처리된 파일을 벡터 저장소에 저장해야 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "최신 Amazon Titan Text Premier 사용해 문서 임베딩 수행.",
      "B": "최신 Mistral 7B Instruct 사용해 명령어 튜닝 수행.",
      "C": "최신 Anthropic Claude Sonnet 사용해 명령어 튜닝 수행.",
      "D": "Cohere Embed Multilingual 사용해 문서 임베딩 수행."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ 문서 임베딩 — RAG용 벡터화\n▸ Cohere Embed — 다국어 임베딩 모델\n【정답 포인트】\n▸ PDF → 벡터 변환 = 임베딩 모델 필요\n▸ 다국어 지원 = Cohere Embed Multilingual\n【오답 체크】\n(A)(B)(C) 텍스트 생성/튜닝 = 임베딩 불가\n【시험 포인트】\nRAG 벡터화 → 임베딩 모델 선택",
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
    "question": "ML 엔지니어가 비정형 데이터의 페타바이트에서 개인식별정보(PII)를 식별하고 제거하는 처리 파이프라인을 구축합니다. 처리된 데이터를 SageMaker에서 ML 모델을 학습하는 데 사용합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "AWS Glue 대화형 세션의 Apache Spark 기반 서버리스 엔진 사용. PII 감지 변환 기능으로 PII 식별 및 제거.",
      "B": "Amazon SageMaker Canvas 내 AWS Glue Data Wrangler 사용해 PII 감지 및 제거.",
      "C": "Amazon SageMaker Clarify API 사용해 PII 감지 및 마스킹.",
      "D": "Amazon Comprehend의 DetectEntities API 작업 사용해 PII 식별 및 제거."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 페타바이트 규모 — 대규모 분산 처리\n▸ Spark 기반 — 병렬 처리\n▸ Detect PII 변환 — 자동 PII 제거\n【정답 포인트】\n▸ 대규모 + 비정형 → Glue 서버리스 Spark\n▸ PII 변환 기능 = 자동 감지 제거\n【오답 체크】\n(B) Canvas = 정형 데이터용 (C) Clarify = 편향 분석\n(D) Comprehend = 개체 추출(마스킹 미포함)\n【시험 포인트】\n페타바이트 PII 제거 → Glue Spark",
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
    "question": "회사가 권장 모델을 SageMaker 엔드포인트에서 호스팅합니다. 모델은 SageMaker 엔드포인트로 실시간 추론을 수행해 조회 이력, 구매 기록, 인앱 상호작용 기반 개인화된 상품 추천을 제공합니다. 대규모 마케팅 캠페인 후 모델 성능이 급격히 저하됩니다. 향후 마케팅 캠페인 전 모델 성능을 사전에 모니터링, 감지, 검증해야 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "SageMaker Clarify로 특성 분포 변화 분석. SageMaker Model Monitor로 실시간 입력 검증 구성.",
      "B": "Amazon CloudWatch 대시보드로 엔드포인트 메트릭 모니터링. SageMaker Model Monitor로 특성 속성 추적.",
      "C": "SageMaker Clarify로 편향 감지. Amazon CloudWatch 알람으로 모델 지연시간 모니터링.",
      "D": "SageMaker Model Monitor로 제약사항 모니터링. Amazon CloudWatch Logs Insights로 오류 패턴 분석."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ 특성 분포 변화(Data drift) — Clarify 분석\n▸ 입력 검증(Input validation) — Model Monitor\n【정답 포인트】\n▸ 캠페인 전 사전 감지 = 입력 데이터 모니터링\n▸ Clarify + Model Monitor = 완전한 모니터링\n【오답 체크】\n(B) Feature attribution = 사후 분석\n(C) 편향 감지 = 공정성 분석 (D) Logs = 오류 추적\n【시험 포인트】\n데이터 드리프트 사전 감지 → Clarify + Monitor",
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
    "question": "회사가 SageMaker로 지난 20년 월별 판매 성과를 1~5 척도로 분류하는 분류 모델을 생성합니다. 데이터셋에는 월, 판매 지역, 지역별 판매액, 각 지역의 점포 수가 포함됩니다. 회사는 매년 두 달 동안 판매액이 예상보다 높다는 것을 발견합니다. 비수치 특성에 원-핫 인코딩을 수행하고 학습 데이터셋으로 모델을 학습합니다. 검증 데이터셋에 대한 모델 평가 결과가 예상보다 정확도가 낮습니다. 검증 데이터셋의 모델 정확도를 개선해야 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "모든 특성에서 이상치를 포함한 레코드 제거.",
      "B": "월 및 판매 지역 특성으로 계층화된 분할 사용.",
      "C": "판매액 특성에 정규화 수행.",
      "D": "각 판매 지역별 판매액 특성에 정규화 수행."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 계층화 분할 — 중요 특성별 균형 유지\n▸ 계절성(월별 패턴) — 월별로 분할 필요\n【정답 포인트】\n▸ 월별 계절성 + 지역 효과 존재\n▸ 계층화 분할 = 학습/검증 특성 분포 일치\n【오답 체크】\n(A) 이상치 제거 = 정보 손실\n(C)(D) 정규화 = 스케일링(특성 분포 불일치 미해결)\n【시험 포인트】\n계절성 있는 데이터 → 계층화 분할",
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
    "question": "ML 엔지니어가 SageMaker에서 ML 모델을 구축합니다. Amazon S3, Amazon Athena, Snowflake에서 역사 데이터를 직접 SageMaker로 로드해야 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "AWS Glue DataBrew를 사용해 SageMaker로 데이터 가져오기.",
      "B": "SageMaker Pipelines에 파이프라인 구축. AWS DataSync로 처리된 데이터를 SageMaker로 로드.",
      "C": "SageMaker Feature Store에 피처 저장소 생성. Apache Spark 커넥터로 데이터 접근.",
      "D": "SageMaker Data Wrangler로 데이터 쿼리 및 가져오기."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Data Wrangler — 다중 소스 데이터 통합\n▸ S3, Athena, Snowflake — 지원 소스\n【정답 포인트】\n▸ 여러 소스(S3, Athena, Snowflake) → Data Wrangler\n▸ 직접 쿼리 및 변환 = 통합 기능\n【오답 체크】\n(A) DataBrew = 간단한 데이터 정제\n(B) DataSync = 전송용(변환 X) (C) Feature Store = 특성 저장소\n【시험 포인트】\n다중 데이터소스 통합 → Data Wrangler",
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
    "question": "ML 엔지니어가 표 형식 데이터를 변환해 회귀 모델을 학습하는 사용자 정의 scikit-learn 스크립트를 개발했습니다. SageMaker를 사용해 데이터를 준비하고 모델을 학습 및 평가하려고 합니다. 요구사항을 충족하는 솔루션은?",
    "options": {
      "A": "AWS Lambda 함수를 생성해 사용자 정의 스크립트 실행. 처리된 데이터를 SageMaker로 로드해 모델 학습.",
      "B": "SageMaker Python SDK 내 SKLearnProcessor 클래스 사용해 사용자 정의 스크립트 실행.",
      "C": "SageMaker Python SDK 내 HuggingFaceProcessor 클래스 적용해 사용자 정의 스크립트 실행.",
      "D": "AWS Glue ETL 사용자 정의 레시피로 데이터 변환 수행. 처리된 데이터를 SageMaker로 로드해 모델 학습."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ SKLearnProcessor — scikit-learn 스크립트 실행\n▸ SageMaker Processing — 데이터 처리 작업\n【정답 포인트】\n▸ scikit-learn 스크립트 → SKLearnProcessor\n▸ 통합된 SageMaker 워크플로우\n【오답 체크】\n(A) Lambda = 임시 함수(ML 전용 X)\n(C) HuggingFace = NLP 모델용 (D) Glue = ETL(ML 통합 X)\n【시험 포인트】\nscikit-learn → SKLearnProcessor 사용",
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
    "question": "회사가 사용자 프롬프트에서 동물 설명을 읽고 프롬프트 정보 기반 이미지를 생성하는 애플리케이션을 개발합니다. 애플리케이션은 Amazon SQS 큐에서 메시지를 읽습니다. Amazon Bedrock의 Amazon Titan Image Generator로 메시지 정보를 기반으로 이미지를 생성합니다. 마지막으로 SQS 큐에서 메시지를 제거합니다. 애플리케이션의 IAM 역할에 할당할 IAM 권한은? (2개 선택)",
    "options": {
      "A": "Amazon Titan Image Generator 리소스에 대한 bedrock:InvokeModel 작업 허용.",
      "B": "Amazon Titan Image Generator 리소스에 대한 bedrock:Get* 작업 허용.",
      "C": "SQS 큐 리소스에 대한 sqs:ReceiveMessage 작업 및 sqs:DeleteMessage 작업 허용.",
      "D": "SQS 큐 리소스에 대한 sqs:GetQueueAttributes 작업 및 sqs:DeleteMessage 작업 허용.",
      "E": "Amazon Titan Image Generator 리소스에 대한 sagemaker:PutRecord* 작업 허용."
    },
    "answer": "AC",
    "explanation": "【핵심 용어】\n▸ bedrock:InvokeModel — 모델 호출(이미지 생성)\n▸ sqs:ReceiveMessage — 메시지 수신\n▸ sqs:DeleteMessage — 메시지 삭제\n【정답 포인트】\n▸ (A) Bedrock 모델 호출 권한\n▸ (C) SQS 읽기/삭제 권한\n【오답 체크】\n(B) Get* = 메타데이터 조회 (D) GetQueueAttributes = 속성 확인\n(E) sagemaker:PutRecord* = SageMaker 특성 저장\n【시험 포인트】\nBedrock + SQS = InvokeModel + Receive/Delete",
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
