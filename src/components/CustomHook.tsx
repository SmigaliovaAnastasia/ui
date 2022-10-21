import { useState, useEffect } from 'react';
import { Game } from './Entity/Game';

export const useGameAvailabilityStatus = (gameCopiesLeft: number): [boolean, () => void] => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [copiesLeft, setCopiesLeft] = useState(gameCopiesLeft);
  
  const handleCopiesChange = (copies: number) => copies >= 0 ? setCopiesLeft(copies) : setCopiesLeft(0);
  const substractCopy = () => handleCopiesChange(copiesLeft - 1);

  useEffect(() => {
    if(copiesLeft < 1)
    {
      setIsAvailable(false);
    }
  }, [copiesLeft]);  

  return [
    isAvailable, 
    substractCopy,
  ];
}