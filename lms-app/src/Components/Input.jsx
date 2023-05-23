import { TextField } from "@mui/material";

const Input = (props) => {
    const { type, id, name, label, variant, size } = props;
    return (
        <TextField type={type} id={id} name={name} label={label} variant={variant} size={size} fullWidth />
    );
}

export default Input;