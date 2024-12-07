import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ExerciseCard = (exercise) => {
    return (
        <Link className="exercise-card" to={`/exercise/${exercise.exercise.id}`}>
            <img src={exercise.exercise.gifUrl} alt={exercise.exercise.name} loading="lazy" />
            <Stack direction="row">
                <Button
                    sx={{
                        ml: "21px",
                        color: "#000",
                        background: "#ffa9a9",
                        fontSize: "14px",
                        borderRadius: "20px",
                        textTransform: "capitalize",
                    }}
                >
                    {exercise.exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: "21px",
                        color: "#000",
                        background: "#fcc757",
                        fontSize: "14px",
                        borderRadius: "20px",
                        textTransform: "capitalize",
                    }}
                >
                    {exercise.exercise.target}
                </Button>
            </Stack>
            <Typography
                ml="21px"
                color="#000"
                fontWeight="bold"
                sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                mt="11px"
                pb="10px"
                textTransform="capitalize"
            >
                {exercise.exercise.name}
            </Typography>
        </Link>
    );
};

export default ExerciseCard;
