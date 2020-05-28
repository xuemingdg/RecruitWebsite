import React, { Component } from 'react';
import styles from './index.less';

import { history } from 'umi';
import { Layout, Row, Col, Button, Card } from 'antd';
import {
  HomeFilled,
  PhoneFilled,
  InfoCircleFilled,
  RightCircleFilled,
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

export default class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  private getTitle(code: number): string {
    let output;
    switch (code) {
      case 1:
        output = 'Software Engineer - Frontend(Web)';
        break;
      case 2:
        output = 'Software Engineer - Backend';
        break;
      case 3:
        output = 'Software Architect';
        break;
      case 4:
        output = 'Software Engineer - Devops';
        break;
      case 5:
        output = 'Software Engineer - Frontend(Mobile)';
        break;
      case 6:
        output = 'Software Engineer - QA';
        break;
      case 7:
        output = 'Digital Product Manager';
        break;
      case 8:
        output = 'Frontend Leader';
        break;
      case 9:
        output = 'Performance Market Specialist';
        break;
      case 10:
        output = 'Trainee & Intern';
        break;
      default:
        output = 'Software Engineer - General';
    }
    return output;
  }

  private getInfo(code: number): string {
    let output;
    switch (code) {
      case 1:
        output =
          'As a Frontend Software Engineer, you’ll be responsible for design, develop and deliver usable, adaptable, reliable, and secure business frontend application to contribute to the regional business growth. You will apply the latest agile development methodology and process to deliver software with speed and quality. You will work in an energetic project team in a start-up like setting to contribute to the success of our digital initiative. You should be excellent communication and documentation skills.';
        break;
      case 2:
        output =
          'As a Software Engineer, you’ll be responsible for design, develop and deliver usable, adaptable, reliable, and secure business software solutions to contribute to the regional business growth. You will apply the latest agile development methodology and process to deliver software with speed and quality. You will work in an energetic project team in a start-up like setting to contribute to the success of our digital initiative. You should be excellent communication and documentation skills.';
        break;
      case 3:
        output =
          'As a Software Architect, you’ll be responsible for design, develop and deliver usable, adaptable, reliable, and secure business software solutions to contribute to the regional business growth. You will apply the latest agile development methodology and process to deliver software with speed and quality. You will work in an energetic project team in a start-up like setting to contribute to the success of our digital initiative. You are also response to couch, mentor and train other team members on processes and technologies. You should be excellent communication and documentation skills. ';
        break;
      case 4:
        output =
          'As a DevOps Engineer, you’ll be responsible for design, develop and deliver reliable technical automated solutions that help speed up the development and deployment process. In addition, you will be responsible on the operation and monitoring of the solution, and react to the incident when needed. You will work in an energetic project team in a start-up like setting to contribute to the success of our digital initiative. You should be excellent communication and documentation skills.';
        break;
      case 5:
        output =
          'As a Frontend Software Engineer, you’ll be responsible for design, develop and deliver usable, adaptable, reliable, and secure business frontend application to contribute to the regional business growth. You will apply the latest agile development methodology and process to deliver software with speed and quality. You will work in an energetic project team in a start-up like setting to contribute to the success of our digital initiative. You should be excellent communication and documentation skills.';
        break;
      case 6:
        output =
          'As a QA Software Engineer, you’ll be responsible for ensuring that the project is delivered in the highest quality. You will be focusing on testing different software components, including API, Web and Mobile application. You will work in an energetic project team in a start-up like setting to contribute to the success of our digital initiative. You should be excellent communication and documentation skills.';
        break;
      case 7:
        output = 'Digital Product Manager';
        break;
      case 8:
        output = 'Frontend Leader';
        break;
      case 9:
        output =
          'The ideal Performance Marketing Associate is an entrepreneurial and creative out-of-the-box thinking digital native with a get-things-done attitude, who wants to thrive in a fast-paced international environment. What separates you from other marketers is your relentless drive for running new tests and experiments on a regular basis. You love data, but even more, you actually love implementing changes based on those findings – instead of just creating dashboards.';
        break;
      case 10:
        output =
          'The talent and commitment of our people around the world are critical to our success. We seek and invest in the best talent, regardless of gender, ethnicity, disability status, age, religion, caring responsibilities or sexual orientation.';
        break;
      default:
        output = 'Software Engineer - General';
        break;
    }
    return output;
  }

  private getDuty(code: number) {
    let output;
    switch (code) {
      case 1:
        output = (
          <ul className={styles.listText}>
            <li>
              Drive the detail design of technical solutions based on business
              requirements, technology roadmap and other constraints
            </li>
            <li>
              Hands on web development using the most appropriate frameworks
            </li>
            <li>
              Develop the solution with latest web framework and technologies
            </li>
            <li>
              Drive a high quality and high performance culture by applying
              proper development process
            </li>
            <li>
              Make sure that the deliverable are of highest quality and
              professionalism
            </li>
            <li>
              Perform code review and maintain coding standards and best
              practices
            </li>
            <li>Create automated tests and unit tests</li>
            <li>
              Prepare technical documentations, including mobile architecture,
              design document, user guide, etc.
            </li>
            <li>
              Create tools and processes to automate our development, testing,
              and production workflows
            </li>
            <li>
              Build rapid prototyping and development to test innovative ideas
              in the market
            </li>
            <li>Taking lead on projects, as needed</li>
          </ul>
        );
        break;
      case 2:
        output = (
          <ul className={styles.listText}>
            <li>
              Drive the detail design of technical solutions based on business
              requirements, technology roadmap and other constraints
            </li>
            <li>Hands on development using Test Driven Development</li>
            <li>
              Drive a high quality and high performance culture by applying
              proper development process
            </li>
            <li>
              Escalation management: act as primary contact of escalations of
              any kind of issues within the project
            </li>
            <li>
              Make sure that the deliverable are of highest quality and
              professionalism
            </li>
            <li>Drive continuous process improvements</li>
            <li>
              Design and document professional APIs that follow the standard and
              best practices
            </li>
            <li>
              Design and develop microservices or serverless back-end systems
            </li>
            <li>
              Develop web frontend with latest web framework and technologies
            </li>
            <li>
              Perform code review and maintain coding standards and best
              practices
            </li>
            <li>Create automated tests and unit tests</li>
            <li>
              Prepare technical documentations, including mobile architecture,
              design document, user guide, etc.
            </li>
            <li>
              Create tools and processes to automate our development, testing,
              and production workflows
            </li>
            <li>
              Build rapid prototyping and development to test innovative ideas
              in the market
            </li>
            <li>Taking lead on projects, as needed</li>
          </ul>
        );
        break;
      case 3:
        output = (
          <ul className={styles.listText}>
            <li>
              Work with the product team to understand the requirements and
              create the corresponding technical documents, including
              architecture, technical proposal, technical design document, etc.
            </li>
            <li>
              Evaluate and propose the best cloud technologies for a given
              business problem
            </li>
            <li>
              Drive a high quality and high performance culture by applying
              proper development process
            </li>
            <li>
              Hands on development using Test Driven Development when needed
            </li>
            <li>
              Make sure that the deliverable are of highest quality and
              professionalism
            </li>
            <li>
              Perform code review and maintain coding standards and best
              practices
            </li>
            <li>Assist the team to resolve production issues</li>
            <li>
              Coach, mentor, motivate and train team members with less
              experience{' '}
            </li>
            <li>
              Build rapid prototyping and development to test innovative ideas
              in the market.
            </li>
          </ul>
        );
        break;
      case 4:
        output = (
          <ul className={styles.listText}>
            <li>
              Implement DevOps automation for Enterprise systems and
              infrastructures
            </li>
            <li>
              Increase the speed of delivery, improve quality/security of code,
              create tools and optimise processes for the development team
            </li>
            <li>
              Build and manage private and public cloud server infrastructure in
              development and production environments using Infrastructure as
              Code
            </li>
            <li>
              Develop and implement efficient operations management processes
              including disaster recover, high availability, monitoring, and
              systems security
            </li>
            <li>
              Lead efforts to diagnose and resolve system-level issues including
              root cause analysis and technical/process recommendations for
              improvement
            </li>
            <li>
              Prepare technical documentations, including mobile architecture,
              design document, user guide, etc.
            </li>
            <li>
              Create tools and processes to automate our development, testing,
              and production workflows
            </li>
            <li>
              Build rapid prototyping and development to test innovative ideas
              in the market
            </li>
          </ul>
        );
        break;
      case 5:
        output = (
          <ul className={styles.listText}>
            <li>
              Drive the detail design of technical solutions based on business
              requirements, technology roadmap and other constraints
            </li>
            <li>
              Hands on iOS/Android development using React-Native or Cordova
            </li>
            <li>Practice of Test Driven Development</li>
            <li>Develop the app with latest frameworks and technologies</li>
            <li>Knowledge of Java and native app development is a big plus</li>
            <li>
              Deploy and distribute the app to Apple AppStore, Google Play, or
              internally within the company
            </li>
            <li>
              Drive a high quality and high performance culture by applying
              proper development process
            </li>
            <li>
              Make sure that the deliverable are of highest quality and
              professionalism
            </li>
            <li>Drive continuous process improvements</li>
            <li>
              Perform code review and maintain coding standards and best
              practices
            </li>
            <li>Taking lead on projects, as needed</li>
          </ul>
        );
        break;
      case 6:
        output = (
          <ul className={styles.listText}>
            <li>
              Gather and clarify business requirements to ensure proper
              development of test plans
            </li>
            <li>
              Manage design and implementation of the testing framework and test
              case automation to support continuous integration/test/deployment
            </li>
            <li>
              Design, develop and execute manual test, or automated tests using
              testing software and/or in-house written tools
            </li>
            <li>
              Demonstrate an excellent level of understanding towards internet
              and mobile applications and user behaviours to perform testing
              accordingly
            </li>
            <li>
              Identify application issues, report discrepancies, prepare test
              report and recommend improvements
            </li>
            <li>
              Communicate and liaise with users and development teams in
              carrying out testing
            </li>
            <li>
              Contribute to the building of a Continuous Integration (CI)
              environment and ongoing process improvement activities
            </li>
            <li>
              Identify required improvements in the test and development
              processes; make contributions to our automation tools that address
              specific needs
            </li>
          </ul>
        );
        break;
      case 7:
        output = (
          <ul className={styles.listText}>
            <li>
              Drive the detail design of technical solutions based on business
              requirements, technology roadmap and other constraints
            </li>
            <li>
              Hands on web development using the most appropriate frameworks
            </li>
            <li>
              Develop the solution with latest web framework and technologies.
            </li>
            <li>
              Drive a high quality and high performance culture by applying
              proper development process
            </li>
            <li>
              Make sure that the deliverable are of highest quality and
              professionalism
            </li>
            <li>
              Perform code review and maintain coding standards and best
              practices
            </li>
            <li>Create automated tests and unit tests</li>
            <li>
              Prepare technical documentations, including mobile architecture,
              design document, user guide, etc.
            </li>
            <li>
              Create tools and processes to automate our development, testing,
              and production workflows
            </li>
            <li>
              Build rapid prototyping and development to test innovative ideas
              in the market.
            </li>
            <li>Taking lead on projects, as needed.</li>
          </ul>
        );
        break;
      case 8:
        output = (
          <ul className={styles.listText}>
            <li>
              Drive the detail design of technical solutions based on business
              requirements, technology roadmap and other constraints
            </li>
            <li>
              Hands on web development using the most appropriate frameworks
            </li>
            <li>
              Develop the solution with latest web framework and technologies.
            </li>
            <li>
              Drive a high quality and high performance culture by applying
              proper development process
            </li>
            <li>
              Make sure that the deliverable are of highest quality and
              professionalism
            </li>
            <li>
              Perform code review and maintain coding standards and best
              practices
            </li>
            <li>Create automated tests and unit tests</li>
            <li>
              Prepare technical documentations, including mobile architecture,
              design document, user guide, etc.
            </li>
            <li>
              Create tools and processes to automate our development, testing,
              and production workflows
            </li>
            <li>
              Build rapid prototyping and development to test innovative ideas
              in the market.
            </li>
            <li>Taking lead on projects, as needed.</li>
          </ul>
        );
        break;
      case 9:
        output = (
          <ul className={styles.listText}>
            <li>
              Managing paid ad campaigns across search, display, social and
              retargeting networks by conducting extensive keyword research,
              analysis and testing of keyword performance
            </li>
            <li>
              Ensuring successful campaigns managing bids and budgets to be able
              to meet the predefined KPI's
            </li>
            <li>
              Optimising campaigns across multiple channels to deliver the best
              return on investment
            </li>
            <li>
              Identify replicable marketing strategies, tactics and channels
              that address business pain points and convey product benefits to
              drive new customer acquisition – with an implement, test, and
              measure mindset
            </li>
            <li>
              Write content for marketing ads, campaigns and landing pages
            </li>
            <li>
              Test different value propositions and messages across different
              channels to find the best angle to introduce our product for each
              target group
            </li>
            <li>
              Build and run A/B tests across landing pages and the homepage, and
              across mobile environments (screens)
            </li>
          </ul>
        );
        break;
      case 10:
        output = (
          <ul className={styles.listText}>
            <li>Performance Market Trainee & Intern</li>
            <li>Front End Development Trainee & Intern</li>
            <li>Backend Development Trainee & Intern</li>
            <li>QA Testing Trainee & Intern</li>
            <li>Data Scientist Trainee & Intern</li>
            <li>UX/UI Trainee & Intern</li>
          </ul>
        );
        break;
      default:
        break;
    }
    return output;
  }

  private getCriteria(code: number) {
    let output;
    switch (code) {
      case 1:
        output = (
          <ul className={styles.listText}>
            <li>
              Minimum 5+ years of proven work experience in web software
              development
            </li>
            <li>
              Experience in front-end development using one or more popular
              JavaScript frameworks (e.g. ReactJS, AngularJS, BackboneJS, VueJS)
              and libraries{' '}
            </li>
            <li>Proficient in ES6, HTML5 and CSS3</li>
            <li>
              Familiarity with RESTful APIs integration using Node JS / Express
              JS
            </li>
            <li>
              Knowledge in frontend build process (NPM, Webpack, Gulp/ Grunt)
            </li>
            <li>
              Strong desire to create web application with great user experience
              and usability
            </li>
            <li>Experience on creating automated UI test cases</li>
            <li>
              Experience on developing secure web app that meets regulatory
              requirements is an advantage
            </li>
            <li>
              Experience in React-Native or Flutter will be a great advantage
            </li>
            <li>
              Good understanding of development methodologies, testing
              practices, and tools and knowing when to apply them
            </li>
            <li>
              Experience working in a product-oriented, team-based environment
              that uses modern digital delivery approaches such as user
              experience design, lean, agile, DevOps, and cloud computing
            </li>
            <li>
              Strong communication skills and willingness to ask for help and
              bounce ideas and solutions off peers{' '}
            </li>
            <li>Teamwork skills with a problem-solving attitude</li>
            <li>"Can do"mentality</li>
            <li>
              You speak English and Mandarin fluently and can communicate and
              present professionally with ease. Knowledge of Cantonese is an
              advantage.
            </li>
            <li>
              You have proven ability to simplify and navigate in highly
              ambiguous situations
            </li>
            <li>
              Bachelors or Masters in Computer Science or Engineering, or
              equivalent relevant technical field
            </li>
          </ul>
        );
        break;
      case 2:
        output = (
          <ul className={styles.listText}>
            <li>
              Minimum 5+ years of proven work experience in web software
              development
            </li>
            <li>
              Experience working in a product-oriented, team-based environment
              that uses modern digital delivery approaches such as user
              experience design, lean, agile, DevOps, and cloud computing
            </li>
            <li>
              Experience working in a technical environment that makes use of
              languages, frameworks, techniques, and technologies such as Java,
              HTML5, CSS3, JavaScript, jQuery, Node.js, React, Angular, Python,
              Spring, Spring Boot, REST APIs, JSON, MSSQL, MySQL, NoSQL,
              Couchbase, MongoDB, Git, Bitbucket, Redis, Jenkins, Bamboo,
              Docker, Azure, Terraform, Kafka, MQ
            </li>
            <li>Hands-on programming, coding, debugging and monitoring</li>
            <li>Solid experience in Java and OOP</li>
            <li>
              Strong experience and knowledge in API, system integration,
              microservices, business reporting, software engineering concepts
              and best practices
            </li>
            <li>Experience in microservices design pattern </li>
            <li>Experience in Docker and Kubernetes</li>
            <li>Experience in Serverless technology is an advantage</li>
            <li>
              Experience in development with Cloud based services (Azure, AWS,
              GCP, etc.). Experience in Azure will be an advantage
            </li>
            <li>
              Familiar in pub/sub and event driven style development (Kafka, MQ,
              Azure Event Hub, etc.)
            </li>
            <li>Strong analytical mind and logical thinking</li>
            <li>Excellent analytical and time management skills</li>
            <li>Teamwork skills with a problem-solving attitude</li>
            <li>"Can do"mentality</li>
            <li>
              You speak English and Mandarin fluently and can communicate and
              present professionally with ease. Knowledge of Cantonese is an
              advantage.
            </li>
            <li>
              You have proven ability to simplify and navigate in highly
              ambiguous situations
            </li>
            <li>
              Bachelors or Masters in Computer Science or Engineering, or
              equivalent relevant technical field
            </li>
          </ul>
        );
        break;
      case 3:
        output = (
          <ul className={styles.listText}>
            <li>
              Minimum 10+ years of proven work experience in software
              development
            </li>
            <li>5+ years in system architecture and design</li>
            <li>2+ years in design solution using cloud services technology</li>
            <li>
              Experience designing cloud software architectures for scalability,
              reliability, security and performance
            </li>
            <li>
              Strong experience and knowledge in API, system integration,
              microservices, business reporting, software engineering concepts
              and best practices
            </li>
            <li>
              Experience in applying test driven development, automated united
              test/integration test/load testing
            </li>
            <li>
              Experience in designing or building solutions using Azure Cloud
              service technologies, or similar cloud provider
            </li>
            <li>
              Experience in enterprise integration technology like message queue
              or event streaming
            </li>
            <li>Experience in Docker and Kubernetes is a big plus</li>
            <li>Knowledge of serverless technology is an advantage</li>
            <li>
              Expertise in designing professional API using OpenAPI
              standard/Swagger
            </li>
            <li>Knowledge in CI/CD, and Infrastructure as code is a plus</li>
            <li>
              Experience working in a product-oriented, team-based environment
              that uses modern digital delivery approaches such as user
              experience design, lean, agile, DevOps, and cloud computing
            </li>
            <li>
              Experience in the following languages, frameworks, techniques, and
              technologies such as Java, HTML5, CSS3, JavaScript, jQuery,
              Node.js, React, Angular, Python, Spring, Spring Boot, REST APIs,
              JSON, MSSQL, MySQL, NoSQL, Couchbase, MongoDB, Git, Bitbucket,
              Redis, Jenkins, Bamboo, Docker, Azure, AWS, Terraform, Kafka
            </li>
            <li>Teamwork skills with a problem-solving attitude</li>
            <li>Excellent analytical and time management skills</li>
            <li>"Can do"mentality</li>
            <li>
              You speak English and Mandarin fluently and can communicate and
              present professionally with ease. Knowledge of Cantonese is an
              advantage.
            </li>
            <li>
              You have proven ability to simplify and navigate in highly
              ambiguous situations
            </li>
            <li>
              Bachelors or Masters in Computer Science or Engineering, or
              equivalent relevant technical field
            </li>
          </ul>
        );
        break;
      case 4:
        output = (
          <ul className={styles.listText}>
            <li>
              MMinimum 5+ years of proven work experience in system
              administration or DevOps
            </li>
            <li>
              Excellent coding and scripting skills and experience in
              implementing high-scale cloud architectures using modern,
              cloud-based container platforms (PaaS/SaaS)
            </li>
            <li>Experience on Infrastructure as Code (Terraform, etc)</li>
            <li>
              Experience in production deployment model like Blue-Green
              deployment
            </li>
            <li>
              Know-how of cloud infrastructure (Azure, AWS) and cluster
              management tools like Kubernetes
            </li>
            <li>Competence in containers such as Docker, OpenShfit</li>
            <li>
              Solid experience in continuous integration and related tools such
              as Jenkins, Bamboo, Hudson, Maven, Ant, Git, Sonar, etc.
            </li>
            <li>
              Experience in managing secrets in the solution during deployment
            </li>
            <li>Strong analytical mind and logical thinking</li>
            <li>Excellent analytical and time management skills</li>
            <li>Teamwork skills with a problem-solving attitude</li>
            <li>"Can do"mentality</li>
            <li>
              You speak English and Mandarin fluently and can communicate and
              present professionally with ease. Knowledge of Cantonese is an
              advantage.
            </li>
            <li>
              You have proven ability to simplify and navigate in highly
              ambiguous situations
            </li>
            <li>
              Bachelors or Masters in Computer Science or Engineering, or
              equivalent relevant technical field
            </li>
          </ul>
        );
        break;
      case 5:
        output = (
          <ul className={styles.listText}>
            <li>
              Minimum 5+ years of proven work experience in mobile software
              development
            </li>
            <li>
              Strong desire to create mobile application with great user
              experience and usability
            </li>
            <li>
              Experience on React-Native or Cordova hybrid app development
            </li>
            <li>
              Proven hybrid App development experience with apps published to
              the app store or Google Play
            </li>
            <li>
              Experience on creating automated mobile test cases, and perform
              testing on device farm
            </li>
            <li>
              Experience on developing secure mobile app that meets regulatory
              requirements is an advantage
            </li>
            <li>
              Experience with H5 development to be used inside the app is a big
              plus{' '}
            </li>
            <li>Experience in Flutter would be a great advantage</li>
            <li>
              Good understanding of development methodologies, testing
              practices, and tools and knowing when to apply them
            </li>
            <li>
              Experience working in a product-oriented, team-based environment
              that uses modern digital delivery approaches such as user
              experience design, lean, agile, DevOps, and cloud computing
            </li>
            <li>
              Strong communication skills and willingness to ask for help and
              bounce ideas and solutions off peers{' '}
            </li>
            <li>Teamwork skills with a problem-solving attitude</li>
            <li>"Can do"mentality</li>
            <li>
              You speak English and Mandarin fluently and can communicate and
              present professionally with ease. Knowledge of Cantonese is an
              advantage.
            </li>
            <li>
              You have proven ability to simplify and navigate in highly
              ambiguous situations
            </li>
            <li>
              Bachelors or Masters in Computer Science or Engineering, or
              equivalent relevant technical field
            </li>
          </ul>
        );
        break;
      case 6:
        output = (
          <ul className={styles.listText}>
            <li>5+ years of software testing experience</li>
            <li>2+ years of hands on experience in building automated tests</li>
            <li>
              Experience with mobile, web, and API testing and automated test
              techniques with a strong focus on quality throughout the entire
              software development cycle
            </li>
            <li>
              Experience in working with different frameworks like TestNG,
              Appium, JMeter, Selenium, Cucumber etc.
            </li>
            <li>Knowledge of testing using cloud based device farm</li>
            <li>
              Strong experience in UI/API Automation test design and execution
            </li>
            <li>
              Experience in performing different kind of tests, including
              functional, smoke, regression, stress test, etc.
            </li>
            <li>
              Familiarity with web technologies, React, Java, DB/SQL
              development, CI/CD and integration tools
            </li>
            <li>
              Experience in development and testing with Cloud based services
              (Azure, AWS, GCP, etc.). Experience in Azure will be an advantage
            </li>
            <li>Strong analytical mind and logical thinking</li>
            <li>"Can do"mentality</li>
            <li>
              You speak English and Mandarin fluently and can communicate and
              present professionally with ease. Knowledge of Cantonese is an
              advantage.
            </li>
            <li>
              You have proven ability to simplify and navigate in highly
              ambiguous situations
            </li>
            <li>
              Bachelors or Masters in Computer Science or Engineering, or
              equivalent relevant technical field
            </li>
          </ul>
        );
        break;
      case 7:
        output = (
          <ul className={styles.listText}>
            <li>
              Minimum 5+ years of proven work experience in web software
              development
            </li>
            <li>
              Experience in front-end development using one or more popular
              JavaScript frameworks (e.g. ReactJS, AngularJS, BackboneJS, VueJS)
              and libraries{' '}
            </li>
            <li>Proficient in ES6, HTML5 and CSS3</li>
            <li>
              Familiarity with RESTful APIs integration using Node JS / Express
              JS
            </li>
            <li>
              Knowledge in frontend build process (NPM, Webpack, Gulp/ Grunt)
            </li>
            <li>
              Strong desire to create web application with great user experience
              and usability
            </li>
            <li>Experience on creating automated UI test cases</li>
            <li>
              Experience on developing secure web app that meets regulatory
              requirements is an advantage
            </li>
            <li>
              Experience in React-Native or Flutter will be a great advantage
            </li>
            <li>
              Good understanding of development methodologies, testing
              practices, and tools and knowing when to apply them
            </li>
            <li>
              Experience working in a product-oriented, team-based environment
              that uses modern digital delivery approaches such as user
              experience design, lean, agile, DevOps, and cloud computing
            </li>
            <li>
              Strong communication skills and willingness to ask for help and
              bounce ideas and solutions off peers{' '}
            </li>
            <li>Teamwork skills with a problem-solving attitude</li>
            <li>"Can do"mentality</li>
            <li>
              You speak English and Mandarin fluently and can communicate and
              present professionally with ease. Knowledge of Cantonese is an
              advantage.
            </li>
            <li>
              You have proven ability to simplify and navigate in highly
              ambiguous situations
            </li>
            <li>
              Bachelors or Masters in Computer Science or Engineering, or
              equivalent relevant technical field
            </li>
          </ul>
        );
        break;
      case 8:
        output = (
          <ul className={styles.listText}>
            <li>
              Minimum 5+ years of proven work experience in web software
              development
            </li>
            <li>
              Experience in front-end development using one or more popular
              JavaScript frameworks (e.g. ReactJS, AngularJS, BackboneJS, VueJS)
              and libraries{' '}
            </li>
            <li>Proficient in ES6, HTML5 and CSS3</li>
            <li>
              Familiarity with RESTful APIs integration using Node JS / Express
              JS
            </li>
            <li>
              Knowledge in frontend build process (NPM, Webpack, Gulp/ Grunt)
            </li>
            <li>
              Strong desire to create web application with great user experience
              and usability
            </li>
            <li>Experience on creating automated UI test cases</li>
            <li>
              Experience on developing secure web app that meets regulatory
              requirements is an advantage
            </li>
            <li>
              Experience in React-Native or Flutter will be a great advantage
            </li>
            <li>
              Good understanding of development methodologies, testing
              practices, and tools and knowing when to apply them
            </li>
            <li>
              Experience working in a product-oriented, team-based environment
              that uses modern digital delivery approaches such as user
              experience design, lean, agile, DevOps, and cloud computing
            </li>
            <li>
              Strong communication skills and willingness to ask for help and
              bounce ideas and solutions off peers{' '}
            </li>
            <li>Teamwork skills with a problem-solving attitude</li>
            <li>"Can do"mentality</li>
            <li>
              You speak English and Mandarin fluently and can communicate and
              present professionally with ease. Knowledge of Cantonese is an
              advantage.
            </li>
            <li>
              You have proven ability to simplify and navigate in highly
              ambiguous situations
            </li>
            <li>
              Bachelors or Masters in Computer Science or Engineering, or
              equivalent relevant technical field
            </li>
          </ul>
        );
        break;
      case 9:
        output = (
          <ul className={styles.listText}>
            <li>
              You have a Bachelor Degree in marketing, business or equivalent
            </li>
            <li>
              You have at least 2+ years of professional experience doing mainly
              PPC-advertising either in an agency or in-house
            </li>
            <li>You work fast and are willing to learn</li>
            <li>
              You have an understanding of statistics and ability to support
              hypotheses with data
            </li>
            <li>You have prior experience in performance marketing & SEO</li>
            <li>You have A/B Testing and Data Analytics experience</li>
            <li>
              You are curious, creative and are relentless in pursuit of growth
            </li>
            <li>
              You possess the entrepreneurial drive and demonstrated ability to
              achieve stretch goals in an innovative and fast-paced environment
            </li>
            <li>You are willing to roll up sleeves and get the job done</li>
            <li>
              Preferred to have experience in Hotjar, Semrush, Hubspot and/or
              other similar tools within the growth stack
            </li>
          </ul>
        );
        break;
      case 10:
        output = (
          <div className={styles.listText}>
            <b>Trainee:</b>
            <ul>
              <li>
                Bachelor Degree or above from 1st level university (list in 985
                or top level university in oversea)
              </li>
              <li>
                Master Degree is preferred Major in Computer, Arts,
                Advertisement, Financial relevant
              </li>
              <li>Excellent English including oral English</li>
              <li>Proactive, good team work, willing to learn</li>
              <li>Can be on board immediately</li>
            </ul>
            <b>Intern:</b>
            <ul>
              <li>
                Full time study Student in top level university (list in 985 or
                top level university in oversea)
              </li>
              <li>
                Major in Computer, Arts, Advertisement, Financial relevant
              </li>
              <li>Excellent English including oral English</li>
              <li>Proactive, good team work, willing to learn</li>
              <li>
                Can present at office three days or above per week, two-three
                months internship at least
              </li>
            </ul>
          </div>
        );
        break;
      default:
        break;
    }
    return output;
  }
  render() {
    let codeVal = parseInt(this.props.location.query.code);

    return (
      <Layout>
        <Header
          style={{
            background: '#F5F5F5',
            textAlign: 'center',
            padding: 0,
            height: 'auto',
          }}
        >
          <Row>
            <Col span={6}>
              <HomeFilled
                style={{ fontSize: '30px' }}
                onClick={() => history.goBack()}
              />
            </Col>
            <Col span={6}>
              <InfoCircleFilled
                style={{ fontSize: '30px' }}
                onClick={() => history.push('/aboutUs')}
              />
            </Col>
            <Col span={6}>
              <PhoneFilled
                style={{ fontSize: '30px' }}
                onClick={() => history.push('/contact')}
              />
            </Col>
            <Col span={6}>
              <RightCircleFilled style={{ fontSize: '30px' }} />
            </Col>
          </Row>
        </Header>
        <Content style={{ background: '#FFF', padding: 10 }}>
          <h1>{this.getTitle(codeVal)}</h1>
          <div style={{ marginBottom: 20 }}>2020-05-09</div>

          <div className={styles.paragraphText}>
            At Prudential, we understand that success comes from the talent and
            commitment of our people. Together, we have a shared vision in
            securing the future of our customers and our communities. We strive
            to build a business that you can shape, an inclusive workplace where
            everyone’s ideas are valued and a culture where we can thrive
            together. Our people stay connected and tuned in to what’s happening
            around us, keeping us ahead of the curve. While focused on the
            long-term, we look to the future to bring growth, development and
            benefit to everyone whose lives we touch.
          </div>

          <div className={styles.dividerTitle}>What we are looking for</div>
          <div className={styles.paragraphText}>{this.getInfo(codeVal)}</div>

          <div className={styles.dividerTitle}>What you will do</div>
          {this.getDuty(codeVal)}

          <div className={styles.dividerTitle}>What you will need</div>
          <div>{this.getCriteria(codeVal)}</div>
          <div style={{ textAlign: 'center' }}>
            {
              <Button
                type="primary"
                danger
                onClick={() => history.push('/contact')}
              >
                简历投递
              </Button>
            }
          </div>
        </Content>
      </Layout>
    );
  }
}
