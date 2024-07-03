import { Button, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setName(data.name);
        }
    }, [data]);

    return (
        <div style={{ // Centering horizontally and vertically
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '500px', // Full-page view
            backgroundColor: '#80ABEF', // Background color change
        }}>
            <Grid //like div
                container
                spacing={3}
                sx={{ //like css part
                    backgroundColor: '#ffffff',
                    padding: '50px',
                    width: '500px', // Adjust width as needed
                    borderRadius: '8px',
                }}
            >
                <Grid item xs={12}>
                    <Typography component={'h1'}
                        sx={{
                            color: '#000000',
                            fontSize: '35px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        User Form
                    </Typography>
                </Grid>

                <Grid item xs={12} // Full width
                    sx={{ display: 'flex', marginBottom: '20px' }} // Spacing between fields
                >
                    <Typography
                        component={'label'}
                        htmlFor="id"
                        sx={{
                            color: '#000000',
                            marginRight: '20px',
                            fontSize: '20px',
                            width: '100px',
                            display: 'block',
                        }}
                    >
                        ID
                    </Typography>
                    <Input
                        type='number'
                        id='id'
                        name='id'
                        sx={{
                            width: '100%',
                        }}
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} // Full width
                    sx={{ display: 'flex' }}
                >
                    <Typography
                        component={'label'}
                        htmlFor="name"
                        sx={{
                            color: '#000000',
                            marginRight: '20px',
                            fontSize: '20px',
                            width: '100px',
                            display: 'block',
                        }}
                    >
                        Name
                    </Typography>
                    <Input
                        type='text'
                        id='name'
                        name='name'
                        sx={{
                            width: '100%',
                        }}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Button
                        sx={{
                            backgroundColor: '#00c6c6',
                            color: '#000000',
                            marginTop: '20px',
                            padding: '10px 30px',
                            fontSize: '15px',
                            "&:hover": {
                                opacity: '0.7',
                                backgroundColor: '#00c6c6',
                            },
                        }}
                        onClick={() => isEdit ? updateUser({ id, name }) : addUser({ id, name })}
                    >
                        {isEdit ? 'Update' : 'Add'}
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default UserForm;
