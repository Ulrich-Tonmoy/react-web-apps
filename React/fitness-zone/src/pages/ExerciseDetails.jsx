import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { exerciseApiOptions, fetchData, youtubeApiOptions } from "../utils/fetchData";

const ExerciseDetails = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        const fetchExercisesData = async () => {
            const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
            const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

            const exerciseDetailData = await fetchData(
                `${exerciseDbUrl}/exercises/exercise/${id}`,
                exerciseApiOptions
            );
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(
                `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
                youtubeApiOptions
            );
            setExerciseVideos(exerciseVideosData.contents);

            const targetMuscleExercisesData = await fetchData(
                `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
                exerciseApiOptions
            );
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equipmentExercisesData = await fetchData(
                `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
                exerciseApiOptions
            );
            setEquipmentExercises(equipmentExercisesData);
        };

        fetchExercisesData();
    }, [id]);

    return (
        <Box sx={{ mt: { lg: "36px", xs: "10px" } }}>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises
                targetMuscleExercises={targetMuscleExercises}
                equipmentExercises={equipmentExercises}
            />
        </Box>
    );
};

export default ExerciseDetails;
