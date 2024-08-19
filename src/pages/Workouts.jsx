import { useEffect, useState } from 'react';
import MenuWorkout from '../layouts/MenuWorkout';

import { getExercisesByMuscleGroup } from '../services/workoutService';
import { RoutinePlanner } from '../components/RoutinePlanner';

import '../styles/Workouts.css'

const Workouts = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('antebrazos'); // Valor predeterminado
  const [loading, setLoading] = useState(false); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const [favorites, setFavorites] = useState([]); // Estado para manejar los ejercicios favoritos

  useEffect(() => {
    const loadData = async () => {
      setLoading(true); // Inicia el estado de carga
      setError(null); // Reinicia el estado de error

      try {
        const data = await getExercisesByMuscleGroup(selectedMuscleGroup);
        if (data && Array.isArray(data.exercises)) {
          setExercises(data.exercises);
        } else {
          console.error('Expected an array of exercises but got:', data);
          setExercises([]);
        }
      } catch (err) {
        setError('Error fetching exercises');
      } finally {
        setLoading(false); // Termina el estado de carga
      }
    };
    loadData();
  }, [selectedMuscleGroup]);

  const handleFilterChange = (muscleGroup) => {
    setSelectedMuscleGroup(muscleGroup);
  };

  const handleAddToFavorites = (exercise) => {
    setFavorites(prevFavorites => [...prevFavorites, exercise]);
  };

  return (
    <div className="workouts-container">
      <MenuWorkout onFilterChange={handleFilterChange} />
      <div>
        <h2 className="workouts-title">Ejercicios para {selectedMuscleGroup}</h2>
        {loading ? (
          <p className="loading">Cargando...</p> // Indicador de carga
        ) : error ? (
          <p className="error">{error}</p> // Mensaje de error
        ) : (
          <ul className="workouts-list">
            {Array.isArray(exercises) && exercises.length > 0 ? (
              exercises.map((exercise, index) => (
                <li key={index}>
                  <strong>{exercise.nombre}</strong> {exercise.descripcion}
                  <br />
                  <small>Dificultad: {exercise.nivel_dificultad}</small>
                  <br />
                  <small>Equipo necesario: {exercise.equipo_necesario}</small>
                  <button onClick={() => handleAddToFavorites(exercise)}>Add to Fav</button>
                </li>
              ))
            ) : (
              <li>No hay ejercicios disponibles.</li>
            )}
          </ul>
        )}
      </div>
      <div className="routine-planner-container">
        <RoutinePlanner favorites={favorites} setFavorites={setFavorites}/>
      </div>
    </div>
  );
};

export default Workouts;