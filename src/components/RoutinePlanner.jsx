import  { useState } from 'react';
import '../styles/RoutinePlanner.css'
import Modal from 'react-modal';
const weeklyDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

Modal.setAppElement('#root');

export const RoutinePlanner = ({ favorites, setFavorites }) => {
    const [schedule, setSchedule] = useState(
      weeklyDays.reduce((acc, day) => ({ ...acc, [day]: [] }), {})
    );
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleDrop = (day, exercise) => {
      setSchedule(prevSchedule => ({
        ...prevSchedule,
        [day]: [...prevSchedule[day], { ...exercise, series: 3, reps: 10 }]
      }));
    };
  
    const handleSeriesChange = (day, index, newSeries) => {
      setSchedule(prevSchedule => {
        const updatedDayExercises = prevSchedule[day].map((ex, i) =>
          i === index ? { ...ex, series: newSeries } : ex
        );
        return { ...prevSchedule, [day]: updatedDayExercises };
      });
    };
  
    const handleRepsChange = (day, index, newReps) => {
      setSchedule(prevSchedule => {
        const updatedDayExercises = prevSchedule[day].map((ex, i) =>
          i === index ? { ...ex, reps: newReps } : ex
        );
        return { ...prevSchedule, [day]: updatedDayExercises };
      });
    };
  
    const handleRemoveExercise = (day, index) => {
      setSchedule(prevSchedule => {
        const updatedDayExercises = prevSchedule[day].filter((_, i) => i !== index);
        return { ...prevSchedule, [day]: updatedDayExercises };
      });
    };
  
    const handleRemoveFavorite = (index) => {
      setFavorites(prevFavorites => prevFavorites.filter((_, i) => i !== index));
    };
  
    const handleExerciseClick = (exercise) => {
      setSelectedExercise(exercise);
      setIsModalOpen(true);
    };
  
    const handleDaySelect = (day) => {
      if (selectedExercise) {
        handleDrop(day, selectedExercise);
        setIsModalOpen(false);
        setSelectedExercise(null);
      }
    };
  
    return (
      <div>
        <h2>Planificador Semanal</h2>
        <div className="routine-planner-container">
          {weeklyDays.map(day => (
            <div key={day} className="week-day-container">
              <h3>{day}</h3>
              <div
                className="schedule-day"
                onDrop={(e) => {
                  e.preventDefault();
                  const exercise = JSON.parse(e.dataTransfer.getData('exercise'));
                  handleDrop(day, exercise);
                }}
                onDragOver={(e) => e.preventDefault()}
              >
                {schedule[day].map((exercise, index) => (
                  <div key={index} className="exercise-item">
                    <strong>{exercise.nombre}</strong>
                    <button onClick={() => handleRemoveExercise(day, index)}>x</button>
                    <br />
                    <label className="exercise-label">
                      Series:
                      <input
                        type="number"
                        value={exercise.series}
                        onChange={(e) => handleSeriesChange(day, index, parseInt(e.target.value, 10))}
                      />
                    </label>
                    <br />
                    <label className="exercise-label">
                      Repeticiones:
                      <input
                        type="number"
                        value={exercise.reps}
                        onChange={(e) => handleRepsChange(day, index, parseInt(e.target.value, 10))}
                      />
                    </label>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3>Ejercicios Favoritos</h3>
          <ul className="favorites-list">
            {favorites.map((exercise, index) => (
              <li key={index}
                className="favorites-item"
                draggable
                onDragStart={(e) => e.dataTransfer.setData('exercise', JSON.stringify(exercise))}
                onClick={() => handleExerciseClick(exercise)}
              >
                <strong>{exercise.nombre}</strong>
                <button onClick={() => handleRemoveFavorite(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Seleccionar Día"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2>Selecciona un día para agregar el ejercicio:</h2>
          {weeklyDays.map(day => (
            <button key={day} onClick={() => handleDaySelect(day)}>
              {day}
            </button>
          ))}
          <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
        </Modal>
      </div>
    );
  };