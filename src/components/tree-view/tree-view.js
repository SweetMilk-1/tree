import React from "react";
import TreeView from "@mui/lab/TreeView/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";


const CustomTreeView = (props) => {
  const { tree, onItemClick } = props;

  const CustomTreeItem = ({ tree }) => {
    const { id, name, children } = tree;
    return (
      <TreeItem key={id} nodeId={id.toString()} label={name} onClick={onItemClick(tree)}>
        {children?.map((item) => (
          <CustomTreeItem tree={item}/>
        ))}
      </TreeItem>
    );
  };

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {tree?.map((item) => (
        <CustomTreeItem tree={item} />
      ))}
    </TreeView>
  );
};

export default CustomTreeView;
