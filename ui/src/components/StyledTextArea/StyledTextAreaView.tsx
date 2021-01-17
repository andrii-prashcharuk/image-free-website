import styled from '@emotion/styled';
import { BaseInput } from '../StyledInput';

const StyledTextArea = styled(BaseInput.withComponent('textarea'))`
    resize: none;
`;

export default StyledTextArea;
