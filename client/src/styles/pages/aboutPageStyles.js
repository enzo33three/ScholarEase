/* AboutPage.css */
import styled from "styled-components";

export const AboutContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .header {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  h1 {
    font-size: 2rem;
    color: #333;
  }

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .about-container {
      flex-direction: column;
      align-items: flex-start;
    }

    .mission,
    .sets-apart,
    .get-started,
    .contact {
      padding: 20px;
      width: 100%;
    }
  }

  .image-container {
    text-align: center;
    margin-top: 30px;
  }

  .about-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
