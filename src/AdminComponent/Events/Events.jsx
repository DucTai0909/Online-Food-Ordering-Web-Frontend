import { Box, Button, Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const initValues={
  image: "",
  location: "",
  name: "",
  startedAt: dayjs(), 
  endsAt: dayjs(),
}

export const Events = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues] = React.useState(initValues)
  const handleSubmit = (e) => {
    e.preventDefault()
    const formattedFormValues = {
      ...formValues,
      startedAt: formValues.startedAt.format('MMMM DD, YYYY hh:mm A'),
      endsAt: formValues.endsAt.format('MMMM DD, YYYY hh:mm A')
    };
    
    console.log("submit", formattedFormValues)
    setFormValues(initValues)
   }
  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  const handleDateChange = (date, dateType)=>{
    // const formatedDate = dayjs(date).format('MMMM DD, YYYY hh:mm A')
    setFormValues({
      ...formValues,
      [dateType]: date
    })
  }
  return (
    <div>
      <div className='p-5 '>
        <Button onClick={handleOpen} variant='contained'>Tạo sự kiện mới</Button>


        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    name='image'
                    label='Ảnh'
                    variant='outlined'
                    fullWidth
                    value={formValues.image}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='location'
                    label='Địa điểm'
                    variant='outlined'
                    fullWidth
                    value={formValues.location}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='name'
                    label='Tên sự kiện'
                    variant='outlined'
                    fullWidth
                    value={formValues.name}
                    onChange={handleFormChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      renderInput={(props) =><TextField {...props} />}
                      label="Bắt đầu"
                      value={formValues.startedAt}
                      onChange={(newValue)=>
                        handleDateChange(newValue, 'startedAt')
                      }
                      inputFormat="MM/dd/yyyy hh:mm a"
                      className='w-full'
                      sx={{width: '100%'}}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      renderInput={(props) =><TextField {...props} />}
                      label="Kết thúc"
                      value={formValues.endsAt}
                      onChange={(newValue)=>
                        handleDateChange(newValue, 'endsAt')
                      }
                      inputFormat="MM/dd/yyyy hh:mm a"
                      className='w-full'
                      sx={{width: '100%'}}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Button variant='contained' type='submit'>
                        Tạo sự kiện
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  )
}
