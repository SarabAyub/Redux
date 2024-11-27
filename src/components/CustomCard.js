// components/StyledCard.js

import { Card, CardContent, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
  width: 300px;      /* Set a consistent width */
  height: 180px;     /* Set a consistent height */
  margin: 16px;      /* Space between cards */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);  /* Slight hover effect */
  }
`;

// Sample content component
const CardTitle = styled(Typography)`
  font-weight: bold;
  font-size: 1rem;
  color: #333;
`;

const CardBody = styled(Typography)`
  font-size: 0.7rem;
  color: black;
`;

// Reusable Card component
export default function CustomCard({ title, body }) {
  return (
    <StyledCard>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardBody>{body}</CardBody>
      </CardContent>
    </StyledCard>
  );
}
