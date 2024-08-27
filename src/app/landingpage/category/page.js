// app/page.js category selection.


"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Home.module.css';

const KeyGunSelection = () => {
  const [selectedKeyGuns, setSelectedKeyGuns] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const availableKeyGuns = [
    {
      id: 1,
      name: 'Web Development',
      icon: '/icons/web-dev.svg',
      tools: ['Visual Studio Code', 'GitHub', 'GitLab', 'Postman', 'Node.js', 'React', 'Angular', 'Vue.js']
    },
    {
      id: 2,
      name: 'DevOps & Cloud',
      icon: '/icons/devops.svg',
      tools: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Google Cloud', 'Azure', 'Terraform', 'Ansible']
    },
    {
      id: 3,
      name: 'Project Management',
      icon: '/icons/project-management.svg',
      tools: ['Jira', 'Trello', 'Asana', 'Slack', 'Microsoft Teams', 'Notion', 'Confluence']
    },
    {
      id: 4,
      name: 'Design & UI/UX',
      icon: '/icons/design.svg',
      tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin']
    },
    {
      id: 5,
      name: '3D Modeling & Animation',
      icon: '/icons/3d-modeling.svg',
      tools: ['Blender', 'Maya', 'ZBrush', 'Cinema 4D', 'Houdini']
    },
    {
      id: 6,
      name: 'Game Development',
      icon: '/icons/game-dev.svg',
      tools: ['Unity', 'Unreal Engine', 'Godot', 'GameMaker Studio']
    },
    {
      id: 7,
      name: 'Music Production',
      icon: '/icons/music.svg',
      tools: ['FL Studio', 'Ableton Live', 'Logic Pro X', 'Pro Tools', 'Cubase', 'Reaper', 'Audacity']
    },
    {
      id: 8,
      name: 'Video Editing',
      icon: '/icons/video-editing.svg',
      tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro', 'After Effects', 'Nuke']
    },
    {
      id: 9,
      name: 'Graphic Design',
      icon: '/icons/graphic-design.svg',
      tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Affinity Designer', 'CorelDRAW', 'Procreate']
    },
    {
      id: 10,
      name: 'CAD & Architecture',
      icon: '/icons/cad.svg',
      tools: ['AutoCAD', 'SketchUp', 'Revit', 'Fusion 360', 'SolidWorks']
    },
    {
      id: 11,
      name: 'Data Science & Analytics',
      icon: '/icons/data-science.svg',
      tools: ['Python', 'R', 'Tableau', 'Power BI', 'MATLAB']
    },
    {
      id: 12,
      name: 'Writing & Publishing',
      icon: '/icons/writing.svg',
      tools: ['Scrivener', 'Grammarly', 'LaTeX', 'Adobe InDesign', 'Calibre']
    },
    {
      id: 13,
      name: 'Photography',
      icon: '/icons/photography.svg',
      tools: ['Adobe Lightroom', 'Capture One', 'DxO PhotoLab', 'Luminar AI']
    },
    {
      id: 14,
      name: 'VR & AR',
      icon: '/icons/vr-ar.svg',
      tools: ['Unity (AR/VR)', 'Unreal Engine (AR/VR)', 'A-Frame', 'ARKit', 'ARCore']
    },
    {
      id: 15,
      name: 'Cybersecurity',
      icon: '/icons/cybersecurity.svg',
      tools: ['Wireshark', 'Metasploit', 'Nmap', 'Burp Suite', 'Kali Linux']
    },
    {
      id: 16,
      name: 'Robotics & IoT',
      icon: '/icons/robotics.svg',
      tools: ['Arduino IDE', 'ROS', 'MATLAB & Simulink', 'LabVIEW', 'Raspberry Pi OS']
    },
    {
      id: 17,
      name: 'E-learning',
      icon: '/icons/elearning.svg',
      tools: ['Articulate Storyline', 'Adobe Captivate', 'Camtasia', 'Moodle', 'Teachable']
    },
    {
      id: 18,
      name: 'Blockchain',
      icon: '/icons/blockchain.svg',
      tools: ['Solidity', 'Truffle Suite', 'Remix IDE', 'Ganache', 'MetaMask']
    },
    {
      id: 19,
      name: 'Scientific Research',
      icon: '/icons/research.svg',
      tools: ['LabVIEW', 'GraphPad Prism', 'ImageJ', 'ELN solutions', 'LIMS']
    },
  ];;

  const toggleKeyGun = (keyGun, tool) => {
    setSelectedKeyGuns((prev) => {
      const existingIndex = prev.findIndex(kg => kg.id === keyGun.id && kg.selectedTool === tool);
      if (existingIndex !== -1) {
        return prev.filter((_, index) => index !== existingIndex);
      } else if (prev.length < 4) {
        return [...prev, { ...keyGun, selectedTool: tool }];
      }
      return prev;
    });
  };

  const toggleExpand = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.keygunSelection}>
      <h1 className={styles.title}>Select Your Learning Assistants</h1>
      <p className={styles.subtitle}>Choose up to 4 KeyGuns to customize your learning experience.</p>
      
      <div className={styles.categoryScrollContainer}>
        {showLeftArrow && (
          <button className={`${styles.scrollButton} ${styles.left}`} onClick={() => scroll('left')}>
            <ChevronLeft />
          </button>
        )}
        {showRightArrow && (
          <button className={`${styles.scrollButton} ${styles.right}`} onClick={() => scroll('right')}>
            <ChevronRight />
          </button>
        )}
        <div ref={scrollContainerRef} className={styles.categoryList}>
          {availableKeyGuns.map((keyGun) => (
            <div
              key={keyGun.id}
              className={`${styles.categoryCard} ${selectedKeyGuns.some(kg => kg.id === keyGun.id) ? styles.selected : ''}`}
            >
              <div className={styles.categoryHeader} onClick={() => toggleExpand(keyGun.id)}>
                <img src={keyGun.icon} alt={keyGun.name} className={styles.categoryIcon} />
                <span className={styles.categoryName}>{keyGun.name}</span>
                <button className={styles.expandButton}>
                  {expandedCategory === keyGun.id ? <ChevronUp /> : <ChevronDown />}
                </button>
              </div>
              {expandedCategory === keyGun.id && (
                <div className={styles.toolList}>
                  {keyGun.tools.map((tool, index) => (
                    <label key={index} className={styles.toolItem}>
                      <input
                        type="checkbox"
                        checked={selectedKeyGuns.some(kg => kg.id === keyGun.id && kg.selectedTool === tool)}
                        onChange={() => toggleKeyGun(keyGun, tool)}
                      />
                      <span className={styles.toolName}>{tool}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.selectedKeyguns}>
        <h2 className={styles.sectionTitle}>Selected KeyGuns</h2>
        <div className={styles.selectedGrid}>
          {[...Array(4)].map((_, index) => (
            <div key={index} className={styles.selectedSlot}>
              {selectedKeyGuns[index] ? (
                <div className={styles.selectedItem}>
                  <img src={selectedKeyGuns[index].icon} alt={selectedKeyGuns[index].name} className={styles.selectedIcon} />
                  <span className={styles.selectedName}>{selectedKeyGuns[index].name}</span>
                  <span className={styles.selectedTool}>{selectedKeyGuns[index].selectedTool}</span>
                </div>
              ) : (
                <span className={styles.emptySlot}>Empty Slot</span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.actionButtons}>
        <button className={styles.primaryButton}>Test KeyGuns</button>
        <button className={styles.secondaryButton}>Create KeyGun</button>
      </div>
    </div>
  );
};

export default KeyGunSelection;
