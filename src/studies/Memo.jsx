import React, { useState, useMemo } from "react";

export default function Memo() {
  const [month, setMonth] = useState(0);
  const [date, setDate] = useState(0);

  const onChange = (evt) => {
    const { name, value } = evt.target;
    if (name === "month") {
      setMonth(value);
    } else if (name === "date") {
      setDate(value);
    }
  };

  return (
    <div>
      <select name="month" onChange={onChange} placeholder="월">
        {[...Array(12)].map((_, idx) => (
          <option key={idx} value={idx + 1}>
            {idx + 1}
          </option>
        ))}
      </select>
      <select name="date" onChange={onChange} placeholder="일">
        {[...Array(31)].map((_, idx) => (
          <option key={idx} value={idx + 1}>
            {idx + 1}
          </option>
        ))}
      </select>
      <br />
      <Text month={month} date={date} />
    </div>
  );
}

const getSeason = (month) => {
  console.log("getSeason");
  if (month > 11 || month < 3) {
    return "겨울";
  } else if (month > 2 && month < 6) {
    return "봄";
  } else if (month > 5 && month < 9) {
    return "여름";
  } else if (month > 8 && month < 12) {
    return "가을";
  }
};

const getTime = (date) => {
  console.log("getTime");
  if (date < 11) {
    return "초반";
  } else if (date > 10 && date < 21) {
    return "중반";
  } else if (date > 20) {
    return "후반";
  }
};

function Text({ month, date }) {
  const season = useMemo(() => getSeason(month), [month]);
  const time = useMemo(() => getTime(date), [date]);

  // const season = getSeason(month);
  // const time = getTime(date);

  return (
    <>
      {month !== 0 && date !== 0 && (
        <span>{`${month}월 ${time}에 태어났고, 계절은 ${season}입니다`}</span>
      )}
    </>
  );
}
