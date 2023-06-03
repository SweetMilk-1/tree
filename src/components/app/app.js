import React, { useState, useEffect } from "react";

import TreeView from "../tree-view";
import Button from "../button";
import ItemCreateEdit from "../item-create-edit";
import List from "../list"

import { Add, Edit, Delete } from "@mui/icons-material";

import { withDatabase } from "../hoc";
import useModal from "../../hooks";

const App = ({ dbContext }) => {
  const [tree, setTree] = useState();
  const [selectedNode, setSeledtedNode] = useState(null);

  const [modal, handleOpen] = useModal(List, tree);
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
          <TreeView data={tree} onItemClick={handleItemClick} />
        </div>
        <div className="right-column">
          <Button
            label="Добавить"
            icon={<Add />}
            onClick={handleOpen}
            isDisabled={!selectedNode}
          />
          {/* <Button label="Изменить" icon={<Edit />} />
          <Button label="Удалить" icon={<Delete />} /> */}
        </div>
      </div>
      {modal}
    </>
  );
};

export default withDatabase(App);
