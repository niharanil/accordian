import "./styles.css";
import Accordian, {
  AccordianItem,
  AccordianPanel,
  AccordianToggle,
} from "./Accordian/Accordian";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Accordian collapsible>
        <AccordianItem id="1">
          <AccordianToggle>Section 1</AccordianToggle>
          <AccordianPanel>Section 1 content</AccordianPanel>
        </AccordianItem>
        <AccordianItem id="2">
          <AccordianToggle>Section 2</AccordianToggle>
          <AccordianPanel>Section 2 content</AccordianPanel>
        </AccordianItem>
      </Accordian>
    </div>
  );
}
