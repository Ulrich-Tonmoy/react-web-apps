import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [exerciseVideoPerPage] = useState(3);
    const indexOfLastExerciseVideo = currentPage * exerciseVideoPerPage;
    const indexOfFirstExerciseVideo = indexOfLastExerciseVideo - exerciseVideoPerPage;
    const currentExercises = exerciseVideos.slice(
        indexOfFirstExerciseVideo,
        indexOfLastExerciseVideo
    );

    const handlePaginate = (event, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1200, behavior: "smooth" });
    };

    if (!exerciseVideos.length) return <Loader />;
    return (
        <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
            <Typography
                sx={{ fontSize: { lg: "44px", xs: "25px" } }}
                fontWeight={700}
                color="#000"
                mb="33px"
            >
                Watch <span style={{ color: "#FF2625", textTransform: "capitalize" }}>{name}</span>
                &nbsp; exercise videos
            </Typography>
            <Stack
                sx={{
                    flexDirection: { lg: "row", md: "row" },
                    gap: { lg: "110px", md: "20px", xs: "0px" },
                }}
                justifyContent="flex-start"
                flexWrap="wrap"
                alignItems="center"
            >
                {currentExercises.map((video, i) => (
                    <a
                        href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
                        key={i}
                        className="exercise-video"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            style={{ borderTopLeftRadius: "20px" }}
                            src={video.video.thumbnails[0].url}
                            alt={video.video.title}
                        />
                        <Box>
                            <Typography
                                sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                                fontWeight={600}
                                color="#000"
                            >
                                {video.video.title}
                            </Typography>
                            <Typography fontSize="14px" color="#000">
                                {video.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>{" "}
            <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
                {exerciseVideos.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exerciseVideos.length / exerciseVideoPerPage)}
                        page={currentPage}
                        onChange={handlePaginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    );
};

export default ExerciseVideos;
