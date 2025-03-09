"use client";

import React, { useState } from "react";
import { TreeSelect } from "antd";
const treeData = [
  {
    value: "parent 1",
    title: "parent 1",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        children: [
          {
            value: "leaf1",
            title: "leaf1",
          },
          {
            value: "leaf3",
            title: "leaf3",
          },
        ],
      },
      {
        value: "parent 1-1",
        title: "parent 1-1",
        children: [
          {
            value: "leaf11",
            title: (
              <b
                style={{
                  color: "#08c",
                }}
              >
                leaf11
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const SelectRole = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    setValue(newValue);
  };
  const onPopupScroll = (e) => {
    console.log("onPopupScroll", e);
  };
  return (
    <TreeSelect
      showSearch
      style={{
        width: "100%",
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: "auto",
      }}
      placeholder="Change Role"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
      onPopupScroll={onPopupScroll}
    />
  );
};
export default SelectRole;
