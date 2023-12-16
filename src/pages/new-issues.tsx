import Divder from '../common-ui/divider';
import Heading from '../common-ui/heading';
import CreateIssueForm from '../presentation/issue/create-issue-form';

function NewIssues() {
  return (
    <>
      <Heading>새로운 이슈 작성</Heading>

      <Divder />

      <CreateIssueForm />
    </>
  );
}
export default NewIssues;
