import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Count = (props: any) => {
  const { number, duration } = props.data;

  const [count, setCount] = useState('0');

  useEffect(() => {
    if (!props.isVisible) {
      return;
    }

    let start = 0;

    const end = parseInt(number.substring(0, 3));

    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [props.isVisible, number, duration]);

  return (
    <Box className="Count">
      <Typography {...props.countTypographyStyle}>{count}</Typography>
    </Box>
  );
};

export default Count;
