import Icon from "../assets/icons/gym.png";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item && "4px solid #ff2625",
                backgroundColor: "#fbf7f7",
                borderBottomLeftRadius: "20px",
                width: "210px",
                height: "220px",
                cursor: "pointer",
                gap: "47px",
            }}
            onClick={(e) => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
            }}
        >
            <img src={Icon} alt="icon" style={{ width: "40px", height: "40px" }} />
            <Typography
                fontSize="24px"
                fontWeight="bold"
                color="#3a1212"
                textTransform="capitalize"
            >
                {item}
            </Typography>
        </Stack>
    );
};

export default BodyPart;
