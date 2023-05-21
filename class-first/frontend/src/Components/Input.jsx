import { TextField } from "@mui/material";

const Input = (props) => {
    const {type, name, label, variant, size, handle} = props
    return (
        <TextField type={type} id={name} name={name} label={label} variant={variant} size={size} onChange={handle} fullWidth />
    );
}

export default Input;