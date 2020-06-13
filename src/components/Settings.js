import React from "react";
import styled from "styled-components";

function Settings() {
  return (
    <Wrapper>
      <span>Settings</span>
      <section>
        <p>example text</p>
        <p>more text</p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #00bfff;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default Settings;
