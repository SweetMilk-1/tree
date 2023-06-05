import React, { useState, useEffect } from "react";

import TreeView from "../tree-view";
import Button from "../button";
import ItemCreateEdit from "../item-create-edit";
import List from "../list";

import { Add, Edit, Delete } from "@mui/icons-material";
import { Typography } from "@mui/material";

import { withDatabase } from "../hoc";
import useModal from "../../hooks";

import "./app.css";

const App = ({ dbContext }) => {
  const [tree, setTree] = useState();
  const [selectedNode, setSeledtedNode] = useState(null);

  const [modal, handleOpen] = useModal(List, tree, "Добавление вершины");
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
      <div className="container mb-2">
        <Typography variant="h4" component="h3">
          Работа с деревом (Neo4j)
        </Typography>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <TreeView data={tree} onItemClick={handleItemClick} />
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <Button
              label="Добавить"
              icon={<Add />}
              onClick={handleOpen}
              isDisabled={!selectedNode}
            />
          </div>
          {modal /**тут нужно коллекцию закидывать, проще будет читать код */}
        </div>
      </div>
    </>
  );
};

export default withDatabase(App);
