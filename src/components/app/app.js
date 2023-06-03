import React, { useState, useEffect } from "react";

import TreeView from "../tree-view";
import ItemCreateEdit from "../item-create-edit";
import Button from "../button";

import { Add, Edit, Delete } from "@mui/icons-material";
import Modal from "@mui/material/Modal";

import { withDatabase } from "../hoc";

const App = ({ dbContext }) => {
  const [tree, setTree] = useState();
  const [selectedNode, setSeledtedNode] = useState();

  /**
   * Загружает данные и после загрузки сохраняет в локальный стэйт
   */
  useEffect(() => {
    dbContext.getTree().then((tree) => setTree(tree));
  }, [dbContext]);

  /**
   * Обработчик клика на элемент дерева
   */
  const handleItemClick = (newSelectedNode) => () => {
    setSeledtedNode(newSelectedNode);
  };

  return (
    <>
      <div className="container">
        <div className="left-column">
          <TreeView tree={tree} onItemClick={handleItemClick} />
        </div>
        <div className="right-column">
          <Button label="Добавить" icon={<Add />} />
          <Button label="Изменить" icon={<Edit />} />
          <Button label="Удалить" icon={<Delete />} />
        </div>
      </div>
    </>
  );
};

export default withDatabase(App);
