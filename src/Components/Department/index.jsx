import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Alert,
  Card,
  CardContent,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  InputAdornment,
  Slide,
  TextField,
} from "@mui/material";
import axios from "axios";
import SettingsIcon from "@mui/icons-material/Settings";
import UpdateIcon from "@mui/icons-material/Update";
import TuneIcon from "@mui/icons-material/Tune";
import { purple } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CottageIcon from "@mui/icons-material/Cottage";

export default function Department() {
  const [open, setOpen] = React.useState(false);
  const [list, setList] = React.useState([]);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    boxShadow: "inherit",
  }));

  const SearchText = (props) => {
    return (
      <TextField
        variant="outlined"
        placeholder={props.placeholder}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                style={{
                  background: "#0f2c64",
                  color: "#fff",
                  padding: 5,
                  marginLeft: -10,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              />
            </InputAdornment>
          ),
        }}
      />
    );
  };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#0f2c64",
    marginLeft: 15,
    marginRight: 15,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#0f2c64",
    },
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createDepartment = async () => {
    try {
      const response = await axios.post(
        "https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/createDepartment",
        "Arsil Malek"
      );
      alert(response);
    } catch (error) {
      alert(error);
    }
  };
  const getDepartment = async () => {
    try {
      handleClickOpen();
      const response = await axios.post(
        "https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/department"
      );
      setList(JSON.stringify(response?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteApi = async () => {
    const enteredValue = prompt(
      `:::::: SELECT ANY ID FOR DELETE  :::::: ${list}`
    );

    if (enteredValue !== null) {
      try {
        await axios.delete(
          `https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/department/${enteredValue}`
        );
        alert("DELETE SUCCESSFULLY...");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container style={{ padding: 25 }}>
        <Grid item xs={6}>
          <Item style={{ display: "flex", flexDirection: "row" }}>
            <AccountCircleIcon
              style={{ fontSize: 35, marginRight: 5, color: "#0f2c64" }}
            />
            <div>
              <div style={{ marginRight: "10px", color: "#0f2c64" }}>
                Mr Admin
              </div>
              <div style={{ fontSize: 8 }}>Arsil Malek</div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "40%" }}>
              <SearchText placeholder={"Search in admin panel"} />
            </div>

            <div
              style={{
                width: "20%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <SettingsIcon />
              <UpdateIcon />
              <TuneIcon />
            </div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Divider
            style={{
              background: "#f1f1f1",
              height: 1,
              marginTop: 5,
              marginBottom: 5,
            }}
          />
          <Item>
            <div style={{ fontSize: 25, color: "#0f2c64" }}>Departments</div>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Divider
            style={{
              background: "#f1f1f1",
              height: 1,
              marginTop: 5,
              marginBottom: 5,
            }}
          />
          <Item
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div>
              <SearchText placeholder={"Search Services"} />
            </div>
            <ColorButton
              size="small"
              variant="contained"
              onClick={() => createDepartment()}
            >
              Create Department
            </ColorButton>
            <div
              style={{
                width: "10%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <DeleteIcon onClick={() => deleteApi()} />
              <EditIcon />
            </div>
          </Item>
        </Grid>
      </Grid>

      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        onClick={() => getDepartment()}
      >
        <Card
          sx={{
            maxWidth: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #0f2c64",
            cursor: "pointer",
            paddingTop: 3,
            marginLeft: 3,
          }}
        >
          <CottageIcon
            style={{
              fontSize: 50,
              borderRadius: 50,
              border: "1px solid #0f2c64",
              padding: 5,
            }}
          />
          <CardContent>
            <div> Department Name</div>
          </CardContent>
        </Card>
        <div style={{ marginRight: 25 }}>
          {" "}
          <Checkbox defaultChecked />
          Select all
        </div>
      </div>
      <div style={{ position: "fixed", top: 10, right: 10 }}>
        {" "}
        <Alert severity="success">Department Area</Alert>
      </div>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Department List</DialogTitle>
          <DialogContent>
            Testing...
            <DialogContentText>{list}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  );
}
