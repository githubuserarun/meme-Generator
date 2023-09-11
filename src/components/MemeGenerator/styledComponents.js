import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  font-family: Open Sans;
  font-weight: bold;
  margin-bottom: 20px;
`

export const LabelElement = styled.label`
  color: #7e858e;
  font-family: Open Sans;
  font-size: 15px;
`
export const InputElement = styled.input`
  padding: 10px;
  background-color: white;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  color: #5a7184;
  width: 300px;
`
export const SelectElement = styled.select`
  padding: 10px;
  background-color: white;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  color: #5a7184;
  width: 300px;
`
export const GetDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const BtnElement = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 10px 20px;
  width: 100px;
  font-size: 15px;
  border-radius: 3px;
  border: none;
`
export const Container = styled.div`
  padding: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const MemeContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
`
export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  font-family: 'Open Sans';
`
