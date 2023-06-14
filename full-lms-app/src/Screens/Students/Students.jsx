import { Box, Container, Grid, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography, tableCellClasses } from "@mui/material";
import Buttons from "../../Components/Buttons";
import { useEffect, useState } from "react";
import Modals from "../../Components/Modals";
import Inputs from "../../Components/Inputs";
import { styled } from '@mui/material/styles';
import { Delete, Edit } from "@mui/icons-material";
import { Create, Get, GetById, Update, Remove } from "../../Configs/Axios";
import TableRowsLoader from "../../Components/TableRowLoader";
import LoadingButtons from "../../Components/LoadingButtons";

const Students = () => {
    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [data, setData] = useState([]);
    const [tableLoader, setTableLoader] = useState(true);
    const [newStudent, setNewStudent] = useState([]);
    const [loadingButton, setLoadingButton] = useState(false);
    const [editStudent, setEditStudent] = useState([]);
    let handleModalClose = () => {
        setModalAdd(false);
        setModalEdit(false);
    }
    let handleModalAddOpen = () => {
        setModalAdd(true);
    }
    let handleModalEditOpen = (id) => {
        GetById("api/students/", `${id}`)
            .then((response) => {
                setModalEdit(true);
                setEditStudent(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    let StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    let StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    let students = () => {
        Get("api/students/")
            .then((response) => {
                setTableLoader(false);
                setData(response.data.data);
            })
            .catch((error) => {
                setTableLoader(false);
                console.log(error);
            });
    };
    let handleNewStudent = () => {
        setLoadingButton(true);
        Create("api/students/", newStudent).then((response) => {
            setLoadingButton(false);
            setModalAdd(false);
            students();
            console.log(response.data);
        }).catch((error) => {
            setLoadingButton(false);
            console.log(error.response.data);
        })
    }
    let handleExistStudent = (id) => {
        setLoadingButton(true);
        Update("api/students/", `${id}`, editStudent).then((response) => {
            setLoadingButton(false);
            setModalEdit(false);
            students();
        }).catch((error) => {
            setLoadingButton(false);
        })
    }
    let handleDeleteStudent = (id) => {
        Remove("api/students/", `${id}`).then((response) => {
            students();
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        students();
    }, []);
    return (
        <Box component="section">
            <Box component="div">
                <Container fixed>
                    <Grid container>
                        <Grid item xs={12}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" >
                                <Typography variant="h4" component="h1" fontWeight={700}>
                                    Students
                                </Typography>
                                <Buttons text="Add" variant="contained" width="100px" handle={handleModalAddOpen} />
                            </Stack>
                            <Modals status={modalAdd} handle={handleModalClose}>
                                <Typography variant="h5" component="h2" fontWeight={700} textAlign="center" gutterBottom>
                                    Add a New Student
                                </Typography>
                                <Box component="form">
                                    <Stack spacing={3}>
                                        <Inputs type="text" label="First Name" handle={(e) => setNewStudent({ ...newStudent, fname: e.target.value })} />
                                        <Inputs type="text" label="Last Name" required={false} handle={(e) => setNewStudent({ ...newStudent, lname: e.target.value })} />
                                        <Inputs type="email" label="Your Email" handle={(e) => setNewStudent({ ...newStudent, email: e.target.value })} />
                                        <Inputs type="phone" label="Phone Number" handle={(e) => setNewStudent({ ...newStudent, phone: e.target.value })} />
                                        <Inputs type="password" label="Create Password" handle={(e) => setNewStudent({ ...newStudent, password: e.target.value })} />
                                        <LoadingButtons text="Send" variant="contained" handle={handleNewStudent} loading={loadingButton} indicator="Loading..." />
                                    </Stack>
                                </Box>
                            </Modals>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="center">ID</StyledTableCell>
                                            <StyledTableCell align="center">Full Name</StyledTableCell>
                                            <StyledTableCell align="center">Email</StyledTableCell>
                                            <StyledTableCell align="center">Phone</StyledTableCell>
                                            <StyledTableCell align="center">Actions</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            tableLoader ? <TableRowsLoader /> : Array.isArray(data) && data.length > 0 ? data.map((element, index) => {
                                                return <StyledTableRow key={index}>
                                                    <StyledTableCell align="center">{index + 1}</StyledTableCell>
                                                    <StyledTableCell align="center">{element.fname} {element.lname}</StyledTableCell>
                                                    <StyledTableCell align="center">{element.email}</StyledTableCell>
                                                    <StyledTableCell align="center">+92 {element.phone}</StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <Stack direction="row" justifyContent="center" gap={1}>
                                                            <Tooltip title="Edit" onClick={() => {handleModalEditOpen(element._id)}}>
                                                                <IconButton>
                                                                    <Edit />
                                                                </IconButton>
                                                            </Tooltip>
                                                            <Tooltip title="Delete" onClick={() => {handleDeleteStudent(element._id)}}>
                                                                <IconButton>
                                                                    <Delete />
                                                                </IconButton>
                                                            </Tooltip>
                                                        </Stack>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            }) : <StyledTableRow sx={{ backgroundColor: "#ffdada!important" }}>
                                                <StyledTableCell colSpan={5} sx={{ fontSize: "20px !important" }} align="center">
                                                    No Records Found
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Modals status={modalEdit} handle={handleModalClose}>
                                <Typography variant="h5" component="h2" fontWeight={700} textAlign="center" gutterBottom>
                                    Update Your Details
                                </Typography>
                                <Box component="form">
                                    <Stack spacing={3}>                                                        
                                        <Inputs type="text" label="First Name" required={true} value={editStudent.fname} handle={(e) => {setEditStudent({ ...editStudent, fname: e.target.value })}} />
                                        <Inputs type="text" label="Last Name" required={true} value={editStudent.lname} handle={(e) => setEditStudent({ ...editStudent, lname: e.target.value })} />
                                        <Inputs type="email" label="Your Email" disabled={true} required={false} value={editStudent.email} />
                                        <Inputs type="phone" label="Phone Number" required={true} value={editStudent.phone} handle={(e) => setEditStudent({ ...editStudent, phone: e.target.value })} />
                                        <LoadingButtons text="Update" variant="contained" handle={() => handleExistStudent(editStudent._id)} loading={loadingButton} indicator="Updating..." />
                                    </Stack>
                                </Box>
                            </Modals>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default Students;