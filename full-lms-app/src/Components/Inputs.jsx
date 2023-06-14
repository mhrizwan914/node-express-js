import { TextField } from "@mui/material";

const Inputs = (props) => {
    const { type, id, name, label, variant, size, handle, required, disabled, value } = props;
    return (
        <TextField
            type={type}
            id={id}
            name={name}
            label={label}
            value={value}
            variant={variant}
            size={size}
            onChange={handle}
            required={required}
            disabled={disabled}
            fullWidth />
    );
}

Inputs.defaultProps = {
    variant: "outlined",
    size: "small",
    required: true,
    disabled: false
}

export default Inputs;