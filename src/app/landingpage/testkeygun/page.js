"use client"
//src/app/landingpage/testkeygun/page.js
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useAIResponse } from '../../../hooks/useAIResponse';
import styles from './TestKeyGun.module.css';
import Header from '../../../components/landingcomponents/Header';
import Footer from '../../../components/landingcomponents/Footer';
import AIResponse from '../../../components/keyguncomponent/AIresponse';  // Adjust the import path as needed



// Simulated API function for AI response
const fetchAIResponse = async (keyGunId, message) => {
  const response = await generateBotResponse(message, keyGunId);
  return response;
};

const TestKeyGun = () => {
  const router = useRouter();
  const selectedKeyGuns = useSelector(state => state.keyGuns.selectedKeyGuns);
  const [selectedKeyGun, setSelectedKeyGun] = useState(null);
  const [inputMessage, setInputMessage] = useState('');
  const [isScrollable, setIsScrollable] = useState(false);
  const scrollContainerRef = useRef(null);
  const aiResponseMutation = useAIResponse();

  useEffect(() => {
    if (scrollContainerRef.current) {
      setIsScrollable(scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth);
    }
  }, [selectedKeyGuns]);

 
 /*// React Query mutation for AI response
const aiResponseMutation = useMutation({
  mutationFn: ({ keyGunId, message }) => fetchAIResponse(keyGunId, message),
  onSuccess: (data) => {
    queryClient.setQueryData(['aiResponse', selectedKeyGun.id], data);
  },
  onError: (error) => {
    console.error('Error fetching AI response:', error);
    // You could also set some state here to display the error to the user
  }
});*/
  

 

  useEffect(() => {
    if (scrollContainerRef.current) {
      setIsScrollable(scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth);
    }
  }, [selectedKeyGuns]);

  const handleGoBack = () => {
    router.push('/landingpage');
  };

  const handleSelectKeyGun = (keyGun) => {
    setSelectedKeyGun(keyGun);
  };

  const handleAddNewKeyGun = () => {
    // Implement the logic to add a new KeyGun
    console.log('Add new KeyGun');
  };

  const handleAskAI = () => {
    if (selectedKeyGun && inputMessage) {
      aiResponseMutation.mutate({ keyGunId: selectedKeyGun.id, message: inputMessage });
    } else {
      alert('Please select a KeyGun and enter a message.');
    }
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };








  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Select Your Learning Assistant</h1>
        <div className={styles.keyGunScrollContainer} ref={scrollContainerRef}>
          <div className={`${styles.keyGunGrid} ${isScrollable ? styles.scrollable : ''}`}>
            {selectedKeyGuns.map((keyGun) => (
              <div
                key={keyGun.id}
                className={`${styles.keyGunCard} ${selectedKeyGun?.id === keyGun.id ? styles.selectedCard : ''}`}
                onClick={() => handleSelectKeyGun(keyGun)}
              >
                <img src={keyGun.icon} alt={keyGun.name} className={styles.keyGunIcon} />
                <h2 className={styles.keyGunName}>{truncateText(keyGun.name, 15)}</h2>
              </div>
            ))}
            <div className={`${styles.keyGunCard} ${styles.addNewCard}`} onClick={handleAddNewKeyGun}>
              <div className={styles.addIcon}>+</div>
              <h2 className={styles.keyGunName}>Add New</h2>
            </div>
          </div>
        </div>
        <div className={styles.chatInterface}>
        <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.textInput}
              placeholder="Ask your learning assistant..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              maxLength={100}
            />
           <button 
  className={`${styles.askButton} ${aiResponseMutation.isPending ? styles.loading : ''}`}
  onClick={handleAskAI}
  disabled={aiResponseMutation.isPending}
>
  {aiResponseMutation.isPending ? 'Asking' : 'Ask'}
</button>
            </div>
  <AIResponse 
    response={aiResponseMutation.data?.content}
    isLoading={aiResponseMutation.isPending}
  />
</div>
      </main>
      <Footer />
    </div>
  );
};

export default TestKeyGun;