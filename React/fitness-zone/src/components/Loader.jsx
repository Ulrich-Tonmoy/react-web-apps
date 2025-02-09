import { Stack } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
        <ThreeDots color="grey" />
    </Stack>
);

export default Loader;
