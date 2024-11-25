import IncreaseCounter from "../hooks/use-state-simple";
import SubmittedForm from "../hooks/use-state-hard";
import IntervalTimer from "../hooks/use-ref.hard";

export const Hooks = [
  {
    title: "useState - Simple Task",
    desc: "Implement a button counter, the number increases by one when clicked button",
    component: IncreaseCounter,
  },
  {
    title: "useState - Hard Task",
    desc: "Implement a form, has the name and email. When the subimt button is clicked: Display the submitted data in a list below the form and clear the input fields",
    component: SubmittedForm,
  },
  {
    title: "useEffect - Simple Task",
    desc: "Create a timer, increments by 1 every second and clears the timer use useEffect.",
    component: IntervalTimer,
  },
];
