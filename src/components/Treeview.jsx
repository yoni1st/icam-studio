import React from "react";
import TreeView from "react-treeview";
import "react-treeview/react-treeview.css";

const Treeview = () => {
  const dataSource = [
    {
      type: "CBE",
      collapsed: false,
      cbe: [
        {
          Cname: "Addis Ababa",
          collapsed: false,
          district: [
            {
              Dname: "Head Office",
              collapsed: false,
            },
            {
              Dname: "Mexico District",
              collapsed: false,
            },
          ],
        },
        {
          Cname: "Sidama",
          collapsed: false,
          district: [
            {
              Dname: "Head Office",
              collapsed: false,
            },
            {
              Dname: "Hawassa District",
              collapsed: false,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="MainDiv">
      <div className="container">
        {dataSource.map((node, i) => {
          const type = node.type;
          const label = <span className="node">{type}</span>;
          return (
            <TreeView
              key={type + "|" + i}
              nodeLabel={label}
              defaultCollapsed={true}
            >
              {node.cbe.map((cbe, i) => {
                const label2 = <span className="node">{cbe.Cname}</span>;

                return (
                  <TreeView nodeLabel={label2} key={i} defaultCollapsed={true}>
                    {cbe.district.map((d, i) => {
                      console.log(d);

                      const label3 = <span className="node">{d.Dname}</span>;
                      return (
                        <TreeView
                          nodeLabel={label3}
                          key={i}
                          defaultCollapsed={true}
                        ></TreeView>
                      );
                    })}
                  </TreeView>
                );
              })}
            </TreeView>
          );
        })}
      </div>
    </div>
  );
};

export default Treeview;
