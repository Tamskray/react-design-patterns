import styled from "styled-components";

interface PanelProps {
  flex: number;
}

export const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Panel = styled.div<PanelProps>`
  flex: ${(p) => p.flex};
`;
