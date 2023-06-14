import { Skeleton, TableCell, TableRow } from "@mui/material";

const TableRowsLoader = () => {
    return [...Array(5)].map((row, index) => (
        <TableRow key={index}>
            <TableCell>
                <Skeleton animation="wave" variant="text" />
            </TableCell>
            <TableCell>
                <Skeleton animation="wave" variant="text" />
            </TableCell>
            <TableCell>
                <Skeleton animation="wave" variant="text" />
            </TableCell>
            <TableCell>
                <Skeleton animation="wave" variant="text" />
            </TableCell>
            <TableCell>
                <Skeleton animation="wave" variant="text" />
            </TableCell>
        </TableRow>
    ));
};

export default TableRowsLoader;