import React from 'react';
import styled from '@emotion/styled';

export default function Button (props: object): JSX.Element {
    return <button {...props} />;
}

const BlackButtonExample = styled.button`
    color: black;
`;

export { BlackButtonExample };