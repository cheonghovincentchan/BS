/**
 * snapshots unit testing docs https://jestjs.io/docs/tutorial-react#snapshot-testing
 */
import renderer from 'react-test-renderer';
import TextInput from './TextInput';

jest.mock('@ant-design/icons/ExclamationCircleFilled', () => () => {
  return <span data-testid="ExclamationCircleFilled" />;
});
jest.mock('@ant-design/icons/CheckCircleFilled', () => () => {
  return <span data-testid="CheckCircleFilled" />;
});

describe('TextInput snapshot unit test', () => {
  it('bacic test', () => {
    const component = renderer.create(<TextInput />);
    const tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
    renderer.act(() => {
      tree.props.status = 'success';
    });
  });
  it('status test', () => {
    const component = renderer.create(<TextInput status="success" helpText="helptext" />);
    const tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();

    const component2 = renderer.create(<TextInput status="error" helpText="helptext" />);
    const tree2 = component2.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree2).toMatchSnapshot();

    const component3 = renderer.create(<TextInput status="warning" helpText="helptext" />);
    const tree3 = component3.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree3).toMatchSnapshot();
  });
});
