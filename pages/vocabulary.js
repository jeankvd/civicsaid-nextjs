import Layout from '../components/Layout';
import withData from '../apollo/withData';
import { graphql, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Card from '../components/Card';

const VocabCard = ({ category, word }) => (
  <Card category={category}>
    <h3>{word}</h3>
  </Card>
);

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
        <Layout>
          <div>
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
                category="Question Words"
                word={data.other_content}
              />
            ))}
            {vocabularyOtherFunctions.map(data => (
              <VocabCard
                key={data.id}
                category="Question Words"
                word={data.other_function}
              />
            ))}
          </div>
        </Layout>
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
