// two
// . using typescript in react

import React from 'react'; // not present here

interface TaskShowProps {
  title: string;
  completed: boolean;
}

function TaskShow({ title, completed }: TaskShowProps) {
  return ‹div>
    {title} - {completed ? 'Done' : 'Need to complete'}
  </div>;
}

<TaskShow title="Write an interface" completed={true} />

// one

interface Car { // should be capital
  year: number;
  make: string;
  modal: string;
}

function formatCar(car: { year: number, model: string, make: string }) {
  return `Year: ${car.year}, model: ${car.model}, make: ${car.make}`;
}

formatCar({
  year: 2015,
  model: 'Mustang',  
  make: 'Ford',
});