import { Button } from "@mui/material";

const Buttons = (props) => {
    const { text, variant, color, size, handle, component, width } = props;
    const style = {
        width: width,
        bgcolor: "var(--p-color)",
        textTransform: "capitalize",
        fontSize: "16px",
        fontWeight: "600",
        boxShadow: "inherit",
        borderRadius: "50px",
        ":hover": {
            bgcolor: "var(--b-color)",
            boxShadow: "inherit"
        }
    }
    return (
        <Button variant={variant} color={color} size={size} onClick={handle} component={component} fullWidth sx={style}>
            {text}
        </Button>
    );
}

export default Buttons;