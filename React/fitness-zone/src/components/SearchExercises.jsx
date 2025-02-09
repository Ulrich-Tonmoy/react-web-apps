import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseApiOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
                exerciseApiOptions
            );

            setBodyParts(["all", ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises",
                exerciseApiOptions
            );

            const searchExercises = exerciseData.filter(
                (exercise) =>
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch("");
            setExercises(searchExercises);
        }
    };

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: "44px", xs: "30px" } }}
                mb="50px"
                textAlign="center"
            >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: { fontWeight: "700", border: "none", borderRadius: "4px" },
                        width: { lg: "1170px", sm: "450px", xs: "250px" },
                        backgroundColor: "#fff",
                        borderRadius: "40px",
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: "#ff2625",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "173px", xs: "80px" },
                        height: "56px",
                        position: "absolute",
                        right: "0px",
                        fontSize: { lg: "20px", xs: "14px" },
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
                <HorizontalScrollbar
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                    data={bodyParts}
                    bodyParts
                />
            </Box>
        </Stack>
    );
};

export default SearchExercises;
