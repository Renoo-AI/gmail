import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import EmailView from './components/EmailView';
import ComposeModal from './components/ComposeModal';
import { emails as initialEmails } from './mockData';

function App() {
  const [activeFolder, setActiveFolder] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [emails, setEmails] = useState(initialEmails);

  const filteredEmails = emails.filter(email => {
    if (activeFolder === 'starred') {
      return email.isStarred;
    }
    return email.folder === activeFolder;
  });

  const handleEmailSelect = (email) => {
    setSelectedEmail(email);
    // Mark as read
    setEmails(prevEmails =>
      prevEmails.map(e => e.id === email.id ? { ...e, isRead: true } : e)
    );
  };

  const handleBackToList = () => {
    setSelectedEmail(null);
  };

  const handleFolderChange = (folderId) => {
    setActiveFolder(folderId);
    setSelectedEmail(null);
  };

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeFolder={activeFolder}
          setActiveFolder={handleFolderChange}
          onCompose={() => setIsComposeOpen(true)}
        />

        <main className="flex-1 flex flex-col overflow-hidden">
          {selectedEmail ? (
            <EmailView
              email={selectedEmail}
              onBack={handleBackToList}
            />
          ) : (
            <EmailList
              emails={filteredEmails}
              onEmailSelect={handleEmailSelect}
            />
          )}
        </main>
      </div>

      {isComposeOpen && (
        <ComposeModal onClose={() => setIsComposeOpen(false)} />
      )}
    </div>
  );
}

export default App;
