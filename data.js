// routineModel.js
export const routines = [
  {
    id: 1,
    name: 'Full-Body',
    goal: 'Adaptación',
    days: 3,
    muscles: ['Full-Body'],
    program: [
      {
        day: 'Day 1',
        exercises: [
          { name: 'Sentadillas', sets: 5, reps: 8 },
          { name: 'Press Banca', sets: 4, reps: 10 },
        ],
      },
      {
        day: 'Day 2',
        exercises: [
          { name: 'Peso Muerto', sets: 5, reps: 5 },
          { name: 'Dominadas', sets: 3, reps: 10 },
        ],
      },
      {
        day: 'Day 3',
        exercises: [
          { name: 'Press Militar', sets: 4, reps: 8 },
          { name: 'Remo con Barra', sets: 4, reps: 10 },
        ],
      },
    ],
  },
  {
    id: '1b',
    name: 'Torso-Pierna',
    goal: 'Adaptación',
    days: 3,
    muscles: ['Torso-Pierna'],
    program: [
      {
        day: 'Day 1',
        exercises: [
          { name: 'Sentadillas', sets: 5, reps: 8 },
          { name: 'Extensiones de rodilla', sets: 4, reps: 10 },
        ],
      },
      {
        day: 'Day 2',
        exercises: [
          { name: 'Press Banca', sets: 5, reps: 10 },
          { name: 'Dominadas', sets: 3, reps: 10 },
        ],
      },
      {
        day: 'Day 3',
        exercises: [
          { name: 'Peso Muerto', sets: 5, reps: 10 },
          { name: 'Puente de Gluteos', sets: 3, reps: 10 },
        ],
      },
      {
        day: 'Day 4',
        exercises: [
          { name: 'Press Militar', sets: 4, reps: 8 },
          { name: 'Remo con Barra', sets: 4, reps: 10 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Pectorales',
    goal: 'Fuerza',
    days: 1,
    muscles: ['Pectorales'],
    program: [
      {
        day: 'Day 1',
        exercises: [
          { name: 'Press Banca', sets: 4, reps: 6 },
          { name: 'Press Inclinado', sets: 4, reps: 8 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Hombros',
    goal: 'Hipertrofia',
    days: 1,
    muscles: ['Hombros'],
    program: [
      {
        day: 'Day 1',
        exercises: [
          { name: 'Press Militar', sets: 4, reps: 6 },
          { name: 'Vuelos', sets: 4, reps: 8 },
        ],
      },
    ],
  },
  // Otras rutinas
];
