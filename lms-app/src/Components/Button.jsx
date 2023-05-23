import { Button } from "@mui/material";

const newButton = (props) => {
    const { text, variant, color, size, handle, component } = props;
    return (
        <Button variant={variant} color={color} size={size} onClick={handle} component={component} fullWidth>{text}</Button>
    );
}

export default newButton;