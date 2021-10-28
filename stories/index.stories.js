import { cleanup } from "../src/index.ts";
import './doc-style.css';

export default {
  parameters: {
    layout: "centered",
  },
};

export const main = () => {
  cleanup();
  return `
    <p>This Ghost will fly off anywhere from your HTML document element, mwuahuahahaha >:)</p>
    <boo-ghost></boo-ghost>
  `;
};

export const changeSpeed = () => {
  cleanup();
  return `
    <p>You can configure how quick it changes direction</p>
    <boo-ghost change-speed="1000"></boo-ghost>
  `;
}

export const speed = () => {
  cleanup();
  return `
    <p>You can configure how quick it moves</p>
    <boo-ghost speed="2"></boo-ghost>
  `;
}

export const scareDistance = () => {
  cleanup();
  return `
    <p>You can configure from how far it gets scared</p>
    <boo-ghost scare-distance="300"></boo-ghost>
  `;
}
