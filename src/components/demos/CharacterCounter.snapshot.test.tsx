/**
 * snapshots unit testing docs https://jestjs.io/docs/tutorial-react#snapshot-testing
 */
import renderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './CharacterCounter';

describe('CharacterCounter snapshot unit test', () => {
  const component = renderer.create(
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>,
  );
  it('bacic test', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
