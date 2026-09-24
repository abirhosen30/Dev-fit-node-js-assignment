import React from 'react';

const getExeises = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog')

  const data = await res.json();
  return data;
};

const exercises = async () => {
  const exercises = await getExeises();
  console.log(exercises);
}

const ExercisesPage = () => {

  return (
    <div>
      
    </div>
  );
};

export default ExercisesPage;