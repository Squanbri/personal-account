import { FC } from 'react';
import { 
  AppBar, 
  Box, 
  Button, 
  Toolbar, 
  Typography 
} from '@mui/material';

const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Личный кабинет
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;