export const KG_RECOMMENDATIONS = [
    { code: 'KG-001', name: 'Microsoft Excel' },
    { code: 'KG-002', name: 'Blender' },
    { code: 'KG-003', name: 'Adobe Photoshop' },
    { code: 'KG-004', name: 'Salesforce' },
    { code: 'KG-005', name: 'AutoCAD' },
    { code: 'KG-006', name: 'Python' },
    { code: 'KG-007', name: 'Tableau' },
    { code: 'KG-008', name: 'SAP' },
    { code: 'KG-009', name: 'WordPress' },
    { code: 'KG-010', name: 'MATLAB' },
    { code: 'KG-011', name: 'Unity' },
    { code: 'KG-012', name: 'Microsoft Power BI' },
    { code: 'KG-013', name: 'Adobe Premiere Pro' },
    { code: 'KG-014', name: 'Figma' },
    { code: 'KG-015', name: 'TensorFlow' },
    { code: 'KG-016', name: 'Jira' },
    { code: 'KG-017', name: 'Revit' },
    { code: 'KG-018', name: 'SolidWorks' },
    { code: 'KG-019', name: 'Kubernetes' },
    { code: 'KG-020', name: 'Shopify' },
  ];


  export const initialState = {
    availableKeyGuns: [
      { id: 1, name: 'Visual Studio Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'Development' },
      { id: 2, name: 'GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg', category: 'Version Control' },
      { id: 3, name: 'Slack', icon: 'https://upload.wikimedia.org/wikipedia/fr/7/7e/Slack_logo.svg', category: 'Communication' },
      { id: 4, name: 'Jira', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg', category: 'Project Management' },
      { id: 5, name: 'Docker', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Docker-svgrepo-com.svg/640px-Docker-svgrepo-com.svg.png', category: 'DevOps' },
      { id: 6, name: 'Kubernetes', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg', category: 'DevOps' },
      { id: 7, name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', category: 'Cloud Services' },
      { id: 8, name: 'Google Cloud', icon: 'https://upload.wikimedia.org/wikipedia/fr/thumb/6/61/Google_Cloud_Logo.svg/langfr-2880px-Google_Cloud_Logo.svg.png', category: 'Cloud Services' },
      { id: 9, name: 'Stack Overflow', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg', category: 'Knowledge Base' },
      { id: 10, name: 'Postman', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png', category: 'API Testing' },
      { id: 11, name: 'Jenkins', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg', category: 'CI/CD' },
      { id: 12, name: 'Notion', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg', category: 'Documentation' },
      { id: 13, name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', category: 'Design' },
      { id: 14, name: 'Trello', icon: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg', category: 'Project Management' },
      { id: 15, name: 'GitLab', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/GitLab_logo_%282%29.svg', category: 'Version Control' },
    ],
    selectedKeyGuns: [],
  };



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
    }
  ];





  const alternate = [
    {
      id: 1,
      name: 'Adobe Creative Suite',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/640px-Adobe_Creative_Cloud_rainbow_icon.svg.png',
      category: 'Creative Tools',
      description: 'A collection of applications used for graphic design, video editing, web development, photography, and cloud services.',
      link: 'https://www.adobe.com/creativecloud.html',
      prompt: 'You are an AI assistant for Adobe Creative Suite. Guide users on using Photoshop, Illustrator, Premiere Pro, and other Adobe applications. Provide tips on design techniques, video editing workflows, and integrating different Adobe tools for creative projects.'
    },
    {
      id: 2,
      name: 'Blender',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/512px-Blender_logo_no_text.svg.png',
      category: '3D Modeling & Animation',
      description: 'A free and open-source 3D creation suite. It supports the entire 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing and motion tracking, video editing and 2D animation pipeline.',
      link: 'https://www.blender.org/',
      prompt: 'You are an AI assistant for Blender. Help users with 3D modeling, animation, and rendering techniques. Guide them through Blender\'s interface, tools, and features. Provide tips on creating compelling 3D content and optimizing workflows.'
    },
    {
      id: 3,
      name: 'FL Studio',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/FL_Studio_12_Icon.png/640px-FL_Studio_12_Icon.png',
      category: 'Music Production',
      description: 'A digital audio workstation developed by Belgian company Image-Line. FL Studio features a graphical user interface based on a pattern-based music sequencer.',
      link: 'https://www.image-line.com/',
      prompt: 'You are an AI assistant for FL Studio. Guide users on music production techniques, using virtual instruments, and audio mixing. Provide tips on creating beats, arranging tracks, and utilizing FL Studio\'s unique features for music creation.'
    },
    {
      id: 4,
      name: 'DaVinci Resolve',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/DaVinci_Resolve_17_logo.svg/640px-DaVinci_Resolve_17_logo.svg.png',
      category: 'Video Editing',
      description: 'A color correction and non-linear video editing application for macOS, Windows, and Linux, developed by Blackmagic Design.',
      link: 'https://www.blackmagicdesign.com/products/davinciresolve/',
      prompt: 'You are an AI assistant for DaVinci Resolve. Help users with video editing techniques, color grading, and audio post-production. Guide them through the software\'s interface and provide tips on creating professional-looking videos and optimizing workflows.'
    },
    {
      id: 5,
      name: 'Unity',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/640px-Unity_Technologies_logo.svg.png',
      category: 'Game Development',
      description: 'A cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.\'s Worldwide Developers Conference as a Mac OS X-exclusive game engine.',
      link: 'https://unity.com/',
      prompt: 'You are an AI assistant for Unity. Guide users on game development concepts, 3D modeling integration, and C# scripting. Provide best practices for optimizing game performance, creating engaging gameplay mechanics, and publishing games to various platforms.'
    },
    {
      id: 6,
      name: "Figma",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      category: "Design",
      description: "A vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.",
      link: "https://www.figma.com/",
      prompt: "You are an AI assistant for Figma. Guide users on creating and managing design projects, using components and styles, and collaborating with team members. Provide tips on prototyping, design systems, and version history. Assist with Figma plugins, design handoff to developers, and best practices for efficient UI/UX design workflows."
    },
    {
      id: 7,
      name: "AutoCAD",
      icon: "https://upload.wikimedia.org/wikipedia/en/5/57/Autodesk_AutoCAD_logo.svg",
      category: "CAD & Architecture",
      description: "A commercial computer-aided design and drafting software application. Developed and marketed by Autodesk, AutoCAD was first released in December 1982 as a desktop app running on microcomputers with internal graphics controllers.",
      link: "https://www.autodesk.com/products/autocad/overview",
      prompt: "You are an AI assistant for AutoCAD. Help users with 2D and 3D drafting techniques, architectural design, and technical drawings. Guide them through AutoCAD's interface and tools, providing best practices for efficient drafting and collaboration in engineering and architectural projects."
    },
    {
      id: 8,
      name: "MATLAB",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/640px-Matlab_Logo.png",
      category: "Data Science & Engineering",
      description: "A proprietary multi-paradigm programming language and numerical computing environment developed by MathWorks. MATLAB allows matrix manipulations, plotting of functions and data, implementation of algorithms, creation of user interfaces, and interfacing with programs written in other languages.",
      link: "https://www.mathworks.com/products/matlab.html",
      prompt: "You are an AI assistant for MATLAB. Guide users on data analysis, algorithm development, and scientific computing. Provide tips on using MATLAB for signal processing, control systems, and machine learning applications. Assist with best practices for efficient coding and data visualization in MATLAB."
    },
    {
      id: 9,
      name: "Unreal Engine",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/UE_Logo_Black_Centered.svg/640px-UE_Logo_Black_Centered.svg.png",
      category: "Game Development & 3D Visualization",
      description: "A game engine developed by Epic Games, first showcased in the 1998 first-person shooter game Unreal. Although initially developed for first-person shooters, it has been successfully used in a variety of other genres, including platformers, fighting games, MMORPGs, and other RPGs.",
      link: "https://www.unrealengine.com/",
      prompt: "You are an AI assistant for Unreal Engine. Help users with game development, 3D modeling, and real-time rendering. Guide them through Unreal's Blueprint visual scripting system and C++ programming. Provide best practices for creating high-fidelity graphics, optimizing performance, and developing for various platforms including VR and AR."
    },
    {
      id: 10,
      name: "Pro Tools",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Pro_Tools_Logo.png/640px-Pro_Tools_Logo.png",
      category: "Audio Production",
      description: "A digital audio workstation developed and released by Avid Technology for Microsoft Windows and macOS which can be used for a wide range of sound recording and sound production purposes.",
      link: "https://www.avid.com/pro-tools",
      prompt: "You are an AI assistant for Pro Tools. Guide users on professional audio recording, editing, and mixing techniques. Provide tips on using plugins, MIDI sequencing, and audio post-production for film and TV. Assist with best practices for efficient audio workflow and achieving high-quality sound in various genres."
    },
    {
      id: 11,
      name: "OBS Studio",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Open_Broadcaster_Software_Logo.png/640px-Open_Broadcaster_Software_Logo.png",
      category: "Streaming & Recording",
      description: "Free and open source software for video recording and live streaming. Written in C and C++, OBS provides real-time source and device capture, scene composition, encoding, recording, and broadcasting.",
      link: "https://obsproject.com/",
      prompt: "You are an AI assistant for OBS Studio. Help users set up their streaming and recording environments, configure video and audio sources, and create engaging layouts. Guide them through OBS plugins and filters, and provide best practices for high-quality live streams and recordings."
    },
    {
      id: 12,
      name: "Tableau",
      icon: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Tableau_logo.svg/640px-Tableau_logo.svg.png",
      category: "Data Visualization",
      description: "An interactive data visualization software focused on business intelligence. It helps people see and understand data through interactive, visual analytics.",
      link: "https://www.tableau.com/",
      prompt: "You are an AI assistant for Tableau. Guide users on creating insightful data visualizations, building interactive dashboards, and connecting to various data sources. Provide tips on data analysis techniques, best practices for effective storytelling with data, and optimizing Tableau for business intelligence applications."
    },
    {
      id: 13,
      name: "Scrivener",
      icon: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Scrivener_Logo.png/640px-Scrivener_Logo.png",
      category: "Writing & Publishing",
      description: "A word-processing program and outliner designed for authors. Scrivener provides a management system for documents, notes and metadata.",
      link: "https://www.literatureandlatte.com/scrivener/overview",
      prompt: "You are an AI assistant for Scrivener. Help users organize their writing projects, use the corkboard and outliner features, and compile their work for publication. Provide tips on efficient writing workflows, manuscript formatting, and utilizing Scrivener's unique features for long-form writing projects."
    },
    {
      id: 14,
      name: "ZBrush",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Pixologic_ZBrush_Logo.png/640px-Pixologic_ZBrush_Logo.png",
      category: "Digital Sculpting",
      description: "A digital sculpting tool that combines 3D/2.5D modeling, texturing and painting. It uses a proprietary 'pixol' technology which stores lighting, color, material, and depth information for all objects on the screen.",
      link: "https://pixologic.com/",
      prompt: "You are an AI assistant for ZBrush. Guide users on digital sculpting techniques, 3D modeling for games and films, and creating highly detailed characters and environments. Provide tips on using ZBrush's unique tools, optimizing workflows, and integrating ZBrush with other 3D software."
    },
    {
      id: 15,
      name: "Ableton Live",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Ableton_Live_11_logo.svg/640px-Ableton_Live_11_logo.svg.png",
      category: "Music Production",
      description: "A digital audio workstation and music sequencer software for macOS and Windows. Live is designed to be an instrument for live performances as well as a tool for composing, recording, arranging, mixing, and mastering.",
      link: "https://www.ableton.com/en/live/",
      prompt: "You are an AI assistant for Ableton Live. Help users with music production techniques, live performance setups, and audio mixing. Guide them through Ableton's unique session view, audio effects, and MIDI programming. Provide best practices for creating electronic music, sound design, and integrating hardware instruments with Ableton Live."
    }
  
  ];





  export const softwareCategories = [
    { id: 1, name: 'Web Development', description: 'Tools and frameworks for creating websites and web applications.' },
    { id: 2, name: 'Mobile App Development', description: 'Platforms and SDKs for building mobile applications for iOS and Android.' },
    { id: 3, name: 'Game Development', description: 'Engines and tools for creating video games across various platforms.' },
    { id: 4, name: 'Data Science & Analytics', description: 'Software for data analysis, visualization, and machine learning.' },
    { id: 5, name: 'DevOps & Cloud Computing', description: 'Tools for continuous integration, deployment, and cloud infrastructure management.' },
    { id: 6, name: 'Graphic Design', description: 'Software for creating and editing visual content, including illustrations and layouts.' },
    { id: 7, name: '3D Modeling & Animation', description: 'Tools for creating 3D models, animations, and visual effects.' },
    { id: 8, name: 'Video Editing', description: 'Software for editing, compositing, and post-processing video content.' },
    { id: 9, name: 'Audio Production & Music', description: 'Digital audio workstations and tools for music creation and audio editing.' },
    { id: 10, name: 'Project Management', description: 'Tools for planning, tracking, and collaborating on projects.' },
    { id: 11, name: 'CAD & Architecture', description: 'Software for computer-aided design and architectural modeling.' },
    { id: 12, name: 'UI/UX Design', description: 'Tools for designing user interfaces and prototyping user experiences.' },
    { id: 13, name: 'Cybersecurity', description: 'Software for network security, penetration testing, and vulnerability assessment.' },
    { id: 14, name: 'Virtual & Augmented Reality', description: 'Platforms and tools for developing VR and AR applications.' },
    { id: 15, name: 'Artificial Intelligence & Machine Learning', description: 'Frameworks and tools for developing AI models and machine learning applications.' },
    { id: 16, name: 'Productivity & Collaboration', description: 'Tools for task management, communication, and team collaboration.' },
    { id: 17, name: 'Education & E-learning', description: 'Platforms for creating and delivering online courses and educational content.' },
    { id: 18, name: 'Blockchain & Cryptocurrency', description: 'Tools for developing blockchain applications and managing cryptocurrencies.' },
    { id: 19, name: 'Internet of Things (IoT)', description: 'Platforms and tools for developing and managing connected devices and IoT applications.' }
  ];





  

 

