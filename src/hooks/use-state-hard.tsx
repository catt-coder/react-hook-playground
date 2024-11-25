/**
 * Hook: useState
 * Task: Implement a form, has the name and email.
 * When the subimt button is clicked:
 * - Display the submitted data in a list below the form.
 * - Clear the input fields.
 */
import { ChangeEvent, FormEvent, useState } from "react";

interface SubmittedItem {
  name: string;
  email: string;
}

const defaultFieldValue = { name: "", email: "" };

function SubmittedForm() {
  const [fields, setFields] = useState(defaultFieldValue);
  const [submittedList, setSubmittedList] = useState<SubmittedItem[]>([]);

  const handleFieldsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setSubmittedList((prevSubmittedList) => [
      ...prevSubmittedList,
      {
        name: fields.name,
        email: fields.email,
      },
    ]);
    setFields(defaultFieldValue);
  };

  return (
    <div>
      <ul>
        {submittedList.map((item) => (
          <li key={`${item.name}_${item.email}`}>
            Submitted: {item.name}/{item.email}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={fields.name}
            onChange={(event) => handleFieldsChange(event)}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={fields.email}
            onChange={(event) => handleFieldsChange(event)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmittedForm;
