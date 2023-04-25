import React from 'react';
import Layout from '../../components/Layout';
import LINELogo from '../../images/line.png';
import JKOPayLogo from '../../images/jkopay.png';
import ShopeeLogo from '../../images/shopee.png';
import AvatarImage from '../../images/avatar.png';
import {
  Container,
  Logo,
  Avatar,
  Block,
  NameBlock,
  Name,
  JobTitle,
  Seperator,
  ContentBlock,
  LeftBlock,
  RightBlock,
} from './styled';

const ShowcaseSection = () => {
  return (
    <Layout.Section>
      <Container>
        <ContentBlock>
          <LeftBlock>
            <Avatar src={AvatarImage} />
          </LeftBlock>

          <RightBlock>
            <NameBlock>
              <Name>Harry Chiu</Name>
              <Seperator />
              <JobTitle>Frontend Developer</JobTitle>
            </NameBlock>

            <Block>
              <Logo src={LINELogo} />
            </Block>
            <Block>
              <Logo src={JKOPayLogo} />
            </Block>

            <Block>
              <Logo src={ShopeeLogo} />
            </Block>
          </RightBlock>
        </ContentBlock>
      </Container>
    </Layout.Section>
  );
};

export default ShowcaseSection;
