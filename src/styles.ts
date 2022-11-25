import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100wh;

  background: #2a363b;

  /* img {
    margin-top: 20px;
    width: 350px;
  } */
`

export const Text = styled.h2`
  color: #fff;
  font-family: sans-serif;
`

export const Input = styled.textarea`
  background: transparent;
  border-radius: 8px;
  color: #fff;

  height: 20%;
  width: 32%;

  display: flex;
  flex-wrap: wrap;
`

export const Button = styled.button`
  height: 7%;
  width: 20%;
  margin: 2%;
  border: 0;
  border-radius: 8px;
  color: #fff;
  background: #e84a5f;

  font-family: sans-serif;
  font-size: 1rem;

  cursor: pointer;
`
