import React from "react";
import TreeView from "@mui/lab/TreeView/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

const CustomTreeView = (props) => {
  const { data, onItemClick = () => {} } = props;

  const CustomTreeItem = ({ data }) => {
    const { id, name, children } = data;
    return (
      <TreeItem
        key={id}
        nodeId={id.toString()}
        label={name}
        onClick={onItemClick(data)}
      >
        {children?.map((item, idx) => (
          <CustomTreeItem key={idx} data={item} />
        ))}
      </TreeItem>
    );
  };

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {data?.map((item, idx) => (
        <CustomTreeItem key={idx}data={item} />
      ))}
    </TreeView>
  );
};

export default CustomTreeView;
