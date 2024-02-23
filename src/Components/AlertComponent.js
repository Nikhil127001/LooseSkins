import * as React from 'react';
import Button from '@mui/material/Button';
import  Snackbar  from '@mui/material/Snackbar';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';

const AlertComponent = (props) => {
    const [open, setOpen] = React.useState(true);

    const {message , type , show , setShow} = props


    React.useEffect(() => {
        if(show){
            setOpen(true)
        }else{
            setOpen(false)
        }

    }, show)

    return (
        <React.Fragment>
            <Snackbar
            variant="soft"
            color="error"
                open={show}
                onClose={() => setShow(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                message={message}
                action={
                    <React.Fragment>
                        <Button
                            onClick={() =>{ setShow(false)}}
                            variant="contained"
                            color={type}
                            size="small"
                        >
                            Dismiss
                        </Button>
                        <PlaylistAddCheckCircleRoundedIcon />
                    </React.Fragment>
                }
            />
        </React.Fragment>
    );
}

export default AlertComponent