import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { exerciseApiOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(9);

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const handlePaginate = (event, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: "smooth" });
    };

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exerciseData = [];
            if (bodyPart === "all") {
                exerciseData = await fetchData(
                    "https://exercisedb.p.rapidapi.com/exercises",
                    exerciseApiOptions
                );
            } else {
                exerciseData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exerciseApiOptions
                );
            }

            setExercises(exerciseData);
        };

        fetchExercisesData();
    }, [bodyPart]);

    return (
        <Box id="exercises" xs={{ mt: { lg: "110px" } }} mt="50px" p="20px">
            <Typography variant="h3" mb="46px">
                Showing Results
            </Typography>
            <Stack
                direction="row"
                sx={{ gap: { lg: "110px", xs: "50px" } }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard Key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={handlePaginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    );
};

export default Exercises;
