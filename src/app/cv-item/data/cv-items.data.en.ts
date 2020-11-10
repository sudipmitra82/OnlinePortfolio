import { CvItem } from '../cv-item';

// tslint:disable:max-line-length
export const GENERAL = {
  name: 'Sudip Mitra',
  position: 'Principal Consultant-CRM',
  description: `An accomplished and dedicated IT Program Manager and Solution Architect(PMP ,CSM) with a proven track record of over 14 years of experience in developing and implementing Business Process Management (BMPS), Business Rules Management(BRMS), and automation(RPA/AI/ML) based project implementations. Knowledgeable in applications of scrum, waterfall, and agile methodologies, and skilled in developing processes that facilitate continual progress and team achievement.

  Involved in designing End-End Solution architecture for new applications , designing API , Cloud infrastructure set up.
  
  Managed digital transformation initiatives across LOB, Analyzed business requirements and accordingly created UI specifications and framework, Manage Stakeholder Executive, Reporting Project, Governance Escalation Management.
  
  Highly skilled in cloud computing (AWS certified), information management, application development, migration and virtualization and have experience in working with distributed teams to design and develop frameworks, solution accelerators, proofs of concept, and external customer facing products
  
  An expert who has led a team of 100 associates and managed a portfolio of $10M across various industry domains. An individual who values collaboration and focuses on bolstering creativity while ensuring successful outcomes through research, strategic planning, and operations. Attended Red Hat Summit and AWS re-Invent. Maintained good relationship with RPA and BPM vendors like UiPath, RedHat, Pega, Captricity, Open Span.
  
  Looking for new opportunities which include modern, progressive technologies in a collaborative working environment. Learning new things and trying out new stuff are part of his motivation. New roles are of interest if he can accompany the software end to end - from planning, implementation, deployment towards monitoring. Amplified feedback loops and a culture of continuous learning and experimentation define a proper working environment for him.
  
  This website is designed to be a simple, self-hosted online-CV, based on Angular. To find out more about the project, please click on the AngularCV logo in the bottom right corner.`,
};
// tslint:enable:max-line-length

export const CVITEMS: CvItem[] = [
  {
    title: 'Cognizant Technology Solutions',
    subtitle: 'Project Manager',
    begin: '06-04-2008',
    end: '',
    description: 'Cognizant is an American multinational product led digital corporation that provides digital products, digital IT services, including digital, ' +
    'technology, consulting, and operations services. It sells digital products on cloud based data engineering , model based testing tool,' +
    'process automation tool RPA.It is headquartered in Teaneck, New Jersey, United States. Cognizant is part of the NASDAQ-100 and trades under CTSH.',
    tags: ['AWS Solutions Architect-Professional','Cloud Migration','Red Hat-BPMS/BRMS', 'PMP', 'Certfied Scrum Master','RPA(UiPath,Automation Anywhere)',
    'Java/J2EE','Microservcies','Rest API', 'SpringBoot', 'Angular','Git', 'KanBan', 'Jira', 'Scrum', 'Confluence', 
    'Jenkins', 'BitBucket', 'Release Management','Python'],
    link: 'https://www.cognizant.com',
    thumbnail: 'ctsh-logo.png',
  },
  
  {
    title: 'Wipro Infotech',
    subtitle: 'Programmer Analyst',
    begin: '09-06-2007',
    end: '05-31-2008',
    description: 'Wipro Limited is an Indian multinational corporation that provides information technology, ' +
    'onsulting and business process services. It is headquartered in Bangalore, Karnataka, India.' ,
    tags: ['Java/J2EE', 'Savvion', 'Red Hat-BPMS/BRMS', 'Oracle', 'Release Management'],
    link: 'https://www.wipro.com/en-US/',
    thumbnail: 'Wipro.svg.png',
  },
  {
    title: 'SkyTech Solutions(Now: TCG Digital)',
    subtitle: 'Associate Software Engineer',
    begin: '11-08-2005',
    end: '08-31-2007',
    description: 'TCG Digital accelerates enterprise digital transformation with ' +
    'hyper-contemporary technologies, advanced analytics, and data strategy to deliver Velocity to Value.It is headquartered in Kolkata,West bengal, India.',
    link: 'https://www.tcgdigital.com/',
    thumbnail: 'TCGDigital.jpg',
  },
];

export const EDUCATION: CvItem[] = [
  
  {
    title: 'Bachelors of Technology',
    subtitle: '',
    begin: '06-2000',
    end: '06-2004',
    description: '',
    tags: [''],
    link: 'http://www.bput.ac.in/',
    thumbnail: 'BPUT.png',
  },
];

export const CERTIFICATES: CvItem[] = [
  {
    title: 'AWS Solutions Architect-Professional',
    subtitle: '(Credential ID: H72HNTGBKBQ41LGE)',
    begin: '10-31-2020',
    end: '10-31-2023',
    description: '',
    link: '',
    thumbnail: 'AWS.png',
    attachment: '',
  },
  {
    title: 'PMP',
    subtitle: '(Credential ID: 1827497)',
    begin: '06-15-2015',
    end: '06-15-2024',
    description: '',
    link: '',
    thumbnail: 'pmi_logo.png',
    attachment: '',
  },
  {
    title: 'Certified Scrum Master',
    subtitle: '(Credential ID000379844)',
    begin: '12-15-2014',
    end: '12-15-2022',
    description: '',
    thumbnail: 'Scrum-Alliance.jpg',
    attachment: '',
  },
  {
    title: 'TOGAF',
    subtitle: '(Credential ID: 90153)',
    begin: '11-108-2014',
    end: '',
    description: '',
    thumbnail: 'togaf.jpg',
    attachment: '',
  },
  {
    title: 'RPA UiPath-Developer|Solution Architect|Business Analyst',
    subtitle: 'UiPath',
    begin: '',
    end: '',
    description: '',
    thumbnail: 'Uipath.png',
    attachment: '',
  },
];



/*export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'German | Deutsch', level: '100' },
  { title: 'English', level: '80' },
  { title: 'Italian | Italiano', level: '70' },
  { title: 'French | Français', level: '30' },
  { title: 'Swedish | Svenska', level: '15' },
];*/

export const PROJECTS: CvItem[] = [
  {
    title: 'AngularCV',
    subtitle: 'A simple self-hosted online-CV',
    begin: '10-2020',
    end: '',
    description: 'This project was created for the purpose of having a basic online-CV, which anyone can host by themselves. ' +
      'This very website is the result of it.',
    tags: ['Angular', 'MaterialDesign', 'GitHub', 'CSS', 'TypeScript', 'AWS', 'npm'],
    link: '',
    thumbnail: '',
  },
  {
    title: 'Bankruptcy and Creditor Information',
    subtitle: 'Automate processing of Bankruptcy information filed in US Courts',
    begin: '02-2020',
    end: '',
    description: 'This process would process all bankruptcies that are filed in US courts daily. Bankruptcy Project deals with scrapping bankruptcy (Business vs Individual)'+
    'filed in all courts within the US using the RPA process, create a JSON file that is being invoked and processed by workflow tool, invoke internal match systems.' +
    'Involved in requirement gathering and solution designing for end-end process flow. Designed BPMS flow and rules for processing the scrapped files, integrating RPA platform with BPMS, and' + 
    'design REST API as per best practice. Involved in code review and establishing release management process. Prepare weekly status report for reporting to business stakeholders.',
    tags: ['UiPath', 'JBPM', 'Drools', 'Rest API', , 'JSON', 'Power BI'],
    link: '',
    thumbnail: '',
  },
  
  {
    title: 'Migration of BPMS Platform on premise to Cloud,',
    subtitle: ' ',
    begin: '05-2019',
    end: '12-2019',
    description: '•	Evaluate the current landscape of on premise BPMS(opensource red hat jbpm) platform based on Version of the installed applications i.e. version of the current tool, operating system, DB Engine (Version and supported by SCT and DMS), Data backup and retention policy,'+
    ' GDPR Compliance - Type of data, legal restrictions in moving the data to Cloud or outside of the present region,'+' Data encryption, Data Migration Type , Database Migration Tools. Architecting for Performance Evaluation(Instance Type, Database Storage options(IOPS). '+
    'Involved in planning the migration by involving the proper stakeholders, failover mechanism.',
    tags: ['AWS', 'JBPM', 'GitHub'],
    link: '',
    thumbnail: '',
  },
  {
    title: 'Extreme Risk Consortium & Repository (ERCR)',
    subtitle: 'ERCR identify more and faster extreme risk transactions, very easy for participants to prevent, detect and systematically recover from bad debt losses attributed to higher risk and fraud.',
    begin: '',
    end: '',
    description: 'The goal of this project would be to stand up modern detection capabilities to identify tips, enable clients to submit/search tips via automation,'+
     'complete developments of new functionalities to the Extreme Risk Consortium & Repository (ERCR), and to drive operational efficiencies and cost savings. '+
     'Creating new functionalities, driving efficiencies, and cost savings will not only help business to protect our franchise and improve our data quality but will also help to protect our clients,'+
      'both Enterprise and Small Medium Businesses (SMB). ',
    tags: ['java/j2EE', 'Red hat(JBPM)', 'Oracle 12G', 'AWS'],
    link: '',
    thumbnail: '',
  },
  
];

/*export const VOLUNTEERING: CvItem[] = [
  {
    title: 'DFB cup finals & international matches',
    subtitle: 'Admission, visitor services, VIP support, stand-by man, special tasks',
    begin: '2007',
    end: '2016',
    description: 'Admission, visitor services, VIP support, stand-by man, special tasks',
    link: 'http://www.dfb.de',
    thumbnail: 'DFB-Logo.jpg',
  },
  {
    title: 'ISTAF & ISTAF Indoor',
    subtitle: 'Team lead',
    begin: '2007',
    end: '2016',
    description: 'Technical setup, visitor service, security, special tasks, teardown',
    link: 'https://www.istaf.de',
    thumbnail: 'ISTAF.png',
  },
  {
    title: 'UEFA Champions League Finals 2015 Berlin',
    subtitle: 'Team lead',
    begin: '',
    end: '2015',
    description: 'Team lead visitor service',
    link: 'https://www.uefa.com',
    thumbnail: 'UEFA_Champions_League-logo.png',
  },
  {
    title: 'CEV Champions League Final Four 2015 Berlin',
    subtitle: 'Team lead',
    begin: '',
    end: '2015',
    description: 'Team lead backstage security',
    link: 'http://www.cev.lu/',
    thumbnail: 'CEV_Champions_League_logo.png',
  },
  {
    title: 'German indoor rowing series',
    subtitle: 'Technical event manager',
    begin: '2010',
    end: '2015',
    description: 'Technical setup and time measurements',
    link: 'https://www.concept2.de/indoor-rowers/indoor-regatten/dirm',
    thumbnail: 'dirs_logo.jpg',
  },
  {
    title: 'Ruder-Bundesliga',
    subtitle: 'Time measurement',
    begin: '2009',
    end: '2015',
    description: 'Technical setup and time measurements for rowing Bundesliga.',
    link: 'https://www.ruder-bundesliga.de',
    thumbnail: 'Logo-Bundesliga_quer.jpg',
  },
  {
    title: 'Deutsche Ruderjugend im Deutschen Ruderverband',
    subtitle: 'Youth trainer and youth leader',
    begin: '2007',
    end: '2014',
    description: 'Taking care of young rowers in training camps, recreational rowing tours, camp for visiting the Olympic Games.',
    link: 'https://www.ruderjugend.org',
    thumbnail: 'DRJ_Logo.jpg',
  },
  {
    title: 'FISA World Rowing Junior Championships 2014 Hamburg',
    subtitle: 'IT network setup',
    begin: '',
    end: '2014',
    description: '',
    link: 'http://www.worldrowing.com/',
    thumbnail: 'FISA_JWM_2014.png',
  },
  {
    title: 'Hertha BSC',
    subtitle: 'Visitor services, special tasks, team lead',
    begin: '2008',
    end: '2011',
    description: 'Guiding visitors of home matches in the olympic stadium in Berlin. Lastly, as team lead.',
    link: 'http://www.hertha.de/',
    thumbnail: 'Hertha_BSC_Logo.svg',
  },
  {
    title: 'IAAF World Championships 2009 Berlin',
    subtitle: 'Anti-Doping-Chaperone',
    begin: '',
    end: '2009',
    description: '',
    link: 'https://www.iaaf.org/',
    thumbnail: 'IAAF_2009_in_Berlin.png',
  },
  {
    title: 'ULEB Euroleague Final Four 2009 Berlin',
    subtitle: 'Team delegate',
    begin: '',
    end: '2009',
    description: 'Team delegate of a basketeball team of Montepaschi Siena, Italy',
    link: 'http://www.euroleague.net/',
    thumbnail: 'ULEB_FinalFour_2009.png',
  },
  {
    title: 'FIFA World Cup 2006 Germany',
    subtitle: 'Visitor service',
    begin: '',
    end: '2006',
    description: 'Guiding visitors of the olympic stadium in Berlin.',
    link: 'https://www.fifa.com/',
    thumbnail: 'fifa_world_cup_2006.jpg',
  },
];*/

export const CONTACT = {
  city: 'East Brunswick, New Jersey',
  phone: '',
  mail: 'sudip.mitra82@gmail.com',
  skype: '', // just the account name
  linkedin: 'https://www.linkedin.com/in/sudipmitra1982/', // full url
  //xing: 'https://www.xing.com/profile/Sebastian_Schreck2', // full url
  //github: 'https://github.com/StegSchreck', // full url
  //stackoverflow: 'https://stackoverflow.com/users/story/6538600', // full url
  //twitter: 'https://twitter.com/StegSchreck', // full url
  //facebook: '', // full url
  //instagram: '', // full url
  /*other: [
    { title: 'Medium', icon: 'icon-medium', link: 'https://medium.com/@stegschreck' },
    { title: 'GitHub Page', icon: 'icon-github', link: 'https://stegschreck.github.io' },
    { title: 'GitLab Page', icon: 'icon-gitlab', link: 'https://stegschreck.gitlab.io' },
  ],*/
};

export const INTERESTS = [
  {
    title: 'Cycling',
    icon: 'directions_bike',
  },
  {
    title: 'Travelling',
    icon: 'not_listed_location',
  },
  {
    title: 'Learning New Technologies',
    icon: 'code',
  },
  {
    title: 'Reading',
    icon: 'icon-book',
  },
  {
    title: 'Soccer',
    icon: 'rowing',
  },
  {
    title: 'Photography',
    icon: 'camera_alt',
  },
  {
    title: 'NFL',
    icon: 'favorite',
  },
];

/*export const PUBLICATIONS: CvItem[] = [
  {
    title: 'How to Touch the Cloud',
    subtitle: 'Article published on Medium / MakeItNew.io',
    begin: '',
    end: '2019-10-03',
    description: 'Different Possibilities on How to Interact with AWS',
    tags: ['AWS', 'Python', 'Ansible', 'Terraform', 'S3', 'CloudFormation', 'SDK', 'CLI'],
    link: 'https://makeitnew.io/how-to-touch-the-cloud-d08bcf14debe',
    thumbnail: 'Medium_MakeItNew.png',
  },
  {
    title: 'The Speaker at the End of the Universe',
    subtitle: 'Article published on Medium',
    begin: '',
    end: '2019-05-27',
    description: 'How to Give a Talk at a Tech Conference',
    tags: ['conference', 'speaker', 'public speaking'],
    link: 'https://medium.com/@stegschreck/the-speaker-at-the-end-of-the-universe-6fb8565587b6',
    thumbnail: 'medium.png',
  },
  {
    title: 'The Hitchhiker’s Guide to a Tech Conference',
    subtitle: 'Article published on Medium',
    begin: '',
    end: '2019-05-20',
    description: 'A little How-To for Engineers how to visit a Tech Conference',
    tags: ['conference', 'visitor', 'attendee'],
    link: 'https://medium.com/@stegschreck/the-hitchhikers-guide-to-a-tech-conference-983c29b1e9ef',
    thumbnail: 'medium.png',
  },
  {
    title: 'Tear Down This Wall! - Overcoming Collaboration Obstacles on Your DevOps Journey',
    subtitle: 'Article published on Medium / MakeItNew.io',
    begin: '',
    end: '2019-04-17',
    description: 'A summary of our Talk \'Tear Down This Wall!\' given at Code.Talks Commerce Special 2018 in Berlin ' +
      'and DevOpsCon 2018 in Berlin about how we enable more collaboration in our IT teams at Mister Spex.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices'],
    link: 'https://makeitnew.io/tear-down-this-wall-c2211141fdb5',
    thumbnail: 'Medium_MakeItNew.png',
    attachment: 'tear-down-this-wall.pdf',
  },
];*/

/*export const TALKS: CvItem[] = [
  // {
  //   title: 'How to Touch the Cloud',
  //   subtitle: '45 min. @ AWS User Group MeetUp Berlin 2020',
  //   begin: '',
  //   end: '2020-03-03',
  //   description: 'Different Possibilities on How to Interact with AWS.',
  //   tags: ['AWS', 'Python', 'Ansible', 'Terraform', 'S3', 'CloudFormation', 'SDK', 'CLI'],
  //   thumbnail: 'AWS_MeetUp_Berlin.png',
  // },
  {
    title: 'Bringing a complex stack to the cloud - Our journey and lessons learned',
    subtitle: '45 min. @ AWS Startup Day Berlin 2018',
    begin: '',
    end: '2018-10-09',
    description: 'Mister Spex moved away from AWS to an on-premises infrastructure in 2015. In 2018 they switched back to AWS. This talk covers the story of these changes and the lessons learned.',
    tags: ['AWS', 'cloud', 'migration'],
    thumbnail: 'AWS_Startup_Day.png',
  },
  {
    title: 'Tear down this wall! - Overcoming collaboration obstacles on your DevOps journey',
    subtitle: '60 min. @ DevOpsCon Berlin 2018',
    begin: '',
    end: '2018-05-29',
    description: 'The discussion about DevOps is often focusing solely on the tooling aspect: automation, ' +
      'continuous integration & delivery; and monitoring. But automation and monitoring will only get you so far on ' +
      'your DevOps journey. The first and arguably hardest thing to master in DevOps is getting your work from ' +
      'inception into the hands of the customer fast. It requires your engineers to work hand in hand to ensure the ' +
      'stability of the software as well as the systems it runs on. This talk focuses on the organizational ' +
      'aspects of DevOps: How to measure and improve your team\'s effectiveness by reducing silos and silo thinking and ' +
      'how to get your engineers to share responsibility - a basis for every successful DevOps transformation.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices', 'team structure'],
    link: 'https://jaxenter.com/devops-interview-schreck-uebel-145573.html',
    thumbnail: 'DevOpsCon_2018_Speaker.png',
  },
  {
    title: 'Tear down this wall! - Overcoming collaboration obstacles on your DevOps journey',
    subtitle: '45 min. @ code.talks commerce special Berlin 2018',
    begin: '',
    end: '2018-04-13',
    description: 'The discussion about DevOps is often focusing solely on the tooling aspect: automation, ' +
      'continuous integration & delivery; and monitoring. But automation and monitoring will only get you so far on ' +
      'your DevOps journey. The first and arguably hardest thing to master in DevOps is getting your work from ' +
      'inception into the hands of the customer fast. It requires your engineers to work hand in hand to ensure the ' +
      'stability of the software as well as the systems it runs on. We focus on the organizational ' +
      'aspects of DevOps: How to measure and improve your team\'s effectiveness by reducing silos and silo thinking and ' +
      'how to get your engineers to share responsibility - a basis for every successful DevOps transformation.',
    tags: ['DevOps', 'culture', 'collaboration', 'communication', 'microservices'],
    link: 'https://www.youtube.com/watch?v=KWw0H__mtxI',
    thumbnail: 'code-talks-commerce.png',
  },
];*/