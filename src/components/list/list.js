import * as React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const CustomList = ({ data }) => {
  return (
    <List>
      {data.map((item) => (
        <ListItem disablePadding key={item.id.toString()}>
          <ListItemText primary={`${item.id}. ${item.name}`}></ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default CustomList;
