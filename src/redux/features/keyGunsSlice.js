// src/redux/features/keyGunsSlice.js
// src/redux/features/keyGunsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  availableKeyGuns: [
    { id: 1, name: 'Visual Studio Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'Web Development' },
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

const keyGunsSlice = createSlice({
  name: 'keyGuns',
  initialState,
  reducers: {
    addKeyGun: (state, action) => {
      if (state.selectedKeyGuns.length < 4 && !state.selectedKeyGuns.find(kg => kg.id === action.payload.id)) {
        state.selectedKeyGuns.push(action.payload);
      }
    },
    removeKeyGun: (state, action) => {
      state.selectedKeyGuns = state.selectedKeyGuns.filter(kg => kg.id !== action.payload.id);
    },
    clearSelectedKeyGuns: (state) => {
      state.selectedKeyGuns = [];
    },
  },
});

export const { addKeyGun, removeKeyGun, clearSelectedKeyGuns } = keyGunsSlice.actions;
export default keyGunsSlice.reducer;





/*export const KEYGUNS = [
  // Productivity Tools
  { id: 1, name: 'Excel', icon: '📊', category: 'Productivity' },
  { id: 2, name: 'Notion', icon: '📝', category: 'Productivity' },
  { id: 3, name: 'Trello', icon: '📋', category: 'Productivity' },
  { id: 4, name: 'Asana', icon: '✅', category: 'Productivity' },
  { id: 5, name: 'Evernote', icon: '🐘', category: 'Productivity' },

  // Communication Tools
  { id: 6, name: 'Slack', icon: '💬', category: 'Communication' },
  { id: 7, name: 'Microsoft Teams', icon: '👥', category: 'Communication' },
  { id: 8, name: 'Zoom', icon: '🎥', category: 'Communication' },
  { id: 9, name: 'Discord', icon: '🎮', category: 'Communication' },

  // Design Tools
  { id: 10, name: 'Figma', icon: '🎨', category: 'Design' },
  { id: 11, name: 'Adobe Photoshop', icon: '🖼️', category: 'Design' },
  { id: 12, name: 'Canva', icon: '🎭', category: 'Design' },
  { id: 13, name: 'Blender', icon: '🗿', category: 'Design' },

  // Development Tools
  { id: 14, name: 'Visual Studio Code', icon: '👨‍💻', category: 'Development' },
  { id: 15, name: 'GitHub', icon: '🐙', category: 'Development' },
  { id: 16, name: 'Firebase', icon: '🔥', category: 'Development' },
  { id: 17, name: 'Docker', icon: '🐳', category: 'Development' },

  // Marketing Tools
  { id: 18, name: 'Mailchimp', icon: '📧', category: 'Marketing' },
  { id: 19, name: 'Google Analytics', icon: '📈', category: 'Marketing' },
  { id: 20, name: 'Hootsuite', icon: '🦉', category: 'Marketing' },

  // Finance Tools
  { id: 21, name: 'QuickBooks', icon: '💼', category: 'Finance' },
  { id: 22, name: 'Stripe', icon: '💳', category: 'Finance' },
  { id: 23, name: 'Xero', icon: '🧮', category: 'Finance' },

  // Project Management
  { id: 24, name: 'Jira', icon: '🎯', category: 'Project Management' },
  { id: 25, name: 'Monday.com', icon: '📅', category: 'Project Management' },

  // Customer Service
  { id: 26, name: 'Zendesk', icon: '🎧', category: 'Customer Service' },
  { id: 27, name: 'Intercom', icon: '💁', category: 'Customer Service' },

  // Learning Platforms
  { id: 28, name: 'Coursera', icon: '🎓', category: 'Learning' },
  { id: 29, name: 'Udemy', icon: '📚', category: 'Learning' },
  { id: 30, name: 'Duolingo', icon: '🦉', category: 'Learning' },

  // AI and Machine Learning
  { id: 31, name: 'TensorFlow', icon: '🧠', category: 'AI' },
  { id: 32, name: 'ChatGPT', icon: '🤖', category: 'AI' },
  { id: 33, name: 'Jupyter Notebook', icon: '📓', category: 'AI' },

  // Data Analysis
  { id: 34, name: 'Tableau', icon: '📊', category: 'Data Analysis' },
  { id: 35, name: 'Power BI', icon: '⚡', category: 'Data Analysis' },

  // Cloud Services
  { id: 36, name: 'AWS', icon: '☁️', category: 'Cloud' },
  { id: 37, name: 'Google Cloud', icon: '☁️', category: 'Cloud' },
  { id: 38, name: 'Microsoft Azure', icon: '☁️', category: 'Cloud' },

  // Cybersecurity
  { id: 39, name: 'Wireshark', icon: '🦈', category: 'Cybersecurity' },
  { id: 40, name: 'Metasploit', icon: '🛡️', category: 'Cybersecurity' },
]; */