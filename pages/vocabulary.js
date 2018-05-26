import Layout from '../components/Layout';
import Header from '../components/Header';
import withData from '../apollo/withData';
import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const VocabCard = ({ category, word }) => (
  <Wrapper>
    <Category>{category}</Category>
    <CardContent>{word}</CardContent>
  </Wrapper>
);

const GridContent = styled.div`
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: auto auto auto;
  justify-items: center;
  margin-bottom: 1.5em;

  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 576px) {
    grid-template-columns: auto;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  height: auto;
  background-color: #fff;
  margin-top: 1.5em;
  -webkit-box-shadow: 9px 11px 5px -3px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 9px 11px 5px -3px rgba(0, 0, 0, 0.26);
  box-shadow: 9px 11px 5px -3px rgba(0, 0, 0, 0.26);

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`;

const Category = styled.div`
  background-color: #243a56;
  color: #f1582fe6;
  font-size: 1.2em;
  font-weight: heavy;
  padding: 0.5em 1em 0.5em 1em;
`;

const CardContent = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: center;
  align-items: center;
  color: #2f94f1;
  font-size: 1.4em;
  font-weight: heavy;
`;

const Vocabulary = () => (
  <Query query={VOCABULARY_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;
      const {
        vocabularyPeoples,
        vocabularyPlaceses,
        vocabularyVerbses,
        vocabularyHolidayses,
        vocabularyCivicses,
        vocabularyQuestionWordses,
        vocabularyOtherContents,
        vocabularyOtherFunctions,
      } = data;
      return (
        <div>
          <Header />
          <GridContent>
            {vocabularyPeoples.map(data => (
              <VocabCard key={data.id} category="People" word={data.people} />
            ))}
            {vocabularyPlaceses.map(data => (
              <VocabCard key={data.id} category="Places" word={data.place} />
            ))}
            {vocabularyVerbses.map(data => (
              <VocabCard key={data.id} category="Verbs" word={data.verb} />
            ))}
            {vocabularyHolidayses.map(data => (
              <VocabCard
                key={data.id}
                category="Holidays"
                word={data.holiday}
              />
            ))}
            {vocabularyCivicses.map(data => (
              <VocabCard key={data.id} category="Civics" word={data.civic} />
            ))}
            {vocabularyQuestionWordses.map(data => (
              <VocabCard
                key={data.id}
                category="Question Words"
                word={data.question_word}
              />
            ))}
            {vocabularyOtherContents.map(data => (
              <VocabCard
                key={data.id}
                category="Other Content"
                word={data.other_content}
              />
            ))}
            {vocabularyOtherFunctions.map(data => (
              <VocabCard
                key={data.id}
                category="Other Function"
                word={data.other_function}
              />
            ))}
          </GridContent>
        </div>
      );
    }}
  </Query>
);

const VOCABULARY_QUERY = gql`
  {
    vocabularyPeoples {
      id
      people
    }
    vocabularyPlaceses {
      id
      place
    }
    vocabularyHolidayses {
      id
      holiday
    }
    vocabularyVerbses {
      id
      verb
    }
    vocabularyCivicses {
      id
      civic
    }
    vocabularyQuestionWordses {
      id
      question_word
    }
    vocabularyOtherContents {
      id
      other_content
    }
    vocabularyOtherFunctions {
      id
      other_function
    }
  }
`;

export default withData(Vocabulary);
