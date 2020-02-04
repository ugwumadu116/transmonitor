import React, { useEffect, useState } from "react";
import { Container } from "./elements";
import Select from "react-select";

const SimpleSelect = ({ datas, size, selected }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const options = [datas.map(data => ({ value: data, label: data }))];
    setOptions(...options);
  }, [datas]);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    selected(selectedOption);
  };
  return (
    <Container>
      <Select
        className={`selection ${size}`}
        placeholder={datas[0]}
        value={selectedOption}
        onChange={handleChange}
        options={[...options]}
      />
    </Container>
  );
};

export default SimpleSelect;
