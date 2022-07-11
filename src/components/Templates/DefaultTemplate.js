import { Mjml, MjmlBody, MjmlColumn, MjmlSection, MjmlText } from 'mjml-react';

export default function DefaultTemplate({ children }) {
  return (
    <Mjml>
      <MjmlBody width={500}>
        {/* Custom decorative component */}
        <MjmlSection backgroundColor="#EFEFEF">
          <MjmlColumn>
            <MjmlText fontSize="20px">Hello world!</MjmlText>
          </MjmlColumn>
        </MjmlSection>

        {/* Content for the email goes here */}
        <MjmlSection backgroundColor="#EFEFEF">
          <MjmlColumn>{children}</MjmlColumn>
        </MjmlSection>

        {/* Footer stuff, like the unsubscribe link */}
        <MjmlSection>
          <MjmlColumn>
            <MjmlText>
              <a href="{{unsubscribe_url}}">Unsubscribe</a>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
}
