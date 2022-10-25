import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const CategoryPaper = (props) => {
  return (
    <Stack
      spacing={1}
      alignItems="center"
      sx={{ marginRight: props.name === "news" && { xs: 3, md: 5 } }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: 50, md: 80 },
          height: { xs: 50, md: 80 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon sx={{ fontSize: { xs: 20, md: 30 } }}>{props.icon}</Icon>
      </Paper>
      <Typography>{props.title}</Typography>
    </Stack>
  );
};

const CustomTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        allowScrollButtonsMobile
        aria-label="scrollable prevent tabs example"
      >
        <Tab label={<CategoryPaper icon="question_answer" title="Q&A" />} />
        <Tab label={<CategoryPaper icon="question_answer" title="Q&A" />} />
        <Tab label={<CategoryPaper icon="question_answer" title="Q&A" />} />
        <Tab label={<CategoryPaper icon="question_answer" title="Q&A" />} />
        <Tab label={<CategoryPaper icon="question_answer" title="Q&A" />} />
        <Tab label={<CategoryPaper icon="question_answer" title="Q&A" />} />
        <Tab label={<CategoryPaper icon="question_answer" title="Q&A" />} />
      </Tabs>
    </Box>
  );
};

export default <CustomTabs />;
