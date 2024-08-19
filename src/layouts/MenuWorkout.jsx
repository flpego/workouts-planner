import '../styles/MenuWorkout.css'

const MenuWorkout = ({ onFilterChange }) => {
    return (
      <div className="menu-workout-container">
        <form>
          <button className="menu-workout-button" type="button" onClick={() => onFilterChange("abdominales")}>
            Ejercicios de Abdominales
          </button>
          <button className="menu-workout-button" type="button" onClick={() => onFilterChange("antebrazos")}>
            Ejercicios de Antebrazos
          </button>
          <button className="menu-workout-button" type="button" onClick={() => onFilterChange("biceps")}>
            Ejercicios de Biceps
          </button>
          <button className="menu-workout-button" type="button" onClick={() => onFilterChange("cuadriceps")}>
            Ejercicios de Cuadriceps
          </button>
          <button className="menu-workout-button" type="button" onClick={() => onFilterChange("deltoides")}>
            Ejercicios de Deltoides
          </button>
          <button className="menu-workout-button" type="button" onClick={() => onFilterChange("espalda")}>
            Ejercicios de Espalda
          </button>
          <button className="menu-workout-button" type="button" onClick={() => onFilterChange("gemelos")}>
            Ejercicios de Gemelos
          </button>
          <button className="menu-workout-button" type="button" onClick={() => onFilterChange("isquiosurales")}>
            Ejercicios de Isquiosurales
          </button>
          <button className="menu-workout-button" type="button" onClick={() => onFilterChange("pectorales")}>
            Ejercicios de Pectorales
          </button>
          <button className="menu-workout-button" type="button" onClick={() => onFilterChange("triceps")}>
            Ejercicios de Triceps
          </button>
        </form>
      </div>
    );
  };
  
  export default MenuWorkout;