import { FC } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Button, 
  Toolbar, 
  Typography 
} from '@mui/material';

import { staticLinks } from 'assets/data/links';

const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Личный кабинет
          </Typography>

          <Link to={staticLinks.auth}>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;