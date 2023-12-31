import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const StyledContent = styled.section`
  display: flex;
  min-width: 300px;
  min-height: 400px;
  max-width: 400px;
  max-height: 500px;
  display: flex;
  font-size: 18px;
  flex-direction: column;
`;
export default function Content({ content }: { content: string | string[] }) {
  return (
    <StyledContent>
      {Array.from(content).map((eachContent) => (
        <p key={uuidv4()}>{eachContent}</p>
      ))}
    </StyledContent>
  );
}
