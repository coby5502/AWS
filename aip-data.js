window.AIP_QUESTIONS = [
  {
    "id": 1,
    "question": "소매 회사의 GenAI 제품 추천 애플리케이션(Amazon Bedrock 사용)이 인구통계 그룹 간 편향을 측정해야 합니다. 15% 이상의 불공정 메트릭 차이가 발생하면 알림을 받고, 매주 두 프롬프트 접근법의 성능을 비교하는 보고서를 받아야 합니다. 커스텀 개발 노력이 최소화되는 솔루션은 무엇입니까?",
    "options": {
      "A": "CloudWatch 대시보드 구성, 커스텀 메트릭 생성, EventBridge/Lambda로 포스트프로세싱 분석",
      "B": "Bedrock Prompt Management로 프롬프트 변형 생성, Bedrock Guardrails로 인구통계 공정성 모니터링",
      "C": "SageMaker Clarify로 모델 출력 분석, CloudWatch에 공정성 메트릭 발행, CloudWatch 합성 알람으로 종합 평가 대시보드 생성",
      "D": "Bedrock 모델 평가 작업으로 공정성 비교, CloudWatch 알람으로 InvocationsIntervened 메트릭 모니터링"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ SageMaker Clarify — 편향 감지와 공정성 메트릭 분석 전문 서비스\n▸ CloudWatch 합성 알람 — 여러 메트릭을 결합하여 종합 평가 가능\n\n【정답 포인트】\n▸ 공정성 평가 → SageMaker Clarify 필수\n▸ 메트릭 모니터링 → CloudWatch 메트릭과 알람\n▸ Bedrock Latency와 Clarify 편향 메트릭을 합성 알람으로 결합하면 종합적 공정성 평가 대시보드 구성\n\n【오답 체크】\n(A) 커스텀 Lambda 포스트프로세싱은 개발 오버헤드 증가\n(B) Guardrails는 콘텐츠 필터링용이지 공정성 평가 서비스 아님\n(D) 모델 평가 작업은 일회성이며 실시간 모니터링 미지원\n\n【시험 포인트】\n공정성 메트릭 = SageMaker Clarify + CloudWatch 패턴 인식",
    "en_q": "A retail company has a generative AI (GenAI) product recommendation application that uses Amazon Bedrock. The application suggests products to customers based on browsing history and demographics. The company needs to implement fairness evaluation across multiple demographic groups to detect and measure bias in recommendations between two prompt approaches. The company wants to collect and monitor fairness metrics in real time. The company must receive an alert if the fairness metrics show a discrepancy of more than 15% between demographic groups. The company must receive weekly reports that compare the performance of the two prompt approaches. Which solution will meet these requirements with the LEAST custom development effort?",
    "en_opts": {
      "A": "Configure an Amazon CloudWatch dashboard to display default metrics from Amazon Bedrock API calls. Create custom metrics based on model outputs. Set up Amazon EventBridge rules to invoke AWS lambda functions that perform post-processing analysis on model responses and publish custom fairness metrics.",
      "B": "Create the two prompt variants in Amazon Bedrock Prompt Management. Use Amazon Bedrock Flows to deploy the prompt variants with defined traffic allocation. Configure Amazon Bedrock guardrails that have content filters to monitor demographic fairness. Set up Amazon CloudWatch alarms on the GuardrailContentSource dimension that use InvocationsIntervened metrics to detect recommendation discrepancy threshold violations.",
      "C": "Set up Amazon SageMaker Clarify to analyze model outputs. Publish fairness metrics to Amazon CloudWatch. Create CloudWatch composite alarms that combine SageMaker Clarify bias metrics with Amazon Bedrock latency metrics to provide a comprehensive fairness evaluation dashboard.",
      "D": "Create an Amazon Bedrock model evaluation job to compare fairness between the two prompt variants. Enable model invocation logging in Amazon CloudWatch. Set up CloudWatch alarms for InvocationsIntervened metrics with a dimension for each demographic group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384112-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 2,
    "question": "한 금융회사가 클라이언트의 투자 계획 및 포트폴리오 관리를 돕는 AI 어시스턴트를 개발하고 있습니다. 회사는 특정 주식 추천이나 수익률 보장 요청 같은 고위험 대화 패턴을 식별했습니다. 고위험 대화 패턴은 회사가 적절한 제어를 구현하지 못할 경우 규제 위반으로 이어질 수 있습니다. 회사는 AI 어시스턴트가 부적절한 금융 조언을 제공하거나, 경쟁사 콘텐츠를 생성하거나, 회사 승인 금융 지침에 기반하지 않은 주장을 하지 않도록 보장해야 합니다. 회사는 Amazon Bedrock Guardrails를 사용하여 솔루션을 구현하려고 합니다. 이러한 요구사항을 충족할 단계의 조합은 무엇입니까? (3개 선택)",
    "options": {
      "A": "고위험 대화 패턴을 거부된 주제 가드레일에 추가합니다.",
      "B": "콘텐츠 필터 가드레일을 구성하여 고위험 대화 패턴을 포함하는 프롬프트를 필터링합니다.",
      "C": "콘텐츠 필터 가드레일을 구성하여 경쟁사 이름을 포함하는 프롬프트를 필터링합니다.",
      "D": "경쟁사의 이름을 사용자 정의 단어 필터로 추가합니다. 입력 및 출력 작업을 차단으로 설정합니다.",
      "E": "낮은 그라운딩 점수 임계값을 설정합니다.",
      "F": "높은 그라운딩 점수 임계값을 설정합니다."
    },
    "answer": "ADF",
    "explanation": "【핵심 용어】\n▸ Denied Topics — Bedrock Guardrails에서 특정 주제를 차단하는 정책\n▸ Custom Word Filters — 사용자 정의 키워드를 입력/출력에서 필터링\n▸ Grounding Score — 응답이 실제 데이터 소스에 기반하는 정도를 측정하는 점수\n\n【정답 포인트】\n▸\n(A) 고위험 대화 패턴(주식 추천, 보장 수익률) → Denied Topics로 차단하는 것이 가장 직접적이고 효과적\n▸\n(D) 경쟁사 이름 → 사용자 정의 단어 필터로 입력/출력 모두 차단하여 콘텐츠 생성 방지\n▸ (F) 높은 그라운딩 점수 임계값 → 사실 기반이 아닌 응답을 배제하여 \"팩트 체크\" 역할 수행\n\n【오답 체크】\n(B) 콘텐츠 필터는 일반적인 해로운 콘텐츠 필터링용이며, 고위험 대화 패턴 차단에는 Denied Topics가 더 적합\n(C) 경쟁사 이름은 프롬프트 필터링이 아닌 단어 필터\n(D) 로 처리하는 것이 정확\n(E) 낮은 임계값은 그라운딩이 약한 응답을 허용하므로 반대\n\n【시험 포인트】\n▸ Bedrock Guardrails의 3가지 핵심 정책: Denied Topics, Content Filters, Custom Filters\n▸ 고위험 패턴 차단 → Denied Topics | 금지 단어 차단 → Custom Filters\n▸ Grounding: 높은 점수 요구 = 신뢰도 높은 응답만 (금융/규제 도메인의 필수 요소)",
    "en_q": "A finance company is developing an AI assistant to help clients plan investments and manage their portfolios. The company identifies several high-risk conversation patterns such as requests for specific stock recommendations or guaranteed returns. High-risk conversation patterns could lead to regulatory violations if the company cannot implement appropriate controls. The company must ensure that the AI assistant does not provide inappropriate financial advice, generate content about competitors, or make claims that are not factually grounded in the company's approved financial guidance. The company wants to use Amazon Bedrock Guardrails to implement a solution. Which combination of steps will meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Add the high-risk conversation patterns to a denied topics guardrail.",
      "B": "Configure a content filter guardrail to filter prompts that contain the high-risk conversation patterns.",
      "C": "Configure a content filter guardrail to filter prompts that contain competitor names.",
      "D": "Add the names of competitors as custom word filters. Set the input and output actions to block.",
      "E": "Set a low grounding score threshold.",
      "F": "Set a high grounding score threshold."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384102-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 3,
    "question": "React 애플리케이션(AWS Amplify, AppSync GraphQL, Bedrock Knowledge Bases 사용)에서 복잡한 질문으로 인해 타임아웃과 느린 응답이 발생합니다. 15~45초 처리 시간이 필요합니다. 성능 문제를 해결하고 사용자 경험을 향상시키는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Amplify AI Kit로 GraphQL 스트리밍 응답 구현, 클라이언트 렌더링 최적화",
      "B": "Lambda resolver 타임아웃 값 증가, 지수 백오프를 사용한 재시도 로직 구현",
      "C": "SQS 큐로 API 요청 전송, AppSync resolver에서 큐 폴링 및 처리",
      "D": "RetrieveAndGenerate API를 InvokeModelWithResponseStream API로 변경, API Gateway WebSocket API 사용"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ AWS Amplify AI Kit — 스트리밍 응답 최적화 전용 라이브러리\n▸ GraphQL Streaming — 부분 응답 실시간 전달\n▸ ResponseStream — 토큰 단위 응답 스트리밍\n\n【정답 포인트】\n▸ 장시간 처리(15~45초) → 스트리밍으로 체감 지연 감소\n▸ Amplify AI Kit은 GraphQL + 스트리밍 최적화 전문\n▸ 클라이언트 렌더링 최적화로 완전 응답 대기 불필요\n\n【오답 체크】\n(B) 타임아웃 증가는 근본 해결 아님\n(C) SQS는 비동기 처리로 지연 증가\n(D) WebSocket은 직접 API Gateway 통합이지 GraphQL 기반 아님\n\n【시험 포인트】\n장시간 응답 = 스트리밍 + Amplify AI Kit 패턴",
    "en_q": "A company has deployed an AI assistant as a React application that uses AWS Amplify, an AWS AppSync GraphQL API, and Amazon Bedrock Knowledge Bases. The application uses the GraphQL API to call the Amazon Bedrock RetrieveAndGenerate API for knowledge base interactions. The company configures an AWS Lambda resolver to use the RequestResponse invocation type. Application users report frequent timeouts and slow response times. Users report these problems more frequently for complex questions that require longer processing. The company needs a solution to fix these performance issues and enhance the user experience. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS Amplify AI Kit to implement streaming responses from the GraphQL API and to optimize client-side rendering.",
      "B": "Increase the timeout value of the Lambda resolver. Implement retry logic with exponential backoff.",
      "C": "Update the application to send an API request to an Amazon SQS queue. Update the AWS AppSync resolver to poll and process the queue.",
      "D": "Change the RetrieveAndGenerate API to the InvokeModelWithResponseStream API. Update the application to use an Amazon API Gateway WebSocket API to support the streaming response."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384113-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 4,
    "question": "글로벌 제품 추천 시스템이 규제, 비용 최적화, 성능 요구에 따라 여러 foundation model을 동적으로 전환해야 합니다. 사용자 계층, 거래액, 규제 구역, 실시간 비용 메트릭에 따라 요청을 라우팅합니다. 코드 배포 없이 FM을 전환할 수 있어야 합니다. 어떤 솔루션이 최적입니까?",
    "options": {
      "A": "Lambda 함수로 환경 변수에 라우팅 규칙 저장, 필요시 Lambda 콘솔에서 업데이트",
      "B": "API Gateway 요청 변환 템플릿으로 라우팅 로직 구현, FM 엔드포인트를 stage 변수로 저장",
      "C": "Lambda 함수에서 AWS AppConfig Agent로 라우팅 구성 조회, 비즈니스 로직으로 FM 선택, API Gateway REST API로 노출",
      "D": "API Gateway Lambda 인증자로 AppConfig에 저장된 라우팅 규칙 평가, 모델별 Lambda 함수로 라우팅"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ AWS AppConfig Agent — 실시간 구성 조회 및 즉시 전파\n▸ 환경 변수 — 배포 필요, 시간 지연\n▸ Stage Variables — 수동 업데이트 필요\n\n【정답 포인트】\n▸ 실시간 변경 필요 → AppConfig의 자동 동기화\n▸ 수천 개 동시 요청 → 중앙 집중식 구성 관리\n▸ 시간 단위 변경 → 코드 배포 없이 AppConfig만 수정\n\n【오답 체크】\n(A) 환경 변수는 배포 필요, 즉시 전파 불가\n(B) Stage 변수는 수동 업데이트 + 배포\n(D) 인증자는 라우팅용이 아닌 인증용\n\n【시험 포인트】\n실시간 동적 라우팅 = AppConfig + Lambda 패턴",
    "en_q": "An ecommerce company operates a global product recommendation system that needs to switch between multiple foundation models (FM) in Amazon Bedrock based on regulations, cost optimization, and performance requirements. The company must apply custom controls based on proprietary business logic, including dynamic cost thresholds, AWS Region-specific compliance rules, and real-time A/B testing across multiple FMs. The system must be able to switch between FMs without deploying new code. The system must route user requests based on complex rules including user tier, transaction value, regulatory zone, and real-time cost metrics that change hourly and require immediate propagation across thousands of concurrent requests. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy an AWS Lambda function that uses environment variables to store routing rules and Amazon Bedrock FM IDs. Use the Lambda console to update the environment variables when business requirements change. Configure an Amazon API Gateway REST API to read request parameters to make routing decisions.",
      "B": "Deploy Amazon API Gateway REST API request transformation templates to implement routing logic based on request attributes. Store Amazon Bedrock FM endpoints as REST API stage variables. Update the variables when the system switches between models.",
      "C": "Configure an AWS Lambda function to fetch routing configurations from the AWS AppConfig Agent for each user request. Run business logic in the Lambda function to select the appropriate FM for each request. Expose the FM through a single Amazon API Gateway REST API endpoint.",
      "D": "Use AWS Lambda authorizers for an Amazon API Gateway REST API to evaluate routing rules that are stored in AWS AppConfig. Return authorization contexts based on business logic. Route requests to model-specific Lambda functions for each Amazon Bedrock FM."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384114-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 5,
    "question": "GenAI 어시스턴트가 기업 문서를 요약하고, 비즈니스 유닛별로 톤(법무/인사/재무)을 조정하며, 혐오 발언과 민감 정보를 필터링해야 합니다. 수백 개의 프롬프트 템플릿을 중앙에서 관리하고 포스트프로세싱 오버헤드를 최소화해야 합니다. 어떤 솔루션이 유지보수 오버헤드를 최소화합니까?",
    "options": {
      "A": "Bedrock Prompt Management로 재사용 가능한 템플릿과 유닛별 프롬프트 변형 구성, Bedrock Guardrails로 카테고리 필터와 민감 용어 리스트 적용",
      "B": "Bedrock Prompt Management로 기본 템플릿 정의, 시스템 프롬프트 변수로 톤 강제, Bedrock Guardrails로 오디언스 기반 임계값 조정",
      "C": "DynamoDB에 응답 포맷 규칙 저장, Step Functions로 응답 검증, Amazon Comprehend로 콘텐츠 필터링",
      "D": "DynamoDB에 커스텀 프롬프트 템플릿 저장, Lambda 함수로 유닛별 프롬프트 선택, 두 번째 Lambda로 Comprehend 필터링"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Bedrock Prompt Management — 프롬프트 버전 관리, 중앙 집중식 템플릿\n▸ Bedrock Guardrails — 포스트프로세싱 불필요, 모델 레벨 제어\n▸ Category Filters — 사전 정의된 필터\n\n【정답 포인트】\n▸ 중앙 관리 → Prompt Management 필수\n▸ 포스트프로세싱 오버헤드 최소 → Guardrails로 모델 인스턴스에서 차단\n▸ 톤 조정 → 프롬프트 변형(템플릿 상속)으로 처리\n\n【오답 체크】\n(B) Guardrails의 오디언스 기반 임계값 조정은 고급 기능이지만\n(A) 가 더 간단 (C/D) DynamoDB + Lambda = 유지보수 오버헤드 증가\n\n【시험 포인트】\n중앙 관리 = Prompt Management + Guardrails 패턴",
    "en_q": "A company is developing an internal generative AI (GenAI) assistant that uses Amazon Bedrock to summarize corporate documents for multiple business units. The GenAI assistant must generate responses in a consistent format that includes a document summary, classification of business risks, and terms that are flagged for review. The GenAI assistant must adapt the tone of responses for each user's business unit, such as legal, human resources, or finance. The GenAI assistant must block hate speech, inappropriate topics, and sensitive information such as personal health information. The company needs a solution to centrally manage prompt variants across business units and teams. The company wants to minimize ongoing orchestration efforts and maintenance for post-processing logic. The company also wants to have the ability to adjust content moderation criteria for the GenAI assistant over time. Which solution will meet these requirements with the LEAST maintenance overhead?",
    "en_opts": {
      "A": "Use Amazon Bedrock Prompt Management to configure reusable templates and business unit-specific prompt variants. Apply Amazon Bedrock guardrails that have category filters and sensitive term lists to block prohibited content.",
      "B": "Use Amazon Bedrock Prompt Management to define base templates. Enforce business unit-specific tone by using system prompt variables. Configure Amazon Bedrock guardrails to apply audience-based threshold tuning. Manage the guardrails by using an internal administration API.",
      "C": "Use Amazon Bedrock with business unit-based instruction injection in API calls. Store response formatting rules in Amazon DynamoDB. Use AWS Step functions to validate responses. Use Amazon Comprehend to apply content filters after the GenAI assistant generates responses.",
      "D": "Use Amazon Bedrock with custom prompt templates that are stored in Amazon DynamoDB. Create one AWS Lambda function to select business unit-specific prompts. Create a second Lambda function to call Amazon Comprehend to filter prohibited content from responses."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384107-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 6,
    "question": "금융 규제 문서 데이터베이스(1천만 개 임베딩)에서 사용자 질문의 의미적 유사성으로 문서를 검색하고 Bedrock으로 응답을 생성합니다. 영어, 스페인어, 포르투갈어를 지원하고, 발행일, 규제 기관, 문서 유형으로 메타데이터 필터링을 해야 합니다. 운영 오버헤드를 최소화하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon OpenSearch Serverless로 벡터 검색과 메타데이터 필터링, Bedrock Knowledge Bases와 연결하여 RAG 기능 활성화",
      "B": "Aurora PostgreSQL + pgvector 확장으로 임베딩과 메타데이터 테이블 정의, SQL 쿼리로 유사도 검색 수행",
      "C": "Amazon S3 Vectors로 벡터 인덱스와 메타데이터 필드 구성, Bedrock과 통합하여 RAG 기능 활성화",
      "D": "Amazon Neptune Analytics 그래프 데이터베이스로 임베딩 벡터 인덱스 구성, Bedrock으로 그래프 기반 검색 수행"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ OpenSearch Serverless — 벡터 검색 + 메타데이터 필터링 + 서버리스\n▸ Knowledge Bases — Bedrock의 RAG 통합 서비스\n▸ Metadata Filtering — 구조화된 데이터로 검색 범위 축소\n\n【정답 포인트】\n▸ 1천만 임베딩 저장소 → OpenSearch Serverless 스케일링 적합\n▸ 메타데이터 필터링 필수 → OpenSearch 네이티브 지원\n▸ 운영 오버헤드 최소 → Serverless(자동 스케일) + Knowledge Bases 통합\n\n【오답 체크】\n(B) Aurora는 관리 오버헤드 증가, pgvector는 프로덕션 규모 제한\n(C) S3 Vectors는 메타데이터 필터링 미지원\n(D) Neptune은 그래프 DB로 벡터 검색 전문 아님\n\n【시험 포인트】\n대규모 벡터 + 메타데이터 = OpenSearch Serverless + Knowledge Bases",
    "en_q": "A financial services company is building a customer support application that retrieves relevant financial regulation documents from a database based on semantic similarities to user queries. The application must integrate with Amazon Bedrock to generate responses. The application must be able to search documents that are in English, Spanish, and Portuguese. The application must filter documents by metadata such as publication date, regulatory agency, and document type. The database stores approximately 10 million document embeddings. To minimize operational overhead, the company wants a solution that minimizes management and maintenance effort. The application must provide low-latency responses for real-time customer interactions. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon OpenSearch Serverless to provide vector search capabilities and metadata filtering. Connect to Amazon Bedrock Knowledge Bases to enable Retrieval Augmented Generation (RAG) capabilities that use an Anthropic Claude foundation model (FM).",
      "B": "Deploy an Amazon Aurora PostgreSQL database with the pgvector extension. Define tables to store embeddings and metadata. Use SQL queries to perform similarity searches. Send retrieved documents to Amazon Bedrock to generate responses.",
      "C": "Use Amazon S3 Vectors to configure a vector index and non-filterable metadata fields. Integrate S3 Vectors with Amazon Bedrock to enable Retrieval Augmented Generation (RAG) capabilities.",
      "D": "Set up an Amazon Neptune Analytics graph database. Configure a vector index that has appropriate dimensionality to store document embeddings. Use Amazon Bedrock to perform graph-based retrieval and to generate responses."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384108-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 7,
    "question": "의료 회사의 RAG 애플리케이션(OpenSearch 벡터 검색)에서 의료 용어와 약자로 정확히 일치하는 결과를 놓치고 의미론적으로 유사하지만 관련 없는 문서를 너무 많이 반환합니다. 수백만 문서로 확장해도 검색 품질을 개선하고 낮은 지연 시간을 유지해야 합니다. 최소 운영 오버헤드로 충족되는 솔루션은 무엇입니까?",
    "options": {
      "A": "벡터 유사도와 키워드 매칭을 결합한 하이브리드 검색으로 의미론적 이해와 정확 용어/약자 일치 개선",
      "B": "벡터 임베딩 차원을 384에서 1536으로 증가, Lambda로 검색 후 관련 없는 결과 필터링",
      "C": "OpenSearch를 Amazon Kendra로 교체, 쿼리 확장으로 의료 약자 및 용어 변형 처리",
      "D": "초기 벡터 검색 결과를 SageMaker AI로 호스팅된 ML 모델로 재순위화하는 두 단계 검색 아키텍처 구현"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Hybrid Search — 벡터(의미) + 키워드(정확) 결합 검색\n▸ Vector Similarity — 의미론적 유사도\n▸ Keyword Matching — 정확 용어 매칭\n\n【정답 포인트】\n▸ 의료 용어/약자 = 키워드 매칭 필수\n▸ 의미 이해 = 벡터 검색 보존\n▸ OpenSearch 네이티브 하이브리드 검색 지원 → 추가 인프라 불필요\n\n【오답 체크】\n(B) 임베딩 차원 증가는 의료 용어 문제 해결 안 함\n(C) Kendra는 다른 검색 엔진, 마이그레이션 오버헤드\n(D) SageMaker 재순위화는 지연 증가, 운영 복잡성 높음\n\n【시험 포인트】\n정확 + 의미 = 하이브리드 검색 패턴",
    "en_q": "A medical company is building a generative AI (GenAI) application that uses RAG to provide evidence-based medical information. The application uses Amazon OpenSearch Service to retrieve vector embeddings. Users report that searches frequently miss results that contain exact medical terms and acronyms and return too many semantically similar but irrelevant documents. The company needs to improve retrieval quality and maintain low end user latency, even as the document collection grows to millions of documents. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Configure hybrid search by combining vector similarity with keyword matching to improve semantic understanding and exact term and acronym matching.",
      "B": "Increase the dimensions of the vector embeddings from 384 to 1536. Use a post-processing AWS Lambda function to filter out irrelevant results after retrieval.",
      "C": "Replace OpenSearch Service with Amazon Kendra. Use query expansion to handle medical acronyms and terminology variants during pre-processing.",
      "D": "Implement a two-stage retrieval architecture in which initial vector search results are re-ranked by an ML model that is hosted on Amazon SageMaker AI."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384109-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 8,
    "question": "GenAI 요약 애플리케이션(Bedrock 사용)이 애플리케이션 계정의 프라이빗 VPC에서 실행되고, 중앙 데이터 저장소 계정의 governed 데이터 레이크(S3, Athena, Glue)에서 민감 고객 기록을 검색합니다. Bedrock 호출은 프라이빗 연결만 사용하고, 데이터 레이크는 열 수준 크로스 계정 접근 제어를 제공해야 합니다. 어떤 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "애플리케이션 계정에 Bedrock 런타임용 interface VPC 엔드포인트 생성, 프라이빗 서브넷에서 Lambda 실행, IAM 조건으로 승인된 엔드포인트/역할만 호출 허용, 데이터 저장소 계정에 Lake Formation LF-tag 기반 크로스 계정 제어 구성",
      "B": "프라이빗 서브넷에서 Lambda 실행, NAT 게이트웨이로 Bedrock/데이터 레이크 접근, S3 버킷 정책과 ACL로 권한 관리, CloudTrail 로그 주간 검토",
      "C": "애플리케이션 계정에 S3 게이트웨이 엔드포인트만 생성, 공개 엔드포인트로 Bedrock 호출, Lake Formation 데이터베이스 수준 제어, CloudTrail 로그를 CloudWatch Logs로 스트림",
      "D": "Bedrock/S3 VPC 엔드포인트 구성, IAM 경로 기반 정책만으로 데이터 레이크 접근 관리, CloudTrail 로그를 CloudWatch Logs로 전송, 크로스 리전 읽기 공개 폴백 허용"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Interface VPC Endpoint — Bedrock의 프라이빗 연결\n▸ Lake Formation LF-tag — 열 수준 세분화 접근 제어\n▸ 크로스 계정 그랜트 — 계정 간 권한 위임\n\n【정답 포인트】\n▸ 프라이빗 연결 필수 → Interface Endpoint for Bedrock\n▸ 열 수준 제어 → Lake Formation LF-tag 기반 제어\n▸ IAM 조건으로 승인된 엔드포인트만 호출 강제\n\n【오답 체크】\n(B) NAT 게이트웨이는 공개 인터넷 경유로 프라이빗 연결 아님\n(C) 공개 엔드포인트 사용, 데이터베이스 수준은 열 수준 미지원\n(D) IAM 경로 정책은 세분화 제어 미지원\n\n【시험 포인트】\n프라이빗 + 열 수준 = Interface Endpoint + Lake Formation LF-tag",
    "en_q": "A company runs a generative AI (GenAI)-powered summarization application in an application AWS account that uses Amazon Bedrock. The application architecture includes an Amazon API Gateway REST API that forwards requests to AWS Lambda functions that are attached to private VPC subnets. The application summarizes sensitive customer records that the company stores in a governed data lake in a centralized data storage account. The company has enabled Amazon S3, Amazon Athena, and AWS Glue in the data storage account. The company must ensure that calls that the application makes to Amazon Bedrock use only private connectivity between the company's application VPC and Amazon Bedrock. The company's data lake must provide fine-grained column-level access across the company's AWS accounts. Which solution will meet these requirements?",
    "en_opts": {
      "A": "In the application account, create interface VPC endpoints for Amazon Bedrock runtimes. Run Lambda functions in private subnets. Use IAM conditions on inference and data-plane policies to allow calls only to approved endpoints and roles. In the data storage account, use AWS Lake Formation LF-tag-based access control to create table and column-level cross-account grants.",
      "B": "Run Lambda functions in private subnets. Configure a NAT gateway to provide access to Amazon Bedrock and the data lake. Use S3 bucket policies and ACLs to manage permissions. Export AWS CloudTrail logs to Amazon S3 to perform weekly reviews.",
      "C": "Create a gateway endpoint only for Amazon S3 in the application account. Invoke Amazon Bedrock through public endpoints. Use database-level grants in AWS Lake Formation to manage data access. Stream AWS CloudTrail logs to Amazon CloudWatch Logs. Do not set up metric filters or alarms.",
      "D": "Use VPC endpoints to provide access to Amazon Bedrock and Amazon S3 in the application account. Use only IAM path-based policies to manage data lake access. Send AWS CloudTrail logs to Amazon CloudWatch Logs. Periodically create dashboards and allow public fallback for cross-Region reads to reduce setup time."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384110-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 9,
    "question": "미디어 회사는 Amazon Bedrock을 사용하여 AI 생성 콘텐츠에 대한 강력한 거버넌스 프로세스를 구현해야 합니다. 회사는 수백 개의 프롬프트 템플릿을 관리해야 합니다. 여러 팀이 여러 AWS 리전에 걸쳐 템플릿을 사용하여 콘텐츠를 생성합니다. 솔루션은 검토 대기 중인 알림을 포함하는 승인 워크플로우로 버전 제어를 제공해야 합니다. 또한 프롬프트 활동을 문서화하는 상세한 감사 추적과 품질 표준을 적용하기 위한 일관된 프롬프트 매개변수화를 제공해야 합니다. 이러한 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Bedrock Studio 프롬프트 템플릿을 구성합니다. Amazon CloudWatch를 사용하여 프롬프트 사용 메트릭을 표시하는 대시보드를 만듭니다. 콘텐츠의 승인 상태를 Amazon DynamoDB에 저장합니다. AWS Lambda 함수를 사용하여 승인을 적용합니다.",
      "B": "Amazon Bedrock Prompt Management를 사용하여 버전 제어를 구현합니다. AWS CloudTrail로 감사 로깅을 구성합니다. IAM 정책을 사용하여 승인 권한을 제어합니다. 변수를 지정하여 매개변수화된 프롬프트 템플릿을 만듭니다.",
      "C": "AWS Step Functions를 사용하여 승인 워크플로우를 만듭니다. 프롬프트를 Amazon S3의 문서로 저장합니다. 태그를 사용하여 버전 제어를 구현합니다. Amazon EventBridge를 사용하여 알림을 전송합니다.",
      "D": "Amazon SageMaker Canvas를 배포하고 Amazon S3에 저장된 프롬프트 템플릿을 사용합니다. AWS CloudFormation을 사용하여 버전 제어를 구현합니다. AWS Config를 사용하여 승인 정책을 적용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Amazon Bedrock Prompt Management — Bedrock 자체 프롬프트 버전 관리, 승인 워크플로우, 감사 로그 통합 서비스\n▸ AWS CloudTrail — AWS 서비스의 모든 API 호출과 활동을 기록하는 감사 로깅 서비스\n▸ Parameterized Templates — 변수를 사용한 재사용 가능한 프롬프트 템플릿\n\n【정답 포인트】\n▸ \"버전 제어\" + \"승인 워크플로우\" + \"알림\" + \"감사 추적\" → Bedrock Prompt Management가 이 모든 기능을 통합 제공\n▸ CloudTrail로 모든 프롬프트 활동의 상세한 감사 로그 자동 기록\n▸ IAM 정책으로 조직 단위 승인 권한 제어\n▸ 변수 지정으로 일관된 매개변수화 구현\n\n【오답 체크】\n(A) Bedrock Studio는 프롬프트 테스트/개발용이며, Prompt Management처럼 버전 관리, 승인 워크플로우, 자동 감사 통합 없음\n(C) S3 + Step Functions + EventBridge는 수동 구축 방식이며, 운영 오버헤드가 큼. Bedrock 자체 기능 미활용\n(D) SageMaker Canvas는 생성 AI가 아니라 \"No-Code Analytics\"용이며, 프롬프트 관리 기능 부족\n\n【시험 포인트】\n▸ \"수백 개 템플릿\" + \"다중 팀\" + \"다중 리전\" → 관리형 서비스(Prompt Management) 선택\n▸ 함정: 개별 AWS 서비스들로 조합 가능하지만 \"최소 운영 오버헤드\" 가정 → 목적 지향 솔루션\n▸ Bedrock 플랫폼 자체의 거버넌스 기능 활용이 정답의 핵심",
    "en_q": "A media company must use Amazon Bedrock to implement a robust governance process for AI-generated content. The company needs to manage hundreds of prompt templates. Multiple teams use the templates across multiple AWS Regions to generate content. The solution must provide version control with approval workflows that include notifications for pending reviews. The solution must also provide detailed audit trails that document prompt activities and consistent prompt parameterization to enforce quality standards. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure Amazon Bedrock Studio prompt templates. Use Amazon CloudWatch to create dashboards that display prompt usage metrics. Store the approval status of content in Amazon DynamoDB. Use AWS Lambda functions to enforce approvals.",
      "B": "Use Amazon Bedrock Prompt Management to implement version control. Configure AWS CloudTrail for audit logging. Use IAM policies to control approval permissions. Create parameterized prompt templates by specifying variables.",
      "C": "Use AWS Step Functions to create an approval workflow. Store prompts as documents in Amazon S3. Use tags to implement version control. Use Amazon EventBridge to send notifications.",
      "D": "Deploy Amazon SageMaker Canvas with prompt templates that are stored in Amazon S3. Use AWS CloudFormation to implement version control. Use AWS Config to enforce approval policies."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384105-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 10,
    "question": "회사는 Amazon Bedrock 기초 모델(FM)을 사용하여 회사 직원에게 실시간 AI 지원을 제공하는 고객 지원 애플리케이션을 개발하고 있습니다. 애플리케이션은 응답이 생성되는 동안 AI 생성 응답을 문자 단위로 표시해야 합니다. 애플리케이션은 수천 명의 동시 사용자를 지원해야 하며 최소 지연 시간으로 응답해야 합니다. 응답은 일반적으로 생성을 완료하는 데 15~45초가 걸립니다. 이러한 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon API Gateway WebSocket API를 AWS Lambda 통합으로 구성합니다. WebSocket API를 구성하여 Amazon Bedrock InvokeModelWithResponseStream API를 호출하고 WebSocket 연결을 통해 부분 응답을 스트리밍합니다.",
      "B": "Amazon API Gateway REST API를 AWS Lambda 통합으로 구성합니다. REST API를 구성하여 Amazon Bedrock 표준 InvokeModel API를 호출하고 프론트엔드 클라이언트 폴링을 100ms마다 구현하여 완전한 응답 청크를 얻습니다.",
      "C": "IAM 사용자 자격 증명과 InvokeModelWithResponseStream API를 사용하여 프론트엔드 클라이언트에서 Amazon Bedrock으로의 직접 연결을 구현하며 중간 게이트웨이나 프록시 계층은 사용하지 않습니다.",
      "D": "Amazon API Gateway HTTP API를 AWS Lambda 통합으로 구성합니다. HTTP API를 구성하여 완전한 응답을 Amazon DynamoDB 테이블에 캐시하고 여러 페이지 매김 GET 요청을 통해 프론트엔드 클라이언트에 응답을 제공합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ InvokeModelWithResponseStream — Bedrock의 스트리밍 응답 API로 토큰을 실시간으로 전달\n▸ WebSocket API — 양방향 지속적 연결로 실시간 데이터 푸시 가능\n▸ Character-by-Character Display — 스트림되는 텍스트를 문자 단위로 UI에 표시\n\n【정답 포인트】\n▸ \"문자 단위 표시\" → 스트리밍 필수 → InvokeModelWithResponseStream 필수\n▸ \"15~45초 응답 시간\" + \"수천 동시 사용자\" → 폴링/캐싱 불가, 실시간 양방향 연결 필요 → WebSocket\n▸ API Gateway WebSocket + Lambda + InvokeModelWithResponseStream = 완벽한 조합\n\n【오답 체크】\n(B) REST API는 단방향이고, 100ms 폴링은 네트워크 오버헤드 증가로 지연 시간 악화. 장시간 응답에 비효율적\n(C) 클라이언트가 직접 Bedrock 호출 시 IAM 자격 증명 노출 위험 + API Gateway/Lambda의 속도 제한, 로깅, 보안 기능 상실\n(D) DynamoDB 캐시는 응답 완료 후 저장이므로 실시간 스트리밍 불가. 페이지 매김은 문자 단위 표시 요구사항 불만족\n\n【시험 포인트】\n▸ 스트리밍 + 실시간 표시 → 반드시 InvokeModelWithResponseStream + WebSocket 조합\n▸ REST는 \"요청-응답\" 패턴이고, WebSocket은 \"지속 연결\" 패턴 → 실시간 푸시 필요 시 WebSocket\n▸ 함정: HTTP/2 Server-Sent Events 대신 WebSocket 사용 이유 = 양방향 통신과 브라우저 호환성",
    "en_q": "A company is developing a customer support application that uses Amazon Bedrock foundation models (FMs) to provide real-time AI assistance to the company's employees. The application must display AI-generated responses character by character as the responses are generated. The application needs to support thousands of concurrent users with minimal latency. The responses typically take 15 to 45 seconds to finish. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure an Amazon API Gateway WebSocket API with an AWS Lambda integration. Configure the WebSocket API to invoke the Amazon Bedrock InvokeModelWithResponseStream API and stream partial responses through WebSocket connections.",
      "B": "Configure an Amazon API Gateway REST API with an AWS Lambda integration. Configure the REST API to invoke the Amazon Bedrock standard InvokeModel API and implement frontend client-side polling every 100 ms for complete response chunks.",
      "C": "Implement direct frontend client connections to Amazon Bedrock by using IAM user credentials and the InvokeModelWithResponseStream API without any intermediate gateway or proxy layer.",
      "D": "Configure an Amazon API Gateway HTTP API with an AWS Lambda integration. Configure the HTTP API to cache complete responses in an Amazon DynamoDB table and serve the responses through multiple paginated GET requests to frontend clients."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384104-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 11,
    "question": "의료 회사의 Bedrock 애플리케이션(Amazon Nova Pro FM 사용)이 4개의 필수 입력과 일관된 텍스트 형식의 응답을 제공합니다. 괴롭힘 언어를 포함한 응답이 감지되면 Bedrock에 알림을 받고 싶지만 응답을 차단하고 싶지 않습니다. 요구사항을 충족하기 위해 추가로 수행해야 할 단계(2개)는 무엇입니까?",
    "options": {
      "A": "Bedrock Prompt Management로 필수 입력을 변수로 지정, Amazon Nova Pro FM 선택, 응답 형식 지정, 프롬프트를 flow의 prompts 노드에 추가",
      "B": "혐오 콘텐츠 필터를 적용하는 Bedrock Guardrail 생성, 필터 응답을 차단으로 설정, guardrail을 flow의 prompts 노드에 추가",
      "C": "Bedrock 프롬프트 라우터 생성, Amazon Nova Pro FM 지정, 필수 입력을 flow의 input 노드에 변수로 추가, 프롬프트 라우터를 prompts 노드에 추가, 응답 형식을 output 노드에 추가",
      "D": "모욕 콘텐츠 필터를 적용하는 Bedrock Guardrail 생성, 필터 응답을 감지로 설정, guardrail을 flow의 prompts 노드에 추가",
      "E": "Amazon Nova Pro FM을 지정하는 Bedrock 애플리케이션 추론 프로필 생성, 응답 형식을 설명에 지정, 각 입력 변수에 태그 추가, 프로필을 flow의 prompts 노드에 추가"
    },
    "answer": "AD",
    "explanation": "【핵심 용어】\n▸ Bedrock Prompt Management 변수 — 필수 입력 캡처\n▸ Detect 응답 — 차단하지 않고 감지만 수행\n▸ Hate Content Filter — 괴롭힘 언어 감지\n\n【정답 포인트】\n▸\n(A) 필수 입력 4개 → 변수로 지정, 응답 형식 지정\n▸\n(D) 괴롭힘 감지 → 'insults' 필터로 'detect' 응답 설정(차단 아님)\n▸ Flow의 prompts 노드에 적용\n\n【오답 체크】\n(B) 'Block' 응답이면 차단되어 요구사항 미충족\n(C) Prompt Router는 라우팅용이지 입력 관리 아님\n(E) Inference Profile은 모델 선택용이지 입력 변수 관리 아님\n\n【시험 포인트】\n필수 입력 = 변수, 감지만 = detect 필터 응답",
    "en_q": "A company is using Amazon Bedrock to design an application to help researchers apply for grants. The application is based on an Amazon Nova Pro foundation model (FM). The application contains four required inputs and must provide responses in a consistent text format. The company wants to receive a notification in Amazon Bedrock if a response contains bullying language. However, the company does not want to block all flagged responses. The company creates an Amazon Bedrock flow that takes an input prompt and sends it to the Amazon Nova Pro FM. The Amazon Nova Pro FM provides a response. Which additional steps must the company take to meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Use Amazon Bedrock Prompt Management to specify the required inputs as variables. Select an Amazon Nova Pro FM. Specify the output format for the response. Add the prompt to the prompts node of the flow.",
      "B": "Create an Amazon Bedrock guardrail that applies the hate content filter. Set the filter response to block. Add the guardrail to the prompts node of the flow.",
      "C": "Create an Amazon Bedrock prompt router. Specify an Amazon Nova Pro FM. Add the required inputs as variables to the input node of the flow. Add the prompt router to the prompts node. Add the output format to the output node.",
      "D": "Create an Amazon Bedrock guardrail that applies the insults content filter. Set the filter response to detect. Add the guardrail to the prompts node of the flow.",
      "E": "Create an Amazon Bedrock application inference profile that specifies an Amazon Nova Pro FM. Specify the output format for the response in the description. Include a tag for each of the input variables. Add the profile to the prompts node of the flow."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384106-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 12,
    "question": "의료회사는 Amazon Bedrock을 사용하여 의료 전문가의 임상 의사결정을 돕는 검색증강생성(RAG) 애플리케이션을 구축하고 있습니다. 애플리케이션은 환자 정보 검색의 높은 정확도를 달성하고, 생성된 콘텐츠의 할루시네이션을 식별하며, 인간 검토 비용을 줄여야 합니다. 이러한 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Comprehend를 사용하여 RAG 응답을 분석 및 분류하고 의료 개체 및 관계를 추출합니다. AWS Step Functions를 사용하여 자동화된 평가를 오케스트레이션합니다. Amazon CloudWatch 메트릭을 구성하여 개체 인식 신뢰도 점수를 추적합니다. 정확도가 지정된 임계값 아래로 떨어질 때 경고를 보내도록 CloudWatch를 구성합니다.",
      "B": "의료 콘텐츠에 맞춰 미세 조정된 특화된 모델을 사용하는 자동화된 대형 언어 모델(LLM) 기반 평가를 구현합니다. AWS Lambda 함수를 배포하여 평가를 병렬화합니다. 관련성 및 사실 정확도를 추적하는 Amazon CloudWatch 메트릭에 결과를 게시합니다.",
      "C": "Amazon CloudWatch Synthetics를 구성하여 알려진 답변이 있는 테스트 쿼리를 정기적으로 생성하고 모델 성공률을 추적합니다. 합성 테스트 결과를 예상 결과와 비교하는 대시보드를 설정합니다.",
      "D": "자동화된 LLM-as-a-Judge 평가로 응답을 초기 선별하고 엣지 케이스에 대해 대상 지정된 인간 검토를 수행하는 하이브리드 평가 시스템을 배포합니다. Amazon SageMaker Feature Store를 사용하여 평가 데이터세트를 유지합니다. 기본 제공 Amazon Bedrock 평가를 사용하여 검색 정밀도 및 할루시네이션 비율을 추적합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ LLM-as-a-Judge — 전문 LLM을 사용하여 다른 모델의 출력을 평가하는 기법\n▸ Hallucination Detection — 모델이 거짓 정보를 생성하는 것을 감지\n▸ Hybrid Evaluation System — 자동화 + 인간 검토 결합 방식\n\n【정답 포인트】\n▸ \"높은 정확도\" + \"할루시네이션 식별\" + \"인간 검토 비용 줄이기\" → 자동화 먼저, 필요할 때만 인간 개입\n▸ LLM-as-a-Judge로 의료 콘텐츠 품질 판정 가능\n▸ Feature Store로 평가 데이터셋 관리 및 버전 추적\n▸ Bedrock 평가로 RAG 성능(검색 정밀도, 할루시네이션) 자동 추적\n\n【오답 체크】\n(A) Comprehend는 NER(개체명 인식)은 가능하지만, 할루시네이션 감지나 의료 전문가 수준의 정확도 평가에 부족\n(B) LLM-as-a-Judge만으로는 \"인간 검토 비용 절감\"을 충분히 달성할 수 없음. 하이브리드 방식이 필요\n(C) CloudWatch Synthetics는 \"알려진 답변\" 기반이므로 의료 도메인의 미묘한 정확도 차이 평가 불가\n\n【시험 포인트】\n▸ \"높은 정확도\" + \"비용 절감\" → 자동화 우선 + 타겟 인간 검토 (하이브리드 필수)\n▸ RAG의 2가지 평가 축: 검색 정밀도(Retrieval Precision) + 생성 정확도(Generation Factuality)\n▸ Bedrock 통합 평가 지표 활용이 시험 포인트",
    "en_q": "A healthcare company is using Amazon Bedrock to build a Retrieval Augmented Generation (RAG) application that helps practitioners make clinical decisions. The application must achieve high accuracy for patient information retrievals, identify hallucinations in generated content, and reduce human review costs. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon Comprehend to analyze and classify RAG responses and to extract medical entities and relationships. Use AWS Step Functions to orchestrate automated evaluations. Configure Amazon CloudWatch metrics to track entity recognition confidence scores. Configure CloudWatch to send an alert when accuracy falls below specified thresholds.",
      "B": "Implement automated large language model (LLM)-based evaluations that use a specialized model that is fine-tuned for medical content to assess all responses. Deploy AWS Lambda functions to parallelize evaluations. Publish results to Amazon CloudWatch metrics that track relevance and factual accuracy.",
      "C": "Configure Amazon CloudWatch Synthetics to generate test queries that have known answers on a regular schedule, and track model success rates. Set up dashboards that compare synthetic test results against expected outcomes.",
      "D": "Deploy a hybrid evaluation system that uses an automated LLM-as-a-judge evaluation to initially screen responses and targeted human reviews for edge cases. Use Amazon SageMaker Feature Store to maintain evaluation datasets. Use a built-in Amazon Bedrock evaluation to track retrieval precision and hallucination rates."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384103-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 13,
    "question": "AWS Control Tower로 구성된 회사가 EU 내에서만 민감 데이터를 처리하며 eu-central-1 리전만 사용합니다. SCP로 데이터 상주 정책을 강제하고, GenAI 개발자에게 Bedrock 전체 권한을 부여했습니다. Amazon Nova Pro를 eu-central-1에서만 크로스 리전 추론(CRI)으로 사용하도록 해야 합니다. 개발자가 Bedrock Chat/Text 플레이그라운드에서 \"SCP가 명시적으로 액션 거부\" 오류를 받습니다. 솔루션(2개)은 무엇입니까?",
    "options": {
      "A": "GenAI 개발자 IAM 역할에 AdministratorAccess 정책 추가",
      "B": "기존 SCP를 확장하여 eu.amazon.nova-pro-v1:0 추론 프로필에 CRI 활성화",
      "C": "eu-west-3 리전에서 Amazon Bedrock 모델 접근 활성화",
      "D": "GenAI 개발자 IAM 역할이 모든 EU AWS 리전에서 eu.amazon.nova-pro.v1:0 추론 프로필로 Amazon Nova Pro 호출 권한 있는지 검증",
      "E": "기존 SCP를 확장하여 eu.* 추론 프로필에 CRI 활성화"
    },
    "answer": "BD",
    "explanation": "【핵심 용어】\n▸ CRI(Cross-Region Inference) — 특정 리전의 모델을 다른 리전에서 호출\n▸ eu.amazon.nova-pro-v1:0 — EU 내 CRI 추론 프로필\n▸ SCP — 서비스 제어 정책으로 리전 제한\n\n【정답 포인트】\n▸\n(B) SCP 확장 → eu.amazon.nova-pro-v1:0 CRI 프로필에 대한 호출 허용\n▸\n(D) 개발자 권한 검증 → eu-central-1뿐 아니라 모든 EU 리전의 CRI 엔드포인트 호출 가능해야 함\n▸ CRI = eu-central-1 모델을 다른 EU 리전에서 호출 가능\n\n【오답 체크】\n(A) AdministratorAccess는 SCP 우회 불가, 거버넌스 상실\n(C) eu-west-3은 eu-central-1이 아님, 정책 위반\n(E) eu.* 와일드카드는 범위 너무 넓음\n\n【시험 포인트】\nEU CRI = eu.amazon.nova-pro-v1:0 + 모든 EU 리전 권한",
    "en_q": "Company configures a landing zone in AWS Control Tower. The company handles sensitive data that must remain within the European Union. The company must use only the eu-central-1 Region. The company uses SCPs to enforce data residency policies. GenAI developers at the company are assigned IAM roles that have full permissions for Amazon Bedrock. The company must ensure that GenAI developers can use the Amazon Nova Pro model through Amazon Bedrock only by using cross-Region inference (CRI) and only in eu-central-1. The company enables model access for the GenAI developer IAM roles in Amazon Bedrock. However, when a GenAI developer attempts to invoke the model through the Amazon Bedrock Chat/Text playground, the GenAI developer receives the following error. User: arn:aws:sts::123456789012:assumed-role/AssumedDevRole/DevUserName Action: bedrock:InvokeModelWithResponseStream On resource(s): arn:aws:bedrock:eu-west-3::foundation-model/amazon.nova-pro-v1:0 Context: a service control policy explicitly denies the action The company needs a solution to resolve the error. The solution must retain the company's existing governance controls and must provide precise access control. The solution must comply with the company's existing data residency policies. Which combination of solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Add an AdministratorAccess policy to the GenAI developer IAM role.",
      "B": "Extend the existing SCPs to enable CRI for the eu.amazon.nova-pro-v1:0 inference profile.",
      "C": "Enable Amazon Bedrock model access for Amazon Nova Pro in the eu-west-3 Region.",
      "D": "Validate that the GenAI developer IAM roles have permissions to invoke Amazon Nova Pro through the eu.amazon.nova-pro.v1:0 inference profile on all European Union AWS Regions that can serve the model.",
      "E": "Extend the existing SCP to enable CRI for the eu.* inference profile."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384239-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 14,
    "question": "금융 회사의 Bedrock 기반 고객 서비스 AI 어시스턴트가 투자 조언 논의 금지, 유해 콘텐츠 차단, PII 마스킹, 감시 로그 유지를 해야 합니다. 사용자 입력과 모델 응답에 콘텐츠 필터링을 적용하고, 거짓양성을 최소화해야 합니다. 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "단일 guardrail 구성, 모든 카테고리 콘텐츠 필터를 높음으로 설정, 투자 조언 거부 토픽 설정, 모든 PII 엔티티 차단 액션 설정",
      "B": "계층형 정책으로 다중 guardrail 구성, guardrail 1은 높음 필터(공개 상호작용용 PII 차단), guardrail 2는 중간 필터(내부용 PII 마스킹), 투자 조언/맥락 기반 grounding 체크용 주제별 guardrail",
      "C": "guardrail 구성(유해 콘텐츠는 중간 필터), 투자 조언 거부 토픽(명확한 정의/샘플 포함), PII 민감 정보 필터(응답에서 마스킹, 입력에서 차단), 감사용 커스텀 차단 메시지와 입력/출력 평가 활성화",
      "D": "사용 사례별 별도 guardrail: 유해 콘텐츠 필터용, 투자 조언 토픽 필터용, PII 민감 정보 필터용, Step Functions로 순차 chaining, 콘텐츠 분류 기반 조건부 로직"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ 중간 필터(Medium) — 거짓양성 최소화\n▸ Denied Topics — 투자 조언 차단\n▸ Mask/Block Actions — PII 응답 마스킹, 입력 차단\n▸ Audit Messages — 감사 로깅\n\n【정답 포인트】\n▸ 거짓양성 최소 → 중간 필터 설정\n▸ 투자 조언 차단 → 명확한 정의/샘플 포함으로 정확도 향상\n▸ PII 처리 → 응답에서 마스킹(정보 제공), 입력에서 차단(수집 방지)\n▸ 감시 로그 → 커스텀 차단 메시지 + 입력/출력 평가 활성화\n\n【오답 체크】\n(A) 높은 필터 = 거짓양성 증가\n(B) 다중 guardrail chaining 복잡, 단일 guardrail 추천\n(D) guardrail 4개 chaining = 운영 오버헤드 증가\n\n【시험 포인트】\n정확+유연 = 중간필터 + 명확한정의 + Mask/Block 조합",
    "en_q": "A financial services company is developing a customer service AI assistant by using Amazon Bedrock. The AI assistant must not discuss investment advice with users. The AI assistant must block harmful content, mask personally identifiable information (PII), and maintain audit trails for compliance reporting. The AI assistant must apply content filtering to both user inputs and model responses based on content sensitivity. The company requires an Amazon Bedrock guardrail configuration that will effectively enforce policies with minimal false positives. The solution must provide multiple handling strategies for multiple types of sensitive content. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure a single guardrail and set content filters to high for all categories. Set up denied topics for investment advice and include sample phrases to block. Set up sensitive information filters that apply the block action for all PII entities. Apply the guardrail to all model inference calls.",
      "B": "Configure multiple guardrails by using tiered policies. Create one guardrail and set content filters to high. Configure the guardrail to block PII for public interactions. Configure a second guardrail and set content filters to medium. Configure the second guardrail to mask PII for internal use. Configure multiple topic-specific guardrails to block investment advice and set up contextual grounding checks.",
      "C": "Configure a guardrail and set content filters to medium for harmful content. Set up denied topics for investment advice and include clear definitions and sample phrases to block. Configure sensitive information filters to mask PII in responses and to block financial information in inputs. Enable both input and output evaluations that use custom blocked messages for audits.",
      "D": "Create a separate guardrail for each use case. Create one guardrail that applies a harmful content filter. Create a guardrail to apply topic filters for investment advice. Create a guardrail to apply sensitive information filters to block PII. Use AWS Step Functions to chain the guardrails together sequentially. Use conditional logic based on content classification."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384243-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 15,
    "question": "전자상거래 회사의 GenAI 제품 추천 솔루션(Anthropic Claude + Bedrock)에서 추천 제품이 웹사이트에 없거나 관련 없고, 일부 추천이 시간이 오래 걸립니다. 대부분 고객-솔루션 상호작용이 고유하며, 솔루션이 제품 카탈로그에 없는 제품을 추천합니다. 이 문제를 해결해야 합니다. 어떤 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "Bedrock Guardrails로 grounding 증가, Automated Reasoning 체크 활성화, provisioned throughput 설정",
      "B": "프롬프트 엔지니어링으로 관련 제품만 제한, InvokeModelWithResponseStream 같은 스트리밍 기법으로 체감 지연 감소",
      "C": "Bedrock Knowledge Base 생성, RAG 구현, PerformanceConfigLatency 파라미터를 optimized로 설정",
      "D": "Amazon OpenSearch Service에 제품 카탈로그 저장, 모델 추천을 제품 카탈로그와 검증, DynamoDB로 응답 캐싱 구현"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Knowledge Base — 소유 데이터로 모델 기초 제공\n▸ RAG — 생성 전 관련 문서 검색하여 환각 방지\n▸ PerformanceConfigLatency — 검색 성능 최적화 설정\n\n【정답 포인트】\n▸ 제품 카탈로그 없음 → Knowledge Base에 카탈로그 저장 필수\n▸ 무관 추천 → RAG로 검색 기반 응답 생성\n▸ 느린 응답 → Latency 최적화 파라미터 사용\n\n【오답 체크】\n(A) Guardrails는 안전성/규정 준수용, 카탈로그 불일치 해결 미지원\n(B) 프롬프트만으로는 없는 제품 추천 방지 불가\n(D) OpenSearch + 수동 검증은 RAG 솔루션 아님\n\n【시험 포인트】\n카탈로그 정렬 + 지연 = Knowledge Base + RAG + Latency최적화",
    "en_q": "An ecommerce company is developing a generative AI (GenAI) solution that uses Amazon Bedrock with Anthropic Claude to recommend products to customers. Customers report that some of the recommended products are not available for sale on the website or are not relevant to the customer. Customers also report that the solutions takes a long time to generate some recommendations. The company investigates the issues and finds that most interactions between customers and the product recommendation solution are unique. The company confirms that the solutions recommends products that are not in the company's product catalog. The company must resolve these issues. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Increase grounding within Amazon Bedrock Guardrails. Enable Automated Reasoning checks. Set up provisioned throughput.",
      "B": "Use prompt engineering to restrict the model responses to relevant products. Use streaming techniques such as the InvokeModelWithResponseStream action to reduce perceived latency for the customers.",
      "C": "Create an Amazon Bedrock knowledge base. Implement Retrieval Augmented Generation (RAG). Set the PerformanceConfigLatency parameter to optimized.",
      "D": "Store product catalog data in Amazon OpenSearch Service. Validate the model's product recommendations against the product catalog. Use Amazon DynamoDB to implement response caching."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384230-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 16,
    "question": "AWS Lambda와 REST API를 사용한 추론 에이전트가 상호작용 간 메모리를 유지하고 에이전트 상태를 공유하며, 이벤트 기반과 동기 호출을 모두 지원해야 합니다. 접근 제어와 세션 기반 권한 강제를 필수로 합니다. 가장 확장 가능한 솔루션의 조합(2개)은 무엇입니까?",
    "options": {
      "A": "Amazon Bedrock AgentCore로 메모리/세션 인식 추론 관리, 내장 ID 지원, 이벤트 처리, 관찰성 포함하여 배포",
      "B": "Lambda 함수와 REST API를 Amazon API Gateway/EventBridge로 액션으로 등록, Bedrock AgentCore에서 커스텀 오케스트레이션 코드 없이 Lambda/REST API 호출 가능하게 활성화",
      "C": "추론용 Bedrock Agents, 오케스트레이션용 Step Functions/SQS 큐, 에이전트 상태를 DynamoDB에 저장하여 단계 간 메모리 유지",
      "D": "Amazon ECS on API Gateway에 컨테이너 기반 추론 로직 배포, Aurora로 메모리/ID 데이터 저장",
      "E": "Amazon Kendra + Bedrock으로 커스텀 RAG 파이프라인 구축, Lambda로 도구 호출 오케스트레이션, S3에 에이전트 상태 저장"
    },
    "answer": "AB",
    "explanation": "【핵심 용어】\n▸ Bedrock AgentCore — 메모리, 세션, ID, 이벤트 처리 통합\n▸ 액션 등록 — API Gateway/EventBridge를 통한 선언형 통합\n▸ 커스텀 오케스트레이션 제거 — 확장성 향상\n\n【정답 포인트】\n▸\n(A) AgentCore = 메모리+세션+ID+이벤트 처리 전담\n▸\n(B) AgentCore가 Lambda/REST API를 액션으로 자동 호출, 오케스트레이션 코드 불필요\n▸ 확장성 = 선언형 구성 + 서버리스\n\n【오답 체크】\n(C) Step Functions + DynamoDB는 커스텀 오케스트레이션 = 확장 제한\n(D) ECS는 관리 오버헤드 증가\n(E) RAG 파이프라인은 에이전트 솔루션 아님\n\n【시험 포인트】\n확장성 = AgentCore(메모리+세션) + 액션 등록(자동 호출)",
    "en_q": "A company is using AWS Lambda and REST APIs to build a reasoning agent to automate support workflows. The system must preserve memory across interactions, share the relevant agent state, and support event-driven invocation and synchronous invocation. The system must also enforce access control and session-based permissions. Which combination of steps provides the MOST scalable solution? (Choose two.)",
    "en_opts": {
      "A": "Use Amazon Bedrock AgentCore to manage memory and session-aware reasoning. Deploy the agent with built-in identity support, event handling, and observability.",
      "B": "Register the Lambda functions and the REST APIs as actions by using Amazon API Gateway and Amazon EventBridge. Enable Amazon Bedrock AgentCore to invoke the Lambda functions and the REST APIs without custom orchestration code.",
      "C": "Use Amazon Bedrock Agents for reasoning and conversation management. Use AWS Step Functions and Amazon SQS queues for orchestration. Store the agent state in Amazon DynamoDB to maintain memory between steps.",
      "D": "Deploy the reasoning logic as a container on Amazon ECS behind Amazon API Gateway. Use Amazon Aurora to store memory data and identity data.",
      "E": "Build a custom RAG pipeline by using Amazon Kendra and Amazon Bedrock. Use AWS Lambda to orchestrate tool invocations. Store the agent state in Amazon S3."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384244-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 17,
    "question": "투자 은행의 RAG 애플리케이션이 여러 투자 수단, 시장 섹터, 규제 환경 간 복잡한 재무 관계를 분석합니다. 데이터셋에 다중 홉 관계가 있는 상호 연결된 엔티티가 많습니다. 직접 및 간접 관계를 종합적으로 파악하여 정확한 투자 조언을 제공해야 합니다. 3초 이내 응답 제공이 필수입니다. 최소 운영 오버헤드로 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Bedrock Knowledge Bases + Graph RAG + Amazon Neptune Analytics로 재무 데이터 저장, 다중 홉 엔티티 관계 분석, 문서 간 관련 정보 자동 식별",
      "B": "Bedrock Knowledge Bases + OpenSearch Service 벡터 저장소 + Lambda로 커스텀 관계 식별 로직 구현, 순차적 다중 벡터 임베딩 쿼리",
      "C": "OpenSearch Serverless 벡터 DB + k-NN 검색, 애플리케이션 계층(EC2 Auto Scaling)에서 수동 관계 매핑 구현",
      "D": "DynamoDB로 재무 데이터 저장, Lambda 함수로 입력 질문 기반 관련 레코드 조회, SageMaker AI로 응답 생성"
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Graph RAG — 그래프 구조로 다중 홉 관계 자동 추적\n▸ Neptune Analytics — 고성능 그래프 쿼리 엔진\n▸ 다중 홉 관계 — 간접 관계 파악\n\n【정답 포인트】\n▸ 다중 홉 관계 필수 → 그래프 기반 모델링 필수\n▸ Graph RAG → Bedrock Knowledge Bases + Neptune으로 통합\n▸ 자동 관계 식별 → 수동 매핑 제거, 3초 응답 달성\n\n【오답 체크】\n(B) 순차적 벡터 쿼리는 다중 홉 관계 추적 제한\n(C) 수동 관계 매핑 = 운영 오버헤드 증가\n(D) DynamoDB는 관계 쿼리 전문 아님\n\n【시험 포인트】\n다중 홉 관계 = Graph RAG + Neptune Analytics",
    "en_q": "A financial services company is developing a Retrieval Augmented Generation (RAG) application to help investment analysts query complex financial relationships across multiple investment vehicles, market sectors, and regulatory environments. The dataset contains highly interconnected entities that have multi-hop relationships. The analysts must be able to examine the relationships holistically to provide accurate investment guidance. The application must deliver comprehensive answers that capture indirect relationships between financial entities. The application must produce responses in less than 3 seconds. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon Bedrock Knowledge Bases with Graph RAG and Amazon Neptune Analytics to store the financial data. Analyze the multi-hop relationships between entities and automatically identify related information across documents.",
      "B": "Use Amazon Bedrock Knowledge Bases and an Amazon OpenSearch Service vector store to implement custom relationship identification logic that uses AWS Lambda functions to query multiple vector embeddings in sequence.",
      "C": "Use an Amazon OpenSearch Serverless vector database with k-nearest neighbor (k-NN) searches. Implement manual relationship mapping in an application layer that runs in an Amazon EC2 Auto Scaling group.",
      "D": "Use Amazon DynamoDB to store financial data in a custom indexing system. Use an AWS Lambda function to query relevant records based on input questions. Use Amazon SageMaker AI to generate responses."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384221-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 18,
    "question": "의료 회사의 Bedrock 기반 임상 문서 요약 애플리케이션이 응답 품질이 일관적이지 않고 간헐적 환각이 발생합니다. 월간 비용이 예상을 40% 초과합니다. 개발자는 실시간에 가까운 모니터링으로 환각 감지, 이상 토큰 사용 식별, 조기 비용 경고를 구현해야 합니다. 최소 커스텀 개발과 유지보수 오버헤드를 원합니다. 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "CloudWatch 알람으로 InputTokenCount/OutputTokenCount 메트릭 모니터링, S3에 모델 호출 로그 저장, AWS Glue/Athena로 환각 식별",
      "B": "Bedrock 평가 작업으로 LLM 기반 판정으로 환각 감지, CloudWatch로 토큰 사용 추적, Lambda 함수로 CloudWatch 메트릭 처리, 사용 패턴 알림 전송",
      "C": "Bedrock에 S3로 모델 호출 로그 저장, 텍스트 출력 로깅 활성화, Bedrock Guardrails로 맥락 기반 grounding 체크 환각 감지, CloudWatch 이상 감지 알람으로 토큰 사용 메트릭 모니터링",
      "D": "CloudTrail로 모든 Bedrock API 호출 로깅, QuickSight 커스텀 대시보드로 토큰 사용 패턴 시각화, SageMaker Model Monitor로 생성 요약의 품질 drift 감지"
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Bedrock Guardrails Contextual Grounding — 환각 감지 전문\n▸ CloudWatch Anomaly Detection — 실시간 이상 탐지\n▸ 모델 호출 로그 → 감시 기반\n\n【정답 포인트】\n▸ 환각 감지 → Guardrails contextual grounding 체크(내장 기능)\n▸ 토큰 사용 이상 → CloudWatch 이상 감지 알람\n▸ 최소 개발 → Bedrock 내장 기능 조합\n\n【오답 체크】\n(A) Glue/Athena는 배치 처리, 실시간 모니터링 미지원\n(B) 평가 작업은 정기적 실행, 실시간 성능 저하\n(D) QuickSight/SageMaker는 추가 개발 필요\n\n【시험 포인트】\n환각+비용 모니터링 = Guardrails grounding + CloudWatch 이상 감지",
    "en_q": "A healthcare company uses Amazon Bedrock to deploy an application that generates summaries of clinical documents. The application experiences inconsistent response quality with occasional factual hallucinations. Monthly costs exceed the company's projections by 40%. A GenAI developer must implement a near real-time monitoring solution to detect hallucinations, identify abnormal token consumption, and provide early warnings of cost anomalies. The solution must require minimal custom development work and maintenance overhead. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure Amazon CloudWatch alarms to monitor InputTokenCount and OutputTokenCount metrics to detect anomalies. Store model invocation logs in an Amazon S3 bucket. Use AWS Glue and Amazon Athena to identify potential hallucinations.",
      "B": "Run Amazon Bedrock evaluation jobs that use LLM-based judgments to detect hallucinations. Configure Amazon CloudWatch to track token usage. Create an AWS Lambda function to process CloudWatch metrics. Configure the Lambda function to send usage pattern notifications.",
      "C": "Configure Amazon Bedrock to store model invocation logs in an Amazon S3 bucket. Enable text output logging. Configure Amazon Bedrock guardrails to run contextual grounding checks to detect hallucinations. Create Amazon CloudWatch anomaly detection alarms for token usage metrics.",
      "D": "Use AWS CloudTrail to log all Amazon Bedrock API calls. Create a custom dashboard in Amazon QuickSight to visualize token usage patterns. Use Amazon SageMaker Model Monitor to detect quality drift in generated summaries."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384241-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 19,
    "question": "GenAI 애플리케이션이 다양한 내부/외부 데이터 소스 기반의 콘텐츠를 생성하며, 생성 출력의 전체 추적성을 보장해야 합니다. 데이터 소스 등록, 메타데이터 태깅으로 원본 출처에 콘텐츠 속성 부여, 파이프라인 전체의 데이터 접근/사용 감시 로그 유지를 필수로 합니다. 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "AWS Lake Formation으로 데이터 소스 카탈로그, 접근 제어, S3에 메타데이터 태그 직접 적용, CloudTrail로 API 활동 모니터링",
      "B": "AWS Glue Data Catalog로 데이터 소스 등록/태깅, CloudWatch Logs로 접근 패턴/애플리케이션 동작 모니터링",
      "C": "S3에 데이터 저장, 객체 태깅으로 출처 속성 부여, AWS Glue Data Catalog로 스키마 정보 관리, CloudTrail로 S3 버킷 접근 로깅",
      "D": "AWS Glue Data Catalog로 모든 데이터 소스 등록, 메타데이터 태그 적용하여 데이터 소스 속성 부여, CloudTrail로 서비스 전반의 접근/활동 로깅"
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ AWS Glue Data Catalog — 데이터 소스 중앙 등록, 메타데이터 관리\n▸ Metadata Tags — 출처 속성 부여\n▸ CloudTrail — 전 서비스 접근/활동 감시\n\n【정답 포인트】\n▸ 데이터 소스 등록 → Glue Data Catalog 통합 카탈로그\n▸ 메타데이터 태깅 → Glue의 태그 기능으로 출처 명확화\n▸ 전체 감시 → CloudTrail이 모든 AWS 서비스 API 호출 기록\n\n【오답 체크】\n(A) Lake Formation은 접근 제어 전담, 등록용이 아님\n(B) CloudWatch Logs는 애플리케이션만 기록, 서비스 간 활동 미포함\n(C) S3 객체 태깅은 저수준, Glue Catalog 메타데이터와 비교 확장성 낮음\n\n【시험 포인트】\n추적성 = Glue Catalog(등록+태깅) + CloudTrail(전체 감시)",
    "en_q": "A company is building a generative AI (GenAI) application that produces content based on a variety of internal and external data sources. The company wants to ensure that the generated output is fully traceable. The application must support data source registration and enable metadata tagging to attribute content to its original source. The application must also maintain audit logs of data access and usage throughout the pipeline. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS Lake Formation to catalog data sources and control access. Apply metadata tags directly in Amazon S3. Use AWS CloudTrail to monitor API activity.",
      "B": "Use AWS Glue Data Catalog to register and tag data sources. Use Amazon CloudWatch Logs to monitor access patterns and application behavior.",
      "C": "Store data in Amazon S3 and use object tagging for attribution. Use AWS Glue Data Catalog to manage schema information. Use AWS CloudTrail to log access to S3 buckets.",
      "D": "Use AWS Glue Data Catalog to register all data sources. Apply metadata tags to attribute data sources. Use AWS CloudTrail to log access and activity across services."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384228-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 20,
    "question": "금융 서비스 회사가 Amazon Bedrock을 사용하여 분기별 보고서를 처리하는 문서 분석 시스템을 구축해야 합니다. 시스템은 재무 데이터를 분석하고, 감정 분석을 수행하며, 보고서 배치 전체에서 규정 준수를 검증해야 합니다. 각 배치는 5개의 보고서를 포함합니다. 각 보고서는 여러 foundation model(FM) 호출이 필요합니다. 솔루션은 각 배치에 대해 10초 내에 분석을 완료해야 합니다. 현재 순차 처리는 각 배치에 45초가 걸립니다. 이 요구 사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "프로비저닝된 동시성을 사용하는 AWS Lambda 함수를 사용하여 각 분석 유형을 순차적으로 처리합니다. Lambda 함수 타임아웃을 10초로 구성합니다. 지수 백오프를 사용한 자동 재시도를 구성합니다.",
      "B": "AWS Step Functions의 Parallel 상태를 사용하여 각 분석 유형에 대해 별도의 AWS Lambda 함수를 동시에 호출합니다. Amazon Bedrock 클라이언트 타임아웃을 구성합니다. Amazon CloudWatch 메트릭을 사용하여 실행 시간과 모델 추론 지연 시간을 추적합니다.",
      "C": "분석 요청을 버퍼링하기 위해 Amazon SQS 큐를 생성합니다. 예약된 동시성으로 여러 AWS Lambda 함수를 배포합니다. 각 Lambda 함수를 구성하여 각 보고서의 다양한 측면을 순차적으로 처리한 후 결과를 결합합니다.",
      "D": "보고서를 순차적으로 처리하는 컨테이너를 실행하는 Amazon ECS 클러스터를 배포합니다. 로드 밸런서를 사용하여 배치 워크로드를 배포합니다. CPU 사용률을 기반으로 한 자동 스케일링 정책을 구성합니다."
    },
    "answer": "B",
    "explanation": "이 문제는 시간 제약(10초)이 있는 다중 분석 작업(재무 분석, 감정 분석, 규정 준수 검증)의 병렬 처리를 요구합니다. Step Functions의 Parallel 상태는 여러 Lambda 함수를 동시에 실행하여 전체 처리 시간을 단축합니다. 45초에서 10초로 줄이려면 3개 분석이 병렬로 실행되어야 합니다.\n\n옵션 A는 순차 처리(\"sequentially\")로 시간을 줄일 수 없습니다. 옵션 C의 SQS 큐도 여전히 순차 처리입니다.\n\n옵션 D는 ECS의 오버헤드가 높아 10초 내 달성이 어렵습니다. Step Functions Parallel 상태는 각 Lambda가 독립적으로 Bedrock을 호출하게 하고, CloudWatch 메트릭은 성능 모니터링을 제공합니다.",
    "en_q": "A financial services company needs to build a document analysis system that uses Amazon Bedrock to process quarterly reports. The system must analyze financial data, perform sentiment analysis, and validate compliance across batches of reports. Each batch contains 5 reports. Each report requires multiple foundation model (FM) calls. The solution must finish the analysis within 10 seconds for each batch. Current sequential processing takes 45 seconds for each batch. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS Lambda functions with provisioned concurrency to process each analysis type sequentially. Configure the Lambda function timeouts to 10 seconds. Configure automatic retries with exponential backoff.",
      "B": "Use AWS Step Functions with a Parallel state to invoke separate AWS Lambda functions for each analysis type simultaneously. Configure Amazon Bedrock client timeouts. Use Amazon CloudWatch metrics to track execution time and model inference latency.",
      "C": "Create an Amazon SQS queue to buffer analysis requests. Deploy multiple AWS Lambda functions with reserved concurrency. Configure each Lambda function to process different aspects of each report sequentially and then combine the results.",
      "D": "Deploy an Amazon ECS cluster that runs containers that process each report sequentially. Use a load balancer to distribute batch workloads. Configure an auto-scaling policy based on CPU utilization to handle demand fluctuations."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384237-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 21,
    "question": "회사가 Amazon Bedrock을 사용하여 민감한 고객 문의를 처리하는 고객 대면 AI 어시스턴트를 구축하고 있습니다. 회사는 정교한 프롬프트 인젝션 공격을 차단하기 위해 심층 방어 보안 제어를 사용해야 합니다. 회사는 모든 보안 개입의 감사 로그를 유지해야 합니다. AI 어시스턴트는 크로스 리전 장애 조치 기능을 가져야 합니다. 이 요구 사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "프롬프트 인젝션 공격을 방지하기 위해 콘텐츠 필터를 사용하도록 Amazon Bedrock Guardrails을 구성합니다. 콘텐츠 필터를 높음으로 설정합니다. Guardrail 프로필을 사용하여 크로스 리전 Guardrail 추론을 구현합니다. Amazon CloudWatch Logs를 사용하여 상세한 Guardrail 개입 이벤트를 캡처합니다.",
      "B": "프롬프트 인젝션 공격을 방지하기 위해 콘텐츠 필터를 사용하도록 Amazon Bedrock Guardrails을 구성합니다. 콘텐츠 필터를 높음으로 설정합니다. AWS WAF를 사용하여 의심스러운 입력을 차단합니다. AWS CloudTrail을 사용하여 감사를 위해 API 호출을 로깅합니다.",
      "C": "프롬프트 인젝션 공격을 감지하기 위해 Amazon Comprehend 사용자 정의 분류를 배포합니다. 요청을 검증하기 위해 Amazon API Gateway를 사용합니다. Amazon CloudWatch Logs를 사용하여 상세한 개입 이벤트를 캡처합니다.",
      "D": "해로운 콘텐츠를 방지하기 위해 사용자 정의 콘텐츠 필터를 사용하도록 Amazon Bedrock Guardrails을 구성합니다. 콘텐츠 필터를 높음으로 설정합니다. 알려진 공격 패턴을 방지하기 위해 단어 필터를 사용합니다. 장애 조치 기능을 제공하기 위해 크로스 리전 Guardrail 복제를 구성합니다. 규정 준수 감사를 위해 로그를 AWS CloudTrail에 저장합니다."
    },
    "answer": "A",
    "explanation": "Amazon Bedrock Guardrails는 프롬프트 인젝션 공격에 대한 심층 방어를 제공하는 전용 보안 기능입니다. Guardrail 프로필을 사용하면 크로스 리전에서 일관된 보안 정책을 적용할 수 있으며, 이는 장애 조치 요구 사항을 충족합니다. CloudWatch Logs는 Guardrail 개입 이벤트의 상세한 감사 로그를 수집합니다. 옵션 B의 AWS WAF는 API 레이어에서만 작동하므로 LLM 레벨의 프롬프트 인젝션을 방지하지 못합니다.\n\n옵션 C는 Bedrock Guardrails의 기본 기능을 사용하지 않습니다.\n\n옵션 D는 \"크로스 리전 Guardrail 복제\"라는 존재하지 않는 기능을 언급합니다. Guardrails는 Bedrock의 기본 보안 솔루션이며 CloudWatch Logs와 통합되어 감사를 지원합니다.",
    "en_q": "A company is using Amazon Bedrock to build a customer-facing AI assistant to handle sensitive customer inquiries. The company must use defense-in-depth safety controls to block sophisticated prompt injection attacks. The company must keep audit logs of all safety interventions. The AI assistant must have cross-Region failover capabilities. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure Amazon Bedrock guardrails to use content filters to protect against prompt injection attacks. Set the content filters to high. Use a guardrail profile to implement cross-Region guardrail inference. Use Amazon CloudWatch Logs with custom metrics to capture detailed guardrail intervention events.",
      "B": "Configure Amazon Bedrock guardrails to use content filters to protect against prompt injection attacks. Set the content filters to high. Use AWS WAF to block suspicious inputs. Use AWS CloudTrail to log API calls for audits.",
      "C": "Deploy Amazon Comprehend custom classification to detect prompt injection attacks. Use Amazon API Gateway to validate requests. Use Amazon CloudWatch Logs with custom metrics to capture detailed intervention events.",
      "D": "Configure Amazon Bedrock guardrails to use custom content filters to protect against harmful content. Set the content filters to high. Use word filters to protect against known attack patterns. Configure cross-Region guardrail replication to provide failover capabilities. Store logs in AWS CloudTrail for compliance auditing."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384231-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 22,
    "question": "회사가 결제 처리 API를 위한 카나리 배포 전략을 설계하고 있습니다. 시스템은 실시간 추론 메트릭, 과거 트래픽 패턴 및 서비스 상태에 따라 여러 Amazon Bedrock 모델 간의 자동화된 점진적 트래픽 이동을 지원해야 합니다. 솔루션은 새 모델 버전으로 트래픽을 점진적으로 증가시킬 수 있어야 합니다. 메트릭이 건강하면 시스템이 트래픽을 증가시키고 성능이 수용 가능한 임계값 아래로 저하되면 트래픽을 감소시켜야 합니다. 회사는 배포 단계 중에 추론 지연 시간과 오류율을 포괄적으로 모니터링해야 합니다. 회사는 배포를 중단하고 수동 개입 없이 이전 모델 버전으로 되돌릴 수 있어야 합니다. 이 요구 사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "프로비저닝된 처리량으로 모델 버전을 호스팅하기 위해 Amazon Bedrock을 사용합니다. 새 모델 버전이 릴리스될 때 워크플로를 호출하도록 Amazon EventBridge 규칙을 구성합니다. 워크플로를 구성하여 단계별로 트래픽을 이동하고, 지정된 시간 동안 대기하며, Amazon CloudWatch 성능 메트릭을 확인하기 위해 AWS Lambda 함수를 호출합니다. 메트릭이 임계값을 충족하면 트래픽을 증가시키고 성능 메트릭이 임계값 아래로 떨어지면 트래픽 롤백을 트리거하도록 워크플로를 구성합니다.",
      "B": "다양한 Amazon Bedrock 모델 버전을 호출하기 위해 AWS Lambda 함수를 사용합니다. 단계 변수 및 가중 라우팅이 있는 Amazon API Gateway HTTP API를 사용하여 새 모델 버전으로 트래픽을 점진적으로 이동합니다. Amazon CloudWatch를 사용하여 성능 메트릭을 모니터링합니다. 외부 로직을 사용하여 모델 버전 간 트래픽을 조정하고 성능이 임계값 아래로 떨어지면 롤백합니다.",
      "C": "여러 Amazon Bedrock 모델 버전을 나타내기 위해 Amazon SageMaker AI 엔드포인트 변형을 사용합니다. 트래픽을 이동하기 위해 변형 가중치를 사용합니다. Amazon CloudWatch를 사용하여 성능 메트릭을 모니터링합니다. SageMaker Model Monitor를 사용하여 성능이 지정된 임계값 아래로 떨어지면 모델 배포를 롤백하기 위해 AWS Lambda 함수를 트리거합니다. 이상이 감지되면 모델 배포를 롤백하도록 Amazon EventBridge 규칙을 구성합니다.",
      "D": "추론 로그를 추적하기 위해 Amazon OpenSearch Service를 사용합니다. OpenSearch Service를 구성하여 AWS Systems Manager 자동화 실행책을 호출하여 추론 로그를 기반으로 트래픽을 이동하도록 Amazon Bedrock 모델 엔드포인트를 업데이트합니다."
    },
    "answer": "A",
    "explanation": "카나리 배포는 Step Functions를 사용한 오케스트레이션이 가장 적합합니다. Parallel 상태가 아닌 sequential 워크플로우로 단계적 트래픽 이동을 구현할 수 있으며, Lambda로 CloudWatch 메트릭을 확인하여 조건부 롤백을 수행합니다. EventBridge는 새 모델 릴리스 이벤트를 트리거하는 데 사용됩니다. Provisioned throughput은 일관된 성능을 보장합니다.\n\n옵션 B는 외부 로직의 모니터링 메커니즘이 명확하지 않습니다.\n\n옵션 C는 SageMaker를 Bedrock 모델 배포에 사용하는데, 이는 아키텍처 복잡성을 증가시킵니다.\n\n옵션 D는 OpenSearch로 추론 로그를 기반으로 실시간 트래픽 조정을 자동화하기 어렵습니다. Step Functions Parallel 상태가 아닌 워크플로우는 각 단계를 제어하고 모니터링할 수 있습니다.",
    "en_q": "A company is designing a canary deployment strategy for a payment processing API. The system must support automated gradual traffic shifting between multiple Amazon Bedrock models based on real-time inference metrics, historical traffic patterns, and service health. The solution must be able to gradually increase traffic to new model versions. The system must increase traffic if metrics remain healthy and decrease traffic if the performance degrades below acceptable thresholds. The company needs to comprehensively monitor inference latency and error rates during the deployment phase. The company must also be able to halt deployments and revert to a previous model version without any manual intervention. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon Bedrock with provisioned throughput to host the versions of the model. Configure an Amazon EventBridge rule to invoke an AWS Step Functions workflow when a new model version is released. Configure the workflow to shift traffic in stages, wait for a specified time period, and invoke an AWS Lambda function to check Amazon CloudWatch performance metrics. Configure the workflow to increase traffic if the metrics meet thresholds and to trigger a traffic rollback if performance metrics fall below thresholds.",
      "B": "Use AWS Lambda functions to invoke various Amazon Bedrock model versions. Use an Amazon API Gateway HTTP API with stage variables and weighted routing to shift traffic gradually to new model versions. Use Amazon CloudWatch to monitor performance metrics. Use external logic to adjust traffic between model versions and to roll back if performance falls below thresholds.",
      "C": "Use Amazon SageMaker AI endpoint variants to represent multiple Amazon Bedrock model versions. Use variant weights to shift traffic. Use Amazon CloudWatch to monitor performance metrics. Use SageMaker Model Monitor to trigger AWS Lambda functions to roll back a model deployment if performance drops below a specified threshold. Configure an Amazon EventBridge rule to roll back model deployments if an anomaly is detected.",
      "D": "Use Amazon OpenSearch Service to track inference logs. Configure OpenSearch Service to invoke an AWS Systems Manager Automation runbook to update Amazon Bedrock model endpoints to shift traffic based on the inference logs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384229-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 23,
    "question": "금융 서비스 회사는 AI 애플리케이션을 사용하여 Amazon Bedrock으로 금융 문서를 처리합니다. 업무 시간 중에 애플리케이션은 시간당 약 10,000개의 요청을 처리하며, 이는 일관된 처리량이 필요합니다. 회사는 CreateProvisionedModelThroughput API를 사용하여 프로비저닝된 처리량을 구매합니다. Amazon CloudWatch 메트릭은 프로비저닝된 용량이 미사용 상태인 동안 온디맨드 요청이 제한되고 있음을 보여줍니다. 회사는 애플리케이션에서 다음 코드를 찾습니다: python response = bedrock_runtime.invoke_model(modelId=\"anthropic.claude-v2\", body=json.dumps(payload)) 회사는 애플리케이션이 프로비저닝된 처리량을 사용하고 제한 문제를 해결해야 합니다. 이 요구 사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "프로비저닝된 처리량 구성에서 모델 단위(MU) 수를 증가시킵니다.",
      "B": "모델 ID 매개변수를 CreateProvisionedModelThroughput API가 반환하는 프로비저닝된 모델의 ARN으로 바꿉니다.",
      "C": "피크 시간 동안 제한 예외를 처리하기 위해 지수 백오프 재시도 로직을 추가합니다.",
      "D": "애플리케이션을 수정하여 InvokeModel API 대신 InvokeModelWithResponseStream API를 사용합니다."
    },
    "answer": "B",
    "explanation": "프로비저닝된 처리량의 핵심은 CreateProvisionedModelThroughput API가 반환하는 ARN을 invoke_model() 호출에서 사용해야 한다는 것입니다. 모델 ID 문자열(\"anthropic.claude-v2\")을 사용하면 온디맨드 API를 호출하므로 프로비저닝된 용량이 사용되지 않습니다. ARN을 사용하면 Bedrock이 프로비저닝된 처리량 풀에서 요청을 처리합니다.\n\n옵션 A는 문제의 근본 원인을 해결하지 않습니다. 옵션 C의 재시도는 온디맨드 제한만 악화시킵니다.\n\n옵션 D는 처리량 문제와 무관합니다. Provisioned throughput은 ARN 기반 호출로만 활성화됩니다.",
    "en_q": "A financial services company uses an AI application to process financial documents by using Amazon Bedrock. During business hours, the application handles approximately 10,000 requests each hour, which requires consistent throughput. The company uses the CreateProvisionedModelThroughput API to purchase provisioned throughput. Amazon CloudWatch metrics show that the provisioned capacity is unused while on-demand requests are being throttled. The company finds the following code in the application: python response = bedrock_runtime.invoke_model(modelId=\"anthropic.claude-v2\", body=json.dumps(payload)) The company needs the application to use the provisioned throughput and to resolve the throttling issues. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Increase the number of model units (MUs) in the provisioned throughput configuration.",
      "B": "Replace the model ID parameter with the ARN of the provisioned model that the CreateProvisionedModelThroughput API returns.",
      "C": "Add exponential backoff retry logic to handle throttling exceptions during peak hours.",
      "D": "Modify the application to use the InvokeModelWithResponseStream API instead of the InvokeModel API."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384223-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 24,
    "question": "회사가 Amazon Bedrock을 사용하여 AI 자문 애플리케이션을 구축하고 있습니다. 애플리케이션은 고객에게 권장 사항을 제공합니다. 회사는 애플리케이션이 추론 과정을 설명하고 데이터의 특정 출처를 인용해야 합니다. 애플리케이션은 회사 데이터 소스에서 정보를 검색하고 권장 사항에 대한 단계별 추론을 표시해야 합니다. 애플리케이션은 또한 데이터 주장을 소스 문서에 연결하고 3초 미만의 응답 지연 시간을 유지해야 합니다. 이 요구 사항을 최소한의 운영 오버헤드로 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "소스 속성이 활성화된 Amazon Bedrock Knowledge Bases를 사용합니다. Anthropic Claude Messages API를 RAG와 함께 사용하여 소스 문서에 대한 높은 관련성 임계값을 설정합니다. 추론 및 인용을 Amazon S3에 저장하여 감사합니다.",
      "B": "Amazon Bedrock과 Anthropic Claude 모델 및 확장 사고를 사용합니다. 4,000개 토큰 사고 예산을 구성합니다. 추론 추적 및 인용을 Amazon DynamoDB에 저장하여 감사합니다.",
      "C": "Amazon SageMaker AI를 사용자 정의 Anthropic Claude 모델로 구성합니다. 모델의 추론 매개변수와 AWS Lambda를 사용하여 응답을 처리합니다. 별도의 Amazon RDS 데이터베이스에서 소스 인용을 추가합니다.",
      "D": "Amazon Bedrock과 Anthropic Claude 모델 및 사고 연쇄 추론을 사용합니다. Amazon Bedrock Knowledge Bases API로 사용자 정의 검색 추적을 구성합니다. Amazon CloudWatch를 사용하여 응답 지연 시간 메트릭을 모니터링합니다."
    },
    "answer": "A",
    "explanation": "Amazon Bedrock Knowledge Bases는 RAG 구현에서 소스 속성을 기본 제공하는 가장 간단한 솔루션입니다. Source attribution 기능은 생성된 응답과 함께 검색된 문서의 출처를 자동으로 반환합니다. 이는 운영 오버헤드를 최소화하고, 3초 미만의 응답 시간을 달성할 수 있으며, 감사 추적을 제공합니다. 옵션 B의 Extended thinking은 추론 과정을 설명하지만 소스 인용은 자동화되지 않습니다.\n\n옵션 C는 SageMaker 관리 오버헤드가 높습니다.\n\n옵션 D는 수동 구현이 필요합니다. Knowledge Bases의 built-in RAG는 검색 기반 생성으로 환각을 줄이고 인용을 제공합니다.",
    "en_q": "A company is building an AI advisory application by using Amazon Bedrock. The application will provide recommendations to customers. The company needs the application to explain its reasoning process and cite specific sources for data. The application must retrieve information from company data sources and show step-by-step reasoning for recommendations. The application must also link data claims to source documents and maintain response latency under 3 seconds. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon Bedrock Knowledge Bases with source attribution enabled. Use the Anthropic Claude Messages API with RAG to set high-relevance thresholds for source documents. Store reasoning and citations in Amazon S3 for auditing purposes.",
      "B": "Use Amazon Bedrock with Anthropic Claude models and extended thinking. Configure a 4,000-token thinking budget. Store reasoning traces and citations in Amazon DynamoDB for auditing purposes.",
      "C": "Configure Amazon SageMaker AI with a custom Anthropic Claude model. Use the model's reasoning parameter and AWS Lambda to process responses. Add source citations from a separate Amazon RDS database.",
      "D": "Use Amazon Bedrock with Anthropic Claude models and chain-of-thought reasoning. Configure custom retrieval tracking with the Amazon Bedrock Knowledge Bases API. Use Amazon CloudWatch to monitor response latency metrics."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384236-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 25,
    "question": "금융 서비스 회사는 민감한 금융 데이터를 사용한 GenAI에 대한 새로운 규정을 준수하기 위해 여러 foundation model(FM)을 Amazon Bedrock을 통해 사용합니다. 회사는 토큰 관리 솔루션이 필요합니다. 토큰 관리 솔루션은 애플리케이션이 모델 특정 토큰 한계에 가까워질 때 사전에 경고해야 합니다. 솔루션은 또한 분당 5,000개 이상의 요청을 처리하고 비용을 사업부 전체에 할당하기 위해 토큰 사용률 메트릭을 유지해야 합니다. 이 요구 사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "AWS Lambda 함수에서 모델 특정 토크나이저를 개발합니다. Lambda 함수를 구성하여 Amazon Bedrock으로 요청을 보내기 전에 토큰 사용량을 추정합니다. Lambda 함수를 구성하여 메트릭을 Amazon CloudWatch에 게시하고 요청이 임계값에 접근할 때 경보를 트리거합니다. 비용 보고를 위해 Amazon DynamoDB에 상세한 토큰 사용량을 저장합니다.",
      "B": "토큰 할당량 정책으로 Amazon Bedrock Guardrails을 구현합니다. 거부된 요청에 대한 메트릭을 캡처합니다. Amazon Bedrock Guardrails 메트릭을 기반으로 알림을 트리거하도록 Amazon EventBridge 규칙을 구성합니다. Amazon CloudWatch 대시보드를 사용하여 모델 전체의 토큰 사용률 추세를 시각화합니다.",
      "C": "실패한 요청을 위해 Amazon SQS 배달 못한 편지 큐를 배포합니다. 토큰 관련 실패를 분석하도록 AWS Lambda 함수를 구성합니다. Amazon CloudWatch Logs Insights를 사용하여 Amazon Bedrock API 응답의 오류 로그를 기반으로 토큰 사용 패턴에 대한 보고서를 생성합니다.",
      "D": "모든 Amazon Bedrock API 호출에 대한 프록시를 만들기 위해 Amazon API Gateway를 사용합니다. 미리 정의된 토큰 할당량이 있는 사용자 정의 사용 계획에 기반한 요청 제한을 구성합니다. API Gateway를 구성하여 토큰 한계를 초과할 요청을 거부합니다."
    },
    "answer": "A",
    "explanation": "Bedrock에서 토큰을 추적하는 가장 효과적인 방법은 InvokeModel 이전에 Lambda에서 토큰을 계산하는 것입니다. 각 모델은 고유한 토크나이저를 가지므로 모델별 토크나이저가 필요합니다. CloudWatch 메트릭은 실시간 모니터링과 경보를 가능하게 하고, DynamoDB는 비용 할당 추적을 위한 상세한 기록을 제공합니다. 분당 5,000+ 요청을 처리하려면 DynamoDB의 쓰기 처리량이 필요합니다. 옵션 B의 Guardrails은 토큰 할당량을 사전에 추적하지 않습니다.\n\n옵션 C는 실패 후 분석만 제공합니다.\n\n옵션 D는 API Gateway의 제한이 토큰 레벨에서 작동하지 않습니다. 사전 계산 + CloudWatch 메트릭 + DynamoDB 저장소는 완벽한 토큰 관리를 제공합니다.",
    "en_q": "A financial services company uses multiple foundation models (FMs) through Amazon Bedrock for its generative AI (GenAI) applications. To comply with a new regulation for GenAI use with sensitive financial data, the company needs a token management solution. The token management solution must proactively alert when applications approach model-specific token limits. The solution must also process more than 5,000 requests each minute and maintain token usage metrics to allocate costs across business units. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Develop model-specific tokenizers in an AWS Lambda function. Configure the Lambda function to estimate token usage before sending requests to Amazon Bedrock. Configure the Lambda function to publish metrics to Amazon CloudWatch and trigger alarms when requests approach thresholds. Store detailed token usage in Amazon DynamoDB to report costs.",
      "B": "Implement Amazon Bedrock Guardrails with token quota policies. Capture metrics on rejected requests. Configure Amazon EventBridge rules to trigger notifications based on Amazon Bedrock Guardrails metrics. Use Amazon CloudWatch dashboards to visualize token usage trends across models.",
      "C": "Deploy an Amazon SQS dead-letter queue for failed requests. Configure an AWS Lambda function to analyze token-related failures. Use Amazon CloudWatch Logs Insights to generate reports on token usage patterns based on error logs from Amazon Bedrock API responses.",
      "D": "Use Amazon API Gateway to create a proxy for all Amazon Bedrock API calls. Configure request throttling based on custom usage plans with predefined token quotas. Configure API Gateway to reject requests that will exceed token limits."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384224-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 26,
    "question": "소매 회사가 제품, 주문 및 보증에 대한 쿼리 10,000개를 매일 처리해야 하는 고객 서비스 애플리케이션을 개발하고 있습니다. 애플리케이션은 매일 업데이트되는 50,000개 제품 문서에 대한 쿼리에 응답할 수 있어야 합니다. 애플리케이션은 주문 관리 API와 통합되어 주문 상태를 확인하고 반품 처리를 도와야 합니다. 애플리케이션은 고객과의 다중 턴 상호 작용 전체에서 컨텍스트를 유지해야 합니다. 회사는 애플리케이션 응답에 대한 완전한 감시 기록을 수집해야 합니다. 이 요구 사항을 최소한의 운영 오버헤드로 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "각 제품 카테고리에 대해 미세 조정된 Amazon Bedrock Anthropic Claude 모델을 배포합니다. 각 모델을 주문 관리 API에 연결하는 AWS Lambda 함수를 생성합니다. 대화 기록을 Amazon DynamoDB에 저장합니다.",
      "B": "모든 제품 문서에 대해 지속적인 사전 학습을 사용하는 사용자 정의 모델을 생성합니다. 모델을 주문 관리 API에 연결하는 AWS Lambda 함수를 사용하는 Amazon API Gateway REST API를 설정합니다.",
      "C": "Amazon SageMaker AI를 컨테이너와 함께 사용하여 모델을 배포합니다. Amazon Kendra를 사용하여 제품 문서를 검색합니다. AWS Step Functions를 사용하여 주문 관리 API에 대한 호출을 오케스트레이션합니다.",
      "D": "Amazon Bedrock 에이전트를 주문 관리 API와 통합하는 액션 그룹과 함께 사용합니다. Retrieval Augmentation Generation(RAG)을 사용하여 제품 문서를 검색하도록 Amazon Bedrock knowledge base를 에이전트와 연결합니다. 감사 기록을 캡처하도록 추적 이벤트를 활성화합니다."
    },
    "answer": "D",
    "explanation": "Amazon Bedrock Agents는 외부 API 통합(주문 관리)과 지식 기반(제품 문서) 접근을 자동으로 처리합니다. 에이전트는 다중 턴 상호 작용을 위한 메모리 관리를 자동으로 지원하고, action groups는 주문 API 호출을 간단하게 합니다. Knowledge base의 RAG는 50,000개 문서를 효율적으로 검색하고, trace events는 완전한 감사 기록을 자동으로 수집합니다.\n\n옵션 A는 카테고리별 모델 관리로 오버헤드가 높습니다. 옵션 B의 continued pre-training은 Bedrock에서 지원하지 않습니다.\n\n옵션 C는 Kendra와 SageMaker의 복잡한 조합입니다. Bedrock Agents는 이러한 모든 기능을 built-in으로 제공하며 operational overhead가 최소입니다.",
    "en_q": "A retail company is developing a customer service application that must process 10,000 daily queries about products, orders, and warranties. The application must be able to respond to queries about 50,000 product documents that are updated every day. The application must integrate with an order management API to check the status of orders and to help process returns. The application must maintain context throughout multi-turn interactions with customers. The company must collect complete audit trails for application responses. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Deploy a fine-tuned Amazon Bedrock Anthropic Claude model for each product category. Create AWS Lambda functions to connect each model to the order management API. Store conversation history in Amazon DynamoDB.",
      "B": "Create a custom model that uses continued pre-training on Amazon Bedrock to handle all product documentation. Set up an Amazon API Gateway REST API that uses AWS Lambda functions to connect the model to the order management API.",
      "C": "Use Amazon SageMaker AI with containers to deploy models. Use Amazon Kendra to search product documents. Use AWS Step Functions to orchestrate calls to the order management API.",
      "D": "Use an Amazon Bedrock agent with action groups to integrate with the order management API. Associate an Amazon Bedrock knowledge base with the agent to search product documentation by using Retrieval Augmentation Generation (RAG). Enable trace events to capture audit trails."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384225-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 27,
    "question": "eCommerce 회사가 Amazon Bedrock을 사용하여 GenAI 애플리케이션을 구축하고 있습니다. 애플리케이션은 AWS Step Functions를 사용하여 상세한 제품 설명을 생성하기 위한 다중 에이전트 워크플로우를 오케스트레이션합니다. 워크플로우는 3개의 순차 상태로 구성됩니다: 설명 생성기, 기술 사양 검증자 및 브랜드 음성 일관성 검사기입니다. 각 상태는 다음 상태로 전달되는 중간 추론 추적 및 출력을 생성합니다. 애플리케이션은 프로세스 저장소 및 출력 저장을 위해 Amazon S3 버킷을 사용합니다. 테스트 중에 회사는 Step Functions 상태 간 출력이 256KB 할당량을 자주 초과하여 워크플로우 실패를 초래한다는 것을 발견합니다. GenAI 개발자는 Step Functions 256KB 할당량을 효율적으로 처리하고 워크플로우 관찰성을 유지하기 위해 애플리케이션 아키텍처를 수정해야 합니다. 수정된 아키텍처는 기존 다중 에이전트 추론 및 행동(ReAct) 패턴을 유지해야 합니다. 이 요구 사항을 최소한의 운영 오버헤드로 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "중간 출력을 Amazon DynamoDB에 저장합니다. 상태 간에만 참조를 전달합니다. 각 에이전트 처리 단계에 필요할 때 DynamoDB에서 완전한 데이터를 검색하는 Map 상태를 생성합니다.",
      "B": "Amazon Bedrock 통합을 구성하여 대용량 출력을 위한 입력 매개변수에서 S3 버킷 URI를 사용합니다. ResultPath 필드와 ResultSelector 필드를 사용하여 순차 검증 워크플로우를 유지하면서 에이전트 단계 간에 S3 참조를 라우팅합니다.",
      "C": "각 에이전트 상태 이전에 출력을 256KB 미만으로 압축하도록 AWS Lambda 함수를 사용합니다. 각 에이전트 작업을 구성하여 처리 전에 출력을 압축 해제하고 다음 상태로 전달하기 전에 결과를 압축합니다.",
      "D": "각 에이전트의 처리를 처리하도록 별도의 Step Functions 상태 머신을 구성합니다. 상태 머신 간 실행 흐름을 조정하도록 Amazon EventBridge를 사용합니다. 출력을 위해 S3 참조를 이벤트 데이터로 사용합니다."
    },
    "answer": "B",
    "explanation": "Step Functions의 256KB 제한을 극복하는 가장 간단한 방법은 S3 URI 참조를 상태 간에 전달하는 것입니다.\n\nAmazon Bedrock은 S3 URI를 입력 매개변수로 직접 지원하므로, ResultPath와 ResultSelector를 사용하여 대용량 중간 출력을 S3에 저장하고 참조만 전달할 수 있습니다.\n\n이는 ReAct 패턴을 유지하면서 operational overhead를 최소화합니다.\n\n옵션 A의 DynamoDB는 Map 상태 추가로 복잡성이 증가합니다.\n\n옵션 C의 압축은 각 단계에서 오버헤드를 증가시킵니다.\n\n옵션 D의 분리된 상태 머신은 EventBridge 조정 오버헤드가 높습니다.\n\nBedrock의 S3 URI 지원은 이 시나리오에 가장 적합합니다.",
    "en_q": "An ecommerce company is using Amazon Bedrock to build a generative AI (GenAI) application. The application uses AWS Step Functions to orchestrate a multi-agent workflow to produce detailed product descriptions. The workflow consists of three sequential states: a description generator, a technical specifications validator, and a brand voice consistency checker. Each state produces intermediate reasoning traces and outputs that are passed to the next state. The application uses an Amazon S3 bucket for process storage and to store outputs. During testing, the company discovers that outputs between Step Functions states frequently exceed the 256 KB quota and cause workflow failures. A GenAI Developer needs to revise the application architecture to efficiently handle the Step Functions 256 KB quota and maintain workflow observability. The revised architecture must preserve the existing multi-agent reasoning and acting (ReAct) pattern. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Store intermediate outputs in Amazon DynamoDB. Pass only references between states. Create a Map state that retrieves the complete data from DynamoDB when required for each agent's processing step.",
      "B": "Configure an Amazon Bedrock integration to use the S3 bucket URI in the input parameter for large outputs. Use the ResultPath field and the ResultSelector field to route S3 references between the agent steps while maintaining the sequential validation workflow.",
      "C": "Use AWS Lambda functions to compress outputs to less than 256 KB before each agent state. Configure each agent task to decompress the outputs before processing and to compress results before passing them to the next state.",
      "D": "Configure a separate Step Functions state machine to handle each agent's processing. Use Amazon EventBridge to coordinate the execution flow between state machines. Use S3 references for the outputs as event data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384238-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 28,
    "question": "회사는 전 세계 사용자가 새로운 식당을 발견할 수 있도록 돕는 서비스를 제공합니다. 서비스는 월간 활성 사용자가 5천만 명입니다. 회사는 2천만 개의 식당과 2억 개의 리뷰를 포함하는 데이터베이스 전체에서 의미론적 검색 솔루션을 구현하려고 합니다. 회사는 현재 데이터를 PostgreSQL 데이터베이스에 저장합니다. 솔루션은 복잡한 자연어 쿼리를 지원하고 최소 95%의 쿼리에 대해 500ms 이내의 결과를 반환해야 합니다. 솔루션은 시간마다 업데이트되는 식당 세부 정보의 데이터 신선도를 유지해야 합니다. 솔루션은 또한 피크 사용 기간 동안 비용 효율적으로 확장해야 합니다. 이 요구 사항을 최소한의 개발 노력으로 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "식당 데이터를 Amazon OpenSearch Service로 마이그레이션합니다. 사용자 정의 분석기 및 관련성 튜닝을 사용하여 요리 유형, 기능 및 위치와 같은 속성을 기반으로 식당을 찾는 키워드 기반 검색 규칙을 구현합니다. 사용자 쿼리를 구조화된 검색 매개변수로 변환하도록 Amazon API Gateway HTTP API 엔드포인트를 생성합니다.",
      "B": "식당 데이터를 Amazon OpenSearch Service로 마이그레이션합니다. Amazon Bedrock에서 foundation model(FM)을 사용하여 식당 설명, 리뷰 및 메뉴 항목에서 벡터 임베딩을 생성합니다. 사용자가 자연어 쿼리를 제출할 때, 같은 FM을 사용하여 쿼리를 임베딩으로 변환합니다. k-nearest neighbors(k-NN) 검색을 수행하여 의미론적으로 유사한 결과를 찾습니다.",
      "C": "PostgreSQL에 식당 데이터를 유지하고 pgvector 확장을 구현합니다. Amazon Bedrock에서 foundation model(FM)을 사용하여 식당 데이터에서 벡터 임베딩을 생성합니다. 벡터 임베딩을 PostgreSQL에 직접 저장합니다. 같은 FM을 사용하여 자연어 쿼리를 벡터 표현으로 변환하도록 AWS Lambda 함수를 생성합니다. Lambda 함수를 구성하여 데이터베이스 내에서 유사성 검색을 수행합니다.",
      "D": "식당 데이터를 사용자 정의 수집 파이프라인을 사용하여 Amazon Bedrock knowledge base로 마이그레이션합니다. knowledge base를 구성하여 식당 정보에서 임베딩을 자동으로 생성합니다. Amazon Bedrock Retrieve API와 자연어 입력을 사용하여 knowledge base를 직접 쿼리하도록 built-in 벡터 검색 기능을 사용합니다."
    },
    "answer": "B",
    "explanation": "OpenSearch Service는 대규모 벡터 검색(2천만 식당, 2억 리뷰)에 최적화되어 있으며, k-NN 검색은 500ms 응답 시간을 달성할 수 있습니다.\n\nBedrock FM으로 벡터 임베딩을 생성하면 의미론적 이해를 제공하고, OpenSearch는 자동 스케일링과 비용 효율성을 지원합니다.\n\n매시간 데이터 업데이트는 OpenSearch의 refresh 기능으로 처리됩니다.\n\n옵션 A의 키워드 검색은 자연어 쿼리를 처리하지 못합니다.\n\n옵션 C의 pgvector는 2천만 행의 벡터 검색에 성능 문제가 있습니다.\n\n옵션 D의 Knowledge Base는 2백만 문서 이상의 대규모 검색에는 적합하지 않습니다.\n\nOpenSearch + Bedrock embeddings는 확장성과 성능의 최적 조합입니다.",
    "en_q": "A company provides a service that helps users from around the world discover new restaurants. The service has 50 million monthly active users. The company wants to implement a semantic search solution across a database that contains 20 million restaurants and 200 million reviews. The company currently stores the data in a PostgresQL database. The solution must support complex natural language queries and return results for at least 95% of queries within 500 ms. The solution must maintain data freshness for restaurant details that update hourly. The solution must also scale cost-effectively during peak usage periods. Which solution will meet these requirements with the LEAST development effort?",
    "en_opts": {
      "A": "Migrate the restaurant data to Amazon OpenSearch Service. Implement keyword-based search rules that use custom analyzers and relevance tuning to find restaurants based on attributes such as cuisine type, feature, and location. Create Amazon API Gateway HTTP API endpoints to transform user queries into structured search parameters.",
      "B": "Migrate the restaurant data to Amazon OpenSearch Service. Use a foundation model (FM) in Amazon Bedrock to generate vector embeddings from restaurant descriptions, reviews, and menu items. When users submit natural language queries, convert the queries to embeddings by using the same FM. Perform k-nearest neighbors (k-NN) searches to find semantically similar results.",
      "C": "Keep the restaurant data in PostgresQL and implement a pgvector extension. Use a foundation model (FM) in Amazon Bedrock to generate vector embeddings from restaurant data. Store the vector embeddings directly in PostgreSQL. Create an AWS Lambda function to convert natural language queries to vector representations by using the same FM. Configure the Lambda function to perform similarity searches within the database.",
      "D": "Migrate restaurant data to an Amazon Bedrock knowledge base by using a custom ingestion pipeline. Configure the knowledge base to automatically generate embeddings from restaurant information. Use the Amazon Bedrock Retrieve API with built-in vector search capabilities to query the knowledge base directly by using natural language input."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384226-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 29,
    "question": "의료 회사가 Amazon Bedrock을 사용하여 임상 문서 요약 시스템을 구동합니다. 시스템은 복잡한 임상 문서를 처리할 때 일관성 없는 요약을 생성합니다. 시스템은 단순한 임상 문서에서 잘 수행되었습니다. 회사는 불일치를 진단하고, 프롬프트 성능을 확립된 메트릭과 비교하며, 프롬프트 버전의 과거 기록을 유지하는 솔루션이 필요합니다. 이 요구 사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon Bedrock의 Prompt management를 사용하여 여러 프롬프트 변형을 생성합니다. 단순한 임상 문서로 프롬프트를 수동으로 테스트합니다. Amazon Bedrock 콘솔을 사용하여 가장 성능이 좋은 버전을 배포합니다.",
      "B": "코드 리포지토리에서 프롬프트의 버전 관리를 구현하고 복잡한 임상 문서 및 정량화 가능한 평가 메트릭을 포함하는 테스트 스위트를 사용합니다. 자동 테스트 프레임워크를 사용하여 프롬프트 버전을 비교하고 성능 패턴을 문서화합니다.",
      "C": "각 새로운 프롬프트 버전을 별도의 Amazon Bedrock API 엔드포인트에 배포합니다. 엔드포인트 간에 프로덕션 트래픽을 분할합니다. Amazon CloudWatch를 구성하여 응답 메트릭 및 사용자 피드백을 캡처하고 자동 버전 선택을 수행합니다.",
      "D": "Amazon Bedrock Flows에서 사용자 정의 프롬프트 평가 흐름을 생성합니다. Amazon Comprehend Medical을 사용하여 각 버전의 팩트 정확성을 분석하고 채점합니다."
    },
    "answer": "B",
    "explanation": "프롬프트 개발의 모범 사례는 코드 리포지토리에서 버전 관리하고 자동화된 테스트를 수행하는 것입니다.\n\n복잡한 임상 문서를 포함한 테스트 스위트는 프롬프트가 단순 사례뿐 아니라 복잡한 경우도 처리하는지 확인합니다.\n\n정량화 가능한 메트릭(BLEU, ROUGE, 임상 정확성)을 사용하여 버전을 비교할 수 있습니다.\n\n이는 과거 기록, 성능 비교, 불일치 진단을 모두 제공합니다.\n\n옵션 A의 Prompt management는 기본 UI만 제공합니다.\n\n옵션 C의 A/B 테스트는 선택적 메트릭만 제공합니다.\n\n옵션 D의 Bedrock Flows는 평가가 복잡합니다.\n\n버전 관리된 코드 리포지토리 + 자동 테스트는 과학적이고 추적 가능한 접근입니다.",
    "en_q": "A medical company uses Amazon Bedrock to power a clinical documentation summarization system. The system produces inconsistent summaries when handling complex clinical documents. The system performed well on simple clinical documents. The company needs a solution that diagnoses inconsistencies, compares prompt performance against established metrics, and maintains historical records of prompt versions. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create multiple prompt variants by using Prompt management in Amazon Bedrock. Manually test the prompts with simple clinical documents. Deploy the highest performing version by using the Amazon Bedrock console.",
      "B": "Implement version control for prompts in a code repository with a test suite that contains complex clinical documents and quantifiable evaluation metrics. Use an automated testing framework to compare prompt versions and document performance patterns.",
      "C": "Deploy each new prompt version to separate Amazon Bedrock API endpoints. Split production traffic between the endpoints. Configure Amazon CloudWatch to capture response metrics and user feedback for automatic version selection.",
      "D": "Create a custom prompt evaluation flow in Amazon Bedrock Flows that applies the same clinical document inputs to different prompt variants. Use Amazon Comprehend Medical to analyze and score the factual accuracy of each version."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384240-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 30,
    "question": "회사가 Amazon Bedrock을 사용하여 고객을 위한 기술 콘텐츠를 생성합니다. 회사는 최근 회사의 모델이 긴 기술 문서의 요약을 생성할 때 환각 출력이 급증한 것을 경험했습니다. 모델 출력에는 부정확하거나 조작된 세부 정보가 포함됩니다. 회사의 현재 솔루션은 전체 문서를 단일 입력에 포함하는 기본 원샷 프롬프트가 있는 대형 foundation model(FM)을 사용합니다. 회사는 환각을 줄이고 사실 정확성 목표를 충족하는 솔루션이 필요합니다. 솔루션은 시간당 1,000개 이상의 문서를 처리하고 각 문서에 대해 3초 내에 요약을 제공해야 합니다. 이 요구 사항을 충족할 솔루션 조합은 어느 것입니까? (2개를 선택하세요.)",
    "options": {
      "A": "모델이 각 요약을 생성하기 전에 단계별 추론과 명시적 팩트 검증을 요구하는 제로샷 사고 연쇄(CoT) 지시를 구현합니다.",
      "B": "Amazon Bedrock knowledge base와 함께 Retrieval Augmented Generation(RAG)을 사용합니다. 의미론적 청킹과 조정된 임베딩을 적용하여 요약을 소스 콘텐츠에 고정합니다.",
      "C": "환각된 콘텐츠와 연결된 패턴과 일치하는 생성된 출력을 차단하도록 Amazon Bedrock Guardrails을 구성합니다.",
      "D": "Amazon Bedrock의 온도 매개변수를 증가시킵니다.",
      "E": "Amazon Bedrock 모델에 한 번에 전체 문서를 요약하도록 프롬프트합니다."
    },
    "answer": "AB",
    "explanation": "환각을 줄이는 두 가지 효과적인 방법은 사고 연쇄(CoT)와 RAG입니다.\n\n옵션 A의 제로샷 CoT는 모델이 단계별로 추론하도록 강제하여 사실 확인 기회를 제공합니다.\n\n옵션 B의 RAG는 생성을 소스 콘텐츠에 고정하여 환각 가능성을 크게 줄입니다.\n\n의미론적 청킹은 관련 콘텐츠를 검색하도록 하고, 조정된 임베딩은 검색 품질을 향상합니다.\n\n시간당 1,000+ 문서와 3초 처리는 이 두 기법으로 달성 가능합니다.\n\n옵션 C의 Guardrails은 환각을 방지하지 않고 차단만 합니다.\n\n옵션 D의 높은 온도는 환각을 증가시킵니다.\n\n옵션 E는 환각 원인인 전체 문서 처리입니다.\n\nCoT + RAG의 조합은 사실성을 보장합니다.",
    "en_q": "A company uses Amazon Bedrock to generate technical content for customers. The company has recently experienced a surge in hallucination outputs when the company's model generates summaries of long technical documents. The model outputs include inaccurate or fabricated details. The company's current solution uses a large foundation model (FM) with a basic one-shot prompt that includes the full document in a single input. The company needs a solution that will reduce hallucinations and meet factual accuracy goals. The solution must process more than 1,000 documents each hour and deliver summaries within 3 seconds for each document. Which combination of solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Implement zero-shot chain-of-thought (CoT) instructions that require step-by-step reasoning with explicit fact verification before the model generates each summary.",
      "B": "Use Retrieval Augmented Generation (RAG) with an Amazon Bedrock knowledge base. Apply semantic chunking and tuned embeddings to ground summaries in source content.",
      "C": "Configure Amazon Bedrock guardrails to block any generated output that matches patterns that are associated with hallucinated content.",
      "D": "Increase the temperature parameter in Amazon Bedrock.",
      "E": "Prompt the Amazon Bedrock model to summarize each full document in one pass."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384227-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 31,
    "question": "회사가 추천 시스템을 갖고 있습니다. 시스템의 애플리케이션은 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 고객 행동을 분석하고 개인화된 제품 권장 사항을 생성하기 위해 Amazon Bedrock foundation models(FM)에 API 호출을 합니다. 시스템은 간헐적인 문제를 경험하고 있습니다. 일부 권장 사항이 고객 선호도와 일치하지 않습니다. 회사는 운영 메트릭을 모니터링하고 확립된 기준선과 비교하여 운영 성능 저하 패턴을 감지하는 관찰성 솔루션이 필요합니다. 솔루션은 또한 FM 동작이 예상 패턴에서 벗어날 때 10분 이내에 상관 데이터와 함께 경보를 생성해야 합니다. 이 요구 사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "애플리케이션 인프라에 대해 Amazon CloudWatch Container Insights를 구성합니다. 지연 시간 임계값에 대한 CloudWatch 경보를 설정합니다. CloudWatch 임베드된 메트릭 형식을 사용하여 토큰 수에 대한 사용자 정의 메트릭을 추가합니다. 데이터를 시각화하기 위해 CloudWatch 대시보드를 생성합니다.",
      "B": "AWS X-Ray를 구현하여 애플리케이션 구성 요소를 통해 요청을 추적합니다. 오류 패턴 감지를 위해 CloudWatch Logs Insights를 활성화합니다. Amazon Bedrock에 대한 모든 API 호출을 모니터링하도록 AWS CloudTrail을 설정합니다. Amazon QuickSight에서 사용자 정의 대시보드를 생성합니다.",
      "C": "애플리케이션 리소스에 대해 Amazon CloudWatch Application Insights를 활성화합니다. CloudWatch 임베드된 메트릭 형식을 사용하여 권장 사항 품질, 토큰 사용량 및 응답 지연 시간에 대한 사용자 정의 메트릭을 생성하고 요청 유형 및 사용자 세그먼트에 대한 차원을 사용합니다. CloudWatch 이상 탐지를 모델 메트릭에 구성합니다. CloudWatch Logs Insights를 사용하여 로그 패턴 분석을 구축합니다.",
      "D": "관찰성 플러그인이 있는 Amazon OpenSearch Service를 사용합니다. Amazon Kinesis를 사용하여 모델 메트릭 및 로그를 수집합니다. 사용자 정의 Piped Processing Language(PPL) 쿼리를 생성하여 모델 동작 패턴을 분석합니다. 실시간으로 이상을 시각화하도록 운영 대시보드를 구축합니다."
    },
    "answer": "C",
    "explanation": "Amazon CloudWatch Application Insights는 EC2 기반 애플리케이션의 이상 탐지를 자동으로 수행합니다. CloudWatch embedded metric format으로 권장 사항 품질, 토큰 사용량, 응답 지연 시간 같은 FM 특화 메트릭을 수집하고, 이상 탐지로 기준선과의 편차를 감지합니다. CloudWatch Logs Insights는 로그 패턴을 빠르게 분석합니다. 이 조합은 10분 이내의 경보를 달성할 수 있습니다.\n\n옵션 A는 컨테이너 중심 메트릭만 제공합니다.\n\n옵션 B는 X-Ray가 FM 메트릭을 추적하지 않습니다.\n\n옵션 D는 OpenSearch 설정이 복잡합니다. Application Insights는 AWS 네이티브 이상 탐지를 제공하며 빠른 경보 구성을 가능하게 합니다.",
    "en_q": "A company is developing a recommendation system. The system's applications run on Amazon EC2 instances. The applications make API calls to Amazon Bedrock foundation models (FMs) to analyze customer behavior and generate personalized product recommendations. The system is experiencing intermittent issues. Some recommendations do not match customer preferences. The company needs an observability solution to monitor operational metrics and detect patterns of operational performance degradation compared to established baselines. The solution must also generate alerts with correlation data within 10 minutes when FM behavior deviates from expected patterns. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure Amazon CloudWatch Container Insights for the application infrastructure. Set up CloudWatch alarms for latency thresholds. Add custom metrics for token counts by using the CloudWatch embedded metric format. Create CloudWatch dashboards to visualize the data.",
      "B": "Implement AWS X-Ray to trace requests through the application components. Enable CloudWatch Logs Insights for error pattern detection. Set up AWS CloudTrail to monitor all API calls to Amazon Bedrock. Create custom dashboards in Amazon QuickSight.",
      "C": "Enable Amazon CloudWatch Application Insights for the application resources. Create custom metrics for recommendation quality, token usage, and response latency by using the CloudWatch embedded metric format with dimensions for request types and user segments. Configure CloudWatch anomaly detection on the model metrics. Establish log pattern analysis by using CloudWatch Logs Insights.",
      "D": "Use Amazon OpenSearch Service with the Observability plugin. Ingest model metrics and logs by using Amazon Kinesis. Create custom Piped Processing Language (PPL) queries to analyze model behavior patterns. Establish operational dashboards to visualize anomalies in real time."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384233-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 32,
    "question": "엔터프라이즈 애플리케이션이 Amazon Bedrock foundation model(FM)을 사용하여 50~200 페이지의 기술 문서를 처리하고 분석합니다. 사용자는 FM의 컨텍스트 윈도우 한계를 초과하는 문서를 처리할 때 일관성 없는 응답을 받고 있으며 출력이 잘려 있습니다. 이 문제를 해결할 솔루션은 어느 것입니까?",
    "options": {
      "A": "4,000개 토큰의 고정 크기 청킹을 20% 겹침으로 구성합니다. 애플리케이션 레벨 로직을 사용하여 여러 청크를 순차적으로 연결하여 FM의 최대 컨텍스트 윈도우인 200,000 토큰에 도달하기 전에 추론 호출을 수행합니다.",
      "B": "부모 청크가 8,000 토큰이고 자식 청크가 2,000 토큰인 계층적 청킹을 사용합니다. Amazon Bedrock Knowledge Bases의 built-in 검색을 사용하여 쿼리 컨텍스트를 기반으로 관련 부모 청크를 자동으로 선택합니다. 의미론적 연속성을 유지하도록 겹침 토큰을 구성합니다.",
      "C": "breakpoint percentile 임계값을 95%로 설정하고 버퍼 크기를 3개 문장으로 사용한 의미론적 청킹을 사용합니다. Amazon Bedrock RetrieveAndGenerate API 호출을 사용하여 임베딩 유사성 점수를 기반으로 동적으로 가장 관련된 청크를 선택합니다.",
      "D": "문서 토큰 수를 분석하는 FM의 토크나이저를 사용하는 사전 처리 AWS Lambda 함수를 생성합니다. Lambda 함수를 구성하여 문서를 컨텍스트 윈도우의 80% 내에 맞는 동일한 세그먼트로 분할합니다. Lambda 함수를 구성하여 각 세그먼트를 독립적으로 처리한 후 결과를 집계합니다."
    },
    "answer": "C",
    "explanation": "의미론적 청킹은 문법적 또는 의미론적 경계에서 문서를 나누므로 재맥락화 손실이 최소화됩니다.\n\n95% breakpoint percentile과 3문장 버퍼는 의미론적 응집성을 보존합니다.\n\nRetrieveAndGenerate API는 사용자 쿼리와 가장 관련된 청크를 동적으로 선택하여 컨텍스트 윈도우를 최대한 활용합니다.\n\n임베딩 유사성은 관련성이 높은 청크 선택을 보장합니다.\n\n옵션 A의 고정 크기 청킹은 의미 경계를 무시합니다.\n\n옵션 B의 계층적 청킹은 구현 복잡도가 높습니다.\n\n옵션 D의 동등 세그먼트는 의미론적 분석이 없습니다.\n\n의미론적 청킹 + RetrieveAndGenerate는 대문서 처리의 표준입니다.",
    "en_q": "An enterprise application uses an Amazon Bedrock foundation model (FM) to process and analyze 50 to 200 pages of technical documents. Users are experiencing inconsistent responses and receiving truncated outputs when processing documents that exceed the FM's context window limits. Which solution will resolve this problem?",
    "en_opts": {
      "A": "Configure fixed-size chunking at 4,000 tokens for each chunk with 20% overlap. Use application-level logic to link multiple chunks sequentially until the FM's maximum context window of 200,000 tokens is reached before making inference calls.",
      "B": "Use hierarchical chunking with parent chunks of 8,000 tokens and child chunks of 2,000 tokens. Use Amazon Bedrock Knowledge Bases built-in retrieval to automatically select relevant parent chunks based on query context. Configure overlap tokens to maintain semantic continuity.",
      "C": "Use semantic chunking with a breakpoint percentile threshold of 95% and a buffer size of 3 sentences. Use the Amazon Bedrock RetrieveAndGenerate API call to dynamically select the most relevant chunks based on embedding similarity scores.",
      "D": "Create a pre-processing AWS Lambda function that analyzes document token count by using the FM's tokenizer. Configure the lambda function to split documents into equal segments that fit within 80% of the context window. Configure the Lambda function to process each segment independently before aggregating the results."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384242-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 33,
    "question": "회사가 실시간으로 고객 서비스 통화를 분석하고 인간 고객 서비스 대리인을 위한 제안된 응답을 생성하는 GenAI 애플리케이션을 개발하고 있습니다. 애플리케이션은 피크 시간 동안 500,000개의 동시 통화를 처리해야 하며 각 제안에 대해 200ms 미만의 종단 간 지연 시간을 유지해야 합니다. 회사는 기존 아키텍처를 사용하여 고객 통화 오디오 스트림을 전사합니다. 애플리케이션은 미리 정의된 월간 계산 예산을 초과하면 안 되며 자동 스케일링 기능을 유지해야 합니다. 이 요구 사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon Bedrock에 대형 복잡한 추론 모델을 배포합니다. 프로비저닝된 처리량을 구매하고 배치 처리에 최적화합니다.",
      "B": "Amazon Bedrock에 저지연, 실시간 최적화 모델을 배포합니다. 프로비저닝된 처리량을 구매하고 자동 스케일링 정책을 설정합니다.",
      "C": "Amazon SageMaker AI 실시간 엔드포인트에 전용 GPU 인스턴스를 사용하는 대형 언어 모델(LLM)을 배포합니다.",
      "D": "배치 처리에 최적화된 Amazon SageMaker AI 서버리스 엔드포인트에 중간 크기 언어 모델을 배포합니다."
    },
    "answer": "B",
    "explanation": "500,000개의 동시 통화와 200ms 지연 시간 요구 사항은 저지연 모델이 필수입니다.\n\nBedrock의 실시간 최적화 모델(예: Claude 3.5 Haiku)은 빠른 추론을 제공합니다.\n\n프로비저닝된 처리량은 월간 계산 예산을 제어하고, 자동 스케일링은 5백만 동시 연결을 처리할 수 있습니다.\n\n옵션 A의 대형 복잡한 모델은 200ms를 달성할 수 없습니다.\n\n옵션 C의 SageMaker 전용 GPU는 높은 비용과 스케일링 어려움이 있습니다.\n\n옵션 D의 서버리스는 배치 최적화로 실시간 요구를 충족하지 못합니다.\n\nBedrock의 실시간 모델 + 프로비저닝된 처리량은 이 시나리오에 최적입니다.",
    "en_q": "A company is developing a generative AI (GenAI) application that analyzes customer service calls in real-time and generates suggested responses for human customer service agents. The application must process 500,000 concurrent calls during peak hours with less than 200 ms end-to-end latency for each suggestion. The company uses existing architecture to transcribe customer call audio streams. The application must not exceed a pre-defined monthly compute budget and must maintain auto scaling capabilities. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy a large, complex reasoning model on Amazon Bedrock. Purchase provisioned throughput and optimize for batch processing.",
      "B": "Deploy a low-latency, real-time optimized model on Amazon Bedrock. Purchase provisioned throughput and set up automatic scaling policies.",
      "C": "Deploy a large language model (LLM) on an Amazon SageMaker AI real-time endpoint that uses dedicated GPU instances.",
      "D": "Deploy a mid-sized language model on an Amazon SageMaker AI serverless endpoint that is optimized for batch processing."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384232-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 34,
    "question": "eCommerce 회사가 Amazon Bedrock foundation models(FM)을 사용하여 GenAI 애플리케이션을 개발하기 위한 내부 플랫폼을 구축하고 있습니다. 개발자는 eCommerce 사용 사례에 맞춘 평가를 기반으로 모델을 선택해야 합니다. 플랫폼은 텍스트 생성 및 요약에 대한 정확도 메트릭을 대시보드에 표시해야 합니다. 회사는 표준화된 평가 입력으로 사용할 사용자 정의 eCommerce 데이터세트를 가지고 있습니다. 최소한의 운영 오버헤드로 이 요구 사항을 충족할 단계의 조합은 어느 것입니까? (2개를 선택하세요.)",
    "options": {
      "A": "데이터세트를 Amazon S3 버킷으로 가져옵니다. 평가 작업이 데이터세트에 액세스할 수 있도록 적절한 IAM 권한 및 크로스 오리진 리소스 공유(CORS) 권한을 제공합니다.",
      "B": "데이터세트를 Amazon S3 버킷으로 가져옵니다. 평가 작업이 데이터세트에 액세스할 수 있도록 적절한 IAM 권한 및 VPC 엔드포인트 구성을 제공합니다.",
      "C": "Amazon Bedrock 콘솔에서 acl.json이라는 JSON 파일을 생성하여 각 부서 폴더에 배치합니다. 각 파일에서 해당 부서의 데이터에 액세스해야 하는 IAM Identity Center 그룹을 지정하는 액세스 제어 항목을 생성합니다. 데이터 소스 설정의 Access Control 섹션에서 JSON 파일의 위치를 지정합니다.",
      "D": "Amazon SageMaker Clarify를 일정에 따라 사용하여 모델 평가 작업을 생성합니다. 오픈 소스 프레임워크를 사용하여 표준화된 평가를 생성하고 실행합니다. 결과를 Amazon CloudWatch 네임스페이스에 게시합니다. 텍스트 생성의 정확도 메트릭으로 단어 오류율을 사용하고 요약의 독성을 사용합니다. 작업의 상태를 확인하고 CloudWatch에 사용자 정의 로그를 게시하는 AWS Lambda 함수를 구성합니다. 사용자 정의 CloudWatch Logs Insights 대시보드를 생성합니다.",
      "E": "Amazon SageMaker AI 노트북 작업을 일정에 따라 fmevals 또는 ragas 프레임워크를 사용하여 실행합니다. S3 버킷의 데이터세트를 사용하는 평가를 실행하기 위해 노트북에서 Python 코드를 작성합니다. FM에 직접 InvokeModel API 호출을 수행하고 평가를 위해 응답을 처리합니다. 텍스트 생성의 정확도 메트릭으로 실제 세계 지식(RWK) 점수를 사용하고 요약의 독성을 사용하여 작업 상태 및 결과를 Amazon CloudWatch Logs에 게시합니다. 사용자 정의 CloudWatch Logs Insights 대시보드를 생성합니다."
    },
    "answer": "AC",
    "explanation": "Amazon Bedrock 평가는 S3 데이터세트 + IAM 권한 + CORS(옵션 A)를 사용하여 직접 실행됩니다. Amazon Bedrock 콘솔의 Model Evaluation 기능은 eCommerce 데이터세트를 업로드하고 RWK와 BERT Score 메트릭을 선택하여 실행할 수 있습니다.\n\n옵션 C는 필요하지 않습니다(이것은 Amazon Q의 ACL이며, Bedrock 평가가 아닙니다). 대신, 가장 간단한 것은 A(S3 + IAM + CORS)와 Bedrock 콘솔 또는 Python 스크립트(\n\n옵션 E는 과도함)를 사용하는 것입니다. 하지만 선택지를 다시 보면,\n\n옵션 C는 잘못된 정맥(Bedrock 콘솔의 Model Evaluation이 아닌 Bedrock 에이전트의 Knowledge Base ACL을 설명함)이므로, 올바른 조합은 A(S3 + CORS)와 E(직접 Python 평가)입니다. 그러나 최소 오버헤드는 A + Bedrock 콘솔(암시적)입니다.",
    "en_q": "An ecommerce company is building an internal platform to develop generative AI applications by using Amazon Bedrock foundation models (FMs). Developers need to select models based on evaluations that are aligned to ecommerce use cases. The platform must display accuracy metrics for text generation and summarization in dashboards. The company has custom ecommerce datasets to use as standardized evaluation inputs. Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)",
    "en_opts": {
      "A": "Import the datasets to an Amazon S3 bucket. Provide appropriate IAM permissions and cross-origin resource sharing (CORS) permissions to give the evaluation jobs access to the datasets.",
      "B": "Import the datasets to an Amazon S3 bucket. Provide appropriate IAM permissions and a VPC endpoint configuration to give the evaluation jobs access to the datasets.",
      "C": "Configure an AWS Lambda function to create model evaluation jobs on a schedule in the Amazon Bedrock console. Provide the URI of the S3 bucket that contains the datasets as an input. Configure the evaluation jobs to measure the real world knowledge (RWK) score for text generation and BERT Score for summarization. Configure a second Lambda function to check the status of the jobs and publish custom logs to Amazon CloudWatch. Create a custom Amazon CloudWatch Logs Insights dashboard.",
      "D": "Use Amazon SageMaker Clarify on a schedule to create model evaluation jobs. Use open source frameworks to create and run standardized evaluations. Publish results to Amazon CloudWatch namespaces. Use the word error rate score for text generation and toxicity for summarization as metrics for accuracy. Configure an AWS Lambda function to check the status of the jobs and publish custom logs to CloudWatch. Create a custom Amazon CloudWatch Logs Insights dashboard.",
      "E": "Run an Amazon SageMaker AI notebook job on a schedule by using the fmevals or ragas framework to run evaluations that use the datasets in the S3 bucket. Write Python code in the notebook that makes direct InvokeModel API calls to the FMs and processes their responses for evaluation. Publish job status and results to Amazon CloudWatch Logs to measure the real world knowledge (RWK) score for text generation and toxicity for summarization as metrics for accuracy. Create a custom CloudWatch Logs Insights dashboard."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384245-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 35,
    "question": "엘리베이터 서비스 회사가 Amazon Bedrock을 사용하여 AI 어시스턴트 애플리케이션을 개발했습니다. 애플리케이션은 회사의 엘리베이터 기술자를 지원하기 위해 엘리베이터 유지보수 권장 사항을 생성합니다. 회사는 Amazon Kinesis Data Streams를 사용하여 엘리베이터 센서 데이터를 수집합니다. 새로운 규정 규칙에 따르면 인간 기술자가 AI 생성 권장 사항을 모두 검토해야 합니다. 회사는 AI 권장 사항을 검토하고 승인하기 위한 인간 감시 워크플로우를 구축해야 합니다. 회사는 감사 목적으로 모든 인간 기술자 검토 결정을 저장해야 합니다. 이 요구 사항을 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "AWS Lambda 함수 및 Amazon SQS 큐를 사용하여 인간 검토를 위한 사용자 정의 승인 워크플로우를 생성합니다. 모든 검토 결정을 Amazon DynamoDB에 저장하여 감사합니다.",
      "B": "waitForTaskToken API를 사용하는 인간 승인 단계가 있는 AWS Step Functions 워크플로우를 생성합니다. 인간 기술자가 검토를 완료한 후, SendTaskSuccess API를 호출하도록 AWS Lambda 함수를 사용합니다. 모든 검토 결정을 Amazon DynamoDB에 저장합니다.",
      "C": "인간 승인 단계가 있는 AWS Glue 워크플로우를 생성합니다. 인간 기술자 검토 후, SendTaskSuccess API를 호출하는 AWS Lambda 함수와 애플리케이션을 통합합니다. 모든 인간 기술자 검토 결정을 Amazon DynamoDB에 저장합니다.",
      "D": "AI 권장 사항을 인간 기술자에게 검토하도록 라우팅하기 위해 사용자 정의 이벤트 패턴을 사용하여 Amazon EventBridge 규칙을 구성합니다. AWS Glue 작업을 생성하여 인간 기술자 승인 큐를 처리합니다. 모든 인간 기술자 검토 결정을 캐시하기 위해 Amazon ElastiCache를 사용합니다."
    },
    "answer": "B",
    "explanation": "AWS Step Functions의 waitForTaskToken API는 인간 검토 워크플로우를 위한 표준 패턴입니다.\n\n워크플로우는 waitForTaskToken에서 일시 중지되고, 인간이 검토를 완료한 후 Lambda가 SendTaskSuccess를 호출하여 재개합니다.\n\nDynamoDB는 모든 검토 결정의 감사 기록을 저장합니다.\n\n이는 규정 준수 요구 사항(인간 검토)과 감사 추적을 모두 충족합니다.\n\n옵션\nA는 SQS만으로는 상태를 추적할 수 없습니다.\n\n옵션 C의 Glue는 workflow management를 제공하지 않습니다.\n\n옵션 D의 EventBridge + Glue + ElastiCache는 과도하게 복잡합니다.\n\nStep Functions의 waitForTaskToken은 인간 승인 워크플로우를 위한 AWS 베스트 프랙티스입니다.",
    "en_q": "An elevator service company has developed an AI assistant application by using Amazon Bedrock. The application generates elevator maintenance recommendations to support the company's elevator technicians. The company uses Amazon Kinesis Data Streams to collect the elevator sensor data. New regulatory rules require that a human technician must review all AI-generated recommendations. The company needs to establish human oversight workflows to review and approve AI recommendations. The company must store all human technician review decisions for audit purposes. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a custom approval workflow by using AWS Lambda functions and Amazon SQS queues for human review of AI recommendations. Store all review decisions in Amazon DynamoDB for audit purposes.",
      "B": "Create an AWS Step Functions workflow that has a human approval step that uses the waitForTaskToken API to pause execution. After a human technician completes a review, use an AWS Lambda function to call the SendTaskSuccess API that has the approval decision. Store all review decisions in Amazon DynamoDB.",
      "C": "Create an AWS Glue workflow that has a human approval step. After the human technician review, integrate the application with an AWS Lambda function that calls the SendTaskSuccess API. Store all human technician review decisions in Amazon DynamoDB.",
      "D": "Configure Amazon EventBridge rules with custom event patterns to route AI recommendations to human technicians for review. Create AWS Glue jobs to process human technician approval queues. Use Amazon ElastiCache to cache all human technician review decisions."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384222-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 36,
    "question": "은행이 스캔한 금융 문서를 사용하여 대출 신청을 평가하기 위해 Amazon Bedrock을 사용하는 GenAI 애플리케이션을 구축하고 있습니다. 애플리케이션은 문서에서 구조화된 데이터를 추출해야 합니다. 애플리케이션은 추론 이전에 개인 식별 정보(PII)를 마스킹해야 합니다. 애플리케이션은 foundation models(FM)을 사용하여 승인을 생성해야 합니다. 애플리케이션은 대출 신청자와 동일한 AWS 리전 내의 인간 검토자에게 신뢰도가 낮은 문서 추출 결과를 라우팅해야 합니다. 회사는 엄격한 리전 데이터 거주 및 감사 가능성 요구 사항을 준수해야 합니다. 애플리케이션은 하루에 25,000개 애플리케이션을 처리할 수 있고 99.9% 가용성을 제공해야 합니다. 이 요구 사항을 충족할 솔루션 조합은 어느 것입니까? (3개를 선택하세요.)",
    "options": {
      "A": "스캔한 문서에서 관련 데이터를 추출하기 위해 Amazon Textract와 Amazon Augmented AI(Amazon A2I)를 동일한 리전에 배포합니다. 신뢰도가 낮은 페이지를 인간 검토자에게 라우팅합니다.",
      "B": "제출된 문서에서 PII를 감지하고 마스킹하기 위해 AWS Lambda 함수를 사용합니다. 모델 출력의 부적절하거나 승인되지 않은 콘텐츠를 방지하기 위해 Amazon Bedrock Guardrails을 적용합니다. 리전 특정 IAM 역할을 구성하여 데이터 거주 요구 사항을 강제하고 추출된 데이터에 대한 액세스를 제어합니다.",
      "C": "업로드된 문서에서 필드 레벨 값을 의미론적으로 추출하기 위해 Amazon Kendra와 Amazon OpenSearch Service를 사용합니다.",
      "D": "업로드된 문서를 Amazon S3에 저장하고 객체 메타데이터를 적용합니다. IAM 정책을 구성하여 각 신청자와 동일한 리전 내에 원본 문서를 저장합니다. 향후 감사를 위해 객체 태깅을 활성화합니다.",
      "E": "AWS Glue Data Quality를 사용하여 구조화된 문서 데이터를 검증합니다. AWS Step Functions를 사용하여 검증된 데이터를 Amazon Bedrock에 호출하여 대출 신청을 평가하기 전에 최적화된 프롬프트로 변환하는 프롬프트 엔지니어링 단계를 포함하는 검토 워크플로우를 오케스트레이션합니다.",
      "F": "Amazon Bedrock이 수행한 모델 채점 결정을 기반으로 공정성 및 편향 보고서를 생성하기 위해 Amazon SageMaker Clarify를 사용합니다."
    },
    "answer": "ABD",
    "explanation": "옵션 A는 Textract + A2I로 리전 내 추출 및 인간 검토를 처리합니다.\n\n옵션 B는 PII 마스킹과 Guardrails로 보안 및 규정 준수를 보장하고, 리전 IAM으로 데이터 거주를 강제합니다.\n\n옵션 D는 S3 메타데이터 및 태깅으로 감시 요구 사항을 충족하고, 리전 제약을 구현합니다. 옵션 C의 Kendra/OpenSearch는 구조화된 추출에 과도합니다. 옵션 E의 Glue Data Quality는 필수 아니며, Step Functions는 이미 A2I에 포함됩니다. 옵션 F의 SageMaker Clarify는 편향 감지이지만 이 시나리오의 핵심 요구 사항이 아닙니다. A(추출 + 인간 검토) + B(PII + Guardrails + IAM) + D(감시 + 거주)는 모든 요구 사항을 충족합니다.",
    "en_q": "A bank is building a generative AI (GenAI) application that uses Amazon Bedrock to assess loan applications by using scanned financial documents. The application must extract structured data from the documents. The application must redact personally identifiable information (PII) before inference. The application must use foundation models (FMs) to generate approvals. The application must route low-confidence document extraction results to human reviewers who are within the same AWS Region as the loan applicant. The company must ensure that the application complies with strict Regional data residency and auditability requirements. The application must be able to scale to handle 25,000 applications each day and provide 99.9% availability. Which combination of solutions will meet these requirements? (Choose three.)",
    "en_opts": {
      "A": "Deploy Amazon Textract and Amazon Augmented AI (Amazon A2I) within the same Region to extract relevant data from the scanned documents. Route low-confidence pages to human reviewers.",
      "B": "Use AWS Lambda functions to detect and redact PII from submitted documents before inference. Apply Amazon Bedrock guardrails to prevent inappropriate or unauthorized content in model outputs. Configure Region-specific IAM roles to enforce data residency requirements and to control access to the extracted data.",
      "C": "Use Amazon Kendra and Amazon OpenSearch Service to extract field level values semantically from the uploaded documents before inference.",
      "D": "Store uploaded documents in Amazon S3 and apply object metadata. Configure IAM policies to store original documents within the same Region as each applicant. Enable object tagging for future audits.",
      "E": "Use AWS Glue Data Quality to validate the structured document data. Use AWS Step Functions to orchestrate a review workflow that includes a prompt engineering step that transforms validated data into optimized prompts before invoking Amazon Bedrock to assess loan applications.",
      "F": "Use Amazon SageMaker Clarify to generate fairness and bias reports based on model scoring decisions that Amazon Bedrock makes."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384234-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 37,
    "question": "소프트웨어 회사가 Amazon Q Business를 사용하여 직원이 자연어 프롬프트를 사용하여 회사 정보 및 개인 정보에 액세스할 수 있도록 하는 AI 어시스턴트를 구축하고 있습니다. 회사는 이 정보를 Amazon S3 버킷에 저장합니다. 회사의 각 부서는 S3 버킷의 전용 접두사를 가지고 있습니다. 각 객체 이름에는 해당 객체가 속한 부서의 S3 접두사가 포함됩니다. 각 부서는 AWS IAM Identity Center의 단일 그룹에만 속할 수 있습니다. 각 직원은 단일 부서에 속합니다. 회사는 Amazon Q Business를 S3 버킷에 저장된 데이터에 액세스하도록 데이터 소스로 구성합니다. 회사는 AI 어시스턴트가 사용자의 IAM Identity Center 그룹 멤버십을 기반으로 액세스 제어를 존중하는지 확인해야 합니다. 이 요구 사항을 최소한의 운영 오버헤드로 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "각 부서 폴더에서 acl.json이라는 JSON 파일을 생성합니다. 각 파일에서 해당 부서의 데이터에 액세스해야 하는 IAM Identity Center 그룹을 지정하는 액세스 제어 항목을 생성합니다. 데이터 소스 설정의 Access Control 섹션에서 JSON 파일의 위치를 지정합니다.",
      "B": "S3 버킷의 최상위 수준에서 acl.json이라는 단일 JSON 파일을 생성합니다. 각 부서의 S3 접두사를 해당하는 IAM Identity Center 그룹에 매핑하는 액세스 제어 항목을 추가합니다. 데이터 소스 설정의 Access Control 섹션에서 JSON 파일의 위치를 지정합니다.",
      "C": "각 IAM Identity Center 그룹에 대해 S3 버킷의 모든 접두사에 대한 액세스를 거부하는 별도의 권한 집합을 생성합니다. StringNotEquals 조건 키를 각 그룹이 연결된 부서를 지정하는 각 권한 집합에 추가합니다. 권한 집합을 Identity Center 그룹에 연결합니다.",
      "D": "S3 버킷의 최상위 수준에서 metadata.json이라는 메타데이터 파일을 생성합니다. 파일에 각 부서의 접두사의 S3 경로를 지정하는 AccessControlList 객체를 추가합니다. 각 부서의 접두사에 액세스해야 하는 IAM Identity Center 그룹을 지정합니다. 데이터 소스 메타데이터 설정에서 파일 위치를 참조합니다."
    },
    "answer": "B",
    "explanation": "Amazon Q Business는 S3 버킷의 최상위에 있는 acl.json 파일을 사용하여 IAM Identity Center 그룹 기반 액세스 제어를 구현합니다.\n\n단일 acl.json은 각 부서 접두사를 IAM 그룹에 매핑하므로 운영 오버헤드가 최소입니다.\n\n옵션 A의 다중 acl.json은 각 부서마다 유지해야 합니다.\n\n옵션 C의 StringNotEquals는 Amazon Q의 액세스 제어 메커니즘이 아닙니다.\n\n옵션 D의 metadata.json은 Amazon Q에서 지원되지 않습니다.\n\nAmazon Q의 공식 문서는 최상위 acl.json을 사용하는 방법을 설명합니다.",
    "en_q": "A software company is using Amazon Q Business to build an AI assistant that allows employees to access company information and personal information by using natural language prompts. The company stores this information in an Amazon S3 bucket. Each department in the company has a dedicated prefix in the S3 bucket. Each object name includes the S3 prefix of the department that it belongs to. Each department can belong to only a single group in AWS IAM Identity Center. Each employee belongs to a single department. The company configures Amazon Q Business to access data stored in an S3 bucket as a data source. The company needs to ensure that the AI assistant respects access controls based on the user's IAM Identity Center group membership. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create a JSON file named acl.json in each department folder. In each file, create access control entries that specify the IAM Identity Center group that should have access to that department's data. Indicate the location of the JSON file in the Access Control section of the data source settings.",
      "B": "Create a single JSON file named acl.json at the top level of the S3 bucket. Add access control entries that map each department's S3 prefix to its corresponding IAM Identity Center group. Indicate the location of the JSON file in the Access Control section of the data source settings.",
      "C": "For each IAM Identity Center group, create a separate permissions set that denies access to all prefixes in the S3 bucket. Add a StringNotEquals condition key to the permissions set for each group that specifies the department each group is associated with. Attach the permissions sets to the Identity Center groups.",
      "D": "Create a metadata file named metadata.json at the top level of the S3 bucket. Add an AccessControlList object to the file that specifies the S3 path of each department's prefix. Specify the IAM Identity Center group that should have access to each department's prefix. Reference the file location in the data source metadata settings."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384235-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 38,
    "question": "의료 회사가 Amazon Bedrock을 사용하여 의사가 임상 결정을 내리는 데 도움이 되는 시스템을 구축하고 있습니다. 시스템은 승인된 의료 문서를 기반으로만 치료 권장 사항을 제공하고 특정 출처를 인용해야 합니다. 시스템은 환각하거나 사실상 부정확한 정보를 생성하면 안 됩니다. 이 요구 사항을 최소한의 운영 오버헤드로 충족할 솔루션은 어느 것입니까?",
    "options": {
      "A": "Amazon Bedrock을 Amazon Kendra와 통합하여 승인된 문서를 검색합니다. 생성된 응답을 소스 문서와 비교하고 인용을 포함하기 위한 사용자 정의 후 처리를 구현합니다.",
      "B": "Amazon Bedrock knowledge base를 승인된 임상 소스 문서에 연결하고 배포합니다. Amazon Bedrock RetrieveAndGenerate API를 사용하여 knowledge base에서 인용을 반환합니다.",
      "C": "Amazon Bedrock과 Amazon Comprehend Medical을 사용하여 의료 엔티티를 추출합니다. 의료 용어 데이터베이스에 대해 검증 로직을 구현합니다.",
      "D": "Amazon Bedrock knowledge base와 Retrieve API 호출 및 InvokeModel API 호출을 사용하여 승인된 임상 소스 문서를 검색합니다. 검색된 출처와 비교하기 위해 검증 로직을 구현하고 출처를 인용합니다."
    },
    "answer": "B",
    "explanation": "Amazon Bedrock Knowledge Base의 RetrieveAndGenerate API는 환각 방지 및 소스 인용을 위한 가장 간단한 솔루션입니다.\n\nKnowledge Base는 승인된 임상 문서를 저장하고, RetrieveAndGenerate는 관련 문서를 검색한 후 응답을 생성하며 출처를 자동으로 인용합니다.\n\n이는 최소한의 운영 오버헤드로 사실 정확성과 인용을 보장합니다.\n\n옵션 A의 Kendra는 검색만 수행하고 인용은 수동으로 구현해야 합니다.\n\n옵션 C의 Comprehend Medical은 엔티티 추출이며 인용과 무관합니다.\n\n옵션 D는 Retrieve + InvokeModel의 수동 조합으로 더 복잡합니다.\n\nRetrieveAndGenerate는 Bedrock의 built-in RAG 기능이며 의료 시나리오에 이상적입니다.",
    "en_q": "A healthcare company is using Amazon Bedrock to build a system to help practitioners make clinical decisions. The system must provide treatment recommendations to physicians based only on approved medical documentation and must cite specific sources. The system must not hallucinate or produce factually incorrect information. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Integrate Amazon Bedrock with Amazon Kendra to retrieve approved documents. Implement custom post-processing to compare generated responses against source documents and to include citations.",
      "B": "Deploy an Amazon Bedrock knowledge base and connect it to approved clinical source documents. Use the Amazon Bedrock RetrieveAndGenerate API to return citations from the knowledge base.",
      "C": "Use Amazon Bedrock and Amazon Comprehend Medical to extract medical entities. Implement verification logic against a medical terminology database.",
      "D": "Use an Amazon Bedrock knowledge base with Retrieve API calls and InvokeModel API calls to retrieve approved clinical source documents. Implement verification logic to compare against retrieved sources and to cite sources."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384246-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 39,
    "question": "금융 서비스 회사가 콜센터 상담원을 지원하는 실시간 생성형 AI 어시스턴트를 개발하고 있습니다. 어시스턴트는 고객의 음성을 실시간으로 전사하고, 문맥을 분석하며, 고객이 말하는 동안 상담원에게 점진적 제안을 제공해야 합니다. 응답성을 유지하려면 음성에서 초기 응답 표시까지의 총 지연시간이 1초 미만이어야 합니다. 아키텍처는 관리형 AWS 서비스만 사용하고 양방향 스트리밍을 지원해야 합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon Transcribe 스트리밍 API를 사용하여 통화를 전사합니다. 텍스트를 Amazon Comprehend로 전달하여 감정 분석을 수행합니다. 결과를 InvokeModel API로 Amazon Bedrock의 Anthropic Claude에 전달합니다. 결과를 Amazon DynamoDB에 저장합니다. WebSocket API를 사용하여 결과를 표시합니다.",
      "B": "부분 결과가 활성화된 Amazon Transcribe 스트리밍을 사용하여 고객이 말을 마치기 전에 전사된 텍스트 조각을 전달합니다. 텍스트 조각을 InvokeModelWithResponseStream API로 Amazon Bedrock에 전달합니다. Amazon API Gateway WebSocket API를 통해 상담원에게 응답을 스트리밍합니다.",
      "C": "Amazon Transcribe 일괄 처리를 사용하여 통화를 텍스트로 변환합니다. 완전한 전사본을 ConverseStream API로 Anthropic Claude on Amazon Bedrock에 전달합니다. Amazon Lex 챗봇 인터페이스를 통해 응답을 반환합니다.",
      "D": "Amazon Transcribe 스트리밍 API를 AWS Lambda 함수와 사용하여 각 오디오 세그먼트를 전사합니다. Lambda 함수를 InvokeModel API로 Amazon Bedrock의 Amazon Titan Embeddings 모델을 호출하도록 구성합니다. Amazon SNS 주제에 결과를 게시하도록 함수를 구성합니다."
    },
    "answer": "B",
    "explanation": "실시간 스트리밍 어시스턴트에서 1초 이하의 지연시간 요구사항을 충족하려면 다단계 아키텍처가 필요합니다.\n\n정답 B는 세 가지 핵심 요소를 모두 해결합니다.\n\n첫째, Amazon Transcribe의 부분 결과(partial results) 기능은 고객이 말을 완료하기 전에 인식된 텍스트 조각을 즉시 반환하여 초기 지연을 최소화합니다.\n\n둘째, InvokeModelWithResponseStream API는 Amazon Bedrock 응답을 스트리밍하여 전체 응답을 기다리지 않고 토큰 단위로 결과를 전송합니다.\n\n셋째, WebSocket API는 양방향 실시간 통신을 지원하여 상담원이 즉시 제안을 받을 수 있습니다.\n\n반면 A는 전체 문장 단위를 기다리므로 지연이 길고, C는 일괄 처리로 실시간 요구사항을 충족할 수 없으며, D는 임베딩 모델을 사용하여 생성 기능을 제공하지 못합니다.",
    "en_q": "A financial services company is developing a real-time generative AI (GenAI) assistant to support human call center agents. The GenAI assistant must transcribe live customer speech, analyze context, and provide incremental suggestions to call center agents while a customer is still speaking. To preserve responsiveness, the GenAI assistant must maintain end-to-end latency under 1 second from speech to initial response display. The architecture must use only managed AWS services and must support bidirectional streaming to ensure that call center agents receive updates in real time. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use the Amazon Transcribe streaming API to transcribe calls. Pass the text to Amazon Comprehend to perform sentiment analysis. Feed the results to Anthropic Claude on Amazon Bedrock by using the InvokeModel API. Store results in Amazon DynamoDB. Use a WebSocket API to display the results.",
      "B": "Use Amazon Transcribe streaming with partial results enabled to deliver fragments of transcribed text before customers finish speaking. Forward text fragments to Amazon Bedrock by using the InvokeModelWithResponseStream API. Stream responses to call center agents through an Amazon API Gateway WebSocket API.",
      "C": "Use Amazon Transcribe batch processing to convert calls to text. Pass complete transcripts to Anthropic Claude on Amazon Bedrock by using the ConverseStream API. Return responses through an Amazon Lex chatbot interface that call center agents can access from their work computers.",
      "D": "Use the Amazon Transcribe streaming API with an AWS Lambda function to transcribe each audio segment. Configure the Lambda function to call the Amazon Titan Embeddings model on Amazon Bedrock by using the InvokeModel API. Configure the Lambda function to publish results to an Amazon SNS topic. Subscribe the call center agents to the SNS topic."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384260-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 40,
    "question": "미디어 회사가 매시간 수천 명의 사용자가 이미지와 텍스트 콘텐츠를 업로드할 수 있는 플랫폼을 출시하고 있습니다. 플랫폼은 Amazon Bedrock을 사용하여 업로드된 콘텐츠를 처리하고 창작물을 생성합니다. 회사는 플랫폼이 부적절한 콘텐츠를 처리하거나 생성하지 않도록 보장해야 합니다. 생성물에서 개인식별정보(PII)를 노출하면 안 됩니다. 솔루션은 회사의 기존 Amazon S3 스토리지 워크플로우와 통합되어야 합니다. 어느 솔루션이 최소 인프라 관리 오버헤드로 요구사항을 충족합니까?",
    "options": {
      "A": "Enhanced Monitoring 도구를 활성화합니다. Amazon CloudWatch 알람을 사용하여 플랫폼 트래픽을 필터링합니다. Amazon Comprehend PII 감지를 사용하여 데이터를 전처리합니다. CloudWatch 알람을 생성하여 Amazon Comprehend PII 감지 이벤트를 모니터링합니다. Amazon Rekognition 이미지 조정 단계를 포함하는 AWS Step Functions 워크플로우를 생성합니다.",
      "B": "Amazon API Gateway HTTP API를 요청 검증 템플릿과 함께 사용하여 Amazon S3에 업로드된 콘텐츠를 저장하기 전에 스크린합니다. Amazon SageMaker AI를 사용하여 Amazon Bedrock으로 전송하기 전에 콘텐츠를 처리하는 사용자 정의 콘텐츠 조정 모델을 구축합니다.",
      "C": "인증 전 AWS Lambda 함수를 실행하는 Amazon Cognito 사용자 풀을 생성합니다. Amazon Textract를 사용하여 텍스트 콘텐츠를 필터링하고 Amazon Rekognition을 사용하여 사용자가 플랫폼에 콘텐츠를 업로드할 수 있도록 하기 전에 이미지 콘텐츠를 필터링합니다.",
      "D": "내장 Amazon Bedrock guardrails를 사용하여 콘텐츠를 필터링하는 AWS Step Functions 워크플로우를 생성합니다. Amazon Comprehend PII 감지를 사용하여 콘텐츠를 전처리합니다. Amazon Rekognition 이미지 조정을 사용합니다."
    },
    "answer": "D",
    "explanation": "정답 D는 Amazon Bedrock guardrails를 활용하여 관리형 서비스만으로 콘텐츠 필터링을 최소화합니다.\n\nBedrock guardrails는 모델 입력 및 출력에서 부적절한 콘텐츠와 PII를 자동으로 감지하고 차단하는 기본 제공 기능입니다.\n\nAWS Step Functions 워크플로우는 PII 감지, 콘텐츠 조정, Bedrock 호출을 순차적으로 조정하므로 복잡한 커스텀 로직이 필요 없습니다.\n\nAmazon Comprehend는 PII를 선택적으로 감지하고, Amazon Rekognition은 이미지 조정을 수행합니다.\n\nA는 CloudWatch 알람 기반이므로 비효율적이고, B는 SageMaker 모델을 커스텀 구축해야 해서 오버헤드가 크며, C는 인증 단계에 필터링을 배치하여 성능이 떨어집니다.\n\nBedrock guardrails는 인프라 관리 없이 확장 가능한 콘텐츠 필터링을 제공합니다.",
    "en_q": "A media company is launching a platform that allows thousands of users every hour to upload images and text content. The platform uses Amazon Bedrock to process the uploaded content to generate creative compositions. The company needs a solution to ensure that the platform does not process or produce inappropriate content. The platform must not expose personally identifiable information (PII) in the compositions. The solution must integrate with the company's existing Amazon S3 storage workflow. Which solution will meet these requirements with the LEAST infrastructure management overhead?",
    "en_opts": {
      "A": "Enable the Enhanced Monitoring tool. Use an Amazon CloudWatch alarm to filter traffic to the platform. Use Amazon Comprehend PII detection to pre-process the data. Create a CloudWatch alarm to monitor for Amazon Comprehend PII detection events. Create an AWS Step Functions workflow that includes an Amazon Rekognition image moderation step.",
      "B": "Use an Amazon API Gateway HTTP API with request validation templates to screen content before storing the uploaded content in Amazon S3. Use Amazon SageMaker AI to build custom content moderation models that process content before sending the processed content to Amazon Bedrock.",
      "C": "Create an Amazon Cognito user pool that uses pre-authentication AWS Lambda functions to run content moderation checks. Use Amazon Textract to filter text content and Amazon Rekognition to filter image content before allowing users to upload content to the platform.",
      "D": "Create an AWS Step Functions workflow that uses built-in Amazon Bedrock guardrails to filter content. Use Amazon Comprehend PII detection to pre-process the content. Use Amazon Rekognition image moderation."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384259-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 41,
    "question": "회사가 모든 개발자에게 Amazon Q Developer Pro 라이선스를 설정했습니다. 회사는 개발자가 애플리케이션 개발 시 사용해야 할 승인된 리소스 목록을 유지하고 있습니다. 승인된 리소스에는 내부 라이브러리, 독점 알고리즘 기법, 승인된 스타일의 샘플 코드가 포함됩니다. 새로운 개발자 팀이 Amazon Q Developer를 사용하여 새로운 Java 기반 애플리케이션을 개발하고 있습니다. 회사는 새 개발자 팀이 회사의 승인된 리소스를 사용하도록 보장해야 합니다. 회사는 프로젝트 수준의 수정을 원하지 않습니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "승인된 내부 라이브러리, 알고리즘, 코드 샘플을 모두 포함하는 Git 리포지토리를 생성합니다. 이 Git 리포지토리를 워크스페이스의 일부로 애플리케이션 프로젝트에 로컬로 포함시킵니다. 개발자들이 @workspace 컨텍스트를 사용하여 Git 리포지토리에서 제안을 검색하도록 보장합니다.",
      "B": "프로젝트 루트 폴더에 .amazonq/rules라는 폴더를 생성합니다. 승인된 내부 라이브러리, 알고리즘, 코드 샘플을 폴더에 추가합니다.",
      "C": "애플리케이션 프로젝트에 rules라는 폴더를 생성합니다. Amazon Q Developer가 참조할 수 있도록 폴더에 지침과 코드를 저장합니다.",
      "D": "Amazon Q Developer 커스터마이제이션을 생성하고 승인된 데이터 소스를 포함합니다. 개발자들이 이 커스터마이제이션을 사용하여 애플리케이션을 개발하도록 보장합니다."
    },
    "answer": "D",
    "explanation": "정답 D는 Amazon Q Developer 커스터마이제이션 기능을 활용하여 조직 전체에 일관된 승인된 리소스를 배포합니다.\n\n커스터마이제이션은 프로젝트 수준의 변경 없이 조직 수준에서 라이브러리, 알고리즘, 코드 스타일을 정의합니다.\n\n개발자 팀이 이 커스터마이제이션을 사용하면 모든 제안이 승인된 리소스에 기반합니다.\n\nA는 Git 리포지토리를 프로젝트에 로컬 포함시켜야 하므로 프로젝트 수준 수정이 필요하고, B와 C는 폴더 이름 컨벤션에 의존하지만 Amazon Q Developer의 공식 커스터마이제이션 메커니즘이 아닙니다.\n\nD는 조직 차원의 정책을 모든 프로젝트에 자동 적용하므로 확장성과 유지보수 측면에서 우수합니다.",
    "en_q": "A company has set up Amazon Q Developer Pro licenses for all developers at the company. The company maintains a list of approved resources that developers must use when developing applications. The approved resources include internal libraries, proprietary algorithmic techniques, and sample code with approved styling. A new team of developers is using Amazon Q Developer to develop a new Java-based application. The company must ensure that the new developer team uses the company's approved resources. The company does not want to make project-level modifications. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a Git repository that contains all of the approved internal libraries, algorithms, and code samples. Include this Git repository in the application project locally as part of the workspace. Ensure that the developers use the @workspace context to retrieve suggestions from the Git repository.",
      "B": "In the project root folder, create a folder named .amazonq/rules. Add the approved internal libraries, algorithms, and code samples to the folder.",
      "C": "Create a folder in the application project named rules. Store the guidelines and code in the folder for Amazon Q Developer to reference product code suggestions.",
      "D": "Create an Amazon Q Developer customization that includes the approved data sources. Ensure that the developers use the customization to develop the application."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384292-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 42,
    "question": "전자상거래 회사가 Amazon Bedrock을 사용하여 고객 서비스 AI 어시스턴트를 구축하고 있습니다. AI 어시스턴트는 매일 50,000개 이상의 고객 문의를 처리해야 합니다. 프로모션 행사 중에는 매일 최대 150,000개의 문의 트래픽 스파이크가 발생합니다. 분석에 따르면 40%의 문의가 동일한 문맥을 공유하는 유사한 패턴을 따릅니다. GenAI 개발자는 트래픽 스파이크 중에도 AI 어시스턴트에 낮은 지연시간과 일관된 성능을 보장하는 솔루션을 설계해야 합니다. 어느 솔루션이 가장 비용 효율적입니까?",
    "options": {
      "A": "성능 구성의 지연시간 매개변수를 최적화로 설정하여 지연시간 최적화된 추론을 구성합니다. 반복되는 문의를 처리하기 위해 프롬프트 캐싱을 사용합니다.",
      "B": "피크 트래픽을 처리할 수 있도록 크기 조정된 프로비저닝된 처리량 및 모델 유닛(MU)을 구매합니다. 반복 문의를 캐시하기 위해 Amazon ElastiCache(Redis OSS)를 사용합니다.",
      "C": "Amazon Bedrock Agents 및 사용자 정의 지식 기반을 사용하여 고객 문의를 전처리합니다. 트래픽을 분산하기 위해 교차 지역 추론을 구성합니다.",
      "D": "AWS Lambda 함수를 사용하여 사용자 정의 프롬프트 라우팅 메커니즘으로 요청을 전처리합니다. 자주 묻는 질문을 처리하기 위해 Amazon DynamoDB를 캐싱 계층으로 사용합니다."
    },
    "answer": "A",
    "explanation": "정답 A는 프롬프트 캐싱(prompt caching)을 활용하여 가장 비용 효율적인 솔루션을 제공합니다.\n\n프롬프트 캐싱은 시스템 프롬프트, 문맥, 또는 반복되는 입력을 캐시하여 토큰 비용을 크게 절감합니다.\n\n40%의 유사한 문의는 캐시된 프롬프트를 재사용함으로써 API 비용을 감소시킵니다.\n\n지연시간 최적화 설정은 추론 성능을 향상시킵니다.\n\nB는 피크 시간대를 위해 프로비저닝된 처리량을 구매하므로 고정 비용이 높고, ElastiCache는 추가 관리 오버헤드를 증가시킵니다.\n\nC는 Agents와 지식 기반 설정으로 복잡도가 높으며, D는 Lambda와 DynamoDB로 인한 추가 비용이 발생합니다.\n\n프롬프트 캐싱은 Bedrock 내장 기능으로서 비용 절감과 성능 향상을 동시에 달성합니다.",
    "en_q": "An ecommerce company is using Amazon Bedrock to build a customer service AI assistant. The AI assistant needs to process over 50,000 customer inquiries every day. The AI assistant occasionally experiences traffic spikes of up to 150,000 inquiries every day during promotional events. Analysis shows that 40% of inquiries follow similar patterns that share the same context. A GenAI developer must design a solution that will ensure low latency and consistent performance for the AI assistant during traffic spikes. Which solution will meet these requirements MOST cost-effectively?",
    "en_opts": {
      "A": "Configure latency-optimized inference by setting the latency parameter to optimized in the performance configuration of the request to Amazon Bedrock. Use prompt caching to handle the repetitive inquiries.",
      "B": "Purchase provisioned throughput and model units (MUs) that are sized to handle peak traffic loads. Use Amazon ElastiCache (Redis OSS) to cache repetitive inquiries.",
      "C": "Use Amazon Bedrock Agents and custom knowledge bases to pre-process customer inquiries. Configure cross-Region inference to distribute traffic.",
      "D": "Use AWS Lambda functions to pre-process requests by using a custom prompt routing mechanism. Use Amazon DynamoDB as a caching layer to handle frequently asked questions."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384249-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 43,
    "question": "법률 연구 회사는 Amazon Bedrock과 Amazon OpenSearch Service를 사용하는 검색 증강 생성(RAG) 애플리케이션을 보유하고 있습니다. 애플리케이션은 법령, 판례, 판결문 요약을 포함한 1,500만 개의 법적 문서에 대한 768차원 벡터 임베딩을 저장합니다. 회사의 현재 청킹 전략은 텍스트를 500 토큰의 고정 길이 블록으로 분할합니다. 이 전략은 종종 법적 주장, 판결 의견, 법령 참조와 같이 문맥적으로 연결된 정보를 별도 청크로 분할합니다. 연구자들은 생성된 결과가 핵심 문맥을 누락하거나 오래된 법적 정보를 인용한다고 보고합니다. 최근 애플리케이션 로그는 응답 시간이 40% 증가했음을 보여줍니다. p95 지연시간은 2초를 초과합니다. 회사는 향후 1년 내 스토리지 필요 용량이 90GB에서 360GB로 증가할 것으로 예상합니다. 검색 관련성과 대규모 시스템 성능을 개선하는 솔루션이 필요합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "기존 청킹 또는 전처리 전략을 변경하지 않고 임베딩 벡터 차원을 768에서 4,096으로 증가시킵니다.",
      "B": "동적 검색을 사전 작성된 정적 요약으로 바꿉니다. Amazon S3에 요약을 저장하고 Amazon CloudFront를 사용하여 요약을 제공하여 컴퓨팅 요구를 줄입니다.",
      "C": "청킹 전략을 고정 토큰 제한 대신 완전한 법적 주장, 조항 또는 섹션과 같은 의미론적 경계를 사용하도록 업데이트합니다. 새로운 청크 구조에 맞추도록 벡터 임베딩을 다시 생성합니다.",
      "D": "OpenSearch Service에서 Amazon DynamoDB로 마이그레이션합니다. 법적 개념의 빠른 조회를 위해 키워드 기반 인덱스를 구현합니다."
    },
    "answer": "C",
    "explanation": "정답 C는 의미론적 청킹(semantic chunking)을 도입하여 RAG 성능의 근본 원인을 해결합니다.\n\n고정 토큰 청킹으로 인해 법적 주장이 분할되면 검색 관련성이 떨어지고 LLM이 완전한 문맥 없이 응답합니다.\n\n의미론적 경계(완전한 조항, 섹션, 주장)에 따라 청킹하면 각 벡터가 의미적으로 완전한 단위를 나타내므로 검색 정확도가 향상됩니다.\n\n이는 p95 지연시간을 줄이고 생성 품질을 개선합니다.\n\nA는 고차원 벡터로 저장 공간과 검색 복잡도를 증가시키므로 역효과입니다.\n\nB는 정적 요약으로 동적 쿼리 대응이 불가능하고, D는 벡터 검색의 이점을 포기합니다.\n\n의미론적 청킹은 검색 품질과 성능을 동시에 개선하는 핵심 RAG 최적화입니다.",
    "en_q": "A legal research company has a Retrieval Augmented Generation (RAG) application that uses Amazon Bedrock and Amazon OpenSearch Service. The application stores 768-dimensional vector embeddings for 15 million legal documents, including statutes, court rulings, and case summaries. The company's current chunking strategy segments text into fixed-length blocks of 500 tokens. The current chunking strategy often splits contextually linked information such as legal arguments, court opinions, or statute references across separate chunks. Researchers report that generated outputs frequently omit key context or cite outdated legal information. Recent application logs show a 40% increase in response times. The p95 latency metric exceeds 2 seconds. The company expects storage needs for the application to grow from 90 GB to 360 GB within a year. The company needs a solution to improve retrieval relevance and system performance at scale. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Increase the embedding vector dimensionality from 768 to 4,096 without changing the existing chunking or pre-processing strategy.",
      "B": "Replace dynamic retrieval with static, pre-written summaries that are stored in Amazon S3. Use Amazon CloudFront to serve the summaries to reduce compute demand and improve predictability.",
      "C": "Update the chunking strategy to use semantic boundaries such as complete legal arguments, clauses, or sections rather than fixed token limits. Regenerate vector embeddings to align with the new chunk structure.",
      "D": "Migrate from OpenSearch Service to Amazon DynamoDB. Implement keyword-based indexes to enable faster lookups for legal concepts."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384269-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 44,
    "question": "회사가 Amazon Bedrock 기초 모델(FM)을 사용하는 생성형 AI 기반 고객 지원 애플리케이션을 개발하고 있습니다. 애플리케이션은 동일한 사용자와의 여러 상호작용 간에 대화 문맥을 유지해야 합니다. 애플리케이션은 애매한 사용자 쿼리를 처리하기 위해 명확화 워크플로우를 실행해야 합니다. 회사는 개인화를 위해 각 사용자 대화의 암호화된 기록을 저장해야 합니다. 애플리케이션은 각 사용자에게 빠르게 응답하면서 수천 명의 동시 사용자를 처리할 수 있어야 합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "AWS Step Functions Express 워크플로우를 사용하여 대화 흐름을 조율합니다. 명확화 로직을 실행하기 위해 AWS Lambda 함수를 호출합니다. 대화 기록을 Amazon RDS에 저장하고 세션 ID를 기본 키로 사용합니다.",
      "B": "AWS Step Functions Standard 워크플로우를 사용하여 명확화 워크플로우를 조율합니다. 워크플로우를 관리하기 위해 콜백 대기 패턴을 포함시킵니다. 대화 기록을 Amazon DynamoDB에 저장하고, 온디맨드 용량을 선택하며, 서버 측 암호화를 구성합니다.",
      "C": "Amazon API Gateway REST API를 배포하여 사용자 요청을 AWS Lambda 함수로 라우팅하고 대화 문맥을 업데이트하고 검색합니다. 대화 기록을 Amazon S3에 저장하고 서버 측 암호화를 구성합니다. 각 상호작용을 별도 JSON 파일로 저장합니다.",
      "D": "AWS Lambda 함수를 사용하여 Amazon Bedrock 추론 API를 호출합니다. 명확화 단계를 조율하기 위해 Amazon SQS 큐를 사용합니다. 대화 기록을 Amazon ElastiCache(Redis OSS) 클러스터에 저장합니다. 저장 시 암호화를 구성합니다."
    },
    "answer": "B",
    "explanation": "정답 B는 AWS Step Functions Standard 워크플로우로 대화 흐름의 상태를 관리하고 DynamoDB로 확장성 있는 저장소를 제공합니다.\n\nStep Functions Standard는 장기 실행되는 워크플로우와 콜백 대기를 지원하므로 사용자의 명확화 입력을 기다릴 수 있습니다.\n\nDynamoDB는 온디맨드 용량 모드로 수천 개의 동시 세션을 처리하면서 비용을 최소화합니다.\n\n서버 측 암호화는 저장된 대화를 보호합니다.\n\nA는 Express 워크플로우로 상태 저장이 제한되고, C는 S3에 개별 JSON 파일 저장으로 조회 성능이 떨어지며, D는 ElastiCache 메모리 제약과 상태 관리의 복잡성이 있습니다.\n\nStep Functions는 대화 상태 머신 패턴의 표준 솔루션입니다.",
    "en_q": "A company is developing a generative AI (GenAI)-powered customer support application that uses Amazon Bedrock foundation models (FMs). The application must maintain conversational context across multiple interactions with the same user. The application must run clarification workflows to handle ambiguous user queries. The company must store encrypted records of each user conversation to use for personalization. The application must be able to handle thousands of concurrent users while responding to each user quickly. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use an AWS Step Functions Express workflow to orchestrate conversation flow. Invoke AWS Lambda functions to run clarification logic. Store conversation history in Amazon RDS and use session IDs as the primary key.",
      "B": "Use an AWS Step Functions Standard workflow to orchestrate clarification workflows. Include Wait for a Callback patterns to manage the workflows. Store conversation history in Amazon DynamoDB. Purchase on-demand capacity and configure server-side encryption.",
      "C": "Deploy the application by using an Amazon API Gateway REST API to route user requests to an AWS Lambda function to update and retrieve conversation context. Store conversation history in Amazon S3 and configure server-side encryption. Save each interaction as a separate JSON file.",
      "D": "Use AWS Lambda functions to call Amazon Bedrock inference APIs. Use Amazon SQS queues to orchestrate clarification steps. Store conversation history in an Amazon ElastiCache (Redis OSS) cluster. Configure encryption at rest."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384248-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 45,
    "question": "금융 서비스 회사는 고객 전사본, 금융 보고서, 문서와 같은 비정형 데이터를 전처리해야 합니다. 회사는 Amazon Bedrock 애플리케이션을 지원하기 위해 비정형 데이터를 Amazon S3에 저장합니다. 회사는 데이터 품질을 검증하고, 감사 가능한 메타데이터를 생성하며, 데이터 메트릭을 모니터링하고, 기초 모델(FM) 성능을 최적화하기 위해 텍스트 청킹을 커스터마이즈해야 합니다. 어느 솔루션이 최소 개발 노력으로 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon SageMaker Data Wrangler를 사용하여 데이터 흐름을 생성합니다. Amazon CloudWatch 메트릭과 알람을 구성하여 데이터 품질을 모니터링합니다. 사용자 정의 AWS Lambda 함수를 사용하여 데이터를 전처리합니다. 처리된 데이터를 Amazon Bedrock에 로드합니다.",
      "B": "AWS Glue 크롤러를 설정하여 데이터 소스를 카탈로그합니다. 사용자 정의 변환 스크립트를 실행하기 위해 AWS Glue ETL 작업을 생성합니다. AWS Glue Data Quality를 사용하여 데이터 품질을 검증하고 모니터링합니다. 처리된 데이터를 Amazon Bedrock에 로드합니다.",
      "C": "Amazon Comprehend를 사용하여 엔티티를 추출합니다. 텍스트를 청킹하기 위해 AWS Lambda 함수를 생성합니다. Amazon Athena를 사용하여 데이터 품질을 쿼리하고 검증합니다. 처리된 데이터를 Amazon Bedrock에 로드합니다.",
      "D": "데이터 전처리 작업을 조율하기 위해 AWS Step Functions 워크플로우를 생성합니다. Amazon EC2 인스턴스에서 사용자 정의 코드를 실행하여 데이터를 처리합니다. Amazon SageMaker Model Monitor를 사용하여 데이터 품질을 모니터링합니다. 처리된 데이터를 Amazon Bedrock에 로드합니다."
    },
    "answer": "B",
    "explanation": "정답 B는 AWS Glue를 통합 데이터 전처리 플랫폼으로 활용하여 최소 개발 노력을 제공합니다.\n\nAWS Glue 크롤러는 S3 데이터를 자동으로 카탈로그하고, Glue ETL 작업은 PySpark/Scala로 확장 가능한 변환을 실행하며, AWS Glue Data Quality는 내장 규칙으로 데이터 검증과 모니터링을 제공합니다.\n\n이 모든 기능이 통합되어 있어 별도 도구 구성이 최소화됩니다.\n\nA는 Data Wrangler로 시각적 설계는 가능하지만 복잡한 청킹 로직에는 부족하고, C는 Comprehend(엔티티만), Lambda, Athena를 분산 관리해야 하며, D는 EC2 인스턴스 관리와 SageMaker Model Monitor 설정으로 오버헤드가 큽니다.\n\nGlue는 데이터 카탈로깅, 변환, 품질 검증의 일관된 workflow를 제공합니다.",
    "en_q": "A financial services company needs to pre-process unstructured data such as customer transcripts, financial reports, and documentation. The company stores the unstructured data in Amazon S3 to support an Amazon Bedrock application. The company must validate data quality, create auditable metadata, monitor data metrics, and customize text chunking to optimize foundation model (FM) performance. Which solution will meet these requirements with the LEAST development effort?",
    "en_opts": {
      "A": "Use Amazon SageMaker Data Wrangler to create a data flow. Configure Amazon CloudWatch metrics and alarms to monitor data quality. Use a custom AWS Lambda function to pre-process the data. Load processed data into Amazon Bedrock.",
      "B": "Set up an AWS Glue crawler to catalog data sources. Create AWS Glue ETL jobs to run custom transformation scripts. Use AWS Glue Data Quality to validate and monitor data quality. Load processed data into Amazon Bedrock.",
      "C": "Use Amazon Comprehend to extract entities. Create an AWS Lambda function to chunk text. Run Amazon Athena to query and validate data quality. Load processed data into Amazon Bedrock.",
      "D": "Create an AWS Step Functions workflow to orchestrate data pre-processing tasks. Run custom code on Amazon EC2 instances to process the data. Use Amazon SageMaker Model Monitor to monitor data quality. Load processed data into Amazon Bedrock."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384278-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 46,
    "question": "회사가 Amazon Bedrock을 사용하여 검색 증강 생성(RAG) 시스템을 구축하고 있습니다. RAG 시스템은 긴급 뉴스 비디오 콘텐츠에 대한 데이터 소스로 Amazon S3 버킷을 기반으로 하는 Amazon Bedrock 지식 기반을 사용합니다. 시스템은 S3 버킷에서 전사본, 아카이브된 보고서, 관련 문서를 검색합니다. RAG 시스템은 최첨단 임베딩 모델과 고성능 검색 설정을 사용합니다. 하지만 사용자들은 느린 응답과 관련 없는 결과를 보고하며 사용자 만족도가 감소합니다. 회사는 벡터 검색이 너무 많은 문서를 여러 콘텐츠 유형과 긴 기간에 걸쳐 평가하고 있음을 알아냅니다. 회사는 기초 모델이 추가 미세 조정으로부터 이점을 얻지 못할 것으로 판단합니다. 회사는 더 스마트한 제약을 적용하여 검색 정확도를 개선해야 합니다. 기존 아키텍처에 최소한의 변경으로 솔루션을 원합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "벡터 유사도 개선을 위해 긴급 뉴스 콘텐츠에 특별히 훈련된 도메인 적응 모델을 사용하여 임베딩을 향상시킵니다.",
      "B": "Amazon OpenSearch Service로 마이그레이션합니다. 벡터 필드와 메타데이터 필터를 사용하여 결과 검색 범위를 정의합니다.",
      "C": "Amazon Bedrock 지식 기반 내에서 S3 객체 메타데이터를 인덱싱하여 메타데이터 인식 필터링을 활성화합니다.",
      "D": "Amazon Q Business 인덱스로 마이그레이션하여 검색 중 구조화된 메타데이터 필터링과 문서 분류를 수행합니다."
    },
    "answer": "C",
    "explanation": "정답 C는 Amazon Bedrock 지식 기반의 메타데이터 필터링 기능을 활용하여 최소 아키텍처 변경으로 검색 정확도를 개선합니다.\n\nS3 객체 메타데이터(날짜, 콘텐츠 유형, 카테고리 등)를 인덱싱하면 벡터 검색 범위를 제한할 수 있습니다.\n\n예를 들어 '긴급 뉴스' 필터와 '최근 7일' 날짜 필터를 적용하면 평가할 문서 수를 대폭 감소시킵니다.\n\n이는 기존 Bedrock 지식 기반 내에서 구성만으로 가능하므로 아키텍처 변경이 최소화됩니다.\n\nA는 도메인 모델 재훈련으로 비용과 시간이 많이 들고, B는 완전한 마이그레이션이 필요하며, D는 Amazon Q Business로 전환하는 큰 변경입니다.\n\n메타데이터 필터링은 Bedrock 지식 기반의 native 기능입니다.",
    "en_q": "A company uses Amazon Bedrock to build a Retrieval Augmented Generation (RAG) system. The RAG system uses an Amazon Bedrock knowledge base that is based on an Amazon S3 bucket as the data source for emergency news video content. The system retrieves transcripts, archived reports, and related documents from the S3 bucket. The RAG system uses state-of-the-art embedding models and a high-performing retrieval setup. However, users report slow responses and irrelevant results, which cause decreased user satisfaction. The company notices that vector searches are evaluating too many documents across too many content types and over long periods of time. The company determines that the underlying models will not benefit from additional fine tuning. The company must improve retrieval accuracy by applying smarter constraints. The company wants a solution that requires minimal changes to the existing architecture. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Enhance embeddings by using a domain-adapted model that is specifically trained on emergency news content for improved vector similarity.",
      "B": "Migrate to Amazon OpenSearch Service. Use vector fields and metadata filters to define the scope of results retrieval.",
      "C": "Enable metadata-aware filtering within the Amazon Bedrock knowledge base by indexing S3 object metadata.",
      "D": "Migrate to an Amazon Q Business index to perform structured metadata filtering and document categorization during retrieval."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384252-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 47,
    "question": "금융 서비스 회사가 Amazon Bedrock을 사용하여 시장 활동 요약을 생성하는 검색 증강 생성(RAG) 애플리케이션을 만들고 있습니다. 애플리케이션은 인덱스 수가 적은 작은 독점 데이터셋을 저장하는 벡터 데이터베이스에 의존합니다. 애플리케이션은 유사도 검색을 수행해야 합니다. Amazon Bedrock 모델의 응답은 정확도를 최대화하고 높은 성능을 유지해야 합니다. 회사는 벡터 데이터베이스를 구성하고 애플리케이션과 통합해야 합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon MemoryDB 클러스터를 시작하고 Flat 알고리즘을 사용하여 인덱스를 구성합니다. 성능 메트릭을 기반으로 수평 확장 정책을 구성합니다.",
      "B": "Amazon MemoryDB 클러스터를 시작하고 계층적 탐색 가능한 작은 세계(HNSW) 알고리즘을 사용하여 인덱스를 구성합니다. 성능 메트릭을 기반으로 수직 정책을 구성합니다.",
      "C": "Amazon Aurora PostgreSQL 클러스터를 시작하고 Inverted File with Flat Compression(IVFFlat) 알고리즘을 사용하여 인덱스를 구성합니다. 부하 증가 시 더 큰 인스턴스 클래스로 확장하도록 인스턴스 클래스를 구성합니다.",
      "D": "Inverted File with Flat Compression(IVFFlat) 인덱스와 높은 probe 값을 가진 Amazon DocumentDB 클러스터를 시작합니다. 클러스터의 연결을 레플리카 세트로 구성하고 레플리카 인스턴스로 읽기를 분산합니다."
    },
    "answer": "A",
    "explanation": "정답 A는 작은 데이터셋에 최적화된 솔루션을 제공합니다.\n\nAmazon MemoryDB의 Flat 알고리즘은 모든 벡터에 대해 정확한 유사도를 계산하므로 작은 인덱스에서 최고 정확도를 제공합니다.\n\n인덱스 수가 적으면(문제에서 언급) Flat 알고리즘의 O(n) 복잡도도 실제로는 빠릅니다.\n\n수평 확장은 동시 쿼리를 처리합니다.\n\nB의 HNSW는 대규모 데이터셋(수백만 벡터)에서 수렴 성능을 보이지만, 수평 확장이 아닌 수직 확장만 언급되어 확장성이 제한됩니다.\n\nC와 D의 IVFFlat는 근사 알고리즘으로 정확도가 낮습니다.\n\n작은 전용 데이터셋에서는 Flat 알고리즘으로 정확도와 성능을 모두 달성할 수 있습니다.",
    "en_q": "A financial services company is creating a Retrieval Augmented Generation (RAG) application that uses Amazon Bedrock to generate summaries of market activities. The application relies on a vector database that stores a small proprietary dataset that has a low index count. The application must perform similarity searches. The Amazon Bedrock model's responses must maximize accuracy and maintain high performance. The company needs to configure the vector database and integrate it with the application. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Launch an Amazon MemoryDB cluster and configure the index by using the Flat algorithm. Configure a horizontal scaling policy based on performance metrics.",
      "B": "Launch an Amazon MemoryDB cluster and configure the index by using the Hierarchical Navigable Small World (HNSW) algorithm. Configure a vertical policy based on performance metrics.",
      "C": "Launch an Amazon Aurora PostgresSQL cluster and configure the index by using the Inverted File with Flat Compression (IVFFlat) algorithm. Configure the instance class to scale to a larger size when the load increases.",
      "D": "Launch an Amazon DocumentDB cluster that has an Inverted File with Flat Compression (IVFFlat) index and a high probe value. Configure connections to the cluster as a replica set Distribute reads to replica instances."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384281-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 48,
    "question": "GenAI 개발자가 Amazon Bedrock 기초 모델(FM)을 사용하는 검색 증강 생성(RAG) 기반 고객 지원 애플리케이션을 구축하고 있습니다. 애플리케이션은 Amazon S3 버킷에 JSON 파일로 저장된 50GB의 과거 고객 대화를 처리해야 합니다. 애플리케이션은 처리된 데이터를 검색 코퍼스로 사용해야 합니다. 데이터 처리 워크플로우는 고객 지원 문서에서 관련 데이터를 추출하고, 고객 개인식별정보(PII)를 제거하며, 벡터 저장소용 임베딩을 생성해야 합니다. 처리 워크플로우는 비용 효율적이어야 하고 4시간 내에 완료되어야 합니다. 어느 솔루션이 최소 운영 오버헤드로 요구사항을 충족합니까?",
    "options": {
      "A": "AWS Lambda와 Amazon Comprehend를 사용하여 파일을 병렬로 처리하고 PII를 제거하며 Amazon Bedrock API를 호출하여 벡터를 생성합니다. Lambda 동시성 제한과 메모리 설정을 최적화하여 처리량을 최적화합니다.",
      "B": "AWS Glue ETL 작업을 생성하여 데이터에 대해 PII 감지 스크립트를 실행합니다. Amazon SageMaker Processing을 사용하여 HuggingFaceProcessor를 실행하여 사전 훈련된 모델을 사용하여 임베딩을 생성합니다. Amazon OpenSearch Service에 임베딩을 저장합니다.",
      "C": "Apache Spark와 사용자 정의 함수(UDF)를 실행하는 Amazon EMR 클러스터를 배포하여 Amazon Comprehend를 호출하여 PII를 감지합니다. Amazon Bedrock API를 사용하여 벡터를 생성합니다. Aurora PostgreSQL의 pgvector 확장과 함께 Amazon Aurora PostgreSQL에 출력을 저장합니다.",
      "D": "AWS Step Functions를 사용하여 Amazon Comprehend로 PII를 감지하고 Amazon Bedrock으로 임베딩을 생성하는 워크로드를 조율하는 데이터 처리 파이프라인을 구현합니다. Amazon OpenSearch Serverless와 직접 통합하여 벡터를 저장하고 유사도 검색 기능을 제공합니다."
    },
    "answer": "D",
    "explanation": "정답 D는 AWS Step Functions의 조율 기능으로 최소 운영 오버헤드를 제공합니다.\n\nStep Functions는 Amazon Comprehend(PII 감지)와 Amazon Bedrock(임베딩 생성) 단계를 순차적으로 조정하므로 복잡한 병렬 처리 로직을 작성할 필요가 없습니다.\n\nAmazon OpenSearch Serverless는 서버 관리 없이 벡터 저장 및 검색을 제공합니다.\n\n50GB 데이터를 4시간에 처리하려면 병렬 처리가 필요하지만, Step Functions는 Lambda 함수 배열 맵을 통해 이를 선언적으로 처리합니다.\n\nA는 Lambda 함수 개발과 동시성 튜닝이 필요하고, B는 SageMaker Processing 클러스터 설정이 필요하며, C는 EMR 클러스터 관리 오버헤드가 높습니다.\n\nStep Functions + OpenSearch Serverless는 관리형 서비스로서 운영 복잡도가 최소화됩니다.",
    "en_q": "A GenAI developer is building a Retrieval Augmented Generation (RAG)-based customer support application that uses Amazon Bedrock foundation models (FMs). The application needs to process 50 GB of historical customer conversations that are stored in an Amazon S3 bucket as JSON files. The application must use the processed data as its retrieval corpus. The application's data processing workflow must extract relevant data from customer support documents, remove customer personally identifiable information (PII), and generate embeddings for vector storage. The processing workflow must be cost-effective and must finish within 4 hours. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use AWS Lambda and Amazon Comprehend to process files in parallel, remove PII, and call Amazon Bedrock APIs to generate vectors. Configure Lambda concurrency limits and memory settings to optimize throughput.",
      "B": "Create an AWS Glue ETL job to run PII detection scripts on the data. Use Amazon SageMaker Processing to run the HuggingFaceProcessor to generate embeddings by using a pre-trained model. Store the embeddings in Amazon OpenSearch Service.",
      "C": "Deploy an Amazon EMR cluster that runs Apache Spark with user-defined functions (UDFs) that call Amazon Comprehend to detect PII. Use Amazon Bedrock APIs to generate vectors. Store outputs in Amazon Aurora PostgreSQL with the pgvector extension.",
      "D": "Implement a data processing pipeline that uses AWS Step Functions to orchestrate a workload that uses Amazon Comprehend to detect PII and Amazon Bedrock to generate embeddings. Directly integrate the workflow with Amazon OpenSearch Serverless to store vectors and provide similarity search capabilities."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384290-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 49,
    "question": "금융 서비스 회사가 프리미엄 고객과 표준 고객을 모두 서비스하는 생성형 AI(GenAI) 애플리케이션을 개발하고 있습니다. 애플리케이션은 Amazon API Gateway REST API 뒤의 AWS Lambda 함수를 사용하여 요청을 처리합니다. 회사는 각 사용자가 속한 고객 등급에 따라 AI 모델을 동적으로 전환해야 합니다. 회사는 코드 재배포 없이 새로운 기능에 대해 A/B 테스트를 수행하고 싶습니다. 회사는 변경을 적용하기 전에 온도, 최대 토큰 제한 같은 모델 매개변수를 검증해야 합니다. 어느 솔루션이 최소 운영 오버헤드로 요구사항을 충족합니까?",
    "options": {
      "A": "AWS Systems Manager Parameter Store에 각 구성에 대한 매개변수를 생성합니다. Lambda 함수를 사용하여 매개변수 업데이트를 폴링합니다. 구성이 변경될 때 재배포를 트리거하기 위해 Amazon EventBridge 이벤트를 사용합니다.",
      "B": "Amazon DynamoDB 테이블에 모델 구성을 저장합니다. 고객 등급에 따라 구성을 검색하는 접근 패턴을 최적화합니다. Lambda 함수를 구성하여 각 요청의 시작 부분에서 DynamoDB를 쿼리하여 사용할 모델을 결정합니다.",
      "C": "AWS AppConfig를 사용하여 모델 구성을 관리합니다. A/B 테스트를 수행하기 위해 기능 플래그를 사용합니다. 모델 매개변수에 대해 JSON 스키마 검증 규칙을 정의합니다. AWS AppConfig Agent를 사용하여 구성을 검색하도록 Lambda 함수를 구성합니다.",
      "D": "모델 구성을 저장하기 위해 Amazon ElastiCache(Redis OSS) 클러스터를 생성합니다. 짧은 TTL 값을 설정합니다. Lambda 함수에서 사용자 정의 검증 로직을 실행합니다. Amazon CloudWatch 메트릭을 사용하여 구성 사용량을 모니터링합니다."
    },
    "answer": "C",
    "explanation": "정답 C는 AWS AppConfig의 종합적인 구성 관리 기능을 활용합니다.\n\nAppConfig는 기능 플래그로 A/B 테스트와 카나리 배포를 지원하므로 코드 재배포 없이 모델 또는 매개변수를 전환할 수 있습니다.\n\nJSON 스키마 검증은 온도, 최대 토큰 같은 모델 매개변수가 유효한 범위 내에 있는지 배포 전에 확인합니다.\n\nAppConfig Agent는 Lambda에서 구성을 로컬 캐싱하여 빠른 액세스를 보장합니다.\n\nA는 Parameter Store 폴링과 EventBridge 트리거로 복잡하고, B는 각 요청마다 DynamoDB 쿼리로 지연시간이 증가하며, D는 캐시 일관성 관리와 검증 로직을 수동으로 구현해야 합니다.\n\nAppConfig는 고객 계층 기반 동적 라우팅과 A/B 테스트의 표준 솔루션입니다.",
    "en_q": "A financial services company is developing a generative AI (GenAI) application that serves both premium customers and standard customers. The application uses AWS Lambda functions behind an Amazon API Gateway REST API to process requests. The company needs to dynamically switch between AI models based on which customer tier each user belongs to. The company also wants to perform A/B testing for new features without redeploying code. The company needs to validate model parameters like temperature and maximum token limits before applying changes. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create an AWS Systems Manager Parameter Store parameters for each configuration. Use Lambda functions to poll for parameter updates. Use Amazon EventBridge events to trigger redeployments when configurations change.",
      "B": "Store model configurations in Amazon DynamoDB tables. Optimize access patterns to retrieve configurations according to customer tier. Configure Lambda functions to query DynamoDB at the beginning of each request to determine which model to use.",
      "C": "Use AWS AppConfig to manage model configurations. Use feature flags to perform A/B testing. Define JSON schema validation rules for model parameters. Configure Lambda functions to retrieve configurations by using the AWS AppConfig Agent.",
      "D": "Create an Amazon ElastiCache (Redis OSS) cluster to store model configurations. Set short TTL values. Run custom validation logic in Lambda functions. Use Amazon CloudWatch metrics to monitor configuration usage."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384273-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 50,
    "question": "회사가 Amazon Bedrock과 Anthropic Claude 3 Haiku를 사용하여 AI 어시스턴트를 개발하고 있습니다. AI 어시스턴트는 일반적으로 매시간 10,000개의 요청을 처리하지만 피크 사용 기간에는 매시간 30,000개의 요청까지 급증합니다. AI 어시스턴트는 여러 AWS 지역에서 작동하면서 2초 이내에 응답해야 합니다. 회사는 피크 사용 기간에 AI 어시스턴트가 처리량 병목현상으로 인해 지연시간 증가 및 간헐적 요청 시간 초과를 경험하는 것을 관찰합니다. 회사는 성능 문제를 해결해야 합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "단일 지역에서 프로비저닝된 처리량과 충분한 모델 유닛(MU)을 구매합니다. 실패한 요청을 지수 백오프로 다시 시도하도록 애플리케이션을 구성합니다.",
      "B": "토큰 배칭을 구현하여 API 오버헤드를 줄입니다. 교차 지역 추론 프로필을 사용하여 사용 가능한 지역 전체에 트래픽을 자동으로 분산합니다.",
      "C": "각 지역에서 AWS Lambda 함수를 자동 확장하도록 설정합니다. 클라이언트 측 라운드로빈 요청 분산을 구현합니다. 백업으로 1개의 모델 유닛(MU) 프로비저닝된 처리량을 구매합니다.",
      "D": "모든 요청에 대해 Amazon S3 버킷을 사용하여 배치 추론을 구현합니다. 여러 지역에서 Amazon SQS를 사용하여 비동기 검색 프로세스를 설정합니다."
    },
    "answer": "B",
    "explanation": "정답 B는 Amazon Bedrock의 교차 지역 추론 프로필을 활용하여 글로벌 처리량 병목을 해결합니다.\n\n교차 지역 추론 프로필은 여러 AWS 지역의 가용 용량에 따라 요청을 자동으로 분산하므로 단일 지역의 용량 제약을 극복합니다.\n\n토큰 배칭은 여러 요청을 함께 처리하여 모델 호출 오버헤드를 감소시키고 처리량을 증가시킵니다.\n\n이 조합으로 피크 트래픽(30,000 req/hr)을 안정적으로 처리하면서 2초 응답 시간을 유지할 수 있습니다.\n\nA는 단일 지역 프로비저닝으로 확장성이 제한되고, C는 Lambda 오토 스케일링이 추론 용량이 아닌 구성 계층만 처리하며, D는 배치 처리로 실시간 응답 요구사항을 충족할 수 없습니다.\n\n교차 지역 추론은 Bedrock의 핵심 확장성 기능입니다.",
    "en_q": "A company is using Amazon Bedrock and Anthropic Claude 3 Haiku to develop an AI assistant. The AI assistant normally processes 10,000 requests each hour but experiences surges of up 30,000 requests each hour during peak usage periods. The AI assistant must respond within 2 seconds while operating across multiple AWS Regions. The company observes that during peak usage periods, the AI assistant experiences throughput bottlenecks that cause increased latency and occasional request timeouts. The company must resolve the performance issues. Which solution will meet this requirement?",
    "en_opts": {
      "A": "Purchase provisioned throughput and sufficient model units (MUs) in a single Region. Configure the application to retry failed requests with exponential backoff.",
      "B": "Implement token batching to reduce API overhead. Use cross-Region inference profiles to automatically distribute traffic across available Regions.",
      "C": "Set up auto scaling AWS Lambda functions in each Region. Implement client-side round-robin request distribution. Purchase one model unit (MU) of provisioned throughput as a backup.",
      "D": "Implement batch inference for all requests by using Amazon S3 buckets across multiple Regions. Use Amazon SQS to set up an asynchronous retrieval process."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384250-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 52,
    "question": "회사가 AWS Lambda 함수를 사용하여 AI 에이전트 솔루션을 구축하고 있습니다. GenAI 개발자는 사용자 정보에 액세스하는 Model Context Protocol(MCP) 서버를 설정해야 합니다. GenAI 개발자는 또한 새로운 MCP 서버를 사용하도록 AI 에이전트를 구성해야 합니다. GenAI 개발자는 권한이 있는 사용자만 MCP 서버에 액세스할 수 있도록 보장해야 합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "Lambda 함수를 사용하여 MCP 서버를 호스트합니다. MCP 서버를 호스트하는 Lambda 함수를 호출할 권한을 AI 에이전트 Lambda 함수에 부여합니다. AI 에이전트의 MCP 클라이언트를 구성하여 MCP 서버를 비동기적으로 호출하도록 합니다.",
      "B": "Lambda 함수를 사용하여 MCP 서버를 호스트합니다. MCP 서버를 호스트하는 Lambda 함수를 호출할 권한을 AI 에이전트 Lambda 함수에 부여합니다. AI 에이전트를 구성하여 MCP 서버와 함께 STDIO 전송을 사용하도록 합니다.",
      "C": "Lambda 함수를 사용하여 MCP 서버를 호스트합니다. Lambda 함수에 대한 요청을 프록시하는 Amazon API Gateway HTTP API를 생성합니다. AI 에이전트 솔루션을 구성하여 HTTP API를 통해 요청을 수행하기 위해 Streamable HTTP 전송을 사용하도록 합니다. Amazon Cognito를 사용하여 OAuth 2.1을 적용합니다.",
      "D": "Lambda 레이어를 사용하여 MCP 서버를 호스트합니다. Lambda 레이어를 AI 에이전트 Lambda 함수에 추가합니다. AI 에이전트 솔루션을 구성하여 STDIO 전송을 사용하여 MCP 서버로 요청을 보내도록 합니다. AI 에이전트의 MCP 구성에서 Lambda 레이어 ARN을 명령으로 지정합니다. 사용자 자격증명을 환경 변수로 지정합니다."
    },
    "answer": "C",
    "explanation": "정답 C는 Amazon API Gateway와 Amazon Cognito를 통합하여 MCP 서버에 대한 보안 액세스를 제공합니다.\n\nLambda 함수는 MCP 서버 로직을 호스트하고, API Gateway는 이를 HTTP 엔드포인트로 노출합니다.\n\nAmazon Cognito는 OAuth 2.1을 구현하여 인증 및 권한 부여를 제어합니다.\n\nStreamable HTTP 전송은 MCP 클라이언트와 서버 간 양방향 스트리밍 통신을 지원합니다.\n\n따라서 권한이 있는 사용자만 토큰을 통해 MCP 서버에 액세스할 수 있습니다.\n\nA는 권한 제어 메커니즘이 없고, B는 STDIO 전송으로 원격 인증이 불가능하며, D는 Lambda 레이어가 배포 단위이므로 런타임 인증을 구현할 수 없습니다.\n\nAPI Gateway + Cognito는 서비스 간 보안 통신의 표준 패턴입니다.",
    "en_q": "A company uses AWS Lambda functions to build an AI agent solution. A GenAI developer must set up a Model Context Protocol (MCP) server that accesses user information. The GenAI developer must also configure the AI agent to use the new MCP server. The GenAI developer must ensure that only authorized users can access the MCP server. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use a Lambda function to host the MCP server. Grant the AI agent Lambda functions permission to invoke the Lambda function that hosts the MCP server. Configure the AI agent's MCP client to invoke the MCP server asynchronously.",
      "B": "Use a Lambda function to host the MCP server. Grant the AI agent Lambda functions permission to invoke the Lambda function that hosts the MCP server. Configure the AI agent to use the STDIO transport with the MCP server.",
      "C": "Use a Lambda function to host the MCP server. Create an Amazon API Gateway HTTP API that proxies requests to the Lambda function. Configure the AI agent solution to use the Streamable HTTP transport to make requests through the HTTP API. Use Amazon Cognito to enforce OAuth 2.1.",
      "D": "Use a Lambda layer to host the MCP server. Add the Lambda layer to the AI agent Lambda functions. Configure the agentic AI solution to use the STDIO transport to send requests to the MCP server. In the AI agent's MCP configuration, specify the Lambda layer ARN as the command. Specify the user credentials as environment variables."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384285-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 53,
    "question": "회사가 고객을 위한 연간 보상 프로그램을 만들고 싶어합니다. 고객이 받는 보상은 주문한 항목의 카테고리와 고객의 구매 이력 같은 다양한 매개변수에 따라 달라집니다. 회사는 온라인 카탈로그 브라우징 중에 고객을 지원하기 위해 세 개의 Amazon Bedrock 에이전트를 사용하는 생성형 AI(GenAI) 솔루션이 필요합니다. 에이전트는 지식 기반과 액션 그룹을 사용하여 검색, 추천, 주문 모듈을 처리해야 합니다. 모듈은 순차적으로 작동해야 합니다. AWS Lambda 함수는 각 추천 항목에 대해 예상 보상을 계산해야 합니다. 솔루션은 서비스 중단 중 우아한 성능 저하(graceful degradation)를 제공해야 합니다. 어느 솔루션이 최고 운영 효율로 요구사항을 충족합니까?",
    "options": {
      "A": "각 에이전트 뒤에 Amazon API Gateway REST API를 정의합니다. 에이전트와 보상 Lambda 함수에 대한 호출을 조율하기 위해 두 번째 Lambda 함수를 생성합니다. 재시도/폴백 메커니즘으로 두 번째 Lambda 함수를 구성합니다.",
      "B": "에이전트와 보상 Lambda 함수를 실행하는 네 개의 작업이 있는 AWS Step Functions 상태 머신을 생성합니다. 각 작업 단계에 대해 재시도 및 catch 브랜치를 설정합니다.",
      "C": "각 에이전트를 재시도/폴백 메커니즘으로 구성합니다. 에이전트와 보상 Lambda 함수에 대한 호출을 조율하기 위해 두 번째 Lambda 함수를 생성합니다. 두 번째 Lambda 함수 뒤에 Amazon API Gateway REST API를 정의합니다.",
      "D": "에이전트와 보상 Lambda 함수에 대한 호출을 조율하기 위해 두 번째 Lambda 함수를 생성합니다. 두 번째 Lambda 함수를 실행하는 하나의 작업이 있는 AWS Step Functions 상태 머신을 생성합니다. 작업 단계에 대해 재시도 및 catch 브랜치를 설정합니다."
    },
    "answer": "B",
    "explanation": "정답 B는 AWS Step Functions를 사용하여 복잡한 멀티 에이전트 워크플로우를 선언적으로 관리합니다.\n\n검색, 추천, 주문 에이전트와 보상 계산 Lambda 함수를 4개의 순차적 작업으로 정의하면, 각 단계의 실패를 독립적으로 처리할 수 있습니다.\n\n각 작업의 재시도 및 catch 브랜치는 일시적 오류 복구와 우아한 성능 저하를 제공합니다.\n\nStep Functions는 상태 추적, 타임아웃, 장기 실행 워크플로우를 기본 지원합니다.\n\nA는 API Gateway와 Lambda로 기본적인 호출만 가능하고 에러 처리 복잡도가 높으며, C는 각 에이전트의 재시도 로직을 중복으로 관리해야 하고, D는 하나의 Lambda 함수가 모든 조율을 담당하여 오류 처리 세분화가 어렵습니다.\n\nStep Functions는 멀티 에이전트 오케스트레이션의 표준 솔루션입니다.",
    "en_q": "A company wants to create an annual rewards program for its customers. The rewards that customers earn vary based on different parameters such as the categories of the items ordered and the customers' purchase history. The company needs a generative AI (GenAI) solution that uses three Amazon Bedrock agents to help customers during online catalog browsing. The agents must use knowledge bases and action groups to handle the search, recommendation, and order modules. The modules must operate sequentially. An AWS Lambda function must calculate estimated rewards for each recommended item. The solution must provide graceful degradation during service disruptions. Which solution will meet these requirements with the MOST operational efficiency?",
    "en_opts": {
      "A": "Define an Amazon API Gateway REST API behind each agent. Create a second Lambda function to orchestrate the calls to the agents and the rewards Lambda function. Configure the second Lambda function with a retry/fallback mechanism.",
      "B": "Create an AWS Step Functions state machine with four tasks that run the agents and the rewards Lambda function. Set up retry and catch branches for each of the task steps.",
      "C": "Configure each agent with a separate retry/fallback mechanism. Create a second Lambda function to orchestrate the calls to the agents and the rewards Lambda function. Define an Amazon API Gateway REST API behind the second Lambda function.",
      "D": "Create a second Lambda function to orchestrate the calls to the agents and the rewards Lambda function. Create an AWS Step Functions state machine with one task that runs the second Lambda function. Set up retry and catch branches for the task step."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384270-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 54,
    "question": "회사가 고객 대면 통신을 전송하기 전에 검토하는 워크플로우를 생성하고 있습니다. 회사는 사전 정의된 메시지 템플릿을 사용하여 통신을 생성하고 Amazon S3 버킷에 저장합니다. 워크플로우는 템플릿에서 특정 부분을 캡처하여 Amazon Bedrock 모델로 전송해야 합니다. 워크플로우는 모델 응답을 원본 S3 버킷으로 저장해야 합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "Amazon Bedrock Flows에서 플로우를 생성합니다. 흐름의 시작과 끝에 S3 액션 노드를 구성하여 통신과 모델 응답을 검색하고 저장합니다. 흐름의 중간에 각 통신을 파싱하는 표현식을 구성합니다. 파싱된 입력을 모델로 검토하기 위해 에이전트 단계를 구성합니다.",
      "B": "AWS Step Functions Express 워크플로우 상태 머신을 생성합니다. Amazon S3 통합 GetObject 단계를 사용하여 원본 통신을 검색합니다. 내장 함수 Pass 단계를 사용하여 통신을 파싱하고 결과를 Amazon Bedrock InvokeModel 단계로 전달합니다. Amazon S3 통합 PutObject 단계를 구성하여 모델 응답을 S3 버킷으로 저장합니다.",
      "C": "액션 그룹이 있는 Amazon Bedrock 에이전트를 생성합니다. 에이전트가 통신을 어떻게 파싱해야 하는지 정의하는 지침을 구성합니다. S3 버킷에서 통신을 검색하고, Amazon Bedrock 모델을 호출하며, 모델 응답을 S3 버킷으로 저장하도록 액션 그룹을 구성합니다.",
      "D": "단일 액션 그룹이 있는 Amazon Bedrock 에이전트를 생성합니다. S3 버킷에서 통신을 검색하고, 통신을 파싱하며 Amazon Bedrock 모델을 호출하고, 모델 응답을 S3 버킷으로 저장하도록 액션 그룹에 세 개의 AWS Lambda 함수를 구성합니다."
    },
    "answer": "B",
    "explanation": "정답 B는 AWS Step Functions Express 워크플로우를 사용하여 S3 검색, 파싱, 모델 호출, 응답 저장을 순차적으로 정의합니다.\n\nStep Functions는 GetObject와 PutObject의 native S3 통합을 제공하므로 Lambda 함수 작성 없이 서비스를 직접 호출할 수 있습니다.\n\nPass 단계의 내장 함수로 JSON 파싱을 수행합니다.\n\nExpress 워크플로우는 단기 실행(최대 1시간) 사용 사례에 최적화되었으며, 빠른 응답과 낮은 비용을 제공합니다.\n\nA는 Amazon Bedrock Flows가 아직 완성도가 낮고 파싱 표현식과 에이전트의 조합이 복잡하며, C와 D는 에이전트의 액션 그룹으로 외부 시스템 호출과 파싱 로직을 구현해야 해서 비효율적입니다.\n\nStep Functions 네이티브 통합은 단순하고 신뢰성 있는 솔루션입니다.",
    "en_q": "A company is creating a workflow to review customer-facing communications before the company sends the communications. The company uses a pre-defined message template to generate the communications and stores the communications in an Amazon S3 bucket. The workflow needs to capture a specific portion from the template and send it to an Amazon Bedrock model. The workflow must store model responses back to the original S3 bucket. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a flow in Amazon Bedrock Flows. Configure S3 action nodes at the beginning and end of the flow to retrieve and store the communications and the model responses. In the middle of the flow, configure an expression to parse each communication. Configure an agent step to send the parsed input to the model for review.",
      "B": "Create an AWS Step Functions Express workflow state machine. Use an Amazon S3 integration GetObject step to retrieve the original communications. Use an intrinsic function Pass step to parse the communications and to pass the results to an Amazon Bedrock InvokeModel step. Configure an Amazon S3 integration PutObject step to store the model responses back to the S3 bucket.",
      "C": "Create an Amazon Bedrock agent that has an action group. Configure instructions to define how the agent should parse the communications. Configure the action group to retrieve the communications from the S3 bucket, invoke the Amazon Bedrock model, and store the model responses back to the S3 bucket.",
      "D": "Create an Amazon Bedrock agent that has a single action group. Configure three AWS Lambda functions in the action group. Configure the functions to retrieve the communications from the S3 bucket, parse the communications and invoke the Amazon Bedrock model, and store the model responses back to the S3 bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384282-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 55,
    "question": "금융기술 회사가 Amazon Bedrock을 사용하여 회사의 고객 서비스 AI 어시스턴트에 대한 평가 시스템을 구축하고 있습니다. AI 어시스턴트는 사실적으로 정확하고, 금융 규제를 준수하며, 대화 방식으로도 적절한 금융 추천을 제공해야 합니다. 회사는 대규모 자동 품질 평가와 중요한 상호작용에 대한 대상 인적 검토를 결합해야 합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "금융 전문가가 정확성, 준수, 대화형 품질에 대해 모든 응답을 수동으로 점수화합니다. Amazon SageMaker 노트북을 사용하여 결과를 분석하고 개선 영역을 식별합니다.",
      "B": "판사 모델로 Anthropic Claude Sonnet을 사용하여 Amazon Bedrock 평가를 구성하여 응답 정확성과 적절성을 평가합니다. 금융 정책 준수를 확인하기 위해 사용자 정의 Amazon Bedrock guardrails를 구성합니다. 플래그된 중요한 상호작용에 대해 Amazon Augmented AI(Amazon A2I) 인적 검토를 추가합니다.",
      "C": "고객 서비스 상호작용을 관리하기 위해 Amazon Lex 봇을 생성합니다. 정적 준수 데이터베이스에 대해 응답을 확인하도록 AWS Lambda 함수를 구성합니다. Lambda 함수를 호출하는 봇의 인텐트를 구성합니다. 최종 사용자 검토를 수집하기 위해 추가 인텐트를 추가합니다.",
      "D": "Amazon CloudWatch에서 AI 어시스턴트의 응답 패턴을 모니터링하도록 구성합니다. 잠재적 준수 위반에 대해 CloudWatch 알람을 구성합니다. 플래그된 상호작용을 검토할 인적 평가자 팀을 구성합니다."
    },
    "answer": "B",
    "explanation": "정답 B는 Amazon Bedrock의 평가 및 guardrails 기능을 활용하여 자동화와 인적 검토를 효율적으로 결합합니다.\n\nAmazon Bedrock 평가는 Anthropic Claude Sonnet을 판사 모델로 사용하여 응답의 정확성, 관련성, 대화형 품질을 자동으로 점수화합니다.\n\n사용자 정의 guardrails는 금융 규제 준수 규칙을 정의하고 위반을 자동으로 감지합니다.\n\nAmazon A2I는 플래그된 중요한 상호작용(정확도 낮음, 준수 문제 등)을 금융 전문가에게 라우팅하여 비용 효율적인 검토를 제공합니다.\n\nA는 완전 수동으로 확장성이 없고, C는 Lex와 정적 데이터베이스로 금융 규제 준수 체계를 구현할 수 없으며, D는 CloudWatch 알람으로 지표 기반 모니터링만 가능하고 응답 품질을 평가하지 않습니다.\n\nAmazon Bedrock 평가는 GenAI 애플리케이션의 표준 품질 평가 솔루션입니다.",
    "en_q": "A financial technology company is using Amazon Bedrock to build an assessment system for the company's customer service AI assistant. The AI assistant must provide financial recommendations that are factually accurate, compliant with financial regulations, and conversationally appropriate. The company needs to combine automated quality evaluations at scale with targeted human reviews of critical interactions. What solution will meet these requirements?",
    "en_opts": {
      "A": "Configure a pipeline in which financial experts manually score all responses for accuracy, compliance, and conversational quality. Use Amazon SageMaker notebooks to analyze results to identify improvement areas.",
      "B": "Configure Amazon Bedrock evaluations that use Anthropic Claude Sonnet as a judge model to assess response accuracy and appropriateness. Configure custom Amazon Bedrock guardrails to check responses for compliance with financial policies. Add Amazon Augmented AI (Amazon A2I) human reviews for flagged critical interactions.",
      "C": "Create an Amazon Lex bot to manage the customer service interactions. Configure AWS Lambda functions to check responses against a static compliance database. Configure intents in the bot that call the Lambda functions to check the responses. Add an additional intent to collect end-user reviews.",
      "D": "Configure Amazon CloudWatch to monitor response patterns from the AI assistant. Configure CloudWatch alerts for potential compliance violations. Establish a team of human evaluators to review flagged interactions."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384267-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 56,
    "question": "의료 회사가 Amazon Bedrock을 사용하여 임상 문의, 보험 확인, 예약 스케줄, 보험 청구를 처리하는 별도의 부서에 대응하기 위한 실시간 환자 관리 AI 어시스턴트를 개발하고 있습니다. 회사는 멀티 에이전트 아키텍처를 사용하기를 원합니다. 회사는 AI 어시스턴트가 확장 가능하고 환자를 위한 새로운 기능을 온보딩할 수 있도록 보장해야 합니다. AI 어시스턴트는 수천 개의 병렬 환자 상호작용을 처리할 수 있어야 합니다. 회사는 환자가 쿼리에 대해 적절한 도메인 특화 응답을 받도록 보장해야 합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "별도의 지식 기반을 사용하여 각 에이전트의 데이터를 격리합니다. IAM 필터링을 사용하여 각 지식 기반에 대한 액세스를 제어합니다. 감독 에이전트를 배포하여 환자 문의에 대해 자연어 의도 분류를 수행합니다. 감독 에이전트를 구성하여 쿼리를 전문화된 협력 에이전트로 라우팅합니다. 각 전문화된 협력 에이전트를 에이전트의 부서별 지식 기반으로 검색 증강 생성(RAG)을 사용하도록 구성합니다.",
      "B": "각 부서에 대해 별도의 감독 에이전트를 생성합니다. 각 부서 내 각 특화 도메인에 대해 자연어 의도 분류를 수행하도록 개별 협력 에이전트를 구성합니다. 각 협력 에이전트를 부서별 지식 기반하고만 통합합니다. 감독 에이전트 간의 수동 인계 프로세스를 구현합니다.",
      "C": "각 부서에 대해 별도의 지식 기반에서 데이터를 격리합니다. IAM 필터링을 사용하여 각 지식 기반에 대한 액세스를 제어합니다. 단일 범용 에이전트를 배포합니다. 범용 에이전트 내에서 특정 부서 기능을 수행하도록 여러 액션 그룹을 구성합니다. 범용 에이전트 지침 내에서 규칙 기반 라우팅 로직을 구현합니다.",
      "D": "각 부서에 대해 병렬로 실행되는 여러 개의 독립적 감독 에이전트를 구현합니다. 각 감독 에이전트에 대해 여러 협력 에이전트를 구성합니다. 모든 에이전트를 동일한 지식 기반과 통합합니다. 외부 라우팅 로직을 사용하여 여러 감독 에이전트의 응답을 병합합니다."
    },
    "answer": "A",
    "explanation": "정답 A는 감독-협력 에이전트 패턴으로 확장성과 도메인 특화를 달성합니다.\n\n감독 에이전트는 환자의 쿼리를 자연어 분류로 임상, 보험, 예약, 청구 카테고리로 판단합니다.\n\n각 협력 에이전트는 자신의 부서별 지식 기반과 RAG를 통해 전문화된 응답을 제공합니다.\n\n별도의 지식 기반과 IAM 필터링으로 데이터 격리와 접근 제어를 보장합니다.\n\n이 아키텍처는 새로운 부서 추가 시 새 협력 에이전트와 지식 기반만 추가하면 되므로 확장이 용이합니다.\n\nB는 부서마다 감독 에이전트를 복제하여 비효율적이고, C는 단일 범용 에이전트로 도메인 특화가 제한되며, D는 모든 에이전트가 동일 지식 기반을 사용하므로 데이터 격리와 특화가 불가능합니다.\n\n계층적 멀티 에이전트 아키텍처는 의료 같은 도메인별 시스템의 표준 패턴입니다.",
    "en_q": "A healthcare company is using Amazon Bedrock to develop a real-time patient care AI assistant to respond to queries for separate departments that handle clinical inquiries, insurance verification, appointment scheduling, and insurance claims. The company wants to use a multi-agent architecture. The company must ensure that the AI assistant is scalable and can onboard new features for patients. The AI assistant must be able to handle thousands of parallel patient interactions. The company must ensure that patients receive appropriate domain-specific responses to queries. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Isolate data for each agent by using separate knowledge bases. Use IAM filtering to control access to each knowledge base. Deploy a supervisor agent to perform natural language intent classification on patient inquiries. Configure the supervisor agent to route queries to specialized collaborator agents to respond to department-specific queries. Configure each specialized collaborator agent to use Retrieval Augmented Generation (RAG) with the agent's department-specific knowledge base.",
      "B": "Create a separate supervisor agent for each department. Configure individual collaborator agents to perform natural language intent classification for each specialty domain within each department. Integrate each collaborator agent with department-specific knowledge bases only. Implement manual handoff processes between the supervisor agents.",
      "C": "Isolate data for each department in separate knowledge bases. Use IAM filtering to control access to each knowledge base. Deploy a single general-purpose agent. Configure multiple action groups within the general-purpose agent to perform specific department functions. Implement rule-based routing logic within the general-purpose agent instructions.",
      "D": "Implement multiple independent supervisor agents that run in parallel to respond to patient inquiries for each department. Configure multiple collaborator agents for each supervisor agent. Integrate all agents with the same knowledge base. Use external routing logic to merge responses from multiple supervisor agents."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384286-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 57,
    "question": "회사가 AI 어시스턴트 애플리케이션을 사용하여 회사 웹사이트 콘텐츠를 요약하고 고객에게 정보를 제공합니다. 회사는 Amazon Bedrock을 사용하여 애플리케이션에 기초 모델(FM)에 대한 액세스 권한을 부여할 계획입니다. 회사는 AI 어시스턴트 애플리케이션을 개발 환경과 프로덕션 환경에 배포해야 합니다. 솔루션은 환경을 FM과 통합해야 합니다. 회사는 각 환경에서 다양한 FM의 효과를 테스트하기를 원합니다. 솔루션은 제품 소유자가 각 환경에서 테스트 목적으로 FM 간에 쉽게 전환할 수 있는 능력을 제공해야 합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "하나의 AWS CDK 애플리케이션을 생성합니다. AWS CodePipeline에서 여러 파이프라인을 생성합니다. 각 FM에 대해 고유한 설정을 가지도록 각 파이프라인을 구성합니다. aws_bedrock.ProvisionedModel.fromProvisionedModelArn() 메서드를 사용하여 Amazon Bedrock FM을 호출하도록 애플리케이션을 구성합니다.",
      "B": "각 환경에 대해 별도의 AWS CDK 애플리케이션을 생성합니다. aws_bedrock.FoundationModel.fromFoundationModelId() 메서드를 사용하여 Amazon Bedrock FM을 호출하도록 애플리케이션을 구성합니다. 각 환경에 대해 AWS CodePipeline에서 별도의 파이프라인을 생성합니다.",
      "C": "하나의 AWS CDK 애플리케이션을 생성합니다. aws_bedrock.FoundationModel.fromFoundationModelId() 메서드를 사용하여 Amazon Bedrock FM을 호출하도록 애플리케이션을 구성합니다. 각 환경에 대한 배포 단계가 있는 AWS CodePipeline에서 파이프라인을 생성합니다. AWS CodeBuild 배포 액션을 사용하여 각 환경에 배포합니다.",
      "D": "프로덕션 환경에 대한 하나의 AWS CDK 애플리케이션을 생성합니다. aws_bedrock.ProvisionedModel.fromProvisionedModelArn() 메서드를 사용하여 Amazon Bedrock FM을 호출하도록 애플리케이션을 구성합니다. AWS CodePipeline에서 파이프라인을 생성합니다. AWS CodeBuild 배포 액션을 사용하여 프로덕션 환경에 배포합니다. 개발 환경의 경우 프로덕션 애플리케이션 코드를 참고하여 수동으로 리소스를 다시 생성합니다."
    },
    "answer": "C",
    "explanation": "정답 C는 단일 CDK 애플리케이션으로 개발/프로덕션 환경을 관리하면서 FM 선택 유연성을 제공합니다.\n\nfromFoundationModelId() 메서드는 FM을 하드코드하지 않고 런타임에 FM ID를 지정할 수 있으므로, CodePipeline의 배포 단계별로 다른 FM을 구성할 수 있습니다.\n\n예를 들어 개발 환경에서는 Claude 3 Haiku, 프로덕션에서는 Claude 3 Sonnet을 테스트할 수 있습니다.\n\n제품 소유자는 코드 재배포 없이 환경 변수 또는 파라미터로 FM을 전환할 수 있습니다.\n\nA는 여러 파이프라인으로 관리 복잡도가 높고, B는 각 환경별 CDK 애플리케이션 중복으로 유지보수가 어려우며, D는 개발 환경을 수동 관리해야 합니다.\n\n단일 CDK + 환경별 배포 단계는 IaC의 표준 패턴입니다.",
    "en_q": "A company uses an AI assistant application to summarize the company's website content and provide information to customers. The company plans to use Amazon Bedrock to give the application access to a foundation model (FM). The company needs to deploy the AI assistant application to a development environment and a production environment. The solution must integrate the environments with the FM. The company wants to test the effectiveness of various FMs in each environment. The solution must provide product owners with the ability to easily switch between FMs for testing purposes in each environment. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create one AWS CDK application. Create multiple pipelines in AWS CodePipeline. Configure each pipeline to have its own settings for each FM. Configure the application to invoke the Amazon Bedrock FMs by using the aws_bedrock.ProvisionedModel.fromProvisionedModelArn() method.",
      "B": "Create a separate AWS CDK application for each environment. Configure the applications to invoke the Amazon Bedrock FMs by using the aws_bedrock.FoundationModel.fromFoundationModelId() method. Create a separate pipeline in AWS CodePipeline for each environment.",
      "C": "Create one AWS CDK application. Configure the application to invoke the Amazon Bedrock FMs by using the aws_bedrock.FoundationModel.fromFoundationModelId() method. Create a pipeline in AWS CodePipeline pipeline that has a deployment stage for each environment that uses AWS CodeBuild deploy actions.",
      "D": "Create one AWS CDK application for the production environment. Configure the application to invoke the Amazon Bedrock FMs by using the aws_bedrock.ProvisionedModel.fromProvisionedModelArn() method. Create a pipeline in AWS CodePipeline. Configure the pipeline to deploy to the production environment by using an AWS CodeBuild deploy action. For the development environment, manually recreate the resources by referring to the production application code."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384291-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 58,
    "question": "호텔 회사가 Amazon Bedrock Knowledge Bases를 사용하여 직원에게 객실 가용성 정보와 호텔별 세부 정보를 제공함으로써 레거시 Java 기반 부동산 관리 시스템(PMS)에 AI 기능을 추가하기를 원합니다. 솔루션은 회사가 관리하는 각 호텔에 대해 별도의 액세스 제어를 유지해야 합니다. 솔루션은 거의 실시간으로 객실 가용성 정보를 제공해야 하고 피크 사용 기간 동안 일관된 성능을 유지해야 합니다. 어느 솔루션이 요구사항을 충족합니까?",
    "options": {
      "A": "모든 호텔의 결합된 데이터를 포함하는 단일 Amazon Bedrock 지식 기반을 배포합니다. AWS Lambda 함수를 구성하여 각 호텔의 PMS 데이터베이스에서 직접 API 연결을 통해 데이터를 동기화합니다. 호텔별 필터를 사용하여 AWS CloudTrail 로깅을 구현하여 각 호텔 데이터에 대한 액세스 로그를 감사합니다.",
      "B": "각 호텔에 대한 Amazon EventBridge 규칙을 생성하여 각 호텔의 PMS 데이터베이스 변경으로 호출합니다. 관리 AWS 계정에서 중앙화된 Amazon Bedrock 지식 기반으로 업데이트를 보내도록 규칙을 구성합니다. 호텔별 액세스 제어를 강제하기 위해 리소스 기반 정책을 구성합니다.",
      "C": "멀티 계정 구조에서 각 호텔에 대해 하나의 Amazon Bedrock 지식 기반을 구현합니다. 실시간 객실 가용성 정보를 제공하기 위해 직접 데이터 수집을 사용합니다. 덜 중요한 정보에 대해 정기적인 동기화를 예약합니다.",
      "D": "여러 지식 기반을 사용하는 중앙화된 Amazon Bedrock 에이전트를 구축합니다. AWS IAM Identity Center와 호텔별 권한 세트를 구현하여 호텔 직원 데이터 액세스를 제어합니다."
    },
    "answer": "C",
    "explanation": "정답 C는 멀티 계정 구조로 호텔별 데이터 격리와 액세스 제어를 달성하면서 성능과 실시간성을 보장합니다.\n\n각 호텔마다 별도의 Amazon Bedrock 지식 기반을 AWS 계정에 배포하면, AWS IAM을 통해 호텔별 액세스 제어가 자동으로 이루어집니다.\n\n직접 데이터 수집(direct data ingestion)은 PMS 데이터베이스의 변경을 감지하여 지식 기반을 거의 실시간으로 업데이트합니다.\n\n덜 중요한 정보(예: 호텔 규칙, 서비스)는 정기적 동기화로 비용을 절감합니다.\n\nA는 모든 호텔 데이터를 단일 지식 기반에 저장하므로 데이터 격리가 불완전하고, B는 중앙화로 인해 각 호텔의 변경 피드백이 지연될 수 있으며, D는 단일 에이전트와 다중 지식 기반으로 확장성이 제한됩니다.\n\n멀티 계정 + 직접 수집은 엔터프라이즈 멀티테넌트 시스템의 표준 패턴입니다.",
    "en_q": "A hotel company wants to enhance a legacy Java-based property management system (PMS) by adding AI capabilities. The company wants to use Amazon Bedrock Knowledge Bases to provide staff with room availability information and hotel-specific details. The solution must maintain separate access controls for each hotel that the company manages. The solution must provide room availability information in near real time and must maintain consistent performance during peak usage periods. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy a single Amazon Bedrock knowledge base that contains combined data for all hotels. Configure AWS Lambda functions to synchronize data from each hotel's PMS database through direct API connections. Implement AWS CloudTrail logging with hotel-specific filters to audit access logs for each hotel's data.",
      "B": "Create an Amazon EventBridge rule for each hotel that is invoked by changes to the PMS database for each hotel. Configure the rule to send updates to a centralized Amazon Bedrock knowledge base in a management AWS account. Configure resource-based policies to enforce hotel-specific access controls for hotel staff.",
      "C": "Implement one Amazon Bedrock knowledge base for each hotel in a multi-account structure. Use direct data ingestion to provide real-time room availability information. Schedule regular synchronization for less critical information.",
      "D": "Build a centralized Amazon Bedrock agent that uses multiple knowledge bases. Implement AWS IAM Identity Center with hotel-specific permission sets to control hotel staff data access."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384277-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 59,
    "question": "회사가 AWS Lambda를 사용하여 서버리스 추론 API를 구현하고 있습니다. 이 API는 Amazon Bedrock에서 호스팅되는 여러 AI 모델을 동적으로 호출합니다. 회사는 Lambda 코드를 수정하거나 재배포하지 않고 실시간으로 모델 제공자 간에 전환할 수 있는 솔루션을 설계해야 합니다. 설계에는 안전한 구성 변경 롤아웃, 검증 및 롤백 기능이 포함되어야 합니다. 어느 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "AWS Systems Manager Parameter Store에 활성 모델 제공자를 저장합니다. 런타임에 매개변수를 읽도록 Lambda 함수를 구성합니다.",
      "B": "AWS AppConfig에 활성 모델 제공자를 저장합니다. 런타임에 구성을 읽도록 Lambda 함수를 구성합니다.",
      "C": "Amazon API Gateway REST API를 구성하여 요청을 별도의 Lambda 함수로 라우팅합니다. 각 Lambda 함수를 특정 모델 제공자로 하드코딩합니다.",
      "D": "활성 모델 제공자를 Amazon S3에서 호스팅되는 JSON 파일에 저장합니다. AWS AppConfig를 사용하여 S3 파일을 호스팅된 구성 소스로 참조합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ AppConfig — 구성 버전 관리, 점진적 롤아웃, 유효성 검사 및 롤백 지원\n▸ Parameter Store — 정적 값 저장만, 배포 전략 미지원\n\n【정답 포인트】\n▸ AppConfig는 안전한 배포 전략 제공\n▸ 유효성 검사기로 잘못된 구성 배포 방지\n▸ 모니터링 기반 자동 롤백 지원\n▸ Lambda가 런타임에 최신 구성값 동적 읽음\n\n【오답 체크】\n(A) Parameter Store는 버전 관리와 배포 전략 미지원\n(C) API Gateway 하드코딩은 구성 변경 시 코드 수정 필요\n(D) S3 + AppConfig는 불필요하게 복잡\n\n【시험 포인트】\n동적 구성 전환: AppConfig(권장) vs Parameter Store(제한적)",
    "en_q": "A company is implementing a serverless inference API by using AWS Lambda. The API will dynamically invoke multiple AI models hosted on Amazon Bedrock. The company needs to design a solution that can switch between model providers without modifying or redeploying Lambda code in real time. The design must include safe rollout of configuration changes and validation and rollback capabilities. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Store the active model provider in AWS Systems Manager Parameter Store. Configure a Lambda function to read the parameter at runtime to determine which model to invoke.",
      "B": "Store the active model provider in AWS AppConfig. Configure a Lambda function to read the configuration at runtime to determine which model to invoke.",
      "C": "Configure an Amazon API Gateway REST API to route requests to separate Lambda functions. Hardcode each Lambda function to a specific model provider. Switch the integration target manually.",
      "D": "Store the active model provider in a JSON file hosted on Amazon S3. Use AWS AppConfig to reference the S3 file as a hosted configuration source. Configure a Lambda function to read the file through AppConfig at runtime to determine which model to invoke."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384264-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 60,
    "question": "회사가 Amazon Bedrock API를 사용하여 복잡한 고객 문의를 처리하는 생성형 AI 애플리케이션을 구축하고 있습니다. 피크 사용 기간에 응답 청크 손상 및 지연된 데이터 전달을 야기하는 간헐적 API 타임아웃을 경험합니다. 애플리케이션은 길이가 다양한 복잡한 고객 문의를 처리할 때 프롬프트가 토큰 제한 내에 유지되도록 보장하기 어렵습니다. 사용자들이 입력 절단 및 응답 불완전을 보고했습니다. 기초 모델 호출 실패도 관찰했습니다. 어느 솔루션이 이 요구사항을 충족합니까?",
    "options": {
      "A": "모든 오류에 대해 1초 고정 지연과 최대 3회 재시도를 사용하는 표준 재시도 전략을 구현합니다.",
      "B": "지수 백오프와 지터를 사용하고 오류율이 임계값을 초과할 때 재시도를 일시적으로 비활성화하는 회로 차단기 패턴을 사용하는 적응형 재시도 전략을 구현합니다.",
      "C": "AWS SDK를 사용하여 표준 모드에서 재시도 전략을 구성합니다.",
      "D": "Amazon Bedrock 클라이언트 요청 타임아웃을 30초로 설정합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ 지수 백오프 지터 — 부하 분산\n▸ 회로 차단기 — 오류율 높을 때 재시도 중단\n\n【정답 포인트】\n▸ 적응형 재시도가 변화하는 서비스 가용성에 대응\n▸ 회로 차단기가 피크 시간에 과부하 방지\n\n【시험 포인트】\nBedrock 호출 시 적응형 재시도 + 회로 차단기가 핵심",
    "en_q": "A company is building a generative AI (GenAI) application that uses Amazon Bedrock APIs to process complex customer inquiries.",
    "en_opts": {
      "A": "Implement a standard retry strategy with 1-second fixed delay.",
      "B": "Implement an adaptive retry strategy with exponential backoff and jitter.",
      "C": "Use AWS SDK standard mode.",
      "D": "Set timeouts to 30 seconds."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384279-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 61,
    "question": "은행은 Amazon Bedrock을 사용하여 은행 웹사이트 사용자에게 계정 문의 및 금융 지침을 제공하는 생성형 AI(GenAI) 기반 AI 어시스턴트를 개발하고 있습니다. 은행은 AI 어시스턴트가 고객 상호작용에서 개인식별정보(PII)를 노출하지 않도록 보장해야 합니다. AI 어시스턴트는 GenAI 모델에 대한 프롬프트에서 PII를 전송하지 않아야 합니다. AI 어시스턴트는 투자 조언 제공 고객 요청에 응하지 않아야 합니다. 은행은 고객 상호작용의 감사 로그를 수집해야 하며, 여기에는 고객 상호작용 중에 전송되는 이미지 또는 문서가 포함됩니다. 이러한 요구사항을 최소한의 운영 노력으로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Macie를 사용하여 사용자 입력 및 모델 응답에서 PII를 감지하고 수정합니다. 프롬프트 엔지니어링 기법을 적용하여 모델이 투자 조언 주제를 피하도록 강제합니다. AWS CloudTrail을 사용하여 대화 로그를 캡처합니다.",
      "B": "AWS Lambda 함수와 Amazon Comprehend를 사용하여 PII를 감지하고 수정합니다. Amazon Comprehend 토픽 모델링을 사용하여 AI 어시스턴트가 투자 조언 주제에 대해 논의하지 않도록 합니다. Amazon CloudWatch에서 사용자 정의 메트릭을 설정하여 고객 대화를 캡처합니다.",
      "C": "Amazon Bedrock 가드레일을 구성하여 민감한 정보 정책을 적용하고 PII를 감지 및 필터링합니다. 주제 정책을 설정하여 AI 어시스턴트가 투자 조언 주제를 피하도록 합니다. Converse API를 사용하여 모델 호출을 기록합니다. Amazon S3에 대한 전달 로깅 및 이미지 로깅을 활성화합니다.",
      "D": "정규표현식 제어를 사용하여 PII의 패턴과 일치시킵니다. 프롬프트 엔지니어링 기법을 적용하여 고객에게 PII 또는 투자 조언 주제를 반환하지 않도록 합니다. 모델 호출 로깅, 전달 로깅 및 이미지 로깅을 Amazon S3에 활성화합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Amazon Bedrock Guardrails — PII, 금지 주제, 사용자 정의 필터를 자동으로 적용하는 정책 엔진\n▸ Sensitive Information Policy — PII(신용카드, SSN 등)를 자동 감지 및 필터링\n▸ Topic Policy — 특정 주제(투자 조언)를 차단\n▸ Converse API Logging — Bedrock 기본 제공 로깅 API\n\n【정답 포인트】\n▸ \"최소 운영 노력\" → 관리형 Guardrails 서비스 (사용자 정의 코드 불필요)\n▸ Bedrock Guardrails의 민감한 정보 정책 = PII 입출력 자동 감지/필터링\n▸ Topic Policy = 투자 조언 주제 자동 차단\n▸ Converse API + S3 로깅 = 이미지/문서 포함 모든 상호작용 감사 추적\n\n【오답 체크】\n(A) Macie는 \"데이터 저장소\"의 PII 발견용이며, 실시간 프롬프트/응답 필터링 기능 없음\n(B) Lambda + Comprehend 조합은 운영 오버헤드 증가 (코드 작성, 배포, 유지보수). Comprehend는 토픽 모델링이 투자 조언처럼 구체적인 주제 차단에 부족\n(D) 정규표현식은 PII 패턴이 다양해 오탐/미탐 위험 높음. 프롬프트 엔지니어링 = 보장 불가능\n\n【시험 포인트】\n▸ \"최소 운영 노력\" + \"규제 준수\"(금융) → 관리형 Guardrails 필수\n▸ PII 필터링 + 주제 차단 → Bedrock Guardrails의 핵심 기능\n▸ 이미지/문서 감사 → Converse API + S3 이미지 로깅 조합\n▸ 함정: Lambda/Comprehend 조합으로는 가능하지만 \"오버헤드\" 증가",
    "en_q": "A bank is developing a generative AI (GenAI)-powered AI assistant that uses Amazon Bedrock to assist the bank's website users with account inquiries and financial guidance. The bank must ensure that the AI assistant does not reveal any personally identifiable information (PII) in customer interactions. The AI assistant must not send PII in prompts to the GenAI model. The AI assistant must not respond to customer requests to provide investment advice. The bank must collect audit logs of all customer interactions, including any images or documents that are transmitted during customer interactions. Which solution will meet these requirements with the LEAST operational effort?",
    "en_opts": {
      "A": "Use Amazon Macie to detect and redact PII in user inputs and in the model responses. Apply prompt engineering techniques to force the model to avoid investment advice topics. Use AWS CloudTrail to capture conversation logs.",
      "B": "Use an AWS Lambda function and Amazon Comprehend to detect and redact PII. Use Amazon Comprehend topic modeling to prevent the AI assistant from discussing investment advice topics. Set up custom metrics in Amazon CloudWatch to capture customer conversations.",
      "C": "Configure Amazon Bedrock guardrails to apply a sensitive information policy to detect and filter PII. Set up a topic policy to ensure that the AI assistant avoids investment advice topics. Use the Converse API to log model invocations. Enable delivery and image logging to Amazon S3.",
      "D": "Use regex controls to match patterns for PII. Apply prompt engineering techniques to avoid returning PII or investment advice topics to customers. Enable model invocation logging, delivery logging, and image logging to Amazon S3."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384289-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 62,
    "question": "금융 서비스 회사는 Amazon Bedrock의 기초 모델(FM)을 사용하는 고객 서비스 AI 어시스턴트 애플리케이션을 개발하고 있습니다. 애플리케이션은 추론을 문서화하고 검색증강생성(RAG)에 사용된 소스를 인용하여 투명한 응답을 제공해야 합니다. 애플리케이션은 사용자에 대한 모든 응답의 포괄적인 감사 추적을 캡처해야 합니다. 애플리케이션은 최대 10,000명의 동시 사용자를 서비스할 수 있어야 하며 각 고객 문의에 2초 이내에 응답해야 합니다. 이러한 요구사항을 최소한의 운영 오버헤드로 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Bedrock 에이전트에 대한 추적을 활성화합니다. FM이 증거 제시를 제공하도록 지시하는 구조화된 프롬프트를 구성합니다. Amazon Bedrock 기술 자료베이스를 데이터 소스와 통합하여 RAG를 활성화합니다. 애플리케이션을 구성하여 신뢰할 수 있는 콘텐츠를 참조하고 인용합니다. Multi-AZ 아키텍처에서 애플리케이션을 배포합니다. Amazon API Gateway와 AWS Lambda 함수를 사용하여 애플리케이션을 확장합니다. Amazon CloudFront를 사용하여 저지연 전달을 제공합니다.",
      "B": "Amazon Bedrock 에이전트에 대한 추적을 활성화합니다. Amazon OpenSearch Service와의 사용자 정의 RAG 파이프라인을 통합하여 소스를 검색하고 인용합니다. 검색된 증거를 제시하도록 구조화된 프롬프트를 구성합니다. Amazon API Gateway REST API 뒤에 애플리케이션을 배포합니다. AWS Lambda 함수 및 Amazon CloudFront를 사용하여 애플리케이션을 확장하고 저지연을 제공합니다. 감사 추적을 위해 Amazon S3에 로그를 저장하고 AWS CloudTrail을 사용하여 감사 추적을 캡처합니다.",
      "C": "Amazon CloudWatch를 사용하여 지연 시간 및 오류율을 모니터링합니다. 소스를 인용하기 위해 모델 프롬프트를 애플리케이션 백엔드에 직접 포함합니다. 사용자와의 애플리케이션 상호작용을 감사를 위해 Amazon RDS에 저장합니다.",
      "D": "생성된 응답 및 지원 증거를 Amazon S3 버킷에 저장합니다. 감사를 위해 버킷에서 버전 관리를 활성화합니다. AWS Glue를 사용하여 검색된 문서를 카탈로그합니다. Amazon Athena에서 검색된 문서를 처리하여 정기적인 규정 준수 보고서를 생성합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Bedrock Agents — 자동화된 추론, RAG, 도구 호출 통합 에이전트\n▸ Bedrock Knowledge Bases — 관리형 RAG로 소스 자동 인용\n▸ Structured Prompts — FM에 증거 제시/추론 형식 강제\n▸ Multi-AZ + API Gateway + Lambda + CloudFront — 확장성 + 저지연 조합\n\n【정답 포인트】\n▸ \"최소 운영 오버헤드\" → Bedrock 통합 서비스 활용 (Knowledge Bases, Agents)\n▸ \"소스 인용\" → Bedrock Knowledge Bases가 자동 인용 메타데이터 제공\n▸ \"2초 이내\" + \"10,000 동시 사용자\" → Multi-AZ + CloudFront 캐싱\n▸ \"감사 추적\" → Agents의 기본 로깅 + CloudTrail 자동 기록\n\n【오답 체크】\n(B) OpenSearch 사용자 정의 파이프라인은 운영 오버헤드 증가 (색인 유지, 튜닝). Bedrock Knowledge Bases가 더 간단\n(C) RDS는 감사 추적용 저장소로는 부족 (CloudTrail 미통합). 프롬프트 직접 포함은 유지보수 어려움\n(D) S3 + Glue + Athena는 실시간 응답에 부적합 (배치 처리). \"2초 응답\" 요구사항 불만족\n\n【시험 포인트】\n▸ \"투명성\" + \"소스 인용\" + \"감사\" → Bedrock Agents + Knowledge Bases 조합\n▸ \"고성능\" (10K 동시, 2초) → 서버리스 확장 + 엣지 캐싱 필수\n▸ 함정: OpenSearch 또는 DynamoDB 같은 개별 서비스 조합은 가능하지만 \"오버헤드\" 증가\n▸ Bedrock 생태계 통합 = \"최소 운영 오버헤드\"의 핵심",
    "en_q": "A financial services company is developing a customer service AI assistant application that uses a foundation model (FM) in Amazon Bedrock. The application must provide transparent responses by documenting reasoning and by citing sources that are used for Retrieval Augmented Generation (RAG). The application must capture comprehensive audit trails for all responses to users. The application must be able to serve up to 10,000 concurrent users and must respond to each customer inquiry within 2 seconds. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Enable tracing for Amazon Bedrock agents. Configure structured prompts that direct the FM to provide evidence presentations. Integrate Amazon Bedrock knowledge bases with data sources to enable RAG. Configure the application to reference and cite authoritative content. Deploy the application in a Multi-AZ architecture. Use Amazon API Gateway and AWS Lambda functions to scale the application. Use Amazon CloudFront to provide low-latency delivery.",
      "B": "Enable tracing for Amazon Bedrock agents. Integrate a custom RAG pipeline with Amazon OpenSearch Service to retrieve and cite sources. Configure structured prompts to present retrieved evidence. Deploy the application behind an Amazon API Gateway REST API. Use AWS Lambda functions and Amazon CloudFront to scale the application and to provide low latency. Store logs in Amazon S3 and use AWS CloudTrail to capture audit trails.",
      "C": "Use Amazon CloudWatch to monitor latency and error rates. Embed model prompts directly in the application backend to cite sources. Store application interactions with users in Amazon RDS for audits.",
      "D": "Store generated responses and supporting evidence in an Amazon S3 bucket. Enable versioning on the bucket for audits. Use AWS Glue to catalog retrieved documents. Process the retrieved documents in Amazon Athena to generate periodic compliance reports."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384261-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 64,
    "question": "Example Corp는 수백만 명의 엔터프라이즈 고객이 사용하는 개인화된 동영상 생성 서비스를 제공합니다. 고객은 회사의 독점 생성 AI(GenAI) 모델에 프롬프트를 제출하여 마케팅 동영상을 생성합니다. 출력 관련성 및 개인화를 개선하기 위해 Example Corp는 제품 선호도, 고객 속성 및 비즈니스 이력 같은 고객별 컨텍스트를 사용하여 프롬프트를 향상하려고 합니다. 고객들은 엄격한 데이터 거버넌스 요구사항이 있습니다. 고객은 자신의 데이터에 대한 완전한 소유권 및 제어를 유지해야 합니다. 고객은 실시간 액세스를 요구하지 않습니다. 그러나 의미론적 정확도는 높아야 하며 검색 지연 시간은 고객 경험 사용 사례를 지원하기 위해 낮아야 합니다. Example Corp는 통합 패턴의 아키텍처 복잡성을 최소화하려고 합니다. Example Corp는 필요한 경우가 아니면 각 고객의 환경에 서비스를 배포하고 관리하고 싶지 않습니다. 이러한 요구사항을 충족할 솔루션은 무엇입니까?",
    "options": {
      "A": "각 고객이 고객 내부 데이터를 포함하는 Amazon Q Business 인덱스를 설정하도록 합니다. 각 고객이 Example Corp를 데이터 액세서로 지정하도록 하여 Example Corp가 런타임에 프롬프트를 강화하기 위해 보안 API를 사용하여 관련 콘텐츠를 검색할 수 있도록 합니다.",
      "B": "MCP(Model Context Protocol)로 페더레이션 검색을 사용하여 각 고객을 위해 실시간 MCP 서버를 배포합니다. 프롬프트 생성 중에 실시간으로 데이터를 검색합니다.",
      "C": "각 고객이 Amazon Bedrock 기술 자료베이스를 구성하도록 합니다. Example Corp가 프롬프트 보강을 위해 구조화된 데이터를 검색할 수 있도록 크로스 계정 쿼리를 허용합니다.",
      "D": "Amazon Kendra를 구성하여 고객 데이터 소스를 크롤링합니다. Example Corp가 보강 데이터를 검색하기 위해 각 고객의 Amazon Kendra 인덱스를 쿼리할 수 있도록 계정 간 인덱스를 공유합니다."
    },
    "answer": "A",
    "explanation": "【핵심 용어】\n▸ Amazon Q Business — 기업용 검색 및 생성형 AI 지식 처리, 권한 기반 액세스 제어 내장\n▸ Data Accessor — Q Business 자격 증명 없이 인덱스 접근 권한을 제3자에게 위임\n▸ Semantic Accuracy — 의미론적 관련성 (벡터 검색 기반)\n▸ Data Governance — 고객 주권, Example Corp는 직접 데이터 보유 불가\n\n【정답 포인트】\n▸ \"완전한 소유권 + 제어\" → 각 고객이 자신의 인덱스 소유 (Example Corp 미소유)\n▸ \"데이터 거버넌스\" → Data Accessor 패턴으로 고객 승인 하에만 접근\n▸ \"의미론적 정확도 높음\" → Q Business의 벡터 검색 기반\n▸ \"검색 지연 낮음\" → 비실시간 (배치 아님), API 기반 온디맨드\n▸ \"아키텍처 복잡성 최소\" → 관리형 Q Business (Example Corp가 인프라 배포 불필요)\n\n【오답 체크】\n(B) MCP 실시간 서버 배포 = Example Corp가 각 고객 환경에 서비스 배포 (\"배포하고 싶지 않음\" 위배)\n(C) Bedrock Knowledge Bases 크로스 계정 쿼리는 데이터 주권 모호 (누가 인덱스 관리?). Q Business가 더 명확한 권한 모델\n(D) Kendra 인덱스 공유 = Example Corp가 인덱스 접근 가능 (\"고객 소유권\" 약화). Q Business의 Data Accessor가 더 세밀한 제어\n\n【시험 포인트】\n▸ \"고객 데이터 거버넌스\" → 고객이 소유, 제3자(Example Corp)는 권한 기반 접근만\n▸ Q Business = 엔터프라이즈급 데이터 거버넌스 + 권한 관리 내장\n▸ Data Accessor 패턴 = \"최소 복잡성\" + \"데이터 주권 보장\" 조합\n▸ 함정: Bedrock Knowledge Base나 Kendra도 가능하지만, 권한 모델이 덜 명확",
    "en_q": "Example Corp provides a personalized video generation service that millions of enterprise customers use. Customers generate marketing videos by submitting prompts to the company's proprietary generative AI (GenAI) model. To improve output relevance and personalization, Example Corp wants to enhance the prompts by using customer-specific context such as product preferences, customer attributes, and business history. The customers have strict data governance requirements. The customers must retain full ownership and control over their own data. The customers do not require real-time access. However, semantic accuracy must be high and retrieval latency must remain low to support customer experience use cases. Example Corp wants to minimize architectural complexity in its integration pattern. Example Corp does not want to deploy and manage services in each customer's environment unless necessary. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Ensure that each customer sets up an Amazon Q Business index that includes the customer's internal data. Ensure that each customer designates Example Corp as a data accessor to allow Example Corp to retrieve relevant content by using a secure API to enrich prompts at runtime.",
      "B": "Use federated search with Model Context Protocol (MCP) by deploying real-time MCP servers for each customer. Retrieve data in real time during prompt generation.",
      "C": "Ensure that each customer configures an Amazon Bedrock knowledge base. Allow cross-account querying so Example Corp can retrieve structured data for prompt augmentation.",
      "D": "Configure Amazon Kendra to crawl customer data sources. Share the resulting indexes across accounts so Example Corp can query each customer's Amazon Kendra index to retrieve augmentation data."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384272-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 65,
    "question": "한 회사가 Amazon Bedrock을 사용하여 Anthropic Claude 기반 모델(FM)이 지원하는 법률 연구 AI 어시스턴트를 구축하고 있습니다. 이 AI 어시스턴트는 FM의 응답을 강화하기 위해 매우 관련성 높은 판례법 문서를 검색해야 합니다. 또한 법률 개념 간의 의미론적 관계, 특정 법률 용어, 인용구를 식별해야 합니다. 빠른 성능을 발휘하고 정확한 결과를 반환해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "기본 벡터 검색 구성을 사용하도록 Amazon Bedrock 지식 베이스를 구성합니다. Amazon Bedrock을 사용하여 특정 용어와 인용구를 기반으로 법률 문서 검색을 개선하기 위해 쿼리를 확장합니다.",
      "B": "벡터 검색과 키워드 검색을 결합한 하이브리드 검색 아키텍처를 배포하기 위해 Amazon OpenSearch 서비스를 사용합니다. Amazon Bedrock 리랭커 모델을 적용하여 결과 관련성을 최적화합니다.",
      "C": "최종 사용자를 위해 Amazon Kendra 쿼리 제안 기능을 활성화합니다. Amazon Bedrock을 사용하여 문서의 의미론적 유사성을 식별하고 정확한 결과를 생성하기 위해 검색 결과의 사후 처리를 수행합니다.",
      "D": "벡터 검색과 Amazon Bedrock Titan 임베딩을 사용하여 Amazon OpenSearch 서비스를 사용합니다. 법률 문서를 인덱싱하고 검색하고, 사용자 정의 AWS Lambda 함수를 사용하여 Amazon RDS 데이터베이스에 저장된 키워드 기반 필터와 결과를 병합합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Vector Search — 의미론적 관계를 기반으로 한 검색 방식\n▸ Hybrid Search — 벡터 검색과 키워드 검색의 조합\n▸ Reranker Model — 검색 결과의 관련성을 재순위화하는 모델\n▸ Amazon OpenSearch — 대규모 검색 및 분석 엔진\n\n【정답 포인트】\n▸ 의미론적 관계 + 법률 용어 + 인용구 식별 → 하이브리드 검색이 필수\n▸ \"정확한 결과\" 요구사항 → 리랭커 모델로 관련성 최적화\n▸ \"빠른 성능\" 요구사항 → OpenSearch의 효율적인 검색 능력\n▸ 옵션 B는 벡터 검색(의미론적)과 키워드 검색(용어/인용)의 장점을 모두 활용하며, 리랭커로 최종 정렬\n\n【오답 체크】\n(A) 기본 벡터 검색만으로는 법률 용어와 인용구(정확한 매칭)의 검색 능력 부족\n(C) Amazon Kendra는 쿼리 제안 기능만 제공; 의미론적 관계 식별 메커니즘 약함\n(D) 복잡한 Lambda 함수와 RDS 필터링으로 인한 지연; 정확한 검색보다 복잡도 증가\n\n【시험 포인트】\n▸ 하이브리드 검색 패턴 → 의미론적 + 키워드 검색의 조합 이해\n▸ Reranker의 역할 → 검색 결과의 관련성 개선\n▸ 함정: 단순한 벡터 검색이나 기본 구성은 법률 용어/인용구 검색에 부족",
    "en_q": "A company is building a legal research AI assistant that uses Amazon Bedrock with an Anthropic Claude foundation model (FM). The AI assistant must retrieve highly relevant case law documents to augment the FM's responses. The AI assistant must identify semantic relationships between legal concepts, specific legal terminology, and citations. The AI assistant must perform quickly and return precise results. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure an Amazon Bedrock knowledge base to use a default vector search configuration. Use Amazon Bedrock to expand queries to improve retrieval for legal documents based on specific terminology and citations.",
      "B": "Use Amazon OpenSearch service to deploy a hybrid search architecture that combines vector search with keyword search. Apply an Amazon Bedrock reranker model to optimize result relevance.",
      "C": "Enable the Amazon Kendra query suggestion feature for end users. Use Amazon Bedrock to perform post-processing of search results to identify semantic similarity in the documents and to produce precise results.",
      "D": "Use Amazon OpenSearch Service with vector search and Amazon Bedrock Titan embeddings to index and search legal documents. Use custom AWS Lambda functions to merge results with keyword-based filters that are stored in an Amazon RDS database."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384287-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 66,
    "question": "한 회사가 고객 서비스, 콘텐츠 생성, 문서 분석을 위해 여러 사업부에 걸쳐 여러 Amazon Bedrock 기반 생성형 AI(GenAI) 애플리케이션을 배포했습니다. 일부 애플리케이션에서는 예측 불가능한 토큰 소비 패턴을 보입니다. 회사는 여러 모델 간의 토큰 사용 패턴에 대한 실시간 가시성을 제공하는 포괄적인 관찰성 솔루션이 필요합니다. 이 관찰성 솔루션은 여러 이해관계자 그룹을 위한 사용자 정의 대시보드를 지원하고 회사의 애플리케이션이 사용하는 모든 기반 모델에 걸쳐 토큰 소비에 대한 경보 기능을 제공해야 합니다. 운영 오버헤드가 가장 적게 드는 솔루션의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "Amazon CloudWatch 메트릭을 데이터 소스로 사용하여 FM 전체의 토큰 사용 추세와 사용 패턴을 표시하는 사용자 정의 Amazon QuickSight 대시보드를 만듭니다.",
      "B": "Amazon CloudWatch Logs Insights를 사용하여 Amazon Bedrock 호출 로그에서 토큰 소비 패턴을 분석하고 애플리케이션별 사용 속성을 파악합니다. 높은 사용 시나리오를 식별하는 사용자 정의 쿼리를 생성합니다. 대시보드에 로그 위젯을 추가하여 지속적인 모니터링을 활성화합니다.",
      "C": "기본 Amazon Bedrock 토큰 및 호출 CloudWatch 메트릭을 결합하는 사용자 정의 Amazon CloudWatch 대시보드를 만듭니다. 토큰 사용 임계값을 모니터링하도록 CloudWatch 경보를 설정합니다.",
      "D": "Amazon Bedrock과 Amazon Managed Grafana의 영(Zero)-ETL 통합을 사용하여 회사의 FM 전체의 토큰 사용 추세와 패턴을 표시하는 대시보드를 생성합니다.",
      "E": "Amazon Bedrock 모델 호출 이벤트를 캡처하기 위해 Amazon EventBridge 규칙을 구현합니다. 토큰 사용 데이터를 Amazon OpenSearch Serverless를 대상으로 하는 Amazon Data Firehose 전달 스트림으로 라우팅합니다. OpenSearch 대시보드를 사용하여 사용 패턴을 분석합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ CloudWatch Logs Insights — 로그 데이터의 대화식 쿼리 및 분석\n▸ CloudWatch Metric Filters — 로그 데이터에서 메트릭 추출\n▸ Native CloudWatch Metrics — Amazon Bedrock에서 직접 제공하는 메트릭\n▸ Custom Dashboards — 여러 데이터 소스의 시각화\n\n【정답 포인트】\n▸ \"실시간 가시성\" 요구사항 → CloudWatch의 네이티브 메트릭과 로그 기반 분석\n▸ \"사용자 정의 대시보드\" 요구사항 → CloudWatch 대시보드\n(B) 와 QuickSight(불충분)\n▸ \"경보 기능\" 요구사항 → CloudWatch Alarms 지원\n(C) ▸ \"운영 오버헤드 최소\" → 관리형 서비스(CloudWatch) 선호, ETL 불필요\n▸ 선택지 B + C: CloudWatch Logs 분석 + 네이티브 메트릭 대시보드 + 경보 = 완벽한 조합\n\n【오답 체크】\n(A) QuickSight는 BI 도구이며, 경보 기능 부재\n(D) Zero-ETL은 편리하지만 실시간성 약함; 경보 기능 부재\n(E) EventBridge + Firehose + OpenSearch는 과도한 오버헤드(ETL 구축 필요)\n\n【시험 포인트】\n▸ CloudWatch 기반 관찰성 → 네이티브 메트릭 + 로그 분석 + 대시보드 + 경보의 통합\n▸ \"운영 오버헤드 최소\" → 관리형 서비스 선호, 자체 구축 아키텍처 회피\n▸ 함정: Zero-ETL, EventBridge 등의 복잡한 패턴은 오버엔지니어링",
    "en_q": "A company deploys multiple Amazon Bedrock based generative AI (GenAI) applications across multiple business units for customer service, content generation, and document analysis. Some applications show unpredictable token consumption patterns. The company requires a comprehensive observability solution that provides real-time visibility into token usage patterns across multiple models. The observability solution must support custom dashboards for multiple stakeholder groups and provide alerting capabilities for token consumption across all the foundational models that the company's applications use. Which combination of solutions will meet these requirements with the LEAST operational overhead? (Choose two.)",
    "en_opts": {
      "A": "Use Amazon CloudWatch metrics as data sources to create custom Amazon QuickSight dashboards that show token usage trends and usage patterns across FMs.",
      "B": "Use Amazon CloudWatch Logs Insights to analyze Amazon Bedrock invocation logs for token consumption patterns and usage attribution by application. Create custom queries to identify high-usage scenarios. Add log widgets to dashboards to enable continuous monitoring.",
      "C": "Create custom Amazon CloudWatch dashboards that combine native Amazon Bedrock token and invocation CloudWatch metrics. Set up CloudWatch alarms to monitor token usage thresholds.",
      "D": "Create dashboards that show token usage trends and patterns across the company's FMs by using an Amazon Bedrock zero-ETL integration with Amazon Managed Grafana.",
      "E": "Implement Amazon EventBridge rules to capture Amazon Bedrock model invocation events. Route token usage data to an Amazon Data Firehose delivery stream that targets Amazon OpenSearch Serverless. Use OpenSearch dashboards to analyze usage patterns."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384262-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 67,
    "question": "한 회사가 여러 AI 워크로드를 지원하는 기반 모델(FM)을 사용하는 솔루션을 설계하고 있습니다. 일부 FM은 온디맨드 및 실시간으로 호출되어야 합니다. 다른 FM은 배치 처리를 위한 일관되고 높은 처리량의 접근이 필요합니다. 솔루션은 하이브리드 배포 패턴을 지원하고 데이터 위치 및 규정 준수 요구사항을 충족하기 위해 클라우드 인프라와 온프레미스 인프라 전체의 워크로드를 실행해야 합니다. 이러한 요구사항을 충족하는 단계의 조합은 무엇입니까? (2개 선택)",
    "options": {
      "A": "AWS Lambda를 사용하여 Amazon SageMaker AI 비동기 엔드포인트에서 호스팅하는 FM을 호출하여 낮은 지연 시간 FM 추론을 오케스트레이션합니다.",
      "B": "고용량 워크로드에 대한 일관된 성능을 보장하기 위해 Amazon Bedrock에서 프로비저닝된 처리량을 구성합니다.",
      "C": "Amazon SageMaker Neo를 사용하여 엣지 배포를 지원하는 Amazon SageMaker AI 엔드포인트에 FM을 배포합니다. AWS Lambda를 사용하여 FM을 오케스트레이션하여 하이브리드 배포를 지원합니다.",
      "D": "예측 불가능한 트래픽 급증을 처리하기 위해 자동 스케일링과 함께 Amazon Bedrock을 사용합니다.",
      "E": "FM을 호스팅하고 호출하기 위해 Amazon SageMaker JumpStart를 사용합니다."
    },
    "answer": "BC",
    "explanation": "【핵심 용어】\n▸ Provisioned Throughput — 일정한 처리량 보장 및 성능 예측 가능성\n▸ SageMaker Neo — 엣지 디바이스에서의 모델 배포 최적화\n▸ Edge Deployment — 온프레미스 및 엣지 인프라에서의 모델 실행\n▸ Asynchronous Endpoints — 배치 처리 및 높은 처리량용 엔드포인트\n\n【정답 포인트】\n▸ \"온디맨드 실시간\" 요구사항 → Lambda 오케스트레이션(C에 포함)\n▸ \"높은 처리량 배치 처리\" 요구사항 → 프로비저닝된 처리량\n(B) ▸ \"하이브리드 배포\" 요구사항 → SageMaker Neo와 엣지 배포\n(C) ▸ \"온프레미스 인프라 지원\" 요구사항 → SageMaker Neo의 엣지 배포 능력\n▸ 선택지 B: 일관된 고처리량\n▸ 선택지 C: 온프레미스/엣지 + Lambda 오케스트레이션\n\n【오답 체크】\n(A) 비동기 엔드포인트는 배치에 적합하지만 온프레미스 배포 미지원\n(D) 자동 스케일링은 온프레미스 배포와 무관하며, 배치 처리에는 프로비저닝 처리량이 적절\n(E) JumpStart는 호스팅만 지원; 하이브리드 배포 및 엣지 배포 능력 부족\n\n【시험 포인트】\n▸ 하이브리드 워크로드 패턴 → 실시간(SageMaker) + 배치(프로비저닝 처리량)\n▸ 엣지 배포 → SageMaker Neo의 특화 능력\n▸ 함정: Bedrock은 클라우드 기반이므로 온프레미스 배포 불가; 다중 패턴은 SageMaker로 구현",
    "en_q": "A company is designing a solution that uses foundation models (FMs) to support multiple AI workloads. Some FMs must be invoked on demand and in real time. Other FMs require consistent high-throughput access for batch processing. The solution must support hybrid deployment patterns and run workloads across cloud infrastructure and on-premises infrastructure to comply with data residency and compliance requirements. Which combination of steps will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Use AWS Lambda to orchestrate low-latency FM inference by invoking FMs hosted on Amazon SageMaker AI asynchronous endpoints.",
      "B": "Configure provisioned throughput in Amazon Bedrock to ensure consistent performance for high-volume workloads.",
      "C": "Deploy FMs to Amazon SageMaker AI endpoints with support for edge deployment by using Amazon SageMaker Neo. Orchestrate the FMs by using AWS Lambda to support hybrid deployment.",
      "D": "Use Amazon Bedrock with auto-scaling to handle unpredictable traffic surges.",
      "E": "Use Amazon SageMaker JumpStart to host and invoke the FMs."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384271-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 68,
    "question": "한 회사가 여러 국가에서 운영하는 5개의 독립적인 사업부에 여러 생성형 AI(GenAI) 애플리케이션을 배포할 계획입니다. 각 애플리케이션은 테라바이트 규모의 비정형 데이터를 저장하는 사업부별 특정 지식 베이스를 사용하는 Amazon Bedrock 검색 증강 생성(RAG) 패턴을 사용합니다. 회사는 모든 GenAI 애플리케이션에 걸쳐 보안 제어, 관찰성 관행, 배포 패턴을 위한 잘 설계되고 표준화된 구성 요소를 구축해야 합니다. 이러한 구성 요소는 재사용 가능하고, 버전이 지정되고, 일관되게 관리되어야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "GenAI 애플리케이션을 위해 Amazon API Gateway REST API 엔드포인트를 구성합니다. AWS Well-Architected 생성형 AI Lens를 기반으로 표준화된 AWS CloudFormation 템플릿에 공통 보안, 관찰성, RAG 패턴을 배포합니다. 각 사업부의 정책 규정 준수를 검증하기 위해 배포 후 CloudFormation Guard를 사용합니다.",
      "B": "AWS Well-Architected 생성형 AI Lens를 기반으로 보안, 관찰성, RAG 패턴을 구현하기 위한 표준화된 AWS CloudFormation 템플릿을 생성합니다. 버전 제어를 수행하는 중앙화된 리포지토리를 구축합니다. CloudFormation Guard를 사용하여 CI/CD 파이프라인을 통합하여 사업부 간 일관되고 반복 가능한 배포를 적용합니다.",
      "C": "각 사업부를 위한 표준화된 포트폴리오와 버전 지정된 제품을 정의하기 위해 AWS Service Catalog를 사용합니다. AWS Well-Architected 생성형 AI Lens를 기반으로 보안, 관찰성, RAG 패턴을 적용하기 위해 포트폴리오를 사용합니다. 사업부에서 Service Catalog 콘솔을 사용하여 리소스를 배포하도록 요구합니다.",
      "D": "AWS Well-Architected 생성형 AI Lens를 기반으로 보안 제어, 관찰성 요구사항, RAG 패턴을 공유 설계 문서에 문서화합니다. Amazon Macie를 사용하여 배포를 적용합니다. 각 사업부에 구현 책임을 위임합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ CloudFormation Templates — Infrastructure as Code (IaC)로 표준화된 배포\n▸ CloudFormation Guard — 정책 및 규정 준수 검증 자동화\n▸ CI/CD Pipeline — 지속적인 통합 및 배포 파이프라인\n▸ Version Control — 템플릿 및 정책의 버전 관리\n▸ Service Catalog — 기업 포트폴리오 및 제품 정의\n\n【정답 포인트】\n▸ \"표준화된 구성 요소\" 요구사항 → CloudFormation 템플릿으로 코드화\n▸ \"재사용 가능\" 요구사항 → 중앙화된 리포지토리 관리\n▸ \"버전이 지정\" 요구사항 → 버전 제어 시스템(Git 등)\n▸ \"일관되게 관리\" 요구사항 → CI/CD + CloudFormation Guard로 정책 적용\n▸ 선택지 B는 전체 라이프사이클을 자동화(배포 전 검증 + 배포)\n▸ \"Well-Architected Lens 기반\" → 조직의 모범 사례 통합\n\n【오답 체크】\n(A) 배포 후 Guard 검증 → 이미 배포된 리소스는 수정 필요(비효율적)\n(C) Service Catalog는 제품 관리에 적합하지만, 버전 제어 및 CI/CD 자동화 약함\n(D) 문서화만으로는 자동 검증/적용 불가능; Macie는 데이터 보안 도구로 배포 자동화 미지원\n\n【시험 포인트】\n▸ \"표준화 + 버전 관리 + 자동 검증\" 패턴 → CloudFormation + Guard + CI/CD\n▸ \"배포 전 검증\" → Guard를 CI/CD 파이프라인에 통합\n▸ 함정: 배포 후 검증\n(A) , 수동 구현\n(D) , 제품 카탈로그만\n(C) 은 불완전한 자동화",
    "en_q": "A company is planning to deploy multiple generative AI (GenAI) applications to five independent business units that operate in multiple countries in Europe and the Americas. Each application uses Amazon Bedrock Retrieval Augmented Generation (RAG) patterns with business unit-specific knowledge bases that store terabytes of unstructured data. The company must establish well-architected, standardized components for security controls, observability practices, and deployment patterns across all the GenAI applications. The components must be reusable, versioned, and governed consistently. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure Amazon API Gateway REST API endpoints for the GenAI applications. Deploy common security, observability, and RAG patterns based on the AWS Well-Architected Generative AI Lens in standardized AWS CloudFormation templates. Use CloudFormation Guard after the deployment to validate policy compliance in each business unit.",
      "B": "Create standardized AWS CloudFormation templates to implement security, observability, and RAG patterns based on the AWS Well-Architected Generative AI Lens. Establish a centralized repository that performs version control. Integrate a CI/CD pipeline with CloudFormation Guard to enforce consistent and repeatable deployments across business units.",
      "C": "Use AWS Service Catalog to define standardized portfolios and versioned products for each business unit. Use the portfolios to enforce security, observability, and RAG patterns based on the AWS Well-Architected Generative AI Lens. Require the business units to use the Service Catalog console to deploy resources.",
      "D": "Document security controls, observability requirements, and RAG patterns based on the AWS Well-Architected Generative AI Lens in a shared design document. Use Amazon Macie to enforce deployment. Delegate implementation responsibility to each business unit."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384283-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 69,
    "question": "한 회사가 다국어 고객 서비스 어시스턴트를 지원하는 Amazon Bedrock 기반 기반 모델(FM)을 업그레이드했습니다. 업그레이드 후 어시스턴트는 언어 전체에서 일관되지 않은 동작을 보였습니다. 어시스턴트는 일부 언어에서 동일한 질문이 제시될 때 다른 응답을 생성하기 시작했습니다. 회사는 향후 업데이트를 위해 유사한 문제를 탐지하고 해결하는 솔루션이 필요합니다. 평가는 지원되는 모든 언어에 대해 45분 이내에 완료되어야 합니다. 평가는 최소 15,000개의 테스트 대화를 병렬로 처리해야 합니다. 평가 프로세스는 완전히 자동화되고 CI/CD 파이프라인에 통합되어야 합니다. 솔루션은 품질 임계값이 충족되지 않으면 배포를 차단해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "여러 언어로 어시스턴트에 번역 집약적 워크로드를 동시에 전송하는 분산 트래픽 시뮬레이션 프레임워크를 생성합니다. Amazon CloudWatch 메트릭을 사용하여 지연 시간, 동시성, 처리량을 모니터링합니다. 프로덕션 릴리스 전에 시뮬레이션을 실행하여 인프라 병목 현상을 식별합니다.",
      "B": "여러 AWS 리전에 어시스턴트를 배포하고 Amazon Route 53 지연 시간 기반 라우팅과 AWS Global Accelerator를 사용하여 글로벌 성능을 개선합니다. 다국어 대화 로그를 Amazon S3에 저장합니다. 프로덕션 배포 후 매주 일관성을 검토하는 감사를 수행합니다.",
      "C": "모든 수신 메시지를 어시스턴트로 전송하기 전에 일관된 형식으로 정규화하는 전처리 파이프라인을 생성합니다. 규칙 기반 검사를 적용하여 출력의 잠재적 환각을 플래그합니다. 언어 전체의 테스트를 단순화하기 위해 정규화된 텍스트에 평가를 집중합니다.",
      "D": "동일한 의미를 가진 표준화된 다국어 테스트 대화를 설정합니다. Amazon Bedrock 모델 평가 작업을 사용하여 테스트 대화를 병렬로 실행합니다. 유사성 및 환각 임계값을 적용합니다. 실패하는 릴리스를 차단하기 위해 프로세스를 CI/CD 파이프라인에 통합합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Amazon Bedrock Model Evaluation — 기반 모델의 성능 평가 및 검증\n▸ Multilingual Test Conversations — 동일한 의미의 다국어 테스트 세트\n▸ Hallucination Threshold — 환각(거짓 정보 생성) 감지 임계값\n▸ Similarity Threshold — 응답 간 의미론적 유사성 기준\n\n【정답 포인트】\n▸ \"45분 이내 평가\" 요구사항 → Bedrock 모델 평가 작업의 병렬 처리\n▸ \"15,000개 테스트 대화 병렬 처리\" 요구사항 → 모델 평가 작업의 대규모 병렬화 지원\n▸ \"다국어 일관성\" 확인 → 동일 의미의 다국어 테스트(C의 정규화와 다름)\n▸ \"자동화 + CI/CD 통합\" 요구사항 → 모델 평가를 파이프라인에 통합\n▸ \"배포 차단\" 요구사항 → 임계값 미충족 시 배포 자동 중지\n▸ 선택지 D는 Bedrock의 네이티브 평가 기능을 활용한 완벽한 자동화\n\n【오답 체크】\n(A) 트래픽 시뮬레이션은 성능 테스트이며, 정성적 일관성 평가 부족\n(B) 사후 감사는 배포 차단 불가능; 주간 감사로는 45분 요구사항 미충족\n(C) 정규화는 의미 손실 위험; 동일 의미 다국어 테스트와 다름; 환각 검증 약함\n\n【시험 포인트】\n▸ 모델 평가 자동화 패턴 → Bedrock 모델 평가 작업의 병렬화 + 임계값 기반 검증\n▸ 다국어 일관성 → 동일 의미의 다국어 대화 세트로 검증\n▸ \"배포 차단\" → CI/CD 파이프라인 게이트로의 통합\n▸ 함정: 성능 테스트\n(A) , 사후 감사\n(B) , 정규화\n(C) 는 실시간 평가 + 배포 제어 미지원",
    "en_q": "A company upgraded its Amazon Bedrock powered foundation model (FM) that supports a multilingual customer service assistant. After the upgrade, the assistant exhibited inconsistent behavior across languages. The assistant began generating different responses in some languages when presented with identical questions. The company needs a solution to detect and address similar problems for future updates. The evaluation must be completed within 45 minutes for all supported languages. The evaluation must process at least 15,000 test conversations in parallel. The evaluation process must be fully automated and integrated into the CI/CD pipeline. The solution must block deployment if quality thresholds are not met. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a distributed traffic simulation framework that sends translation-heavy workloads to the assistant in multiple languages simultaneously. Use Amazon CloudWatch metrics to monitor latency, concurrency, and throughput. Run simulations before production releases to identify infrastructure bottlenecks.",
      "B": "Deploy the assistant in multiple AWS Regions with Amazon Route 53 latency-based routing and AWS Global Accelerator to improve global performance. Store multilingual conversation logs in Amazon S3. Perform weekly post-deployment audits to review consistency.",
      "C": "Create a pre-processing pipeline that normalizes all incoming messages into a consistent format before sending the messages to the assistant. Apply rule-based checks to flag potential hallucinations in the outputs. Focus the evaluation on the normalized text to simplify testing across languages.",
      "D": "Set up standardized multilingual test conversations with identical meaning. Run the test conversations in parallel by using Amazon Bedrock model evaluation jobs. Apply similarity and hallucination thresholds. Integrate the process into the CI/CD pipeline to block releases that fail."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384266-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 70,
    "question": "한 회사가 Amazon Bedrock 기반 모델(FM)을 사용하는 생성형 AI(GenAI) 애플리케이션을 개발하고 있습니다. 애플리케이션에는 여러 사용자 정의 도구 통합이 있습니다. 애플리케이션은 일관된 사용자 트래픽에도 불구하고 예상 외의 토큰 소비 급증을 경험했습니다. 회사는 Amazon Bedrock 모델 호출 로깅을 사용하여 InputTokenCount 메트릭과 OutputTokenCount 메트릭을 모니터링하는 솔루션이 필요합니다. 솔루션은 도구 사용의 비정상적인 패턴을 감지하고 어떤 특정 도구 통합이 비정상적인 토큰 소비를 유발하는지 식별해야 합니다. 또한 트래픽 패턴 변화에 따라 임계값을 자동으로 조정해야 합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon CloudWatch Logs를 사용하여 모델 호출 로그를 캡처합니다. InputTokenCount 메트릭과 OutputTokenCount 메트릭을 기반으로 CloudWatch 대시보드를 생성합니다. 각 도구 통합에 대해 고정 임계값을 사용하여 정적 CloudWatch 경보를 구성합니다.",
      "B": "모델 호출 로그를 Amazon S3 버킷에 저장합니다. AWS Glue를 사용하여 로그를 카탈로그합니다. 도구 사용 추세에 대한 보고서를 생성하는 예약된 Amazon Athena 쿼리를 사용하여 토큰 소비 패턴을 분석합니다.",
      "C": "Amazon CloudWatch Logs를 사용하여 모델 호출 로그를 캡처합니다. CloudWatch 메트릭 필터를 생성하여 도구별 호출 패턴을 추출합니다. 각 도구의 메트릭에 대한 기준선을 조정하는 CloudWatch 이상 탐지 경보를 적용합니다.",
      "D": "모델 호출 로그를 Amazon S3 버킷에 저장합니다. AWS Lambda 함수를 생성하여 로그를 실시간으로 처리합니다. Lambda 함수가 식별하는 토큰 소비 추세를 기반으로 Amazon CloudWatch 경보 임계값을 수동으로 업데이트합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ CloudWatch Metric Filters — 로그에서 특정 메트릭 추출\n▸ Anomaly Detection Alarms — 통계적 이상 탐지 기반 경보\n▸ Baseline Adjustment — 자동 기준선 조정으로 동적 임계값\n▸ Tool-Specific Metrics — 도구별 토큰 소비 모니터링\n\n【정답 포인트】\n▸ \"InputTokenCount + OutputTokenCount 모니터링\" → CloudWatch Logs 캡처\n▸ \"도구별 비정상적인 패턴 탐지\" → 메트릭 필터로 도구별 분석\n▸ \"자동 임계값 조정\" 요구사항 → 이상 탐지 알고리즘(고정 임계값 아님)\n▸ \"트래픽 패턴 변화 대응\" → 기준선 자동 조정 기능\n▸ 선택지 C는 CloudWatch 이상 탐지의 적응형 임계값 활용\n\n【오답 체크】\n(A) 고정 임계값으로는 트래픽 패턴 변화에 대응 불가능(\"자동 조정\" 불만족)\n(B) 배치 쿼리는 실시간 탐지 불가; 수동 보고서로는 자동화 부족\n(D) Lambda로 수동 업데이트는 \"자동 조정\" 요구사항 위배; 실시간성 약함\n\n【시험 포인트】\n▸ \"비정상적인 패턴 자동 탐지\" → CloudWatch 이상 탐지(정적 알림 아님)\n▸ \"자동 임계값 조정\" → 이상 탐지의 기준선 자동 학습 기능\n▸ \"도구별 분석\" → 메트릭 필터로 차원화\n▸ 함정: 고정 임계값\n(A) , 배치 처리\n(B) , 수동 업데이트\n(D) 는 자동 적응형 모니터링 미지원",
    "en_q": "A company is developing a generative AI (GenAI) application that uses Amazon Bedrock foundation models (FMs). The application has several custom tool integrations. The application has experienced unexpected token consumption surges despite consistent user traffic. The company needs a solution that uses Amazon Bedrock model invocation logging to monitor InputTokenCount metrics and OutputTokenCount metrics. The solution must detect unusual patterns in tool usage and identify which specific tool integrations cause abnormal token consumption. The solution must also automatically adjust thresholds as traffic patterns change. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon CloudWatch Logs to capture model invocation logs. Create CloudWatch dashboards based on InputTokenCount metrics and OutputTokenCount metrics. Configure static CloudWatch alarms with fixed thresholds for each tool integration.",
      "B": "Store model invocation logs in an Amazon S3 bucket. Use AWS Glue to catalog the logs. Analyze token consumption patterns by using scheduled Amazon Athena queries that generate reports on tool usage trends.",
      "C": "Use Amazon CloudWatch Logs to capture model invocation logs. Create CloudWatch metric filters to extract tool-specific invocation patterns. Apply CloudWatch anomaly detection alarms that adjust baselines for each tool's metrics.",
      "D": "Store model invocation logs in an Amazon S3 bucket. Create an AWS Lambda function to process logs in real time. Manually update Amazon CloudWatch alarm thresholds based on token consumption trends that the Lambda function identifies."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384247-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 71,
    "question": "한 회사가 Amazon Bedrock을 사용하여 교차 지역 추론과 프로비저닝된 처리량을 지원하는 기반 모델(FM)을 사용하는 AI 기반 애플리케이션을 개발하고 있습니다. 애플리케이션은 유럽과 북아메리카의 사용자에게 일관되게 낮은 지연 시간으로 서비스를 제공해야 합니다. 애플리케이션은 유럽 사용자 데이터가 유럽 기반 AWS 리전 내에 유지되어야 한다는 데이터 위치 규정을 준수해야 합니다. 테스트 중에 지역 트래픽 급증이 서비스 할당량에 도달하면 애플리케이션이 성능 저하를 경험합니다. 회사는 애플리케이션 복원력을 유지하고 운영 복잡성을 최소화하는 솔루션이 필요합니다. 이러한 요구사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "북미 및 유럽 리전에 별도의 Amazon Bedrock 인스턴스를 배포합니다. 사용자 위치를 기반으로 트래픽을 지시하는 사용자 정의 라우팅 레이어를 사용합니다. Amazon CloudWatch 경보를 구성하여 지역 서비스 사용량을 모니터링합니다. 회사가 지정된 임계값에 접근할 때 사용량 경보를 보내기 위해 Amazon SNS를 사용합니다.",
      "B": "애플리케이션이 InvokeModel API를 호출할 때 프로필 ID에 지역 코드를 지정하여 Amazon Bedrock 교차 지역 추론 프로필을 사용합니다. 유럽과 북미 사용자를 적절한 지역 엔드포인트로 지시하기 위해 별도의 Amazon API Gateway HTTP API를 구성합니다.",
      "C": "다중 지역 Amazon API Gateway HTTP API와 AWS Lambda 함수를 배포합니다. Lambda 함수는 재시도 로직을 구현하여 제한을 처리합니다. Lambda 함수를 구성하여 애플리케이션이 기본 지역의 서비스 할당량에 도달할 때 가장 가까운 보조 지역에서 FM을 호출합니다. 지능형 라우팅을 사용하여 데이터 위치 요구사항을 준수합니다.",
      "D": "여러 지역에서 Amazon Bedrock 프로비저닝된 처리량을 구성합니다. 제한이 발생할 때 지역 간 전환하는 재시도 로직을 애플리케이션 코드에 구현합니다. 사용자 위치를 기반으로 적절한 엔드포인트로 트래픽을 라우팅하기 위해 AWS Global Accelerator를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Cross-Region Inference Profiles — 교차 지역 추론 프로필로 자동 장애 조치\n▸ Geographical Codes — 프로필 ID에 포함된 지역 코드\n▸ Data Residency — 데이터가 특정 지역 내에 유지되어야 하는 규정\n▸ Service Quotas — 지역별 서비스 호출 한계\n\n【정답 포인트】\n▸ \"낮은 지연 시간\" 요구사항 → 교차 지역 추론 프로필(자동 최적화)\n▸ \"데이터 위치 준수\" 요구사항 → 프로필 ID의 지역 코드로 명시적 제어\n▸ \"서비스 할당량 도달 시 복원력\" → 교차 지역 프로필의 자동 장애 조치\n▸ \"운영 복잡성 최소화\" → Bedrock 네이티브 기능 활용\n▸ 선택지 B는 Bedrock의 교차 지역 추론 프로필로 자동화된 솔루션\n\n【오답 체크】\n(A) 사용자 정의 라우팅과 수동 모니터링은 복잡도 높음; 자동 장애 조치 부재\n(C) Lambda 재시도 로직은 복잡도 증가; 데이터 위치 준수 위험(라우팅 로직 복잡)\n(D) 애플리케이션 코드의 재시도 로직은 운영 오버헤드 증가; 교차 지역 프로필 미활용\n\n【시험 포인트】\n▸ \"운영 복잡성 최소화\" 핵심 → Bedrock의 네이티브 교차 지역 추론 프로필 활용\n▸ 지역 코드 기반 제어 → 데이터 위치 준수 자동화\n▸ 자동 장애 조치 → 프로필의 내재적 특성\n▸ 함정: 사용자 정의 라우팅(A,C,D)은 복잡도 증가; Bedrock 네이티브 기능 미활용",
    "en_q": "A company is using Amazon Bedrock to develop an AI-powered application that uses a foundation model (FM) that supports cross-Region inference and provisioned throughput. The application must serve users in Europe and North America with consistently low latency. The application must comply with data residency regulations that require European user data to remain within Europe-based AWS Regions. During testing, the application experiences service degradation when Regional traffic spikes reach service quotas. The company needs a solution that maintains application resilience and minimizes operational complexity. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy separate Amazon Bedrock instances in North American and European Regions. Use a custom routing layer that directs traffic based on user location. Configure Amazon CloudWatch alarms to monitor Regional service usage. Use Amazon SNS to send email alerts to the company when usage approaches specified thresholds.",
      "B": "Use Amazon Bedrock cross-Region inference profiles by specifying geographical codes in profile IDs when the application calls the InvokeModel API. Configure separate Amazon API Gateway HTTP APIs to direct European and North American users to the appropriate Regional endpoints.",
      "C": "Deploy a multi-Region Amazon API Gateway HTTP API and AWS Lambda functions that implement retry logic to handle throttling. Configure the Lambda functions to call the FM in the nearest secondary Region when the application reaches service quotas in the primary Region. Use intelligent routing to ensure compliance with data residency requirements.",
      "D": "Configure provisioned throughput for Amazon Bedrock in multiple Regions. Implement failover logic in the application code to switch between Regions when throttling occurs. Use AWS Global Accelerator to route traffic to the appropriate endpoints based on user location."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384288-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 72,
    "question": "한 국제 회사가 RAG를 사용하는 AI 어시스턴트를 구축하고 있습니다. 회사는 AI 어시스턴트가 거의 실시간이고 낮은 지연 시간의 성능을 가지기를 원합니다. AI 어시스턴트는 여러 지리적 영역에 서비스를 제공해야 합니다. 회사의 고객은 AI 어시스턴트와 함께 독점 데이터를 사용할 것입니다. 독점 데이터는 회사의 즉각적인 지리적 영역을 벗어나서는 안 됩니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Cross-Region 모델 추론 프로필을 사용하여 Amazon Bedrock 모델을 배포합니다. 회사가 운영하는 각 AWS 리전에 Amazon S3 버킷을 생성합니다. 각 respective S3 버킷에 knowledge base를 저장합니다. 각 리전에서 respective knowledge base와 상호 작용하도록 Amazon Kendra를 구성합니다. 각 리전에서 Kendra와 Amazon Bedrock을 사용하여 AI 어시스턴트 프롬프트를 처리하는 AWS Lambda 함수를 구성합니다.",
      "B": "회사가 운영하는 각 AWS 리전에 Amazon Bedrock 모델을 배포합니다. Amazon Bedrock cross-Region 모델 추론 프로필을 구성합니다. Amazon Bedrock Knowledge Bases를 사용하는 벡터 데이터베이스를 구성합니다. 회사가 운영하는 각 리전의 Amazon S3에 knowledge bases를 저장합니다.",
      "C": "회사가 운영하는 각 AWS 리전에 outpost를 배포하기 위해 AWS Outposts를 사용합니다. 각 corresponding 리전에 knowledge bases를 저장하기 위해 Amazon S3 버킷을 생성합니다. 각 outpost에 벡터 데이터베이스로 구성된 Amazon RDS를 배포합니다. cross-Region 추론 프로필을 사용하는 Amazon Bedrock 모델을 중앙 리전에 배포합니다.",
      "D": "회사가 운영하는 각 AWS Local Zone에 Amazon S3 Express One Zone 스토리지 클래스에 저장된 knowledge base를 구성합니다. 각 Local Zone에 벡터 데이터베이스를 배포하기 위해 Amazon RDS를 사용합니다. 각 Local Zone의 Amazon EC2 인스턴스에 대규모 언어 모델(LLM)을 배포합니다. AI 어시스턴트를 구성하여 respective Local Zone의 모델로 프롬프트를 라우팅합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ RAG (Retrieval-Augmented Generation) — 외부 지식 기반을 통해 생성 모델의 응답을 강화하는 기술\n▸ Amazon Bedrock — 완전 관리형 기초 모델 서비스\n▸ Knowledge Base — Bedrock의 RAG 기능으로 벡터 임베딩 검색 제공\n▸ Low-Latency — 지연 시간 최소화 요구사항\n\n【정답 포인트】\n▸ 각 리전에서 독립적인 Bedrock 모델 배포 → 데이터 주권 보장 (지리적 경계 내)\n▸ 각 리전별 Knowledge Base 구성 → 실시간 및 낮은 지연 시간 달성\n▸ Cross-Region 추론 프로필 → 여러 지역 서비스 가능하면서도 지역별 격리 유지\n\n【오답 체크】\n(A) Lambda + Kendra 조합은 추가 레이어로 지연 시간 증가, 비효율적\n(C) Outposts는 고가의 인프라이며, 각 리전 배포 시 불필요한 오버헤드\n(D) Local Zone은 제한된 서비스 지원(Bedrock, Kendra 미지원), 실현 불가능\n\n【시험 포인트】\n▸ 데이터 주권 + 낮은 지연 시간 → 각 지역별 독립 배포가 핵심\n▸ Knowledge Base는 Bedrock 네이티브 RAG 솔루션 → 최적의 성능\n▸ Cross-Region 프로필은 '로컬 데이터 격리'와 '글로벌 확장성' 동시 만족",
    "en_q": "An international company is building an AI assistant that uses RAG. The company wants the AI assistant to have near real-time, low-latency performance. The AI assistant must provide service to several geographic areas. The company's customers will use proprietary data with the AI assistant. The proprietary data must not leave the company's immediate geographic area. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy an Amazon Bedrock model with a cross-Region model inference profile. Create Amazon S3 buckets in each AWS Region the company operates in. Store a knowledge base in each respective S3 bucket. In each Region, configure Amazon Kendra to interact with the respective knowledge base. In each Region, configure an AWS Lambda function that uses Kendra and Amazon Bedrock to process AI assistant prompts.",
      "B": "Deploy an Amazon Bedrock model in each AWS Region the company operates in. Configure an Amazon Bedrock cross-Region model inference profile. Configure a vector database that uses Amazon Bedrock Knowledge Bases. Store the knowledge bases in Amazon S3 in each Region the company operates in.",
      "C": "Use AWS Outposts to deploy an outpost in each AWS Region the company operates in. Create Amazon S3 buckets to store knowledge bases in each corresponding Region. Deploy Amazon RDS configured as a vector database to each outpost. Deploy an Amazon Bedrock model with a cross-Region inference profile in a central Region.",
      "D": "Configure a knowledge base stored in the Amazon S3 Express One Zone storage class in each AWS Local Zone the company operates in. Use Amazon RDS to deploy a vector database in each Local Zone the company operates in. Deploy a large language model (LLM) to Amazon EC2 instances in each Local Zone. Configure the AI assistant to route prompts to the model in the respective Local Zone."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384255-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 73,
    "question": "한 회사가 금융 보고서를 처리하고 분석가를 위한 요약을 제공하는 생성형 AI(GenAI) 애플리케이션을 구축하고 있습니다. 애플리케이션은 두 개의 컴퓨팅 환경에서 실행되어야 합니다. 첫 번째 환경에서는 AWS Lambda 함수가 Python SDK를 사용하여 요청 시 보고서를 분석해야 합니다. 두 번째 환경에서는 Amazon EKS 컨테이너가 JavaScript SDK를 사용하여 일정에 따라 여러 보고서를 배치 처리해야 합니다. 애플리케이션은 다중 턴 상호 작용 전체에서 대화 컨텍스트를 유지하고, 환경 전체에서 동일한 기초 모델(FM)을 사용하고, 일관된 인증을 보장해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 환경에 대해 별도의 인증 방법을 사용하여 Amazon Bedrock InvokeModel API를 사용합니다. Amazon DynamoDB에 대화 상태를 저장합니다. 각 프로그래밍 언어에 대해 사용자 정의 I/O 포맷 논리를 사용합니다.",
      "B": "IAM 역할을 사용하는 공통 인증 메커니즘과 함께 두 환경에서 직접 Amazon Bedrock Converse API를 사용합니다. Amazon ElastiCache에 대화 상태를 저장합니다. 모델 매개변수에 대한 프로그래밍 언어별 래퍼를 생성합니다.",
      "C": "InvokeModel API를 사용하여 모든 모델 상호 작용을 처리하는 중앙화된 Amazon API Gateway REST API 엔드포인트를 생성합니다. 각 Lambda 함수 또는 EKS 컨테이너의 애플리케이션 프로세스 메모리에 상호 작용 기록을 저장합니다. 환경 변수를 사용하여 모델 매개변수를 구성합니다.",
      "D": "Amazon Bedrock Converse API와 IAM 역할을 사용하여 인증합니다. 요청 메시지 배열에 이전 메시지를 전달하여 대화 컨텍스트를 유지합니다. 프로그래밍 언어별 SDK를 사용하여 일관된 API 인터페이스를 설정합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Converse API — 다중 턴 대화를 네이티브하게 지원하는 Bedrock의 고수준 API\n▸ InvokeModel API — 저수준 API로 토큰 기반 제어 제공, 대화 상태 관리는 애플리케이션 책임\n▸ Conversational Context — 이전 메시지 배열을 통한 상태 유지 메커니즘\n\n【정답 포인트】\n▸ Converse API의 '메시지 배열' 파라미터가 다중 턴 관리의 표준 패턴\n▸ IAM 역할 기반 인증 → Lambda/EKS 환경 모두에서 일관된 권한 관리\n▸ SDK(Python/JavaScript)로 구현 → 각 언어의 자동 직렬화/역직렬화 지원\n\n【오답 체크】\n(A) InvokeModel + 별도 인증 → 복잡성 증가, SDK 이점 상실\n(B) ElastiCache 추가 → 불필요한 외부 상태 저장소, Converse API의 자체 컨텍스트 관리 미활용\n(C) API Gateway 레이어 → 오버헤드 증가, 다양한 컴퓨팅 환경 지원 복잡화\n\n【시험 포인트】\n▸ Converse vs InvokeModel: 다중 턴 대화는 Converse API가 표준 선택\n▸ 메시지 배열 매커니즘 → 상태 저장소 불필요, 무상태 설계 가능\n▸ IAM 역할 통일 → Lambda 기반 실행 역할과 EKS Pod 역할 동일 정책 적용",
    "en_q": "A company is building a generative AI (GenAI) application that processes financial reports and provides summaries for analysts. The application must run two compute environments. In one environment, AWS Lambda function must use the Python SDK to analyze reports on demand. In the second environment, Amazon EKS containers must use the JavaScript SDK to batch process multiple reports on a schedule. The application must maintain conversational context throughout multi-turn interactions, use the same foundation model (FM) across environments, and ensure consistent authentication. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use the Amazon Bedrock InvokeModel API with a separate authentication method for each environment. Store conversation states in Amazon DynamoDB. Use custom I/O formatting logic for each programming language.",
      "B": "Use the Amazon Bedrock Converse API directly in both environments with a common authentication mechanism that uses IAM roles. Store conversation states in Amazon ElastiCache. Creating programming language-specific wrappers for model parameters.",
      "C": "Create a centralized Amazon API Gateway REST API endpoint that handles all model interactions by using the InvokeModel API. Store interaction history in application process memory in each Lambda function or EKS container. Use environment variables to configure model parameters.",
      "D": "Use the Amazon Bedrock Converse API and IAM roles for authentication. Pass previous messages in the request messages array to maintain conversational context. Use programming language-specific SDKs to establish consistent API interfaces."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384258-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 74,
    "question": "한 회사가 전 세계의 학생들이 노트를 요약하도록 돕기 위해 AWS Lambda 함수를 사용하는 서버리스 애플리케이션을 구축하고 있습니다. 애플리케이션은 Amazon Bedrock을 통해 Anthropic Claude를 사용합니다. 회사는 각 시간대의 저녁 시간에 대부분의 트래픽이 발생함을 관찰했습니다. 사용자는 자신의 시간대에서 피크 사용 시간 동안 스로틀링 오류를 경험하고 있습니다. 회사는 애플리케이션의 지속적인 운영을 보장하여 스로틀링 문제를 해결해야 합니다. 솔루션은 애플리케이션 성능 품질을 유지해야 합니다. 회사는 낮은 트래픽 기간 동안 고정 시간 비용을 요구하지 않는 솔루션이 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "모델 오류를 모니터링하기 위해 사용자 정의 Amazon CloudWatch 메트릭을 생성합니다. 피크 트래픽 위에서 안전하게 높은 값으로 프로비저닝된 처리량을 설정합니다.",
      "B": "모델 오류를 모니터링하기 위해 사용자 정의 Amazon CloudWatch 메트릭을 생성합니다. 오류가 지정된 임계값을 초과할 때 호출을 백업 AWS 리전으로 리디렉션하기 위해 장애 조치 메커니즘을 설정합니다.",
      "C": "Amazon Bedrock에서 호출 로깅을 활성화합니다. Invocations, InputTokenCount, OutputTokenCount, 및 Invocation Throttles와 같은 주요 메트릭을 모니터링합니다. cross-Region 추론 엔드포인트 전체에 트래픽을 분산합니다.",
      "D": "Amazon Bedrock에서 호출 로깅을 활성화합니다. InvocationLatency, InvocationClientErrors, 및 InvocationServerErrors 메트릭을 모니터링합니다. 동일한 모델의 여러 버전 전체에 트래픽을 분산합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Provisioned Throughput — 고정 비용의 사전 예약 용량 방식\n▸ Cross-Region Inference — 여러 리전의 엔드포인트를 통한 부하 분산\n▸ Invocation Throttles — 스로틀링 사건을 나타내는 메트릭\n\n【정답 포인트】\n▸ \"고정 시간 비용 불필요\" → Provisioned Throughput(고정 요금제) 제외\n▸ Cross-Region 엔드포인트 → 시간대별 피크 분산 (저녁 시간대가 지역별로 다름)\n▸ Invocation Throttles 모니터링 → 스로틀링 이벤트를 직접 추적 가능\n\n【오답 체크】\n(A) Provisioned Throughput → 낮은 트래픽 기간에도 고정 비용 발생(요구사항 위배)\n(B) 장애 조치는 리전 간 지연 시간 증가, 근본 원인 해결 아님\n(D) 동일 모델 버전들은 동일 용량 정책 → 부하 분산 효과 미흡\n\n【시험 포인트】\n▸ 비용 조건 분석 → \"고정 시간 비용 불필요\" = On-Demand 방식 선호\n▸ 글로벌 시간대 피크 분산 → Cross-Region이 핵심 솔루션\n▸ Throttles 메트릭 → 성능 이슈의 원인을 정확히 진단 가능",
    "en_q": "A company is building a serverless application that uses AWS Lambda functions to help students around the world summarize notes. The application uses Anthropic Claude through Amazon Bedrock. The company observed that most of the traffic occurs during evenings in each time zone. Users report experiencing throttling errors during peak usage times in their times zones. The company needs to resolve the throttling issues by ensuring continuous operation of the application. The solution must maintain application performance quality. The company needs a solution that does not require a fixed hourly cost during low traffic periods. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create custom Amazon CloudWatch metrics to monitor model errors. Set provisioned throughput to a value that is safely higher than the peak traffic observed.",
      "B": "Create custom Amazon CloudWatch metrics to monitor model errors. Set up a failover mechanism to redirect invocations to a backup AWS Region when the errors exceed a specified threshold.",
      "C": "Enable invocation logging in Amazon Bedrock. Monitor key metrics such as Invocations, InputTokenCount, OutputTokenCount, and Invocation Throttles. Distribute traffic across cross-Region inference endpoints.",
      "D": "Enable invocation logging in Amazon Bedrock. Monitor InvocationLatency, InvocationClientErrors, and InvocationServerErrors metrics. Distribute traffic across multiple versions of the same model."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384275-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 75,
    "question": "한 회사가 다양한 특수 도구와 통합해야 하는 새로운 AI 기반 애플리케이션을 개발하고 있습니다. 이러한 도구는 현재 개발자의 로컬 머신에서 Model Context Protocol(MCP) 서버로 실행되며 호출 간에 상태를 유지하지 않습니다. 회사는 각 MCP 서버를 AWS Lambda 함수로 배포하여 회사의 프로덕션 애플리케이션을 지원할 계획입니다. 솔루션은 내부 애플리케이션과 인증된 타사 파트너 모두에 액세스할 수 있어야 합니다. 솔루션은 엄격한 인증 및 권한 부여 제어를 사용해야 합니다. 최소한의 운영 오버헤드로 이러한 요구 사항을 충족할 추가 단계는 무엇입니까?",
    "options": {
      "A": "Lambda Invoke API를 사용하여 사용자 정의 Lambda 호출 전송을 생성합니다. IAM 인증을 구현하고 InvokeFunction 권한을 인증된 사용자 및 역할에 부여합니다.",
      "B": "Amazon API Gateway REST API 엔드포인트를 통해 Lambda 함수를 노출합니다. 인증을 위해 API 키를 구현합니다. MCP 서버에 액세스해야 하는 애플리케이션을 구성하여 MCP 프로토콜 대신 표준 HTTP 요청을 사용합니다.",
      "C": "Lambda 함수 URL을 생성하고 사용자 정의 Streamable HTTP 전송 및 SigV4를 활성화합니다. AWS IAM 인증을 구현합니다. InvokeFunctionUrl 권한을 인증된 사용자 및 역할에 부여합니다.",
      "D": "Amazon API Gateway HTTP API 엔드포인트를 통해 Lambda 함수를 노출합니다. Streamable HTTP 전송을 사용합니다. OAuth 인증을 구현하기 위해 Amazon Cognito를 사용합니다. API Gateway를 구성하여 OAuth 토큰을 검증합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Lambda Function URLs — 네이티브 HTTPS 엔드포인트, 추가 서비스 불필요\n▸ SigV4 (Signature Version 4) — AWS IAM 기반 요청 서명 메커니즘\n▸ Streamable HTTP Transport — MCP 프로토콜의 바이너리/스트리밍 데이터 전송\n▸ 최소 운영 오버헤드 — 관리형 서비스 선호\n\n【정답 포인트】\n▸ Lambda Function URLs → API Gateway 대비 구성 단순화, 관리 오버헤드 최소\n▸ SigV4 + IAM → 기존 AWS 권한 체계 직접 활용, 추가 인증 기반 불필요\n▸ Streamable HTTP 지원 → MCP 프로토콜의 양방향 스트리밍 그대로 전달\n\n【오답 체크】\n(A) 커스텀 Lambda Invoke 전송 → 개발 및 운영 복잡도 높음, MCP HTTP 변환 미지원\n(B) API 키 기반 → 동적 권한 관리 어려움, 타사 파트너 권한 제어 제한적\n(D) API Gateway + Cognito → 추가 서비스 의존성, 운영 오버헤드 증가\n\n【시험 포인트】\n▸ \"최소 운영 오버헤드\" → 관리 대상 줄이기 (API Gateway 제거)\n▸ \"엄격한 인증/권한 부여\" → IAM 기반이 표준\n▸ MCP의 Streamable HTTP → Lambda Function URLs의 네이티브 지원",
    "en_q": "A company is developing a new AI-powered application that needs to integrate with various specialized tools. These tools currently run as Model Context Protocol (MCP) servers on the local machines of developers and do not maintain states between invocations. The company plans to deploy each MCP server as an AWS Lambda function to support the company's production application. The solution must be accessible to both internal applications and authorized third-party partners. The solution must use strict authentication and authorization controls. Which additional steps will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Create a custom Lambda invocation transport by using the Lambda Invoke API. Implement IAM authentication and grant InvokeFunction permissions to authorized users and roles.",
      "B": "Expose the Lambda functions through Amazon API Gateway REST API endpoints. Implement API keys for authentication. Configure the applications that need to access the MCP servers to use standard HTTP requests instead of the MCP protocol.",
      "C": "Create Lambda function URLs and enable a custom Streamable HTTP transport and SigV4. Implement AWS IAM authentication. Grant InvokeFunctionUrl permissions to authorized users and roles.",
      "D": "Expose the Lambda function through Amazon API Gateway HTTP API endpoints with the Streamable HTTP transport. Use Amazon Cognito to implement OAuth authentication. Configure API Gateway to validate OAuth tokens."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384284-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 76,
    "question": "한 회사가 고객 쿼리에 대한 실시간 응답을 제공하기 위해 Amazon Bedrock을 사용하는 생성형 AI(GenAI) 애플리케이션을 가지고 있습니다. 회사는 피크 트래픽 기간 동안 기초 모델(FM)에 대한 API 호출에서 간헐적인 장애를 발견했습니다. 회사는 일시적 오류를 처리하고 FM 성능에 대한 상세한 관찰 가능성을 제공하는 솔루션이 필요합니다. 솔루션은 스로틀링 이벤트 중 연쇄 장애를 방지하고 서비스 경계 전체에서 분산 추적을 제공하여 지연 시간 기여 요소를 식별해야 합니다. 솔루션은 또한 성능 문제와 특정 FM 특성의 상관관계를 활성화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "재시도 간 1초의 고정 지연으로 사용자 정의 재시도 메커니즘을 구현합니다. 애플리케이션의 오류율 및 지연 시간 메트릭을 모니터링하기 위해 Amazon CloudWatch 경보를 구성합니다.",
      "B": "표준 재시도 모드 및 지수 백오프(jitter 포함)로 AWS SDK를 구성합니다. 서비스 구성 요소를 식별하고 필터링하기 위해 주석이 포함된 AWS X-Ray 추적을 사용합니다.",
      "C": "모든 FM 응답의 클라이언트 측 캐싱을 구현합니다. 애플리케이션 코드에 사용자 정의 로깅 문을 추가하여 API 호출 기간을 기록합니다.",
      "D": "적응형 재시도 모드로 AWS SDK를 구성합니다. 스로틀링 이벤트를 모니터링하기 위해 AWS CloudTrail 분산 추적을 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Exponential Backoff with Jitter — 일시적 오류 처리의 표준 재시도 패턴\n▸ AWS X-Ray — 분산 추적으로 서비스 경계 전체 성능 분석\n▸ Annotations — X-Ray에서 메타데이터(FM 특성 등)를 태그하여 필터링 가능\n\n【정답 포인트】\n▸ 표준 재시도 모드 + Jitter → 일시적 오류 최적 처리, 연쇄 장애 방지\n▸ X-Ray Annotations → FM 특성별로 성능 추적 가능 (모델 이름, 버전 등)\n▸ 분산 추적 → 서비스 경계 전체의 지연 시간 병목 식별\n\n【오답 체크】\n(A) 고정 지연 → 대규모 시스템에서 부하 집중 현상 발생, Jitter 부재\n(C) 클라이언트 캐싱 + 커스텀 로깅 → 분산 추적 기능 부족, 서비스 간 가시성 없음\n(D) CloudTrail은 관리 이벤트 추적용 → 데이터 평면 성능 분석 불가, API 호출 성능 추적 미흡\n\n【시험 포인트】\n▸ \"일시적 오류\" → 재시도 정책 필수 (표준 재시도 모드가 AWS 권장)\n▸ \"분산 추적\" → CloudTrail 아닌 X-Ray (데이터 평면 추적)\n▸ \"FM 특성과의 상관관계\" → X-Ray Annotations로 메타데이터 태깅",
    "en_q": "A company has a generative AI (GenAI) application that uses Amazon Bedrock to provide real-time responses to customer queries. The company has noticed intermittent failures with API calls to foundation models (FMs) during peak traffic periods. The company needs a solution to handle transient errors and provide detailed observability into FM performance. The solution must prevent cascading failures during throttling events and provide distributed tracing across service boundaries to identify latency contributors. The solution must also enable correlation of performance issues with specific FM characteristics. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Implement a custom retry mechanism with a fixed delay of 1 second between retries. Configure Amazon CloudWatch alarms to monitor the application's error rates and latency metrics.",
      "B": "Configure the AWS SDK with standard retry mode and exponential backoff with jitter. Use AWS X-Ray tracing with annotations to identify and filter service components.",
      "C": "Implement client-side caching of all FM responses. Add custom logging statements in the application code to record API call durations.",
      "D": "Configure the AWS SDK with adaptive retry mode. Use AWS CloudTrail distributed tracing to monitor throttling events."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384253-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 77,
    "question": "한 회사가 AWS에서 비디오 분석 플랫폼을 구축하고 있습니다. 플랫폼은 Amazon Rekognition과 Amazon Bedrock을 사용하여 대용량 비디오 아카이브를 분석합니다. 플랫폼은 미리 정의된 개인정보 보호 표준을 준수해야 합니다. 플랫폼은 또한 안전한 모델 I/O를 사용하고, 기초 모델(FM) 접근 패턴을 제어하고, 누가 무엇에 접근했는지 그리고 언제 접근했는지 감시해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "Amazon Bedrock 모델 API 호출에 대한 VPC 엔드포인트를 구성합니다. 프롬프트 및 응답의 유해하거나 미승인 콘텐츠를 필터링하기 위해 Amazon Bedrock Guardrails를 구현합니다. 감사 목적으로 모든 에이전트 및 모델 호출을 추적하기 위해 Amazon Bedrock 추적 이벤트를 사용합니다. 추적을 Amazon CloudWatch Logs로 내보내 모델 사용의 감사 레코드로 사용합니다. 모든 프롬프트 및 출력을 AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화를 통해 Amazon S3에 저장합니다.",
      "B": "속성 기반 제어를 사용하여 IAM으로 접근 제어를 정의하여 부서를 특정 권한에 매핑합니다. Amazon Bedrock 모델 API 호출에 대한 VPC 엔드포인트를 구성합니다. IAM 조건 키를 사용하여 특정 GuardrailIdentifier 및 ModelId 값을 강제합니다. S3 객체 및 KMS 키 사용 활동에 대한 관리 및 데이터 이벤트를 캡처하도록 AWS CloudTrail을 구성합니다. S3 서버 액세스 로깅을 활성화하여 비디오 아카이브와의 파일 수준 상호 작용을 기록합니다. 모든 CloudTrail 로그를 AWS CloudTrail Lake로 보냅니다. Amazon Bedrock, Amazon Rekognition, AWS KMS의 예기치 않은 활동을 감지하고 경고하도록 Amazon CloudWatch 경보를 설정합니다.",
      "C": "VPC 엔드포인트 정책을 사용하여 서비스에 대한 액세스를 제한합니다. AWS Config를 사용하여 리소스 변경 및 보안 규칙 준수를 추적합니다. AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화를 사용합니다. 모델의 I/O를 별도의 Amazon S3 버킷에 저장합니다. S3 서버 액세스 로깅을 활성화하여 파일 수준 상호 작용을 추적합니다.",
      "D": "API 호출 패턴을 분석하고 Amazon Bedrock, Amazon Rekognition, Amazon S3, AWS KMS 전체의 비정상 활동을 감지하기 위해 AWS CloudTrail Insights를 구성합니다. 비디오 아카이브를 스캔하고 분류하기 위해 Amazon Macie를 배포합니다. AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화를 사용하여 저장된 모든 데이터를 암호화합니다. KMS API 사용 이벤트를 캡처하도록 CloudTrail을 구성합니다. CloudTrail Insights 이상 및 Macie 결과를 처리하도록 Amazon EventBridge 규칙을 구성합니다. 잠재적 보안 문제가 감지될 때 자동화된 알림 및 보안 응답을 트리거하도록 CloudWatch 경보를 사용합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Attribute-Based Access Control (ABAC) — 부서/팀 속성 기반 권한 관리\n▸ CloudTrail Lake — CloudTrail 로그의 중앙화된 저장소 및 쿼리 가능 형식\n▸ GuardrailIdentifier + ModelId 조건 키 — FM 접근 패턴 세밀 제어\n▸ S3 Server Access Logging — 파일 수준의 상세 감시 기록\n\n【정답 포인트】\n▸ ABAC로 부서별 권한 구분 → 확장 가능한 접근 제어\n▸ VPC 엔드포인트 → 데이터가 인터넷을 거치지 않음 (안전한 모델 I/O)\n▸ CloudTrail Lake + CloudWatch 경보 → 종합적 감시 및 즉시 경고\n▸ S3 Server Access Logging → \"누가, 무엇을, 언제\" 상세 추적\n\n【오답 체크】\n(A) Guardrails + CloudWatch Logs만으로는 상세한 감시 불가, S3 파일 접근 추적 미흡\n(C) VPC 엔드포인트 정책은 제어 수단으로 제한적, AWS Config는 준수 추적(감시 아님)\n(D) Macie(데이터 분류)는 과도함, CloudTrail Insights는 이상 감지(세밀한 기록 아님)\n\n【시험 포인트】\n▸ \"개인정보 보호 표준\" → 접근 제어(ABAC)와 감시(CloudTrail) 투트랙\n▸ \"FM 접근 패턴 제어\" → IAM 조건 키로 모델/가드레일 강제\n▸ \"감사\" → CloudTrail Lake(쿼리 가능) + S3 로깅(파일 수준)",
    "en_q": "A company is building a video analysis platform on AWS. The platform will analyze a large video archive by using Amazon Rekognition and Amazon Bedrock. The platform must comply with predefined privacy standards. The platform must also use secure model I/O, control foundation model (FM) access patterns, and provide an audit of who accessed what and when. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure VPC endpoints for Amazon Bedrock model API calls. Implement Amazon Bedrock Guardrails to filter harmful or unauthorized content in prompts and responses. Use Amazon Bedrock trace events to track all agent and model invocations for auditing purposes. Export the traces to Amazon CloudWatch Logs as an audit record of model usage. Store all prompts and outputs in Amazon S3 with server-side encryption with AWS KMS keys (SSE-KMS).",
      "B": "Define access control by using IAM with attribute-based controls to map departments to specific permissions. Configure VPC endpoints for Amazon Bedrock model API calls. Use IAM condition keys to enforce specific GuardrailIdentifier and ModelId values. Configure AWS CloudTrail to capture management and data events for S3 objects and KMS key usage activities. Enable S3 server access logging to record detailed file-level interactions with the video archives. Send all CloudTrail logs to AWS CloudTrail Lake. Set up Amazon CloudWatch alarms to detect and alert on unexpected activity from Amazon Bedrock, Amazon Rekognition, and AWS KMS.",
      "C": "Restrict access to services by using VPC endpoint policies. Use AWS Config to track resource changes and compliance with security rules. Use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt data at rest. Store the model's I/O in separate Amazon S3 buckets. Enable S3 server access logging to track file-level interactions.",
      "D": "Configure AWS CloudTrail Insights to analyze API call patterns across accounts and detect anomalous activity in Amazon Bedrock, Amazon Rekognition, Amazon S3, and AWS KMS. Deploy Amazon Macie to scan and classify the video archive. Use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt all stored data. Configure CloudTrail to capture KMS API usage events for audit purposes. Configure Amazon EventBridge rules to process CloudTrail Insights anomalies and Macie findings. Use CloudWatch alarms to trigger automated notifications and security responses when potential security issues are detected."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384254-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 78,
    "question": "한 보험 회사는 기존 Amazon SageMaker AI 인프라를 사용하여 고객이 보험료 예측을 할 수 있도록 하는 웹 기반 애플리케이션을 지원합니다. 회사는 SageMaker AI 모델을 학습하는 데 사용되는 고객 데이터를 Amazon S3 버킷에 저장합니다. 데이터 세트가 빠르게 증가하고 있습니다. 회사는 모델을 지속적으로 재학습하는 솔루션을 원합니다. 솔루션은 직원이 새로운 고객 데이터 파일을 S3 버킷에 업로드할 때 모델을 자동으로 재학습하고 애플리케이션에 재배포해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
    "options": {
      "A": "각 업로드된 파일에서 ETL 작업을 실행하기 위해 AWS Glue를 사용합니다. 재학습 후 모델을 재배포하기 위해 AWS SDK를 사용하여 SageMaker AI 모델 엔드포인트를 호출하도록 ETL 작업을 구성합니다. 엔드포인트와 함께 실시간 추론을 사용합니다.",
      "B": "직원이 새 파일을 업로드할 때 이벤트를 생성하기 위해 AWS Lambda 함수 및 웹훅 핸들러를 생성합니다. 업데이트된 고객 데이터 세트에서 재학습 후 모델을 재배포하도록 SageMaker Pipelines를 구성합니다. Amazon EventBridge를 사용하여 이벤트 버스를 생성합니다. Lambda 함수 이벤트를 소스로 설정하고 SageMaker Pipelines를 대상으로 설정합니다.",
      "C": "직원이 S3 버킷에 새 파일을 업로드할 때 고객 데이터를 검색하기 위해 AWS SDK 통합을 사용하는 AWS Step Functions Express 워크플로우를 생성합니다. SageMaker Data Wrangler 흐름을 사용하여 S3 버킷의 데이터를 SageMaker Autopilot로 내보냅니다. 업데이트된 고객 데이터 세트에서 재학습 후 모델을 재배포하도록 SageMaker Autopilot를 사용합니다.",
      "D": "AWS Step Functions Standard 워크플로우를 생성합니다. 직원이 S3 버킷에 새 파일을 업로드할 때 응답하기 위해 AWS Lambda 함수를 호출하도록 첫 번째 상태를 구성합니다. 재학습 후 모델을 재배포하도록 SageMaker Pipelines의 파이프라인을 사용합니다. 첫 번째 상태가 응답을 받으면 워크플로우의 다음 상태를 사용하여 파이프라인을 실행합니다."
    },
    "answer": "D",
    "explanation": "【핵심 용어】\n▸ Step Functions Standard — 장기 실행 워크플로우, 동기식 작업 흐름 제어\n▸ SageMaker Pipelines — 모델 재학습 및 배포의 정규화된 MLOps 파이프라인\n▸ S3 이벤트 트리거 — 파일 업로드 감지 메커니즘\n\n【정답 포인트】\n▸ Step Functions Standard → 재학습/배포 등 다단계 프로세스 상태 관리 최적\n▸ S3 업로드 → Lambda 감지 → SageMaker Pipelines 실행 → 재배포의 직관적 흐름\n▸ 기존 SageMaker 인프라 활용 → Pipelines는 기본 MLOps 도구\n\n【오답 체크】\n(A) Glue + 엔드포인트 호출 → 모델 배포 프로세스 불명확, 재학습 메커니즘 부재\n(B) EventBridge + Lambda → 파이프라인 실행 중간에 추가 레이어, 복잡도 증가\n(C) Step Functions Express + Data Wrangler + Autopilot → 과도한 오버헤드, 기존 SageMaker 모델과 미통합\n\n【시험 포인트】\n▸ \"지속적 재학습\" → SageMaker Pipelines가 표준 MLOps 솔루션\n▸ 다단계 오케스트레이션 → Step Functions Standard(Express 아님)\n▸ S3 이벤트 → Lambda 동작 → Pipelines 파이프라인 체인의 패턴 인식",
    "en_q": "An insurance company uses existing Amazon SageMaker AI infrastructure to support a web-based application that allows customers to predict what their insurance premiums will be. The company stores customer data that is used to train the SageMaker AI model in an Amazon S3 bucket. The dataset is growing rapidly. The company wants a solution to continuously re-train the model. The solution must automatically re-train and re-deploy the model to the application when an employee uploads a new customer data file to the S3 bucket. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use AWS Glue to run an ETL job on each uploaded file. Configure the ETL job to use the AWS SDK to invoke the Sage Maker AI model endpoint. Use real-time inference with the endpoint to re-deploy the model after it is re-trained on the updated customer dataset.",
      "B": "Create an AWS Lambda function and webhook handlers to generate an event when an employee uploads a new file. Configure SageMaker Pipelines to re-deploy the model after it is re-trained on the updated customer dataset. Use Amazon EventBridge to create an event bus. Set the Lambda function event as the source and SageMaker Pipelines as the target.",
      "C": "Create an AWS Step Functions Express workflow with AWS SDK integrations to retrieve the customer data from the S3 bucket when an employee uploads a new file to the S3 bucket. Use a SageMaker Data Wrangler flow to export the data from the S3 bucket to SageMaker Autopilot. Use SageMaker Autopilot to re-deploy the model after it has been re-trained on the updated customer dataset.",
      "D": "Create an AWS Step Functions Standard workflow. Configure the first state to call an AWS Lambda function to respond when an employee uploads a new file to the S3 bucket. Use a pipeline in SageMaker Pipelines to re-deploy the model after it has been re-trained on the updated customer dataset. Use the next state in the workflow to run the pipeline when the first state receives a response."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384274-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 79,
    "question": "회사가 Amazon Bedrock을 사용하여 의료 정보를 사용자에게 제공하는 Retrieval Augmented Generation(RAG) 기반 시스템을 구현합니다. 회사는 여러 청킹 전략을 비교하고, 두 개의 기초 모델(FM)의 생성 품질을 평가하고, 배포를 위한 품질 임계값을 적용해야 합니다. 이 요구사항을 충족할 Amazon Bedrock 평가 구성은 어떤 것입니까?",
    "options": {
      "A": "Anthropic Claude Sonnet 지원 버전을 평가기 모델로 사용하는 검색 전용 평가 작업을 생성합니다. 문맥 관련성 및 문맥 커버리지에 대한 메트릭을 구성합니다. 별도의 CI/CD 파이프라인에서 배포 임계값을 정의합니다.",
      "B": "사용자 정의 정확도(k)와 LLM-as-a-judge 메트릭(1-5 척도)을 사용하는 검색 및 생성 평가 작업을 생성합니다. 평가 데이터셋에 각 청킹 전략을 포함합니다. Anthropic Claude Sonnet 지원 버전을 사용하여 두 FM의 응답을 평가합니다.",
      "C": "각 청킹 전략과 FM 조합에 대해 별도의 평가 작업을 생성합니다. Amazon Bedrock 내장 메트릭(정확성 및 완전성)을 사용합니다. 배포 승인 전에 점수를 수동으로 검토합니다.",
      "D": "검색 품질을 평가하는 여러 검색 전용 평가 작업을 사용하는 파이프라인을 설정합니다. Amazon Nova Pro를 LLM-as-a-judge 모델로 사용하는 두 FM에 대한 별도의 평가 작업을 생성합니다. 충실성 및 인용 정확도 메트릭을 기반으로 평가합니다."
    },
    "answer": "B",
    "explanation": "이 문제는 Amazon Bedrock의 평가 기능을 통한 RAG 시스템 최적화를 다룹니다.\n\n정답 B는 검색-생성 평가 작업(retrieve-and-generate evaluation job)을 사용하여 청킹 전략과 FM 품질을 동시에 검증합니다.\n\nLLM-as-a-judge 메트릭(1-5 척도)은 생성된 응답의 품질을 정량화하며, Claude Sonnet을 평가기로 사용하면 신뢰성 있는 평가가 가능합니다.\n\n평가 데이터셋에 각 청킹 전략을 포함하면 어떤 전략이 최적인지 비교할 수 있습니다.\n\nA는 검색만 평가하므로 생성 품질을 놓치고, C는 수동 검토로 확장성이 떨어지며, D는 Amazon Nova Pro가 평가기로 적합하지 않습니다.\n\nAIP-C01 시험의 핵심은 Bedrock의 평가 자동화와 메트릭 선택 이해입니다.",
    "en_q": "A company uses Amazon Bedrock to implement a Retrieval Augmented Generation (RAG)-based system to serve medical information to users. The company needs to compare multiple chunking strategies, evaluate the generation quality of two foundation models (FMs), and enforce quality thresholds for deployment. Which Amazon Bedrock evaluation configuration will meet these requirements?",
    "en_opts": {
      "A": "Create a retrieve-only evaluation job that uses a supported version of Anthropic Claude Sonnet as the evaluator model. Configure metrics for context relevance and context coverage. Define deployment thresholds in a separate CI/CD pipeline.",
      "B": "Create a retrieve-and-generate evaluation job that uses custom precision at k metrics and an LLM-as-a-judge metric that uses a scale of 1-5. Include each chunking strategy in the evaluation dataset. Use a supported version of Anthropic Claude Sonnet to evaluate responses from both FMs.",
      "C": "Create a separate evaluation job for each chunking strategy and FM combination. Use Amazon Bedrock built-in metrics for correctness and completeness. Manually review scores before deployment approval.",
      "D": "Set up a pipeline that uses multiple retrieve-only evaluation jobs to assess retrieval quality. Create separate evaluation jobs for both FMs that use Amazon Nova Pro as the LLM-as-a-judge model. Evaluate based on faithfulness and citation precision metrics."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384257-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 80,
    "question": "야생동물 보전 기관이 전 세계 동물원을 운영합니다. 기관은 동물 행동을 모니터링하기 위해 다양한 센서, 추적기, 시청각 기록기를 사용합니다. 기관은 멀티모달 데이터를 수집하여 동물 행동을 연구할 수 있는 생성 AI(GenAI) 어시스턴트를 출시하려고 합니다. GenAI 어시스턴트는 자연어 쿼리를 지원하고, 추측성 행동 해석을 피하고, 윤리적 연구 감시를 위한 감시 로그를 유지해야 합니다. 이 요구사항을 충족할 솔루션은 어떤 것입니까?",
    "options": {
      "A": "원본 비디오를 Amazon Rekognition에 수집하여 동물의 자세와 표정을 감지합니다. Amazon Data Firehose를 사용하여 센서 및 GPS 데이터를 Amazon S3 데이터 레이크로 스트리밍합니다. AWS Systems Manager Parameter Store에 저장된 기본 템플릿을 사용하여 Amazon Bedrock 기초 모델(FM)에 프롬프트를 제공합니다. IAM 정책을 사용하여 액세스를 제어합니다. AWS CloudTrail을 감시 로깅에 사용합니다.",
      "B": "Amazon SageMaker Processing 및 Amazon Transcribe를 사용하여 멀티모달 데이터를 전처리합니다. 요약을 Amazon Bedrock Retrieval Augmented Generation(RAG) 지식 기반에 수집합니다. Amazon Bedrock 보안정책(guardrails)을 적용하여 추측성 출력을 제한합니다. AWS AppConfig를 사용하여 프롬프트 템플릿을 관리합니다. AWS CloudTrail을 사용하여 감시를 위한 연구 활동을 기록합니다.",
      "C": "Amazon OpenSearch Serverless를 사용하여 행동 로그 및 원격측정 이벤트를 인덱싱합니다. Amazon Comprehend를 사용하여 엔티티를 추출합니다. Amazon Bedrock을 사용하여 질문에 답변할 계층을 구축합니다. 연구 요약을 OpenSearch Serverless 문서에 임베딩합니다. IAM을 사용하여 액세스를 제어합니다. AWS CloudTrail을 사용하여 AI 어시스턴트와의 사용자 상호작용을 기록합니다.",
      "D": "Amazon Q Business를 구성하여 Amazon S3, Amazon Kinesis, Amazon SageMaker Feature Store에서 데이터를 연합합니다. Amazon EventBridge를 구성하여 데이터 수집 작업을 호출합니다. 사용자에게 반환하기 전에 윤리적 규정 준수를 위해 대형 언어 모델(LLM) 출력을 필터링하는 사용자 정의 AWS Lambda 함수를 사용합니다."
    },
    "answer": "B",
    "explanation": "멀티모달 데이터 처리와 안전성 제어가 핵심입니다.\n\n정답 B는 세 가지 요구사항을 모두 충족합니다: (1) SageMaker Processing과 Transcribe로 비디오, 오디오, 센서 데이터를 전처리하고 요약 생성, (2) RAG 지식 기반으로 정보 접근 제한 및 할루시네이션 방지, (3) Bedrock guardrails로 추측성 출력 차단, (4) AppConfig로 중앙 집중식 프롬프트 관리, (5) CloudTrail로 감시 로깅. A는 전처리 없이 원본 데이터를 사용하고 보안정책 미적용, C는 추측성 필터링 메커니즘 부재, D는 Amazon Q Business가 멀티모달 데이터 처리에 최적화되지 않았습니다.\n\nBedrock guardrails와 RAG 아키텍처의 조합이 AIP-C01에서 자주 출제됩니다.",
    "en_q": "A wildlife conservation agency operates zoos globally. The agency uses various sensors, trackers, and audiovisual recorders to monitor animal behavior. The agency wants to launch a generative AI (GenAI) assistant that can ingest multimodal data to study animal behavior. The GenAI assistant must support natural language queries, avoid speculative behavioral interpretations, and maintain audit logs for ethical research audits. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Ingest raw videos into Amazon Rekognition to detect animal postures and expressions. Use Amazon Data Firehose to stream sensor and GPS data into an Amazon S3 data lake. Prompt an Amazon Bedrock foundation model (FM) by using basic templates that are stored in AWS Systems Manager Parameter Store. Use IAM policies to control access. Use AWS CloudTrail for audit logging.",
      "B": "Use Amazon SageMaker Processing and Amazon Transcribe to pre-process multimodal data. Ingest summaries into an Amazon Bedrock Retrieval Augmented Generation (RAG) knowledge base. Apply Amazon Bedrock guardrails to restrict speculative outputs. Use AWS AppConfig to manage prompt templates. Use AWS CloudTrail to log research activity for audits.",
      "C": "Use Amazon OpenSearch Serverless to index behavioral logs and telemetry events. Use Amazon Comprehend to extract entities. Use Amazon Bedrock to build a layer to answer questions. Embed study summaries into OpenSearch Serverless documents. Use IAM to control access. Use AWS CloudTrail to log user interactions with the AI assistant.",
      "D": "Configure Amazon Q Business to federate data across Amazon S3, Amazon Kinesis, and Amazon SageMaker Feature Store. Configure Amazon EventBridge to invoke data ingestion jobs. Use custom AWS Lambda functions to filter large language model (LLM) outputs for ethical compliance before returning results to users."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384265-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 81,
    "question": "회사가 모든 기능이 활성화된 AWS Organizations의 조직을 사용하여 여러 AWS 계정을 관리합니다. 직원들이 여러 계정에서 Amazon Bedrock을 사용합니다. 회사는 특정 주제와 독점 정보가 Amazon Bedrock 모델에 대한 프롬프트에 포함되지 않도록 방지해야 합니다. 회사는 직원들이 승인된 Amazon Bedrock 모델만 사용할 수 있도록 해야 합니다. 회사는 중앙에서 직원의 IAM 역할을 관리합니다. 이 요구사항을 충족할 솔루션 조합은 어떤 것입니까? (2개 선택)",
    "options": {
      "A": "각 직원의 IAM 역할에 대한 IAM 권한 경계를 생성합니다. 권한 경계를 구성하여 Amazon Bedrock 모델을 호출하려면 승인된 Amazon Bedrock 보안정책 식별자가 필요하도록 합니다. 직원들이 승인된 모델만 사용할 수 있도록 하는 SCP를 생성합니다.",
      "B": "직원들이 승인된 모델만 사용할 수 있도록 하는 SCP를 생성합니다. SCP를 구성하여 직원들이 모델을 호출하는 호출에서 보안정책 식별자를 지정하도록 요구합니다.",
      "C": "중앙에 배포된 보안정책 식별자가 모델 호출에 지정되어 있지 않으면 직원이 모델을 호출하지 못하도록 하는 SCP를 생성합니다. 각 직원의 IAM 역할에 대한 권한 경계를 생성하여 각 직원이 승인된 모델만 호출할 수 있도록 합니다.",
      "D": "차단 필터링 정책이 있는 사용자 정의 Amazon Bedrock 보안정책을 생성합니다. Stack Sets를 사용하여 조직의 각 계정에 보안정책을 배포합니다.",
      "E": "마스킹 필터링 정책이 있는 사용자 정의 Amazon Bedrock 보안정책을 생성합니다. Stack Sets를 사용하여 조직의 각 계정에 보안정책을 배포합니다."
    },
    "answer": "BD",
    "explanation": "AWS Organizations 환경에서 다중 계정 거버넌스와 Bedrock 보안정책 시행을 다룹니다.\n\n정답은 B와 D의 조합입니다.\n\nB는 SCP를 사용하여 조직 수준에서 모든 계정의 직원들이 보안정책 식별자를 명시적으로 지정하도록 강제합니다(정책 강제). D는 차단 필터링 정책을 가진 사용자 정의 보안정책을 CloudFormation Stack Sets로 모든 계정에 배포하여 구체적인 콘텐츠 필터링을 구현합니다.\n\nA는 권한 경계와 SCP의 조합이지만 보안정책 배포 메커니즘이 없고, C는 두 가지 개념을 섞어서 설계 일관성이 떨어집니다.\n\nE는 마스킹(redaction)인데 시험의 요구사항은 '방지'이므로 차단이 더 적절합니다.\n\n다중 선택 문제로서 조직 수준 통제\n(B) 와 계정 수준 배포\n(D) 의 이중 전략이 핵심입니다.",
    "en_q": "A company uses an organization in AWS Organizations with all features enabled to manage multiple AWS accounts. Employees use Amazon Bedrock across multiple accounts. The company must prevent specific topics and proprietary information from being included in prompts to Amazon Bedrock models. The company must ensure that employees can use only approved Amazon Bedrock models. The company centrally manages IAM roles for employees. Which combination of solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Create an IAM permissions boundary for each employee's IAM role. Configure the permissions boundary to require an approved Amazon Bedrock guardrail identifier to invoke Amazon Bedrock models. Create an SCP that allows employees to use only approved models.",
      "B": "Create an SCP that allows employees to use only approved models. Configure the SCP to require employees to specify a guardrail identifier in calls to invoke an approved model.",
      "C": "Create an SCP that prevents an employee from invoking a model if a centrally deployed guardrail identifier is not specified in a call to the model. Create a permissions boundary on each employee's IAM role that allows each employee to invoke only approved models.",
      "D": "Use AWS CloudFormation to create a custom Amazon Bedrock guardrail that has a block filtering policy. Use stack sets to deploy the guardrail to each account in the organization.",
      "E": "Use AWS CloudFormation to create a custom Amazon Bedrock guardrail that has a mask filtering policy. Use stack sets to deploy the guardrail to each account in the organization."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384251-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 82,
    "question": "회사가 관리형 모델 서비스에서 호스팅되는 기초 모델(FM)을 사용하는 생성 AI(GenAI) 애플리케이션용 API를 설계합니다. API는 지연 시간을 줄이기 위해 응답을 스트리밍하고, 계산 리소스 사용을 관리하기 위해 토큰 제한을 적용하고, 모델 타임아웃 및 부분 응답을 처리하기 위해 재시도 로직을 구현해야 합니다. 운영 오버헤드가 가장 적으면서 이 요구사항을 충족할 솔루션은 어떤 것입니까?",
    "options": {
      "A": "Amazon API Gateway HTTP API를 Amazon Bedrock을 호출하는 AWS Lambda 함수와 통합합니다. Lambda 응답 스트리밍을 사용하여 응답을 스트리밍합니다. Lambda 함수 내에서 토큰 제한을 적용합니다. Lambda 및 API Gateway 타임아웃 구성을 사용하여 모델 타임아웃에 대한 재시도 로직을 구현합니다.",
      "B": "Amazon API Gateway HTTP API를 Amazon Bedrock에 직접 연결합니다. 클라이언트 측 폴링을 사용하여 스트리밍을 시뮬레이션합니다. 프론트엔드에서 토큰 제한을 적용합니다. API Gateway 통합 설정을 사용하여 재시도 동작을 구성합니다.",
      "C": "Amazon API Gateway WebSocket API를 컨테이너화된 추론 서버를 호스팅하는 Amazon ECS 서비스에 연결합니다. WebSocket 프로토콜을 사용하여 응답을 스트리밍합니다. Amazon ECS 내에서 토큰 제한을 적용합니다. ECS 작업 수명 주기 훅 및 재시작 정책을 사용하여 모델 타임아웃을 처리합니다.",
      "D": "Amazon API Gateway REST API를 Amazon Bedrock을 호출하는 AWS Lambda 함수와 통합합니다. Lambda 응답 스트리밍을 사용하여 응답을 스트리밍합니다. Lambda 함수 내에서 토큰 제한을 적용합니다. Lambda 및 API Gateway 타임아웃 구성을 사용하여 재시도 로직을 구현합니다."
    },
    "answer": "A",
    "explanation": "Bedrock 기반 API의 스트리밍, 토큰 관리, 재시도 로직을 통합적으로 다룹니다.\n\n정답 A는 HTTP API(REST API보다 저가이고 더 빠름), Lambda 응답 스트리밍(진정한 스트리밍 지원), 토큰 제한(Lambda에서 요청 전에 검증), 재시도 로직(Lambda와 API Gateway 타임아웃 조합)으로 모든 요구사항을 충족합니다.\n\nB는 클라이언트 측 폴링은 실제 스트리밍이 아니고 프론트엔드 토큰 제한은 보안 취약점, C는 ECS 관리 오버헤드가 크고 Bedrock 직접 사용보다 복잡, D는 REST API가 HTTP API보다 더 무겁습니다.\n\nAIP-C01에서는 'LEAST operational overhead'라는 표현이 나올 때 관리형 서비스 우선(Bedrock, Lambda) > 자체 관리(ECS, EC2)를 기억해야 합니다.",
    "en_q": "A company is designing an API for a generative AI (GenAI) application that uses a foundation model (FM) that is hosted on a managed model service. The API must stream responses to reduce latency, enforce token limits to manage compute resource usage, and implement retry logic to handle model timeouts and partial responses. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Integrate an Amazon API Gateway HTTP API with an AWS Lambda function to invoke Amazon Bedrock. Use Lambda response streaming to stream responses. Enforce token limits within the Lambda function. Implement retry logic for model timeouts by using Lambda and API Gateway timeout configurations.",
      "B": "Connect an Amazon API Gateway HTTP API directly to Amazon Bedrock. Simulate streaming by using client-side polling. Enforce token limits on the frontend. Configure retry behavior by using API Gateway integration settings.",
      "C": "Connect an Amazon API Gateway WebSocket API to an Amazon ECS service that hosts a containerized inference server. Stream responses by using the WebSocket protocol. Enforce token limits within Amazon ECS. Handle model timeouts by using ECS task lifecycle hooks and restart policies.",
      "D": "Integrate an Amazon API Gateway REST API with an AWS Lambda function that invokes Amazon Bedrock. Use Lambda response streaming to stream responses. Enforce token limits within the Lambda function. Implement retry logic by using Lambda and API Gateway timeout configurations."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384276-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 83,
    "question": "소매 회사가 Amazon Bedrock을 사용하여 고객 서비스 AI 어시스턴트를 개발합니다. 분석 결과 고객 문의의 70%는 더 작은 모델이 효과적으로 처리할 수 있는 간단한 제품 질문이고, 30%는 고급 추론이 필요한 복잡한 반품 정책 질문입니다. 회사는 문의 복잡성을 기반으로 고객 문의를 적절한 모델로 자동으로 라우팅하는 비용 효율적인 모델 선택 프레임워크를 구현하려고 합니다. 프레임워크는 높은 고객 만족도를 유지하고 응답 지연 시간을 최소화해야 합니다. 이 요구사항을 충족하면서 구현 노력이 가장 적을 솔루션은 어떤 것입니까?",
    "options": {
      "A": "작은 기초 모델(FM)을 사용하여 각 문의의 복잡성을 분류하는 다단계 아키텍처를 생성합니다. 간단한 문의를 더 작고 비용 효율적인 모델로 라우팅합니다. 복잡한 문의를 더 크고 능력 있는 모델로 라우팅합니다. AWS Lambda 함수를 사용하여 라우팅 로직을 처리합니다.",
      "B": "Amazon Bedrock 지능형 프롬프트 라우팅을 사용하여 자동으로 문의를 분석합니다. 간단한 제품 문의를 더 작은 모델로 라우팅하고, 복잡한 반품 정책 문의를 더 능력 있는 더 큰 모델로 라우팅합니다.",
      "C": "Amazon Bedrock 중형 기초 모델(FM)을 사용하는 단일 모델 솔루션을 구현합니다(온디맨드 가격). 모델 프롬프트에 특수 지침을 포함하여 같은 모델을 사용하여 간단한 문의와 복잡한 문의를 모두 처리합니다.",
      "D": "간단한 문의와 복잡한 문의에 대해 별도의 Amazon Bedrock 엔드포인트를 생성합니다. 키워드 감지를 기반으로 규칙 기반 라우팅 시스템을 구현합니다. 더 작은 모델에는 온디맨드 가격, 더 큰 모델에는 프로비저닝된 처리량을 사용합니다."
    },
    "answer": "B",
    "explanation": "모델 라우팅과 비용 최적화를 결합한 문제입니다.\n\n정답 B는 'Amazon Bedrock intelligent prompt routing'을 활용하여 자동으로 문의 복잡성을 분석하고 라우팅하는 관리형 기능을 사용합니다.\n\n이는 추가 코드나 Lambda 함수 관리 없이 Bedrock 네이티브 기능으로 구현되므로 구현 노력이 가장 적습니다.\n\n70% 간단 문의 → 소형 모델(저비용), 30% 복잡 문의 → 대형 모델(높은 품질)로 비용과 품질의 최적균형을 달성합니다.\n\nA는 Lambda 함수 작성이 필요한 추가 개발, C는 단일 모델로 비용 절감 불가, D는 수동 규칙 기반 라우팅으로 정확도 저하 및 유지보수 부담이 큽니다.\n\n'intelligent prompt routing'은 AIP-C01에서 새로 강조되는 Bedrock 기능입니다.",
    "en_q": "A retail company is using Amazon Bedrock to develop a customer service AI assistant. Analysis shows that 70% of customer inquiries are simple product questions that a smaller model can effectively handle. However, 30% of inquiries are complex return policy questions that require advanced reasoning. The company wants to implement a cost-effective model selection framework to automatically route customer inquiries to appropriate models based on inquiry complexity. The framework must maintain high customer satisfaction and minimize response latency. Which solution will meet these requirements with the LEAST implementation effort?",
    "en_opts": {
      "A": "Create a multi-stage architecture that uses a small foundation model (FM) to classify the complexity of each inquiry. Route simple inquiries to a smaller, more cost-effective model. Route complex inquiries to a larger, more capable model. Use AWS Lambda functions to handle the routing logic.",
      "B": "Use Amazon Bedrock intelligent prompt routing to automatically analyze inquiries. Route simple product inquiries to smaller models, and route complex return policy inquiries to more capable larger models.",
      "C": "Implement a single-model solution that uses an Amazon Bedrock mid-sized foundation model (FM) with on-demand pricing. Include special instructions in model prompts to handle both simple and complex inquiries by using the same model.",
      "D": "Create separate Amazon Bedrock endpoints for simple and complex inquiries. Implement a rule-based routing system based on keyword detection. Use on-demand pricing for the smaller model and provisioned throughput for the larger model."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384280-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 84,
    "question": "특산 커피 회사가 3단계 프롬프트 체인을 사용하는 Amazon Bedrock으로 개인화된 커피 로스팅 프로필을 생성하는 모바일 앱을 운영합니다. 프롬프트 체인은 사용자 입력을 구조화된 메타데이터로 변환하고, 커피 로스팅 관련 로그를 검색하고, 각 고객을 위한 개인화된 로스팅 권장사항을 생성합니다. 여러 AWS 지역의 사용자들이 동일한 입력에 대해 일관성 없는 로스팅 권장사항, 검색 단계에서의 느린 추론, 과도하게 높은 온도로 양조하는 등의 안전하지 않은 권장사항을 보고합니다. 회사는 반복된 입력에 대한 출력의 안정성을 개선하고, 앱 성능을 개선하고, 앱 출력의 안전성을 개선해야 합니다. 업데이트된 솔루션은 동일한 입력에 대해 99.5% 출력 일관성을 보장하고 1초 미만의 추론 지연 시간을 달성해야 합니다. 솔루션은 검증된 안전 제어를 사용하여 안전하지 않은 또는 환각된 권장사항을 차단해야 합니다. 이 요구사항을 충족할 솔루션은 어떤 것입니까?",
    "options": {
      "A": "프로비저닝된 처리량으로 Amazon Bedrock을 배포하여 추론 지연 시간을 안정화합니다. 의미 거부 규칙이 있는 Amazon Bedrock 보안정책을 적용하여 안전하지 않은 출력을 차단합니다. Amazon Bedrock Prompt Management를 사용하여 승인 워크플로우가 있는 프롬프트를 관리합니다.",
      "B": "Amazon Bedrock Agents를 사용하여 체인을 관리합니다. 모델 입력과 출력을 Amazon CloudWatch Logs에 기록합니다. Amazon CloudWatch의 로그를 사용하여 프롬프트 버전에 대한 A/B 테스트를 수행합니다.",
      "C": "프롬프트 결과를 Amazon ElastiCache에 캐싱합니다. AWS Lambda 함수를 사용하여 메타데이터를 전처리하고 엔드 투 엔드 지연 시간을 추적합니다. AWS X-Ray를 사용하여 성능 병목을 식별하고 개선합니다.",
      "D": "Amazon Kendra를 사용하여 로스팅 로그 검색 정확도를 개선합니다. 정규화된 프롬프트 메타데이터를 Amazon DynamoDB 내에 저장합니다. AWS Step Functions를 사용하여 다단계 프롬프트를 조율합니다."
    },
    "answer": "A",
    "explanation": "안정성, 성능, 안전성 세 가지 핵심 요구사항을 다룹니다.\n\n정답 A는 (1) 프로비저닝된 처리량으로 일관된 성능 제공(99.5% 출력 일관성 확보), (2) 의미 거부 규칙으로 '과도하게 높은 온도'처럼 안전하지 않은 권장사항 차단, (3) Prompt Management로 승인된 프롬프트만 배포하여 3단계 체인의 일관성 유지합니다.\n\n프로비저닝된 처리량은 추론 지연을 1초 이하로 안정화합니다.\n\nB는 로깅과 A/B 테스트는 모니터링일 뿐 근본 문제 해결 아님, C는 캐싱과 X-Ray는 성능만 개선하고 안전성 미해결, D는 Kendra 검색은 다양한 결과 반환으로 일관성 해침. 'semantic denial rules'은 구체적인 안전 위험(과도한 온도)을 정의하여 차단하는 Bedrock guardrails의 고급 기능입니다.",
    "en_q": "A specialty coffee company has a mobile app that generates personalized coffee roast profiles by using Amazon Bedrock with a three-stage prompt chain. The prompt chain converts user inputs into structured metadata, retrieves relevant logs for coffee roasts, and generates a personalized roast recommendation for each customer. Users in multiple AWS Regions report inconsistent roast recommendations for identical inputs, slow inference during the retrieval step, and unsafe recommendations such as brewing at excessively high temperatures. The company must improve the stability of outputs for repeated inputs. The company must also improve app performance and the safety of the app's outputs. The updated solution must ensure 99.5% output consistency for identical inputs and achieve inference latency of less than 1 second. The solution must also block unsafe or hallucinated recommendations by using validated safety controls. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy Amazon Bedrock with provisioned throughput to stabilize inference latency. Apply Amazon Bedrock guardrails that have semantic denial rules to block unsafe outputs. Use Amazon Bedrock Prompt Management to manage prompts by using approval workflows.",
      "B": "Use Amazon Bedrock Agents to manage chaining. Log model inputs and outputs to Amazon CloudWatch Logs. Use logs from Amazon CloudWatch to perform A/B testing for prompt versions.",
      "C": "Cache prompt results in Amazon ElastiCache. Use AWS Lambda functions to pre-process metadata and to trace end-to-end latency. Use AWS X-Ray to identify and remediate performance bottlenecks.",
      "D": "Use Amazon Kendra to improve roast log retrieval accuracy. Store normalized prompt metadata within Amazon DynamoDB. Use AWS Step Functions to orchestrate multistep prompts."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384293-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 85,
    "question": "회사가 Amazon Bedrock을 사용하는 생성 AI(GenAI) 애플리케이션을 개발합니다. 애플리케이션은 회사의 데이터에서 패턴과 관계를 분석합니다. 애플리케이션은 Amazon S3에 저장하기 전에 유럽, 북미, 아시아의 AWS 지역에서 매일 수백만 개의 새로운 데이터 포인트를 처리합니다. 애플리케이션은 현지 데이터 보호 및 저장 규정을 준수해야 합니다. 데이터 상주 및 처리는 동일한 대륙 내에서 발생해야 합니다. 애플리케이션은 또한 애플리케이션의 의사결정 프로세스의 감시 추적을 유지하고 데이터 분류 기능을 제공해야 합니다. 이 요구사항을 충족할 솔루션은 어떤 것입니까?",
    "options": {
      "A": "각 지역에 로컬 IAM 정책을 사용하여 애플리케이션을 배포합니다. Amazon Bedrock 교차 지역 추론을 사용하여 워크로드를 분산합니다. Amazon CloudWatch를 사용하여 AI 의사결정 프로세스 및 데이터 처리 활동을 기록합니다. 지역 전체에서 규정 준수 인증을 수동으로 추적합니다.",
      "B": "AWS Organizations와 함께 SCP를 사용하여 위치별 권한을 관리합니다. AWS CloudTrail 변경 불가능한 로그를 사용하여 의사결정 프로세스를 감시합니다. Amazon Bedrock에 사용자 정의 모델을 가져오고 모델을 각 지역에 배포합니다.",
      "C": "지역별 S3 버킷 정책을 사용하여 Amazon S3 Object Lock을 사용합니다. 지리적 원산지에 기반한 지역 내에서 데이터 포인트를 전처리한 후 Amazon Bedrock으로 보냅니다. Amazon Macie를 사용하여 데이터를 분류합니다. AWS CloudTrail 변경 불가능한 로그를 사용하여 의사결정 프로세스를 감시합니다.",
      "D": "각 지역에 대해 개별 규정 준수 프레임워크가 있는 별도의 AWS 계정을 생성합니다. Amazon SageMaker AI를 사용자 정의 모니터링과 함께 사용하여 모델 성능을 추적하고 데이터 상주 요구사항을 준수합니다. 각 규제 관할권에 대한 수동 보고서를 작성합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Data Residency — 데이터가 특정 지역 내에서만 처리 및 저장되어야 한다는 규정\n▸ Object Lock — S3 객체의 변경 불가능성을 보장하는 기능\n▸ Amazon Macie — ML 기반 데이터 분류 및 민감 정보 탐지 서비스\n\n【정답 포인트】\n▸ 지역 내 전처리 → 데이터가 처리 지역 외로 이동하지 않음\n▸ S3 Object Lock + 버킷 정책 → 상주 규칙 강제 및 변경 불가능성 보장\n▸ Amazon Macie → 자동 데이터 분류로 민감 정보 관리\n▸ CloudTrail → 감시 추적으로 규제 규정 준수\n\n【오답 체크】\n(A) 교차 지역 추론(cross-region inference)은 데이터 상주 규칙 위반 가능. 지역 간 데이터 이동으로 EU GDPR 등 규정 불준수\n(B) 사용자 정의 모델 배포는 구현 복잡도 높음. Macie 분류 기능 미포함으로 자동 분류 불가능\n(D) 수동 보고서는 자동화 부재로 대규모 일일 수백만 데이터 포인트 처리 시 확장성 떨어짐\n\n【시험 포인트】\n▸ Bedrock 기반 GenAI + 지역 제약 → S3 버킷 정책으로 지역별 격리\n▸ PII 포함 데이터 → Macie의 자동 분류가 핵심 기능\n▸ 감시 추적 → CloudTrail 변경 불가능 로그가 감시의 표준",
    "en_q": "A company is developing a generative AI (GenAI) application by using Amazon Bedrock. The application will analyze patterns and relationships in the company's data. The application will process millions of new data points daily across AWS Regions in Europe, North America, and Asia before storing the data in Amazon S3. The application must comply with local data protection and storage regulations. Data residency and processing must occur within the same continent. The application must also maintain audit trails of the application's decision-making processes and provide data classification capabilities. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy the application in each Region with local IAM policies. Use Amazon Bedrock cross-Region inference to distribute the workload. Use Amazon CloudWatch to log AI decision-making processes and data processing activities. Manually track compliance certifications across Regions.",
      "B": "Use SCPs with AWS Organizations to manage location-specific permissions. Use AWS CloudTrail immutable logs to audit the decision-making processes. Import a custom model into Amazon Bedrock and deploy the model to each Region.",
      "C": "Use Amazon S3 Object Lock with Region-specific S3 bucket policies. Pre-process the data points within the Region based on geographic origin before sending the data points to Amazon Bedrock. Use Amazon Macie to classify the data. Use AWS CloudTrail immutable logs to audit the decision-making processes.",
      "D": "Create separate AWS accounts for each Region with individual compliance frameworks. Use Amazon SageMaker AI with custom monitoring to track model performance and compliance with data residency requirements. Create manual reports for each regulatory jurisdiction."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/384256-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 86,
    "question": "금융 서비스 회사가 Amazon Bedrock을 사용하여 고객 서비스 대표자가 고객에게 개인화된 투자 조언을 제공하도록 지원하는 생성 AI(GenAI) 애플리케이션을 배포합니다. 회사는 책임 있는 AI 관행을 따르고 규제 요구사항을 충족하는 포괄적인 거버넌스 솔루션을 구현해야 합니다. 솔루션은 권장사항의 환각을 감지하고 방지해야 합니다. 솔루션은 고객 상호작용을 위한 안전 제어를 가져야 합니다. 솔루션은 또한 실시간으로 모델 행동 드리프트를 모니터링하고 규제 검토를 위해 모든 프롬프트-응답 쌍의 감시 추적을 유지해야 합니다. 회사는 60일 내에 솔루션을 배포해야 합니다. 솔루션은 회사의 기존 규정 준수 대시보드와 통합되고 고객에게 200ms 내에 응답해야 합니다. 이 요구사항을 충족하면서 운영 오버헤드가 가장 적을 솔루션은 어떤 것입니까?",
    "options": {
      "A": "Amazon Bedrock 보안정책을 구성하여 사용자 정의 콘텐츠 필터 및 독성 감지를 적용합니다. Amazon Bedrock Model Evaluation을 사용하여 환각을 감지합니다. 프롬프트-응답 쌍을 Amazon DynamoDB에 저장하여 감시 추적을 캡처하고 TTL을 설정합니다. Amazon CloudWatch 사용자 정의 메트릭을 기존 규정 준수 대시보드와 통합합니다.",
      "B": "Amazon Bedrock을 배포하고 AWS PrivateLink를 사용하여 애플리케이션에 안전하게 액세스합니다. AWS Lambda 함수를 사용하여 사용자 정의 프롬프트 검증을 구현합니다. 프롬프트-응답 쌍을 Amazon S3 버킷에 저장하고 S3 Lifecycle 정책을 구성합니다. 사용자 정의 Amazon CloudWatch 대시보드를 생성하여 모델 성능 메트릭을 모니터링합니다.",
      "C": "Amazon Bedrock Agents 및 Amazon Bedrock Knowledge Bases를 사용하여 응답을 기초합니다. Amazon Bedrock Guardrails를 사용하여 콘텐츠 안전을 강제합니다. Amazon OpenSearch Service를 사용하여 프롬프트-응답 쌍을 저장하고 인덱싱합니다. OpenSearch Service를 Amazon QuickSight와 통합하여 규정 준수 보고서를 생성하고 모델 행동 드리프트를 감지합니다.",
      "D": "Amazon SageMaker Model Monitor를 사용하여 모델 행동 드리프트를 감지합니다. AWS WAF를 사용하여 콘텐츠를 필터링합니다. 고객 상호작용을 암호화된 Amazon RDS 데이터베이스에 저장합니다. Amazon API Gateway를 사용하여 규정 준수 대시보드와 통합하기 위한 사용자 정의 HTTP API를 생성합니다."
    },
    "answer": "A",
    "explanation": "60일 내 빠른 배포와 규정 준수, 모니터링, 성능을 동시에 충족해야 합니다.\n\n정답 A는 Bedrock 네이티브 기능 기반으로 최소 개발 시간을 보장합니다: (1) Bedrock 보안정책으로 독성 감지 및 콘텐츠 필터 적용(관리형), (2) Model Evaluation으로 환각 감지(자동화), (3) DynamoDB TTL로 감시 추적 저장(간단함), (4) CloudWatch 사용자 정의 메트릭으로 기존 대시보드 통합(빠른 구축). 200ms 응답 시간은 DynamoDB(서버리스)와 Bedrock(관리형)으로 충족됩니다.\n\nB는 Lambda 함수 개발, PrivateLink 구성 오버헤드, C는 OpenSearch/QuickSight 설정과 유지보수 복잡도, D는 SageMaker Model Monitor 운영 오버헤드가 큽니다.\n\n'LEAST operational overhead'와 '60일 배포'라는 시간 제약이 주어졌을 때 완전 관리형\n(A) 이 정답입니다.",
    "en_q": "A financial services company is deploying a generative AI (GenAI) application that uses Amazon Bedrock to assist customer service representatives to provide personalized investment advice to customers. The company must implement a comprehensive governance solution that follows responsible AI practices and meets regulatory requirements. The solution must detect and prevent hallucinations in recommendations. The solution must have safety controls for customer interactions. The solution must also monitor model behavior drift in real time and maintain audit trails of all prompt-response pairs for regulatory review. The company must deploy the solution within 60 days. The solution must integrate with the company's existing compliance dashboard and respond to customers within 200 ms. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Configure Amazon Bedrock guardrails to apply custom content filters and toxicity detection. Use Amazon Bedrock Model Evaluation to detect hallucinations. Store prompt-response pairs in Amazon DynamoDB to capture audit trails and set a TTL. Integrate Amazon CloudWatch custom metrics with the existing compliance dashboard.",
      "B": "Deploy Amazon Bedrock and use AWS PrivateLink to access the application securely. Use AWS Lambda functions to implement custom prompt validation. Store prompt-response pairs in an Amazon S3 bucket and configure S3 Lifecycle policies. Create custom Amazon CloudWatch dashboards to monitor model performance metrics.",
      "C": "Use Amazon Bedrock Agents and Amazon Bedrock Knowledge Bases to ground responses. Use Amazon Bedrock Guardrails to enforce content safety. Use Amazon OpenSearch Service to store and index prompt-responses pairs. Integrate OpenSearch Service with Amazon QuickSight to create compliance reports and to detect model behavior drift.",
      "D": "Use Amazon SageMaker Model Monitor to detect model behavior drift. Use AWS WAF to filter content. Store customer interactions in an encrypted Amazon RDS database. Use Amazon API Gateway to create custom HTTP APIs to integrate with the compliance dashboard."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402483-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 87,
    "question": "회사가 AWS Lake Formation을 사용하여 여러 AWS 지역의 여러 비즈니스 단위에 대한 데이터베이스 및 테이블을 포함하는 데이터 레이크를 설정합니다. 회사는 Amazon Bedrock을 통해 기초 모델(FM)을 사용하여 사기 탐지를 수행하려고 합니다. FM은 데이터 레이크에서 민감한 금융 데이터를 수집해야 합니다. 데이터에는 일부 고객 개인 식별 정보(PII)가 포함되어 있습니다. 회사는 PII가 프로덕션 환경에 나타나지 않도록 방지하는 액세스 제어 솔루션을 설계해야 합니다. FM은 특정 데이터 열에서 PII가 제거된 승인된 데이터 부분집합만 액세스해야 합니다. 회사는 모든 데이터 액세스에 대한 감시 추적을 캡처해야 합니다. 이 요구사항을 충족할 솔루션은 어떤 것입니까?",
    "options": {
      "A": "각 비즈니스 단위 및 지역 조합에 대해 별도의 Amazon S3 버킷에서 별도의 데이터셋을 생성합니다. FM 학습 인스턴스에 할당된 IAM 역할을 기반으로 액세스를 제어하도록 S3 버킷 정책을 구성합니다. S3 액세스 로그를 사용하여 데이터 액세스를 추적합니다.",
      "B": "FM을 IAM 역할을 사용하여 인증하도록 구성하고 LF-Tag 표현을 기반으로 Lake Formation 권한을 설정합니다. 비즈니스 단위 및 지역을 데이터베이스 및 테이블에 할당된 LF-Tag로 정의합니다. AWS CloudTrail을 사용하여 데이터 액세스의 포괄적인 감시 추적을 수집합니다.",
      "C": "Lake Formation의 특정 데이터베이스 및 테이블에 직접 IAM 주 계정 부여를 사용합니다. 액세스 요청을 로깅하고 FM으로 데이터를 전송하기 전에 민감한 열을 추가로 필터링하는 사용자 정의 애플리케이션 계층을 생성합니다.",
      "D": "FM을 AWS STS에서 임시 자격 증명을 요청하도록 구성합니다. 비즈니스 단위 및 지역별 필터를 적용하는 API에서 생성한 presigned S3 URL을 사용하여 데이터에 액세스합니다. AWS CloudTrail을 사용하여 데이터 액세스의 포괄적인 감시 추적을 수집합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ LF-Tag Expression — Lake Formation의 태그 기반 세분화 접근 제어 메커니즘\n▸ Data Governance — 데이터 액세스 및 사용 정책의 중앙화 관리\n▸ PII Redaction — 민감 정보 열을 선택적으로 제외하여 보호\n\n【정답 포인트】\n▸ LF-Tag 기반 권한 → 비즈니스 단위·지역을 태그로 분류하여 세분화 제어\n▸ IAM 역할 인증 + LF-Tag 표현식 → 특정 데이터만 FM 접근 가능\n▸ 열 수준 필터링 → PII 포함 열을 제외하도록 LF-Tag 표현식 구성\n▸ CloudTrail → 모든 데이터 액세스 기록으로 감시 추적 완성\n\n【오답 체크】\n(A) S3 버킷 단위 분리는 비즈니스 단위별로 버킷 폭증(수백 개). PII 제거 메커니즘 없음\n(C) 사용자 정의 애플리케이션 계층은 유지보수 부담 증가. PII 노출 위험이 높음(수동 필터링)\n(D) Presigned URL은 세분화된 제어 불가능. 행/열 단위 접근 제어 미지원\n\n【시험 포인트】\n▸ Lake Formation 거버넌스 → LF-Tag가 중앙화 접근 제어의 핵심\n▸ 다중 비즈니스 단위 + 다중 지역 → 태그 조합으로 확장성 우수\n▸ FM의 민감 데이터 접근 → 열 수준 LF-Tag 표현식이 AIP-C01 출제 핵심",
    "en_q": "A company uses AWS Lake Formation to set up a data lake that contains databases and tables for multiple business units across multiple AWS Regions. The company wants to use a foundation model (FM) through Amazon Bedrock to perform fraud detection. The FM must ingest sensitive financial data from the data lake. The data includes some customer personally identifiable information (PII). The company must design an access control solution that prevents PII from appearing in a production environment. The FM must access only authorized data subsets that have PII redacted from specific data columns. The company must capture audit trails for all data access. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create a separate dataset in a separate Amazon S3 bucket for each business unit and Region combination. Configure S3 bucket policies to control access based on IAM roles that are assigned to FM training instances. Use S3 access logs to track data access.",
      "B": "Configure the FM to authenticate by using IAM roles and Lake Formation permissions based on LF-Tag expressions. Define business units and Regions as LF-Tags that are assigned to databases and tables. Use AWS CloudTrail to collect comprehensive audit trails of data access.",
      "C": "Use direct IAM principal grants on specific databases and tables in Lake Formation. Create a custom application layer that logs access requests and further filters sensitive columns before sending data to the FM.",
      "D": "Configure the FM to request temporary credentials from AWS STS. Access the data by using presigned S3 URLs that are generated by an API that applies business unit and Regional filters. Use AWS CloudTrail to collect comprehensive audit trails of data access."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402484-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 88,
    "question": "회사가 규제 준수 쿼리를 수행하기 위해 Amazon Bedrock Knowledge Bases를 사용하는 Retrieval Augmented Generation(RAG) 애플리케이션을 실행합니다. 애플리케이션은 RetrieveAndGenerateStream API를 사용합니다. 애플리케이션은 50,000개 이상의 규제 문서, 법적 판례, 정책 업데이트를 포함하는 지식 기반에서 관련 문서를 검색합니다. RAG 애플리케이션은 초기 검색이 의미론적으로 유사하지만 문맥상 관련이 없는 문서를 반환하기 때문에 최적이 아닌 응답을 생성합니다. 불량한 응답은 모델 환각과 잘못된 규제 지침을 야기합니다. 회사는 RAG 애플리케이션의 성능을 개선하여 더 관련 있는 문서를 반환해야 합니다. 이 요구사항을 충족하면서 운영 오버헤드가 가장 적을 솔루션은 어떤 것입니까?",
    "options": {
      "A": "Amazon SageMaker 엔드포인트를 배포하여 미세 조정된 순위 모델을 실행합니다. Amazon API Gateway REST API를 사용하여 요청을 라우팅합니다. 응용 프로그램을 구성하여 REST API를 통해 요청을 만들어 결과를 다시 순위를 매기도록 합니다.",
      "B": "Amazon Comprehend를 사용하여 문서를 분류하고 관련성 점수를 적용합니다. RAG 애플리케이션의 재순위 지정 프로세스를 Amazon Textract 문서 분석을 실행하는 것과 통합합니다. Amazon Neptune을 사용하여 그래프 기반 관련성 계산을 수행합니다.",
      "C": "Amazon Bedrock Knowledge Bases Retrieve API를 사용하는 검색 파이프라인을 구현합니다. Amazon Bedrock Rerank API를 호출하여 결과를 다시 순위를 매기도록 합니다. RetrieveAndGenerateStream 작업을 호출하여 응답을 생성합니다.",
      "D": "Amazon Bedrock Knowledge Bases 내의 재순위 지정 구성을 통해 최신 Amazon 재순위 지정 모델을 사용합니다. 모델을 사용하여 문서 관련성 점수를 개선하고 문맥 평가를 기반으로 결과를 재정렬합니다."
    },
    "answer": "D",
    "explanation": "Bedrock Knowledge Bases의 고급 기능인 reranking을 활용한 문제입니다.\n\n정답 D는 Amazon Bedrock Knowledge Bases의 built-in reranking configuration을 사용하여 의미론적 유사성(semantic similarity)이 아닌 문맥 관련성(contextual relevance)을 기반으로 문서를 재순위화합니다.\n\n이는 Bedrock 네이티브 기능으로 추가 API 호출이나 외부 모델 배포 없이 구현되므로 운영 오버헤드가 최소입니다.\n\n50,000+ 문서 규모의 검색에서 정확성을 크게 개선합니다.\n\nA는 SageMaker 엔드포인트 관리 오버헤드, B는 Comprehend+Textract+Neptune의 복잡한 조합, C는 별도 API 호출로 레이턴시 증가. Bedrock Knowledge Bases의 reranking 기능은 AIP-C01에서 최신 기능으로 강조됩니다.",
    "en_q": "A company runs a Retrieval Augmented Generation (RAG) application that uses Amazon Bedrock Knowledge Bases to perform regulatory compliance queries. The application uses the RetrieveAndGenerateStream API. The application retrieves relevant documents from a knowledge base that contains more than 50,000 regulatory documents, legal precedents, and policy updates. The RAG application is producing suboptimal responses because the initial retrieval often returns semantically similar but contextually irrelevant documents. The poor responses are causing model hallucinations and incorrect regulatory guidance. The company needs to improve the performance of the RAG application so it returns more relevant documents. Which solution will meet this requirement with the LEAST operational overhead?",
    "en_opts": {
      "A": "Deploy an Amazon SageMaker endpoint to run a fine-tuned ranking model. Use an Amazon API Gateway REST API to route requests. Configure the application to make requests through the REST API to rerank the results.",
      "B": "Use Amazon Comprehend to classify documents and apply relevance scores. Integrate the RAG application's reranking process with Amazon Textract to run document analysis. Use Amazon Neptune to perform graph-based relevance calculations.",
      "C": "Implement a retrieval pipeline that uses the Amazon Bedrock Knowledge Bases Retrieve API to perform initial document retrieval. Call the Amazon Bedrock Rerank API to rerank the results. Invoke the InvokeModelWithResponseStream operation to generate responses.",
      "D": "Use the latest Amazon reranker model through the reranking configuration within Amazon Bedrock Knowledge Bases. Use the model to improve document relevance scoring and to reorder results based on contextual assessments."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402485-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 89,
    "question": "회사가 AI 어시스턴트로 구동되는 고객 통신 플랫폼을 개발합니다. AI 어시스턴트는 고객 메시지를 요약하고 초기 응답 초안을 생성합니다. 회사는 Amazon Comprehend를 사용하여 계층화된 콘텐츠 필터링을 구현하려고 합니다. 계층화된 콘텐츠 필터링은 불쾌감을 주는 콘텐츠 공유를 방지하고, 고객 개인 정보를 보호하고, 부적절한 조언 신청을 감지해야 합니다. 부적절한 조언 신청에는 비윤리적 관행, 해로운 활동, 조작적 행동에 대한 요청이 포함됩니다. 솔루션은 허용 가능한 전체 응답 시간을 유지해야 하므로 모든 전처리 필터가 콘텐츠가 FM에 도달하기 전에 완료되어야 합니다. 이 요구사항을 충족할 솔루션은 어떤 것입니까?",
    "options": {
      "A": "비동기 API 호출과 함께 병렬 처리를 사용합니다. 불쾌감을 주는 콘텐츠에 독성 감지를 사용합니다. 부적절한 조언 신청에 프롬프트 안전 분류를 사용합니다. 수정 없이 개인 식별 정보(PII) 감지를 사용합니다.",
      "B": "불쾌감을 주는 콘텐츠 및 부적절한 조언 신청을 감지하는 FM을 구축하는 사용자 정의 분류를 사용합니다. 메시지가 사용자 정의 분류기를 통과한 경우에만 2차 필터로 개인 식별 정보(PII) 감지를 적용합니다.",
      "C": "다단계 프로세스를 배포합니다. 프롬프트 안전 분류를 먼저 실행하도록 프로세스를 구성하고, 안전한 프롬프트에서만 독성 감지를 실행하고, 마지막으로 스트리밍 모드에서 개인 식별 정보(PII) 감지를 실행합니다. 플래그가 지정된 메시지를 사람 검토를 위해 Amazon EventBridge를 통해 라우팅합니다.",
      "D": "모든 카테고리에 대해 0.5로 임계값을 구성한 독성 감지를 사용합니다. 프롬프트 안전 분류 및 개인 식별 정보(PII) 감지(엔티티 수정 포함) 모두에 대해 병렬 처리를 사용합니다. Amazon CloudWatch 경보를 필터링 메트릭에 적용합니다."
    },
    "answer": "D",
    "explanation": "계층화된 필터링의 성능 최적화를 다룹니다.\n\n정답 D는 '모든 전처리 필터가 FM 도달 전 완료'라는 요구사항을 충족합니다: (1) 독성 감지(0.5 임계값)로 불쾌감 차단, (2) 프롬프트 안전 분류로 부적절한 조언 신청 감지, (3) PII 감지 및 엔티티 수정으로 개인정보 보호. 병렬 처리(프롬프트 안전 + PII를 동시 실행)로 지연시간을 최소화하면서 모든 필터를 FM 전에 완료합니다.\n\nCloudWatch 경보는 모니터링을 통해 성능 추적. A는 비동기 처리가 FM 도달 전 완료 불명확, B는 2차 필터 순차 실행으로 지연시간 증가, C는 이벤트브릿지 라우팅이 추가 레이턴시. 병렬 처리와 선택적 임계값 설정의 조합이 핵심입니다.",
    "en_q": "A company is developing a customer communication platform that uses an AI assistant powered by an Amazon Bedrock foundation model (FM). The AI assistant summarizes customer messages and generates initial response drafts. The company wants to use Amazon Comprehend to implement layered content filtering. The layered content filtering must prevent sharing of offensive content, protect customer privacy, and detect potential inappropriate advice solicitation. Inappropriate advice solicitation includes requests for unethical practices, harmful activities, or manipulative behaviors. The solution must maintain acceptable overall response times, so all pre-processing filters must finish before the content reaches the FM. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use parallel processing with asynchronous API calls. Use toxicity detection for offensive content. Use prompt safety classification for inappropriate advice solicitation. Use personally identifiable information (PII) detection without redaction.",
      "B": "Use custom classification to build an FM that detects offensive content and inappropriate advice solicitation. Apply personally identifiable information (PII) detection as a secondary filter only when messages pass the custom classifier.",
      "C": "Deploy a multi-stage process. Configure the process to use prompt safety classification first, then toxicity detection on safe prompts only, and finally personally identifiable information (PII) detection in streaming mode. Route flagged messages through Amazon EventBridge for human review.",
      "D": "Use toxicity detection with thresholds configured to 0.5 for all categories. Use parallel processing for both prompt safety classification and personally identifiable information (PII) detection with entity redaction. Apply Amazon CloudWatch alarms to filter metrics."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402486-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 90,
    "question": "Software as a Service(SaaS) 회사가 고객에게 항공사 탑승 등급 업그레이드를 권장하는 애플리케이션을 지원하는 권장사항 모델을 Amazon SageMaker AI를 사용하여 구축합니다. 회사는 Amazon Bedrock Custom Model Import를 사용하여 Amazon Bedrock에서 SageMaker AI 모델을 호스팅합니다. 항공사는 애플리케이션을 사용하여 고객에게 맞춤형 제안을 보냅니다. 모델은 더 관련성 있는 권장사항을 제공하기 위해 고객의 여행 역사를 검사해야 합니다. 회사는 고객 여행 이력 데이터를 Amazon RDS 데이터베이스에 저장합니다. 회사는 애플리케이션이 여러 항공사 및 고객 인구 전체에 걸쳐 일관되고, 관련성 있고, 정확한 결과를 제공하도록 보장해야 합니다. 이 요구사항을 충족할 솔루션은 어떤 것입니까?",
    "options": {
      "A": "Amazon Bedrock Knowledge Bases를 사용하여 RAG 아키텍처를 구현하여 고객 여행 이력 데이터를 분석합니다. 의미론적 검색 기능을 애플리케이션에 제공하도록 의미론적 검색 기능을 사용합니다. 의미론적 검색 기능을 사용하여 관련 예약 패턴, 선호도, 충성도 정보를 검색하여 개인화된 탑승 등급 업그레이드 권장사항을 생성합니다. Amazon Bedrock 보안정책을 적용하여 콘텐츠를 필터링합니다. AWS Step Functions 및 AWS Lambda 함수를 사용하여 검증 워크플로우를 조율하여 환각을 줄입니다.",
      "B": "RDS 데이터베이스에서 관련 예약 패턴, 선호도, 충성도 정보를 정확하게 검색하기 위해 text-to-SQL 변환을 구현합니다. SQL 검증을 수행합니다. 결과를 사용하여 개인화된 탑승 등급 업그레이드 권장사항을 생성합니다. Amazon Bedrock 보안정책을 적용하여 콘텐츠를 필터링합니다. AWS Step Functions 및 AWS Lambda 함수를 사용하여 검증 워크플로우를 조율하여 환각을 줄입니다.",
      "C": "Amazon OpenSearch Service를 사용하여 고객 여행 이력 임베딩의 벡터 검색을 구현합니다. 벡터 검색을 사용하여 응용 프로그램이 예약 패턴, 선호도, 충성도 정보의 유사성 기반 검색을 수행할 수 있도록 합니다. 개인화된 탑승 등급 업그레이드 권장사항을 생성하는 정보를 사용합니다. Amazon Bedrock 보안정책을 적용하여 응답을 필터링합니다. 신뢰도 점수 및 의미론적 유사성 검색을 사용하여 환각을 줄입니다.",
      "D": "RDS 데이터베이스에서 관련 예약 패턴, 선호도, 충성도 정보를 정확하게 검색하기 위해 text-to-SQL 변환을 구현합니다. SQL 검증을 수행합니다. 결과를 사용하여 개인화된 탑승 등급 업그레이드 권장사항을 생성합니다. Amazon Bedrock 보안정책을 적용하여 응답을 필터링합니다. 신뢰도 점수 및 의미론적 유사성 검색을 사용하여 환각을 줄입니다."
    },
    "answer": "B",
    "explanation": "구조화된 고객 데이터(RDS)에서 정확한 여행 정보를 추출하여 권장사항을 생성하는 문제입니다.\n\n정답 B는 text-to-SQL 변환으로 RDS 데이터베이스에 저장된 구조화된 여행 이력, 예약 패턴, 충성도 정보를 정확하게 쿼리합니다.\n\nSQL 검증으로 쿼리 정확성 보장, Bedrock 보안정책으로 안전성, Step Functions+Lambda로 검증 워크플로우를 조율하여 환각 제거. 구조화된 RDS 데이터에 대해서는 RAG(벡터 임베딩 기반)보다 text-to-SQL이 정확성 우수. A는 RAG가 구조화 데이터에 부적합하고 의미론적 검색 실패, C는 벡터 검색으로 정확한 구조화 쿼리 불가능, D는 신뢰도 점수와 의미론적 유사성이 구조화 데이터에 효과적이지 않습니다.\n\nAIP-C01에서 'structured data in RDS' + 'accurate retrieval' = text-to-SQL이 정답 패턴입니다.",
    "en_q": "A software as a service (SaaS) company is building a recommendation model that uses Amazon SageMaker AI to support an application that recommends airline cabin upgrades to customers. The company will host SageMaker AI models on Amazon Bedrock by using Amazon Bedrock Custom Model Import. Airline companies will use the application to send customized offers to customers. The model must examine the travel history of customers to help make more relevant recommendations. The company stores customer travel history data in an Amazon RDS database. The company must ensure that the application delivers consistent, relevant, and accurate results across multiple airlines and customer populations. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Use Amazon Bedrock Knowledge Bases to implement a RAG architecture to analyze customer travel history data to give the application semantic search capabilities. Use the semantic search capabilities to retrieve relevant booking patterns, preferences, and loyalty information to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter content. Use AWS Step Functions and AWS Lambda functions to orchestrate validation workflows to reduce hallucinations.",
      "B": "Implement text-to-SQL transformations with SQL validations to accurately retrieve relevant booking patterns, preferences, and loyalty information from the RDS database. Use the results to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter content. Use AWS Step Functions and AWS Lambda functions to orchestrate validation workflows to reduce hallucinations.",
      "C": "Use Amazon OpenSearch Service to implement vector searches of customer travel history embeddings. Use the vector searches to give the application the ability to perform similarity-based retrieval of booking patterns, preferences, and loyalty information to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter responses. Use confidence scoring and semantic similarity searches to reduce hallucinations.",
      "D": "Implement text-to-SQL transformations with SQL validations to accurately retrieve relevant booking patterns, preferences, and loyalty information from the RDS database. Use the results to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter responses. Use confidence scoring and semantic similarity searches to reduce hallucinations."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402487-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 91,
    "question": "회사가 Amazon Bedrock을 사용하여 고객 지원 AI 어시스턴트를 개발합니다. AI 어시스턴트는 고객의 계정에 대한 질문에 응답해야 합니다. AI 어시스턴트는 응답에서 개인 정보를 노출하지 않아야 합니다. 회사는 각 고객이 위치한 동일한 AWS 지역에서 모든 처리가 발생하도록 보장하여 데이터 상주 정책을 준수해야 합니다. 회사는 AI 어시스턴트를 고객에게 제공하기 전에 AI 어시스턴트가 개인 정보 노출을 방지하는 효과를 평가하려고 합니다. 이 요구사항을 충족할 솔루션은 어떤 것입니까?",
    "options": {
      "A": "교차 지역 Amazon Bedrock 보안정책을 구성하여 민감한 정보 필터를 적용합니다. 개발 및 테스트 중에 보안정책을 감지 모드로 설정합니다. 프로덕션 배포를 위해 차단 모드로 전환합니다.",
      "B": "민감한 정보 필터를 적용하도록 Amazon Bedrock 보안정책을 구성합니다. 개발 및 테스트 중에 보안정책을 마스킹 모드로 설정합니다. 프로덕션 배포를 위해 차단 모드로 전환합니다. 회사가 운영하는 각 지역에 보안정책 사본을 배포합니다.",
      "C": "콘텐츠 및 주제 필터를 적용하도록 Amazon Bedrock 보안정책을 구성합니다. 개발, 테스트, 프로덕션 전체에서 보안정책을 감지 모드로 설정합니다. Amazon Bedrock 모델에 대한 호출 로깅을 비활성화합니다.",
      "D": "콘텐츠 및 단어 필터 집합을 적용하도록 교차 지역 Amazon Bedrock 보안정책을 구성합니다. 개발 및 테스트 중에 보안정책을 감지 모드로 설정합니다. 프로덕션 배포를 위해 마스킹 모드로 전환합니다."
    },
    "answer": "B",
    "explanation": "【핵심 용어】\n▸ Guardrail — Amazon Bedrock의 응답 필터링 정책으로 PII 노출 방지\n▸ Mask Mode — PII를 감지하면 마스킹하여 시스템은 동작하되 민감 정보 보호\n▸ Block Mode — PII가 감지되면 응답을 완전 차단\n\n【정답 포인트】\n▸ 민감 정보 필터 적용 → guardrail의 기본 기능\n▸ Mask Mode(개발/테스트) → PII를 감지하면서도 시스템 작동 확인(평가 가능)\n▸ Block Mode(프로덕션) → 최종 환경에서 PII 노출 완전 방지\n▸ 지역별 배포 → 각 지역에 guardrail 사본으로 데이터 상주 준수\n\n【오답 체크】\n(A) Cross-Region guardrail은 데이터 상주 규칙 위반(지역 간 호출 교차)\n(C) Detect Mode만으로는 보호 안 됨(PII 노출 감지만 함). 로깅 비활성화는 감시 추적 상실\n(D) Mask Mode를 프로덕션에서 사용하면 PII가 마스킹되어 실제 데이터 손실. 차단 모드 필요\n\n【시험 포인트】\n▸ GuardRail 모드 선택 → Mask(개발/테스트) vs Block(프로덕션)의 의도 파악 중요\n▸ 데이터 상주 + PII 보호 → 지역별 guardrail 배포가 이중 요구사항 충족\n▸ PII 평가 단계 → Mask Mode로 시스템 동작 확인 후 프로덕션 전환",
    "en_q": "A company is using Amazon Bedrock to develop a customer support AI assistant. The AI assistant must respond to customer questions about their accounts. The AI assistant must not expose personal information in responses. The company must comply with data residency policies by ensuring that all processing occurs within the same AWS Region where each customer is located. The company wants to evaluate how effective the AI assistant is at preventing the exposure of personal information before the company makes the AI assistant available to customers. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Configure a cross-Region Amazon Bedrock guardrail to apply sensitive information filters. Set the guardrail to detect mode during development and testing. Switch to block mode for production deployment.",
      "B": "Configure an Amazon Bedrock guardrail to apply sensitive information filters. Set the guardrail to mask mode during development and testing. Switch to block mode for production deployment. Deploy a copy of the guardrail to each Region where the company operates.",
      "C": "Configure an Amazon Bedrock guardrail to apply content and topic filters. Set the guardrail to detect mode during development, testing, and production. Disable invocation logging for the Amazon Bedrock model.",
      "D": "Configure a cross-Region Amazon Bedrock guardrail to apply a set of content and word filters. Set the guardrail to detect mode during development and testing. Switch to mask mode for production deployment."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402488-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 92,
    "question": "대학이 보존 문서, 학술 저널, 필사본 컬렉션을 최근에 디지털화했습니다. 대학은 디지털 파일을 AWS Lake Formation 데이터 레이크에 저장합니다. 대학은 GenAI 개발자를 고용하여 사용자가 텍스트 쿼리를 사용하여 디지털 파일을 검색할 수 있게 하는 솔루션을 구축합니다. 솔루션은 사용자 쿼리와 의미론적으로 유사한 저널 요약을 반환해야 합니다. 사용자는 저널 요약과 관련된 텍스트와 메타데이터를 기반으로 디지털화 컬렉션을 검색할 수 있어야 합니다. 디지털화 파일의 메타데이터에는 키워드가 포함되지 않습니다. 솔루션은 텍스트 유사성을 기반으로 유사한 요약을 서로 매칭해야 합니다. 데이터 레이크에는 100만 개 미만의 파일이 있습니다. 이 요구사항을 충족하면서 운영 오버헤드가 가장 적을 솔루션은 어떤 것입니까?",
    "options": {
      "A": "Amazon Bedrock의 Amazon Titan Embeddings를 사용하여 디지털화 파일의 벡터 표현을 생성합니다. Amazon OpenSearch Service의 OpenSearch Neural Plugin에 임베딩을 저장합니다.",
      "B": "Amazon Comprehend를 사용하여 디지털화 파일에서 주제를 추출합니다. 주제 및 파일 메타데이터를 Amazon Aurora PostgreSQL 데이터베이스에 저장합니다. Aurora 데이터베이스의 데이터에 대해 요약 메타데이터를 쿼리합니다.",
      "C": "Amazon SageMaker AI를 사용하여 문장 변환기 모델을 배포합니다. 모델을 사용하여 디지털화 파일의 벡터 표현을 생성합니다. Amazon Aurora PostgreSQL 데이터베이스에 pgvector 확장을 사용하여 임베딩을 저장합니다.",
      "D": "Amazon Bedrock의 Amazon Titan Embeddings를 사용하여 디지털화 파일의 벡터 표현을 생성합니다. Amazon Aurora PostgreSQL Serverless 데이터베이스에 pgvector 확장을 사용하여 임베딩을 저장합니다."
    },
    "answer": "D",
    "explanation": "의미론적 검색과 벡터 저장소 선택에 관한 문제입니다.\n\n정답 D는 세 가지 최적화: (1) Amazon Titan Embeddings(관리형, Bedrock 네이티브) - 학습/미세조정 없이 곧바로 사용, (2) Aurora PostgreSQL Serverless(서버리스 - 운영 오버헤드 최소), (3) pgvector 확장(SQL 기반 벡터 검색 지원). 100만 파일 미만 규모이므로 전용 벡터 DB(OpenSearch) 오버엔지니어링. A는 OpenSearch Neural Plugin 운영 오버헤드, B는 주제 추출만으로 의미론적 검색 불가능, C는 SageMaker 모델 배포 및 관리 부담. Titan Embeddings + Aurora pgvector의 조합은 'LEAST operational overhead'에서 최상입니다.\n\npgvector는 최근 PostgreSQL 생태계의 핵심 확장으로 AIP-C01에서 강조됩니다.",
    "en_q": "A university recently digitized a collection of archival documents, academic journals, and manuscripts. The university stores the digital files in an AWS Lake Formation data lake. The university hires a GenAI developer to build a solution to allow users to search the digital files by using text queries. The solution must return journal abstracts that are semantically similar to a user's query. Users must be able to search the digitized collection based on text and metadata that is associated with the journal abstracts. The metadata of the digitized files does not contain keywords. The solution must match similar abstracts to one another based on the similarity of their text. The data lake contains fewer than 1 million files. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon Titan Embeddings in Amazon Bedrock to create vector representations of the digitized files. Store embeddings in the OpenSearch Neural Plugin for Amazon OpenSearch Service.",
      "B": "Use Amazon Comprehend to extract topics from the digitized files. Store the topics and file metadata in an Amazon Aurora PostgreSQL database. Query the abstract metadata against the data in the Aurora database.",
      "C": "Use Amazon SageMaker AI to deploy a sentence-transformer model. Use the model to create vector representations of the digitized files. Store embeddings in an Amazon Aurora PostgreSQL database that has the pgvector extension.",
      "D": "Use Amazon Titan Embeddings in Amazon Bedrock to create vector representations of the digitized files. Store embeddings in an Amazon Aurora PostgreSQL Serverless database that has the pgvector extension."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402489-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 93,
    "question": "금융 서비스 회사가 Amazon Bedrock 기초 모델(FM)을 사용하여 콜 센터 녹음을 분석하려고 합니다. 통화가 종료되면 콜 센터는 녹음을 MP3 파일로 Amazon S3 버킷에 저장합니다. 회사는 새 파일이 생성될 때마다 녹음에 대해 구조화된 형식으로 요약 및 감정 분석을 생성해야 합니다. 녹음의 평균 크기는 20MB입니다. 이 요구사항을 충족할 솔루션 조합은 어떤 것입니까? (2개 선택)",
    "options": {
      "A": "AWS Step Functions를 사용하여 녹음을 처리하는 워크플로우를 조율합니다. 오디오를 텍스트로 변환하기 위해 Amazon Transcribe를 호출하고, 작업 완료를 검증하고, AWS Lambda 함수를 호출하여 Amazon Bedrock FM을 사용하여 텍스트를 처리하고 구조화된 분석 출력을 생성하도록 단계를 구성합니다.",
      "B": "AWS Step Functions를 사용하여 녹음을 처리하는 워크플로우를 조율합니다. 오디오를 텍스트로 변환하기 위해 Amazon Transcribe를 호출하고, 작업 완료를 검증하고, Amazon Bedrock FM을 직접 호출하여 JSON 형식으로 요약 및 감정 분석을 생성하도록 단계를 구성합니다.",
      "C": "AWS Step Functions를 사용하여 녹음을 처리하는 워크플로우를 조율합니다. 오디오를 텍스트로 변환하기 위해 Amazon Transcribe를 호출하고, 작업 완료를 검증하고, AWS Lambda 함수를 호출하여 Amazon Bedrock FM을 호출할 프롬프트를 생성하고 구조화된 분석 출력을 생성하도록 단계를 구성합니다.",
      "D": "소스 S3 버킷을 Amazon EventBridge로 이벤트를 보내도록 구성합니다. 버킷에 객체가 생성될 때 Step Functions 워크플로우를 호출하도록 EventBridge 규칙을 생성합니다.",
      "E": "소스 S3 버킷을 버킷에 객체가 생성될 때 Step Functions 워크플로우에 알림을 보내도록 구성합니다."
    },
    "answer": "BD",
    "explanation": "다중 선택으로 워크플로우 자동화와 처리 조율을 다룹니다.\n\n정답은 B와 D의 조합입니다.\n\nB는 Transcribe로 음성을 텍스트 변환, Bedrock FM을 직접 호출(Lambda 래핑 불필요)하여 JSON 구조화 출력(요약+감정분석). 직접 FM 호출은 간단하고 20MB 파일 처리에 충분. D는 S3 객체 생성 시 EventBridge로 Step Functions 워크플로우 자동 트리거(폴링 불필요). A는 Lambda로 FM을 호출하지만 불필요한 단계, C도 Lambda 프롬프트 생성이 추가 오버헤드, E는 S3 알림(SNS/SQS)로 Step Functions 직접 트리거 불가능. 'structured format'(JSON)은 Bedrock FM이 직접 지원하므로 B가 최적, EventBridge 자동 트리거\n(D) 가 구현 편의성을 제공합니다.",
    "en_q": "A financial services company wants to use Amazon Bedrock foundation models (FMs) to analyze call center recordings. When calls end, the call center stores recordings as MP3 files in an Amazon S3 bucket. The company needs to generate summaries and sentiment analysis for the recordings in a structured format as soon as new files are created. The recordings average 20 MB in size. Which combination of solutions will meet these requirements? (Choose two.)",
    "en_opts": {
      "A": "Use AWS Step Functions to orchestrate a workflow to process the recordings. Configure steps to invoke Amazon Transcribe to convert audio to text, validate job completion, and to invoke an AWS Lambda function to process the text by using Amazon Bedrock FMs to generate structured analysis output.",
      "B": "Use AWS Step Functions to orchestrate a workflow to process the recordings. Configure steps to invoke Amazon Transcribe to convert audio to text, validate job completion, and to directly invoke Amazon Bedrock FMs to generate summaries and sentiment analysis in JSON format.",
      "C": "Use AWS Step Functions to orchestrate a workflow to process the recordings. Configure steps to invoke Amazon Transcribe to convert audio to text, validate job completion, and to invoke an AWS Lambda function to create a prompt to invoke Amazon Bedrock FMs to generate structured analysis output.",
      "D": "Configure the source S3 bucket to send events to Amazon EventBridge. Create an EventBridge rule to invoke the Step Functions workflow when an object is created in the bucket.",
      "E": "Configure the source S3 bucket to send notifications to the Step Functions workflow when an object is created in the bucket."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402490-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 94,
    "question": "의료 기기 회사가 회사 기기를 사용한 의료 절차 보고서를 AI 어시스턴트에 공급하려고 합니다. 환자 개인 정보를 보호하기 위해 AI 어시스턴트는 외과의에게만 환자 개인 식별 정보(PII)를 노출해야 합니다. AI 어시스턴트는 엔지니어를 위해 PII를 수정해야 합니다. AI 어시스턴트는 3년 미만인 의료 보고서만 참조해야 합니다. 회사는 보고서가 발행될 때마다 Amazon S3 버킷에 보고서를 저장합니다. 회사는 이미 Amazon Bedrock 지식 기반을 설정했습니다. AI 어시스턴트는 Amazon Cognito를 사용하여 사용자를 인증합니다. 이 요구사항을 충족할 솔루션은 어떤 것입니까?",
    "options": {
      "A": "S3 버킷에서 Amazon Macie PII 감지를 활성화합니다. S3 트리거를 사용하여 보고서에서 PII를 수정하는 AWS Lambda 함수를 호출합니다. Lambda 함수를 구성하여 버킷에서 오래된 문서를 삭제하고 지식 기반 동기화를 호출합니다.",
      "B": "새 보고서가 버킷에 업로드될 때 S3 버킷과 지식 기반을 동기화하는 AWS Lambda 함수를 호출합니다. 엔지니어 Cognito 사용자 그룹에 속한 사용자인 경우 Amazon Comprehend를 호출하여 PII를 감지하고 수정하는 두 번째 Lambda 함수를 사용합니다. 버킷에서 3년보다 오래된 보고서를 제거하도록 S3 Lifecycle 구성을 설정합니다.",
      "C": "버킷에서 3년보다 오래된 보고서를 제거하도록 S3 Lifecycle 구성을 설정합니다. 버킷과 지식 기반 간의 일일 동기화를 실행하도록 AWS Lambda 함수를 예약합니다. 사용자가 AI 어시스턴트와 상호작용할 때 사용자의 Cognito 사용자 그룹과 일치하는 ApplyGuardrail 구성을 호출하여 적절한 경우 에이전트 응답에서 PII를 수정합니다.",
      "D": "두 번째 지식 기반을 생성합니다. 버킷에서 3년보다 오래된 보고서를 제거하도록 S3 Lifecycle 구성을 설정합니다. 새 보고서가 버킷에 업로드될 때 버킷을 원본 지식 기반과 동기화하는 AWS Lambda 함수를 호출합니다. Amazon Comprehend를 사용하여 PII를 감지하고 수정한 후 버킷을 두 번째 지식 기반과 동기화합니다. 사용자가 AI 어시스턴트와 상호작용할 때 사용자의 Cognito 사용자 그룹에 따라 모델을 적절한 지식 기반으로 리디렉션합니다."
    },
    "answer": "C",
    "explanation": "역할 기반 PII 필터링과 데이터 라이프사이클 관리를 통합하는 문제입니다.\n\n정답 C는 최적의 아키텍처: (1) S3 Lifecycle으로 3년 이상 보고서 자동 삭제(규정 준수), (2) 일일 Lambda 스케줄로 버킷-지식기반 동기화(유지보수 자동화), (3) Bedrock guardrails + Cognito 그룹으로 응답 시점 PII 제어(외과의 원본, 엔지니어 수정). 응답 생성 후 guardrail 적용으로 모든 사용자 유형 처리. A는 Macie 감지만으로 자동 수정 불가, B는 업로드 시점 수정으로 지식기반이 수정된 데이터만 포함(외과의가 원본 미열람), D는 이중 지식기반 관리 오버헤드 과다.\n\n단일 지식기반 + guardrails로 역할 기반 필터링\n(C) 이 AIP-C01의 권장 패턴입니다.",
    "en_q": "A medical device company wants to feed reports of medical procedures that used the company's devices into an AI assistant. To protect patient privacy, the AI assistant must expose patient personally identifiable information (PII) only to surgeons. The AI assistant must redact PII for engineers. The AI assistant must reference only medical reports that are less than 3 years old. The company stores reports in an Amazon S3 bucket as soon as each report is published. The company has already set up an Amazon Bedrock knowledge base. The AI assistant uses Amazon Cognito to authenticate users. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Enable Amazon Macie PII detection on the S3 bucket. Use an S3 trigger to invoke an AWS Lambda function that redacts PII from the reports. Configure the Lambda function to delete outdated documents from the bucket and to invoke knowledge base syncing.",
      "B": "Invoke an AWS Lambda function to sync the S3 bucket and the knowledge base when a new report is uploaded to the bucket. Use a second Lambda function to invoke Amazon Comprehend to detect and redact PII if a user is part of the engineer Cognito user group. Set up an S3 Lifecycle configuration to remove reports that are older than 3 years from the bucket.",
      "C": "Set up an S3 Lifecycle configuration on the bucket to remove reports that are older than 3 years. Schedule an AWS Lambda function to run daily syncs between the bucket and the knowledge base. When users interact with the AI assistant, call the ApplyGuardrail configuration that matches the user's Cognito user group to redact PII from the agent's responses if appropriate.",
      "D": "Create a second knowledge base. Set up an S3 Lifecycle configuration on the bucket to remove reports that are older than 3 years. Invoke an AWS Lambda function that syncs the bucket with the original knowledge base when a new report is uploaded to the bucket. Use Amazon Comprehend to detect and redact PII before syncing the bucket with the second knowledge base. When a user interacts with the AI assistant, redirect the model to the appropriate knowledge base depending on the user's Cognito user group."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402491-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 95,
    "question": "대규모 전자상거래 회사가 기초 모델(FM)을 배포하여 제품 설명을 생성합니다. 회사의 엔지니어링 팀은 Amazon CloudWatch를 사용하여 토큰 사용량, 레이턴시, 오류율 등의 기술 메트릭을 모니터링합니다. 회사의 마케팅 팀은 자체 시스템에서 전환율 및 수익 영향 등의 비즈니스 메트릭을 추적합니다. 회사는 기술 성능을 비즈니스 결과와 연관시키는 통합 옵저버빌리티 솔루션이 필요합니다. 솔루션은 운영 메트릭이 성능 저하를 나타낼 때 이해관계자에게 자동 경고를 제공해야 합니다. 솔루션은 기술 및 비즈니스 메트릭 전체에 대한 포괄적인 가시성을 제공해야 합니다. 이 요구사항을 충족할 솔루션은 어떤 것입니까?",
    "options": {
      "A": "기술 메트릭과 가져온 비즈니스 메트릭을 포함하는 CloudWatch 대시보드를 생성합니다. 기술 데이터와 비즈니스 데이터를 결합하는 CloudWatch 복합 경보를 구성합니다. Amazon SNS를 사용하여 이해관계자에게 알림을 설정합니다.",
      "B": "Amazon Managed Grafana를 사용하여 CloudWatch의 기술 메트릭을 외부 소스의 비즈니스 메트릭으로 시각화합니다. Amazon Managed Grafana 경보를 구성하여 AWS Lambda 함수를 호출합니다. 메트릭이 사전 정의된 임계값을 초과할 때 문제를 자동으로 해결하도록 Lambda 함수를 구성합니다.",
      "C": "CloudWatch 메트릭 스트림을 사용하여 CloudWatch 메트릭을 Amazon S3로 스트리밍합니다. Amazon QuickSight 대시보드를 생성하여 결합된 기술 메트릭 및 비즈니스 메트릭을 시각화합니다. 메트릭이 사전 정의된 임계값을 초과할 때 이해관계자에게 알림을 보내도록 Amazon EventBridge 규칙을 설정합니다.",
      "D": "기술 메트릭과 가져온 비즈니스 메트릭을 통합하는 CloudWatch 사용자 정의 대시보드를 구성합니다. 이상 탐지를 사용하여 CloudWatch 복합 경보를 설정합니다. 상관된 메트릭이 성능 문제를 나타낼 때 이해관계자에게 알리는 Amazon SNS를 사용하여 경보 작업을 생성합니다."
    },
    "answer": "D",
    "explanation": "기술과 비즈니스 메트릭의 통합 모니터링을 다룹니다.\n\n정답 D는 네 가지 요구사항 충족: (1) CloudWatch 사용자 정의 대시보드로 기술(토큰, 레이턴시) + 비즈니스(전환율, 수익) 메트릭 통합 시각화, (2) 복합 경보(composite alarms)로 상관된 메트릭 감지(기술 + 비즈니스 동시 악화), (3) 이상 탐지로 정상 범위 벗어난 패턴 자동 감지, (4) SNS로 자동 알림. 복합 경보는 여러 메트릭을 AND/OR 논리로 결합하여 실제 성능 저하만 알림. A는 구성은 유사하지만 이상 탐지 미포함, B는 자동 해결(Lambda)이 요구사항 없음, C는 S3 스트리밍이 실시간성 손실. 'correlate technical performance with business outcomes'와 'automatic alerts'는 복합 경보 + 이상 탐지의 조합\n(D) 을 요구합니다.",
    "en_q": "A large ecommerce company has deployed a foundation model (FM) to generate product descriptions. The company's engineering team monitors technical metrics such as token usage, latency, and error rates by using Amazon CloudWatch. The company's marketing team tracks business metrics such as conversion rates and revenue impact in its own systems. The company needs a unified observability solution that correlates technical performance with business outcomes. The solution must provide automatic alerts to stakeholders when operational metrics indicate degradation. The solution must provide comprehensive visibility across both technical and business metrics. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Create CloudWatch dashboards that include technical metrics and imported business metrics. Configure CloudWatch composite alarms that combine technical data and business data. Use Amazon SNS to set up notifications to stakeholders.",
      "B": "Use Amazon Managed Grafana to visualize technical metrics from CloudWatch with business metrics from external sources. Configure Amazon Managed Grafana alerts to invoke AWS Lambda functions. Configure the Lambda functions to remediate issues automatically when metrics exceed predefined thresholds.",
      "C": "Stream CloudWatch metrics to Amazon S3 by using CloudWatch metric streams. Create Amazon QuickSight dashboards to visualize the combined technical metrics and business metrics. Set up Amazon EventBridge rules to send notifications to stakeholders when metrics exceed predefined thresholds.",
      "D": "Configure CloudWatch custom dashboards that integrate operational metrics with imported business metrics. Set up CloudWatch composite alarms with anomaly detection. Use Amazon SNS to create alarm actions to notify stakeholders when correlated metrics indicate performance issues."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402492-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 96,
    "question": "GenAI 개발자가 유럽 기반 회사의 내부 비즈니스 애플리케이션을 향상시킬 Amazon Bedrock 기초 모델(FM)을 평가하고 있습니다. 회사는 AWS Control Tower에서 다중 계정 랜딩 존을 가지고 있습니다. 회사는 SCP를 사용하여 자신의 계정이 eu-north-1 지역과 eu-west-1 지역만 사용하도록 합니다. 모든 고객 데이터는 승인된 AWS 지역 내의 프라이빗 네트워크에 유지되어야 합니다. GenAI 개발자는 분석 및 테스트를 기반으로 FM을 선택하고 eu-central-1 지역과 eu-west-3 지역에서 모델을 호스팅합니다. GenAI 개발자는 회사 직원을 위해 FM에 대한 액세스를 활성화해야 합니다. GenAI 개발자는 FM에 대한 요청이 프라이빗이고 FM과 동일한 지역 내에 유지되도록 해야 합니다. 이 요구사항을 충족할 솔루션은 어떤 것입니까?",
    "options": {
      "A": "eu-north-1의 VPC에서 프라이빗 Amazon API Gateway REST API로 노출되는 AWS Lambda 함수를 배포합니다. eu-central-1 및 eu-west-3에서 선택한 FM에 대한 VPC 엔드포인트를 생성합니다. 기존 SCP를 확장하여 직원들이 FM을 사용할 수 있도록 합니다. REST API를 비즈니스 애플리케이션과 통합합니다.",
      "B": "eu-north-1에서 Amazon EC2 인스턴스에 FM을 배포합니다. EC2 인스턴스 앞에 프라이빗 Amazon API Gateway REST API를 배포합니다. Amazon Bedrock VPC 엔드포인트를 구성합니다. REST API를 비즈니스 애플리케이션과 통합합니다.",
      "C": "FM을 EU.amazon.* 엔드포인트를 통한 교차 지역 추론을 사용하도록 구성하여 모든 호출이 유럽 내에 유지되도록 합니다. Amazon Bedrock VPC 엔드포인트를 구성합니다. FM이 사용 가능한 유럽 기반 지역의 추론 프로필을 통해 직원들이 FM을 사용할 수 있도록 기존 SCP를 확장합니다. 추론 프로필을 사용하여 Amazon Bedrock을 비즈니스 애플리케이션과 통합합니다.",
      "D": "eu-north-1에서 Amazon SageMaker AI에 FM을 배포합니다. SageMaker AI VPC 엔드포인트를 구성합니다. 직원들이 SageMaker AI 엔드포인트를 사용할 수 있도록 기존 SCP를 확장합니다. SageMaker AI의 FM을 비즈니스 애플리케이션과 통합합니다."
    },
    "answer": "C",
    "explanation": "【핵심 용어】\n▸ Inference Profiles — Amazon Bedrock의 교차 지역 추론 최적화 기능\n▸ eu.amazon.* Endpoint — 유럽 내 모든 호출을 유럽 내에서만 처리하는 엔드포인트\n▸ SCP Constraint — AWS Organizations의 Service Control Policy로 지역 사용 제한\n\n【정답 포인트】\n▸ Inference Profiles → eu-central-1, eu-west-3의 모델을 eu-north-1에서 액세스\n▸ eu.amazon.* 엔드포인트 → 모든 호출이 유럽 경계 내에서 유지\n▸ VPC Endpoint → Amazon Bedrock으로의 요청을 프라이빗 네트워크로 한정\n▸ SCP 확장 → inference profile 사용 권한 부여로 기존 제약 준수\n\n【오답 체크】\n(A) Lambda 래핑은 불필요한 복잡도 추가. 호출 간 레이턴시 증가\n(B) EC2 자체 관리는 오버헤드 큼. SCP 제약(eu-north-1, eu-west-1만)을 우회 불가능\n(D) SageMaker는 eu-north-1 호스팅만 가능. eu-central-1, eu-west-3 모델 활용 불가\n\n【시험 포인트】\n▸ 지역 제약 + 호스팅 지역 불일치 → Inference Profiles로 우아하게 해결\n▸ Private Network 유지 → VPC Endpoint + eu.amazon.* 엔드포인트 조합\n▸ Bedrock 최신 기능 → AIP-C01에서 Inference Profiles 강조 증가 중",
    "en_q": "A GenAI developer is evaluating Amazon Bedrock foundation models (FMs) to enhance a Europe-based company's internal business application. The company has a multi-account landing zone in AWS Control Tower. The company uses SCPs to allow its accounts to use only the eu-north-1 Region and the eu-west-1 Region. All customer data must remain in private networks within the approved AWS Regions. The GenAI developer selects an FM based on analysis and testing and hosts the model in the eu-central-1 Region and the eu-west-3 Region. The GenAI developer must enable access to the FM for the company's employees. The GenAI developer must ensure that requests to the FM are private and remain with the same Regions as the FM. Which solution will meet these requirements?",
    "en_opts": {
      "A": "Deploy an AWS Lambda function that is exposed by a private Amazon API Gateway REST API to a VPC in eu-north-1. Create a VPC endpoint for the selected FM in eu-central-1 and eu-west-3. Extend existing SCPs to allow employees to use the FM. Integrate the REST API with the business application.",
      "B": "Deploy the FM on Amazon EC2 instances in eu-north-1. Deploy a private Amazon API Gateway REST API in front of the EC2 instances. Configure an Amazon Bedrock VPC endpoint. Integrate the REST API with the business application.",
      "C": "Configure the FM to use cross-Region inference through an eu.amazon.* endpoint to ensure that all calls remain within Europe. Configure an Amazon Bedrock VPC endpoint. Extend existing SCPs to allow employees to use the FM through inference profiles in Europe-based Regions where the FM is available. Use an inference profile to integrate Amazon Bedrock with the business application.",
      "D": "Deploy the FM in Amazon SageMaker AI in eu-north-1. Configure a SageMaker AI VPC endpoint. Extend existing SCPs to allow employees to use the SageMaker AI endpoint. Integrate the FM in SageMaker AI with the business application."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402493-exam-aws-certified-generative-ai-developer-professional-aip/"
  },
  {
    "id": 97,
    "question": "의료 회사가 의료 쿼리를 처리하는 애플리케이션을 개발합니다. 애플리케이션은 의미 희석을 줄임으로써 높은 정확도로 복잡한 쿼리에 응답해야 합니다. 애플리케이션은 의료 문서의 영역별 용어를 참조하여 의료 용어의 모호성을 줄여야 합니다. 애플리케이션은 분당 1,000개의 쿼리에 응답할 수 있어야 하며 응답 시간은 2초 미만이어야 합니다. 이 요구사항을 충족하면서 운영 오버헤드가 가장 적을 솔루션은 어떤 것입니까?",
    "options": {
      "A": "Amazon API Gateway를 사용하여 Amazon Bedrock 에이전트로 들어오는 쿼리를 라우팅합니다. Anthropic Claude 모델을 사용하여 쿼리를 분해하고 Amazon Titan 모델을 사용하여 쿼리를 확장하도록 에이전트를 구성합니다. 참조 의료 문서를 저장할 Amazon Bedrock 지식 기반을 생성합니다.",
      "B": "참조 의료 문서를 저장할 Amazon Bedrock 지식 기반을 구성합니다. 지식 기반에서 쿼리 분해를 활성화합니다. 기초 모델(FM) 및 지식 기반을 지원하도록 Amazon Bedrock 흐름을 구성합니다.",
      "C": "쿼리 분해 및 쿼리 확장 모두에 대해 사용자 정의 ML 모델을 호스팅하도록 Amazon SageMaker AI를 사용합니다. 참조 의료 문서를 저장할 Amazon Bedrock 지식 기반을 구성합니다. 지식 기반의 문서를 암호화합니다.",
      "D": "여러 AWS Lambda 함수를 조율하기 위해 Amazon Bedrock 에이전트를 생성하여 쿼리를 분해합니다. 참조 의료 문서를 저장할 Amazon Bedrock 지식 기반을 생성합니다. 에이전트의 내장 지식 기반 기능을 사용합니다. 에이전트에 깊은 연구 및 추론 기능을 추가하여 의료 용어의 모호성을 줄입니다."
    },
    "answer": "B",
    "explanation": "의료 도메인의 복잡한 쿼리 처리와 성능, 의미론적 정확도를 통합합니다.\n\n정답 B는 Amazon Bedrock의 네이티브 기능 조합: (1) Knowledge Bases로 의료 문서 저장(영역별 용어 참조), (2) 지식 기반의 'query decomposition' 기능으로 복잡한 쿼리를 단순 쿼리로 분해하여 의미 희석 감소, (3) Amazon Bedrock Flows로 FM과 지식 기반을 통합(낮은 레이턴시, 높은 처리량). 분당 1,000 쿼리(약 16.7/초)와 2초 미만은 관리형 서비스\n(B) 로 충족. A는 Claude+Titan 조합이 오버엔지니어링이고 분해/확장 중복, C는 SageMaker 모델 관리 오버헤드, D는 Lambda 조율이 지연시간 증가. 'query decomposition'은 Bedrock Knowledge Bases의 최신 기능으로 복잡 쿼리를 최적으로 처리합니다.",
    "en_q": "A healthcare company is developing an application to process medical queries. The application must answer complex queries with high accuracy by reducing semantic dilution. The application must refer to domain-specific terminology in medical documents to reduce ambiguity in medical terminology. The application must be able to respond to 1,000 queries each minute with response times less than 2 seconds. Which solution will meet these requirements with the LEAST operational overhead?",
    "en_opts": {
      "A": "Use Amazon API Gateway to route incoming queries to an Amazon Bedrock agent. Configure the agent to use an Anthropic Claude model to decompose queries and an Amazon Titan model to expand queries. Create an Amazon Bedrock knowledge base to store the reference medical documents.",
      "B": "Configure an Amazon Bedrock knowledge base to store the reference medical documents. Enable query decomposition in the knowledge base. Configure an Amazon Bedrock flow that uses a foundation model (FM) and the knowledge base to support the application.",
      "C": "Use Amazon SageMaker AI to host custom ML models for both query decomposition and query expansion. Configure Amazon Bedrock knowledge bases to store the reference medical documents. Encrypt the documents in the knowledge base.",
      "D": "Create an Amazon Bedrock agent to orchestrate multiple AWS Lambda functions to decompose queries. Create an Amazon Bedrock knowledge base to store the reference medical documents. Use the agent's built-in knowledge base capabilities. Add deep research and reasoning capabilities to the agent to reduce ambiguity in the medical terminology."
    },
    "source": "https://www.examtopics.com/discussions/amazon/view/402494-exam-aws-certified-generative-ai-developer-professional-aip/"
  }
];
