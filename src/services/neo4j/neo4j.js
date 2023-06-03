import neo4j from "neo4j-driver";

const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "12345678")
);

const sessionWrapper = (action) => async (...params) => {
  const session = driver.session();
  let res = undefined;
  try  {
    res = await action(session)(...params);
  }
  finally {
    session.close();
  }
  return res;
}

const getTree = (session) => async () => {
  let command = "MATCH (g:genre) RETURN g";
  console.log(command);

  let result = await session.run(command);
  const map = new Map();
  
  for (const item of result.records){
    const node = item.get(0);
    map.set(node.properties.id, 
      {
        ...node.properties, 
        children:[], 
        parent: null
      }
    );
  }

  command = "MATCH (g1:genre)<-[:EXTENDS_FROM]-(g2:genre) RETURN g1.id, collect(g2.id)";
  console.log(command);

  result = await session.run(command);

  for (const pair of result.records) {
    const from = pair.get(0);
    const to = pair.get(1);
    const parent = map.get(from);
    for (const childId of to) {
      const child = map.get(childId);
      parent.children.push(child);
      child.parent = parent;
    }
  } 

  const ans = [];
  for (const [, value] of map) {
    if (!value.parent) 
      ans.push(value);
  }
  console.log('---------------------------------------------');
  return ans;
}


const service = {
  getTree:sessionWrapper(getTree)
}

export default service;