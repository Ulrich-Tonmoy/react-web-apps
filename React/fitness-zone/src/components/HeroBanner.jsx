import HeroBannerImage from "../assets/images/banner.png";
import { Box, Stack, Typography } from "@mui/material";

const HeroBanner = () => {
    return (
        <Box
            sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
            position="relative"
            p="20px"
        >
            <Typography color="#ff2625" fontWeight={600} fontSize="26px">
                Fitness Zone
            </Typography>
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: "44px", xs: "40px" } }}
                mb="13px"
                mt="20px"
            >
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize="25px" lineHeight="35px" mb={2}>
                Checkout the most effective exercises
            </Typography>
            <Stack>
                <a
                    href="#exercises"
                    style={{
                        marginTop: "45px",
                        textDecoration: "none",
                        width: "200px",
                        textAlign: "center",
                        background: "#FF2625",
                        padding: "14px",
                        fontSize: "22px",
                        textTransform: "none",
                        color: "white",
                        borderRadius: "4px",
                    }}
                >
                    Explore Exercises
                </a>
            </Stack>
            <Typography
                fontWeight={600}
                color="#ff2625"
                sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
                fontSize="200px"
            >
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
        </Box>
    );
};

export default HeroBanner;
