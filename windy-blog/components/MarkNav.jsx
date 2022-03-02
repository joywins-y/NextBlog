import React, { Component } from "react";
import { Anchor } from "antd";
import { last } from "lodash";
import Link from "next/link";

export default class MarkNav extends Component {
  constructor(props) {
    super(props);
    this.tocItems = [];
    this.index = 0;
  }

  add(text, level) {
    const anchor = `toc${level}${++this.index}`;
    const item = { anchor, level, text };
    const items = this.tocItems;

    if (items.length === 0) {
      // 第一个item直接push
      items.push(item);
    } else {
      let lastItem = last(items); // 最后一个item
      if (item.level > lastItem.level) {
        // item是lastItem的children
        for (let i = lastItem.level + 1; i <= 2; i++) {
          const { children } = lastItem;
          if (!children) {
            // 如果 children 不存在
            lastItem.children = [item];
            break;
          }

          lastItem = last(children); // 重置 lastItem 为 children 的最后一个 item

          if (item.level <= lastItem.level) {
            // item level 小于或等于 lastItem level 都视为与 children 同级
            children.push(item);
            break;
          }
        }
      } else {
        // 置于最顶级
        items.push(item);
      }
    }
    return anchor;
  }

  reset = () => {
    this.tocItems = [];
    this.index = 0;
  };

  renderToc(items) {
    // 递归 render
    return items.map((item) => {
      console.log(item);
      <Link key={item.anchor} href={`#${item.anchor}`} title={item.text}>
        {item.children && this.renderToc(item.children)}
      </Link>
    });
  }

  render() {
    return (
      <Anchor affix showInkInFixed>
        {this.renderToc(this.tocItems)}
      </Anchor>
    );
  }
}
