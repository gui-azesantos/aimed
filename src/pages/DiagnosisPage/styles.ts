import { FormControl } from "@chakra-ui/react";
import styled from "styled-components";

export const FormContainer = styled(FormControl)`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 24px;
  flex-direction: column;
`;

export const CustomForm = styled.form`
  gap: 24px;
  display: flex;
  flex-direction: column;
`;
