import { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { Howl } from 'howler';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [responses, setResponses] = useState([]);

  const startQuiz = () => setQuizStarted(true);

  const completeQuiz = (answers) => {
    setResponses(answers);
    setQuizComplete(true);
    
    const sound = new Howl({ src: ['completion-sound.mp3'] });
    sound.play();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="w-full">
      {!quizStarted && !quizComplete && <Home startQuiz={startQuiz} />}
      {quizStarted && !quizComplete && <Quiz onComplete={completeQuiz} />}
      {quizComplete && <Results responses={responses} />}
    </div>
  </div>
  );
};

export default App;
