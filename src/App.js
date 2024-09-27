import {
  AppBar,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Toolbar,
  Typography,
} from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <AppBar position="static" sx={{ backgroundColor: "teal" }}>
        <Toolbar>
          <Typography variant="h6">My Material UI App</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography variant="h3" style={{ marginTop: "50px" }}>
          Добро пожаловать в нашe приложение!
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="success"
          style={{ marginTop: "20px" }}
          onClick={handleClickOpen}
        >
          Открыть диалоговое окно
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>
            Диалоговое окно для компонентов Material UI.
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Это простое диалоговое окно для демонстрации компонентов Material
              UI.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel} color="secondary">
              Отмена
            </Button>
            <Button onClick={handleClose} autoFocus>
              Согласен
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

export default App;
