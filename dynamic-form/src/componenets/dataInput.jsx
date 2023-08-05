import { useState } from 'react';
import DatePicker from 'react-date-picker';



export default function DareInput() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}


