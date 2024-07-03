import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
    // Filter rows to exclude rows with ID 0 and empty names
    const filteredRows = rows.filter(row => row.id !== 0 && row.name.trim() !== '');

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredRows.length > 0 ? (
                        filteredRows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component='th' scope="row">{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{ margin: '0px 10px' }}
                                        onClick={() => selectedUser({ id: row.id, name: row.name })}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        sx={{ margin: '0px 10px' }}
                                        onClick={() => deleteUser({ id: row.id })}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} align="center">
                                No Data
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;
