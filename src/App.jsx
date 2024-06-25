import styled from "styled-components";
let jsonObj = {
  nodes: [
    { flag: false, name: "Переменные", value: "variables" },
    { flag: false, name: "Функции", value: "functions" },
  ],
};

const UL = styled.ul``;

const LI = styled.li``;
const CheckBox = styled.input.attrs({ type: "checkbox" })``;
const Label = styled.label``;
const MainDiv = styled.div``;

function json2array(json) {
  var result = [];
  var keys = Object.keys(json);
  keys.forEach(function (key) {
    result.push(json[key]);
  });
  return result;
}
// const array = json2array(jsonObj);
// console.log("array", array);

export default function App() {
  function createCheckTree(currentElement, nodes) {
    console.log("nodes ", nodes);
    return (
      <currentElement>
        {nodes.map((p) => (
          <UL>
            <LI>
              <CheckBox
                // name={nodes[p]["value"]}
                // id={nodes[p]["value"]}
                // checked={nodes[p]["flag"]}
                checked={p.flag}
              />
              {console.log("flag ", p.flag)}
              {/* <Label>{nodes[p]["name"]}</Label> */}
              <Label>{p.name}</Label>
            </LI>
            {/* if (nodes[p]["nodes"]) {createCheckTree(<LI />, nodes[p]["nodes"])} */}
            if(p.nodes){createCheckTree(<LI />, p.nodes)}
          </UL>
        ))}
      </currentElement>
    );
  }

  // return <>{createCheckTree(<MainDiv />, json2array(jsonObj))}</>;
  return <>{createCheckTree(<MainDiv />, jsonObj.nodes)}</>;
}
