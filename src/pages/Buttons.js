import * as React from "react";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

const Buttons = () => {
  return (
    <Container>
      <Box
        sx={{
          my: 4,
          border: "1px solid rgba(194, 224, 255, 0.08);",
          borderRadius: "10px",
        }}
      >
        <Stack spacing={1} direction="row" sx={{ my: 4 }}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="contained" disableElevation>
            Disable elevation
          </Button>
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
          >
            Save
          </LoadingButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default <Buttons />;
