import styled from '@emotion/styled';
import { useRef } from 'react';

export const TextInput = ({
  placeholder,
  onChangeInput,
}: {
  placeholder: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <Wrapper>
        <Input type='text' placeholder={placeholder} onChange={onChangeInput} />
      </Wrapper>
    </>
  );
};

export const TextInputWithLabel = ({
  placeholder,
  label,
  onChangeInput,
  isOptional = false,
}: {
  placeholder: string;
  label: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOptional?: boolean;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Label>
        {label}
        {!isOptional && <span>*</span>}
      </Label>
      <Wrapper
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <Input
          ref={inputRef}
          type='text'
          placeholder={placeholder}
          onChange={onChangeInput}
        />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #e5e5ec;
  border-radius: 8px;
  padding: 14px 16px;
`;

const Input = styled.input`
  height: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 12px;
  font-weight: 500;

  span {
    font-size: 15px;
    color: ${({ theme }) => theme.color.point_red};
  }
`;
