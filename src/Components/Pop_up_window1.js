import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Link from '@mui/material/Link';
import { Collapse, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
import Add from '@mui/icons-material/Add';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Stack } from '@mui/system';
import exclusion_cluse from '../exclusion_clause.json'
import Charter_Party from './Charter_Party';
import { Translate } from '@mui/icons-material';

const style = {
  position: 'relative',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height : 600,
  width : 1200
};

export default function Pop_up_window1({Ref_Number}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    SetCP_Add(true)
    SetAdden_Add(true)
    SetSD_Add(true)
};

  const [CP_Add, SetCP_Add] = useState(true);
  const [Adden_Add, SetAdden_Add] = useState(true);
  const [SD_Add, SetSD_Add] = useState(true);


// console.log(Ref_Number)

  return (
    <div>
      {/* <Button onClick={handleOpen}></Button> */}
      <Link href="#" fontWeight='medium' underline="hover" onClick={handleOpen}>Ref_Number</Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} overflow = 'auto'>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {/* <IconButton size='small' justify="flex-end">x</IconButton> */}

          <Stack direction="row" justifyContent="end">
            <IconButton size='small' sx={{ color: "#1f1f1f" }} onClick = {handleClose}>
                <CloseIcon/>
            </IconButton>
          </Stack>

          <Typography variant='h6' marginBottom='20px'>
            <Link href="#" color="inherit" underline="hover" onClick={() => SetCP_Add(!CP_Add)}>Charter Party</Link> |
            <IconButton sx={{ color: "#1f1f1f" }} onClick={() => SetCP_Add(!CP_Add)}>
                {CP_Add ? <Add/> : <RemoveIcon/>}
            </IconButton> |
            <IconButton >
                <DownloadSharpIcon sx={{ color: "#1f1f1f" }} ></DownloadSharpIcon>
            </IconButton>
          </Typography >
          
          <Collapse in={!CP_Add} timeout="auto" unmountOnExit>
            {/* {!CP_Add ? <Charter_Party Ref_Number="VSP102089"/> : null} */}
            <Charter_Party/>
          </Collapse>
          

          <Typography variant='h6' marginBottom='20px'>
            <Link href="#" color="inherit" underline="hover" onClick={() => SetAdden_Add(!Adden_Add)}>Addendums</Link> |
            <IconButton sx={{ color: "#1f1f1f" }} onClick={() => SetAdden_Add(!Adden_Add)}>
                {Adden_Add ? <Add/> : <RemoveIcon/>}
            </IconButton> |
            <IconButton >
                <DownloadSharpIcon sx={{ color: "#1f1f1f" }} ></DownloadSharpIcon>
            </IconButton>
          </Typography>

          <Typography variant='h6' marginBottom='20px'>
            <Link href="#" color="inherit" underline="hover" onClick={() => SetSD_Add(!SD_Add)}>Supporting Documents</Link> |
            <IconButton sx={{ color: "#1f1f1f" }} onClick={() => SetSD_Add(!SD_Add)}>
                {SD_Add ? <Add/> : <RemoveIcon/>}
            </IconButton> |
            <IconButton >
                <DownloadSharpIcon sx={{ color: "#1f1f1f" }} ></DownloadSharpIcon>
            </IconButton>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
