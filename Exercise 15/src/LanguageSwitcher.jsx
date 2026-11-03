import React, { useState } from 'react';

function LanguageSwitcher() {

  const [language, setLanguage] = useState('en');


  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));

  };


  const greetings = {
    en: 'Hello',
    es: 'Hola',
 
  };

  return (
    <div>
  
      <h1>{greetings[language]}</h1>

      <button
        onClick={toggleLanguage}
       
      >
        Switch to {language === 'en' ? 'Español' : 'English'}
      </button>

    </div>
  );
}
export default LanguageSwitcher;