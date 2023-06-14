import { Box, Modal } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "400px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    ":focus-visible": {
        outline: "inherit"
    }
};

const Modals = (props) => {
    const { status, handle, children } = props;
    return (
        <Modal open={status} onClose={handle}>
            <Box component="div" sx={style}>
                {children}
            </Box>
        </Modal>
    );
}

export default Modals;