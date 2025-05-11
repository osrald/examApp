import { Question } from '../models/question.model';

export const QUESTIONS: Question[] = [
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Why Cloud Technology is Transforming Business',
    questionText: 'Which item describes a goal of an organization seeking digital transformation?',
    type: 'single',
    options: [
      { id: 1, text: 'Streamline their hardware procurement process to forecast at least a quarter into the future.', isCorrect: false },
      { id: 2, text: 'Break down data silos and generate real time insights.', isCorrect: true },
      { id: 3, text: 'Ensure better security by decoupling teams and their data.', isCorrect: false },
      { id: 4, text: 'Reduce emissions by using faster networks in their on-premises workloads.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Why Cloud Technology is Transforming Business',
    questionText: 'An organization has made significant investments in their own infrastructure and has regulatory requirements for their data to be hosted on-premises. Which cloud implementation would best suit their needs?',
    type: 'single',
    options: [
      { id: 1, text: 'Software as a service', isCorrect: false },
      { id: 2, text: 'Private Cloud.', isCorrect: true },
      { id: 3, text: 'Platform as a service', isCorrect: false },
      { id: 4, text: 'Public Cloud', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Why Cloud Technology is Transforming Business',
    questionText: 'Select the definition of digital transformation.',
    type: 'single',
    options: [
      { id: 1, text: 'When an organization uses new digital technologies to create or modify on-premises business processes.', isCorrect: false },
      { id: 2, text: 'When an organization uses new digital technologies to create or modify business processes, culture, and customer experiences.', isCorrect: true },
      { id: 3, text: 'When an organization uses new digital technologies to create or modify financial models for how a business is run.', isCorrect: false },
      { id: 4, text: 'When an organization uses new digital technologies to create or modify technology infrastructure to focus on cost saving.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Why Cloud Technology is Transforming Business',
    questionText: 'What is seen as a limitation of on-premises infrastructure, when compared to cloud infrastructure?',
    type: 'single',
    options: [
      { id: 1, text: 'The on-premises hardware procurement process can take a long time.', isCorrect: true },
      { id: 2, text: 'The on-premises networking is more complicated.', isCorrect: false },
      { id: 3, text: 'Scaling processing is too difficult due to power consumption.', isCorrect: false },
      { id: 4, text: 'Maintenance workers do not have physical access to the servers.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Why Cloud Technology is Transforming Business',
    questionText: 'As the world and business changes, organizations have to decide between embracing new technology and transforming, or keeping their technology and approaches the same. What risks might an organization face by not transforming as their market evolves?',
    type: 'single',
    options: [
      { id: 1, text: 'Focusing on `how` they operate can prevent organizations from seeing transformation opportunities.', isCorrect: true },
      { id: 2, text: 'Focusing on `why` they operate can lead to inefficient use of resources and disruption.', isCorrect: false },
      { id: 3, text: 'Organizations risk losing market leadership if they spend too much time on digital transformation.', isCorrect: false },
      { id: 4, text: 'Embracing new technology can cause organizations to overspend on innovation.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Why Cloud Technology is Transforming Business',
    questionText: 'An organization has a new application, and user subscriptions are growing faster than on-premises infrastructure can handle. What benefit of the cloud might help them in this situation?',
    type: 'single',
    options: [
      { id: 1, text: 'It provides physical access, so the organization can deploy servers faster.', isCorrect: false },
      { id: 2, text: 'It is scalable, so the organization could shorten their infrastructure deployment time.', isCorrect: true },
      { id: 3, text: 'It is cost effective, so the organization will no longer have to pay for computing once the app is in the cloud.', isCorrect: false },
      { id: 4, text: 'It is secure, so the organization will not have to worry about the new subscribers data.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Why Cloud Technology is Transforming Business',
    questionText: 'What is the benefit of implementing a transformation cloud that is based on open infrastructure?',
    type: 'single',
    options: [
      { id: 1, text: 'On-premises software is not open source, so cloud applications are more portable.', isCorrect: false },
      { id: 2, text: 'Open source software makes it easier to patent proprietary software.', isCorrect: false },
      { id: 3, text: 'Open source software reduces the chance of vendor lock-in.', isCorrect: true },
      { id: 4, text: 'Open standards make it easier to hire more developers.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Why Cloud Technology is Transforming Business',
    questionText: 'What is the cloud?',
    type: 'single',
    options: [
      { id: 1, text: 'A Google product made up of on-premises IT infrastructure.', isCorrect: false },
      { id: 2, text: 'A Google product for computing large amounts of data.', isCorrect: false },
      { id: 3, text: 'A metaphor for a network of data centers.', isCorrect: true },
      { id: 4, text: 'A metaphor for the networking capability of internet providers.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Why Cloud Technology is Transforming Business',
    questionText: 'Select the two capabilities that form the basis of a transformation cloud? Select two correct answers.',
    type: 'multiple',
    options: [
      { id: 1, text: 'A trusted cloud gives control of all resources to the user to ensure high availability at all times.', isCorrect: false },
      { id: 2, text: 'Open infrastructure gives the freedom to innovate by running applications in the place that makes the most sense.', isCorrect: true },
      { id: 3, text: 'Collaboration cloud ensures that the device a user connects with only works on the corporate network.', isCorrect: false },
      { id: 4, text: 'Data cloud provides a unified solution to manage data across the entire data lifecycle.', isCorrect: true },
      { id: 5, text: 'Sustainable cloud ensures the costs of cloud resources are controlled to prevent budget overrun.', isCorrect: false },
    ]
  },  
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Fundamental Cloud Concepts',
    questionText: 'An organization has shifted from a CapEx to OpEx based spending model. Which of these statements is true?',
    type: 'single',
    options: [
      { id: 1, text: 'Budgeting will only happen on an annual basis.', isCorrect: false },
      { id: 2, text: 'Hardware procurement is done by a centralized team.', isCorrect: false },
      { id: 3, text: 'They will only pay for what they use.', isCorrect: true },
      { id: 4, text: 'They will only pay for what they forecast.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Fundamental Cloud Concepts',
    questionText: 'An organization wants to innovate using the latest technologies, but also has compliance needs that specify data must be stored in specific locations. Which cloud approach would best suit their needs?',
    type: 'single',
    options: [
      { id: 1, text: 'Multicloud', isCorrect: false },
      { id: 2, text: 'Hybrid Cloud', isCorrect: true },
      { id: 3, text: 'Public Cloud', isCorrect: false },
      { id: 4, text: 'On-premises infrastructure', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Fundamental Cloud Concepts',
    questionText: 'An organization wants to ensure they have redundancy of their resources so their application remains available in the event of a disaster. How can they ensure this happens?',
    type: 'single',
    options: [
      { id: 1, text: 'By putting resources in different zones.', isCorrect: true },
      { id: 2, text: 'By putting resources in the Domain Name System (DNS).', isCorrect: false },
      { id: 3, text: 'Using the edge network to cache the whole application image in a backup.', isCorrect: false },
      { id: 4, text: 'By assigning a different IP address to each resource.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Fundamental Cloud Concepts',
    questionText: 'Which network performance metric describes the amount of data a network can transfer in a given amount of time?',
    type: 'single',
    options: [
      { id: 1, text: 'Domain Name System (DNS)', isCorrect: false },
      { id: 2, text: 'Fiber optics', isCorrect: false },
      { id: 3, text: 'Bandwidth', isCorrect: true },
      { id: 4, text: 'Latency', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Fundamental Cloud Concepts',
    questionText: 'A financial services organization has bank branches in a number of countries, and has built an application that needs to run in different configurations based on the local regulations of each country. How can cloud infrastructure help achieve this goal?',
    type: 'single',
    options: [
      { id: 1, text: 'Flexibility of infrastructure configuration.', isCorrect: true },
      { id: 2, text: 'Scalability of infrastructure to needs.', isCorrect: false },
      { id: 3, text: 'Reliability of the infrastructure availability.', isCorrect: false },
      { id: 4, text: 'Total cost of ownership of the infrastructure.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Cloud Computing Models and Shared Responsibility',
    questionText: 'Which option best describes a benefit of Infrastructure as a Service (IaaS)?',
    type: 'single',
    options: [
      { id: 1, text: 'It is cost-effective, as all infrastructure costs are handled under a single monthly or annual subscription fee.', isCorrect: false },
      { id: 2, text: 'It reduces development time, as developers can go straight to coding instead of spending time setting up and maintaining a development environment.', isCorrect: false },
      { id: 3, text: 'It has low management overhead, as all administration and management tasks for data, servers, storage, and updates are handled by the cloud vendor.', isCorrect: false },
      { id: 4, text: 'It`s efficient, as IaaS resources are available when needed and resources aren’t wasted by overbuilding capacity.', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Cloud Computing Models and Shared Responsibility',
    questionText: 'Which cloud computing service model offers a develop-and-deploy environment to build cloud applications?',
    type: 'single',
    options: [
      { id: 1, text: 'Software as a Service (SaaS)', isCorrect: false },
      { id: 2, text: 'Function as a Service (FaaS)', isCorrect: false },
      { id: 3, text: 'Platform as a Service (PaaS)', isCorrect: true },
      { id: 4, text: 'Infrastructure as a Service (IaaS)', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Cloud Computing Models and Shared Responsibility',
    questionText: 'An organization wants to move to cloud-based collaboration software, but due to limited IT staff one of their main drivers is having low maintenance needs. Which cloud computing model would best suit their requirements?',
    type: 'single',
    options: [
      { id: 1, text: 'IT as a service (ITaaS)', isCorrect: false },
      { id: 2, text: 'Infrastructure as a Service (IaaS)', isCorrect: false },
      { id: 3, text: 'Software as a Service (SaaS)', isCorrect: true },
      { id: 4, text: 'Platform as a Service (PaaS)', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Digital Transformation with Google Cloud',
    subActivity: 'Cloud Computing Models and Shared Responsibility',
    questionText: 'In the cloud computing shared responsibility model, what types of content are customers always responsible for, regardless of the computing model chosen?',
    type: 'single',
    options: [
      { id: 1, text: 'The customer is responsible for securing anything that they create within the cloud, such as the configurations, access policies, and user data.', isCorrect: true },
      { id: 2, text: 'The customer is not responsible for any of the data in the cloud, as data management is the responsibility of the cloud provider who is hosting the data.', isCorrect: false },
      { id: 3, text: 'The customer is responsible for all infrastructure decisions, server configurations and database monitoring.', isCorrect: false },
      { id: 4, text: 'The customer is responsible for security of the operating system, software stack required to run their applications and any hardware, networks, and physical security.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'The Value of Data',
    questionText: 'New cloud tools make it possible to harness the potential of unstructured data. Which of these use cases best demonstrates this?',
    type: 'single',
    options: [
      { id: 1, text: 'Analyzing social media posts to identify sentiment toward a brand', isCorrect: true },
      { id: 2, text: 'Using GPS coordinates to power a ride-sharing app', isCorrect: false },
      { id: 3, text: 'Analyzing historical sales figures to predict future trends', isCorrect: false },
      { id: 4, text: 'Creating visualizations from seasonal weather data', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'The Value of Data',
    questionText: 'Which is a repository designed to ingest, store, explore, process, and analyze any type or volume of raw data, regardless of the source?',
    type: 'single',
    options: [
      { id: 1, text: 'Database', isCorrect: false },
      { id: 2, text: 'Data lake', isCorrect: true },
      { id: 3, text: 'Data warehouse', isCorrect: false },
      { id: 4, text: 'Data archive', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'The Value of Data',
    questionText: 'A car insurance company has a large database that stores customer details, including the vehicles they own and past claims. The structure of the database means that information is stored in tables, rows, and columns. What type of database is this?',
    type: 'single',
    options: [
      { id: 1, text: 'An object database', isCorrect: false },
      { id: 2, text: 'An XML database', isCorrect: false },
      { id: 3, text: 'A relational database', isCorrect: true },
      { id: 4, text: 'A non-relational database', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'The Value of Data',
    questionText: 'Which data type is highly organized and well-defined?',
    type: 'single',
    options: [
      { id: 1, text: 'Unstructured data', isCorrect: false },
      { id: 2, text: 'Semi-structured data', isCorrect: false },
      { id: 3, text: 'A hybrid of structured, semi-structured, and unstructured data', isCorrect: false },
      { id: 4, text: 'Structured data', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'The Value of Data',
    questionText: 'Which step in the data value chain is where collected raw data is transformed into a form that’s ready to derive insights from?',
    type: 'single',
    options: [
      { id: 1, text: 'Data genesis', isCorrect: false },
      { id: 2, text: 'Data processing', isCorrect: true },
      { id: 3, text: 'Data storage', isCorrect: false },
      { id: 4, text: 'Data analysis', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'The Value of Data',
    questionText: 'A solar energy company wants to analyze weather data to better understand the seasonal impact on their business. On which platform could they find free-to-use weather datasets?',
    type: 'single',
    options: [
      { id: 1, text: 'Google Cloud console', isCorrect: false },
      { id: 2, text: 'App Engine', isCorrect: false },
      { id: 3, text: 'Google Cloud Marketplace', isCorrect: true },
      { id: 4, text: 'Google Play', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'The Value of Data',
    questionText: 'Which represents the proprietary customer datasets that a business collects from customer or audience transactions and interactions?',
    type: 'single',
    options: [
      { id: 1, text: 'First-party data', isCorrect: true },
      { id: 2, text: 'Second-party data', isCorrect: false },
      { id: 3, text: 'Third-party data', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'The Value of Data',
    questionText: 'What is Google Cloud’s modern and serverless data warehousing solution?',
    type: 'single',
    options: [
      { id: 1, text: 'Compute Engine', isCorrect: false },
      { id: 2, text: 'Cloud Storage', isCorrect: false },
      { id: 3, text: 'Vertex AI', isCorrect: false },
      { id: 4, text: 'BigQuery', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'The Value of Data',
    questionText: 'What is data governance?',
    type: 'single',
    options: [
      { id: 1, text: 'The process of analyzing data to gain insights and make informed decisions', isCorrect: false },
      { id: 2, text: 'The process of collecting and storing data for future use', isCorrect: false },
      { id: 3, text: 'The process of deleting unnecessary data to save storage space', isCorrect: false },
      { id: 4, text: 'The process of setting internal data policies and ensuring compliance with external standards', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'The Value of Data',
    questionText: 'An online retailer uses a smart analytics tool to ingest real-time customer behavior data to surface the best suggestions for particular users. How can machine learning guide this activity?',
    type: 'single',
    options: [
      { id: 1, text: 'Through machine learning, a user’s credit card transactions can be analyzed to determine regular purchases.', isCorrect: false },
      { id: 2, text: 'Through machine learning, with every click that the user makes, their website experience becomes increasingly personalized.', isCorrect: true },
      { id: 3, text: 'Machine learning can be used to make all users see the same product recommendations, regardless of their preferences or behavior.', isCorrect: false },
      { id: 4, text: 'Machine learning can help identify user behavior in real time, but cannot make personalized suggestions based on the data.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Google Cloud Data Management Solutions',
    questionText: 'What is Google`s big data database service that powers many core Google services, including Google Search, Google Analytics, Google Maps Platform, and Gmail?',
    type: 'single',
    options: [
      { id: 1, text: 'Cloud SQL', isCorrect: false },
      { id: 2, text: 'Cloud Storage', isCorrect: false },
      { id: 3, text: 'Bigtable', isCorrect: true },
      { id: 4, text: 'Spanner', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Google Cloud Data Management Solutions',
    questionText: 'Which characteristic is true for all Cloud Storage classes?',
    type: 'single',
    options: [
      { id: 1, text: 'Accessibility only within one region', isCorrect: false },
      { id: 2, text: 'Maximum storage limits', isCorrect: false },
      { id: 3, text: 'High latency and low durability', isCorrect: false },
      { id: 4, text: 'Geo-redundancy if data is stored in a multi-region or dual-region', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Google Cloud Data Management Solutions',
    questionText: 'Which is the best SQL-based storage option for a transactional workload that requires local or regional scalability?',
    type: 'single',
    options: [
      { id: 1, text: 'Spanner', isCorrect: false },
      { id: 2, text: 'Bigtable', isCorrect: false },
      { id: 3, text: 'Cloud Storage', isCorrect: false },
      { id: 4, text: 'Cloud SQL', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Google Cloud Data Management Solutions',
    questionText: 'What are the two services that BigQuery provides?',
    type: 'single',
    options: [
      { id: 1, text: 'Migration and analytics', isCorrect: false },
      { id: 2, text: 'Storage and analytics', isCorrect: true },
      { id: 3, text: 'Networking and storage', isCorrect: false },
      { id: 4, text: 'Compute and analytics', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Google Cloud Data Management Solutions',
    questionText: 'BigQuery works in a multicloud environment. How do organizations benefit from this feature?',
    type: 'single',
    options: [
      { id: 1, text: 'BigQuery lets organizations save costs by limiting the number of cloud providers they use.', isCorrect: false },
      { id: 2, text: 'Data teams can eradicate data silos by analyzing data across multiple cloud providers.', isCorrect: true },
      { id: 3, text: 'Multicloud support in BigQuery is only intended for use in disaster recovery scenarios.', isCorrect: false },
      { id: 4, text: 'Security is more effective when BigQuery is run in on-premises environments.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Google Cloud Data Management Solutions',
    questionText: 'Data in the form of video, pictures, and audio recordings is well suited to object storage. Which product is best for storing this kind of data?',
    type: 'single',
    options: [
      { id: 1, text: 'BigQuery', isCorrect: false },
      { id: 2, text: 'Firestore', isCorrect: false },
      { id: 3, text: 'Cloud Storage', isCorrect: true },
      { id: 4, text: 'Cloud SQL', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Google Cloud Data Management Solutions',
    questionText: 'Which Google Cloud product can be used to synchronize data across databases, storage systems, and applications?',
    type: 'single',
    options: [
      { id: 1, text: 'Dataprep', isCorrect: false },
      { id: 2, text: 'Pub/Sub', isCorrect: false },
      { id: 3, text: 'Datastream', isCorrect: true },
      { id: 4, text: 'Dataproc', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Google Cloud Data Management Solutions',
    questionText: 'Which would be the best SQL-based storage option for a transactional workload that requires global scalability?',
    type: 'single',
    options: [
      { id: 1, text: 'Bigtable', isCorrect: false },
      { id: 2, text: 'Firestore', isCorrect: false },
      { id: 3, text: 'Cloud SQL', isCorrect: false },
      { id: 4, text: 'Spanner', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Google Cloud Data Management Solutions',
    questionText: 'Which strategy describes when databases are migrated from on-premises and private cloud environments to the same type of database hosted by a public cloud provider?',
    type: 'single',
    options: [
      { id: 1, text: 'Managed database migration', isCorrect: false },
      { id: 2, text: 'Lift and shift', isCorrect: true },
      { id: 3, text: 'Remain on-premises', isCorrect: false },
      { id: 4, text: 'Refactoring', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Google Cloud Data Management Solutions',
    questionText: 'A data analyst for an online retailer must produce a sales report at the end of each quarter. Which Cloud Storage class should the retailer use for data accessed every 90 days?',
    type: 'single',
    options: [
      { id: 1, text: 'Standard', isCorrect: false },
      { id: 2, text: 'Coldline', isCorrect: true },
      { id: 3, text: 'Nearline', isCorrect: false },
      { id: 4, text: 'Archive', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Making Data Useful and Accessible',
    questionText: 'Streaming analytics is the processing and analyzing of data records continuously instead of in batches. Which option is a source of streaming data?',
    type: 'single',
    options: [
      { id: 1, text: 'Temperature sensors', isCorrect: true },
      { id: 2, text: 'Payroll records', isCorrect: false },
      { id: 3, text: 'Customer email addresses', isCorrect: false },
      { id: 4, text: 'Medical test results', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Making Data Useful and Accessible',
    questionText: 'Which statement is true about Dataflow?',
    type: 'single',
    options: [
      { id: 1, text: 'It is a messaging service for receiving messages from various device streams.', isCorrect: false },
      { id: 2, text: 'It allows easy data cleaning and transformation through visual tools and machine learning-based suggestions.', isCorrect: false },
      { id: 3, text: 'It is a cloud-based data warehouse for storing and analyzing streaming and batch data.', isCorrect: false },
      { id: 4, text: 'It handles infrastructure setup and maintenance for processing pipelines.', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Making Data Useful and Accessible',
    questionText: 'What feature of Looker makes it easy to integrate into existing workflows and share with multiple teams at an organization?',
    type: 'single',
    options: [
      { id: 1, text: 'It creates easy to understand visualizations.', isCorrect: false },
      { id: 2, text: 'It supports over 60 different SQL databases.', isCorrect: false },
      { id: 3, text: 'It is cost effective.', isCorrect: false },
      { id: 4, text: 'It is 100% web based.', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Making Data Useful and Accessible',
    questionText: 'What is Google Cloud’s distributed messaging service that can receive messages from various device streams such as gaming events, Internet of Things (IoT) devices, and application streams?',
    type: 'single',
    options: [
      { id: 1, text: 'Dataplex', isCorrect: false },
      { id: 2, text: 'Pub/Sub', isCorrect: true },
      { id: 3, text: 'Dataproc', isCorrect: false },
      { id: 4, text: 'Looker', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Making Data Useful and Accessible',
    questionText: 'What Google Cloud business intelligence platform is designed to help individuals and teams analyze, visualize, and share data?',
    type: 'single',
    options: [
      { id: 1, text: 'Cloud Storage', isCorrect: false },
      { id: 2, text: 'Dataflow', isCorrect: false },
      { id: 3, text: 'Dataplex', isCorrect: false },
      { id: 4, text: 'Looker', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Exploring Data Transformation with Google Cloud',
    subActivity: 'Making Data Useful and Accessible',
    questionText: 'What does ETL stand for in the context of data processing?',
    type: 'single',
    options: [
      { id: 1, text: 'Enrichment, tagging, and labeling', isCorrect: false },
      { id: 2, text: 'Enhanced transaction logic', isCorrect: false },
      { id: 3, text: 'Event-time logic', isCorrect: false },
      { id: 4, text: 'Extract, transform, and load', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'AI and ML Fundamentals',
    questionText: 'Which dimension for measuring data quality means that the data conforms to a set of predefined standards and definitions such as type and format?',
    type: 'single',
    options: [
      { id: 1, text: 'Uniqueness', isCorrect: false },
      { id: 2, text: 'Accuracy', isCorrect: false },
      { id: 3, text: 'Consistency', isCorrect: false },
      { id: 4, text: 'Validity', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'AI and ML Fundamentals',
    questionText: 'Artificial intelligence is best suited for replacing or simplifying rule-based systems. Which is an example of this in action?',
    type: 'single',
    options: [
      { id: 1, text: 'Implementing AI to develop a new product or service that has never been seen before.', isCorrect: false },
      { id: 2, text: 'Using AI to replace a human decision-maker in complex situations, such as those involving life-or-death choices.', isCorrect: false },
      { id: 3, text: 'Training a machine learning model to predict a search result ranking.', isCorrect: true },
      { id: 4, text: 'Using a reinforcement learning algorithm to train autonomous drones for package delivery.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'AI and ML Fundamentals',
    questionText: 'How do data analytics and business intelligence differ from AI and ML?',
    type: 'single',
    options: [
      { id: 1, text: 'Data analytics and business intelligence are used only in small businesses, whereas AI and ML are used exclusively by large corporations.', isCorrect: false },
      { id: 2, text: 'Data analytics and business intelligence use automated decision-making processes, whereas AI and ML require human intervention and interpretation of data.', isCorrect: false },
      { id: 3, text: 'Data analytics and business intelligence involve advanced algorithms for predicting future trends, whereas AI and ML focus on processing historical data.', isCorrect: false },
      { id: 4, text: 'Data analytics and business intelligence identify trends from historical data, whereas AI and ML use data to make decisions for future business.', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'AI and ML Fundamentals',
    questionText: 'Google`s AI principles are a set of guiding values that help develop and use artificial intelligence responsibly. Which of these is one of Google’s AI principles?',
    type: 'single',
    options: [
      { id: 1, text: 'AI should be socially beneficial.', isCorrect: false },
      { id: 2, text: 'AI should be accountable to other machines.', isCorrect: false },
      { id: 3, text: 'AI should be made available for any use.', isCorrect: false },
      { id: 4, text: 'AI should create or reinforce unfair bias.', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'AI and ML Fundamentals',
    questionText: 'You are watching a video on YouTube and are shown a list of videos that YouTube thinks you are interested in. What ML solution powers this feature?',
    type: 'single',
    options: [
      { id: 1, text: 'Personalized recommendations', isCorrect: true },
      { id: 2, text: 'Content moderation', isCorrect: false },
      { id: 3, text: 'Video transcription', isCorrect: false },
      { id: 4, text: 'Clickbait detection', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'AI and ML Fundamentals',
    questionText: 'Google applies generative AI to products like Google Workspace, but what is generative AI?',
    type: 'single',
    options: [
      { id: 1, text: 'A type of artificial intelligence that can understand and respond to human emotions.', isCorrect: false },
      { id: 2, text: 'A type of artificial intelligence that can produce new content, including text, images, audio, and synthetic data.', isCorrect: true },
      { id: 3, text: 'A type of artificial intelligence that can create and sustain its own consciousness.', isCorrect: false },
      { id: 4, text: 'A type of artificial intelligence that can make decisions and take actions.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'AI and ML Fundamentals',
    questionText: 'Which technology relies on models to analyze large amounts of data, learn from the insights, and then make predictions and informed decisions?',
    type: 'single',
    options: [
      { id: 1, text: 'Machine learning', isCorrect: true },
      { id: 2, text: 'Expert systems', isCorrect: false },
      { id: 3, text: 'Natural language processing', isCorrect: false },
      { id: 4, text: 'Robotics', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'AI and ML Fundamentals',
    questionText: 'Which option refers to the use of technologies to build machines and computers that can mimic cognitive functions associated with human intelligence?',
    type: 'single',
    options: [
      { id: 1, text: 'Machine learning', isCorrect: false },
      { id: 2, text: 'Artificial intelligence', isCorrect: true },
      { id: 3, text: 'Natural language processing', isCorrect: false },
      { id: 4, text: 'Deep learning', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'AI and ML Fundamentals',
    questionText: 'What does the consistency dimension refer to when data quality is being measured?',
    type: 'single',
    options: [
      { id: 1, text: 'Whether a dataset is free from duplicate values that could prevent an ML model from learning accurately.', isCorrect: false },
      { id: 2, text: 'Whether all the required information is present.', isCorrect: false },
      { id: 3, text: 'Whether the data is up-to-date and reflects the current state of the phenomenon that is being modeled.', isCorrect: false },
      { id: 4, text: 'Whether the data is uniform and doesn`t contain any contradictory information.', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'AI and ML Fundamentals',
    questionText: 'Which use case demonstrates ML`s ability to process natural language?',
    type: 'single',
    options: [
      { id: 1, text: 'Detecting people and objects in surveillance footage to use as evidence in criminal cases.', isCorrect: false },
      { id: 2, text: 'Identifying the topic and sentiment of customer email messages so that they can be routed to the relevant department.', isCorrect: true },
      { id: 3, text: 'Segmenting images into different parts or regions to extract information, such as the text on a sign.', isCorrect: false },
      { id: 4, text: 'Identifying the artist, title, or genre of a song to create playlists based on the user`s listening habits.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'Google Cloud`s AI and ML Solutions',
    questionText: 'Google Cloud offers four options for building machine learning models. Which is best when a business wants to code their own machine learning environment, the training, and the deployment?',
    type: 'single',
    options: [
      { id: 1, text: 'Pre-trained APIs', isCorrect: false },
      { id: 2, text: 'AutoML', isCorrect: false },
      { id: 3, text: 'BigQuery ML', isCorrect: false },
      { id: 4, text: 'Custom training', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'Google Cloud`s AI and ML Solutions',
    questionText: 'Which Google Cloud AI solution is designed to help businesses automate document processing?',
    type: 'single',
    options: [
      { id: 1, text: 'Discovery AI for Retail', isCorrect: false },
      { id: 2, text: 'Contact Center AI', isCorrect: false },
      { id: 3, text: 'Cloud Talent Solution', isCorrect: false },
      { id: 4, text: 'Document AI', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'Google Cloud`s AI and ML Solutions',
    questionText: 'A large media company wants to improve how they moderate online content. Currently, they have a team of human moderators that review content for appropriateness, but are looking to leverage artificial intelligence to improve efficiency. Which of Google`s pre-trained APIs could they use to identify and remove inappropriate content from the media company`s website and social media platforms.',
    type: 'single',
    options: [
      { id: 1, text: 'Speech-to-Text API', isCorrect: false },
      { id: 2, text: 'Video Intelligence API', isCorrect: false },
      { id: 3, text: 'Natural Language API', isCorrect: true },
      { id: 4, text: 'Vision API', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'Google Cloud`s AI and ML Solutions',
    questionText: 'What is the name of Google`s application-specific integrated circuit (ASIC) that is used to accelerate machine learning workloads?',
    type: 'single',
    options: [
      { id: 1, text: 'Tensor Processing Unit (TPU)', isCorrect: true },
      { id: 2, text: 'Graphic Processing Unit (GPU)', isCorrect: false },
      { id: 3, text: 'Vertex Processing Unit (VPU)', isCorrect: false },
      { id: 4, text: 'Central Processing Unit (CPU)', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'Google Cloud`s AI and ML Solutions',
    questionText: 'Which Google Cloud AI solution is designed to help businesses improve their customer service?',
    type: 'single',
    options: [
      { id: 1, text: 'Document AI', isCorrect: false },
      { id: 2, text: 'Discovery AI for Retail', isCorrect: false },
      { id: 3, text: 'Contact Center AI', isCorrect: true },
      { id: 4, text: 'Cloud Talent Solution', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'Google Cloud`s AI and ML Solutions',
    questionText: 'BigQuery ML is a machine learning service that lets users:',
    type: 'single',
    options: [
      { id: 1, text: 'Build and evaluate machine learning models in BigQuery by using SQL.', isCorrect: true },
      { id: 2, text: 'Build and evaluate machine learning models in BigQuery by using Python and Java.', isCorrect: false },
      { id: 3, text: 'Seamlessly connect with a data science team to create an ML model.', isCorrect: false },
      { id: 4, text: 'Export small amounts of data to spreadsheets or other applications.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'Google Cloud`s AI and ML Solutions',
    questionText: 'Which feature of Vertex AI lets users build and train end-to-end machine learning models by using a GUI (graphical user interface), without writing a line of code.',
    type: 'single',
    options: [
      { id: 1, text: 'MLOps', isCorrect: false },
      { id: 2, text: 'Managed ML environment', isCorrect: false },
      { id: 3, text: 'Custom training', isCorrect: false },
      { id: 4, text: 'AutoML', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Innovating with Google Cloud Artificial Intelligence',
    subActivity: 'Google Cloud`s AI and ML Solutions',
    questionText: 'An online retailer wants to help users find specific products faster on their website. One idea is to allow shoppers to upload an image of the product they’re looking to purchase. Which of Google’s pre-trained APIs could the retailer use to expand this functionality?',
    type: 'single',
    options: [
      { id: 1, text: 'Speech-to-Text API', isCorrect: false },
      { id: 2, text: 'Natural Language API', isCorrect: false },
      { id: 3, text: 'Vision API', isCorrect: true },
      { id: 4, text: 'Video Intelligence API', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'Modernizing IT Infrastructure with Google Cloud',
    questionText: 'App Engine, Cloud Functions and Cloud Run are all what type of Google Cloud compute option? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'Hybrid computing', isCorrect: false },
      { id: 2, text: 'Software computing', isCorrect: false },
      { id: 3, text: 'Serverless computing', isCorrect: true },
      { id: 4, text: 'VM-based computing', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'Modernizing IT Infrastructure with Google Cloud',
    questionText: 'A national hotel chain is using a combination of on-premises data centers and public cloud services for their IT infrastructure. What type of IT infrastructure model is this? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'Colocation', isCorrect: false },
      { id: 2, text: 'Virtualization', isCorrect: false },
      { id: 3, text: 'Hybrid cloud', isCorrect: true },
      { id: 4, text: 'Multi-cloud', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'Modernizing IT Infrastructure with Google Cloud',
    questionText: 'What do containers recreate or virtualize? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'Virtual machines', isCorrect: false },
      { id: 2, text: 'Operating systems', isCorrect: true },
      { id: 3, text: 'Hardware', isCorrect: false },
      { id: 4, text: 'Hypervisor', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'Modernizing IT Infrastructure with Google Cloud',
    questionText: 'Aarav is a Chief Technical Officer and is considering using public cloud services, specifically to modernize their company`s IT infrastructure. Which of the following can Aarav use to build a business case for using an Infrastructure-as-a-Service (IaaS) solution? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'Maintenance work is outsourced to the cloud provider.', isCorrect: true },
      { id: 2, text: 'Web application security is managed by the cloud provider.', isCorrect: false },
      { id: 3, text: 'IT expenditure shifts from operational to capital.', isCorrect: false },
      { id: 4, text: 'Computer hardware shifts from hybrid to on-premises.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'Modernizing IT Infrastructure with Google Cloud',
    questionText: 'Which specific cloud computing feature helps businesses serve their customers without service interruption and in a cost-effective way? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'On-demand service', isCorrect: false },
      { id: 2, text: 'Elasticity', isCorrect: true },
      { id: 3, text: 'Agility', isCorrect: false },
      { id: 4, text: 'Large Network Access', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'Modernizing Applications with Google Cloud',
    questionText: 'A financial services firm wants to migrate an existing application to the cloud but doesn’t want to risk service downtime. For this reason, they have chosen to opt for redundancy and build a new application in the cloud while continuing to run their old application on-premises. Which standard pattern of cloud migration describes this scenario? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'Change then move', isCorrect: false },
      { id: 2, text: 'Invent in greenfield', isCorrect: false },
      { id: 3, text: 'Invent in brownfield', isCorrect: true },
      { id: 4, text: 'Move then change', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'Modernizing Applications with Google Cloud',
    questionText: 'The technology team of a pharmaceutical business decides to adopt an automated continuous integration and deployment (CI/CD) approach. What is the primary value of using a CI/CD approach for the overall business? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'It increases application release velocity and reliability.', isCorrect: true },
      { id: 2, text: 'It prevents infrastructure failures and downtime.', isCorrect: false },
      { id: 3, text: 'It improves security of services and solutions.', isCorrect: false },
      { id: 4, text: 'It allows developers to build using APIs.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'Modernizing Applications with Google Cloud',
    questionText: 'What is App Engine? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'An application for powering the hardware and data services for scalable features.', isCorrect: false },
      { id: 2, text: 'A platform for building scalable web applications and mobile backends.', isCorrect: true },
      { id: 3, text: 'An application for visibility and management into backend software platforms.', isCorrect: false },
      { id: 4, text: 'A platform for managing the software and infrastructure required to run your code.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'Modernizing Applications with Google Cloud',
    questionText: 'Sajid is a developer for an online apparel retail company. What kind of architecture should he use for the applications he develops, and why? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'Microservice pattern, because it`s modular and therefore easy to update.', isCorrect: true },
      { id: 2, text: 'API gateway pattern, because it`s modular and therefore easy to update.', isCorrect: false },
      { id: 3, text: 'Monolithic pattern, because it`s modular and therefore easy to update.', isCorrect: false },
      { id: 4, text: 'Client-server pattern, because it`s modular and therefore easy to update.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'Modernizing Applications with Google Cloud',
    questionText: 'What is Google Kubernetes Engine (GKE)? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'A Google Cloud managed service for container orchestration.', isCorrect: true },
      { id: 2, text: 'A Google Cloud managed service for virtual machine (VM) integration.', isCorrect: false },
      { id: 3, text: 'An open-source container-orchestration system.', isCorrect: false },
      { id: 4, text: 'An open-source virtual machine (VM) integration system.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'The Value of APIs',
    questionText: 'Why do legacy systems struggle to meet modern consumer expectations? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'They only serve real-time data.', isCorrect: false },
      { id: 2, text: 'They ineffectively process batch data.', isCorrect: false },
      { id: 3, text: 'They rapidly surpass physical capacity.', isCorrect: false },
      { id: 4, text: 'They scale slowly.', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'The Value of APIs',
    questionText: 'What is a critical outcome of API management? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'Distributing and creating regular new business features.', isCorrect: false },
      { id: 2, text: 'Measuring and tracking business performance.', isCorrect: true },
      { id: 3, text: 'Updating and repairing outdated business components.', isCorrect: false },
      { id: 4, text: 'Digitizing and modernizing siloed business data.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'The Value of APIs',
    questionText: 'Michelle wants to manage her team`s APIs and provide security policies for identity verification, authentication, and access control. What Google Cloud solution should she choose? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'Google Kubernetes Engine', isCorrect: false },
      { id: 2, text: 'Cloud Identity', isCorrect: false },
      { id: 3, text: 'BigQuery', isCorrect: false },
      { id: 4, text: 'Apigee', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'The Value of APIs',
    questionText: 'How can businesses use APIs to unlock value from their legacy systems? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'By analyzing data from new applications.', isCorrect: false },
      { id: 2, text: 'By gaining access to data stored in legacy systems.', isCorrect: true },
      { id: 3, text: 'By re-architecting their legacy systems.', isCorrect: false },
      { id: 4, text: 'By monitoring cloud resource usage of new applications.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Infrastructure and Application Modernization with Google Cloud',
    subActivity: 'The Value of APIs',
    questionText: 'What is the function of APIs? Select the correct answer.',
    type: 'single',
    options: [
      { id: 1, text: 'They offer hybrid data storage.', isCorrect: false },
      { id: 2, text: 'They enable integration between systems.', isCorrect: true },
      { id: 3, text: 'They provide real-time analytics.', isCorrect: false },
      { id: 4, text: 'They enable rapid autoscaling of data.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Trust and Security in the Cloud',
    questionText: 'Which is the responsibility of the cloud provider in a cloud security model?',
    type: 'single',
    options: [
      { id: 1, text: 'Securing the customer`s data.', isCorrect: false },
      { id: 2, text: 'Maintaining the customer`s infrastructure.', isCorrect: true },
      { id: 3, text: 'Configuring the customer`s applications.', isCorrect: false },
      { id: 4, text: 'Managing the customer`s user access.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Trust and Security in the Cloud',
    questionText: 'What common cybersecurity threat involves tricking users into revealing sensitive information or performing actions that compromise security?',
    type: 'single',
    options: [
      { id: 1, text: 'Configuration mishap', isCorrect: false },
      { id: 2, text: 'Malware', isCorrect: false },
      { id: 3, text: 'Phishing', isCorrect: true },
      { id: 4, text: 'Ransomware', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Trust and Security in the Cloud',
    questionText: 'Which cybersecurity threat occurs when errors arise during the setup of resources, inadvertently exposing sensitive data and systems to unauthorized access?',
    type: 'single',
    options: [
      { id: 1, text: 'Phishing', isCorrect: false },
      { id: 2, text: 'Malware', isCorrect: false },
      { id: 3, text: 'Configuration mishaps', isCorrect: true },
      { id: 4, text: 'Virus', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Trust and Security in the Cloud',
    questionText: 'Which definition best describes a firewall?',
    type: 'single',
    options: [
      { id: 1, text: 'A security model that assumes no user or device can be trusted by default', isCorrect: false },
      { id: 2, text: 'A software program that encrypts data to make it unreadable to unauthorized users', isCorrect: false },
      { id: 3, text: 'A network security device that monitors and controls incoming and outgoing network traffic based on predefined security rules', isCorrect: true },
      { id: 4, text: 'A set of security measures designed to protect a computer system or network from cyber attacks', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Trust and Security in the Cloud',
    questionText: 'Which cloud security principle relates to keeping data accurate and trustworthy?',
    type: 'single',
    options: [
      { id: 1, text: 'Confidentiality', isCorrect: false },
      { id: 2, text: 'Integrity', isCorrect: true },
      { id: 3, text: 'Control', isCorrect: false },
      { id: 4, text: 'Compliance', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Trust and Security in the Cloud',
    questionText: 'Which three essential aspects of cloud security form the foundation of the CIA triad?',
    type: 'single',
    options: [
      { id: 1, text: 'Confidentiality, integrity, and availability', isCorrect: true },
      { id: 2, text: 'Certificates, intelligence, and authentication', isCorrect: false },
      { id: 3, text: 'Containers, infrastructure, and architecture', isCorrect: false },
      { id: 4, text: 'Compliance, identity, and access management', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Trust and Security in the Cloud',
    questionText: 'Which security principle advocates granting users only the access they need to perform their job responsibilities?',
    type: 'single',
    options: [
      { id: 1, text: 'Zero-trust architecture', isCorrect: false },
      { id: 2, text: 'Security by default', isCorrect: false },
      { id: 3, text: 'Least privilege', isCorrect: true },
      { id: 4, text: 'Privileged access', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Trust and Security in the Cloud',
    questionText: 'Which cloud security principle ensures that security practices and measures align with established standards and guidelines?',
    type: 'single',
    options: [
      { id: 1, text: 'Compliance', isCorrect: true },
      { id: 2, text: 'Integrity', isCorrect: false },
      { id: 3, text: 'Control', isCorrect: false },
      { id: 4, text: 'Confidentiality', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Trust and Security in the Cloud',
    questionText: 'Which is a benefit of cloud security over traditional on-premises security?',
    type: 'single',
    options: [
      { id: 1, text: 'Only having to install security updates on a weekly basis.', isCorrect: false },
      { id: 2, text: 'Large upfront capital investment.', isCorrect: false },
      { id: 3, text: 'Increased scalability.', isCorrect: true },
      { id: 4, text: 'Having physical access to hardware.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Trust and Security in the Cloud',
    questionText: 'Which cybersecurity threat demands a ransom payment from a victim to regain access to their files and systems.',
    type: 'single',
    options: [
      { id: 1, text: 'Ransomware', isCorrect: true },
      { id: 2, text: 'Virus', isCorrect: false },
      { id: 3, text: 'Trojan', isCorrect: false },
      { id: 4, text: 'Spyware', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Google`s Trusted Infrastructure',
    questionText: 'Which aspect of cloud identity management verifies the identity of users or systems?',
    type: 'single',
    options: [
      { id: 1, text: 'Authentication', isCorrect: true },
      { id: 2, text: 'Authorization', isCorrect: false },
      { id: 3, text: 'Auditing', isCorrect: false },
      { id: 4, text: 'Accounting', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Google`s Trusted Infrastructure',
    questionText: 'What security feature adds an extra layer of protection to cloud-based systems?',
    type: 'single',
    options: [
      { id: 1, text: 'Security information and event management (SIEM)', isCorrect: false },
      { id: 2, text: 'Two-step verification (2SV)', isCorrect: true },
      { id: 3, text: 'Firewall as a service (FaaS)', isCorrect: false },
      { id: 4, text: 'Data loss prevention (DLP)', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Google`s Trusted Infrastructure',
    questionText: 'What metric does Google Cloud use to measure the efficiency of its data centers to achieve cost savings and a reduced carbon footprint?',
    type: 'single',
    options: [
      { id: 1, text: 'Energy Efficiency Ratio (EER)', isCorrect: false },
      { id: 2, text: 'Total cost of ownership (TCO)', isCorrect: false },
      { id: 3, text: 'Power Usage Effectiveness (PUE)', isCorrect: true },
      { id: 4, text: 'Data Center Infrastructure Efficiency (DCiE)', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Google`s Trusted Infrastructure',
    questionText: 'Select the correct statement about Identity and Access Management (IAM).',
    type: 'single',
    options: [
      { id: 1, text: 'IAM provides granular control over who has access to Google Cloud resources and what they can do with those resources.', isCorrect: true },
      { id: 2, text: 'IAM is a system that detects and prevents malicious traffic from entering a cloud network.', isCorrect: false },
      { id: 3, text: 'IAM is a cloud service that encrypts cloud-based data at rest and in transit.', isCorrect: false },
      { id: 4, text: 'IAM is a cloud security information and event management solution that collects and analyzes log data from cloud security devices and applications.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Google`s Trusted Infrastructure',
    questionText: 'Google Cloud encrypts data at various states. Which state refers to when data is being actively processed by a computer?',
    type: 'single',
    options: [
      { id: 1, text: 'Data in use', isCorrect: true },
      { id: 2, text: 'Data in transit', isCorrect: false },
      { id: 3, text: 'Data lake', isCorrect: false },
      { id: 4, text: 'Data at rest', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Google`s Trusted Infrastructure',
    questionText: 'Which practice involves a combination of processes and technologies that help reduce the risk of data breaches, system outages, and other security incidents in the cloud?',
    type: 'single',
    options: [
      { id: 1, text: 'Security operations (SecOps)', isCorrect: true },
      { id: 2, text: 'Zero trust security', isCorrect: false },
      { id: 3, text: 'Cloud security posture management (CSPM)', isCorrect: false },
      { id: 4, text: 'Site reliability engineering (SRE)', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Google`s Trusted Infrastructure',
    questionText: 'Which is a powerful encryption algorithm trusted by governments and businesses worldwide?',
    type: 'single',
    options: [
      { id: 1, text: 'Advanced Encryption Standard (AES)', isCorrect: true },
      { id: 2, text: 'Lattice-Based Cryptography (LBC)', isCorrect: false },
      { id: 3, text: 'Post-quantum cryptography (PQC)', isCorrect: false },
      { id: 4, text: 'Isomorphic encryption (IE)', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Google`s Trusted Infrastructure',
    questionText: 'What Google Cloud product provides robust protection from harmful distributed denial-of-service (DDoS) attacks?',
    type: 'single',
    options: [
      { id: 1, text: 'Google Cloud Armor', isCorrect: true },
      { id: 2, text: 'Cloud Load Balancing', isCorrect: false },
      { id: 3, text: 'Cloud Monitoring', isCorrect: false },
      { id: 4, text: 'IAM', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Google Cloud`s Trust Principles and Compliance',
    questionText: 'Which Google Cloud feature allows users to control their data`s physical location?',
    type: 'single',
    options: [
      { id: 1, text: 'Districts', isCorrect: false },
      { id: 2, text: 'Places', isCorrect: false },
      { id: 3, text: 'Areas', isCorrect: false },
      { id: 4, text: 'Regions', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Google Cloud`s Trust Principles and Compliance',
    questionText: 'Where can you find details about certifications and compliance standards met by Google Cloud?',
    type: 'single',
    options: [
      { id: 1, text: 'Marketplace', isCorrect: false },
      { id: 2, text: 'Cloud Storage client libraries', isCorrect: false },
      { id: 3, text: 'Google Cloud console', isCorrect: false },
      { id: 4, text: 'Compliance resource center', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Google Cloud`s Trust Principles and Compliance',
    questionText: 'Which report provides a way for Google Cloud to share data about how the policies and actions of governments and corporations affect privacy, security, and access to information?',
    type: 'single',
    options: [
      { id: 1, text: 'Security reports', isCorrect: false },
      { id: 2, text: 'Compliance reports', isCorrect: false },
      { id: 3, text: 'Transparency reports', isCorrect: true },
      { id: 4, text: 'Billing reports', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Google Cloud`s Trust Principles and Compliance',
    questionText: 'Which term describes the concept that data is subject to the laws and regulations of the country where it resides?',
    type: 'single',
    options: [
      { id: 1, text: 'Data residency', isCorrect: false },
      { id: 2, text: 'Data redundancy', isCorrect: false },
      { id: 3, text: 'Data consistency', isCorrect: false },
      { id: 4, text: 'Data sovereignty', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Trust and Security with Google Cloud',
    subActivity: 'Google Cloud`s Trust Principles and Compliance',
    questionText: 'Which is one of Google Cloud’s seven trust principles?',
    type: 'single',
    options: [
      { id: 1, text: 'All customer data is encrypted by default.', isCorrect: true },
      { id: 2, text: 'We give "backdoor" access to government entities when requested.', isCorrect: false },
      { id: 3, text: 'Google Cloud uses customer data for advertising.', isCorrect: false },
      { id: 4, text: 'Google sells customer data to third parties.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Financial Governance and Managing Cloud Costs',
    questionText: 'Which feature lets you set alerts for when cloud costs exceed a certain limit?',
    type: 'single',
    options: [
      { id: 1, text: 'Billing reports', isCorrect: false },
      { id: 2, text: 'Budget threshold rules', isCorrect: true },
      { id: 3, text: 'Cost forecasting', isCorrect: false },
      { id: 4, text: 'Cost optimization recommendations', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Financial Governance and Managing Cloud Costs',
    questionText: 'Which offers a reactive method to help you track and understand what you’ve already spent on Google Cloud resources and provide ways to help optimize your costs?',
    type: 'single',
    options: [
      { id: 1, text: 'Google Cloud Pricing Calculator', isCorrect: false },
      { id: 2, text: 'Resource usage', isCorrect: false },
      { id: 3, text: 'Cost forecasting', isCorrect: false },
      { id: 4, text: 'Cloud billing reports', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Financial Governance and Managing Cloud Costs',
    questionText: 'Which term describes a centralized hub within an organization composed of a partnership across finance, technology, and business functions?',
    type: 'single',
    options: [
      { id: 1, text: 'Center of innovation', isCorrect: false },
      { id: 2, text: 'Hub center', isCorrect: false },
      { id: 3, text: 'Competency center', isCorrect: false },
      { id: 4, text: 'Center of excellence', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Financial Governance and Managing Cloud Costs',
    questionText: 'Which feature lets you set limits on the amount of resources that can be used by a project or user?',
    type: 'single',
    options: [
      { id: 1, text: 'Invoicing limits', isCorrect: false },
      { id: 2, text: 'Billing reports', isCorrect: false },
      { id: 3, text: 'Committed use discounts', isCorrect: false },
      { id: 4, text: 'Quota policies', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Financial Governance and Managing Cloud Costs',
    questionText: 'Which represents the lowest level in the Google Cloud resource hierarchy?',
    type: 'single',
    options: [
      { id: 1, text: 'Folders', isCorrect: false },
      { id: 2, text: 'Organization node', isCorrect: false },
      { id: 3, text: 'Projects', isCorrect: false },
      { id: 4, text: 'Resources', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Financial Governance and Managing Cloud Costs',
    questionText: 'Why is it a benefit that the Google Cloud resource hierarchy follows inheritance and propagation rules?',
    type: 'single',
    options: [
      { id: 1, text: 'Faster propagation can simplify a cloud migration.', isCorrect: false },
      { id: 2, text: 'Permissions set at higher levels of the resource hierarchy are automatically inherited by lower-level resources.', isCorrect: true },
      { id: 3, text: 'Resources at lower levels can improve the performance of cloud applications.', isCorrect: false },
      { id: 4, text: 'Inheritance in the hierarchy reduces the overall cost of cloud computing.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Financial Governance and Managing Cloud Costs',
    questionText: 'Which Google Cloud tool lets you estimate how changes to cloud usage will affect costs?',
    type: 'single',
    options: [
      { id: 1, text: 'Cloud Billing', isCorrect: false },
      { id: 2, text: 'Google Cloud Pricing Calculator', isCorrect: true },
      { id: 3, text: 'Cloud Trace', isCorrect: false },
      { id: 4, text: 'Cloud Monitoring', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Operational Excellence and Reliability at Scale',
    questionText: 'One of the four golden signals is latency. What does latency measure?',
    type: 'single',
    options: [
      { id: 1, text: 'How many requests reach a system.', isCorrect: false },
      { id: 2, text: 'System failures or other issues.', isCorrect: false },
      { id: 3, text: 'How close to capacity a system is.', isCorrect: false },
      { id: 4, text: 'How long it takes for a particular part of a system to return a result.', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Operational Excellence and Reliability at Scale',
    questionText: 'Which Google Cloud Customer Care support level is designed for enterprises with critical workloads and features the fastest response time?',
    type: 'single',
    options: [
      { id: 1, text: 'Premium Support', isCorrect: true },
      { id: 2, text: 'Basic Support', isCorrect: false },
      { id: 3, text: 'Enhanced Support', isCorrect: false },
      { id: 4, text: 'Standard Support', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Operational Excellence and Reliability at Scale',
    questionText: 'What does the Cloud Profiler tool do?',
    type: 'single',
    options: [
      { id: 1, text: 'It counts, analyzes, and aggregates the crashes in running cloud services in real-time.', isCorrect: false },
      { id: 2, text: 'It collects and stores all application and infrastructure logs.', isCorrect: false },
      { id: 3, text: 'It provides a comprehensive view of your cloud infrastructure and applications.', isCorrect: false },
      { id: 4, text: 'It identifies how much CPU power, memory, and other resources an application uses.', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Operational Excellence and Reliability at Scale',
    questionText: 'Why is escalating a support ticket not always the best course of action when trying to resolve an issue?',
    type: 'single',
    options: [
      { id: 1, text: 'It may reduce the number of available virtual machines.', isCorrect: false },
      { id: 2, text: 'It may disrupt the workflow of the Customer Care team and lead to delays in other cases.', isCorrect: true },
      { id: 3, text: 'It can increase the monthly cost of support plans.', isCorrect: false },
      { id: 4, text: 'It can result in increased power consumption, impacting carbon neutrality.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Operational Excellence and Reliability at Scale',
    questionText: 'How does replication help the design of resilient and fault-tolerant infrastructure and processes in a cloud environment?',
    type: 'single',
    options: [
      { id: 1, text: 'It monitors and controls incoming and outgoing network traffic based on predetermined security rules.', isCorrect: false },
      { id: 2, text: 'It creates multiple copies of data or services and distributes them across different servers or locations.', isCorrect: true },
      { id: 3, text: 'It scales infrastructure to handle varying workloads and accommodate increased demand.', isCorrect: false },
      { id: 4, text: 'It duplicates critical components or resources to provide backup alternatives.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Operational Excellence and Reliability at Scale',
    questionText: 'Google Cloud Observability provides a comprehensive set of monitoring, logging, and diagnostics tools. Which tool collects latency data from applications and provides insights into how they’re performing?',
    type: 'single',
    options: [
      { id: 1, text: 'Cloud Profiler', isCorrect: false },
      { id: 2, text: 'Cloud Monitoring', isCorrect: false },
      { id: 3, text: 'Cloud Trace', isCorrect: true },
      { id: 4, text: 'Cloud Logging', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Operational Excellence and Reliability at Scale',
    questionText: 'Which of these measures should be automated on a regular basis and stored in geographically separate locations to allow for rapid recovery from disasters or failures?',
    type: 'single',
    options: [
      { id: 1, text: 'Log files', isCorrect: false },
      { id: 2, text: 'Backups', isCorrect: true },
      { id: 3, text: 'Security patches', isCorrect: true },
      { id: 4, text: 'Inventory data', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Operational Excellence and Reliability at Scale',
    questionText: 'Which metric shows how well a system or service is performing?',
    type: 'single',
    options: [
      { id: 1, text: 'Service level agreements', isCorrect: false },
      { id: 2, text: 'Service level contracts', isCorrect: false },
      { id: 3, text: 'Service level objectives', isCorrect: false },
      { id: 4, text: 'Service level indicators', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Operational Excellence and Reliability at Scale',
    questionText: 'Whose job is to ensure the reliability, availability, and efficiency of software systems and services deployed in the cloud?',
    type: 'single',
    options: [
      { id: 1, text: 'Cloud security engineer', isCorrect: false },
      { id: 2, text: 'Site reliability engineer', isCorrect: true },
      { id: 3, text: 'DevOps engineer', isCorrect: false },
      { id: 4, text: 'Cloud architect', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Sustainability with Google Cloud',
    questionText: 'What sustainability goal does Google aim to achieve by the year 2030?',
    type: 'single',
    options: [
      { id: 1, text: 'To be the first major company to operate completely carbon free.', isCorrect: true },
      { id: 2, text: 'To be the first major company to be carbon neutral.', isCorrect: false },
      { id: 3, text: 'To be the first major company to achieve 100% renewable energy.', isCorrect: false },
      { id: 4, text: 'To be the first major company to run its own wind farm.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Sustainability with Google Cloud',
    questionText: 'Kaluza is an electric vehicle smart-charging solution. How does it use BigQuery and Looker Studio?',
    type: 'single',
    options: [
      { id: 1, text: 'It uses BigQuery and Looker Studio to containerize workloads.', isCorrect: false },
      { id: 2, text: 'It uses BigQuery and Looker Studio to build and deploy machine learning models.', isCorrect: false },
      { id: 3, text: 'It uses BigQuery and Looker Studio to comply with government regulations.', isCorrect: false },
      { id: 4, text: 'It uses BigQuery and Looker Studio to create dashboards that provide granular operational insights.', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Scaling with Google Cloud Operations',
    subActivity: 'Sustainability with Google Cloud',
    questionText: 'Google`s data centers were the first to achieve ISO 14001 certification. What is this standard`s purpose?',
    type: 'single',
    options: [
      { id: 1, text: 'It is a framework for an organization to enhance its environmental performance through improving resource efficiency and reducing waste.', isCorrect: true },
      { id: 2, text: 'It is a framework for sustainable procurement, which is the process of purchasing goods and services in a way that minimizes environmental and social impacts.', isCorrect: false },
      { id: 3, text: 'It is a framework for carbon footprinting that calculates the total amount of greenhouse gas emissions associated with a product, service, or organization.', isCorrect: false },
      { id: 4, text: 'It is a framework for identifying, predicting, and evaluating the environmental impacts of a proposed project.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'How can Google Cloud help an organization achieve its sustainability goals?',
    type: 'single',
    options: [
      { id: 1, text: 'Google Cloud data centers are carbon free.', isCorrect: false },
      { id: 2, text: 'Data centers have maximum physical security.', isCorrect: false },
      { id: 3, text: 'Data centers multiple locations.', isCorrect: false },
      { id: 4, text: 'Google Cloud data centers are ISO certified for their environmental performance and efficiency.', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization is monitoring a service level indicator based on the volume of traffic that their application is receiving. Why is it important to monitor this indicator?',
    type: 'single',
    options: [
      { id: 1, text: 'The volume of traffic always affects the user experience.', isCorrect: false },
      { id: 2, text: 'High traffic levels are frequently tied to degrading performance.', isCorrect: false },
      { id: 3, text: 'Historical trends in traffic can be used for capacity planning.', isCorrect: true },
      { id: 4, text: 'Low traffic volumes always indicate configuration issues.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization has raised a support case with Google Cloud Customer Care. When is it appropriate for a case to be escalated?',
    type: 'single',
    options: [
      { id: 1, text: 'When a high-impact issue needs to be resolved as fast as possible', isCorrect: false },
      { id: 2, text: 'When the priority of the ticket has been set incorrectly', isCorrect: false },
      { id: 3, text: 'When flagging a break in the process or a communication issue', isCorrect: true },
      { id: 4, text: 'When a case has been resolved and needs to be reopened', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization wants to track and understand its expenses on Google Cloud and receive recommendations on cost optimizations. Which tool should the organization use?',
    type: 'single',
    options: [
      { id: 1, text: 'Cloud Billing reports', isCorrect: true },
      { id: 2, text: 'Resource quotas and thresholds', isCorrect: false },
      { id: 3, text: 'Committed use discounts', isCorrect: false },
      { id: 4, text: 'Invoices', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization wants to analyze data collected from a fleet of rental vehicles. Onboard sensors send location data every 30 seconds. They want to ingest this data. Which Google product or service should they use?',
    type: 'single',
    options: [
      { id: 1, text: 'Dataflow', isCorrect: false },
      { id: 2, text: 'Pub/Sub', isCorrect: true },
      { id: 3, text: 'Cloud SQL', isCorrect: false },
      { id: 4, text: 'Cloud Storage', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization wants to compare the total cost of ownership (TCO) of operating in the cloud versus on-premises. What on-premises costs should be compared to cloud operating costs?',
    type: 'single',
    options: [
      { id: 1, text: 'The cost of on-premises operational overhead', isCorrect: false },
      { id: 2, text: 'The initial investment cost of on-premises hardware', isCorrect: false },
      { id: 3, text: 'The maintenance cost of replacing on-premises hardware', isCorrect: false },
      { id: 4, text: 'The cost of on-premises hardware investment, operational overhead, and missed-opportunity costs', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization is migrating their business applications from on-premises to the cloud. How could this impact their operations and personnel costs?',
    type: 'single',
    options: [
      { id: 1, text: 'Increased on-premises hardware maintenance costs', isCorrect: false },
      { id: 2, text: 'Reduced cloud software licensing costs', isCorrect: false },
      { id: 3, text: 'Reduced on-premises infrastructure management costs', isCorrect: true },
      { id: 4, text: 'Increased cloud hardware management costs', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization is implementing a cloud center of excellence by creating a central partnership across finance, technology and business function teams. What is a benefit of this approach?',
    type: 'single',
    options: [
      { id: 1, text: 'Enabling individual project teams to apply their own approach to security.', isCorrect: false },
      { id: 2, text: 'Ensuring that there is visibility into ongoing cloud spend.', isCorrect: true },
      { id: 3, text: 'Reviewing cloud decisions on a quarterly basis.', isCorrect: false },
      { id: 4, text: 'Owning all cloud spending budgets across the organization.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization wants to deploy new workloads to the cloud, but must keep some systems on-premises for compliance reasons. They need to centrally manage both environments. Which type of environment would suit the organization?',
    type: 'single',
    options: [
      { id: 1, text: 'Multi cloud environment', isCorrect: false },
      { id: 2, text: 'Virtual machine environment', isCorrect: false },
      { id: 3, text: 'Hybrid cloud environment', isCorrect: true },
      { id: 4, text: 'Container environment', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization is establishing best practices for financial governance in the cloud. They have multiple teams building applications. Which Google-recommended approach should the organization use to manage spending?',
    type: 'single',
    options: [
      { id: 1, text: 'Define ownership for projects, and establish financial accountability for project owners.', isCorrect: true },
      { id: 2, text: 'Define ownership for projects, but centralize financial accountability.', isCorrect: false },
      { id: 3, text: 'Set a fixed cloud spend budget across all projects.', isCorrect: false },
      { id: 4, text: 'Centralize financial accountability, and review spending monthly.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'A retail store has discovered a cost-effective solution for creating self-service kiosks. They can use existing check-out hardware and purchase a virtual customer service application. Why do they also need an API?',
    type: 'single',
    options: [
      { id: 1, text: 'To update the check-out hardware remotely.', isCorrect: false },
      { id: 2, text: 'To migrate all customer data for disaster recovery.', isCorrect: false },
      { id: 3, text: 'To connect the new application with the legacy system.', isCorrect: true },
      { id: 4, text: 'To connect the check-out hardware to the public cloud.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization is looking for a solution to help them build applications using their preferred programming language and tools. They also want to minimize time spent on infrastructure management. What solution should the organization use?',
    type: 'single',
    options: [
      { id: 1, text: 'Bare Metal Solution', isCorrect: false },
      { id: 2, text: 'Dataproc', isCorrect: false },
      { id: 3, text: 'Pub/Sub', isCorrect: false },
      { id: 4, text: 'Cloud Run', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'What would provide near-unlimited availability of computing resources without requiring an organization to procure and provision new equipment?',
    type: 'single',
    options: [
      { id: 1, text: 'Public cloud', isCorrect: true },
      { id: 2, text: 'Private cloud', isCorrect: false },
      { id: 3, text: 'Microservices', isCorrect: false },
      { id: 4, text: 'Containers', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'In Google`s cloud security model, which aspect emphasizes the importance of keeping sensitive information safe and secret? ',
    type: 'single',
    options: [
      { id: 1, text: 'Integrity', isCorrect: false },
      { id: 2, text: 'Confidentiality', isCorrect: true },
      { id: 3, text: 'Availability', isCorrect: false },
      { id: 4, text: 'Compliance', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization needs to store structured, semi-structured, and unstructured data in its raw, native format in the same repository. Which cloud data management solution should the organization use?',
    type: 'single',
    options: [
      { id: 1, text: 'Data lake', isCorrect: true },
      { id: 2, text: 'Data warehouse', isCorrect: false },
      { id: 3, text: 'Database', isCorrect: false },
      { id: 4, text: 'Data mesh', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'Which cybersecurity threat can lead to information being stolen or damaged without a user ever being aware?',
    type: 'single',
    options: [
      { id: 1, text: 'Ransomware attack', isCorrect: false },
      { id: 2, text: 'SLA policy violation', isCorrect: false },
      { id: 3, text: 'Malware attack', isCorrect: true },
      { id: 4, text: 'Incomplete data input', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'How would an organization benefit from using Looker?',
    type: 'single',
    options: [
      { id: 1, text: 'Advanced business intelligence and analytics', isCorrect: true },
      { id: 2, text: 'Optimal identity and access management', isCorrect: false },
      { id: 3, text: 'Leading serverless warehousing technology', isCorrect: false },
      { id: 4, text: 'Robust data roll-back accuracy', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization needs a platform to create custom end-to-end artificial intelligence models. Which Google Cloud product or service should the organization use?',
    type: 'single',
    options: [
      { id: 1, text: 'Recommendations AI', isCorrect: false },
      { id: 2, text: 'Dataproc', isCorrect: false },
      { id: 3, text: 'Compute Engine', isCorrect: false },
      { id: 4, text: 'Vertex AI', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization needs to control access for users and resources within Google Cloud. Which service should the organization use?',
    type: 'single',
    options: [
      { id: 1, text: 'Hardware-based encryption', isCorrect: false },
      { id: 2, text: 'Cloud VPN', isCorrect: false },
      { id: 3, text: 'Cloud Interconnect', isCorrect: false },
      { id: 4, text: 'Cloud IAM', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization is moving its operations to the cloud, but needs to migrate a legacy application without making any changes to the code. Which migration path should the organization choose?',
    type: 'single',
    options: [
      { id: 1, text: 'Replatform', isCorrect: false },
      { id: 2, text: 'Refactor', isCorrect: false },
      { id: 3, text: 'Rehost', isCorrect: true },
      { id: 4, text: 'Retire', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization has a small app that sends a mobile notification to a customer whenever a new order is placed on their website. They require a simple, event-driven, serverless service to host the code. Which service should the organization choose?',
    type: 'single',
    options: [
      { id: 1, text: 'Cloud Functions', isCorrect: true },
      { id: 2, text: 'Kubernetes Engine', isCorrect: false },
      { id: 3, text: 'Cloud Run', isCorrect: false },
      { id: 4, text: 'Compute Engine', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'According to Google`s AI principles, which scenario is an irresponsible use of AI technology?',
    type: 'single',
    options: [
      { id: 1, text: 'Creating mass blog posts by using generative AI.', isCorrect: true },
      { id: 2, text: 'Using data on previous customer interactions.', isCorrect: false },
      { id: 3, text: 'Forecasting customers that are likely to have a higher lifetime value.', isCorrect: false },
      { id: 4, text: 'Tracking user activity in financial organizations.', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization wants to migrate multiple virtual machines to the cloud. Which Google service should they choose?',
    type: 'single',
    options: [
      { id: 1, text: 'Compute Engine', isCorrect: true },
      { id: 2, text: 'Kubernetes Engine', isCorrect: false },
      { id: 3, text: 'Cloud Functions', isCorrect: false },
      { id: 4, text: 'Cloud Run', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization`s developers are growing increasingly frustrated by the limitations of their on-premises infrastructure. How would they benefit from leveraging cloud technology?',
    type: 'single',
    options: [
      { id: 1, text: 'They can optimize maintenance for their on-premises infrastructure.', isCorrect: false },
      { id: 2, text: 'They can expect 100% service availability.', isCorrect: false },
      { id: 3, text: 'They can avoid the limitations of serverless computing.', isCorrect: false },
      { id: 4, text: 'They can have new tools to innovate and optimize resource usage.', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'A global organization is developing an application to manage payments and online bank accounts in multiple regions. Each transaction must be handled consistently in their database, and they anticipate almost unlimited growth in the amount of data stored. Which Google Cloud product should the organization choose?',
    type: 'single',
    options: [
      { id: 1, text: 'Cloud Spanner', isCorrect: true },
      { id: 2, text: 'BigQuery', isCorrect: false },
      { id: 3, text: 'Cloud SQL', isCorrect: false },
      { id: 4, text: 'Cloud Storage', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'An organization wants an economical solution to store data such as files, graphical images, and videos and to access and share them securely. Which Google Cloud product or service should the organization use?',
    type: 'single',
    options: [
      { id: 1, text: 'Cloud Spanner', isCorrect: false },
      { id: 2, text: 'Cloud SQL', isCorrect: false },
      { id: 3, text: 'Cloud Storage', isCorrect: true },
      { id: 4, text: 'BigQuery', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'Why is data stored in Google Cloud secure and private? ',
    type: 'single',
    options: [
      { id: 1, text: 'Data is encrypted when an appropriate tag is applied.', isCorrect: false },
      { id: 2, text: 'Data is encrypted by the Security Command Center.', isCorrect: false },
      { id: 3, text: 'Data is encrypted by Cloud Data Loss Prevention.', isCorrect: false },
      { id: 4, text: 'Data is encrypted by default.', isCorrect: true }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'How is privacy defined in the context of cloud technology?',
    type: 'single',
    options: [
      { id: 1, text: 'Procedures to authenticate user identity', isCorrect: false },
      { id: 2, text: 'Restrictions on data access and sharing', isCorrect: true },
      { id: 3, text: 'Compliance with regulatory standards', isCorrect: false },
      { id: 4, text: 'Susceptibility to data breaches and cyber attacks', isCorrect: false }
    ]
  },
  {
    examPath: 'Cloud Digital Leader',
    courseActivity: 'Sample Exam Questions',
    subActivity: 'Set of Questions',
    questionText: 'When an organization adopts cloud technology, how does their total cost of ownership (TCO) shift?',
    type: 'single',
    options: [
      { id: 1, text: 'Away from operational expenditure toward capital expenditure', isCorrect: false },
      { id: 2, text: 'Away from capital expenditure toward operational expenditure', isCorrect: true },
      { id: 3, text: 'Away from cost management toward capital expenditure', isCorrect: false },
      { id: 4, text: 'Away from operational expenditure toward cost management', isCorrect: false }
    ]
  }
];
