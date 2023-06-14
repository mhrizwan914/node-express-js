import { LoadingButton } from "@mui/lab";

const LoadingButtons = (props) => {
    const { text, loading, indicator, variant, width, handle } = props;
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
        <LoadingButton loading={loading} loadingIndicator={indicator} variant={variant} sx={style} onClick={handle}  fullWidth>
            {text}
        </LoadingButton>
    );
}

export default LoadingButtons;