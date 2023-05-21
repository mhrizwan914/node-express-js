import { Button } from "@mui/material";

const newButton = (props) => {
    const {text, variant, size, color, handle} = props;
    return (
        <Button variant={variant} color={color} size={size} onClick={handle}>{text}</Button>
    );
}

export default newButton;