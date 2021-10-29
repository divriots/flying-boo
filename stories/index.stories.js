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
    <p>This Boo will fly off anywhere from your HTML document element, mwuahuahahaha >:)</p>
    <flying-boo></flying-boo>
  `;
};

export const changeSpeed = () => {
  cleanup();
  return `
    <p>You can configure how quick it changes direction</p>
    <flying-boo change-speed="1000"></flying-boo>
  `;
}

export const speed = () => {
  cleanup();
  return `
    <p>You can configure how quick it moves</p>
    <flying-boo speed="2"></flying-boo>
  `;
}

export const scareDistance = () => {
  cleanup();
  return `
    <p>You can configure from how far it gets scared</p>
    <flying-boo scare-distance="300"></flying-boo>
  `;
}
