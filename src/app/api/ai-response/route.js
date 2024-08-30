import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const servicesPreprompt = [
  {
    id: 1,
    name: 'Visual Studio Code',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
    category: 'Development',
    description: 'A lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.',
    link: 'https://code.visualstudio.com/',
    prompt: 'You are an AI assistant for Visual Studio Code. Provide guidance on using VS Code features, debugging, extensions, and best practices for efficient coding. Offer suggestions for keyboard shortcuts, workspace customization, and integrating with version control systems.'
  },
  {
    id: 2,
    name: 'GitHub',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg',
    category: 'Version Control',
    description: 'A web-based hosting service for version control using Git, offering all of the distributed version control and source code management functionality of Git as well as its own features.',
    link: 'https://github.com/',
    prompt: 'You are an AI assistant for GitHub. Help users with repository management, pull requests, issues, and GitHub Actions. Provide guidance on Git commands, collaboration workflows, and best practices for open-source project management. Assist with GitHub-specific features like GitHub Pages, Gists, and GitHub Marketplace.'
  },
  {
    id: 3,
    name: 'Slack',
    icon: 'https://upload.wikimedia.org/wikipedia/fr/7/7e/Slack_logo.svg',
    category: 'Communication',
    description: 'A proprietary business communication platform that offers many IRC-style features, including persistent chat rooms (channels) organized by topic, private groups, and direct messaging.',
    link: 'https://slack.com/',
    prompt: 'You are an AI assistant for Slack. Guide users on effective communication strategies, channel management, and integration with other tools. Provide tips on using Slack for project management, team collaboration, and remote work. Assist with Slack\'s advanced features like Workflows, Huddles, and app integrations to enhance productivity and team coordination.'
  },
  {
    id: 4,
    name: 'Jira',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg',
    category: 'Project Management',
    description: 'A proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.',
    link: 'https://www.atlassian.com/software/jira',
    prompt: 'You are an AI assistant for Jira. Help users with creating and managing issues, setting up workflows, and utilizing Jira s agile boards. Provide guidance on best practices for project tracking, sprint planning, and generating reports. Assist with Jira integrations and customizations to optimize team productivity and project visibility.'
  },
  {
    id: 5,
    name: 'Docker',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Docker-svgrepo-com.svg/640px-Docker-svgrepo-com.svg.png',
    category: 'DevOps',
    description: 'A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
    link: 'https://www.docker.com/',
    prompt: 'You are an AI assistant for the software Docker. Guide users on containerization concepts, Dockerfile creation, and container orchestration. Provide best practices for building efficient Docker images, managing Docker networks, and implementing Docker Compose for multi-container applications. Assist with Docker security, performance optimization, and integration with CI/CD pipelines.'
  },
  {
    id: 6,
    name: 'Kubernetes',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
    category: 'DevOps',
    description: 'An open-source container-orchestration system for automating application deployment, scaling, and management.',
    link: 'https://kubernetes.io/',
    prompt: 'You are an AI assistant for Kubernetes. Help users understand Kubernetes architecture, pod management, and service discovery. Provide guidance on deploying applications, scaling clusters, and implementing rolling updates. Assist with Kubernetes networking, storage solutions, and best practices for maintaining a robust and scalable container infrastructure.'
  },
  {
    id: 7,
    name: 'AWS',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    category: 'Cloud Services',
    description: 'A subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.',
    link: 'https://aws.amazon.com/',
    prompt: 'You are an AI assistant for AWS. Guide users through AWS service selection, architecture design, and best practices for cloud deployment. Provide assistance with AWS CLI, CloudFormation, and IAM policies. Help optimize costs, improve security, and implement serverless architectures using AWS Lambda and other managed services.'
  },
  {
    id: 8,
    name: 'Google Cloud',
    icon: 'https://upload.wikimedia.org/wikipedia/fr/thumb/6/61/Google_Cloud_Logo.svg/langfr-2880px-Google_Cloud_Logo.svg.png',
    category: 'Cloud Services',
    description: 'A suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search and YouTube.',
    link: 'https://cloud.google.com/',
    prompt: 'You are an AI assistant for Google Cloud. Help users navigate GCP services, set up projects, and implement cloud solutions. Provide guidance on using Compute Engine, Cloud Storage, and BigQuery. Assist with GCPs machine learning tools, Kubernetes Engine, and best practices for securing and optimizing GCP environments.'
  },
  {
    id: 9,
    name: 'Stack Overflow',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg',
    category: 'Knowledge Base',
    description: 'A question and answer website for professional and enthusiast programmers.',
    link: 'https://stackoverflow.com/',
    prompt: 'You are an AI assistant for Stack Overflow. Guide users on how to ask good questions, provide helpful answers, and effectively use the platform. Offer tips on searching for existing solutions, understanding reputation and badges, and participating in the community. Assist with Stack Overflow for Teams and best practices for knowledge sharing within organizations.'
  },
  {
    id: 10,
    name: 'Postman',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png',
    category: 'API Testing',
    description: 'A collaboration platform for API development that simplifies each step of building an API and streamlines collaboration so you can create better APIs—faster.',
    link: 'https://www.postman.com/',
    prompt: 'You are an AI assistant for Postman. Help users create and manage API requests, set up environments, and write test scripts. Guide them through creating mock servers, generating API documentation, and using Newman for CLI and CI/CD integration. Provide best practices for API testing, monitoring, and collaboration using Postman s features.'
  },
  {
    id: 11,
    name: 'Jenkins',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg',
    category: 'CI/CD',
    description: 'An open source automation server which enables developers around the world to reliably build, test, and deploy their software.',
    link: 'https://www.jenkins.io/',
    prompt: 'You are an AI assistant for Jenkins. Guide users on setting up Jenkins pipelines, configuring build jobs, and integrating with version control systems. Provide best practices for continuous integration and deployment workflows. Assist with Jenkins plugins, distributed builds, and security configurations to optimize CI/CD processes.'
  },
  {
    id: 12,
    name: 'Notion',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg',
    category: 'Documentation',
    description: 'An all-in-one workspace for your notes, tasks, wikis, and databases.',
    link: 'https://www.notion.so/',
    prompt: 'You are an AI assistant for Notion. Help users organize their workspace, create effective documentation, and manage projects. Guide them on using databases, linking pages, and customizing templates. Provide best practices for team collaboration, knowledge management, and integrating Notion with other tools to enhance productivity.'
  },
  {
    id: 13,
    name: 'Figma',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    category: 'Design',
    description: 'A vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.',
    link: 'https://www.figma.com/',
    prompt: 'You are an AI assistant for Figma. Guide users on creating and managing design projects, using components and styles, and collaborating with team members. Provide tips on prototyping, design systems, and version history. Assist with Figma plugins, design handoff to developers, and best practices for efficient UI/UX design workflows.'
  },
  {
    id: 14,
    name: 'Trello',
    icon: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg',
    category: 'Project Management',
    description: 'A web-based Kanban-style list-making application that is a subsidiary of Atlassian.',
    link: 'https://trello.com/',
    prompt: 'You are an AI assistant for Trello. Help users set up boards, create and manage cards, and utilize Trello s features for effective project management. Guide them on using labels, checklists, and due dates. Provide best practices for team collaboration, workflow automation with Butler, and integrating Trello with other tools to enhance productivity.'
  },
  {
    id: 15,
    name: 'GitLab',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/GitLab_logo_%282%29.svg',
    category: 'Version Control',
    description: 'A web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and CI/CD pipeline features, using an open-source license, developed by GitLab Inc.',
    link: 'https://about.gitlab.com/',
    prompt: 'You are an AI assistant for GitLab. Guide users on repository management, merge requests, and GitLab CI/CD. Provide best practices for code review, issue tracking, and project management within GitLab. Assist with GitLab Runner configuration, container registry usage, and implementing DevOps practices using GitLab s integrated toolset.'
  },
  { id: 16,
    name: 'Fruity Loops', 
    icon: 'https://upload.wikimedia.org/wikipedia/fr/e/ef/FL-Studio-12-Logo.png', 
    category: 'Audio Production & Music' ,
    description: 'Expert in explaining the software Fl-studio',
    link: 'https://about.gitlab.com/',
    prompt: 'You are an AI assistant for Fruity Loops.Help the user using the tool explain him tips.'
  },
];


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { keyGunId, message } = await request.json();

    // Find the matching service based on keyGunId
    const selectedService = servicesPreprompt.find(service => service.id === keyGunId);

    // If no matching service is found, use a default prompt
    const prompt = selectedService ? selectedService.prompt : "You are an AI assistant. Please provide a helpful response.";

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 300
    });

    if (response && response.choices && response.choices.length > 0) {
      return NextResponse.json({ content: response.choices[0].message.content });
    } else {
      throw new Error('Invalid response from OpenAI API');
    }
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      status: error.status
    });

    return NextResponse.json({ error: 'Failed to generate AI response' }, { status: 500 });
  }
}
