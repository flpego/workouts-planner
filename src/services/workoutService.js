
export const getExercisesByMuscleGroup = async (muscleGroup) => {
    let path = `https://raw.githubusercontent.com/flpego/rutinas-json/master/${muscleGroup}.json`;
    try {
        const res = await fetch(path);
        const data = await res.json();
        return data
    } catch (error) {
        console.log('error : ' + error)
    }

}

