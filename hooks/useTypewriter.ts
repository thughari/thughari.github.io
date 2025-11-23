
import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50, delay: number = 1000) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    const handleTyping = () => {
      const fullText = text;
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        typingTimeout = setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    typingTimeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, text, speed, delay, loopNum]);

  return displayText;
};
